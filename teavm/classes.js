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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hg=f;}
function $rt_cls(cls){return AER(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gj(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b8.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ASo(t);}
function $rt_throwableCause(t){return ASv(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AYS());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AYT(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AYU());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BF=$rt_compare;var AYV=$rt_nullCheck;var F=$rt_cls;var R=$rt_createArray;var Ji=$rt_isInstance;var AYW=$rt_nativeThread;var AYX=$rt_suspending;var AYY=$rt_resuming;var AYZ=$rt_invalidPointer;var C=$rt_s;var Bq=$rt_eraseClinit;var W=$rt_imul;var Ew=$rt_wrapException;var AY0=$rt_checkBounds;var AY1=$rt_checkUpperBound;var AY2=$rt_checkLowerBound;var AY3=$rt_wrapFunction0;var AY4=$rt_wrapFunction1;var AY5=$rt_wrapFunction2;var AY6=$rt_wrapFunction3;var AY7=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var ADD=$rt_createCharArrayFromData;var AXu=$rt_createByteArrayFromData;var AYN=$rt_createShortArrayFromData;var Eq=$rt_createIntArrayFromData;var AY8=$rt_createBooleanArrayFromData;var AY9=$rt_createFloatArrayFromData;var AY$=$rt_createDoubleArrayFromData;var ABX=$rt_createLongArrayFromData;var AYQ=$rt_createBooleanArray;var D7=$rt_createByteArray;var AY_=$rt_createShortArray;var BW=$rt_createCharArray;var BL=$rt_createIntArray;var AZa=$rt_createLongArray;var AHU=$rt_createFloatArray;var AZb
=$rt_createDoubleArray;var BF=$rt_compare;var AZc=$rt_castToClass;var AZd=$rt_castToInterface;var AZe=Long_toNumber;var Bp=Long_fromInt;var AZf=Long_fromNumber;var D=Long_create;var Fe=Long_ZERO;var AZg=Long_hi;var GF=Long_lo;
function B(){this.$id$=0;}
function AZh(){var a=new B();AF4(a);return a;}
function AF4(a){}
function BG(a){return AER(a.constructor);}
function AO4(a,b){return a!==b?0:1;}
function AJL(a){var b,c,d,e,f,g,h,i,j;b=JP(a);if(!b)c=C(0);else{d=(((32-Pb(b)|0)+4|0)-1|0)/4|0;e=BW(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=HM((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gj(e);}j=new M;O(j);H(H(j,C(1)),c);return N(j);}
function JP(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AOh(a){var b,c,d;if(!Ji(a,Ek)&&a.constructor.$meta.item===null){b=new Xq;Y(b);K(b);}b=AH3(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Tr(){var a=this;B.call(a);a.xi=0;a.sY=null;}
function AXN(b){var c,d,e,f,g,h,i,j,k,l;AF2();AA_();AEg();AFm();AHv();ACO();AEq();AF5();ADh();AGE();AA8();AE8();AE$();ADX();ACV();ADn();AGs();AB9();ADp();ABi();AEy();AFf();ABB();AHg();c=(ABo()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))QO(C(2),C(3));else{d=new Tr;BR(d);e=new VH;e.uH=d;f=new Oz;c=new $rt_globals.Worker("teavm/worker.js");g=new Pg;g.q_=c;g.ra=e;g.rb=f;e=Bm(g,"f");c.onmessage=e;h=I(MF,[KK(C(4),C(5),400),KK(C(6),C(7),400),
KK(C(8),C(5),700),KK(C(9),C(7),700)]);b=R(MF,1);b.data[0]=ATt(C(10),FC(C(11),C(12)),C(5),400);b=(MA(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.t3;f=c.sQ;k=new M;O(k);BI(H(H(k,C(13)),f),41);k=N(k);f=c.sL;l=c.qV;f=AMa($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BR(d);c=new VI;c.v0=d;g=new VG;e.then(Bm(c,"f"),Bm(g,"f"));}}
function AD2(b){var c,d,e,f,g,h,i,j,k;c=new Uv;d=new TB;c.rW=new $rt_globals.TextDecoder("utf-16");e=new Xp;e.qP=c;c.tB=e;e=new Xm;e.xA=c;c.nU=e;f=new Xn;f.tu=c;c.v9=new $rt_globals.ResizeObserver(Bm(f,"f"));e=new Xk;e.qe=c;c.oT=e;c.jt=1;f=new QM;f.As=null;f.kK=AZi;c.nn=f;c.sq=b;f=new Xl;f.wk=c;e=Bm(f,"f");b.onmessage=e;e=ADW();b.postMessage(e);c.oJ=(Em()).getElementById("canvasDiv");b=ABo();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dZ
=b;c.oJ.appendChild(b);f=c.dZ;e=AQF(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)QO(C(2),C(14));else{g=new Rc;e=c.dZ;f=c.nU;g.dU=null;g.hW=e;g.cr=AXX(f);h=$rt_globals.window;i=R(Dx,14);j=i.data;k=new YB;k.pk=g;j[0]=CX(g,e,C(15),k);f=new YC;f.ub=g;j[1]=CX(g,e,C(16),f);f=new YD;f.qH=g;j[2]=CX(g,e,C(17),f);f=new YE;f.xt=g;j[3]=CX(g,e,C(18),f);f=new YF;f.tn=g;j[4]=CX(g,e,C(19),f);f=new YG;f.pL=g;j[5]=CX(g,e,C(20),f);k=new YH;k.xK=g;j[6]=CX(g,e,C(21),k);k=new YI;k.tx=g;j[7]=CX(g,e,C(22),k);k=new YJ;k.p1
=g;j[8]=CX(g,e,C(23),k);k=new YK;k.wt=g;j[9]=CX(g,e,C(24),k);k=new AAh;k.vR=g;j[10]=CX(g,e,C(25),k);k=new AAi;k.uz=g;j[11]=AE2(g,h,C(26),k,1);k=new AAj;k.oq=g;j[12]=CX(g,h,C(27),k);k=new AAk;k.wT=g;j[13]=CX(g,h,C(28),k);g.zH=AUU(i);AC6(g,e);c.mZ=g;c.gM=AXf(b,c.nU);AS0(c.v9,c.dZ);e=$rt_globals.window;g=c.oT;e.addEventListener("resize",Bm(g,"handleEvent"));c.fU=AEd(d,ACX(c));U8(c);}AFA(c);}
var Ot=G(0);
var NE=G(0);
function Yw(){var a=this;B.call(a);a.lI=null;a.gw=null;}
function AER(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Yw;c.gw=b;d=c;b.classObject=d;}return c;}
function IF(a){if(a.lI===null)a.lI=$rt_str(a.gw.$meta.name);return a.lI;}
function Ip(a){return a.gw.$meta.primitive?1:0;}
function IL(a){return AER(a.gw.$meta.item);}
var ACd=G();
function Bm(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function L$(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ABQ=G();
function AH3(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AEU(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AEU(d[e],c))return 1;e=e+1|0;}return 0;}
function GZ(){var a=this;B.call(a);a.ik=null;a.mi=null;a.ke=0;a.kP=0;}
function AZj(){var a=new GZ();Y(a);return a;}
function AZk(a){var b=new GZ();Bk(b,a);return b;}
function Y(a){a.ke=1;a.kP=1;}
function Bk(a,b){a.ke=1;a.kP=1;a.ik=b;}
function ALM(a){return a;}
function ASo(a){return a.ik;}
function ASv(a){var b;b=a.mi;if(b===a)b=null;return b;}
var Ej=G(GZ);
var Bv=G(Ej);
function AYT(a){var b=new Bv();AUz(b,a);return b;}
function AUz(a,b){Bk(a,b);}
var AD0=G(Bv);
var CP=G(0);
var CG=G(0);
var Jt=G(0);
function BA(){var a=this;B.call(a);a.b8=null;a.iQ=0;}
var AZl=null;var AZm=null;var AZn=null;function E6(){E6=Bq(BA);AT5();}
function AMH(){var a=new BA();AA0(a);return a;}
function Gj(a){var b=new BA();HW(b,a);return b;}
function ET(a,b,c){var d=new BA();Nn(d,a,b,c);return d;}
function AA0(a){E6();a.b8=AZl;}
function HW(a,b){E6();Nn(a,b,0,b.data.length);}
function Nn(a,b,c,d){var e;E6();e=BW(d);a.b8=e;DB(b,c,e,0,d);}
function Ng(b){var c;E6();c=AMH();c.b8=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b8.data;if(b<c.length)return c[b];}d=new HJ;Y(d);K(d);}
function J(a){return a.b8.data.length;}
function FJ(a){return a.b8.data.length?0:1;}
function RD(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){DB(a.b8,b,d,e,c);return;}}g=new BC;Y(g);K(g);}
function Wb(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Lr(a,b){if(a===b)return 1;return Wb(a,b,0);}
function D9(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function G$(a,b,c){var d,e,f,g,h;d=Be(0,c);if(b<65536){e=b&65535;while(true){f=a.b8.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=IJ(b);h=Jm(b);while(true){f=a.b8.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Gt(a,b,c){var d,e,f,g,h;d=Bc(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b8.data[d]==e)break;d=d+(-1)|0;}return d;}f=IJ(b);g=Jm(b);while(true){if(d<1)return (-1);h=a.b8.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function ACF(a,b,c){var d,e,f;d=Be(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function RB(a,b,c){var d,e;d=Bc(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ch(a,b,c){var d,e;d=BF(b,c);if(d>0){e=new BC;Y(e);K(e);}if(!d){E6();return AZm;}if(!b&&c==J(a))return a;return ET(a.b8,b,c-b|0);}
function Do(a,b){return Ch(a,b,J(a));}
function RQ(a,b,c){return Ch(a,b,c);}
function FC(a,b){var c,d,e,f,g,h;if(FJ(b))return a;if(FJ(a))return b;c=BW(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Ng(c);}
function W0(a,b,c){var d,e,f,g;d=new M;O(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BI(d,P(a,f));}f=f+1|0;}H(d,Do(a,f));return N(d);}
function TE(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Ch(a,b,c+1|0);}
function AJJ(a){return a;}
function FK(a){var b,c,d,e,f;b=a.b8.data;c=BW(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function CB(b){E6();return b===null?C(29):b.cJ();}
function C8(b){var c;E6();c=new M;O(c);return N(V(c,b));}
function Bl(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BA))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function IT(a){var b,c,d,e;a:{if(!a.iQ){b=a.b8.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.iQ=(31*a.iQ|0)+e|0;d=d+1|0;}}}return a.iQ;}
function MY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new G5;Bk(b,C(30));K(b);}AZo=1;d=new S0;d.lq=R(CT,10);d.gU=(-1);d.fb=(-1);d.bx=(-1);e=new Hb;e.e9=1;e.bN=b;e.bg=BW(J(b)+2|0);DB(FK(b),0,e.bg,0,J(b));f=e.bg.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.tp=g;e.gC=0;Fs(e);Fs(e);d.h=e;d.dI=0;d.mv=Z7(d,(-1),0,null);if(!Dn(d.h)){b=new Jo;h=d.h;J$(b,C(31),h.bN,h.dm);K(b);}if(d.pn)d.mv.eJ();b=BJ();h=new Uj;h.jp=(-1);h.lN=(-1);h.yJ=d;h.v6=d.mv;h.jK=a;h.jp=0;g=J(a);h.lN=g;e=new W2;i=h.jp;j=d.gU;k=d.fb+1|0;l=d.bx+
1|0;e.it=(-1);m=j+1|0;e.qr=m;e.dY=BL(m*2|0);f=BL(l);e.kC=f;H2(f,(-1));if(k>0)e.mj=BL(k);H2(e.dY,(-1));ZU(e,a,i,g);h.cB=e;e.fM=1;n=0;m=0;if(!J(a)){f=R(BA,1);f.data[0]=C(31);}else{while(true){l=J(h.jK);if(!ABe(h))l=h.lN;e=h.cB;if(e.eB>=0&&ADa(e)==1){e=h.cB;e.eB=JM(e);if(JM(h.cB)==AFl(h.cB)){e=h.cB;e.eB=e.eB+1|0;}g=h.cB.eB;g=g<=l&&NM(h,g)?1:0;}else g=NM(h,h.jp);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BH(b,RQ(a,m,AG4(h)));m=ACS(h);n=g;}a:{BH(b,RQ(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Bs(b,
g)))break a;ED(b,g);}}if(g<0)g=0;f=Ih(b,R(BA,g));}return f;}
function AL3(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Bc(J(a),J(b));e=0;while(true){if(e>=d){c=J(a)-J(b)|0;break a;}c=P(a,e)-P(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AT5(){AZl=BW(0);AZm=AMH();AZn=new US;}
var E3=G(GZ);
var HN=G(E3);
var ADw=G(HN);
var D6=G();
function GG(){D6.call(this);this.bA=0;}
var AZp=null;var AZq=null;function ATO(a){var b=new GG();ACA(b,a);return b;}
function ACA(a,b){a.bA=b;}
function Me(b){return (OR(AYC(20),b,10)).cJ();}
function Ko(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dk;Bk(b,C(32));K(b);}d=J(b);if(0==d){b=new Dk;Bk(b,C(33));K(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dk;Y(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=QI(P(b,f));if(i<0){j=new Dk;k=Ch(b,0,d);b=new M;O(b);H(H(b,C(34)),k);Bk(j,N(b));K(j);}if(i>=c){j=new Dk;l=Ch(b,0,d);b=new M;O(b);H(H(V(H(b,C(35)),c),C(36)),l);Bk(j,N(b));K(j);}g=W(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dk;k=Ch(b,0,d);b=new M;O(b);H(H(b,C(37)),k);Bk(j,N(b));K(j);}b=new Dk;j=new M;O(j);V(H(j,C(38)),c);Bk(b,N(j));K(b);}
function Di(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AZq===null){AZq=R(GG,256);c=0;while(true){d=AZq.data;if(c>=d.length)break a;d[c]=ATO(c-128|0);c=c+1|0;}}}return AZq.data[b+128|0];}return ATO(b);}
function AVo(a,b){if(a===b)return 1;return b instanceof GG&&b.bA==a.bA?1:0;}
function Pb(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function IW(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AOa(a,b){b=b;return BF(a.bA,b.bA);}
function AF2(){AZp=F($rt_intcls());}
function GK(){var a=this;B.call(a);a.B=null;a.M=0;}
function AZr(){var a=new GK();O(a);return a;}
function AYC(a){var b=new GK();Gq(b,a);return b;}
function O(a){Gq(a,16);}
function Gq(a,b){a.B=BW(b);}
function OR(a,b,c){return ADN(a,a.M,b,c);}
function ADN(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cj(a,b,b+1|0);else{Cj(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=HM(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=W(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cj(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=HM($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AEI(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BF(c,0.0);if(!d){if(1.0/c===Infinity){Cj(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cj(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cj(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cj(a,b,b+8|0);d=b;}else{Cj(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AZs;AEz(c,f);d=f.lT;g=f.lA;h=f.pA;i=1;j=1;if(h)j=2;k=9;l=ATy(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Be(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cj(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.B.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.B.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.B.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.B.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ACv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BF(c,0.0);if(!d){if(1.0/c===Infinity){Cj(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cj(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cj(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cj(a,b,b+8|0);d=b;}else{Cj(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AZt;ADR(c,f);g=f.mx;h=f.lj;i=f.pj;j=1;k=1;if(i)k=2;l=18;m=AQ5(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Be(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cj(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.B.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ALh(p,Fe))d=0;else{d=GF(AFu(g,p));g=AH8(g,p);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AFu(p,Bp(10));q=q+1|0;}if(h){e=a.B.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ATy(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AQ5(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=AZu.data;g=f.length-1|0;while(g>=0){if(Ic(AH8(b,B_(c,f[g])),Fe)){d=d|e;c=B_(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BI(a,b){return a.nv(a.M,b);}
function ZI(a,b,c){Cj(a,b,b+1|0);a.B.data[b]=c;return a;}
function Ku(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.B=Kk(a.B,d);}
function N(a){return ET(a.B,0,a.M);}
function Zu(a,b,c,d){return a.mY(a.M,b,c,d);}
function Oi(a,b,c,d,e){var f,g,h,i;Cj(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function IZ(a,b){return a.l0(b,0,b.data.length);}
function Cj(a,b,c){var d,e,f,g;d=a.M;e=d-b|0;a.iG((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.M=a.M+(c-b|0)|0;}
var Iv=G(0);
var M=G(GK);
function ML(){var a=new M();AU9(a);return a;}
function AU9(a){O(a);}
function H(a,b){var c;c=a.M;if(b===null)b=C(29);Nj(a,c,b);return a;}
function BV(a,b){Nj(a,a.M,b);return a;}
function V(a,b){OR(a,b,10);return a;}
function GL(a,b){var c,d,e,f,g,h,i,j;c=a.M;d=1;if(AW0(b,Fe)){d=0;b=AXH(b);}a:{if(Du(b,Bp(10))<0){if(d)Cj(a,c,c+1|0);else{Cj(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=HM(GF(b),10);}else{g=1;h=Bp(1);i=Dd(Bp(-1),Bp(10));b:{while(true){j=B_(h,Bp(10));if(Du(j,b)>0){j=h;break b;}g=g+1|0;if(Du(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cj(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(Ic(j,Fe))break a;e=a.B.data;c=f+1|0;e[f]=HM(GF((Dd(b,j))),10);b=ABd(b,j);j=Dd(j,Bp(10));f=c;}}}return a;}
function FH(a,b){AEI(a,a.M,b);return a;}
function AAV(a,b){BI(a,b);return a;}
function Gx(a,b){Nj(a,a.M,!b?C(39):C(40));return a;}
function AGJ(a,b,c){var d,e,f,g,h,i;d=BF(b,c);if(d<=0){e=a.M;if(b<=e){if(d){f=e-c|0;a.M=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new HJ;Y(i);K(i);}
function Yb(a,b){var c,d,e,f;if(b>=0){c=a.M;if(b<c){c=c-1|0;a.M=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new HJ;Y(f);K(f);}
function AN7(a,b,c,d,e){Oi(a,b,c,d,e);return a;}
function AK0(a,b,c,d){Zu(a,b,c,d);return a;}
function ABC(a){return a.M;}
function D3(a){return N(a);}
function AOd(a,b){Ku(a,b);}
function AOM(a,b,c){ZI(a,b,c);return a;}
function Nj(a,b,c){var d,e,f;if(b>=0&&b<=a.M){a:{if(c===null)c=C(29);else if(FJ(c))break a;Ku(a,a.M+J(c)|0);d=a.M-1|0;while(d>=b){a.B.data[d+J(c)|0]=a.B.data[d];d=d+(-1)|0;}a.M=a.M+J(c)|0;d=0;while(d<J(c)){e=a.B.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new HJ;Y(c);K(c);}
var EF=G(HN);
var AE0=G(EF);
function AZv(a){var b=new AE0();AJU(b,a);return b;}
function AJU(a,b){Bk(a,b);}
var ADf=G(EF);
function AZw(a){var b=new ADf();AKb(b,a);return b;}
function AKb(a,b){Bk(a,b);}
var Vu=G(0);
var Dx=G(0);
function AUU(b){var c;c=new Sg;c.yX=b;return c;}
function CK(b,c){if(b!==null)b.ej();return c;}
var QC=G(0);
function Jf(){var a=this;B.call(a);a.lh=0;a.m9=0;a.me=0;}
var AZx=0;function EK(a){AZx=AZx-1|0;}
function Gu(a,b,c){J3(a,ACp(b,c,400,0));}
function SV(a,b){return LC(a,b,0.875);}
function LC(a,b,c){return DV(a,b)+c|0;}
function Tj(){var a=this;Jf.call(a);a.iN=null;a.c1=null;a.ov=null;}
function EM(a){var b,c,d;b=a.c1;c=a.m9;d=a.me;b.clearRect(0.0,0.0,c,d);}
function TT(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c1;d="center";c.textAlign=d;break a;case 2:c=a.c1;d="right";c.textAlign=d;break a;default:break a;}d=a.c1;c="left";d.textAlign=c;}}
function Cu(a,b){J3(a,GB(b.o1));}
function J3(a,b){var c;if(!(a.ov==b?1:0)){c=a.c1;a.ov=b;c.font=b;}}
function ACp(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BM(a,b,c,d){var e,f,g;e=a.c1;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function DV(a,b){var c;c=$rt_ustr(b);return a.c1.measureText(c).width;}
function I5(a,b,c,d){var e,f;e=a.c1;f=$rt_ustr(Gj(ADD([35,G7(b/16|0),G7(b%16|0),G7(c/16|0),G7(c%16|0),G7(d/16|0),G7(d%16|0)])));e.fillStyle=f;}
function AJg(){return {alpha:false};}
var ABa=G();
var AGg=G();
function BX(b,c){if(b===c)return 1;return b!==null?b.bM(c):c!==null?0:1;}
function BR(b){if(b!==null)return b;b=new G5;Bk(b,C(31));K(b);}
var Z=G(0);
function VH(){B.call(this);this.uH=null;}
var Bz=G(0);
var AEc=G();
var ABg=G(0);
function KK(b,c,d){return ATt(C(41),FC(C(11),b),c,d);}
var AFS=G(0);
var AFO=G(0);
function MA(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dp(b,f+g|0);DB(c,0,d,f,g);return d;}
function LP(b,c,d){DB(b,c,d,0,d.data.length);return d;}
function S$(b,c,d){var e;if(c>0)DB(b,0,d,0,c);e=d.data.length;if(c<e)DB(b,c+1|0,d,c,e-c|0);return d;}
function ADo(b,c,d,e){var f;if(c>0)DB(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DB(b,d,e,c,f-d|0);}return e;}
function Fo(b){var c;c=new XX;c.jV=b;return c;}
function Q2(b,c){if(b.data.length!=c)b=Dp(b,c);return b;}
function AFN(b,c,d){var e;e=c.data.length;if(e==d)c=Dp(c,e*2|0);c.data[d]=b;return c;}
function MF(){var a=this;B.call(a);a.t3=null;a.sQ=null;a.sL=null;a.qV=0;}
function ATt(a,b,c,d){var e=new MF();ASa(e,a,b,c,d);return e;}
function ASa(a,b,c,d,e){a.t3=b;a.sQ=c;a.sL=d;a.qV=e;}
var AB_=G();
function AMa(b,c){return {style:b,weight:c};}
var BZ=G(0);
function VI(){B.call(this);this.v0=null;}
function AHA(a,b){var c,d,e;c=a.v0;d=0;while(d<b.length){e=b[d];(Em()).fonts.add(e);d=d+1|0;}c.xi=1;b=c.sY;if(b!==null)AD2(b);}
var VG=G();
function AUa(a,b){$rt_globals.console.info("font load error "+b);}
var Md=G();
var AZy=null;var AZz=null;function Bx(){if(AZy===null)AZy=APF(AZA,0);return AZy;}
function Ff(){if(AZz===null)AZz=APF(AZB,0);return AZz;}
function AXA(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mi(b)&&(e+f|0)<=Mi(d)){a:{b:{if(b!==d){g=IL(BG(b));h=IL(BG(d));if(g!==null&&h!==null){if(g===h)break b;if(!Ip(g)&&!Ip(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.gw;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AEU(n.constructor,o)?1:0)){Lt(b,c,d,e,j);b=new Jn;Y(b);K(b);}j=j+1|0;k=m;}Lt(b,c,d,e,f);return;}if(!Ip(g))break a;if(Ip(h))break b;else break a;}b=new Jn;Y(b);K(b);}}Lt(b,c,
d,e,f);return;}b=new Jn;Y(b);K(b);}b=new BC;Y(b);K(b);}d=new G5;Bk(d,C(42));K(d);}
function DB(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mi(b)&&(e+f|0)<=Mi(d)){Lt(b,c,d,e,f);return;}b=new BC;Y(b);K(b);}
function Lt(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EE(){return Long_fromNumber(new Date().getTime());}
function AFo(){return AZf($rt_globals.performance.now()*1000000.0);}
var AFL=G();
var ACT=G();
function QO(b,c){var d,e,f;d=(Em()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Em()).getElementById($rt_ustr(b)).appendChild(d);}
function ABo(){return (Em()).createElement("canvas");}
function AGR(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AQF(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AHu=G();
var Oz=G();
function AQn(a,b){var c;c=new Bv;Bk(c,$rt_str(b.message));K(c);}
var AF7=G();
function F1(b){return $rt_str(b);}
var ABt=G();
function Kk(b,c){var d,e,f,g;b=b.data;d=BW(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AGA(b,c){var d,e,f,g;b=b.data;d=D7(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JE(b,c){var d,e,f,g;b=b.data;d=BL(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dp(b,c){var d,e,f,g;d=b.data;e=AFk(IL(BG(b)),c);f=Bc(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ACm(b){var c,d,e;if(b===null)return C(29);c=new M;O(c);BV(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BV(c,C(44));H(c,e[d]);d=d+1|0;}BV(c,C(45));return N(c);}
function AFg(b){var c,d,e;if(b===null)return C(29);c=new M;O(c);BV(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BV(c,C(44));V(c,e[d]);d=d+1|0;}BV(c,C(45));return N(c);}
function ASK(b){var c,d,e;if(b===null)return C(29);c=new M;O(c);BV(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BV(c,C(44));FH(c,e[d]);d=d+1|0;}BV(c,C(45));return N(c);}
function AV7(b){var c,d,e,f;if(b===null)return C(29);c=new M;O(c);BV(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BV(c,C(44));f=e[d];ACv(c,c.M,f);d=d+1|0;}BV(c,C(45));return N(c);}
function H2(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BE;Y(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ABY(b,c,d,e){var f,g;if(c>d){e=new BE;Y(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ACQ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AZi;e=R(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bc(j,h+f|0);l=h+(2*f|0)|0;m=Bc(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.w4(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AEJ(b,c){return VP(b,0,b.data.length,c);}
function VP(b,c,d,e){var f,g,h,i,j;f=BF(c,d);if(f>0){g=new BE;Y(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var XD=G(0);
var AD1=G();
function AMM(a,b){return a.DA(b);}
function AO2(a){return a.Ab();}
var ADM=G();
var HI=G(0);
var US=G();
var BC=G(Bv);
var AEF=G();
function Mi(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AZC());}return b.data.length;}
function AFk(b,c){if(b===null){b=new G5;Y(b);K(b);}if(b===F($rt_voidcls())){b=new BE;Y(b);K(b);}if(c>=0)return AUK(b.gw,c);b=new AAF;Y(b);K(b);}
function AUK(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var G5=G(Bv);
var Jn=G(Bv);
var C_=G();
var AZD=null;var AZE=null;var AZF=null;var AZG=null;var AZH=null;var AZI=null;var AZJ=null;var AZK=null;var AZL=null;var AZM=null;function Zg(b){var c,d;c=new BA;d=BW(1);d.data[0]=b;HW(c,d);return c;}
function M4(b){return b>=65536&&b<=1114111?1:0;}
function CI(b){return (b&64512)!=55296?0:1;}
function C7(b){return (b&64512)!=56320?0:1;}
function M8(b){return !CI(b)&&!C7(b)?0:1;}
function HU(b,c){return CI(b)&&C7(c)?1:0;}
function EH(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IJ(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jm(b){return (56320|b&1023)&65535;}
function Fh(b){return G4(b)&65535;}
function G4(b){if(AZG===null){if(AZJ===null)AZJ=AFe();AZG=ADr((AZJ.value!==null?$rt_str(AZJ.value):null));}return Up(AZG,b);}
function EO(b){return G1(b)&65535;}
function G1(b){if(AZF===null){if(AZK===null)AZK=AF3();AZF=ADr((AZK.value!==null?$rt_str(AZK.value):null));}return Up(AZF,b);}
function Up(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BF(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Wz(b,c){if(c>=2&&c<=36){b=QI(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function QI(b){var c,d,e,f,g,h,i,j,k,l;if(AZE===null){if(AZL===null)AZL=ADy();c=(AZL.value!==null?$rt_str(AZL.value):null);d=ASw(FK(c));e=KE(d);f=BL(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Ou(d)|0;j=j+Ou(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AZE=f;}g=AZE.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BF(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function HM(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GV(b){var c;if(b<65536){c=BW(1);c.data[0]=b&65535;return c;}return ADD([IJ(b),Jm(b)]);}
function Cz(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&M8(b&65535))return 19;if(AZH===null){if(AZM===null)AZM=AHm();d=(AZM.value!==null?$rt_str(AZM.value):null);e=R(OK,16384);f=e.data;g=D7(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Ls(P(d,l));if(m==64){l=l+1|0;m=Ls(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|W(c,Ls(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Ls(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ALY(k,k+i|0,AGA(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ALY(k,k+i|0,AGA(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AZH=Dp(e,j);}e=AZH.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.s_)o=p+1|0;else{c=d.q8;if(b>=c)return d.rn.data[b-c|0];c=p-1|0;}}return 0;}
function Kl(b){a:{switch(Cz(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function GN(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cz(b)!=16?0:1;}
function Rf(b){switch(Cz(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function S2(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Rf(b);}return 1;}
function AA_(){AZD=F($rt_charcls());AZI=R(C_,128);}
function AFe(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AF3(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ADy(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AHm(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Ny=G(0);
var Uo=G(0);
var Ey=G(0);
var AGf=G(0);
function Em(){return $rt_globals.window.document;}
function Pg(){var a=this;B.call(a);a.q_=null;a.ra=null;a.rb=null;}
function ARs(a,b){var c,d,e;c=a.q_;d=a.ra;e=a.rb;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=GB(Lv(c));c=d.uH;c.sY=b;if(c.xi)AD2(b);}}
var ADH=G();
function DQ(){return AVS();}
function AVS(){return Math.random();}
function Bc(b,c){if(b<c)c=b;return c;}
function Be(b,c){if(b>c)c=b;return c;}
function AUQ(b,c){return Math.max(b,c);}
function NH(b){if(b<0)b= -b|0;return b;}
function AMA(b){return Math.abs(b);}
var Q8=G(0);
var Th=G(0);
var S7=G(0);
var Vq=G(0);
var Zv=G(0);
var WA=G(0);
var Qi=G(0);
var QD=G(0);
var ABf=G();
function AQz(a,b){b=a.j7(b);Lk();return b===null?null:b instanceof $rt_objcls()&&b instanceof EC?GB(b):b;}
function ATb(a,b,c){a.HJ($rt_str(b),L$(c,"handleEvent"));}
function ASy(a,b,c){a.EB($rt_str(b),L$(c,"handleEvent"));}
function AQu(a,b,c,d){a.CB($rt_str(b),L$(c,"handleEvent"),d?1:0);}
function AUx(a,b){return !!a.HP(b);}
function AJ4(a){return a.Ab();}
function AH2(a,b,c,d){a.Gi($rt_str(b),L$(c,"handleEvent"),d?1:0);}
var BE=G(Bv);
var AAF=G(Bv);
function EC(){B.call(this);this.uf=null;}
var AZN=null;var AZO=null;var AZP=null;var AZQ=null;var AZR=null;var AZS=null;function Lk(){Lk=Bq(EC);AJ_();}
function N3(a){var b=new EC();AEt(b,a);return b;}
function AEt(a,b){Lk();a.uf=b;}
function Lv(b){var c,d,e,f,g,h;Lk();if(b===null)return null;a:{c=b;if(AZO!==null){d=$rt_str(typeof c);if(!Bl(d,C(46))&&!Bl(d,C(47))){if(Bl(d,C(48))){e=AZP.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=N3(c);h=g;AZP.set(c,new $rt_globals.WeakRef(h));O7(AZR,h,c);return g;}if(!Bl(d,C(49)))break a;else{e=AZQ.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=N3(c);h=g;AZQ.set(c,new $rt_globals.WeakRef(h));O7(AZS,
h,c);return g;}}e=AZO.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=N3(c);AZO.set(c,new $rt_globals.WeakRef(g));return g;}}return N3(c);}
function GB(b){Lk();if(b!==null)return b.uf;return null;}
function Uz(b){Lk();if(b===null)return null;return b instanceof $rt_objcls()?b:Lv(b);}
function AJ_(){AZN=new $rt_globals.WeakMap();AZO=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();AZP=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AZQ=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AZR=AZP===null?null:new $rt_globals.FinalizationRegistry(Bm(new Qx,"accept"));AZS=AZQ===null?null:new $rt_globals.FinalizationRegistry(Bm(new Qy,"accept"));}
function O7(b,c,d){return b.register(c,d);}
var AG1=G();
var AC_=G();
var AHp=G();
var KM=G(0);
var Qx=G();
function AJ2(a,b){var c;b=Uz(b);c=AZP;b=GB(b);c.delete(b);}
var ADu=G();
var Qy=G();
function AH4(a,b){var c;b=Uz(b);c=AZQ;b=GB(b);c.delete(b);}
var HJ=G(BC);
var ACB=G();
function ADW(){return "ping";}
var Qh=G(0);
function Uv(){var a=this;B.call(a);a.rW=null;a.tB=null;a.nU=null;a.oJ=null;a.dZ=null;a.v9=null;a.oT=null;a.mZ=null;a.gM=null;a.jt=0;a.zp=0;a.s5=null;a.fU=null;a.sq=null;a.nn=null;a.uN=0;}
function AFA(a){a.dZ.focus();}
function OV(a,b){var c;c=Em();b=$rt_ustr(b);c.title=b;}
function ACX(a){var b,c,d;b=new Nz;c=a.gM;d=a.mZ.cr;b.I=c;b.m=d;b.bW=a;return b;}
function U8(a){a.zp=$rt_globals.requestAnimationFrame(Bm(a.tB,"onAnimationFrame"));}
function Fv(a){a.jt=1;}
function U6(a,b,c){var d,e;a.mZ.dU=B6(b,c);d=a.dZ;e=b;d.width=e;d=a.dZ;e=c;d.height=e;d=a.gM;U(d.c6,b,c);e=d.X;d=d.c6;b=d.a;c=d.b;e.viewport(0,0,b,c);a.fU.bV(a.gM.c6,Lu(a));a.fU.bv();}
function GW(a,b){var c,d,e;c=a.s5;d=a.dZ;if(BX(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.s5=b;}
function Ki(a){return $rt_globals.performance.now()/1000.0;}
function Lu(a){return $rt_globals.window.devicePixelRatio;}
function XY(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGX(b,1);else{c=new YT;d=$rt_globals.window.showDirectoryPicker();e=new YS;e.re=b;e.rf=c;d.then(Bm(e,"f"),Bm(c,"f"));}}
function MQ(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGX(b,0);else{c=new ZH;d=$rt_globals.window.showOpenFilePicker();e=new ZG;e.rQ=b;e.rP=c;d.then(Bm(e,"f"),Bm(c,"f"));}}
function CM(a,b,c,d){var e,f,g,h,i,j;d=d.data;e=a.uN+1|0;a.uN=e;f=a.nn;g=Di(e);f.iK=M6(f,f.iK,g);g=WG(f,g);NA(g,b);NA(g,b);f.kQ=f.kQ+1|0;b=a.sq;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;0;g[0]=f;c=$rt_ustr(c);1;g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof BA)f=$rt_ustr(c);else if(Ji(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(Ji(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(Ji(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof LT)){b=new BE;c
=IF(BG(c));f=new M;O(f);H(H(f,C(50)),c);Bk(b,N(f));K(b);}c=c;f=c.hr;if(f===null)f=c.fJ;}j=e+2|0;j;g[j]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function SX(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new SL;e.o5=b;b=AHr(c);d.then(Bm(e,"f"),Bm(b,"f"));}
function Wd(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.rW;b=(FK(b)).data;f=f.decode(b);b=e.writeText(f);e=new Wv;e.ue=c;c=AHr(d);b.then(Bm(e,"f"),Bm(c,"f"));}
function ZS(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AHr(b){var c;c=new NR;c.uw=b;return c;}
var B9=G(0);
var TB=G();
function AEd(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bl(C(51),c)){d=new Oy;Eg(d,b);b=$rt_globals.fetch("test.wasm");e=new OI;b=b.then(Bm(e,"f"));e=new OH;b=b.then(Bm(e,"f"));e=new OF;f=new OE;b.then(Bm(e,"f"),Bm(f,"f"));}else if(!Bl(C(52),c))d=(ATT(J(c)<=0?C(31):Do(c,1))).bQ(b);else{d=new XE;AC9(d,b);d.E.eg=1;d.D.eg=1;c=new VK;c.o7=d;Qp(d,c,C(53));c=new VL;c.uL=d;Qp(d,c,C(54));}return d;}
var Bh=G(0);
var AD_=G();
var ADC=G();
var S_=G(0);
function Xp(){B.call(this);this.qP=null;}
function ANg(a,b){var c,d;c=b;b=a.qP;if(!(!b.fU.cK(c/1000.0)&&!b.jt)){d=b.gM.c6;if(W(d.a,d.b)){b.jt=0;b.fU.bv();}}U8(b);}
function Xm(){B.call(this);this.xA=null;}
function Dm(a){Fv(a.xA);}
var R8=G(0);
function Xn(){B.call(this);this.tu=null;}
function ALj(a,b,c){var d,e,f,g;c=a.tu;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dZ){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lu(c);U6(c,HP(f.width*g),HP(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];U6(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AGn=G();
function AS0(b,c){ARR(b,c,AIc());}
function AIc(){return {box:'device-pixel-content-box'};}
function ARR(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Ct=G(0);
function Xk(){B.call(this);this.qe=null;}
function ARB(a,b){b=a.qe;b.fU.bV(b.gM.c6,Lu(b));b.fU.bv();}
var LS=G(0);
function Sh(a,b,c){var d;d=Cx(a,b);if(d===null)d=F$(a,b,c);return d;}
function D4(){var a=this;B.call(a);a.lC=null;a.lL=null;}
var Ek=G(0);
var ZR=G(0);
var Or=G(0);
function QM(){var a=this;D4.call(a);a.iK=null;a.kK=null;a.As=null;a.kQ=0;}
function WG(a,b){var c,d;c=a.iK;while(true){if(c===null)return null;d=Kn(a.kK,b,c.j2);if(!d)break;c=d>=0?c.b9:c.bP;}return c;}
function M6(a,b,c){var d,e;if(b===null){b=new Kh;d=null;b.j2=c;b.jw=d;b.f1=1;b.ge=1;return b;}e=Kn(a.kK,c,b.j2);if(!e)return b;if(e>=0)b.b9=M6(a,b.b9,c);else b.bP=M6(a,b.bP,c);Ez(b);return KD(b);}
function KZ(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Kn(a.kK,c,b.j2);if(d<0)b.bP=KZ(a,b.bP,c);else if(d>0)b.b9=KZ(a,b.b9,c);else{e=b.b9;if(e===null)return b.bP;f=b.bP;g=R(Kh,e.f1).data;h=0;while(true){b=e.bP;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b9;while(h>0){h=h+(-1)|0;j=g[h];j.bP=b;Ez(j);b=KD(j);}e.b9=b;e.bP=f;Ez(e);b=e;}Ez(b);return KD(b);}
function Xl(){B.call(this);this.wk=null;}
function ASY(a,b){var c,d,e,f,g,h,i,j,k;c=a.wk.nn;b=b.data;if(!(b===ADW()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BE;Y(b);K(b);}if(b.length<1){b=new BE;Y(b);K(b);}d=Di(b[0]);e=WG(c,d);if(e===null)c=null;else{c.iK=KZ(c,c.iK,d);c.kQ=c.kQ+1|0;c=e.jw;}f=R(B,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=F1(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new UC;AF4(e);e.ie=k;}else e=(k instanceof $rt_globals.File?1:0)?AEM(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AEM(k,null);g[h]=e;h=j;}c.g(f);}}
function Rc(){var a=this;B.call(a);a.cr=null;a.hW=null;a.zH=null;a.dU=null;}
function Ok(){return (Em()).activeElement;}
function CX(a,b,c,d){b.addEventListener($rt_ustr(c),Bm(d,"handleEvent"));return Y9(a,b,c,d);}
function AE2(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bm(d,"handleEvent"),!!e);return Y9(a,b,c,d);}
function Y9(a,b,c,d){var e;e=new R4;e.yx=b;e.yA=c;e.yz=d;return e;}
function VJ(a,b){var c;c=new WI;c.xs=b;return c;}
function EU(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.hW.getBoundingClientRect();e=B6(HP((b.clientX-d.left)*c),HP((b.clientY-d.top)*c));f=new Bf;g=a.dU;f.a=g.a;f.b=g.b;d=new Nw;Wf(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.i=e;d.x_=f;return d;}
function AAp(a,b,c){var d,e,f,g;d=new QH;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Wf(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.le=0;d.d6=e;d.bj=f;d.io=c;d.tE=g;return d;}
function DT(a,b){b.stopPropagation();b.preventDefault();}
function AC6(a,b){var c;c=new ZP;c.rw=b;b.onpointerdown=Bm(c,"f");c=new ZQ;c.qj=b;b.onpointerup=Bm(c,"f");}
function L6(){var a=this;B.call(a);a.mt=null;a.ci=null;a.X=null;a.j4=0;a.vh=null;a.y3=0;a.z9=0;a.kS=null;a.kw=null;a.Ao=null;a.Ae=null;a.fO=null;a.gj=null;a.im=null;a.ho=null;a.AC=null;a.qW=null;a.c6=null;a.w5=null;a.mT=0;a.k9=0;a.nx=0;a.ne=0;a.jg=0;a.ns=null;}
function AEV(a,b,c,d){var e,f,g,h,i,j;a.c6=new Bf;a.mT=0;a.ns=new YO;a.mt=c;a.j4=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);H(H(f,C(55)),e);$rt_globals.console.info($rt_ustr(N(f)));a.X=b;a.ci=Kf(c,4,4,1);g=AHU(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BW(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;c=new R5;KA();f=AZT;c.eK=b;c.g5=f;c.tK=h.length/f.lX|0;c.wV=j.length;f
=b.createBuffer();c.oN=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);c.xv=null;f=b.createBuffer();c.wD=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}f=null;b.bindBuffer(34962,f);f=null;b.bindBuffer(34963,f);a.qW=c;a.z9=Lr(e,C(56));c=new R6;c.dL=b;a.vh=c;d=b.getParameter(3379);a.y3=d;c=new M;O(c);V(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(N(c)));g=R(DC,8);i=g.data;c=new Ye;Jb(c,b,C(58),C(59),AZT);e=c.b1;c.wj=b.getUniformLocation(e,"uColor");a.kS=c;i[0]=c;c=AWI(b,
C(60));a.kw=c;i[1]=c;c=AXK(b);a.Ao=c;i[2]=c;c=AYf(b);a.Ae=c;i[3]=c;c=AXg(b);a.fO=c;i[4]=c;c=new ZJ;Z4(c,b,C(61),C(62));a.gj=c;i[5]=c;c=AYp(b);a.im=c;i[6]=c;c=AX$(b);a.ho=c;i[7]=c;a.AC=g;Zx(b,C(63));}
function Gm(a,b,c){return Hm(a,b,c,400,0);}
function GI(a,b,c){return Kf(a.mt,b,c,0);}
function Ef(a,b,c,d){return Kf(a.mt,b,c,d);}
function E9(a,b){var c,d,e,f,g;c=a.X;d=b.bp;e=b.bG;f=b.bl;g=b.bH;c.clearColor(d,e,f,g);a.X.clear(16384);}
function Cc(a,b){var c;if(b==a.k9)return b;if(!b)a.X.disable(3042);else{a.X.enable(3042);a.X.blendFuncSeparate(770,771,1,1);}c=a.k9;a.k9=b;return c;}
function Tv(a,b,c){Mp(a,b.a,b.b,c);}
function Mp(a,b,c,d){var e,f;e=d.a;f=d.b;a.ne=1;a.jg=1;d=a.ns;d.tc=b;d.te=c;d.tb=e;d.ta=f;Wg(a);}
function Hr(a){a.ne=0;a.jg=0;Wg(a);}
function Wg(a){var b,c,d,e,f,g;b=a.nx;c=a.ne;if(b!=c){a.nx=c;if(!c)a.X.disable(3089);else a.X.enable(3089);}if(a.nx&&a.jg){a.jg=0;d=a.X;e=a.ns;b=e.tc;c=a.c6.b-e.te|0;f=e.ta;c=c-f|0;g=e.tb;d.scissor(b,c,g,f);}}
function FO(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.qW;c=a.mT;d=b.g5.ut;e=b.eK;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eK;h=b.oN;e.bindBuffer(34962,h);i=b.g5.n2.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eK;m=k.h6;n=k.fG;o=b.g5.lX*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.fG|0;j=j+1|0;}a:{e=b.xv;if(e!==null){c=0;b.eK.bindBuffer(34962,e);i=b.g5.s1.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eK;j=e.h6;p=e.fG;m=e.q6;n=b.g5.rq;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.fG|0;g=g+1|0;}}}q=b.wD;if(q===null){c=b.tK;if(c>0)b.eK.drawArrays(4,0,c);}else{b.eK.bindBuffer(34963,q);k=b.eK;g=b.wV;k.drawElements(4,g,5123,0);}a.mT=d;}
function Bu(a,b,c,d,e){FQ(a,a.kS);Gf(a.kS,a.X,b,c,d,a.c6);d=a.kS;G8(a.X,d.wj,e);FO(a);}
function AAI(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;FQ(a,a.ho);Gf(a.ho,a.X,b,c,d,a.c6);j=a.ho;d=a.X;k=j.n5;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.n4;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.ho;G8(a.X,d.pK,i);FO(a);}
function Eb(a,b,c,d,e,f,g,h,i){FQ(a,a.fO);Gf(a.fO,a.X,b,c,d,a.c6);I6(a.fO,a.X,f);NY(a.fO,a.X,f,e);Vb(a.fO,a.X,g,h);d=a.fO;e=a.X;d=d.qM;e.uniform2f(d,i,0.0);FO(a);}
function Ed(a,b,c,d,e,f,g,h){FQ(a,a.gj);Gf(a.gj,a.X,b,c,d,a.c6);I6(a.gj,a.X,f);NY(a.gj,a.X,f,e);Vb(a.gj,a.X,g,h);FO(a);}
function CZ(a){var b,c;b=new Kg;c=a.vh;b.fl=new Bf;b.er=c;b.fv=c.dL.createTexture();AZU=AZU+1|0;return b;}
function Kr(a,b){Zx(a.X,b);}
function FQ(a,b){var c,d;if(b!==a.w5){c=a.X;d=b.b1;c.useProgram(d);a.w5=b;}}
function AFR(){var a=this;L6.call(a);a.zK=null;a.Ap=null;}
function AXf(a,b){var c=new AFR();ANA(c,a,b);return c;}
function ANA(a,b,c){AEV(a,b,new Wi,1);a.Ap=new Wh;a.zK=c;}
function Hm(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.ci;g=ACp(b,c,d,e);J3(f,g);h=f.c1.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=DV(f,C(64));m=DV(f,C(65));h=new LU;n=Lv(g);h.nG=b;h.yH=c;o=c|0;if(o!==c){b=new M;O(b);FH(H(b,C(66)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.q1=o;h.yP=d;h.zl=e;h.dt=i;h.eU=j;h.yG=l;h.no=k;h.o1=n;h.sU=C4(i);h.Ah=C4(h.eU);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.yM=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b
=C(67);}h.yw=b;return h;}
function Cn(){B.call(this);this.G=null;}
function Eg(a,b){a.G=b;}
function AVl(a,b){return 0;}
var JV=G();
var AZi=null;function Kn(a,b,c){return b.kR(c);}
function AEg(){AZi=new JV;}
function ACL(){var a=this;B.call(a);a.b7=null;a.nW=null;a.br=null;a.dB=null;a.eZ=null;a.f4=null;a.gG=null;a.kE=null;a.lw=null;a.dg=null;a.il=null;a.qa=0;}
function AXX(a){var b=new ACL();AQ2(b,a);return b;}
function AQ2(a,b){a.b7=CN(R(Cw,0));a.nW=CN(R(Cw,0));a.br=CN(R(Cs,0));a.dB=CN(R(DN,0));a.eZ=CN(R(EN,0));a.f4=CN(R(E4,0));a.gG=CN(R(Fx,0));a.kE=CN(R(Bh,0));a.lw=CN(R(Bh,0));a.dg=b;}
function VR(a,b){var c,d,e,f;Dm(a.dg);c=(Cy(!b.io?a.nW:a.b7)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bq(b);if(f)break;if(b.le)break;e=e+1|0;}return f;}
function SP(a,b,c){var d,e,f;Dm(a.dg);d=(Cy(a.f4)).data;e=d.length;f=0;while(f<e){if(d[f].g8(b,c))return 1;f=f+1|0;}return 0;}
function YB(){B.call(this);this.pk=null;}
function AQ0(a,b){var c;c=a.pk;if(VR(c.cr,AAp(c,b,1)))DT(c,b);}
function YC(){B.call(this);this.ub=null;}
function ARe(a,b){var c;c=a.ub;if(VR(c.cr,AAp(c,b,0)))DT(c,b);}
function YD(){B.call(this);this.qH=null;}
function APl(a,b){var c,d,e,f,g,h,i;c=a.qH;if(c.dU!==null){a:{b:{d=EU(c,b);e=c.cr;Dm(e.dg);f=e.il;if(f!==null)f.g(d);else{g=(Cy(e.br)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bJ(d))break a;i=i+1|0;}}}}DT(c,b);}}
function YE(){B.call(this);this.xt=null;}
function AOI(a,b){var c,d,e,f,g,h;c=a.xt;b.button;if(c.dU!==null)a:{d=EU(c,b);c=c.cr;e=b.button;Dm(c.dg);if(c.il===null){f=(Cy(c.br)).data;g=f.length;h=0;while(h<g){b=f[h].ce(d,e);if(b!==null){c.il=b;c.qa=e;break a;}h=h+1|0;}}}}
function YF(){B.call(this);this.tn=null;}
function AO9(a,b){var c,d,e,f,g,h,i;c=a.tn;b.button;if(c.dU!==null){d=EU(c,b);e=c.cr;f=b.button;Dm(e.dg);if(f==e.qa&&e.il!==null)e.il=null;g=(Cy(e.br)).data;h=g.length;i=0;a:{while(i<h){if(g[i].c3(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DT(c,b);}}
function YG(){B.call(this);this.pL=null;}
function ARM(a,b){var c,d,e,f,g,h,i,j,k;c=a.pL;if(c.dU!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cr;f=EU(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dm(e.dg);i=(Cy(e.dB)).data;j=i.length;k=0;b:{while(k<j){if(i[k].db(f,d,h))break b;k=k+1|0;}}DT(c,b);}}
function YH(){B.call(this);this.xK=null;}
function AM4(a,b){var c,d,e,f,g,h,i,j;c=a.xK;if(c.dU!==null){d=EU(c,b);e=c.cr;f=b.button;g=b.detail;Dm(e.dg);h=(Cy(e.br)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cp(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DT(c,b);}}
function YI(){B.call(this);this.tx=null;}
function AVY(a,b){var c,d,e,f,g,h,i;c=a.tx;if(c.dU!==null){d=EU(c,b);e=c.cr;Dm(e.dg);f=(Cy(e.eZ)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bq(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DT(c,b);}}
function YJ(){B.call(this);this.p1=null;}
function AL_(a,b){var c,d,e;b=a.p1.cr;c=(Cy(b.lw)).data;d=c.length;e=0;while(e<d){c[e].o();e=e+1|0;}Dm(b.dg);}
function YK(){B.call(this);this.wt=null;}
function AS8(a,b){var c,d,e;b=a.wt.cr;c=(Cy(b.kE)).data;d=c.length;e=0;while(e<d){c[e].o();e=e+1|0;}Dm(b.dg);}
function AAh(){B.call(this);this.vR=null;}
function AVm(a,b){var c;c=a.vR;if(c.dU!==null)EU(c,b);}
function AAi(){B.call(this);this.uz=null;}
function AO0(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.uz;if(Ok()===c.hW){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cy(c.cr.gG)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dK();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cr.dg;m=new O_;m.wK=k;m.wL=l;g.getAsString(Bm(m,"accept"));DT(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function AAj(){B.call(this);this.oq=null;}
function APr(a,b){var c;c=a.oq;if(Ok()===c.hW&&SP(c.cr,VJ(c,b),0))DT(c,b);}
function AAk(){B.call(this);this.wT=null;}
function ARu(a,b){var c;c=a.wT;if(Ok()===c.hW&&SP(c.cr,VJ(c,b),1))DT(c,b);}
var V7=G(0);
var Wi=G();
function Kf(a,b,c,d){var e,f,g,h;e=new Tj;e.lh=d;AZx=AZx+1|0;e.m9=b;e.me=c;f=(Em()).createElement("canvas");e.iN=f;g=b;f.width=g;f=e.iN;g=c;f.height=g;if(!d)g=e.iN.getContext("2d");else{f=e.iN;h=AJg();g=f.getContext("2d",h);}e.c1=g;f="#FFFFFF";g.fillStyle=f;return e;}
var Wh=G();
function ANW(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Nz(){var a=this;B.call(a);a.I=null;a.m=null;a.bW=null;}
function AGI(){var a=this;B.call(a);a.h3=null;a.jJ=null;a.hP=0;}
function CN(a){var b=new AGI();AMY(b,a);return b;}
function AMY(a,b){a.h3=b;}
function Bb(a,b){var c,d,e;c=a.hP;d=a.h3;if(c==d.data.length)a.h3=Dp(d,c+4|0);d=a.h3.data;e=a.hP;a.hP=e+1|0;d[e]=b;a.jJ=null;}
function Cy(a){var b;b=a.jJ;if(!(b!==null&&b.data.length==a.hP))a.jJ=Dp(a.h3,a.hP);return a.jJ;}
var Fj=G(0);
var Cw=G(0);
var Cs=G(0);
function AN1(a,b){return 0;}
function AUd(a,b,c){return null;}
function AIz(a,b,c){return 0;}
function ARL(a,b,c,d){return 0;}
var DN=G(0);
var EN=G(0);
var E4=G(0);
var E7=G(0);
var Fx=G(0);
function Sg(){B.call(this);this.yX=null;}
function Bf(){var a=this;B.call(a);a.a=0;a.b=0;}
function B6(a,b){var c=new Bf();ACx(c,a,b);return c;}
function ACx(a,b,c){a.a=b;a.b=c;}
function Ck(a,b){a.a=b.a;a.b=b.b;}
function U(a,b,c){a.a=b;a.b=c;}
function AAJ(a){var b,c,d;b=a.a;c=a.b;d=new M;O(d);V(H(V(H(d,C(70)),b),C(71)),c);return N(d);}
function LY(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function YO(){var a=this;B.call(a);a.tc=0;a.te=0;a.tb=0;a.ta=0;}
var AFQ=G();
var ABM=G(0);
function R6(){B.call(this);this.dL=null;}
function Mv(){var a=this;B.call(a);a.b1=null;a.Aj=null;}
function AEL(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new M;O(h);H(H(h,f),g);g=N(h);b.deleteShader(e);Bt(Bx(),g);Bt(Ff(),C(74));Bt(Ff(),d);Bt(Ff(),C(74));b=new Bv;Bk(b,g);K(b);}
function DC(){var a=this;Mv.call(a);a.p0=null;a.rB=null;a.m2=null;}
function AZV(a,b,c,d){var e=new DC();Jb(e,a,b,c,d);return e;}
function Jb(a,b,c,d,e){var f,g,h,i,j,k;a.Aj=e;f=AEL(b,35633,c);d=AEL(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.b1=g;h=e.tY.data;i=h.length;j=0;while(j<i){c=h[j];d=a.b1;k=c.h6;c=c.rL;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.b1;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Zx(b,C(75));a.m2=new Bf;c=a.b1;a.p0=b.getUniformLocation(c,"uResolution");c=a.b1;a.rB=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bv;c=new M;O(c);H(H(c,C(76)),d);Bk(b,N(c));K(b);}
function ACN(a,b,c){var d,e,f;if(!LY(a.m2,c)){Ck(a.m2,c);d=a.p0;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Gf(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.rB;b.uniform4f(e,i,l,h,j);ACN(a,b,f);}
function Ye(){DC.call(this);this.wj=null;}
function ES(){DC.call(this);this.th=null;}
function AWI(a,b){var c=new ES();VN(c,a,b);return c;}
function AZW(a,b,c){var d=new ES();VT(d,a,b,c);return d;}
function VN(a,b,c){VT(a,b,C(58),c);}
function VT(a,b,c,d){KA();Jb(a,b,c,d,AZT);c=a.b1;a.th=b.getUniformLocation(c,"sDiffuse");}
function I6(a,b,c){var d;d=a.th;b.uniform1i(d,0);b.activeTexture(33984);c=c.fv;b.bindTexture(3553,c);}
var ADs=G(DC);
function AXK(a){var b=new ADs();AUI(b,a);return b;}
function AUI(a,b){KA();Jb(a,b,C(58),C(77),AZT);}
function ADT(){ES.call(this);this.yh=null;}
function AYf(a){var b=new ADT();AQZ(b,a);return b;}
function AQZ(a,b){var c;VN(a,b,C(78));c=a.b1;a.yh=b.getUniformLocation(c,"uContrast");}
function Gr(){var a=this;ES.call(a);a.qN=null;a.r0=null;a.tD=null;}
function AZX(a,b,c){var d=new Gr();Z4(d,a,b,c);return d;}
function Z4(a,b,c,d){VT(a,b,c,d);c=a.b1;a.qN=b.getUniformLocation(c,"uTexTransform");c=a.b1;a.r0=b.getUniformLocation(c,"uColor");c=a.b1;a.tD=b.getUniformLocation(c,"uBgColor");}
function Vb(a,b,c,d){G8(b,a.r0,c);G8(b,a.tD,d);}
function NY(a,b,c,d){var e,f,g,h,i,j;c=c.fl;e=c.a;f=c.b;g=d.bp;h=e;g=g/h;i=d.bG;j=f;i=i/j;h=d.bl/h;j=d.bH/j;c=a.qN;b.uniform4f(c,g,i,h,j);}
function AE6(){Gr.call(this);this.qM=null;}
function AXg(a){var b=new AE6();ARH(b,a);return b;}
function ARH(a,b){var c;Z4(a,b,C(61),C(79));c=a.b1;a.qM=b.getUniformLocation(c,"uContrast");}
var ZJ=G(Gr);
function ACc(){var a=this;ES.call(a);a.xw=null;a.xu=null;a.r4=null;}
function AYp(a){var b=new ACc();ALw(b,a);return b;}
function ALw(a,b){var c,d;VN(a,b,C(80));c=a.b1;a.xw=b.getUniformLocation(c,"uColorB");d=a.b1;a.xu=b.getUniformLocation(d,"uColorF");d=a.b1;a.r4=b.getUniformLocation(d,"uContrast");}
function AE5(){var a=this;DC.call(a);a.pK=null;a.n5=null;a.n4=null;}
function AX$(a){var b=new AE5();ALy(b,a);return b;}
function ALy(a,b){var c;KA();Jb(a,b,C(58),C(81),AZT);c=a.b1;a.pK=b.getUniformLocation(c,"uColor");c=a.b1;a.n5=b.getUniformLocation(c,"uPoints1");c=a.b1;a.n4=b.getUniformLocation(c,"uPoints2");}
var TI=G(0);
var AHs=G(0);
function G8(b,c,d){var e,f,g,h;e=d.bp;f=d.bG;g=d.bl;h=d.bH;b.uniform4f(c,e,f,g,h);}
function Zx(b,c){var d,e;d=b.getError();if(d){b=Bx();e=new M;O(e);V(H(e,c),d);Bt(b,N(e));}}
function R4(){var a=this;B.call(a);a.yx=null;a.yA=null;a.yz=null;}
function R5(){var a=this;B.call(a);a.eK=null;a.g5=null;a.oN=null;a.xv=null;a.wD=null;a.tK=0;a.wV=0;}
function Cr(){var a=this;B.call(a);a.ys=null;a.fg=0;}
function De(a,b,c){a.ys=b;a.fg=c;}
function Hf(){var a=this;Cr.call(a);a.tY=null;a.n2=null;a.s1=null;a.lX=0;a.rq=0;a.ut=0;}
var AZT=null;var AZY=null;function KA(){KA=Bq(Hf);ANr();}
function ANr(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hf;c=R(Ec,2);d=c.data;AUs();d[0]=AZZ;d[1]=AZ0;KA();De(b,C(82),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.nj.fg){case 0:f=f+l.fG|0;h=h+1|0;break a;case 1:e=e+l.fG|0;g=g+1|0;break a;default:}}i=i|1<<l.h6;k=k+1|0;}b.tY=c;b.lX=e;b.rq=f;b.ut=i;c=R(Ec,g);m=c.data;b.n2=c;c=R(Ec,h);n=c.data;b.s1=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.nj.fg){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AZT
=b;c=R(Hf,1);c.data[0]=b;AZY=c;}
var Na=G(0);
var Va=G(0);
var Ww=G(0);
var GQ=G();
function Ke(){GQ.call(this);this.x4=null;}
function ADc(){var a=this;Ke.call(a);a.z6=0;a.l9=0;a.jF=null;a.lB=null;a.u7=null;}
function APF(a,b){var c=new ADc();AT8(c,a,b);return c;}
function AT8(a,b,c){a.x4=b;b=new M;O(b);a.jF=b;a.lB=BW(32);a.z6=c;AC5();a.u7=AZ1;}
function Vm(a,b,c,d){var e,$$je;e=a.x4;if(e===null)a.l9=1;if(!(a.l9?0:1))return;a:{try{e.lr(b,c,d);break a;}catch($$e){$$je=Ew($$e);if($$je instanceof I7){}else{throw $$e;}}a.l9=1;}}
function PE(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AD7(b,c,d-c|0);e=D7(Be(16,Bc(e.length,1024)));g=ADU(e,0,e.data.length);h=a.u7;i=new Ra;b=D7(1);j=b.data;j[0]=63;HF();k=AZ2;i.m5=k;i.mf=k;c=j.length;if(c&&c>=i.n3){i.yn=h;i.rJ=b.hg();i.zZ=2.0;i.n3=4.0;i.q5=BW(512);i.pI=D7(512);k=AZ3;if(k===null){i=new BE;Bk(i,C(83));K(i);}i.m5=k;i.mf=k;a:while(true){if(i.jB==3){f=new CS;Y(f);K(f);}i.jB=2;b:{while(true){try{k=ABu(i,f,g);}catch($$e){$$je=Ew($$e);if($$je instanceof Bv){f=$$je;break a;}else{throw $$e;}}if(IR(k))
{d=Ca(f);if(d<=0)break b;k=Eh(d);}else if(HC(k))break;h=!M1(k)?i.m5:i.mf;c:{if(h!==AZ3){if(h===AZ4)break c;else break b;}d=Ca(g);b=i.rJ;l=b.data.length;if(d<l){k=AZ5;break b;}Za(g,b,0,l);}EY(f,f.Z+K1(k)|0);}}l=HC(k);Vm(a,e,0,g.Z);PC(g);if(!l){while(true){d=i.jB;if(d!=2&&d!=4){f=new CS;Y(f);K(f);}f=AZ6;if(f===f)i.jB=3;l=HC(f);Vm(a,e,0,g.Z);PC(g);if(!l)break;}return;}}K(AKI(f));}i=new BE;Bk(i,C(84));K(i);}
function Bt(a,b){var c,d,e,f,g,h,i,j;BI(BV(a.jF,b),10);b=a.jF;c=b.M;d=a.lB;if(c>d.data.length)d=BW(c);e=0;f=0;if(e>c){b=new BC;Bk(b,C(85));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}PE(a,d,0,c);a.jF.M=0;}
function GE(){GQ.call(this);this.zM=null;}
function AAu(a){a.zM=D7(1);}
var Mb=G(GE);
var AZA=null;function ANM(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AFm(){var b;b=new Mb;AAu(b);AZA=b;}
function Ec(){var a=this;Cr.call(a);a.rL=null;a.nj=null;a.fG=0;a.q6=0;a.h6=0;}
var AZZ=null;var AZ0=null;var AZ7=null;function AUs(){AUs=Bq(Ec);AMI();}
function AXt(a,b,c,d,e,f,g){var h=new Ec();X7(h,a,b,c,d,e,f,g);return h;}
function X7(a,b,c,d,e,f,g,h){AUs();De(a,b,c);a.rL=d;a.nj=e;a.fG=f;a.q6=g;a.h6=h;}
function AMI(){var b;b=new Ec;APg();X7(b,C(86),0,C(87),AZ8,2,0,0);AZZ=b;b=AXt(C(88),1,C(89),AZ8,2,0,1);AZ0=b;AZ7=I(Ec,[AZZ,b]);}
function J5(){var a=this;B.call(a);a.x$=null;a.y8=null;}
function AFD(b){var c,d;if(FJ(b))K(AC8(b));if(!AFF(P(b,0)))K(AC8(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AFF(d))break a;else K(AC8(b));}}c=c+1|0;}}
function AFF(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Ne=G(J5);
var AZ1=null;function AC5(){AC5=Bq(Ne);ALu();}
function AFU(a){var b,c;b=new Vn;b.fA=C(90);HF();c=AZ2;b.hI=c;b.na=c;b.y0=a;b.n$=0.3333333432674408;b.zo=0.5;b.pR=D7(512);b.t_=BW(512);return b;}
function ALu(){var b,c,d,e,f;b=new Ne;AC5();c=R(BA,0);d=c.data;AFD(C(91));e=d.length;f=0;while(f<e){AFD(d[f]);f=f+1|0;}b.x$=C(91);b.y8=c.hg();AZ1=b;}
function QS(){var a=this;B.call(a);a.f0=null;a.nO=null;a.la=null;a.uF=null;a.rp=null;a.rE=null;}
function ADi(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.f0,b,c));}
function N4(a,b){var c,d,e,f,g,h,i,$$je;c=new BA;d=b;while(a.nO[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.f0,b,d));f=e.data;E6();d=f.length;AC5();g=AZ1;h=ADU(e,0,d);a:{try{i=AFU(g);HF();g=AB2(AEO(AGv(i,AZ3),AZ3),h);break a;}catch($$e){$$je=Ew($$e);if($$je instanceof Gd){g=$$je;}else{throw $$e;}}h=new Zr;h.ke=1;h.kP=1;h.ik=C(92);h.mi=g;K(h);}if(!g.Z&&g.dO==g.nI)c.b8=g.h5;else{f=BW(Ca(g));e=f.data;c.b8=f;OT(g,f,0,e.length);}return c;}
function On(a,b){var c,d,e;c=new BA;d=b>>>1|0;e=d;while(a.la[e]){e=e+1|0;}d=e-d|0;HW(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f0,b,d)));return c;}
var Hl=G(Cr);
var AZ9=null;var AZ8=null;var AZ$=null;function APg(){APg=Bq(Hl);AKY();}
function ALq(a,b){var c=new Hl();AFX(c,a,b);return c;}
function AFX(a,b,c){APg();De(a,b,c);}
function AKY(){var b;AZ9=ALq(C(93),0);b=ALq(C(94),1);AZ8=b;AZ$=I(Hl,[AZ9,b]);}
var LA=G(GE);
var AZB=null;function ALI(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AHv(){var b;b=new LA;AAu(b);AZB=b;}
function AFK(){BE.call(this);this.yr=null;}
function AC8(a){var b=new AFK();ATE(b,a);return b;}
function ATE(a,b){Y(a);a.yr=b;}
var Xq=G(Ej);
var Nd=G(0);
function ZP(){B.call(this);this.rw=null;}
function ASx(a,b){a.rw.setPointerCapture(b.pointerId);}
function ZQ(){B.call(this);this.qj=null;}
function AJB(a,b){a.qj.releasePointerCapture(b.pointerId);}
function Hy(){var a=this;B.call(a);a.nI=0;a.Z=0;a.dO=0;a.id=0;}
function X3(a,b){a.id=(-1);a.nI=b;a.dO=b;}
function EY(a,b){var c,d,e;if(b>=0&&b<=a.dO){a.Z=b;if(b<a.id)a.id=0;return a;}c=new BE;d=a.dO;e=new M;O(e);BI(V(H(V(H(e,C(95)),b),C(96)),d),93);Bk(c,N(e));K(c);}
function Ca(a){return a.dO-a.Z|0;}
function DW(a){return a.Z>=a.dO?0:1;}
var T7=G(0);
var LV=G(Hy);
function AG$(b){var c,d;if(b>=0)return ARk(0,b,BW(b),0,b,0);c=new BE;d=new M;O(d);V(H(d,C(97)),b);Bk(c,N(d));K(c);}
function AD7(b,c,d){return ARk(0,b.data.length,b,c,c+d|0,0);}
function OT(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BC;i=new M;O(i);V(H(V(H(i,C(98)),g),C(99)),f);Bk(h,N(i));K(h);}if(Ca(a)<d){j=new MO;Y(j);K(j);}if(d<0){j=new BC;k=new M;O(k);H(V(H(k,C(100)),d),C(101));Bk(j,N(k));K(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.h5.data[m+a.nq|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BC;d=b.length;k=new M;O(k);BI(V(H(V(H(k,C(102)),c),C(96)),d),41);Bk(j,N(k));K(j);}
function KY(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.nQ){b=new JH;Y(b);K(b);}e=d-c|0;if(Ca(a)<e){b=new It;Y(b);K(b);}if(c>J(b)){f=new BC;d=J(b);b=new M;O(b);BI(V(H(V(H(b,C(103)),c),C(96)),d),41);Bk(f,N(b));K(f);}if(d>J(b)){f=new BC;c=J(b);b=new M;O(b);V(H(V(H(b,C(104)),d),C(105)),c);Bk(f,N(b));K(f);}if(c>d){b=new BC;f=new M;O(f);V(H(V(H(f,C(103)),c),C(106)),d);Bk(b,N(f));K(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;Ud(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function KL(){var a=this;Hy.call(a);a.l8=0;a.mX=null;a.zz=null;}
function ADU(b,c,d){var e,f,g;e=b.data;f=new Y_;g=e.length;d=c+d|0;X3(f,g);ANy();f.zz=AZ_;f.l8=0;f.mX=b;f.Z=c;f.dO=d;f.zD=0;f.oI=0;return f;}
function Za(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.oI){e=new JH;Y(e);K(e);}if(Ca(a)<d){e=new It;Y(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BC;j=new M;O(j);V(H(V(H(j,C(107)),h),C(99)),g);Bk(i,N(j));K(i);}if(d<0){e=new BC;i=new M;O(i);H(V(H(i,C(100)),d),C(101));Bk(e,N(i));K(e);}h=a.Z;k=h+a.l8|0;l=0;while(l<d){b=a.mX.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BC;d=b.length;i=new M;O(i);BI(V(H(V(H(i,C(102)),c),C(96)),d),41);Bk(e,N(i));K(e);}
function PC(a){a.Z=0;a.dO=a.nI;a.id=(-1);return a;}
function Ib(){B.call(this);this.AK=null;}
var AZ4=null;var AZ3=null;var AZ2=null;function HF(){HF=Bq(Ib);AO3();}
function AGM(a){var b=new Ib();AFz(b,a);return b;}
function AFz(a,b){HF();a.AK=b;}
function AO3(){AZ4=AGM(C(108));AZ3=AGM(C(109));AZ2=AGM(C(110));}
var Oy=G(Cn);
function AOT(a){}
function ANj(a,b,c){}
function CQ(){var a=this;Cn.call(a);a.gi=null;a.s=null;}
function F4(a,b){var c,d,e;Eg(a,b);a.gi=ACn(0,0,64);c=new Wm;c.cf=new Bf;c.ek=CN(R(EJ,0));c.dG=new Bf;c.vT=new Bf;c.x7=new B$;c.x8=new B$;d=b.I;c.cN=d;e=b.bW;c.hF=e;c.c0=d.j4;c.cM=St(e);d=b.m.lw;e=new RW;e.tf=c;Bb(d,e);d=b.m.kE;e=new RU;e.xn=c;Bb(d,e);a.s=c;Bb(b.m.b7,new TO);b=b.m.b7;c=a.s;BR(c);d=new TN;d.pQ=c;Bb(b,d);}
function FX(a){E9(a.G.I,a.gi);}
function G3(a,b,c){var d,e,f,g,h;a:{d=a.s;Ck(d.cf,b);e=d.b0;if(e!==c){d.b0=c;f=(Cy(d.ek)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].g9(e,c);h=h+1|0;}}}}
var Qf=G(0);
var KR=G(0);
function AHc(a){a.jA(H9());}
function K2(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IH;c=new Jd;d=new HG;ALP();KH(d,A0a);Nf(c,d,BO(A0b),BO(A0c),BO(A0d),BO(A0b),BO(A0e),BO(A0f),BO(A0g),BO(A0h),BO(A0i),BO(A0j));AFy();e=(A0k.hg()).data;f=e.length;g=R(JD,f);h=g.data;i=0;while(i<f){h[i]=e[i].k8;i=i+1|0;}j=AE9(S(C(111)),S(C(112)),S(C(113)),S(C(114)));k=new IN;l=new I1;AIl();m=A0l;Nk(l,m,A0m,A0n,A0o,A0p,m);Mq(k,l,AF8(),AG2(S(C(115)),S(C(116)),S(C(117))),AF8(),AAL(1,0.17499999701976776),A0q,A0r);JO(b,c,g,j,k,AAZ(S(C(118)),S(C(119)),S(C(120)),S(C(121))));a.jA(b);}
function AEb(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IH;c=new Jd;d=new HG;AFW();KH(d,A0s);Nf(c,d,BO(A0t),BO(A0u),BO(A0v),BO(A0t),BO(A0w),BO(A0x),BO(A0y),BO(A0z),BO(A0A),BO(A0B));AE1();e=(A0C.hg()).data;f=e.length;g=R(JD,f);h=g.data;i=0;while(i<f){h[i]=e[i].mg;i=i+1|0;}j=AE9(S(C(122)),S(C(123)),S(C(124)),S(C(125)));k=new IN;l=new I1;AID();m=A0D;Nk(l,m,A0E,A0F,A0G,A0H,m);Mq(k,l,AGy(),AG2(S(C(126)),S(C(127)),C6(0)),AGy(),AAL(1,0.07500000298023224),A0I,A0J);JO(b,c,g,j,k,AAZ(S(C(128)),S(C(129)),S(C(130)),S(C(131))));a.jA(b);}
var KU=G(0);
var Mt=G(0);
function KB(){var a=this;CQ.call(a);a.E=null;a.D=null;a.d4=null;a.hJ=0;a.gg=null;a.jq=null;a.xp=null;}
function AX_(a){var b=new KB();AC9(b,a);return b;}
function AC9(a,b){var c,d,e;F4(a,b);c=new RV;c.dj=new Bf;c.e1=new Bf;c.jb=new Bf;c.jc=new Bf;c.i$=new Bf;c.i_=new Bf;a.jq=c;a.xp=T9();c=AS5(a.s);a.d4=c;a.E=ADg(a.s,c);a.D=ADg(a.s,a.d4);c=a.E;c.bL=1;d=new WS;d.wz=a;e=new WT;e.sm=a;Yy(c,d,d);Yy(a.D,e,e);c=a.E;d=new WU;d.o0=a;c.jr=d;d=a.D;e=new WN;e.vC=a;d.jr=e;Pr(a.s,c);Bb(b.m.br,a.d4);Bb(b.m.dB,a.d4);Bb(b.m.dB,a);Bb(b.m.br,a);c=b.m.b7;d=new WP;d.r7=a;Bb(c,d);c=b.m.b7;d=new IA;e=new WQ;e.ow=a;Oh(d,b,e);Bb(c,d);Bb(b.m.f4,a);Bb(b.m.gG,a);b=b.m.eZ;c=new WR;c.t0=
a;Bb(b,c);K2(a);}
function AAB(a,b){if(a.E===b)a.hJ=a.hJ|1;if(a.D===b)a.hJ=a.hJ|2;if((a.hJ&3)==3)AGL(a);}
function AUL(a,b,c){if(Ea(a.s,a.E))return Hn(a.E,b,c);if(!Ea(a.s,a.D))return 0;return Hn(a.D,b,c);}
function ADK(a){if(Ea(a.s,a.E))return Z$(a,a.E);if(!Ea(a.s,a.D))return null;return Z$(a,a.D);}
function Z$(a,b){var c;c=new WX;c.sd=b;return c;}
function XC(a,b,c){var d,e,f,g,h,i,j;d=a.gg;if(d!==null&&d.gr!==null){e=b!==a.E?0:1;f=F2(b);g=(Hk(b)+f|0)/2|0;h=g-f|0;d=a.gg;d=d.gr.data[Gw(d,g,e)];i=g-(!e?d.ix:d.iy)|0;j=b.bo-W(f,b.U)|0;c.bo=Ma(W(((!e?d.iy:d.ix)+i|0)-h|0,c.U)+j|0,H8(c));return;}}
function AGL(a){var b,c,d,e,f,g;Bt(Bx(),C(132));b=a.E.e;c=a.D.e;d=EV(b.f);e=EV(c.f);f=AB1(b.f);g=AB1(c.f);b=a.G.bW;c=new AAl;c.tl=a;CM(b,c,C(133),I(B,[d,f,e,g]));}
function AR6(a,b){var c,d;c=LX(a.E,b);d=LX(a.D,b);return !c&&!d?0:1;}
function AO7(a){FX(a);JL(a.E);JL(a.D);AHe(a.jq,a.gg,a.s,a.E,a.D,a.xp,a.d4.gv);AAg(a.d4);}
function ANb(a){return JF(0);}
function ASP(a){O6(a.E);O6(a.D);}
function AOY(a){AAe(a.E);AAe(a.D);}
function ATV(a,b){PN(a.E,b);PN(a.D,b);}
function AKz(a,b){if(Y6(a.s,b)){Td(a.d4);Ly(a.E,b);Ly(a.D,b);}}
function AOi(a,b,c){G3(a,b,c);AEm(a,b,c);}
function AEm(a,b,c){var d,e,f,g,h,i;d=new Bf;e=Cb(20.0,c);f=new Bf;g=b.a/2|0;h=e/2|0;ACx(f,g-h|0,b.b);J1(a.E,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;J1(a.D,d,f,c);U(a.jq.dj,f.a,d.b);U(a.jq.e1,d.a-f.a|0,f.b);}
function AIE(a,b){BR(b);N9(a.d4,b);KX(a.E,b);KX(a.D,b);}
function AGt(a,b){if(b.bj!=121)return 0;return 1;}
function ADS(a,b){var c,d,e;if(Ea(a.s,a.E)){c=a.d4;d=a.E;e=new Oa;e.vu=a;Km(c,b,d,a,a,a,e);}if(Ea(a.s,a.D)){c=a.d4;d=a.D;e=new N_;e.tW=a;Km(c,b,d,a,a,a,e);}return 1;}
function AQ4(a,b){var c,d;c=DR(a.E,b.i)&&Pu(a.E,b)?1:0;d=DR(a.D,b.i)&&Pu(a.D,b)?1:0;return !c&&!d?0:1;}
function ANe(a,b,c,d){var e,f;e=DR(a.E,b.i)&&N7(a.E,b,c,d)?1:0;f=DR(a.D,b.i)&&N7(a.D,b,c,d)?1:0;return !e&&!f?0:1;}
function APk(a,b,c){var d,e,f,g,h,i,j,k;d=DR(a.E,b.i);e=DR(a.D,b.i);f=a.s;g=f.eu;h=g!==null?0:1;i=a.E;j=g!==i?0:1;k=g!==a.D?0:1;if(d&&!(!h&&!k))Ga(f,i);if(e&&!(!h&&!j))Ga(a.s,a.D);if(d){i=NP(a.E,b,c);if(i!==null)return i;}return !e?null:NP(a.D,b,c);}
function ARW(a,b,c){var d,e,f,g;d=DR(a.E,b.i);e=DR(a.D,b.i);f=d&&U$(a.E,b,c)?1:0;g=e&&U$(a.D,b,c)?1:0;return !f&&!g?0:1;}
function ARp(a,b,c,d){var e,f,g,h;e=DR(a.E,b.i);f=DR(a.D,b.i);g=e&&KF(a.E,c,d)?1:0;h=f&&KF(a.D,c,d)?1:0;return !g&&!h?0:1;}
function AN6(a){return ADK(a);}
var XE=G(KB);
function APB(a){return JF(1);}
function Qp(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new NS;d=d.then(Bm(e,"f"));f=new NV;f.tk=b;f.tj=c;g=new NT;d.then(Bm(f,"f"),Bm(g,"f"));}
var AGG=G();
function ATT(b){var c,d;if(J(b)>0){c=new M;O(c);H(H(c,C(134)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(IT(b)){case -1570047148:if(!Bl(b,C(135)))break a;d=17;break a;case -1509980539:if(!Bl(b,C(136)))break a;d=13;break a;case -1351411913:if(!Bl(b,C(137)))break a;d=5;break a;case -1073555521:if(!Bl(b,C(138)))break a;d=14;break a;case -1045861099:if(!Bl(b,C(139)))break a;d=18;break a;case -1045861098:if(!Bl(b,C(140)))break a;d=19;break a;case -811765794:if(!Bl(b,C(141)))break a;d=6;break a;case -785237654:if
(!Bl(b,C(142)))break a;d=11;break a;case -631889171:if(!Bl(b,C(143)))break a;d=9;break a;case -439438829:if(!Bl(b,C(144)))break a;d=20;break a;case -223304637:if(!Bl(b,C(145)))break a;d=2;break a;case 2129957:if(!Bl(b,C(146)))break a;d=1;break a;case 3343967:if(!Bl(b,C(147)))break a;d=10;break a;case 3556498:if(!Bl(b,C(148)))break a;d=4;break a;case 485517998:if(!Bl(b,C(149)))break a;d=7;break a;case 544901384:if(!Bl(b,C(150)))break a;d=3;break a;case 1030621992:if(!Bl(b,C(151)))break a;d=16;break a;case 1465713255:if
(!Bl(b,C(152)))break a;d=8;break a;case 1554501643:if(!Bl(b,C(153)))break a;d=15;break a;case 1609169232:if(!Bl(b,C(154)))break a;d=12;break a;default:}}b:{switch(d){case 1:break;case 2:b=new XK;break b;case 3:case 4:b=new XH;break b;case 5:b=new XG;break b;case 6:b=new XJ;break b;case 7:b=new XI;break b;case 8:b=new XO;break b;case 9:case 10:b=new XN;break b;case 11:b=new XQ;break b;case 12:b=new XP;break b;case 13:b=new UX;break b;case 14:b=new UW;break b;case 15:b=new UV;break b;case 16:b=new UO;break b;case 17:b
=new UN;break b;case 18:b=new UL;break b;case 19:b=new UK;break b;case 20:b=new UJ;break b;default:b=new UI;break b;}b=new XL;}return b;}
var AD4=G();
var KS=G(LV);
function ADI(){var a=this;KS.call(a);a.nQ=0;a.nq=0;a.h5=null;}
function ARk(a,b,c,d,e,f){var g=new ADI();AWc(g,a,b,c,d,e,f);return g;}
function AWc(a,b,c,d,e,f,g){X3(a,c);a.Z=e;a.dO=f;a.nq=b;a.nQ=g;a.h5=d;}
function Ud(a,b,c){a.h5.data[b+a.nq|0]=c;}
function LI(){var a=this;B.call(a);a.yn=null;a.rJ=null;a.zZ=0.0;a.n3=0.0;a.m5=null;a.mf=null;a.jB=0;}
function MD(){var a=this;B.call(a);a.g7=0;a.i9=0;}
var AZ6=null;var AZ5=null;function ABE(a,b){var c=new MD();ACk(c,a,b);return c;}
function ACk(a,b,c){a.g7=b;a.i9=c;}
function IR(a){return a.g7?0:1;}
function HC(a){return a.g7!=1?0:1;}
function Lz(a){return !SB(a)&&!M1(a)?0:1;}
function SB(a){return a.g7!=2?0:1;}
function M1(a){return a.g7!=3?0:1;}
function K1(a){var b;if(Lz(a))return a.i9;b=new D$;Y(b);K(b);}
function Eh(b){return ABE(2,b);}
function Xb(a){var b,c;switch(a.g7){case 0:b=new R9;Y(b);K(b);case 1:b=new Zw;Y(b);K(b);case 2:b=new W4;c=a.i9;Y(b);b.A2=c;K(b);case 3:b=new RS;c=a.i9;Y(b);b.AV=c;K(b);default:}}
function ACO(){AZ6=ABE(0,0);AZ5=ABE(1,0);}
var ABp=G();
var I0=G(0);
var OI=G();
function ALR(a,b){return b.arrayBuffer();}
var OH=G();
function AQs(a,b){var c,d;c=new QP;d=new QN;return $rt_globals.WebAssembly.instantiate(b,ANU(Bm(c,"f"),Bm(d,"f")));}
var OF=G();
function AQ_(a,b){AJs(b);}
var OE=G();
function AKa(a,b){AGR(b);}
function VK(){B.call(this);this.o7=null;}
function AVp(a,b){L_(a.o7.E,b);}
function VL(){B.call(this);this.uL=null;}
function AN_(a,b){L_(a.uL.D,b);}
var XL=G();
function AUb(a,b){return AX_(b);}
var XK=G();
function AIh(a,b){return AYj(b);}
var XH=G();
function ALk(a,b){return AYM(b);}
var XG=G();
function AQp(a,b){var c,d,e,f,g;c=new Vr;Eg(c,b);d=(H9()).bS.eC;c.zu=d;c.iX=AGO(d);c.iB=new Bf;c.g_=new Bf;c.c$=Kt();c.dy=Kt();c.lS=JF(1);b=b.m.br;d=new N0;d.ku=c;Bb(b,d);b=c.lS.data[DQ()*c.lS.data.length|0];d=Gm(c.G.I,b,10);c.lz=d;Cu(c.G.I.ci,d);e=DV(c.G.I.ci,C(155));d=c.G.I.ci;f=new M;O(f);BI(f,43);H(f,b);g=C4(e+DV(d,N(f)));c.h1=g;c.h_=CK(c.h_,AAv(c,1,g,b,c.lz,c.G.I));c.h$=CK(c.h$,AAv(c,0,c.h1,b,c.lz,c.G.I));Sb(c,c.c$,c.h_);Sb(c,c.dy,c.h$);Ci(c.c$.K,1.0,1.0,1.0,1.0);Fk(c.c$,c.iX);Ci(c.dy.K,1.0,1.0,1.0,1.0);Fk(c.dy,
c.iX);b=Bx();g=c.h1;d=new M;O(d);V(H(d,C(156)),g);Bt(b,N(d));return c;}
var XJ=G();
function ALr(a,b){var c,d,e;c=new Py;F4(c,b);d=new NU;d.m0=new Bf;d.nF=new Bf;c.rI=d;c.eM=AD6();c.dk=AD6();c.ey=Se(c.s);Bb(c.s.ek,c);d=b.m.b7;e=new V1;e.uO=c;Bb(d,e);Bb(b.m.br,c);b=b.m.eZ;d=new VX;d.wd=c;Bb(b,d);AAy(c.dk);c.nX=EZ(C(157),25.0);JJ(c.ey,Hj(),c.nX);BU(c.gi,C6(43));b=Hj();In(c.eM,b);In(c.dk,b);b=c.eM;b.kp=new VY;d=c.dk;d.kp=new VZ;d.lJ=new P4;d.n8=new P5;K3(b,(S3(0)).jV);K3(c.dk,(S3(0)).jV);return c;}
var XI=G();
function AHz(a,b){var c,d,e;c=new UM;F4(c,b);c.lu=EZ(C(158),15.0);d=AEH();c.fi=d;Bb(c.s.ek,d);Bb(c.s.ek,c);BU(c.gi,C6(43));d=Se(c.s);c.iL=d;JJ(d,Hj(),EZ(C(157),25.0));d=b.m.b7;e=new Xz;e.yK=c;Bb(d,e);d=b.m.eZ;e=new XB;e.we=c;Bb(d,e);Bb(b.m.br,ACH(c.iL));Bb(b.m.br,c.fi);b=b.m.dB;d=c.fi;BR(d);e=new XA;e.sp=d;Bb(b,e);return c;}
var XO=G();
function AKW(a,b){var c,d,e;c=new OM;F4(c,b);c.g1=BJ();c.fP=BJ();c.qS=S(C(159));c.i4=ATA();c.g0=0;d=c.s.ek;e=new N$;e.qG=c;Bb(d,e);Bb(b.m.br,c);d=b.m.b7;e=new N8;e.wF=c;Bb(d,e);b=Gm(b.I,C(157),35);c.jf=b;c.kJ=ABr(Fq(b));BU(c.gi,S(C(160)));return c;}
var XN=G();
function AOH(a,b){var c,d,e,f,g;c=new UH;Eg(c,b);c.g2=AGQ();c.eq=0;c.va=500;c.qT=H$(0,0,0,255,new B$);c.k1=20;c.pr=20;c.ug=H9();d=b.m.br;e=new Os;e.jM=c;f=new WM;f.t9=e;e.qI=f;Bb(d,e);d=b.m.dB;e=new TP;e.vk=c;Bb(d,e);c.eL=b.I;c.p9=St(b.bW);b=c.g2;d=Gm(c.eL,C(157),c.pr);g=c.k1;e=c.eL;Q0(b,d,g,e.j4,e);c.iA=Ja();return c;}
var XQ=G();
function ASS(a,b){var c,d;c=new R$;GP(c,b);b=b.m.b7;d=new Rp;d.si=c;Bb(b,d);return c;}
var XP=G();
function AHN(a,b){return AYD(b);}
var UX=G();
function AH$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new N5;GP(c,b);c.eo=Hv(0,0,300,300);c.fT=Vg(0,0,3,3);d=b.I;b=b.m.br;e=new Wa;e.lO=c;Bb(b,e);b=AHb(d);c.vJ=b;Fr(c.eo,b);FF(c.eo);b=c.eo.ba;F7();BU(b,A0K);BU(c.eo.K,Dr(204,120,50));APo();e=A0L;f=D7((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CZ(d);switch(e.fg){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new EF;Y(b);K(b);}b:
{OA(m,5,5,h);b=m.er.dL;switch(e.fg){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new EF;Y(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.mD=m;U(c.fT.t,BT(m),Da(c.mD));BU(c.fT.ba,c.m7);return c;}
var UW=G();
function AOg(a,b){var c,d,e;c=new UB;GP(c,b);c.gh=Hv(0,0,300,300);c.kW=new Bf;c.jN=new Bf;c.is=new Bf;d=b.I;b=b.m.br;e=new PM;e.jC=c;Bb(b,e);b=AHb(d);c.pi=b;Fr(c.gh,b);FF(c.gh);b=c.gh.ba;F7();BU(b,A0K);BU(c.gh.K,Dr(204,120,50));return c;}
var UV=G();
function APZ(a,b){var c,d,e,f;c=new Uu;Eg(c,b);c.Aw=20;c.AX=11;c.yb=220;c.ks=new Bf;c.zL=5000;c.hD=1;c.f8=I(HG,[C6(0),C6(255)]);c.et=b.I;d=b.m.br;e=new Rm;e.j1=c;f=new X5;f.s2=e;e.oX=f;Bb(d,e);b=b.m.dB;d=new AAn;d.qc=c;Bb(b,d);b=GI(c.et,200,220);c.k2=b;Gu(b,C(157),20.0);b=GI(c.et,200,20);c.fV=b;Gu(b,C(157),20.0);c.h8=Ja();return c;}
var UO=G();
function ALW(a,b){var c,d,e;c=new Jy;GP(c,b);Bb(b.m.br,c);d=b.m.b7;e=new Y2;e.n7=c;Bb(d,e);Bb(b.m.f4,new Y1);d=b.m.f4;e=new Y0;e.ry=c;Bb(d,e);Bb(b.m.gG,new YZ);d=b.m.gG;e=new Y3;e.tI=c;Bb(d,e);b=!ZS(b.bW)?C(161):C(162);d=new M;O(d);H(H(d,C(163)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var UN=G();
function AHT(a,b){var c,d,e,f,g,h;c=new Ue;Eg(c,b);c.up=C6(20);c.f$=Hv(0,0,300,300);d=b.m.b7;e=new TM;e.AP=c;Bb(d,e);b=b.I;d=Gm(b,C(10),88);Cu(b.ci,d);f=C4(AUQ(DV(b.ci,C(164)),DV(b.ci,C(165))));g=KT(d,1.1799999475479126);h=Bx();e=new M;O(e);V(H(V(H(e,C(166)),f),C(167)),g);Bt(h,N(e));e=GI(b,f,g*3|0);c.hV=e;Cu(e,d);BM(c.hV,C(164),0.0,d.dt);BM(c.hV,C(165),0.0,g+d.dt);BM(c.hV,C(168),0.0,(g*2|0)+d.dt);b=CZ(b);c.lY=b;CL(b,c.hV);Fr(c.f$,c.lY);FF(c.f$);b=c.f$.ba;F7();BU(b,A0K);BU(c.f$.K,A0M);return c;}
var UL=G();
function AUj(a,b){var c;c=new VC;Nu(c,b);Hx(c.ch,0,0,300,300);U(c.c_,300,300);return c;}
var UK=G();
function AOU(a,b){var c;c=new VB;Nu(c,b);c.fu=new Bf;c.gc=new Bf;U(c.dX,150,140);U(c.c_,500,100);U(c.e5,150,200);U(c.es,500,250);return c;}
var UJ=G();
function ASU(a,b){var c,d,e,f;c=new Zm;F4(c,b);c.pX=Ex(40,40,40,200);c.n_=Ex(43,43,43,128);c.qk=EZ(C(158),20.0);d=AEH();c.ev=d;Bb(c.s.ek,d);Bb(c.s.ek,c);BU(c.gi,C6(43));d=Se(c.s);c.hZ=d;JJ(d,Hj(),EZ(C(157),25.0));d=b.m.b7;e=new AAb;e.zN=c;Bb(d,e);d=b.m.eZ;e=new AAd;e.sf=c;Bb(d,e);Bb(b.m.br,ACH(c.hZ));Bb(b.m.br,c.ev);d=b.m.br;e=c.s.cM;f=new Us;f.vn=e;Bb(d,f);b=b.m.dB;d=c.ev;BR(d);e=new AAc;e.vS=d;Bb(b,e);return c;}
var UI=G();
function AHF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new NG;AHf(c,b);d=c.cI;e=new Jz;f=ARI(C(169));g=R(BA,8);h=J(C(170));i=0;j=0;k=h+1|0;while(true){l=G$(C(170),10,j);m=l>=0?Ch(C(170),j,l):Do(C(170),j);n=i+1|0;g=AFN(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}ZM(e,Q2(g,n),C(171),f);L_(d,e);return c;}
function HE(){var a=this;B.call(a);a.bI=0;a.cn=0;a.dd=0;a.jT=0;}
function A0N(a,b,c,d){var e=new HE();Wf(e,a,b,c,d);return e;}
function Wf(a,b,c,d,e){a.bI=d;a.cn=b;a.dd=c;a.jT=e;}
function QH(){var a=this;HE.call(a);a.d6=null;a.bj=0;a.io=0;a.tE=0;a.le=0;}
var AF1=G();
function Yh(b,c){return (b+(c/2|0)|0)/c|0;}
function RE(b,c,d){if(b<(2147483647/c|0))return Yh(W(b,c),d);return 0.5+c*b/d|0;}
function Jh(b,c){return ((b+c|0)-1|0)/c|0;}
function HP(b){return b+0.5|0;}
function C4(b){return b+0.5|0;}
function EL(b,c,d){return Be(b,Bc(c,d));}
function Nw(){var a=this;HE.call(a);a.i=null;a.x_=null;}
var V$=G(0);
function O_(){var a=this;B.call(a);a.wK=null;a.wL=null;}
function AOl(a,b){var c,d;c=a.wK;d=a.wL;$rt_globals.console.info("paste plain string "+b);c.g(F1(b));Dm(d);}
function WI(){B.call(this);this.xs=null;}
function Yg(a,b){a.xs.clipboardData.setData("text/plain",$rt_ustr(b));}
function Y_(){var a=this;KL.call(a);a.zD=0;a.oI=0;}
function RV(){var a=this;B.call(a);a.dj=null;a.e1=null;a.jb=null;a.jc=null;a.i$=null;a.i_=null;}
function AHe(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=c.cN;i=a.dj;Bu(h,i.a,i.b,a.e1,g.bS.eC);if(b!==null&&b.gr!==null){j=CF(c,2.0);k=Gw(b,F2(d),1);l=Gw(b,Hk(d),1);m=Gw(b,F2(e),0);n=Gw(b,Hk(e),0);o=Bc(k,m);p=Be(l,n);n=BF(o,p);if(n<=0)Cc(h,1);while(o<=p){q=b.gr.data[o];if(q.ln){k=d.U;r=W(k,q.iy)-d.bo|0;s=r+W(q.nB,k)|0;k=e.U;t=W(k,q.ix)-e.bo|0;u=t+W(q.nA,k)|0;U(a.jb,a.dj.a,r);U(a.i$,a.dj.a,s);U(a.jc,a.dj.a+a.e1.a|0,t);U(a.i_,a.dj.a+a.e1.a|0,u);v=Be(Bc(r,t),a.dj.b);w=Bc(Be(s,u),a.dj.b+a.e1.b|0);Hx(f,
a.dj.a,v,a.e1.a,w-v|0);BU(f.ba,g.hs.hi);BU(f.K,IX(g.dR,g,q.ln));if(r==s){x=c.dG;U(x,a.dj.a-d.bb.a|0,j);if(t>=r){i=a.i$;U(i,i.a,i.b+j|0);k=r;}else{k=r-j|0;i=a.jb;U(i,i.a,i.b-j|0);}Bu(h,d.bb.a,k,x,f.K);}if(t==u){i=c.dG;U(i,e.cy.a,j);if(r>=t){x=a.i_;U(x,x.a,x.b+j|0);}else{t=t-j|0;x=a.jc;U(x,x.a,x.b-j|0);}Bu(h,a.dj.a+a.e1.a|0,t,i,f.K);}i=f.u;AAI(h,i.a,i.b,f.t,a.jb,a.jc,a.i$,a.i_,f.K);}o=o+1|0;}if(n<=0)Cc(h,0);return;}}
function Jv(){var a=this;B.call(a);a.u=null;a.t=null;a.K=null;a.ba=null;}
function T9(){var a=new Jv();WL(a);return a;}
function Vg(a,b,c,d){var e=new Jv();AJ6(e,a,b,c,d);return e;}
function WL(a){a.u=new Bf;a.t=new Bf;a.K=new B$;a.ba=new B$;}
function AJ6(a,b,c,d,e){a.u=new Bf;a.t=new Bf;a.K=new B$;a.ba=new B$;Hx(a,b,c,d,e);}
function Hx(a,b,c,d,e){U(a.u,b,c);U(a.t,d,e);}
function Vf(a){U(a.t,0,0);}
function La(a){var b;b=a.t;return W(b.a,b.b)?0:1;}
function E2(a,b){return Fw(b,a.u,a.t);}
function Tg(a,b,c,d){var e;e=a.u;Bu(b,e.a+c|0,e.b+d|0,a.t,a.K);}
function AAa(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.ba;i=a.K;FQ(b,b.im);Gf(b.im,b.X,d,e,g,b.c6);I6(b.im,b.X,c);g=b.im;j=b.X;G8(j,g.xw,h);G8(j,g.xu,i);c=g.r4;j.uniform2f(c,f,0.0);FO(b);}
function ADQ(){var a=this;B.call(a);a.eE=null;a.d_=null;a.dp=null;a.b5=null;a.gv=null;}
function AS5(a){var b=new ADQ();ARm(b,a);return b;}
function ARm(a,b){a.d_=AEH();a.eE=b;a.b5=Se(b);}
function N9(a,b){var c;a.gv=b;c=a.dp;if(c!==null)c.e6=b.fC;JJ(a.b5,b.fC,b.wu);}
function Td(a){var b,c,d;b=B3(a.b5.cg);while(B5(b)){Mz(B7(b));}b=a.d_;c=0;while(true){d=b.cL;if(c>=d.j)break;(Bs(d,c)).V.gt=1;c=c+1|0;}}
function AAg(a){L2(a.d_,a.eE.cN);HV(a.b5);}
function AQ9(a,b){return !AAY(a.d_,b)&&!LO(a.b5,b)?0:1;}
function AUG(a,b,c,d){return !ABZ(a.d_,b,c,d)&&!KI(a.b5,b,c,d)?0:1;}
function ASh(a,b,c){var d;d=Nc(a.b5,b,c);if(d!==null)return d;return ADL(a.d_,b,c);}
function AOr(a,b,c){return !AGV(a.d_,b,c)&&!DD(a.b5)?0:1;}
function SR(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=ANz();i=c.j;j=0;while(j<i){if(f===null){k=(Bs(c,j)).bk;l=TE(Fi(BQ(g.f,k)));m=UA(g.gI);}else{n=f.data;k=n[j].mw.mb;l=!BX(g.gI,n[j].j5)?C(31):TE(Fi(BQ(g.f,k)));m=UA(n[j].j5);}if(J(l)>153){o=Ch(l,0,150);n=new M;O(n);H(H(n,o),C(172));l=N(n);}if(J(m)>153){o=Ch(m,0,150);n=new M;O(n);H(H(n,o),C(172));m=N(n);}p=C8(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bs(c,j);}if(f!==null){q=new Zs;q.rC=d;q.rD=o;}else{q=new Zt;q.wO=d;q.wN=n;}Ns(h,
m,p,l,q);j=j+1|0;}r=YM(h);if(a.dp!==null)U7(a);c=new Si;n=a.eE;o=new R1;o.om=a;o.on=d;AGq(c,n,o);OY(c,r);d=a.gv;AAz(c,d.fC,d.xd);a.dp=AA4(a.eE);d=AAK(c,a.eE);n=a.gv.fC;Nh(d,n.lD,n.lf);K_(a.dp,d);d=a.dp;n=new M;O(n);H(H(n,C(173)),e);Ir(d,N(n),a.gv.vQ,4.0);d=a.dp;d.e6=a.gv.fC;HT(a.d_,d);d=a.dp;s=(d.V.r.b+CF(d.by,2.0)|0)+CF(a.eE,2.0)|0;i=(c.dN+c.ez|0)+c.gp|0;t=CF(c.cd,5.0);e=B6(EL(t,b.a,c.cd.cf.a-i|0),EL(s,b.b,c.cd.cf.b-c.cZ.b|0));Rd(c);ACe(c);s=(c.dN+c.ez|0)+c.gp|0;b=c.cd;i=(b.cf.a-e.a|0)-CF(b,5.0)|0;b=c.cd;t
=(b.cf.b-e.b|0)-CF(b,5.0)|0;d=B6(Bc(s,i),Bc(c.cZ.b,t));FR(a.dp,e,d);Ga(a.eE,c);}
function U7(a){J4(a.d_,a.dp);L4(a.dp);a.dp=null;}
function Sx(a,b){var c;c=new R_;c.oV=a;c.oW=b;return c;}
function Km(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;if(!DD(a.b5)){h=a.b5;i=b.i;b=new U9;b.ft=a;b.bz=c;b.pP=g;b.iR=e;b.nN=f;b.kO=d;j=Vc();e=b.bz.e;d=DY(e);e=GA(e);f=b.bz.fj;if(Sr(f,d,e)!==null){k=new Vk;k.xk=b;k.xj=i;D8(j,C(174),k);}if(M5(f,d,e)!==null){k=new Vi;k.oj=b;k.oi=i;D8(j,C(175),k);}if(V_(f,d,e)!==null){e=new Vh;e.vp=b;e.vq=i;D8(j,C(176),e);}e=new Vj;e.t7=b;e.t8=i;D8(j,C(177),e);if(!b.bz.eg){e=new SN;e.wE=b;D8(j,C(178),e);}e=new SO;e.qK=b;D8(j,C(179),e);if(!b.bz.eg&&ZS(II(b))){e=new SM;e.tV=b;D8(j,C(180),e);}e
=Vc();l=R(CU,3);m=l.data;k=b.kO;BR(k);n=new ZZ;n.vV=k;m[0]=CR(C(181),n);k=b.kO;BR(k);n=new Z1;n.oO=k;m[1]=CR(C(182),n);k=b.kO;BR(k);n=new Z0;n.uQ=k;m[2]=CR(C(183),n);L5(e,C(184),Fo(l),A0O);l=R(CU,2);m=l.data;k=b.iR;BR(k);n=new Xx;n.qd=k;m[0]=CR(C(185),n);k=b.iR;BR(k);n=new Xy;n.tw=k;m[1]=CR(C(186),n);F0(e,C(187),Fo(l));k=new RA;k.x0=b;L5(e,C(188),k,A0O);if(b.bz.bO.cN.j4){l=R(CU,2);m=l.data;k=new Ub;k.pW=b;m[0]=CR(C(189),k);k=new Uc;k.q$=b;m[1]=CR(C(190),k);F0(e,C(191),Fo(l));}F0(j,C(192),IG(e));n=Vc();l=R(CU,
5);m=l.data;f=b.bz;BR(f);g=new Yt;g.qv=f;m[0]=CR(C(193),g);f=b.bz;BR(f);g=new Yu;g.wP=f;m[1]=CR(C(194),g);f=b.bz;BR(f);g=new Yo;g.oc=f;m[2]=CR(C(195),g);f=b.bz;BR(f);g=new Yp;g.u8=f;m[3]=CR(C(196),g);f=b.bz;BR(f);g=new Yq;g.wp=f;m[4]=CR(C(197),g);F0(n,C(198),Fo(l));e=new VM;e.us=b;D8(n,C(199),e);F0(j,C(200),IG(n));GH(h,i,IG(j),Sx(a,c));}}
function ASH(a,b,c,d){return LW(a.d_,b,c,d);}
function ACb(b){var c;c=new Z3;c.oe=b;return c;}
var H6=G(0);
function AQd(a){}
function AL5(a){}
function AC3(){var a=this;B.call(a);a.bb=null;a.cy=null;a.bO=null;a.Y=null;a.kk=null;a.xM=0;a.nM=null;a.c2=null;a.v=0;a.z=0;a.ig=0;a.mN=0;a.go=0;a.kA=null;a.fN=null;a.cE=null;a.U=0;a.e=null;a.eG=null;a.fj=null;a.q=null;a.hd=null;a.dS=null;a.iP=null;a.f_=null;a.vX=0;a.tv=0;a.cS=0;a.cj=0;a.cs=0;a.fs=null;a.fn=null;a.fo=null;a.bo=0;a.dw=0;a.hQ=0;a.iU=0;a.i2=0;a.A6=0;a.yC=0;a.kI=0;a.jZ=0;a.kg=0;a.d5=0;a.c4=null;a.ky=0;a.i7=0;a.fd=null;a.eg=0;a.bL=0;a.h9=null;a.hj=null;a.yf=null;a.iO=null;a.sI=null;a.uD=null;a.jr
=null;a.rF=0;a.xZ=null;a.fr=Fe;a.tM=Fe;a.p6=null;a.vF=null;}
function ADg(a,b){var c=new AC3();ARQ(c,a,b);return c;}
function ARQ(a,b,c){var d,e,f,g;a.bb=new Bf;a.cy=new Bf;a.xM=0;a.nM=R(Bh,10);a.c2=AMJ();a.go=16;a.kA=C(157);a.cE=R(LU,4);d=new Jz;e=new Ln;e.dh=IK();e.c9=IK();e.gR=BJ();e.A=V2(C(31));e.h7=0;e.b6=0;e.c7=AAq(e);e.dV=ASj();d.f=e;d.kc=C(201);d.gI=null;a.e=d;f=new Zz;f.rd=CN(R(K7,0));f.xJ=CN(R(K7,0));f.oF=CN(R(UQ,0));f.wo=CN(R(RH,0));f.vW=CN(R(Ht,0));f.vz=CN(R(Uh,0));a.fj=f;a.q=AJb();e=new We;e.e7=R(LN,16);e.e2=0;e.dz=(-1);a.hd=e;a.f_=R(Fz,0);a.fs=B6(1,0);a.fn=Ja();a.fo=Ja();a.bo=0;a.dw=0;a.hQ=0;a.i2=1;a.kI=1;a.jZ
=1;a.kg=1;a.d5=3;a.c4=AGQ();a.fd=C(202);a.eg=0;a.bL=0;a.h9=null;a.hj=BJ();e=Ff();BR(e);f=new Pn;f.z_=e;a.iO=f;a.xZ=new B$;e=new Pm;e.og=a;a.p6=e;e=new Pl;e.sG=a;a.vF=e;a.bO=b;a.Y=b.cN;a.kk=c;g=a.nM.data;b=new Pk;b.v7=a;g[0]=b;b=new Ps;b.pZ=a;g[1]=b;b=new Pq;b.tQ=a;g[2]=b;b=new Pp;b.xV=a;g[3]=b;b=new Po;b.pD=a;g[4]=b;b=new Pj;b.s4=a;g[5]=b;b=new Pi;b.wB=a;g[6]=b;AIb();a.iU=A0P===A0Q?0:1;}
function J1(a,b,c,d){Ck(a.bb,b);Ck(a.cy,c);UD(a,b,c,d);}
function Yy(a,b,c){a.sI=b;a.uD=c;}
function UD(a,b,c,d){var e;a.cS=Cb(80.0,d);a.cj=Cb(1.0,d);a.cs=Cb(10.0,d);if(!a.bL)Ck(a.bO.dG,a.bb);else U(a.bO.dG,(b.a+c.a|0)-JT(a)|0,b.b);T1(a.c4,a.bO.dG,JT(a),c.b,d);b=a.c2;e=Cb(2.0,d);b.eD.t.a=e;SQ(a,a.kA,a.go);Mm(a);}
function ALS(a){a.mN=1;Mg(a);}
function AII(a){a.mN=0;}
function Mg(a){Rs(a.c2,Ki(Cp(a)));}
function KX(a,b){var c,d;a.dS=b;c=a.c2;d=b.bS.xI;BU(c.eD.K,d);c=a.fn;d=b.bS;Ho(c,d.l_,d.mk);c=a.fo;b=b.bS;Ho(c,b.l_,b.mk);}
function O6(a){JS(a,a.fN.nG,a.go+1|0);}
function AAe(a){var b;b=a.go;if(b<=7)return;JS(a,a.fN.nG,b-1|0);}
function Sl(a){a.iP=CK(a.iP,Ef(a.Y,1024,a.U,a.bO.c0));}
function PN(a,b){JS(a,b,a.go);}
function JS(a,b,c){if(a.bO.b0!==0.0){SQ(a,b,c);Fv(Cp(a));}a.go=c;a.kA=b;}
function Ly(a,b){var c,d,e;if(a.iP.lh!=a.bO.c0)Sl(a);c=a.f_.data;b=c.length;d=0;while(d<b){e=c[d].bR;if(e!==null)e.ht=1;d=d+1|0;}KJ(a.c4);Mm(a);}
function SQ(a,b,c){var d,e,f,g,h,i;d=Cb(c,a.bO.b0);e=a.fN;f=e!==null?e.q1:0;if(!(d==f&&BX(b,a.kA))){KJ(a.c4);g=a.f_.data;c=g.length;f=0;while(f<c){ZV(g[f]);f=f+1|0;}g=a.e.f.A.data;c=g.length;f=0;while(f<c){EA(g[f]);f=f+1|0;}g=a.cE.data;h=HQ(0,0);e=a.Y;i=d;g[h]=Hm(e,b,i,400,0);a.cE.data[HQ(0,1)]=Hm(a.Y,b,i,400,2);a.cE.data[HQ(1,0)]=Hm(a.Y,b,i,700,0);a.cE.data[HQ(1,1)]=Hm(a.Y,b,i,700,2);e=a.cE.data[HQ(0,0)];a.fN=e;c=Fq(e);a.U=C4(c*1.25);a.c2.eD.t.b=Fq(a.fN);Sl(a);f=a.U;h=Zh(a.c2);e=new M;O(e);b=H(H(e,C(203)),
b);BI(b,32);V(H(V(H(V(H(V(b,d),C(204)),c),C(167)),f),C(205)),h);$rt_globals.console.info($rt_ustr(N(e)));if(A0R){c=LE(a.fN,a.U);b=new M;O(b);V(H(b,C(206)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.ig=GT(FN(a),a.z,a.Y.ci,a.cE);Hs(a);Mm(a);}}
function Nv(a){return W(CC(a.e.f)+5|0,a.U);}
function H8(a){return Be(Nv(a)-a.cy.b|0,0);}
function U_(a){return Be(a.hQ-Dl(a)|0,0);}
function Dl(a){var b;b=!a.bL?0:C9(a)+a.cs|0;return Be(1,(a.cy.a-a.cS|0)-b|0);}
function JT(a){return a.bL?a.cS:a.cS-a.cs|0;}
function DO(a){return a.cy.b;}
function LX(a,b){var c,d,e;c=a.e.f;if(VS(c)&&b-c.t1>0.03125?1:0){d=a.rF;e=a.e.f.b6;if(d!=e){a.rF=e;Te(a);}}d=Ma((a.bo+a.A6|0)-a.yC|0,H8(a));e=a.bo==d?0:1;if(e)F5(a,d);return !Ve(a.c2,b)&&!e&&!a.xM?0:1;}
function F5(a,b){var c,d;c=Ma(b,H8(a));if(c!=a.bo){a.bo=c;d=a.uD;if(d!==null)d.i6(c);}}
function Jl(a,b){var c,d;c=Ma(b,U_(a));if(c!=a.dw){a.dw=c;d=a.sI;if(d!==null)d.i6(c);}}
function JL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;b=Jh(a.cy.b,a.U)+7|0;c=a.f_;if(c.data.length<b)a.f_=ACU(b,c,a.vX,a.tv,a.e.f);Cc(a.Y,0);Tv(a.Y,a.bb,a.cy);d=(a.U-Zh(a.c2)|0)/2|0;e=(a.ig-(U5(a.c2)/2|0)|0)-a.dw|0;f=!a.bL?a.cS:(a.cj+a.cs|0)+C9(a)|0;Xa(a.c2,f+e|0,(d+W(a.v,a.U)|0)-a.bo|0);g=CC(a.e.f);h=F2(a);i=Hk(a);a.vX=h;a.tv=i;j=a.bO.dG;U(j,Dl(a),a.U);k=!a.bL?a.bb.a+a.cS|0:((a.bb.a+a.cj|0)+a.cs|0)+C9(a)|0;l=h;while(l<=i&&l<g){m=BQ(a.e.f,l);n=Xr(a,l);ABU(n,m,a.iP,a.cE,a.Y,a.U,Dl(a),a.dw);o=n.bR;a.hQ
=Be(a.hQ,Fa(m)+(40.0*a.bO.b0|0)|0);p=W(a.U,l)-a.bo|0;c=a.eG;q=c===null?null:c.data[l];b=a.bb.b+p|0;m=a.Y;r=a.xZ;s=!a.iU?0.0:0.5;d=Dl(a);f=a.U;p=a.dw;t=a.dS;u=AET(a.q,l);if(u!==null){if(u.b==(-1))u.b=o.L;u.a=GT(o,u.a,a.Y.ci,a.cE);u.b=GT(o,u.b,a.Y.ci,a.cE);}ABR(n,b,k,m,r,j,s,d,f,p,t,u,a.h9,a.hj,a.v!=l?0:1,a.eG===null?0:1,q,a.bO.c0);l=l+1|0;}l=h;while(l<=i&&l<g&&a.kI){n=Xr(a,l);p=W(a.U,l)-a.bo|0;v=AF0(a.q,l);m=a.dS;q=m.bS;r=q.r5;w=a.v==l&&a.eG===null?1:0;a:{if(v)r=q.nJ;else{c=a.eG;if(c!==null){c=c.data;if(l<c.length
&&c[l]!==null){r=IX(m.dR,m,c[l].gx);break a;}}if(w)r=q.je;}}AB$(n,a.Y,k,a.bb.b+p|0,a.U,j,a.dw,Dl(a),r);l=l+1|0;}if(a.i2){x=Bc(i+1|0,g);AEe(a,W(a.U,x)-a.bo|0);}AFh(a);AEp(a,h,i);if(a.jZ)AHa(a,h,i,g);if(a.mN&&e>=(( -U5(a.c2)|0)/2|0)){n=a.c2;m=a.cy;if(ABN(n.eD.u,0,0,m))WK(a.c2,a.Y,a.bb);}AEP(a);ADV(a);Hr(a.Y);}
function AHa(a,b,c,d){var e,f,g,h,i,j,k,l;while(b<=c&&b<d){a:{e=a.eG;if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dS;h=IX(h.dR,h,g.gx);}else h=e!==null?a.dS.bS.eC:a.dS.bS.je;if(!(a.v!=b&&g===null)){a.fs.a=!a.bL?(a.cs-a.cj|0)-a.d5|0:((a.cs+C9(a)|0)+a.cj|0)-a.d5|0;i=a.fs;j=a.U;i.b=j;k=a.bL?0:(a.cS-a.cs|0)+a.cj|0;j=W(j,b)-a.bo|0;g=a.Y;l=a.bb;Bu(g,l.a+k|0,l.b+j|0,i,h);}b=b+1|0;}}
function AEp(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cy.b;e=Bc(d,W(CC(a.e.f),a.U)-a.bo|0);f=a.c4;g=a.bo;h=a.eG===null?a.v:(-1);i=a.Y;j=a.dS;Tv(i,f.fQ,f.fc);LZ(f,i,b,d);Vy(f,b);U2(f,g,e,j,i);k=j.hs;if(e<d){l=f.fQ;Bu(i,l.a,l.b+e|0,B6(f.fc.a,d-e|0),k.hi);}if(b<=h&&h<=c){m=j.hs;c=h/20|0;l=f.cG;j=Bs(l,c%l.j|0);k=f.fQ;e=W(f.cG.j,f.j8);b=j.fa.b;d=((j.iF.b-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%Da(j.bm)|0)|0;b=h%j.d3|0;c=j.R;d=d+W(b,c)|0;if(d<( -c|0))d=d+e|0;U(j.dq,j.fa.a,c);f=j.eb;b=h%j.d3|0;c=j.R;Ci(f,0.0,W(b,c),j.fa.a,
c);EX(j,i,d,k,m.p$,m.op);}Hr(i);}
function F2(a){return Bc(a.bo/a.U|0,CC(a.e.f)-1|0);}
function Hk(a){return Bc(((a.bo+DO(a)|0)-1|0)/a.U|0,CC(a.e.f)-1|0);}
function Mm(a){Q0(a.c4,a.cE.data[0],a.U,a.bO.c0,a.Y);LZ(a.c4,a.Y,F2(a),DO(a));}
function Xr(a,b){var c;c=a.f_.data;return c[b%c.length|0];}
function AG5(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dq(a.q))Dw(a,a.fd);else{b=D2(a.q);c=FT(a.q);d=c.S;e=b.S;f=(d-e|0)+1|0;g=BL(f);h=g.data;i=R(BA,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.fd;e=e+1|0;k=f;}l=Dv(a.v,a.z);m=new VV;m.tH=a;PS(a,g,0,0,i,l,m);b.bf=b.bf+J(a.fd)|0;c.bf=c.bf+J(a.fd)|0;ME(a,a.z+J(a.fd)|0,0);El(a);}return 1;}
function AAO(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dq(a.q)){b=BQ(a.e.f,a.v);if(b.p.data.length>0){c=Yv(a,b);if(c===null)return 1;d=a.e.f;e=a.v;f=Dv(e,a.z);d.b6=d.b6+1|0;g=d.gR;h=R(Hg,1);h.data[0]=ATH(e,0,1,c,f.bk,f.bs);BH(g,h);K0(d,e,0,1,c);GM(b,0,J(c));ME(a,a.z-J(c)|0,0);}}else{f=D2(a.q);c=FT(a.q);i=c.S;j=f.S;i=(i-j|0)+1|0;k=BL(i);h=k.data;l=R(BA,i);m=l.data;e=a.z;n=a.v;o=0;while(j<=c.S){b=BQ(a.e.f,j);if(b.p.data.length>0){b=Yv(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=JE(k,o);h=Dp(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.S)f.bf=Be(0,f.bf-J(b)|0);if(j==c.S){c.bf=Be(0,c.bf-J(b)|0);ME(a,a.z-J(b)|0,0);}i=i+1|0;}f=Dv(n,e);b=new Vd;b.r3=a;PS(a,p,0,1,h,f,b);}El(a);return 1;}
function Yv(a,b){var c,d,e,f;c=EL(0,J(a.fd),OS(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BE;Y(b);K(b);}if(c!=1){d=b.b8.data.length;if(d&&c){e=BW(W(d,c));d=0;f=0;while(f<c){RD(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Ng(e);}else b=AZm;}}return b;}
function PS(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BL(i);k=AYQ(i).data;H2(j,c);c=0;l=k.length;if(c>l){f=new BE;Y(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.b6=o.b6+1|0;p=R(Hg,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ATH(h[m],n[m],k[m],b[m],f.bk,f.bs);m=m+1|0;}BH(o.gR,p);c=0;while(c<i){b=e.data;K0(o,h[c],n[c],k[c],b[c]);g.nR(Di(h[c]),b[c]);c=c+1|0;}}
function AGc(a){var b,c,d,e,f,g,h,i;if(Dq(a.q))GO(a);EA(BQ(a.e.f,a.v));b=a.e.f;c=a.v;d=a.z;e=b.A;f=e.data;g=f[c];e=Dp(e,f.length+1|0);f=e.data;b.A=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DS(R(Cf,0));b.A.data[c+1|0]=g;}else if(d==g.L){f[c]=g;f[c+1|0]=DS(R(Cf,0));}else{f=(Iu(g,d)).data;e=b.A.data;e[c]=f[0];e[c+1|0]=f[1];}FS(b,c,d,0,C(207));El(a);return CE(a,a.v+1|0,0,0);}
function AHh(a){if(Dq(a.q))GO(a);else N1(a.e.f,a.v,a.z);Hs(a);El(a);return 1;}
function ADJ(a){var b,c,d;if(Dq(a.q)){GO(a);return 1;}b=a.z;if(!b&&!a.v)return 1;if(b){c=a.v;b=b-1|0;N1(a.e.f,c,b);}else{c=a.v-1|0;b=F8(a.e.f,c);d=a.e.f;L3(d,c);FS(d,c,F8(d,c),1,C(207));}El(a);return CE(a,c,b,0);}
function Dw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eg)return 0;if(Dq(a.q))GO(a);c=MY(W0(b,C(208),C(31)),C(207),(-1));d=c.data;b=a.e.f;e=a.v;f=a.z;AAw(b,e,f,c);g=d.length;if(!g)h=AZm;else{i=0;j=0;while(j<g){i=i+J(d[j])|0;j=j+1|0;}k=BW(i+W(g-1|0,J(C(207)))|0);c=k.data;l=0;h=d[0];j=0;while(j<J(h)){m=l+1|0;c[l]=P(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<J(C(207))){m=l+1|0;c[l]=P(C(207),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<J(h)){m=l+1|0;c[l]=P(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Ng(k);}FS(b,e,f,0,h);e=a.v;m=(e+g|0)-1|
0;CE(a,m,m!=e?J(d[g-1|0]):a.z+J(d[0])|0,0);FY(a);El(a);return 1;}
function GO(a){var b,c,d;b=D2(a.q);c=a.e.f;d=a.q;Oj(c,d,X_(c,d));CE(a,b.S,b.bf,0);FY(a);El(a);}
function FY(a){var b;b=a.q;b.dn=0;B8(b.bX,a.v,a.z);B8(a.q.bE,a.v,a.z);}
function C9(a){return a.fN.no|0;}
function AEe(a,b){var c,d;c=a.cy.b;if(b<c){d=a.bO.dG;d.b=c-b|0;d.a=!a.bL?Dl(a)+a.d5|0:Dl(a)+a.cj|0;c=!a.bL?(a.bb.a+a.cS|0)-a.d5|0:(((a.bb.a+a.cs|0)+C9(a)|0)+a.cj|0)-a.d5|0;Bu(a.Y,c,a.bb.b+b|0,d,a.dS.bS.eC);}}
function AEP(a){var b;b=a.bL?a.bb.a+C9(a)|0:a.bb.a+a.cy.a|0;Jx(a.fn,a.bo,a.bb.b,DO(a),Nv(a),b,C9(a));b=!a.bL?a.bb.a+a.cS|0:((a.bb.a+a.cj|0)+a.cs|0)+C9(a)|0;Sv(a.fo,a.dw,b,Dl(a),a.hQ,a.bb.b+DO(a)|0,C9(a));}
function ADV(a){var b,c;b=SW(a.fn);c=SW(a.fo);if(!(!b&&!c)){Cc(a.Y,1);if(b)GS(a.fn,a.Y);if(c)GS(a.fo,a.Y);if(b)G0(a.fn,a.Y);if(c)G0(a.fo,a.Y);}}
function AFh(a){var b,c,d,e;b=a.fs;c=a.cy;b.b=c.b;b.a=a.cj;d=!a.bL?a.cS-a.cs|0:(c.a-JT(a)|0)-a.cj|0;b=a.Y;c=a.bb;Bu(b,c.a+d|0,c.b,a.fs,a.dS.bS.uT);a.fs.a=!a.bL?(a.cs-a.cj|0)-a.d5|0:((a.cs+C9(a)|0)+a.cj|0)-a.d5|0;e=a.bL?0:(a.cS-a.cs|0)+a.cj|0;b=a.Y;c=a.bb;Bu(b,c.a+e|0,c.b,a.fs,a.dS.bS.eC);}
function Ma(b,c){return Bc(Be(0,b),c);}
function IM(a,b){var c,d,e,f,g,h,i,j;b=b.data;$rt_globals.console.info("onFileParsed");a.ky=1;a.i7=1;c=CO(b[0]);d=EI(b[1]);e=(CO(b[2])).data[0];if(b.length<5)AFx(a.e.f,c,d);else{f=CO(b[3]);g=f.data;h=EI(b[4]);b=h.data;ABy(a.e.f,c,d,f,h,0);ZO(a,JE(f,g.length),Kk(h,b.length));}WE(a,ADv(e));GW(Cp(a),A0S);Fv(Cp(a));i=Iz(EE(),a.fr);j=new M;O(j);H(GL(H(j,C(209)),i),C(210));$rt_globals.console.info($rt_ustr(N(j)));j=a.jr;if(j!==null)j.g(a);}
function K8(a){var b;b=AVK(a.e.f.dV,null);OU(b);ZO(a,b.k7,b.lt);}
function ZO(a,b,c){var d,e,f,g,h;a.tM=EE();d=a.e.f.b6;e=Cp(a);f=new Ql;f.wf=a;g=R(B,3);h=g.data;h[0]=b;h[1]=c;b=BL(1);b.data[0]=d;h[2]=b;CM(e,f,C(211),g);}
function WE(a,b){var c,d;c=DY(a.e);if(!BX(c,b)){d=new M;O(d);H(H(H(H(d,C(212)),c),C(213)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.kc=b;}}
function Cp(a){return a.bO.hF;}
function JR(a,b){var c,d,e,f,g,h;c=EQ(b);d=new M;O(d);H(H(d,C(214)),c);$rt_globals.console.info($rt_ustr(N(d)));OV(Cp(a),EQ(b));CE(a,0,0,0);a.fr=EE();a.ky=0;a.i7=0;a.eG=null;Mk(a.c4,null);e=new Jz;f=R(BA,1);f.data[0]=C(31);AEZ(e,f,AWT(C(31),C(31),EQ(b),null));a.e=e;CE(a,0,0,0);c=EQ(b);g=Gt(c,46,J(c)-1|0);if(g!=(-1))c=Do(c,g);AX3();h=!Bl(c,C(215))?5120:10240;c=new Tp;c.wZ=a;c.wY=h;c.w0=b;d=b.fJ;if(d!==null)L0(c,Ky(b,d.size));else{d=b.hr.getFile();e=new Vl;e.n0=b;e.n1=c;b=new Vo;b.wX=c;d.then(Bm(e,"f"),Bm(b,"f"));}}
function Ie(a,b,c,d,e){if(Is(a,e))return 1;if(c&&d)return 1;if(c)F5(a,a.bo+((W(b,a.U)*12|0)/10|0)|0);else if(!d){HS(a,a.v+b|0,e);V4(a);}return 1;}
function TK(a,b,c,d){var e,f,g;if(Is(a,d))return 1;e=FN(a);if(!c)f=a.z+b|0;else if(b>=0)f=Hc(e,a.z);else{f=a.z;if(!f)f=(-1);else{c=Jr(e,f);if(c>0&&e.d0.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.d0.data[c-1|0];}}if(f>e.L){if((a.v+1|0)<CC(a.e.f))CE(a,a.v+1|0,0,d);}else if(f>=0)Dh(a,f,d);else{b=a.v;if(b>0){g=(BQ(a.e.f,b-1|0)).L;CE(a,a.v-1|0,g,d);}}XV(a);return 1;}
function Is(a,b){if(Dq(a.q)&&!b){FY(a);Hs(a);return 1;}if(!(b&&Dq(a.q)))FY(a);return 0;}
function CE(a,b,c,d){a.z=c;return HS(a,b,d);}
function HS(a,b,c){a.v=EL(0,b,CC(a.e.f)-1|0);return Dh(a,a.z,c);}
function Dh(a,b,c){a.z=EL(0,b,(FN(a)).L);a.ig=a.bO.b0===0.0?0:GT(FN(a),a.z,a.Y.ci,a.cE);Mg(a);Hs(a);if(c)a.q.dn=1;Mh(a.q,a.v,a.z);a.q.dn=0;return 1;}
function ME(a,b,c){var d;d=Q1(a.q);Dh(a,b,c);a.q=d;}
function Hs(a){V4(a);XV(a);}
function V4(a){var b,c,d,e,f;b=a.bo;c=b+DO(a)|0;d=a.v;e=a.U;d=W(d,e);f=d+e|0;if(d<(b+e|0))F5(a,d-e|0);else if(f>(c-e|0))F5(a,(f-DO(a)|0)+a.U|0);}
function XV(a){var b,c,d,e,f;b=C4(a.bO.b0*30.0);c=a.dw;d=c+Dl(a)|0;e=a.ig;f=e+b|0;if(e<(c+b|0))Jl(a,e-b|0);else if(f>(d-b|0))Jl(a,(f-Dl(a)|0)+b|0);}
function L1(a,b,c){var d,e,f,g,h,i,j,k,l;UR(a);d=a.e.f;e=Cx(d.dh,c);if(e!==null)c=e;a:{f=Cx(d.c9,c);if(f!==null){a.h9=My(d,c);c=B3(f);while(true){if(!B5(c))break a;g=B7(c);BH(a.hj,My(d,g));}}}h=b.bk;i=b.bs;b=a.fj;c=DY(a.e);d=GA(a.e);j=(Cy(b.wo)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.ws(c,d)){d=b.AW;break b;}l=l+1|0;}d=null;}if(d!==null){g=a.e;c=new Og;c.Bk=a;c.Bj=g;c.Bi=h;c.Bh=i;d.to(g,h,i,c,a.iO);}}
function IE(a,b){var c;CE(a,b.bk,b.bs,0);c=Hc(FN(a),a.z);B8(a.q.bE,a.v,c);B8(a.q.bX,a.v,a.z);}
function E0(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.bb;e=c-d.a|0;f=EL(0,((b.b-d.b|0)+a.bo|0)/a.U|0,CC(a.e.f)-1|0);g=!a.bL?a.cS:(a.cj+a.cs|0)+C9(a)|0;h=Be(0,(e-g|0)+a.dw|0);b=BQ(a.e.f,f);d=a.Y.ci;i=a.cE;if(!(b.eN!==null&&!b.gq))Lp(b,d,i);j=b.eN;e=b.p.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.L;else{c=VP(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.p.data.length)k=b.L;else{j=TS(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.p.data[e].w)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(A0T){d=new M;O(d);V(H(V(H(V(H(d,C(216)),e),C(217)),h),C(218)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return Dv(f,k);}
function ZY(a,b){var c;c=b.bk;a.v=c;a.z=b.bs;a.ig=GT(BQ(a.e.f,c),a.z,a.Y.ci,a.cE);Mg(a);}
function FN(a){return BQ(a.e.f,a.v);}
function KF(a,b,c){var d,e;d=C4((a.U*4|0)*c/150.0);e=C4(b);if(d)F5(a,a.bo+d|0);if(e)Jl(a,a.dw+e|0);return 1;}
function U$(a,b,c){a.q.dn=0;return 1;}
function NP(a,b,c){var d,e,f;if(c)return null;d=FP(a.fn,b.i,a.p6,1);if(d!==null)return d;d=FP(a.fo,b.i,a.vF,0);if(d!==null)return d;Jq(a);e=E0(a,b.i);f=Hq(a.e.f,e.bk,e.bs);ZY(a,e);L1(a,e,f);if(!b.bI){b=a.q;if(!b.dn)B8(b.bX,a.v,a.z);}b=a.q;b.dn=1;Mh(b,a.v,a.z);b=new Tm;b.t6=a;return b;}
function N7(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.cn){b=b.i;e=E0(a,b);f=Hq(a.e.f,e.bk,e.bs);g=UT(a,f);h=M5(a.fj,DY(a.e),GA(a.e));if(h!==null){f=a.e;c=e.bk;d=e.bs;e=new Sc;e.zP=a;e.zO=b;e.zQ=g;h.to(f,c,d,e,a.iO);}else{e=Cx(a.e.f.dh,f);if(e!==null){IE(a,e);c=1;}else{e=Cx(a.e.f.c9,f);if(e!==null&&!Eu(e)){if(e.j!=1){SR(a.kk,b,e,a,g);c=1;}else{IE(a,Bs(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(E0(a,b.i)).bk;e=BQ(a.e.f,c);c=Go(e,a.z);d=Hc(e,a.z);b=MU(e,c);if((d-1|0)==e.L){B8(a.q.bX,a.v,OS(e));B8(a.q.bE,
a.v,e.L);}else{if(b!==null){b=b.w;i=0;c:{while(true){j=b.b8.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.z;if(c==i){c=Go(e,c-1|0);d=Hc(e,c);}else{if(d!=i){Rn(a.q,a.v);break b;}c=Go(e,d+1|0);d=Hc(e,c);}}}B8(a.q.bX,a.v,c);a.q.dn=1;CE(a,a.v,d,0);a.q.dn=0;Jq(a);}}break a;case 3:break;default:break a;}Rn(a.q,a.v);Ts(a.hd);Jq(a);}}return 1;}
function Pu(a,b){var c,d,e,f,g,h,i,j,k;c=a.bO.cM;if(F3(a.fn,b.i,c))return 1;if(F3(a.fo,b.i,c))return 1;d=a.c4;if(Fw(b.i,d.fQ,d.fc)&&Gk(c)?1:0)return 1;e=b.i;f=!a.bL?a.bb.a+a.cS|0:((a.bb.a+a.cs|0)+a.cj|0)+C9(a)|0;a:{g=a.bb.b;h=Dl(a);i=DO(a);j=e.a;if(f<=j&&j<(f+h|0)){k=e.b;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Gk(c);if(b.cn){e=E0(a,b.i);e.bs=Go(BQ(a.e.f,e.bk),e.bs);b=a.e.f;if(!Kp(b.dh,e)&&!Kp(b.c9,e)?0:1)return DE(c,C(219));}return DE(c,C(201));}
function AU0(a,b){var c,d,e,f;c=b.cn;if(c&&b.bj==65){c=CC(a.e.f)-1|0;d=F8(a.e.f,c);B8(a.q.bX,0,0);B8(a.q.bE,CC(a.e.f)-1|0,d);return 1;}if(c&&b.bj==80){HK(a);return 1;}if(!a.eg&&c&&b.bj==90){if(Dq(a.q))FY(a);b=a.e.f;b.b6=b.b6+1|0;e=b.gR;d=e.j;if(!d)e=null;else{f=(ED(e,d-1|0)).data;e=OG(b,f[0]);c=1;while(c<f.length){OG(b,f[c]);c=c+1|0;}}if(e!==null){CE(a,e.a,e.b,0);El(a);}return 1;}if(!c&&!b.dd){if(Bl(b.d6,C(220))){Dw(a,C(221));Dh(a,a.z-1|0,0);c=1;}else if(Bl(b.d6,C(222))){Dw(a,C(223));Dh(a,a.z-1|0,0);c=1;}else if
(Bl(b.d6,C(43))){Dw(a,C(224));Dh(a,a.z-1|0,0);c=1;}else if(Bl(b.d6,C(225))){Dw(a,C(226));Dh(a,a.z-1|0,0);c=1;}else if(Bl(b.d6,C(227))){Dw(a,C(228));Dh(a,a.z-1|0,0);c=1;}else if(!Bl(b.d6,C(229)))c=0;else{Dw(a,C(230));Dh(a,a.z-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dd&&!b.cn)){d=b.bj;if(d>=48&&d<=57){c=d-48|0;e=a.nM.data[c];if(e!==null)e.o();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bj){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(ADP(a,b))return 1;if(a.eg)c=0;else c:{switch(b.bj){case 8:break;case 9:c=!b.bI?AG5(a):AAO(a);break c;case 13:c=AGc(a);break c;case 46:c=AHh(a);break c;default:c=0;break c;}c=ADJ(a);}if(c)return 1;if(b.cn&&b.bj==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AM1(b.bj)&&b.bj!=27){if(!b.cn&&!b.dd&&!b.jT)return J(b.d6)>0&&Dw(a,b.d6)?1:0;return 0;}return 0;}
function U3(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bl(C(171),DY(a.e))){b=Cp(a);c=new QQ;c.uG=a;d=R(B,3);e=d.data;e[0]=EV(a.e.f);f=F2(a);g=Hk(a);h=Be(0,f-100|0);f=Bc(CC(a.e.f)-1|0,g+100|0);i=BL(3);j=i.data;j[0]=E_(a.e.f,h);k=a.e.f;l=0;f=Bc(f+1|0,k.A.data.length);m=0;while(m<f){l=l+F8(k,m)|0;if(m!=(k.A.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.c7;k=BJ();Vt(n,n.df,k);i=BL(3*k.j|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bs(k,m);h=p+1|0;o[p]=q.bT;l=h+1|0;o[h]=q.bZ;p=l+1|0;o[l]=q.ff;m=m+
1|0;}e[2]=i;CM(b,c,C(231),d);}}
function HK(a){var b,c,d,e;b=ACo(DY(a.e));if(b===null){b=a.jr;if(b!==null)b.g(a);}else{a.fr=EE();c=Cp(a);d=new V3;d.wn=a;e=R(B,1);e.data[0]=EV(a.e.f);CM(c,d,b,e);}}
function Te(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=DY(a.e);if(b!==null&&!Bl(C(201),b)){if(Bl(C(232),b)){HK(a);HY(a.e.f);}else{c=a.e.f.c7;d=Rg(c,c.df);if(d===null){K8(a);HY(a.e.f);return;}a:{e=Eq([Db(d),C$(d),d.bU.ff]);f=EV(a.e.f);g=BL(1);h=(-1);switch(IT(b)){case -1655966961:if(!Bl(b,C(232)))break a;h=4;break a;case 3401:if(!Bl(b,C(233)))break a;h=3;break a;case 98723:if(!Bl(b,C(234)))break a;h=2;break a;case 3254818:if(!Bl(b,C(171)))break a;h=1;break a;case 3556653:if(!Bl(b,C(201)))break a;h=0;break a;default:}}b:
{switch(h){case 0:h=0;break b;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;case 4:h=4;break b;default:}c=new BE;d=new M;O(d);H(H(d,C(235)),b);Bk(c,N(d));K(c);}g.data[0]=h;i=a.e.f.dV;if(i.gf===null){j=BL(0);k=BW(0);}else{c=AVK(AKl(d.cR,i.eH),d);OU(c);j=c.k7;k=c.lt;}h=a.e.f.b6;b=Cp(a);d=new UY;d.py=a;l=R(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=BL(1);e.data[0]=h;m[3]=e;m[4]=j;m[5]=k;CM(b,d,C(236),l);}}else HY(a.e.f);}
function Hn(a,b,c){var d,e,f,g,h,i;if(c&&a.eg)return 0;d=D2(a.q);e=d.S;if(Dq(a.q)){f=a.e.f;g=a.q;h=X_(f,g);if(c)Oj(f,g,h);if(c){CE(a,d.S,d.bf,0);FY(a);El(a);}}else{h=FC(Fi(a.e.f.A.data[e]),C(207));i=Bc(CC(a.e.f)-1|0,e);B8(a.q.bE,i,0);if(e>=(CC(a.e.f)-1|0))B8(a.q.bE,i,F8(a.e.f,i));else B8(a.q.bX,i+1|0,0);if(c)GO(a);else CE(a,e,0,0);}b.g(h);return 1;}
function ADP(a,b){var c,d,e,f,g;a:{switch(b.bj){case 33:c=b.cn?HS(a,Jh(a.bo,a.U),b.bI):Ie(a,2-Yh(DO(a),a.U)|0,0,b.dd,b.bI);break a;case 34:c=!b.cn?Ie(a,Yh(DO(a),a.U)-2|0,0,b.dd,b.bI):HS(a,((a.bo+DO(a)|0)/a.U|0)-1|0,b.bI);break a;case 35:if(!Is(a,b.bI)&&!Dh(a,(FN(a)).L,b.bI)){c=0;break a;}c=1;break a;case 36:if(!Is(a,b.bI)&&!Dh(a,0,b.bI)){c=0;break a;}c=1;break a;case 37:c=b.cn;if(c&&b.dd){Jq(a);d=a.hd;e=d.dz;if(e<=0)d=null;else{f=d.e7.data;c=e-1|0;d.dz=c;d=f[c];}if(d===null)c=1;else{CE(a,MH(d),Kx(d),0);a.q=
Q1(d.k0);c=1;}break a;}c=TK(a,(-1),c,b.bI);break a;case 38:c=Ie(a,(-1),b.cn,b.dd,b.bI);break a;case 39:c=b.cn;if(c&&b.dd){d=a.hd;c=d.dz;if(c==(d.e2-1|0))d=null;else{f=d.e7.data;c=c+1|0;d.dz=c;d=f[c];}if(d===null)c=1;else{CE(a,MH(d),Kx(d),0);a.q=Q1(d.k0);c=1;}break a;}c=TK(a,1,c,b.bI);break a;case 40:c=Ie(a,1,b.cn,b.dd,b.bI);break a;default:}c=0;}if(c&&b.bI)B8(a.q.bE,a.v,a.z);if(c){L1(a,Dv(a.v,a.z),Hq(a.e.f,a.v,a.z));if(!(a.h9!==null&&!Eu(a.hj))){g=a.z;if(g>0)L1(a,Dv(a.v,g-1|0),Hq(a.e.f,a.v,a.z-1|0));}}return c;}
function Jq(a){var b,c,d,e,f,g,h;b=a.hd;c=b.dz;b=c<0?null:b.e7.data[c];if(b!==null&&a.v==MH(b)&&a.z==Kx(b))return;d=a.hd;b=new LN;c=a.v;e=a.z;f=a.q;b.mq=Dv(c,e);g=Q1(f);b.k0=g;g.dn=0;e=d.dz;h=d.e2;if(e==(h-1|0))Xt(d,b);else{c=e+1|0;while(c<h){Ts(d);c=c+1|0;}Xt(d,b);}d.dz=d.dz+1|0;}
function El(a){a.e.f.t1=Ki(Cp(a));}
function L_(a,b){var c,d,e,f,g,h,i;a.yf=null;UR(a);c=a.e;a.e=b;a.fr=EE();d=ACo(DY(a.e));if(d!==null){e=Cp(a);f=new Zn;f.s7=a;g=R(B,1);g.data[0]=EV(a.e.f);CM(e,f,d,g);}g=(Cy(a.fj.vW)).data;h=g.length;i=0;while(i<h){g[i].nR(c,b);i=i+1|0;}}
function UR(a){a.h9=null;H1(a.hj);}
function ACo(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(IT(b)){case -1655966961:if(!Bl(b,C(232)))break a;c=3;break a;case 3401:if(!Bl(b,C(233)))break a;c=2;break a;case 98723:if(!Bl(b,C(234)))break a;c=1;break a;case 3254818:if(!Bl(b,C(171)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=C(237);break b;case 2:b=C(238);break b;case 3:b=C(239);break b;default:b=null;break b;}b=C(240);}}return b;}
function UT(a,b){var c;c=My(a.e.f,b);if(c===null)return C(31);return c.w;}
function DR(a,b){return Fw(b,a.bb,a.cy);}
function KG(a,b){var c,d,e,f,g;a.eG=b;Bt(Bx(),C(241));b=a.eG;if(b===null){Bt(Bx(),C(242));Mk(a.c4,null);}else{b=b.data;c=D7(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gx<<24>>24;e=e+1|0;}Mk(a.c4,c);}}
var Ik=G(0);
function WS(){B.call(this);this.wz=null;}
function AOb(a,b){var c;c=a.wz;XC(c,c.E,c.D);}
function WT(){B.call(this);this.sm=null;}
function AIX(a,b){var c;c=a.sm;XC(c,c.D,c.E);}
function WU(){B.call(this);this.o0=null;}
function AOo(a,b){AAB(a.o0,b);}
function WN(){B.call(this);this.vC=null;}
function APm(a,b){AAB(a.vC,b);}
function WP(){B.call(this);this.r7=null;}
function AUk(a,b){return AGt(a.r7,b);}
function IA(){var a=this;B.call(a);a.k$=null;a.rA=null;a.qO=null;}
function A0U(a,b){var c=new IA();Oh(c,a,b);return c;}
function A0V(a,b,c){var d=new IA();Zq(d,a,b,c);return d;}
function Oh(a,b,c){Zq(a,b,null,c);}
function Zq(a,b,c,d){a.k$=b.bW;a.rA=c;a.qO=d;}
function AL8(a,b){var c,d;if(b.cn&&b.bj==79){c=a.rA;if(c!==null&&b.bI)XY(a.k$,c);else MQ(a.k$,a.qO);d=1;}else d=0;return d;}
function WQ(){B.call(this);this.ow=null;}
function AS9(a,b){var c,d;c=a.ow;d=Ea(c.s,c.E)?c.E:!Ea(c.s,c.D)?null:c.D;if(d!==null){JR(d,b);c.gg=null;}}
function WR(){B.call(this);this.t0=null;}
function AKV(a,b){b=b;return ADS(a.t0,b);}
var AEQ=G();
var ABH=G(0);
function ACn(b,c,d){return H$(b,c,d,255,new B$);}
function H$(b,c,d,e,f){Ci(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Y7(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AMA(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bp=g+i;e.bG=h+i;e.bl=j+i;return e;}
function HZ(b,c,d,e,f){f=Y7(b,c,d,f);f.bH=e;return f;}
function G7(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Wm(){var a=this;B.call(a);a.cN=null;a.hF=null;a.cM=null;a.cf=null;a.b0=0.0;a.c0=0;a.eu=null;a.ek=null;a.dG=null;a.vT=null;a.x7=null;a.x8=null;}
function Kq(a){var b;b=a.eu;if(b!==null)b.uK();}
function KW(a){var b;b=a.eu;if(b!==null)b.xU();}
function Pr(a,b){var c;c=a.hF.dZ!==(Em()).activeElement?0:1;if(c)KW(a);a.eu=b;if(c)Kq(a);}
function Ga(a,b){KW(a);a.eu=b;Kq(a);}
function Ea(a,b){return b!==a.eu?0:1;}
function Js(a){return a.cN.ci;}
function HH(a,b){return Gm(a.cN,b.kD,Cb(b.iW,a.b0));}
function CF(a,b){return Cb(b,a.b0);}
function Y6(a,b){if(a.c0==b)return 0;a.c0=b;Fv(a.hF);return 1;}
var TO=G();
function AMK(a,b){var c,d,e;c=b.cn;d=c&&!b.bI&&!b.dd&&!b.jT?1:0;a:{if(d){d=b.bj;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bI&&!c&&!b.dd&&!b.jT?1:0;d=d&&b.bj==46?1:0;}b:{if(!d){e=b.bj;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.le=1;}return 0;}
function TN(){B.call(this);this.pQ=null;}
function AJ9(a,b){var c;c=a.pQ.eu;return c!==null&&c.hN(b)?1:0;}
function B$(){var a=this;B.call(a);a.bp=0.0;a.bG=0.0;a.bl=0.0;a.bH=0.0;}
function AGO(a){var b=new B$();AQh(b,a);return b;}
function Ci(a,b,c,d,e){a.bp=b;a.bG=c;a.bl=d;a.bH=e;}
function AQh(a,b){a.bp=b.bp;a.bG=b.bG;a.bl=b.bl;a.bH=b.bH;}
function BU(a,b){a.bp=b.bp;a.bG=b.bG;a.bl=b.bl;a.bH=b.bH;return a;}
function AVU(a,b){if(a===b)return 1;return b!==null&&BG(a)===BG(b)&&Lm(a,b)?1:0;}
function Lm(a,b){return b.bp===a.bp&&b.bG===a.bG&&b.bl===a.bl&&b.bH===a.bH?1:0;}
var EJ=G(0);
function AGT(){B.call(this);this.cL=null;}
function AEH(){var a=new AGT();ASk(a);return a;}
function ASk(a){a.cL=BJ();}
function HT(a,b){Tk(a.cL,0,b);}
function J4(a,b){XW(a.cL,b);}
function L2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.cL.j-1|0;while(c>=0){d=Bs(a.cL,c);d.W.fF(b);e=d.V;f=d.e6.iV;if(!Lo(e)){if(!Ys(e)&&!(!e.gt&&e.de!==null)){e.gt=0;W7(e);g=e.eF;h=(g.dt+g.eU+5.0)/10.0;i=CF(e.fI,e.kh);g=b.ci;j=e.eF;k=e.hz;l=h*2.0;Cu(g,j);m=i+LC(g,k,l)|0;e.hA=m;m=EL(0,m,e.r.a);if(m){g=Ef(b,m,e.r.b,e.fI.c0);Cu(g,e.eF);j=e.hz;l=i;h=l+h;k=e.eF;n=k.dt;BM(g,j,h,l+n-(n+k.eU)/16.0);j=e.de;if(j===null){j=CZ(b);e.de=j;}CL(j,g);EK(g);Ci(e.i1,0.0,0.0,BT(e.de),Da(e.de));}}g=f.tL;j=e.de;if(j===null)Rh(e,b,0,
e.r.a,g);else{i=BT(j);f=f.wi;if(e.fI.c0){j=e.H;m=j.a;o=j.b;j=e.de;Ed(b,m,o,j.fl,e.i1,j,f,g);}else{j=e.H;m=j.a;o=j.b;k=e.de;Eb(b,m,o,k.fl,e.i1,k,f,g,0.0);}m=e.r.a;if(i<m)Rh(e,b,i,m-i|0,g);}}Cc(b,1);i=CF(d.by,2.0);m=Lo(d.V);f=d.by;e=f.dG;f=f.vT;o=m?0:d.V.r.b;g=d.W.r;U(f,g.a,g.b+o|0);ACy(b,f,!m?d.V.H:d.W.H,d.e6.iV.mn, -i|0,e);f=d.W;AES(b,f.r,f.H,i,o,QU(d.e6.jD,d.by.b0),d.e6.jD.nd,e);c=c+(-1)|0;}}
function AAY(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cL;if(c>=d.j)break;a:{e=Bs(d,c);f=b.i;if(DM(e.V,f))g=DE(e.by.cM,null);else{g=CF(e.by,7.0);h=CF(e.by,25.0);if(PI(e,f.a,g)){i=Pd(e,f.a,h);if(Q4(e,f.b,g)){g=DE(e.by.cM,MI(i,C(243)));break a;}if(O8(e,f.b,g)){g=DE(e.by.cM,MI( -i|0,C(243)));break a;}}if(YA(e,f.b,g)){h=Zd(e,f.b,h);if(AAo(e,f.a,g)){g=DE(e.by.cM,MI(h,C(244)));break a;}if(Ob(e,f.a,g)){g=DE(e.by.cM,MI( -h|0,C(244)));break a;}}g=0;}}b:{c:{if(!g){if(!DM(e.W,b.i))break c;if(!e.W.bJ(b)&&!DE(e.by.cM,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABZ(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cL;if(e>=f.j)break;a:{b:{g=Bs(f,e);if(!DM(g.V,b.i)){if(!DM(g.W,b.i))break b;if(!g.W.cp(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function ADL(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cL;if(d>=e.j)return null;a:{f=Bs(e,d);if(!c){b:{e=b.i;if(!Lo(f.V)&&DM(f.V,e)){g=f.W.H;h=g.a;i=e.a;h=h-i|0;j=g.b;k=e.b;j=j-k|0;e=f.V.H;i=e.a-i|0;k=e.b-k|0;e=new Bf;g=new Pf;g.pa=f;g.pb=i;g.pc=k;g.pd=e;g.o8=h;g.o$=j;}else{h=CF(f.by,7.0);i=CF(f.by,25.0);if(PI(f,e.a,h)){j=Pd(f,e.a,i);if(Q4(f,e.b,h)){g=I4(f,e,j,(-1));break b;}if(O8(f,e.b,h)){g=I4(f,e,j,1);break b;}}if(YA(f,e.b,h)){i=Zd(f,e.b,i);if(AAo(f,e.a,h)){g=I4(f,e,(-1),i);break b;}if(Ob(f,e.a,h)){g
=I4(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DM(f.V,b.i)?A0W:f.W.ce(b,c);e=f.W;if(e===null)g=null;else if(g===null)g=!DM(e,b.i)?null:A0W;}if(g!==null)break;d=d+1|0;}return g;}
function AGV(a,b,c){var d,e,f,g;d=0;while(true){e=a.cL;if(d>=e.j)break;a:{b:{f=Bs(e,d);if(!DM(f.V,b.i)){if(!DM(f.W,b.i))break b;if(!f.W.c3(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function LW(a,b,c,d){var e,f;e=0;while(true){f=a.cL;if(e>=f.j)break;if((Bs(f,e)).W.db(b,c,d))return 1;e=e+1|0;}return 0;}
function ANY(a,b,c){var d,e,f;d=0;while(true){e=a.cL;if(d>=e.j)break;f=Bs(e,d);e=f.W;e.ka(e.H,e.r,c);e=f.V;if(e.hu!==null){e.eF=null;e.hA=0;e.gt=1;}Kc(f);d=d+1|0;}}
function RR(a,b){var c,d,e;c=0;d=0;while(true){e=a.cL;if(d>=e.j)break;Bs(e,d);c=0|c;d=d+1|0;}return c;}
function Z6(a,b,c){var d;d=0;while(true){b=a.cL;if(d>=b.j)break;Bs(b,d);d=d+1|0;}}
function AF9(){var a=this;B.call(a);a.c5=null;a.cg=null;a.jQ=null;a.kj=null;a.nf=null;a.kG=null;}
function Se(a){var b=new AF9();AR3(b,a);return b;}
function AR3(a,b){a.cg=BJ();a.kG=A0X;a.c5=b;Bb(b.ek,a);}
function JJ(a,b,c){a.jQ=c;a.nf=b;b=B3(a.cg);while(B5(b)){In(B7(b),a.nf);}}
function GH(a,b,c,d){var e,f;e=a.c5;f=e.cf;if(W(f.a,f.b)&&e.b0!==0.0){if(a.jQ!==null&&!DD(a)){a.kG=d;a.kj=HH(a.c5,a.jQ);e=PR(a,b,c,null);b=new XS;b.t4=a;e.kp=b;Ga(a.c5,a);return;}b=new BE;Y(b);K(b);}c=new CS;Bk(c,C(245));K(c);}
function DZ(a){var b;if(DD(a)){b=a.c5;if(b.eu===a)b.eu=null;VD(a,null);a.kG.o();a.kG=A0X;}}
function Y$(a,b,c,d,e){var f,g,h;f=AD6();AAy(f);K3(f,c.dK());In(f,a.nf);Ig(f,a.kj,a.c5);if(d===null)g=b.a;else{g=b.a;g=a.c5.cf.a<((g+(Eo(d)).a|0)+(Eo(f)).a|0)?g-(Eo(f)).a|0:(g+(Eo(d)).a|0)-d.fD|0;}h=b.b;b=a.c5.cf;KV(f,Be(0,Bc(g,b.a-(Eo(f)).a|0)),Be(0,Bc(h,b.b-(Eo(f)).b|0)));b=new Zy;b.qB=a;b.qC=f;b.qD=e;f.lJ=b;BH(a.cg,f);return f;}
function PR(a,b,c,d){return Y$(a,b,c,d,null);}
function AVC(a,b,c){var d;a.kj=HH(a.c5,a.jQ);d=B3(a.cg);while(B5(d)){Ig(B7(d),a.kj,a.c5);}}
function HV(a){var b,c;if(Eu(a.cg))return;Cc(a.c5.cN,1);b=0;while(true){c=a.cg;if(b>=c.j)break;MS(Bs(c,b),a.c5);b=b+1|0;}}
function LO(a,b){var c,d;c=0;d=a.cg.j-1|0;a:{while(d>=0){c=LR(Bs(a.cg,d),b.i,a.c5.cM);if(c)break a;d=d+(-1)|0;}}return c;}
function KI(a,b,c,d){var e,f;e=0;f=a.cg.j-1|0;a:{while(f>=0){e=MJ(Bs(a.cg,f),b.i,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Nc(a,b,c){var d,e,f;d=null;e=a.cg.j-1|0;a:{while(e>=0){f=Bs(a.cg,e);d=b.i;c=E2(f.co,d);if(!c&&!La(f.co)){d=f.kp;if(d!==null)d.o();}d=!c?null:A0W;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AOO(a,b){var c;if(!DD(a))return 0;a:{switch(b.bj){case 27:DZ(a);c=1;break a;default:}c=0;}return c;}
function ADk(b,c){var d,e,f;d=b.en;e=c.cX;f=c.fD;return B6((d.a-(e*3|0)|0)-f|0,(d.b-e|0)-f|0);}
function VD(a,b){var c,d;c=a.cg.j-1|0;a:{while(true){if(c<0)break a;d=Bs(a.cg,c);if(b===d)break;ED(a.cg,c);O3(d);c=c+(-1)|0;}}}
function DD(a){return a.cg.j<=0?0:1;}
function ACE(){var a=this;B.call(a);a.eD=null;a.ls=0.0;a.hT=0.0;a.gH=0;}
function AMJ(){var a=new ACE();ARh(a);return a;}
function ARh(a){var b;b=Vg(0,0,2,20);a.eD=b;a.ls=0.5;a.hT=0.0;H$(187,187,187,255,b.K);}
function Zh(a){return a.eD.t.b;}
function U5(a){return a.eD.t.a;}
function Ve(a,b){var c,d;a:{c=a.gH;if(b>a.hT)while(true){d=a.hT+a.ls;a.hT=d;a.gH=a.gH?0:1;if(b>d)continue;else break a;}}return a.gH==c?0:1;}
function Xa(a,b,c){U(a.eD.u,b,c);}
function Rs(a,b){a.hT=b+a.ls*1.25;a.gH=1;}
function WK(a,b,c){if(a.gH)Tg(a.eD,b,c.a,c.b);}
function LU(){var a=this;B.call(a);a.nG=null;a.yw=null;a.yH=0.0;a.q1=0;a.yP=0;a.zl=0;a.sU=0;a.Ah=0;a.dt=0.0;a.eU=0.0;a.yG=0.0;a.no=0.0;a.yM=0;a.o1=null;}
function Fq(a){return C4(a.dt+a.eU);}
function KT(a,b){return C4((a.dt+a.eU)*b);}
function Jz(){var a=this;B.call(a);a.gI=null;a.f=null;a.kc=null;a.vo=null;}
function AW7(a,b){var c=new Jz();AEZ(c,a,b);return c;}
function A0Y(a,b,c){var d=new Jz();ZM(d,a,b,c);return d;}
function AEZ(a,b,c){ZM(a,b,null,c);}
function ZM(a,b,c,d){var e,f,g,h,i,j;a.gI=d;a.kc=c;if(d===null)c=null;else{c=d.f5;c=c===null?null:!D9(c,C(246))&&!D9(c,C(247))&&!D9(c,C(248))&&!D9(c,C(249))&&!D9(c,C(250))&&!D9(c,C(251))?(D9(c,C(215))?C(171):D9(c,C(252))?C(233):!D9(c,C(253))?C(201):C(232)):C(234);}e=b.data;a.vo=c;c=new Ln;f=e.length;if(!f)g=V2(C(31));else{g=R(CD,f);h=g.data;i=0;while(i<f){j=new CD;b=R(Cf,1);b.data[0]=Rt(e[i]);Iq(j,b);h[i]=j;i=i+1|0;}}b=g.data;c.dh=IK();c.c9=IK();c.gR=BJ();if(!b.length){c=new BE;Y(c);K(c);}c.A=g;c.h7=0;c.b6=
0;c.c7=AAq(c);c.dV=ASj();a.f=c;}
function DY(a){var b;b=a.kc;if(b===null)b=a.vo;return b;}
function GA(a){var b;b=a.gI;return b===null?null:b.jx;}
function Zz(){var a=this;B.call(a);a.rd=null;a.xJ=null;a.oF=null;a.wo=null;a.vW=null;a.vz=null;}
function M5(a,b,c){return SS(a,Cy(a.rd),b,c);}
function Sr(a,b,c){return SS(a,Cy(a.xJ),b,c);}
function SS(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.ws(c,d))return g.zA;f=f+1|0;}return null;}
function V_(a,b,c){var d,e,f,g;d=(Cy(a.oF)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.ws(b,c))return g.zt;f=f+1|0;}return null;}
function AGo(){var a=this;B.call(a);a.bX=null;a.bE=null;a.dn=0;}
function AJb(){var a=new AGo();AVA(a);return a;}
function Q1(a){var b=new AGo();APW(b,a);return b;}
function AVA(a){a.bX=new Hu;a.bE=new Hu;}
function APW(a,b){var c;c=new Hu;a.bX=c;a.bE=new Hu;Ws(c,b.bX);Ws(a.bE,b.bE);a.dn=b.dn;}
function Mh(a,b,c){B8(a.bE,b,c);if(!a.dn)B8(a.bX,b,c);}
function Rn(a,b){B8(a.bX,b,0);B8(a.bE,b+1|0,0);}
function D2(a){if(To(a.bX,a.bE)>0)return a.bE;return a.bX;}
function FT(a){if(To(a.bX,a.bE)<0)return a.bE;return a.bX;}
function AET(a,b){var c,d,e,f;c=D2(a);d=FT(a);e=c.S;if(e<=b){f=BF(b,d.S);if(f<=0)return B6(b<=e?c.bf:0,f>=0?d.bf:(-1));}return null;}
function Dq(a){var b,c;b=a.bX;c=a.bE;return (b===c?1:c!==null&&BG(b)===BG(c)?(b.S==c.S&&b.bf==c.bf?1:0):0)?0:1;}
function AF0(a,b){var c,d;if(!Dq(a))return 0;c=D2(a);d=FT(a);return c.S<=b&&b<d.S?1:0;}
function We(){var a=this;B.call(a);a.e7=null;a.e2=0;a.dz=0;}
function Xt(a,b){var c,d,e;c=a.e2;d=a.e7;if(c==d.data.length)a.e7=Dp(d,c+16|0);d=a.e7.data;e=a.e2;a.e2=e+1|0;d[e]=b;}
function Ts(a){var b,c,d;b=a.dz;c=a.e2-1|0;if(b==c)a.dz=b-1|0;d=a.e7.data;a.e2=c;d[c]=null;}
function Fz(){var a=this;B.call(a);a.b4=0;a.bR=null;a.e_=null;a.d2=0;a.dx=0;}
var A0Z=0;var A0R=0;function ABU(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bR;j=i===b&&!i.ht?0:1;if(j){a.bR=b;Lp(b,e.ci,d);}i=a.bR;k=i===null?0:Fa(i)<g?Jh(Fa(a.bR),1024):Jh(g,1024)+1|0;l=k<=a.d2?0:1;if(l)a.d2=k;if(!(!j&&!l)){if(A0Z){m=b.f9;$rt_globals.console.info("fMeasure"+m.data);A0Z=0;}if(!A0R){i=c.c1;b="alphabetic";i.textBaseline=b;}else{b=c.c1;i="top";b.textBaseline=i;}a.dx=h/1024|0;while(true){i=a.e_;if(i.j>=a.d2)break;BH(i,CZ(e));}k=0;while(k<a.d2){Jg(a,c,f,d,a.dx+k|0);k=k+1|0;}a.bR.ht=0;}if(!Eu(a.e_)&&h<=
Fa(a.bR)){k=h/1024|0;g=a.dx;if(k!=g){if(NH(k-g|0)>=a.d2){g=0;while(g<a.d2){Jg(a,c,f,d,k+g|0);g=g+1|0;}a.dx=k;}else{while(true){h=a.dx;if(h>=k)break;Jg(a,c,f,d,h+a.d2|0);a.dx=a.dx+1|0;}while(true){h=a.dx;if(h<=k)break;Jg(a,c,f,d,h-1|0);a.dx=a.dx-1|0;}}}}}
function LE(b,c){return (c-Fq(b)|0)/2|0;}
function Oc(b,c){return LE(b,c)+b.sU|0;}
function Jg(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;EM(b);f=a.bR.f9;g=e*1024|0;h=QT(a,g);if(h>=a.bR.p.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.b4;a:{while(true){l=a.bR;if(h>=l.p.data.length)break a;l=U0(l,h);m=!A0R?Oc(d.data[l.cc],c):LE(d.data[l.cc],c);n=d.data;o=f.data;Cu(b,n[l.cc]);BM(b,l.w,k,m);k=o[h]-j+a.b4;if(k>1024.0)break;h=h+1|0;}}CL(Bs(a.e_,e%a.d2|0),b);}
function ABR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(Eu(a.e_))return;if(!a.d2)return;if(j>Fa(a.bR))return;s=a.bR;t=s.eN;u=s.p;v=j/1024|0;w=QT(a,j);x= -a.b4|0;y=i;a:{while(true){z=u.data;ba=z.length;if(w>=ba)break a;bb=w!=(ba-1|0)?0:1;if(x>=h)break;bc=t.data;bd=Bs(a.e_,v%a.d2|0);be=z[w];bf=bc[w]+a.b4|0;bg=v*1024|0;bh=(bf-bg|0)>1024?0:1;bi=v+1|0;bj=bi*1024|0;bk=Bc(bj,bf)-j|0;if(bh&&bb)bk=bk+a.b4|0;if((x+bk|0)>h)bk=h-x|0;bl=l!==null?0:1;b:
{if(!bl){bm=!bb?a.b4:2*a.b4|0;ba=l.a;bn=l.b;if(!(ba<bn&&j<=bn&&(j+bk|0)>(ba+bm|0)?0:1)){bo=0;break b;}}bo=1;}c:{if(!bl){bm=!bb?a.b4:2*a.b4|0;if(j>=l.a&&(j+bk|0)<=(l.b+bm|0)?1:0){bn=1;break c;}}bn=0;}s=null;if(o&&!p)s=k.bS.je;if(be===m)s=k.bS.p8;bp=B3(n);d:{while(B5(bp)){if(BX(B7(bp),be)){bm=1;break d;}}bm=0;}if(bm)s=k.bS.xL;if(q!==null){bc=q.mC;if(bc===null)bm=0;else{bc=bc.data;bm=w>=bc.length?0:bc[w];}s=AAE(k.dR,k,bm,q.gx);}if(!bn&&!bo){l.b=Bc(l.b,Fa(a.bR));ba=j>=l.a?bk:(Bc(bf,bj)-l.a|0)-(!bb?a.b4:0)|0;bj=
(j+bk|0)<=(l.b+(!bb?a.b4:2*a.b4|0)|0)?0:(Bc(bf,bj)-l.b|0)-(!bb?a.b4:0)|0;bg=j-bg|0;bm=x+c|0;bq=bg;bf=bk-ba|0;Ci(e,bq,0.0,bf,y);U(f,bf,i);Jc(a,d,bm,b,f,e,be,bd,k,s,g,0,r);bg=bg+bk|0;Ci(e,bg-bj|0,0.0,bj,y);U(f,bj,i);bn=bm+bk|0;Jc(a,d,bn-bj|0,b,f,e,be,bd,k,s,g,0,r);br=bg-ba|0;bm=ba-bj|0;Ci(e,br,0.0,bm,y);U(f,bm,i);Jc(a,d,bn-ba|0,b,f,e,be,bd,k,s,g,1,r);}else{Ci(e,j-bg|0,0.0,bk,y);U(f,bk,i);Jc(a,d,x+c|0,b,f,e,be,bd,k,s,g,bn,r);}j=j+bk|0;x=x+bk|0;if(!bh){w=w+(-1)|0;v=bi;}w=w+1|0;}}}
function Jc(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o;if(e.a&&e.b){if(f.bH!==0.0&&f.bl!==0.0){n=i.uo.data[g.cD];if(l)o=i.bS.nJ;else{g=n.pY;if(g===null)g=i.bS.eC;if(j===null)j=BR(g);o=j;}if(!m)Eb(b,c,d,e,f,h,n.lo,o,k);else Ed(b,c,d,e,f,h,n.lo,o);return;}return;}}
function QT(a,b){var c,d,e,f,g,h,i;c=a.bR;d=c.f9;e=0;f=c.p.data.length;g=b;b=BF(e,f);if(b>0){c=new BE;Y(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BF(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ZV(a){a.bR=null;Et(a.e_,new Ym);H1(a.e_);}
function AB$(a,b,c,d,e,f,g,h,i){var j,k;j=Fa(a.bR);if(j)j=j+a.b4|0;if(!j)j=j-a.b4|0;k=Be( -a.b4|0,j-g|0);if(k>=h)return;U(f,h-k|0,e);Bu(b,c+k|0,d,f,i);}
function ACU(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(Fz,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=BQ(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bR===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new Fz;f.b4=3;f.e_=BJ();f.dx=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)ZV(o);h=h+1|0;}return g;}
function AEq(){A0R=0;}
function AG3(){var a=this;B.call(a);a.fz=null;a.da=null;a.ep=null;a.eT=null;a.iY=null;a.iZ=null;}
function Ja(){var a=new AG3();ANw(a);return a;}
function ANw(a){a.fz=new Bf;a.da=new Bf;a.ep=new Bf;a.eT=new Bf;a.iY=new B$;a.iZ=new B$;}
function SW(a){var b;b=a.da;return !W(b.a,b.b)?0:1;}
function Ij(a,b){return Fw(b,a.ep,a.eT);}
function FP(a,b,c,d){var e,f,g,h,i;e=Ij(a,b);f=Fw(b,a.fz,a.da);if(!e&&!f)return null;if(!f){if(!d)c.g(Yz(a,b.a-a.ep.a|0));else c.g(Rl(a,b.b-a.ep.b|0));}g=!d?a.fz.a+(a.da.a/2|0)|0:a.fz.b+(a.da.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new TZ;b.wR=a;b.wS=c;b.wQ=i;}else{b=new TY;b.qy=a;b.qw=c;b.qx=i;}return b;}
function Ho(a,b,c){if(b!==null&&c!==null){BU(a.iY,c);BU(a.iZ,b);return;}}
function ACZ(b,c){var d;d=new Wj;d.sW=b;d.xX=c;return d;}
function Rl(a,b){var c,d,e;c=a.eT.b;d=a.da.b;e=c-d|0;return ACZ(Bc(Be(0,b-(d/2|0)|0),e),e);}
function Yz(a,b){var c,d,e;c=a.eT.a;d=a.da.a;e=c-d|0;return ACZ(Bc(Be(0,b-(d/2|0)|0),e),e);}
function Jx(a,b,c,d,e,f,g){YU(a,b,c,d,e,f,g,1);}
function Sv(a,b,c,d,e,f,g){YU(a,b,c,d,e,f,g,0);}
function YU(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){U(a.eT,0,0);U(a.da,0,0);}else{i=Bc(g*3|0,d);j=Be(RE(d,d,e),i);e=e-d|0;i=d-j|0;i=i?RE(b,i,e):0;if(!h){k=a.fz;k.a=i+c|0;k.b=f-g|0;l=a.da;l.a=j;l.b=g;l=a.ep;l.a=c;l.b=k.b;k=a.eT;k.a=d;k.b=g;}else{k=a.fz;k.a=f-g|0;k.b=i+c|0;l=a.da;l.a=g;l.b=j;l=a.ep;l.a=k.a;l.b=c;k=a.eT;k.a=g;k.b=d;}}}
function Zk(a,b){GS(a,b);G0(a,b);}
function GS(a,b){var c;c=a.ep;Bu(b,c.a,c.b,a.eT,a.iY);}
function G0(a,b){var c,d;c=a.da;c.a=c.a-2|0;c.b=c.b-2|0;d=a.fz;Bu(b,d.a+1|0,d.b+1|0,c,a.iZ);b=a.da;b.a=b.a+2|0;b.b=b.b+2|0;}
function F3(a,b,c){return Ij(a,b)&&Gk(c)?1:0;}
function ACC(){var a=this;B.call(a);a.zS=20;a.fQ=null;a.fc=null;a.jv=0.0;a.jl=null;a.nl=0;a.j8=0;a.cG=null;a.kZ=null;a.eS=null;a.f2=null;a.fY=0;}
function AGQ(){var a=new ACC();AU7(a);return a;}
function AU7(a){a.zS=20;a.fQ=new Bf;a.fc=new Bf;a.cG=BJ();a.kZ=D7(0);}
function Vy(a,b){var c,d,e,f,g;c=a.fY;if(b==c)return;d=a.cG.j;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Be(0,(c-1|0)/20|0);f=Be(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Ti(a,b);a.fY=b;}else{if(a.fY>=b)while(true){if(g<f)break a;a.fY=O0(Bs(a.cG,g%d|0),a.eS,a.f2,a.fY,b,e,a.jv);g=g+(-1)|0;}while(f<=g){a.fY=O0(Bs(a.cG,f%d|0),a.eS,a.f2,a.fY,b,e,a.jv);f=f+1|0;}}}}
function Mk(a,b){if(b===null)b=D7(0);a.kZ=b;}
function U2(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=B3(a.cG);while(B5(f)){g=B7(f);h=a.fQ;i=W(a.cG.j,a.j8);j=a.kZ;k=g.fa.b;l=((g.iF.b-(b%i|0)|0)+i|0)%i|0;m=d.hs;n=b+l|0;o=g.R;n=n/o|0;p=l+k|0;q=BF(p,c);if(q<=0){o=k/o|0;k=0;p=0;q=0;while(p<o){i=n+p|0;if(MW(g,j,q,i,d,m)){i=W((p-k|0)+1|0,g.R);U(g.dq,BT(g.bm),i);Ci(g.eb,0.0,W(k,g.R),BT(g.bm),i);i=q;}else{r=Gh(d,j,q,m);EX(g,e,l+W(k,g.R)|0,h,m.fw,r);U(g.dq,BT(g.bm),g.R);Ci(g.eb,0.0,W(p,g.R),BT(g.bm),g.R);k=p;}p=p+1|0;q=i;}r=Gh(d,j,q,m);EX(g,e,l+W(k,g.R)|
0,h,m.fw,r);}else{if(q>0&&l<c){o=Be(c-l|0,0);k=g.R;q=o/k|0;if(o%k|0)q=q+1|0;s=0;t=0;u=0;while(t<q){v=n+t|0;if(MW(g,j,u,v,d,m)){o=W((t-s|0)+1|0,g.R);U(g.dq,BT(g.bm),o);Ci(g.eb,0.0,W(s,g.R),BT(g.bm),o);v=u;}else{r=Gh(d,j,u,m);EX(g,e,l+W(s,g.R)|0,h,m.fw,r);U(g.dq,BT(g.bm),g.R);Ci(g.eb,0.0,W(t,g.R),BT(g.bm),g.R);s=t;}t=t+1|0;u=v;}r=Gh(d,j,u,m);EX(g,e,l+W(s,g.R)|0,h,m.fw,r);}if(p>i){n=b/g.R|0;o=Bc(p%i|0,c);U(g.dq,BT(g.bm),g.R);k=b%Da(g.bm)|0;l=g.R;k=k/l|0;p=k+(o/l|0)|0;if(o%l|0)p=p+1|0;o=k;s=k;i=n;while(o<p){if(MW(g,
j,i,n+(o-k|0)|0,d,m)){l=W((o-s|0)+1|0,g.R);U(g.dq,BT(g.bm),l);Ci(g.eb,0.0,W(s,g.R),BT(g.bm),l);}else{r=Gh(d,j,i,m);l=s-k|0;q=g.R;EX(g,e,W(l,q)-(b%q|0)|0,h,m.fw,r);i=(n+o|0)-k|0;U(g.dq,BT(g.bm),g.R);Ci(g.eb,0.0,W(o,g.R),BT(g.bm),g.R);s=o;}o=o+1|0;}r=Gh(d,j,i,m);n=s-k|0;o=g.R;EX(g,e,W(n,o)-(b%o|0)|0,h,m.fw,r);}}}}
function LZ(a,b,c,d){var e,f,g,h,i,j;e=a.cG.j;while(true){f=a.cG.j;g=W(f,a.j8);if(g>(d+a.nl|0))break;h=B6(0,g);i=new Ru;g=a.fc.a;f=a.nl;j=a.jl;i.dq=new Bf;i.eb=new B$;i.iF=h;i.d3=20;i.R=f;i.fa=B6(g,20*f|0);i.g$=Oc(j,f);if(i.bm===null)i.bm=CZ(b);BH(a.cG,i);}if(f==e)return;Ti(a,c);}
function Ti(a,b){var c,d,e,f,g,h,i,j,k;c=a.cG;d=c.j;e=W((b/(d*20|0)|0)+1|0,d)*20|0;c=B3(c);while(B5(c)){f=B7(c);g=a.eS;h=a.jv;EM(g);i=0;while(true){j=f.d3;if(i>=j)break;k=e-W(d,j)|0;if(k<b)k=e;e=k+1|0;GD(f,g,C8(e),W(f.R,i)+f.g$|0,h);i=i+1|0;}CL(f.bm,g);f.oG=g.lh;}}
function Q0(a,b,c,d,e){var f;a.jl=b;a.nl=c;f=c*20|0;a.j8=f;b=CK(a.eS,Ef(e,a.fc.a,f,d));a.eS=b;Cu(b,a.jl);TT(a.eS,2);b=CK(a.f2,Ef(e,a.fc.a,c,d));a.f2=b;Cu(b,a.jl);TT(a.f2,2);}
function KJ(a){Et(a.cG,new NF);H1(a.cG);a.eS=CK(a.eS,null);a.f2=CK(a.f2,null);}
function T1(a,b,c,d,e){Ck(a.fQ,b);U(a.fc,c,d);a.jv=e;}
var Yd=G(0);
function AHB(a,b){var c;c=a.cb();while(c.cv()){b.g(c.b2());}}
var H0=G(0);
function ANQ(a,b){var c,d;c=a.cb();d=0;while(c.cv()){if(b.bq(c.b2())){c.ma();d=1;}}return d;}
var E8=G();
function Eu(a){return a.cU()?0:1;}
function Ih(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=AFk(IL(BG(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B3(a);while(B5(f)){g=b.data;h=e+1|0;g[e]=B7(f);e=h;}return b;}
function ASQ(a,b){var c;c=a.cb();while(c.cv()){if(BX(c.b2(),b)){c.ma();return 1;}}return 0;}
function IY(a,b){var c,d;c=0;d=b.cb();while(d.cv()){if(!a.tN(d.b2()))continue;c=1;}return c;}
var TF=G(0);
var J0=G(0);
function Gy(){E8.call(this);this.cC=0;}
function ARZ(a,b){a.nT(a.cU(),b);return 1;}
function B3(a){var b;b=new O1;b.hx=a;b.nE=a.cC;b.jE=a.cU();b.gO=(-1);return b;}
function AQY(a,b,c){var d,e;if(b>=0&&b<=a.cU()){if(c.ed())return 0;d=c.cb();while(d.cv()){e=b+1|0;a.nT(b,d.b2());b=e;}return 1;}c=new BE;Y(c);K(c);}
function ATP(a,b,c){c=new D$;Y(c);K(c);}
function K$(a,b){var c,d;c=a.cU();d=0;while(true){if(d>=c)return (-1);if(BX(b,a.j7(d)))break;d=d+1|0;}return d;}
function API(a,b){var c,d;if(!Ji(b,J0))return 0;c=b;if(a.j!=c.j)return 0;d=0;while(d<c.j){if(!BX(Bs(a,d),Bs(c,d)))return 0;d=d+1|0;}return 1;}
var Mc=G(0);
function ABx(){var a=this;Gy.call(a);a.cA=null;a.j=0;}
function BJ(){var a=new ABx();AL9(a);return a;}
function AL9(a){a.cA=R(B,10);}
function J_(a,b){var c,d;c=a.cA.data.length;if(c<b){d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.cA=Dp(a.cA,d);}}
function Bs(a,b){JY(a,b);return a.cA.data[b];}
function AQI(a){return a.j;}
function BH(a,b){var c,d;J_(a,a.j+1|0);c=a.cA.data;d=a.j;a.j=d+1|0;c[d]=b;a.cC=a.cC+1|0;return 1;}
function Tk(a,b,c){var d,e,f;Q$(a,b);J_(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.cA.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cA.data[b]=c;a.j=d+1|0;a.cC=a.cC+1|0;}
function ED(a,b){var c,d,e,f;JY(a,b);c=a.cA.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cC=a.cC+1|0;return d;}
function XW(a,b){var c;c=K$(a,b);if(c<0)return 0;ED(a,c);return 1;}
function H1(a){ABY(a.cA,0,a.j,null);a.j=0;a.cC=a.cC+1|0;}
function AB0(a,b,c){var d,e,f,g,h,i;Q$(a,b);if(c.ed())return 0;J_(a,a.j+c.cU()|0);d=c.cU();e=a.j;f=e-1|0;while(f>=b){g=a.cA.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.j=e+d|0;h=c.cb();i=0;while(i<d){g=a.cA.data;e=b+1|0;g[b]=h.b2();i=i+1|0;b=e;}a.cC=a.cC+1|0;return 1;}
function JY(a,b){var c;if(b>=0&&b<a.j)return;c=new BC;Y(c);K(c);}
function Q$(a,b){var c;if(b>=0&&b<=a.j)return;c=new BC;Y(c);K(c);}
function Et(a,b){var c;c=0;while(c<a.j){b.g(a.cA.data[c]);c=c+1|0;}}
function Pn(){B.call(this);this.z_=null;}
function Pm(){B.call(this);this.og=null;}
function AI_(a,b){var c;c=a.og;F5(c,FA(b,H8(c)));}
function Pl(){B.call(this);this.sG=null;}
function AIe(a,b){var c;c=a.sG;Jl(c,FA(b,U_(c)));}
function Pk(){B.call(this);this.v7=null;}
function AId(a){var b,c;b=a.v7;c=b.iU?0:1;b.iU=c;b=new M;O(b);Gx(H(b,C(254)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Ps(){B.call(this);this.pZ=null;}
function AL7(a){var b,c;b=a.pZ;c=b.i2?0:1;b.i2=c;b=new M;O(b);Gx(H(b,C(255)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Pq(){B.call(this);this.tQ=null;}
function AWl(a){var b,c;b=a.tQ;c=b.kI^1;b.kI=c;b=new M;O(b);Gx(H(b,C(256)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Pp(){B.call(this);this.xV=null;}
function AOC(a){var b,c,d,e,f;b=a.xV;c=(b.d5+3|0)%6|0;b.d5=c;d=b.f_.data;e=d.length;f=0;while(f<e){b=d[f];b.b4=c;b=b.bR;if(b!==null)b.ht=1;f=f+1|0;}}
function Po(){B.call(this);this.pD=null;}
function ARa(a){var b;b=a.pD;b.bL=b.bL?0:1;KJ(b.c4);b.c4=AGQ();UD(b,b.bb,b.cy,b.bO.b0);}
function Pj(){B.call(this);this.s4=null;}
function AVs(a){var b;b=a.s4;b.jZ=b.jZ?0:1;}
function Pi(){B.call(this);this.wB=null;}
function AHZ(a){var b;b=a.wB;b.kg=b.kg?0:1;}
var FM=G(Cr);
var A0P=null;var A00=null;var A0Q=null;var A01=null;function AIb(){AIb=Bq(FM);APL();}
function AEA(a,b){var c=new FM();AEo(c,a,b);return c;}
function AEo(a,b,c){AIb();De(a,b,c);}
function APL(){var b;A0P=AEA(C(257),0);A00=AEA(C(258),1);b=AEA(C(259),2);A0Q=b;A01=I(FM,[A0P,A00,b]);}
function Le(){B.call(this);this.z2=null;}
var AZ_=null;var A02=null;function ANy(){ANy=Bq(Le);AV3();}
function ALi(a){var b=new Le();AAM(b,a);return b;}
function AAM(a,b){ANy();a.z2=b;}
function AV3(){AZ_=ALi(C(260));A02=ALi(C(261));}
var Nr=G(0);
function Gk(a){return DE(a,null);}
function St(b){var c;c=new Ty;c.wc=b;return c;}
function RW(){B.call(this);this.tf=null;}
function AM3(a){Kq(a.tf);}
function RU(){B.call(this);this.xn=null;}
function AHR(a){KW(a.xn);}
var AAf=G(0);
var A0X=null;function AF5(){A0X=new Pa;}
function Ln(){var a=this;B.call(a);a.A=null;a.c7=null;a.dV=null;a.dh=null;a.c9=null;a.gR=null;a.hS=null;a.b6=0;a.h7=0;a.t1=0.0;}
function AAq(a){var b;b=W5(a);return AFI(AUq(Kz(0,b,0),null,null));}
function BQ(a,b){return a.A.data[b];}
function CC(a){return a.A.data.length;}
function W5(a){return E_(a,CC(a));}
function F8(a,b){return a.A.data[b].L;}
function L3(a,b){var c,d,e,f,g,h,i;c=a.A.data;d=c[b];e=c[b+1|0];f=DS(MA(d.p,e.p));g=a.A;h=g.data.length;if(b<h&&b>=0){i=R(CD,h-1|0);c=i.data;S$(g,b,i);c[b]=f;a.A=i;return;}d=new Bv;Y(d);K(d);}
function N1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.A.data;if(!(c<d[b].L?0:1)){d=(BQ(a,b)).p.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.w)){f=P(h.w,g);break a;}g=g-J(h.w)|0;f=f+1|0;}f=0;}E6();h=new BA;d=BW(1);d.data[0]=f;HW(h,d);FS(a,b,c,1,h);h=a.A.data[b];i=h.p;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=J(d[j].w);if(c<b)break;c=c-b|0;j=j+1|0;}}if(J(d[j].w)==1)h.p=S$(i,j,R(Cf,e-1|0));else{k=d[j];if(c<=0)l=Dz(Do(k.w,1),k.cD,k.cc);else if(c>=(J(k.w)-1|0)){l=new Cf;m=k.w;VE(l,Ch(m,0,J(m)-
1|0),k.cD,k.cc);}else{i=BW(J(k.w)-1|0);n=i.data;b=0;while(b<c){n[b]=P(k.w,b);b=b+1|0;}b=n.length;while(c<b){m=k.w;e=c+1|0;n[c]=P(m,e);c=e;}l=Dz(Gj(i),k.cD,k.cc);}d[j]=l;}h.L=h.L-1|0;EA(h);}else if(b!=(d.length-1|0)){FS(a,b,c,1,C(207));L3(a,b);}}
function AAw(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){T0(a.A.data[b],c,e[0]);return;}g=f-1|0;h=Iu(a.A.data[b],c);d=a.A;i=Dp(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.p.data;m=l.length;c=!m?0:J(l[m-1|0].w);Np(j,j.p.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(FJ(e[m]))j=DS(R(Cf,0));else{j=new CD;l=R(Cf,1);l.data[0]=Dz(e[m],0,0);Iq(j,l);}d[b+m|0]=j;m=m+1|0;}Np(h[1],0,0,e[g]);d[b+g|0]=h[1];a.A
=i;}
function X_(a,b){var c,d,e,f,g,h,i;c=D2(b);d=FT(b);e=c.S;if(e==d.S)return Ch(Fi(a.A.data[e]),c.bf,d.bf);f=new M;O(f);b=a.A.data[c.S];e=c.bf;BI(BV(f,Do(Fi(b),e)),10);g=a.A.data;e=c.S+1|0;h=d.S;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AAV(BV(f,Fi(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.A.data[d.S];h=d.bf;BV(f,Ch(Fi(b),0,h));return N(f);}b=new YL;Y(b);K(b);}
function Oj(a,b,c){var d;Yx(a,b);d=D2(b);FS(a,d.S,d.bf,1,c);}
function Yx(a,b){var c,d,e,f,g,h,i;a:{c=D2(b);d=FT(b);e=c.S;if(e==d.S)GM(a.A.data[e],c.bf,d.bf);else{b=a.A.data[e];GM(b,c.bf,b.L);GM(a.A.data[d.S],0,d.bf);e=c.S+1|0;f=d.S;g=a.A;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(CD,(h-f|0)+e|0);ADo(g,e,f,i);a.A=i;L3(a,c.S);break a;}b=new Bv;Y(b);K(b);}b=new Bv;Y(b);K(b);}}}
function Hq(a,b,c){return Dv(b,Go(BQ(a,b),c));}
function Zb(a,b){var c,d,e;c=0;d=0;while(true){e=a.A.data.length;if(c>=e)break;if((d+(BQ(a,c)).L|0)>=b)return B6(c,b-d|0);d=d+((BQ(a,c)).L+1|0)|0;c=c+1|0;}return B6(e,0);}
function E_(a,b){var c,d,e;c=0;d=a.A.data.length;e=0;while(e<b){c=c+F8(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function My(a,b){return MU(BQ(a,b.bk),b.bs);}
function EV(a){var b,c,d,e,f,g,h,i,j;b=BW(W5(a));c=b.data;d=a.A.data.length;e=0;f=0;while(e<d){g=a.A.data[e].p.data;h=g.length;i=0;while(i<h){j=g[i].w;RD(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function FS(a,b,c,d,e){var f,g,h,i,j,k;a:{a.b6=a.b6+1|0;f=a.gR;g=R(Hg,1);h=new Hg;h.d9=b;h.eh=c;i=MY(e,C(207),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B6(b,c+J(i[0])|0);break a;}k=B6((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=B6(b,c);}i=g.data;h.mh=k;h.nt=d;h.gb=e;i[0]=h;BH(f,g);K0(a,b,c,d,e);}
function K0(a,b,c,d,e){var f;f=E_(a,b)+c|0;if(!d){P6(a.c7,f,J(e));Wx(a.dV,f,J(e));}else{YP(a.c7,f,J(e));OO(a.dV,f,J(e));}}
function OG(a,b){var c,d,e;c=MY(b.gb,C(207),(-1));if(b.nt){AAw(a,b.d9,b.eh,c);P6(a.c7,E_(a,b.d9)+b.eh|0,J(b.gb));Wx(a.dV,E_(a,b.d9)+b.eh|0,J(b.gb));}else{c=c.data;d=AJb();B8(d.bX,b.d9,b.eh);e=c.length;if(e==1)B8(d.bE,b.d9,b.eh+J(c[0])|0);else B8(d.bE,(b.d9+e|0)-1|0,J(c[e-1|0]));Yx(a,d);YP(a.c7,E_(a,b.d9)+b.eh|0,J(b.gb));OO(a.dV,E_(a,b.d9)+b.eh|0,J(b.gb));}return b.mh;}
function VS(a){return a.h7==a.b6?0:1;}
function HY(a){a.h7=a.b6;}
function Rb(a){var b,c,d;a.hS=BL(a.A.data.length+1|0);b=0;while(b<a.A.data.length){c=a.hS.data;d=b+1|0;c[d]=(c[b]+(BQ(a,b)).L|0)+1|0;b=d;}}
function Z5(a,b){var c,d,e,f,g,h;c=a.hS;if(c===null){d=0;e=0;a:{while(true){c=a.A.data;f=c.length;if(e>=f)break;g=c[e].L;if(b<=(d+g|0)){h=Dv(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=Dv(f,0);}return h;}d=AEJ(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=Dv(d,b-(d<0?0:a.hS.data[d])|0);if(h.bs>=(BQ(a,h.bk)).L){h.bk=h.bk+1|0;h.bs=0;}return h;}
var Fp=G();
function K7(){Fp.call(this);this.zA=null;}
function UQ(){Fp.call(this);this.zt=null;}
function RH(){Fp.call(this);this.AW=null;}
var Ht=G(0);
var Uh=G(0);
function Hu(){var a=this;B.call(a);a.S=0;a.bf=0;}
function B8(a,b,c){a.S=b;a.bf=c;}
function Ws(a,b){a.S=b.S;a.bf=b.bf;}
function To(a,b){var c;c=BF(a.S,b.S);if(c)return c;return BF(a.bf,b.bf);}
function LN(){var a=this;B.call(a);a.mq=null;a.k0=null;}
function MH(a){return a.mq.bk;}
function Kx(a){return a.mq.bs;}
var X9=G(0);
function UC(){B.call(this);this.ie=null;}
function EI(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ie));}
function CO(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.ie));}
function AKE(a){var b,c;b=a.ie.byteLength;c=new M;O(c);H(V(H(c,C(262)),b),C(263));return N(c);}
var Wp=G(0);
function LT(){var a=this;B.call(a);a.hr=null;a.fJ=null;a.nm=null;}
function AEM(a,b){var c=new LT();ANs(c,a,b);return c;}
function AWC(a,b,c){var d=new LT();PD(d,a,b,c);return d;}
function AAU(b){var c,d,e,f,g,h,i;c=new LT;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=R(BA,0);else{f=R(BA,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=F1(e[h]);h=h+1|0;}}}else f=R(BA,0);PD(c,d,b,f);return c;}
function ANs(a,b,c){PD(a,b,c,R(BA,0));}
function PD(a,b,c,d){a.hr=b;a.fJ=c;a.nm=d;}
function Ky(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EQ(a);e=new M;O(e);H(H(e,C(264)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EQ(a){var b;b=a.hr;return F1(b!==null?b.name:a.fJ.name);}
function ANT(a){var b,c,d,e,f;if(a.fJ===null){b=a.nm;c=EQ(a);d=ACm(b);e=new M;O(e);H(H(H(e,d),C(265)),c);c=N(e);}else{b=a.nm;c=EQ(a);f=Ky(a,a.fJ.size);d=ACm(b);e=new M;O(e);V(H(H(H(H(e,d),C(265)),c),C(266)),f);c=N(e);}return c;}
function Ty(){B.call(this);this.wc=null;}
function DE(a,b){GW(a.wc,b);return 1;}
function Lq(){var a=this;D4.call(a);a.cT=0;a.ca=null;a.cQ=0;a.xS=0.0;a.l7=0;}
function IK(){var a=new Lq();Rv(a);return a;}
function AMB(a,b){return R(G6,b);}
function Rv(a){var b;b=AGS(16);a.cT=0;a.ca=R(G6,b);a.xS=0.75;WC(a);}
function AGS(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function E1(a){var b;if(a.cT>0){a.cT=0;b=a.ca;ABY(b,0,b.data.length,null);a.cQ=a.cQ+1|0;}}
function WC(a){a.l7=a.ca.data.length*a.xS|0;}
function Kp(a,b){return U4(a,b)===null?0:1;}
function WW(a){var b;b=new WD;b.sH=a;return b;}
function Cx(a,b){var c;c=U4(a,b);if(c===null)return null;return c.cY;}
function U4(a,b){var c,d;if(b===null)c=TX(a);else{d=b.nc();c=Sa(a,b,d&(a.ca.data.length-1|0),d);}return c;}
function Sa(a,b,c,d){var e;e=a.ca.data[c];while(e!==null&&!(e.j6==d&&ABj(b,e.cF))){e=e.cO;}return e;}
function TX(a){var b;b=a.ca.data[0];while(b!==null&&b.cF!==null){b=b.cO;}return b;}
function KN(a){var b;if(a.lC===null){b=new QX;b.hy=a;a.lC=b;}return a.lC;}
function F$(a,b,c){var d,e,f,g;if(b===null){d=TX(a);if(d===null){a.cQ=a.cQ+1|0;d=Wu(a,null,0,0);e=a.cT+1|0;a.cT=e;if(e>a.l7)WO(a);}}else{e=b.nc();f=e&(a.ca.data.length-1|0);d=Sa(a,b,f,e);if(d===null){a.cQ=a.cQ+1|0;d=Wu(a,b,f,e);e=a.cT+1|0;a.cT=e;if(e>a.l7)WO(a);}}g=d.cY;d.cY=c;return g;}
function Wu(a,b,c,d){var e,f;e=new G6;AAm(e,b,null);e.j6=d;f=a.ca.data;e.cO=f[c];f[c]=e;return e;}
function ADd(a,b){var c,d,e,f,g,h,i,j;c=AGS(!b?1:b<<1);d=R(G6,c);e=d.data;f=0;b=c-1|0;while(true){g=a.ca.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.j6&b;j=h.cO;h.cO=e[i];e[i]=h;h=j;}f=f+1|0;}a.ca=d;WC(a);}
function WO(a){ADd(a,a.ca.data.length);}
function ABj(b,c){return b!==c&&!b.bM(c)?0:1;}
function CD(){var a=this;B.call(a);a.p=null;a.L=0;a.f9=null;a.eN=null;a.d0=null;a.hq=null;a.gq=0;a.ht=0;a.hY=0;}
var A03=0;var A04=0;var A0T=0;function DS(a){var b=new CD();Iq(b,a);return b;}
function Iq(a,b){var c,d,e,f;c=b.data;a.p=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].w)|0;f=f+1|0;}a.L=d;EA(a);}
function U0(a,b){return a.p.data[b];}
function Go(a,b){var c;c=Jr(a,b);return c<=0?0:a.d0.data[c-1|0];}
function Jr(a,b){var c,d,e,f;c=a.p.data.length;if(!c)return (-1);if(!(a.d0!==null&&!a.hY)){Zc(a);d=0;e=0;f=a.p.data.length;while(d<f){e=e+J(a.p.data[d].w)|0;a.d0.data[d]=e;d=d+1|0;}a.hY=0;}d=VP(a.d0,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function MU(a,b){var c;c=a.p.data;if(!c.length)return null;return c[Jr(a,b)];}
function GM(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.L){a.p=R(Cf,0);EA(a);a.L=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.p.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].w);i=J(a.p.data[f].w);j=BF(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.p.data[f];if(!b&&c==J(k.w)?1:0){g=a.p;a.p=S$(g,e,R(Cf,g.data.length-1|0));a.L=a.L-d|0;EA(a);return;}a.p.data[e]=Dz(FC(Ch(k.w,0,b),Do(k.w,c)),k.cD,k.cc);}else{g=a.p.data;l=g[e];m=g[f];if(b){if(b!=
J(l.w))a.p.data[e]=Dz(Ch(l.w,0,b),l.cD,l.cc);e=e+1|0;}if(c==J(m.w))f=f+1|0;else if(c)a.p.data[f]=Dz(Do(m.w,c),m.cD,m.cc);g=a.p;a.p=ADo(g,e,f,R(Cf,(g.data.length-f|0)+e|0));}a.L=a.L-d|0;EA(a);}
function Iu(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(CD,[DS(R(Cf,0)),a]);if(b>=a.L)return I(CD,[a,DS(R(Cf,0))]);c=a.p;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].w);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(CD,[DS(LP(c,0,R(Cf,d))),DS(LP(c,d,R(Cf,f-d|0)))]);h=e[d];e=LP(c,0,R(Cf,d+1|0));i=e.data;j=LP(c,d,R(Cf,f-d|0));c=j.data;i[d]=Dz(Ch(h.w,0,b),h.cD,h.cc);c[0]=Dz(Do(h.w,b),h.cD,h.cc);return I(CD,[DS(e),DS(j)]);}
function T0(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.p.data;if(e>=f.length)break a;g=J(f[d].w);if(b<=g)break;b=b-g|0;d=e;}}Np(a,d,b,c);}
function Np(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.p;f=e.data;g=f.length;if(!g){h=R(Cf,1);h.data[0]=Rt(d);a.p=h;}else if(!b&&!c){i=R(Cf,g+1|0);h=i.data;DB(e,0,i,1,g);h[0]=Rt(d);a.p=i;}else{j=f[b];if(c<=0)k=Dz(FC(d,j.w),j.cD,j.cc);else if(c>=J(j.w))k=Dz(FC(j.w,d),j.cD,j.cc);else{l=J(d);m=l+c|0;n=J(j.w)-c|0;h=BW(J(j.w)+l|0);i=h.data;o=0;while(o<c){i[o]=P(j.w,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=P(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=P(j.w,g+c|0);g=g+1|0;}k=Dz(Gj(h),j.cD,j.cc);}f[b]=k;}a.L=a.L+J(d)|0;EA(a);}
function OS(a){var b,c,d,e,f,g;b=0;c=a.p.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<MP(f)){if(P(f.w,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lp(a,b,c){var d,e,f,g,h,i,j;d=a.p.data.length;e=a.f9;if(!(e!==null&&e.data.length>=d)){a.f9=AHU(d);a.eN=BL(d);a.gq=1;}Zc(a);if(!a.gq)A04=A04+1|0;else{f=0;g=0.0;A03=A03+1|0;h=0;while(h<d){i=c.data;j=a.p.data[h];f=f+J(j.w)|0;a.d0.data[h]=f;Cu(b,i[j.cc]);g=g+DV(b,j.w);a.f9.data[h]=g;a.eN.data[h]=g+0.5|0;h=h+1|0;}a.L=f;a.gq=0;a.hY=0;}}
function Zc(a){var b;b=a.d0;if(!(b!==null&&b.data.length>=a.p.data.length)){a.d0=BL(a.p.data.length);a.hY=1;}}
function EA(a){a.gq=1;a.ht=1;a.hY=1;a.hq=null;}
function TS(a,b,c,d){var e,f,g,h,i,j,k;if(a.hq===null)a.hq=R($rt_arraycls($rt_intcls()),a.p.data.length);e=a.hq.data[d];if(e===null){e=c.data;f=a.p.data[d];Cu(b,e[f.cc]);f=f.w;e=BL(J(f)-1|0);c=FK(f);g=!d?0.0:a.f9.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BA;k=i+1|0;Nn(f,c,0,k);h[i]=g+DV(b,f)+0.5|0;i=k;}a.hq.data[d]=e;}return e;}
function GT(a,b,c,d){var e,f,g,h,i;if(a.p.data.length&&b){if(!(!a.gq&&a.eN!==null))Lp(a,c,d);if(b>=a.L)return a.eN.data[a.p.data.length-1|0];e=0;f=0;a:{while(true){g=a.p.data;if(f>=g.length)break a;h=e+J(g[f].w)|0;i=BF(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eN.data[f];}return (TS(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Fa(a){var b,c,d;a:{b=a.p.data.length;if(b){c=a.eN.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hc(a,b){var c;if(b>=a.L)return b+1|0;c=Jr(a,b);return a.d0.data[c];}
function Fi(a){var b,c,d,e;b=new M;Gq(b,a.L);c=a.p.data;d=c.length;e=0;while(e<d){BV(b,c[e].w);e=e+1|0;}return N(b);}
function V2(b){var c,d,e,f;c=R(CD,1);d=c.data;e=new CD;f=R(Cf,1);f.data[0]=Rt(b);Iq(e,f);d[0]=e;return c;}
function ADh(){A0T=0;}
function ACr(){var a=this;B.call(a);a.gf=null;a.eH=null;}
function ASj(){var a=new ACr();AH5(a);return a;}
function AKl(a,b){var c=new ACr();AMj(c,a,b);return c;}
function AH5(a){var b;b=new LK;Rv(b);a.eH=b;}
function AMj(a,b,c){a.gf=b;a.eH=c;}
function Wx(a,b,c){var d;d=a.gf;if(d===null)return;Sw(a,d,b,c);}
function OO(a,b,c){var d;d=a.gf;if(d===null)return;VW(a,d,b,c);}
function Sw(a,b,c,d){var e,f,g,h;e=b.ee.cb();while(e.cv()){Z9(a,e.b2(),c,d);}e=b.eQ.cb();while(e.cv()){f=e.b2();g=new Vw;g.sg=a;En(a,g,f,c,d);}h=b.gJ.cb();while(h.cv()){e=h.b2();Z9(a,e.jk,c,d);f=new Vx;f.oS=a;En(a,f,e.km,c,d);}b=b.cw.cb();while(b.cv()){Sw(a,b.b2(),c,d);}}
function Z9(a,b,c,d){Ks(a,b.ef,c,d);}
function En(a,b,c,d,e){var f,g;a:{if(c instanceof Il){f=c.nh;g=new AAs;g.pH=a;g.pF=b;g.pE=d;g.pG=e;Et(f,g);}else{if(!(c instanceof Jk)){if(!(c instanceof JK))break a;f=c;En(a,b,f.ir,d,e);En(a,b,f.hm,d,e);return;}g=c.hk;f=new AAt;f.xQ=a;f.xP=b;f.xO=d;f.xN=e;Et(g,f);}}if(c!==null){c=c.fm;if(c!==null)b.jW(c,Di(d),Di(e));}}
function Ks(a,b,c,d){var e;e=b.ds;if(e>=c)b.ds=e+d|0;}
function VW(a,b,c,d){var e,f,g,h;e=b.ee.cb();while(e.cv()){IO(a,(e.b2()).ef,c,d);}e=b.eQ.cb();while(e.cv()){f=e.b2();g=new T4;g.vG=a;En(a,g,f,c,d);}h=b.gJ.cb();while(h.cv()){e=h.b2();IO(a,e.jk.ef,c,d);f=new T5;f.uP=a;En(a,f,e.km,c,d);}b.ee.mM(new T3);b.eQ.mM(new T2);b=b.cw.cb();while(b.cv()){VW(a,b.b2(),c,d);}}
function IO(a,b,c,d){var e;e=b.ds;if(e>=c)b.ds=e-d|0;}
var Pa=G();
function AVx(a){}
function Cf(){var a=this;B.call(a);a.w=null;a.cD=0;a.cc=0;}
function Rt(a){var b=new Cf();ALo(b,a);return b;}
function Dz(a,b,c){var d=new Cf();VE(d,a,b,c);return d;}
function ALo(a,b){VE(a,b,0,0);}
function VE(a,b,c,d){a.w=b;a.cD=c;a.cc=d;}
function HQ(b,c){return (!b?0:2)+(!c?0:1)|0;}
function MP(a){return J(a.w);}
function Tt(){var a=this;B.call(a);a.df=null;a.eA=0;}
var A05=null;function AFI(a){var b=new Tt();AGr(b,a);return b;}
function AGr(a,b){a.eA=0;a.df=b;}
function Rg(a,b){var c;if(b.ex)return b;b=B3(b.bn);while(true){if(!B5(b))return null;c=Rg(a,B7(b));if(c!==null)break;}return c;}
function Pc(a,b,c){var d,e,f,g;d=Lx(a,a.df,b);if(d===null)return;b=c.cR;e=b===null?A06:b.cw;f=c.bn;if(d===a.df){b=new TW;b.sb=a;Et(f,b);b=new TV;b.vD=a;e.eY(b);b=a.df;b.bn=f;b.cR.cw=e;b.ex=0;return;}if(!Eu(f)){b=d.g3;if(b!==null){c=new PT;c.pM=b;Et(f,c);g=K$(b.bn,d);if(g==(-1))IY(b.bn,f);else{ED(b.bn,g);AB0(b.bn,g,f);}}}b=d.cR;if(b!==null){b=b.gP;c=new T_;c.rT=b;e.eY(c);g=K$(b.cw,d.cR);if(g==(-1))IY(b.cw,e);else{b.cw.nH(g);b.cw.uB(g,e);}}}
function Lx(a,b,c){var d,e,f,g;d=b.bU;if(d.bT==c.bT&&d.bZ==c.bZ?1:0){d=B3(b.bn);while(B5(d)){e=Lx(a,B7(d),c);if(e!==null)return e;}return b;}b=B3(b.bn);while(true){if(!B5(b))return null;d=B7(b);f=c.bT;g=c.bZ;e=d.bU;if(e.bT<=f&&g<=e.bZ?1:0){e=Lx(a,d,c);if(e!==null)break;}}return e;}
function Vt(a,b,c){BH(c,b.bU);b=B3(b.bn);while(B5(b)){Vt(a,B7(b),c);}}
function P6(a,b,c){a.eA=0;Lw(a,a.df,b,c);}
function Lw(a,b,c,d){var e;if(C$(b)<c)return;a:{if(Db(b)>c){Ms(b,d);HO(b,d);b=B3(b.bn);while(B5(b)){Lw(a,B7(b),c,d);}}else{if(!J8(b,c)){if(a.eA)break a;if(C$(b)!=c)break a;}HO(b,d);if(Db(b)==c&&a.eA)Ms(b,d);e=B3(b.bn);while(B5(e)){Lw(a,B7(e),c,d);}if(!a.eA){b.ex=1;a.eA=1;}}}}
function YP(a,b,c){a.eA=0;Kd(a,a.df,b,c);}
function Kd(a,b,c,d){var e,f,g,h,i,j;if(C$(b)<c)return;e=Db(b);f=c+d|0;if(e>f){e= -d|0;Ms(b,e);HO(b,e);g=B3(b.bn);while(B5(g)){Kd(a,B7(g),c,d);}b.bn=Of(a,b.bn);}else{h=b.bU;if(c<=h.bT&&h.bZ<=f?1:0){if(b===a.df){MG(b,0);Ka(b,0);b.cR.cw.i0();}else{MG(b,(-1));Ka(b,(-1));ZN(b.cR);b.cR=null;}H1(b.bn);}else{e=J8(b,c);f=J8(b,f);if(e&&f)HO(b, -d|0);else if(e)Ka(b,c);else{if(!f)return;MG(b,c);HO(b, -d|0);}h=B3(b.bn);while(B5(h)){Kd(a,B7(h),c,d);}h=b.bn;i=null;g=Qv(0);while(true){d=0;a:{while(true){if(i===null)i=B3(h);if
(!B5(i))c=0;else{j=B7(i);g=Qv(!ADj(g)&&!j.ex?0:1);c=1;d=1;}if(!c){c=0;break a;}if(!d)break;}c=1;}if(!c)break;}if(!g.nL&&!a.eA)b.ex=1;else a.eA=1;b.bn=Of(a,b.bn);}}}
function Of(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BJ();d=null;e=A05;f=b.cA;g=b.j;if(e===null)e=AZi;h=R(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}ACQ(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.cC=b.cC+1|0;b=B3(b);while(B5(b)){m=B7(b);if(Db(m)==C$(m))continue;if(!m.ex){if(d!==null){BH(c,d);d=null;}BH(c,m);}else if(d===null)d=m;else{n=AUq(Kz(Bc(Db(d),Db(m)),Be(C$(d),C$(m)),d.bU.ff),d.g3,d.cR);n.ex=1;d=m.cR;if(d===null)d=n;else{ZN(d);d=n;}}}if(d!==null)BH(c,d);return c;}
function Y5(a,b,c,d){var e,f,g,h,i,j;if((C$(c)-Db(c)|0)<43)e=Ch(d,Db(c),C$(c));else{e=Ch(d,Db(c),Db(c)+20|0);f=Ch(d,C$(c)-20|0,C$(c));g=new M;O(g);H(H(H(g,e),C(172)),f);e=N(g);}e=W0(e,C(207),C(267));f=Bx();g=CB(c);h=new M;O(h);i=V(h,b);BI(i,32);g=H(i,g);BI(g,9);H(g,e);Bt(f,N(h));c=B3(c.bn);j=b+1|0;while(B5(c)){Y5(a,j,B7(c),d);}}
function AGE(){A05=new Yi;}
var LK=G(Lq);
function AG0(){var a=this;B.call(a);a.bT=0;a.bZ=0;a.ff=0;}
function Kz(a,b,c){var d=new AG0();ALg(d,a,b,c);return d;}
function ALg(a,b,c,d){a.bT=b;a.bZ=c;a.ff=d;}
function ATc(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.bT==c.bT&&a.bZ==c.bZ&&a.ff==c.ff?1:0;}return 0;}
function AJT(a,b){var c;b=b;c=BF(a.bT,b.bT);if(!c)c=BF(b.bZ,a.bZ);return c;}
var Yi=G();
function AOG(a,b,c){var d;b=b;c=c;b=b.bU;c=c.bU;d=BF(b.bT,c.bT);if(!d)d=BF(c.bZ,b.bZ);return d;}
function SE(){var a=this;B.call(a);a.bU=null;a.g3=null;a.bn=null;a.cR=null;a.ex=0;}
function AUq(a,b,c){var d=new SE();AFH(d,a,b,c);return d;}
function AFH(a,b,c,d){a.ex=0;a.bU=b;a.g3=c;a.bn=BJ();a.cR=d;}
function AG7(b){return SZ(b,null);}
function SZ(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Ba(b);e=Ba(b);f=Ba(b);g=Ba(b);h=Ba(b);i=Kz(d,e,f);j=new SE;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AFH(j,i,null,l);m=0;while(m<g){l=SZ(b,c);l.g3=j;BH(j.bn,l);m=m+1|0;}return j;}
function ABn(b,c,d){var e,f,g,h,i;a:{e=b.bU;f=b.bn;g=e.bT;h=e.bZ;i=e.ff;Br(c,g);G2(c,h,i);Br(c,f.j);if(d!==null){e=b.cR;if(e!==null&&X6(d,e)){g=(M0(d,b.cR)).bA;break a;}}g=(-1);}Br(c,g);b=B3(f);while(B5(b)){ABn(B7(b),c,d);}}
function Db(a){return a.bU.bT;}
function C$(a){return a.bU.bZ;}
function MG(a,b){a.bU.bT=b;}
function Ka(a,b){a.bU.bZ=b;}
function Ms(a,b){var c;c=a.bU;c.bT=c.bT+b|0;}
function HO(a,b){var c;c=a.bU;c.bZ=c.bZ+b|0;}
function J8(a,b){return Db(a)<=b&&b<C$(a)?1:0;}
function AIB(a){var b,c,d,e,f;b=a.bU;c=b.bT;d=b.bZ;e=b.ff;b=new M;O(b);BI(b,40);BI(V(H(V(H(V(b,c),C(44)),d),C(44)),e),41);b=N(b);c=a.ex;f=new M;O(f);Gx(H(H(f,b),C(44)),c);return N(f);}
function AJE(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BX(a.bU,c.bU)&&BX(a.bn,c.bn)?1:0;}return 0;}
var HR=G(0);
function GX(){var a=this;B.call(a);a.cF=null;a.cY=null;}
function A07(a,b){var c=new GX();AAm(c,a,b);return c;}
function AAm(a,b,c){a.cF=b;a.cY=c;}
function AKH(a,b){var c,d;if(a===b)return 1;if(!Ji(b,HR))return 0;a:{b:{c:{d:{c=b;b=a.cF;if(b!==null){if(!b.bM(c.cF))break c;else break d;}if(c.cF!==null)break c;}b=a.cY;if(b!==null){if(!b.bM(c.cY))break c;else break b;}if(c.cY===null)break b;}d=0;break a;}d=1;}return d;}
function G6(){var a=this;GX.call(a);a.j6=0;a.cO=null;}
function LF(){var a=this;LI.call(a);a.q5=null;a.pI=null;}
function ABu(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.q5;e=0;f=0;g=a.pI;a:{while(true){if((e+32|0)>f&&DW(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bc(Ca(b)+j|0,i.length);OT(b,d,j,f-j|0);e=0;}if(!DW(c)){k=!DW(b)&&e>=f?AZ6:AZ5;break a;}i=g.data;j=Bc(Ca(c),i.length);l=new O$;l.or=b;l.rN=c;k=AEf(a,d,e,f,g,0,j,l);e=l.vN;j=l.xh;if(k===null){if(!DW(b)&&e>=f)k=AZ6;else if(!DW(c)&&e>=f)k=AZ5;}Za(c,g,0,j);if(k!==null)break;}}EY(b,b.Z-(f-e|0)|0);return k;}
var Ra=G(LF);
function AEf(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(MB(h,2))break a;i=AZ5;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!M8(l)){if((f+3|0)>g){j=j+(-1)|0;if(MB(h,3))break a;i=AZ5;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CI(l)){i=Eh(1);break a;}if
(j>=d){if(DW(h.or))break a;i=AZ6;break a;}c=j+1|0;m=k[j];if(!C7(m)){j=c+(-2)|0;i=Eh(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(MB(h,4))break a;i=AZ5;break a;}k=e.data;o=EH(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vN=j;h.xh=f;return i;}
var I7=G(Ej);
var NS=G();
function AVF(a,b){return b.text();}
function NV(){var a=this;B.call(a);a.tk=null;a.tj=null;}
function AUy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.tk;d=a.tj;e=R(BA,8);f=BW(16);g=0;h=0;i=b.length;j=0;while(true){k=BF(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=ET(f,0,g);m=h+1|0;e=AFN(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=Kk(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.g(AW7(Q2(e,h),ARI(d)));}
var NT=G();
function AI0(a,b){AGR(b);}
function IH(){var a=this;B.call(a);a.bS=null;a.fC=null;a.uo=null;a.hs=null;a.dR=null;a.vQ=null;a.wu=null;a.xd=null;}
function A08(a,b,c,d,e){var f=new IH();JO(f,a,b,c,d,e);return f;}
function H9(){var b,c,d,e,f,g,h,i;b=new IH;c=new Jd;d=new HG;F7();KH(d,A09);Nf(c,d,BO(A0K),BO(A0$),BO(A0_),BO(A0K),BO(A1a),BO(A1b),BO(A1c),BO(A1d),BO(A1e),BO(A1f));ACJ();e=(A1g.hg()).data;f=e.length;g=R(JD,f);h=g.data;i=0;while(i<f){h[i]=e[i].m_;i=i+1|0;}JO(b,c,g,AE9(S(C(268)),S(C(269)),S(C(270)),S(C(271))),Hj(),AAZ(S(C(118)),S(C(119)),S(C(120)),S(C(272))));return b;}
function JO(a,b,c,d,e,f){var g;g=c.data;a.vQ=EZ(C(158),16.0);a.wu=EZ(C(158),17.0);a.xd=EZ(C(157),15.0);a.bS=b;a.uo=c;a.hs=d;if(g.length>=15){a.fC=e;a.dR=f;return;}b=new BE;Y(b);K(b);}
function JN(){var a=this;CQ.call(a);a.cI=null;a.fS=null;}
function AYj(a){var b=new JN();AHf(b,a);return b;}
function AHf(a,b){var c,d,e,f;F4(a,b);c=AS5(a.s);a.fS=c;d=ADg(a.s,c);a.cI=d;Pr(a.s,d);Bb(b.m.br,a.fS);Bb(b.m.dB,a.fS);Bb(b.m.br,a.cI);c=b.m.b7;d=new Rk;d.qz=a;Bb(c,d);c=b.m.b7;d=new IA;e=a.cI;BR(e);f=new Ri;f.wJ=e;Oh(d,b,f);Bb(c,d);c=b.m.f4;d=a.cI;BR(d);e=new Rj;e.qt=d;Bb(c,e);c=b.m.gG;d=new Pv;d.ro=a;Bb(c,d);c=b.m.dB;d=new Pw;d.xG=a;Bb(c,d);b=b.m.eZ;c=new Pt;c.o4=a;Bb(b,c);K2(a);}
function ANa(a,b){if(Y6(a.s,b)){Td(a.fS);Ly(a.cI,b);}}
function ATx(a,b){return LX(a.cI,b);}
function AMN(a){FX(a);JL(a.cI);AAg(a.fS);}
function AVe(a){return JF(0);}
function AHM(a,b,c){G3(a,b,c);a.mr(b,c);}
function AE4(a,b,c){J1(a.cI,new Bf,b,c);}
function ALb(a,b){BR(b);N9(a.fS,b);KX(a.cI,b);}
function ADm(a,b){if(b.bj!=121)return 0;return 1;}
function ABz(a,b){var c,d,e;if(Ea(a.s,a.cI)){c=a.fS;d=a.cI;e=new V5;e.r2=a;Km(c,b,d,a,d,a,e);}return 1;}
function AA6(){var a=this;Cn.call(a);a.rR=null;a.lE=null;a.ja=null;a.d$=null;a.jU=null;a.g4=null;a.ea=null;a.hU=null;a.oh=null;a.iz=null;a.nC=null;a.nD=null;a.md=null;a.so=null;a.y4=null;a.r$=0;}
function AYM(a){var b=new AA6();AOW(b,a);return b;}
function AOW(a,b){var c,d,e,f;Eg(a,b);c=(H9()).bS.eC;a.rR=c;a.lE=AGO(c);a.ja=new Bf;a.d$=Kt();a.jU=Kt();a.g4=Vg(0,0,3,3);a.ea=Hv(0,0,300,300);a.hU=AMJ();d=R(BA,4);e=d.data;e[0]=C(219);e[1]=C(201);e[2]=C(244);e[3]=C(243);a.oh=d;a.iz=R(Jv,e.length);c=b.m.br;f=new WJ;f.fe=a;Bb(c,f);c=b.m.b7;f=new RN;f.xT=a;Bb(c,f);c=b.m.nW;f=new RM;f.rm=a;Bb(c,f);c=b.m.f4;f=new RL;f.Ad=a;Bb(c,f);c=b.m.kE;f=new RK;f.yk=a;Bb(c,f);c=b.m.eZ;f=new RJ;f.zq=a;Bb(c,f);b=b.m.dB;c=new RI;c.vB=a;Bb(b,c);a.nC=XU(a,1);a.nD=XU(a,0);TC(a,a.d$,
a.nC);TC(a,a.jU,a.nD);a.md=ZK(a,0);a.so=ZK(a,1);Fr(a.ea,a.md);FF(a.ea);Gz(a.ea,Dr(169,183,198));Fk(a.ea,a.rR);Ci(a.d$.K,1.0,1.0,1.0,1.0);Fk(a.d$,a.ea.ba);BU(a.g4.ba,a.lE);}
function TC(a,b,c){Fr(b,c);FF(b);}
function T$(a,b){HZ(DQ(),0.5+DQ()*0.5,0.5+DQ()*0.5,1.0,b.K);}
function XU(a,b){var c,d;c=Ef(a.G.I,200,100,b);Gu(c,C(273),11.0);BM(c,C(274),0.0,20.0);I5(c,255,0,0);BM(c,C(274),0.25,40.0);I5(c,0,255,0);BM(c,C(274),0.5,60.0);I5(c,0,0,255);BM(c,C(274),0.75,80.0);d=CZ(a.G.I);CL(d,c);EK(c);return d;}
function ZK(a,b){var c,d,e,f;c=Ef(a.G.I,255,100,b);Gu(c,C(158),10.0);d=Bx();e=$rt_str(c.c1.font);f=new M;O(f);H(H(f,C(275)),e);Bt(d,N(f));DV(c,C(276));BM(c,C(276),0.0,20.0);BM(c,C(276),0.25,40.0);BM(c,C(276),0.5,60.0);BM(c,C(276),0.75,80.0);e=CZ(a.G.I);CL(e,c);EK(c);return e;}
function AIm(a,b){var c;a.r$=a.r$+1|0;c=b/5.0;HZ(c-(c|0),1.0,1.0,1.0,a.g4.K);return Ve(a.hU,b);}
function AK6(a){var b,c,d,e,f,g,h,i;b=a.G.I;E9(b,a.lE);c=a.iz.data;d=c.length;e=0;while(e<d){Tg(c[e],b,0,0);e=e+1|0;}f=a.ea;g=f.u;g.b=(a.ja.b-f.t.b|0)-5|0;g.a=0;Cc(b,0);h=0;while(h<7){f=a.ea;Es(f,b,a.md,W(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0,1.0*h/7.0);h=h+1|0;}f=a.ea;f.u.b=(a.ja.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.so;f=a.ea;f.u.a=W(h,10+((10*f.t.a|0)/15|0)|0)+5|0;Qw(f,b,g);h=h+1|0;}Qw(a.d$,b,a.nC);Cc(b,1);g=a.jU;f=a.nD;i=g.u;h=i.a;d=i.b;g=g.t;FQ(b,b.kw);Gf(b.kw,b.X,h,d,g,b.c6);I6(b.kw,b.X,f);FO(b);Cc(b,0);f
=a.y4;if(f!==null)AAa(a.g4,b,f,0,0,0.0);WK(a.hU,b,new Bf);Kr(b,C(277));}
function AOn(a,b,c){var d,e,f,g,h,i,j,k;d=Bx();e=CB(b);f=new M;O(f);H(H(f,C(278)),e);Bt(d,N(f));d=Bx();f=new M;O(f);FH(H(f,C(279)),c);Bt(d,N(f));g=Cb(30.0,c);h=Cb(10.0,c);i=0;while(true){j=a.iz.data;if(i>=j.length)break;k=1+i|0;j[i]=Vg(W(h,k)+W(g,i)|0,g,g,g);T$(a,a.iz.data[i]);i=k;}U(a.g4.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.d$;U(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);U(a.jU.u,(b.a/2|0)+10|0,50);Ck(a.ja,b);}
function OQ(a,b){var c,d,e,f,g;c=Bx();d=!b.io?C(280):C(281);e=b.d6;f=b.bj;g=b.tE;b=new M;O(b);Gx(H(V(H(H(H(b,d),e),C(282)),f),C(283)),g);Bt(c,N(b));return 0;}
function Vr(){var a=this;Cn.call(a);a.zu=null;a.iX=null;a.iB=null;a.g_=null;a.c$=null;a.dy=null;a.lS=null;a.lz=null;a.h1=0;a.h_=null;a.h$=null;}
function Sb(a,b,c){Fr(b,c);FF(b);}
function AAv(a,b,c,d,e,f){var g,h;g=Ef(f,c,120,b);Cu(g,e);e=!b?C(284):C(285);h=new M;O(h);H(H(H(h,e),d),C(155));d=N(h);BM(g,d,0.0,20.0);BM(g,d,0.25,40.0);BM(g,d,0.5,60.0);BM(g,d,0.75,80.0);BM(g,d,1.0,100.0);h=CZ(f);CL(h,g);EK(g);return h;}
function AQq(a,b){return 0;}
function AJG(a){var b,c,d,e,f,g,h,i;b=a.G.I;E9(b,a.iX);Cc(b,0);c=a.iB;d=c.b;e=a.g_;f=d-e.b|0;g=c.a-e.a|0;Bu(b,0,0,e,a.c$.ba);Bu(b,g,0,a.g_,a.dy.ba);Bu(b,0,f,a.g_,a.c$.K);Bu(b,g,f,a.g_,a.dy.K);c=a.c$;e=c.u;h=e.b;i=((a.iB.b*3|0)/4|0)-(c.t.b/2|0)|0;UZ(c,b,e.a,h,a.h_,0);c=a.c$;UZ(c,b,c.u.a,i,a.h_,1);c=a.dy;UP(c,b,c.u.a,h,a.h$,0);e=a.dy;UP(e,b,e.u.a,i,a.h$,1);Kr(b,C(277));}
function ALN(a,b,c){var d,e;Ck(a.iB,b);U(a.g_,b.a/2|0,b.b/2|0);d=a.iB.b/4|0;e=a.c$;d=d-(e.t.b/2|0)|0;U(e.u,(b.a/4|0)-(a.h1/2|0)|0,d);U(a.dy.u,((b.a*3|0)/4|0)-(a.h1/2|0)|0,d);}
function Py(){var a=this;CQ.call(a);a.rI=null;a.eM=null;a.dk=null;a.ey=null;a.nX=null;}
function ANC(a,b,c){var d;d=HH(a.s,a.nX);Ig(a.eM,d,a.s);Ig(a.dk,d,a.s);}
function S3(b){return IS(b,ATA());}
function IS(b,c){var d;d=Vc();MT(d,K4(b,I$(c,25)),!b?null:IS(b-1|0,c));MT(d,K4(b,I$(c,20)),!b?null:IS(b-1|0,c));MT(d,K4(b,I$(c,15)),!b?null:IS(b-1|0,c));MT(d,K4(b,I$(c,10)),!b?null:IS(b-1|0,c));return IG(d);}
function K4(b,c){var d;if(b){d=new M;O(d);H(H(V(d,b),C(36)),c);c=N(d);}return c;}
function MT(b,c,d){if(d!==null)F0(b,c,d);else{d=new Y8;d.qZ=c;D8(b,c,d);}}
function ALT(a,b,c){var d,e;G3(a,b,c);b=a.s.cf;d=Eo(a.eM);e=Eo(a.dk);KV(a.eM,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);KV(a.dk,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AK7(a){var b,c,d,e,f,g,h,i;FX(a);b=a.G.I;Cc(b,1);c=a.rI;d=a.s;e=d.cf;U(c.m0,e.a,Cb(2.0,d.b0));U(c.nF,Cb(2.0,d.b0),e.b);F7();f=A1e;g=d.cN;h=e.b/2|0;i=c.m0;Bu(g,0,h-(i.b/2|0)|0,i,f);g=d.cN;h=e.a/2|0;c=c.nF;Bu(g,h-(c.a/2|0)|0,0,c,f);MS(a.eM,a.s);MS(a.dk,a.s);HV(a.ey);Cc(b,0);}
function AOp(a,b){var c,d,e;c=LO(a.ey,b);d=LR(a.eM,b.i,a.s.cM);e=LR(a.dk,b.i,a.s.cM);return !c&&!d&&!e?0:1;}
function ATK(a,b,c){return Nc(a.ey,b,c);}
function AS2(a,b,c){return DD(a.ey);}
function AJa(a,b,c,d){var e,f,g;e=KI(a.ey,b,c,d);f=MJ(a.eM,b.i,c,d);g=MJ(a.dk,b.i,c,d);return !e&&!f&&!g?0:1;}
function UM(){var a=this;CQ.call(a);a.iL=null;a.fi=null;a.j9=null;a.lu=null;}
function AKN(a,b,c){if(b===0.0)R7(a);}
function AQW(a){var b;FX(a);b=a.G.I;L2(a.fi,b);HV(a.iL);}
function R7(a){var b,c,d,e,f,g,h;b=a.j9;if(b!==null){J4(a.fi,b);L4(b);}b=(H9()).fC;c=AYx(a.s,new Ow);d=EZ(C(157),14.0);e=ANz();f=0;while(f<300){g=C8(f);h=new UE;h.px=C(286);h.pw=g;h.pv=C(287);Ns(e,C(286),g,C(287),h);f=f+1|0;}OY(c,YM(e));AAz(c,b,d);g=AA4(a.s);h=AAK(c,a.s);Nh(h,b.lD,b.lf);K_(g,h);g.e6=b;Ir(g,C(288),a.lu,2.0);a.j9=g;HT(a.fi,g);Q3(a);}
function AJu(a,b,c){G3(a,b,c);Z6(a.fi,b,c);Q3(a);}
function Q3(a){var b,c,d;b=a.s.cf;FR(a.j9,B6((b.a*2|0)/10|0,(b.b*4|0)/10|0),B6((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.j9;b=AAJ(c.W.r);d=new M;O(d);H(H(d,C(289)),b);Ir(c,N(d),a.lu,2.0);}
function AKZ(a,b){return RR(a.fi,b);}
function OM(){var a=this;CQ.call(a);a.kJ=null;a.g1=null;a.fP=null;a.jf=null;a.qS=null;a.i4=null;a.he=null;a.gA=null;a.jI=0;a.g0=0;}
function Px(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.g1.j>0){d=DQ();e=a.g1;f=d*(e.j-1|0)|0;e=ED(e,f);ED(a.fP,f);f=a.g0;g=e.t;a.g0=f-W(g.a,g.b)|0;IP(a.kJ,e.cW);}c=c+1|0;}}
function MC(a,b){var c,d,e,f,g,h,i,j;c=Js(a.s);Cu(c,a.jf);d=0;while(d<b){e=I$(a.i4,1+(DQ()*19.0|0)|0);f=Kt();g=f.cW;h=a.kJ;BR(c);i=new R3;i.ux=c;BU(g,JI(h,e,i));(Y7(DQ(),1.0,1.0,f.ba)).bH=0.5;h=f.u;g=f.cW;U(h,g.bp|0,g.bG|0);h=f.t;g=f.cW;U(h,g.bl|0,g.bH|0);BH(a.fP,e);BH(a.g1,f);j=a.g0;h=f.t;a.g0=j+W(h.a,h.b)|0;d=d+1|0;}a.gA=J6(a.kJ);}
function ASR(a){var b,c,d,e,f,g,h,i;FX(a);b=a.G.I;Cc(b,1);c=a.s.cN;if(a.fP.j){d=a.gA;d=GI(c,d.a,d.b);Cu(d,a.jf);e=a.jf.dt;Bu(c,0,0,a.gA,a.qS);f=0;while(f<a.fP.j){g=Bs(a.g1,f);h=Bs(a.fP,f);g=g.cW;BM(d,h,g.bp,g.bG+e);f=f+1|0;}g=a.he;if(!(g!==null&&BT(g)==a.gA.a&&Da(a.he)==a.gA.b))a.he=CK(a.he,CZ(c));CL(a.he,d);EK(d);i=0;while(i<a.fP.j){d=Bs(a.g1,i);Gz(d,C6(0));Es(d,c,a.he,0,0,0.0);i=i+1|0;}}Cc(b,0);}
function AH_(a,b){var c,d;if(a.jI){c=a.gA;d=Bc(W(c.a,c.b),2211840);if(a.g0/d<=0.7)MC(a,IV(a.i4,5));else Px(a,IV(a.i4,5));}return a.jI;}
function UH(){var a=this;Cn.call(a);a.eL=null;a.g2=null;a.iA=null;a.lk=null;a.eq=0;a.va=0;a.qT=null;a.k1=0;a.pr=0;a.p9=null;a.ug=null;}
function AHL(a){var b,c;b=a.eq;c=new M;O(c);V(H(c,C(290)),b);$rt_globals.console.info($rt_ustr(N(c)));E9(a.eL,a.qT);Jx(a.iA,a.eq,0,Gs(a),5000,a.lk.a,20);Cc(a.eL,1);Zk(a.iA,a.eL);Cc(a.eL,0);b=a.eq;c=new M;O(c);V(H(c,C(290)),b);$rt_globals.console.info($rt_ustr(N(c)));Vy(a.g2,a.eq/a.k1|0);U2(a.g2,a.eq,Gs(a),a.ug,a.eL);}
function AHK(a,b,c){a.lk=b;T1(a.g2,B6(0,0),50,Gs(a),c);LZ(a.g2,a.eL,0,Gs(a));}
function X0(a){return 5000-Gs(a)|0;}
function Gs(a){return Bc(a.va,a.lk.b);}
function Dg(){var a=this;Cn.call(a);a.m7=null;a.hl=null;a.yl=0.0;}
function A1h(a){var b=new Dg();GP(b,a);return b;}
function GP(a,b){Eg(a,b);a.m7=ACn(0,0,64);a.hl=new Bf;OV(b.bW,IF(BG(a)));}
function T6(a){E9(a.G.I,a.m7);}
function Uw(a,b,c){Ck(a.hl,b);a.yl=c;}
var R$=G(Dg);
var ABh=G(Dg);
function AYD(a){var b=new ABh();ARi(b,a);return b;}
function ARi(a,b){var c,d,e,f,g,h;GP(a,b);c=b.bW;d=new SI;d.yS=a;e=R(B,1);e.data[0]=C(291);CM(c,d,C(292),e);f=b.bW;g=new SH;g.z3=a;h=R(B,1);h.data[0]=ADD([1,2,3,4,5]);CM(f,g,C(293),h);f=b.bW;g=new SK;g.ol=a;h=R(B,1);h.data[0]=AXu([1,2,3,4,5]);CM(f,g,C(294),h);f=b.bW;g=new SJ;g.zn=a;h=R(B,1);h.data[0]=Eq([1,2,3,4,5]);CM(f,g,C(295),h);f=b.m.b7;d=new IA;g=new SG;g.At=a;c=new SF;c.p5=a;Zq(d,b,g,c);Bb(f,d);}
function Zo(a,b){var c,d,e,f,g,h;c=b.data;d=Bx();e=CB(c[0]);f=new M;O(f);H(H(f,C(296)),e);Bt(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((RX(b,1)).ie));d=Bx();e=CB(c[1]);if(b===null)f=C(29);else{f=new M;O(f);BV(f,C(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BV(f,C(44));V(f,c[g]);g=g+1|0;}BV(f,C(45));f=N(f);}h=new M;O(h);H(H(H(H(h,C(297)),e),C(298)),f);Bt(d,N(h));}
function N5(){var a=this;Dg.call(a);a.eo=null;a.fT=null;a.mD=null;a.vJ=null;a.nY=null;}
function AM9(a,b){b=b/5.0;HZ(b-(b|0),1.0,1.0,1.0,a.fT.K);return 0;}
function AKO(a){T6(a);Es(a.eo,a.G.I,a.vJ,0,0,0.5);AAa(a.fT,a.G.I,a.mD,0,0,0.0);Kr(a.G.I,C(277));}
function AU$(a,b,c){var d,e,f;Uw(a,b,c);U(a.fT.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.eo;e=d.u;f=b.a;d=d.t;U(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function UB(){var a=this;Dg.call(a);a.gh=null;a.pi=null;a.kW=null;a.jN=null;a.is=null;}
function AV4(a){var b,c,d,e,f,g;T6(a);b=a.G.I;c=a.jN;Mp(b,c.a,c.b,a.is);b=a.gh;c=a.pi;d=a.hl;e=a.G.I;f=0;while(true){g=0;while(true){Es(b,e,c,g,f,0.5);g=g+BT(c)|0;if(g>=d.a)break;}f=f+Da(c)|0;if(f>=d.b)break;}Hr(a.G.I);}
function AME(a,b,c){Uw(a,b,c);U(a.is,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function Uu(){var a=this;Cn.call(a);a.et=null;a.k2=null;a.fV=null;a.b$=null;a.eX=0;a.h8=null;a.eW=0;a.Aw=20;a.AX=11;a.yb=220;a.ks=null;a.zL=5000;a.hD=0;a.f8=null;}
function AUD(a){var b,c,d,e,f,g,h;b=a.h8;c=a.eW;d=a.ks;Jx(b,c,0,d.b,5000,d.a,20);Cc(a.et,1);Zk(a.h8,a.et);if(a.b$===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BM(a.k2,C8(e),0.0,c);}b=CZ(a.et);a.b$=b;CL(b,a.k2);}if(a.eW<=a.eX)while(true){f=a.eX;if(f<=a.eW)break;a.eX=f-20|0;b=a.fV;g=a.hD-1|0;a.hD=g;BM(b,C8(g),0.0,20.0);Iy(a.b$,a.fV,0,a.eX%220|0);EM(a.fV);}else while(a.eX<(a.eW-20|0)){b=a.fV;g=a.hD+1|0;a.hD=g;BM(b,C8((g+11|0)-1|0),0.0,20.0);Iy(a.b$,a.fV,0,a.eX%220|0);EM(a.fV);a.eX=a.eX+20|0;}b=Hv(0,0,BT(a.b$),Da(a.b$));H4(b,
0,0,BT(a.b$),Da(a.b$));Gz(b,a.f8.data[0]);Fk(b,a.f8.data[1]);Es(b,a.et,a.b$,400,0,1.0);g=a.eW%220|0;f=Bc(Da(a.b$)-g|0,200);d=Hv(0,0,BT(a.b$),f);H4(d,0,g,BT(a.b$),f);Gz(d,a.f8.data[0]);Fk(d,a.f8.data[1]);Es(d,a.et,a.b$,0,0,1.0);h=Hv(0,f,BT(a.b$),(Da(a.b$)-f|0)-20|0);H4(h,0,0,BT(a.b$),(Da(a.b$)-f|0)-20|0);Gz(h,a.f8.data[1]);Fk(h,a.f8.data[0]);Es(h,a.et,a.b$,0,0,1.0);}
function AK_(a,b,c){Ck(a.ks,b);}
function ASm(a,b){return 0;}
function TQ(a){return 5000-a.ks.b|0;}
function Jy(){Dg.call(this);this.d1=0;}
function Tf(a){var b,c;b=a.G.bW;c=new Xi;c.p4=a;SX(b,c,Oe(a));}
function QZ(a){var b,c,d,e;b=a.d1+1|0;a.d1=b;c=IF(F(Jy));d=new M;O(d);H(H(V(H(d,C(299)),b),C(36)),c);e=N(d);c=a.G.bW;d=new Z8;d.ql=e;Wd(c,e,d,Oe(a));}
function Oe(a){var b;b=new RZ;b.xz=a;return b;}
function AN8(a,b,c,d){a:{switch(c){case 0:break;case 2:QZ(a);break a;default:break a;}Tf(a);}return 1;}
function Ue(){var a=this;Cn.call(a);a.up=null;a.f$=null;a.lY=null;a.hV=null;}
function AVT(a){var b;b=a.G.I;E9(b,a.up);Es(a.f$,b,a.lY,0,0,0.5);}
function AQt(a,b,c){var d,e,f;d=a.f$;e=d.u;f=b.a;d=d.t;U(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function G_(){var a=this;Cn.call(a);a.vU=null;a.ch=null;a.dX=null;a.c_=null;a.e5=null;a.es=null;}
function Nu(a,b){var c,d;Eg(a,b);a.vU=C6(20);a.ch=T9();a.dX=new Bf;a.c_=new Bf;a.e5=new Bf;a.es=new Bf;c=b.m.b7;d=new WZ;d.Ai=a;Bb(c,d);Bb(b.m.br,a);b=a.ch.ba;F7();BU(b,A0K);BU(a.ch.K,A0M);}
function ACP(a){var b,c,d;b=a.G.I;E9(b,a.vU);c=a.ch;d=c.u;Bu(b,d.a,d.b,c.t,c.ba);Cc(b,1);c=a.ch;d=c.u;AAI(b,d.a,d.b,c.t,a.dX,a.c_,a.e5,a.es,c.K);Cc(b,0);}
function AOL(a,b){return 0;}
var VC=G(G_);
function AR0(a,b,c){var d,e,f;d=a.ch;e=d.u;f=b.a;d=d.t;U(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);U(a.dX,0,0);U(a.c_,Bc(b.a,b.b),Bc(b.a,b.b));b=a.e5;d=a.dX;U(b,d.a,d.b+20|0);b=a.es;d=a.c_;U(b,d.a,d.b+40|0);}
function ATu(a,b){var c,d,e;Ck(a.dX,b.i);b=a.c_;c=a.ch;d=c.u;e=d.a;c=c.t;U(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.e5;c=a.dX;U(b,c.a,c.b+20|0);b=a.es;c=a.c_;U(b,c.a,c.b+40|0);return 0;}
function VB(){var a=this;G_.call(a);a.fu=null;a.gc=null;}
function AVw(a,b){var c;c=a.c_;b=b.i;c.b=b.b-50|0;a.es.b=b.b+100|0;return 1;}
function AKK(a){var b,c,d,e,f,g,h;b=Be(a.dX.a,a.e5.a);c=Bc(a.c_.a,a.es.a);d=Bc(a.dX.b,a.c_.b)-50|0;e=Be(a.e5.b,a.es.b)+50|0;Hx(a.ch,b,d,c-b|0,e-d|0);ACP(a);f=a.ch.u.a-10|0;Uy(a,a.G.I,10,f,a.dX,a.e5);g=a.ch;h=g.u.a+g.t.a|0;Uy(a,a.G.I,h,f,a.c_,a.es);}
function Uy(a,b,c,d,e,f){var g;U(a.fu,c,a.ch.u.b);U(a.gc,d,e.b-a.ch.u.b|0);g=a.fu;Bu(b,g.a,g.b,a.gc,a.ch.ba);U(a.fu,c,e.b);U(a.gc,d,f.b-e.b|0);e=a.fu;Bu(b,e.a,e.b,a.gc,a.ch.K);U(a.fu,c,f.b);e=a.gc;g=a.ch;U(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.fu;Bu(b,e.a,e.b,a.gc,a.ch.ba);}
function AIM(a,b,c){}
function Zm(){var a=this;CQ.call(a);a.hZ=null;a.ev=null;a.iS=null;a.iT=null;a.pX=null;a.n_=null;a.qk=null;}
function ALO(a,b,c){if(b===0.0)Wl(a);}
function AUf(a){var b;FX(a);b=a.G.I;L2(a.ev,b);HV(a.hZ);}
function Wl(a){Tb(a,a.iS);Tb(a,a.iT);a.iS=Zj(a,0.5,0,C(300));a.iT=Zj(a,1.0,1,C(301));HT(a.ev,a.iS);HT(a.ev,a.iT);Yc(a);}
function Tb(a,b){if(b!==null){J4(a.ev,b);L4(b);}}
function Zj(a,b,c,d){var e,f,g;e=AA4(a.s);f=new Qg;g=new YN;g.rt=a;g.ru=e;g.rs=d;WB(f);f.kx=new B$;f.mR=new Bf;f.qX=g;f.qU=b;if(c){d=AAK(f,a.s);Nh(d,a.pX,a.n_);f=d;}K_(e,f);e.e6=Hj();return e;}
function ATo(a,b,c){G3(a,b,c);Z6(a.ev,b,c);Yc(a);}
function Yc(a){var b;b=a.s.cf;FR(a.iT,B6((b.a*2|0)/10|0,(b.b*2|0)/10|0),B6((b.a*7|0)/10|0,(b.b*7|0)/10|0));FR(a.iS,B6(b.a/10|0,b.b/10|0),B6((b.a*6|0)/10|0,(b.b*6|0)/10|0));}
function AMF(a,b){return RR(a.ev,b);}
var NG=G(JN);
function AJM(a){return JF(1);}
function AWf(a,b,c){AE4(a,b,c);}
function Jd(){var a=this;B.call(a);a.xI=null;a.eC=null;a.uT=null;a.zV=null;a.r5=null;a.nJ=null;a.p8=null;a.xL=null;a.mk=null;a.l_=null;a.je=null;}
function A1i(a,b,c,d,e,f,g,h,i,j,k){var l=new Jd();Nf(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Nf(a,b,c,d,e,f,g,h,i,j,k,l){a.xI=b;a.eC=c;a.uT=d;a.zV=e;a.r5=f;a.nJ=g;a.p8=h;a.xL=i;a.mk=j;a.l_=k;a.je=l;}
var ABG=G(0);
function AAW(){var a=this;B.call(a);a.fw=null;a.hi=null;a.p$=null;a.op=null;}
function AE9(a,b,c,d){var e=new AAW();AVB(e,a,b,c,d);return e;}
function AVB(a,b,c,d,e){a.fw=b;a.hi=c;a.p$=d;a.op=e;}
var AEs=G(0);
function Hj(){var b,c,d;b=new IN;c=new I1;APv();d=A1j;Nk(c,d,A1k,A1l,A1m,A1n,d);Mq(b,c,AGK(),AG2(S(C(302)),S(C(116)),S(C(117))),AGK(),AAL(1,0.125),A1o,A1p);return b;}
function AGK(){var b,c;b=new Jw;c=S(C(303));APv();K9(b,c,A1q,A1r);return b;}
function AF8(){var b,c;b=new Jw;c=S(C(117));AIl();K9(b,c,A1s,A1t);return b;}
function AGy(){var b,c;b=new Jw;AFW();c=A1u;AID();K9(b,c,A1v,A1w);return b;}
function AHd(){var a=this;B.call(a);a.sV=null;a.nZ=null;a.vi=null;a.oH=null;}
function AAZ(a,b,c,d){var e=new AHd();AI1(e,a,b,c,d);return e;}
function AI1(a,b,c,d,e){a.sV=b;a.nZ=c;a.vi=d;a.oH=e;}
function AAE(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dR.nZ;break a;case 3:if(c!=3){b=b.dR.oH;break a;}b=b.dR.vi;break a;default:b=b.bS.eC;break a;}b=b.dR.sV;}return b;}
function IX(a,b,c){return AAE(a,b,0,c);}
function Nl(){var a=this;B.call(a);a.j2=null;a.jw=null;}
function NA(a,b){var c;c=a.jw;a.jw=b;return c;}
function Kh(){var a=this;Nl.call(a);a.bP=null;a.b9=null;a.f1=0;a.ge=0;}
function KD(a){var b;b=LJ(a);if(b==2){if(LJ(a.b9)<0)a.b9=Ox(a.b9);return Qr(a);}if(b!=(-2))return a;if(LJ(a.bP)>0)a.bP=Qr(a.bP);return Ox(a);}
function LJ(a){var b,c;b=a.b9;c=b===null?0:b.f1;b=a.bP;return c-(b===null?0:b.f1)|0;}
function Ox(a){var b;b=a.bP;a.bP=b.b9;b.b9=a;Ez(a);Ez(b);return b;}
function Qr(a){var b;b=a.b9;a.b9=b.bP;b.bP=a;Ez(a);Ez(b);return b;}
function Ez(a){var b,c,d;b=a.b9;c=b===null?0:b.f1;b=a.bP;d=b===null?0:b.f1;a.f1=Be(c,d)+1|0;a.ge=1;b=a.bP;if(b!==null)a.ge=1+b.ge|0;b=a.b9;if(b!==null)a.ge=a.ge+b.ge|0;}
var AGD=G();
function AJs(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new QS;c=c.buffer;d.f0=c;d.nO=new $rt_globals.Int8Array(c);d.la=new $rt_globals.Uint16Array(c);d.uF=new $rt_globals.Int32Array(c);d.rp=new $rt_globals.Float32Array(c);d.rE=new $rt_globals.Float64Array(c);e=d.f0.byteLength;c=new M;O(c);V(H(c,C(304)),e);CJ(N(c));e=b.callToCpp1();c=new M;O(c);V(H(c,C(305)),e);CJ(N(c));f=b.callToCpp2();c=new M;O(c);FH(H(c,C(306)),f);CJ(N(c));c=N4(d,b.getC8String());g=new M;O(g);H(H(g,C(307)),c);CJ(N(g));c
=On(d,b.getC16String());g=new M;O(g);H(H(g,C(308)),c);CJ(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.f0,h,8));c=AFg(i);g=new M;O(g);H(H(g,C(309)),c);CJ(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.f0,h,8));c=ASK(j);g=new M;O(g);H(H(g,C(310)),c);CJ(N(g));k=ADi(d,b.getCDoubleArray8(),8);l=AV7(k);c=new M;O(c);H(H(c,C(311)),l);CJ(D3(c));l=AVV(b.getC8String(),C(312),d);c=ML();H(H(c,C(313)),l);CJ(D3(c));l=AO6(b.getC16String(),C(314),
d);c=ML();H(H(c,C(315)),l);CJ(D3(c));c=ARd(i,d,b.getCIntArray8(),Eq([11,22,33,44,55,66,77,88]));g=ML();H(H(g,C(316)),c);CJ(D3(g));c=AS4(j,d,b.getCFloatArray8(),100,Eq([111,222,333,444,555,666,777,888]));g=ML();H(H(g,C(317)),c);CJ(D3(g));b=ATp(k,d,b.getCDoubleArray8(),1000,Eq([1111,2222,3333,4444,5555,6666,7777,8888]));c=ML();H(H(c,C(318)),b);CJ(D3(c));}
function AS4(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(319);h=0;i=e;a:{while(h<g){if(C4(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.rp[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(320);}return C(321);}
function ATp(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(319);h=0;i=e;a:{while(h<g){if(HP(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.rE[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(320);}return C(321);}
function ARd(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(319);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.uF[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(320);}return C(321);}
function AVV(b,c,d){var e,f,g,h;e=N4(d,b);if(!Bl(c,e))return C(322);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.nO[h])return C(323);f=f+1|0;}return C(320);}
function AO6(b,c,d){var e,f,g,h;e=On(d,b);if(!Bl(c,e))return C(322);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.la[h>>>1|0]&65535))return C(323);f=f+1|0;}return C(320);}
function CJ(b){QO(C(2),b);}
function ANU(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Rk(){B.call(this);this.qz=null;}
function AJo(a,b){return ADm(a.qz,b);}
function Ri(){B.call(this);this.wJ=null;}
function AMd(a,b){JR(a.wJ,b);}
function Rj(){B.call(this);this.qt=null;}
function ATJ(a,b,c){return Hn(a.qt,b,c);}
function Pv(){B.call(this);this.ro=null;}
function ARj(a){var b,c;b=a.ro.cI;BR(b);c=new NJ;c.st=b;return c;}
function Pw(){B.call(this);this.xG=null;}
function ANV(a,b,c,d){return KF(a.xG.cI,c,d);}
function Pt(){B.call(this);this.o4=null;}
function AOJ(a,b){b=b;return ABz(a.o4,b);}
function AG9(){Jv.call(this);this.cW=null;}
function Kt(){var a=new AG9();AU6(a);return a;}
function Hv(a,b,c,d){var e=new AG9();ANR(e,a,b,c,d);return e;}
function AU6(a){WL(a);a.cW=new B$;}
function ANR(a,b,c,d,e){WL(a);a.cW=new B$;Hx(a,b,c,d,e);}
function FF(a){var b,c;b=a.t;c=a.cW;U(b,c.bl-c.bp|0,c.bH-c.bG|0);}
function Fr(a,b){H4(a,0,0,BT(b),Da(b));}
function H4(a,b,c,d,e){Ci(a.cW,b,c,d,e);}
function Es(a,b,c,d,e,f){var g;g=a.u;Eb(b,g.a+d|0,g.b+e|0,a.t,a.cW,c,a.K,a.ba,f);}
function Qw(a,b,c){var d;d=a.u;Ed(b,d.a,d.b,a.t,a.cW,c,a.K,a.ba);}
function UZ(a,b,c,d,e,f){Ed(b,c,d,a.t,a.cW,e,!f?a.K:a.ba,!f?a.ba:a.K);}
function UP(a,b,c,d,e,f){Eb(b,c,d,a.t,a.cW,e,!f?a.K:a.ba,!f?a.ba:a.K,0.0);}
function Gz(a,b){BU(a.K,b);}
function Fk(a,b){BU(a.ba,b);}
function WJ(){B.call(this);this.fe=null;}
function AJH(a,b){var c,d,e,f,g,h;c=b.i;d=c.a;e=a.fe.g4;f=e.t;d=d-f.a|0;g=c.b-f.b|0;U(e.u,d,g);c=a.fe;e=c.G.bW;b=b.i;d=0;a:{while(true){h=c.iz.data;if(d>=h.length)break;if(E2(h[d],b)){b=c.oh.data[d];break a;}d=d+1|0;}b=null;}GW(e,b);return 1;}
function AH1(a,b,c,d){if(!c&&d==2){b=a.fe;T$(b,b.d$);}return 1;}
function AJz(a,b,c){var d,e;d=Bx();e=new M;O(e);V(H(e,C(324)),c);Bt(d,N(e));if(c)return null;d=b.i;e=!E2(a.fe.d$,d)?null:d;Xa(a.fe.hU,d.a,d.b);b=a.fe;Rs(b.hU,Ki(b.G.bW));if(e===null)b=A0W;else{b=new W6;b.rU=a;b.rV=e;}return b;}
function AIO(a,b,c){var d;b=Bx();d=new M;O(d);V(H(d,C(325)),c);Bt(b,N(d));return 1;}
function RN(){B.call(this);this.xT=null;}
function ATZ(a,b){return OQ(a.xT,b);}
function RM(){B.call(this);this.rm=null;}
function ARl(a,b){return OQ(a.rm,b);}
function RL(){B.call(this);this.Ad=null;}
function AN9(a,b,c){var d,e;Bt(Bx(),C(326));d=!c?C(327):C(28);e=new M;O(e);H(H(H(e,C(328)),d),C(329));Yg(b,N(e));return 1;}
function RK(){B.call(this);this.yk=null;}
function AH6(a){Bt(Bx(),C(330));}
function RJ(){B.call(this);this.zq=null;}
function AQy(a,b){Bt(Bx(),C(331));return 1;}
function RI(){B.call(this);this.vB=null;}
function AT7(a,b,c,d){var e,f,g;b=a.vB;e=( -d|0)/10|0;b=b.d$;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function HG(){var a=this;B$.call(a);a.gW=0;a.gZ=0;a.gX=0;a.gY=0;}
function C6(a){var b=new HG();AVH(b,a);return b;}
function Dr(a,b,c){var d=new HG();AKX(d,a,b,c);return d;}
function S(a){var b=new HG();AS$(b,a);return b;}
function Ex(a,b,c,d){var e=new HG();SD(e,a,b,c,d);return e;}
function BO(a){var b=new HG();KH(b,a);return b;}
function AVH(a,b){SD(a,b,b,b,255);}
function AKX(a,b,c,d){SD(a,b,c,d,255);}
function AS$(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.gW=JA(P(b,1))*17|0;a.gZ=JA(P(b,2))*17|0;a.gX=JA(P(b,3))*17|0;a.gY=255;}else{a.gW=Mo(P(b,1),P(b,2));a.gZ=Mo(P(b,3),P(b,4));a.gX=Mo(P(b,5),P(b,6));a.gY=J(b)!=9?255:Mo(P(b,7),P(b,8));}H$(a.gW,a.gZ,a.gX,a.gY,a);return;}}
function SD(a,b,c,d,e){a.gW=b;a.gZ=c;a.gX=d;a.gY=e;H$(b,c,d,e,a);}
function KH(a,b){a.gW=b.gW;a.gZ=b.gZ;a.gX=b.gX;a.gY=b.gY;BU(a,b);}
function JA(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Mo(b,c){return (16*JA(b)|0)+JA(c)|0;}
var AFs=G(0);
function JF(b){return !b?I(BA,[C(157),C(158),C(332)]):I(BA,[C(157),C(158),C(332),C(41)]);}
function N0(){B.call(this);this.ku=null;}
function ALx(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.ku.c$;e=DQ();f=e-0.5+(DQ()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DQ()*0.3;h=0.5+DQ()*0.5;HZ(e,g,h,1.0,b.K);HZ(f,g,h,1.0,b.ba);b=a.ku;BU(b.dy.K,b.c$.K);b=a.ku;BU(b.dy.ba,b.c$.ba);}return 1;}
function NU(){var a=this;B.call(a);a.m0=null;a.nF=null;}
function AEu(){var a=this;B.call(a);a.fy=null;a.co=null;a.ga=null;a.gQ=null;a.m$=null;a.cx=null;a.fH=null;a.cX=0;a.fD=0;a.nz=0;a.jm=0;a.j0=0;a.gL=0;a.kp=null;a.lJ=null;a.n8=null;a.j_=null;}
function AD6(){var a=new AEu();ATg(a);return a;}
function ATg(a){a.co=T9();a.ga=new Bf;a.gQ=new Bf;a.cx=A1x;a.jm=(-1);a.j0=1;}
function K3(a,b){Mz(a);a.cx=b;}
function Ig(a,b,c){a.fy=b;X8(a,c);Mz(a);}
function In(a,b){var c;a.m$=b.jD;c=b.lM.mV;BU(a.co.K,c);c=b.iV.mn;BU(a.co.ba,c);a.j_=b.lM;}
function O3(a){a.fH=CK(a.fH,null);U(a.ga,0,0);a.cx=A1x;a.jm=(-1);Vf(a.co);}
function X8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Js(b);d=b.b0;BR(a.fy);Cu(c,a.fy);e=KT(a.fy,1.25);f=0;a.cX=Cb(2.0,d);a.fD=Cb(3.0,d);a.nz=Cb(12.0,d);g=0;h=a.cx.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=SV(c,l.mz);n=a.nz;n=(n+m|0)+n|0;f=Be(f,n);b=l.en;b.a=g;b.b=0;b=l.dD;b.a=n;b.b=e;Ci(l.hK,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.ga;b.a=g;b.b=e;b=a.co.t;n=a.gL;if(!n){m=a.cX;m=(g+m|0)+W(m,a.cx.data.length)|0;}else m=(f+(a.cX*2|0)|0)+(a.fD*2|0)|0;b.a=m;if(!n)e=e+(a.cX*2|0)|0;else{n=a.cX;e=(W(e+n|0,a.cx.data.length)+n|0)
+(a.fD*2|0)|0;}b.b=e;}
function KV(a,b,c){var d,e,f,g,h,i,j;U(a.co.u,b,c);d=a.cX+a.fD|0;e=a.cx.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.en;j.a=b+d|0;j.b=c+h|0;if(!a.gL){if(!i.dD.a)ABc();d=d+(i.dD.a+a.cX|0)|0;}else{if(!i.dD.b)ABc();h=h+(i.dD.b+a.cX|0)|0;}g=g+1|0;}}
function ABc(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Eo(a){var b,c;b=a.ga;if(b.a&&b.b)return a.co.t;c=new Bv;Bk(c,C(333));K(c);}
function Mz(a){a.j0=1;}
function MS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.cN;if(!a.cx.data.length)return;if(a.fH===null)a.fH=CZ(c);a:{if(!a.j0){d=a.ga;if(W(d.a,d.b))break a;}d=a.ga;if(!W(d.a,d.b))X8(a,b);d=a.ga;e=d.a;f=d.b;if(!W(e,f))return;d=Ef(c,e,f,b.c0);Cu(d,a.fy);g=KT(a.fy,0.125);h=a.fy;i=h.dt;g=g+i-(i+h.eU)/16.0;j=a.cx.data;e=j.length;f=0;while(f<e){h=j[f];BM(d,h.mz,h.hK.bp+a.nz,g);f=f+1|0;}CL(a.fH,d);a.j0=0;EK(d);}if(!La(a.co)){d=a.co;ACy(c,d.t,d.u,d.ba,a.cX,a.gQ);d=a.co;h=d.t;k=d.u;d=d.K;e=a.cX;l=a.gQ;l.a=(h.a-e|0)-e|0;l.b
=(h.b-e|0)-e|0;Bu(c,k.a+e|0,k.b+e|0,l,d);if(a.gL){d=a.co;AES(c,d.t,d.u,0,0,QU(a.m$,b.b0),a.m$.nd,a.gQ);}}j=a.cx.data;m=j.length;n=0;while(n<m){d=j[n];if(b.c0){h=d.en;e=h.a;f=h.b;h=d.dD;k=d.hK;l=a.fH;o=a.j_;Ed(c,e,f,h,k,l,o.lG,MX(o,d.hp));}else{h=d.en;e=h.a;f=h.b;h=d.dD;k=d.hK;l=a.fH;o=a.j_;Eb(c,e,f,h,k,l,o.lG,MX(o,d.hp),0.0);}n=n+1|0;}b:{if(a.gL){j=a.cx.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.gQ;e=(a.co.t.a-(a.cX*2|0)|0)-(a.fD*2|0)|0;h=d.dD;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.en;Bu(c,k.a+
h.a|0,k.b,b,MX(a.j_,d.hp));}p=p+1|0;}}}}
function LR(a,b,c){var d,e,f,g,h,i;d=E2(a.co,b);e=!d?(-1):O9(a,b);f=a.jm;if(f!=e){if(f>=0){g=a.cx.data[f];g.hp=0;if(a.n8!==null){h=Bx();g=CB(g);i=new M;O(i);H(H(V(H(i,C(334)),f),C(335)),g);Bt(h,N(i));}}if(e>=0){h=a.cx.data[e];g=a.lJ;if(g!==null)g.od(b,e,h);h.hp=1;}a.jm=e;}return d&&Gk(c)?1:0;}
function MJ(a,b,c,d){var e,f;e=O9(a,b);if(e>=0){f=a.cx.data[e];if(!WV(f))f.ly.o();}return 1;}
function O9(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cx.data;if(c>=d.length)return (-1);e=d[c];if(Fw(b,e.en,e.dD))return c;if(a.gL){f=e.en;g=f.a;e=e.dD;h=e.a;g=g+h|0;i=f.b;f=a.gQ;f.a=(a.co.t.a-(a.cX*2|0)|0)-h|0;f.b=e.b;if(ABN(b,g,i,f))break;}c=c+1|0;}return c;}
function AAy(a){a.gL=1;}
function V1(){B.call(this);this.uO=null;}
function APY(a,b){var c;c=a.uO;if(b.bj==32)O3(c.dk);return 0;}
function VX(){B.call(this);this.wd=null;}
function AS6(a,b){var c,d,e,f;b=b;c=a.wd;Bt(Bx(),C(336));if(!DD(c.ey)){d=c.ey;b=b.i;e=S3(4);f=new U1;f.zf=c;GH(d,b,e,f);}return 1;}
function ACz(){var a=this;B.call(a);a.kD=null;a.iW=0.0;}
function EZ(a,b){var c=new ACz();AQV(c,a,b);return c;}
function AQV(a,b,c){a.kD=b;a.iW=c;}
function ASW(a,b){if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){b=b;return a.iW===b.iW&&BX(a.kD,b.kD)?1:0;}return 0;}
var VY=G();
function AWb(a){Bt(Bx(),C(337));}
var VZ=G();
function AI3(a){Bt(Bx(),C(338));}
function CU(){var a=this;B.call(a);a.ly=null;a.hK=null;a.en=null;a.dD=null;a.jG=null;a.mG=null;a.hp=0;a.mz=null;}
function AIT(a,b){var c=new CU();JW(c,a,b);return c;}
function AXy(a,b,c,d){var e=new CU();ADF(e,a,b,c,d);return e;}
function JW(a,b,c){ADF(a,b,c,null,null);}
function ADF(a,b,c,d,e){a.hK=new B$;a.en=new Bf;a.dD=new Bf;a.mz=c;a.mG=e;a.ly=b;a.jG=d;}
function WV(a){return a.jG===null?0:1;}
function Xz(){B.call(this);this.yK=null;}
function AN0(a,b){return b.io&&b.bj==32?1:0;}
function XB(){B.call(this);this.we=null;}
function AIA(a,b){var c,d,e,f,g,h;b=b;c=a.we;if(!DD(c.iL)){d=c.iL;b=b.i;e=R(CU,1);f=e.data;g=new CU;h=new QA;h.oP=c;JW(g,h,C(339));f[0]=g;GH(d,b,Fo(e),A0X);}return 1;}
var AED=G();
function AHb(b){var c,d;c=GI(b,250,64);Gu(c,C(273),25.0);I5(c,187,187,187);BM(c,C(340),0.0,24.0);BM(c,C(340),0.25,56.0);d=CZ(b);CL(d,c);EK(c);return d;}
function ACH(b){var c;c=new TA;c.iD=b;return c;}
function XA(){B.call(this);this.sp=null;}
function ARV(a,b,c,d){return LW(a.sp,b,c,d);}
function AGH(){var a=this;B.call(a);a.m6=0;a.m8=0;}
function ATA(){var a=new AGH();AUr(a);return a;}
function AUr(a){var b,c;b=AGl(GF((AFo())));c=GF((AFo()))^(-559038737);a.m6=b;a.m8=c;c=0;while(c<19){Tu(a);c=c+1|0;}}
function Tu(a){var b,c;b=a.m6;c=a.m8;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.m6=c;a.m8=b;return b;}
function AGl(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function IV(a,b){return 5.960464477539063E-8*(Tu(a)&16777215)*b|0;}
function N$(){B.call(this);this.qG=null;}
function AP9(a,b,c){var d;d=a.qG;if(b===0.0)MC(d,100);}
function N8(){B.call(this);this.wF=null;}
function AQA(a,b){var c,d,e;c=a.wF;d=b.bj;if(d==32){c.jI=c.jI?0:1;e=1;}else if(d==13){MC(c,1);e=1;}else if(d!=8)e=0;else{Px(c,1);e=1;}return e;}
var Tc=G(0);
function AAX(b,c){var d;d=new X1;d.qi=b;d.qh=c;return d;}
function AA7(){var a=this;B.call(a);a.gn=null;a.hc=0;a.jR=0;a.gK=0;}
function ABr(a){var b=new AA7();ALL(b,a);return b;}
function ALL(a,b){a.gn=BJ();a.gK=0;a.jR=2048;a.hc=b;}
function JI(a,b,c){var d,e,f,g,h,i,j;d=c.sS(b);e=a.jR;if(d>e){c=new Bv;f=new M;O(f);BI(V(H(V(H(f,C(341)),d),C(342)),e),41);Bk(c,N(f));K(c);}if(!a.hc){b=new BE;Bk(b,C(343));K(b);}a:{b=new B$;if(d){b:{c=a.gn;if(c.j>0){c=B3(c);g=d;while(true){if(!B5(c))break b;f=B7(c);if(f.bl>=g)break;}Ci(b,f.bp,f.bG,g,a.hc);f.bp=f.bp+g;h=f.bl-g;f.bl=h;if(h===0.0)XW(a.gn,f);break a;}}g=a.gK;i=d;Ci(b,0.0,g,i,a.hc);c=a.gn;f=new B$;h=a.gK;g=a.jR-d|0;j=a.hc;f.bp=i;f.bG=h;f.bl=g;f.bH=j;BH(c,f);a.gK=a.gK+a.hc|0;}}return b;}
function IP(a,b){var c,d,e,f,g,h,i;a:{c=AGO(b);b=a.gn;if(b.j>0){d=B3(b);while(true){if(!B5(d))break a;e=B7(d);if(e.bG===c.bG){f=e.bp;g=e.bl;h=f+g;i=c.bp;if(h===i){c.bp=f;c.bl=c.bl+g;SU(d);}else{h=c.bl;if(i+h===f){c.bl=h+g;SU(d);}}}}}}BH(a.gn,c);}
function J6(a){return B6(a.jR,a.gK);}
function Os(){var a=this;B.call(a);a.qI=null;a.jM=null;}
function AIp(a,b,c){if(c)return A0W;return FP(a.jM.iA,b.i,a.qI,1);}
function AIt(a,b,c){return 1;}
function ALv(a,b){var c;c=a.jM;return F3(c.iA,b.i,c.p9);}
function TP(){B.call(this);this.vk=null;}
function AP6(a,b,c,d){var e,f;b=a.vk;e=(NH(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eq=Bc(Be(0,b.eq+W(e,f)|0),X0(b));return 1;}
function Rp(){B.call(this);this.si=null;}
function APM(a,b){var c,d,e;c=a.si;if(b.cn&&b.bj==79){if(!b.bI){b=c.G.bW;d=new OX;d.vA=c;MQ(b,d);}else{b=c.G.bW;d=new OW;d.yu=c;XY(b,d);}e=1;}else e=0;return e;}
function SI(){B.call(this);this.yS=null;}
function APG(a,b){var c,d,e,f;c=b.data;b=Bx();d=CB(c[0]);e=new M;O(e);H(H(e,C(296)),d);Bt(b,N(e));b=Bx();f=c[1];d=new M;O(d);H(H(d,C(344)),f);Bt(b,N(d));}
function SH(){B.call(this);this.z3=null;}
function ASs(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bx();e=CB(c[0]);f=new M;O(f);H(H(f,C(296)),e);Bt(d,N(f));g=EI(RX(b,1));b=Bx();d=CB(c[1]);if(g===null)c=C(29);else{c=new M;O(c);BV(c,C(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BV(c,C(44));BI(c,i[h]);h=h+1|0;}BV(c,C(45));c=N(c);}e=new M;O(e);H(H(H(H(e,C(345)),d),C(346)),c);Bt(b,N(e));}
function SK(){B.call(this);this.ol=null;}
function AJO(a,b){Zo(a.ol,b);}
function SJ(){B.call(this);this.zn=null;}
function AI2(a,b){var c,d,e,f,g;c=b.data;d=Bx();e=CB(c[0]);f=new M;O(f);H(H(f,C(296)),e);Bt(d,N(f));g=CO(RX(b,1));b=Bx();d=CB(c[1]);c=AFg(g);e=new M;O(e);H(H(H(H(e,C(347)),d),C(348)),c);Bt(b,N(e));}
function SG(){B.call(this);this.At=null;}
function AU1(a,b){var c,d;c=Ff();b=CB(b);d=new M;O(d);H(H(d,C(349)),b);Bt(c,N(d));b=new D$;Y(b);K(b);}
function SF(){B.call(this);this.p5=null;}
function ANL(a,b){var c,d,e,f;c=a.p5;d=c.G.bW;e=new Xc;e.uy=c;f=R(B,1);f.data[0]=b;CM(d,e,C(350),f);}
function Wa(){B.call(this);this.lO=null;}
function AQ3(a,b){var c,d,e,f,g,h;c=a.lO;d=c.nY;if(d!==null){e=c.eo.u;f=e.a;g=b.i;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.nY=g;}b=b.i;f=b.a;c=c.fT;d=c.t;f=f-d.a|0;h=b.b-d.b|0;U(c.u,f,h);return 1;}
function AVD(a,b,c){var d;if(!c){d=b.i;b=a.lO;if(!E2(b.eo,d))d=null;b.nY=d;}return A0W;}
var C2=G(0);
var A09=null;var A0M=null;var A0$=null;var A0K=null;var A1a=null;var A0_=null;var A1c=null;var A1b=null;var A1e=null;var A1d=null;var A1f=null;function F7(){F7=Bq(C2);AVZ();}
function AVZ(){A09=C6(187);A0M=S(C(351));A0$=C6(55);A0K=C6(43);A1a=Dr(33,66,131);A0_=Dr(60,63,65);A1c=S(C(352));A1b=S(C(353));A1e=Ex(85,85,85,128);A1d=Ex(43,43,43,0);A1f=S(C(271));}
function Rm(){var a=this;B.call(a);a.oX=null;a.j1=null;}
function ANl(a,b,c){var d;if(!c){d=FP(a.j1.h8,b.i,a.oX,1);if(d!==null)return d;}return A0W;}
function AIJ(a,b,c){return 1;}
function ALE(a,b){var c;c=a.j1;return F3(c.h8,b.i,St(c.G.bW));}
function AAn(){B.call(this);this.qc=null;}
function AT2(a,b,c,d){var e,f;b=a.qc;e=(NH(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eW=Bc(Be(0,b.eW+W(e,f)|0),TQ(b));return 1;}
function Y2(){B.call(this);this.n7=null;}
function AKx(a,b){var c,d;a:{c=a.n7;switch(b.bj){case 67:QZ(c);d=1;break a;case 86:Tf(c);d=1;break a;default:}d=0;}return d;}
var Y1=G();
function AOf(a,b,c){return 0;}
function Y0(){B.call(this);this.ry=null;}
function AKG(a,b,c){var d,e;d=a.ry;c=d.d1+1|0;d.d1=c;d=IF(F(Jy));e=new M;O(e);H(H(V(e,c),C(354)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Yg(b,e);return 1;}
var YZ=G();
function AO1(a){return null;}
function Y3(){B.call(this);this.tI=null;}
function ATi(a){var b,c;b=a.tI;c=new ZX;c.oQ=b;return c;}
function TM(){B.call(this);this.AP=null;}
function AUW(a,b){return 0;}
function AAb(){B.call(this);this.zN=null;}
function AKh(a,b){return b.io&&b.bj==32?1:0;}
function AAd(){B.call(this);this.sf=null;}
function AIv(a,b){var c,d,e,f,g,h;b=b;c=a.sf;if(!DD(c.hZ)){d=c.hZ;b=b.i;e=R(CU,1);f=e.data;g=new CU;h=new O5;h.ot=c;JW(g,h,C(339));f[0]=g;GH(d,b,Fo(e),A0X);}return 1;}
function AAc(){B.call(this);this.vS=null;}
function ASq(a,b,c,d){return LW(a.vS,b,c,d);}
function AFV(){var a=this;B.call(a);a.jx=null;a.lv=null;a.f5=null;a.AG=null;}
function ARI(a){var b=new AFV();AST(b,a);return b;}
function AWT(a,b,c,d){var e=new AFV();AA5(e,a,b,c,d);return e;}
function AST(a,b){AA5(a,null,null,b,null);}
function AA5(a,b,c,d,e){a.jx=b;a.lv=c;a.f5=d;a.AG=e;}
function AKs(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BX(a.jx,c.jx)&&BX(a.lv,c.lv)&&BX(a.f5,c.f5)?1:0;}return 0;}
var Dc=G(0);
var A0a=null;var A1y=null;var A0c=null;var A0b=null;var A0e=null;var A0d=null;var A0g=null;var A0f=null;var A0i=null;var A0h=null;var A0j=null;function ALP(){ALP=Bq(Dc);ATB();}
function ATB(){A0a=C6(206);A1y=S(C(355));A0c=S(C(356));A0b=S(C(112));A0e=S(C(357));A0d=S(C(358));A0g=S(C(359));A0f=S(C(360));A0i=Ex(107,106,107,128);A0h=Ex(30,31,34,0);A0j=S(C(114));}
function Cl(){Cr.call(this);this.k8=null;}
var A1z=null;var A1A=null;var A1B=null;var A1C=null;var A1D=null;var A1E=null;var A1F=null;var A1G=null;var A1H=null;var A1I=null;var A1J=null;var A1K=null;var A1L=null;var A1M=null;var A1N=null;var A0k=null;function AFy(){AFy=Bq(Cl);AOy();}
function D1(a,b,c){var d=new Cl();TD(d,a,b,c);return d;}
function AXc(a,b,c,d){var e=new Cl();Zi(e,a,b,c,d);return e;}
function TD(a,b,c,d){AFy();De(a,b,c);a.k8=Ix(d,null);}
function Zi(a,b,c,d,e){AFy();De(a,b,c);a.k8=Ix(d,e);}
function AOy(){var b,c;b=new Cl;ALP();TD(b,C(361),0,A1y);A1z=b;A1A=D1(C(362),1,S(C(363)));A1B=D1(C(364),2,S(C(365)));A1C=D1(C(48),3,S(C(366)));A1D=D1(C(367),4,A1y);A1E=D1(C(368),5,S(C(369)));A1F=D1(C(370),6,S(C(371)));A1G=D1(C(49),7,S(C(372)));A1H=D1(C(373),8,S(C(374)));c=new Cl;F7();Zi(c,C(375),9,A0M,S(C(359)));A1I=c;A1J=AXc(C(376),10,A0M,S(C(115)));A1K=D1(C(377),11,S(C(378)));A1L=D1(C(379),12,S(C(380)));A1M=D1(C(381),13,A1y);b=D1(C(382),14,S(C(383)));A1N=b;A0k=I(Cl,[A1z,A1A,A1B,A1C,A1D,A1E,A1F,A1G,A1H,A1I,
A1J,A1K,A1L,A1M,b]);}
function JD(){var a=this;B.call(a);a.lo=null;a.pY=null;}
function Ix(a,b){var c=new JD();APA(c,a,b);return c;}
function APA(a,b,c){a.lo=b;a.pY=c;}
function IN(){var a=this;B.call(a);a.jD=null;a.iV=null;a.w$=null;a.AZ=null;a.lM=null;a.lD=null;a.lf=null;}
function A1O(a,b,c,d,e,f,g){var h=new IN();Mq(h,a,b,c,d,e,f,g);return h;}
function Mq(a,b,c,d,e,f,g,h){a.w$=b;a.AZ=c;a.iV=d;a.lM=e;a.jD=f;a.lD=g;a.lf=h;}
function AEk(){var a=this;B.call(a);a.nd=null;a.sz=0;}
function AAL(a,b){var c=new AEk();AS7(c,a,b);return c;}
function AS7(a,b,c){var d;d=new B$;a.nd=d;a.sz=b;d.bH=c;}
function QU(a,b){return Cb(a.sz,b);}
var DP=G(0);
var A0o=null;var A0p=null;var A0l=null;var A0m=null;var A0n=null;var A1s=null;var A1t=null;var A0q=null;var A0r=null;function AIl(){AIl=Bq(DP);AQ7();}
function AQ7(){A0o=S(C(358));A0p=S(C(384));A0l=S(C(117));A0m=S(C(371));A0n=S(C(355));A1s=S(C(358));A1t=S(C(385));A0q=S(C(386));A0r=Dr(43,45,48);}
var Qt=G(0);
var QP=G();
function AMh(a,b,c){var d,e;d=b;e=c;b=new M;O(b);V(H(V(H(b,C(387)),d),C(388)),e);CJ(N(b));return d+e|0;}
var Qu=G(0);
var QN=G();
function ANp(a,b,c){var d,e;d=b;e=c;b=new M;O(b);FH(H(FH(H(b,C(389)),d),C(388)),e);CJ(N(b));return d+e;}
var ACf=G();
var AA3=G(0);
function Kg(){var a=this;B.call(a);a.er=null;a.fv=null;a.fl=null;}
var AZU=0;function AE_(a){var b;b=a.fv;if(b!==null){AZU=AZU-1|0;a.er.dL.deleteTexture(b);a.fv=null;}}
function BT(a){return a.fl.a;}
function Da(a){return a.fl.b;}
function Vs(a,b,c,d){var e;e=a.fl;e.a=b;e.b=c;MZ(a);a.er.dL.texStorage2D(3553,1,d,b,c);e=a.er.dL;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function MZ(a){var b,c;b=a.er.dL;c=a.fv;b.bindTexture(3553,c);}
function CL(a,b){OA(a,b.m9,b.me,32856);RF(a,b,0,0);}
function OA(a,b,c,d){var e,f,g,h;a:{e=a.fl;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){MZ(a);break a;}e=a.er.dL;h=a.fv;e.deleteTexture(h);a.fv=a.er.dL.createTexture();Vs(a,b,c,d);break a;}}Vs(a,b,c,d);}}
function Iy(a,b,c,d){MZ(a);RF(a,b,c,d);}
function RF(a,b,c,d){var e;e=a.er.dL;b=b.iN;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function YR(){B.call(this);this.nK=null;}
var A1x=null;function Vc(){var a=new YR();AB3(a);return a;}
function AB3(a){a.nK=BJ();}
function D8(a,b,c){Qo(a,CR(b,c));}
function CR(b,c){return AIT(c,b);}
function F0(a,b,c){L5(a,b,c,null);}
function L5(a,b,c,d){Qo(a,AXy(null,b,c,d));}
function Qo(a,b){BH(a.nK,b);}
function IG(a){return Fo(Ih(a.nK,A1x));}
function AA8(){A1x=R(CU,0);}
var DU=G(0);
var A1m=null;var A1n=null;var A1j=null;var A1k=null;var A1l=null;var A1q=null;var A1r=null;var A1o=null;var A1p=null;function APv(){APv=Bq(DU);AQB();}
function AQB(){A1m=S(C(390));A1n=S(C(391));A1j=S(C(303));A1k=S(C(392));A1l=S(C(351));A1q=S(C(390));A1r=S(C(391));A1o=Ex(118,121,122,128);A1p=Dr(63,66,68);}
var Ha=G(0);
var P4=G();
function ASb(a,b,c,d){var e;b=Bx();d=CB(d);e=new M;O(e);H(H(V(H(e,C(393)),c),C(335)),d);Bt(b,N(e));}
var P5=G();
function TA(){B.call(this);this.iD=null;}
function AVO(a,b){return LO(a.iD,b);}
function ARt(a,b,c,d){return KI(a.iD,b,c,d);}
function AVy(a,b,c){return Nc(a.iD,b,c);}
function APn(a,b,c){return DD(a.iD);}
function WM(){B.call(this);this.t9=null;}
function AQl(a,b){var c;c=a.t9.jM;c.eq=FA(b,X0(c));}
var AHl=G();
function X5(){B.call(this);this.s2=null;}
function ANq(a,b){var c;c=a.s2.j1;c.eW=FA(b,TQ(c));}
function WZ(){B.call(this);this.Ai=null;}
function AM0(a,b){return 0;}
function Us(){B.call(this);this.vn=null;}
function AVu(a,b){return DE(a.vn,null);}
var ACi=G();
function I1(){var a=this;B.call(a);a.t5=null;a.pl=null;a.qq=null;a.vc=null;a.rS=null;a.i8=null;}
function A1P(a,b,c,d,e,f){var g=new I1();Nk(g,a,b,c,d,e,f);return g;}
function Nk(a,b,c,d,e,f,g){a.t5=b;a.pl=c;a.qq=d;a.vc=e;a.rS=f;a.i8=g;}
function Jw(){var a=this;B.call(a);a.lG=null;a.mV=null;a.u9=null;}
function A1Q(a,b,c){var d=new Jw();K9(d,a,b,c);return d;}
function K9(a,b,c,d){a.lG=b;a.mV=c;a.u9=d;}
function MX(a,b){return !b?a.mV:a.u9;}
function ABO(){var a=this;B.call(a);a.mn=null;a.tL=null;a.wi=null;}
function AG2(a,b,c){var d=new ABO();AUo(d,a,b,c);return d;}
function AUo(a,b,c,d){a.mn=b;a.tL=c;a.wi=d;}
function Cm(){Cr.call(this);this.m_=null;}
var A1R=null;var A1S=null;var A1T=null;var A1U=null;var A1V=null;var A1W=null;var A1X=null;var A1Y=null;var A1Z=null;var A10=null;var A11=null;var A12=null;var A13=null;var A14=null;var A15=null;var A1g=null;function ACJ(){ACJ=Bq(Cm);ANB();}
function D0(a,b,c){var d=new Cm();VA(d,a,b,c);return d;}
function AS_(a,b,c,d){var e=new Cm();AGk(e,a,b,c,d);return e;}
function VA(a,b,c,d){ACJ();De(a,b,c);a.m_=Ix(d,null);}
function AGk(a,b,c,d,e){ACJ();De(a,b,c);a.m_=Ix(d,e);}
function ANB(){var b;b=new Cm;F7();VA(b,C(361),0,A0M);A1R=b;A1S=D0(C(362),1,S(C(394)));A1T=D0(C(364),2,S(C(395)));A1U=D0(C(48),3,S(C(396)));A1V=D0(C(367),4,S(C(394)));A1W=D0(C(368),5,Dr(188,63,60));A1X=D0(C(370),6,S(C(397)));A1Y=D0(C(49),7,S(C(398)));A1Z=D0(C(373),8,S(C(399)));A10=AS_(C(375),9,A0M,Dr(52,65,52));A11=AS_(C(376),10,S(C(400)),S(C(401)));A12=D0(C(377),11,S(C(402)));A13=D0(C(379),12,S(C(403)));A14=D0(C(381),13,A0M);b=D0(C(382),14,S(C(383)));A15=b;A1g=I(Cm,[A1R,A1S,A1T,A1U,A1V,A1W,A1X,A1Y,A1Z,A10,
A11,A12,A13,A14,b]);}
var AGP=G();
function I$(b,c){var d,e,f;if(c<=0)return C(31);d=BW(c);e=d.data;e[0]=AFv(IV(b,52));f=1;while(f<c){e[f]=AFv(IV(b,62));f=f+1|0;}return Gj(d);}
function AFv(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var ADe=G();
function AHk(){var a=this;B.call(a);a.H6=null;a.Fu=null;a.GK=0;a.Gf=0;}
var ABT=G(0);
function ADv(b){var c;a:{switch(b){case 0:break;case 1:c=C(171);break a;case 2:c=C(234);break a;case 3:c=C(233);break a;case 4:c=C(232);break a;default:c=null;break a;}c=C(201);}return c;}
var CW=G();
var AEK=G(CW);
var AFt=G(CW);
var ACj=G(CW);
var ACD=G(CW);
var AFZ=G(CW);
function Y8(){B.call(this);this.qZ=null;}
function ANP(a){var b;b=a.qZ;Bt(Bx(),b);}
var GJ=G(Cr);
var A16=null;var A0L=null;var A17=null;function APo(){APo=Bq(GJ);ALF();}
function AV5(a,b){var c=new GJ();ABW(c,a,b);return c;}
function ABW(a,b,c){APo();De(a,b,c);}
function ALF(){var b;A16=AV5(C(404),0);b=AV5(C(405),1);A0L=b;A17=I(GJ,[A16,b]);}
var ABF=G();
function Cb(b,c){return C4(b*c);}
function IC(){var a=this;B.call(a);a.gx=0;a.mC=null;}
function W_(){var a=this;B.call(a);a.AT=null;a.wx=null;a.gr=null;}
function Gw(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.gr.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bc(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.ix:i.iy;k=!c?i.nA:i.nB;if(j<=k&&k<(j+k|0))return h;j=BF(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function MK(){var a=this;B.call(a);a.iy=0;a.nB=0;a.ix=0;a.nA=0;a.ln=0;}
var AC4=G();
function PM(){B.call(this);this.jC=null;}
function AWg(a,b){var c,d,e,f,g;c=a.jC;d=c.kW;if(d!==null){e=b.i;f=e.a-d.a|0;g=e.b-d.b|0;e=c.jN;e.a=EL(0,e.a+f|0,c.hl.a-c.is.a|0);c=a.jC;d=c.jN;d.b=EL(0,d.b+g|0,c.hl.b-c.is.b|0);}a.jC.kW=b.i;return 1;}
var ADb=G();
function Zn(){B.call(this);this.s7=null;}
function AV8(a,b){IM(a.s7,b);}
function XX(){B.call(this);this.jV=null;}
function AVG(a){return a.jV;}
function AFp(){var a=this;B.call(a);a.by=null;a.V=null;a.W=null;a.e6=null;}
function AA4(a){var b=new AFp();AQU(b,a);return b;}
function AQU(a,b){var c;a.W=AWo();a.by=b;c=new Xs;Mw(c);c.i1=new B$;c.fI=b;a.V=c;}
function Ir(a,b,c,d){var e,f,g,h;e=a.V;f=BX(e.hu,c)?0:1;g=BX(e.hz,b)?0:1;h=d===e.kh?0:1;if(f){e.hu=c;e.eF=null;Q6(e,0);}e.gt=!f&&!g&&!h?0:1;e.hz=b;e.kh=d;e.hA=0;Kc(a);}
function L4(a){var b;b=a.V;b.de=CK(b.de,null);a.W=CK(a.W,null);}
function K_(a,b){var c,d,e;c=a.W;d=c.H;e=c.r;b=CK(c,b);a.W=b;b.ka(d,e,a.by.b0);}
function FR(a,b,c){var d;d=a.W;d.ka(b,c,d.ei);Kc(a);}
function Kc(a){var b,c,d,e;b=a.V;c=a.W.r.a;b.r.a=c;d=b.de;if(d!==null&&c!=BT(d)&&!(c>=b.hA&&BT(b.de)>=b.hA))b.gt=1;b=a.V;b.ei=a.by.b0;if(Ys(b))c=0;else{b=a.V;W7(b);e=CF(b.fI,b.kh);Q6(b,Fq(b.eF)+(e*2|0)|0);c=b.r.b;}b=a.V.H;d=a.W.H;U(b,d.a,d.b-c|0);}
function MI(b,c){if(b<0)c=C(406);else if(b>0)c=C(407);return c;}
function AAo(a,b,c){var d;d=a.V.H.a;return (d-c|0)<=b&&b<d?1:0;}
function Ob(a,b,c){var d,e;d=a.V;e=d.H.a+d.r.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Q4(a,b,c){var d;d=a.V.H.b;return (d-c|0)<=b&&b<d?1:0;}
function O8(a,b,c){var d,e;d=a.W;e=d.H.b+d.r.b|0;return e<=b&&b<(e+c|0)?1:0;}
function YA(a,b,c){var d,e,f;d=a.V.H.b-c|0;e=a.W;f=(e.H.b+e.r.b|0)+c|0;return d<=b&&b<f?1:0;}
function Zd(a,b,c){var d,e;d=a.V.H.b+c|0;e=a.W;return ADE(b,d,(e.H.b+e.r.b|0)-c|0);}
function PI(a,b,c){var d,e,f;d=a.V;e=d.H.a;f=e-c|0;e=(e+d.r.a|0)+c|0;return f<=b&&b<e?1:0;}
function Pd(a,b,c){var d,e;d=a.V;e=d.H.a;return ADE(b,e+c|0,(e+d.r.a|0)-c|0);}
function ADE(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BF(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function I4(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bf;f=new Bf;g=b.a;h=b.b;b=a.W;i=b.H;j=i.a;k=i.b;b=b.r;l=b.a;m=b.b;b=new X2;b.u4=a;b.u6=e;b.u5=f;b.u0=c;b.uZ=g;b.u3=j;b.u1=l;b.ve=d;b.vd=h;b.vf=k;b.vL=m;return b;}
var AEG=G(0);
var Mr=G(0);
function R3(){B.call(this);this.ux=null;}
function AJW(a,b){return SV(a.ux,b);}
var Ym=G();
function AP7(a,b){AE_(b);}
var AFi=G();
function ACy(b,c,d,e,f,g){g.a=c.a;g.b=f;Bu(b,d.a,d.b,g,e);Bu(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bu(b,d.a,d.b+f|0,g,e);Bu(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AES(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bu(b,j,k,i,h);Bu(b,j,k,i,h);Bu(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bu(b,l,j,i,h);Bu(b,l,j,i,h);Bu(b,l+g|0,j+g|0,i,h);}
function Ru(){var a=this;B.call(a);a.bm=null;a.iF=null;a.fa=null;a.d3=0;a.R=0;a.dq=null;a.eb=null;a.g$=0;a.oG=0;}
function O0(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d3;i=W(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Be(i,e))a:{while(true){if(d<=e){j=d;break a;}EM(c);j=d+(-1)|0;b=C8(d);d=W(j,a.R)%a.fa.b|0;GD(a,c,b,a.g$,g);Iy(a.bm,c,0,d);if(!(j%a.d3|0))break;d=j;}}else{EM(b);k=a.d3-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GD(a,b,C8(j),W(a.R,k)+a.g$|0,g);k=k+(-1)|0;j=h;}CL(a.bm,b);j=Be(i,e);}return j;}k=a.d3;h=W(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bc(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EM(c);b=C8((d+f|0)+1|0);j=d+1|0;d
=W(d,a.R)%a.fa.b|0;GD(a,c,b,a.g$,g);Iy(a.bm,c,0,d);if(!(j%a.d3|0))break;d=j;}}else{EM(b);d=0;while(d<a.d3){h=h+1|0;GD(a,b,C8((h>e?h-f|0:h)+f|0),W(a.R,d)+a.g$|0,g);d=d+1|0;}CL(a.bm,b);j=Bc(i,e);}return j;}
function MW(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Gh(e,b,c,f)!==f.hi?0:1;}
function Gh(b,c,d,e){c=c.data;return d<c.length&&c[d]?IX(b.dR,b,c[d]):e.hi;}
function EX(a,b,c,d,e,f){if(a.oG)Ed(b,a.iF.a+d.a|0,c+d.b|0,a.dq,a.eb,a.bm,e,f);else Eb(b,a.iF.a+d.a|0,c+d.b|0,a.dq,a.eb,a.bm,e,f,0.0);}
function GD(a,b,c,d,e){BM(b,c,a.fa.a-20.0*e,d);}
function AGY(){var a=this;B.call(a);a.k7=null;a.lt=null;a.ew=null;a.ld=null;a.bu=null;a.mA=null;a.mI=null;a.fp=null;a.f6=null;a.ia=null;}
function AVK(a,b){var c=new AGY();AO$(c,a,b);return c;}
function AO$(a,b,c){var d,e,f;a.ew=b;a.ld=c;a.bu=AJC();b=new M;O(b);a.ia=b;a.fp=IK();b=new Ux;d=AGi(16);b.fX=0;b.dM=R(Id,d);b.qp=0.75;XF(b);a.f6=b;b=new XT;c=a.bu;e=a.ia;f=a.fp;b.dE=c;b.kV=e;b.sc=f;a.mA=b;b=new Xv;b.cP=c;b.l6=e;b.q3=f;a.mI=b;}
function OU(a){var b,c,d,e,f,g,h;a:{b=KN(a.ew.eH);c=b.hy;if(c.cT>0){d=c.cQ;e=0;b:while(true){f=b.hy.ca.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cF;if(Kp(a.fp,g))Cx(a.fp,g);else{h=a.fp;F$(h,g,Di(h.cT));}c=c.cO;if(d!=b.hy.cQ)break b;}e=e+1|0;}b=new Hw;Y(b);K(b);}}b=a.ew.gf;if(b!==null)S9(a,b);Br(a.bu,a.ew.eH.cT);b=Ua(KN(a.ew.eH));while(Ft(b)){c=QF(b);G2(a.bu,a.ia.M,J(c));BV(a.ia,c);}b=Ua(KN(a.ew.eH));while(Ft(b)){c=QF(b);c=Cx(a.ew.eH,c);Br(a.bu,c.j);c=B3(c);while(B5(c)){g=B7(c);g=Cx(a.fp,g);Br(a.bu,
g.bA);}}if(a.ew.gf===null)Br(a.bu,(-1));else{Br(a.bu,a.f6.fX);Ui(a,a.ew.gf);}if(a.ld===null)Br(a.bu,(-1));else{Br(a.bu,1);ABn(a.ld,a.bu,a.f6);}a.k7=RO(a.bu);a.lt=FK(N(a.ia));}
function S9(a,b){var c,d,e,f,g,h;if(X6(a.f6,b))M0(a.f6,b);else{c=a.f6;d=Di(c.fX);if(b===null){e=Sf(c);if(e===null){c.kq=c.kq+1|0;e=X$(c,null,0,0);f=c.fX+1|0;c.fX=f;if(f>c.mE)OP(c);}}else{g=JP(b);h=g&(c.dM.data.length-1|0);e=OZ(c,b,h,g);if(e===null){c.kq=c.kq+1|0;e=X$(c,b,h,g);f=c.fX+1|0;c.fX=f;if(f>c.mE)OP(c);}}e.cY=d;}b=b.cw;if(b===null)return;c=new Z_;c.q4=a;b.eY(c);}
function Ui(a,b){var c,d,e,f;c=(M0(a.f6,b)).bA;Br(a.bu,c);if(b instanceof LH)Br(a.bu,(-1));else if(!(b instanceof Ld))Br(a.bu,0);else Br(a.bu,1);d=a.mA;Br(d.dE,b.ee.cU());e=b.ee;f=new Nq;f.xf=d;e.eY(f);d=a.mI;Br(d.cP,b.eQ.cU());e=b.eQ;f=new W1;f.uV=d;e.eY(f);d=b.jh;Br(a.bu,d.cU());e=new Yf;e.vO=a;d.eY(e);d=b.gJ;Br(a.bu,d.cU());d=d.cb();while(d.cv()){e=d.b2();OD(a.mA,e.jk);Hp(a.mI,e.km);Br(a.bu,e.qA);}d=b.uR;if(d===null)Br(a.bu,(-1));else Br(a.bu,(Cx(a.fp,d)).bA);b=b.cw;Br(a.bu,b.cU());d=new Qs;d.os=a;b.eY(d);}
function UY(){B.call(this);this.py=null;}
function AVP(a,b){var c,d,e,f,g,h;c=b.data;b=a.py;d=CO(c[0]);e=EI(c[1]);f=(CO(c[2])).data[0];if(b.e.f.b6==f){g=null;h=null;if(c.length>=5){g=CO(c[3]);h=EI(c[4]);}AAS(b.e.f,d,e,g,h);E1(b.e.f.c9);E1(b.e.f.dh);Rb(b.e.f);HY(b.e.f);K8(b);}}
var AA1=G();
function Fw(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function ABN(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function AGa(){var a=this;B.call(a);a.bk=0;a.bs=0;}
function Dv(a,b){var c=new AGa();AOq(c,a,b);return c;}
function AOq(a,b,c){a.bk=b;a.bs=c;}
function AIg(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.bk==c.bk&&a.bs==c.bs?1:0;}return 0;}
function AR5(a){var b,c,d,e;b=R(B,2).data;b[0]=Di(a.bk);b[1]=Di(a.bs);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bA)|0;d=d+1|0;}return c;}
function ARy(a,b){var c;b=b;c=BF(a.bk,b.bk);if(!c)c=BF(a.bs,b.bs);return c;}
function Tm(){B.call(this);this.t6=null;}
function ARX(a,b){var c;c=a.t6;ZY(c,E0(c,b.i));Mh(c.q,c.v,c.z);Hs(c);}
var Uf=G(0);
var A0W=null;function AE8(){A0W=new So;}
function W6(){var a=this;B.call(a);a.rU=null;a.rV=null;}
function AJX(a,b){var c,d,e;c=a.rU;d=a.rV;c=c.fe.d$.u;e=c.a;b=b.i;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Ck(d,b);}
var Fc=G(0);
function O1(){var a=this;B.call(a);a.iC=0;a.nE=0;a.jE=0;a.gO=0;a.hx=null;}
function B5(a){return a.iC>=a.jE?0:1;}
function B7(a){var b,c;QV(a);b=a.iC;a.gO=b;c=a.hx;a.iC=b+1|0;return c.j7(b);}
function SU(a){var b,c,d;if(a.gO<0){b=new CS;Y(b);K(b);}QV(a);a.hx.nH(a.gO);a.nE=a.hx.cC;c=a.gO;d=a.iC;if(c<d)a.iC=d-1|0;a.jE=a.jE-1|0;a.gO=(-1);}
function QV(a){var b;if(a.nE>=a.hx.cC)return;b=new Hw;Y(b);K(b);}
var Gd=G(I7);
var Zr=G(E3);
function AF6(){var a=this;B.call(a);a.hL=null;a.mF=0;a.fB=0;}
function AJC(){var a=new AF6();AVJ(a);return a;}
function AVJ(a){a.mF=0;a.hL=BL(16);a.fB=0;}
function G2(a,b,c){Br(a,b);Br(a,c);}
function Br(a,b){var c,d;c=a.hL;d=c.data.length;if(d==a.fB)a.hL=JE(c,d*2|0);c=a.hL.data;d=a.fB;a.fB=d+1|0;c[d]=b;}
function RO(a){var b,c,d,e,f;b=a.mF;if(b&&a.fB!=b){c=Ff();b=a.mF;d=a.fB;e=new M;O(e);H(V(H(V(H(e,C(408)),b),C(409)),d),C(410));Bt(c,N(e));}f=a.hL;b=f.data.length;d=a.fB;if(b!=d)f=JE(f,d);return f;}
function Ux(){var a=this;D4.call(a);a.fX=0;a.dM=null;a.kq=0;a.qp=0.0;a.mE=0;}
function AGi(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function XF(a){a.mE=a.dM.data.length*a.qp|0;}
function X6(a,b){return Z2(a,b)===null?0:1;}
function M0(a,b){var c;c=Z2(a,b);if(c===null)return null;return c.cY;}
function Z2(a,b){var c,d;if(b===null)c=Sf(a);else{d=JP(b);c=OZ(a,b,d&(a.dM.data.length-1|0),d);}return c;}
function OZ(a,b,c,d){var e;e=a.dM.data[c];while(e!==null&&!(e.mB==d&&(b!==e.cF?0:1))){e=e.hE;}return e;}
function Sf(a){var b;b=a.dM.data[0];while(b!==null&&b.cF!==null){b=b.hE;}return b;}
function X$(a,b,c,d){var e,f;e=new Id;AAm(e,b,null);e.mB=d;f=a.dM.data;e.hE=f[c];f[c]=e;return e;}
function OP(a){var b,c,d,e,f,g,h,i;b=a.dM.data.length;b=AGi(!b?1:b<<1);c=R(Id,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dM.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.mB&f;i=h.hE;h.hE=d[b];d[b]=h;h=i;}e=e+1|0;}a.dM=c;XF(a);}
function XT(){var a=this;B.call(a);a.dE=null;a.kV=null;a.sc=null;}
function OD(a,b){var c;if(!(b instanceof M2)){Br(a.dE,3);Ze(a,b);Br(a.dE,b.jy);}else{c=b;Br(a.dE,5);Ze(a,c);Br(a.dE,c.ob);b=c.kH;Br(a.dE,b.j);c=new Oq;c.pt=a;Et(b,c);}}
function Ze(a,b){var c;c=b.ef.h2;G2(a.dE,a.kV.M,J(c));Br(a.dE,b.ef.ds);NB(a,b.kt);BV(a.kV,c);}
function NB(a,b){if(b===null)Br(a.dE,(-1));else Br(a.dE,(Cx(a.sc,b)).bA);}
function Xv(){var a=this;B.call(a);a.cP=null;a.l6=null;a.q3=null;}
function Hp(a,b){var c,d,e;if(b instanceof Il){c=b;Br(a.cP,9);Rz(a,c.nh);}else if(b instanceof Jk){d=b;Br(a.cP,3);Sj(a,d);Br(a.cP,d.oE);Rz(a,d.hk);}else if(b instanceof JK){e=b;Br(a.cP,4);Hp(a,e.ir);Hp(a,e.hm);}else if(b===null)Br(a.cP,(-1));else{Br(a.cP,5);Sj(a,b);Br(a.cP,b.tO);}}
function Sj(a,b){var c;c=b.fm.h2;G2(a.cP,a.l6.M,J(c));Br(a.cP,b.fm.ds);b=b.fW;if(b===null)Br(a.cP,(-1));else Br(a.cP,(Cx(a.q3,b)).bA);BV(a.l6,c);}
function Rz(a,b){var c;Br(a.cP,b.j);c=new AAr;c.pz=a;Et(b,c);}
function Xi(){B.call(this);this.p4=null;}
function AUE(a,b){var c,d;c=a.p4;d=c.d1+1|0;c.d1=d;c=new M;O(c);H(H(V(c,d),C(411)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Z8(){B.call(this);this.ql=null;}
function ASC(a){var b,c;b=a.ql;c=new M;O(c);H(H(H(c,C(412)),b),C(413));$rt_globals.console.info($rt_ustr(N(c)));}
var ZB=G(D6);
var A18=null;function AE$(){A18=F($rt_floatcls());}
var FW=G();
var A19=null;var A1$=null;var AZu=null;var AZt=null;var AZs=null;function ADX(){A19=Eq([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A1$=ABX([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);AZu=ABX([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);AZt=new V0;AZs=new Xd;}
var If=G();
var A1_=0;var A2a=null;var A2b=null;function AEz(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.pA=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.lT=0;c.lA=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Ic(C0(Bp(d),Bp(8388608)),Fe)){d=d<<1;f=f+(-1)|0;}}g=AEJ(A2b,f);if(g<0)g= -g|0;h=A2b.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=H_(d,A2a.data[e],i);if(j<A1_){while($rt_ucmp(j,A1_)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A2b.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=H_(d,
A2a.data[e],i);}e=d<<1;d=e+1|0;h=A2a.data;f=g+1|0;k=h[f];l=i-1|0;m=H_(d,k,l);n=H_(e-1|0,A2a.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?W($rt_udiv(j,o),o):q<0?W($rt_udiv(j,k),k)+k|0:W($rt_udiv((j+(k/2|0)|0),k),k);if(Du(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.lT=d;c.lA=g-50|0;}
function H_(b,c,d){return GF(F9(B_(C0(Bp(b),D(4294967295, 0)),C0(Bp(c),D(4294967295, 0))),32-d|0));}
function ACV(){A1_=$rt_udiv((-1),10);A2a=Eq([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A2b=Eq([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Xd(){var a=this;B.call(a);a.lT=0;a.lA=0;a.pA=0;}
function M3(){var a=this;B.call(a);a.y0=null;a.n$=0.0;a.zo=0.0;a.fA=null;a.hI=null;a.na=null;a.fK=0;}
function AGv(a,b){var c;if(b!==null){a.hI=b;return a;}c=new BE;Bk(c,C(414));K(c);}
function AEO(a,b){var c;if(b!==null){a.na=b;return a;}c=new BE;Bk(c,C(414));K(c);}
function R2(a,b,c,d){var e,f,g,$$je;e=a.fK;if(!(e==2&&!d)&&e!=3){a.fK=d?2:1;while(true){try{f=AGx(a,b,c);}catch($$e){$$je=Ew($$e);if($$je instanceof Bv){g=$$je;K(AKI(g));}else{throw $$e;}}if(HC(f))return f;if(IR(f)){if(d&&DW(b)){g=a.hI;HF();if(g===AZ2)return Eh(Ca(b));if(Ca(c)<=J(a.fA))return AZ5;EY(b,b.Z+Ca(b)|0);if(a.hI===AZ3)KY(c,a.fA);}return f;}if(SB(f)){g=a.hI;HF();if(g===AZ2)return f;if(g===AZ3){if(Ca(c)<J(a.fA))return AZ5;KY(c,a.fA);}EY(b,b.Z+K1(f)|0);}else if(M1(f)){g=a.na;HF();if(g===AZ2)break;if(g
===AZ3){if(Ca(c)<J(a.fA))return AZ5;KY(c,a.fA);}EY(b,b.Z+K1(f)|0);}}return f;}b=new CS;Y(b);K(b);}
function AB2(a,b){var c,d,e,f;c=a.fK;if(c&&c!=3){b=new CS;Y(b);K(b);}if(!Ca(b))return AG$(0);if(a.fK)a.fK=0;d=AG$(Be(8,Ca(b)*a.n$|0));while(true){e=R2(a,b,d,0);if(IR(e))break;if(HC(e))d=Uq(a,d);if(!Lz(e))continue;Xb(e);}b=R2(a,b,d,1);if(Lz(b))Xb(b);while(true){f=a.fK;if(f!=3&&f!=2)break;a.fK=3;if(IR(AZ6)){d.dO=d.Z;d.Z=0;d.id=(-1);return d;}d=Uq(a,d);}b=new CS;Y(b);K(b);}
function Uq(a,b){var c,d,e;c=b.h5;d=Kk(c,Be(8,c.data.length*2|0));e=AD7(d,0,d.data.length);EY(e,b.Z);return e;}
var ADA=G(CW);
function NJ(){B.call(this);this.st=null;}
function AOA(a,b){Dw(a.st,b);}
function RZ(){B.call(this);this.xz=null;}
function AI8(a,b){var c,d;c=a.xz;d=c.d1+1|0;c.d1=d;c=b.ik;b=new M;O(b);H(H(V(b,d),C(415)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var So=G();
function AP1(a,b){}
function Fg(){var a=this;B.call(a);a.H=null;a.r=null;a.ei=0.0;}
function AWo(){var a=new Fg();Mw(a);return a;}
function Mw(a){a.H=new Bf;a.r=new Bf;}
function AR8(a){}
function AQc(a){return B6(0,0);}
function Ta(a,b,c,d){var e;if(!LY(a.H,b)){a.lx(b);Ck(a.H,b);}if(!LY(a.r,c)){a.lp(c);Ck(a.r,c);}e=a.ei;if(e!==d){a.ei=d;a.rG(e,d);}}
function DM(a,b){return Fw(b,a.H,a.r);}
function AGC(a,b){var c,d,e,f;c=a.H;d=c.a;e=c.b;f=a.r;AXl();Bu(b,d,e,f,A2c);}
function Xo(a,b){var c;c=a.H;Mp(b,c.a,c.b,a.r);}
function AJV(a,b){return 0;}
function AON(a,b){}
function AU3(a,b){}
function ASg(a,b,c){}
function AVg(a){}
function AM_(a,b,c,d){return 0;}
function AJK(a,b,c){return null;}
function APH(a,b,c){return 0;}
function AUF(a,b){return 0;}
function AR4(a,b,c,d){return 0;}
function Gn(){var a=this;Fg.call(a);a.cZ=null;a.bB=null;a.gd=null;}
function A2d(){var a=new Gn();WB(a);return a;}
function WB(a){Mw(a);a.cZ=new Bf;a.bB=new Bf;}
function AMt(a,b){a.gd=b;}
function ADz(a){var b;b=a.bB;b.a=J9(a,b.a);b=a.bB;b.b=MN(a,b.b);}
function W8(a,b){a.bB.a=J9(a,b);}
function AAD(a,b){a.bB.b=MN(a,b);}
function AG_(a,b,c){a.bB.a=J9(a,b);a.bB.b=MN(a,c);}
function MN(a,b){return Be(0,Bc(b,a.cZ.b-a.r.b|0));}
function J9(a,b){return Be(0,Bc(b,a.cZ.a-a.r.a|0));}
function Si(){var a=this;Gn.call(a);a.cd=null;a.dT=null;a.hf=null;a.vt=null;a.ec=null;a.b_=null;a.el=null;a.dC=null;a.dr=0;a.e$=0;a.xD=null;a.dN=0;a.ez=0;a.gp=0;a.fE=0;a.fq=0;a.cH=0;a.em=null;a.jn=null;a.r_=null;a.hR=null;}
function AYx(a,b){var c=new Si();AGq(c,a,b);return c;}
function AGq(a,b,c){WB(a);a.dT=T9();a.hf=new Bf;a.b_=A2e;a.el=R(I3,0);a.dN=0;a.ez=0;a.gp=0;a.fE=0;a.fq=0;a.em=ABr(0);a.hR=IK();a.cd=b;a.jn=c;a.xD=c;QW(a);}
function QW(a){a.dr=Cb(2.0,a.cd.b0);}
function ZA(a){return a.b_.data.length?0:1;}
function OY(a,b){VO(a);a.b_=b;}
function VO(a){U(a.hf,0,0);}
function AAz(a,b,c){a.r_=b;a.vt=c;a.ec=null;a.em=null;a.e$=0;VO(a);}
function AUC(a){a.dC=CK(a.dC,null);U(a.hf,0,0);E1(a.hR);a.em=null;a.b_=A2e;a.el=null;a.dN=0;a.ez=0;a.gp=0;Vf(a.dT);a.jn=null;}
function AK5(a,b,c){Rd(a);QW(a);a.ec=null;a.em=null;a.e$=0;}
function AIn(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=Js(a.cd);if(ZA(a))return;KO(a);Cu(c,a.ec);d=Ee(a);e=AAX(c,a.e$);f=Bc(Jh(a.r.b,d),a.b_.data.length)+30|0;g=a.r_.w$;h=a.el;if(h.data.length<f){a.el=APN(f,h,a.fE,a.fq,a.b_,a.em,e,a.hR);Ck(a.hf,J6(a.em));Rx(a,a.cd.cN);}a.fE=Bc((a.bB.b+a.dr|0)/(Ee(a)+a.dr|0)|0,a.b_.data.length-1|0);a.fq=Bc((((a.bB.b+a.dT.t.b|0)-1|0)+a.dr|0)/(Ee(a)+a.dr|0)|0,a.b_.data.length-1|0);if(!a.el.data.length)return;i=0;j=a.fE;while(j<=a.fq){k=Qq(a,j);if
(!(k!==null&&k.gk===a.b_.data[j])){l=a.el.data;h=a.b_;k=a.em;m=a.hR;i=j%l.length|0;if(l[i]!==null)XR(k,l[i],m);l[i]=J7(h.data[j],k,e,m);i=1;}j=j+1|0;}if(i){Ck(a.hf,J6(a.em));Rx(a,a.cd.cN);}Xo(a,b);n=g.vc;k=a.H;Bu(b,k.a,k.b,a.r,n);k=a.dT.u;o=k.a;p=k.b;q=CF(a.cd,2.0);k=a.cd.dG;r=a.fE;j=o+q|0;while(r<=a.fq){m=Qq(a,r);s=W(r,Ee(a));i=r+1|0;t=s+W(i,a.dr)|0;s=j+a.dN|0;u=s+a.ez|0;v=a.cH!=r?0:1;w=!v?n:g.rS;x=!v?g.t5:g.i8;y=!v?g.pl:g.i8;z=!v?g.qq:g.i8;ba=(p+t|0)-a.bB.b|0;if(a.cd.c0){Ed(b,j,ba,m.gB,m.ms,a.dC,x,w);Ed(b,
s,ba,m.ha,m.hw,a.dC,y,w);Ed(b,u,ba,m.gD,m.ii,a.dC,z,w);}else{Eb(b,j,ba,m.gB,m.ms,a.dC,x,w,0.0);Eb(b,s,ba,m.ha,m.hw,a.dC,y,w,0.0);Eb(b,u,ba,m.gD,m.ii,a.dC,z,w,0.0);}s=m.gB.a;bb=j+s|0;U(k,Be(0,a.dN-s|0),m.gB.b);Bu(b,bb,ba,k,w);s=j+a.dN|0;r=m.ha.a;bc=s+r|0;U(k,Be(0,a.ez-r|0),m.ha.b);Bu(b,bc,ba,k,w);s=m.gD.a;bd=u+s|0;U(k,Be(0,(((a.dT.t.a-s|0)-a.ez|0)-a.dN|0)-q|0),m.gD.b);Bu(b,bd,ba,k,w);be=(o+a.r.a|0)-q|0;U(k,q,Ee(a)+a.dr|0);Bu(b,be,ba,k,n);r=i;}Hr(b);}
function Rx(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.hf;c=Ef(b,c.a+150|0,c.b,a.cd.c0);Cu(c,a.ec);d=a.ec;e=d.dt;f=e-(e+d.eU)/16.0;g=a.el.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gk.jz;k=d.hw;BM(c,j,k.bp+a.e$,f+k.bG);j=d.gk.jO;d=d.ii;BM(c,j,d.bp+a.e$,f+d.bG);}i=i+1|0;}a:{d=a.hR;if(d.cT>0){h=d.cQ;i=0;b:while(true){g=d.ca.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cF;l=j.cY;k=k;l=l.kr;BM(c,k,l.bp+a.e$,f+l.bG);j=j.cO;if(h!=d.cQ)break b;}i=i+1|0;}b=new Hw;Y(b);K(b);}}if(a.dC===null)a.dC=CZ(b);CL(a.dC,
c);EK(c);}
function Qq(a,b){var c;c=a.el.data;return c[b%c.length|0];}
function ARv(a,b){Ck(a.dT.t,b);}
function ATk(a,b){Ck(a.dT.u,b);}
function ACe(a){var b,c;KO(a);b=Ee(a);c=a.b_.data.length;b=W(b,c)+W(a.dr,c+1|0)|0;U(a.cZ,a.r.a,b);}
function Rd(a){var b,c,d,e,f,g,h,i,j;b=Js(a.cd);if(ZA(a))return;KO(a);Cu(b,a.ec);c=AAX(b,a.e$);d=a.b_.data;e=d.length;f=0;while(f<e){g=d[f];h=Lf(c,g.gy);i=Lf(c,g.jz);j=Lf(c,g.jO);a.dN=Be(a.dN,h);a.ez=Be(a.ez,i);a.gp=Be(a.gp,j);f=f+1|0;}}
function AOF(a,b){var c;c=T8(a,b.i);if(c>=0)a.cH=c;return E2(a.dT,a.H)&&Gk(a.cd.cM)?1:0;}
function ALV(a,b,c){if(!E2(a.dT,b.i)&&!La(a.dT)){b=a.xD;if(b!==null)b.o();}return null;}
function ARP(a,b,c,d){var e;if(d==1){e=T8(a,b.i);if(e>=0)XM(a,a.b_.data[e]);}return 1;}
function XM(a,b){a.jn.o();b.tP.o();}
function T8(a,b){var c,d,e;if(!a.el.data.length)return (-1);c=Ee(a);d=(b.b-a.H.b|0)+a.bB.b|0;e=a.dr;e=(d+e|0)/(c+e|0)|0;if(e<a.b_.data.length)return e;return (-1);}
function Ee(a){return Fq(a.ec);}
function KO(a){var b;if(a.ec===null){b=HH(a.cd,a.vt);a.ec=b;a.em=ABr(Fq(b));a.e$=C4(a.ec.no);}}
function ATG(a,b){var c,d,e;a:{switch(b.bj){case 13:XM(a,a.b_.data[a.cH]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cH=a.fE;b=a.gd;c=a.bB;JB(b,c.a,c.b-(a.r.b/2|0)|0);return 0;case 34:a.cH=a.fq;b=a.gd;c=a.bB;JB(b,c.a,c.b+(a.r.b/2|0)|0);return 0;case 35:case 39:a.cH=a.b_.data.length-1|0;break a;case 36:case 37:a.cH=0;break a;case 38:d=a.cH;e=a.b_.data.length;a.cH=((d+e
|0)-1|0)%e|0;break a;case 40:a.cH=(a.cH+1|0)%a.b_.data.length|0;break a;default:break a;}a.jn.o();return 0;}e=a.cH;if(e<=a.fE)JB(a.gd,a.bB.a,W(e,Ee(a))+W(a.cH,a.dr)|0);else if(e>=a.fq)JB(a.gd,a.bB.a,(W(e+1|0,Ee(a))+W(a.cH+2|0,a.dr)|0)-a.r.b|0);return 0;}
var Ow=G();
function AMm(a){}
function ACI(){var a=this;Fg.call(a);a.nP=null;a.qn=null;a.vg=null;a.bC=null;a.dc=null;a.di=null;a.wh=0.0;a.w_=null;a.w6=null;}
function AAK(a,b){var c=new ACI();AHW(c,a,b);return c;}
function AHW(a,b,c){var d;c=c.cM;Mw(a);d=new PP;d.r8=a;a.qn=d;d=new PO;d.tg=a;a.vg=d;a.wh=10.0;a.bC=b;a.nP=c;b.gd=a;}
function ATf(a){var b;b=a.bC;b.gd=null;a.bC=CK(b,null);}
function Nh(a,b,c){var d;a.w_=b;a.w6=c;d=a.dc;if(d!==null)Ho(d,b,c);d=a.di;if(d!==null)Ho(d,b,c);}
function AMy(a,b,c,d){Ta(a,b,c,d);Ta(a.bC,b,c,d);if(d!==0.0){a.bC.xm();ADz(a.bC);if(X4(a))I_(a);else a.di=null;if(PU(a))HX(a);else a.dc=null;}}
function JB(a,b,c){AG_(a.bC,b,c);if(X4(a))I_(a);if(PU(a))HX(a);}
function PU(a){var b;b=a.r.b;return b>0&&a.bC.cZ.b>b?1:0;}
function X4(a){var b;b=a.r.a;return b>0&&a.bC.cZ.a>b?1:0;}
function I_(a){var b,c,d,e,f,g;b=a.di;if(b===null)b=Ja();a.di=b;SA(a,b);c=a.di;b=a.bC;d=b.bB.a;e=a.H;f=e.a;g=a.r;Sv(c,d,f,g.a,b.cZ.a,e.b+g.b|0,M9(a));}
function HX(a){var b,c,d,e,f,g;b=a.dc;if(b===null)b=Ja();a.dc=b;SA(a,b);c=a.dc;b=a.bC;d=b.bB.b;e=a.H;f=e.b;g=a.r;Jx(c,d,f,g.b,b.cZ.b,e.a+g.a|0,M9(a));}
function M9(a){return Cb(a.wh,a.ei);}
function SA(a,b){var c,d;c=a.w_;d=a.w6;if(!(c!==null&&d!==null?(Lm(b.iY,c)&&Lm(b.iZ,d)?1:0):0))Ho(b,c,d);}
function ASn(a,b){var c;a.bC.fF(b);if(!(a.dc===null&&a.di===null)){Cc(b,1);c=a.dc;if(c!==null)GS(c,b);c=a.di;if(c!==null)GS(c,b);c=a.dc;if(c!==null)G0(c,b);c=a.di;if(c!==null)G0(c,b);Cc(b,0);}}
function Wk(a,b){var c,d;a:{b:{c=a.dc;if(!(c!==null&&Ij(c,b))){c=a.di;if(c===null)break b;if(!Ij(c,b))break b;}d=1;break a;}d=0;}return d;}
function ATS(a,b,c,d){return !Wk(a,b.i)&&!a.bC.cp(b,c,d)?0:1;}
function ATj(a,b,c){var d,e;d=a.dc;if(d!==null){e=FP(d,b.i,a.qn,1);if(e!==null)return e;}d=a.di;if(d!==null){e=FP(d,b.i,a.vg,0);if(e!==null)return e;}return a.bC.ce(b,c);}
function AP_(a,b,c){return Wk(a,b.i)?1:0;}
function APO(a,b){var c,d,e;c=a.dc;d=c!==null&&F3(c,b.i,a.nP)?1:0;c=a.di;e=c!==null&&F3(c,b.i,a.nP)?1:0;return !d&&!e&&!a.bC.bJ(b)?0:1;}
function ALK(a,b,c,d){var e,f;if(!DM(a,b.i))return 0;e=Cb(d*0.25,a.ei);f=Cb(c*0.25,a.ei);if(b.bI){f=f+e|0;e=0;}if(a.dc!==null&&e){b=a.bC;AAD(b,b.bB.b+e|0);HX(a);}if(a.di!==null&&f){b=a.bC;W8(b,b.bB.a+f|0);I_(a);}return 1;}
function AVn(a){var b,c;b=M9(a);c=a.bC.j$();c.a=Be(c.a,b);c.b=Be(c.b,b);return c;}
function Qg(){var a=this;Gn.call(a);a.kx=null;a.mR=null;a.qX=null;a.qU=0.0;}
function AKA(a){var b,c;b=a.cZ;c=a.r;U(b,c.a*3|0,c.b*5|0);}
function AVq(a){var b;b=Cb(20.0,a.ei);return B6(b,b);}
function ARD(a,b){var c,d,e,f;c=a.qX;d=c.rt;e=c.ru;c=c.rs;b=CB(b);f=new M;O(f);H(H(H(f,c),C(36)),b);Ir(e,N(f),d.qk,3.0);}
function AVR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;AGC(a,b);Xo(a,b);c=Cb(30.0,a.ei);d=a.bB;e=d.a;f=W(e/c|0,c);g=d.b;h=W(g/c|0,c);d=a.r;i=W(((e+d.a|0)-1|0)/c|0,c);e=W(((g+d.b|0)-1|0)/c|0,c);d=a.mR;d.b=c;d.a=c;a.kx.bH=1.0;while(h<=e){g=a.H.b-a.bB.b|0;j=f;while(j<=i){k=a.H.a-a.bB.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AGl(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;Y7(n,0.75,a.qU,a.kx);Bu(b,k+j|0,g+h|0,a.mR,a.kx);j=j+c|0;}h=h+c|0;}Hr(b);}
function AIN(a,b){}
function YN(){var a=this;B.call(a);a.rt=null;a.ru=null;a.rs=null;}
var TR=G(D6);
var A2f=null;function Dd(b,c){return Long_udiv(b, c);}
function ABd(b,c){return Long_urem(b, c);}
function Du(b,c){return Long_ucompare(b, c);}
function ADn(){A2f=F($rt_longcls());}
function QA(){B.call(this);this.oP=null;}
function ATs(a){R7(a.oP);}
function O5(){B.call(this);this.ot=null;}
function AJ8(a){Wl(a.ot);}
function VQ(){B.call(this);this.nw=null;}
var A2e=null;function ANz(){var a=new VQ();AB7(a);return a;}
function AB7(a){a.nw=BJ();}
function Ns(a,b,c,d,e){var f;f=new Lc;f.tP=e;f.jz=c;f.jO=d;f.gy=b;BH(a.nw,f);}
function YM(a){return Ih(a.nw,A2e);}
function UA(b){var c,d;if(b===null)b=C(31);else{c=b.f5;if(c===null)b=C(31);else{d=RB(c,C(416),J(c));b=d==(-1)?b.f5:Do(b.f5,d+1|0);}}return b;}
function AGs(){A2e=R(Lc,0);}
function I3(){var a=this;B.call(a);a.ms=null;a.hw=null;a.ii=null;a.gB=null;a.ha=null;a.gD=null;a.gk=null;}
function APN(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=R(I3,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=J7(f.data[d],g,h,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.gk!==n){XR(g,q,i);m[o]=J7(n,g,h,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=J7(n,g,h,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){XR(g,r,i);j[d]=null;}d=d+1|0;}return k;}
function J7(b,c,d,e){var f,g,h;f=new I3;f.gB=new Bf;f.ha=new Bf;f.gD=new Bf;f.gk=b;g=Cx(e,b.gy);if(g!==null)g.ih=g.ih+1|0;else{g=new XZ;h=JI(c,b.gy,d);g.ih=1;g.kr=h;F$(e,b.gy,g);}e=g.kr;f.ms=e;U(f.gB,e.bl|0,e.bH|0);e=JI(c,b.jz,d);f.hw=e;U(f.ha,e.bl|0,e.bH|0);b=JI(c,b.jO,d);f.ii=b;U(f.gD,b.bl|0,b.bH|0);return f;}
function XR(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gk.gy;f=Cx(d,e);g=f.ih-1|0;f.ih=g;if(!g){a:{h=0;i=null;if(e===null){j=d.ca.data[0];while(j!==null){if(j.cF===null)break a;e=j.cO;i=j;j=e;}}else{k=IT(e);l=d.ca.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.j6==k&&ABj(e,j.cF))){m=j.cO;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cO=j.cO;else d.ca.data[h]=j.cO;d.cQ=d.cQ+1|0;d.cT=d.cT-1|0;}IP(b,f.kr);}IP(b,c.hw);IP(b,c.ii);}
function Xs(){var a=this;Fg.call(a);a.fI=null;a.hz=null;a.hu=null;a.eF=null;a.kh=0.0;a.gt=0;a.hA=0;a.de=null;a.i1=null;}
function Lo(a){var b;b=a.r;return b.a&&b.b?0:1;}
function Ys(a){var b,c;a:{if(a.hu!==null){b=a.hz;if(b!==null&&!FJ(b)){c=0;break a;}}c=1;}return c;}
function Q6(a,b){a.r.b=b;}
function Rh(a,b,c,d,e){var f,g;f=a.fI.dG;U(f,d,a.r.b);g=a.H;Bu(b,g.a+c|0,g.b,f,e);}
function W7(a){if(a.eF===null)a.eF=HH(a.fI,a.hu);}
function V0(){var a=this;B.call(a);a.mx=Fe;a.lj=0;a.pj=0;}
function UE(){var a=this;B.call(a);a.px=null;a.pw=null;a.pv=null;}
function AJk(a){var b,c,d,e,f;b=a.px;c=a.pw;d=a.pv;e=Bx();f=new M;O(f);b=H(f,b);BI(b,9);b=H(b,c);BI(b,9);H(b,d);Bt(e,N(f));}
function PP(){B.call(this);this.r8=null;}
function AIx(a,b){var c,d;c=a.r8;d=FA(b,c.bC.cZ.b-c.r.b|0);AAD(c.bC,d);HX(c);}
function PO(){B.call(this);this.tg=null;}
function AIW(a,b){var c,d;c=a.tg;d=FA(b,c.bC.cZ.a-c.r.a|0);W8(c.bC,d);I_(c);}
function Lc(){var a=this;B.call(a);a.tP=null;a.jz=null;a.jO=null;a.gy=null;}
var CS=G(Bv);
var AE3=G(E3);
function AKI(a){var b=new AE3();APi(b,a);return b;}
function APi(a,b){a.ke=1;a.kP=1;a.mi=b;}
function V3(){B.call(this);this.wn=null;}
function AMi(a,b){IM(a.wn,b);}
function Sc(){var a=this;B.call(a);a.zP=null;a.zO=null;a.zQ=null;}
function TZ(){var a=this;B.call(a);a.wR=null;a.wS=null;a.wQ=0;}
function ALn(a,b){var c,d,e;c=a.wR;d=a.wS;e=a.wQ;d.g(Yz(c,(b.i.a+e|0)-c.ep.a|0));}
function TY(){var a=this;B.call(a);a.qy=null;a.qw=null;a.qx=0;}
function AUB(a,b){var c,d,e;c=a.qy;d=a.qw;e=a.qx;d.g(Rl(c,(b.i.b+e|0)-c.ep.b|0));}
function Li(){var a=this;M3.call(a);a.pR=null;a.t_=null;}
function AGx(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.pR;e=0;f=0;g=a.t_;a:{b:{while(true){if((e+32|0)>f&&DW(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ca(b)+k|0;h=j.length;f=Bc(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BC;c=new M;O(c);V(H(V(H(c,C(417)),l),C(99)),h);Bk(b,N(c));K(b);}if(Ca(b)<m){b=new MO;Y(b);K(b);}if(m<0){b=new BC;c=new M;O(c);H(V(H(c,C(100)),m),C(101));Bk(b,N(c));K(b);}n=b.Z;h=n+b.l8|0;e=0;while(e<m){o=k+1|0;i=b.mX.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!DW(c)){p=!DW(b)&&e>=f?AZ6:AZ5;break a;}i=g.data;n=Ca(c);o=i.length;n=Bc(n,o);q=new WY;q.s8=b;q.vI=c;p=AGW(a,d,e,f,g,0,n,q);e=q.xr;if(p===null&&0==q.ll)p=AZ6;k=q.ll;h=0;if(c.nQ){b=new JH;Y(b);K(b);}if(Ca(c)<k)break;if(h>o){b=new BC;c=new M;O(c);BI(V(H(V(H(c,C(102)),h),C(96)),o),41);Bk(b,N(c));K(b);}l=h+k|0;if(l>o){b=new BC;c=new M;O(c);V(H(V(H(c,C(104)),l),C(99)),o);Bk(b,N(c));K(b);}if(k<0){b=new BC;c=new M;O(c);H(V(H(c,C(100)),k),C(101));Bk(b,N(c));K(b);}o=c.Z;m=0;while(m<
k){l=o+1|0;n=h+1|0;Ud(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new It;Y(b);K(b);}b=new BC;c=new M;O(c);BI(V(H(V(H(c,C(102)),k),C(96)),h),41);Bk(b,N(c));K(b);}EY(b,b.Z-(f-e|0)|0);return p;}
var Vn=G(Li);
function AGW(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Lj(h,2))break a;i=AZ6;break a;}c=k+1|0;n=j[k];if(!F6(a,n)){c=c+(-2)|0;i=Eh(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Lj(h,3))break a;i=AZ6;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!F6(a,n))break b;if(!F6(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(M8(p)){c=k+(-3)|0;i=Eh(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Eh(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Lj(h,4))break a;i=AZ6;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ca(h.vI)<2?0:1)break a;i=AZ5;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!F6(a,n))break c;if(!F6(a,o))break c;if(!F6(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=IJ(r);m=c+1|0;j[c]=Jm(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Eh(1);break a;}c=k+(-3)|0;i
=Eh(1);}h.xr=c;h.ll=f;return i;}
function F6(a,b){return (b&192)!=128?0:1;}
function ZX(){B.call(this);this.oQ=null;}
function AUu(a,b){var c,d;c=a.oQ;d=c.d1+1|0;c.d1=d;c=new M;O(c);H(H(V(c,d),C(418)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Oa(){B.call(this);this.vu=null;}
function ART(a){return a.vu.gz();}
function N_(){B.call(this);this.tW=null;}
function AKS(a){return a.tW.gz();}
function V5(){B.call(this);this.r2=null;}
function AMZ(a){return a.r2.gz();}
function U1(){B.call(this);this.zf=null;}
function AUl(a){Bt(Bx(),C(419));}
function SL(){B.call(this);this.o5=null;}
function AHP(a,b){a.o5.g(F1(b));}
function Wv(){B.call(this);this.ue=null;}
function AVh(a,b){a.ue.o();}
function Og(){var a=this;B.call(a);a.Bk=null;a.Bj=null;a.Bi=0;a.Bh=0;}
var AGZ=G();
var AGB=G();
function OX(){B.call(this);this.vA=null;}
function AKu(a,b){var c,d,e,f;c=a.vA;d=CB(b);e=new M;O(e);H(H(e,C(420)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new V6;d.zs=c;d.sv=b;e=new V9;e.AF=c;f=new Wq;f.y5=e;e=new Xu;e.pC=d;c=b.fJ;if(c!==null)c.arrayBuffer().then(Bm(e,"f"),Bm(f,"f"));else{b=b.hr.getFile();c=new Xw;c.vw=e;c.vx=f;b.then(Bm(c,"f"),Bm(f,"f"));}}
function OW(){B.call(this);this.yu=null;}
function ASX(a,b){var c;b=CB(b);c=new M;O(c);H(H(c,C(421)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var NF=G();
function ATh(a,b){b=b;b.bm=CK(b.bm,null);}
function XS(){B.call(this);this.t4=null;}
function AJy(a){DZ(a.t4);}
function Id(){var a=this;GX.call(a);a.mB=0;a.hE=null;}
var Hw=G(Bv);
function WX(){B.call(this);this.sd=null;}
function AQD(a,b){var c;c=a.sd;Dw(c,b);KG(c,null);HK(c);}
var Ro=G(D6);
var A2g=null;function AB9(){A2g=F($rt_doublecls());}
var I8=G();
var A2h=Fe;var A2i=null;var A2j=null;function ADR(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.pj=Ic(C0(d,D(0, 2147483648)),Fe)?0:1;e=C0(d,D(4294967295, 1048575));f=GF(AXm(d,52))&2047;if(Ic(e,Fe)&&!f){c.mx=Fe;c.lj=0;return;}if(f)e=AW5(e,D(0, 1048576));else{e=GU(e,1);while(Ic(C0(e,D(0, 1048576)),Fe)){e=GU(e,1);f=f+(-1)|0;}}g=A2j.data;h=f<<16>>16;i=0;j=g.length;k=BF(i,j);if(k>0){c=new BE;Y(c);K(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BF(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IB(e,A2i.data[h],i);if(ALh(m,A2h)){while(Du(m,A2h)<=0){j=j+(-1)|0;m=CH(B_(m,Bp(10)),Bp(9));}g=A2j.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IB(e,A2i.data[h],i);}e=GU(e,1);d=CH(e,Bp(1));g=A2i.data;h=j+1|0;n=g[h];f=i-1|0;n=IB(d,n,f);o=IB(Iz(e,Bp(1)),A2i.data[h],f);p=Bp(1);while(true){q=B_(p,Bp(10));if(Du(Dd(m,q),Dd(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=B_(r,Bp(10));if(Du(Dd(m,s),Dd(n,s))>=0)break;r=s;}h=Du(p,r);e=h>0?B_(Dd(m,p),p):h<0?CH(B_(Dd(m,r),r),r):B_(Dd(CH(m,AFu(r,Bp(2))),r),r);if(Du(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dd(e,Bp(10));if(Du(e,D(2808348672, 232830643))<0)break;}else if(Du(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=B_(e,Bp(10));}c.mx=e;c.lj=j-330|0;}
function IB(b,c,d){var e,f,g,h,i,j,k,l;e=C0(b,Bp(65535));f=C0(F9(b,16),Bp(65535));g=C0(F9(b,32),Bp(65535));h=C0(F9(b,48),Bp(65535));i=C0(c,Bp(65535));j=C0(F9(c,16),Bp(65535));k=C0(F9(c,32),Bp(65535));l=C0(F9(c,48),Bp(65535));return CH(CH(CH(GU(B_(l,h),32+d|0),GU(CH(B_(l,g),B_(k,h)),16+d|0)),GU(CH(CH(B_(l,f),B_(k,g)),B_(j,h)),d)),F9(CH(CH(CH(B_(k,e),B_(j,f)),B_(i,g)),GU(CH(CH(CH(B_(l,e),B_(k,f)),B_(j,g)),B_(i,h)),16)),32-d|0));}
function ADp(){A2h=Dd(Bp(-1),Bp(10));A2i=ABX([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A2j=AYN([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function NR(){B.call(this);this.uw=null;}
function AWk(a,b){var c,d;c=a.uw;d=new Bv;Bk(d,$rt_str(b.message));c.g(d);}
function ABb(){B.call(this);this.F4=null;}
function Wj(){var a=this;B.call(a);a.sW=0;a.xX=0;}
function FA(a,b){return RE(a.sW,b,a.xX);}
function Zy(){var a=this;B.call(a);a.qB=null;a.qC=null;a.qD=null;}
function AUO(a,b,c,d){var e,f;b=a.qB;e=a.qC;f=a.qD;VD(b,e);if(f!==null)d.ly.o();if(WV(d)){if(d.mG===null)PR(b,ADk(d,e),d.jG,e);else Y$(b,ADk(d,e),d.jG,e,d.mG);}}
function FG(){var a=this;B.call(a);a.gP=null;a.cw=null;a.eQ=null;a.ee=null;a.gJ=null;a.jh=null;a.uR=null;}
function AWu(a){var b=new FG();AEw(b,a);return b;}
function AEw(a,b){a.gP=b;a.cw=BJ();a.eQ=BJ();a.ee=BJ();a.jh=BJ();a.gJ=BJ();}
function ZN(a){var b;b=a.gP;if(b!==null)b.cw.pf(a);}
function Z_(){B.call(this);this.q4=null;}
function AMr(a,b){b=b;S9(a.q4,b);}
var LH=G(FG);
var Ld=G(FG);
function Yf(){B.call(this);this.vO=null;}
function AIV(a,b){var c;b=b;c=a.vO;Br(c.bu,(Cx(c.fp,b)).bA);}
function Rw(){var a=this;B.call(a);a.jk=null;a.km=null;a.qA=0;}
function Qs(){B.call(this);this.os=null;}
function APp(a,b){b=b;Ui(a.os,b);}
var D$=G(Bv);
function O$(){var a=this;B.call(a);a.or=null;a.rN=null;a.vN=0;a.xh=0;}
function MB(a,b){return Ca(a.rN)<b?0:1;}
function Ql(){B.call(this);this.wf=null;}
function ATW(a,b){var c,d,e,f,g,h,i,j,k;c=b.data;b=a.wf;d=CO(c[0]);e=(CO(c[1])).data[0];if(!VS(b.e.f)){c=b.e.f;if(c.b6==e){f=MM(d);E1(c.dh);E1(c.c9);Rb(c);while(f.eR>=f.hO.data.length?0:1){if(Ba(f)==(-1))continue;g=Z5(c,Ba(f));h=MU(BQ(c,g.bk),g.bs);if(Ba(f)==(-1)){h.cD=5;continue;}i=Z5(c,Ba(f));e=Ba(f);j=Ba(f);F$(c.dh,g,i);Sh(c.c9,i,BJ());BH(Cx(c.c9,i),g);h.cD=e;h.cc=j;}k=EE();if(b.kg){c=Bx();k=Iz(k,b.tM);b=new M;O(b);H(GL(H(b,C(422)),k),C(210));Bt(c,N(b));}}}}
var AGd=G();
function Wn(b,c,d,e){var f,g;f=b.next();g=new ZF;g.oL=b;g.oK=c;g.oR=d;g.oM=e;f.then(Bm(g,"f"),Bm(d,"f"));}
function ABl(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AGX(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Em()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new ZC;f.sA=b;f.sB=d;d.addEventListener("change",Bm(f,"handleEvent"));d.click();}
function ABw(b,c){var d;if(c.isFile?1:0)b.g(AAU(c.file()));else{c=c.createReader();d=new Zp;d.v1=b;c.readEntries(Bm(d,"f"));}}
function U9(){var a=this;B.call(a);a.bz=null;a.pP=null;a.iR=null;a.nN=null;a.kO=null;a.ft=null;}
function II(a){return a.bz.bO.hF;}
function AAx(a){var b;b=new Ut;b.wU=a;return b;}
function Kj(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DZ(a.ft.b5);d=a.bz.e;e=DY(d);f=GA(d);g=a.bz.fj;if(c===null)h=null;else{AXW();switch(A2k.data[c.fg]){case 1:h=M5(g,e,f);break a;case 2:h=Sr(g,e,f);break a;default:}b=new EF;Y(b);K(b);}}c=a.bz;e=E0(c,b);f=Hq(c.e.f,e.bk,e.bs);g=UT(c,f);if(h!==null){f=c.e;i=e.bk;j=e.bs;e=new Qn;e.AB=c;e.Az=b;e.AA=g;h.to(f,i,j,e,c.iO);}else{e=Cx(c.e.f.dh,f);if(e!==null)IE(c,e);else{e=Cx(c.e.f.c9,f);if(e!==null&&!Eu(e))SR(c.kk,b,e,c,g);else{g=c.kk;DZ(g.b5);h=g.b5;k=R(CU,1);l=k.data;d=new CU;BR(h);f
=new NK;f.xY=h;JW(d,f,C(423));l[0]=d;GH(h,b,Fo(k),Sx(g,c));}}}}
var ABJ=G(0);
function AM1(b){return 112<=b&&b<=123?1:0;}
var QG=G(0);
var EW=G(E8);
function QX(){EW.call(this);this.hy=null;}
function Ua(a){var b;b=new UF;LL(b,a.hy);return b;}
function Nq(){B.call(this);this.xf=null;}
function ALA(a,b){b=b;OD(a.xf,b);}
function W1(){B.call(this);this.uV=null;}
function AOD(a,b){b=b;Hp(a.uV,b);}
function JU(){var a=this;B.call(a);a.ef=null;a.kt=null;a.jy=0;}
function AX5(a,b,c){var d=new JU();AFn(d,a,b,c);return d;}
function AFn(a,b,c,d){a.ef=b;a.kt=c;a.jy=d;}
function AEB(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BX(a.ef,c.ef)&&BX(a.kt,c.kt)&&BX(Di(a.jy),Di(c.jy))?1:0;}return 0;}
function M2(){var a=this;JU.call(a);a.kH=null;a.ob=0;}
function AJp(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){if(!AEB(a,b))return 0;c=b;return BX(a.kH,c.kH);}return 0;}
function ER(){var a=this;B.call(a);a.fm=null;a.fW=null;a.tO=0;}
function AWS(a,b,c){var d=new ER();L8(d,a,b,c);return d;}
function L8(a,b,c,d){a.fm=b;a.fW=c;a.tO=d;}
function ABA(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BX(a.fm,c.fm)&&BX(a.fW,c.fW)?1:0;}return 0;}
function Il(){ER.call(this);this.nh=null;}
function Jk(){var a=this;ER.call(a);a.hk=null;a.oE=0;}
function AUJ(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){if(!ABA(a,b))return 0;c=b;return BX(a.hk,c.hk);}return 0;}
function JK(){var a=this;ER.call(a);a.ir=null;a.hm=null;}
function AIC(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BX(a.ir,c.ir)&&BX(a.hm,c.hm)?1:0;}return 0;}
var ZH=G();
function ASO(a,b){ABl(b);}
function ZG(){var a=this;B.call(a);a.rQ=null;a.rP=null;}
function AKR(a,b){var c,d,e,f,g,h,i;c=a.rQ;d=a.rP;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new RT;i.p3=c;i.p2=g;h.then(Bm(i,"f"),Bm(d,"f"));e=e+1|0;}}
var YT=G();
function AMz(a,b){ABl(b);}
function YS(){var a=this;B.call(a);a.re=null;a.rf=null;}
function ANo(a,b){var c,d,e,f,g;c=a.re;d=a.rf;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(BA,1);g.data[0]=F1(b.name);Wn(f,c,d,g);}
var ACs=G();
function AFx(b,c,d){ADl(b,c,d,0);}
function ADl(b,c,d,e){ABy(b,c,d,null,null,e);}
function ABy(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u;h=MM(c);i=Ba(h);j=Ba(h);k=Ba(h);l=CC(b);m=BL(i+1|0);n=!g?R(CD,i):Q2(b.A,i);c=m.data;b.A=n;o=0;while(o<i){if(g&&o<l){p=4*Ba(h)|0;h.eR=h.eR+p|0;c[o+1|0]=(c[o]+(BQ(b,o)).L|0)+1|0;}else{b.A.data[o]=DS(AC1(h,d,0));c[o+1|0]=(c[o]+(BQ(b,o)).L|0)+1|0;}o=o+1|0;}if(j)b.c7=AFI(AG7(h));b.hS=m;E1(b.dh);E1(b.c9);q=b.dh;g=0;while(g<k){F$(q,Dv(Ba(h),Ba(h)),Dv(Ba(h),Ba(h)));g=g+1|0;}r=b.dh;s=b.c9;r=PB(WW(r));while(Ft(r)){t=ZL(r);q=t.cF;t=t.cY;Sh(s,t,BJ());BH(Cx(s,t),
q);}if(s.lL===null){r=new QY;r.xy=s;s.lL=r;}r=s.lL;q=new S4;LL(q,r.xy);while(Ft(q)){Mf(q);r=q.gF.cY;t=AZi;c=R(B,r.j);d=c.data;Ih(r,c);ACQ(c,t);g=0;u=d.length;while(g<u){t=d[g];JY(r,g);r.cA.data[g]=t;g=g+1|0;}}Sn(h);if(e!==null&&f!==null){r=APx(e,f);PJ(r);b.dV=AKl(r.l$,r.iq);b.c7=AFI(r.mP);}}
function AAS(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;g=c.data;if(g.length==1&&g[0]==(-1))return;h=MM(c);i=Ba(h);j=Ba(h);k=Ba(h);l=Ba(h);m=Zb(b,i);n=Zb(b,j);o=(Iu(BQ(b,m.a),m.b)).data[0].p;p=(Iu(BQ(b,n.a),n.b)).data[1].p;q=0;r=k-1|0;while(q<k){g=AC1(h,d,i);if(!q)g=MA(o,g);if(q==r)g=MA(g,p);s=m.a+q|0;t=DS(g);b.A.data[s]=t;q=q+1|0;}if(l){u=AG7(h);v=Kz(i,j,(-1));Pc(b.c7,v,u);}else if(e!==null&&f!==null){t=APx(e,f);PJ(t);v=Kz(i,j,(-1));Pc(b.c7,v,t.mP);b.dV.eH=t.iq;}Sn(h);}
function AC1(b,c,d){var e,f,g,h,i,j,k,l;e=Ba(b);f=R(Cf,e);g=f.data;h=0;while(h<e){i=Ba(b);j=Ba(b);k=Ba(b);l=Ba(b);g[h]=Dz(ET(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
var Y4=G(0);
var A0S=null;function ABi(){A0S=null;}
function ZC(){var a=this;B.call(a);a.sA=null;a.sB=null;}
function AMn(a,b){var c,d,e,f,g,h;b=a.sA;c=a.sB;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new NN;h.oA=b;h.oz=g;$rt_globals.setTimeout(Bm(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=AAU(d.item(f));g=new Nx;g.tR=b;g.tS=c;$rt_globals.setTimeout(Bm(g,"onTimer"),0);f=f+1|0;}}
function ABV(){var a=this;B.call(a);a.j5=null;a.mw=null;}
function AHq(){var a=this;B.call(a);a.y9=0;a.AN=0;a.qm=0;a.mb=0;}
function Zs(){var a=this;B.call(a);a.rC=null;a.rD=null;}
function AIR(a){var b,c,d,e,f,g;b=a.rC;c=a.rD;if(BX(c.j5,b.e.gI)){c=c.mw;CE(b,c.mb,c.qm,0);B8(b.q.bX,c.mb,c.qm);B8(b.q.bE,c.AN,c.y9);}else{d=(Cy(b.fj.vz)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Cp(b);b=new Wr;b.oB=g;b.oC=c;BR(b);c=new RG;c.x6=b;$rt_globals.setTimeout(Bm(c,"onTimer"),0);}}}
function Zt(){var a=this;B.call(a);a.wO=null;a.wN=null;}
function AM6(a){IE(a.wO,a.wN);}
function AGU(){var a=this;B.call(a);a.h2=null;a.ds=0;}
function AMp(a,b){var c=new AGU();AHJ(c,a,b);return c;}
function AHJ(a,b,c){a.h2=b;a.ds=c;}
function AQk(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.ds==c.ds&&BX(a.h2,c.h2)?1:0;}return 0;}
function Oq(){B.call(this);this.pt=null;}
function AOB(a,b){b=b;NB(a.pt,b);}
function AAr(){B.call(this);this.pz=null;}
function AWi(a,b){b=b;Hp(a.pz,b);}
function AFc(){var a=this;B.call(a);a.hO=null;a.eR=0;}
function MM(a){var b=new AFc();AHV(b,a);return b;}
function AHV(a,b){a.hO=b;a.eR=0;}
function Ba(a){var b,c;b=a.hO.data;c=a.eR;a.eR=c+1|0;return b[c];}
function Sn(a){var b,c,d,e;if(a.eR!=a.hO.data.length){b=Ff();c=a.hO.data.length;d=a.eR;e=new M;O(e);H(V(H(V(H(e,C(408)),c),C(424)),d),C(425));Bt(b,N(e));}}
var Fl=G();
var A2l=null;var A2m=null;var A06=null;var A2n=null;var A2o=null;var A2p=null;function AEy(){A2l=new Xj;A2m=new Xg;A06=new Xh;A2n=new Xe;A2o=new Xf;A2p=new AAA;}
function ABs(){var a=this;B.call(a);a.l$=null;a.mP=null;a.iq=null;a.cu=null;a.lc=null;a.lV=null;a.hn=null;a.mO=null;a.mJ=null;}
function APx(a,b){var c=new ABs();AUh(c,a,b);return c;}
function AUh(a,b,c){a.cu=MM(b);a.lc=c;}
function PJ(a){var b,c,d,e,f,g,h,i;b=Ba(a.cu);c=new LK;Rv(c);a.iq=c;a.hn=BJ();d=0;while(d<b){e=Ba(a.cu);f=Ba(a.cu);g=ET(a.lc,e,f);F$(a.iq,g,BJ());BH(a.hn,g);d=d+1|0;}c=PB(WW(a.iq));while(Ft(c)){IY((ZL(c)).cY,OL(a));}d=Ba(a.cu);if(d==(-1))a.l$=null;else{a.lV=R(FG,d);c=new NW;h=a.cu;i=a.lc;g=a.hn;c.dQ=h;c.sO=i;c.r1=g;a.mO=c;c=new S1;c.d7=h;c.vP=i;c.wg=g;a.mJ=c;a.l$=Sz(a,null);}if(Ba(a.cu)!=(-1))a.mP=SZ(a.cu,a.lV);}
function Sz(a,b){var c,d,e,f,g,h,i,j,k;c=Ba(a.cu);d=Ba(a.cu);e=a.mO;f=Ba(e.dQ);g=BJ();h=0;while(h<f){BH(g,NZ(e));h=h+1|0;}a:{switch(d){case -1:i=new LH;i.gP=b;b=A06;i.cw=b;i.eQ=b;i.ee=b;i.jh=b;i.gJ=b;break a;case 0:i=AWu(b);break a;case 1:i=new Ld;AEw(i,b);IY(i.ee,g);break a;default:}b=new CS;i=new M;O(i);V(H(i,C(426)),d);Bk(b,N(i));K(b);}i.ee=g;b=a.mJ;d=Ba(b.d7);e=BJ();j=0;while(j<d){BH(e,Gp(b));j=j+1|0;}i.eQ=e;i.jh=OL(a);d=Ba(a.cu);b=BJ();j=0;while(j<d){e=NZ(a.mO);g=Gp(a.mJ);f=Ba(a.cu);k=new Rw;k.jk=e;k.km
=g;k.qA=f;BH(b,k);j=j+1|0;}i.gJ=b;j=Ba(a.cu);i.uR=j==(-1)?null:Bs(a.hn,j);d=Ba(a.cu);b=BJ();j=0;while(j<d){BH(b,Sz(a,i));j=j+1|0;}i.cw=b;a.lV.data[c]=i;return i;}
function OL(a){var b,c,d,e;b=Ba(a.cu);c=BJ();d=0;while(d<b){e=Ba(a.cu);BH(c,Bs(a.hn,e));d=d+1|0;}return c;}
var K5=G(EW);
var Xj=G(K5);
var Mj=G(D4);
var Xg=G(Mj);
var MV=G(Gy);
function AKJ(a){var b;b=new D$;Y(b);K(b);}
function APh(a,b){var c;c=new D$;Y(c);K(c);}
function ANX(a,b){b=new D$;Y(b);K(b);}
var Xh=G(MV);
function APq(a,b){var c;c=new BC;Y(c);K(c);}
function AOt(a){return 0;}
function ALf(a){return A2n;}
function AIH(a){return 1;}
var Xe=G();
function AIo(a){return 0;}
function AQR(a){var b;b=new Ni;Y(b);K(b);}
function ASF(a){var b;b=new CS;Y(b);K(b);}
var Q_=G(0);
var Xf=G();
var AAA=G();
function Fd(){var a=this;B.call(a);a.ju=0;a.tU=0;a.iu=null;a.gF=null;a.rv=null;a.kb=null;}
function A2q(a){var b=new Fd();LL(b,a);return b;}
function LL(a,b){a.kb=b;a.tU=b.cQ;a.iu=null;}
function Ft(a){var b,c;if(a.iu!==null)return 1;while(true){b=a.ju;c=a.kb.ca.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.ju=b+1|0;}return 0;}
function ACu(a){var b;if(a.tU==a.kb.cQ)return;b=new Hw;Y(b);K(b);}
function Mf(a){var b,c,d,e;ACu(a);if(!Ft(a)){b=new Ni;Y(b);K(b);}b=a.iu;if(b!==null){c=a.gF;if(c!==null)a.rv=c;a.gF=b;a.iu=b.cO;}else{d=a.kb.ca.data;e=a.ju;a.ju=e+1|0;b=d[e];a.gF=b;a.iu=b.cO;a.rv=null;}}
var UF=G(Fd);
function QF(a){Mf(a);return a.gF.cF;}
var JH=G(D$);
var It=G(Bv);
var MO=G(Bv);
function AGF(){B.call(this);this.Bt=null;}
function R_(){var a=this;B.call(a);a.oV=null;a.oW=null;}
function AWn(a){var b,c;b=a.oV;c=a.oW;Ga(b.eE,c);}
function R1(){var a=this;B.call(a);a.om=null;a.on=null;}
function AIY(a){var b,c;b=a.om;c=a.on;Ga(b.eE,c);U7(b);}
var AE7=G();
function RX(b,c){return b.data[c];}
function Hg(){var a=this;B.call(a);a.d9=0;a.eh=0;a.mh=null;a.nt=0;a.gb=null;}
function ATH(a,b,c,d,e,f){var g=new Hg();AOw(g,a,b,c,d,e,f);return g;}
function AOw(a,b,c,d,e,f,g){a.d9=b;a.eh=c;a.mh=B6(f,g);a.nt=d;a.gb=e;}
function WD(){EW.call(this);this.sH=null;}
function PB(a){var b;b=new Wt;LL(b,a.sH);return b;}
function QY(){E8.call(this);this.xy=null;}
var Su=G(0);
var O2=G(0);
var Hz=G();
function AC2(){var a=this;Hz.call(a);a.Io=null;a.Kz=0;a.IZ=0;a.Gq=0;}
function Vk(){var a=this;B.call(a);a.xk=null;a.xj=null;}
function AK8(a){var b,c;b=a.xk;c=a.xj;Un();Kj(b,c,A2r);}
function Vi(){var a=this;B.call(a);a.oj=null;a.oi=null;}
function AVf(a){var b,c;b=a.oj;c=a.oi;Un();Kj(b,c,A2s);}
function Vj(){var a=this;B.call(a);a.t7=null;a.t8=null;}
function AKp(a){Kj(a.t7,a.t8,null);}
function Vh(){var a=this;B.call(a);a.vp=null;a.vq=null;}
function AMx(a){var b,c,d,e,f,g,h;b=a.vp;c=a.vq;d=DY(b.bz.e);e=GA(b.bz.e);d=V_(b.bz.fj,d,e);DZ(b.ft.b5);b=b.bz;e=E0(b,c);if(d!==null){f=b.e;g=e.bk;h=e.bs;e=new RP;e.yq=b;e.yp=c;d.I9(f,g,h,1,e,b.iO);}}
function SO(){B.call(this);this.qK=null;}
function ARU(a){var b;b=a.qK;DZ(b.ft.b5);Hn(b.bz,AAx(b),0);}
function SN(){B.call(this);this.wE=null;}
function AQj(a){var b;b=a.wE;DZ(b.ft.b5);Hn(b.bz,AAx(b),1);}
function SM(){B.call(this);this.tV=null;}
function AV$(a){var b,c,d;b=a.tV;DZ(b.ft.b5);c=II(b);b=b.bz;BR(b);d=new AAC;d.rg=b;SX(c,d,ACb(C(427)));}
var R0=G(0);
var A0O=null;function AFf(){A0O=new Wo;}
function VM(){B.call(this);this.us=null;}
function AK2(a){var b,c,d;b=a.us;DZ(b.ft.b5);c=II(b);b=b.bz;BR(b);d=new RY;d.un=b;MQ(c,d);}
function VV(){B.call(this);this.tH=null;}
function AUY(a,b,c){var d,e;c=a.tH;d=c.e.f;e=b.bA;b=c.fd;T0(d.A.data[e],0,b);}
function NW(){var a=this;B.call(a);a.dQ=null;a.sO=null;a.r1=null;}
function NZ(a){var b,c,d,e,f,g,h;a:{b=Ba(a.dQ);switch(b){case 3:break;case 5:c=PA(a);d=Mx(a);b=Ba(a.dQ);e=Ba(a.dQ);f=BJ();g=0;while(g<e){BH(f,Mx(a));g=g+1|0;}h=new M2;AFn(h,c,d,4);h.kH=f;h.ob=b;break a;default:c=new CS;d=new M;O(d);V(H(d,C(428)),b);Bk(c,N(d));K(c);}h=AX5(PA(a),Mx(a),Ba(a.dQ));}return h;}
function PA(a){var b,c;b=Ba(a.dQ);c=Ba(a.dQ);return AMp(ET(a.sO,b,c),Ba(a.dQ));}
function Mx(a){var b;b=Ba(a.dQ);if(b==(-1))return null;return Bs(a.r1,b);}
function S1(){var a=this;B.call(a);a.d7=null;a.vP=null;a.wg=null;}
function Gp(a){var b,c,d,e,f;a:{b:{b=Ba(a.d7);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=ON(a);d=RC(a);b=Ba(a.d7);e=Ug(a);f=new Jk;L8(f,c,d,2);f.oE=b;f.hk=e;break a;case 4:c=Gp(a);d=Gp(a);f=new JK;L8(f,c.fm,c.fW,(-1));f.ir=c;f.hm=d;break a;case 5:f=AWS(ON(a),RC(a),Ba(a.d7));break a;case 9:c=Ug(a);f=new Il;d=(Bs(c,0)).fW;L8(f,null,null,(-1));if(Eu(c)){c=new BE;Bk(c,C(429));K(c);}f.nh=c;f.fW=d;break a;default:break b;}f=null;break a;}c=new CS;d=new M;O(d);V(H(d,C(430)),
b);Bk(c,N(d));K(c);}return f;}
function ON(a){var b,c;b=Ba(a.d7);c=Ba(a.d7);return AMp(ET(a.vP,b,c),Ba(a.d7));}
function RC(a){var b;b=Ba(a.d7);if(b==(-1))return null;return Bs(a.wg,b);}
function Ug(a){var b,c,d;b=Ba(a.d7);c=BJ();d=0;while(d<b){BH(c,Gp(a));d=d+1|0;}return c;}
function Pf(){var a=this;B.call(a);a.pa=null;a.pb=0;a.pc=0;a.pd=null;a.o8=0;a.o$=0;}
function APC(a,b){var c,d,e,f,g,h,i,j;c=a.pa;d=a.pb;e=a.pc;f=a.pd;g=a.o8;h=a.o$;i=CF(c.by,5.0);d=Bc((c.by.cf.a-d|0)-i|0,Be((i-d|0)-c.V.r.a|0,b.i.a));j=Bc((c.by.cf.b-e|0)-i|0,Be((i-e|0)-c.V.r.b|0,b.i.b));U(f,d+g|0,j+h|0);FR(c,f,c.W.r);}
function X2(){var a=this;B.call(a);a.u4=null;a.u6=null;a.u5=null;a.u0=0;a.uZ=0;a.u3=0;a.u1=0;a.ve=0;a.vd=0;a.vf=0;a.vL=0;}
function AMq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.u4;d=a.u6;e=a.u5;f=a.u0;g=a.uZ;h=a.u3;i=a.u1;j=a.ve;k=a.vd;l=a.vf;m=a.vL;n=CF(c.by,5.0);o=c.W.j$();Ck(d,c.W.r);Ck(e,c.W.H);switch(f){case -1:f=Bc(h+(b.i.a-g|0)|0,c.by.cf.a-n|0);g=o.a;h=h+i|0;f=Be(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Be((i+b.i.a|0)-g|0,Be(o.a,n-c.V.H.a|0));}b:{switch(j){case -1:f=Be(n,Bc(l+(b.i.b-k|0)|0,(c.by.cf.b+c.V.r.b|0)-n|0));g=o.b;h=l+m|0;f=Be(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Be((m+b.i.b|0)-k|0,o.b);}FR(c,e,d);}
function X1(){var a=this;B.call(a);a.qi=null;a.qh=0.0;}
function Lf(a,b){return LC(a.qi,b,a.qh*2.0+0.875);}
var YL=G(BC);
function ZZ(){B.call(this);this.vV=null;}
function ALC(a){AHc(a.vV);}
function Z1(){B.call(this);this.oO=null;}
function AVL(a){K2(a.oO);}
function Z0(){B.call(this);this.uQ=null;}
function AI6(a){AEb(a.uQ);}
function Xx(){B.call(this);this.qd=null;}
function AVj(a){a.qd.w8();}
function Xy(){B.call(this);this.tw=null;}
function ALl(a){a.tw.xF();}
function RA(){B.call(this);this.x0=null;}
function ARf(a){var b,c,d,e,f,g,h,i;b=a.x0;c=(b.pP.dK()).data;d=R(CU,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new ND;i.xe=b;i.xb=h;e[f]=AIT(i,h);f=f+1|0;}return d;}
function Ub(){B.call(this);this.pW=null;}
function ANm(a){a.pW.nN.jd(0);}
function Uc(){B.call(this);this.q$=null;}
function ATI(a){a.q$.nN.jd(1);}
function Yt(){B.call(this);this.qv=null;}
function AM$(a){var b,c,d,e,f;b=a.qv.e.f;c=b.b6;d=new M;O(d);V(H(d,C(431)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.h7;d=new M;O(d);V(H(d,C(432)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.c7;e=Gj(EV(b));Y5(d,0,d.df,e);b=Bx();f=b.lB;f.data[0]=10;PE(b,f,0,1);}
function Yu(){B.call(this);this.wP=null;}
function ASl(a){Te(a.wP);}
function Yo(){B.call(this);this.oc=null;}
function APP(a){U3(a.oc);}
function Yp(){B.call(this);this.u8=null;}
function ANv(a){K8(a.u8);}
function Yq(){B.call(this);this.wp=null;}
function ATq(a){HK(a.wp);}
function Vd(){B.call(this);this.r3=null;}
function AJt(a,b,c){GM(BQ(a.r3.e.f,b.bA),0,J(c));}
function RT(){var a=this;B.call(a);a.p3=null;a.p2=null;}
function AK4(a,b){a.p3.g(AEM(a.p2,b));}
var Ju=G(0);
function NN(){var a=this;B.call(a);a.oA=null;a.oz=null;}
function ANt(a){ABw(a.oA,a.oz);}
function Nx(){var a=this;B.call(a);a.tR=null;a.tS=null;}
function AHD(a){a.tR.g(a.tS);}
var Wo=G();
function ZF(){var a=this;B.call(a);a.oL=null;a.oK=null;a.oR=null;a.oM=null;}
function AMV(a,b){var c,d,e,f,g,h,i;c=a.oL;d=a.oK;e=a.oR;f=a.oM;if(!(b.done?1:0)){Wn(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new V8;c.ri=d;c.rj=g;c.rk=f;b.then(Bm(c,"f"),Bm(e,"f"));}else{h=f.data;c=g.values();b=F1(g.name);i=h.length;f=Dp(f,i+1|0);f.data[i]=b;Wn(c,d,e,f);}}}
var Wt=G(Fd);
function ZL(a){Mf(a);return a.gF;}
var S4=G(Fd);
var Wy=G(0);
var A2c=null;function AXl(){AXl=Bq(Wy);AVb();}
function AVb(){A2c=S(C(390));}
function S0(){var a=this;B.call(a);a.h=null;a.dI=0;a.lq=null;a.pn=0;a.gU=0;a.fb=0;a.bx=0;a.mv=null;}
function KP(a){return a.h.bN;}
function Z7(a,b,c,d){var e,f,g,h,i,j;e=BJ();f=a.dI;g=0;if(c!=f)a.dI=c;a:{switch(b){case -1073741784:h=new Tw;c=a.bx+1|0;a.bx=c;FI(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Ry;c=a.bx+1|0;a.bx=c;FI(h,c);break a;case -33554392:h=new UG;c=a.bx+1|0;a.bx=c;FI(h,c);break a;default:c=a.gU+1|0;a.gU=c;if(d!==null)h=AYa(c);else{h=new FU;FI(h,0);g=1;}c=a.gU;if(c<=(-1))break a;if(c>=10)break a;a.lq.data[c]=h;break a;}h=new ZW;FI(h,(-1));}while(true){if(Fm(a.h)&&a.h.k==(-536870788))
{d=AUe(Cg(a,2),Cg(a,64));while(!Dn(a.h)&&Fm(a.h)){i=a.h;j=i.k;if(j&&j!=(-536870788)&&j!=(-536870871))break;CA(d,Bj(i));i=a.h;if(i.bi!=(-536870788))continue;Bj(i);}i=LD(a,d);i.T(h);}else if(a.h.bi==(-536870788)){i=He(h);Bj(a.h);}else{i=QL(a,h);d=a.h;if(d.bi==(-536870788))Bj(d);}if(i!==null)BH(e,i);if(Dn(a.h))break;if(a.h.bi==(-536870871))break;}if(a.h.lQ==(-536870788))BH(e,He(h));if(a.dI!=f&&!g){a.dI=f;d=a.h;d.gC=f;d.k=d.bi;d.e4=d.fk;j=d.dm;d.x=j+1|0;d.hX=j;Fs(d);}switch(b){case -1073741784:break;case -536870872:d
=new NL;FV(d,e,h);return d;case -268435416:d=new Ya;FV(d,e,h);return d;case -134217688:d=new S5;FV(d,e,h);return d;case -67108824:d=new Vp;FV(d,e,h);return d;case -33554392:d=new DX;FV(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AXV(Bs(e,0),h);default:return AXs(e,h);}return He(h);}d=new JG;FV(d,e,h);return d;}
function AFM(a){var b,c,d,e,f,g,h;b=BL(4);c=(-1);d=(-1);if(!Dn(a.h)&&Fm(a.h)){e=b.data;c=Bj(a.h);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BW(3);b=e.data;b[0]=c&65535;f=a.h;g=f.bi;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bj(f);f=a.h;g=f.bi;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bj(f);return ATY(e,3);}return ATY(e,2);}if(!Cg(a,2))return ACt(b[0]);if(Cg(a,64))return ARJ(b[0]);return AJ0(b[0]);}e=b.data;c=1;while(c<4&&!Dn(a.h)&&Fm(a.h)){h=c+1|0;e[c]=Bj(a.h);c=h;}if(c==1){h=e[0];if(!(A2t.Au(h)==A2u?0:1))return ZT(a,e[0]);}if
(!Cg(a,2))return AYP(b,c);if(Cg(a,64)){f=new ZE;Pz(f,b,c);return f;}f=new VF;Pz(f,b,c);return f;}
function QL(a,b){var c,d,e,f,g,h,i;if(Fm(a.h)&&!KC(a.h)&&Lb(a.h.k)){if(Cg(a,128)){c=AFM(a);if(!Dn(a.h)){d=a.h;e=d.bi;if(!(e==(-536870871)&&!(b instanceof FU))&&e!=(-536870788)&&!Fm(d))c=M$(a,b,c);}}else if(!PH(a.h)&&!W3(a.h)){f=new PK;O(f);while(!Dn(a.h)&&Fm(a.h)&&!PH(a.h)&&!W3(a.h)){if(!(!KC(a.h)&&!a.h.k)&&!(!KC(a.h)&&Lb(a.h.k))){g=a.h.k;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bj(a.h);if(!M4(e))BI(f,e&65535);else IZ(f,GV(e));}if(!Cg(a,2)){c=new Tq;DG(c);c.cz
=N(f);e=f.M;c.bK=e;c.lK=AP2(e);c.my=AP2(c.bK);h=0;while(h<(c.bK-1|0)){S8(c.lK,P(c.cz,h),(c.bK-h|0)-1|0);S8(c.my,P(c.cz,(c.bK-h|0)-1|0),(c.bK-h|0)-1|0);h=h+1|0;}}else if(Cg(a,64))c=AYO(f);else{c=new OC;DG(c);c.h0=N(f);c.bK=f.M;}}else c=M$(a,b,ZD(a,b));}else{d=a.h;if(d.bi!=(-536870871))c=M$(a,b,ZD(a,b));else{if(b instanceof FU)K(Ce(C(31),d.bN,PG(d)));c=He(b);}}a:{if(!Dn(a.h)){e=a.h.bi;if(!(e==(-536870871)&&!(b instanceof FU))&&e!=(-536870788)){f=QL(a,b);if(c instanceof C5&&!(c instanceof Fu)&&!(c instanceof CV)
&&!(c instanceof EP)){i=c;if(!f.bY(i.O)){c=new Yr;Fb(c,i.O,i.d,i.ip);c.O.T(c);}}if((f.iv()&65535)!=43)c.T(f);else c.T(f.O);break a;}}if(c===null)return null;c.T(b);}if((c.iv()&65535)!=43)return c;return c.O;}
function M$(a,b,c){var d,e,f,g,h;d=a.h;e=d.bi;if(c!==null&&!(c instanceof B4)){switch(e){case -2147483606:Bj(d);d=new AAG;Dj(d,c,b,e);Nb();c.T(A2v);return d;case -2147483605:Bj(d);d=new Rq;Dj(d,c,b,(-2147483606));Nb();c.T(A2v);return d;case -2147483585:Bj(d);d=new Q5;Dj(d,c,b,(-536870849));Nb();c.T(A2v);return d;case -2147483525:f=new Ov;d=Fy(d);g=a.fb+1|0;a.fb=g;JX(f,d,c,b,(-536870849),g);Nb();c.T(A2v);return f;case -1073741782:case -1073741781:Bj(d);d=new Tl;Dj(d,c,b,e);c.T(d);return d;case -1073741761:Bj(d);d
=new Sp;Dj(d,c,b,(-536870849));c.T(b);return d;case -1073741701:h=new WF;d=Fy(d);e=a.fb+1|0;a.fb=e;JX(h,d,c,b,(-536870849),e);c.T(h);return h;case -536870870:case -536870869:Bj(d);if(c.iv()!=(-2147483602)){d=new CV;Dj(d,c,b,e);}else if(Cg(a,32)){d=new Tn;Dj(d,c,b,e);}else{d=new PV;f=Q7(a.dI);Dj(d,c,b,e);d.lP=f;}c.T(d);return d;case -536870849:Bj(d);d=new Ge;Dj(d,c,b,(-536870849));c.T(b);return d;case -536870789:h=new FB;d=Fy(d);e=a.fb+1|0;a.fb=e;JX(h,d,c,b,(-536870849),e);c.T(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bj(d);d=new AAH;Fb(d,f,b,e);f.d=d;return d;case -2147483585:Bj(d);c=new Yk;Fb(c,f,b,(-2147483585));return c;case -2147483525:c=new QK;TU(c,Fy(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bj(d);d=new Sk;Fb(d,f,b,e);f.d=d;return d;case -1073741761:Bj(d);c=new VU;Fb(c,f,b,(-1073741761));return c;case -1073741701:c=new S6;TU(c,Fy(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bj(d);d=AX2(f,b,e);f.d=d;return d;case -536870849:Bj(d);c
=new EP;Fb(c,f,b,(-536870849));return c;case -536870789:return AW2(Fy(d),f,b,(-536870789));default:}return c;}
function ZD(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof FU;while(true){a:{e=a.h;f=e.bi;if((f&(-2147418113))==(-2147483608)){Bj(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dI=g;else{if(f!=(-1073741784))g=a.dI;c=Z7(a,f,g,b);e=a.h;if(e.bi!=(-536870871))K(Ce(C(31),e.bN,e.dm));Bj(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bj(e);c
=ATL(0);break a;case -2147483577:Bj(e);c=new PQ;BY(c);break a;case -2147483558:Bj(e);c=new Zl;h=a.bx+1|0;a.bx=h;AF_(c,h);break a;case -2147483550:Bj(e);c=ATL(1);break a;case -2147483526:Bj(e);c=new YQ;BY(c);break a;case -536870876:Bj(e);a.bx=a.bx+1|0;if(Cg(a,8)){if(Cg(a,1)){c=AXh(a.bx);break a;}c=AWB(a.bx);break a;}if(Cg(a,1)){c=AXz(a.bx);break a;}c=AYg(a.bx);break a;case -536870866:Bj(e);if(Cg(a,32)){c=AYA();break a;}c=AX9(Q7(a.dI));break a;case -536870821:Bj(e);i=0;c=a.h;if(c.bi==(-536870818)){i=1;Bj(c);}c
=LD(a,Gv(a,i));c.T(b);e=a.h;if(e.bi!=(-536870819))K(Ce(C(31),e.bN,e.dm));Qm(e,1);Bj(a.h);break a;case -536870818:Bj(e);a.bx=a.bx+1|0;if(!Cg(a,8)){c=new Lh;BY(c);break a;}c=new OJ;e=Q7(a.dI);BY(c);c.sT=e;break a;case 0:j=e.fk;if(j!==null)c=LD(a,j);else{if(Dn(e)){c=He(b);break a;}c=ACt(f&65535);}Bj(a.h);break a;default:break b;}Bj(e);c=new Lh;BY(c);break a;}h=(f&2147483647)-48|0;if(a.gU<h)K(Ce(C(31),FE(e),PG(a.h)));Bj(e);a.bx=a.bx+1|0;c=!Cg(a,2)?AWG(h,a.bx):Cg(a,64)?AXi(h,a.bx):AYJ(h,a.bx);a.lq.data[h].lm=1;a.pn
=1;break a;}if(f>=0&&!Hh(e)){c=ZT(a,f);Bj(a.h);}else if(f==(-536870788))c=He(b);else{if(f!=(-536870871)){b=new Jo;c=!Hh(a.h)?Zg(f&65535):a.h.fk.cJ();e=a.h;J$(b,c,e.bN,e.dm);K(b);}if(d){b=new Jo;e=a.h;J$(b,C(31),e.bN,e.dm);K(b);}c=He(b);}}}if(f!=(-16777176))break;}return c;}
function Gv(a,b){var c,d,e,f,g,h,i,j,$$je;c=AUe(Cg(a,2),Cg(a,64));EG(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dn(a.h))break a;h=a.h;b=h.bi;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CA(c,d);d=Bj(a.h);h=a.h;if(h.bi!=(-536870874)){d=38;break d;}if(h.k==(-536870821)){Bj(h);e=1;d=(-1);break d;}Bj(h);if(g){c=Gv(a,0);break d;}if(a.h.bi==(-536870819))break d;YX(c,Gv(a,0));break d;case -536870867:if(!g){b=h.k;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bj(h);h=a.h;i=h.bi;if(Hh(h))break c;if
(i<0){j=a.h.k;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Lb(i))break e;i=i&65535;break e;}catch($$e){$$je=Ew($$e);if($$je instanceof Ej){break b;}else{throw $$e;}}}try{B1(c,d,i);}catch($$e){$$je=Ew($$e);if($$je instanceof Ej){break b;}else{throw $$e;}}Bj(a.h);d=(-1);break d;}}if(d>=0)CA(c,d);d=45;Bj(a.h);break d;case -536870821:if(d>=0){CA(c,d);d=(-1);}Bj(a.h);j=0;h=a.h;if(h.bi==(-536870818)){Bj(h);j=1;}if(!e)AAR(c,Gv(a,j));else YX(c,Gv(a,j));e=0;Bj(a.h);break d;case -536870819:if(d>=0)CA(c,
d);d=93;Bj(a.h);break d;case -536870818:if(d>=0)CA(c,d);d=94;Bj(a.h);break d;case 0:if(d>=0)CA(c,d);h=a.h.fk;if(h===null)d=0;else{AHo(c,h);d=(-1);}Bj(a.h);break d;default:}if(d>=0)CA(c,d);d=Bj(a.h);}g=0;}K(Ce(C(31),KP(a),a.h.dm));}K(Ce(C(31),KP(a),a.h.dm));}if(!f){if(d>=0)CA(c,d);return c;}K(Ce(C(31),KP(a),a.h.dm-1|0));}
function ZT(a,b){var c,d,e;c=M4(b);if(Cg(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AJ0(b&65535);}if(Cg(a,64)&&b>128){if(c){d=new NC;DG(d);d.bK=2;d.sk=G4(G1(b));return d;}if(QB(b))return AQa(b&65535);if(!Ul(b))return ARJ(b&65535);return ANh(b&65535);}}if(!c){if(QB(b))return AQa(b&65535);if(!Ul(b))return ACt(b&65535);return ANh(b&65535);}d=new D5;DG(d);d.bK=2;d.gl=b;e=(GV(b)).data;d.kM=e[0];d.jj=e[1];return d;}
function LD(a,b){var c,d,e;if(!AEr(b)){if(!b.Q){if(b.hG())return AMQ(b);return ATM(b);}if(!b.hG())return ANZ(b);c=new JZ;Wc(c,b);return c;}c=ABk(b);d=new NX;BY(d);d.q9=c;d.yd=c.bh;if(!b.Q){if(b.hG())return AFa(AMQ(H3(b)),d);return AFa(ATM(H3(b)),d);}if(!b.hG())return AFa(ANZ(H3(b)),d);c=new Sd;e=new JZ;Wc(e,H3(b));AG8(c,e,d);return c;}
function H7(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cg(a,b){return (a.dI&b)!=b?0:1;}
var ABm=G();
function AB1(b){var c,d,e,f,g,h,i,j;c=AJC();d=CC(b);Br(c,d);e=0;f=0;while(f<d){g=BQ(b,f);h=g.p.data.length;Br(c,h);i=0;while(i<h){j=U0(g,i);G2(c,e,MP(j));e=e+MP(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return RO(c);}
function ABv(b){var c,d,e,f,g,h,i,j,k;c=Ba(b);d=R(IC,c);e=d.data;f=0;while(f<c){a:{g=Ba(b);if(g!=(-1)){h=Ba(b);i=Ba(b);if(i==(-1)){j=new IC;j.gx=h;e[g]=j;}else{j=new IC;j.gx=h;j.mC=BL(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].mC.data[k]=Ba(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AAl(){B.call(this);this.tl=null;}
function AQg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.tl;d=CO(c[0]);c=MM(d);e=new W_;d=ABv(c);f=ABv(c);g=Ba(c);h=R(MK,g);i=h.data;j=0;while(j<g){k=Ba(c);l=Ba(c);m=Ba(c);n=Ba(c);o=Ba(c);p=new MK;p.iy=k;p.nB=l;p.ix=m;p.nA=n;p.ln=o;i[j]=p;j=j+1|0;}e.AT=d;e.wx=f;e.gr=h;b.gg=e;KG(b.E,d);KG(b.D,b.gg.wx);}
function TW(){B.call(this);this.sb=null;}
function APe(a,b){b.g3=a.sb.df;}
function TV(){B.call(this);this.vD=null;}
function ARz(a,b){b.gP=a.vD.df.cR;}
var Gl=G(Cr);
var A2s=null;var A2r=null;var A2w=null;function Un(){Un=Bq(Gl);AVX();}
function ASL(a,b){var c=new Gl();ADB(c,a,b);return c;}
function ADB(a,b,c){Un();De(a,b,c);}
function AVX(){var b;A2s=ASL(C(433),0);b=ASL(C(434),1);A2r=b;A2w=I(Gl,[A2s,b]);}
function PT(){B.call(this);this.pM=null;}
function AKB(a,b){b.g3=a.pM;}
var G9=G(0);
function Vw(){B.call(this);this.sg=null;}
function APu(a,b,c,d){Ks(a.sg,b,c.bA,d.bA);}
function Vx(){B.call(this);this.oS=null;}
function AMW(a,b,c,d){Ks(a.oS,b,c.bA,d.bA);}
function ID(){B.call(this);this.nL=0;}
var A2x=null;var A2y=null;var A2z=null;function AQ6(a){var b=new ID();AFd(b,a);return b;}
function AFd(a,b){a.nL=b;}
function ADj(a){return a.nL;}
function Qv(b){return !b?A2y:A2x;}
function ABB(){A2x=AQ6(1);A2y=AQ6(0);A2z=F($rt_booleancls());}
var Kw=G(0);
var AD9=G();
var Qe=G(0);
var AD8=G();
function T4(){B.call(this);this.vG=null;}
function AQe(a,b,c,d){IO(a.vG,b,c.bA,d.bA);}
var T3=G();
function AUV(a,b){return b.ef.ds>=0?0:1;}
var T2=G();
function ARG(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fm;if(b===null)break b;if(b.ds>=0)break b;}c=1;break a;}c=0;}return c;}
function T5(){B.call(this);this.uP=null;}
function APJ(a,b,c,d){IO(a.uP,b,c.bA,d.bA);}
function AAC(){B.call(this);this.rg=null;}
function AL0(a,b){Dw(a.rg,b);}
function BK(){var a=this;B.call(a);a.d=null;a.cm=0;a.qE=null;a.ip=0;}
var AZo=0;function BY(a){var b;b=AZo;AZo=b+1|0;a.qE=Me(b);}
function LB(a,b){var c;c=AZo;AZo=c+1|0;a.qE=Me(c);a.d=b;}
function Ia(a,b,c,d){var e;e=d.y;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Io(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AKn(a,b){a.ip=b;}
function AJD(a){return a.ip;}
function AS3(a){return a.d;}
function AT4(a,b){a.d=b;}
function AT3(a,b){return 1;}
function AU8(a){return null;}
function JQ(a){var b;a.cm=1;b=a.d;if(b!==null){if(!b.cm){b=b.fR();if(b!==null){a.d.cm=1;a.d=b;}a.d.eJ();}else if(b instanceof GY&&b.eO.lm)a.d=b.d;}}
function AHg(){AZo=1;}
var Vv=G();
var A2k=null;function AXW(){AXW=Bq(Vv);AIK();}
function AIK(){var b,c;Un();b=BL((A2w.hg()).data.length);c=b.data;A2k=b;c[A2s.fg]=1;c[A2r.fg]=2;}
function Ut(){B.call(this);this.wU=null;}
function ARN(a,b){Wd(II(a.wU),b,A0X,ACb(C(435)));}
function ND(){var a=this;B.call(a);a.xe=null;a.xb=null;}
function AUZ(a){var b,c;b=a.xe;c=a.xb;b.iR.u2(c);}
function AAs(){var a=this;B.call(a);a.pH=null;a.pF=null;a.pE=0;a.pG=0;}
function AQm(a,b){b=b;En(a.pH,a.pF,b,a.pE,a.pG);}
function AAt(){var a=this;B.call(a);a.xQ=null;a.xP=null;a.xO=0;a.xN=0;}
function AL2(a,b){b=b;En(a.xQ,a.xP,b,a.xO,a.xN);}
function Z3(){B.call(this);this.oe=null;}
function AUc(a,b){var c,d;c=a.oe;d=b.ik;b=new M;O(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function CT(){var a=this;BK.call(a);a.lm=0;a.dP=0;}
var A2v=null;function Nb(){Nb=Bq(CT);ALD();}
function AYa(a){var b=new CT();FI(b,a);return b;}
function FI(a,b){Nb();BY(a);a.dP=b;}
function AI4(a,b,c,d){var e,f;e=I9(d,a.dP);Kv(d,a.dP,b);f=a.d.c(b,c,d);if(f<0)Kv(d,a.dP,e);return f;}
function AO5(a){return a.dP;}
function AJm(a,b){return 0;}
function ALD(){var b;b=new PL;BY(b);A2v=b;}
function Hb(){var a=this;B.call(a);a.bg=null;a.gC=0;a.e9=0;a.wb=0;a.lQ=0;a.bi=0;a.k=0;a.tp=0;a.fk=null;a.e4=null;a.x=0;a.iH=0;a.dm=0;a.hX=0;a.bN=null;}
var A2A=null;var A2t=null;var A2u=0;function Qm(a,b){if(b>0&&b<3)a.e9=b;if(b==1){a.k=a.bi;a.e4=a.fk;a.x=a.hX;a.hX=a.dm;Fs(a);}}
function Hh(a){return a.fk===null?0:1;}
function KC(a){return a.e4===null?0:1;}
function Bj(a){Fs(a);return a.lQ;}
function Fy(a){var b;b=a.fk;Fs(a);return b;}
function Fs(a){var b,c,d,e,f,g,h,$$je;a.lQ=a.bi;a.bi=a.k;a.fk=a.e4;a.dm=a.hX;a.hX=a.x;while(true){b=0;c=a.x>=a.bg.data.length?0:Mu(a);a.k=c;a.e4=null;if(a.e9==4){if(c!=92)return;c=a.x;d=a.bg.data;c=c>=d.length?0:d[B2(a)];a.k=c;switch(c){case 69:break;default:a.k=92;a.x=a.iH;return;}a.e9=a.wb;a.k=a.x>(a.bg.data.length-2|0)?0:Mu(a);}a:{c=a.k;if(c!=92){e=a.e9;if(e==1)switch(c){case 36:a.k=(-536870876);break a;case 40:if(a.bg.data[a.x]!=63){a.k=(-2147483608);break a;}B2(a);c=a.bg.data[a.x];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.k=(-134217688);B2(a);break b;default:K(Ce(C(31),FE(a),a.x));}a.k=(-67108824);B2(a);}else{switch(c){case 33:break;case 60:B2(a);c=a.bg.data[a.x];e=1;break b;case 61:a.k=(-536870872);B2(a);break b;case 62:a.k=(-33554392);B2(a);break b;default:f=AHi(a);a.k=f;if(f<256){a.gC=f;f=f<<16;a.k=f;a.k=(-1073741784)|f;break b;}f=f&255;a.k=f;a.gC=f;f=f<<16;a.k=f;a.k=(-16777176)|f;break b;}a.k=(-268435416);B2(a);}}if(!e)break;}break a;case 41:a.k=(-536870871);break a;case 42:case 43:case 63:e
=a.x;d=a.bg.data;switch(e>=d.length?42:d[e]){case 43:a.k=c|(-2147483648);B2(a);break a;case 63:a.k=c|(-1073741824);B2(a);break a;default:}a.k=c|(-536870912);break a;case 46:a.k=(-536870866);break a;case 91:a.k=(-536870821);Qm(a,2);break a;case 93:if(e!=2)break a;a.k=(-536870819);break a;case 94:a.k=(-536870818);break a;case 123:a.e4=AGz(a,c);break a;case 124:a.k=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.k=(-536870874);break a;case 45:a.k=(-536870867);break a;case 91:a.k=(-536870821);break a;case 93:a.k
=(-536870819);break a;case 94:a.k=(-536870818);break a;default:}}else{c=a.x>=(a.bg.data.length-2|0)?(-1):Mu(a);c:{a.k=c;switch(c){case -1:K(Ce(C(31),FE(a),a.x));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.k
=AEW(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.e9!=1)break a;a.k=(-2147483648)|c;break a;case 65:a.k=(-2147483583);break a;case 66:a.k=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(Ce(C(31),FE(a),a.x));case 68:case 83:case 87:case 100:case 115:case 119:a.e4=TL(ET(a.bg,
a.iH,1),0);a.k=0;break a;case 71:a.k=(-2147483577);break a;case 80:case 112:break c;case 81:a.wb=a.e9;a.e9=4;b=1;break a;case 90:a.k=(-2147483558);break a;case 97:a.k=7;break a;case 98:a.k=(-2147483550);break a;case 99:c=a.x;d=a.bg.data;if(c>=(d.length-2|0))K(Ce(C(31),FE(a),a.x));a.k=d[B2(a)]&31;break a;case 101:a.k=27;break a;case 102:a.k=12;break a;case 110:a.k=10;break a;case 114:a.k=13;break a;case 116:a.k=9;break a;case 117:a.k=Rr(a,4);break a;case 120:a.k=Rr(a,2);break a;case 122:a.k=(-2147483526);break a;default:}break a;}g
=AEE(a);h=0;if(a.k==80)h=1;try{a.e4=TL(g,h);}catch($$e){$$je=Ew($$e);if($$je instanceof J2){K(Ce(C(31),FE(a),a.x));}else{throw $$e;}}a.k=0;}}if(b)continue;else break;}}
function AEE(a){var b,c,d,e,f,g;b=new M;Gq(b,10);c=a.x;d=a.bg;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=ET(d,B2(a),1);f=new M;O(f);H(H(f,C(436)),b);return N(f);}B2(a);c=0;a:{while(true){g=a.x;d=a.bg.data;if(g>=(d.length-2|0))break;c=d[B2(a)];if(c==125)break a;BI(b,c);}}if(c!=125)K(Ce(C(31),a.bN,a.x));}if(!b.M)K(Ce(C(31),a.bN,a.x));f=N(b);if(J(f)==1){b=new M;O(b);H(H(b,C(436)),f);return N(b);}b:{c:{if(J(f)>3){if(Lr(f,C(436)))break c;if(Lr(f,C(437)))break c;}break b;}f=Do(f,2);}return f;}
function AGz(a,b){var c,d,e,f,g,$$je;c=new M;Gq(c,4);d=(-1);e=2147483647;a:{while(true){f=a.x;g=a.bg.data;if(f>=g.length)break a;b=g[B2(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ko(D3(c),10);AGJ(c,0,ABC(c));continue;}catch($$e){$$je=Ew($$e);if($$je instanceof Dk){break;}else{throw $$e;}}BI(c,b&65535);}K(Ce(C(31),a.bN,a.x));}if(b!=125)K(Ce(C(31),a.bN,a.x));if(c.M>0)b:{try{e=Ko(D3(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ew($$e);if($$je instanceof Dk){}else{throw $$e;}}K(Ce(C(31),a.bN,a.x));}else if
(d<0)K(Ce(C(31),a.bN,a.x));if((d|e|(e-d|0))<0)K(Ce(C(31),a.bN,a.x));b=a.x;g=a.bg.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.k=(-2147483525);B2(a);break c;case 63:a.k=(-1073741701);B2(a);break c;default:}a.k=(-536870789);}c=new Od;c.e8=d;c.e3=e;return c;}
function FE(a){return a.bN;}
function Dn(a){return !a.bi&&!a.k&&a.x==a.tp&&!Hh(a)?1:0;}
function Lb(b){return b<0?0:1;}
function Fm(a){return !Dn(a)&&!Hh(a)&&Lb(a.bi)?1:0;}
function PH(a){var b;b=a.bi;return b<=56319&&b>=55296?1:0;}
function W3(a){var b;b=a.bi;return b<=57343&&b>=56320?1:0;}
function Ul(b){return b<=56319&&b>=55296?1:0;}
function QB(b){return b<=57343&&b>=56320?1:0;}
function Rr(a,b){var c,d,e,f,$$je;c=new M;Gq(c,b);d=a.bg.data.length-2|0;e=0;while(true){f=BF(e,b);if(f>=0)break;if(a.x>=d)break;BI(c,a.bg.data[B2(a)]);e=e+1|0;}if(!f)a:{try{b=Ko(D3(c),16);}catch($$e){$$je=Ew($$e);if($$je instanceof Dk){break a;}else{throw $$e;}}return b;}K(Ce(C(31),a.bN,a.x));}
function AEW(a){var b,c,d,e,f,g;b=3;c=1;d=a.bg.data;e=d.length-2|0;f=Wz(d[a.x],8);switch(f){case -1:break;default:if(f>3)b=2;B2(a);a:{while(true){if(c>=b)break a;g=a.x;if(g>=e)break a;g=Wz(a.bg.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B2(a);c=c+1|0;}}return f;}K(Ce(C(31),a.bN,a.x));}
function AHi(a){var b,c,d,e;b=1;c=a.gC;a:while(true){d=a.x;e=a.bg.data;if(d>=e.length)K(Ce(C(31),a.bN,d));b:{c:{switch(e[d]){case 41:B2(a);return c|256;case 45:if(!b)K(Ce(C(31),a.bN,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B2(a);}B2(a);return c;}
function B2(a){var b,c,d,e,f;b=a.x;a.iH=b;if(!(a.gC&4))a.x=b+1|0;else{c=a.bg.data.length-2|0;a.x=b+1|0;a:while(true){d=a.x;if(d<c&&S2(a.bg.data[d])){a.x=a.x+1|0;continue;}d=a.x;if(d>=c)break;e=a.bg.data;if(e[d]!=35)break;a.x=d+1|0;while(true){f=a.x;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.x=f+1|0;}}}return a.iH;}
function AGm(b){return A2A.F0(b);}
function Mu(a){var b,c,d,e;b=a.bg.data[B2(a)];if(CI(b)){c=a.iH+1|0;d=a.bg.data;if(c<d.length){e=d[c];if(C7(e)){B2(a);return EH(b,e);}}}return b;}
function PG(a){return a.dm;}
function Jo(){var a=this;BE.call(a);a.z$=null;a.zF=null;a.r6=0;}
function Ce(a,b,c){var d=new Jo();J$(d,a,b,c);return d;}
function J$(a,b,c,d){Y(a);a.r6=(-1);a.z$=b;a.zF=c;a.r6=d;}
function Zp(){B.call(this);this.v1=null;}
function AQ8(a,b){var c,d;c=a.v1;d=0;while(d<b.length){ABw(c,b[d]);d=d+1|0;}}
var AEx=G(0);
function V8(){var a=this;B.call(a);a.ri=null;a.rj=null;a.rk=null;}
function AQK(a,b){a.ri.g(AWC(a.rj,b,a.rk));}
var Tw=G(CT);
function AIr(a,b,c,d){var e;e=a.dP;BP(d,e,b-Ds(d,e)|0);return a.d.c(b,c,d);}
function ASu(a,b){return 0;}
var ZW=G(CT);
function AKk(a,b,c,d){return b;}
var Ry=G(CT);
function AJA(a,b,c,d){if(Ds(d,a.dP)!=b)b=(-1);return b;}
function UG(){CT.call(this);this.o9=0;}
function AIy(a,b,c,d){var e;e=a.dP;BP(d,e,b-Ds(d,e)|0);a.o9=b;return b;}
function AQT(a,b){return 0;}
var FU=G(CT);
function AUn(a,b,c,d){if(d.ko!=1&&b!=d.y)return (-1);d.jL=1;Kv(d,0,b);return b;}
function B4(){BK.call(this);this.bK=0;}
function DG(a){BY(a);a.bK=1;}
function AVQ(a,b,c,d){var e;if((b+a.b3()|0)>d.y){d.dA=1;return (-1);}e=a.bw(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function ATw(a){return a.bK;}
function AND(a,b){return 1;}
var AF$=G(B4);
function He(a){var b=new AF$();APf(b,a);return b;}
function APf(a,b){LB(a,b);a.bK=1;a.ip=1;a.bK=0;}
function ASV(a,b,c){return 0;}
function ALJ(a,b,c,d){var e,f,g;e=d.y;f=d.cV;while(true){g=BF(b,e);if(g>0)return (-1);if(g<0&&C7(P(c,b))&&b>f&&CI(P(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AKc(a,b,c,d,e){var f,g;f=e.y;g=e.cV;while(true){if(c<b)return (-1);if(c<f&&C7(P(d,c))&&c>g&&CI(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AIw(a,b){return 0;}
function B0(){var a=this;BK.call(a);a.bF=null;a.eO=null;a.bc=0;}
function AXs(a,b){var c=new B0();FV(c,a,b);return c;}
function FV(a,b,c){BY(a);a.bF=b;a.eO=c;a.bc=c.dP;}
function AMu(a,b,c,d){var e,f,g,h;if(a.bF===null)return (-1);e=FZ(d,a.bc);DF(d,a.bc,b);f=a.bF.j;g=0;while(true){if(g>=f){DF(d,a.bc,e);return (-1);}h=(Bs(a.bF,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AQM(a,b){a.eO.d=b;}
function AOu(a,b){var c;a:{c=a.bF;if(c!==null){c=B3(c);while(true){if(!B5(c))break a;if(!(B7(c)).bY(b))continue;else return 1;}}}return 0;}
function ARx(a,b){return I9(b,a.bc)>=0&&FZ(b,a.bc)==I9(b,a.bc)?0:1;}
function AJ$(a){var b,c,d,e;a.cm=1;b=a.eO;if(b!==null&&!b.cm)JQ(b);a:{b=a.bF;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Bs(a.bF,d);e=b.fR();if(e===null)e=b;else{b.cm=1;ED(a.bF,d);Tk(a.bF,d,e);}if(!e.cm)e.eJ();d=d+1|0;}}}if(a.d!==null)JQ(a);}
var JG=G(B0);
function AQx(a,b,c,d){var e,f,g,h;e=Ds(d,a.bc);BP(d,a.bc,b);f=a.bF.j;g=0;while(true){if(g>=f){BP(d,a.bc,e);return (-1);}h=(Bs(a.bF,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ARY(a,b){return !Ds(b,a.bc)?0:1;}
var DX=G(JG);
function AKP(a,b,c,d){var e,f,g;e=Ds(d,a.bc);BP(d,a.bc,b);f=a.bF.j;g=0;while(g<f){if((Bs(a.bF,g)).c(b,c,d)>=0)return a.d.c(a.eO.o9,c,d);g=g+1|0;}BP(d,a.bc,e);return (-1);}
function ARE(a,b){a.d=b;}
var NL=G(DX);
function AQH(a,b,c,d){var e,f;e=a.bF.j;f=0;while(f<e){if((Bs(a.bF,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AT9(a,b){return 0;}
var Ya=G(DX);
function AJh(a,b,c,d){var e,f;e=a.bF.j;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bF,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ATC(a,b){return 0;}
var S5=G(DX);
function AJ5(a,b,c,d){var e,f,g,h;e=a.bF.j;f=d.jS?0:d.cV;a:{g=a.d.c(b,c,d);if(g>=0){BP(d,a.bc,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bF,h)).ct(f,b,c,d)>=0){BP(d,a.bc,(-1));return g;}h=h+1|0;}}}return (-1);}
function AWe(a,b){return 0;}
var Vp=G(DX);
function AHX(a,b,c,d){var e,f;e=a.bF.j;BP(d,a.bc,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bF,f)).ct(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ASf(a,b){return 0;}
function GY(){B0.call(this);this.c8=null;}
function AXV(a,b){var c=new GY();ACh(c,a,b);return c;}
function ACh(a,b,c){BY(a);a.c8=b;a.eO=c;a.bc=c.dP;}
function AIj(a,b,c,d){var e,f;e=FZ(d,a.bc);DF(d,a.bc,b);f=a.c8.c(b,c,d);if(f>=0)return f;DF(d,a.bc,e);return (-1);}
function AOQ(a,b,c,d){var e;e=a.c8.cq(b,c,d);if(e>=0)DF(d,a.bc,e);return e;}
function ASz(a,b,c,d,e){var f;f=a.c8.ct(b,c,d,e);if(f>=0)DF(e,a.bc,f);return f;}
function AOm(a,b){return a.c8.bY(b);}
function AQP(a){var b;b=new Ol;ACh(b,a.c8,a.eO);a.d=b;return b;}
function AVa(a){var b;a.cm=1;b=a.eO;if(b!==null&&!b.cm)JQ(b);b=a.c8;if(b!==null&&!b.cm){b=b.fR();if(b!==null){a.c8.cm=1;a.c8=b;}a.c8.eJ();}}
var Hd=G();
function X(){var a=this;Hd.call(a);a.bh=0;a.cl=0;a.P=null;a.kv=null;a.lg=null;a.Q=0;}
var A2B=null;function Qj(){Qj=Bq(X);AKy();}
function Bw(a){var b;Qj();b=new Zf;b.C=BL(64);a.P=b;}
function AJj(a){return null;}
function AIP(a){return a.P;}
function AEr(a){var b,c,d,e,f;if(!a.cl)b=HL(a.P,0)>=2048?0:1;else{a:{c=a.P;b=0;d=c.bt;if(b<d){e=c.C.data;f=(e[0]^(-1))>>>0|0;if(f)b=IW(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+IW(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AMP(a){return a.Q;}
function ATn(a){return a;}
function ABk(a){var b,c;if(a.lg===null){b=a.fh();c=new Yn;c.AH=a;c.pu=b;Bw(c);a.lg=c;EG(c,a.cl);}return a.lg;}
function H3(a){var b,c;if(a.kv===null){b=a.fh();c=new Yl;c.Ac=a;c.vE=b;c.wq=a;Bw(c);a.kv=c;EG(c,a.bh);a.kv.Q=a.Q;}return a.kv;}
function AU5(a){return 0;}
function EG(a,b){var c;c=a.bh;if(c^b){a.bh=c?0:1;a.cl=a.cl?0:1;}if(!a.Q)a.Q=1;return a;}
function ALQ(a){return a.bh;}
function K6(b,c){Qj();return b.l(c);}
function IU(b,c){var d,e;Qj();if(b.dv()!==null&&c.dv()!==null){b=b.dv();c=c.dv();d=Bc(b.C.data.length,c.C.data.length);e=0;a:{while(e<d){if(b.C.data[e]&c.C.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function TL(b,c){var d,e,f;Qj();d=0;while(true){ASd();e=A2C.data;if(d>=e.length){f=new J2;Bk(f,C(31));f.A4=C(31);f.AL=b;K(f);}e=e[d].data;if(Bl(b,e[0]))break;d=d+1|0;}return AFE(e[1],c);}
function AKy(){var b;b=new HA;ASd();A2B=b;}
function AB6(){var a=this;X.call(a);a.mH=0;a.o6=0;a.gV=0;a.mc=0;a.d8=0;a.fL=0;a.J=null;a.bD=null;}
function Dt(){var a=new AB6();AV1(a);return a;}
function AUe(a,b){var c=new AB6();AKm(c,a,b);return c;}
function AV1(a){Bw(a);a.J=AWh();}
function AKm(a,b,c){Bw(a);a.J=AWh();a.mH=b;a.o6=c;}
function CA(a,b){a:{if(a.mH){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.d8){Nm(a.J,H7(b&65535));break a;}Mn(a.J,H7(b&65535));break a;}if(a.o6&&b>128){a.gV=1;b=G4(G1(b));}}}if(!(!Ul(b)&&!QB(b))){if(a.mc)Nm(a.P,b-55296|0);else Mn(a.P,b-55296|0);}if(a.d8)Nm(a.J,b);else Mn(a.J,b);if(!a.Q&&M4(b))a.Q=1;return a;}
function AHo(a,b){var c,d,e;if(!a.Q&&b.Q)a.Q=1;if(a.mc){if(!b.cl)Gg(a.P,b.fh());else Df(a.P,b.fh());}else if(!b.cl)Gc(a.P,b.fh());else{FL(a.P,b.fh());Df(a.P,b.fh());a.cl=a.cl?0:1;a.mc=1;}if(!a.fL&&b.dv()!==null){if(a.d8){if(!b.bh)Gg(a.J,b.dv());else Df(a.J,b.dv());}else if(!b.bh)Gc(a.J,b.dv());else{FL(a.J,b.dv());Df(a.J,b.dv());a.bh=a.bh?0:1;a.d8=1;}}else{c=a.bh;d=a.bD;if(d!==null){if(!c){e=new Qa;e.yF=a;e.w3=c;e.v$=d;e.vY=b;Bw(e);a.bD=e;}else{e=new Qb;e.Bb=a;e.sM=c;e.ss=d;e.rH=b;Bw(e);a.bD=e;}}else{if(c&&!a.d8
&&M7(a.J)){d=new P9;d.zE=a;d.sE=b;Bw(d);a.bD=d;}else if(!c){d=new P7;d.lW=a;d.kX=c;d.qo=b;Bw(d);a.bD=d;}else{d=new P8;d.mU=a;d.k5=c;d.v4=b;Bw(d);a.bD=d;}a.fL=1;}}return a;}
function B1(a,b,c){var d,e,f,g,h;if(b>c){d=new BE;Y(d);K(d);}a:{b:{if(!a.mH){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CA(a,b);b=b+1|0;}}if(!a.d8)Iw(a.J,b,c+1|0);else{d=a.J;c=c+1|0;if(b>c){d=new BC;Y(d);K(d);}e=d.bt;if(b<e){f=Bc(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.C.data;h[g]=h[g]&(IQ(d,b)|Ii(d,f));}else{h=d.C.data;h[g]=h[g]&IQ(d,b);e=g+1|0;while(e<c){d.C.data[e]=0;e=e+1|0;}if(f&31){h=d.C.data;h[c]=h[c]&Ii(d,f);}}HD(d);}}}}return a;}
function AAR(a,b){var c,d,e;if(!a.Q&&b.Q)a.Q=1;if(b.gV)a.gV=1;c=a.cl;if(!(c^b.cl)){if(!c)Gc(a.P,b.P);else Df(a.P,b.P);}else if(c)Gg(a.P,b.P);else{FL(a.P,b.P);Df(a.P,b.P);a.cl=1;}if(!a.fL&&CY(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Gc(a.J,CY(b));else Df(a.J,CY(b));}else if(c)Gg(a.J,CY(b));else{FL(a.J,CY(b));Df(a.J,CY(b));a.bh=1;}}else{c=a.bh;d=a.bD;if(d!==null){if(!c){e=new PZ;e.ym=a;e.uY=c;e.v3=d;e.wG=b;Bw(e);a.bD=e;}else{e=new QR;e.yO=a;e.wA=c;e.oy=d;e.pe=b;Bw(e);a.bD=e;}}else{if(!a.d8&&M7(a.J)){if(!c){d=new P$;d.Bc
=a;d.rr=b;Bw(d);a.bD=d;}else{d=new P_;d.yR=a;d.wm=b;Bw(d);a.bD=d;}}else if(!c){d=new Qc;d.u$=a;d.s3=b;d.sw=c;Bw(d);a.bD=d;}else{d=new Qd;d.tr=a;d.tJ=b;d.tZ=c;Bw(d);a.bD=d;}a.fL=1;}}}
function YX(a,b){var c,d,e;if(!a.Q&&b.Q)a.Q=1;if(b.gV)a.gV=1;c=a.cl;if(!(c^b.cl)){if(!c)Df(a.P,b.P);else Gc(a.P,b.P);}else if(!c)Gg(a.P,b.P);else{FL(a.P,b.P);Df(a.P,b.P);a.cl=0;}if(!a.fL&&CY(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Df(a.J,CY(b));else Gc(a.J,CY(b));}else if(!c)Gg(a.J,CY(b));else{FL(a.J,CY(b));Df(a.J,CY(b));a.bh=0;}}else{c=a.bh;d=a.bD;if(d!==null){if(!c){e=new P1;e.yE=a;e.vb=c;e.ps=d;e.sJ=b;Bw(e);a.bD=e;}else{e=new P2;e.yZ=a;e.ui=c;e.oo=d;e.uW=b;Bw(e);a.bD=e;}}else{if(!a.d8&&M7(a.J)){if(!c){d=new PX;d.yT
=a;d.qY=b;Bw(d);a.bD=d;}else{d=new PY;d.A$=a;d.q7=b;Bw(d);a.bD=d;}}else if(!c){d=new P3;d.x3=a;d.wW=b;d.tA=c;Bw(d);a.bD=d;}else{d=new PW;d.ty=a;d.uu=b;d.sN=c;Bw(d);a.bD=d;}a.fL=1;}}}
function C3(a,b){var c;c=a.bD;if(c!==null)return a.bh^c.l(b);return a.bh^DA(a.J,b);}
function CY(a){if(!a.fL)return a.J;return null;}
function ALB(a){return a.P;}
function ATU(a){var b,c;if(a.bD!==null)return a;b=CY(a);c=new P0;c.ye=a;c.jo=b;Bw(c);return EG(c,a.bh);}
function APQ(a){var b,c,d;b=new M;O(b);c=HL(a.J,0);while(c>=0){IZ(b,GV(c));BI(b,124);c=HL(a.J,c+1|0);}d=b.M;if(d>0)Yb(b,d-1|0);return N(b);}
function ALU(a){return a.gV;}
function J2(){var a=this;Bv.call(a);a.A4=null;a.AL=null;}
function Ei(){BK.call(this);this.O=null;}
function Dj(a,b,c,d){LB(a,c);a.O=b;a.ip=d;}
function AV0(a){return a.O;}
function ASB(a,b){return !a.O.bY(b)&&!a.d.bY(b)?0:1;}
function AUg(a,b){return 1;}
function APc(a){var b;a.cm=1;b=a.d;if(b!==null&&!b.cm){b=b.fR();if(b!==null){a.d.cm=1;a.d=b;}a.d.eJ();}b=a.O;if(b!==null){if(!b.cm){b=b.fR();if(b!==null){a.O.cm=1;a.O=b;}a.O.eJ();}else if(b instanceof GY&&b.eO.lm)a.O=b.d;}}
function C5(){Ei.call(this);this.be=null;}
function AX2(a,b,c){var d=new C5();Fb(d,a,b,c);return d;}
function Fb(a,b,c,d){Dj(a,b,c,d);a.be=b;}
function AH0(a,b,c,d){var e,f;e=0;a:{while((b+a.be.b3()|0)<=d.y){f=a.be.bw(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.be.b3()|0;e=e+(-1)|0;}return f;}
function Fu(){C5.call(this);this.kn=null;}
function AW2(a,b,c,d){var e=new Fu();TU(e,a,b,c,d);return e;}
function TU(a,b,c,d,e){Fb(a,c,d,e);a.kn=b;}
function AI7(a,b,c,d){var e,f,g,h,i;e=a.kn;f=e.e8;g=e.e3;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.b3()|0)>d.y)break a;i=a.be.bw(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.be.b3()|0;h=h+(-1)|0;}return i;}if((b+a.be.b3()|0)>d.y){d.dA=1;return (-1);}i=a.be.bw(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CV=G(Ei);
function AIi(a,b,c,d){var e;if(!a.O.N(d))return a.d.c(b,c,d);e=a.O.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var EP=G(C5);
function AOZ(a,b,c,d){var e;e=a.O.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function AWj(a,b){a.d=b;a.O.T(b);}
var Yr=G(C5);
function AVE(a,b,c,d){while((b+a.be.b3()|0)<=d.y&&a.be.bw(b,c)>0){b=b+a.be.b3()|0;}return a.d.c(b,c,d);}
function APK(a,b,c,d){var e,f,g;e=a.d.cq(b,c,d);if(e<0)return (-1);f=e-a.be.b3()|0;while(f>=b&&a.be.bw(f,c)>0){g=f-a.be.b3()|0;e=f;f=g;}return e;}
function Bd(){var a=this;B.call(a);a.m1=null;a.lR=null;}
function AFE(a,b){if(!b&&a.m1===null)a.m1=a.F();else if(b&&a.lR===null)a.lR=EG(a.F(),1);if(b)return a.lR;return a.m1;}
var Dk=G(BE);
function Od(){var a=this;Hd.call(a);a.e8=0;a.e3=0;}
function APV(a){var b,c,d,e,f;b=a.e8;c=a.e3;d=c!=2147483647?Me(c):C(31);e=new M;O(e);BI(e,123);f=V(e,b);BI(f,44);BI(H(f,d),125);return N(e);}
var PL=G(BK);
function AN3(a,b,c,d){return b;}
function AQL(a,b){return 0;}
function Zf(){var a=this;B.call(a);a.C=null;a.bt=0;}
function AWh(){var a=new Zf();AJS(a);return a;}
function AJS(a){a.C=BL(0);}
function Mn(a,b){var c,d;c=b/32|0;if(b>=a.bt){I2(a,c+1|0);a.bt=b+1|0;}d=a.C.data;d[c]=d[c]|1<<(b%32|0);}
function Iw(a,b,c){var d,e,f,g,h;d=BF(b,c);if(d>0){e=new BC;Y(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bt){I2(a,f+1|0);a.bt=c;}if(d==f){g=a.C.data;g[d]=g[d]|Ii(a,b)&IQ(a,c);}else{g=a.C.data;g[d]=g[d]|Ii(a,b);h=d+1|0;while(h<f){a.C.data[h]=(-1);h=h+1|0;}if(c&31){g=a.C.data;g[f]=g[f]|IQ(a,c);}}}
function Ii(a,b){return (-1)<<(b%32|0);}
function IQ(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Nm(a,b){var c,d,e,f;c=b/32|0;d=a.C.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bt-1|0))HD(a);}}
function DA(a,b){var c,d;c=b/32|0;d=a.C.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function HL(a,b){var c,d,e,f;c=a.bt;if(b>=c)return (-1);d=b/32|0;e=a.C.data;f=e[d]>>>(b%32|0)|0;if(f)return IW(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+IW(e[f])|0;f=f+1|0;}return (-1);}
function I2(a,b){var c;c=a.C.data.length;if(c>=b)return;c=Be((b*3|0)/2|0,(c*2|0)+1|0);a.C=JE(a.C,c);}
function HD(a){var b,c,d;b=(a.bt+31|0)/32|0;a.bt=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Pb(a.C.data[c]);if(d<32)break;c=c+(-1)|0;a.bt=a.bt-32|0;}a.bt=a.bt-d|0;}}
function Df(a,b){var c,d,e,f;c=Bc(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&b.C.data[d];d=d+1|0;}while(true){f=a.C.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bt=Bc(a.bt,b.bt);HD(a);}
function Gg(a,b){var c,d,e;c=Bc(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&(b.C.data[d]^(-1));d=d+1|0;}HD(a);}
function Gc(a,b){var c,d,e;c=Be(a.bt,b.bt);a.bt=c;I2(a,(c+31|0)/32|0);c=Bc(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]|b.C.data[d];d=d+1|0;}}
function FL(a,b){var c,d,e;c=Be(a.bt,b.bt);a.bt=c;I2(a,(c+31|0)/32|0);c=Bc(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]^b.C.data[d];d=d+1|0;}HD(a);}
function M7(a){return a.bt?0:1;}
function NX(){var a=this;B0.call(a);a.q9=null;a.yd=0;}
function Sd(){var a=this;B0.call(a);a.np=null;a.mW=null;}
function AFa(a,b){var c=new Sd();AG8(c,a,b);return c;}
function AG8(a,b,c){BY(a);a.np=b;a.mW=c;}
function AIZ(a,b,c,d){var e,f,g,h,i;e=a.np.c(b,c,d);if(e<0)a:{f=a.mW;g=d.cV;e=d.y;h=b+1|0;e=BF(h,e);if(e>0){d.dA=1;e=(-1);}else{i=P(c,b);if(!f.q9.l(i))e=(-1);else{if(CI(i)){if(e<0&&C7(P(c,h))){e=(-1);break a;}}else if(C7(i)&&b>g&&CI(P(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AQv(a,b){a.d=b;a.mW.d=b;a.np.T(b);}
function AJF(a,b){return 1;}
function AJi(a,b){return 1;}
function DK(){var a=this;B0.call(a);a.dW=null;a.zx=0;}
function ANZ(a){var b=new DK();Wc(b,a);return b;}
function Wc(a,b){BY(a);a.dW=b.j3();a.zx=b.bh;}
function ALs(a,b,c,d){var e,f,g,h;e=d.y;if(b<e){f=b+1|0;g=P(c,b);if(a.l(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(HU(g,f)&&a.l(EH(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AL$(a,b){return a.dW.l(b);}
function AIU(a,b){if(b instanceof D5)return K6(a.dW,b.gl);if(b instanceof EB)return K6(a.dW,b.du);if(b instanceof DK)return IU(a.dW,b.dW);if(!(b instanceof Ev))return 1;return IU(a.dW,b.fx);}
function ANO(a){return a.dW;}
function ATd(a,b){a.d=b;}
function ALG(a,b){return 1;}
var JZ=G(DK);
function ANE(a,b){return a.dW.l(G4(G1(b)));}
function ABS(){var a=this;B4.call(a);a.rY=null;a.zd=0;}
function AMQ(a){var b=new ABS();AP3(b,a);return b;}
function AP3(a,b){DG(a);a.rY=b.j3();a.zd=b.bh;}
function AN4(a,b,c){return !a.rY.l(Fh(EO(P(c,b))))?(-1):1;}
function Ev(){var a=this;B4.call(a);a.fx=null;a.zU=0;}
function ATM(a){var b=new Ev();ARg(b,a);return b;}
function ARg(a,b){DG(a);a.fx=b.j3();a.zU=b.bh;}
function Nt(a,b,c){return !a.fx.l(P(c,b))?(-1):1;}
function AQO(a,b){if(b instanceof EB)return K6(a.fx,b.du);if(b instanceof Ev)return IU(a.fx,b.fx);if(!(b instanceof DK)){if(!(b instanceof D5))return 1;return 0;}return IU(a.fx,b.dW);}
function Qk(){var a=this;B0.call(a);a.hh=null;a.nb=null;a.kl=0;}
function ATY(a,b){var c=new Qk();AIk(c,a,b);return c;}
function AIk(a,b,c){BY(a);a.hh=b;a.kl=c;}
function AOX(a,b){a.d=b;}
function Sq(a){if(a.nb===null)a.nb=Gj(a.hh);return a.nb;}
function AHO(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.y;f=BL(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?Eq([k,l]):Eq([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.kl;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.hh.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.kl==3){k=f[0];m=a.hh.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.kl==2){b=f[0];m=a.hh.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AJv(a,b){return b instanceof Qk&&!Bl(Sq(b),Sq(a))?0:1;}
function ATX(a,b){return 1;}
function EB(){B4.call(this);this.du=0;}
function ACt(a){var b=new EB();ARn(b,a);return b;}
function ARn(a,b){DG(a);a.du=b;}
function ANK(a){return 1;}
function AML(a,b,c){return a.du!=P(c,b)?(-1):1;}
function ALp(a,b,c,d){var e,f,g;if(!(c instanceof BA))return Ia(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=G$(c,a.du,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ANS(a,b,c,d,e){var f;if(!(d instanceof BA))return Io(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Gt(d,a.du,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ATQ(a,b){if(b instanceof EB)return b.du!=a.du?0:1;if(!(b instanceof Ev)){if(b instanceof DK)return b.l(a.du);if(!(b instanceof D5))return 1;return 0;}return Nt(b,0,Zg(a.du))<=0?0:1;}
function AGN(){B4.call(this);this.n9=0;}
function ARJ(a){var b=new AGN();APE(b,a);return b;}
function APE(a,b){DG(a);a.n9=Fh(EO(b));}
function AHE(a,b,c){return a.n9!=Fh(EO(P(c,b)))?(-1):1;}
function AAT(){var a=this;B4.call(a);a.wM=0;a.pp=0;}
function AJ0(a){var b=new AAT();AR_(b,a);return b;}
function AR_(a,b){DG(a);a.wM=b;a.pp=H7(b);}
function AH9(a,b,c){return a.wM!=P(c,b)&&a.pp!=P(c,b)?(-1):1;}
function FD(){var a=this;B0.call(a);a.ic=0;a.lH=null;a.kY=null;a.kU=0;}
function AYP(a,b){var c=new FD();Pz(c,a,b);return c;}
function Pz(a,b,c){BY(a);a.ic=1;a.kY=b;a.kU=c;}
function AU_(a,b){a.d=b;}
function AQw(a,b,c,d){var e,f,g,h,i,j,k,l;e=BL(4);f=d.y;if(b>=f)return (-1);g=Ll(a,b,c,f);h=b+a.ic|0;i=AGm(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DB(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Ll(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AGm(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.ic|0;if(h>=f){b=k;break a;}g=Ll(a,h,c,f);b=k;}}}if(b!=a.kU)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.kY.data[g])break;g=g+1|0;}return (-1);}
function YV(a){var b,c;if(a.lH===null){b=new M;O(b);c=0;while(c<a.kU){IZ(b,GV(a.kY.data[c]));c=c+1|0;}a.lH=N(b);}return a.lH;}
function Ll(a,b,c,d){var e,f,g;a.ic=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(HU(e,f)){g=BW(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CI(g[0])&&C7(g[1])?EH(g[0],g[1]):g[0];a.ic=2;}}return e;}
function AN5(a,b){return b instanceof FD&&!Bl(YV(b),YV(a))?0:1;}
function ARF(a,b){return 1;}
var ZE=G(FD);
var VF=G(FD);
var AAG=G(CV);
function AKr(a,b,c,d){var e;while(true){e=a.O.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Rq=G(CV);
function APw(a,b,c,d){var e;e=a.O.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.O.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var Ge=G(CV);
function ATa(a,b,c,d){var e;if(!a.O.N(d))return a.d.c(b,c,d);e=a.O.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AUt(a,b){a.d=b;a.O.T(b);}
var Q5=G(Ge);
function ANN(a,b,c,d){var e;e=a.O.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function APX(a,b){a.d=b;}
function FB(){var a=this;CV.call(a);a.gu=null;a.dF=0;}
function A2D(a,b,c,d,e){var f=new FB();JX(f,a,b,c,d,e);return f;}
function JX(a,b,c,d,e,f){Dj(a,c,d,e);a.gu=b;a.dF=f;}
function AWa(a,b,c,d){var e,f;e=N2(d,a.dF);if(!a.O.N(d))return a.d.c(b,c,d);if(e>=a.gu.e3)return a.d.c(b,c,d);f=a.dF;e=e+1|0;Er(d,f,e);f=a.O.c(b,c,d);if(f>=0){Er(d,a.dF,0);return f;}f=a.dF;e=e+(-1)|0;Er(d,f,e);if(e>=a.gu.e8)return a.d.c(b,c,d);Er(d,a.dF,0);return (-1);}
var Ov=G(FB);
function ANc(a,b,c,d){var e,f,g;e=0;f=a.gu.e3;a:{while(true){g=a.O.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gu.e8)return (-1);return a.d.c(b,c,d);}
var Tl=G(CV);
function AVk(a,b,c,d){var e;if(!a.O.N(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.O.c(b,c,d);}
var Sp=G(Ge);
function AJI(a,b,c,d){var e;if(!a.O.N(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.O.c(b,c,d);return e;}
var WF=G(FB);
function AIF(a,b,c,d){var e,f,g;e=N2(d,a.dF);if(!a.O.N(d))return a.d.c(b,c,d);f=a.gu;if(e>=f.e3){Er(d,a.dF,0);return a.d.c(b,c,d);}if(e<f.e8){Er(d,a.dF,e+1|0);g=a.O.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Er(d,a.dF,0);return g;}Er(d,a.dF,e+1|0);g=a.O.c(b,c,d);}return g;}
var Tn=G(Ei);
function AVW(a,b,c,d){var e;e=d.y;if(e>b)return a.d.ct(b,e,c,d);return a.d.c(b,c,d);}
function ATr(a,b,c,d){var e;e=d.y;if(a.d.ct(b,e,c,d)>=0)return b;return (-1);}
function PV(){Ei.call(this);this.lP=null;}
function AQQ(a,b,c,d){var e,f;e=d.y;f=WH(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.ct(b,e,c,d);return a.d.c(b,c,d);}
function AHS(a,b,c,d){var e,f,g,h;e=d.y;f=a.d.cq(b,c,d);if(f<0)return (-1);g=WH(a,f,e,c);if(g>=0)e=g;g=Be(f,a.d.ct(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.lP.ij(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function WH(a,b,c,d){while(true){if(b>=c)return (-1);if(a.lP.ij(P(d,b)))break;b=b+1|0;}return b;}
var E5=G();
var A2E=null;var A2F=null;function Q7(b){var c;if(!(b&1)){c=A2F;if(c!==null)return c;c=new W$;A2F=c;return c;}c=A2E;if(c!==null)return c;c=new W9;A2E=c;return c;}
var AAH=G(C5);
function AIG(a,b,c,d){var e;a:{while(true){if((b+a.be.b3()|0)>d.y)break a;e=a.be.bw(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Yk=G(EP);
function APs(a,b,c,d){var e;if((b+a.be.b3()|0)<=d.y){e=a.be.bw(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var QK=G(Fu);
function ASD(a,b,c,d){var e,f,g,h,i;e=a.kn;f=e.e8;g=e.e3;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.b3()|0)>d.y)break a;i=a.be.bw(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.be.b3()|0)>d.y){d.dA=1;return (-1);}i=a.be.bw(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Sk=G(C5);
function AQJ(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.be.b3()|0)<=d.y){e=a.be.bw(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var VU=G(EP);
function AIS(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.O.c(b,c,d);}
var S6=G(Fu);
function ASZ(a,b,c,d){var e,f,g,h,i,j;e=a.kn;f=e.e8;g=e.e3;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.be.b3()|0)<=d.y){i=a.be.bw(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.b3()|0)>d.y){d.dA=1;return (-1);}j=a.be.bw(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Lh=G(BK);
function AOs(a,b,c,d){if(b&&!(d.fM&&b==d.cV))return (-1);return a.d.c(b,c,d);}
function ANn(a,b){return 0;}
function ACG(){BK.call(this);this.wa=0;}
function ATL(a){var b=new ACG();ANH(b,a);return b;}
function ANH(a,b){BY(a);a.wa=b;}
function AJf(a,b,c,d){var e,f,g;e=b<d.y?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.jS?0:d.cV;return (e!=32&&!Ss(a,e,b,g,c)?0:1)^(f!=32&&!Ss(a,f,b-1|0,g,c)?0:1)^a.wa?(-1):a.d.c(b,c,d);}
function AJr(a,b){return 0;}
function Ss(a,b,c,d,e){var f;if(!Kl(b)&&b!=95){a:{if(Cz(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Kl(f))return 0;if(Cz(f)!=6)return 1;}}return 1;}return 0;}
var PQ=G(BK);
function ANG(a,b,c,d){if(b!=d.it)return (-1);return a.d.c(b,c,d);}
function AV6(a,b){return 0;}
function Zl(){BK.call(this);this.gE=0;}
function AYg(a){var b=new Zl();AF_(b,a);return b;}
function AF_(a,b){BY(a);a.gE=b;}
function ARr(a,b,c,d){var e,f,g;e=!d.fM?J(c):d.y;if(b>=e){BP(d,a.gE,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BP(d,a.gE,0);return a.d.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BP(d,a.gE,0);return a.d.c(b,c,d);}
function AKf(a,b){var c;c=!Ds(b,a.gE)?0:1;BP(b,a.gE,(-1));return c;}
var YQ=G(BK);
function AQr(a,b,c,d){if(b<(d.jS?J(c):d.y))return (-1);d.dA=1;d.Am=1;return a.d.c(b,c,d);}
function AHC(a,b){return 0;}
function OJ(){BK.call(this);this.sT=null;}
function AJ7(a,b,c,d){a:{if(b!=d.y){if(!b)break a;if(d.fM&&b==d.cV)break a;if(a.sT.um(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AMl(a,b){return 0;}
var AGw=G(B0);
function AYA(){var a=new AGw();AQb(a);return a;}
function AQb(a){BY(a);}
function AVr(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dA=1;return (-1);}g=P(c,b);if(CI(g)){h=b+2|0;if(h<=e&&HU(g,P(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AJx(a,b){a.d=b;}
function AP4(a){return (-2147483602);}
function AJw(a,b){return 1;}
function AB4(){B0.call(this);this.ml=null;}
function AX9(a){var b=new AB4();AKd(b,a);return b;}
function AKd(a,b){BY(a);a.ml=b;}
function AQf(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dA=1;return (-1);}g=P(c,b);if(CI(g)){b=b+2|0;if(b<=e){h=P(c,f);if(HU(g,h))return a.ml.ij(EH(g,h))?(-1):a.d.c(b,c,d);}}return a.ml.ij(g)?(-1):a.d.c(f,c,d);}
function ASp(a,b){a.d=b;}
function AHx(a){return (-2147483602);}
function AVM(a,b){return 1;}
function AGj(){BK.call(this);this.h4=0;}
function AXz(a){var b=new AGj();AMg(b,a);return b;}
function AMg(a,b){BY(a);a.h4=b;}
function AN$(a,b,c,d){var e;e=!d.fM?J(c):d.y;if(b>=e){BP(d,a.h4,0);return a.d.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BP(d,a.h4,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AMf(a,b){var c;c=!Ds(b,a.h4)?0:1;BP(b,a.h4,(-1));return c;}
function AEv(){BK.call(this);this.ib=0;}
function AXh(a){var b=new AEv();AMR(b,a);return b;}
function AMR(a,b){BY(a);a.ib=b;}
function AQo(a,b,c,d){if((!d.fM?J(c)-b|0:d.y-b|0)<=0){BP(d,a.ib,0);return a.d.c(b,c,d);}if(P(c,b)!=10)return (-1);BP(d,a.ib,1);return a.d.c(b+1|0,c,d);}
function AL6(a,b){var c;c=!Ds(b,a.ib)?0:1;BP(b,a.ib,(-1));return c;}
function AAQ(){BK.call(this);this.f3=0;}
function AWB(a){var b=new AAQ();AWd(b,a);return b;}
function AWd(a,b){BY(a);a.f3=b;}
function ANf(a,b,c,d){var e,f,g;e=!d.fM?J(c)-b|0:d.y-b|0;if(!e){BP(d,a.f3,0);return a.d.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BP(d,a.f3,0);return a.d.c(b,c,d);case 13:if(g!=10){BP(d,a.f3,0);return a.d.c(b,c,d);}BP(d,a.f3,0);return a.d.c(b,c,d);default:}return (-1);}
function AKj(a,b){var c;c=!Ds(b,a.f3)?0:1;BP(b,a.f3,(-1));return c;}
function HB(){var a=this;B0.call(a);a.oY=0;a.hb=0;}
function AYJ(a,b){var c=new HB();Qz(c,a,b);return c;}
function Qz(a,b,c){BY(a);a.oY=b;a.hb=c;}
function AIL(a,b,c,d){var e,f,g,h;e=GC(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BP(d,a.hb,J(e));return a.d.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&H7(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ARC(a,b){a.d=b;}
function GC(a,b){var c,d;c=a.oY;d=FZ(b,c);c=I9(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.mo)?Ch(b.mo,d,c):null;}
function AR1(a,b){var c;c=!Ds(b,a.hb)?0:1;BP(b,a.hb,(-1));return c;}
var AGp=G(HB);
function AWG(a,b){var c=new AGp();AUi(c,a,b);return c;}
function AUi(a,b,c){Qz(a,b,c);}
function AKq(a,b,c,d){var e,f;e=GC(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=!Wb(c,e,b)?(-1):J(e);if(f<0)return (-1);BP(d,a.hb,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AT6(a,b,c,d){var e,f;e=GC(a,d);f=d.cV;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=ACF(c,e,b);if(b<0)return (-1);if(a.d.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AIs(a,b,c,d,e){var f,g;f=GC(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=RB(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function APj(a,b){return 1;}
var ADx=G(HB);
function AXi(a,b){var c=new ADx();AMc(c,a,b);return c;}
function AMc(a,b,c){Qz(a,b,c);}
function AOK(a,b,c,d){var e,f;e=GC(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BP(d,a.hb,J(e));return a.d.c(b+J(e)|0,c,d);}if(Fh(EO(P(e,f)))!=Fh(EO(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var PK=G(GK);
function ALX(a,b,c,d,e){Oi(a,b,c,d,e);return a;}
function AJl(a,b,c,d){Zu(a,b,c,d);return a;}
function AJR(a,b){Ku(a,b);}
function ATv(a,b,c){ZI(a,b,c);return a;}
function Tq(){var a=this;B4.call(a);a.cz=null;a.lK=null;a.my=null;}
function AKL(a,b,c){return !Lg(a,c,b)?(-1):a.bK;}
function AJc(a,b,c,d){var e,f,g;e=d.y;while(true){if(b>e)return (-1);f=P(a.cz,a.bK-1|0);a:{while(true){g=a.bK;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&Lg(a,c,b))break;b=b+Ur(a.lK,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bK|0,c,d)>=0)break;b=b+1|0;}return b;}
function AMk(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cz,0);g=(J(d)-c|0)-a.bK|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&Lg(a,d,c))break;c=c-Ur(a.my,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bK|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AMX(a,b){var c;if(b instanceof EB)return b.du!=P(a.cz,0)?0:1;if(b instanceof Ev)return Nt(b,0,Ch(a.cz,0,1))<=0?0:1;if(!(b instanceof DK)){if(!(b instanceof D5))return 1;return J(a.cz)>1&&b.gl==EH(P(a.cz,0),P(a.cz,1))?1:0;}a:{b:{b=b;if(!b.l(P(a.cz,0))){if(J(a.cz)<=1)break b;if(!b.l(EH(P(a.cz,0),P(a.cz,1))))break b;}c=1;break a;}c=0;}return c;}
function Lg(a,b,c){var d;d=0;while(d<a.bK){if(P(b,d+c|0)!=P(a.cz,d))return 0;d=d+1|0;}return 1;}
function AAP(){B4.call(this);this.jX=null;}
function AYO(a){var b=new AAP();ATR(b,a);return b;}
function ATR(a,b){var c,d,e;DG(a);c=new M;O(c);d=0;while(true){e=BF(d,b.M);if(e>=0){a.jX=N(c);a.bK=c.M;return;}if(d<0)break;if(e>=0)break;BI(c,Fh(EO(b.B.data[d])));d=d+1|0;}b=new BC;Y(b);K(b);}
function AOS(a,b,c){var d;d=0;while(true){if(d>=J(a.jX))return J(a.jX);if(P(a.jX,d)!=Fh(EO(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OC(){B4.call(this);this.h0=null;}
function ASG(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.h0))return J(a.h0);e=P(a.h0,d);f=b+d|0;if(e!=P(c,f)&&H7(P(a.h0,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var HA=G();
var A2G=null;var A2H=null;var A2C=null;function ASd(){ASd=Bq(HA);ALa();}
function ALa(){A2G=AYq();A2H=AXr();A2C=I($rt_arraycls(B),[I(B,[C(438),AYK()]),I(B,[C(439),AWy()]),I(B,[C(440),AYn()]),I(B,[C(441),AYv()]),I(B,[C(442),A2H]),I(B,[C(443),AXE()]),I(B,[C(444),AXp()]),I(B,[C(445),AWJ()]),I(B,[C(446),AWF()]),I(B,[C(447),AWO()]),I(B,[C(448),AW4()]),I(B,[C(449),AWM()]),I(B,[C(450),AX1()]),I(B,[C(451),AWt()]),I(B,[C(452),AYr()]),I(B,[C(453),AW3()]),I(B,[C(454),AXC()]),I(B,[C(455),AW1()]),I(B,[C(456),AXD()]),I(B,[C(457),AWR()]),I(B,[C(458),AYz()]),I(B,[C(459),AWV()]),I(B,[C(460),AXI()]),
I(B,[C(461),AYl()]),I(B,[C(462),AYh()]),I(B,[C(463),AYw()]),I(B,[C(464),AWQ()]),I(B,[C(465),AX7()]),I(B,[C(466),A2G]),I(B,[C(467),AXP()]),I(B,[C(468),AWK()]),I(B,[C(469),A2G]),I(B,[C(470),AWq()]),I(B,[C(471),A2H]),I(B,[C(472),AXa()]),I(B,[C(473),Q(0,127)]),I(B,[C(474),Q(128,255)]),I(B,[C(475),Q(256,383)]),I(B,[C(476),Q(384,591)]),I(B,[C(477),Q(592,687)]),I(B,[C(478),Q(688,767)]),I(B,[C(479),Q(768,879)]),I(B,[C(480),Q(880,1023)]),I(B,[C(481),Q(1024,1279)]),I(B,[C(482),Q(1280,1327)]),I(B,[C(483),Q(1328,1423)]),
I(B,[C(484),Q(1424,1535)]),I(B,[C(485),Q(1536,1791)]),I(B,[C(486),Q(1792,1871)]),I(B,[C(487),Q(1872,1919)]),I(B,[C(488),Q(1920,1983)]),I(B,[C(489),Q(2304,2431)]),I(B,[C(490),Q(2432,2559)]),I(B,[C(491),Q(2560,2687)]),I(B,[C(492),Q(2688,2815)]),I(B,[C(493),Q(2816,2943)]),I(B,[C(494),Q(2944,3071)]),I(B,[C(495),Q(3072,3199)]),I(B,[C(496),Q(3200,3327)]),I(B,[C(497),Q(3328,3455)]),I(B,[C(498),Q(3456,3583)]),I(B,[C(499),Q(3584,3711)]),I(B,[C(500),Q(3712,3839)]),I(B,[C(501),Q(3840,4095)]),I(B,[C(502),Q(4096,4255)]),
I(B,[C(503),Q(4256,4351)]),I(B,[C(504),Q(4352,4607)]),I(B,[C(505),Q(4608,4991)]),I(B,[C(506),Q(4992,5023)]),I(B,[C(507),Q(5024,5119)]),I(B,[C(508),Q(5120,5759)]),I(B,[C(509),Q(5760,5791)]),I(B,[C(510),Q(5792,5887)]),I(B,[C(511),Q(5888,5919)]),I(B,[C(512),Q(5920,5951)]),I(B,[C(513),Q(5952,5983)]),I(B,[C(514),Q(5984,6015)]),I(B,[C(515),Q(6016,6143)]),I(B,[C(516),Q(6144,6319)]),I(B,[C(517),Q(6400,6479)]),I(B,[C(518),Q(6480,6527)]),I(B,[C(519),Q(6528,6623)]),I(B,[C(520),Q(6624,6655)]),I(B,[C(521),Q(6656,6687)]),
I(B,[C(522),Q(7424,7551)]),I(B,[C(523),Q(7552,7615)]),I(B,[C(524),Q(7616,7679)]),I(B,[C(525),Q(7680,7935)]),I(B,[C(526),Q(7936,8191)]),I(B,[C(527),Q(8192,8303)]),I(B,[C(528),Q(8304,8351)]),I(B,[C(529),Q(8352,8399)]),I(B,[C(530),Q(8400,8447)]),I(B,[C(531),Q(8448,8527)]),I(B,[C(532),Q(8528,8591)]),I(B,[C(533),Q(8592,8703)]),I(B,[C(534),Q(8704,8959)]),I(B,[C(535),Q(8960,9215)]),I(B,[C(536),Q(9216,9279)]),I(B,[C(537),Q(9280,9311)]),I(B,[C(538),Q(9312,9471)]),I(B,[C(539),Q(9472,9599)]),I(B,[C(540),Q(9600,9631)]),
I(B,[C(541),Q(9632,9727)]),I(B,[C(542),Q(9728,9983)]),I(B,[C(543),Q(9984,10175)]),I(B,[C(544),Q(10176,10223)]),I(B,[C(545),Q(10224,10239)]),I(B,[C(546),Q(10240,10495)]),I(B,[C(547),Q(10496,10623)]),I(B,[C(548),Q(10624,10751)]),I(B,[C(549),Q(10752,11007)]),I(B,[C(550),Q(11008,11263)]),I(B,[C(551),Q(11264,11359)]),I(B,[C(552),Q(11392,11519)]),I(B,[C(553),Q(11520,11567)]),I(B,[C(554),Q(11568,11647)]),I(B,[C(555),Q(11648,11743)]),I(B,[C(556),Q(11776,11903)]),I(B,[C(557),Q(11904,12031)]),I(B,[C(558),Q(12032,12255)]),
I(B,[C(559),Q(12272,12287)]),I(B,[C(560),Q(12288,12351)]),I(B,[C(561),Q(12352,12447)]),I(B,[C(562),Q(12448,12543)]),I(B,[C(563),Q(12544,12591)]),I(B,[C(564),Q(12592,12687)]),I(B,[C(565),Q(12688,12703)]),I(B,[C(566),Q(12704,12735)]),I(B,[C(567),Q(12736,12783)]),I(B,[C(568),Q(12784,12799)]),I(B,[C(569),Q(12800,13055)]),I(B,[C(570),Q(13056,13311)]),I(B,[C(571),Q(13312,19893)]),I(B,[C(572),Q(19904,19967)]),I(B,[C(573),Q(19968,40959)]),I(B,[C(574),Q(40960,42127)]),I(B,[C(575),Q(42128,42191)]),I(B,[C(576),Q(42752,
42783)]),I(B,[C(577),Q(43008,43055)]),I(B,[C(578),Q(44032,55203)]),I(B,[C(579),Q(55296,56191)]),I(B,[C(580),Q(56192,56319)]),I(B,[C(581),Q(56320,57343)]),I(B,[C(582),Q(57344,63743)]),I(B,[C(583),Q(63744,64255)]),I(B,[C(584),Q(64256,64335)]),I(B,[C(585),Q(64336,65023)]),I(B,[C(586),Q(65024,65039)]),I(B,[C(587),Q(65040,65055)]),I(B,[C(588),Q(65056,65071)]),I(B,[C(589),Q(65072,65103)]),I(B,[C(590),Q(65104,65135)]),I(B,[C(591),Q(65136,65279)]),I(B,[C(592),Q(65280,65519)]),I(B,[C(593),Q(0,1114111)]),I(B,[C(594),
AWN()]),I(B,[C(595),BS(0,1)]),I(B,[C(596),Jp(62,1)]),I(B,[C(597),BS(1,1)]),I(B,[C(598),BS(2,1)]),I(B,[C(599),BS(3,0)]),I(B,[C(600),BS(4,0)]),I(B,[C(601),BS(5,1)]),I(B,[C(602),Jp(448,1)]),I(B,[C(603),BS(6,1)]),I(B,[C(604),BS(7,0)]),I(B,[C(605),BS(8,1)]),I(B,[C(606),Jp(3584,1)]),I(B,[C(607),BS(9,1)]),I(B,[C(608),BS(10,1)]),I(B,[C(609),BS(11,1)]),I(B,[C(610),Jp(28672,0)]),I(B,[C(611),BS(12,0)]),I(B,[C(612),BS(13,0)]),I(B,[C(613),BS(14,0)]),I(B,[C(614),AXk(983040,1,1)]),I(B,[C(615),BS(15,0)]),I(B,[C(616),BS(16,
1)]),I(B,[C(617),BS(18,1)]),I(B,[C(618),AXw(19,0,1)]),I(B,[C(619),Jp(1643118592,1)]),I(B,[C(620),BS(20,0)]),I(B,[C(621),BS(21,0)]),I(B,[C(622),BS(22,0)]),I(B,[C(623),BS(23,0)]),I(B,[C(624),BS(24,1)]),I(B,[C(625),Jp(2113929216,1)]),I(B,[C(626),BS(25,1)]),I(B,[C(627),BS(26,0)]),I(B,[C(628),BS(27,0)]),I(B,[C(629),BS(28,1)]),I(B,[C(630),BS(29,0)]),I(B,[C(631),BS(30,0)])]);}
function NC(){B4.call(this);this.sk=0;}
function ASN(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.sk!=G4(G1(EH(e,d)))?(-1):2;}
function LQ(){B0.call(this);this.gS=0;}
function AQa(a){var b=new LQ();AJN(b,a);return b;}
function AJN(a,b){BY(a);a.gS=b;}
function AQG(a,b){a.d=b;}
function AKg(a,b,c,d){var e,f;e=b+1|0;if(e>d.y){d.dA=1;return (-1);}f=P(c,b);if(b>d.cV&&CI(P(c,b-1|0)))return (-1);if(a.gS!=f)return (-1);return a.d.c(e,c,d);}
function AMU(a,b,c,d){var e,f,g,h;if(!(c instanceof BA))return Ia(a,b,c,d);e=d.cV;f=d.y;while(true){if(b>=f)return (-1);g=G$(c,a.gS,b);if(g<0)return (-1);if(g>e&&CI(P(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AKU(a,b,c,d,e){var f,g;if(!(d instanceof BA))return Io(a,b,c,d,e);f=e.cV;a:{while(true){if(c<b)return (-1);g=Gt(d,a.gS,c);if(g<0)break a;if(g<b)break a;if(g>f&&CI(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AIq(a,b){if(b instanceof EB)return 0;if(b instanceof Ev)return 0;if(b instanceof DK)return 0;if(b instanceof D5)return 0;if(b instanceof L9)return 0;if(!(b instanceof LQ))return 1;return b.gS!=a.gS?0:1;}
function ATD(a,b){return 1;}
function L9(){B0.call(this);this.gs=0;}
function ANh(a){var b=new L9();AQi(b,a);return b;}
function AQi(a,b){BY(a);a.gs=b;}
function AJQ(a,b){a.d=b;}
function AHY(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;g=BF(f,e);if(g>0){d.dA=1;return (-1);}h=P(c,b);if(g<0&&C7(P(c,f)))return (-1);if(a.gs!=h)return (-1);return a.d.c(f,c,d);}
function AQ1(a,b,c,d){var e,f;if(!(c instanceof BA))return Ia(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=G$(c,a.gs,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C7(P(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function ASE(a,b,c,d,e){var f,g;if(!(d instanceof BA))return Io(a,b,c,d,e);f=e.y;a:{while(true){if(c<b)return (-1);g=Gt(d,a.gs,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C7(P(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKM(a,b){if(b instanceof EB)return 0;if(b instanceof Ev)return 0;if(b instanceof DK)return 0;if(b instanceof D5)return 0;if(b instanceof LQ)return 0;if(!(b instanceof L9))return 1;return b.gs!=a.gs?0:1;}
function ARc(a,b){return 1;}
function D5(){var a=this;B4.call(a);a.kM=0;a.jj=0;a.gl=0;}
function AR2(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.kM==e&&a.jj==d?2:(-1);}
function APR(a,b,c,d){var e,f;if(!(c instanceof BA))return Ia(a,b,c,d);e=d.y;while(b<e){b=G$(c,a.kM,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.jj==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AJP(a,b,c,d,e){var f;if(!(d instanceof BA))return Io(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Gt(d,a.jj,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kM==P(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ARK(a,b){if(b instanceof D5)return b.gl!=a.gl?0:1;if(b instanceof DK)return b.l(a.gl);if(b instanceof EB)return 0;if(!(b instanceof Ev))return 1;return 0;}
var W9=G(E5);
function AJ1(a,b){return b!=10?0:1;}
function ARS(a,b,c){return b!=10?0:1;}
var W$=G(E5);
function AS1(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AUX(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AFq(){var a=this;B.call(a);a.nS=null;a.k4=null;a.hC=0;a.xE=0;}
function AP2(a){var b=new AFq();ANF(b,a);return b;}
function ANF(a,b){var c,d;while(true){c=a.hC;if(b<c)break;a.hC=c<<1|1;}d=c<<1|1;a.hC=d;d=d+1|0;a.nS=BL(d);a.k4=BL(d);a.xE=b;}
function S8(a,b,c){var d,e,f,g;d=0;e=a.hC;f=b&e;while(true){g=a.nS.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.k4.data[f]=c;}
function Ur(a,b){var c,d,e,f;c=a.hC;d=b&c;e=0;while(true){f=a.nS.data[d];if(!f)break;if(f==b)return a.k4.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xE;}
var AA9=G();
var LM=G(Bd);
function AYq(){var a=new LM();ANd(a);return a;}
function ANd(a){}
function ADG(a){return CA(B1(Dt(),9,13),32);}
var KQ=G(Bd);
function AXr(){var a=new KQ();ATz(a);return a;}
function ATz(a){}
function AEn(a){return B1(Dt(),48,57);}
var AFj=G(Bd);
function AYK(){var a=new AFj();AMv(a);return a;}
function AMv(a){}
function ASt(a){return B1(Dt(),97,122);}
var AFP=G(Bd);
function AWy(){var a=new AFP();ANJ(a);return a;}
function ANJ(a){}
function ATF(a){return B1(Dt(),65,90);}
var AFT=G(Bd);
function AYn(){var a=new AFT();AJd(a);return a;}
function AJd(a){}
function ALt(a){return B1(Dt(),0,127);}
var LG=G(Bd);
function AYv(){var a=new LG();AKt(a);return a;}
function AKt(a){}
function AB8(a){return B1(B1(Dt(),97,122),65,90);}
var Ml=G(LG);
function AXE(){var a=new Ml();ANk(a);return a;}
function ANk(a){}
function AC7(a){return B1(AB8(a),48,57);}
var AHn=G(Bd);
function AXp(){var a=new AHn();APy(a);return a;}
function APy(a){}
function AMT(a){return B1(B1(B1(Dt(),33,64),91,96),123,126);}
var No=G(Ml);
function AWJ(){var a=new No();ARw(a);return a;}
function ARw(a){}
function AAN(a){return B1(B1(B1(AC7(a),33,64),91,96),123,126);}
var ADY=G(No);
function AWF(){var a=new ADY();ATm(a);return a;}
function ATm(a){}
function APd(a){return CA(AAN(a),32);}
var AEh=G(Bd);
function AWO(){var a=new AEh();ASI(a);return a;}
function ASI(a){}
function AKF(a){return CA(CA(Dt(),32),9);}
var ACw=G(Bd);
function AW4(){var a=new ACw();AUM(a);return a;}
function AUM(a){}
function APa(a){return CA(B1(Dt(),0,31),127);}
var ACg=G(Bd);
function AWM(){var a=new ACg();AJq(a);return a;}
function AJq(a){}
function AU4(a){return B1(B1(B1(Dt(),48,57),97,102),65,70);}
var AFY=G(Bd);
function AX1(){var a=new AFY();AI5(a);return a;}
function AI5(a){}
function AP0(a){var b;b=new UU;b.zw=a;Bw(b);b.Q=1;return b;}
var AHw=G(Bd);
function AWt(){var a=new AHw();ARO(a);return a;}
function ARO(a){}
function AHQ(a){var b;b=new NQ;b.zG=a;Bw(b);b.Q=1;return b;}
var AFr=G(Bd);
function AYr(){var a=new AFr();AJe(a);return a;}
function AJe(a){}
function ANi(a){var b;b=new TH;b.za=a;Bw(b);return b;}
var AFb=G(Bd);
function AW3(){var a=new AFb();APb(a);return a;}
function APb(a){}
function AR9(a){var b;b=new TG;b.yV=a;Bw(b);return b;}
var AGb=G(Bd);
function AXC(){var a=new AGb();AKo(a);return a;}
function AKo(a){}
function AKC(a){var b;b=new YY;b.Av=a;Bw(b);Iw(b.P,0,2048);b.Q=1;return b;}
var ABq=G(Bd);
function AW1(){var a=new ABq();AJY(a);return a;}
function AJY(a){}
function AK3(a){var b;b=new QE;b.zW=a;Bw(b);b.Q=1;return b;}
var AA2=G(Bd);
function AXD(){var a=new AA2();AOP(a);return a;}
function AOP(a){}
function AUS(a){var b;b=new PF;b.A7=a;Bw(b);b.Q=1;return b;}
var AFw=G(Bd);
function AWR(){var a=new AFw();APz(a);return a;}
function APz(a){}
function AHG(a){var b;b=new SC;b.zy=a;Bw(b);return b;}
var AFJ=G(Bd);
function AYz(){var a=new AFJ();AM5(a);return a;}
function AM5(a){}
function AOc(a){var b;b=new NI;b.x9=a;Bw(b);b.Q=1;return b;}
var ACY=G(Bd);
function AWV(){var a=new ACY();AIu(a);return a;}
function AIu(a){}
function ALc(a){var b;b=new NO;b.z0=a;Bw(b);b.Q=1;return b;}
var AEl=G(Bd);
function AXI(){var a=new AEl();AJ3(a);return a;}
function AJ3(a){}
function AMo(a){var b;b=new Pe;b.Ar=a;Bw(b);b.Q=1;return b;}
var AG6=G(Bd);
function AYl(){var a=new AG6();AOj(a);return a;}
function AOj(a){}
function AOe(a){var b;b=new Q9;b.AO=a;Bw(b);b.Q=1;return b;}
var AFG=G(Bd);
function AYh(){var a=new AFG();APU(a);return a;}
function APU(a){}
function AT0(a){var b;b=new Re;b.zc=a;Bw(b);return b;}
var ADt=G(Bd);
function AYw(){var a=new ADt();AJZ(a);return a;}
function AJZ(a){}
function ARo(a){var b;b=new Vz;b.z8=a;Bw(b);return b;}
var ACW=G(Bd);
function AWQ(){var a=new ACW();AR$(a);return a;}
function AR$(a){}
function APS(a){var b;b=new Uk;b.ya=a;Bw(b);b.Q=1;return b;}
var AHt=G(Bd);
function AX7(){var a=new AHt();AM2(a);return a;}
function AM2(a){}
function ASi(a){var b;b=new N6;b.Bd=a;Bw(b);b.Q=1;return b;}
var Kb=G(Bd);
function AXP(){var a=new Kb();ALm(a);return a;}
function ALm(a){}
function AEj(a){return CA(B1(B1(B1(Dt(),97,122),65,90),48,57),95);}
var AGe=G(Kb);
function AWK(){var a=new AGe();AM8(a);return a;}
function AM8(a){}
function APD(a){var b;b=EG(AEj(a),1);b.Q=1;return b;}
var AD3=G(LM);
function AWq(){var a=new AD3();AUv(a);return a;}
function AUv(a){}
function AI$(a){var b;b=EG(ADG(a),1);b.Q=1;return b;}
var ACR=G(KQ);
function AXa(){var a=new ACR();AN2(a);return a;}
function AN2(a){}
function AMG(a){var b;b=EG(AEn(a),1);b.Q=1;return b;}
function ACl(){var a=this;Bd.call(a);a.r9=0;a.sP=0;}
function Q(a,b){var c=new ACl();AUP(c,a,b);return c;}
function AUP(a,b,c){a.r9=b;a.sP=c;}
function AOv(a){return B1(Dt(),a.r9,a.sP);}
var ACM=G(Bd);
function AWN(){var a=new ACM();AVc(a);return a;}
function AVc(a){}
function AUH(a){return B1(B1(Dt(),65279,65279),65520,65533);}
function ADO(){var a=this;Bd.call(a);a.ni=0;a.kT=0;a.qF=0;}
function BS(a,b){var c=new ADO();AKi(c,a,b);return c;}
function AXw(a,b,c){var d=new ADO();AUR(d,a,b,c);return d;}
function AKi(a,b,c){a.kT=c;a.ni=b;}
function AUR(a,b,c,d){a.qF=d;a.kT=c;a.ni=b;}
function AL1(a){var b;b=AYG(a.ni);if(a.qF)Iw(b.P,0,2048);b.Q=a.kT;return b;}
function ADZ(){var a=this;Bd.call(a);a.ng=0;a.k6=0;a.o_=0;}
function Jp(a,b){var c=new ADZ();ALd(c,a,b);return c;}
function AXk(a,b,c){var d=new ADZ();AHI(d,a,b,c);return d;}
function ALd(a,b,c){a.k6=c;a.ng=b;}
function AHI(a,b,c,d){a.o_=d;a.k6=c;a.ng=b;}
function AHH(a){var b;b=new Tz;AEY(b,a.ng);if(a.o_)Iw(b.P,0,2048);b.Q=a.k6;return b;}
var ACq=G();
var ABP=G();
function ADr(b){var c,d,e,f,g,h,i;c=ASw(FK(b));d=KE(c);e=BL(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+KE(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Ou(c);h=h+1|0;}return e;}
function Ls(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function OK(){var a=this;B.call(a);a.q8=0;a.s_=0;a.rn=null;}
function ALY(a,b,c){var d=new OK();ATl(d,a,b,c);return d;}
function ATl(a,b,c,d){a.q8=b;a.s_=c;a.rn=d;}
function AFB(){var a=this;B.call(a);a.pV=null;a.se=0;}
function ASw(a){var b=new AFB();AKQ(b,a);return b;}
function AKQ(a,b){a.pV=b;}
var ADq=G();
function KE(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.pV.data;f=b.se;b.se=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+W(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Ou(b){var c,d;c=KE(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Ni=G(Bv);
function AB5(){B.call(this);this.LA=null;}
function QQ(){B.call(this);this.uG=null;}
function APt(a,b){var c,d,e,f;c=b.data;b=a.uG;d=CO(c[0]);e=EI(c[1]);AAS(b.e.f,d,e,null,null);GW(Cp(b),A0S);Fv(Cp(b));f=Iz(EE(),b.fr);b=new M;O(b);H(GL(H(b,C(632)),f),C(210));$rt_globals.console.info($rt_ustr(N(b)));}
function T_(){B.call(this);this.rT=null;}
function AMe(a,b){b.gP=a.rT;}
function RY(){B.call(this);this.un=null;}
function AO_(a,b){JR(a.un,b);}
function AEi(){Hz.call(this);this.Jb=null;}
var Sm=G(0);
function Qn(){var a=this;B.call(a);a.AB=null;a.Az=null;a.AA=null;}
function RP(){var a=this;B.call(a);a.yq=null;a.yp=null;}
function Yn(){var a=this;X.call(a);a.pu=null;a.AH=null;}
function ALz(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cl^DA(a.pu,c):0;}
function Yl(){var a=this;X.call(a);a.vE=null;a.wq=null;a.Ac=null;}
function AIf(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cl^DA(a.vE,c):0;return a.wq.l(b)&&!d?1:0;}
function P0(){var a=this;X.call(a);a.jo=null;a.ye=null;}
function AOk(a,b){return a.bh^DA(a.jo,b);}
function AMs(a){var b,c,d;b=new M;O(b);c=HL(a.jo,0);while(c>=0){IZ(b,GV(c));BI(b,124);c=HL(a.jo,c+1|0);}d=b.M;if(d>0)Yb(b,d-1|0);return N(b);}
function P9(){var a=this;X.call(a);a.sE=null;a.zE=null;}
function AR7(a,b){return a.sE.l(b);}
function P7(){var a=this;X.call(a);a.kX=0;a.qo=null;a.lW=null;}
function ASM(a,b){return !(a.kX^DA(a.lW.J,b))&&!(a.kX^a.lW.d8^a.qo.l(b))?0:1;}
function P8(){var a=this;X.call(a);a.k5=0;a.v4=null;a.mU=null;}
function AOR(a,b){return !(a.k5^DA(a.mU.J,b))&&!(a.k5^a.mU.d8^a.v4.l(b))?1:0;}
function Qa(){var a=this;X.call(a);a.w3=0;a.v$=null;a.vY=null;a.yF=null;}
function AK9(a,b){return a.w3^(!a.v$.l(b)&&!a.vY.l(b)?0:1);}
function Qb(){var a=this;X.call(a);a.sM=0;a.ss=null;a.rH=null;a.Bb=null;}
function AHy(a,b){return a.sM^(!a.ss.l(b)&&!a.rH.l(b)?0:1)?0:1;}
function P$(){var a=this;X.call(a);a.rr=null;a.Bc=null;}
function AMw(a,b){return C3(a.rr,b);}
function P_(){var a=this;X.call(a);a.wm=null;a.yR=null;}
function AOV(a,b){return C3(a.wm,b)?0:1;}
function Qc(){var a=this;X.call(a);a.s3=null;a.sw=0;a.u$=null;}
function AT$(a,b){return !C3(a.s3,b)&&!(a.sw^DA(a.u$.J,b))?0:1;}
function Qd(){var a=this;X.call(a);a.tJ=null;a.tZ=0;a.tr=null;}
function AKw(a,b){return !C3(a.tJ,b)&&!(a.tZ^DA(a.tr.J,b))?1:0;}
function PZ(){var a=this;X.call(a);a.uY=0;a.v3=null;a.wG=null;a.ym=null;}
function AWm(a,b){return !(a.uY^a.v3.l(b))&&!C3(a.wG,b)?0:1;}
function QR(){var a=this;X.call(a);a.wA=0;a.oy=null;a.pe=null;a.yO=null;}
function AMD(a,b){return !(a.wA^a.oy.l(b))&&!C3(a.pe,b)?1:0;}
function PX(){var a=this;X.call(a);a.qY=null;a.yT=null;}
function AKv(a,b){return C3(a.qY,b);}
function PY(){var a=this;X.call(a);a.q7=null;a.A$=null;}
function AMb(a,b){return C3(a.q7,b)?0:1;}
function P3(){var a=this;X.call(a);a.wW=null;a.tA=0;a.x3=null;}
function ANI(a,b){return C3(a.wW,b)&&a.tA^DA(a.x3.J,b)?1:0;}
function PW(){var a=this;X.call(a);a.uu=null;a.sN=0;a.ty=null;}
function ATN(a,b){return C3(a.uu,b)&&a.sN^DA(a.ty.J,b)?0:1;}
function P1(){var a=this;X.call(a);a.vb=0;a.ps=null;a.sJ=null;a.yE=null;}
function AJn(a,b){return a.vb^a.ps.l(b)&&C3(a.sJ,b)?1:0;}
function P2(){var a=this;X.call(a);a.ui=0;a.oo=null;a.uW=null;a.yZ=null;}
function ARb(a,b){return a.ui^a.oo.l(b)&&C3(a.uW,b)?0:1;}
var MR=G(0);
function Uj(){var a=this;B.call(a);a.yJ=null;a.v6=null;a.jK=null;a.cB=null;a.jp=0;a.lN=0;}
function NM(a,b){var c,d,e;c=J(a.jK);if(b>=0&&b<=c){ZU(a.cB,null,(-1),(-1));d=a.cB;d.ko=1;d.eB=b;c=d.it;if(c<0)c=b;d.it=c;b=a.v6.cq(b,a.jK,d);if(b==(-1))a.cB.dA=1;if(b>=0){d=a.cB;if(d.jL){e=d.dY.data;if(e[0]==(-1)){c=d.eB;e[0]=c;e[1]=c;}d.it=JM(d);return 1;}}a.cB.eB=(-1);return 0;}d=new BC;Bk(d,C8(b));K(d);}
function AG4(a){return QJ(a.cB,0);}
function ACS(a){return TJ(a.cB,0);}
function ABe(a){return a.cB.jS;}
function AD5(){var a=this;B.call(a);a.FA=null;a.Fy=null;a.FD=0.0;}
var C1=G(0);
var A0s=null;var A1u=null;var A0u=null;var A0t=null;var A0w=null;var A0v=null;var A0y=null;var A0x=null;var A0A=null;var A0z=null;var A0B=null;function AFW(){AFW=Bq(C1);AU2();}
function AU2(){A0s=C6(0);A1u=Dr(8,8,8);A0u=S(C(633));A0t=Dr(255,255,255);A0w=S(C(634));A0v=S(C(635));A0y=S(C(636));A0x=S(C(637));A0A=Ex(205,205,205,153);A0z=Ex(255,255,255,0);A0B=S(C(125));}
function Cq(){Cr.call(this);this.mg=null;}
var A2I=null;var A2J=null;var A2K=null;var A2L=null;var A2M=null;var A2N=null;var A2O=null;var A2P=null;var A2Q=null;var A2R=null;var A2S=null;var A2T=null;var A2U=null;var A2V=null;var A2W=null;var A0C=null;function AE1(){AE1=Bq(Cq);AVz();}
function DI(a,b,c){var d=new Cq();SY(d,a,b,c);return d;}
function AVi(a,b,c,d){var e=new Cq();ABK(e,a,b,c,d);return e;}
function SY(a,b,c,d){AE1();De(a,b,c);a.mg=Ix(d,null);}
function ABK(a,b,c,d,e){AE1();De(a,b,c);a.mg=Ix(d,e);}
function AVz(){var b;b=new Cq;AFW();SY(b,C(361),0,A1u);A2I=b;A2J=DI(C(362),1,S(C(638)));A2K=DI(C(364),2,S(C(639)));A2L=DI(C(48),3,S(C(640)));A2M=DI(C(367),4,A1u);A2N=DI(C(368),5,S(C(641)));A2O=DI(C(370),6,S(C(402)));A2P=DI(C(49),7,S(C(642)));A2Q=DI(C(373),8,S(C(643)));A2R=AVi(C(375),9,A1u,Dr(237,235,252));A2S=AVi(C(376),10,S(C(400)),S(C(644)));A2T=DI(C(377),11,S(C(402)));A2U=DI(C(379),12,S(C(403)));A2V=DI(C(381),13,S(C(645)));b=DI(C(382),14,S(C(383)));A2W=b;A0C=I(Cq,[A2I,A2J,A2K,A2L,A2M,A2N,A2O,A2P,A2Q,A2R,
A2S,A2T,A2U,A2V,b]);}
var DH=G(0);
var A0G=null;var A0H=null;var A0D=null;var A0E=null;var A0F=null;var A1v=null;var A1w=null;var A0I=null;var A0J=null;function AID(){AID=Bq(DH);AK1();}
function AK1(){A0G=S(C(123));A0H=S(C(646));A0D=S(C(647));A0E=S(C(648));A0F=S(C(649));A1v=S(C(123));A1w=S(C(646));A0I=Ex(205,205,205,153);A0J=Dr(247,248,250);}
function XZ(){var a=this;B.call(a);a.kr=null;a.ih=0;}
function Xc(){B.call(this);this.uy=null;}
function AOx(a,b){Zo(a.uy,b);}
var Ol=G(GY);
function AL4(a,b,c,d){var e,f,g;e=0;f=d.y;a:{while(true){if(b>f){b=e;break a;}g=FZ(d,a.bc);DF(d,a.bc,b);e=a.c8.c(b,c,d);if(e>=0)break;DF(d,a.bc,g);b=b+1|0;}}return b;}
function AV_(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=FZ(e,a.bc);DF(e,a.bc,c);f=a.c8.c(c,d,e);if(f>=0)break;DF(e,a.bc,g);c=c+(-1)|0;}}return c;}
function AKe(a){return null;}
var R9=G(Bv);
var Zw=G(Bv);
function W4(){Gd.call(this);this.A2=0;}
function RS(){Gd.call(this);this.AV=0;}
function AFC(){var a=this;B.call(a);a.LL=null;a.HN=null;}
function WY(){var a=this;B.call(a);a.s8=null;a.vI=null;a.xr=0;a.ll=0;}
function Lj(a,b){return Ca(a.s8)<b?0:1;}
function AC0(){var a=this;B.call(a);a.EN=null;a.Dd=null;}
function Wr(){var a=this;B.call(a);a.oB=null;a.oC=null;}
function V6(){var a=this;B.call(a);a.zs=null;a.sv=null;}
function V9(){B.call(this);this.AF=null;}
var GR=G();
var A2X=null;var A2Y=null;var A2Z=null;var A20=null;function AX3(){AX3=Bq(GR);AQX();}
function AQX(){var b;b=new ST;Je(b,1,C(171));A2X=b;b=new OB;Je(b,2,C(234));A2Y=b;b=new Ph;Je(b,3,C(233));A2Z=b;b=new Yj;Je(b,4,C(232));A20=b;}
function Tp(){var a=this;B.call(a);a.wZ=null;a.wY=0;a.w0=null;}
function L0(a,b){var c,d,e,f,g,h,i,j,k;c=a.wZ;d=a.wY;e=a.w0;if(b<=d){f=Cp(c);g=new Om;g.pU=c;h=R(B,1);h.data[0]=e;CM(f,g,C(650),h);}else{i=Cp(c);g=new Oo;g.xa=c;j=R(B,2);k=j.data;k[0]=e;h=BL(1);h.data[0]=250;k[1]=h;CM(i,g,C(651),j);f=Cp(c);g=new Op;g.ti=c;h=R(B,1);h.data[0]=e;CM(f,g,C(652),h);}}
function W2(){var a=this;B.call(a);a.dY=null;a.kC=null;a.mj=null;a.mo=null;a.qr=0;a.jL=0;a.cV=0;a.y=0;a.eB=0;a.jS=0;a.fM=0;a.dA=0;a.Am=0;a.it=0;a.ko=0;}
function BP(a,b,c){a.kC.data[b]=c;}
function Ds(a,b){return a.kC.data[b];}
function JM(a){return TJ(a,0);}
function TJ(a,b){Tx(a,b);return a.dY.data[(b*2|0)+1|0];}
function DF(a,b,c){a.dY.data[b*2|0]=c;}
function Kv(a,b,c){a.dY.data[(b*2|0)+1|0]=c;}
function FZ(a,b){return a.dY.data[b*2|0];}
function I9(a,b){return a.dY.data[(b*2|0)+1|0];}
function AFl(a){return QJ(a,0);}
function QJ(a,b){Tx(a,b);return a.dY.data[b*2|0];}
function N2(a,b){return a.mj.data[b];}
function Er(a,b,c){a.mj.data[b]=c;}
function Tx(a,b){var c;if(!a.jL){c=new CS;Y(c);K(c);}if(b>=0&&b<a.qr)return;c=new BC;Bk(c,C8(b));K(c);}
function ZU(a,b,c,d){a.jL=0;a.ko=2;H2(a.dY,(-1));H2(a.kC,(-1));if(b!==null)a.mo=b;if(c>=0){a.cV=c;a.y=d;}a.eB=a.cV;}
function ADa(a){return a.ko;}
function NK(){B.call(this);this.xY=null;}
function AMS(a){DZ(a.xY);}
function D_(){var a=this;B.call(a);a.yv=0;a.ze=null;}
function Je(a,b,c){a.yv=b;a.ze=c;}
var ST=G(D_);
var OB=G(D_);
var Ph=G(D_);
var Yj=G(D_);
function UU(){X.call(this);this.zw=null;}
function AUm(a,b){return Cz(b)!=2?0:1;}
function NQ(){X.call(this);this.zG=null;}
function AI9(a,b){return Cz(b)!=1?0:1;}
function TH(){X.call(this);this.za=null;}
function AIQ(a,b){return S2(b);}
function TG(){X.call(this);this.yV=null;}
function ALZ(a,b){return 0;}
function YY(){X.call(this);this.Av=null;}
function ANu(a,b){return !Cz(b)?0:1;}
function QE(){X.call(this);this.zW=null;}
function AUp(a,b){return Cz(b)!=9?0:1;}
function PF(){X.call(this);this.A7=null;}
function AQC(a,b){return GN(b);}
function SC(){X.call(this);this.zy=null;}
function ASc(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function NI(){X.call(this);this.x9=null;}
function AVI(a,b){a:{b:{switch(Cz(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GN(b);}return b;}
function NO(){X.call(this);this.z0=null;}
function AKT(a,b){a:{b:{switch(Cz(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GN(b);}return b;}
function Pe(){X.call(this);this.Ar=null;}
function AUA(a,b){a:{switch(Cz(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Q9(){X.call(this);this.AO=null;}
function AO8(a,b){return Kl(b);}
function Re(){X.call(this);this.zc=null;}
function ARA(a,b){return Rf(b);}
function Vz(){X.call(this);this.z8=null;}
function AT_(a,b){return Cz(b)!=3?0:1;}
function Uk(){X.call(this);this.ya=null;}
function AVd(a,b){a:{b:{switch(Cz(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=GN(b);}return b;}
function N6(){X.call(this);this.Bd=null;}
function AKD(a,b){a:{b:{switch(Cz(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=GN(b);}return b;}
function M_(){X.call(this);this.mL=0;}
function AYG(a){var b=new M_();AEY(b,a);return b;}
function AEY(a,b){Bw(a);a.mL=b;}
function AQE(a,b){return a.bh^(a.mL!=Cz(b&65535)?0:1);}
var Tz=G(M_);
function ATe(a,b){return a.bh^(!(a.mL>>Cz(b&65535)&1)?0:1);}
function ABI(){var a=this;B.call(a);a.Gn=null;a.Lh=0;}
function RG(){B.call(this);this.x6=null;}
function AOE(a){var b,c;b=a.x6;c=b.oB;b=b.oC;c.BC(b.j5,b.mw,null);}
function Xu(){B.call(this);this.pC=null;}
function ARq(a,b){var c,d,e,f;c=a.pC;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.sv;c=Bx();b=CB(b);e=new M;O(e);H(H(e,C(653)),b);Bt(c,N(e));b=Bx();f=d.length;c=new M;O(c);V(H(c,C(654)),f);Bt(b,N(c));}
function Xw(){var a=this;B.call(a);a.vw=null;a.vx=null;}
function AP5(a,b){var c,d;c=a.vw;d=a.vx;b.arrayBuffer().then(Bm(c,"f"),Bm(d,"f"));}
function Vl(){var a=this;B.call(a);a.n0=null;a.n1=null;}
function AMO(a,b){var c;c=a.n0;L0(a.n1,Ky(c,b.size));}
function Vo(){B.call(this);this.wX=null;}
function AH7(a,b){var c;c=a.wX;Bt(Ff(),$rt_str(b.message));L0(c,0);}
function Wq(){B.call(this);this.y5=null;}
function AOz(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Oo(){B.call(this);this.xa=null;}
function AVt(a,b){var c,d,e,f;c=a.xa;if(!c.ky){b=b.data;d=CO(b[0]);e=EI(b[1]);AFx(c.e.f,d,e);c.i7=1;f=Iz(EE(),c.fr);b=new M;O(b);H(GL(H(b,C(655)),f),C(210));$rt_globals.console.info($rt_ustr(N(b)));}}
function Op(){B.call(this);this.ti=null;}
function ALH(a,b){var c,d,e,f,g,h;c=b.data;d=a.ti;e=(CO(c[2])).data[0];if(e!=1)IM(d,b);else{d.ky=1;f=CO(c[0]);g=EI(c[1]);ADl(d.e.f,f,g,d.i7);WE(d,ADv(e));GW(Cp(d),A0S);Fv(Cp(d));h=Iz(EE(),d.fr);b=new M;O(b);H(GL(H(b,C(656)),h),C(210));$rt_globals.console.info($rt_ustr(N(b)));U3(d);HK(d);}}
function Om(){B.call(this);this.pU=null;}
function AUw(a,b){IM(a.pU,b);}
var ABD=G();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",5,"worker",4,"js"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bM",AY4(AO4),"cJ",AY3(AJL)],Tr,0,B,[],0,3,0,0,0,Ot,0,B,[],3,3,0,0,0,NE,0,B,[],3,3,0,0,0,Yw,0,B,[Ot,NE],0,3,0,0,0,ACd,0,B,[],4,0,0,0,0,ABQ,0,B,[],4,3,0,0,0,GZ,0,B,[],0,3,0,0,0,Ej,0,GZ,[],0,3,0,0,0,Bv,0,Ej,[],0,3,0,0,0,AD0,0,Bv,[],0,3,0,0,0,CP,0,B,[],3,3,0,0,0,CG,0,B,[],3,3,0,0,0,Jt,0,B,[],3,3,0,0,0,BA,"String",1,B,[CP,CG,Jt],0,3,0,E6,["cJ",AY3(AJJ),"bM",AY4(Bl),"nc",AY3(IT),"kR",AY4(AL3)],E3,0,GZ,[],0,3,0,0,0,HN,0,E3,[],0,3,0,0,0,ADw,0,HN,[],0,3,0,0,0,D6,0,B,[CP],1,3,0,0,0,GG,
0,D6,[CG],0,3,0,0,["bM",AY4(AVo),"kR",AY4(AOa)],GK,0,B,[CP,Jt],0,0,0,0,["iG",AY4(Ku),"cJ",AY3(N)],Iv,0,B,[],3,3,0,0,0,M,0,GK,[Iv],0,3,0,0,["mY",AY7(AN7),"l0",AY6(AK0),"cJ",AY3(D3),"iG",AY4(AOd),"nv",AY5(AOM)],EF,0,HN,[],0,3,0,0,0,AE0,0,EF,[],0,3,0,0,0,ADf,0,EF,[],0,3,0,0,0,Vu,0,B,[],3,3,0,0,0,Dx,0,B,[],3,3,0,0,0,QC,0,B,[],3,0,0,0,0,Jf,0,B,[Vu,Dx,QC],1,3,0,0,["ej",AY3(EK)],Tj,0,Jf,[],0,3,0,0,0,ABa,0,B,[],0,3,0,0,0,AGg,0,B,[],4,3,0,0,0,Z,0,B,[],3,3,0,0,0,VH,0,B,[Z],0,3,0,0,0,Bz,0,B,[],3,3,0,0,0,AEc,0,B,[Bz],1,
3,0,0,0,ABg,0,B,[],3,3,0,0,0,AFS,0,B,[],3,3,0,0,0,AFO,0,B,[],3,3,0,0,0,MF,0,B,[],0,3,0,0,0,AB_,0,B,[Bz],1,3,0,0,0,BZ,0,B,[Bz],3,3,0,0,0,VI,0,B,[BZ],0,3,0,0,["bd",AY4(AHA)],VG,0,B,[BZ],0,3,0,0,["bd",AY4(AUa)],Md,0,B,[],4,3,0,0,0,AFL,0,B,[],4,3,0,0,0,ACT,0,B,[],0,3,0,0,0,AHu,0,B,[],4,3,0,0,0,Oz,0,B,[BZ],0,3,0,0,["bd",AY4(AQn)]]);
$rt_metadata([AF7,0,B,[Bz],1,3,0,0,0,ABt,0,B,[],0,3,0,0,0,XD,0,B,[Bz],3,3,0,0,0,AD1,0,B,[XD],1,3,0,0,["AY",AY4(AMM),"Ke",AY3(AO2)],ADM,0,B,[Bz],1,3,0,0,0,HI,0,B,[],3,3,0,0,0,US,0,B,[HI],0,3,0,0,0,BC,0,Bv,[],0,3,0,0,0,AEF,0,B,[],4,3,0,0,0,G5,0,Bv,[],0,3,0,0,0,Jn,0,Bv,[],0,3,0,0,0,C_,0,B,[CG],0,3,0,0,0,Ny,0,B,[Bz],3,3,0,0,0,Uo,0,B,[Ny],3,3,0,0,0,Ey,0,B,[Bz],3,3,0,0,0,AGf,0,B,[Uo,Ey],3,3,0,0,0,Pg,0,B,[BZ],0,3,0,0,["bd",AY4(ARs)],ADH,0,B,[],4,3,0,0,0,Q8,0,B,[Ey],3,3,0,0,0,Th,0,B,[Ey],3,3,0,0,0,S7,0,B,[Ey],3,3,0,
0,0,Vq,0,B,[Ey],3,3,0,0,0,Zv,0,B,[Ey],3,3,0,0,0,WA,0,B,[Ey,Q8,Th,S7,Vq,Zv],3,3,0,0,0,Qi,0,B,[],3,3,0,0,0,QD,0,B,[Bz],3,3,0,0,0,ABf,0,B,[Bz,WA,Qi,QD],1,3,0,0,["AY",AY4(AQz),"DX",AY5(ATb),"KP",AY5(ASy),"G8",AY6(AQu),"E0",AY4(AUx),"E8",AY3(AJ4),"Dc",AY6(AH2)],BE,0,Bv,[],0,3,0,0,0,AAF,0,Bv,[],0,3,0,0,0,EC,0,B,[],4,3,0,Lk,0,AG1,0,B,[Bz],1,3,0,0,0,AC_,0,B,[Bz],1,3,0,0,0,AHp,0,B,[Bz],1,3,0,0,0,KM,0,B,[Bz],3,3,0,0,0,Qx,0,B,[KM],0,3,0,0,["xC",AY4(AJ2)],ADu,0,B,[Bz],1,3,0,0,0,Qy,0,B,[KM],0,3,0,0,["xC",AY4(AH4)],HJ,0,
BC,[],0,3,0,0,0,ACB,0,B,[],0,3,0,0,0,Qh,0,B,[],3,3,0,0,0,Uv,0,B,[Qh],0,3,0,0,0,B9,0,B,[],3,3,0,0,0,TB,0,B,[B9],0,3,0,0,0,Bh,0,B,[],3,3,0,0,0,AD_,0,B,[Bh],0,3,0,0,0,ADC,0,B,[Bz],1,3,0,0,0,S_,0,B,[Bz],3,3,0,0,0,Xp,0,B,[S_],0,3,0,0,["G_",AY4(ANg)],Xm,0,B,[Bh],0,3,0,0,0,R8,0,B,[Bz],3,3,0,0,0]);
$rt_metadata([Xn,0,B,[R8],0,3,0,0,["xl",AY5(ALj)],AGn,0,B,[Bz],1,3,0,0,0,Ct,0,B,[Bz],3,3,0,0,0,Xk,0,B,[Ct],0,3,0,0,["ck",AY4(ARB)],LS,0,B,[],3,3,0,0,0,D4,0,B,[LS],1,3,0,0,0,Ek,0,B,[],3,3,0,0,0,ZR,0,B,[LS],3,3,0,0,0,Or,0,B,[ZR],3,3,0,0,0,QM,0,D4,[Ek,CP,Or],0,3,0,0,0,Xl,0,B,[BZ],0,3,0,0,["bd",AY4(ASY)],Rc,0,B,[],0,3,0,0,0,L6,0,B,[],1,3,0,0,0,AFR,0,L6,[],0,3,0,0,0,Cn,0,B,[Dx],1,3,0,0,["cK",AY4(AVl)],JV,0,B,[HI],0,3,0,0,["w4",AY5(Kn)],ACL,0,B,[],0,3,0,0,0,YB,0,B,[Ct],0,3,0,0,["ck",AY4(AQ0)],YC,0,B,[Ct],0,3,0,0,
["ck",AY4(ARe)],YD,0,B,[Ct],0,3,0,0,["ck",AY4(APl)],YE,0,B,[Ct],0,3,0,0,["ck",AY4(AOI)],YF,0,B,[Ct],0,3,0,0,["ck",AY4(AO9)],YG,0,B,[Ct],0,3,0,0,["ck",AY4(ARM)],YH,0,B,[Ct],0,3,0,0,["ck",AY4(AM4)],YI,0,B,[Ct],0,3,0,0,["ck",AY4(AVY)],YJ,0,B,[Ct],0,3,0,0,["ck",AY4(AL_)],YK,0,B,[Ct],0,3,0,0,["ck",AY4(AS8)],AAh,0,B,[Ct],0,3,0,0,["ck",AY4(AVm)],AAi,0,B,[Ct],0,3,0,0,["ck",AY4(AO0)],AAj,0,B,[Ct],0,3,0,0,["ck",AY4(APr)],AAk,0,B,[Ct],0,3,0,0,["ck",AY4(ARu)],V7,0,B,[],3,3,0,0,0,Wi,0,B,[V7],0,3,0,0,0,Wh,0,B,[Ct],0,3,0,
0,["ck",AY4(ANW)],Nz,0,B,[],0,3,0,0,0,AGI,0,B,[],0,3,0,0,0,Fj,0,B,[],3,3,0,0,0,Cw,0,B,[Fj],3,3,0,0,0,Cs,0,B,[],3,3,0,0,["bJ",AY4(AN1),"ce",AY5(AUd),"c3",AY5(AIz),"cp",AY6(ARL)],DN,0,B,[],3,3,0,0,0,EN,0,B,[Fj],3,3,0,0,0,E4,0,B,[],3,3,0,0,0,E7,0,B,[],3,3,0,0,0,Fx,0,B,[E7],3,3,0,0,0,Sg,0,B,[Dx],0,3,0,0,0,Bf,0,B,[],0,3,0,0,["cJ",AY3(AAJ)],YO,0,B,[],0,3,0,0,0,AFQ,0,B,[],0,3,0,0,0,ABM,0,B,[],3,3,0,0,0,R6,0,B,[],0,3,0,0,0]);
$rt_metadata([Mv,0,B,[],0,3,0,0,0,DC,0,Mv,[],0,3,0,0,0,Ye,0,DC,[],0,3,0,0,0,ES,0,DC,[],0,3,0,0,0,ADs,0,DC,[],0,3,0,0,0,ADT,0,ES,[],0,3,0,0,0,Gr,0,ES,[],0,3,0,0,0,AE6,0,Gr,[],0,3,0,0,0,ZJ,0,Gr,[],0,3,0,0,0,ACc,0,ES,[],0,3,0,0,0,AE5,0,DC,[],0,3,0,0,0,TI,0,B,[Bz],3,3,0,0,0,AHs,0,B,[TI],3,3,0,0,0,R4,0,B,[Dx],0,3,0,0,0,R5,0,B,[],0,3,0,0,0,Cr,0,B,[CG,CP],1,3,0,0,0,Hf,0,Cr,[],12,3,0,KA,0,Na,0,B,[],3,3,0,0,0,Va,0,B,[Na],3,3,0,0,0,Ww,0,B,[],3,3,0,0,0,GQ,0,B,[Va,Ww],1,3,0,0,0,Ke,0,GQ,[],0,3,0,0,0,ADc,0,Ke,[],0,3,0,0,
0,GE,0,GQ,[],1,3,0,0,0,Mb,0,GE,[],0,3,0,0,["lr",AY6(ANM)],Ec,0,Cr,[],12,3,0,AUs,0,J5,0,B,[CG],1,3,0,0,0,Ne,0,J5,[],0,3,0,AC5,0,QS,0,B,[],0,3,0,0,0,Hl,0,Cr,[],12,0,0,APg,0,LA,0,GE,[],0,3,0,0,["lr",AY6(ALI)],AFK,0,BE,[],0,3,0,0,0,Xq,0,Ej,[],0,3,0,0,0,Nd,0,B,[Bz],3,3,0,0,0,ZP,0,B,[Nd],0,3,0,0,["bd",AY4(ASx)],ZQ,0,B,[Nd],0,3,0,0,["bd",AY4(AJB)],Hy,0,B,[],1,3,0,0,0,T7,0,B,[],3,3,0,0,0,LV,0,Hy,[CG,Iv,Jt,T7],1,3,0,0,0,KL,0,Hy,[CG],1,3,0,0,0,Ib,0,B,[],0,3,0,HF,0,Oy,0,Cn,[],0,3,0,0,["bv",AY3(AOT),"bV",AY5(ANj)],CQ,0,
Cn,[],1,3,0,0,["bV",AY5(G3)],Qf,0,B,[],3,3,0,0,0,KR,0,B,[Qf],3,3,0,0,0,KU,0,B,[],3,3,0,0,0,Mt,0,B,[],3,3,0,0,0,KB,0,CQ,[Cs,KR,KU,Mt,DN,E4,Fx],0,3,0,0,["g8",AY5(AUL),"cK",AY4(AR6),"bv",AY3(AO7),"gz",AY3(ANb),"w8",AY3(ASP),"xF",AY3(AOY),"u2",AY4(ATV),"jd",AY4(AKz),"bV",AY5(AOi),"jA",AY4(AIE),"bJ",AY4(AQ4),"cp",AY6(ANe),"ce",AY5(APk),"c3",AY5(ARW),"db",AY6(ARp),"dK",AY3(AN6)],XE,0,KB,[],0,3,0,0,["gz",AY3(APB)],AGG,0,B,[],0,3,0,0,0]);
$rt_metadata([AD4,0,B,[Bz],1,3,0,0,0,KS,0,LV,[],1,0,0,0,0,ADI,0,KS,[],0,0,0,0,0,LI,0,B,[],1,3,0,0,0,MD,0,B,[],0,3,0,0,0,ABp,0,B,[],0,3,0,0,0,I0,0,B,[Bz],3,3,0,0,0,OI,0,B,[I0],0,3,0,0,["bd",AY4(ALR)],OH,0,B,[I0],0,3,0,0,["bd",AY4(AQs)],OF,0,B,[BZ],0,3,0,0,["bd",AY4(AQ_)],OE,0,B,[BZ],0,3,0,0,["bd",AY4(AKa)],VK,0,B,[Z],0,3,0,0,["g",AY4(AVp)],VL,0,B,[Z],0,3,0,0,["g",AY4(AN_)],XL,0,B,[B9],0,3,0,0,["bQ",AY4(AUb)],XK,0,B,[B9],0,3,0,0,["bQ",AY4(AIh)],XH,0,B,[B9],0,3,0,0,["bQ",AY4(ALk)],XG,0,B,[B9],0,3,0,0,["bQ",AY4(AQp)],XJ,
0,B,[B9],0,3,0,0,["bQ",AY4(ALr)],XI,0,B,[B9],0,3,0,0,["bQ",AY4(AHz)],XO,0,B,[B9],0,3,0,0,["bQ",AY4(AKW)],XN,0,B,[B9],0,3,0,0,["bQ",AY4(AOH)],XQ,0,B,[B9],0,3,0,0,["bQ",AY4(ASS)],XP,0,B,[B9],0,3,0,0,["bQ",AY4(AHN)],UX,0,B,[B9],0,3,0,0,["bQ",AY4(AH$)],UW,0,B,[B9],0,3,0,0,["bQ",AY4(AOg)],UV,0,B,[B9],0,3,0,0,["bQ",AY4(APZ)],UO,0,B,[B9],0,3,0,0,["bQ",AY4(ALW)],UN,0,B,[B9],0,3,0,0,["bQ",AY4(AHT)],UL,0,B,[B9],0,3,0,0,["bQ",AY4(AUj)],UK,0,B,[B9],0,3,0,0,["bQ",AY4(AOU)],UJ,0,B,[B9],0,3,0,0,["bQ",AY4(ASU)],UI,0,B,[B9],
0,3,0,0,["bQ",AY4(AHF)],HE,0,B,[],0,3,0,0,0,QH,0,HE,[],0,3,0,0,0,AF1,0,B,[],0,3,0,0,0,Nw,0,HE,[],0,3,0,0,0,V$,0,B,[Bz],3,3,0,0,0,O_,0,B,[V$],0,3,0,0,["xC",AY4(AOl)],WI,0,B,[Z],0,3,0,0,["g",AY4(Yg)],Y_,0,KL,[],0,0,0,0,0,RV,0,B,[],0,3,0,0,0,Jv,0,B,[],0,3,0,0,0,ADQ,0,B,[Cs,DN],0,0,0,0,["bJ",AY4(AQ9),"cp",AY6(AUG),"ce",AY5(ASh),"c3",AY5(AOr),"db",AY6(ASH)],H6,0,B,[],3,3,0,0,["xU",AY3(AQd),"uK",AY3(AL5)],AC3,0,B,[H6,Cs,KU],0,3,0,0,["uK",AY3(ALS),"xU",AY3(AII),"w8",AY3(O6),"xF",AY3(AAe),"u2",AY4(PN),"c3",AY5(U$),
"ce",AY5(NP),"cp",AY6(N7),"bJ",AY4(Pu),"hN",AY4(AU0)],Ik,0,B,[],3,3,0,0,0,WS,0,B,[Ik],0,3,0,0,["i6",AY4(AOb)],WT,0,B,[Ik],0,3,0,0,["i6",AY4(AIX)],WU,0,B,[Z],0,3,0,0,["g",AY4(AOo)],WN,0,B,[Z],0,3,0,0,["g",AY4(APm)]]);
$rt_metadata([WP,0,B,[Cw],0,3,0,0,["bq",AY4(AUk)],IA,0,B,[Cw],0,3,0,0,["bq",AY4(AL8)],WQ,0,B,[Z],0,3,0,0,["g",AY4(AS9)],WR,0,B,[EN],0,3,0,0,["bq",AY4(AKV)],AEQ,0,B,[Bz],1,3,0,0,0,ABH,0,B,[],3,3,0,0,0,Wm,0,B,[],0,3,0,0,0,TO,0,B,[Cw],0,3,0,0,["bq",AY4(AMK)],TN,0,B,[Cw],0,3,0,0,["bq",AY4(AJ9)],B$,0,B,[],0,3,0,0,["bM",AY4(AVU)],EJ,0,B,[],3,3,0,0,0,AGT,0,B,[Cs,EJ],0,3,0,0,["bJ",AY4(AAY),"cp",AY6(ABZ),"ce",AY5(ADL),"c3",AY5(AGV),"g9",AY5(ANY)],AF9,0,B,[EJ,H6],0,3,0,0,["xU",AY3(AQd),"uK",AY3(AL5),"g9",AY5(AVC),"hN",
AY4(AOO)],ACE,0,B,[],0,3,0,0,0,LU,0,B,[],0,3,0,0,0,Jz,0,B,[],0,3,0,0,0,Zz,0,B,[],0,3,0,0,0,AGo,0,B,[],0,3,0,0,0,We,0,B,[],0,3,0,0,0,Fz,0,B,[Dx],0,0,0,0,0,AG3,0,B,[],0,3,0,0,0,ACC,0,B,[Dx],0,3,0,0,0,Yd,0,B,[],3,3,0,0,["eY",AY4(AHB)],H0,0,B,[Yd],3,3,0,0,["eY",AY4(AHB),"mM",AY4(ANQ)],E8,0,B,[H0],1,3,0,0,["eY",AY4(AHB),"mM",AY4(ANQ),"ed",AY3(Eu),"pf",AY4(ASQ)],TF,0,B,[H0],3,3,0,0,["eY",AY4(AHB),"mM",AY4(ANQ)],J0,0,B,[TF],3,3,0,0,["eY",AY4(AHB),"mM",AY4(ANQ)],Gy,0,E8,[J0],1,3,0,0,["eY",AY4(AHB),"mM",AY4(ANQ),"tN",
AY4(ARZ),"cb",AY3(B3),"uB",AY5(AQY),"nT",AY5(ATP),"bM",AY4(API)],Mc,0,B,[],3,3,0,0,0,ABx,0,Gy,[Ek,CP,Mc],0,3,0,0,["mM",AY4(ANQ),"j7",AY4(Bs),"cU",AY3(AQI),"tN",AY4(BH),"nT",AY5(Tk),"nH",AY4(ED),"pf",AY4(XW),"i0",AY3(H1),"uB",AY5(AB0),"eY",AY4(Et)],Pn,0,B,[Z],0,3,0,0,0,Pm,0,B,[Z],0,3,0,0,["g",AY4(AI_)],Pl,0,B,[Z],0,3,0,0,["g",AY4(AIe)],Pk,0,B,[Bh],0,3,0,0,["o",AY3(AId)],Ps,0,B,[Bh],0,3,0,0,["o",AY3(AL7)],Pq,0,B,[Bh],0,3,0,0,["o",AY3(AWl)],Pp,0,B,[Bh],0,3,0,0,["o",AY3(AOC)],Po,0,B,[Bh],0,3,0,0,["o",AY3(ARa)],Pj,
0,B,[Bh],0,3,0,0,["o",AY3(AVs)],Pi,0,B,[Bh],0,3,0,0,["o",AY3(AHZ)],FM,0,Cr,[],12,3,0,AIb,0,Le,0,B,[],4,3,0,ANy,0,Nr,0,B,[],3,3,0,0,0,RW,0,B,[Bh],0,3,0,0,["o",AY3(AM3)],RU,0,B,[Bh],0,3,0,0,["o",AY3(AHR)],AAf,0,B,[],3,3,0,0,0,Ln,0,B,[],0,3,0,0,0,Fp,0,B,[],0,3,0,0,0,K7,0,Fp,[],0,3,0,0,0,UQ,0,Fp,[],0,3,0,0,0]);
$rt_metadata([RH,0,Fp,[],0,3,0,0,0,Ht,0,B,[],3,3,0,0,0,Uh,0,B,[],3,3,0,0,0,Hu,0,B,[CG],0,3,0,0,0,LN,0,B,[],0,3,0,0,0,X9,0,B,[],3,3,0,0,0,UC,0,B,[X9],0,3,0,0,["cJ",AY3(AKE)],Wp,0,B,[],3,3,0,0,0,LT,"JsFileHandle",7,B,[Wp],0,3,0,0,["cJ",AY3(ANT)],Ty,0,B,[Nr],0,3,0,0,0,Lq,0,D4,[Ek,CP],0,3,0,0,0,CD,0,B,[],0,3,0,0,0,ACr,0,B,[],0,3,0,0,0,Pa,0,B,[Bh],0,3,0,0,["o",AY3(AVx)],Cf,0,B,[],0,3,0,0,0,Tt,0,B,[],0,3,0,0,0,LK,0,Lq,[],0,3,0,0,0,AG0,0,B,[CG],0,3,0,0,["bM",AY4(ATc),"kR",AY4(AJT)],Yi,0,B,[HI],0,3,0,0,["w4",AY5(AOG)],SE,
0,B,[],0,3,0,0,["cJ",AY3(AIB),"bM",AY4(AJE)],HR,0,B,[],3,3,0,0,0,GX,0,B,[HR,Ek],0,0,0,0,["bM",AY4(AKH)],G6,0,GX,[],0,0,0,0,0,LF,0,LI,[],1,3,0,0,0,Ra,0,LF,[],0,3,0,0,0,I7,0,Ej,[],0,3,0,0,0,NS,0,B,[I0],0,3,0,0,["bd",AY4(AVF)],NV,0,B,[BZ],0,3,0,0,["bd",AY4(AUy)],NT,0,B,[BZ],0,3,0,0,["bd",AY4(AI0)],IH,0,B,[],0,3,0,0,0,JN,0,CQ,[KR,Mt],0,3,0,0,["jd",AY4(ANa),"cK",AY4(ATx),"bv",AY3(AMN),"gz",AY3(AVe),"bV",AY5(AHM),"mr",AY5(AE4),"jA",AY4(ALb)],AA6,0,Cn,[],0,3,0,0,["cK",AY4(AIm),"bv",AY3(AK6),"bV",AY5(AOn)],Vr,0,Cn,
[],0,3,0,0,["cK",AY4(AQq),"bv",AY3(AJG),"bV",AY5(ALN)],Py,0,CQ,[Cs,EJ],0,3,0,0,["g9",AY5(ANC),"bV",AY5(ALT),"bv",AY3(AK7),"bJ",AY4(AOp),"ce",AY5(ATK),"c3",AY5(AS2),"cp",AY6(AJa)],UM,0,CQ,[EJ],0,3,0,0,["g9",AY5(AKN),"bv",AY3(AQW),"bV",AY5(AJu),"cK",AY4(AKZ)],OM,0,CQ,[Cs],0,3,0,0,["bJ",AY4(AN1),"ce",AY5(AUd),"c3",AY5(AIz),"cp",AY6(ARL),"bv",AY3(ASR),"cK",AY4(AH_)],UH,0,Cn,[],0,3,0,0,["bv",AY3(AHL),"bV",AY5(AHK)],Dg,0,Cn,[],0,3,0,0,["bv",AY3(T6),"bV",AY5(Uw)],R$,"SelectFileTest",5,Dg,[],0,3,0,0,0,ABh,"WorkerTest",
6,Dg,[],0,3,0,0,0,N5,"RenderTexture",5,Dg,[],0,3,0,0,["cK",AY4(AM9),"bv",AY3(AKO),"bV",AY5(AU$)],UB,"ScissorDemo",5,Dg,[],0,3,0,0,["bv",AY3(AV4),"bV",AY5(AME)],Uu,0,Cn,[],0,3,0,0,["bv",AY3(AUD),"bV",AY5(AK_),"cK",AY4(ASm)],Jy,"ClipboardTest",5,Dg,[Cs],0,3,0,0,["bJ",AY4(AN1),"ce",AY5(AUd),"c3",AY5(AIz),"cp",AY6(AN8)],Ue,0,Cn,[],0,3,0,0,["bv",AY3(AVT),"bV",AY5(AQt)],G_,0,Cn,[Cs],1,3,0,0,["bJ",AY4(AN1),"ce",AY5(AUd),"c3",AY5(AIz),"cp",AY6(ARL),"bv",AY3(ACP)],VC,0,G_,[],0,3,0,0,["ce",AY5(AUd),"c3",AY5(AIz),"cp",
AY6(ARL),"bV",AY5(AR0),"bJ",AY4(ATu)],VB,0,G_,[],0,3,0,0,["ce",AY5(AUd),"c3",AY5(AIz),"cp",AY6(ARL),"bJ",AY4(AVw),"bv",AY3(AKK),"bV",AY5(AIM)],Zm,0,CQ,[EJ],0,3,0,0,["g9",AY5(ALO),"bv",AY3(AUf),"bV",AY5(ATo),"cK",AY4(AMF)],NG,0,JN,[],0,3,0,0,["gz",AY3(AJM),"mr",AY5(AWf)]]);
$rt_metadata([Jd,0,B,[],0,3,0,0,0,ABG,0,B,[],3,3,0,0,0,AAW,0,B,[],0,3,0,0,0,AEs,0,B,[],3,3,0,0,0,AHd,0,B,[],0,3,0,0,0,Nl,0,B,[HR,CP],0,3,0,0,0,Kh,0,Nl,[],0,0,0,0,0,AGD,0,B,[],0,3,0,0,0,Rk,0,B,[Cw],0,3,0,0,["bq",AY4(AJo)],Ri,0,B,[Z],0,3,0,0,["g",AY4(AMd)],Rj,0,B,[E4],0,3,0,0,["g8",AY5(ATJ)],Pv,0,B,[Fx],0,3,0,0,["dK",AY3(ARj)],Pw,0,B,[DN],0,3,0,0,["db",AY6(ANV)],Pt,0,B,[EN],0,3,0,0,["bq",AY4(AOJ)],AG9,0,Jv,[],0,3,0,0,0,WJ,0,B,[Cs],0,0,0,0,["bJ",AY4(AJH),"cp",AY6(AH1),"ce",AY5(AJz),"c3",AY5(AIO)],RN,0,B,[Cw],0,
3,0,0,["bq",AY4(ATZ)],RM,0,B,[Cw],0,3,0,0,["bq",AY4(ARl)],RL,0,B,[E4],0,3,0,0,["g8",AY5(AN9)],RK,0,B,[Bh],0,3,0,0,["o",AY3(AH6)],RJ,0,B,[EN],0,3,0,0,["bq",AY4(AQy)],RI,0,B,[DN],0,3,0,0,["db",AY6(AT7)],HG,0,B$,[],0,3,0,0,0,AFs,0,B,[],3,3,0,0,0,N0,0,B,[Cs],0,0,0,0,["bJ",AY4(AN1),"ce",AY5(AUd),"c3",AY5(AIz),"cp",AY6(ALx)],NU,0,B,[],0,3,0,0,0,AEu,0,B,[],0,3,0,0,0,V1,0,B,[Cw],0,3,0,0,["bq",AY4(APY)],VX,0,B,[EN],0,3,0,0,["bq",AY4(AS6)],ACz,0,B,[],0,3,0,0,["bM",AY4(ASW)],VY,0,B,[Bh],0,3,0,0,["o",AY3(AWb)],VZ,0,B,[Bh],
0,3,0,0,["o",AY3(AI3)],CU,0,B,[],0,3,0,0,0,Xz,0,B,[Cw],0,3,0,0,["bq",AY4(AN0)],XB,0,B,[EN],0,3,0,0,["bq",AY4(AIA)],AED,0,B,[],0,3,0,0,0,XA,0,B,[DN],0,3,0,0,["db",AY6(ARV)],AGH,0,B,[],0,3,0,0,0,N$,0,B,[EJ],0,3,0,0,["g9",AY5(AP9)],N8,0,B,[Cw],0,3,0,0,["bq",AY4(AQA)],Tc,0,B,[],3,3,0,0,0,AA7,0,B,[Tc],0,3,0,0,0,Os,0,B,[Cs],0,0,0,0,["cp",AY6(ARL),"ce",AY5(AIp),"c3",AY5(AIt),"bJ",AY4(ALv)],TP,0,B,[DN],0,3,0,0,["db",AY6(AP6)],Rp,0,B,[Cw],0,3,0,0,["bq",AY4(APM)],SI,0,B,[Z],0,3,0,0,["g",AY4(APG)],SH,0,B,[Z],0,3,0,0,["g",
AY4(ASs)],SK,0,B,[Z],0,3,0,0,["g",AY4(AJO)],SJ,0,B,[Z],0,3,0,0,["g",AY4(AI2)],SG,0,B,[Z],0,3,0,0,["g",AY4(AU1)]]);
$rt_metadata([SF,0,B,[Z],0,3,0,0,["g",AY4(ANL)],Wa,0,B,[Cs],0,0,0,0,["c3",AY5(AIz),"cp",AY6(ARL),"bJ",AY4(AQ3),"ce",AY5(AVD)],C2,0,B,[],3,3,0,F7,0,Rm,0,B,[Cs],0,0,0,0,["cp",AY6(ARL),"ce",AY5(ANl),"c3",AY5(AIJ),"bJ",AY4(ALE)],AAn,0,B,[DN],0,3,0,0,["db",AY6(AT2)],Y2,0,B,[Cw],0,3,0,0,["bq",AY4(AKx)],Y1,0,B,[E4],0,3,0,0,["g8",AY5(AOf)],Y0,0,B,[E4],0,3,0,0,["g8",AY5(AKG)],YZ,0,B,[Fx],0,3,0,0,["dK",AY3(AO1)],Y3,0,B,[Fx],0,3,0,0,["dK",AY3(ATi)],TM,0,B,[Cw],0,3,0,0,["bq",AY4(AUW)],AAb,0,B,[Cw],0,3,0,0,["bq",AY4(AKh)],AAd,
0,B,[EN],0,3,0,0,["bq",AY4(AIv)],AAc,0,B,[DN],0,3,0,0,["db",AY6(ASq)],AFV,0,B,[],0,3,0,0,["bM",AY4(AKs)],Dc,0,B,[],3,3,0,ALP,0,Cl,0,Cr,[],12,3,0,AFy,0,JD,0,B,[],0,3,0,0,0,IN,0,B,[],0,3,0,0,0,AEk,0,B,[],0,3,0,0,0,DP,0,B,[],3,3,0,AIl,0,Qt,0,B,[Bz],3,3,0,0,0,QP,0,B,[Qt],0,3,0,0,["xl",AY5(AMh)],Qu,0,B,[Bz],3,3,0,0,0,QN,0,B,[Qu],0,3,0,0,["xl",AY5(ANp)],ACf,0,B,[],0,3,0,0,0,AA3,0,B,[Bz],3,3,0,0,0,Kg,0,B,[Dx],0,3,0,0,["ej",AY3(AE_)],YR,0,B,[],0,3,0,0,0,DU,0,B,[],3,3,0,APv,0,Ha,0,B,[],3,3,0,0,0,P4,0,B,[Ha],0,3,0,0,
["od",AY6(ASb)],P5,0,B,[Ha],0,3,0,0,0,TA,0,B,[Cs],0,0,0,0,["bJ",AY4(AVO),"cp",AY6(ARt),"ce",AY5(AVy),"c3",AY5(APn)],WM,0,B,[Z],0,3,0,0,["g",AY4(AQl)],AHl,0,B,[],0,3,0,0,0,X5,0,B,[Z],0,3,0,0,["g",AY4(ANq)],WZ,0,B,[Cw],0,3,0,0,["bq",AY4(AM0)],Us,0,B,[Cs],0,0,0,0,["ce",AY5(AUd),"c3",AY5(AIz),"cp",AY6(ARL),"bJ",AY4(AVu)],ACi,0,B,[],0,3,0,0,0,I1,0,B,[],0,3,0,0,0,Jw,0,B,[],4,3,0,0,0,ABO,0,B,[],0,3,0,0,0,Cm,0,Cr,[],12,3,0,ACJ,0,AGP,0,B,[],0,3,0,0,0,ADe,0,B,[Bz],4,3,0,0,0,AHk,0,B,[],0,3,0,0,0,ABT,0,B,[],3,3,0,0,0,CW,
0,B,[Bz],1,3,0,0,0,AEK,0,CW,[],1,3,0,0,0]);
$rt_metadata([AFt,0,CW,[],1,3,0,0,0,ACj,0,CW,[],1,3,0,0,0,ACD,0,CW,[],1,3,0,0,0,AFZ,0,CW,[],1,3,0,0,0,Y8,0,B,[Bh],0,3,0,0,["o",AY3(ANP)],GJ,0,Cr,[],12,3,0,APo,0,ABF,0,B,[],0,3,0,0,0,IC,0,B,[],0,3,0,0,0,W_,0,B,[],0,3,0,0,0,MK,0,B,[],0,3,0,0,0,AC4,0,B,[],4,3,0,0,0,PM,0,B,[Cs],0,0,0,0,["ce",AY5(AUd),"c3",AY5(AIz),"cp",AY6(ARL),"bJ",AY4(AWg)],ADb,0,B,[Bz],1,3,0,0,0,Zn,0,B,[Z],0,3,0,0,["g",AY4(AV8)],XX,0,B,[E7],0,3,0,0,["dK",AY3(AVG)],AFp,0,B,[],0,3,0,0,0,AEG,0,B,[],3,3,0,0,0,Mr,0,B,[],3,3,0,0,0,R3,0,B,[Mr],0,3,
0,0,["sS",AY4(AJW)],Ym,0,B,[Z],0,3,0,0,["g",AY4(AP7)],AFi,0,B,[],0,3,0,0,0,Ru,0,B,[Dx],0,3,0,0,0,AGY,0,B,[],0,3,0,0,0,UY,0,B,[Z],0,3,0,0,["g",AY4(AVP)],AA1,0,B,[],0,3,0,0,0,AGa,0,B,[CG],0,3,0,0,["bM",AY4(AIg),"nc",AY3(AR5),"kR",AY4(ARy)],Tm,0,B,[Z],0,3,0,0,["g",AY4(ARX)],Uf,0,B,[],3,3,0,0,0,W6,0,B,[Z],0,3,0,0,["g",AY4(AJX)],Fc,0,B,[],3,3,0,0,0,O1,0,B,[Fc],0,0,0,0,["cv",AY3(B5),"b2",AY3(B7),"ma",AY3(SU)],Gd,0,I7,[],0,3,0,0,0,Zr,0,E3,[],0,3,0,0,0,AF6,0,B,[],0,3,0,0,0,Ux,0,D4,[Ek,CP],0,3,0,0,0,XT,0,B,[],0,3,0,
0,0,Xv,0,B,[],0,3,0,0,0,Xi,0,B,[Z],0,3,0,0,["g",AY4(AUE)],Z8,0,B,[Bh],0,3,0,0,["o",AY3(ASC)],ZB,0,D6,[CG],0,3,0,0,0,FW,0,B,[],0,0,0,0,0,If,0,B,[],4,3,0,0,0,Xd,0,B,[],0,3,0,0,0,M3,0,B,[],1,3,0,0,0,ADA,0,CW,[],1,3,0,0,0,NJ,0,B,[Z],0,3,0,0,["g",AY4(AOA)],RZ,0,B,[Z],0,3,0,0,["g",AY4(AI8)],So,0,B,[Z],0,3,0,0,["g",AY4(AP1)],Fg,0,B,[Dx],0,3,0,0,["ej",AY3(AR8),"j$",AY3(AQc),"ka",AY6(Ta),"fF",AY4(AGC),"lx",AY4(AON),"lp",AY4(AU3),"rG",AY5(ASg),"cp",AY6(AM_),"ce",AY5(AJK),"c3",AY5(APH),"bJ",AY4(AUF),"db",AY6(AR4)],Gn,
0,Fg,[],0,3,0,0,0]);
$rt_metadata([Si,0,Gn,[H6],0,3,0,0,["xU",AY3(AQd),"uK",AY3(AL5),"ej",AY3(AUC),"rG",AY5(AK5),"fF",AY4(AIn),"lp",AY4(ARv),"lx",AY4(ATk),"xm",AY3(ACe),"bJ",AY4(AOF),"ce",AY5(ALV),"cp",AY6(ARP),"hN",AY4(ATG)],Ow,0,B,[Bh],0,3,0,0,["o",AY3(AMm)],ACI,0,Fg,[],0,3,0,0,["ej",AY3(ATf),"ka",AY6(AMy),"fF",AY4(ASn),"cp",AY6(ATS),"ce",AY5(ATj),"c3",AY5(AP_),"bJ",AY4(APO),"db",AY6(ALK),"j$",AY3(AVn)],Qg,0,Gn,[],0,3,0,0,["xm",AY3(AKA),"j$",AY3(AVq),"lp",AY4(ARD),"fF",AY4(AVR),"lx",AY4(AIN)],YN,0,B,[Z],0,3,0,0,0,TR,0,D6,[CG],
0,3,0,0,0,QA,0,B,[Bh],0,3,0,0,["o",AY3(ATs)],O5,0,B,[Bh],0,3,0,0,["o",AY3(AJ8)],VQ,0,B,[],0,3,0,0,0,I3,0,B,[],0,3,0,0,0,Xs,0,Fg,[],0,3,0,0,0,V0,0,B,[],0,3,0,0,0,UE,0,B,[Bh],0,3,0,0,["o",AY3(AJk)],PP,0,B,[Z],0,3,0,0,["g",AY4(AIx)],PO,0,B,[Z],0,3,0,0,["g",AY4(AIW)],Lc,0,B,[],0,3,0,0,0,CS,0,Bv,[],0,3,0,0,0,AE3,0,E3,[],0,3,0,0,0,V3,0,B,[Z],0,3,0,0,["g",AY4(AMi)],Sc,0,B,[Z],0,3,0,0,0,TZ,0,B,[Z],0,3,0,0,["g",AY4(ALn)],TY,0,B,[Z],0,3,0,0,["g",AY4(AUB)],Li,0,M3,[],1,3,0,0,0,Vn,0,Li,[],0,3,0,0,0,ZX,0,B,[Z],0,3,0,0,["g",
AY4(AUu)],Oa,0,B,[E7],0,3,0,0,["dK",AY3(ART)],N_,0,B,[E7],0,3,0,0,["dK",AY3(AKS)],V5,0,B,[E7],0,3,0,0,["dK",AY3(AMZ)],U1,0,B,[Bh],0,3,0,0,["o",AY3(AUl)],SL,0,B,[BZ],0,3,0,0,["bd",AY4(AHP)],Wv,0,B,[BZ],0,3,0,0,["bd",AY4(AVh)],Og,0,B,[Z],0,3,0,0,0,AGZ,0,B,[B9],0,3,0,0,0,AGB,0,B,[B9],0,3,0,0,0,OX,0,B,[Z],0,3,0,0,["g",AY4(AKu)],OW,0,B,[Z],0,3,0,0,["g",AY4(ASX)],NF,0,B,[Z],0,3,0,0,["g",AY4(ATh)],XS,0,B,[Bh],0,3,0,0,["o",AY3(AJy)],Id,0,GX,[],0,0,0,0,0,Hw,0,Bv,[],0,3,0,0,0,WX,0,B,[Z],0,3,0,0,["g",AY4(AQD)],Ro,0,D6,
[CG],0,3,0,0,0,I8,0,B,[],4,3,0,0,0,NR,0,B,[BZ],0,3,0,0,["bd",AY4(AWk)],ABb,0,B,[Z],0,3,0,0,0,Wj,0,B,[],0,3,0,0,0,Zy,0,B,[Ha],0,3,0,0,["od",AY6(AUO)],FG,0,B,[],0,3,0,0,0,Z_,0,B,[Z],0,3,0,0,["g",AY4(AMr)],LH,0,FG,[],0,3,0,0,0]);
$rt_metadata([Ld,0,FG,[],0,3,0,0,0,Yf,0,B,[Z],0,3,0,0,["g",AY4(AIV)],Rw,0,B,[],0,3,0,0,0,Qs,0,B,[Z],0,3,0,0,["g",AY4(APp)],D$,0,Bv,[],0,3,0,0,0,O$,0,B,[],0,3,0,0,0,Ql,0,B,[Z],0,3,0,0,["g",AY4(ATW)],AGd,0,B,[],0,3,0,0,0,U9,0,B,[],0,0,0,0,0,ABJ,0,B,[],3,3,0,0,0,QG,0,B,[H0],3,3,0,0,["eY",AY4(AHB),"mM",AY4(ANQ)],EW,0,E8,[QG],1,3,0,0,["eY",AY4(AHB),"mM",AY4(ANQ)],QX,0,EW,[],0,0,0,0,["mM",AY4(ANQ)],Nq,0,B,[Z],0,3,0,0,["g",AY4(ALA)],W1,0,B,[Z],0,3,0,0,["g",AY4(AOD)],JU,0,B,[],0,3,0,0,["bM",AY4(AEB)],M2,0,JU,[],0,3,
0,0,["bM",AY4(AJp)],ER,0,B,[],0,3,0,0,["bM",AY4(ABA)],Il,0,ER,[],0,3,0,0,0,Jk,0,ER,[],0,3,0,0,["bM",AY4(AUJ)],JK,0,ER,[],0,3,0,0,["bM",AY4(AIC)],ZH,0,B,[BZ],0,3,0,0,["bd",AY4(ASO)],ZG,0,B,[BZ],0,3,0,0,["bd",AY4(AKR)],YT,0,B,[BZ],0,3,0,0,["bd",AY4(AMz)],YS,0,B,[BZ],0,3,0,0,["bd",AY4(ANo)],ACs,0,B,[],1,3,0,0,0,Y4,0,B,[],3,3,0,0,0,ZC,0,B,[Ct],0,3,0,0,["ck",AY4(AMn)],ABV,0,B,[],0,3,0,0,0,AHq,0,B,[],0,3,0,0,0,Zs,0,B,[Bh],0,3,0,0,["o",AY3(AIR)],Zt,0,B,[Bh],0,3,0,0,["o",AY3(AM6)],AGU,0,B,[CG],0,3,0,0,["bM",AY4(AQk)],Oq,
0,B,[Z],0,3,0,0,["g",AY4(AOB)],AAr,0,B,[Z],0,3,0,0,["g",AY4(AWi)],AFc,0,B,[],0,3,0,0,0,Fl,0,B,[],0,3,0,0,0,ABs,0,B,[],0,3,0,0,0,K5,0,EW,[],1,0,0,0,["eY",AY4(AHB),"mM",AY4(ANQ)],Xj,0,K5,[],0,0,0,0,["eY",AY4(AHB),"mM",AY4(ANQ)],Mj,0,D4,[],1,0,0,0,0,Xg,0,Mj,[],0,0,0,0,0,MV,0,Gy,[Mc],1,0,0,0,["eY",AY4(AHB),"i0",AY3(AKJ),"nH",AY4(APh),"mM",AY4(ANX)],Xh,0,MV,[],0,0,0,0,["eY",AY4(AHB),"j7",AY4(APq),"cU",AY3(AOt),"cb",AY3(ALf),"ed",AY3(AIH)],Xe,0,B,[Fc],0,0,0,0,["cv",AY3(AIo),"b2",AY3(AQR),"ma",AY3(ASF)],Q_,0,B,[Fc],
3,3,0,0,0,Xf,0,B,[Q_],0,0,0,0,0,AAA,0,B,[HI],0,3,0,0,0,Fd,0,B,[],0,0,0,0,0,UF,0,Fd,[Fc],0,0,0,0,0]);
$rt_metadata([JH,0,D$,[],0,3,0,0,0,It,0,Bv,[],0,3,0,0,0,MO,0,Bv,[],0,3,0,0,0,AGF,0,B,[Z],0,3,0,0,0,R_,0,B,[Bh],0,3,0,0,["o",AY3(AWn)],R1,0,B,[Bh],0,3,0,0,["o",AY3(AIY)],AE7,0,B,[],0,3,0,0,0,Hg,0,B,[],0,3,0,0,0,WD,0,EW,[],0,0,0,0,["eY",AY4(AHB),"mM",AY4(ANQ)],QY,0,E8,[],0,0,0,0,["eY",AY4(AHB),"mM",AY4(ANQ)],Su,0,B,[Na],3,3,0,0,0,O2,0,B,[Su],3,3,0,0,0,Hz,0,B,[O2],1,3,0,0,0,AC2,0,Hz,[],0,3,0,0,0,Vk,0,B,[Bh],0,3,0,0,["o",AY3(AK8)],Vi,0,B,[Bh],0,3,0,0,["o",AY3(AVf)],Vj,0,B,[Bh],0,3,0,0,["o",AY3(AKp)],Vh,0,B,[Bh],
0,3,0,0,["o",AY3(AMx)],SO,0,B,[Bh],0,3,0,0,["o",AY3(ARU)],SN,0,B,[Bh],0,3,0,0,["o",AY3(AQj)],SM,0,B,[Bh],0,3,0,0,["o",AY3(AV$)],R0,0,B,[],3,3,0,0,0,VM,0,B,[Bh],0,3,0,0,["o",AY3(AK2)],VV,0,B,[Ht],0,3,0,0,["nR",AY5(AUY)],NW,0,B,[],0,3,0,0,0,S1,0,B,[],0,3,0,0,0,Pf,0,B,[Z],0,3,0,0,["g",AY4(APC)],X2,0,B,[Z],0,3,0,0,["g",AY4(AMq)],X1,0,B,[Mr],0,3,0,0,["sS",AY4(Lf)],YL,0,BC,[],0,3,0,0,0,ZZ,0,B,[Bh],0,3,0,0,["o",AY3(ALC)],Z1,0,B,[Bh],0,3,0,0,["o",AY3(AVL)],Z0,0,B,[Bh],0,3,0,0,["o",AY3(AI6)],Xx,0,B,[Bh],0,3,0,0,["o",
AY3(AVj)],Xy,0,B,[Bh],0,3,0,0,["o",AY3(ALl)],RA,0,B,[E7],0,3,0,0,["dK",AY3(ARf)],Ub,0,B,[Bh],0,3,0,0,["o",AY3(ANm)],Uc,0,B,[Bh],0,3,0,0,["o",AY3(ATI)],Yt,0,B,[Bh],0,3,0,0,["o",AY3(AM$)],Yu,0,B,[Bh],0,3,0,0,["o",AY3(ASl)],Yo,0,B,[Bh],0,3,0,0,["o",AY3(APP)],Yp,0,B,[Bh],0,3,0,0,["o",AY3(ANv)],Yq,0,B,[Bh],0,3,0,0,["o",AY3(ATq)],Vd,0,B,[Ht],0,3,0,0,["nR",AY5(AJt)],RT,0,B,[BZ],0,3,0,0,["bd",AY4(AK4)],Ju,0,B,[Bz],3,3,0,0,0,NN,0,B,[Ju],0,3,0,0,["sR",AY3(ANt)],Nx,0,B,[Ju],0,3,0,0,["sR",AY3(AHD)],Wo,0,B,[Ha],0,3,0,0,
0,ZF,0,B,[BZ],0,3,0,0,["bd",AY4(AMV)]]);
$rt_metadata([Wt,0,Fd,[Fc],0,0,0,0,0,S4,0,Fd,[Fc],0,0,0,0,0,Wy,0,B,[],3,3,0,AXl,0,S0,0,B,[CP],4,3,0,0,0,ABm,0,B,[],0,3,0,0,0,AAl,0,B,[Z],0,3,0,0,["g",AY4(AQg)],TW,0,B,[Z],0,3,0,0,["g",AY4(APe)],TV,0,B,[Z],0,3,0,0,["g",AY4(ARz)],Gl,0,Cr,[],12,0,0,Un,0,PT,0,B,[Z],0,3,0,0,["g",AY4(AKB)],G9,0,B,[],3,3,0,0,0,Vw,0,B,[G9],0,3,0,0,["jW",AY6(APu)],Vx,0,B,[G9],0,3,0,0,["jW",AY6(AMW)],ID,0,B,[CP,CG],0,3,0,0,0,Kw,0,B,[],3,3,0,0,0,AD9,0,B,[Kw],0,3,0,0,0,Qe,0,B,[Kw],3,3,0,0,0,AD8,0,B,[Qe],0,3,0,0,0,T4,0,B,[G9],0,3,0,0,["jW",
AY6(AQe)],T3,0,B,[Fj],0,3,0,0,["bq",AY4(AUV)],T2,0,B,[Fj],0,3,0,0,["bq",AY4(ARG)],T5,0,B,[G9],0,3,0,0,["jW",AY6(APJ)],AAC,0,B,[Z],0,3,0,0,["g",AY4(AL0)],BK,0,B,[],1,0,0,0,["cq",AY6(Ia),"ct",AY7(Io),"iv",AY3(AJD),"T",AY4(AT4),"bY",AY4(AT3),"fR",AY3(AU8),"eJ",AY3(JQ)],Vv,0,B,[],32,0,0,AXW,0,Ut,0,B,[Z],0,3,0,0,["g",AY4(ARN)],ND,0,B,[Bh],0,3,0,0,["o",AY3(AUZ)],AAs,0,B,[Z],0,3,0,0,["g",AY4(AQm)],AAt,0,B,[Z],0,3,0,0,["g",AY4(AL2)],Z3,0,B,[Z],0,3,0,0,["g",AY4(AUc)],CT,0,BK,[],0,0,0,Nb,["c",AY6(AI4),"N",AY4(AJm)],Hb,
0,B,[],0,0,0,0,0,Jo,0,BE,[],0,3,0,0,0,Zp,0,B,[BZ],0,3,0,0,["bd",AY4(AQ8)],AEx,0,B,[Bz],3,3,0,0,0,V8,0,B,[BZ],0,3,0,0,["bd",AY4(AQK)],Tw,0,CT,[],0,0,0,0,["c",AY6(AIr),"N",AY4(ASu)],ZW,0,CT,[],0,0,0,0,["c",AY6(AKk)],Ry,0,CT,[],0,0,0,0,["c",AY6(AJA)],UG,0,CT,[],0,0,0,0,["c",AY6(AIy),"N",AY4(AQT)],FU,0,CT,[],0,0,0,0,["c",AY6(AUn)],B4,0,BK,[],1,0,0,0,["c",AY6(AVQ),"b3",AY3(ATw),"N",AY4(AND)],AF$,0,B4,[],0,0,0,0,["bw",AY5(ASV),"cq",AY6(ALJ),"ct",AY7(AKc),"N",AY4(AIw)],B0,0,BK,[],0,0,0,0,["c",AY6(AMu),"T",AY4(AQM),
"bY",AY4(AOu),"N",AY4(ARx),"eJ",AY3(AJ$)],JG,0,B0,[],0,0,0,0,["c",AY6(AQx),"N",AY4(ARY)],DX,0,JG,[],0,0,0,0,["c",AY6(AKP),"T",AY4(ARE)],NL,0,DX,[],0,0,0,0,["c",AY6(AQH),"N",AY4(AT9)],Ya,0,DX,[],0,0,0,0,["c",AY6(AJh),"N",AY4(ATC)],S5,0,DX,[],0,0,0,0,["c",AY6(AJ5),"N",AY4(AWe)],Vp,0,DX,[],0,0,0,0,["c",AY6(AHX),"N",AY4(ASf)]]);
$rt_metadata([GY,0,B0,[],0,0,0,0,["c",AY6(AIj),"cq",AY6(AOQ),"ct",AY7(ASz),"bY",AY4(AOm),"fR",AY3(AQP),"eJ",AY3(AVa)],Hd,0,B,[],1,0,0,0,0,X,0,Hd,[],1,0,0,Qj,["dv",AY3(AJj),"fh",AY3(AIP),"j3",AY3(ATn),"hG",AY3(AU5)],AB6,0,X,[],0,0,0,0,["l",AY4(C3),"dv",AY3(CY),"fh",AY3(ALB),"j3",AY3(ATU),"cJ",AY3(APQ),"hG",AY3(ALU)],J2,0,Bv,[],0,3,0,0,0,Ei,0,BK,[],1,0,0,0,["bY",AY4(ASB),"N",AY4(AUg),"eJ",AY3(APc)],C5,0,Ei,[],0,0,0,0,["c",AY6(AH0)],Fu,0,C5,[],0,0,0,0,["c",AY6(AI7)],CV,0,Ei,[],0,0,0,0,["c",AY6(AIi)],EP,0,C5,[],
0,0,0,0,["c",AY6(AOZ),"T",AY4(AWj)],Yr,0,C5,[],0,0,0,0,["c",AY6(AVE),"cq",AY6(APK)],Bd,0,B,[],1,0,0,0,0,Dk,0,BE,[],0,3,0,0,0,Od,0,Hd,[Ek],0,0,0,0,["cJ",AY3(APV)],PL,0,BK,[],0,0,0,0,["c",AY6(AN3),"N",AY4(AQL)],Zf,0,B,[Ek,CP],0,3,0,0,0,NX,0,B0,[],0,0,0,0,0,Sd,0,B0,[],0,0,0,0,["c",AY6(AIZ),"T",AY4(AQv),"N",AY4(AJF),"bY",AY4(AJi)],DK,0,B0,[],0,0,0,0,["c",AY6(ALs),"l",AY4(AL$),"bY",AY4(AIU),"T",AY4(ATd),"N",AY4(ALG)],JZ,0,DK,[],0,0,0,0,["l",AY4(ANE)],ABS,0,B4,[],0,0,0,0,["bw",AY5(AN4)],Ev,0,B4,[],0,0,0,0,["bw",AY5(Nt),
"bY",AY4(AQO)],Qk,0,B0,[],0,0,0,0,["T",AY4(AOX),"c",AY6(AHO),"bY",AY4(AJv),"N",AY4(ATX)],EB,0,B4,[],0,0,0,0,["b3",AY3(ANK),"bw",AY5(AML),"cq",AY6(ALp),"ct",AY7(ANS),"bY",AY4(ATQ)],AGN,0,B4,[],0,0,0,0,["bw",AY5(AHE)],AAT,0,B4,[],0,0,0,0,["bw",AY5(AH9)],FD,0,B0,[],0,0,0,0,["T",AY4(AU_),"c",AY6(AQw),"bY",AY4(AN5),"N",AY4(ARF)],ZE,0,FD,[],0,0,0,0,0,VF,0,FD,[],0,0,0,0,0,AAG,0,CV,[],0,0,0,0,["c",AY6(AKr)],Rq,0,CV,[],0,0,0,0,["c",AY6(APw)],Ge,0,CV,[],0,0,0,0,["c",AY6(ATa),"T",AY4(AUt)],Q5,0,Ge,[],0,0,0,0,["c",AY6(ANN),
"T",AY4(APX)],FB,0,CV,[],0,0,0,0,["c",AY6(AWa)],Ov,0,FB,[],0,0,0,0,["c",AY6(ANc)],Tl,0,CV,[],0,0,0,0,["c",AY6(AVk)],Sp,0,Ge,[],0,0,0,0,["c",AY6(AJI)],WF,0,FB,[],0,0,0,0,["c",AY6(AIF)],Tn,0,Ei,[],0,0,0,0,["c",AY6(AVW),"cq",AY6(ATr)],PV,0,Ei,[],0,0,0,0,["c",AY6(AQQ),"cq",AY6(AHS)],E5,0,B,[],1,0,0,0,0,AAH,0,C5,[],0,0,0,0,["c",AY6(AIG)],Yk,0,EP,[],0,0,0,0,["c",AY6(APs)],QK,0,Fu,[],0,0,0,0,["c",AY6(ASD)],Sk,0,C5,[],0,0,0,0,["c",AY6(AQJ)],VU,0,EP,[],0,0,0,0,["c",AY6(AIS)],S6,0,Fu,[],0,0,0,0,["c",AY6(ASZ)],Lh,0,BK,
[],4,0,0,0,["c",AY6(AOs),"N",AY4(ANn)],ACG,0,BK,[],0,0,0,0,["c",AY6(AJf),"N",AY4(AJr)],PQ,0,BK,[],0,0,0,0,["c",AY6(ANG),"N",AY4(AV6)]]);
$rt_metadata([Zl,0,BK,[],4,0,0,0,["c",AY6(ARr),"N",AY4(AKf)],YQ,0,BK,[],0,0,0,0,["c",AY6(AQr),"N",AY4(AHC)],OJ,0,BK,[],0,0,0,0,["c",AY6(AJ7),"N",AY4(AMl)],AGw,0,B0,[],0,0,0,0,["c",AY6(AVr),"T",AY4(AJx),"iv",AY3(AP4),"N",AY4(AJw)],AB4,0,B0,[],4,0,0,0,["c",AY6(AQf),"T",AY4(ASp),"iv",AY3(AHx),"N",AY4(AVM)],AGj,0,BK,[],4,0,0,0,["c",AY6(AN$),"N",AY4(AMf)],AEv,0,BK,[],0,0,0,0,["c",AY6(AQo),"N",AY4(AL6)],AAQ,0,BK,[],0,0,0,0,["c",AY6(ANf),"N",AY4(AKj)],HB,0,B0,[],0,0,0,0,["c",AY6(AIL),"T",AY4(ARC),"N",AY4(AR1)],AGp,
0,HB,[],0,0,0,0,["c",AY6(AKq),"cq",AY6(AT6),"ct",AY7(AIs),"bY",AY4(APj)],ADx,0,HB,[],0,0,0,0,["c",AY6(AOK)],PK,0,GK,[Iv],0,3,0,0,["mY",AY7(ALX),"l0",AY6(AJl),"iG",AY4(AJR),"nv",AY5(ATv)],Tq,0,B4,[],0,0,0,0,["bw",AY5(AKL),"cq",AY6(AJc),"ct",AY7(AMk),"bY",AY4(AMX)],AAP,0,B4,[],0,0,0,0,["bw",AY5(AOS)],OC,0,B4,[],0,0,0,0,["bw",AY5(ASG)],HA,0,B,[],4,0,0,ASd,0,NC,0,B4,[],0,0,0,0,["bw",AY5(ASN)],LQ,0,B0,[],0,0,0,0,["T",AY4(AQG),"c",AY6(AKg),"cq",AY6(AMU),"ct",AY7(AKU),"bY",AY4(AIq),"N",AY4(ATD)],L9,0,B0,[],0,0,0,0,
["T",AY4(AJQ),"c",AY6(AHY),"cq",AY6(AQ1),"ct",AY7(ASE),"bY",AY4(AKM),"N",AY4(ARc)],D5,0,B4,[],0,0,0,0,["bw",AY5(AR2),"cq",AY6(APR),"ct",AY7(AJP),"bY",AY4(ARK)],W9,0,E5,[],0,0,0,0,["ij",AY4(AJ1),"um",AY5(ARS)],W$,0,E5,[],0,0,0,0,["ij",AY4(AS1),"um",AY5(AUX)],AFq,0,B,[],0,0,0,0,0,AA9,0,B,[],0,0,0,0,0,LM,0,Bd,[],0,0,0,0,["F",AY3(ADG)],KQ,0,Bd,[],0,0,0,0,["F",AY3(AEn)],AFj,0,Bd,[],0,0,0,0,["F",AY3(ASt)],AFP,0,Bd,[],0,0,0,0,["F",AY3(ATF)],AFT,0,Bd,[],0,0,0,0,["F",AY3(ALt)],LG,0,Bd,[],0,0,0,0,["F",AY3(AB8)],Ml,0,
LG,[],0,0,0,0,["F",AY3(AC7)],AHn,0,Bd,[],0,0,0,0,["F",AY3(AMT)],No,0,Ml,[],0,0,0,0,["F",AY3(AAN)],ADY,0,No,[],0,0,0,0,["F",AY3(APd)],AEh,0,Bd,[],0,0,0,0,["F",AY3(AKF)],ACw,0,Bd,[],0,0,0,0,["F",AY3(APa)],ACg,0,Bd,[],0,0,0,0,["F",AY3(AU4)],AFY,0,Bd,[],0,0,0,0,["F",AY3(AP0)],AHw,0,Bd,[],0,0,0,0,["F",AY3(AHQ)],AFr,0,Bd,[],0,0,0,0,["F",AY3(ANi)],AFb,0,Bd,[],0,0,0,0,["F",AY3(AR9)],AGb,0,Bd,[],0,0,0,0,["F",AY3(AKC)],ABq,0,Bd,[],0,0,0,0,["F",AY3(AK3)],AA2,0,Bd,[],0,0,0,0,["F",AY3(AUS)],AFw,0,Bd,[],0,0,0,0,["F",AY3(AHG)],AFJ,
0,Bd,[],0,0,0,0,["F",AY3(AOc)],ACY,0,Bd,[],0,0,0,0,["F",AY3(ALc)],AEl,0,Bd,[],0,0,0,0,["F",AY3(AMo)],AG6,0,Bd,[],0,0,0,0,["F",AY3(AOe)],AFG,0,Bd,[],0,0,0,0,["F",AY3(AT0)]]);
$rt_metadata([ADt,0,Bd,[],0,0,0,0,["F",AY3(ARo)],ACW,0,Bd,[],0,0,0,0,["F",AY3(APS)],AHt,0,Bd,[],0,0,0,0,["F",AY3(ASi)],Kb,0,Bd,[],0,0,0,0,["F",AY3(AEj)],AGe,0,Kb,[],0,0,0,0,["F",AY3(APD)],AD3,0,LM,[],0,0,0,0,["F",AY3(AI$)],ACR,0,KQ,[],0,0,0,0,["F",AY3(AMG)],ACl,0,Bd,[],0,0,0,0,["F",AY3(AOv)],ACM,0,Bd,[],0,0,0,0,["F",AY3(AUH)],ADO,0,Bd,[],0,0,0,0,["F",AY3(AL1)],ADZ,0,Bd,[],0,0,0,0,["F",AY3(AHH)],ACq,0,B,[],4,0,0,0,0,ABP,0,B,[],4,3,0,0,0,OK,0,B,[],0,3,0,0,0,AFB,0,B,[],0,3,0,0,0,ADq,0,B,[],4,3,0,0,0,Ni,0,Bv,[],
0,3,0,0,0,AB5,0,B,[Fj],0,3,0,0,0,QQ,0,B,[Z],0,3,0,0,["g",AY4(APt)],T_,0,B,[Z],0,3,0,0,["g",AY4(AMe)],RY,0,B,[Z],0,3,0,0,["g",AY4(AO_)],AEi,0,Hz,[],0,3,0,0,0,Sm,0,B,[],3,3,0,0,0,Qn,0,B,[Z],0,3,0,0,0,RP,0,B,[Z],0,3,0,0,0,Yn,0,X,[],0,0,0,0,["l",AY4(ALz)],Yl,0,X,[],0,0,0,0,["l",AY4(AIf)],P0,0,X,[],0,0,0,0,["l",AY4(AOk),"cJ",AY3(AMs)],P9,0,X,[],0,0,0,0,["l",AY4(AR7)],P7,0,X,[],0,0,0,0,["l",AY4(ASM)],P8,0,X,[],0,0,0,0,["l",AY4(AOR)],Qa,0,X,[],0,0,0,0,["l",AY4(AK9)],Qb,0,X,[],0,0,0,0,["l",AY4(AHy)],P$,0,X,[],0,0,0,
0,["l",AY4(AMw)],P_,0,X,[],0,0,0,0,["l",AY4(AOV)],Qc,0,X,[],0,0,0,0,["l",AY4(AT$)],Qd,0,X,[],0,0,0,0,["l",AY4(AKw)],PZ,0,X,[],0,0,0,0,["l",AY4(AWm)],QR,0,X,[],0,0,0,0,["l",AY4(AMD)],PX,0,X,[],0,0,0,0,["l",AY4(AKv)],PY,0,X,[],0,0,0,0,["l",AY4(AMb)],P3,0,X,[],0,0,0,0,["l",AY4(ANI)],PW,0,X,[],0,0,0,0,["l",AY4(ATN)],P1,0,X,[],0,0,0,0,["l",AY4(AJn)],P2,0,X,[],0,0,0,0,["l",AY4(ARb)],MR,0,B,[],3,3,0,0,0,Uj,0,B,[MR],4,3,0,0,0,AD5,0,B,[Ht],0,3,0,0,0,C1,0,B,[],3,3,0,AFW,0,Cq,0,Cr,[],12,3,0,AE1,0]);
$rt_metadata([DH,0,B,[],3,3,0,AID,0,XZ,0,B,[],0,3,0,0,0,Xc,0,B,[Z],0,3,0,0,["g",AY4(AOx)],Ol,0,GY,[],0,0,0,0,["cq",AY6(AL4),"ct",AY7(AV_),"fR",AY3(AKe)],R9,0,Bv,[],0,3,0,0,0,Zw,0,Bv,[],0,3,0,0,0,W4,0,Gd,[],0,3,0,0,0,RS,0,Gd,[],0,3,0,0,0,AFC,0,B,[Fj],0,0,0,0,0,WY,0,B,[],0,3,0,0,0,AC0,0,B,[Sm],0,3,0,0,0,Wr,0,B,[Bh],0,3,0,0,0,V6,0,B,[Z],0,3,0,0,0,V9,0,B,[Z],0,3,0,0,0,GR,0,B,[],0,3,0,AX3,0,Tp,0,B,[Ik],0,3,0,0,0,W2,0,B,[MR],0,0,0,0,0,NK,0,B,[Bh],0,3,0,0,["o",AY3(AMS)],D_,0,B,[],1,3,0,0,0,ST,0,D_,[],0,3,0,0,0,OB,
0,D_,[],0,3,0,0,0,Ph,0,D_,[],0,3,0,0,0,Yj,0,D_,[],0,3,0,0,0,UU,0,X,[],0,0,0,0,["l",AY4(AUm)],NQ,0,X,[],0,0,0,0,["l",AY4(AI9)],TH,0,X,[],0,0,0,0,["l",AY4(AIQ)],TG,0,X,[],0,0,0,0,["l",AY4(ALZ)],YY,0,X,[],0,0,0,0,["l",AY4(ANu)],QE,0,X,[],0,0,0,0,["l",AY4(AUp)],PF,0,X,[],0,0,0,0,["l",AY4(AQC)],SC,0,X,[],0,0,0,0,["l",AY4(ASc)],NI,0,X,[],0,0,0,0,["l",AY4(AVI)],NO,0,X,[],0,0,0,0,["l",AY4(AKT)],Pe,0,X,[],0,0,0,0,["l",AY4(AUA)],Q9,0,X,[],0,0,0,0,["l",AY4(AO8)],Re,0,X,[],0,0,0,0,["l",AY4(ARA)],Vz,0,X,[],0,0,0,0,["l",
AY4(AT_)],Uk,0,X,[],0,0,0,0,["l",AY4(AVd)],N6,0,X,[],0,0,0,0,["l",AY4(AKD)],M_,0,X,[],0,0,0,0,["l",AY4(AQE)],Tz,0,M_,[],0,0,0,0,["l",AY4(ATe)],ABI,0,B,[Z],0,0,0,0,0,RG,0,B,[Ju],0,3,0,0,["sR",AY3(AOE)],Xu,0,B,[BZ],0,3,0,0,["bd",AY4(ARq)],Xw,0,B,[BZ],0,3,0,0,["bd",AY4(AP5)],Vl,0,B,[BZ],0,3,0,0,["bd",AY4(AMO)],Vo,0,B,[BZ],0,3,0,0,["bd",AY4(AH7)],Wq,0,B,[BZ],0,3,0,0,["bd",AY4(AOz)],Oo,0,B,[Z],0,3,0,0,["g",AY4(AVt)],Op,0,B,[Z],0,3,0,0,["g",AY4(ALH)]]);
$rt_metadata([Om,0,B,[Z],0,3,0,0,["g",AY4(AUw)],ABD,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Pm=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","#diffDemo","ClassL.java","ClassR.java",
"[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGB);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColor = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","WebGraphics::ctor finish"," ",".",
"FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ",
"Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","selectScene ","CodiconDemo","RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1",
"LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Editor0","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","Int","Iter","VP","Resolve","Rep","parser >","open ...","Development >","text","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","ScopeUtils.resolveAll","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","activity","js","cpp","Illegal language: ","asyncIterativeParsing","CppProxy.parseFullFile","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","JavaProxy.parseFullFileScopes","setDiffModel","deleteDiffModel","ns-resize","ew-resize","trying to display with unknown screen size and dpr",
".cpp",".cc",".cxx",".hpp",".c",".h",".js",".activity","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","\\n","#606366","#2B2B2B","#A4A3A3","#323232","#303C47","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ",
"-","+","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐",
"c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(",
"RegionTexture: Text height cannot be zero.","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","#6AAB73","comma","error","#F75464","unused","#6F737A","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type",
"operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#3C3F41","#4B6EAF","#787878","onEnter item ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA","nwse-resize","nesw-resize","Expected "," ints to write, but "," written"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ",
"showDirectoryPicker -> ","Resolved in ","No definition or usages"," ints to read, but "," read","Unknown scope type: ","readClipboardText error: ","Unexpected type: ","Empty Expression","Unexpected ref node type: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable",
"javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya",
"Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols",
"CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement",
"Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates",
"HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf",
"Viewport parsed in ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
BA.prototype.toString=function(){return $rt_ustr(this);};
BA.prototype.valueOf=BA.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AJL(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CH=Long_add;var Iz=Long_sub;var B_=Long_mul;var AFu=Long_div;var AH8=Long_rem;var AW5=Long_or;var C0=Long_and;var A21=Long_xor;var GU=Long_shl;var AXm=Long_shr;var F9=Long_shru;var A22=Long_compare;var Ic=Long_eq;var A23=Long_ne;var AW0=Long_lt;var ALh=Long_le;var A24=Long_gt;var A25=Long_ge;var A26=Long_not;var AXH=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AXN);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=VI.prototype;c.f=c.bd;c=VG.prototype;c.f=c.bd;c=Oz.prototype;c.f=c.bd;c=AD1.prototype;c.get=c.AY;Object.defineProperty(c,"length",{get:c.Ke});c=Pg.prototype;c.f=c.bd;c=ABf.prototype;c.removeEventListener=c.G8;c.dispatchEvent=c.E0;c.get=c.AY;c.addEventListener=c.Dc;Object.defineProperty(c,"length",{get:c.E8});c=Qx.prototype;c.accept=c.xC;c=Qy.prototype;c.accept=c.xC;c=Xp.prototype;c.onAnimationFrame=c.G_;c=Xn.prototype;c.f=c.xl;c=Xk.prototype;c.handleEvent=c.ck;c=Xl.prototype;c.f=c.bd;c=YB.prototype;c.handleEvent
=c.ck;c=YC.prototype;c.handleEvent=c.ck;c=YD.prototype;c.handleEvent=c.ck;c=YE.prototype;c.handleEvent=c.ck;c=YF.prototype;c.handleEvent=c.ck;c=YG.prototype;c.handleEvent=c.ck;c=YH.prototype;c.handleEvent=c.ck;c=YI.prototype;c.handleEvent=c.ck;c=YJ.prototype;c.handleEvent=c.ck;c=YK.prototype;c.handleEvent=c.ck;c=AAh.prototype;c.handleEvent=c.ck;c=AAi.prototype;c.handleEvent=c.ck;c=AAj.prototype;c.handleEvent=c.ck;c=AAk.prototype;c.handleEvent=c.ck;c=Wh.prototype;c.handleEvent=c.ck;c=ZP.prototype;c.f=c.bd;c=
ZQ.prototype;c.f=c.bd;c=OI.prototype;c.f=c.bd;c=OH.prototype;c.f=c.bd;c=OF.prototype;c.f=c.bd;c=OE.prototype;c.f=c.bd;c=O_.prototype;c.accept=c.xC;c=NS.prototype;c.f=c.bd;c=NV.prototype;c.f=c.bd;c=NT.prototype;c.f=c.bd;c=QP.prototype;c.f=c.xl;c=QN.prototype;c.f=c.xl;c=SL.prototype;c.f=c.bd;c=Wv.prototype;c.f=c.bd;c=NR.prototype;c.f=c.bd;c=ZH.prototype;c.f=c.bd;c=ZG.prototype;c.f=c.bd;c=YT.prototype;c.f=c.bd;c=YS.prototype;c.f=c.bd;c=ZC.prototype;c.handleEvent=c.ck;c=RT.prototype;c.f=c.bd;c=NN.prototype;c.onTimer
=c.sR;c=Nx.prototype;c.onTimer=c.sR;c=ZF.prototype;c.f=c.bd;c=Zp.prototype;c.f=c.bd;c=V8.prototype;c.f=c.bd;c=RG.prototype;c.onTimer=c.sR;c=Xu.prototype;c.f=c.bd;c=Xw.prototype;c.f=c.bd;c=Vl.prototype;c.f=c.bd;c=Vo.prototype;c.f=c.bd;c=Wq.prototype;c.f=c.bd;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);