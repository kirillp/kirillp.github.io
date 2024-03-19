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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hD=f;}
function $rt_cls(cls){return Ti(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Ho(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.cc.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ASt(t);}
function $rt_throwableCause(t){return A0M(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A5S());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A5T(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A5U());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BL=$rt_compare;var A5V=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var Je=$rt_isInstance;var A5W=$rt_nativeThread;var A5X=$rt_suspending;var A5Y=$rt_resuming;var A5Z=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var Bc=$rt_imul;var EW=$rt_wrapException;var A50=$rt_checkBounds;var A51=$rt_checkUpperBound;var A52=$rt_checkLowerBound;var A53=$rt_wrapFunction0;var A54=$rt_wrapFunction1;var A55=$rt_wrapFunction2;var A56=$rt_wrapFunction3;var A57=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AJq=$rt_createCharArrayFromData;var A3Z=$rt_createByteArrayFromData;var A4x=$rt_createShortArrayFromData;var DX=$rt_createIntArrayFromData;var A58=$rt_createBooleanArrayFromData;var A59=$rt_createFloatArrayFromData;var A5$=$rt_createDoubleArrayFromData;var AIL=$rt_createLongArrayFromData;var A5R=$rt_createBooleanArray;var DM=$rt_createByteArray;var A5_=$rt_createShortArray;var B5=$rt_createCharArray;var BQ=$rt_createIntArray;var A6a=$rt_createLongArray;var ALI=$rt_createFloatArray;var A6b
=$rt_createDoubleArray;var BL=$rt_compare;var A6c=$rt_castToClass;var A6d=$rt_castToInterface;var A6e=Long_toNumber;var Bp=Long_fromInt;var A6f=Long_fromNumber;var D=Long_create;var FM=Long_ZERO;var A6g=Long_hi;var GR=Long_lo;
function B(){this.$id$=0;}
function BF(a){return Ti(a.constructor);}
function AQr(a,b){return a!==b?0:1;}
function AMX(a){var b,c,d,e,f,g,h,i,j;b=MI(a);if(!b)c=C(0);else{d=(((32-Xo(b)|0)+4|0)-1|0)/4|0;e=B5(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Ik((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Ho(e);}j=new K;M(j);H(H(j,C(1)),c);return L(j);}
function MI(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function APN(a){var b,c,d;if(!Je(a,Ex)&&a.constructor.$meta.item===null){b=new Uu;Y(b);N(b);}b=ALO(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function R3(){var a=this;B.call(a);a.BJ=0;a.qB=null;}
function A5f(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AKP();AIn();AF4();AGK();AH5();AI_();AGb();AEv();AFI();AHv();AIm();AKo();AGw();AJF();AJd();AG$();AGq();AJk();AK5();AGd();AIR();AFK();AKv();AJ4();AIB();AHX();AKt();AHq();c=(AEJ()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Yj(C(2),C(3));else{d=new R3;BD(d);e=new ABz;e.Ar=d;f=new WS;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j=new PE;j.yt=i;j.yu=g;j.yv
=6;j.yw=e;j.yr=f;k=Bv(j,"f");i.onmessage=k;h=h+1|0;}l=I(L8,[Fb(C(4),C(5),300),Fb(C(6),C(7),300),Fb(C(8),C(5),400),Fb(C(9),C(7),400),Fb(C(10),C(5),600),Fb(C(11),C(7),600),Fb(C(12),C(5),700),Fb(C(13),C(7),700)]);m=Q(L8,1);m.data[0]=ASY(C(14),Fz(C(15),C(16)),C(5),400);b=(L5(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.ue;f=c.ts;i=new K;M(i);BN(H(H(i,C(17)),f),41);i=L(i);f=c.tp;o=c.sd;c=AXi($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1
|0;}e=$rt_globals.Promise.all(g);BD(d);c=new ABA;c.A6=d;g=new ABy;e.then(Bv(c,"f"),Bv(g,"f"));}}
function AGQ(b){var c,d,e,f,g,h,i,j;c=new AAG;d=new Ut;d.ye=c;c.tZ=d;d=new Ur;d.BP=c;c.ov=d;e=new Us;e.zM=c;c.vw=new $rt_globals.ResizeObserver(Bv(e,"f"));d=new Uq;d.rH=c;c.xb=d;c.lv=1;d=new AAq;d.mw=new TK;e=new Yh;e.DM=null;e.mo=A6h;d.sC=e;BD(e);f=new AAs;f.z2=e;d.BL=f;d.Bd=b;g=b.length;h=0;while(h<g){e=b[h];i=new AAt;i.ze=d;i.zd=h;f=Bv(i,"f");e.onmessage=f;e=b[h];f=AJD();e.postMessage(f);h=h+1|0;}d.ix=0;d.pm=BQ(g);c.Bt=d;c.qR=(Ev()).getElementById("canvasDiv");d=AEJ();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.ew=d;c.qR.appendChild(d);b=c.ew;d=ARt(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Yj(C(2),C(18));else{c.pR=A43(c.ew,c.ov);b=new Uj;j=c.ov;AKO(b,e,new AB4,1,2.25,0.625);b.DK=new AB3;b.C_=j;c.hS=b;ASb(c.vw,c.ew,AU2());d=$rt_globals.window;j=c.xb;d.addEventListener("resize",Bv(j,"handleEvent"));j=new OQ;b=c.hS;d=c.pR.cu;j.P=b;j.o=d;j.bA=c;d=$rt_str($rt_globals.window.location.hash);if(Bj(C(19),d)){b=new Pl;El(b,j);d=$rt_globals.fetch("test.wasm");j
=new W0;d=d.then(Bv(j,"f"));j=new WZ;e=d.then(Bv(j,"f"));j=new WX;d=new WW;e.then(Bv(j,"f"),Bv(d,"f"));}else b=Bj(C(20),d)?A4Y(j):(A1E(J(d)<=0?C(21):Dw(d,1))).bc(j);c.gE=b;S7(c);}c.ew.focus();}
var WR=G(0);
var Ws=G(0);
function AC1(){var a=this;B.call(a);a.m5=null;a.vy=null;a.d_=null;}
function Ti(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AC1;c.d_=b;d=c;b.classObject=d;}return c;}
function JX(a){if(a.m5===null)a.m5=AG7(a.d_);return a.m5;}
function Nc(a){var b,c,d,e;b=a.vy;if(b===null){if(ALj(a.d_)===null?0:1){b=Nc(HR(a));c=new K;M(c);H(H(c,b),C(22));b=L(c);}else{b=a.d_.$meta.enclosingClass;if((b===null?null:Ti(b))!==null){b=$rt_str(a.d_.$meta.simpleName);if(b===null)b=C(21);}else{b=AG7(a.d_);d=RU(b,36);if(d==(-1)){e=RU(b,46);if(e!=(-1))b=Dw(b,e+1|0);}else{b=Dw(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(21);}}}a.vy=b;}return b;}
function IQ(a){return a.d_.$meta.primitive?1:0;}
function HR(a){return Ti(ALj(a.d_));}
var AIV=G();
function Bv(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fg(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AIJ=G();
function ALO(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AKi(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AKi(d[e],c))return 1;e=e+1|0;}return 0;}
function ALj(b){return b.$meta.item;}
function AG7(b){return $rt_str(b.$meta.name);}
function GY(){var a=this;B.call(a);a.iS=null;a.nr=null;a.kM=0;a.k7=0;}
function A6i(){var a=new GY();Y(a);return a;}
function A6j(a){var b=new GY();Bm(b,a);return b;}
function Y(a){a.kM=1;a.k7=1;}
function Bm(a,b){a.kM=1;a.k7=1;a.iS=b;}
function AW_(a){return a;}
function ASt(a){return a.iS;}
function A0M(a){var b;b=a.nr;if(b===a)b=null;return b;}
var Ew=G(GY);
function A6k(){var a=new Ew();AGE(a);return a;}
function AGE(a){Y(a);}
var Bu=G(Ew);
function A5T(a){var b=new Bu();A1$(b,a);return b;}
function A1$(a,b){Bm(a,b);}
var AJI=G(Bu);
var C8=G(0);
var CL=G(0);
var Kr=G(0);
function BK(){var a=this;B.call(a);a.cc=null;a.j$=0;}
var A6l=null;var A6m=null;var A6n=null;function Ff(){Ff=Bn(BK);ATn();}
function AOQ(){var a=new BK();AEt(a);return a;}
function Ho(a){var b=new BK();Jx(b,a);return b;}
function EB(a,b,c){var d=new BK();OJ(d,a,b,c);return d;}
function AEt(a){Ff();a.cc=A6l;}
function Jx(a,b){Ff();OJ(a,b,0,b.data.length);}
function OJ(a,b,c,d){var e;Ff();e=B5(d);a.cc=e;C7(b,c,e,0,d);}
function Mz(b){var c;Ff();c=AOQ();c.cc=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.cc.data;if(b<c.length)return c[b];}d=new Ig;Y(d);N(d);}
function J(a){return a.cc.data.length;}
function Gr(a){return a.cc.data.length?0:1;}
function QY(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C7(a.cc,b,d,e,c);return;}}g=new BI;Y(g);N(g);}
function Ow(a,b){var c,d,e;if(a===b)return 0;c=Be(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ABY(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function ND(a,b){if(a===b)return 1;return ABY(a,b,0);}
function DB(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function J5(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.cc.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JY(b);h=Jg(b);while(true){f=a.cc.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Hs(a,b,c){var d,e,f,g,h;d=Be(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.cc.data[d]==e)break;d=d+(-1)|0;}return d;}f=JY(b);g=Jg(b);while(true){if(d<1)return (-1);h=a.cc.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function RU(a,b){return Hs(a,b,J(a)-1|0);}
function YI(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AZK(a,b){return YI(a,b,0);}
function QV(a,b,c){var d,e;d=Be(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AFN(a,b){return QV(a,b,J(a));}
function Cu(a,b,c){var d,e;d=BL(b,c);if(d>0){e=new BI;Y(e);N(e);}if(!d){Ff();return A6m;}if(!b&&c==J(a))return a;return EB(a.cc,b,c-b|0);}
function Dw(a,b){return Cu(a,b,J(a));}
function Q4(a,b,c){return Cu(a,b,c);}
function Fz(a,b){var c,d,e,f,g,h;if(Gr(b))return a;if(Gr(a))return b;c=B5(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Mz(c);}
function ACn(a,b,c){var d,e,f,g;d=new K;M(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BN(d,P(a,f));}f=f+1|0;}H(d,Dw(a,f));return L(d);}
function Z9(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cu(a,b,c+1|0);}
function AMV(a){return a;}
function Gt(a){var b,c,d,e,f;b=a.cc.data;c=B5(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cy(b){Ff();return b===null?C(23):b.cQ();}
function NI(b){var c,d;Ff();c=new BK;d=B5(1);d.data[0]=b;Jx(c,d);return c;}
function Dm(b){var c;Ff();c=new K;M(c);return L(U(c,b));}
function Bj(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BK))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function J6(a){var b,c,d,e;a:{if(!a.j$){b=a.cc.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.j$=(31*a.j$|0)+e|0;d=d+1|0;}}}return a.j$;}
function Mj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new F5;Bm(b,C(24));N(b);}A6o=1;d=new ZH;d.mU=Q(C2,10);d.hZ=(-1);d.fP=(-1);d.bz=(-1);e=new G5;e.ft=1;e.bQ=b;e.bg=B5(J(b)+2|0);C7(Gt(b),0,e.bg,0,J(b));f=e.bg.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.zJ=g;e.he=0;FU(e);FU(e);d.l=e;d.d3=0;d.nz=VS(d,(-1),0,null);if(!DD(d.l)){b=new Kn;h=d.l;MT(b,C(21),h.bQ,h.dr);N(b);}if(d.rc)d.nz.eW();b=BM();h=new AAw;h.kq=(-1);h.pa=(-1);h.Cx=d;h.A8=d.nz;h.lL=a;h.kq=0;g=J(a);h.pa=g;e=new ACo;i=h.kq;j=d.hZ;k=d.fP+1|0;l=d.bz
+1|0;e.iX=(-1);m=j+1|0;e.rR=m;e.ed=BQ(m*2|0);f=BQ(l);e.k1=f;JC(f,(-1));if(k>0)e.pv=BQ(k);JC(e.ed,(-1));AD5(e,a,i,g);h.cK=e;e.gz=1;n=0;m=0;if(!J(a)){f=Q(BK,1);f.data[0]=C(21);}else{while(true){l=J(h.lL);if(!AED(h))l=h.pa;e=h.cK;if(e.eT>=0&&AFE(e)==1){e=h.cK;e.eT=MH(e);if(MH(h.cK)==AGJ(h.cK)){e=h.cK;e.eT=e.eT+1|0;}g=h.cK.eT;g=g<=l&&OX(h,g)?1:0;}else g=OX(h,h.kq);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BB(b,Q4(a,m,AHM(h)));m=AJa(h);n=g;}a:{BB(b,Q4(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(BH(b,
g)))break a;EL(b,g);}}if(g<0)g=0;f=Gp(b,Q(BK,g));}return f;}
function AOq(a,b){return Ow(a,b);}
function ATn(){A6l=B5(0);A6m=AOQ();A6n=new SQ;}
var FE=G(GY);
var Il=G(FE);
var AJm=G(Il);
var Er=G();
function HC(){Er.call(this);this.bp=0;}
var A6p=null;var A6q=null;function A1z(a){var b=new HC();AFg(b,a);return b;}
function AFg(a,b){a.bp=b;}
function J$(b){return (W$(A5K(20),b,10)).cQ();}
function KU(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Du;Bm(b,C(25));N(b);}d=J(b);if(0==d){b=new Du;Bm(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Du;Y(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=Yd(P(b,f));if(i<0){j=new Du;k=Cu(b,0,d);b=new K;M(b);H(H(b,C(27)),k);Bm(j,L(b));N(j);}if(i>=c){j=new Du;l=Cu(b,0,d);b=new K;M(b);H(H(U(H(b,C(28)),c),C(29)),l);Bm(j,L(b));N(j);}g=Bc(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Du;k=Cu(b,0,d);b=new K;M(b);H(H(b,C(30)),k);Bm(j,L(b));N(j);}b=new Du;j=new K;M(j);U(H(j,C(31)),c);Bm(b,L(j));N(b);}
function CZ(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A6q===null){A6q=Q(HC,256);c=0;while(true){d=A6q.data;if(c>=d.length)break a;d[c]=A1z(c-128|0);c=c+1|0;}}}return A6q.data[b+128|0];}return A1z(b);}
function A2K(a,b){if(a===b)return 1;return b instanceof HC&&b.bp==a.bp?1:0;}
function Xo(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function I7(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AYt(a,b){b=b;return BL(a.bp,b.bp);}
function AKP(){A6p=F($rt_intcls());}
function GS(){var a=this;B.call(a);a.C=null;a.M=0;}
function A6r(){var a=new GS();M(a);return a;}
function A5K(a){var b=new GS();GN(b,a);return b;}
function M(a){GN(a,16);}
function GN(a,b){a.C=B5(b);}
function W$(a,b,c){return AJy(a,a.M,b,c);}
function AJy(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cq(a,b,b+1|0);else{Cq(a,b,b+2|0);f=a.C.data;g=b+1|0;f[b]=45;b=g;}a.C.data[b]=Ik(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bc(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cq(a,b,b+i|0);if(e)e=b;else{f=a.C.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.C.data;b=e+1|0;f[e]=Ik($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AJ_(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Cq(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cq(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cq(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cq(a,b,b+8|0);d=b;}else{Cq(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A6s;AJ5(c,f);d=f.nb;g=f.m1;h=f.rj;i=1;j=1;if(h)j=2;k=9;l=ASZ(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cq(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.C.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.C.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.C.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.C.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AI4(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Cq(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cq(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cq(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cq(a,b,b+8|0);d=b;}else{Cq(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A6t;AFY(c,f);g=f.nA;h=f.mN;i=f.q9;j=1;k=1;if(i)k=2;l=18;m=ARI(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cq(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.C.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.C.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ANU(p,FM))d=0;else{d=GR(AGR(g,p));g=AU0(g,p);}e=a.C.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AGR(p,Bp(10));q=q+1|0;}if(h){e=a.C.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ASZ(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ARI(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=A6u.data;g=f.length-1|0;while(g>=0){if(IK(AU0(b,Ci(c,f[g])),FM)){d=d|e;c=Ci(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BN(a,b){return a.p9(a.M,b);}
function ADX(a,b,c){Cq(a,b,b+1|0);a.C.data[b]=c;return a;}
function M3(a,b){var c,d;c=a.C.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.C=KQ(a.C,d);}
function L(a){return EB(a.C,0,a.M);}
function ADI(a,b,c,d){return a.pQ(a.M,b,c,d);}
function WL(a,b,c,d,e){var f,g,h,i;Cq(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.C.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function J9(a,b){return a.pg(b,0,b.data.length);}
function Cq(a,b,c){var d,e,f,g;d=a.M;e=d-b|0;a.j4((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.C.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.M=a.M+(c-b|0)|0;}
var JP=G(0);
var K=G(GS);
function Mb(){var a=new K();A2y(a);return a;}
function A2y(a){M(a);}
function H(a,b){var c;c=a.M;if(b===null)b=C(23);MC(a,c,b);return a;}
function BX(a,b){MC(a,a.M,b);return a;}
function U(a,b){W$(a,b,10);return a;}
function HH(a,b){var c,d,e,f,g,h,i,j;c=a.M;d=1;if(A3H(b,FM)){d=0;b=A5e(b);}a:{if(DG(b,Bp(10))<0){if(d)Cq(a,c,c+1|0);else{Cq(a,c,c+2|0);e=a.C.data;f=c+1|0;e[c]=45;c=f;}a.C.data[c]=Ik(GR(b),10);}else{g=1;h=Bp(1);i=Df(Bp(-1),Bp(10));b:{while(true){j=Ci(h,Bp(10));if(DG(j,b)>0){j=h;break b;}g=g+1|0;if(DG(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cq(a,c,c+g|0);if(d)f=c;else{e=a.C.data;f=c+1|0;e[c]=45;}while(true){if(IK(j,FM))break a;e=a.C.data;c=f+1|0;e[f]=Ik(GR((Df(b,j))),10);b=AIp(b,j);j=Df(j,Bp(10));f=c;}}}return a;}
function EF(a,b){AJ_(a,a.M,b);return a;}
function AEp(a,b){BN(a,b);return a;}
function JB(a,b){MC(a,a.M,!b?C(32):C(33));return a;}
function AHz(a,b,c){var d,e,f,g,h,i;d=BL(b,c);if(d<=0){e=a.M;if(b<=e){if(d){f=e-c|0;a.M=e-(c-b|0)|0;g=0;while(g<f){h=a.C.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Ig;Y(i);N(i);}
function UZ(a,b){var c,d,e,f;if(b>=0){c=a.M;if(b<c){c=c-1|0;a.M=c;while(b<c){d=a.C.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ig;Y(f);N(f);}
function AYp(a,b,c,d,e){WL(a,b,c,d,e);return a;}
function ANI(a,b,c,d){ADI(a,b,c,d);return a;}
function AIC(a){return a.M;}
function Ec(a){return L(a);}
function APM(a,b){M3(a,b);}
function AYM(a,b,c){ADX(a,b,c);return a;}
function MC(a,b,c){var d,e,f;if(b>=0&&b<=a.M){a:{if(c===null)c=C(23);else if(Gr(c))break a;M3(a,a.M+J(c)|0);d=a.M-1|0;while(d>=b){a.C.data[d+J(c)|0]=a.C.data[d];d=d+(-1)|0;}a.M=a.M+J(c)|0;d=0;while(d<J(c)){e=a.C.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Ig;Y(c);N(c);}
var E4=G(Il);
var AKl=G(E4);
function A6v(a){var b=new AKl();AM0(b,a);return b;}
function AM0(a,b){Bm(a,b);}
var AJh=G(E4);
function A6w(a){var b=new AJh();AM$(b,a);return b;}
function AM$(a,b){Bm(a,b);}
var ABp=G(0);
var Da=G(0);
function BV(b,c){if(b!==null)b.bW();return c;}
var Yb=G(0);
function Ki(){var a=this;B.call(a);a.jj=0;a.nW=0;a.np=0;}
var A6x=0;function Ez(a){A6x=A6x-1|0;}
function Hu(a,b,c){KI(a,AI1(b,c,400,0));}
function Lj(a,b){return Lu(a,b,0.875);}
function Lu(a,b,c){return Eo(a,b)+c|0;}
function ZY(){var a=this;Ki.call(a);a.i9=null;a.db=null;a.wY=null;}
function EP(a){var b,c,d;b=a.db;c=a.nW;d=a.np;b.clearRect(0.0,0.0,c,d);}
function AAf(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.db;d="center";c.textAlign=d;break a;case 2:c=a.db;d="right";c.textAlign=d;break a;default:break a;}d=a.db;c="left";d.textAlign=c;}}
function Cm(a,b){KI(a,b.qZ);}
function KI(a,b){var c;if(a.wY!==b){c=a.db;a.wY=b;c.font=b;}}
function AI1(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BZ(a,b,c,d){var e,f,g;e=a.db;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eo(a,b){var c;c=$rt_ustr(b);return a.db.measureText(c).width;}
function Kc(a,b,c,d){var e,f;e=a.db;f=$rt_ustr(Ho(AJq([35,HT(b/16|0),HT(b%16|0),HT(c/16|0),HT(c%16|0),HT(d/16|0),HT(d%16|0)])));e.fillStyle=f;}
function AVK(){return {alpha:false};}
var AIo=G();
var AKV=G();
function BO(b,c){if(b===c)return 1;return b!==null?b.bJ(c):c!==null?0:1;}
function BD(b){if(b!==null)return b;b=new F5;Bm(b,C(21));N(b);}
var BT=G(0);
function Ns(b){return b;}
var Ce=G(0);
function ABz(){B.call(this);this.Ar=null;}
function A20(a,b){var c;c=a.Ar;c.qB=b;if(c.BJ)AGQ(b);}
var AGv=G();
function La(b,c){return b.data[c];}
var AJU=G();
var AEE=G(0);
function Fb(b,c,d){return ASY(C(34),Fz(C(15),b),c,d);}
var AKJ=G(0);
var AG1=G(0);
function L5(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C9(b,f+g|0);C7(c,0,d,f,g);return d;}
function Ly(b,c,d){C7(b,c,d,0,d.data.length);return d;}
function ZP(b,c,d){var e;if(c>0)C7(b,0,d,0,c);e=d.data.length;if(c<e)C7(b,c+1|0,d,c,e-c|0);return d;}
function AFJ(b,c,d,e){var f;if(c>0)C7(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C7(b,d,e,c,f-d|0);}return e;}
function CS(b){var c;c=new PV;c.kj=b;return c;}
function AFc(b,c){if(b.data.length!=c)b=C9(b,c);return b;}
function AG0(b,c,d){var e;e=c.data.length;if(e==d)c=C9(c,e*2|0);c.data[d]=b;return c;}
function ACj(b,c,d){var e;e=c.data.length;if(e==d)c=Os(c,e*2|0);c.data[d]=b;return c;}
function Or(b){return KQ(b,b.data.length);}
function L8(){var a=this;B.call(a);a.ue=null;a.ts=null;a.tp=null;a.sd=0;}
function ASY(a,b,c,d){var e=new L8();ASm(e,a,b,c,d);return e;}
function ASm(a,b,c,d,e){a.ue=b;a.ts=c;a.tp=d;a.sd=e;}
var AE9=G();
function AXi(b,c){return {style:b,weight:c};}
function ABA(){B.call(this);this.A6=null;}
function ALw(a,b){var c,d,e;c=a.A6;d=0;while(d<b.length){e=b[d];(Ev()).fonts.add(e);d=d+1|0;}c.BJ=1;b=c.qB;if(b!==null)AGQ(b);}
var ABy=G();
function A1Q(a,b){$rt_globals.console.info("font load error "+b);}
var LL=G();
var A6y=null;var A6z=null;function Bt(){if(A6y===null)A6y=AQT(A6A,0);return A6y;}
function En(){if(A6z===null)A6z=AQT(A6B,0);return A6z;}
function A32(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N7(b)&&(e+f|0)<=N7(d)){a:{b:{if(b!==d){g=HR(BF(b));h=HR(BF(d));if(g!==null&&h!==null){if(g===h)break b;if(!IQ(g)&&!IQ(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.d_;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AKi(n.constructor,o)?1:0)){NH(b,c,d,e,j);b=new Ji;Y(b);N(b);}j=j+1|0;k=m;}NH(b,c,d,e,f);return;}if(!IQ(g))break a;if(IQ(h))break b;else break a;}b=new Ji;Y(b);N(b);}}NH(b,c,
d,e,f);return;}b=new Ji;Y(b);N(b);}b=new BI;Y(b);N(b);}d=new F5;Bm(d,C(35));N(d);}
function C7(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N7(b)&&(e+f|0)<=N7(d)){NH(b,c,d,e,f);return;}b=new BI;Y(b);N(b);}
function NH(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function E3(){return Long_fromNumber(new Date().getTime());}
function AGM(){return A6f($rt_globals.performance.now()*1000000.0);}
var AGZ=G();
var AJb=G();
function Yj(b,c){var d,e,f;d=(Ev()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ev()).getElementById($rt_ustr(b)).appendChild(d);}
function AEJ(){return (Ev()).createElement("canvas");}
function AHE(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ARt(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ALt=G();
var WS=G();
function AZC(a,b){var c;c=new Bu;Bm(c,$rt_str(b.message));N(c);}
var AHb=G();
function H1(b){return $rt_str(b);}
var AIy=G();
function KQ(b,c){var d,e,f,g;b=b.data;d=B5(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Os(b,c){var d,e,f,g;b=b.data;d=DM(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Jm(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C9(b,c){var d,e,f,g;d=b.data;e=AGI(HR(BF(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AGB(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BX(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,C(37));U(c,e[d]);d=d+1|0;}BX(c,C(38));return L(c);}
function ASB(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BX(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,C(37));EF(c,e[d]);d=d+1|0;}BX(c,C(38));return L(c);}
function AUt(b){var c,d,e,f;if(b===null)return C(23);c=new K;M(c);BX(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,C(37));f=e[d];AI4(c,c.M,f);d=d+1|0;}BX(c,C(38));return L(c);}
function JC(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BU;Y(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AE3(b,c,d,e){var f,g;if(c>d){e=new BU;Y(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function K$(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A6h;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qf(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AKa(b,c){return ABE(b,0,b.data.length,c);}
function ABE(b,c,d,e){var f,g,h,i,j;f=BL(c,d);if(f>0){g=new BU;Y(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var ACG=G(0);
var AJK=G();
function AXD(a,b){return a.NJ(b);}
function AQo(a){return a.Ra();}
var AFW=G();
var Gg=G(0);
var SQ=G();
var BI=G(Bu);
var AJ8=G();
function N7(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A6C());}return b.data.length;}
function AGI(b,c){if(b===null){b=new F5;Y(b);N(b);}if(b===F($rt_voidcls())){b=new BU;Y(b);N(b);}if(c>=0)return ATJ(b.d_,c);b=new AEj;Y(b);N(b);}
function ATJ(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var F5=G(Bu);
var Ji=G(Bu);
function Dn(){B.call(this);this.mZ=0;}
var A6D=null;var A6E=null;var A6F=null;var A6G=null;var A6H=null;var A6I=null;var A6J=null;var A6K=null;var A6L=null;var A6M=null;function AUb(a){var b=new Dn();AFz(b,a);return b;}
function AFz(a,b){a.mZ=b;}
function PF(b){var c,d;c=A6I.data;if(b>=c.length)return AUb(b);d=c[b];if(d===null){d=AUb(b);A6I.data[b]=d;}return d;}
function Vv(b){var c,d;c=new BK;d=B5(1);d.data[0]=b;Jx(c,d);return c;}
function Mn(b){return b>=65536&&b<=1114111?1:0;}
function CU(b){return (b&64512)!=55296?0:1;}
function Dl(b){return (b&64512)!=56320?0:1;}
function OB(b){return !CU(b)&&!Dl(b)?0:1;}
function Jw(b,c){return CU(b)&&Dl(c)?1:0;}
function EN(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JY(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jg(b){return (56320|b&1023)&65535;}
function FO(b){return G3(b)&65535;}
function G3(b){if(A6G===null){if(A6J===null)A6J=AKs();A6G=AFL((A6J.value!==null?$rt_str(A6J.value):null));}return SH(A6G,b);}
function Fs(b){return G1(b)&65535;}
function G1(b){if(A6F===null){if(A6K===null)A6K=AKQ();A6F=AFL((A6K.value!==null?$rt_str(A6K.value):null));}return SH(A6F,b);}
function SH(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BL(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function AB$(b,c){if(c>=2&&c<=36){b=Yd(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Yd(b){var c,d,e,f,g,h,i,j,k,l;if(A6E===null){if(A6L===null)A6L=AJo();c=(A6L.value!==null?$rt_str(A6L.value):null);d=ASv(Gt(c));e=M$(d);f=BQ(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Pi(d)|0;j=j+Pi(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A6E=f;}g=A6E.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BL(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Ik(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HN(b){var c;if(b<65536){c=B5(1);c.data[0]=b&65535;return c;}return AJq([JY(b),Jg(b)]);}
function CG(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&OB(b&65535))return 19;if(A6H===null){if(A6M===null)A6M=AH2();d=(A6M.value!==null?$rt_str(A6M.value):null);e=Q(W4,16384);f=e.data;g=DM(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=NE(P(d,l));if(m==64){l=l+1|0;m=NE(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bc(c,NE(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=NE(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AOo(k,k+i|0,Os(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AOo(k,k+i|0,Os(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A6H=C9(e,j);}e=A6H.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.tD)o=p+1|0;else{c=d.ys;if(b>=c)return d.yB.data[b-c|0];c=p-1|0;}}return 0;}
function KT(b){a:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function HK(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CG(b)!=16?0:1;}
function YB(b){switch(CG(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function RN(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return YB(b);}return 1;}
function AIn(){A6D=F($rt_charcls());A6I=Q(Dn,128);}
function AKs(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AKQ(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AJo(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AH2(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Wn=G(0);
var AAy=G(0);
var EY=G(0);
var AIq=G();
function Ev(){return $rt_globals.window.document;}
function AZj(a){return a.IF();}
function A1h(a,b){return a.Kn($rt_str(b));}
function A08(a,b){a.HU($rt_str(b));}
function AWu(a,b){return a.NT($rt_str(b));}
function ALM(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ANA(a){return a.Rw();}
function A1e(a,b,c){return a.Qj($rt_str(b),$rt_str(c));}
function APx(a,b,c,d){a.C0($rt_str(b),Fg(c,"handleEvent"),d?1:0);}
function AVA(a){return a.O$();}
function AZ1(a){return !!a.KM();}
function A1M(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AQJ(a){return a.H3();}
function APb(a,b){a.Qa($rt_str(b));}
function AQ2(a){return !!a.HL();}
function AUy(a){return a.Kw();}
function AP1(a){return $rt_ustr(a.FP());}
function AMn(a,b){return a.Ic(b?1:0);}
function A2M(a){return a.KL();}
function AX2(a,b,c){return a.R7($rt_str(b),$rt_str(c));}
function AQB(a,b,c){return a.Os(b,c?1:0);}
function ATL(a,b,c){return !!a.JZ($rt_str(b),$rt_str(c));}
function AUW(a){return a.I_();}
function AO0(a){return $rt_ustr(a.LK());}
function ANL(a,b){return !!a.E6(b);}
function AOA(a,b){return a.Ma($rt_str(b));}
function AX_(a,b,c){return a.ID($rt_str(b),$rt_str(c));}
function AP9(a){return a.MX();}
function AVD(a,b){return a.RC($rt_str(b));}
function AOz(a){return $rt_ustr(a.MB());}
function AR4(a){a.HH();}
function ALC(a,b){return a.R$($rt_str(b));}
function ATh(a,b){return a.HZ($rt_str(b));}
function AVX(a,b){return a.HF($rt_str(b));}
function A1F(a){return $rt_ustr(a.M9());}
function AV4(a,b,c){return a.PO(b,c);}
function AZ_(a,b){return a.FO(b);}
function ASr(a){return a.JL();}
function ARp(a,b,c){a.EC($rt_str(b),Fg(c,"handleEvent"));}
function AQ$(a,b,c){return a.GF(b,c);}
function ATb(a){return !!a.Q$();}
function AT_(a,b){return a.Iz($rt_str(b));}
function AZt(a,b,c,d){a.Cn($rt_str(b),Fg(c,"handleEvent"),d?1:0);}
function ANG(a){return a.JM();}
function AWg(a,b,c){return a.Ib($rt_str(b),$rt_str(c));}
function AVh(a){return $rt_ustr(a.No());}
function A2H(a){return a.MP();}
function ARm(a){return a.M2();}
function AVf(a){return a.J0();}
function ARq(a,b,c){a.E5($rt_str(b),Fg(c,"handleEvent"));}
function AWD(a,b){return a.Lw(b);}
function AOH(a,b){a.F7($rt_str(b));}
function A0J(a){return $rt_ustr(a.Mu());}
function PE(){var a=this;B.call(a);a.yt=null;a.yu=null;a.yv=0;a.yw=null;a.yr=null;}
function ARZ(a,b){var c,d,e,f,g;c=a.yt;d=a.yu;e=a.yv;f=a.yw;g=a.yr;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AJv=G();
function ASG(b){return Math.exp(b);}
function AIr(b){return Math.log(b);}
function Jp(b,c){return AYU(b,c);}
function AYU(b,c){return Math.pow(b,c);}
function DQ(){return AUk();}
function AUk(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function ATM(b,c){return Math.max(b,c);}
function Wu(b){if(b<0)b= -b|0;return b;}
function AOM(b){return Math.abs(b);}
var Yu=G(0);
var RW=G(0);
var ZL=G(0);
var Tf=G(0);
var ADL=G(0);
var ACa=G(0);
var AIT=G();
function AZJ(a,b,c){a.E5($rt_str(b),Fg(c,"handleEvent"));}
function AYr(a,b,c){a.EC($rt_str(b),Fg(c,"handleEvent"));}
function AO2(a,b,c,d){a.Cn($rt_str(b),Fg(c,"handleEvent"),d?1:0);}
function AMB(a,b){return !!a.E6(b);}
function AWS(a,b,c,d){a.C0($rt_str(b),Fg(c,"handleEvent"),d?1:0);}
var BU=G(Bu);
var AEj=G(Bu);
var Ig=G(BI);
var AI7=G();
function AJD(){return "ping";}
function AHZ(b){return b===AJD()?1:0;}
var Zo=G(0);
var X6=G(0);
function AAG(){var a=this;B.call(a);a.tZ=null;a.ov=null;a.qR=null;a.ew=null;a.vw=null;a.xb=null;a.pR=null;a.hS=null;a.lv=0;a.EM=0;a.zB=null;a.gE=null;a.Bt=null;}
function Gj(a,b){var c;c=Ev();b=$rt_ustr(b);c.title=b;}
function S7(a){a.EM=$rt_globals.requestAnimationFrame(Bv(a.tZ,"onAnimationFrame"));}
function JA(a){a.lv=1;}
function ABd(a,b,c){var d,e;a.pR.et=BG(b,c);d=a.ew;e=b;d.width=e;d=a.ew;e=c;d.height=e;d=a.hS;X(d.c6,b,c);e=d.Y;d=d.c6;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gE.ce(a.hS.c6,Lr(a));a.gE.bM();}
function ZX(a,b){var c,d,e;c=a.zB;d=a.ew;if(BO(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.zB=b;}
function MZ(a){return $rt_globals.performance.now()/1000.0;}
function Lr(a){return $rt_globals.window.devicePixelRatio;}
function Jd(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEy(null,b);else{c=new ADl;d=$rt_globals.window.showDirectoryPicker();e=new ADk;e.ss=b;e.st=c;d.then(Bv(e,"f"),Bv(c,"f"));}}
function Kk(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEy(b,null);else{c=new ADW;d=$rt_globals.window.showOpenFilePicker();e=new ADV;e.sS=b;d.then(Bv(e,"f"),Bv(c,"f"));}}
function CW(a,b,c,d){var e,f,g,h;e=a.Bt;f=e.ix;if(f>0){g=e.pm.data;f=f-1|0;e.ix=f;Tz(e,b,c,d,g[f]);}else{h=e.mw;e=new ADm;e.uC=b;e.AR=c;e.Af=d;b=new TA;b.rv=e;c=h.mv;b.AI=c;if(c===null)h.pf=b;else c.uj=b;h.mv=b;h.b3=h.b3+1|0;h.lc=h.lc+1|0;}}
function RJ(a,b,c){var d,e;if(!L3()){b=new Bu;Bm(b,C(39));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new AAk;e.tm=b;b=ALq(c);d.then(Bv(e,"f"),Bv(b,"f"));}}
function TB(a,b,c,d){var e,f,g;if(!L3()){b=new Bu;Bm(b,C(39));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=Gt(b);A4i();b=A6N;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ACL;e.vH=c;c=ALq(d);b.then(Bv(e,"f"),Bv(c,"f"));}}
function VJ(a){return L3()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function ALq(b){var c;c=new OZ;c.Ao=b;return c;}
var BE=G(0);
var AJR=G();
var V=G(0);
var AJS=G();
var ZQ=G(0);
function Ut(){B.call(this);this.ye=null;}
function AX1(a,b){var c,d;c=b;b=a.ye;if(!(!b.gE.cj(c/1000.0)&&!b.lv)){d=b.hS.c6;if(Bc(d.a,d.b)){b.lv=0;b.gE.bM();}}S7(b);}
function Ur(){B.call(this);this.BP=null;}
function DC(a){JA(a.BP);}
var Zd=G(0);
function Us(){B.call(this);this.zM=null;}
function ANW(a,b,c){var d,e,f,g;c=a.zM;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.ew){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lr(c);ABd(c,GG(f.width*g),GG(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];ABd(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AHk=G();
function AU2(){return {box:'device-pixel-content-box'};}
function ASb(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CC=G(0);
function Uq(){B.call(this);this.rH=null;}
function AR3(a,b){b=a.rH;b.gE.ce(b.hS.c6,Lr(b));b.gE.bM();}
function AAq(){var a=this;B.call(a);a.mw=null;a.Bd=null;a.sC=null;a.pm=null;a.xh=0;a.ix=0;a.BL=null;}
function Tz(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.xh+1|0;a.xh=f;g=a.sC;h=CZ(f);g.j6=Oz(g,g.j6,h);h=ACb(g,h);Wq(h,b);Wq(h,b);g.mr=g.mr+1|0;b=a.Bd[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BK)g=$rt_ustr(c);else if(Je(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(Je(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(Je(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof SS)){b=new BU;c
=JX(BF(c));g=new K;M(g);H(H(g,C(40)),c);Bm(b,L(g));N(b);}c=c;g=c.ij;if(g===null)g=c.f_;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var U1=G(0);
function AUF(a,b){var c;c=a.b9();while(c.cE()){b.g(c.b_());}}
var Hw=G(0);
function T4(a){var b,c;b=new AAn;c=new Q_;c.yo=a;b.AC=c;return b;}
function AYe(a,b){var c,d;c=a.b9();d=0;while(c.cE()){if(b.I(c.b_())){c.po();d=1;}}return d;}
var FG=G();
function EC(a){return a.c2()?0:1;}
function Gp(a,b){var c,d,e,f,g,h;c=b.data;d=a.q;e=c.length;if(e<d)b=AGI(HR(BF(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B7(a);while(B_(f)){g=b.data;h=e+1|0;g[e]=Ca(f);e=h;}return b;}
function A0X(a,b){var c;c=a.b9();while(c.cE()){if(BO(c.b_(),b)){c.po();return 1;}}return 0;}
function HY(a,b){var c,d;c=0;d=b.b9();while(d.cE()){if(!a.zZ(d.b_()))continue;c=1;}return c;}
var NK=G(0);
var ML=G(0);
function Fv(){FG.call(this);this.b3=0;}
function ASe(a,b){a.ou(a.c2(),b);return 1;}
function B7(a){var b;b=new Xh;b.jl=a;b.qd=a.b3;b.lE=a.c2();b.hV=(-1);return b;}
function ARE(a,b,c){var d,e;if(b>=0&&b<=a.c2()){if(c.eI())return 0;d=c.b9();while(d.cE()){e=b+1|0;a.ou(b,d.b_());b=e;}return 1;}c=new BU;Y(c);N(c);}
function A1A(a,b,c){c=new Ef;Y(c);N(c);}
function Le(a,b){var c,d;c=a.c2();d=0;while(true){if(d>=c)return (-1);if(BO(b,a.kG(d)))break;d=d+1|0;}return d;}
function AQV(a,b){var c,d;if(!Je(b,ML))return 0;c=b;if(a.q!=c.q)return 0;d=0;while(d<c.q){if(!BO(BH(a,d),BH(c,d)))return 0;d=d+1|0;}return 1;}
var Mk=G(Fv);
var OS=G(0);
var AD6=G(0);
function TK(){var a=this;Mk.call(a);a.pf=null;a.mv=null;a.lc=0;}
var Lz=G(0);
function Ed(){var a=this;B.call(a);a.o5=null;a.o$=null;}
var Ex=G(0);
var VI=G(0);
var Pg=G(0);
function Yh(){var a=this;Ed.call(a);a.j6=null;a.mo=null;a.DM=null;a.mr=0;}
function AHr(a,b){var c;c=ACb(a,b);if(c===null)return null;a.j6=Lb(a,a.j6,b);a.mr=a.mr+1|0;return c.ks;}
function ACb(a,b){var c,d;c=a.j6;while(true){if(c===null)return null;d=M0(a.mo,b,c.l4);if(!d)break;c=d>=0?c.b5:c.bU;}return c;}
function Oz(a,b,c){var d,e;if(b===null){b=new KO;d=null;b.l4=c;b.ks=d;b.gK=1;b.gV=1;return b;}e=M0(a.mo,c,b.l4);if(!e)return b;if(e>=0)b.b5=Oz(a,b.b5,c);else b.bU=Oz(a,b.bU,c);EZ(b);return M9(b);}
function Lb(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=M0(a.mo,c,b.l4);if(d<0)b.bU=Lb(a,b.bU,c);else if(d>0)b.b5=Lb(a,b.b5,c);else{e=b.b5;if(e===null)return b.bU;f=b.bU;g=Q(KO,e.gK).data;h=0;while(true){b=e.bU;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b5;while(h>0){h=h+(-1)|0;j=g[h];j.bU=b;EZ(j);b=M9(j);}e.b5=b;e.bU=f;EZ(e);b=e;}EZ(b);return M9(b);}
function AAs(){B.call(this);this.z2=null;}
function AAt(){var a=this;B.call(a);a.ze=null;a.zd=0;}
function AUV(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.ze;d=a.zd;AHZ(b.data);e=c.mw;f=e.pf;if(f===null)g=null;else{g=f.uj;e.pf=g;if(g!==null)g.AI=null;else e.mv=null;e.lc=e.lc-1|0;e.b3=e.b3+1|0;g=f.rv;}if(g!==null)Tz(c,g.uC,g.AR,g.Af,d);else{h=c.pm.data;i=c.ix;c.ix=i+1|0;h[i]=d;}c=c.BL;b=b.data;if(!AHZ(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BU;Y(b);N(b);}if(b.length<1){b=new BU;AGE(b);N(b);}e=CZ(b[0]);c=AHr(c.z2,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?H1(Ns(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A3L(Ns(e)):(e instanceof $rt_globals.File?1:0)?AKd(null,Ns(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AKd(Ns(e),null);k=l;}c.g(h);}}
function AFe(){var a=this;B.call(a);a.cu=null;a.jA=null;a.EW=null;a.et=null;}
function A43(a,b){var c=new AFe();A1w(c,a,b);return c;}
function A1w(a,b,c){var d,e,f,g;a.et=null;a.jA=b;d=new YQ;d.bG=CN(Q(Cr,0));d.oy=CN(Q(Cr,0));d.bS=CN(Q(CF,0));d.fw=CN(Q(EI,0));d.cT=CN(Q(CY,0));d.gN=CN(Q(EV,0));d.hh=CN(Q(E_,0));d.mm=CN(Q(V,0));d.mX=CN(Q(V,0));d.dp=c;a.cu=d;e=$rt_globals.window;f=Q(Da,14);g=f.data;d=new AC6;d.q_=a;g[0]=C5(a,b,C(41),d);d=new AC7;d.Ac=a;g[1]=C5(a,b,C(42),d);d=new AC8;d.x4=a;g[2]=C5(a,b,C(43),d);d=new AC9;d.wf=a;g[3]=C5(a,b,C(44),d);d=new AC$;d.tQ=a;g[4]=C5(a,b,C(45),d);d=new AC_;d.rs=a;g[5]=C5(a,b,C(46),d);d=new ADa;d.BX=a;g[6]
=C5(a,b,C(47),d);d=new ADb;d.zO=a;g[7]=C5(a,b,C(48),d);d=new ADc;d.xH=a;g[8]=C5(a,b,C(49),d);d=new ADd;d.vK=a;g[9]=C5(a,b,C(50),d);d=new VY;d.vh=a;g[10]=C5(a,b,C(51),d);d=new VZ;d.us=a;e.addEventListener("paste",Bv(d,"handleEvent"),!!1);g[11]=Vr(a,e,C(52),d);d=new V0;d.wV=a;g[12]=C5(a,e,C(53),d);d=new V1;d.Bz=a;g[13]=C5(a,e,C(54),d);c=new Rk;c.CI=f;a.EW=c;e=new AD2;e.yE=b;b.onpointerdown=Bv(e,"f");e=new AD3;e.xS=b;b.onpointerup=Bv(e,"f");}
function WM(){return (Ev()).activeElement;}
function C5(a,b,c,d){b.addEventListener($rt_ustr(c),Bv(d,"handleEvent"));return Vr(a,b,c,d);}
function Vr(a,b,c,d){var e;e=new Za;e.Ek=b;e.Em=c;e.El=d;return e;}
function ABB(a,b){var c;c=new ACd;c.we=b;return c;}
function Fa(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.jA.getBoundingClientRect();e=BG(GG((b.clientX-d.left)*c),GG((b.clientY-d.top)*c));f=AJ2(a.et);d=new OO;AB0(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.k=e;d.Ea=f;return d;}
function V4(a,b,c){var d,e,f,g;d=new Qp;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;AB0(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.oQ=0;d.ei=e;d.bm=f;d.jR=c;d.zR=g;return d;}
function D7(a,b){b.stopPropagation();b.preventDefault();}
function NY(){var a=this;B.call(a);a.pz=null;a.ch=null;a.Y=null;a.l6=0;a.AH=null;a.EB=0;a.Dp=0;a.k9=null;a.kZ=null;a.DJ=null;a.E_=null;a.uR=null;a.xk=null;a.iT=null;a.ie=null;a.j0=null;a.DR=null;a.se=null;a.c6=null;a.BE=null;a.pM=0;a.mG=0;a.od=0;a.n3=0;a.lo=0;a.n$=null;a.ok=0.0;a.pU=0.0;}
function AKO(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c6=new Bg;a.pM=0;a.n$=new ADi;a.pz=c;a.l6=d;g=$rt_str(b.getParameter(7938));h=new K;M(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(L(h)));a.Y=b;a.ch=KM(c,4,4,1);i=ALI(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B5(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Rc;JD();c=A6O;m.eX=b;m.h5=c;m.t4=j.length/c.nd|0;m.BA
=l.length;n=b.createBuffer();m.w$=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.wh=null;n=b.createBuffer();m.vQ=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.se=m;a.Dp=ND(g,C(56));c=new Zb;c.d5=b;a.AH=c;a.ok=e;a.pU=f;d=b.getParameter(3379);a.EB=d;c=new K;M(c);U(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(L(c)));k=Q(Di,9);i=k.data;c=A3O(b);a.k9=c;i[0]=c;c=A4G(b,C(58));a.kZ=c;i[1]=c;c=new ZA;H6(c,b,C(59),
C(60),A6O);a.DJ=c;i[2]=c;c=A5v(b);a.E_=c;i[3]=c;c=new PL;VQ(c,b,C(61),C(62));a.uR=c;i[4]=c;c=A5H(b);a.xk=c;i[5]=c;c=A4m(b);a.iT=c;i[6]=c;c=A5q(b);a.ie=c;i[7]=c;c=A5r(b);a.j0=c;i[8]=c;a.DR=k;ADP(b,C(63));}
function Iq(a,b,c){return Gy(a,b,c,400,0);}
function HF(a,b,c){return KM(a.pz,b,c,0);}
function D4(a,b,c,d){return KM(a.pz,b,c,d);}
function ADw(a,b,c,d,e,f){var g,h;Cm(a.ch,c);g=D4(a,Lj(a.ch,b)+(d*2|0)|0,e,f);Cm(g,c);BZ(g,b,d,LN(c,e));h=CX(a);CM(h,g);Ez(g);return h;}
function EH(a,b){var c,d,e,f,g;c=a.Y;d=b.bn;e=b.bs;f=b.bf;g=b.bC;c.clearColor(d,e,f,g);a.Y.clear(16384);}
function B$(a,b){var c;if(b==a.mG)return b;if(!b)a.Y.disable(3042);else{a.Y.enable(3042);a.Y.blendFuncSeparate(770,771,1,1);}c=a.mG;a.mG=b;return c;}
function NG(a,b,c){LW(a,b.a,b.b,c);}
function LW(a,b,c,d){var e,f;e=d.a;f=d.b;a.n3=1;a.lo=1;d=a.n$;d.tG=b;d.tH=c;d.tF=e;d.tE=f;AB2(a);}
function Gc(a){a.n3=0;a.lo=0;AB2(a);}
function AB2(a){var b,c,d,e,f,g;b=a.od;c=a.n3;if(b!=c){a.od=c;if(!c)a.Y.disable(3089);else a.Y.enable(3089);}if(a.od&&a.lo){a.lo=0;d=a.Y;e=a.n$;b=e.tG;c=a.c6.b-e.tH|0;f=e.tE;c=c-f|0;g=e.tF;d.scissor(b,c,g,f);}}
function F3(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.se;c=a.pM;d=b.h5.Al;e=b.eX;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eX;h=b.w$;e.bindBuffer(34962,h);i=b.h5.qw.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eX;m=k.jH;n=k.gv;o=b.h5.nd*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gv|0;j=j+1|0;}a:{e=b.wh;if(e!==null){c=0;b.eX.bindBuffer(34962,e);i=b.h5.zx.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eX;j=e.jH;p=e.gv;m=e.sl;n=b.h5.yC;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gv|0;g=g+1|0;}}}q=b.vQ;if(q===null){c=b.t4;if(c>0)b.eX.drawArrays(4,0,c);}else{b.eX.bindBuffer(34963,q);k=b.eX;g=b.BA;k.drawElements(4,g,5123,0);}a.pM=d;}
function Bs(a,b,c,d,e){Gv(a,a.k9);GF(a.k9,a.Y,b,c,d,a.c6);d=a.k9;FI(a.Y,d.Bh,e);F3(a);}
function AEl(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Gv(a,a.ie);GF(a.ie,a.Y,b,c,d,a.c6);j=a.ie;d=a.Y;k=j.wG;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.wF;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.ie;FI(a.Y,d.xx,i);F3(a);}
function Mf(a,b,c,d,e,f,g,h){var i,j;Gv(a,a.j0);GF(a.j0,a.Y,b,c,d,a.c6);d=a.j0;i=a.Y;j=d.t2;i.uniform2f(j,e,f);FI(i,d.yh,g);d=a.j0;FI(a.Y,d.xa,h);F3(a);}
function DJ(a,b,c,d,e,f,g,h,i){var j;j=!i?a.uR:a.xk;Gv(a,j);ALa(j,a.Y,!i?a.pU:a.ok);GF(j,a.Y,b,c,d,a.c6);N4(j,a.Y,f);AEq(j,a.Y,f,e);AJ$(j,a.Y,g,h);F3(a);}
function CX(a){var b,c;b=new Iu;c=a.AH;b.eV=new Bg;b.eN=c;b.f4=c.d5.createTexture();A6P=A6P+1|0;return b;}
function M2(a,b){ADP(a.Y,b);}
function Gv(a,b){var c,d;if(b!==a.BE){c=a.Y;d=b.bE;c.useProgram(d);a.BE=b;}}
function Uj(){var a=this;NY.call(a);a.C_=null;a.DK=null;}
function Gy(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.ch;g=AI1(b,c,d,e);KI(f,g);h=f.db.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eo(f,C(64));m=Eo(f,C(65));h=new LC;n=g;h.oj=b;h.o2=c;h.CD=d;h.CV=e;h.eq=i;h.eK=j;h.Cu=l;h.p7=k;h.qZ=n;h.tu=C0(i);h.Dz=C0(h.eK);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.Cz=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.Cq=b;return h;}
function Cv(){B.call(this);this.z=null;}
function El(a,b){a.z=b;}
function A2I(a,b){return 0;}
function YQ(){var a=this;B.call(a);a.bG=null;a.oy=null;a.bS=null;a.fw=null;a.cT=null;a.gN=null;a.hh=null;a.mm=null;a.mX=null;a.dp=null;a.fa=null;a.xN=0;}
function Tv(a,b){var c,d,e,f;DC(a.dp);c=(B3(!b.jR?a.oy:a.bG)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].I(b);if(f)break;if(b.oQ)break;e=e+1|0;}return f;}
function RH(a,b,c){var d,e,f;DC(a.dp);d=(B3(a.gN)).data;e=d.length;f=0;while(f<e){if(d[f].h9(b,c))return 1;f=f+1|0;}return 0;}
function AC6(){B.call(this);this.q_=null;}
function AZV(a,b){var c;c=a.q_;if(Tv(c.cu,V4(c,b,1)))D7(c,b);}
function AC7(){B.call(this);this.Ac=null;}
function AZ6(a,b){var c;c=a.Ac;if(Tv(c.cu,V4(c,b,0)))D7(c,b);}
function AC8(){B.call(this);this.x4=null;}
function AQG(a,b){var c,d,e,f,g,h,i;c=a.x4;if(c.et!==null){a:{b:{d=Fa(c,b);e=c.cu;DC(e.dp);f=e.fa;if(f!==null)f.g(d);else{g=(B3(e.bS)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bT(d))break a;i=i+1|0;}}}}D7(c,b);}}
function AC9(){B.call(this);this.wf=null;}
function AYK(a,b){var c,d,e,f,g,h;c=a.wf;b.button;if(c.et!==null)a:{d=Fa(c,b);c=c.cu;e=b.button;DC(c.dp);if(c.fa===null){f=(B3(c.bS)).data;g=f.length;h=0;while(h<g){b=f[h].cn(d,e);if(b!==null){c.fa=b;c.xN=e;break a;}h=h+1|0;}}}}
function AC$(){B.call(this);this.tQ=null;}
function AYW(a,b){var c,d,e,f,g,h,i;c=a.tQ;b.button;if(c.et!==null){d=Fa(c,b);e=c.cu;f=b.button;DC(e.dp);if(f==e.xN&&e.fa!==null)e.fa=null;g=(B3(e.bS)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dC(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)D7(c,b);}}
function AC_(){B.call(this);this.rs=null;}
function AR9(a,b){var c,d,e,f,g,h,i,j,k;c=a.rs;if(c.et!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cu;f=Fa(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DC(e.dp);i=(B3(e.fw)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dz(f,d,h))break b;k=k+1|0;}}D7(c,b);}}
function ADa(){B.call(this);this.BX=null;}
function AO1(a,b){var c,d,e,f,g,h,i,j;c=a.BX;if(c.et!==null){d=Fa(c,b);e=c.cu;f=b.button;g=b.detail;DC(e.dp);h=(B3(e.bS)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cA(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)D7(c,b);}}
function ADb(){B.call(this);this.zO=null;}
function A28(a,b){var c,d,e,f,g,h,i;c=a.zO;if(c.et!==null){d=Fa(c,b);e=c.cu;DC(e.dp);f=(B3(e.cT)).data;g=f.length;h=0;a:{while(h<g){if(f[h].I(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)D7(c,b);}}
function ADc(){B.call(this);this.xH=null;}
function AOx(a,b){var c,d,e,f,g,h;b=a.xH.cu;if(b.fa!==null){c=En();d=Cy(b.fa);e=new K;M(e);H(H(e,C(67)),d);Bk(c,L(e));}f=(B3(b.mX)).data;g=f.length;h=0;while(h<g){f[h].f();h=h+1|0;}DC(b.dp);}
function ADd(){B.call(this);this.vK=null;}
function ASO(a,b){var c,d,e;b=a.vK.cu;c=(B3(b.mm)).data;d=c.length;e=0;while(e<d){c[e].f();e=e+1|0;}if(b.fa!==null)b.fa=null;DC(b.dp);}
function VY(){B.call(this);this.vh=null;}
function A2J(a,b){var c;c=a.vh;if(c.et!==null)Fa(c,b);}
function VZ(){B.call(this);this.us=null;}
function AQm(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.us;if(WM()===c.jA){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B3(c.cu.hh)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cp();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cu.dp;m=new Py;m.vW=k;m.vX=l;g.getAsString(Bv(m,"accept"));D7(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new K;M(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(L(l)));}e=e+1
|0;}}}
function V0(){B.call(this);this.wV=null;}
function AQL(a,b){var c;c=a.wV;if(WM()===c.jA&&RH(c.cu,ABB(c,b),0))D7(c,b);}
function V1(){B.call(this);this.Bz=null;}
function A0b(a,b){var c;c=a.Bz;if(WM()===c.jA&&RH(c.cu,ABB(c,b),1))D7(c,b);}
var ABU=G(0);
var AB4=G();
function KM(a,b,c,d){var e,f,g,h,i;e=new ZY;e.jj=d;A6x=A6x+1|0;e.nW=b;e.np=c;f=(Ev()).createElement("canvas");e.i9=f;g=b;f.width=g;h=e.i9;f=c;h.height=f;if(!d)g=e.i9.getContext("2d");else{i=e.i9;h=AVK();g=i.getContext("2d",h);}e.db=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AB3=G();
function APC(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function OQ(){var a=this;B.call(a);a.P=null;a.o=null;a.bA=null;}
var KG=G();
var A6h=null;function M0(a,b,c){return b.ms(c);}
function AF4(){A6h=new KG;}
function AHy(){var a=this;B.call(a);a.dk=null;a.gc=null;a.c_=0;}
function CN(a){var b=new AHy();AOY(b,a);return b;}
function AOY(a,b){a.dk=b;}
function MO(a,b){return a.dk.data[b];}
function Ba(a,b){var c,d,e;c=a.c_;d=a.dk;if(c==d.data.length)a.dk=C9(d,c+4|0);d=a.dk.data;e=a.c_;a.c_=e+1|0;d[e]=b;a.gc=null;}
function Sh(a,b){var c,d,e,f;c=0;while(true){d=a.dk.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.c_=a.c_-1|0;a.gc=null;}c=c+1|0;}}
function B3(a){var b;b=a.gc;if(!(b!==null&&b.data.length==a.c_))a.gc=C9(a.dk,a.c_);return a.gc;}
var D9=G(0);
var Cr=G(0);
var CF=G(0);
function AYl(a,b){return 0;}
function ATu(a,b,c){return null;}
function AL8(a,b,c){return 0;}
function A0o(a,b,c,d){return 0;}
var EI=G(0);
var CY=G(0);
var EV=G(0);
var C1=G(0);
var E_=G(0);
function Rk(){B.call(this);this.CI=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BG(a,b){var c=new Bg();QN(c,a,b);return c;}
function AJ2(a){var b=new Bg();ANE(b,a);return b;}
function QN(a,b,c){a.a=b;a.b=c;}
function ANE(a,b){a.a=b.a;a.b=b.b;}
function Cn(a,b){a.a=b.a;a.b=b.b;}
function X(a,b,c){a.a=b;a.b=c;}
function AH7(a){var b,c,d;b=a.a;c=a.b;d=new K;M(d);U(H(U(H(d,C(70)),b),C(71)),c);return L(d);}
function APt(a,b){var c;a:{b:{if(a!==b){if(BF(b)!==BF(a))break b;if(!J3(a,b))break b;}c=1;break a;}c=0;}return c;}
function J3(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function ADi(){var a=this;B.call(a);a.tG=0;a.tH=0;a.tF=0;a.tE=0;}
var AG3=G();
var AIG=G(0);
function Zb(){B.call(this);this.d5=null;}
function Oc(){var a=this;B.call(a);a.bE=null;a.Fc=null;}
function AKc(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new K;M(h);H(H(h,f),g);g=L(h);b.deleteShader(e);Bk(Bt(),g);Bk(En(),C(74));Bk(En(),d);Bk(En(),C(74));b=new Bu;Bm(b,g);N(b);}
function Di(){var a=this;Oc.call(a);a.xG=null;a.sI=null;a.nS=null;}
function A6Q(a,b,c,d){var e=new Di();H6(e,a,b,c,d);return e;}
function H6(a,b,c,d,e){var f,g,h,i,j,k;a.Fc=e;f=AKc(b,35633,c);d=AKc(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bE=g;h=e.uc.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bE;k=c.jH;c=c.sQ;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bE;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADP(b,C(75));a.nS=new Bg;c=a.bE;a.xG=b.getUniformLocation(c,"uResolution");c=a.bE;a.sI=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new K;M(c);H(H(c,C(76)),d);Bm(b,L(c));N(b);}
function AFn(a,b,c){var d,e,f;if(!J3(a.nS,c)){Cn(a.nS,c);d=a.xG;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function GF(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.sI;b.uniform4f(e,i,l,h,j);AFn(a,b,f);}
function AKT(){Di.call(this);this.Bh=null;}
function A3O(a){var b=new AKT();AX8(b,a);return b;}
function AX8(a,b){var c;JD();H6(a,b,C(59),C(77),A6O);c=a.bE;a.Bh=b.getUniformLocation(c,"uColor");}
function Fw(){Di.call(this);this.tL=null;}
function A4G(a,b){var c=new Fw();ABD(c,a,b);return c;}
function A6R(a,b,c){var d=new Fw();ABH(d,a,b,c);return d;}
function ABD(a,b,c){ABH(a,b,C(59),c);}
function ABH(a,b,c,d){JD();H6(a,b,c,d,A6O);c=a.bE;a.tL=b.getUniformLocation(c,"sDiffuse");}
function N4(a,b,c){var d;d=a.tL;b.uniform1i(d,0);b.activeTexture(33984);c=c.f4;b.bindTexture(3553,c);}
var ZA=G(Di);
function AFZ(){Fw.call(this);this.Ck=null;}
function A5v(a){var b=new AFZ();ARF(b,a);return b;}
function ARF(a,b){var c;ABD(a,b,C(78));c=a.bE;a.Ck=b.getUniformLocation(c,"uContrast");}
function Hq(){var a=this;Fw.call(a);a.r7=null;a.sY=null;a.t0=null;a.Ay=null;a.qI=0.0;}
function A6S(a,b,c){var d=new Hq();VQ(d,a,b,c);return d;}
function VQ(a,b,c,d){ABH(a,b,c,d);c=a.bE;a.r7=b.getUniformLocation(c,"uTexTransform");c=a.bE;a.sY=b.getUniformLocation(c,"uColor");c=a.bE;a.t0=b.getUniformLocation(c,"uBgColor");c=a.bE;a.Ay=b.getUniformLocation(c,"uTextPow");}
function ALa(a,b,c){var d;if(a.qI!==c){a.qI=c;d=a.Ay;b.uniform2f(d,c,0.0);}}
function AJ$(a,b,c,d){FI(b,a.sY,c);FI(b,a.t0,d);}
function AEq(a,b,c,d){var e,f,g,h,i,j;c=c.eV;e=c.a;f=c.b;g=d.bn;h=e;g=g/h;i=d.bs;j=f;i=i/j;h=d.bf/h;j=d.bC/j;c=a.r7;b.uniform4f(c,g,i,h,j);}
var PL=G(Hq);
var AHP=G(Hq);
function A5H(a){var b=new AHP();AW1(b,a);return b;}
function AW1(a,b){VQ(a,b,C(61),C(79));}
function AIU(){var a=this;Fw.call(a);a.wi=null;a.wg=null;a.sZ=null;}
function A4m(a){var b=new AIU();AN6(b,a);return b;}
function AN6(a,b){var c,d;ABD(a,b,C(80));c=a.bE;a.wi=b.getUniformLocation(c,"uColorB");d=a.bE;a.wg=b.getUniformLocation(d,"uColorF");d=a.bE;a.sZ=b.getUniformLocation(d,"uContrast");}
function AKn(){var a=this;Di.call(a);a.xx=null;a.wG=null;a.wF=null;}
function A5q(a){var b=new AKn();AW3(b,a);return b;}
function AW3(a,b){var c;JD();H6(a,b,C(59),C(81),A6O);c=a.bE;a.xx=b.getUniformLocation(c,"uColor");c=a.bE;a.wG=b.getUniformLocation(c,"uPoints1");c=a.bE;a.wF=b.getUniformLocation(c,"uPoints2");}
function AEU(){var a=this;Di.call(a);a.xa=null;a.t2=null;a.yh=null;}
function A5r(a){var b=new AEU();AVY(b,a);return b;}
function AVY(a,b){var c;JD();H6(a,b,C(59),C(82),A6O);c=a.bE;a.xa=b.getUniformLocation(c,"uColor");c=a.bE;a.t2=b.getUniformLocation(c,"uBaseline");c=a.bE;a.yh=b.getUniformLocation(c,"uScaleHExp");}
var Z$=G(0);
var ALr=G(0);
function FI(b,c,d){var e,f,g,h;e=d.bn;f=d.bs;g=d.bf;h=d.bC;b.uniform4f(c,e,f,g,h);}
function ADP(b,c){var d,e;d=b.getError();if(d){b=Bt();e=new K;M(e);U(H(e,c),d);Bk(b,L(e));}}
function Za(){var a=this;B.call(a);a.Ek=null;a.Em=null;a.El=null;}
function Rc(){var a=this;B.call(a);a.eX=null;a.h5=null;a.w$=null;a.wh=null;a.vQ=null;a.t4=0;a.BA=0;}
function CI(){var a=this;B.call(a);a.Ej=null;a.fU=0;}
function DK(a,b,c){a.Ej=b;a.fU=c;}
function G8(){var a=this;CI.call(a);a.uc=null;a.qw=null;a.zx=null;a.nd=0;a.yC=0;a.Al=0;}
var A6O=null;var A6T=null;function JD(){JD=Bn(G8);APf();}
function APf(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new G8;c=Q(Eh,2);d=c.data;A15();d[0]=A6U;d[1]=A6V;JD();DK(b,C(83),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.p5.fU){case 0:f=f+l.gv|0;h=h+1|0;break a;case 1:e=e+l.gv|0;g=g+1|0;break a;default:}}i=i|1<<l.jH;k=k+1|0;}b.uc=c;b.nd=e;b.yC=f;b.Al=i;c=Q(Eh,g);m=c.data;b.qw=c;c=Q(Eh,h);n=c.data;b.zx=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.p5.fU){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A6O
=b;c=Q(G8,1);c.data[0]=b;A6T=c;}
var Mu=G(0);
var S$=G(0);
var AB9=G(0);
var GU=G();
function MX(){GU.call(this);this.Ca=null;}
function AFG(){var a=this;MX.call(a);a.Dn=0;a.nm=0;a.lG=null;a.m2=null;a.uN=null;}
function AQT(a,b){var c=new AFG();A1O(c,a,b);return c;}
function A1O(a,b,c){a.Ca=b;b=new K;M(b);a.lG=b;a.m2=B5(32);a.Dn=c;AFA();a.uN=A6W;}
function ABm(a,b,c,d){var e,$$je;e=a.Ca;if(e===null)a.nm=1;if(!(a.nm?0:1))return;a:{try{e.mV(b,c,d);break a;}catch($$e){$$je=EW($$e);if($$je instanceof I$){}else{throw $$e;}}a.nm=1;}}
function XI(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AJP(b,c,d-c|0);e=DM(Bd(16,Be(e.length,1024)));g=AJC(e,0,e.data.length);h=a.uN;i=new QI;b=DM(1);j=b.data;j[0]=63;Hk();k=A6X;i.nV=k;i.nq=k;c=j.length;if(c&&c>=i.wE){i.Ei=h;i.sO=b.hD();i.Di=2.0;i.wE=4.0;i.ym=B5(512);i.rq=DM(512);k=A6Y;if(k===null){i=new BU;Bm(i,C(84));N(i);}i.nV=k;i.nq=k;a:while(true){if(i.ly==3){f=new C_;Y(f);N(f);}i.ly=2;b:{while(true){try{k=AEM(i,f,g);}catch($$e){$$je=EW($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(I5(k))
{d=Ch(f);if(d<=0)break b;k=Eu(d);}else if(Ic(k))break;h=!Ml(k)?i.nV:i.nq;c:{if(h!==A6Y){if(h===A6Z)break c;else break b;}d=Ch(g);b=i.sO;l=b.data.length;if(d<l){k=A60;break b;}ADu(g,b,0,l);}FC(f,f.Z+Lc(k)|0);}}l=Ic(k);ABm(a,e,0,g.Z);PU(g);if(!l){while(true){d=i.ly;if(d!=2&&d!=4){f=new C_;Y(f);N(f);}f=A61;if(f===f)i.ly=3;l=Ic(f);ABm(a,e,0,g.Z);PU(g);if(!l)break;}return;}}N(AWA(f));}i=new BU;Bm(i,C(85));N(i);}
function Bk(a,b){var c,d,e,f,g,h,i,j;BN(BX(a.lG,b),10);b=a.lG;c=b.M;d=a.m2;if(c>d.data.length)d=B5(c);e=0;f=0;if(e>c){b=new BI;Bm(b,C(86));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.C.data;j=e+1|0;g[f]=i[e];f=h;e=j;}XI(a,d,0,c);a.lG.M=0;}
function HB(){GU.call(this);this.E1=null;}
function Wd(a){a.E1=DM(1);}
var LJ=G(HB);
var A6A=null;function APv(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AGK(){var b;b=new LJ;Wd(b);A6A=b;}
function Eh(){var a=this;CI.call(a);a.sQ=null;a.p5=null;a.gv=0;a.sl=0;a.jH=0;}
var A6U=null;var A6V=null;var A62=null;function A15(){A15=Bn(Eh);AXB();}
function A3Y(a,b,c,d,e,f,g){var h=new Eh();UX(h,a,b,c,d,e,f,g);return h;}
function UX(a,b,c,d,e,f,g,h){A15();DK(a,b,c);a.sQ=d;a.p5=e;a.gv=f;a.sl=g;a.jH=h;}
function AXB(){var b;b=new Eh;AQC();UX(b,C(87),0,C(88),A63,2,0,0);A6U=b;b=A3Y(C(89),1,C(90),A63,2,0,1);A6V=b;A62=I(Eh,[A6U,b]);}
function MP(){var a=this;B.call(a);a.D_=null;a.EE=null;}
function AGT(b){var c,d;if(Gr(b))N(AJf(b));if(!AKE(P(b,0)))N(AJf(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AKE(d))break a;else N(AJf(b));}}c=c+1|0;}}
function AKE(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mx=G(MP);
var A6W=null;function AFA(){AFA=Bn(Mx);AN5();}
function AG5(a){var b,c;b=new Td;b.gt=C(91);Hk();c=A6X;b.jq=c;b.n1=c;b.Ez=a;b.wL=0.3333333432674408;b.CX=0.5;b.xB=DM(512);b.Aa=B5(512);return b;}
function AN5(){var b,c,d,e,f;b=new Mx;AFA();c=Q(BK,0);d=c.data;AGT(C(92));e=d.length;f=0;while(f<e){AGT(d[f]);f=f+1|0;}b.D_=C(92);b.EE=c.hD();A6W=b;}
function Yl(){var a=this;B.call(a);a.gj=null;a.qk=null;a.mH=null;a.Aq=null;a.sz=null;a.sL=null;}
function AJi(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gj,b,c));}
function O7(a,b){var c,d,e,f,g,h,i,$$je;c=new BK;d=b;while(a.qk[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gj,b,d));f=e.data;Ff();d=f.length;AFA();g=A6W;h=AJC(e,0,d);a:{try{i=AG5(g);Hk();g=AIN(AGn(AK7(i,A6Y),A6Y),h);break a;}catch($$e){$$je=EW($$e);if($$je instanceof Gf){g=$$je;}else{throw $$e;}}h=new ADD;h.kM=1;h.k7=1;h.iS=C(93);h.nr=g;N(h);}if(!g.Z&&g.eo==g.ol)c.cc=g.iD;else{f=B5(Ch(g));e=f.data;c.cc=f;Ps(g,f,0,e.length);}return c;}
function WO(a,b){var c,d,e;c=new BK;d=b>>>1|0;e=d;while(a.mH[e]){e=e+1|0;}d=e-d|0;Jx(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gj,b,d)));return c;}
var H2=G(CI);
var A64=null;var A63=null;var A65=null;function AQC(){AQC=Bn(H2);AWL();}
function AN0(a,b){var c=new H2();AKL(c,a,b);return c;}
function AKL(a,b,c){AQC();DK(a,b,c);}
function AWL(){var b;A64=AN0(C(94),0);b=AN0(C(95),1);A63=b;A65=I(H2,[A64,b]);}
var NM=G(HB);
var A6B=null;function AOd(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AH5(){var b;b=new NM;Wd(b);A6B=b;}
function AGY(){BU.call(this);this.Cp=null;}
function AJf(a){var b=new AGY();AS6(b,a);return b;}
function AS6(a,b){Y(a);a.Cp=b;}
var Uu=G(Ew);
var Mw=G(0);
function AD2(){B.call(this);this.yE=null;}
function ASx(a,b){a.yE.setPointerCapture(b.pointerId);}
function AD3(){B.call(this);this.xS=null;}
function AMP(a,b){a.xS.releasePointerCapture(b.pointerId);}
function H_(){var a=this;B.call(a);a.ol=0;a.Z=0;a.eo=0;a.jM=0;}
function ACS(a,b){a.jM=(-1);a.ol=b;a.eo=b;}
function FC(a,b){var c,d,e;if(b>=0&&b<=a.eo){a.Z=b;if(b<a.jM)a.jM=0;return a;}c=new BU;d=a.eo;e=new K;M(e);BN(U(H(U(H(e,C(96)),b),C(97)),d),93);Bm(c,L(e));N(c);}
function Ch(a){return a.eo-a.Z|0;}
function D8(a){return a.Z>=a.eo?0:1;}
var AAm=G(0);
var LD=G(H_);
function AHS(b){var c,d;if(b>=0)return ARQ(0,b,B5(b),0,b,0);c=new BU;d=new K;M(d);U(H(d,C(98)),b);Bm(c,L(d));N(c);}
function AJP(b,c,d){return ARQ(0,b.data.length,b,c,c+d|0,0);}
function Ps(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BI;i=new K;M(i);U(H(U(H(i,C(99)),g),C(100)),f);Bm(h,L(i));N(h);}if(Ch(a)<d){j=new Oi;Y(j);N(j);}if(d<0){j=new BI;k=new K;M(k);H(U(H(k,C(101)),d),C(102));Bm(j,L(k));N(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iD.data[m+a.p8|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BI;d=b.length;k=new K;M(k);BN(U(H(U(H(k,C(103)),c),C(97)),d),41);Bm(j,L(k));N(j);}
function Nm(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.ql){b=new Kz;Y(b);N(b);}e=d-c|0;if(Ch(a)<e){b=new JO;Y(b);N(b);}if(c>J(b)){f=new BI;d=J(b);b=new K;M(b);BN(U(H(U(H(b,C(104)),c),C(97)),d),41);Bm(f,L(b));N(f);}if(d>J(b)){f=new BI;c=J(b);b=new K;M(b);U(H(U(H(b,C(105)),d),C(106)),c);Bm(f,L(b));N(f);}if(c>d){b=new BI;f=new K;M(f);U(H(U(H(f,C(104)),c),C(107)),d);Bm(b,L(f));N(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;AAr(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function Nd(){var a=this;H_.call(a);a.nl=0;a.pP=null;a.C3=null;}
function AJC(b,c,d){var e,f,g;e=b.data;f=new ADt;g=e.length;d=c+d|0;ACS(f,g);AX$();f.C3=A66;f.nl=0;f.pP=b;f.Z=c;f.eo=d;f.C7=0;f.w9=0;return f;}
function ADu(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.w9){e=new Kz;Y(e);N(e);}if(Ch(a)<d){e=new JO;Y(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BI;j=new K;M(j);U(H(U(H(j,C(108)),h),C(100)),g);Bm(i,L(j));N(i);}if(d<0){e=new BI;i=new K;M(i);H(U(H(i,C(101)),d),C(102));Bm(e,L(i));N(e);}h=a.Z;k=h+a.nl|0;l=0;while(l<d){b=a.pP.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BI;d=b.length;i=new K;M(i);BN(U(H(U(H(i,C(103)),c),C(97)),d),41);Bm(e,
L(i));N(e);}
function PU(a){a.Z=0;a.eo=a.ol;a.jM=(-1);return a;}
function IJ(){B.call(this);this.DT=null;}
var A6Z=null;var A6Y=null;var A6X=null;function Hk(){Hk=Bn(IJ);AQp();}
function AHB(a){var b=new IJ();AKC(b,a);return b;}
function AKC(a,b){Hk();a.DT=b;}
function AQp(){A6Z=AHB(C(109));A6Y=AHB(C(110));A6X=AHB(C(111));}
var Pl=G(Cv);
function AQh(a){}
function APa(a,b,c){}
function HJ(){var a=this;Cv.call(a);a.du=null;a.r=null;}
function ACR(a,b){var c,d,e;El(a,b);a.du=AI0(0,0,64);c=new TE;c.bO=new Bg;c.dw=CN(Q(CR,0));c.d1=new Bg;c.p6=new Bg;c.mt=new B2;c.Cd=new B2;d=b.P;c.bH=d;e=b.bA;c.es=e;c.cB=d.l6;c.cW=Ry(e);d=b.o.mX;e=new Y8;e.tK=c;Ba(d,e);d=b.o.mm;e=new Y7;e.wb=c;Ba(d,e);a.r=c;Ba(b.o.bG,new AAa);b=b.o.bG;c=a.r;BD(c);d=new Z_;d.xA=c;Ba(b,d);}
function Hx(a){EH(a.z.P,a.du);}
function AF9(a,b,c){var d,e,f,g,h;a:{d=a.r;Cn(d.bO,b);e=d.cf;if(e!==c){d.cf=c;f=(B3(d.dw)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].ff(e,c);h=h+1|0;}}}}
function Cz(){HJ.call(this);this.E=null;}
function Ga(a,b){Ix(a,b,1);}
function Ix(a,b,c){var d,e,f;ACR(a,b);d=new ADH;e=a.r;d.b7=CN(Q(TQ,0));d.bZ=e;a.E=d;Ba(a.r.dw,d);Ba(b.o.bS,a.E);d=b.o.fw;e=a.E;BD(e);f=new Wp;f.v7=e;Ba(d,f);d=b.o.cT;e=a.E;BD(e);f=new Wo;f.tx=e;Ba(d,f);if(c){b=b.o.bS;f=a.r.cW;d=new W9;d.wC=f;Ba(b,d);}}
function AN9(a){Hx(a);JV(a.E);}
function ID(a,b,c){var d,e;AF9(a,b,c);d=(B3(a.E.b7)).data.length;e=0;while(e<d){e=e+1|0;}}
function AMJ(a,b){var c,d,e,f,g;c=a.E;d=0;e=(B3(c.b7)).data;f=e.length;g=0;while(g<f){d=e[g].W.cj(b)|d;g=g+1|0;}return d;}
var Fd=G(0);
function AHH(a){a.ev(IE());}
function Ju(a){a.ev(Jh());}
function AIu(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IZ;c=new Kh;d=new Hl;AG6();K4(d,A67);My(c,d,BY(A68),BY(A69),BY(A6$),BY(A68),BY(A6_),BY(A7a),BY(A7b),BY(A7c),BY(A7d),BY(A7e));e=AJJ(S(C(112)));AGt();f=(A7f.hD()).data;g=f.length;h=Q(Kx,g);i=h.data;j=0;while(j<g){i[j]=f[j].pt;j=j+1|0;}k=AKp(S(C(113)),S(C(114)),S(C(115)),S(C(116)));l=new I1;m=new I9;AVg();d=A7g;OH(m,d,A7h,A7i,A7j,A7k,d);LX(l,m,AK8(),AHK(S(C(117)),S(C(112)),CB(0)),AK8(),AH8(1,0.07500000298023224),A7l,A7m);LM(b,c,e,h,k,l,AEs(S(C(118)),S(C(119)),S(C(120)),
S(C(121))));a.ev(b);}
var JK=G(0);
var Fk=G(0);
function K1(){var a=this;Cz.call(a);a.F=null;a.H=null;a.iN=null;a.jr=0;a.k_=null;a.mz=null;a.zA=null;a.nk=null;a.fK=null;}
function A5s(a){var b=new K1();AFD(b,a);return b;}
function AFD(a,b){var c,d,e;Ix(a,b,0);a.fK=AV6(a.r);c=K3(a.E);a.iN=c;a.F=Ie(c);c=Ie(a.iN);a.H=c;a.mz=AHu(a.F,c);c=a.F;c.b4=1;Ok(a.fK,c,a.H);c=a.F;d=new T0;d.Br=a;c.iv=d;c=a.H;d=new T1;d.y4=a;c.iv=d;AHs(a,0);M1(a.r,a.F);Ba(b.o.fw,a);Ba(b.o.bS,a);c=b.o.bG;d=new T2;d.xc=a;Ba(c,d);c=b.o.bG;d=new HO;e=new TY;e.u7=a;Ir(d,b,e);Ba(c,d);Ba(b.o.gN,a);Ba(b.o.hh,a);b=b.o.cT;c=new TZ;c.s3=a;Ba(b,c);Ju(a);}
function Wh(a,b){if(a.F===b)a.jr=a.jr|1;if(a.H===b)a.jr=a.jr|2;if((a.jr&3)==3)ALc(a);}
function AHs(a,b){I0(a.F,b);I0(a.H,b);}
function A2h(a,b,c){if(DO(a.r,a.F))return Hb(a.F,b,c);if(!DO(a.r,a.H))return 0;return Hb(a.H,b,c);}
function AFV(a){if(DO(a.r,a.F))return VV(a,a.F);if(!DO(a.r,a.H))return null;return VV(a,a.H);}
function VV(a,b){var c;c=new S2;c.sE=b;return c;}
function AFB(a,b,c){var d;d=Eq(c);if(b!==a.F)a.nk=d;else a.zA=d;b=a.zA;if(b!==null&&a.nk!==null)Gj(a.z.bA,Eq(c));else{if(b!==null)Gj(a.z.bA,b);b=a.nk;if(b!==null)Gj(a.z.bA,b);}}
function ALc(a){var b,c,d;Bk(Bt(),C(122));b=a.F.d.h;c=a.H.d.h;d=new Vt;d.sM=a;AIw(b,c,d,a.z.bA);}
function ASi(a,b){var c,d;c=I4(a.F,b);d=I4(a.H,b);return !c&&!d?0:1;}
function AYT(a){var b;Hx(a);In(a.F);In(a.H);b=a.fK;AGG(b,b.iG.bH);JV(a.E);}
function AXX(a){return E5(0);}
function ASF(a){Jz(a.F);Jz(a.H);}
function AYP(a){KB(a.F);KB(a.H);}
function ATf(a,b){Iz(a.F,b);Iz(a.H,b);}
function AZF(a,b){KC(a.r,b);}
function ANr(a,b){if(H3(a.E,b)){LZ(a.F);LZ(a.H);}}
function APO(a,b,c){ID(a,b,c);AF8(a,b,c);}
function AF8(a,b,c){var d,e,f,g,h,i;d=new Bg;e=Cg(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;QN(f,g-h|0,b.b);Mv(a.F,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;Mv(a.H,d,f,c);X(a.fK.i,f.a,d.b);X(a.fK.j,d.a-f.a|0,f.b);}
function AMa(a,b){BD(b);GL(a.iN,b);FA(a.F,b);FA(a.H,b);a.fK.im=b;}
function AHm(a,b){if(b.bm!=121)return 0;return 1;}
function AJB(a,b){var c,d,e,f;if(DO(a.r,a.F)){c=a.iN;d=b.k;e=a.F;f=new Pb;f.uX=a;II(c,d,e,a,a,a,f);}if(DO(a.r,a.H)){c=a.iN;b=b.k;d=a.H;e=new Pa;e.ua=a;II(c,b,d,a,a,a,e);}return 1;}
function AZZ(a,b){var c,d;c=B1(a.F,b.k)&&XA(a.F,b)?1:0;d=B1(a.H,b.k)&&XA(a.H,b)?1:0;return !c&&!d?0:1;}
function AXY(a,b,c,d){var e,f;e=B1(a.F,b.k)&&O9(a.F,b,c,d)?1:0;f=B1(a.H,b.k)&&O9(a.H,b,c,d)?1:0;return !e&&!f?0:1;}
function AQF(a,b,c){var d,e,f,g,h,i,j,k;d=B1(a.F,b.k);e=B1(a.H,b.k);f=a.r;g=f.ee;h=g!==null?0:1;i=a.F;j=g!==i?0:1;k=g!==a.H?0:1;if(d&&!(!h&&!k))FQ(f,i);if(e&&!(!h&&!j))FQ(a.r,a.H);if(d){i=Wy(a.F,b,c);if(i!==null)return i;}return !e?null:Wy(a.H,b,c);}
function A0q(a,b,c){var d,e,f,g;d=B1(a.F,b.k);e=B1(a.H,b.k);f=d&&S9(a.F,b,c)?1:0;g=e&&S9(a.H,b,c)?1:0;return !f&&!g?0:1;}
function ARU(a,b,c,d){var e,f,g,h;e=B1(a.F,b.k);f=B1(a.H,b.k);g=e&&LU(a.F,b,c,d)?1:0;h=f&&LU(a.H,b,c,d)?1:0;return !g&&!h?0:1;}
function AYo(a){return AFV(a);}
var AG8=G(K1);
function A4Y(a){var b=new AG8();A18(b,a);return b;}
function A18(a,b){var c;AFD(a,b);a.F.e2=1;a.H.e2=1;c=new Tq;c.xf=a;Qg(a,c,C(123));c=new Ts;c.At=a;Qg(a,c,C(124));}
function AQQ(a){return E5(1);}
function Qg(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new O0;d=d.then(Bv(e,"f"));f=new O2;f.tN=b;f.tM=c;g=new O1;d.then(Bv(f,"f"),Bv(g,"f"));}
var AHw=G();
function A1E(b){var c,d;if(J(b)>0){c=new K;M(c);H(H(c,C(125)),b);$rt_globals.console.info($rt_ustr(L(c)));}a:{d=(-1);switch(J6(b)){case -1570047148:if(!Bj(b,C(126)))break a;d=17;break a;case -1509980539:if(!Bj(b,C(127)))break a;d=13;break a;case -1351411913:if(!Bj(b,C(128)))break a;d=5;break a;case -1073555521:if(!Bj(b,C(129)))break a;d=14;break a;case -1045861099:if(!Bj(b,C(130)))break a;d=18;break a;case -1045861098:if(!Bj(b,C(131)))break a;d=19;break a;case -811765794:if(!Bj(b,C(132)))break a;d=6;break a;case -785237654:if
(!Bj(b,C(133)))break a;d=11;break a;case -695287066:if(!Bj(b,C(134)))break a;d=20;break a;case -631889171:if(!Bj(b,C(135)))break a;d=9;break a;case -536831301:if(!Bj(b,C(136)))break a;d=25;break a;case -439438829:if(!Bj(b,C(137)))break a;d=21;break a;case -357667878:if(!Bj(b,C(138)))break a;d=22;break a;case -223304637:if(!Bj(b,C(139)))break a;d=2;break a;case -193916863:if(!Bj(b,C(140)))break a;d=23;break a;case 2129957:if(!Bj(b,C(141)))break a;d=1;break a;case 3343967:if(!Bj(b,C(142)))break a;d=10;break a;case 3556498:if
(!Bj(b,C(143)))break a;d=4;break a;case 91636708:if(!Bj(b,C(144)))break a;d=24;break a;case 485517998:if(!Bj(b,C(145)))break a;d=7;break a;case 544901384:if(!Bj(b,C(146)))break a;d=3;break a;case 1030621992:if(!Bj(b,C(147)))break a;d=16;break a;case 1164939699:if(!Bj(b,C(148)))break a;d=27;break a;case 1465713255:if(!Bj(b,C(149)))break a;d=8;break a;case 1554501643:if(!Bj(b,C(150)))break a;d=15;break a;case 1609169232:if(!Bj(b,C(151)))break a;d=12;break a;case 2090248989:if(!Bj(b,C(152)))break a;d=26;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new UI;break b;case 3:case 4:b=new UF;break b;case 5:b=new UE;break b;case 6:b=new UH;break b;case 7:b=new UG;break b;case 8:b=new UM;break b;case 9:case 10:b=new UL;break b;case 11:b=new UO;break b;case 12:b=new UN;break b;case 13:b=new AA6;break b;case 14:b=new AA5;break b;case 15:b=new AA4;break b;case 16:b=new AAT;break b;case 17:b=new AAS;break b;case 18:b=new AAQ;break b;case 19:b=new AAP;break b;case 20:b=new AAO;break b;case 21:b=new AAN;break b;case 22:b=new AAM;break b;case 23:b
=new AAX;break b;case 24:b=new AAW;break b;case 25:b=new AAV;break b;case 26:b=new AAU;break b;case 27:b=new AAZ;break b;default:b=new AAY;break b;}b=new UJ;}return b;}
var AJM=G();
var K8=G(LD);
function AFT(){var a=this;K8.call(a);a.ql=0;a.p8=0;a.iD=null;}
function ARQ(a,b,c,d,e,f){var g=new AFT();AUz(g,a,b,c,d,e,f);return g;}
function AUz(a,b,c,d,e,f,g){ACS(a,c);a.Z=e;a.eo=f;a.p8=b;a.ql=g;a.iD=d;}
function AAr(a,b,c){a.iD.data[b+a.p8|0]=c;}
function Lw(){var a=this;B.call(a);a.Ei=null;a.sO=null;a.Di=0.0;a.wE=0.0;a.nV=null;a.nq=null;a.ly=0;}
function Og(){var a=this;B.call(a);a.h8=0;a.ke=0;}
var A61=null;var A60=null;function AEQ(a,b){var c=new Og();AIY(c,a,b);return c;}
function AIY(a,b,c){a.h8=b;a.ke=c;}
function I5(a){return a.h8?0:1;}
function Ic(a){return a.h8!=1?0:1;}
function NL(a){return !RD(a)&&!Ml(a)?0:1;}
function RD(a){return a.h8!=2?0:1;}
function Ml(a){return a.h8!=3?0:1;}
function Lc(a){var b;if(NL(a))return a.ke;b=new Ef;Y(b);N(b);}
function Eu(b){return AEQ(2,b);}
function Uh(a){var b,c;switch(a.h8){case 0:b=new Re;Y(b);N(b);case 1:b=new VC;Y(b);N(b);case 2:b=new Uc;c=a.ke;Y(b);b.D2=c;N(b);case 3:b=new Q9;c=a.ke;Y(b);b.Fu=c;N(b);default:}}
function AI_(){A61=AEQ(0,0);A60=AEQ(1,0);}
var AEK=G();
var I8=G(0);
var W0=G();
function AOi(a,b){return b.arrayBuffer();}
var WZ=G();
function ARi(a,b){var c,d;c=new Yk;d=new Yi;return $rt_globals.WebAssembly.instantiate(b,APB(Bv(c,"f"),Bv(d,"f")));}
var WX=G();
function ARL(a,b){AML(b);}
var WW=G();
function AWh(a,b){AHE(b);}
var W=G(0);
function Tq(){B.call(this);this.xf=null;}
function A2N(a,b){HX(a.xf.F,b);}
function Ts(){B.call(this);this.At=null;}
function AYs(a,b){HX(a.At.H,b);}
var UJ=G();
function ATt(a,b){return A5s(b);}
var UI=G();
function ALW(a,b){return A4l(b);}
var UF=G();
function AWV(a,b){return A4w(b);}
var UE=G();
function AZD(a,b){var c,d,e,f,g;c=new ABn;El(c,b);d=(IE()).br.ej;c.EP=d;c.ld=ALd(d);c.i2=new Bg;c.h$=new Bg;c.di=KX();c.dY=KX();c.m_=E5(1);b=b.o.bS;d=new WF;d.mg=c;Ba(b,d);b=c.m_.data[DQ()*c.m_.data.length|0];d=Iq(c.z.P,b,10);c.m0=d;Cm(c.z.P.ch,d);e=Eo(c.z.P.ch,C(153));d=c.z.P.ch;f=new K;M(f);BN(f,43);H(f,b);g=C0(e+Eo(d,L(f)));c.jE=g;c.iI=BV(c.iI,AEc(c,1,g,b,c.m0,c.z.P));c.iH=BV(c.iH,AEc(c,0,c.jE,b,c.m0,c.z.P));Rh(c,c.di,c.iI);Rh(c,c.dY,c.iH);Cp(c.di.X,1.0,1.0,1.0,1.0);Fm(c.di,c.ld);Cp(c.dY.X,1.0,1.0,1.0,1.0);Fm(c.dY,
c.ld);b=Bt();g=c.jE;d=new K;M(d);U(H(d,C(154)),g);Bk(b,L(d));return c;}
var UH=G();
function AN3(a,b){var c,d,e;c=new XD;Ga(c,b);d=new WC;d.nQ=new Bg;d.oi=new Bg;c.yJ=d;c.fg=AJO();c.dF=AJO();c.oA=Dv(C(155),25.0);Ba(c.r.dw,c);d=b.o.bG;e=new ABO;e.uF=c;Ba(d,e);Ba(b.o.bS,c);b=b.o.cT;d=new ABK;d.vF=c;Ba(b,d);AEf(c.dF);BP(c.du,CB(43));b=Fi();JN(c.fg,b);JN(c.dF,b);b=c.fg;b.kW=new ABL;d=c.dF;d.kW=new ABM;d.o8=new Qc;d.wJ=new Qd;Nr(b,(RQ(0)).kj);Nr(c.dF,(RQ(0)).kj);return c;}
var UG=G();
function AUD(a,b){var c,d,e;c=new AAR;Ga(c,b);Ba(c.r.dw,c);BP(c.du,CB(43));d=b.o.bG;e=new Uy;e.Cy=c;Ba(d,e);b=b.o.cT;d=new Uz;d.Bf=c;Ba(b,d);return c;}
var UM=G();
function ANH(a,b){var c,d,e;c=new W5;ACR(c,b);c.h2=BM();c.gh=BM();c.sa=S(C(156));c.kc=U0();c.h1=0;d=c.r.dw;e=new O_;e.x3=c;Ba(d,e);Ba(b.o.bS,c);d=b.o.bG;e=new O$;e.vR=c;Ba(d,e);b=Iq(b.P,C(155),35);c.kh=b;c.mn=AIv(E7(b));BP(c.du,S(C(157)));return c;}
var UL=G();
function AP_(a,b){var c,d,e,f;c=new SP;El(c,b);c.h4=AHD();c.e$=0;c.uQ=500;c.sb=IF(0,0,0,255,new B2);c.mB=20;c.xo=20;c.Ag=IE();d=b.o.bS;e=new WQ;e.lO=c;f=new TX;f.z_=e;e.rY=f;Ba(d,e);d=b.o.fw;e=new AAb;e.AK=c;Ba(d,e);c.eE=b.P;c.xL=Ry(b.bA);YP(c.h4,Iq(c.eE,C(155),c.xo),c.mB,c.eE.l6);c.i1=Jc();return c;}
var UO=G();
function A0Z(a,b){var c,d;c=new Rf;HL(c,b);b=b.o.bG;d=new QP;d.s_=c;Ba(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var UN=G();
function ALF(a,b){var c,d,e,f,g,h,i;c=new Xk;Ga(c,b);d=b.o.cT;e=new RG;e.x6=c;Ba(d,e);d=b.bA;f=new PT;f.DA=c;g=Q(B,1);g.data[0]=C(158);CW(d,f,C(159),g);h=new PS;h.EJ=c;g=Q(B,1);g.data[0]=AJq([1,2,3,4,5]);CW(d,h,C(160),g);h=new PP;h.Cb=c;i=Q(B,1);i.data[0]=A3Z([1,2,3,4,5]);CW(d,h,C(161),i);h=new PN;h.ES=c;g=Q(B,1);g.data[0]=DX([1,2,3,4,5]);CW(d,h,C(162),g);d=b.o.bG;e=new HO;h=new RF;h.Ad=c;Ir(e,b,h);Ba(d,e);return c;}
var AA6=G();
function ALQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new WH;HL(c,b);c.e8=H9(0,0,300,300);c.gD=Tb(0,0,3,3);d=b.P;b=b.o.bS;e=new ABX;e.m7=c;Ba(b,e);b=ALk(d);c.A0=b;FT(c.e8,b);F0(c.e8);b=c.e8.bl;FN();BP(b,A7n);BP(c.e8.X,Dy(204,120,50));AQI();e=A7o;f=DM((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CX(d);switch(e.fU){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new E4;Y(b);N(b);}b:
{WT(m,5,5,h);b=m.eN.d5;switch(e.fU){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new E4;Y(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.nG=m;X(c.gD.t,BR(m),CO(c.nG));BP(c.gD.bl,c.pZ);return c;}
var AA5=G();
function AYy(a,b){var c,d,e;c=new SN;HL(c,b);c.g0=H9(0,0,300,300);c.my=new Bg;c.kz=new Bg;c.jV=new Bg;d=b.P;b=b.o.bS;e=new XL;e.ku=c;Ba(b,e);b=ALk(d);c.q7=b;FT(c.g0,b);F0(c.g0);b=c.g0.bl;FN();BP(b,A7n);BP(c.g0.X,Dy(204,120,50));return c;}
var AA4=G();
function AQ4(a,b){var c,d,e,f;c=new AAF;El(c,b);c.DP=20;c.Fv=11;c.Eb=220;c.md=new Bg;c.E0=5000;c.io=1;c.gQ=I(Hl,[CB(0),CB(255)]);c.eP=b.P;d=b.o.bS;e=new YF;e.l3=c;f=new UW;f.tz=e;e.qW=f;Ba(d,e);b=b.o.fw;d=new V3;d.rE=c;Ba(b,d);b=HF(c.eP,200,220);c.oI=b;Hu(b,C(155),20.0);b=HF(c.eP,200,20);c.gG=b;Hu(b,C(155),20.0);c.iE=Jc();return c;}
var AAT=G();
function AOm(a,b){var c,d,e;c=new Kv;HL(c,b);Ba(b.o.bS,c);d=b.o.bG;e=new ADq;e.wI=c;Ba(d,e);Ba(b.o.gN,new ADp);d=b.o.gN;e=new ADo;e.sF=c;Ba(d,e);Ba(b.o.hh,new ADn);d=b.o.hh;e=new ADr;e.zV=c;Ba(d,e);b=!VJ(b.bA)?C(163):C(164);d=new K;M(d);H(H(d,C(165)),b);$rt_globals.console.info($rt_ustr(L(d)));return c;}
var AAS=G();
function AUQ(a,b){var c,d;c=new Sz;HL(c,b);c.uk=CB(20);c.gn=H9(0,0,300,300);c.vV=Dv(C(14),80.0);b=b.o.bG;d=new Sf;d.DV=c;Ba(b,d);return c;}
var AAQ=G();
function A1Y(a,b){var c;c=new Tp;OM(c,b);Hg(c.ck,0,0,300,300);X(c.dj,300,300);return c;}
var AAP=G();
function AQi(a,b){var c;c=new To;OM(c,b);c.f3=new Bg;c.go=new Bg;X(c.ec,150,140);X(c.dj,500,100);X(c.fr,150,200);X(c.eO,500,250);return c;}
var AAO=G();
function A01(a,b){var c,d,e;c=new Wc;Ga(c,b);c.Cj=3;c.wj=Dv(C(166),20.0);c.j7=U0();c.qo=1;Ba(c.r.dw,c);BP(c.du,CB(43));d=b.o.bG;e=new Pz;e.zi=c;Ba(d,e);b=b.o.cT;d=new PA;d.vP=c;Ba(b,d);return c;}
var AAN=G();
function ALz(a,b){return A4V(b);}
var AAM=G();
function A0O(a,b){var c,d,e,f;c=new Qy;Ob(c,b);BP(c.du,CB(43));c.me=K3(c.E);d=b.o.bG;e=new HO;f=new PB;f.Bq=c;Ir(e,b,f);Ba(d,e);b=b.o.cT;d=new PC;d.zf=c;Ba(b,d);return c;}
var AAX=G();
function AZ7(a,b){var c,d;c=new RV;Ix(c,b,1);c.na=Jh();Ba(c.r.dw,c);BP(c.du,CB(43));b=b.o.cT;d=new XE;d.yd=c;Ba(b,d);return c;}
var AAW=G();
function ANe(a,b){var c;c=new YX;Ob(c,b);c.vZ=Jh();BP(c.du,CB(43));return c;}
var AAV=G();
function AXH(a,b){return A4y(b);}
var AAU=G();
function AO8(a,b){var c,d,e;c=new PK;Ob(c,b);c.vi=Jh();BP(c.du,CB(43));d=b.o.cT;e=new UD;e.Cv=c;Ba(d,e);b=b.o.bG;d=new UC;d.t1=c;Ba(b,d);return c;}
var AAZ=G();
function AO9(a,b){var c,d;c=new TU;Ga(c,b);c.ik=Jh();Ba(c.r.dw,c);BP(c.du,CB(43));b=b.o.cT;d=new AA8;d.q0=c;Ba(b,d);return c;}
var AAY=G();
function AVt(a,b){var c;c=new OU;AHW(c,b);AKF(c.dy);return c;}
function ADm(){var a=this;B.call(a);a.uC=null;a.AR=null;a.Af=null;}
function Id(){var a=this;B.call(a);a.bL=0;a.cO=0;a.dB=0;a.kC=0;}
function A7p(a,b,c,d){var e=new Id();AB0(e,a,b,c,d);return e;}
function AB0(a,b,c,d,e){a.bL=d;a.cO=b;a.dB=c;a.kC=e;}
function Qp(){var a=this;Id.call(a);a.ei=null;a.bm=0;a.jR=0;a.zR=0;a.oQ=0;}
var AG9=G();
function U5(b,c){return (b+(c/2|0)|0)/c|0;}
function YS(b,c,d){if(b<(2147483647/c|0))return U5(Bc(b,c),d);return 0.5+c*b/d|0;}
function H8(b,c){return ((b+c|0)-1|0)/c|0;}
function GG(b){return b+0.5|0;}
function C0(b){return b+0.5|0;}
function E6(b,c,d){return Bd(b,Be(c,d));}
function Nb(b,c){return AIr(b)/AIr(c);}
function OO(){var a=this;Id.call(a);a.k=null;a.Ea=null;}
var Ty=G(0);
function Py(){var a=this;B.call(a);a.vW=null;a.vX=null;}
function AYz(a,b){var c,d;c=a.vW;d=a.vX;$rt_globals.console.info("paste plain string "+b);c.g(H1(b));DC(d);}
function ACd(){B.call(this);this.we=null;}
function ACZ(a,b){a.we.clipboardData.setData("text/plain",$rt_ustr(b));}
function ADt(){var a=this;Nd.call(a);a.C7=0;a.w9=0;}
function CD(){var a=this;B.call(a);a.i=null;a.j=null;a.bR=0.0;}
function AUC(){var a=new CD();E2(a);return a;}
function E2(a){a.i=new Bg;a.j=new Bg;}
function ASj(a){}
function AZv(a){return BG(0,0);}
function JU(a,b,c,d){var e;if(!J3(a.i,b)){a.rL(b);Cn(a.i,b);}if(!J3(a.j,c)){a.o0(c);Cn(a.j,c);}e=a.bR;if(e!==d){a.bR=d;a.lB(e,d);}}
function Dz(a,b){return Cg(b,a.bR);}
function B1(a,b){return Gk(b,a.i,a.j);}
function AK$(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.j;AO$();Bs(b,d,e,f,A7q);}
function ACz(a,b){var c;c=a.i;LW(b,c.a,c.b,a.j);}
function AV_(a,b){return 0;}
function AQb(a,b){}
function ATU(a,b){}
function A0D(a,b,c){}
function AT2(a){}
function AO4(a,b,c,d){return 0;}
function AMW(a,b,c){return null;}
function AQU(a,b,c){return 0;}
function ATH(a,b){return 0;}
function A0v(a,b,c,d){return 0;}
function AFq(){var a=this;CD.call(a);a.iG=null;a.ll=null;a.lm=null;a.lj=null;a.lk=null;a.eu=null;a.gw=null;a.gx=null;a.im=null;}
function AV6(a){var b=new AFq();ANj(b,a);return b;}
function ANj(a,b){E2(a);a.ll=new Bg;a.lm=new Bg;a.lj=new Bg;a.lk=new Bg;a.iG=b;}
function Ok(a,b,c){a.gw=b;a.gx=c;}
function AGG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.i;Bs(b,c.a,c.b,a.j,a.im.br.ej);if(a.eu===null)return;d=Cs(a.iG,2.0);e=GO(a.eu,a.gw.li(),1);f=GO(a.eu,a.gw.kv(),1);g=GO(a.eu,a.gx.li(),0);h=GO(a.eu,a.gx.kv(),0);i=Be(e,g);j=Bd(f,h);g=BL(i,j);if(g<=0)B$(b,1);k=a.gw.kX();l=a.gw.l0();m=a.gx.l0();n=a.gx.kX();o=a.iG.p6;while(i<=j){p=a.eu.ir.data[i];if(p.oZ){q=a.gw.hI(p.h7);r=a.gw.hI(p.h7+p.oh|0);s=a.gx.hI(p.h6);t=a.gx.hI(p.h6+p.og|0);X(a.ll,a.i.a,q);X(a.lj,a.i.a,r);X(a.lm,a.i.a+a.j.a|0,s);X(a.lk,
a.i.a+a.j.a|0,t);u=Bd(Be(q,s),a.i.b);v=Be(Bd(r,t),a.i.b+a.j.b|0);if(v>u){X(o,a.j.a,v-u|0);c=a.im;w=J8(c.d8,c,p.oZ);if(q==r)Rd(a,b,q,s,d,k.a,l.a,w,a.ll,a.lj);if(s==t)Rd(a,b,s,q,d,n.a,m.a,w,a.lm,a.lk);AEl(b,a.i.a,u,o,a.ll,a.lm,a.lj,a.lk,w);}}i=i+1|0;}if(g<=0)B$(b,0);}
function Rd(a,b,c,d,e,f,g,h,i,j){var k;k=a.iG.d1;X(k,g,e);if(d>=c)j.b=j.b+e|0;else{c=c-e|0;i.b=i.b-e|0;}Bs(b,f,c,k,h);}
function AFX(){var a=this;B.call(a);a.b$=null;a.dt=null;a.iy=null;}
function K3(a){var b=new AFX();AMo(b,a);return b;}
function AMo(a,b){a.b$=b;}
function GL(a,b){var c;a.iy=b;c=a.dt;if(c!==null)EG(c,b.cI);c=a.b$.eb;if(c!==null)Gi(c,b.cI,b.hy);}
function ZB(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=APj();i=c.q;j=0;while(j<i){if(f===null){k=(BH(c,j)).bq;l=Z9(FP(Cd(g.h,k)));m=AAI(g.gb);}else{n=f.data;k=n[j].pA.nn;l=!BO(g.gb,n[j].l7)?C(21):Z9(FP(Cd(g.h,k)));m=AAI(n[j].l7);}if(J(l)>153){o=Cu(l,0,150);n=new K;M(n);H(H(n,o),C(167));l=L(n);}if(J(m)>153){n=Cu(m,0,150);o=new K;M(o);H(H(o,n),C(167));m=L(o);}n=Dm(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BH(c,j);}if(f!==null){q=new ADE;q.sJ=d;q.sK=p;}else{q=new ADF;q.By=d;q.Bx
=o;}Wl(h,m,n,l,q);j=j+1|0;}r=ADe(h);if(a.dt!==null)ABe(a);c=a.b$.bZ;g=new Rq;f=new AAD;f.qT=a;f.qU=d;AK4(g,c,f);Xf(g,r);d=a.iy;Wf(g,d.cI,d.BH);d=AEw(c);a.dt=d;d.pS=d.pS|1;d=GH(g,c);f=a.iy.cI;Jk(d,f.m3,f.oR);Lg(a.dt,d);EG(a.dt,a.iy.cI);d=a.dt;f=new K;M(f);H(H(f,C(168)),e);DL(d,L(f));Ej(a.b$,a.dt);d=a.dt;i=(d.Q.j.b+Cs(d.bb,2.0)|0)+Cs(c,2.0)|0;s=(g.d7+g.eS|0)+g.hH|0;t=Cs(g.bV,5.0);e=BG(E6(t,b.a,g.bV.bO.a-s|0),E6(i,b.b,g.bV.bO.b-g.cL.b|0));Yz(g);K6(g);i=Ei(g);s=g.b6.data.length;i=Bc(i,s)+Bc(g.dS,s+1|0)|0;X(g.cL,
g.j.a,i);i=(g.d7+g.eS|0)+g.hH|0;b=g.bV;s=(b.bO.a-e.a|0)-Cs(b,5.0)|0;b=g.bV;t=(b.bO.b-e.b|0)-Cs(b,5.0)|0;d=BG(Be(i,s),Be(g.cL.b,t));Et(a.dt,e,d);FQ(c,g);}
function ABe(a){Is(a.b$,a.dt);J4(a.dt);a.dt=null;}
function RO(a,b,c){var d,e;d=a.b$;e=a.iy;Jf(d,e.cI,e.hy,b,c);}
function II(a,b,c,d,e,f,g){RO(a,b,Z0(L7(a,c,g,d,e,f),b));}
function L7(a,b,c,d,e,f){var g;g=new S8;g.gp=a;g.bu=b;g.rx=c;g.jb=e;g.oq=f;g.mq=d;return g;}
function AE$(b){var c;c=new RZ;c.zY=b;return c;}
var FW=G(0);
function AZw(a){}
function AOs(a){}
var Q7=G(0);
var Mt=G(0);
function AFw(){var a=this;CD.call(a);a.cM=null;a.bj=null;a.kS=null;a.BY=0;a.oo=null;a.dZ=null;a.nL=0;a.hG=0.0;a.mk=null;a.C6=null;a.f1=null;a.V=0;a.c8=0;a.d=null;a.fC=null;a.er=null;a.eY=null;a.A5=0;a.zN=0;a.c1=0;a.ci=0;a.co=0;a.ig=null;a.fX=null;a.fF=null;a.jv=0;a.j_=0;a.Fx=0;a.Cs=0;a.k4=0;a.lY=0;a.pX=0;a.eh=0;a.dc=null;a.fz=null;a.e2=0;a.b4=0;a.Ch=null;a.j9=null;a.zc=null;a.ux=null;a.iv=null;a.bw=0;a.cX=null;a.sN=0;a.rA=null;a.vb=null;}
function Ie(a){var b=new AFw();ASh(b,a);return b;}
function ASh(a,b){var c,d,e;E2(a);a.BY=0;a.oo=Q(V,10);a.dZ=AXC();a.hG=16.0;a.mk=C(155);a.d=A4O(Q(BK,0),null,null);c=new ADQ;c.yx=CN(Q(Nx,0));c.BW=CN(Q(Nx,0));c.qM=CN(Q(AA2,0));c.vI=CN(Q(YZ,0));c.vk=CN(Q(He,0));c.AU=CN(Q(SC,0));a.fC=c;a.eY=Q(Fx,0);a.ig=BG(1,0);a.fX=Jc();a.fF=Jc();a.jv=0;a.j_=1;a.k4=1;a.lY=1;a.pX=1;a.eh=3;a.dc=AHD();a.fz=C(169);a.e2=0;a.b4=0;c=En();BD(c);d=new Xv;d.Dr=c;a.j9=d;a.bw=0;c=new Xu;c.qC=a;a.rA=c;c=new Xt;c.tl=a;a.vb=c;c=b.b$.bZ;a.cM=c;a.bj=c.bH;a.kS=b;b=APY(c.cB);a.cX=b;a.f1=b.g9;e
=a.oo.data;b=new Xs;b.A9=a;e[1]=b;b=new Xz;b.xF=a;e[2]=b;b=new Xy;b.t7=a;e[3]=b;b=new Xx;b.wu=a;e[4]=b;b=new Xw;b.rl=a;e[5]=b;b=new Xr;b.zz=a;e[6]=b;K_(a.d,a,GD(a));}
function O6(a,b){var c,d,e;c=new V$;c.w1=a;d=new V9;d.yK=a;Ba(b.gN,c);Ba(b.hh,d);e=new V_;e.DF=b;e.DG=c;e.DH=d;return e;}
function Mv(a,b,c,d){JU(a,b,c,d);AAJ(a,b,c,d);}
function ARu(a,b,c){Vo(a,a.mk,a.hG);P0(a.cX,c);}
function A2O(a,b,c){a.zc=b;a.ux=c;}
function AAJ(a,b,c,d){var e;a.c1=Cg(80.0,d);a.ci=Cg(1.0,d);a.co=Cg(10.0,d);e=!a.b4?b.a:(b.a+c.a|0)-Ip(a)|0;X(a.cM.d1,e,b.b);Sm(a.dc,a.cM.d1,Be(Ip(a),c.a),c.b,d);b=a.dZ;e=Cg(2.0,d);b.eU.t.a=e;}
function AXb(a){a.nL=1;N5(a);}
function AVk(a){a.nL=0;}
function N5(a){YK(a.dZ,MZ(GD(a)));}
function FA(a,b){var c,d;a.er=b;c=a.dZ;d=b.br.BV;BP(c.eU.X,d);c=a.fX;d=b.br;H5(c,d.lI,d.lN);c=a.fF;b=b.br;H5(c,b.lI,b.lN);}
function Jz(a){OC(a,a.cX.da.oj,a.hG+1.0);}
function KB(a){var b;b=a.hG;if(b<=7.0)return;OC(a,a.cX.da.oj,b-1.0);}
function Iz(a,b){OC(a,b,a.hG);}
function AR_(a,b){KC(a.cM,b);}
function OC(a,b,c){if(a.cM.cf!==0.0){Vo(a,b,c);JA(GD(a));}a.hG=c;a.mk=b;}
function LZ(a){var b,c,d;b=a.cX;c=a.cM.cB;d=a.bj;b.iP=c;if(b.hK.jj!=c&&b.d$)AD_(b,d);S3(a.eY);IC(a.dc);N9(a);}
function Vo(a,b,c){var d,e,f,g,h,i,j;d=a.bR;e=c*d;Cg(c,d);f=a.cX.da;d=f===null?0.0:f.o2;if(!(e===d&&BO(b,a.mk))){IC(a.dc);Ox(a.eY);g=a.d.h.B.data;h=g.length;i=0;while(i<h){E0(g[i]);i=i+1|0;}j=a.cX;f=a.bj;j.da=AJc(b,e,300,600,j.g9,f);f=a.cX;a.C6=f.da;a.V=Sq(f,1.25,a.bj);a.c8=C0(a.cX.da.p7);a.dZ.eU.t.b=E7(a.cX.da);i=a.V;f=new K;M(f);b=H(H(f,C(170)),b);BN(b,32);U(H(EF(b,e),C(171)),i);$rt_globals.console.info($rt_ustr(L(f)));if(A7r){h=Nj(a.cX.da,a.V);b=new K;M(b);U(H(b,C(172)),h);$rt_globals.console.info($rt_ustr(L(b)));}a.d.is
=GW(F2(a),a.d.A,a.bj.ch,a.f1);H7(a);N9(a);}}
function AVI(a){Ox(a.eY);Yr(a.cX);IC(a.dc);}
function ON(a){return Bc(CK(a.d.h)+5|0,a.V);}
function K5(a){return Bd(ON(a)-a.j.b|0,0);}
function ABf(a){return Bd(a.jv-Gl(a)|0,0);}
function Gl(a){var b;b=!a.b4?0:a.c8+a.co|0;return Bd(1,(a.j.a-a.c1|0)-b|0);}
function Ip(a){return a.b4?a.c1:a.c1-a.co|0;}
function Ek(a){return a.j.b;}
function I4(a,b){var c,d,e;c=a.d.h;if(ABG(c)&&b-c.z7>0.03125?1:0){d=a.sN;e=a.d.h.cr;if(d!=e){a.sN=e;ZT(a);}}if(a.V)AA$(a);d=ABP((a.bw+a.Fx|0)-a.Cs|0,K5(a));e=a.bw==d?0:1;if(e)F4(a,d);return !ABg(a.dZ,b)&&!e&&!a.BY?0:1;}
function IL(a,b){var c,d;b=ABP(b,ABf(a));c=a.d;d=b==c.dT?0:1;if(d)c.dT=b;if(d){c=a.zc;if(c!==null)c.f();}}
function F4(a,b){var c;if(AJp(a,b)){c=a.ux;if(c!==null)c.f();}}
function AJp(a,b){var c,d;c=ABP(b,K5(a));d=c==a.bw?0:1;if(d){a.bw=c;a.d.mI=c/a.V;}return d;}
function AHg(a){return BG((Ip(a)+a.ci|0)+a.co|0,a.V);}
function AS1(a){return a.V;}
function AY1(a,b){In(a);}
function In(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=H8(a.j.b,a.V)+7|0;c=a.eY;if(c.data.length<b)a.eY=Zq(b,c,a.cX,a.A5,a.zN,a.d.h);B$(a.bj,0);NG(a.bj,a.i,a.j);b=a.V;d=a.dZ;e=(b-d.eU.t.b|0)/2|0;b=a.d.is-(S5(d)/2|0)|0;d=a.d;f=b-d.dT|0;g=!a.b4?a.c1:(a.ci+a.co|0)+a.c8|0;Ug(a.dZ,g+f|0,(e+Bc(d.w,a.V)|0)-a.bw|0);h=CK(a.d.h);i=TS(a);j=TR(a);a.A5=i;a.zN=j;k=!a.b4?a.i.a+a.c1|0:((a.i.a+a.ci|0)+a.co|0)+a.c8|0;l=Gl(a);m=a.d.lD;n=Dz(a,40.0);o=i;while(o<=j&&o<h){p=Cd(a.d.h,o);q=ACA(a,o);XF(q,p,a.bj,a.V,l,a.d.dT,
o,o%a.eY.data.length|0);a.jv=Bd(a.jv,FK(p)+n|0);g=a.V;r=Bc(g,o)-a.bw|0;s=m===null?null:m.data[o];r=a.i.b+r|0;t=a.bj;u=a.d.dT;v=a.er;d=AKh(Bi(a),o);if(d!==null){if(d.b==(-1))d.b=p.S;d.a=GW(p,d.a,a.bj.ch,a.f1);d.b=GW(p,d.b,a.bj.ch,a.f1);}w=a.d;Qi(q,r,k,t,l,g,u,v,d,w.iV,w.iF,w.w!=o?0:1,m===null?0:1,s);o=o+1|0;}v=a.cM.d1;o=i;while(o<=j&&o<h&&a.k4){q=ACA(a,o);r=Bc(a.V,o)-a.bw|0;w=Bi(a);if(!Dx(w))u=0;else{d=Ep(w);w=F8(w);u=d.L<=o&&o<w.L?1:0;}d=a.er;w=d.br;t=w.s0;x=a.d.w==o&&m===null?1:0;a:{if(u)t=w.k2;else{if(m!==
null){c=m.data;if(o<c.length&&c[o]!==null){t=J8(d.d8,d,c[o].hb);break a;}}if(x)t=w.gr;}}AIS(q,a.bj,k,a.i.b+r|0,a.V,v,a.d.dT,l,t);o=o+1|0;}if(a.j_){y=Be(j+1|0,h);AKw(a,Bc(a.V,y)-a.bw|0,l);}AGC(a);if(a.lY)AHT(a,i,j,h);if(a.nL&&f>=(( -S5(a.dZ)|0)/2|0)&&AKe(a.dZ,a.j))ACf(a.dZ,a.bj,a.i);AGo(a);AF0(a);Gc(a.bj);AGa(a,i,j);}
function AHT(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.lD;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.er;h=J8(h.d8,h,g.hb);}else h=e!==null?a.er.br.ej:a.er.br.gr;if(!(a.d.w!=b&&g===null)){g=a.ig;i=a.b4;g.a=!i?(a.co-a.ci|0)-a.eh|0:((a.co+a.c8|0)+a.ci|0)-a.eh|0;j=a.V;g.b=j;i=i?0:(a.c1-a.co|0)+a.ci|0;j=Bc(j,b)-a.bw|0;k=a.bj;l=a.i;Bs(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AGa(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.j.b;e=Be(d,Bc(CK(a.d.h),a.V)-a.bw|0);f=a.dc;g=a.bw;h=a.d;i=h.lD===null?h.w:(-1);j=a.bj;k=a.er;NG(j,f.gA,f.fx);S1(f,j,b,d);ABR(f,b,j);AA9(f,g,e,k,j);l=k.le;if(e<d){h=f.gA;Bs(j,h.a,h.b+e|0,BG(f.fx.a,d-e|0),l.k$);}if(b<=i&&i<=c){k=k.le;c=i/20|0;h=f.c4;l=BH(h,c%h.q|0);h=f.gA;d=Bc(f.c4.q,f.hm);c=l.fu.b;b=((l.qj.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CO(l.cS)|0)|0;c=i%l.eg|0;e=l.cv;b=b+Bc(c,e)|0;if(b<( -e|0))b=b+d|0;X(l.je,l.fu.a,e);f=l.jZ;c=i%l.eg|0;d=l.cv;Cp(f,0.0,
Bc(c,d),l.fu.a,d);Np(l,j,b,h,k.xM,k.qF);}Gc(j);}
function TS(a){return Be(a.bw/a.V|0,CK(a.d.h)-1|0);}
function TR(a){return Be(((a.bw+Ek(a)|0)-1|0)/a.V|0,CK(a.d.h)-1|0);}
function ARR(a,b){return (Bc(a.V,b)-a.bw|0)+a.i.b|0;}
function ARH(a){return a.i;}
function AUx(a){return a.j;}
function N9(a){YP(a.dc,a.cX.da,a.V,a.cM.cB);}
function ACA(a,b){var c;c=a.eY.data;return c[b%c.length|0];}
function Vc(a,b){var c,d,e,f;c=E6(0,J(a.fz),Pr(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BU;Y(b);N(b);}if(c!=1){d=b.cc.data.length;if(d&&c){e=B5(Bc(d,c));d=0;f=0;while(f<c){QY(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Mz(e);}else b=A6m;}}return b;}
function P4(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BQ(i);k=A5R(i).data;JC(j,c);c=0;l=k.length;if(c>l){f=new BU;Y(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cr=o.cr+1|0;p=Q(G9,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AS9(h[m],n[m],k[m],b[m],f.bq,f.bv);m=m+1|0;}BB(o.iL,p);c=0;while(c<i){b=e.data;Nn(o,h[c],n[c],k[c],b[c]);g.qm(CZ(h[c]),b[c]);c=c+1|0;}}
function ALl(a){var b;if(Dx(Bi(a)))GT(a);else{b=a.d;O5(b.h,b.w,b.A);}H7(a);Ey(a);return 1;}
function DI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.e2)return 0;if(Dx(Bi(a)))GT(a);c=Mj(ACn(b,C(173),C(21)),C(174),(-1));d=c.data;b=a.d;e=b.h;f=b.w;g=b.A;AEd(e,f,g,c);h=d.length;if(!h)b=A6m;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B5(i+Bc(h-1|0,J(C(174)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(174))){m=l+1|0;c[l]=P(C(174),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Mz(k);}F7(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CP(a,m,m!=f?J(d[h-1|0]):b.A+J(d[0])|0,0);F_(a);Ey(a);return 1;}
function GT(a){var b,c,d;b=Ep(Bi(a));c=a.d.h;d=Bi(a);Pd(c,d,UY(c,d));CP(a,b.L,b.ba,0);F_(a);Ey(a);}
function F_(a){var b,c;(Bi(a)).ds=0;b=(Bi(a)).bN;c=a.d;Cf(b,c.w,c.A);b=(Bi(a)).bB;c=a.d;Cf(b,c.w,c.A);}
function AKw(a,b,c){var d,e;d=a.j.b;if(b<d){e=a.cM.d1;e.b=d-b|0;d=a.b4;e.a=!d?c+a.eh|0:c+a.ci|0;d=!d?(a.i.a+a.c1|0)-a.eh|0:(((a.i.a+a.co|0)+a.c8|0)+a.ci|0)-a.eh|0;Bs(a.bj,d,a.i.b+b|0,e,a.er.br.ej);}}
function AGo(a){var b;b=a.b4?a.i.a+a.c8|0:a.i.a+a.j.a|0;Ku(a.fX,a.bw,a.i.b,Ek(a),ON(a),b,a.c8);b=!a.b4?a.i.a+a.c1|0:((a.i.a+a.ci|0)+a.co|0)+a.c8|0;Rz(a.fF,a.d.dT,b,Gl(a),a.jv,a.i.b+Ek(a)|0,a.c8);}
function AF0(a){var b,c;b=ZD(a.fX);c=ZD(a.fF);if(!(!b&&!c)){B$(a.bj,1);if(b)GV(a.fX,a.bj);if(c)GV(a.fF,a.bj);if(b)G0(a.fX,a.bj);if(c)G0(a.fF,a.bj);}}
function AGC(a){var b,c,d,e,f;b=a.ig;c=a.j;b.b=c.b;b.a=a.ci;d=!a.b4?a.c1-a.co|0:(c.a-Ip(a)|0)-a.ci|0;b=a.bj;c=a.i;Bs(b,c.a+d|0,c.b,a.ig,a.er.br.uI);b=a.ig;d=a.b4;b.a=!d?(a.co-a.ci|0)-a.eh|0:((a.co+a.c8|0)+a.ci|0)-a.eh|0;e=d?0:(a.c1-a.co|0)+a.ci|0;c=a.bj;f=a.i;Bs(c,f.a+e|0,f.b,b,a.er.br.ej);}
function ABP(b,c){return Be(Bd(0,b),c);}
function GD(a){return a.cM.es;}
function GK(a,b,c){var d,e,f;d=Eq(b);e=new K;M(e);H(H(e,C(175)),d);$rt_globals.console.info($rt_ustr(L(e)));CP(a,0,0,0);f=new Zh;f.w7=a;f.w6=b;f.w5=c;c=En();BD(c);d=new Zg;d.Ax=c;U_(b,f,d);}
function JI(a,b,c,d,e){if(IR(a,e))return 1;if(c&&d)return 1;if(c)F4(a,a.bw+((Bc(b,a.V)*12|0)/10|0)|0);else if(!d){Io(a,a.d.w+b|0,e);ABS(a);}return 1;}
function Sd(a,b,c,d){var e,f,g;if(IR(a,d))return 1;e=F2(a);if(!c)f=a.d.A+b|0;else if(b>=0)f=G6(e,a.d.A);else{b=a.d.A;if(!b)f=(-1);else{c=Kp(e,b);if(c>0&&e.ex.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.ex.data[c-1|0];}}if(f>e.S){e=a.d;if((e.w+1|0)<CK(e.h))CP(a,a.d.w+1|0,0,d);}else if(f>=0)DA(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(Cd(e.h,b-1|0)).S;CP(a,a.d.w-1|0,g,d);}}ACM(a);return 1;}
function IR(a,b){if(Dx(Bi(a))&&!b){F_(a);H7(a);return 1;}if(!(b&&Dx(Bi(a))))F_(a);return 0;}
function CP(a,b,c,d){a.d.A=c;return Io(a,b,d);}
function Io(a,b,c){var d;d=a.d;d.w=E6(0,b,CK(d.h)-1|0);return DA(a,a.d.A,c);}
function DA(a,b,c){var d,e;a.d.A=E6(0,b,(F2(a)).S);a.d.is=a.bR===0.0?0:GW(F2(a),a.d.A,a.bj.ch,a.f1);N5(a);H7(a);if(c)(Bi(a)).ds=1;d=Bi(a);e=a.d;N6(d,e.w,e.A);(Bi(a)).ds=0;return 1;}
function MB(a,b){var c;c=AWt(Bi(a));DA(a,b,0);JR(Bi(a),c);}
function H7(a){ABS(a);ACM(a);}
function ABS(a){var b,c,d,e,f;b=a.bw;c=b+Ek(a)|0;d=a.d.w;e=a.V;d=Bc(d,e);f=d+e|0;if(d<(b+e|0))F4(a,d-e|0);else if(f>(c-e|0))F4(a,(f-Ek(a)|0)+a.V|0);}
function ACM(a){var b,c,d,e,f;b=C0(a.cM.cf*30.0);c=a.d.dT;d=c+Gl(a)|0;e=a.d.is;f=e+b|0;if(e<(c+b|0))IL(a,e-b|0);else if(f>(d-b|0))IL(a,(f-Gl(a)|0)+b|0);}
function IX(a,b){var c,d;CP(a,b.bq,b.bv,0);c=G6(F2(a),a.d.A);Cf((Bi(a)).bB,a.d.w,c);b=(Bi(a)).bN;d=a.d;Cf(b,d.w,d.A);I2(a.d);}
function FD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=E6(0,((b.b-d.b|0)+a.bw|0)/a.V|0,CK(a.d.h)-1|0);g=!a.b4?a.c1:(a.ci+a.co|0)+a.c8|0;h=Bd(0,(e-g|0)+a.d.dT|0);b=Cd(a.d.h,f);d=a.bj.ch;i=a.f1;if(!(b.eZ!==null&&!b.g8))NC(b,d,i);j=b.eZ;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.S;else{c=ABE(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.S;else{j=AAe(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=
j.data;if(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A7s){b=new K;M(b);U(H(U(H(U(H(b,C(176)),e),C(177)),h),C(178)),m);$rt_globals.console.info($rt_ustr(L(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DR(f,k);}
function VN(a,b){var c,d;c=a.d;d=b.bq;c.w=d;c.A=b.bv;c.is=GW(Cd(c.h,d),a.d.A,a.bj.ch,a.f1);N5(a);}
function F2(a){var b;b=a.d;return Cd(b.h,b.w);}
function LU(a,b,c,d){var e,f;e=C0((a.V*4|0)*d/150.0);f=C0(c);if(e)F4(a,a.bw+e|0);if(f)IL(a,a.d.dT+f|0);return 1;}
function S9(a,b,c){(Bi(a)).ds=0;return 1;}
function Wy(a,b,c){var d;if(c)return null;d=F6(a.fX,b.k,a.rA,1);if(d!==null)return d;d=F6(a.fF,b.k,a.vb,0);if(d!==null)return d;Jj(a);VN(a,FD(a,b.k));I2(a.d);if(!b.bL&&!(Bi(a)).ds){b=(Bi(a)).bN;d=a.d;Cf(b,d.w,d.A);}(Bi(a)).ds=1;b=Bi(a);d=a.d;N6(b,d.w,d.A);b=new ACP;b.zy=a;return b;}
function O9(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cO){b=b.k;e=FD(a,b);f=Jb(a.d.h,e.bq,e.bv);g=SR(a,f);h=Oy(a.fC,D_(a.d),HA(a.d));if(h!==null){i=a.d;c=e.bq;d=e.bv;e=new Yq;e.Df=a;e.Dc=b;e.Dd=g;h.tR(i,c,d,e,a.j9);}else{e=Cx(a.d.h.dQ,f);if(e!==null){IX(a,e);c=1;}else{e=Cx(a.d.h.dG,f);if(e!==null&&!EC(e)){if(e.q!=1){ZB(a.kS,b,e,a,g);c=1;}else{IX(a,BH(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(FD(a,b.k)).bq;g=Cd(a.d.h,c);c=GM(g,a.d.A);d=G6(g,a.d.A);b=Oo(g,c);if((d-1|0)==g.S){Cf((Bi(a)).bN,
a.d.w,Pr(g));Cf((Bi(a)).bB,a.d.w,g.S);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.cc.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.A;if(c==j){c=GM(g,c-1|0);d=G6(g,c);}else{if(d!=j){QO(Bi(a),a.d.w);break b;}c=GM(g,d+1|0);d=G6(g,c);}}}Cf((Bi(a)).bN,a.d.w,c);(Bi(a)).ds=1;CP(a,a.d.w,d,0);(Bi(a)).ds=0;Jj(a);}}break a;case 3:break;default:break a;}QO(Bi(a),a.d.w);Z1(a.d.h3);Jj(a);}}return 1;}
function XA(a,b){var c,d,e,f,g,h,i,j;c=a.cM.cW;if(Gb(a.fX,b.k,c))return 1;if(Gb(a.fF,b.k,c))return 1;d=a.dc;if(Gk(b.k,d.gA,d.fx)&&GI(c)?1:0)return 1;e=b.k;f=!a.b4?a.c1:(a.co+a.ci|0)+a.c8|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=Gl(a);i=Ek(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GI(c);if(b.cO){e=FD(a,b.k);e.bv=GM(Cd(a.d.h,e.bq),e.bv);b=a.d.h;if(!Ht(b.dQ,e)&&!Ht(b.dG,e)?0:1)return DY(c,C(179));}return DY(c,C(180));}
function A2q(a,b){var c,d,e,f,g;c=b.cO;if(c&&b.bm==65){c=CK(a.d.h)-1|0;d=GA(a.d.h,c);Cf((Bi(a)).bN,0,0);Cf((Bi(a)).bB,CK(a.d.h)-1|0,d);return 1;}if(c&&b.bm==80){Mq(a.d);return 1;}if(!a.e2&&c&&b.bm==90){if(Dx(Bi(a)))F_(a);b=a.d.h;b.cr=b.cr+1|0;e=b.iL;d=e.q;if(!d)e=null;else{f=(EL(e,d-1|0)).data;e=WY(b,f[0]);c=1;while(c<f.length){WY(b,f[c]);c=c+1|0;}}if(e!==null){CP(a,e.a,e.b,0);Ey(a);}return 1;}if(!c&&!b.dB){if(Bj(b.ei,C(181))){DI(a,C(182));DA(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ei,C(183))){DI(a,C(184));DA(a,a.d.A
-1|0,0);c=1;}else if(Bj(b.ei,C(36))){DI(a,C(22));DA(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ei,C(185))){DI(a,C(186));DA(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ei,C(187))){DI(a,C(188));DA(a,a.d.A-1|0,0);c=1;}else if(!Bj(b.ei,C(189)))c=0;else{DI(a,C(190));DA(a,a.d.A-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dB&&!b.cO)){d=b.bm;if(d>=48&&d<=57){c=d-48|0;e=a.oo.data[c];if(e!==null)e.f();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bm){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AJA(a,b))return 1;if(AGl(a,b))return 1;c=b.cO;if(c&&b.bm==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bm;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dB&&!b.kC)return J(b.ei)>0&&DI(a,b.ei)?1:0;return 0;}return 0;}
function AA$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=TS(a);d=TR(a);if(b.fe!=3&&b.gC==3){e=T4(b.pp);f=new WU;f.yO=c;f.yN=d;g=new Rs;g.sB=f;while(!g.mT&&AB_(e,g)){}if(!g.mT&&Bj(C(191),D_(b))){c=Bd(0,c-100|0);d=Be(CK(b.h)-1|0,d+100|0);BB(b.pp,BG(c,d));h=BQ(3);i=h.data;i[0]=FJ(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.B.data.length);k=0;while(k<d){j=j+GA(e,k)|0;if(k!=(e.B.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.Av=E3();e=b.fc;l=new ACN;l.sr=b;i=Q(B,3);m=i.data;m[0]=Fc(b.h);m[1]=h;b=b.h.df;g=BM();ABo(b,b.dd,
g);h=BQ(3*g.q|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BH(g,o);d=k+1|0;n[k]=b.b1;q=d+1|0;n[d]=b.bY;k=q+1|0;n[q]=b.fT;o=o+1|0;}m[2]=h;CW(e,l,C(192),i);}}}
function VL(a){Mq(a.d);}
function ZT(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.fS){c=E1(b);d=new K;M(d);H(H(d,c),C(193));$rt_globals.console.info($rt_ustr(L(d)));}c=D_(b);if(c!==null&&!Bj(C(180),c)){d=b.h.df;e=QJ(d,d.dd);if(e===null){Oq(b);KN(b.h);}else{f=DX([Do(e),De(e),e.bX.fT]);g=Fc(b.h);h=BQ(1);h.data[0]=AIf(c);d=b.h.e7;if(d.fG===null){i=BQ(0);j=B5(0);}else{c=AUg(AWn(e.cm,d.fd),e);Xb(c);i=c.oL;j=c.mW;}k=b.h.cr;c=b.fc;d=new OV;d.AA=b;l=Q(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BQ(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CW(c,d,C(194),l);}}
else KN(b.h);}
function Hb(a,b,c){var d,e,f,g,h,i;if(c&&a.e2)return 0;d=Ep(Bi(a));e=d.L;if(Dx(Bi(a))){f=a.d.h;g=Bi(a);h=UY(f,g);if(c)Pd(f,g,h);if(c){CP(a,d.L,d.ba,0);F_(a);Ey(a);}}else{h=Fz(FP(a.d.h.B.data[e]),C(174));i=Be(CK(a.d.h)-1|0,e);Cf((Bi(a)).bB,i,0);if(e>=(CK(a.d.h)-1|0))Cf((Bi(a)).bB,i,GA(a.d.h,i));else Cf((Bi(a)).bN,i+1|0,0);if(c)GT(a);else CP(a,e,0,0);}b.g(h);return 1;}
function AGl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.e2)return 0;a:{switch(b.bm){case 8:if(Dx(Bi(a))){GT(a);c=1;}else{b=a.d;d=b.A;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;O5(b.h,e,c);}else{e=b.w-1|0;c=GA(b.h,e);b=a.d.h;LF(b,e);F7(b,e,GA(b,e),1,C(174));}Ey(a);c=CP(a,e,c,0);}}break a;case 9:if(!b.bL){if(!Dx(Bi(a)))DI(a,a.fz);else{f=Ep(Bi(a));g=F8(Bi(a));c=g.L;d=f.L;e=(c-d|0)+1|0;h=BQ(e);i=h.data;j=Q(BK,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fz;d=d+1|0;e=l;}b=new ACU;m=a.d;AJV(b,m.w,m.A);m=new AAp;m.zr
=a;P4(a,h,0,0,j,b,m);f.ba=f.ba+J(a.fz)|0;g.ba=g.ba+J(a.fz)|0;MB(a,a.d.A+J(a.fz)|0);Ey(a);}c=1;}else b:{if(!Dx(Bi(a))){b=a.d;f=Cd(b.h,b.w);if(f.s.data.length>0){g=Vc(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.w;b=DR(e,m.A);n.cr=n.cr+1|0;o=n.iL;h=Q(G9,1);h.data[0]=AS9(e,0,1,g,b.bq,b.bv);BB(o,h);Nn(n,e,0,1,g);HI(f,0,J(g));MB(a,a.d.A-J(g)|0);}}else{b=Ep(Bi(a));f=F8(Bi(a));c=f.L;p=b.L;c=(c-p|0)+1|0;h=BQ(c);k=h.data;j=Q(BK,c);q=j.data;g=a.d;e=g.A;l=g.w;c=0;while(p<=f.L){g=Cd(a.d.h,p);if(g.s.data.length>0){g=Vc(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Jm(h,c);j=C9(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.L)b.ba=Bd(0,b.ba-J(g)|0);if(p==f.L){f.ba=Bd(0,f.ba-J(g)|0);MB(a,a.d.A-J(g)|0);}d=d+1|0;}b=DR(l,e);f=new RC;f.sx=a;P4(a,h,0,1,j,b,f);}Ey(a);c=1;}break a;case 13:if(Dx(Bi(a)))GT(a);b=a.d;E0(Cd(b.h,b.w));b=a.d;AKR(b.h,b.w,b.A);Ey(a);c=CP(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ALl(a);}return c;}
function AJA(a,b){var c,d,e,f;a:{switch(b.bm){case 33:c=b.cO?Io(a,H8(a.bw,a.V),b.bL):JI(a,2-U5(Ek(a),a.V)|0,0,b.dB,b.bL);break a;case 34:c=!b.cO?JI(a,U5(Ek(a),a.V)-2|0,0,b.dB,b.bL):Io(a,((a.bw+Ek(a)|0)/a.V|0)-1|0,b.bL);break a;case 35:if(!IR(a,b.bL)&&!DA(a,(F2(a)).S,b.bL)){c=0;break a;}c=1;break a;case 36:if(!IR(a,b.bL)&&!DA(a,0,b.bL)){c=0;break a;}c=1;break a;case 37:c=b.cO;if(c&&b.dB){Jj(a);d=a.d.h3;e=d.dM;if(e<=0)d=null;else{f=d.fs.data;c=e-1|0;d.dM=c;d=f[c];}if(d===null)c=1;else{CP(a,L$(d),KZ(d),0);JR(Bi(a),
d.oH);c=1;}break a;}c=Sd(a,(-1),c,b.bL);break a;case 38:c=JI(a,(-1),b.cO,b.dB,b.bL);break a;case 39:c=b.cO;if(c&&b.dB){d=a.d.h3;e=d.dM;if(e==(d.fp-1|0))d=null;else{f=d.fs.data;c=e+1|0;d.dM=c;d=f[c];}if(d===null)c=1;else{CP(a,L$(d),KZ(d),0);JR(Bi(a),d.oH);c=1;}break a;}c=Sd(a,1,c,b.bL);break a;case 40:c=JI(a,1,b.cO,b.dB,b.bL);break a;default:}c=0;}if(c&&b.bL){b=(Bi(a)).bB;d=a.d;Cf(b,d.w,d.A);}if(c)I2(a.d);return c;}
function Jj(a){var b,c,d,e,f,g,h;b=a.d;c=b.h3;d=c.dM;c=d<0?null:c.fs.data[d];if(c!==null&&b.w==L$(c)&&a.d.A==KZ(c))return;c=a.d;e=c.h3;b=new NU;d=c.w;f=c.A;c=Bi(a);b.py=DR(d,f);g=AWt(c);b.oH=g;g.ds=0;f=e.dM;h=e.fp;if(f==(h-1|0))ACB(e,b);else{d=f+1|0;while(d<h){Z1(e);d=d+1|0;}ACB(e,b);}e.dM=e.dM+1|0;}
function Ey(a){a.d.h.z7=MZ(GD(a));}
function HX(a,b){var c,d,e,f;a.Ch=null;LP(a.dc,null);c=a.d;a.d=b;K_(c,null,null);K_(b,a,GD(a));d=(B3(a.fC.vk)).data;e=d.length;f=0;while(f<e){d[f].qm(c,b);f=f+1|0;}a.bw=GG(b.mI*a.V);}
function SR(a,b){var c;c=L4(a.d.h,b);if(c===null)return C(21);return c.v;}
function Hy(a,b){var c,d,e,f,g;a.d.lD=b;if(b===null){Bk(Bt(),C(195));LP(a.dc,null);}else{b=b.data;c=DM(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.hb<<24>>24;e=e+1|0;}LP(a.dc,c);}}
function I0(a,b){a.d.qE=b;}
function Bi(a){return a.d.rF;}
function L2(a){var b;b=a.iv;if(b!==null)b.g(a);}
function AIg(){var a=this;B.call(a);a.lJ=null;a.n7=null;a.gY=null;}
function AHu(a,b){var c=new AIg();AWB(c,a,b);return c;}
function AWB(a,b,c){var d,e;a.lJ=b;a.n7=c;d=null;e=new UT;e.sD=a;b.pq(d,e);b=null;d=new UU;d.rK=a;c.pq(b,d);}
function YL(a,b,c){var d,e,f,g,h,i,j;d=a.gY;if(d!==null&&d.ir!==null){e=b!==a.lJ?0:1;f=b.li();g=(b.kv()+f|0)/2|0;h=g-f|0;d=a.gY;d=d.ir.data[GO(d,g,e)];i=g-(!e?d.h6:d.h7)|0;j= -(b.hI(f)-(b.kX()).b|0)|0;c.qh(Bc(((!e?d.h7:d.h6)+i|0)-h|0,c.px())+j|0);return;}}
function T0(){B.call(this);this.Br=null;}
function AMk(a,b){Wh(a.Br,b);}
function T1(){B.call(this);this.y4=null;}
function A1s(a,b){Wh(a.y4,b);}
function T2(){B.call(this);this.xc=null;}
function APU(a,b){return AHm(a.xc,b);}
function HO(){var a=this;B.call(a);a.oM=null;a.sH=null;a.r8=null;}
function A7t(a,b){var c=new HO();Ir(c,a,b);return c;}
function Ir(a,b,c){var d;d=null;a.oM=b.bA;a.sH=d;a.r8=c;}
function AOu(a,b){var c,d;if(b.cO&&b.bm==79){c=a.sH;if(c!==null&&b.bL)Jd(a.oM,c);else Kk(a.oM,a.r8);d=1;}else d=0;return d;}
function TY(){B.call(this);this.u7=null;}
function AQH(a,b){var c,d,e;c=a.u7;d=DO(c.r,c.F)?c.F:!DO(c.r,c.H)?null:c.H;if(d!==null){e=new RL;e.x9=c;e.x7=d;e.x8=b;GK(d,b,e);c.k_=null;c.mz.gY=null;c.fK.eu=null;}}
function TZ(){B.call(this);this.s3=null;}
function A1Z(a,b){b=b;return AJB(a.s3,b);}
var CR=G(0);
function ADH(){var a=this;B.call(a);a.bZ=null;a.b7=null;a.eb=null;}
function Jf(a,b,c,d,e){var f,g;f=Nu(a.bZ);Gi(f,b,c);b=a.bZ;c=b.ee;g=new AC3;g.w3=b;g.w2=c;f.j3=g;Sg(f,d,e);Gn(a,f);}
function Gn(a,b){var c;c=a.eb;if(c!==b)a.eb=BV(c,b);}
function If(a,b){var c;c=new ACQ;c.q8=a;c.q$=b;return c;}
function Yt(a,b){var c;c=new ADS;c.yk=a;c.yl=b;return c;}
function DS(a){var b;b=a.eb;if(b!==null){Mr(b);Gn(a,null);}}
function Ej(a,b){var c,d,e,f;c=a.b7;d=c.c_;e=c.dk;if(d==e.data.length)c.dk=C9(e,d+4|0);d=c.c_;f=d;while(0<f){e=c.dk.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.dk.data[0]=b;c.c_=d+1|0;c.gc=null;return b;}
function Is(a,b){Sh(a.b7,b);}
function JV(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B3(a.b7)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.bZ.bH;d.W.dx(e);f=d.Q;g=d.gd.jd;if(!RX(f)){if(!Oj(f)&&!(!f.eL&&f.d0!==null)){f.eL=0;ACu(f);h=f.eB;i=(h.eq+h.eK+5.0)/10.0;j=Cs(f.f$,f.kO);h=e.ch;k=f.eB;l=f.jJ;m=i*2.0;Cm(h,k);n=j+Lu(h,l,m)|0;f.il=n;n=E6(0,n,f.j.a);if(n){h=D4(e,n,f.j.b,f.f$.cB);Cm(h,f.eB);k=f.jJ;m=j;i=m+i;l=f.eB;o=l.eq;BZ(h,k,i,m+o-(o+l.eK)/16.0);k=f.d0;if(k===null){k=CX(e);f.d0=k;}CM(k,h);Ez(h);Cp(f.mK,0.0,0.0,BR(f.d0),CO(f.d0));}}h=g.l9;k
=f.d0;if(k===null)QK(f,e,0,f.j.a,h);else{j=BR(k);g=g.oc;k=f.i;n=k.a;p=k.b;k=f.d0;DJ(e,n,p,k.eV,f.mK,k,g,h,f.f$.cB);n=f.j.a;if(j<n)QK(f,e,j,n-j|0,h);}}l=d.dg;if(l!==null){q=d.bb;h=d.Q;k=d.gd.jd;if(l.i8!==null){if(l.de===null)AGu(l,q);n=Cs(q,2.0);j=Bd(0,((h.j.b-CO(l.de)|0)/2|0)-n|0);l.ge.a=(((h.i.a+h.j.a|0)-j|0)-BR(l.de)|0)-n|0;f=l.ge;r=h.i.b+j|0;p=n/2|0;f.b=r-p|0;f=l.kI;j=BR(l.de);r=n*2|0;X(f,j+r|0,CO(l.de)+r|0);f=q.bH;g=l.ge;Bs(f,g.a,g.b,l.kI,!l.lS?k.l9:k.jI);Cp(q.mt,0.0,0.0,BR(l.de),CO(l.de));f=q.bH;g=l.ge;n
=g.a+n|0;p=g.b+p|0;g=l.de;DJ(f,n,p,g.eV,q.mt,g,k.oc,!l.lS?k.l9:k.jI,0);}}B$(e,1);j=Cs(d.bb,2.0);n=RX(d.Q);f=d.bb;g=f.d1;f=f.p6;p=n?0:d.Q.j.b;h=d.W.j;X(f,h.a,h.b+p|0);AI5(e,f,!n?d.Q.i:d.W.i,d.gd.jd.jI, -j|0,g);f=d.W;AKg(e,f.j,f.i,j,p,Yn(d.gd.lA,d.bb.cf),d.gd.lA.n2,g);c=c+(-1)|0;}f=a.eb;if(f!==null)AEx(f);}
function H3(a,b){var c,d,e,f;c=a.bZ;if(c.cB==b)d=0;else{c.cB=b;JA(c.es);d=1;}if(d){c=a.eb;if(c!==null){c=B7(c.cg);while(B_(c)){Oe(Ca(c));}}e=(B3(a.b7)).data;b=e.length;f=0;while(f<b){c=e[f];c.Q.eL=1;c.W.kd();f=f+1|0;}}return d;}
function AU1(a,b){var c,d,e,f,g,h,i,j,k;c=a.eb;if(c!==null){d=0;e=c.cg.q-1|0;a:{while(e>=0){d=NW(BH(c.cg,e),b.k,c.cR.cW);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B3(a.b7)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.k;if(B1(h.Q,c)){i=h.dg;if(i!==null)i.lS=Tj(i,c);e=DY(h.bb.cW,null);}else{i=h.dg;if(i!==null)i.lS=0;e=Cs(h.bb,7.0);j=Cs(h.bb,25.0);if(M8(h,c.a,e)){k=Xq(h,c.a,j);if(Nf(h,c.b,e)){e=DY(h.bb.cW,L_(k,C(196)));break b;}if(KS(h,c.b,e)){e=DY(h.bb.cW,L_( -k|0,C(196)));break b;}}if(Ol(h,c.b,e)){j=ADx(h,
c.b,j);if(OG(h,c.a,e)){e=DY(h.bb.cW,L_(j,C(197)));break b;}if(MM(h,c.a,e)){e=DY(h.bb.cW,L_( -j|0,C(197)));break b;}}e=0;}}c:{d:{if(!e){if(!B1(h.W,b.k))break d;if(!h.W.bT(b)&&!DY(h.bb.cW,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function AM4(a,b,c,d){var e,f,g,h,i,j;e=a.eb;if(e!==null){f=0;g=e.cg.q-1|0;a:{while(g>=0){f=Oh(BH(e.cg,g),b.k,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B3(a.b7)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!B1(i.Q,b.k)&&!PQ(i,b.k)){if(!Mi(i,b))break c;if(!i.W.cA(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function AO5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.eb;if(d!==null){e=null;f=d.cg.q-1|0;a:{while(f>=0){e=BH(d.cg,f);g=b.k;h=Fe(e.cq,g);if(!h&&!Lh(e.cq)){e=e.kW;if(e!==null)e.f();}e=!h?null:A7u;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B3(a.b7);j=0;while(true){k=i.data;if(j>=k.length)break;b:{g=k[j];l=b.k;if(!c){c:{m=Cs(g.bb,7.0);n=Cs(g.bb,25.0);if(M8(g,l.a,m)){f=Xq(g,l.a,n);if(Nf(g,l.b,m)){d=Kb(g,l,f,(-1));break c;}if(KS(g,l.b,m)){d=Kb(g,l,f,1);break c;}}if(Ol(g,l.b,m)){h=ADx(g,l.b,n);if(OG(g,l.a,
m)){d=Kb(g,l,(-1),h);break c;}if(MM(g,l.a,m)){d=Kb(g,l,1,h);break c;}}d=null;}if(d!==null)break b;if(B1(g.Q,l)){e=g.dg;if(e!==null&&Tj(e,l)){g.dg.i8.f();d=A7u;break b;}e=g.W.i;f=e.a;h=l.a;f=f-h|0;m=e.b;n=l.b;m=m-n|0;e=g.Q.i;h=e.a-h|0;n=e.b-n|0;e=new Bg;d=new Yp;d.qt=g;d.qv=h;d.qu=n;d.qr=e;d.qq=f;d.qs=m;break b;}}d=!Mi(g,b)?null:g.W.cn(b,c);}if(d!==null){if(!c&&g!==ADC(a)){b=a.b7;f=0;k=b.dk;i=k.data;c=i.length;d:{while(true){if(f>=c){f=(-1);break d;}if(g===i[f])break;f=f+1|0;}}if(f>=0){h=b.c_;if(h<=f){b=new Om;Bm(b,
J$(f));N(b);}if(f){e=i[f];while(f>0){i[f]=i[f-1|0];f=f+(-1)|0;}i[0]=e;i=b.gc;if(i!==null)C7(k,0,i,0,h);}}}return d;}j=j+1|0;}return null;}
function A2k(a,b,c){var d,e,f,g,h;d=a.eb;if(d!==null&&Jy(d))return 1;e=(B3(a.b7)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!B1(d.Q,b.k)){if(!Mi(d,b))break b;if(!d.W.dC(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function AYh(a,b,c){var d,e,f,g,h;d=(B3(a.b7)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.W;h.dA(h.i,h.j,c);h=g.Q;if(h.hE!==null){h.eB=null;h.il=0;h.eL=1;}It(g);h=g.dg;if(h!==null)NX(h);f=f+1|0;}}
function ADC(a){var b;b=a.b7;return b.c_<=0?null:MO(b,0);}
function TE(){var a=this;B.call(a);a.bH=null;a.es=null;a.cW=null;a.bO=null;a.cf=0.0;a.cB=0;a.ee=null;a.dw=null;a.d1=null;a.p6=null;a.mt=null;a.Cd=null;}
function KV(a){var b;b=a.ee;if(b!==null)b.uD();}
function K9(a){var b;b=a.ee;if(b!==null)b.ws();}
function M1(a,b){var c;c=a.es.ew!==(Ev()).activeElement?0:1;if(c)K9(a);a.ee=b;if(c)KV(a);}
function FQ(a,b){K9(a);a.ee=b;KV(a);}
function ABC(a,b){if(a.ee===b)a.ee=null;}
function DO(a,b){return b!==a.ee?0:1;}
function Kq(a){return a.bH.ch;}
function Fn(a,b){return Gy(a.bH,b.h_,b.gZ*a.cf,b.j8,0);}
function Cs(a,b){return Cg(b,a.cf);}
function KC(a,b){var c;c=a.bH;if(!a.cB)c.pU=b;else c.ok=b;JA(a.es);}
function Wp(){B.call(this);this.v7=null;}
function A2d(a,b,c,d){var e,f,g,h;e=(B3(a.v7.b7)).data;f=e.length;g=0;a:{while(g<f){if(e[g].W.dz(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function Wo(){B.call(this);this.tx=null;}
function AM5(a,b){var c,d,e,f;b=b;c=a.tx;b=b.k;d=0;e=c.b7.c_;a:{while(d<e){f=MO(c.b7,d);if(!B1(f.Q,b)&&!PQ(f,b)&&!ACt(f,b)?0:1){c=MO(c.b7,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.wS;if(c!==null&&AIt(c.wD,b)?1:0){d=1;break b;}}d=0;}return d;}
function AFi(){var a=this;B.call(a);a.eU=null;a.o1=0.0;a.iC=0.0;a.hi=0;}
function AXC(){var a=new AFi();ARP(a);return a;}
function ARP(a){var b;b=Tb(0,0,2,20);a.eU=b;a.o1=0.5;a.iC=0.0;IF(187,187,187,255,b.X);}
function S5(a){return a.eU.t.a;}
function ABg(a,b){var c,d;a:{c=a.hi;if(b>a.iC)while(true){d=a.iC+a.o1;a.iC=d;a.hi=a.hi?0:1;if(b>d)continue;else break a;}}return a.hi==c?0:1;}
function Ug(a,b,c){X(a.eU.u,b,c);}
function YK(a,b){a.iC=b+a.o1*1.25;a.hi=1;}
function AKe(a,b){return AEX(a.eU.u,0,0,b);}
function ACf(a,b,c){if(a.hi)ZV(a.eU,b,c.a,c.b);}
function AD0(){var a=this;B.call(a);a.gb=null;a.h=null;a.pT=null;a.rF=null;a.h3=null;a.ju=null;a.fc=null;a.lD=null;a.w=0;a.A=0;a.is=0;a.iV=null;a.iF=null;a.pp=null;a.fe=0;a.gC=0;a.gW=0;a.i3=FM;a.Av=FM;a.A_=FM;a.qE=0;a.EI=0;a.dT=0;a.mI=0.0;a.fS=0;}
function A4I(a,b,c){var d=new AD0();AK9(d,a,b,c);return d;}
function AN_(a,b){var c=new AD0();ARg(c,a,b);return c;}
function A4O(a,b,c){var d=new AD0();VH(d,a,b,c);return d;}
function AK9(a,b,c,d){VH(a,(AIH(b)).ki,c,d);}
function ARg(a,b,c){VH(a,b,null,c);}
function VH(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.rF=AMz();f=new TC;f.fs=Q(NU,16);f.fp=0;f.dM=(-1);a.h3=f;a.iV=null;a.iF=BM();a.pp=BM();a.fe=1;a.gC=1;a.gW=1;a.dT=0;a.mI=0.0;a.fS=0;a.gb=d;a.pT=c;c=new ZW;g=e.length;b=Q(DH,Bd(1,g));if(!g)b.data[0]=XU(C(21));h=b.data;i=0;while(i<g){h[i]=XU(e[i]);i=i+1|0;}d=new Yx;f=new NR;QR(f);d.fd=f;c.e7=d;c.dQ=JZ();c.dG=JZ();c.iL=BM();if(!h.length){c=new BU;Y(c);N(c);}c.B=b;j=ACr(c);c.df=AGW(ATy(K0(0,j,0),null,null));a.h=c;}
function D_(a){var b;b=a.pT;if(b===null){b=a.gb;b=b===null?C(180):AHY(b.gO);}return b;}
function HA(a){var b;b=a.gb;return b===null?null:b.kt;}
function Ms(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gC=3;a.gW=3;a.fe=3;c=CQ(b[0]);d=EO(b[1]);CQ(b[2]);if(b.length<5)Oa(a.h,c,d);else{e=CQ(b[3]);f=e.data;g=EO(b[4]);XB(a.h,c,d,e,g,0);TN(a,Jm(e,f.length),Or(g));}if(a.fS){h=E1(a);i=JT(E3(),a.i3);j=new K;M(j);H(HH(H(H(j,h),C(198)),i),C(199));$rt_globals.console.info($rt_ustr(L(j)));}h=a.ju;if(h!==null)L2(h);}
function I2(a){var b;SD(a,DR(a.w,a.A),Jb(a.h,a.w,a.A));if(!(a.iV!==null&&!EC(a.iF))){b=a.A;if(b>0)SD(a,DR(a.w,b-1|0),Jb(a.h,a.w,a.A-1|0));}}
function SD(a,b,c){var d,e,f,g,h,i,j,k;a.iV=null;Iw(a.iF);d=Cx(a.h.dQ,c);if(d!==null)c=d;a:{e=Cx(a.h.dG,c);if(e!==null){a.iV=L4(a.h,c);c=B7(e);while(true){if(!B_(c))break a;f=Ca(c);BB(a.iF,L4(a.h,f));}}}c=a.ju;if(c!==null){g=b.bq;h=b.bv;b=c.fC;f=D_(c.d);e=HA(c.d);i=(B3(b.vI)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Bn(f,e)){b=b.DZ;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new P5;e.Eo=c;e.Eq=f;e.Ep=g;e.En=h;b.tR(f,g,h,e,c.j9);}}}
function TN(a,b,c){var d,e,f,g,h;if(a.fc!==null){a.A_=E3();d=a.h.cr;e=a.fc;f=new Yo;f.zh=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BQ(1);b.data[0]=d;h[2]=b;CW(e,f,C(200),g);}}
function K_(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.ju=b;a.fc=c;if(c===null){d=a.h.B.data;e=d.length;f=0;while(f<e){Tn(d[f]);f=f+1|0;}}else if(a.fe==1){a.i3=E3();b=D_(a);if(BO(b,C(180))){a.gC=3;a.gW=3;a.fe=3;b=a.ju;if(b!==null)L2(b);}else{e=BO(b,C(191));f=BO(b,C(201));d=Fc(a.h);g=d.data.length;h=!e?5120:10240;i=AIf(b);if(f)JW(a,d,i);else if(g<=h)JW(a,d,i);else if(!e){Vw(a,Or(d),i);JW(a,d,i);}else{Vw(a,Or(d),i);j=Or(d);k=a.fc;c=new Q8;c.zj=a;l=Q(B,2);m=l.data;m[0]=j;j=BQ(1);j.data[0]=i;m[1]=j;CW(k,c,C(202),l);a.gC=
2;JW(a,d,i);}}}}
function Vw(a,b,c){var d,e;d=a.fc;e=new U8;e.zE=a;CW(d,e,C(203),I(B,[b,DX([c,250])]));a.gW=2;}
function JW(a,b,c){var d,e,f,g;d=a.fc;e=new Xc;e.x1=a;f=Q(B,2);g=f.data;g[0]=b;b=BQ(1);b.data[0]=c;g[1]=b;CW(d,e,C(204),f);a.fe=2;}
function E1(a){var b;b=a.gb;return b===null?C(21):ACx(b);}
function Mq(a){var b,c,d,e,f;if(a.fS){b=E1(a);c=new K;M(c);H(H(c,b),C(205));$rt_globals.console.info($rt_ustr(L(c)));}b=D_(a);if(b===null)d=null;else{a:{e=(-1);switch(J6(b)){case -1655966961:if(!Bj(b,C(201)))break a;e=3;break a;case 3401:if(!Bj(b,C(206)))break a;e=2;break a;case 98723:if(!Bj(b,C(207)))break a;e=1;break a;case 3254818:if(!Bj(b,C(191)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(208);break b;case 2:d=C(209);break b;case 3:d=C(210);break b;default:d=null;break b;}d=C(211);}}if
(d===null)L2(a.ju);else{a.i3=E3();b=a.fc;c=new ABv;c.vl=a;f=Q(B,1);f.data[0]=Fc(a.h);CW(b,c,d,f);}}
function Oq(a){var b;b=AUg(a.h.e7,null);Xb(b);TN(a,b.oL,b.mW);}
function ADQ(){var a=this;B.call(a);a.yx=null;a.BW=null;a.qM=null;a.vI=null;a.vk=null;a.AU=null;}
function Oy(a,b,c){return RI(a,B3(a.yx),b,c);}
function Zn(a,b,c){return RI(a,B3(a.BW),b,c);}
function RI(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Bn(c,d))return g.ET;f=f+1|0;}return null;}
function ABW(a,b,c){var d,e,f,g;d=(B3(a.qM)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Bn(b,c))return g.EO;f=f+1|0;}return null;}
function Fx(){var a=this;B.call(a);a.cb=0;a.c$=null;a.cF=null;a.eF=null;a.dL=0;}
var A7v=0;var A7r=0;function XF(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cF;j=i===b&&!i.ji?0:1;if(j){a.cF=b;NC(b,c.ch,a.c$.g9);}k=H8(Be(FK(b),e+2048|0),1024);l=a.eF;m=l.data.length;n=k<=m?0:1;if(n){a.eF=C9(l,k);while(m<k){a.eF.data[m]=CX(c);m=m+1|0;}}o=a.c$.hK;if(!(!j&&!n)){if(A7v){l=b.gm;$rt_globals.console.info("fMeasure"+l.data);A7v=0;}if(!A7r){c=o.db;b="alphabetic";c.textBaseline=b;}else{b=o.db;c="top";b.textBaseline=c;}a.dL=f/1024|0;p=0;while(p<k){Kl(a,o,d,a.dL+p|0);p=p+1|0;}a.cF.ji=0;}e=a.eF.data.length;if
(e&&f<=FK(a.cF)){f=f/1024|0;g=a.dL;if(f!=g){if(Wu(f-g|0)>=e){g=0;while(g<e){Kl(a,o,d,f+g|0);g=g+1|0;}a.dL=f;}else{while(true){g=a.dL;if(g>=f)break;Kl(a,o,d,g+e|0);a.dL=a.dL+1|0;}while(true){g=a.dL;if(g<=f)break;Kl(a,o,d,g-1|0);a.dL=a.dL-1|0;}}}}}
function Kl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Ym(a,e);g=a.cF;if(f>=g.s.data.length)return;h=g.gm;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.cb;l=a.c$.g9;EP(b);a:{while(true){g=a.cF;if(f>=g.s.data.length)break a;m=l.data;g=J1(g,f);n=m[KJ(g)];o=!A7r?LN(n,c):Nj(n,c);m=h.data;Cm(b,n);BZ(b,g.v,k,o);k=m[f]-j+a.cb;if(k>1024.0)break;f=f+1|0;}}h=a.eF.data;CM(h[d%h.length|0],b);}
function Qi(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.eF.data.length;if(!o)return;if(g>FK(a.cF))return;p=a.cF;q=p.eZ;r=p.s;s=g/1024|0;t=Ym(a,g);u= -a.cb|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.eF.data[s%o|0];bb=w[t];bc=z[t]+a.cb|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.cb|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.cb:2*a.cb|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.cb:2*a.cb|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.br.gr;if(bb===j)bo=h.br.rB;if(k!==null){p=B7(k);d:{while(B_(p)){if(BO(Ca(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.br.wq;}if(n!==null){w=n.nF;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AEh(h.d8,h,bi,n.hb);}if(!bn&&!bl){i.b=Be(i.b,FK(a.cF));AF$(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.cb:0)|0,(g
+bg|0)<=(i.b+(!y?a.cb:2*a.cb|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.cb:0)|0,g-x|0,bo);}else{bp=h.jO.data[bb.b0];p=bn?h.br.k2:S_(bo,W2(h,bp.mS));Cp(a.c$.jt,g-x|0,0.0,bg,v);X(a.c$.ih,bg,f);Ha(a.c$,d,ba,u+c|0,b,bp.g7,p);}if((bb.bF&12)>>2>0){bc=u+c|0;B$(d,1);p=a.c$;bq=p.nH;bq.a=bg;x=b+p.ud|0;bk=x-p.BK|0;br=p.qV;bs=x+br;ba=p.hu;T5();Mf(d,bc,bk,bq,br,bs,ba,A7w.lb.g7);B$(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AF$(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.jO.data[h.b0];o=n.g7;p=S_(m,W2(f,n.mS));q=f.br.k2;f=a.c$;r=f.jt;s=f.ih;t=l;u=i-j|0;v=u;w=e;Cp(r,t,0.0,v,w);X(s,u,e);Ha(a.c$,b,g,c,d,o,p);l=l+i|0;Cp(r,l-k|0,0.0,k,w);X(s,k,e);f=a.c$;c=c+i|0;Ha(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cp(r,t,0.0,i,w);X(s,i,e);Ha(a.c$,b,g,c-j|0,d,o,q);}
function S_(b,c){if(b!==null)c=b;return c;}
function Ym(a,b){var c,d,e,f,g,h,i;c=a.cF;d=c.gm;e=0;f=c.s.data.length;g=b;b=BL(e,f);if(b>0){c=new BU;Y(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BL(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AD7(a){var b,c,d;b=a.eF.data;c=b.length;d=0;while(d<c){AGx(b[d]);d=d+1|0;}a.eF=a.c$.nT;a.cF=null;}
function AIS(a,b,c,d,e,f,g,h,i){var j,k;j=FK(a.cF);if(j)j=j+a.cb|0;if(!j)j=j-a.cb|0;k=Bd( -a.cb|0,j-g|0);if(k>=h)return;X(f,h-k|0,e);Bs(b,c+k|0,d,f,i);}
function Zq(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=Q(Fx,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.ug(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cF===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Fx;g.cb=3;g.dL=0;g.c$=d;g.eF=d.nT;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AD7(q);j=j+1|0;}return i;}
function S3(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cF;if(e!==null)e.ji=1;d=d+1|0;}}
function Ox(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AD7(b[d]);d=d+1|0;}}
function AGb(){A7r=0;}
function AHL(){var a=this;B.call(a);a.f6=null;a.dl=null;a.e9=null;a.fI=null;a.oD=null;a.op=null;}
function Jc(){var a=new AHL();AX9(a);return a;}
function AX9(a){a.f6=new Bg;a.dl=new Bg;a.e9=new Bg;a.fI=new Bg;a.oD=new B2;a.op=new B2;}
function ZD(a){var b;b=a.dl;return !Bc(b.a,b.b)?0:1;}
function IN(a,b){return Gk(b,a.e9,a.fI);}
function F6(a,b,c,d){var e,f,g,h,i;e=IN(a,b);f=Gk(b,a.f6,a.dl);if(!e&&!f)return null;if(!f){if(!d)c.g(Ve(a,b.a-a.e9.a|0));else c.g(QM(a,b.b-a.e9.b|0));}g=!d?a.f6.a+(a.dl.a/2|0)|0:a.f6.b+(a.dl.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Sl;b.v2=a;b.v3=c;b.v1=i;}else{b=new Sk;b.rV=a;b.rT=c;b.rU=i;}return b;}
function H5(a,b,c){if(c!==null)BP(a.oD,c);if(b!==null)BP(a.op,b);}
function AFt(b,c){var d;d=new AB5;d.tv=b;d.B7=c;return d;}
function QM(a,b){var c,d,e;c=a.fI.b;d=a.dl.b;e=c-d|0;return AFt(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Ve(a,b){var c,d,e;c=a.fI.a;d=a.dl.a;e=c-d|0;return AFt(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Ku(a,b,c,d,e,f,g){Vi(a,b,c,d,e,f,g,1);}
function Rz(a,b,c,d,e,f,g){Vi(a,b,c,d,e,f,g,0);}
function Vi(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(YS(d,d,e),i);e=e-d|0;i=d-j|0;i=i?YS(b,i,e):0;if(!h){k=a.f6;k.a=i+c|0;k.b=f-g|0;l=a.dl;l.a=j;l.b=g;l=a.e9;l.a=c;l.b=k.b;k=a.fI;k.a=d;k.b=g;break a;}k=a.f6;k.a=f-g|0;k.b=i+c|0;l=a.dl;l.a=g;l.b=j;l=a.e9;l.a=k.a;l.b=c;k=a.fI;k.a=g;k.b=d;break a;}}X(a.fI,0,0);X(a.dl,0,0);}}
function Vx(a,b){GV(a,b);G0(a,b);}
function GV(a,b){var c;c=a.e9;Bs(b,c.a,c.b,a.fI,a.oD);}
function G0(a,b){var c,d;c=a.dl;c.a=c.a-2|0;c.b=c.b-2|0;d=a.f6;Bs(b,d.a+1|0,d.b+1|0,c,a.op);b=a.dl;b.a=b.a+2|0;b.b=b.b+2|0;}
function Gb(a,b,c){return IN(a,b)&&GI(c)?1:0;}
function AFh(){var a=this;B.call(a);a.E4=20;a.gA=null;a.fx=null;a.lw=0.0;a.lt=null;a.jp=0;a.kY=0;a.hm=0;a.c4=null;a.oF=null;a.fj=null;a.gL=null;a.gJ=0;}
function AHD(){var a=new AFh();A2v(a);return a;}
function A2v(a){a.E4=20;a.gA=new Bg;a.fx=new Bg;a.c4=BM();a.oF=DM(0);}
function ABR(a,b,c){var d,e,f,g,h;d=a.gJ;if(b==d)return;e=a.c4.q;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){RY(a,b);a.gJ=b;}else{XS(a,c);if(a.gJ>=b)while(true){if(h<g)break a;a.gJ=Pt(BH(a.c4,h%e|0),a.fj,a.gL,a.gJ,b,f,a.lw);h=h+(-1)|0;}while(g<=h){a.gJ=Pt(BH(a.c4,g%e|0),a.fj,a.gL,a.gJ,b,f,a.lw);g=g+1|0;}}}}
function LP(a,b){if(b===null)b=DM(0);a.oF=b;}
function AA9(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hm;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c4;h=BH(h,g%h.q|0);i=a.gA;j=a.oF;k=h.fu.b;l=d.le;m=b+f|0;n=h.cv;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&V8(d,j,r,l)!==l.k$?0:1){k=Bc((q-p|0)+1|0,h.cv);X(h.je,BR(h.cS),k);Cp(h.jZ,0.0,Bc(p,h.cv),BR(h.cS),k);t=r;}else{u=V8(d,j,r,l);Np(h,e,f+Bc(p,h.cv)|0,i,l.o4,u);X(h.je,BR(h.cS),h.cv);Cp(h.jZ,0.0,Bc(q,h.cv),BR(h.cS),h.cv);p=q;}q=q+1|0;r=t;}u=V8(d,j,r,l);Np(h,
e,f+Bc(p,h.cv)|0,i,l.o4,u);g=g+1|0;f=f+a.hm|0;}}
function S1(a,b,c,d){var e,f,g,h,i,j;e=a.c4.q;while(true){f=a.c4.q;g=Bc(f,a.hm);if(g>(d+a.kY|0))break;h=BG(0,g);i=new QQ;g=a.fx.a;f=a.kY;j=a.lt;i.je=new Bg;i.jZ=new B2;i.qj=h;i.eg=20;i.cv=f;i.fu=BG(g,20*f|0);i.hz=LN(j,f);if(i.cS===null)i.cS=CX(b);BB(a.c4,i);}if(f==e)return;XS(a,b);RY(a,c);}
function RY(a,b){var c,d,e,f,g,h,i,j,k;c=a.c4;d=c.q;e=Bc((b/(d*20|0)|0)+1|0,d)*20|0;c=B7(c);while(B_(c)){f=Ca(c);g=a.fj;h=a.lw;EP(g);i=0;while(true){j=f.eg;if(i>=j)break;k=e-Bc(d,j)|0;if(k<b)k=e;e=k+1|0;GQ(f,g,Dm(e),Bc(f.cv,i)+f.hz|0,h);i=i+1|0;}CM(f.cS,g);f.w8=g.jj;}}
function YP(a,b,c,d){a.lt=b;a.kY=c;a.hm=c*20|0;a.jp=d;YR(a);}
function XS(a,b){var c;c=a.fj;if(!(c!==null&&c.jj==a.jp)){c=D4(b,a.fx.a,a.hm,a.jp);a.fj=c;Cm(c,a.lt);AAf(a.fj,2);}c=a.gL;if(!(c!==null&&c.jj==a.jp)){b=D4(b,a.fx.a,a.kY,a.jp);a.gL=b;Cm(b,a.lt);AAf(a.gL,2);}}
function IC(a){Fy(a.c4,new ADK);Iw(a.c4);YR(a);}
function YR(a){a.fj=BV(a.fj,null);a.gL=BV(a.gL,null);}
function Sm(a,b,c,d,e){Cn(a.gA,b);X(a.fx,c,d);a.lw=e;}
function Xv(){B.call(this);this.Dr=null;}
function Xu(){B.call(this);this.qC=null;}
function AMx(a,b){var c;c=a.qC;F4(c,FX(b,K5(c)));}
function Xt(){B.call(this);this.tl=null;}
function ALS(a,b){var c;c=a.tl;IL(c,FX(b,ABf(c)));}
function AKj(){var a=this;B.call(a);a.jt=null;a.ih=null;a.nH=null;a.hu=null;a.g9=null;a.nT=null;a.da=null;a.hK=null;a.qV=0.0;a.d$=0;a.ud=0;a.BK=0;a.iP=0;}
function APY(a){var b=new AKj();ATl(b,a);return b;}
function ATl(a,b){var c;a.jt=new B2;a.ih=new Bg;a.nH=new Bg;c=new B2;a.hu=c;a.g9=Q(LC,4);a.nT=Q(Iu,0);a.iP=b;LE(c);}
function Yr(a){a.hK=BV(a.hK,null);}
function Sq(a,b,c){var d,e;d=C0(E7(a.da)*b);a.d$=d;e=a.da;a.ud= -( -((d+e.eq+e.eK)/2.0)|0)|0;AD_(a,c);return a.d$;}
function P0(a,b){var c,d;LE(a.hu);c=a.hu;U4(c,b,c);a.qV=W_(a.hu);c=a.hu;d=c.bs+c.bf+1.5|0;a.BK=d;X(a.nH,0,d*2|0);}
function AD_(a,b){a.hK=BV(a.hK,D4(b,1024,a.d$,a.iP));}
function Ha(a,b,c,d,e,f,g){var h,i;h=a.ih;if(h.a&&h.b){i=a.jt;if(i.bC!==0.0&&i.bf!==0.0){DJ(b,d,e,h,i,c,f,g,a.iP);return;}}}
function Xs(){B.call(this);this.A9=null;}
function AU3(a){var b,c;b=a.A9;c=b.j_?0:1;b.j_=c;b=new K;M(b);JB(H(b,C(212)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xz(){B.call(this);this.xF=null;}
function AXh(a){var b,c;b=a.xF;c=b.k4^1;b.k4=c;b=new K;M(b);JB(H(b,C(213)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xy(){B.call(this);this.t7=null;}
function A3l(a){var b,c,d,e,f;b=a.t7;c=(b.eh+3|0)%6|0;b.eh=c;d=b.eY.data;e=d.length;f=0;while(f<e){b=d[f];b.cb=c;b=b.cF;if(b!==null)b.ji=1;f=f+1|0;}}
function Xx(){B.call(this);this.wu=null;}
function AP5(a){var b;b=a.wu;b.b4=b.b4?0:1;IC(b.dc);b.dc=AHD();N9(b);AAJ(b,b.i,b.j,b.cM.cf);}
function Xw(){B.call(this);this.rl=null;}
function ARM(a){var b;b=a.rl;b.lY=b.lY?0:1;}
function Xr(){B.call(this);this.zz=null;}
function A2P(a){var b;b=a.zz;b.pX=b.pX?0:1;}
function UT(){B.call(this);this.sD=null;}
function AP8(a){var b;b=a.sD;YL(b,b.lJ,b.n7);}
function UU(){B.call(this);this.rK=null;}
function AZ3(a){var b;b=a.rK;YL(b,b.n7,b.lJ);}
var AGp=G();
function Nz(){B.call(this);this.Dk=null;}
var A66=null;var A7x=null;function AX$(){AX$=Bn(Nz);A2$();}
function ANV(a){var b=new Nz();AH9(b,a);return b;}
function AH9(a,b){AX$();a.Dk=b;}
function A2$(){A66=ANV(C(214));A7x=ANV(C(215));}
var AES=G(0);
function AI0(b,c,d){return IF(b,c,d,255,new B2);}
function IF(b,c,d,e,f){Cp(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Vp(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AOM(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bn=g+i;e.bs=h+i;e.bf=j+i;return e;}
function Iv(b,c,d,e,f){f=Vp(b,c,d,f);f.bC=e;return f;}
function HT(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var AAa=G();
function AOR(a,b){var c,d,e;c=b.cO;d=c&&!b.bL&&!b.dB&&!b.kC?1:0;a:{if(d){d=b.bm;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bL&&!c&&!b.dB&&!b.kC?1:0;d=d&&b.bm==46?1:0;}b:{if(!d){e=b.bm;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.oQ=1;}return 0;}
function Z_(){B.call(this);this.xA=null;}
function AWf(a,b){var c;c=a.xA.ee;return c!==null&&c.iu(b)?1:0;}
function TQ(){var a=this;B.call(a);a.bb=null;a.wS=null;a.CK=null;a.EZ=null;a.Q=null;a.dg=null;a.W=null;a.gd=null;a.pS=0;}
function AEw(a){var b=new TQ();ARC(b,a);return b;}
function A2C(a,b){var c=new TQ();AFs(c,a,b);return c;}
function ARC(a,b){AFs(a,b,AUC());}
function AFs(a,b,c){var d;a.bb=b;d=new Uv;E2(d);d.mK=new B2;d.f$=b;a.Q=d;a.W=c;}
function Tr(a,b){var c,d;if(a.dg===null){c=new QL;c.ge=new Bg;c.kI=new Bg;a.dg=c;d=a.gd;if(d!==null)AAz(c,d);}a.dg.i8=b;}
function DL(a,b){var c;c=a.Q;c.eL=c.eL|(BO(c.jJ,b)?0:1);c.jJ=b;It(a);}
function AAA(a,b,c){var d,e,f;d=a.Q;e=BO(d.hE,b)?0:1;f=c===d.kO?0:1;if(e){d.hE=b;d.eB=null;QF(d,0);}d.eL=d.eL|(!e&&!f?0:1);d.kO=c;d.il=0;It(a);}
function EG(a,b){var c;a.gd=b;c=b.tn;BD(b);AAA(a,c,3.0);c=a.dg;if(c!==null)AAz(c,b);}
function J4(a){var b;b=a.Q;b.d0=BV(b.d0,null);b.eB=null;a.W=BV(a.W,null);b=a.dg;if(b!==null){NX(b);b.i8=null;}}
function Lg(a,b){var c,d,e;c=a.W;d=c.i;e=c.j;b=BV(c,b);a.W=b;b.dA(d,e,a.bb.cf);}
function Et(a,b,c){a.W.dA(b,c,a.bb.cf);It(a);}
function It(a){var b,c,d;if(a.bb.cf!==0.0){b=a.Q;if(b.hE!==null){c=a.W.j.a;b.j.a=c;d=b.d0;if(d!==null&&c!=BR(d)&&!(c>=b.il&&BR(b.d0)>=b.il))b.eL=1;b=a.Q;b.bR=a.bb.cf;if(Oj(b))c=0;else{b=a.Q;QF(b,VG(b));c=b.j.b;}b=a.Q.i;d=a.W.i;X(b,d.a,d.b-c|0);b=a.dg;if(b!==null)Cn(b.ge,a.Q.i);return;}}}
function ACJ(a){return VG(a.Q);}
function Mi(a,b){return ACt(a,b.k);}
function ACt(a,b){var c;c=!(a.pS&1)?0:1;return !c&&!B1(a.W,b)?0:1;}
function L_(b,c){if(b<0)c=C(216);else if(b>0)c=C(217);return c;}
function OG(a,b,c){var d;d=a.Q.i.a;return (d-c|0)<=b&&b<d?1:0;}
function MM(a,b,c){var d,e;d=a.Q;e=d.i.a+d.j.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Nf(a,b,c){var d;d=a.Q.i.b;return (d-c|0)<=b&&b<d?1:0;}
function KS(a,b,c){var d,e;d=a.W;e=d.i.b+d.j.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Ol(a,b,c){var d,e,f;d=a.Q.i.b-c|0;e=a.W;f=(e.i.b+e.j.b|0)+c|0;return d<=b&&b<f?1:0;}
function ADx(a,b,c){var d,e;d=a.Q.i.b+c|0;e=a.W;return AJr(b,d,(e.i.b+e.j.b|0)-c|0);}
function M8(a,b,c){var d,e,f;d=a.Q;e=d.i.a;f=e-c|0;e=(e+d.j.a|0)+c|0;return f<=b&&b<e?1:0;}
function Xq(a,b,c){var d,e;d=a.Q;e=d.i.a;return AJr(b,e+c|0,(e+d.j.a|0)-c|0);}
function AJr(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BL(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function PQ(a,b){var c;a:{b:{c:{c=Cs(a.bb,7.0);if(M8(a,b.a,c)){if(Nf(a,b.b,c))break c;if(KS(a,b.b,c))break c;}if(!Ol(a,b.b,c))break b;if(!OG(a,b.a,c)&&!MM(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function Kb(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.W;i=b.i;j=i.a;k=i.b;b=b.j;l=b.a;m=b.b;b=new VD;b.u1=a;b.u2=e;b.u_=f;b.va=c;b.u8=g;b.u9=j;b.u5=l;b.u6=d;b.u3=h;b.u4=k;b.vN=m;return b;}
function Ks(){var a=this;B.call(a);a.u=null;a.t=null;a.X=null;a.bl=null;}
function Sv(){var a=new Ks();ACh(a);return a;}
function Tb(a,b,c,d){var e=new Ks();AM8(e,a,b,c,d);return e;}
function ACh(a){a.u=new Bg;a.t=new Bg;a.X=new B2;a.bl=new B2;}
function AM8(a,b,c,d,e){a.u=new Bg;a.t=new Bg;a.X=new B2;a.bl=new B2;Hg(a,b,c,d,e);}
function Hg(a,b,c,d,e){X(a.u,b,c);X(a.t,d,e);}
function ABi(a){X(a.t,0,0);}
function Lh(a){var b;b=a.t;return Bc(b.a,b.b)?0:1;}
function Fe(a,b){return Gk(b,a.u,a.t);}
function ZV(a,b,c,d){var e;e=a.u;Bs(b,e.a+c|0,e.b+d|0,a.t,a.X);}
function VX(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.bl;i=a.X;Gv(b,b.iT);GF(b.iT,b.Y,d,e,g,b.c6);N4(b.iT,b.Y,c);g=b.iT;j=b.Y;FI(j,g.wi,h);FI(j,g.wg,i);c=g.sZ;j.uniform2f(c,f,0.0);F3(b);}
var Fr=G();
function Nx(){Fr.call(this);this.ET=null;}
function AA2(){Fr.call(this);this.EO=null;}
function YZ(){Fr.call(this);this.DZ=null;}
var He=G(0);
var SC=G(0);
function B2(){var a=this;B.call(a);a.bn=0.0;a.bs=0.0;a.bf=0.0;a.bC=0.0;}
function ADY(a,b,c,d){var e=new B2();A0B(e,a,b,c,d);return e;}
function ALd(a){var b=new B2();AKk(b,a);return b;}
function A0B(a,b,c,d,e){a.bn=b;a.bs=c;a.bf=d;a.bC=e;}
function Cp(a,b,c,d,e){a.bn=b;a.bs=c;a.bf=d;a.bC=e;}
function AKk(a,b){a.bn=b.bn;a.bs=b.bs;a.bf=b.bf;a.bC=b.bC;}
function BP(a,b){a.bn=b.bn;a.bs=b.bs;a.bf=b.bf;a.bC=b.bC;return a;}
function AUm(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BF(a)===BF(b)){b=b;if(b.bn===a.bn&&b.bs===a.bs&&b.bf===a.bf&&b.bC===a.bC?1:0){c=1;break a;}}c=0;}return c;}
var LK=G(0);
function AIz(){var a=this;Fv.call(a);a.cJ=null;a.q=0;}
function BM(){var a=new AIz();AOv(a);return a;}
function AOv(a){a.cJ=Q(B,10);}
function MU(a,b){var c,d;c=a.cJ.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cJ=C9(a.cJ,d);}}
function BH(a,b){KH(a,b);return a.cJ.data[b];}
function AZM(a){return a.q;}
function BB(a,b){var c,d;MU(a,a.q+1|0);c=a.cJ.data;d=a.q;a.q=d+1|0;c[d]=b;a.b3=a.b3+1|0;return 1;}
function AJE(a,b,c){var d,e,f;QH(a,b);MU(a,a.q+1|0);d=a.q;e=d;while(e>b){f=a.cJ.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cJ.data[b]=c;a.q=d+1|0;a.b3=a.b3+1|0;}
function EL(a,b){var c,d,e,f;KH(a,b);c=a.cJ.data;d=c[b];e=a.q-1|0;a.q=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b3=a.b3+1|0;return d;}
function AG_(a,b){var c;c=Le(a,b);if(c<0)return 0;EL(a,c);return 1;}
function Iw(a){AE3(a.cJ,0,a.q,null);a.q=0;a.b3=a.b3+1|0;}
function AIM(a,b,c){var d,e,f,g,h,i;QH(a,b);if(c.eI())return 0;MU(a,a.q+c.c2()|0);d=c.c2();e=a.q;f=e-1|0;while(f>=b){g=a.cJ.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.q=e+d|0;h=c.b9();i=0;while(i<d){g=a.cJ.data;e=b+1|0;g[b]=h.b_();i=i+1|0;b=e;}a.b3=a.b3+1|0;return 1;}
function KH(a,b){var c;if(b>=0&&b<a.q)return;c=new BI;Y(c);N(c);}
function QH(a,b){var c;if(b>=0&&b<=a.q)return;c=new BI;Y(c);N(c);}
function Fy(a,b){var c;c=0;while(c<a.q){b.g(a.cJ.data[c]);c=c+1|0;}}
function LC(){var a=this;B.call(a);a.oj=null;a.Cq=null;a.o2=0.0;a.CD=0;a.CV=0;a.tu=0;a.Dz=0;a.eq=0.0;a.eK=0.0;a.Cu=0.0;a.p7=0.0;a.Cz=0;a.qZ=null;}
function LN(a,b){return Nj(a,b)+a.tu|0;}
function Nj(a,b){return (b-E7(a)|0)/2|0;}
function E7(a){return C0(a.eq+a.eK);}
function Nk(a,b){return C0((a.eq+a.eK)*b);}
function Iu(){var a=this;B.call(a);a.eN=null;a.f4=null;a.eV=null;}
var A6P=0;function AGx(a){var b;b=a.f4;if(b!==null){A6P=A6P-1|0;a.eN.d5.deleteTexture(b);a.f4=null;}}
function BR(a){return a.eV.a;}
function CO(a){return a.eV.b;}
function Tg(a,b,c,d){var e;e=a.eV;e.a=b;e.b=c;Ot(a);a.eN.d5.texStorage2D(3553,1,d,b,c);e=a.eN.d5;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Ot(a){var b,c;b=a.eN.d5;c=a.f4;b.bindTexture(3553,c);}
function CM(a,b){WT(a,b.nW,b.np,32856);YV(a,b,0,0);}
function WT(a,b,c,d){var e,f,g,h;a:{e=a.eV;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){Ot(a);break a;}e=a.eN.d5;h=a.f4;e.deleteTexture(h);a.f4=a.eN.d5.createTexture();Tg(a,b,c,d);break a;}}Tg(a,b,c,d);}}
function JS(a,b,c,d){Ot(a);YV(a,b,c,d);}
function YV(a,b,c,d){var e;e=a.eN.d5;b=b.i9;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var YO=G(0);
var A7y=0.0;function LE(b){Cp(b,1.0471975803375244,0.75,1.25,0.375);}
function U4(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:Jp(b.bC,Jp(c,A7y));Cp(d,b.bn/c,b.bs*c,ATM(b.bf*c,1.25),e);}
function W_(b){var c;c=b.bs;return c-(c|0)>=0.25?0.0:0.5;}
function AEv(){A7y=Nb(Nb(0.5,0.375),4.0);}
var OL=G(0);
function GI(a){return DY(a,null);}
function Ry(b){var c;c=new Z5;c.vE=b;return c;}
function Y8(){B.call(this);this.tK=null;}
function AXO(a){KV(a.tK);}
function Y7(){B.call(this);this.wb=null;}
function AUP(a){K9(a.wb);}
function AK1(){var a=this;B.call(a);a.bN=null;a.bB=null;a.ds=0;}
function AMz(){var a=new AK1();A2W(a);return a;}
function AWt(a){var b=new AK1();AQ1(b,a);return b;}
function A2W(a){a.bN=new Hf;a.bB=new Hf;}
function AQ1(a,b){a.bN=new Hf;a.bB=new Hf;JR(a,b);}
function JR(a,b){AB8(a.bN,b.bN);AB8(a.bB,b.bB);a.ds=b.ds;}
function N6(a,b,c){Cf(a.bB,b,c);if(!a.ds)Cf(a.bN,b,c);}
function QO(a,b){Cf(a.bN,b,0);Cf(a.bB,b+1|0,0);}
function Ep(a){if(R2(a.bN,a.bB)>0)return a.bB;return a.bN;}
function F8(a){if(R2(a.bN,a.bB)<0)return a.bB;return a.bN;}
function AKh(a,b){var c,d,e,f;c=a.bN;d=c.L;e=a.bB;if(d==e.L&&c.ba==e.ba?1:0)return null;c=Ep(a);e=F8(a);d=c.L;if(d<=b){f=BL(b,e.L);if(f<=0)return BG(b<=d?c.ba:0,f>=0?e.ba:(-1));}return null;}
function Dx(a){var b,c;b=a.bN;c=a.bB;return (b.L==c.L&&b.ba==c.ba?1:0)?0:1;}
function TC(){var a=this;B.call(a);a.fs=null;a.fp=0;a.dM=0;}
function ACB(a,b){var c,d,e;c=a.fp;d=a.fs;if(c==d.data.length)a.fs=C9(d,c+16|0);d=a.fs.data;e=a.fp;a.fp=e+1|0;d[e]=b;}
function Z1(a){var b,c,d,e;b=a.fp;if(b?0:1)return;c=a.dM;d=b-1|0;if(c==d)a.dM=c-1|0;e=a.fs.data;a.fp=d;e[d]=null;}
var GZ=G();
function ZW(){var a=this;GZ.call(a);a.B=null;a.df=null;a.e7=null;a.dQ=null;a.dG=null;a.iL=null;a.lF=null;a.cr=0;a.nu=0;a.z7=0.0;}
function Cd(a,b){return a.B.data[b];}
function CK(a){return a.B.data.length;}
function ACr(a){return FJ(a,CK(a));}
function GA(a,b){return a.B.data[b].S;}
function AKR(a,b,c){var d,e,f,g,h;d=a.B;e=d.data;f=e[b];d=C9(d,e.length+1|0);e=d.data;a.B=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=D6(Q(Cw,0));a.B.data[b+1|0]=f;}else if(c==f.S){e[b]=f;e[b+1|0]=D6(Q(Cw,0));}else{e=(IS(f,c)).data;d=a.B.data;d[b]=e[0];d[b+1|0]=e[1];}F7(a,b,c,0,C(174));}
function LF(a,b){var c,d,e,f,g,h,i;c=a.B.data;d=c[b];e=c[b+1|0];f=D6(L5(d.s,e.s));g=a.B;h=g.data.length;if(b<h&&b>=0){i=Q(DH,h-1|0);c=i.data;ZP(g,b,i);c[b]=f;a.B=i;return;}d=new Bu;Y(d);N(d);}
function O5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.B.data;if(!(c<d[b].S?0:1)){d=(Cd(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}F7(a,b,c,1,NI(e));h=a.B.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=ZP(d,e,Q(Cw,f-1|0));else{j=i[e];if(c<=0)k=Eb(Dw(j.v,1),j.b0,j.bF);else if(c>=(J(j.v)-1|0)){k=new Cw;l=j.v;ABu(k,Cu(l,0,J(l)-1|0),j.b0,j.bF);}else{d=B5(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=Eb(Ho(d),j.b0,j.bF);}i[e]=k;}h.S=h.S-1|0;E0(h);}else if(b!=(d.length-1|0)){F7(a,b,c,1,C(174));LF(a,b);}}
function AEd(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){AAj(a.B.data[b],c,e[0]);return;}g=f-1|0;d=(IS(a.B.data[b],c)).data;h=d[0];i=d[1];d=a.B;j=C9(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);MF(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Gr(e[m])?XU(e[m]):D6(Q(Cw,0));d[b+m|0]=k;m=m+1|0;}MF(i,0,0,e[g]);d[b+g|0]=i;a.B=j;}
function UY(a,b){var c,d,e,f,g,h,i;c=Ep(b);d=F8(b);e=c.L;if(e==d.L)return Cu(FP(a.B.data[e]),c.ba,d.ba);f=new K;M(f);b=a.B.data[c.L];e=c.ba;BN(BX(f,Dw(FP(b),e)),10);g=a.B.data;e=c.L+1|0;h=d.L;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AEp(BX(f,FP(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.B.data[d.L];h=d.ba;BX(f,Cu(FP(b),0,h));return L(f);}b=new Om;Y(b);N(b);}
function Pd(a,b,c){var d;AC4(a,b);d=Ep(b);F7(a,d.L,d.ba,1,c);}
function AC4(a,b){var c,d,e,f,g,h,i;a:{c=Ep(b);d=F8(b);e=c.L;if(e==d.L)HI(a.B.data[e],c.ba,d.ba);else{b=a.B.data[e];HI(b,c.ba,b.S);HI(a.B.data[d.L],0,d.ba);e=c.L+1|0;f=d.L;g=a.B;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(DH,(h-f|0)+e|0);AFJ(g,e,f,i);a.B=i;LF(a,c.L);break a;}b=new Bu;Y(b);N(b);}b=new Bu;Y(b);N(b);}}}
function Jb(a,b,c){return DR(b,GM(Cd(a,b),c));}
function ADv(a,b){var c,d,e;c=0;d=0;while(true){e=a.B.data.length;if(c>=e)break;if((d+(Cd(a,c)).S|0)>=b)return BG(c,b-d|0);d=d+((Cd(a,c)).S+1|0)|0;c=c+1|0;}return BG(e,0);}
function FJ(a,b){var c,d,e;c=0;d=a.B.data.length;e=0;while(e<b){c=c+GA(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function L4(a,b){return Oo(Cd(a,b.bq),b.bv);}
function Fc(a){var b,c,d,e,f,g,h,i,j;b=B5(ACr(a));c=b.data;d=a.B.data.length;e=0;f=0;while(e<d){g=a.B.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;QY(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function F7(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cr=a.cr+1|0;f=a.iL;g=Q(G9,1);h=new G9;h.ek=b;h.e3=c;i=Mj(e,C(174),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BG(b,c+J(i[0])|0);break a;}k=BG((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BG(b,c);}i=g.data;h.pu=k;h.n_=d;h.gU=e;i[0]=h;BB(f,g);Nn(a,b,c,d,e);}
function Nn(a,b,c,d,e){var f;f=FJ(a,b)+c|0;if(!d){XT(a.df,f,J(e));TL(a.e7,f,J(e));}else{Vf(a.df,f,J(e));Pp(a.e7,f,J(e));}}
function WY(a,b){var c,d,e;c=Mj(b.gU,C(174),(-1));if(b.n_){AEd(a,b.ek,b.e3,c);XT(a.df,FJ(a,b.ek)+b.e3|0,J(b.gU));TL(a.e7,FJ(a,b.ek)+b.e3|0,J(b.gU));}else{c=c.data;d=AMz();Cf(d.bN,b.ek,b.e3);e=c.length;if(e==1)Cf(d.bB,b.ek,b.e3+J(c[0])|0);else Cf(d.bB,(b.ek+e|0)-1|0,J(c[e-1|0]));AC4(a,d);Vf(a.df,FJ(a,b.ek)+b.e3|0,J(b.gU));Pp(a.e7,FJ(a,b.ek)+b.e3|0,J(b.gU));}return b.pu;}
function ABG(a){return a.nu==a.cr?0:1;}
function KN(a){a.nu=a.cr;}
function Ni(a){var b,c,d;a.lF=BQ(a.B.data.length+1|0);b=0;while(b<a.B.data.length){c=a.lF.data;d=b+1|0;c[d]=(c[b]+(Cd(a,b)).S|0)+1|0;b=d;}}
function VR(a,b){var c,d,e,f,g,h;c=a.lF;if(c===null){d=0;e=0;a:{while(true){c=a.B.data;f=c.length;if(e>=f)break;g=c[e].S;if(b<=(d+g|0)){h=DR(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DR(f,0);}return h;}d=AKa(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DR(d,b-(d<0?0:a.lF.data[d])|0);if(h.bv>=(Cd(a,h.bq)).S){h.bq=h.bq+1|0;h.bv=0;}return h;}
var Me=G(0);
function E9(a){return UB(a.tt(),a.pc());}
function UB(b,c){var d,e,f;b=b.data;d=b.length;if(!d)return c;e=new K;M(e);f=0;while(f<d){BN(BX(e,b[f]),47);f=f+1|0;}return L(BX(e,c));}
var TG=G(0);
function SS(){var a=this;B.call(a);a.ij=null;a.f_=null;a.jW=null;}
function AKd(a,b){var c=new SS();APg(c,a,b);return c;}
function A3x(a,b,c){var d=new SS();AEP(d,a,b,c);return d;}
function APg(a,b,c){AEP(a,b,c,Q(BK,0));}
function AEP(a,b,c,d){a.ij=b;a.f_=c;a.jW=d;}
function Eq(a){var b;b=a.ij;return H1(b!==null?b.name:a.f_.name);}
function AMb(a){return a.jW;}
function U_(a,b,c){var d,e,f;d=AK2(c);e=new VA;e.rb=b;b=a.f_;if(b!==null)b.text().then(Bv(e,"f"),Bv(d,"f"));else{b=a.ij.getFile();f=new VB;f.r2=e;f.r3=d;b.then(Bv(f,"f"),Bv(d,"f"));}}
function AK2(b){var c;c=new TH;c.yn=b;return c;}
function AYg(a){var b,c,d,e,f,g,h,i;if(a.f_===null)b=UB(a.jW,Eq(a));else{c=a.jW;b=Eq(a);d=a.f_.size;e=d|0;if(e!==d){f=Eq(a);g=new K;M(g);H(H(g,C(218)),f);$rt_globals.console.info($rt_ustr(L(g))+d);e=0;}if(c===null)f=C(23);else{g=new K;M(g);BX(g,C(36));h=0;while(true){i=c.data;if(h>=i.length)break;if(h>0)BX(g,C(37));H(g,i[h]);h=h+1|0;}BX(g,C(38));f=L(g);}g=new K;M(g);U(H(H(H(H(g,f),C(219)),b),C(220)),e);b=L(g);}return b;}
var ACW=G(0);
function AJ1(){B.call(this);this.iM=null;}
function A3L(a){var b=new AJ1();AZn(b,a);return b;}
function AZn(a,b){a.iM=b;}
function EO(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iM));}
function CQ(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iM));}
function AWx(a){var b,c;b=a.iM.byteLength;c=new K;M(c);H(U(H(c,C(221)),b),C(222));return L(c);}
function Z5(){B.call(this);this.vE=null;}
function DY(a,b){ZX(a.vE,b);return 1;}
function Hf(){var a=this;B.call(a);a.L=0;a.ba=0;}
function Cf(a,b,c){a.L=b;a.ba=c;}
function AB8(a,b){a.L=b.L;a.ba=b.ba;}
function R2(a,b){var c;c=BL(a.L,b.L);if(c)return c;return BL(a.ba,b.ba);}
function NU(){var a=this;B.call(a);a.py=null;a.oH=null;}
function L$(a){return a.py.bq;}
function KZ(a){return a.py.bv;}
function DH(){var a=this;B.call(a);a.s=null;a.S=0;a.gm=null;a.eZ=null;a.ex=null;a.ii=null;a.g8=0;a.ji=0;a.jC=0;}
var A7z=0;var A7A=0;var A7s=0;function XU(a){var b=new DH();AKq(b,a);return b;}
function D6(a){var b=new DH();Zx(b,a);return b;}
function AKq(a,b){var c;c=Q(Cw,1);c.data[0]=AI9(b);Zx(a,c);}
function Zx(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.S=d;E0(a);}
function Jv(a){return a.s.data.length;}
function J1(a,b){return a.s.data[b];}
function GM(a,b){var c;c=Kp(a,b);return c<=0?0:a.ex.data[c-1|0];}
function Kp(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.ex!==null&&!a.jC)){Vu(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.ex.data[d]=e;d=d+1|0;}a.jC=0;}d=ABE(a.ex,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Oo(a,b){var c;c=a.s.data;if(!c.length)return null;return c[Kp(a,b)];}
function HI(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.S){a.s=Q(Cw,0);E0(a);a.S=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BL(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=ZP(g,e,Q(Cw,g.data.length-1|0));a.S=a.S-d|0;E0(a);return;}a.s.data[e]=Eb(Fz(Cu(k.v,0,b),Dw(k.v,c)),k.b0,k.bF);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=Eb(Cu(l.v,0,b),l.b0,l.bF);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=Eb(Dw(m.v,c),m.b0,m.bF);g=a.s;a.s=AFJ(g,e,f,Q(Cw,(g.data.length-f|0)+e|0));}a.S=a.S-d|0;E0(a);}
function IS(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DH,[D6(Q(Cw,0)),a]);if(b>=a.S)return I(DH,[a,D6(Q(Cw,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DH,[D6(Ly(c,0,Q(Cw,d))),D6(Ly(c,d,Q(Cw,f-d|0)))]);h=e[d];e=Ly(c,0,Q(Cw,d+1|0));i=e.data;j=Ly(c,d,Q(Cw,f-d|0));c=j.data;i[d]=Eb(Cu(h.v,0,b),h.b0,h.bF);c[0]=Eb(Dw(h.v,b),h.b0,h.bF);return I(DH,[D6(e),D6(j)]);}
function AAj(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}MF(a,d,b,c);}
function MF(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Gr(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Cw,1);h.data[0]=AI9(d);a.s=h;}else if(!b&&!c){h=Q(Cw,g+1|0);f=h.data;C7(e,0,h,1,g);f[0]=AI9(d);a.s=h;}else{i=f[b];if(c<=0)j=Eb(Fz(d,i.v),i.b0,i.bF);else if(c>=J(i.v))j=Eb(Fz(i.v,d),i.b0,i.bF);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B5(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=Eb(Ho(e),i.b0,i.bF);}f[b]=j;}a.S=a.S
+J(d)|0;E0(a);}
function Pr(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Md(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function NC(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gm;if(!(e!==null&&e.data.length>=d)){a.gm=ALI(d);a.eZ=BQ(d);a.g8=1;}Vu(a);if(!a.g8)A7A=A7A+1|0;else{f=0;g=0.0;A7z=A7z+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.ex.data[h]=f;Cm(b,i[KJ(j)]);g=g+Eo(b,j.v);a.gm.data[h]=g;a.eZ.data[h]=g+0.5|0;h=h+1|0;}a.S=f;a.g8=0;a.jC=0;}}
function Vu(a){var b;b=a.ex;if(!(b!==null&&b.data.length>=a.s.data.length)){a.ex=BQ(a.s.data.length);a.jC=1;}}
function Tn(a){a.g8=1;a.ii=null;}
function E0(a){Tn(a);a.ji=1;a.jC=1;}
function AAe(a,b,c,d){var e,f,g,h,i,j,k;if(a.ii===null)a.ii=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.ii.data[d];if(e===null){e=c.data;f=a.s.data[d];Cm(b,e[KJ(f)]);f=f.v;e=BQ(J(f)-1|0);c=Gt(f);g=!d?0.0:a.gm.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BK;k=i+1|0;OJ(f,c,0,k);h[i]=g+Eo(b,f)+0.5|0;i=k;}a.ii.data[d]=e;}return e;}
function GW(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.g8&&a.eZ!==null))NC(a,c,d);if(b>=a.S)return a.eZ.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BL(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eZ.data[f];}return (AAe(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FK(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eZ.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function G6(a,b){var c;if(b>=a.S)return b+1|0;c=Kp(a,b);return a.ex.data[c];}
function FP(a){var b,c,d,e;b=new K;GN(b,a.S);c=a.s.data;d=c.length;e=0;while(e<d){BX(b,c[e].v);e=e+1|0;}return L(b);}
function AFI(){A7s=0;}
function Yx(){var a=this;B.call(a);a.fG=null;a.fd=null;}
function AWn(a,b){var c=new Yx();AXp(c,a,b);return c;}
function AXp(a,b,c){a.fG=b;a.fd=c;}
function TL(a,b,c){var d;d=a.fG;if(d===null)return;Zs(a,d,b,c);}
function Pp(a,b,c){var d;d=a.fG;if(d===null)return;ABJ(a,d,b,c);}
function Zs(a,b,c,d){var e,f,g,h;e=b.e1.b9();while(e.cE()){VU(a,e.b_(),c,d);}e=b.fH.b9();while(e.cE()){f=e.b_();g=new Tk;g.y1=a;EQ(a,g,f,c,d);}h=b.hQ.b9();while(h.cE()){e=h.b_();VU(a,e.ls,c,d);f=new Tl;f.w_=a;EQ(a,f,e.kU,c,d);}b=b.cN.b9();while(b.cE()){Zs(a,b.b_(),c,d);}}
function VU(a,b,c,d){KW(a,b.eJ,c,d);}
function EQ(a,b,c,d,e){var f,g;a:{if(c instanceof HE){f=c.hx;g=new V6;g.rp=a;g.rn=b;g.rm=d;g.ro=e;Fy(f,g);}else{if(!(c instanceof Km)){if(!(c instanceof Jq))break a;f=c;EQ(a,b,f.jU,d,e);EQ(a,b,f.i_,d,e);return;}g=c.id;f=new V7;f.B4=a;f.B3=b;f.B2=d;f.B1=e;Fy(g,f);}}if(c!==null){c=c.fW;if(c!==null)b.lW(c,CZ(d),CZ(e));}}
function KW(a,b,c,d){var e;e=b.dH;if(e>=c)b.dH=e+d|0;}
function ABJ(a,b,c,d){var e,f,g,h;e=b.e1.b9();while(e.cE()){J0(a,(e.b_()).eJ,c,d);}e=b.fH.b9();while(e.cE()){f=e.b_();g=new Sp;g.vc=a;EQ(a,g,f,c,d);}h=b.hQ.b9();while(h.cE()){e=h.b_();J0(a,e.ls.eJ,c,d);f=new Sr;f.Au=a;EQ(a,f,e.kU,c,d);}b.e1.pG(new So);b.fH.pG(new Sn);b=b.cN.b9();while(b.cE()){ABJ(a,b.b_(),c,d);}}
function J0(a,b,c,d){var e;e=b.dH;if(e>=c)b.dH=e-d|0;}
function Lq(){var a=this;Ed.call(a);a.c7=0;a.b8=null;a.c0=0;a.B5=0.0;a.nj=0;}
function JZ(){var a=new Lq();QR(a);return a;}
function AXy(a,b){return Q(HS,b);}
function QR(a){var b;b=AHF(16);a.c7=0;a.b8=Q(HS,b);a.B5=0.75;TO(a);}
function AHF(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function EU(a){var b;if(a.c7>0){a.c7=0;b=a.b8;AE3(b,0,b.data.length,null);a.c0=a.c0+1|0;}}
function TO(a){a.nj=a.b8.data.length*a.B5|0;}
function Ht(a,b){return ABb(a,b)===null?0:1;}
function N_(a){var b;b=new TP;b.zb=a;return b;}
function Cx(a,b){var c;c=ABb(a,b);if(c===null)return null;return c.cU;}
function ABb(a,b){var c,d;if(b===null)c=Sj(a);else{d=b.p3();c=Rg(a,b,d&(a.b8.data.length-1|0),d);}return c;}
function Rg(a,b,c,d){var e;e=a.b8.data[c];while(e!==null&&!(e.l8==d&&AIs(b,e.cP))){e=e.cY;}return e;}
function Sj(a){var b;b=a.b8.data[0];while(b!==null&&b.cP!==null){b=b.cY;}return b;}
function Ne(a){var b;if(a.o5===null){b=new Qz;b.jm=a;a.o5=b;}return a.o5;}
function DU(a,b,c){var d,e,f,g;if(b===null){d=Sj(a);if(d===null){a.c0=a.c0+1|0;d=TJ(a,null,0,0);e=a.c7+1|0;a.c7=e;if(e>a.nj)ACi(a);}}else{e=b.p3();f=e&(a.b8.data.length-1|0);d=Rg(a,b,f,e);if(d===null){a.c0=a.c0+1|0;d=TJ(a,b,f,e);e=a.c7+1|0;a.c7=e;if(e>a.nj)ACi(a);}}g=d.cU;d.cU=c;return g;}
function TJ(a,b,c,d){var e,f;e=new HS;V2(e,b,null);e.l8=d;f=a.b8.data;e.cY=f[c];f[c]=e;return e;}
function AJg(a,b){var c,d,e,f,g,h,i,j;c=AHF(!b?1:b<<1);d=Q(HS,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b8.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.l8&b;j=h.cY;h.cY=e[i];e[i]=h;h=j;}f=f+1|0;}a.b8=d;TO(a);}
function ACi(a){AJg(a,a.b8.data.length);}
function LA(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b8.data[0];while(e!==null){if(e.cP===null)break a;b=e.cY;d=e;e=b;}}else{f=J6(b);g=a.b8.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.l8==f&&AIs(b,e.cP))){h=e.cY;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.cY=e.cY;else a.b8.data[c]=e.cY;a.c0=a.c0+1|0;a.c7=a.c7-1|0;}if(e===null)return null;return e.cU;}
function AIs(b,c){return b!==c&&!b.bJ(c)?0:1;}
function Cw(){var a=this;B.call(a);a.v=null;a.b0=0;a.bF=0;}
function AI9(a){var b=new Cw();AWY(b,a);return b;}
function Eb(a,b,c){var d=new Cw();ABu(d,a,b,c);return d;}
function AWY(a,b){ABu(a,b,0,0);}
function ABu(a,b,c,d){a.v=b;a.b0=c;a.bF=d;}
function KJ(a){return a.bF&3;}
function Jr(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Md(a){return J(a.v);}
var NR=G(Lq);
function Z2(){var a=this;B.call(a);a.dd=null;a.e_=0;}
var A7B=null;function AGW(a){var b=new Z2();AHl(b,a);return b;}
function AHl(a,b){a.e_=0;a.dd=b;}
function QJ(a,b){var c;if(b.eR)return b;b=B7(b.bo);while(true){if(!B_(b))return null;c=QJ(a,Ca(b));if(c!==null)break;}return c;}
function Xp(a,b,c){var d,e,f,g;d=NJ(a,a.dd,b);if(d===null)return;b=c.cm;e=b===null?A7C:b.cN;f=c.bo;c=a.dd;if(d===c){if(c.cm===null)c.cm=b;b=new AAi;b.yY=a;Fy(f,b);b=new AAh;b.u$=a;e.fn(b);b=a.dd;b.bo=f;b.cm.cN=e;b.eR=0;return;}if(!EC(f)){c=d.hv;if(c!==null){b=new XQ;b.rt=c;Fy(f,b);g=Le(c.bo,d);if(g==(-1))HY(c.bo,f);else{EL(c.bo,g);AIM(c.bo,g,f);}}}b=d.cm;if(b!==null){b=b.hn;c=new Sx;c.sU=b;e.fn(c);g=Le(b.cN,d.cm);if(g==(-1))HY(b.cN,e);else{b.cN.qe(g);b.cN.uv(g,e);}}}
function NJ(a,b,c){var d,e,f,g;d=b.bX;if(d.b1==c.b1&&d.bY==c.bY?1:0){d=B7(b.bo);while(B_(d)){e=NJ(a,Ca(d),c);if(e!==null)return e;}return b;}b=B7(b.bo);while(true){if(!B_(b))return null;d=Ca(b);f=c.b1;g=c.bY;e=d.bX;if(e.b1<=f&&g<=e.bY?1:0){e=NJ(a,d,c);if(e!==null)break;}}return e;}
function ABo(a,b,c){BB(c,b.bX);b=B7(b.bo);while(B_(b)){ABo(a,Ca(b),c);}}
function XT(a,b,c){a.e_=0;Ls(a,a.dd,b,c);}
function Ls(a,b,c,d){var e;if(De(b)<c)return;a:{if(Do(b)>c){L0(b,d);Hn(b,d);b=B7(b.bo);while(B_(b)){Ls(a,Ca(b),c,d);}}else{if(!MS(b,c)){if(a.e_)break a;if(De(b)!=c)break a;}Hn(b,d);if(Do(b)==c&&a.e_)L0(b,d);e=B7(b.bo);while(B_(e)){Ls(a,Ca(e),c,d);}if(!a.e_){b.eR=1;a.e_=1;}}}}
function Vf(a,b,c){a.e_=0;MW(a,a.dd,b,c);}
function MW(a,b,c,d){var e,f,g,h,i,j;if(De(b)<c)return;e=Do(b);f=c+d|0;if(e>f){e= -d|0;L0(b,e);Hn(b,e);g=B7(b.bo);while(B_(g)){MW(a,Ca(g),c,d);}b.bo=WK(a,b.bo);}else{h=b.bX;if(c<=h.b1&&h.bY<=f?1:0){if(b===a.dd){L9(b,0);MV(b,0);h=b.cm;if(h!==null)h.cN.jg();}else{L9(b,(-1));MV(b,(-1));h=b.cm;if(h!==null){AD1(h);b.cm=null;}}Iw(b.bo);}else{e=MS(b,c);f=MS(b,f);if(e&&f)Hn(b, -d|0);else if(e)MV(b,c);else{if(!f)return;L9(b,c);Hn(b, -d|0);}h=B7(b.bo);while(B_(h)){MW(a,Ca(h),c,d);}h=T4(b.bo);g=Ya(0);i=new R7;j=new ACq;j.FE
=i;j.kJ=g;while(AB_(h,j)){}if(!j.kJ.on&&!a.e_)b.eR=1;else a.e_=1;b.bo=WK(a,b.bo);}}}
function WK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BM();d=null;e=A7B;f=b.cJ;g=b.q;if(e===null)e=A6h;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}K$(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b3=b.b3+1|0;b=B7(b);while(B_(b)){m=Ca(b);if(Do(m)==De(m))continue;if(!m.eR){if(d!==null){BB(c,d);d=null;}BB(c,m);}else if(d===null)d=m;else{n=ATy(K0(Be(Do(d),Do(m)),Bd(De(d),De(m)),d.bX.fT),d.hv,d.cm);n.eR=1;d=m.cm;if(d===null)d=n;else{AD1(d);d=n;}}}if(d!==null)BB(c,d);return c;}
function ADs(a,b,c,d){var e,f,g,h,i,j;if((De(c)-Do(c)|0)<43)e=Cu(d,Do(c),De(c));else{e=Cu(d,Do(c),Do(c)+20|0);f=Cu(d,De(c)-20|0,De(c));g=new K;M(g);H(H(H(g,e),C(167)),f);e=L(g);}e=ACn(e,C(174),C(223));f=Bt();g=Cy(c);h=new K;M(h);i=U(h,b);BN(i,32);g=H(i,g);BN(g,9);H(g,e);Bk(f,L(h));c=B7(c.bo);j=b+1|0;while(B_(c)){ADs(a,j,Ca(c),d);}}
function AHv(){A7B=new U6;}
function ALi(){var a=this;B.call(a);a.b1=0;a.bY=0;a.fT=0;}
function K0(a,b,c){var d=new ALi();AWU(d,a,b,c);return d;}
function AWU(a,b,c,d){a.b1=b;a.bY=c;a.fT=d;}
function ASR(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.b1==c.b1&&a.bY==c.bY&&a.fT==c.fT?1:0;}return 0;}
function AV$(a,b){var c;b=b;c=BL(a.b1,b.b1);if(!c)c=BL(b.bY,a.bY);return c;}
var U6=G();
function AP$(a,b,c){var d;b=b;c=c;b=b.bX;c=c.bX;d=BL(b.b1,c.b1);if(!d)d=BL(c.bY,b.bY);return d;}
function Zz(){var a=this;B.call(a);a.bX=null;a.hv=null;a.bo=null;a.cm=null;a.eR=0;}
function ATy(a,b,c){var d=new Zz();AGV(d,a,b,c);return d;}
function AGV(a,b,c,d){a.eR=0;a.bX=b;a.hv=c;a.bo=BM();a.cm=d;}
function AHO(b){return ZG(b,null);}
function ZG(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bb(b);e=Bb(b);f=Bb(b);g=Bb(b);h=Bb(b);i=K0(d,e,f);j=new Zz;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AGV(j,i,null,l);m=0;while(m<g){l=ZG(b,c);l.hv=j;BB(j.bo,l);m=m+1|0;}return j;}
function AEI(b,c,d){var e,f,g,h,i;a:{e=b.bX;f=b.bo;g=e.b1;h=e.bY;i=e.fT;Bq(c,g);G2(c,h,i);Bq(c,f.q);if(d!==null){e=b.cm;if(e!==null&&ACT(d,e)){g=(Ou(d,b.cm)).bp;break a;}}g=(-1);}Bq(c,g);b=B7(f);while(B_(b)){AEI(Ca(b),c,d);}}
function Do(a){return a.bX.b1;}
function De(a){return a.bX.bY;}
function L9(a,b){a.bX.b1=b;}
function MV(a,b){a.bX.bY=b;}
function L0(a,b){var c;c=a.bX;c.b1=c.b1+b|0;}
function Hn(a,b){var c;c=a.bX;c.bY=c.bY+b|0;}
function MS(a,b){return Do(a)<=b&&b<De(a)?1:0;}
function AL$(a){var b,c,d,e,f;b=a.bX;c=b.b1;d=b.bY;e=b.fT;b=new K;M(b);BN(b,40);BN(U(H(U(H(U(b,c),C(37)),d),C(37)),e),41);b=L(b);c=a.eR;f=new K;M(f);JB(H(H(f,b),C(37)),c);return L(f);}
function AMS(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BO(a.bX,c.bX)&&BO(a.bo,c.bo)?1:0;}return 0;}
var Jt=G(0);
function GX(){var a=this;B.call(a);a.cP=null;a.cU=null;}
function A7D(a,b){var c=new GX();V2(c,a,b);return c;}
function V2(a,b,c){a.cP=b;a.cU=c;}
function AWz(a,b){var c,d;if(a===b)return 1;if(!Je(b,Jt))return 0;a:{b:{c:{d:{c=b;b=a.cP;if(b!==null){if(!b.bJ(c.cP))break c;else break d;}if(c.cP!==null)break c;}b=a.cU;if(b!==null){if(!b.bJ(c.cU))break c;else break b;}if(c.cU===null)break b;}d=0;break a;}d=1;}return d;}
function HS(){var a=this;GX.call(a);a.l8=0;a.cY=null;}
function NO(){var a=this;Lw.call(a);a.ym=null;a.rq=null;}
function AEM(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.ym;e=0;f=0;g=a.rq;a:{while(true){if((e+32|0)>f&&D8(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Ch(b)+j|0,i.length);Ps(b,d,j,f-j|0);e=0;}if(!D8(c)){k=!D8(b)&&e>=f?A61:A60;break a;}i=g.data;j=Be(Ch(c),i.length);l=new Xl;l.qG=b;l.yL=c;k=AF3(a,d,e,f,g,0,j,l);e=l.vf;j=l.wa;if(k===null){if(!D8(b)&&e>=f)k=A61;else if(!D8(c)&&e>=f)k=A60;}ADu(c,g,0,j);if(k!==null)break;}}FC(b,b.Z-(f-e|0)|0);return k;}
var QI=G(NO);
function AF3(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Of(h,2))break a;i=A60;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!OB(l)){if((f+3|0)>g){j=j+(-1)|0;if(Of(h,3))break a;i=A60;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CU(l)){i=Eu(1);break a;}if
(j>=d){if(D8(h.qG))break a;i=A61;break a;}c=j+1|0;m=k[j];if(!Dl(m)){j=c+(-2)|0;i=Eu(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Of(h,4))break a;i=A60;break a;}k=e.data;o=EN(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vf=j;h.wa=f;return i;}
var I$=G(Ew);
var O0=G();
function AUd(a,b){return b.text();}
function O2(){var a=this;B.call(a);a.tN=null;a.tM=null;}
function ATE(a,b){var c,d,e,f;c=a.tN;d=a.tM;e=b.length;f=new Pw;f.AM=b;c.g(AN_((AKH(e,f)).ki,ACe(d)));}
var O1=G();
function AVv(a,b){AHE(b);}
function IZ(){var a=this;B.call(a);a.br=null;a.Fs=null;a.cI=null;a.jO=null;a.le=null;a.d8=null;a.hy=null;a.BH=null;a.pH=null;a.oU=null;}
function A7E(a,b,c,d,e,f){var g=new IZ();LM(g,a,b,c,d,e,f);return g;}
function IE(){var b,c,d,e,f,g,h,i,j;b=new IZ;c=new Kh;d=new Hl;FN();K4(d,A7F);My(c,d,BY(A7n),BY(A7G),BY(A7H),BY(A7n),BY(A7I),BY(A7J),BY(A7K),BY(A7L),BY(A7M),BY(A7N));e=AJJ(S(C(224)));AFm();f=(A7O.hD()).data;g=f.length;h=Q(Kx,g);i=h.data;j=0;while(j<g){i[j]=f[j].n0;j=j+1|0;}LM(b,c,e,h,AKp(S(C(225)),S(C(226)),S(C(227)),S(C(228))),Fi(),AEs(S(C(229)),S(C(230)),S(C(231)),S(C(232))));return b;}
function Jh(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IZ;c=new Kh;d=new Hl;AOg();K4(d,A7P);My(c,d,BY(A7Q),BY(A7R),BY(A7S),BY(A7Q),BY(A7T),BY(A7U),BY(A7V),BY(A7W),BY(A7X),BY(A7Y));e=AJJ(S(C(233)));T5();f=(A7Z.hD()).data;g=f.length;h=Q(Kx,g);i=h.data;j=0;while(j<g){i[j]=f[j].lb;j=j+1|0;}k=AKp(S(C(234)),S(C(235)),S(C(236)),S(C(237)));l=new I1;d=new I9;AU7();m=A70;OH(d,m,A71,A72,A73,A74,m);LX(l,d,AHc(),AHK(S(C(238)),S(C(239)),S(C(240))),AHc(),AH8(1,0.17499999701976776),A75,A76);LM(b,c,e,h,k,l,AEs(S(C(229)),S(C(230)),
S(C(231)),S(C(241))));return b;}
function LM(a,b,c,d,e,f,g){var h;h=d.data;a.hy=Dv(C(166),17.0);a.BH=Dv(C(155),15.0);a.pH=Dv(C(166),15.0);a.oU=Dv(C(14),15.0);a.br=b;a.Fs=c;a.jO=d;a.le=e;if(h.length>=15){a.cI=f;a.d8=g;return;}b=new BU;Y(b);N(b);}
function W2(a,b){if(b===null)b=a.br.ej;return b;}
function KD(){var a=this;Cz.call(a);a.dy=null;a.nZ=null;}
function A4l(a){var b=new KD();AHW(b,a);return b;}
function AHW(a,b){var c,d,e,f;Ix(a,b,0);c=K3(a.E);a.nZ=c;d=Ie(c);a.dy=d;M1(a.r,d);c=b.o.bG;d=new YE;d.rW=a;Ba(c,d);c=b.o.bG;d=new HO;e=new YC;e.Bw=a;Ir(d,b,e);Ba(c,d);c=a.dy;d=b.o;f=new ABh;f.qK=c;Ba(d.bS,c);Ba(d.fw,f);O6(a.dy,b.o);b=b.o.cT;c=new YD;c.xY=a;Ba(b,c);Ju(a);}
function AJx(a,b){var c,d;c=a.dy;d=new ABQ;d.uY=a;d.uZ=b;GK(c,b,d);}
function AXV(a,b){if(H3(a.E,b))LZ(a.dy);}
function A1n(a,b){return I4(a.dy,b);}
function AOT(a){Hx(a);In(a.dy);JV(a.E);}
function A2F(a){return E5(0);}
function ALE(a,b,c){var d;ID(a,b,c);d=a.dy;Mv(d,d.i,b,c);}
function AWT(a,b){BD(b);GL(a.nZ,b);FA(a.dy,b);}
function AJj(a,b){if(b.bm!=121)return 0;return 1;}
function AEO(a,b){var c,d,e;if(DO(a.r,a.dy)){c=a.nZ;b=b.k;d=a.dy;e=new AAC;e.z$=a;II(c,b,d,a,d,a,e);}return 1;}
function AIj(){var a=this;Cv.call(a);a.yP=null;a.o6=null;a.kf=null;a.em=null;a.lV=null;a.hw=null;a.eD=null;a.jz=null;a.qD=null;a.i0=null;a.p$=null;a.p_=null;a.pr=null;a.y6=null;a.CL=null;a.s6=0;}
function A4w(a){var b=new AIj();AYO(b,a);return b;}
function AYO(a,b){var c,d,e,f;El(a,b);c=(IE()).br.ej;a.yP=c;a.o6=ALd(c);a.kf=new Bg;a.em=KX();a.lV=KX();a.hw=Tb(0,0,3,3);a.eD=H9(0,0,300,300);a.jz=AXC();d=Q(BK,4);e=d.data;e[0]=C(179);e[1]=C(180);e[2]=C(197);e[3]=C(196);a.qD=d;a.i0=Q(Ks,e.length);c=b.o.bS;f=new TV;f.fA=a;Ba(c,f);c=b.o.bG;f=new Y5;f.B6=a;Ba(c,f);c=b.o.oy;f=new Y4;f.sw=a;Ba(c,f);c=b.o.gN;f=new Y3;f.Du=a;Ba(c,f);c=b.o.mm;f=new Y2;f.Ef=a;Ba(c,f);c=b.o.cT;f=new Y1;f.EN=a;Ba(c,f);b=b.o.fw;c=new Y0;c.AX=a;Ba(b,c);a.p$=ACK(a,1);a.p_=ACK(a,0);R9(a,a.em,
a.p$);R9(a,a.lV,a.p_);a.pr=ADZ(a,0);a.y6=ADZ(a,1);FT(a.eD,a.pr);F0(a.eD);Hz(a.eD,Dy(169,183,198));Fm(a.eD,a.yP);Cp(a.em.X,1.0,1.0,1.0,1.0);Fm(a.em,a.eD.bl);BP(a.hw.bl,a.o6);}
function R9(a,b,c){FT(b,c);F0(b);}
function Sw(a,b){Iv(DQ(),0.5+DQ()*0.5,0.5+DQ()*0.5,1.0,b.X);}
function ACK(a,b){var c,d;c=D4(a.z.P,200,100,b);Hu(c,C(242),11.0);BZ(c,C(243),0.0,20.0);Kc(c,255,0,0);BZ(c,C(243),0.25,40.0);Kc(c,0,255,0);BZ(c,C(243),0.5,60.0);Kc(c,0,0,255);BZ(c,C(243),0.75,80.0);d=CX(a.z.P);CM(d,c);Ez(c);return d;}
function ADZ(a,b){var c,d,e,f;c=D4(a.z.P,255,100,b);Hu(c,C(166),10.0);d=Bt();e=$rt_str(c.db.font);f=new K;M(f);H(H(f,C(244)),e);Bk(d,L(f));Eo(c,C(245));BZ(c,C(245),0.0,20.0);BZ(c,C(245),0.25,40.0);BZ(c,C(245),0.5,60.0);BZ(c,C(245),0.75,80.0);e=CX(a.z.P);CM(e,c);Ez(c);return e;}
function ALY(a,b){var c;a.s6=a.s6+1|0;c=b/5.0;Iv(c-(c|0),1.0,1.0,1.0,a.hw.X);return ABg(a.jz,b);}
function ANK(a){var b,c,d,e,f,g,h,i;b=a.z.P;EH(b,a.o6);c=a.i0.data;d=c.length;e=0;while(e<d){ZV(c[e],b,0,0);e=e+1|0;}f=a.eD;g=f.u;g.b=(a.kf.b-f.t.b|0)-5|0;g.a=0;B$(b,0);h=0;while(h<7){f=a.eD;EE(f,b,a.pr,Bc(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eD;f.u.b=(a.kf.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.y6;f=a.eD;f.u.a=Bc(h,10+((10*f.t.a|0)/15|0)|0)+5|0;ST(f,b,g,1);h=h+1|0;}ST(a.em,b,a.p$,1);B$(b,1);g=a.lV;f=a.p_;i=g.u;h=i.a;d=i.b;g=g.t;Gv(b,b.kZ);GF(b.kZ,b.Y,h,d,g,b.c6);N4(b.kZ,b.Y,f);F3(b);B$(b,0);f=
a.CL;if(f!==null)VX(a.hw,b,f,0,0,0.0);ACf(a.jz,b,new Bg);M2(b,C(246));}
function APS(a,b,c){var d,e,f,g,h,i,j,k;d=Bt();e=Cy(b);f=new K;M(f);H(H(f,C(247)),e);Bk(d,L(f));d=Bt();f=new K;M(f);EF(H(f,C(248)),c);Bk(d,L(f));g=Cg(30.0,c);h=Cg(10.0,c);i=0;while(true){j=a.i0.data;if(i>=j.length)break;k=1+i|0;j[i]=Tb(Bc(h,k)+Bc(g,i)|0,g,g,g);Sw(a,a.i0.data[i]);i=k;}X(a.hw.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.em;X(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);X(a.lV.u,(b.a/2|0)+10|0,50);Cn(a.kf,b);}
function W8(a,b){var c,d,e,f,g;c=Bt();d=!b.jR?C(249):C(250);e=b.ei;f=b.bm;g=b.zR;b=new K;M(b);JB(H(U(H(H(H(b,d),e),C(251)),f),C(252)),g);Bk(c,L(b));return 0;}
function ABn(){var a=this;Cv.call(a);a.EP=null;a.ld=null;a.i2=null;a.h$=null;a.di=null;a.dY=null;a.m_=null;a.m0=null;a.jE=0;a.iI=null;a.iH=null;}
function Rh(a,b,c){FT(b,c);F0(b);}
function AEc(a,b,c,d,e,f){var g,h;g=D4(f,c,120,b);Cm(g,e);e=!b?C(253):C(254);h=new K;M(h);H(H(H(h,e),d),C(153));d=L(h);BZ(g,d,0.0,20.0);BZ(g,d,0.25,40.0);BZ(g,d,0.5,60.0);BZ(g,d,0.75,80.0);BZ(g,d,1.0,100.0);h=CX(f);CM(h,g);Ez(g);return h;}
function ARf(a,b){return 0;}
function AV2(a){var b,c,d,e,f,g,h,i;b=a.z.P;EH(b,a.ld);B$(b,0);c=a.i2;d=c.b;e=a.h$;f=d-e.b|0;g=c.a-e.a|0;Bs(b,0,0,e,a.di.bl);Bs(b,g,0,a.h$,a.dY.bl);Bs(b,0,f,a.h$,a.di.X);Bs(b,g,f,a.h$,a.dY.X);c=a.di;e=c.u;h=e.b;i=((a.i2.b*3|0)/4|0)-(c.t.b/2|0)|0;Iy(c,b,e.a,h,a.iI,0,1);c=a.di;Iy(c,b,c.u.a,i,a.iI,1,1);c=a.dY;Iy(c,b,c.u.a,h,a.iH,0,0);e=a.dY;Iy(e,b,e.u.a,i,a.iH,1,0);M2(b,C(246));}
function AXa(a,b,c){var d,e;Cn(a.i2,b);X(a.h$,b.a/2|0,b.b/2|0);d=a.i2.b/4|0;e=a.di;d=d-(e.t.b/2|0)|0;X(e.u,(b.a/4|0)-(a.jE/2|0)|0,d);X(a.dY.u,((b.a*3|0)/4|0)-(a.jE/2|0)|0,d);}
function XD(){var a=this;Cz.call(a);a.yJ=null;a.fg=null;a.dF=null;a.oA=null;}
function APl(a,b,c){var d;d=Fn(a.r,a.oA);JL(a.fg,d,a.r);JL(a.dF,d,a.r);}
function RQ(b){return I6(b,U0());}
function I6(b,c){var d;d=Ta();On(d,Nt(b,Kg(c,25)),!b?null:I6(b-1|0,c));On(d,Nt(b,Kg(c,20)),!b?null:I6(b-1|0,c));On(d,Nt(b,Kg(c,15)),!b?null:I6(b-1|0,c));On(d,Nt(b,Kg(c,10)),!b?null:I6(b-1|0,c));return IY(d);}
function Nt(b,c){var d;if(b){d=new K;M(d);H(H(U(d,b),C(29)),c);c=L(d);}return c;}
function On(b,c,d){if(d!==null)H0(b,c,d);else{d=new Vq;d.sf=c;Es(b,c,d);}}
function AOj(a,b,c){var d,e;ID(a,b,c);b=a.r.bO;d=EA(a.fg);e=EA(a.dF);Nl(a.fg,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Nl(a.dF,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AWO(a){var b,c,d,e,f,g,h,i;Hx(a);b=a.z.P;B$(b,1);c=a.yJ;d=a.r;e=d.bO;X(c.nQ,e.a,Cg(2.0,d.cf));X(c.oi,Cg(2.0,d.cf),e.b);FN();f=A7M;g=d.bH;h=e.b/2|0;i=c.nQ;Bs(g,0,h-(i.b/2|0)|0,i,f);g=d.bH;h=e.a/2|0;c=c.oi;Bs(g,h-(c.a/2|0)|0,0,c,f);Mh(a.fg,a.r);Mh(a.dF,a.r);JV(a.E);B$(b,0);}
function APV(a,b){var c,d;c=NW(a.fg,b.k,a.r.cW);d=NW(a.dF,b.k,a.r.cW);return !c&&!d?0:1;}
function AMy(a,b,c,d){var e,f;e=Oh(a.fg,b.k,c,d);f=Oh(a.dF,b.k,c,d);return !e&&!f?0:1;}
function AAR(){Cz.call(this);this.kH=null;}
function ANy(a,b,c){if(b===0.0)Zc(a);}
function Zc(a){var b,c,d,e,f,g,h,i;b=a.kH;if(b!==null){Is(a.E,b);J4(b);}b=(IE()).cI;c=A5G(a.r,new Vd);d=Dv(C(155),14.0);e=APj();f=0;while(f<300){g=Dm(f);h=new SK;h.Be=C(255);h.Bb=g;h.Bc=C(256);Wl(e,C(255),g,C(256),h);f=f+1|0;}Xf(c,ADe(e));Wf(c,b,d);g=AEw(a.r);i=GH(c,a.r);Jk(i,b.m3,b.oR);Lg(g,i);EG(g,b);DL(g,C(145));a.kH=g;Ej(a.E,g);QD(a);}
function AMN(a,b,c){ID(a,b,c);QD(a);}
function QD(a){var b,c,d;b=a.r.bO;Et(a.kH,BG((b.a*2|0)/10|0,(b.b*4|0)/10|0),BG((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.kH;b=AH7(c.W.j);d=new K;M(d);H(H(d,C(257)),b);DL(c,L(d));}
function W5(){var a=this;HJ.call(a);a.mn=null;a.h2=null;a.gh=null;a.kh=null;a.sa=null;a.kc=null;a.ib=null;a.hO=null;a.lK=0;a.h1=0;}
function PI(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.h2.q>0){d=DQ();e=a.h2;f=d*(e.q-1|0)|0;e=EL(e,f);EL(a.gh,f);f=a.h1;g=e.t;a.h1=f-Bc(g.a,g.b)|0;I3(a.mn,e.dv);}c=c+1|0;}}
function L6(a,b){var c,d,e,f,g,h,i,j;c=Kq(a.r);Cm(c,a.kh);d=0;while(d<b){e=Kg(a.kc,1+(DQ()*19.0|0)|0);f=KX();g=f.dv;h=a.mn;BD(c);i=new Rb;i.ur=c;BP(g,KA(h,e,i));(Vp(DQ(),1.0,1.0,f.bl)).bC=0.5;h=f.u;g=f.dv;X(h,g.bn|0,g.bs|0);h=f.t;g=f.dv;X(h,g.bf|0,g.bC|0);BB(a.gh,e);BB(a.h2,f);j=a.h1;h=f.t;a.h1=j+Bc(h.a,h.b)|0;d=d+1|0;}a.hO=MQ(a.mn);}
function A0Y(a){var b,c,d,e,f,g,h,i;Hx(a);b=a.z.P;B$(b,1);c=a.r.bH;if(a.gh.q){d=a.hO;d=HF(c,d.a,d.b);Cm(d,a.kh);e=a.kh.eq;Bs(c,0,0,a.hO,a.sa);f=0;while(f<a.gh.q){g=BH(a.h2,f);h=BH(a.gh,f);g=g.dv;BZ(d,h,g.bn,g.bs+e);f=f+1|0;}g=a.ib;if(!(g!==null&&BR(g)==a.hO.a&&CO(a.ib)==a.hO.b))a.ib=BV(a.ib,CX(c));CM(a.ib,d);Ez(d);i=0;while(i<a.gh.q){d=BH(a.h2,i);Hz(d,CB(0));EE(d,c,a.ib,0,0);i=i+1|0;}}B$(b,0);}
function ALR(a,b){var c,d;if(a.lK){c=a.hO;d=Be(Bc(c.a,c.b),2211840);if(a.h1/d<=0.7)L6(a,D5(a.kc,5));else PI(a,D5(a.kc,5));}return a.lK;}
function SP(){var a=this;Cv.call(a);a.eE=null;a.h4=null;a.i1=null;a.oX=null;a.e$=0;a.uQ=0;a.sb=null;a.mB=0;a.xo=0;a.xL=null;a.Ag=null;}
function ALD(a){var b,c;b=a.e$;c=new K;M(c);U(H(c,C(258)),b);$rt_globals.console.info($rt_ustr(L(c)));EH(a.eE,a.sb);Ku(a.i1,a.e$,0,Hr(a),5000,a.oX.a,20);B$(a.eE,1);Vx(a.i1,a.eE);B$(a.eE,0);b=a.e$;c=new K;M(c);U(H(c,C(258)),b);$rt_globals.console.info($rt_ustr(L(c)));ABR(a.h4,a.e$/a.mB|0,a.eE);AA9(a.h4,a.e$,Hr(a),a.Ag,a.eE);}
function AUM(a,b,c){a.oX=b;Sm(a.h4,BG(0,0),50,Hr(a),c);S1(a.h4,a.eE,0,Hr(a));}
function US(a){return 5000-Hr(a)|0;}
function Hr(a){return Be(a.uQ,a.oX.b);}
function Ds(){var a=this;Cv.call(a);a.pZ=null;a.gX=null;a.qQ=0.0;}
function A77(a){var b=new Ds();HL(b,a);return b;}
function HL(a,b){El(a,b);a.pZ=AI0(0,0,64);a.gX=new Bg;Gj(b.bA,JX(BF(a)));}
function AAl(a){EH(a.z.P,a.pZ);}
function SL(a,b,c){Cn(a.gX,b);a.qQ=c;}
var Rf=G(Ds);
var Xk=G(Cz);
function Hd(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.z.bA;f=new Ra;f.Dg=a;f.t8=b;g=Q(B,1);h=g.data;i=BQ(1);i.data[0]=b;h[0]=i;CW(e,f,C(259),g);d=d+1|0;}}
function ADB(a,b){var c,d,e,f,g,h;c=b.data;d=Bt();e=Cy(c[0]);f=new K;M(f);H(H(f,C(260)),e);Bk(d,L(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((La(b,1)).iM));d=Bt();e=Cy(c[1]);if(b===null)f=C(23);else{f=new K;M(f);BX(f,C(36));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BX(f,C(37));U(f,c[g]);g=g+1|0;}BX(f,C(38));f=L(f);}h=new K;M(h);H(H(H(H(h,C(261)),e),C(262)),f);Bk(d,L(h));}
function WH(){var a=this;Ds.call(a);a.e8=null;a.gD=null;a.nG=null;a.A0=null;a.qp=null;}
function AO3(a,b){b=b/5.0;Iv(b-(b|0),1.0,1.0,1.0,a.gD.X);return 0;}
function AWE(a){AAl(a);EE(a.e8,a.z.P,a.A0,0,0);VX(a.gD,a.z.P,a.nG,0,0,0.0);M2(a.z.P,C(246));}
function A2z(a,b,c){var d,e,f;SL(a,b,c);X(a.gD.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.e8;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function SN(){var a=this;Ds.call(a);a.g0=null;a.q7=null;a.my=null;a.kz=null;a.jV=null;}
function A2_(a){var b,c,d,e,f,g;AAl(a);b=a.z.P;c=a.kz;LW(b,c.a,c.b,a.jV);b=a.g0;c=a.q7;d=a.gX;e=a.z.P;f=0;while(true){g=0;while(true){EE(b,e,c,g,f);g=g+BR(c)|0;if(g>=d.a)break;}f=f+CO(c)|0;if(f>=d.b)break;}Gc(a.z.P);}
function AOO(a,b,c){SL(a,b,c);X(a.jV,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function AAF(){var a=this;Cv.call(a);a.eP=null;a.oI=null;a.gG=null;a.cd=null;a.fm=0;a.iE=null;a.fJ=0;a.DP=20;a.Fv=11;a.Eb=220;a.md=null;a.E0=5000;a.io=0;a.gQ=null;}
function ATG(a){var b,c,d,e,f,g,h;b=a.iE;c=a.fJ;d=a.md;Ku(b,c,0,d.b,5000,d.a,20);B$(a.eP,1);Vx(a.iE,a.eP);if(a.cd===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BZ(a.oI,Dm(e),0.0,c);}b=CX(a.eP);a.cd=b;CM(b,a.oI);}if(a.fJ<=a.fm)while(true){f=a.fm;if(f<=a.fJ)break;a.fm=f-20|0;b=a.gG;g=a.io-1|0;a.io=g;BZ(b,Dm(g),0.0,20.0);JS(a.cd,a.gG,0,a.fm%220|0);EP(a.gG);}else while(a.fm<(a.fJ-20|0)){b=a.gG;g=a.io+1|0;a.io=g;BZ(b,Dm((g+11|0)-1|0),0.0,20.0);JS(a.cd,a.gG,0,a.fm%220|0);EP(a.gG);a.fm=a.fm+20|0;}b=H9(0,0,BR(a.cd),CO(a.cd));IA(b,
0,0,BR(a.cd),CO(a.cd));Hz(b,a.gQ.data[0]);Fm(b,a.gQ.data[1]);EE(b,a.eP,a.cd,400,0);g=a.fJ%220|0;f=Be(CO(a.cd)-g|0,200);d=H9(0,0,BR(a.cd),f);IA(d,0,g,BR(a.cd),f);Hz(d,a.gQ.data[0]);Fm(d,a.gQ.data[1]);EE(d,a.eP,a.cd,0,0);h=H9(0,f,BR(a.cd),(CO(a.cd)-f|0)-20|0);IA(h,0,0,BR(a.cd),(CO(a.cd)-f|0)-20|0);Hz(h,a.gQ.data[1]);Fm(h,a.gQ.data[0]);EE(h,a.eP,a.cd,0,0);}
function AWQ(a,b,c){Cn(a.md,b);}
function A0F(a,b){return 0;}
function AAc(a){return 5000-a.md.b|0;}
function Kv(){Ds.call(this);this.ef=0;}
function ZU(a){var b,c;b=a.z.bA;c=new Uo;c.xI=a;RJ(b,c,WJ(a));}
function QC(a){var b,c,d,e;b=a.ef+1|0;a.ef=b;c=JX(F(Kv));d=new K;M(d);H(H(U(H(d,C(263)),b),C(29)),c);e=L(d);c=a.z.bA;d=new VT;d.xT=e;TB(c,e,d,WJ(a));}
function WJ(a){var b;b=new Y9;b.BO=a;return b;}
function API(a,b,c,d){a:{switch(c){case 0:break;case 2:QC(a);break a;default:break a;}ZU(a);}return 1;}
function Sz(){var a=this;Ds.call(a);a.uk=null;a.gn=null;a.lC=null;a.pl=null;a.vV=null;}
function AUl(a){var b,c,d,e,f,g,h,i;if(a.lC===null){b=a.z.P;c=a.vV;d=Iq(b,c.h_,Cg(c.gZ,a.qQ));Cm(b.ch,d);e=C0(Eo(b.ch,C(264)));f=Bt();g=d.o2;c=new K;M(c);EF(H(c,C(265)),g);Bk(f,L(c));h=Nk(d,1.1799999475479126);c=Bt();i=new K;M(i);U(H(U(H(i,C(266)),e),C(171)),h);Bk(c,L(i));c=HF(b,e,h);a.pl=c;Cm(c,d);BZ(a.pl,C(264),0.0,d.eq);b=CX(b);a.lC=b;CM(b,a.pl);FT(a.gn,a.lC);F0(a.gn);b=a.gn.bl;FN();BP(b,A7n);BP(a.gn.X,A78);}b=a.z.P;EH(b,a.uk);c=a.gn;i=c.u;f=a.gX;e=f.a;c=c.t;X(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);EE(a.gn,b,a.lC,
0,0);}
function G4(){var a=this;Cv.call(a);a.vj=null;a.ck=null;a.ec=null;a.dj=null;a.fr=null;a.eO=null;}
function OM(a,b){var c,d;El(a,b);a.vj=CB(20);a.ck=Sv();a.ec=new Bg;a.dj=new Bg;a.fr=new Bg;a.eO=new Bg;c=b.o.bG;d=new ACm;d.DB=a;Ba(c,d);Ba(b.o.bS,a);b=a.ck.bl;FN();BP(b,A7n);BP(a.ck.X,A78);}
function AFo(a){var b,c,d;b=a.z.P;EH(b,a.vj);c=a.ck;d=c.u;Bs(b,d.a,d.b,c.t,c.bl);B$(b,1);c=a.ck;d=c.u;AEl(b,d.a,d.b,c.t,a.ec,a.dj,a.fr,a.eO,c.X);B$(b,0);}
function AYL(a,b){return 0;}
var Tp=G(G4);
function A0s(a,b,c){var d,e,f;d=a.ck;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);X(a.ec,0,0);X(a.dj,Be(b.a,b.b),Be(b.a,b.b));b=a.fr;d=a.ec;X(b,d.a,d.b+20|0);b=a.eO;d=a.dj;X(b,d.a,d.b+40|0);}
function A1k(a,b){var c,d,e;Cn(a.ec,b.k);b=a.dj;c=a.ck;d=c.u;e=d.a;c=c.t;X(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fr;c=a.ec;X(b,c.a,c.b+20|0);b=a.eO;c=a.dj;X(b,c.a,c.b+40|0);return 0;}
function To(){var a=this;G4.call(a);a.f3=null;a.go=null;}
function A2R(a,b){var c;c=a.dj;b=b.k;c.b=b.b-50|0;a.eO.b=b.b+100|0;return 1;}
function ANu(a){var b,c,d,e,f,g,h;b=Bd(a.ec.a,a.fr.a);c=Be(a.dj.a,a.eO.a);d=Be(a.ec.b,a.dj.b)-50|0;e=Bd(a.fr.b,a.eO.b)+50|0;Hg(a.ck,b,d,c-b|0,e-d|0);AFo(a);f=a.ck.u.a-10|0;AAH(a,a.z.P,10,f,a.ec,a.fr);g=a.ck;h=g.u.a+g.t.a|0;AAH(a,a.z.P,h,f,a.dj,a.eO);}
function AAH(a,b,c,d,e,f){var g;X(a.f3,c,a.ck.u.b);X(a.go,d,e.b-a.ck.u.b|0);g=a.f3;Bs(b,g.a,g.b,a.go,a.ck.bl);X(a.f3,c,e.b);X(a.go,d,f.b-e.b|0);e=a.f3;Bs(b,e.a,e.b,a.go,a.ck.X);X(a.f3,c,f.b);e=a.go;g=a.ck;X(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.f3;Bs(b,e.a,e.b,a.go,a.ck.bl);}
function AMh(a,b,c){}
function Wc(){var a=this;Cz.call(a);a.Cj=3;a.wj=null;a.j7=null;a.qo=0;}
function APk(a,b,c){var d,e;if(b===0.0){Ej(a.E,YW(a));d=S4(a,0.5,0,C(267));e=a.r.bO;Et(Ej(a.E,d),BG(e.a/10|0,e.b/10|0),BG((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function YW(a){var b,c,d,e,f,g;b=a.qo+1|0;a.qo=b;c=new K;M(c);U(H(c,C(268)),b);c=S4(a,1.0,1,L(c));d=a.r.bO;e=d.a/10|0;f=e+D5(a.j7,e)|0;e=d.b/20|0;e=e+D5(a.j7,e)|0;b=d.a;b=((b*7|0)/10|0)+D5(a.j7,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+D5(a.j7,g/10|0)|0;Et(c,BG(f,e),BG(b,g));return c;}
function S4(a,b,c,d){var e,f,g;e=AEw(a.r);if(d===null)f=new ADM;else{f=new ADO;f.uz=e;f.uA=d;}g=new Qe;LS(g);g.mj=new B2;g.pL=new Bg;g.yi=f;g.sc=b;if(c){d=GH(g,a.r);Jk(d,A79,A7$);g=d;}Lg(e,g);EG(e,Fi());AAA(e,a.wj,3.0);d=new ADN;d.qO=a;d.qP=e;Tr(e,d);return e;}
function Fp(){Cz.call(this);this.iK=null;}
function A4V(a){var b=new Fp();Ob(b,a);return b;}
function Ob(a,b){Ga(a,b);Ba(a.r.dw,a);BP(a.du,CB(43));}
function AWo(a){return AUC();}
function AP3(a){return 1;}
function AB6(a,b){EG(a.iK,b);}
function AIP(a,b){var c,d,e;c=a.r.bO;d=!a.ps()?0:ACJ(b);e=c.b-d|0;Et(b,BG(c.a/20|0,d+(e/20|0)|0),BG((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A07(a,b,c){if(b===0.0){a.iK=A2C(a.r,a.lp());AB6(a,Fi());if(a.ps())DL(a.iK,Nc(BF(a)));Ej(a.E,a.iK);a.nO(a.iK);}}
function Qy(){var a=this;Fp.call(a);a.me=null;a.eM=null;a.Ex=null;}
function AWl(a,b){var c;c=a.eM;return c!==null&&I4(c,b)?1:0;}
function AMQ(a){var b;b=Ie(a.me);a.eM=b;a.Ex=O6(b,a.z.o);AKF(a.eM);M1(a.r,a.eM);return a.eM;}
function AU8(a){return 0;}
function A2T(a,b){AIP(a,b);Ju(a);}
function ASJ(a,b){BD(b);GL(a.me,b);FA(a.eM,b);AB6(a,b.cI);}
function AR7(a,b){H3(a.E,b);}
function W9(){B.call(this);this.wC=null;}
function A0V(a,b){DY(a.wC,null);return 0;}
function ACH(){var a=this;Cv.call(a);a.tf=null;a.mR=null;a.fk=null;a.oW=null;a.mQ=0.0;a.hc=null;a.wn=null;a.tS=null;a.ya=null;a.yV=null;a.so=null;a.qA=null;a.Cf=null;a.wM=null;a.lH=null;}
var A7_=0;function A4y(a){var b=new ACH();AT$(b,a);return b;}
function AT$(a,b){var c,d,e;El(a,b);a.tf=new B2;a.mR=ADY(1.0,0.0,0.0,1.0);a.fk=Sv();a.oW=new Bg;a.mQ=3.1415927410125732;c=AJY();a.hc=c;a.wn=HD(c,1.25);a.tS=HD(a.hc,1.3333333730697632);a.ya=HD(a.hc,1.5);a.yV=HD(a.hc,1.6666666269302368);a.so=HD(a.hc,2.0);a.qA=ADY(a.mQ/24.0,15.0,3.0,0.5);c=ADY(a.mQ/12.0,25.0,3.0,0.5);a.Cf=c;a.wM=DX([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.lH=I(B2,[a.hc,a.wn,a.tS,a.ya,a.yV,a.so,a.qA,c]);c=b.o.bG;d=new QW;d.Ft=a;Ba(c,d);Ba(b.o.bS,a);b=a.fk.X;FN();BP(b,A7n);Hg(a.fk,0,0,600,60);e
=Nb(0.5,0.375);Jp(0.375,e);Jp(0.375,Jp(3.0,Nb(e,3.0)));HD(AJY(),3.0);}
function A2L(a,b,c){var d,e,f;Cn(a.oW,b);d=a.fk;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function HD(b,c){var d;d=new B2;U4(b,c,d);return d;}
function AJY(){var b;b=new B2;LE(b);return b;}
function AXN(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.z.P;EH(b,a.tf);B$(b,1);c=a.fk;d=c.u.a;e=c.t.b/2|0;f=0;while(true){g=a.lH.data;if(f>=g.length)break;h=a.wM.data[f];c=g[f];i=W_(c);j=a.fk;k=j.u;l=k.a;m=k.b;Mf(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.mR);f=f+1|0;}if(A7_){c=A4p(1,2);n=0;while(n<1000){h=D5(c,a.lH.data.length);l=D5(c,a.oW.b-a.fk.t.b|0);j=a.lH.data[h];i=j.bs;i=i-(i|0)>=0.25?0.0:0.5;k=a.fk;Mf(b,k.u.a,l,k.t,d+i,(e+l|0)+i,j,a.mR);n=n+1|0;}}B$(b,0);}
function ASu(a,b){return A7_;}
function YX(){var a=this;Fp.call(a);a.lz=null;a.vZ=null;}
function AZm(a){var b,c,d,e;b=TW(a.r);a.lz=b;BD(b);c=new Tt;c.tc=b;b=PJ(C(269),4,c);d=Bt();e=OP(b);c=new K;M(c);U(H(c,C(270)),e);Bk(d,L(c));ER(a.lz,b);Kf(a.lz,a.vZ);b=a.lz;return JM(b,GH(b,a.r));}
function A0A(a,b){var c;c=a.r.bO;Et(b,BG(c.a/30|0,c.b/10|0),BG((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
var OU=G(KD);
function AV5(a){return E5(1);}
function RV(){Cz.call(this);this.na=null;}
function AWR(a,b,c){if(b===0.0)AB1(a);}
function AB1(a){ADf(new LO,a.E,a.na,new ADg);}
function PK(){var a=this;Fp.call(a);a.vi=null;a.fQ=null;}
function AIF(){var b;b=I(Ma,[Nq(1,3,4,5,1),Nq(5,6,10,2,2),Nq(12,2,13,3,3),Nq(15,3,17,2,4)]);return A5o(Q(Gs,0),Q(Gs,0),b);}
function AW8(a){var b,c,d,e;b=A1r(a.r);a.fQ=b;AC5(b,a.vi);c=a.fQ.dX;BD(c);d=new ABj;d.ri=c;b=PJ(C(269),4,d);d=a.fQ.dU;BD(d);e=new ABk;e.tr=d;c=PJ(C(269),4,e);ER(a.fQ.dX,b);ER(a.fQ.dU,c);AA7(a.fQ,AIF());return a.fQ;}
function TU(){Cz.call(this);this.ik=null;}
function ABc(){return E5(1);}
function Zf(a){var b,c,d,e;b=new Zj;c=a.ik;N$(b,a.E,c,new Vh);d=A1r(b.cy.bZ);b.dP=d;AC5(d,c);c=AKx(C(271),0);d=AKx(C(272),0);IV(c);IV(d);e=new SJ;e.s1=b;c.dW=e;e=new SI;e.vg=b;d.dW=e;ER(b.dP.dX,c);ER(b.dP.dU,d);Ej(b.cy,Pc(b,b.dP,0.0));}
function AT7(a,b,c){if(b===0.0)Zf(a);}
function Kh(){var a=this;B.call(a);a.BV=null;a.ej=null;a.uI=null;a.De=null;a.s0=null;a.k2=null;a.rB=null;a.wq=null;a.lN=null;a.lI=null;a.gr=null;}
function A8a(a,b,c,d,e,f,g,h,i,j,k){var l=new Kh();My(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function My(a,b,c,d,e,f,g,h,i,j,k,l){a.BV=b;a.ej=c;a.uI=d;a.De=e;a.s0=f;a.k2=g;a.rB=h;a.wq=i;a.lN=j;a.lI=k;a.gr=l;}
function AFR(){B.call(this);this.E$=null;}
function AJJ(a){var b=new AFR();AUY(b,a);return b;}
function AUY(a,b){a.E$=b;}
var AER=G(0);
function AId(){var a=this;B.call(a);a.o4=null;a.k$=null;a.xM=null;a.qF=null;}
function AKp(a,b,c,d){var e=new AId();A2Y(e,a,b,c,d);return e;}
function A2Y(a,b,c,d,e){a.o4=b;a.k$=c;a.xM=d;a.qF=e;}
var AGe=G(0);
function Fi(){var b,c,d;b=new I1;c=new I9;AY6();d=A8b;OH(c,d,A8c,A8d,A8e,A8f,d);LX(b,c,AHA(),AHK(S(C(273)),S(C(239)),S(C(240))),AHA(),AH8(1,0.125),A8g,A8h);return b;}
function AHA(){var b,c;b=new Kt;c=S(C(274));AY6();Ld(b,c,A8i,A8j);return b;}
function AHc(){var b,c;b=new Kt;c=S(C(240));AU7();Ld(b,c,A8k,A8l);return b;}
function AK8(){var b,c;b=new Kt;AG6();c=A8m;AVg();Ld(b,c,A8n,A8o);return b;}
function AHV(){var a=this;B.call(a);a.zq=null;a.wB=null;a.uS=null;a.qN=null;}
function AEs(a,b,c,d){var e=new AHV();AVw(e,a,b,c,d);return e;}
function AVw(a,b,c,d,e){a.zq=b;a.wB=c;a.uS=d;a.qN=e;}
function AEh(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.d8.wB;break a;case 3:if(c!=3){b=b.d8.qN;break a;}b=b.d8.uS;break a;default:b=b.br.ej;break a;}b=b.d8.zq;}return b;}
function J8(a,b,c){return AEh(a,b,0,c);}
function ME(){var a=this;B.call(a);a.l4=null;a.ks=null;}
function Wq(a,b){var c;c=a.ks;a.ks=b;return c;}
function KO(){var a=this;ME.call(a);a.bU=null;a.b5=null;a.gK=0;a.gV=0;}
function M9(a){var b;b=Lx(a);if(b==2){if(Lx(a.b5)<0)a.b5=Pk(a.b5);return Qh(a);}if(b!=(-2))return a;if(Lx(a.bU)>0)a.bU=Qh(a.bU);return Pk(a);}
function Lx(a){var b,c;b=a.b5;c=b===null?0:b.gK;b=a.bU;return c-(b===null?0:b.gK)|0;}
function Pk(a){var b;b=a.bU;a.bU=b.b5;b.b5=a;EZ(a);EZ(b);return b;}
function Qh(a){var b;b=a.b5;a.b5=b.bU;b.bU=a;EZ(a);EZ(b);return b;}
function EZ(a){var b,c,d;b=a.b5;c=b===null?0:b.gK;b=a.bU;d=b===null?0:b.gK;a.gK=Bd(c,d)+1|0;a.gV=1;b=a.bU;if(b!==null)a.gV=1+b.gV|0;b=a.b5;if(b!==null)a.gV=a.gV+b.gV|0;}
var AK_=G();
function AML(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Yl;c=c.buffer;d.gj=c;d.qk=new $rt_globals.Int8Array(c);d.mH=new $rt_globals.Uint16Array(c);d.Aq=new $rt_globals.Int32Array(c);d.sz=new $rt_globals.Float32Array(c);d.sL=new $rt_globals.Float64Array(c);e=d.gj.byteLength;c=new K;M(c);U(H(c,C(275)),e);CV(L(c));e=b.callToCpp1();c=new K;M(c);U(H(c,C(276)),e);CV(L(c));f=b.callToCpp2();c=new K;M(c);EF(H(c,C(277)),f);CV(L(c));c=O7(d,b.getC8String());g=new K;M(g);H(H(g,C(278)),c);CV(L(g));c
=WO(d,b.getC16String());g=new K;M(g);H(H(g,C(279)),c);CV(L(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gj,h,8));c=AGB(i);g=new K;M(g);H(H(g,C(280)),c);CV(L(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gj,h,8));c=ASB(j);g=new K;M(g);H(H(g,C(281)),c);CV(L(g));k=AJi(d,b.getCDoubleArray8(),8);l=AUt(k);c=new K;M(c);H(H(c,C(282)),l);CV(Ec(c));l=AUo(b.getC8String(),C(283),d);c=Mb();H(H(c,C(284)),l);CV(Ec(c));l=AQt(b.getC16String(),C(285),
d);c=Mb();H(H(c,C(286)),l);CV(Ec(c));c=AZ5(i,d,b.getCIntArray8(),DX([11,22,33,44,55,66,77,88]));g=Mb();H(H(g,C(287)),c);CV(Ec(g));c=ASM(j,d,b.getCFloatArray8(),100,DX([111,222,333,444,555,666,777,888]));g=Mb();H(H(g,C(288)),c);CV(Ec(g));b=A1j(k,d,b.getCDoubleArray8(),1000,DX([1111,2222,3333,4444,5555,6666,7777,8888]));c=Mb();H(H(c,C(289)),b);CV(Ec(c));}
function ASM(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(290);h=0;i=e;a:{while(h<g){if(C0(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.sz[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(291);}return C(292);}
function A1j(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(290);h=0;i=e;a:{while(h<g){if(GG(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.sL[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(291);}return C(292);}
function AZ5(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(290);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.Aq[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(291);}return C(292);}
function AUo(b,c,d){var e,f,g,h;e=O7(d,b);if(!Bj(c,e))return C(293);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.qk[h])return C(294);f=f+1|0;}return C(291);}
function AQt(b,c,d){var e,f,g,h;e=WO(d,b);if(!Bj(c,e))return C(293);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.mH[h>>>1|0]&65535))return C(294);f=f+1|0;}return C(291);}
function CV(b){Yj(C(2),b);}
function APB(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function YE(){B.call(this);this.rW=null;}
function AVP(a,b){return AJj(a.rW,b);}
function YC(){B.call(this);this.Bw=null;}
function AXk(a,b){AJx(a.Bw,b);}
function YD(){B.call(this);this.xY=null;}
function AS4(a,b){b=b;return AEO(a.xY,b);}
function AHR(){Ks.call(this);this.dv=null;}
function KX(){var a=new AHR();A2t(a);return a;}
function H9(a,b,c,d){var e=new AHR();AYf(e,a,b,c,d);return e;}
function A2t(a){ACh(a);a.dv=new B2;}
function AYf(a,b,c,d,e){ACh(a);a.dv=new B2;Hg(a,b,c,d,e);}
function F0(a){var b,c;b=a.t;c=a.dv;X(b,c.bf-c.bn|0,c.bC-c.bs|0);}
function FT(a,b){IA(a,0,0,BR(b),CO(b));}
function IA(a,b,c,d,e){Cp(a.dv,b,c,d,e);}
function EE(a,b,c,d,e){var f;f=a.u;DJ(b,f.a+d|0,f.b+e|0,a.t,a.dv,c,a.X,a.bl,0);}
function ST(a,b,c,d){var e;e=a.u;DJ(b,e.a,e.b,a.t,a.dv,c,a.X,a.bl,d);}
function Iy(a,b,c,d,e,f,g){DJ(b,c,d,a.t,a.dv,e,!f?a.X:a.bl,!f?a.bl:a.X,g);}
function Hz(a,b){BP(a.X,b);}
function Fm(a,b){BP(a.bl,b);}
function TV(){B.call(this);this.fA=null;}
function AV3(a,b){var c,d,e,f,g,h;c=b.k;d=c.a;e=a.fA.hw;f=e.t;d=d-f.a|0;g=c.b-f.b|0;X(e.u,d,g);c=a.fA;e=c.z.bA;b=b.k;d=0;a:{while(true){h=c.i0.data;if(d>=h.length)break;if(Fe(h[d],b)){b=c.qD.data[d];break a;}d=d+1|0;}b=null;}ZX(e,b);return 1;}
function ALL(a,b,c,d){if(!c&&d==2){b=a.fA;Sw(b,b.em);}return 1;}
function AVW(a,b,c){var d,e;d=Bt();e=new K;M(e);U(H(e,C(295)),c);Bk(d,L(e));if(c)return null;d=b.k;e=!Fe(a.fA.em,d)?null:d;Ug(a.fA.jz,d.a,d.b);b=a.fA;YK(b.jz,MZ(b.z.bA));if(e===null)b=A7u;else{b=new ACs;b.sV=a;b.sW=e;}return b;}
function AVo(a,b,c){var d;b=Bt();d=new K;M(d);U(H(d,C(296)),c);Bk(b,L(d));return 1;}
function Y5(){B.call(this);this.B6=null;}
function A1H(a,b){return W8(a.B6,b);}
function Y4(){B.call(this);this.sw=null;}
function AZ8(a,b){return W8(a.sw,b);}
function Y3(){B.call(this);this.Du=null;}
function AYq(a,b,c){var d,e;Bk(Bt(),C(297));d=!c?C(298):C(54);e=new K;M(e);H(H(H(e,C(299)),d),C(300));ACZ(b,L(e));return 1;}
function Y2(){B.call(this);this.Ef=null;}
function AUZ(a){Bk(Bt(),C(301));}
function Y1(){B.call(this);this.EN=null;}
function ARo(a,b){Bk(Bt(),C(302));return 1;}
function Y0(){B.call(this);this.AX=null;}
function A1N(a,b,c,d){var e,f,g;b=a.AX;e=( -d|0)/10|0;b=b.em;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Hl(){var a=this;B2.call(a);a.hp=0;a.hs=0;a.hq=0;a.hr=0;}
function CB(a){var b=new Hl();AUe(b,a);return b;}
function Dy(a,b,c){var d=new Hl();AWK(d,a,b,c);return d;}
function S(a){var b=new Hl();A0$(b,a);return b;}
function EX(a,b,c,d){var e=new Hl();RE(e,a,b,c,d);return e;}
function BY(a){var b=new Hl();K4(b,a);return b;}
function AUe(a,b){RE(a,b,b,b,255);}
function AWK(a,b,c,d){RE(a,b,c,d,255);}
function A0$(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.hp=Kw(P(b,1))*17|0;a.hs=Kw(P(b,2))*17|0;a.hq=Kw(P(b,3))*17|0;a.hr=255;}else{a.hp=LV(P(b,1),P(b,2));a.hs=LV(P(b,3),P(b,4));a.hq=LV(P(b,5),P(b,6));a.hr=J(b)!=9?255:LV(P(b,7),P(b,8));}IF(a.hp,a.hs,a.hq,a.hr,a);return;}}
function RE(a,b,c,d,e){a.hp=b;a.hs=c;a.hq=d;a.hr=e;IF(b,c,d,e,a);}
function K4(a,b){a.hp=b.hp;a.hs=b.hs;a.hq=b.hq;a.hr=b.hr;BP(a,b);}
function Kw(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LV(b,c){return (16*Kw(b)|0)+Kw(c)|0;}
var AGP=G(0);
function E5(b){return !b?I(BK,[C(155),C(166),C(303)]):I(BK,[C(155),C(166),C(303),C(34)]);}
function WF(){B.call(this);this.mg=null;}
function AN7(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.mg.di;e=DQ();f=e-0.5+(DQ()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DQ()*0.3;h=0.5+DQ()*0.5;Iv(e,g,h,1.0,b.X);Iv(f,g,h,1.0,b.bl);b=a.mg;BP(b.dY.X,b.di.X);b=a.mg;BP(b.dY.bl,b.di.bl);}return 1;}
function WC(){var a=this;B.call(a);a.nQ=null;a.oi=null;}
function AGf(){var a=this;B.call(a);a.f5=null;a.cq=null;a.gT=null;a.hX=null;a.nY=null;a.cG=null;a.hL=null;a.c3=0;a.f8=0;a.of=0;a.ko=0;a.kD=0;a.hR=0;a.kW=null;a.o8=null;a.wJ=null;a.nN=null;}
function AJO(){var a=new AGf();AST(a);return a;}
function AST(a){a.cq=Sv();a.gT=new Bg;a.hX=new Bg;a.cG=A8p;a.ko=(-1);a.kD=1;}
function Nr(a,b){Oe(a);a.cG=b;}
function JL(a,b,c){a.f5=b;ACV(a,c);Oe(a);}
function JN(a,b){var c;a.nY=b.lA;c=b.o_.pN;BP(a.cq.X,c);c=b.jd.jI;BP(a.cq.bl,c);a.nN=b.o_;}
function MY(a){a.hL=BV(a.hL,null);X(a.gT,0,0);a.cG=A8p;a.ko=(-1);ABi(a.cq);}
function ACV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Kq(b);d=b.cf;BD(a.f5);Cm(c,a.f5);e=Nk(a.f5,1.25);f=0;a.c3=Cg(2.0,d);a.f8=Cg(3.0,d);a.of=Cg(12.0,d);g=0;h=a.cG.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Lj(c,l.nD);n=a.of;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fo;b.a=g;b.b=0;b=l.ez;b.a=n;b.b=e;Cp(l.kl,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gT;b.a=g;b.b=e;b=a.cq.t;n=a.hR;if(!n){m=a.c3;m=(g+m|0)+Bc(m,a.cG.data.length)|0;}else m=(f+(a.c3*2|0)|0)+(a.f8*2|0)|0;b.a=m;if(!n)e=e+(a.c3*2|0)|0;else{n=a.c3;e=(Bc(e+n|0,a.cG.data.length)+n
|0)+(a.f8*2|0)|0;}b.b=e;}
function Nl(a,b,c){var d,e,f,g,h,i,j;X(a.cq.u,b,c);d=a.c3+a.f8|0;e=a.cG.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fo;j.a=b+d|0;j.b=c+h|0;if(!a.hR){if(!i.ez.a)AEC();d=d+(i.ez.a+a.c3|0)|0;}else{if(!i.ez.b)AEC();h=h+(i.ez.b+a.c3|0)|0;}g=g+1|0;}}
function AEC(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EA(a){var b,c;b=a.gT;if(b.a&&b.b)return a.cq.t;c=new Bu;Bm(c,C(304));N(c);}
function Oe(a){a.kD=1;}
function Mh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bH;if(!a.cG.data.length)return;if(a.hL===null)a.hL=CX(c);a:{if(!a.kD){d=a.gT;if(Bc(d.a,d.b))break a;}d=a.gT;if(!Bc(d.a,d.b))ACV(a,b);d=a.gT;e=d.a;f=d.b;if(!Bc(e,f))return;d=D4(c,e,f,b.cB);Cm(d,a.f5);g=Nk(a.f5,0.125);h=a.f5;i=h.eq;g=g+i-(i+h.eK)/16.0;j=a.cG.data;e=j.length;f=0;while(f<e){h=j[f];BZ(d,h.nD,h.kl.bn+a.of,g);f=f+1|0;}CM(a.hL,d);a.kD=0;Ez(d);}if(!Lh(a.cq)){d=a.cq;AI5(c,d.t,d.u,d.bl,a.c3,a.hX);d=a.cq;h=d.t;k=d.u;d=d.X;e=a.c3;l=a.hX;l.a=(h.a-e|0)-
e|0;l.b=(h.b-e|0)-e|0;Bs(c,k.a+e|0,k.b+e|0,l,d);if(a.hR){d=a.cq;AKg(c,d.t,d.u,0,0,Yn(a.nY,b.cf),a.nY.n2,a.hX);}}j=a.cG.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fo;e=h.a;f=h.b;h=d.ez;k=d.kl;l=a.hL;o=a.nN;DJ(c,e,f,h,k,l,o.rZ,Vm(o,d.la),b.cB);n=n+1|0;}b:{if(a.hR){j=a.cG.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.hX;e=(a.cq.t.a-(a.c3*2|0)|0)-(a.f8*2|0)|0;h=d.ez;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fo;Bs(c,k.a+h.a|0,k.b,b,Vm(a.nN,d.la));}p=p+1|0;}}}}
function NW(a,b,c){var d,e,f,g,h,i;d=Fe(a.cq,b);e=!d?(-1):Px(a,b);f=a.ko;if(f!=e){if(f>=0){g=a.cG.data[f];g.la=0;if(a.wJ!==null){h=Bt();g=Cy(g);i=new K;M(i);H(H(U(H(i,C(305)),f),C(306)),g);Bk(h,L(i));}}if(e>=0){h=a.cG.data[e];g=a.o8;if(g!==null)g.wP(b,e,h);h.la=1;}a.ko=e;}return d&&GI(c)?1:0;}
function Oh(a,b,c,d){var e,f;e=Px(a,b);if(e>=0){f=a.cG.data[e];if(!ACk(f))f.mY.f();}return 1;}
function Px(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cG.data;if(c>=d.length)return (-1);e=d[c];if(Gk(b,e.fo,e.ez))return c;if(a.hR){f=e.fo;g=f.a;e=e.ez;h=e.a;g=g+h|0;i=f.b;f=a.hX;f.a=(a.cq.t.a-(a.c3*2|0)|0)-h|0;f.b=e.b;if(AEX(b,g,i,f))break;}c=c+1|0;}return c;}
function AEf(a){a.hR=1;}
function AI6(){var a=this;B.call(a);a.h_=null;a.gZ=0.0;a.j8=0;a.kn=0;}
function Dv(a,b){var c=new AI6();ARD(c,a,b);return c;}
function ARD(a,b,c){a.h_=b;a.gZ=c;a.j8=400;a.kn=700;}
function A04(a,b){if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){b=b;return a.gZ===b.gZ&&a.j8==b.j8&&a.kn==b.kn&&BO(a.h_,b.h_)?1:0;}return 0;}
function ABO(){B.call(this);this.uF=null;}
function AQ3(a,b){var c;c=a.uF;if(b.bm==32)MY(c.dF);return 0;}
function ABK(){B.call(this);this.vF=null;}
function ASN(a,b){var c,d,e,f;b=b;c=a.vF;d=Nu(c.r);Gi(d,Fi(),c.oA);b=b.k;e=RQ(4);f=new UR;f.Dv=c;Js(d,b,e,f);Gn(c.E,d);return 1;}
var ABL=G();
function A3e(a){Bk(Bt(),C(307));}
var ABM=G();
function AMr(a){Bk(Bt(),C(308));}
function BC(){var a=this;B.call(a);a.mY=null;a.kl=null;a.fo=null;a.ez=null;a.nh=null;a.tP=null;a.la=0;a.nD=null;}
function Xi(a,b){var c=new BC();CE(c,a,b);return c;}
function A4$(a,b,c,d){var e=new BC();AJs(e,a,b,c,d);return e;}
function CE(a,b,c){AJs(a,b,c,null,null);}
function AJs(a,b,c,d,e){a.kl=new B2;a.fo=new Bg;a.ez=new Bg;a.nD=c;a.tP=e;a.mY=b;a.nh=d;}
function ACk(a){return a.nh===null?0:1;}
function Uy(){B.call(this);this.Cy=null;}
function AYj(a,b){return b.jR&&b.bm==32?1:0;}
function Uz(){B.call(this);this.Bf=null;}
function AL9(a,b){var c,d,e,f,g,h;b=b;c=a.Bf;d=Nu(c.r);Gi(d,Fi(),Dv(C(155),25.0));b=b.k;e=Q(BC,1);f=e.data;g=new BC;h=new AD$;h.Bv=c;CE(g,h,C(309));f[0]=g;Js(d,b,CS(e),A8q);Gn(c.E,d);return 1;}
function AHx(){var a=this;B.call(a);a.pY=0;a.p0=0;}
function U0(){var a=new AHx();ATz(a);return a;}
function A4p(a,b){var c=new AHx();ALf(c,a,b);return c;}
function ATz(a){ALf(a,AKY(GR((AGM()))),GR((AGM()))^(-559038737));}
function ALf(a,b,c){var d;a.pY=b;a.p0=c;d=0;while(d<19){NF(a);d=d+1|0;}}
function NF(a){var b,c;b=a.pY;c=a.p0;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.pY=c;a.p0=b;return b;}
function AKY(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AKz(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function D5(a,b){return U2(a)*b|0;}
function U2(a){return 5.960464477539063E-8*(NF(a)&16777215);}
function Q0(a,b){var c,d,e;c=AKz(NF(a));d=ASG( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function O_(){B.call(this);this.x3=null;}
function AQ9(a,b,c){var d;d=a.x3;if(b===0.0)L6(d,100);}
function O$(){B.call(this);this.vR=null;}
function AZH(a,b){var c,d,e;c=a.vR;d=b.bm;if(d==32){c.lK=c.lK?0:1;e=1;}else if(d==13){L6(c,1);e=1;}else if(d!=8)e=0;else{PI(c,1);e=1;}return e;}
var ZR=G(0);
function AIe(b,c){var d;d=new UV;d.xR=b;d.xQ=c;return d;}
function AIk(){var a=this;B.call(a);a.hF=null;a.ia=0;a.lU=0;a.hj=0;}
function AIv(a){var b=new AIk();AOf(b,a);return b;}
function AOf(a,b){a.hF=BM();a.hj=0;a.lU=2048;a.ia=b;}
function KA(a,b,c){var d,e,f,g,h,i;d=c.zo(b);e=a.lU;if(d>e){c=new Bu;f=new K;M(f);BN(U(H(U(H(f,C(310)),d),C(311)),e),41);Bm(c,L(f));N(c);}if(!a.ia){b=new BU;Bm(b,C(312));N(b);}a:{b=new B2;if(d){b:{c=a.hF;if(c.q>0){c=B7(c);g=d;while(true){if(!B_(c))break b;f=Ca(c);if(f.bf>=g)break;}Cp(b,f.bn,f.bs,g,a.ia);f.bn=f.bn+g;h=f.bf-g;f.bf=h;if(h===0.0)AG_(a.hF,f);break a;}}g=a.hj;i=d;Cp(b,0.0,g,i,a.ia);BB(a.hF,ADY(i,a.hj,a.lU-d|0,a.ia));a.hj=a.hj+a.ia|0;}}return b;}
function I3(a,b){var c,d,e,f,g,h,i;a:{c=ALd(b);b=a.hF;if(b.q>0){d=B7(b);while(true){if(!B_(d))break a;e=Ca(d);if(e.bs===c.bs){f=e.bn;g=e.bf;h=f+g;i=c.bn;if(h===i){c.bn=f;c.bf=c.bf+g;ZC(d);}else{h=c.bf;if(i+h===f){c.bf=h+g;ZC(d);}}}}}}BB(a.hF,c);}
function MQ(a){return BG(a.lU,a.hj);}
function WQ(){var a=this;B.call(a);a.rY=null;a.lO=null;}
function AU$(a,b,c){if(c)return A7u;return F6(a.lO.i1,b.k,a.rY,1);}
function AL4(a,b,c){return 1;}
function AW2(a,b){var c;c=a.lO;return Gb(c.i1,b.k,c.xL);}
function AAb(){B.call(this);this.AK=null;}
function AQ7(a,b,c,d){var e,f;b=a.AK;e=(Wu(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.e$=Be(Bd(0,b.e$+Bc(e,f)|0),US(b));return 1;}
function QP(){B.call(this);this.s_=null;}
function AQY(a,b){var c,d,e;c=a.s_;if(b.cO&&b.bm==79){if(!b.bL){b=c.z.bA;d=new Xe;d.u0=c;Kk(b,d);}else{b=c.z.bA;d=new Xd;d.xt=c;Jd(b,d);}e=1;}else e=0;return e;}
function RG(){B.call(this);this.x6=null;}
function AUn(a,b){var c,d,e,f,g,h,i;b=b;c=a.x6;d=Nu(c.r);Gi(d,Fi(),Dv(C(155),25.0));b=b.k;e=Q(BC,5);f=e.data;g=new BC;h=new T6;h.rG=c;CE(g,h,C(313));f[0]=g;g=new BC;h=new T7;h.sn=c;CE(g,h,C(314));f[1]=g;g=new BC;h=new T8;h.tI=c;CE(g,h,C(315));f[2]=g;h=new BC;i=new T9;i.xD=c;CE(h,i,C(316));f[3]=h;h=new BC;i=new T$;i.x5=c;CE(h,i,C(317));f[4]=h;Js(d,b,CS(e),A8q);Gn(c.E,d);return 1;}
function RF(){B.call(this);this.Ad=null;}
function A0I(a,b){var c,d,e,f;c=a.Ad;d=c.z.bA;e=new XP;e.wZ=c;f=Q(B,1);f.data[0]=b;CW(d,e,C(318),f);}
function ABX(){B.call(this);this.m7=null;}
function AZY(a,b){var c,d,e,f,g,h;c=a.m7;d=c.qp;if(d!==null){e=c.e8.u;f=e.a;g=b.k;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.qp=g;}b=b.k;f=b.a;c=c.gD;d=c.t;f=f-d.a|0;h=b.b-d.b|0;X(c.u,f,h);return 1;}
function AUc(a,b,c){var d;if(!c){d=b.k;b=a.m7;if(!Fe(b.e8,d))d=null;b.qp=d;}return A7u;}
var AGk=G();
function ALk(b){var c,d;c=HF(b,250,64);Hu(c,C(242),25.0);Kc(c,187,187,187);BZ(c,C(319),0.0,24.0);BZ(c,C(319),0.25,56.0);d=CX(b);CM(d,c);Ez(c);return d;}
var Dj=G(0);
var A7F=null;var A78=null;var A7G=null;var A7n=null;var A7I=null;var A7H=null;var A7K=null;var A7J=null;var A7M=null;var A7L=null;var A7N=null;function FN(){FN=Bn(Dj);AUq();}
function AUq(){A7F=CB(187);A78=S(C(320));A7G=CB(55);A7n=CB(43);A7I=Dy(33,66,131);A7H=Dy(60,63,65);A7K=S(C(321));A7J=S(C(322));A7M=EX(85,85,85,128);A7L=EX(43,43,43,0);A7N=S(C(228));}
function YF(){var a=this;B.call(a);a.qW=null;a.l3=null;}
function APe(a,b,c){var d;if(!c){d=F6(a.l3.iE,b.k,a.qW,1);if(d!==null)return d;}return A7u;}
function AVl(a,b,c){return 1;}
function AOa(a,b){var c;c=a.l3;return Gb(c.iE,b.k,Ry(c.z.bA));}
function V3(){B.call(this);this.rE=null;}
function A1K(a,b,c,d){var e,f;b=a.rE;e=(Wu(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fJ=Be(Bd(0,b.fJ+Bc(e,f)|0),AAc(b));return 1;}
function ADq(){B.call(this);this.wI=null;}
function ANn(a,b){var c,d;a:{c=a.wI;switch(b.bm){case 67:QC(c);d=1;break a;case 86:ZU(c);d=1;break a;default:}d=0;}return d;}
var ADp=G();
function AYx(a,b,c){return 0;}
function ADo(){B.call(this);this.sF=null;}
function ANt(a,b,c){var d,e;d=a.sF;c=d.ef+1|0;d.ef=c;d=JX(F(Kv));e=new K;M(e);H(H(U(e,c),C(323)),d);e=L(e);$rt_globals.console.info($rt_ustr(e));ACZ(b,e);return 1;}
var ADn=G();
function AQn(a){return null;}
function ADr(){B.call(this);this.zV=null;}
function A1f(a){var b,c;b=a.zV;c=new VM;c.qS=b;return c;}
function Sf(){B.call(this);this.DV=null;}
function ATQ(a,b){return 0;}
function Pz(){B.call(this);this.zi=null;}
function AL0(a,b){var c;c=a.zi;if(b.jR&&b.bm==27){b=ADC(c.E);if(b!==null){b=b.dg;if(b===null){b=new F5;Y(b);N(b);}b.i8.f();}}return 0;}
function PA(){B.call(this);this.vP=null;}
function AXI(a,b){var c,d,e,f,g,h,i;b=b;c=a.vP;d=Nu(c.r);Gi(d,Fi(),Dv(C(155),25.0));b=b.k;e=Q(BC,1);f=e.data;g=new BC;h=c.E;i=new XC;i.yU=c;CE(g,If(h,i),C(324));f[0]=g;Js(d,b,CS(e),A8q);Gn(c.E,d);return 1;}
function PB(){B.call(this);this.Bq=null;}
function AZW(a,b){var c,d,e;c=a.Bq;d=c.eM;if(d!==null){e=new AA0;e.BZ=c;e.B0=b;GK(d,b,e);}}
function PC(){B.call(this);this.zf=null;}
function A1C(a,b){var c,d,e;b=b;c=a.zf;if(DO(c.r,c.eM)){d=c.me;b=b.k;e=c.eM;II(d,b,e,c,e,c,new XN);}return 1;}
function QW(){B.call(this);this.Ft=null;}
function APJ(a,b){return 0;}
var AHi=G(0);
function AKF(b){HX(b,A4I(C(325),C(191),ACe(C(326))));}
function XE(){B.call(this);this.yd=null;}
function ANP(a,b){var c,d,e,f,g,h;b=b;c=a.yd;d=Q(BC,1);e=d.data;f=new BC;g=c.E;h=new R4;h.xJ=c;CE(f,If(g,h),C(327));e[0]=f;f=CS(d);g=c.E;c=c.na;Jf(g,c.cI,c.hy,b.k,f);return 1;}
function UD(){B.call(this);this.Cv=null;}
function ARX(a,b){return 1;}
function UC(){B.call(this);this.t1=null;}
function ARn(a,b){var c,d;c=a.t1;if(b.bm!=32)d=0;else{AA7(c.fQ,AIF());d=1;}return d;}
function AA8(){B.call(this);this.q0=null;}
function ARW(a,b){var c,d,e,f,g,h;b=b;c=a.q0;d=Q(BC,3);e=d.data;f=new BC;g=c.E;h=new Zv;h.Ap=c;CE(f,If(g,h),C(328));e[0]=f;g=new BC;f=c.E;h=new Zu;h.r_=c;CE(g,If(f,h),C(329));e[1]=g;f=new BC;h=c.E;g=new Zw;g.v$=c;CE(f,If(h,g),C(327));e[2]=f;f=CS(d);h=c.E;c=c.ik;Jf(h,c.cI,c.hy,b.k,f);return 1;}
var Dp=G(0);
var A7P=null;var A8r=null;var A7R=null;var A7Q=null;var A7T=null;var A7S=null;var A7V=null;var A7U=null;var A7X=null;var A7W=null;var A7Y=null;function AOg(){AOg=Bn(Dp);AS3();}
function AS3(){A7P=CB(206);A8r=S(C(330));A7R=S(C(331));A7Q=S(C(235));A7T=S(C(332));A7S=S(C(224));A7V=S(C(333));A7U=S(C(334));A7X=EX(107,106,107,128);A7W=EX(30,31,34,0);A7Y=S(C(237));}
function Co(){CI.call(this);this.lb=null;}
var A8s=null;var A8t=null;var A8u=null;var A8v=null;var A8w=null;var A7w=null;var A8x=null;var A8y=null;var A8z=null;var A8A=null;var A8B=null;var A8C=null;var A8D=null;var A8E=null;var A8F=null;var A7Z=null;function T5(){T5=Bn(Co);AYF();}
function DV(a,b,c){var d=new Co();Z7(d,a,b,c);return d;}
function A40(a,b,c,d){var e=new Co();ADA(e,a,b,c,d);return e;}
function Z7(a,b,c,d){T5();DK(a,b,c);a.lb=JQ(d,null);}
function ADA(a,b,c,d,e){T5();DK(a,b,c);a.lb=JQ(d,e);}
function AYF(){var b,c;b=new Co;AOg();Z7(b,C(335),0,A8r);A8s=b;A8t=DV(C(336),1,S(C(337)));A8u=DV(C(338),2,S(C(339)));A8v=DV(C(340),3,S(C(341)));A8w=DV(C(342),4,A8r);A7w=DV(C(343),5,S(C(344)));A8x=DV(C(345),6,S(C(346)));A8y=DV(C(347),7,S(C(348)));A8z=DV(C(349),8,S(C(350)));c=new Co;FN();ADA(c,C(351),9,A78,S(C(333)));A8A=c;A8B=A40(C(352),10,A78,S(C(238)));A8C=DV(C(353),11,S(C(354)));A8D=DV(C(355),12,S(C(356)));A8E=DV(C(357),13,A8r);b=DV(C(358),14,S(C(359)));A8F=b;A7Z=I(Co,[A8s,A8t,A8u,A8v,A8w,A7w,A8x,A8y,A8z,
A8A,A8B,A8C,A8D,A8E,b]);}
function Kx(){var a=this;B.call(a);a.g7=null;a.mS=null;}
function JQ(a,b){var c=new Kx();AY9(c,a,b);return c;}
function AY9(a,b,c){a.g7=b;a.mS=c;}
function I1(){var a=this;B.call(a);a.lA=null;a.tn=null;a.oG=null;a.Eh=3;a.jd=null;a.BG=null;a.Fw=null;a.o_=null;a.m3=null;a.oR=null;}
function A8G(a,b,c,d,e,f,g){var h=new I1();LX(h,a,b,c,d,e,f,g);return h;}
function LX(a,b,c,d,e,f,g,h){a.tn=Dv(C(166),16.0);a.oG=Dv(C(14),16.0);a.Eh=3;a.BG=b;a.Fw=c;a.jd=d;a.o_=e;a.lA=f;a.m3=g;a.oR=h;}
function AJX(){var a=this;B.call(a);a.n2=null;a.ti=0;}
function AH8(a,b){var c=new AJX();A09(c,a,b);return c;}
function A09(a,b,c){var d;d=new B2;a.n2=d;a.ti=b;d.bC=c;}
function Yn(a,b){return Cg(a.ti,b);}
var DP=G(0);
var A73=null;var A74=null;var A70=null;var A71=null;var A72=null;var A8k=null;var A8l=null;var A75=null;var A76=null;function AU7(){AU7=Bn(DP);AZ0();}
function AZ0(){A73=S(C(224));A74=S(C(360));A70=S(C(240));A71=S(C(346));A72=S(C(330));A8k=S(C(224));A8l=S(C(361));A75=S(C(362));A76=Dy(43,45,48);}
var X$=G(0);
var Yk=G();
function AXo(a,b,c){var d,e;d=b;e=c;b=new K;M(b);U(H(U(H(b,C(363)),d),C(364)),e);CV(L(b));return d+e|0;}
var X_=G(0);
var Yi=G();
function AX6(a,b,c){var d,e;d=b;e=c;b=new K;M(b);EF(H(EF(H(b,C(365)),d),C(364)),e);CV(L(b));return d+e;}
var AE_=G();
var AIi=G(0);
function Vg(){B.call(this);this.om=null;}
var A8p=null;function Ta(){var a=new Vg();AIO(a);return a;}
function AIO(a){a.om=BM();}
function Es(a,b,c){Na(a,C$(b,c));}
function C$(b,c){return Xi(c,b);}
function H0(a,b,c){LH(a,b,c,null);}
function LH(a,b,c,d){Na(a,A4$(null,b,c,d));}
function Na(a,b){BB(a.om,b);}
function IY(a){return CS(Gp(a.om,A8p));}
function AIm(){A8p=Q(BC,0);}
var DT=G(0);
var A8e=null;var A8f=null;var A8b=null;var A8c=null;var A8d=null;var A8i=null;var A8j=null;var A8g=null;var A8h=null;function AY6(){AY6=Bn(DT);AZI();}
function AZI(){A8e=S(C(233));A8f=S(C(366));A8b=S(C(274));A8c=S(C(367));A8d=S(C(320));A8i=S(C(233));A8j=S(C(366));A8g=EX(118,121,122,128);A8h=Dy(63,66,68);}
var HW=G(0);
var Qc=G();
function A0z(a,b,c,d){var e;b=Bt();d=Cy(d);e=new K;M(e);H(H(U(H(e,C(368)),c),C(306)),d);Bk(b,L(e));}
var Qd=G();
function TX(){B.call(this);this.z_=null;}
function AZA(a,b){var c;c=a.z_.lO;c.e$=FX(b,US(c));}
function PT(){B.call(this);this.DA=null;}
function AN1(a,b){var c,d,e,f;c=b.data;b=Bt();d=Cy(c[0]);e=new K;M(e);H(H(e,C(260)),d);Bk(b,L(e));b=Bt();f=c[1];d=new K;M(d);H(H(d,C(369)),f);Bk(b,L(d));}
function PS(){B.call(this);this.EJ=null;}
function AMG(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bt();e=Cy(c[0]);f=new K;M(f);H(H(f,C(260)),e);Bk(d,L(f));g=EO(La(b,1));b=Bt();d=Cy(c[1]);if(g===null)c=C(23);else{c=new K;M(c);BX(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BX(c,C(37));BN(c,i[h]);h=h+1|0;}BX(c,C(38));c=L(c);}e=new K;M(e);H(H(H(H(e,C(370)),d),C(371)),c);Bk(b,L(e));}
function PP(){B.call(this);this.Cb=null;}
function ALT(a,b){ADB(a.Cb,b);}
function PN(){B.call(this);this.ES=null;}
function A2S(a,b){var c,d,e,f,g;c=b.data;d=Bt();e=Cy(c[0]);f=new K;M(f);H(H(f,C(260)),e);Bk(d,L(f));g=CQ(La(b,1));b=Bt();d=Cy(c[1]);c=AGB(g);e=new K;M(e);H(H(H(H(e,C(372)),d),C(373)),c);Bk(b,L(e));}
var AH0=G();
function UW(){B.call(this);this.tz=null;}
function AX7(a,b){var c;c=a.tz.l3;c.fJ=FX(b,AAc(c));}
function ACm(){B.call(this);this.DB=null;}
function AOZ(a,b){return 0;}
function AKK(){var a=this;B.call(a);a.kt=null;a.o3=null;a.gO=null;a.Fj=null;}
function ACe(a){var b=new AKK();A00(b,a);return b;}
function A00(a,b){var c,d,e;c=null;d=null;e=null;a.kt=c;a.o3=d;a.gO=b;a.Fj=e;}
function ACx(a){var b,c;b=a.gO;if(b===null)return C(21);c=AFN(b,C(374));return c==(-1)?a.gO:Dw(a.gO,c+1|0);}
function AWr(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BO(a.kt,c.kt)&&BO(a.o3,c.o3)&&BO(a.gO,c.gO)?1:0;}return 0;}
function I9(){var a=this;B.call(a);a.uf=null;a.ra=null;a.rP=null;a.AE=null;a.sT=null;a.lh=null;}
function A8H(a,b,c,d,e,f){var g=new I9();OH(g,a,b,c,d,e,f);return g;}
function OH(a,b,c,d,e,f,g){a.uf=b;a.ra=c;a.rP=d;a.AE=e;a.sT=f;a.lh=g;}
function Kt(){var a=this;B.call(a);a.rZ=null;a.pN=null;a.uO=null;}
function A8I(a,b,c){var d=new Kt();Ld(d,a,b,c);return d;}
function Ld(a,b,c,d){a.rZ=b;a.pN=c;a.uO=d;}
function Vm(a,b){return !b?a.pN:a.uO;}
function AII(){var a=this;B.call(a);a.jI=null;a.l9=null;a.oc=null;}
function AHK(a,b,c){var d=new AII();A11(d,a,b,c);return d;}
function A11(a,b,c,d){a.jI=b;a.l9=c;a.oc=d;}
function Ct(){CI.call(this);this.n0=null;}
var A8J=null;var A8K=null;var A8L=null;var A8M=null;var A8N=null;var A8O=null;var A8P=null;var A8Q=null;var A8R=null;var A8S=null;var A8T=null;var A8U=null;var A8V=null;var A8W=null;var A8X=null;var A7O=null;function AFm(){AFm=Bn(Ct);AYa();}
function Ea(a,b,c){var d=new Ct();ABs(d,a,b,c);return d;}
function A0_(a,b,c,d){var e=new Ct();AHj(e,a,b,c,d);return e;}
function ABs(a,b,c,d){AFm();DK(a,b,c);a.n0=JQ(d,null);}
function AHj(a,b,c,d,e){AFm();DK(a,b,c);a.n0=JQ(d,e);}
function AYa(){var b;b=new Ct;FN();ABs(b,C(335),0,A78);A8J=b;A8K=Ea(C(336),1,S(C(375)));A8L=Ea(C(338),2,S(C(376)));A8M=Ea(C(340),3,S(C(377)));A8N=Ea(C(342),4,S(C(375)));A8O=Ea(C(343),5,Dy(188,63,60));A8P=Ea(C(345),6,S(C(378)));A8Q=Ea(C(347),7,S(C(379)));A8R=Ea(C(349),8,S(C(380)));A8S=A0_(C(351),9,A78,Dy(52,65,52));A8T=A0_(C(352),10,S(C(381)),S(C(382)));A8U=Ea(C(353),11,S(C(383)));A8V=Ea(C(355),12,S(C(384)));A8W=Ea(C(357),13,A78);b=Ea(C(358),14,S(C(359)));A8X=b;A7O=I(Ct,[A8J,A8K,A8L,A8M,A8N,A8O,A8P,A8Q,A8R,A8S,
A8T,A8U,A8V,A8W,b]);}
var ALe=G();
function Kg(b,c){var d,e,f;if(c<=0)return C(21);d=B5(c);e=d.data;e[0]=AKA(D5(b,52));f=1;while(f<c){e[f]=AKA(D5(b,62));f=f+1|0;}return Ho(d);}
function AKA(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AFH=G();
function ALn(){var a=this;B.call(a);a.Jw=null;a.O1=null;a.IL=0;a.Py=0;}
var AEr=G(0);
function AKH(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BK,8);e=DM(8);f=B5(16);g=0;h=0;i=0;while(true){j=BL(i,b);if(j>0)break;k=j>=0?10:(c.bc(CZ(i))).mZ;if(k==10){d=AG0(EB(f,0,g),d,h);e=ACj(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=KQ(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AG0(EB(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bc(CZ(j))).mZ==10){e=ACj(1,e,h);i=j;}else e=ACj(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new ZI;d=AFc(d,h);if(m.length!=h)e=Os(e,h);c.ki=d;c.CC=e;return c;}
function AIH(b){var c,d;c=J(b);BD(b);d=new PG;d.t_=b;return AKH(c,d);}
var C4=G();
var AKb=G(C4);
var AKy=G(C4);
var AIX=G(C4);
var AI8=G(C4);
var AKN=G(C4);
function Vq(){B.call(this);this.sf=null;}
function APz(a){var b;b=a.sf;Bk(Bt(),b);}
var HG=G(CI);
var A8Y=null;var A7o=null;var A8Z=null;function AQI(){AQI=Bn(HG);AW7();}
function A3b(a,b){var c=new HG();AE2(c,a,b);return c;}
function AE2(a,b,c){AQI();DK(a,b,c);}
function AW7(){var b;A8Y=A3b(C(385),0);b=A3b(C(386),1);A7o=b;A8Z=I(HG,[A8Y,b]);}
function PG(){B.call(this);this.t_=null;}
function AVm(a,b){return PF(P(a.t_,b.bp));}
function ZI(){var a=this;B.call(a);a.ki=null;a.CC=null;}
var AIE=G();
function Cg(b,c){return C0(b*c);}
function Gs(){var a=this;B.call(a);a.hb=0;a.nF=null;}
var AFy=G();
function TA(){var a=this;B.call(a);a.rv=null;a.uj=null;a.AI=null;}
var AIK=G(0);
function AHY(b){if(b===null)return C(180);if(!DB(b,C(387))&&!DB(b,C(388))&&!DB(b,C(389))&&!DB(b,C(390))&&!DB(b,C(391))&&!DB(b,C(392))){if(DB(b,C(393)))return C(191);if(DB(b,C(394)))return C(206);if(DB(b,C(395)))return C(201);if(!DB(b,C(396))&&!DB(b,C(397)))return C(180);return C(398);}return C(207);}
function AIf(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(J6(b)){case -1655966961:if(!Bj(b,C(201)))break a;c=4;break a;case 3401:if(!Bj(b,C(206)))break a;c=3;break a;case 98723:if(!Bj(b,C(207)))break a;c=2;break a;case 3213227:if(!Bj(b,C(398)))break a;c=5;break a;case 3254818:if(!Bj(b,C(191)))break a;c=1;break a;case 3556653:if(!Bj(b,C(180)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=En();e
=new K;M(e);H(H(e,C(399)),b);Bk(d,L(e));c=0;break b;}c=0;}return c;}
function ABh(){B.call(this);this.qK=null;}
function APE(a,b,c,d){return LU(a.qK,b,c,d);}
function V$(){B.call(this);this.w1=null;}
function A2B(a,b,c){return Hb(a.w1,b,c);}
function V9(){B.call(this);this.yK=null;}
function AQf(a){var b,c;b=a.yK;c=new ACg;c.vO=b;return c;}
function V_(){var a=this;B.call(a);a.DF=null;a.DG=null;a.DH=null;}
function XL(){B.call(this);this.ku=null;}
function A3h(a,b){var c,d,e,f,g;c=a.ku;d=c.my;if(d!==null){e=b.k;f=e.a-d.a|0;g=e.b-d.b|0;e=c.kz;e.a=E6(0,e.a+f|0,c.gX.a-c.jV.a|0);c=a.ku;d=c.kz;d.b=E6(0,d.b+g|0,c.gX.b-c.jV.b|0);}a.ku.my=b.k;return 1;}
var AFF=G();
function L3(){return "clipboard" in $rt_globals.navigator?1:0;}
function AHd(){var a=this;B.call(a);a.cR=null;a.cg=null;a.kA=null;a.kR=null;a.n4=null;a.j3=null;}
function Nu(a){var b=new AHd();A0u(b,a);return b;}
function A0u(a,b){a.cg=BM();a.j3=A8q;a.cR=b;Ba(b.dw,a);}
function Gi(a,b,c){a.kA=c;a.n4=b;b=B7(a.cg);while(B_(b)){JN(Ca(b),a.n4);}}
function Js(a,b,c,d){a.j3=d;Sg(a,b,c);}
function Sg(a,b,c){var d,e;d=a.cR;e=d.bO;if(Bc(e.a,e.b)&&d.cf!==0.0){if(a.kA!==null&&!Jy(a)){a.kR=Fn(a.cR,a.kA);d=Vs(a,b,c,null,null);b=new R8;b.t5=a;d.kW=b;FQ(a.cR,a);return;}b=new BU;Y(b);N(b);}c=new C_;Bm(c,C(400));N(c);}
function Mr(a){if(Jy(a)){ABC(a.cR,a);ABt(a,null);a.j3.f();a.j3=A8q;}}
function Vs(a,b,c,d,e){var f,g,h;f=AJO();AEf(f);Nr(f,c.cp());JN(f,a.n4);JL(f,a.kR,a.cR);if(d===null)g=b.a;else{g=b.a;g=a.cR.bO.a<((g+(EA(d)).a|0)+(EA(f)).a|0)?g-(EA(f)).a|0:(g+(EA(d)).a|0)-d.f8|0;}h=b.b;b=a.cR.bO;Nl(f,Bd(0,Be(g,b.a-(EA(f)).a|0)),Bd(0,Be(h,b.b-(EA(f)).b|0)));b=new AB7;b.vD=a;b.vA=f;b.vB=e;f.o8=b;BB(a.cg,f);return f;}
function A2Z(a,b,c){var d;a.kR=Fn(a.cR,a.kA);d=B7(a.cg);while(B_(d)){JL(Ca(d),a.kR,a.cR);}}
function AEx(a){var b,c;if(EC(a.cg))return;B$(a.cR.bH,1);b=0;while(true){c=a.cg;if(b>=c.q)break;Mh(BH(c,b),a.cR);b=b+1|0;}}
function AQc(a,b){var c;if(!Jy(a))return 0;a:{switch(b.bm){case 27:Mr(a);c=1;break a;default:}c=0;}return c;}
function ABt(a,b){var c,d;c=a.cg.q-1|0;a:{while(true){if(c<0)break a;d=BH(a.cg,c);if(b===d)break;EL(a.cg,c);MY(d);c=c+(-1)|0;}}}
function Jy(a){return a.cg.q<=0?0:1;}
function AR5(a){var b,c;Sh(a.cR.dw,a);ABC(a.cR,a);b=a.cg;c=B7(b);while(B_(c)){MY(Ca(c));}Iw(b);}
function Xc(){B.call(this);this.x1=null;}
function APZ(a,b){Ms(a.x1,b);}
function U8(){B.call(this);this.zE=null;}
function A2D(a,b){var c,d,e,f;c=a.zE;if(c.gC!=3&&c.fe!=3){b=b.data;c.gW=3;d=CQ(b[0]);e=EO(b[1]);Oa(c.h,d,e);if(c.fS){b=E1(c);f=JT(E3(),c.i3);c=new K;M(c);H(HH(H(H(c,b),C(401)),f),C(199));$rt_globals.console.info($rt_ustr(L(c)));}}}
function Q8(){B.call(this);this.zj=null;}
function AVR(a,b){var c,d,e,f,g,h;c=a.zj;if(c.fe!=3){d=b.data;c.gC=3;if((CQ(d[2])).data[0]!=1)Ms(c,b);else{e=CQ(d[0]);f=EO(d[1]);g=c.gW!=3?0:1;RA(c.h,e,f,g);if(c.fS){b=E1(c);h=JT(E3(),c.i3);c=new K;M(c);H(HH(H(H(c,b),C(402)),h),C(199));$rt_globals.console.info($rt_ustr(L(c)));}}}}
function PV(){B.call(this);this.kj=null;}
function AVb(a){return a.kj;}
var AJ9=G(0);
var LY=G(0);
function Rb(){B.call(this);this.ur=null;}
function AWa(a,b){return Lj(a.ur,b);}
function Pw(){B.call(this);this.AM=null;}
function A1R(a,b){var c,d;c=a.AM;d=b.bp;return PF(c.charCodeAt(d)&65535);}
var AGD=G();
function AI5(b,c,d,e,f,g){g.a=c.a;g.b=f;Bs(b,d.a,d.b,g,e);Bs(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bs(b,d.a,d.b+f|0,g,e);Bs(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AKg(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bs(b,j,k,i,h);Bs(b,j,k,i,h);Bs(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bs(b,l,j,i,h);Bs(b,l,j,i,h);Bs(b,l+g|0,j+g|0,i,h);}
function QQ(){var a=this;B.call(a);a.cS=null;a.qj=null;a.fu=null;a.eg=0;a.cv=0;a.je=null;a.jZ=null;a.hz=0;a.w8=0;}
function Pt(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.eg;i=Bc(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}EP(c);j=d+(-1)|0;b=Dm(d);d=Bc(j,a.cv)%a.fu.b|0;GQ(a,c,b,a.hz,g);JS(a.cS,c,0,d);if(!(j%a.eg|0))break;d=j;}}else{EP(b);k=a.eg-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GQ(a,b,Dm(j),Bc(a.cv,k)+a.hz|0,g);k=k+(-1)|0;j=h;}CM(a.cS,b);j=Bd(i,e);}return j;}k=a.eg;h=Bc(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EP(c);b=Dm((d+f|0)+1|0);j=d
+1|0;d=Bc(d,a.cv)%a.fu.b|0;GQ(a,c,b,a.hz,g);JS(a.cS,c,0,d);if(!(j%a.eg|0))break;d=j;}}else{EP(b);d=0;while(d<a.eg){h=h+1|0;GQ(a,b,Dm((h>e?h-f|0:h)+f|0),Bc(a.cv,d)+a.hz|0,g);d=d+1|0;}CM(a.cS,b);j=Be(i,e);}return j;}
function V8(b,c,d,e){c=c.data;return d<c.length&&c[d]?J8(b.d8,b,c[d]):e.k$;}
function Np(a,b,c,d,e,f){DJ(b,a.qj.a+d.a|0,c+d.b|0,a.je,a.jZ,a.cS,e,f,a.w8);}
function GQ(a,b,c,d,e){BZ(b,c,a.fu.a-20.0*e,d);}
var AEu=G();
function Gk(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AEX(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Ud(){var a=this;B.call(a);a.qa=null;a.qb=null;a.ir=null;}
function A5o(a,b,c){var d=new Ud();AGc(d,a,b,c);return d;}
function AGc(a,b,c,d){a.qa=b;a.qb=c;a.ir=d;}
function GO(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.ir.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.h6:i.h7;k=!c?i.og:i.oh;l=BL(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function Ma(){var a=this;B.call(a);a.h7=0;a.oh=0;a.h6=0;a.og=0;a.oZ=0;}
function Nq(a,b,c,d,e){var f=new Ma();A1b(f,a,b,c,d,e);return f;}
function A1b(a,b,c,d,e,f){a.h7=b;a.oh=c;a.h6=d;a.og=e;a.oZ=f;}
var SA=G(0);
var A7u=null;function AKo(){A7u=new Rw;}
function ACs(){var a=this;B.call(a);a.sV=null;a.sW=null;}
function AWb(a,b){var c,d,e;c=a.sV;d=a.sW;c=c.fA.em.u;e=c.a;b=b.k;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Cn(d,b);}
var Gf=G(I$);
var ADD=G(FE);
function ACP(){B.call(this);this.zy=null;}
function AUp(a,b){var c,d;c=a.zy;VN(c,FD(c,b.k));b=Bi(c);d=c.d;N6(b,d.w,d.A);H7(c);}
function Uo(){B.call(this);this.xI=null;}
function A2c(a,b){var c,d;c=a.xI;d=c.ef+1|0;c.ef=d;c=new K;M(c);H(H(U(c,d),C(403)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function VT(){B.call(this);this.xT=null;}
function A0P(a){var b,c;b=a.xT;c=new K;M(c);H(H(H(c,C(404)),b),C(405));$rt_globals.console.info($rt_ustr(L(c)));}
function Fl(){var a=this;B.call(a);a.cy=null;a.kk=null;a.hk=null;}
function N$(a,b,c,d){a.cy=b;a.hk=c;a.kk=d;}
function Pc(a,b,c){return Tm(a,b,Nc(BF(a)),c);}
function Tm(a,b,c,d){var e,f,g,h,i,j,k;e=A2C(a.cy.bZ,b);EG(e,a.hk.cI);DL(e,c);b=new WB;b.v4=a;b.v5=e;Tr(e,b);b=new WA;b.wD=a;e.wS=b;b=e.bb.bO;f=ACJ(e);g=Cs(e.bb,5.0);h=Cs(e.bb,d);i=h?h+f|0:0;c=BG(g+h|0,(g+i|0)+f|0);j=new Bg;k=b.a;g=g*2|0;QN(j,(k-g|0)-h|0,((b.b-f|0)-g|0)-i|0);Et(e,c,j);return e;}
function AIt(a,b){var c,d,e;c=a.qg(b);if(c!==null){d=a.cy;e=a.hk;Jf(d,e.cI,e.hy,b,c);}return c===null?0:1;}
var K7=G(0);
function AMD(a,b,c){LB(b);}
function AK0(a,b){var c;c=new RR;c.up=a;c.uq=b;return c;}
function LO(){var a=this;Fl.call(a);a.kK=null;a.dn=null;a.xe=null;a.iz=null;a.fE=null;}
function A80(a,b,c){var d=new LO();ADf(d,a,b,c);return d;}
function ADf(a,b,c,d){var e,f;N$(a,b,c,d);a.iz=JZ();a.fE=JZ();e=new Q1;E2(e);e.jc=K3(b);d=TW(b.bZ);e.gq=d;e.kQ=GH(d,b.bZ);d=new PH;E2(d);f=new B2;AO$();AKk(f,A7q);d.A4=f;e.oK=d;d=Ie(e.jc);e.gS=d;e.Fa=a;MD(e,I(CD,[e.kQ,e.oK,d]));e.CM=E5(1);a.dn=e;U$(e,c);f=AKx(C(406),0);IV(f);c=new AAK;c.r1=a;f.dW=c;ER(a.dn.gq,f);c=Tm(a,a.dn,C(407),0.0);a.kK=c;Ej(b,c);}
function AWd(a,b){var c,d,e,f,g,h,i;if(B1(a.dn.gS,b)){c=a.dn;d=c.jc;c=c.gS;e=a.kk;f=a.cy;BD(f);g=new SV;g.ry=f;return Z0(L7(d,c,e,a,c,g),b);}h=Q(BC,1);i=h.data;b=new BC;c=new SU;c.tw=a;CE(b,c,C(408));i[0]=b;return CS(h);}
function ADG(a){var b,c;b=a.cy.bZ.es;c=new Ph;c.zw=a;Jd(b,c);}
function AYv(a){a.kK=null;a.dn=null;a.iz=null;a.fE=null;}
function AWZ(a,b){a.hk=b;EG(a.kK,b.cI);U$(a.dn,b);}
function AWX(a,b){var c,d,e;c=b.hJ;d=E9(c);a.xe=d;e=Cx(a.iz,d);if(e!==null)Q2(a,e);else{b=Bt();e=new K;M(e);H(H(e,C(409)),d);Bk(b,L(e));if(Ht(a.fE,d)){b=new K;M(b);H(H(b,C(410)),d);$rt_globals.console.info($rt_ustr(L(b)));}else{DU(a.fE,d,d);b=new Uf;b.rN=a;b.rM=d;e=new Ue;e.AV=a;e.AW=d;U_(c,b,e);}}}
function Q2(a,b){HX(a.dn.gS,b);b=a.dn;FQ(b.jc.b$.bZ,b.gS);}
function ASQ(a,b){var c;ADJ(b);if(Jo(b)>0)EJ(a.dn.gq);c=b.gk.data;if(c.length==1&&!b.gR.data.length)c[0].dW.f();}
function AZO(a,b){if(Jo(b)>0)EJ(a.dn.gq);Lp(b);}
function AZk(a,b,c){if(AHY(c)!==C(180))QT(b);else LB(b);}
var ADg=G();
function AUa(a){return E5(1);}
function Zj(){var a=this;Fl.call(a);a.dP=null;a.oS=null;a.p1=null;}
function AMR(a){var b;a.dP=null;b=null;a.p1=b;a.oS=b;}
function AXQ(a,b){var c,d,e,f;if(B1(a.dP.dX,b))return Z3(a,1,C(271));if(B1(a.dP.dU,b))return Z3(a,0,C(272));c=Q(BC,2);d=c.data;b=new BC;e=new XG;e.zT=a;CE(b,e,C(271));d[0]=b;b=new BC;f=new XH;f.r9=a;CE(b,f,C(272));d[1]=b;return CS(c);}
function Z3(a,b,c){var d,e,f,g;d=Q(BC,1);e=d.data;f=new BC;g=new AAu;g.qy=a;g.qx=b;CE(f,g,c);e[0]=f;return CS(d);}
function H4(a,b){var c,d;c=a.cy.bZ.es;d=new ZS;d.yq=a;d.yp=b;Jd(c,d);}
var Vh=G();
function AUh(a){return ABc();}
var ADT=G(Er);
var A81=null;function Xn(b){var c;c=new K;M(c);return L(EF(c,b));}
function AGw(){A81=F($rt_floatcls());}
var Gw=G();
var A82=null;var A83=null;var A6u=null;var A6t=null;var A6s=null;function AJF(){A82=DX([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A83=AIL([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A6u=AIL([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);A6t=new ABN;A6s=new Ui;}
var JJ=G();
var A84=0;var A85=null;var A86=null;function AJ5(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.rj=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nb=0;c.m1=0;return;}if(f)d=e|8388608;else{d=e<<1;while(IK(Dg(Bp(d),Bp(8388608)),FM)){d=d<<1;f=f+(-1)|0;}}g=AKa(A86,f);if(g<0)g= -g|0;h=A86.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JG(d,A85.data[e],i);if(j<A84){while($rt_ucmp(j,A84)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A86.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JG(d,
A85.data[e],i);}e=d<<1;d=e+1|0;h=A85.data;f=g+1|0;k=h[f];l=i-1|0;m=JG(d,k,l);n=JG(e-1|0,A85.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bc($rt_udiv(j,o),o):q<0?Bc($rt_udiv(j,k),k)+k|0:Bc($rt_udiv((j+(k/2|0)|0),k),k);if(DG(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.nb=d;c.m1=g-50|0;}
function JG(b,c,d){return GR(Gd(Ci(Dg(Bp(b),D(4294967295, 0)),Dg(Bp(c),D(4294967295, 0))),32-d|0));}
function AJd(){A84=$rt_udiv((-1),10);A85=DX([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A86=DX([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Ui(){var a=this;B.call(a);a.nb=0;a.m1=0;a.rj=0;}
function Ov(){var a=this;B.call(a);a.Ez=null;a.wL=0.0;a.CX=0.0;a.gt=null;a.jq=null;a.n1=null;a.ga=0;}
function AK7(a,b){var c;if(b!==null){a.jq=b;return a;}c=new BU;Bm(c,C(411));N(c);}
function AGn(a,b){var c;if(b!==null){a.n1=b;return a;}c=new BU;Bm(c,C(411));N(c);}
function Y_(a,b,c,d){var e,f,g,$$je;e=a.ga;if(!(e==2&&!d)&&e!=3){a.ga=d?2:1;while(true){try{f=AHp(a,b,c);}catch($$e){$$je=EW($$e);if($$je instanceof Bu){g=$$je;N(AWA(g));}else{throw $$e;}}if(Ic(f))return f;if(I5(f)){if(d&&D8(b)){g=a.jq;Hk();if(g===A6X)return Eu(Ch(b));if(Ch(c)<=J(a.gt))return A60;FC(b,b.Z+Ch(b)|0);if(a.jq===A6Y)Nm(c,a.gt);}return f;}if(RD(f)){g=a.jq;Hk();if(g===A6X)return f;if(g===A6Y){if(Ch(c)<J(a.gt))return A60;Nm(c,a.gt);}FC(b,b.Z+Lc(f)|0);}else if(Ml(f)){g=a.n1;Hk();if(g===A6X)break;if(g
===A6Y){if(Ch(c)<J(a.gt))return A60;Nm(c,a.gt);}FC(b,b.Z+Lc(f)|0);}}return f;}b=new C_;Y(b);N(b);}
function AIN(a,b){var c,d,e,f;c=a.ga;if(c&&c!=3){b=new C_;Y(b);N(b);}if(!Ch(b))return AHS(0);if(a.ga)a.ga=0;d=AHS(Bd(8,Ch(b)*a.wL|0));while(true){e=Y_(a,b,d,0);if(I5(e))break;if(Ic(e))d=AAB(a,d);if(!NL(e))continue;Uh(e);}b=Y_(a,b,d,1);if(NL(b))Uh(b);while(true){f=a.ga;if(f!=3&&f!=2)break;a.ga=3;if(I5(A61)){d.eo=d.Z;d.Z=0;d.jM=(-1);return d;}d=AAB(a,d);}b=new C_;Y(b);N(b);}
function AAB(a,b){var c,d,e;c=b.iD;d=KQ(c,Bd(8,c.data.length*2|0));e=AJP(d,0,d.data.length);FC(e,b.Z);return e;}
function ACU(){var a=this;B.call(a);a.bq=0;a.bv=0;}
function DR(a,b){var c=new ACU();AJV(c,a,b);return c;}
function AJV(a,b,c){a.bq=b;a.bv=c;}
function ALU(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.bq==c.bq&&a.bv==c.bv?1:0;}return 0;}
function ASg(a){var b,c,d,e;b=Q(B,2).data;b[0]=CZ(a.bq);b[1]=CZ(a.bv);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bp)|0;d=d+1|0;}return c;}
function A0e(a,b){var c;b=b;c=BL(a.bq,b.bq);if(!c)c=BL(a.bv,b.bv);return c;}
var AFP=G(C4);
function UR(){B.call(this);this.Dv=null;}
function AMM(a){Bk(Bt(),C(412));}
var AEa=G(0);
var A8q=null;function AG$(){A8q=new Xm;}
function R4(){B.call(this);this.xJ=null;}
function AYZ(a){AB1(a.xJ);}
function Zv(){B.call(this);this.Ap=null;}
function ATg(a){Zf(a.Ap);}
function Zu(){B.call(this);this.r_=null;}
function AYJ(a){var b;b=a.r_;Xj(new M_,b.ik,b.E,new Wk);}
function Zw(){B.call(this);this.v$=null;}
function AZ2(a){var b;b=a.v$;ADf(new LO,b.E,b.ik,new Qk);}
function Y9(){B.call(this);this.BO=null;}
function AVz(a,b){var c,d;c=a.BO;d=c.ef+1|0;c.ef=d;c=b.iS;b=new K;M(b);H(H(U(b,d),C(413)),c);$rt_globals.console.info($rt_ustr(L(b)));}
var Rw=G();
function AZp(a,b){}
function Ft(){var a=this;CD.call(a);a.cL=null;a.U=null;a.fh=null;}
function A87(){var a=new Ft();LS(a);return a;}
function LS(a){E2(a);a.cL=new Bg;a.U=new Bg;}
function AXw(a,b){a.fh=b;}
function Th(a,b,c){X(a.cL,b,c);}
function Tw(a){var b;b=a.fh;if(b!==null)ACD(b);}
function AFO(a){var b;b=a.U;b.a=W3(a,b.a);b=a.U;b.b=AC0(a,b.b);}
function AGU(a,b){var c,d;c=a.U.a;d=W3(a,b);a.U.a=d;return c==d?0:1;}
function ALs(a,b){var c,d;c=a.U.b;d=AC0(a,b);a.U.b=d;return c==d?0:1;}
function AC0(a,b){return Bd(0,Be(b,a.cL.b-a.j.b|0));}
function W3(a,b){return Bd(0,Be(b,a.cL.a-a.j.a|0));}
function Rq(){var a=this;Ft.call(a);a.bV=null;a.d9=null;a.ic=null;a.AN=null;a.en=null;a.b6=null;a.e5=null;a.fR=null;a.dS=0;a.fO=0;a.BR=null;a.d7=0;a.eS=0;a.hH=0;a.f9=0;a.f0=0;a.cV=0;a.e6=null;a.kp=null;a.yX=null;a.iB=null;}
function A5G(a,b){var c=new Rq();AK4(c,a,b);return c;}
function AK4(a,b,c){LS(a);a.d9=Sv();a.ic=new Bg;a.b6=A88;a.e5=Q(Ka,0);a.d7=0;a.eS=0;a.hH=0;a.f9=0;a.f0=0;a.e6=AIv(0);a.iB=JZ();a.bV=b;a.kp=c;a.BR=c;Qx(a);}
function Qx(a){a.dS=Cg(2.0,a.bV.cf);}
function VE(a){return a.b6.data.length?0:1;}
function Xf(a,b){Tu(a);a.b6=b;}
function Tu(a){X(a.ic,0,0);}
function Wf(a,b,c){a.yX=b;a.AN=c;a.en=null;a.e6=null;a.fO=0;Tu(a);}
function A2a(a){a.fR=BV(a.fR,null);X(a.ic,0,0);EU(a.iB);a.e6=null;a.b6=A88;a.e5=null;a.d7=0;a.eS=0;a.hH=0;ABi(a.d9);a.kp=null;}
function AWN(a,b,c){Yz(a);Qx(a);a.en=null;a.e6=null;a.fO=0;}
function AU9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=Kq(a.bV);if(VE(a))return;K6(a);Cm(c,a.en);d=Ei(a);e=AIe(c,a.fO);f=Be(H8(a.j.b,d),a.b6.data.length)+30|0;g=a.yX.BG;h=a.e5.data;d=h.length;if(d<f){a:{i=a.f9;j=a.f0;k=a.b6;l=a.e6;m=a.iB;n=Q(Ka,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.g1!==c){ACI(l,q,m);o[f]=MR(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=MR(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=MR(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ACI(l,c,m);h[f]=null;}f=f+1|0;}a.e5=n;Cn(a.ic,MQ(a.e6));YM(a,a.bV.bH);}a.f9=Be((a.U.b+a.dS|0)/(Ei(a)+a.dS|0)|0,a.b6.data.length-1|0);a.f0=Be((((a.U.b+a.d9.t.b|0)-1|0)+a.dS|0)/(Ei(a)+a.dS|0)|0,a.b6.data.length-1|0);if(!a.e5.data.length)return;AH_(a,e);ACz(a,b);q=g.AE;c=a.i;Bs(b,c.a,c.b,a.j,q);c=a.d9.u;i=c.a;j=c.b;p=Cs(a.bV,2.0);s=a.bV.d1;t=a.f9;u=i+p|0;while(t<=a.f0){l=X9(a,t);d=Bc(t,Ei(a));v
=t+1|0;w=d+Bc(v,a.dS)|0;x=u+a.d7|0;y=x+a.eS|0;z=a.cV!=t?0:1;m=!z?q:g.sT;ba=!z?g.uf:g.lh;bb=!z?g.ra:g.lh;bc=!z?g.rP:g.lh;bd=(j+w|0)-a.U.b|0;DJ(b,u,bd,l.jx,l.ty,a.fR,ba,m,a.bV.cB);DJ(b,x,bd,l.j2,l.lf,a.fR,bb,m,a.bV.cB);DJ(b,y,bd,l.jy,l.kP,a.fR,bc,m,a.bV.cB);d=l.jx.a;be=u+d|0;X(s,Bd(0,a.d7-d|0),l.jx.b);Bs(b,be,bd,s,m);d=u+a.d7|0;f=l.j2.a;bf=d+f|0;X(s,Bd(0,a.eS-f|0),l.j2.b);Bs(b,bf,bd,s,m);d=l.jy.a;bg=y+d|0;X(s,Bd(0,(((a.d9.t.a-d|0)-a.eS|0)-a.d7|0)-p|0),l.jy.b);Bs(b,bg,bd,s,m);bh=(i+a.j.a|0)-p|0;X(s,p,Ei(a)+a.dS
|0);Bs(b,bh,bd,s,q);t=v;}Gc(b);}
function AH_(a,b){var c,d,e,f,g,h;c=0;d=a.f9;while(d<=a.f0){e=X9(a,d);if(!(e!==null&&e.g1===a.b6.data[d])){f=a.e5.data;g=a.b6;e=a.e6;h=a.iB;c=d%f.length|0;if(f[c]!==null)ACI(e,f[c],h);f[c]=MR(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cn(a.ic,MQ(a.e6));YM(a,a.bV.bH);}}
function YM(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.ic;c=D4(b,c.a+150|0,c.b,a.bV.cB);Cm(c,a.en);d=a.en;e=d.eq;f=e-(e+d.eK)/16.0;g=a.e5.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.g1.lx;k=d.lf;BZ(c,j,k.bn+a.fO,f+k.bs);j=d.g1.lP;d=d.kP;BZ(c,j,d.bn+a.fO,f+d.bs);}i=i+1|0;}a:{d=a.iB;if(d.c7>0){h=d.c0;i=0;b:while(true){g=d.b8.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cP;l=j.cU;k=k;l=l.mc;BZ(c,k,l.bn+a.fO,f+l.bs);j=j.cY;if(h!=d.c0)break b;}i=i+1|0;}b=new H$;Y(b);N(b);}}if(a.fR===null)a.fR=CX(b);CM(a.fR,
c);Ez(c);}
function X9(a,b){var c;c=a.e5.data;return c[b%c.length|0];}
function A0c(a,b){Cn(a.d9.t,b);}
function A1g(a,b){Cn(a.d9.u,b);}
function Yz(a){var b,c,d,e,f,g,h,i,j;b=Kq(a.bV);if(VE(a))return;K6(a);Cm(b,a.en);c=AIe(b,a.fO);d=a.b6.data;e=d.length;f=0;while(f<e){g=d[f];h=NA(c,g.hM);i=NA(c,g.lx);j=NA(c,g.lP);a.d7=Bd(a.d7,h);a.eS=Bd(a.eS,i);a.hH=Bd(a.hH,j);f=f+1|0;}}
function AP7(a,b){var c;c=AAo(a,b.k);if(c>=0)a.cV=c;return Fe(a.d9,a.i)&&GI(a.bV.cW)?1:0;}
function AOl(a,b,c){if(!Fe(a.d9,b.k)&&!Lh(a.d9)){b=a.BR;if(b!==null)b.f();}return null;}
function ASa(a,b,c,d){var e;if(d==1){e=AAo(a,b.k);if(e>=0)UK(a,a.b6.data[e]);}return 1;}
function UK(a,b){a.kp.f();b.t6.f();}
function AAo(a,b){var c,d,e;if(!a.e5.data.length)return (-1);c=Ei(a);d=(b.b-a.i.b|0)+a.U.b|0;e=a.dS;e=(d+e|0)/(c+e|0)|0;if(e<a.b6.data.length)return e;return (-1);}
function Ei(a){return E7(a.en);}
function K6(a){var b;if(a.en===null){b=Fn(a.bV,a.AN);a.en=b;a.e6=AIv(E7(b));a.fO=C0(a.en.p7);}}
function A1t(a,b){var c,d,e;a:{switch(b.bm){case 13:UK(a,a.b6.data[a.cV]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cV=a.f9;b=a.fh;c=a.U;Jl(b,c.a,c.b-(a.j.b/2|0)|0);return 0;case 34:a.cV=a.f0;b=a.fh;c=a.U;Jl(b,c.a,c.b+(a.j.b/2|0)|0);return 0;case 35:case 39:a.cV=a.b6.data.length-1|0;break a;case 36:case 37:a.cV=0;break a;case 38:d=a.cV;e=a.b6.data.length;a.cV=((d+e|0)
-1|0)%e|0;break a;case 40:a.cV=(a.cV+1|0)%a.b6.data.length|0;break a;default:break a;}a.kp.f();return 0;}e=a.cV;if(e<=a.f9)Jl(a.fh,a.U.a,Bc(e,Ei(a))+Bc(a.cV,a.dS)|0);else if(e>=a.f0)Jl(a.fh,a.U.a,(Bc(e+1|0,Ei(a))+Bc(a.cV+2|0,a.dS)|0)-a.j.b|0);return 0;}
var Vd=G();
function ATW(a){}
function AFl(){var a=this;CD.call(a);a.or=null;a.xU=null;a.AG=null;a.bP=null;a.dm=null;a.dE=null;a.um=null;a.rh=null;a.vG=0.0;a.pw=null;a.oV=null;}
function GH(a,b){var c=new AFl();AUS(c,a,b);return c;}
function AUS(a,b,c){var d;c=c.cW;E2(a);d=new P2;d.yW=a;a.xU=d;d=new P1;d.zH=a;a.AG=d;a.vG=10.0;a.bP=b;a.or=c;b.fh=a;}
function ASS(a){var b;b=a.bP;b.fh=null;a.bP=BV(b,null);}
function Jk(a,b,c){var d;a.oV=c;a.pw=b;d=a.dm;if(d!==null)H5(d,b,c);b=a.dE;if(b!==null)H5(b,a.pw,a.oV);}
function AOL(a,b,c,d){JU(a,b,c,d);JU(a.bP,b,c,d);if(d!==0.0)ACD(a);}
function Jl(a,b,c){Lf(a,b);LI(a,c);}
function ACD(a){var b;AFO(a.bP);b=FS(a)*3|0;if(ZF(a,b))T3(a);else a.dE=null;if(AD9(a,b))WV(a);else a.dm=null;}
function AD9(a,b){var c;c=a.j.b;return c>b&&a.bP.cL.b>c?1:0;}
function ZF(a,b){var c;c=a.j.a;return c>b&&a.bP.cL.a>c?1:0;}
function T3(a){var b,c,d,e,f,g;b=a.dE;if(b===null)b=Jc();a.dE=b;Pf(a,b);c=a.dE;b=a.bP;d=b.U.a;e=a.i;f=e.a;g=a.j;Rz(c,d,f,g.a,b.cL.a,e.b+g.b|0,FS(a));}
function WV(a){var b,c,d,e,f,g;b=a.dm;if(b===null)b=Jc();a.dm=b;Pf(a,b);c=a.dm;b=a.bP;d=b.U.b;e=a.i;f=e.b;g=a.j;Ku(c,d,f,g.b,b.cL.b,e.a+g.a|0,FS(a));}
function FS(a){return Dz(a,a.vG);}
function Pf(a,b){H5(b,a.pw,a.oV);}
function A0G(a,b){var c;a.bP.dx(b);if(!(a.dm===null&&a.dE===null)){B$(b,1);c=a.dm;if(c!==null)GV(c,b);c=a.dE;if(c!==null)GV(c,b);c=a.dm;if(c!==null)G0(c,b);c=a.dE;if(c!==null)G0(c,b);B$(b,0);}}
function TD(a,b){var c,d;a:{b:{c=a.dm;if(!(c!==null&&IN(c,b))){c=a.dE;if(c===null)break b;if(!IN(c,b))break b;}d=1;break a;}d=0;}return d;}
function ATc(a,b,c,d){return !TD(a,b.k)&&!a.bP.cA(b,c,d)?0:1;}
function Lf(a,b){var c;b=AGU(a.bP,b);if(ZF(a,FS(a)*3|0))T3(a);if(b){c=a.um;if(c!==null)c.f();}}
function LI(a,b){var c;if(AC2(a,b)){c=a.rh;if(c!==null)c.f();}}
function AC2(a,b){var c;c=ALs(a.bP,b);if(AD9(a,FS(a)*3|0))WV(a);return c;}
function ASU(a,b,c){var d,e;d=a.dm;if(d!==null){e=F6(d,b.k,a.xU,1);if(e!==null)return e;}d=a.dE;if(d!==null){e=F6(d,b.k,a.AG,0);if(e!==null)return e;}return a.bP.cn(b,c);}
function ARa(a,b,c){return TD(a,b.k)?1:0;}
function AQZ(a,b){var c,d,e;c=a.dm;d=c!==null&&Gb(c,b.k,a.or)?1:0;c=a.dE;e=c!==null&&Gb(c,b.k,a.or)?1:0;return !d&&!e&&!a.bP.bT(b)?0:1;}
function AW$(a,b,c,d){var e,f;if(!B1(a,b.k))return 0;e=Cg(d*0.5,a.bR);f=Cg(c*0.5,a.bR);if(b.bL){f=f+e|0;e=0;}if(a.dm!==null&&e)LI(a,a.bP.U.b+e|0);if(a.dE!==null&&f)Lf(a,a.bP.U.a+f|0);return 1;}
function AHU(a){var b,c;b=FS(a);c=a.bP.hW();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
var ADM=G();
function ANC(a,b){}
function ADO(){var a=this;B.call(a);a.uz=null;a.uA=null;}
function ALV(a,b){var c,d,e;c=a.uz;d=a.uA;b=Cy(b);e=new K;M(e);H(H(H(e,d),C(29)),b);DL(c,L(e));}
function Qe(){var a=this;Ft.call(a);a.mj=null;a.pL=null;a.yi=null;a.sc=0.0;}
function AT4(a){var b;b=Cg(20.0,a.bR);return BG(b,b);}
function A0i(a,b){Th(a,b.a*3|0,b.b*5|0);a.yi.g(b);}
function AUj(a,b){var c,d,e,f,g,h,i,j,k,l,m;AK$(a,b);ACz(a,b);c=Cg(30.0,a.bR);d=a.U;e=d.a;f=Bc(e/c|0,c);g=d.b;h=Bc(g/c|0,c);d=a.j;i=Bc(((e+d.a|0)-1|0)/c|0,c);e=Bc(((g+d.b|0)-1|0)/c|0,c);d=a.pL;d.b=c;d.a=c;a.mj.bC=1.0;while(h<=e){g=a.i.b-a.U.b|0;j=f;while(j<=i){k=a.i.a-a.U.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AKY(l);m=m+1|0;}Vp(AKz(l),0.75,a.sc,a.mj);Bs(b,k+j|0,g+h|0,a.pL,a.mj);j=j+c|0;}h=h+c|0;}Gc(b);}
function AQy(a,b,c){return A7u;}
function ADN(){var a=this;B.call(a);a.qO=null;a.qP=null;}
function AS7(a){var b,c;b=a.qO;c=a.qP;Is(b.E,c);J4(c);}
function Uv(){var a=this;CD.call(a);a.f$=null;a.hE=null;a.jJ=null;a.eB=null;a.kO=0.0;a.eL=0;a.il=0;a.d0=null;a.mK=null;}
function VG(a){var b;if(Oj(a))return 0;ACu(a);b=Cs(a.f$,a.kO);return E7(a.eB)+(b*2|0)|0;}
function RX(a){var b;b=a.j;return b.a&&b.b?0:1;}
function Oj(a){return a.hE!==null&&a.jJ!==null?0:1;}
function QF(a,b){a.j.b=b;}
function QK(a,b,c,d,e){var f,g;f=a.f$.d1;X(f,d,a.j.b);g=a.i;Bs(b,g.a+c|0,g.b,f,e);}
function ACu(a){if(a.eB===null)a.eB=Fn(a.f$,a.hE);}
function HV(){CD.call(this);this.cl=null;}
function MD(a,b){var c;if(a.cl===null){a.cl=b;return;}c=new Ef;Y(c);N(c);}
function AZs(a){var b,c,d;b=a.cl.data;c=b.length;d=0;while(d<c){b[d].bW();d=d+1|0;}}
function AQR(a,b){var c,d,e;c=a.cl.data;d=c.length;e=0;while(e<d){c[e].dx(b);e=e+1|0;}}
function AVj(a,b){var c,d,e,f;c=0;d=a.cl.data;e=d.length;f=0;while(f<e){c=c|d[f].cj(b);f=f+1|0;}return c;}
function ANB(a,b,c,d){JU(a,b,c,d);a.BS();}
function A1X(a,b,c,d){var e,f,g,h,i;e=0;f=a.cl.data;g=f.length;h=0;while(h<g){i=f[h];if(B1(i,b.k))e=e|i.cA(b,c,d);h=h+1|0;}return e;}
function ATe(a,b,c){var d,e,f,g,h;d=a.cl.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B1(g,b.k)){h=g.cn(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A17(a,b,c){var d,e,f,g,h;d=0;e=a.cl.data;f=e.length;g=0;while(g<f){h=e[g];if(B1(h,b.k))d=d|h.dC(b,c);g=g+1|0;}return d;}
function A2u(a,b){var c,d,e,f,g;c=0;d=a.cl.data;e=d.length;f=0;while(f<e){g=d[f];if(B1(g,b.k))c=c|g.bT(b);f=f+1|0;}return c;}
function AOe(a,b,c,d){var e,f,g,h,i;e=0;f=a.cl.data;g=f.length;h=0;while(h<g){i=f[h];if(B1(i,b.k))e=e|i.dz(b,c,d);h=h+1|0;}return e;}
function A2g(a){var b,c,d;b=a.cl.data;c=b.length;d=0;while(d<c){b[d].kd();d=d+1|0;}}
function Q1(){var a=this;HV.call(a);a.CM=null;a.Fa=null;a.jc=null;a.oK=null;a.kQ=null;a.gq=null;a.gS=null;}
function APu(a){var b,c,d,e;b=a.j.a/4|0;c=b+Dz(a,1.0)|0;d=AJ2(a.i);e=BG(b,a.j.b);a.cl.data[0].dA(d,e,a.bR);d.a=a.i.a+b|0;e.a=c-b|0;a.cl.data[1].dA(d,e,a.bR);d.a=a.i.a+c|0;e.a=a.j.a-c|0;a.cl.data[2].dA(d,e,a.bR);}
function U$(a,b){Kf(a.gq,b);JM(a.gq,a.kQ);GL(a.jc,b);FA(a.gS,b);}
function AXL(a){var b,c;b=AHg(a.gS);c=AHU(a.kQ);return BG((b.a+a.oK.j.a|0)+c.a|0,b.b);}
function Hm(){var a=this;B.call(a);a.dW=null;a.jf=null;a.oB=null;a.hl=null;a.jT=0;a.hC=0;a.hA=0;}
function A89(a,b){var c=new Hm();S6(c,a,b);return c;}
function S6(a,b,c){a.hl=XU(b);a.jT=c;a.hC=0;}
function GC(a){return (J1(a.hl,0)).v;}
function AEo(a){a.hC=60084;}
function Ja(a){return a.hC!=60084?0:1;}
function AFk(a){a.hC=60086;}
function AFu(a){a.hA=60035;}
function LB(a){a.hA=60027;}
function QT(a){a.hA=60137;}
function IV(a){a.hA=60151;}
function Dh(){Hm.call(this);this.fb=null;}
var A8$=null;var A8_=null;function AKx(a,b){var c=new Dh();Kd(c,a,b);return c;}
function Kd(a,b,c){S6(a,b,c);a.fb=A8$;}
function A2o(a){return GC(a);}
function AK6(a){var b,c,d;b=Q(Hm,AD4(a));c=b.data;if(Q6(a,b,0)==c.length)return b;d=new Bu;Y(d);N(d);}
function Jo(a){return a.fb.data.length;}
function AD4(a){var b,c,d,e;b=1;if(Ja(a)){c=a.fb.data;d=c.length;e=0;while(e<d){b=b+AD4(c[e])|0;e=e+1|0;}}return b;}
function OP(a){var b,c,d,e;b=1;c=a.fb.data;d=c.length;e=0;while(e<d){b=b+OP(c[e])|0;e=e+1|0;}return b;}
function Q6(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(Ja(a)){d=a.fb.data;c=d.length;f=0;while(f<c){e=Q6(d[f],b,e);f=f+1|0;}}return e;}
function N0(a){AEo(a);IV(a);}
function IG(a){AFk(a);AFu(a);}
function Ux(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=Ow(GC(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AGq(){A8$=Q(Dh,0);A8_=new AEe;}
function AAK(){B.call(this);this.r1=null;}
function ANN(a){ADG(a.r1);}
function Ii(){HV.call(this);this.eG=null;}
function P3(a,b){E2(a);a.eG=AV6(b);}
function AP4(a){var b,c,d,e;b=Cg(20.0,a.bR);c=(a.j.a-b|0)/2|0;d=AJ2(a.i);e=BG(c,a.j.b);a.cl.data[0].dA(d,e,a.bR);d.a=(a.i.a+a.j.a|0)-c|0;a.cl.data[1].dA(d,e,a.bR);e.a=(a.j.a-c|0)-c|0;d.a=a.i.a+c|0;a.cl.data[2].dA(d,e,a.bR);}
function AFU(){var a=this;Ii.call(a);a.dX=null;a.dU=null;a.kF=null;a.lT=null;a.vs=null;}
function A1r(a){var b=new AFU();AZz(b,a);return b;}
function AZz(a,b){var c,d;P3(a,b);a.dX=TW(b);a.dU=TW(b);a.kF=GH(a.dX,b);a.lT=GH(a.dU,b);c=AL7(a.kF,a.dX);d=AL7(a.lT,a.dU);Ok(a.eG,c,d);a.vs=AHu(c,d);MD(a,I(CD,[a.kF,a.lT,a.eG]));}
function AC5(a,b){a.eG.im=b;Kf(a.dX,b);JM(a.dX,a.kF);Kf(a.dU,b);JM(a.dU,a.lT);}
function AA7(a,b){a.vs.gY=b;a.eG.eu=b;}
function SJ(){B.call(this);this.s1=null;}
function AV1(a){H4(a.s1,1);}
function SI(){B.call(this);this.vg=null;}
function AUG(a){H4(a.vg,0);}
var AAd=G(Er);
var A9a=null;function Df(b,c){return Long_udiv(b, c);}
function AIp(b,c){return Long_urem(b, c);}
function DG(b,c){return Long_ucompare(b, c);}
function AJk(){A9a=F($rt_longcls());}
function ACg(){B.call(this);this.vO=null;}
function A2Q(a,b){DI(a.vO,b);}
function AD$(){B.call(this);this.Bv=null;}
function AYu(a){Zc(a.Bv);}
function XC(){B.call(this);this.yU=null;}
function AVF(a){var b;b=a.yU;Ej(b.E,YW(b));}
function ABF(){B.call(this);this.ob=null;}
var A88=null;function APj(){var a=new ABF();AE7(a);return a;}
function AE7(a){a.ob=BM();}
function Wl(a,b,c,d,e){var f;f=new Li;f.t6=e;f.lx=c;f.lP=d;f.hM=b;BB(a.ob,f);}
function ADe(a){return Gp(a.ob,A88);}
function AAI(b){return b===null?C(21):ACx(b);}
function AK5(){A88=Q(Li,0);}
function Ka(){var a=this;B.call(a);a.ty=null;a.lf=null;a.kP=null;a.jx=null;a.j2=null;a.jy=null;a.g1=null;}
function MR(b,c,d,e){var f,g,h;f=new Ka;f.jx=new Bg;f.j2=new Bg;f.jy=new Bg;f.g1=b;g=Cx(e,b.hM);if(g!==null)g.iQ=g.iQ+1|0;else{g=new ACO;h=KA(c,b.hM,d);g.iQ=1;g.mc=h;DU(e,b.hM,g);}e=g.mc;f.ty=e;X(f.jx,e.bf|0,e.bC|0);e=KA(c,b.lx,d);f.lf=e;X(f.j2,e.bf|0,e.bC|0);b=KA(c,b.lP,d);f.kP=b;X(f.jy,b.bf|0,b.bC|0);return f;}
function ACI(b,c,d){var e,f,g;e=c.g1.hM;f=Cx(d,e);g=f.iQ-1|0;f.iQ=g;if(!g){LA(d,e);I3(b,f.mc);}I3(b,c.lf);I3(b,c.kP);}
var OE=G(0);
var A79=null;var A7$=null;function AGd(){A79=EX(40,40,40,200);A7$=EX(43,43,43,128);}
function Lt(){var a=this;Ft.call(a);a.gl=null;a.ct=null;a.e4=null;a.hY=null;a.gu=null;a.lZ=null;a.mM=null;a.AS=0;a.rd=0;a.oz=null;a.gf=null;a.gg=null;a.g_=null;a.hP=null;a.hU=null;a.jo=null;a.gF=null;a.rS=0;a.kb=0;}
function ARG(a){Ox(a.hY);Yr(a.ct);OW(a);}
function OW(a){a.gf=BV(a.gf,null);a.gg=BV(a.gg,null);a.g_=BV(a.g_,null);a.hP=BV(a.hP,null);a.hU=BV(a.hU,null);a.jo=BV(a.jo,null);a.gF=BV(a.gF,null);}
function Xa(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.g_;break a;case 60084:c=a.gg;break a;case 60086:c=a.gf;break a;case 60136:c=a.gF;break a;case 60137:c=a.jo;break a;case 60151:c=a.hP;break a;default:c=null;break a;}c=a.hU;}return c;}
function Kf(a,b){var c,d;a.gu=b;c=BO(a.lZ,b.pH);d=BO(a.mM,b.oU);if(!(c&&d)){a.lZ=b.pH;a.mM=b.oU;if(a.bR!==0.0)SW(a);}}
function AMv(a,b,c){P0(a.ct,c);if(a.lZ!==null)SW(a);}
function SW(a){var b,c,d,e,f;S3(a.hY);b=a.ct;c=a.lZ;d=a.bR;e=a.gl.bH;f=b.g9;b.da=AJc(c.h_,c.gZ*d,c.j8,c.kn,f,e);Sq(a.ct,1.25,a.gl.bH);OW(a);b=Fn(a.gl,a.mM);a.gf=BV(a.gf,FH(a,60086,b));a.gg=BV(a.gg,FH(a,60084,b));a.g_=BV(a.g_,FH(a,60035,b));a.hP=BV(a.hP,FH(a,60151,b));a.hU=BV(a.hU,FH(a,60027,b));a.jo=BV(a.jo,FH(a,60137,b));a.gF=BV(a.gF,FH(a,60136,b));a.rS=Bd(Bd(Bd(Bd(BR(a.g_),BR(a.hP)),BR(a.hU)),BR(a.gF)),BR(a.gF));a.kb=Bd(BR(a.gg),BR(a.gf));Pq(a);}
function Pq(a){Th(a,a.cL.a,Bc(a.e4.fB.data.length,a.ct.d$));Tw(a);}
function AY3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;c=a.gu.br.ej;d=a.i;Bs(b,d.a,d.b,a.j,c);BD(a.ct.da);e=a.ct.d$;f=a.e4.fB.data.length;if(!f)return;g=Be(f,H8(a.j.b,e)+7|0);h=a.hY;if(h.data.length<g)a.hY=Zq(g,h,a.ct,a.AS,a.rd,a.e4);NG(b,a.i,a.j);i=a.U.b;j=f-1|0;k=AGm(i,e,j);i=AGm((a.U.b+a.j.b|0)-1|0,e,j);a.AS=k;a.rd=i;l=a.j.a;m=Dz(a,4.0);n=Dz(a,1.0)+a.kb|0;o=Dz(a,3.0);p=Dz(a,5.0);q=Dz(a,1.0);r=0;s=a.i.a-a.U.a|0;t=Dz(a,1.0);d=a.fh;u=t+(d===null?0:FS(d))|0;while(k<=i){v=a.e4.fB.data[k];h
=a.hY.data;t=k%h.length|0;w=h[t];XF(w,v.hl,b,e,l,0,k,t);x=Bc(e,k)-a.U.b|0;y=null;z=m+Bc(n,v.jT)|0;ba=a.oz!==v?0:1;if(ba){X(a.gl.d1,a.j.a,e);d=a.i;Bs(b,d.a,d.b+x|0,a.gl.d1,a.gu.br.gr);}bb=Xa(a,v.hC);bc=Xa(a,v.hA);if(bb!==null){d=a.gu;bd=d.jO.data[0];AEg(a,b,bb,s+z|0,(a.i.b+x|0)-q|0,!ba?c:d.br.gr,bd.g7);}if(bc!==null){d=a.gu;bd=d.jO.data[0];AEg(a,b,bc,((s+z|0)+a.kb|0)+o|0,(a.i.b+x|0)-q|0,!ba?c:d.br.gr,bd.g7);}be=FK(v.hl);bf=(((z+a.kb|0)+o|0)+a.rS|0)+p|0;r=Bd(r,(bf+be|0)+u|0);Qi(w,a.i.b+x|0,s+bf|0,b,l,e,0,a.gu,
null,null,null,ba,0,y);k=k+1|0;}d=a.cL;if(d.a!=r){d.a=r;Tw(a);}Gc(b);}
function AEg(a,b,c,d,e,f,g){Cp(a.ct.jt,0.0,0.0,BR(c),CO(c));Cn(a.ct.ih,c.eV);Ha(a.ct,b,c,d,e,g,f);}
function A1J(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.ct.d$;f=((b.k.b-a.i.b|0)+a.U.b|0)/e|0;if(f>=0){g=a.e4.fB.data;if(f<g.length){h=g[f];if(!WE(a,b,f)){b=h.oB;if(b!==null)b.f();}}}}return 1;}
function ANo(a,b,c){var d,e,f,g;d=a.ct.d$;e=((b.k.b-a.i.b|0)+a.U.b|0)/d|0;if(!c&&e>=0){f=a.e4.fB.data;if(e<f.length){g=f[e];if(WE(a,b,e)){b=g.jf;if(b!==null)b.f();}else{a.oz=g;b=g.dW;if(b!==null)b.f();}}}return A7u;}
function WE(a,b,c){var d,e,f,g,h,i,j;d=a.e4.fB.data[c];e=Dz(a,4.0);f=Dz(a,1.0);g=Bd(BR(a.gg),BR(a.gf));h=e+Bc(f+g|0,d.jT)|0;i=(a.i.a-a.U.a|0)+h|0;j=i+g|0;c=b.k.a;return i<=c&&c<j?1:0;}
function FH(a,b,c){var d,e,f;d=a.gl.bH;e=NI(b);f=a.ct;return ADw(d,e,c,1,f.d$,f.iP);}
function AGm(b,c,d){return Be(b/c|0,d);}
function AJw(){Lt.call(this);this.rr=null;}
function TW(a){var b=new AJw();ATo(b,a);return b;}
function ATo(a,b){LS(a);a.e4=AME(Q(Hm,0));a.hY=Q(Fx,0);a.gl=b;a.ct=APY(b.cB);}
function EJ(a){a.e4=AME(AK6(a.rr));if(a.bR!==0.0)Pq(a);}
function ER(a,b){a.rr=b;EJ(a);}
function JM(a,b){var c;c=a.gu.br;Jk(b,c.lI,c.lN);return b;}
function PH(){CD.call(this);this.A4=null;}
function AL1(a,b){var c;c=a.i;Bs(b,c.a,c.b,a.j,a.A4);}
function AF_(){var a=this;B.call(a);a.nB=null;a.f2=null;}
function AL7(a,b){var c=new AF_();ANb(c,a,b);return c;}
function ANb(a,b,c){a.nB=b;a.f2=c;}
function AS2(a){return a.f2.U.b/MG(a)|0;}
function A1U(a){var b;b=a.f2;return H8((b.U.b+b.j.b|0)-1|0,MG(a));}
function ATS(a,b){var c;b=Bc(b,MG(a));c=a.f2;return (b+c.i.b|0)-c.U.b|0;}
function APT(a){return a.f2.i;}
function AVq(a){return a.f2.j;}
function AQq(a,b,c){var d;d=a.nB;d.um=b;d.rh=c;}
function AZg(a,b){return AC2(a.nB,b);}
function MG(a){return a.f2.ct.d$;}
function ABN(){var a=this;B.call(a);a.nA=FM;a.mN=0;a.q9=0;}
var Xm=G();
function AT9(a){}
function SK(){var a=this;B.call(a);a.Be=null;a.Bb=null;a.Bc=null;}
function APX(a){var b,c,d,e,f;b=a.Be;c=a.Bb;d=a.Bc;e=Bt();f=new K;M(f);b=H(f,b);BN(b,9);b=H(b,c);BN(b,9);H(b,d);Bk(e,L(f));}
function P2(){B.call(this);this.yW=null;}
function AL6(a,b){var c;c=a.yW;LI(c,FX(b,c.bP.cL.b-c.j.b|0));}
function P1(){B.call(this);this.zH=null;}
function AMm(a,b){var c;c=a.zH;Lf(c,FX(b,c.bP.cL.a-c.j.a|0));}
var TM=G(0);
var A7q=null;function AO$(){AO$=Bn(TM);ATY();}
function ATY(){A7q=S(C(233));}
var AEe=G();
function ASw(a,b,c){b=b;c=c;return Ow(GC(b),GC(c));}
function Li(){var a=this;B.call(a);a.t6=null;a.lx=null;a.lP=null;a.hM=null;}
function ALb(){GZ.call(this);this.fB=null;}
function AME(a){var b=new ALb();AN2(b,a);return b;}
function AN2(a,b){a.fB=b;}
function A27(a,b){return a.fB.data[b].hl;}
var C_=G(Bu);
var AKm=G(FE);
function AWA(a){var b=new AKm();AQE(b,a);return b;}
function AQE(a,b){a.kM=1;a.k7=1;a.nr=b;}
function ALh(){var a=this;B.call(a);a.oL=null;a.mW=null;a.eQ=null;a.mJ=null;a.bx=null;a.pB=null;a.nJ=null;a.fZ=null;a.gP=null;a.jK=null;}
function AUg(a,b){var c=new ALh();AYY(c,a,b);return c;}
function AYY(a,b,c){var d,e,f;a.eQ=b;a.mJ=c;a.bx=AVZ();b=new K;M(b);a.jK=b;a.fZ=JZ();b=new SM;d=AKW(16);b.gI=0;b.d6=Q(JH,d);b.xW=0.75;UA(b);a.gP=b;b=new UP;c=a.bx;e=a.jK;f=a.fZ;b.dD=c;b.mx=e;b.s8=f;a.pB=b;b=new Uw;b.cZ=c;b.ni=e;b.sh=f;a.nJ=b;}
function Xb(a){var b,c,d,e,f,g,h;a:{b=Ne(a.eQ.fd);c=b.jm;if(c.c7>0){d=c.c0;e=0;b:while(true){f=b.jm.b8.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cP;if(Ht(a.fZ,g))Cx(a.fZ,g);else{h=a.fZ;DU(h,g,CZ(h.c7));}c=c.cY;if(d!=b.jm.c0)break b;}e=e+1|0;}b=new H$;Y(b);N(b);}}b=a.eQ.fG;if(b!==null)ZN(a,b);Bq(a.bx,a.eQ.fd.c7);b=Sy(Ne(a.eQ.fd));while(Fu(b)){c=Qn(b);G2(a.bx,a.jK.M,J(c));BX(a.jK,c);}b=Sy(Ne(a.eQ.fd));while(Fu(b)){c=Qn(b);c=Cx(a.eQ.fd,c);Bq(a.bx,c.q);c=B7(c);while(B_(c)){g=Ca(c);g=Cx(a.fZ,g);Bq(a.bx,
g.bp);}}if(a.eQ.fG===null)Bq(a.bx,(-1));else{Bq(a.bx,a.gP.gI);AAv(a,a.eQ.fG);}if(a.mJ===null)Bq(a.bx,(-1));else{Bq(a.bx,1);AEI(a.mJ,a.bx,a.gP);}a.oL=Q3(a.bx);a.mW=Gt(L(a.jK));}
function ZN(a,b){var c,d,e,f,g,h;if(ACT(a.gP,b))Ou(a.gP,b);else{c=a.gP;d=CZ(c.gI);if(b===null){e=Ze(c);if(e===null){c.mb=c.mb+1|0;e=ACX(c,null,0,0);f=c.gI+1|0;c.gI=f;if(f>c.pC)W7(c);}}else{g=MI(b);h=g&(c.d6.data.length-1|0);e=Xg(c,b,h,g);if(e===null){c.mb=c.mb+1|0;e=ACX(c,b,h,g);f=c.gI+1|0;c.gI=f;if(f>c.pC)W7(c);}}e.cU=d;}b=b.cN;if(b===null)return;c=new VW;c.sk=a;b.fn(c);}
function AAv(a,b){var c,d,e,f;c=(Ou(a.gP,b)).bp;Bq(a.bx,c);if(b instanceof NQ)Bq(a.bx,(-1));else if(!(b instanceof Lk))Bq(a.bx,0);else Bq(a.bx,1);d=a.pB;Bq(d.dD,b.e1.c2());e=b.e1;f=new Wj;f.v_=d;e.fn(f);d=a.nJ;Bq(d.cZ,b.fH.c2());e=b.fH;f=new Ua;f.uK=d;e.fn(f);d=b.lq;Bq(a.bx,d.c2());e=new U3;e.A2=a;d.fn(e);d=b.hQ;Bq(a.bx,d.c2());d=d.b9();while(d.cE()){e=d.b_();Pn(a.pB,e.ls);Hc(a.nJ,e.kU);Bq(a.bx,e.rX);}d=b.uG;if(d===null)Bq(a.bx,(-1));else Bq(a.bx,(Cx(a.fZ,d)).bp);b=b.cN;Bq(a.bx,b.c2());d=new Qj;d.qH=a;b.fn(d);}
function OV(){B.call(this);this.AA=null;}
function AUE(a,b){var c,d,e,f,g,h,i,j;c=a.AA;if(c.fS){d=E1(c);e=new K;M(e);H(H(e,d),C(414));$rt_globals.console.info($rt_ustr(L(e)));}b=b.data;f=CQ(b[0]);g=EO(b[1]);h=(CQ(b[2])).data[0];if(c.h.cr==h){i=null;j=null;if(b.length>=5){i=CQ(b[3]);j=EO(b[4]);}b=D_(c);if(!Bj(b,C(201))&&!Bj(b,C(398))?0:1)Oa(c.h,f,g);else{Wt(c.h,f,g,i,j);EU(c.h.dG);EU(c.h.dQ);Ni(c.h);KN(c.h);Oq(c);}}}
function ACN(){B.call(this);this.sr=null;}
function AZb(a,b){var c,d,e,f;c=a.sr;if(c.fe!=3){b=b.data;d=CQ(b[0]);e=EO(b[1]);Wt(c.h,d,e,null,null);if(c.fS){b=E1(c);f=JT(E3(),c.Av);c=new K;M(c);H(HH(H(H(c,b),C(415)),f),C(199));$rt_globals.console.info($rt_ustr(L(c)));}}}
var Om=G(BI);
function Sl(){var a=this;B.call(a);a.v2=null;a.v3=null;a.v1=0;}
function AWW(a,b){var c,d,e;c=a.v2;d=a.v3;e=a.v1;d.g(Ve(c,(b.k.a+e|0)-c.e9.a|0));}
function Sk(){var a=this;B.call(a);a.rV=null;a.rT=null;a.rU=0;}
function A1_(a,b){var c,d,e;c=a.rV;d=a.rT;e=a.rU;d.g(QM(c,(b.k.b+e|0)-c.e9.b|0));}
var Fj=G(0);
function Xh(){var a=this;B.call(a);a.jY=0;a.qd=0;a.lE=0;a.hV=0;a.jl=null;}
function B_(a){return a.jY>=a.lE?0:1;}
function Ca(a){var b,c;Qt(a);b=a.jY;a.hV=b;c=a.jl;a.jY=b+1|0;return c.kG(b);}
function ZC(a){var b,c,d;if(a.hV<0){b=new C_;Y(b);N(b);}Qt(a);a.jl.qe(a.hV);a.qd=a.jl.b3;c=a.hV;d=a.jY;if(c<d)a.jY=d-1|0;a.lE=a.lE-1|0;a.hV=(-1);}
function Qt(a){var b;if(a.qd>=a.jl.b3)return;b=new H$;Y(b);N(b);}
function Ln(){var a=this;Ov.call(a);a.xB=null;a.Aa=null;}
function AHp(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.xB;e=0;f=0;g=a.Aa;a:{b:{while(true){if((e+32|0)>f&&D8(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ch(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BI;c=new K;M(c);U(H(U(H(c,C(416)),l),C(100)),h);Bm(b,L(c));N(b);}if(Ch(b)<m){b=new Oi;Y(b);N(b);}if(m<0){b=new BI;c=new K;M(c);H(U(H(c,C(101)),m),C(102));Bm(b,L(c));N(b);}n=b.Z;h=n+b.nl|0;e=0;while(e<m){o=k+1|0;i=b.pP.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!D8(c)){p=!D8(b)&&e>=f?A61:A60;break a;}i=g.data;n=Ch(c);o=i.length;n=Be(n,o);q=new ACl;q.tB=b;q.AZ=c;p=ALg(a,d,e,f,g,0,n,q);e=q.wd;if(p===null&&0==q.mP)p=A61;k=q.mP;h=0;if(c.ql){b=new Kz;Y(b);N(b);}if(Ch(c)<k)break;if(h>o){b=new BI;c=new K;M(c);BN(U(H(U(H(c,C(103)),h),C(97)),o),41);Bm(b,L(c));N(b);}l=h+k|0;if(l>o){b=new BI;c=new K;M(c);U(H(U(H(c,C(105)),l),C(100)),o);Bm(b,L(c));N(b);}if(k<0){b=new BI;c=new K;M(c);H(U(H(c,C(101)),k),C(102));Bm(b,L(c));N(b);}o=c.Z;m=0;while(m
<k){l=o+1|0;n=h+1|0;AAr(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new JO;Y(b);N(b);}b=new BI;c=new K;M(c);BN(U(H(U(H(c,C(103)),k),C(97)),h),41);Bm(b,L(c));N(b);}FC(b,b.Z-(f-e|0)|0);return p;}
var Td=G(Ln);
function ALg(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NB(h,2))break a;i=A61;break a;}c=k+1|0;n=j[k];if(!Gz(a,n)){c=c+(-2)|0;i=Eu(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NB(h,3))break a;i=A61;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gz(a,n))break b;if(!Gz(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(OB(p)){c=k+(-3)|0;i=Eu(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Eu(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NB(h,4))break a;i=A61;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ch(h.AZ)<2?0:1)break a;i=A60;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gz(a,n))break c;if(!Gz(a,o))break c;if(!Gz(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=JY(r);m=c+1|0;j[c]=Jg(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Eu(1);break a;}c=k+(-3)|0;i
=Eu(1);}h.wd=c;h.mP=f;return i;}
function Gz(a,b){return (b&192)!=128?0:1;}
function Yq(){var a=this;B.call(a);a.Df=null;a.Dc=null;a.Dd=null;}
function VM(){B.call(this);this.qS=null;}
function ATB(a,b){var c,d;c=a.qS;d=c.ef+1|0;c.ef=d;c=new K;M(c);H(H(U(c,d),C(417)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function Pb(){B.call(this);this.uX=null;}
function ASd(a){return a.uX.hd();}
function Pa(){B.call(this);this.ua=null;}
function AWI(a){return a.ua.hd();}
function AAC(){B.call(this);this.z$=null;}
function AZS(a){return a.z$.hd();}
var XN=G();
function AUN(a){return E5(1);}
function AAk(){B.call(this);this.tm=null;}
function A2w(a,b){a.tm.g(H1(b));}
var AFS=G();
function ACL(){B.call(this);this.vH=null;}
function AOy(a,b){a.vH.f();}
var AHJ=G();
var AGO=G();
function Xe(){B.call(this);this.u0=null;}
function ANl(a,b){var c,d,e,f;c=a.u0;d=Cy(b);e=new K;M(e);H(H(e,C(418)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new ABT;d.CZ=c;d.tg=b;e=new ABV;e.Fi=c;c=AK2(e);e=new ACC;e.xv=d;d=b.f_;if(d!==null)d.arrayBuffer().then(Bv(e,"f"),Bv(c,"f"));else{b=b.ij.getFile();f=new ACE;f.AP=e;f.AQ=c;b.then(Bv(f,"f"),Bv(c,"f"));}}
function Xd(){B.call(this);this.xt=null;}
function ASI(a,b){var c,d,e;c=a.xt;d=Cy(b);e=new K;M(e);H(H(e,C(419)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new PM;d.Ci=c;No(b,d);}
function Tt(){B.call(this);this.tc=null;}
function ATv(a){EJ(a.tc);}
var AFa=G();
function PJ(b,c,d){return AGF(b,0,c,d,U0());}
function AGF(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BL(c,d);h=g>=0?0:1+Q0(f,2.0)|0;i=g>0?0:1+Q0(f,3.0)|0;j=Q(Dh,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new K;M(m);U(H(m,C(420)),g);k[g]=AGF(L(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Dh;n=new K;M(n);U(H(n,C(421)),g);Kd(m,L(n),l);n=new Rl;n.tJ=m;m.oB=n;switch((l+g|0)%3|0){case 0:break;case 1:QT(m);break a;case 2:m.hA=60136;break a;default:break a;}LB(m);}if(U2(f)<0.25){n=J1(m.hl,0);n.bF=n.bF|2;}k[h+g|0]=m;g=g+1|0;}n=new Dh;S6(n,b,c);n.fb=A8$;n.fb=j;b=new WN;b.wt
=n;b.wv=e;n.jf=b;n.dW=b;if((c+c|0)>d)IG(n);else N0(n);return n;}
function ABj(){B.call(this);this.ri=null;}
function ALx(a){EJ(a.ri);}
function ABk(){B.call(this);this.tr=null;}
function AOW(a){EJ(a.tr);}
function ACQ(){var a=this;B.call(a);a.q8=null;a.q$=null;}
function A2E(a){var b,c;b=a.q8;c=a.q$;DS(b);c.f();}
function QL(){var a=this;B.call(a);a.ge=null;a.kI=null;a.i8=null;a.qn=null;a.de=null;a.lS=0;}
function AAz(a,b){if(!BO(b.oG,a.qn)){a.qn=b.oG;NX(a);}}
function NX(a){a.de=BV(a.de,null);}
function AGu(a,b){var c,d;c=Fn(b,a.qn);d=E7(c);a.de=BV(a.de,ADw(b.bH,NI(60088),c,0,d,0));}
function Tj(a,b){return a.de!==null&&Gk(b,a.ge,a.kI)?1:0;}
function WB(){var a=this;B.call(a);a.v4=null;a.v5=null;}
function AXf(a){var b,c;b=a.v4;c=a.v5;Is(b.cy,c);J4(c);b.bW();}
function WA(){B.call(this);this.wD=null;}
var AHI=G();
var Ef=G(Bu);
function AHa(){var a=this;B.call(a);a.js=null;a.nI=0;a.f7=0;}
function AVZ(){var a=new AHa();AUf(a);return a;}
function AUf(a){a.nI=0;a.js=BQ(16);a.f7=0;}
function G2(a,b,c){Bq(a,b);Bq(a,c);}
function Bq(a,b){var c,d;c=a.js;d=c.data.length;if(d==a.f7)a.js=Jm(c,d*2|0);c=a.js.data;d=a.f7;a.f7=d+1|0;c[d]=b;}
function Q3(a){var b,c,d,e,f;b=a.nI;if(b&&a.f7!=b){c=En();b=a.nI;d=a.f7;e=new K;M(e);H(U(H(U(H(e,C(422)),b),C(423)),d),C(424));Bk(c,L(e));}f=a.js;b=f.data.length;d=a.f7;if(b!=d)f=Jm(f,d);return f;}
function SM(){var a=this;Ed.call(a);a.gI=0;a.d6=null;a.mb=0;a.xW=0.0;a.pC=0;}
function AKW(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function UA(a){a.pC=a.d6.data.length*a.xW|0;}
function ACT(a,b){return VO(a,b)===null?0:1;}
function Ou(a,b){var c;c=VO(a,b);if(c===null)return null;return c.cU;}
function VO(a,b){var c,d;if(b===null)c=Ze(a);else{d=MI(b);c=Xg(a,b,d&(a.d6.data.length-1|0),d);}return c;}
function Xg(a,b,c,d){var e;e=a.d6.data[c];while(e!==null&&!(e.nE==d&&(b!==e.cP?0:1))){e=e.ip;}return e;}
function Ze(a){var b;b=a.d6.data[0];while(b!==null&&b.cP!==null){b=b.ip;}return b;}
function ACX(a,b,c,d){var e,f;e=new JH;V2(e,b,null);e.nE=d;f=a.d6.data;e.ip=f[c];f[c]=e;return e;}
function W7(a){var b,c,d,e,f,g,h,i;b=a.d6.data.length;b=AKW(!b?1:b<<1);c=Q(JH,b);d=c.data;e=0;f=b-1|0;while(true){g=a.d6.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.nE&f;i=h.ip;h.ip=d[b];d[b]=h;h=i;}e=e+1|0;}a.d6=c;UA(a);}
function UP(){var a=this;B.call(a);a.dD=null;a.mx=null;a.s8=null;}
function Pn(a,b){var c;if(!(b instanceof Mm)){Bq(a.dD,3);ADy(a,b);Bq(a.dD,b.jw);}else{c=b;Bq(a.dD,5);ADy(a,c);Bq(a.dD,c.jw);Bq(a.dD,c.wO);b=c.k3;Bq(a.dD,b.q);c=new WP;c.rg=a;Fy(b,c);}}
function ADy(a,b){var c;c=b.eJ.jF;G2(a.dD,a.mx.M,J(c));Bq(a.dD,b.eJ.dH);OR(a,b.mf);BX(a.mx,c);}
function OR(a,b){if(b===null)Bq(a.dD,(-1));else Bq(a.dD,(Cx(a.s8,b)).bp);}
function Uw(){var a=this;B.call(a);a.cZ=null;a.ni=null;a.sh=null;}
function Hc(a,b){var c,d,e;if(b instanceof HE){c=b;Bq(a.cZ,9);YN(a,c.hx);}else if(b instanceof Km){d=b;Bq(a.cZ,3);Zk(a,d);Bq(a.cZ,d.qL);YN(a,d.id);}else if(b instanceof Jq){e=b;Bq(a.cZ,4);Hc(a,e.jU);Hc(a,e.i_);}else if(b===null)Bq(a.cZ,(-1));else{Bq(a.cZ,5);Zk(a,b);Bq(a.cZ,b.z0);}}
function Zk(a,b){var c;c=b.fW.jF;G2(a.cZ,a.ni.M,J(c));Bq(a.cZ,b.fW.dH);b=b.gH;if(b===null)Bq(a.cZ,(-1));else Bq(a.cZ,(Cx(a.sh,b)).bp);BX(a.ni,c);}
function YN(a,b){var c;Bq(a.cZ,b.q);c=new V5;c.xu=a;Fy(b,c);}
function WU(){var a=this;B.call(a);a.yO=0;a.yN=0;}
function S2(){B.call(this);this.sE=null;}
function ASK(a,b){var c;c=a.sE;DI(c,b);Hy(c,null);VL(c);}
var YG=G(Er);
var A9b=null;function AIR(){A9b=F($rt_doublecls());}
var Ke=G();
var A9c=FM;var A9d=null;var A9e=null;function AFY(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.q9=IK(Dg(d,D(0, 2147483648)),FM)?0:1;e=Dg(d,D(4294967295, 1048575));f=GR(A45(d,52))&2047;if(IK(e,FM)&&!f){c.nA=FM;c.mN=0;return;}if(f)e=A3K(e,D(0, 1048576));else{e=HM(e,1);while(IK(Dg(e,D(0, 1048576)),FM)){e=HM(e,1);f=f+(-1)|0;}}g=A9e.data;h=f<<16>>16;i=0;j=g.length;k=BL(i,j);if(k>0){c=new BU;Y(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BL(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IU(e,A9d.data[h],i);if(ANU(m,A9c)){while(DG(m,A9c)<=0){j=j+(-1)|0;m=CT(Ci(m,Bp(10)),Bp(9));}g=A9e.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IU(e,A9d.data[h],i);}e=HM(e,1);d=CT(e,Bp(1));g=A9d.data;h=j+1|0;n=g[h];f=i-1|0;n=IU(d,n,f);o=IU(JT(e,Bp(1)),A9d.data[h],f);p=Bp(1);while(true){q=Ci(p,Bp(10));if(DG(Df(m,q),Df(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ci(r,Bp(10));if(DG(Df(m,s),Df(n,s))>=0)break;r=s;}h=DG(p,r);e=h>0?Ci(Df(m,p),p):h<0?CT(Ci(Df(m,r),r),r):Ci(Df(CT(m,AGR(r,Bp(2))),r),r);if(DG(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Df(e,Bp(10));if(DG(e,D(2808348672, 232830643))<0)break;}else if(DG(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ci(e,Bp(10));}c.nA=e;c.mN=j-330|0;}
function IU(b,c,d){var e,f,g,h,i,j,k,l;e=Dg(b,Bp(65535));f=Dg(Gd(b,16),Bp(65535));g=Dg(Gd(b,32),Bp(65535));h=Dg(Gd(b,48),Bp(65535));i=Dg(c,Bp(65535));j=Dg(Gd(c,16),Bp(65535));k=Dg(Gd(c,32),Bp(65535));l=Dg(Gd(c,48),Bp(65535));return CT(CT(CT(HM(Ci(l,h),32+d|0),HM(CT(Ci(l,g),Ci(k,h)),16+d|0)),HM(CT(CT(Ci(l,f),Ci(k,g)),Ci(j,h)),d)),Gd(CT(CT(CT(Ci(k,e),Ci(j,f)),Ci(i,g)),HM(CT(CT(CT(Ci(l,e),Ci(k,f)),Ci(j,g)),Ci(i,h)),16)),32-d|0));}
function AFK(){A9c=Df(Bp(-1),Bp(10));A9d=AIL([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A9e=A4x([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function T6(){B.call(this);this.rG=null;}
function AL_(a){Hd(a.rG,37,3);}
function T7(){B.call(this);this.sn=null;}
function AOc(a){Hd(a.sn,40,3);}
function T8(){B.call(this);this.tI=null;}
function A2b(a){Hd(a.tI,42,3);}
function T9(){B.call(this);this.xD=null;}
function AQj(a){Hd(a.xD,45,3);}
function T$(){B.call(this);this.x5=null;}
function ASq(a){Hd(a.x5,45,5);}
function OZ(){B.call(this);this.Ao=null;}
function A3k(a,b){var c,d;c=a.Ao;d=new Bu;Bm(d,$rt_str(b.message));c.g(d);}
var VP=G(0);
var A6N=null;function A4i(){A4i=Bn(VP);A0a();}
function A0a(){A6N=new $rt_globals.TextDecoder("utf-16");}
function AB5(){var a=this;B.call(a);a.tv=0;a.B7=0;}
function FX(a,b){var c;c=a.B7;if(c<=0)return 0;return YS(a.tv,b,c);}
function Rl(){B.call(this);this.tJ=null;}
function AZe(a){var b,c,d;b=a.tJ;c=Bt();d=GC(b);b=new K;M(b);H(H(b,C(425)),d);Bk(c,L(b));}
function WN(){var a=this;B.call(a);a.wt=null;a.wv=null;}
function AZa(a){var b,c;b=a.wt;c=a.wv;if(!Ja(b))N0(b);else IG(b);c.f();}
function Xl(){var a=this;B.call(a);a.qG=null;a.yL=null;a.vf=0;a.wa=0;}
function Of(a,b){return Ch(a.yL)<b?0:1;}
var AHh=G();
function AEG(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEy(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(Ev()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new Tx;d.addEventListener("change",Bv(e,"handleEvent"));d.click();}
var AEV=G(0);
function R8(){B.call(this);this.t5=null;}
function AXT(a){Mr(a.t5);}
function AC3(){var a=this;B.call(a);a.w3=null;a.w2=null;}
function AT5(a){FQ(a.w3,a.w2);}
var Yy=G();
var A9f=null;function Oa(b,c,d){RA(b,c,d,0);}
function RA(b,c,d,e){XB(b,c,d,null,null,e);}
function XB(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=Mc(c);i=Bb(h);j=Bb(h);k=Bb(h);l=CK(b);c=b.B;if(c.data.length<i)b.B=AFc(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bb(h)|0;h.fi=h.fi+n|0;}else b.B.data[m]=D6(Y$(h,d,0));m=m+1|0;}Ni(b);if(j)b.df=AGW(AHO(h));EU(b.dQ);EU(b.dG);o=b.dQ;g=0;while(g<k){DU(o,DR(Bb(h),Bb(h)),DR(Bb(h),Bb(h)));g=g+1|0;}p=b.dQ;o=b.dG;q=M6(N_(p));while(Fu(q)){r=OD(q);s=r.cP;p=r.cU;BD(A9f);r=Cx(o,p);if(r===null){r=BM();DU(o,p,r);}BB(r,s);}if(o.o$===null){p=new QB;p.wl=o;o.o$=p;}p=o.o$;r=new ZJ;NS(r,
p.wl);while(Fu(r)){N3(r);o=r.hg.cU;p=A6h;c=Q(B,o.q);d=c.data;Gp(o,c);K$(c,p);g=0;t=d.length;while(g<t){p=d[g];KH(o,g);o.cJ.data[g]=p;g=g+1|0;}}Rv(h);if(e!==null&&f!==null){p=AQO(e,f);PY(p);b.e7=AWn(p.pn,p.iU);b.df=AGW(p.pJ);}}
function Wt(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Mc(c);i=Bb(h);j=Bb(h);k=Bb(h)!=1?0:1;l=Bb(h);m=Bb(h);n=ADv(b,i);o=ADv(b,j);p=(IS(Cd(b,n.a),n.b)).data[0].s;q=(IS(Cd(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=Y$(h,d,i);if(!r)g=L5(p,g);if(r==s)g=L5(g,q);t=n.a+r|0;u=D6(g);c=b.B.data;v=c[t];c[t]=u;if(!k&&Jv(v)==Jv(u)){t=0;while(t<Jv(v)){o=v.s.data[t];w=u.s.data[t];x=o.b0;y=x!=5?0:1;if(!y&&x&&!w.b0){w.b0=x;w.bF=o.bF;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AHO(h);w=K0(i,j,(-1));Xp(b.df,w,u);}else if(e!==null&&f!==null){v=AQO(e,f);PY(v);w=K0(i,j,(-1));Xp(b.df,w,v.pJ);n=b.e7;n.fG=b.df.dd.cm;n.fd=v.iU;}}Rv(h);}
function Y$(b,c,d){var e,f,g,h,i,j,k,l;e=Bb(b);f=Q(Cw,e);g=f.data;h=0;while(h<e){i=Bb(b);j=Bb(b);k=Bb(b);l=Bb(b);g[h]=Eb(EB(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AKv(){A9f=new Vz;}
var Zr=G(0);
var Pu=G(0);
var Ia=G();
function AAn(){Ia.call(this);this.AC=null;}
function AB_(a,b){var c,d,e;c=0;while(true){d=a.AC;if(d.kg===null)d.kg=B7(d.yo);if(!B_(d.kg))e=0;else{c=b.I(Ca(d.kg));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Ru=G(0);
function P5(){var a=this;B.call(a);a.Eo=null;a.Eq=null;a.Ep=0;a.En=0;}
var ADK=G();
function AMw(a,b){b=b;b.cS=BV(b.cS,null);}
var AF1=G(0);
function AJc(b,c,d,e,f,g){f=f.data;f[Jr(0,0)]=Gy(g,b,c,d,0);f[Jr(0,1)]=Gy(g,b,c,d,2);f[Jr(1,0)]=Gy(g,b,c,e,0);f[Jr(1,1)]=Gy(g,b,c,e,2);return f[Jr(0,0)];}
function JH(){var a=this;GX.call(a);a.nE=0;a.ip=null;}
var H$=G(Bu);
var ADW=G();
function A0W(a,b){AEG(b);}
function ADV(){B.call(this);this.sS=null;}
function AWH(a,b){var c,d,e;c=a.sS;d=0;e=b.length;while(d<e){c.g(AKd(b[d],null));d=d+1|0;}}
var ADl=G();
function AXx(a,b){AEG(b);}
function ADk(){var a=this;B.call(a);a.ss=null;a.st=null;}
function AX5(a,b){var c,d,e;c=a.ss;d=a.st;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);c.g(A3$(b,d,Q(BK,0),Q(BK,0)));}
function S8(){var a=this;B.call(a);a.bu=null;a.rx=null;a.jb=null;a.oq=null;a.mq=null;a.gp=null;}
function Ye(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=Ta();e=a.bu.d;f=D_(e);e=HA(e);g=a.bu.fC;if(Zn(g,f,e)!==null){h=new Ro;h.r4=a;h.r5=b;Es(d,C(426),h);}if(Oy(g,f,e)!==null){h=new Rm;h.zX=a;h.zW=b;Es(d,C(427),h);}if(ABW(g,f,e)!==null){e=new Rp;e.yG=a;e.yH=b;Es(d,C(428),e);}e=new Rn;e.B$=a;e.B9=b;Es(d,C(429),e);HQ(a);if(L3()){if(!a.bu.e2){f=new St;f.uu=a;Es(d,C(430),f);}f=new Su;f.wW=a;Es(d,C(431),f);if(!a.bu.e2&&VJ(HQ(a))){f=new Ss;f.r6=a;Es(d,C(432),f);}}if(c!==null)Na(d,c);f=Ta();i=Q(BK,5).data;i[0]=C(180);i[1]=C(191);i[2]
=C(207);i[3]=C(206);i[4]=C(201);j=i.length;k=0;while(k<j){b=i[k];e=new RK;e.zu=a;e.zt=b;Es(f,b,e);k=k+1|0;}H0(d,C(433),IY(f));c=Ta();i=Q(BC,3);l=i.data;g=a.mq;BD(g);m=new Qw;m.x$=g;l[0]=C$(C(434),m);g=a.mq;BD(g);m=new Qu;m.z5=g;l[1]=C$(C(435),m);g=a.mq;BD(g);m=new Qv;m.qz=g;l[2]=C$(C(436),m);LH(c,C(437),CS(i),A9g);i=Q(BC,2);l=i.data;g=a.jb;BD(g);m=new T_;m.z9=g;l[0]=C$(C(438),m);g=a.jb;BD(g);m=new Ub;m.Cc=g;l[1]=C$(C(439),m);H0(c,C(440),CS(i));g=new Zi;g.yZ=a;LH(c,C(441),g,A9g);if(a.bu.cM.bH.l6){i=Q(BC,2);l
=i.data;g=new ZO;g.sy=a;l[0]=C$(C(442),g);g=new ZM;g.AF=a;l[1]=C$(C(443),g);H0(c,C(444),CS(i));}H0(d,C(445),IY(c));return IY(d);}
function Z0(a,b){return Ye(a,b,null);}
function HQ(a){return a.bu.cM.es;}
function We(a){var b;b=new RP;b.uo=a;return b;}
function AXK(a){var b,c,d,e,f;b=Q(BC,5);c=b.data;d=a.bu;BD(d);e=new SX;e.wm=d;c[0]=C$(C(446),e);e=a.bu;BD(e);f=new SY;f.su=e;c[1]=C$(C(447),f);d=a.bu;BD(d);e=new SZ;e.Aw=d;c[2]=C$(C(448),e);d=a.bu;BD(d);e=new S0;e.xj=d;c[3]=C$(C(449),e);d=a.bu;BD(d);e=new Tc;e.zm=d;c[4]=C$(C(450),e);return CS(b);}
function Qs(a,b){var c;c=new OT;c.xO=a;c.xP=b;return c;}
function KP(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DS(a.gp.b$);d=a.bu.d;e=D_(d);f=HA(d);g=a.bu.fC;if(c===null)h=null;else{A5l();switch(A9h.data[c.fU]){case 1:h=Oy(g,e,f);break a;case 2:h=Zn(g,e,f);break a;default:}b=new E4;Y(b);N(b);}}c=a.bu;e=FD(c,b);g=Jb(c.d.h,e.bq,e.bv);f=SR(c,g);if(h!==null){g=c.d;i=e.bq;j=e.bv;e=new R$;e.Dy=c;e.Dx=b;e.Dw=f;h.tR(g,i,j,e,c.j9);}else{e=Cx(c.d.h.dQ,g);if(e!==null)IX(c,e);else{e=Cx(c.d.h.dG,g);if(e!==null&&!EC(e))ZB(c.kS,b,e,c,f);else{c=c.kS;k=Q(BC,1);l=k.data;e=new BC;f=c.b$;BD(f);g
=new ABa;g.Bl=f;CE(e,g,C(451));l[0]=e;RO(c,b,CS(k));}}}}
function AB7(){var a=this;B.call(a);a.vD=null;a.vA=null;a.vB=null;}
function AP2(a,b,c,d){var e,f,g,h;b=a.vD;e=a.vA;f=a.vB;ABt(b,e);if(f!==null)d.mY.f();if(ACk(d)){f=d.fo;g=e.c3;h=e.f8;Vs(b,BG((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.nh,e,d.tP);}}
function AKr(){var a=this;B.call(a);a.iA=null;a.fi=0;}
function Mc(a){var b=new AKr();AUR(b,a);return b;}
function AUR(a,b){a.iA=b;a.fi=0;}
function Bb(a){var b,c;b=a.iA.data;c=a.fi;a.fi=c+1|0;return b[c];}
function Rv(a){var b,c,d,e;if(a.fi!=a.iA.data.length){b=En();c=a.iA.data.length;d=a.fi;e=new K;M(e);H(U(H(U(H(e,C(422)),c),C(452)),d),C(453));Bk(b,L(e));}}
function Ra(){var a=this;B.call(a);a.Dg=null;a.t8=0;}
function AVG(a,b){var c,d,e,f;c=a.t8;d=(CQ(La(b,0))).data;b=Bt();e=d[0];f=new K;M(f);U(H(U(H(f,C(454)),c),C(455)),e);Bk(b,L(f));b=Bt();e=d[1];f=new K;M(f);U(H(U(H(f,C(454)),c),C(456)),e);Bk(b,L(f));}
function AEB(){B.call(this);this.Po=null;}
var Tx=G();
function AU_(a,b){}
var Vz=G();
var FR=G();
var A9i=null;var A9j=null;var A7C=null;var A9k=null;var A9l=null;var A9m=null;function AJ4(){A9i=new Up;A9j=new Um;A7C=new Un;A9k=new Uk;A9l=new Ul;A9m=new Wg;}
function AIx(){var a=this;B.call(a);a.pn=null;a.pJ=null;a.iU=null;a.cD=null;a.oP=null;a.nc=null;a.ja=null;a.nM=null;a.pE=null;}
function AQO(a,b){var c=new AIx();A1V(c,a,b);return c;}
function A1V(a,b,c){a.cD=Mc(b);a.oP=c;}
function PY(a){var b,c,d,e,f,g,h,i;b=Bb(a.cD);c=new NR;QR(c);a.iU=c;a.ja=BM();d=0;while(d<b){e=Bb(a.cD);f=Bb(a.cD);g=EB(a.oP,e,f);DU(a.iU,g,BM());BB(a.ja,g);d=d+1|0;}c=M6(N_(a.iU));while(Fu(c)){HY((OD(c)).cU,Po(a));}d=Bb(a.cD);if(d==(-1))a.pn=null;else{a.nc=Q(F1,d);c=new WD;h=a.cD;i=a.oP;g=a.ja;c.dR=h;c.zl=i;c.yT=g;a.nM=c;c=new RM;c.ey=h;c.A3=i;c.Bg=g;a.pE=c;a.pn=RB(a,null);}if(Bb(a.cD)!=(-1))a.pJ=ZG(a.cD,a.nc);}
function RB(a,b){var c,d,e,f,g,h,i,j,k;c=Bb(a.cD);d=Bb(a.cD);e=a.nM;f=Bb(e.dR);g=BM();h=0;while(h<f){BB(g,O4(e));h=h+1|0;}a:{switch(d){case -1:i=new NQ;i.hn=b;b=A7C;i.cN=b;i.fH=b;i.e1=b;i.lq=b;i.hQ=b;break a;case 0:i=A4z(b);break a;case 1:i=new Lk;AGg(i,b);HY(i.e1,g);break a;default:}b=new C_;i=new K;M(i);U(H(i,C(457)),d);Bm(b,L(i));N(b);}i.e1=g;b=a.pE;d=Bb(b.ey);e=BM();j=0;while(j<d){BB(e,Hp(b));j=j+1|0;}i.fH=e;i.lq=Po(a);d=Bb(a.cD);b=BM();j=0;while(j<d){e=O4(a.nM);g=Hp(a.pE);f=Bb(a.cD);k=new QS;k.ls=e;k.kU
=g;k.rX=f;BB(b,k);j=j+1|0;}i.hQ=b;j=Bb(a.cD);i.uG=j==(-1)?null:BH(a.ja,j);d=Bb(a.cD);b=BM();j=0;while(j<d){BB(b,RB(a,i));j=j+1|0;}i.cN=b;a.nc.data[c]=i;return i;}
function Po(a){var b,c,d,e;b=Bb(a.cD);c=BM();d=0;while(d<b){e=Bb(a.cD);BB(c,BH(a.ja,e));d=d+1|0;}return c;}
function AE1(){var a=this;B.call(a);a.l7=null;a.pA=null;}
function ALp(){var a=this;B.call(a);a.EF=0;a.DU=0;a.rO=0;a.nn=0;}
function ADE(){var a=this;B.call(a);a.sJ=null;a.sK=null;}
function AVr(a){var b,c,d,e,f,g;b=a.sJ;c=a.sK;if(BO(c.l7,b.d.gb)){c=c.pA;CP(b,c.nn,c.rO,0);Cf((Bi(b)).bN,c.nn,c.rO);Cf((Bi(b)).bB,c.DU,c.EF);}else{d=(B3(b.fC.AU)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){GD(b);b=new YT;b.s9=g;b.s$=c;BD(b);c=new YY;c.wz=b;$rt_globals.setTimeout(Bv(c,"onTimer"),0);}}}
function ADF(){var a=this;B.call(a);a.By=null;a.Bx=null;}
function AXS(a){IX(a.By,a.Bx);}
function F1(){var a=this;B.call(a);a.hn=null;a.cN=null;a.fH=null;a.e1=null;a.hQ=null;a.lq=null;a.uG=null;}
function A4z(a){var b=new F1();AGg(b,a);return b;}
function AGg(a,b){a.hn=b;a.cN=BM();a.fH=BM();a.e1=BM();a.lq=BM();a.hQ=BM();}
function AD1(a){var b;b=a.hn;if(b!==null)b.cN.q5(a);}
function VW(){B.call(this);this.sk=null;}
function AOF(a,b){b=b;ZN(a.sk,b);}
var NQ=G(F1);
var Lk=G(F1);
function U3(){B.call(this);this.A2=null;}
function AVu(a,b){var c;b=b;c=a.A2;Bq(c.bx,(Cx(c.fZ,b)).bp);}
function QS(){var a=this;B.call(a);a.ls=null;a.kU=null;a.rX=0;}
function Qj(){B.call(this);this.qH=null;}
function AY4(a,b){b=b;AAv(a.qH,b);}
var Qo=G(0);
var FB=G(FG);
var Nv=G(FB);
var Up=G(Nv);
var N8=G(Ed);
var Um=G(N8);
var Op=G(Fv);
function AWC(a){var b;b=new Ef;Y(b);N(b);}
function AQD(a,b){var c;c=new Ef;Y(c);N(c);}
function APD(a,b){b=new Ef;Y(b);N(b);}
var Un=G(Op);
function AQK(a,b){var c;c=new BI;Y(c);N(c);}
function APW(a){return 0;}
function ANT(a){return A9k;}
function AMd(a){return 1;}
var Uk=G();
function ALZ(a){return 0;}
function AZQ(a){var b;b=new MA;Y(b);N(b);}
function ASA(a){var b;b=new C_;Y(b);N(b);}
var Yw=G(0);
var Ul=G();
var Wg=G();
function Rs(){var a=this;B.call(a);a.mT=0;a.sB=null;}
function A3m(a,b){var c,d,e;c=a.sB;b=b;d=c.yO;e=c.yN;d=b.a<=d&&e<=b.b?1:0;a.mT=d;return d?0:1;}
var Kz=G(Ef);
var JO=G(Bu);
var Oi=G(Bu);
function Yo(){B.call(this);this.zh=null;}
function AZR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.zh;d=CQ(c[0]);e=(CQ(c[1])).data[0];if(!ABG(b.h)){c=b.h;if(c.cr==e){e=b.qE;f=Mc(d);EU(c.dQ);EU(c.dG);Ni(c);while(f.fi>=f.iA.data.length?0:1){if(Bb(f)==(-1))continue;g=VR(c,Bb(f));h=Oo(Cd(c,g.bq),g.bv);if(Bb(f)==(-1)){if(!e)continue;h.b0=0;h.bF=h.bF|4;continue;}i=VR(c,Bb(f));j=Bb(f);k=Bb(f);DU(c.dQ,g,i);l=c.dG;m=BM();if(Cx(l,i)===null)DU(l,i,m);BB(Cx(c.dG,i),g);h.b0=j;h.bF=k;}I2(b);if(b.EI){n=JT(E3(),b.A_);if(A3G(n,Bp(100))){b=E1(b);c=new K;M(c);H(HH(H(H(c,
b),C(458)),n),C(199));$rt_globals.console.info($rt_ustr(L(c)));}}}}}
function AH1(){B.call(this);this.RD=null;}
function ABv(){B.call(this);this.vl=null;}
function AQs(a,b){Ms(a.vl,b);}
function Q_(){var a=this;B.call(a);a.yo=null;a.kg=null;}
function Vt(){B.call(this);this.sM=null;}
function AXZ(a,b){var c,d;c=a.sM;c.k_=b;Hy(c.F,b.qa);Hy(c.H,c.k_.qb);b=c.mz;d=c.k_;b.gY=d;c.fK.eu=d;}
var AEH=G();
function AE4(b){var c,d,e,f,g,h,i,j;c=AVZ();d=CK(b);Bq(c,d);e=0;f=0;while(f<d){g=Cd(b,f);h=Jv(g);Bq(c,h);i=0;while(i<h){j=J1(g,i);G2(c,e,Md(j));e=e+Md(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return Q3(c);}
function AEN(b){var c,d,e,f,g,h,i,j,k;c=Bb(b);d=Q(Gs,c);e=d.data;f=0;while(f<c){a:{g=Bb(b);if(g!=(-1)){h=Bb(b);i=Bb(b);if(i==(-1)){j=new Gs;j.hb=h;e[g]=j;}else{j=new Gs;j.hb=h;j.nF=BQ(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].nF.data[k]=Bb(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AIw(b,c,d,e){var f,g,h,i;f=Fc(b);g=Fc(c);h=AE4(b);i=AE4(c);b=new AA_;b.Bk=d;CW(e,b,C(459),I(B,[f,h,g,i]));}
function AAD(){var a=this;B.call(a);a.qT=null;a.qU=null;}
function AVs(a){var b,c;b=a.qT;c=a.qU;FQ(b.b$.bZ,c);ABe(b);}
function G9(){var a=this;B.call(a);a.ek=0;a.e3=0;a.pu=null;a.n_=0;a.gU=null;}
function AS9(a,b,c,d,e,f){var g=new G9();AYE(g,a,b,c,d,e,f);return g;}
function AYE(a,b,c,d,e,f,g){a.ek=b;a.e3=c;a.pu=BG(f,g);a.n_=d;a.gU=e;}
function Qz(){FB.call(this);this.jm=null;}
function Sy(a){var b;b=new AAL;NS(b,a.jm);return b;}
function TP(){FB.call(this);this.zb=null;}
function M6(a){var b;b=new TI;NS(b,a.zb);return b;}
function QB(){FG.call(this);this.wl=null;}
function Wj(){B.call(this);this.v_=null;}
function AW4(a,b){b=b;Pn(a.v_,b);}
function Ua(){B.call(this);this.uK=null;}
function AYI(a,b){b=b;Hc(a.uK,b);}
function KF(){var a=this;B.call(a);a.eJ=null;a.mf=null;a.jw=0;}
function A4e(a,b,c){var d=new KF();AGL(d,a,b,c);return d;}
function AGL(a,b,c,d){a.eJ=b;a.mf=c;a.jw=d;}
function AJ6(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BO(a.eJ,c.eJ)&&BO(a.mf,c.mf)&&BO(CZ(a.jw),CZ(c.jw))?1:0;}return 0;}
function Mm(){var a=this;KF.call(a);a.k3=null;a.wO=0;}
function AVQ(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){if(!AJ6(a,b))return 0;c=b;return BO(a.k3,c.k3);}return 0;}
function E$(){var a=this;B.call(a);a.fW=null;a.gH=null;a.z0=0;}
function A3F(a,b,c){var d=new E$();N1(d,a,b,c);return d;}
function N1(a,b,c,d){a.fW=b;a.gH=c;a.z0=d;}
function AIA(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BO(a.fW,c.fW)&&BO(a.gH,c.gH)?1:0;}return 0;}
function HE(){E$.call(this);this.hx=null;}
function Km(){var a=this;E$.call(a);a.id=null;a.qL=0;}
function A2f(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){if(!AIA(a,b))return 0;c=b;return BO(a.id,c.id);}return 0;}
function Jq(){var a=this;E$.call(a);a.jU=null;a.i_=null;}
function AVe(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BO(a.jU,c.jU)&&BO(a.i_,c.i_)?1:0;}return 0;}
function Yp(){var a=this;B.call(a);a.qt=null;a.qv=0;a.qu=0;a.qr=null;a.qq=0;a.qs=0;}
function AZU(a,b){var c,d,e,f,g,h,i,j;c=a.qt;d=a.qv;e=a.qu;f=a.qr;g=a.qq;h=a.qs;i=Cs(c.bb,5.0);d=Be((c.bb.bO.a-d|0)-i|0,Bd((i-d|0)-c.Q.j.a|0,b.k.a));j=Be((c.bb.bO.b-e|0)-i|0,Bd((i-e|0)-c.Q.j.b|0,b.k.b));X(f,d+g|0,j+h|0);Et(c,f,c.W.j);}
function AFv(){var a=this;Ia.call(a);a.QR=null;a.Sd=0;a.Kb=0;a.Iv=0;}
function AA_(){B.call(this);this.Bk=null;}
function ARB(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.Bk;d=CQ(c[0]);c=Mc(d);e=new Ud;d=AEN(c);f=AEN(c);g=Bb(c);h=Q(Ma,g);i=h.data;j=0;while(j<g){i[j]=Nq(Bb(c),Bb(c),Bb(c),Bb(c),Bb(c));j=j+1|0;}AGc(e,d,f,h);b.g(e);}
function M_(){var a=this;Fl.call(a);a.fv=null;a.jk=null;a.wT=null;a.nx=null;}
function A9n(a,b,c){var d=new M_();Xj(d,a,b,c);return d;}
function Xj(a,b,c,d){var e;N$(a,c,b,d);b=new UQ;c=a.cy;P3(b,c.bZ);d=K3(c);b.it=d;b.dK=Ie(d);c=Ie(b.it);b.dJ=c;Ok(b.eG,b.dK,c);e=new OY;e.tW=b;c=b.dK;c.iv=e;b.dJ.iv=e;I0(c,0);I0(b.dJ,0);c=b.dK;c.b4=1;b.tV=AHu(c,b.dJ);MD(b,I(CD,[b.dK,b.dJ,b.eG]));a.fv=b;Y6(b,a.hk);b=Pc(a,a.fv,30.0);a.jk=b;c=new Wb;c.DC=a;b.CK=c;c=new Wa;c.Dm=a;b.EZ=c;Ej(a.cy,b);}
function A02(a,b){EG(a.jk,b.cI);Y6(a.fv,b);}
function M7(a,b,c){var d,e;d=!c?a.fv.dJ:a.fv.dK;e=new Ri;e.vt=a;e.vu=b;e.vv=c;GK(d,b,e);}
function A10(a){a.fv=null;}
function AVB(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fv;d=c.dK;c=c.dJ;e=B1(d,b);f=B1(c,b);if(!e&&!f)return CS(I(BC,[M5(a,1,C(271)),M5(a,0,C(272))]));g=!e?C(272):C(271);if(e)c=d;d=M5(a,e,g);h=a.fv;i=h.it;j=a.kk;k=new QA;g=h.dK;h=h.dJ;l=i.b$.bZ;k.l2=g;k.l1=h;k.yb=l;g=a.cy;BD(g);h=new QG;h.yA=g;return Ye(L7(i,c,j,a,k,h),b,d);}
function M5(a,b,c){var d,e;d=new BC;e=new Z8;e.te=a;e.td=b;CE(d,e,c);return d;}
var Wk=G();
function A1p(a){return ABc();}
var Qk=G();
function AOE(a){return ABc();}
function AAp(){B.call(this);this.zr=null;}
function AUL(a,b,c){var d,e;c=a.zr;d=c.d.h;e=b.bp;b=c.fz;AAj(d.B.data[e],0,b);}
function WD(){var a=this;B.call(a);a.dR=null;a.zl=null;a.yT=null;}
function O4(a){var b,c,d,e,f,g,h,i;a:{b=Bb(a.dR);switch(b){case 3:break;case 5:c=PR(a);d=Od(a);b=Bb(a.dR);e=Bb(a.dR);f=Bb(a.dR);g=BM();h=0;while(h<f){BB(g,Od(a));h=h+1|0;}i=new Mm;AGL(i,c,d,b);i.k3=g;i.wO=e;break a;default:c=new C_;d=new K;M(d);U(H(d,C(460)),b);Bm(c,L(d));N(c);}i=A4e(PR(a),Od(a),Bb(a.dR));}return i;}
function PR(a){var b,c;b=Bb(a.dR);c=Bb(a.dR);return AXu(EB(a.zl,b,c),Bb(a.dR));}
function Od(a){var b;b=Bb(a.dR);if(b==(-1))return null;return BH(a.yT,b);}
function RM(){var a=this;B.call(a);a.ey=null;a.A3=null;a.Bg=null;}
function Hp(a){var b,c,d,e,f;a:{b:{b=Bb(a.ey);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=W6(a);d=QX(a);b=Bb(a.ey);e=SB(a);f=new Km;N1(f,c,d,2);f.qL=b;f.id=e;break a;case 4:c=Hp(a);d=Hp(a);f=new Jq;N1(f,c.fW,c.gH,9);f.jU=c;f.i_=d;break a;case 5:f=A3F(W6(a),QX(a),Bb(a.ey));break a;case 9:c=SB(a);f=new HE;d=!EC(c)&&BH(c,0)!==null?(BH(c,0)).gH:null;N1(f,null,null,7);f.hx=BM();c=B7(c);while(B_(c)){e=Ca(c);if(!(e instanceof HE))BB(f.hx,e);else{e=e;HY(f.hx,e.hx);}}f.gH=d;break a;default:break b;}f
=null;break a;}c=new C_;d=new K;M(d);U(H(d,C(461)),b);Bm(c,L(d));N(c);}return f;}
function W6(a){var b,c;b=Bb(a.ey);c=Bb(a.ey);return AXu(EB(a.A3,b,c),Bb(a.ey));}
function QX(a){var b;b=Bb(a.ey);if(b==(-1))return null;return BH(a.Bg,b);}
function SB(a){var b,c,d;b=Bb(a.ey);c=BM();d=0;while(d<b){BB(c,Hp(a));d=d+1|0;}return c;}
function VD(){var a=this;B.call(a);a.u1=null;a.u2=null;a.u_=null;a.va=0;a.u8=0;a.u9=0;a.u5=0;a.u6=0;a.u3=0;a.u4=0;a.vN=0;}
function ALy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.u1;d=a.u2;e=a.u_;f=a.va;g=a.u8;h=a.u9;i=a.u5;j=a.u6;k=a.u3;l=a.u4;m=a.vN;n=Cs(c.bb,5.0);o=c.W.hW();Cn(d,c.W.j);Cn(e,c.W.i);switch(f){case -1:f=Be(h+(b.k.a-g|0)|0,c.bb.bO.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.k.a|0)-g|0,Bd(o.a,n-c.Q.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.k.b-k|0)|0,(c.bb.bO.b+c.Q.j.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.k.b|0)-k|0,o.b);}Et(c,e,d);}
function UV(){var a=this;B.call(a);a.xR=null;a.xQ=0.0;}
function NA(a,b){return Lu(a.xR,b,a.xQ*2.0+0.875);}
function UQ(){var a=this;Ii.call(a);a.it=null;a.dK=null;a.dJ=null;a.tV=null;a.mO=null;a.jP=0;}
function Y6(a,b){GL(a.it,b);a.eG.im=b;FA(a.dK,b);FA(a.dJ,b);}
function Wb(){B.call(this);this.DC=null;}
function Wa(){B.call(this);this.Dm=null;}
function RC(){B.call(this);this.sx=null;}
function AND(a,b,c){HI(Cd(a.sx.d.h,b.bp),0,J(c));}
var X1=G(0);
function ACy(){var a=this;B.call(a);a.mE=null;a.pI=null;a.jh=null;a.m6=null;}
function A3$(a,b,c,d){var e=new ACy();AHo(e,a,b,c,d);return e;}
function AHo(a,b,c,d,e){a.mE=b;a.pI=c;a.jh=d;a.m6=e;}
function No(a,b){var c,d;c=new ACF;d=a.mE.values();c.kw=a;c.yy=d;c.k8=b;ABw(c);}
function YU(a){var b,c,d,e;b=a.m6;if(b===null){b=a.jh;c=b.data;d=Jn(a);e=c.length;b=C9(b,e+1|0);b.data[e]=d;b=b;a.m6=b;}return b;}
function Jn(a){return H1(a.mE.name);}
function A2e(a){return a.jh;}
function AFx(a){return UB(a.jh,Jn(a));}
function AHG(){var a=this;B.call(a);a.jF=null;a.dH=0;}
function AXu(a,b){var c=new AHG();ALB(c,a,b);return c;}
function ALB(a,b,c){a.jF=b;a.dH=c;}
function ARd(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.dH==c.dH&&BO(a.jF,c.jF)?1:0;}return 0;}
function WP(){B.call(this);this.rg=null;}
function AYH(a,b){b=b;OR(a.rg,b);}
function V5(){B.call(this);this.xu=null;}
function A3j(a,b){b=b;Hc(a.xu,b);}
function OY(){B.call(this);this.tW=null;}
function A13(a,b){var c,d,e;c=a.tW;d=c.dK;if(d===b)c.jP=c.jP|1;e=c.dJ;if(e===b)c.jP=c.jP|2;if((c.jP&3)==3){b=d.d.h;d=e.d.h;e=new XM;e.wA=c;AIw(b,d,e,c.it.b$.bZ.es);}}
function FL(){var a=this;B.call(a);a.kr=0;a.t$=0;a.jX=null;a.hg=null;a.yD=null;a.l$=null;}
function A9o(a){var b=new FL();NS(b,a);return b;}
function NS(a,b){a.l$=b;a.t$=b.c0;a.jX=null;}
function Fu(a){var b,c;if(a.jX!==null)return 1;while(true){b=a.kr;c=a.l$.b8.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.kr=b+1|0;}return 0;}
function AI3(a){var b;if(a.t$==a.l$.c0)return;b=new H$;Y(b);N(b);}
function N3(a){var b,c,d,e;AI3(a);if(!Fu(a)){b=new MA;Y(b);N(b);}b=a.jX;if(b!==null){c=a.hg;if(c!==null)a.yD=c;a.hg=b;a.jX=b.cY;}else{d=a.l$.b8.data;e=a.kr;a.kr=e+1|0;b=d[e];a.hg=b;a.jX=b.cY;a.yD=null;}}
var AAL=G(FL);
function Qn(a){N3(a);return a.hg.cP;}
var TI=G(FL);
function OD(a){N3(a);return a.hg;}
var ZJ=G(FL);
function AET(){var a=this;B.call(a);a.PD=null;a.SN=0;}
function ZH(){var a=this;B.call(a);a.l=null;a.d3=0;a.mU=null;a.rc=0;a.hZ=0;a.fP=0;a.bz=0;a.nz=null;}
function Ng(a){return a.l.bQ;}
function VS(a,b,c,d){var e,f,g,h,i,j;e=BM();f=a.d3;g=0;if(c!=f)a.d3=c;a:{switch(b){case -1073741784:h=new R6;c=a.bz+1|0;a.bz=c;Gq(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new QU;c=a.bz+1|0;a.bz=c;Gq(h,c);break a;case -33554392:h=new SO;c=a.bz+1|0;a.bz=c;Gq(h,c);break a;default:c=a.hZ+1|0;a.hZ=c;if(d!==null)h=A5t(c);else{h=new F9;Gq(h,0);g=1;}c=a.hZ;if(c<=(-1))break a;if(c>=10)break a;a.mU.data[c]=h;break a;}h=new AD8;Gq(h,(-1));}while(true){if(Fo(a.l)&&a.l.m==(-536870788))
{d=A1S(Ck(a,2),Ck(a,64));while(!DD(a.l)&&Fo(a.l)){i=a.l;j=i.m;if(j&&j!=(-536870788)&&j!=(-536870871))break;CJ(d,Bl(i));i=a.l;if(i.bk!=(-536870788))continue;Bl(i);}i=Lv(a,d);i.T(h);}else if(a.l.bk==(-536870788)){i=HZ(h);Bl(a.l);}else{i=Yg(a,h);d=a.l;if(d.bk==(-536870788))Bl(d);}if(i!==null)BB(e,i);if(DD(a.l))break;if(a.l.bk==(-536870871))break;}if(a.l.m9==(-536870788))BB(e,HZ(h));if(a.d3!=f&&!g){a.d3=f;d=a.l;d.he=f;d.m=d.bk;d.fq=d.fD;j=d.dr;d.x=j+1|0;d.jB=j;FU(d);}switch(b){case -1073741784:break;case -536870872:d
=new Ww;F$(d,e,h);return d;case -268435416:d=new ACY;F$(d,e,h);return d;case -134217688:d=new ZK;F$(d,e,h);return d;case -67108824:d=new Te;F$(d,e,h);return d;case -33554392:d=new D$;F$(d,e,h);return d;default:switch(e.q){case 0:break;case 1:return A5k(BH(e,0),h);default:return A3X(e,h);}return HZ(h);}d=new Ky;F$(d,e,h);return d;}
function AKI(a){var b,c,d,e,f,g,h;b=BQ(4);c=(-1);d=(-1);if(!DD(a.l)&&Fo(a.l)){e=b.data;c=Bl(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B5(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bk;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bl(f);f=a.l;g=f.bk;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bl(f);return A1G(e,3);}return A1G(e,2);}if(!Ck(a,2))return AFd(b[0]);if(Ck(a,64))return A0m(b[0]);return AWc(b[0]);}e=b.data;c=1;while(c<4&&!DD(a.l)&&Fo(a.l)){h=c+1|0;e[c]=Bl(a.l);c=h;}if(c==1){h=e[0];if(!(A9p.DN(h)==A9q?0:1))return VK(a,e[0]);}if
(!Ck(a,2))return A5Q(b,c);if(Ck(a,64)){f=new VF;PO(f,b,c);return f;}f=new ABx;PO(f,b,c);return f;}
function Yg(a,b){var c,d,e,f,g,h,i;if(Fo(a.l)&&!K2(a.l)&&Ny(a.l.m)){if(Ck(a,128)){c=AKI(a);if(!DD(a.l)){d=a.l;e=d.bk;if(!(e==(-536870871)&&!(b instanceof F9))&&e!=(-536870788)&&!Fo(d))c=Mo(a,b,c);}}else if(!XJ(a.l)&&!ACp(a.l)){f=new PZ;M(f);while(!DD(a.l)&&Fo(a.l)&&!XJ(a.l)&&!ACp(a.l)){if(!(!K2(a.l)&&!a.l.m)&&!(!K2(a.l)&&Ny(a.l.m))){g=a.l.m;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bl(a.l);if(!Mn(e))BN(f,e&65535);else J9(f,HN(e));}if(!Ck(a,2)){c=new ZZ;D0(c);c.cH
=L(f);e=f.M;c.bI=e;c.o9=AZq(e);c.nC=AZq(c.bI);h=0;while(h<(c.bI-1|0)){RT(c.o9,P(c.cH,h),(c.bI-h|0)-1|0);RT(c.nC,P(c.cH,(c.bI-h|0)-1|0),(c.bI-h|0)-1|0);h=h+1|0;}}else if(Ck(a,64))c=A5P(f);else{c=new Pm;D0(c);c.jD=L(f);c.bI=f.M;}}else c=Mo(a,b,ADU(a,b));}else{d=a.l;if(d.bk!=(-536870871))c=Mo(a,b,ADU(a,b));else{if(b instanceof F9)N(Cl(C(21),d.bQ,PX(d)));c=HZ(b);}}a:{if(!DD(a.l)){e=a.l.bk;if(!(e==(-536870871)&&!(b instanceof F9))&&e!=(-536870788)){f=Yg(a,b);if(c instanceof Dd&&!(c instanceof FV)&&!(c instanceof C3)
&&!(c instanceof E8)){i=c;if(!f.b2(i.N)){c=new Vb;Fh(c,i.N,i.e,i.jS);c.N.T(c);}}if((f.iY()&65535)!=43)c.T(f);else c.T(f.N);break a;}}if(c===null)return null;c.T(b);}if((c.iY()&65535)!=43)return c;return c.N;}
function Mo(a,b,c){var d,e,f,g,h;d=a.l;e=d.bk;if(c!==null&&!(c instanceof Cc)){switch(e){case -2147483606:Bl(d);d=new Wi;Dt(d,c,b,e);OF();c.T(A9r);return d;case -2147483605:Bl(d);d=new YH;Dt(d,c,b,(-2147483606));OF();c.T(A9r);return d;case -2147483585:Bl(d);d=new QE;Dt(d,c,b,(-536870849));OF();c.T(A9r);return d;case -2147483525:f=new Pj;d=Gm(d);g=a.fP+1|0;a.fP=g;MJ(f,d,c,b,(-536870849),g);OF();c.T(A9r);return f;case -1073741782:case -1073741781:Bl(d);d=new R0;Dt(d,c,b,e);c.T(d);return d;case -1073741761:Bl(d);d
=new Zm;Dt(d,c,b,(-536870849));c.T(b);return d;case -1073741701:h=new TT;d=Gm(d);e=a.fP+1|0;a.fP=e;MJ(h,d,c,b,(-536870849),e);c.T(h);return h;case -536870870:case -536870869:Bl(d);if(c.iY()!=(-2147483602)){d=new C3;Dt(d,c,b,e);}else if(Ck(a,32)){d=new R1;Dt(d,c,b,e);}else{d=new XR;f=Ys(a.d3);Dt(d,c,b,e);d.m8=f;}c.T(d);return d;case -536870849:Bl(d);d=new GE;Dt(d,c,b,(-536870849));c.T(b);return d;case -536870789:h=new Go;d=Gm(d);e=a.fP+1|0;a.fP=e;MJ(h,d,c,b,(-536870849),e);c.T(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bl(d);d=new AEk;Fh(d,f,b,e);f.e=d;return d;case -2147483585:Bl(d);c=new U7;Fh(c,f,b,(-2147483585));return c;case -2147483525:c=new Yf;Si(c,Gm(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bl(d);d=new Zl;Fh(d,f,b,e);f.e=d;return d;case -1073741761:Bl(d);c=new ABI;Fh(c,f,b,(-1073741761));return c;case -1073741701:c=new RS;Si(c,Gm(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bl(d);d=A4b(f,b,e);f.e=d;return d;case -536870849:Bl(d);c
=new E8;Fh(c,f,b,(-536870849));return c;case -536870789:return A4T(Gm(d),f,b,(-536870789));default:}return c;}
function ADU(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F9;while(true){a:{e=a.l;f=e.bk;if((f&(-2147418113))==(-2147483608)){Bl(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.d3=g;else{if(f!=(-1073741784))g=a.d3;c=VS(a,f,g,b);e=a.l;if(e.bk!=(-536870871))N(Cl(C(21),e.bQ,e.dr));Bl(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bl(e);c
=A1x(0);break a;case -2147483577:Bl(e);c=new XO;B6(c);break a;case -2147483558:Bl(e);c=new Vy;h=a.bz+1|0;a.bz=h;AKS(c,h);break a;case -2147483550:Bl(e);c=A1x(1);break a;case -2147483526:Bl(e);c=new ADj;B6(c);break a;case -536870876:Bl(e);a.bz=a.bz+1|0;if(Ck(a,8)){if(Ck(a,1)){c=A3P(a.bz);break a;}c=A3w(a.bz);break a;}if(Ck(a,1)){c=A31(a.bz);break a;}c=A4k(a.bz);break a;case -536870866:Bl(e);if(Ck(a,32)){c=A4r();break a;}c=A4h(Ys(a.d3));break a;case -536870821:Bl(e);i=0;c=a.l;if(c.bk==(-536870818)){i=1;Bl(c);}c
=Lv(a,Hv(a,i));c.T(b);e=a.l;if(e.bk!=(-536870819))N(Cl(C(21),e.bQ,e.dr));X8(e,1);Bl(a.l);break a;case -536870818:Bl(e);a.bz=a.bz+1|0;if(!Ck(a,8)){c=new Lm;B6(c);break a;}c=new W1;e=Ys(a.d3);B6(c);c.zp=e;break a;case 0:j=e.fD;if(j!==null)c=Lv(a,j);else{if(DD(e)){c=HZ(b);break a;}c=AFd(f&65535);}Bl(a.l);break a;default:break b;}Bl(e);c=new Lm;B6(c);break a;}h=(f&2147483647)-48|0;if(a.hZ<h)N(Cl(C(21),FZ(e),PX(a.l)));Bl(e);a.bz=a.bz+1|0;c=!Ck(a,2)?A4F(h,a.bz):Ck(a,64)?A3Q(h,a.bz):A5O(h,a.bz);a.mU.data[h].oY=1;a.rc
=1;break a;}if(f>=0&&!G$(e)){c=VK(a,f);Bl(a.l);}else if(f==(-536870788))c=HZ(b);else{if(f!=(-536870871)){b=new Kn;c=!G$(a.l)?Vv(f&65535):a.l.fD.cQ();e=a.l;MT(b,c,e.bQ,e.dr);N(b);}if(d){b=new Kn;e=a.l;MT(b,C(21),e.bQ,e.dr);N(b);}c=HZ(b);}}}if(f!=(-16777176))break;}return c;}
function Hv(a,b){var c,d,e,f,g,h,i,j,$$je;c=A1S(Ck(a,2),Ck(a,64));EM(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DD(a.l))break a;h=a.l;b=h.bk;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CJ(c,d);d=Bl(a.l);h=a.l;if(h.bk!=(-536870874)){d=38;break d;}if(h.m==(-536870821)){Bl(h);e=1;d=(-1);break d;}Bl(h);if(g){c=Hv(a,0);break d;}if(a.l.bk==(-536870819))break d;Vl(c,Hv(a,0));break d;case -536870867:if(!g){b=h.m;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bl(h);h=a.l;i=h.bk;if(G$(h))break c;if
(i<0){j=a.l.m;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Ny(i))break e;i=i&65535;break e;}catch($$e){$$je=EW($$e);if($$je instanceof Ew){break b;}else{throw $$e;}}}try{Cb(c,d,i);}catch($$e){$$je=EW($$e);if($$je instanceof Ew){break b;}else{throw $$e;}}Bl(a.l);d=(-1);break d;}}if(d>=0)CJ(c,d);d=45;Bl(a.l);break d;case -536870821:if(d>=0){CJ(c,d);d=(-1);}Bl(a.l);j=0;h=a.l;if(h.bk==(-536870818)){Bl(h);j=1;}if(!e)AIb(c,Hv(a,j));else Vl(c,Hv(a,j));e=0;Bl(a.l);break d;case -536870819:if(d>=0)CJ(c,
d);d=93;Bl(a.l);break d;case -536870818:if(d>=0)CJ(c,d);d=94;Bl(a.l);break d;case 0:if(d>=0)CJ(c,d);h=a.l.fD;if(h===null)d=0;else{ALo(c,h);d=(-1);}Bl(a.l);break d;default:}if(d>=0)CJ(c,d);d=Bl(a.l);}g=0;}N(Cl(C(21),Ng(a),a.l.dr));}N(Cl(C(21),Ng(a),a.l.dr));}if(!f){if(d>=0)CJ(c,d);return c;}N(Cl(C(21),Ng(a),a.l.dr-1|0));}
function VK(a,b){var c,d,e;c=Mn(b);if(Ck(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AWc(b&65535);}if(Ck(a,64)&&b>128){if(c){d=new Wr;D0(d);d.bI=2;d.ta=G3(G1(b));return d;}if(Qm(b))return ARb(b&65535);if(!SE(b))return A0m(b&65535);return AX3(b&65535);}}if(!c){if(Qm(b))return ARb(b&65535);if(!SE(b))return AFd(b&65535);return AX3(b&65535);}d=new Ee;D0(d);d.bI=2;d.g3=b;e=(HN(b)).data;d.mp=e[0];d.lr=e[1];return d;}
function Lv(a,b){var c,d,e;if(!AJ0(b)){if(!b.R){if(b.iq())return AOU(b);return AS_(b);}if(!b.iq())return AYi(b);c=new MK;ABZ(c,b);return c;}c=AEF(b);d=new O3;B6(d);d.sp=c;d.Ed=c.bi;if(!b.R){if(b.iq())return AGy(AOU(JE(b)),d);return AGy(AS_(JE(b)),d);}if(!b.iq())return AGy(AYi(JE(b)),d);c=new Rj;e=new MK;ABZ(e,JE(b));AHQ(c,e,d);return c;}
function JF(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Ck(a,b){return (a.d3&b)!=b?0:1;}
function AAi(){B.call(this);this.yY=null;}
function AQA(a,b){b.hv=a.yY.dd;}
function AAh(){B.call(this);this.u$=null;}
function A0f(a,b){b.hn=a.u$.dd.cm;}
function XQ(){B.call(this);this.rt=null;}
function AWv(a,b){b.hv=a.rt;}
var HU=G(0);
function Tk(){B.call(this);this.y1=null;}
function AY5(a,b,c,d){KW(a.y1,b,c.bp,d.bp);}
function Tl(){B.call(this);this.w_=null;}
function AXJ(a,b,c,d){KW(a.w_,b,c.bp,d.bp);}
function IW(){B.call(this);this.on=0;}
var A9s=null;var A9t=null;var A9u=null;function ARJ(a){var b=new IW();AGA(b,a);return b;}
function AGA(a,b){a.on=b;}
function Ya(b){return !b?A9t:A9s;}
function AIB(){A9s=ARJ(1);A9t=ARJ(0);A9u=F($rt_booleancls());}
var KY=G(0);
var R7=G();
var X5=G(0);
var AF2=G();
function Sp(){B.call(this);this.vc=null;}
function AZx(a,b,c,d){J0(a.vc,b,c.bp,d.bp);}
var So=G();
function ATP(a,b){return b.eJ.dH>=0?0:1;}
var Sn=G();
function AR6(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fW;if(b===null)break b;if(b.dH>=0)break b;}c=1;break a;}c=0;}return c;}
function Sr(){B.call(this);this.Au=null;}
function AY_(a,b,c,d){J0(a.Au,b,c.bp,d.bp);}
function BS(){var a=this;B.call(a);a.e=null;a.cz=0;a.x0=null;a.jS=0;}
var A6o=0;function B6(a){var b;b=A6o;A6o=b+1|0;a.x0=J$(b);}
function NN(a,b){var c;c=A6o;A6o=c+1|0;a.x0=J$(c);a.e=b;}
function IH(a,b,c,d){var e;e=d.y;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function IP(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWp(a,b){a.jS=b;}
function AV0(a){return a.jS;}
function ASL(a){return a.e;}
function ATm(a,b){a.e=b;}
function A1L(a,b){return 1;}
function A2x(a){return null;}
function KE(a){var b;a.cz=1;b=a.e;if(b!==null){if(!b.cz){b=b.gB();if(b!==null){a.e.cz=1;a.e=b;}a.e.eW();}else if(b instanceof HP&&b.e0.oY)a.e=b.e;}}
function AHX(){A6o=1;}
function V6(){var a=this;B.call(a);a.rp=null;a.rn=null;a.rm=0;a.ro=0;}
function AZB(a,b){b=b;EQ(a.rp,a.rn,b,a.rm,a.ro);}
function V7(){var a=this;B.call(a);a.B4=null;a.B3=null;a.B2=0;a.B1=0;}
function AOp(a,b){b=b;EQ(a.B4,a.B3,b,a.B2,a.B1);}
function RL(){var a=this;B.call(a);a.x9=null;a.x7=null;a.x8=null;}
function AXq(a){AFB(a.x9,a.x7,a.x8);}
function XP(){B.call(this);this.wZ=null;}
function AQN(a,b){ADB(a.wZ,b);}
function AA0(){var a=this;B.call(a);a.BZ=null;a.B0=null;}
function AMt(a){var b,c;b=a.BZ;c=a.B0;Gj(b.z.bA,E9(c));}
function C2(){var a=this;BS.call(a);a.oY=0;a.ep=0;}
var A9r=null;function OF(){OF=Bn(C2);AW6();}
function A5t(a){var b=new C2();Gq(b,a);return b;}
function Gq(a,b){OF();B6(a);a.ep=b;}
function AMs(a,b,c,d){var e,f;e=I_(d,a.ep);M4(d,a.ep,b);f=a.e.c(b,c,d);if(f<0)M4(d,a.ep,e);return f;}
function AYS(a){return a.ep;}
function AMI(a,b){return 0;}
function AW6(){var b;b=new XK;B6(b);A9r=b;}
function G5(){var a=this;B.call(a);a.bg=null;a.he=0;a.ft=0;a.vC=0;a.m9=0;a.bk=0;a.m=0;a.zJ=0;a.fD=null;a.fq=null;a.x=0;a.j5=0;a.dr=0;a.jB=0;a.bQ=null;}
var A9v=null;var A9p=null;var A9q=0;function X8(a,b){if(b>0&&b<3)a.ft=b;if(b==1){a.m=a.bk;a.fq=a.fD;a.x=a.jB;a.jB=a.dr;FU(a);}}
function G$(a){return a.fD===null?0:1;}
function K2(a){return a.fq===null?0:1;}
function Bl(a){FU(a);return a.m9;}
function Gm(a){var b;b=a.fD;FU(a);return b;}
function FU(a){var b,c,d,e,f,g,h,$$je;a.m9=a.bk;a.bk=a.m;a.fD=a.fq;a.dr=a.jB;a.jB=a.x;while(true){b=0;c=a.x>=a.bg.data.length?0:L1(a);a.m=c;a.fq=null;if(a.ft==4){if(c!=92)return;c=a.x;d=a.bg.data;c=c>=d.length?0:d[B9(a)];a.m=c;switch(c){case 69:break;default:a.m=92;a.x=a.j5;return;}a.ft=a.vC;a.m=a.x>(a.bg.data.length-2|0)?0:L1(a);}a:{c=a.m;if(c!=92){e=a.ft;if(e==1)switch(c){case 36:a.m=(-536870876);break a;case 40:if(a.bg.data[a.x]!=63){a.m=(-2147483608);break a;}B9(a);c=a.bg.data[a.x];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.m=(-134217688);B9(a);break b;default:N(Cl(C(21),FZ(a),a.x));}a.m=(-67108824);B9(a);}else{switch(c){case 33:break;case 60:B9(a);c=a.bg.data[a.x];e=1;break b;case 61:a.m=(-536870872);B9(a);break b;case 62:a.m=(-33554392);B9(a);break b;default:f=ALm(a);a.m=f;if(f<256){a.he=f;f=f<<16;a.m=f;a.m=(-1073741784)|f;break b;}f=f&255;a.m=f;a.he=f;f=f<<16;a.m=f;a.m=(-16777176)|f;break b;}a.m=(-268435416);B9(a);}}if(!e)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e
=a.x;d=a.bg.data;switch(e>=d.length?42:d[e]){case 43:a.m=c|(-2147483648);B9(a);break a;case 63:a.m=c|(-1073741824);B9(a);break a;default:}a.m=c|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);X8(a,2);break a;case 93:if(e!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fq=AHt(a,c);break a;case 124:a.m=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{c=a.x>=(a.bg.data.length-2|0)?(-1):L1(a);c:{a.m=c;switch(c){case -1:N(Cl(C(21),FZ(a),a.x));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=AGr(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ft!=1)break a;a.m=(-2147483648)|c;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cl(C(21),FZ(a),a.x));case 68:case 83:case 87:case 100:case 115:case 119:a.fq=Se(EB(a.bg,
a.j5,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.vC=a.ft;a.ft=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:c=a.x;d=a.bg.data;if(c>=(d.length-2|0))N(Cl(C(21),FZ(a),a.x));a.m=d[B9(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=YJ(a,4);break a;case 120:a.m=YJ(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=AJ7(a);h=0;if(a.m==80)h=1;try{a.fq=Se(g,h);}catch($$e){$$je=EW($$e);if($$je instanceof MN){N(Cl(C(21),FZ(a),a.x));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function AJ7(a){var b,c,d,e,f,g;b=new K;GN(b,10);c=a.x;d=a.bg;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EB(d,B9(a),1);f=new K;M(f);H(H(f,C(462)),b);return L(f);}B9(a);c=0;a:{while(true){g=a.x;d=a.bg.data;if(g>=(d.length-2|0))break;c=d[B9(a)];if(c==125)break a;BN(b,c);}}if(c!=125)N(Cl(C(21),a.bQ,a.x));}if(!b.M)N(Cl(C(21),a.bQ,a.x));f=L(b);if(J(f)==1){b=new K;M(b);H(H(b,C(462)),f);return L(b);}b:{c:{if(J(f)>3){if(ND(f,C(462)))break c;if(ND(f,C(463)))break c;}break b;}f=Dw(f,2);}return f;}
function AHt(a,b){var c,d,e,f,g,$$je;c=new K;GN(c,4);d=(-1);e=2147483647;a:{while(true){f=a.x;g=a.bg.data;if(f>=g.length)break a;b=g[B9(a)];if(b==125)break a;if(b==44&&d<0)try{d=KU(Ec(c),10);AHz(c,0,AIC(c));continue;}catch($$e){$$je=EW($$e);if($$je instanceof Du){break;}else{throw $$e;}}BN(c,b&65535);}N(Cl(C(21),a.bQ,a.x));}if(b!=125)N(Cl(C(21),a.bQ,a.x));if(c.M>0)b:{try{e=KU(Ec(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EW($$e);if($$je instanceof Du){}else{throw $$e;}}N(Cl(C(21),a.bQ,a.x));}else if
(d<0)N(Cl(C(21),a.bQ,a.x));if((d|e|(e-d|0))<0)N(Cl(C(21),a.bQ,a.x));b=a.x;g=a.bg.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.m=(-2147483525);B9(a);break c;case 63:a.m=(-1073741701);B9(a);break c;default:}a.m=(-536870789);}c=new WI;c.fN=d;c.fM=e;return c;}
function FZ(a){return a.bQ;}
function DD(a){return !a.bk&&!a.m&&a.x==a.zJ&&!G$(a)?1:0;}
function Ny(b){return b<0?0:1;}
function Fo(a){return !DD(a)&&!G$(a)&&Ny(a.bk)?1:0;}
function XJ(a){var b;b=a.bk;return b<=56319&&b>=55296?1:0;}
function ACp(a){var b;b=a.bk;return b<=57343&&b>=56320?1:0;}
function SE(b){return b<=56319&&b>=55296?1:0;}
function Qm(b){return b<=57343&&b>=56320?1:0;}
function YJ(a,b){var c,d,e,f,$$je;c=new K;GN(c,b);d=a.bg.data.length-2|0;e=0;while(true){f=BL(e,b);if(f>=0)break;if(a.x>=d)break;BN(c,a.bg.data[B9(a)]);e=e+1|0;}if(!f)a:{try{b=KU(Ec(c),16);}catch($$e){$$je=EW($$e);if($$je instanceof Du){break a;}else{throw $$e;}}return b;}N(Cl(C(21),a.bQ,a.x));}
function AGr(a){var b,c,d,e,f,g;b=3;c=1;d=a.bg.data;e=d.length-2|0;f=AB$(d[a.x],8);switch(f){case -1:break;default:if(f>3)b=2;B9(a);a:{while(true){if(c>=b)break a;g=a.x;if(g>=e)break a;g=AB$(a.bg.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B9(a);c=c+1|0;}}return f;}N(Cl(C(21),a.bQ,a.x));}
function ALm(a){var b,c,d,e;b=1;c=a.he;a:while(true){d=a.x;e=a.bg.data;if(d>=e.length)N(Cl(C(21),a.bQ,d));b:{c:{switch(e[d]){case 41:B9(a);return c|256;case 45:if(!b)N(Cl(C(21),a.bQ,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B9(a);}B9(a);return c;}
function B9(a){var b,c,d,e,f;b=a.x;a.j5=b;if(!(a.he&4))a.x=b+1|0;else{c=a.bg.data.length-2|0;a.x=b+1|0;a:while(true){d=a.x;if(d<c&&RN(a.bg.data[d])){a.x=a.x+1|0;continue;}d=a.x;if(d>=c)break;e=a.bg.data;if(e[d]!=35)break;a.x=d+1|0;while(true){f=a.x;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.x=f+1|0;}}}return a.j5;}
function AKZ(b){return A9v.Ie(b);}
function L1(a){var b,c,d,e;b=a.bg.data[B9(a)];if(CU(b)){c=a.j5+1|0;d=a.bg.data;if(c<d.length){e=d[c];if(Dl(e)){B9(a);return EN(b,e);}}}return b;}
function PX(a){return a.dr;}
function Kn(){var a=this;BU.call(a);a.Dq=null;a.C8=null;a.s2=0;}
function Cl(a,b,c){var d=new Kn();MT(d,a,b,c);return d;}
function MT(a,b,c,d){Y(a);a.s2=(-1);a.Dq=b;a.C8=c;a.s2=d;}
function XM(){B.call(this);this.wA=null;}
function ASs(a,b){var c,d;c=a.wA;c.mO=b;Hy(c.dK,b.qa);Hy(c.dJ,c.mO.qb);b=c.tV;d=c.mO;b.gY=d;c.eG.eu=d;}
var R6=G(C2);
function AVa(a,b,c,d){var e;e=a.ep;B0(d,e,b-DE(d,e)|0);return a.e.c(b,c,d);}
function A0L(a,b){return 0;}
var AD8=G(C2);
function AWm(a,b,c,d){return b;}
var QU=G(C2);
function AMO(a,b,c,d){if(DE(d,a.ep)!=b)b=(-1);return b;}
function SO(){C2.call(this);this.xg=0;}
function AVd(a,b,c,d){var e;e=a.ep;B0(d,e,b-DE(d,e)|0);a.xg=b;return b;}
function AZT(a,b){return 0;}
var F9=G(C2);
function ATx(a,b,c,d){if(d.ma!=1&&b!=d.y)return (-1);d.ky=1;M4(d,0,b);return b;}
function Cc(){BS.call(this);this.bI=0;}
function D0(a){B6(a);a.bI=1;}
function A24(a,b,c,d){var e;if((b+a.ca()|0)>d.y){d.dN=1;return (-1);}e=a.by(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function A1m(a){return a.bI;}
function APm(a,b){return 1;}
var AHe=G(Cc);
function HZ(a){var b=new AHe();AY0(b,a);return b;}
function AY0(a,b){NN(a,b);a.bI=1;a.jS=1;a.bI=0;}
function A03(a,b,c){return 0;}
function AW9(a,b,c,d){var e,f,g;e=d.y;f=d.c9;while(true){g=BL(b,e);if(g>0)return (-1);if(g<0&&Dl(P(c,b))&&b>f&&CU(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AWi(a,b,c,d,e){var f,g;f=e.y;g=e.c9;while(true){if(c<b)return (-1);if(c<f&&Dl(P(d,c))&&c>g&&CU(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AVc(a,b){return 0;}
function B8(){var a=this;BS.call(a);a.bK=null;a.e0=null;a.bd=0;}
function A3X(a,b){var c=new B8();F$(c,a,b);return c;}
function F$(a,b,c){B6(a);a.bK=b;a.e0=c;a.bd=c.ep;}
function AOI(a,b,c,d){var e,f,g,h;if(a.bK===null)return (-1);e=Gx(d,a.bd);DZ(d,a.bd,b);f=a.bK.q;g=0;while(true){if(g>=f){DZ(d,a.bd,e);return (-1);}h=(BH(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ARx(a,b){a.e0.e=b;}
function AYD(a,b){var c;a:{c=a.bK;if(c!==null){c=B7(c);while(true){if(!B_(c))break a;if(!(Ca(c)).b2(b))continue;else return 1;}}}return 0;}
function AR1(a,b){return I_(b,a.bd)>=0&&Gx(b,a.bd)==I_(b,a.bd)?0:1;}
function AM9(a){var b,c,d,e;a.cz=1;b=a.e0;if(b!==null&&!b.cz)KE(b);a:{b=a.bK;if(b!==null){c=b.q;d=0;while(true){if(d>=c)break a;b=BH(a.bK,d);e=b.gB();if(e===null)e=b;else{b.cz=1;EL(a.bK,d);AJE(a.bK,d,e);}if(!e.cz)e.eW();d=d+1|0;}}}if(a.e!==null)KE(a);}
var Ky=G(B8);
function ARl(a,b,c,d){var e,f,g,h;e=DE(d,a.bd);B0(d,a.bd,b);f=a.bK.q;g=0;while(true){if(g>=f){B0(d,a.bd,e);return (-1);}h=(BH(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A0r(a,b){return !DE(b,a.bd)?0:1;}
var D$=G(Ky);
function AWF(a,b,c,d){var e,f,g;e=DE(d,a.bd);B0(d,a.bd,b);f=a.bK.q;g=0;while(g<f){if((BH(a.bK,g)).c(b,c,d)>=0)return a.e.c(a.e0.xg,c,d);g=g+1|0;}B0(d,a.bd,e);return (-1);}
function A0k(a,b){a.e=b;}
var Ww=G(D$);
function ARv(a,b,c,d){var e,f;e=a.bK.q;f=0;while(f<e){if((BH(a.bK,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ATr(a,b){return 0;}
var ACY=G(D$);
function AMF(a,b,c,d){var e,f;e=a.bK.q;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((BH(a.bK,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A1q(a,b){return 0;}
var ZK=G(D$);
function AM7(a,b,c,d){var e,f,g,h;e=a.bK.q;f=d.kB?0:d.c9;a:{g=a.e.c(b,c,d);if(g>=0){B0(d,a.bd,b);h=0;while(true){if(h>=e)break a;if((BH(a.bK,h)).cC(f,b,c,d)>=0){B0(d,a.bd,(-1));return g;}h=h+1|0;}}}return (-1);}
function A3g(a,b){return 0;}
var Te=G(D$);
function AUT(a,b,c,d){var e,f;e=a.bK.q;B0(d,a.bd,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((BH(a.bK,f)).cC(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A0C(a,b){return 0;}
function HP(){B8.call(this);this.dh=null;}
function A5k(a,b){var c=new HP();AFb(c,a,b);return c;}
function AFb(a,b,c){B6(a);a.dh=b;a.e0=c;a.bd=c.ep;}
function ALX(a,b,c,d){var e,f;e=Gx(d,a.bd);DZ(d,a.bd,b);f=a.dh.c(b,c,d);if(f>=0)return f;DZ(d,a.bd,e);return (-1);}
function AQe(a,b,c,d){var e;e=a.dh.cs(b,c,d);if(e>=0)DZ(d,a.bd,e);return e;}
function A0N(a,b,c,d,e){var f;f=a.dh.cC(b,c,d,e);if(f>=0)DZ(e,a.bd,f);return f;}
function AYA(a,b){return a.dh.b2(b);}
function AZP(a){var b;b=new Pe;AFb(b,a.dh,a.e0);a.e=b;return b;}
function ATX(a){var b;a.cz=1;b=a.e0;if(b!==null&&!b.cz)KE(b);b=a.dh;if(b!==null&&!b.cz){b=b.gB();if(b!==null){a.dh.cz=1;a.dh=b;}a.dh.eW();}}
var G7=G();
function Z(){var a=this;G7.call(a);a.bi=0;a.cx=0;a.O=null;a.mi=null;a.mL=null;a.R=0;}
var A9w=null;function Qf(){Qf=Bn(Z);ANq();}
function By(a){var b;Qf();b=new ADz;b.D=BQ(64);a.O=b;}
function AVL(a){return null;}
function AVp(a){return a.O;}
function AJ0(a){var b,c,d,e,f;if(!a.cx)b=Ij(a.O,0)>=2048?0:1;else{a:{c=a.O;b=0;d=c.bt;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=I7(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+I7(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AXE(a){return a.R;}
function A1i(a){return a;}
function AEF(a){var b,c;if(a.mL===null){b=a.fV();c=new Va;c.Fk=a;c.xr=b;By(c);a.mL=c;EM(c,a.cx);}return a.mL;}
function JE(a){var b,c;if(a.mi===null){b=a.fV();c=new U9;c.Dt=a;c.AY=b;c.vJ=a;By(c);a.mi=c;EM(c,a.bi);a.mi.R=a.R;}return a.mi;}
function A2s(a){return 0;}
function EM(a,b){var c;c=a.bi;if(c^b){a.bi=c?0:1;a.cx=a.cx?0:1;}if(!a.R)a.R=1;return a;}
function AOh(a){return a.bi;}
function Nw(b,c){Qf();return b.n(c);}
function J7(b,c){var d,e;Qf();if(b.dV()!==null&&c.dV()!==null){b=b.dV();c=c.dV();d=Be(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Se(b,c){var d,e,f;Qf();d=0;while(true){ASo();e=A9x.data;if(d>=e.length){f=new MN;Bm(f,C(21));f.D4=C(21);f.Fo=b;N(f);}e=e[d].data;if(Bj(b,e[0]))break;d=d+1|0;}return AKD(e[1],c);}
function ANq(){var b;b=new Hh;ASo();A9w=b;}
function AE6(){var a=this;Z.call(a);a.pD=0;a.q2=0;a.h0=0;a.no=0;a.eA=0;a.gy=0;a.K=null;a.bD=null;}
function DF(){var a=new AE6();AUr(a);return a;}
function A1S(a,b){var c=new AE6();ANf(c,a,b);return c;}
function AUr(a){By(a);a.K=A3i();}
function ANf(a,b,c){By(a);a.K=A3i();a.pD=b;a.q2=c;}
function CJ(a,b){a:{if(a.pD){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eA){OI(a.K,JF(b&65535));break a;}LT(a.K,JF(b&65535));break a;}if(a.q2&&b>128){a.h0=1;b=G3(G1(b));}}}if(!(!SE(b)&&!Qm(b))){if(a.no)OI(a.O,b-55296|0);else LT(a.O,b-55296|0);}if(a.eA)OI(a.K,b);else LT(a.K,b);if(!a.R&&Mn(b))a.R=1;return a;}
function ALo(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(a.no){if(!b.cx)Gh(a.O,b.fV());else Dq(a.O,b.fV());}else if(!b.cx)GB(a.O,b.fV());else{Gu(a.O,b.fV());Dq(a.O,b.fV());a.cx=a.cx?0:1;a.no=1;}if(!a.gy&&b.dV()!==null){if(a.eA){if(!b.bi)Gh(a.K,b.dV());else Dq(a.K,b.dV());}else if(!b.bi)GB(a.K,b.dV());else{Gu(a.K,b.dV());Dq(a.K,b.dV());a.bi=a.bi?0:1;a.eA=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new X0;e.Es=a;e.BD=c;e.vx=d;e.vn=b;By(e);a.bD=e;}else{e=new X2;e.FB=a;e.tq=c;e.y7=d;e.yI=b;By(e);a.bD=e;}}else{if(c&&!a.eA
&&OA(a.K)){d=new XX;d.EU=a;d.y_=b;By(d);a.bD=d;}else if(!c){d=new XV;d.pe=a;d.oE=c;d.xV=b;By(d);a.bD=d;}else{d=new XW;d.nP=a;d.mD=c;d.vq=b;By(d);a.bD=d;}a.gy=1;}}return a;}
function Cb(a,b,c){var d,e,f,g,h;if(b>c){d=new BU;Y(d);N(d);}a:{b:{if(!a.pD){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CJ(a,b);b=b+1|0;}}if(!a.eA)IT(a.K,b,c+1|0);else{d=a.K;c=c+1|0;if(b>c){d=new BI;Y(d);N(d);}e=d.bt;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(J2(d,b)|IM(d,f));}else{h=d.D.data;h[g]=h[g]&J2(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&IM(d,f);}}Hj(d);}}}}return a;}
function AIb(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(b.h0)a.h0=1;c=a.cx;if(!(c^b.cx)){if(!c)GB(a.O,b.O);else Dq(a.O,b.O);}else if(c)Gh(a.O,b.O);else{Gu(a.O,b.O);Dq(a.O,b.O);a.cx=1;}if(!a.gy&&C6(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)GB(a.K,C6(b));else Dq(a.K,C6(b));}else if(c)Gh(a.K,C6(b));else{Gu(a.K,C6(b));Dq(a.K,C6(b));a.bi=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P9;e.Cm=a;e.uM=c;e.A7=d;e.vS=b;By(e);a.bD=e;}else{e=new Qr;e.CB=a;e.Bs=c;e.qJ=d;e.q4=b;By(e);a.bD=e;}}else{if(!a.eA&&OA(a.K)){if(!c){d=new XY;d.FC
=a;d.sA=b;By(d);a.bD=d;}else{d=new XZ;d.Ev=a;d.Bj=b;By(d);a.bD=d;}}else if(!c){d=new X3;d.uP=a;d.tA=b;d.y9=c;By(d);a.bD=d;}else{d=new X4;d.tU=a;d.t3=b;d.z6=c;By(d);a.bD=d;}a.gy=1;}}}
function Vl(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(b.h0)a.h0=1;c=a.cx;if(!(c^b.cx)){if(!c)Dq(a.O,b.O);else GB(a.O,b.O);}else if(!c)Gh(a.O,b.O);else{Gu(a.O,b.O);Dq(a.O,b.O);a.cx=0;}if(!a.gy&&C6(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)Dq(a.K,C6(b));else GB(a.K,C6(b));}else if(!c)Gh(a.K,C6(b));else{Gu(a.K,C6(b));Dq(a.K,C6(b));a.bi=0;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P_;e.Er=a;e.AD=c;e.xp=d;e.to=b;By(e);a.bD=e;}else{e=new Qa;e.Ey=a;e.Ah=c;e.wU=d;e.Az=b;By(e);a.bD=e;}}else{if(!a.eA&&OA(a.K)){if(!c){d=new P7;d.CE
=a;d.yj=b;By(d);a.bD=d;}else{d=new P8;d.Fz=a;d.sm=b;By(d);a.bD=d;}}else if(!c){d=new Qb;d.B_=a;d.BB=b;d.tY=c;By(d);a.bD=d;}else{d=new P6;d.tX=a;d.Am=b;d.zk=c;By(d);a.bD=d;}a.gy=1;}}}
function Dc(a,b){var c;c=a.bD;if(c!==null)return a.bi^c.n(b);return a.bi^DW(a.K,b);}
function C6(a){if(!a.gy)return a.K;return null;}
function AW5(a){return a.O;}
function ATd(a){var b,c;if(a.bD!==null)return a;b=C6(a);c=new P$;c.Ee=a;c.lu=b;By(c);return EM(c,a.bi);}
function AZc(a){var b,c,d;b=new K;M(b);c=Ij(a.K,0);while(c>=0){J9(b,HN(c));BN(b,124);c=Ij(a.K,c+1|0);}d=b.M;if(d>0)UZ(b,d-1|0);return L(b);}
function AOk(a){return a.h0;}
function MN(){var a=this;Bu.call(a);a.D4=null;a.Fo=null;}
function Em(){BS.call(this);this.N=null;}
function Dt(a,b,c,d){NN(a,c);a.N=b;a.jS=d;}
function A29(a){return a.N;}
function ASy(a,b){return !a.N.b2(b)&&!a.e.b2(b)?0:1;}
function A1T(a,b){return 1;}
function AQx(a){var b;a.cz=1;b=a.e;if(b!==null&&!b.cz){b=b.gB();if(b!==null){a.e.cz=1;a.e=b;}a.e.eW();}b=a.N;if(b!==null){if(!b.cz){b=b.gB();if(b!==null){a.N.cz=1;a.N=b;}a.N.eW();}else if(b instanceof HP&&b.e0.oY)a.N=b.e;}}
function Dd(){Em.call(this);this.be=null;}
function A4b(a,b,c){var d=new Dd();Fh(d,a,b,c);return d;}
function Fh(a,b,c,d){Dt(a,b,c,d);a.be=b;}
function AUU(a,b,c,d){var e,f;e=0;a:{while((b+a.be.ca()|0)<=d.y){f=a.be.by(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.be.ca()|0;e=e+(-1)|0;}return f;}
function FV(){Dd.call(this);this.kV=null;}
function A4T(a,b,c,d){var e=new FV();Si(e,a,b,c,d);return e;}
function Si(a,b,c,d,e){Fh(a,c,d,e);a.kV=b;}
function AVy(a,b,c,d){var e,f,g,h,i;e=a.kV;f=e.fN;g=e.fM;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.ca()|0)>d.y)break a;i=a.be.by(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.be.ca()|0;h=h+(-1)|0;}return i;}if((b+a.be.ca()|0)>d.y){d.dN=1;return (-1);}i=a.be.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var C3=G(Em);
function AU5(a,b,c,d){var e;if(!a.N.J(d))return a.e.c(b,c,d);e=a.N.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var E8=G(Dd);
function AYQ(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function AUA(a,b){a.e=b;a.N.T(b);}
var Vb=G(Dd);
function A21(a,b,c,d){while((b+a.be.ca()|0)<=d.y&&a.be.by(b,c)>0){b=b+a.be.ca()|0;}return a.e.c(b,c,d);}
function AQX(a,b,c,d){var e,f,g;e=a.e.cs(b,c,d);if(e<0)return (-1);f=e-a.be.ca()|0;while(f>=b&&a.be.by(f,c)>0){g=f-a.be.ca()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.nR=null;a.m$=null;}
function AKD(a,b){if(!b&&a.nR===null)a.nR=a.G();else if(b&&a.m$===null)a.m$=EM(a.G(),1);if(b)return a.m$;return a.nR;}
var Du=G(BU);
function WI(){var a=this;G7.call(a);a.fN=0;a.fM=0;}
function AZi(a){var b,c,d,e,f;b=a.fN;c=a.fM;d=c!=2147483647?J$(c):C(21);e=new K;M(e);BN(e,123);f=U(e,b);BN(f,44);BN(H(f,d),125);return L(e);}
var XK=G(BS);
function APF(a,b,c,d){return b;}
function AZN(a,b){return 0;}
function ADz(){var a=this;B.call(a);a.D=null;a.bt=0;}
function A3i(){var a=new ADz();AV9(a);return a;}
function AV9(a){a.D=BQ(0);}
function LT(a,b){var c,d;c=b/32|0;if(b>=a.bt){J_(a,c+1|0);a.bt=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function IT(a,b,c){var d,e,f,g,h;d=BL(b,c);if(d>0){e=new BI;Y(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bt){J_(a,f+1|0);a.bt=c;}if(d==f){g=a.D.data;g[d]=g[d]|IM(a,b)&J2(a,c);}else{g=a.D.data;g[d]=g[d]|IM(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|J2(a,c);}}}
function IM(a,b){return (-1)<<(b%32|0);}
function J2(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function OI(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bt-1|0))Hj(a);}}
function DW(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Ij(a,b){var c,d,e,f;c=a.bt;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return I7(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+I7(e[f])|0;f=f+1|0;}return (-1);}
function J_(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.D=Jm(a.D,c);}
function Hj(a){var b,c,d;b=(a.bt+31|0)/32|0;a.bt=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Xo(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bt=a.bt-32|0;}a.bt=a.bt-d|0;}}
function Dq(a,b){var c,d,e,f;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bt=Be(a.bt,b.bt);Hj(a);}
function Gh(a,b){var c,d,e;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}Hj(a);}
function GB(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;J_(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function Gu(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;J_(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}Hj(a);}
function OA(a){return a.bt?0:1;}
function O3(){var a=this;B8.call(a);a.sp=null;a.Ed=0;}
function Rj(){var a=this;B8.call(a);a.n8=null;a.pO=null;}
function AGy(a,b){var c=new Rj();AHQ(c,a,b);return c;}
function AHQ(a,b,c){B6(a);a.n8=b;a.pO=c;}
function AMp(a,b,c,d){var e,f,g,h,i;e=a.n8.c(b,c,d);if(e<0)a:{f=a.pO;g=d.c9;e=d.y;h=b+1|0;e=BL(h,e);if(e>0){d.dN=1;e=(-1);}else{i=P(c,b);if(!f.sp.n(i))e=(-1);else{if(CU(i)){if(e<0&&Dl(P(c,h))){e=(-1);break a;}}else if(Dl(i)&&b>g&&CU(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AZG(a,b){a.e=b;a.pO.e=b;a.n8.T(b);}
function AMT(a,b){return 1;}
function AMH(a,b){return 1;}
function D3(){var a=this;B8.call(a);a.ea=null;a.C1=0;}
function AYi(a){var b=new D3();ABZ(b,a);return b;}
function ABZ(a,b){B6(a);a.ea=b.l5();a.C1=b.bi;}
function AW0(a,b,c,d){var e,f,g,h;e=d.y;if(b<e){f=b+1|0;g=P(c,b);if(a.n(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Jw(g,f)&&a.n(EN(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AOw(a,b){return a.ea.n(b);}
function AMl(a,b){if(b instanceof Ee)return Nw(a.ea,b.g3);if(b instanceof EK)return Nw(a.ea,b.dI);if(b instanceof D3)return J7(a.ea,b.ea);if(!(b instanceof ED))return 1;return J7(a.ea,b.gs);}
function APy(a){return a.ea;}
function A1c(a,b){a.e=b;}
function AOb(a,b){return 1;}
var MK=G(D3);
function APn(a,b){return a.ea.n(G3(G1(b)));}
function AE0(){var a=this;Cc.call(a);a.yR=null;a.CR=0;}
function AOU(a){var b=new AE0();AQ5(b,a);return b;}
function AQ5(a,b){D0(a);a.yR=b.l5();a.CR=b.bi;}
function AYn(a,b,c){return !a.yR.n(FO(Fs(P(c,b))))?(-1):1;}
function ED(){var a=this;Cc.call(a);a.gs=null;a.Db=0;}
function AS_(a){var b=new ED();ARO(b,a);return b;}
function ARO(a,b){D0(a);a.gs=b.l5();a.Db=b.bi;}
function Wm(a,b,c){return !a.gs.n(P(c,b))?(-1):1;}
function ARz(a,b){if(b instanceof EK)return Nw(a.gs,b.dI);if(b instanceof ED)return J7(a.gs,b.gs);if(!(b instanceof D3)){if(!(b instanceof Ee))return 1;return 0;}return J7(a.gs,b.ea);}
function X7(){var a=this;B8.call(a);a.i$=null;a.p2=null;a.kT=0;}
function A1G(a,b){var c=new X7();AU6(c,a,b);return c;}
function AU6(a,b,c){B6(a);a.i$=b;a.kT=c;}
function AQl(a,b){a.e=b;}
function Rx(a){if(a.p2===null)a.p2=Ho(a.i$);return a.p2;}
function ALG(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.y;f=BQ(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DX([k,l]):DX([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.kT;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.i$.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.kT==3){k=f[0];m=a.i$.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.kT==2){b=f[0];m=a.i$.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AVT(a,b){return b instanceof X7&&!Bj(Rx(b),Rx(a))?0:1;}
function ATi(a,b){return 1;}
function EK(){Cc.call(this);this.dI=0;}
function AFd(a){var b=new EK();ARS(b,a);return b;}
function ARS(a,b){D0(a);a.dI=b;}
function AYb(a){return 1;}
function AOS(a,b,c){return a.dI!=P(c,b)?(-1):1;}
function ANZ(a,b,c,d){var e,f,g;if(!(c instanceof BK))return IH(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=J5(c,a.dI,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function APA(a,b,c,d,e){var f;if(!(d instanceof BK))return IP(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hs(d,a.dI,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ATa(a,b){if(b instanceof EK)return b.dI!=a.dI?0:1;if(!(b instanceof ED)){if(b instanceof D3)return b.n(a.dI);if(!(b instanceof Ee))return 1;return 0;}return Wm(b,0,Vv(a.dI))<=0?0:1;}
function AHC(){Cc.call(this);this.wK=0;}
function A0m(a){var b=new AHC();AY$(b,a);return b;}
function AY$(a,b){D0(a);a.wK=FO(Fs(b));}
function AUI(a,b,c){return a.wK!=FO(Fs(P(c,b)))?(-1):1;}
function AEn(){var a=this;Cc.call(a);a.vY=0;a.xn=0;}
function AWc(a){var b=new AEn();ASl(b,a);return b;}
function ASl(a,b){D0(a);a.vY=b;a.xn=JF(b);}
function ALP(a,b,c){return a.vY!=P(c,b)&&a.xn!=P(c,b)?(-1):1;}
function FY(){var a=this;B8.call(a);a.jL=0;a.m4=null;a.mA=null;a.mu=0;}
function A5Q(a,b){var c=new FY();PO(c,a,b);return c;}
function PO(a,b,c){B6(a);a.jL=1;a.mA=b;a.mu=c;}
function A2A(a,b){a.e=b;}
function ARk(a,b,c,d){var e,f,g,h,i,j,k,l;e=BQ(4);f=d.y;if(b>=f)return (-1);g=Lo(a,b,c,f);h=b+a.jL|0;i=AKZ(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C7(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Lo(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AKZ(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.jL|0;if(h>=f){b=k;break a;}g=Lo(a,h,c,f);b=k;}}}if(b!=a.mu)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.mA.data[g])break;g=g+1|0;}return (-1);}
function Vj(a){var b,c;if(a.m4===null){b=new K;M(b);c=0;while(c<a.mu){J9(b,HN(a.mA.data[c]));c=c+1|0;}a.m4=L(b);}return a.m4;}
function Lo(a,b,c,d){var e,f,g;a.jL=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Jw(e,f)){g=B5(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CU(g[0])&&Dl(g[1])?EN(g[0],g[1]):g[0];a.jL=2;}}return e;}
function APG(a,b){return b instanceof FY&&!Bj(Vj(b),Vj(a))?0:1;}
function A0l(a,b){return 1;}
var VF=G(FY);
var ABx=G(FY);
var Wi=G(C3);
function AWq(a,b,c,d){var e;while(true){e=a.N.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var YH=G(C3);
function AY7(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.N.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var GE=G(C3);
function A1a(a,b,c,d){var e;if(!a.N.J(d))return a.e.c(b,c,d);e=a.N.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function A16(a,b){a.e=b;a.N.T(b);}
var QE=G(GE);
function APw(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AZl(a,b){a.e=b;}
function Go(){var a=this;C3.call(a);a.ha=null;a.dO=0;}
function A9y(a,b,c,d,e){var f=new Go();MJ(f,a,b,c,d,e);return f;}
function MJ(a,b,c,d,e,f){Dt(a,c,d,e);a.ha=b;a.dO=f;}
function A3d(a,b,c,d){var e,f;e=WG(d,a.dO);if(!a.N.J(d))return a.e.c(b,c,d);if(e>=a.ha.fM)return a.e.c(b,c,d);f=a.dO;e=e+1|0;ES(d,f,e);f=a.N.c(b,c,d);if(f>=0){ES(d,a.dO,0);return f;}f=a.dO;e=e+(-1)|0;ES(d,f,e);if(e>=a.ha.fN)return a.e.c(b,c,d);ES(d,a.dO,0);return (-1);}
var Pj=G(Go);
function AO6(a,b,c,d){var e,f,g;e=0;f=a.ha.fM;a:{while(true){g=a.N.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.ha.fN)return (-1);return a.e.c(b,c,d);}
var R0=G(C3);
function AT3(a,b,c,d){var e;if(!a.N.J(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.N.c(b,c,d);}
var Zm=G(GE);
function AMU(a,b,c,d){var e;if(!a.N.J(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.N.c(b,c,d);return e;}
var TT=G(Go);
function AVi(a,b,c,d){var e,f,g;e=WG(d,a.dO);if(!a.N.J(d))return a.e.c(b,c,d);f=a.ha;if(e>=f.fM){ES(d,a.dO,0);return a.e.c(b,c,d);}if(e<f.fN){ES(d,a.dO,e+1|0);g=a.N.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){ES(d,a.dO,0);return g;}ES(d,a.dO,e+1|0);g=a.N.c(b,c,d);}return g;}
var R1=G(Em);
function A25(a,b,c,d){var e;e=d.y;if(e>b)return a.e.cC(b,e,c,d);return a.e.c(b,c,d);}
function ASX(a,b,c,d){var e;e=d.y;if(a.e.cC(b,e,c,d)>=0)return b;return (-1);}
function XR(){Em.call(this);this.m8=null;}
function ARA(a,b,c,d){var e,f;e=d.y;f=ACc(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cC(b,e,c,d);return a.e.c(b,c,d);}
function ALH(a,b,c,d){var e,f,g,h;e=d.y;f=a.e.cs(b,c,d);if(f<0)return (-1);g=ACc(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.e.cC(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.m8.iR(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function ACc(a,b,c,d){while(true){if(b>=c)return (-1);if(a.m8.iR(P(d,b)))break;b=b+1|0;}return b;}
var FF=G();
var A9z=null;var A9A=null;function Ys(b){var c;if(!(b&1)){c=A9A;if(c!==null)return c;c=new ACw;A9A=c;return c;}c=A9z;if(c!==null)return c;c=new ACv;A9z=c;return c;}
var AEk=G(Dd);
function AMc(a,b,c,d){var e;a:{while(true){if((b+a.be.ca()|0)>d.y)break a;e=a.be.by(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var U7=G(E8);
function AQM(a,b,c,d){var e;if((b+a.be.ca()|0)<=d.y){e=a.be.by(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var Yf=G(FV);
function A0Q(a,b,c,d){var e,f,g,h,i;e=a.kV;f=e.fN;g=e.fM;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.ca()|0)>d.y)break a;i=a.be.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.be.ca()|0)>d.y){d.dN=1;return (-1);}i=a.be.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Zl=G(Dd);
function ARw(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.be.ca()|0)<=d.y){e=a.be.by(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ABI=G(E8);
function AMj(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.N.c(b,c,d);}
var RS=G(FV);
function A05(a,b,c,d){var e,f,g,h,i,j;e=a.kV;f=e.fN;g=e.fM;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.be.ca()|0)<=d.y){i=a.be.by(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.ca()|0)>d.y){d.dN=1;return (-1);}j=a.be.by(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Lm=G(BS);
function AYC(a,b,c,d){if(b&&!(d.gz&&b==d.c9))return (-1);return a.e.c(b,c,d);}
function AX4(a,b){return 0;}
function AFj(){BS.call(this);this.vz=0;}
function A1x(a){var b=new AFj();APq(b,a);return b;}
function APq(a,b){B6(a);a.vz=b;}
function AVJ(a,b,c,d){var e,f,g;e=b<d.y?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.kB?0:d.c9;return (e!=32&&!Zp(a,e,b,g,c)?0:1)^(f!=32&&!Zp(a,f,b-1|0,g,c)?0:1)^a.vz?(-1):a.e.c(b,c,d);}
function AVS(a,b){return 0;}
function Zp(a,b,c,d,e){var f;if(!KT(b)&&b!=95){a:{if(CG(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(KT(f))return 0;if(CG(f)!=6)return 1;}}return 1;}return 0;}
var XO=G(BS);
function APp(a,b,c,d){if(b!=d.iX)return (-1);return a.e.c(b,c,d);}
function AUs(a,b){return 0;}
function Vy(){BS.call(this);this.hf=0;}
function A4k(a){var b=new Vy();AKS(b,a);return b;}
function AKS(a,b){B6(a);a.hf=b;}
function AZ$(a,b,c,d){var e,f,g;e=!d.gz?J(c):d.y;if(b>=e){B0(d,a.hf,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){B0(d,a.hf,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B0(d,a.hf,0);return a.e.c(b,c,d);}
function AWj(a,b){var c;c=!DE(b,a.hf)?0:1;B0(b,a.hf,(-1));return c;}
var ADj=G(BS);
function AZE(a,b,c,d){if(b<(d.kB?J(c):d.y))return (-1);d.dN=1;d.Fd=1;return a.e.c(b,c,d);}
function AUH(a,b){return 0;}
function W1(){BS.call(this);this.zp=null;}
function AWe(a,b,c,d){a:{if(b!=d.y){if(!b)break a;if(d.gz&&b==d.c9)break a;if(a.zp.Ak(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AOD(a,b){return 0;}
var AHn=G(B8);
function A4r(){var a=new AHn();AZu(a);return a;}
function AZu(a){B6(a);}
function AT6(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dN=1;return (-1);}g=P(c,b);if(CU(g)){h=b+2|0;if(h<=e&&Jw(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function AVV(a,b){a.e=b;}
function AZr(a){return (-2147483602);}
function AVU(a,b){return 1;}
function AE5(){B8.call(this);this.ns=null;}
function A4h(a){var b=new AE5();AM_(b,a);return b;}
function AM_(a,b){B6(a);a.ns=b;}
function AZy(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dN=1;return (-1);}g=P(c,b);if(CU(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Jw(g,h))return a.ns.iR(EN(g,h))?(-1):a.e.c(b,c,d);}}return a.ns.iR(g)?(-1):a.e.c(f,c,d);}
function A0H(a,b){a.e=b;}
function ALu(a){return (-2147483602);}
function AUi(a,b){return 1;}
function AKX(){BS.call(this);this.jG=0;}
function A31(a){var b=new AKX();AXn(b,a);return b;}
function AXn(a,b){B6(a);a.jG=b;}
function APK(a,b,c,d){var e;e=!d.gz?J(c):d.y;if(b>=e){B0(d,a.jG,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){B0(d,a.jG,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AXm(a,b){var c;c=!DE(b,a.jG)?0:1;B0(b,a.jG,(-1));return c;}
function AJ3(){BS.call(this);this.iJ=0;}
function A3P(a){var b=new AJ3();AXF(b,a);return b;}
function AXF(a,b){B6(a);a.iJ=b;}
function ARe(a,b,c,d){if((!d.gz?J(c)-b|0:d.y-b|0)<=0){B0(d,a.iJ,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);B0(d,a.iJ,1);return a.e.c(b+1|0,c,d);}
function AXg(a,b){var c;c=!DE(b,a.iJ)?0:1;B0(b,a.iJ,(-1));return c;}
function AIa(){BS.call(this);this.gM=0;}
function A3w(a){var b=new AIa();A3f(b,a);return b;}
function A3f(a,b){B6(a);a.gM=b;}
function AX0(a,b,c,d){var e,f,g;e=!d.gz?J(c)-b|0:d.y-b|0;if(!e){B0(d,a.gM,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B0(d,a.gM,0);return a.e.c(b,c,d);case 13:if(g!=10){B0(d,a.gM,0);return a.e.c(b,c,d);}B0(d,a.gM,0);return a.e.c(b,c,d);default:}return (-1);}
function ANd(a,b){var c;c=!DE(b,a.gM)?0:1;B0(b,a.gM,(-1));return c;}
function Ib(){var a=this;B8.call(a);a.qX=0;a.hB=0;}
function A5O(a,b){var c=new Ib();Ql(c,a,b);return c;}
function Ql(a,b,c){B6(a);a.qX=b;a.hB=c;}
function AMf(a,b,c,d){var e,f,g,h;e=GP(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){B0(d,a.hB,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&JF(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A0h(a,b){a.e=b;}
function GP(a,b){var c,d;c=a.qX;d=Gx(b,c);c=I_(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.nv)?Cu(b.nv,d,c):null;}
function ASf(a,b){var c;c=!DE(b,a.hB)?0:1;B0(b,a.hB,(-1));return c;}
var AK3=G(Ib);
function A4F(a,b){var c=new AK3();A1W(c,a,b);return c;}
function A1W(a,b,c){Ql(a,b,c);}
function ANh(a,b,c,d){var e,f;e=GP(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=!ABY(c,e,b)?(-1):J(e);if(f<0)return (-1);B0(d,a.hB,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ATp(a,b,c,d){var e,f;e=GP(a,d);f=d.c9;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=YI(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AL3(a,b,c,d,e){var f,g;f=GP(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=QV(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AY2(a,b){return 1;}
var AJn=G(Ib);
function A3Q(a,b){var c=new AJn();AOB(c,a,b);return c;}
function AOB(a,b,c){Ql(a,b,c);}
function AQa(a,b,c,d){var e,f;e=GP(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){B0(d,a.hB,J(e));return a.e.c(b+J(e)|0,c,d);}if(FO(Fs(P(e,f)))!=FO(Fs(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var PZ=G(GS);
function AOn(a,b,c,d,e){WL(a,b,c,d,e);return a;}
function AVM(a,b,c,d){ADI(a,b,c,d);return a;}
function AV8(a,b){M3(a,b);}
function A1l(a,b,c){ADX(a,b,c);return a;}
function ZZ(){var a=this;Cc.call(a);a.cH=null;a.o9=null;a.nC=null;}
function ANw(a,b,c){return !Ll(a,c,b)?(-1):a.bI;}
function AVH(a,b,c,d){var e,f,g;e=d.y;while(true){if(b>e)return (-1);f=P(a.cH,a.bI-1|0);a:{while(true){g=a.bI;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&Ll(a,c,b))break;b=b+AAE(a.o9,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bI|0,c,d)>=0)break;b=b+1|0;}return b;}
function AXr(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cH,0);g=(J(d)-c|0)-a.bI|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&Ll(a,d,c))break;c=c-AAE(a.nC,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bI|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AOX(a,b){var c;if(b instanceof EK)return b.dI!=P(a.cH,0)?0:1;if(b instanceof ED)return Wm(b,0,Cu(a.cH,0,1))<=0?0:1;if(!(b instanceof D3)){if(!(b instanceof Ee))return 1;return J(a.cH)>1&&b.g3==EN(P(a.cH,0),P(a.cH,1))?1:0;}a:{b:{b=b;if(!b.n(P(a.cH,0))){if(J(a.cH)<=1)break b;if(!b.n(EN(P(a.cH,0),P(a.cH,1))))break b;}c=1;break a;}c=0;}return c;}
function Ll(a,b,c){var d;d=0;while(d<a.bI){if(P(b,d+c|0)!=P(a.cH,d))return 0;d=d+1|0;}return 1;}
function AEm(){Cc.call(this);this.lX=null;}
function A5P(a){var b=new AEm();A1D(b,a);return b;}
function A1D(a,b){var c,d,e;D0(a);c=new K;M(c);d=0;while(true){e=BL(d,b.M);if(e>=0){a.lX=L(c);a.bI=c.M;return;}if(d<0)break;if(e>=0)break;BN(c,FO(Fs(b.C.data[d])));d=d+1|0;}b=new BI;Y(b);N(b);}
function AQg(a,b,c){var d;d=0;while(true){if(d>=J(a.lX))return J(a.lX);if(P(a.lX,d)!=FO(Fs(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Pm(){Cc.call(this);this.jD=null;}
function A0R(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.jD))return J(a.jD);e=P(a.jD,d);f=b+d|0;if(e!=P(c,f)&&JF(P(a.jD,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Hh=G();
var A9B=null;var A9C=null;var A9x=null;function ASo(){ASo=Bn(Hh);ANO();}
function ANO(){A9B=A4n();A9C=A47();A9x=I($rt_arraycls(B),[I(B,[C(464),A4u()]),I(B,[C(465),A3u()]),I(B,[C(466),A5B()]),I(B,[C(467),A5F()]),I(B,[C(468),A9C]),I(B,[C(469),A5c()]),I(B,[C(470),A3U()]),I(B,[C(471),A4H()]),I(B,[C(472),A4E()]),I(B,[C(473),A3C()]),I(B,[C(474),A3J()]),I(B,[C(475),A4K()]),I(B,[C(476),A4a()]),I(B,[C(477),A3q()]),I(B,[C(478),A5D()]),I(B,[C(479),A3I()]),I(B,[C(480),A5a()]),I(B,[C(481),A4S()]),I(B,[C(482),A5b()]),I(B,[C(483),A3E()]),I(B,[C(484),A5I()]),I(B,[C(485),A4N()]),I(B,[C(486),A33()]),
I(B,[C(487),A5z()]),I(B,[C(488),A5w()]),I(B,[C(489),A4o()]),I(B,[C(490),A3D()]),I(B,[C(491),A5p()]),I(B,[C(492),A9B]),I(B,[C(493),A36()]),I(B,[C(494),A4J()]),I(B,[C(495),A9B]),I(B,[C(496),A3o()]),I(B,[C(497),A9C]),I(B,[C(498),A3M()]),I(B,[C(499),R(0,127)]),I(B,[C(500),R(128,255)]),I(B,[C(501),R(256,383)]),I(B,[C(502),R(384,591)]),I(B,[C(503),R(592,687)]),I(B,[C(504),R(688,767)]),I(B,[C(505),R(768,879)]),I(B,[C(506),R(880,1023)]),I(B,[C(507),R(1024,1279)]),I(B,[C(508),R(1280,1327)]),I(B,[C(509),R(1328,1423)]),
I(B,[C(510),R(1424,1535)]),I(B,[C(511),R(1536,1791)]),I(B,[C(512),R(1792,1871)]),I(B,[C(513),R(1872,1919)]),I(B,[C(514),R(1920,1983)]),I(B,[C(515),R(2304,2431)]),I(B,[C(516),R(2432,2559)]),I(B,[C(517),R(2560,2687)]),I(B,[C(518),R(2688,2815)]),I(B,[C(519),R(2816,2943)]),I(B,[C(520),R(2944,3071)]),I(B,[C(521),R(3072,3199)]),I(B,[C(522),R(3200,3327)]),I(B,[C(523),R(3328,3455)]),I(B,[C(524),R(3456,3583)]),I(B,[C(525),R(3584,3711)]),I(B,[C(526),R(3712,3839)]),I(B,[C(527),R(3840,4095)]),I(B,[C(528),R(4096,4255)]),
I(B,[C(529),R(4256,4351)]),I(B,[C(530),R(4352,4607)]),I(B,[C(531),R(4608,4991)]),I(B,[C(532),R(4992,5023)]),I(B,[C(533),R(5024,5119)]),I(B,[C(534),R(5120,5759)]),I(B,[C(535),R(5760,5791)]),I(B,[C(536),R(5792,5887)]),I(B,[C(537),R(5888,5919)]),I(B,[C(538),R(5920,5951)]),I(B,[C(539),R(5952,5983)]),I(B,[C(540),R(5984,6015)]),I(B,[C(541),R(6016,6143)]),I(B,[C(542),R(6144,6319)]),I(B,[C(543),R(6400,6479)]),I(B,[C(544),R(6480,6527)]),I(B,[C(545),R(6528,6623)]),I(B,[C(546),R(6624,6655)]),I(B,[C(547),R(6656,6687)]),
I(B,[C(548),R(7424,7551)]),I(B,[C(549),R(7552,7615)]),I(B,[C(550),R(7616,7679)]),I(B,[C(551),R(7680,7935)]),I(B,[C(552),R(7936,8191)]),I(B,[C(553),R(8192,8303)]),I(B,[C(554),R(8304,8351)]),I(B,[C(555),R(8352,8399)]),I(B,[C(556),R(8400,8447)]),I(B,[C(557),R(8448,8527)]),I(B,[C(558),R(8528,8591)]),I(B,[C(559),R(8592,8703)]),I(B,[C(560),R(8704,8959)]),I(B,[C(561),R(8960,9215)]),I(B,[C(562),R(9216,9279)]),I(B,[C(563),R(9280,9311)]),I(B,[C(564),R(9312,9471)]),I(B,[C(565),R(9472,9599)]),I(B,[C(566),R(9600,9631)]),
I(B,[C(567),R(9632,9727)]),I(B,[C(568),R(9728,9983)]),I(B,[C(569),R(9984,10175)]),I(B,[C(570),R(10176,10223)]),I(B,[C(571),R(10224,10239)]),I(B,[C(572),R(10240,10495)]),I(B,[C(573),R(10496,10623)]),I(B,[C(574),R(10624,10751)]),I(B,[C(575),R(10752,11007)]),I(B,[C(576),R(11008,11263)]),I(B,[C(577),R(11264,11359)]),I(B,[C(578),R(11392,11519)]),I(B,[C(579),R(11520,11567)]),I(B,[C(580),R(11568,11647)]),I(B,[C(581),R(11648,11743)]),I(B,[C(582),R(11776,11903)]),I(B,[C(583),R(11904,12031)]),I(B,[C(584),R(12032,12255)]),
I(B,[C(585),R(12272,12287)]),I(B,[C(586),R(12288,12351)]),I(B,[C(587),R(12352,12447)]),I(B,[C(588),R(12448,12543)]),I(B,[C(589),R(12544,12591)]),I(B,[C(590),R(12592,12687)]),I(B,[C(591),R(12688,12703)]),I(B,[C(592),R(12704,12735)]),I(B,[C(593),R(12736,12783)]),I(B,[C(594),R(12784,12799)]),I(B,[C(595),R(12800,13055)]),I(B,[C(596),R(13056,13311)]),I(B,[C(597),R(13312,19893)]),I(B,[C(598),R(19904,19967)]),I(B,[C(599),R(19968,40959)]),I(B,[C(600),R(40960,42127)]),I(B,[C(601),R(42128,42191)]),I(B,[C(602),R(42752,
42783)]),I(B,[C(603),R(43008,43055)]),I(B,[C(604),R(44032,55203)]),I(B,[C(605),R(55296,56191)]),I(B,[C(606),R(56192,56319)]),I(B,[C(607),R(56320,57343)]),I(B,[C(608),R(57344,63743)]),I(B,[C(609),R(63744,64255)]),I(B,[C(610),R(64256,64335)]),I(B,[C(611),R(64336,65023)]),I(B,[C(612),R(65024,65039)]),I(B,[C(613),R(65040,65055)]),I(B,[C(614),R(65056,65071)]),I(B,[C(615),R(65072,65103)]),I(B,[C(616),R(65104,65135)]),I(B,[C(617),R(65136,65279)]),I(B,[C(618),R(65280,65519)]),I(B,[C(619),R(0,1114111)]),I(B,[C(620),
A4L()]),I(B,[C(621),B4(0,1)]),I(B,[C(622),Ko(62,1)]),I(B,[C(623),B4(1,1)]),I(B,[C(624),B4(2,1)]),I(B,[C(625),B4(3,0)]),I(B,[C(626),B4(4,0)]),I(B,[C(627),B4(5,1)]),I(B,[C(628),Ko(448,1)]),I(B,[C(629),B4(6,1)]),I(B,[C(630),B4(7,0)]),I(B,[C(631),B4(8,1)]),I(B,[C(632),Ko(3584,1)]),I(B,[C(633),B4(9,1)]),I(B,[C(634),B4(10,1)]),I(B,[C(635),B4(11,1)]),I(B,[C(636),Ko(28672,0)]),I(B,[C(637),B4(12,0)]),I(B,[C(638),B4(13,0)]),I(B,[C(639),B4(14,0)]),I(B,[C(640),A44(983040,1,1)]),I(B,[C(641),B4(15,0)]),I(B,[C(642),B4(16,
1)]),I(B,[C(643),B4(18,1)]),I(B,[C(644),A30(19,0,1)]),I(B,[C(645),Ko(1643118592,1)]),I(B,[C(646),B4(20,0)]),I(B,[C(647),B4(21,0)]),I(B,[C(648),B4(22,0)]),I(B,[C(649),B4(23,0)]),I(B,[C(650),B4(24,1)]),I(B,[C(651),Ko(2113929216,1)]),I(B,[C(652),B4(25,1)]),I(B,[C(653),B4(26,0)]),I(B,[C(654),B4(27,0)]),I(B,[C(655),B4(28,1)]),I(B,[C(656),B4(29,0)]),I(B,[C(657),B4(30,0)])]);}
function Wr(){Cc.call(this);this.ta=0;}
function ASD(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.ta!=G3(G1(EN(e,d)))?(-1):2;}
function NV(){B8.call(this);this.ho=0;}
function ARb(a){var b=new NV();AMY(b,a);return b;}
function AMY(a,b){B6(a);a.ho=b;}
function AZL(a,b){a.e=b;}
function AWk(a,b,c,d){var e,f;e=b+1|0;if(e>d.y){d.dN=1;return (-1);}f=P(c,b);if(b>d.c9&&CU(P(c,b-1|0)))return (-1);if(a.ho!=f)return (-1);return a.e.c(e,c,d);}
function AOV(a,b,c,d){var e,f,g,h;if(!(c instanceof BK))return IH(a,b,c,d);e=d.c9;f=d.y;while(true){if(b>=f)return (-1);g=J5(c,a.ho,b);if(g<0)return (-1);if(g>e&&CU(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AWJ(a,b,c,d,e){var f,g;if(!(d instanceof BK))return IP(a,b,c,d,e);f=e.c9;a:{while(true){if(c<b)return (-1);g=Hs(d,a.ho,c);if(g<0)break a;if(g<b)break a;if(g>f&&CU(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AL2(a,b){if(b instanceof EK)return 0;if(b instanceof ED)return 0;if(b instanceof D3)return 0;if(b instanceof Ee)return 0;if(b instanceof N2)return 0;if(!(b instanceof NV))return 1;return b.ho!=a.ho?0:1;}
function AS5(a,b){return 1;}
function N2(){B8.call(this);this.g$=0;}
function AX3(a){var b=new N2();ARc(b,a);return b;}
function ARc(a,b){B6(a);a.g$=b;}
function AV7(a,b){a.e=b;}
function ALK(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;g=BL(f,e);if(g>0){d.dN=1;return (-1);}h=P(c,b);if(g<0&&Dl(P(c,f)))return (-1);if(a.g$!=h)return (-1);return a.e.c(f,c,d);}
function AZX(a,b,c,d){var e,f;if(!(c instanceof BK))return IH(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=J5(c,a.g$,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dl(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function ASz(a,b,c,d,e){var f,g;if(!(d instanceof BK))return IP(a,b,c,d,e);f=e.y;a:{while(true){if(c<b)return (-1);g=Hs(d,a.g$,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dl(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ANx(a,b){if(b instanceof EK)return 0;if(b instanceof ED)return 0;if(b instanceof D3)return 0;if(b instanceof Ee)return 0;if(b instanceof NV)return 0;if(!(b instanceof N2))return 1;return b.g$!=a.g$?0:1;}
function AZ4(a,b){return 1;}
function Ee(){var a=this;Cc.call(a);a.mp=0;a.lr=0;a.g3=0;}
function A0t(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.mp==e&&a.lr==d?2:(-1);}
function AZd(a,b,c,d){var e,f;if(!(c instanceof BK))return IH(a,b,c,d);e=d.y;while(b<e){b=J5(c,a.mp,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.lr==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AMZ(a,b,c,d,e){var f;if(!(d instanceof BK))return IP(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hs(d,a.lr,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.mp==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A0n(a,b){if(b instanceof Ee)return b.g3!=a.g3?0:1;if(b instanceof D3)return b.n(a.g3);if(b instanceof EK)return 0;if(!(b instanceof ED))return 1;return 0;}
var ACv=G(FF);
function AM3(a,b){return b!=10?0:1;}
function ASc(a,b,c){return b!=10?0:1;}
var ACw=G(FF);
function A06(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ATR(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AGN(){var a=this;B.call(a);a.os=null;a.mC=null;a.jn=0;a.wo=0;}
function AZq(a){var b=new AGN();APo(b,a);return b;}
function APo(a,b){var c,d;while(true){c=a.jn;if(b<c)break;a.jn=c<<1|1;}d=c<<1|1;a.jn=d;d=d+1|0;a.os=BQ(d);a.mC=BQ(d);a.wo=b;}
function RT(a,b,c){var d,e,f,g;d=0;e=a.jn;f=b&e;while(true){g=a.os.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.mC.data[f]=c;}
function AAE(a,b){var c,d,e,f;c=a.jn;d=b&c;e=0;while(true){f=a.os.data[d];if(!f)break;if(f==b)return a.mC.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.wo;}
var AEz=G();
var NT=G(Bf);
function A4n(){var a=new NT();AO7(a);return a;}
function AO7(a){}
function AJu(a){return CJ(Cb(DF(),9,13),32);}
var Nh=G(Bf);
function A47(){var a=new Nh();AS0(a);return a;}
function AS0(a){}
function AJZ(a){return Cb(DF(),48,57);}
var AGH=G(Bf);
function A4u(){var a=new AGH();AOJ(a);return a;}
function AOJ(a){}
function A0K(a){return Cb(DF(),97,122);}
var AG2=G(Bf);
function A3u(){var a=new AG2();APs(a);return a;}
function APs(a){}
function AS8(a){return Cb(DF(),65,90);}
var AG4=G(Bf);
function A5B(){var a=new AG4();AMA(a);return a;}
function AMA(a){}
function AN4(a){return Cb(DF(),0,127);}
var NP=G(Bf);
function A5F(){var a=new NP();ANk(a);return a;}
function ANk(a){}
function AE8(a){return Cb(Cb(DF(),97,122),65,90);}
var LR=G(NP);
function A5c(){var a=new LR();APd(a);return a;}
function APd(a){}
function AFC(a){return Cb(AE8(a),48,57);}
var AH3=G(Bf);
function A3U(){var a=new AH3();AY8(a);return a;}
function AY8(a){}
function AXG(a){return Cb(Cb(Cb(DF(),33,64),91,96),123,126);}
var OK=G(LR);
function A4H(){var a=new OK();AR0(a);return a;}
function AR0(a){}
function AH$(a){return Cb(Cb(Cb(AFC(a),33,64),91,96),123,126);}
var AJG=G(OK);
function A4E(){var a=new AJG();ASW(a);return a;}
function ASW(a){}
function AQz(a){return CJ(AH$(a),32);}
var AF5=G(Bf);
function A3C(){var a=new AF5();A0S(a);return a;}
function A0S(a){}
function AWy(a){return CJ(CJ(DF(),32),9);}
var AFf=G(Bf);
function A3J(){var a=new AFf();A2i(a);return a;}
function A2i(a){}
function AQv(a){return CJ(Cb(DF(),0,31),127);}
var AIW=G(Bf);
function A4K(){var a=new AIW();AMK(a);return a;}
function AMK(a){}
function ATV(a){return Cb(Cb(Cb(DF(),48,57),97,102),65,70);}
var AKM=G(Bf);
function A4a(){var a=new AKM();AVx(a);return a;}
function AVx(a){}
function AZo(a){var b;b=new AA3;b.ER=a;By(b);b.R=1;return b;}
var AH6=G(Bf);
function A3q(){var a=new AH6();AR$(a);return a;}
function AR$(a){}
function AUO(a){var b;b=new Wz;b.EV=a;By(b);b.R=1;return b;}
var AKu=G(Bf);
function A5D(){var a=new AKu();AMC(a);return a;}
function AMC(a){}
function AO_(a){var b;b=new Sa;b.EG=a;By(b);return b;}
var AGz=G(Bf);
function A3I(){var a=new AGz();AQw(a);return a;}
function AQw(a){}
function ASk(a){var b;b=new R_;b.CH=a;By(b);return b;}
var AHf=G(Bf);
function A5a(){var a=new AHf();ANg(a);return a;}
function ANg(a){}
function AWw(a){var b;b=new Vn;b.DO=a;By(b);IT(b.O,0,2048);b.R=1;return b;}
var AEL=G(Bf);
function A4S(){var a=new AEL();AM1(a);return a;}
function AM1(a){}
function ANJ(a){var b;b=new Yc;b.E7=a;By(b);b.R=1;return b;}
var AIh=G(Bf);
function A5b(){var a=new AIh();AQd(a);return a;}
function AQd(a){}
function A2m(a){var b;b=new PW;b.D6=a;By(b);b.R=1;return b;}
var AKB=G(Bf);
function A3E(){var a=new AKB();AQP(a);return a;}
function AQP(a){}
function AUJ(a){var b;b=new Zy;b.C2=a;By(b);return b;}
var AGX=G(Bf);
function A5I(){var a=new AGX();AXR(a);return a;}
function AXR(a){}
function APL(a){var b;b=new Wv;b.Ce=a;By(b);b.R=1;return b;}
var AJe=G(Bf);
function A4N(){var a=new AJe();AL5(a);return a;}
function AL5(a){}
function ANQ(a){var b;b=new Wx;b.Dj=a;By(b);b.R=1;return b;}
var AF7=G(Bf);
function A33(){var a=new AF7();AM6(a);return a;}
function AM6(a){}
function AXt(a){var b;b=new PD;b.DL=a;By(b);b.R=1;return b;}
var AHN=G(Bf);
function A5z(){var a=new AHN();APQ(a);return a;}
function APQ(a){}
function AYw(a){var b;b=new Yv;b.Fr=a;By(b);b.R=1;return b;}
var AKG=G(Bf);
function A5w(){var a=new AKG();AZh(a);return a;}
function AZh(a){}
function ATj(a){var b;b=new YA;b.CQ=a;By(b);return b;}
var AFM=G(Bf);
function A4o(){var a=new AFM();AM2(a);return a;}
function AM2(a){}
function ART(a){var b;b=new ABr;b.E9=a;By(b);return b;}
var AFr=G(Bf);
function A3D(){var a=new AFr();A0y(a);return a;}
function A0y(a){}
function AQ0(a){var b;b=new AAx;b.Cg=a;By(b);b.R=1;return b;}
var AH4=G(Bf);
function A5p(){var a=new AH4();AXM(a);return a;}
function AXM(a){}
function A0E(a){var b;b=new O8;b.FD=a;By(b);b.R=1;return b;}
var KL=G(Bf);
function A36(){var a=new KL();ANY(a);return a;}
function ANY(a){}
function AF6(a){return CJ(Cb(Cb(Cb(DF(),97,122),65,90),48,57),95);}
var AKU=G(KL);
function A4J(){var a=new AKU();AXU(a);return a;}
function AXU(a){}
function AQS(a){var b;b=EM(AF6(a),1);b.R=1;return b;}
var AJL=G(NT);
function A3o(){var a=new AJL();ATC(a);return a;}
function ATC(a){}
function AVE(a){var b;b=EM(AJu(a),1);b.R=1;return b;}
var AFp=G(Nh);
function A3M(){var a=new AFp();AYm(a);return a;}
function AYm(a){}
function AOP(a){var b;b=EM(AJZ(a),1);b.R=1;return b;}
function AIZ(){var a=this;Bf.call(a);a.s5=0;a.zn=0;}
function R(a,b){var c=new AIZ();A2l(c,a,b);return c;}
function A2l(a,b,c){a.s5=b;a.zn=c;}
function AP0(a){return Cb(DF(),a.s5,a.zn);}
var AI$=G(Bf);
function A4L(){var a=new AI$();ATZ(a);return a;}
function ATZ(a){}
function ATI(a){return Cb(Cb(DF(),65279,65279),65520,65533);}
function AJz(){var a=this;Bf.call(a);a.p4=0;a.oC=0;a.x2=0;}
function B4(a,b){var c=new AJz();ANc(c,a,b);return c;}
function A30(a,b,c){var d=new AJz();ATN(d,a,b,c);return d;}
function ANc(a,b,c){a.oC=c;a.p4=b;}
function ATN(a,b,c,d){a.x2=d;a.oC=c;a.p4=b;}
function AXd(a){var b;b=A4t(a.p4);if(a.x2)IT(b.O,0,2048);b.R=a.oC;return b;}
function AJH(){var a=this;Bf.call(a);a.n5=0;a.mF=0;a.q3=0;}
function Ko(a,b){var c=new AJH();ANR(c,a,b);return c;}
function A44(a,b,c){var d=new AJH();AUK(d,a,b,c);return d;}
function ANR(a,b,c){a.mF=c;a.n5=b;}
function AUK(a,b,c,d){a.q3=d;a.mF=c;a.n5=b;}
function ALA(a){var b;b=new Z6;AGs(b,a.n5);if(a.q3)IT(b.O,0,2048);b.R=a.mF;return b;}
var AI2=G();
var AEZ=G();
function AFL(b){var c,d,e,f,g,h,i;c=ASv(Gt(b));d=M$(c);e=BQ(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+M$(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Pi(c);h=h+1|0;}return e;}
function NE(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function W4(){var a=this;B.call(a);a.ys=0;a.tD=0;a.yB=null;}
function AOo(a,b,c){var d=new W4();ASV(d,a,b,c);return d;}
function ASV(a,b,c,d){a.ys=b;a.tD=c;a.yB=d;}
function AGS(){var a=this;B.call(a);a.xE=null;a.y0=0;}
function ASv(a){var b=new AGS();AWG(b,a);return b;}
function AWG(a,b){a.xE=b;}
var AJl=G();
function M$(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.xE.data;f=b.y0;b.y0=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bc(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Pi(b){var c,d;c=M$(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var MA=G(Bu);
function Zh(){var a=this;B.call(a);a.w7=null;a.w6=null;a.w5=null;}
function AYB(a,b){var c,d,e,f,g;c=a.w7;d=a.w6;e=a.w5;f=new AD0;g=ACe(Eq(d));AK9(f,b,null,g);HX(c,f);e.f();}
function Zg(){B.call(this);this.Ax=null;}
function AT1(a,b){Bk(a.Ax,b);}
function AIQ(){B.call(this);this.S4=null;}
function Sx(){B.call(this);this.sU=null;}
function AXl(a,b){b.hn=a.sU;}
function ACq(){var a=this;B.call(a);a.FE=null;a.kJ=null;}
function AN8(a,b){var c;c=a.kJ;b=b;a.kJ=Ya(!c.on&&!b.eR?0:1);return 1;}
function ABQ(){var a=this;B.call(a);a.uY=null;a.uZ=null;}
function A1u(a){var b,c;b=a.uY;c=a.uZ;Gj(b.z.bA,E9(c));}
function ABT(){var a=this;B.call(a);a.CZ=null;a.tg=null;}
function ABV(){B.call(this);this.Fi=null;}
function A19(a,b){$rt_globals.console.info($rt_ustr(b));}
var KR=G(0);
function PM(){var a=this;B.call(a);a.ln=0;a.Ci=null;}
function A0j(a,b){var c,d;c=Cy(b);d=new K;M(d);H(H(d,C(658)),c);$rt_globals.console.info($rt_ustr(L(d)));a.ln=a.ln+1|0;No(b,a);}
function AXP(a,b){var c;b=Cy(b);c=new K;M(c);H(H(c,C(659)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function ASE(a){var b;b=a.ln-1|0;a.ln=b;if(!b)Bk(Bt(),C(660));}
function Va(){var a=this;Z.call(a);a.xr=null;a.Fk=null;}
function AN$(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cx^DW(a.xr,c):0;}
function U9(){var a=this;Z.call(a);a.AY=null;a.vJ=null;a.Dt=null;}
function AU4(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cx^DW(a.AY,c):0;return a.vJ.n(b)&&!d?1:0;}
function P$(){var a=this;Z.call(a);a.lu=null;a.Ee=null;}
function APR(a,b){return a.bi^DW(a.lu,b);}
function AXv(a){var b,c,d;b=new K;M(b);c=Ij(a.lu,0);while(c>=0){J9(b,HN(c));BN(b,124);c=Ij(a.lu,c+1|0);}d=b.M;if(d>0)UZ(b,d-1|0);return L(b);}
function XX(){var a=this;Z.call(a);a.y_=null;a.EU=null;}
function A0w(a,b){return a.y_.n(b);}
function XV(){var a=this;Z.call(a);a.oE=0;a.xV=null;a.pe=null;}
function ASC(a,b){return !(a.oE^DW(a.pe.K,b))&&!(a.oE^a.pe.eA^a.xV.n(b))?0:1;}
function XW(){var a=this;Z.call(a);a.mD=0;a.vq=null;a.nP=null;}
function AYN(a,b){return !(a.mD^DW(a.nP.K,b))&&!(a.mD^a.nP.eA^a.vq.n(b))?1:0;}
function X0(){var a=this;Z.call(a);a.BD=0;a.vx=null;a.vn=null;a.Es=null;}
function AWP(a,b){return a.BD^(!a.vx.n(b)&&!a.vn.n(b)?0:1);}
function X2(){var a=this;Z.call(a);a.tq=0;a.y7=null;a.yI=null;a.FB=null;}
function ALv(a,b){return a.tq^(!a.y7.n(b)&&!a.yI.n(b)?0:1)?0:1;}
function XY(){var a=this;Z.call(a);a.sA=null;a.FC=null;}
function AOK(a,b){return Dc(a.sA,b);}
function XZ(){var a=this;Z.call(a);a.Bj=null;a.Ev=null;}
function AQk(a,b){return Dc(a.Bj,b)?0:1;}
function X3(){var a=this;Z.call(a);a.tA=null;a.y9=0;a.uP=null;}
function ATs(a,b){return !Dc(a.tA,b)&&!(a.y9^DW(a.uP.K,b))?0:1;}
function X4(){var a=this;Z.call(a);a.t3=null;a.z6=0;a.tU=null;}
function AWs(a,b){return !Dc(a.t3,b)&&!(a.z6^DW(a.tU.K,b))?1:0;}
function P9(){var a=this;Z.call(a);a.uM=0;a.A7=null;a.vS=null;a.Cm=null;}
function A3n(a,b){return !(a.uM^a.A7.n(b))&&!Dc(a.vS,b)?0:1;}
function Qr(){var a=this;Z.call(a);a.Bs=0;a.qJ=null;a.q4=null;a.CB=null;}
function AON(a,b){return !(a.Bs^a.qJ.n(b))&&!Dc(a.q4,b)?1:0;}
function P7(){var a=this;Z.call(a);a.yj=null;a.CE=null;}
function ANm(a,b){return Dc(a.yj,b);}
function P8(){var a=this;Z.call(a);a.sm=null;a.Fz=null;}
function AXj(a,b){return Dc(a.sm,b)?0:1;}
function Qb(){var a=this;Z.call(a);a.BB=null;a.tY=0;a.B_=null;}
function APr(a,b){return Dc(a.BB,b)&&a.tY^DW(a.B_.K,b)?1:0;}
function P6(){var a=this;Z.call(a);a.Am=null;a.zk=0;a.tX=null;}
function A1y(a,b){return Dc(a.Am,b)&&a.zk^DW(a.tX.K,b)?0:1;}
function P_(){var a=this;Z.call(a);a.AD=0;a.xp=null;a.to=null;a.Er=null;}
function AVO(a,b){return a.AD^a.xp.n(b)&&Dc(a.to,b)?1:0;}
function Qa(){var a=this;Z.call(a);a.Ah=0;a.wU=null;a.Az=null;a.Ey=null;}
function ARN(a,b){return a.Ah^a.wU.n(b)&&Dc(a.Az,b)?0:1;}
var Mg=G(0);
function AAw(){var a=this;B.call(a);a.Cx=null;a.A8=null;a.lL=null;a.cK=null;a.kq=0;a.pa=0;}
function OX(a,b){var c,d,e;c=J(a.lL);if(b>=0&&b<=c){AD5(a.cK,null,(-1),(-1));d=a.cK;d.ma=1;d.eT=b;c=d.iX;if(c<0)c=b;d.iX=c;b=a.A8.cs(b,a.lL,d);if(b==(-1))a.cK.dN=1;if(b>=0){d=a.cK;if(d.ky){e=d.ed.data;if(e[0]==(-1)){c=d.eT;e[0]=c;e[1]=c;}d.iX=MH(d);return 1;}}a.cK.eT=(-1);return 0;}d=new BI;Bm(d,Dm(b));N(d);}
function AHM(a){return Qq(a.cK,0);}
function AJa(a){return Sc(a.cK,0);}
function AED(a){return a.cK.kB;}
function Ro(){var a=this;B.call(a);a.r4=null;a.r5=null;}
function A0d(a){var b,c;b=a.r4;c=a.r5;SG();KP(b,c,A9D);}
function Rm(){var a=this;B.call(a);a.zX=null;a.zW=null;}
function AOG(a){var b,c;b=a.zX;c=a.zW;SG();KP(b,c,A9E);}
function Rn(){var a=this;B.call(a);a.B$=null;a.B9=null;}
function ATA(a){KP(a.B$,a.B9,null);}
function Rp(){var a=this;B.call(a);a.yG=null;a.yH=null;}
function ALN(a){var b,c,d,e,f,g,h;b=a.yG;c=a.yH;d=D_(b.bu.d);e=HA(b.bu.d);d=ABW(b.bu.fC,d,e);DS(b.gp.b$);b=b.bu;e=FD(b,c);if(d!==null){f=b.d;g=e.bq;h=e.bv;e=new ABl;e.Fn=b;e.Fm=c;d.Kh(f,g,h,1,e,b.j9);}}
function Su(){B.call(this);this.wW=null;}
function AS$(a){var b;b=a.wW;DS(b.gp.b$);Hb(b.bu,We(b),0);}
function St(){B.call(this);this.uu=null;}
function AYR(a){var b;b=a.uu;DS(b.gp.b$);Hb(b.bu,We(b),1);}
function Ss(){B.call(this);this.r6=null;}
function AZ9(a){var b,c,d;b=a.r6;DS(b.gp.b$);c=HQ(b);b=b.bu;BD(b);d=new ADh;d.rw=b;RJ(c,d,AE$(C(661)));}
function RK(){var a=this;B.call(a);a.zu=null;a.zt=null;}
function AUv(a){var b,c;b=a.zu;c=a.zt;b=b.bu.d;b.pT=c;Mq(b);}
var Q$=G(0);
var A9g=null;function AKt(){A9g=new TF;}
function AJt(){B.call(this);this.Ff=null;}
function A2V(a){var b,c,d,e;b=a.Ff;c=HQ(b);d=b.gp.b$;e=new Sb;e.BT=b;Kk(c,Yt(d,e));}
function AJN(){var a=this;B.call(a);a.O6=null;a.O4=null;a.O7=0.0;}
function Qw(){B.call(this);this.x$=null;}
function ARK(a){AHH(a.x$);}
function Qu(){B.call(this);this.z5=null;}
function AXe(a){Ju(a.z5);}
function Qv(){B.call(this);this.qz=null;}
function A2n(a){AIu(a.qz);}
function T_(){B.call(this);this.z9=null;}
function A0p(a){a.z9.qi();}
function Ub(){B.call(this);this.Cc=null;}
function AQW(a){a.Cc.ot();}
function Zi(){B.call(this);this.yZ=null;}
function A1o(a){var b,c,d,e,f,g,h,i;b=a.yZ;c=(b.rx.cp()).data;d=Q(BC,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new QZ;i.sj=b;i.si=h;e[f]=Xi(i,h);f=f+1|0;}return d;}
function ZO(){B.call(this);this.sy=null;}
function AMg(a){a.sy.oq.g6(0);}
function ZM(){B.call(this);this.AF=null;}
function ANv(a){a.AF.oq.g6(1);}
function SX(){B.call(this);this.wm=null;}
function ATO(a){var b,c,d,e,f;b=a.wm.d.h;c=b.cr;d=new K;M(d);U(H(d,C(662)),c);$rt_globals.console.info($rt_ustr(L(d)));c=b.nu;d=new K;M(d);U(H(d,C(663)),c);$rt_globals.console.info($rt_ustr(L(d)));d=b.df;e=Ho(Fc(b));ADs(d,0,d.dd,e);b=Bt();f=b.m2;f.data[0]=10;XI(b,f,0,1);}
function SY(){B.call(this);this.su=null;}
function AMe(a){ZT(a.su);}
function SZ(){B.call(this);this.Aw=null;}
function ANp(a){AA$(a.Aw);}
function S0(){B.call(this);this.xj=null;}
function ATD(a){Oq(a.xj.d);}
function Tc(){B.call(this);this.zm=null;}
function AYX(a){VL(a.zm);}
function AGi(){B.call(this);this.Fq=null;}
function A2X(a){var b,c,d,e,f,g,h;b=a.Fq;c=Q(BC,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Xi(Qs(b,g),Xn(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Xi(Qs(b,g),Xn(g));e=h;}return c;}
function ACO(){var a=this;B.call(a);a.mc=null;a.iQ=0;}
var TF=G();
var Pe=G(HP);
function AOr(a,b,c,d){var e,f,g;e=0;f=d.y;a:{while(true){if(b>f){b=e;break a;}g=Gx(d,a.bd);DZ(d,a.bd,b);e=a.dh.c(b,c,d);if(e>=0)break;DZ(d,a.bd,g);b=b+1|0;}}return b;}
function A3c(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Gx(e,a.bd);DZ(e,a.bd,c);f=a.dh.c(c,d,e);if(f>=0)break;DZ(e,a.bd,g);c=c+(-1)|0;}}return c;}
function ANa(a){return null;}
var Re=G(Bu);
var VC=G(Bu);
function Uc(){Gf.call(this);this.D2=0;}
function Q9(){Gf.call(this);this.Fu=0;}
function VA(){B.call(this);this.rb=null;}
function AXs(a,b){a.rb.g(H1(b));}
function VB(){var a=this;B.call(a);a.r2=null;a.r3=null;}
function AVN(a,b){var c,d;c=a.r2;d=a.r3;b.text().then(Bv(c,"f"),Bv(d,"f"));}
function ACl(){var a=this;B.call(a);a.tB=null;a.AZ=null;a.wd=0;a.mP=0;}
function NB(a,b){return Ch(a.tB)<b?0:1;}
var AEY=G(0);
function SU(){B.call(this);this.tw=null;}
function AQu(a){ADG(a.tw);}
function SV(){B.call(this);this.ry=null;}
function AYk(a,b){H3(a.ry,b);}
function ACC(){B.call(this);this.xv=null;}
function ARV(a,b){var c,d,e,f;c=a.xv;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.tg;c=Bt();b=Cy(b);e=new K;M(e);H(H(e,C(664)),b);Bk(c,L(e));b=Bt();f=d.length;c=new K;M(c);U(H(c,C(665)),f);Bk(b,L(c));}
function ACE(){var a=this;B.call(a);a.AP=null;a.AQ=null;}
function AQ6(a,b){var c,d;c=a.AP;d=a.AQ;b.arrayBuffer().then(Bv(c,"f"),Bv(d,"f"));}
function ACF(){var a=this;B.call(a);a.yy=null;a.k8=null;a.kw=null;}
function ABw(a){var b,c;b=a.yy.next();c=a.kw.pI;b.then(Bv(a,"f"),Bv(c,"f"));}
function AR2(a,b){var c,d;if(b.done?1:0)a.k8.wr();else{ABw(a);c=b.value;if(c.kind==='file'?1:0){b=A3x(c,null,YU(a.kw));a.k8.xq(b);}else{b=new ACy;d=a.kw;AHo(b,c,d.pI,YU(d),null);a.k8.t9(b);}}}
function YT(){var a=this;B.call(a);a.s9=null;a.s$=null;}
function ACo(){var a=this;B.call(a);a.ed=null;a.k1=null;a.pv=null;a.nv=null;a.rR=0;a.ky=0;a.c9=0;a.y=0;a.eT=0;a.kB=0;a.gz=0;a.dN=0;a.Fd=0;a.iX=0;a.ma=0;}
function B0(a,b,c){a.k1.data[b]=c;}
function DE(a,b){return a.k1.data[b];}
function MH(a){return Sc(a,0);}
function Sc(a,b){Z4(a,b);return a.ed.data[(b*2|0)+1|0];}
function DZ(a,b,c){a.ed.data[b*2|0]=c;}
function M4(a,b,c){a.ed.data[(b*2|0)+1|0]=c;}
function Gx(a,b){return a.ed.data[b*2|0];}
function I_(a,b){return a.ed.data[(b*2|0)+1|0];}
function AGJ(a){return Qq(a,0);}
function Qq(a,b){Z4(a,b);return a.ed.data[b*2|0];}
function WG(a,b){return a.pv.data[b];}
function ES(a,b,c){a.pv.data[b]=c;}
function Z4(a,b){var c;if(!a.ky){c=new C_;Y(c);N(c);}if(b>=0&&b<a.rR)return;c=new BI;Bm(c,Dm(b));N(c);}
function AD5(a,b,c,d){a.ky=0;a.ma=2;JC(a.ed,(-1));JC(a.k1,(-1));if(b!==null)a.nv=b;if(c>=0){a.c9=c;a.y=d;}a.eT=a.c9;}
function AFE(a){return a.ma;}
function TH(){B.call(this);this.yn=null;}
function AYG(a,b){a.yn.g($rt_str(b.message));}
function Ph(){B.call(this);this.zw=null;}
function A2j(a,b){var c,d,e,f,g;c=a.zw;DS(c.cy);EU(c.iz);d=M6(N_(c.fE));while(Fu(d)){e=OD(d);f=c.fE;g=e.cP;e=null;if(Ht(f,g))DU(f,g,e);}e=Bt();d=Cy(b);f=new K;M(f);H(H(f,C(666)),d);Bk(e,L(f));e=ASH(b,c);ER(c.dn.gq,e);e.jf.f();DL(c.kK,Fz(E9(b),C(667)));}
function AAu(){var a=this;B.call(a);a.qy=null;a.qx=0;}
function A3a(a){H4(a.qy,a.qx);}
function XG(){B.call(this);this.zT=null;}
function ARY(a){H4(a.zT,1);}
function XH(){B.call(this);this.r9=null;}
function APH(a){H4(a.r9,0);}
function Z8(){var a=this;B.call(a);a.te=null;a.td=0;}
function AR8(a){var b,c,d,e,f;b=a.te;c=a.td;d=b.cy;e=d.bZ.es;f=new Q5;f.z4=b;f.z1=c;Kk(e,Yt(d,f));}
function QG(){B.call(this);this.yA=null;}
function AUX(a,b){H3(a.yA,b);}
var GJ=G(CI);
var A9E=null;var A9D=null;var A9F=null;function SG(){SG=Bn(GJ);A26();}
function A0U(a,b){var c=new GJ();AFQ(c,a,b);return c;}
function AFQ(a,b,c){SG();DK(a,b,c);}
function A26(){var b;A9E=A0U(C(668),0);b=A0U(C(669),1);A9D=b;A9F=I(GJ,[A9E,b]);}
function ADh(){B.call(this);this.rw=null;}
function AOC(a,b){DI(a.rw,b);}
function ZS(){var a=this;B.call(a);a.yq=null;a.yp=0;}
function A1B(a,b){var c,d,e,f,g,h,i;c=a.yq;d=a.yp;e=!d?c.dP.dU:c.dP.dX;DS(c.cy);f=Bt();g=E9(b);h=new K;M(h);H(H(h,C(670)),g);Bk(f,L(h));i=new AAg;i.ht=c;i.iW=d;i.nf=e;f=ASH(b,i);if(!d)c.p1=f;else c.oS=f;f.dW.f();ER(e,f);}
function QZ(){var a=this;B.call(a);a.sj=null;a.si=null;}
function AXA(a){var b,c;b=a.sj;c=a.si;b.jb.nX(c);}
var ABq=G();
var A9h=null;function A5l(){A5l=Bn(ABq);AVn();}
function AVn(){var b,c;SG();b=BQ((A9F.hD()).data.length);c=b.data;A9h=b;c[A9E.fU]=1;c[A9D.fU]=2;}
function RP(){B.call(this);this.uo=null;}
function AMq(a,b){TB(HQ(a.uo),b,A8q,AE$(C(671)));}
function RZ(){B.call(this);this.zY=null;}
function AOt(a,b){var c,d;c=a.zY;d=b.iS;b=new K;M(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(L(b)));}
function OT(){var a=this;B.call(a);a.xO=null;a.xP=0.0;}
function AXW(a){var b,c;b=a.xO;c=a.xP;b.jb.kE(c);}
function AA3(){Z.call(this);this.ER=null;}
function ATw(a,b){return CG(b)!=2?0:1;}
function Wz(){Z.call(this);this.EV=null;}
function AVC(a,b){return CG(b)!=1?0:1;}
function Sa(){Z.call(this);this.EG=null;}
function AMi(a,b){return RN(b);}
function R_(){Z.call(this);this.CH=null;}
function AXc(a,b){return 0;}
function Vn(){Z.call(this);this.DO=null;}
function APh(a,b){return !CG(b)?0:1;}
function Yc(){Z.call(this);this.E7=null;}
function A12(a,b){return CG(b)!=9?0:1;}
function PW(){Z.call(this);this.D6=null;}
function ARr(a,b){return HK(b);}
function Zy(){Z.call(this);this.C2=null;}
function ASn(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Wv(){Z.call(this);this.Ce=null;}
function A22(a,b){a:{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HK(b);}return b;}
function Wx(){Z.call(this);this.Dj=null;}
function ANz(a,b){a:{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HK(b);}return b;}
function PD(){Z.call(this);this.DL=null;}
function ATF(a,b){a:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Yv(){Z.call(this);this.Fr=null;}
function AYV(a,b){return KT(b);}
function YA(){Z.call(this);this.CQ=null;}
function A0g(a,b){return YB(b);}
function ABr(){Z.call(this);this.E9=null;}
function A1P(a,b){return CG(b)!=3?0:1;}
function AAx(){Z.call(this);this.Cg=null;}
function AT0(a,b){a:{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HK(b);}return b;}
function O8(){Z.call(this);this.FD=null;}
function ANs(a,b){a:{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HK(b);}return b;}
function Mp(){Z.call(this);this.nK=0;}
function A4t(a){var b=new Mp();AGs(b,a);return b;}
function AGs(a,b){By(a);a.nK=b;}
function ARs(a,b){return a.bi^(a.nK!=CG(b&65535)?0:1);}
var Z6=G(Mp);
function A1d(a,b){return a.bi^(!(a.nK>>CG(b&65535)&1)?0:1);}
var ADR=G(0);
function YY(){B.call(this);this.wz=null;}
function AP6(a){var b,c;b=a.wz;c=b.s9;b=b.s$;c.FX(b.l7,b.pA,null);}
function Sb(){B.call(this);this.BT=null;}
function A1v(a,b){GK(a.BT.bu,b,A8q);}
function QA(){var a=this;B.call(a);a.l2=null;a.l1=null;a.yb=null;}
function ANX(a){Jz(a.l2);Jz(a.l1);}
function ALJ(a){KB(a.l2);KB(a.l1);}
function ASP(a,b){Iz(a.l2,b);Iz(a.l1,b);}
function ARh(a,b){KC(a.yb,b);}
function ABl(){var a=this;B.call(a);a.Fn=null;a.Fm=null;}
function R$(){var a=this;B.call(a);a.Dy=null;a.Dx=null;a.Dw=null;}
function Q5(){var a=this;B.call(a);a.z4=null;a.z1=0;}
function ANi(a,b){M7(a.z4,b,a.z1);}
var Db=G(0);
var A67=null;var A8m=null;var A69=null;var A68=null;var A6_=null;var A6$=null;var A7b=null;var A7a=null;var A7d=null;var A7c=null;var A7e=null;function AG6(){AG6=Bn(Db);A2r();}
function A2r(){A67=CB(0);A8m=Dy(8,8,8);A69=S(C(672));A68=Dy(255,255,255);A6_=S(C(673));A6$=S(C(674));A7b=S(C(675));A7a=S(C(676));A7d=EX(205,205,205,153);A7c=EX(255,255,255,0);A7e=S(C(116));}
function CA(){CI.call(this);this.pt=null;}
var A9G=null;var A9H=null;var A9I=null;var A9J=null;var A9K=null;var A9L=null;var A9M=null;var A9N=null;var A9O=null;var A9P=null;var A9Q=null;var A9R=null;var A9S=null;var A9T=null;var A9U=null;var A7f=null;function AGt(){AGt=Bn(CA);A2U();}
function DN(a,b,c){var d=new CA();ZE(d,a,b,c);return d;}
function A2G(a,b,c,d){var e=new CA();AEW(e,a,b,c,d);return e;}
function ZE(a,b,c,d){AGt();DK(a,b,c);a.pt=JQ(d,null);}
function AEW(a,b,c,d,e){AGt();DK(a,b,c);a.pt=JQ(d,e);}
function A2U(){var b;b=new CA;AG6();ZE(b,C(335),0,A8m);A9G=b;A9H=DN(C(336),1,S(C(677)));A9I=DN(C(338),2,S(C(678)));A9J=DN(C(340),3,S(C(679)));A9K=DN(C(342),4,A8m);A9L=DN(C(343),5,S(C(680)));A9M=DN(C(345),6,S(C(383)));A9N=DN(C(347),7,S(C(681)));A9O=DN(C(349),8,S(C(682)));A9P=A2G(C(351),9,A8m,Dy(237,235,252));A9Q=A2G(C(352),10,S(C(381)),S(C(683)));A9R=DN(C(353),11,S(C(383)));A9S=DN(C(355),12,S(C(384)));A9T=DN(C(357),13,S(C(684)));b=DN(C(358),14,S(C(359)));A9U=b;A7f=I(CA,[A9G,A9H,A9I,A9J,A9K,A9L,A9M,A9N,A9O,A9P,
A9Q,A9R,A9S,A9T,b]);}
var D1=G(0);
var A7j=null;var A7k=null;var A7g=null;var A7h=null;var A7i=null;var A8n=null;var A8o=null;var A7l=null;var A7m=null;function AVg(){AVg=Bn(D1);AWM();}
function AWM(){A7j=S(C(114));A7k=S(C(685));A7g=S(C(686));A7h=S(C(687));A7i=S(C(688));A8n=S(C(114));A8o=S(C(685));A7l=EX(205,205,205,153);A7m=Dy(247,248,250);}
function Im(){var a=this;Dh.call(a);a.jQ=null;a.hN=null;a.gk=null;a.gR=null;}
var A9V=null;var A9W=null;function ASH(a,b){var c=new Im();AJW(c,a,b);return c;}
function A9X(a,b,c){var d=new Im();LQ(d,a,b,c);return d;}
function AJW(a,b,c){LQ(a,b,0,c);}
function LQ(a,b,c,d){Kd(a,Jn(b),c);a.gk=A9V;a.gR=A9W;a.jQ=b;a.hN=d;Lp(a);IG(a);}
function Rt(a,b){return Ux(a.gk,b);}
function Lp(a){var b;b=new R5;b.sX=a;a.dW=b;a.jf=b;a.fb=A8$;}
function ADJ(a){var b;b=new AEi;b.tO=a;a.dW=b;a.jf=b;}
function AHq(){A9V=Q(Im,0);A9W=Q(KK,0);}
function AAg(){var a=this;B.call(a);a.iW=0;a.nf=null;a.ht=null;}
function APP(a,b){var c,d,e;c=Bt();d=E9(b.hJ);e=new K;M(e);H(H(e,C(689)),d);Bk(c,L(e));c=new M_;d=a.ht;Xj(c,d.hk,d.cy,d.kk);M7(c,b.hJ,a.iW);b=b.hJ;d=Rr(a,b.jW);if(d===null)d=null;else{b=Eq(b);d=Ux(d.gR,b);}LG(a,d);if(d!==null)M7(c,d.hJ,a.iW?0:1);}
function AUu(a,b){var c,d,e;ADJ(b);c=Bt();d=AFx(b.jQ);e=new K;M(e);H(H(e,C(690)),d);Bk(c,L(e));c=AEb(a,b.jQ);LG(a,c);if(c!==null&&(c.hC!=60086?0:1))c.dW.f();if(Jo(b)>0)EJ(a.nf);}
function LG(a,b){(!a.iW?a.ht.dP.dX:a.ht.dP.dU).oz=b;}
function AUB(a,b){var c;if(Jo(b)>0)EJ(a.nf);Lp(b);c=AEb(a,b.jQ);LG(a,c);if(c!==null&&Ja(c))c.dW.f();}
function Rr(a,b){var c,d,e;c=!a.iW?a.ht.oS:a.ht.p1;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=Rt(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function AEb(a,b){var c;c=Rr(a,b.jh);return c===null?null:Rt(c,Jn(b));}
function KK(){Dh.call(this);this.hJ=null;}
function ADS(){var a=this;B.call(a);a.yk=null;a.yl=null;}
function A0x(a,b){var c,d;c=a.yk;d=a.yl;DS(c);d.g(b);}
var AGh=G(0);
function R5(){B.call(this);this.sX=null;}
function ARj(a){var b,c,d,e;b=a.sX;c=Bt();d=GC(b);e=new K;M(e);H(H(e,C(691)),d);Bk(c,L(e));c=b.jQ;e=new AA1;e.c5=b;e.lQ=BM();e.ml=BM();No(c,e);}
function ABa(){B.call(this);this.Bl=null;}
function AYd(a){DS(a.Bl);}
function AA1(){var a=this;B.call(a);a.lQ=null;a.ml=null;a.c5=null;}
function A1I(a,b){var c,d;c=new Im;d=a.c5;LQ(c,b,d.jT+1|0,d.hN);BB(a.lQ,c);}
function ATq(a,b){var c,d;c=Eq(b);d=new KK;Kd(d,c,a.c5.jT+1|0);d.hJ=b;a.c5.hN.rQ(d,c);d.oB=AK0(a.c5.hN,d);BB(a.ml,d);}
function A14(a){var b,c,d,e,f,g,h;if(!(EC(a.lQ)&&EC(a.ml))){a.c5.gk=Gp(a.lQ,A9V);a.c5.gR=Gp(a.ml,A9W);K$(a.c5.gk,A8_);K$(a.c5.gR,A8_);b=a.c5;c=b.gk;d=c.data;e=b.gR;f=e.data;g=d.length;h=f.length;d=Q(Dh,g+h|0);C7(c,0,d,0,g);C7(e,0,d,g,h);a.c5.fb=d;}N0(a.c5);b=a.c5;b.hN.xy(b);}
var AID=G();
function RR(){var a=this;B.call(a);a.up=null;a.uq=null;}
function A2p(a){a.up.zG(a.uq);}
function Ri(){var a=this;B.call(a);a.vt=null;a.vu=null;a.vv=0;}
function AMu(a){var b,c,d,e;b=a.vt;c=a.vu;d=a.vv;c=E9(c);if(!d)b.nx=c;else b.wT=c;e=b.wT;if(e!==null&&b.nx!==null)DL(b.jk,c);else{if(e!==null)DL(b.jk,e);c=b.nx;if(c!==null)DL(b.jk,c);}}
function AEi(){B.call(this);this.tO=null;}
function AYc(a){var b;b=a.tO;IG(b);b.hN.uU(b);b.gk=A9V;b.gR=A9W;}
function Uf(){var a=this;B.call(a);a.rN=null;a.rM=null;}
function ANF(a,b){var c,d,e;c=a.rN;d=a.rM;LA(c.fE,d);b=AIH(b);e=AN_(b.ki,ACe(d));DU(c.iz,d,e);if(BO(c.xe,d))Q2(c,e);}
function Ue(){var a=this;B.call(a);a.AV=null;a.AW=null;}
function ATT(a,b){var c,d,e;c=a.AV;d=a.AW;LA(c.fE,d);c=En();e=new K;M(e);H(H(H(H(e,C(692)),d),C(29)),b);Bk(c,L(e));}
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"ui",4,"js",4,"diff"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bJ",A54(AQr),"cQ",A53(AMX)],R3,0,B,[],0,3,0,0,0,WR,0,B,[],3,3,0,0,0,Ws,0,B,[],3,3,0,0,0,AC1,0,B,[WR,Ws],0,3,0,0,0,AIV,0,B,[],4,0,0,0,0,AIJ,0,B,[],4,3,0,0,0,GY,0,B,[],0,3,0,0,0,Ew,0,GY,[],0,3,0,0,0,Bu,0,Ew,[],0,3,0,0,0,AJI,0,Bu,[],0,3,0,0,0,C8,0,B,[],3,3,0,0,0,CL,0,B,[],3,3,0,0,0,Kr,0,B,[],3,3,0,0,0,BK,"String",1,B,[C8,CL,Kr],0,3,0,Ff,["cQ",A53(AMV),"bJ",A54(Bj),"p3",A53(J6),"ms",A54(AOq)],FE,0,GY,[],0,3,0,0,0,Il,0,FE,[],0,3,0,0,0,AJm,0,Il,[],0,3,0,0,0,Er,0,B,[C8],1,3,0,0,0,HC,
0,Er,[CL],0,3,0,0,["bJ",A54(A2K),"ms",A54(AYt)],GS,0,B,[C8,Kr],0,0,0,0,["j4",A54(M3),"cQ",A53(L)],JP,0,B,[],3,3,0,0,0,K,0,GS,[JP],0,3,0,0,["pQ",A57(AYp),"pg",A56(ANI),"cQ",A53(Ec),"j4",A54(APM),"p9",A55(AYM)],E4,0,Il,[],0,3,0,0,0,AKl,0,E4,[],0,3,0,0,0,AJh,0,E4,[],0,3,0,0,0,ABp,0,B,[],3,3,0,0,0,Da,0,B,[],3,3,0,0,0,Yb,0,B,[],3,0,0,0,0,Ki,0,B,[ABp,Da,Yb],1,3,0,0,["bW",A53(Ez)],ZY,0,Ki,[],0,3,0,0,0,AIo,0,B,[],0,3,0,0,0,AKV,0,B,[],4,3,0,0,0,BT,0,B,[],3,3,0,0,0,Ce,0,B,[BT],3,3,0,0,0,ABz,0,B,[Ce],0,3,0,0,["bh",A54(A20)],AGv,
0,B,[],0,3,0,0,0,AJU,0,B,[BT],1,3,0,0,0,AEE,0,B,[],3,3,0,0,0,AKJ,0,B,[],3,3,0,0,0,AG1,0,B,[],3,3,0,0,0,L8,0,B,[],0,3,0,0,0,AE9,0,B,[BT],1,3,0,0,0,ABA,0,B,[Ce],0,3,0,0,["bh",A54(ALw)],ABy,0,B,[Ce],0,3,0,0,["bh",A54(A1Q)],LL,0,B,[],4,3,0,0,0,AGZ,0,B,[],4,3,0,0,0,AJb,0,B,[],0,3,0,0,0,ALt,0,B,[],4,3,0,0,0,WS,0,B,[Ce],0,3,0,0,["bh",A54(AZC)]]);
$rt_metadata([AHb,0,B,[BT],1,3,0,0,0,AIy,0,B,[],0,3,0,0,0,ACG,0,B,[BT],3,3,0,0,0,AJK,0,B,[ACG],1,3,0,0,["LB",A54(AXD),"R4",A53(AQo)],AFW,0,B,[BT],1,3,0,0,0,Gg,0,B,[],3,3,0,0,0,SQ,0,B,[Gg],0,3,0,0,0,BI,0,Bu,[],0,3,0,0,0,AJ8,0,B,[],4,3,0,0,0,F5,0,Bu,[],0,3,0,0,0,Ji,0,Bu,[],0,3,0,0,0,Dn,0,B,[CL],0,3,0,0,0,Wn,0,B,[BT],3,3,0,0,0,AAy,0,B,[Wn],3,3,0,0,0,EY,0,B,[BT],3,3,0,0,0,AIq,0,B,[BT,AAy,EY],1,3,0,0,["Ki",A53(AZj),"KS",A54(A1h),"SS",A54(A08),"Od",A54(AWu),"Rm",A54(ALM),"MQ",A53(ANA),"R2",A55(A1e),"K_",A56(APx),
"LJ",A53(AVA),"L2",A53(AZ1),"Qy",A54(A1M),"OU",A53(AQJ),"S_",A54(APb),"IY",A53(AQ2),"Px",A53(AUy),"S5",A53(AP1),"Gj",A54(AMn),"Ld",A53(A2M),"QT",A55(AX2),"OH",A55(AQB),"RU",A55(ATL),"RB",A53(AUW),"Sk",A53(AO0),"LO",A54(ANL),"Qg",A54(AOA),"N9",A55(AX_),"IC",A53(AP9),"LA",A54(AVD),"M3",A53(AOz),"L9",A53(AR4),"NW",A54(ALC),"IX",A54(ATh),"S0",A54(AVX),"Ia",A53(A1F),"Ox",A55(AV4),"RQ",A54(AZ_),"Is",A53(ASr),"Nl",A55(ARp),"GO",A55(AQ$),"Ph",A53(ATb),"LP",A54(AT_),"HS",A56(AZt),"Hc",A53(ANG),"HW",A55(AWg),"ON",A53(AVh),
"KA",A53(A2H),"Qv",A53(ARm),"FH",A53(AVf),"Ka",A55(ARq),"M4",A54(AWD),"Qd",A54(AOH),"G7",A53(A0J)],PE,0,B,[Ce],0,3,0,0,["bh",A54(ARZ)],AJv,0,B,[],4,3,0,0,0,Yu,0,B,[EY],3,3,0,0,0,RW,0,B,[EY],3,3,0,0,0,ZL,0,B,[EY],3,3,0,0,0,Tf,0,B,[EY],3,3,0,0,0,ADL,0,B,[EY],3,3,0,0,0,ACa,0,B,[EY,Yu,RW,ZL,Tf,ADL],3,3,0,0,0,AIT,0,B,[BT,ACa],1,3,0,0,["Q6",A55(AZJ),"Sq",A55(AYr),"He",A56(AO2),"OC",A54(AMB),"JK",A56(AWS)],BU,0,Bu,[],0,3,0,0,0,AEj,0,Bu,[],0,3,0,0,0,Ig,0,BI,[],0,3,0,0,0,AI7,0,B,[],0,3,0,0,0,Zo,0,B,[],3,3,0,0,0,X6,0,
B,[Zo],3,3,0,0,0,AAG,0,B,[X6],0,3,0,0,0,BE,0,B,[],3,3,0,0,0,AJR,0,B,[BE],0,3,0,0,0,V,0,B,[],3,3,0,0,0,AJS,0,B,[V],0,3,0,0,0,ZQ,0,B,[BT],3,3,0,0,0,Ut,0,B,[ZQ],0,3,0,0,["IZ",A54(AX1)],Ur,0,B,[V],0,3,0,0,0,Zd,0,B,[BT],3,3,0,0,0,Us,0,B,[Zd],0,3,0,0,["BM",A55(ANW)],AHk,0,B,[BT],1,3,0,0,0,CC,0,B,[BT],3,3,0,0,0,Uq,0,B,[CC],0,3,0,0,["cw",A54(AR3)],AAq,0,B,[],0,3,0,0,0,U1,0,B,[],3,3,0,0,["fn",A54(AUF)],Hw,0,B,[U1],3,3,0,0,["fn",A54(AUF),"pG",A54(AYe)],FG,0,B,[Hw],1,3,0,0,["fn",A54(AUF),"pG",A54(AYe),"eI",A53(EC),"q5",
A54(A0X)],NK,0,B,[Hw],3,3,0,0,["fn",A54(AUF),"pG",A54(AYe)],ML,0,B,[NK],3,3,0,0,["fn",A54(AUF),"pG",A54(AYe)]]);
$rt_metadata([Fv,0,FG,[ML],1,3,0,0,["fn",A54(AUF),"pG",A54(AYe),"zZ",A54(ASe),"b9",A53(B7),"uv",A55(ARE),"ou",A55(A1A),"bJ",A54(AQV)],Mk,0,Fv,[],1,3,0,0,["fn",A54(AUF),"pG",A54(AYe)],OS,0,B,[Hw],3,3,0,0,["fn",A54(AUF),"pG",A54(AYe)],AD6,0,B,[OS,NK],3,3,0,0,["fn",A54(AUF),"pG",A54(AYe)],TK,0,Mk,[AD6],0,3,0,0,["fn",A54(AUF),"pG",A54(AYe)],Lz,0,B,[],3,3,0,0,0,Ed,0,B,[Lz],1,3,0,0,0,Ex,0,B,[],3,3,0,0,0,VI,0,B,[Lz],3,3,0,0,0,Pg,0,B,[VI],3,3,0,0,0,Yh,0,Ed,[Ex,C8,Pg],0,3,0,0,0,AAs,0,B,[BE],0,3,0,0,0,AAt,0,B,[Ce],0,
3,0,0,["bh",A54(AUV)],AFe,0,B,[],0,3,0,0,0,NY,0,B,[],1,3,0,0,0,Uj,0,NY,[],0,3,0,0,0,Cv,0,B,[Da],1,3,0,0,["cj",A54(A2I)],YQ,0,B,[],0,3,0,0,0,AC6,0,B,[CC],0,3,0,0,["cw",A54(AZV)],AC7,0,B,[CC],0,3,0,0,["cw",A54(AZ6)],AC8,0,B,[CC],0,3,0,0,["cw",A54(AQG)],AC9,0,B,[CC],0,3,0,0,["cw",A54(AYK)],AC$,0,B,[CC],0,3,0,0,["cw",A54(AYW)],AC_,0,B,[CC],0,3,0,0,["cw",A54(AR9)],ADa,0,B,[CC],0,3,0,0,["cw",A54(AO1)],ADb,0,B,[CC],0,3,0,0,["cw",A54(A28)],ADc,0,B,[CC],0,3,0,0,["cw",A54(AOx)],ADd,0,B,[CC],0,3,0,0,["cw",A54(ASO)],VY,
0,B,[CC],0,3,0,0,["cw",A54(A2J)],VZ,0,B,[CC],0,3,0,0,["cw",A54(AQm)],V0,0,B,[CC],0,3,0,0,["cw",A54(AQL)],V1,0,B,[CC],0,3,0,0,["cw",A54(A0b)],ABU,0,B,[],3,3,0,0,0,AB4,0,B,[ABU],0,3,0,0,0,AB3,0,B,[CC],0,3,0,0,["cw",A54(APC)],OQ,0,B,[],0,3,0,0,0,KG,0,B,[Gg],0,3,0,0,["qf",A55(M0)],AHy,0,B,[],0,3,0,0,0,D9,0,B,[],3,3,0,0,0,Cr,0,B,[D9],3,3,0,0,0,CF,0,B,[],3,3,0,0,["bT",A54(AYl),"cn",A55(ATu),"dC",A55(AL8),"cA",A56(A0o)],EI,0,B,[],3,3,0,0,0,CY,0,B,[D9],3,3,0,0,0,EV,0,B,[],3,3,0,0,0,C1,0,B,[],3,3,0,0,0,E_,0,B,[C1],3,
3,0,0,0,Rk,0,B,[Da],0,3,0,0,0,Bg,0,B,[],0,3,0,0,["cQ",A53(AH7),"bJ",A54(APt)],ADi,0,B,[],0,3,0,0,0,AG3,0,B,[],0,3,0,0,0]);
$rt_metadata([AIG,0,B,[],3,3,0,0,0,Zb,0,B,[],0,3,0,0,0,Oc,0,B,[],0,3,0,0,0,Di,0,Oc,[],0,3,0,0,0,AKT,0,Di,[],0,3,0,0,0,Fw,0,Di,[],0,3,0,0,0,ZA,0,Di,[],0,3,0,0,0,AFZ,0,Fw,[],0,3,0,0,0,Hq,0,Fw,[],0,3,0,0,0,PL,0,Hq,[],0,3,0,0,0,AHP,0,Hq,[],0,3,0,0,0,AIU,0,Fw,[],0,3,0,0,0,AKn,0,Di,[],0,3,0,0,0,AEU,0,Di,[],0,3,0,0,0,Z$,0,B,[BT],3,3,0,0,0,ALr,0,B,[Z$],3,3,0,0,0,Za,0,B,[Da],0,3,0,0,0,Rc,0,B,[],0,3,0,0,0,CI,0,B,[CL,C8],1,3,0,0,0,G8,0,CI,[],12,3,0,JD,0,Mu,0,B,[],3,3,0,0,0,S$,0,B,[Mu],3,3,0,0,0,AB9,0,B,[],3,3,0,0,0,GU,
0,B,[S$,AB9],1,3,0,0,0,MX,0,GU,[],0,3,0,0,0,AFG,0,MX,[],0,3,0,0,0,HB,0,GU,[],1,3,0,0,0,LJ,0,HB,[],0,3,0,0,["mV",A56(APv)],Eh,0,CI,[],12,3,0,A15,0,MP,0,B,[CL],1,3,0,0,0,Mx,0,MP,[],0,3,0,AFA,0,Yl,0,B,[],0,3,0,0,0,H2,0,CI,[],12,0,0,AQC,0,NM,0,HB,[],0,3,0,0,["mV",A56(AOd)],AGY,0,BU,[],0,3,0,0,0,Uu,0,Ew,[],0,3,0,0,0,Mw,0,B,[BT],3,3,0,0,0,AD2,0,B,[Mw],0,3,0,0,["bh",A54(ASx)],AD3,0,B,[Mw],0,3,0,0,["bh",A54(AMP)],H_,0,B,[],1,3,0,0,0,AAm,0,B,[],3,3,0,0,0,LD,0,H_,[CL,JP,Kr,AAm],1,3,0,0,0,Nd,0,H_,[CL],1,3,0,0,0,IJ,0,B,
[],0,3,0,Hk,0,Pl,0,Cv,[],0,3,0,0,["bM",A53(AQh),"ce",A55(APa)],HJ,0,Cv,[],1,3,0,0,["ce",A55(AF9)],Cz,0,HJ,[],1,3,0,0,["bM",A53(AN9),"ce",A55(ID),"cj",A54(AMJ)],Fd,0,B,[],3,3,0,0,0,JK,0,B,[],3,3,0,0,0,Fk,0,B,[],3,3,0,0,0]);
$rt_metadata([K1,0,Cz,[CF,Fd,JK,Fk,EI,EV,E_],0,3,0,0,["h9",A55(A2h),"cj",A54(ASi),"bM",A53(AYT),"hd",A53(AXX),"qi",A53(ASF),"ot",A53(AYP),"nX",A54(ATf),"kE",A54(AZF),"g6",A54(ANr),"ce",A55(APO),"ev",A54(AMa),"bT",A54(AZZ),"cA",A56(AXY),"cn",A55(AQF),"dC",A55(A0q),"dz",A56(ARU),"cp",A53(AYo)],AG8,0,K1,[],0,3,0,0,["hd",A53(AQQ)],AHw,0,B,[],0,3,0,0,0,AJM,0,B,[BT],1,3,0,0,0,K8,0,LD,[],1,0,0,0,0,AFT,0,K8,[],0,0,0,0,0,Lw,0,B,[],1,3,0,0,0,Og,0,B,[],0,3,0,0,0,AEK,0,B,[],0,3,0,0,0,I8,0,B,[BT],3,3,0,0,0,W0,0,B,[I8],0,
3,0,0,["bh",A54(AOi)],WZ,0,B,[I8],0,3,0,0,["bh",A54(ARi)],WX,0,B,[Ce],0,3,0,0,["bh",A54(ARL)],WW,0,B,[Ce],0,3,0,0,["bh",A54(AWh)],W,0,B,[],3,3,0,0,0,Tq,0,B,[W],0,3,0,0,["g",A54(A2N)],Ts,0,B,[W],0,3,0,0,["g",A54(AYs)],UJ,0,B,[BE],0,3,0,0,["bc",A54(ATt)],UI,0,B,[BE],0,3,0,0,["bc",A54(ALW)],UF,0,B,[BE],0,3,0,0,["bc",A54(AWV)],UE,0,B,[BE],0,3,0,0,["bc",A54(AZD)],UH,0,B,[BE],0,3,0,0,["bc",A54(AN3)],UG,0,B,[BE],0,3,0,0,["bc",A54(AUD)],UM,0,B,[BE],0,3,0,0,["bc",A54(ANH)],UL,0,B,[BE],0,3,0,0,["bc",A54(AP_)],UO,0,B,
[BE],0,3,0,0,["bc",A54(A0Z)],UN,0,B,[BE],0,3,0,0,["bc",A54(ALF)],AA6,0,B,[BE],0,3,0,0,["bc",A54(ALQ)],AA5,0,B,[BE],0,3,0,0,["bc",A54(AYy)],AA4,0,B,[BE],0,3,0,0,["bc",A54(AQ4)],AAT,0,B,[BE],0,3,0,0,["bc",A54(AOm)],AAS,0,B,[BE],0,3,0,0,["bc",A54(AUQ)],AAQ,0,B,[BE],0,3,0,0,["bc",A54(A1Y)],AAP,0,B,[BE],0,3,0,0,["bc",A54(AQi)],AAO,0,B,[BE],0,3,0,0,["bc",A54(A01)],AAN,0,B,[BE],0,3,0,0,["bc",A54(ALz)],AAM,0,B,[BE],0,3,0,0,["bc",A54(A0O)],AAX,0,B,[BE],0,3,0,0,["bc",A54(AZ7)],AAW,0,B,[BE],0,3,0,0,["bc",A54(ANe)],AAV,
0,B,[BE],0,3,0,0,["bc",A54(AXH)],AAU,0,B,[BE],0,3,0,0,["bc",A54(AO8)],AAZ,0,B,[BE],0,3,0,0,["bc",A54(AO9)],AAY,0,B,[BE],0,3,0,0,["bc",A54(AVt)],ADm,0,B,[],0,0,0,0,0,Id,0,B,[],0,3,0,0,0,Qp,0,Id,[],0,3,0,0,0,AG9,0,B,[],0,3,0,0,0,OO,0,Id,[],0,3,0,0,0,Ty,0,B,[BT],3,3,0,0,0,Py,0,B,[Ty],0,3,0,0,["LV",A54(AYz)]]);
$rt_metadata([ACd,0,B,[W],0,3,0,0,["g",A54(ACZ)],ADt,0,Nd,[],0,0,0,0,0,CD,0,B,[Da],0,3,0,0,["bW",A53(ASj),"hW",A53(AZv),"dA",A56(JU),"dx",A54(AK$),"cj",A54(AV_),"rL",A54(AQb),"o0",A54(ATU),"lB",A55(A0D),"kd",A53(AT2),"cA",A56(AO4),"cn",A55(AMW),"dC",A55(AQU),"bT",A54(ATH),"dz",A56(A0v)],AFq,0,CD,[],0,3,0,0,["dx",A54(AGG)],AFX,0,B,[],0,3,0,0,0,FW,0,B,[],3,3,0,0,["ws",A53(AZw),"uD",A53(AOs)],Q7,0,B,[],3,0,0,0,0,Mt,0,B,[FW],3,3,0,0,["ws",A53(AZw),"uD",A53(AOs)],AFw,0,CD,[FW,CF,JK,Q7,Mt],0,3,0,0,["dA",A56(Mv),"lB",
A55(ARu),"pq",A55(A2O),"uD",A53(AXb),"ws",A53(AVk),"qi",A53(Jz),"ot",A53(KB),"nX",A54(Iz),"kE",A54(AR_),"kd",A53(LZ),"bW",A53(AVI),"cj",A54(I4),"qh",A54(AJp),"hW",A53(AHg),"px",A53(AS1),"dx",A54(AY1),"li",A53(TS),"kv",A53(TR),"hI",A54(ARR),"kX",A53(ARH),"l0",A53(AUx),"dz",A56(LU),"dC",A55(S9),"cn",A55(Wy),"cA",A56(O9),"bT",A54(XA),"iu",A54(A2q)],AIg,0,B,[],0,3,0,0,0,T0,0,B,[W],0,3,0,0,["g",A54(AMk)],T1,0,B,[W],0,3,0,0,["g",A54(A1s)],T2,0,B,[Cr],0,3,0,0,["I",A54(APU)],HO,0,B,[Cr],0,3,0,0,["I",A54(AOu)],TY,0,
B,[W],0,3,0,0,["g",A54(AQH)],TZ,0,B,[CY],0,3,0,0,["I",A54(A1Z)],CR,0,B,[],3,3,0,0,0,ADH,0,B,[CF,CR],0,3,0,0,["bT",A54(AU1),"cA",A56(AM4),"cn",A55(AO5),"dC",A55(A2k),"ff",A55(AYh)],TE,0,B,[],0,3,0,0,0,Wp,0,B,[EI],0,3,0,0,["dz",A56(A2d)],Wo,0,B,[CY],0,3,0,0,["I",A54(AM5)],AFi,0,B,[],0,3,0,0,0,AD0,0,B,[],0,3,0,0,0,ADQ,0,B,[],0,3,0,0,0,Fx,0,B,[Da],0,3,0,0,0,AHL,0,B,[],0,3,0,0,0,AFh,0,B,[Da],0,3,0,0,0,Xv,0,B,[W],0,3,0,0,0,Xu,0,B,[W],0,3,0,0,["g",A54(AMx)],Xt,0,B,[W],0,3,0,0,["g",A54(ALS)],AKj,0,B,[],0,3,0,0,0,Xs,
0,B,[V],0,3,0,0,["f",A53(AU3)],Xz,0,B,[V],0,3,0,0,["f",A53(AXh)],Xy,0,B,[V],0,3,0,0,["f",A53(A3l)],Xx,0,B,[V],0,3,0,0,["f",A53(AP5)],Xw,0,B,[V],0,3,0,0,["f",A53(ARM)],Xr,0,B,[V],0,3,0,0,["f",A53(A2P)],UT,0,B,[V],0,3,0,0,["f",A53(AP8)],UU,0,B,[V],0,3,0,0,["f",A53(AZ3)],AGp,0,B,[BT],1,3,0,0,0,Nz,0,B,[],4,3,0,AX$,0,AES,0,B,[],3,3,0,0,0,AAa,0,B,[Cr],0,3,0,0,["I",A54(AOR)],Z_,0,B,[Cr],0,3,0,0,["I",A54(AWf)],TQ,0,B,[],0,3,0,0,0,Ks,0,B,[],0,3,0,0,0,Fr,0,B,[],0,3,0,0,0,Nx,0,Fr,[],0,3,0,0,0,AA2,0,Fr,[],0,3,0,0,0,YZ,
0,Fr,[],0,3,0,0,0]);
$rt_metadata([He,0,B,[],3,3,0,0,0,SC,0,B,[],3,3,0,0,0,B2,0,B,[],0,3,0,0,["bJ",A54(AUm)],LK,0,B,[],3,3,0,0,0,AIz,0,Fv,[Ex,C8,LK],0,3,0,0,["pG",A54(AYe),"kG",A54(BH),"c2",A53(AZM),"zZ",A54(BB),"ou",A55(AJE),"qe",A54(EL),"q5",A54(AG_),"jg",A53(Iw),"uv",A55(AIM),"fn",A54(Fy)],LC,0,B,[],0,3,0,0,0,Iu,0,B,[Da],0,3,0,0,["bW",A53(AGx)],YO,0,B,[],3,0,0,0,0,OL,0,B,[],3,3,0,0,0,Y8,0,B,[V],0,3,0,0,["f",A53(AXO)],Y7,0,B,[V],0,3,0,0,["f",A53(AUP)],AK1,0,B,[],0,3,0,0,0,TC,0,B,[],0,3,0,0,0,GZ,0,B,[],1,3,0,0,0,ZW,0,GZ,[],0,3,
0,0,["ug",A54(Cd)],Me,0,B,[],3,3,0,0,0,TG,0,B,[Me],3,3,0,0,0,SS,"JsFileHandle",7,B,[TG],0,3,0,0,["pc",A53(Eq),"tt",A53(AMb),"cQ",A53(AYg)],ACW,0,B,[],3,3,0,0,0,AJ1,0,B,[ACW],0,3,0,0,["cQ",A53(AWx)],Z5,0,B,[OL],0,3,0,0,0,Hf,0,B,[CL],0,3,0,0,0,NU,0,B,[],0,3,0,0,0,DH,0,B,[],0,3,0,0,0,Yx,0,B,[],0,3,0,0,0,Lq,0,Ed,[Ex,C8],0,3,0,0,0,Cw,0,B,[],0,3,0,0,0,NR,0,Lq,[],0,3,0,0,0,Z2,0,B,[],0,3,0,0,0,ALi,0,B,[CL],0,3,0,0,["bJ",A54(ASR),"ms",A54(AV$)],U6,0,B,[Gg],0,3,0,0,["qf",A55(AP$)],Zz,0,B,[],0,3,0,0,["cQ",A53(AL$),"bJ",
A54(AMS)],Jt,0,B,[],3,3,0,0,0,GX,0,B,[Jt,Ex],0,0,0,0,["bJ",A54(AWz)],HS,0,GX,[],0,0,0,0,0,NO,0,Lw,[],1,3,0,0,0,QI,0,NO,[],0,3,0,0,0,I$,0,Ew,[],0,3,0,0,0,O0,0,B,[I8],0,3,0,0,["bh",A54(AUd)],O2,0,B,[Ce],0,3,0,0,["bh",A54(ATE)],O1,0,B,[Ce],0,3,0,0,["bh",A54(AVv)],IZ,0,B,[],0,3,0,0,0,KD,0,Cz,[Fd,Fk],0,3,0,0,["g6",A54(AXV),"cj",A54(A1n),"bM",A53(AOT),"hd",A53(A2F),"ce",A55(ALE),"ev",A54(AWT)],AIj,0,Cv,[],0,3,0,0,["cj",A54(ALY),"bM",A53(ANK),"ce",A55(APS)],ABn,0,Cv,[],0,3,0,0,["cj",A54(ARf),"bM",A53(AV2),"ce",A55(AXa)],XD,
0,Cz,[CF,CR],0,3,0,0,["cn",A55(ATu),"dC",A55(AL8),"ff",A55(APl),"ce",A55(AOj),"bM",A53(AWO),"bT",A54(APV),"cA",A56(AMy)],AAR,0,Cz,[CR],0,3,0,0,["ff",A55(ANy),"ce",A55(AMN)],W5,0,HJ,[CF],0,3,0,0,["bT",A54(AYl),"cn",A55(ATu),"dC",A55(AL8),"cA",A56(A0o),"bM",A53(A0Y),"cj",A54(ALR)],SP,0,Cv,[],0,3,0,0,["bM",A53(ALD),"ce",A55(AUM)],Ds,0,Cv,[],0,3,0,0,["bM",A53(AAl),"ce",A55(SL)]]);
$rt_metadata([Rf,"SelectFileTest",5,Ds,[],0,3,0,0,0,Xk,0,Cz,[],0,3,0,0,0,WH,"RenderTexture",5,Ds,[],0,3,0,0,["cj",A54(AO3),"bM",A53(AWE),"ce",A55(A2z)],SN,"ScissorDemo",5,Ds,[],0,3,0,0,["bM",A53(A2_),"ce",A55(AOO)],AAF,0,Cv,[],0,3,0,0,["bM",A53(ATG),"ce",A55(AWQ),"cj",A54(A0F)],Kv,"ClipboardTest",5,Ds,[CF],0,3,0,0,["bT",A54(AYl),"cn",A55(ATu),"dC",A55(AL8),"cA",A56(API)],Sz,"CodiconDemo",5,Ds,[],0,3,0,0,["bM",A53(AUl)],G4,0,Cv,[CF],1,3,0,0,["bT",A54(AYl),"cn",A55(ATu),"dC",A55(AL8),"cA",A56(A0o),"bM",A53(AFo)],Tp,
0,G4,[],0,3,0,0,["cn",A55(ATu),"dC",A55(AL8),"cA",A56(A0o),"ce",A55(A0s),"bT",A54(A1k)],To,0,G4,[],0,3,0,0,["cn",A55(ATu),"dC",A55(AL8),"cA",A56(A0o),"bT",A54(A2R),"bM",A53(ANu),"ce",A55(AMh)],Wc,0,Cz,[CR],0,3,0,0,["ff",A55(APk)],Fp,"WindowDemo",6,Cz,[CR],0,3,[0,0,0],0,["lp",A53(AWo),"ps",A53(AP3),"nO",A54(AIP),"ff",A55(A07)],Qy,"EditorInViewDemo",5,Fp,[CR,Fd,Fk],0,3,[0,0,0],0,["cj",A54(AWl),"lp",A53(AMQ),"ps",A53(AU8),"nO",A54(A2T),"ev",A54(ASJ),"g6",A54(AR7)],W9,0,B,[CF],0,0,0,0,["cn",A55(ATu),"dC",A55(AL8),
"cA",A56(A0o),"bT",A54(A0V)],ACH,0,Cv,[CF],0,3,0,0,["bT",A54(AYl),"cn",A55(ATu),"dC",A55(AL8),"cA",A56(A0o),"ce",A55(A2L),"bM",A53(AXN),"cj",A54(ASu)],YX,"FileViewDemo",6,Fp,[CR],0,3,[0,0,0],0,["lp",A53(AZm),"nO",A54(A0A)],OU,0,KD,[],0,3,0,0,["hd",A53(AV5)],RV,0,Cz,[CR],0,3,0,0,["ff",A55(AWR)],PK,"DiffMiddleDemo",8,Fp,[CR],0,3,[0,0,0],0,["lp",A53(AW8)],TU,0,Cz,[CR],0,3,0,0,["ff",A55(AT7)],Kh,0,B,[],0,3,0,0,0,AFR,0,B,[],0,3,0,0,0,AER,0,B,[],3,3,0,0,0,AId,0,B,[],0,3,0,0,0,AGe,0,B,[],3,3,0,0,0,AHV,0,B,[],0,3,0,
0,0,ME,0,B,[Jt,C8],0,3,0,0,0,KO,0,ME,[],0,0,0,0,0,AK_,0,B,[],0,3,0,0,0,YE,0,B,[Cr],0,3,0,0,["I",A54(AVP)],YC,0,B,[W],0,3,0,0,["g",A54(AXk)],YD,0,B,[CY],0,3,0,0,["I",A54(AS4)],AHR,0,Ks,[],0,3,0,0,0,TV,0,B,[CF],0,0,0,0,["bT",A54(AV3),"cA",A56(ALL),"cn",A55(AVW),"dC",A55(AVo)],Y5,0,B,[Cr],0,3,0,0,["I",A54(A1H)],Y4,0,B,[Cr],0,3,0,0,["I",A54(AZ8)],Y3,0,B,[EV],0,3,0,0,["h9",A55(AYq)],Y2,0,B,[V],0,3,0,0,["f",A53(AUZ)],Y1,0,B,[CY],0,3,0,0,["I",A54(ARo)],Y0,0,B,[EI],0,3,0,0,["dz",A56(A1N)],Hl,0,B2,[],0,3,0,0,0,AGP,0,
B,[],3,3,0,0,0,WF,0,B,[CF],0,0,0,0,["bT",A54(AYl),"cn",A55(ATu),"dC",A55(AL8),"cA",A56(AN7)],WC,0,B,[],0,3,0,0,0,AGf,0,B,[],0,3,0,0,0,AI6,0,B,[],0,3,0,0,["bJ",A54(A04)],ABO,0,B,[Cr],0,3,0,0,["I",A54(AQ3)],ABK,0,B,[CY],0,3,0,0,["I",A54(ASN)],ABL,0,B,[V],0,3,0,0,["f",A53(A3e)],ABM,0,B,[V],0,3,0,0,["f",A53(AMr)]]);
$rt_metadata([BC,0,B,[],0,3,0,0,0,Uy,0,B,[Cr],0,3,0,0,["I",A54(AYj)],Uz,0,B,[CY],0,3,0,0,["I",A54(AL9)],AHx,0,B,[],0,3,0,0,0,O_,0,B,[CR],0,3,0,0,["ff",A55(AQ9)],O$,0,B,[Cr],0,3,0,0,["I",A54(AZH)],ZR,0,B,[],3,3,0,0,0,AIk,0,B,[ZR],0,3,0,0,0,WQ,0,B,[CF],0,0,0,0,["cA",A56(A0o),"cn",A55(AU$),"dC",A55(AL4),"bT",A54(AW2)],AAb,0,B,[EI],0,3,0,0,["dz",A56(AQ7)],QP,0,B,[Cr],0,3,0,0,["I",A54(AQY)],RG,0,B,[CY],0,3,0,0,["I",A54(AUn)],RF,0,B,[W],0,3,0,0,["g",A54(A0I)],ABX,0,B,[CF],0,0,0,0,["dC",A55(AL8),"cA",A56(A0o),"bT",
A54(AZY),"cn",A55(AUc)],AGk,0,B,[],0,3,0,0,0,Dj,0,B,[],3,3,0,FN,0,YF,0,B,[CF],0,0,0,0,["cA",A56(A0o),"cn",A55(APe),"dC",A55(AVl),"bT",A54(AOa)],V3,0,B,[EI],0,3,0,0,["dz",A56(A1K)],ADq,0,B,[Cr],0,3,0,0,["I",A54(ANn)],ADp,0,B,[EV],0,3,0,0,["h9",A55(AYx)],ADo,0,B,[EV],0,3,0,0,["h9",A55(ANt)],ADn,0,B,[E_],0,3,0,0,["cp",A53(AQn)],ADr,0,B,[E_],0,3,0,0,["cp",A53(A1f)],Sf,0,B,[Cr],0,3,0,0,["I",A54(ATQ)],Pz,0,B,[Cr],0,3,0,0,["I",A54(AL0)],PA,0,B,[CY],0,3,0,0,["I",A54(AXI)],PB,0,B,[W],0,3,0,0,["g",A54(AZW)],PC,0,B,[CY],
0,3,0,0,["I",A54(A1C)],QW,0,B,[Cr],0,3,0,0,["I",A54(APJ)],AHi,0,B,[],3,3,0,0,0,XE,0,B,[CY],0,3,0,0,["I",A54(ANP)],UD,0,B,[CY],0,3,0,0,["I",A54(ARX)],UC,0,B,[Cr],0,3,0,0,["I",A54(ARn)],AA8,0,B,[CY],0,3,0,0,["I",A54(ARW)],Dp,0,B,[],3,3,0,AOg,0,Co,0,CI,[],12,3,0,T5,0,Kx,0,B,[],0,3,0,0,0,I1,0,B,[],0,3,0,0,0,AJX,0,B,[],0,3,0,0,0,DP,0,B,[],3,3,0,AU7,0,X$,0,B,[BT],3,3,0,0,0,Yk,0,B,[X$],0,3,0,0,["BM",A55(AXo)],X_,0,B,[BT],3,3,0,0,0,Yi,0,B,[X_],0,3,0,0,["BM",A55(AX6)],AE_,0,B,[],0,3,0,0,0,AIi,0,B,[BT],3,3,0,0,0,Vg,0,
B,[],0,3,0,0,0,DT,0,B,[],3,3,0,AY6,0,HW,0,B,[],3,3,0,0,0,Qc,0,B,[HW],0,3,0,0,["wP",A56(A0z)]]);
$rt_metadata([Qd,0,B,[HW],0,3,0,0,0,TX,0,B,[W],0,3,0,0,["g",A54(AZA)],PT,0,B,[W],0,3,0,0,["g",A54(AN1)],PS,0,B,[W],0,3,0,0,["g",A54(AMG)],PP,0,B,[W],0,3,0,0,["g",A54(ALT)],PN,0,B,[W],0,3,0,0,["g",A54(A2S)],AH0,0,B,[],0,3,0,0,0,UW,0,B,[W],0,3,0,0,["g",A54(AX7)],ACm,0,B,[Cr],0,3,0,0,["I",A54(AOZ)],AKK,0,B,[],0,3,0,0,["bJ",A54(AWr)],I9,0,B,[],0,3,0,0,0,Kt,0,B,[],4,3,0,0,0,AII,0,B,[],0,3,0,0,0,Ct,0,CI,[],12,3,0,AFm,0,ALe,0,B,[],0,3,0,0,0,AFH,0,B,[BT],4,3,0,0,0,ALn,0,B,[],0,3,0,0,0,AEr,0,B,[],3,3,0,0,0,C4,0,B,[BT],
1,3,0,0,0,AKb,0,C4,[],1,3,0,0,0,AKy,0,C4,[],1,3,0,0,0,AIX,0,C4,[],1,3,0,0,0,AI8,0,C4,[],1,3,0,0,0,AKN,0,C4,[],1,3,0,0,0,Vq,0,B,[V],0,3,0,0,["f",A53(APz)],HG,0,CI,[],12,3,0,AQI,0,PG,0,B,[BE],0,3,0,0,["bc",A54(AVm)],ZI,0,B,[],0,3,0,0,0,AIE,0,B,[],0,3,0,0,0,Gs,0,B,[],0,3,0,0,0,AFy,0,B,[],4,3,0,0,0,TA,0,B,[],0,0,0,0,0,AIK,0,B,[],3,3,0,0,0,ABh,0,B,[EI],0,3,0,0,["dz",A56(APE)],V$,0,B,[EV],0,3,0,0,["h9",A55(A2B)],V9,0,B,[E_],0,3,0,0,["cp",A53(AQf)],V_,0,B,[Da],0,3,0,0,0,XL,0,B,[CF],0,0,0,0,["cn",A55(ATu),"dC",A55(AL8),
"cA",A56(A0o),"bT",A54(A3h)],AFF,0,B,[BT],1,3,0,0,0,AHd,0,B,[CR,FW,Da],0,3,0,0,["ws",A53(AZw),"uD",A53(AOs),"ff",A55(A2Z),"iu",A54(AQc),"bW",A53(AR5)],Xc,0,B,[W],0,3,0,0,["g",A54(APZ)],U8,0,B,[W],0,3,0,0,["g",A54(A2D)],Q8,0,B,[W],0,3,0,0,["g",A54(AVR)],PV,0,B,[C1],0,3,0,0,["cp",A53(AVb)],AJ9,0,B,[],3,3,0,0,0,LY,0,B,[],3,3,0,0,0,Rb,0,B,[LY],0,3,0,0,["zo",A54(AWa)],Pw,0,B,[BE],0,3,0,0,["bc",A54(A1R)],AGD,0,B,[],0,3,0,0,0,QQ,0,B,[Da],0,3,0,0,0]);
$rt_metadata([AEu,0,B,[],0,3,0,0,0,Ud,0,B,[],0,3,0,0,0,Ma,0,B,[],0,3,0,0,0,SA,0,B,[],3,3,0,0,0,ACs,0,B,[W],0,3,0,0,["g",A54(AWb)],Gf,0,I$,[],0,3,0,0,0,ADD,0,FE,[],0,3,0,0,0,ACP,0,B,[W],0,3,0,0,["g",A54(AUp)],Uo,0,B,[W],0,3,0,0,["g",A54(A2c)],VT,0,B,[V],0,3,0,0,["f",A53(A0P)],Fl,0,B,[Fd],1,3,0,0,0,K7,0,B,[],3,3,0,0,["rQ",A55(AMD)],LO,0,Fl,[K7],0,3,0,0,["qg",A54(AWd),"bW",A53(AYv),"ev",A54(AWZ),"zG",A54(AWX),"xy",A54(ASQ),"uU",A54(AZO),"rQ",A55(AZk)],ADg,0,B,[C1],0,3,0,0,["cp",A53(AUa)],Zj,"FolderDiffWindow",
8,Fl,[],0,3,[0,0,0],0,["bW",A53(AMR),"qg",A54(AXQ)],Vh,0,B,[C1],0,3,0,0,["cp",A53(AUh)],ADT,0,Er,[CL],0,3,0,0,0,Gw,0,B,[],0,0,0,0,0,JJ,0,B,[],4,3,0,0,0,Ui,0,B,[],0,3,0,0,0,Ov,0,B,[],1,3,0,0,0,ACU,0,B,[CL],0,3,0,0,["bJ",A54(ALU),"p3",A53(ASg),"ms",A54(A0e)],AFP,0,C4,[],1,3,0,0,0,UR,0,B,[V],0,3,0,0,["f",A53(AMM)],AEa,0,B,[],3,3,0,0,0,R4,0,B,[V],0,3,0,0,["f",A53(AYZ)],Zv,0,B,[V],0,3,0,0,["f",A53(ATg)],Zu,0,B,[V],0,3,0,0,["f",A53(AYJ)],Zw,0,B,[V],0,3,0,0,["f",A53(AZ2)],Y9,0,B,[W],0,3,0,0,["g",A54(AVz)],Rw,0,B,[W],
0,3,0,0,["g",A54(AZp)],Ft,0,CD,[],0,3,0,0,0,Rq,0,Ft,[FW],0,3,0,0,["ws",A53(AZw),"uD",A53(AOs),"bW",A53(A2a),"lB",A55(AWN),"dx",A54(AU9),"o0",A54(A0c),"rL",A54(A1g),"bT",A54(AP7),"cn",A55(AOl),"cA",A56(ASa),"iu",A54(A1t)],Vd,0,B,[V],0,3,0,0,["f",A53(ATW)],AFl,0,CD,[],0,3,0,0,["bW",A53(ASS),"dA",A56(AOL),"dx",A54(A0G),"cA",A56(ATc),"cn",A55(ASU),"dC",A55(ARa),"bT",A54(AQZ),"dz",A56(AW$),"hW",A53(AHU)],ADM,0,B,[W],0,3,0,0,["g",A54(ANC)],ADO,0,B,[W],0,3,0,0,["g",A54(ALV)],Qe,0,Ft,[],0,3,0,0,["hW",A53(AT4),"o0",
A54(A0i),"dx",A54(AUj),"cn",A55(AQy)],ADN,0,B,[V],0,3,0,0,["f",A53(AS7)],Uv,0,CD,[],0,3,0,0,0,HV,0,CD,[],1,3,0,0,["bW",A53(AZs),"dx",A54(AQR),"cj",A54(AVj),"dA",A56(ANB),"cA",A56(A1X),"cn",A55(ATe),"dC",A55(A17),"bT",A54(A2u),"dz",A56(AOe),"kd",A53(A2g)],Q1,0,HV,[Fk],0,3,0,0,["BS",A53(APu),"hW",A53(AXL)],Hm,0,B,[],0,3,0,0,0,Dh,0,Hm,[],0,3,0,0,0,AAK,0,B,[V],0,3,0,0,["f",A53(ANN)],Ii,0,HV,[],1,0,0,0,["BS",A53(AP4)],AFU,0,Ii,[Fd],0,0,0,0,0,SJ,0,B,[V],0,3,0,0,["f",A53(AV1)],SI,0,B,[V],0,3,0,0,["f",A53(AUG)],AAd,
0,Er,[CL],0,3,0,0,0]);
$rt_metadata([ACg,0,B,[W],0,3,0,0,["g",A54(A2Q)],AD$,0,B,[V],0,3,0,0,["f",A53(AYu)],XC,0,B,[V],0,3,0,0,["f",A53(AVF)],ABF,0,B,[],0,3,0,0,0,Ka,0,B,[],0,3,0,0,0,OE,0,B,[],3,3,0,0,0,Lt,0,Ft,[FW],0,3,0,0,["ws",A53(AZw),"uD",A53(AOs),"bW",A53(ARG),"lB",A55(AMv),"dx",A54(AY3),"cA",A56(A1J),"cn",A55(ANo)],AJw,0,Lt,[],0,3,0,0,["ws",A53(AZw),"uD",A53(AOs)],PH,0,CD,[],0,3,0,0,["dx",A54(AL1)],AF_,0,B,[Mt],0,3,0,0,["ws",A53(AZw),"uD",A53(AOs),"li",A53(AS2),"kv",A53(A1U),"hI",A54(ATS),"kX",A53(APT),"l0",A53(AVq),"pq",A55(AQq),
"qh",A54(AZg),"px",A53(MG)],ABN,0,B,[],0,3,0,0,0,Xm,0,B,[V],0,3,0,0,["f",A53(AT9)],SK,0,B,[V],0,3,0,0,["f",A53(APX)],P2,0,B,[W],0,3,0,0,["g",A54(AL6)],P1,0,B,[W],0,3,0,0,["g",A54(AMm)],TM,0,B,[],3,3,0,AO$,0,AEe,0,B,[Gg],0,3,0,0,["qf",A55(ASw)],Li,0,B,[],0,3,0,0,0,ALb,0,GZ,[],0,0,0,0,["ug",A54(A27)],C_,0,Bu,[],0,3,0,0,0,AKm,0,FE,[],0,3,0,0,0,ALh,0,B,[],0,3,0,0,0,OV,0,B,[W],0,3,0,0,["g",A54(AUE)],ACN,0,B,[W],0,3,0,0,["g",A54(AZb)],Om,0,BI,[],0,3,0,0,0,Sl,0,B,[W],0,3,0,0,["g",A54(AWW)],Sk,0,B,[W],0,3,0,0,["g",
A54(A1_)],Fj,0,B,[],3,3,0,0,0,Xh,0,B,[Fj],0,0,0,0,["cE",A53(B_),"b_",A53(Ca),"po",A53(ZC)],Ln,0,Ov,[],1,3,0,0,0,Td,0,Ln,[],0,3,0,0,0,Yq,0,B,[W],0,3,0,0,0,VM,0,B,[W],0,3,0,0,["g",A54(ATB)],Pb,0,B,[C1],0,3,0,0,["cp",A53(ASd)],Pa,0,B,[C1],0,3,0,0,["cp",A53(AWI)],AAC,0,B,[C1],0,3,0,0,["cp",A53(AZS)],XN,0,B,[C1],0,3,0,0,["cp",A53(AUN)],AAk,0,B,[Ce],0,3,0,0,["bh",A54(A2w)],AFS,0,B,[BT],1,3,0,0,0,ACL,0,B,[Ce],0,3,0,0,["bh",A54(AOy)],AHJ,0,B,[BE],0,3,0,0,0,AGO,0,B,[BE],0,3,0,0,0,Xe,0,B,[W],0,3,0,0,["g",A54(ANl)],Xd,
0,B,[W],0,3,0,0,["g",A54(ASI)],Tt,0,B,[V],0,3,0,0,["f",A53(ATv)],AFa,0,B,[],0,3,0,0,0,ABj,0,B,[V],0,3,0,0,["f",A53(ALx)],ABk,0,B,[V],0,3,0,0,["f",A53(AOW)],ACQ,0,B,[V],0,3,0,0,["f",A53(A2E)],QL,0,B,[],0,3,0,0,0]);
$rt_metadata([WB,0,B,[V],0,3,0,0,["f",A53(AXf)],WA,0,B,[D9],0,3,0,0,0,AHI,0,B,[],0,3,0,0,0,Ef,0,Bu,[],0,3,0,0,0,AHa,0,B,[],0,3,0,0,0,SM,0,Ed,[Ex,C8],0,3,0,0,0,UP,0,B,[],0,3,0,0,0,Uw,0,B,[],0,3,0,0,0,WU,0,B,[D9],0,3,0,0,0,S2,0,B,[W],0,3,0,0,["g",A54(ASK)],YG,0,Er,[CL],0,3,0,0,0,Ke,0,B,[],4,3,0,0,0,T6,0,B,[V],0,3,0,0,["f",A53(AL_)],T7,0,B,[V],0,3,0,0,["f",A53(AOc)],T8,0,B,[V],0,3,0,0,["f",A53(A2b)],T9,0,B,[V],0,3,0,0,["f",A53(AQj)],T$,0,B,[V],0,3,0,0,["f",A53(ASq)],OZ,0,B,[Ce],0,3,0,0,["bh",A54(A3k)],VP,0,B,[],
3,3,0,A4i,0,AB5,0,B,[],0,3,0,0,0,Rl,0,B,[V],0,3,0,0,["f",A53(AZe)],WN,0,B,[V],0,3,0,0,["f",A53(AZa)],Xl,0,B,[],0,3,0,0,0,AHh,0,B,[],0,3,0,0,0,AEV,0,B,[],3,3,0,0,0,R8,0,B,[V],0,3,0,0,["f",A53(AXT)],AC3,0,B,[V],0,3,0,0,["f",A53(AT5)],Yy,0,B,[],1,3,0,0,0,Zr,0,B,[Mu],3,3,0,0,0,Pu,0,B,[Zr],3,3,0,0,0,Ia,0,B,[Pu],1,3,0,0,0,AAn,0,Ia,[],0,3,0,0,0,Ru,0,B,[],3,3,0,0,0,P5,0,B,[W],0,3,0,0,0,ADK,0,B,[W],0,3,0,0,["g",A54(AMw)],AF1,0,B,[],3,3,0,0,0,JH,0,GX,[],0,0,0,0,0,H$,0,Bu,[],0,3,0,0,0,ADW,0,B,[Ce],0,3,0,0,["bh",A54(A0W)],ADV,
0,B,[Ce],0,3,0,0,["bh",A54(AWH)],ADl,0,B,[Ce],0,3,0,0,["bh",A54(AXx)],ADk,0,B,[Ce],0,3,0,0,["bh",A54(AX5)],S8,0,B,[],0,3,0,0,0,AB7,0,B,[HW],0,3,0,0,["wP",A56(AP2)],AKr,0,B,[],0,3,0,0,0,Ra,0,B,[W],0,3,0,0,["g",A54(AVG)],AEB,0,B,[W],0,3,0,0,0,Tx,0,B,[CC],0,3,0,0,["cw",A54(AU_)],Vz,0,B,[BE],0,3,0,0,0,FR,0,B,[],0,3,0,0,0]);
$rt_metadata([AIx,0,B,[],0,3,0,0,0,AE1,0,B,[],0,3,0,0,0,ALp,0,B,[],0,3,0,0,0,ADE,0,B,[V],0,3,0,0,["f",A53(AVr)],ADF,0,B,[V],0,3,0,0,["f",A53(AXS)],F1,0,B,[],0,3,0,0,0,VW,0,B,[W],0,3,0,0,["g",A54(AOF)],NQ,0,F1,[],0,3,0,0,0,Lk,0,F1,[],0,3,0,0,0,U3,0,B,[W],0,3,0,0,["g",A54(AVu)],QS,0,B,[],0,3,0,0,0,Qj,0,B,[W],0,3,0,0,["g",A54(AY4)],Qo,0,B,[Hw],3,3,0,0,["fn",A54(AUF),"pG",A54(AYe)],FB,0,FG,[Qo],1,3,0,0,["fn",A54(AUF),"pG",A54(AYe)],Nv,0,FB,[],1,0,0,0,["fn",A54(AUF),"pG",A54(AYe)],Up,0,Nv,[],0,0,0,0,["fn",A54(AUF),
"pG",A54(AYe)],N8,0,Ed,[],1,0,0,0,0,Um,0,N8,[],0,0,0,0,0,Op,0,Fv,[LK],1,0,0,0,["fn",A54(AUF),"jg",A53(AWC),"qe",A54(AQD),"pG",A54(APD)],Un,0,Op,[],0,0,0,0,["fn",A54(AUF),"kG",A54(AQK),"c2",A53(APW),"b9",A53(ANT),"eI",A53(AMd)],Uk,0,B,[Fj],0,0,0,0,["cE",A53(ALZ),"b_",A53(AZQ),"po",A53(ASA)],Yw,0,B,[Fj],3,3,0,0,0,Ul,0,B,[Yw],0,0,0,0,0,Wg,0,B,[Gg],0,3,0,0,0,Rs,0,B,[D9],0,3,0,0,["I",A54(A3m)],Kz,0,Ef,[],0,3,0,0,0,JO,0,Bu,[],0,3,0,0,0,Oi,0,Bu,[],0,3,0,0,0,Yo,0,B,[W],0,3,0,0,["g",A54(AZR)],AH1,0,B,[W],0,3,0,0,0,ABv,
0,B,[W],0,3,0,0,["g",A54(AQs)],Q_,0,B,[Ru],0,3,0,0,0,Vt,0,B,[W],0,3,0,0,["g",A54(AXZ)],AEH,0,B,[],0,3,0,0,0,AAD,0,B,[V],0,3,0,0,["f",A53(AVs)],G9,0,B,[],0,3,0,0,0,Qz,0,FB,[],0,0,0,0,["pG",A54(AYe)],TP,0,FB,[],0,0,0,0,["fn",A54(AUF),"pG",A54(AYe)],QB,0,FG,[],0,0,0,0,["fn",A54(AUF),"pG",A54(AYe)],Wj,0,B,[W],0,3,0,0,["g",A54(AW4)],Ua,0,B,[W],0,3,0,0,["g",A54(AYI)],KF,0,B,[],0,3,0,0,["bJ",A54(AJ6)],Mm,0,KF,[],0,3,0,0,["bJ",A54(AVQ)],E$,0,B,[],0,3,0,0,["bJ",A54(AIA)],HE,0,E$,[],0,3,0,0,0,Km,0,E$,[],0,3,0,0,["bJ",
A54(A2f)],Jq,0,E$,[],0,3,0,0,["bJ",A54(AVe)],Yp,0,B,[W],0,3,0,0,["g",A54(AZU)],AFv,0,Ia,[],0,3,0,0,0,AA_,0,B,[W],0,3,0,0,["g",A54(ARB)]]);
$rt_metadata([M_,"FileDiffWindow",8,Fl,[],0,3,[0,0,0],0,["ev",A54(A02),"bW",A53(A10),"qg",A54(AVB)],Wk,0,B,[C1],0,3,0,0,["cp",A53(A1p)],Qk,0,B,[C1],0,3,0,0,["cp",A53(AOE)],AAp,0,B,[He],0,3,0,0,["qm",A55(AUL)],WD,0,B,[],0,3,0,0,0,RM,0,B,[],0,3,0,0,0,VD,0,B,[W],0,3,0,0,["g",A54(ALy)],UV,0,B,[LY],0,3,0,0,["zo",A54(NA)],UQ,0,Ii,[Fd],0,0,0,0,0,Wb,0,B,[EV],0,3,0,0,0,Wa,0,B,[E_],0,3,0,0,0,RC,0,B,[He],0,3,0,0,["qm",A55(AND)],X1,0,B,[Me],3,3,0,0,0,ACy,0,B,[X1],0,0,0,0,["pc",A53(Jn),"tt",A53(A2e),"cQ",A53(AFx)],AHG,0,
B,[CL],0,3,0,0,["bJ",A54(ARd)],WP,0,B,[W],0,3,0,0,["g",A54(AYH)],V5,0,B,[W],0,3,0,0,["g",A54(A3j)],OY,0,B,[W],0,3,0,0,["g",A54(A13)],FL,0,B,[],0,0,0,0,0,AAL,0,FL,[Fj],0,0,0,0,0,TI,0,FL,[Fj],0,0,0,0,0,ZJ,0,FL,[Fj],0,0,0,0,0,AET,0,B,[W],0,0,0,0,0,ZH,0,B,[C8],4,3,0,0,0,AAi,0,B,[W],0,3,0,0,["g",A54(AQA)],AAh,0,B,[W],0,3,0,0,["g",A54(A0f)],XQ,0,B,[W],0,3,0,0,["g",A54(AWv)],HU,0,B,[],3,3,0,0,0,Tk,0,B,[HU],0,3,0,0,["lW",A56(AY5)],Tl,0,B,[HU],0,3,0,0,["lW",A56(AXJ)],IW,0,B,[C8,CL],0,3,0,0,0,KY,0,B,[],3,3,0,0,0,R7,0,
B,[KY],0,3,0,0,0,X5,0,B,[KY],3,3,0,0,0,AF2,0,B,[X5],0,3,0,0,0,Sp,0,B,[HU],0,3,0,0,["lW",A56(AZx)],So,0,B,[D9],0,3,0,0,["I",A54(ATP)],Sn,0,B,[D9],0,3,0,0,["I",A54(AR6)],Sr,0,B,[HU],0,3,0,0,["lW",A56(AY_)],BS,0,B,[],1,0,0,0,["cs",A56(IH),"cC",A57(IP),"iY",A53(AV0),"T",A54(ATm),"b2",A54(A1L),"gB",A53(A2x),"eW",A53(KE)],V6,0,B,[W],0,3,0,0,["g",A54(AZB)],V7,0,B,[W],0,3,0,0,["g",A54(AOp)],RL,0,B,[V],0,3,0,0,["f",A53(AXq)],XP,0,B,[W],0,3,0,0,["g",A54(AQN)],AA0,0,B,[V],0,3,0,0,["f",A53(AMt)],C2,0,BS,[],0,0,0,OF,["c",
A56(AMs),"J",A54(AMI)],G5,0,B,[],0,0,0,0,0,Kn,0,BU,[],0,3,0,0,0,XM,0,B,[W],0,3,0,0,["g",A54(ASs)],R6,0,C2,[],0,0,0,0,["c",A56(AVa),"J",A54(A0L)]]);
$rt_metadata([AD8,0,C2,[],0,0,0,0,["c",A56(AWm)],QU,0,C2,[],0,0,0,0,["c",A56(AMO)],SO,0,C2,[],0,0,0,0,["c",A56(AVd),"J",A54(AZT)],F9,0,C2,[],0,0,0,0,["c",A56(ATx)],Cc,0,BS,[],1,0,0,0,["c",A56(A24),"ca",A53(A1m),"J",A54(APm)],AHe,0,Cc,[],0,0,0,0,["by",A55(A03),"cs",A56(AW9),"cC",A57(AWi),"J",A54(AVc)],B8,0,BS,[],0,0,0,0,["c",A56(AOI),"T",A54(ARx),"b2",A54(AYD),"J",A54(AR1),"eW",A53(AM9)],Ky,0,B8,[],0,0,0,0,["c",A56(ARl),"J",A54(A0r)],D$,0,Ky,[],0,0,0,0,["c",A56(AWF),"T",A54(A0k)],Ww,0,D$,[],0,0,0,0,["c",A56(ARv),
"J",A54(ATr)],ACY,0,D$,[],0,0,0,0,["c",A56(AMF),"J",A54(A1q)],ZK,0,D$,[],0,0,0,0,["c",A56(AM7),"J",A54(A3g)],Te,0,D$,[],0,0,0,0,["c",A56(AUT),"J",A54(A0C)],HP,0,B8,[],0,0,0,0,["c",A56(ALX),"cs",A56(AQe),"cC",A57(A0N),"b2",A54(AYA),"gB",A53(AZP),"eW",A53(ATX)],G7,0,B,[],1,0,0,0,0,Z,0,G7,[],1,0,0,Qf,["dV",A53(AVL),"fV",A53(AVp),"l5",A53(A1i),"iq",A53(A2s)],AE6,0,Z,[],0,0,0,0,["n",A54(Dc),"dV",A53(C6),"fV",A53(AW5),"l5",A53(ATd),"cQ",A53(AZc),"iq",A53(AOk)],MN,0,Bu,[],0,3,0,0,0,Em,0,BS,[],1,0,0,0,["b2",A54(ASy),
"J",A54(A1T),"eW",A53(AQx)],Dd,0,Em,[],0,0,0,0,["c",A56(AUU)],FV,0,Dd,[],0,0,0,0,["c",A56(AVy)],C3,0,Em,[],0,0,0,0,["c",A56(AU5)],E8,0,Dd,[],0,0,0,0,["c",A56(AYQ),"T",A54(AUA)],Vb,0,Dd,[],0,0,0,0,["c",A56(A21),"cs",A56(AQX)],Bf,0,B,[],1,0,0,0,0,Du,0,BU,[],0,3,0,0,0,WI,0,G7,[Ex],0,0,0,0,["cQ",A53(AZi)],XK,0,BS,[],0,0,0,0,["c",A56(APF),"J",A54(AZN)],ADz,0,B,[Ex,C8],0,3,0,0,0,O3,0,B8,[],0,0,0,0,0,Rj,0,B8,[],0,0,0,0,["c",A56(AMp),"T",A54(AZG),"J",A54(AMT),"b2",A54(AMH)],D3,0,B8,[],0,0,0,0,["c",A56(AW0),"n",A54(AOw),
"b2",A54(AMl),"T",A54(A1c),"J",A54(AOb)],MK,0,D3,[],0,0,0,0,["n",A54(APn)],AE0,0,Cc,[],0,0,0,0,["by",A55(AYn)],ED,0,Cc,[],0,0,0,0,["by",A55(Wm),"b2",A54(ARz)],X7,0,B8,[],0,0,0,0,["T",A54(AQl),"c",A56(ALG),"b2",A54(AVT),"J",A54(ATi)],EK,0,Cc,[],0,0,0,0,["ca",A53(AYb),"by",A55(AOS),"cs",A56(ANZ),"cC",A57(APA),"b2",A54(ATa)],AHC,0,Cc,[],0,0,0,0,["by",A55(AUI)],AEn,0,Cc,[],0,0,0,0,["by",A55(ALP)],FY,0,B8,[],0,0,0,0,["T",A54(A2A),"c",A56(ARk),"b2",A54(APG),"J",A54(A0l)],VF,0,FY,[],0,0,0,0,0,ABx,0,FY,[],0,0,0,0,0,Wi,
0,C3,[],0,0,0,0,["c",A56(AWq)],YH,0,C3,[],0,0,0,0,["c",A56(AY7)],GE,0,C3,[],0,0,0,0,["c",A56(A1a),"T",A54(A16)],QE,0,GE,[],0,0,0,0,["c",A56(APw),"T",A54(AZl)],Go,0,C3,[],0,0,0,0,["c",A56(A3d)],Pj,0,Go,[],0,0,0,0,["c",A56(AO6)],R0,0,C3,[],0,0,0,0,["c",A56(AT3)],Zm,0,GE,[],0,0,0,0,["c",A56(AMU)]]);
$rt_metadata([TT,0,Go,[],0,0,0,0,["c",A56(AVi)],R1,0,Em,[],0,0,0,0,["c",A56(A25),"cs",A56(ASX)],XR,0,Em,[],0,0,0,0,["c",A56(ARA),"cs",A56(ALH)],FF,0,B,[],1,0,0,0,0,AEk,0,Dd,[],0,0,0,0,["c",A56(AMc)],U7,0,E8,[],0,0,0,0,["c",A56(AQM)],Yf,0,FV,[],0,0,0,0,["c",A56(A0Q)],Zl,0,Dd,[],0,0,0,0,["c",A56(ARw)],ABI,0,E8,[],0,0,0,0,["c",A56(AMj)],RS,0,FV,[],0,0,0,0,["c",A56(A05)],Lm,0,BS,[],4,0,0,0,["c",A56(AYC),"J",A54(AX4)],AFj,0,BS,[],0,0,0,0,["c",A56(AVJ),"J",A54(AVS)],XO,0,BS,[],0,0,0,0,["c",A56(APp),"J",A54(AUs)],Vy,
0,BS,[],4,0,0,0,["c",A56(AZ$),"J",A54(AWj)],ADj,0,BS,[],0,0,0,0,["c",A56(AZE),"J",A54(AUH)],W1,0,BS,[],0,0,0,0,["c",A56(AWe),"J",A54(AOD)],AHn,0,B8,[],0,0,0,0,["c",A56(AT6),"T",A54(AVV),"iY",A53(AZr),"J",A54(AVU)],AE5,0,B8,[],4,0,0,0,["c",A56(AZy),"T",A54(A0H),"iY",A53(ALu),"J",A54(AUi)],AKX,0,BS,[],4,0,0,0,["c",A56(APK),"J",A54(AXm)],AJ3,0,BS,[],0,0,0,0,["c",A56(ARe),"J",A54(AXg)],AIa,0,BS,[],0,0,0,0,["c",A56(AX0),"J",A54(ANd)],Ib,0,B8,[],0,0,0,0,["c",A56(AMf),"T",A54(A0h),"J",A54(ASf)],AK3,0,Ib,[],0,0,0,0,
["c",A56(ANh),"cs",A56(ATp),"cC",A57(AL3),"b2",A54(AY2)],AJn,0,Ib,[],0,0,0,0,["c",A56(AQa)],PZ,0,GS,[JP],0,3,0,0,["pQ",A57(AOn),"pg",A56(AVM),"j4",A54(AV8),"p9",A55(A1l)],ZZ,0,Cc,[],0,0,0,0,["by",A55(ANw),"cs",A56(AVH),"cC",A57(AXr),"b2",A54(AOX)],AEm,0,Cc,[],0,0,0,0,["by",A55(AQg)],Pm,0,Cc,[],0,0,0,0,["by",A55(A0R)],Hh,0,B,[],4,0,0,ASo,0,Wr,0,Cc,[],0,0,0,0,["by",A55(ASD)],NV,0,B8,[],0,0,0,0,["T",A54(AZL),"c",A56(AWk),"cs",A56(AOV),"cC",A57(AWJ),"b2",A54(AL2),"J",A54(AS5)],N2,0,B8,[],0,0,0,0,["T",A54(AV7),"c",
A56(ALK),"cs",A56(AZX),"cC",A57(ASz),"b2",A54(ANx),"J",A54(AZ4)],Ee,0,Cc,[],0,0,0,0,["by",A55(A0t),"cs",A56(AZd),"cC",A57(AMZ),"b2",A54(A0n)],ACv,0,FF,[],0,0,0,0,["iR",A54(AM3),"Ak",A55(ASc)],ACw,0,FF,[],0,0,0,0,["iR",A54(A06),"Ak",A55(ATR)],AGN,0,B,[],0,0,0,0,0,AEz,0,B,[],0,0,0,0,0,NT,0,Bf,[],0,0,0,0,["G",A53(AJu)],Nh,0,Bf,[],0,0,0,0,["G",A53(AJZ)],AGH,0,Bf,[],0,0,0,0,["G",A53(A0K)],AG2,0,Bf,[],0,0,0,0,["G",A53(AS8)],AG4,0,Bf,[],0,0,0,0,["G",A53(AN4)],NP,0,Bf,[],0,0,0,0,["G",A53(AE8)],LR,0,NP,[],0,0,0,0,["G",
A53(AFC)],AH3,0,Bf,[],0,0,0,0,["G",A53(AXG)],OK,0,LR,[],0,0,0,0,["G",A53(AH$)],AJG,0,OK,[],0,0,0,0,["G",A53(AQz)],AF5,0,Bf,[],0,0,0,0,["G",A53(AWy)],AFf,0,Bf,[],0,0,0,0,["G",A53(AQv)],AIW,0,Bf,[],0,0,0,0,["G",A53(ATV)]]);
$rt_metadata([AKM,0,Bf,[],0,0,0,0,["G",A53(AZo)],AH6,0,Bf,[],0,0,0,0,["G",A53(AUO)],AKu,0,Bf,[],0,0,0,0,["G",A53(AO_)],AGz,0,Bf,[],0,0,0,0,["G",A53(ASk)],AHf,0,Bf,[],0,0,0,0,["G",A53(AWw)],AEL,0,Bf,[],0,0,0,0,["G",A53(ANJ)],AIh,0,Bf,[],0,0,0,0,["G",A53(A2m)],AKB,0,Bf,[],0,0,0,0,["G",A53(AUJ)],AGX,0,Bf,[],0,0,0,0,["G",A53(APL)],AJe,0,Bf,[],0,0,0,0,["G",A53(ANQ)],AF7,0,Bf,[],0,0,0,0,["G",A53(AXt)],AHN,0,Bf,[],0,0,0,0,["G",A53(AYw)],AKG,0,Bf,[],0,0,0,0,["G",A53(ATj)],AFM,0,Bf,[],0,0,0,0,["G",A53(ART)],AFr,0,Bf,
[],0,0,0,0,["G",A53(AQ0)],AH4,0,Bf,[],0,0,0,0,["G",A53(A0E)],KL,0,Bf,[],0,0,0,0,["G",A53(AF6)],AKU,0,KL,[],0,0,0,0,["G",A53(AQS)],AJL,0,NT,[],0,0,0,0,["G",A53(AVE)],AFp,0,Nh,[],0,0,0,0,["G",A53(AOP)],AIZ,0,Bf,[],0,0,0,0,["G",A53(AP0)],AI$,0,Bf,[],0,0,0,0,["G",A53(ATI)],AJz,0,Bf,[],0,0,0,0,["G",A53(AXd)],AJH,0,Bf,[],0,0,0,0,["G",A53(ALA)],AI2,0,B,[],4,0,0,0,0,AEZ,0,B,[],4,3,0,0,0,W4,0,B,[],0,3,0,0,0,AGS,0,B,[],0,3,0,0,0,AJl,0,B,[],4,3,0,0,0,MA,0,Bu,[],0,3,0,0,0,Zh,0,B,[W],0,3,0,0,["g",A54(AYB)],Zg,0,B,[W],0,
3,0,0,["g",A54(AT1)],AIQ,0,B,[D9],0,3,0,0,0,Sx,0,B,[W],0,3,0,0,["g",A54(AXl)],ACq,0,B,[D9],0,0,0,0,["I",A54(AN8)],ABQ,0,B,[V],0,3,0,0,["f",A53(A1u)],ABT,0,B,[W],0,3,0,0,0,ABV,0,B,[W],0,3,0,0,["g",A54(A19)],KR,0,B,[],3,3,0,0,0,PM,0,B,[KR],0,0,0,0,["t9",A54(A0j),"xq",A54(AXP),"wr",A53(ASE)],Va,0,Z,[],0,0,0,0,["n",A54(AN$)],U9,0,Z,[],0,0,0,0,["n",A54(AU4)],P$,0,Z,[],0,0,0,0,["n",A54(APR),"cQ",A53(AXv)],XX,0,Z,[],0,0,0,0,["n",A54(A0w)],XV,0,Z,[],0,0,0,0,["n",A54(ASC)],XW,0,Z,[],0,0,0,0,["n",A54(AYN)],X0,0,Z,[],
0,0,0,0,["n",A54(AWP)],X2,0,Z,[],0,0,0,0,["n",A54(ALv)],XY,0,Z,[],0,0,0,0,["n",A54(AOK)],XZ,0,Z,[],0,0,0,0,["n",A54(AQk)]]);
$rt_metadata([X3,0,Z,[],0,0,0,0,["n",A54(ATs)],X4,0,Z,[],0,0,0,0,["n",A54(AWs)],P9,0,Z,[],0,0,0,0,["n",A54(A3n)],Qr,0,Z,[],0,0,0,0,["n",A54(AON)],P7,0,Z,[],0,0,0,0,["n",A54(ANm)],P8,0,Z,[],0,0,0,0,["n",A54(AXj)],Qb,0,Z,[],0,0,0,0,["n",A54(APr)],P6,0,Z,[],0,0,0,0,["n",A54(A1y)],P_,0,Z,[],0,0,0,0,["n",A54(AVO)],Qa,0,Z,[],0,0,0,0,["n",A54(ARN)],Mg,0,B,[],3,3,0,0,0,AAw,0,B,[Mg],4,3,0,0,0,Ro,0,B,[V],0,3,0,0,["f",A53(A0d)],Rm,0,B,[V],0,3,0,0,["f",A53(AOG)],Rn,0,B,[V],0,3,0,0,["f",A53(ATA)],Rp,0,B,[V],0,3,0,0,["f",
A53(ALN)],Su,0,B,[V],0,3,0,0,["f",A53(AS$)],St,0,B,[V],0,3,0,0,["f",A53(AYR)],Ss,0,B,[V],0,3,0,0,["f",A53(AZ9)],RK,0,B,[V],0,3,0,0,["f",A53(AUv)],Q$,0,B,[],3,3,0,0,0,AJt,0,B,[V],0,3,0,0,["f",A53(A2V)],AJN,0,B,[He],0,3,0,0,0,Qw,0,B,[V],0,3,0,0,["f",A53(ARK)],Qu,0,B,[V],0,3,0,0,["f",A53(AXe)],Qv,0,B,[V],0,3,0,0,["f",A53(A2n)],T_,0,B,[V],0,3,0,0,["f",A53(A0p)],Ub,0,B,[V],0,3,0,0,["f",A53(AQW)],Zi,0,B,[C1],0,3,0,0,["cp",A53(A1o)],ZO,0,B,[V],0,3,0,0,["f",A53(AMg)],ZM,0,B,[V],0,3,0,0,["f",A53(ANv)],SX,0,B,[V],0,3,
0,0,["f",A53(ATO)],SY,0,B,[V],0,3,0,0,["f",A53(AMe)],SZ,0,B,[V],0,3,0,0,["f",A53(ANp)],S0,0,B,[V],0,3,0,0,["f",A53(ATD)],Tc,0,B,[V],0,3,0,0,["f",A53(AYX)],AGi,0,B,[C1],0,3,0,0,["cp",A53(A2X)],ACO,0,B,[],0,3,0,0,0,TF,0,B,[HW],0,3,0,0,0,Pe,0,HP,[],0,0,0,0,["cs",A56(AOr),"cC",A57(A3c),"gB",A53(ANa)],Re,0,Bu,[],0,3,0,0,0,VC,0,Bu,[],0,3,0,0,0,Uc,0,Gf,[],0,3,0,0,0,Q9,0,Gf,[],0,3,0,0,0,VA,0,B,[Ce],0,3,0,0,["bh",A54(AXs)],VB,0,B,[Ce],0,3,0,0,["bh",A54(AVN)],ACl,0,B,[],0,3,0,0,0,AEY,0,B,[],3,3,0,0,0,SU,0,B,[V],0,3,0,
0,["f",A53(AQu)],SV,0,B,[Fk],0,3,0,0,["g6",A54(AYk)]]);
$rt_metadata([ACC,0,B,[Ce],0,3,0,0,["bh",A54(ARV)],ACE,0,B,[Ce],0,3,0,0,["bh",A54(AQ6)],ACF,0,B,[Ce],0,0,0,0,["bh",A54(AR2)],YT,0,B,[V],0,3,0,0,0,ACo,0,B,[Mg],0,0,0,0,0,TH,0,B,[Ce],0,3,0,0,["bh",A54(AYG)],Ph,0,B,[W],0,3,0,0,["g",A54(A2j)],AAu,0,B,[V],0,3,0,0,["f",A53(A3a)],XG,0,B,[V],0,3,0,0,["f",A53(ARY)],XH,0,B,[V],0,3,0,0,["f",A53(APH)],Z8,0,B,[V],0,3,0,0,["f",A53(AR8)],QG,0,B,[Fk],0,3,0,0,["g6",A54(AUX)],GJ,0,CI,[],12,0,0,SG,0,ADh,0,B,[W],0,3,0,0,["g",A54(AOC)],ZS,0,B,[W],0,3,0,0,["g",A54(A1B)],QZ,0,B,[V],
0,3,0,0,["f",A53(AXA)],ABq,0,B,[],32,0,0,A5l,0,RP,0,B,[W],0,3,0,0,["g",A54(AMq)],RZ,0,B,[W],0,3,0,0,["g",A54(AOt)],OT,0,B,[V],0,3,0,0,["f",A53(AXW)],AA3,0,Z,[],0,0,0,0,["n",A54(ATw)],Wz,0,Z,[],0,0,0,0,["n",A54(AVC)],Sa,0,Z,[],0,0,0,0,["n",A54(AMi)],R_,0,Z,[],0,0,0,0,["n",A54(AXc)],Vn,0,Z,[],0,0,0,0,["n",A54(APh)],Yc,0,Z,[],0,0,0,0,["n",A54(A12)],PW,0,Z,[],0,0,0,0,["n",A54(ARr)],Zy,0,Z,[],0,0,0,0,["n",A54(ASn)],Wv,0,Z,[],0,0,0,0,["n",A54(A22)],Wx,0,Z,[],0,0,0,0,["n",A54(ANz)],PD,0,Z,[],0,0,0,0,["n",A54(ATF)],Yv,
0,Z,[],0,0,0,0,["n",A54(AYV)],YA,0,Z,[],0,0,0,0,["n",A54(A0g)],ABr,0,Z,[],0,0,0,0,["n",A54(A1P)],AAx,0,Z,[],0,0,0,0,["n",A54(AT0)],O8,0,Z,[],0,0,0,0,["n",A54(ANs)],Mp,0,Z,[],0,0,0,0,["n",A54(ARs)],Z6,0,Mp,[],0,0,0,0,["n",A54(A1d)],ADR,0,B,[BT],3,3,0,0,0,YY,0,B,[ADR],0,3,0,0,["Iy",A53(AP6)],Sb,0,B,[W],0,3,0,0,["g",A54(A1v)],QA,0,B,[JK],0,3,0,0,["qi",A53(ANX),"ot",A53(ALJ),"nX",A54(ASP),"kE",A54(ARh)],ABl,0,B,[W],0,3,0,0,0,R$,0,B,[W],0,3,0,0,0,Q5,0,B,[W],0,3,0,0,["g",A54(ANi)],Db,0,B,[],3,3,0,AG6,0,CA,0,CI,[],
12,3,0,AGt,0,D1,0,B,[],3,3,0,AVg,0,Im,0,Dh,[],0,3,0,0,0,AAg,0,B,[K7],0,0,0,0,["rQ",A55(AMD),"zG",A54(APP),"xy",A54(AUu),"uU",A54(AUB)]]);
$rt_metadata([KK,0,Dh,[],0,3,0,0,0,ADS,0,B,[W],0,3,0,0,["g",A54(A0x)],AGh,0,B,[BT],3,3,0,0,0,R5,0,B,[V],0,3,0,0,["f",A53(ARj)],ABa,0,B,[V],0,3,0,0,["f",A53(AYd)],AA1,0,B,[KR],0,0,0,0,["t9",A54(A1I),"xq",A54(ATq),"wr",A53(A14)],AID,0,B,[],0,0,0,0,0,RR,0,B,[V],0,3,0,0,["f",A53(A2p)],Ri,0,B,[V],0,3,0,0,["f",A53(AMu)],AEi,0,B,[V],0,3,0,0,["f",A53(AYc)],Uf,0,B,[W],0,3,0,0,["g",A54(ANF)],Ue,0,B,[W],0,3,0,0,["g",A54(ATT)]]);
function $rt_array(cls,data){this.WW=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","  ","editor font: ",", lineHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel","ns-resize","ew-resize","/Full file parsed in ","ms","ScopeUtils.resolveAll","activity","asyncParseFile",
"asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","js","cpp","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","nwse-resize","nesw-resize","File is too large: "," name: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB",
"#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","","codicon.pixel.size = ","w = ","Window 1","Window ","Project root",
"FileTreeView model size = ","Select left...","Select right...","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=",
"onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","new project view","new folder diff window","new file diff window","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",
", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: ",
" writeClipboardText \'","\' ok","Open project...","Project view","Open project ...","request new model, file = ","request in progress ","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Folder ","ClassFile ","Expected "," ints to write, but "," written","open file ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Language >",
"Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","Int","Iter","VP","Resolve","Rep","No definition or usages"," ints to read, but "," read","fib(",") result = ",") time = ","Unknown scope type: ","/Resolved in ","DiffUtils.findDiffs","Unexpected type: ","Unexpected ref node type: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase",
"javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic",
"Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional",
"GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators",
"MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals",
"ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co",
"Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","  sub dir: ","  file: ","complete","readClipboardText error: ","Current Version: ","Last Parsed Version: ","file = ","file.content.length = ","openDirectory: "," - project view","DEF","DECL","open dir = ","writeClipboardText error: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","opening file ... ","folderOpened ",
"readDirectory: ","Error fetching file "]);
BK.prototype.toString=function(){return $rt_ustr(this);};
BK.prototype.valueOf=BK.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AMX(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CT=Long_add;var JT=Long_sub;var Ci=Long_mul;var AGR=Long_div;var AU0=Long_rem;var A3K=Long_or;var Dg=Long_and;var A9Y=Long_xor;var HM=Long_shl;var A45=Long_shr;var Gd=Long_shru;var A9Z=Long_compare;var IK=Long_eq;var A90=Long_ne;var A3H=Long_lt;var ANU=Long_le;var A91=Long_gt;var A3G=Long_ge;var A92=Long_not;var A5e=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A5f);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ABz.prototype;c.f=c.bh;c=ABA.prototype;c.f=c.bh;c=ABy.prototype;c.f=c.bh;c=WS.prototype;c.f=c.bh;c=AJK.prototype;c.get=c.LB;Object.defineProperty(c,"length",{get:c.R4});c=AIq.prototype;c.createEntityReference=c.Od;c.getElementById=c.Qy;c.createTextNode=c.Qg;c.hasChildNodes=c.Ph;c.querySelectorAll=c.NW;c.removeChild=c.RQ;c.cloneNode=c.Gj;c.createComment=c.S0;c.insertBefore=c.Ox;c.getElementsByTagNameNS=c.R2;c.hasAttributes=c.IY;c.normalize=c.L9;c.hasChildNodesJS=c.L2;c.getElementsByTagName
=c.LA;c.appendChild=c.M4;c.createAttributeNS=c.QT;c.dispatchEvent=c.LO;c.replaceChild=c.GO;c.createElementNS=c.HW;c.createCDATASection=c.KS;c.querySelector=c.IX;c.createElement=c.Rm;c.isSupported=c.RU;c.importNode=c.OH;c.removeEventListener=c.HS;c.createAttribute=c.LP;c.createDocumentFragment=c.FH;c.createProcessingInstruction=c.N9;c.addEventListener=c.Ka;Object.defineProperty(c,"nodeName",{get:c.M3});Object.defineProperty(c,"documentElement",{get:c.IC});Object.defineProperty(c,"childNodes",{get:c.KA});Object.defineProperty(c,
"prefix",{get:c.ON,set:c.S_});Object.defineProperty(c,"implementation",{get:c.Ld});Object.defineProperty(c,"textContent",{get:c.S5,set:c.Qd});Object.defineProperty(c,"parentNode",{get:c.Qv});Object.defineProperty(c,"nextSibling",{get:c.Is});Object.defineProperty(c,"nodeType",{get:c.RB});Object.defineProperty(c,"doctype",{get:c.Px});Object.defineProperty(c,"localName",{get:c.Sk});Object.defineProperty(c,"nodeValue",{get:c.Ia,set:c.SS});Object.defineProperty(c,"firstChild",{get:c.LJ});Object.defineProperty(c,
"lastChild",{get:c.Ki});Object.defineProperty(c,"previousSibling",{get:c.MQ});Object.defineProperty(c,"namespaceURI",{get:c.G7});Object.defineProperty(c,"attributes",{get:c.OU});Object.defineProperty(c,"ownerDocument",{get:c.Hc});c=PE.prototype;c.f=c.bh;c=AIT.prototype;c.removeEventListener=c.He;c.dispatchEvent=c.OC;c.addEventListener=c.JK;c=Ut.prototype;c.onAnimationFrame=c.IZ;c=Us.prototype;c.f=c.BM;c=Uq.prototype;c.handleEvent=c.cw;c=AAt.prototype;c.f=c.bh;c=AC6.prototype;c.handleEvent=c.cw;c=AC7.prototype;c.handleEvent
=c.cw;c=AC8.prototype;c.handleEvent=c.cw;c=AC9.prototype;c.handleEvent=c.cw;c=AC$.prototype;c.handleEvent=c.cw;c=AC_.prototype;c.handleEvent=c.cw;c=ADa.prototype;c.handleEvent=c.cw;c=ADb.prototype;c.handleEvent=c.cw;c=ADc.prototype;c.handleEvent=c.cw;c=ADd.prototype;c.handleEvent=c.cw;c=VY.prototype;c.handleEvent=c.cw;c=VZ.prototype;c.handleEvent=c.cw;c=V0.prototype;c.handleEvent=c.cw;c=V1.prototype;c.handleEvent=c.cw;c=AB3.prototype;c.handleEvent=c.cw;c=AD2.prototype;c.f=c.bh;c=AD3.prototype;c.f=c.bh;c=W0.prototype;c.f
=c.bh;c=WZ.prototype;c.f=c.bh;c=WX.prototype;c.f=c.bh;c=WW.prototype;c.f=c.bh;c=Py.prototype;c.accept=c.LV;c=O0.prototype;c.f=c.bh;c=O2.prototype;c.f=c.bh;c=O1.prototype;c.f=c.bh;c=Yk.prototype;c.f=c.BM;c=Yi.prototype;c.f=c.BM;c=AAk.prototype;c.f=c.bh;c=ACL.prototype;c.f=c.bh;c=OZ.prototype;c.f=c.bh;c=ADW.prototype;c.f=c.bh;c=ADV.prototype;c.f=c.bh;c=ADl.prototype;c.f=c.bh;c=ADk.prototype;c.f=c.bh;c=Tx.prototype;c.handleEvent=c.cw;c=VA.prototype;c.f=c.bh;c=VB.prototype;c.f=c.bh;c=ACC.prototype;c.f=c.bh;c=ACE.prototype;c.f
=c.bh;c=ACF.prototype;c.f=c.bh;c=TH.prototype;c.f=c.bh;c=YY.prototype;c.onTimer=c.Iy;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);