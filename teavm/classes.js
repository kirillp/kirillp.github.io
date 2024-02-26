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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hi=f;}
function $rt_cls(cls){return Sv(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Hi(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b$.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ARf(t);}
function $rt_throwableCause(t){return AZg(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A4c());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A4d(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A4e());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BK=$rt_compare;var A4f=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var I4=$rt_isInstance;var A4g=$rt_nativeThread;var A4h=$rt_suspending;var A4i=$rt_resuming;var A4j=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var Bb=$rt_imul;var EQ=$rt_wrapException;var A4k=$rt_checkBounds;var A4l=$rt_checkUpperBound;var A4m=$rt_checkLowerBound;var A4n=$rt_wrapFunction0;var A4o=$rt_wrapFunction1;var A4p=$rt_wrapFunction2;var A4q=$rt_wrapFunction3;var A4r=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AIk=$rt_createCharArrayFromData;var A2i=$rt_createByteArrayFromData;var A2S=$rt_createShortArrayFromData;var DT=$rt_createIntArrayFromData;var A4s=$rt_createBooleanArrayFromData;var A4t=$rt_createFloatArrayFromData;var A4u=$rt_createDoubleArrayFromData;var AHF=$rt_createLongArrayFromData;var A4b=$rt_createBooleanArray;var DH=$rt_createByteArray;var A4v=$rt_createShortArray;var B4=$rt_createCharArray;var BN=$rt_createIntArray;var A4w=$rt_createLongArray;var AKz=$rt_createFloatArray;var A4x
=$rt_createDoubleArray;var BK=$rt_compare;var A4y=$rt_castToClass;var A4z=$rt_castToInterface;var A4A=Long_toNumber;var Bp=Long_fromInt;var A4B=Long_fromNumber;var D=Long_create;var FB=Long_ZERO;var A4C=Long_hi;var GG=Long_lo;
function B(){this.$id$=0;}
function BI(a){return Sv(a.constructor);}
function APh(a,b){return a!==b?0:1;}
function ALL(a){var b,c,d,e,f,g,h,i,j;b=Mo(a);if(!b)c=C(0);else{d=(((32-Wx(b)|0)+4|0)-1|0)/4|0;e=B4(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Ie((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Hi(e);}j=new K;M(j);H(H(j,C(1)),c);return L(j);}
function Mo(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AOD(a){var b,c,d;if(!I4(a,Er)&&a.constructor.$meta.item===null){b=new TI;X(b);N(b);}b=AKD(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Rp(){var a=this;B.call(a);a.AH=0;a.pO=null;}
function A3A(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AJF();AHk();AE6();AFM();AG2();AH4();AFd();ADy();AEK();AGu();AHj();AJf();AFx();AIx();AH8();AGa();AId();AJU();AFf();AFs();AHK();AEM();AJm();AIW();AJk();AHw();AGU();c=(ADM()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Xx(C(2),C(3));else{d=new Rp;BD(d);e=new AAs;e.za=d;f=new V0;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<3){i=new $rt_globals.Worker(c);j=new O_;j.xn=i;j.xo=g;j.xp=3;j.xq
=e;j.xk=f;k=Bu(j,"f");i.onmessage=k;h=h+1|0;}l=I(LO,[E5(C(4),C(5),300),E5(C(6),C(7),300),E5(C(8),C(5),400),E5(C(9),C(7),400),E5(C(10),C(5),600),E5(C(11),C(7),600),E5(C(12),C(5),700),E5(C(13),C(7),700)]);m=Q(LO,1);m.data[0]=ARH(C(14),Fn(C(15),C(16)),C(5),400);b=(I2(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.tf;f=c.sx;i=new K;M(i);BM(H(H(i,C(17)),f),41);i=L(i);f=c.su;o=c.rr;c=AVV($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1|0;}e=$rt_globals.Promise.all(g);BD(d);c
=new AAt;c.zY=d;g=new AAr;e.then(Bu(c,"f"),Bu(g,"f"));}}
function AFS(b){var c,d,e,f,g,h,i,j;c=new ZH;d=new TH;d.w_=c;c.s0=d;d=new TF;d.AN=c;c.nX=d;e=new TG;e.yA=c;c.uq=new $rt_globals.ResizeObserver(Bu(e,"f"));d=new TE;d.q2=c;c.v6=d;c.k8=1;d=new Zs;d.l1=new SZ;e=new Xv;e.CD=null;e.lT=A4D;d.rM=e;BD(e);f=new Zw;f.yO=e;d.AJ=f;d.z7=b;g=b.length;h=0;while(h<g){e=b[h];i=new Zx;i.yd=d;i.yc=h;f=Bu(i,"f");e.onmessage=f;e=b[h];f=AIw();e.postMessage(f);h=h+1|0;}d.ii=0;d.oM=BN(g);c.Al=d;c.p6=(Ep()).getElementById("canvasDiv");d=ADM();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.ej=d;c.p6.appendChild(d);b=c.ej;d=AQh(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Xx(C(2),C(18));else{c.pi=A3m(c.ej,c.nX);b=new Tx;j=c.nX;AJE(b,e,new AAY,1,2.25,0.625);b.CB=new AAX;b.B_=j;c.hB=b;AQ0(c.uq,c.ej,ATG());d=$rt_globals.window;j=c.v6;d.addEventListener("resize",Bu(j,"handleEvent"));j=new Op;b=c.hB;d=c.pi.co;j.O=b;j.p=d;j.bU=c;d=$rt_str($rt_globals.window.location.hash);if(Bi(C(19),d)){b=new OR;Eg(b,j);d=$rt_globals.fetch("test.wasm");j
=new V8;d=d.then(Bu(j,"f"));j=new V7;e=d.then(Bu(j,"f"));j=new V5;d=new V4;e.then(Bu(j,"f"),Bu(d,"f"));}else b=Bi(C(20),d)?A3h(j):(AZ7(J(d)<=0?C(21):Dr(d,1))).ba(j);c.gm=b;Sj(c);}c.ej.focus();}
var VZ=G(0);
var VC=G(0);
function AB4(){var a=this;B.call(a);a.mA=null;a.uu=null;a.d0=null;}
function Sv(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AB4;c.d0=b;d=c;b.classObject=d;}return c;}
function JG(a){if(a.mA===null)a.mA=AF9(a.d0);return a.mA;}
function Xo(a){var b,c,d,e;b=a.uu;if(b===null){if(AJ$(a.d0)===null?0:1){b=Xo(HO(a));c=new K;M(c);H(H(c,b),C(22));b=L(c);}else{b=a.d0.$meta.enclosingClass;if((b===null?null:Sv(b))!==null){b=$rt_str(a.d0.$meta.simpleName);if(b===null)b=C(21);}else{b=AF9(a.d0);d=Rc(b,36);if(d==(-1)){e=Rc(b,46);if(e!=(-1))b=Dr(b,e+1|0);}else{b=Dr(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(21);}}}a.uu=b;}return b;}
function IG(a){return a.d0.$meta.primitive?1:0;}
function HO(a){return Sv(AJ$(a.d0));}
var AHO=G();
function Bu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function E9(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AHD=G();
function AKD(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AI_(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AI_(d[e],c))return 1;e=e+1|0;}return 0;}
function AJ$(b){return b.$meta.item;}
function AF9(b){return $rt_str(b.$meta.name);}
function GO(){var a=this;B.call(a);a.iD=null;a.mV=null;a.kl=0;a.kG=0;}
function A4E(){var a=new GO();X(a);return a;}
function A4F(a){var b=new GO();Bm(b,a);return b;}
function X(a){a.kl=1;a.kG=1;}
function Bm(a,b){a.kl=1;a.kG=1;a.iD=b;}
function AVN(a){return a;}
function ARf(a){return a.iD;}
function AZg(a){var b;b=a.mV;if(b===a)b=null;return b;}
var Eq=G(GO);
function A4G(){var a=new Eq();AFF(a);return a;}
function AFF(a){X(a);}
var Bt=G(Eq);
function A4d(a){var b=new Bt();A0C(b,a);return b;}
function A0C(a,b){Bm(a,b);}
var AIA=G(Bt);
var C2=G(0);
var CJ=G(0);
var J8=G(0);
function BL(){var a=this;B.call(a);a.b$=null;a.jM=0;}
var A4H=null;var A4I=null;var A4J=null;function E8(){E8=Bn(BL);AR8();}
function AND(){var a=new BL();ADw(a);return a;}
function Hi(a){var b=new BL();Jj(b,a);return b;}
function Ew(a,b,c){var d=new BL();Oi(d,a,b,c);return d;}
function ADw(a){E8();a.b$=A4H;}
function Jj(a,b){E8();Oi(a,b,0,b.data.length);}
function Oi(a,b,c,d){var e;E8();e=B4(d);a.b$=e;DS(b,c,e,0,d);}
function Mg(b){var c;E8();c=AND();c.b$=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b$.data;if(b<c.length)return c[b];}d=new Ib;X(d);N(d);}
function J(a){return a.b$.data.length;}
function Gh(a){return a.b$.data.length?0:1;}
function Qq(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){DS(a.b$,b,d,e,c);return;}}g=new BF;X(g);N(g);}
function ACy(a,b){var c,d,e;if(a===b)return 0;c=Be(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AAT(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Nf(a,b){if(a===b)return 1;return AAT(a,b,0);}
function Dy(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function JN(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.b$.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JH(b);h=I5(b);while(true){f=a.b$.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Hn(a,b,c){var d,e,f,g,h;d=Be(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b$.data[d]==e)break;d=d+(-1)|0;}return d;}f=JH(b);g=I5(b);while(true){if(d<1)return (-1);h=a.b$.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Rc(a,b){return Hn(a,b,J(a)-1|0);}
function XV(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AYg(a,b){return XV(a,b,0);}
function Qn(a,b,c){var d,e;d=Be(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AEP(a,b){return Qn(a,b,J(a));}
function Cr(a,b,c){var d,e;d=BK(b,c);if(d>0){e=new BF;X(e);N(e);}if(!d){E8();return A4I;}if(!b&&c==J(a))return a;return Ew(a.b$,b,c-b|0);}
function Dr(a,b){return Cr(a,b,J(a));}
function Qw(a,b,c){return Cr(a,b,c);}
function Fn(a,b){var c,d,e,f,g,h;if(Gh(b))return a;if(Gh(a))return b;c=B4(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Mg(c);}
function ABk(a,b,c){var d,e,f,g;d=new K;M(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BM(d,P(a,f));}f=f+1|0;}H(d,Dr(a,f));return L(d);}
function Zb(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cr(a,b,c+1|0);}
function ALJ(a){return a;}
function Gj(a){var b,c,d,e,f;b=a.b$.data;c=B4(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cv(b){E8();return b===null?C(23):b.cK();}
function Za(b){var c,d;E8();c=new BL;d=B4(1);d.data[0]=b;Jj(c,d);return c;}
function Dh(b){var c;E8();c=new K;M(c);return L(U(c,b));}
function Bi(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BL))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function NC(a){var b,c,d,e;a:{if(!a.jM){b=a.b$.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.jM=(31*a.jM|0)+e|0;d=d+1|0;}}}return a.jM;}
function L2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GW;Bm(b,C(24));N(b);}A4K=1;d=new YN;d.mo=Q(CW,10);d.hI=(-1);d.fz=(-1);d.bz=(-1);e=new GY;e.fd=1;e.bM=b;e.bf=B4(J(b)+2|0);DS(Gj(b),0,e.bf,0,J(b));f=e.bf.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.yx=g;e.gW=0;FK(e);FK(e);d.l=e;d.dS=0;d.m2=U3(d,(-1),0,null);if(!DA(d.l)){b=new J4;h=d.l;My(b,C(21),h.bM,h.dm);N(b);}if(d.qv)d.m2.eG();b=BH();h=new Zz;h.j2=(-1);h.oA=(-1);h.Bs=d;h.z0=d.m2;h.lm=a;h.j2=0;g=J(a);h.oA=g;e=new ABl;i=h.j2;j=d.hI;k=d.fz+1|0;l=d.bz
+1|0;e.iH=(-1);m=j+1|0;e.q$=m;e.d4=BN(m*2|0);f=BN(l);e.kA=f;Jn(f,(-1));if(k>0)e.oV=BN(k);Jn(e.d4,(-1));AC5(e,a,i,g);h.cE=e;e.gi=1;n=0;m=0;if(!J(a)){f=Q(BL,1);f.data[0]=C(21);}else{while(true){l=J(h.lm);if(!ADG(h))l=h.oA;e=h.cE;if(e.eE>=0&&AEG(e)==1){e=h.cE;e.eE=Mn(e);if(Mn(h.cE)==AFL(h.cE)){e=h.cE;e.eE=e.eE+1|0;}g=h.cE.eE;g=g<=l&&Ow(h,g)?1:0;}else g=Ow(h,h.j2);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BC(b,Qw(a,m,AGJ(h)));m=AH5(h);n=g;}a:{BC(b,Qw(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Bw(b,
g)))break a;EF(b,g);}}if(g<0)g=0;f=Gf(b,Q(BL,g));}return f;}
function ANe(a,b){return ACy(a,b);}
function AR8(){A4H=B4(0);A4I=AND();A4J=new R_;}
var Fs=G(GO);
var If=G(Fs);
var AIg=G(If);
var En=G();
function Hy(){En.call(this);this.bp=0;}
var A4L=null;var A4M=null;function AZ3(a){var b=new Hy();AEk(b,a);return b;}
function AEk(a,b){a.bp=b;}
function NF(b){return (Wg(A35(20),b,10)).cK();}
function Kx(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dq;Bm(b,C(25));N(b);}d=J(b);if(0==d){b=new Dq;Bm(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dq;X(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=Xs(P(b,f));if(i<0){j=new Dq;k=Cr(b,0,d);b=new K;M(b);H(H(b,C(27)),k);Bm(j,L(b));N(j);}if(i>=c){j=new Dq;l=Cr(b,0,d);b=new K;M(b);H(H(U(H(b,C(28)),c),C(29)),l);Bm(j,L(b));N(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dq;k=Cr(b,0,d);b=new K;M(b);H(H(b,C(30)),k);Bm(j,L(b));N(j);}b=new Dq;j=new K;M(j);U(H(j,C(31)),c);Bm(b,L(j));N(b);}
function CU(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A4M===null){A4M=Q(Hy,256);c=0;while(true){d=A4M.data;if(c>=d.length)break a;d[c]=AZ3(c-128|0);c=c+1|0;}}}return A4M.data[b+128|0];}return AZ3(b);}
function ATu(a){return a.bp;}
function A08(a,b){if(a===b)return 1;return b instanceof Hy&&b.bp==a.bp?1:0;}
function Wx(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function IV(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AW2(a,b){b=b;return BK(a.bp,b.bp);}
function AJF(){A4L=F($rt_intcls());}
function GI(){var a=this;B.call(a);a.C=null;a.K=0;}
function A4N(){var a=new GI();M(a);return a;}
function A35(a){var b=new GI();GB(b,a);return b;}
function M(a){GB(a,16);}
function GB(a,b){a.C=B4(b);}
function Wg(a,b,c){return AIq(a,a.K,b,c);}
function AIq(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.C.data;g=b+1|0;f[b]=45;b=g;}a.C.data[b]=Ie(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)e=b;else{f=a.C.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.C.data;b=e+1|0;f[e]=Ie($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AI3(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BK(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A4O;AIX(c,f);d=f.mH;g=f.mw;h=f.qF;i=1;j=1;if(h)j=2;k=9;l=ARI(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Co(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.C.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.C.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.C.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.C.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AHX(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BK(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A4P;AE0(c,f);g=f.m3;h=f.mh;i=f.qr;j=1;k=1;if(i)k=2;l=18;m=AQv(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Co(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.C.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.C.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AMG(p,FB))d=0;else{d=GG(AFT(g,p));g=ATE(g,p);}e=a.C.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AFT(p,Bp(10));q=q+1|0;}if(h){e=a.C.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ARI(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AQv(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=A4Q.data;g=f.length-1|0;while(g>=0){if(IA(ATE(b,Ch(c,f[g])),FB)){d=d|e;c=Ch(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BM(a,b){return a.py(a.K,b);}
function ACV(a,b,c){Co(a,b,b+1|0);a.C.data[b]=c;return a;}
function MJ(a,b){var c,d;c=a.C.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.C=Kt(a.C,d);}
function L(a){return Ew(a.C,0,a.K);}
function ACJ(a,b,c,d){return a.ph(a.K,b,c,d);}
function VT(a,b,c,d,e){var f,g,h,i;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.C.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function JQ(a,b){return a.oG(b,0,b.data.length);}
function Co(a,b,c){var d,e,f,g;d=a.K;e=d-b|0;a.jI((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.C.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.K=a.K+(c-b|0)|0;}
var Jz=G(0);
var K=G(GI);
function LT(){var a=new K();A00(a);return a;}
function A00(a){M(a);}
function H(a,b){var c;c=a.K;if(b===null)b=C(23);Mj(a,c,b);return a;}
function BU(a,b){Mj(a,a.K,b);return a;}
function U(a,b){Wg(a,b,10);return a;}
function HD(a,b){var c,d,e,f,g,h,i,j;c=a.K;d=1;if(A12(b,FB)){d=0;b=A3z(b);}a:{if(DD(b,Bp(10))<0){if(d)Co(a,c,c+1|0);else{Co(a,c,c+2|0);e=a.C.data;f=c+1|0;e[c]=45;c=f;}a.C.data[c]=Ie(GG(b),10);}else{g=1;h=Bp(1);i=Da(Bp(-1),Bp(10));b:{while(true){j=Ch(h,Bp(10));if(DD(j,b)>0){j=h;break b;}g=g+1|0;if(DD(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Co(a,c,c+g|0);if(d)f=c;else{e=a.C.data;f=c+1|0;e[c]=45;}while(true){if(IA(j,FB))break a;e=a.C.data;c=f+1|0;e[f]=Ie(GG((Da(b,j))),10);b=AHm(b,j);j=Da(j,Bp(10));f=c;}}}return a;}
function EA(a,b){AI3(a,a.K,b);return a;}
function ADs(a,b){BM(a,b);return a;}
function Jm(a,b){Mj(a,a.K,!b?C(32):C(33));return a;}
function AGy(a,b,c){var d,e,f,g,h,i;d=BK(b,c);if(d<=0){e=a.K;if(b<=e){if(d){f=e-c|0;a.K=e-(c-b|0)|0;g=0;while(g<f){h=a.C.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Ib;X(i);N(i);}
function T_(a,b){var c,d,e,f;if(b>=0){c=a.K;if(b<c){c=c-1|0;a.K=c;while(b<c){d=a.C.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ib;X(f);N(f);}
function AWX(a,b,c,d,e){VT(a,b,c,d,e);return a;}
function AMv(a,b,c,d){ACJ(a,b,c,d);return a;}
function AHx(a){return a.K;}
function D$(a){return L(a);}
function AOC(a,b){MJ(a,b);}
function AXi(a,b,c){ACV(a,b,c);return a;}
function Mj(a,b,c){var d,e,f;if(b>=0&&b<=a.K){a:{if(c===null)c=C(23);else if(Gh(c))break a;MJ(a,a.K+J(c)|0);d=a.K-1|0;while(d>=b){a.C.data[d+J(c)|0]=a.C.data[d];d=d+(-1)|0;}a.K=a.K+J(c)|0;d=0;while(d<J(c)){e=a.C.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Ib;X(c);N(c);}
var EZ=G(If);
var AJc=G(EZ);
function A4R(a){var b=new AJc();ALO(b,a);return b;}
function ALO(a,b){Bm(a,b);}
var AIa=G(EZ);
function A4S(a){var b=new AIa();AL0(b,a);return b;}
function AL0(a,b){Bm(a,b);}
var AAj=G(0);
var C5=G(0);
function BY(b,c){if(b!==null)b.cC();return c;}
var Xp=G(0);
function J0(){var a=this;B.call(a);a.i3=0;a.no=0;a.mT=0;}
var A4T=0;function Eu(a){A4T=A4T-1|0;}
function Ho(a,b,c){Kl(a,AHU(b,c,400,0));}
function K1(a,b){return Ld(a,b,0.875);}
function Ld(a,b,c){return Ej(a,b)+c|0;}
function Y3(){var a=this;J0.call(a);a.iT=null;a.c$=null;a.vV=null;}
function EK(a){var b,c,d;b=a.c$;c=a.no;d=a.mT;b.clearRect(0.0,0.0,c,d);}
function Zj(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c$;d="center";c.textAlign=d;break a;case 2:c=a.c$;d="right";c.textAlign=d;break a;default:break a;}d=a.c$;c="left";d.textAlign=c;}}
function Cl(a,b){Kl(a,b.qi);}
function Kl(a,b){var c;if(a.vV!==b){c=a.c$;a.vV=b;c.font=b;}}
function AHU(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BW(a,b,c,d){var e,f,g;e=a.c$;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Ej(a,b){var c;c=$rt_ustr(b);return a.c$.measureText(c).width;}
function JU(a,b,c,d){var e,f;e=a.c$;f=$rt_ustr(Hi(AIk([35,HQ(b/16|0),HQ(b%16|0),HQ(c/16|0),HQ(c%16|0),HQ(d/16|0),HQ(d%16|0)])));e.fillStyle=f;}
function AUn(){return {alpha:false};}
var AHl=G();
var AJL=G();
function BS(b,c){if(b===c)return 1;return b!==null?b.bH(c):c!==null?0:1;}
function AET(b){return b!==null?b.go():0;}
function BD(b){if(b!==null)return b;b=new GW;Bm(b,C(21));N(b);}
var BQ=G(0);
function M6(b){return b;}
var Cd=G(0);
function AAs(){B.call(this);this.za=null;}
function A1j(a,b){var c;c=a.za;c.pO=b;if(c.AH)AFS(b);}
var AFw=G();
function KR(b,c){return b.data[c];}
var AIM=G();
var ADH=G(0);
function E5(b,c,d){return ARH(C(34),Fn(C(15),b),c,d);}
var AJz=G(0);
var AF3=G(0);
function I2(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=De(b,f+g|0);DS(c,0,d,f,g);return d;}
function Lh(b,c,d){DS(b,c,d,0,d.data.length);return d;}
function YU(b,c,d){var e;if(c>0)DS(b,0,d,0,c);e=d.data.length;if(c<e)DS(b,c+1|0,d,c,e-c|0);return d;}
function AEL(b,c,d,e){var f;if(c>0)DS(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DS(b,d,e,c,f-d|0);}return e;}
function Dw(b){var c;c=new ABP;c.kf=b;return c;}
function AEf(b,c){if(b.data.length!=c)b=De(b,c);return b;}
function AF2(b,c,d){var e;e=c.data.length;if(e==d)c=De(c,e*2|0);c.data[d]=b;return c;}
function ABf(b,c,d){var e;e=c.data.length;if(e==d)c=N5(c,e*2|0);c.data[d]=b;return c;}
function N4(b){return Kt(b,b.data.length);}
function LO(){var a=this;B.call(a);a.tf=null;a.sx=null;a.su=null;a.rr=0;}
function ARH(a,b,c,d){var e=new LO();AQ_(e,a,b,c,d);return e;}
function AQ_(a,b,c,d,e){a.tf=b;a.sx=c;a.su=d;a.rr=e;}
var AEa=G();
function AVV(b,c){return {style:b,weight:c};}
function AAt(){B.call(this);this.zY=null;}
function AKm(a,b){var c,d,e;c=a.zY;d=0;while(d<b.length){e=b[d];(Ep()).fonts.add(e);d=d+1|0;}c.AH=1;b=c.pO;if(b!==null)AFS(b);}
var AAr=G();
function A0k(a,b){$rt_globals.console.info("font load error "+b);}
var Lu=G();
var A4U=null;var A4V=null;function Bx(){if(A4U===null)A4U=APG(A4W,0);return A4U;}
function EG(){if(A4V===null)A4V=APG(A4X,0);return A4V;}
function A2l(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=NM(b)&&(e+f|0)<=NM(d)){a:{b:{if(b!==d){g=HO(BI(b));h=HO(BI(d));if(g!==null&&h!==null){if(g===h)break b;if(!IG(g)&&!IG(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.d0;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AI_(n.constructor,o)?1:0)){Nj(b,c,d,e,j);b=new I6;X(b);N(b);}j=j+1|0;k=m;}Nj(b,c,d,e,f);return;}if(!IG(g))break a;if(IG(h))break b;else break a;}b=new I6;X(b);N(b);}}Nj(b,c,
d,e,f);return;}b=new I6;X(b);N(b);}b=new BF;X(b);N(b);}d=new GW;Bm(d,C(35));N(d);}
function DS(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=NM(b)&&(e+f|0)<=NM(d)){Nj(b,c,d,e,f);return;}b=new BF;X(b);N(b);}
function Nj(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EY(){return Long_fromNumber(new Date().getTime());}
function AFO(){return A4B($rt_globals.performance.now()*1000000.0);}
var AF1=G();
var AH6=G();
function Xx(b,c){var d,e,f;d=(Ep()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ep()).getElementById($rt_ustr(b)).appendChild(d);}
function ADM(){return (Ep()).createElement("canvas");}
function AGD(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AQh(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AKj=G();
var V0=G();
function AX$(a,b){var c;c=new Bt;Bm(c,$rt_str(b.message));N(c);}
var AGc=G();
function HX(b){return $rt_str(b);}
var AHt=G();
function Kt(b,c){var d,e,f,g;b=b.data;d=B4(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function N5(b,c){var d,e,f,g;b=b.data;d=DH(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function I$(b,c){var d,e,f,g;b=b.data;d=BN(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function De(b,c){var d,e,f,g;d=b.data;e=AFK(HO(BI(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AFC(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BU(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(37));U(c,e[d]);d=d+1|0;}BU(c,C(38));return L(c);}
function ARm(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BU(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(37));EA(c,e[d]);d=d+1|0;}BU(c,C(38));return L(c);}
function AS$(b){var c,d,e,f;if(b===null)return C(23);c=new K;M(c);BU(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(37));f=e[d];AHX(c,c.K,f);d=d+1|0;}BU(c,C(38));return L(c);}
function Jn(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BR;X(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AD6(b,c,d,e){var f,g;if(c>d){e=new BR;X(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function KP(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A4D;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.pE(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AI4(b,c){return AAx(b,0,b.data.length,c);}
function AAx(b,c,d,e){var f,g,h,i,j;f=BK(c,d);if(f>0){g=new BR;X(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AFH(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+AET(e[d])|0;d=d+1|0;}return c;}
var ABG=G(0);
var AIC=G();
function AWc(a,b){return a.Mm(b);}
function APe(a){return a.PF();}
var AEY=G();
var F$=G(0);
var R_=G();
var BF=G(Bt);
var AI0=G();
function NM(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A4Y());}return b.data.length;}
function AFK(b,c){if(b===null){b=new GW;X(b);N(b);}if(b===F($rt_voidcls())){b=new BR;X(b);N(b);}if(c>=0)return ASt(b.d0,c);b=new ADm;X(b);N(b);}
function ASt(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GW=G(Bt);
var I6=G(Bt);
function Di(){B.call(this);this.mu=0;}
var A4Z=null;var A40=null;var A41=null;var A42=null;var A43=null;var A44=null;var A45=null;var A46=null;var A47=null;var A48=null;function AST(a){var b=new Di();AEC(b,a);return b;}
function AEC(a,b){a.mu=b;}
function Pa(b){var c,d;c=A44.data;if(b>=c.length)return AST(b);d=c[b];if(d===null){d=AST(b);A44.data[b]=d;}return d;}
function UF(b){var c,d;c=new BL;d=B4(1);d.data[0]=b;Jj(c,d);return c;}
function L6(b){return b>=65536&&b<=1114111?1:0;}
function CP(b){return (b&64512)!=55296?0:1;}
function Dg(b){return (b&64512)!=56320?0:1;}
function Ob(b){return !CP(b)&&!Dg(b)?0:1;}
function Ji(b,c){return CP(b)&&Dg(c)?1:0;}
function EI(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JH(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function I5(b){return (56320|b&1023)&65535;}
function FD(b){return GV(b)&65535;}
function GV(b){if(A42===null){if(A45===null)A45=AJj();A42=AEN((A45.value!==null?$rt_str(A45.value):null));}return R3(A42,b);}
function Fg(b){return GT(b)&65535;}
function GT(b){if(A41===null){if(A46===null)A46=AJG();A41=AEN((A46.value!==null?$rt_str(A46.value):null));}return R3(A41,b);}
function R3(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BK(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function AA3(b,c){if(c>=2&&c<=36){b=Xs(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Xs(b){var c,d,e,f,g,h,i,j,k,l;if(A40===null){if(A47===null)A47=AIi();c=(A47.value!==null?$rt_str(A47.value):null);d=ARh(Gj(c));e=MN(d);f=BN(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+OO(d)|0;j=j+OO(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A40=f;}g=A40.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BK(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Ie(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HK(b){var c;if(b<65536){c=B4(1);c.data[0]=b&65535;return c;}return AIk([JH(b),I5(b)]);}
function CC(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Ob(b&65535))return 19;if(A43===null){if(A48===null)A48=AGZ();d=(A48.value!==null?$rt_str(A48.value):null);e=Q(Wa,16384);f=e.data;g=DH(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Ng(P(d,l));if(m==64){l=l+1|0;m=Ng(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,Ng(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Ng(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ANc(k,k+i|0,N5(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ANc(k,k+i|0,N5(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A43=De(e,j);}e=A43.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.sH)o=p+1|0;else{c=d.xl;if(b>=c)return d.xw.data[b-c|0];c=p-1|0;}}return 0;}
function Kw(b){a:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function HG(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CC(b)!=16?0:1;}
function XO(b){switch(CC(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Q9(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return XO(b);}return 1;}
function AHk(){A4Z=F($rt_charcls());A44=Q(Di,128);}
function AJj(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AJG(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AIi(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AGZ(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Vy=G(0);
var ZB=G(0);
var ES=G(0);
var AHn=G();
function Ep(){return $rt_globals.window.document;}
function AXQ(a){return a.Hu();}
function AZO(a,b){return a.I$($rt_str(b));}
function AZD(a,b){a.GK($rt_str(b));}
function AU9(a,b){return a.Mw($rt_str(b));}
function AKC(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AMp(a){return a.P1();}
function AZL(a,b,c){return a.OT($rt_str(b),$rt_str(c));}
function AOp(a,b,c,d){a.B0($rt_str(b),E9(c,"handleEvent"),d?1:0);}
function AUf(a){return a.NM();}
function AYv(a){return !!a.Jw();}
function A0g(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function APw(a){return a.GT();}
function AN4(a,b){a.OM($rt_str(b));}
function APP(a){return !!a.GB();}
function ATb(a){return a.Jh();}
function AOQ(a){return $rt_ustr(a.EJ());}
function ALc(a,b){return a.G4(b?1:0);}
function A0$(a){return a.Jv();}
function AWz(a,b,c){return a.Qy($rt_str(b),$rt_str(c));}
function APo(a,b,c){return a.M4(b,c?1:0);}
function ASv(a,b,c){return !!a.IL($rt_str(b),$rt_str(c));}
function ATB(a){return a.H0();}
function ANO(a){return $rt_ustr(a.Kp());}
function AMy(a,b){return !!a.D3(b);}
function ANq(a,b){return a.KQ($rt_str(b));}
function AWJ(a,b,c){return a.Hs($rt_str(b),$rt_str(c));}
function AOZ(a){return a.LB();}
function AUh(a,b){return a.P6($rt_str(b));}
function ANp(a){return $rt_ustr(a.Lf());}
function AQQ(a){a.Gx();}
function AKs(a,b){return a.QB($rt_str(b));}
function AR0(a,b){return a.GP($rt_str(b));}
function AUA(a,b){return a.Gw($rt_str(b));}
function AZ9(a){return $rt_ustr(a.LN());}
function AUH(a,b,c){return a.Oo(b,c);}
function AYD(a,b){return a.EI(b);}
function ARe(a){return a.Iz();}
function AQd(a,b,c){a.DA($rt_str(b),E9(c,"handleEvent"));}
function APY(a,b,c){return a.Fx(b,c);}
function ARV(a){return !!a.PD();}
function ASS(a,b){return a.Hp($rt_str(b));}
function AX0(a,b,c,d){a.Bi($rt_str(b),E9(c,"handleEvent"),d?1:0);}
function AMt(a){return a.IA();}
function AUU(a,b,c){return a.G3($rt_str(b),$rt_str(c));}
function ATX(a){return $rt_ustr(a.L4());}
function A05(a){return a.Lt();}
function AQa(a){return a.LG();}
function ATV(a){return a.IM();}
function AQe(a,b,c){a.D2($rt_str(b),E9(c,"handleEvent"));}
function AVg(a,b){return a.Kc(b);}
function ANv(a,b){a.E1($rt_str(b));}
function AZd(a){return $rt_ustr(a.K$());}
function O_(){var a=this;B.call(a);a.xn=null;a.xo=null;a.xp=0;a.xq=null;a.xk=null;}
function AQL(a,b){var c,d,e,f,g;c=a.xn;d=a.xo;e=a.xp;f=a.xq;g=a.xk;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AIo=G();
function ARr(b){return Math.exp(b);}
function AHo(b){return Math.log(b);}
function Jb(b,c){return AXq(b,c);}
function AXq(b,c){return Math.pow(b,c);}
function DN(){return AS1();}
function AS1(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function ASw(b,c){return Math.max(b,c);}
function VE(b){if(b<0)b= -b|0;return b;}
function ANz(b){return Math.abs(b);}
var XF=G(0);
var Rf=G(0);
var YS=G(0);
var Ss=G(0);
var ACM=G(0);
var AA5=G(0);
var AHM=G();
function AYf(a,b,c){a.D2($rt_str(b),E9(c,"handleEvent"));}
function AW0(a,b,c){a.DA($rt_str(b),E9(c,"handleEvent"));}
function ANQ(a,b,c,d){a.Bi($rt_str(b),E9(c,"handleEvent"),d?1:0);}
function ALn(a,b){return !!a.D3(b);}
function AVw(a,b,c,d){a.B0($rt_str(b),E9(c,"handleEvent"),d?1:0);}
var BR=G(Bt);
var ADm=G(Bt);
var Ib=G(BF);
var AH0=G();
function AIw(){return "ping";}
function AGW(b){return b===AIw()?1:0;}
var Yv=G(0);
var Xe=G(0);
function ZH(){var a=this;B.call(a);a.s0=null;a.nX=null;a.p6=null;a.ej=null;a.uq=null;a.v6=null;a.pi=null;a.hB=null;a.k8=0;a.DK=0;a.yr=null;a.gm=null;a.Al=null;}
function Wl(a,b){var c;c=Ep();b=$rt_ustr(b);c.title=b;}
function Sj(a){a.DK=$rt_globals.requestAnimationFrame(Bu(a.s0,"onAnimationFrame"));}
function Jl(a){a.k8=1;}
function Z$(a,b,c){var d,e;a.pi.eh=BJ(b,c);d=a.ej;e=b;d.width=e;d=a.ej;e=c;d.height=e;d=a.hB;V(d.c3,b,c);e=d.X;d=d.c3;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gm.ca(a.hB.c3,K_(a));a.gm.bP();}
function Y2(a,b){var c,d,e;c=a.yr;d=a.ej;if(BS(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.yr=b;}
function ME(a){return $rt_globals.performance.now()/1000.0;}
function K_(a){return $rt_globals.window.devicePixelRatio;}
function I3(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADB(null,b);else{c=new ACn;d=$rt_globals.window.showDirectoryPicker();e=new ACm;e.rE=b;e.rF=c;d.then(Bu(e,"f"),Bu(c,"f"));}}
function NX(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADB(b,null);else{c=new ACU;d=$rt_globals.window.showOpenFilePicker();e=new ACT;e.r1=b;d.then(Bu(e,"f"),Bu(c,"f"));}}
function CR(a,b,c,d){var e,f,g,h;e=a.Al;f=e.ii;if(f>0){g=e.oM.data;f=f-1|0;e.ii=f;SO(e,b,c,d,g[f]);}else{h=e.l1;e=new ACo;e.tD=b;e.zK=c;e.y1=d;b=new SP;b.qS=e;c=h.l0;b.zr=c;if(c===null)h.oF=b;else c.tl=b;h.l0=b;h.bZ=h.bZ+1|0;h.kO=h.kO+1|0;}}
function Q7(a,b,c){var d,e;if(!LK()){b=new Bt;Bm(b,C(39));c.j(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new Zn;e.sr=b;b=AKg(c);d.then(Bu(e,"f"),Bu(b,"f"));}}
function SQ(a,b,c,d){var e,f,g;if(!LK()){b=new Bt;Bm(b,C(39));d.j(b);}else{e=$rt_globals.navigator.clipboard;f=Gj(b);A2C();b=A49;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ABM;e.uF=c;c=AKg(d);b.then(Bu(e,"f"),Bu(c,"f"));}}
function UT(a){return LK()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AKg(b){var c;c=new Oy;c.y$=b;return c;}
var BE=G(0);
var AIJ=G();
var Z=G(0);
var AIK=G();
var YW=G(0);
function TH(){B.call(this);this.w_=null;}
function AWy(a,b){var c,d;c=b;b=a.w_;if(!(!b.gm.cg(c/1000.0)&&!b.k8)){d=b.hB.c3;if(Bb(d.a,d.b)){b.k8=0;b.gm.bP();}}Sj(b);}
function TF(){B.call(this);this.AN=null;}
function Dz(a){Jl(a.AN);}
var Yo=G(0);
function TG(){B.call(this);this.yA=null;}
function AMI(a,b,c){var d,e,f,g;c=a.yA;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.ej){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=K_(c);Z$(c,Gv(f.width*g),Gv(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Z$(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AGm=G();
function ATG(){return {box:'device-pixel-content-box'};}
function AQ0(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cy=G(0);
function TE(){B.call(this);this.q2=null;}
function AQP(a,b){b=a.q2;b.gm.ca(b.hB.c3,K_(b));b.gm.bP();}
function Zs(){var a=this;B.call(a);a.l1=null;a.z7=null;a.rM=null;a.oM=null;a.wd=0;a.ii=0;a.AJ=null;}
function SO(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.wd+1|0;a.wd=f;g=a.rM;h=CU(f);g.jK=N_(g,g.jK,h);h=AA9(g,h);VA(h,b);VA(h,b);g.lW=g.lW+1|0;b=a.z7[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BL)g=$rt_ustr(c);else if(I4(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(I4(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(I4(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof Sb)){b=new BR;c
=JG(BI(c));g=new K;M(g);H(H(g,C(40)),c);Bm(b,L(g));N(b);}c=c;g=c.h9;if(g===null)g=c.fX;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var Ua=G(0);
function ATj(a,b){var c;c=a.b5();while(c.cy()){b.j(c.b7());}}
var Hq=G(0);
function Ti(a){var b,c;b=new Zq;c=new QB;c.xj=a;b.zm=c;return b;}
function AWN(a,b){var c,d;c=a.b5();d=0;while(c.cy()){if(b.L(c.b7())){c.oO();d=1;}}return d;}
var Fv=G();
function Ex(a){return a.cZ()?0:1;}
function Gf(a,b){var c,d,e,f,g,h;c=b.data;d=a.m;e=c.length;if(e<d)b=AFK(HO(BI(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B6(a);while(B$(f)){g=b.data;h=e+1|0;g[e]=B_(f);e=h;}return b;}
function AZr(a,b){var c;c=a.b5();while(c.cy()){if(BS(c.b7(),b)){c.oO();return 1;}}return 0;}
function HV(a,b){var c,d;c=0;d=b.b5();while(d.cy()){if(!a.yL(d.b7()))continue;c=1;}return c;}
var Nl=G(0);
var Mr=G(0);
function Fi(){Fv.call(this);this.bZ=0;}
function AQ3(a,b){a.nW(a.cZ(),b);return 1;}
function B6(a){var b;b=new Wq;b.i4=a;b.pC=a.bZ;b.lf=a.cZ();b.hE=(-1);return b;}
function AQr(a,b,c){var d,e;if(b>=0&&b<=a.cZ()){if(c.et())return 0;d=c.b5();while(d.cy()){e=b+1|0;a.nW(b,d.b7());b=e;}return 1;}c=new BR;X(c);N(c);}
function AZ4(a,b,c){c=new Eb;X(c);N(c);}
function KV(a,b){var c,d;c=a.cZ();d=0;while(true){if(d>=c)return (-1);if(BS(b,a.nd(d)))break;d=d+1|0;}return d;}
function API(a,b){var c,d;if(!I4(b,Mr))return 0;c=b;if(a.m!=c.m)return 0;d=0;while(d<c.m){if(!BS(Bw(a,d),Bw(c,d)))return 0;d=d+1|0;}return 1;}
var L3=G(Fi);
var Os=G(0);
var AC6=G(0);
function SZ(){var a=this;L3.call(a);a.oF=null;a.l0=null;a.kO=0;}
var Li=G(0);
function D_(){var a=this;B.call(a);a.ot=null;a.oy=null;}
var Er=G(0);
var US=G(0);
var ON=G(0);
function Xv(){var a=this;D_.call(a);a.jK=null;a.lT=null;a.CD=null;a.lW=0;}
function AGr(a,b){var c;c=AA9(a,b);if(c===null)return null;a.jK=KS(a,a.jK,b);a.lW=a.lW+1|0;return c.j4;}
function AA9(a,b){var c,d;c=a.jK;while(true){if(c===null)return null;d=MF(a.lT,b,c.lz);if(!d)break;c=d>=0?c.b1:c.bR;}return c;}
function N_(a,b,c){var d,e;if(b===null){b=new Kr;d=null;b.lz=c;b.j4=d;b.gt=1;b.gD=1;return b;}e=MF(a.lT,c,b.lz);if(!e)return b;if(e>=0)b.b1=N_(a,b.b1,c);else b.bR=N_(a,b.bR,c);ET(b);return MM(b);}
function KS(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=MF(a.lT,c,b.lz);if(d<0)b.bR=KS(a,b.bR,c);else if(d>0)b.b1=KS(a,b.b1,c);else{e=b.b1;if(e===null)return b.bR;f=b.bR;g=Q(Kr,e.gt).data;h=0;while(true){b=e.bR;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b1;while(h>0){h=h+(-1)|0;j=g[h];j.bR=b;ET(j);b=MM(j);}e.b1=b;e.bR=f;ET(e);b=e;}ET(b);return MM(b);}
function Zw(){B.call(this);this.yO=null;}
function Zx(){var a=this;B.call(a);a.yd=null;a.yc=0;}
function ATA(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.yd;d=a.yc;AGW(b.data);e=c.l1;f=e.oF;if(f===null)g=null;else{g=f.tl;e.oF=g;if(g!==null)g.zr=null;else e.l0=null;e.kO=e.kO-1|0;e.bZ=e.bZ+1|0;g=f.qS;}if(g!==null)SO(c,g.tD,g.zK,g.y1,d);else{h=c.oM.data;i=c.ii;c.ii=i+1|0;h[i]=d;}c=c.AJ;b=b.data;if(!AGW(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BR;X(b);N(b);}if(b.length<1){b=new BR;AFF(b);N(b);}e=CU(b[0]);c=AGr(c.yO,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?HX(M6(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A16(M6(e)):(e instanceof $rt_globals.File?1:0)?AI7(null,M6(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AI7(M6(e),null);k=l;}c.j(h);}}
function AEh(){var a=this;B.call(a);a.co=null;a.jh=null;a.DU=null;a.eh=null;}
function A3m(a,b){var c=new AEh();AZ0(c,a,b);return c;}
function AZ0(a,b,c){var d,e,f,g;a.eh=null;a.jh=b;d=new X3;d.bF=CS(Q(Cp,0));d.n0=CS(Q(Cp,0));d.bO=CS(Q(CB,0));d.ff=CS(Q(EC,0));d.c2=CS(Q(C6,0));d.gw=CS(Q(Ft,0));d.gZ=CS(Q(FN,0));d.lR=CS(Q(Z,0));d.mr=CS(Q(Z,0));d.dk=c;a.co=d;e=$rt_globals.window;f=Q(C5,14);g=f.data;d=new AB9;d.qs=a;g[0]=C0(a,b,C(41),d);d=new AB$;d.yY=a;g[1]=C0(a,b,C(42),d);d=new AB_;d.w2=a;g[2]=C0(a,b,C(43),d);d=new ACa;d.va=a;g[3]=C0(a,b,C(44),d);d=new ACb;d.sT=a;g[4]=C0(a,b,C(45),d);d=new ACc;d.qP=a;g[5]=C0(a,b,C(46),d);d=new ACd;d.AV=a;g[6]
=C0(a,b,C(47),d);d=new ACe;d.yC=a;g[7]=C0(a,b,C(48),d);d=new ACf;d.wH=a;g[8]=C0(a,b,C(49),d);d=new ACg;d.uI=a;g[9]=C0(a,b,C(50),d);d=new Vc;d.ud=a;g[10]=C0(a,b,C(51),d);d=new Vd;d.tw=a;e.addEventListener("paste",Bu(d,"handleEvent"),!!1);g[11]=UC(a,e,C(52),d);d=new Ve;d.vS=a;g[12]=C0(a,e,C(53),d);d=new Vf;d.As=a;g[13]=C0(a,e,C(54),d);c=new QK;c.BD=f;a.DU=c;e=new AC1;e.xA=b;b.onpointerdown=Bu(e,"f");e=new AC2;e.wQ=b;b.onpointerup=Bu(e,"f");}
function VU(){return (Ep()).activeElement;}
function C0(a,b,c,d){b.addEventListener($rt_ustr(c),Bu(d,"handleEvent"));return UC(a,b,c,d);}
function UC(a,b,c,d){var e;e=new Yl;e.Dl=b;e.Dn=c;e.Dm=d;return e;}
function AAu(a,b){var c;c=new AA_;c.u_=b;return c;}
function E4(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.jh.getBoundingClientRect();e=BJ(Gv((b.clientX-d.left)*c),Gv((b.clientY-d.top)*c));f=AIU(a.eh);d=new On;AAV(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.Db=f;return d;}
function Vi(a,b,c){var d,e,f,g;d=new PY;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;AAV(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.of=0;d.d9=e;d.bl=f;d.jv=c;d.yF=g;return d;}
function D4(a,b){b.stopPropagation();b.preventDefault();}
function Nz(){var a=this;B.call(a);a.o1=null;a.cd=null;a.X=null;a.lB=0;a.zq=null;a.Dz=0;a.Cm=0;a.kI=null;a.kx=null;a.CA=null;a.D8=null;a.tU=null;a.wg=null;a.iE=null;a.h3=null;a.jE=null;a.CI=null;a.rs=null;a.c3=null;a.AA=null;a.pd=0;a.l_=0;a.nF=0;a.nu=0;a.k1=0;a.nB=null;a.nN=0.0;a.pl=0.0;}
function AJE(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c3=new Bg;a.pd=0;a.nB=new ACj;a.o1=c;a.lB=d;g=$rt_str(b.getParameter(7938));h=new K;M(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(L(h)));a.X=b;a.cd=Kp(c,4,4,1);i=AKz(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B4(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new QE;Jo();c=A4$;m.eH=b;m.hP=c;m.s6=j.length/c.mJ|0;m.Au
=l.length;n=b.createBuffer();m.v3=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.vc=null;n=b.createBuffer();m.uM=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.rs=m;a.Cm=Nf(g,C(56));c=new Ym;c.dU=b;a.zq=c;a.nN=e;a.pl=f;d=b.getParameter(3379);a.Dz=d;c=new K;M(c);U(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(L(c)));k=Q(Dc,9);i=k.data;c=A19(b);a.kI=c;i[0]=c;c=A21(b,C(58));a.kx=c;i[1]=c;c=new YG;H2(c,b,C(59),
C(60),A4$);a.CA=c;i[2]=c;c=A3Q(b);a.D8=c;i[3]=c;c=new Pi;U1(c,b,C(61),C(62));a.tU=c;i[4]=c;c=A32(b);a.wg=c;i[5]=c;c=A2G(b);a.iE=c;i[6]=c;c=A3L(b);a.h3=c;i[7]=c;c=A3M(b);a.jE=c;i[8]=c;a.CI=k;ACN(b,C(63));}
function Th(a,b,c,d){return Ij(a,b,Cf(c,d));}
function Ij(a,b,c){return HZ(a,b,c,400,0);}
function HB(a,b,c){return Kp(a.o1,b,c,0);}
function D1(a,b,c,d){return Kp(a.o1,b,c,d);}
function EB(a,b){var c,d,e,f,g;c=a.X;d=b.bm;e=b.bs;f=b.be;g=b.bB;c.clearColor(d,e,f,g);a.X.clear(16384);}
function B9(a,b){var c;if(b==a.l_)return b;if(!b)a.X.disable(3042);else{a.X.enable(3042);a.X.blendFuncSeparate(770,771,1,1);}c=a.l_;a.l_=b;return c;}
function Ni(a,b,c){LD(a,b.a,b.b,c);}
function LD(a,b,c,d){var e,f;e=d.a;f=d.b;a.nu=1;a.k1=1;d=a.nB;d.sK=b;d.sL=c;d.sJ=e;d.sI=f;AAW(a);}
function F5(a){a.nu=0;a.k1=0;AAW(a);}
function AAW(a){var b,c,d,e,f,g;b=a.nF;c=a.nu;if(b!=c){a.nF=c;if(!c)a.X.disable(3089);else a.X.enable(3089);}if(a.nF&&a.k1){a.k1=0;d=a.X;e=a.nB;b=e.sK;c=a.c3.b-e.sL|0;f=e.sI;c=c-f|0;g=e.sJ;d.scissor(b,c,g,f);}}
function FV(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.rs;c=a.pd;d=b.hP.y7;e=b.eH;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eH;h=b.v3;e.bindBuffer(34962,h);i=b.hP.pL.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eH;m=k.jo;n=k.gf;o=b.hP.mJ*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gf|0;j=j+1|0;}a:{e=b.vc;if(e!==null){c=0;b.eH.bindBuffer(34962,e);i=b.hP.yp.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eH;j=e.jo;p=e.gf;m=e.ry;n=b.hP.xy;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gf|0;g=g+1|0;}}}q=b.uM;if(q===null){c=b.s6;if(c>0)b.eH.drawArrays(4,0,c);}else{b.eH.bindBuffer(34963,q);k=b.eH;g=b.Au;k.drawElements(4,g,5123,0);}a.pd=d;}
function Bs(a,b,c,d,e){Gl(a,a.kI);Gu(a.kI,a.X,b,c,d,a.c3);d=a.kI;Fw(a.X,d.z_,e);FV(a);}
function ADo(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Gl(a,a.h3);Gu(a.h3,a.X,b,c,d,a.c3);j=a.h3;d=a.X;k=j.vC;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.vB;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.h3;Fw(a.X,d.wu,i);FV(a);}
function LX(a,b,c,d,e,f,g,h){var i,j;Gl(a,a.jE);Gu(a.jE,a.X,b,c,d,a.c3);d=a.jE;i=a.X;j=d.s3;i.uniform2f(j,e,f);Fw(i,d.xc,g);d=a.jE;Fw(a.X,d.v5,h);FV(a);}
function D3(a,b,c,d,e,f,g,h,i){var j;j=!i?a.tU:a.wg;Gl(a,j);AJ1(j,a.X,!i?a.pl:a.nN);Gu(j,a.X,b,c,d,a.c3);NH(j,a.X,f);ADt(j,a.X,f,e);AI2(j,a.X,g,h);FV(a);}
function CT(a){var b,c;b=new In;c=a.zq;b.fn=new Bg;b.ey=c;b.fQ=c.dU.createTexture();A4_=A4_+1|0;return b;}
function MI(a,b){ACN(a.X,b);}
function Gl(a,b){var c,d;if(b!==a.AA){c=a.X;d=b.bD;c.useProgram(d);a.AA=b;}}
function Tx(){var a=this;Nz.call(a);a.B_=null;a.CB=null;}
function HZ(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cd;g=AHU(b,c,d,e);Kl(f,g);h=f.c$.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Ej(f,C(64));m=Ej(f,C(65));h=new Lm;n=g;h.nM=b;h.oq=c;h.By=d;h.BO=e;h.ef=i;h.ev=j;h.Bp=l;h.pw=k;h.qi=n;h.sA=CV(i);h.Ct=CV(h.ev);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.Bu=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.Bl=b;return h;}
function Ct(){B.call(this);this.B=null;}
function Eg(a,b){a.B=b;}
function A06(a,b){return 0;}
function X3(){var a=this;B.call(a);a.bF=null;a.n0=null;a.bO=null;a.ff=null;a.c2=null;a.gw=null;a.gZ=null;a.lR=null;a.mr=null;a.dk=null;a.ju=null;a.wM=0;}
function SK(a,b){var c,d,e,f;Dz(a.dk);c=(Cz(!b.jv?a.n0:a.bF)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].L(b);if(f)break;if(b.of)break;e=e+1|0;}return f;}
function Q4(a,b,c){var d,e,f;Dz(a.dk);d=(Cz(a.gw)).data;e=d.length;f=0;while(f<e){if(d[f].hU(b,c))return 1;f=f+1|0;}return 0;}
function AB9(){B.call(this);this.qs=null;}
function AYo(a,b){var c;c=a.qs;if(SK(c.co,Vi(c,b,1)))D4(c,b);}
function AB$(){B.call(this);this.yY=null;}
function AYz(a,b){var c;c=a.yY;if(SK(c.co,Vi(c,b,0)))D4(c,b);}
function AB_(){B.call(this);this.w2=null;}
function APt(a,b){var c,d,e,f,g,h,i;c=a.w2;if(c.eh!==null){a:{b:{d=E4(c,b);e=c.co;Dz(e.dk);f=e.ju;if(f!==null)f.j(d);else{g=(Cz(e.bO)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bQ(d))break a;i=i+1|0;}}}}D4(c,b);}}
function ACa(){B.call(this);this.va=null;}
function AXg(a,b){var c,d,e,f,g,h;c=a.va;b.button;if(c.eh!==null)a:{d=E4(c,b);c=c.co;e=b.button;Dz(c.dk);if(c.ju===null){f=(Cz(c.bO)).data;g=f.length;h=0;while(h<g){b=f[h].cu(d,e);if(b!==null){c.ju=b;c.wM=e;break a;}h=h+1|0;}}}}
function ACb(){B.call(this);this.sT=null;}
function AXs(a,b){var c,d,e,f,g,h,i;c=a.sT;b.button;if(c.eh!==null){d=E4(c,b);e=c.co;f=b.button;Dz(e.dk);if(f==e.wM&&e.ju!==null)e.ju=null;g=(Cz(e.bO)).data;h=g.length;i=0;a:{while(i<h){if(g[i].du(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)D4(c,b);}}
function ACc(){B.call(this);this.qP=null;}
function AQU(a,b){var c,d,e,f,g,h,i,j,k;c=a.qP;if(c.eh!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.co;f=E4(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dz(e.dk);i=(Cz(e.ff)).data;j=i.length;k=0;b:{while(k<j){if(i[k].ds(f,d,h))break b;k=k+1|0;}}D4(c,b);}}
function ACd(){B.call(this);this.AV=null;}
function ANP(a,b){var c,d,e,f,g,h,i,j;c=a.AV;if(c.eh!==null){d=E4(c,b);e=c.co;f=b.button;g=b.detail;Dz(e.dk);h=(Cz(e.bO)).data;i=h.length;j=0;a:{while(j<i){if(h[j].ct(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)D4(c,b);}}
function ACe(){B.call(this);this.yC=null;}
function A1s(a,b){var c,d,e,f,g,h,i;c=a.yC;if(c.eh!==null){d=E4(c,b);e=c.co;Dz(e.dk);f=(Cz(e.c2)).data;g=f.length;h=0;a:{while(h<g){if(f[h].L(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)D4(c,b);}}
function ACf(){B.call(this);this.wH=null;}
function ANn(a,b){var c,d,e;b=a.wH.co;c=(Cz(b.mr)).data;d=c.length;e=0;while(e<d){c[e].g();e=e+1|0;}Dz(b.dk);}
function ACg(){B.call(this);this.uI=null;}
function ARz(a,b){var c,d,e;b=a.uI.co;c=(Cz(b.lR)).data;d=c.length;e=0;while(e<d){c[e].g();e=e+1|0;}Dz(b.dk);}
function Vc(){B.call(this);this.ud=null;}
function A07(a,b){var c;c=a.ud;if(c.eh!==null)E4(c,b);}
function Vd(){B.call(this);this.tw=null;}
function APc(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.tw;if(VU()===c.jh){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cz(c.co.gZ)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cW();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.co.dk;m=new O7;m.uS=k;m.uT=l;g.getAsString(Bu(m,"accept"));D4(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new K;M(l);H(H(H(H(l,C(67)),k),C(68)),g);$rt_globals.console.info($rt_ustr(L(l)));}e=e+1
|0;}}}
function Ve(){B.call(this);this.vS=null;}
function APy(a,b){var c;c=a.vS;if(VU()===c.jh&&Q4(c.co,AAu(c,b),0))D4(c,b);}
function Vf(){B.call(this);this.As=null;}
function AYF(a,b){var c;c=a.As;if(VU()===c.jh&&Q4(c.co,AAu(c,b),1))D4(c,b);}
var AAN=G(0);
var AAY=G();
function Kp(a,b,c,d){var e,f,g,h,i;e=new Y3;e.i3=d;A4T=A4T+1|0;e.no=b;e.mT=c;f=(Ep()).createElement("canvas");e.iT=f;g=b;f.width=g;h=e.iT;f=c;h.height=f;if(!d)g=e.iT.getContext("2d");else{i=e.iT;h=AUn();g=i.getContext("2d",h);}e.c$=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AAX=G();
function AOu(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Op(){var a=this;B.call(a);a.O=null;a.p=null;a.bU=null;}
var Kj=G();
var A4D=null;function MF(a,b,c){return b.lY(c);}
function AE6(){A4D=new Kj;}
function AGx(){var a=this;B.call(a);a.g1=null;a.io=null;a.gg=0;}
function CS(a){var b=new AGx();ANM(b,a);return b;}
function ANM(a,b){a.g1=b;}
function Bc(a,b){var c,d,e;c=a.gg;d=a.g1;if(c==d.data.length)a.g1=De(d,c+4|0);d=a.g1.data;e=a.gg;a.gg=e+1|0;d[e]=b;a.io=null;}
function Cz(a){var b;b=a.io;if(!(b!==null&&b.data.length==a.gg))a.io=De(a.g1,a.gg);return a.io;}
var Et=G(0);
var Cp=G(0);
var CB=G(0);
function AWT(a,b){return 0;}
function ASe(a,b,c){return null;}
function AKX(a,b,c){return 0;}
function AYS(a,b,c,d){return 0;}
var EC=G(0);
var C6=G(0);
var Ft=G(0);
var DL=G(0);
var FN=G(0);
function QK(){B.call(this);this.BD=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BJ(a,b){var c=new Bg();AEj(c,a,b);return c;}
function AIU(a){var b=new Bg();AMs(b,a);return b;}
function AEj(a,b,c){a.a=b;a.b=c;}
function AMs(a,b){a.a=b.a;a.b=b.b;}
function Cs(a,b){a.a=b.a;a.b=b.b;}
function V(a,b,c){a.a=b;a.b=c;}
function AG4(a){var b,c,d;b=a.a;c=a.b;d=new K;M(d);U(H(U(H(d,C(69)),b),C(70)),c);return L(d);}
function AOl(a,b){var c;a:{b:{if(a!==b){if(BI(b)!==BI(a))break b;if(!JM(a,b))break b;}c=1;break a;}c=0;}return c;}
function JM(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function ACj(){var a=this;B.call(a);a.sK=0;a.sL=0;a.sJ=0;a.sI=0;}
var AF5=G();
var AHA=G(0);
function Ym(){B.call(this);this.dU=null;}
function NQ(){var a=this;B.call(a);a.bD=null;a.D$=null;}
function AI6(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(71):C(72);g=$rt_str(b.getShaderInfoLog(e));h=new K;M(h);H(H(h,f),g);g=L(h);b.deleteShader(e);Bl(Bx(),g);Bl(EG(),C(73));Bl(EG(),d);Bl(EG(),C(73));b=new Bt;Bm(b,g);N(b);}
function Dc(){var a=this;NQ.call(a);a.wG=null;a.rS=null;a.nk=null;}
function A5a(a,b,c,d){var e=new Dc();H2(e,a,b,c,d);return e;}
function H2(a,b,c,d,e){var f,g,h,i,j,k;a.D$=e;f=AI6(b,35633,c);d=AI6(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bD=g;h=e.td.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bD;k=c.jo;c=c.rZ;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bD;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ACN(b,C(74));a.nk=new Bg;c=a.bD;a.wG=b.getUniformLocation(c,"uResolution");c=a.bD;a.rS=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new K;M(c);H(H(c,C(75)),d);Bm(b,L(c));N(b);}
function AEr(a,b,c){var d,e,f;if(!JM(a.nk,c)){Cs(a.nk,c);d=a.wG;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Gu(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.rS;b.uniform4f(e,i,l,h,j);AEr(a,b,f);}
function AJJ(){Dc.call(this);this.z_=null;}
function A19(a){var b=new AJJ();AWG(b,a);return b;}
function AWG(a,b){var c;Jo();H2(a,b,C(59),C(76),A4$);c=a.bD;a.z_=b.getUniformLocation(c,"uColor");}
function Fj(){Dc.call(this);this.sP=null;}
function A21(a,b){var c=new Fj();AAw(c,a,b);return c;}
function A5b(a,b,c){var d=new Fj();AAA(d,a,b,c);return d;}
function AAw(a,b,c){AAA(a,b,C(59),c);}
function AAA(a,b,c,d){Jo();H2(a,b,c,d,A4$);c=a.bD;a.sP=b.getUniformLocation(c,"sDiffuse");}
function NH(a,b,c){var d;d=a.sP;b.uniform1i(d,0);b.activeTexture(33984);c=c.fQ;b.bindTexture(3553,c);}
var YG=G(Dc);
function AE1(){Fj.call(this);this.Bf=null;}
function A3Q(a){var b=new AE1();AQs(b,a);return b;}
function AQs(a,b){var c;AAw(a,b,C(77));c=a.bD;a.Bf=b.getUniformLocation(c,"uContrast");}
function Hl(){var a=this;Fj.call(a);a.rm=null;a.r6=null;a.s1=null;a.zh=null;a.pZ=0.0;}
function A5c(a,b,c){var d=new Hl();U1(d,a,b,c);return d;}
function U1(a,b,c,d){AAA(a,b,c,d);c=a.bD;a.rm=b.getUniformLocation(c,"uTexTransform");c=a.bD;a.r6=b.getUniformLocation(c,"uColor");c=a.bD;a.s1=b.getUniformLocation(c,"uBgColor");c=a.bD;a.zh=b.getUniformLocation(c,"uTextPow");}
function AJ1(a,b,c){var d;if(a.pZ!==c){a.pZ=c;d=a.zh;b.uniform2f(d,c,0.0);}}
function AI2(a,b,c,d){Fw(b,a.r6,c);Fw(b,a.s1,d);}
function ADt(a,b,c,d){var e,f,g,h,i,j;c=c.fn;e=c.a;f=c.b;g=d.bm;h=e;g=g/h;i=d.bs;j=f;i=i/j;h=d.be/h;j=d.bB/j;c=a.rm;b.uniform4f(c,g,i,h,j);}
var Pi=G(Hl);
var AGM=G(Hl);
function A32(a){var b=new AGM();AVD(b,a);return b;}
function AVD(a,b){U1(a,b,C(61),C(78));}
function AHN(){var a=this;Fj.call(a);a.vd=null;a.vb=null;a.r7=null;}
function A2G(a){var b=new AHN();AMS(b,a);return b;}
function AMS(a,b){var c,d;AAw(a,b,C(79));c=a.bD;a.vd=b.getUniformLocation(c,"uColorB");d=a.bD;a.vb=b.getUniformLocation(d,"uColorF");d=a.bD;a.r7=b.getUniformLocation(d,"uContrast");}
function AJe(){var a=this;Dc.call(a);a.wu=null;a.vC=null;a.vB=null;}
function A3L(a){var b=new AJe();AVF(b,a);return b;}
function AVF(a,b){var c;Jo();H2(a,b,C(59),C(80),A4$);c=a.bD;a.wu=b.getUniformLocation(c,"uColor");c=a.bD;a.vC=b.getUniformLocation(c,"uPoints1");c=a.bD;a.vB=b.getUniformLocation(c,"uPoints2");}
function ADX(){var a=this;Dc.call(a);a.v5=null;a.s3=null;a.xc=null;}
function A3M(a){var b=new ADX();AUB(b,a);return b;}
function AUB(a,b){var c;Jo();H2(a,b,C(59),C(81),A4$);c=a.bD;a.v5=b.getUniformLocation(c,"uColor");c=a.bD;a.s3=b.getUniformLocation(c,"uBaseline");c=a.bD;a.xc=b.getUniformLocation(c,"uScaleHExp");}
var Zc=G(0);
var AKh=G(0);
function Fw(b,c,d){var e,f,g,h;e=d.bm;f=d.bs;g=d.be;h=d.bB;b.uniform4f(c,e,f,g,h);}
function ACN(b,c){var d,e;d=b.getError();if(d){b=Bx();e=new K;M(e);U(H(e,c),d);Bl(b,L(e));}}
function Yl(){var a=this;B.call(a);a.Dl=null;a.Dn=null;a.Dm=null;}
function QE(){var a=this;B.call(a);a.eH=null;a.hP=null;a.v3=null;a.vc=null;a.uM=null;a.s6=0;a.Au=0;}
function CG(){var a=this;B.call(a);a.Dk=null;a.fE=0;}
function DG(a,b,c){a.Dk=b;a.fE=c;}
function G1(){var a=this;CG.call(a);a.td=null;a.pL=null;a.yp=null;a.mJ=0;a.xy=0;a.y7=0;}
var A4$=null;var A5d=null;function Jo(){Jo=Bn(G1);AN$();}
function AN$(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new G1;c=Q(Ed,2);d=c.data;A0x();d[0]=A5e;d[1]=A5f;Jo();DG(b,C(82),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.pu.fE){case 0:f=f+l.gf|0;h=h+1|0;break a;case 1:e=e+l.gf|0;g=g+1|0;break a;default:}}i=i|1<<l.jo;k=k+1|0;}b.td=c;b.mJ=e;b.xy=f;b.y7=i;c=Q(Ed,g);m=c.data;b.pL=c;c=Q(Ed,h);n=c.data;b.yp=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.pu.fE){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A4$
=b;c=Q(G1,1);c.data[0]=b;A5d=c;}
var Mb=G(0);
var Sm=G(0);
var AA2=G(0);
var GK=G();
function MC(){GK.call(this);this.A8=null;}
function AEI(){var a=this;MC.call(a);a.Ck=0;a.mQ=0;a.lh=null;a.mx=null;a.tP=null;}
function APG(a,b){var c=new AEI();A0i(c,a,b);return c;}
function A0i(a,b,c){a.A8=b;b=new K;M(b);a.lh=b;a.mx=B4(32);a.Ck=c;AED();a.tP=A5g;}
function AAg(a,b,c,d){var e,$$je;e=a.A8;if(e===null)a.mQ=1;if(!(a.mQ?0:1))return;a:{try{e.mp(b,c,d);break a;}catch($$e){$$je=EQ($$e);if($$je instanceof IY){}else{throw $$e;}}a.mQ=1;}}
function WR(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AIH(b,c,d-c|0);e=DH(Bd(16,Be(e.length,1024)));g=AIv(e,0,e.data.length);h=a.tP;i=new Qc;b=DH(1);j=b.data;j[0]=63;He();k=A5h;i.nn=k;i.mU=k;c=j.length;if(c&&c>=i.vA){i.Dj=h;i.rX=b.hi();i.Cf=2.0;i.vA=4.0;i.xh=B4(512);i.qM=DH(512);k=A5i;if(k===null){i=new BR;Bm(i,C(83));N(i);}i.nn=k;i.mU=k;a:while(true){if(i.k_==3){f=new C4;X(f);N(f);}i.k_=2;b:{while(true){try{k=ADP(i,f,g);}catch($$e){$$je=EQ($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(IS(k))
{d=Cg(f);if(d<=0)break b;k=Eo(d);}else if(H$(k))break;h=!L4(k)?i.nn:i.mU;c:{if(h!==A5i){if(h===A5j)break c;else break b;}d=Cg(g);b=i.rX;l=b.data.length;if(d<l){k=A5k;break b;}ACw(g,b,0,l);}Fp(f,f.Y+KT(k)|0);}}l=H$(k);AAg(a,e,0,g.Y);Pr(g);if(!l){while(true){d=i.k_;if(d!=2&&d!=4){f=new C4;X(f);N(f);}f=A5l;if(f===f)i.k_=3;l=H$(f);AAg(a,e,0,g.Y);Pr(g);if(!l)break;}return;}}N(AVd(f));}i=new BR;Bm(i,C(84));N(i);}
function Bl(a,b){var c,d,e,f,g,h,i,j;BM(BU(a.lh,b),10);b=a.lh;c=b.K;d=a.mx;if(c>d.data.length)d=B4(c);e=0;f=0;if(e>c){b=new BF;Bm(b,C(85));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.C.data;j=e+1|0;g[f]=i[e];f=h;e=j;}WR(a,d,0,c);a.lh.K=0;}
function Hw(){GK.call(this);this.DY=null;}
function Vo(a){a.DY=DH(1);}
var Ls=G(Hw);
var A4W=null;function AOn(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AFM(){var b;b=new Ls;Vo(b);A4W=b;}
function Ed(){var a=this;CG.call(a);a.rZ=null;a.pu=null;a.gf=0;a.ry=0;a.jo=0;}
var A5e=null;var A5f=null;var A5m=null;function A0x(){A0x=Bn(Ed);AWa();}
function A2h(a,b,c,d,e,f,g){var h=new Ed();T9(h,a,b,c,d,e,f,g);return h;}
function T9(a,b,c,d,e,f,g,h){A0x();DG(a,b,c);a.rZ=d;a.pu=e;a.gf=f;a.ry=g;a.jo=h;}
function AWa(){var b;b=new Ed;APp();T9(b,C(86),0,C(87),A5n,2,0,0);A5e=b;b=A2h(C(88),1,C(89),A5n,2,0,1);A5f=b;A5m=I(Ed,[A5e,b]);}
function Mu(){var a=this;B.call(a);a.Da=null;a.DC=null;}
function AFV(b){var c,d;if(Gh(b))N(AH$(b));if(!AJu(P(b,0)))N(AH$(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AJu(d))break a;else N(AH$(b));}}c=c+1|0;}}
function AJu(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Me=G(Mu);
var A5g=null;function AED(){AED=Bn(Me);AMR();}
function AF7(a){var b,c;b=new Sq;b.gd=C(90);He();c=A5h;b.i9=c;b.ns=c;b.Dx=a;b.vI=0.3333333432674408;b.BQ=0.5;b.wy=DH(512);b.yW=B4(512);return b;}
function AMR(){var b,c,d,e,f;b=new Me;AED();c=Q(BL,0);d=c.data;AFV(C(91));e=d.length;f=0;while(f<e){AFV(d[f]);f=f+1|0;}b.Da=C(91);b.DC=c.hi();A5g=b;}
function Xz(){var a=this;B.call(a);a.f5=null;a.pH=null;a.ma=null;a.y_=null;a.rJ=null;a.rV=null;}
function AIb(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.f5,b,c));}
function OF(a,b){var c,d,e,f,g,h,i,$$je;c=new BL;d=b;while(a.pH[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.f5,b,d));f=e.data;E8();d=f.length;AED();g=A5g;h=AIv(e,0,d);a:{try{i=AF7(g);He();g=AHH(AFp(AJW(i,A5i),A5i),h);break a;}catch($$e){$$je=EQ($$e);if($$je instanceof F8){g=$$je;}else{throw $$e;}}h=new ACE;h.kl=1;h.kG=1;h.iD=C(92);h.mV=g;N(h);}if(!g.Y&&g.ed==g.nO)c.b$=g.iq;else{f=B4(Cg(g));e=f.data;c.b$=f;O1(g,f,0,e.length);}return c;}
function VW(a,b){var c,d,e;c=new BL;d=b>>>1|0;e=d;while(a.ma[e]){e=e+1|0;}d=e-d|0;Jj(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f5,b,d)));return c;}
var HY=G(CG);
var A5o=null;var A5n=null;var A5p=null;function APp(){APp=Bn(HY);AVq();}
function AMM(a,b){var c=new HY();AJB(c,a,b);return c;}
function AJB(a,b,c){APp();DG(a,b,c);}
function AVq(){var b;A5o=AMM(C(93),0);b=AMM(C(94),1);A5n=b;A5p=I(HY,[A5o,b]);}
var Nn=G(Hw);
var A4X=null;function AM1(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AG2(){var b;b=new Nn;Vo(b);A4X=b;}
function AF0(){BR.call(this);this.Bk=null;}
function AH$(a){var b=new AF0();ARQ(b,a);return b;}
function ARQ(a,b){X(a);a.Bk=b;}
var TI=G(Eq);
var Md=G(0);
function AC1(){B.call(this);this.xA=null;}
function ARi(a,b){a.xA.setPointerCapture(b.pointerId);}
function AC2(){B.call(this);this.wQ=null;}
function ALE(a,b){a.wQ.releasePointerCapture(b.pointerId);}
function H7(){var a=this;B.call(a);a.nO=0;a.Y=0;a.ed=0;a.js=0;}
function ABT(a,b){a.js=(-1);a.nO=b;a.ed=b;}
function Fp(a,b){var c,d,e;if(b>=0&&b<=a.ed){a.Y=b;if(b<a.js)a.js=0;return a;}c=new BR;d=a.ed;e=new K;M(e);BM(U(H(U(H(e,C(95)),b),C(96)),d),93);Bm(c,L(e));N(c);}
function Cg(a){return a.ed-a.Y|0;}
function D5(a){return a.Y>=a.ed?0:1;}
var Zp=G(0);
var Ln=G(H7);
function AGP(b){var c,d;if(b>=0)return AQD(0,b,B4(b),0,b,0);c=new BR;d=new K;M(d);U(H(d,C(97)),b);Bm(c,L(d));N(c);}
function AIH(b,c,d){return AQD(0,b.data.length,b,c,c+d|0,0);}
function O1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BF;i=new K;M(i);U(H(U(H(i,C(98)),g),C(99)),f);Bm(h,L(i));N(h);}if(Cg(a)<d){j=new NW;X(j);N(j);}if(d<0){j=new BF;k=new K;M(k);H(U(H(k,C(100)),d),C(101));Bm(j,L(k));N(j);}g=a.Y;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iq.data[m+a.px|0];l=l+1|0;c=n;m=o;}a.Y=g+d|0;return a;}}b=b.data;j=new BF;d=b.length;k=new K;M(k);BM(U(H(U(H(k,C(102)),c),C(96)),d),41);Bm(j,L(k));N(j);}
function M0(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.pI){b=new Ke;X(b);N(b);}e=d-c|0;if(Cg(a)<e){b=new Jy;X(b);N(b);}if(c>J(b)){f=new BF;d=J(b);b=new K;M(b);BM(U(H(U(H(b,C(103)),c),C(96)),d),41);Bm(f,L(b));N(f);}if(d>J(b)){f=new BF;c=J(b);b=new K;M(b);U(H(U(H(b,C(104)),d),C(105)),c);Bm(f,L(b));N(f);}if(c>d){b=new BF;f=new K;M(f);U(H(U(H(f,C(103)),c),C(106)),d);Bm(b,L(f));N(b);}g=a.Y;while(c<d){h=g+1|0;i=c+1|0;Zv(a,g,P(b,c));g=h;c=i;}a.Y=a.Y+e|0;return a;}
function MQ(){var a=this;H7.call(a);a.mP=0;a.pg=null;a.B3=null;}
function AIv(b,c,d){var e,f,g;e=b.data;f=new ACv;g=e.length;d=c+d|0;ABT(f,g);AWI();f.B3=A5q;f.mP=0;f.pg=b;f.Y=c;f.ed=d;f.B7=0;f.v2=0;return f;}
function ACw(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.v2){e=new Ke;X(e);N(e);}if(Cg(a)<d){e=new Jy;X(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BF;j=new K;M(j);U(H(U(H(j,C(107)),h),C(99)),g);Bm(i,L(j));N(i);}if(d<0){e=new BF;i=new K;M(i);H(U(H(i,C(100)),d),C(101));Bm(e,L(i));N(e);}h=a.Y;k=h+a.mP|0;l=0;while(l<d){b=a.pg.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Y=h+d|0;return a;}}b=b.data;e=new BF;d=b.length;i=new K;M(i);BM(U(H(U(H(i,C(102)),c),C(96)),d),41);Bm(e,L(i));N(e);}
function Pr(a){a.Y=0;a.ed=a.nO;a.js=(-1);return a;}
function Iz(){B.call(this);this.CL=null;}
var A5j=null;var A5i=null;var A5h=null;function He(){He=Bn(Iz);APf();}
function AGA(a){var b=new Iz();AJs(b,a);return b;}
function AJs(a,b){He();a.CL=b;}
function APf(){A5j=AGA(C(108));A5i=AGA(C(109));A5h=AGA(C(110));}
var OR=G(Ct);
function AO9(a){}
function AN3(a,b,c){}
function HF(){var a=this;Ct.call(a);a.dL=null;a.q=null;}
function ABS(a,b){var c,d,e;Eg(a,b);a.dL=AHT(0,0,64);c=new ST;c.b0=new Bg;c.ei=CS(Q(CZ,0));c.dw=new Bg;c.pv=new Bg;c.A$=new B0;c.A_=new B0;d=b.O;c.b4=d;e=b.bU;c.hn=e;c.cv=d.lB;c.cP=QS(e);d=b.p.mr;e=new Yh;e.sO=c;Bc(d,e);d=b.p.lR;e=new Yg;e.u8=c;Bc(d,e);a.q=c;Bc(b.p.bF,new Ze);b=b.p.bF;c=a.q;BD(c);d=new Zd;d.wx=c;Bc(b,d);}
function Hs(a){EB(a.B.O,a.dL);}
function AE_(a,b,c){var d,e,f,g,h;a:{d=a.q;Cs(d.b0,b);e=d.cb;if(e!==c){d.cb=c;f=(Cz(d.ei)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gx(e,c);h=h+1|0;}}}}
function CM(){HF.call(this);this.bb=null;}
function G5(a,b){KC(a,b,1);}
function KC(a,b,c){var d,e,f;ABS(a,b);d=new ACI;e=a.q;d.cO=BH();d.dG=e;a.bb=d;Bc(a.q.ei,d);Bc(b.p.bO,a.bb);e=b.p.ff;f=a.bb;BD(f);d=new Vz;d.u4=f;Bc(e,d);if(c){b=b.p.bO;d=a.q.cP;e=new Wf;e.vz=d;Bc(b,e);}}
function AMV(a){Hs(a);JE(a.bb);}
function Iu(a,b,c){var d,e;AE_(a,b,c);b=a.bb;d=0;while(true){e=b.cO;if(d>=e.m)break;Bw(e,d);d=d+1|0;}}
function ALw(a,b){var c,d,e,f;c=a.bb;d=0;e=0;while(true){f=c.cO;if(e>=f.m)break;d=(Bw(f,e)).V.cg(b)|d;e=e+1|0;}return d;}
var GH=G(0);
function AGG(a){a.hx(Iv());}
function Hj(a){a.hx(L1());}
function AHq(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IO;c=new JZ;d=new Hf;AF8();KJ(d,A5r);Mf(c,d,BV(A5s),BV(A5t),BV(A5u),BV(A5s),BV(A5v),BV(A5w),BV(A5x),BV(A5y),BV(A5z),BV(A5A));e=AIB(S(C(111)));AFv();f=(A5B.hi()).data;g=f.length;h=Q(Kc,g);i=h.data;j=0;while(j<g){i[j]=f[j].oT;j=j+1|0;}k=AJg(S(C(112)),S(C(113)),S(C(114)),S(C(115)));l=new IP;m=new IX;ATW();d=A5C;Og(m,d,A5D,A5E,A5F,A5G,d);LF(l,m,AJX(),AGH(S(C(116)),S(C(111)),CA(0)),AJX(),AG5(1,0.07500000298023224),A5H,A5I);Lv(b,c,e,h,k,l,ADv(S(C(117)),S(C(118)),S(C(119)),
S(C(120))));a.hx(b);}
var MY=G(0);
var F4=G(0);
function KG(){var a=this;CM.call(a);a.E=null;a.G=null;a.iy=null;a.i$=0;a.kK=null;a.l4=null;a.ft=null;}
function A3N(a){var b=new KG();AEF(b,a);return b;}
function AEF(a,b){var c,d,e;KC(a,b,0);a.ft=AUJ(a.q);c=PL(a.bb);a.iy=c;a.E=KW(a.q,c);c=KW(a.q,a.iy);a.G=c;a.l4=ASf(a.E,c);c=a.E;c.ce=1;AB6(a.ft,c,a.G);c=a.E;d=new Td;d.Aj=a;c.mB=d;c=a.G;d=new Te;d.x2=a;c.mB=d;AGs(a,0);MH(a.q,a.E);Bc(b.p.ff,a);Bc(b.p.bO,a);c=b.p.bF;d=new Tf;d.v_=a;Bc(c,d);c=b.p.bF;d=new HL;e=new Tb;e.t6=a;Il(d,b,e);Bc(c,d);Bc(b.p.gw,a);Bc(b.p.gZ,a);b=b.p.c2;c=new Tc;c.r$=a;Bc(b,c);Hj(a);}
function Vt(a,b){if(a.E===b)a.i$=a.i$|1;if(a.G===b)a.i$=a.i$|2;if((a.i$&3)==3)AJ3(a);}
function AGs(a,b){RH(a.E,b);RH(a.G,b);}
function A0L(a,b,c){if(DJ(a.q,a.E))return G7(a.E,b,c);if(!DJ(a.q,a.G))return 0;return G7(a.G,b,c);}
function AEX(a){if(DJ(a.q,a.E))return U_(a,a.E);if(!DJ(a.q,a.G))return null;return U_(a,a.G);}
function U_(a,b){var c;c=new Sf;c.rO=b;return c;}
function AJ3(a){var b,c,d,e,f,g;Bl(Bx(),C(121));b=a.E.d.f;c=a.G.d.f;d=E6(b);e=E6(c);f=AD7(b);g=AD7(c);b=a.B.bU;c=new XH;c.wz=a;CR(b,c,C(122),I(B,[d,f,e,g]));}
function AQ7(a,b){var c,d;c=IR(a.E,b);d=IR(a.G,b);return !c&&!d?0:1;}
function AXp(a){var b;Hs(a);Ig(a.E);Ig(a.G);b=a.ft;AFI(b,b.g4.b4);JE(a.bb);}
function AWu(a){return Gs(0);}
function ARq(a){Ws(a.E);Ws(a.G);}
function AXl(a){ADb(a.E);ADb(a.G);}
function ARZ(a,b){Px(a.E,b);Px(a.G,b);}
function AYb(a,b){Oq(a.q,b);}
function AMh(a,b){if(JY(a.bb,b)){LH(a.E);LH(a.G);}}
function AOE(a,b,c){Iu(a,b,c);AE$(a,b,c);}
function AE$(a,b,c){var d,e,f,g,h,i;d=new Bg;e=Cf(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;AEj(f,g-h|0,b.b);Mc(a.E,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;Mc(a.G,d,f,c);V(a.ft.i,f.a,d.b);V(a.ft.k,d.a-f.a|0,f.b);}
function AK2(a,b){BD(b);Ik(a.iy,b);Hx(a.E,b);Hx(a.G,b);a.ft.jU=b;}
function AGo(a,b){if(b.bl!=121)return 0;return 1;}
function AIu(a,b){var c,d,e,f;if(DJ(a.q,a.E)){c=a.iy;d=b.h;e=a.E;f=new PP;f.pM=a;GE(c,d,e,a,a,a,f);}if(DJ(a.q,a.G)){c=a.iy;b=b.h;d=a.G;e=new PO;e.AF=a;GE(c,b,d,a,a,a,e);}return 1;}
function AYs(a,b){var c,d;c=B2(a.E,b.h)&&WK(a.E,b)?1:0;d=B2(a.G,b.h)&&WK(a.G,b)?1:0;return !c&&!d?0:1;}
function AWv(a,b,c,d){var e,f;e=B2(a.E,b.h)&&OH(a.E,b,c,d)?1:0;f=B2(a.G,b.h)&&OH(a.G,b,c,d)?1:0;return !e&&!f?0:1;}
function APs(a,b,c){var d,e,f,g,h,i,j,k;d=B2(a.E,b.h);e=B2(a.G,b.h);f=a.q;g=f.d5;h=g!==null?0:1;i=a.E;j=g!==i?0:1;k=g!==a.G?0:1;if(d&&!(!h&&!k))FF(f,i);if(e&&!(!h&&!j))FF(a.q,a.G);if(d){i=VI(a.E,b,c);if(i!==null)return i;}return !e?null:VI(a.G,b,c);}
function AYU(a,b,c){var d,e,f,g;d=B2(a.E,b.h);e=B2(a.G,b.h);f=d&&Sl(a.E,b,c)?1:0;g=e&&Sl(a.G,b,c)?1:0;return !f&&!g?0:1;}
function AQH(a,b,c,d){var e,f,g,h;e=B2(a.E,b.h);f=B2(a.G,b.h);g=e&&LB(a.E,b,c,d)?1:0;h=f&&LB(a.G,b,c,d)?1:0;return !g&&!h?0:1;}
function AWW(a){return AEX(a);}
var AF$=G(KG);
function A3h(a){var b=new AF$();A0A(b,a);return b;}
function A0A(a,b){var c;AEF(a,b);a.E.eM=1;a.G.eM=1;c=new SG;c.wb=a;PQ(a,c,C(123));c=new SH;c.zc=a;PQ(a,c,C(124));}
function APD(a){return Gs(1);}
function PQ(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new Oz;d=d.then(Bu(e,"f"));f=new OB;f.sR=b;f.sQ=c;g=new OA;d.then(Bu(f,"f"),Bu(g,"f"));}
var AGv=G();
function AZ7(b){var c,d;if(J(b)>0){c=new K;M(c);H(H(c,C(125)),b);$rt_globals.console.info($rt_ustr(L(c)));}a:{d=(-1);switch(NC(b)){case -1570047148:if(!Bi(b,C(126)))break a;d=17;break a;case -1509980539:if(!Bi(b,C(127)))break a;d=13;break a;case -1351411913:if(!Bi(b,C(128)))break a;d=5;break a;case -1073555521:if(!Bi(b,C(129)))break a;d=14;break a;case -1045861099:if(!Bi(b,C(130)))break a;d=18;break a;case -1045861098:if(!Bi(b,C(131)))break a;d=19;break a;case -811765794:if(!Bi(b,C(132)))break a;d=6;break a;case -785237654:if
(!Bi(b,C(133)))break a;d=11;break a;case -631889171:if(!Bi(b,C(134)))break a;d=9;break a;case -536831301:if(!Bi(b,C(135)))break a;d=25;break a;case -439438829:if(!Bi(b,C(136)))break a;d=21;break a;case -357667878:if(!Bi(b,C(137)))break a;d=22;break a;case -223304637:if(!Bi(b,C(138)))break a;d=2;break a;case -193916863:if(!Bi(b,C(139)))break a;d=23;break a;case 2129957:if(!Bi(b,C(140)))break a;d=1;break a;case 3343967:if(!Bi(b,C(141)))break a;d=10;break a;case 3556498:if(!Bi(b,C(142)))break a;d=4;break a;case 91636708:if
(!Bi(b,C(143)))break a;d=24;break a;case 485517998:if(!Bi(b,C(144)))break a;d=7;break a;case 544901384:if(!Bi(b,C(145)))break a;d=3;break a;case 675521850:if(!Bi(b,C(146)))break a;d=20;break a;case 1030621992:if(!Bi(b,C(147)))break a;d=16;break a;case 1164939699:if(!Bi(b,C(148)))break a;d=27;break a;case 1465713255:if(!Bi(b,C(149)))break a;d=8;break a;case 1554501643:if(!Bi(b,C(150)))break a;d=15;break a;case 1609169232:if(!Bi(b,C(151)))break a;d=12;break a;case 2090248989:if(!Bi(b,C(152)))break a;d=26;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new TU;break b;case 3:case 4:b=new TR;break b;case 5:b=new TQ;break b;case 6:b=new TT;break b;case 7:b=new TS;break b;case 8:b=new TY;break b;case 9:case 10:b=new TX;break b;case 11:b=new T0;break b;case 12:b=new TZ;break b;case 13:b=new Z5;break b;case 14:b=new Z4;break b;case 15:b=new Z3;break b;case 16:b=new ZT;break b;case 17:b=new ZS;break b;case 18:b=new ZQ;break b;case 19:b=new ZP;break b;case 20:b=new ZO;break b;case 21:b=new ZN;break b;case 22:b=new ZM;break b;case 23:b
=new ZX;break b;case 24:b=new ZW;break b;case 25:b=new ZV;break b;case 26:b=new ZU;break b;case 27:b=new ZZ;break b;default:b=new ZY;break b;}b=new TV;}return b;}
var AIE=G();
var KN=G(Ln);
function AEW(){var a=this;KN.call(a);a.pI=0;a.px=0;a.iq=null;}
function AQD(a,b,c,d,e,f){var g=new AEW();ATd(g,a,b,c,d,e,f);return g;}
function ATd(a,b,c,d,e,f,g){ABT(a,c);a.Y=e;a.ed=f;a.px=b;a.pI=g;a.iq=d;}
function Zv(a,b,c){a.iq.data[b+a.px|0]=c;}
function Lf(){var a=this;B.call(a);a.Dj=null;a.rX=null;a.Cf=0.0;a.vA=0.0;a.nn=null;a.mU=null;a.k_=0;}
function NU(){var a=this;B.call(a);a.hS=0;a.jR=0;}
var A5l=null;var A5k=null;function ADT(a,b){var c=new NU();AHR(c,a,b);return c;}
function AHR(a,b,c){a.hS=b;a.jR=c;}
function IS(a){return a.hS?0:1;}
function H$(a){return a.hS!=1?0:1;}
function Nm(a){return !QX(a)&&!L4(a)?0:1;}
function QX(a){return a.hS!=2?0:1;}
function L4(a){return a.hS!=3?0:1;}
function KT(a){var b;if(Nm(a))return a.jR;b=new Eb;X(b);N(b);}
function Eo(b){return ADT(2,b);}
function Tv(a){var b,c;switch(a.hS){case 0:b=new QF;X(b);N(b);case 1:b=new UN;X(b);N(b);case 2:b=new Tr;c=a.jR;X(b);b.CW=c;N(b);case 3:b=new Qz;c=a.jR;X(b);b.Ep=c;N(b);default:}}
function AH4(){A5l=ADT(0,0);A5k=ADT(1,0);}
var ADN=G();
var IW=G(0);
var V8=G();
function AM8(a,b){return b.arrayBuffer();}
var V7=G();
function AP9(a,b){var c,d;c=new Xy;d=new Xw;return $rt_globals.WebAssembly.instantiate(b,AOt(Bu(c,"f"),Bu(d,"f")));}
var V5=G();
function AQx(a,b){ALy(b);}
var V4=G();
function AUV(a,b){AGD(b);}
var W=G(0);
function SG(){B.call(this);this.wb=null;}
function A0_(a,b){HU(a.wb.E,b);}
function SH(){B.call(this);this.zc=null;}
function AW1(a,b){HU(a.zc.G,b);}
var TV=G();
function ASc(a,b){return A3N(b);}
var TU=G();
function AKK(a,b){return A2F(b);}
var TR=G();
function AVz(a,b){return A2R(b);}
var TQ=G();
function AX_(a,b){var c,d,e,f,g;c=new AAh;Eg(c,b);d=(Iv()).br.d$;c.DN=d;c.kP=AJ4(d);c.iM=new Bg;c.hV=new Bg;c.de=KA();c.dP=KA();c.mG=Gs(1);b=b.p.bO;d=new VN;d.lM=c;Bc(b,d);b=c.mG.data[DN()*c.mG.data.length|0];d=Ij(c.B.O,b,10);c.mv=d;Cl(c.B.O.cd,d);e=Ej(c.B.O.cd,C(153));d=c.B.O.cd;f=new K;M(f);BM(f,43);H(f,b);g=CV(e+Ej(d,L(f)));c.jl=g;c.iu=BY(c.iu,ADf(c,1,g,b,c.mv,c.B.O));c.it=BY(c.it,ADf(c,0,c.jl,b,c.mv,c.B.O));QI(c,c.de,c.iu);QI(c,c.dP,c.it);Cw(c.de.W,1.0,1.0,1.0,1.0);Fb(c.de,c.kP);Cw(c.dP.W,1.0,1.0,1.0,1.0);Fb(c.dP,
c.kP);b=Bx();g=c.jl;d=new K;M(d);U(H(d,C(154)),g);Bl(b,L(d));return c;}
var TT=G();
function AMP(a,b){var c,d,e;c=new WM;G5(c,b);d=new VK;d.ni=new Bg;d.nL=new Bg;c.xG=d;c.e1=AIG();c.dy=AIG();c.n2=DK(C(155),25.0);Bc(c.q.ei,c);d=b.p.bF;e=new AAI;e.tG=c;Bc(d,e);Bc(b.p.bO,c);b=b.p.c2;d=new AAE;d.uC=c;Bc(b,d);ADh(c.dy);BO(c.dL,CA(43));b=E_();Jx(c.e1,b);Jx(c.dy,b);b=c.e1;b.kv=new AAF;d=c.dy;d.kv=new AAG;d.ow=new PJ;d.vG=new PK;M5(b,(Q$(0)).kf);M5(c.dy,(Q$(0)).kf);return c;}
var TS=G();
function ATg(a,b){var c,d,e;c=new ZR;G5(c,b);Bc(c.q.ei,c);BO(c.dL,CA(43));d=b.p.bF;e=new TL;e.Bt=c;Bc(d,e);b=b.p.c2;d=new TM;d.z9=c;Bc(b,d);return c;}
var TY=G();
function AMu(a,b){var c,d,e;c=new Wb;ABS(c,b);c.hL=BH();c.f2=BH();c.ro=S(C(156));c.jQ=AGi();c.hK=0;d=c.q.ei;e=new OJ;e.w1=c;Bc(d,e);Bc(b.p.bO,c);d=b.p.bF;e=new OI;e.uN=c;Bc(d,e);b=Ij(b.O,C(155),35);c.jV=b;c.lS=AHr(E1(b));BO(c.dL,S(C(157)));return c;}
var TX=G();
function AO1(a,b){var c,d,e,f;c=new R$;Eg(c,b);c.hO=AGC();c.eV=0;c.tS=500;c.rp=Iw(0,0,0,255,new B0);c.l6=20;c.wk=20;c.y2=Iv();d=b.p.bO;e=new VY;e.lo=c;f=new Ta;f.yV=e;e.rf=f;Bc(d,e);d=b.p.ff;e=new Zf;e.zt=c;Bc(d,e);c.er=b.O;c.wK=QS(b.bU);X2(c.hO,Ij(c.er,C(155),c.wk),c.l6,c.er.lB);c.iL=I1();return c;}
var T0=G();
function AZt(a,b){var c,d;c=new QG;HH(c,b);b=b.p.bF;d=new Qh;d.se=c;Bc(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var TZ=G();
function AKv(a,b){var c,d,e,f,g,h,i;c=new Wt;G5(c,b);d=b.p.c2;e=new Q0;e.w5=c;Bc(d,e);d=b.bU;f=new Pq;f.Cu=c;g=Q(B,1);g.data[0]=C(158);CR(d,f,C(159),g);h=new Pp;h.DH=c;g=Q(B,1);g.data[0]=AIk([1,2,3,4,5]);CR(d,h,C(160),g);h=new Pn;h.A9=c;i=Q(B,1);i.data[0]=A2i([1,2,3,4,5]);CR(d,h,C(161),i);h=new Pl;h.DQ=c;g=Q(B,1);g.data[0]=DT([1,2,3,4,5]);CR(d,h,C(162),g);d=b.p.bF;e=new HL;h=new QZ;h.yZ=c;Il(e,b,h);Bc(d,e);return c;}
var Z5=G();
function AKF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new VP;HH(c,b);c.eT=H5(0,0,300,300);c.gl=Sp(0,0,3,3);d=b.O;b=b.p.bO;e=new AAS;e.mC=c;Bc(b,e);b=AKa(d);c.zR=b;FJ(c.eT,b);FS(c.eT);b=c.eT.bk;FC();BO(b,A5J);BO(c.eT.W,Dt(204,120,50));APv();e=A5K;f=DH((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CT(d);switch(e.fE){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new EZ;X(b);N(b);}b:
{V1(m,5,5,h);b=m.ey.dU;switch(e.fE){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new EZ;X(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.m$=m;V(c.gl.t,BZ(m),Dj(c.m$));BO(c.gl.bk,c.pq);return c;}
var Z4=G();
function AW6(a,b){var c,d,e;c=new R8;HH(c,b);c.gH=H5(0,0,300,300);c.l3=new Bg;c.kb=new Bg;c.jz=new Bg;d=b.O;b=b.p.bO;e=new WU;e.j6=c;Bc(b,e);b=AKa(d);c.qq=b;FJ(c.gH,b);FS(c.gH);b=c.gH.bk;FC();BO(b,A5J);BO(c.gH.W,Dt(204,120,50));return c;}
var Z3=G();
function APR(a,b){var c,d,e,f;c=new ZG;Eg(c,b);c.CG=20;c.Eq=11;c.Dc=220;c.lJ=new Bg;c.DX=5000;c.ia=1;c.gA=I(Hf,[CA(0),CA(255)]);c.eA=b.O;d=b.p.bO;e=new XS;e.ly=c;f=new T8;f.sD=e;e.p_=f;Bc(d,e);b=b.p.ff;d=new Vh;d.qZ=c;Bc(b,d);b=HB(c.eA,200,220);c.n9=b;Ho(b,C(155),20.0);b=HB(c.eA,200,20);c.gp=b;Ho(b,C(155),20.0);c.ir=I1();return c;}
var ZT=G();
function ANa(a,b){var c,d,e;c=new Ka;HH(c,b);Bc(b.p.bO,c);d=b.p.bF;e=new ACs;e.vF=c;Bc(d,e);Bc(b.p.gw,new ACr);d=b.p.gw;e=new ACq;e.rP=c;Bc(d,e);Bc(b.p.gZ,new ACp);d=b.p.gZ;e=new ACt;e.yI=c;Bc(d,e);b=!UT(b.bU)?C(163):C(164);d=new K;M(d);H(H(d,C(165)),b);$rt_globals.console.info($rt_ustr(L(d)));return c;}
var ZS=G();
function ATt(a,b){var c,d;c=new RV;HH(c,b);c.tn=CA(20);c.f8=H5(0,0,300,300);c.uR=DK(C(14),80.0);b=b.p.bF;d=new RF;d.CN=c;Bc(b,d);return c;}
var ZQ=G();
function A0s(a,b){var c;c=new SB;Ol(c,b);Ha(c.ch,0,0,300,300);V(c.df,300,300);return c;}
var ZP=G();
function AO$(a,b){var c;c=new SA;Ol(c,b);c.fP=new Bg;c.f9=new Bg;V(c.d3,150,140);V(c.df,500,100);V(c.fb,150,200);V(c.ez,500,250);return c;}
var ZO=G();
function AZw(a,b){var c,d,e;c=new Xd;G5(c,b);c.Ds=3;c.xv=DK(C(166),20.0);Bc(c.q.ei,c);BO(c.dL,CA(43));d=b.p.bF;e=new YE;e.Cv=c;Bc(d,e);b=b.p.c2;d=new YD;d.wf=c;Bc(b,d);return c;}
var ZN=G();
function AKo(a,b){return A3e(b);}
var ZM=G();
function AZi(a,b){var c,d,e,f;c=new P5;H1(c,b);BO(c.dL,CA(43));c.lK=PL(c.bb);d=b.p.bF;e=new HL;f=new O8;f.Ai=c;Il(e,b,f);Bc(d,e);b=b.p.c2;d=new O9;d.ye=c;Bc(b,d);return c;}
var ZX=G();
function AYA(a,b){var c,d;c=new Rd;H1(c,b);c.oZ=null;c.mg=JI();c.ja=JI();b=b.p.c2;d=new WN;d.w$=c;Bc(b,d);return c;}
var ZW=G();
function AL7(a,b){var c;c=new X9;H1(c,b);c.uV=L1();BO(c.dL,CA(43));return c;}
var ZV=G();
function AWh(a,b){return A2T(b);}
var ZU=G();
function ANY(a,b){var c,d,e;c=new Ph;H1(c,b);c.uf=L1();BO(c.dL,CA(43));d=b.p.c2;e=new TP;e.Bq=c;Bc(d,e);b=b.p.bF;d=new TO;d.s2=c;Bc(b,d);return c;}
var ZZ=G();
function ANZ(a,b){var c,d;c=new S9;H1(c,b);c.mi=L1();BO(c.dL,CA(43));b=b.p.c2;d=new Z6;d.qj=c;Bc(b,d);return c;}
var ZY=G();
function AT$(a,b){var c;c=new Ou;AGT(c,b);AJv(c.dO);return c;}
function ACo(){var a=this;B.call(a);a.tD=null;a.zK=null;a.y1=null;}
function H_(){var a=this;B.call(a);a.bJ=0;a.cJ=0;a.dt=0;a.ke=0;}
function A5L(a,b,c,d){var e=new H_();AAV(e,a,b,c,d);return e;}
function AAV(a,b,c,d,e){a.bJ=d;a.cJ=b;a.dt=c;a.ke=e;}
function PY(){var a=this;H_.call(a);a.d9=null;a.bl=0;a.jv=0;a.yF=0;a.of=0;}
var AF_=G();
function Ue(b,c){return (b+(c/2|0)|0)/c|0;}
function X6(b,c,d){if(b<(2147483647/c|0))return Ue(Bb(b,c),d);return 0.5+c*b/d|0;}
function H4(b,c){return ((b+c|0)-1|0)/c|0;}
function Gv(b){return b+0.5|0;}
function CV(b){return b+0.5|0;}
function E0(b,c,d){return Bd(b,Be(c,d));}
function MP(b,c){return AHo(b)/AHo(c);}
function On(){var a=this;H_.call(a);a.h=null;a.Db=null;}
var SN=G(0);
function O7(){var a=this;B.call(a);a.uS=null;a.uT=null;}
function AW7(a,b){var c,d;c=a.uS;d=a.uT;$rt_globals.console.info("paste plain string "+b);c.j(HX(b));Dz(d);}
function AA_(){B.call(this);this.u_=null;}
function AB2(a,b){a.u_.clipboardData.setData("text/plain",$rt_ustr(b));}
function ACv(){var a=this;MQ.call(a);a.B7=0;a.v2=0;}
function CD(){var a=this;B.call(a);a.i=null;a.k=null;a.bN=0.0;}
function ATf(){var a=new CD();EX(a);return a;}
function EX(a){a.i=new Bg;a.k=new Bg;}
function AQ8(a){}
function AX3(a){return BJ(0,0);}
function HI(a,b,c,d){var e;if(!JM(a.i,b)){a.ms(b);Cs(a.i,b);}if(!JM(a.k,c)){a.oo(c);Cs(a.k,c);}e=a.bN;if(e!==d){a.bN=d;a.lc(e,d);}}
function Du(a,b){return Cf(b,a.bN);}
function B2(a,b){return Hr(b,a.i,a.k);}
function AJZ(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;AN1();Bs(b,d,e,f,A5M);}
function ABy(a,b){var c;c=a.i;LD(b,c.a,c.b,a.k);}
function AUO(a,b){return 0;}
function AO4(a,b){}
function ASC(a,b){}
function AY7(a,b,c){}
function ASK(a){}
function ANT(a,b,c,d){return 0;}
function ALK(a,b,c){return null;}
function APH(a,b,c){return 0;}
function ASr(a,b){return 0;}
function AY0(a,b,c,d){return 0;}
function AEu(){var a=this;CD.call(a);a.g4=null;a.kY=null;a.kZ=null;a.kW=null;a.kX=null;a.eQ=null;a.hr=null;a.hs=null;a.jU=null;}
function AUJ(a){var b=new AEu();AL_(b,a);return b;}
function AL_(a,b){EX(a);a.kY=new Bg;a.kZ=new Bg;a.kW=new Bg;a.kX=new Bg;a.g4=b;}
function AB6(a,b,c){a.hr=b;a.hs=c;}
function AFI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=a.i;Bs(b,c.a,c.b,a.k,a.jU.br.d$);if(a.eQ===null)return;d=CE(a.g4,2.0);e=GC(a.eQ,a.hr.kV(),1);f=GC(a.eQ,a.hr.j7(),1);g=GC(a.eQ,a.hs.kV(),0);h=GC(a.eQ,a.hs.j7(),0);i=Be(e,g);j=Bd(f,h);h=BK(i,j);if(h<=0)B9(b,1);k=a.hr.uc();l=a.hs.o5();m=a.g4.pv;while(i<=j){n=a.eQ.id.data[i];if(n.on){o=a.hr.hp(n.hR);p=a.hr.hp(n.hR+n.nJ|0);q=a.hs.hp(n.hQ);r=a.hs.hp(n.hQ+n.nI|0);V(a.kY,a.i.a,o);V(a.kW,a.i.a,p);V(a.kZ,a.i.a+a.k.a|0,q);V(a.kX,a.i.a+a.k.a|0,r);s=Bd(Be(o,q),
a.i.b);t=Be(Bd(p,r),a.i.b+a.k.b|0);if(t>s){V(m,a.k.a,t-s|0);c=a.jU;u=JP(c.dX,c,n.on);if(o==p){n=a.g4.dw;V(n,a.i.a-k.a|0,d);if(q>=o){c=a.kW;V(c,c.a,c.b+d|0);g=o;}else{g=o-d|0;c=a.kY;V(c,c.a,c.b-d|0);}Bs(b,k.a,g,n,u);}if(q==r){n=a.g4.dw;V(n,l.a,d);if(o>=q){c=a.kX;V(c,c.a,c.b+d|0);}else{q=q-d|0;c=a.kZ;V(c,c.a,c.b-d|0);}Bs(b,a.i.a+a.k.a|0,q,n,u);}ADo(b,a.i.a,s,m,a.kY,a.kZ,a.kW,a.kX,u);}}i=i+1|0;}if(h<=0)B9(b,0);}
function AEZ(){var a=this;B.call(a);a.b6=null;a.dp=null;a.ij=null;}
function PL(a){var b=new AEZ();ALd(b,a);return b;}
function ALd(a,b){a.b6=b;}
function Ik(a,b){var c;a.ij=b;c=a.dp;if(c!==null)GP(c,b.dC);c=a.b6.d2;if(c!==null)Ga(c,b.dC,b.ky);}
function YH(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=AOc();i=c.m;j=0;while(j<i){if(f===null){k=(Bw(c,j)).bq;l=Zb(FE(Cc(g.f,k)));m=ZJ(g.fZ);}else{n=f.data;k=n[j].o2.mR;l=!BS(g.fZ,n[j].lC)?C(21):Zb(FE(Cc(g.f,k)));m=ZJ(n[j].lC);}if(J(l)>153){o=Cr(l,0,150);n=new K;M(n);H(H(n,o),C(167));l=L(n);}if(J(m)>153){n=Cr(m,0,150);o=new K;M(o);H(H(o,n),C(167));m=L(o);}n=Dh(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=Bw(c,j);}if(f!==null){q=new ACF;q.rT=d;q.rU=p;}else{q=new ACG;q.Ar=d;q.Aq=
o;}Vw(h,m,n,l,q);j=j+1|0;}r=ACi(h);if(a.dp!==null)Z_(a);c=a.b6.dG;g=new QM;f=new ZE;f.p8=a;f.p9=d;AJT(g,c,f);Wo(g,r);d=a.ij;Vr(g,d.dC,d.AE);d=ADA(c);a.dp=d;d.pj=d.pj|1;d=Gw(g,c);f=a.ij.dC;I8(d,f.my,f.og);KY(a.dp,d);GP(a.dp,a.ij.dC);d=a.dp;f=new K;M(f);H(H(f,C(168)),e);FM(d,L(f));Gz(a.b6,a.dp);d=a.dp;i=(d.Q.k.b+CE(d.bo,2.0)|0)+CE(c,2.0)|0;s=(g.dW+g.eD|0)+g.hm|0;t=CE(g.bS,5.0);e=BJ(E0(t,b.a,g.bS.b0.a-s|0),E0(i,b.b,g.bS.b0.b-g.cF.b|0));XM(g);KL(g);i=Ee(g);s=g.b2.data.length;i=Bb(i,s)+Bb(g.dK,s+1|0)|0;V(g.cF,g.k.a,
i);i=(g.dW+g.eD|0)+g.hm|0;b=g.bS;s=(b.b0.a-e.a|0)-CE(b,5.0)|0;b=g.bS;t=(b.b0.b-e.b|0)-CE(b,5.0)|0;d=BJ(Be(i,s),Be(g.cF.b,t));EU(a.dp,e,d);FF(c,g);}
function Z_(a){Km(a.b6,a.dp);Ny(a.dp);a.dp=null;}
function K4(a,b,c){var d,e;d=a.b6;e=a.ij;d=Yq(d,e.dC,e.ky);Lc(d,b,c);Fl(a.b6,d);}
function GE(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;h=new Sk;h.f_=a;h.bu=c;h.qT=g;h.iX=e;h.nT=f;h.lV=d;c=Lo();e=h.bu.d;d=D7(e);e=Hu(e);f=h.bu.fl;if(Yu(f,d,e)!==null){i=new Rx;i.v9=h;i.v$=b;DY(c,C(169),i);}if(N$(f,d,e)!==null){i=new Ry;i.xU=h;i.xV=b;DY(c,C(170),i);}if(AAP(f,d,e)!==null){e=new Rw;e.pV=h;e.pX=b;DY(c,C(171),e);}e=new Rv;e.up=h;e.uo=b;DY(c,C(172),e);HN(h);if(LK()){if(!h.bu.eM){e=new Q2;e.An=h;DY(c,C(173),e);}e=new Q3;e.ri=h;DY(c,C(174),e);if(!h.bu.eM&&UT(HN(h))){e=new Q1;e.yQ=h;DY(c,C(175),e);}}e=Lo();j
=Q(BL,5).data;j[0]=C(176);j[1]=C(177);j[2]=C(178);j[3]=C(179);j[4]=C(180);k=j.length;l=0;while(l<k){f=j[l];g=new PZ;g.v7=h;g.v8=f;DY(e,f,g);l=l+1|0;}Fz(c,C(181),GQ(e));m=Lo();j=Q(B3,3);n=j.data;f=h.lV;BD(f);g=new OV;g.q7=f;n[0]=C3(C(182),g);f=h.lV;BD(f);g=new OW;g.rI=f;n[1]=C3(C(183),g);f=h.lV;BD(f);g=new OU;g.vk=f;n[2]=C3(C(184),g);IU(m,C(185),Dw(j),A5N);j=Q(B3,2);n=j.data;g=h.iX;BD(g);i=new Us;i.xO=g;n[0]=C3(C(186),i);g=h.iX;BD(g);i=new Ur;i.t$=g;n[1]=C3(C(187),i);Fz(m,C(188),Dw(j));g=new Xr;g.qE=h;IU(m,C(189),
g,A5N);if(h.bu.cG.b4.lB){j=Q(B3,2);n=j.data;g=new Zt;g.wE=h;n[0]=C3(C(190),g);g=new Zu;g.xm=h;n[1]=C3(C(191),g);Fz(m,C(192),Dw(j));}Fz(c,C(193),GQ(m));e=Lo();Fz(e,C(194),AIf(h));g=new X5;g.vm=h;DY(e,C(195),g);i=new Ot;i.wN=h;IU(e,C(196),i,A5N);Fz(c,C(197),GQ(e));K4(a,b,GQ(c));}
function AEb(b){var c;c=new Rk;c.yK=b;return c;}
var FO=G(0);
function AX4(a){}
function ANg(a){}
var Qy=G(0);
var Ma=G(0);
function AEA(){var a=this;CD.call(a);a.cG=null;a.bi=null;a.kr=null;a.AW=0;a.nR=null;a.c_=null;a.ne=0;a.hl=0.0;a.lP=null;a.B6=null;a.fN=null;a.U=0;a.c7=0;a.d=null;a.fl=null;a.eg=null;a.eI=null;a.zX=0;a.yB=0;a.cY=0;a.cf=0;a.cj=0;a.h4=null;a.fI=null;a.fo=null;a.jc=0;a.jN=0;a.Es=0;a.Bn=0;a.kD=0;a.lw=0;a.po=0;a.d8=0;a.da=null;a.fh=null;a.eM=0;a.ce=0;a.Bd=null;a.jL=null;a.yb=null;a.tA=null;a.mB=null;a.bw=0;a.cI=null;a.rW=0;a.qV=null;a.t8=null;}
function KW(a,b){var c=new AEA();AQZ(c,a,b);return c;}
function AQZ(a,b,c){var d,e,f;EX(a);a.AW=0;a.nR=Q(Z,10);a.c_=AWb();a.hl=16.0;a.lP=C(155);a.d=A29(Q(BL,0),null,null);d=new ACO;d.xr=CS(Q(M_,0));d.AU=CS(Q(M_,0));d.p3=CS(Q(Z1,0));d.uG=CS(Q(X_,0));d.uh=CS(Q(G$,0));d.zN=CS(Q(RY,0));a.fl=d;a.eI=Q(Fk,0);a.h4=BJ(1,0);a.fI=I1();a.fo=I1();a.jc=0;a.jN=1;a.kD=1;a.lw=1;a.po=1;a.d8=3;a.da=AGC();a.fh=C(198);a.eM=0;a.ce=0;e=EG();BD(e);d=new WF;d.Co=e;a.jL=d;a.bw=0;e=new WE;e.pP=a;a.qV=e;e=new WD;e.so=a;a.t8=e;a.cG=b;a.bi=b.b4;a.kr=c;c=AOO(b.cv);a.cI=c;a.fN=c.gP;f=a.nR.data;b
=new WC;b.z1=a;f[1]=b;b=new WJ;b.wF=a;f[2]=b;b=new WI;b.s9=a;f[3]=b;b=new WH;b.vs=a;f[4]=b;b=new WG;b.qH=a;f[5]=b;b=new WB;b.yq=a;f[6]=b;KQ(a.d,a,FH(a));}
function So(a,b,c){var d,e,f,g,h;d=!c?a:null;if(c)e=null;else{e=new SD;e.qw=a;}f=new SC;f.tV=a;g=new SF;g.xx=a;if(d!==null)Bc(b.bO,d);if(e!==null)Bc(b.ff,e);Bc(b.gw,f);Bc(b.gZ,g);h=new SE;h.C9=d;h.C7=b;h.C8=e;h.C$=f;h.C_=g;return h;}
function Mc(a,b,c,d){HI(a,b,c,d);ZK(a,b,c,d);}
function AQi(a,b,c){Uz(a,a.lP,a.hl);Pw(a.cI,c);}
function A1a(a,b,c){a.yb=b;a.tA=c;}
function ZK(a,b,c,d){var e;a.cY=Cf(80.0,d);a.cf=Cf(1.0,d);a.cj=Cf(10.0,d);e=!a.ce?b.a:(b.a+c.a|0)-Ii(a)|0;V(a.cG.dw,e,b.b);RL(a.da,a.cG.dw,Be(Ii(a),c.a),c.b,d);b=a.c_;e=Cf(2.0,d);b.eF.t.a=e;}
function AVP(a){a.ne=1;NK(a);}
function AT0(a){a.ne=0;}
function NK(a){XX(a.c_,ME(FH(a)));}
function Hx(a,b){var c,d;a.eg=b;c=a.c_;d=b.br.AT;BO(c.eF.W,d);c=a.fI;d=b.br;H0(c,d.lj,d.ln);c=a.fo;b=b.br;H0(c,b.lj,b.ln);}
function Ws(a){Oc(a,a.cI.cS.nM,a.hl+1.0);}
function ADb(a){var b;b=a.hl;if(b<=7.0)return;Oc(a,a.cI.cS.nM,b-1.0);}
function Px(a,b){Oc(a,b,a.hl);}
function AQX(a,b){Oq(a.cG,b);}
function Oc(a,b,c){if(a.cG.cb!==0.0){Uz(a,b,c);Jl(FH(a));}a.hl=c;a.lP=b;}
function LH(a){var b,c,d;b=a.cI;c=a.cG.cv;d=a.bi;b.iA=c;if(b.hq.i3!=c&&b.dZ)ADa(b,d);Sg(a.eI);It(a.da);NO(a);}
function Uz(a,b,c){var d,e,f,g,h,i,j,k;d=a.bN;e=c*d;Cf(c,d);f=a.cI.cS;d=f===null?0.0:f.oq;if(!(e===d&&BS(b,a.lP))){It(a.da);N9(a.eI);g=a.d.f.A.data;h=g.length;i=0;while(i<h){EV(g[i]);i=i+1|0;}j=a.cI;f=a.bi;j.cS=AH7(b,e,300,600,j.gP,f);f=a.cI;a.B6=f.cS;a.U=RP(f,1.25,a.bi);a.c7=CV(a.cI.cS.pw);a.c_.eF.t.b=E1(a.cI.cS);h=E1(a.cI.cS);i=a.U;k=UH(a.c_);f=new K;M(f);b=H(H(f,C(199)),b);BM(b,32);U(H(U(H(U(H(EA(b,e),C(200)),h),C(201)),i),C(202)),k);$rt_globals.console.info($rt_ustr(L(f)));if(A5O){h=MW(a.cI.cS,a.U);b=new K;M(b);U(H(b,
C(203)),h);$rt_globals.console.info($rt_ustr(L(b)));}a.d.ie=GM(FU(a),a.d.z,a.bi.cd,a.fN);H3(a);NO(a);}}
function AUl(a){N9(a.eI);XD(a.cI);It(a.da);}
function Om(a){return Bb(CI(a.d.f)+5|0,a.U);}
function KK(a){return Bd(Om(a)-a.k.b|0,0);}
function AAa(a){return Bd(a.jc-Gc(a)|0,0);}
function Gc(a){var b;b=!a.ce?0:a.c7+a.cj|0;return Bd(1,(a.k.a-a.cY|0)-b|0);}
function Ii(a){return a.ce?a.cY:a.cY-a.cj|0;}
function Ef(a){return a.k.b;}
function IR(a,b){var c,d,e;c=a.d.f;if(AAz(c)&&b-c.yS>0.03125?1:0){d=a.rW;e=a.d.f.cl;if(d!=e){a.rW=e;YY(a);}}if(a.U)Z8(a);d=AAJ((a.bw+a.Es|0)-a.Bn|0,KK(a));e=a.bw==d?0:1;if(e)FW(a,d);return !AAb(a.c_,b)&&!e&&!a.AW?0:1;}
function IB(a,b){var c,d;b=AAJ(b,AAa(a));c=a.d;d=b==c.dM?0:1;if(d)c.dM=b;if(d){c=a.yb;if(c!==null)c.g();}}
function FW(a,b){var c;if(AIj(a,b)){c=a.tA;if(c!==null)c.g();}}
function AIj(a,b){var c,d;c=AAJ(b,KK(a));d=c==a.bw?0:1;if(d){a.bw=c;a.d.mb=c/a.U;}return d;}
function AGh(a){return BJ((Ii(a)+a.cf|0)+a.cj|0,a.U);}
function ARK(a){return a.U;}
function AXv(a,b){Ig(a);}
function Ig(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=H4(a.k.b,a.U)+7|0;c=a.eI;if(c.data.length<b)a.eI=Yx(b,c,a.cI,a.zX,a.yB,a.d.f);B9(a.bi,0);Ni(a.bi,a.i,a.k);d=(a.U-UH(a.c_)|0)/2|0;b=a.d.ie-(Sh(a.c_)/2|0)|0;e=a.d;f=b-e.dM|0;g=!a.ce?a.cY:(a.cf+a.cj|0)+a.c7|0;Tu(a.c_,g+f|0,(d+Bb(e.w,a.U)|0)-a.bw|0);h=CI(a.d.f);i=S7(a);j=S6(a);a.zX=i;a.yB=j;k=!a.ce?a.i.a+a.cY|0:((a.i.a+a.cf|0)+a.cj|0)+a.c7|0;l=Gc(a);c=a.d.le;m=Du(a,40.0);n=i;while(n<=j&&n<h){o=Cc(a.d.f,n);p=ABA(a,n);WP(p,o,a.bi,a.U,l,a.d.dM,n,
n%a.eI.data.length|0);a.jc=Bd(a.jc,Fy(o)+m|0);b=a.U;q=Bb(b,n)-a.bw|0;r=c===null?null:c.data[n];d=a.i.b+q|0;e=a.bi;g=a.d.dM;s=a.eg;t=AI$(Bj(a),n);if(t!==null){if(t.b==(-1))t.b=o.R;t.a=GM(o,t.a,a.bi.cd,a.fN);t.b=GM(o,t.b,a.bi.cd,a.fN);}o=a.d;PS(p,d,k,e,l,b,g,s,t,o.iG,o.is,o.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cG.dw;n=i;while(n<=j&&n<h&&a.kD){p=ABA(a,n);q=Bb(a.U,n)-a.bw|0;r=Bj(a);if(!Ds(r))u=0;else{o=El(r);r=FZ(r);u=o.J<=n&&n<r.J?1:0;}s=a.eg;r=s.br;v=r.r8;w=a.d.w==n&&c===null?1:0;a:{if(u)v=r.kB;else{if(c!==null)
{x=c.data;if(n<x.length&&x[n]!==null){v=JP(s.dX,s,x[n].gT);break a;}}if(w)v=r.gb;}}AHL(p,a.bi,k,a.i.b+q|0,a.U,e,a.d.dM,l,v);n=n+1|0;}if(a.jN){y=Be(j+1|0,h);AJn(a,Bb(a.U,y)-a.bw|0,l);}AFD(a);AFc(a,i,j);if(a.lw)AGQ(a,i,j,h);if(a.ne&&f>=(( -Sh(a.c_)|0)/2|0)){e=a.c_;p=a.k;if(AD0(e.eF.u,0,0,p))ABc(a.c_,a.bi,a.i);}AFq(a);AE2(a);F5(a.bi);}
function AGQ(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.le;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.eg;h=JP(h.dX,h,g.gT);}else h=e!==null?a.eg.br.d$:a.eg.br.gb;if(!(a.d.w!=b&&g===null)){g=a.h4;i=a.ce;g.a=!i?(a.cj-a.cf|0)-a.d8|0:((a.cj+a.c7|0)+a.cf|0)-a.d8|0;j=a.U;g.b=j;i=i?0:(a.cY-a.cj|0)+a.cf|0;j=Bb(j,b)-a.bw|0;k=a.bi;l=a.i;Bs(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AFc(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Be(d,Bb(CI(a.d.f),a.U)-a.bw|0);f=a.da;g=a.bw;h=a.d;i=h.le===null?h.w:(-1);j=a.bi;k=a.eg;Ni(j,f.gj,f.fg);Se(f,j,b,d);AAK(f,b,j);Z7(f,g,e,k,j);l=k.kQ;if(e<d){h=f.gj;Bs(j,h.a,h.b+e|0,BJ(f.fg.a,d-e|0),l.kJ);}if(b<=i&&i<=c){k=k.kQ;c=i/20|0;h=f.c1;l=Bw(h,c%h.m|0);h=f.gj;d=Bb(f.c1.m,f.g6);c=l.fe.b;b=((l.pG.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%Dj(l.cL)|0)|0;c=i%l.d7|0;e=l.cp;b=b+Bb(c,e)|0;if(b<( -e|0))b=b+d|0;V(l.iY,l.fe.a,e);f=l.jD;c=i%l.d7|0;d=l.cp;Cw(f,0.0,
Bb(c,d),l.fe.a,d);M3(l,j,b,h,k.wL,k.pS);}F5(j);}
function S7(a){return Be(a.bw/a.U|0,CI(a.d.f)-1|0);}
function S6(a){return Be(((a.bw+Ef(a)|0)-1|0)/a.U|0,CI(a.d.f)-1|0);}
function AQE(a,b){return Bb(a.U,b)-a.bw|0;}
function AQu(a){return a.i;}
function ATa(a){return a.k;}
function NO(a){X2(a.da,a.cI.cS,a.U,a.cG.cv);}
function ABA(a,b){var c;c=a.eI.data;return c[b%c.length|0];}
function Um(a,b){var c,d,e,f;c=E0(0,J(a.fh),O0(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BR;X(b);N(b);}if(c!=1){d=b.b$.data.length;if(d&&c){e=B4(Bb(d,c));d=0;f=0;while(f<c){Qq(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Mg(e);}else b=A4I;}}return b;}
function PA(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BN(i);k=A4b(i).data;Jn(j,c);c=0;l=k.length;if(c>l){f=new BR;X(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.cl=o.cl+1|0;p=Q(G2,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ARS(h[m],n[m],k[m],b[m],f.bq,f.bv);m=m+1|0;}BC(o.iw,p);c=0;while(c<i){b=e.data;M1(o,h[c],n[c],k[c],b[c]);g.pJ(CU(h[c]),b[c]);c=c+1|0;}}
function AKb(a){var b;if(Ds(Bj(a)))GJ(a);else{b=a.d;OE(b.f,b.w,b.z);}H3(a);Es(a);return 1;}
function DF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eM)return 0;if(Ds(Bj(a)))GJ(a);c=L2(ABk(b,C(204),C(21)),C(205),(-1));d=c.data;b=a.d;e=b.f;f=b.w;g=b.z;ADg(e,f,g,c);h=d.length;if(!h)b=A4I;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B4(i+Bb(h-1|0,J(C(205)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(205))){m=l+1|0;c[l]=P(C(205),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Mg(k);}FY(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CL(a,m,m!=f?J(d[h-1|0]):b.z+J(d[0])|0,0);F2(a);Es(a);return 1;}
function GJ(a){var b,c,d;b=El(Bj(a));c=a.d.f;d=Bj(a);OK(c,d,T$(c,d));CL(a,b.J,b.Z,0);F2(a);Es(a);}
function F2(a){var b,c;(Bj(a)).dn=0;b=(Bj(a)).bK;c=a.d;Ce(b,c.w,c.z);b=(Bj(a)).bA;c=a.d;Ce(b,c.w,c.z);}
function AJn(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cG.dw;e.b=d-b|0;d=a.ce;e.a=!d?c+a.d8|0:c+a.cf|0;d=!d?(a.i.a+a.cY|0)-a.d8|0:(((a.i.a+a.cj|0)+a.c7|0)+a.cf|0)-a.d8|0;Bs(a.bi,d,a.i.b+b|0,e,a.eg.br.d$);}}
function AFq(a){var b;b=a.ce?a.i.a+a.c7|0:a.i.a+a.k.a|0;J_(a.fI,a.bw,a.i.b,Ef(a),Om(a),b,a.c7);b=!a.ce?a.i.a+a.cY|0:((a.i.a+a.cf|0)+a.cj|0)+a.c7|0;QT(a.fo,a.d.dM,b,Gc(a),a.jc,a.i.b+Ef(a)|0,a.c7);}
function AE2(a){var b,c;b=YJ(a.fI);c=YJ(a.fo);if(!(!b&&!c)){B9(a.bi,1);if(b)GL(a.fI,a.bi);if(c)GL(a.fo,a.bi);if(b)GS(a.fI,a.bi);if(c)GS(a.fo,a.bi);}}
function AFD(a){var b,c,d,e,f;b=a.h4;c=a.k;b.b=c.b;b.a=a.cf;d=!a.ce?a.cY-a.cj|0:(c.a-Ii(a)|0)-a.cf|0;b=a.bi;c=a.i;Bs(b,c.a+d|0,c.b,a.h4,a.eg.br.tJ);b=a.h4;d=a.ce;b.a=!d?(a.cj-a.cf|0)-a.d8|0:((a.cj+a.c7|0)+a.cf|0)-a.d8|0;e=d?0:(a.cY-a.cj|0)+a.cf|0;c=a.bi;f=a.i;Bs(c,f.a+e|0,f.b,b,a.eg.br.d$);}
function AAJ(b,c){return Be(Bd(0,b),c);}
function FH(a){return a.cG.hn;}
function Jg(a,b){var c,d,e;c=EM(b);d=new K;M(d);H(H(d,C(206)),c);$rt_globals.console.info($rt_ustr(L(d)));Wl(FH(a),EM(b));CL(a,0,0,0);c=new AB1;c.xY=a;c.xZ=b;d=EG();BD(d);e=new AB0;e.wD=d;Uj(b,c,e);}
function Jt(a,b,c,d,e){if(IH(a,e))return 1;if(c&&d)return 1;if(c)FW(a,a.bw+((Bb(b,a.U)*12|0)/10|0)|0);else if(!d){Ih(a,a.d.w+b|0,e);AAL(a);}return 1;}
function RD(a,b,c,d){var e,f,g;if(IH(a,d))return 1;e=FU(a);if(!c)f=a.d.z+b|0;else if(b>=0)f=GZ(e,a.d.z);else{b=a.d.z;if(!b)f=(-1);else{c=J6(e,b);if(c>0&&e.ek.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.ek.data[c-1|0];}}if(f>e.R){e=a.d;if((e.w+1|0)<CI(e.f))CL(a,a.d.w+1|0,0,d);}else if(f>=0)Dx(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(Cc(e.f,b-1|0)).R;CL(a,a.d.w-1|0,g,d);}}ABN(a);return 1;}
function IH(a,b){if(Ds(Bj(a))&&!b){F2(a);H3(a);return 1;}if(!(b&&Ds(Bj(a))))F2(a);return 0;}
function CL(a,b,c,d){a.d.z=c;return Ih(a,b,d);}
function Ih(a,b,c){var d;d=a.d;d.w=E0(0,b,CI(d.f)-1|0);return Dx(a,a.d.z,c);}
function Dx(a,b,c){var d,e;a.d.z=E0(0,b,(FU(a)).R);a.d.ie=a.bN===0.0?0:GM(FU(a),a.d.z,a.bi.cd,a.fN);NK(a);H3(a);if(c)(Bj(a)).dn=1;d=Bj(a);e=a.d;NL(d,e.w,e.z);(Bj(a)).dn=0;return 1;}
function Mi(a,b){var c;c=AU8(Bj(a));Dx(a,b,0);JB(Bj(a),c);}
function H3(a){AAL(a);ABN(a);}
function AAL(a){var b,c,d,e,f;b=a.bw;c=b+Ef(a)|0;d=a.d.w;e=a.U;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))FW(a,d-e|0);else if(f>(c-e|0))FW(a,(f-Ef(a)|0)+a.U|0);}
function ABN(a){var b,c,d,e,f;b=CV(a.cG.cb*30.0);c=a.d.dM;d=c+Gc(a)|0;e=a.d.ie;f=e+b|0;if(e<(c+b|0))IB(a,e-b|0);else if(f>(d-b|0))IB(a,(f-Gc(a)|0)+b|0);}
function IN(a,b){var c,d;CL(a,b.bq,b.bv,0);c=GZ(FU(a),a.d.z);Ce((Bj(a)).bA,a.d.w,c);b=(Bj(a)).bK;d=a.d;Ce(b,d.w,d.z);}
function Fq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=E0(0,((b.b-d.b|0)+a.bw|0)/a.U|0,CI(a.d.f)-1|0);g=!a.ce?a.cY:(a.cf+a.cj|0)+a.c7|0;h=Bd(0,(e-g|0)+a.d.dM|0);b=Cc(a.d.f,f);d=a.bi.cd;i=a.fN;if(!(b.eJ!==null&&!b.gO))Ne(b,d,i);j=b.eJ;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.R;else{c=AAx(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.R;else{j=Zi(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A5P){b=new K;M(b);U(H(U(H(U(H(b,C(207)),e),C(208)),h),C(209)),m);$rt_globals.console.info($rt_ustr(L(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DO(f,k);}
function UX(a,b){var c,d;c=a.d;d=b.bq;c.w=d;c.z=b.bv;c.ie=GM(Cc(c.f,d),a.d.z,a.bi.cd,a.fN);NK(a);}
function FU(a){var b;b=a.d;return Cc(b.f,b.w);}
function LB(a,b,c,d){var e,f;e=CV((a.U*4|0)*d/150.0);f=CV(c);if(e)FW(a,a.bw+e|0);if(f)IB(a,a.d.dM+f|0);return 1;}
function Sl(a,b,c){(Bj(a)).dn=0;return 1;}
function VI(a,b,c){var d;if(c)return null;d=FX(a.fI,b.h,a.qV,1);if(d!==null)return d;d=FX(a.fo,b.h,a.t8,0);if(d!==null)return d;I7(a);UX(a,Fq(a,b.h));Lk(a.d);if(!b.bJ&&!(Bj(a)).dn){b=(Bj(a)).bK;d=a.d;Ce(b,d.w,d.z);}(Bj(a)).dn=1;b=Bj(a);d=a.d;NL(b,d.w,d.z);b=new ACH;b.ue=a;return b;}
function OH(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cJ){b=b.h;e=Fq(a,b);f=I0(a.d.f,e.bq,e.bv);g=Sa(a,f);h=N$(a.fl,D7(a.d),Hu(a.d));if(h!==null){i=a.d;c=e.bq;d=e.bv;e=new ACl;e.BS=a;e.BT=b;e.BR=g;h.sU(i,c,d,e,a.jL);}else{e=Cn(a.d.f.dI,f);if(e!==null){IN(a,e);c=1;}else{e=Cn(a.d.f.dz,f);if(e!==null&&!Ex(e)){if(e.m!=1){YH(a.kr,b,e,a,g);c=1;}else{IN(a,Bw(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Fq(a,b.h)).bq;g=Cc(a.d.f,c);c=GA(g,a.d.z);d=GZ(g,a.d.z);b=N1(g,c);if((d-1|0)==g.R){Ce((Bj(a)).bK,
a.d.w,O0(g));Ce((Bj(a)).bA,a.d.w,g.R);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.b$.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.z;if(c==j){c=GA(g,c-1|0);d=GZ(g,c);}else{if(d!=j){Qg(Bj(a),a.d.w);break b;}c=GA(g,d+1|0);d=GZ(g,c);}}}Ce((Bj(a)).bK,a.d.w,c);(Bj(a)).dn=1;CL(a,a.d.w,d,0);(Bj(a)).dn=0;I7(a);}}break a;case 3:break;default:break a;}Qg(Bj(a),a.d.w);Y6(a.d.hM);I7(a);}}return 1;}
function WK(a,b){var c,d,e,f,g,h,i,j;c=a.cG.cP;if(F3(a.fI,b.h,c))return 1;if(F3(a.fo,b.h,c))return 1;d=a.da;if(Hr(b.h,d.gj,d.fg)&&Gx(c)?1:0)return 1;e=b.h;f=!a.ce?a.cY:(a.cj+a.cf|0)+a.c7|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=Gc(a);i=Ef(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return Gx(c);if(b.cJ){e=Fq(a,b.h);e.bv=GA(Cc(a.d.f,e.bq),e.bv);b=a.d.f;if(!MG(b.dI,e)&&!MG(b.dz,e)?0:1)return DU(c,C(210));}return DU(c,C(176));}
function A0S(a,b){var c,d,e,f,g;c=b.cJ;if(c&&b.bl==65){c=CI(a.d.f)-1|0;d=Gq(a.d.f,c);Ce((Bj(a)).bK,0,0);Ce((Bj(a)).bA,CI(a.d.f)-1|0,d);return 1;}if(c&&b.bl==80){L9(a.d);return 1;}if(!a.eM&&c&&b.bl==90){if(Ds(Bj(a)))F2(a);b=a.d.f;b.cl=b.cl+1|0;e=b.iw;d=e.m;if(!d)e=null;else{f=(EF(e,d-1|0)).data;e=V6(b,f[0]);c=1;while(c<f.length){V6(b,f[c]);c=c+1|0;}}if(e!==null){CL(a,e.a,e.b,0);Es(a);}return 1;}if(!c&&!b.dt){if(Bi(b.d9,C(211))){DF(a,C(212));Dx(a,a.d.z-1|0,0);c=1;}else if(Bi(b.d9,C(213))){DF(a,C(214));Dx(a,a.d.z
-1|0,0);c=1;}else if(Bi(b.d9,C(36))){DF(a,C(22));Dx(a,a.d.z-1|0,0);c=1;}else if(Bi(b.d9,C(215))){DF(a,C(216));Dx(a,a.d.z-1|0,0);c=1;}else if(Bi(b.d9,C(217))){DF(a,C(218));Dx(a,a.d.z-1|0,0);c=1;}else if(!Bi(b.d9,C(219)))c=0;else{DF(a,C(220));Dx(a,a.d.z-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dt&&!b.cJ)){d=b.bl;if(d>=48&&d<=57){c=d-48|0;e=a.nR.data[c];if(e!==null)e.g();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bl){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AIt(a,b))return 1;if(AFn(a,b))return 1;c=b.cJ;if(c&&b.bl==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bl;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dt&&!b.ke)return J(b.d9)>0&&DF(a,b.d9)?1:0;return 0;}return 0;}
function Z8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=S7(a);d=S6(a);if(b.fH!=3&&b.hN==3){e=Ti(b.oP);f=new XJ;f.zd=c;f.ze=d;g=new QN;g.rL=f;while(!g.mn&&AA4(e,g)){}if(!g.mn&&Bi(C(177),D7(b))){c=Bd(0,c-100|0);d=Be(CI(b.f)-1|0,d+100|0);BC(b.oP,BJ(c,d));h=BN(3);i=h.data;i[0]=Fx(b.f,c);e=b.f;j=0;d=Be(d+1|0,e.A.data.length);k=0;while(k<d){j=j+Gq(e,k)|0;if(k!=(e.A.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.zg=EY();e=b.eZ;l=new AAR;l.vJ=b;i=Q(B,3);m=i.data;m[0]=E6(b.f);m[1]=h;b=b.f.dc;g=BH();AAi(b,b.db,
g);h=BN(3*g.m|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bw(g,o);d=k+1|0;n[k]=b.bX;q=d+1|0;n[d]=b.bV;k=q+1|0;n[q]=b.fD;o=o+1|0;}m[2]=h;CR(e,l,C(221),i);}}}
function UV(a){L9(a.d);}
function YY(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.fC){c=EW(b);d=new K;M(d);H(H(d,c),C(222));$rt_globals.console.info($rt_ustr(L(d)));}c=D7(b);if(c!==null&&!Bi(C(176),c)){d=b.f.dc;e=Qd(d,d.db);if(e===null){N3(b);Kq(b.f);}else{f=DT([Dk(e),C_(e),e.bT.fD]);g=E6(b.f);h=BN(1);h.data[0]=AHc(c);d=b.f.eS;if(d.fp===null){i=BN(0);j=B4(0);}else{c=ASY(AU1(e.ci,d.e0),e);Wj(c);i=c.oa;j=c.mq;}k=b.f.cl;c=b.eZ;d=new RC;d.uL=b;l=Q(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BN(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CR(c,d,C(223),l);}}
else Kq(b.f);}
function G7(a,b,c){var d,e,f,g,h,i;if(c&&a.eM)return 0;d=El(Bj(a));e=d.J;if(Ds(Bj(a))){f=a.d.f;g=Bj(a);h=T$(f,g);if(c)OK(f,g,h);if(c){CL(a,d.J,d.Z,0);F2(a);Es(a);}}else{h=Fn(FE(a.d.f.A.data[e]),C(205));i=Be(CI(a.d.f)-1|0,e);Ce((Bj(a)).bA,i,0);if(e>=(CI(a.d.f)-1|0))Ce((Bj(a)).bA,i,Gq(a.d.f,i));else Ce((Bj(a)).bK,i+1|0,0);if(c)GJ(a);else CL(a,e,0,0);}b.j(h);return 1;}
function AFn(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.eM)return 0;a:{switch(b.bl){case 8:if(Ds(Bj(a))){GJ(a);c=1;}else{b=a.d;d=b.z;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;OE(b.f,e,c);}else{e=b.w-1|0;c=Gq(b.f,e);b=a.d.f;Lq(b,e);FY(b,e,Gq(b,e),1,C(205));}Es(a);c=CL(a,e,c,0);}}break a;case 9:if(!b.bJ){if(!Ds(Bj(a)))DF(a,a.fh);else{f=El(Bj(a));g=FZ(Bj(a));c=g.J;d=f.J;e=(c-d|0)+1|0;h=BN(e);i=h.data;j=Q(BL,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fh;d=d+1|0;e=l;}b=new ABV;m=a.d;AIN(b,m.w,m.z);m=new Sw;m.t5
=a;PA(a,h,0,0,j,b,m);f.Z=f.Z+J(a.fh)|0;g.Z=g.Z+J(a.fh)|0;Mi(a,a.d.z+J(a.fh)|0);Es(a);}c=1;}else b:{if(!Ds(Bj(a))){b=a.d;f=Cc(b.f,b.w);if(f.s.data.length>0){g=Um(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.w;b=DO(e,m.z);n.cl=n.cl+1|0;o=n.iw;h=Q(G2,1);h.data[0]=ARS(e,0,1,g,b.bq,b.bv);BC(o,h);M1(n,e,0,1,g);HE(f,0,J(g));Mi(a,a.d.z-J(g)|0);}}else{b=El(Bj(a));f=FZ(Bj(a));c=f.J;p=b.J;c=(c-p|0)+1|0;h=BN(c);k=h.data;j=Q(BL,c);q=j.data;g=a.d;e=g.z;l=g.w;c=0;while(p<=f.J){g=Cc(a.d.f,p);if(g.s.data.length>0){g=Um(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=I$(h,c);j=De(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.J)b.Z=Bd(0,b.Z-J(g)|0);if(p==f.J){f.Z=Bd(0,f.Z-J(g)|0);Mi(a,a.d.z-J(g)|0);}d=d+1|0;}b=DO(l,e);f=new Tq;f.sz=a;PA(a,h,0,1,j,b,f);}Es(a);c=1;}break a;case 13:if(Ds(Bj(a)))GJ(a);b=a.d;EV(Cc(b.f,b.w));b=a.d;AJH(b.f,b.w,b.z);Es(a);c=CL(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AKb(a);}return c;}
function AIt(a,b){var c,d,e,f;a:{switch(b.bl){case 33:c=b.cJ?Ih(a,H4(a.bw,a.U),b.bJ):Jt(a,2-Ue(Ef(a),a.U)|0,0,b.dt,b.bJ);break a;case 34:c=!b.cJ?Jt(a,Ue(Ef(a),a.U)-2|0,0,b.dt,b.bJ):Ih(a,((a.bw+Ef(a)|0)/a.U|0)-1|0,b.bJ);break a;case 35:if(!IH(a,b.bJ)&&!Dx(a,(FU(a)).R,b.bJ)){c=0;break a;}c=1;break a;case 36:if(!IH(a,b.bJ)&&!Dx(a,0,b.bJ)){c=0;break a;}c=1;break a;case 37:c=b.cJ;if(c&&b.dt){I7(a);d=a.d.hM;e=d.dE;if(e<=0)d=null;else{f=d.fc.data;c=e-1|0;d.dE=c;d=f[c];}if(d===null)c=1;else{CL(a,LQ(d),KD(d),0);JB(Bj(a),
d.n8);c=1;}break a;}c=RD(a,(-1),c,b.bJ);break a;case 38:c=Jt(a,(-1),b.cJ,b.dt,b.bJ);break a;case 39:c=b.cJ;if(c&&b.dt){d=a.d.hM;e=d.dE;if(e==(d.e_-1|0))d=null;else{f=d.fc.data;c=e+1|0;d.dE=c;d=f[c];}if(d===null)c=1;else{CL(a,LQ(d),KD(d),0);JB(Bj(a),d.n8);c=1;}break a;}c=RD(a,1,c,b.bJ);break a;case 40:c=Jt(a,1,b.cJ,b.dt,b.bJ);break a;default:}c=0;}if(c&&b.bJ){b=(Bj(a)).bA;d=a.d;Ce(b,d.w,d.z);}if(c)Lk(a.d);return c;}
function I7(a){var b,c,d,e,f,g,h;b=a.d;c=b.hM;d=c.dE;c=d<0?null:c.fc.data[d];if(c!==null&&b.w==LQ(c)&&a.d.z==KD(c))return;c=a.d;e=c.hM;b=new Nv;d=c.w;f=c.z;c=Bj(a);b.o0=DO(d,f);g=AU8(c);b.n8=g;g.dn=0;f=e.dE;h=e.e_;if(f==(h-1|0))ABB(e,b);else{d=f+1|0;while(d<h){Y6(e);d=d+1|0;}ABB(e,b);}e.dE=e.dE+1|0;}
function Es(a){a.d.f.yS=ME(FH(a));}
function HU(a,b){var c,d,e,f;a.Bd=null;Lx(a.da,null);ADe(a.d);c=a.d;a.d=b;KQ(c,null,null);KQ(b,a,FH(a));d=(Cz(a.fl.uh)).data;e=d.length;f=0;while(f<e){d[f].pJ(c,b);f=f+1|0;}a.bw=Gv(b.mb*a.U);}
function Sa(a,b){var c;c=LL(a.d.f,b);if(c===null)return C(21);return c.v;}
function MO(a,b){var c,d,e,f,g;a.d.le=b;if(b===null){Bl(Bx(),C(224));Lx(a.da,null);}else{b=b.data;c=DH(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gT<<24>>24;e=e+1|0;}Lx(a.da,c);}}
function RH(a,b){a.d.pR=b;}
function Bj(a){return a.d.q0;}
function Tt(a){var b;b=a.mB;if(b!==null)b.j(a);}
function AHd(){var a=this;B.call(a);a.lk=null;a.ny=null;a.h2=null;}
function ASf(a,b){var c=new AHd();AVe(c,a,b);return c;}
function AVe(a,b,c){var d,e;a.lk=b;a.ny=c;d=null;e=new T5;e.rN=a;b.oQ(d,e);b=null;d=new T6;d.q5=a;c.oQ(b,d);}
function XY(a,b,c){var d,e,f,g,h,i,j;d=a.h2;if(d!==null&&d.id!==null){e=b!==a.lk?0:1;f=b.kV();g=(b.j7()+f|0)/2|0;h=g-f|0;d=a.h2;d=d.id.data[GC(d,g,e)];i=g-(!e?d.hQ:d.hR)|0;j= -b.hp(f)|0;c.pF(Bb(((!e?d.hR:d.hQ)+i|0)-h|0,c.oY())+j|0);return;}}
function Td(){B.call(this);this.Aj=null;}
function AK_(a,b){Vt(a.Aj,b);}
function Te(){B.call(this);this.x2=null;}
function AZX(a,b){Vt(a.x2,b);}
function Tf(){B.call(this);this.v_=null;}
function AOK(a,b){return AGo(a.v_,b);}
function HL(){var a=this;B.call(a);a.ob=null;a.rR=null;a.rn=null;}
function A5Q(a,b){var c=new HL();Il(c,a,b);return c;}
function Il(a,b,c){var d;d=null;a.ob=b.bU;a.rR=d;a.rn=c;}
function ANj(a,b){var c,d;if(b.cJ&&b.bl==79){c=a.rR;if(c!==null&&b.bJ)I3(a.ob,c);else NX(a.ob,a.rn);d=1;}else d=0;return d;}
function Tb(){B.call(this);this.t6=null;}
function APu(a,b){var c,d;c=a.t6;d=DJ(c.q,c.E)?c.E:!DJ(c.q,c.G)?null:c.G;if(d!==null){Jg(d,b);c.kK=null;c.l4.h2=null;c.ft.eQ=null;}}
function Tc(){B.call(this);this.r$=null;}
function A0t(a,b){b=b;return AIu(a.r$,b);}
var CZ=G(0);
function ACI(){var a=this;B.call(a);a.dG=null;a.cO=null;a.d2=null;}
function Yq(a,b,c){var d,e;d=M8(a.dG);Ga(d,b,c);b=a.dG;c=b.d5;e=new AB7;e.vZ=b;e.vY=c;d.jH=e;return d;}
function Fl(a,b){var c;c=a.d2;if(c!==b)a.d2=BY(c,b);}
function Ei(a){var b;b=a.d2;if(b!==null){L$(b);Fl(a,null);}}
function Gz(a,b){Y4(a.cO,0,b);}
function Km(a,b){T2(a.cO,b);}
function JE(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.cO.m-1|0;while(b>=0){c=Bw(a.cO,b);d=a.dG.b4;c.V.dr(d);e=c.Q;f=c.ip.kM;if(!K8(e)){if(!NY(e)&&!(!e.ew&&e.dQ!==null)){e.ew=0;ABr(e);g=e.eo;h=(g.ef+g.ev+5.0)/10.0;i=CE(e.fW,e.kn);g=d.cd;j=e.eo;k=e.jp;l=h*2.0;Cl(g,j);m=i+Ld(g,k,l)|0;e.h$=m;m=E0(0,m,e.k.a);if(m){g=D1(d,m,e.k.b,e.fW.cv);Cl(g,e.eo);j=e.jp;l=i;h=l+h;k=e.eo;n=k.ef;BW(g,j,h,l+n-(n+k.ev)/16.0);j=e.dQ;if(j===null){j=CT(d);e.dQ=j;}CK(j,g);Eu(g);Cw(e.md,0.0,0.0,BZ(e.dQ),Dj(e.dQ));}}g=f.yJ;j=e.dQ;if(j===null)Qe(e,
d,0,e.k.a,g);else{i=BZ(j);j=f.uE;k=e.i;m=k.a;o=k.b;k=e.dQ;D3(d,m,o,k.fn,e.md,k,j,g,e.fW.cv);m=e.k.a;if(i<m)Qe(e,d,i,m-i|0,g);}}B9(d,1);i=CE(c.bo,2.0);m=K8(c.Q);g=c.bo;j=g.dw;g=g.pv;o=m?0:c.Q.k.b;k=c.V.k;V(g,k.a,k.b+o|0);AHY(d,g,!m?c.Q.i:c.V.i,c.ip.kM.oX, -i|0,j);g=c.V;AI9(d,g.k,g.i,i,o,XB(c.ip.lb,c.bo.cb),c.ip.lb.nt,j);b=b+(-1)|0;}c=a.d2;if(c!==null&&!Ex(c.cc)){B9(c.cT.b4,1);b=0;while(true){g=c.cc;if(b>=g.m)break;LZ(Bw(g,b),c.cT);b=b+1|0;}}}
function JY(a,b){var c,d;c=a.dG;if(c.cv==b)d=0;else{c.cv=b;Jl(c.hn);d=1;}if(d){c=a.d2;if(c!==null){c=B6(c.cc);while(B$(c)){NS(B_(c));}}b=0;while(true){c=a.cO;if(b>=c.m)break;c=Bw(c,b);c.Q.ew=1;c.V.qN();b=b+1|0;}}return d;}
function ATF(a,b){var c,d,e,f,g,h;c=a.d2;if(c!==null){d=0;e=c.cc.m-1|0;a:{while(e>=0){d=Nx(Bw(c.cc,e),b.h,c.cT.cP);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}e=0;while(true){c=a.cO;if(e>=c.m)break;b:{c=Bw(c,e);f=b.h;if(B2(c.Q,f))d=DU(c.bo.cP,null);else{d=CE(c.bo,7.0);g=CE(c.bo,25.0);if(ML(c,f.a,d)){h=Wz(c,f.a,g);if(MS(c,f.b,d)){d=DU(c.bo.cP,LR(h,C(225)));break b;}if(Kv(c,f.b,d)){d=DU(c.bo.cP,LR( -h|0,C(225)));break b;}}if(NZ(c,f.b,d)){g=ACz(c,f.b,g);if(Of(c,f.a,d)){d=DU(c.bo.cP,LR(g,C(226)));break b;}if(Ms(c,
f.a,d)){d=DU(c.bo.cP,LR( -g|0,C(226)));break b;}}d=0;}}c:{d:{if(!d){if(!B2(c.V,b.h))break d;if(!c.V.bQ(b)&&!DU(c.bo.cP,null))break d;}d=1;break c;}d=0;}if(d)return 1;e=e+1|0;}return 0;}
function ALT(a,b,c,d){var e,f,g,h,i;e=a.d2;if(e!==null){f=0;g=e.cc.m-1|0;a:{while(g>=0){f=NV(Bw(e.cc,g),b.h,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=0;while(true){e=a.cO;if(h>=e.m)break;b:{c:{i=Bw(e,h);if(!B2(i.Q,b.h)){d:{e:{f:{e=b.h;f=CE(i.bo,7.0);if(ML(i,e.a,f)){if(MS(i,e.b,f))break f;if(Kv(i,e.b,f))break f;}if(!NZ(i,e.b,f))break e;if(!Of(i,e.a,f)&&!Ms(i,e.a,f))break e;}f=1;break d;}f=0;}if(!f){if(!L0(i,b))break c;if(!i.V.ct(b,c,d))break c;}}f=1;break b;}f=0;}if(f)return 1;h=h+1|0;}return 0;}
function ANV(a,b,c){var d,e,f,g,h,i,j,k;d=a.d2;if(d!==null){e=null;f=d.cc.m-1|0;a:{while(f>=0){e=Bw(d.cc,f);g=b.h;h=E7(e.ck,g);if(!h&&!KZ(e.ck)){e=e.kv;if(e!==null)e.g();}e=!h?null:A5R;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=0;while(true){d=a.cO;if(i>=d.m)return null;b:{g=Bw(d,i);if(!c){c:{d=b.h;if(!K8(g.Q)&&B2(g.Q,d)){e=g.V.i;f=e.a;h=d.a;f=f-h|0;j=e.b;k=d.b;j=j-k|0;d=g.Q.i;h=d.a-h|0;k=d.b-k|0;e=new Bg;d=new Rq;d.qh=g;d.qf=h;d.qg=k;d.qd=e;d.qe=f;d.qc=j;}else{f=CE(g.bo,7.0);h=CE(g.bo,25.0);if
(ML(g,d.a,f)){j=Wz(g,d.a,h);if(MS(g,d.b,f)){d=JT(g,d,j,(-1));break c;}if(Kv(g,d.b,f)){d=JT(g,d,j,1);break c;}}if(NZ(g,d.b,f)){h=ACz(g,d.b,h);if(Of(g,d.a,f)){d=JT(g,d,(-1),h);break c;}if(Ms(g,d.a,f)){d=JT(g,d,1,h);break c;}}d=null;}}if(d!==null)break b;}d=B2(g.Q,b.h)?A5R:!L0(g,b)?null:g.V.cu(b,c);}if(d!==null)break;i=i+1|0;}return d;}
function A0N(a,b,c){var d,e,f;d=a.d2;if(d!==null&&Jk(d))return 1;e=0;while(true){d=a.cO;if(e>=d.m)break;a:{b:{d=Bw(d,e);if(!B2(d.Q,b.h)){if(!L0(d,b))break b;if(!d.V.du(b,c))break b;}f=1;break a;}f=0;}if(f)return 1;e=e+1|0;}return 0;}
function AWQ(a,b,c){var d,e,f;d=0;while(true){e=a.cO;if(d>=e.m)break;f=Bw(e,d);e=f.V;e.eW(e.i,e.k,c);e=f.Q;if(e.hj!==null){e.eo=null;e.h$=0;e.ew=1;}Im(f);d=d+1|0;}}
function ST(){var a=this;B.call(a);a.b4=null;a.hn=null;a.cP=null;a.b0=null;a.cb=0.0;a.cv=0;a.d5=null;a.ei=null;a.dw=null;a.pv=null;a.A$=null;a.A_=null;}
function Ky(a){var b;b=a.d5;if(b!==null)b.tE();}
function KO(a){var b;b=a.d5;if(b!==null)b.vq();}
function MH(a,b){var c;c=a.hn.ej!==(Ep()).activeElement?0:1;if(c)KO(a);a.d5=b;if(c)Ky(a);}
function FF(a,b){KO(a);a.d5=b;Ky(a);}
function AAv(a,b){if(a.d5===b)a.d5=null;}
function DJ(a,b){return b!==a.d5?0:1;}
function J7(a){return a.b4.cd;}
function F9(a,b){return Th(a.b4,b.hW,b.gG,a.cb);}
function CE(a,b){return Cf(b,a.cb);}
function Oq(a,b){var c;c=a.b4;if(!a.cv)c.pl=b;else c.nN=b;Jl(a.hn);}
function Vz(){B.call(this);this.u4=null;}
function A0I(a,b,c,d){var e,f,g,h;e=a.u4;f=0;a:{while(true){g=e.cO;if(f>=g.m)break;if((Bw(g,f)).V.ds(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function AEm(){var a=this;B.call(a);a.eF=null;a.op=0.0;a.im=0.0;a.g0=0;}
function AWb(){var a=new AEm();AQC(a);return a;}
function AQC(a){var b;b=Sp(0,0,2,20);a.eF=b;a.op=0.5;a.im=0.0;Iw(187,187,187,255,b.W);}
function UH(a){return a.eF.t.b;}
function Sh(a){return a.eF.t.a;}
function AAb(a,b){var c,d;a:{c=a.g0;if(b>a.im)while(true){d=a.im+a.op;a.im=d;a.g0=a.g0?0:1;if(b>d)continue;else break a;}}return a.g0==c?0:1;}
function Tu(a,b,c){V(a.eF.u,b,c);}
function XX(a,b){a.im=b+a.op*1.25;a.g0=1;}
function ABc(a,b,c){if(a.g0)Y0(a.eF,b,c.a,c.b);}
function ACZ(){var a=this;B.call(a);a.fZ=null;a.f=null;a.pk=null;a.q0=null;a.hM=null;a.k5=null;a.eZ=null;a.le=null;a.w=0;a.z=0;a.ie=0;a.iG=null;a.is=null;a.oP=null;a.fH=0;a.hN=0;a.h1=0;a.iN=FB;a.zg=FB;a.z3=FB;a.pR=0;a.DG=0;a.dM=0;a.mb=0.0;a.fC=0;}
function A23(a,b,c){var d=new ACZ();AJY(d,a,b,c);return d;}
function AMX(a,b){var c=new ACZ();AP8(c,a,b);return c;}
function A29(a,b,c){var d=new ACZ();UR(d,a,b,c);return d;}
function AJY(a,b,c,d){UR(a,(AHB(b)).jW,c,d);}
function AP8(a,b,c){UR(a,b,null,c);}
function UR(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.q0=ALl();f=new SR;f.fc=Q(Nv,16);f.e_=0;f.dE=(-1);a.hM=f;a.iG=null;a.is=BH();a.oP=BH();a.fH=1;a.hN=1;a.h1=1;a.dM=0;a.mb=0.0;a.fC=0;a.fZ=d;a.pk=c;c=new Y1;g=e.length;b=Q(DE,Bd(1,g));if(!g)b.data[0]=W3(C(21));h=b.data;i=0;while(i<g){h[i]=W3(e[i]);i=i+1|0;}d=new XK;f=new Ns;Qj(f);d.e0=f;c.eS=d;c.dI=JI();c.dz=JI();c.iw=BH();if(!h.length){c=new BR;X(c);N(c);}c.A=b;j=ABp(c);c.dc=AFY(ASj(KE(0,j,0),null,null));a.f=c;}
function D7(a){var b;b=a.pk;if(b===null){b=a.fZ;b=b===null?C(176):AGV(b.gy);}return b;}
function Hu(a){var b;b=a.fZ;return b===null?null:b.j5;}
function L_(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.hN=3;a.h1=3;a.fH=3;c=CN(b[0]);d=EJ(b[1]);CN(b[2]);if(b.length<5)NP(a.f,c,d);else{e=CN(b[3]);f=e.data;g=EJ(b[4]);WL(a.f,c,d,e,g,0);S3(a,I$(e,f.length),N4(g));}if(a.fC){h=EW(a);i=JD(EY(),a.iN);j=new K;M(j);H(HD(H(H(j,h),C(227)),i),C(228));$rt_globals.console.info($rt_ustr(L(j)));}h=a.k5;if(h!==null)Tt(h);}
function Lk(a){var b;RZ(a,DO(a.w,a.z),I0(a.f,a.w,a.z));if(!(a.iG!==null&&!Ex(a.is))){b=a.z;if(b>0)RZ(a,DO(a.w,b-1|0),I0(a.f,a.w,a.z-1|0));}}
function RZ(a,b,c){var d,e,f,g,h,i,j,k;ADe(a);d=Cn(a.f.dI,c);if(d!==null)c=d;a:{e=Cn(a.f.dz,c);if(e!==null){a.iG=LL(a.f,c);c=B6(e);while(true){if(!B$(c))break a;f=B_(c);BC(a.is,LL(a.f,f));}}}c=a.k5;if(c!==null){g=b.bq;h=b.bv;b=c.fl;f=D7(c.d);e=Hu(c.d);i=(Cz(b.uG)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Ad(f,e)){b=b.CR;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Ox;e.BY=c;e.BZ=f;e.BW=g;e.BX=h;b.sU(f,g,h,e,c.jL);}}}
function ADe(a){a.iG=null;Ip(a.is);}
function S3(a,b,c){var d,e,f,g,h;if(a.eZ!==null){a.z3=EY();d=a.f.cl;e=a.eZ;f=new XC;f.yg=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BN(1);b.data[0]=d;h[2]=b;CR(e,f,C(229),g);}}
function KQ(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.k5=b;a.eZ=c;if(c===null){d=a.f.A.data;e=d.length;f=0;while(f<e){Sz(d[f]);f=f+1|0;}}else if(a.fH==1){a.iN=EY();b=D7(a);e=BS(b,C(177));f=BS(b,C(180));d=E6(a.f);g=d.data.length;h=!e?5120:10240;i=AHc(b);if(f)JF(a,d,i);else if(g<=h)JF(a,d,i);else if(!e){UG(a,N4(d),i);JF(a,d,i);}else{UG(a,N4(d),i);j=N4(d);c=a.eZ;k=new AAQ;k.yU=a;l=Q(B,2);m=l.data;m[0]=j;j=BN(1);j.data[0]=i;m[1]=j;CR(c,k,C(230),l);a.hN=2;JF(a,d,i);}}}
function UG(a,b,c){var d,e;d=a.eZ;e=new Xj;e.t4=a;CR(d,e,C(231),I(B,[b,DT([c,250])]));a.h1=2;}
function JF(a,b,c){var d,e,f,g;d=a.eZ;e=new Vj;e.qx=a;f=Q(B,2);g=f.data;g[0]=b;b=BN(1);b.data[0]=c;g[1]=b;CR(d,e,C(232),f);a.fH=2;}
function EW(a){var b;b=a.fZ;return b===null?C(21):ABu(b);}
function L9(a){var b,c,d,e,f;if(a.fC){b=EW(a);c=new K;M(c);H(H(c,b),C(233));$rt_globals.console.info($rt_ustr(L(c)));}b=D7(a);if(b===null)d=null;else{a:{e=(-1);switch(NC(b)){case -1655966961:if(!Bi(b,C(180)))break a;e=3;break a;case 3401:if(!Bi(b,C(179)))break a;e=2;break a;case 98723:if(!Bi(b,C(178)))break a;e=1;break a;case 3254818:if(!Bi(b,C(177)))break a;e=0;break a;case 3556653:if(!Bi(b,C(176)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(234);break b;case 2:d=C(235);break b;case 3:d
=C(236);break b;case 4:d=C(237);break b;default:d=null;break b;}d=C(238);}}if(d===null)Tt(a.k5);else{a.iN=EY();b=a.eZ;c=new ABv;c.vD=a;f=Q(B,1);f.data[0]=E6(a.f);CR(b,c,d,f);}}
function N3(a){var b;b=ASY(a.f.eS,null);Wj(b);S3(a,b.oa,b.mq);}
function ACO(){var a=this;B.call(a);a.xr=null;a.AU=null;a.p3=null;a.uG=null;a.uh=null;a.zN=null;}
function N$(a,b,c){return Q5(a,Cz(a.xr),b,c);}
function Yu(a,b,c){return Q5(a,Cz(a.AU),b,c);}
function Q5(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Ad(c,d))return g.DR;f=f+1|0;}return null;}
function AAP(a,b,c){var d,e,f,g;d=(Cz(a.p3)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Ad(b,c))return g.DM;f=f+1|0;}return null;}
function Fk(){var a=this;B.call(a);a.b9=0;a.c9=null;a.cz=null;a.es=null;a.dD=0;}
var A5S=0;var A5O=0;function WP(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cz;j=i===b&&!i.i2?0:1;if(j){a.cz=b;Ne(b,c.cd,a.c9.gP);}k=H4(Be(Fy(b),e+2048|0),1024);l=a.es;m=l.data.length;n=k<=m?0:1;if(n){a.es=De(l,k);while(m<k){a.es.data[m]=CT(c);m=m+1|0;}}o=a.c9.hq;if(!(!j&&!n)){if(A5S){l=b.f7;$rt_globals.console.info("fMeasure"+l.data);A5S=0;}if(!A5O){c=o.c$;b="alphabetic";c.textBaseline=b;}else{b=o.c$;c="top";b.textBaseline=c;}a.dD=f/1024|0;p=0;while(p<k){J2(a,o,d,a.dD+p|0);p=p+1|0;}a.cz.i2=0;}e=a.es.data.length;if
(e&&f<=Fy(a.cz)){f=f/1024|0;g=a.dD;if(f!=g){if(VE(f-g|0)>=e){g=0;while(g<e){J2(a,o,d,f+g|0);g=g+1|0;}a.dD=f;}else{while(true){g=a.dD;if(g>=f)break;J2(a,o,d,g+e|0);a.dD=a.dD+1|0;}while(true){g=a.dD;if(g<=f)break;J2(a,o,d,g-1|0);a.dD=a.dD-1|0;}}}}}
function J2(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=XA(a,e);g=a.cz;if(f>=g.s.data.length)return;h=g.f7;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.b9;l=a.c9.gP;EK(b);a:{while(true){g=a.cz;if(f>=g.s.data.length)break a;m=l.data;g=JK(g,f);n=m[Kn(g)];o=!A5O?Lw(n,c):MW(n,c);m=h.data;Cl(b,n);BW(b,g.v,k,o);k=m[f]-j+a.b9;if(k>1024.0)break;f=f+1|0;}}h=a.es.data;CK(h[d%h.length|0],b);}
function PS(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.es.data.length;if(!o)return;if(g>Fy(a.cz))return;p=a.cz;q=p.eJ;r=p.s;s=g/1024|0;t=XA(a,g);u= -a.b9|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.es.data[s%o|0];bb=w[t];bc=z[t]+a.b9|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.b9|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.b9:2*a.b9|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.b9:2*a.b9|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.br.gb;if(bb===j)bo=h.br.qW;if(k!==null){p=B6(k);d:{while(B$(p)){if(BS(B_(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.br.vo;}if(n!==null){w=n.m9;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=ADl(h.dX,h,bi,n.gT);}if(!bn&&!bl){i.b=Be(i.b,Fy(a.cz));AFa(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.b9:0)|0,(g
+bg|0)<=(i.b+(!y?a.b9:2*a.b9|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.b9:0)|0,g-x|0,bo);}else{bp=h.jt.data[bb.bW];p=bn?h.br.kB:Sn(bo,V$(h,bp.mm));Cw(a.c9.jb,g-x|0,0.0,bg,v);V(a.c9.h7,bg,f);G6(a.c9,d,ba,u+c|0,b,bp.gN,p);}if((bb.bE&12)>>2>0){bc=u+c|0;B9(d,1);p=a.c9;bq=p.m_;bq.a=bg;x=b+p.te|0;bk=x-p.AI|0;br=p.p$;bs=x+br;ba=p.hb;Tj();LX(d,bc,bk,bq,br,bs,ba,A5T.kN.gN);B9(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AFa(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.jt.data[h.bW];o=n.gN;p=Sn(m,V$(f,n.mm));q=f.br.kB;f=a.c9;r=f.jb;s=f.h7;t=l;u=i-j|0;v=u;w=e;Cw(r,t,0.0,v,w);V(s,u,e);G6(a.c9,b,g,c,d,o,p);l=l+i|0;Cw(r,l-k|0,0.0,k,w);V(s,k,e);f=a.c9;c=c+i|0;G6(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cw(r,t,0.0,i,w);V(s,i,e);G6(a.c9,b,g,c-j|0,d,o,q);}
function Sn(b,c){if(b!==null)c=b;return c;}
function XA(a,b){var c,d,e,f,g,h,i;c=a.cz;d=c.f7;e=0;f=c.s.data.length;g=b;b=BK(e,f);if(b>0){c=new BR;X(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BK(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AC7(a){var b,c,d;b=a.es.data;c=b.length;d=0;while(d<c){AFy(b[d]);d=d+1|0;}a.es=a.c9.nl;a.cz=null;}
function AHL(a,b,c,d,e,f,g,h,i){var j,k;j=Fy(a.cz);if(j)j=j+a.b9|0;if(!j)j=j-a.b9|0;k=Bd( -a.b9|0,j-g|0);if(k>=h)return;V(f,h-k|0,e);Bs(b,c+k|0,d,f,i);}
function Yx(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=Q(Fk,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.th(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cz===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Fk;g.b9=3;g.dD=0;g.c9=d;g.es=d.nl;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AC7(q);j=j+1|0;}return i;}
function Sg(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cz;if(e!==null)e.i2=1;d=d+1|0;}}
function N9(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AC7(b[d]);d=d+1|0;}}
function AFd(){A5O=0;}
function AGI(){var a=this;B.call(a);a.fS=null;a.dg=null;a.eU=null;a.fr=null;a.n5=null;a.nS=null;}
function I1(){var a=new AGI();AWH(a);return a;}
function AWH(a){a.fS=new Bg;a.dg=new Bg;a.eU=new Bg;a.fr=new Bg;a.n5=new B0;a.nS=new B0;}
function YJ(a){var b;b=a.dg;return !Bb(b.a,b.b)?0:1;}
function ID(a,b){return Hr(b,a.eU,a.fr);}
function FX(a,b,c,d){var e,f,g,h,i;e=ID(a,b);f=Hr(b,a.fS,a.dg);if(!e&&!f)return null;if(!f){if(!d)c.j(Uo(a,b.a-a.eU.a|0));else c.j(Qf(a,b.b-a.eU.b|0));}g=!d?a.fS.a+(a.dg.a/2|0)|0:a.fS.b+(a.dg.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new RK;b.uZ=a;b.u0=c;b.uY=i;}else{b=new RJ;b.rc=a;b.ra=c;b.rb=i;}return b;}
function H0(a,b,c){if(c!==null)BO(a.n5,c);if(b!==null)BO(a.nS,b);}
function AEx(b,c){var d;d=new AAZ;d.sB=b;d.A4=c;return d;}
function Qf(a,b){var c,d,e;c=a.fr.b;d=a.dg.b;e=c-d|0;return AEx(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Uo(a,b){var c,d,e;c=a.fr.a;d=a.dg.a;e=c-d|0;return AEx(Be(Bd(0,b-(d/2|0)|0),e),e);}
function J_(a,b,c,d,e,f,g){Ut(a,b,c,d,e,f,g,1);}
function QT(a,b,c,d,e,f,g){Ut(a,b,c,d,e,f,g,0);}
function Ut(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(X6(d,d,e),i);e=e-d|0;i=d-j|0;i=i?X6(b,i,e):0;if(!h){k=a.fS;k.a=i+c|0;k.b=f-g|0;l=a.dg;l.a=j;l.b=g;l=a.eU;l.a=c;l.b=k.b;k=a.fr;k.a=d;k.b=g;break a;}k=a.fS;k.a=f-g|0;k.b=i+c|0;l=a.dg;l.a=g;l.b=j;l=a.eU;l.a=k.a;l.b=c;k=a.fr;k.a=g;k.b=d;break a;}}V(a.fr,0,0);V(a.dg,0,0);}}
function UI(a,b){GL(a,b);GS(a,b);}
function GL(a,b){var c;c=a.eU;Bs(b,c.a,c.b,a.fr,a.n5);}
function GS(a,b){var c,d;c=a.dg;c.a=c.a-2|0;c.b=c.b-2|0;d=a.fS;Bs(b,d.a+1|0,d.b+1|0,c,a.nS);b=a.dg;b.a=b.a+2|0;b.b=b.b+2|0;}
function F3(a,b,c){return ID(a,b)&&Gx(c)?1:0;}
function AEl(){var a=this;B.call(a);a.D1=20;a.gj=null;a.fg=null;a.k9=0.0;a.k6=null;a.i8=0;a.kw=0;a.g6=0;a.c1=null;a.n7=null;a.e5=null;a.gu=null;a.gs=0;}
function AGC(){var a=new AEl();A0X(a);return a;}
function A0X(a){a.D1=20;a.gj=new Bg;a.fg=new Bg;a.c1=BH();a.n7=DH(0);}
function AAK(a,b,c){var d,e,f,g,h;d=a.gs;if(b==d)return;e=a.c1.m;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){Rh(a,b);a.gs=b;}else{W1(a,c);if(a.gs>=b)while(true){if(h<g)break a;a.gs=O2(Bw(a.c1,h%e|0),a.e5,a.gu,a.gs,b,f,a.k9);h=h+(-1)|0;}while(g<=h){a.gs=O2(Bw(a.c1,g%e|0),a.e5,a.gu,a.gs,b,f,a.k9);g=g+1|0;}}}}
function Lx(a,b){if(b===null)b=DH(0);a.n7=b;}
function Z7(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.g6;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c1;h=Bw(h,g%h.m|0);i=a.gj;j=a.n7;k=h.fe.b;l=d.kQ;m=b+f|0;n=h.cp;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&Vn(d,j,r,l)!==l.kJ?0:1){k=Bb((q-p|0)+1|0,h.cp);V(h.iY,BZ(h.cL),k);Cw(h.jD,0.0,Bb(p,h.cp),BZ(h.cL),k);t=r;}else{u=Vn(d,j,r,l);M3(h,e,f+Bb(p,h.cp)|0,i,l.os,u);V(h.iY,BZ(h.cL),h.cp);Cw(h.jD,0.0,Bb(q,h.cp),BZ(h.cL),h.cp);p=q;}q=q+1|0;r=t;}u=Vn(d,j,r,l);M3(h,
e,f+Bb(p,h.cp)|0,i,l.os,u);g=g+1|0;f=f+a.g6|0;}}
function Se(a,b,c,d){var e,f,g,h,i,j;e=a.c1.m;while(true){f=a.c1.m;g=Bb(f,a.g6);if(g>(d+a.kw|0))break;h=BJ(0,g);i=new Qi;g=a.fg.a;f=a.kw;j=a.k6;i.iY=new Bg;i.jD=new B0;i.pG=h;i.d7=20;i.cp=f;i.fe=BJ(g,20*f|0);i.hf=Lw(j,f);if(i.cL===null)i.cL=CT(b);BC(a.c1,i);}if(f==e)return;W1(a,b);Rh(a,c);}
function Rh(a,b){var c,d,e,f,g,h,i,j,k;c=a.c1;d=c.m;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=B6(c);while(B$(c)){f=B_(c);g=a.e5;h=a.k9;EK(g);i=0;while(true){j=f.d7;if(i>=j)break;k=e-Bb(d,j)|0;if(k<b)k=e;e=k+1|0;GF(f,g,Dh(e),Bb(f.cp,i)+f.hf|0,h);i=i+1|0;}CK(f.cL,g);f.v1=g.i3;}}
function X2(a,b,c,d){a.k6=b;a.kw=c;a.g6=c*20|0;a.i8=d;X4(a);}
function W1(a,b){var c;c=a.e5;if(!(c!==null&&c.i3==a.i8)){c=D1(b,a.fg.a,a.g6,a.i8);a.e5=c;Cl(c,a.k6);Zj(a.e5,2);}c=a.gu;if(!(c!==null&&c.i3==a.i8)){b=D1(b,a.fg.a,a.kw,a.i8);a.gu=b;Cl(b,a.k6);Zj(a.gu,2);}}
function It(a){Fm(a.c1,new ACL);Ip(a.c1);X4(a);}
function X4(a){a.e5=BY(a.e5,null);a.gu=BY(a.gu,null);}
function RL(a,b,c,d,e){Cs(a.gj,b);V(a.fg,c,d);a.k9=e;}
function WF(){B.call(this);this.Co=null;}
function WE(){B.call(this);this.pP=null;}
function ALj(a,b){var c;c=a.pP;FW(c,FP(b,KK(c)));}
function WD(){B.call(this);this.so=null;}
function AKH(a,b){var c;c=a.so;IB(c,FP(b,AAa(c)));}
function AJa(){var a=this;B.call(a);a.jb=null;a.h7=null;a.m_=null;a.hb=null;a.gP=null;a.nl=null;a.cS=null;a.hq=null;a.p$=0.0;a.dZ=0;a.te=0;a.AI=0;a.iA=0;}
function AOO(a){var b=new AJa();AR6(b,a);return b;}
function AR6(a,b){var c;a.jb=new B0;a.h7=new Bg;a.m_=new Bg;c=new B0;a.hb=c;a.gP=Q(Lm,4);a.nl=Q(In,0);a.iA=b;Lp(c);}
function XD(a){a.hq=BY(a.hq,null);}
function RP(a,b,c){var d,e;d=CV(E1(a.cS)*b);a.dZ=d;e=a.cS;a.te= -( -((d+e.ef+e.ev)/2.0)|0)|0;ADa(a,c);return a.dZ;}
function Pw(a,b){var c,d;Lp(a.hb);c=a.hb;Ud(c,b,c);a.p$=Wh(a.hb);c=a.hb;d=c.bs+c.be+1.5|0;a.AI=d;V(a.m_,0,d*2|0);}
function ADa(a,b){a.hq=BY(a.hq,D1(b,1024,a.dZ,a.iA));}
function G6(a,b,c,d,e,f,g){var h,i;h=a.h7;if(h.a&&h.b){i=a.jb;if(i.bB!==0.0&&i.be!==0.0){D3(b,d,e,h,i,c,f,g,a.iA);return;}}}
function WC(){B.call(this);this.z1=null;}
function ATH(a){var b,c;b=a.z1;c=b.jN?0:1;b.jN=c;b=new K;M(b);Jm(H(b,C(239)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function WJ(){B.call(this);this.wF=null;}
function AVU(a){var b,c;b=a.wF;c=b.kD^1;b.kD=c;b=new K;M(b);Jm(H(b,C(240)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function WI(){B.call(this);this.s9=null;}
function A1G(a){var b,c,d,e,f;b=a.s9;c=(b.d8+3|0)%6|0;b.d8=c;d=b.eI.data;e=d.length;f=0;while(f<e){b=d[f];b.b9=c;b=b.cz;if(b!==null)b.i2=1;f=f+1|0;}}
function WH(){B.call(this);this.vs=null;}
function AOV(a){var b;b=a.vs;b.ce=b.ce?0:1;It(b.da);b.da=AGC();NO(b);ZK(b,b.i,b.k,b.cG.cb);}
function WG(){B.call(this);this.qH=null;}
function AQy(a){var b;b=a.qH;b.lw=b.lw?0:1;}
function WB(){B.call(this);this.yq=null;}
function A1b(a){var b;b=a.yq;b.po=b.po?0:1;}
function T5(){B.call(this);this.rN=null;}
function AOY(a){var b;b=a.rN;XY(b,b.lk,b.ny);}
function T6(){B.call(this);this.q5=null;}
function AYw(a){var b;b=a.q5;XY(b,b.ny,b.lk);}
var AFr=G();
function Nb(){B.call(this);this.Ci=null;}
var A5q=null;var A5U=null;function AWI(){AWI=Bn(Nb);A1u();}
function AMH(a){var b=new Nb();AG6(b,a);return b;}
function AG6(a,b){AWI();a.Ci=b;}
function A1u(){A5q=AMH(C(241));A5U=AMH(C(242));}
var ADV=G(0);
function AHT(b,c,d){return Iw(b,c,d,255,new B0);}
function Iw(b,c,d,e,f){Cw(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function UA(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-ANz(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bm=g+i;e.bs=h+i;e.be=j+i;return e;}
function Io(b,c,d,e,f){f=UA(b,c,d,f);f.bB=e;return f;}
function HQ(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var Ze=G();
function ANE(a,b){var c,d,e;c=b.cJ;d=c&&!b.bJ&&!b.dt&&!b.ke?1:0;a:{if(d){d=b.bl;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bJ&&!c&&!b.dt&&!b.ke?1:0;d=d&&b.bl==46?1:0;}b:{if(!d){e=b.bl;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.of=1;}return 0;}
function Zd(){B.call(this);this.wx=null;}
function AUT(a,b){var c;c=a.wx.d5;return c!==null&&c.ig(b)?1:0;}
var Lt=G(0);
function AHu(){var a=this;Fi.call(a);a.cD=null;a.m=0;}
function BH(){var a=new AHu();ANk(a);return a;}
function ANk(a){a.cD=Q(B,10);}
function Mz(a,b){var c,d;c=a.cD.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cD=De(a.cD,d);}}
function Bw(a,b){Kk(a,b);return a.cD.data[b];}
function AYi(a){return a.m;}
function BC(a,b){var c,d;Mz(a,a.m+1|0);c=a.cD.data;d=a.m;a.m=d+1|0;c[d]=b;a.bZ=a.bZ+1|0;return 1;}
function Y4(a,b,c){var d,e,f;Qb(a,b);Mz(a,a.m+1|0);d=a.m;e=d;while(e>b){f=a.cD.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cD.data[b]=c;a.m=d+1|0;a.bZ=a.bZ+1|0;}
function EF(a,b){var c,d,e,f;Kk(a,b);c=a.cD.data;d=c[b];e=a.m-1|0;a.m=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bZ=a.bZ+1|0;return d;}
function T2(a,b){var c;c=KV(a,b);if(c<0)return 0;EF(a,c);return 1;}
function Ip(a){AD6(a.cD,0,a.m,null);a.m=0;a.bZ=a.bZ+1|0;}
function AHG(a,b,c){var d,e,f,g,h,i;Qb(a,b);if(c.et())return 0;Mz(a,a.m+c.cZ()|0);d=c.cZ();e=a.m;f=e-1|0;while(f>=b){g=a.cD.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.m=e+d|0;h=c.b5();i=0;while(i<d){g=a.cD.data;e=b+1|0;g[b]=h.b7();i=i+1|0;b=e;}a.bZ=a.bZ+1|0;return 1;}
function Kk(a,b){var c;if(b>=0&&b<a.m)return;c=new BF;X(c);N(c);}
function Qb(a,b){var c;if(b>=0&&b<=a.m)return;c=new BF;X(c);N(c);}
function Fm(a,b){var c;c=0;while(c<a.m){b.j(a.cD.data[c]);c=c+1|0;}}
function J9(){var a=this;B.call(a);a.u=null;a.t=null;a.W=null;a.bk=null;}
function RR(){var a=new J9();ABd(a);return a;}
function Sp(a,b,c,d){var e=new J9();ALW(e,a,b,c,d);return e;}
function ABd(a){a.u=new Bg;a.t=new Bg;a.W=new B0;a.bk=new B0;}
function ALW(a,b,c,d,e){a.u=new Bg;a.t=new Bg;a.W=new B0;a.bk=new B0;Ha(a,b,c,d,e);}
function Ha(a,b,c,d,e){V(a.u,b,c);V(a.t,d,e);}
function AAc(a){V(a.t,0,0);}
function KZ(a){var b;b=a.t;return Bb(b.a,b.b)?0:1;}
function E7(a,b){return Hr(b,a.u,a.t);}
function Y0(a,b,c,d){var e;e=a.u;Bs(b,e.a+c|0,e.b+d|0,a.t,a.W);}
function Vb(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.bk;i=a.W;Gl(b,b.iE);Gu(b.iE,b.X,d,e,g,b.c3);NH(b.iE,b.X,c);g=b.iE;j=b.X;Fw(j,g.vd,h);Fw(j,g.vb,i);c=g.r7;j.uniform2f(c,f,0.0);FV(b);}
var Ff=G();
function M_(){Ff.call(this);this.DR=null;}
function Z1(){Ff.call(this);this.DM=null;}
function X_(){Ff.call(this);this.CR=null;}
var G$=G(0);
var RY=G(0);
function B0(){var a=this;B.call(a);a.bm=0.0;a.bs=0.0;a.be=0.0;a.bB=0.0;}
function ACW(a,b,c,d){var e=new B0();AY5(e,a,b,c,d);return e;}
function AJ4(a){var b=new B0();AJb(b,a);return b;}
function AY5(a,b,c,d,e){a.bm=b;a.bs=c;a.be=d;a.bB=e;}
function Cw(a,b,c,d,e){a.bm=b;a.bs=c;a.be=d;a.bB=e;}
function AJb(a,b){a.bm=b.bm;a.bs=b.bs;a.be=b.be;a.bB=b.bB;}
function BO(a,b){a.bm=b.bm;a.bs=b.bs;a.be=b.be;a.bB=b.bB;return a;}
function AS3(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BI(a)===BI(b)){b=b;if(b.bm===a.bm&&b.bs===a.bs&&b.be===a.be&&b.bB===a.bB?1:0){c=1;break a;}}c=0;}return c;}
function Lm(){var a=this;B.call(a);a.nM=null;a.Bl=null;a.oq=0.0;a.By=0;a.BO=0;a.sA=0;a.Ct=0;a.ef=0.0;a.ev=0.0;a.Bp=0.0;a.pw=0.0;a.Bu=0;a.qi=null;}
function Lw(a,b){return MW(a,b)+a.sA|0;}
function MW(a,b){return (b-E1(a)|0)/2|0;}
function E1(a){return CV(a.ef+a.ev);}
function MX(a,b){return CV((a.ef+a.ev)*b);}
function In(){var a=this;B.call(a);a.ey=null;a.fQ=null;a.fn=null;}
var A4_=0;function AFy(a){var b;b=a.fQ;if(b!==null){A4_=A4_-1|0;a.ey.dU.deleteTexture(b);a.fQ=null;}}
function BZ(a){return a.fn.a;}
function Dj(a){return a.fn.b;}
function St(a,b,c,d){var e;e=a.fn;e.a=b;e.b=c;N6(a);a.ey.dU.texStorage2D(3553,1,d,b,c);e=a.ey.dU;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function N6(a){var b,c;b=a.ey.dU;c=a.fQ;b.bindTexture(3553,c);}
function CK(a,b){V1(a,b.no,b.mT,32856);X8(a,b,0,0);}
function V1(a,b,c,d){var e,f,g,h;a:{e=a.fn;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){N6(a);break a;}e=a.ey.dU;h=a.fQ;e.deleteTexture(h);a.fQ=a.ey.dU.createTexture();St(a,b,c,d);break a;}}St(a,b,c,d);}}
function JC(a,b,c,d){N6(a);X8(a,b,c,d);}
function X8(a,b,c,d){var e;e=a.ey.dU;b=b.iT;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var X1=G(0);
var A5V=0.0;function Lp(b){Cw(b,1.0471975803375244,0.75,1.25,0.375);}
function Ud(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:Jb(b.bB,Jb(c,A5V));Cw(d,b.bm/c,b.bs*c,ASw(b.be*c,1.25),e);}
function Wh(b){var c;c=b.bs;return c-(c|0)>=0.25?0.0:0.5;}
function ADy(){A5V=MP(MP(0.5,0.375),4.0);}
var Ok=G(0);
function Gx(a){return DU(a,null);}
function QS(b){var c;c=new Y9;c.uB=b;return c;}
function Yh(){B.call(this);this.sO=null;}
function AWm(a){Ky(a.sO);}
function Yg(){B.call(this);this.u8=null;}
function ATs(a){KO(a.u8);}
function AJQ(){var a=this;B.call(a);a.bK=null;a.bA=null;a.dn=0;}
function ALl(){var a=new AJQ();A1g(a);return a;}
function AU8(a){var b=new AJQ();APO(b,a);return b;}
function A1g(a){a.bK=new G_;a.bA=new G_;}
function APO(a,b){a.bK=new G_;a.bA=new G_;JB(a,b);}
function JB(a,b){AA1(a.bK,b.bK);AA1(a.bA,b.bA);a.dn=b.dn;}
function NL(a,b,c){Ce(a.bA,b,c);if(!a.dn)Ce(a.bK,b,c);}
function Qg(a,b){Ce(a.bK,b,0);Ce(a.bA,b+1|0,0);}
function El(a){if(Ro(a.bK,a.bA)>0)return a.bA;return a.bK;}
function FZ(a){if(Ro(a.bK,a.bA)<0)return a.bA;return a.bK;}
function AI$(a,b){var c,d,e,f;c=a.bK;d=c.J;e=a.bA;if(d==e.J&&c.Z==e.Z?1:0)return null;c=El(a);e=FZ(a);d=c.J;if(d<=b){f=BK(b,e.J);if(f<=0)return BJ(b<=d?c.Z:0,f>=0?e.Z:(-1));}return null;}
function Ds(a){var b,c;b=a.bK;c=a.bA;return (b.J==c.J&&b.Z==c.Z?1:0)?0:1;}
function SR(){var a=this;B.call(a);a.fc=null;a.e_=0;a.dE=0;}
function ABB(a,b){var c,d,e;c=a.e_;d=a.fc;if(c==d.data.length)a.fc=De(d,c+16|0);d=a.fc.data;e=a.e_;a.e_=e+1|0;d[e]=b;}
function Y6(a){var b,c,d;b=a.dE;c=a.e_-1|0;if(b==c)a.dE=b-1|0;d=a.fc.data;a.e_=c;d[c]=null;}
var GR=G();
function Y1(){var a=this;GR.call(a);a.A=null;a.dc=null;a.eS=null;a.dI=null;a.dz=null;a.iw=null;a.lg=null;a.cl=0;a.mY=0;a.yS=0.0;}
function Cc(a,b){return a.A.data[b];}
function CI(a){return a.A.data.length;}
function ABp(a){return Fx(a,CI(a));}
function Gq(a,b){return a.A.data[b].R;}
function AJH(a,b,c){var d,e,f,g,h;d=a.A;e=d.data;f=e[b];d=De(d,e.length+1|0);e=d.data;a.A=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=D2(Q(Cu,0));a.A.data[b+1|0]=f;}else if(c==f.R){e[b]=f;e[b+1|0]=D2(Q(Cu,0));}else{e=(II(f,c)).data;d=a.A.data;d[b]=e[0];d[b+1|0]=e[1];}FY(a,b,c,0,C(205));}
function Lq(a,b){var c,d,e,f,g,h,i;c=a.A.data;d=c[b];e=c[b+1|0];f=D2(I2(d.s,e.s));g=a.A;h=g.data.length;if(b<h&&b>=0){i=Q(DE,h-1|0);c=i.data;YU(g,b,i);c[b]=f;a.A=i;return;}d=new Bt;X(d);N(d);}
function OE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.A.data;if(!(c<d[b].R?0:1)){d=(Cc(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}FY(a,b,c,1,Za(e));h=a.A.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=YU(d,e,Q(Cu,f-1|0));else{j=i[e];if(c<=0)k=D9(Dr(j.v,1),j.bW,j.bE);else if(c>=(J(j.v)-1|0)){k=new Cu;l=j.v;AAo(k,Cr(l,0,J(l)-1|0),j.bW,j.bE);}else{d=B4(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=D9(Hi(d),j.bW,j.bE);}i[e]=k;}h.R=h.R-1|0;EV(h);}else if(b!=(d.length-1|0)){FY(a,b,c,1,C(205));Lq(a,b);}}
function ADg(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Zm(a.A.data[b],c,e[0]);return;}g=f-1|0;d=(II(a.A.data[b],c)).data;h=d[0];i=d[1];d=a.A;j=De(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);Ml(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Gh(e[m])?W3(e[m]):D2(Q(Cu,0));d[b+m|0]=k;m=m+1|0;}Ml(i,0,0,e[g]);d[b+g|0]=i;a.A=j;}
function T$(a,b){var c,d,e,f,g,h,i;c=El(b);d=FZ(b);e=c.J;if(e==d.J)return Cr(FE(a.A.data[e]),c.Z,d.Z);f=new K;M(f);b=a.A.data[c.J];e=c.Z;BM(BU(f,Dr(FE(b),e)),10);g=a.A.data;e=c.J+1|0;h=d.J;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;ADs(BU(f,FE(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.A.data[d.J];h=d.Z;BU(f,Cr(FE(b),0,h));return L(f);}b=new ACh;X(b);N(b);}
function OK(a,b,c){var d;AB8(a,b);d=El(b);FY(a,d.J,d.Z,1,c);}
function AB8(a,b){var c,d,e,f,g,h,i;a:{c=El(b);d=FZ(b);e=c.J;if(e==d.J)HE(a.A.data[e],c.Z,d.Z);else{b=a.A.data[e];HE(b,c.Z,b.R);HE(a.A.data[d.J],0,d.Z);e=c.J+1|0;f=d.J;g=a.A;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(DE,(h-f|0)+e|0);AEL(g,e,f,i);a.A=i;Lq(a,c.J);break a;}b=new Bt;X(b);N(b);}b=new Bt;X(b);N(b);}}}
function I0(a,b,c){return DO(b,GA(Cc(a,b),c));}
function ACx(a,b){var c,d,e;c=0;d=0;while(true){e=a.A.data.length;if(c>=e)break;if((d+(Cc(a,c)).R|0)>=b)return BJ(c,b-d|0);d=d+((Cc(a,c)).R+1|0)|0;c=c+1|0;}return BJ(e,0);}
function Fx(a,b){var c,d,e;c=0;d=a.A.data.length;e=0;while(e<b){c=c+Gq(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function LL(a,b){return N1(Cc(a,b.bq),b.bv);}
function E6(a){var b,c,d,e,f,g,h,i,j;b=B4(ABp(a));c=b.data;d=a.A.data.length;e=0;f=0;while(e<d){g=a.A.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;Qq(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function FY(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cl=a.cl+1|0;f=a.iw;g=Q(G2,1);h=new G2;h.d_=b;h.eN=c;i=L2(e,C(205),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BJ(b,c+J(i[0])|0);break a;}k=BJ((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BJ(b,c);}i=g.data;h.oU=k;h.nC=d;h.gC=e;i[0]=h;BC(f,g);M1(a,b,c,d,e);}
function M1(a,b,c,d,e){var f;f=Fx(a,b)+c|0;if(!d){W2(a.dc,f,J(e));S1(a.eS,f,J(e));}else{Up(a.dc,f,J(e));OY(a.eS,f,J(e));}}
function V6(a,b){var c,d,e;c=L2(b.gC,C(205),(-1));if(b.nC){ADg(a,b.d_,b.eN,c);W2(a.dc,Fx(a,b.d_)+b.eN|0,J(b.gC));S1(a.eS,Fx(a,b.d_)+b.eN|0,J(b.gC));}else{c=c.data;d=ALl();Ce(d.bK,b.d_,b.eN);e=c.length;if(e==1)Ce(d.bA,b.d_,b.eN+J(c[0])|0);else Ce(d.bA,(b.d_+e|0)-1|0,J(c[e-1|0]));AB8(a,d);Up(a.dc,Fx(a,b.d_)+b.eN|0,J(b.gC));OY(a.eS,Fx(a,b.d_)+b.eN|0,J(b.gC));}return b.oU;}
function AAz(a){return a.mY==a.cl?0:1;}
function Kq(a){a.mY=a.cl;}
function MV(a){var b,c,d;a.lg=BN(a.A.data.length+1|0);b=0;while(b<a.A.data.length){c=a.lg.data;d=b+1|0;c[d]=(c[b]+(Cc(a,b)).R|0)+1|0;b=d;}}
function U2(a,b){var c,d,e,f,g,h;c=a.lg;if(c===null){d=0;e=0;a:{while(true){c=a.A.data;f=c.length;if(e>=f)break;g=c[e].R;if(b<=(d+g|0)){h=DO(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DO(f,0);}return h;}d=AI4(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DO(d,b-(d<0?0:a.lg.data[d])|0);if(h.bv>=(Cc(a,h.bq)).R){h.bq=h.bq+1|0;h.bv=0;}return h;}
var LW=G(0);
function KF(a){return LM(a.sy(),a.oC());}
function LM(b,c){var d,e,f;b=b.data;d=b.length;if(!d)return c;e=new K;M(e);f=0;while(f<d){BM(BU(e,b[f]),47);f=f+1|0;}return L(BU(e,c));}
var SV=G(0);
function Sb(){var a=this;B.call(a);a.h9=null;a.fX=null;a.jA=null;}
function AI7(a,b){var c=new Sb();AN_(c,a,b);return c;}
function A1S(a,b,c){var d=new Sb();ADS(d,a,b,c);return d;}
function AN_(a,b,c){ADS(a,b,c,Q(BL,0));}
function ADS(a,b,c,d){a.h9=b;a.fX=c;a.jA=d;}
function EM(a){var b;b=a.h9;return HX(b!==null?b.name:a.fX.name);}
function AK3(a){return a.jA;}
function Uj(a,b,c){var d,e,f;d=AJR(c);e=new UL;e.qu=b;b=a.fX;if(b!==null)b.text().then(Bu(e,"f"),Bu(d,"f"));else{b=a.h9.getFile();f=new UM;f.rj=e;f.rk=d;b.then(Bu(f,"f"),Bu(d,"f"));}}
function AJR(b){var c;c=new SW;c.xi=b;return c;}
function AWP(a){var b,c,d,e,f,g,h,i;if(a.fX===null)b=LM(a.jA,EM(a));else{c=a.jA;b=EM(a);d=a.fX.size;e=d|0;if(e!==d){f=EM(a);g=new K;M(g);H(H(g,C(243)),f);$rt_globals.console.info($rt_ustr(L(g))+d);e=0;}if(c===null)f=C(23);else{g=new K;M(g);BU(g,C(36));h=0;while(true){i=c.data;if(h>=i.length)break;if(h>0)BU(g,C(37));H(g,i[h]);h=h+1|0;}BU(g,C(38));f=L(g);}g=new K;M(g);U(H(H(H(H(g,f),C(244)),b),C(245)),e);b=L(g);}return b;}
function AKP(a){return (AET(EM(a))*31|0)+AFH(a.jA)|0;}
var ABX=G(0);
function AIT(){B.call(this);this.ix=null;}
function A16(a){var b=new AIT();AXT(b,a);return b;}
function AXT(a,b){a.ix=b;}
function EJ(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ix));}
function CN(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.ix));}
function AVa(a){var b,c;b=a.ix.byteLength;c=new K;M(c);H(U(H(c,C(246)),b),C(247));return L(c);}
function Y9(){B.call(this);this.uB=null;}
function DU(a,b){Y2(a.uB,b);return 1;}
function G_(){var a=this;B.call(a);a.J=0;a.Z=0;}
function Ce(a,b,c){a.J=b;a.Z=c;}
function AA1(a,b){a.J=b.J;a.Z=b.Z;}
function Ro(a,b){var c;c=BK(a.J,b.J);if(c)return c;return BK(a.Z,b.Z);}
function Nv(){var a=this;B.call(a);a.o0=null;a.n8=null;}
function LQ(a){return a.o0.bq;}
function KD(a){return a.o0.bv;}
function DE(){var a=this;B.call(a);a.s=null;a.R=0;a.f7=null;a.eJ=null;a.ek=null;a.h8=null;a.gO=0;a.i2=0;a.jj=0;}
var A5W=0;var A5X=0;var A5P=0;function W3(a){var b=new DE();AJh(b,a);return b;}
function D2(a){var b=new DE();YB(b,a);return b;}
function AJh(a,b){var c;c=Q(Cu,1);c.data[0]=AH2(b);YB(a,c);}
function YB(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.R=d;EV(a);}
function Jh(a){return a.s.data.length;}
function JK(a,b){return a.s.data[b];}
function GA(a,b){var c;c=J6(a,b);return c<=0?0:a.ek.data[c-1|0];}
function J6(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.ek!==null&&!a.jj)){UE(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.ek.data[d]=e;d=d+1|0;}a.jj=0;}d=AAx(a.ek,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function N1(a,b){var c;c=a.s.data;if(!c.length)return null;return c[J6(a,b)];}
function HE(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.R){a.s=Q(Cu,0);EV(a);a.R=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BK(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=YU(g,e,Q(Cu,g.data.length-1|0));a.R=a.R-d|0;EV(a);return;}a.s.data[e]=D9(Fn(Cr(k.v,0,b),Dr(k.v,c)),k.bW,k.bE);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=D9(Cr(l.v,0,b),l.bW,l.bE);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=D9(Dr(m.v,c),m.bW,m.bE);g=a.s;a.s=AEL(g,e,f,Q(Cu,(g.data.length-f|0)+e|0));}a.R=a.R-d|0;EV(a);}
function II(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DE,[D2(Q(Cu,0)),a]);if(b>=a.R)return I(DE,[a,D2(Q(Cu,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DE,[D2(Lh(c,0,Q(Cu,d))),D2(Lh(c,d,Q(Cu,f-d|0)))]);h=e[d];e=Lh(c,0,Q(Cu,d+1|0));i=e.data;j=Lh(c,d,Q(Cu,f-d|0));c=j.data;i[d]=D9(Cr(h.v,0,b),h.bW,h.bE);c[0]=D9(Dr(h.v,b),h.bW,h.bE);return I(DE,[D2(e),D2(j)]);}
function Zm(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}Ml(a,d,b,c);}
function Ml(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Gh(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Cu,1);h.data[0]=AH2(d);a.s=h;}else if(!b&&!c){h=Q(Cu,g+1|0);f=h.data;DS(e,0,h,1,g);f[0]=AH2(d);a.s=h;}else{i=f[b];if(c<=0)j=D9(Fn(d,i.v),i.bW,i.bE);else if(c>=J(i.v))j=D9(Fn(i.v,d),i.bW,i.bE);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B4(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=D9(Hi(e),i.bW,i.bE);}f[b]=j;}a.R=a.R
+J(d)|0;EV(a);}
function O0(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<LV(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Ne(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.f7;if(!(e!==null&&e.data.length>=d)){a.f7=AKz(d);a.eJ=BN(d);a.gO=1;}UE(a);if(!a.gO)A5X=A5X+1|0;else{f=0;g=0.0;A5W=A5W+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.ek.data[h]=f;Cl(b,i[Kn(j)]);g=g+Ej(b,j.v);a.f7.data[h]=g;a.eJ.data[h]=g+0.5|0;h=h+1|0;}a.R=f;a.gO=0;a.jj=0;}}
function UE(a){var b;b=a.ek;if(!(b!==null&&b.data.length>=a.s.data.length)){a.ek=BN(a.s.data.length);a.jj=1;}}
function Sz(a){a.gO=1;a.h8=null;}
function EV(a){Sz(a);a.i2=1;a.jj=1;}
function Zi(a,b,c,d){var e,f,g,h,i,j,k;if(a.h8===null)a.h8=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.h8.data[d];if(e===null){e=c.data;f=a.s.data[d];Cl(b,e[Kn(f)]);f=f.v;e=BN(J(f)-1|0);c=Gj(f);g=!d?0.0:a.f7.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BL;k=i+1|0;Oi(f,c,0,k);h[i]=g+Ej(b,f)+0.5|0;i=k;}a.h8.data[d]=e;}return e;}
function GM(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.gO&&a.eJ!==null))Ne(a,c,d);if(b>=a.R)return a.eJ.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BK(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eJ.data[f];}return (Zi(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Fy(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eJ.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GZ(a,b){var c;if(b>=a.R)return b+1|0;c=J6(a,b);return a.ek.data[c];}
function FE(a){var b,c,d,e;b=new K;GB(b,a.R);c=a.s.data;d=c.length;e=0;while(e<d){BU(b,c[e].v);e=e+1|0;}return L(b);}
function AEK(){A5P=0;}
function XK(){var a=this;B.call(a);a.fp=null;a.e0=null;}
function AU1(a,b){var c=new XK();AV2(c,a,b);return c;}
function AV2(a,b,c){a.fp=b;a.e0=c;}
function S1(a,b,c){var d;d=a.fp;if(d===null)return;Yz(a,d,b,c);}
function OY(a,b,c){var d;d=a.fp;if(d===null)return;AAD(a,d,b,c);}
function Yz(a,b,c,d){var e,f,g,h;e=b.eL.b5();while(e.cy()){U9(a,e.b7(),c,d);}e=b.fq.b5();while(e.cy()){f=e.b7();g=new Sx;g.xX=a;EL(a,g,f,c,d);}h=b.hz.b5();while(h.cy()){e=h.b7();U9(a,e.k4,c,d);f=new Sy;f.v4=a;EL(a,f,e.kt,c,d);}b=b.cH.b5();while(b.cy()){Yz(a,b.b7(),c,d);}}
function U9(a,b,c,d){Kz(a,b.eu,c,d);}
function EL(a,b,c,d,e){var f,g;a:{if(c instanceof HA){f=c.he;g=new Vl;g.qL=a;g.qJ=b;g.qI=d;g.qK=e;Fm(f,g);}else{if(!(c instanceof J3)){if(!(c instanceof Jc))break a;f=c;EL(a,b,f.jy,d,e);EL(a,b,f.iV,d,e);return;}g=c.h0;f=new Vm;f.A1=a;f.A0=b;f.AZ=d;f.AY=e;Fm(g,f);}}if(c!==null){c=c.fG;if(c!==null)b.lu(c,CU(d),CU(e));}}
function Kz(a,b,c,d){var e;e=b.dA;if(e>=c)b.dA=e+d|0;}
function AAD(a,b,c,d){var e,f,g,h;e=b.eL.b5();while(e.cy()){JJ(a,(e.b7()).eu,c,d);}e=b.fq.b5();while(e.cy()){f=e.b7();g=new RO;g.t9=a;EL(a,g,f,c,d);}h=b.hz.b5();while(h.cy()){e=h.b7();JJ(a,e.k4.eu,c,d);f=new RQ;f.zf=a;EL(a,f,e.kt,c,d);}b.eL.o9(new RN);b.fq.o9(new RM);b=b.cH.b5();while(b.cy()){AAD(a,b.b7(),c,d);}}
function JJ(a,b,c,d){var e;e=b.dA;if(e>=c)b.dA=e-d|0;}
function K$(){var a=this;D_.call(a);a.c5=0;a.b3=null;a.cX=0;a.A2=0.0;a.mO=0;}
function JI(){var a=new K$();Qj(a);return a;}
function AV$(a,b){return Q(HP,b);}
function Qj(a){var b;b=AGE(16);a.c5=0;a.b3=Q(HP,b);a.A2=0.75;S4(a);}
function AGE(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fr(a){var b;if(a.c5>0){a.c5=0;b=a.b3;AD6(b,0,b.data.length,null);a.cX=a.cX+1|0;}}
function S4(a){a.mO=a.b3.data.length*a.A2|0;}
function MG(a,b){return Z9(a,b)===null?0:1;}
function ABh(a){var b;b=new S5;b.ya=a;return b;}
function Cn(a,b){var c;c=Z9(a,b);if(c===null)return null;return c.cM;}
function Z9(a,b){var c,d;if(b===null)c=RI(a);else{d=b.go();c=QH(a,b,d&(a.b3.data.length-1|0),d);}return c;}
function QH(a,b,c,d){var e;e=a.b3.data[c];while(e!==null&&!(e.lD==d&&AHp(b,e.cQ))){e=e.cU;}return e;}
function RI(a){var b;b=a.b3.data[0];while(b!==null&&b.cQ!==null){b=b.cU;}return b;}
function MR(a){var b;if(a.ot===null){b=new P6;b.i5=a;a.ot=b;}return a.ot;}
function Ek(a,b,c){var d,e,f,g;if(b===null){d=RI(a);if(d===null){a.cX=a.cX+1|0;d=SY(a,null,0,0);e=a.c5+1|0;a.c5=e;if(e>a.mO)ABe(a);}}else{e=b.go();f=e&(a.b3.data.length-1|0);d=QH(a,b,f,e);if(d===null){a.cX=a.cX+1|0;d=SY(a,b,f,e);e=a.c5+1|0;a.c5=e;if(e>a.mO)ABe(a);}}g=d.cM;d.cM=c;return g;}
function SY(a,b,c,d){var e,f;e=new HP;Vg(e,b,null);e.lD=d;f=a.b3.data;e.cU=f[c];f[c]=e;return e;}
function AH_(a,b){var c,d,e,f,g,h,i,j;c=AGE(!b?1:b<<1);d=Q(HP,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b3.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.lD&b;j=h.cU;h.cU=e[i];e[i]=h;h=j;}f=f+1|0;}a.b3=d;S4(a);}
function ABe(a){AH_(a,a.b3.data.length);}
function Lj(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b3.data[0];while(e!==null){if(e.cQ===null)break a;b=e.cU;d=e;e=b;}}else{f=b.go();g=a.b3.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.lD==f&&AHp(b,e.cQ))){h=e.cU;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.cU=e.cU;else a.b3.data[c]=e.cU;a.cX=a.cX+1|0;a.c5=a.c5-1|0;}if(e===null)return null;return e.cM;}
function AHp(b,c){return b!==c&&!b.bH(c)?0:1;}
function Cu(){var a=this;B.call(a);a.v=null;a.bW=0;a.bE=0;}
function AH2(a){var b=new Cu();AVB(b,a);return b;}
function D9(a,b,c){var d=new Cu();AAo(d,a,b,c);return d;}
function AVB(a,b){AAo(a,b,0,0);}
function AAo(a,b,c,d){a.v=b;a.bW=c;a.bE=d;}
function Kn(a){return a.bE&3;}
function Jd(b,c){return (!b?0:2)+(!c?0:1)|0;}
function LV(a){return J(a.v);}
var Ns=G(K$);
function Y7(){var a=this;B.call(a);a.db=null;a.eX=0;}
var A5Y=null;function AFY(a){var b=new Y7();AGn(b,a);return b;}
function AGn(a,b){a.eX=0;a.db=b;}
function Qd(a,b){var c;if(b.eC)return b;b=B6(b.bn);while(true){if(!B$(b))return null;c=Qd(a,B_(b));if(c!==null)break;}return c;}
function Wy(a,b,c){var d,e,f,g;d=Nk(a,a.db,b);if(d===null)return;b=c.ci;e=b===null?A5Z:b.cH;f=c.bn;c=a.db;if(d===c){if(c.ci===null)c.ci=b;b=new Zl;b.xS=a;Fm(f,b);b=new Zk;b.t7=a;e.e9(b);b=a.db;b.bn=f;b.ci.cH=e;b.eC=0;return;}if(!Ex(f)){c=d.hc;if(c!==null){b=new WY;b.qQ=c;Fm(f,b);g=KV(c.bn,d);if(g==(-1))HV(c.bn,f);else{EF(c.bn,g);AHG(c.bn,g,f);}}}b=d.ci;if(b!==null){b=b.g7;c=new RT;c.r3=b;e.e9(c);g=KV(b.cH,d.ci);if(g==(-1))HV(b.cH,e);else{b.cH.pD(g);b.cH.ty(g,e);}}}
function Nk(a,b,c){var d,e,f,g;d=b.bT;if(d.bX==c.bX&&d.bV==c.bV?1:0){d=B6(b.bn);while(B$(d)){e=Nk(a,B_(d),c);if(e!==null)return e;}return b;}b=B6(b.bn);while(true){if(!B$(b))return null;d=B_(b);f=c.bX;g=c.bV;e=d.bT;if(e.bX<=f&&g<=e.bV?1:0){e=Nk(a,d,c);if(e!==null)break;}}return e;}
function AAi(a,b,c){BC(c,b.bT);b=B6(b.bn);while(B$(b)){AAi(a,B_(b),c);}}
function W2(a,b,c){a.eX=0;La(a,a.db,b,c);}
function La(a,b,c,d){var e;if(C_(b)<c)return;a:{if(Dk(b)>c){LI(b,d);Hh(b,d);b=B6(b.bn);while(B$(b)){La(a,B_(b),c,d);}}else{if(!Mx(b,c)){if(a.eX)break a;if(C_(b)!=c)break a;}Hh(b,d);if(Dk(b)==c&&a.eX)LI(b,d);e=B6(b.bn);while(B$(e)){La(a,B_(e),c,d);}if(!a.eX){b.eC=1;a.eX=1;}}}}
function Up(a,b,c){a.eX=0;MB(a,a.db,b,c);}
function MB(a,b,c,d){var e,f,g,h,i,j;if(C_(b)<c)return;e=Dk(b);f=c+d|0;if(e>f){e= -d|0;LI(b,e);Hh(b,e);g=B6(b.bn);while(B$(g)){MB(a,B_(g),c,d);}b.bn=VS(a,b.bn);}else{h=b.bT;if(c<=h.bX&&h.bV<=f?1:0){if(b===a.db){LP(b,0);MA(b,0);h=b.ci;if(h!==null)h.cH.i0();}else{LP(b,(-1));MA(b,(-1));h=b.ci;if(h!==null){AC0(h);b.ci=null;}}Ip(b.bn);}else{e=Mx(b,c);f=Mx(b,f);if(e&&f)Hh(b, -d|0);else if(e)MA(b,c);else{if(!f)return;LP(b,c);Hh(b, -d|0);}h=B6(b.bn);while(B$(h)){MB(a,B_(h),c,d);}h=Ti(b.bn);g=Xn(0);i=new Rs;j=new ABo;j.Ez
=i;j.ki=g;while(AA4(h,j)){}if(!j.ki.nQ&&!a.eX)b.eC=1;else a.eX=1;b.bn=VS(a,b.bn);}}}
function VS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BH();d=null;e=A5Y;f=b.cD;g=b.m;if(e===null)e=A4D;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}KP(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bZ=b.bZ+1|0;b=B6(b);while(B$(b)){m=B_(b);if(Dk(m)==C_(m))continue;if(!m.eC){if(d!==null){BC(c,d);d=null;}BC(c,m);}else if(d===null)d=m;else{n=ASj(KE(Be(Dk(d),Dk(m)),Bd(C_(d),C_(m)),d.bT.fD),d.hc,d.ci);n.eC=1;d=m.ci;if(d===null)d=n;else{AC0(d);d=n;}}}if(d!==null)BC(c,d);return c;}
function ACu(a,b,c,d){var e,f,g,h,i,j;if((C_(c)-Dk(c)|0)<43)e=Cr(d,Dk(c),C_(c));else{e=Cr(d,Dk(c),Dk(c)+20|0);f=Cr(d,C_(c)-20|0,C_(c));g=new K;M(g);H(H(H(g,e),C(167)),f);e=L(g);}e=ABk(e,C(205),C(248));f=Bx();g=Cv(c);h=new K;M(h);i=U(h,b);BM(i,32);g=H(i,g);BM(g,9);H(g,e);Bl(f,L(h));c=B6(c.bn);j=b+1|0;while(B$(c)){ACu(a,j,B_(c),d);}}
function AGu(){A5Y=new Uf;}
function AJ9(){var a=this;B.call(a);a.bX=0;a.bV=0;a.fD=0;}
function KE(a,b,c){var d=new AJ9();AVy(d,a,b,c);return d;}
function AVy(a,b,c,d){a.bX=b;a.bV=c;a.fD=d;}
function ARA(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.bX==c.bX&&a.bV==c.bV&&a.fD==c.fD?1:0;}return 0;}
function AUN(a,b){var c;b=b;c=BK(a.bX,b.bX);if(!c)c=BK(b.bV,a.bV);return c;}
var Uf=G();
function AO0(a,b,c){var d;b=b;c=c;b=b.bT;c=c.bT;d=BK(b.bX,c.bX);if(!d)d=BK(c.bV,b.bV);return d;}
function YF(){var a=this;B.call(a);a.bT=null;a.hc=null;a.bn=null;a.ci=null;a.eC=0;}
function ASj(a,b,c){var d=new YF();AFX(d,a,b,c);return d;}
function AFX(a,b,c,d){a.eC=0;a.bT=b;a.hc=c;a.bn=BH();a.ci=d;}
function AGL(b){return YM(b,null);}
function YM(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Ba(b);e=Ba(b);f=Ba(b);g=Ba(b);h=Ba(b);i=KE(d,e,f);j=new YF;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AFX(j,i,null,l);m=0;while(m<g){l=YM(b,c);l.hc=j;BC(j.bn,l);m=m+1|0;}return j;}
function ADL(b,c,d){var e,f,g,h,i;a:{e=b.bT;f=b.bn;g=e.bX;h=e.bV;i=e.fD;Bq(c,g);GU(c,h,i);Bq(c,f.m);if(d!==null){e=b.ci;if(e!==null&&ABU(d,e)){g=(N7(d,b.ci)).bp;break a;}}g=(-1);}Bq(c,g);b=B6(f);while(B$(b)){ADL(B_(b),c,d);}}
function Dk(a){return a.bT.bX;}
function C_(a){return a.bT.bV;}
function LP(a,b){a.bT.bX=b;}
function MA(a,b){a.bT.bV=b;}
function LI(a,b){var c;c=a.bT;c.bX=c.bX+b|0;}
function Hh(a,b){var c;c=a.bT;c.bV=c.bV+b|0;}
function Mx(a,b){return Dk(a)<=b&&b<C_(a)?1:0;}
function AKZ(a){var b,c,d,e,f;b=a.bT;c=b.bX;d=b.bV;e=b.fD;b=new K;M(b);BM(b,40);BM(U(H(U(H(U(b,c),C(37)),d),C(37)),e),41);b=L(b);c=a.eC;f=new K;M(f);Jm(H(H(f,b),C(37)),c);return L(f);}
function ALG(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BS(a.bT,c.bT)&&BS(a.bn,c.bn)?1:0;}return 0;}
var Jf=G(0);
function GN(){var a=this;B.call(a);a.cQ=null;a.cM=null;}
function A50(a,b){var c=new GN();Vg(c,a,b);return c;}
function Vg(a,b,c){a.cQ=b;a.cM=c;}
function AVc(a,b){var c,d;if(a===b)return 1;if(!I4(b,Jf))return 0;a:{b:{c:{d:{c=b;b=a.cQ;if(b!==null){if(!b.bH(c.cQ))break c;else break d;}if(c.cQ!==null)break c;}b=a.cM;if(b!==null){if(!b.bH(c.cM))break c;else break b;}if(c.cM===null)break b;}d=0;break a;}d=1;}return d;}
function HP(){var a=this;GN.call(a);a.lD=0;a.cU=null;}
function Np(){var a=this;Lf.call(a);a.xh=null;a.qM=null;}
function ADP(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.xh;e=0;f=0;g=a.qM;a:{while(true){if((e+32|0)>f&&D5(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Cg(b)+j|0,i.length);O1(b,d,j,f-j|0);e=0;}if(!D5(c)){k=!D5(b)&&e>=f?A5l:A5k;break a;}i=g.data;j=Be(Cg(c),i.length);l=new Wu;l.pT=b;l.xH=c;k=AE5(a,d,e,f,g,0,j,l);e=l.ub;j=l.u7;if(k===null){if(!D5(b)&&e>=f)k=A5l;else if(!D5(c)&&e>=f)k=A5k;}ACw(c,g,0,j);if(k!==null)break;}}Fp(b,b.Y-(f-e|0)|0);return k;}
var Qc=G(Np);
function AE5(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(NT(h,2))break a;i=A5k;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ob(l)){if((f+3|0)>g){j=j+(-1)|0;if(NT(h,3))break a;i=A5k;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CP(l)){i=Eo(1);break a;}if
(j>=d){if(D5(h.pT))break a;i=A5l;break a;}c=j+1|0;m=k[j];if(!Dg(m)){j=c+(-2)|0;i=Eo(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(NT(h,4))break a;i=A5k;break a;}k=e.data;o=EI(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.ub=j;h.u7=f;return i;}
var IY=G(Eq);
var Oz=G();
function ASV(a,b){return b.text();}
function OB(){var a=this;B.call(a);a.sR=null;a.sQ=null;}
function ASo(a,b){var c,d,e,f;c=a.sR;d=a.sQ;e=b.length;f=new O5;f.zv=b;c.j(AMX((AJx(e,f)).jW,ABa(d)));}
var OA=G();
function AUa(a,b){AGD(b);}
function IO(){var a=this;B.call(a);a.br=null;a.En=null;a.dC=null;a.jt=null;a.kQ=null;a.dX=null;a.ky=null;a.AE=null;a.o$=null;a.oi=null;}
function A51(a,b,c,d,e,f){var g=new IO();Lv(g,a,b,c,d,e,f);return g;}
function Iv(){var b,c,d,e,f,g,h,i,j;b=new IO;c=new JZ;d=new Hf;FC();KJ(d,A52);Mf(c,d,BV(A5J),BV(A53),BV(A54),BV(A5J),BV(A55),BV(A56),BV(A57),BV(A58),BV(A59),BV(A5$));e=AIB(S(C(249)));AEq();f=(A5_.hi()).data;g=f.length;h=Q(Kc,g);i=h.data;j=0;while(j<g){i[j]=f[j].nr;j=j+1|0;}Lv(b,c,e,h,AJg(S(C(250)),S(C(251)),S(C(252)),S(C(253))),E_(),ADv(S(C(254)),S(C(255)),S(C(256)),S(C(257))));return b;}
function L1(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IO;c=new JZ;d=new Hf;AM6();KJ(d,A6a);Mf(c,d,BV(A6b),BV(A6c),BV(A6d),BV(A6b),BV(A6e),BV(A6f),BV(A6g),BV(A6h),BV(A6i),BV(A6j));e=AIB(S(C(258)));Tj();f=(A6k.hi()).data;g=f.length;h=Q(Kc,g);i=h.data;j=0;while(j<g){i[j]=f[j].kN;j=j+1|0;}k=AJg(S(C(259)),S(C(260)),S(C(261)),S(C(262)));l=new IP;d=new IX;ATL();m=A6l;Og(d,m,A6m,A6n,A6o,A6p,m);LF(l,d,AGd(),AGH(S(C(263)),S(C(264)),S(C(265))),AGd(),AG5(1,0.17499999701976776),A6q,A6r);Lv(b,c,e,h,k,l,ADv(S(C(254)),S(C(255)),
S(C(256)),S(C(266))));return b;}
function Lv(a,b,c,d,e,f,g){var h;h=d.data;a.ky=DK(C(166),17.0);a.AE=DK(C(155),15.0);a.o$=DK(C(166),15.0);a.oi=DK(C(14),15.0);a.br=b;a.En=c;a.jt=d;a.kQ=e;if(h.length>=15){a.dC=f;a.dX=g;return;}b=new BR;X(b);N(b);}
function V$(a,b){if(b===null)b=a.br.d$;return b;}
function Kg(){var a=this;CM.call(a);a.dO=null;a.nq=null;}
function A2F(a){var b=new Kg();AGT(b,a);return b;}
function AGT(a,b){var c,d,e,f;KC(a,b,0);c=PL(a.bb);a.nq=c;d=KW(a.q,c);a.dO=d;MH(a.q,d);c=b.p.bF;d=new XR;d.rd=a;Bc(c,d);c=b.p.bF;d=new HL;e=a.dO;BD(e);f=new XP;f.Ap=e;Il(d,b,f);Bc(c,d);So(a.dO,b.p,0);b=b.p.c2;c=new XQ;c.wW=a;Bc(b,c);Hj(a);}
function AWs(a,b){if(JY(a.bb,b))LH(a.dO);}
function AZU(a,b){return IR(a.dO,b);}
function ANG(a){Hs(a);Ig(a.dO);JE(a.bb);}
function A03(a){return Gs(0);}
function AKu(a,b,c){var d;Iu(a,b,c);d=a.dO;Mc(d,d.i,b,c);}
function AVx(a,b){BD(b);Ik(a.nq,b);Hx(a.dO,b);}
function AIc(a,b){if(b.bl!=121)return 0;return 1;}
function ADR(a,b){var c,d,e;if(DJ(a.q,a.dO)){c=a.nq;b=b.h;d=a.dO;e=new Rg;e.tm=a;GE(c,b,d,a,d,a,e);}return 1;}
function AHg(){var a=this;Ct.call(a);a.xJ=null;a.ou=null;a.jS=null;a.eb=null;a.lt=null;a.hd=null;a.eq=null;a.jg=null;a.pQ=null;a.iK=null;a.pz=null;a.pA=null;a.oR=null;a.x4=null;a.BG=null;a.sb=0;}
function A2R(a){var b=new AHg();AXk(b,a);return b;}
function AXk(a,b){var c,d,e,f;Eg(a,b);c=(Iv()).br.d$;a.xJ=c;a.ou=AJ4(c);a.jS=new Bg;a.eb=KA();a.lt=KA();a.hd=Sp(0,0,3,3);a.eq=H5(0,0,300,300);a.jg=AWb();d=Q(BL,4);e=d.data;e[0]=C(210);e[1]=C(176);e[2]=C(226);e[3]=C(225);a.pQ=d;a.iK=Q(J9,e.length);c=b.p.bO;f=new S$;f.fj=a;Bc(c,f);c=b.p.bF;f=new Yf;f.A3=a;Bc(c,f);c=b.p.n0;f=new Ye;f.rH=a;Bc(c,f);c=b.p.gw;f=new Yd;f.Cr=a;Bc(c,f);c=b.p.lR;f=new Yc;f.Dg=a;Bc(c,f);c=b.p.c2;f=new Yb;f.DL=a;Bc(c,f);b=b.p.ff;c=new Ya;c.zO=a;Bc(b,c);a.pz=ABL(a,1);a.pA=ABL(a,0);Ru(a,a.eb,
a.pz);Ru(a,a.lt,a.pA);a.oR=ACX(a,0);a.x4=ACX(a,1);FJ(a.eq,a.oR);FS(a.eq);Ht(a.eq,Dt(169,183,198));Fb(a.eq,a.xJ);Cw(a.eb.W,1.0,1.0,1.0,1.0);Fb(a.eb,a.eq.bk);BO(a.hd.bk,a.ou);}
function Ru(a,b,c){FJ(b,c);FS(b);}
function RS(a,b){Io(DN(),0.5+DN()*0.5,0.5+DN()*0.5,1.0,b.W);}
function ABL(a,b){var c,d;c=D1(a.B.O,200,100,b);Ho(c,C(267),11.0);BW(c,C(268),0.0,20.0);JU(c,255,0,0);BW(c,C(268),0.25,40.0);JU(c,0,255,0);BW(c,C(268),0.5,60.0);JU(c,0,0,255);BW(c,C(268),0.75,80.0);d=CT(a.B.O);CK(d,c);Eu(c);return d;}
function ACX(a,b){var c,d,e,f;c=D1(a.B.O,255,100,b);Ho(c,C(166),10.0);d=Bx();e=$rt_str(c.c$.font);f=new K;M(f);H(H(f,C(269)),e);Bl(d,L(f));Ej(c,C(270));BW(c,C(270),0.0,20.0);BW(c,C(270),0.25,40.0);BW(c,C(270),0.5,60.0);BW(c,C(270),0.75,80.0);e=CT(a.B.O);CK(e,c);Eu(c);return e;}
function AKN(a,b){var c;a.sb=a.sb+1|0;c=b/5.0;Io(c-(c|0),1.0,1.0,1.0,a.hd.W);return AAb(a.jg,b);}
function AMx(a){var b,c,d,e,f,g,h,i;b=a.B.O;EB(b,a.ou);c=a.iK.data;d=c.length;e=0;while(e<d){Y0(c[e],b,0,0);e=e+1|0;}f=a.eq;g=f.u;g.b=(a.jS.b-f.t.b|0)-5|0;g.a=0;B9(b,0);h=0;while(h<7){f=a.eq;Ez(f,b,a.oR,Bb(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eq;f.u.b=(a.jS.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.x4;f=a.eq;f.u.a=Bb(h,10+((10*f.t.a|0)/15|0)|0)+5|0;Sc(f,b,g,1);h=h+1|0;}Sc(a.eb,b,a.pz,1);B9(b,1);g=a.lt;f=a.pA;i=g.u;h=i.a;d=i.b;g=g.t;Gl(b,b.kx);Gu(b.kx,b.X,h,d,g,b.c3);NH(b.kx,b.X,f);FV(b);B9(b,0);f=
a.BG;if(f!==null)Vb(a.hd,b,f,0,0,0.0);ABc(a.jg,b,new Bg);MI(b,C(271));}
function AOI(a,b,c){var d,e,f,g,h,i,j,k;d=Bx();e=Cv(b);f=new K;M(f);H(H(f,C(272)),e);Bl(d,L(f));d=Bx();f=new K;M(f);EA(H(f,C(273)),c);Bl(d,L(f));g=Cf(30.0,c);h=Cf(10.0,c);i=0;while(true){j=a.iK.data;if(i>=j.length)break;k=1+i|0;j[i]=Sp(Bb(h,k)+Bb(g,i)|0,g,g,g);RS(a,a.iK.data[i]);i=k;}V(a.hd.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.eb;V(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);V(a.lt.u,(b.a/2|0)+10|0,50);Cs(a.jS,b);}
function We(a,b){var c,d,e,f,g;c=Bx();d=!b.jv?C(274):C(275);e=b.d9;f=b.bl;g=b.yF;b=new K;M(b);Jm(H(U(H(H(H(b,d),e),C(276)),f),C(277)),g);Bl(c,L(b));return 0;}
function AAh(){var a=this;Ct.call(a);a.DN=null;a.kP=null;a.iM=null;a.hV=null;a.de=null;a.dP=null;a.mG=null;a.mv=null;a.jl=0;a.iu=null;a.it=null;}
function QI(a,b,c){FJ(b,c);FS(b);}
function ADf(a,b,c,d,e,f){var g,h;g=D1(f,c,120,b);Cl(g,e);e=!b?C(278):C(279);h=new K;M(h);H(H(H(h,e),d),C(153));d=L(h);BW(g,d,0.0,20.0);BW(g,d,0.25,40.0);BW(g,d,0.5,60.0);BW(g,d,0.75,80.0);BW(g,d,1.0,100.0);h=CT(f);CK(h,g);Eu(g);return h;}
function AP7(a,b){return 0;}
function AUF(a){var b,c,d,e,f,g,h,i;b=a.B.O;EB(b,a.kP);B9(b,0);c=a.iM;d=c.b;e=a.hV;f=d-e.b|0;g=c.a-e.a|0;Bs(b,0,0,e,a.de.bk);Bs(b,g,0,a.hV,a.dP.bk);Bs(b,0,f,a.hV,a.de.W);Bs(b,g,f,a.hV,a.dP.W);c=a.de;e=c.u;h=e.b;i=((a.iM.b*3|0)/4|0)-(c.t.b/2|0)|0;Iq(c,b,e.a,h,a.iu,0,1);c=a.de;Iq(c,b,c.u.a,i,a.iu,1,1);c=a.dP;Iq(c,b,c.u.a,h,a.it,0,0);e=a.dP;Iq(e,b,e.u.a,i,a.it,1,0);MI(b,C(271));}
function AVO(a,b,c){var d,e;Cs(a.iM,b);V(a.hV,b.a/2|0,b.b/2|0);d=a.iM.b/4|0;e=a.de;d=d-(e.t.b/2|0)|0;V(e.u,(b.a/4|0)-(a.jl/2|0)|0,d);V(a.dP.u,((b.a*3|0)/4|0)-(a.jl/2|0)|0,d);}
function WM(){var a=this;CM.call(a);a.xG=null;a.e1=null;a.dy=null;a.n2=null;}
function AOd(a,b,c){var d;d=F9(a.q,a.n2);Jv(a.e1,d,a.q);Jv(a.dy,d,a.q);}
function Q$(b){return IT(b,AGi());}
function IT(b,c){var d;d=Lo();N0(d,M7(b,JX(c,25)),!b?null:IT(b-1|0,c));N0(d,M7(b,JX(c,20)),!b?null:IT(b-1|0,c));N0(d,M7(b,JX(c,15)),!b?null:IT(b-1|0,c));N0(d,M7(b,JX(c,10)),!b?null:IT(b-1|0,c));return GQ(d);}
function M7(b,c){var d;if(b){d=new K;M(d);H(H(U(d,b),C(29)),c);c=L(d);}return c;}
function N0(b,c,d){if(d!==null)Fz(b,c,d);else{d=new UB;d.rt=c;DY(b,c,d);}}
function AM9(a,b,c){var d,e;Iu(a,b,c);b=a.q.b0;d=Ev(a.e1);e=Ev(a.dy);MZ(a.e1,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);MZ(a.dy,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AVt(a){var b,c,d,e,f,g,h,i;Hs(a);b=a.B.O;B9(b,1);c=a.xG;d=a.q;e=d.b0;V(c.ni,e.a,Cf(2.0,d.cb));V(c.nL,Cf(2.0,d.cb),e.b);FC();f=A59;g=d.b4;h=e.b/2|0;i=c.ni;Bs(g,0,h-(i.b/2|0)|0,i,f);g=d.b4;h=e.a/2|0;c=c.nL;Bs(g,h-(c.a/2|0)|0,0,c,f);LZ(a.e1,a.q);LZ(a.dy,a.q);JE(a.bb);B9(b,0);}
function AOL(a,b){var c,d;c=Nx(a.e1,b.h,a.q.cP);d=Nx(a.dy,b.h,a.q.cP);return !c&&!d?0:1;}
function ALk(a,b,c,d){var e,f;e=NV(a.e1,b.h,c,d);f=NV(a.dy,b.h,c,d);return !e&&!f?0:1;}
function ZR(){CM.call(this);this.kh=null;}
function AMn(a,b,c){if(b===0.0)Yn(a);}
function Yn(a){var b,c,d,e,f,g,h,i;b=a.kh;if(b!==null){Km(a.bb,b);Ny(b);}b=(Iv()).dC;c=A31(a.q,new Un);d=DK(C(155),14.0);e=AOc();f=0;while(f<300){g=Dh(f);h=new R4;h.z8=C(280);h.z5=g;h.z6=C(281);Vw(e,C(280),g,C(281),h);f=f+1|0;}Wo(c,ACi(e));Vr(c,b,d);g=ADA(a.q);i=Gw(c,a.q);I8(i,b.my,b.og);KY(g,i);GP(g,b);FM(g,C(144));a.kh=g;Gz(a.bb,g);P$(a);}
function ALC(a,b,c){Iu(a,b,c);P$(a);}
function P$(a){var b,c,d;b=a.q.b0;EU(a.kh,BJ((b.a*2|0)/10|0,(b.b*4|0)/10|0),BJ((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.kh;b=AG4(c.V.k);d=new K;M(d);H(H(d,C(282)),b);FM(c,L(d));}
function Wb(){var a=this;HF.call(a);a.lS=null;a.hL=null;a.f2=null;a.jV=null;a.ro=null;a.jQ=null;a.hY=null;a.hw=null;a.ll=0;a.hK=0;}
function Pf(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.hL.m>0){d=DN();e=a.hL;f=d*(e.m-1|0)|0;e=EF(e,f);EF(a.f2,f);f=a.hK;g=e.t;a.hK=f-Bb(g.a,g.b)|0;IQ(a.lS,e.dq);}c=c+1|0;}}
function LN(a,b){var c,d,e,f,g,h,i,j;c=J7(a.q);Cl(c,a.jV);d=0;while(d<b){e=JX(a.jQ,1+(DN()*19.0|0)|0);f=KA();g=f.dq;h=a.lS;BD(c);i=new QD;i.tv=c;BO(g,Kf(h,e,i));(UA(DN(),1.0,1.0,f.bk)).bB=0.5;h=f.u;g=f.dq;V(h,g.bm|0,g.bs|0);h=f.t;g=f.dq;V(h,g.be|0,g.bB|0);BC(a.f2,e);BC(a.hL,f);j=a.hK;h=f.t;a.hK=j+Bb(h.a,h.b)|0;d=d+1|0;}a.hw=Mv(a.lS);}
function AZs(a){var b,c,d,e,f,g,h,i;Hs(a);b=a.B.O;B9(b,1);c=a.q.b4;if(a.f2.m){d=a.hw;d=HB(c,d.a,d.b);Cl(d,a.jV);e=a.jV.ef;Bs(c,0,0,a.hw,a.ro);f=0;while(f<a.f2.m){g=Bw(a.hL,f);h=Bw(a.f2,f);g=g.dq;BW(d,h,g.bm,g.bs+e);f=f+1|0;}g=a.hY;if(!(g!==null&&BZ(g)==a.hw.a&&Dj(a.hY)==a.hw.b))a.hY=BY(a.hY,CT(c));CK(a.hY,d);Eu(d);i=0;while(i<a.f2.m){d=Bw(a.hL,i);Ht(d,CA(0));Ez(d,c,a.hY,0,0);i=i+1|0;}}B9(b,0);}
function AKG(a,b){var c,d;if(a.ll){c=a.hw;d=Be(Bb(c.a,c.b),2211840);if(a.hK/d<=0.7)LN(a,Gm(a.jQ,5));else Pf(a,Gm(a.jQ,5));}return a.ll;}
function R$(){var a=this;Ct.call(a);a.er=null;a.hO=null;a.iL=null;a.ol=null;a.eV=0;a.tS=0;a.rp=null;a.l6=0;a.wk=0;a.wK=null;a.y2=null;}
function AKt(a){var b,c;b=a.eV;c=new K;M(c);U(H(c,C(283)),b);$rt_globals.console.info($rt_ustr(L(c)));EB(a.er,a.rp);J_(a.iL,a.eV,0,Hm(a),5000,a.ol.a,20);B9(a.er,1);UI(a.iL,a.er);B9(a.er,0);b=a.eV;c=new K;M(c);U(H(c,C(283)),b);$rt_globals.console.info($rt_ustr(L(c)));AAK(a.hO,a.eV/a.l6|0,a.er);Z7(a.hO,a.eV,Hm(a),a.y2,a.er);}
function ATo(a,b,c){a.ol=b;RL(a.hO,BJ(0,0),50,Hm(a),c);Se(a.hO,a.er,0,Hm(a));}
function T4(a){return 5000-Hm(a)|0;}
function Hm(a){return Be(a.tS,a.ol.b);}
function Do(){var a=this;Ct.call(a);a.pq=null;a.gE=null;a.p5=0.0;}
function A6s(a){var b=new Do();HH(b,a);return b;}
function HH(a,b){Eg(a,b);a.pq=AHT(0,0,64);a.gE=new Bg;Wl(b.bU,JG(BI(a)));}
function Zo(a){EB(a.B.O,a.pq);}
function R6(a,b,c){Cs(a.gE,b);a.p5=c;}
var QG=G(Do);
var Wt=G(CM);
function G9(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.B.bU;f=new QC;f.Cd=a;f.s$=b;g=Q(B,1);h=g.data;i=BN(1);i.data[0]=b;h[0]=i;CR(e,f,C(284),g);d=d+1|0;}}
function ACD(a,b){var c,d,e,f,g,h;c=b.data;d=Bx();e=Cv(c[0]);f=new K;M(f);H(H(f,C(285)),e);Bl(d,L(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((KR(b,1)).ix));d=Bx();e=Cv(c[1]);if(b===null)f=C(23);else{f=new K;M(f);BU(f,C(36));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BU(f,C(37));U(f,c[g]);g=g+1|0;}BU(f,C(38));f=L(f);}h=new K;M(h);H(H(H(H(h,C(286)),e),C(287)),f);Bl(d,L(h));}
function VP(){var a=this;Do.call(a);a.eT=null;a.gl=null;a.m$=null;a.zR=null;a.pK=null;}
function ANR(a,b){b=b/5.0;Io(b-(b|0),1.0,1.0,1.0,a.gl.W);return 0;}
function AVi(a){Zo(a);Ez(a.eT,a.B.O,a.zR,0,0);Vb(a.gl,a.B.O,a.m$,0,0,0.0);MI(a.B.O,C(271));}
function A01(a,b,c){var d,e,f;R6(a,b,c);V(a.gl.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.eT;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function R8(){var a=this;Do.call(a);a.gH=null;a.qq=null;a.l3=null;a.kb=null;a.jz=null;}
function A1v(a){var b,c,d,e,f,g;Zo(a);b=a.B.O;c=a.kb;LD(b,c.a,c.b,a.jz);b=a.gH;c=a.qq;d=a.gE;e=a.B.O;f=0;while(true){g=0;while(true){Ez(b,e,c,g,f);g=g+BZ(c)|0;if(g>=d.a)break;}f=f+Dj(c)|0;if(f>=d.b)break;}F5(a.B.O);}
function ANB(a,b,c){R6(a,b,c);V(a.jz,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function ZG(){var a=this;Ct.call(a);a.eA=null;a.n9=null;a.gp=null;a.b_=null;a.e8=0;a.ir=null;a.fs=0;a.CG=20;a.Eq=11;a.Dc=220;a.lJ=null;a.DX=5000;a.ia=0;a.gA=null;}
function ASq(a){var b,c,d,e,f,g,h;b=a.ir;c=a.fs;d=a.lJ;J_(b,c,0,d.b,5000,d.a,20);B9(a.eA,1);UI(a.ir,a.eA);if(a.b_===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BW(a.n9,Dh(e),0.0,c);}b=CT(a.eA);a.b_=b;CK(b,a.n9);}if(a.fs<=a.e8)while(true){f=a.e8;if(f<=a.fs)break;a.e8=f-20|0;b=a.gp;g=a.ia-1|0;a.ia=g;BW(b,Dh(g),0.0,20.0);JC(a.b_,a.gp,0,a.e8%220|0);EK(a.gp);}else while(a.e8<(a.fs-20|0)){b=a.gp;g=a.ia+1|0;a.ia=g;BW(b,Dh((g+11|0)-1|0),0.0,20.0);JC(a.b_,a.gp,0,a.e8%220|0);EK(a.gp);a.e8=a.e8+20|0;}b=H5(0,0,BZ(a.b_),Dj(a.b_));Ir(b,
0,0,BZ(a.b_),Dj(a.b_));Ht(b,a.gA.data[0]);Fb(b,a.gA.data[1]);Ez(b,a.eA,a.b_,400,0);g=a.fs%220|0;f=Be(Dj(a.b_)-g|0,200);d=H5(0,0,BZ(a.b_),f);Ir(d,0,g,BZ(a.b_),f);Ht(d,a.gA.data[0]);Fb(d,a.gA.data[1]);Ez(d,a.eA,a.b_,0,0);h=H5(0,f,BZ(a.b_),(Dj(a.b_)-f|0)-20|0);Ir(h,0,0,BZ(a.b_),(Dj(a.b_)-f|0)-20|0);Ht(h,a.gA.data[1]);Fb(h,a.gA.data[0]);Ez(h,a.eA,a.b_,0,0);}
function AVv(a,b,c){Cs(a.lJ,b);}
function AY9(a,b){return 0;}
function Zg(a){return 5000-a.lJ.b|0;}
function Ka(){Do.call(this);this.d6=0;}
function YZ(a){var b,c;b=a.B.bU;c=new TC;c.wI=a;Q7(b,c,VR(a));}
function P8(a){var b,c,d,e;b=a.d6+1|0;a.d6=b;c=JG(F(Ka));d=new K;M(d);H(H(U(H(d,C(288)),b),C(29)),c);e=L(d);c=a.B.bU;d=new U4;d.wR=e;SQ(c,e,d,VR(a));}
function VR(a){var b;b=new Yi;b.AM=a;return b;}
function AOy(a,b,c,d){a:{switch(c){case 0:break;case 2:P8(a);break a;default:break a;}YZ(a);}return 1;}
function RV(){var a=this;Do.call(a);a.tn=null;a.f8=null;a.ld=null;a.oL=null;a.uR=null;}
function AS2(a){var b,c,d,e,f,g,h;if(a.ld===null){b=a.B.O;c=a.uR;c=Th(b,c.hW,c.gG,a.p5);Cl(b.cd,c);d=CV(Ej(b.cd,C(289)));e=Bx();f=c.oq;g=new K;M(g);EA(H(g,C(290)),f);Bl(e,L(g));h=MX(c,1.1799999475479126);e=Bx();g=new K;M(g);U(H(U(H(g,C(291)),d),C(201)),h);Bl(e,L(g));e=HB(b,d,h);a.oL=e;Cl(e,c);BW(a.oL,C(289),0.0,c.ef);b=CT(b);a.ld=b;CK(b,a.oL);FJ(a.f8,a.ld);FS(a.f8);b=a.f8.bk;FC();BO(b,A5J);BO(a.f8.W,A6t);}b=a.B.O;EB(b,a.tn);c=a.f8;e=c.u;g=a.gE;d=g.a;c=c.t;V(e,(d-c.a|0)/2|0,(g.b-c.b|0)/2|0);Ez(a.f8,b,a.ld,0,
0);}
function GX(){var a=this;Ct.call(a);a.ug=null;a.ch=null;a.d3=null;a.df=null;a.fb=null;a.ez=null;}
function Ol(a,b){var c,d;Eg(a,b);a.ug=CA(20);a.ch=RR();a.d3=new Bg;a.df=new Bg;a.fb=new Bg;a.ez=new Bg;c=b.p.bF;d=new ABj;d.Cw=a;Bc(c,d);Bc(b.p.bO,a);b=a.ch.bk;FC();BO(b,A5J);BO(a.ch.W,A6t);}
function AEs(a){var b,c,d;b=a.B.O;EB(b,a.ug);c=a.ch;d=c.u;Bs(b,d.a,d.b,c.t,c.bk);B9(b,1);c=a.ch;d=c.u;ADo(b,d.a,d.b,c.t,a.d3,a.df,a.fb,a.ez,c.W);B9(b,0);}
function AXh(a,b){return 0;}
var SB=G(GX);
function AYW(a,b,c){var d,e,f;d=a.ch;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);V(a.d3,0,0);V(a.df,Be(b.a,b.b),Be(b.a,b.b));b=a.fb;d=a.d3;V(b,d.a,d.b+20|0);b=a.ez;d=a.df;V(b,d.a,d.b+40|0);}
function AZR(a,b){var c,d,e;Cs(a.d3,b.h);b=a.df;c=a.ch;d=c.u;e=d.a;c=c.t;V(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fb;c=a.d3;V(b,c.a,c.b+20|0);b=a.ez;c=a.df;V(b,c.a,c.b+40|0);return 0;}
function SA(){var a=this;GX.call(a);a.fP=null;a.f9=null;}
function A1c(a,b){var c;c=a.df;b=b.h;c.b=b.b-50|0;a.ez.b=b.b+100|0;return 1;}
function AMk(a){var b,c,d,e,f,g,h;b=Bd(a.d3.a,a.fb.a);c=Be(a.df.a,a.ez.a);d=Be(a.d3.b,a.df.b)-50|0;e=Bd(a.fb.b,a.ez.b)+50|0;Ha(a.ch,b,d,c-b|0,e-d|0);AEs(a);f=a.ch.u.a-10|0;ZI(a,a.B.O,10,f,a.d3,a.fb);g=a.ch;h=g.u.a+g.t.a|0;ZI(a,a.B.O,h,f,a.df,a.ez);}
function ZI(a,b,c,d,e,f){var g;V(a.fP,c,a.ch.u.b);V(a.f9,d,e.b-a.ch.u.b|0);g=a.fP;Bs(b,g.a,g.b,a.f9,a.ch.bk);V(a.fP,c,e.b);V(a.f9,d,f.b-e.b|0);e=a.fP;Bs(b,e.a,e.b,a.f9,a.ch.W);V(a.fP,c,f.b);e=a.f9;g=a.ch;V(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.fP;Bs(b,e.a,e.b,a.f9,a.ch.bk);}
function AK7(a,b,c){}
function Xd(){var a=this;CM.call(a);a.Ds=3;a.xv=null;a.j_=null;a.j$=null;}
function AZW(a,b,c){if(b===0.0)ABQ(a);}
function ABQ(a){var b;YV(a,a.j_);YV(a,a.j$);a.j_=P9(a,0.5,0,C(292));a.j$=P9(a,1.0,1,C(293));Gz(a.bb,a.j_);Gz(a.bb,a.j$);b=a.q.b0;EU(a.j$,BJ((b.a*2|0)/10|0,(b.b*2|0)/10|0),BJ((b.a*7|0)/10|0,(b.b*7|0)/10|0));EU(a.j_,BJ(b.a/10|0,b.b/10|0),BJ((b.a*6|0)/10|0,(b.b*6|0)/10|0));}
function YV(a,b){if(b!==null){Km(a.bb,b);Ny(b);}}
function P9(a,b,c,d){var e,f,g;e=ADA(a.q);f=new PM;g=new Rl;g.sq=e;g.sp=d;Lz(f);f.lO=new B0;f.pc=new Bg;f.xd=g;f.rq=b;if(c){d=Gw(f,a.q);I8(d,A6u,A6v);f=d;}KY(e,f);GP(e,E_());ZC(e,a.xv,3.0);return e;}
function Dv(){CM.call(this);this.g5=null;}
function A3e(a){var b=new Dv();H1(b,a);return b;}
function H1(a,b){G5(a,b);Bc(a.q.ei,a);BO(a.dL,CA(43));}
function AU3(a){return ATf();}
function AOS(a){return 1;}
function NJ(a,b){GP(a.g5,b);}
function Xm(a,b){var c,d,e;c=a.q.b0;d=!a.oS()?0:UQ(b.Q);e=c.b-d|0;EU(b,BJ(c.a/20|0,d+(e/20|0)|0),BJ((c.a*9|0)/10|0,(e*9|0)/10|0));}
function AZC(a,b,c){if(b===0.0){a.g5=A37(a.q,a.ho());NJ(a,E_());if(a.oS())FM(a.g5,Xo(BI(a)));Gz(a.bb,a.g5);a.kj(a.g5);}}
function P5(){var a=this;Dv.call(a);a.lK=null;a.ex=null;a.Dv=null;}
function AUZ(a,b){return IR(a.ex,b);}
function ALF(a){var b;b=KW(a.q,a.lK);a.ex=b;a.Dv=So(b,a.B.p,1);AJv(a.ex);MH(a.q,a.ex);return a.ex;}
function ATN(a){return 0;}
function A1e(a,b){Xm(a,b);Hj(a);}
function ARu(a,b){BD(b);Ik(a.lK,b);Hx(a.ex,b);NJ(a,b.dC);}
function AQT(a,b){JY(a.bb,b);}
function Wf(){B.call(this);this.vz=null;}
function AZp(a,b){DU(a.vz,null);return 0;}
function Ph(){var a=this;Dv.call(a);a.uf=null;a.fA=null;}
function WZ(){var b;b=I(LS,[M4(1,3,4,5,1),M4(5,6,10,2,2),M4(12,2,13,3,3),M4(15,3,17,2,4)]);return A3J(Q(Gi,0),Q(Gi,0),b);}
function AVK(a){var b,c,d,e;b=AUC(a.q);a.fA=b;AC9(b,a.uf);c=a.fA.dj;BD(c);d=new AAd;d.qD=c;b=Pg(C(294),4,d);d=a.fA.di;BD(d);e=new AAe;e.sw=d;c=Pg(C(294),4,e);EN(a.fA.dj,b);EN(a.fA.di,c);KH(a.fA,WZ());return a.fA;}
function X9(){var a=this;Dv.call(a);a.la=null;a.uV=null;}
function AXS(a){var b,c,d,e;b=S_(a.q);a.la=b;BD(b);c=new SI;c.sh=b;b=Pg(C(294),4,c);d=Bx();e=Oo(b);c=new K;M(c);U(H(c,C(295)),e);Bl(d,L(c));EN(a.la,b);JW(a.la,a.uV);b=a.la;return Jw(b,Gw(b,a.q));}
function AY4(a,b){var c;c=a.q.b0;EU(b,BJ(c.a/30|0,c.b/10|0),BJ((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
var KM=G(0);
function ALp(a,b,c){Ll(b);}
function AIs(a,b,c){var d;d=new Q_;d.ts=a;d.tt=b;d.tu=c;return d;}
function Rd(){var a=this;Dv.call(a);a.c6=null;a.oZ=null;a.mg=null;a.ja=null;}
function APS(a){var b,c,d,e,f;b=new Qs;c=a.bb;EX(b);b.f$=PL(c);d=S_(c.dG);b.ga=d;b.kp=Gw(d,c.dG);e=new Pc;EX(e);d=new B0;AN1();AJb(d,A5M);e.zW=d;b.n_=e;f=KW(c.dG,b.f$);b.fK=f;b.zk=a;Vq(b,I(CD,[b.kp,b.n_,f]));b.rv=Gs(1);a.c6=b;b=ABb(C(296),0);IL(b);d=new Ri;d.zT=a;b.fv=d;EN(a.c6.ga,b);return a.c6;}
function Rj(a){var b,c;b=a.B.bU;c=new ABm;c.us=a;I3(b,c);}
function APL(a,b){Xm(a,b);Hj(a);}
function AXD(a,b){var c;NJ(a,b.dC);c=a.c6;JW(c.ga,b);Jw(c.ga,c.kp);Ik(c.f$,b);Hx(c.fK,b);}
function AYZ(a,b,c){var d;a.oZ=b;d=Cn(a.mg,b);if(d!==null)ACS(a,d);else if(Cn(a.ja,b)!==null){b=Cv(b);c=new K;M(c);H(H(c,C(297)),b);$rt_globals.console.info($rt_ustr(L(c)));}else{Ek(a.ja,b,KF(b));c=new ABH;c.w4=a;c.w0=b;d=new ABI;d.Aw=a;d.Ax=b;Uj(b,c,d);}}
function ACS(a,b){HU(a.c6.fK,b);b=a.c6;FF(b.f$.b6.dG,b.fK);}
function AKM(a,b){ACK(b);if(Ja(b)>0)ED(a.c6.ga);}
function ANh(a,b){if(Ja(b)>0)ED(a.c6.ga);K9(b);}
function AQ5(a,b,c){if(AGV(c)!==C(176))Ql(b);else Ll(b);}
function ABJ(){var a=this;Ct.call(a);a.si=null;a.ml=null;a.e6=null;a.ok=null;a.mk=0.0;a.gU=null;a.vi=null;a.sV=null;a.w8=null;a.xP=null;a.rB=null;a.pN=null;a.Bb=null;a.vK=null;a.li=null;}
var A6w=0;function A2T(a){var b=new ABJ();ASR(b,a);return b;}
function ASR(a,b){var c,d,e;Eg(a,b);a.si=new B0;a.ml=ACW(1.0,0.0,0.0,1.0);a.e6=RR();a.ok=new Bg;a.mk=3.1415927410125732;c=AIQ();a.gU=c;a.vi=Hz(c,1.25);a.sV=Hz(a.gU,1.3333333730697632);a.w8=Hz(a.gU,1.5);a.xP=Hz(a.gU,1.6666666269302368);a.rB=Hz(a.gU,2.0);a.pN=ACW(a.mk/24.0,15.0,3.0,0.5);c=ACW(a.mk/12.0,25.0,3.0,0.5);a.Bb=c;a.vK=DT([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.li=I(B0,[a.gU,a.vi,a.sV,a.w8,a.xP,a.rB,a.pN,c]);c=b.p.bF;d=new Qo;d.Eo=a;Bc(c,d);Bc(b.p.bO,a);b=a.e6.W;FC();BO(b,A5J);Ha(a.e6,0,0,600,60);e
=MP(0.5,0.375);Jb(0.375,e);Jb(0.375,Jb(3.0,MP(e,3.0)));Hz(AIQ(),3.0);}
function A09(a,b,c){var d,e,f;Cs(a.ok,b);d=a.e6;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Hz(b,c){var d;d=new B0;Ud(b,c,d);return d;}
function AIQ(){var b;b=new B0;Lp(b);return b;}
function AWl(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.B.O;EB(b,a.si);B9(b,1);c=a.e6;d=c.u.a;e=c.t.b/2|0;f=0;while(true){g=a.li.data;if(f>=g.length)break;h=a.vK.data[f];c=g[f];i=Wh(c);j=a.e6;k=j.u;l=k.a;m=k.b;LX(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.ml);f=f+1|0;}if(A6w){c=A2K(1,2);n=0;while(n<1000){h=Gm(c,a.li.data.length);l=Gm(c,a.ok.b-a.e6.t.b|0);j=a.li.data[h];i=j.bs;i=i-(i|0)>=0.25?0.0:0.5;k=a.e6;LX(b,k.u.a,l,k.t,d+i,(e+l|0)+i,j,a.ml);n=n+1|0;}}B9(b,0);}
function ARg(a,b){return A6w;}
var Ou=G(Kg);
function AUI(a){return Gs(1);}
function S9(){var a=this;Dv.call(a);a.mi=null;a.cR=null;}
function ABO(a,b,c){var d,e,f,g;d=Q(B3,1);e=d.data;f=new B3;g=new Q6;g.u2=a;g.u1=b;C7(f,g,c);e[0]=f;return Dw(d);}
function Hv(a,b){var c,d;c=a.B.bU;d=new U0;d.t2=a;d.t1=b;I3(c,d);}
function A0a(a){var b,c,d;b=AUC(a.q);a.cR=b;AC9(b,a.mi);b=ABb(C(298),0);c=ABb(C(299),0);IL(b);IL(c);d=new AA8;d.x5=a;b.fv=d;d=new AA7;d.s4=a;c.fv=d;EN(a.cR.dj,b);EN(a.cR.di,c);KH(a.cR,WZ());return a.cR;}
function JZ(){var a=this;B.call(a);a.AT=null;a.d$=null;a.tJ=null;a.Cc=null;a.r8=null;a.kB=null;a.qW=null;a.vo=null;a.ln=null;a.lj=null;a.gb=null;}
function A6x(a,b,c,d,e,f,g,h,i,j,k){var l=new JZ();Mf(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Mf(a,b,c,d,e,f,g,h,i,j,k,l){a.AT=b;a.d$=c;a.tJ=d;a.Cc=e;a.r8=f;a.kB=g;a.qW=h;a.vo=i;a.ln=j;a.lj=k;a.gb=l;}
function AEU(){B.call(this);this.D7=null;}
function AIB(a){var b=new AEU();ATC(b,a);return b;}
function ATC(a,b){a.D7=b;}
var ADU=G(0);
function AHa(){var a=this;B.call(a);a.os=null;a.kJ=null;a.wL=null;a.pS=null;}
function AJg(a,b,c,d){var e=new AHa();A1h(e,a,b,c,d);return e;}
function A1h(a,b,c,d,e){a.os=b;a.kJ=c;a.wL=d;a.pS=e;}
var AFg=G(0);
function E_(){var b,c,d;b=new IP;c=new IX;AXA();d=A6y;Og(c,d,A6z,A6A,A6B,A6C,d);LF(b,c,AGz(),AGH(S(C(300)),S(C(264)),S(C(265))),AGz(),AG5(1,0.125),A6D,A6E);return b;}
function AGz(){var b,c;b=new J$;c=S(C(301));AXA();KU(b,c,A6F,A6G);return b;}
function AGd(){var b,c;b=new J$;c=S(C(265));ATL();KU(b,c,A6H,A6I);return b;}
function AJX(){var b,c;b=new J$;AF8();c=A6J;ATW();KU(b,c,A6K,A6L);return b;}
function AGS(){var a=this;B.call(a);a.ym=null;a.vy=null;a.tW=null;a.p4=null;}
function ADv(a,b,c,d){var e=new AGS();AUb(e,a,b,c,d);return e;}
function AUb(a,b,c,d,e){a.ym=b;a.vy=c;a.tW=d;a.p4=e;}
function ADl(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dX.vy;break a;case 3:if(c!=3){b=b.dX.p4;break a;}b=b.dX.tW;break a;default:b=b.br.d$;break a;}b=b.dX.ym;}return b;}
function JP(a,b,c){return ADl(a,b,0,c);}
function Mk(){var a=this;B.call(a);a.lz=null;a.j4=null;}
function VA(a,b){var c;c=a.j4;a.j4=b;return c;}
function Kr(){var a=this;Mk.call(a);a.bR=null;a.b1=null;a.gt=0;a.gD=0;}
function MM(a){var b;b=Lg(a);if(b==2){if(Lg(a.b1)<0)a.b1=OQ(a.b1);return PR(a);}if(b!=(-2))return a;if(Lg(a.bR)>0)a.bR=PR(a.bR);return OQ(a);}
function Lg(a){var b,c;b=a.b1;c=b===null?0:b.gt;b=a.bR;return c-(b===null?0:b.gt)|0;}
function OQ(a){var b;b=a.bR;a.bR=b.b1;b.b1=a;ET(a);ET(b);return b;}
function PR(a){var b;b=a.b1;a.b1=b.bR;b.bR=a;ET(a);ET(b);return b;}
function ET(a){var b,c,d;b=a.b1;c=b===null?0:b.gt;b=a.bR;d=b===null?0:b.gt;a.gt=Bd(c,d)+1|0;a.gD=1;b=a.bR;if(b!==null)a.gD=1+b.gD|0;b=a.b1;if(b!==null)a.gD=a.gD+b.gD|0;}
var AJ0=G();
function ALy(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Xz;c=c.buffer;d.f5=c;d.pH=new $rt_globals.Int8Array(c);d.ma=new $rt_globals.Uint16Array(c);d.y_=new $rt_globals.Int32Array(c);d.rJ=new $rt_globals.Float32Array(c);d.rV=new $rt_globals.Float64Array(c);e=d.f5.byteLength;c=new K;M(c);U(H(c,C(302)),e);CQ(L(c));e=b.callToCpp1();c=new K;M(c);U(H(c,C(303)),e);CQ(L(c));f=b.callToCpp2();c=new K;M(c);EA(H(c,C(304)),f);CQ(L(c));c=OF(d,b.getC8String());g=new K;M(g);H(H(g,C(305)),c);CQ(L(g));c
=VW(d,b.getC16String());g=new K;M(g);H(H(g,C(306)),c);CQ(L(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.f5,h,8));c=AFC(i);g=new K;M(g);H(H(g,C(307)),c);CQ(L(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.f5,h,8));c=ARm(j);g=new K;M(g);H(H(g,C(308)),c);CQ(L(g));k=AIb(d,b.getCDoubleArray8(),8);l=AS$(k);c=new K;M(c);H(H(c,C(309)),l);CQ(D$(c));l=AS6(b.getC8String(),C(310),d);c=LT();H(H(c,C(311)),l);CQ(D$(c));l=APi(b.getC16String(),C(312),
d);c=LT();H(H(c,C(313)),l);CQ(D$(c));c=AYy(i,d,b.getCIntArray8(),DT([11,22,33,44,55,66,77,88]));g=LT();H(H(g,C(314)),c);CQ(D$(g));c=ARx(j,d,b.getCFloatArray8(),100,DT([111,222,333,444,555,666,777,888]));g=LT();H(H(g,C(315)),c);CQ(D$(g));b=AZQ(k,d,b.getCDoubleArray8(),1000,DT([1111,2222,3333,4444,5555,6666,7777,8888]));c=LT();H(H(c,C(316)),b);CQ(D$(c));}
function ARx(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(317);h=0;i=e;a:{while(h<g){if(CV(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.rJ[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(318);}return C(319);}
function AZQ(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(317);h=0;i=e;a:{while(h<g){if(Gv(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.rV[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(318);}return C(319);}
function AYy(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(317);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.y_[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(318);}return C(319);}
function AS6(b,c,d){var e,f,g,h;e=OF(d,b);if(!Bi(c,e))return C(320);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.pH[h])return C(321);f=f+1|0;}return C(318);}
function APi(b,c,d){var e,f,g,h;e=VW(d,b);if(!Bi(c,e))return C(320);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.ma[h>>>1|0]&65535))return C(321);f=f+1|0;}return C(318);}
function CQ(b){Xx(C(2),b);}
function AOt(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function XR(){B.call(this);this.rd=null;}
function AUt(a,b){return AIc(a.rd,b);}
function XP(){B.call(this);this.Ap=null;}
function AVX(a,b){Jg(a.Ap,b);}
function XQ(){B.call(this);this.wW=null;}
function ARO(a,b){b=b;return ADR(a.wW,b);}
function AGO(){J9.call(this);this.dq=null;}
function KA(){var a=new AGO();A0V(a);return a;}
function H5(a,b,c,d){var e=new AGO();AWO(e,a,b,c,d);return e;}
function A0V(a){ABd(a);a.dq=new B0;}
function AWO(a,b,c,d,e){ABd(a);a.dq=new B0;Ha(a,b,c,d,e);}
function FS(a){var b,c;b=a.t;c=a.dq;V(b,c.be-c.bm|0,c.bB-c.bs|0);}
function FJ(a,b){Ir(a,0,0,BZ(b),Dj(b));}
function Ir(a,b,c,d,e){Cw(a.dq,b,c,d,e);}
function Ez(a,b,c,d,e){var f;f=a.u;D3(b,f.a+d|0,f.b+e|0,a.t,a.dq,c,a.W,a.bk,0);}
function Sc(a,b,c,d){var e;e=a.u;D3(b,e.a,e.b,a.t,a.dq,c,a.W,a.bk,d);}
function Iq(a,b,c,d,e,f,g){D3(b,c,d,a.t,a.dq,e,!f?a.W:a.bk,!f?a.bk:a.W,g);}
function Ht(a,b){BO(a.W,b);}
function Fb(a,b){BO(a.bk,b);}
function S$(){B.call(this);this.fj=null;}
function AUG(a,b){var c,d,e,f,g,h;c=b.h;d=c.a;e=a.fj.hd;f=e.t;d=d-f.a|0;g=c.b-f.b|0;V(e.u,d,g);c=a.fj;e=c.B.bU;b=b.h;d=0;a:{while(true){h=c.iK.data;if(d>=h.length)break;if(E7(h[d],b)){b=c.pQ.data[d];break a;}d=d+1|0;}b=null;}Y2(e,b);return 1;}
function AKB(a,b,c,d){if(!c&&d==2){b=a.fj;RS(b,b.eb);}return 1;}
function AUz(a,b,c){var d,e;d=Bx();e=new K;M(e);U(H(e,C(322)),c);Bl(d,L(e));if(c)return null;d=b.h;e=!E7(a.fj.eb,d)?null:d;Tu(a.fj.jg,d.a,d.b);b=a.fj;XX(b.jg,ME(b.B.bU));if(e===null)b=A5R;else{b=new ABq;b.r4=a;b.r5=e;}return b;}
function AT5(a,b,c){var d;b=Bx();d=new K;M(d);U(H(d,C(323)),c);Bl(b,L(d));return 1;}
function Yf(){B.call(this);this.A3=null;}
function AZ_(a,b){return We(a.A3,b);}
function Ye(){B.call(this);this.rH=null;}
function AYB(a,b){return We(a.rH,b);}
function Yd(){B.call(this);this.Cr=null;}
function AWZ(a,b,c){var d,e;Bl(Bx(),C(324));d=!c?C(325):C(54);e=new K;M(e);H(H(H(e,C(326)),d),C(327));AB2(b,L(e));return 1;}
function Yc(){B.call(this);this.Dg=null;}
function ATD(a){Bl(Bx(),C(328));}
function Yb(){B.call(this);this.DL=null;}
function AQc(a,b){Bl(Bx(),C(329));return 1;}
function Ya(){B.call(this);this.zO=null;}
function A0h(a,b,c,d){var e,f,g;b=a.zO;e=( -d|0)/10|0;b=b.eb;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Hf(){var a=this;B0.call(a);a.g9=0;a.ha=0;a.g$=0;a.g_=0;}
function CA(a){var b=new Hf();ASW(b,a);return b;}
function Dt(a,b,c){var d=new Hf();AVp(d,a,b,c);return d;}
function S(a){var b=new Hf();AZF(b,a);return b;}
function ER(a,b,c,d){var e=new Hf();QY(e,a,b,c,d);return e;}
function BV(a){var b=new Hf();KJ(b,a);return b;}
function ASW(a,b){QY(a,b,b,b,255);}
function AVp(a,b,c,d){QY(a,b,c,d,255);}
function AZF(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.g9=Kb(P(b,1))*17|0;a.ha=Kb(P(b,2))*17|0;a.g$=Kb(P(b,3))*17|0;a.g_=255;}else{a.g9=LC(P(b,1),P(b,2));a.ha=LC(P(b,3),P(b,4));a.g$=LC(P(b,5),P(b,6));a.g_=J(b)!=9?255:LC(P(b,7),P(b,8));}Iw(a.g9,a.ha,a.g$,a.g_,a);return;}}
function QY(a,b,c,d,e){a.g9=b;a.ha=c;a.g$=d;a.g_=e;Iw(b,c,d,e,a);}
function KJ(a,b){a.g9=b.g9;a.ha=b.ha;a.g$=b.g$;a.g_=b.g_;BO(a,b);}
function Kb(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LC(b,c){return (16*Kb(b)|0)+Kb(c)|0;}
var AFR=G(0);
function Gs(b){return !b?I(BL,[C(155),C(166),C(330)]):I(BL,[C(155),C(166),C(330),C(34)]);}
function VN(){B.call(this);this.lM=null;}
function AMT(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.lM.de;e=DN();f=e-0.5+(DN()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DN()*0.3;h=0.5+DN()*0.5;Io(e,g,h,1.0,b.W);Io(f,g,h,1.0,b.bk);b=a.lM;BO(b.dP.W,b.de.W);b=a.lM;BO(b.dP.bk,b.de.bk);}return 1;}
function VK(){var a=this;B.call(a);a.ni=null;a.nL=null;}
function AFh(){var a=this;B.call(a);a.fR=null;a.ck=null;a.gB=null;a.hG=null;a.np=null;a.cA=null;a.ht=null;a.c0=0;a.fU=0;a.nH=0;a.j0=0;a.kg=0;a.hA=0;a.kv=null;a.ow=null;a.vG=null;a.ng=null;}
function AIG(){var a=new AFh();ARC(a);return a;}
function ARC(a){a.ck=RR();a.gB=new Bg;a.hG=new Bg;a.cA=A6M;a.j0=(-1);a.kg=1;}
function M5(a,b){NS(a);a.cA=b;}
function Jv(a,b,c){a.fR=b;ABW(a,c);NS(a);}
function Jx(a,b){var c;a.np=b.lb;c=b.oz.pe;BO(a.ck.W,c);c=b.kM.oX;BO(a.ck.bk,c);a.ng=b.oz;}
function MD(a){a.ht=BY(a.ht,null);V(a.gB,0,0);a.cA=A6M;a.j0=(-1);AAc(a.ck);}
function ABW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=J7(b);d=b.cb;BD(a.fR);Cl(c,a.fR);e=MX(a.fR,1.25);f=0;a.c0=Cf(2.0,d);a.fU=Cf(3.0,d);a.nH=Cf(12.0,d);g=0;h=a.cA.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=K1(c,l.m6);n=a.nH;n=(n+m|0)+n|0;f=Bd(f,n);b=l.e$;b.a=g;b.b=0;b=l.em;b.a=n;b.b=e;Cw(l.jX,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gB;b.a=g;b.b=e;b=a.ck.t;n=a.hA;if(!n){m=a.c0;m=(g+m|0)+Bb(m,a.cA.data.length)|0;}else m=(f+(a.c0*2|0)|0)+(a.fU*2|0)|0;b.a=m;if(!n)e=e+(a.c0*2|0)|0;else{n=a.c0;e=(Bb(e+n|0,a.cA.data.length)+n
|0)+(a.fU*2|0)|0;}b.b=e;}
function MZ(a,b,c){var d,e,f,g,h,i,j;V(a.ck.u,b,c);d=a.c0+a.fU|0;e=a.cA.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.e$;j.a=b+d|0;j.b=c+h|0;if(!a.hA){if(!i.em.a)ADF();d=d+(i.em.a+a.c0|0)|0;}else{if(!i.em.b)ADF();h=h+(i.em.b+a.c0|0)|0;}g=g+1|0;}}
function ADF(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ev(a){var b,c;b=a.gB;if(b.a&&b.b)return a.ck.t;c=new Bt;Bm(c,C(331));N(c);}
function NS(a){a.kg=1;}
function LZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.b4;if(!a.cA.data.length)return;if(a.ht===null)a.ht=CT(c);a:{if(!a.kg){d=a.gB;if(Bb(d.a,d.b))break a;}d=a.gB;if(!Bb(d.a,d.b))ABW(a,b);d=a.gB;e=d.a;f=d.b;if(!Bb(e,f))return;d=D1(c,e,f,b.cv);Cl(d,a.fR);g=MX(a.fR,0.125);h=a.fR;i=h.ef;g=g+i-(i+h.ev)/16.0;j=a.cA.data;e=j.length;f=0;while(f<e){h=j[f];BW(d,h.m6,h.jX.bm+a.nH,g);f=f+1|0;}CK(a.ht,d);a.kg=0;Eu(d);}if(!KZ(a.ck)){d=a.ck;AHY(c,d.t,d.u,d.bk,a.c0,a.hG);d=a.ck;h=d.t;k=d.u;d=d.W;e=a.c0;l=a.hG;l.a=(h.a-e|0)-
e|0;l.b=(h.b-e|0)-e|0;Bs(c,k.a+e|0,k.b+e|0,l,d);if(a.hA){d=a.ck;AI9(c,d.t,d.u,0,0,XB(a.np,b.cb),a.np.nt,a.hG);}}j=a.cA.data;m=j.length;n=0;while(n<m){d=j[n];h=d.e$;e=h.a;f=h.b;h=d.em;k=d.jX;l=a.ht;o=a.ng;D3(c,e,f,h,k,l,o.rg,Ux(o,d.kL),b.cv);n=n+1|0;}b:{if(a.hA){j=a.cA.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.hG;e=(a.ck.t.a-(a.c0*2|0)|0)-(a.fU*2|0)|0;h=d.em;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.e$;Bs(c,k.a+h.a|0,k.b,b,Ux(a.ng,d.kL));}p=p+1|0;}}}}
function Nx(a,b,c){var d,e,f,g,h,i;d=E7(a.ck,b);e=!d?(-1):O6(a,b);f=a.j0;if(f!=e){if(f>=0){g=a.cA.data[f];g.kL=0;if(a.vG!==null){h=Bx();g=Cv(g);i=new K;M(i);H(H(U(H(i,C(332)),f),C(333)),g);Bl(h,L(i));}}if(e>=0){h=a.cA.data[e];g=a.ow;if(g!==null)g.vN(b,e,h);h.kL=1;}a.j0=e;}return d&&Gx(c)?1:0;}
function NV(a,b,c,d){var e,f;e=O6(a,b);if(e>=0){f=a.cA.data[e];if(!ABg(f))f.mt.g();}return 1;}
function O6(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cA.data;if(c>=d.length)return (-1);e=d[c];if(Hr(b,e.e$,e.em))return c;if(a.hA){f=e.e$;g=f.a;e=e.em;h=e.a;g=g+h|0;i=f.b;f=a.hG;f.a=(a.ck.t.a-(a.c0*2|0)|0)-h|0;f.b=e.b;if(AD0(b,g,i,f))break;}c=c+1|0;}return c;}
function ADh(a){a.hA=1;}
function AHZ(){var a=this;B.call(a);a.hW=null;a.gG=0.0;a.lX=0;a.jZ=0;}
function DK(a,b){var c=new AHZ();AQq(c,a,b);return c;}
function AQq(a,b,c){a.hW=b;a.gG=c;a.lX=400;a.jZ=700;}
function AZy(a,b){if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){b=b;return a.gG===b.gG&&a.lX==b.lX&&a.jZ==b.jZ&&BS(a.hW,b.hW)?1:0;}return 0;}
function AAI(){B.call(this);this.tG=null;}
function APQ(a,b){var c;c=a.tG;if(b.bl==32)MD(c.dy);return 0;}
function AAE(){B.call(this);this.uC=null;}
function ARy(a,b){var c,d,e,f;b=b;c=a.uC;d=M8(c.q);Ga(d,E_(),c.n2);b=b.h;e=Q$(4);f=new T3;f.Cs=c;Je(d,b,e,f);Fl(c.bb,d);return 1;}
var AAF=G();
function A1z(a){Bl(Bx(),C(334));}
var AAG=G();
function ALf(a){Bl(Bx(),C(335));}
function B3(){var a=this;B.call(a);a.mt=null;a.jX=null;a.e$=null;a.em=null;a.mM=null;a.sS=null;a.kL=0;a.m6=null;}
function Wr(a,b){var c=new B3();C7(c,a,b);return c;}
function A3t(a,b,c,d){var e=new B3();AIm(e,a,b,c,d);return e;}
function C7(a,b,c){AIm(a,b,c,null,null);}
function AIm(a,b,c,d,e){a.jX=new B0;a.e$=new Bg;a.em=new Bg;a.m6=c;a.sS=e;a.mt=b;a.mM=d;}
function ABg(a){return a.mM===null?0:1;}
function TL(){B.call(this);this.Bt=null;}
function AWS(a,b){return b.jv&&b.bl==32?1:0;}
function TM(){B.call(this);this.z9=null;}
function AKY(a,b){var c,d,e,f,g,h;b=b;c=a.z9;d=M8(c.q);Ga(d,E_(),DK(C(155),25.0));b=b.h;e=Q(B3,1);f=e.data;g=new B3;h=new AC_;h.Ao=c;C7(g,h,C(336));f[0]=g;Je(d,b,Dw(e),A6N);Fl(c.bb,d);return 1;}
function AGw(){var a=this;B.call(a);a.pp=0;a.pr=0;}
function AGi(){var a=new AGw();ASk(a);return a;}
function A2K(a,b){var c=new AGw();AJ6(c,a,b);return c;}
function ASk(a){AJ6(a,AJO(GG((AFO()))),GG((AFO()))^(-559038737));}
function AJ6(a,b,c){var d;a.pp=b;a.pr=c;d=0;while(d<19){Nh(a);d=d+1|0;}}
function Nh(a){var b,c;b=a.pp;c=a.pr;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.pp=c;a.pr=b;return b;}
function AJO(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AJp(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Gm(a,b){return Ub(a)*b|0;}
function Ub(a){return 5.960464477539063E-8*(Nh(a)&16777215);}
function Qr(a,b){var c,d,e;c=AJp(Nh(a));d=ARr( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function OJ(){B.call(this);this.w1=null;}
function APX(a,b,c){var d;d=a.w1;if(b===0.0)LN(d,100);}
function OI(){B.call(this);this.uN=null;}
function AYd(a,b){var c,d,e;c=a.uN;d=b.bl;if(d==32){c.ll=c.ll?0:1;e=1;}else if(d==13){LN(c,1);e=1;}else if(d!=8)e=0;else{Pf(c,1);e=1;}return e;}
var YX=G(0);
function AHb(b,c){var d;d=new T7;d.wP=b;d.wO=c;return d;}
function AHh(){var a=this;B.call(a);a.hk=null;a.hX=0;a.ls=0;a.g2=0;}
function AHr(a){var b=new AHh();AM3(b,a);return b;}
function AM3(a,b){a.hk=BH();a.g2=0;a.ls=2048;a.hX=b;}
function Kf(a,b,c){var d,e,f,g,h,i;d=c.yk(b);e=a.ls;if(d>e){c=new Bt;f=new K;M(f);BM(U(H(U(H(f,C(337)),d),C(338)),e),41);Bm(c,L(f));N(c);}if(!a.hX){b=new BR;Bm(b,C(339));N(b);}a:{b=new B0;if(d){b:{c=a.hk;if(c.m>0){c=B6(c);g=d;while(true){if(!B$(c))break b;f=B_(c);if(f.be>=g)break;}Cw(b,f.bm,f.bs,g,a.hX);f.bm=f.bm+g;h=f.be-g;f.be=h;if(h===0.0)T2(a.hk,f);break a;}}g=a.g2;i=d;Cw(b,0.0,g,i,a.hX);BC(a.hk,ACW(i,a.g2,a.ls-d|0,a.hX));a.g2=a.g2+a.hX|0;}}return b;}
function IQ(a,b){var c,d,e,f,g,h,i;a:{c=AJ4(b);b=a.hk;if(b.m>0){d=B6(b);while(true){if(!B$(d))break a;e=B_(d);if(e.bs===c.bs){f=e.bm;g=e.be;h=f+g;i=c.bm;if(h===i){c.bm=f;c.be=c.be+g;YI(d);}else{h=c.be;if(i+h===f){c.be=h+g;YI(d);}}}}}}BC(a.hk,c);}
function Mv(a){return BJ(a.ls,a.g2);}
function VY(){var a=this;B.call(a);a.rf=null;a.lo=null;}
function ATP(a,b,c){if(c)return A5R;return FX(a.lo.iL,b.h,a.rf,1);}
function AKT(a,b,c){return 1;}
function AVE(a,b){var c;c=a.lo;return F3(c.iL,b.h,c.wK);}
function Zf(){B.call(this);this.zt=null;}
function APV(a,b,c,d){var e,f;b=a.zt;e=(VE(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eV=Be(Bd(0,b.eV+Bb(e,f)|0),T4(b));return 1;}
function Qh(){B.call(this);this.se=null;}
function APK(a,b){var c,d,e;c=a.se;if(b.cJ&&b.bl==79){if(!b.bJ){b=c.B.bU;d=new Wn;d.t3=c;NX(b,d);}else{b=c.B.bU;d=new Wm;d.wp=c;I3(b,d);}e=1;}else e=0;return e;}
function Q0(){B.call(this);this.w5=null;}
function AS4(a,b){var c,d,e,f,g,h,i;b=b;c=a.w5;d=M8(c.q);Ga(d,E_(),DK(C(155),25.0));b=b.h;e=Q(B3,5);f=e.data;g=new B3;h=new Tk;h.q1=c;C7(g,h,C(340));f[0]=g;g=new B3;h=new Tl;h.rA=c;C7(g,h,C(341));f[1]=g;g=new B3;h=new Tm;h.sM=c;C7(g,h,C(342));f[2]=g;h=new B3;i=new Tn;i.wB=c;C7(h,i,C(343));f[3]=h;h=new B3;i=new To;i.w3=c;C7(h,i,C(344));f[4]=h;Je(d,b,Dw(e),A6N);Fl(c.bb,d);return 1;}
function QZ(){B.call(this);this.yZ=null;}
function AZc(a,b){var c,d,e,f;c=a.yZ;d=c.B.bU;e=new WX;e.vW=c;f=Q(B,1);f.data[0]=b;CR(d,e,C(345),f);}
function AAS(){B.call(this);this.mC=null;}
function AYr(a,b){var c,d,e,f,g,h;c=a.mC;d=c.pK;if(d!==null){e=c.eT.u;f=e.a;g=b.h;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.pK=g;}b=b.h;f=b.a;c=c.gl;d=c.t;f=f-d.a|0;h=b.b-d.b|0;V(c.u,f,h);return 1;}
function ASU(a,b,c){var d;if(!c){d=b.h;b=a.mC;if(!E7(b.eT,d))d=null;b.pK=d;}return A5R;}
var AFm=G();
function AKa(b){var c,d;c=HB(b,250,64);Ho(c,C(267),25.0);JU(c,187,187,187);BW(c,C(346),0.0,24.0);BW(c,C(346),0.25,56.0);d=CT(b);CK(d,c);Eu(c);return d;}
var Dd=G(0);
var A52=null;var A6t=null;var A53=null;var A5J=null;var A55=null;var A54=null;var A57=null;var A56=null;var A59=null;var A58=null;var A5$=null;function FC(){FC=Bn(Dd);AS7();}
function AS7(){A52=CA(187);A6t=S(C(347));A53=CA(55);A5J=CA(43);A55=Dt(33,66,131);A54=Dt(60,63,65);A57=S(C(348));A56=S(C(349));A59=ER(85,85,85,128);A58=ER(43,43,43,0);A5$=S(C(253));}
function XS(){var a=this;B.call(a);a.p_=null;a.ly=null;}
function AN7(a,b,c){var d;if(!c){d=FX(a.ly.ir,b.h,a.p_,1);if(d!==null)return d;}return A5R;}
function AT1(a,b,c){return 1;}
function AMY(a,b){var c;c=a.ly;return F3(c.ir,b.h,QS(c.B.bU));}
function Vh(){B.call(this);this.qZ=null;}
function A0e(a,b,c,d){var e,f;b=a.qZ;e=(VE(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fs=Be(Bd(0,b.fs+Bb(e,f)|0),Zg(b));return 1;}
function ACs(){B.call(this);this.vF=null;}
function AMd(a,b){var c,d;a:{c=a.vF;switch(b.bl){case 67:P8(c);d=1;break a;case 86:YZ(c);d=1;break a;default:}d=0;}return d;}
var ACr=G();
function AW5(a,b,c){return 0;}
function ACq(){B.call(this);this.rP=null;}
function AMj(a,b,c){var d,e;d=a.rP;c=d.d6+1|0;d.d6=c;d=JG(F(Ka));e=new K;M(e);H(H(U(e,c),C(350)),d);e=L(e);$rt_globals.console.info($rt_ustr(e));AB2(b,e);return 1;}
var ACp=G();
function APd(a){return null;}
function ACt(){B.call(this);this.yI=null;}
function AZM(a){var b,c;b=a.yI;c=new UW;c.p7=b;return c;}
function RF(){B.call(this);this.CN=null;}
function ASz(a,b){return 0;}
function YE(){B.call(this);this.Cv=null;}
function ASd(a,b){return b.jv&&b.bl==32?1:0;}
function YD(){B.call(this);this.wf=null;}
function AOT(a,b){var c,d,e,f,g,h;b=b;c=a.wf;d=M8(c.q);Ga(d,E_(),DK(C(155),25.0));b=b.h;e=Q(B3,1);f=e.data;g=new B3;h=new AC4;h.A6=c;C7(g,h,C(336));f[0]=g;Je(d,b,Dw(e),A6N);Fl(c.bb,d);return 1;}
function O8(){B.call(this);this.Ai=null;}
function AYp(a,b){var c;c=a.Ai.ex;if(c!==null)Jg(c,b);}
function O9(){B.call(this);this.ye=null;}
function AZ5(a,b){var c,d,e;b=b;c=a.ye;if(DJ(c.q,c.ex)){d=c.lK;b=b.h;e=c.ex;GE(d,b,e,c,e,c,new WV);}return 1;}
function TP(){B.call(this);this.Bq=null;}
function AQK(a,b){return 1;}
function TO(){B.call(this);this.s2=null;}
function AQb(a,b){var c,d;c=a.s2;if(b.bl!=32)d=0;else{KH(c.fA,WZ());d=1;}return d;}
function WN(){B.call(this);this.w$=null;}
function AMB(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.w$;d=c.c6;if(d===null)e=1;else{if(!B2(d.fK,b.h)){d=c.c6.f$;f=b.h;g=Q(B3,1);h=g.data;b=new B3;i=new Ug;i.uw=c;C7(b,i,C(351));h[0]=b;K4(d,f,Dw(g));}else{c=c.c6;b=b.h;if(B2(c.fK,b)){d=c.f$;f=c.fK;i=c.zk;j=d.b6;BD(j);k=new Qu;k.p1=j;j=new Qt;j.AR=c;GE(d,b,f,i,f,k,j);}}e=1;}return e;}
function Qo(){B.call(this);this.Eo=null;}
function AOz(a,b){return 0;}
var AGk=G(0);
function AJv(b){HU(b,A23(C(352),C(177),ABa(C(353))));}
function Z6(){B.call(this);this.qj=null;}
function AQJ(a,b){var c,d,e,f,g,h;b=b;c=a.qj;if(c.cR!==null){d=c.bb;e=c.mi;d=Yq(d,e.dC,e.ky);b=b.h;if(B2(c.cR.dj,b))e=ABO(c,c.cR.dj,C(298));else if(B2(c.cR.di,b))e=ABO(c,c.cR.di,C(299));else{f=Q(B3,2);g=f.data;e=new B3;h=new Pd;h.vO=c;C7(e,h,C(298));g[0]=e;e=new B3;h=new Pe;h.AX=c;C7(e,h,C(299));g[1]=e;e=Dw(f);}Lc(d,b,e);Fl(c.bb,d);}return 1;}
var Dl=G(0);
var A6a=null;var A6O=null;var A6c=null;var A6b=null;var A6e=null;var A6d=null;var A6g=null;var A6f=null;var A6i=null;var A6h=null;var A6j=null;function AM6(){AM6=Bn(Dl);ARN();}
function ARN(){A6a=CA(206);A6O=S(C(354));A6c=S(C(355));A6b=S(C(260));A6e=S(C(356));A6d=S(C(249));A6g=S(C(357));A6f=S(C(358));A6i=ER(107,106,107,128);A6h=ER(30,31,34,0);A6j=S(C(262));}
function Cm(){CG.call(this);this.kN=null;}
var A6P=null;var A6Q=null;var A6R=null;var A6S=null;var A6T=null;var A5T=null;var A6U=null;var A6V=null;var A6W=null;var A6X=null;var A6Y=null;var A6Z=null;var A60=null;var A61=null;var A62=null;var A6k=null;function Tj(){Tj=Bn(Cm);AXb();}
function DQ(a,b,c){var d=new Cm();Y_(d,a,b,c);return d;}
function A3j(a,b,c,d){var e=new Cm();ACC(e,a,b,c,d);return e;}
function Y_(a,b,c,d){Tj();DG(a,b,c);a.kN=JA(d,null);}
function ACC(a,b,c,d,e){Tj();DG(a,b,c);a.kN=JA(d,e);}
function AXb(){var b,c;b=new Cm;AM6();Y_(b,C(359),0,A6O);A6P=b;A6Q=DQ(C(360),1,S(C(361)));A6R=DQ(C(362),2,S(C(363)));A6S=DQ(C(364),3,S(C(365)));A6T=DQ(C(366),4,A6O);A5T=DQ(C(367),5,S(C(368)));A6U=DQ(C(369),6,S(C(370)));A6V=DQ(C(371),7,S(C(372)));A6W=DQ(C(373),8,S(C(374)));c=new Cm;FC();ACC(c,C(375),9,A6t,S(C(357)));A6X=c;A6Y=A3j(C(376),10,A6t,S(C(263)));A6Z=DQ(C(377),11,S(C(378)));A60=DQ(C(379),12,S(C(380)));A61=DQ(C(381),13,A6O);b=DQ(C(382),14,S(C(383)));A62=b;A6k=I(Cm,[A6P,A6Q,A6R,A6S,A6T,A5T,A6U,A6V,A6W,
A6X,A6Y,A6Z,A60,A61,b]);}
function Kc(){var a=this;B.call(a);a.gN=null;a.mm=null;}
function JA(a,b){var c=new Kc();AXE(c,a,b);return c;}
function AXE(a,b,c){a.gN=b;a.mm=c;}
function IP(){var a=this;B.call(a);a.lb=null;a.ss=null;a.Di=3;a.kM=null;a.AD=null;a.Er=null;a.oz=null;a.my=null;a.og=null;}
function A63(a,b,c,d,e,f,g){var h=new IP();LF(h,a,b,c,d,e,f,g);return h;}
function LF(a,b,c,d,e,f,g,h){a.ss=DK(C(166),16.0);a.Di=3;a.AD=b;a.Er=c;a.kM=d;a.oz=e;a.lb=f;a.my=g;a.og=h;}
function AIP(){var a=this;B.call(a);a.nt=null;a.sl=0;}
function AG5(a,b){var c=new AIP();AZE(c,a,b);return c;}
function AZE(a,b,c){var d;d=new B0;a.nt=d;a.sl=b;d.bB=c;}
function XB(a,b){return Cf(a.sl,b);}
var DM=G(0);
var A6o=null;var A6p=null;var A6l=null;var A6m=null;var A6n=null;var A6H=null;var A6I=null;var A6q=null;var A6r=null;function ATL(){ATL=Bn(DM);AYt();}
function AYt(){A6o=S(C(249));A6p=S(C(384));A6l=S(C(265));A6m=S(C(370));A6n=S(C(354));A6H=S(C(249));A6I=S(C(385));A6q=S(C(386));A6r=Dt(43,45,48);}
var Xk=G(0);
var Xy=G();
function AV1(a,b,c){var d,e;d=b;e=c;b=new K;M(b);U(H(U(H(b,C(387)),d),C(388)),e);CQ(L(b));return d+e|0;}
var Xl=G(0);
var Xw=G();
function AWD(a,b,c){var d,e;d=b;e=c;b=new K;M(b);EA(H(EA(H(b,C(389)),d),C(388)),e);CQ(L(b));return d+e;}
var AEc=G();
var AHf=G(0);
function Uq(){B.call(this);this.nP=null;}
var A6M=null;function Lo(){var a=new Uq();AHI(a);return a;}
function AHI(a){a.nP=BH();}
function DY(a,b,c){Xh(a,C3(b,c));}
function C3(b,c){return Wr(c,b);}
function Fz(a,b,c){IU(a,b,c,null);}
function IU(a,b,c,d){Xh(a,A3t(null,b,c,d));}
function Xh(a,b){BC(a.nP,b);}
function GQ(a){return Dw(Gf(a.nP,A6M));}
function AHj(){A6M=Q(B3,0);}
var DP=G(0);
var A6B=null;var A6C=null;var A6y=null;var A6z=null;var A6A=null;var A6F=null;var A6G=null;var A6D=null;var A6E=null;function AXA(){AXA=Bn(DP);AYe();}
function AYe(){A6B=S(C(258));A6C=S(C(390));A6y=S(C(301));A6z=S(C(391));A6A=S(C(347));A6F=S(C(258));A6G=S(C(390));A6D=ER(118,121,122,128);A6E=Dt(63,66,68);}
var HT=G(0);
var PJ=G();
function AY3(a,b,c,d){var e;b=Bx();d=Cv(d);e=new K;M(e);H(H(U(H(e,C(392)),c),C(333)),d);Bl(b,L(e));}
var PK=G();
function Ta(){B.call(this);this.yV=null;}
function AX8(a,b){var c;c=a.yV.lo;c.eV=FP(b,T4(c));}
function Pq(){B.call(this);this.Cu=null;}
function AMN(a,b){var c,d,e,f;c=b.data;b=Bx();d=Cv(c[0]);e=new K;M(e);H(H(e,C(285)),d);Bl(b,L(e));b=Bx();f=c[1];d=new K;M(d);H(H(d,C(393)),f);Bl(b,L(d));}
function Pp(){B.call(this);this.DH=null;}
function ALs(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bx();e=Cv(c[0]);f=new K;M(f);H(H(f,C(285)),e);Bl(d,L(f));g=EJ(KR(b,1));b=Bx();d=Cv(c[1]);if(g===null)c=C(23);else{c=new K;M(c);BU(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BU(c,C(37));BM(c,i[h]);h=h+1|0;}BU(c,C(38));c=L(c);}e=new K;M(e);H(H(H(H(e,C(394)),d),C(395)),c);Bl(b,L(e));}
function Pn(){B.call(this);this.A9=null;}
function AKI(a,b){ACD(a.A9,b);}
function Pl(){B.call(this);this.DQ=null;}
function A1d(a,b){var c,d,e,f,g;c=b.data;d=Bx();e=Cv(c[0]);f=new K;M(f);H(H(f,C(285)),e);Bl(d,L(f));g=CN(KR(b,1));b=Bx();d=Cv(c[1]);c=AFC(g);e=new K;M(e);H(H(H(H(e,C(396)),d),C(397)),c);Bl(b,L(e));}
var AGX=G();
function T8(){B.call(this);this.sD=null;}
function AWF(a,b){var c;c=a.sD.ly;c.fs=FP(b,Zg(c));}
function ABj(){B.call(this);this.Cw=null;}
function ANN(a,b){return 0;}
function AJA(){var a=this;B.call(a);a.j5=null;a.or=null;a.gy=null;a.Ee=null;}
function ABa(a){var b=new AJA();AZu(b,a);return b;}
function AZu(a,b){var c,d,e;c=null;d=null;e=null;a.j5=c;a.or=d;a.gy=b;a.Ee=e;}
function ABu(a){var b,c;b=a.gy;if(b===null)return C(21);c=AEP(b,C(398));return c==(-1)?a.gy:Dr(a.gy,c+1|0);}
function AU6(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BS(a.j5,c.j5)&&BS(a.or,c.or)&&BS(a.gy,c.gy)?1:0;}return 0;}
function IX(){var a=this;B.call(a);a.tg=null;a.qt=null;a.q8=null;a.zo=null;a.r2=null;a.kU=null;}
function A64(a,b,c,d,e,f){var g=new IX();Og(g,a,b,c,d,e,f);return g;}
function Og(a,b,c,d,e,f,g){a.tg=b;a.qt=c;a.q8=d;a.zo=e;a.r2=f;a.kU=g;}
function J$(){var a=this;B.call(a);a.rg=null;a.pe=null;a.tQ=null;}
function A65(a,b,c){var d=new J$();KU(d,a,b,c);return d;}
function KU(a,b,c,d){a.rg=b;a.pe=c;a.tQ=d;}
function Ux(a,b){return !b?a.pe:a.tQ;}
function AHC(){var a=this;B.call(a);a.oX=null;a.yJ=null;a.uE=null;}
function AGH(a,b,c){var d=new AHC();A0u(d,a,b,c);return d;}
function A0u(a,b,c,d){a.oX=b;a.yJ=c;a.uE=d;}
function Cq(){CG.call(this);this.nr=null;}
var A66=null;var A67=null;var A68=null;var A69=null;var A6$=null;var A6_=null;var A7a=null;var A7b=null;var A7c=null;var A7d=null;var A7e=null;var A7f=null;var A7g=null;var A7h=null;var A7i=null;var A5_=null;function AEq(){AEq=Bn(Cq);AWK();}
function D8(a,b,c){var d=new Cq();AAm(d,a,b,c);return d;}
function AZG(a,b,c,d){var e=new Cq();AGl(e,a,b,c,d);return e;}
function AAm(a,b,c,d){AEq();DG(a,b,c);a.nr=JA(d,null);}
function AGl(a,b,c,d,e){AEq();DG(a,b,c);a.nr=JA(d,e);}
function AWK(){var b;b=new Cq;FC();AAm(b,C(359),0,A6t);A66=b;A67=D8(C(360),1,S(C(399)));A68=D8(C(362),2,S(C(400)));A69=D8(C(364),3,S(C(401)));A6$=D8(C(366),4,S(C(399)));A6_=D8(C(367),5,Dt(188,63,60));A7a=D8(C(369),6,S(C(402)));A7b=D8(C(371),7,S(C(403)));A7c=D8(C(373),8,S(C(404)));A7d=AZG(C(375),9,A6t,Dt(52,65,52));A7e=AZG(C(376),10,S(C(405)),S(C(406)));A7f=D8(C(377),11,S(C(407)));A7g=D8(C(379),12,S(C(408)));A7h=D8(C(381),13,A6t);b=D8(C(382),14,S(C(383)));A7i=b;A5_=I(Cq,[A66,A67,A68,A69,A6$,A6_,A7a,A7b,A7c,A7d,
A7e,A7f,A7g,A7h,b]);}
var AJ5=G();
function JX(b,c){var d,e,f;if(c<=0)return C(21);d=B4(c);e=d.data;e[0]=AJq(Gm(b,52));f=1;while(f<c){e[f]=AJq(Gm(b,62));f=f+1|0;}return Hi(d);}
function AJq(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AEJ=G();
function AKd(){var a=this;B.call(a);a.Ik=null;a.NC=null;a.HA=0;a.N$=0;}
var ADu=G(0);
function AJx(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BL,8);e=DH(8);f=B4(16);g=0;h=0;i=0;while(true){j=BK(i,b);if(j>0)break;k=j>=0?10:(c.ba(CU(i))).mu;if(k==10){d=AF2(Ew(f,0,g),d,h);e=ABf(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Kt(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AF2(Ew(f,0,g),d,h);j=i+1|0;if(j<b&&(c.ba(CU(j))).mu==10){e=ABf(1,e,h);i=j;}else e=ABf(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new YO;d=AEf(d,h);if(m.length!=h)e=N5(e,h);c.jW=d;c.Bx=e;return c;}
function AHB(b){var c,d;c=J(b);BD(b);d=new Pb;d.tb=b;return AJx(c,d);}
var CY=G();
var AI5=G(CY);
var AJo=G(CY);
var AHQ=G(CY);
var AH1=G(CY);
var AJD=G(CY);
function UB(){B.call(this);this.rt=null;}
function AOr(a){var b;b=a.rt;Bl(Bx(),b);}
var HC=G(CG);
var A7j=null;var A5K=null;var A7k=null;function APv(){APv=Bn(HC);AVJ();}
function A1w(a,b){var c=new HC();AD5(c,a,b);return c;}
function AD5(a,b,c){APv();DG(a,b,c);}
function AVJ(){var b;A7j=A1w(C(409),0);b=A1w(C(410),1);A5K=b;A7k=I(HC,[A7j,b]);}
function Pb(){B.call(this);this.tb=null;}
function AT2(a,b){return Pa(P(a.tb,b.bp));}
function YO(){var a=this;B.call(a);a.jW=null;a.Bx=null;}
var AHz=G();
function Cf(b,c){return CV(b*c);}
function Gi(){var a=this;B.call(a);a.gT=0;a.m9=null;}
function AFP(){var a=this;B.call(a);a.bo=null;a.Q=null;a.V=null;a.ip=null;a.pj=0;}
function ADA(a){var b=new AFP();AQp(b,a);return b;}
function A37(a,b){var c=new AFP();AEw(c,a,b);return c;}
function AQp(a,b){AEw(a,b,ATf());}
function AEw(a,b,c){var d;a.bo=b;d=new TJ;EX(d);d.md=new B0;d.fW=b;a.Q=d;a.V=c;}
function FM(a,b){var c;c=a.Q;c.ew=c.ew|(BS(c.jp,b)?0:1);c.jp=b;Im(a);}
function ZC(a,b,c){var d,e,f;d=a.Q;e=BS(d.hj,b)?0:1;f=c===d.kn?0:1;if(e){d.hj=b;d.eo=null;Qa(d,0);}d.ew=d.ew|(!e&&!f?0:1);d.kn=c;d.h$=0;Im(a);}
function GP(a,b){var c;a.ip=b;c=b.ss;BD(b);ZC(a,c,3.0);}
function Ny(a){var b;b=a.Q;b.dQ=BY(b.dQ,null);b.eo=null;a.V=BY(a.V,null);}
function KY(a,b){var c,d,e;c=a.V;d=c.i;e=c.k;b=BY(c,b);a.V=b;b.eW(d,e,a.bo.cb);}
function EU(a,b,c){a.V.eW(b,c,a.bo.cb);Im(a);}
function Im(a){var b,c,d;if(a.bo.cb!==0.0){b=a.Q;if(b.hj!==null){c=a.V.k.a;b.k.a=c;d=b.dQ;if(d!==null&&c!=BZ(d)&&!(c>=b.h$&&BZ(b.dQ)>=b.h$))b.ew=1;b=a.Q;b.bN=a.bo.cb;if(NY(b))c=0;else{b=a.Q;Qa(b,UQ(b));c=b.k.b;}b=a.Q.i;d=a.V.i;V(b,d.a,d.b-c|0);return;}}}
function L0(a,b){var c;c=!(a.pj&1)?0:1;return !c&&!B2(a.V,b.h)?0:1;}
function LR(b,c){if(b<0)c=C(411);else if(b>0)c=C(412);return c;}
function Of(a,b,c){var d;d=a.Q.i.a;return (d-c|0)<=b&&b<d?1:0;}
function Ms(a,b,c){var d,e;d=a.Q;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function MS(a,b,c){var d;d=a.Q.i.b;return (d-c|0)<=b&&b<d?1:0;}
function Kv(a,b,c){var d,e;d=a.V;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function NZ(a,b,c){var d,e,f;d=a.Q.i.b-c|0;e=a.V;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function ACz(a,b,c){var d,e;d=a.Q.i.b+c|0;e=a.V;return AIl(b,d,(e.i.b+e.k.b|0)-c|0);}
function ML(a,b,c){var d,e,f;d=a.Q;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function Wz(a,b,c){var d,e;d=a.Q;e=d.i.a;return AIl(b,e+c|0,(e+d.k.a|0)-c|0);}
function AIl(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BK(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function JT(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.V;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new WA;b.zF=a;b.zG=e;b.zD=f;b.zE=c;b.zB=g;b.zC=j;b.zz=l;b.zA=d;b.zx=h;b.zy=k;b.tT=m;return b;}
var AEB=G();
function SP(){var a=this;B.call(a);a.qS=null;a.tl=null;a.zr=null;}
var AHE=G(0);
function AGV(b){if(b===null)return C(176);if(!Dy(b,C(413))&&!Dy(b,C(414))&&!Dy(b,C(415))&&!Dy(b,C(416))&&!Dy(b,C(417))&&!Dy(b,C(418))){if(Dy(b,C(419)))return C(177);if(Dy(b,C(420)))return C(179);if(Dy(b,C(421)))return C(180);if(!Dy(b,C(422))&&!Dy(b,C(423)))return C(176);return C(424);}return C(178);}
function AHc(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(NC(b)){case -1655966961:if(!Bi(b,C(180)))break a;c=4;break a;case 3401:if(!Bi(b,C(179)))break a;c=3;break a;case 98723:if(!Bi(b,C(178)))break a;c=2;break a;case 3213227:if(!Bi(b,C(424)))break a;c=5;break a;case 3254818:if(!Bi(b,C(177)))break a;c=1;break a;case 3556653:if(!Bi(b,C(176)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=EG();e
=new K;M(e);H(H(e,C(425)),b);Bl(d,L(e));c=0;break b;}c=0;}return c;}
function SD(){B.call(this);this.qw=null;}
function ASl(a,b,c,d){return LB(a.qw,b,c,d);}
function SC(){B.call(this);this.tV=null;}
function A0H(a,b,c){return G7(a.tV,b,c);}
function SF(){B.call(this);this.xx=null;}
function ANS(a){var b,c;b=a.xx;c=new AAB;c.xE=b;return c;}
function SE(){var a=this;B.call(a);a.C9=null;a.C7=null;a.C8=null;a.C$=null;a.C_=null;}
function WU(){B.call(this);this.j6=null;}
function A1C(a,b){var c,d,e,f,g;c=a.j6;d=c.l3;if(d!==null){e=b.h;f=e.a-d.a|0;g=e.b-d.b|0;e=c.kb;e.a=E0(0,e.a+f|0,c.gE.a-c.jz.a|0);c=a.j6;d=c.kb;d.b=E0(0,d.b+g|0,c.gE.b-c.jz.b|0);}a.j6.l3=b.h;return 1;}
var AEH=G();
function LK(){return "clipboard" in $rt_globals.navigator?1:0;}
function AGe(){var a=this;B.call(a);a.cT=null;a.cc=null;a.kc=null;a.kq=null;a.nv=null;a.jH=null;}
function M8(a){var b=new AGe();AYY(b,a);return b;}
function AYY(a,b){a.cc=BH();a.jH=A6N;a.cT=b;Bc(b.ei,a);}
function Ga(a,b,c){a.kc=c;a.nv=b;b=B6(a.cc);while(B$(b)){Jx(B_(b),a.nv);}}
function Je(a,b,c,d){a.jH=d;Lc(a,b,c);}
function Lc(a,b,c){var d,e;d=a.cT;e=d.b0;if(Bb(e.a,e.b)&&d.cb!==0.0){if(a.kc!==null&&!Jk(a)){a.kq=F9(a.cT,a.kc);d=UD(a,b,c,null,null);b=new Rt;b.s7=a;d.kv=b;FF(a.cT,a);return;}b=new BR;X(b);N(b);}c=new C4;Bm(c,C(426));N(c);}
function L$(a){if(Jk(a)){AAv(a.cT,a);AAn(a,null);a.jH.g();a.jH=A6N;}}
function UD(a,b,c,d,e){var f,g,h;f=AIG();ADh(f);M5(f,c.cW());Jx(f,a.nv);Jv(f,a.kq,a.cT);if(d===null)g=b.a;else{g=b.a;g=a.cT.b0.a<((g+(Ev(d)).a|0)+(Ev(f)).a|0)?g-(Ev(f)).a|0:(g+(Ev(d)).a|0)-d.fU|0;}h=b.b;b=a.cT.b0;MZ(f,Bd(0,Be(g,b.a-(Ev(f)).a|0)),Bd(0,Be(h,b.b-(Ev(f)).b|0)));b=new AA0;b.uA=a;b.ux=f;b.uy=e;f.ow=b;BC(a.cc,f);return f;}
function A1i(a,b,c){var d;a.kq=F9(a.cT,a.kc);d=B6(a.cc);while(B$(d)){Jv(B_(d),a.kq,a.cT);}}
function AO5(a,b){var c;if(!Jk(a))return 0;a:{switch(b.bl){case 27:L$(a);c=1;break a;default:}c=0;}return c;}
function AAn(a,b){var c,d;c=a.cc.m-1|0;a:{while(true){if(c<0)break a;d=Bw(a.cc,c);if(b===d)break;EF(a.cc,c);MD(d);c=c+(-1)|0;}}}
function Jk(a){return a.cc.m<=0?0:1;}
function AQR(a){var b,c,d,e,f,g;b=a.cT;c=b.ei;d=0;while(true){e=c.g1.data;f=e.length;if(d>=f)break;if(e[d]===a){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.gg=c.gg-1|0;c.io=null;}d=d+1|0;}AAv(b,a);b=a.cc;c=B6(b);while(B$(c)){MD(B_(c));}Ip(b);}
function Vj(){B.call(this);this.qx=null;}
function AWt(a,b){L_(a.qx,b);}
function Xj(){B.call(this);this.t4=null;}
function AS5(a,b){var c,d,e,f;c=a.t4;if(c.hN!=3&&c.fH!=3){b=b.data;c.h1=3;d=CN(b[0]);e=EJ(b[1]);NP(c.f,d,e);if(c.fC){b=EW(c);f=JD(EY(),c.iN);c=new K;M(c);H(HD(H(H(c,b),C(427)),f),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}
function AAQ(){B.call(this);this.yU=null;}
function AXI(a,b){var c,d,e,f,g,h;c=a.yU;if(c.fH!=3){d=b.data;c.hN=3;if((CN(d[2])).data[0]!=1)L_(c,b);else{e=CN(d[0]);f=EJ(d[1]);g=c.h1!=3?0:1;QV(c.f,e,f,g);if(c.fC){b=EW(c);h=JD(EY(),c.iN);c=new K;M(c);H(HD(H(H(c,b),C(428)),h),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}}
function ABP(){B.call(this);this.kf=null;}
function A1l(a){return a.kf;}
var AI1=G(0);
var LG=G(0);
function QD(){B.call(this);this.tv=null;}
function AUP(a,b){return K1(a.tv,b);}
function O5(){B.call(this);this.zv=null;}
function A0l(a,b){var c,d;c=a.zv;d=b.bp;return Pa(c.charCodeAt(d)&65535);}
var AFE=G();
function AHY(b,c,d,e,f,g){g.a=c.a;g.b=f;Bs(b,d.a,d.b,g,e);Bs(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bs(b,d.a,d.b+f|0,g,e);Bs(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AI9(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bs(b,j,k,i,h);Bs(b,j,k,i,h);Bs(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bs(b,l,j,i,h);Bs(b,l,j,i,h);Bs(b,l+g|0,j+g|0,i,h);}
function Qi(){var a=this;B.call(a);a.cL=null;a.pG=null;a.fe=null;a.d7=0;a.cp=0;a.iY=null;a.jD=null;a.hf=0;a.v1=0;}
function O2(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d7;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}EK(c);j=d+(-1)|0;b=Dh(d);d=Bb(j,a.cp)%a.fe.b|0;GF(a,c,b,a.hf,g);JC(a.cL,c,0,d);if(!(j%a.d7|0))break;d=j;}}else{EK(b);k=a.d7-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GF(a,b,Dh(j),Bb(a.cp,k)+a.hf|0,g);k=k+(-1)|0;j=h;}CK(a.cL,b);j=Bd(i,e);}return j;}k=a.d7;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EK(c);b=Dh((d+f|0)+1|0);j=d
+1|0;d=Bb(d,a.cp)%a.fe.b|0;GF(a,c,b,a.hf,g);JC(a.cL,c,0,d);if(!(j%a.d7|0))break;d=j;}}else{EK(b);d=0;while(d<a.d7){h=h+1|0;GF(a,b,Dh((h>e?h-f|0:h)+f|0),Bb(a.cp,d)+a.hf|0,g);d=d+1|0;}CK(a.cL,b);j=Be(i,e);}return j;}
function Vn(b,c,d,e){c=c.data;return d<c.length&&c[d]?JP(b.dX,b,c[d]):e.kJ;}
function M3(a,b,c,d,e,f){D3(b,a.pG.a+d.a|0,c+d.b|0,a.iY,a.jD,a.cL,e,f,a.v1);}
function GF(a,b,c,d,e){BW(b,c,a.fe.a-20.0*e,d);}
var ADx=G();
function Hr(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AD0(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Ts(){var a=this;B.call(a);a.Ag=null;a.Ah=null;a.id=null;}
function A3J(a,b,c){var d=new Ts();AFe(d,a,b,c);return d;}
function AFe(a,b,c,d){a.Ag=b;a.Ah=c;a.id=d;}
function GC(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.id.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hQ:i.hR;k=!c?i.nI:i.nJ;l=BK(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function LS(){var a=this;B.call(a);a.hR=0;a.nJ=0;a.hQ=0;a.nI=0;a.on=0;}
function M4(a,b,c,d,e){var f=new LS();AZI(f,a,b,c,d,e);return f;}
function AZI(a,b,c,d,e,f){a.hR=b;a.nJ=c;a.hQ=d;a.nI=e;a.on=f;}
var RW=G(0);
var A5R=null;function AJf(){A5R=new QQ;}
function ABq(){var a=this;B.call(a);a.r4=null;a.r5=null;}
function AUQ(a,b){var c,d,e;c=a.r4;d=a.r5;c=c.fj.eb.u;e=c.a;b=b.h;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Cs(d,b);}
var F8=G(IY);
var ACE=G(Fs);
function ACH(){B.call(this);this.ue=null;}
function ATz(a,b){var c,d;c=a.ue;UX(c,Fq(c,b.h));b=Bj(c);d=c.d;NL(b,d.w,d.z);H3(c);}
function TC(){B.call(this);this.wI=null;}
function A0G(a,b){var c,d;c=a.wI;d=c.d6+1|0;c.d6=d;c=new K;M(c);H(H(U(c,d),C(429)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function U4(){B.call(this);this.wR=null;}
function AZj(a){var b,c;b=a.wR;c=new K;M(c);H(H(H(c,C(430)),b),C(431));$rt_globals.console.info($rt_ustr(L(c)));}
var ACQ=G(En);
var A7l=null;function Ww(b){var c;c=new K;M(c);return L(EA(c,b));}
function AFx(){A7l=F($rt_floatcls());}
var Gn=G();
var A7m=null;var A7n=null;var A4Q=null;var A4P=null;var A4O=null;function AIx(){A7m=DT([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A7n=AHF([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A4Q=AHF([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);A4P=new AAH;A4O=new Tw;}
var Ju=G();
var A7o=0;var A7p=null;var A7q=null;function AIX(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.qF=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.mH=0;c.mw=0;return;}if(f)d=e|8388608;else{d=e<<1;while(IA(Db(Bp(d),Bp(8388608)),FB)){d=d<<1;f=f+(-1)|0;}}g=AI4(A7q,f);if(g<0)g= -g|0;h=A7q.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jr(d,A7p.data[e],i);if(j<A7o){while($rt_ucmp(j,A7o)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A7q.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jr(d,
A7p.data[e],i);}e=d<<1;d=e+1|0;h=A7p.data;f=g+1|0;k=h[f];l=i-1|0;m=Jr(d,k,l);n=Jr(e-1|0,A7p.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bb($rt_udiv(j,o),o):q<0?Bb($rt_udiv(j,k),k)+k|0:Bb($rt_udiv((j+(k/2|0)|0),k),k);if(DD(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.mH=d;c.mw=g-50|0;}
function Jr(b,c,d){return GG(F6(Ch(Db(Bp(b),D(4294967295, 0)),Db(Bp(c),D(4294967295, 0))),32-d|0));}
function AH8(){A7o=$rt_udiv((-1),10);A7p=DT([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A7q=DT([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Tw(){var a=this;B.call(a);a.mH=0;a.mw=0;a.qF=0;}
function N8(){var a=this;B.call(a);a.Dx=null;a.vI=0.0;a.BQ=0.0;a.gd=null;a.i9=null;a.ns=null;a.fY=0;}
function AJW(a,b){var c;if(b!==null){a.i9=b;return a;}c=new BR;Bm(c,C(432));N(c);}
function AFp(a,b){var c;if(b!==null){a.ns=b;return a;}c=new BR;Bm(c,C(432));N(c);}
function Yk(a,b,c,d){var e,f,g,$$je;e=a.fY;if(!(e==2&&!d)&&e!=3){a.fY=d?2:1;while(true){try{f=AGq(a,b,c);}catch($$e){$$je=EQ($$e);if($$je instanceof Bt){g=$$je;N(AVd(g));}else{throw $$e;}}if(H$(f))return f;if(IS(f)){if(d&&D5(b)){g=a.i9;He();if(g===A5h)return Eo(Cg(b));if(Cg(c)<=J(a.gd))return A5k;Fp(b,b.Y+Cg(b)|0);if(a.i9===A5i)M0(c,a.gd);}return f;}if(QX(f)){g=a.i9;He();if(g===A5h)return f;if(g===A5i){if(Cg(c)<J(a.gd))return A5k;M0(c,a.gd);}Fp(b,b.Y+KT(f)|0);}else if(L4(f)){g=a.ns;He();if(g===A5h)break;if(g
===A5i){if(Cg(c)<J(a.gd))return A5k;M0(c,a.gd);}Fp(b,b.Y+KT(f)|0);}}return f;}b=new C4;X(b);N(b);}
function AHH(a,b){var c,d,e,f;c=a.fY;if(c&&c!=3){b=new C4;X(b);N(b);}if(!Cg(b))return AGP(0);if(a.fY)a.fY=0;d=AGP(Bd(8,Cg(b)*a.vI|0));while(true){e=Yk(a,b,d,0);if(IS(e))break;if(H$(e))d=ZD(a,d);if(!Nm(e))continue;Tv(e);}b=Yk(a,b,d,1);if(Nm(b))Tv(b);while(true){f=a.fY;if(f!=3&&f!=2)break;a.fY=3;if(IS(A5l)){d.ed=d.Y;d.Y=0;d.js=(-1);return d;}d=ZD(a,d);}b=new C4;X(b);N(b);}
function ZD(a,b){var c,d,e;c=b.iq;d=Kt(c,Bd(8,c.data.length*2|0));e=AIH(d,0,d.data.length);Fp(e,b.Y);return e;}
function ABV(){var a=this;B.call(a);a.bq=0;a.bv=0;}
function DO(a,b){var c=new ABV();AIN(c,a,b);return c;}
function AIN(a,b,c){a.bq=b;a.bv=c;}
function AKJ(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.bq==c.bq&&a.bv==c.bv?1:0;}return 0;}
function AQ6(a){return AFH(I(B,[CU(a.bq),CU(a.bv)]));}
function AYH(a,b){var c;b=b;c=BK(a.bq,b.bq);if(!c)c=BK(a.bv,b.bv);return c;}
var AER=G(CY);
function T3(){B.call(this);this.Cs=null;}
function ALA(a){Bl(Bx(),C(433));}
var ADc=G(0);
var A6N=null;function AGa(){A6N=new Wv;}
function HS(){CD.call(this);this.c4=null;}
function Vq(a,b){var c;if(a.c4===null){a.c4=b;return;}c=new Eb;X(c);N(c);}
function AXY(a){var b,c,d;b=a.c4.data;c=b.length;d=0;while(d<c){b[d].cC();d=d+1|0;}}
function APE(a,b){var c,d,e;c=a.c4.data;d=c.length;e=0;while(e<d){c[e].dr(b);e=e+1|0;}}
function ATZ(a,b){var c,d,e,f;c=0;d=a.c4.data;e=d.length;f=0;while(f<e){c=c|d[f].cg(b);f=f+1|0;}return c;}
function AMq(a,b,c,d){HI(a,b,c,d);a.AQ();}
function A0r(a,b,c,d){var e,f,g,h,i;e=0;f=a.c4.data;g=f.length;h=0;while(h<g){i=f[h];if(B2(i,b.h))e=e|i.ct(b,c,d);h=h+1|0;}return e;}
function ARY(a,b,c){var d,e,f,g,h;d=a.c4.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B2(g,b.h)){h=g.cu(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A0z(a,b,c){var d,e,f,g,h;d=0;e=a.c4.data;f=e.length;g=0;while(g<f){h=e[g];if(B2(h,b.h))d=d|h.du(b,c);g=g+1|0;}return d;}
function A0W(a,b){var c,d,e,f,g;c=0;d=a.c4.data;e=d.length;f=0;while(f<e){g=d[f];if(B2(g,b.h))c=c|g.bQ(b);f=f+1|0;}return c;}
function AM2(a,b,c,d){var e,f,g,h,i;e=0;f=a.c4.data;g=f.length;h=0;while(h<g){i=f[h];if(B2(i,b.h))e=e|i.ds(b,c,d);h=h+1|0;}return e;}
function Qs(){var a=this;HS.call(a);a.rv=null;a.zk=null;a.f$=null;a.n_=null;a.kp=null;a.ga=null;a.fK=null;}
function AOm(a){var b,c,d,e;b=a.k.a/4|0;c=b+Du(a,1.0)|0;d=AIU(a.i);e=BJ(b,a.k.b);a.c4.data[0].eW(d,e,a.bN);d.a=a.i.a+b|0;e.a=c-b|0;a.c4.data[1].eW(d,e,a.bN);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.c4.data[2].eW(d,e,a.bN);}
function AWj(a){var b,c;b=AGh(a.fK);c=AGR(a.kp);return BJ((b.a+a.n_.k.a|0)+c.a|0,b.b);}
function Yi(){B.call(this);this.AM=null;}
function AUe(a,b){var c,d;c=a.AM;d=c.d6+1|0;c.d6=d;c=b.iD;b=new K;M(b);H(H(U(b,d),C(434)),c);$rt_globals.console.info($rt_ustr(L(b)));}
var QQ=G();
function AXV(a,b){}
function Fh(){var a=this;CD.call(a);a.cF=null;a.T=null;a.e2=null;}
function A7r(){var a=new Fh();Lz(a);return a;}
function Lz(a){EX(a);a.cF=new Bg;a.T=new Bg;}
function AV8(a,b){a.e2=b;}
function Su(a,b,c){V(a.cF,b,c);}
function SL(a){var b;b=a.e2;if(b!==null)ABD(b);}
function AEQ(a){var b;b=a.T;b.a=V_(a,b.a);b=a.T;b.b=AB3(a,b.b);}
function AFW(a,b){var c,d;c=a.T.a;d=V_(a,b);a.T.a=d;return c==d?0:1;}
function AKi(a,b){var c,d;c=a.T.b;d=AB3(a,b);a.T.b=d;return c==d?0:1;}
function AB3(a,b){return Bd(0,Be(b,a.cF.b-a.k.b|0));}
function V_(a,b){return Bd(0,Be(b,a.cF.a-a.k.a|0));}
function QM(){var a=this;Fh.call(a);a.bS=null;a.dY=null;a.hZ=null;a.zw=null;a.ec=null;a.b2=null;a.eP=null;a.fB=null;a.dK=0;a.fy=0;a.AP=null;a.dW=0;a.eD=0;a.hm=0;a.fV=0;a.fM=0;a.cN=0;a.eR=null;a.j1=null;a.xR=null;a.il=null;}
function A31(a,b){var c=new QM();AJT(c,a,b);return c;}
function AJT(a,b,c){Lz(a);a.dY=RR();a.hZ=new Bg;a.b2=A7s;a.eP=Q(JS,0);a.dW=0;a.eD=0;a.hm=0;a.fV=0;a.fM=0;a.eR=AHr(0);a.il=JI();a.bS=b;a.j1=c;a.AP=c;P4(a);}
function P4(a){a.dK=Cf(2.0,a.bS.cb);}
function UO(a){return a.b2.data.length?0:1;}
function Wo(a,b){SJ(a);a.b2=b;}
function SJ(a){V(a.hZ,0,0);}
function Vr(a,b,c){a.xR=b;a.zw=c;a.ec=null;a.eR=null;a.fy=0;SJ(a);}
function A0E(a){a.fB=BY(a.fB,null);V(a.hZ,0,0);Fr(a.il);a.eR=null;a.b2=A7s;a.eP=null;a.dW=0;a.eD=0;a.hm=0;AAc(a.dY);a.j1=null;}
function AVs(a,b,c){XM(a);P4(a);a.ec=null;a.eR=null;a.fy=0;}
function ATO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=J7(a.bS);if(UO(a))return;KL(a);Cl(c,a.ec);d=Ee(a);e=AHb(c,a.fy);f=Be(H4(a.k.b,d),a.b2.data.length)+30|0;g=a.xR.AD;h=a.eP.data;d=h.length;if(d<f){a:{i=a.fV;j=a.fM;k=a.b2;l=a.eR;m=a.il;n=Q(JS,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.gI!==c){ABK(l,q,m);o[f]=Mw(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Mw(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Mw(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ABK(l,c,m);h[f]=null;}f=f+1|0;}a.eP=n;Cs(a.hZ,Mv(a.eR));XZ(a,a.bS.b4);}a.fV=Be((a.T.b+a.dK|0)/(Ee(a)+a.dK|0)|0,a.b2.data.length-1|0);a.fM=Be((((a.T.b+a.dY.t.b|0)-1|0)+a.dK|0)/(Ee(a)+a.dK|0)|0,a.b2.data.length-1|0);if(!a.eP.data.length)return;AG8(a,e);ABy(a,b);q=g.zo;c=a.i;Bs(b,c.a,c.b,a.k,q);c=a.dY.u;i=c.a;j=c.b;p=CE(a.bS,2.0);s=a.bS.dw;t=a.fV;u=i+p|0;while(t<=a.fM){l=Xi(a,t);d=Bb(t,Ee(a));v
=t+1|0;w=d+Bb(v,a.dK)|0;x=u+a.dW|0;y=x+a.eD|0;z=a.cN!=t?0:1;m=!z?q:g.r2;ba=!z?g.tg:g.kU;bb=!z?g.qt:g.kU;bc=!z?g.q8:g.kU;bd=(j+w|0)-a.T.b|0;D3(b,u,bd,l.je,l.sC,a.fB,ba,m,a.bS.cv);D3(b,x,bd,l.jG,l.kR,a.fB,bb,m,a.bS.cv);D3(b,y,bd,l.jf,l.ko,a.fB,bc,m,a.bS.cv);d=l.je.a;be=u+d|0;V(s,Bd(0,a.dW-d|0),l.je.b);Bs(b,be,bd,s,m);d=u+a.dW|0;f=l.jG.a;bf=d+f|0;V(s,Bd(0,a.eD-f|0),l.jG.b);Bs(b,bf,bd,s,m);d=l.jf.a;bg=y+d|0;V(s,Bd(0,(((a.dY.t.a-d|0)-a.eD|0)-a.dW|0)-p|0),l.jf.b);Bs(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;V(s,p,Ee(a)+a.dK
|0);Bs(b,bh,bd,s,q);t=v;}F5(b);}
function AG8(a,b){var c,d,e,f,g,h;c=0;d=a.fV;while(d<=a.fM){e=Xi(a,d);if(!(e!==null&&e.gI===a.b2.data[d])){f=a.eP.data;g=a.b2;e=a.eR;h=a.il;c=d%f.length|0;if(f[c]!==null)ABK(e,f[c],h);f[c]=Mw(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cs(a.hZ,Mv(a.eR));XZ(a,a.bS.b4);}}
function XZ(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.hZ;c=D1(b,c.a+150|0,c.b,a.bS.cv);Cl(c,a.ec);d=a.ec;e=d.ef;f=e-(e+d.ev)/16.0;g=a.eP.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gI.k$;k=d.kR;BW(c,j,k.bm+a.fy,f+k.bs);j=d.gI.lp;d=d.ko;BW(c,j,d.bm+a.fy,f+d.bs);}i=i+1|0;}a:{d=a.il;if(d.c5>0){h=d.cX;i=0;b:while(true){g=d.b3.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cQ;l=j.cM;k=k;l=l.lI;BW(c,k,l.bm+a.fy,f+l.bs);j=j.cU;if(h!=d.cX)break b;}i=i+1|0;}b=new H6;X(b);N(b);}}if(a.fB===null)a.fB=CT(b);CK(a.fB,
c);Eu(c);}
function Xi(a,b){var c;c=a.eP.data;return c[b%c.length|0];}
function AYG(a,b){Cs(a.dY.t,b);}
function AZN(a,b){Cs(a.dY.u,b);}
function XM(a){var b,c,d,e,f,g,h,i,j;b=J7(a.bS);if(UO(a))return;KL(a);Cl(b,a.ec);c=AHb(b,a.fy);d=a.b2.data;e=d.length;f=0;while(f<e){g=d[f];h=Nc(c,g.hu);i=Nc(c,g.k$);j=Nc(c,g.lp);a.dW=Bd(a.dW,h);a.eD=Bd(a.eD,i);a.hm=Bd(a.hm,j);f=f+1|0;}}
function AOX(a,b){var c;c=Zr(a,b.h);if(c>=0)a.cN=c;return E7(a.dY,a.i)&&Gx(a.bS.cP)?1:0;}
function AM_(a,b,c){if(!E7(a.dY,b.h)&&!KZ(a.dY)){b=a.AP;if(b!==null)b.g();}return null;}
function AQY(a,b,c,d){var e;if(d==1){e=Zr(a,b.h);if(e>=0)TW(a,a.b2.data[e]);}return 1;}
function TW(a,b){a.j1.g();b.s8.g();}
function Zr(a,b){var c,d,e;if(!a.eP.data.length)return (-1);c=Ee(a);d=(b.b-a.i.b|0)+a.T.b|0;e=a.dK;e=(d+e|0)/(c+e|0)|0;if(e<a.b2.data.length)return e;return (-1);}
function Ee(a){return E1(a.ec);}
function KL(a){var b;if(a.ec===null){b=F9(a.bS,a.zw);a.ec=b;a.eR=AHr(E1(b));a.fy=CV(a.ec.pw);}}
function AZY(a,b){var c,d,e;a:{switch(b.bl){case 13:TW(a,a.b2.data[a.cN]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cN=a.fV;b=a.e2;c=a.T;I9(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.cN=a.fM;b=a.e2;c=a.T;I9(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.cN=a.b2.data.length-1|0;break a;case 36:case 37:a.cN=0;break a;case 38:d=a.cN;e=a.b2.data.length;a.cN=((d+e|0)
-1|0)%e|0;break a;case 40:a.cN=(a.cN+1|0)%a.b2.data.length|0;break a;default:break a;}a.j1.g();return 0;}e=a.cN;if(e<=a.fV)I9(a.e2,a.T.a,Bb(e,Ee(a))+Bb(a.cN,a.dK)|0);else if(e>=a.fM)I9(a.e2,a.T.a,(Bb(e+1|0,Ee(a))+Bb(a.cN+2|0,a.dK)|0)-a.k.b|0);return 0;}
var Un=G();
function ASE(a){}
function AEp(){var a=this;CD.call(a);a.nU=null;a.wS=null;a.zp=null;a.bL=null;a.dh=null;a.dx=null;a.tq=null;a.qC=null;a.uD=0.0;a.oW=null;a.oj=null;}
function Gw(a,b){var c=new AEp();ATw(c,a,b);return c;}
function ATw(a,b,c){var d;c=c.cP;EX(a);d=new Pz;d.xQ=a;a.wS=d;d=new Py;d.yv=a;a.zp=d;a.uD=10.0;a.bL=b;a.nU=c;b.e2=a;}
function ARB(a){var b;b=a.bL;b.e2=null;a.bL=BY(b,null);}
function I8(a,b,c){var d;a.oj=c;a.oW=b;d=a.dh;if(d!==null)H0(d,b,c);b=a.dx;if(b!==null)H0(b,a.oW,a.oj);}
function QU(a,b,c,d){HI(a,b,c,d);HI(a.bL,b,c,d);if(d!==0.0)ABD(a);}
function I9(a,b,c){KX(a,b);Lr(a,c);}
function ABD(a){var b;AEQ(a.bL);b=FI(a)*3|0;if(YL(a,b))Tg(a);else a.dx=null;if(AC$(a,b))V2(a);else a.dh=null;}
function AC$(a,b){var c;c=a.k.b;return c>b&&a.bL.cF.b>c?1:0;}
function YL(a,b){var c;c=a.k.a;return c>b&&a.bL.cF.a>c?1:0;}
function Tg(a){var b,c,d,e,f,g;b=a.dx;if(b===null)b=I1();a.dx=b;OM(a,b);c=a.dx;b=a.bL;d=b.T.a;e=a.i;f=e.a;g=a.k;QT(c,d,f,g.a,b.cF.a,e.b+g.b|0,FI(a));}
function V2(a){var b,c,d,e,f,g;b=a.dh;if(b===null)b=I1();a.dh=b;OM(a,b);c=a.dh;b=a.bL;d=b.T.b;e=a.i;f=e.b;g=a.k;J_(c,d,f,g.b,b.cF.b,e.a+g.a|0,FI(a));}
function FI(a){return Du(a,a.uD);}
function OM(a,b){H0(b,a.oW,a.oj);}
function AZa(a,b){var c;a.bL.dr(b);if(!(a.dh===null&&a.dx===null)){B9(b,1);c=a.dh;if(c!==null)GL(c,b);c=a.dx;if(c!==null)GL(c,b);c=a.dh;if(c!==null)GS(c,b);c=a.dx;if(c!==null)GS(c,b);B9(b,0);}}
function SS(a,b){var c,d;a:{b:{c=a.dh;if(!(c!==null&&ID(c,b))){c=a.dx;if(c===null)break b;if(!ID(c,b))break b;}d=1;break a;}d=0;}return d;}
function ARW(a,b,c,d){return !SS(a,b.h)&&!a.bL.ct(b,c,d)?0:1;}
function KX(a,b){var c;b=AFW(a.bL,b);if(YL(a,FI(a)*3|0))Tg(a);if(b){c=a.tq;if(c!==null)c.g();}}
function Lr(a,b){var c;if(AB5(a,b)){c=a.qC;if(c!==null)c.g();}}
function AB5(a,b){var c;c=AKi(a.bL,b);if(AC$(a,FI(a)*3|0))V2(a);return c;}
function ARD(a,b,c){var d,e;d=a.dh;if(d!==null){e=FX(d,b.h,a.wS,1);if(e!==null)return e;}d=a.dx;if(d!==null){e=FX(d,b.h,a.zp,0);if(e!==null)return e;}return a.bL.cu(b,c);}
function AP0(a,b,c){return SS(a,b.h)?1:0;}
function APM(a,b){var c,d,e;c=a.dh;d=c!==null&&F3(c,b.h,a.nU)?1:0;c=a.dx;e=c!==null&&F3(c,b.h,a.nU)?1:0;return !d&&!e&&!a.bL.bQ(b)?0:1;}
function AVM(a,b,c,d){var e,f;if(!B2(a,b.h))return 0;e=Cf(d*0.5,a.bN);f=Cf(c*0.5,a.bN);if(b.bJ){f=f+e|0;e=0;}if(a.dh!==null&&e)Lr(a,a.bL.T.b+e|0);if(a.dx!==null&&f)KX(a,a.bL.T.a+f|0);return 1;}
function AGR(a){var b,c;b=FI(a);c=a.bL.hF();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
function PM(){var a=this;Fh.call(a);a.lO=null;a.pc=null;a.xd=null;a.rq=0.0;}
function ASM(a){var b;b=Cf(20.0,a.bN);return BJ(b,b);}
function AYM(a,b){var c,d,e;Su(a,b.a*3|0,b.b*5|0);c=a.xd;d=c.sq;c=c.sp;b=Cv(b);e=new K;M(e);H(H(H(e,c),C(29)),b);FM(d,L(e));}
function AS0(a,b){var c,d,e,f,g,h,i,j,k,l,m;AJZ(a,b);ABy(a,b);c=Cf(30.0,a.bN);d=a.T;e=d.a;f=Bb(e/c|0,c);g=d.b;h=Bb(g/c|0,c);d=a.k;i=Bb(((e+d.a|0)-1|0)/c|0,c);e=Bb(((g+d.b|0)-1|0)/c|0,c);d=a.pc;d.b=c;d.a=c;a.lO.bB=1.0;while(h<=e){g=a.i.b-a.T.b|0;j=f;while(j<=i){k=a.i.a-a.T.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AJO(l);m=m+1|0;}UA(AJp(l),0.75,a.rq,a.lO);Bs(b,k+j|0,g+h|0,a.pc,a.lO);j=j+c|0;}h=h+c|0;}F5(b);}
function AT4(a,b){}
function Rl(){var a=this;B.call(a);a.sq=null;a.sp=null;}
function TJ(){var a=this;CD.call(a);a.fW=null;a.hj=null;a.jp=null;a.eo=null;a.kn=0.0;a.ew=0;a.h$=0;a.dQ=null;a.md=null;}
function UQ(a){var b;if(NY(a))return 0;ABr(a);b=CE(a.fW,a.kn);return E1(a.eo)+(b*2|0)|0;}
function K8(a){var b;b=a.k;return b.a&&b.b?0:1;}
function NY(a){return a.hj!==null&&a.jp!==null?0:1;}
function Qa(a,b){a.k.b=b;}
function Qe(a,b,c,d,e){var f,g;f=a.fW.dw;V(f,d,a.k.b);g=a.i;Bs(b,g.a+c|0,g.b,f,e);}
function ABr(a){if(a.eo===null)a.eo=F9(a.fW,a.hj);}
var Zh=G(En);
var A7t=null;function Da(b,c){return Long_udiv(b, c);}
function AHm(b,c){return Long_urem(b, c);}
function DD(b,c){return Long_ucompare(b, c);}
function AId(){A7t=F($rt_longcls());}
function AAB(){B.call(this);this.xE=null;}
function AOH(a,b){DF(a.xE,b);}
function AC_(){B.call(this);this.Ao=null;}
function AW3(a){Yn(a.Ao);}
function AC4(){B.call(this);this.A6=null;}
function AYI(a){ABQ(a.A6);}
function Ug(){B.call(this);this.uw=null;}
function AZv(a){Rj(a.uw);}
function AJ_(){var a=this;HS.call(a);a.dj=null;a.di=null;a.h6=null;a.h5=null;a.gF=null;a.pW=null;}
function AUC(a){var b=new AJ_();ALB(b,a);return b;}
function ALB(a,b){var c,d;EX(a);a.dj=S_(b);a.di=S_(b);a.h6=Gw(a.dj,b);a.h5=Gw(a.di,b);a.gF=AUJ(b);c=AKW(a.h6,a.dj);d=AKW(a.h5,a.di);AB6(a.gF,c,d);a.pW=ASf(c,d);Vq(a,I(CD,[a.h6,a.gF,a.h5]));}
function AC9(a,b){a.gF.jU=b;JW(a.dj,b);Jw(a.dj,a.h6);JW(a.di,b);Jw(a.di,a.h5);}
function KH(a,b){a.pW.h2=b;a.gF.eQ=b;}
function AOU(a){var b,c,d,e,f;b=Cf(20.0,a.bN);c=a.k.a;d=(c/2|0)-(b/2|0)|0;c=c-d|0;e=AIU(a.i);f=BJ(d,a.k.b);QU(a.h6,e,f,a.bN);e.a=a.i.a+c|0;QU(a.h5,e,f,a.bN);e.a=a.i.a+d|0;f.a=c-d|0;HI(a.gF,e,f,a.bN);}
function AAy(){B.call(this);this.nE=null;}
var A7s=null;function AOc(){var a=new AAy();AD$(a);return a;}
function AD$(a){a.nE=BH();}
function Vw(a,b,c,d,e){var f;f=new K0;f.s8=e;f.k$=c;f.lp=d;f.hu=b;BC(a.nE,f);}
function ACi(a){return Gf(a.nE,A7s);}
function ZJ(b){return b===null?C(21):ABu(b);}
function AJU(){A7s=Q(K0,0);}
function JS(){var a=this;B.call(a);a.sC=null;a.kR=null;a.ko=null;a.je=null;a.jG=null;a.jf=null;a.gI=null;}
function Mw(b,c,d,e){var f,g,h;f=new JS;f.je=new Bg;f.jG=new Bg;f.jf=new Bg;f.gI=b;g=Cn(e,b.hu);if(g!==null)g.iB=g.iB+1|0;else{g=new ABR;h=Kf(c,b.hu,d);g.iB=1;g.lI=h;Ek(e,b.hu,g);}e=g.lI;f.sC=e;V(f.je,e.be|0,e.bB|0);e=Kf(c,b.k$,d);f.kR=e;V(f.jG,e.be|0,e.bB|0);b=Kf(c,b.lp,d);f.ko=b;V(f.jf,b.be|0,b.bB|0);return f;}
function ABK(b,c,d){var e,f,g;e=c.gI.hu;f=Cn(d,e);g=f.iB-1|0;f.iB=g;if(!g){Lj(d,e);IQ(b,f.lI);}IQ(b,c.kR);IQ(b,c.ko);}
var Od=G(0);
var A6u=null;var A6v=null;function AFf(){A6u=ER(40,40,40,200);A6v=ER(43,43,43,128);}
function AAH(){var a=this;B.call(a);a.m3=FB;a.mh=0;a.qr=0;}
var Wv=G();
function ASQ(a){}
function Q6(){var a=this;B.call(a);a.u2=null;a.u1=null;}
function AP2(a){Hv(a.u2,a.u1);}
function Pd(){B.call(this);this.vO=null;}
function AVh(a){var b;b=a.vO;Hv(b,b.cR.dj);}
function Pe(){B.call(this);this.AX=null;}
function ATq(a){var b;b=a.AX;Hv(b,b.cR.di);}
function R4(){var a=this;B.call(a);a.z8=null;a.z5=null;a.z6=null;}
function AON(a){var b,c,d,e,f;b=a.z8;c=a.z5;d=a.z6;e=Bx();f=new K;M(f);b=H(f,b);BM(b,9);b=H(b,c);BM(b,9);H(b,d);Bl(e,L(f));}
function Pz(){B.call(this);this.xQ=null;}
function AKV(a,b){var c;c=a.xQ;Lr(c,FP(b,c.bL.cF.b-c.k.b|0));}
function Py(){B.call(this);this.yv=null;}
function ALb(a,b){var c;c=a.yv;KX(c,FP(b,c.bL.cF.a-c.k.a|0));}
function K0(){var a=this;B.call(a);a.s8=null;a.k$=null;a.lp=null;a.hu=null;}
var C4=G(Bt);
var AJd=G(Fs);
function AVd(a){var b=new AJd();APr(b,a);return b;}
function APr(a,b){a.kl=1;a.kG=1;a.mV=b;}
function AJ8(){var a=this;B.call(a);a.oa=null;a.mq=null;a.eB=null;a.mc=null;a.bx=null;a.o3=null;a.nb=null;a.fL=null;a.gz=null;a.jq=null;}
function ASY(a,b){var c=new AJ8();AXt(c,a,b);return c;}
function AXt(a,b,c){var d,e,f;a.eB=b;a.mc=c;a.bx=AUD();b=new K;M(b);a.jq=b;a.fL=JI();b=new R7;d=AJM(16);b.gr=0;b.dV=Q(Js,d);b.wU=0.75;TN(b);a.gz=b;b=new T1;c=a.bx;e=a.jq;f=a.fL;b.dv=c;b.l2=e;b.sd=f;a.o3=b;b=new TK;b.cV=c;b.mN=e;b.rw=f;a.nb=b;}
function Wj(a){var b,c,d,e,f,g,h;a:{b=MR(a.eB.e0);c=b.i5;if(c.c5>0){d=c.cX;e=0;b:while(true){f=b.i5.b3.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cQ;if(MG(a.fL,g))Cn(a.fL,g);else{h=a.fL;Ek(h,g,CU(h.c5));}c=c.cU;if(d!=b.i5.cX)break b;}e=e+1|0;}b=new H6;X(b);N(b);}}b=a.eB.fp;if(b!==null)YT(a,b);Bq(a.bx,a.eB.e0.c5);b=RU(MR(a.eB.e0));while(Gb(b)){c=PW(b);GU(a.bx,a.jq.K,J(c));BU(a.jq,c);}b=RU(MR(a.eB.e0));while(Gb(b)){c=PW(b);c=Cn(a.eB.e0,c);Bq(a.bx,c.m);c=B6(c);while(B$(c)){g=B_(c);g=Cn(a.fL,g);Bq(a.bx,
g.bp);}}if(a.eB.fp===null)Bq(a.bx,(-1));else{Bq(a.bx,a.gz.gr);Zy(a,a.eB.fp);}if(a.mc===null)Bq(a.bx,(-1));else{Bq(a.bx,1);ADL(a.mc,a.bx,a.gz);}a.oa=Qv(a.bx);a.mq=Gj(L(a.jq));}
function YT(a,b){var c,d,e,f,g,h;if(ABU(a.gz,b))N7(a.gz,b);else{c=a.gz;d=CU(c.gr);if(b===null){e=Yp(c);if(e===null){c.lH=c.lH+1|0;e=ABY(c,null,0,0);f=c.gr+1|0;c.gr=f;if(f>c.o4)Wd(c);}}else{g=Mo(b);h=g&(c.dV.data.length-1|0);e=Wp(c,b,h,g);if(e===null){c.lH=c.lH+1|0;e=ABY(c,b,h,g);f=c.gr+1|0;c.gr=f;if(f>c.o4)Wd(c);}}e.cM=d;}b=b.cH;if(b===null)return;c=new Va;c.rx=a;b.e9(c);}
function Zy(a,b){var c,d,e,f;c=(N7(a.gz,b)).bp;Bq(a.bx,c);if(b instanceof Nr)Bq(a.bx,(-1));else if(!(b instanceof K2))Bq(a.bx,0);else Bq(a.bx,1);d=a.o3;Bq(d.dv,b.eL.cZ());e=b.eL;f=new Vv;f.u6=d;e.e9(f);d=a.nb;Bq(d.cV,b.fq.cZ());e=b.fq;f=new Tp;f.tL=d;e.e9(f);d=b.k2;Bq(a.bx,d.cZ());e=new Uc;e.zU=a;d.e9(e);d=b.hz;Bq(a.bx,d.cZ());d=d.b5();while(d.cy()){e=d.b7();OT(a.o3,e.k4);G8(a.nb,e.kt);Bq(a.bx,e.re);}d=b.tH;if(d===null)Bq(a.bx,(-1));else Bq(a.bx,(Cn(a.fL,d)).bp);b=b.cH;Bq(a.bx,b.cZ());d=new PT;d.pU=a;b.e9(d);}
function RC(){B.call(this);this.uL=null;}
function AXZ(a,b){var c,d,e,f,g,h,i,j;c=a.uL;if(c.fC){d=EW(c);e=new K;M(e);H(H(e,d),C(435));$rt_globals.console.info($rt_ustr(L(e)));}b=b.data;f=CN(b[0]);g=EJ(b[1]);h=(CN(b[2])).data[0];if(c.f.cl==h){i=null;j=null;if(b.length>=5){i=CN(b[3]);j=EJ(b[4]);}b=D7(c);if(!Bi(b,C(180))&&!Bi(b,C(424))?0:1)NP(c.f,f,g);else{VD(c.f,f,g,i,j);Fr(c.f.dz);Fr(c.f.dI);MV(c.f);Kq(c.f);N3(c);}}}
function AAR(){B.call(this);this.vJ=null;}
function AWx(a,b){var c,d,e,f;c=a.vJ;if(c.fH!=3){b=b.data;d=CN(b[0]);e=EJ(b[1]);VD(c.f,d,e,null,null);if(c.fC){b=EW(c);f=JD(EY(),c.zg);c=new K;M(c);H(HD(H(H(c,b),C(436)),f),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}
function RK(){var a=this;B.call(a);a.uZ=null;a.u0=null;a.uY=0;}
function AVA(a,b){var c,d,e;c=a.uZ;d=a.u0;e=a.uY;d.j(Uo(c,(b.h.a+e|0)-c.eU.a|0));}
function RJ(){var a=this;B.call(a);a.rc=null;a.ra=null;a.rb=0;}
function A0D(a,b){var c,d,e;c=a.rc;d=a.ra;e=a.rb;d.j(Qf(c,(b.h.b+e|0)-c.eU.b|0));}
var Fa=G(0);
function Wq(){var a=this;B.call(a);a.jC=0;a.pC=0;a.lf=0;a.hE=0;a.i4=null;}
function B$(a){return a.jC>=a.lf?0:1;}
function B_(a){var b,c;P3(a);b=a.jC;a.hE=b;c=a.i4;a.jC=b+1|0;return c.nd(b);}
function YI(a){var b,c,d;if(a.hE<0){b=new C4;X(b);N(b);}P3(a);a.i4.pD(a.hE);a.pC=a.i4.bZ;c=a.hE;d=a.jC;if(c<d)a.jC=d-1|0;a.lf=a.lf-1|0;a.hE=(-1);}
function P3(a){var b;if(a.pC>=a.i4.bZ)return;b=new H6;X(b);N(b);}
function K6(){var a=this;N8.call(a);a.wy=null;a.yW=null;}
function AGq(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.wy;e=0;f=0;g=a.yW;a:{b:{while(true){if((e+32|0)>f&&D5(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cg(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BF;c=new K;M(c);U(H(U(H(c,C(437)),l),C(99)),h);Bm(b,L(c));N(b);}if(Cg(b)<m){b=new NW;X(b);N(b);}if(m<0){b=new BF;c=new K;M(c);H(U(H(c,C(100)),m),C(101));Bm(b,L(c));N(b);}n=b.Y;h=n+b.mP|0;e=0;while(e<m){o=k+1|0;i=b.pg.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Y=n+m|0;e=0;}if(!D5(c)){p=!D5(b)&&e>=f?A5l:A5k;break a;}i=g.data;n=Cg(c);o=i.length;n=Be(n,o);q=new ABi;q.sF=b;q.zQ=c;p=AJ7(a,d,e,f,g,0,n,q);e=q.u$;if(p===null&&0==q.mj)p=A5l;k=q.mj;h=0;if(c.pI){b=new Ke;X(b);N(b);}if(Cg(c)<k)break;if(h>o){b=new BF;c=new K;M(c);BM(U(H(U(H(c,C(102)),h),C(96)),o),41);Bm(b,L(c));N(b);}l=h+k|0;if(l>o){b=new BF;c=new K;M(c);U(H(U(H(c,C(104)),l),C(99)),o);Bm(b,L(c));N(b);}if(k<0){b=new BF;c=new K;M(c);H(U(H(c,C(100)),k),C(101));Bm(b,L(c));N(b);}o=c.Y;m=0;while(m
<k){l=o+1|0;n=h+1|0;Zv(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Y=c.Y+k|0;if(p!==null)break a;}b=new Jy;X(b);N(b);}b=new BF;c=new K;M(c);BM(U(H(U(H(c,C(102)),k),C(96)),h),41);Bm(b,L(c));N(b);}Fp(b,b.Y-(f-e|0)|0);return p;}
var Sq=G(K6);
function AJ7(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Nd(h,2))break a;i=A5l;break a;}c=k+1|0;n=j[k];if(!Gp(a,n)){c=c+(-2)|0;i=Eo(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Nd(h,3))break a;i=A5l;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gp(a,n))break b;if(!Gp(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Ob(p)){c=k+(-3)|0;i=Eo(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Eo(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Nd(h,4))break a;i=A5l;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cg(h.zQ)<2?0:1)break a;i=A5k;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gp(a,n))break c;if(!Gp(a,o))break c;if(!Gp(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=JH(r);m=c+1|0;j[c]=I5(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Eo(1);break a;}c=k+(-3)|0;i
=Eo(1);}h.u$=c;h.mj=f;return i;}
function Gp(a,b){return (b&192)!=128?0:1;}
function ACl(){var a=this;B.call(a);a.BS=null;a.BT=null;a.BR=null;}
function UW(){B.call(this);this.p7=null;}
function ASm(a,b){var c,d;c=a.p7;d=c.d6+1|0;c.d6=d;c=new K;M(c);H(H(U(c,d),C(438)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function PP(){B.call(this);this.pM=null;}
function AK1(a){return a.pM.gV();}
function PO(){B.call(this);this.AF=null;}
function AM4(a){return a.AF.gV();}
function Rg(){B.call(this);this.tm=null;}
function AZ8(a){return a.tm.gV();}
var WV=G();
function ATp(a){return Gs(1);}
function Zn(){B.call(this);this.sr=null;}
function A0Y(a,b){a.sr.j(HX(b));}
var AEV=G();
function ABM(){B.call(this);this.uF=null;}
function ANo(a,b){a.uF.g();}
var AIO=G();
var AFk=G();
function Wn(){B.call(this);this.t3=null;}
function AMb(a,b){var c,d,e,f;c=a.t3;d=Cv(b);e=new K;M(e);H(H(e,C(439)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new AAM;d.BV=c;d.sj=b;e=new AAO;e.Ed=c;c=AJR(e);e=new ABC;e.wr=d;d=b.fX;if(d!==null)d.arrayBuffer().then(Bu(e,"f"),Bu(c,"f"));else{b=b.h9.getFile();f=new ABE;f.zI=e;f.zJ=c;b.then(Bu(f,"f"),Bu(c,"f"));}}
function Wm(){B.call(this);this.wp=null;}
function ARt(a,b){var c,d,e;c=a.wp;d=Cv(b);e=new K;M(e);H(H(e,C(440)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new Pk;d.Be=c;M2(b,d);}
function AAd(){B.call(this);this.qD=null;}
function AKn(a){ED(a.qD);}
var AEd=G();
function Pg(b,c,d){return AFG(b,0,c,d,AGi());}
function AFG(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BK(c,d);h=g>=0?0:1+Qr(f,2.0)|0;i=g>0?0:1+Qr(f,3.0)|0;j=Q(Em,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new K;M(m);U(H(m,C(441)),g);k[g]=AFG(L(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Em;n=new K;M(n);U(H(n,C(442)),g);NI(m,L(n),l);n=new QL;n.sN=m;m.n3=n;switch((l+g|0)%3|0){case 0:break;case 1:Ql(m);break a;case 2:m.hg=60136;break a;default:break a;}Ll(m);}if(Ub(f)<0.25){n=JK(m.g3,0);n.bE=n.bE|2;}k[h+g|0]=m;g=g+1|0;}n=new Em;Si(n,b,c);n.eY=A7u;n.eY=j;b=new VV;b.vr
=n;b.vt=e;n.iZ=b;n.fv=b;if((c+c|0)>d)Ix(n);else NB(n);return n;}
function AAe(){B.call(this);this.sw=null;}
function ANK(a){ED(a.sw);}
function Lb(){var a=this;Fh.call(a);a.f6=null;a.cn=null;a.eO=null;a.hH=null;a.ge=null;a.lx=null;a.mf=null;a.zL=0;a.qy=0;a.n1=0;a.ut=null;a.f0=null;a.f1=null;a.gR=null;a.hy=null;a.hD=null;a.i7=null;a.gn=null;a.q_=0;a.jP=0;}
function AQt(a){N9(a.hH);XD(a.cn);Ov(a);}
function Ov(a){a.f0=BY(a.f0,null);a.f1=BY(a.f1,null);a.gR=BY(a.gR,null);a.hy=BY(a.hy,null);a.hD=BY(a.hD,null);a.i7=BY(a.i7,null);a.gn=BY(a.gn,null);}
function Wi(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.gR;break a;case 60084:c=a.f1;break a;case 60086:c=a.f0;break a;case 60136:c=a.gn;break a;case 60137:c=a.i7;break a;case 60151:c=a.hy;break a;default:c=null;break a;}c=a.hD;}return c;}
function JW(a,b){var c,d;a.ge=b;c=BS(a.lx,b.o$);d=BS(a.mf,b.oi);if(!(c&&d)){a.lx=b.o$;a.mf=b.oi;if(a.bN!==0.0)Sd(a);}}
function ALh(a,b,c){Pw(a.cn,c);if(a.lx!==null)Sd(a);}
function Sd(a){var b,c,d,e,f;Sg(a.hH);b=a.cn;c=a.lx;d=a.bN;e=a.f6.b4;f=b.gP;b.cS=AH7(c.hW,c.gG*d,c.lX,c.jZ,f,e);RP(a.cn,1.25,a.f6.b4);Ov(a);a.ut=F9(a.f6,a.mf);a.f0=BY(a.f0,Fe(a,60086));a.f1=BY(a.f1,Fe(a,60084));a.gR=BY(a.gR,Fe(a,60035));a.hy=BY(a.hy,Fe(a,60151));a.hD=BY(a.hD,Fe(a,60027));a.i7=BY(a.i7,Fe(a,60137));a.gn=BY(a.gn,Fe(a,60136));a.q_=Bd(Bd(Bd(Bd(BZ(a.gR),BZ(a.hy)),BZ(a.hD)),BZ(a.gn)),BZ(a.gn));a.jP=Bd(BZ(a.f1),BZ(a.f0));OZ(a);}
function OZ(a){Su(a,a.cF.a,Bb(a.eO.fk.data.length,a.cn.dZ));SL(a);}
function AXx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=a.ge.br.d$;d=a.i;Bs(b,d.a,d.b,a.k,c);BD(a.cn.cS);e=a.cn.dZ;f=a.eO.fk.data.length;if(!f)return;g=Be(f,H4(a.k.b,e)+7|0);h=a.hH;if(h.data.length<g)a.hH=Yx(g,h,a.cn,a.zL,a.qy,a.eO);Ni(b,a.i,a.k);i=a.T.b;j=f-1|0;k=AFo(i,e,j);i=AFo((a.T.b+a.k.b|0)-1|0,e,j);a.zL=k;a.qy=i;j=a.k.a;l=Du(a,4.0);m=Du(a,1.0)+a.jP|0;n=Du(a,3.0);o=Du(a,5.0);p=Du(a,1.0);q=0;r=a.i.a-a.T.a|0;s=Du(a,1.0);d=a.e2;t=s+(d===null?0:FI(d))|0;while(k<=i){u=a.eO.fk.data[k];h
=a.hH.data;s=k%h.length|0;v=h[s];WP(v,u.g3,b,e,j,0,k,s);w=Bb(e,k)-a.T.b|0;x=null;y=l+Bb(m,u.jx)|0;z=a.n1!=k?0:1;if(z){V(a.f6.dw,a.k.a,e);d=a.i;Bs(b,d.a,d.b+w|0,a.f6.dw,a.ge.br.gb);}ba=Wi(a,u.iR);bb=Wi(a,u.hg);if(ba!==null){d=a.ge;bc=d.jt.data[0];ADi(a,b,ba,r+y|0,(a.i.b+w|0)-p|0,!z?c:d.br.gb,bc.gN);}if(bb!==null){d=a.ge;bc=d.jt.data[0];ADi(a,b,bb,((r+y|0)+a.jP|0)+n|0,(a.i.b+w|0)-p|0,!z?c:d.br.gb,bc.gN);}bd=Fy(u.g3);be=(((y+a.jP|0)+n|0)+a.q_|0)+o|0;q=Bd(q,(be+bd|0)+t|0);PS(v,a.i.b+w|0,r+be|0,b,j,e,0,a.ge,null,
null,null,z,0,x);k=k+1|0;}d=a.cF;if(d.a!=q){d.a=q;SL(a);}F5(b);}
function ADi(a,b,c,d,e,f,g){Cw(a.cn.jb,0.0,0.0,BZ(c),Dj(c));Cs(a.cn.h7,c.fn);G6(a.cn,b,c,d,e,g,f);}
function A0d(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cn.dZ;f=((b.h.b-a.i.b|0)+a.T.b|0)/e|0;if(f>=0){g=a.eO.fk.data;if(f<g.length){h=g[f];if(!VM(a,b,f)){b=h.n3;if(b!==null)b.g();}}}}return 1;}
function AMe(a,b,c){var d,e,f,g;d=a.cn.dZ;e=((b.h.b-a.i.b|0)+a.T.b|0)/d|0;if(!c&&e>=0){f=a.eO.fk.data;if(e<f.length){g=f[e];if(VM(a,b,e)){b=g.iZ;if(b!==null)b.g();}else{a.n1=e;b=g.fv;if(b!==null)b.g();}}}return A5R;}
function VM(a,b,c){var d,e,f,g,h,i,j;d=a.eO.fk.data[c];e=Du(a,4.0);f=Du(a,1.0);g=Bd(BZ(a.f1),BZ(a.f0));h=e+Bb(f+g|0,d.jx)|0;i=(a.i.a-a.T.a|0)+h|0;j=i+g|0;c=b.h.a;return i<=c&&c<j?1:0;}
function Fe(a,b){var c,d,e,f,g;c=a.f6.b4;d=Za(b);e=a.ut;f=a.cn;b=f.dZ;g=f.iA;Cl(c.cd,e);f=D1(c,K1(c.cd,d)+2|0,b,g);Cl(f,e);BW(f,d,1.0,Lw(e,b));c=CT(c);CK(c,f);Eu(f);return c;}
function AFo(b,c,d){return Be(b/c|0,d);}
function AIp(){Lb.call(this);this.qO=null;}
function S_(a){var b=new AIp();AR9(b,a);return b;}
function AR9(a,b){Lz(a);a.eO=ALq(Q(Hg,0));a.hH=Q(Fk,0);a.n1=(-1);a.f6=b;a.cn=AOO(b.cv);}
function ED(a){a.eO=ALq(AJV(a.qO));if(a.bN!==0.0)OZ(a);}
function EN(a,b){a.qO=b;ED(a);}
function Jw(a,b){var c;c=a.ge.br;I8(b,c.lj,c.ln);return b;}
function SI(){B.call(this);this.sh=null;}
function ASg(a){ED(a.sh);}
function Hg(){var a=this;B.call(a);a.fv=null;a.iZ=null;a.n3=null;a.g3=null;a.jx=0;a.iR=0;a.hg=0;}
function A7v(a,b){var c=new Hg();Si(c,a,b);return c;}
function Si(a,b,c){a.g3=W3(b);a.jx=c;a.iR=0;}
function Ia(a){return (JK(a.g3,0)).v;}
function ADr(a){a.iR=60084;}
function LE(a){return a.iR!=60084?0:1;}
function AEo(a){a.iR=60086;}
function AEy(a){a.hg=60035;}
function Ll(a){a.hg=60027;}
function Ql(a){a.hg=60137;}
function IL(a){a.hg=60151;}
function Em(){Hg.call(this);this.eY=null;}
var A7u=null;var A7w=null;function ABb(a,b){var c=new Em();NI(c,a,b);return c;}
function NI(a,b,c){Si(a,b,c);a.eY=A7u;}
function A0Q(a){return Ia(a);}
function AJV(a){var b,c,d;b=Q(Hg,AC3(a));c=b.data;if(Qx(a,b,0)==c.length)return b;d=new Bt;X(d);N(d);}
function Ja(a){return a.eY.data.length;}
function AC3(a){var b,c,d,e;b=1;if(LE(a)){c=a.eY.data;d=c.length;e=0;while(e<d){b=b+AC3(c[e])|0;e=e+1|0;}}return b;}
function Oo(a){var b,c,d,e;b=1;c=a.eY.data;d=c.length;e=0;while(e<d){b=b+Oo(c[e])|0;e=e+1|0;}return b;}
function Qx(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(LE(a)){d=a.eY.data;c=d.length;f=0;while(f<c){e=Qx(d[f],b,e);f=f+1|0;}}return e;}
function NB(a){ADr(a);IL(a);}
function Ix(a){AEo(a);AEy(a);}
function AFs(){A7u=Q(Em,0);A7w=new ABz;}
function Ri(){B.call(this);this.zT=null;}
function AXe(a){Rj(a.zT);}
function AA8(){B.call(this);this.x5=null;}
function AZA(a){var b;b=a.x5;Hv(b,b.cR.dj);}
function AA7(){B.call(this);this.s4=null;}
function AVn(a){var b;b=a.s4;Hv(b,b.cR.di);}
function AGb(){var a=this;B.call(a);a.i_=null;a.na=0;a.fT=0;}
function AUD(){var a=new AGb();ASX(a);return a;}
function ASX(a){a.na=0;a.i_=BN(16);a.fT=0;}
function GU(a,b,c){Bq(a,b);Bq(a,c);}
function Bq(a,b){var c,d;c=a.i_;d=c.data.length;if(d==a.fT)a.i_=I$(c,d*2|0);c=a.i_.data;d=a.fT;a.fT=d+1|0;c[d]=b;}
function Qv(a){var b,c,d,e,f;b=a.na;if(b&&a.fT!=b){c=EG();b=a.na;d=a.fT;e=new K;M(e);H(U(H(U(H(e,C(443)),b),C(444)),d),C(445));Bl(c,L(e));}f=a.i_;b=f.data.length;d=a.fT;if(b!=d)f=I$(f,d);return f;}
function R7(){var a=this;D_.call(a);a.gr=0;a.dV=null;a.lH=0;a.wU=0.0;a.o4=0;}
function AJM(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TN(a){a.o4=a.dV.data.length*a.wU|0;}
function ABU(a,b){return UY(a,b)===null?0:1;}
function N7(a,b){var c;c=UY(a,b);if(c===null)return null;return c.cM;}
function UY(a,b){var c,d;if(b===null)c=Yp(a);else{d=Mo(b);c=Wp(a,b,d&(a.dV.data.length-1|0),d);}return c;}
function Wp(a,b,c,d){var e;e=a.dV.data[c];while(e!==null&&!(e.m7==d&&(b!==e.cQ?0:1))){e=e.ib;}return e;}
function Yp(a){var b;b=a.dV.data[0];while(b!==null&&b.cQ!==null){b=b.ib;}return b;}
function ABY(a,b,c,d){var e,f;e=new Js;Vg(e,b,null);e.m7=d;f=a.dV.data;e.ib=f[c];f[c]=e;return e;}
function Wd(a){var b,c,d,e,f,g,h,i;b=a.dV.data.length;b=AJM(!b?1:b<<1);c=Q(Js,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dV.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.m7&f;i=h.ib;h.ib=d[b];d[b]=h;h=i;}e=e+1|0;}a.dV=c;TN(a);}
function T1(){var a=this;B.call(a);a.dv=null;a.l2=null;a.sd=null;}
function OT(a,b){var c;if(!(b instanceof L5)){Bq(a.dv,3);ACA(a,b);Bq(a.dv,b.jd);}else{c=b;Bq(a.dv,5);ACA(a,c);Bq(a.dv,c.jd);Bq(a.dv,c.vM);b=c.kC;Bq(a.dv,b.m);c=new VX;c.qB=a;Fm(b,c);}}
function ACA(a,b){var c;c=b.eu.jm;GU(a.dv,a.l2.K,J(c));Bq(a.dv,b.eu.dA);Or(a,b.lL);BU(a.l2,c);}
function Or(a,b){if(b===null)Bq(a.dv,(-1));else Bq(a.dv,(Cn(a.sd,b)).bp);}
function TK(){var a=this;B.call(a);a.cV=null;a.mN=null;a.rw=null;}
function G8(a,b){var c,d,e;if(b instanceof HA){c=b;Bq(a.cV,9);X0(a,c.he);}else if(b instanceof J3){d=b;Bq(a.cV,3);Yr(a,d);Bq(a.cV,d.p2);X0(a,d.h0);}else if(b instanceof Jc){e=b;Bq(a.cV,4);G8(a,e.jy);G8(a,e.iV);}else if(b===null)Bq(a.cV,(-1));else{Bq(a.cV,5);Yr(a,b);Bq(a.cV,b.yM);}}
function Yr(a,b){var c;c=b.fG.jm;GU(a.cV,a.mN.K,J(c));Bq(a.cV,b.fG.dA);b=b.gq;if(b===null)Bq(a.cV,(-1));else Bq(a.cV,(Cn(a.rw,b)).bp);BU(a.mN,c);}
function X0(a,b){var c;Bq(a.cV,b.m);c=new Vk;c.wq=a;Fm(b,c);}
function XJ(){var a=this;B.call(a);a.zd=0;a.ze=0;}
function Sf(){B.call(this);this.rO=null;}
function ARv(a,b){var c;c=a.rO;DF(c,b);MO(c,null);UV(c);}
var XT=G(En);
var A7x=null;function AHK(){A7x=F($rt_doublecls());}
var JV=G();
var A7y=FB;var A7z=null;var A7A=null;function AE0(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.qr=IA(Db(d,D(0, 2147483648)),FB)?0:1;e=Db(d,D(4294967295, 1048575));f=GG(A3o(d,52))&2047;if(IA(e,FB)&&!f){c.m3=FB;c.mh=0;return;}if(f)e=A15(e,D(0, 1048576));else{e=HJ(e,1);while(IA(Db(e,D(0, 1048576)),FB)){e=HJ(e,1);f=f+(-1)|0;}}g=A7A.data;h=f<<16>>16;i=0;j=g.length;k=BK(i,j);if(k>0){c=new BR;X(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BK(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IK(e,A7z.data[h],i);if(AMG(m,A7y)){while(DD(m,A7y)<=0){j=j+(-1)|0;m=CO(Ch(m,Bp(10)),Bp(9));}g=A7A.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IK(e,A7z.data[h],i);}e=HJ(e,1);d=CO(e,Bp(1));g=A7z.data;h=j+1|0;n=g[h];f=i-1|0;n=IK(d,n,f);o=IK(JD(e,Bp(1)),A7z.data[h],f);p=Bp(1);while(true){q=Ch(p,Bp(10));if(DD(Da(m,q),Da(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ch(r,Bp(10));if(DD(Da(m,s),Da(n,s))>=0)break;r=s;}h=DD(p,r);e=h>0?Ch(Da(m,p),p):h<0?CO(Ch(Da(m,r),r),r):Ch(Da(CO(m,AFT(r,Bp(2))),r),r);if(DD(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Da(e,Bp(10));if(DD(e,D(2808348672, 232830643))<0)break;}else if(DD(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ch(e,Bp(10));}c.m3=e;c.mh=j-330|0;}
function IK(b,c,d){var e,f,g,h,i,j,k,l;e=Db(b,Bp(65535));f=Db(F6(b,16),Bp(65535));g=Db(F6(b,32),Bp(65535));h=Db(F6(b,48),Bp(65535));i=Db(c,Bp(65535));j=Db(F6(c,16),Bp(65535));k=Db(F6(c,32),Bp(65535));l=Db(F6(c,48),Bp(65535));return CO(CO(CO(HJ(Ch(l,h),32+d|0),HJ(CO(Ch(l,g),Ch(k,h)),16+d|0)),HJ(CO(CO(Ch(l,f),Ch(k,g)),Ch(j,h)),d)),F6(CO(CO(CO(Ch(k,e),Ch(j,f)),Ch(i,g)),HJ(CO(CO(CO(Ch(l,e),Ch(k,f)),Ch(j,g)),Ch(i,h)),16)),32-d|0));}
function AEM(){A7y=Da(Bp(-1),Bp(10));A7z=AHF([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A7A=A2S([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Tk(){B.call(this);this.q1=null;}
function AK0(a){G9(a.q1,37,3);}
function Tl(){B.call(this);this.rA=null;}
function AM0(a){G9(a.rA,40,3);}
function Tm(){B.call(this);this.sM=null;}
function A0F(a){G9(a.sM,42,3);}
function Tn(){B.call(this);this.wB=null;}
function AO_(a){G9(a.wB,45,3);}
function To(){B.call(this);this.w3=null;}
function ARd(a){G9(a.w3,45,5);}
function Oy(){B.call(this);this.y$=null;}
function A1F(a,b){var c,d;c=a.y$;d=new Bt;Bm(d,$rt_str(b.message));c.j(d);}
var UZ=G(0);
var A49=null;function A2C(){A2C=Bn(UZ);AYE();}
function AYE(){A49=new $rt_globals.TextDecoder("utf-16");}
function AFb(){var a=this;B.call(a);a.m4=null;a.fO=null;}
function AKW(a,b){var c=new AFb();AL4(c,a,b);return c;}
function AL4(a,b,c){a.m4=b;a.fO=c;}
function ARM(a){return a.fO.T.b/Mm(a)|0;}
function A0o(a){var b;b=a.fO;return H4((b.T.b+b.k.b|0)-1|0,Mm(a));}
function ASB(a,b){var c;b=Bb(b,Mm(a));c=a.fO;return (b+c.i.b|0)-c.T.b|0;}
function AOJ(a){return a.fO.i;}
function AT7(a){return a.fO.k;}
function APg(a,b,c){var d;d=a.m4;d.tq=b;d.qC=c;}
function AXN(a,b){return AB5(a.m4,b);}
function Mm(a){return a.fO.cn.dZ;}
function Pc(){CD.call(this);this.zW=null;}
function AKQ(a,b){var c;c=a.i;Bs(b,c.a,c.b,a.k,a.zW);}
function AAZ(){var a=this;B.call(a);a.sB=0;a.A4=0;}
function FP(a,b){var c;c=a.A4;if(c<=0)return 0;return X6(a.sB,b,c);}
function QL(){B.call(this);this.sN=null;}
function AXL(a){var b,c,d;b=a.sN;c=Bx();d=Ia(b);b=new K;M(b);H(H(b,C(446)),d);Bl(c,L(b));}
function AJ2(){GR.call(this);this.fk=null;}
function ALq(a){var b=new AJ2();AMO(b,a);return b;}
function AMO(a,b){a.fk=b;}
function A1r(a,b){return a.fk.data[b].g3;}
var S2=G(0);
var A5M=null;function AN1(){AN1=Bn(S2);ASG();}
function ASG(){A5M=S(C(258));}
var ABz=G();
function ATi(a,b,c){b=b;c=c;return ACy(Ia(b),Ia(c));}
function VV(){var a=this;B.call(a);a.vr=null;a.vt=null;}
function AXH(a){var b,c;b=a.vr;c=a.vt;if(!LE(b))NB(b);else Ix(b);c.g();}
function Qu(){B.call(this);this.p1=null;}
function AY_(a,b){JY(a.p1,b);}
function Qt(){B.call(this);this.AR=null;}
function AVo(a){return a.AR.rv;}
function Rt(){B.call(this);this.s7=null;}
function AWq(a){L$(a.s7);}
var Eb=G(Bt);
function Wu(){var a=this;B.call(a);a.pT=null;a.xH=null;a.ub=0;a.u7=0;}
function NT(a,b){return Cg(a.xH)<b?0:1;}
var AGj=G();
function ADJ(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADB(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(Ep()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new SM;d.addEventListener("change",Bu(e,"handleEvent"));d.click();}
function Sk(){var a=this;B.call(a);a.bu=null;a.qT=null;a.iX=null;a.nT=null;a.lV=null;a.f_=null;}
function HN(a){return a.bu.cG.hn;}
function Vp(a){var b;b=new R5;b.At=a;return b;}
function AIf(a){var b,c,d,e,f;b=Q(B3,5);c=b.data;d=a.bu;BD(d);e=new U$;e.yN=d;c[0]=C3(C(447),e);e=a.bu;BD(e);f=new U5;f.ws=e;c[1]=C3(C(448),f);d=a.bu;BD(d);e=new U6;e.w6=d;c[2]=C3(C(449),e);d=a.bu;BD(d);e=new U7;e.uW=d;c[3]=C3(C(450),e);d=a.bu;BD(d);e=new U8;e.pY=d;c[4]=C3(C(451),e);return Dw(b);}
function P2(a,b){var c;c=new Pj;c.vg=a;c.vh=b;return c;}
function Ks(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Ei(a.f_.b6);d=a.bu.d;e=D7(d);f=Hu(d);g=a.bu.fl;if(c===null)h=null;else{A3G();switch(A7B.data[c.fE]){case 1:h=N$(g,e,f);break a;case 2:h=Yu(g,e,f);break a;default:}b=new EZ;X(b);N(b);}}c=a.bu;e=Fq(c,b);g=I0(c.d.f,e.bq,e.bv);f=Sa(c,g);if(h!==null){g=c.d;i=e.bq;j=e.bv;e=new AAf;e.Ej=c;e.Ei=b;e.Eh=f;h.sU(g,i,j,e,c.jL);}else{e=Cn(c.d.f.dI,g);if(e!==null)IN(c,e);else{e=Cn(c.d.f.dz,g);if(e!==null&&!Ex(e))YH(c.kr,b,e,c,f);else{c=c.kr;k=Q(B3,1);l=k.data;e=new B3;f=c.b6;BD(f);g
=new ABx;g.wl=f;C7(e,g,C(452));l[0]=e;K4(c,b,Dw(k));}}}}
var ADY=G(0);
function AB7(){var a=this;B.call(a);a.vZ=null;a.vY=null;}
function ASN(a){FF(a.vZ,a.vY);}
var XL=G();
var A7C=null;function NP(b,c,d){QV(b,c,d,0);}
function QV(b,c,d,e){WL(b,c,d,null,null,e);}
function WL(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=LU(c);i=Ba(h);j=Ba(h);k=Ba(h);l=CI(b);c=b.A;if(c.data.length<i)b.A=AEf(c,i);m=0;while(m<i){if(g&&m<l){n=4*Ba(h)|0;h.e4=h.e4+n|0;}else b.A.data[m]=D2(Yj(h,d,0));m=m+1|0;}MV(b);if(j)b.dc=AFY(AGL(h));Fr(b.dI);Fr(b.dz);o=b.dI;g=0;while(g<k){Ek(o,DO(Ba(h),Ba(h)),DO(Ba(h),Ba(h)));g=g+1|0;}p=b.dI;o=b.dz;q=WO(ABh(p));while(Gb(q)){r=ACY(q);s=r.cQ;p=r.cM;BD(A7C);r=Cn(o,p);if(r===null){r=BH();Ek(o,p,r);}BC(r,s);}if(o.oy===null){p=new P7;p.vf=o;o.oy=p;}p=o.oy;r=new YQ;Nt(r,
p.vf);while(Gb(r)){NG(r);o=r.gY.cM;p=A4D;c=Q(B,o.m);d=c.data;Gf(o,c);KP(c,p);g=0;t=d.length;while(g<t){p=d[g];Kk(o,g);o.cD.data[g]=p;g=g+1|0;}}QP(h);if(e!==null&&f!==null){p=APB(e,f);Pu(p);b.eS=AU1(p.oN,p.iF);b.dc=AFY(p.pa);}}
function VD(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=LU(c);i=Ba(h);j=Ba(h);k=Ba(h)!=1?0:1;l=Ba(h);m=Ba(h);n=ACx(b,i);o=ACx(b,j);p=(II(Cc(b,n.a),n.b)).data[0].s;q=(II(Cc(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=Yj(h,d,i);if(!r)g=I2(p,g);if(r==s)g=I2(g,q);t=n.a+r|0;u=D2(g);c=b.A.data;v=c[t];c[t]=u;if(!k&&Jh(v)==Jh(u)){t=0;while(t<Jh(v)){o=v.s.data[t];w=u.s.data[t];x=o.bW;y=x!=5?0:1;if(!y&&x&&!w.bW){w.bW=x;w.bE=o.bE;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AGL(h);w=KE(i,j,(-1));Wy(b.dc,w,u);}else if(e!==null&&f!==null){v=APB(e,f);Pu(v);w=KE(i,j,(-1));Wy(b.dc,w,v.pa);n=b.eS;n.fp=b.dc.db.ci;n.e0=v.iF;}}QP(h);}
function Yj(b,c,d){var e,f,g,h,i,j,k,l;e=Ba(b);f=Q(Cu,e);g=f.data;h=0;while(h<e){i=Ba(b);j=Ba(b);k=Ba(b);l=Ba(b);g[h]=D9(Ew(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AJm(){A7C=new UK;}
var Yy=G(0);
var O3=G(0);
var H8=G();
function Zq(){H8.call(this);this.zm=null;}
function AA4(a,b){var c,d,e;c=0;while(true){d=a.zm;if(d.jT===null)d.jT=B6(d.xj);if(!B$(d.jT))e=0;else{c=b.L(B_(d.jT));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var QO=G(0);
function Ox(){var a=this;B.call(a);a.BY=null;a.BZ=null;a.BW=0;a.BX=0;}
var ACL=G();
function ALi(a,b){b=b;b.cL=BY(b.cL,null);}
var AE3=G(0);
function AH7(b,c,d,e,f,g){f=f.data;f[Jd(0,0)]=HZ(g,b,c,d,0);f[Jd(0,1)]=HZ(g,b,c,d,2);f[Jd(1,0)]=HZ(g,b,c,e,0);f[Jd(1,1)]=HZ(g,b,c,e,2);return f[Jd(0,0)];}
function Js(){var a=this;GN.call(a);a.m7=0;a.ib=null;}
var H6=G(Bt);
function AA0(){var a=this;B.call(a);a.uA=null;a.ux=null;a.uy=null;}
function AOR(a,b,c,d){var e,f,g,h;b=a.uA;e=a.ux;f=a.uy;AAn(b,e);if(f!==null)d.mt.g();if(ABg(d)){f=d.e$;g=e.c0;h=e.fU;UD(b,BJ((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.mM,e,d.sS);}}
function ABm(){B.call(this);this.us=null;}
function ARL(a,b){var c,d,e,f;c=a.us;Ei(c.c6.f$.b6);d=Bx();e=Cv(b);f=new K;M(f);H(H(f,C(453)),e);Bl(d,L(f));d=ARs(b,c);EN(c.c6.ga,d);d.iZ.g();b=LM(b.i1,Fn(I_(b),C(454)));FM(c.g5,b);}
var ACU=G();
function AZq(a,b){ADJ(b);}
function ACT(){B.call(this);this.r1=null;}
function AVl(a,b){var c,d,e;c=a.r1;d=0;e=b.length;while(d<e){c.j(AI7(b[d],null));d=d+1|0;}}
var ACn=G();
function AV9(a,b){ADJ(b);}
function ACm(){var a=this;B.call(a);a.rE=null;a.rF=null;}
function AWC(a,b){var c,d,e;c=a.rE;d=a.rF;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);c.j(A2I(b,d,Q(BL,0)));}
function AJi(){var a=this;B.call(a);a.ik=null;a.e4=0;}
function LU(a){var b=new AJi();ATv(b,a);return b;}
function ATv(a,b){a.ik=b;a.e4=0;}
function Ba(a){var b,c;b=a.ik.data;c=a.e4;a.e4=c+1|0;return b[c];}
function QP(a){var b,c,d,e;if(a.e4!=a.ik.data.length){b=EG();c=a.ik.data.length;d=a.e4;e=new K;M(e);H(U(H(U(H(e,C(443)),c),C(455)),d),C(456));Bl(b,L(e));}}
function QC(){var a=this;B.call(a);a.Cd=null;a.s$=0;}
function AUj(a,b){var c,d,e,f;c=a.s$;d=(CN(KR(b,0))).data;b=Bx();e=d[0];f=new K;M(f);U(H(U(H(f,C(457)),c),C(458)),e);Bl(b,L(f));b=Bx();e=d[1];f=new K;M(f);U(H(U(H(f,C(457)),c),C(459)),e);Bl(b,L(f));}
function ADE(){B.call(this);this.N0=null;}
function U0(){var a=this;B.call(a);a.t2=null;a.t1=null;}
function ALt(a,b){var c,d,e,f,g;c=a.t2;d=a.t1;Ei(c.bb);e=Bx();f=KF(b);g=new K;M(g);H(H(g,C(460)),f);Bl(e,L(g));e=new ADd;e.C6=c;e.nK=d;c=ARs(b,e);c.fv.g();EN(d,c);}
var SM=G();
function ATQ(a,b){}
var UK=G();
var FG=G();
var A7D=null;var A7E=null;var A5Z=null;var A7F=null;var A7G=null;var A7H=null;function AIW(){A7D=new TD;A7E=new TA;A5Z=new TB;A7F=new Ty;A7G=new Tz;A7H=new Vs;}
function AHs(){var a=this;B.call(a);a.oN=null;a.pa=null;a.iF=null;a.cx=null;a.oe=null;a.mI=null;a.iW=null;a.nf=null;a.o7=null;}
function APB(a,b){var c=new AHs();A0p(c,a,b);return c;}
function A0p(a,b,c){a.cx=LU(b);a.oe=c;}
function Pu(a){var b,c,d,e,f,g,h,i;b=Ba(a.cx);c=new Ns;Qj(c);a.iF=c;a.iW=BH();d=0;while(d<b){e=Ba(a.cx);f=Ba(a.cx);g=Ew(a.oe,e,f);Ek(a.iF,g,BH());BC(a.iW,g);d=d+1|0;}c=WO(ABh(a.iF));while(Gb(c)){HV((ACY(c)).cM,OX(a));}d=Ba(a.cx);if(d==(-1))a.oN=null;else{a.mI=Q(FT,d);c=new VL;h=a.cx;i=a.oe;g=a.iW;c.dJ=h;c.yi=i;c.xN=g;a.nf=c;c=new Q8;c.el=h;c.zV=i;c.z$=g;a.o7=c;a.oN=QW(a,null);}if(Ba(a.cx)!=(-1))a.pa=YM(a.cx,a.mI);}
function QW(a,b){var c,d,e,f,g,h,i,j,k;c=Ba(a.cx);d=Ba(a.cx);e=a.nf;f=Ba(e.dJ);g=BH();h=0;while(h<f){BC(g,OD(e));h=h+1|0;}a:{switch(d){case -1:i=new Nr;i.g7=b;b=A5Z;i.cH=b;i.fq=b;i.eL=b;i.k2=b;i.hz=b;break a;case 0:i=A2U(b);break a;case 1:i=new K2;AFi(i,b);HV(i.eL,g);break a;default:}b=new C4;i=new K;M(i);U(H(i,C(461)),d);Bm(b,L(i));N(b);}i.eL=g;b=a.o7;d=Ba(b.el);e=BH();j=0;while(j<d){BC(e,Hk(b));j=j+1|0;}i.fq=e;i.k2=OX(a);d=Ba(a.cx);b=BH();j=0;while(j<d){e=OD(a.nf);g=Hk(a.o7);f=Ba(a.cx);k=new Qk;k.k4=e;k.kt
=g;k.re=f;BC(b,k);j=j+1|0;}i.hz=b;j=Ba(a.cx);i.tH=j==(-1)?null:Bw(a.iW,j);d=Ba(a.cx);b=BH();j=0;while(j<d){BC(b,QW(a,i));j=j+1|0;}i.cH=b;a.mI.data[c]=i;return i;}
function OX(a){var b,c,d,e;b=Ba(a.cx);c=BH();d=0;while(d<b){e=Ba(a.cx);BC(c,Bw(a.iW,e));d=d+1|0;}return c;}
function AD4(){var a=this;B.call(a);a.lC=null;a.o2=null;}
function AKf(){var a=this;B.call(a);a.DD=0;a.CM=0;a.q6=0;a.mR=0;}
function ACF(){var a=this;B.call(a);a.rT=null;a.rU=null;}
function AT8(a){var b,c,d,e,f,g;b=a.rT;c=a.rU;if(BS(c.lC,b.d.fZ)){c=c.o2;CL(b,c.mR,c.q6,0);Ce((Bj(b)).bK,c.mR,c.q6);Ce((Bj(b)).bA,c.CM,c.DD);}else{d=(Cz(b.fl.zN)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){FH(b);b=new WQ;b.xC=g;b.xD=c;BD(b);c=new X$;c.vx=b;$rt_globals.setTimeout(Bu(c,"onTimer"),0);}}}
function ACG(){var a=this;B.call(a);a.Ar=null;a.Aq=null;}
function AWp(a){IN(a.Ar,a.Aq);}
function FT(){var a=this;B.call(a);a.g7=null;a.cH=null;a.fq=null;a.eL=null;a.hz=null;a.k2=null;a.tH=null;}
function A2U(a){var b=new FT();AFi(b,a);return b;}
function AFi(a,b){a.g7=b;a.cH=BH();a.fq=BH();a.eL=BH();a.k2=BH();a.hz=BH();}
function AC0(a){var b;b=a.g7;if(b!==null)b.cH.qo(a);}
function Va(){B.call(this);this.rx=null;}
function ANu(a,b){b=b;YT(a.rx,b);}
var Nr=G(FT);
var K2=G(FT);
function Uc(){B.call(this);this.zU=null;}
function AT_(a,b){var c;b=b;c=a.zU;Bq(c.bx,(Cn(c.fL,b)).bp);}
function Qk(){var a=this;B.call(a);a.k4=null;a.kt=null;a.re=0;}
function PT(){B.call(this);this.pU=null;}
function AXy(a,b){b=b;Zy(a.pU,b);}
var PX=G(0);
var Fo=G(Fv);
var M9=G(Fo);
var TD=G(M9);
var NN=G(D_);
var TA=G(NN);
var N2=G(Fi);
function AVf(a){var b;b=new Eb;X(b);N(b);}
function APq(a,b){var c;c=new Eb;X(c);N(c);}
function AOv(a,b){b=new Eb;X(b);N(b);}
var TB=G(N2);
function APx(a,b){var c;c=new BF;X(c);N(c);}
function AOM(a){return 0;}
function AMF(a){return A7F;}
function AK5(a){return 1;}
var Ty=G();
function AKO(a){return 0;}
function AYl(a){var b;b=new Mh;X(b);N(b);}
function ARl(a){var b;b=new C4;X(b);N(b);}
var XI=G(0);
var Tz=G();
var Vs=G();
function QN(){var a=this;B.call(a);a.mn=0;a.rL=null;}
function A1H(a,b){var c,d,e;c=a.rL;b=b;d=c.zd;e=c.ze;d=b.a<=d&&e<=b.b?1:0;a.mn=d;return d?0:1;}
var Ke=G(Eb);
var Jy=G(Bt);
var NW=G(Bt);
function XC(){B.call(this);this.yg=null;}
function AYm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.yg;d=CN(c[0]);e=(CN(c[1])).data[0];if(!AAz(b.f)){c=b.f;if(c.cl==e){e=b.pR;f=LU(d);Fr(c.dI);Fr(c.dz);MV(c);while(f.e4>=f.ik.data.length?0:1){if(Ba(f)==(-1))continue;g=U2(c,Ba(f));h=N1(Cc(c,g.bq),g.bv);if(Ba(f)==(-1)){if(!e)continue;h.bW=0;h.bE=h.bE|4;continue;}i=U2(c,Ba(f));j=Ba(f);k=Ba(f);Ek(c.dI,g,i);l=c.dz;m=BH();if(Cn(l,i)===null)Ek(l,i,m);BC(Cn(c.dz,i),g);h.bW=j;h.bE=k;}Lk(b);if(b.DG){n=JD(EY(),b.z3);if(A11(n,Bp(100))){b=EW(b);c=new K;M(c);H(HD(H(H(c,
b),C(462)),n),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}}}
function AGY(){B.call(this);this.P7=null;}
function ABv(){B.call(this);this.vD=null;}
function ALz(a,b){L_(a.vD,b);}
function QB(){var a=this;B.call(a);a.xj=null;a.jT=null;}
function ZE(){var a=this;B.call(a);a.p8=null;a.p9=null;}
function AT9(a){var b,c;b=a.p8;c=a.p9;FF(b.b6.dG,c);Z_(b);}
function G2(){var a=this;B.call(a);a.d_=0;a.eN=0;a.oU=null;a.nC=0;a.gC=null;}
function ARS(a,b,c,d,e,f){var g=new G2();AXa(g,a,b,c,d,e,f);return g;}
function AXa(a,b,c,d,e,f,g){a.d_=b;a.eN=c;a.oU=BJ(f,g);a.nC=d;a.gC=e;}
function P6(){Fo.call(this);this.i5=null;}
function RU(a){var b;b=new ZL;Nt(b,a.i5);return b;}
function S5(){Fo.call(this);this.ya=null;}
function WO(a){var b;b=new SX;Nt(b,a.ya);return b;}
function P7(){Fv.call(this);this.vf=null;}
function Vv(){B.call(this);this.u6=null;}
function AVG(a,b){b=b;OT(a.u6,b);}
function Tp(){B.call(this);this.tL=null;}
function AXf(a,b){b=b;G8(a.tL,b);}
function Ki(){var a=this;B.call(a);a.eu=null;a.lL=null;a.jd=0;}
function A2y(a,b,c){var d=new Ki();AFN(d,a,b,c);return d;}
function AFN(a,b,c,d){a.eu=b;a.lL=c;a.jd=d;}
function AIY(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BS(a.eu,c.eu)&&BS(a.lL,c.lL)&&BS(CU(a.jd),CU(c.jd))?1:0;}return 0;}
function L5(){var a=this;Ki.call(a);a.kC=null;a.vM=0;}
function AUu(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){if(!AIY(a,b))return 0;c=b;return BS(a.kC,c.kC);}return 0;}
function E3(){var a=this;B.call(a);a.fG=null;a.gq=null;a.yM=0;}
function A10(a,b,c){var d=new E3();ND(d,a,b,c);return d;}
function ND(a,b,c,d){a.fG=b;a.gq=c;a.yM=d;}
function AHv(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BS(a.fG,c.fG)&&BS(a.gq,c.gq)?1:0;}return 0;}
function HA(){E3.call(this);this.he=null;}
function J3(){var a=this;E3.call(a);a.h0=null;a.p2=0;}
function A0K(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){if(!AHv(a,b))return 0;c=b;return BS(a.h0,c.h0);}return 0;}
function Jc(){var a=this;E3.call(a);a.jy=null;a.iV=null;}
function ATU(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BS(a.jy,c.jy)&&BS(a.iV,c.iV)?1:0;}return 0;}
function AEz(){var a=this;H8.call(a);a.Pk=null;a.QF=0;a.IY=0;a.Hl=0;}
function Rx(){var a=this;B.call(a);a.v9=null;a.v$=null;}
function AN0(a){var b,c;b=a.v9;c=a.v$;R2();Ks(b,c,A7I);}
function Ry(){var a=this;B.call(a);a.xU=null;a.xV=null;}
function ALZ(a){var b,c;b=a.xU;c=a.xV;R2();Ks(b,c,A7J);}
function Rv(){var a=this;B.call(a);a.up=null;a.uo=null;}
function AK9(a){Ks(a.up,a.uo,null);}
function Rw(){var a=this;B.call(a);a.pV=null;a.pX=null;}
function ANU(a){var b,c,d,e,f,g,h;b=a.pV;c=a.pX;d=D7(b.bu.d);e=Hu(b.bu.d);d=AAP(b.bu.fl,d,e);Ei(b.f_.b6);b=b.bu;e=Fq(b,c);if(d!==null){f=b.d;g=e.bq;h=e.bv;e=new AA6;e.CS=b;e.CT=c;d.I4(f,g,h,1,e,b.jL);}}
function Q3(){B.call(this);this.ri=null;}
function AYT(a){var b;b=a.ri;Ei(b.f_.b6);G7(b.bu,Vp(b),0);}
function Q2(){B.call(this);this.An=null;}
function AX7(a){var b;b=a.An;Ei(b.f_.b6);G7(b.bu,Vp(b),1);}
function Q1(){B.call(this);this.yQ=null;}
function ATc(a){var b,c,d;b=a.yQ;Ei(b.f_.b6);c=HN(b);b=b.bu;BD(b);d=new ADk;d.xt=b;Q7(c,d,AEb(C(463)));}
function PZ(){var a=this;B.call(a);a.v7=null;a.v8=null;}
function AP3(a){var b,c;b=a.v7;c=a.v8;b=b.bu.d;b.pk=c;L9(b);}
var QA=G(0);
var A5N=null;function AJk(){A5N=new SU;}
function X5(){B.call(this);this.vm=null;}
function ALP(a){var b,c,d;b=a.vm;Ei(b.f_.b6);c=HN(b);b=b.bu;BD(b);d=new Re;d.tk=b;NX(c,d);}
function Sw(){B.call(this);this.t5=null;}
function ANt(a,b,c){var d,e;c=a.t5;d=c.d.f;e=b.bp;b=c.fh;Zm(d.A.data[e],0,b);}
function VL(){var a=this;B.call(a);a.dJ=null;a.yi=null;a.xN=null;}
function OD(a){var b,c,d,e,f,g,h,i;a:{b=Ba(a.dJ);switch(b){case 3:break;case 5:c=Po(a);d=NR(a);b=Ba(a.dJ);e=Ba(a.dJ);f=Ba(a.dJ);g=BH();h=0;while(h<f){BC(g,NR(a));h=h+1|0;}i=new L5;AFN(i,c,d,b);i.kC=g;i.vM=e;break a;default:c=new C4;d=new K;M(d);U(H(d,C(464)),b);Bm(c,L(d));N(c);}i=A2y(Po(a),NR(a),Ba(a.dJ));}return i;}
function Po(a){var b,c;b=Ba(a.dJ);c=Ba(a.dJ);return AV6(Ew(a.yi,b,c),Ba(a.dJ));}
function NR(a){var b;b=Ba(a.dJ);if(b==(-1))return null;return Bw(a.xN,b);}
function Q8(){var a=this;B.call(a);a.el=null;a.zV=null;a.z$=null;}
function Hk(a){var b,c,d,e,f;a:{b:{b=Ba(a.el);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Wc(a);d=Qp(a);b=Ba(a.el);e=RX(a);f=new J3;ND(f,c,d,2);f.p2=b;f.h0=e;break a;case 4:c=Hk(a);d=Hk(a);f=new Jc;ND(f,c.fG,c.gq,9);f.jy=c;f.iV=d;break a;case 5:f=A10(Wc(a),Qp(a),Ba(a.el));break a;case 9:c=RX(a);f=new HA;d=!Ex(c)&&Bw(c,0)!==null?(Bw(c,0)).gq:null;ND(f,null,null,7);f.he=BH();c=B6(c);while(B$(c)){e=B_(c);if(!(e instanceof HA))BC(f.he,e);else{e=e;HV(f.he,e.he);}}f.gq=d;break a;default:break b;}f
=null;break a;}c=new C4;d=new K;M(d);U(H(d,C(465)),b);Bm(c,L(d));N(c);}return f;}
function Wc(a){var b,c;b=Ba(a.el);c=Ba(a.el);return AV6(Ew(a.zV,b,c),Ba(a.el));}
function Qp(a){var b;b=Ba(a.el);if(b==(-1))return null;return Bw(a.z$,b);}
function RX(a){var b,c,d;b=Ba(a.el);c=BH();d=0;while(d<b){BC(c,Hk(a));d=d+1|0;}return c;}
function Rq(){var a=this;B.call(a);a.qh=null;a.qf=0;a.qg=0;a.qd=null;a.qe=0;a.qc=0;}
function AQA(a,b){var c,d,e,f,g,h,i,j;c=a.qh;d=a.qf;e=a.qg;f=a.qd;g=a.qe;h=a.qc;i=CE(c.bo,5.0);d=Be((c.bo.b0.a-d|0)-i|0,Bd((i-d|0)-c.Q.k.a|0,b.h.a));j=Be((c.bo.b0.b-e|0)-i|0,Bd((i-e|0)-c.Q.k.b|0,b.h.b));V(f,d+g|0,j+h|0);EU(c,f,c.V.k);}
function WA(){var a=this;B.call(a);a.zF=null;a.zG=null;a.zD=null;a.zE=0;a.zB=0;a.zC=0;a.zz=0;a.zA=0;a.zx=0;a.zy=0;a.tT=0;}
function AU2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.zF;d=a.zG;e=a.zD;f=a.zE;g=a.zB;h=a.zC;i=a.zz;j=a.zA;k=a.zx;l=a.zy;m=a.tT;n=CE(c.bo,5.0);o=c.V.hF();Cs(d,c.V.k);Cs(e,c.V.i);switch(f){case -1:f=Be(h+(b.h.a-g|0)|0,c.bo.b0.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.h.a|0)-g|0,Bd(o.a,n-c.Q.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.h.b-k|0)|0,(c.bo.b0.b+c.Q.k.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.h.b|0)-k|0,o.b);}EU(c,e,d);}
function T7(){var a=this;B.call(a);a.wP=null;a.wO=0.0;}
function Nc(a,b){return Ld(a.wP,b,a.wO*2.0+0.875);}
var ACh=G(BF);
function OV(){B.call(this);this.q7=null;}
function AWM(a){AGG(a.q7);}
function OW(){B.call(this);this.rI=null;}
function A0b(a){Hj(a.rI);}
function OU(){B.call(this);this.vk=null;}
function ATh(a){AHq(a.vk);}
function Us(){B.call(this);this.xO=null;}
function AO3(a){a.xO.AC();}
function Ur(){B.call(this);this.t$=null;}
function AY$(a){a.t$.vl();}
function Xr(){B.call(this);this.qE=null;}
function AMr(a){var b,c,d,e,f,g,h,i;b=a.qE;c=(b.qT.cW()).data;d=Q(B3,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new V3;i.xg=b;i.xf=h;e[f]=Wr(i,h);f=f+1|0;}return d;}
function Zt(){B.call(this);this.wE=null;}
function AN8(a){a.wE.nT.h_(0);}
function Zu(){B.call(this);this.xm=null;}
function AZZ(a){a.xm.nT.h_(1);}
function U$(){B.call(this);this.yN=null;}
function AKx(a){var b,c,d,e,f;b=a.yN.d.f;c=b.cl;d=new K;M(d);U(H(d,C(466)),c);$rt_globals.console.info($rt_ustr(L(d)));c=b.mY;d=new K;M(d);U(H(d,C(467)),c);$rt_globals.console.info($rt_ustr(L(d)));d=b.dc;e=Hi(E6(b));ACu(d,0,d.db,e);b=Bx();f=b.mx;f.data[0]=10;WR(b,f,0,1);}
function U5(){B.call(this);this.ws=null;}
function AN9(a){YY(a.ws);}
function U6(){B.call(this);this.w6=null;}
function ASI(a){Z8(a.w6);}
function U7(){B.call(this);this.uW=null;}
function AXn(a){N3(a.uW.d);}
function U8(){B.call(this);this.pY=null;}
function AWe(a){UV(a.pY);}
function Ot(){B.call(this);this.wN=null;}
function AR1(a){var b,c,d,e,f,g,h;b=a.wN;c=Q(B3,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Wr(P2(b,g),Ww(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Wr(P2(b,g),Ww(g));e=h;}return c;}
function Tq(){B.call(this);this.sz=null;}
function AQ2(a,b,c){HE(Cc(a.sz.d.f,b.bp),0,J(c));}
var W$=G(0);
function ABw(){var a=this;B.call(a);a.l9=null;a.o_=null;a.i1=null;a.rl=null;}
function A2I(a,b,c){var d=new ABw();ADz(d,a,b,c);return d;}
function ADz(a,b,c,d){a.l9=b;a.o_=c;a.i1=d;}
function M2(a,b){var c,d;c=new ABF;d=a.l9.values();c.j8=a;c.xs=d;c.kH=b;AAp(c);}
function X7(a){var b,c,d,e;b=a.rl;if(b===null){b=a.i1;c=b.data;d=I_(a);e=c.length;b=De(b,e+1|0);b.data[e]=d;b=b;a.rl=b;}return b;}
function I_(a){return HX(a.l9.name);}
function A0J(a){return a.i1;}
function AM5(a){return LM(a.i1,I_(a));}
function AGF(){var a=this;B.call(a);a.jm=null;a.dA=0;}
function AV6(a,b){var c=new AGF();AKq(c,a,b);return c;}
function AKq(a,b,c){a.jm=b;a.dA=c;}
function AP5(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.dA==c.dA&&BS(a.jm,c.jm)?1:0;}return 0;}
function VX(){B.call(this);this.qB=null;}
function AXd(a,b){b=b;Or(a.qB,b);}
function Vk(){B.call(this);this.wq=null;}
function A1E(a,b){b=b;G8(a.wq,b);}
var SU=G();
function FA(){var a=this;B.call(a);a.j3=0;a.ta=0;a.jB=null;a.gY=null;a.xz=null;a.lE=null;}
function A7K(a){var b=new FA();Nt(b,a);return b;}
function Nt(a,b){a.lE=b;a.ta=b.cX;a.jB=null;}
function Gb(a){var b,c;if(a.jB!==null)return 1;while(true){b=a.j3;c=a.lE.b3.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.j3=b+1|0;}return 0;}
function AHW(a){var b;if(a.ta==a.lE.cX)return;b=new H6;X(b);N(b);}
function NG(a){var b,c,d,e;AHW(a);if(!Gb(a)){b=new Mh;X(b);N(b);}b=a.jB;if(b!==null){c=a.gY;if(c!==null)a.xz=c;a.gY=b;a.jB=b.cU;}else{d=a.lE.b3.data;e=a.j3;a.j3=e+1|0;b=d[e];a.gY=b;a.jB=b.cU;a.xz=null;}}
var ZL=G(FA);
function PW(a){NG(a);return a.gY.cQ;}
var SX=G(FA);
function ACY(a){NG(a);return a.gY;}
var YQ=G(FA);
function ADW(){var a=this;B.call(a);a.Od=null;a.Rf=0;}
function YN(){var a=this;B.call(a);a.l=null;a.dS=0;a.mo=null;a.qv=0;a.hI=0;a.fz=0;a.bz=0;a.m2=null;}
function MT(a){return a.l.bM;}
function U3(a,b,c,d){var e,f,g,h,i,j;e=BH();f=a.dS;g=0;if(c!=f)a.dS=c;a:{switch(b){case -1073741784:h=new Rr;c=a.bz+1|0;a.bz=c;Gg(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Qm;c=a.bz+1|0;a.bz=c;Gg(h,c);break a;case -33554392:h=new R9;c=a.bz+1|0;a.bz=c;Gg(h,c);break a;default:c=a.hI+1|0;a.hI=c;if(d!==null)h=A3O(c);else{h=new F0;Gg(h,0);g=1;}c=a.hI;if(c<=(-1))break a;if(c>=10)break a;a.mo.data[c]=h;break a;}h=new AC8;Gg(h,(-1));}while(true){if(Fc(a.l)&&a.l.n==(-536870788))
{d=A0m(Cj(a,2),Cj(a,64));while(!DA(a.l)&&Fc(a.l)){i=a.l;j=i.n;if(j&&j!=(-536870788)&&j!=(-536870871))break;CH(d,Bk(i));i=a.l;if(i.bj!=(-536870788))continue;Bk(i);}i=Le(a,d);i.S(h);}else if(a.l.bj==(-536870788)){i=HW(h);Bk(a.l);}else{i=Xu(a,h);d=a.l;if(d.bj==(-536870788))Bk(d);}if(i!==null)BC(e,i);if(DA(a.l))break;if(a.l.bj==(-536870871))break;}if(a.l.mE==(-536870788))BC(e,HW(h));if(a.dS!=f&&!g){a.dS=f;d=a.l;d.gW=f;d.n=d.bj;d.fa=d.fm;j=d.dm;d.x=j+1|0;d.ji=j;FK(d);}switch(b){case -1073741784:break;case -536870872:d
=new VG;F1(d,e,h);return d;case -268435416:d=new ABZ;F1(d,e,h);return d;case -134217688:d=new YR;F1(d,e,h);return d;case -67108824:d=new Sr;F1(d,e,h);return d;case -33554392:d=new D6;F1(d,e,h);return d;default:switch(e.m){case 0:break;case 1:return A3F(Bw(e,0),h);default:return A2g(e,h);}return HW(h);}d=new Kd;F1(d,e,h);return d;}
function AJy(a){var b,c,d,e,f,g,h;b=BN(4);c=(-1);d=(-1);if(!DA(a.l)&&Fc(a.l)){e=b.data;c=Bk(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B4(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bj;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bk(f);f=a.l;g=f.bj;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bk(f);return AZ$(e,3);}return AZ$(e,2);}if(!Cj(a,2))return AEg(b[0]);if(Cj(a,64))return AYQ(b[0]);return AUR(b[0]);}e=b.data;c=1;while(c<4&&!DA(a.l)&&Fc(a.l)){h=c+1|0;e[c]=Bk(a.l);c=h;}if(c==1){h=e[0];if(!(A7L.CE(h)==A7M?0:1))return UU(a,e[0]);}if
(!Cj(a,2))return A4a(b,c);if(Cj(a,64)){f=new UP;Pm(f,b,c);return f;}f=new AAq;Pm(f,b,c);return f;}
function Xu(a,b){var c,d,e,f,g,h,i;if(Fc(a.l)&&!KI(a.l)&&Na(a.l.n)){if(Cj(a,128)){c=AJy(a);if(!DA(a.l)){d=a.l;e=d.bj;if(!(e==(-536870871)&&!(b instanceof F0))&&e!=(-536870788)&&!Fc(d))c=L7(a,b,c);}}else if(!WS(a.l)&&!ABn(a.l)){f=new Pv;M(f);while(!DA(a.l)&&Fc(a.l)&&!WS(a.l)&&!ABn(a.l)){if(!(!KI(a.l)&&!a.l.n)&&!(!KI(a.l)&&Na(a.l.n))){g=a.l.n;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bk(a.l);if(!L6(e))BM(f,e&65535);else JQ(f,HK(e));}if(!Cj(a,2)){c=new Y5;DW(c);c.cB
=L(f);e=f.K;c.bG=e;c.ox=AXW(e);c.m5=AXW(c.bG);h=0;while(h<(c.bG-1|0)){Rb(c.ox,P(c.cB,h),(c.bG-h|0)-1|0);Rb(c.m5,P(c.cB,(c.bG-h|0)-1|0),(c.bG-h|0)-1|0);h=h+1|0;}}else if(Cj(a,64))c=A3_(f);else{c=new OS;DW(c);c.jk=L(f);c.bG=f.K;}}else c=L7(a,b,ACR(a,b));}else{d=a.l;if(d.bj!=(-536870871))c=L7(a,b,ACR(a,b));else{if(b instanceof F0)N(Ck(C(21),d.bM,Pt(d)));c=HW(b);}}a:{if(!DA(a.l)){e=a.l.bj;if(!(e==(-536870871)&&!(b instanceof F0))&&e!=(-536870788)){f=Xu(a,b);if(c instanceof C$&&!(c instanceof FL)&&!(c instanceof CX)
&&!(c instanceof E2)){i=c;if(!f.bY(i.M)){c=new Ul;E$(c,i.M,i.e,i.jw);c.M.S(c);}}if((f.iI()&65535)!=43)c.S(f);else c.S(f.M);break a;}}if(c===null)return null;c.S(b);}if((c.iI()&65535)!=43)return c;return c.M;}
function L7(a,b,c){var d,e,f,g,h;d=a.l;e=d.bj;if(c!==null&&!(c instanceof Cb)){switch(e){case -2147483606:Bk(d);d=new Vu;Dp(d,c,b,e);Oe();c.S(A7N);return d;case -2147483605:Bk(d);d=new XU;Dp(d,c,b,(-2147483606));Oe();c.S(A7N);return d;case -2147483585:Bk(d);d=new P_;Dp(d,c,b,(-536870849));Oe();c.S(A7N);return d;case -2147483525:f=new OP;d=Gd(d);g=a.fz+1|0;a.fz=g;Mp(f,d,c,b,(-536870849),g);Oe();c.S(A7N);return f;case -1073741782:case -1073741781:Bk(d);d=new Rm;Dp(d,c,b,e);c.S(d);return d;case -1073741761:Bk(d);d
=new Yt;Dp(d,c,b,(-536870849));c.S(b);return d;case -1073741701:h=new S8;d=Gd(d);e=a.fz+1|0;a.fz=e;Mp(h,d,c,b,(-536870849),e);c.S(h);return h;case -536870870:case -536870869:Bk(d);if(c.iI()!=(-2147483602)){d=new CX;Dp(d,c,b,e);}else if(Cj(a,32)){d=new Rn;Dp(d,c,b,e);}else{d=new W0;f=XE(a.dS);Dp(d,c,b,e);d.mD=f;}c.S(d);return d;case -536870849:Bk(d);d=new Gt;Dp(d,c,b,(-536870849));c.S(b);return d;case -536870789:h=new Ge;d=Gd(d);e=a.fz+1|0;a.fz=e;Mp(h,d,c,b,(-536870849),e);c.S(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bk(d);d=new ADn;E$(d,f,b,e);f.e=d;return d;case -2147483585:Bk(d);c=new Uh;E$(c,f,b,(-2147483585));return c;case -2147483525:c=new Xt;RG(c,Gd(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bk(d);d=new Ys;E$(d,f,b,e);f.e=d;return d;case -1073741761:Bk(d);c=new AAC;E$(c,f,b,(-1073741761));return c;case -1073741701:c=new Ra;RG(c,Gd(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bk(d);d=A2v(f,b,e);f.e=d;return d;case -536870849:Bk(d);c
=new E2;E$(c,f,b,(-536870849));return c;case -536870789:return A3c(Gd(d),f,b,(-536870789));default:}return c;}
function ACR(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F0;while(true){a:{e=a.l;f=e.bj;if((f&(-2147418113))==(-2147483608)){Bk(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dS=g;else{if(f!=(-1073741784))g=a.dS;c=U3(a,f,g,b);e=a.l;if(e.bj!=(-536870871))N(Ck(C(21),e.bM,e.dm));Bk(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bk(e);c
=AZ1(0);break a;case -2147483577:Bk(e);c=new WW;B5(c);break a;case -2147483558:Bk(e);c=new UJ;h=a.bz+1|0;a.bz=h;AJI(c,h);break a;case -2147483550:Bk(e);c=AZ1(1);break a;case -2147483526:Bk(e);c=new ACk;B5(c);break a;case -536870876:Bk(e);a.bz=a.bz+1|0;if(Cj(a,8)){if(Cj(a,1)){c=A1$(a.bz);break a;}c=A1R(a.bz);break a;}if(Cj(a,1)){c=A2k(a.bz);break a;}c=A2E(a.bz);break a;case -536870866:Bk(e);if(Cj(a,32)){c=A2M();break a;}c=A2B(XE(a.dS));break a;case -536870821:Bk(e);i=0;c=a.l;if(c.bj==(-536870818)){i=1;Bk(c);}c
=Le(a,Hp(a,i));c.S(b);e=a.l;if(e.bj!=(-536870819))N(Ck(C(21),e.bM,e.dm));Xg(e,1);Bk(a.l);break a;case -536870818:Bk(e);a.bz=a.bz+1|0;if(!Cj(a,8)){c=new K5;B5(c);break a;}c=new V9;e=XE(a.dS);B5(c);c.yl=e;break a;case 0:j=e.fm;if(j!==null)c=Le(a,j);else{if(DA(e)){c=HW(b);break a;}c=AEg(f&65535);}Bk(a.l);break a;default:break b;}Bk(e);c=new K5;B5(c);break a;}h=(f&2147483647)-48|0;if(a.hI<h)N(Ck(C(21),FR(e),Pt(a.l)));Bk(e);a.bz=a.bz+1|0;c=!Cj(a,2)?A20(h,a.bz):Cj(a,64)?A1_(h,a.bz):A3$(h,a.bz);a.mo.data[h].om=1;a.qv
=1;break a;}if(f>=0&&!G3(e)){c=UU(a,f);Bk(a.l);}else if(f==(-536870788))c=HW(b);else{if(f!=(-536870871)){b=new J4;c=!G3(a.l)?UF(f&65535):a.l.fm.cK();e=a.l;My(b,c,e.bM,e.dm);N(b);}if(d){b=new J4;e=a.l;My(b,C(21),e.bM,e.dm);N(b);}c=HW(b);}}}if(f!=(-16777176))break;}return c;}
function Hp(a,b){var c,d,e,f,g,h,i,j,$$je;c=A0m(Cj(a,2),Cj(a,64));EH(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DA(a.l))break a;h=a.l;b=h.bj;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CH(c,d);d=Bk(a.l);h=a.l;if(h.bj!=(-536870874)){d=38;break d;}if(h.n==(-536870821)){Bk(h);e=1;d=(-1);break d;}Bk(h);if(g){c=Hp(a,0);break d;}if(a.l.bj==(-536870819))break d;Uw(c,Hp(a,0));break d;case -536870867:if(!g){b=h.n;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bk(h);h=a.l;i=h.bj;if(G3(h))break c;if
(i<0){j=a.l.n;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Na(i))break e;i=i&65535;break e;}catch($$e){$$je=EQ($$e);if($$je instanceof Eq){break b;}else{throw $$e;}}}try{Ca(c,d,i);}catch($$e){$$je=EQ($$e);if($$je instanceof Eq){break b;}else{throw $$e;}}Bk(a.l);d=(-1);break d;}}if(d>=0)CH(c,d);d=45;Bk(a.l);break d;case -536870821:if(d>=0){CH(c,d);d=(-1);}Bk(a.l);j=0;h=a.l;if(h.bj==(-536870818)){Bk(h);j=1;}if(!e)AG$(c,Hp(a,j));else Uw(c,Hp(a,j));e=0;Bk(a.l);break d;case -536870819:if(d>=0)CH(c,
d);d=93;Bk(a.l);break d;case -536870818:if(d>=0)CH(c,d);d=94;Bk(a.l);break d;case 0:if(d>=0)CH(c,d);h=a.l.fm;if(h===null)d=0;else{AKe(c,h);d=(-1);}Bk(a.l);break d;default:}if(d>=0)CH(c,d);d=Bk(a.l);}g=0;}N(Ck(C(21),MT(a),a.l.dm));}N(Ck(C(21),MT(a),a.l.dm));}if(!f){if(d>=0)CH(c,d);return c;}N(Ck(C(21),MT(a),a.l.dm-1|0));}
function UU(a,b){var c,d,e;c=L6(b);if(Cj(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AUR(b&65535);}if(Cj(a,64)&&b>128){if(c){d=new VB;DW(d);d.bG=2;d.sf=GV(GT(b));return d;}if(PV(b))return AP1(b&65535);if(!R0(b))return AYQ(b&65535);return AWA(b&65535);}}if(!c){if(PV(b))return AP1(b&65535);if(!R0(b))return AEg(b&65535);return AWA(b&65535);}d=new Ea;DW(d);d.bG=2;d.gK=b;e=(HK(b)).data;d.lU=e[0];d.k3=e[1];return d;}
function Le(a,b){var c,d,e;if(!AIS(b)){if(!b.P){if(b.ic())return ANI(b);return ART(b);}if(!b.ic())return AWR(b);c=new Mq;AAU(c,b);return c;}c=ADI(b);d=new OC;B5(d);d.rC=c;d.De=c.bh;if(!b.P){if(b.ic())return AFz(ANI(Jp(b)),d);return AFz(ART(Jp(b)),d);}if(!b.ic())return AFz(AWR(Jp(b)),d);c=new QJ;e=new Mq;AAU(e,Jp(b));AGN(c,e,d);return c;}
function Jq(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cj(a,b){return (a.dS&b)!=b?0:1;}
function Zl(){B.call(this);this.xS=null;}
function APn(a,b){b.hc=a.xS.db;}
function Zk(){B.call(this);this.t7=null;}
function AYJ(a,b){b.g7=a.t7.db.ci;}
function WY(){B.call(this);this.qQ=null;}
function AU$(a,b){b.hc=a.qQ;}
var HR=G(0);
function Sx(){B.call(this);this.xX=null;}
function AXz(a,b,c,d){Kz(a.xX,b,c.bp,d.bp);}
function Sy(){B.call(this);this.v4=null;}
function AWi(a,b,c,d){Kz(a.v4,b,c.bp,d.bp);}
function IM(){B.call(this);this.nQ=0;}
var A7O=null;var A7P=null;var A7Q=null;function AQw(a){var b=new IM();AFB(b,a);return b;}
function AFB(a,b){a.nQ=b;}
function Xn(b){return !b?A7P:A7O;}
function AHw(){A7O=AQw(1);A7P=AQw(0);A7Q=F($rt_booleancls());}
var KB=G(0);
var Rs=G();
var Xc=G(0);
var AE4=G();
function RO(){B.call(this);this.t9=null;}
function AX5(a,b,c,d){JJ(a.t9,b,c.bp,d.bp);}
var RN=G();
function ASy(a,b){return b.eu.dA>=0?0:1;}
var RM=G();
function AQS(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fG;if(b===null)break b;if(b.dA>=0)break b;}c=1;break a;}c=0;}return c;}
function RQ(){B.call(this);this.zf=null;}
function AXG(a,b,c,d){JJ(a.zf,b,c.bp,d.bp);}
var Gy=G(CG);
var A7J=null;var A7I=null;var A7R=null;function R2(){R2=Bn(Gy);A1q();}
function AZo(a,b){var c=new Gy();AES(c,a,b);return c;}
function AES(a,b,c){R2();DG(a,b,c);}
function A1q(){var b;A7J=AZo(C(468),0);b=AZo(C(469),1);A7I=b;A7R=I(Gy,[A7J,b]);}
function ADk(){B.call(this);this.xt=null;}
function AVR(a,b){DF(a.xt,b);}
function BP(){var a=this;B.call(a);a.e=null;a.cs=0;a.wY=null;a.jw=0;}
var A4K=0;function B5(a){var b;b=A4K;A4K=b+1|0;a.wY=NF(b);}
function No(a,b){var c;c=A4K;A4K=c+1|0;a.wY=NF(c);a.e=b;}
function Iy(a,b,c,d){var e;e=d.y;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function IF(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AU4(a,b){a.jw=b;}
function AUE(a){return a.jw;}
function ARw(a){return a.e;}
function AR7(a,b){a.e=b;}
function A0f(a,b){return 1;}
function A0Z(a){return null;}
function Kh(a){var b;a.cs=1;b=a.e;if(b!==null){if(!b.cs){b=b.gk();if(b!==null){a.e.cs=1;a.e=b;}a.e.eG();}else if(b instanceof HM&&b.eK.om)a.e=b.e;}}
function AGU(){A4K=1;}
function V3(){var a=this;B.call(a);a.xg=null;a.xf=null;}
function ANH(a){var b,c;b=a.xg;c=a.xf;b.iX.tO(c);}
function Vl(){var a=this;B.call(a);a.qL=null;a.qJ=null;a.qI=0;a.qK=0;}
function AX9(a,b){b=b;EL(a.qL,a.qJ,b,a.qI,a.qK);}
function Vm(){var a=this;B.call(a);a.A1=null;a.A0=null;a.AZ=0;a.AY=0;}
function ANd(a,b){b=b;EL(a.A1,a.A0,b,a.AZ,a.AY);}
function WX(){B.call(this);this.vW=null;}
function APA(a,b){ACD(a.vW,b);}
function ADj(){var a=this;Em.call(a);a.zi=null;a.hv=null;}
function ARs(a,b){var c=new ADj();AW_(c,a,b);return c;}
function A7S(a,b,c){var d=new ADj();S0(d,a,b,c);return d;}
function AW_(a,b,c){S0(a,b,0,c);}
function S0(a,b,c,d){NI(a,I_(b),c);a.zi=b;a.hv=d;K9(a);Ix(a);}
function K9(a){var b;b=new Wk;b.xT=a;a.fv=b;a.iZ=b;a.eY=A7u;}
function ACK(a){var b;b=new YP;b.vT=a;a.fv=b;a.iZ=b;}
function R5(){B.call(this);this.At=null;}
function AQV(a,b){SQ(HN(a.At),b,A6N,AEb(C(470)));}
var AAk=G();
var A7B=null;function A3G(){A3G=Bn(AAk);AT3();}
function AT3(){var b,c;R2();b=BN((A7R.hi()).data.length);c=b.data;A7B=b;c[A7J.fE]=1;c[A7I.fE]=2;}
function Rk(){B.call(this);this.yK=null;}
function ANi(a,b){var c,d;c=a.yK;d=b.iD;b=new K;M(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(L(b)));}
function CW(){var a=this;BP.call(a);a.om=0;a.ee=0;}
var A7N=null;function Oe(){Oe=Bn(CW);AVI();}
function A3O(a){var b=new CW();Gg(b,a);return b;}
function Gg(a,b){Oe();B5(a);a.ee=b;}
function ALg(a,b,c,d){var e,f;e=IZ(d,a.ee);MK(d,a.ee,b);f=a.e.c(b,c,d);if(f<0)MK(d,a.ee,e);return f;}
function AXo(a){return a.ee;}
function ALv(a,b){return 0;}
function AVI(){var b;b=new WT;B5(b);A7N=b;}
function GY(){var a=this;B.call(a);a.bf=null;a.gW=0;a.fd=0;a.uz=0;a.mE=0;a.bj=0;a.n=0;a.yx=0;a.fm=null;a.fa=null;a.x=0;a.jJ=0;a.dm=0;a.ji=0;a.bM=null;}
var A7T=null;var A7L=null;var A7M=0;function Xg(a,b){if(b>0&&b<3)a.fd=b;if(b==1){a.n=a.bj;a.fa=a.fm;a.x=a.ji;a.ji=a.dm;FK(a);}}
function G3(a){return a.fm===null?0:1;}
function KI(a){return a.fa===null?0:1;}
function Bk(a){FK(a);return a.mE;}
function Gd(a){var b;b=a.fm;FK(a);return b;}
function FK(a){var b,c,d,e,f,g,h,$$je;a.mE=a.bj;a.bj=a.n;a.fm=a.fa;a.dm=a.ji;a.ji=a.x;while(true){b=0;c=a.x>=a.bf.data.length?0:LJ(a);a.n=c;a.fa=null;if(a.fd==4){if(c!=92)return;c=a.x;d=a.bf.data;c=c>=d.length?0:d[B8(a)];a.n=c;switch(c){case 69:break;default:a.n=92;a.x=a.jJ;return;}a.fd=a.uz;a.n=a.x>(a.bf.data.length-2|0)?0:LJ(a);}a:{c=a.n;if(c!=92){e=a.fd;if(e==1)switch(c){case 36:a.n=(-536870876);break a;case 40:if(a.bf.data[a.x]!=63){a.n=(-2147483608);break a;}B8(a);c=a.bf.data[a.x];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.n=(-134217688);B8(a);break b;default:N(Ck(C(21),FR(a),a.x));}a.n=(-67108824);B8(a);}else{switch(c){case 33:break;case 60:B8(a);c=a.bf.data[a.x];e=1;break b;case 61:a.n=(-536870872);B8(a);break b;case 62:a.n=(-33554392);B8(a);break b;default:f=AKc(a);a.n=f;if(f<256){a.gW=f;f=f<<16;a.n=f;a.n=(-1073741784)|f;break b;}f=f&255;a.n=f;a.gW=f;f=f<<16;a.n=f;a.n=(-16777176)|f;break b;}a.n=(-268435416);B8(a);}}if(!e)break;}break a;case 41:a.n=(-536870871);break a;case 42:case 43:case 63:e
=a.x;d=a.bf.data;switch(e>=d.length?42:d[e]){case 43:a.n=c|(-2147483648);B8(a);break a;case 63:a.n=c|(-1073741824);B8(a);break a;default:}a.n=c|(-536870912);break a;case 46:a.n=(-536870866);break a;case 91:a.n=(-536870821);Xg(a,2);break a;case 93:if(e!=2)break a;a.n=(-536870819);break a;case 94:a.n=(-536870818);break a;case 123:a.fa=AGt(a,c);break a;case 124:a.n=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.n=(-536870874);break a;case 45:a.n=(-536870867);break a;case 91:a.n=(-536870821);break a;case 93:a.n
=(-536870819);break a;case 94:a.n=(-536870818);break a;default:}}else{c=a.x>=(a.bf.data.length-2|0)?(-1):LJ(a);c:{a.n=c;switch(c){case -1:N(Ck(C(21),FR(a),a.x));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.n
=AFt(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fd!=1)break a;a.n=(-2147483648)|c;break a;case 65:a.n=(-2147483583);break a;case 66:a.n=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Ck(C(21),FR(a),a.x));case 68:case 83:case 87:case 100:case 115:case 119:a.fa=RE(Ew(a.bf,
a.jJ,1),0);a.n=0;break a;case 71:a.n=(-2147483577);break a;case 80:case 112:break c;case 81:a.uz=a.fd;a.fd=4;b=1;break a;case 90:a.n=(-2147483558);break a;case 97:a.n=7;break a;case 98:a.n=(-2147483550);break a;case 99:c=a.x;d=a.bf.data;if(c>=(d.length-2|0))N(Ck(C(21),FR(a),a.x));a.n=d[B8(a)]&31;break a;case 101:a.n=27;break a;case 102:a.n=12;break a;case 110:a.n=10;break a;case 114:a.n=13;break a;case 116:a.n=9;break a;case 117:a.n=XW(a,4);break a;case 120:a.n=XW(a,2);break a;case 122:a.n=(-2147483526);break a;default:}break a;}g
=AIZ(a);h=0;if(a.n==80)h=1;try{a.fa=RE(g,h);}catch($$e){$$je=EQ($$e);if($$je instanceof Mt){N(Ck(C(21),FR(a),a.x));}else{throw $$e;}}a.n=0;}}if(b)continue;else break;}}
function AIZ(a){var b,c,d,e,f,g;b=new K;GB(b,10);c=a.x;d=a.bf;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ew(d,B8(a),1);f=new K;M(f);H(H(f,C(471)),b);return L(f);}B8(a);c=0;a:{while(true){g=a.x;d=a.bf.data;if(g>=(d.length-2|0))break;c=d[B8(a)];if(c==125)break a;BM(b,c);}}if(c!=125)N(Ck(C(21),a.bM,a.x));}if(!b.K)N(Ck(C(21),a.bM,a.x));f=L(b);if(J(f)==1){b=new K;M(b);H(H(b,C(471)),f);return L(b);}b:{c:{if(J(f)>3){if(Nf(f,C(471)))break c;if(Nf(f,C(472)))break c;}break b;}f=Dr(f,2);}return f;}
function AGt(a,b){var c,d,e,f,g,$$je;c=new K;GB(c,4);d=(-1);e=2147483647;a:{while(true){f=a.x;g=a.bf.data;if(f>=g.length)break a;b=g[B8(a)];if(b==125)break a;if(b==44&&d<0)try{d=Kx(D$(c),10);AGy(c,0,AHx(c));continue;}catch($$e){$$je=EQ($$e);if($$je instanceof Dq){break;}else{throw $$e;}}BM(c,b&65535);}N(Ck(C(21),a.bM,a.x));}if(b!=125)N(Ck(C(21),a.bM,a.x));if(c.K>0)b:{try{e=Kx(D$(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EQ($$e);if($$je instanceof Dq){}else{throw $$e;}}N(Ck(C(21),a.bM,a.x));}else if
(d<0)N(Ck(C(21),a.bM,a.x));if((d|e|(e-d|0))<0)N(Ck(C(21),a.bM,a.x));b=a.x;g=a.bf.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.n=(-2147483525);B8(a);break c;case 63:a.n=(-1073741701);B8(a);break c;default:}a.n=(-536870789);}c=new VQ;c.fx=d;c.fw=e;return c;}
function FR(a){return a.bM;}
function DA(a){return !a.bj&&!a.n&&a.x==a.yx&&!G3(a)?1:0;}
function Na(b){return b<0?0:1;}
function Fc(a){return !DA(a)&&!G3(a)&&Na(a.bj)?1:0;}
function WS(a){var b;b=a.bj;return b<=56319&&b>=55296?1:0;}
function ABn(a){var b;b=a.bj;return b<=57343&&b>=56320?1:0;}
function R0(b){return b<=56319&&b>=55296?1:0;}
function PV(b){return b<=57343&&b>=56320?1:0;}
function XW(a,b){var c,d,e,f,$$je;c=new K;GB(c,b);d=a.bf.data.length-2|0;e=0;while(true){f=BK(e,b);if(f>=0)break;if(a.x>=d)break;BM(c,a.bf.data[B8(a)]);e=e+1|0;}if(!f)a:{try{b=Kx(D$(c),16);}catch($$e){$$je=EQ($$e);if($$je instanceof Dq){break a;}else{throw $$e;}}return b;}N(Ck(C(21),a.bM,a.x));}
function AFt(a){var b,c,d,e,f,g;b=3;c=1;d=a.bf.data;e=d.length-2|0;f=AA3(d[a.x],8);switch(f){case -1:break;default:if(f>3)b=2;B8(a);a:{while(true){if(c>=b)break a;g=a.x;if(g>=e)break a;g=AA3(a.bf.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B8(a);c=c+1|0;}}return f;}N(Ck(C(21),a.bM,a.x));}
function AKc(a){var b,c,d,e;b=1;c=a.gW;a:while(true){d=a.x;e=a.bf.data;if(d>=e.length)N(Ck(C(21),a.bM,d));b:{c:{switch(e[d]){case 41:B8(a);return c|256;case 45:if(!b)N(Ck(C(21),a.bM,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B8(a);}B8(a);return c;}
function B8(a){var b,c,d,e,f;b=a.x;a.jJ=b;if(!(a.gW&4))a.x=b+1|0;else{c=a.bf.data.length-2|0;a.x=b+1|0;a:while(true){d=a.x;if(d<c&&Q9(a.bf.data[d])){a.x=a.x+1|0;continue;}d=a.x;if(d>=c)break;e=a.bf.data;if(e[d]!=35)break;a.x=d+1|0;while(true){f=a.x;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.x=f+1|0;}}}return a.jJ;}
function AJP(b){return A7T.G6(b);}
function LJ(a){var b,c,d,e;b=a.bf.data[B8(a)];if(CP(b)){c=a.jJ+1|0;d=a.bf.data;if(c<d.length){e=d[c];if(Dg(e)){B8(a);return EI(b,e);}}}return b;}
function Pt(a){return a.dm;}
function J4(){var a=this;BR.call(a);a.Cn=null;a.B8=null;a.r9=0;}
function Ck(a,b,c){var d=new J4();My(d,a,b,c);return d;}
function My(a,b,c,d){X(a);a.r9=(-1);a.Cn=b;a.B8=c;a.r9=d;}
function Pj(){var a=this;B.call(a);a.vg=null;a.vh=0.0;}
function ATM(a){var b,c;b=a.vg;c=a.vh;b.iX.m8(c);}
function ADd(){var a=this;B.call(a);a.nK=null;a.C6=null;}
function ALX(a,b,c){var d;c=Bx();b=KF(b);d=new K;M(d);H(H(d,C(473)),b);Bl(c,L(d));}
function AMf(a,b){ACK(b);if(Ja(b)>0)ED(a.nK);}
function AMK(a,b){if(Ja(b)>0)ED(a.nK);K9(b);}
var Rr=G(CW);
function ATR(a,b,c,d){var e;e=a.ee;BX(d,e,b-DB(d,e)|0);return a.e.c(b,c,d);}
function AZf(a,b){return 0;}
var AC8=G(CW);
function AU0(a,b,c,d){return b;}
var Qm=G(CW);
function ALD(a,b,c,d){if(DB(d,a.ee)!=b)b=(-1);return b;}
function R9(){CW.call(this);this.wc=0;}
function ATT(a,b,c,d){var e;e=a.ee;BX(d,e,b-DB(d,e)|0);a.wc=b;return b;}
function AYn(a,b){return 0;}
var F0=G(CW);
function ASi(a,b,c,d){if(d.lG!=1&&b!=d.y)return (-1);d.ka=1;MK(d,0,b);return b;}
function Cb(){BP.call(this);this.bG=0;}
function DW(a){B5(a);a.bG=1;}
function A1o(a,b,c,d){var e;if((b+a.b8()|0)>d.y){d.dF=1;return (-1);}e=a.by(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function AZT(a){return a.bG;}
function AOe(a,b){return 1;}
var AGf=G(Cb);
function HW(a){var b=new AGf();AXu(b,a);return b;}
function AXu(a,b){No(a,b);a.bG=1;a.jw=1;a.bG=0;}
function AZx(a,b,c){return 0;}
function AVL(a,b,c,d){var e,f,g;e=d.y;f=d.c8;while(true){g=BK(b,e);if(g>0)return (-1);if(g<0&&Dg(P(c,b))&&b>f&&CP(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AUW(a,b,c,d,e){var f,g;f=e.y;g=e.c8;while(true){if(c<b)return (-1);if(c<f&&Dg(P(d,c))&&c>g&&CP(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ATS(a,b){return 0;}
function B7(){var a=this;BP.call(a);a.bI=null;a.eK=null;a.bc=0;}
function A2g(a,b){var c=new B7();F1(c,a,b);return c;}
function F1(a,b,c){B5(a);a.bI=b;a.eK=c;a.bc=c.ee;}
function ANw(a,b,c,d){var e,f,g,h;if(a.bI===null)return (-1);e=Go(d,a.bc);DV(d,a.bc,b);f=a.bI.m;g=0;while(true){if(g>=f){DV(d,a.bc,e);return (-1);}h=(Bw(a.bI,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AQl(a,b){a.eK.e=b;}
function AW$(a,b){var c;a:{c=a.bI;if(c!==null){c=B6(c);while(true){if(!B$(c))break a;if(!(B_(c)).bY(b))continue;else return 1;}}}return 0;}
function AQN(a,b){return IZ(b,a.bc)>=0&&Go(b,a.bc)==IZ(b,a.bc)?0:1;}
function ALY(a){var b,c,d,e;a.cs=1;b=a.eK;if(b!==null&&!b.cs)Kh(b);a:{b=a.bI;if(b!==null){c=b.m;d=0;while(true){if(d>=c)break a;b=Bw(a.bI,d);e=b.gk();if(e===null)e=b;else{b.cs=1;EF(a.bI,d);Y4(a.bI,d,e);}if(!e.cs)e.eG();d=d+1|0;}}}if(a.e!==null)Kh(a);}
var Kd=G(B7);
function AP_(a,b,c,d){var e,f,g,h;e=DB(d,a.bc);BX(d,a.bc,b);f=a.bI.m;g=0;while(true){if(g>=f){BX(d,a.bc,e);return (-1);}h=(Bw(a.bI,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AYV(a,b){return !DB(b,a.bc)?0:1;}
var D6=G(Kd);
function AVj(a,b,c,d){var e,f,g;e=DB(d,a.bc);BX(d,a.bc,b);f=a.bI.m;g=0;while(g<f){if((Bw(a.bI,g)).c(b,c,d)>=0)return a.e.c(a.eK.wc,c,d);g=g+1|0;}BX(d,a.bc,e);return (-1);}
function AYO(a,b){a.e=b;}
var VG=G(D6);
function AQj(a,b,c,d){var e,f;e=a.bI.m;f=0;while(f<e){if((Bw(a.bI,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ASa(a,b){return 0;}
var ABZ=G(D6);
function ALr(a,b,c,d){var e,f;e=a.bI.m;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bw(a.bI,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AZV(a,b){return 0;}
var YR=G(D6);
function ALV(a,b,c,d){var e,f,g,h;e=a.bI.m;f=d.kd?0:d.c8;a:{g=a.e.c(b,c,d);if(g>=0){BX(d,a.bc,b);h=0;while(true){if(h>=e)break a;if((Bw(a.bI,h)).cw(f,b,c,d)>=0){BX(d,a.bc,(-1));return g;}h=h+1|0;}}}return (-1);}
function A1B(a,b){return 0;}
var Sr=G(D6);
function ATx(a,b,c,d){var e,f;e=a.bI.m;BX(d,a.bc,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bw(a.bI,f)).cw(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AY6(a,b){return 0;}
function HM(){B7.call(this);this.dd=null;}
function A3F(a,b){var c=new HM();AEe(c,a,b);return c;}
function AEe(a,b,c){B5(a);a.dd=b;a.eK=c;a.bc=c.ee;}
function AKL(a,b,c,d){var e,f;e=Go(d,a.bc);DV(d,a.bc,b);f=a.dd.c(b,c,d);if(f>=0)return f;DV(d,a.bc,e);return (-1);}
function AO7(a,b,c,d){var e;e=a.dd.cm(b,c,d);if(e>=0)DV(d,a.bc,e);return e;}
function AZh(a,b,c,d,e){var f;f=a.dd.cw(b,c,d,e);if(f>=0)DV(e,a.bc,f);return f;}
function AW8(a,b){return a.dd.bY(b);}
function AYk(a){var b;b=new OL;AEe(b,a.dd,a.eK);a.e=b;return b;}
function ASF(a){var b;a.cs=1;b=a.eK;if(b!==null&&!b.cs)Kh(b);b=a.dd;if(b!==null&&!b.cs){b=b.gk();if(b!==null){a.dd.cs=1;a.dd=b;}a.dd.eG();}}
var G0=G();
function Y(){var a=this;G0.call(a);a.bh=0;a.cr=0;a.N=null;a.lN=null;a.me=null;a.P=0;}
var A7U=null;function PN(){PN=Bn(Y);AMg();}
function Bz(a){var b;PN();b=new ACB;b.D=BN(64);a.N=b;}
function AUo(a){return null;}
function AT6(a){return a.N;}
function AIS(a){var b,c,d,e,f;if(!a.cr)b=Id(a.N,0)>=2048?0:1;else{a:{c=a.N;b=0;d=c.bt;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=IV(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+IV(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AWd(a){return a.P;}
function AZP(a){return a;}
function ADI(a){var b,c;if(a.me===null){b=a.fF();c=new Uk;c.Ef=a;c.wo=b;Bz(c);a.me=c;EH(c,a.cr);}return a.me;}
function Jp(a){var b,c;if(a.lN===null){b=a.fF();c=new Ui;c.Cq=a;c.zP=b;c.uH=a;Bz(c);a.lN=c;EH(c,a.bh);a.lN.P=a.P;}return a.lN;}
function A0U(a){return 0;}
function EH(a,b){var c;c=a.bh;if(c^b){a.bh=c?0:1;a.cr=a.cr?0:1;}if(!a.P)a.P=1;return a;}
function AM7(a){return a.bh;}
function M$(b,c){PN();return b.o(c);}
function JO(b,c){var d,e;PN();if(b.dN()!==null&&c.dN()!==null){b=b.dN();c=c.dN();d=Be(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function RE(b,c){var d,e,f;PN();d=0;while(true){ARb();e=A7V.data;if(d>=e.length){f=new Mt;Bm(f,C(21));f.CZ=C(21);f.Ek=b;N(f);}e=e[d].data;if(Bi(b,e[0]))break;d=d+1|0;}return AJt(e[1],c);}
function AMg(){var b;b=new Hb;ARb();A7U=b;}
function AD9(){var a=this;Y.call(a);a.o6=0;a.ql=0;a.hJ=0;a.mS=0;a.en=0;a.gh=0;a.I=null;a.bC=null;}
function DC(){var a=new AD9();AS8(a);return a;}
function A0m(a,b){var c=new AD9();AL8(c,a,b);return c;}
function AS8(a){Bz(a);a.I=A1D();}
function AL8(a,b,c){Bz(a);a.I=A1D();a.o6=b;a.ql=c;}
function CH(a,b){a:{if(a.o6){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.en){Oh(a.I,Jq(b&65535));break a;}LA(a.I,Jq(b&65535));break a;}if(a.ql&&b>128){a.hJ=1;b=GV(GT(b));}}}if(!(!R0(b)&&!PV(b))){if(a.mS)Oh(a.N,b-55296|0);else LA(a.N,b-55296|0);}if(a.en)Oh(a.I,b);else LA(a.I,b);if(!a.P&&L6(b))a.P=1;return a;}
function AKe(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(a.mS){if(!b.cr)F_(a.N,b.fF());else Dm(a.N,b.fF());}else if(!b.cr)Gr(a.N,b.fF());else{Gk(a.N,b.fF());Dm(a.N,b.fF());a.cr=a.cr?0:1;a.mS=1;}if(!a.gh&&b.dN()!==null){if(a.en){if(!b.bh)F_(a.I,b.dN());else Dm(a.I,b.dN());}else if(!b.bh)Gr(a.I,b.dN());else{Gk(a.I,b.dN());Dm(a.I,b.dN());a.bh=a.bh?0:1;a.en=1;}}else{c=a.bh;d=a.bC;if(d!==null){if(!c){e=new W9;e.Dp=a;e.Az=c;e.ur=d;e.uj=b;Bz(e);a.bC=e;}else{e=new W_;e.Ew=a;e.sv=c;e.x6=d;e.xF=b;Bz(e);a.bC=e;}}else{if(c&&!a.en
&&Oa(a.I)){d=new W6;d.DS=a;d.x$=b;Bz(d);a.bC=d;}else if(!c){d=new W4;d.oE=a;d.n6=c;d.wT=b;Bz(d);a.bC=d;}else{d=new W5;d.nh=a;d.l8=c;d.um=b;Bz(d);a.bC=d;}a.gh=1;}}return a;}
function Ca(a,b,c){var d,e,f,g,h;if(b>c){d=new BR;X(d);N(d);}a:{b:{if(!a.o6){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CH(a,b);b=b+1|0;}}if(!a.en)IJ(a.I,b,c+1|0);else{d=a.I;c=c+1|0;if(b>c){d=new BF;X(d);N(d);}e=d.bt;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(JL(d,b)|IC(d,f));}else{h=d.D.data;h[g]=h[g]&JL(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&IC(d,f);}}Hd(d);}}}}return a;}
function AG$(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(b.hJ)a.hJ=1;c=a.cr;if(!(c^b.cr)){if(!c)Gr(a.N,b.N);else Dm(a.N,b.N);}else if(c)F_(a.N,b.N);else{Gk(a.N,b.N);Dm(a.N,b.N);a.cr=1;}if(!a.gh&&C1(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Gr(a.I,C1(b));else Dm(a.I,C1(b));}else if(c)F_(a.I,C1(b));else{Gk(a.I,C1(b));Dm(a.I,C1(b));a.bh=1;}}else{c=a.bh;d=a.bC;if(d!==null){if(!c){e=new PE;e.Bh=a;e.tN=c;e.zZ=d;e.uO=b;Bz(e);a.bC=e;}else{e=new P1;e.Bw=a;e.Ak=c;e.p0=d;e.qn=b;Bz(e);a.bC=e;}}else{if(!a.en&&Oa(a.I)){if(!c){d=new W7;d.Ex
=a;d.rK=b;Bz(d);a.bC=d;}else{d=new W8;d.Dt=a;d.Ab=b;Bz(d);a.bC=d;}}else if(!c){d=new Xa;d.tR=a;d.sE=b;d.x8=c;Bz(d);a.bC=d;}else{d=new Xb;d.sX=a;d.s5=b;d.yR=c;Bz(d);a.bC=d;}a.gh=1;}}}
function Uw(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(b.hJ)a.hJ=1;c=a.cr;if(!(c^b.cr)){if(!c)Dm(a.N,b.N);else Gr(a.N,b.N);}else if(!c)F_(a.N,b.N);else{Gk(a.N,b.N);Dm(a.N,b.N);a.cr=0;}if(!a.gh&&C1(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Dm(a.I,C1(b));else Gr(a.I,C1(b));}else if(!c)F_(a.I,C1(b));else{Gk(a.I,C1(b));Dm(a.I,C1(b));a.bh=0;}}else{c=a.bh;d=a.bC;if(d!==null){if(!c){e=new PG;e.Do=a;e.zn=c;e.wm=d;e.st=b;Bz(e);a.bC=e;}else{e=new PH;e.Dw=a;e.y3=c;e.vR=d;e.zj=b;Bz(e);a.bC=e;}}else{if(!a.en&&Oa(a.I)){if(!c){d=new PC;d.Bz
=a;d.xe=b;Bz(d);a.bC=d;}else{d=new PD;d.Eu=a;d.rz=b;Bz(d);a.bC=d;}}else if(!c){d=new PI;d.A7=a;d.Av=b;d.sZ=c;Bz(d);a.bC=d;}else{d=new PB;d.sY=a;d.y8=b;d.yh=c;Bz(d);a.bC=d;}a.gh=1;}}}
function C9(a,b){var c;c=a.bC;if(c!==null)return a.bh^c.o(b);return a.bh^DR(a.I,b);}
function C1(a){if(!a.gh)return a.I;return null;}
function AVH(a){return a.N;}
function ARX(a){var b,c;if(a.bC!==null)return a;b=C1(a);c=new PF;c.Df=a;c.k7=b;Bz(c);return EH(c,a.bh);}
function AXJ(a){var b,c,d;b=new K;M(b);c=Id(a.I,0);while(c>=0){JQ(b,HK(c));BM(b,124);c=Id(a.I,c+1|0);}d=b.K;if(d>0)T_(b,d-1|0);return L(b);}
function AM$(a){return a.hJ;}
function Mt(){var a=this;Bt.call(a);a.CZ=null;a.Ek=null;}
function Eh(){BP.call(this);this.M=null;}
function Dp(a,b,c,d){No(a,c);a.M=b;a.jw=d;}
function A1t(a){return a.M;}
function ARj(a,b){return !a.M.bY(b)&&!a.e.bY(b)?0:1;}
function A0n(a,b){return 1;}
function APl(a){var b;a.cs=1;b=a.e;if(b!==null&&!b.cs){b=b.gk();if(b!==null){a.e.cs=1;a.e=b;}a.e.eG();}b=a.M;if(b!==null){if(!b.cs){b=b.gk();if(b!==null){a.M.cs=1;a.M=b;}a.M.eG();}else if(b instanceof HM&&b.eK.om)a.M=b.e;}}
function C$(){Eh.call(this);this.bd=null;}
function A2v(a,b,c){var d=new C$();E$(d,a,b,c);return d;}
function E$(a,b,c,d){Dp(a,b,c,d);a.bd=b;}
function ATy(a,b,c,d){var e,f;e=0;a:{while((b+a.bd.b8()|0)<=d.y){f=a.bd.by(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.bd.b8()|0;e=e+(-1)|0;}return f;}
function FL(){C$.call(this);this.ku=null;}
function A3c(a,b,c,d){var e=new FL();RG(e,a,b,c,d);return e;}
function RG(a,b,c,d,e){E$(a,c,d,e);a.ku=b;}
function AUd(a,b,c,d){var e,f,g,h,i;e=a.ku;f=e.fx;g=e.fw;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bd.b8()|0)>d.y)break a;i=a.bd.by(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.bd.b8()|0;h=h+(-1)|0;}return i;}if((b+a.bd.b8()|0)>d.y){d.dF=1;return (-1);}i=a.bd.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CX=G(Eh);
function ATJ(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var E2=G(C$);
function AXm(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function ATe(a,b){a.e=b;a.M.S(b);}
var Ul=G(C$);
function A1k(a,b,c,d){while((b+a.bd.b8()|0)<=d.y&&a.bd.by(b,c)>0){b=b+a.bd.b8()|0;}return a.e.c(b,c,d);}
function APJ(a,b,c,d){var e,f,g;e=a.e.cm(b,c,d);if(e<0)return (-1);f=e-a.bd.b8()|0;while(f>=b&&a.bd.by(f,c)>0){g=f-a.bd.b8()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.nj=null;a.mF=null;}
function AJt(a,b){if(!b&&a.nj===null)a.nj=a.F();else if(b&&a.mF===null)a.mF=EH(a.F(),1);if(b)return a.mF;return a.nj;}
var Dq=G(BR);
function VQ(){var a=this;G0.call(a);a.fx=0;a.fw=0;}
function AXP(a){var b,c,d,e,f;b=a.fx;c=a.fw;d=c!=2147483647?NF(c):C(21);e=new K;M(e);BM(e,123);f=U(e,b);BM(f,44);BM(H(f,d),125);return L(e);}
var WT=G(BP);
function AOw(a,b,c,d){return b;}
function AYj(a,b){return 0;}
function ACB(){var a=this;B.call(a);a.D=null;a.bt=0;}
function A1D(){var a=new ACB();AUM(a);return a;}
function AUM(a){a.D=BN(0);}
function LA(a,b){var c,d;c=b/32|0;if(b>=a.bt){JR(a,c+1|0);a.bt=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function IJ(a,b,c){var d,e,f,g,h;d=BK(b,c);if(d>0){e=new BF;X(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bt){JR(a,f+1|0);a.bt=c;}if(d==f){g=a.D.data;g[d]=g[d]|IC(a,b)&JL(a,c);}else{g=a.D.data;g[d]=g[d]|IC(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|JL(a,c);}}}
function IC(a,b){return (-1)<<(b%32|0);}
function JL(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Oh(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bt-1|0))Hd(a);}}
function DR(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Id(a,b){var c,d,e,f;c=a.bt;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return IV(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+IV(e[f])|0;f=f+1|0;}return (-1);}
function JR(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.D=I$(a.D,c);}
function Hd(a){var b,c,d;b=(a.bt+31|0)/32|0;a.bt=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Wx(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bt=a.bt-32|0;}a.bt=a.bt-d|0;}}
function Dm(a,b){var c,d,e,f;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bt=Be(a.bt,b.bt);Hd(a);}
function F_(a,b){var c,d,e;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}Hd(a);}
function Gr(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;JR(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function Gk(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;JR(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}Hd(a);}
function Oa(a){return a.bt?0:1;}
function OC(){var a=this;B7.call(a);a.rC=null;a.De=0;}
function QJ(){var a=this;B7.call(a);a.nz=null;a.pf=null;}
function AFz(a,b){var c=new QJ();AGN(c,a,b);return c;}
function AGN(a,b,c){B5(a);a.nz=b;a.pf=c;}
function ALe(a,b,c,d){var e,f,g,h,i;e=a.nz.c(b,c,d);if(e<0)a:{f=a.pf;g=d.c8;e=d.y;h=b+1|0;e=BK(h,e);if(e>0){d.dF=1;e=(-1);}else{i=P(c,b);if(!f.rC.o(i))e=(-1);else{if(CP(i)){if(e<0&&Dg(P(c,h))){e=(-1);break a;}}else if(Dg(i)&&b>g&&CP(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AYc(a,b){a.e=b;a.pf.e=b;a.nz.S(b);}
function ALH(a,b){return 1;}
function ALu(a,b){return 1;}
function D0(){var a=this;B7.call(a);a.d1=null;a.B1=0;}
function AWR(a){var b=new D0();AAU(b,a);return b;}
function AAU(a,b){B5(a);a.d1=b.lA();a.B1=b.bh;}
function AVC(a,b,c,d){var e,f,g,h;e=d.y;if(b<e){f=b+1|0;g=P(c,b);if(a.o(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Ji(g,f)&&a.o(EI(g,f)))return a.e.c(b,c,d);}}return (-1);}
function ANl(a,b){return a.d1.o(b);}
function ALa(a,b){if(b instanceof Ea)return M$(a.d1,b.gK);if(b instanceof EE)return M$(a.d1,b.dB);if(b instanceof D0)return JO(a.d1,b.d1);if(!(b instanceof Ey))return 1;return JO(a.d1,b.gc);}
function AOq(a){return a.d1;}
function AZJ(a,b){a.e=b;}
function AMZ(a,b){return 1;}
var Mq=G(D0);
function AOf(a,b){return a.d1.o(GV(GT(b)));}
function AD3(){var a=this;Cb.call(a);a.xL=null;a.BK=0;}
function ANI(a){var b=new AD3();APT(b,a);return b;}
function APT(a,b){DW(a);a.xL=b.lA();a.BK=b.bh;}
function AWV(a,b,c){return !a.xL.o(FD(Fg(P(c,b))))?(-1):1;}
function Ey(){var a=this;Cb.call(a);a.gc=null;a.Cb=0;}
function ART(a){var b=new Ey();AQB(b,a);return b;}
function AQB(a,b){DW(a);a.gc=b.lA();a.Cb=b.bh;}
function Vx(a,b,c){return !a.gc.o(P(c,b))?(-1):1;}
function AQn(a,b){if(b instanceof EE)return M$(a.gc,b.dB);if(b instanceof Ey)return JO(a.gc,b.gc);if(!(b instanceof D0)){if(!(b instanceof Ea))return 1;return 0;}return JO(a.gc,b.d1);}
function Xf(){var a=this;B7.call(a);a.iU=null;a.ps=null;a.ks=0;}
function AZ$(a,b){var c=new Xf();ATK(c,a,b);return c;}
function ATK(a,b,c){B5(a);a.iU=b;a.ks=c;}
function APb(a,b){a.e=b;}
function QR(a){if(a.ps===null)a.ps=Hi(a.iU);return a.ps;}
function AKw(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.y;f=BN(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DT([k,l]):DT([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ks;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.iU.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ks==3){k=f[0];m=a.iU.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ks==2){b=f[0];m=a.iU.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AUw(a,b){return b instanceof Xf&&!Bi(QR(b),QR(a))?0:1;}
function AR2(a,b){return 1;}
function EE(){Cb.call(this);this.dB=0;}
function AEg(a){var b=new EE();AQF(b,a);return b;}
function AQF(a,b){DW(a);a.dB=b;}
function AWL(a){return 1;}
function ANF(a,b,c){return a.dB!=P(c,b)?(-1):1;}
function AML(a,b,c,d){var e,f,g;if(!(c instanceof BL))return Iy(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=JN(c,a.dB,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AOs(a,b,c,d,e){var f;if(!(d instanceof BL))return IF(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hn(d,a.dB,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ARU(a,b){if(b instanceof EE)return b.dB!=a.dB?0:1;if(!(b instanceof Ey)){if(b instanceof D0)return b.o(a.dB);if(!(b instanceof Ea))return 1;return 0;}return Vx(b,0,UF(a.dB))<=0?0:1;}
function AGB(){Cb.call(this);this.vH=0;}
function AYQ(a){var b=new AGB();AXF(b,a);return b;}
function AXF(a,b){DW(a);a.vH=FD(Fg(b));}
function ATl(a,b,c){return a.vH!=FD(Fg(P(c,b)))?(-1):1;}
function ADq(){var a=this;Cb.call(a);a.uU=0;a.wj=0;}
function AUR(a){var b=new ADq();AQ$(b,a);return b;}
function AQ$(a,b){DW(a);a.uU=b;a.wj=Jq(b);}
function AKE(a,b,c){return a.uU!=P(c,b)&&a.wj!=P(c,b)?(-1):1;}
function FQ(){var a=this;B7.call(a);a.jr=0;a.mz=null;a.l5=null;a.lZ=0;}
function A4a(a,b){var c=new FQ();Pm(c,a,b);return c;}
function Pm(a,b,c){B5(a);a.jr=1;a.l5=b;a.lZ=c;}
function A02(a,b){a.e=b;}
function AP$(a,b,c,d){var e,f,g,h,i,j,k,l;e=BN(4);f=d.y;if(b>=f)return (-1);g=K7(a,b,c,f);h=b+a.jr|0;i=AJP(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DS(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=K7(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AJP(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.jr|0;if(h>=f){b=k;break a;}g=K7(a,h,c,f);b=k;}}}if(b!=a.lZ)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.l5.data[g])break;g=g+1|0;}return (-1);}
function Uu(a){var b,c;if(a.mz===null){b=new K;M(b);c=0;while(c<a.lZ){JQ(b,HK(a.l5.data[c]));c=c+1|0;}a.mz=L(b);}return a.mz;}
function K7(a,b,c,d){var e,f,g;a.jr=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Ji(e,f)){g=B4(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CP(g[0])&&Dg(g[1])?EI(g[0],g[1]):g[0];a.jr=2;}}return e;}
function AOx(a,b){return b instanceof FQ&&!Bi(Uu(b),Uu(a))?0:1;}
function AYP(a,b){return 1;}
var UP=G(FQ);
var AAq=G(FQ);
var Vu=G(CX);
function AU5(a,b,c,d){var e;while(true){e=a.M.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var XU=G(CX);
function AXB(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.M.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Gt=G(CX);
function AZH(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function A0y(a,b){a.e=b;a.M.S(b);}
var P_=G(Gt);
function AOo(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AXR(a,b){a.e=b;}
function Ge(){var a=this;CX.call(a);a.gS=null;a.dH=0;}
function A7W(a,b,c,d,e){var f=new Ge();Mp(f,a,b,c,d,e);return f;}
function Mp(a,b,c,d,e,f){Dp(a,c,d,e);a.gS=b;a.dH=f;}
function A1y(a,b,c,d){var e,f;e=VO(d,a.dH);if(!a.M.H(d))return a.e.c(b,c,d);if(e>=a.gS.fw)return a.e.c(b,c,d);f=a.dH;e=e+1|0;EO(d,f,e);f=a.M.c(b,c,d);if(f>=0){EO(d,a.dH,0);return f;}f=a.dH;e=e+(-1)|0;EO(d,f,e);if(e>=a.gS.fx)return a.e.c(b,c,d);EO(d,a.dH,0);return (-1);}
var OP=G(Ge);
function ANW(a,b,c,d){var e,f,g;e=0;f=a.gS.fw;a:{while(true){g=a.M.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gS.fx)return (-1);return a.e.c(b,c,d);}
var Rm=G(CX);
function ASL(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var Yt=G(Gt);
function ALI(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.M.c(b,c,d);return e;}
var S8=G(Ge);
function ATY(a,b,c,d){var e,f,g;e=VO(d,a.dH);if(!a.M.H(d))return a.e.c(b,c,d);f=a.gS;if(e>=f.fw){EO(d,a.dH,0);return a.e.c(b,c,d);}if(e<f.fx){EO(d,a.dH,e+1|0);g=a.M.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){EO(d,a.dH,0);return g;}EO(d,a.dH,e+1|0);g=a.M.c(b,c,d);}return g;}
var Rn=G(Eh);
function A1p(a,b,c,d){var e;e=d.y;if(e>b)return a.e.cw(b,e,c,d);return a.e.c(b,c,d);}
function ARG(a,b,c,d){var e;e=d.y;if(a.e.cw(b,e,c,d)>=0)return b;return (-1);}
function W0(){Eh.call(this);this.mD=null;}
function AQo(a,b,c,d){var e,f;e=d.y;f=AA$(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cw(b,e,c,d);return a.e.c(b,c,d);}
function AKy(a,b,c,d){var e,f,g,h;e=d.y;f=a.e.cm(b,c,d);if(f<0)return (-1);g=AA$(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.e.cw(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.mD.iC(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function AA$(a,b,c,d){while(true){if(b>=c)return (-1);if(a.mD.iC(P(d,b)))break;b=b+1|0;}return b;}
var Fu=G();
var A7X=null;var A7Y=null;function XE(b){var c;if(!(b&1)){c=A7Y;if(c!==null)return c;c=new ABt;A7Y=c;return c;}c=A7X;if(c!==null)return c;c=new ABs;A7X=c;return c;}
var ADn=G(C$);
function AK4(a,b,c,d){var e;a:{while(true){if((b+a.bd.b8()|0)>d.y)break a;e=a.bd.by(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var Uh=G(E2);
function APz(a,b,c,d){var e;if((b+a.bd.b8()|0)<=d.y){e=a.bd.by(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var Xt=G(FL);
function AZk(a,b,c,d){var e,f,g,h,i;e=a.ku;f=e.fx;g=e.fw;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bd.b8()|0)>d.y)break a;i=a.bd.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.bd.b8()|0)>d.y){d.dF=1;return (-1);}i=a.bd.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Ys=G(C$);
function AQk(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.bd.b8()|0)<=d.y){e=a.bd.by(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var AAC=G(E2);
function AK$(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var Ra=G(FL);
function AZz(a,b,c,d){var e,f,g,h,i,j;e=a.ku;f=e.fx;g=e.fw;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.bd.b8()|0)<=d.y){i=a.bd.by(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bd.b8()|0)>d.y){d.dF=1;return (-1);}j=a.bd.by(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var K5=G(BP);
function AW9(a,b,c,d){if(b&&!(d.gi&&b==d.c8))return (-1);return a.e.c(b,c,d);}
function AWB(a,b){return 0;}
function AEn(){BP.call(this);this.uv=0;}
function AZ1(a){var b=new AEn();AOi(b,a);return b;}
function AOi(a,b){B5(a);a.uv=b;}
function AUm(a,b,c,d){var e,f,g;e=b<d.y?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.kd?0:d.c8;return (e!=32&&!Yw(a,e,b,g,c)?0:1)^(f!=32&&!Yw(a,f,b-1|0,g,c)?0:1)^a.uv?(-1):a.e.c(b,c,d);}
function AUv(a,b){return 0;}
function Yw(a,b,c,d,e){var f;if(!Kw(b)&&b!=95){a:{if(CC(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Kw(f))return 0;if(CC(f)!=6)return 1;}}return 1;}return 0;}
var WW=G(BP);
function AOh(a,b,c,d){if(b!=d.iH)return (-1);return a.e.c(b,c,d);}
function AS9(a,b){return 0;}
function UJ(){BP.call(this);this.gX=0;}
function A2E(a){var b=new UJ();AJI(b,a);return b;}
function AJI(a,b){B5(a);a.gX=b;}
function AYC(a,b,c,d){var e,f,g;e=!d.gi?J(c):d.y;if(b>=e){BX(d,a.gX,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BX(d,a.gX,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BX(d,a.gX,0);return a.e.c(b,c,d);}
function AUX(a,b){var c;c=!DB(b,a.gX)?0:1;BX(b,a.gX,(-1));return c;}
var ACk=G(BP);
function AYa(a,b,c,d){if(b<(d.kd?J(c):d.y))return (-1);d.dF=1;d.D_=1;return a.e.c(b,c,d);}
function ATk(a,b){return 0;}
function V9(){BP.call(this);this.yl=null;}
function AUS(a,b,c,d){a:{if(b!=d.y){if(!b)break a;if(d.gi&&b==d.c8)break a;if(a.yl.y6(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function ANs(a,b){return 0;}
var AGp=G(B7);
function A2M(){var a=new AGp();AX2(a);return a;}
function AX2(a){B5(a);}
function ASO(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dF=1;return (-1);}g=P(c,b);if(CP(g)){h=b+2|0;if(h<=e&&Ji(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function AUy(a,b){a.e=b;}
function AXX(a){return (-2147483602);}
function AUx(a,b){return 1;}
function AD8(){B7.call(this);this.mW=null;}
function A2B(a){var b=new AD8();AL2(b,a);return b;}
function AL2(a,b){B5(a);a.mW=b;}
function AX6(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dF=1;return (-1);}g=P(c,b);if(CP(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Ji(g,h))return a.mW.iC(EI(g,h))?(-1):a.e.c(b,c,d);}}return a.mW.iC(g)?(-1):a.e.c(f,c,d);}
function AZb(a,b){a.e=b;}
function AKk(a){return (-2147483602);}
function ASZ(a,b){return 1;}
function AJN(){BP.call(this);this.jn=0;}
function A2k(a){var b=new AJN();AV0(b,a);return b;}
function AV0(a,b){B5(a);a.jn=b;}
function AOA(a,b,c,d){var e;e=!d.gi?J(c):d.y;if(b>=e){BX(d,a.jn,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BX(d,a.jn,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AVZ(a,b){var c;c=!DB(b,a.jn)?0:1;BX(b,a.jn,(-1));return c;}
function AIV(){BP.call(this);this.iv=0;}
function A1$(a){var b=new AIV();AWf(b,a);return b;}
function AWf(a,b){B5(a);a.iv=b;}
function AP6(a,b,c,d){if((!d.gi?J(c)-b|0:d.y-b|0)<=0){BX(d,a.iv,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);BX(d,a.iv,1);return a.e.c(b+1|0,c,d);}
function AVT(a,b){var c;c=!DB(b,a.iv)?0:1;BX(b,a.iv,(-1));return c;}
function AG9(){BP.call(this);this.gv=0;}
function A1R(a){var b=new AG9();A1A(b,a);return b;}
function A1A(a,b){B5(a);a.gv=b;}
function AWw(a,b,c,d){var e,f,g;e=!d.gi?J(c)-b|0:d.y-b|0;if(!e){BX(d,a.gv,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BX(d,a.gv,0);return a.e.c(b,c,d);case 13:if(g!=10){BX(d,a.gv,0);return a.e.c(b,c,d);}BX(d,a.gv,0);return a.e.c(b,c,d);default:}return (-1);}
function AL6(a,b){var c;c=!DB(b,a.gv)?0:1;BX(b,a.gv,(-1));return c;}
function H9(){var a=this;B7.call(a);a.qa=0;a.hh=0;}
function A3$(a,b){var c=new H9();PU(c,a,b);return c;}
function PU(a,b,c){B5(a);a.qa=b;a.hh=c;}
function AK6(a,b,c,d){var e,f,g,h;e=GD(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BX(d,a.hh,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Jq(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AYL(a,b){a.e=b;}
function GD(a,b){var c,d;c=a.qa;d=Go(b,c);c=IZ(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.mZ)?Cr(b.mZ,d,c):null;}
function AQ4(a,b){var c;c=!DB(b,a.hh)?0:1;BX(b,a.hh,(-1));return c;}
var AJS=G(H9);
function A20(a,b){var c=new AJS();A0q(c,a,b);return c;}
function A0q(a,b,c){PU(a,b,c);}
function AL$(a,b,c,d){var e,f;e=GD(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=!AAT(c,e,b)?(-1):J(e);if(f<0)return (-1);BX(d,a.hh,f);return a.e.c(b+f|0,c,d);}return (-1);}
function AR$(a,b,c,d){var e,f;e=GD(a,d);f=d.c8;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=XV(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AKS(a,b,c,d,e){var f,g;f=GD(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Qn(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AXw(a,b){return 1;}
var AIh=G(H9);
function A1_(a,b){var c=new AIh();ANr(c,a,b);return c;}
function ANr(a,b,c){PU(a,b,c);}
function AO2(a,b,c,d){var e,f;e=GD(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BX(d,a.hh,J(e));return a.e.c(b+J(e)|0,c,d);}if(FD(Fg(P(e,f)))!=FD(Fg(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Pv=G(GI);
function ANb(a,b,c,d,e){VT(a,b,c,d,e);return a;}
function AUp(a,b,c,d){ACJ(a,b,c,d);return a;}
function AUL(a,b){MJ(a,b);}
function AZS(a,b,c){ACV(a,b,c);return a;}
function Y5(){var a=this;Cb.call(a);a.cB=null;a.ox=null;a.m5=null;}
function AMl(a,b,c){return !K3(a,c,b)?(-1):a.bG;}
function AUk(a,b,c,d){var e,f,g;e=d.y;while(true){if(b>e)return (-1);f=P(a.cB,a.bG-1|0);a:{while(true){g=a.bG;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&K3(a,c,b))break;b=b+ZF(a.ox,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bG|0,c,d)>=0)break;b=b+1|0;}return b;}
function AV3(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cB,0);g=(J(d)-c|0)-a.bG|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&K3(a,d,c))break;c=c-ZF(a.m5,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bG|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ANL(a,b){var c;if(b instanceof EE)return b.dB!=P(a.cB,0)?0:1;if(b instanceof Ey)return Vx(b,0,Cr(a.cB,0,1))<=0?0:1;if(!(b instanceof D0)){if(!(b instanceof Ea))return 1;return J(a.cB)>1&&b.gK==EI(P(a.cB,0),P(a.cB,1))?1:0;}a:{b:{b=b;if(!b.o(P(a.cB,0))){if(J(a.cB)<=1)break b;if(!b.o(EI(P(a.cB,0),P(a.cB,1))))break b;}c=1;break a;}c=0;}return c;}
function K3(a,b,c){var d;d=0;while(d<a.bG){if(P(b,d+c|0)!=P(a.cB,d))return 0;d=d+1|0;}return 1;}
function ADp(){Cb.call(this);this.lv=null;}
function A3_(a){var b=new ADp();AZ6(b,a);return b;}
function AZ6(a,b){var c,d,e;DW(a);c=new K;M(c);d=0;while(true){e=BK(d,b.K);if(e>=0){a.lv=L(c);a.bG=c.K;return;}if(d<0)break;if(e>=0)break;BM(c,FD(Fg(b.C.data[d])));d=d+1|0;}b=new BF;X(b);N(b);}
function AO8(a,b,c){var d;d=0;while(true){if(d>=J(a.lv))return J(a.lv);if(P(a.lv,d)!=FD(Fg(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OS(){Cb.call(this);this.jk=null;}
function AZl(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.jk))return J(a.jk);e=P(a.jk,d);f=b+d|0;if(e!=P(c,f)&&Jq(P(a.jk,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Hb=G();
var A7Z=null;var A70=null;var A7V=null;function ARb(){ARb=Bn(Hb);AMA();}
function AMA(){A7Z=A2H();A70=A3q();A7V=I($rt_arraycls(B),[I(B,[C(474),A2P()]),I(B,[C(475),A1P()]),I(B,[C(476),A3W()]),I(B,[C(477),A30()]),I(B,[C(478),A70]),I(B,[C(479),A3x()]),I(B,[C(480),A2d()]),I(B,[C(481),A22()]),I(B,[C(482),A2Z()]),I(B,[C(483),A1X()]),I(B,[C(484),A14()]),I(B,[C(485),A25()]),I(B,[C(486),A2u()]),I(B,[C(487),A1L()]),I(B,[C(488),A3Y()]),I(B,[C(489),A13()]),I(B,[C(490),A3v()]),I(B,[C(491),A3b()]),I(B,[C(492),A3w()]),I(B,[C(493),A1Z()]),I(B,[C(494),A33()]),I(B,[C(495),A28()]),I(B,[C(496),A2m()]),
I(B,[C(497),A3U()]),I(B,[C(498),A3R()]),I(B,[C(499),A2J()]),I(B,[C(500),A1Y()]),I(B,[C(501),A3K()]),I(B,[C(502),A7Z]),I(B,[C(503),A2p()]),I(B,[C(504),A24()]),I(B,[C(505),A7Z]),I(B,[C(506),A1J()]),I(B,[C(507),A70]),I(B,[C(508),A17()]),I(B,[C(509),R(0,127)]),I(B,[C(510),R(128,255)]),I(B,[C(511),R(256,383)]),I(B,[C(512),R(384,591)]),I(B,[C(513),R(592,687)]),I(B,[C(514),R(688,767)]),I(B,[C(515),R(768,879)]),I(B,[C(516),R(880,1023)]),I(B,[C(517),R(1024,1279)]),I(B,[C(518),R(1280,1327)]),I(B,[C(519),R(1328,1423)]),
I(B,[C(520),R(1424,1535)]),I(B,[C(521),R(1536,1791)]),I(B,[C(522),R(1792,1871)]),I(B,[C(523),R(1872,1919)]),I(B,[C(524),R(1920,1983)]),I(B,[C(525),R(2304,2431)]),I(B,[C(526),R(2432,2559)]),I(B,[C(527),R(2560,2687)]),I(B,[C(528),R(2688,2815)]),I(B,[C(529),R(2816,2943)]),I(B,[C(530),R(2944,3071)]),I(B,[C(531),R(3072,3199)]),I(B,[C(532),R(3200,3327)]),I(B,[C(533),R(3328,3455)]),I(B,[C(534),R(3456,3583)]),I(B,[C(535),R(3584,3711)]),I(B,[C(536),R(3712,3839)]),I(B,[C(537),R(3840,4095)]),I(B,[C(538),R(4096,4255)]),
I(B,[C(539),R(4256,4351)]),I(B,[C(540),R(4352,4607)]),I(B,[C(541),R(4608,4991)]),I(B,[C(542),R(4992,5023)]),I(B,[C(543),R(5024,5119)]),I(B,[C(544),R(5120,5759)]),I(B,[C(545),R(5760,5791)]),I(B,[C(546),R(5792,5887)]),I(B,[C(547),R(5888,5919)]),I(B,[C(548),R(5920,5951)]),I(B,[C(549),R(5952,5983)]),I(B,[C(550),R(5984,6015)]),I(B,[C(551),R(6016,6143)]),I(B,[C(552),R(6144,6319)]),I(B,[C(553),R(6400,6479)]),I(B,[C(554),R(6480,6527)]),I(B,[C(555),R(6528,6623)]),I(B,[C(556),R(6624,6655)]),I(B,[C(557),R(6656,6687)]),
I(B,[C(558),R(7424,7551)]),I(B,[C(559),R(7552,7615)]),I(B,[C(560),R(7616,7679)]),I(B,[C(561),R(7680,7935)]),I(B,[C(562),R(7936,8191)]),I(B,[C(563),R(8192,8303)]),I(B,[C(564),R(8304,8351)]),I(B,[C(565),R(8352,8399)]),I(B,[C(566),R(8400,8447)]),I(B,[C(567),R(8448,8527)]),I(B,[C(568),R(8528,8591)]),I(B,[C(569),R(8592,8703)]),I(B,[C(570),R(8704,8959)]),I(B,[C(571),R(8960,9215)]),I(B,[C(572),R(9216,9279)]),I(B,[C(573),R(9280,9311)]),I(B,[C(574),R(9312,9471)]),I(B,[C(575),R(9472,9599)]),I(B,[C(576),R(9600,9631)]),
I(B,[C(577),R(9632,9727)]),I(B,[C(578),R(9728,9983)]),I(B,[C(579),R(9984,10175)]),I(B,[C(580),R(10176,10223)]),I(B,[C(581),R(10224,10239)]),I(B,[C(582),R(10240,10495)]),I(B,[C(583),R(10496,10623)]),I(B,[C(584),R(10624,10751)]),I(B,[C(585),R(10752,11007)]),I(B,[C(586),R(11008,11263)]),I(B,[C(587),R(11264,11359)]),I(B,[C(588),R(11392,11519)]),I(B,[C(589),R(11520,11567)]),I(B,[C(590),R(11568,11647)]),I(B,[C(591),R(11648,11743)]),I(B,[C(592),R(11776,11903)]),I(B,[C(593),R(11904,12031)]),I(B,[C(594),R(12032,12255)]),
I(B,[C(595),R(12272,12287)]),I(B,[C(596),R(12288,12351)]),I(B,[C(597),R(12352,12447)]),I(B,[C(598),R(12448,12543)]),I(B,[C(599),R(12544,12591)]),I(B,[C(600),R(12592,12687)]),I(B,[C(601),R(12688,12703)]),I(B,[C(602),R(12704,12735)]),I(B,[C(603),R(12736,12783)]),I(B,[C(604),R(12784,12799)]),I(B,[C(605),R(12800,13055)]),I(B,[C(606),R(13056,13311)]),I(B,[C(607),R(13312,19893)]),I(B,[C(608),R(19904,19967)]),I(B,[C(609),R(19968,40959)]),I(B,[C(610),R(40960,42127)]),I(B,[C(611),R(42128,42191)]),I(B,[C(612),R(42752,
42783)]),I(B,[C(613),R(43008,43055)]),I(B,[C(614),R(44032,55203)]),I(B,[C(615),R(55296,56191)]),I(B,[C(616),R(56192,56319)]),I(B,[C(617),R(56320,57343)]),I(B,[C(618),R(57344,63743)]),I(B,[C(619),R(63744,64255)]),I(B,[C(620),R(64256,64335)]),I(B,[C(621),R(64336,65023)]),I(B,[C(622),R(65024,65039)]),I(B,[C(623),R(65040,65055)]),I(B,[C(624),R(65056,65071)]),I(B,[C(625),R(65072,65103)]),I(B,[C(626),R(65104,65135)]),I(B,[C(627),R(65136,65279)]),I(B,[C(628),R(65280,65519)]),I(B,[C(629),R(0,1114111)]),I(B,[C(630),
A26()]),I(B,[C(631),B1(0,1)]),I(B,[C(632),J5(62,1)]),I(B,[C(633),B1(1,1)]),I(B,[C(634),B1(2,1)]),I(B,[C(635),B1(3,0)]),I(B,[C(636),B1(4,0)]),I(B,[C(637),B1(5,1)]),I(B,[C(638),J5(448,1)]),I(B,[C(639),B1(6,1)]),I(B,[C(640),B1(7,0)]),I(B,[C(641),B1(8,1)]),I(B,[C(642),J5(3584,1)]),I(B,[C(643),B1(9,1)]),I(B,[C(644),B1(10,1)]),I(B,[C(645),B1(11,1)]),I(B,[C(646),J5(28672,0)]),I(B,[C(647),B1(12,0)]),I(B,[C(648),B1(13,0)]),I(B,[C(649),B1(14,0)]),I(B,[C(650),A3n(983040,1,1)]),I(B,[C(651),B1(15,0)]),I(B,[C(652),B1(16,
1)]),I(B,[C(653),B1(18,1)]),I(B,[C(654),A2j(19,0,1)]),I(B,[C(655),J5(1643118592,1)]),I(B,[C(656),B1(20,0)]),I(B,[C(657),B1(21,0)]),I(B,[C(658),B1(22,0)]),I(B,[C(659),B1(23,0)]),I(B,[C(660),B1(24,1)]),I(B,[C(661),J5(2113929216,1)]),I(B,[C(662),B1(25,1)]),I(B,[C(663),B1(26,0)]),I(B,[C(664),B1(27,0)]),I(B,[C(665),B1(28,1)]),I(B,[C(666),B1(29,0)]),I(B,[C(667),B1(30,0)])]);}
function VB(){Cb.call(this);this.sf=0;}
function ARo(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.sf!=GV(GT(EI(e,d)))?(-1):2;}
function Nw(){B7.call(this);this.g8=0;}
function AP1(a){var b=new Nw();ALM(b,a);return b;}
function ALM(a,b){B5(a);a.g8=b;}
function AYh(a,b){a.e=b;}
function AUY(a,b,c,d){var e,f;e=b+1|0;if(e>d.y){d.dF=1;return (-1);}f=P(c,b);if(b>d.c8&&CP(P(c,b-1|0)))return (-1);if(a.g8!=f)return (-1);return a.e.c(e,c,d);}
function ANJ(a,b,c,d){var e,f,g,h;if(!(c instanceof BL))return Iy(a,b,c,d);e=d.c8;f=d.y;while(true){if(b>=f)return (-1);g=JN(c,a.g8,b);if(g<0)return (-1);if(g>e&&CP(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AVm(a,b,c,d,e){var f,g;if(!(d instanceof BL))return IF(a,b,c,d,e);f=e.c8;a:{while(true){if(c<b)return (-1);g=Hn(d,a.g8,c);if(g<0)break a;if(g<b)break a;if(g>f&&CP(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKR(a,b){if(b instanceof EE)return 0;if(b instanceof Ey)return 0;if(b instanceof D0)return 0;if(b instanceof Ea)return 0;if(b instanceof NE)return 0;if(!(b instanceof Nw))return 1;return b.g8!=a.g8?0:1;}
function ARP(a,b){return 1;}
function NE(){B7.call(this);this.gQ=0;}
function AWA(a){var b=new NE();AP4(b,a);return b;}
function AP4(a,b){B5(a);a.gQ=b;}
function AUK(a,b){a.e=b;}
function AKA(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;g=BK(f,e);if(g>0){d.dF=1;return (-1);}h=P(c,b);if(g<0&&Dg(P(c,f)))return (-1);if(a.gQ!=h)return (-1);return a.e.c(f,c,d);}
function AYq(a,b,c,d){var e,f;if(!(c instanceof BL))return Iy(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=JN(c,a.gQ,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dg(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function ARk(a,b,c,d,e){var f,g;if(!(d instanceof BL))return IF(a,b,c,d,e);f=e.y;a:{while(true){if(c<b)return (-1);g=Hn(d,a.gQ,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dg(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AMm(a,b){if(b instanceof EE)return 0;if(b instanceof Ey)return 0;if(b instanceof D0)return 0;if(b instanceof Ea)return 0;if(b instanceof Nw)return 0;if(!(b instanceof NE))return 1;return b.gQ!=a.gQ?0:1;}
function AYx(a,b){return 1;}
function Ea(){var a=this;Cb.call(a);a.lU=0;a.k3=0;a.gK=0;}
function AYX(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.lU==e&&a.k3==d?2:(-1);}
function AXK(a,b,c,d){var e,f;if(!(c instanceof BL))return Iy(a,b,c,d);e=d.y;while(b<e){b=JN(c,a.lU,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.k3==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ALN(a,b,c,d,e){var f;if(!(d instanceof BL))return IF(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hn(d,a.k3,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.lU==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AYR(a,b){if(b instanceof Ea)return b.gK!=a.gK?0:1;if(b instanceof D0)return b.o(a.gK);if(b instanceof EE)return 0;if(!(b instanceof Ey))return 1;return 0;}
var ABs=G(Fu);
function ALS(a,b){return b!=10?0:1;}
function AQ1(a,b,c){return b!=10?0:1;}
var ABt=G(Fu);
function AZB(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ASA(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AFQ(){var a=this;B.call(a);a.nV=null;a.l7=null;a.i6=0;a.vj=0;}
function AXW(a){var b=new AFQ();AOg(b,a);return b;}
function AOg(a,b){var c,d;while(true){c=a.i6;if(b<c)break;a.i6=c<<1|1;}d=c<<1|1;a.i6=d;d=d+1|0;a.nV=BN(d);a.l7=BN(d);a.vj=b;}
function Rb(a,b,c){var d,e,f,g;d=0;e=a.i6;f=b&e;while(true){g=a.nV.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.l7.data[f]=c;}
function ZF(a,b){var c,d,e,f;c=a.i6;d=b&c;e=0;while(true){f=a.nV.data[d];if(!f)break;if(f==b)return a.l7.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.vj;}
var ADC=G();
var Nu=G(Bf);
function A2H(){var a=new Nu();ANX(a);return a;}
function ANX(a){}
function AIn(a){return CH(Ca(DC(),9,13),32);}
var MU=G(Bf);
function A3q(){var a=new MU();ARJ(a);return a;}
function ARJ(a){}
function AIR(a){return Ca(DC(),48,57);}
var AFJ=G(Bf);
function A2P(){var a=new AFJ();ANx(a);return a;}
function ANx(a){}
function AZe(a){return Ca(DC(),97,122);}
var AF4=G(Bf);
function A1P(){var a=new AF4();AOk(a);return a;}
function AOk(a){}
function ARR(a){return Ca(DC(),65,90);}
var AF6=G(Bf);
function A3W(){var a=new AF6();ALm(a);return a;}
function ALm(a){}
function AMQ(a){return Ca(DC(),0,127);}
var Nq=G(Bf);
function A30(){var a=new Nq();AMa(a);return a;}
function AMa(a){}
function AD_(a){return Ca(Ca(DC(),97,122),65,90);}
var Ly=G(Nq);
function A3x(){var a=new Ly();AN6(a);return a;}
function AN6(a){}
function AEE(a){return Ca(AD_(a),48,57);}
var AG0=G(Bf);
function A2d(){var a=new AG0();AXC(a);return a;}
function AXC(a){}
function AWg(a){return Ca(Ca(Ca(DC(),33,64),91,96),123,126);}
var Oj=G(Ly);
function A22(){var a=new Oj();AQM(a);return a;}
function AQM(a){}
function AG7(a){return Ca(Ca(Ca(AEE(a),33,64),91,96),123,126);}
var AIy=G(Oj);
function A2Z(){var a=new AIy();ARF(a);return a;}
function ARF(a){}
function APm(a){return CH(AG7(a),32);}
var AE7=G(Bf);
function A1X(){var a=new AE7();AZm(a);return a;}
function AZm(a){}
function AVb(a){return CH(CH(DC(),32),9);}
var AEi=G(Bf);
function A14(){var a=new AEi();A0M(a);return a;}
function A0M(a){}
function APj(a){return CH(Ca(DC(),0,31),127);}
var AHP=G(Bf);
function A25(){var a=new AHP();ALx(a);return a;}
function ALx(a){}
function ASD(a){return Ca(Ca(Ca(DC(),48,57),97,102),65,70);}
var AJC=G(Bf);
function A2u(){var a=new AJC();AUc(a);return a;}
function AUc(a){}
function AXU(a){var b;b=new Z2;b.DP=a;Bz(b);b.P=1;return b;}
var AG3=G(Bf);
function A1L(){var a=new AG3();AQW(a);return a;}
function AQW(a){}
function ATr(a){var b;b=new VJ;b.DT=a;Bz(b);b.P=1;return b;}
var AJl=G(Bf);
function A3Y(){var a=new AJl();ALo(a);return a;}
function ALo(a){}
function AN2(a){var b;b=new RA;b.DE=a;Bz(b);return b;}
var AFA=G(Bf);
function A13(){var a=new AFA();APk(a);return a;}
function APk(a){}
function AQ9(a){var b;b=new Rz;b.BC=a;Bz(b);return b;}
var AGg=G(Bf);
function A3v(){var a=new AGg();AL9(a);return a;}
function AL9(a){}
function AU_(a){var b;b=new Uy;b.CF=a;Bz(b);IJ(b.N,0,2048);b.P=1;return b;}
var ADO=G(Bf);
function A3b(){var a=new ADO();ALQ(a);return a;}
function ALQ(a){}
function AMw(a){var b;b=new Xq;b.D4=a;Bz(b);b.P=1;return b;}
var AHe=G(Bf);
function A3w(){var a=new AHe();AO6(a);return a;}
function AO6(a){}
function A0P(a){var b;b=new Ps;b.C1=a;Bz(b);b.P=1;return b;}
var AJr=G(Bf);
function A1Z(){var a=new AJr();APC(a);return a;}
function APC(a){}
function ATm(a){var b;b=new YC;b.B2=a;Bz(b);return b;}
var AFZ=G(Bf);
function A33(){var a=new AFZ();AWo(a);return a;}
function AWo(a){}
function AOB(a){var b;b=new VF;b.Ba=a;Bz(b);b.P=1;return b;}
var AH9=G(Bf);
function A28(){var a=new AH9();AKU(a);return a;}
function AKU(a){}
function AMC(a){var b;b=new VH;b.Cg=a;Bz(b);b.P=1;return b;}
var AE9=G(Bf);
function A2m(){var a=new AE9();ALU(a);return a;}
function ALU(a){}
function AV5(a){var b;b=new O$;b.CC=a;Bz(b);b.P=1;return b;}
var AGK=G(Bf);
function A3U(){var a=new AGK();AOF(a);return a;}
function AOF(a){}
function AW4(a){var b;b=new XG;b.Em=a;Bz(b);b.P=1;return b;}
var AJw=G(Bf);
function A3R(){var a=new AJw();AXO(a);return a;}
function AXO(a){}
function AR3(a){var b;b=new XN;b.BJ=a;Bz(b);return b;}
var AEO=G(Bf);
function A2J(){var a=new AEO();ALR(a);return a;}
function ALR(a){}
function AQG(a){var b;b=new AAl;b.D6=a;Bz(b);return b;}
var AEv=G(Bf);
function A1Y(){var a=new AEv();AY2(a);return a;}
function AY2(a){}
function APN(a){var b;b=new ZA;b.Bc=a;Bz(b);b.P=1;return b;}
var AG1=G(Bf);
function A3K(){var a=new AG1();AWk(a);return a;}
function AWk(a){}
function AY8(a){var b;b=new OG;b.Ey=a;Bz(b);b.P=1;return b;}
var Ko=G(Bf);
function A2p(){var a=new Ko();AMJ(a);return a;}
function AMJ(a){}
function AE8(a){return CH(Ca(Ca(Ca(DC(),97,122),65,90),48,57),95);}
var AJK=G(Ko);
function A24(){var a=new AJK();AWr(a);return a;}
function AWr(a){}
function APF(a){var b;b=EH(AE8(a),1);b.P=1;return b;}
var AID=G(Nu);
function A1J(){var a=new AID();ASn(a);return a;}
function ASn(a){}
function AUi(a){var b;b=EH(AIn(a),1);b.P=1;return b;}
var AEt=G(MU);
function A17(){var a=new AEt();AWU(a);return a;}
function AWU(a){}
function ANC(a){var b;b=EH(AIR(a),1);b.P=1;return b;}
function AHS(){var a=this;Bf.call(a);a.sa=0;a.yj=0;}
function R(a,b){var c=new AHS();A0O(c,a,b);return c;}
function A0O(a,b,c){a.sa=b;a.yj=c;}
function AOP(a){return Ca(DC(),a.sa,a.yj);}
var AH3=G(Bf);
function A26(){var a=new AH3();ASH(a);return a;}
function ASH(a){}
function ASs(a){return Ca(Ca(DC(),65279,65279),65520,65533);}
function AIr(){var a=this;Bf.call(a);a.pt=0;a.n4=0;a.wZ=0;}
function B1(a,b){var c=new AIr();AL5(c,a,b);return c;}
function A2j(a,b,c){var d=new AIr();ASx(d,a,b,c);return d;}
function AL5(a,b,c){a.n4=c;a.pt=b;}
function ASx(a,b,c,d){a.wZ=d;a.n4=c;a.pt=b;}
function AVS(a){var b;b=A2O(a.pt);if(a.wZ)IJ(b.N,0,2048);b.P=a.n4;return b;}
function AIz(){var a=this;Bf.call(a);a.nw=0;a.l$=0;a.qm=0;}
function J5(a,b){var c=new AIz();AMD(c,a,b);return c;}
function A3n(a,b,c){var d=new AIz();ATn(d,a,b,c);return d;}
function AMD(a,b,c){a.l$=c;a.nw=b;}
function ATn(a,b,c,d){a.qm=d;a.l$=c;a.nw=b;}
function AKp(a){var b;b=new Y$;AFu(b,a.nw);if(a.qm)IJ(b.N,0,2048);b.P=a.l$;return b;}
var AHV=G();
var AD2=G();
function AEN(b){var c,d,e,f,g,h,i;c=ARh(Gj(b));d=MN(c);e=BN(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+MN(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=OO(c);h=h+1|0;}return e;}
function Ng(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Wa(){var a=this;B.call(a);a.xl=0;a.sH=0;a.xw=null;}
function ANc(a,b,c){var d=new Wa();ARE(d,a,b,c);return d;}
function ARE(a,b,c,d){a.xl=b;a.sH=c;a.xw=d;}
function AFU(){var a=this;B.call(a);a.wC=null;a.xW=0;}
function ARh(a){var b=new AFU();AVk(b,a);return b;}
function AVk(a,b){a.wC=b;}
var AIe=G();
function MN(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.wC.data;f=b.xW;b.xW=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function OO(b){var c,d;c=MN(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Mh=G(Bt);
function AB1(){var a=this;B.call(a);a.xY=null;a.xZ=null;}
function AKr(a,b){var c,d,e,f;c=a.xY;d=a.xZ;e=new ACZ;f=ABa(EM(d));AJY(e,b,null,f);HU(c,e);}
function AB0(){B.call(this);this.wD=null;}
function AR4(a,b){Bl(a.wD,b);}
function AHJ(){B.call(this);this.Rv=null;}
function RT(){B.call(this);this.r3=null;}
function AVY(a,b){b.g7=a.r3;}
function Re(){B.call(this);this.tk=null;}
function AL1(a,b){Jg(a.tk,b);}
function ABo(){var a=this;B.call(a);a.Ez=null;a.ki=null;}
function AMU(a,b){var c;c=a.ki;b=b;a.ki=Xn(!c.nQ&&!b.eC?0:1);return 1;}
function AAM(){var a=this;B.call(a);a.BV=null;a.sj=null;}
function AAO(){B.call(this);this.Ed=null;}
function A0B(a,b){$rt_globals.console.info($rt_ustr(b));}
var Ku=G(0);
function Pk(){var a=this;B.call(a);a.k0=0;a.Be=null;}
function AYN(a,b){var c,d;c=Cv(b);d=new K;M(d);H(H(d,C(668)),c);$rt_globals.console.info($rt_ustr(L(d)));a.k0=a.k0+1|0;M2(b,a);}
function AWn(a,b){var c;b=Cv(b);c=new K;M(c);H(H(c,C(669)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function ARp(a){var b;b=a.k0-1|0;a.k0=b;if(!b)Bl(Bx(),C(670));}
function AAf(){var a=this;B.call(a);a.Ej=null;a.Ei=null;a.Eh=null;}
function AA6(){var a=this;B.call(a);a.CS=null;a.CT=null;}
function Wk(){B.call(this);this.xT=null;}
function AUq(a){var b,c,d,e;b=a.xT;c=Bx();d=Ia(b);e=new K;M(e);H(H(e,C(671)),d);Bl(c,L(e));c=b.zi;e=new Z0;e.fi=b;e.lq=BH();e.lQ=BH();M2(c,e);}
function Uk(){var a=this;Y.call(a);a.wo=null;a.Ef=null;}
function AMW(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cr^DR(a.wo,c):0;}
function Ui(){var a=this;Y.call(a);a.zP=null;a.uH=null;a.Cq=null;}
function ATI(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cr^DR(a.zP,c):0;return a.uH.o(b)&&!d?1:0;}
function PF(){var a=this;Y.call(a);a.k7=null;a.Df=null;}
function AOG(a,b){return a.bh^DR(a.k7,b);}
function AV7(a){var b,c,d;b=new K;M(b);c=Id(a.k7,0);while(c>=0){JQ(b,HK(c));BM(b,124);c=Id(a.k7,c+1|0);}d=b.K;if(d>0)T_(b,d-1|0);return L(b);}
function W6(){var a=this;Y.call(a);a.x$=null;a.DS=null;}
function AY1(a,b){return a.x$.o(b);}
function W4(){var a=this;Y.call(a);a.n6=0;a.wT=null;a.oE=null;}
function ARn(a,b){return !(a.n6^DR(a.oE.I,b))&&!(a.n6^a.oE.en^a.wT.o(b))?0:1;}
function W5(){var a=this;Y.call(a);a.l8=0;a.um=null;a.nh=null;}
function AXj(a,b){return !(a.l8^DR(a.nh.I,b))&&!(a.l8^a.nh.en^a.um.o(b))?1:0;}
function W9(){var a=this;Y.call(a);a.Az=0;a.ur=null;a.uj=null;a.Dp=null;}
function AVu(a,b){return a.Az^(!a.ur.o(b)&&!a.uj.o(b)?0:1);}
function W_(){var a=this;Y.call(a);a.sv=0;a.x6=null;a.xF=null;a.Ew=null;}
function AKl(a,b){return a.sv^(!a.x6.o(b)&&!a.xF.o(b)?0:1)?0:1;}
function W7(){var a=this;Y.call(a);a.rK=null;a.Ex=null;}
function ANy(a,b){return C9(a.rK,b);}
function W8(){var a=this;Y.call(a);a.Ab=null;a.Dt=null;}
function APa(a,b){return C9(a.Ab,b)?0:1;}
function Xa(){var a=this;Y.call(a);a.sE=null;a.x8=0;a.tR=null;}
function ASb(a,b){return !C9(a.sE,b)&&!(a.x8^DR(a.tR.I,b))?0:1;}
function Xb(){var a=this;Y.call(a);a.s5=null;a.yR=0;a.sX=null;}
function AU7(a,b){return !C9(a.s5,b)&&!(a.yR^DR(a.sX.I,b))?1:0;}
function PE(){var a=this;Y.call(a);a.tN=0;a.zZ=null;a.uO=null;a.Bh=null;}
function A1I(a,b){return !(a.tN^a.zZ.o(b))&&!C9(a.uO,b)?0:1;}
function P1(){var a=this;Y.call(a);a.Ak=0;a.p0=null;a.qn=null;a.Bw=null;}
function ANA(a,b){return !(a.Ak^a.p0.o(b))&&!C9(a.qn,b)?1:0;}
function PC(){var a=this;Y.call(a);a.xe=null;a.Bz=null;}
function AMc(a,b){return C9(a.xe,b);}
function PD(){var a=this;Y.call(a);a.rz=null;a.Eu=null;}
function AVW(a,b){return C9(a.rz,b)?0:1;}
function PI(){var a=this;Y.call(a);a.Av=null;a.sZ=0;a.A7=null;}
function AOj(a,b){return C9(a.Av,b)&&a.sZ^DR(a.A7.I,b)?1:0;}
function PB(){var a=this;Y.call(a);a.y8=null;a.yh=0;a.sY=null;}
function AZ2(a,b){return C9(a.y8,b)&&a.yh^DR(a.sY.I,b)?0:1;}
function PG(){var a=this;Y.call(a);a.zn=0;a.wm=null;a.st=null;a.Do=null;}
function AUs(a,b){return a.zn^a.wm.o(b)&&C9(a.st,b)?1:0;}
function PH(){var a=this;Y.call(a);a.y3=0;a.vR=null;a.zj=null;a.Dw=null;}
function AQz(a,b){return a.y3^a.vR.o(b)&&C9(a.zj,b)?0:1;}
var LY=G(0);
function Zz(){var a=this;B.call(a);a.Bs=null;a.z0=null;a.lm=null;a.cE=null;a.j2=0;a.oA=0;}
function Ow(a,b){var c,d,e;c=J(a.lm);if(b>=0&&b<=c){AC5(a.cE,null,(-1),(-1));d=a.cE;d.lG=1;d.eE=b;c=d.iH;if(c<0)c=b;d.iH=c;b=a.z0.cm(b,a.lm,d);if(b==(-1))a.cE.dF=1;if(b>=0){d=a.cE;if(d.ka){e=d.d4.data;if(e[0]==(-1)){c=d.eE;e[0]=c;e[1]=c;}d.iH=Mn(d);return 1;}}a.cE.eE=(-1);return 0;}d=new BF;Bm(d,Dh(b));N(d);}
function AGJ(a){return P0(a.cE,0);}
function AH5(a){return RB(a.cE,0);}
function ADG(a){return a.cE.kd;}
function AIF(){var a=this;B.call(a);a.NI=null;a.NG=null;a.NJ=0.0;}
var C8=G(0);
var A5r=null;var A6J=null;var A5t=null;var A5s=null;var A5v=null;var A5u=null;var A5x=null;var A5w=null;var A5z=null;var A5y=null;var A5A=null;function AF8(){AF8=Bn(C8);A0T();}
function A0T(){A5r=CA(0);A6J=Dt(8,8,8);A5t=S(C(672));A5s=Dt(255,255,255);A5v=S(C(673));A5u=S(C(674));A5x=S(C(675));A5w=S(C(676));A5z=ER(205,205,205,153);A5y=ER(255,255,255,0);A5A=S(C(115));}
function Cx(){CG.call(this);this.oT=null;}
var A71=null;var A72=null;var A73=null;var A74=null;var A75=null;var A76=null;var A77=null;var A78=null;var A79=null;var A7$=null;var A7_=null;var A8a=null;var A8b=null;var A8c=null;var A8d=null;var A5B=null;function AFv(){AFv=Bn(Cx);A1f();}
function DI(a,b,c){var d=new Cx();YK(d,a,b,c);return d;}
function A04(a,b,c,d){var e=new Cx();ADZ(e,a,b,c,d);return e;}
function YK(a,b,c,d){AFv();DG(a,b,c);a.oT=JA(d,null);}
function ADZ(a,b,c,d,e){AFv();DG(a,b,c);a.oT=JA(d,e);}
function A1f(){var b;b=new Cx;AF8();YK(b,C(359),0,A6J);A71=b;A72=DI(C(360),1,S(C(677)));A73=DI(C(362),2,S(C(678)));A74=DI(C(364),3,S(C(679)));A75=DI(C(366),4,A6J);A76=DI(C(367),5,S(C(680)));A77=DI(C(369),6,S(C(407)));A78=DI(C(371),7,S(C(681)));A79=DI(C(373),8,S(C(682)));A7$=A04(C(375),9,A6J,Dt(237,235,252));A7_=A04(C(376),10,S(C(405)),S(C(683)));A8a=DI(C(377),11,S(C(407)));A8b=DI(C(379),12,S(C(408)));A8c=DI(C(381),13,S(C(684)));b=DI(C(382),14,S(C(383)));A8d=b;A5B=I(Cx,[A71,A72,A73,A74,A75,A76,A77,A78,A79,A7$,
A7_,A8a,A8b,A8c,b]);}
var DX=G(0);
var A5F=null;var A5G=null;var A5C=null;var A5D=null;var A5E=null;var A6K=null;var A6L=null;var A5H=null;var A5I=null;function ATW(){ATW=Bn(DX);AVr();}
function AVr(){A5F=S(C(113));A5G=S(C(685));A5C=S(C(686));A5D=S(C(687));A5E=S(C(688));A6K=S(C(113));A6L=S(C(685));A5H=ER(205,205,205,153);A5I=Dt(247,248,250);}
function ABR(){var a=this;B.call(a);a.lI=null;a.iB=0;}
var OL=G(HM);
function ANf(a,b,c,d){var e,f,g;e=0;f=d.y;a:{while(true){if(b>f){b=e;break a;}g=Go(d,a.bc);DV(d,a.bc,b);e=a.dd.c(b,c,d);if(e>=0)break;DV(d,a.bc,g);b=b+1|0;}}return b;}
function A1x(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Go(e,a.bc);DV(e,a.bc,c);f=a.dd.c(c,d,e);if(f>=0)break;DV(e,a.bc,g);c=c+(-1)|0;}}return c;}
function AL3(a){return null;}
var QF=G(Bt);
var UN=G(Bt);
function Tr(){F8.call(this);this.CW=0;}
function Qz(){F8.call(this);this.Ep=0;}
function UL(){B.call(this);this.qu=null;}
function AV4(a,b){a.qu.j(HX(b));}
function UM(){var a=this;B.call(a);a.rj=null;a.rk=null;}
function AUr(a,b){var c,d;c=a.rj;d=a.rk;b.text().then(Bu(c,"f"),Bu(d,"f"));}
function ABi(){var a=this;B.call(a);a.sF=null;a.zQ=null;a.u$=0;a.mj=0;}
function Nd(a,b){return Cg(a.sF)<b?0:1;}
var AD1=G(0);
var ADK=G();
function AD7(b){var c,d,e,f,g,h,i,j;c=AUD();d=CI(b);Bq(c,d);e=0;f=0;while(f<d){g=Cc(b,f);h=Jh(g);Bq(c,h);i=0;while(i<h){j=JK(g,i);GU(c,e,LV(j));e=e+LV(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return Qv(c);}
function ADQ(b){var c,d,e,f,g,h,i,j,k;c=Ba(b);d=Q(Gi,c);e=d.data;f=0;while(f<c){a:{g=Ba(b);if(g!=(-1)){h=Ba(b);i=Ba(b);if(i==(-1)){j=new Gi;j.gT=h;e[g]=j;}else{j=new Gi;j.gT=h;j.m9=BN(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].m9.data[k]=Ba(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function XH(){B.call(this);this.wz=null;}
function AWY(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.wz;d=CN(c[0]);c=LU(d);e=new Ts;d=ADQ(c);f=ADQ(c);g=Ba(c);h=Q(LS,g);i=h.data;j=0;while(j<g){i[j]=M4(Ba(c),Ba(c),Ba(c),Ba(c),Ba(c));j=j+1|0;}AFe(e,d,f,h);b.kK=e;MO(b.E,e.Ag);MO(b.G,b.kK.Ah);c=b.l4;e=b.kK;c.h2=e;b.ft.eQ=e;}
function ABC(){B.call(this);this.wr=null;}
function AQI(a,b){var c,d,e,f;c=a.wr;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.sj;c=Bx();b=Cv(b);e=new K;M(e);H(H(e,C(689)),b);Bl(c,L(e));b=Bx();f=d.length;c=new K;M(c);U(H(c,C(690)),f);Bl(b,L(c));}
function ABE(){var a=this;B.call(a);a.zI=null;a.zJ=null;}
function APU(a,b){var c,d;c=a.zI;d=a.zJ;b.arrayBuffer().then(Bu(c,"f"),Bu(d,"f"));}
function ABF(){var a=this;B.call(a);a.xs=null;a.kH=null;a.j8=null;}
function AAp(a){var b,c;b=a.xs.next();c=a.j8.o_;b.then(Bu(a,"f"),Bu(c,"f"));}
function AQO(a,b){var c,d;if(b.done?1:0)a.kH.vp();else{AAp(a);c=b.value;if(!(c.kind==='file'?1:0)){b=new ABw;d=a.j8;ADz(b,c,d.o_,X7(d));a.kH.s_(b);}else{b=A1S(c,null,X7(a.j8));a.kH.wn(b);}}}
function WQ(){var a=this;B.call(a);a.xC=null;a.xD=null;}
function Z0(){var a=this;B.call(a);a.lq=null;a.lQ=null;a.fi=null;}
function A0c(a,b){var c,d;c=new ADj;d=a.fi;S0(c,b,d.jx+1|0,d.hv);BC(a.lq,c);}
function AR_(a,b){var c,d;c=EM(b);d=ABb(c,a.fi.jx+1|0);a.fi.hv.q9(d,c);d.n3=AIs(a.fi.hv,b,d);BC(a.lQ,d);}
function A0w(a){var b,c,d;if(!(Ex(a.lq)&&Ex(a.lQ))){b=Gf(a.lq,A7u);c=Gf(a.lQ,A7u);KP(b,A7w);KP(c,A7w);a.fi.eY=I2(b,c);}NB(a.fi);d=a.fi;d.hv.wv(d);}
function ABl(){var a=this;B.call(a);a.d4=null;a.kA=null;a.oV=null;a.mZ=null;a.q$=0;a.ka=0;a.c8=0;a.y=0;a.eE=0;a.kd=0;a.gi=0;a.dF=0;a.D_=0;a.iH=0;a.lG=0;}
function BX(a,b,c){a.kA.data[b]=c;}
function DB(a,b){return a.kA.data[b];}
function Mn(a){return RB(a,0);}
function RB(a,b){Y8(a,b);return a.d4.data[(b*2|0)+1|0];}
function DV(a,b,c){a.d4.data[b*2|0]=c;}
function MK(a,b,c){a.d4.data[(b*2|0)+1|0]=c;}
function Go(a,b){return a.d4.data[b*2|0];}
function IZ(a,b){return a.d4.data[(b*2|0)+1|0];}
function AFL(a){return P0(a,0);}
function P0(a,b){Y8(a,b);return a.d4.data[b*2|0];}
function VO(a,b){return a.oV.data[b];}
function EO(a,b,c){a.oV.data[b]=c;}
function Y8(a,b){var c;if(!a.ka){c=new C4;X(c);N(c);}if(b>=0&&b<a.q$)return;c=new BF;Bm(c,Dh(b));N(c);}
function AC5(a,b,c,d){a.ka=0;a.lG=2;Jn(a.d4,(-1));Jn(a.kA,(-1));if(b!==null)a.mZ=b;if(c>=0){a.c8=c;a.y=d;}a.eE=a.c8;}
function AEG(a){return a.lG;}
function SW(){B.call(this);this.xi=null;}
function AXc(a,b){a.xi.j($rt_str(b.message));}
function ABx(){B.call(this);this.wl=null;}
function AYu(a){Ei(a.wl);}
function Z2(){Y.call(this);this.DP=null;}
function ASh(a,b){return CC(b)!=2?0:1;}
function VJ(){Y.call(this);this.DT=null;}
function AUg(a,b){return CC(b)!=1?0:1;}
function RA(){Y.call(this);this.DE=null;}
function AK8(a,b){return Q9(b);}
function Rz(){Y.call(this);this.BC=null;}
function AVQ(a,b){return 0;}
function Uy(){Y.call(this);this.CF=null;}
function AOa(a,b){return !CC(b)?0:1;}
function Xq(){Y.call(this);this.D4=null;}
function A0v(a,b){return CC(b)!=9?0:1;}
function Ps(){Y.call(this);this.C1=null;}
function AQf(a,b){return HG(b);}
function YC(){Y.call(this);this.B2=null;}
function ARa(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function VF(){Y.call(this);this.Ba=null;}
function A1m(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HG(b);}return b;}
function VH(){Y.call(this);this.Cg=null;}
function AMo(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HG(b);}return b;}
function O$(){Y.call(this);this.CC=null;}
function ASp(a,b){a:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function XG(){Y.call(this);this.Em=null;}
function AXr(a,b){return Kw(b);}
function XN(){Y.call(this);this.BJ=null;}
function AYK(a,b){return XO(b);}
function AAl(){Y.call(this);this.D6=null;}
function A0j(a,b){return CC(b)!=3?0:1;}
function ZA(){Y.call(this);this.Bc=null;}
function ASJ(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HG(b);}return b;}
function OG(){Y.call(this);this.Ey=null;}
function AMi(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HG(b);}return b;}
function L8(){Y.call(this);this.nc=0;}
function A2O(a){var b=new L8();AFu(b,a);return b;}
function AFu(a,b){Bz(a);a.nc=b;}
function AQg(a,b){return a.bh^(a.nc!=CC(b&65535)?0:1);}
var Y$=G(L8);
function AZK(a,b){return a.bh^(!(a.nc>>CC(b&65535)&1)?0:1);}
var ACP=G(0);
function X$(){B.call(this);this.vx=null;}
function AOW(a){var b,c;b=a.vx;c=b.xC;b=b.xD;c.ER(b.lC,b.o2,null);}
var AFj=G(0);
function Q_(){var a=this;B.call(a);a.ts=null;a.tt=null;a.tu=null;}
function A0R(a){a.ts.to(a.tt,a.tu);}
var AHy=G();
function YP(){B.call(this);this.vT=null;}
function ANm(a){var b;b=a.vT;Ix(b);b.hv.tY(b);}
function ABH(){var a=this;B.call(a);a.w4=null;a.w0=null;}
function AX1(a,b){var c,d,e,f;c=a.w4;d=a.w0;e=Lj(c.ja,d);b=AHB(b);f=AMX(b.jW,ABa(e));Ek(c.mg,d,f);if(BS(c.oZ,d))ACS(c,f);}
function ABI(){var a=this;B.call(a);a.Aw=null;a.Ax=null;}
function AWE(a,b){var c,d,e;c=a.Aw;d=a.Ax;c=Lj(c.ja,d);d=EG();e=new K;M(e);H(H(H(H(e,C(691)),c),C(29)),b);Bl(d,L(e));}
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"ui",4,"js",4,"diff"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bH",A4o(APh),"cK",A4n(ALL)],Rp,0,B,[],0,3,0,0,0,VZ,0,B,[],3,3,0,0,0,VC,0,B,[],3,3,0,0,0,AB4,0,B,[VZ,VC],0,3,0,0,0,AHO,0,B,[],4,0,0,0,0,AHD,0,B,[],4,3,0,0,0,GO,0,B,[],0,3,0,0,0,Eq,0,GO,[],0,3,0,0,0,Bt,0,Eq,[],0,3,0,0,0,AIA,0,Bt,[],0,3,0,0,0,C2,0,B,[],3,3,0,0,0,CJ,0,B,[],3,3,0,0,0,J8,0,B,[],3,3,0,0,0,BL,"String",1,B,[C2,CJ,J8],0,3,0,E8,["cK",A4n(ALJ),"bH",A4o(Bi),"go",A4n(NC),"lY",A4o(ANe)],Fs,0,GO,[],0,3,0,0,0,If,0,Fs,[],0,3,0,0,0,AIg,0,If,[],0,3,0,0,0,En,0,B,[C2],1,3,0,0,0,Hy,
0,En,[CJ],0,3,0,0,["go",A4n(ATu),"bH",A4o(A08),"lY",A4o(AW2)],GI,0,B,[C2,J8],0,0,0,0,["jI",A4o(MJ),"cK",A4n(L)],Jz,0,B,[],3,3,0,0,0,K,0,GI,[Jz],0,3,0,0,["ph",A4r(AWX),"oG",A4q(AMv),"cK",A4n(D$),"jI",A4o(AOC),"py",A4p(AXi)],EZ,0,If,[],0,3,0,0,0,AJc,0,EZ,[],0,3,0,0,0,AIa,0,EZ,[],0,3,0,0,0,AAj,0,B,[],3,3,0,0,0,C5,0,B,[],3,3,0,0,0,Xp,0,B,[],3,0,0,0,0,J0,0,B,[AAj,C5,Xp],1,3,0,0,["cC",A4n(Eu)],Y3,0,J0,[],0,3,0,0,0,AHl,0,B,[],0,3,0,0,0,AJL,0,B,[],4,3,0,0,0,BQ,0,B,[],3,3,0,0,0,Cd,0,B,[BQ],3,3,0,0,0,AAs,0,B,[Cd],0,3,
0,0,["bg",A4o(A1j)],AFw,0,B,[],0,3,0,0,0,AIM,0,B,[BQ],1,3,0,0,0,ADH,0,B,[],3,3,0,0,0,AJz,0,B,[],3,3,0,0,0,AF3,0,B,[],3,3,0,0,0,LO,0,B,[],0,3,0,0,0,AEa,0,B,[BQ],1,3,0,0,0,AAt,0,B,[Cd],0,3,0,0,["bg",A4o(AKm)],AAr,0,B,[Cd],0,3,0,0,["bg",A4o(A0k)],Lu,0,B,[],4,3,0,0,0,AF1,0,B,[],4,3,0,0,0,AH6,0,B,[],0,3,0,0,0,AKj,0,B,[],4,3,0,0,0,V0,0,B,[Cd],0,3,0,0,["bg",A4o(AX$)]]);
$rt_metadata([AGc,0,B,[BQ],1,3,0,0,0,AHt,0,B,[],0,3,0,0,0,ABG,0,B,[BQ],3,3,0,0,0,AIC,0,B,[ABG],1,3,0,0,["Kh",A4o(AWc),"Qv",A4n(APe)],AEY,0,B,[BQ],1,3,0,0,0,F$,0,B,[],3,3,0,0,0,R_,0,B,[F$],0,3,0,0,0,BF,0,Bt,[],0,3,0,0,0,AI0,0,B,[],4,3,0,0,0,GW,0,Bt,[],0,3,0,0,0,I6,0,Bt,[],0,3,0,0,0,Di,0,B,[CJ],0,3,0,0,0,Vy,0,B,[BQ],3,3,0,0,0,ZB,0,B,[Vy],3,3,0,0,0,ES,0,B,[BQ],3,3,0,0,0,AHn,0,B,[BQ,ZB,ES],1,3,0,0,["I5",A4n(AXQ),"JC",A4o(AZO),"Rj",A4o(AZD),"MS",A4o(AU9),"PR",A4o(AKC),"Lu",A4n(AMp),"Qt",A4p(AZL),"JS",A4q(AOp),"Ko",
A4n(AUf),"KG",A4n(AYv),"O6",A4o(A0g),"Nv",A4n(APw),"RC",A4o(AN4),"HN",A4n(APP),"N9",A4n(ATb),"Rw",A4n(AOQ),"Fd",A4o(ALc),"JW",A4n(A0$),"Pm",A4p(AWz),"Ni",A4p(APo),"Ql",A4p(ASv),"P5",A4n(ATB),"QM",A4n(ANO),"Ks",A4o(AMy),"OQ",A4o(ANq),"ML",A4p(AWJ),"Hr",A4n(AOZ),"Kg",A4o(AUh),"LH",A4n(ANp),"KN",A4n(AQQ),"Mz",A4o(AKs),"HM",A4o(AR0),"Rr",A4o(AUA),"G2",A4n(AZ9),"M9",A4p(AUH),"Qh",A4o(AYD),"Hi",A4n(ARe),"L1",A4p(AQd),"FF",A4p(APY),"NU",A4n(ARV),"Kt",A4o(ASS),"GI",A4q(AX0),"F6",A4n(AMt),"GM",A4p(AUU),"No",A4n(ATX),
"Jl",A4n(A05),"O3",A4n(AQa),"EB",A4n(ATV),"IX",A4p(AQe),"LI",A4o(AVg),"OO",A4o(ANv),"FY",A4n(AZd)],O_,0,B,[Cd],0,3,0,0,["bg",A4o(AQL)],AIo,0,B,[],4,3,0,0,0,XF,0,B,[ES],3,3,0,0,0,Rf,0,B,[ES],3,3,0,0,0,YS,0,B,[ES],3,3,0,0,0,Ss,0,B,[ES],3,3,0,0,0,ACM,0,B,[ES],3,3,0,0,0,AA5,0,B,[ES,XF,Rf,YS,Ss,ACM],3,3,0,0,0,AHM,0,B,[BQ,AA5],1,3,0,0,["Pz",A4p(AYf),"QT",A4p(AW0),"F9",A4q(ANQ),"Nd",A4o(ALn),"Iy",A4q(AVw)],BR,0,Bt,[],0,3,0,0,0,ADm,0,Bt,[],0,3,0,0,0,Ib,0,BF,[],0,3,0,0,0,AH0,0,B,[],0,3,0,0,0,Yv,0,B,[],3,3,0,0,0,Xe,0,
B,[Yv],3,3,0,0,0,ZH,0,B,[Xe],0,3,0,0,0,BE,0,B,[],3,3,0,0,0,AIJ,0,B,[BE],0,3,0,0,0,Z,0,B,[],3,3,0,0,0,AIK,0,B,[Z],0,3,0,0,0,YW,0,B,[BQ],3,3,0,0,0,TH,0,B,[YW],0,3,0,0,["HO",A4o(AWy)],TF,0,B,[Z],0,3,0,0,0,Yo,0,B,[BQ],3,3,0,0,0,TG,0,B,[Yo],0,3,0,0,["AK",A4p(AMI)],AGm,0,B,[BQ],1,3,0,0,0,Cy,0,B,[BQ],3,3,0,0,0,TE,0,B,[Cy],0,3,0,0,["cq",A4o(AQP)],Zs,0,B,[],0,3,0,0,0,Ua,0,B,[],3,3,0,0,["e9",A4o(ATj)],Hq,0,B,[Ua],3,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],Fv,0,B,[Hq],1,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN),"et",A4n(Ex),"qo",
A4o(AZr)],Nl,0,B,[Hq],3,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],Mr,0,B,[Nl],3,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN)]]);
$rt_metadata([Fi,0,Fv,[Mr],1,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN),"yL",A4o(AQ3),"b5",A4n(B6),"ty",A4p(AQr),"nW",A4p(AZ4),"bH",A4o(API)],L3,0,Fi,[],1,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],Os,0,B,[Hq],3,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],AC6,0,B,[Os,Nl],3,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],SZ,0,L3,[AC6],0,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],Li,0,B,[],3,3,0,0,0,D_,0,B,[Li],1,3,0,0,0,Er,0,B,[],3,3,0,0,0,US,0,B,[Li],3,3,0,0,0,ON,0,B,[US],3,3,0,0,0,Xv,0,D_,[Er,C2,ON],0,3,0,0,0,Zw,0,B,[BE],0,3,0,0,0,Zx,0,B,[Cd],0,3,
0,0,["bg",A4o(ATA)],AEh,0,B,[],0,3,0,0,0,Nz,0,B,[],1,3,0,0,0,Tx,0,Nz,[],0,3,0,0,0,Ct,0,B,[C5],1,3,0,0,["cg",A4o(A06)],X3,0,B,[],0,3,0,0,0,AB9,0,B,[Cy],0,3,0,0,["cq",A4o(AYo)],AB$,0,B,[Cy],0,3,0,0,["cq",A4o(AYz)],AB_,0,B,[Cy],0,3,0,0,["cq",A4o(APt)],ACa,0,B,[Cy],0,3,0,0,["cq",A4o(AXg)],ACb,0,B,[Cy],0,3,0,0,["cq",A4o(AXs)],ACc,0,B,[Cy],0,3,0,0,["cq",A4o(AQU)],ACd,0,B,[Cy],0,3,0,0,["cq",A4o(ANP)],ACe,0,B,[Cy],0,3,0,0,["cq",A4o(A1s)],ACf,0,B,[Cy],0,3,0,0,["cq",A4o(ANn)],ACg,0,B,[Cy],0,3,0,0,["cq",A4o(ARz)],Vc,0,
B,[Cy],0,3,0,0,["cq",A4o(A07)],Vd,0,B,[Cy],0,3,0,0,["cq",A4o(APc)],Ve,0,B,[Cy],0,3,0,0,["cq",A4o(APy)],Vf,0,B,[Cy],0,3,0,0,["cq",A4o(AYF)],AAN,0,B,[],3,3,0,0,0,AAY,0,B,[AAN],0,3,0,0,0,AAX,0,B,[Cy],0,3,0,0,["cq",A4o(AOu)],Op,0,B,[],0,3,0,0,0,Kj,0,B,[F$],0,3,0,0,["pE",A4p(MF)],AGx,0,B,[],0,3,0,0,0,Et,0,B,[],3,3,0,0,0,Cp,0,B,[Et],3,3,0,0,0,CB,0,B,[],3,3,0,0,["bQ",A4o(AWT),"cu",A4p(ASe),"du",A4p(AKX),"ct",A4q(AYS)],EC,0,B,[],3,3,0,0,0,C6,0,B,[Et],3,3,0,0,0,Ft,0,B,[],3,3,0,0,0,DL,0,B,[],3,3,0,0,0,FN,0,B,[DL],3,3,
0,0,0,QK,0,B,[C5],0,3,0,0,0,Bg,0,B,[],0,3,0,0,["cK",A4n(AG4),"bH",A4o(AOl)],ACj,0,B,[],0,3,0,0,0,AF5,0,B,[],0,3,0,0,0]);
$rt_metadata([AHA,0,B,[],3,3,0,0,0,Ym,0,B,[],0,3,0,0,0,NQ,0,B,[],0,3,0,0,0,Dc,0,NQ,[],0,3,0,0,0,AJJ,0,Dc,[],0,3,0,0,0,Fj,0,Dc,[],0,3,0,0,0,YG,0,Dc,[],0,3,0,0,0,AE1,0,Fj,[],0,3,0,0,0,Hl,0,Fj,[],0,3,0,0,0,Pi,0,Hl,[],0,3,0,0,0,AGM,0,Hl,[],0,3,0,0,0,AHN,0,Fj,[],0,3,0,0,0,AJe,0,Dc,[],0,3,0,0,0,ADX,0,Dc,[],0,3,0,0,0,Zc,0,B,[BQ],3,3,0,0,0,AKh,0,B,[Zc],3,3,0,0,0,Yl,0,B,[C5],0,3,0,0,0,QE,0,B,[],0,3,0,0,0,CG,0,B,[CJ,C2],1,3,0,0,0,G1,0,CG,[],12,3,0,Jo,0,Mb,0,B,[],3,3,0,0,0,Sm,0,B,[Mb],3,3,0,0,0,AA2,0,B,[],3,3,0,0,0,GK,
0,B,[Sm,AA2],1,3,0,0,0,MC,0,GK,[],0,3,0,0,0,AEI,0,MC,[],0,3,0,0,0,Hw,0,GK,[],1,3,0,0,0,Ls,0,Hw,[],0,3,0,0,["mp",A4q(AOn)],Ed,0,CG,[],12,3,0,A0x,0,Mu,0,B,[CJ],1,3,0,0,0,Me,0,Mu,[],0,3,0,AED,0,Xz,0,B,[],0,3,0,0,0,HY,0,CG,[],12,0,0,APp,0,Nn,0,Hw,[],0,3,0,0,["mp",A4q(AM1)],AF0,0,BR,[],0,3,0,0,0,TI,0,Eq,[],0,3,0,0,0,Md,0,B,[BQ],3,3,0,0,0,AC1,0,B,[Md],0,3,0,0,["bg",A4o(ARi)],AC2,0,B,[Md],0,3,0,0,["bg",A4o(ALE)],H7,0,B,[],1,3,0,0,0,Zp,0,B,[],3,3,0,0,0,Ln,0,H7,[CJ,Jz,J8,Zp],1,3,0,0,0,MQ,0,H7,[CJ],1,3,0,0,0,Iz,0,B,[],
0,3,0,He,0,OR,0,Ct,[],0,3,0,0,["bP",A4n(AO9),"ca",A4p(AN3)],HF,0,Ct,[],1,3,0,0,["ca",A4p(AE_)],CM,0,HF,[],1,3,0,0,["bP",A4n(AMV),"ca",A4p(Iu),"cg",A4o(ALw)],GH,0,B,[],3,3,0,0,0,MY,0,B,[],3,3,0,0,0,F4,0,B,[],3,3,0,0,0]);
$rt_metadata([KG,0,CM,[CB,GH,MY,F4,EC,Ft,FN],0,3,0,0,["hU",A4p(A0L),"cg",A4o(AQ7),"bP",A4n(AXp),"gV",A4n(AWu),"AC",A4n(ARq),"vl",A4n(AXl),"tO",A4o(ARZ),"m8",A4o(AYb),"h_",A4o(AMh),"ca",A4p(AOE),"hx",A4o(AK2),"bQ",A4o(AYs),"ct",A4q(AWv),"cu",A4p(APs),"du",A4p(AYU),"ds",A4q(AQH),"cW",A4n(AWW)],AF$,0,KG,[],0,3,0,0,["gV",A4n(APD)],AGv,0,B,[],0,3,0,0,0,AIE,0,B,[BQ],1,3,0,0,0,KN,0,Ln,[],1,0,0,0,0,AEW,0,KN,[],0,0,0,0,0,Lf,0,B,[],1,3,0,0,0,NU,0,B,[],0,3,0,0,0,ADN,0,B,[],0,3,0,0,0,IW,0,B,[BQ],3,3,0,0,0,V8,0,B,[IW],0,
3,0,0,["bg",A4o(AM8)],V7,0,B,[IW],0,3,0,0,["bg",A4o(AP9)],V5,0,B,[Cd],0,3,0,0,["bg",A4o(AQx)],V4,0,B,[Cd],0,3,0,0,["bg",A4o(AUV)],W,0,B,[],3,3,0,0,0,SG,0,B,[W],0,3,0,0,["j",A4o(A0_)],SH,0,B,[W],0,3,0,0,["j",A4o(AW1)],TV,0,B,[BE],0,3,0,0,["ba",A4o(ASc)],TU,0,B,[BE],0,3,0,0,["ba",A4o(AKK)],TR,0,B,[BE],0,3,0,0,["ba",A4o(AVz)],TQ,0,B,[BE],0,3,0,0,["ba",A4o(AX_)],TT,0,B,[BE],0,3,0,0,["ba",A4o(AMP)],TS,0,B,[BE],0,3,0,0,["ba",A4o(ATg)],TY,0,B,[BE],0,3,0,0,["ba",A4o(AMu)],TX,0,B,[BE],0,3,0,0,["ba",A4o(AO1)],T0,0,B,
[BE],0,3,0,0,["ba",A4o(AZt)],TZ,0,B,[BE],0,3,0,0,["ba",A4o(AKv)],Z5,0,B,[BE],0,3,0,0,["ba",A4o(AKF)],Z4,0,B,[BE],0,3,0,0,["ba",A4o(AW6)],Z3,0,B,[BE],0,3,0,0,["ba",A4o(APR)],ZT,0,B,[BE],0,3,0,0,["ba",A4o(ANa)],ZS,0,B,[BE],0,3,0,0,["ba",A4o(ATt)],ZQ,0,B,[BE],0,3,0,0,["ba",A4o(A0s)],ZP,0,B,[BE],0,3,0,0,["ba",A4o(AO$)],ZO,0,B,[BE],0,3,0,0,["ba",A4o(AZw)],ZN,0,B,[BE],0,3,0,0,["ba",A4o(AKo)],ZM,0,B,[BE],0,3,0,0,["ba",A4o(AZi)],ZX,0,B,[BE],0,3,0,0,["ba",A4o(AYA)],ZW,0,B,[BE],0,3,0,0,["ba",A4o(AL7)],ZV,0,B,[BE],0,3,
0,0,["ba",A4o(AWh)],ZU,0,B,[BE],0,3,0,0,["ba",A4o(ANY)],ZZ,0,B,[BE],0,3,0,0,["ba",A4o(ANZ)],ZY,0,B,[BE],0,3,0,0,["ba",A4o(AT$)],ACo,0,B,[],0,0,0,0,0,H_,0,B,[],0,3,0,0,0,PY,0,H_,[],0,3,0,0,0,AF_,0,B,[],0,3,0,0,0,On,0,H_,[],0,3,0,0,0,SN,0,B,[BQ],3,3,0,0,0,O7,0,B,[SN],0,3,0,0,["Kz",A4o(AW7)]]);
$rt_metadata([AA_,0,B,[W],0,3,0,0,["j",A4o(AB2)],ACv,0,MQ,[],0,0,0,0,0,CD,0,B,[C5],0,3,0,0,["cC",A4n(AQ8),"hF",A4n(AX3),"eW",A4q(HI),"dr",A4o(AJZ),"cg",A4o(AUO),"ms",A4o(AO4),"oo",A4o(ASC),"lc",A4p(AY7),"qN",A4n(ASK),"ct",A4q(ANT),"cu",A4p(ALK),"du",A4p(APH),"bQ",A4o(ASr),"ds",A4q(AY0)],AEu,0,CD,[],0,3,0,0,["dr",A4o(AFI)],AEZ,0,B,[],0,0,0,0,0,FO,0,B,[],3,3,0,0,["vq",A4n(AX4),"tE",A4n(ANg)],Qy,0,B,[],3,0,0,0,0,Ma,0,B,[FO],3,3,0,0,["vq",A4n(AX4),"tE",A4n(ANg)],AEA,0,CD,[FO,CB,MY,Qy,Ma],0,3,0,0,["eW",A4q(Mc),"lc",
A4p(AQi),"oQ",A4p(A1a),"tE",A4n(AVP),"vq",A4n(AT0),"AC",A4n(Ws),"vl",A4n(ADb),"tO",A4o(Px),"m8",A4o(AQX),"qN",A4n(LH),"cC",A4n(AUl),"cg",A4o(IR),"pF",A4o(AIj),"hF",A4n(AGh),"oY",A4n(ARK),"dr",A4o(AXv),"kV",A4n(S7),"j7",A4n(S6),"hp",A4o(AQE),"uc",A4n(AQu),"o5",A4n(ATa),"ds",A4q(LB),"du",A4p(Sl),"cu",A4p(VI),"ct",A4q(OH),"bQ",A4o(WK),"ig",A4o(A0S)],AHd,0,B,[],0,3,0,0,0,Td,0,B,[W],0,3,0,0,["j",A4o(AK_)],Te,0,B,[W],0,3,0,0,["j",A4o(AZX)],Tf,0,B,[Cp],0,3,0,0,["L",A4o(AOK)],HL,0,B,[Cp],0,3,0,0,["L",A4o(ANj)],Tb,0,
B,[W],0,3,0,0,["j",A4o(APu)],Tc,0,B,[C6],0,3,0,0,["L",A4o(A0t)],CZ,0,B,[],3,3,0,0,0,ACI,0,B,[CB,CZ],0,3,0,0,["bQ",A4o(ATF),"ct",A4q(ALT),"cu",A4p(ANV),"du",A4p(A0N),"gx",A4p(AWQ)],ST,0,B,[],0,3,0,0,0,Vz,0,B,[EC],0,3,0,0,["ds",A4q(A0I)],AEm,0,B,[],0,3,0,0,0,ACZ,0,B,[],0,3,0,0,0,ACO,0,B,[],0,3,0,0,0,Fk,0,B,[C5],0,3,0,0,0,AGI,0,B,[],0,3,0,0,0,AEl,0,B,[C5],0,3,0,0,0,WF,0,B,[W],0,3,0,0,0,WE,0,B,[W],0,3,0,0,["j",A4o(ALj)],WD,0,B,[W],0,3,0,0,["j",A4o(AKH)],AJa,0,B,[],0,3,0,0,0,WC,0,B,[Z],0,3,0,0,["g",A4n(ATH)],WJ,
0,B,[Z],0,3,0,0,["g",A4n(AVU)],WI,0,B,[Z],0,3,0,0,["g",A4n(A1G)],WH,0,B,[Z],0,3,0,0,["g",A4n(AOV)],WG,0,B,[Z],0,3,0,0,["g",A4n(AQy)],WB,0,B,[Z],0,3,0,0,["g",A4n(A1b)],T5,0,B,[Z],0,3,0,0,["g",A4n(AOY)],T6,0,B,[Z],0,3,0,0,["g",A4n(AYw)],AFr,0,B,[BQ],1,3,0,0,0,Nb,0,B,[],4,3,0,AWI,0,ADV,0,B,[],3,3,0,0,0,Ze,0,B,[Cp],0,3,0,0,["L",A4o(ANE)],Zd,0,B,[Cp],0,3,0,0,["L",A4o(AUT)],Lt,0,B,[],3,3,0,0,0,AHu,0,Fi,[Er,C2,Lt],0,3,0,0,["o9",A4o(AWN),"nd",A4o(Bw),"cZ",A4n(AYi),"yL",A4o(BC),"nW",A4p(Y4),"pD",A4o(EF),"qo",A4o(T2),
"i0",A4n(Ip),"ty",A4p(AHG),"e9",A4o(Fm)],J9,0,B,[],0,3,0,0,0,Ff,0,B,[],0,3,0,0,0,M_,0,Ff,[],0,3,0,0,0,Z1,0,Ff,[],0,3,0,0,0,X_,0,Ff,[],0,3,0,0,0]);
$rt_metadata([G$,0,B,[],3,3,0,0,0,RY,0,B,[],3,3,0,0,0,B0,0,B,[],0,3,0,0,["bH",A4o(AS3)],Lm,0,B,[],0,3,0,0,0,In,0,B,[C5],0,3,0,0,["cC",A4n(AFy)],X1,0,B,[],3,0,0,0,0,Ok,0,B,[],3,3,0,0,0,Yh,0,B,[Z],0,3,0,0,["g",A4n(AWm)],Yg,0,B,[Z],0,3,0,0,["g",A4n(ATs)],AJQ,0,B,[],0,3,0,0,0,SR,0,B,[],0,3,0,0,0,GR,0,B,[],1,3,0,0,0,Y1,0,GR,[],0,3,0,0,["th",A4o(Cc)],LW,0,B,[],3,3,0,0,0,SV,0,B,[LW],3,3,0,0,0,Sb,"JsFileHandle",7,B,[SV],0,3,0,0,["oC",A4n(EM),"sy",A4n(AK3),"cK",A4n(AWP),"go",A4n(AKP)],ABX,0,B,[],3,3,0,0,0,AIT,0,B,[ABX],
0,3,0,0,["cK",A4n(AVa)],Y9,0,B,[Ok],0,3,0,0,0,G_,0,B,[CJ],0,3,0,0,0,Nv,0,B,[],0,3,0,0,0,DE,0,B,[],0,3,0,0,0,XK,0,B,[],0,3,0,0,0,K$,0,D_,[Er,C2],0,3,0,0,0,Cu,0,B,[],0,3,0,0,0,Ns,0,K$,[],0,3,0,0,0,Y7,0,B,[],0,3,0,0,0,AJ9,0,B,[CJ],0,3,0,0,["bH",A4o(ARA),"lY",A4o(AUN)],Uf,0,B,[F$],0,3,0,0,["pE",A4p(AO0)],YF,0,B,[],0,3,0,0,["cK",A4n(AKZ),"bH",A4o(ALG)],Jf,0,B,[],3,3,0,0,0,GN,0,B,[Jf,Er],0,0,0,0,["bH",A4o(AVc)],HP,0,GN,[],0,0,0,0,0,Np,0,Lf,[],1,3,0,0,0,Qc,0,Np,[],0,3,0,0,0,IY,0,Eq,[],0,3,0,0,0,Oz,0,B,[IW],0,3,0,0,
["bg",A4o(ASV)],OB,0,B,[Cd],0,3,0,0,["bg",A4o(ASo)],OA,0,B,[Cd],0,3,0,0,["bg",A4o(AUa)],IO,0,B,[],0,3,0,0,0,Kg,0,CM,[GH,F4],0,3,0,0,["h_",A4o(AWs),"cg",A4o(AZU),"bP",A4n(ANG),"gV",A4n(A03),"ca",A4p(AKu),"hx",A4o(AVx)],AHg,0,Ct,[],0,3,0,0,["cg",A4o(AKN),"bP",A4n(AMx),"ca",A4p(AOI)],AAh,0,Ct,[],0,3,0,0,["cg",A4o(AP7),"bP",A4n(AUF),"ca",A4p(AVO)],WM,0,CM,[CB,CZ],0,3,0,0,["cu",A4p(ASe),"du",A4p(AKX),"gx",A4p(AOd),"ca",A4p(AM9),"bP",A4n(AVt),"bQ",A4o(AOL),"ct",A4q(ALk)],ZR,0,CM,[CZ],0,3,0,0,["gx",A4p(AMn),"ca",A4p(ALC)],Wb,
0,HF,[CB],0,3,0,0,["bQ",A4o(AWT),"cu",A4p(ASe),"du",A4p(AKX),"ct",A4q(AYS),"bP",A4n(AZs),"cg",A4o(AKG)],R$,0,Ct,[],0,3,0,0,["bP",A4n(AKt),"ca",A4p(ATo)],Do,0,Ct,[],0,3,0,0,["bP",A4n(Zo),"ca",A4p(R6)],QG,"SelectFileTest",5,Do,[],0,3,0,0,0,Wt,0,CM,[],0,3,0,0,0]);
$rt_metadata([VP,"RenderTexture",5,Do,[],0,3,0,0,["cg",A4o(ANR),"bP",A4n(AVi),"ca",A4p(A01)],R8,"ScissorDemo",5,Do,[],0,3,0,0,["bP",A4n(A1v),"ca",A4p(ANB)],ZG,0,Ct,[],0,3,0,0,["bP",A4n(ASq),"ca",A4p(AVv),"cg",A4o(AY9)],Ka,"ClipboardTest",5,Do,[CB],0,3,0,0,["bQ",A4o(AWT),"cu",A4p(ASe),"du",A4p(AKX),"ct",A4q(AOy)],RV,"CodiconDemo",5,Do,[],0,3,0,0,["bP",A4n(AS2)],GX,0,Ct,[CB],1,3,0,0,["bQ",A4o(AWT),"cu",A4p(ASe),"du",A4p(AKX),"ct",A4q(AYS),"bP",A4n(AEs)],SB,0,GX,[],0,3,0,0,["cu",A4p(ASe),"du",A4p(AKX),"ct",A4q(AYS),
"ca",A4p(AYW),"bQ",A4o(AZR)],SA,0,GX,[],0,3,0,0,["cu",A4p(ASe),"du",A4p(AKX),"ct",A4q(AYS),"bQ",A4o(A1c),"bP",A4n(AMk),"ca",A4p(AK7)],Xd,0,CM,[CZ],0,3,0,0,["gx",A4p(AZW)],Dv,"WindowDemo",6,CM,[CZ],0,3,[0,0,0],0,["ho",A4n(AU3),"oS",A4n(AOS),"kj",A4o(Xm),"gx",A4p(AZC)],P5,"EditorInViewDemo",5,Dv,[CZ,GH,F4],0,3,[0,0,0],0,["cg",A4o(AUZ),"ho",A4n(ALF),"oS",A4n(ATN),"kj",A4o(A1e),"hx",A4o(ARu),"h_",A4o(AQT)],Wf,0,B,[CB],0,0,0,0,["cu",A4p(ASe),"du",A4p(AKX),"ct",A4q(AYS),"bQ",A4o(AZp)],Ph,"DiffMiddleDemo",8,Dv,[CZ],
0,3,[0,0,0],0,["ho",A4n(AVK)],X9,"FileViewDemo",6,Dv,[CZ],0,3,[0,0,0],0,["ho",A4n(AXS),"kj",A4o(AY4)],KM,0,B,[],3,3,0,0,["q9",A4p(ALp)],Rd,"ProjectViewDemo",5,Dv,[GH,KM],0,3,[0,0,0],0,["ho",A4n(APS),"kj",A4o(APL),"hx",A4o(AXD),"to",A4p(AYZ),"wv",A4o(AKM),"tY",A4o(ANh),"q9",A4p(AQ5)],ABJ,0,Ct,[CB],0,3,0,0,["bQ",A4o(AWT),"cu",A4p(ASe),"du",A4p(AKX),"ct",A4q(AYS),"ca",A4p(A09),"bP",A4n(AWl),"cg",A4o(ARg)],Ou,0,Kg,[],0,3,0,0,["gV",A4n(AUI)],S9,"FolderDiff",8,Dv,[CZ],0,3,[0,0,0],0,["ho",A4n(A0a)],JZ,0,B,[],0,3,0,
0,0,AEU,0,B,[],0,3,0,0,0,ADU,0,B,[],3,3,0,0,0,AHa,0,B,[],0,3,0,0,0,AFg,0,B,[],3,3,0,0,0,AGS,0,B,[],0,3,0,0,0,Mk,0,B,[Jf,C2],0,3,0,0,0,Kr,0,Mk,[],0,0,0,0,0,AJ0,0,B,[],0,3,0,0,0,XR,0,B,[Cp],0,3,0,0,["L",A4o(AUt)],XP,0,B,[W],0,3,0,0,["j",A4o(AVX)],XQ,0,B,[C6],0,3,0,0,["L",A4o(ARO)],AGO,0,J9,[],0,3,0,0,0,S$,0,B,[CB],0,0,0,0,["bQ",A4o(AUG),"ct",A4q(AKB),"cu",A4p(AUz),"du",A4p(AT5)],Yf,0,B,[Cp],0,3,0,0,["L",A4o(AZ_)],Ye,0,B,[Cp],0,3,0,0,["L",A4o(AYB)],Yd,0,B,[Ft],0,3,0,0,["hU",A4p(AWZ)],Yc,0,B,[Z],0,3,0,0,["g",A4n(ATD)],Yb,
0,B,[C6],0,3,0,0,["L",A4o(AQc)],Ya,0,B,[EC],0,3,0,0,["ds",A4q(A0h)],Hf,0,B0,[],0,3,0,0,0,AFR,0,B,[],3,3,0,0,0,VN,0,B,[CB],0,0,0,0,["bQ",A4o(AWT),"cu",A4p(ASe),"du",A4p(AKX),"ct",A4q(AMT)],VK,0,B,[],0,3,0,0,0,AFh,0,B,[],0,3,0,0,0,AHZ,0,B,[],0,3,0,0,["bH",A4o(AZy)],AAI,0,B,[Cp],0,3,0,0,["L",A4o(APQ)],AAE,0,B,[C6],0,3,0,0,["L",A4o(ARy)],AAF,0,B,[Z],0,3,0,0,["g",A4n(A1z)],AAG,0,B,[Z],0,3,0,0,["g",A4n(ALf)],B3,0,B,[],0,3,0,0,0]);
$rt_metadata([TL,0,B,[Cp],0,3,0,0,["L",A4o(AWS)],TM,0,B,[C6],0,3,0,0,["L",A4o(AKY)],AGw,0,B,[],0,3,0,0,0,OJ,0,B,[CZ],0,3,0,0,["gx",A4p(APX)],OI,0,B,[Cp],0,3,0,0,["L",A4o(AYd)],YX,0,B,[],3,3,0,0,0,AHh,0,B,[YX],0,3,0,0,0,VY,0,B,[CB],0,0,0,0,["ct",A4q(AYS),"cu",A4p(ATP),"du",A4p(AKT),"bQ",A4o(AVE)],Zf,0,B,[EC],0,3,0,0,["ds",A4q(APV)],Qh,0,B,[Cp],0,3,0,0,["L",A4o(APK)],Q0,0,B,[C6],0,3,0,0,["L",A4o(AS4)],QZ,0,B,[W],0,3,0,0,["j",A4o(AZc)],AAS,0,B,[CB],0,0,0,0,["du",A4p(AKX),"ct",A4q(AYS),"bQ",A4o(AYr),"cu",A4p(ASU)],AFm,
0,B,[],0,3,0,0,0,Dd,0,B,[],3,3,0,FC,0,XS,0,B,[CB],0,0,0,0,["ct",A4q(AYS),"cu",A4p(AN7),"du",A4p(AT1),"bQ",A4o(AMY)],Vh,0,B,[EC],0,3,0,0,["ds",A4q(A0e)],ACs,0,B,[Cp],0,3,0,0,["L",A4o(AMd)],ACr,0,B,[Ft],0,3,0,0,["hU",A4p(AW5)],ACq,0,B,[Ft],0,3,0,0,["hU",A4p(AMj)],ACp,0,B,[FN],0,3,0,0,["cW",A4n(APd)],ACt,0,B,[FN],0,3,0,0,["cW",A4n(AZM)],RF,0,B,[Cp],0,3,0,0,["L",A4o(ASz)],YE,0,B,[Cp],0,3,0,0,["L",A4o(ASd)],YD,0,B,[C6],0,3,0,0,["L",A4o(AOT)],O8,0,B,[W],0,3,0,0,["j",A4o(AYp)],O9,0,B,[C6],0,3,0,0,["L",A4o(AZ5)],TP,
0,B,[C6],0,3,0,0,["L",A4o(AQK)],TO,0,B,[Cp],0,3,0,0,["L",A4o(AQb)],WN,0,B,[C6],0,3,0,0,["L",A4o(AMB)],Qo,0,B,[Cp],0,3,0,0,["L",A4o(AOz)],AGk,0,B,[],3,3,0,0,0,Z6,0,B,[C6],0,3,0,0,["L",A4o(AQJ)],Dl,0,B,[],3,3,0,AM6,0,Cm,0,CG,[],12,3,0,Tj,0,Kc,0,B,[],0,3,0,0,0,IP,0,B,[],0,3,0,0,0,AIP,0,B,[],0,3,0,0,0,DM,0,B,[],3,3,0,ATL,0,Xk,0,B,[BQ],3,3,0,0,0,Xy,0,B,[Xk],0,3,0,0,["AK",A4p(AV1)],Xl,0,B,[BQ],3,3,0,0,0,Xw,0,B,[Xl],0,3,0,0,["AK",A4p(AWD)],AEc,0,B,[],0,3,0,0,0,AHf,0,B,[BQ],3,3,0,0,0,Uq,0,B,[],0,3,0,0,0,DP,0,B,[],3,
3,0,AXA,0,HT,0,B,[],3,3,0,0,0,PJ,0,B,[HT],0,3,0,0,["vN",A4q(AY3)],PK,0,B,[HT],0,3,0,0,0]);
$rt_metadata([Ta,0,B,[W],0,3,0,0,["j",A4o(AX8)],Pq,0,B,[W],0,3,0,0,["j",A4o(AMN)],Pp,0,B,[W],0,3,0,0,["j",A4o(ALs)],Pn,0,B,[W],0,3,0,0,["j",A4o(AKI)],Pl,0,B,[W],0,3,0,0,["j",A4o(A1d)],AGX,0,B,[],0,3,0,0,0,T8,0,B,[W],0,3,0,0,["j",A4o(AWF)],ABj,0,B,[Cp],0,3,0,0,["L",A4o(ANN)],AJA,0,B,[],0,3,0,0,["bH",A4o(AU6)],IX,0,B,[],0,3,0,0,0,J$,0,B,[],4,3,0,0,0,AHC,0,B,[],0,3,0,0,0,Cq,0,CG,[],12,3,0,AEq,0,AJ5,0,B,[],0,3,0,0,0,AEJ,0,B,[BQ],4,3,0,0,0,AKd,0,B,[],0,3,0,0,0,ADu,0,B,[],3,3,0,0,0,CY,0,B,[BQ],1,3,0,0,0,AI5,0,CY,
[],1,3,0,0,0,AJo,0,CY,[],1,3,0,0,0,AHQ,0,CY,[],1,3,0,0,0,AH1,0,CY,[],1,3,0,0,0,AJD,0,CY,[],1,3,0,0,0,UB,0,B,[Z],0,3,0,0,["g",A4n(AOr)],HC,0,CG,[],12,3,0,APv,0,Pb,0,B,[BE],0,3,0,0,["ba",A4o(AT2)],YO,0,B,[],0,3,0,0,0,AHz,0,B,[],0,3,0,0,0,Gi,0,B,[],0,3,0,0,0,AFP,0,B,[],0,3,0,0,0,AEB,0,B,[],4,3,0,0,0,SP,0,B,[],0,0,0,0,0,AHE,0,B,[],3,3,0,0,0,SD,0,B,[EC],0,3,0,0,["ds",A4q(ASl)],SC,0,B,[Ft],0,3,0,0,["hU",A4p(A0H)],SF,0,B,[FN],0,3,0,0,["cW",A4n(ANS)],SE,0,B,[C5],0,3,0,0,0,WU,0,B,[CB],0,0,0,0,["cu",A4p(ASe),"du",A4p(AKX),
"ct",A4q(AYS),"bQ",A4o(A1C)],AEH,0,B,[BQ],1,3,0,0,0,AGe,0,B,[CZ,FO,C5],0,3,0,0,["vq",A4n(AX4),"tE",A4n(ANg),"gx",A4p(A1i),"ig",A4o(AO5),"cC",A4n(AQR)],Vj,0,B,[W],0,3,0,0,["j",A4o(AWt)],Xj,0,B,[W],0,3,0,0,["j",A4o(AS5)],AAQ,0,B,[W],0,3,0,0,["j",A4o(AXI)],ABP,0,B,[DL],0,3,0,0,["cW",A4n(A1l)],AI1,0,B,[],3,3,0,0,0,LG,0,B,[],3,3,0,0,0,QD,0,B,[LG],0,3,0,0,["yk",A4o(AUP)],O5,0,B,[BE],0,3,0,0,["ba",A4o(A0l)],AFE,0,B,[],0,3,0,0,0,Qi,0,B,[C5],0,3,0,0,0]);
$rt_metadata([ADx,0,B,[],0,3,0,0,0,Ts,0,B,[],0,3,0,0,0,LS,0,B,[],0,3,0,0,0,RW,0,B,[],3,3,0,0,0,ABq,0,B,[W],0,3,0,0,["j",A4o(AUQ)],F8,0,IY,[],0,3,0,0,0,ACE,0,Fs,[],0,3,0,0,0,ACH,0,B,[W],0,3,0,0,["j",A4o(ATz)],TC,0,B,[W],0,3,0,0,["j",A4o(A0G)],U4,0,B,[Z],0,3,0,0,["g",A4n(AZj)],ACQ,0,En,[CJ],0,3,0,0,0,Gn,0,B,[],0,0,0,0,0,Ju,0,B,[],4,3,0,0,0,Tw,0,B,[],0,3,0,0,0,N8,0,B,[],1,3,0,0,0,ABV,0,B,[CJ],0,3,0,0,["bH",A4o(AKJ),"go",A4n(AQ6),"lY",A4o(AYH)],AER,0,CY,[],1,3,0,0,0,T3,0,B,[Z],0,3,0,0,["g",A4n(ALA)],ADc,0,B,[],
3,3,0,0,0,HS,0,CD,[],1,3,0,0,["cC",A4n(AXY),"dr",A4o(APE),"cg",A4o(ATZ),"eW",A4q(AMq),"ct",A4q(A0r),"cu",A4p(ARY),"du",A4p(A0z),"bQ",A4o(A0W),"ds",A4q(AM2)],Qs,0,HS,[F4],0,3,0,0,["AQ",A4n(AOm),"hF",A4n(AWj)],Yi,0,B,[W],0,3,0,0,["j",A4o(AUe)],QQ,0,B,[W],0,3,0,0,["j",A4o(AXV)],Fh,0,CD,[],0,3,0,0,0,QM,0,Fh,[FO],0,3,0,0,["vq",A4n(AX4),"tE",A4n(ANg),"cC",A4n(A0E),"lc",A4p(AVs),"dr",A4o(ATO),"oo",A4o(AYG),"ms",A4o(AZN),"bQ",A4o(AOX),"cu",A4p(AM_),"ct",A4q(AQY),"ig",A4o(AZY)],Un,0,B,[Z],0,3,0,0,["g",A4n(ASE)],AEp,
0,CD,[],0,3,0,0,["cC",A4n(ARB),"eW",A4q(QU),"dr",A4o(AZa),"ct",A4q(ARW),"cu",A4p(ARD),"du",A4p(AP0),"bQ",A4o(APM),"ds",A4q(AVM),"hF",A4n(AGR)],PM,0,Fh,[],0,3,0,0,["hF",A4n(ASM),"oo",A4o(AYM),"dr",A4o(AS0),"ms",A4o(AT4)],Rl,0,B,[W],0,3,0,0,0,TJ,0,CD,[],0,3,0,0,0,Zh,0,En,[CJ],0,3,0,0,0,AAB,0,B,[W],0,3,0,0,["j",A4o(AOH)],AC_,0,B,[Z],0,3,0,0,["g",A4n(AW3)],AC4,0,B,[Z],0,3,0,0,["g",A4n(AYI)],Ug,0,B,[Z],0,3,0,0,["g",A4n(AZv)],AJ_,0,HS,[],0,0,0,0,["AQ",A4n(AOU)],AAy,0,B,[],0,3,0,0,0,JS,0,B,[],0,3,0,0,0,Od,0,B,[],3,
3,0,0,0,AAH,0,B,[],0,3,0,0,0,Wv,0,B,[Z],0,3,0,0,["g",A4n(ASQ)],Q6,0,B,[Z],0,3,0,0,["g",A4n(AP2)],Pd,0,B,[Z],0,3,0,0,["g",A4n(AVh)],Pe,0,B,[Z],0,3,0,0,["g",A4n(ATq)],R4,0,B,[Z],0,3,0,0,["g",A4n(AON)],Pz,0,B,[W],0,3,0,0,["j",A4o(AKV)],Py,0,B,[W],0,3,0,0,["j",A4o(ALb)],K0,0,B,[],0,3,0,0,0,C4,0,Bt,[],0,3,0,0,0,AJd,0,Fs,[],0,3,0,0,0]);
$rt_metadata([AJ8,0,B,[],0,3,0,0,0,RC,0,B,[W],0,3,0,0,["j",A4o(AXZ)],AAR,0,B,[W],0,3,0,0,["j",A4o(AWx)],RK,0,B,[W],0,3,0,0,["j",A4o(AVA)],RJ,0,B,[W],0,3,0,0,["j",A4o(A0D)],Fa,0,B,[],3,3,0,0,0,Wq,0,B,[Fa],0,0,0,0,["cy",A4n(B$),"b7",A4n(B_),"oO",A4n(YI)],K6,0,N8,[],1,3,0,0,0,Sq,0,K6,[],0,3,0,0,0,ACl,0,B,[W],0,3,0,0,0,UW,0,B,[W],0,3,0,0,["j",A4o(ASm)],PP,0,B,[DL],0,3,0,0,["cW",A4n(AK1)],PO,0,B,[DL],0,3,0,0,["cW",A4n(AM4)],Rg,0,B,[DL],0,3,0,0,["cW",A4n(AZ8)],WV,0,B,[DL],0,3,0,0,["cW",A4n(ATp)],Zn,0,B,[Cd],0,3,0,
0,["bg",A4o(A0Y)],AEV,0,B,[BQ],1,3,0,0,0,ABM,0,B,[Cd],0,3,0,0,["bg",A4o(ANo)],AIO,0,B,[BE],0,3,0,0,0,AFk,0,B,[BE],0,3,0,0,0,Wn,0,B,[W],0,3,0,0,["j",A4o(AMb)],Wm,0,B,[W],0,3,0,0,["j",A4o(ARt)],AAd,0,B,[Z],0,3,0,0,["g",A4n(AKn)],AEd,0,B,[],0,3,0,0,0,AAe,0,B,[Z],0,3,0,0,["g",A4n(ANK)],Lb,0,Fh,[FO],0,3,0,0,["vq",A4n(AX4),"tE",A4n(ANg),"cC",A4n(AQt),"lc",A4p(ALh),"dr",A4o(AXx),"ct",A4q(A0d),"cu",A4p(AMe)],AIp,0,Lb,[],0,3,0,0,["vq",A4n(AX4),"tE",A4n(ANg)],SI,0,B,[Z],0,3,0,0,["g",A4n(ASg)],Hg,0,B,[],0,3,0,0,0,Em,0,
Hg,[],0,3,0,0,0,Ri,0,B,[Z],0,3,0,0,["g",A4n(AXe)],AA8,0,B,[Z],0,3,0,0,["g",A4n(AZA)],AA7,0,B,[Z],0,3,0,0,["g",A4n(AVn)],AGb,0,B,[],0,3,0,0,0,R7,0,D_,[Er,C2],0,3,0,0,0,T1,0,B,[],0,3,0,0,0,TK,0,B,[],0,3,0,0,0,XJ,0,B,[Et],0,3,0,0,0,Sf,0,B,[W],0,3,0,0,["j",A4o(ARv)],XT,0,En,[CJ],0,3,0,0,0,JV,0,B,[],4,3,0,0,0,Tk,0,B,[Z],0,3,0,0,["g",A4n(AK0)],Tl,0,B,[Z],0,3,0,0,["g",A4n(AM0)],Tm,0,B,[Z],0,3,0,0,["g",A4n(A0F)],Tn,0,B,[Z],0,3,0,0,["g",A4n(AO_)],To,0,B,[Z],0,3,0,0,["g",A4n(ARd)],Oy,0,B,[Cd],0,3,0,0,["bg",A4o(A1F)],UZ,
0,B,[],3,3,0,A2C,0,AFb,0,B,[Ma],0,3,0,0,["vq",A4n(AX4),"tE",A4n(ANg),"kV",A4n(ARM),"j7",A4n(A0o),"hp",A4o(ASB),"uc",A4n(AOJ),"o5",A4n(AT7),"oQ",A4p(APg),"pF",A4o(AXN),"oY",A4n(Mm)],Pc,0,CD,[],0,3,0,0,["dr",A4o(AKQ)]]);
$rt_metadata([AAZ,0,B,[],0,3,0,0,0,QL,0,B,[Z],0,3,0,0,["g",A4n(AXL)],AJ2,0,GR,[],0,0,0,0,["th",A4o(A1r)],S2,0,B,[],3,3,0,AN1,0,ABz,0,B,[F$],0,3,0,0,["pE",A4p(ATi)],VV,0,B,[Z],0,3,0,0,["g",A4n(AXH)],Qu,0,B,[F4],0,3,0,0,["h_",A4o(AY_)],Qt,0,B,[DL],0,3,0,0,["cW",A4n(AVo)],Rt,0,B,[Z],0,3,0,0,["g",A4n(AWq)],Eb,0,Bt,[],0,3,0,0,0,Wu,0,B,[],0,3,0,0,0,AGj,0,B,[],0,3,0,0,0,Sk,0,B,[],0,0,0,0,0,ADY,0,B,[],3,3,0,0,0,AB7,0,B,[Z],0,3,0,0,["g",A4n(ASN)],XL,0,B,[],1,3,0,0,0,Yy,0,B,[Mb],3,3,0,0,0,O3,0,B,[Yy],3,3,0,0,0,H8,0,B,
[O3],1,3,0,0,0,Zq,0,H8,[],0,3,0,0,0,QO,0,B,[],3,3,0,0,0,Ox,0,B,[W],0,3,0,0,0,ACL,0,B,[W],0,3,0,0,["j",A4o(ALi)],AE3,0,B,[],3,3,0,0,0,Js,0,GN,[],0,0,0,0,0,H6,0,Bt,[],0,3,0,0,0,AA0,0,B,[HT],0,3,0,0,["vN",A4q(AOR)],ABm,0,B,[W],0,3,0,0,["j",A4o(ARL)],ACU,0,B,[Cd],0,3,0,0,["bg",A4o(AZq)],ACT,0,B,[Cd],0,3,0,0,["bg",A4o(AVl)],ACn,0,B,[Cd],0,3,0,0,["bg",A4o(AV9)],ACm,0,B,[Cd],0,3,0,0,["bg",A4o(AWC)],AJi,0,B,[],0,3,0,0,0,QC,0,B,[W],0,3,0,0,["j",A4o(AUj)],ADE,0,B,[W],0,3,0,0,0,U0,0,B,[W],0,3,0,0,["j",A4o(ALt)],SM,0,B,
[Cy],0,3,0,0,["cq",A4o(ATQ)],UK,0,B,[BE],0,3,0,0,0,FG,0,B,[],0,3,0,0,0,AHs,0,B,[],0,3,0,0,0,AD4,0,B,[],0,3,0,0,0,AKf,0,B,[],0,3,0,0,0,ACF,0,B,[Z],0,3,0,0,["g",A4n(AT8)],ACG,0,B,[Z],0,3,0,0,["g",A4n(AWp)],FT,0,B,[],0,3,0,0,0,Va,0,B,[W],0,3,0,0,["j",A4o(ANu)],Nr,0,FT,[],0,3,0,0,0,K2,0,FT,[],0,3,0,0,0,Uc,0,B,[W],0,3,0,0,["j",A4o(AT_)],Qk,0,B,[],0,3,0,0,0]);
$rt_metadata([PT,0,B,[W],0,3,0,0,["j",A4o(AXy)],PX,0,B,[Hq],3,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],Fo,0,Fv,[PX],1,3,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],M9,0,Fo,[],1,0,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],TD,0,M9,[],0,0,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],NN,0,D_,[],1,0,0,0,0,TA,0,NN,[],0,0,0,0,0,N2,0,Fi,[Lt],1,0,0,0,["e9",A4o(ATj),"i0",A4n(AVf),"pD",A4o(APq),"o9",A4o(AOv)],TB,0,N2,[],0,0,0,0,["e9",A4o(ATj),"nd",A4o(APx),"cZ",A4n(AOM),"b5",A4n(AMF),"et",A4n(AK5)],Ty,0,B,[Fa],0,0,0,0,["cy",A4n(AKO),"b7",A4n(AYl),"oO",
A4n(ARl)],XI,0,B,[Fa],3,3,0,0,0,Tz,0,B,[XI],0,0,0,0,0,Vs,0,B,[F$],0,3,0,0,0,QN,0,B,[Et],0,3,0,0,["L",A4o(A1H)],Ke,0,Eb,[],0,3,0,0,0,Jy,0,Bt,[],0,3,0,0,0,NW,0,Bt,[],0,3,0,0,0,XC,0,B,[W],0,3,0,0,["j",A4o(AYm)],AGY,0,B,[W],0,3,0,0,0,ABv,0,B,[W],0,3,0,0,["j",A4o(ALz)],QB,0,B,[QO],0,3,0,0,0,ZE,0,B,[Z],0,3,0,0,["g",A4n(AT9)],G2,0,B,[],0,3,0,0,0,P6,0,Fo,[],0,0,0,0,["o9",A4o(AWN)],S5,0,Fo,[],0,0,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],P7,0,Fv,[],0,0,0,0,["e9",A4o(ATj),"o9",A4o(AWN)],Vv,0,B,[W],0,3,0,0,["j",A4o(AVG)],Tp,0,
B,[W],0,3,0,0,["j",A4o(AXf)],Ki,0,B,[],0,3,0,0,["bH",A4o(AIY)],L5,0,Ki,[],0,3,0,0,["bH",A4o(AUu)],E3,0,B,[],0,3,0,0,["bH",A4o(AHv)],HA,0,E3,[],0,3,0,0,0,J3,0,E3,[],0,3,0,0,["bH",A4o(A0K)],Jc,0,E3,[],0,3,0,0,["bH",A4o(ATU)],AEz,0,H8,[],0,3,0,0,0,Rx,0,B,[Z],0,3,0,0,["g",A4n(AN0)],Ry,0,B,[Z],0,3,0,0,["g",A4n(ALZ)],Rv,0,B,[Z],0,3,0,0,["g",A4n(AK9)],Rw,0,B,[Z],0,3,0,0,["g",A4n(ANU)],Q3,0,B,[Z],0,3,0,0,["g",A4n(AYT)],Q2,0,B,[Z],0,3,0,0,["g",A4n(AX7)],Q1,0,B,[Z],0,3,0,0,["g",A4n(ATc)],PZ,0,B,[Z],0,3,0,0,["g",A4n(AP3)],QA,
0,B,[],3,3,0,0,0,X5,0,B,[Z],0,3,0,0,["g",A4n(ALP)],Sw,0,B,[G$],0,3,0,0,["pJ",A4p(ANt)],VL,0,B,[],0,3,0,0,0,Q8,0,B,[],0,3,0,0,0,Rq,0,B,[W],0,3,0,0,["j",A4o(AQA)],WA,0,B,[W],0,3,0,0,["j",A4o(AU2)]]);
$rt_metadata([T7,0,B,[LG],0,3,0,0,["yk",A4o(Nc)],ACh,0,BF,[],0,3,0,0,0,OV,0,B,[Z],0,3,0,0,["g",A4n(AWM)],OW,0,B,[Z],0,3,0,0,["g",A4n(A0b)],OU,0,B,[Z],0,3,0,0,["g",A4n(ATh)],Us,0,B,[Z],0,3,0,0,["g",A4n(AO3)],Ur,0,B,[Z],0,3,0,0,["g",A4n(AY$)],Xr,0,B,[DL],0,3,0,0,["cW",A4n(AMr)],Zt,0,B,[Z],0,3,0,0,["g",A4n(AN8)],Zu,0,B,[Z],0,3,0,0,["g",A4n(AZZ)],U$,0,B,[Z],0,3,0,0,["g",A4n(AKx)],U5,0,B,[Z],0,3,0,0,["g",A4n(AN9)],U6,0,B,[Z],0,3,0,0,["g",A4n(ASI)],U7,0,B,[Z],0,3,0,0,["g",A4n(AXn)],U8,0,B,[Z],0,3,0,0,["g",A4n(AWe)],Ot,
0,B,[DL],0,3,0,0,["cW",A4n(AR1)],Tq,0,B,[G$],0,3,0,0,["pJ",A4p(AQ2)],W$,0,B,[LW],3,3,0,0,0,ABw,0,B,[W$],0,0,0,0,["oC",A4n(I_),"sy",A4n(A0J),"cK",A4n(AM5)],AGF,0,B,[CJ],0,3,0,0,["bH",A4o(AP5)],VX,0,B,[W],0,3,0,0,["j",A4o(AXd)],Vk,0,B,[W],0,3,0,0,["j",A4o(A1E)],SU,0,B,[HT],0,3,0,0,0,FA,0,B,[],0,0,0,0,0,ZL,0,FA,[Fa],0,0,0,0,0,SX,0,FA,[Fa],0,0,0,0,0,YQ,0,FA,[Fa],0,0,0,0,0,ADW,0,B,[W],0,0,0,0,0,YN,0,B,[C2],4,3,0,0,0,Zl,0,B,[W],0,3,0,0,["j",A4o(APn)],Zk,0,B,[W],0,3,0,0,["j",A4o(AYJ)],WY,0,B,[W],0,3,0,0,["j",A4o(AU$)],HR,
0,B,[],3,3,0,0,0,Sx,0,B,[HR],0,3,0,0,["lu",A4q(AXz)],Sy,0,B,[HR],0,3,0,0,["lu",A4q(AWi)],IM,0,B,[C2,CJ],0,3,0,0,0,KB,0,B,[],3,3,0,0,0,Rs,0,B,[KB],0,3,0,0,0,Xc,0,B,[KB],3,3,0,0,0,AE4,0,B,[Xc],0,3,0,0,0,RO,0,B,[HR],0,3,0,0,["lu",A4q(AX5)],RN,0,B,[Et],0,3,0,0,["L",A4o(ASy)],RM,0,B,[Et],0,3,0,0,["L",A4o(AQS)],RQ,0,B,[HR],0,3,0,0,["lu",A4q(AXG)],Gy,0,CG,[],12,0,0,R2,0,ADk,0,B,[W],0,3,0,0,["j",A4o(AVR)],BP,0,B,[],1,0,0,0,["cm",A4q(Iy),"cw",A4r(IF),"iI",A4n(AUE),"S",A4o(AR7),"bY",A4o(A0f),"gk",A4n(A0Z),"eG",A4n(Kh)],V3,
0,B,[Z],0,3,0,0,["g",A4n(ANH)],Vl,0,B,[W],0,3,0,0,["j",A4o(AX9)],Vm,0,B,[W],0,3,0,0,["j",A4o(ANd)]]);
$rt_metadata([WX,0,B,[W],0,3,0,0,["j",A4o(APA)],ADj,0,Em,[],0,3,0,0,0,R5,0,B,[W],0,3,0,0,["j",A4o(AQV)],AAk,0,B,[],32,0,0,A3G,0,Rk,0,B,[W],0,3,0,0,["j",A4o(ANi)],CW,0,BP,[],0,0,0,Oe,["c",A4q(ALg),"H",A4o(ALv)],GY,0,B,[],0,0,0,0,0,J4,0,BR,[],0,3,0,0,0,Pj,0,B,[Z],0,3,0,0,["g",A4n(ATM)],ADd,0,B,[KM],0,0,0,0,["q9",A4p(ALp),"to",A4p(ALX),"wv",A4o(AMf),"tY",A4o(AMK)],Rr,0,CW,[],0,0,0,0,["c",A4q(ATR),"H",A4o(AZf)],AC8,0,CW,[],0,0,0,0,["c",A4q(AU0)],Qm,0,CW,[],0,0,0,0,["c",A4q(ALD)],R9,0,CW,[],0,0,0,0,["c",A4q(ATT),
"H",A4o(AYn)],F0,0,CW,[],0,0,0,0,["c",A4q(ASi)],Cb,0,BP,[],1,0,0,0,["c",A4q(A1o),"b8",A4n(AZT),"H",A4o(AOe)],AGf,0,Cb,[],0,0,0,0,["by",A4p(AZx),"cm",A4q(AVL),"cw",A4r(AUW),"H",A4o(ATS)],B7,0,BP,[],0,0,0,0,["c",A4q(ANw),"S",A4o(AQl),"bY",A4o(AW$),"H",A4o(AQN),"eG",A4n(ALY)],Kd,0,B7,[],0,0,0,0,["c",A4q(AP_),"H",A4o(AYV)],D6,0,Kd,[],0,0,0,0,["c",A4q(AVj),"S",A4o(AYO)],VG,0,D6,[],0,0,0,0,["c",A4q(AQj),"H",A4o(ASa)],ABZ,0,D6,[],0,0,0,0,["c",A4q(ALr),"H",A4o(AZV)],YR,0,D6,[],0,0,0,0,["c",A4q(ALV),"H",A4o(A1B)],Sr,
0,D6,[],0,0,0,0,["c",A4q(ATx),"H",A4o(AY6)],HM,0,B7,[],0,0,0,0,["c",A4q(AKL),"cm",A4q(AO7),"cw",A4r(AZh),"bY",A4o(AW8),"gk",A4n(AYk),"eG",A4n(ASF)],G0,0,B,[],1,0,0,0,0,Y,0,G0,[],1,0,0,PN,["dN",A4n(AUo),"fF",A4n(AT6),"lA",A4n(AZP),"ic",A4n(A0U)],AD9,0,Y,[],0,0,0,0,["o",A4o(C9),"dN",A4n(C1),"fF",A4n(AVH),"lA",A4n(ARX),"cK",A4n(AXJ),"ic",A4n(AM$)],Mt,0,Bt,[],0,3,0,0,0,Eh,0,BP,[],1,0,0,0,["bY",A4o(ARj),"H",A4o(A0n),"eG",A4n(APl)],C$,0,Eh,[],0,0,0,0,["c",A4q(ATy)],FL,0,C$,[],0,0,0,0,["c",A4q(AUd)],CX,0,Eh,[],0,0,
0,0,["c",A4q(ATJ)],E2,0,C$,[],0,0,0,0,["c",A4q(AXm),"S",A4o(ATe)],Ul,0,C$,[],0,0,0,0,["c",A4q(A1k),"cm",A4q(APJ)],Bf,0,B,[],1,0,0,0,0,Dq,0,BR,[],0,3,0,0,0,VQ,0,G0,[Er],0,0,0,0,["cK",A4n(AXP)],WT,0,BP,[],0,0,0,0,["c",A4q(AOw),"H",A4o(AYj)],ACB,0,B,[Er,C2],0,3,0,0,0,OC,0,B7,[],0,0,0,0,0,QJ,0,B7,[],0,0,0,0,["c",A4q(ALe),"S",A4o(AYc),"H",A4o(ALH),"bY",A4o(ALu)],D0,0,B7,[],0,0,0,0,["c",A4q(AVC),"o",A4o(ANl),"bY",A4o(ALa),"S",A4o(AZJ),"H",A4o(AMZ)],Mq,0,D0,[],0,0,0,0,["o",A4o(AOf)],AD3,0,Cb,[],0,0,0,0,["by",A4p(AWV)],Ey,
0,Cb,[],0,0,0,0,["by",A4p(Vx),"bY",A4o(AQn)],Xf,0,B7,[],0,0,0,0,["S",A4o(APb),"c",A4q(AKw),"bY",A4o(AUw),"H",A4o(AR2)],EE,0,Cb,[],0,0,0,0,["b8",A4n(AWL),"by",A4p(ANF),"cm",A4q(AML),"cw",A4r(AOs),"bY",A4o(ARU)],AGB,0,Cb,[],0,0,0,0,["by",A4p(ATl)],ADq,0,Cb,[],0,0,0,0,["by",A4p(AKE)]]);
$rt_metadata([FQ,0,B7,[],0,0,0,0,["S",A4o(A02),"c",A4q(AP$),"bY",A4o(AOx),"H",A4o(AYP)],UP,0,FQ,[],0,0,0,0,0,AAq,0,FQ,[],0,0,0,0,0,Vu,0,CX,[],0,0,0,0,["c",A4q(AU5)],XU,0,CX,[],0,0,0,0,["c",A4q(AXB)],Gt,0,CX,[],0,0,0,0,["c",A4q(AZH),"S",A4o(A0y)],P_,0,Gt,[],0,0,0,0,["c",A4q(AOo),"S",A4o(AXR)],Ge,0,CX,[],0,0,0,0,["c",A4q(A1y)],OP,0,Ge,[],0,0,0,0,["c",A4q(ANW)],Rm,0,CX,[],0,0,0,0,["c",A4q(ASL)],Yt,0,Gt,[],0,0,0,0,["c",A4q(ALI)],S8,0,Ge,[],0,0,0,0,["c",A4q(ATY)],Rn,0,Eh,[],0,0,0,0,["c",A4q(A1p),"cm",A4q(ARG)],W0,
0,Eh,[],0,0,0,0,["c",A4q(AQo),"cm",A4q(AKy)],Fu,0,B,[],1,0,0,0,0,ADn,0,C$,[],0,0,0,0,["c",A4q(AK4)],Uh,0,E2,[],0,0,0,0,["c",A4q(APz)],Xt,0,FL,[],0,0,0,0,["c",A4q(AZk)],Ys,0,C$,[],0,0,0,0,["c",A4q(AQk)],AAC,0,E2,[],0,0,0,0,["c",A4q(AK$)],Ra,0,FL,[],0,0,0,0,["c",A4q(AZz)],K5,0,BP,[],4,0,0,0,["c",A4q(AW9),"H",A4o(AWB)],AEn,0,BP,[],0,0,0,0,["c",A4q(AUm),"H",A4o(AUv)],WW,0,BP,[],0,0,0,0,["c",A4q(AOh),"H",A4o(AS9)],UJ,0,BP,[],4,0,0,0,["c",A4q(AYC),"H",A4o(AUX)],ACk,0,BP,[],0,0,0,0,["c",A4q(AYa),"H",A4o(ATk)],V9,0,
BP,[],0,0,0,0,["c",A4q(AUS),"H",A4o(ANs)],AGp,0,B7,[],0,0,0,0,["c",A4q(ASO),"S",A4o(AUy),"iI",A4n(AXX),"H",A4o(AUx)],AD8,0,B7,[],4,0,0,0,["c",A4q(AX6),"S",A4o(AZb),"iI",A4n(AKk),"H",A4o(ASZ)],AJN,0,BP,[],4,0,0,0,["c",A4q(AOA),"H",A4o(AVZ)],AIV,0,BP,[],0,0,0,0,["c",A4q(AP6),"H",A4o(AVT)],AG9,0,BP,[],0,0,0,0,["c",A4q(AWw),"H",A4o(AL6)],H9,0,B7,[],0,0,0,0,["c",A4q(AK6),"S",A4o(AYL),"H",A4o(AQ4)],AJS,0,H9,[],0,0,0,0,["c",A4q(AL$),"cm",A4q(AR$),"cw",A4r(AKS),"bY",A4o(AXw)],AIh,0,H9,[],0,0,0,0,["c",A4q(AO2)],Pv,0,
GI,[Jz],0,3,0,0,["ph",A4r(ANb),"oG",A4q(AUp),"jI",A4o(AUL),"py",A4p(AZS)],Y5,0,Cb,[],0,0,0,0,["by",A4p(AMl),"cm",A4q(AUk),"cw",A4r(AV3),"bY",A4o(ANL)],ADp,0,Cb,[],0,0,0,0,["by",A4p(AO8)],OS,0,Cb,[],0,0,0,0,["by",A4p(AZl)],Hb,0,B,[],4,0,0,ARb,0,VB,0,Cb,[],0,0,0,0,["by",A4p(ARo)],Nw,0,B7,[],0,0,0,0,["S",A4o(AYh),"c",A4q(AUY),"cm",A4q(ANJ),"cw",A4r(AVm),"bY",A4o(AKR),"H",A4o(ARP)],NE,0,B7,[],0,0,0,0,["S",A4o(AUK),"c",A4q(AKA),"cm",A4q(AYq),"cw",A4r(ARk),"bY",A4o(AMm),"H",A4o(AYx)],Ea,0,Cb,[],0,0,0,0,["by",A4p(AYX),
"cm",A4q(AXK),"cw",A4r(ALN),"bY",A4o(AYR)],ABs,0,Fu,[],0,0,0,0,["iC",A4o(ALS),"y6",A4p(AQ1)],ABt,0,Fu,[],0,0,0,0,["iC",A4o(AZB),"y6",A4p(ASA)],AFQ,0,B,[],0,0,0,0,0,ADC,0,B,[],0,0,0,0,0,Nu,0,Bf,[],0,0,0,0,["F",A4n(AIn)],MU,0,Bf,[],0,0,0,0,["F",A4n(AIR)]]);
$rt_metadata([AFJ,0,Bf,[],0,0,0,0,["F",A4n(AZe)],AF4,0,Bf,[],0,0,0,0,["F",A4n(ARR)],AF6,0,Bf,[],0,0,0,0,["F",A4n(AMQ)],Nq,0,Bf,[],0,0,0,0,["F",A4n(AD_)],Ly,0,Nq,[],0,0,0,0,["F",A4n(AEE)],AG0,0,Bf,[],0,0,0,0,["F",A4n(AWg)],Oj,0,Ly,[],0,0,0,0,["F",A4n(AG7)],AIy,0,Oj,[],0,0,0,0,["F",A4n(APm)],AE7,0,Bf,[],0,0,0,0,["F",A4n(AVb)],AEi,0,Bf,[],0,0,0,0,["F",A4n(APj)],AHP,0,Bf,[],0,0,0,0,["F",A4n(ASD)],AJC,0,Bf,[],0,0,0,0,["F",A4n(AXU)],AG3,0,Bf,[],0,0,0,0,["F",A4n(ATr)],AJl,0,Bf,[],0,0,0,0,["F",A4n(AN2)],AFA,0,Bf,[],
0,0,0,0,["F",A4n(AQ9)],AGg,0,Bf,[],0,0,0,0,["F",A4n(AU_)],ADO,0,Bf,[],0,0,0,0,["F",A4n(AMw)],AHe,0,Bf,[],0,0,0,0,["F",A4n(A0P)],AJr,0,Bf,[],0,0,0,0,["F",A4n(ATm)],AFZ,0,Bf,[],0,0,0,0,["F",A4n(AOB)],AH9,0,Bf,[],0,0,0,0,["F",A4n(AMC)],AE9,0,Bf,[],0,0,0,0,["F",A4n(AV5)],AGK,0,Bf,[],0,0,0,0,["F",A4n(AW4)],AJw,0,Bf,[],0,0,0,0,["F",A4n(AR3)],AEO,0,Bf,[],0,0,0,0,["F",A4n(AQG)],AEv,0,Bf,[],0,0,0,0,["F",A4n(APN)],AG1,0,Bf,[],0,0,0,0,["F",A4n(AY8)],Ko,0,Bf,[],0,0,0,0,["F",A4n(AE8)],AJK,0,Ko,[],0,0,0,0,["F",A4n(APF)],AID,
0,Nu,[],0,0,0,0,["F",A4n(AUi)],AEt,0,MU,[],0,0,0,0,["F",A4n(ANC)],AHS,0,Bf,[],0,0,0,0,["F",A4n(AOP)],AH3,0,Bf,[],0,0,0,0,["F",A4n(ASs)],AIr,0,Bf,[],0,0,0,0,["F",A4n(AVS)],AIz,0,Bf,[],0,0,0,0,["F",A4n(AKp)],AHV,0,B,[],4,0,0,0,0,AD2,0,B,[],4,3,0,0,0,Wa,0,B,[],0,3,0,0,0,AFU,0,B,[],0,3,0,0,0,AIe,0,B,[],4,3,0,0,0,Mh,0,Bt,[],0,3,0,0,0,AB1,0,B,[W],0,3,0,0,["j",A4o(AKr)],AB0,0,B,[W],0,3,0,0,["j",A4o(AR4)],AHJ,0,B,[Et],0,3,0,0,0,RT,0,B,[W],0,3,0,0,["j",A4o(AVY)],Re,0,B,[W],0,3,0,0,["j",A4o(AL1)],ABo,0,B,[Et],0,0,0,0,
["L",A4o(AMU)],AAM,0,B,[W],0,3,0,0,0,AAO,0,B,[W],0,3,0,0,["j",A4o(A0B)],Ku,0,B,[],3,3,0,0,0]);
$rt_metadata([Pk,0,B,[Ku],0,0,0,0,["s_",A4o(AYN),"wn",A4o(AWn),"vp",A4n(ARp)],AAf,0,B,[W],0,3,0,0,0,AA6,0,B,[W],0,3,0,0,0,Wk,0,B,[Z],0,3,0,0,["g",A4n(AUq)],Uk,0,Y,[],0,0,0,0,["o",A4o(AMW)],Ui,0,Y,[],0,0,0,0,["o",A4o(ATI)],PF,0,Y,[],0,0,0,0,["o",A4o(AOG),"cK",A4n(AV7)],W6,0,Y,[],0,0,0,0,["o",A4o(AY1)],W4,0,Y,[],0,0,0,0,["o",A4o(ARn)],W5,0,Y,[],0,0,0,0,["o",A4o(AXj)],W9,0,Y,[],0,0,0,0,["o",A4o(AVu)],W_,0,Y,[],0,0,0,0,["o",A4o(AKl)],W7,0,Y,[],0,0,0,0,["o",A4o(ANy)],W8,0,Y,[],0,0,0,0,["o",A4o(APa)],Xa,0,Y,[],0,
0,0,0,["o",A4o(ASb)],Xb,0,Y,[],0,0,0,0,["o",A4o(AU7)],PE,0,Y,[],0,0,0,0,["o",A4o(A1I)],P1,0,Y,[],0,0,0,0,["o",A4o(ANA)],PC,0,Y,[],0,0,0,0,["o",A4o(AMc)],PD,0,Y,[],0,0,0,0,["o",A4o(AVW)],PI,0,Y,[],0,0,0,0,["o",A4o(AOj)],PB,0,Y,[],0,0,0,0,["o",A4o(AZ2)],PG,0,Y,[],0,0,0,0,["o",A4o(AUs)],PH,0,Y,[],0,0,0,0,["o",A4o(AQz)],LY,0,B,[],3,3,0,0,0,Zz,0,B,[LY],4,3,0,0,0,AIF,0,B,[G$],0,3,0,0,0,C8,0,B,[],3,3,0,AF8,0,Cx,0,CG,[],12,3,0,AFv,0,DX,0,B,[],3,3,0,ATW,0,ABR,0,B,[],0,3,0,0,0,OL,0,HM,[],0,0,0,0,["cm",A4q(ANf),"cw",A4r(A1x),
"gk",A4n(AL3)],QF,0,Bt,[],0,3,0,0,0,UN,0,Bt,[],0,3,0,0,0,Tr,0,F8,[],0,3,0,0,0,Qz,0,F8,[],0,3,0,0,0,UL,0,B,[Cd],0,3,0,0,["bg",A4o(AV4)],UM,0,B,[Cd],0,3,0,0,["bg",A4o(AUr)],ABi,0,B,[],0,3,0,0,0,AD1,0,B,[],3,3,0,0,0,ADK,0,B,[],0,3,0,0,0,XH,0,B,[W],0,3,0,0,["j",A4o(AWY)],ABC,0,B,[Cd],0,3,0,0,["bg",A4o(AQI)],ABE,0,B,[Cd],0,3,0,0,["bg",A4o(APU)],ABF,0,B,[Cd],0,0,0,0,["bg",A4o(AQO)],WQ,0,B,[Z],0,3,0,0,0,Z0,0,B,[Ku],0,0,0,0,["s_",A4o(A0c),"wn",A4o(AR_),"vp",A4n(A0w)],ABl,0,B,[LY],0,0,0,0,0,SW,0,B,[Cd],0,3,0,0,["bg",
A4o(AXc)],ABx,0,B,[Z],0,3,0,0,["g",A4n(AYu)]]);
$rt_metadata([Z2,0,Y,[],0,0,0,0,["o",A4o(ASh)],VJ,0,Y,[],0,0,0,0,["o",A4o(AUg)],RA,0,Y,[],0,0,0,0,["o",A4o(AK8)],Rz,0,Y,[],0,0,0,0,["o",A4o(AVQ)],Uy,0,Y,[],0,0,0,0,["o",A4o(AOa)],Xq,0,Y,[],0,0,0,0,["o",A4o(A0v)],Ps,0,Y,[],0,0,0,0,["o",A4o(AQf)],YC,0,Y,[],0,0,0,0,["o",A4o(ARa)],VF,0,Y,[],0,0,0,0,["o",A4o(A1m)],VH,0,Y,[],0,0,0,0,["o",A4o(AMo)],O$,0,Y,[],0,0,0,0,["o",A4o(ASp)],XG,0,Y,[],0,0,0,0,["o",A4o(AXr)],XN,0,Y,[],0,0,0,0,["o",A4o(AYK)],AAl,0,Y,[],0,0,0,0,["o",A4o(A0j)],ZA,0,Y,[],0,0,0,0,["o",A4o(ASJ)],OG,
0,Y,[],0,0,0,0,["o",A4o(AMi)],L8,0,Y,[],0,0,0,0,["o",A4o(AQg)],Y$,0,L8,[],0,0,0,0,["o",A4o(AZK)],ACP,0,B,[BQ],3,3,0,0,0,X$,0,B,[ACP],0,3,0,0,["Ho",A4n(AOW)],AFj,0,B,[BQ],3,3,0,0,0,Q_,0,B,[Z],0,3,0,0,["g",A4n(A0R)],AHy,0,B,[],0,0,0,0,0,YP,0,B,[Z],0,3,0,0,["g",A4n(ANm)],ABH,0,B,[W],0,3,0,0,["j",A4o(AX1)],ABI,0,B,[W],0,3,0,0,["j",A4o(AWE)]]);
function $rt_array(cls,data){this.Vn=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser","#wasm","#diffDemo","","[]","null","Patter is null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","navigator.clipboard is undefined","Illegal argument javaObject instanceof ","keydown","keyup","mousemove",
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
"BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#F7F8FA","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","ClassL.java","ClassR.java","selectScene ","CodiconDemo",
"RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","TwoWindowsDemo","ClipboardTest","FolderDiff","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas",
"#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","text","java","cpp","js","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","font pow >","Development >","  ","Set editor font to: ",
", ascent+descent = ",", lineHeight = ",", caretHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel","ns-resize","ew-resize","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile",
"ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","File is too large: "," name: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |",
"paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","","codicon.pixel.size = ","w = ","Window 1","Window 2","Project root","FileTreeView model size = ","Open project...","request in progress ","Select left...","Select right...","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ",
"callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",
", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","Open project ...","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ",
"  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA","nwse-resize","nesw-resize",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: "," writeClipboardText \'",
"\' ok","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Folder ","ClassFile ","Expected "," ints to write, but "," written","open file ","Int","Iter","VP","Resolve","Rep","No definition or usages","fileHandle = "," - project view"," ints to read, but "," read","fib(",") result = ",") time = ","open dir = ","Unknown scope type: ","/Resolved in ","readClipboardText error: ",
"Unexpected type: ","Unexpected ref node type: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","opening file ... ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart",
"javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","  sub dir: ","  file: ","complete","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000",
"#818594","#080808","file = ","file.content.length = ","Error fetching file "]);
BL.prototype.toString=function(){return $rt_ustr(this);};
BL.prototype.valueOf=BL.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ALL(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CO=Long_add;var JD=Long_sub;var Ch=Long_mul;var AFT=Long_div;var ATE=Long_rem;var A15=Long_or;var Db=Long_and;var A8e=Long_xor;var HJ=Long_shl;var A3o=Long_shr;var F6=Long_shru;var A8f=Long_compare;var IA=Long_eq;var A8g=Long_ne;var A12=Long_lt;var AMG=Long_le;var A8h=Long_gt;var A11=Long_ge;var A8i=Long_not;var A3z=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A3A);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=AAs.prototype;c.f=c.bg;c=AAt.prototype;c.f=c.bg;c=AAr.prototype;c.f=c.bg;c=V0.prototype;c.f=c.bg;c=AIC.prototype;c.get=c.Kh;Object.defineProperty(c,"length",{get:c.Qv});c=AHn.prototype;c.createEntityReference=c.MS;c.getElementById=c.O6;c.createTextNode=c.OQ;c.hasChildNodes=c.NU;c.querySelectorAll=c.Mz;c.removeChild=c.Qh;c.cloneNode=c.Fd;c.createComment=c.Rr;c.insertBefore=c.M9;c.getElementsByTagNameNS=c.Qt;c.hasAttributes=c.HN;c.normalize=c.KN;c.hasChildNodesJS=c.KG;c.getElementsByTagName
=c.Kg;c.appendChild=c.LI;c.createAttributeNS=c.Pm;c.dispatchEvent=c.Ks;c.replaceChild=c.FF;c.createElementNS=c.GM;c.createCDATASection=c.JC;c.querySelector=c.HM;c.createElement=c.PR;c.isSupported=c.Ql;c.importNode=c.Ni;c.removeEventListener=c.GI;c.createAttribute=c.Kt;c.createDocumentFragment=c.EB;c.createProcessingInstruction=c.ML;c.addEventListener=c.IX;Object.defineProperty(c,"nodeName",{get:c.LH});Object.defineProperty(c,"documentElement",{get:c.Hr});Object.defineProperty(c,"childNodes",{get:c.Jl});Object.defineProperty(c,
"prefix",{get:c.No,set:c.RC});Object.defineProperty(c,"implementation",{get:c.JW});Object.defineProperty(c,"textContent",{get:c.Rw,set:c.OO});Object.defineProperty(c,"parentNode",{get:c.O3});Object.defineProperty(c,"nextSibling",{get:c.Hi});Object.defineProperty(c,"nodeType",{get:c.P5});Object.defineProperty(c,"doctype",{get:c.N9});Object.defineProperty(c,"localName",{get:c.QM});Object.defineProperty(c,"nodeValue",{get:c.G2,set:c.Rj});Object.defineProperty(c,"firstChild",{get:c.Ko});Object.defineProperty(c,
"lastChild",{get:c.I5});Object.defineProperty(c,"previousSibling",{get:c.Lu});Object.defineProperty(c,"namespaceURI",{get:c.FY});Object.defineProperty(c,"attributes",{get:c.Nv});Object.defineProperty(c,"ownerDocument",{get:c.F6});c=O_.prototype;c.f=c.bg;c=AHM.prototype;c.removeEventListener=c.F9;c.dispatchEvent=c.Nd;c.addEventListener=c.Iy;c=TH.prototype;c.onAnimationFrame=c.HO;c=TG.prototype;c.f=c.AK;c=TE.prototype;c.handleEvent=c.cq;c=Zx.prototype;c.f=c.bg;c=AB9.prototype;c.handleEvent=c.cq;c=AB$.prototype;c.handleEvent
=c.cq;c=AB_.prototype;c.handleEvent=c.cq;c=ACa.prototype;c.handleEvent=c.cq;c=ACb.prototype;c.handleEvent=c.cq;c=ACc.prototype;c.handleEvent=c.cq;c=ACd.prototype;c.handleEvent=c.cq;c=ACe.prototype;c.handleEvent=c.cq;c=ACf.prototype;c.handleEvent=c.cq;c=ACg.prototype;c.handleEvent=c.cq;c=Vc.prototype;c.handleEvent=c.cq;c=Vd.prototype;c.handleEvent=c.cq;c=Ve.prototype;c.handleEvent=c.cq;c=Vf.prototype;c.handleEvent=c.cq;c=AAX.prototype;c.handleEvent=c.cq;c=AC1.prototype;c.f=c.bg;c=AC2.prototype;c.f=c.bg;c=V8.prototype;c.f
=c.bg;c=V7.prototype;c.f=c.bg;c=V5.prototype;c.f=c.bg;c=V4.prototype;c.f=c.bg;c=O7.prototype;c.accept=c.Kz;c=Oz.prototype;c.f=c.bg;c=OB.prototype;c.f=c.bg;c=OA.prototype;c.f=c.bg;c=Xy.prototype;c.f=c.AK;c=Xw.prototype;c.f=c.AK;c=Zn.prototype;c.f=c.bg;c=ABM.prototype;c.f=c.bg;c=Oy.prototype;c.f=c.bg;c=ACU.prototype;c.f=c.bg;c=ACT.prototype;c.f=c.bg;c=ACn.prototype;c.f=c.bg;c=ACm.prototype;c.f=c.bg;c=SM.prototype;c.handleEvent=c.cq;c=UL.prototype;c.f=c.bg;c=UM.prototype;c.f=c.bg;c=ABC.prototype;c.f=c.bg;c=ABE.prototype;c.f
=c.bg;c=ABF.prototype;c.f=c.bg;c=SW.prototype;c.f=c.bg;c=X$.prototype;c.onTimer=c.Ho;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);