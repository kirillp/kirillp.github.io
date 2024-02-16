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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.fl=f;}
function $rt_cls(cls){return Sg(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Hf(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b_.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AQD(t);}
function $rt_throwableCause(t){return AYD(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A3w());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A3x(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A3y());}
function $rt_throwCCE(){}
var A=Object.create(null);
var L=$rt_throw;var BL=$rt_compare;var A3z=$rt_nullCheck;var F=$rt_cls;var R=$rt_createArray;var IX=$rt_isInstance;var A3A=$rt_nativeThread;var A3B=$rt_suspending;var A3C=$rt_resuming;var A3D=$rt_invalidPointer;var C=$rt_s;var Bm=$rt_eraseClinit;var Ba=$rt_imul;var EL=$rt_wrapException;var A3E=$rt_checkBounds;var A3F=$rt_checkUpperBound;var A3G=$rt_checkLowerBound;var A3H=$rt_wrapFunction0;var A3I=$rt_wrapFunction1;var A3J=$rt_wrapFunction2;var A3K=$rt_wrapFunction3;var A3L=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AHZ=$rt_createCharArrayFromData;var A1B=$rt_createByteArrayFromData;var A1_=$rt_createShortArrayFromData;var DN=$rt_createIntArrayFromData;var A3M=$rt_createBooleanArrayFromData;var A3N=$rt_createFloatArrayFromData;var A3O=$rt_createDoubleArrayFromData;var AHh=$rt_createLongArrayFromData;var A3v=$rt_createBooleanArray;var DA=$rt_createByteArray;var A3P=$rt_createShortArray;var B0=$rt_createCharArray;var BI=$rt_createIntArray;var A3Q=$rt_createLongArray;var AJ_=$rt_createFloatArray;var A3R
=$rt_createDoubleArray;var BL=$rt_compare;var A3S=$rt_castToClass;var A3T=$rt_castToInterface;var A3U=Long_toNumber;var Bo=Long_fromInt;var A3V=Long_fromNumber;var D=Long_create;var Fu=Long_ZERO;var A3W=Long_hi;var GB=Long_lo;
function B(){this.$id$=0;}
function BH(a){return Sg(a.constructor);}
function AOH(a,b){return a!==b?0:1;}
function ALf(a){var b,c,d,e,f,g,h,i,j;b=Mc(a);if(!b)c=C(0);else{d=(((32-Wh(b)|0)+4|0)-1|0)/4|0;e=B0(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=H$((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Hf(e);}j=new K;N(j);H(H(j,C(1)),c);return M(j);}
function Mc(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AN5(a){var b,c,d;if(!IX(a,Eo)&&a.constructor.$meta.item===null){b=new Tq;X(b);L(b);}b=AKd(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Ra(){var a=this;B.call(a);a.Ac=0;a.pE=null;}
function A2T(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AJh();AGX();AED();AFk();AGD();AHG();AEL();AC$();AEh();AF6();AGW();AIT();AE7();AH_();AHK();AFL();AHS();AJw();AEN();AE2();AHm();AEj();AI0();AIy();AIY();AG$();AGw();c=(ADm()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Xh(C(2),C(3));else{d=new Ra;BK(d);e=new Z$;e.yH=d;f=new VL;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<3){i=new $rt_globals.Worker(c);j=new O0;j.wQ=i;j.wR=g;j.wS=3;j.wT
=e;j.wN=f;k=Bu(j,"f");i.onmessage=k;h=h+1|0;}l=I(LF,[E0(C(4),C(5),300),E0(C(6),C(7),300),E0(C(8),C(5),400),E0(C(9),C(7),400),E0(C(10),C(5),600),E0(C(11),C(7),600),E0(C(12),C(5),700),E0(C(13),C(7),700)]);m=R(LF,1);m.data[0]=AQ5(C(14),Fh(C(15),C(16)),C(5),400);b=(IW(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.sW;f=c.sg;i=new K;N(i);BN(H(H(i,C(17)),f),41);i=M(i);f=c.se;o=c.rb;c=AVb($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1|0;}e=$rt_globals.Promise.all(g);BK(d);c
=new Z_;c.zt=d;g=new Z9;e.then(Bu(c,"f"),Bu(g,"f"));}}
function AFq(b){var c,d,e,f,g,h,i,j;c=new Zq;d=new Tp;d.wD=c;c.sG=d;d=new Tn;d.Ai=c;c.nL=d;e=new To;e.x6=c;c.t1=new $rt_globals.ResizeObserver(Bu(e,"f"));d=new Tm;d.qO=c;c.vy=d;c.kY=1;d=new Zb;d.lP=new SL;e=new Xf;e.Cc=null;e.lH=A3X;d.rw=e;BK(e);f=new Zf;f.yi=e;d.Ae=f;d.zC=b;g=b.length;h=0;while(h<g){e=b[h];i=new Zg;i.xJ=d;i.xI=h;f=Bu(i,"f");e.onmessage=f;e=b[h];f=AH$();e.postMessage(f);h=h+1|0;}d.h1=0;d.oA=BI(g);c.zS=d;c.pU=(Em()).getElementById("canvasDiv");d=ADm();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.ei=d;c.pU.appendChild(d);b=c.ei;d=APG(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Xh(C(2),C(18));else{c.o7=A2F(c.ei,c.nL);b=new Tf;j=c.nL;AJg(b,e,new AAF,1,2.25,0.625);b.Ca=new AAE;b.BJ=j;c.hl=b;AQn(c.t1,c.ei,AS2());d=$rt_globals.window;j=c.vy;d.addEventListener("resize",Bu(j,"handleEvent"));j=new Of;b=c.hl;d=c.o7.cp;j.N=b;j.p=d;j.b5=c;d=$rt_str($rt_globals.window.location.hash);if(Bj(C(19),d)){b=new OH;DG(b,j);d=$rt_globals.fetch("test.wasm");j
=new VT;d=d.then(Bu(j,"f"));j=new VS;e=d.then(Bu(j,"f"));j=new VQ;d=new VP;e.then(Bu(j,"f"),Bu(d,"f"));}else b=Bj(C(20),d)?A2A(j):(AZr(J(d)<=0?C(21):Do(d,1))).bc(j);c.gi=b;R7(c);}c.ei.focus();}
var VK=G(0);
var Vn=G(0);
function ABH(){var a=this;B.call(a);a.mn=null;a.t4=null;a.dZ=null;}
function Sg(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new ABH;c.dZ=b;d=c;b.classObject=d;}return c;}
function Jy(a){if(a.mn===null)a.mn=AFI(a.dZ);return a.mn;}
function W$(a){var b,c,d,e;b=a.t4;if(b===null){if(AJM(a.dZ)===null?0:1){b=W$(HJ(a));c=new K;N(c);H(H(c,b),C(22));b=M(c);}else{b=a.dZ.$meta.enclosingClass;if((b===null?null:Sg(b))!==null){b=$rt_str(a.dZ.$meta.simpleName);if(b===null)b=C(21);}else{b=AFI(a.dZ);d=QY(b,36);if(d==(-1)){e=QY(b,46);if(e!=(-1))b=Do(b,e+1|0);}else{b=Do(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(21);}}}a.t4=b;}return b;}
function IA(a){return a.dZ.$meta.primitive?1:0;}
function HJ(a){return Sg(AJM(a.dZ));}
var AHq=G();
function Bu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function E5(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AHf=G();
function AKd(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AIN(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AIN(d[e],c))return 1;e=e+1|0;}return 0;}
function AJM(b){return b.$meta.item;}
function AFI(b){return $rt_str(b.$meta.name);}
function GJ(){var a=this;B.call(a);a.il=null;a.mI=null;a.ka=0;a.ku=0;}
function A3Y(){var a=new GJ();X(a);return a;}
function A3Z(a){var b=new GJ();Bl(b,a);return b;}
function X(a){a.ka=1;a.ku=1;}
function Bl(a,b){a.ka=1;a.ku=1;a.il=b;}
function AU4(a){return a;}
function AQD(a){return a.il;}
function AYD(a){var b;b=a.mI;if(b===a)b=null;return b;}
var En=G(GJ);
function A30(){var a=new En();AFd(a);return a;}
function AFd(a){X(a);}
var Bt=G(En);
function A3x(a){var b=new Bt();AZW(b,a);return b;}
function AZW(a,b){Bl(a,b);}
var AIc=G(Bt);
var C0=G(0);
var CI=G(0);
var J0=G(0);
function BM(){var a=this;B.call(a);a.b_=null;a.jA=0;}
var A31=null;var A32=null;var A33=null;function FM(){FM=Bm(BM);ARt();}
function AM5(){var a=new BM();AC8(a);return a;}
function Hf(a){var b=new BM();Jb(b,a);return b;}
function Eu(a,b,c){var d=new BM();N$(d,a,b,c);return d;}
function AC8(a){FM();a.b_=A31;}
function Jb(a,b){FM();N$(a,b,0,b.data.length);}
function N$(a,b,c,d){var e;FM();e=B0(d);a.b_=e;DM(b,c,e,0,d);}
function L7(b){var c;FM();c=AM5();c.b_=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b_.data;if(b<c.length)return c[b];}d=new H7;X(d);L(d);}
function J(a){return a.b_.data.length;}
function Ga(a){return a.b_.data.length?0:1;}
function Qd(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){DM(a.b_,b,d,e,c);return;}}g=new BD;X(g);L(g);}
function ACb(a,b){var c,d,e;if(a===b)return 0;c=Bd(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AAA(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function M5(a,b){if(a===b)return 1;return AAA(a,b,0);}
function Ek(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function JF(a,b,c){var d,e,f,g,h;d=Be(0,c);if(b<65536){e=b&65535;while(true){f=a.b_.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Jz(b);h=IY(b);while(true){f=a.b_.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Hk(a,b,c){var d,e,f,g,h;d=Bd(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b_.data[d]==e)break;d=d+(-1)|0;}return d;}f=Jz(b);g=IY(b);while(true){if(d<1)return (-1);h=a.b_.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function QY(a,b){return Hk(a,b,J(a)-1|0);}
function XF(a,b,c){var d,e,f;d=Be(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AXB(a,b){return XF(a,b,0);}
function Qa(a,b,c){var d,e;d=Bd(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AEm(a,b){return Qa(a,b,J(a));}
function Cr(a,b,c){var d,e;d=BL(b,c);if(d>0){e=new BD;X(e);L(e);}if(!d){FM();return A32;}if(!b&&c==J(a))return a;return Eu(a.b_,b,c-b|0);}
function Do(a,b){return Cr(a,b,J(a));}
function Qj(a,b,c){return Cr(a,b,c);}
function Fh(a,b){var c,d,e,f,g,h;if(Ga(b))return a;if(Ga(a))return b;c=B0(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return L7(c);}
function AA2(a,b,c){var d,e,f,g;d=new K;N(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BN(d,P(a,f));}f=f+1|0;}H(d,Do(a,f));return M(d);}
function YW(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cr(a,b,c+1|0);}
function ALd(a){return a;}
function Gc(a){var b,c,d,e,f;b=a.b_.data;c=B0(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function M$(b){var c,d;FM();c=new BM;d=B0(1);d.data[0]=b;Jb(c,d);return c;}
function De(b){var c;FM();c=new K;N(c);return M(U(c,b));}
function Bj(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BM))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function Nr(a){var b,c,d,e;a:{if(!a.jA){b=a.b_.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.jA=(31*a.jA|0)+e|0;d=d+1|0;}}}return a.jA;}
function LS(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GR;Bl(b,C(23));L(b);}A34=1;d=new Yx;d.mb=R(CV,10);d.hr=(-1);d.fx=(-1);d.bz=(-1);e=new GT;e.fa=1;e.bN=b;e.be=B0(J(b)+2|0);DM(Gc(b),0,e.be,0,J(b));f=e.be.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.x3=g;e.gM=0;FC(e);FC(e);d.l=e;d.dQ=0;d.mP=UM(d,(-1),0,null);if(!Dt(d.l)){b=new JW;h=d.l;Mm(b,C(21),h.bN,h.dj);L(b);}if(d.qi)d.mP.eG();b=BG();h=new Zi;h.jQ=(-1);h.oo=(-1);h.A2=d;h.zv=d.mP;h.k_=a;h.jQ=0;g=J(a);h.oo=g;e=new AA3;i=h.jQ;j=d.hr;k=d.fx+1|0;l=d.bz
+1|0;e.iq=(-1);m=j+1|0;e.qV=m;e.d3=BI(m*2|0);f=BI(l);e.ko=f;Jf(f,(-1));if(k>0)e.oJ=BI(k);Jf(e.d3,(-1));ACH(e,a,i,g);h.cG=e;e.ge=1;n=0;m=0;if(!J(a)){f=R(BM,1);f.data[0]=C(21);}else{while(true){l=J(h.k_);if(!ADg(h))l=h.oo;e=h.cG;if(e.eE>=0&&AEd(e)==1){e=h.cG;e.eE=Mb(e);if(Mb(h.cG)==AFj(h.cG)){e=h.cG;e.eE=e.eE+1|0;}g=h.cG.eE;g=g<=l&&Om(h,g)?1:0;}else g=Om(h,h.jQ);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BC(b,Qj(a,m,AGl(h)));m=AHH(h);n=g;}a:{BC(b,Qj(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Bw(b,
g)))break a;EB(b,g);}}if(g<0)g=0;f=F$(b,R(BM,g));}return f;}
function AMG(a,b){return ACb(a,b);}
function ARt(){A31=B0(0);A32=AM5();A33=new RX;}
var Fm=G(GJ);
var H_=G(Fm);
var AHV=G(H_);
var Ej=G();
function Hu(){Ej.call(this);this.bp=0;}
var A35=null;var A36=null;function AZn(a){var b=new Hu();ADW(b,a);return b;}
function ADW(a,b){a.bp=b;}
function Nu(b){return (V3(A3m(20),b,10)).cM();}
function Kr(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dn;Bl(b,C(24));L(b);}d=J(b);if(0==d){b=new Dn;Bl(b,C(25));L(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dn;X(b);L(b);}b:{c:{while(f<d){h=f+1|0;i=Xc(P(b,f));if(i<0){j=new Dn;k=Cr(b,0,d);b=new K;N(b);H(H(b,C(26)),k);Bl(j,M(b));L(j);}if(i>=c){j=new Dn;l=Cr(b,0,d);b=new K;N(b);H(H(U(H(b,C(27)),c),C(28)),l);Bl(j,M(b));L(j);}g=Ba(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dn;k=Cr(b,0,d);b=new K;N(b);H(H(b,C(29)),k);Bl(j,M(b));L(j);}b=new Dn;j=new K;N(j);U(H(j,C(30)),c);Bl(b,M(j));L(b);}
function CT(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A36===null){A36=R(Hu,256);c=0;while(true){d=A36.data;if(c>=d.length)break a;d[c]=AZn(c-128|0);c=c+1|0;}}}return A36.data[b+128|0];}return AZn(b);}
function ASQ(a){return a.bp;}
function A0o(a,b){if(a===b)return 1;return b instanceof Hu&&b.bp==a.bp?1:0;}
function Wh(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function IP(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AWm(a,b){b=b;return BL(a.bp,b.bp);}
function AJh(){A35=F($rt_intcls());}
function GD(){var a=this;B.call(a);a.B=null;a.K=0;}
function A37(){var a=new GD();N(a);return a;}
function A3m(a){var b=new GD();Gw(b,a);return b;}
function N(a){Gw(a,16);}
function Gw(a,b){a.B=B0(b);}
function V3(a,b,c){return AH5(a,a.K,b,c);}
function AH5(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=H$(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Ba(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=H$($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AIF(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A38;AIz(c,f);d=f.mv;g=f.mj;h=f.qr;i=1;j=1;if(h)j=2;k=9;l=AQ6(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Be(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Co(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.B.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.B.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.B.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.B.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AHz(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A39;AEx(c,f);g=f.mQ;h=f.l6;i=f.qe;j=1;k=1;if(i)k=2;l=18;m=APU(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Be(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Co(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.B.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AL9(p,Fu))d=0;else{d=GB(AFr(g,p));g=AS0(g,p);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AFr(p,Bo(10));q=q+1|0;}if(h){e=a.B.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AQ6(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function APU(b){var c,d,e,f,g;c=Bo(1);d=0;e=16;f=A3$.data;g=f.length-1|0;while(g>=0){if(It(AS0(b,Cf(c,f[g])),Fu)){d=d|e;c=Cf(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BN(a,b){return a.pl(a.K,b);}
function ACx(a,b,c){Co(a,b,b+1|0);a.B.data[b]=c;return a;}
function My(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.B=Kn(a.B,d);}
function M(a){return Eu(a.B,0,a.K);}
function ACm(a,b,c,d){return a.o6(a.K,b,c,d);}
function VF(a,b,c,d,e){var f,g,h,i;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function JI(a,b){return a.ov(b,0,b.data.length);}
function Co(a,b,c){var d,e,f,g;d=a.K;e=d-b|0;a.jw((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.K=a.K+(c-b|0)|0;}
var Jq=G(0);
var K=G(GD);
function LK(){var a=new K();A0g(a);return a;}
function A0g(a){N(a);}
function H(a,b){L$(a,a.K,b===null?C(31):b.cM());return a;}
function BV(a,b){L$(a,a.K,b);return a;}
function U(a,b){V3(a,b,10);return a;}
function Hz(a,b){var c,d,e,f,g,h,i,j;c=a.K;d=1;if(A1j(b,Fu)){d=0;b=A2S(b);}a:{if(Dw(b,Bo(10))<0){if(d)Co(a,c,c+1|0);else{Co(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=H$(GB(b),10);}else{g=1;h=Bo(1);i=C8(Bo(-1),Bo(10));b:{while(true){j=Cf(h,Bo(10));if(Dw(j,b)>0){j=h;break b;}g=g+1|0;if(Dw(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Co(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(It(j,Fu))break a;e=a.B.data;c=f+1|0;e[f]=H$(GB((C8(b,j))),10);b=AGZ(b,j);j=C8(j,Bo(10));f=c;}}}return a;}
function E2(a,b){AIF(a,a.K,b);return a;}
function AC4(a,b){BN(a,b);return a;}
function Je(a,b){L$(a,a.K,!b?C(32):C(33));return a;}
function AF$(a,b,c){var d,e,f,g,h,i;d=BL(b,c);if(d<=0){e=a.K;if(b<=e){if(d){f=e-c|0;a.K=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new H7;X(i);L(i);}
function TT(a,b){var c,d,e,f;if(b>=0){c=a.K;if(b<c){c=c-1|0;a.K=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new H7;X(f);L(f);}
function AWh(a,b,c,d,e){VF(a,b,c,d,e);return a;}
function ALY(a,b,c,d){ACm(a,b,c,d);return a;}
function AG_(a){return a.K;}
function D5(a){return M(a);}
function AN4(a,b){My(a,b);}
function AWD(a,b,c){ACx(a,b,c);return a;}
function L$(a,b,c){var d,e,f;if(b>=0&&b<=a.K){a:{if(c===null)c=C(31);else if(Ga(c))break a;My(a,a.K+J(c)|0);d=a.K-1|0;while(d>=b){a.B.data[d+J(c)|0]=a.B.data[d];d=d+(-1)|0;}a.K=a.K+J(c)|0;d=0;while(d<J(c)){e=a.B.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new H7;X(c);L(c);}
var EU=G(H_);
var AIQ=G(EU);
function A3_(a){var b=new AIQ();ALi(b,a);return b;}
function ALi(a,b){Bl(a,b);}
var AHO=G(EU);
function A4a(a){var b=new AHO();ALt(b,a);return b;}
function ALt(a,b){Bl(a,b);}
var Z1=G(0);
var C3=G(0);
function Cv(b,c){if(b!==null)b.cE();return c;}
var W_=G(0);
function JS(){var a=this;B.call(a);a.iK=0;a.nc=0;a.mG=0;}
var A4b=0;function Es(a){A4b=A4b-1|0;}
function Hl(a,b,c){Kg(a,AHw(b,c,400,0));}
function KU(a,b){return K7(a,b,0.875);}
function K7(a,b,c){return DJ(a,b)+c|0;}
function YN(){var a=this;JS.call(a);a.iC=null;a.c8=null;a.vn=null;}
function EH(a){var b,c,d;b=a.c8;c=a.nc;d=a.mG;b.clearRect(0.0,0.0,c,d);}
function Y4(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c8;d="center";c.textAlign=d;break a;case 2:c=a.c8;d="right";c.textAlign=d;break a;default:break a;}d=a.c8;c="left";d.textAlign=c;}}
function Cl(a,b){Kg(a,b.p8);}
function Kg(a,b){var c;if(a.vn!==b){c=a.c8;a.vn=b;c.font=b;}}
function AHw(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BP(a,b,c,d){var e,f,g;e=a.c8;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function DJ(a,b){var c;c=$rt_ustr(b);return a.c8.measureText(c).width;}
function JM(a,b,c,d){var e,f;e=a.c8;f=$rt_ustr(Hf(AHZ([35,HL(b/16|0),HL(b%16|0),HL(c/16|0),HL(c%16|0),HL(d/16|0),HL(d%16|0)])));e.fillStyle=f;}
function ATH(){return {alpha:false};}
var AGY=G();
var AJn=G();
function BT(b,c){if(b===c)return 1;return b!==null?b.bJ(c):c!==null?0:1;}
function AEq(b){return b!==null?b.gj():0;}
function BK(b){if(b!==null)return b;b=new GR;Bl(b,C(21));L(b);}
var BQ=G(0);
function MU(b){return b;}
var Ca=G(0);
function Z$(){B.call(this);this.yH=null;}
function A0B(a,b){var c;c=a.yH;c.pE=b;if(c.Ac)AFq(b);}
var AE6=G();
function KK(b,c){return b.data[c];}
var AIo=G();
var ADh=G(0);
function E0(b,c,d){return AQ5(C(34),Fh(C(15),b),c,d);}
var AJb=G(0);
var AFC=G(0);
function IW(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Db(b,f+g|0);DM(c,0,d,f,g);return d;}
function K_(b,c,d){DM(b,c,d,0,d.data.length);return d;}
function YE(b,c,d){var e;if(c>0)DM(b,0,d,0,c);e=d.data.length;if(c<e)DM(b,c+1|0,d,c,e-c|0);return d;}
function AEi(b,c,d,e){var f;if(c>0)DM(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DM(b,d,e,c,f-d|0);}return e;}
function Ef(b){var c;c=new ABs;c.j6=b;return c;}
function ADR(b,c){if(b.data.length!=c)b=Db(b,c);return b;}
function AFB(b,c,d){var e;e=c.data.length;if(e==d)c=Db(c,e*2|0);c.data[d]=b;return c;}
function AAW(b,c,d){var e;e=c.data.length;if(e==d)c=NU(c,e*2|0);c.data[d]=b;return c;}
function NT(b){return Kn(b,b.data.length);}
function LF(){var a=this;B.call(a);a.sW=null;a.sg=null;a.se=null;a.rb=0;}
function AQ5(a,b,c,d){var e=new LF();AQx(e,a,b,c,d);return e;}
function AQx(a,b,c,d,e){a.sW=b;a.sg=c;a.se=d;a.rb=e;}
var ADN=G();
function AVb(b,c){return {style:b,weight:c};}
function Z_(){B.call(this);this.zt=null;}
function AJZ(a,b){var c,d,e;c=a.zt;d=0;while(d<b.length){e=b[d];(Em()).fonts.add(e);d=d+1|0;}c.Ac=1;b=c.pE;if(b!==null)AFq(b);}
var Z9=G();
function AZF(a,b){$rt_globals.console.info("font load error "+b);}
var Lm=G();
var A4c=null;var A4d=null;function By(){if(A4c===null)A4c=AO4(A4e,0);return A4c;}
function ED(){if(A4d===null)A4d=AO4(A4f,0);return A4d;}
function A1E(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=NB(b)&&(e+f|0)<=NB(d)){a:{b:{if(b!==d){g=HJ(BH(b));h=HJ(BH(d));if(g!==null&&h!==null){if(g===h)break b;if(!IA(g)&&!IA(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dZ;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AIN(n.constructor,o)?1:0)){M9(b,c,d,e,j);b=new IZ;X(b);L(b);}j=j+1|0;k=m;}M9(b,c,d,e,f);return;}if(!IA(g))break a;if(IA(h))break b;else break a;}b=new IZ;X(b);L(b);}}M9(b,c,
d,e,f);return;}b=new IZ;X(b);L(b);}b=new BD;X(b);L(b);}d=new GR;Bl(d,C(35));L(d);}
function DM(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=NB(b)&&(e+f|0)<=NB(d)){M9(b,c,d,e,f);return;}b=new BD;X(b);L(b);}
function M9(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function ET(){return Long_fromNumber(new Date().getTime());}
function AFm(){return A3V($rt_globals.performance.now()*1000000.0);}
var AFA=G();
var AHI=G();
function Xh(b,c){var d,e,f;d=(Em()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Em()).getElementById($rt_ustr(b)).appendChild(d);}
function ADm(){return (Em()).createElement("canvas");}
function AGd(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function APG(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AJW=G();
var VL=G();
function AXr(a,b){var c;c=new Bt;Bl(c,$rt_str(b.message));L(c);}
var AFN=G();
function HS(b){return $rt_str(b);}
var AG7=G();
function Kn(b,c){var d,e,f,g;b=b.data;d=B0(c);e=d.data;f=Bd(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function NU(b,c){var d,e,f,g;b=b.data;d=DA(c);e=d.data;f=Bd(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function I3(b,c){var d,e,f,g;b=b.data;d=BI(c);e=d.data;f=Bd(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Db(b,c){var d,e,f,g;d=b.data;e=AFi(HJ(BH(b)),c);f=Bd(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AFa(b){var c,d,e;if(b===null)return C(31);c=new K;N(c);BV(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BV(c,C(37));U(c,e[d]);d=d+1|0;}BV(c,C(38));return M(c);}
function AQL(b){var c,d,e;if(b===null)return C(31);c=new K;N(c);BV(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BV(c,C(37));E2(c,e[d]);d=d+1|0;}BV(c,C(38));return M(c);}
function ASw(b){var c,d,e,f;if(b===null)return C(31);c=new K;N(c);BV(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BV(c,C(37));f=e[d];AHz(c,c.K,f);d=d+1|0;}BV(c,C(38));return M(c);}
function Jf(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BR;X(f);L(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ADH(b,c,d,e){var f,g;if(c>d){e=new BR;X(e);L(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function KI(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A3X;e=R(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bd(j,h+f|0);l=h+(2*f|0)|0;m=Bd(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.pr(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AIG(b,c){return AAe(b,0,b.data.length,c);}
function AAe(b,c,d,e){var f,g,h,i,j;f=BL(c,d);if(f>0){g=new BR;X(g);L(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AFe(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+AEq(e[d])|0;d=d+1|0;}return c;}
var ABk=G(0);
var AIe=G();
function AVx(a,b){return a.LM(b);}
function AOF(a){return a.O2();}
var AEv=G();
var F2=G(0);
var RX=G();
var BD=G(Bt);
var AIC=G();
function NB(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A4g());}return b.data.length;}
function AFi(b,c){if(b===null){b=new GR;X(b);L(b);}if(b===F($rt_voidcls())){b=new BR;X(b);L(b);}if(c>=0)return ARQ(b.dZ,c);b=new ACY;X(b);L(b);}
function ARQ(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GR=G(Bt);
var IZ=G(Bt);
function Df(){B.call(this);this.mh=0;}
var A4h=null;var A4i=null;var A4j=null;var A4k=null;var A4l=null;var A4m=null;var A4n=null;var A4o=null;var A4p=null;var A4q=null;function ASe(a){var b=new Df();AD_(b,a);return b;}
function AD_(a,b){a.mh=b;}
function O1(b){var c,d;c=A4m.data;if(b>=c.length)return ASe(b);d=c[b];if(d===null){d=ASe(b);A4m.data[b]=d;}return d;}
function Uo(b){var c,d;c=new BM;d=B0(1);d.data[0]=b;Jb(c,d);return c;}
function LW(b){return b>=65536&&b<=1114111?1:0;}
function CO(b){return (b&64512)!=55296?0:1;}
function Dd(b){return (b&64512)!=56320?0:1;}
function N3(b){return !CO(b)&&!Dd(b)?0:1;}
function Ja(b,c){return CO(b)&&Dd(c)?1:0;}
function EF(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Jz(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function IY(b){return (56320|b&1023)&65535;}
function Fw(b){return GQ(b)&65535;}
function GQ(b){if(A4k===null){if(A4n===null)A4n=AIX();A4k=AEk((A4n.value!==null?$rt_str(A4n.value):null));}return RP(A4k,b);}
function Fb(b){return GO(b)&65535;}
function GO(b){if(A4j===null){if(A4o===null)A4o=AJi();A4j=AEk((A4o.value!==null?$rt_str(A4o.value):null));}return RP(A4j,b);}
function RP(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BL(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function AAK(b,c){if(c>=2&&c<=36){b=Xc(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Xc(b){var c,d,e,f,g,h,i,j,k,l;if(A4i===null){if(A4p===null)A4p=AHX();c=(A4p.value!==null?$rt_str(A4p.value):null);d=AQF(Gc(c));e=MC(d);f=BI(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+OE(d)|0;j=j+OE(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A4i=f;}g=A4i.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BL(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function H$(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HF(b){var c;if(b<65536){c=B0(1);c.data[0]=b&65535;return c;}return AHZ([Jz(b),IY(b)]);}
function CA(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&N3(b&65535))return 19;if(A4l===null){if(A4q===null)A4q=AGA();d=(A4q.value!==null?$rt_str(A4q.value):null);e=R(VX,16384);f=e.data;g=DA(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=M6(P(d,l));if(m==64){l=l+1|0;m=M6(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Ba(c,M6(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=M6(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AME(k,k+i|0,NU(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AME(k,k+i|0,NU(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A4l=Db(e,j);}e=A4l.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.sp)o=p+1|0;else{c=d.wO;if(b>=c)return d.w0.data[b-c|0];c=p-1|0;}}return 0;}
function Kq(b){a:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function HC(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CA(b)!=16?0:1;}
function Xy(b){switch(CA(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function QU(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Xy(b);}return 1;}
function AGX(){A4h=F($rt_charcls());A4m=R(Df,128);}
function AIX(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AJi(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AHX(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AGA(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Vj=G(0);
var Zk=G(0);
var EN=G(0);
var AG1=G();
function Em(){return $rt_globals.window.document;}
function AW9(a){return a.GX();}
function AY$(a,b){return a.IA($rt_str(b));}
function AYZ(a,b){a.Gd($rt_str(b));}
function AUq(a,b){return a.LW($rt_str(b));}
function AKc(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ALS(a){return a.Pk();}
function AY7(a,b,c){return a.Of($rt_str(b),$rt_str(c));}
function ANR(a,b,c,d){a.By($rt_str(b),E5(c,"handleEvent"),d?1:0);}
function ATz(a){return a.M_();}
function AXR(a){return !!a.IY();}
function AZB(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AOU(a){return a.Gm();}
function ANu(a,b){a.N$($rt_str(b));}
function APb(a){return !!a.F7();}
function ASz(a){return a.IJ();}
function AOf(a){return $rt_ustr(a.Ef());}
function AKL(a,b){return a.Gx(b?1:0);}
function A0q(a){return a.IX();}
function AVU(a,b,c){return a.PT($rt_str(b),$rt_str(c));}
function AOO(a,b,c){return a.Ms(b,c?1:0);}
function ARS(a,b,c){return !!a.Ib($rt_str(b),$rt_str(c));}
function ASX(a){return a.Hs();}
function ANd(a){return $rt_ustr(a.JO());}
function AL1(a,b){return !!a.DA(b);}
function AMR(a,b){return a.Ke($rt_str(b));}
function AV4(a,b,c){return a.GV($rt_str(b),$rt_str(c));}
function AOo(a){return a.K1();}
function ATB(a,b){return a.Pp($rt_str(b));}
function AMQ(a){return $rt_ustr(a.KF());}
function AQc(a){a.F3();}
function AJ4(a,b){return a.PW($rt_str(b));}
function ARl(a,b){return a.Gi($rt_str(b));}
function ATU(a,b){return a.F2($rt_str(b));}
function AZt(a){return $rt_ustr(a.Lb());}
function AT0(a,b,c){return a.NN(b,c);}
function AXZ(a,b){return a.Ee(b);}
function AQC(a){return a.H1();}
function APB(a,b,c){a.C$($rt_str(b),E5(c,"handleEvent"));}
function APk(a,b,c){return a.E6(b,c);}
function ARg(a){return !!a.O1();}
function ASd(a,b){return a.GS($rt_str(b));}
function AXh(a,b,c,d){a.AS($rt_str(b),E5(c,"handleEvent"),d?1:0);}
function ALW(a){return a.H2();}
function AUb(a,b,c){return a.Gw($rt_str(b),$rt_str(c));}
function ATh(a){return $rt_ustr(a.Ls());}
function A0l(a){return a.KT();}
function APy(a){return a.K6();}
function ATf(a){return a.Ic();}
function APC(a,b,c){a.Dz($rt_str(b),E5(c,"handleEvent"));}
function AUz(a,b){return a.JB(b);}
function AMW(a,b){a.Ey($rt_str(b));}
function AYA(a){return $rt_ustr(a.Ky());}
function O0(){var a=this;B.call(a);a.wQ=null;a.wR=null;a.wS=0;a.wT=null;a.wN=null;}
function AP9(a,b){var c,d,e,f,g;c=a.wQ;d=a.wR;e=a.wS;f=a.wT;g=a.wN;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AH3=G();
function AQQ(b){return Math.exp(b);}
function AG2(b){return Math.log(b);}
function I5(b,c){return AWL(b,c);}
function AWL(b,c){return Math.pow(b,c);}
function DF(){return ASm();}
function ASm(){return Math.random();}
function Bd(b,c){if(b<c)c=b;return c;}
function Be(b,c){if(b>c)c=b;return c;}
function ART(b,c){return Math.max(b,c);}
function ADD(b,c){return ART(b,c);}
function Vq(b){if(b<0)b= -b|0;return b;}
function AM1(b){return Math.abs(b);}
var Xp=G(0);
var Q1=G(0);
var YC=G(0);
var Se=G(0);
var ACo=G(0);
var AAM=G(0);
var AHo=G();
function AXA(a,b,c){a.Dz($rt_str(b),E5(c,"handleEvent"));}
function AWk(a,b,c){a.C$($rt_str(b),E5(c,"handleEvent"));}
function ANf(a,b,c,d){a.AS($rt_str(b),E5(c,"handleEvent"),d?1:0);}
function AKW(a,b){return !!a.DA(b);}
function AUN(a,b,c,d){a.By($rt_str(b),E5(c,"handleEvent"),d?1:0);}
var BR=G(Bt);
var ACY=G(Bt);
var H7=G(BD);
var AHC=G();
function AH$(){return "ping";}
function AGx(b){return b===AH$()?1:0;}
var Yf=G(0);
var W0=G(0);
function Zq(){var a=this;B.call(a);a.sG=null;a.nL=null;a.pU=null;a.ei=null;a.t1=null;a.vy=null;a.o7=null;a.hl=null;a.kY=0;a.Dh=0;a.xX=null;a.gi=null;a.zS=null;}
function V7(a,b){var c;c=Em();b=$rt_ustr(b);c.title=b;}
function R7(a){a.Dh=$rt_globals.requestAnimationFrame(Bu(a.sG,"onAnimationFrame"));}
function Jd(a){a.kY=1;}
function ZS(a,b,c){var d,e;a.o7.eg=BJ(b,c);d=a.ei;e=b;d.width=e;d=a.ei;e=c;d.height=e;d=a.hl;V(d.c2,b,c);e=d.X;d=d.c2;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gi.bZ(a.hl.c2,K4(a));a.gi.bP();}
function YM(a,b){var c,d,e;c=a.xX;d=a.ei;if(BT(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.xX=b;}
function Mt(a){return $rt_globals.performance.now()/1000.0;}
function K4(a){return $rt_globals.window.devicePixelRatio;}
function LE(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADb(null,b);else{c=new AB2;d=$rt_globals.window.showDirectoryPicker();e=new AB1;e.ro=b;e.rp=c;d.then(Bu(e,"f"),Bu(c,"f"));}}
function NM(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADb(b,null);else{c=new ACw;d=$rt_globals.window.showOpenFilePicker();e=new ACv;e.rL=b;d.then(Bu(e,"f"),Bu(c,"f"));}}
function CQ(a,b,c,d){var e,f,g,h;e=a.zS;f=e.h1;if(f>0){g=e.oA.data;f=f-1|0;e.h1=f;Sz(e,b,c,d,g[f]);}else{h=e.lP;e=new AB3;e.td=b;e.zf=c;e.yv=d;b=new SB;b.qE=e;c=h.lO;b.yY=c;if(c===null)h.ou=b;else c.s2=b;h.lO=b;h.b1=h.b1+1|0;h.kD=h.kD+1|0;}}
function QS(a,b,c){var d,e;if(!LA()){b=new Bt;Bl(b,C(39));c.i(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new Y8;e.sb=b;b=AJT(c);d.then(Bu(e,"f"),Bu(b,"f"));}}
function SC(a,b,c,d){var e,f,g;if(!LA()){b=new Bt;Bl(b,C(39));d.i(b);}else{e=$rt_globals.navigator.clipboard;f=Gc(b);A1V();b=A4r;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ABq;e.ud=c;c=AJT(d);b.then(Bu(e,"f"),Bu(c,"f"));}}
function UD(a){return LA()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AJT(b){var c;c=new Oo;c.yF=b;return c;}
var BF=G(0);
var AIl=G();
var Bb=G(0);
var AIm=G();
var YG=G(0);
function Tp(){B.call(this);this.wD=null;}
function AVT(a,b){var c,d;c=b;b=a.wD;if(!(!b.gi.cf(c/1000.0)&&!b.kY)){d=b.hl.c2;if(Ba(d.a,d.b)){b.kY=0;b.gi.bP();}}R7(b);}
function Tn(){B.call(this);this.Ai=null;}
function Ds(a){Jd(a.Ai);}
var X$=G(0);
function To(){B.call(this);this.x6=null;}
function AL_(a,b,c){var d,e,f,g;c=a.x6;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.ei){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=K4(c);ZS(c,Gq(f.width*g),Gq(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];ZS(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AFY=G();
function AS2(){return {box:'device-pixel-content-box'};}
function AQn(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cx=G(0);
function Tm(){B.call(this);this.qO=null;}
function AQb(a,b){b=a.qO;b.gi.bZ(b.hl.c2,K4(b));b.gi.bP();}
function Zb(){var a=this;B.call(a);a.lP=null;a.zC=null;a.rw=null;a.oA=null;a.vH=0;a.h1=0;a.Ae=null;}
function Sz(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.vH+1|0;a.vH=f;g=a.rw;h=CT(f);g.jy=N1(g,g.jy,h);h=AAP(g,h);Vl(h,b);Vl(h,b);g.lK=g.lK+1|0;b=a.zC[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BM)g=$rt_ustr(c);else if(IX(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(IX(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(IX(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof RZ)){b=new BR;c
=Jy(BH(c));g=new K;N(g);H(H(g,C(40)),c);Bl(b,M(g));L(b);}c=c;g=c.hQ;if(g===null)g=c.fS;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var TU=G(0);
function ASG(a,b){var c;c=a.b7();while(c.cA()){b.i(c.b8());}}
var Hn=G(0);
function S2(a){var b,c;b=new Y_;c=new Qo;c.wM=a;b.yT=c;return b;}
function AV8(a,b){var c,d;c=a.b7();d=0;while(c.cA()){if(b.P(c.b8())){c.oC();d=1;}}return d;}
var Fp=G();
function Ev(a){return a.cZ()?0:1;}
function F$(a,b){var c,d,e,f,g,h;c=b.data;d=a.m;e=c.length;if(e<d)b=AFi(HJ(BH(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B2(a);while(B7(f)){g=b.data;h=e+1|0;g[e]=B8(f);e=h;}return b;}
function AYO(a,b){var c;c=a.b7();while(c.cA()){if(BT(c.b8(),b)){c.oC();return 1;}}return 0;}
function HQ(a,b){var c,d;c=0;d=b.b7();while(d.cA()){if(!a.yf(d.b8()))continue;c=1;}return c;}
var Na=G(0);
var Mf=G(0);
function Fd(){Fp.call(this);this.b1=0;}
function AQq(a,b){a.nK(a.cZ(),b);return 1;}
function B2(a){var b;b=new Wa;b.iL=a;b.pp=a.b1;b.k5=a.cZ();b.hn=(-1);return b;}
function APQ(a,b,c){var d,e;if(b>=0&&b<=a.cZ()){if(c.et())return 0;d=c.b7();while(d.cA()){e=b+1|0;a.nK(b,d.b8());b=e;}return 1;}c=new BR;X(c);L(c);}
function AZo(a,b,c){c=new D8;X(c);L(c);}
function KO(a,b){var c,d;c=a.cZ();d=0;while(true){if(d>=c)return (-1);if(BT(b,a.m2(d)))break;d=d+1|0;}return d;}
function AO6(a,b){var c,d;if(!IX(b,Mf))return 0;c=b;if(a.m!=c.m)return 0;d=0;while(d<c.m){if(!BT(Bw(a,d),Bw(c,d)))return 0;d=d+1|0;}return 1;}
var LT=G(Fd);
var Oj=G(0);
var ACI=G(0);
function SL(){var a=this;LT.call(a);a.ou=null;a.lO=null;a.kD=0;}
var La=G(0);
function D6(){var a=this;B.call(a);a.og=null;a.om=null;}
var Eo=G(0);
var UC=G(0);
var OD=G(0);
function Xf(){var a=this;D6.call(a);a.jy=null;a.lH=null;a.Cc=null;a.lK=0;}
function AF3(a,b){var c;c=AAP(a,b);if(c===null)return null;a.jy=KL(a,a.jy,b);a.lK=a.lK+1|0;return c.jS;}
function AAP(a,b){var c,d;c=a.jy;while(true){if(c===null)return null;d=Mu(a.lH,b,c.lm);if(!d)break;c=d>=0?c.b3:c.bR;}return c;}
function N1(a,b,c){var d,e;if(b===null){b=new Kl;d=null;b.lm=c;b.jS=d;b.go=1;b.gy=1;return b;}e=Mu(a.lH,c,b.lm);if(!e)return b;if(e>=0)b.b3=N1(a,b.b3,c);else b.bR=N1(a,b.bR,c);EO(b);return MB(b);}
function KL(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Mu(a.lH,c,b.lm);if(d<0)b.bR=KL(a,b.bR,c);else if(d>0)b.b3=KL(a,b.b3,c);else{e=b.b3;if(e===null)return b.bR;f=b.bR;g=R(Kl,e.go).data;h=0;while(true){b=e.bR;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b3;while(h>0){h=h+(-1)|0;j=g[h];j.bR=b;EO(j);b=MB(j);}e.b3=b;e.bR=f;EO(e);b=e;}EO(b);return MB(b);}
function Zf(){B.call(this);this.yi=null;}
function Zg(){var a=this;B.call(a);a.xJ=null;a.xI=0;}
function ASW(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.xJ;d=a.xI;AGx(b.data);e=c.lP;f=e.ou;if(f===null)g=null;else{g=f.s2;e.ou=g;if(g!==null)g.yY=null;else e.lO=null;e.kD=e.kD-1|0;e.b1=e.b1+1|0;g=f.qE;}if(g!==null)Sz(c,g.td,g.zf,g.yv,d);else{h=c.oA.data;i=c.h1;c.h1=i+1|0;h[i]=d;}c=c.Ae;b=b.data;if(!AGx(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BR;X(b);L(b);}if(b.length<1){b=new BR;AFd(b);L(b);}e=CT(b[0]);c=AF3(c.yi,e);h=R(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?HS(MU(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A1n(MU(e)):(e instanceof $rt_globals.File?1:0)?AIJ(null,MU(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AIJ(MU(e),null);k=l;}c.i(h);}}
function ADT(){var a=this;B.call(a);a.cp=null;a.i5=null;a.Dr=null;a.eg=null;}
function A2F(a,b){var c=new ADT();AZk(c,a,b);return c;}
function AZk(a,b,c){var d,e,f,g;a.eg=null;a.i5=b;d=new XN;d.bH=CR(R(Cp,0));d.nO=CR(R(Cp,0));d.bO=CR(R(Cz,0));d.fc=CR(R(Ez,0));d.dd=CR(R(Dl,0));d.gr=CR(R(Fn,0));d.gP=CR(R(FF,0));d.lF=CR(R(Bb,0));d.me=CR(R(Bb,0));d.dh=c;a.cp=d;e=$rt_globals.window;f=R(C3,14);g=f.data;d=new ABM;d.qf=a;g[0]=CY(a,b,C(41),d);d=new ABN;d.ys=a;g[1]=CY(a,b,C(42),d);d=new ABO;d.wt=a;g[2]=CY(a,b,C(43),d);d=new ABP;d.uH=a;g[3]=CY(a,b,C(44),d);d=new ABQ;d.sz=a;g[4]=CY(a,b,C(45),d);d=new ABR;d.qB=a;g[5]=CY(a,b,C(46),d);d=new ABS;d.Aq=a;g[6]
=CY(a,b,C(47),d);d=new ABT;d.x8=a;g[7]=CY(a,b,C(48),d);d=new ABU;d.v9=a;g[8]=CY(a,b,C(49),d);d=new ABV;d.ug=a;g[9]=CY(a,b,C(50),d);d=new UZ;d.tO=a;g[10]=CY(a,b,C(51),d);d=new U0;d.s9=a;e.addEventListener("paste",Bu(d,"handleEvent"),!!1);g[11]=Ul(a,e,C(52),d);d=new U1;d.vk=a;g[12]=CY(a,e,C(53),d);d=new U2;d.zZ=a;g[13]=CY(a,e,C(54),d);c=new Qx;c.Bb=f;a.Dr=c;e=new ACD;e.w5=b;b.onpointerdown=Bu(e,"f");e=new ACE;e.wh=b;b.onpointerup=Bu(e,"f");}
function VG(){return (Em()).activeElement;}
function CY(a,b,c,d){b.addEventListener($rt_ustr(c),Bu(d,"handleEvent"));return Ul(a,b,c,d);}
function Ul(a,b,c,d){var e;e=new X7;e.CV=b;e.CX=c;e.CW=d;return e;}
function AAa(a,b){var c;c=new AAR;c.uG=b;return c;}
function EZ(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.i5.getBoundingClientRect();e=BJ(Gq((b.clientX-d.left)*c),Gq((b.clientY-d.top)*c));f=AIw(a.eg);d=new Od;AAC(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.g=e;d.CL=f;return d;}
function U5(a,b,c){var d,e,f,g;d=new PK;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;AAC(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.n5=0;d.d8=e;d.bk=f;d.ji=c;d.x_=g;return d;}
function DY(a,b){b.stopPropagation();b.preventDefault();}
function Np(){var a=this;B.call(a);a.oP=null;a.ck=null;a.X=null;a.lo=0;a.yX=null;a.C9=0;a.BX=0;a.kw=null;a.km=null;a.B_=null;a.DG=null;a.tv=null;a.vK=null;a.im=null;a.hL=null;a.jr=null;a.Ch=null;a.rc=null;a.c2=null;a.z7=null;a.o2=0;a.lZ=0;a.nt=0;a.ni=0;a.kR=0;a.np=null;a.nB=0.0;a.o$=0.0;}
function AJg(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c2=new Bg;a.o2=0;a.np=new ABY;a.oP=c;a.lo=d;g=$rt_str(b.getParameter(7938));h=new K;N(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(M(h)));a.X=b;a.ck=Kk(c,4,4,1);i=AJ_(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B0(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Qr;Jg();c=A4s;m.eH=b;m.hy=c;m.sL=j.length/c.mx|0;m.z1
=l.length;n=b.createBuffer();m.vv=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.uJ=null;n=b.createBuffer();m.uk=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.rc=m;a.BX=M5(g,C(56));c=new X8;c.dS=b;a.yX=c;a.nB=e;a.o$=f;d=b.getParameter(3379);a.C9=d;c=new K;N(c);U(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(M(c)));k=R(C_,9);i=k.data;c=A1q(b);a.kw=c;i[0]=c;c=A2i(b,C(58));a.km=c;i[1]=c;c=new Yq;HW(c,b,C(59),
C(60),A4s);a.B_=c;i[2]=c;c=A29(b);a.DG=c;i[3]=c;c=new O6;UK(c,b,C(61),C(62));a.tv=c;i[4]=c;c=A3j(b);a.vK=c;i[5]=c;c=A1Z(b);a.im=c;i[6]=c;c=A24(b);a.hL=c;i[7]=c;c=A25(b);a.jr=c;i[8]=c;a.Ch=k;ACp(b,C(63));}
function Gu(a,b,c){return HU(a,b,c,400,0);}
function Hx(a,b,c){return Kk(a.oP,b,c,0);}
function DV(a,b,c,d){return Kk(a.oP,b,c,d);}
function Ey(a,b){var c,d,e,f,g;c=a.X;d=b.bm;e=b.bs;f=b.bd;g=b.bC;c.clearColor(d,e,f,g);a.X.clear(16384);}
function B5(a,b){var c;if(b==a.lZ)return b;if(!b)a.X.disable(3042);else{a.X.enable(3042);a.X.blendFuncSeparate(770,771,1,1);}c=a.lZ;a.lZ=b;return c;}
function M8(a,b,c){Lu(a,b.a,b.b,c);}
function Lu(a,b,c,d){var e,f;e=d.a;f=d.b;a.ni=1;a.kR=1;d=a.np;d.ss=b;d.st=c;d.sr=e;d.sq=f;AAD(a);}
function FY(a){a.ni=0;a.kR=0;AAD(a);}
function AAD(a){var b,c,d,e,f,g;b=a.nt;c=a.ni;if(b!=c){a.nt=c;if(!c)a.X.disable(3089);else a.X.enable(3089);}if(a.nt&&a.kR){a.kR=0;d=a.X;e=a.np;b=e.ss;c=a.c2.b-e.st|0;f=e.sq;c=c-f|0;g=e.sr;d.scissor(b,c,g,f);}}
function FO(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.rc;c=a.o2;d=b.hy.yB;e=b.eH;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eH;h=b.vv;e.bindBuffer(34962,h);i=b.hy.py.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eH;m=k.jb;n=k.gb;o=b.hy.mx*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gb|0;j=j+1|0;}a:{e=b.uJ;if(e!==null){c=0;b.eH.bindBuffer(34962,e);i=b.hy.xV.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eH;j=e.jb;p=e.gb;m=e.ri;n=b.hy.w3;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gb|0;g=g+1|0;}}}q=b.uk;if(q===null){c=b.sL;if(c>0)b.eH.drawArrays(4,0,c);}else{b.eH.bindBuffer(34963,q);k=b.eH;g=b.z1;k.drawElements(4,g,5123,0);}a.o2=d;}
function Bs(a,b,c,d,e){Ge(a,a.kw);Gp(a.kw,a.X,b,c,d,a.c2);d=a.kw;Fq(a.X,d.zG,e);FO(a);}
function AC0(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Ge(a,a.hL);Gp(a.hL,a.X,b,c,d,a.c2);j=a.hL;d=a.X;k=j.u7;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.u6;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.hL;Fq(a.X,d.vY,i);FO(a);}
function LO(a,b,c,d,e,f,g,h){var i,j;Ge(a,a.jr);Gp(a.jr,a.X,b,c,d,a.c2);d=a.jr;i=a.X;j=d.sJ;i.uniform2f(j,e,f);Fq(i,d.wF,g);d=a.jr;Fq(a.X,d.vx,h);FO(a);}
function DX(a,b,c,d,e,f,g,h,i){var j;j=!i?a.tv:a.vK;Ge(a,j);AJD(j,a.X,!i?a.o$:a.nB);Gp(j,a.X,b,c,d,a.c2);Nw(j,a.X,f);AC5(j,a.X,f,e);AIE(j,a.X,g,h);FO(a);}
function CS(a){var b,c;b=new Ig;c=a.yX;b.fj=new Bg;b.ey=c;b.fL=c.dS.createTexture();A4t=A4t+1|0;return b;}
function Mx(a,b){ACp(a.X,b);}
function Ge(a,b){var c,d;if(b!==a.z7){c=a.X;d=b.bF;c.useProgram(d);a.z7=b;}}
function Tf(){var a=this;Np.call(a);a.BJ=null;a.Ca=null;}
function HU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.ck;g=AHw(b,c,d,e);Kg(f,g);h=f.c8.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=DJ(f,C(64));m=DJ(f,C(65));h=new Ld;n=g;h.nA=b;h.wa=c;h.A8=d;h.Bm=e;h.dm=i;h.ev=j;h.AZ=l;h.pj=k;h.p8=n;h.si=CU(i);h.B4=CU(h.ev);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.A4=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.AV=b;return h;}
function Ci(){B.call(this);this.C=null;}
function DG(a,b){a.C=b;}
function A0m(a,b){return 0;}
function XN(){var a=this;B.call(a);a.bH=null;a.nO=null;a.bO=null;a.fc=null;a.dd=null;a.gr=null;a.gP=null;a.lF=null;a.me=null;a.dh=null;a.jh=null;a.wd=0;}
function Sv(a,b){var c,d,e,f;Ds(a.dh);c=(Cy(!b.ji?a.nO:a.bH)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].P(b);if(f)break;if(b.n5)break;e=e+1|0;}return f;}
function QQ(a,b,c){var d,e,f;Ds(a.dh);d=(Cy(a.gr)).data;e=d.length;f=0;while(f<e){if(d[f].hD(b,c))return 1;f=f+1|0;}return 0;}
function ABM(){B.call(this);this.qf=null;}
function AXK(a,b){var c;c=a.qf;if(Sv(c.cp,U5(c,b,1)))DY(c,b);}
function ABN(){B.call(this);this.ys=null;}
function AXV(a,b){var c;c=a.ys;if(Sv(c.cp,U5(c,b,0)))DY(c,b);}
function ABO(){B.call(this);this.wt=null;}
function AOS(a,b){var c,d,e,f,g,h,i;c=a.wt;if(c.eg!==null){a:{b:{d=EZ(c,b);e=c.cp;Ds(e.dh);f=e.jh;if(f!==null)f.i(d);else{g=(Cy(e.bO)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bQ(d))break a;i=i+1|0;}}}}DY(c,b);}}
function ABP(){B.call(this);this.uH=null;}
function AWB(a,b){var c,d,e,f,g,h;c=a.uH;b.button;if(c.eg!==null)a:{d=EZ(c,b);c=c.cp;e=b.button;Ds(c.dh);if(c.jh===null){f=(Cy(c.bO)).data;g=f.length;h=0;while(h<g){b=f[h].cw(d,e);if(b!==null){c.jh=b;c.wd=e;break a;}h=h+1|0;}}}}
function ABQ(){B.call(this);this.sz=null;}
function AWN(a,b){var c,d,e,f,g,h,i;c=a.sz;b.button;if(c.eg!==null){d=EZ(c,b);e=c.cp;f=b.button;Ds(e.dh);if(f==e.wd&&e.jh!==null)e.jh=null;g=(Cy(e.bO)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dt(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DY(c,b);}}
function ABR(){B.call(this);this.qB=null;}
function AQh(a,b){var c,d,e,f,g,h,i,j,k;c=a.qB;if(c.eg!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cp;f=EZ(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Ds(e.dh);i=(Cy(e.fc)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dq(f,d,h))break b;k=k+1|0;}}DY(c,b);}}
function ABS(){B.call(this);this.Aq=null;}
function ANe(a,b){var c,d,e,f,g,h,i,j;c=a.Aq;if(c.eg!==null){d=EZ(c,b);e=c.cp;f=b.button;g=b.detail;Ds(e.dh);h=(Cy(e.bO)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cv(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DY(c,b);}}
function ABT(){B.call(this);this.x8=null;}
function A0K(a,b){var c,d,e,f,g,h,i;c=a.x8;if(c.eg!==null){d=EZ(c,b);e=c.cp;Ds(e.dh);f=(Cy(e.dd)).data;g=f.length;h=0;a:{while(h<g){if(f[h].P(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DY(c,b);}}
function ABU(){B.call(this);this.v9=null;}
function AMO(a,b){var c,d,e;b=a.v9.cp;c=(Cy(b.me)).data;d=c.length;e=0;while(e<d){c[e].k();e=e+1|0;}Ds(b.dh);}
function ABV(){B.call(this);this.ug=null;}
function AQX(a,b){var c,d,e;b=a.ug.cp;c=(Cy(b.lF)).data;d=c.length;e=0;while(e<d){c[e].k();e=e+1|0;}Ds(b.dh);}
function UZ(){B.call(this);this.tO=null;}
function A0n(a,b){var c;c=a.tO;if(c.eg!==null)EZ(c,b);}
function U0(){B.call(this);this.s9=null;}
function AOD(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.s9;if(VG()===c.i5){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cy(c.cp.gP)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cW();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cp.dh;m=new OW;m.up=k;m.uq=l;g.getAsString(Bu(m,"accept"));DY(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new K;N(l);H(H(H(H(l,C(67)),k),C(68)),g);$rt_globals.console.info($rt_ustr(M(l)));}e=e+1
|0;}}}
function U1(){B.call(this);this.vk=null;}
function AOW(a,b){var c;c=a.vk;if(VG()===c.i5&&QQ(c.cp,AAa(c,b),0))DY(c,b);}
function U2(){B.call(this);this.zZ=null;}
function AX1(a,b){var c;c=a.zZ;if(VG()===c.i5&&QQ(c.cp,AAa(c,b),1))DY(c,b);}
var AAu=G(0);
var AAF=G();
function Kk(a,b,c,d){var e,f,g,h,i;e=new YN;e.iK=d;A4b=A4b+1|0;e.nc=b;e.mG=c;f=(Em()).createElement("canvas");e.iC=f;g=b;f.width=g;h=e.iC;f=c;h.height=f;if(!d)g=e.iC.getContext("2d");else{i=e.iC;h=ATH();g=i.getContext("2d",h);}e.c8=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AAE=G();
function ANW(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Of(){var a=this;B.call(a);a.N=null;a.p=null;a.b5=null;}
var Kd=G();
var A3X=null;function Mu(a,b,c){return b.lM(c);}
function AED(){A3X=new Kd;}
function AF9(){var a=this;B.call(a);a.gR=null;a.h6=null;a.gc=0;}
function CR(a){var b=new AF9();ANb(b,a);return b;}
function ANb(a,b){a.gR=b;}
function Bc(a,b){var c,d,e;c=a.gc;d=a.gR;if(c==d.data.length)a.gR=Db(d,c+4|0);d=a.gR.data;e=a.gc;a.gc=e+1|0;d[e]=b;a.h6=null;}
function Cy(a){var b;b=a.h6;if(!(b!==null&&b.data.length==a.gc))a.h6=Db(a.gR,a.gc);return a.h6;}
var Eq=G(0);
var Cp=G(0);
var Cz=G(0);
function AWc(a,b){return 0;}
function ARC(a,b,c){return null;}
function AKv(a,b,c){return 0;}
function AYe(a,b,c,d){return 0;}
var Ez=G(0);
var Dl=G(0);
var Fn=G(0);
var DD=G(0);
var FF=G(0);
function Qx(){B.call(this);this.Bb=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BJ(a,b){var c=new Bg();ADV(c,a,b);return c;}
function AIw(a){var b=new Bg();ALV(b,a);return b;}
function ADV(a,b,c){a.a=b;a.b=c;}
function ALV(a,b){a.a=b.a;a.b=b.b;}
function Cs(a,b){a.a=b.a;a.b=b.b;}
function V(a,b,c){a.a=b;a.b=c;}
function AGF(a){var b,c,d;b=a.a;c=a.b;d=new K;N(d);U(H(U(H(d,C(69)),b),C(70)),c);return M(d);}
function ANN(a,b){var c;a:{b:{if(a!==b){if(BH(b)!==BH(a))break b;if(!JE(a,b))break b;}c=1;break a;}c=0;}return c;}
function JE(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function ABY(){var a=this;B.call(a);a.ss=0;a.st=0;a.sr=0;a.sq=0;}
var AFE=G();
var AHc=G(0);
function X8(){B.call(this);this.dS=null;}
function NE(){var a=this;B.call(a);a.bF=null;a.DI=null;}
function AII(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(71):C(72);g=$rt_str(b.getShaderInfoLog(e));h=new K;N(h);H(H(h,f),g);g=M(h);b.deleteShader(e);Bp(By(),g);Bp(ED(),C(73));Bp(ED(),d);Bp(ED(),C(73));b=new Bt;Bl(b,g);L(b);}
function C_(){var a=this;NE.call(a);a.v8=null;a.rC=null;a.m9=null;}
function A4u(a,b,c,d){var e=new C_();HW(e,a,b,c,d);return e;}
function HW(a,b,c,d,e){var f,g,h,i,j,k;a.DI=e;f=AII(b,35633,c);d=AII(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bF=g;h=e.sU.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bF;k=c.jb;c=c.rJ;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bF;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ACp(b,C(74));a.m9=new Bg;c=a.bF;a.v8=b.getUniformLocation(c,"uResolution");c=a.bF;a.rC=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new K;N(c);H(H(c,C(75)),d);Bl(b,M(c));L(b);}
function AD1(a,b,c){var d,e,f;if(!JE(a.m9,c)){Cs(a.m9,c);d=a.v8;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Gp(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.rC;b.uniform4f(e,i,l,h,j);AD1(a,b,f);}
function AJl(){C_.call(this);this.zG=null;}
function A1q(a){var b=new AJl();AV1(b,a);return b;}
function AV1(a,b){var c;Jg();HW(a,b,C(59),C(76),A4s);c=a.bF;a.zG=b.getUniformLocation(c,"uColor");}
function Fe(){C_.call(this);this.sw=null;}
function A2i(a,b){var c=new Fe();AAd(c,a,b);return c;}
function A4v(a,b,c){var d=new Fe();AAh(d,a,b,c);return d;}
function AAd(a,b,c){AAh(a,b,C(59),c);}
function AAh(a,b,c,d){Jg();HW(a,b,c,d,A4s);c=a.bF;a.sw=b.getUniformLocation(c,"sDiffuse");}
function Nw(a,b,c){var d;d=a.sw;b.uniform1i(d,0);b.activeTexture(33984);c=c.fL;b.bindTexture(3553,c);}
var Yq=G(C_);
function AEy(){Fe.call(this);this.AO=null;}
function A29(a){var b=new AEy();APR(b,a);return b;}
function APR(a,b){var c;AAd(a,b,C(77));c=a.bF;a.AO=b.getUniformLocation(c,"uContrast");}
function Hi(){var a=this;Fe.call(a);a.q8=null;a.rQ=null;a.sH=null;a.yO=null;a.pO=0.0;}
function A4w(a,b,c){var d=new Hi();UK(d,a,b,c);return d;}
function UK(a,b,c,d){AAh(a,b,c,d);c=a.bF;a.q8=b.getUniformLocation(c,"uTexTransform");c=a.bF;a.rQ=b.getUniformLocation(c,"uColor");c=a.bF;a.sH=b.getUniformLocation(c,"uBgColor");c=a.bF;a.yO=b.getUniformLocation(c,"uTextPow");}
function AJD(a,b,c){var d;if(a.pO!==c){a.pO=c;d=a.yO;b.uniform2f(d,c,0.0);}}
function AIE(a,b,c,d){Fq(b,a.rQ,c);Fq(b,a.sH,d);}
function AC5(a,b,c,d){var e,f,g,h,i,j;c=c.fj;e=c.a;f=c.b;g=d.bm;h=e;g=g/h;i=d.bs;j=f;i=i/j;h=d.bd/h;j=d.bC/j;c=a.q8;b.uniform4f(c,g,i,h,j);}
var O6=G(Hi);
var AGo=G(Hi);
function A3j(a){var b=new AGo();AUU(b,a);return b;}
function AUU(a,b){UK(a,b,C(61),C(78));}
function AHp(){var a=this;Fe.call(a);a.uK=null;a.uI=null;a.rR=null;}
function A1Z(a){var b=new AHp();AMi(b,a);return b;}
function AMi(a,b){var c,d;AAd(a,b,C(79));c=a.bF;a.uK=b.getUniformLocation(c,"uColorB");d=a.bF;a.uI=b.getUniformLocation(d,"uColorF");d=a.bF;a.rR=b.getUniformLocation(d,"uContrast");}
function AIS(){var a=this;C_.call(a);a.vY=null;a.u7=null;a.u6=null;}
function A24(a){var b=new AIS();AUW(b,a);return b;}
function AUW(a,b){var c;Jg();HW(a,b,C(59),C(80),A4s);c=a.bF;a.vY=b.getUniformLocation(c,"uColor");c=a.bF;a.u7=b.getUniformLocation(c,"uPoints1");c=a.bF;a.u6=b.getUniformLocation(c,"uPoints2");}
function ADx(){var a=this;C_.call(a);a.vx=null;a.sJ=null;a.wF=null;}
function A25(a){var b=new ADx();ATV(b,a);return b;}
function ATV(a,b){var c;Jg();HW(a,b,C(59),C(81),A4s);c=a.bF;a.vx=b.getUniformLocation(c,"uColor");c=a.bF;a.sJ=b.getUniformLocation(c,"uBaseline");c=a.bF;a.wF=b.getUniformLocation(c,"uScaleHExp");}
var YX=G(0);
var AJU=G(0);
function Fq(b,c,d){var e,f,g,h;e=d.bm;f=d.bs;g=d.bd;h=d.bC;b.uniform4f(c,e,f,g,h);}
function ACp(b,c){var d,e;d=b.getError();if(d){b=By();e=new K;N(e);U(H(e,c),d);Bp(b,M(e));}}
function X7(){var a=this;B.call(a);a.CV=null;a.CX=null;a.CW=null;}
function Qr(){var a=this;B.call(a);a.eH=null;a.hy=null;a.vv=null;a.uJ=null;a.uk=null;a.sL=0;a.z1=0;}
function CE(){var a=this;B.call(a);a.CU=null;a.dv=0;}
function Dz(a,b,c){a.CU=b;a.dv=c;}
function GW(){var a=this;CE.call(a);a.sU=null;a.py=null;a.xV=null;a.mx=0;a.w3=0;a.yB=0;}
var A4s=null;var A4x=null;function Jg(){Jg=Bm(GW);ANA();}
function ANA(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GW;c=R(D$,2);d=c.data;AZR();d[0]=A4y;d[1]=A4z;Jg();Dz(b,C(82),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];AG0();switch(A4A.data[l.ph.dv]){case 1:f=f+l.gb|0;h=h+1|0;break a;case 2:e=e+l.gb|0;g=g+1|0;break a;default:}}i=i|1<<l.jb;k=k+1|0;}b.sU=c;b.mx=e;b.w3=f;b.yB=i;c=R(D$,g);m=c.data;b.py=c;c=R(D$,h);n=c.data;b.xV=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];AG0();switch(A4A.data[l.ph.dv]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}A4s=b;c=R(GW,1);c.data[0]=b;A4x=c;}
var L2=G(0);
var R$=G(0);
var AAJ=G(0);
var GF=G();
function Mq(){GF.call(this);this.AC=null;}
function AEf(){var a=this;Mq.call(a);a.BV=0;a.mD=0;a.k7=null;a.mk=null;a.tq=null;}
function AO4(a,b){var c=new AEf();AZD(c,a,b);return c;}
function AZD(a,b,c){a.AC=b;b=new K;N(b);a.k7=b;a.mk=B0(32);a.BV=c;AEa();a.tq=A4B;}
function ZY(a,b,c,d){var e,$$je;e=a.AC;if(e===null)a.mD=1;if(!(a.mD?0:1))return;a:{try{e.mc(b,c,d);break a;}catch($$e){$$je=EL($$e);if($$je instanceof IS){}else{throw $$e;}}a.mD=1;}}
function WB(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AIj(b,c,d-c|0);e=DA(Be(16,Bd(e.length,1024)));g=AH9(e,0,e.data.length);h=a.tq;i=new P1;b=DA(1);j=b.data;j[0]=63;G_();k=A4C;i.na=k;i.mH=k;c=j.length;if(c&&c>=i.u5){i.CT=h;i.rH=b.fl();i.BQ=2.0;i.u5=4.0;i.wK=B0(512);i.qy=DA(512);k=A4D;if(k===null){i=new BR;Bl(i,C(83));L(i);}i.na=k;i.mH=k;a:while(true){if(i.k1==3){f=new C2;X(f);L(f);}i.k1=2;b:{while(true){try{k=ADp(i,f,g);}catch($$e){$$je=EL($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(IM(k))
{d=Ce(f);if(d<=0)break b;k=El(d);}else if(H4(k))break;h=!LU(k)?i.na:i.mH;c:{if(h!==A4D){if(h===A4E)break c;else break b;}d=Ce(g);b=i.rH;l=b.data.length;if(d<l){k=A4F;break b;}AB_(g,b,0,l);}Fj(f,f.Y+KM(k)|0);}}l=H4(k);ZY(a,e,0,g.Y);Pd(g);if(!l){while(true){d=i.k1;if(d!=2&&d!=4){f=new C2;X(f);L(f);}f=A4G;if(f===f)i.k1=3;l=H4(f);ZY(a,e,0,g.Y);Pd(g);if(!l)break;}return;}}L(AUw(f));}i=new BR;Bl(i,C(84));L(i);}
function Bp(a,b){var c,d,e,f,g,h,i,j;BN(BV(a.k7,b),10);b=a.k7;c=b.K;d=a.mk;if(c>d.data.length)d=B0(c);e=0;f=0;if(e>c){b=new BD;Bl(b,C(85));L(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}WB(a,d,0,c);a.k7.K=0;}
function Hs(){GF.call(this);this.Dv=null;}
function U_(a){a.Dv=DA(1);}
var Lk=G(Hs);
var A4e=null;function ANP(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AFk(){var b;b=new Lk;U_(b);A4e=b;}
function D$(){var a=this;CE.call(a);a.rJ=null;a.ph=null;a.gb=0;a.ri=0;a.jb=0;}
var A4y=null;var A4z=null;var A4H=null;function AZR(){AZR=Bm(D$);AVu();}
function A1A(a,b,c,d,e,f,g){var h=new D$();TR(h,a,b,c,d,e,f,g);return h;}
function TR(a,b,c,d,e,f,g,h){AZR();Dz(a,b,c);a.rJ=d;a.ph=e;a.gb=f;a.ri=g;a.jb=h;}
function AVu(){var b;b=new D$;AEQ();TR(b,C(86),0,C(87),A4I,2,0,0);A4y=b;b=A1A(C(88),1,C(89),A4I,2,0,1);A4z=b;A4H=I(D$,[A4y,b]);}
function Mi(){var a=this;B.call(a);a.CK=null;a.Da=null;}
function AFu(b){var c,d;if(Ga(b))L(AHM(b));if(!AI8(P(b,0)))L(AHM(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AI8(d))break a;else L(AHM(b));}}c=c+1|0;}}
function AI8(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var L5=G(Mi);
var A4B=null;function AEa(){AEa=Bm(L5);AMh();}
function AFG(a){var b,c;b=new Sc;b.f_=C(90);G_();c=A4C;b.iP=c;b.ng=c;b.C7=a;b.vb=0.3333333432674408;b.Bo=0.5;b.v1=DA(512);b.yq=B0(512);return b;}
function AMh(){var b,c,d,e,f;b=new L5;AEa();c=R(BM,0);d=c.data;AFu(C(91));e=d.length;f=0;while(f<e){AFu(d[f]);f=f+1|0;}b.CK=C(91);b.Da=c.fl();A4B=b;}
var KY=G();
var A4J=null;var A4A=null;function AG0(){AG0=Bm(KY);AXF();}
function AXF(){var b,c;AEQ();b=BI((A4K.fl()).data.length);c=b.data;A4A=b;c[A4L.dv]=1;c[A4I.dv]=2;AES();c=BI((A4M.fl()).data.length);b=c.data;A4J=c;b[A4N.dv]=1;b[A4O.dv]=2;}
function Xj(){var a=this;B.call(a);a.f1=null;a.pu=null;a.l0=null;a.yG=null;a.rt=null;a.rF=null;}
function AHP(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.f1,b,c));}
function Ov(a,b){var c,d,e,f,g,h,i,$$je;c=new BM;d=b;while(a.pu[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.f1,b,d));f=e.data;FM();d=f.length;AEa();g=A4B;h=AH9(e,0,d);a:{try{i=AFG(g);G_();g=AHj(AEZ(AJy(i,A4D),A4D),h);break a;}catch($$e){$$je=EL($$e);if($$je instanceof F1){g=$$je;}else{throw $$e;}}h=new ACh;h.ka=1;h.ku=1;h.il=C(92);h.mI=g;L(h);}if(!g.Y&&g.ec==g.nC)c.b_=g.h8;else{f=B0(Ce(g));e=f.data;c.b_=f;OQ(g,f,0,e.length);}return c;}
function VH(a,b){var c,d,e;c=new BM;d=b>>>1|0;e=d;while(a.l0[e]){e=e+1|0;}d=e-d|0;Jb(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f1,b,d)));return c;}
var HT=G(CE);
var A4L=null;var A4I=null;var A4K=null;function AEQ(){AEQ=Bm(HT);AUH();}
function AMc(a,b){var c=new HT();AJd(c,a,b);return c;}
function AJd(a,b,c){AEQ();Dz(a,b,c);}
function AUH(){var b;A4L=AMc(C(93),0);b=AMc(C(94),1);A4I=b;A4K=I(HT,[A4L,b]);}
var Hy=G(CE);
var A4N=null;var A4O=null;var A4M=null;function AES(){AES=Bm(Hy);AU0();}
function A0O(a,b){var c=new Hy();ADG(c,a,b);return c;}
function ADG(a,b,c){AES();Dz(a,b,c);}
function AU0(){var b;A4N=A0O(C(95),0);b=A0O(C(96),1);A4O=b;A4M=I(Hy,[A4N,b]);}
var Nc=G(Hs);
var A4f=null;function AMr(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AGD(){var b;b=new Nc;U_(b);A4f=b;}
var Tq=G(En);
function AFz(){BR.call(this);this.AU=null;}
function AHM(a){var b=new AFz();ARb(b,a);return b;}
function ARb(a,b){X(a);a.AU=b;}
var L4=G(0);
function ACD(){B.call(this);this.w5=null;}
function AQG(a,b){a.w5.setPointerCapture(b.pointerId);}
function ACE(){B.call(this);this.wh=null;}
function AK$(a,b){a.wh.releasePointerCapture(b.pointerId);}
function H1(){var a=this;B.call(a);a.nC=0;a.Y=0;a.ec=0;a.jf=0;}
function ABw(a,b){a.jf=(-1);a.nC=b;a.ec=b;}
function Fj(a,b){var c,d,e;if(b>=0&&b<=a.ec){a.Y=b;if(b<a.jf)a.jf=0;return a;}c=new BR;d=a.ec;e=new K;N(e);BN(U(H(U(H(e,C(97)),b),C(98)),d),93);Bl(c,M(e));L(c);}
function Ce(a){return a.ec-a.Y|0;}
function DZ(a){return a.Y>=a.ec?0:1;}
var Y$=G(0);
var Le=G(H1);
function AGr(b){var c,d;if(b>=0)return AP2(0,b,B0(b),0,b,0);c=new BR;d=new K;N(d);U(H(d,C(99)),b);Bl(c,M(d));L(c);}
function AIj(b,c,d){return AP2(0,b.data.length,b,c,c+d|0,0);}
function OQ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BD;i=new K;N(i);U(H(U(H(i,C(100)),g),C(101)),f);Bl(h,M(i));L(h);}if(Ce(a)<d){j=new NL;X(j);L(j);}if(d<0){j=new BD;k=new K;N(k);H(U(H(k,C(102)),d),C(103));Bl(j,M(k));L(j);}g=a.Y;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.h8.data[m+a.pk|0];l=l+1|0;c=n;m=o;}a.Y=g+d|0;return a;}}b=b.data;j=new BD;d=b.length;k=new K;N(k);BN(U(H(U(H(k,C(104)),c),C(98)),d),41);Bl(j,M(k));L(j);}
function MO(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.pv){b=new J8;X(b);L(b);}e=d-c|0;if(Ce(a)<e){b=new Jp;X(b);L(b);}if(c>J(b)){f=new BD;d=J(b);b=new K;N(b);BN(U(H(U(H(b,C(105)),c),C(98)),d),41);Bl(f,M(b));L(f);}if(d>J(b)){f=new BD;c=J(b);b=new K;N(b);U(H(U(H(b,C(106)),d),C(107)),c);Bl(f,M(b));L(f);}if(c>d){b=new BD;f=new K;N(f);U(H(U(H(f,C(105)),c),C(108)),d);Bl(b,M(f));L(b);}g=a.Y;while(c<d){h=g+1|0;i=c+1|0;Ze(a,g,P(b,c));g=h;c=i;}a.Y=a.Y+e|0;return a;}
function MF(){var a=this;H1.call(a);a.mC=0;a.o5=null;a.BB=null;}
function AH9(b,c,d){var e,f,g;e=b.data;f=new AB$;g=e.length;d=c+d|0;ABw(f,g);AV3();f.BB=A4P;f.mC=0;f.o5=b;f.Y=c;f.ec=d;f.BF=0;f.vu=0;return f;}
function AB_(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.vu){e=new J8;X(e);L(e);}if(Ce(a)<d){e=new Jp;X(e);L(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BD;j=new K;N(j);U(H(U(H(j,C(109)),h),C(101)),g);Bl(i,M(j));L(i);}if(d<0){e=new BD;i=new K;N(i);H(U(H(i,C(102)),d),C(103));Bl(e,M(i));L(e);}h=a.Y;k=h+a.mC|0;l=0;while(l<d){b=a.o5.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Y=h+d|0;return a;}}b=b.data;e=new BD;d=b.length;i=new K;N(i);BN(U(H(U(H(i,C(104)),c),C(98)),d),41);Bl(e,
M(i));L(e);}
function Pd(a){a.Y=0;a.ec=a.nC;a.jf=(-1);return a;}
function Is(){B.call(this);this.Ck=null;}
var A4E=null;var A4D=null;var A4C=null;function G_(){G_=Bm(Is);AOG();}
function AGa(a){var b=new Is();AI6(b,a);return b;}
function AI6(a,b){G_();a.Ck=b;}
function AOG(){A4E=AGa(C(110));A4D=AGa(C(111));A4C=AGa(C(112));}
var OH=G(Ci);
function AOy(a){}
function ANt(a,b,c){}
function HB(){var a=this;Ci.call(a);a.ee=null;a.r=null;}
function ABv(a,b){var c,d,e;DG(a,b);a.ee=AHv(0,0,64);c=new SF;c.b2=new Bg;c.eh=CR(R(C9,0));c.dw=new Bg;c.pi=new Bg;c.AG=new BY;c.AH=new BY;d=b.N;c.bU=d;e=b.b5;c.hb=e;c.cx=d.lo;c.cH=QE(e);d=b.p.me;e=new X3;e.sv=c;Bc(d,e);d=b.p.lF;e=new X2;e.uD=c;Bc(d,e);a.r=c;Bc(b.p.bH,new YZ);b=b.p.bH;c=a.r;BK(c);d=new YY;d.v0=c;Bc(b,d);}
function Hp(a){Ey(a.C.N,a.ee);}
function AEI(a,b,c){var d,e,f,g,h;a:{d=a.r;Cs(d.b2,b);e=d.cb;if(e!==c){d.cb=c;f=(Cy(d.eh)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gs(e,c);h=h+1|0;}}}}
function CL(){HB.call(this);this.bl=null;}
function G0(a,b){Kw(a,b,1);}
function Kw(a,b,c){var d,e,f;ABv(a,b);d=new ACl;e=a.r;d.cR=BG();d.dF=e;a.bl=d;Bc(a.r.eh,d);Bc(b.p.bO,a.bl);e=b.p.fc;f=a.bl;BK(f);d=new Vk;d.uz=f;Bc(e,d);if(c){b=b.p.bO;d=a.r.cH;e=new V2;e.u4=d;Bc(b,e);}}
function AMl(a){Hp(a);Jw(a.bl);}
function Io(a,b,c){var d,e;AEI(a,b,c);b=a.bl;d=0;while(true){e=b.cR;if(d>=e.m)break;Bw(e,d);d=d+1|0;}}
function AK3(a,b){var c,d,e,f;c=a.bl;d=0;e=0;while(true){f=c.cR;if(e>=f.m)break;d=(Bw(f,e)).U.cf(b)|d;e=e+1|0;}return d;}
var GC=G(0);
function AGh(a){a.hi(Ip());}
function Hg(a){a.hi(T$());}
function AG4(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IH;c=new JR;d=new Ha;AFH();KB(d,A4Q);L6(c,d,BW(A4R),BW(A4S),BW(A4T),BW(A4R),BW(A4U),BW(A4V),BW(A4W),BW(A4X),BW(A4Y),BW(A4Z));e=AId(S(C(113)));AE5();f=(A40.fl()).data;g=f.length;h=R(J6,g);i=h.data;j=0;while(j<g){i[j]=f[j].oH;j=j+1|0;}k=AIU(S(C(114)),S(C(115)),S(C(116)),S(C(117)));l=new IJ;m=new IR;ATg();d=A41;N8(m,d,A42,A43,A44,A45,d);Lv(l,m,AJz(),AGj(S(C(118)),S(C(113)),CH(0)),AJz(),AGG(1,0.07500000298023224),A46,A47);Ln(b,c,e,h,k,l,AC7(S(C(119)),S(C(120)),S(C(121)),
S(C(122))));a.hi(b);}
var MM=G(0);
var FX=G(0);
function Kz(){var a=this;CL.call(a);a.E=null;a.G=null;a.ig=null;a.iR=0;a.ky=null;a.lS=null;a.fr=null;}
function A26(a){var b=new Kz();AEc(b,a);return b;}
function AEc(a,b){var c,d,e;Kw(a,b,0);a.fr=AT2(a.r);c=Px(a.bl);a.ig=c;a.E=KP(a.r,c);c=KP(a.r,a.ig);a.G=c;a.lS=ARD(a.E,c);c=a.E;c.cd=1;ABJ(a.fr,c,a.G);c=a.E;d=new SY;d.zQ=a;c.mo=d;c=a.G;d=new SZ;d.xx=a;c.mo=d;AF4(a,0);Mw(a.r,a.E);Bc(b.p.fc,a);Bc(b.p.bO,a);c=b.p.bH;d=new S0;d.vD=a;Bc(c,d);c=b.p.bH;d=new HG;e=new SW;e.tF=a;Ie(d,b,e);Bc(c,d);Bc(b.p.gr,a);Bc(b.p.gP,a);b=b.p.dd;c=new SX;c.rU=a;Bc(b,c);Hg(a);}
function Ve(a,b){if(a.E===b)a.iR=a.iR|1;if(a.G===b)a.iR=a.iR|2;if((a.iR&3)==3)AJF(a);}
function AF4(a,b){Rt(a.E,b);Rt(a.G,b);}
function AZ4(a,b,c){if(DC(a.r,a.E))return G2(a.E,b,c);if(!DC(a.r,a.G))return 0;return G2(a.G,b,c);}
function AEu(a){if(DC(a.r,a.E))return UU(a,a.E);if(!DC(a.r,a.G))return null;return UU(a,a.G);}
function UU(a,b){var c;c=new R3;c.ry=b;return c;}
function AJF(a){var b,c,d,e,f,g;Bp(By(),C(123));b=a.E.d.f;c=a.G.d.f;d=E1(b);e=E1(c);f=ADI(b);g=ADI(c);b=a.C.b5;c=new Xr;c.v2=a;CQ(b,c,C(124),I(B,[d,f,e,g]));}
function AQt(a,b){var c,d;c=IL(a.E,b);d=IL(a.G,b);return !c&&!d?0:1;}
function AWK(a){var b;Hp(a);Ia(a.E);Ia(a.G);b=a.fr;AFf(b,b.gT.bU);Jw(a.bl);}
function AVP(a){return Gn(0);}
function AQP(a){Wc(a.E);Wc(a.G);}
function AWG(a){ACP(a.E);ACP(a.G);}
function ARk(a,b){Pj(a.E,b);Pj(a.G,b);}
function AXu(a,b){Og(a.r,b);}
function ALK(a,b){if(JP(a.bl,b)){Lx(a.E);Lx(a.G);}}
function AN6(a,b,c){Io(a,b,c);AEH(a,b,c);}
function AEH(a,b,c){var d,e,f,g,h,i;d=new Bg;e=Cd(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;ADV(f,g-h|0,b.b);L3(a.E,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;L3(a.G,d,f,c);V(a.fr.h,f.a,d.b);V(a.fr.j,d.a-f.a|0,f.b);}
function AKA(a,b){BK(b);Id(a.ig,b);Ht(a.E,b);Ht(a.G,b);a.fr.jI=b;}
function AF0(a,b){if(b.bk!=121)return 0;return 1;}
function AH8(a,b){var c,d,e,f;if(DC(a.r,a.E)){c=a.ig;d=b.g;e=a.E;f=new PB;f.pB=a;Gz(c,d,e,a,a,a,f);}if(DC(a.r,a.G)){c=a.ig;b=b.g;d=a.G;e=new PA;e.Aa=a;Gz(c,b,d,a,a,a,e);}return 1;}
function AXO(a,b){var c,d;c=B6(a.E,b.g)&&Wu(a.E,b)?1:0;d=B6(a.G,b.g)&&Wu(a.G,b)?1:0;return !c&&!d?0:1;}
function AVQ(a,b,c,d){var e,f;e=B6(a.E,b.g)&&Ox(a.E,b,c,d)?1:0;f=B6(a.G,b.g)&&Ox(a.G,b,c,d)?1:0;return !e&&!f?0:1;}
function AOR(a,b,c){var d,e,f,g,h,i,j,k;d=B6(a.E,b.g);e=B6(a.G,b.g);f=a.r;g=f.d4;h=g!==null?0:1;i=a.E;j=g!==i?0:1;k=g!==a.G?0:1;if(d&&!(!h&&!k))Fy(f,i);if(e&&!(!h&&!j))Fy(a.r,a.G);if(d){i=Vu(a.E,b,c);if(i!==null)return i;}return !e?null:Vu(a.G,b,c);}
function AYg(a,b,c){var d,e,f,g;d=B6(a.E,b.g);e=B6(a.G,b.g);f=d&&R9(a.E,b,c)?1:0;g=e&&R9(a.G,b,c)?1:0;return !f&&!g?0:1;}
function AP6(a,b,c,d){var e,f,g,h;e=B6(a.E,b.g);f=B6(a.G,b.g);g=e&&Ls(a.E,b,c,d)?1:0;h=f&&Ls(a.G,b,c,d)?1:0;return !g&&!h?0:1;}
function AWg(a){return AEu(a);}
var AFJ=G(Kz);
function A2A(a){var b=new AFJ();AZU(b,a);return b;}
function AZU(a,b){var c;AEc(a,b);a.E.eM=1;a.G.eM=1;c=new Sr;c.vF=a;PC(a,c,C(125));c=new Ss;c.yJ=a;PC(a,c,C(126));}
function AO1(a){return Gn(1);}
function PC(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new Op;d=d.then(Bu(e,"f"));f=new Or;f.sy=b;f.sx=c;g=new Oq;d.then(Bu(f,"f"),Bu(g,"f"));}
var AF7=G();
function AZr(b){var c,d;if(J(b)>0){c=new K;N(c);H(H(c,C(127)),b);$rt_globals.console.info($rt_ustr(M(c)));}a:{d=(-1);switch(Nr(b)){case -1570047148:if(!Bj(b,C(128)))break a;d=17;break a;case -1509980539:if(!Bj(b,C(129)))break a;d=13;break a;case -1351411913:if(!Bj(b,C(130)))break a;d=5;break a;case -1073555521:if(!Bj(b,C(131)))break a;d=14;break a;case -1045861099:if(!Bj(b,C(132)))break a;d=18;break a;case -1045861098:if(!Bj(b,C(133)))break a;d=19;break a;case -811765794:if(!Bj(b,C(134)))break a;d=6;break a;case -785237654:if
(!Bj(b,C(135)))break a;d=11;break a;case -631889171:if(!Bj(b,C(136)))break a;d=9;break a;case -536831301:if(!Bj(b,C(137)))break a;d=25;break a;case -439438829:if(!Bj(b,C(138)))break a;d=21;break a;case -357667878:if(!Bj(b,C(139)))break a;d=22;break a;case -223304637:if(!Bj(b,C(140)))break a;d=2;break a;case -193916863:if(!Bj(b,C(141)))break a;d=23;break a;case 2129957:if(!Bj(b,C(142)))break a;d=1;break a;case 3343967:if(!Bj(b,C(143)))break a;d=10;break a;case 3556498:if(!Bj(b,C(144)))break a;d=4;break a;case 91636708:if
(!Bj(b,C(145)))break a;d=24;break a;case 485517998:if(!Bj(b,C(146)))break a;d=7;break a;case 544901384:if(!Bj(b,C(147)))break a;d=3;break a;case 675521850:if(!Bj(b,C(148)))break a;d=20;break a;case 1030621992:if(!Bj(b,C(149)))break a;d=16;break a;case 1465713255:if(!Bj(b,C(150)))break a;d=8;break a;case 1554501643:if(!Bj(b,C(151)))break a;d=15;break a;case 1609169232:if(!Bj(b,C(152)))break a;d=12;break a;case 2090248989:if(!Bj(b,C(153)))break a;d=26;break a;default:}}b:{switch(d){case 1:break;case 2:b=new TC;break b;case 3:case 4:b
=new Tz;break b;case 5:b=new Ty;break b;case 6:b=new TB;break b;case 7:b=new TA;break b;case 8:b=new TG;break b;case 9:case 10:b=new TF;break b;case 11:b=new TI;break b;case 12:b=new TH;break b;case 13:b=new ZO;break b;case 14:b=new ZN;break b;case 15:b=new ZM;break b;case 16:b=new ZC;break b;case 17:b=new ZB;break b;case 18:b=new Zz;break b;case 19:b=new Zy;break b;case 20:b=new Zx;break b;case 21:b=new Zw;break b;case 22:b=new Zv;break b;case 23:b=new ZG;break b;case 24:b=new ZF;break b;case 25:b=new ZE;break b;case 26:b
=new ZD;break b;default:b=new ZI;break b;}b=new TD;}return b;}
var AIg=G();
var KF=G(Le);
function AEt(){var a=this;KF.call(a);a.pv=0;a.pk=0;a.h8=null;}
function AP2(a,b,c,d,e,f){var g=new AEt();ASB(g,a,b,c,d,e,f);return g;}
function ASB(a,b,c,d,e,f,g){ABw(a,c);a.Y=e;a.ec=f;a.pk=b;a.pv=g;a.h8=d;}
function Ze(a,b,c){a.h8.data[b+a.pk|0]=c;}
function K9(){var a=this;B.call(a);a.CT=null;a.rH=null;a.BQ=0.0;a.u5=0.0;a.na=null;a.mH=null;a.k1=0;}
function NJ(){var a=this;B.call(a);a.hB=0;a.jF=0;}
var A4G=null;var A4F=null;function ADt(a,b){var c=new NJ();AHt(c,a,b);return c;}
function AHt(a,b,c){a.hB=b;a.jF=c;}
function IM(a){return a.hB?0:1;}
function H4(a){return a.hB!=1?0:1;}
function Nb(a){return !QJ(a)&&!LU(a)?0:1;}
function QJ(a){return a.hB!=2?0:1;}
function LU(a){return a.hB!=3?0:1;}
function KM(a){var b;if(Nb(a))return a.jF;b=new D8;X(b);L(b);}
function El(b){return ADt(2,b);}
function Td(a){var b,c;switch(a.hB){case 0:b=new Qs;X(b);L(b);case 1:b=new Uw;X(b);L(b);case 2:b=new S_;c=a.jF;X(b);b.Cv=c;L(b);case 3:b=new Qm;c=a.jF;X(b);b.DZ=c;L(b);default:}}
function AHG(){A4G=ADt(0,0);A4F=ADt(1,0);}
var ADn=G();
var IQ=G(0);
var VT=G();
function AMy(a,b){return b.arrayBuffer();}
var VS=G();
function APv(a,b){var c,d;c=new Xi;d=new Xg;return $rt_globals.WebAssembly.instantiate(b,ANV(Bu(c,"f"),Bu(d,"f")));}
var VQ=G();
function APW(a,b){AK5(b);}
var VP=G();
function AUc(a,b){AGd(b);}
var W=G(0);
function Sr(){B.call(this);this.vF=null;}
function A0r(a,b){HP(a.vF.E,b);}
function Ss(){B.call(this);this.yJ=null;}
function AWl(a,b){HP(a.yJ.G,b);}
var TD=G();
function ARz(a,b){return A26(b);}
var TC=G();
function AKk(a,b){return A1Y(b);}
var Tz=G();
function AUQ(a,b){return A1$(b);}
var Ty=G();
function AXs(a,b){var c,d,e,f,g;c=new ZZ;DG(c,b);d=(Ip()).br.d9;c.Dk=d;c.kE=AJG(d);c.iv=new Bg;c.hE=new Bg;c.dc=Ku();c.dN=Ku();c.mt=Gn(1);b=b.p.bO;d=new Vz;d.lA=c;Bc(b,d);b=c.mt.data[DF()*c.mt.data.length|0];d=Gu(c.C.N,b,10);c.mi=d;Cl(c.C.N.ck,d);e=DJ(c.C.N.ck,C(154));d=c.C.N.ck;f=new K;N(f);BN(f,43);H(f,b);g=CU(e+DJ(d,M(f)));c.i9=g;c.ib=Cv(c.ib,ACS(c,1,g,b,c.mi,c.C.N));c.ia=Cv(c.ia,ACS(c,0,c.i9,b,c.mi,c.C.N));Qv(c,c.dc,c.ib);Qv(c,c.dN,c.ia);Cu(c.dc.V,1.0,1.0,1.0,1.0);E9(c.dc,c.kE);Cu(c.dN.V,1.0,1.0,1.0,1.0);E9(c.dN,
c.kE);b=By();g=c.i9;d=new K;N(d);U(H(d,C(155)),g);Bp(b,M(d));return c;}
var TB=G();
function AMf(a,b){var c,d,e;c=new Ww;G0(c,b);d=new Vw;d.m7=new Bg;d.nz=new Bg;c.w_=d;c.eZ=AIi();c.dy=AIi();c.nQ=E3(C(156),25.0);Bc(c.r.eh,c);d=b.p.bH;e=new AAp;e.th=c;Bc(d,e);Bc(b.p.bO,c);b=b.p.dd;d=new AAl;d.ua=c;Bc(b,d);ACU(c.dy);BS(c.ee,CH(43));b=E7();Jo(c.eZ,b);Jo(c.dy,b);b=c.eZ;b.kk=new AAm;d=c.dy;d.kk=new AAn;d.oj=new Pv;d.u_=new Pw;MT(b,(QV(0)).j6);MT(c.dy,(QV(0)).j6);return c;}
var TA=G();
function ASE(a,b){var c,d,e;c=new ZA;G0(c,b);Bc(c.r.eh,c);BS(c.ee,CH(43));d=b.p.bH;e=new Tt;e.A3=c;Bc(d,e);b=b.p.dd;d=new Tu;d.zE=c;Bc(b,d);return c;}
var TG=G();
function ALX(a,b){var c,d,e;c=new VY;ABv(c,b);c.hu=BG();c.fX=BG();c.q$=S(C(157));c.jE=AFT();c.ht=0;d=c.r.eh;e=new Oz;e.ws=c;Bc(d,e);Bc(b.p.bO,c);d=b.p.bH;e=new Oy;e.ul=c;Bc(d,e);b=Gu(b.N,C(156),35);c.jJ=b;c.lG=AG5(EW(b));BS(c.ee,S(C(158)));return c;}
var TF=G();
function AOq(a,b){var c,d,e,f;c=new RW;DG(c,b);c.hx=AGc();c.eU=0;c.tt=500;c.q_=Iq(0,0,0,255,new BY);c.lU=20;c.vO=20;c.yw=Ip();d=b.p.bO;e=new VJ;e.la=c;f=new SV;f.yp=e;e.q1=f;Bc(d,e);d=b.p.fc;e=new Y0;e.y0=c;Bc(d,e);c.eq=b.N;c.wb=QE(b.b5);XM(c.hx,Gu(c.eq,C(156),c.vO),c.lU,c.eq.lo);c.iu=IV();return c;}
var TI=G();
function AYQ(a,b){var c,d;c=new Qt;Ju(c,b);b=b.p.bH;d=new P6;d.r0=c;Bc(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var TH=G();
function AJ7(a,b){var c,d,e,f,g,h,i;c=new Wd;G0(c,b);d=b.p.dd;e=new QM;e.ww=c;Bc(d,e);d=b.b5;f=new Pc;f.B5=c;g=R(B,1);g.data[0]=C(159);CQ(d,f,C(160),g);h=new Pb;h.De=c;g=R(B,1);g.data[0]=AHZ([1,2,3,4,5]);CQ(d,h,C(161),g);h=new O_;h.AD=c;i=R(B,1);i.data[0]=A1B([1,2,3,4,5]);CQ(d,h,C(162),i);h=new O9;h.Dn=c;g=R(B,1);g.data[0]=DN([1,2,3,4,5]);CQ(d,h,C(163),g);d=b.p.bH;e=new HG;h=new QL;h.yt=c;Ie(e,b,h);Bc(d,e);return c;}
var ZO=G();
function AKf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new VB;Ju(c,b);c.eS=HZ(0,0,300,300);c.gh=Sb(0,0,3,3);d=b.N;b=b.p.bO;e=new AAz;e.mp=c;Bc(b,e);b=AJN(d);c.zm=b;FB(c.eS,b);FK(c.eS);b=c.eS.bj;Fv();BS(b,A48);BS(c.eS.V,Dq(204,120,50));AES();e=A4O;f=DA((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CS(d);AG0();switch(A4J.data[e.dv]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=
new EU;X(b);L(b);}b:{VM(m,5,5,h);b=m.ey.dS;switch(A4J.data[e.dv]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new EU;X(b);L(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.mW=m;V(c.gh.t,Cc(m),Dg(c.mW));BS(c.gh.bj,c.pd);return c;}
var ZN=G();
function AWq(a,b){var c,d,e;c=new RU;Ju(c,b);c.gz=HZ(0,0,300,300);c.lR=new Bg;c.j2=new Bg;c.jm=new Bg;d=b.N;b=b.p.bO;e=new WE;e.jU=c;Bc(b,e);b=AJN(d);c.qd=b;FB(c.gz,b);FK(c.gz);b=c.gz.bj;Fv();BS(b,A48);BS(c.gz.V,Dq(204,120,50));return c;}
var ZM=G();
function APd(a,b){var c,d,e,f;c=new Zp;DG(c,b);c.Cf=20;c.D0=11;c.CM=220;c.lx=new Bg;c.Du=5000;c.hU=1;c.gv=I(Ha,[CH(0),CH(255)]);c.eA=b.N;d=b.p.bO;e=new XC;e.ll=c;f=new TQ;f.sl=e;e.pZ=f;Bc(d,e);b=b.p.fc;d=new U4;d.qL=c;Bc(b,d);b=Hx(c.eA,200,220);c.nX=b;Hl(b,C(156),20.0);b=Hx(c.eA,200,20);c.gk=b;Hl(b,C(156),20.0);c.h$=IV();return c;}
var ZC=G();
function AMC(a,b){var c,d,e;c=new J4;Ju(c,b);Bc(b.p.bO,c);d=b.p.bH;e=new AB7;e.u$=c;Bc(d,e);Bc(b.p.gr,new AB6);d=b.p.gr;e=new AB5;e.rz=c;Bc(d,e);Bc(b.p.gP,new AB4);d=b.p.gP;e=new AB8;e.yc=c;Bc(d,e);b=!UD(b.b5)?C(164):C(165);d=new K;N(d);H(H(d,C(166)),b);$rt_globals.console.info($rt_ustr(M(d)));return c;}
var ZB=G();
function ASP(a,b){var c,d,e,f,g,h;c=new RH;DG(c,b);c.s4=CH(20);c.f5=HZ(0,0,300,300);d=b.p.bH;e=new Rq;e.Cm=c;Bc(d,e);b=b.N;d=Gu(b,C(14),88);Cl(b.ck,d);f=CU(ADD(DJ(b.ck,C(167)),DJ(b.ck,C(168))));g=ML(d,1.1799999475479126);h=By();e=new K;N(e);U(H(U(H(e,C(169)),f),C(170)),g);Bp(h,M(e));e=Hx(b,f,g*3|0);c.i3=e;Cl(e,d);BP(c.i3,C(167),0.0,d.dm);BP(c.i3,C(168),0.0,g+d.dm);BP(c.i3,C(171),0.0,(g*2|0)+d.dm);b=CS(b);c.ot=b;CJ(b,c.i3);FB(c.f5,c.ot);FK(c.f5);b=c.f5.bj;Fv();BS(b,A48);BS(c.f5.V,A49);return c;}
var Zz=G();
function AZM(a,b){var c;c=new Sm;Ob(c,b);G7(c.cg,0,0,300,300);V(c.de,300,300);return c;}
var Zy=G();
function AOz(a,b){var c;c=new Sl;Ob(c,b);c.fK=new Bg;c.f6=new Bg;V(c.d2,150,140);V(c.de,500,100);V(c.e$,150,200);V(c.ez,500,250);return c;}
var Zx=G();
function AYT(a,b){var c,d,e;c=new WZ;G0(c,b);c.C3=3;c.wZ=E3(C(172),20.0);Bc(c.r.eh,c);BS(c.ee,CH(43));d=b.p.bH;e=new Yo;e.B6=c;Bc(d,e);b=b.p.dd;d=new Yn;d.vJ=c;Bc(b,d);return c;}
var Zw=G();
function AJ0(a,b){return A2x(b);}
var Zv=G();
function AYF(a,b){var c,d,e,f;c=new PR;JQ(c,b);BS(c.ee,CH(43));c.ly=Px(c.bl);d=b.p.bH;e=new HG;f=new OX;f.zP=c;Ie(e,b,f);Bc(d,e);b=b.p.dd;d=new OY;d.xK=c;Bc(b,d);return c;}
var ZG=G();
function AXW(a,b){var c,d;c=new QZ;JQ(c,b);c.oN=null;c.l5=JA();c.iT=JA();b=b.p.dd;d=new Wx;d.wC=c;Bc(b,d);return c;}
var ZF=G();
function ALz(a,b){var c;c=new XT;JQ(c,b);c.us=T$();BS(c.ee,CH(43));return c;}
var ZE=G();
function AVC(a,b){return A2a(b);}
var ZD=G();
function ANo(a,b){var c,d,e;c=new O5;JQ(c,b);c.tQ=T$();BS(c.ee,CH(43));d=b.p.dd;e=new Tx;e.A0=c;Bc(d,e);b=b.p.bH;d=new Tw;d.sI=c;Bc(b,d);return c;}
var ZI=G();
function ANp(a,b){var c;c=new Ol;AGv(c,b);AI9(c.dM);return c;}
function AB3(){var a=this;B.call(a);a.td=null;a.zf=null;a.yv=null;}
function H5(){var a=this;B.call(a);a.bL=0;a.cL=0;a.ds=0;a.j5=0;}
function A4$(a,b,c,d){var e=new H5();AAC(e,a,b,c,d);return e;}
function AAC(a,b,c,d,e){a.bL=d;a.cL=b;a.ds=c;a.j5=e;}
function PK(){var a=this;H5.call(a);a.d8=null;a.bk=0;a.ji=0;a.x_=0;a.n5=0;}
var AFK=G();
function TY(b,c){return (b+(c/2|0)|0)/c|0;}
function XQ(b,c,d){if(b<(2147483647/c|0))return TY(Ba(b,c),d);return 0.5+c*b/d|0;}
function HY(b,c){return ((b+c|0)-1|0)/c|0;}
function Gq(b){return b+0.5|0;}
function CU(b){return b+0.5|0;}
function EV(b,c,d){return Be(b,Bd(c,d));}
function ME(b,c){return AG2(b)/AG2(c);}
function Od(){var a=this;H5.call(a);a.g=null;a.CL=null;}
var Sy=G(0);
function OW(){var a=this;B.call(a);a.up=null;a.uq=null;}
function AWr(a,b){var c,d;c=a.up;d=a.uq;$rt_globals.console.info("paste plain string "+b);c.i(HS(b));Ds(d);}
function AAR(){B.call(this);this.uG=null;}
function ABF(a,b){a.uG.clipboardData.setData("text/plain",$rt_ustr(b));}
function AB$(){var a=this;MF.call(a);a.BF=0;a.vu=0;}
function CB(){var a=this;B.call(a);a.h=null;a.j=null;a.bD=0.0;}
function ASD(){var a=new CB();ES(a);return a;}
function ES(a){a.h=new Bg;a.j=new Bg;}
function AQu(a){}
function AXk(a){return BJ(0,0);}
function HD(a,b,c,d){var e;if(!JE(a.h,b)){a.mf(b);Cs(a.h,b);}if(!JE(a.j,c)){a.oc(c);Cs(a.j,c);}e=a.bD;if(e!==d){a.bD=d;a.i0(e,d);}}
function Ec(a,b){return Cd(b,a.bD);}
function B6(a,b){return Ho(b,a.h,a.j);}
function AJB(a,b){var c,d,e,f;c=a.h;d=c.a;e=c.b;f=a.j;ANr();Bs(b,d,e,f,A4_);}
function ABe(a,b){var c;c=a.h;Lu(b,c.a,c.b,a.j);}
function AT7(a,b){return 0;}
function AOt(a,b){}
function ARY(a,b){}
function AYs(a,b,c){}
function AR6(a){}
function ANj(a,b,c,d){return 0;}
function ALe(a,b,c){return null;}
function AO5(a,b,c){return 0;}
function ARO(a,b){return 0;}
function AYl(a,b,c,d){return 0;}
function AD4(){var a=this;CB.call(a);a.gT=null;a.kO=null;a.kP=null;a.kM=null;a.kN=null;a.fq=null;a.hd=null;a.he=null;a.jI=null;}
function AT2(a){var b=new AD4();ALD(b,a);return b;}
function ALD(a,b){ES(a);a.kO=new Bg;a.kP=new Bg;a.kM=new Bg;a.kN=new Bg;a.gT=b;}
function ABJ(a,b,c){a.hd=b;a.he=c;}
function AFf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=a.h;Bs(b,c.a,c.b,a.j,a.jI.br.d9);if(a.fq===null)return;d=CC(a.gT,2.0);e=Gx(a.fq,a.hd.kL(),1);f=Gx(a.fq,a.hd.jV(),1);g=Gx(a.fq,a.he.kL(),0);h=Gx(a.fq,a.he.jV(),0);i=Bd(e,g);j=Be(f,h);h=BL(i,j);if(h<=0)B5(b,1);k=a.hd.tN();l=a.he.oT();m=a.gT.pi;while(i<=j){n=a.fq.hX.data[i];if(n.ob){o=a.hd.hc(n.hA);p=a.hd.hc(n.hA+n.nx|0);q=a.he.hc(n.hz);r=a.he.hc(n.hz+n.nw|0);V(a.kO,a.h.a,o);V(a.kM,a.h.a,p);V(a.kP,a.h.a+a.j.a|0,q);V(a.kN,a.h.a+a.j.a|0,r);s=Be(Bd(o,q),
a.h.b);t=Bd(Be(p,r),a.h.b+a.j.b|0);if(t>s){V(m,a.j.a,t-s|0);c=a.jI;u=JH(c.dV,c,n.ob);if(o==p){n=a.gT.dw;V(n,a.h.a-k.a|0,d);if(q>=o){c=a.kM;V(c,c.a,c.b+d|0);g=o;}else{g=o-d|0;c=a.kO;V(c,c.a,c.b-d|0);}Bs(b,k.a,g,n,u);}if(q==r){n=a.gT.dw;V(n,l.a,d);if(o>=q){c=a.kN;V(c,c.a,c.b+d|0);}else{q=q-d|0;c=a.kP;V(c,c.a,c.b-d|0);}Bs(b,a.h.a+a.j.a|0,q,n,u);}AC0(b,a.h.a,s,m,a.kO,a.kP,a.kM,a.kN,u);}}i=i+1|0;}if(h<=0)B5(b,0);}
function AEw(){var a=this;B.call(a);a.bW=null;a.dl=null;a.C0=null;a.h2=null;}
function Px(a){var b=new AEw();AKM(b,a);return b;}
function AKM(a,b){a.bW=b;}
function Id(a,b){var c;a.h2=b;c=a.dl;if(c!==null)GK(c,b.dX);c=a.bW.d1;if(c!==null)F4(c,b.dX,b.ny);}
function Yr(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=ANE();i=c.m;j=0;while(j<i){if(f===null){k=(Bw(c,j)).bq;l=YW(Fx(B_(g.f,k)));m=Zs(g.fU);}else{n=f.data;k=n[j].oQ.mE;l=!BT(g.fU,n[j].lp)?C(21):YW(Fx(B_(g.f,k)));m=Zs(n[j].lp);}if(J(l)>153){o=Cr(l,0,150);n=new K;N(n);H(H(n,o),C(173));l=M(n);}if(J(m)>153){n=Cr(m,0,150);o=new K;N(o);H(H(o,n),C(173));m=M(o);}n=De(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=Bw(c,j);}if(f!==null){q=new ACi;q.rD=d;q.rE=p;}else{q=new ACj;q.zY=d;q.zX=
o;}Vh(h,m,n,l,q);j=j+1|0;}r=ABX(h);if(a.dl!==null)ZT(a);c=a.bW.dF;g=new Qy;f=new Zn;f.pW=a;f.pX=d;AJv(g,c,f);V$(g,r);d=a.h2;Vc(g,d.dX,d.z_);d=ADa(c);a.dl=d;d.o8=d.o8|1;d=J$(g,c);f=a.h2.dX;Hd(d,f.ml,f.n6);KR(a.dl,d);GK(a.dl,a.h2.dX);d=a.dl;f=new K;N(f);H(H(f,C(174)),e);FE(d,M(f));Gt(a.bW,a.dl);d=a.dl;i=(d.Q.j.b+CC(d.bo,2.0)|0)+CC(c,2.0)|0;s=(g.dU+g.eD|0)+g.ha|0;t=CC(g.bS,5.0);e=BJ(EV(t,b.a,g.bS.b2.a-s|0),EV(i,b.b,g.bS.b2.b-g.cQ.b|0));Xw(g);KE(g);i=D_(g);s=g.b4.data.length;i=Ba(i,s)+Ba(g.dJ,s+1|0)|0;V(g.cQ,g.j.a,
i);i=(g.dU+g.eD|0)+g.ha|0;b=g.bS;s=(b.b2.a-e.a|0)-CC(b,5.0)|0;b=g.bS;t=(b.b2.b-e.b|0)-CC(b,5.0)|0;d=BJ(Bd(i,s),Bd(g.cQ.b,t));EP(a.dl,e,d);Fy(c,g);}
function ZT(a){Kh(a.bW,a.dl);No(a.dl);a.dl=null;}
function KX(a,b,c){var d,e,f,g;d=MW(a.bW.dF);e=a.h2;F4(d,e.dX,e.ny);e=a.bW.dF;f=e.d4;g=new ABK;g.vr=e;g.vq=f;d.jv=g;Rr(d,b,c);a.C0=d;F8(a.bW,d);}
function Gz(a,b,c,d,e,f,g){var h,i,j,k,l,m;h=new R8;h.f8=a;h.bu=c;h.qF=g;h.iG=e;h.nH=f;h.lJ=d;c=Lf();e=h.bu.d;d=Er(e);e=Hr(e);f=h.bu.fh;if(Ye(f,d,e)!==null){i=new Ri;i.vB=h;i.vC=b;DS(c,C(175),i);}if(N0(f,d,e)!==null){i=new Rj;i.xp=h;i.xq=b;DS(c,C(176),i);}if(AAw(f,d,e)!==null){e=new Rh;e.pL=h;e.pM=b;DS(c,C(177),e);}e=new Rg;e.t0=h;e.tZ=b;DS(c,C(178),e);HI(h);if(LA()){if(!h.bu.eM){e=new QO;e.zU=h;DS(c,C(179),e);}e=new QP;e.q4=h;DS(c,C(180),e);if(!h.bu.eM&&UD(HI(h))){e=new QN;e.yk=h;DS(c,C(181),e);}}e=Lf();j=
R(BM,4).data;j[0]=C(182);j[1]=C(183);j[2]=C(184);j[3]=C(185);k=j.length;l=0;while(l<k){f=j[l];g=new PL;g.vz=h;g.vA=f;DS(e,f,g);l=l+1|0;}Fs(c,C(186),GL(e));i=Lf();j=R(Cg,3);m=j.data;f=h.lJ;BK(f);g=new OL;g.qT=f;m[0]=C1(C(187),g);f=h.lJ;BK(f);g=new OM;g.rs=f;m[1]=C1(C(188),g);f=h.lJ;BK(f);g=new OK;g.uR=f;m[2]=C1(C(189),g);IO(i,C(190),Ef(j),A5a);j=R(Cg,2);m=j.data;f=h.iG;BK(f);g=new Ub;g.xj=f;m[0]=C1(C(191),g);f=h.iG;BK(f);g=new Ua;g.tJ=f;m[1]=C1(C(192),g);Fs(i,C(193),Ef(j));f=new Xb;f.qq=h;IO(i,C(194),f,A5a);if
(h.bu.cI.bU.lo){j=R(Cg,2);m=j.data;g=new Zc;g.v6=h;m[0]=C1(C(195),g);g=new Zd;g.wP=h;m[1]=C1(C(196),g);Fs(i,C(197),Ef(j));}Fs(c,C(198),GL(i));e=Lf();Fs(e,C(199),AHU(h));g=new XP;g.uT=h;DS(e,C(200),g);i=new Ok;i.we=h;IO(e,C(201),i,A5a);Fs(c,C(202),GL(e));KX(a,b,GL(c));}
function ADO(b){var c;c=new Q7;c.ye=b;return c;}
var FG=G(0);
function AXl(a){}
function AMI(a){}
var Ql=G(0);
var L1=G(0);
function AD9(){var a=this;CB.call(a);a.cI=null;a.bh=null;a.kg=null;a.Ar=0;a.nF=null;a.c9=null;a.m3=0;a.g$=0.0;a.lD=null;a.BE=null;a.fJ=null;a.T=0;a.c5=0;a.d=null;a.fh=null;a.ef=null;a.eI=null;a.zs=0;a.x7=0;a.cY=0;a.ce=0;a.cj=0;a.hM=null;a.fE=null;a.fk=null;a.iW=0;a.jC=0;a.D2=0;a.AX=0;a.kr=0;a.li=0;a.pb=0;a.d7=0;a.c$=null;a.fe=null;a.eM=0;a.cd=0;a.AL=null;a.jz=null;a.xH=null;a.tb=null;a.mo=null;a.bw=0;a.cK=null;a.rG=0;a.qH=null;a.tH=null;}
function KP(a,b){var c=new AD9();AQm(c,a,b);return c;}
function AQm(a,b,c){var d,e,f;ES(a);a.Ar=0;a.nF=R(Bb,10);a.c9=AVv();a.g$=16.0;a.lD=C(156);a.d=A2q(R(BM,0),null,null);d=new ACq;d.wU=CR(R(MZ,0));d.Ap=CR(R(MZ,0));d.pS=CR(R(ZK,0));d.ue=CR(R(XV,0));d.tS=CR(R(G5,0));d.zi=CR(R(RK,0));a.fh=d;a.eI=R(Ff,0);a.hM=BJ(1,0);a.fE=IV();a.fk=IV();a.iW=0;a.jC=1;a.kr=1;a.li=1;a.pb=1;a.d7=3;a.c$=AGc();a.fe=C(203);a.eM=0;a.cd=0;e=ED();BK(e);d=new Wp;d.BZ=e;a.jz=d;a.bw=0;e=new Wo;e.pF=a;a.qH=e;e=new Wn;e.r$=a;a.tH=e;a.cI=b;a.bh=b.bU;a.kg=c;c=AOd(b.cx);a.cK=c;a.fJ=c.gG;f=a.nF.data;b
=new Wm;b.zw=a;f[1]=b;b=new Wt;b.v7=a;f[2]=b;b=new Ws;b.sO=a;f[3]=b;b=new Wr;b.uY=a;f[4]=b;b=new Wq;b.qt=a;f[5]=b;b=new Wl;b.xW=a;f[6]=b;KJ(a.d,a,FA(a));}
function Sa(a,b,c){var d,e,f,g,h;d=!c?a:null;if(c)e=null;else{e=new So;e.qj=a;}f=new Sn;f.tw=a;g=new Sq;g.w2=a;if(d!==null)Bc(b.bO,d);if(e!==null)Bc(b.fc,e);Bc(b.gr,f);Bc(b.gP,g);h=new Sp;h.CH=d;h.CF=b;h.CG=e;h.CI=f;h.CJ=g;return h;}
function L3(a,b,c,d){HD(a,b,c,d);Zt(a,b,c,d);}
function APH(a,b,c){Ui(a,a.lD,a.g$);Pi(a.cK,c);}
function A0s(a,b,c){a.xH=b;a.tb=c;}
function Zt(a,b,c,d){var e;a.cY=Cd(80.0,d);a.ce=Cd(1.0,d);a.cj=Cd(10.0,d);e=!a.cd?b.a:(b.a+c.a|0)-Ic(a)|0;V(a.cI.dw,e,b.b);Rx(a.c$,a.cI.dw,Bd(Ic(a),c.a),c.b,d);b=a.c9;e=Cd(2.0,d);b.eF.t.a=e;}
function AU7(a){a.m3=1;Nz(a);}
function ATk(a){a.m3=0;}
function Nz(a){XH(a.c9,Mt(FA(a)));}
function Ht(a,b){var c,d;a.ef=b;c=a.c9;d=b.br.Ao;BS(c.eF.V,d);c=a.fE;d=b.br;HV(c,d.i4,d.i$);c=a.fk;b=b.br;HV(c,b.i4,b.i$);}
function Wc(a){N4(a,a.cK.ci.nA,a.g$+1.0);}
function ACP(a){var b;b=a.g$;if(b<=7.0)return;N4(a,a.cK.ci.nA,b-1.0);}
function Pj(a,b){N4(a,b,a.g$);}
function AQk(a,b){Og(a.cI,b);}
function N4(a,b,c){if(a.cI.cb!==0.0){Ui(a,b,c);Jd(FA(a));}a.g$=c;a.lD=b;}
function Lx(a){var b,c,d;b=a.cK;c=a.cI.cx;d=a.bh;b.ii=c;if(b.fs.iK!=c&&b.dY)ACO(b,d);R4(a.eI);In(a.c$);ND(a);}
function Ui(a,b,c){var d,e,f,g,h,i,j,k;d=a.bD;e=c*d;Cd(c,d);f=a.cK.ci;d=f===null?0.0:f.wa;if(!(e===d&&BT(b,a.lD))){In(a.c$);NZ(a.eI);g=a.d.f.A.data;h=g.length;i=0;while(i<h){EQ(g[i]);i=i+1|0;}j=a.cK;f=a.bh;j.ci=AHJ(b,e,300,600,j.gG,f);f=a.cK;a.BE=f.ci;a.T=RB(f,1.25,a.bh);a.c5=CU(a.cK.ci.pj);a.c9.eF.t.b=EW(a.cK.ci);h=EW(a.cK.ci);i=a.T;k=Uq(a.c9);f=new K;N(f);b=H(H(f,C(204)),b);BN(b,32);U(H(U(H(U(H(E2(b,e),C(205)),h),C(170)),i),C(206)),k);$rt_globals.console.info($rt_ustr(M(f)));if(A5b){h=Ne(a.cK.ci,a.T);b=new K;N(b);U(H(b,
C(207)),h);$rt_globals.console.info($rt_ustr(M(b)));}a.d.hY=GH(FN(a),a.d.z,a.bh.ck,a.fJ);HX(a);ND(a);}}
function ATF(a){NZ(a.eI);Xn(a.cK);In(a.c$);}
function Oc(a){return Ba(CG(a.d.f)+5|0,a.T);}
function KC(a){return Be(Oc(a)-a.j.b|0,0);}
function ZU(a){return Be(a.iW-F6(a)|0,0);}
function F6(a){var b;b=!a.cd?0:a.c5+a.cj|0;return Be(1,(a.j.a-a.cY|0)-b|0);}
function Ic(a){return a.cd?a.cY:a.cY-a.cj|0;}
function Ea(a){return a.j.b;}
function IL(a,b){var c,d,e;c=a.d.f;if(AAg(c)&&b-c.ym>0.03125?1:0){d=a.rG;e=a.d.f.cm;if(d!=e){a.rG=e;YI(a);}}if(a.T)ZQ(a);d=AAq((a.bw+a.D2|0)-a.AX|0,KC(a));e=a.bw==d?0:1;if(e)FP(a,d);return !ZV(a.c9,b)&&!e&&!a.Ar?0:1;}
function Iu(a,b){var c,d;b=AAq(b,ZU(a));c=a.d;d=b==c.dK?0:1;if(d)c.dK=b;if(d){c=a.xH;if(c!==null)c.k();}}
function FP(a,b){var c;if(AHY(a,b)){c=a.tb;if(c!==null)c.k();}}
function AHY(a,b){var c,d;c=AAq(b,KC(a));d=c==a.bw?0:1;if(d){a.bw=c;a.d.l1=c/a.T;}return d;}
function AFS(a){return BJ((Ic(a)+a.ce|0)+a.cj|0,a.T);}
function AQ8(a){return a.T;}
function AWQ(a,b){Ia(a);}
function Ia(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=HY(a.j.b,a.T)+7|0;c=a.eI;if(c.data.length<b)a.eI=Yh(b,c,a.cK,a.zs,a.x7,a.d.f);B5(a.bh,0);M8(a.bh,a.h,a.j);d=(a.T-Uq(a.c9)|0)/2|0;b=a.d.hY-(R5(a.c9)/2|0)|0;e=a.d;f=b-e.dK|0;g=!a.cd?a.cY:(a.ce+a.cj|0)+a.c5|0;Tc(a.c9,g+f|0,(d+Ba(e.w,a.T)|0)-a.bw|0);h=CG(a.d.f);i=SS(a);j=SR(a);a.zs=i;a.x7=j;k=!a.cd?a.h.a+a.cY|0:((a.h.a+a.ce|0)+a.cj|0)+a.c5|0;l=F6(a);c=a.d.k4;m=Ec(a,40.0);n=i;while(n<=j&&n<h){o=B_(a.d.f,n);p=ABf(a,n);Wz(p,o,a.bh,a.T,l,a.d.dK,n,
n%a.eI.data.length|0);a.iW=Be(a.iW,Gf(o)+m|0);b=a.T;q=Ba(b,n)-a.bw|0;r=c===null?null:c.data[n];d=a.h.b+q|0;e=a.bh;g=a.d.dK;s=a.ef;t=AIM(Bi(a),n);if(t!==null){if(t.b==(-1))t.b=o.R;t.a=GH(o,t.a,a.bh.ck,a.fJ);t.b=GH(o,t.b,a.bh.ck,a.fJ);}o=a.d;PE(p,d,k,e,l,b,g,s,t,o.ip,o.h_,o.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cI.dw;n=i;while(n<=j&&n<h&&a.kr){p=ABf(a,n);q=Ba(a.T,n)-a.bw|0;r=Bi(a);if(!Dp(r))u=0;else{o=Eg(r);r=FS(r);u=o.J<=n&&n<r.J?1:0;}s=a.ef;r=s.br;v=r.rS;w=a.d.w==n&&c===null?1:0;a:{if(u)v=r.kp;else{if(c!==null)
{x=c.data;if(n<x.length&&x[n]!==null){v=JH(s.dV,s,x[n].gJ);break a;}}if(w)v=r.g_;}}AHn(p,a.bh,k,a.h.b+q|0,a.T,e,a.d.dK,l,v);n=n+1|0;}if(a.jC){y=Bd(j+1|0,h);AI1(a,Ba(a.T,y)-a.bw|0,l);}AFb(a);AEK(a,i,j);if(a.li)AGs(a,i,j,h);if(a.m3&&f>=(( -R5(a.c9)|0)/2|0)){e=a.c9;p=a.j;if(ADA(e.eF.u,0,0,p))AAT(a.c9,a.bh,a.h);}AE0(a);AEz(a);FY(a.bh);}
function AGs(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.k4;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.ef;h=JH(h.dV,h,g.gJ);}else h=e!==null?a.ef.br.d9:a.ef.br.g_;if(!(a.d.w!=b&&g===null)){g=a.hM;i=a.cd;g.a=!i?(a.cj-a.ce|0)-a.d7|0:((a.cj+a.c5|0)+a.ce|0)-a.d7|0;j=a.T;g.b=j;i=i?0:(a.cY-a.cj|0)+a.ce|0;j=Ba(j,b)-a.bw|0;k=a.bh;l=a.h;Bs(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AEK(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.j.b;e=Bd(d,Ba(CG(a.d.f),a.T)-a.bw|0);f=a.c$;g=a.bw;h=a.d;i=h.k4===null?h.w:(-1);j=a.bh;k=a.ef;M8(j,f.gf,f.fd);R2(f,j,b,d);AAr(f,b,j);ZP(f,g,e,k,j);l=k.kG;if(e<d){h=f.gf;Bs(j,h.a,h.b+e|0,BJ(f.fd.a,d-e|0),l.kx);}if(b<=i&&i<=c){k=k.kG;c=i/20|0;h=f.c1;l=Bw(h,c%h.m|0);h=f.gf;d=Ba(f.c1.m,f.gV);c=l.fb.b;b=((l.pt.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%Dg(l.cN)|0)|0;c=i%l.d6|0;e=l.cq;b=b+Ba(c,e)|0;if(b<( -e|0))b=b+d|0;V(l.iH,l.fb.a,e);f=l.jq;c=i%l.d6|0;d=l.cq;Cu(f,0.0,
Ba(c,d),l.fb.a,d);MR(l,j,b,h,k.wc,k.pI);}FY(j);}
function SS(a){return Bd(a.bw/a.T|0,CG(a.d.f)-1|0);}
function SR(a){return Bd(((a.bw+Ea(a)|0)-1|0)/a.T|0,CG(a.d.f)-1|0);}
function AP3(a,b){return Ba(a.T,b)-a.bw|0;}
function APT(a){return a.h;}
function ASy(a){return a.j;}
function ND(a){XM(a.c$,a.cK.ci,a.T,a.cI.cx);}
function ABf(a,b){var c;c=a.eI.data;return c[b%c.length|0];}
function T6(a,b){var c,d,e,f;c=EV(0,J(a.fe),OP(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BR;X(b);L(b);}if(c!=1){d=b.b_.data.length;if(d&&c){e=B0(Ba(d,c));d=0;f=0;while(f<c){Qd(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=L7(e);}else b=A32;}}return b;}
function Pm(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BI(i);k=A3v(i).data;Jf(j,c);c=0;l=k.length;if(c>l){f=new BR;X(f);L(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.cm=o.cm+1|0;p=R(GX,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ARd(h[m],n[m],k[m],b[m],f.bq,f.bv);m=m+1|0;}BC(o.id,p);c=0;while(c<i){b=e.data;MP(o,h[c],n[c],k[c],b[c]);g.pw(CT(h[c]),b[c]);c=c+1|0;}}
function AJO(a){var b;if(Dp(Bi(a)))GE(a);else{b=a.d;Ou(b.f,b.w,b.z);}HX(a);Ep(a);return 1;}
function Dy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eM)return 0;if(Dp(Bi(a)))GE(a);c=LS(AA2(b,C(208),C(21)),C(209),(-1));d=c.data;b=a.d;e=b.f;f=b.w;g=b.z;ACT(e,f,g,c);h=d.length;if(!h)b=A32;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B0(i+Ba(h-1|0,J(C(209)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(209))){m=l+1|0;c[l]=P(C(209),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=L7(k);}FR(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CK(a,m,m!=f?J(d[h-1|0]):b.z+J(d[0])|0,0);FV(a);Ep(a);return 1;}
function GE(a){var b,c,d;b=Eg(Bi(a));c=a.d.f;d=Bi(a);OA(c,d,TS(c,d));CK(a,b.J,b.Z,0);FV(a);Ep(a);}
function FV(a){var b,c;(Bi(a)).dk=0;b=(Bi(a)).bM;c=a.d;Cb(b,c.w,c.z);b=(Bi(a)).bB;c=a.d;Cb(b,c.w,c.z);}
function AI1(a,b,c){var d,e;d=a.j.b;if(b<d){e=a.cI.dw;e.b=d-b|0;d=a.cd;e.a=!d?c+a.d7|0:c+a.ce|0;d=!d?(a.h.a+a.cY|0)-a.d7|0:(((a.h.a+a.cj|0)+a.c5|0)+a.ce|0)-a.d7|0;Bs(a.bh,d,a.h.b+b|0,e,a.ef.br.d9);}}
function AE0(a){var b;b=a.cd?a.h.a+a.c5|0:a.h.a+a.j.a|0;J3(a.fE,a.bw,a.h.b,Ea(a),Oc(a),b,a.c5);b=!a.cd?a.h.a+a.cY|0:((a.h.a+a.ce|0)+a.cj|0)+a.c5|0;QF(a.fk,a.d.dK,b,F6(a),a.iW,a.h.b+Ea(a)|0,a.c5);}
function AEz(a){var b,c;b=Yt(a.fE);c=Yt(a.fk);if(!(!b&&!c)){B5(a.bh,1);if(b)GG(a.fE,a.bh);if(c)GG(a.fk,a.bh);if(b)GN(a.fE,a.bh);if(c)GN(a.fk,a.bh);}}
function AFb(a){var b,c,d,e,f;b=a.hM;c=a.j;b.b=c.b;b.a=a.ce;d=!a.cd?a.cY-a.cj|0:(c.a-Ic(a)|0)-a.ce|0;b=a.bh;c=a.h;Bs(b,c.a+d|0,c.b,a.hM,a.ef.br.tk);b=a.hM;d=a.cd;b.a=!d?(a.cj-a.ce|0)-a.d7|0:((a.cj+a.c5|0)+a.ce|0)-a.d7|0;e=d?0:(a.cY-a.cj|0)+a.ce|0;c=a.bh;f=a.h;Bs(c,f.a+e|0,f.b,b,a.ef.br.d9);}
function AAq(b,c){return Bd(Be(0,b),c);}
function FA(a){return a.cI.hb;}
function I$(a,b){var c,d,e;c=Ei(b);d=new K;N(d);H(H(d,C(210)),c);$rt_globals.console.info($rt_ustr(M(d)));V7(FA(a),Ei(b));CK(a,0,0,0);c=new ABE;c.xt=a;c.xu=b;d=ED();BK(d);e=new ABD;e.v5=d;T3(b,c,e);}
function Jl(a,b,c,d,e){if(IB(a,e))return 1;if(c&&d)return 1;if(c)FP(a,a.bw+((Ba(b,a.T)*12|0)/10|0)|0);else if(!d){Ib(a,a.d.w+b|0,e);AAs(a);}return 1;}
function Ro(a,b,c,d){var e,f,g;if(IB(a,d))return 1;e=FN(a);if(!c)f=a.d.z+b|0;else if(b>=0)f=GU(e,a.d.z);else{b=a.d.z;if(!b)f=(-1);else{c=JY(e,b);if(c>0&&e.ej.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.ej.data[c-1|0];}}if(f>e.R){e=a.d;if((e.w+1|0)<CG(e.f))CK(a,a.d.w+1|0,0,d);}else if(f>=0)Dr(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(B_(e.f,b-1|0)).R;CK(a,a.d.w-1|0,g,d);}}ABr(a);return 1;}
function IB(a,b){if(Dp(Bi(a))&&!b){FV(a);HX(a);return 1;}if(!(b&&Dp(Bi(a))))FV(a);return 0;}
function CK(a,b,c,d){a.d.z=c;return Ib(a,b,d);}
function Ib(a,b,c){var d;d=a.d;d.w=EV(0,b,CG(d.f)-1|0);return Dr(a,a.d.z,c);}
function Dr(a,b,c){var d,e;a.d.z=EV(0,b,(FN(a)).R);a.d.hY=a.bD===0.0?0:GH(FN(a),a.d.z,a.bh.ck,a.fJ);Nz(a);HX(a);if(c)(Bi(a)).dk=1;d=Bi(a);e=a.d;NA(d,e.w,e.z);(Bi(a)).dk=0;return 1;}
function L9(a,b){var c;c=AUp(Bi(a));Dr(a,b,0);Js(Bi(a),c);}
function HX(a){AAs(a);ABr(a);}
function AAs(a){var b,c,d,e,f;b=a.bw;c=b+Ea(a)|0;d=a.d.w;e=a.T;d=Ba(d,e);f=d+e|0;if(d<(b+e|0))FP(a,d-e|0);else if(f>(c-e|0))FP(a,(f-Ea(a)|0)+a.T|0);}
function ABr(a){var b,c,d,e,f;b=CU(a.cI.cb*30.0);c=a.d.dK;d=c+F6(a)|0;e=a.d.hY;f=e+b|0;if(e<(c+b|0))Iu(a,e-b|0);else if(f>(d-b|0))Iu(a,(f-F6(a)|0)+b|0);}
function IG(a,b){var c,d;CK(a,b.bq,b.bv,0);c=GU(FN(a),a.d.z);Cb((Bi(a)).bB,a.d.w,c);b=(Bi(a)).bM;d=a.d;Cb(b,d.w,d.z);}
function Fk(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.h;e=c-d.a|0;f=EV(0,((b.b-d.b|0)+a.bw|0)/a.T|0,CG(a.d.f)-1|0);g=!a.cd?a.cY:(a.ce+a.cj|0)+a.c5|0;h=Be(0,(e-g|0)+a.d.dK|0);b=B_(a.d.f,f);d=a.bh.ck;i=a.fJ;if(!(b.eJ!==null&&!b.gF))M4(b,d,i);j=b.eJ;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.R;else{c=AAe(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.R;else{j=Y3(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A5c){b=new K;N(b);U(H(U(H(U(H(b,C(211)),e),C(212)),h),C(213)),m);$rt_globals.console.info($rt_ustr(M(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DH(f,k);}
function UH(a,b){var c,d;c=a.d;d=b.bq;c.w=d;c.z=b.bv;c.hY=GH(B_(c.f,d),a.d.z,a.bh.ck,a.fJ);Nz(a);}
function FN(a){var b;b=a.d;return B_(b.f,b.w);}
function Ls(a,b,c,d){var e,f;e=CU((a.T*4|0)*d/150.0);f=CU(c);if(e)FP(a,a.bw+e|0);if(f)Iu(a,a.d.dK+f|0);return 1;}
function R9(a,b,c){(Bi(a)).dk=0;return 1;}
function Vu(a,b,c){var d;if(c)return null;d=FQ(a.fE,b.g,a.qH,1);if(d!==null)return d;d=FQ(a.fk,b.g,a.tH,0);if(d!==null)return d;I0(a);UH(a,Fk(a,b.g));Lc(a.d);if(!b.bL&&!(Bi(a)).dk){b=(Bi(a)).bM;d=a.d;Cb(b,d.w,d.z);}(Bi(a)).dk=1;b=Bi(a);d=a.d;NA(b,d.w,d.z);b=new ACk;b.tP=a;return b;}
function Ox(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cL){b=b.g;e=Fk(a,b);f=IU(a.d.f,e.bq,e.bv);g=RY(a,f);h=N0(a.fh,Er(a.d),Hr(a.d));if(h!==null){i=a.d;c=e.bq;d=e.bv;e=new AB0;e.Bq=a;e.Br=b;e.Bp=g;h.sA(i,c,d,e,a.jz);}else{e=Cn(a.d.f.dH,f);if(e!==null){IG(a,e);c=1;}else{e=Cn(a.d.f.dz,f);if(e!==null&&!Ev(e)){if(e.m!=1){Yr(a.kg,b,e,a,g);c=1;}else{IG(a,Bw(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Fk(a,b.g)).bq;g=B_(a.d.f,c);c=Gv(g,a.d.z);d=GU(g,a.d.z);b=NQ(g,c);if((d-1|0)==g.R){Cb((Bi(a)).bM,
a.d.w,OP(g));Cb((Bi(a)).bB,a.d.w,g.R);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.b_.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.z;if(c==j){c=Gv(g,c-1|0);d=GU(g,c);}else{if(d!=j){P5(Bi(a),a.d.w);break b;}c=Gv(g,d+1|0);d=GU(g,c);}}}Cb((Bi(a)).bM,a.d.w,c);(Bi(a)).dk=1;CK(a,a.d.w,d,0);(Bi(a)).dk=0;I0(a);}}break a;case 3:break;default:break a;}P5(Bi(a),a.d.w);YQ(a.d.hv);I0(a);}}return 1;}
function Wu(a,b){var c,d,e,f,g,h,i,j;c=a.cI.cH;if(FW(a.fE,b.g,c))return 1;if(FW(a.fk,b.g,c))return 1;d=a.c$;if(Ho(b.g,d.gf,d.fd)&&Gr(c)?1:0)return 1;e=b.g;f=!a.cd?a.cY:(a.cj+a.ce|0)+a.c5|0;a:{d=a.h;f=d.a+f|0;g=d.b;h=F6(a);i=Ea(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return Gr(c);if(b.cL){e=Fk(a,b.g);e.bv=Gv(B_(a.d.f,e.bq),e.bv);b=a.d.f;if(!Mv(b.dH,e)&&!Mv(b.dz,e)?0:1)return DO(c,C(214));}return DO(c,C(182));}
function AZ$(a,b){var c,d,e,f,g;c=b.cL;if(c&&b.bk==65){c=CG(a.d.f)-1|0;d=Gk(a.d.f,c);Cb((Bi(a)).bM,0,0);Cb((Bi(a)).bB,CG(a.d.f)-1|0,d);return 1;}if(c&&b.bk==80){I1(a.d);return 1;}if(!a.eM&&c&&b.bk==90){if(Dp(Bi(a)))FV(a);b=a.d.f;b.cm=b.cm+1|0;e=b.id;d=e.m;if(!d)e=null;else{f=(EB(e,d-1|0)).data;e=VR(b,f[0]);c=1;while(c<f.length){VR(b,f[c]);c=c+1|0;}}if(e!==null){CK(a,e.a,e.b,0);Ep(a);}return 1;}if(!c&&!b.ds){if(Bj(b.d8,C(215))){Dy(a,C(216));Dr(a,a.d.z-1|0,0);c=1;}else if(Bj(b.d8,C(217))){Dy(a,C(218));Dr(a,a.d.z
-1|0,0);c=1;}else if(Bj(b.d8,C(36))){Dy(a,C(22));Dr(a,a.d.z-1|0,0);c=1;}else if(Bj(b.d8,C(219))){Dy(a,C(220));Dr(a,a.d.z-1|0,0);c=1;}else if(Bj(b.d8,C(221))){Dy(a,C(222));Dr(a,a.d.z-1|0,0);c=1;}else if(!Bj(b.d8,C(223)))c=0;else{Dy(a,C(224));Dr(a,a.d.z-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.ds&&!b.cL)){d=b.bk;if(d>=48&&d<=57){c=d-48|0;e=a.nF.data[c];if(e!==null)e.k();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bk){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AH7(a,b))return 1;if(AEX(a,b))return 1;c=b.cL;if(c&&b.bk==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bk;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.ds&&!b.j5)return J(b.d8)>0&&Dy(a,b.d8)?1:0;return 0;}return 0;}
function ZQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=SS(a);d=SR(a);if(b.fD!=3&&b.hw==3){e=S2(b.oD);f=new Xt;f.yK=c;f.yL=d;g=new Qz;g.rv=f;while(!g.ma&&AAL(e,g)){}if(!g.ma&&Bj(C(183),Er(b))){c=Be(0,c-100|0);d=Bd(CG(b.f)-1|0,d+100|0);BC(b.oD,BJ(c,d));h=BI(3);i=h.data;i[0]=Fr(b.f,c);e=b.f;j=0;d=Bd(d+1|0,e.A.data.length);k=0;while(k<d){j=j+Gk(e,k)|0;if(k!=(e.A.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.yN=ET();e=b.eX;l=new AAy;l.vc=b;i=R(B,3);m=i.data;m[0]=E1(b.f);m[1]=h;b=b.f.da;g=BG();Z0(b,b.c_,g);h
=BI(3*g.m|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bw(g,o);d=k+1|0;n[k]=b.bY;q=d+1|0;n[d]=b.bV;k=q+1|0;n[q]=b.fA;o=o+1|0;}m[2]=h;CQ(e,l,C(225),i);}}}
function UF(a){I1(a.d);}
function YI(a){AFs(a.d);}
function G2(a,b,c){var d,e,f,g,h,i;if(c&&a.eM)return 0;d=Eg(Bi(a));e=d.J;if(Dp(Bi(a))){f=a.d.f;g=Bi(a);h=TS(f,g);if(c)OA(f,g,h);if(c){CK(a,d.J,d.Z,0);FV(a);Ep(a);}}else{h=Fh(Fx(a.d.f.A.data[e]),C(209));i=Bd(CG(a.d.f)-1|0,e);Cb((Bi(a)).bB,i,0);if(e>=(CG(a.d.f)-1|0))Cb((Bi(a)).bB,i,Gk(a.d.f,i));else Cb((Bi(a)).bM,i+1|0,0);if(c)GE(a);else CK(a,e,0,0);}b.i(h);return 1;}
function AEX(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.eM)return 0;a:{switch(b.bk){case 8:if(Dp(Bi(a))){GE(a);c=1;}else{b=a.d;d=b.z;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;Ou(b.f,e,c);}else{e=b.w-1|0;c=Gk(b.f,e);b=a.d.f;Lh(b,e);FR(b,e,Gk(b,e),1,C(209));}Ep(a);c=CK(a,e,c,0);}}break a;case 9:if(!b.bL){if(!Dp(Bi(a)))Dy(a,a.fe);else{f=Eg(Bi(a));g=FS(Bi(a));c=g.J;d=f.J;e=(c-d|0)+1|0;h=BI(e);i=h.data;j=R(BM,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fe;d=d+1|0;e=l;}b=new ABy;m=a.d;AIp(b,m.w,m.z);m=new Sh;m.tE
=a;Pm(a,h,0,0,j,b,m);f.Z=f.Z+J(a.fe)|0;g.Z=g.Z+J(a.fe)|0;L9(a,a.d.z+J(a.fe)|0);Ep(a);}c=1;}else b:{if(!Dp(Bi(a))){b=a.d;f=B_(b.f,b.w);if(f.s.data.length>0){g=T6(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.w;b=DH(e,m.z);n.cm=n.cm+1|0;o=n.id;h=R(GX,1);h.data[0]=ARd(e,0,1,g,b.bq,b.bv);BC(o,h);MP(n,e,0,1,g);HA(f,0,J(g));L9(a,a.d.z-J(g)|0);}}else{b=Eg(Bi(a));f=FS(Bi(a));c=f.J;p=b.J;c=(c-p|0)+1|0;h=BI(c);k=h.data;j=R(BM,c);q=j.data;g=a.d;e=g.z;l=g.w;c=0;while(p<=f.J){g=B_(a.d.f,p);if(g.s.data.length>0){g=T6(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=I3(h,c);j=Db(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.J)b.Z=Be(0,b.Z-J(g)|0);if(p==f.J){f.Z=Be(0,f.Z-J(g)|0);L9(a,a.d.z-J(g)|0);}d=d+1|0;}b=DH(l,e);f=new S$;f.sh=a;Pm(a,h,0,1,j,b,f);}Ep(a);c=1;}break a;case 13:if(Dp(Bi(a)))GE(a);b=a.d;EQ(B_(b.f,b.w));b=a.d;AJj(b.f,b.w,b.z);Ep(a);c=CK(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AJO(a);}return c;}
function AH7(a,b){var c,d,e,f;a:{switch(b.bk){case 33:c=b.cL?Ib(a,HY(a.bw,a.T),b.bL):Jl(a,2-TY(Ea(a),a.T)|0,0,b.ds,b.bL);break a;case 34:c=!b.cL?Jl(a,TY(Ea(a),a.T)-2|0,0,b.ds,b.bL):Ib(a,((a.bw+Ea(a)|0)/a.T|0)-1|0,b.bL);break a;case 35:if(!IB(a,b.bL)&&!Dr(a,(FN(a)).R,b.bL)){c=0;break a;}c=1;break a;case 36:if(!IB(a,b.bL)&&!Dr(a,0,b.bL)){c=0;break a;}c=1;break a;case 37:c=b.cL;if(c&&b.ds){I0(a);d=a.d.hv;e=d.dD;if(e<=0)d=null;else{f=d.e_.data;c=e-1|0;d.dD=c;d=f[c];}if(d===null)c=1;else{CK(a,LH(d),Kx(d),0);Js(Bi(a),
d.nW);c=1;}break a;}c=Ro(a,(-1),c,b.bL);break a;case 38:c=Jl(a,(-1),b.cL,b.ds,b.bL);break a;case 39:c=b.cL;if(c&&b.ds){d=a.d.hv;e=d.dD;if(e==(d.e8-1|0))d=null;else{f=d.e_.data;c=e+1|0;d.dD=c;d=f[c];}if(d===null)c=1;else{CK(a,LH(d),Kx(d),0);Js(Bi(a),d.nW);c=1;}break a;}c=Ro(a,1,c,b.bL);break a;case 40:c=Jl(a,1,b.cL,b.ds,b.bL);break a;default:}c=0;}if(c&&b.bL){b=(Bi(a)).bB;d=a.d;Cb(b,d.w,d.z);}if(c)Lc(a.d);return c;}
function I0(a){var b,c,d,e,f,g,h;b=a.d;c=b.hv;d=c.dD;c=d<0?null:c.e_.data[d];if(c!==null&&b.w==LH(c)&&a.d.z==Kx(c))return;c=a.d;e=c.hv;b=new Nl;d=c.w;f=c.z;c=Bi(a);b.oO=DH(d,f);g=AUp(c);b.nW=g;g.dk=0;f=e.dD;h=e.e8;if(f==(h-1|0))ABg(e,b);else{d=f+1|0;while(d<h){YQ(e);d=d+1|0;}ABg(e,b);}e.dD=e.dD+1|0;}
function Ep(a){a.d.f.ym=Mt(FA(a));}
function HP(a,b){var c,d,e,f;a.AL=null;Lo(a.c$,null);ACR(a.d);c=a.d;a.d=b;KJ(c,null,null);KJ(b,a,FA(a));d=(Cy(a.fh.tS)).data;e=d.length;f=0;while(f<e){d[f].pw(c,b);f=f+1|0;}a.bw=Gq(b.l1*a.T);}
function RY(a,b){var c;c=LB(a.d.f,b);if(c===null)return C(21);return c.v;}
function MD(a,b){var c,d,e,f,g;a.d.k4=b;if(b===null){Bp(By(),C(226));Lo(a.c$,null);}else{b=b.data;c=DA(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gJ<<24>>24;e=e+1|0;}Lo(a.c$,c);}}
function Rt(a,b){a.d.pH=b;}
function Bi(a){return a.d.qM;}
function Tb(a){var b;b=a.mo;if(b!==null)b.i(a);}
function AGQ(){var a=this;B.call(a);a.k9=null;a.nm=null;a.jB=null;}
function ARD(a,b){var c=new AGQ();AUx(c,a,b);return c;}
function AUx(a,b,c){var d,e;a.k9=b;a.nm=c;d=null;e=new TN;e.rx=a;b.oE(d,e);b=null;d=new TO;d.qR=a;c.oE(b,d);}
function XI(a,b,c){var d,e,f,g,h,i,j;d=a.jB;if(d!==null&&d.hX!==null){e=b!==a.k9?0:1;f=b.kL();g=(b.jV()+f|0)/2|0;h=g-f|0;d=a.jB;d=d.hX.data[Gx(d,g,e)];i=g-(!e?d.hz:d.hA)|0;j= -b.hc(f)|0;c.ps(Ba(((!e?d.hA:d.hz)+i|0)-h|0,c.oM())+j|0);return;}}
function SY(){B.call(this);this.zQ=null;}
function AKI(a,b){Ve(a.zQ,b);}
function SZ(){B.call(this);this.xx=null;}
function AZh(a,b){Ve(a.xx,b);}
function S0(){B.call(this);this.vD=null;}
function AN_(a,b){return AF0(a.vD,b);}
function HG(){var a=this;B.call(a);a.n1=null;a.rB=null;a.q9=null;}
function A5d(a,b){var c=new HG();Ie(c,a,b);return c;}
function Ie(a,b,c){var d;d=null;a.n1=b.b5;a.rB=d;a.q9=c;}
function AMK(a,b){var c,d;if(b.cL&&b.bk==79){c=a.rB;if(c!==null&&b.bL)LE(a.n1,c);else NM(a.n1,a.q9);d=1;}else d=0;return d;}
function SW(){B.call(this);this.tF=null;}
function AOT(a,b){var c,d;c=a.tF;d=DC(c.r,c.E)?c.E:!DC(c.r,c.G)?null:c.G;if(d!==null){I$(d,b);c.ky=null;c.lS.jB=null;c.fr.fq=null;}}
function SX(){B.call(this);this.rU=null;}
function AZN(a,b){b=b;return AH8(a.rU,b);}
var C9=G(0);
function ACl(){var a=this;B.call(a);a.dF=null;a.cR=null;a.d1=null;}
function F8(a,b){var c;c=a.d1;if(c!==b)a.d1=Cv(c,b);}
function EC(a){var b;b=a.d1;if(b!==null){LZ(b);F8(a,null);}}
function Gt(a,b){YO(a.cR,0,b);}
function Kh(a,b){TK(a.cR,b);}
function Jw(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.cR.m-1|0;while(b>=0){c=Bw(a.cR,b);d=a.dF.bU;c.U.dp(d);e=c.Q;f=c.h7.kA;if(!K2(e)){if(!NN(e)&&!(!e.ew&&e.dO!==null)){e.ew=0;AA9(e);g=e.en;h=(g.dm+g.ev+5.0)/10.0;i=CC(e.fR,e.kc);g=d.ck;j=e.en;k=e.jc;l=h*2.0;Cl(g,j);m=i+K7(g,k,l)|0;e.hR=m;m=EV(0,m,e.j.a);if(m){g=DV(d,m,e.j.b,e.fR.cx);Cl(g,e.en);j=e.jc;l=i;h=l+h;k=e.en;n=k.dm;BP(g,j,h,l+n-(n+k.ev)/16.0);j=e.dO;if(j===null){j=CS(d);e.dO=j;}CJ(j,g);Es(g);Cu(e.l3,0.0,0.0,Cc(e.dO),Dg(e.dO));}}g=f.yd;j=e.dO;if(j===null)P3(e,
d,0,e.j.a,g);else{i=Cc(j);j=f.uc;k=e.h;m=k.a;o=k.b;k=e.dO;DX(d,m,o,k.fj,e.l3,k,j,g,e.fR.cx);m=e.j.a;if(i<m)P3(e,d,i,m-i|0,g);}}B5(d,1);i=CC(c.bo,2.0);m=K2(c.Q);g=c.bo;j=g.dw;g=g.pi;o=m?0:c.Q.j.b;k=c.U.j;V(g,k.a,k.b+o|0);AHA(d,g,!m?c.Q.h:c.U.h,c.h7.kA.oL, -i|0,j);g=c.U;AIL(d,g.j,g.h,i,o,Xl(c.h7.k3,c.bo.cb),c.h7.k3.nh,j);b=b+(-1)|0;}c=a.d1;if(c!==null&&!Ev(c.cc)){B5(c.cT.bU,1);b=0;while(true){g=c.cc;if(b>=g.m)break;LQ(Bw(g,b),c.cT);b=b+1|0;}}}
function JP(a,b){var c,d;c=a.dF;if(c.cx==b)d=0;else{c.cx=b;Jd(c.hb);d=1;}if(d){c=a.d1;if(c!==null){c=B2(c.cc);while(B7(c)){NH(B8(c));}}b=0;while(true){c=a.cR;if(b>=c.m)break;c=Bw(c,b);c.Q.ew=1;c.U.qz();b=b+1|0;}}return d;}
function AS1(a,b){var c,d,e,f,g,h;c=a.d1;if(c!==null){d=0;e=c.cc.m-1|0;a:{while(e>=0){d=Nn(Bw(c.cc,e),b.g,c.cT.cH);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}e=0;while(true){c=a.cR;if(e>=c.m)break;b:{c=Bw(c,e);f=b.g;if(B6(c.Q,f))d=DO(c.bo.cH,null);else{d=CC(c.bo,7.0);g=CC(c.bo,25.0);if(MA(c,f.a,d)){h=Wj(c,f.a,g);if(MH(c,f.b,d)){d=DO(c.bo.cH,LI(h,C(227)));break b;}if(Kp(c,f.b,d)){d=DO(c.bo.cH,LI( -h|0,C(227)));break b;}}if(NO(c,f.b,d)){g=ACc(c,f.b,g);if(N7(c,f.a,d)){d=DO(c.bo.cH,LI(g,C(228)));break b;}if(Mg(c,
f.a,d)){d=DO(c.bo.cH,LI( -g|0,C(228)));break b;}}d=0;}}c:{d:{if(!d){if(!B6(c.U,b.g))break d;if(!c.U.bQ(b)&&!DO(c.bo.cH,null))break d;}d=1;break c;}d=0;}if(d)return 1;e=e+1|0;}return 0;}
function ALn(a,b,c,d){var e,f,g,h,i;e=a.d1;if(e!==null){f=0;g=e.cc.m-1|0;a:{while(g>=0){f=NK(Bw(e.cc,g),b.g,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=0;while(true){e=a.cR;if(h>=e.m)break;b:{c:{i=Bw(e,h);if(!B6(i.Q,b.g)){d:{e:{f:{e=b.g;f=CC(i.bo,7.0);if(MA(i,e.a,f)){if(MH(i,e.b,f))break f;if(Kp(i,e.b,f))break f;}if(!NO(i,e.b,f))break e;if(!N7(i,e.a,f)&&!Mg(i,e.a,f))break e;}f=1;break d;}f=0;}if(!f){if(!LR(i,b))break c;if(!i.U.cv(b,c,d))break c;}}f=1;break b;}f=0;}if(f)return 1;h=h+1|0;}return 0;}
function ANl(a,b,c){var d,e,f,g,h,i,j,k;d=a.d1;if(d!==null){e=null;f=d.cc.m-1|0;a:{while(f>=0){e=Bw(d.cc,f);g=b.g;h=E4(e.cl,g);if(!h&&!KS(e.cl)){e=e.kk;if(e!==null)e.k();}e=!h?null:A5e;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=0;while(true){d=a.cR;if(i>=d.m)return null;b:{g=Bw(d,i);if(!c){c:{d=b.g;if(!K2(g.Q)&&B6(g.Q,d)){e=g.U.h;f=e.a;h=d.a;f=f-h|0;j=e.b;k=d.b;j=j-k|0;d=g.Q.h;h=d.a-h|0;k=d.b-k|0;e=new Bg;d=new Rb;d.p7=g;d.p5=h;d.p6=k;d.p3=e;d.p4=f;d.p2=j;}else{f=CC(g.bo,7.0);h=CC(g.bo,25.0);if
(MA(g,d.a,f)){j=Wj(g,d.a,h);if(MH(g,d.b,f)){d=JL(g,d,j,(-1));break c;}if(Kp(g,d.b,f)){d=JL(g,d,j,1);break c;}}if(NO(g,d.b,f)){h=ACc(g,d.b,h);if(N7(g,d.a,f)){d=JL(g,d,(-1),h);break c;}if(Mg(g,d.a,f)){d=JL(g,d,1,h);break c;}}d=null;}}if(d!==null)break b;}d=B6(g.Q,b.g)?A5e:!LR(g,b)?null:g.U.cw(b,c);}if(d!==null)break;i=i+1|0;}return d;}
function AZ6(a,b,c){var d,e,f;d=a.d1;if(d!==null&&Jc(d))return 1;e=0;while(true){d=a.cR;if(e>=d.m)break;a:{b:{d=Bw(d,e);if(!B6(d.Q,b.g)){if(!LR(d,b))break b;if(!d.U.dt(b,c))break b;}f=1;break a;}f=0;}if(f)return 1;e=e+1|0;}return 0;}
function AV_(a,b,c){var d,e,f;d=0;while(true){e=a.cR;if(d>=e.m)break;f=Bw(e,d);e=f.U;e.dr(e.h,e.j,c);e=f.Q;if(e.g8!==null){e.en=null;e.hR=0;e.ew=1;}If(f);d=d+1|0;}}
function SF(){var a=this;B.call(a);a.bU=null;a.hb=null;a.cH=null;a.b2=null;a.cb=0.0;a.cx=0;a.d4=null;a.eh=null;a.dw=null;a.pi=null;a.AG=null;a.AH=null;}
function Ks(a){var b;b=a.d4;if(b!==null)b.te();}
function KH(a){var b;b=a.d4;if(b!==null)b.uX();}
function Mw(a,b){var c;c=a.hb.ei!==(Em()).activeElement?0:1;if(c)KH(a);a.d4=b;if(c)Ks(a);}
function Fy(a,b){KH(a);a.d4=b;Ks(a);}
function AAc(a,b){if(a.d4===b)a.d4=null;}
function DC(a,b){return b!==a.d4?0:1;}
function JZ(a){return a.bU.ck;}
function Hc(a,b){return Gu(a.bU,b.js,Cd(b.hN,a.cb));}
function CC(a,b){return Cd(b,a.cb);}
function Og(a,b){var c;c=a.bU;if(!a.cx)c.o$=b;else c.nB=b;Jd(a.hb);}
function Vk(){B.call(this);this.uz=null;}
function AZ2(a,b,c,d){var e,f,g,h;e=a.uz;f=0;a:{while(true){g=e.cR;if(f>=g.m)break;if((Bw(g,f)).U.dq(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function ADY(){var a=this;B.call(a);a.eF=null;a.od=0.0;a.h5=0.0;a.gQ=0;}
function AVv(){var a=new ADY();AP1(a);return a;}
function AP1(a){var b;b=Sb(0,0,2,20);a.eF=b;a.od=0.5;a.h5=0.0;Iq(187,187,187,255,b.V);}
function Uq(a){return a.eF.t.b;}
function R5(a){return a.eF.t.a;}
function ZV(a,b){var c,d;a:{c=a.gQ;if(b>a.h5)while(true){d=a.h5+a.od;a.h5=d;a.gQ=a.gQ?0:1;if(b>d)continue;else break a;}}return a.gQ==c?0:1;}
function Tc(a,b,c){V(a.eF.u,b,c);}
function XH(a,b){a.h5=b+a.od*1.25;a.gQ=1;}
function AAT(a,b,c){if(a.gQ)YK(a.eF,b,c.a,c.b);}
function ACB(){var a=this;B.call(a);a.fU=null;a.f=null;a.o9=null;a.qM=null;a.hv=null;a.kV=null;a.eX=null;a.k4=null;a.w=0;a.z=0;a.hY=0;a.ip=null;a.h_=null;a.oD=null;a.fD=0;a.hw=0;a.hJ=0;a.iw=Fu;a.yN=Fu;a.zy=Fu;a.pH=0;a.Dd=0;a.dK=0;a.l1=0.0;a.fz=0;}
function A2k(a,b,c){var d=new ACB();AJA(d,a,b,c);return d;}
function AMn(a,b){var c=new ACB();APu(c,a,b);return c;}
function A2q(a,b,c){var d=new ACB();UB(d,a,b,c);return d;}
function AJA(a,b,c,d){UB(a,(AHd(b)).jK,c,d);}
function APu(a,b,c){UB(a,b,null,c);}
function UB(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.qM=AKU();f=new SD;f.e_=R(Nl,16);f.e8=0;f.dD=(-1);a.hv=f;a.ip=null;a.h_=BG();a.oD=BG();a.fD=1;a.hw=1;a.hJ=1;a.dK=0;a.l1=0.0;a.fz=0;a.fU=d;a.o9=c;c=new YL;g=e.length;b=R(Dx,Be(1,g));if(!g)b.data[0]=WN(C(21));h=b.data;i=0;while(i<g){h[i]=WN(e[i]);i=i+1|0;}d=new Xu;f=new Ni;P9(f);d.eY=f;c.eR=d;c.dH=JA();c.dz=JA();c.id=BG();if(!h.length){c=new BR;X(c);L(c);}c.A=b;j=AA7(c);c.da=AFx(ARG(Ky(0,j,0),null,null));a.f=c;}
function Er(a){var b;b=a.o9;if(b===null){b=a.fU;if(b===null)b=C(182);else{b=b.gt;b=b===null?C(182):!Ek(b,C(229))&&!Ek(b,C(230))&&!Ek(b,C(231))&&!Ek(b,C(232))&&!Ek(b,C(233))&&!Ek(b,C(234))?(Ek(b,C(235))?C(183):Ek(b,C(236))?C(237):!Ek(b,C(238))?C(182):C(185)):C(184);}}return b;}
function Hr(a){var b;b=a.fU;return b===null?null:b.jT;}
function L0(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.hw=3;a.hJ=3;a.fD=3;c=CM(b[0]);d=EG(b[1]);CM(b[2]);if(b.length<5)AA0(a.f,c,d);else{e=CM(b[3]);f=e.data;g=EG(b[4]);Wv(a.f,c,d,e,g,0);SO(a,I3(e,f.length),NT(g));}if(a.fz){h=ER(a);i=Jv(ET(),a.iw);j=new K;N(j);H(Hz(H(H(j,h),C(239)),i),C(240));$rt_globals.console.info($rt_ustr(M(j)));}h=a.kV;if(h!==null)Tb(h);}
function Lc(a){var b;RL(a,DH(a.w,a.z),IU(a.f,a.w,a.z));if(!(a.ip!==null&&!Ev(a.h_))){b=a.z;if(b>0)RL(a,DH(a.w,b-1|0),IU(a.f,a.w,a.z-1|0));}}
function RL(a,b,c){var d,e,f,g,h,i,j,k;ACR(a);d=Cn(a.f.dH,c);if(d!==null)c=d;a:{e=Cn(a.f.dz,c);if(e!==null){a.ip=LB(a.f,c);c=B2(e);while(true){if(!B7(c))break a;f=B8(c);BC(a.h_,LB(a.f,f));}}}c=a.kV;if(c!==null){g=b.bq;h=b.bv;b=c.fh;f=Er(c.d);e=Hr(c.d);i=(Cy(b.ue)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.zK(f,e)){b=b.Cq;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new On;e.Bw=c;e.Bx=f;e.Bu=g;e.Bv=h;b.sA(f,g,h,e,c.jz);}}}
function ACR(a){a.ip=null;Ij(a.h_);}
function SO(a,b,c){var d,e,f,g,h;if(a.eX!==null){a.zy=ET();d=a.f.cm;e=a.eX;f=new Xm;f.xM=a;g=R(B,3);h=g.data;h[0]=b;h[1]=c;b=BI(1);b.data[0]=d;h[2]=b;CQ(e,f,C(241),g);}}
function KJ(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.kV=b;a.eX=c;if(c===null){d=a.f.A.data;e=d.length;f=0;while(f<e){Sk(d[f]);f=f+1|0;}}else if(a.fD==1){a.iw=ET();b=Er(a);e=BT(b,C(183));f=BT(b,C(185));d=E1(a.f);g=d.data.length;h=!e?5120:10240;i=AGP(b);if(f)Jx(a,d,i);else if(g<=h)Jx(a,d,i);else if(!e){Up(a,NT(d),i);Jx(a,d,i);}else{Up(a,NT(d),i);j=NT(d);c=a.eX;k=new AAx;k.yo=a;l=R(B,2);m=l.data;m[0]=j;j=BI(1);j.data[0]=i;m[1]=j;CQ(c,k,C(242),l);a.hw=2;Jx(a,d,i);}}}
function Up(a,b,c){var d,e;d=a.eX;e=new W5;e.tD=a;CQ(d,e,C(243),I(B,[b,DN([c,250])]));a.hJ=2;}
function Jx(a,b,c){var d,e,f,g;d=a.eX;e=new U6;e.qk=a;f=R(B,2);g=f.data;g[0]=b;b=BI(1);b.data[0]=c;g[1]=b;CQ(d,e,C(244),f);a.fD=2;}
function ER(a){var b;b=a.fU;return b===null?C(21):ABa(b);}
function I1(a){var b,c,d,e,f;if(a.fz){b=ER(a);c=new K;N(c);H(H(c,b),C(245));$rt_globals.console.info($rt_ustr(M(c)));}b=Er(a);if(b===null)d=null;else{a:{e=(-1);switch(Nr(b)){case -1655966961:if(!Bj(b,C(185)))break a;e=3;break a;case 3401:if(!Bj(b,C(237)))break a;e=2;break a;case 98723:if(!Bj(b,C(184)))break a;e=1;break a;case 3254818:if(!Bj(b,C(183)))break a;e=0;break a;case 3556653:if(!Bj(b,C(182)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(246);break b;case 2:d=C(247);break b;case 3:d
=C(248);break b;case 4:d=C(249);break b;default:d=null;break b;}d=C(250);}}if(d===null)Tb(a.kV);else{a.iw=ET();b=a.eX;c=new ABb;c.u8=a;f=R(B,1);f.data[0]=E1(a.f);CQ(b,c,d,f);}}
function AFs(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.fz){b=ER(a);c=new K;N(c);H(H(c,b),C(251));$rt_globals.console.info($rt_ustr(M(c)));}b=Er(a);if(b!==null&&!Bj(C(182),b)){if(Bj(C(185),b)){I1(a);Ih(a.f);}else{c=a.f.da;d=P2(c,c.c_);if(d===null){NS(a);Ih(a.f);return;}e=DN([Dh(d),C7(d),d.bT.fA]);f=E1(a.f);g=BI(1);g.data[0]=AGP(b);c=a.f.eR;if(c.fm===null){h=BI(0);i=B0(0);}else{j=ASj(AUi(d.ch,c.eY),d);V5(j);h=j.n0;i=j.md;}k=a.f.cm;d=a.eX;c=new Rn;c.uj=a;l=R(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=BI(1);e.data[0]=k;m[3]
=e;m[4]=h;m[5]=i;CQ(d,c,C(252),l);}}else Ih(a.f);}
function NS(a){var b;b=ASj(a.f.eR,null);V5(b);SO(a,b.n0,b.md);}
function ACq(){var a=this;B.call(a);a.wU=null;a.Ap=null;a.pS=null;a.ue=null;a.tS=null;a.zi=null;}
function N0(a,b,c){return QR(a,Cy(a.wU),b,c);}
function Ye(a,b,c){return QR(a,Cy(a.Ap),b,c);}
function QR(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.zK(c,d))return g.Do;f=f+1|0;}return null;}
function AAw(a,b,c){var d,e,f,g;d=(Cy(a.pS)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.zK(b,c))return g.Dj;f=f+1|0;}return null;}
function Ff(){var a=this;B.call(a);a.b$=0;a.c7=null;a.cB=null;a.es=null;a.dC=0;}
var A5f=0;var A5b=0;function Wz(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cB;j=i===b&&!i.iJ?0:1;if(j){a.cB=b;M4(b,c.ck,a.c7.gG);}k=HY(Bd(Gf(b),e+2048|0),1024);l=a.es;m=l.data.length;n=k<=m?0:1;if(n){a.es=Db(l,k);while(m<k){a.es.data[m]=CS(c);m=m+1|0;}}o=a.c7.fs;if(!(!j&&!n)){if(A5f){l=b.f4;$rt_globals.console.info("fMeasure"+l.data);A5f=0;}if(!A5b){c=o.c8;b="alphabetic";c.textBaseline=b;}else{b=o.c8;c="top";b.textBaseline=c;}a.dC=f/1024|0;p=0;while(p<k){JU(a,o,d,a.dC+p|0);p=p+1|0;}a.cB.iJ=0;}e=a.es.data.length;if
(e&&f<=Gf(a.cB)){f=f/1024|0;g=a.dC;if(f!=g){if(Vq(f-g|0)>=e){g=0;while(g<e){JU(a,o,d,f+g|0);g=g+1|0;}a.dC=f;}else{while(true){g=a.dC;if(g>=f)break;JU(a,o,d,g+e|0);a.dC=a.dC+1|0;}while(true){g=a.dC;if(g<=f)break;JU(a,o,d,g-1|0);a.dC=a.dC-1|0;}}}}}
function Ne(b,c){return (c-EW(b)|0)/2|0;}
function Kf(b,c){return Ne(b,c)+b.si|0;}
function JU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Xk(a,e);g=a.cB;if(f>=g.s.data.length)return;h=g.f4;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.b$;l=a.c7.gG;EH(b);a:{while(true){g=a.cB;if(f>=g.s.data.length)break a;m=l.data;g=JC(g,f);n=m[Ki(g)];o=!A5b?Kf(n,c):Ne(n,c);m=h.data;Cl(b,n);BP(b,g.v,k,o);k=m[f]-j+a.b$;if(k>1024.0)break;f=f+1|0;}}h=a.es.data;CJ(h[d%h.length|0],b);}
function PE(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.es.data.length;if(!o)return;if(g>Gf(a.cB))return;p=a.cB;q=p.eJ;r=p.s;s=g/1024|0;t=Xk(a,g);u= -a.b$|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.es.data[s%o|0];bb=w[t];bc=z[t]+a.b$|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Bd(bf,bc)-g|0;if(bd&&y)bg=bg+a.b$|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.b$:2*a.b$|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.b$:2*a.b$|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.br.g_;if(bb===j)bo=h.br.qI;if(k!==null){p=B2(k);d:{while(B7(p)){if(BT(B8(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.br.uV;}if(n!==null){w=n.mV;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=ACX(h.dV,h,bi,n.gJ);}if(!bn&&!bl){i.b=Bd(i.b,Gf(a.cB));AEJ(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Bd(bc,bf)-i.a|0)-(!y?a.b$:0)|0,(g
+bg|0)<=(i.b+(!y?a.b$:2*a.b$|0)|0)?0:(Bd(bc,bf)-i.b|0)-(!y?a.b$:0)|0,g-x|0,bo);}else{bp=h.lt.data[bb.bX];p=bn?h.br.kp:R_(bo,VV(h,bp.l_));Cu(a.c7.iU,g-x|0,0.0,bg,v);V(a.c7.hO,bg,f);G1(a.c7,d,ba,u+c|0,b,bp.hT,p);}if((bb.bG&12)>>2>0){bc=u+c|0;B5(d,1);p=a.c7;bq=p.mX;bq.a=bg;x=b+p.sV|0;bk=x-p.Ad|0;br=p.pY;bs=x+br;ba=p.g2;S3();LO(d,bc,bk,bq,br,bs,ba,A5g.kC.hT);B5(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AEJ(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.lt.data[h.bX];o=n.hT;p=R_(m,VV(f,n.l_));q=f.br.kp;f=a.c7;r=f.iU;s=f.hO;t=l;u=i-j|0;v=u;w=e;Cu(r,t,0.0,v,w);V(s,u,e);G1(a.c7,b,g,c,d,o,p);l=l+i|0;Cu(r,l-k|0,0.0,k,w);V(s,k,e);f=a.c7;c=c+i|0;G1(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cu(r,t,0.0,i,w);V(s,i,e);G1(a.c7,b,g,c-j|0,d,o,q);}
function R_(b,c){if(b!==null)c=b;return c;}
function Xk(a,b){var c,d,e,f,g,h,i;c=a.cB;d=c.f4;e=0;f=c.s.data.length;g=b;b=BL(e,f);if(b>0){c=new BR;X(c);L(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BL(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ACJ(a){var b,c,d;b=a.es.data;c=b.length;d=0;while(d<c){AE8(b[d]);d=d+1|0;}a.es=a.c7.m$;a.cB=null;}
function AHn(a,b,c,d,e,f,g,h,i){var j,k;j=Gf(a.cB);if(j)j=j+a.b$|0;if(!j)j=j-a.b$|0;k=Be( -a.b$|0,j-g|0);if(k>=h)return;V(f,h-k|0,e);Bs(b,c+k|0,d,f,i);}
function Yh(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=R(Ff,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.sY(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cB===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Ff;g.b$=3;g.dC=0;g.c7=d;g.es=d.m$;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)ACJ(q);j=j+1|0;}return i;}
function R4(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cB;if(e!==null)e.iJ=1;d=d+1|0;}}
function NZ(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){ACJ(b[d]);d=d+1|0;}}
function AEL(){A5b=0;}
function AGk(){var a=this;B.call(a);a.fN=null;a.df=null;a.eT=null;a.fo=null;a.nT=null;a.nG=null;}
function IV(){var a=new AGk();AV2(a);return a;}
function AV2(a){a.fN=new Bg;a.df=new Bg;a.eT=new Bg;a.fo=new Bg;a.nT=new BY;a.nG=new BY;}
function Yt(a){var b;b=a.df;return !Ba(b.a,b.b)?0:1;}
function Ix(a,b){return Ho(b,a.eT,a.fo);}
function FQ(a,b,c,d){var e,f,g,h,i;e=Ix(a,b);f=Ho(b,a.fN,a.df);if(!e&&!f)return null;if(!f){if(!d)c.i(T8(a,b.a-a.eT.a|0));else c.i(P4(a,b.b-a.eT.b|0));}g=!d?a.fN.a+(a.df.a/2|0)|0:a.fN.b+(a.df.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Rw;b.uw=a;b.ux=c;b.uv=i;}else{b=new Rv;b.qY=a;b.qW=c;b.qX=i;}return b;}
function HV(a,b,c){if(c!==null)BS(a.nT,c);if(b!==null)BS(a.nG,b);}
function AD7(b,c){var d;d=new AAG;d.sj=b;d.Ay=c;return d;}
function P4(a,b){var c,d,e;c=a.fo.b;d=a.df.b;e=c-d|0;return AD7(Bd(Be(0,b-(d/2|0)|0),e),e);}
function T8(a,b){var c,d,e;c=a.fo.a;d=a.df.a;e=c-d|0;return AD7(Bd(Be(0,b-(d/2|0)|0),e),e);}
function J3(a,b,c,d,e,f,g){Uc(a,b,c,d,e,f,g,1);}
function QF(a,b,c,d,e,f,g){Uc(a,b,c,d,e,f,g,0);}
function Uc(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Bd(i,d);j=Be(XQ(d,d,e),i);e=e-d|0;i=d-j|0;i=i?XQ(b,i,e):0;if(!h){k=a.fN;k.a=i+c|0;k.b=f-g|0;l=a.df;l.a=j;l.b=g;l=a.eT;l.a=c;l.b=k.b;k=a.fo;k.a=d;k.b=g;break a;}k=a.fN;k.a=f-g|0;k.b=i+c|0;l=a.df;l.a=g;l.b=j;l=a.eT;l.a=k.a;l.b=c;k=a.fo;k.a=g;k.b=d;break a;}}V(a.fo,0,0);V(a.df,0,0);}}
function Ur(a,b){GG(a,b);GN(a,b);}
function GG(a,b){var c;c=a.eT;Bs(b,c.a,c.b,a.fo,a.nT);}
function GN(a,b){var c,d;c=a.df;c.a=c.a-2|0;c.b=c.b-2|0;d=a.fN;Bs(b,d.a+1|0,d.b+1|0,c,a.nG);b=a.df;b.a=b.a+2|0;b.b=b.b+2|0;}
function FW(a,b,c){return Ix(a,b)&&Gr(c)?1:0;}
function ADX(){var a=this;B.call(a);a.Dy=20;a.gf=null;a.fd=null;a.kZ=0.0;a.kW=null;a.iO=0;a.kl=0;a.gV=0;a.c1=null;a.nV=null;a.e2=null;a.gp=null;a.gn=0;}
function AGc(){var a=new ADX();A0d(a);return a;}
function A0d(a){a.Dy=20;a.gf=new Bg;a.fd=new Bg;a.c1=BG();a.nV=DA(0);}
function AAr(a,b,c){var d,e,f,g,h;d=a.gn;if(b==d)return;e=a.c1.m;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Be(0,(d-1|0)/20|0);g=Be(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){Q3(a,b);a.gn=b;}else{WL(a,c);if(a.gn>=b)while(true){if(h<g)break a;a.gn=OR(Bw(a.c1,h%e|0),a.e2,a.gp,a.gn,b,f,a.kZ);h=h+(-1)|0;}while(g<=h){a.gn=OR(Bw(a.c1,g%e|0),a.e2,a.gp,a.gn,b,f,a.kZ);g=g+1|0;}}}}
function Lo(a,b){if(b===null)b=DA(0);a.nV=b;}
function ZP(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.gV;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c1;h=Bw(h,g%h.m|0);i=a.gf;j=a.nV;k=h.fb.b;l=d.kG;m=b+f|0;n=h.cq;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&U$(d,j,r,l)!==l.kx?0:1){k=Ba((q-p|0)+1|0,h.cq);V(h.iH,Cc(h.cN),k);Cu(h.jq,0.0,Ba(p,h.cq),Cc(h.cN),k);t=r;}else{u=U$(d,j,r,l);MR(h,e,f+Ba(p,h.cq)|0,i,l.of,u);V(h.iH,Cc(h.cN),h.cq);Cu(h.jq,0.0,Ba(q,h.cq),Cc(h.cN),h.cq);p=q;}q=q+1|0;r=t;}u=U$(d,j,r,l);MR(h,
e,f+Ba(p,h.cq)|0,i,l.of,u);g=g+1|0;f=f+a.gV|0;}}
function R2(a,b,c,d){var e,f,g,h,i,j;e=a.c1.m;while(true){f=a.c1.m;g=Ba(f,a.gV);if(g>(d+a.kl|0))break;h=BJ(0,g);i=new P8;g=a.fd.a;f=a.kl;j=a.kW;i.iH=new Bg;i.jq=new BY;i.pt=h;i.d6=20;i.cq=f;i.fb=BJ(g,20*f|0);i.g6=Kf(j,f);if(i.cN===null)i.cN=CS(b);BC(a.c1,i);}if(f==e)return;WL(a,b);Q3(a,c);}
function Q3(a,b){var c,d,e,f,g,h,i,j,k;c=a.c1;d=c.m;e=Ba((b/(d*20|0)|0)+1|0,d)*20|0;c=B2(c);while(B7(c)){f=B8(c);g=a.e2;h=a.kZ;EH(g);i=0;while(true){j=f.d6;if(i>=j)break;k=e-Ba(d,j)|0;if(k<b)k=e;e=k+1|0;GA(f,g,De(e),Ba(f.cq,i)+f.g6|0,h);i=i+1|0;}CJ(f.cN,g);f.vt=g.iK;}}
function XM(a,b,c,d){a.kW=b;a.kl=c;a.gV=c*20|0;a.iO=d;XO(a);}
function WL(a,b){var c;c=a.e2;if(!(c!==null&&c.iK==a.iO)){c=DV(b,a.fd.a,a.gV,a.iO);a.e2=c;Cl(c,a.kW);Y4(a.e2,2);}c=a.gp;if(!(c!==null&&c.iK==a.iO)){b=DV(b,a.fd.a,a.kl,a.iO);a.gp=b;Cl(b,a.kW);Y4(a.gp,2);}}
function In(a){Fg(a.c1,new ACn);Ij(a.c1);XO(a);}
function XO(a){a.e2=Cv(a.e2,null);a.gp=Cv(a.gp,null);}
function Rx(a,b,c,d,e){Cs(a.gf,b);V(a.fd,c,d);a.kZ=e;}
function Wp(){B.call(this);this.BZ=null;}
function Wo(){B.call(this);this.pF=null;}
function AKS(a,b){var c;c=a.pF;FP(c,FH(b,KC(c)));}
function Wn(){B.call(this);this.r$=null;}
function AKh(a,b){var c;c=a.r$;Iu(c,FH(b,ZU(c)));}
function AIO(){var a=this;B.call(a);a.iU=null;a.hO=null;a.mX=null;a.g2=null;a.gG=null;a.m$=null;a.ci=null;a.fs=null;a.pY=0.0;a.dY=0;a.sV=0;a.Ad=0;a.ii=0;}
function AOd(a){var b=new AIO();ARr(b,a);return b;}
function ARr(a,b){var c;a.iU=new BY;a.hO=new Bg;a.mX=new Bg;c=new BY;a.g2=c;a.gG=R(Ld,4);a.m$=R(Ig,0);a.ii=b;Lg(c);}
function Xn(a){a.fs=Cv(a.fs,null);}
function RB(a,b,c){var d,e;d=CU(EW(a.ci)*b);a.dY=d;e=a.ci;a.sV= -( -((d+e.dm+e.ev)/2.0)|0)|0;ACO(a,c);return a.dY;}
function Pi(a,b){var c,d;Lg(a.g2);c=a.g2;TX(c,b,c);a.pY=V4(a.g2);c=a.g2;d=c.bs+c.bd+1.5|0;a.Ad=d;V(a.mX,0,d*2|0);}
function ACO(a,b){a.fs=Cv(a.fs,DV(b,1024,a.dY,a.ii));}
function G1(a,b,c,d,e,f,g){var h,i;h=a.hO;if(h.a&&h.b){i=a.iU;if(i.bC!==0.0&&i.bd!==0.0){DX(b,d,e,h,i,c,f,g,a.ii);return;}}}
function Sw(a,b,c,d){var e,f;Cl(a.fs,a.ci);e=DV(d,KU(a.fs,b)+(c*2|0)|0,a.dY,a.ii);Cl(e,a.ci);BP(e,b,c,Kf(a.ci,a.dY));f=CS(d);CJ(f,e);Es(e);return f;}
function Wm(){B.call(this);this.zw=null;}
function AS3(a){var b,c;b=a.zw;c=b.jC?0:1;b.jC=c;b=new K;N(b);Je(H(b,C(253)),c);$rt_globals.console.info($rt_ustr(M(b)));}
function Wt(){B.call(this);this.v7=null;}
function AVa(a){var b,c;b=a.v7;c=b.kr^1;b.kr=c;b=new K;N(b);Je(H(b,C(254)),c);$rt_globals.console.info($rt_ustr(M(b)));}
function Ws(){B.call(this);this.sO=null;}
function A0Y(a){var b,c,d,e,f;b=a.sO;c=(b.d7+3|0)%6|0;b.d7=c;d=b.eI.data;e=d.length;f=0;while(f<e){b=d[f];b.b$=c;b=b.cB;if(b!==null)b.iJ=1;f=f+1|0;}}
function Wr(){B.call(this);this.uY=null;}
function AOk(a){var b;b=a.uY;b.cd=b.cd?0:1;In(b.c$);b.c$=AGc();ND(b);Zt(b,b.h,b.j,b.cI.cb);}
function Wq(){B.call(this);this.qt=null;}
function APX(a){var b;b=a.qt;b.li=b.li?0:1;}
function Wl(){B.call(this);this.xW=null;}
function A0t(a){var b;b=a.xW;b.pb=b.pb?0:1;}
function TN(){B.call(this);this.rx=null;}
function AOn(a){var b;b=a.rx;XI(b,b.k9,b.nm);}
function TO(){B.call(this);this.qR=null;}
function AXS(a){var b;b=a.qR;XI(b,b.nm,b.k9);}
var AE1=G();
function M1(){B.call(this);this.BT=null;}
var A4P=null;var A5h=null;function AV3(){AV3=Bm(M1);A0M();}
function AL$(a){var b=new M1();AGH(b,a);return b;}
function AGH(a,b){AV3();a.BT=b;}
function A0M(){A4P=AL$(C(255));A5h=AL$(C(256));}
var ADv=G(0);
function AHv(b,c,d){return Iq(b,c,d,255,new BY);}
function Iq(b,c,d,e,f){Cu(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Uj(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AM1(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bm=g+i;e.bs=h+i;e.bd=j+i;return e;}
function Ii(b,c,d,e,f){f=Uj(b,c,d,f);f.bC=e;return f;}
function HL(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var YZ=G();
function AM6(a,b){var c,d,e;c=b.cL;d=c&&!b.bL&&!b.ds&&!b.j5?1:0;a:{if(d){d=b.bk;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bL&&!c&&!b.ds&&!b.j5?1:0;d=d&&b.bk==46?1:0;}b:{if(!d){e=b.bk;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.n5=1;}return 0;}
function YY(){B.call(this);this.v0=null;}
function AUa(a,b){var c;c=a.v0.d4;return c!==null&&c.hZ(b)?1:0;}
var Ll=G(0);
function AG8(){var a=this;Fd.call(a);a.cF=null;a.m=0;}
function BG(){var a=new AG8();AML(a);return a;}
function AML(a){a.cF=R(B,10);}
function Mn(a,b){var c,d;c=a.cF.data.length;if(c<b){d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.cF=Db(a.cF,d);}}
function Bw(a,b){Ke(a,b);return a.cF.data[b];}
function AXD(a){return a.m;}
function BC(a,b){var c,d;Mn(a,a.m+1|0);c=a.cF.data;d=a.m;a.m=d+1|0;c[d]=b;a.b1=a.b1+1|0;return 1;}
function YO(a,b,c){var d,e,f;P0(a,b);Mn(a,a.m+1|0);d=a.m;e=d;while(e>b){f=a.cF.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cF.data[b]=c;a.m=d+1|0;a.b1=a.b1+1|0;}
function EB(a,b){var c,d,e,f;Ke(a,b);c=a.cF.data;d=c[b];e=a.m-1|0;a.m=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b1=a.b1+1|0;return d;}
function TK(a,b){var c;c=KO(a,b);if(c<0)return 0;EB(a,c);return 1;}
function Ij(a){ADH(a.cF,0,a.m,null);a.m=0;a.b1=a.b1+1|0;}
function AHi(a,b,c){var d,e,f,g,h,i;P0(a,b);if(c.et())return 0;Mn(a,a.m+c.cZ()|0);d=c.cZ();e=a.m;f=e-1|0;while(f>=b){g=a.cF.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.m=e+d|0;h=c.b7();i=0;while(i<d){g=a.cF.data;e=b+1|0;g[b]=h.b8();i=i+1|0;b=e;}a.b1=a.b1+1|0;return 1;}
function Ke(a,b){var c;if(b>=0&&b<a.m)return;c=new BD;X(c);L(c);}
function P0(a,b){var c;if(b>=0&&b<=a.m)return;c=new BD;X(c);L(c);}
function Fg(a,b){var c;c=0;while(c<a.m){b.i(a.cF.data[c]);c=c+1|0;}}
function J1(){var a=this;B.call(a);a.u=null;a.t=null;a.V=null;a.bj=null;}
function RD(){var a=new J1();AAU(a);return a;}
function Sb(a,b,c,d){var e=new J1();ALq(e,a,b,c,d);return e;}
function AAU(a){a.u=new Bg;a.t=new Bg;a.V=new BY;a.bj=new BY;}
function ALq(a,b,c,d,e){a.u=new Bg;a.t=new Bg;a.V=new BY;a.bj=new BY;G7(a,b,c,d,e);}
function G7(a,b,c,d,e){V(a.u,b,c);V(a.t,d,e);}
function ZW(a){V(a.t,0,0);}
function KS(a){var b;b=a.t;return Ba(b.a,b.b)?0:1;}
function E4(a,b){return Ho(b,a.u,a.t);}
function YK(a,b,c,d){var e;e=a.u;Bs(b,e.a+c|0,e.b+d|0,a.t,a.V);}
function UW(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.bj;i=a.V;Ge(b,b.im);Gp(b.im,b.X,d,e,g,b.c2);Nw(b.im,b.X,c);g=b.im;j=b.X;Fq(j,g.uK,h);Fq(j,g.uI,i);c=g.rR;j.uniform2f(c,f,0.0);FO(b);}
var Fa=G();
function MZ(){Fa.call(this);this.Do=null;}
function ZK(){Fa.call(this);this.Dj=null;}
function XV(){Fa.call(this);this.Cq=null;}
var G5=G(0);
var RK=G(0);
function BY(){var a=this;B.call(a);a.bm=0.0;a.bs=0.0;a.bd=0.0;a.bC=0.0;}
function ACy(a,b,c,d){var e=new BY();AYq(e,a,b,c,d);return e;}
function AJG(a){var b=new BY();AIP(b,a);return b;}
function AYq(a,b,c,d,e){a.bm=b;a.bs=c;a.bd=d;a.bC=e;}
function Cu(a,b,c,d,e){a.bm=b;a.bs=c;a.bd=d;a.bC=e;}
function AIP(a,b){a.bm=b.bm;a.bs=b.bs;a.bd=b.bd;a.bC=b.bC;}
function BS(a,b){a.bm=b.bm;a.bs=b.bs;a.bd=b.bd;a.bC=b.bC;return a;}
function ASo(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BH(a)===BH(b)){b=b;if(b.bm===a.bm&&b.bs===a.bs&&b.bd===a.bd&&b.bC===a.bC?1:0){c=1;break a;}}c=0;}return c;}
function Ld(){var a=this;B.call(a);a.nA=null;a.AV=null;a.wa=0.0;a.A8=0;a.Bm=0;a.si=0;a.B4=0;a.dm=0.0;a.ev=0.0;a.AZ=0.0;a.pj=0.0;a.A4=0;a.p8=null;}
function EW(a){return CU(a.dm+a.ev);}
function ML(a,b){return CU((a.dm+a.ev)*b);}
function Ig(){var a=this;B.call(a);a.ey=null;a.fL=null;a.fj=null;}
var A4t=0;function AE8(a){var b;b=a.fL;if(b!==null){A4t=A4t-1|0;a.ey.dS.deleteTexture(b);a.fL=null;}}
function Cc(a){return a.fj.a;}
function Dg(a){return a.fj.b;}
function Sf(a,b,c,d){var e;e=a.fj;e.a=b;e.b=c;NW(a);a.ey.dS.texStorage2D(3553,1,d,b,c);e=a.ey.dS;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function NW(a){var b,c;b=a.ey.dS;c=a.fL;b.bindTexture(3553,c);}
function CJ(a,b){VM(a,b.nc,b.mG,32856);XS(a,b,0,0);}
function VM(a,b,c,d){var e,f,g,h;a:{e=a.fj;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){NW(a);break a;}e=a.ey.dS;h=a.fL;e.deleteTexture(h);a.fL=a.ey.dS.createTexture();Sf(a,b,c,d);break a;}}Sf(a,b,c,d);}}
function Jt(a,b,c,d){NW(a);XS(a,b,c,d);}
function XS(a,b,c,d){var e;e=a.ey.dS;b=b.iC;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var XL=G(0);
var A5i=0.0;function Lg(b){Cu(b,1.0471975803375244,0.75,1.25,0.375);}
function TX(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:I5(b.bC,I5(c,A5i));Cu(d,b.bm/c,b.bs*c,ADD(b.bd*c,1.25),e);}
function V4(b){var c;c=b.bs;return c-(c|0)>=0.25?0.0:0.5;}
function AC$(){A5i=ME(ME(0.5,0.375),4.0);}
var Oa=G(0);
function Gr(a){return DO(a,null);}
function QE(b){var c;c=new YT;c.t_=b;return c;}
function X3(){B.call(this);this.sv=null;}
function AVH(a){Ks(a.sv);}
function X2(){B.call(this);this.uD=null;}
function ASO(a){KH(a.uD);}
function AJs(){var a=this;B.call(a);a.bM=null;a.bB=null;a.dk=0;}
function AKU(){var a=new AJs();A0y(a);return a;}
function AUp(a){var b=new AJs();APa(b,a);return b;}
function A0y(a){a.bM=new G6;a.bB=new G6;}
function APa(a,b){a.bM=new G6;a.bB=new G6;Js(a,b);}
function Js(a,b){AAI(a.bM,b.bM);AAI(a.bB,b.bB);a.dk=b.dk;}
function NA(a,b,c){Cb(a.bB,b,c);if(!a.dk)Cb(a.bM,b,c);}
function P5(a,b){Cb(a.bM,b,0);Cb(a.bB,b+1|0,0);}
function Eg(a){if(Q_(a.bM,a.bB)>0)return a.bB;return a.bM;}
function FS(a){if(Q_(a.bM,a.bB)<0)return a.bB;return a.bM;}
function AIM(a,b){var c,d,e,f;c=a.bM;d=c.J;e=a.bB;if(d==e.J&&c.Z==e.Z?1:0)return null;c=Eg(a);e=FS(a);d=c.J;if(d<=b){f=BL(b,e.J);if(f<=0)return BJ(b<=d?c.Z:0,f>=0?e.Z:(-1));}return null;}
function Dp(a){var b,c;b=a.bM;c=a.bB;return (b.J==c.J&&b.Z==c.Z?1:0)?0:1;}
function SD(){var a=this;B.call(a);a.e_=null;a.e8=0;a.dD=0;}
function ABg(a,b){var c,d,e;c=a.e8;d=a.e_;if(c==d.data.length)a.e_=Db(d,c+16|0);d=a.e_.data;e=a.e8;a.e8=e+1|0;d[e]=b;}
function YQ(a){var b,c,d;b=a.dD;c=a.e8-1|0;if(b==c)a.dD=b-1|0;d=a.e_.data;a.e8=c;d[c]=null;}
var GM=G();
function YL(){var a=this;GM.call(a);a.A=null;a.da=null;a.eR=null;a.dH=null;a.dz=null;a.id=null;a.k6=null;a.cm=0;a.mL=0;a.ym=0.0;}
function B_(a,b){return a.A.data[b];}
function CG(a){return a.A.data.length;}
function AA7(a){return Fr(a,CG(a));}
function Gk(a,b){return a.A.data[b].R;}
function AJj(a,b,c){var d,e,f,g,h;d=a.A;e=d.data;f=e[b];d=Db(d,e.length+1|0);e=d.data;a.A=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=DW(R(Ct,0));a.A.data[b+1|0]=f;}else if(c==f.R){e[b]=f;e[b+1|0]=DW(R(Ct,0));}else{e=(IC(f,c)).data;d=a.A.data;d[b]=e[0];d[b+1|0]=e[1];}FR(a,b,c,0,C(209));}
function Lh(a,b){var c,d,e,f,g,h,i;c=a.A.data;d=c[b];e=c[b+1|0];f=DW(IW(d.s,e.s));g=a.A;h=g.data.length;if(b<h&&b>=0){i=R(Dx,h-1|0);c=i.data;YE(g,b,i);c[b]=f;a.A=i;return;}d=new Bt;X(d);L(d);}
function Ou(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.A.data;if(!(c<d[b].R?0:1)){d=(B_(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}FR(a,b,c,1,M$(e));h=a.A.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=YE(d,e,R(Ct,f-1|0));else{j=i[e];if(c<=0)k=D4(Do(j.v,1),j.bX,j.bG);else if(c>=(J(j.v)-1|0)){k=new Ct;l=j.v;Z6(k,Cr(l,0,J(l)-1|0),j.bX,j.bG);}else{d=B0(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=D4(Hf(d),j.bX,j.bG);}i[e]=k;}h.R=h.R-1|0;EQ(h);}else if(b!=(d.length-1|0)){FR(a,b,c,1,C(209));Lh(a,b);}}
function ACT(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Y7(a.A.data[b],c,e[0]);return;}g=f-1|0;d=(IC(a.A.data[b],c)).data;h=d[0];i=d[1];d=a.A;j=Db(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);Ma(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Ga(e[m])?WN(e[m]):DW(R(Ct,0));d[b+m|0]=k;m=m+1|0;}Ma(i,0,0,e[g]);d[b+g|0]=i;a.A=j;}
function TS(a,b){var c,d,e,f,g,h,i;c=Eg(b);d=FS(b);e=c.J;if(e==d.J)return Cr(Fx(a.A.data[e]),c.Z,d.Z);f=new K;N(f);b=a.A.data[c.J];e=c.Z;BN(BV(f,Do(Fx(b),e)),10);g=a.A.data;e=c.J+1|0;h=d.J;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AC4(BV(f,Fx(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.A.data[d.J];h=d.Z;BV(f,Cr(Fx(b),0,h));return M(f);}b=new ABW;X(b);L(b);}
function OA(a,b,c){var d;ABL(a,b);d=Eg(b);FR(a,d.J,d.Z,1,c);}
function ABL(a,b){var c,d,e,f,g,h,i;a:{c=Eg(b);d=FS(b);e=c.J;if(e==d.J)HA(a.A.data[e],c.Z,d.Z);else{b=a.A.data[e];HA(b,c.Z,b.R);HA(a.A.data[d.J],0,d.Z);e=c.J+1|0;f=d.J;g=a.A;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Dx,(h-f|0)+e|0);AEi(g,e,f,i);a.A=i;Lh(a,c.J);break a;}b=new Bt;X(b);L(b);}b=new Bt;X(b);L(b);}}}
function IU(a,b,c){return DH(b,Gv(B_(a,b),c));}
function ACa(a,b){var c,d,e;c=0;d=0;while(true){e=a.A.data.length;if(c>=e)break;if((d+(B_(a,c)).R|0)>=b)return BJ(c,b-d|0);d=d+((B_(a,c)).R+1|0)|0;c=c+1|0;}return BJ(e,0);}
function Fr(a,b){var c,d,e;c=0;d=a.A.data.length;e=0;while(e<b){c=c+Gk(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function LB(a,b){return NQ(B_(a,b.bq),b.bv);}
function E1(a){var b,c,d,e,f,g,h,i,j;b=B0(AA7(a));c=b.data;d=a.A.data.length;e=0;f=0;while(e<d){g=a.A.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;Qd(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function FR(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cm=a.cm+1|0;f=a.id;g=R(GX,1);h=new GX;h.d$=b;h.eN=c;i=LS(e,C(209),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BJ(b,c+J(i[0])|0);break a;}k=BJ((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BJ(b,c);}i=g.data;h.oI=k;h.nq=d;h.gx=e;i[0]=h;BC(f,g);MP(a,b,c,d,e);}
function MP(a,b,c,d,e){var f;f=Fr(a,b)+c|0;if(!d){WM(a.da,f,J(e));SM(a.eR,f,J(e));}else{T9(a.da,f,J(e));OO(a.eR,f,J(e));}}
function VR(a,b){var c,d,e;c=LS(b.gx,C(209),(-1));if(b.nq){ACT(a,b.d$,b.eN,c);WM(a.da,Fr(a,b.d$)+b.eN|0,J(b.gx));SM(a.eR,Fr(a,b.d$)+b.eN|0,J(b.gx));}else{c=c.data;d=AKU();Cb(d.bM,b.d$,b.eN);e=c.length;if(e==1)Cb(d.bB,b.d$,b.eN+J(c[0])|0);else Cb(d.bB,(b.d$+e|0)-1|0,J(c[e-1|0]));ABL(a,d);T9(a.da,Fr(a,b.d$)+b.eN|0,J(b.gx));OO(a.eR,Fr(a,b.d$)+b.eN|0,J(b.gx));}return b.oI;}
function AAg(a){return a.mL==a.cm?0:1;}
function Ih(a){a.mL=a.cm;}
function MK(a){var b,c,d;a.k6=BI(a.A.data.length+1|0);b=0;while(b<a.A.data.length){c=a.k6.data;d=b+1|0;c[d]=(c[b]+(B_(a,b)).R|0)+1|0;b=d;}}
function UL(a,b){var c,d,e,f,g,h;c=a.k6;if(c===null){d=0;e=0;a:{while(true){c=a.A.data;f=c.length;if(e>=f)break;g=c[e].R;if(b<=(d+g|0)){h=DH(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DH(f,0);}return h;}d=AIG(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DH(d,b-(d<0?0:a.k6.data[d])|0);if(h.bv>=(B_(a,h.bq)).R){h.bq=h.bq+1|0;h.bv=0;}return h;}
var LN=G(0);
function LC(b,c){var d,e,f;b=b.data;d=b.length;if(!d)return c;e=new K;N(e);f=0;while(f<d){BN(BV(e,b[f]),47);f=f+1|0;}return M(BV(e,c));}
var SH=G(0);
function RZ(){var a=this;B.call(a);a.hQ=null;a.fS=null;a.jn=null;}
function AIJ(a,b){var c=new RZ();ANB(c,a,b);return c;}
function A0$(a,b,c){var d=new RZ();ADs(d,a,b,c);return d;}
function ANB(a,b,c){ADs(a,b,c,R(BM,0));}
function ADs(a,b,c,d){a.hQ=b;a.fS=c;a.jn=d;}
function Ei(a){var b;b=a.hQ;return HS(b!==null?b.name:a.fS.name);}
function T3(a,b,c){var d,e,f;d=AJt(c);e=new Uu;e.qh=b;b=a.fS;if(b!==null)b.text().then(Bu(e,"f"),Bu(d,"f"));else{b=a.hQ.getFile();f=new Uv;f.q5=e;f.q6=d;b.then(Bu(f,"f"),Bu(d,"f"));}}
function AJt(b){var c;c=new SI;c.wL=b;return c;}
function AV$(a){var b,c,d,e,f,g,h,i;if(a.fS===null)b=LC(a.jn,Ei(a));else{c=a.jn;b=Ei(a);d=a.fS.size;e=d|0;if(e!==d){f=Ei(a);g=new K;N(g);H(H(g,C(257)),f);$rt_globals.console.info($rt_ustr(M(g))+d);e=0;}if(c===null)f=C(31);else{g=new K;N(g);BV(g,C(36));h=0;while(true){i=c.data;if(h>=i.length)break;if(h>0)BV(g,C(37));H(g,i[h]);h=h+1|0;}BV(g,C(38));f=M(g);}g=new K;N(g);U(H(H(H(H(g,f),C(258)),b),C(259)),e);b=M(g);}return b;}
function AKo(a){return (AEq(Ei(a))*31|0)+AFe(a.jn)|0;}
var ABA=G(0);
function AIv(){B.call(this);this.ie=null;}
function A1n(a){var b=new AIv();AXa(b,a);return b;}
function AXa(a,b){a.ie=b;}
function EG(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ie));}
function CM(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.ie));}
function AUt(a){var b,c;b=a.ie.byteLength;c=new K;N(c);H(U(H(c,C(260)),b),C(261));return M(c);}
function YT(){B.call(this);this.t_=null;}
function DO(a,b){YM(a.t_,b);return 1;}
function G6(){var a=this;B.call(a);a.J=0;a.Z=0;}
function Cb(a,b,c){a.J=b;a.Z=c;}
function AAI(a,b){a.J=b.J;a.Z=b.Z;}
function Q_(a,b){var c;c=BL(a.J,b.J);if(c)return c;return BL(a.Z,b.Z);}
function Nl(){var a=this;B.call(a);a.oO=null;a.nW=null;}
function LH(a){return a.oO.bq;}
function Kx(a){return a.oO.bv;}
function Dx(){var a=this;B.call(a);a.s=null;a.R=0;a.f4=null;a.eJ=null;a.ej=null;a.hP=null;a.gF=0;a.iJ=0;a.i7=0;}
var A5j=0;var A5k=0;var A5c=0;function WN(a){var b=new Dx();AIV(b,a);return b;}
function DW(a){var b=new Dx();Yl(b,a);return b;}
function AIV(a,b){var c;c=R(Ct,1);c.data[0]=AHE(b);Yl(a,c);}
function Yl(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.R=d;EQ(a);}
function I_(a){return a.s.data.length;}
function JC(a,b){return a.s.data[b];}
function Gv(a,b){var c;c=JY(a,b);return c<=0?0:a.ej.data[c-1|0];}
function JY(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.ej!==null&&!a.i7)){Un(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.ej.data[d]=e;d=d+1|0;}a.i7=0;}d=AAe(a.ej,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function NQ(a,b){var c;c=a.s.data;if(!c.length)return null;return c[JY(a,b)];}
function HA(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.R){a.s=R(Ct,0);EQ(a);a.R=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BL(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=YE(g,e,R(Ct,g.data.length-1|0));a.R=a.R-d|0;EQ(a);return;}a.s.data[e]=D4(Fh(Cr(k.v,0,b),Do(k.v,c)),k.bX,k.bG);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=D4(Cr(l.v,0,b),l.bX,l.bG);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=D4(Do(m.v,c),m.bX,m.bG);g=a.s;a.s=AEi(g,e,f,R(Ct,(g.data.length-f|0)+e|0));}a.R=a.R-d|0;EQ(a);}
function IC(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(Dx,[DW(R(Ct,0)),a]);if(b>=a.R)return I(Dx,[a,DW(R(Ct,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(Dx,[DW(K_(c,0,R(Ct,d))),DW(K_(c,d,R(Ct,f-d|0)))]);h=e[d];e=K_(c,0,R(Ct,d+1|0));i=e.data;j=K_(c,d,R(Ct,f-d|0));c=j.data;i[d]=D4(Cr(h.v,0,b),h.bX,h.bG);c[0]=D4(Do(h.v,b),h.bX,h.bG);return I(Dx,[DW(e),DW(j)]);}
function Y7(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}Ma(a,d,b,c);}
function Ma(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Ga(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=R(Ct,1);h.data[0]=AHE(d);a.s=h;}else if(!b&&!c){h=R(Ct,g+1|0);f=h.data;DM(e,0,h,1,g);f[0]=AHE(d);a.s=h;}else{i=f[b];if(c<=0)j=D4(Fh(d,i.v),i.bX,i.bG);else if(c>=J(i.v))j=D4(Fh(i.v,d),i.bX,i.bG);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B0(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=D4(Hf(e),i.bX,i.bG);}f[b]=j;}a.R=a.R
+J(d)|0;EQ(a);}
function OP(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<LM(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function M4(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.f4;if(!(e!==null&&e.data.length>=d)){a.f4=AJ_(d);a.eJ=BI(d);a.gF=1;}Un(a);if(!a.gF)A5k=A5k+1|0;else{f=0;g=0.0;A5j=A5j+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.ej.data[h]=f;Cl(b,i[Ki(j)]);g=g+DJ(b,j.v);a.f4.data[h]=g;a.eJ.data[h]=g+0.5|0;h=h+1|0;}a.R=f;a.gF=0;a.i7=0;}}
function Un(a){var b;b=a.ej;if(!(b!==null&&b.data.length>=a.s.data.length)){a.ej=BI(a.s.data.length);a.i7=1;}}
function Sk(a){a.gF=1;a.hP=null;}
function EQ(a){Sk(a);a.iJ=1;a.i7=1;}
function Y3(a,b,c,d){var e,f,g,h,i,j,k;if(a.hP===null)a.hP=R($rt_arraycls($rt_intcls()),a.s.data.length);e=a.hP.data[d];if(e===null){e=c.data;f=a.s.data[d];Cl(b,e[Ki(f)]);f=f.v;e=BI(J(f)-1|0);c=Gc(f);g=!d?0.0:a.f4.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BM;k=i+1|0;N$(f,c,0,k);h[i]=g+DJ(b,f)+0.5|0;i=k;}a.hP.data[d]=e;}return e;}
function GH(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.gF&&a.eJ!==null))M4(a,c,d);if(b>=a.R)return a.eJ.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BL(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eJ.data[f];}return (Y3(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Gf(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eJ.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GU(a,b){var c;if(b>=a.R)return b+1|0;c=JY(a,b);return a.ej.data[c];}
function Fx(a){var b,c,d,e;b=new K;Gw(b,a.R);c=a.s.data;d=c.length;e=0;while(e<d){BV(b,c[e].v);e=e+1|0;}return M(b);}
function AEh(){A5c=0;}
function Xu(){var a=this;B.call(a);a.fm=null;a.eY=null;}
function AUi(a,b){var c=new Xu();AVj(c,a,b);return c;}
function AVj(a,b,c){a.fm=b;a.eY=c;}
function SM(a,b,c){var d;d=a.fm;if(d===null)return;Yj(a,d,b,c);}
function OO(a,b,c){var d;d=a.fm;if(d===null)return;AAk(a,d,b,c);}
function Yj(a,b,c,d){var e,f,g,h;e=b.eL.b7();while(e.cA()){US(a,e.b8(),c,d);}e=b.fn.b7();while(e.cA()){f=e.b8();g=new Si;g.xs=a;EI(a,g,f,c,d);}h=b.hj.b7();while(h.cA()){e=h.b8();US(a,e.kU,c,d);f=new Sj;f.vw=a;EI(a,f,e.ki,c,d);}b=b.cJ.b7();while(b.cA()){Yj(a,b.b8(),c,d);}}
function US(a,b,c,d){Kt(a,b.eu,c,d);}
function EI(a,b,c,d,e){var f,g;a:{if(c instanceof Hw){f=c.g5;g=new U8;g.qx=a;g.qv=b;g.qu=d;g.qw=e;Fg(f,g);}else{if(!(c instanceof JV)){if(!(c instanceof I6))break a;f=c;EI(a,b,f.jl,d,e);EI(a,b,f.iE,d,e);return;}g=c.hI;f=new U9;f.Av=a;f.Au=b;f.At=d;f.As=e;Fg(g,f);}}if(c!==null){c=c.fC;if(c!==null)b.lg(c,CT(d),CT(e));}}
function Kt(a,b,c,d){var e;e=b.dA;if(e>=c)b.dA=e+d|0;}
function AAk(a,b,c,d){var e,f,g,h;e=b.eL.b7();while(e.cA()){JB(a,(e.b8()).eu,c,d);}e=b.fn.b7();while(e.cA()){f=e.b8();g=new RA;g.tI=a;EI(a,g,f,c,d);}h=b.hj.b7();while(h.cA()){e=h.b8();JB(a,e.kU.eu,c,d);f=new RC;f.yM=a;EI(a,f,e.ki,c,d);}b.eL.oW(new Rz);b.fn.oW(new Ry);b=b.cJ.b7();while(b.cA()){AAk(a,b.b8(),c,d);}}
function JB(a,b,c,d){var e;e=b.dA;if(e>=c)b.dA=e-d|0;}
function K3(){var a=this;D6.call(a);a.c3=0;a.b6=null;a.cX=0;a.Aw=0.0;a.mB=0;}
function JA(){var a=new K3();P9(a);return a;}
function AVs(a,b){return R(HK,b);}
function P9(a){var b;b=AGf(16);a.c3=0;a.b6=R(HK,b);a.Aw=0.75;SP(a);}
function AGf(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fl(a){var b;if(a.c3>0){a.c3=0;b=a.b6;ADH(b,0,b.data.length,null);a.cX=a.cX+1|0;}}
function SP(a){a.mB=a.b6.data.length*a.Aw|0;}
function Mv(a,b){return ZR(a,b)===null?0:1;}
function AAY(a){var b;b=new SQ;b.xG=a;return b;}
function Cn(a,b){var c;c=ZR(a,b);if(c===null)return null;return c.cO;}
function ZR(a,b){var c,d;if(b===null)c=Ru(a);else{d=b.gj();c=Qu(a,b,d&(a.b6.data.length-1|0),d);}return c;}
function Qu(a,b,c,d){var e;e=a.b6.data[c];while(e!==null&&!(e.lq==d&&AG3(b,e.cS))){e=e.cU;}return e;}
function Ru(a){var b;b=a.b6.data[0];while(b!==null&&b.cS!==null){b=b.cU;}return b;}
function MG(a){var b;if(a.og===null){b=new PS;b.iM=a;a.og=b;}return a.og;}
function Ed(a,b,c){var d,e,f,g;if(b===null){d=Ru(a);if(d===null){a.cX=a.cX+1|0;d=SK(a,null,0,0);e=a.c3+1|0;a.c3=e;if(e>a.mB)AAV(a);}}else{e=b.gj();f=e&(a.b6.data.length-1|0);d=Qu(a,b,f,e);if(d===null){a.cX=a.cX+1|0;d=SK(a,b,f,e);e=a.c3+1|0;a.c3=e;if(e>a.mB)AAV(a);}}g=d.cO;d.cO=c;return g;}
function SK(a,b,c,d){var e,f;e=new HK;U3(e,b,null);e.lq=d;f=a.b6.data;e.cU=f[c];f[c]=e;return e;}
function AHN(a,b){var c,d,e,f,g,h,i,j;c=AGf(!b?1:b<<1);d=R(HK,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b6.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.lq&b;j=h.cU;h.cU=e[i];e[i]=h;h=j;}f=f+1|0;}a.b6=d;SP(a);}
function AAV(a){AHN(a,a.b6.data.length);}
function Lb(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b6.data[0];while(e!==null){if(e.cS===null)break a;b=e.cU;d=e;e=b;}}else{f=b.gj();g=a.b6.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.lq==f&&AG3(b,e.cS))){h=e.cU;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.cU=e.cU;else a.b6.data[c]=e.cU;a.cX=a.cX+1|0;a.c3=a.c3-1|0;}if(e===null)return null;return e.cO;}
function AG3(b,c){return b!==c&&!b.bJ(c)?0:1;}
function Ct(){var a=this;B.call(a);a.v=null;a.bX=0;a.bG=0;}
function AHE(a){var b=new Ct();AUS(b,a);return b;}
function D4(a,b,c){var d=new Ct();Z6(d,a,b,c);return d;}
function AUS(a,b){Z6(a,b,0,0);}
function Z6(a,b,c,d){a.v=b;a.bX=c;a.bG=d;}
function Ki(a){return a.bG&3;}
function I7(b,c){return (!b?0:2)+(!c?0:1)|0;}
function LM(a){return J(a.v);}
var Ni=G(K3);
function YR(){var a=this;B.call(a);a.c_=null;a.eV=0;}
var A5l=null;function AFx(a){var b=new YR();AFZ(b,a);return b;}
function AFZ(a,b){a.eV=0;a.c_=b;}
function P2(a,b){var c;if(b.eC)return b;b=B2(b.bn);while(true){if(!B7(b))return null;c=P2(a,B8(b));if(c!==null)break;}return c;}
function Wi(a,b,c){var d,e,f,g;d=M_(a,a.c_,b);if(d===null)return;b=c.ch;e=b===null?A5m:b.cJ;f=c.bn;c=a.c_;if(d===c){if(c.ch===null)c.ch=b;b=new Y6;b.xn=a;Fg(f,b);b=new Y5;b.tG=a;e.e6(b);b=a.c_;b.bn=f;b.ch.cJ=e;b.eC=0;return;}if(!Ev(f)){c=d.g3;if(c!==null){b=new WJ;b.qC=c;Fg(f,b);g=KO(c.bn,d);if(g==(-1))HQ(c.bn,f);else{EB(c.bn,g);AHi(c.bn,g,f);}}}b=d.ch;if(b!==null){b=b.gW;c=new RF;c.rN=b;e.e6(c);g=KO(b.cJ,d.ch);if(g==(-1))HQ(b.cJ,e);else{b.cJ.pq(g);b.cJ.s_(g,e);}}}
function M_(a,b,c){var d,e,f,g;d=b.bT;if(d.bY==c.bY&&d.bV==c.bV?1:0){d=B2(b.bn);while(B7(d)){e=M_(a,B8(d),c);if(e!==null)return e;}return b;}b=B2(b.bn);while(true){if(!B7(b))return null;d=B8(b);f=c.bY;g=c.bV;e=d.bT;if(e.bY<=f&&g<=e.bV?1:0){e=M_(a,d,c);if(e!==null)break;}}return e;}
function Z0(a,b,c){BC(c,b.bT);b=B2(b.bn);while(B7(b)){Z0(a,B8(b),c);}}
function WM(a,b,c){a.eV=0;K5(a,a.c_,b,c);}
function K5(a,b,c,d){var e;if(C7(b)<c)return;a:{if(Dh(b)>c){Ly(b,d);He(b,d);b=B2(b.bn);while(B7(b)){K5(a,B8(b),c,d);}}else{if(!Ml(b,c)){if(a.eV)break a;if(C7(b)!=c)break a;}He(b,d);if(Dh(b)==c&&a.eV)Ly(b,d);e=B2(b.bn);while(B7(e)){K5(a,B8(e),c,d);}if(!a.eV){b.eC=1;a.eV=1;}}}}
function T9(a,b,c){a.eV=0;Mp(a,a.c_,b,c);}
function Mp(a,b,c,d){var e,f,g,h,i,j;if(C7(b)<c)return;e=Dh(b);f=c+d|0;if(e>f){e= -d|0;Ly(b,e);He(b,e);g=B2(b.bn);while(B7(g)){Mp(a,B8(g),c,d);}b.bn=VE(a,b.bn);}else{h=b.bT;if(c<=h.bY&&h.bV<=f?1:0){if(b===a.c_){LG(b,0);Mo(b,0);h=b.ch;if(h!==null)h.cJ.iI();}else{LG(b,(-1));Mo(b,(-1));h=b.ch;if(h!==null){ACC(h);b.ch=null;}}Ij(b.bn);}else{e=Ml(b,c);f=Ml(b,f);if(e&&f)He(b, -d|0);else if(e)Mo(b,c);else{if(!f)return;LG(b,c);He(b, -d|0);}h=B2(b.bn);while(B7(h)){Mp(a,B8(h),c,d);}h=S2(b.bn);g=W9(0);i=new Rd;j=new AA6;j.D8
=i;j.j9=g;while(AAL(h,j)){}if(!j.j9.nE&&!a.eV)b.eC=1;else a.eV=1;b.bn=VE(a,b.bn);}}}
function VE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BG();d=null;e=A5l;f=b.cF;g=b.m;if(e===null)e=A3X;h=R(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}KI(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b1=b.b1+1|0;b=B2(b);while(B7(b)){m=B8(b);if(Dh(m)==C7(m))continue;if(!m.eC){if(d!==null){BC(c,d);d=null;}BC(c,m);}else if(d===null)d=m;else{n=ARG(Ky(Bd(Dh(d),Dh(m)),Be(C7(d),C7(m)),d.bT.fA),d.g3,d.ch);n.eC=1;d=m.ch;if(d===null)d=n;else{ACC(d);d=n;}}}if(d!==null)BC(c,d);return c;}
function AB9(a,b,c,d){var e,f,g,h,i;if((C7(c)-Dh(c)|0)<43)e=Cr(d,Dh(c),C7(c));else{e=Cr(d,Dh(c),Dh(c)+20|0);f=Cr(d,C7(c)-20|0,C7(c));g=new K;N(g);H(H(H(g,e),C(173)),f);e=M(g);}e=AA2(e,C(209),C(262));f=By();g=new K;N(g);h=U(g,b);BN(h,32);h=H(h,c);BN(h,9);H(h,e);Bp(f,M(g));c=B2(c.bn);i=b+1|0;while(B7(c)){AB9(a,i,B8(c),d);}}
function AF6(){A5l=new TZ;}
function AJL(){var a=this;B.call(a);a.bY=0;a.bV=0;a.fA=0;}
function Ky(a,b,c){var d=new AJL();AUP(d,a,b,c);return d;}
function AUP(a,b,c,d){a.bY=b;a.bV=c;a.fA=d;}
function AQY(a,b){var c;if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){c=b;return a.bY==c.bY&&a.bV==c.bV&&a.fA==c.fA?1:0;}return 0;}
function AT6(a,b){var c;b=b;c=BL(a.bY,b.bY);if(!c)c=BL(b.bV,a.bV);return c;}
var TZ=G();
function AOp(a,b,c){var d;b=b;c=c;b=b.bT;c=c.bT;d=BL(b.bY,c.bY);if(!d)d=BL(c.bV,b.bV);return d;}
function Yp(){var a=this;B.call(a);a.bT=null;a.g3=null;a.bn=null;a.ch=null;a.eC=0;}
function ARG(a,b,c){var d=new Yp();AFw(d,a,b,c);return d;}
function AFw(a,b,c,d){a.eC=0;a.bT=b;a.g3=c;a.bn=BG();a.ch=d;}
function AGn(b){return Yw(b,null);}
function Yw(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Z(b);e=Z(b);f=Z(b);g=Z(b);h=Z(b);i=Ky(d,e,f);j=new Yp;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AFw(j,i,null,l);m=0;while(m<g){l=Yw(b,c);l.g3=j;BC(j.bn,l);m=m+1|0;}return j;}
function ADl(b,c,d){var e,f,g,h,i;a:{e=b.bT;f=b.bn;g=e.bY;h=e.bV;i=e.fA;Bq(c,g);GP(c,h,i);Bq(c,f.m);if(d!==null){e=b.ch;if(e!==null&&ABx(d,e)){g=(NX(d,b.ch)).bp;break a;}}g=(-1);}Bq(c,g);b=B2(f);while(B7(b)){ADl(B8(b),c,d);}}
function Dh(a){return a.bT.bY;}
function C7(a){return a.bT.bV;}
function LG(a,b){a.bT.bY=b;}
function Mo(a,b){a.bT.bV=b;}
function Ly(a,b){var c;c=a.bT;c.bY=c.bY+b|0;}
function He(a,b){var c;c=a.bT;c.bV=c.bV+b|0;}
function Ml(a,b){return Dh(a)<=b&&b<C7(a)?1:0;}
function AKx(a){var b,c,d,e,f;b=a.bT;c=b.bY;d=b.bV;e=b.fA;b=new K;N(b);BN(b,40);BN(U(H(U(H(U(b,c),C(37)),d),C(37)),e),41);b=M(b);c=a.eC;f=new K;N(f);Je(H(H(f,b),C(37)),c);return M(f);}
function ALa(a,b){var c;if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){c=b;return BT(a.bT,c.bT)&&BT(a.bn,c.bn)?1:0;}return 0;}
var I9=G(0);
function GI(){var a=this;B.call(a);a.cS=null;a.cO=null;}
function A5n(a,b){var c=new GI();U3(c,a,b);return c;}
function U3(a,b,c){a.cS=b;a.cO=c;}
function AUv(a,b){var c,d;if(a===b)return 1;if(!IX(b,I9))return 0;a:{b:{c:{d:{c=b;b=a.cS;if(b!==null){if(!b.bJ(c.cS))break c;else break d;}if(c.cS!==null)break c;}b=a.cO;if(b!==null){if(!b.bJ(c.cO))break c;else break b;}if(c.cO===null)break b;}d=0;break a;}d=1;}return d;}
function HK(){var a=this;GI.call(a);a.lq=0;a.cU=null;}
function Nf(){var a=this;K9.call(a);a.wK=null;a.qy=null;}
function ADp(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.wK;e=0;f=0;g=a.qy;a:{while(true){if((e+32|0)>f&&DZ(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bd(Ce(b)+j|0,i.length);OQ(b,d,j,f-j|0);e=0;}if(!DZ(c)){k=!DZ(b)&&e>=f?A4G:A4F;break a;}i=g.data;j=Bd(Ce(c),i.length);l=new We;l.pJ=b;l.xa=c;k=AEC(a,d,e,f,g,0,j,l);e=l.tM;j=l.uC;if(k===null){if(!DZ(b)&&e>=f)k=A4G;else if(!DZ(c)&&e>=f)k=A4F;}AB_(c,g,0,j);if(k!==null)break;}}Fj(b,b.Y-(f-e|0)|0);return k;}
var P1=G(Nf);
function AEC(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(NI(h,2))break a;i=A4F;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!N3(l)){if((f+3|0)>g){j=j+(-1)|0;if(NI(h,3))break a;i=A4F;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CO(l)){i=El(1);break a;}if
(j>=d){if(DZ(h.pJ))break a;i=A4G;break a;}c=j+1|0;m=k[j];if(!Dd(m)){j=c+(-2)|0;i=El(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(NI(h,4))break a;i=A4F;break a;}k=e.data;o=EF(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tM=j;h.uC=f;return i;}
var IS=G(En);
var Op=G();
function ASg(a,b){return b.text();}
function Or(){var a=this;B.call(a);a.sy=null;a.sx=null;}
function ARL(a,b){var c,d,e,f;c=a.sy;d=a.sx;e=b.length;f=new OU;f.y2=b;c.i(AMn((AI_(e,f)).jK,AAS(d)));}
var Oq=G();
function ATu(a,b){AGd(b);}
function IH(){var a=this;B.call(a);a.br=null;a.DX=null;a.dX=null;a.lt=null;a.kG=null;a.dV=null;a.ny=null;a.z_=null;a.oX=null;}
function A5o(a,b,c,d,e,f){var g=new IH();Ln(g,a,b,c,d,e,f);return g;}
function Ip(){var b,c,d,e,f,g,h,i,j;b=new IH;c=new JR;d=new Ha;Fv();KB(d,A5p);L6(c,d,BW(A48),BW(A5q),BW(A5r),BW(A48),BW(A5s),BW(A5t),BW(A5u),BW(A5v),BW(A5w),BW(A5x));e=AId(S(C(263)));AD0();f=(A5y.fl()).data;g=f.length;h=R(J6,g);i=h.data;j=0;while(j<g){i[j]=f[j].nf;j=j+1|0;}Ln(b,c,e,h,AIU(S(C(264)),S(C(265)),S(C(266)),S(C(267))),E7(),AC7(S(C(268)),S(C(269)),S(C(270)),S(C(271))));return b;}
function T$(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IH;c=new JR;d=new Ha;AMw();KB(d,A5z);L6(c,d,BW(A5A),BW(A5B),BW(A5C),BW(A5A),BW(A5D),BW(A5E),BW(A5F),BW(A5G),BW(A5H),BW(A5I));e=AId(S(C(272)));S3();f=(A5J.fl()).data;g=f.length;h=R(J6,g);i=h.data;j=0;while(j<g){i[j]=f[j].kC;j=j+1|0;}k=AIU(S(C(273)),S(C(274)),S(C(275)),S(C(276)));l=new IJ;d=new IR;AS7();m=A5K;N8(d,m,A5L,A5M,A5N,A5O,m);Lv(l,d,AFO(),AGj(S(C(277)),S(C(278)),S(C(279))),AFO(),AGG(1,0.17499999701976776),A5P,A5Q);Ln(b,c,e,h,k,l,AC7(S(C(268)),S(C(269)),
S(C(270)),S(C(280))));return b;}
function Ln(a,b,c,d,e,f,g){var h;h=d.data;a.ny=E3(C(172),17.0);a.z_=E3(C(156),15.0);a.oX=A3o(C(172),15.0,0);a.br=b;a.DX=c;a.lt=d;a.kG=e;if(h.length>=15){a.dX=f;a.dV=g;return;}b=new BR;X(b);L(b);}
function VV(a,b){if(b===null)b=a.br.d9;return b;}
function J_(){var a=this;CL.call(a);a.dM=null;a.ne=null;}
function A1Y(a){var b=new J_();AGv(b,a);return b;}
function AGv(a,b){var c,d,e,f;Kw(a,b,0);c=Px(a.bl);a.ne=c;d=KP(a.r,c);a.dM=d;Mw(a.r,d);c=b.p.bH;d=new XB;d.qZ=a;Bc(c,d);c=b.p.bH;d=new HG;e=a.dM;BK(e);f=new Xz;f.zW=e;Ie(d,b,f);Bc(c,d);Sa(a.dM,b.p,0);b=b.p.dd;c=new XA;c.wn=a;Bc(b,c);Hg(a);}
function AVN(a,b){if(JP(a.bl,b))Lx(a.dM);}
function AZe(a,b){return IL(a.dM,b);}
function AM8(a){Hp(a);Ia(a.dM);Jw(a.bl);}
function A0j(a){return Gn(0);}
function AJ6(a,b,c){var d;Io(a,b,c);d=a.dM;L3(d,d.h,b,c);}
function AUO(a,b){BK(b);Id(a.ne,b);Ht(a.dM,b);}
function AHR(a,b){if(b.bk!=121)return 0;return 1;}
function ADr(a,b){var c,d,e;if(DC(a.r,a.dM)){c=a.ne;b=b.g;d=a.dM;e=new Q2;e.s3=a;Gz(c,b,d,a,d,a,e);}return 1;}
function AGT(){var a=this;Ci.call(a);a.xc=null;a.oh=null;a.jG=null;a.ea=null;a.lf=null;a.g4=null;a.ep=null;a.i1=null;a.pG=null;a.it=null;a.pm=null;a.pn=null;a.oF=null;a.xz=null;a.Be=null;a.rX=0;}
function A1$(a){var b=new AGT();AWF(b,a);return b;}
function AWF(a,b){var c,d,e,f;DG(a,b);c=(Ip()).br.d9;a.xc=c;a.oh=AJG(c);a.jG=new Bg;a.ea=Ku();a.lf=Ku();a.g4=Sb(0,0,3,3);a.ep=HZ(0,0,300,300);a.i1=AVv();d=R(BM,4);e=d.data;e[0]=C(214);e[1]=C(182);e[2]=C(228);e[3]=C(227);a.pG=d;a.it=R(J1,e.length);c=b.p.bO;f=new SU;f.ff=a;Bc(c,f);c=b.p.bH;f=new X1;f.Ax=a;Bc(c,f);c=b.p.nO;f=new X0;f.rr=a;Bc(c,f);c=b.p.gr;f=new XZ;f.B2=a;Bc(c,f);c=b.p.lF;f=new XY;f.CQ=a;Bc(c,f);c=b.p.dd;f=new XX;f.Di=a;Bc(c,f);b=b.p.fc;c=new XW;c.zj=a;Bc(b,c);a.pm=ABp(a,1);a.pn=ABp(a,0);Rf(a,a.ea,
a.pm);Rf(a,a.lf,a.pn);a.oF=ACz(a,0);a.xz=ACz(a,1);FB(a.ep,a.oF);FK(a.ep);Hq(a.ep,Dq(169,183,198));E9(a.ep,a.xc);Cu(a.ea.V,1.0,1.0,1.0,1.0);E9(a.ea,a.ep.bj);BS(a.g4.bj,a.oh);}
function Rf(a,b,c){FB(b,c);FK(b);}
function RE(a,b){Ii(DF(),0.5+DF()*0.5,0.5+DF()*0.5,1.0,b.V);}
function ABp(a,b){var c,d;c=DV(a.C.N,200,100,b);Hl(c,C(281),11.0);BP(c,C(282),0.0,20.0);JM(c,255,0,0);BP(c,C(282),0.25,40.0);JM(c,0,255,0);BP(c,C(282),0.5,60.0);JM(c,0,0,255);BP(c,C(282),0.75,80.0);d=CS(a.C.N);CJ(d,c);Es(c);return d;}
function ACz(a,b){var c,d,e,f;c=DV(a.C.N,255,100,b);Hl(c,C(172),10.0);d=By();e=$rt_str(c.c8.font);f=new K;N(f);H(H(f,C(283)),e);Bp(d,M(f));DJ(c,C(284));BP(c,C(284),0.0,20.0);BP(c,C(284),0.25,40.0);BP(c,C(284),0.5,60.0);BP(c,C(284),0.75,80.0);e=CS(a.C.N);CJ(e,c);Es(c);return e;}
function AKm(a,b){var c;a.rX=a.rX+1|0;c=b/5.0;Ii(c-(c|0),1.0,1.0,1.0,a.g4.V);return ZV(a.i1,b);}
function AL0(a){var b,c,d,e,f,g,h,i;b=a.C.N;Ey(b,a.oh);c=a.it.data;d=c.length;e=0;while(e<d){YK(c[e],b,0,0);e=e+1|0;}f=a.ep;g=f.u;g.b=(a.jG.b-f.t.b|0)-5|0;g.a=0;B5(b,0);h=0;while(h<7){f=a.ep;Ex(f,b,a.oF,Ba(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.ep;f.u.b=(a.jG.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.xz;f=a.ep;f.u.a=Ba(h,10+((10*f.t.a|0)/15|0)|0)+5|0;R0(f,b,g,1);h=h+1|0;}R0(a.ea,b,a.pm,1);B5(b,1);g=a.lf;f=a.pn;i=g.u;h=i.a;d=i.b;g=g.t;Ge(b,b.km);Gp(b.km,b.X,h,d,g,b.c2);Nw(b.km,b.X,f);FO(b);B5(b,0);f=
a.Be;if(f!==null)UW(a.g4,b,f,0,0,0.0);AAT(a.i1,b,new Bg);Mx(b,C(285));}
function AN$(a,b,c){var d,e,f,g,h,i,j,k;d=By();e=new K;N(e);H(H(e,C(286)),b);Bp(d,M(e));e=By();f=new K;N(f);E2(H(f,C(287)),c);Bp(e,M(f));g=Cd(30.0,c);h=Cd(10.0,c);i=0;while(true){j=a.it.data;if(i>=j.length)break;k=1+i|0;j[i]=Sb(Ba(h,k)+Ba(g,i)|0,g,g,g);RE(a,a.it.data[i]);i=k;}V(a.g4.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.ea;V(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);V(a.lf.u,(b.a/2|0)+10|0,50);Cs(a.jG,b);}
function V1(a,b){var c,d,e,f,g;c=By();d=!b.ji?C(288):C(289);e=b.d8;f=b.bk;g=b.x_;b=new K;N(b);Je(H(U(H(H(H(b,d),e),C(290)),f),C(291)),g);Bp(c,M(b));return 0;}
function ZZ(){var a=this;Ci.call(a);a.Dk=null;a.kE=null;a.iv=null;a.hE=null;a.dc=null;a.dN=null;a.mt=null;a.mi=null;a.i9=0;a.ib=null;a.ia=null;}
function Qv(a,b,c){FB(b,c);FK(b);}
function ACS(a,b,c,d,e,f){var g,h;g=DV(f,c,120,b);Cl(g,e);e=!b?C(292):C(293);h=new K;N(h);H(H(H(h,e),d),C(154));d=M(h);BP(g,d,0.0,20.0);BP(g,d,0.25,40.0);BP(g,d,0.5,60.0);BP(g,d,0.75,80.0);BP(g,d,1.0,100.0);h=CS(f);CJ(h,g);Es(g);return h;}
function APt(a,b){return 0;}
function ATY(a){var b,c,d,e,f,g,h,i;b=a.C.N;Ey(b,a.kE);B5(b,0);c=a.iv;d=c.b;e=a.hE;f=d-e.b|0;g=c.a-e.a|0;Bs(b,0,0,e,a.dc.bj);Bs(b,g,0,a.hE,a.dN.bj);Bs(b,0,f,a.hE,a.dc.V);Bs(b,g,f,a.hE,a.dN.V);c=a.dc;e=c.u;h=e.b;i=((a.iv.b*3|0)/4|0)-(c.t.b/2|0)|0;Ik(c,b,e.a,h,a.ib,0,1);c=a.dc;Ik(c,b,c.u.a,i,a.ib,1,1);c=a.dN;Ik(c,b,c.u.a,h,a.ia,0,0);e=a.dN;Ik(e,b,e.u.a,i,a.ia,1,0);Mx(b,C(285));}
function AU5(a,b,c){var d,e;Cs(a.iv,b);V(a.hE,b.a/2|0,b.b/2|0);d=a.iv.b/4|0;e=a.dc;d=d-(e.t.b/2|0)|0;V(e.u,(b.a/4|0)-(a.i9/2|0)|0,d);V(a.dN.u,((b.a*3|0)/4|0)-(a.i9/2|0)|0,d);}
function Ww(){var a=this;CL.call(a);a.w_=null;a.eZ=null;a.dy=null;a.nQ=null;}
function ANF(a,b,c){var d;d=Hc(a.r,a.nQ);Jn(a.eZ,d,a.r);Jn(a.dy,d,a.r);}
function QV(b){return IN(b,AFT());}
function IN(b,c){var d;d=Lf();NP(d,MV(b,JO(c,25)),!b?null:IN(b-1|0,c));NP(d,MV(b,JO(c,20)),!b?null:IN(b-1|0,c));NP(d,MV(b,JO(c,15)),!b?null:IN(b-1|0,c));NP(d,MV(b,JO(c,10)),!b?null:IN(b-1|0,c));return GL(d);}
function MV(b,c){var d;if(b){d=new K;N(d);H(H(U(d,b),C(28)),c);c=M(d);}return c;}
function NP(b,c,d){if(d!==null)Fs(b,c,d);else{d=new Uk;d.rd=c;DS(b,c,d);}}
function AMz(a,b,c){var d,e;Io(a,b,c);b=a.r.b2;d=Et(a.eZ);e=Et(a.dy);MN(a.eZ,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);MN(a.dy,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AUK(a){var b,c,d,e,f,g,h,i;Hp(a);b=a.C.N;B5(b,1);c=a.w_;d=a.r;e=d.b2;V(c.m7,e.a,Cd(2.0,d.cb));V(c.nz,Cd(2.0,d.cb),e.b);Fv();f=A5w;g=d.bU;h=e.b/2|0;i=c.m7;Bs(g,0,h-(i.b/2|0)|0,i,f);g=d.bU;h=e.a/2|0;c=c.nz;Bs(g,h-(c.a/2|0)|0,0,c,f);LQ(a.eZ,a.r);LQ(a.dy,a.r);Jw(a.bl);B5(b,0);}
function AOa(a,b){var c,d;c=Nn(a.eZ,b.g,a.r.cH);d=Nn(a.dy,b.g,a.r.cH);return !c&&!d?0:1;}
function AKT(a,b,c,d){var e,f;e=NK(a.eZ,b.g,c,d);f=NK(a.dy,b.g,c,d);return !e&&!f?0:1;}
function ZA(){CL.call(this);this.j8=null;}
function ALQ(a,b,c){if(b===0.0)X9(a);}
function X9(a){var b,c,d,e,f,g,h,i;b=a.j8;if(b!==null){Kh(a.bl,b);No(b);}b=(Ip()).dX;c=A3i(a.r,new T7);d=E3(C(156),14.0);e=ANE();f=0;while(f<300){g=De(f);h=new RQ;h.zD=C(294);h.zA=g;h.zB=C(295);Vh(e,C(294),g,C(295),h);f=f+1|0;}V$(c,ABX(e));Vc(c,b,d);g=ADa(a.r);i=J$(c,a.r);Hd(i,b.ml,b.n6);KR(g,i);GK(g,b);FE(g,C(146));a.j8=g;Gt(a.bl,g);PW(a);}
function AK8(a,b,c){Io(a,b,c);PW(a);}
function PW(a){var b,c,d;b=a.r.b2;EP(a.j8,BJ((b.a*2|0)/10|0,(b.b*4|0)/10|0),BJ((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.j8;b=AGF(c.U.j);d=new K;N(d);H(H(d,C(296)),b);FE(c,M(d));}
function VY(){var a=this;HB.call(a);a.lG=null;a.hu=null;a.fX=null;a.jJ=null;a.q$=null;a.jE=null;a.hG=null;a.hh=null;a.k$=0;a.ht=0;}
function O4(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.hu.m>0){d=DF();e=a.hu;f=d*(e.m-1|0)|0;e=EB(e,f);EB(a.fX,f);f=a.ht;g=e.t;a.ht=f-Ba(g.a,g.b)|0;IK(a.lG,e.dn);}c=c+1|0;}}
function LD(a,b){var c,d,e,f,g,h,i,j;c=JZ(a.r);Cl(c,a.jJ);d=0;while(d<b){e=JO(a.jE,1+(DF()*19.0|0)|0);f=Ku();g=f.dn;h=a.lG;BK(c);i=new Qq;i.s8=c;BS(g,J9(h,e,i));(Uj(DF(),1.0,1.0,f.bj)).bC=0.5;h=f.u;g=f.dn;V(h,g.bm|0,g.bs|0);h=f.t;g=f.dn;V(h,g.bd|0,g.bC|0);BC(a.fX,e);BC(a.hu,f);j=a.ht;h=f.t;a.ht=j+Ba(h.a,h.b)|0;d=d+1|0;}a.hh=Mj(a.lG);}
function AYP(a){var b,c,d,e,f,g,h,i;Hp(a);b=a.C.N;B5(b,1);c=a.r.bU;if(a.fX.m){d=a.hh;d=Hx(c,d.a,d.b);Cl(d,a.jJ);e=a.jJ.dm;Bs(c,0,0,a.hh,a.q$);f=0;while(f<a.fX.m){g=Bw(a.hu,f);h=Bw(a.fX,f);g=g.dn;BP(d,h,g.bm,g.bs+e);f=f+1|0;}g=a.hG;if(!(g!==null&&Cc(g)==a.hh.a&&Dg(a.hG)==a.hh.b))a.hG=Cv(a.hG,CS(c));CJ(a.hG,d);Es(d);i=0;while(i<a.fX.m){d=Bw(a.hu,i);Hq(d,CH(0));Ex(d,c,a.hG,0,0);i=i+1|0;}}B5(b,0);}
function AKg(a,b){var c,d;if(a.k$){c=a.hh;d=Bd(Ba(c.a,c.b),2211840);if(a.ht/d<=0.7)LD(a,Gg(a.jE,5));else O4(a,Gg(a.jE,5));}return a.k$;}
function RW(){var a=this;Ci.call(a);a.eq=null;a.hx=null;a.iu=null;a.n$=null;a.eU=0;a.tt=0;a.q_=null;a.lU=0;a.vO=0;a.wb=null;a.yw=null;}
function AJ5(a){var b,c;b=a.eU;c=new K;N(c);U(H(c,C(297)),b);$rt_globals.console.info($rt_ustr(M(c)));Ey(a.eq,a.q_);J3(a.iu,a.eU,0,Hj(a),5000,a.n$.a,20);B5(a.eq,1);Ur(a.iu,a.eq);B5(a.eq,0);b=a.eU;c=new K;N(c);U(H(c,C(297)),b);$rt_globals.console.info($rt_ustr(M(c)));AAr(a.hx,a.eU/a.lU|0,a.eq);ZP(a.hx,a.eU,Hj(a),a.yw,a.eq);}
function ASL(a,b,c){a.n$=b;Rx(a.hx,BJ(0,0),50,Hj(a),c);R2(a.hx,a.eq,0,Hj(a));}
function TM(a){return 5000-Hj(a)|0;}
function Hj(a){return Bd(a.tt,a.n$.b);}
function D2(){var a=this;Ci.call(a);a.pd=null;a.hK=null;a.AQ=0.0;}
function A5R(a){var b=new D2();Ju(b,a);return b;}
function Ju(a,b){DG(a,b);a.pd=AHv(0,0,64);a.hK=new Bg;V7(b.b5,Jy(BH(a)));}
function Y9(a){Ey(a.C.N,a.pd);}
function RS(a,b,c){Cs(a.hK,b);a.AQ=c;}
var Qt=G(D2);
var Wd=G(CL);
function G4(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.C.b5;f=new Qp;f.BO=a;f.sP=b;g=R(B,1);h=g.data;i=BI(1);i.data[0]=b;h[0]=i;CQ(e,f,C(298),g);d=d+1|0;}}
function ACg(a,b){var c,d,e,f,g,h;c=b.data;d=By();e=c[0];f=new K;N(f);H(H(f,C(299)),e);Bp(d,M(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((KK(b,1)).ie));d=By();e=c[1];if(b===null)f=C(31);else{f=new K;N(f);BV(f,C(36));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BV(f,C(37));U(f,c[g]);g=g+1|0;}BV(f,C(38));f=M(f);}h=new K;N(h);H(H(H(H(h,C(300)),e),C(301)),f);Bp(d,M(h));}
function VB(){var a=this;D2.call(a);a.eS=null;a.gh=null;a.mW=null;a.zm=null;a.px=null;}
function ANh(a,b){b=b/5.0;Ii(b-(b|0),1.0,1.0,1.0,a.gh.V);return 0;}
function AUA(a){Y9(a);Ex(a.eS,a.C.N,a.zm,0,0);UW(a.gh,a.C.N,a.mW,0,0,0.0);Mx(a.C.N,C(285));}
function A0h(a,b,c){var d,e,f;RS(a,b,c);V(a.gh.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.eS;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function RU(){var a=this;D2.call(a);a.gz=null;a.qd=null;a.lR=null;a.j2=null;a.jm=null;}
function A0N(a){var b,c,d,e,f,g;Y9(a);b=a.C.N;c=a.j2;Lu(b,c.a,c.b,a.jm);b=a.gz;c=a.qd;d=a.hK;e=a.C.N;f=0;while(true){g=0;while(true){Ex(b,e,c,g,f);g=g+Cc(c)|0;if(g>=d.a)break;}f=f+Dg(c)|0;if(f>=d.b)break;}FY(a.C.N);}
function AM3(a,b,c){RS(a,b,c);V(a.jm,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function Zp(){var a=this;Ci.call(a);a.eA=null;a.nX=null;a.gk=null;a.ca=null;a.e5=0;a.h$=null;a.fp=0;a.Cf=20;a.D0=11;a.CM=220;a.lx=null;a.Du=5000;a.hU=0;a.gv=null;}
function ARN(a){var b,c,d,e,f,g,h;b=a.h$;c=a.fp;d=a.lx;J3(b,c,0,d.b,5000,d.a,20);B5(a.eA,1);Ur(a.h$,a.eA);if(a.ca===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BP(a.nX,De(e),0.0,c);}b=CS(a.eA);a.ca=b;CJ(b,a.nX);}if(a.fp<=a.e5)while(true){f=a.e5;if(f<=a.fp)break;a.e5=f-20|0;b=a.gk;g=a.hU-1|0;a.hU=g;BP(b,De(g),0.0,20.0);Jt(a.ca,a.gk,0,a.e5%220|0);EH(a.gk);}else while(a.e5<(a.fp-20|0)){b=a.gk;g=a.hU+1|0;a.hU=g;BP(b,De((g+11|0)-1|0),0.0,20.0);Jt(a.ca,a.gk,0,a.e5%220|0);EH(a.gk);a.e5=a.e5+20|0;}b=HZ(0,0,Cc(a.ca),Dg(a.ca));Il(b,
0,0,Cc(a.ca),Dg(a.ca));Hq(b,a.gv.data[0]);E9(b,a.gv.data[1]);Ex(b,a.eA,a.ca,400,0);g=a.fp%220|0;f=Bd(Dg(a.ca)-g|0,200);d=HZ(0,0,Cc(a.ca),f);Il(d,0,g,Cc(a.ca),f);Hq(d,a.gv.data[0]);E9(d,a.gv.data[1]);Ex(d,a.eA,a.ca,0,0);h=HZ(0,f,Cc(a.ca),(Dg(a.ca)-f|0)-20|0);Il(h,0,0,Cc(a.ca),(Dg(a.ca)-f|0)-20|0);Hq(h,a.gv.data[1]);E9(h,a.gv.data[0]);Ex(h,a.eA,a.ca,0,0);}
function AUM(a,b,c){Cs(a.lx,b);}
function AYu(a,b){return 0;}
function Y1(a){return 5000-a.lx.b|0;}
function J4(){D2.call(this);this.d5=0;}
function YJ(a){var b,c;b=a.C.b5;c=new Tk;c.v$=a;QS(b,c,VD(a));}
function PU(a){var b,c,d,e;b=a.d5+1|0;a.d5=b;c=Jy(F(J4));d=new K;N(d);H(H(U(H(d,C(302)),b),C(28)),c);e=M(d);c=a.C.b5;d=new UN;d.wi=e;SC(c,e,d,VD(a));}
function VD(a){var b;b=new X4;b.Ah=a;return b;}
function AN0(a,b,c,d){a:{switch(c){case 0:break;case 2:PU(a);break a;default:break a;}YJ(a);}return 1;}
function RH(){var a=this;Ci.call(a);a.s4=null;a.f5=null;a.ot=null;a.i3=null;}
function ASn(a){var b;b=a.C.N;Ey(b,a.s4);Ex(a.f5,b,a.ot,0,0);}
function AXv(a,b,c){var d,e,f;d=a.f5;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function GS(){var a=this;Ci.call(a);a.tR=null;a.cg=null;a.d2=null;a.de=null;a.e$=null;a.ez=null;}
function Ob(a,b){var c,d;DG(a,b);a.tR=CH(20);a.cg=RD();a.d2=new Bg;a.de=new Bg;a.e$=new Bg;a.ez=new Bg;c=b.p.bH;d=new AA1;d.B7=a;Bc(c,d);Bc(b.p.bO,a);b=a.cg.bj;Fv();BS(b,A48);BS(a.cg.V,A49);}
function AD2(a){var b,c,d;b=a.C.N;Ey(b,a.tR);c=a.cg;d=c.u;Bs(b,d.a,d.b,c.t,c.bj);B5(b,1);c=a.cg;d=c.u;AC0(b,d.a,d.b,c.t,a.d2,a.de,a.e$,a.ez,c.V);B5(b,0);}
function AWC(a,b){return 0;}
var Sm=G(GS);
function AYi(a,b,c){var d,e,f;d=a.cg;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);V(a.d2,0,0);V(a.de,Bd(b.a,b.b),Bd(b.a,b.b));b=a.e$;d=a.d2;V(b,d.a,d.b+20|0);b=a.ez;d=a.de;V(b,d.a,d.b+40|0);}
function AZb(a,b){var c,d,e;Cs(a.d2,b.g);b=a.de;c=a.cg;d=c.u;e=d.a;c=c.t;V(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.e$;c=a.d2;V(b,c.a,c.b+20|0);b=a.ez;c=a.de;V(b,c.a,c.b+40|0);return 0;}
function Sl(){var a=this;GS.call(a);a.fK=null;a.f6=null;}
function A0u(a,b){var c;c=a.de;b=b.g;c.b=b.b-50|0;a.ez.b=b.b+100|0;return 1;}
function ALN(a){var b,c,d,e,f,g,h;b=Be(a.d2.a,a.e$.a);c=Bd(a.de.a,a.ez.a);d=Bd(a.d2.b,a.de.b)-50|0;e=Be(a.e$.b,a.ez.b)+50|0;G7(a.cg,b,d,c-b|0,e-d|0);AD2(a);f=a.cg.u.a-10|0;Zr(a,a.C.N,10,f,a.d2,a.e$);g=a.cg;h=g.u.a+g.t.a|0;Zr(a,a.C.N,h,f,a.de,a.ez);}
function Zr(a,b,c,d,e,f){var g;V(a.fK,c,a.cg.u.b);V(a.f6,d,e.b-a.cg.u.b|0);g=a.fK;Bs(b,g.a,g.b,a.f6,a.cg.bj);V(a.fK,c,e.b);V(a.f6,d,f.b-e.b|0);e=a.fK;Bs(b,e.a,e.b,a.f6,a.cg.V);V(a.fK,c,f.b);e=a.f6;g=a.cg;V(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.fK;Bs(b,e.a,e.b,a.f6,a.cg.bj);}
function AKE(a,b,c){}
function WZ(){var a=this;CL.call(a);a.C3=3;a.wZ=null;a.j0=null;a.jZ=null;}
function AZg(a,b,c){if(b===0.0)ABt(a);}
function ABt(a){var b;YF(a,a.j0);YF(a,a.jZ);a.j0=PV(a,0.5,0,C(303));a.jZ=PV(a,1.0,1,C(304));Gt(a.bl,a.j0);Gt(a.bl,a.jZ);b=a.r.b2;EP(a.jZ,BJ((b.a*2|0)/10|0,(b.b*2|0)/10|0),BJ((b.a*7|0)/10|0,(b.b*7|0)/10|0));EP(a.j0,BJ(b.a/10|0,b.b/10|0),BJ((b.a*6|0)/10|0,(b.b*6|0)/10|0));}
function YF(a,b){if(b!==null){Kh(a.bl,b);No(b);}}
function PV(a,b,c,d){var e,f,g;e=ADa(a.r);f=new Py;g=new Q8;g.sa=e;g.r_=d;Lq(f);f.lC=new BY;f.o1=new Bg;f.wG=g;f.ra=b;if(c){d=J$(f,a.r);Hd(d,A5S,A5T);f=d;}KR(e,f);GK(e,E7());Zl(e,a.wZ,3.0);return e;}
function Ee(){CL.call(this);this.gU=null;}
function A2x(a){var b=new Ee();JQ(b,a);return b;}
function JQ(a,b){G0(a,b);Bc(a.r.eh,a);BS(a.ee,CH(43));}
function AUk(a){return ASD();}
function AOh(a){return 1;}
function Ny(a,b){GK(a.gU,b);}
function W8(a,b){var c,d,e;c=a.r.b2;d=!a.oG()?0:UA(b.Q);e=c.b-d|0;EP(b,BJ(c.a/20|0,d+(e/20|0)|0),BJ((c.a*9|0)/10|0,(e*9|0)/10|0));}
function AYY(a,b,c){if(b===0.0){a.gU=A3p(a.r,a.iQ());Ny(a,E7());if(a.oG())FE(a.gU,W$(BH(a)));Gt(a.bl,a.gU);a.j$(a.gU);}}
function PR(){var a=this;Ee.call(a);a.ly=null;a.ex=null;a.C5=null;}
function AUg(a,b){return IL(a.ex,b);}
function AK_(a){var b;b=KP(a.r,a.ly);a.ex=b;a.C5=Sa(b,a.C.p,1);AI9(a.ex);Mw(a.r,a.ex);return a.ex;}
function AS9(a){return 0;}
function A0w(a,b){W8(a,b);Hg(a);}
function AQS(a,b){BK(b);Id(a.ly,b);Ht(a.ex,b);Ny(a,b.dX);}
function AQg(a,b){JP(a.bl,b);}
function V2(){B.call(this);this.u4=null;}
function AYM(a,b){DO(a.u4,null);return 0;}
var PY=G(0);
function QZ(){var a=this;Ee.call(a);a.c4=null;a.oN=null;a.l5=null;a.iT=null;}
function APe(a){var b,c,d,e,f;b=new Qf;c=a.bl;ES(b);b.f7=Px(c);d=AQf(c.dF);b.f9=d;b.ke=J$(d,c.dF);e=new O3;ES(e);d=new BY;ANr();AIP(d,A4_);e.zr=d;b.nZ=e;f=KP(c.dF,b.f7);b.fG=f;b.yR=a;Vb(b,I(CB,[b.ke,b.nZ,f]));b.rf=Gn(1);a.c4=b;b=AYb(C(305),0);d=new Q4;d.zo=a;b.i2=d;Mr(a.c4.f9,b);return a.c4;}
function Q6(a){var b,c;b=a.C.b5;c=new AA4;c.t3=a;LE(b,c);}
function AO9(a,b){W8(a,b);Hg(a);}
function AWY(a,b){var c;Ny(a,b.dX);c=a.c4;AAN(c.f9,b);X_(c.f9,c.ke);Id(c.f7,b);Ht(c.fG,b);}
function ACu(a,b){HP(a.c4.fG,b);b=a.c4;Fy(b.f7.bW.dF,b.fG);}
function ABn(){var a=this;Ci.call(a);a.r4=null;a.l$=null;a.e3=null;a.n9=null;a.l8=0.0;a.gK=null;a.uP=null;a.sB=null;a.wA=null;a.xk=null;a.rl=null;a.pD=null;a.AJ=null;a.vd=null;a.k8=null;}
var A5U=0;function A2a(a){var b=new ABn();ASc(b,a);return b;}
function ASc(a,b){var c,d,e;DG(a,b);a.r4=new BY;a.l$=ACy(1.0,0.0,0.0,1.0);a.e3=RD();a.n9=new Bg;a.l8=3.1415927410125732;c=AIs();a.gK=c;a.uP=Hv(c,1.25);a.sB=Hv(a.gK,1.3333333730697632);a.wA=Hv(a.gK,1.5);a.xk=Hv(a.gK,1.6666666269302368);a.rl=Hv(a.gK,2.0);a.pD=ACy(a.l8/24.0,15.0,3.0,0.5);c=ACy(a.l8/12.0,25.0,3.0,0.5);a.AJ=c;a.vd=DN([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.k8=I(BY,[a.gK,a.uP,a.sB,a.wA,a.xk,a.rl,a.pD,c]);c=b.p.bH;d=new Qb;d.DY=a;Bc(c,d);Bc(b.p.bO,a);b=a.e3.V;Fv();BS(b,A48);G7(a.e3,0,0,600,60);e
=ME(0.5,0.375);I5(0.375,e);I5(0.375,I5(3.0,ME(e,3.0)));Hv(AIs(),3.0);}
function A0p(a,b,c){var d,e,f;Cs(a.n9,b);d=a.e3;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Hv(b,c){var d;d=new BY;TX(b,c,d);return d;}
function AIs(){var b;b=new BY;Lg(b);return b;}
function AVG(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.C.N;Ey(b,a.r4);B5(b,1);c=a.e3;d=c.u.a;e=c.t.b/2|0;f=0;while(true){g=a.k8.data;if(f>=g.length)break;h=a.vd.data[f];c=g[f];i=V4(c);j=a.e3;k=j.u;l=k.a;m=k.b;LO(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.l$);f=f+1|0;}if(A5U){c=A13(1,2);n=0;while(n<1000){h=Gg(c,a.k8.data.length);l=Gg(c,a.n9.b-a.e3.t.b|0);j=a.k8.data[h];i=j.bs;i=i-(i|0)>=0.25?0.0:0.5;k=a.e3;LO(b,k.u.a,l,k.t,d+i,(e+l|0)+i,j,a.l$);n=n+1|0;}}B5(b,0);}
function AQE(a,b){return A5U;}
function XT(){var a=this;Ee.call(a);a.k2=null;a.us=null;}
function AW_(a){var b,c,d,e,f;b=AQf(a.r);a.k2=b;BK(b);c=new St;c.r3=b;d=AC1(C(306),0,4,c,AFT());b=By();e=Oe(d);f=new K;N(f);U(H(f,C(307)),e);Bp(b,M(f));Mr(a.k2,d);AAN(a.k2,a.us);b=a.k2;return X_(b,J$(b,a.r));}
function AYp(a,b){var c;c=a.r.b2;EP(b,BJ(c.a/30|0,c.b/10|0),BJ((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
function AC1(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BL(c,d);h=g>=0?0:1+Qe(f,2.0)|0;i=g>0?0:1+Qe(f,3.0)|0;j=R(Eh,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new K;N(m);U(H(m,C(308)),g);k[g]=AC1(M(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){m=new Eh;n=new K;N(n);U(H(n,C(309)),g);Nx(m,M(n),c);n=new UX;n.xh=m;m.nR=n;if(TV(f)<0.25){n=JC(m.h9,0);n.bG=n.bG|2;}k[h+g|0]=m;g=g+1|0;}n=new Eh;R6(n,b,c);n.eW=A5V;n.eW=j;b=new SA;b.pA=n;b.pz=e;n.kB=b;n.i2=b;if((c+c|0)>d)Iv(n);else Kc(n);return n;}
var Ol=G(J_);
function AT1(a){return Gn(1);}
function O5(){var a=this;Ee.call(a);a.tQ=null;a.DC=null;}
function AU1(a){var b,c,d,e,f,g;b=new ACL;c=a.r;d=AW3(c);e=AT2(c);f=AW3(c);g=I(CB,[d,e,f]);ES(b);Vb(b,g);b.pC=e;b.tz=d;b.tg=f;ABJ(e,d.jg,f.jg);b.AN=ARD(d.jg,f.jg);c=a.tQ;b.pC.jI=c;Ux(b.tz,c);Ux(b.tg,c);return b;}
function JR(){var a=this;B.call(a);a.Ao=null;a.d9=null;a.tk=null;a.BM=null;a.rS=null;a.kp=null;a.qI=null;a.uV=null;a.i$=null;a.i4=null;a.g_=null;}
function A5W(a,b,c,d,e,f,g,h,i,j,k){var l=new JR();L6(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function L6(a,b,c,d,e,f,g,h,i,j,k,l){a.Ao=b;a.d9=c;a.tk=d;a.BM=e;a.rS=f;a.kp=g;a.qI=h;a.uV=i;a.i$=j;a.i4=k;a.g_=l;}
function AEr(){B.call(this);this.DF=null;}
function AId(a){var b=new AEr();ASY(b,a);return b;}
function ASY(a,b){a.DF=b;}
var ADu=G(0);
function AGN(){var a=this;B.call(a);a.of=null;a.kx=null;a.wc=null;a.pI=null;}
function AIU(a,b,c,d){var e=new AGN();A0z(e,a,b,c,d);return e;}
function A0z(a,b,c,d,e){a.of=b;a.kx=c;a.wc=d;a.pI=e;}
var AEO=G(0);
function E7(){var b,c,d;b=new IJ;c=new IR;AWV();d=A5X;N8(c,d,A5Y,A5Z,A50,A51,d);Lv(b,c,AF_(),AGj(S(C(310)),S(C(278)),S(C(279))),AF_(),AGG(1,0.125),A52,A53);return b;}
function AF_(){var b,c;b=new J2;c=S(C(311));AWV();KN(b,c,A54,A55);return b;}
function AFO(){var b,c;b=new J2;c=S(C(279));AS7();KN(b,c,A56,A57);return b;}
function AJz(){var b,c;b=new J2;AFH();c=A58;ATg();KN(b,c,A59,A5$);return b;}
function AGu(){var a=this;B.call(a);a.xS=null;a.u3=null;a.tx=null;a.pT=null;}
function AC7(a,b,c,d){var e=new AGu();ATv(e,a,b,c,d);return e;}
function ATv(a,b,c,d,e){a.xS=b;a.u3=c;a.tx=d;a.pT=e;}
function ACX(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dV.u3;break a;case 3:if(c!=3){b=b.dV.pT;break a;}b=b.dV.tx;break a;default:b=b.br.d9;break a;}b=b.dV.xS;}return b;}
function JH(a,b,c){return ACX(a,b,0,c);}
function L_(){var a=this;B.call(a);a.lm=null;a.jS=null;}
function Vl(a,b){var c;c=a.jS;a.jS=b;return c;}
function Kl(){var a=this;L_.call(a);a.bR=null;a.b3=null;a.go=0;a.gy=0;}
function MB(a){var b;b=K$(a);if(b==2){if(K$(a.b3)<0)a.b3=OG(a.b3);return PD(a);}if(b!=(-2))return a;if(K$(a.bR)>0)a.bR=PD(a.bR);return OG(a);}
function K$(a){var b,c;b=a.b3;c=b===null?0:b.go;b=a.bR;return c-(b===null?0:b.go)|0;}
function OG(a){var b;b=a.bR;a.bR=b.b3;b.b3=a;EO(a);EO(b);return b;}
function PD(a){var b;b=a.b3;a.b3=b.bR;b.bR=a;EO(a);EO(b);return b;}
function EO(a){var b,c,d;b=a.b3;c=b===null?0:b.go;b=a.bR;d=b===null?0:b.go;a.go=Be(c,d)+1|0;a.gy=1;b=a.bR;if(b!==null)a.gy=1+b.gy|0;b=a.b3;if(b!==null)a.gy=a.gy+b.gy|0;}
var AJC=G();
function AK5(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Xj;c=c.buffer;d.f1=c;d.pu=new $rt_globals.Int8Array(c);d.l0=new $rt_globals.Uint16Array(c);d.yG=new $rt_globals.Int32Array(c);d.rt=new $rt_globals.Float32Array(c);d.rF=new $rt_globals.Float64Array(c);e=d.f1.byteLength;c=new K;N(c);U(H(c,C(312)),e);CP(M(c));e=b.callToCpp1();c=new K;N(c);U(H(c,C(313)),e);CP(M(c));f=b.callToCpp2();c=new K;N(c);E2(H(c,C(314)),f);CP(M(c));c=Ov(d,b.getC8String());g=new K;N(g);H(H(g,C(315)),c);CP(M(g));c
=VH(d,b.getC16String());g=new K;N(g);H(H(g,C(316)),c);CP(M(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.f1,h,8));c=AFa(i);g=new K;N(g);H(H(g,C(317)),c);CP(M(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.f1,h,8));c=AQL(j);g=new K;N(g);H(H(g,C(318)),c);CP(M(g));k=AHP(d,b.getCDoubleArray8(),8);l=ASw(k);c=new K;N(c);H(H(c,C(319)),l);CP(D5(c));l=ASs(b.getC8String(),C(320),d);c=LK();H(H(c,C(321)),l);CP(D5(c));l=AOI(b.getC16String(),C(322),
d);c=LK();H(H(c,C(323)),l);CP(D5(c));c=AXU(i,d,b.getCIntArray8(),DN([11,22,33,44,55,66,77,88]));g=LK();H(H(g,C(324)),c);CP(D5(g));c=AQV(j,d,b.getCFloatArray8(),100,DN([111,222,333,444,555,666,777,888]));g=LK();H(H(g,C(325)),c);CP(D5(g));b=AZa(k,d,b.getCDoubleArray8(),1000,DN([1111,2222,3333,4444,5555,6666,7777,8888]));c=LK();H(H(c,C(326)),b);CP(D5(c));}
function AQV(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(327);h=0;i=e;a:{while(h<g){if(CU(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.rt[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(328);}return C(329);}
function AZa(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(327);h=0;i=e;a:{while(h<g){if(Gq(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.rF[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(328);}return C(329);}
function AXU(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(327);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.yG[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(328);}return C(329);}
function ASs(b,c,d){var e,f,g,h;e=Ov(d,b);if(!Bj(c,e))return C(330);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.pu[h])return C(331);f=f+1|0;}return C(328);}
function AOI(b,c,d){var e,f,g,h;e=VH(d,b);if(!Bj(c,e))return C(330);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.l0[h>>>1|0]&65535))return C(331);f=f+1|0;}return C(328);}
function CP(b){Xh(C(2),b);}
function ANV(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function XB(){B.call(this);this.qZ=null;}
function ATN(a,b){return AHR(a.qZ,b);}
function Xz(){B.call(this);this.zW=null;}
function AVd(a,b){I$(a.zW,b);}
function XA(){B.call(this);this.wn=null;}
function AQ_(a,b){b=b;return ADr(a.wn,b);}
function AGq(){J1.call(this);this.dn=null;}
function Ku(){var a=new AGq();A0b(a);return a;}
function HZ(a,b,c,d){var e=new AGq();AV9(e,a,b,c,d);return e;}
function A0b(a){AAU(a);a.dn=new BY;}
function AV9(a,b,c,d,e){AAU(a);a.dn=new BY;G7(a,b,c,d,e);}
function FK(a){var b,c;b=a.t;c=a.dn;V(b,c.bd-c.bm|0,c.bC-c.bs|0);}
function FB(a,b){Il(a,0,0,Cc(b),Dg(b));}
function Il(a,b,c,d,e){Cu(a.dn,b,c,d,e);}
function Ex(a,b,c,d,e){var f;f=a.u;DX(b,f.a+d|0,f.b+e|0,a.t,a.dn,c,a.V,a.bj,0);}
function R0(a,b,c,d){var e;e=a.u;DX(b,e.a,e.b,a.t,a.dn,c,a.V,a.bj,d);}
function Ik(a,b,c,d,e,f,g){DX(b,c,d,a.t,a.dn,e,!f?a.V:a.bj,!f?a.bj:a.V,g);}
function Hq(a,b){BS(a.V,b);}
function E9(a,b){BS(a.bj,b);}
function SU(){B.call(this);this.ff=null;}
function ATZ(a,b){var c,d,e,f,g,h;c=b.g;d=c.a;e=a.ff.g4;f=e.t;d=d-f.a|0;g=c.b-f.b|0;V(e.u,d,g);c=a.ff;e=c.C.b5;b=b.g;d=0;a:{while(true){h=c.it.data;if(d>=h.length)break;if(E4(h[d],b)){b=c.pG.data[d];break a;}d=d+1|0;}b=null;}YM(e,b);return 1;}
function AKb(a,b,c,d){if(!c&&d==2){b=a.ff;RE(b,b.ea);}return 1;}
function ATT(a,b,c){var d,e;d=By();e=new K;N(e);U(H(e,C(332)),c);Bp(d,M(e));if(c)return null;d=b.g;e=!E4(a.ff.ea,d)?null:d;Tc(a.ff.i1,d.a,d.b);b=a.ff;XH(b.i1,Mt(b.C.b5));if(e===null)b=A5e;else{b=new AA8;b.rO=a;b.rP=e;}return b;}
function ATp(a,b,c){var d;b=By();d=new K;N(d);U(H(d,C(333)),c);Bp(b,M(d));return 1;}
function X1(){B.call(this);this.Ax=null;}
function AZv(a,b){return V1(a.Ax,b);}
function X0(){B.call(this);this.rr=null;}
function AXX(a,b){return V1(a.rr,b);}
function XZ(){B.call(this);this.B2=null;}
function AWj(a,b,c){var d,e;Bp(By(),C(334));d=!c?C(335):C(54);e=new K;N(e);H(H(H(e,C(336)),d),C(337));ABF(b,M(e));return 1;}
function XY(){B.call(this);this.CQ=null;}
function ASZ(a){Bp(By(),C(338));}
function XX(){B.call(this);this.Di=null;}
function APA(a,b){Bp(By(),C(339));return 1;}
function XW(){B.call(this);this.zj=null;}
function AZC(a,b,c,d){var e,f,g;b=a.zj;e=( -d|0)/10|0;b=b.ea;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Ha(){var a=this;BY.call(a);a.gY=0;a.g1=0;a.gZ=0;a.g0=0;}
function CH(a){var b=new Ha();ASh(b,a);return b;}
function Dq(a,b,c){var d=new Ha();AUG(d,a,b,c);return d;}
function S(a){var b=new Ha();AY1(b,a);return b;}
function EM(a,b,c,d){var e=new Ha();QK(e,a,b,c,d);return e;}
function BW(a){var b=new Ha();KB(b,a);return b;}
function ASh(a,b){QK(a,b,b,b,255);}
function AUG(a,b,c,d){QK(a,b,c,d,255);}
function AY1(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.gY=J5(P(b,1))*17|0;a.g1=J5(P(b,2))*17|0;a.gZ=J5(P(b,3))*17|0;a.g0=255;}else{a.gY=Lt(P(b,1),P(b,2));a.g1=Lt(P(b,3),P(b,4));a.gZ=Lt(P(b,5),P(b,6));a.g0=J(b)!=9?255:Lt(P(b,7),P(b,8));}Iq(a.gY,a.g1,a.gZ,a.g0,a);return;}}
function QK(a,b,c,d,e){a.gY=b;a.g1=c;a.gZ=d;a.g0=e;Iq(b,c,d,e,a);}
function KB(a,b){a.gY=b.gY;a.g1=b.g1;a.gZ=b.gZ;a.g0=b.g0;BS(a,b);}
function J5(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Lt(b,c){return (16*J5(b)|0)+J5(c)|0;}
var AFp=G(0);
function Gn(b){return !b?I(BM,[C(156),C(172),C(340)]):I(BM,[C(156),C(172),C(340),C(34)]);}
function Vz(){B.call(this);this.lA=null;}
function AMj(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.lA.dc;e=DF();f=e-0.5+(DF()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DF()*0.3;h=0.5+DF()*0.5;Ii(e,g,h,1.0,b.V);Ii(f,g,h,1.0,b.bj);b=a.lA;BS(b.dN.V,b.dc.V);b=a.lA;BS(b.dN.bj,b.dc.bj);}return 1;}
function Vw(){var a=this;B.call(a);a.m7=null;a.nz=null;}
function AEP(){var a=this;B.call(a);a.fM=null;a.cl=null;a.gw=null;a.hp=null;a.nd=null;a.cC=null;a.hf=null;a.c0=0;a.fP=0;a.nv=0;a.jO=0;a.j7=0;a.hk=0;a.kk=null;a.oj=null;a.u_=null;a.m5=null;}
function AIi(){var a=new AEP();AQ0(a);return a;}
function AQ0(a){a.cl=RD();a.gw=new Bg;a.hp=new Bg;a.cC=A5_;a.jO=(-1);a.j7=1;}
function MT(a,b){NH(a);a.cC=b;}
function Jn(a,b,c){a.fM=b;ABz(a,c);NH(a);}
function Jo(a,b){var c;a.nd=b.k3;c=b.on.o3;BS(a.cl.V,c);c=b.kA.oL;BS(a.cl.bj,c);a.m5=b.on;}
function Ms(a){a.hf=Cv(a.hf,null);V(a.gw,0,0);a.cC=A5_;a.jO=(-1);ZW(a.cl);}
function ABz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=JZ(b);d=b.cb;BK(a.fM);Cl(c,a.fM);e=ML(a.fM,1.25);f=0;a.c0=Cd(2.0,d);a.fP=Cd(3.0,d);a.nv=Cd(12.0,d);g=0;h=a.cC.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=KU(c,l.mS);n=a.nv;n=(n+m|0)+n|0;f=Be(f,n);b=l.e7;b.a=g;b.b=0;b=l.el;b.a=n;b.b=e;Cu(l.jL,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gw;b.a=g;b.b=e;b=a.cl.t;n=a.hk;if(!n){m=a.c0;m=(g+m|0)+Ba(m,a.cC.data.length)|0;}else m=(f+(a.c0*2|0)|0)+(a.fP*2|0)|0;b.a=m;if(!n)e=e+(a.c0*2|0)|0;else{n=a.c0;e=(Ba(e+n|0,a.cC.data.length)+n
|0)+(a.fP*2|0)|0;}b.b=e;}
function MN(a,b,c){var d,e,f,g,h,i,j;V(a.cl.u,b,c);d=a.c0+a.fP|0;e=a.cC.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.e7;j.a=b+d|0;j.b=c+h|0;if(!a.hk){if(!i.el.a)ADf();d=d+(i.el.a+a.c0|0)|0;}else{if(!i.el.b)ADf();h=h+(i.el.b+a.c0|0)|0;}g=g+1|0;}}
function ADf(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Et(a){var b,c;b=a.gw;if(b.a&&b.b)return a.cl.t;c=new Bt;Bl(c,C(341));L(c);}
function NH(a){a.j7=1;}
function LQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bU;if(!a.cC.data.length)return;if(a.hf===null)a.hf=CS(c);a:{if(!a.j7){d=a.gw;if(Ba(d.a,d.b))break a;}d=a.gw;if(!Ba(d.a,d.b))ABz(a,b);d=a.gw;e=d.a;f=d.b;if(!Ba(e,f))return;d=DV(c,e,f,b.cx);Cl(d,a.fM);g=ML(a.fM,0.125);h=a.fM;i=h.dm;g=g+i-(i+h.ev)/16.0;j=a.cC.data;e=j.length;f=0;while(f<e){h=j[f];BP(d,h.mS,h.jL.bm+a.nv,g);f=f+1|0;}CJ(a.hf,d);a.j7=0;Es(d);}if(!KS(a.cl)){d=a.cl;AHA(c,d.t,d.u,d.bj,a.c0,a.hp);d=a.cl;h=d.t;k=d.u;d=d.V;e=a.c0;l=a.hp;l.a=(h.a-e|0)-
e|0;l.b=(h.b-e|0)-e|0;Bs(c,k.a+e|0,k.b+e|0,l,d);if(a.hk){d=a.cl;AIL(c,d.t,d.u,0,0,Xl(a.nd,b.cb),a.nd.nh,a.hp);}}j=a.cC.data;m=j.length;n=0;while(n<m){d=j[n];h=d.e7;e=h.a;f=h.b;h=d.el;k=d.jL;l=a.hf;o=a.m5;DX(c,e,f,h,k,l,o.q2,Ug(o,d.kz),b.cx);n=n+1|0;}b:{if(a.hk){j=a.cC.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.hp;e=(a.cl.t.a-(a.c0*2|0)|0)-(a.fP*2|0)|0;h=d.el;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.e7;Bs(c,k.a+h.a|0,k.b,b,Ug(a.m5,d.kz));}p=p+1|0;}}}}
function Nn(a,b,c){var d,e,f,g,h,i;d=E4(a.cl,b);e=!d?(-1):OV(a,b);f=a.jO;if(f!=e){if(f>=0){g=a.cC.data[f];g.kz=0;if(a.u_!==null){h=By();i=new K;N(i);H(H(U(H(i,C(342)),f),C(343)),g);Bp(h,M(i));}}if(e>=0){h=a.cC.data[e];g=a.oj;if(g!==null)g.vg(b,e,h);h.kz=1;}a.jO=e;}return d&&Gr(c)?1:0;}
function NK(a,b,c,d){var e,f;e=OV(a,b);if(e>=0){f=a.cC.data[e];if(!AAX(f))f.mg.k();}return 1;}
function OV(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cC.data;if(c>=d.length)return (-1);e=d[c];if(Ho(b,e.e7,e.el))return c;if(a.hk){f=e.e7;g=f.a;e=e.el;h=e.a;g=g+h|0;i=f.b;f=a.hp;f.a=(a.cl.t.a-(a.c0*2|0)|0)-h|0;f.b=e.b;if(ADA(b,g,i,f))break;}c=c+1|0;}return c;}
function ACU(a){a.hk=1;}
function AHB(){var a=this;B.call(a);a.js=null;a.hN=0.0;a.lL=0;a.jN=0;}
function E3(a,b){var c=new AHB();APP(c,a,b);return c;}
function A3o(a,b,c){var d=new AHB();AGe(d,a,b,c);return d;}
function APP(a,b,c){AGe(a,b,c,0);}
function AGe(a,b,c,d){var e;e=!d?400:300;d=!d?700:600;a.js=b;a.hN=c;a.lL=e;a.jN=d;}
function AYV(a,b){if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){b=b;return a.hN===b.hN&&a.lL==b.lL&&a.jN==b.jN&&BT(a.js,b.js)?1:0;}return 0;}
function AAp(){B.call(this);this.th=null;}
function APc(a,b){var c;c=a.th;if(b.bk==32)Ms(c.dy);return 0;}
function AAl(){B.call(this);this.ua=null;}
function AQW(a,b){var c,d,e,f;b=b;c=a.ua;d=MW(c.r);F4(d,E7(),c.nQ);b=b.g;e=QV(4);f=new TL;f.B3=c;I8(d,b,e,f);F8(c.bl,d);return 1;}
var AAm=G();
function A0R(a){Bp(By(),C(344));}
var AAn=G();
function AKO(a){Bp(By(),C(345));}
function Cg(){var a=this;B.call(a);a.mg=null;a.jL=null;a.e7=null;a.el=null;a.jW=null;a.mZ=null;a.kz=0;a.mS=null;}
function Wb(a,b){var c=new Cg();D3(c,a,b);return c;}
function A2M(a,b,c,d){var e=new Cg();AH1(e,a,b,c,d);return e;}
function D3(a,b,c){AH1(a,b,c,null,null);}
function AH1(a,b,c,d,e){a.jL=new BY;a.e7=new Bg;a.el=new Bg;a.mS=c;a.mZ=e;a.mg=b;a.jW=d;}
function AAX(a){return a.jW===null?0:1;}
function Tt(){B.call(this);this.A3=null;}
function AWb(a,b){return b.ji&&b.bk==32?1:0;}
function Tu(){B.call(this);this.zE=null;}
function AKw(a,b){var c,d,e,f,g,h;b=b;c=a.zE;d=MW(c.r);F4(d,E7(),E3(C(156),25.0));b=b.g;e=R(Cg,1);f=e.data;g=new Cg;h=new ACN;h.zV=c;D3(g,h,C(346));f[0]=g;I8(d,b,Ef(e),A6a);F8(c.bl,d);return 1;}
function AF8(){var a=this;B.call(a);a.pc=0;a.pe=0;}
function AFT(){var a=new AF8();ARH(a);return a;}
function A13(a,b){var c=new AF8();AJI(c,a,b);return c;}
function ARH(a){AJI(a,AJq(GB((AFm()))),GB((AFm()))^(-559038737));}
function AJI(a,b,c){var d;a.pc=b;a.pe=c;d=0;while(d<19){M7(a);d=d+1|0;}}
function M7(a){var b,c;b=a.pc;c=a.pe;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.pc=c;a.pe=b;return b;}
function AJq(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AI3(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Gg(a,b){return TV(a)*b|0;}
function TV(a){return 5.9604644775390625E-8*(M7(a)&16777215);}
function Qe(a,b){var c,d,e;c=AI3(M7(a));d=AQQ( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function Oz(){B.call(this);this.ws=null;}
function APj(a,b,c){var d;d=a.ws;if(b===0.0)LD(d,100);}
function Oy(){B.call(this);this.ul=null;}
function AXy(a,b){var c,d,e;c=a.ul;d=b.bk;if(d==32){c.k$=c.k$?0:1;e=1;}else if(d==13){LD(c,1);e=1;}else if(d!=8)e=0;else{O4(c,1);e=1;}return e;}
var YH=G(0);
function AGO(b,c){var d;d=new TP;d.wg=b;d.wf=c;return d;}
function AGU(){var a=this;B.call(a);a.g9=null;a.hF=0;a.le=0;a.gS=0;}
function AG5(a){var b=new AGU();AMt(b,a);return b;}
function AMt(a,b){a.g9=BG();a.gS=0;a.le=2048;a.hF=b;}
function J9(a,b,c){var d,e,f,g,h,i;d=c.xQ(b);e=a.le;if(d>e){c=new Bt;f=new K;N(f);BN(U(H(U(H(f,C(347)),d),C(348)),e),41);Bl(c,M(f));L(c);}if(!a.hF){b=new BR;Bl(b,C(349));L(b);}a:{b=new BY;if(d){b:{c=a.g9;if(c.m>0){c=B2(c);g=d;while(true){if(!B7(c))break b;f=B8(c);if(f.bd>=g)break;}Cu(b,f.bm,f.bs,g,a.hF);f.bm=f.bm+g;h=f.bd-g;f.bd=h;if(h===0.0)TK(a.g9,f);break a;}}g=a.gS;i=d;Cu(b,0.0,g,i,a.hF);BC(a.g9,ACy(i,a.gS,a.le-d|0,a.hF));a.gS=a.gS+a.hF|0;}}return b;}
function IK(a,b){var c,d,e,f,g,h,i;a:{c=AJG(b);b=a.g9;if(b.m>0){d=B2(b);while(true){if(!B7(d))break a;e=B8(d);if(e.bs===c.bs){f=e.bm;g=e.bd;h=f+g;i=c.bm;if(h===i){c.bm=f;c.bd=c.bd+g;Ys(d);}else{h=c.bd;if(i+h===f){c.bd=h+g;Ys(d);}}}}}}BC(a.g9,c);}
function Mj(a){return BJ(a.le,a.gS);}
function VJ(){var a=this;B.call(a);a.q1=null;a.la=null;}
function AS_(a,b,c){if(c)return A5e;return FQ(a.la.iu,b.g,a.q1,1);}
function AKs(a,b,c){return 1;}
function AUV(a,b){var c;c=a.la;return FW(c.iu,b.g,c.wb);}
function Y0(){B.call(this);this.y0=null;}
function APh(a,b,c,d){var e,f;b=a.y0;e=(Vq(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eU=Bd(Be(0,b.eU+Ba(e,f)|0),TM(b));return 1;}
function P6(){B.call(this);this.r0=null;}
function AO8(a,b){var c,d,e;c=a.r0;if(b.cL&&b.bk==79){if(!b.bL){b=c.C.b5;d=new V9;d.tC=c;NM(b,d);}else{b=c.C.b5;d=new V8;d.vT=c;LE(b,d);}e=1;}else e=0;return e;}
function QM(){B.call(this);this.ww=null;}
function ASp(a,b){var c,d,e,f,g,h,i;b=b;c=a.ww;d=MW(c.r);F4(d,E7(),E3(C(156),25.0));b=b.g;e=R(Cg,5);f=e.data;g=new Cg;h=new S4;h.qN=c;D3(g,h,C(350));f[0]=g;g=new Cg;h=new S5;h.rk=c;D3(g,h,C(351));f[1]=g;g=new Cg;h=new S6;h.su=c;D3(g,h,C(352));f[2]=g;h=new Cg;i=new S7;i.v3=c;D3(h,i,C(353));f[3]=h;h=new Cg;i=new S8;i.wu=c;D3(h,i,C(354));f[4]=h;I8(d,b,Ef(e),A6a);F8(c.bl,d);return 1;}
function QL(){B.call(this);this.yt=null;}
function AYz(a,b){var c,d,e,f;c=a.yt;d=c.C.b5;e=new WI;e.vo=c;f=R(B,1);f.data[0]=b;CQ(d,e,C(355),f);}
function AAz(){B.call(this);this.mp=null;}
function AXN(a,b){var c,d,e,f,g,h;c=a.mp;d=c.px;if(d!==null){e=c.eS.u;f=e.a;g=b.g;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.px=g;}b=b.g;f=b.a;c=c.gh;d=c.t;f=f-d.a|0;h=b.b-d.b|0;V(c.u,f,h);return 1;}
function ASf(a,b,c){var d;if(!c){d=b.g;b=a.mp;if(!E4(b.eS,d))d=null;b.px=d;}return A5e;}
var AEW=G();
function AJN(b){var c,d;c=Hx(b,250,64);Hl(c,C(281),25.0);JM(c,187,187,187);BP(c,C(356),0.0,24.0);BP(c,C(356),0.25,56.0);d=CS(b);CJ(d,c);Es(c);return d;}
var Da=G(0);
var A5p=null;var A49=null;var A5q=null;var A48=null;var A5s=null;var A5r=null;var A5u=null;var A5t=null;var A5w=null;var A5v=null;var A5x=null;function Fv(){Fv=Bm(Da);ASt();}
function ASt(){A5p=CH(187);A49=S(C(357));A5q=CH(55);A48=CH(43);A5s=Dq(33,66,131);A5r=Dq(60,63,65);A5u=S(C(358));A5t=S(C(359));A5w=EM(85,85,85,128);A5v=EM(43,43,43,0);A5x=S(C(267));}
function XC(){var a=this;B.call(a);a.pZ=null;a.ll=null;}
function ANx(a,b,c){var d;if(!c){d=FQ(a.ll.h$,b.g,a.pZ,1);if(d!==null)return d;}return A5e;}
function ATl(a,b,c){return 1;}
function AMo(a,b){var c;c=a.ll;return FW(c.h$,b.g,QE(c.C.b5));}
function U4(){B.call(this);this.qL=null;}
function AZz(a,b,c,d){var e,f;b=a.qL;e=(Vq(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fp=Bd(Be(0,b.fp+Ba(e,f)|0),Y1(b));return 1;}
function AB7(){B.call(this);this.u$=null;}
function ALH(a,b){var c,d;a:{c=a.u$;switch(b.bk){case 67:PU(c);d=1;break a;case 86:YJ(c);d=1;break a;default:}d=0;}return d;}
var AB6=G();
function AWp(a,b,c){return 0;}
function AB5(){B.call(this);this.rz=null;}
function ALM(a,b,c){var d,e;d=a.rz;c=d.d5+1|0;d.d5=c;d=Jy(F(J4));e=new K;N(e);H(H(U(e,c),C(360)),d);e=M(e);$rt_globals.console.info($rt_ustr(e));ABF(b,e);return 1;}
var AB4=G();
function AOE(a){return null;}
function AB8(){B.call(this);this.yc=null;}
function AY8(a){var b,c;b=a.yc;c=new UG;c.pV=b;return c;}
function Rq(){B.call(this);this.Cm=null;}
function ARW(a,b){return 0;}
function Yo(){B.call(this);this.B6=null;}
function ARB(a,b){return b.ji&&b.bk==32?1:0;}
function Yn(){B.call(this);this.vJ=null;}
function AOi(a,b){var c,d,e,f,g,h;b=b;c=a.vJ;d=MW(c.r);F4(d,E7(),E3(C(156),25.0));b=b.g;e=R(Cg,1);f=e.data;g=new Cg;h=new ACG;h.AA=c;D3(g,h,C(346));f[0]=g;I8(d,b,Ef(e),A6a);F8(c.bl,d);return 1;}
function OX(){B.call(this);this.zP=null;}
function AXL(a,b){var c;c=a.zP.ex;if(c!==null)I$(c,b);}
function OY(){B.call(this);this.xK=null;}
function AZp(a,b){var c,d,e;b=b;c=a.xK;if(DC(c.r,c.ex)){d=c.ly;b=b.g;e=c.ex;Gz(d,b,e,c,e,c,new WF);}return 1;}
function Wx(){B.call(this);this.wC=null;}
function AL4(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.wC;d=c.c4;if(d===null)e=1;else{if(!B6(d.fG,b.g)){d=c.c4.f7;f=b.g;g=R(Cg,1);h=g.data;b=new Cg;i=new T0;i.t6=c;D3(b,i,C(361));h[0]=b;KX(d,f,Ef(g));}else{c=c.c4;b=b.g;if(B6(c.fG,b)){d=c.f7;f=c.fG;i=c.yR;j=d.bW;BK(j);k=new Qh;k.pQ=j;j=new Qg;j.Am=c;Gz(d,b,f,i,f,k,j);}}e=1;}return e;}
function Qb(){B.call(this);this.DY=null;}
function AN1(a,b){return 0;}
var AFW=G(0);
function AI9(b){HP(b,A2k(C(362),C(183),AAS(C(363))));}
function Tx(){B.call(this);this.A0=null;}
function AP8(a,b){return 1;}
function Tw(){B.call(this);this.sI=null;}
function APz(a,b){var c,d,e;c=a.sI;if(b.bk!=32)d=0;else{b=c.DC;e=I(LJ,[MS(1,3,4,5,1),MS(5,6,10,2,2),MS(12,2,13,3,3),MS(15,3,17,2,4)]);b.EZ(A22(R(Gb,0),R(Gb,0),e));d=1;}return d;}
var Di=G(0);
var A5z=null;var A6b=null;var A5B=null;var A5A=null;var A5D=null;var A5C=null;var A5F=null;var A5E=null;var A5H=null;var A5G=null;var A5I=null;function AMw(){AMw=Bm(Di);AQ$();}
function AQ$(){A5z=CH(206);A6b=S(C(364));A5B=S(C(365));A5A=S(C(274));A5D=S(C(366));A5C=S(C(263));A5F=S(C(367));A5E=S(C(368));A5H=EM(107,106,107,128);A5G=EM(30,31,34,0);A5I=S(C(276));}
function Cm(){CE.call(this);this.kC=null;}
var A6c=null;var A6d=null;var A6e=null;var A6f=null;var A6g=null;var A5g=null;var A6h=null;var A6i=null;var A6j=null;var A6k=null;var A6l=null;var A6m=null;var A6n=null;var A6o=null;var A6p=null;var A5J=null;function S3(){S3=Bm(Cm);AWw();}
function DK(a,b,c){var d=new Cm();YV(d,a,b,c);return d;}
function A2C(a,b,c,d){var e=new Cm();ACf(e,a,b,c,d);return e;}
function YV(a,b,c,d){S3();Dz(a,b,c);a.kC=Jr(d,null);}
function ACf(a,b,c,d,e){S3();Dz(a,b,c);a.kC=Jr(d,e);}
function AWw(){var b,c;b=new Cm;AMw();YV(b,C(369),0,A6b);A6c=b;A6d=DK(C(370),1,S(C(371)));A6e=DK(C(372),2,S(C(373)));A6f=DK(C(374),3,S(C(375)));A6g=DK(C(376),4,A6b);A5g=DK(C(377),5,S(C(378)));A6h=DK(C(379),6,S(C(380)));A6i=DK(C(381),7,S(C(382)));A6j=DK(C(383),8,S(C(384)));c=new Cm;Fv();ACf(c,C(385),9,A49,S(C(367)));A6k=c;A6l=A2C(C(386),10,A49,S(C(277)));A6m=DK(C(387),11,S(C(388)));A6n=DK(C(389),12,S(C(390)));A6o=DK(C(391),13,A6b);b=DK(C(392),14,S(C(393)));A6p=b;A5J=I(Cm,[A6c,A6d,A6e,A6f,A6g,A5g,A6h,A6i,A6j,
A6k,A6l,A6m,A6n,A6o,b]);}
function J6(){var a=this;B.call(a);a.hT=null;a.l_=null;}
function Jr(a,b){var c=new J6();AWZ(c,a,b);return c;}
function AWZ(a,b,c){a.hT=b;a.l_=c;}
function IJ(){var a=this;B.call(a);a.k3=null;a.sc=null;a.CS=3;a.kA=null;a.z$=null;a.D1=null;a.on=null;a.ml=null;a.n6=null;}
function A6q(a,b,c,d,e,f,g){var h=new IJ();Lv(h,a,b,c,d,e,f,g);return h;}
function Lv(a,b,c,d,e,f,g,h){a.sc=E3(C(172),16.0);a.CS=3;a.z$=b;a.D1=c;a.kA=d;a.on=e;a.k3=f;a.ml=g;a.n6=h;}
function AIr(){var a=this;B.call(a);a.nh=null;a.r7=0;}
function AGG(a,b){var c=new AIr();AY0(c,a,b);return c;}
function AY0(a,b,c){var d;d=new BY;a.nh=d;a.r7=b;d.bC=c;}
function Xl(a,b){return Cd(a.r7,b);}
var DE=G(0);
var A5N=null;var A5O=null;var A5K=null;var A5L=null;var A5M=null;var A56=null;var A57=null;var A5P=null;var A5Q=null;function AS7(){AS7=Bm(DE);AXP();}
function AXP(){A5N=S(C(263));A5O=S(C(394));A5K=S(C(279));A5L=S(C(380));A5M=S(C(364));A56=S(C(263));A57=S(C(395));A5P=S(C(396));A5Q=Dq(43,45,48);}
var W6=G(0);
var Xi=G();
function AVi(a,b,c){var d,e;d=b;e=c;b=new K;N(b);U(H(U(H(b,C(397)),d),C(398)),e);CP(M(b));return d+e|0;}
var W7=G(0);
var Xg=G();
function AVY(a,b,c){var d,e;d=b;e=c;b=new K;N(b);E2(H(E2(H(b,C(399)),d),C(398)),e);CP(M(b));return d+e;}
var ADP=G();
var AGS=G(0);
function T_(){B.call(this);this.nD=null;}
var A5_=null;function Lf(){var a=new T_();AHk(a);return a;}
function AHk(a){a.nD=BG();}
function DS(a,b,c){W3(a,C1(b,c));}
function C1(b,c){return Wb(c,b);}
function Fs(a,b,c){IO(a,b,c,null);}
function IO(a,b,c,d){W3(a,A2M(null,b,c,d));}
function W3(a,b){BC(a.nD,b);}
function GL(a){return Ef(F$(a.nD,A5_));}
function AGW(){A5_=R(Cg,0);}
var DI=G(0);
var A50=null;var A51=null;var A5X=null;var A5Y=null;var A5Z=null;var A54=null;var A55=null;var A52=null;var A53=null;function AWV(){AWV=Bm(DI);AXz();}
function AXz(){A50=S(C(272));A51=S(C(400));A5X=S(C(311));A5Y=S(C(401));A5Z=S(C(357));A54=S(C(272));A55=S(C(400));A52=EM(118,121,122,128);A53=Dq(63,66,68);}
var HO=G(0);
var Pv=G();
function AYo(a,b,c,d){var e;b=By();e=new K;N(e);H(H(U(H(e,C(402)),c),C(343)),d);Bp(b,M(e));}
var Pw=G();
function SV(){B.call(this);this.yp=null;}
function AXp(a,b){var c;c=a.yp.la;c.eU=FH(b,TM(c));}
function Pc(){B.call(this);this.B5=null;}
function AMd(a,b){var c,d,e;c=b.data;b=By();d=c[0];e=new K;N(e);H(H(e,C(299)),d);Bp(b,M(e));b=By();c=c[1];e=new K;N(e);H(H(e,C(403)),c);Bp(b,M(e));}
function Pb(){B.call(this);this.De=null;}
function AK0(a,b){var c,d,e,f,g,h,i;c=b.data;d=By();e=c[0];f=new K;N(f);H(H(f,C(299)),e);Bp(d,M(f));e=EG(KK(b,1));b=By();g=c[1];if(e===null)d=C(31);else{d=new K;N(d);BV(d,C(36));h=0;while(true){i=e.data;if(h>=i.length)break;if(h>0)BV(d,C(37));BN(d,i[h]);h=h+1|0;}BV(d,C(38));d=M(d);}c=new K;N(c);H(H(H(H(c,C(404)),g),C(405)),d);Bp(b,M(c));}
function O_(){B.call(this);this.AD=null;}
function AKi(a,b){ACg(a.AD,b);}
function O9(){B.call(this);this.Dn=null;}
function A0v(a,b){var c,d,e,f,g;c=b.data;d=By();e=c[0];f=new K;N(f);H(H(f,C(299)),e);Bp(d,M(f));e=CM(KK(b,1));b=By();g=c[1];d=AFa(e);c=new K;N(c);H(H(H(H(c,C(406)),g),C(407)),d);Bp(b,M(c));}
var AGy=G();
function TQ(){B.call(this);this.sl=null;}
function AV0(a,b){var c;c=a.sl.ll;c.fp=FH(b,Y1(c));}
function AA1(){B.call(this);this.B7=null;}
function ANc(a,b){return 0;}
function AJc(){var a=this;B.call(a);a.jT=null;a.oe=null;a.gt=null;a.DO=null;}
function AAS(a){var b=new AJc();AYR(b,a);return b;}
function AYR(a,b){var c,d,e;c=null;d=null;e=null;a.jT=c;a.oe=d;a.gt=b;a.DO=e;}
function ABa(a){var b,c;b=a.gt;if(b===null)return C(21);c=AEm(b,C(408));return c==(-1)?a.gt:Do(a.gt,c+1|0);}
function AUn(a,b){var c;if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){c=b;return BT(a.jT,c.jT)&&BT(a.oe,c.oe)&&BT(a.gt,c.gt)?1:0;}return 0;}
function IR(){var a=this;B.call(a);a.sX=null;a.qg=null;a.qU=null;a.yV=null;a.rM=null;a.kK=null;}
function A6r(a,b,c,d,e,f){var g=new IR();N8(g,a,b,c,d,e,f);return g;}
function N8(a,b,c,d,e,f,g){a.sX=b;a.qg=c;a.qU=d;a.yV=e;a.rM=f;a.kK=g;}
function J2(){var a=this;B.call(a);a.q2=null;a.o3=null;a.tr=null;}
function A6s(a,b,c){var d=new J2();KN(d,a,b,c);return d;}
function KN(a,b,c,d){a.q2=b;a.o3=c;a.tr=d;}
function Ug(a,b){return !b?a.o3:a.tr;}
function AHe(){var a=this;B.call(a);a.oL=null;a.yd=null;a.uc=null;}
function AGj(a,b,c){var d=new AHe();AZO(d,a,b,c);return d;}
function AZO(a,b,c,d){a.oL=b;a.yd=c;a.uc=d;}
function Cq(){CE.call(this);this.nf=null;}
var A6t=null;var A6u=null;var A6v=null;var A6w=null;var A6x=null;var A6y=null;var A6z=null;var A6A=null;var A6B=null;var A6C=null;var A6D=null;var A6E=null;var A6F=null;var A6G=null;var A6H=null;var A5y=null;function AD0(){AD0=Bm(Cq);AV5();}
function D1(a,b,c){var d=new Cq();Z4(d,a,b,c);return d;}
function AY2(a,b,c,d){var e=new Cq();AFX(e,a,b,c,d);return e;}
function Z4(a,b,c,d){AD0();Dz(a,b,c);a.nf=Jr(d,null);}
function AFX(a,b,c,d,e){AD0();Dz(a,b,c);a.nf=Jr(d,e);}
function AV5(){var b;b=new Cq;Fv();Z4(b,C(369),0,A49);A6t=b;A6u=D1(C(370),1,S(C(409)));A6v=D1(C(372),2,S(C(410)));A6w=D1(C(374),3,S(C(411)));A6x=D1(C(376),4,S(C(409)));A6y=D1(C(377),5,Dq(188,63,60));A6z=D1(C(379),6,S(C(412)));A6A=D1(C(381),7,S(C(413)));A6B=D1(C(383),8,S(C(414)));A6C=AY2(C(385),9,A49,Dq(52,65,52));A6D=AY2(C(386),10,S(C(415)),S(C(416)));A6E=D1(C(387),11,S(C(417)));A6F=D1(C(389),12,S(C(418)));A6G=D1(C(391),13,A49);b=D1(C(392),14,S(C(393)));A6H=b;A5y=I(Cq,[A6t,A6u,A6v,A6w,A6x,A6y,A6z,A6A,A6B,A6C,
A6D,A6E,A6F,A6G,b]);}
var AJH=G();
function JO(b,c){var d,e,f;if(c<=0)return C(21);d=B0(c);e=d.data;e[0]=AI4(Gg(b,52));f=1;while(f<c){e[f]=AI4(Gg(b,62));f=f+1|0;}return Hf(d);}
function AI4(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AEg=G();
function AJQ(){var a=this;B.call(a);a.HN=null;a.M2=null;a.G4=0;a.Nx=0;}
var AC6=G(0);
function AI_(b,c){var d,e,f,g,h,i,j,k,l,m;d=R(BM,8);e=DA(8);f=B0(16);g=0;h=0;i=0;while(true){j=BL(i,b);if(j>0)break;k=j>=0?10:(c.bc(CT(i))).mh;if(k==10){d=AFB(Eu(f,0,g),d,h);e=AAW(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Kn(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AFB(Eu(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bc(CT(j))).mh==10){e=AAW(1,e,h);i=j;}else e=AAW(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new Yy;d=ADR(d,h);if(m.length!=h)e=NU(e,h);c.jK=d;c.A7=e;return c;}
function AHd(b){var c,d;c=J(b);BK(b);d=new O2;d.sS=b;return AI_(c,d);}
var CX=G();
var AIH=G(CX);
var AI2=G(CX);
var AHs=G(CX);
var AHD=G(CX);
var AJf=G(CX);
function Uk(){B.call(this);this.rd=null;}
function ANT(a){var b;b=a.rd;Bp(By(),b);}
function O2(){B.call(this);this.sS=null;}
function ATm(a,b){return O1(P(a.sS,b.bp));}
function Yy(){var a=this;B.call(a);a.jK=null;a.A7=null;}
var AHb=G();
function Cd(b,c){return CU(b*c);}
function Gb(){var a=this;B.call(a);a.gJ=0;a.mV=null;}
function AFn(){var a=this;B.call(a);a.bo=null;a.Q=null;a.U=null;a.h7=null;a.o8=0;}
function ADa(a){var b=new AFn();APO(b,a);return b;}
function A3p(a,b){var c=new AFn();AD6(c,a,b);return c;}
function APO(a,b){AD6(a,b,ASD());}
function AD6(a,b,c){var d;a.bo=b;d=new Tr;ES(d);d.l3=new BY;d.fR=b;a.Q=d;a.U=c;}
function FE(a,b){var c;c=a.Q;c.ew=c.ew|(BT(c.jc,b)?0:1);c.jc=b;If(a);}
function Zl(a,b,c){var d,e,f;d=a.Q;e=BT(d.g8,b)?0:1;f=c===d.kc?0:1;if(e){d.g8=b;d.en=null;PZ(d,0);}d.ew=d.ew|(!e&&!f?0:1);d.kc=c;d.hR=0;If(a);}
function GK(a,b){var c;a.h7=b;c=b.sc;BK(b);Zl(a,c,3.0);}
function No(a){var b;b=a.Q;b.dO=Cv(b.dO,null);b.en=null;a.U=Cv(a.U,null);}
function KR(a,b){var c,d,e;c=a.U;d=c.h;e=c.j;b=Cv(c,b);a.U=b;b.dr(d,e,a.bo.cb);}
function EP(a,b,c){a.U.dr(b,c,a.bo.cb);If(a);}
function If(a){var b,c,d;if(a.bo.cb!==0.0){b=a.Q;if(b.g8!==null){c=a.U.j.a;b.j.a=c;d=b.dO;if(d!==null&&c!=Cc(d)&&!(c>=b.hR&&Cc(b.dO)>=b.hR))b.ew=1;b=a.Q;b.bD=a.bo.cb;if(NN(b))c=0;else{b=a.Q;PZ(b,UA(b));c=b.j.b;}b=a.Q.h;d=a.U.h;V(b,d.a,d.b-c|0);return;}}}
function LR(a,b){var c;c=!(a.o8&1)?0:1;return !c&&!B6(a.U,b.g)?0:1;}
function LI(b,c){if(b<0)c=C(419);else if(b>0)c=C(420);return c;}
function N7(a,b,c){var d;d=a.Q.h.a;return (d-c|0)<=b&&b<d?1:0;}
function Mg(a,b,c){var d,e;d=a.Q;e=d.h.a+d.j.a|0;return e<=b&&b<(e+c|0)?1:0;}
function MH(a,b,c){var d;d=a.Q.h.b;return (d-c|0)<=b&&b<d?1:0;}
function Kp(a,b,c){var d,e;d=a.U;e=d.h.b+d.j.b|0;return e<=b&&b<(e+c|0)?1:0;}
function NO(a,b,c){var d,e,f;d=a.Q.h.b-c|0;e=a.U;f=(e.h.b+e.j.b|0)+c|0;return d<=b&&b<f?1:0;}
function ACc(a,b,c){var d,e;d=a.Q.h.b+c|0;e=a.U;return AH0(b,d,(e.h.b+e.j.b|0)-c|0);}
function MA(a,b,c){var d,e,f;d=a.Q;e=d.h.a;f=e-c|0;e=(e+d.j.a|0)+c|0;return f<=b&&b<e?1:0;}
function Wj(a,b,c){var d,e;d=a.Q;e=d.h.a;return AH0(b,e+c|0,(e+d.j.a|0)-c|0);}
function AH0(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BL(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function JL(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.U;i=b.h;j=i.a;k=i.b;b=b.j;l=b.a;m=b.b;b=new Wk;b.za=a;b.zb=e;b.y$=f;b.y_=c;b.y8=g;b.y9=j;b.y6=l;b.y7=d;b.y4=h;b.y5=k;b.tu=m;return b;}
var AD$=G();
function SB(){var a=this;B.call(a);a.qE=null;a.s2=null;a.yY=null;}
var AHg=G(0);
function AGP(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Nr(b)){case -1655966961:if(!Bj(b,C(185)))break a;c=4;break a;case 3401:if(!Bj(b,C(237)))break a;c=3;break a;case 98723:if(!Bj(b,C(184)))break a;c=2;break a;case 3254818:if(!Bj(b,C(183)))break a;c=1;break a;case 3556653:if(!Bj(b,C(182)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=ED();e=new K;N(e);H(H(e,C(421)),b);Bp(d,M(e));c=0;break b;}c=0;}return c;}
function So(){B.call(this);this.qj=null;}
function ARI(a,b,c,d){return Ls(a.qj,b,c,d);}
function Sn(){B.call(this);this.tw=null;}
function AZ1(a,b,c){return G2(a.tw,b,c);}
function Sq(){B.call(this);this.w2=null;}
function ANi(a){var b,c;b=a.w2;c=new AAi;c.w9=b;return c;}
function Sp(){var a=this;B.call(a);a.CH=null;a.CF=null;a.CG=null;a.CI=null;a.CJ=null;}
function WE(){B.call(this);this.jU=null;}
function A0U(a,b){var c,d,e,f,g;c=a.jU;d=c.lR;if(d!==null){e=b.g;f=e.a-d.a|0;g=e.b-d.b|0;e=c.j2;e.a=EV(0,e.a+f|0,c.hK.a-c.jm.a|0);c=a.jU;d=c.j2;d.b=EV(0,d.b+g|0,c.hK.b-c.jm.b|0);}a.jU.lR=b.g;return 1;}
var AEe=G();
function LA(){return "clipboard" in $rt_globals.navigator?1:0;}
function AFP(){var a=this;B.call(a);a.cT=null;a.cc=null;a.j3=null;a.kf=null;a.nj=null;a.jv=null;}
function MW(a){var b=new AFP();AYk(b,a);return b;}
function AYk(a,b){a.cc=BG();a.jv=A6a;a.cT=b;Bc(b.eh,a);}
function F4(a,b,c){a.j3=c;a.nj=b;b=B2(a.cc);while(B7(b)){Jo(B8(b),a.nj);}}
function I8(a,b,c,d){a.jv=d;Rr(a,b,c);}
function Rr(a,b,c){var d,e;d=a.cT;e=d.b2;if(Ba(e.a,e.b)&&d.cb!==0.0){if(a.j3!==null&&!Jc(a)){a.kf=Hc(a.cT,a.j3);d=WH(a,b,c,null);b=new Re;b.sM=a;d.kk=b;Fy(a.cT,a);return;}b=new BR;X(b);L(b);}c=new C2;Bl(c,C(422));L(c);}
function LZ(a){if(Jc(a)){AAc(a.cT,a);Z5(a,null);a.jv.k();a.jv=A6a;}}
function Um(a,b,c,d,e){var f,g,h;f=AIi();ACU(f);MT(f,c.cW());Jo(f,a.nj);Jn(f,a.kf,a.cT);if(d===null)g=b.a;else{g=b.a;g=a.cT.b2.a<((g+(Et(d)).a|0)+(Et(f)).a|0)?g-(Et(f)).a|0:(g+(Et(d)).a|0)-d.fP|0;}h=b.b;b=a.cT.b2;MN(f,Be(0,Bd(g,b.a-(Et(f)).a|0)),Be(0,Bd(h,b.b-(Et(f)).b|0)));b=new AAH;b.t$=a;b.t7=f;b.t8=e;f.oj=b;BC(a.cc,f);return f;}
function WH(a,b,c,d){return Um(a,b,c,d,null);}
function A0A(a,b,c){var d;a.kf=Hc(a.cT,a.j3);d=B2(a.cc);while(B7(d)){Jn(B8(d),a.kf,a.cT);}}
function AOu(a,b){var c;if(!Jc(a))return 0;a:{switch(b.bk){case 27:LZ(a);c=1;break a;default:}c=0;}return c;}
function AHQ(b,c){var d,e,f;d=b.e7;e=c.c0;f=c.fP;return BJ((d.a-(e*3|0)|0)-f|0,(d.b-e|0)-f|0);}
function Z5(a,b){var c,d;c=a.cc.m-1|0;a:{while(true){if(c<0)break a;d=Bw(a.cc,c);if(b===d)break;EB(a.cc,c);Ms(d);c=c+(-1)|0;}}}
function Jc(a){return a.cc.m<=0?0:1;}
function AQd(a){var b,c,d,e,f,g;b=a.cT;c=b.eh;d=0;while(true){e=c.gR.data;f=e.length;if(d>=f)break;if(e[d]===a){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.gc=c.gc-1|0;c.h6=null;}d=d+1|0;}AAc(b,a);b=a.cc;c=B2(b);while(B7(c)){Ms(B8(c));}Ij(b);}
function U6(){B.call(this);this.qk=null;}
function AVO(a,b){L0(a.qk,b);}
function W5(){B.call(this);this.tD=null;}
function ASr(a,b){var c,d,e,f;c=a.tD;if(c.hw!=3&&c.fD!=3){b=b.data;c.hJ=3;d=CM(b[0]);e=EG(b[1]);AA0(c.f,d,e);if(c.fz){b=ER(c);f=Jv(ET(),c.iw);c=new K;N(c);H(Hz(H(H(c,b),C(423)),f),C(240));$rt_globals.console.info($rt_ustr(M(c)));}}}
function AAx(){B.call(this);this.yo=null;}
function AW2(a,b){var c,d,e,f,g,h;c=a.yo;if(c.fD!=3){d=b.data;c.hw=3;if((CM(d[2])).data[0]!=1)L0(c,b);else{e=CM(d[0]);f=EG(d[1]);g=c.hJ!=3?0:1;QH(c.f,e,f,g);if(c.fz){b=ER(c);h=Jv(ET(),c.iw);c=new K;N(c);H(Hz(H(H(c,b),C(424)),h),C(240));$rt_globals.console.info($rt_ustr(M(c)));}}}}
function ABs(){B.call(this);this.j6=null;}
function A0D(a){return a.j6;}
var AID=G(0);
var Lw=G(0);
function Qq(){B.call(this);this.s8=null;}
function AT8(a,b){return KU(a.s8,b);}
function OU(){B.call(this);this.y2=null;}
function AZG(a,b){var c,d;c=a.y2;d=b.bp;return O1(c.charCodeAt(d)&65535);}
var AFc=G();
function AHA(b,c,d,e,f,g){g.a=c.a;g.b=f;Bs(b,d.a,d.b,g,e);Bs(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bs(b,d.a,d.b+f|0,g,e);Bs(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AIL(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bs(b,j,k,i,h);Bs(b,j,k,i,h);Bs(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bs(b,l,j,i,h);Bs(b,l,j,i,h);Bs(b,l+g|0,j+g|0,i,h);}
function P8(){var a=this;B.call(a);a.cN=null;a.pt=null;a.fb=null;a.d6=0;a.cq=0;a.iH=null;a.jq=null;a.g6=0;a.vt=0;}
function OR(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d6;i=Ba(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Be(i,e))a:{while(true){if(d<=e){j=d;break a;}EH(c);j=d+(-1)|0;b=De(d);d=Ba(j,a.cq)%a.fb.b|0;GA(a,c,b,a.g6,g);Jt(a.cN,c,0,d);if(!(j%a.d6|0))break;d=j;}}else{EH(b);k=a.d6-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GA(a,b,De(j),Ba(a.cq,k)+a.g6|0,g);k=k+(-1)|0;j=h;}CJ(a.cN,b);j=Be(i,e);}return j;}k=a.d6;h=Ba(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bd(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EH(c);b=De((d+f|0)+1|0);j=d
+1|0;d=Ba(d,a.cq)%a.fb.b|0;GA(a,c,b,a.g6,g);Jt(a.cN,c,0,d);if(!(j%a.d6|0))break;d=j;}}else{EH(b);d=0;while(d<a.d6){h=h+1|0;GA(a,b,De((h>e?h-f|0:h)+f|0),Ba(a.cq,d)+a.g6|0,g);d=d+1|0;}CJ(a.cN,b);j=Bd(i,e);}return j;}
function U$(b,c,d,e){c=c.data;return d<c.length&&c[d]?JH(b.dV,b,c[d]):e.kx;}
function MR(a,b,c,d,e,f){DX(b,a.pt.a+d.a|0,c+d.b|0,a.iH,a.jq,a.cN,e,f,a.vt);}
function GA(a,b,c,d,e){BP(b,c,a.fb.a-20.0*e,d);}
var AC9=G();
function Ho(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function ADA(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Ta(){var a=this;B.call(a);a.zN=null;a.zO=null;a.hX=null;}
function A22(a,b,c){var d=new Ta();AEM(d,a,b,c);return d;}
function AEM(a,b,c,d){a.zN=b;a.zO=c;a.hX=d;}
function Gx(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.hX.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bd(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hz:i.hA;k=!c?i.nw:i.nx;l=BL(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function LJ(){var a=this;B.call(a);a.hA=0;a.nx=0;a.hz=0;a.nw=0;a.ob=0;}
function MS(a,b,c,d,e){var f=new LJ();AY4(f,a,b,c,d,e);return f;}
function AY4(a,b,c,d,e,f){a.hA=b;a.nx=c;a.hz=d;a.nw=e;a.ob=f;}
var RI=G(0);
var A5e=null;function AIT(){A5e=new QC;}
function AA8(){var a=this;B.call(a);a.rO=null;a.rP=null;}
function AT9(a,b){var c,d,e;c=a.rO;d=a.rP;c=c.ff.ea.u;e=c.a;b=b.g;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Cs(d,b);}
var F1=G(IS);
var ACh=G(Fm);
function ACk(){B.call(this);this.tP=null;}
function ASV(a,b){var c,d;c=a.tP;UH(c,Fk(c,b.g));b=Bi(c);d=c.d;NA(b,d.w,d.z);HX(c);}
function Tk(){B.call(this);this.v$=null;}
function AZ0(a,b){var c,d;c=a.v$;d=c.d5+1|0;c.d5=d;c=new K;N(c);H(H(U(c,d),C(425)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function UN(){B.call(this);this.wi=null;}
function AYG(a){var b,c;b=a.wi;c=new K;N(c);H(H(H(c,C(426)),b),C(427));$rt_globals.console.info($rt_ustr(M(c)));}
var ACs=G(Ej);
var A6I=null;function Wg(b){var c;c=new K;N(c);return M(E2(c,b));}
function AE7(){A6I=F($rt_floatcls());}
var Gh=G();
var A6J=null;var A6K=null;var A3$=null;var A39=null;var A38=null;function AH_(){A6J=DN([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A6K=AHh([Bo(1),Bo(10),Bo(100),Bo(1000),Bo(10000),Bo(100000),Bo(1000000),Bo(10000000),Bo(100000000),Bo(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A3$=AHh([Bo(1),Bo(10),Bo(100),Bo(10000),Bo(100000000),
D(1874919424, 2328306)]);A39=new AAo;A38=new Te;}
var Jm=G();
var A6L=0;var A6M=null;var A6N=null;function AIz(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.qr=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.mv=0;c.mj=0;return;}if(f)d=e|8388608;else{d=e<<1;while(It(C$(Bo(d),Bo(8388608)),Fu)){d=d<<1;f=f+(-1)|0;}}g=AIG(A6N,f);if(g<0)g= -g|0;h=A6N.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jj(d,A6M.data[e],i);if(j<A6L){while($rt_ucmp(j,A6L)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A6N.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jj(d,
A6M.data[e],i);}e=d<<1;d=e+1|0;h=A6M.data;f=g+1|0;k=h[f];l=i-1|0;m=Jj(d,k,l);n=Jj(e-1|0,A6M.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Ba($rt_udiv(j,o),o):q<0?Ba($rt_udiv(j,k),k)+k|0:Ba($rt_udiv((j+(k/2|0)|0),k),k);if(Dw(Bo(d),Bo(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.mv=d;c.mj=g-50|0;}
function Jj(b,c,d){return GB(FZ(Cf(C$(Bo(b),D(4294967295, 0)),C$(Bo(c),D(4294967295, 0))),32-d|0));}
function AHK(){A6L=$rt_udiv((-1),10);A6M=DN([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A6N=DN([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Te(){var a=this;B.call(a);a.mv=0;a.mj=0;a.qr=0;}
function NY(){var a=this;B.call(a);a.C7=null;a.vb=0.0;a.Bo=0.0;a.f_=null;a.iP=null;a.ng=null;a.fT=0;}
function AJy(a,b){var c;if(b!==null){a.iP=b;return a;}c=new BR;Bl(c,C(428));L(c);}
function AEZ(a,b){var c;if(b!==null){a.ng=b;return a;}c=new BR;Bl(c,C(428));L(c);}
function X6(a,b,c,d){var e,f,g,$$je;e=a.fT;if(!(e==2&&!d)&&e!=3){a.fT=d?2:1;while(true){try{f=AF2(a,b,c);}catch($$e){$$je=EL($$e);if($$je instanceof Bt){g=$$je;L(AUw(g));}else{throw $$e;}}if(H4(f))return f;if(IM(f)){if(d&&DZ(b)){g=a.iP;G_();if(g===A4C)return El(Ce(b));if(Ce(c)<=J(a.f_))return A4F;Fj(b,b.Y+Ce(b)|0);if(a.iP===A4D)MO(c,a.f_);}return f;}if(QJ(f)){g=a.iP;G_();if(g===A4C)return f;if(g===A4D){if(Ce(c)<J(a.f_))return A4F;MO(c,a.f_);}Fj(b,b.Y+KM(f)|0);}else if(LU(f)){g=a.ng;G_();if(g===A4C)break;if(g
===A4D){if(Ce(c)<J(a.f_))return A4F;MO(c,a.f_);}Fj(b,b.Y+KM(f)|0);}}return f;}b=new C2;X(b);L(b);}
function AHj(a,b){var c,d,e,f;c=a.fT;if(c&&c!=3){b=new C2;X(b);L(b);}if(!Ce(b))return AGr(0);if(a.fT)a.fT=0;d=AGr(Be(8,Ce(b)*a.vb|0));while(true){e=X6(a,b,d,0);if(IM(e))break;if(H4(e))d=Zm(a,d);if(!Nb(e))continue;Td(e);}b=X6(a,b,d,1);if(Nb(b))Td(b);while(true){f=a.fT;if(f!=3&&f!=2)break;a.fT=3;if(IM(A4G)){d.ec=d.Y;d.Y=0;d.jf=(-1);return d;}d=Zm(a,d);}b=new C2;X(b);L(b);}
function Zm(a,b){var c,d,e;c=b.h8;d=Kn(c,Be(8,c.data.length*2|0));e=AIj(d,0,d.data.length);Fj(e,b.Y);return e;}
function ABy(){var a=this;B.call(a);a.bq=0;a.bv=0;}
function DH(a,b){var c=new ABy();AIp(c,a,b);return c;}
function AIp(a,b,c){a.bq=b;a.bv=c;}
function AKj(a,b){var c;if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){c=b;return a.bq==c.bq&&a.bv==c.bv?1:0;}return 0;}
function AQs(a){return AFe(I(B,[CT(a.bq),CT(a.bv)]));}
function AX3(a,b){var c;b=b;c=BL(a.bq,b.bq);if(!c)c=BL(a.bv,b.bv);return c;}
var AEo=G(CX);
function TL(){B.call(this);this.B3=null;}
function AK7(a){Bp(By(),C(429));}
var ACQ=G(0);
var A6a=null;function AFL(){A6a=new Wf;}
function HN(){CB.call(this);this.cr=null;}
function Vb(a,b){var c;if(a.cr===null){a.cr=b;return;}c=new D8;X(c);L(c);}
function AXf(a){var b,c,d;b=a.cr.data;c=b.length;d=0;while(d<c){b[d].cE();d=d+1|0;}}
function AO2(a,b){var c,d,e;c=a.cr.data;d=c.length;e=0;while(e<d){c[e].dp(b);e=e+1|0;}}
function ATj(a,b){var c,d,e,f;c=0;d=a.cr.data;e=d.length;f=0;while(f<e){c=c|d[f].cf(b);f=f+1|0;}return c;}
function ALT(a,b,c,d){HD(a,b,c,d);a.Al();}
function AZL(a,b,c,d){var e,f,g,h,i;e=0;f=a.cr.data;g=f.length;h=0;while(h<g){i=f[h];if(B6(i,b.g))e=e|i.cv(b,c,d);h=h+1|0;}return e;}
function ARj(a,b,c){var d,e,f,g,h;d=a.cr.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B6(g,b.g)){h=g.cw(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function AZT(a,b,c){var d,e,f,g,h;d=0;e=a.cr.data;f=e.length;g=0;while(g<f){h=e[g];if(B6(h,b.g))d=d|h.dt(b,c);g=g+1|0;}return d;}
function A0c(a,b){var c,d,e,f,g;c=0;d=a.cr.data;e=d.length;f=0;while(f<e){g=d[f];if(B6(g,b.g))c=c|g.bQ(b);f=f+1|0;}return c;}
function AMs(a,b,c,d){var e,f,g,h,i;e=0;f=a.cr.data;g=f.length;h=0;while(h<g){i=f[h];if(B6(i,b.g))e=e|i.dq(b,c,d);h=h+1|0;}return e;}
function Qf(){var a=this;HN.call(a);a.rf=null;a.yR=null;a.f7=null;a.nZ=null;a.ke=null;a.f9=null;a.fG=null;}
function ANO(a){var b,c,d,e;b=a.j.a/4|0;c=b+Ec(a,1.0)|0;d=AIw(a.h);e=BJ(b,a.j.b);a.cr.data[0].dr(d,e,a.bD);d.a=a.h.a+b|0;e.a=c-b|0;a.cr.data[1].dr(d,e,a.bD);d.a=a.h.a+c|0;e.a=a.j.a-c|0;a.cr.data[2].dr(d,e,a.bD);}
function AVE(a){var b,c;b=AFS(a.fG);c=AGt(a.ke);return BJ((b.a+a.nZ.j.a|0)+c.a|0,b.b);}
function X4(){B.call(this);this.Ah=null;}
function ATy(a,b){var c,d;c=a.Ah;d=c.d5+1|0;c.d5=d;c=b.il;b=new K;N(b);H(H(U(b,d),C(430)),c);$rt_globals.console.info($rt_ustr(M(b)));}
var QC=G();
function AXc(a,b){}
function Fc(){var a=this;CB.call(a);a.cQ=null;a.W=null;a.er=null;}
function APo(){var a=new Fc();Lq(a);return a;}
function Lq(a){ES(a);a.cQ=new Bg;a.W=new Bg;}
function AVq(a,b){a.er=b;}
function Li(a,b,c){V(a.cQ,b,c);}
function AEn(a){var b;b=a.W;b.a=VW(a,b.a);b=a.W;b.b=ABG(a,b.b);}
function AFv(a,b){var c,d;c=a.W.a;d=VW(a,b);a.W.a=d;return c==d?0:1;}
function AJV(a,b){var c,d;c=a.W.b;d=ABG(a,b);a.W.b=d;return c==d?0:1;}
function ABG(a,b){return Be(0,Bd(b,a.cQ.b-a.j.b|0));}
function VW(a,b){return Be(0,Bd(b,a.cQ.a-a.j.a|0));}
function Qy(){var a=this;Fc.call(a);a.bS=null;a.dW=null;a.hH=null;a.y3=null;a.eb=null;a.b4=null;a.eP=null;a.fy=null;a.dJ=0;a.fw=0;a.Ak=null;a.dU=0;a.eD=0;a.ha=0;a.fQ=0;a.fI=0;a.cP=0;a.eQ=null;a.jP=null;a.xm=null;a.h4=null;}
function A3i(a,b){var c=new Qy();AJv(c,a,b);return c;}
function AJv(a,b,c){Lq(a);a.dW=RD();a.hH=new Bg;a.b4=A6O;a.eP=R(JK,0);a.dU=0;a.eD=0;a.ha=0;a.fQ=0;a.fI=0;a.eQ=AG5(0);a.h4=JA();a.bS=b;a.jP=c;a.Ak=c;PQ(a);}
function PQ(a){a.dJ=Cd(2.0,a.bS.cb);}
function Uy(a){return a.b4.data.length?0:1;}
function V$(a,b){Su(a);a.b4=b;}
function Su(a){V(a.hH,0,0);}
function Vc(a,b,c){a.xm=b;a.y3=c;a.eb=null;a.eQ=null;a.fw=0;Su(a);}
function AZY(a){a.fy=Cv(a.fy,null);V(a.hH,0,0);Fl(a.h4);a.eQ=null;a.b4=A6O;a.eP=null;a.dU=0;a.eD=0;a.ha=0;ZW(a.dW);a.jP=null;}
function AUJ(a,b,c){Xw(a);PQ(a);a.eb=null;a.eQ=null;a.fw=0;}
function AS$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=JZ(a.bS);if(Uy(a))return;KE(a);Cl(c,a.eb);d=D_(a);e=AGO(c,a.fw);f=Bd(HY(a.j.b,d),a.b4.data.length)+30|0;g=a.xm.z$;h=a.eP.data;d=h.length;if(d<f){a:{i=a.fQ;j=a.fI;k=a.b4;l=a.eQ;m=a.h4;n=R(JK,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.gA!==c){ABo(l,q,m);o[f]=Mk(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Mk(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Mk(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ABo(l,c,m);h[f]=null;}f=f+1|0;}a.eP=n;Cs(a.hH,Mj(a.eQ));XJ(a,a.bS.bU);}a.fQ=Bd((a.W.b+a.dJ|0)/(D_(a)+a.dJ|0)|0,a.b4.data.length-1|0);a.fI=Bd((((a.W.b+a.dW.t.b|0)-1|0)+a.dJ|0)/(D_(a)+a.dJ|0)|0,a.b4.data.length-1|0);if(!a.eP.data.length)return;AGJ(a,e);ABe(a,b);q=g.yV;c=a.h;Bs(b,c.a,c.b,a.j,q);c=a.dW.u;i=c.a;j=c.b;p=CC(a.bS,2.0);s=a.bS.dw;t=a.fQ;u=i+p|0;while(t<=a.fI){l=W4(a,t);d=Ba(t,D_(a));v
=t+1|0;w=d+Ba(v,a.dJ)|0;x=u+a.dU|0;y=x+a.eD|0;z=a.cP!=t?0:1;m=!z?q:g.rM;ba=!z?g.sX:g.kK;bb=!z?g.qg:g.kK;bc=!z?g.qU:g.kK;bd=(j+w|0)-a.W.b|0;DX(b,u,bd,l.iY,l.sk,a.fy,ba,m,a.bS.cx);DX(b,x,bd,l.ju,l.kH,a.fy,bb,m,a.bS.cx);DX(b,y,bd,l.iZ,l.kd,a.fy,bc,m,a.bS.cx);d=l.iY.a;be=u+d|0;V(s,Be(0,a.dU-d|0),l.iY.b);Bs(b,be,bd,s,m);d=u+a.dU|0;f=l.ju.a;bf=d+f|0;V(s,Be(0,a.eD-f|0),l.ju.b);Bs(b,bf,bd,s,m);d=l.iZ.a;bg=y+d|0;V(s,Be(0,(((a.dW.t.a-d|0)-a.eD|0)-a.dU|0)-p|0),l.iZ.b);Bs(b,bg,bd,s,m);bh=(i+a.j.a|0)-p|0;V(s,p,D_(a)+a.dJ
|0);Bs(b,bh,bd,s,q);t=v;}FY(b);}
function AGJ(a,b){var c,d,e,f,g,h;c=0;d=a.fQ;while(d<=a.fI){e=W4(a,d);if(!(e!==null&&e.gA===a.b4.data[d])){f=a.eP.data;g=a.b4;e=a.eQ;h=a.h4;c=d%f.length|0;if(f[c]!==null)ABo(e,f[c],h);f[c]=Mk(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cs(a.hH,Mj(a.eQ));XJ(a,a.bS.bU);}}
function XJ(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.hH;c=DV(b,c.a+150|0,c.b,a.bS.cx);Cl(c,a.eb);d=a.eb;e=d.dm;f=e-(e+d.ev)/16.0;g=a.eP.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gA.k0;k=d.kH;BP(c,j,k.bm+a.fw,f+k.bs);j=d.gA.lb;d=d.kd;BP(c,j,d.bm+a.fw,f+d.bs);}i=i+1|0;}a:{d=a.h4;if(d.c3>0){h=d.cX;i=0;b:while(true){g=d.b6.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cS;l=j.cO;k=k;l=l.lw;BP(c,k,l.bm+a.fw,f+l.bs);j=j.cU;if(h!=d.cX)break b;}i=i+1|0;}b=new H0;X(b);L(b);}}if(a.fy===null)a.fy=CS(b);CJ(a.fy,
c);Es(c);}
function W4(a,b){var c;c=a.eP.data;return c[b%c.length|0];}
function AX2(a,b){Cs(a.dW.t,b);}
function AY9(a,b){Cs(a.dW.u,b);}
function Xw(a){var b,c,d,e,f,g,h,i,j;b=JZ(a.bS);if(Uy(a))return;KE(a);Cl(b,a.eb);c=AGO(b,a.fw);d=a.b4.data;e=d.length;f=0;while(f<e){g=d[f];h=M2(c,g.hg);i=M2(c,g.k0);j=M2(c,g.lb);a.dU=Be(a.dU,h);a.eD=Be(a.eD,i);a.ha=Be(a.ha,j);f=f+1|0;}}
function AOm(a,b){var c;c=Za(a,b.g);if(c>=0)a.cP=c;return E4(a.dW,a.h)&&Gr(a.bS.cH)?1:0;}
function AMB(a,b,c){if(!E4(a.dW,b.g)&&!KS(a.dW)){b=a.Ak;if(b!==null)b.k();}return null;}
function AQl(a,b,c,d){var e;if(d==1){e=Za(a,b.g);if(e>=0)TE(a,a.b4.data[e]);}return 1;}
function TE(a,b){a.jP.k();b.sN.k();}
function Za(a,b){var c,d,e;if(!a.eP.data.length)return (-1);c=D_(a);d=(b.b-a.h.b|0)+a.W.b|0;e=a.dJ;e=(d+e|0)/(c+e|0)|0;if(e<a.b4.data.length)return e;return (-1);}
function D_(a){return EW(a.eb);}
function KE(a){var b;if(a.eb===null){b=Hc(a.bS,a.y3);a.eb=b;a.eQ=AG5(EW(b));a.fw=CU(a.eb.pj);}}
function AZi(a,b){var c,d,e;a:{switch(b.bk){case 13:TE(a,a.b4.data[a.cP]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cP=a.fQ;b=a.er;c=a.W;I2(b,c.a,c.b-(a.j.b/2|0)|0);return 0;case 34:a.cP=a.fI;b=a.er;c=a.W;I2(b,c.a,c.b+(a.j.b/2|0)|0);return 0;case 35:case 39:a.cP=a.b4.data.length-1|0;break a;case 36:case 37:a.cP=0;break a;case 38:d=a.cP;e=a.b4.data.length;a.cP=((d+e|0)
-1|0)%e|0;break a;case 40:a.cP=(a.cP+1|0)%a.b4.data.length|0;break a;default:break a;}a.jP.k();return 0;}e=a.cP;if(e<=a.fQ)I2(a.er,a.W.a,Ba(e,D_(a))+Ba(a.cP,a.dJ)|0);else if(e>=a.fI)I2(a.er,a.W.a,(Ba(e+1|0,D_(a))+Ba(a.cP+2|0,a.dJ)|0)-a.j.b|0);return 0;}
var T7=G();
function AR0(a){}
function KG(){var a=this;CB.call(a);a.nI=null;a.wj=null;a.yW=null;a.bA=null;a.dg=null;a.dx=null;a.s6=null;a.qp=null;a.ub=0.0;a.oK=null;a.n8=null;}
function J$(a,b){var c=new KG();ASS(c,a,b);return c;}
function A6P(a,b){var c=new KG();AAb(c,a,b);return c;}
function ASS(a,b,c){AAb(a,b,c.cH);}
function AAb(a,b,c){var d;ES(a);d=new Pl;d.xl=a;a.wj=d;d=new Pk;d.x1=a;a.yW=d;a.ub=10.0;a.bA=b;a.nI=c;b.er=a;}
function AQZ(a){var b;b=a.bA;b.er=null;a.bA=Cv(b,null);}
function Hd(a,b,c){var d;a.n8=c;a.oK=b;d=a.dg;if(d!==null)HV(d,b,c);b=a.dx;if(b!==null)HV(b,a.oK,a.n8);}
function AM0(a,b,c,d){HD(a,b,c,d);HD(a.bA,b,c,d);if(d!==0.0)NG(a);}
function I2(a,b,c){KQ(a,b);Lj(a,c);}
function NG(a){var b;AEn(a.bA);b=Gm(a)*3|0;if(Yv(a,b))S1(a);else a.dx=null;if(ACM(a,b))VN(a);else a.dg=null;}
function ACM(a,b){var c;c=a.j.b;return c>b&&a.bA.cQ.b>c?1:0;}
function Yv(a,b){var c;c=a.j.a;return c>b&&a.bA.cQ.a>c?1:0;}
function S1(a){var b,c,d,e,f,g;b=a.dx;if(b===null)b=IV();a.dx=b;OC(a,b);c=a.dx;b=a.bA;d=b.W.a;e=a.h;f=e.a;g=a.j;QF(c,d,f,g.a,b.cQ.a,e.b+g.b|0,Gm(a));}
function VN(a){var b,c,d,e,f,g;b=a.dg;if(b===null)b=IV();a.dg=b;OC(a,b);c=a.dg;b=a.bA;d=b.W.b;e=a.h;f=e.b;g=a.j;J3(c,d,f,g.b,b.cQ.b,e.a+g.a|0,Gm(a));}
function Gm(a){return Ec(a,a.ub);}
function OC(a,b){HV(b,a.oK,a.n8);}
function AYx(a,b){var c;a.bA.dp(b);if(!(a.dg===null&&a.dx===null)){B5(b,1);c=a.dg;if(c!==null)GG(c,b);c=a.dx;if(c!==null)GG(c,b);c=a.dg;if(c!==null)GN(c,b);c=a.dx;if(c!==null)GN(c,b);B5(b,0);}}
function SE(a,b){var c,d;a:{b:{c=a.dg;if(!(c!==null&&Ix(c,b))){c=a.dx;if(c===null)break b;if(!Ix(c,b))break b;}d=1;break a;}d=0;}return d;}
function ARh(a,b,c,d){return !SE(a,b.g)&&!a.bA.cv(b,c,d)?0:1;}
function KQ(a,b){var c;if(AGi(a,b)){c=a.s6;if(c!==null)c.k();}}
function Lj(a,b){var c;if(ABI(a,b)){c=a.qp;if(c!==null)c.k();}}
function AGi(a,b){var c;c=AFv(a.bA,b);if(Yv(a,Gm(a)*3|0))S1(a);return c;}
function ABI(a,b){var c;c=AJV(a.bA,b);if(ACM(a,Gm(a)*3|0))VN(a);return c;}
function AQ1(a,b,c){var d,e;d=a.dg;if(d!==null){e=FQ(d,b.g,a.wj,1);if(e!==null)return e;}d=a.dx;if(d!==null){e=FQ(d,b.g,a.yW,0);if(e!==null)return e;}return a.bA.cw(b,c);}
function APm(a,b,c){return SE(a,b.g)?1:0;}
function AO$(a,b){var c,d,e;c=a.dg;d=c!==null&&FW(c,b.g,a.nI)?1:0;c=a.dx;e=c!==null&&FW(c,b.g,a.nI)?1:0;return !d&&!e&&!a.bA.bQ(b)?0:1;}
function AU3(a,b,c,d){var e,f;if(!B6(a,b.g))return 0;e=Cd(d*0.5,a.bD);f=Cd(c*0.5,a.bD);if(b.bL){f=f+e|0;e=0;}if(a.dg!==null&&e)Lj(a,a.bA.W.b+e|0);if(a.dx!==null&&f)KQ(a,a.bA.W.a+f|0);return 1;}
function AGt(a){var b,c;b=Gm(a);c=a.bA.ho();c.a=Be(c.a,b);c.b=Be(c.b,b);return c;}
function Py(){var a=this;Fc.call(a);a.lC=null;a.o1=null;a.wG=null;a.ra=0.0;}
function AR8(a){var b;b=Cd(20.0,a.bD);return BJ(b,b);}
function AX9(a,b){var c,d,e;Li(a,b.a*3|0,b.b*5|0);c=a.wG;d=c.sa;c=c.r_;e=new K;N(e);H(H(H(e,c),C(28)),b);FE(d,M(e));}
function ASl(a,b){var c,d,e,f,g,h,i,j,k,l,m;AJB(a,b);ABe(a,b);c=Cd(30.0,a.bD);d=a.W;e=d.a;f=Ba(e/c|0,c);g=d.b;h=Ba(g/c|0,c);d=a.j;i=Ba(((e+d.a|0)-1|0)/c|0,c);e=Ba(((g+d.b|0)-1|0)/c|0,c);d=a.o1;d.b=c;d.a=c;a.lC.bC=1.0;while(h<=e){g=a.h.b-a.W.b|0;j=f;while(j<=i){k=a.h.a-a.W.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AJq(l);m=m+1|0;}Uj(AI3(l),0.75,a.ra,a.lC);Bs(b,k+j|0,g+h|0,a.o1,a.lC);j=j+c|0;}h=h+c|0;}FY(b);}
function ATo(a,b){}
function Q8(){var a=this;B.call(a);a.sa=null;a.r_=null;}
function Tr(){var a=this;CB.call(a);a.fR=null;a.g8=null;a.jc=null;a.en=null;a.kc=0.0;a.ew=0;a.hR=0;a.dO=null;a.l3=null;}
function UA(a){var b;if(NN(a))return 0;AA9(a);b=CC(a.fR,a.kc);return EW(a.en)+(b*2|0)|0;}
function K2(a){var b;b=a.j;return b.a&&b.b?0:1;}
function NN(a){return a.g8!==null&&a.jc!==null?0:1;}
function PZ(a,b){a.j.b=b;}
function P3(a,b,c,d,e){var f,g;f=a.fR.dw;V(f,d,a.j.b);g=a.h;Bs(b,g.a+c|0,g.b,f,e);}
function AA9(a){if(a.en===null)a.en=Hc(a.fR,a.g8);}
var Y2=G(Ej);
var A6Q=null;function C8(b,c){return Long_udiv(b, c);}
function AGZ(b,c){return Long_urem(b, c);}
function Dw(b,c){return Long_ucompare(b, c);}
function AHS(){A6Q=F($rt_longcls());}
function AAi(){B.call(this);this.w9=null;}
function AN9(a,b){Dy(a.w9,b);}
function ACN(){B.call(this);this.zV=null;}
function AWn(a){X9(a.zV);}
function ACG(){B.call(this);this.AA=null;}
function AX4(a){ABt(a.AA);}
function T0(){B.call(this);this.t6=null;}
function AYS(a){Q6(a.t6);}
function ACL(){var a=this;HN.call(a);a.pC=null;a.tz=null;a.tg=null;a.AN=null;}
function AOj(a){var b,c,d,e,f;b=Cd(20.0,a.bD);c=a.j.a;d=(c/2|0)-(b/2|0)|0;c=c-d|0;e=AIw(a.h);f=BJ(d,a.j.b);a.cr.data[0].dr(e,f,a.bD);e.a=a.h.a+c|0;a.cr.data[2].dr(e,f,a.bD);e.a=a.h.a+d|0;f.a=c-d|0;a.cr.data[1].dr(e,f,a.bD);}
function AAf(){B.call(this);this.ns=null;}
var A6O=null;function ANE(){var a=new AAf();ADL(a);return a;}
function ADL(a){a.ns=BG();}
function Vh(a,b,c,d,e){var f;f=new KT;f.sN=e;f.k0=c;f.lb=d;f.hg=b;BC(a.ns,f);}
function ABX(a){return F$(a.ns,A6O);}
function Zs(b){return b===null?C(21):ABa(b);}
function AJw(){A6O=R(KT,0);}
function JK(){var a=this;B.call(a);a.sk=null;a.kH=null;a.kd=null;a.iY=null;a.ju=null;a.iZ=null;a.gA=null;}
function Mk(b,c,d,e){var f,g,h;f=new JK;f.iY=new Bg;f.ju=new Bg;f.iZ=new Bg;f.gA=b;g=Cn(e,b.hg);if(g!==null)g.ij=g.ij+1|0;else{g=new ABu;h=J9(c,b.hg,d);g.ij=1;g.lw=h;Ed(e,b.hg,g);}e=g.lw;f.sk=e;V(f.iY,e.bd|0,e.bC|0);e=J9(c,b.k0,d);f.kH=e;V(f.ju,e.bd|0,e.bC|0);b=J9(c,b.lb,d);f.kd=b;V(f.iZ,b.bd|0,b.bC|0);return f;}
function ABo(b,c,d){var e,f,g;e=c.gA.hg;f=Cn(d,e);g=f.ij-1|0;f.ij=g;if(!g){Lb(d,e);IK(b,f.lw);}IK(b,c.kH);IK(b,c.kd);}
var N5=G(0);
var A5S=null;var A5T=null;function AEN(){A5S=EM(40,40,40,200);A5T=EM(43,43,43,128);}
function AAo(){var a=this;B.call(a);a.mQ=Fu;a.l6=0;a.qe=0;}
var Wf=G();
function ASb(a){}
function RQ(){var a=this;B.call(a);a.zD=null;a.zA=null;a.zB=null;}
function AOc(a){var b,c,d,e,f;b=a.zD;c=a.zA;d=a.zB;e=By();f=new K;N(f);b=H(f,b);BN(b,9);b=H(b,c);BN(b,9);H(b,d);Bp(e,M(f));}
function Pl(){B.call(this);this.xl=null;}
function AKu(a,b){var c;c=a.xl;Lj(c,FH(b,c.bA.cQ.b-c.j.b|0));}
function Pk(){B.call(this);this.x1=null;}
function AKK(a,b){var c;c=a.x1;KQ(c,FH(b,c.bA.cQ.a-c.j.a|0));}
function KT(){var a=this;B.call(a);a.sN=null;a.k0=null;a.lb=null;a.hg=null;}
var C2=G(Bt);
var AIR=G(Fm);
function AUw(a){var b=new AIR();AOQ(b,a);return b;}
function AOQ(a,b){a.ka=1;a.ku=1;a.mI=b;}
function AJK(){var a=this;B.call(a);a.n0=null;a.md=null;a.eB=null;a.l2=null;a.bx=null;a.oR=null;a.m0=null;a.fH=null;a.gu=null;a.jd=null;}
function ASj(a,b){var c=new AJK();AWO(c,a,b);return c;}
function AWO(a,b,c){var d,e,f;a.eB=b;a.l2=c;a.bx=ATW();b=new K;N(b);a.jd=b;a.fH=JA();b=new RT;d=AJo(16);b.gm=0;b.dT=R(Jk,d);b.wl=0.75;Tv(b);a.gu=b;b=new TJ;c=a.bx;e=a.jd;f=a.fH;b.du=c;b.lQ=e;b.rZ=f;a.oR=b;b=new Ts;b.cV=c;b.mA=e;b.rg=f;a.m0=b;}
function V5(a){var b,c,d,e,f,g,h;a:{b=MG(a.eB.eY);c=b.iM;if(c.c3>0){d=c.cX;e=0;b:while(true){f=b.iM.b6.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cS;if(Mv(a.fH,g))Cn(a.fH,g);else{h=a.fH;Ed(h,g,CT(h.c3));}c=c.cU;if(d!=b.iM.cX)break b;}e=e+1|0;}b=new H0;X(b);L(b);}}b=a.eB.fm;if(b!==null)YD(a,b);Bq(a.bx,a.eB.eY.c3);b=RG(MG(a.eB.eY));while(F5(b)){c=PI(b);GP(a.bx,a.jd.K,J(c));BV(a.jd,c);}b=RG(MG(a.eB.eY));while(F5(b)){c=PI(b);c=Cn(a.eB.eY,c);Bq(a.bx,c.m);c=B2(c);while(B7(c)){g=B8(c);g=Cn(a.fH,g);Bq(a.bx,
g.bp);}}if(a.eB.fm===null)Bq(a.bx,(-1));else{Bq(a.bx,a.gu.gm);Zh(a,a.eB.fm);}if(a.l2===null)Bq(a.bx,(-1));else{Bq(a.bx,1);ADl(a.l2,a.bx,a.gu);}a.n0=Qi(a.bx);a.md=Gc(M(a.jd));}
function YD(a,b){var c,d,e,f,g,h;if(ABx(a.gu,b))NX(a.gu,b);else{c=a.gu;d=CT(c.gm);if(b===null){e=Ya(c);if(e===null){c.lv=c.lv+1|0;e=ABB(c,null,0,0);f=c.gm+1|0;c.gm=f;if(f>c.oS)V0(c);}}else{g=Mc(b);h=g&(c.dT.data.length-1|0);e=V_(c,b,h,g);if(e===null){c.lv=c.lv+1|0;e=ABB(c,b,h,g);f=c.gm+1|0;c.gm=f;if(f>c.oS)V0(c);}}e.cO=d;}b=b.cJ;if(b===null)return;c=new UV;c.rh=a;b.e6(c);}
function Zh(a,b){var c,d,e,f;c=(NX(a.gu,b)).bp;Bq(a.bx,c);if(b instanceof Nh)Bq(a.bx,(-1));else if(!(b instanceof KV))Bq(a.bx,0);else Bq(a.bx,1);d=a.oR;Bq(d.du,b.eL.cZ());e=b.eL;f=new Vg;f.uB=d;e.e6(f);d=a.m0;Bq(d.cV,b.fn.cZ());e=b.fn;f=new S9;f.tm=d;e.e6(f);d=b.kS;Bq(a.bx,d.cZ());e=new TW;e.zp=a;d.e6(e);d=b.hj;Bq(a.bx,d.cZ());d=d.b7();while(d.cA()){e=d.b8();OJ(a.oR,e.kU);G3(a.m0,e.ki);Bq(a.bx,e.q0);}d=b.ti;if(d===null)Bq(a.bx,(-1));else Bq(a.bx,(Cn(a.fH,d)).bp);b=b.cJ;Bq(a.bx,b.cZ());d=new PF;d.pK=a;b.e6(d);}
function Rn(){B.call(this);this.uj=null;}
function AXg(a,b){var c,d,e,f,g,h,i,j;c=a.uj;if(c.fz){d=ER(c);e=new K;N(e);H(H(e,d),C(431));$rt_globals.console.info($rt_ustr(M(e)));}b=b.data;f=CM(b[0]);g=EG(b[1]);h=(CM(b[2])).data[0];if(c.f.cm==h){i=null;j=null;if(b.length>=5){i=CM(b[3]);j=EG(b[4]);}Vp(c.f,f,g,i,j);Fl(c.f.dz);Fl(c.f.dH);MK(c.f);Ih(c.f);NS(c);}}
function AAy(){B.call(this);this.vc=null;}
function AVS(a,b){var c,d,e,f;c=a.vc;if(c.fD!=3){b=b.data;d=CM(b[0]);e=EG(b[1]);Vp(c.f,d,e,null,null);if(c.fz){b=ER(c);f=Jv(ET(),c.yN);c=new K;N(c);H(Hz(H(H(c,b),C(432)),f),C(240));$rt_globals.console.info($rt_ustr(M(c)));}}}
function Rw(){var a=this;B.call(a);a.uw=null;a.ux=null;a.uv=0;}
function AUR(a,b){var c,d,e;c=a.uw;d=a.ux;e=a.uv;d.i(T8(c,(b.g.a+e|0)-c.eT.a|0));}
function Rv(){var a=this;B.call(a);a.qY=null;a.qW=null;a.qX=0;}
function AZX(a,b){var c,d,e;c=a.qY;d=a.qW;e=a.qX;d.i(P4(c,(b.g.b+e|0)-c.eT.b|0));}
var E8=G(0);
function Wa(){var a=this;B.call(a);a.jp=0;a.pp=0;a.k5=0;a.hn=0;a.iL=null;}
function B7(a){return a.jp>=a.k5?0:1;}
function B8(a){var b,c;PP(a);b=a.jp;a.hn=b;c=a.iL;a.jp=b+1|0;return c.m2(b);}
function Ys(a){var b,c,d;if(a.hn<0){b=new C2;X(b);L(b);}PP(a);a.iL.pq(a.hn);a.pp=a.iL.b1;c=a.hn;d=a.jp;if(c<d)a.jp=d-1|0;a.k5=a.k5-1|0;a.hn=(-1);}
function PP(a){var b;if(a.pp>=a.iL.b1)return;b=new H0;X(b);L(b);}
function K0(){var a=this;NY.call(a);a.v1=null;a.yq=null;}
function AF2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.v1;e=0;f=0;g=a.yq;a:{b:{while(true){if((e+32|0)>f&&DZ(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ce(b)+k|0;h=j.length;f=Bd(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BD;c=new K;N(c);U(H(U(H(c,C(433)),l),C(101)),h);Bl(b,M(c));L(b);}if(Ce(b)<m){b=new NL;X(b);L(b);}if(m<0){b=new BD;c=new K;N(c);H(U(H(c,C(102)),m),C(103));Bl(b,M(c));L(b);}n=b.Y;h=n+b.mC|0;e=0;while(e<m){o=k+1|0;i=b.o5.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Y=n+m|0;e=0;}if(!DZ(c)){p=!DZ(b)&&e>=f?A4G:A4F;break a;}i=g.data;n=Ce(c);o=i.length;n=Bd(n,o);q=new AAZ;q.sn=b;q.zl=c;p=AJJ(a,d,e,f,g,0,n,q);e=q.uF;if(p===null&&0==q.l7)p=A4G;k=q.l7;h=0;if(c.pv){b=new J8;X(b);L(b);}if(Ce(c)<k)break;if(h>o){b=new BD;c=new K;N(c);BN(U(H(U(H(c,C(104)),h),C(98)),o),41);Bl(b,M(c));L(b);}l=h+k|0;if(l>o){b=new BD;c=new K;N(c);U(H(U(H(c,C(106)),l),C(101)),o);Bl(b,M(c));L(b);}if(k<0){b=new BD;c=new K;N(c);H(U(H(c,C(102)),k),C(103));Bl(b,M(c));L(b);}o=c.Y;m=0;while(m
<k){l=o+1|0;n=h+1|0;Ze(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Y=c.Y+k|0;if(p!==null)break a;}b=new Jp;X(b);L(b);}b=new BD;c=new K;N(c);BN(U(H(U(H(c,C(104)),k),C(98)),h),41);Bl(b,M(c));L(b);}Fj(b,b.Y-(f-e|0)|0);return p;}
var Sc=G(K0);
function AJJ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(M3(h,2))break a;i=A4G;break a;}c=k+1|0;n=j[k];if(!Gj(a,n)){c=c+(-2)|0;i=El(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(M3(h,3))break a;i=A4G;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gj(a,n))break b;if(!Gj(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(N3(p)){c=k+(-3)|0;i=El(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=El(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(M3(h,4))break a;i=A4G;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ce(h.zl)<2?0:1)break a;i=A4F;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gj(a,n))break c;if(!Gj(a,o))break c;if(!Gj(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Jz(r);m=c+1|0;j[c]=IY(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=El(1);break a;}c=k+(-3)|0;i
=El(1);}h.uF=c;h.l7=f;return i;}
function Gj(a,b){return (b&192)!=128?0:1;}
function AB0(){var a=this;B.call(a);a.Bq=null;a.Br=null;a.Bp=null;}
function UG(){B.call(this);this.pV=null;}
function ARJ(a,b){var c,d;c=a.pV;d=c.d5+1|0;c.d5=d;c=new K;N(c);H(H(U(c,d),C(434)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function PB(){B.call(this);this.pB=null;}
function AKz(a){return a.pB.gL();}
function PA(){B.call(this);this.Aa=null;}
function AMu(a){return a.Aa.gL();}
function Q2(){B.call(this);this.s3=null;}
function AZs(a){return a.s3.gL();}
var WF=G();
function ASM(a){return Gn(1);}
function Y8(){B.call(this);this.sb=null;}
function A0e(a,b){a.sb.i(HS(b));}
var AEs=G();
function ABq(){B.call(this);this.ud=null;}
function AMP(a,b){a.ud.k();}
var AIq=G();
var AEU=G();
function V9(){B.call(this);this.tC=null;}
function ALF(a,b){var c,d,e,f;c=a.tC;d=new K;N(d);H(H(d,C(435)),b);$rt_globals.console.info($rt_ustr(M(d)));d=new AAt;d.Bt=c;d.r5=b;e=new AAv;e.DN=c;c=AJt(e);e=new ABh;e.vV=d;d=b.fS;if(d!==null)d.arrayBuffer().then(Bu(e,"f"),Bu(c,"f"));else{b=b.hQ.getFile();f=new ABi;f.zd=e;f.ze=c;b.then(Bu(f,"f"),Bu(c,"f"));}}
function V8(){B.call(this);this.vT=null;}
function AQR(a,b){var c,d;c=a.vT;d=new K;N(d);H(H(d,C(436)),b);$rt_globals.console.info($rt_ustr(M(d)));d=new O8;d.AM=c;MQ(b,d);}
function Hb(){var a=this;B.call(a);a.i2=null;a.kB=null;a.nR=null;a.h9=null;a.jk=0;a.iA=0;}
function A6R(a,b){var c=new Hb();R6(c,a,b);return c;}
function R6(a,b,c){a.h9=WN(b);a.jk=c;a.iA=0;}
function H6(a){return (JC(a.h9,0)).v;}
function Kc(a){a.iA=2;}
function Iv(a){a.iA=1;}
function Eh(){Hb.call(this);this.eW=null;}
var A5V=null;var A6S=null;function AYb(a,b){var c=new Eh();Nx(c,a,b);return c;}
function Nx(a,b,c){R6(a,b,c);a.eW=A5V;}
function AZ9(a){return H6(a);}
function NV(a){return a.iA!=2?0:1;}
function AJx(a){var b,c,d;b=R(Hb,ACF(a));c=b.data;if(Qk(a,b,0)==c.length)return b;d=new Bt;X(d);L(d);}
function UY(a){return a.eW.data.length;}
function ACF(a){var b,c,d,e;b=1;if(NV(a)){c=a.eW.data;d=c.length;e=0;while(e<d){b=b+ACF(c[e])|0;e=e+1|0;}}return b;}
function Oe(a){var b,c,d,e;b=1;c=a.eW.data;d=c.length;e=0;while(e<d){b=b+Oe(c[e])|0;e=e+1|0;}return b;}
function Qk(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(NV(a)){d=a.eW.data;c=d.length;f=0;while(f<c){e=Qk(d[f],b,e);f=f+1|0;}}return e;}
function AE2(){A5V=R(Eh,0);A6S=new QG;}
function Q4(){B.call(this);this.zo=null;}
function AWz(a){Q6(a.zo);}
function K6(){var a=this;Fc.call(a);a.f3=null;a.co=null;a.eO=null;a.hq=null;a.ga=null;a.lj=null;a.zg=0;a.ql=0;a.nP=0;a.fV=null;a.fW=null;}
function APS(a){NZ(a.hq);Xn(a.co);ZH(a);}
function ZH(a){a.fV=Cv(a.fV,null);a.fW=Cv(a.fW,null);}
function AAN(a,b){a.ga=b;if(!BT(a.lj,b.oX)){a.lj=b.oX;if(a.bD!==0.0)R1(a);}}
function AKQ(a,b,c){Pi(a.co,c);if(a.lj!==null)R1(a);}
function R1(a){var b,c,d,e,f;R4(a.hq);b=a.co;c=a.lj;d=a.bD;e=a.f3.bU;f=b.gG;b.ci=AHJ(c.js,c.hN*d,c.lL,c.jN,f,e);RB(a.co,1.25,a.f3.bU);ZH(a);a.fV=Cv(a.fV,Sw(a.co,M$(707),2,a.f3.bU));a.fW=Cv(a.fW,Sw(a.co,M$(709),2,a.f3.bU));Oh(a);}
function Oh(a){var b;Li(a,0,Ba(a.eO.fg.data.length,a.co.dY));b=a.er;if(b!==null)NG(b);}
function AWS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;c=a.ga.br.d9;d=a.h;Bs(b,d.a,d.b,a.j,c);BK(a.co.ci);e=a.co.dY;f=a.eO.fg.data.length;if(!f)return;g=Bd(f,HY(a.j.b,e)+7|0);h=a.hq;if(h.data.length<g)a.hq=Yh(g,h,a.co,a.zg,a.ql,a.eO);M8(b,a.h,a.j);i=a.W.b;j=f-1|0;k=AEY(i,e,j);i=AEY((a.W.b+a.j.b|0)-1|0,e,j);a.zg=k;a.ql=i;l=a.j.a;m=Ec(a,15.0);n=Ec(a,10.0);o=Ec(a,8.0);p=Be(Cc(a.fW),Cc(a.fV));g=n+p|0;while(k<=i){q=a.eO.fg.data[k];h=a.hq.data;n=k%h.length|0;r=h[n];Wz(r,q.h9,b,e,l,0,k,n);s=Ba(e,k)-a.W.b
|0;t=null;u=m+Ba(g,q.jk)|0;v=a.nP!=k?0:1;if(v){V(a.f3.dw,a.j.a,e);d=a.h;Bs(b,d.a,d.b+s|0,a.f3.dw,a.ga.br.g_);}a:{switch(q.iA){case 1:break;case 2:w=a.fW;break a;default:w=null;break a;}w=a.fV;}if(w!==null){x=a.ga.lt.data[0];Cu(a.co.iU,0.0,0.0,Cc(w),Dg(w));Cs(a.co.hO,w.fj);d=a.co;q=a.h;G1(d,b,w,q.a+u|0,q.b+s|0,x.hT,!v?c:a.ga.br.g_);}d=a.h;PE(r,d.b+s|0,((d.a+u|0)+p|0)+o|0,b,l,e,0,a.ga,null,null,null,v,0,t);k=k+1|0;}FY(b);}
function AZy(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.co.dY;f=((b.g.b-a.h.b|0)+a.W.b|0)/e|0;if(f>=0){g=a.eO.fg.data;if(f<g.length){h=g[f];if(!Vy(a,b,f)){b=h.nR;if(b!==null)b.k();}}}}return 1;}
function ALI(a,b,c){var d,e,f,g;d=a.co.dY;e=((b.g.b-a.h.b|0)+a.W.b|0)/d|0;if(!c&&e>=0){f=a.eO.fg.data;if(e<f.length){g=f[e];if(Vy(a,b,e)){b=g.kB;if(b!==null)b.k();}else{a.nP=e;b=g.i2;if(b!==null)b.k();}}}return A5e;}
function Vy(a,b,c){var d,e,f,g,h,i,j;d=a.eO.fg.data[c];e=Ec(a,15.0);f=Ec(a,10.0);g=Be(Cc(a.fW),Cc(a.fV));h=e+Ba(f+g|0,d.jk)|0;i=(a.h.a-a.W.a|0)+h|0;j=i+g|0;c=b.g.a;return i<=c&&c<j?1:0;}
function AEY(b,c,d){return Bd(b/c|0,d);}
function AH4(){K6.call(this);this.qA=null;}
function AQf(a){var b=new AH4();ARu(b,a);return b;}
function ARu(a,b){Lq(a);a.eO=AKY(R(Hb,0));a.hq=R(Ff,0);a.nP=(-1);a.f3=b;a.co=AOd(b.cx);}
function II(a){a.eO=AKY(AJx(a.qA));if(a.bD!==0.0)Oh(a);}
function Mr(a,b){a.qA=b;II(a);}
function X_(a,b){var c;c=a.ga.br;Hd(b,c.i4,c.i$);return b;}
function St(){B.call(this);this.r3=null;}
function AFM(){var a=this;B.call(a);a.iS=null;a.mY=0;a.fO=0;}
function ATW(){var a=new AFM();ASi(a);return a;}
function ASi(a){a.mY=0;a.iS=BI(16);a.fO=0;}
function GP(a,b,c){Bq(a,b);Bq(a,c);}
function Bq(a,b){var c,d;c=a.iS;d=c.data.length;if(d==a.fO)a.iS=I3(c,d*2|0);c=a.iS.data;d=a.fO;a.fO=d+1|0;c[d]=b;}
function Qi(a){var b,c,d,e,f;b=a.mY;if(b&&a.fO!=b){c=ED();b=a.mY;d=a.fO;e=new K;N(e);H(U(H(U(H(e,C(437)),b),C(438)),d),C(439));Bp(c,M(e));}f=a.iS;b=f.data.length;d=a.fO;if(b!=d)f=I3(f,d);return f;}
function RT(){var a=this;D6.call(a);a.gm=0;a.dT=null;a.lv=0;a.wl=0.0;a.oS=0;}
function AJo(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Tv(a){a.oS=a.dT.data.length*a.wl|0;}
function ABx(a,b){return UI(a,b)===null?0:1;}
function NX(a,b){var c;c=UI(a,b);if(c===null)return null;return c.cO;}
function UI(a,b){var c,d;if(b===null)c=Ya(a);else{d=Mc(b);c=V_(a,b,d&(a.dT.data.length-1|0),d);}return c;}
function V_(a,b,c,d){var e;e=a.dT.data[c];while(e!==null&&!(e.mT==d&&(b!==e.cS?0:1))){e=e.hV;}return e;}
function Ya(a){var b;b=a.dT.data[0];while(b!==null&&b.cS!==null){b=b.hV;}return b;}
function ABB(a,b,c,d){var e,f;e=new Jk;U3(e,b,null);e.mT=d;f=a.dT.data;e.hV=f[c];f[c]=e;return e;}
function V0(a){var b,c,d,e,f,g,h,i;b=a.dT.data.length;b=AJo(!b?1:b<<1);c=R(Jk,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dT.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.mT&f;i=h.hV;h.hV=d[b];d[b]=h;h=i;}e=e+1|0;}a.dT=c;Tv(a);}
function TJ(){var a=this;B.call(a);a.du=null;a.lQ=null;a.rZ=null;}
function OJ(a,b){var c;if(!(b instanceof LV)){Bq(a.du,3);ACd(a,b);Bq(a.du,b.iX);}else{c=b;Bq(a.du,5);ACd(a,c);Bq(a.du,c.iX);Bq(a.du,c.vf);b=c.kq;Bq(a.du,b.m);c=new VI;c.qo=a;Fg(b,c);}}
function ACd(a,b){var c;c=b.eu.i_;GP(a.du,a.lQ.K,J(c));Bq(a.du,b.eu.dA);Oi(a,b.lz);BV(a.lQ,c);}
function Oi(a,b){if(b===null)Bq(a.du,(-1));else Bq(a.du,(Cn(a.rZ,b)).bp);}
function Ts(){var a=this;B.call(a);a.cV=null;a.mA=null;a.rg=null;}
function G3(a,b){var c,d,e;if(b instanceof Hw){c=b;Bq(a.cV,9);XK(a,c.g5);}else if(b instanceof JV){d=b;Bq(a.cV,3);Yb(a,d);Bq(a.cV,d.pR);XK(a,d.hI);}else if(b instanceof I6){e=b;Bq(a.cV,4);G3(a,e.jl);G3(a,e.iE);}else if(b===null)Bq(a.cV,(-1));else{Bq(a.cV,5);Yb(a,b);Bq(a.cV,b.yg);}}
function Yb(a,b){var c;c=b.fC.i_;GP(a.cV,a.mA.K,J(c));Bq(a.cV,b.fC.dA);b=b.gl;if(b===null)Bq(a.cV,(-1));else Bq(a.cV,(Cn(a.rg,b)).bp);BV(a.mA,c);}
function XK(a,b){var c;Bq(a.cV,b.m);c=new U7;c.vU=a;Fg(b,c);}
function Xt(){var a=this;B.call(a);a.yK=0;a.yL=0;}
function R3(){B.call(this);this.ry=null;}
function AQT(a,b){var c;c=a.ry;Dy(c,b);MD(c,null);UF(c);}
var XD=G(Ej);
var A6T=null;function AHm(){A6T=F($rt_doublecls());}
var JN=G();
var A6U=Fu;var A6V=null;var A6W=null;function AEx(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.qe=It(C$(d,D(0, 2147483648)),Fu)?0:1;e=C$(d,D(4294967295, 1048575));f=GB(A2H(d,52))&2047;if(It(e,Fu)&&!f){c.mQ=Fu;c.l6=0;return;}if(f)e=A1m(e,D(0, 1048576));else{e=HE(e,1);while(It(C$(e,D(0, 1048576)),Fu)){e=HE(e,1);f=f+(-1)|0;}}g=A6W.data;h=f<<16>>16;i=0;j=g.length;k=BL(i,j);if(k>0){c=new BR;X(c);L(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BL(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IE(e,A6V.data[h],i);if(AL9(m,A6U)){while(Dw(m,A6U)<=0){j=j+(-1)|0;m=CN(Cf(m,Bo(10)),Bo(9));}g=A6W.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IE(e,A6V.data[h],i);}e=HE(e,1);d=CN(e,Bo(1));g=A6V.data;h=j+1|0;n=g[h];f=i-1|0;n=IE(d,n,f);o=IE(Jv(e,Bo(1)),A6V.data[h],f);p=Bo(1);while(true){q=Cf(p,Bo(10));if(Dw(C8(m,q),C8(o,q))<=0)break;p=q;}r=Bo(1);while
(true){s=Cf(r,Bo(10));if(Dw(C8(m,s),C8(n,s))>=0)break;r=s;}h=Dw(p,r);e=h>0?Cf(C8(m,p),p):h<0?CN(Cf(C8(m,r),r),r):Cf(C8(CN(m,AFr(r,Bo(2))),r),r);if(Dw(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=C8(e,Bo(10));if(Dw(e,D(2808348672, 232830643))<0)break;}else if(Dw(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cf(e,Bo(10));}c.mQ=e;c.l6=j-330|0;}
function IE(b,c,d){var e,f,g,h,i,j,k,l;e=C$(b,Bo(65535));f=C$(FZ(b,16),Bo(65535));g=C$(FZ(b,32),Bo(65535));h=C$(FZ(b,48),Bo(65535));i=C$(c,Bo(65535));j=C$(FZ(c,16),Bo(65535));k=C$(FZ(c,32),Bo(65535));l=C$(FZ(c,48),Bo(65535));return CN(CN(CN(HE(Cf(l,h),32+d|0),HE(CN(Cf(l,g),Cf(k,h)),16+d|0)),HE(CN(CN(Cf(l,f),Cf(k,g)),Cf(j,h)),d)),FZ(CN(CN(CN(Cf(k,e),Cf(j,f)),Cf(i,g)),HE(CN(CN(CN(Cf(l,e),Cf(k,f)),Cf(j,g)),Cf(i,h)),16)),32-d|0));}
function AEj(){A6U=C8(Bo(-1),Bo(10));A6V=AHh([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A6W=A1_([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function S4(){B.call(this);this.qN=null;}
function AKy(a){G4(a.qN,37,3);}
function S5(){B.call(this);this.rk=null;}
function AMq(a){G4(a.rk,40,3);}
function S6(){B.call(this);this.su=null;}
function AZZ(a){G4(a.su,42,3);}
function S7(){B.call(this);this.v3=null;}
function AOA(a){G4(a.v3,45,3);}
function S8(){B.call(this);this.wu=null;}
function AQB(a){G4(a.wu,45,5);}
function Oo(){B.call(this);this.yF=null;}
function A0X(a,b){var c,d;c=a.yF;d=new Bt;Bl(d,$rt_str(b.message));c.i(d);}
var UJ=G(0);
var A4r=null;function A1V(){A1V=Bm(UJ);AX0();}
function AX0(){A4r=new $rt_globals.TextDecoder("utf-16");}
function O3(){CB.call(this);this.zr=null;}
function AKp(a,b){var c;c=a.h;Bs(b,c.a,c.b,a.j,a.zr);}
function AFV(){var a=this;KG.call(a);a.yE=null;a.jg=null;}
function AW3(a){var b=new AFV();AXx(b,a);return b;}
function AXx(a,b){var c;AAb(a,APo(),b.cH);b=APo();a.yE=b;c=new Vo;c.xf=15.0;c.mu=a;c.f2=b;a.jg=c;c=a.bA;if(c!==b){c.er=null;a.bA=Cv(c,b);b.er=a;HD(b,a.h,a.j,a.bD);if(a.bD!==0.0)NG(a);}}
function ANg(a,b,c){if(b===0.0)Li(a.yE,700,1600);}
function Ux(a,b){b=b.br;Hd(a,b.i4,b.i$);}
function AAG(){var a=this;B.call(a);a.sj=0;a.Ay=0;}
function FH(a,b){var c;c=a.Ay;if(c<=0)return 0;return XQ(a.sj,b,c);}
var SN=G(0);
var A4_=null;function ANr(){ANr=Bm(SN);AR2();}
function AR2(){A4_=S(C(272));}
var QG=G();
function AR_(a,b,c){b=b;c=c;return ACb(H6(b),H6(c));}
function AJE(){GM.call(this);this.fg=null;}
function AKY(a){var b=new AJE();AMe(b,a);return b;}
function AMe(a,b){a.fg=b;}
function A0J(a,b){return a.fg.data[b].h9;}
function UX(){B.call(this);this.xh=null;}
function AVw(a){var b,c,d;b=a.xh;c=By();d=H6(b);b=new K;N(b);H(H(b,C(440)),d);Bp(c,M(b));}
function Vo(){var a=this;B.call(a);a.mu=null;a.f2=null;a.xf=0.0;}
function ARA(a){return a.f2.W.b/KD(a)|0;}
function AX7(a){return HY(a.f2.cQ.b,KD(a));}
function ASq(a,b){var c;b=Ba(b,KD(a));c=a.f2;return (b+c.h.b|0)-c.W.b|0;}
function AWf(a){return a.f2.h;}
function APF(a){return a.f2.j;}
function AVo(a,b,c){var d;d=a.mu;d.s6=b;d.qp=c;}
function AVf(a,b){return ABI(a.mu,b);}
function KD(a){return Ec(a.f2,a.xf);}
function Qh(){B.call(this);this.pQ=null;}
function AYw(a,b){JP(a.pQ,b);}
function Qg(){B.call(this);this.Am=null;}
function AUF(a){return a.Am.rf;}
var D8=G(Bt);
function We(){var a=this;B.call(a);a.pJ=null;a.xa=null;a.tM=0;a.uC=0;}
function NI(a,b){return Ce(a.xa)<b?0:1;}
function ABb(){B.call(this);this.u8=null;}
function AK6(a,b){L0(a.u8,b);}
var AFU=G();
function ADj(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADb(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(Em()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new Sx;d.addEventListener("change",Bu(e,"handleEvent"));d.click();}
function R8(){var a=this;B.call(a);a.bu=null;a.qF=null;a.iG=null;a.nH=null;a.lJ=null;a.f8=null;}
function HI(a){return a.bu.cI.hb;}
function Va(a){var b;b=new RR;b.z0=a;return b;}
function AHU(a){var b,c,d,e,f;b=R(Cg,5);c=b.data;d=a.bu;BK(d);e=new UT;e.yh=d;c[0]=C1(C(441),e);e=a.bu;BK(e);f=new UO;f.vW=e;c[1]=C1(C(442),f);d=a.bu;BK(d);e=new UP;e.wx=d;c[2]=C1(C(443),e);d=a.bu;BK(d);e=new UQ;e.ut=d;c[3]=C1(C(444),e);d=a.bu;BK(d);e=new UR;e.pN=d;c[4]=C1(C(445),e);return Ef(b);}
function PO(a,b){var c;c=new O7;c.uN=a;c.uO=b;return c;}
function Km(a,b,c){var d,e,f,g,h,i,j,k,l;a:{EC(a.f8.bW);d=a.bu.d;e=Er(d);f=Hr(d);g=a.bu.fh;if(c===null)h=null;else{A2Z();switch(A6X.data[c.dv]){case 1:h=N0(g,e,f);break a;case 2:h=Ye(g,e,f);break a;default:}b=new EU;X(b);L(b);}}c=a.bu;e=Fk(c,b);g=IU(c.d.f,e.bq,e.bv);f=RY(c,g);if(h!==null){g=c.d;i=e.bq;j=e.bv;e=new ZX;e.DT=c;e.DS=b;e.DR=f;h.sA(g,i,j,e,c.jz);}else{e=Cn(c.d.f.dH,g);if(e!==null)IG(c,e);else{e=Cn(c.d.f.dz,g);if(e!==null&&!Ev(e))Yr(c.kg,b,e,c,f);else{c=c.kg;k=R(Cg,1);l=k.data;e=new Cg;f=c.bW;BK(f);g
=new ABd;g.vP=f;D3(e,g,C(446));l[0]=e;KX(c,b,Ef(k));}}}}
var ADy=G(0);
function Re(){B.call(this);this.sM=null;}
function AVL(a){LZ(a.sM);}
var Xv=G();
var A6Y=null;function AA0(b,c,d){QH(b,c,d,0);}
function QH(b,c,d,e){Wv(b,c,d,null,null,e);}
function Wv(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=LL(c);i=Z(h);j=Z(h);k=Z(h);l=CG(b);c=b.A;if(c.data.length<i)b.A=ADR(c,i);m=0;while(m<i){if(g&&m<l){n=4*Z(h)|0;h.e1=h.e1+n|0;}else b.A.data[m]=DW(X5(h,d,0));m=m+1|0;}MK(b);if(j)b.da=AFx(AGn(h));Fl(b.dH);Fl(b.dz);o=b.dH;g=0;while(g<k){Ed(o,DH(Z(h),Z(h)),DH(Z(h),Z(h)));g=g+1|0;}p=b.dH;o=b.dz;q=Wy(AAY(p));while(F5(q)){r=ACA(q);s=r.cS;p=r.cO;BK(A6Y);r=Cn(o,p);if(r===null){r=BG();Ed(o,p,r);}BC(r,s);}if(o.om===null){p=new PT;p.uM=o;o.om=p;}p=o.om;r=new YA;Nj(r,
p.uM);while(F5(r)){Nv(r);o=r.gO.cO;p=A3X;c=R(B,o.m);d=c.data;F$(o,c);KI(c,p);g=0;t=d.length;while(g<t){p=d[g];Ke(o,g);o.cF.data[g]=p;g=g+1|0;}}QB(h);if(e!==null&&f!==null){p=AOZ(e,f);Pg(p);b.eR=AUi(p.oB,p.io);b.da=AFx(p.oZ);}}
function Vp(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=LL(c);i=Z(h);j=Z(h);k=Z(h)!=1?0:1;l=Z(h);m=Z(h);n=ACa(b,i);o=ACa(b,j);p=(IC(B_(b,n.a),n.b)).data[0].s;q=(IC(B_(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=X5(h,d,i);if(!r)g=IW(p,g);if(r==s)g=IW(g,q);t=n.a+r|0;u=DW(g);c=b.A.data;v=c[t];c[t]=u;if(!k&&I_(v)==I_(u)){t=0;while(t<I_(v)){o=v.s.data[t];w=u.s.data[t];x=o.bX;y=x!=5?0:1;if(!y&&x&&!w.bX){w.bX=x;w.bG=o.bG;}t=t+1|0;}}r=r+1|0;}if(k){if(m){u=AGn(h);w
=Ky(i,j,(-1));Wi(b.da,w,u);}else if(e!==null&&f!==null){v=AOZ(e,f);Pg(v);w=Ky(i,j,(-1));Wi(b.da,w,v.oZ);n=b.eR;n.fm=b.da.c_.ch;n.eY=v.io;}}QB(h);}
function X5(b,c,d){var e,f,g,h,i,j,k,l;e=Z(b);f=R(Ct,e);g=f.data;h=0;while(h<e){i=Z(b);j=Z(b);k=Z(b);l=Z(b);g[h]=D4(Eu(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AI0(){A6Y=new Ut;}
var Yi=G(0);
var OS=G(0);
var H2=G();
function Y_(){H2.call(this);this.yT=null;}
function AAL(a,b){var c,d,e;c=0;while(true){d=a.yT;if(d.jH===null)d.jH=B2(d.wM);if(!B7(d.jH))e=0;else{c=b.P(B8(d.jH));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var QA=G(0);
function On(){var a=this;B.call(a);a.Bw=null;a.Bx=null;a.Bu=0;a.Bv=0;}
var ACn=G();
function AKR(a,b){b=b;b.cN=Cv(b.cN,null);}
var AEA=G(0);
function AHJ(b,c,d,e,f,g){f=f.data;f[I7(0,0)]=HU(g,b,c,d,0);f[I7(0,1)]=HU(g,b,c,d,2);f[I7(1,0)]=HU(g,b,c,e,0);f[I7(1,1)]=HU(g,b,c,e,2);return f[I7(0,0)];}
function Jk(){var a=this;GI.call(a);a.mT=0;a.hV=null;}
var H0=G(Bt);
function AA4(){B.call(this);this.t3=null;}
function AQ9(a,b){var c,d,e;c=a.t3;EC(c.c4.f7.bW);d=By();e=new K;N(e);H(H(e,C(447)),b);Bp(d,M(e));d=A0_(b,0,c);Mr(c.c4.f9,d);b=LC(b.kF,Fh(I4(b),C(448)));FE(c.gU,b);}
var ACw=G();
function AYN(a,b){ADj(b);}
function ACv(){B.call(this);this.rL=null;}
function AUD(a,b){var c,d,e;c=a.rL;d=0;e=b.length;while(d<e){c.i(AIJ(b[d],null));d=d+1|0;}}
var AB2=G();
function AVr(a,b){ADj(b);}
function AB1(){var a=this;B.call(a);a.ro=null;a.rp=null;}
function AVX(a,b){var c,d,e;c=a.ro;d=a.rp;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);c.i(A11(b,d,R(BM,0)));}
function AIW(){var a=this;B.call(a);a.h3=null;a.e1=0;}
function LL(a){var b=new AIW();ASR(b,a);return b;}
function ASR(a,b){a.h3=b;a.e1=0;}
function Z(a){var b,c;b=a.h3.data;c=a.e1;a.e1=c+1|0;return b[c];}
function QB(a){var b,c,d,e;if(a.e1!=a.h3.data.length){b=ED();c=a.h3.data.length;d=a.e1;e=new K;N(e);H(U(H(U(H(e,C(437)),c),C(449)),d),C(450));Bp(b,M(e));}}
function Qp(){var a=this;B.call(a);a.BO=null;a.sP=0;}
function ATD(a,b){var c,d,e,f;c=a.sP;d=(CM(KK(b,0))).data;b=By();e=d[0];f=new K;N(f);U(H(U(H(f,C(451)),c),C(452)),e);Bp(b,M(f));b=By();e=d[1];f=new K;N(f);U(H(U(H(f,C(451)),c),C(453)),e);Bp(b,M(f));}
function ADe(){B.call(this);this.Nn=null;}
var Sx=G();
function ATa(a,b){}
function AAH(){var a=this;B.call(a);a.t$=null;a.t7=null;a.t8=null;}
function AOg(a,b,c,d){var e,f;b=a.t$;e=a.t7;f=a.t8;Z5(b,e);if(f!==null)d.mg.k();if(AAX(d)){if(d.mZ===null)WH(b,AHQ(d,e),d.jW,e);else Um(b,AHQ(d,e),d.jW,e,d.mZ);}}
var Ut=G();
var Fz=G();
var A6Z=null;var A60=null;var A5m=null;var A61=null;var A62=null;var A63=null;function AIy(){A6Z=new Tl;A60=new Ti;A5m=new Tj;A61=new Tg;A62=new Th;A63=new Vd;}
function AG6(){var a=this;B.call(a);a.oB=null;a.oZ=null;a.io=null;a.cz=null;a.n4=null;a.mw=null;a.iF=null;a.m4=null;a.oV=null;}
function AOZ(a,b){var c=new AG6();AZJ(c,a,b);return c;}
function AZJ(a,b,c){a.cz=LL(b);a.n4=c;}
function Pg(a){var b,c,d,e,f,g,h,i;b=Z(a.cz);c=new Ni;P9(c);a.io=c;a.iF=BG();d=0;while(d<b){e=Z(a.cz);f=Z(a.cz);g=Eu(a.n4,e,f);Ed(a.io,g,BG());BC(a.iF,g);d=d+1|0;}c=Wy(AAY(a.io));while(F5(c)){HQ((ACA(c)).cO,ON(a));}d=Z(a.cz);if(d==(-1))a.oB=null;else{a.mw=R(FL,d);c=new Vx;h=a.cz;i=a.n4;g=a.iF;c.dI=h;c.xO=i;c.xi=g;a.m4=c;c=new QT;c.ek=h;c.zq=i;c.zF=g;a.oV=c;a.oB=QI(a,null);}if(Z(a.cz)!=(-1))a.oZ=Yw(a.cz,a.mw);}
function QI(a,b){var c,d,e,f,g,h,i,j,k;c=Z(a.cz);d=Z(a.cz);e=a.m4;f=Z(e.dI);g=BG();h=0;while(h<f){BC(g,Ot(e));h=h+1|0;}a:{switch(d){case -1:i=new Nh;i.gW=b;b=A5m;i.cJ=b;i.fn=b;i.eL=b;i.kS=b;i.hj=b;break a;case 0:i=A2b(b);break a;case 1:i=new KV;AER(i,b);HQ(i.eL,g);break a;default:}b=new C2;i=new K;N(i);U(H(i,C(454)),d);Bl(b,M(i));L(b);}i.eL=g;b=a.oV;d=Z(b.ek);e=BG();j=0;while(j<d){BC(e,Hh(b));j=j+1|0;}i.fn=e;i.kS=ON(a);d=Z(a.cz);b=BG();j=0;while(j<d){e=Ot(a.m4);g=Hh(a.oV);f=Z(a.cz);k=new P$;k.kU=e;k.ki=g;k.q0
=f;BC(b,k);j=j+1|0;}i.hj=b;j=Z(a.cz);i.ti=j==(-1)?null:Bw(a.iF,j);d=Z(a.cz);b=BG();j=0;while(j<d){BC(b,QI(a,i));j=j+1|0;}i.cJ=b;a.mw.data[c]=i;return i;}
function ON(a){var b,c,d,e;b=Z(a.cz);c=BG();d=0;while(d<b){e=Z(a.cz);BC(c,Bw(a.iF,e));d=d+1|0;}return c;}
function ADF(){var a=this;B.call(a);a.lp=null;a.oQ=null;}
function AJS(){var a=this;B.call(a);a.Db=0;a.Cl=0;a.qS=0;a.mE=0;}
function ACi(){var a=this;B.call(a);a.rD=null;a.rE=null;}
function ATr(a){var b,c,d,e,f,g;b=a.rD;c=a.rE;if(BT(c.lp,b.d.fU)){c=c.oQ;CK(b,c.mE,c.qS,0);Cb((Bi(b)).bM,c.mE,c.qS);Cb((Bi(b)).bB,c.Cl,c.Db);}else{d=(Cy(b.fh.zi)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){FA(b);b=new WA;b.w7=g;b.w8=c;BK(b);c=new XU;c.u2=b;$rt_globals.setTimeout(Bu(c,"onTimer"),0);}}}
function ACj(){var a=this;B.call(a);a.zY=null;a.zX=null;}
function AVK(a){IG(a.zY,a.zX);}
function FL(){var a=this;B.call(a);a.gW=null;a.cJ=null;a.fn=null;a.eL=null;a.hj=null;a.kS=null;a.ti=null;}
function A2b(a){var b=new FL();AER(b,a);return b;}
function AER(a,b){a.gW=b;a.cJ=BG();a.fn=BG();a.eL=BG();a.kS=BG();a.hj=BG();}
function ACC(a){var b;b=a.gW;if(b!==null)b.cJ.qb(a);}
function UV(){B.call(this);this.rh=null;}
function AMV(a,b){b=b;YD(a.rh,b);}
var Nh=G(FL);
var KV=G(FL);
function TW(){B.call(this);this.zp=null;}
function ATt(a,b){var c;b=b;c=a.zp;Bq(c.bx,(Cn(c.fH,b)).bp);}
function P$(){var a=this;B.call(a);a.kU=null;a.ki=null;a.q0=0;}
function PF(){B.call(this);this.pK=null;}
function AWT(a,b){b=b;Zh(a.pK,b);}
var PJ=G(0);
var Fi=G(Fp);
var MX=G(Fi);
var Tl=G(MX);
var NC=G(D6);
var Ti=G(NC);
var NR=G(Fd);
function AUy(a){var b;b=new D8;X(b);L(b);}
function AOP(a,b){var c;c=new D8;X(c);L(c);}
function ANX(a,b){b=new D8;X(b);L(b);}
var Tj=G(NR);
function AOV(a,b){var c;c=new BD;X(c);L(c);}
function AOb(a){return 0;}
function AL8(a){return A61;}
function AKC(a){return 1;}
var Tg=G();
function AKn(a){return 0;}
function AXH(a){var b;b=new L8;X(b);L(b);}
function AQJ(a){var b;b=new C2;X(b);L(b);}
var Xs=G(0);
var Th=G();
var Vd=G();
function Qz(){var a=this;B.call(a);a.ma=0;a.rv=null;}
function A0Z(a,b){var c,d,e;c=a.rv;b=b;d=c.yK;e=c.yL;d=b.a<=d&&e<=b.b?1:0;a.ma=d;return d?0:1;}
var J8=G(D8);
var Jp=G(Bt);
var NL=G(Bt);
function Xm(){B.call(this);this.xM=null;}
function AXI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.xM;d=CM(c[0]);e=(CM(c[1])).data[0];if(!AAg(b.f)){c=b.f;if(c.cm==e){e=b.pH;f=LL(d);Fl(c.dH);Fl(c.dz);MK(c);while(f.e1>=f.h3.data.length?0:1){if(Z(f)==(-1))continue;g=UL(c,Z(f));h=NQ(B_(c,g.bq),g.bv);if(Z(f)==(-1)){if(!e)continue;h.bX=0;h.bG=h.bG|4;continue;}i=UL(c,Z(f));j=Z(f);k=Z(f);Ed(c.dH,g,i);l=c.dz;m=BG();if(Cn(l,i)===null)Ed(l,i,m);BC(Cn(c.dz,i),g);h.bX=j;h.bG=k;}Lc(b);if(b.Dd){n=Jv(ET(),b.zy);if(A1i(n,Bo(100))){b=ER(b);c=new K;N(c);H(Hz(H(H(c,
b),C(455)),n),C(240));$rt_globals.console.info($rt_ustr(M(c)));}}}}}
function AGz(){B.call(this);this.Pq=null;}
function Qo(){var a=this;B.call(a);a.wM=null;a.jH=null;}
function Zn(){var a=this;B.call(a);a.pW=null;a.pX=null;}
function ATs(a){var b,c;b=a.pW;c=a.pX;Fy(b.bW.dF,c);ZT(b);}
function SA(){var a=this;B.call(a);a.pA=null;a.pz=null;}
function AU6(a){var b,c;b=a.pA;c=a.pz;if(!NV(b))Kc(b);else Iv(b);II(c.r3);}
function ABK(){var a=this;B.call(a);a.vr=null;a.vq=null;}
function AR9(a){Fy(a.vr,a.vq);}
function GX(){var a=this;B.call(a);a.d$=0;a.eN=0;a.oI=null;a.nq=0;a.gx=null;}
function ARd(a,b,c,d,e,f){var g=new GX();AWv(g,a,b,c,d,e,f);return g;}
function AWv(a,b,c,d,e,f,g){a.d$=b;a.eN=c;a.oI=BJ(f,g);a.nq=d;a.gx=e;}
function PS(){Fi.call(this);this.iM=null;}
function RG(a){var b;b=new Zu;Nj(b,a.iM);return b;}
function SQ(){Fi.call(this);this.xG=null;}
function Wy(a){var b;b=new SJ;Nj(b,a.xG);return b;}
function PT(){Fp.call(this);this.uM=null;}
function Vg(){B.call(this);this.uB=null;}
function AUX(a,b){b=b;OJ(a.uB,b);}
function S9(){B.call(this);this.tm=null;}
function AWA(a,b){b=b;G3(a.tm,b);}
function Kb(){var a=this;B.call(a);a.eu=null;a.lz=null;a.iX=0;}
function A1R(a,b,c){var d=new Kb();AFl(d,a,b,c);return d;}
function AFl(a,b,c,d){a.eu=b;a.lz=c;a.iX=d;}
function AIA(a,b){var c;if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){c=b;return BT(a.eu,c.eu)&&BT(a.lz,c.lz)&&BT(CT(a.iX),CT(c.iX))?1:0;}return 0;}
function LV(){var a=this;Kb.call(a);a.kq=null;a.vf=0;}
function ATO(a,b){var c;if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){if(!AIA(a,b))return 0;c=b;return BT(a.kq,c.kq);}return 0;}
function EY(){var a=this;B.call(a);a.fC=null;a.gl=null;a.yg=0;}
function A1h(a,b,c){var d=new EY();Ns(d,a,b,c);return d;}
function Ns(a,b,c,d){a.fC=b;a.gl=c;a.yg=d;}
function AG9(a,b){var c;if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){c=b;return BT(a.fC,c.fC)&&BT(a.gl,c.gl)?1:0;}return 0;}
function Hw(){EY.call(this);this.g5=null;}
function JV(){var a=this;EY.call(a);a.hI=null;a.pR=0;}
function AZ3(a,b){var c;if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){if(!AG9(a,b))return 0;c=b;return BT(a.hI,c.hI);}return 0;}
function I6(){var a=this;EY.call(a);a.jl=null;a.iE=null;}
function ATe(a,b){var c;if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){c=b;return BT(a.jl,c.jl)&&BT(a.iE,c.iE)?1:0;}return 0;}
function AD8(){var a=this;H2.call(a);a.OI=null;a.P0=0;a.Io=0;a.GO=0;}
function Ri(){var a=this;B.call(a);a.vB=null;a.vC=null;}
function ANq(a){var b,c;b=a.vB;c=a.vC;RO();Km(b,c,A64);}
function Rj(){var a=this;B.call(a);a.xp=null;a.xq=null;}
function ALs(a){var b,c;b=a.xp;c=a.xq;RO();Km(b,c,A65);}
function Rg(){var a=this;B.call(a);a.t0=null;a.tZ=null;}
function AKG(a){Km(a.t0,a.tZ,null);}
function Rh(){var a=this;B.call(a);a.pL=null;a.pM=null;}
function ANk(a){var b,c,d,e,f,g,h;b=a.pL;c=a.pM;d=Er(b.bu.d);e=Hr(b.bu.d);d=AAw(b.bu.fh,d,e);EC(b.f8.bW);b=b.bu;e=Fk(b,c);if(d!==null){f=b.d;g=e.bq;h=e.bv;e=new AAO;e.Cr=b;e.Cs=c;d.Iu(f,g,h,1,e,b.jz);}}
function QP(){B.call(this);this.q4=null;}
function AYf(a){var b;b=a.q4;EC(b.f8.bW);G2(b.bu,Va(b),0);}
function QO(){B.call(this);this.zU=null;}
function AXo(a){var b;b=a.zU;EC(b.f8.bW);G2(b.bu,Va(b),1);}
function QN(){B.call(this);this.yk=null;}
function ASA(a){var b,c,d;b=a.yk;EC(b.f8.bW);c=HI(b);b=b.bu;BK(b);d=new ACW;d.wX=b;QS(c,d,ADO(C(456)));}
function PL(){var a=this;B.call(a);a.vz=null;a.vA=null;}
function APp(a){var b,c;b=a.vz;c=a.vA;b=b.bu.d;b.o9=c;I1(b);}
var Qn=G(0);
var A5a=null;function AIY(){A5a=new SG;}
function XP(){B.call(this);this.uT=null;}
function ALj(a){var b,c,d;b=a.uT;EC(b.f8.bW);c=HI(b);b=b.bu;BK(b);d=new Q0;d.s1=b;NM(c,d);}
function Sh(){B.call(this);this.tE=null;}
function AMU(a,b,c){var d,e;c=a.tE;d=c.d.f;e=b.bp;b=c.fe;Y7(d.A.data[e],0,b);}
function Vx(){var a=this;B.call(a);a.dI=null;a.xO=null;a.xi=null;}
function Ot(a){var b,c,d,e,f,g,h,i;a:{b=Z(a.dI);switch(b){case 3:break;case 5:c=Pa(a);d=NF(a);b=Z(a.dI);e=Z(a.dI);f=Z(a.dI);g=BG();h=0;while(h<f){BC(g,NF(a));h=h+1|0;}i=new LV;AFl(i,c,d,b);i.kq=g;i.vf=e;break a;default:c=new C2;d=new K;N(d);U(H(d,C(457)),b);Bl(c,M(d));L(c);}i=A1R(Pa(a),NF(a),Z(a.dI));}return i;}
function Pa(a){var b,c;b=Z(a.dI);c=Z(a.dI);return AVn(Eu(a.xO,b,c),Z(a.dI));}
function NF(a){var b;b=Z(a.dI);if(b==(-1))return null;return Bw(a.xi,b);}
function QT(){var a=this;B.call(a);a.ek=null;a.zq=null;a.zF=null;}
function Hh(a){var b,c,d,e,f;a:{b:{b=Z(a.ek);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=VZ(a);d=Qc(a);b=Z(a.ek);e=RJ(a);f=new JV;Ns(f,c,d,2);f.pR=b;f.hI=e;break a;case 4:c=Hh(a);d=Hh(a);f=new I6;Ns(f,c.fC,c.gl,9);f.jl=c;f.iE=d;break a;case 5:f=A1h(VZ(a),Qc(a),Z(a.ek));break a;case 9:c=RJ(a);f=new Hw;d=!Ev(c)&&Bw(c,0)!==null?(Bw(c,0)).gl:null;Ns(f,null,null,7);f.g5=BG();c=B2(c);while(B7(c)){e=B8(c);if(!(e instanceof Hw))BC(f.g5,e);else{e=e;HQ(f.g5,e.g5);}}f.gl=d;break a;default:break b;}f
=null;break a;}c=new C2;d=new K;N(d);U(H(d,C(458)),b);Bl(c,M(d));L(c);}return f;}
function VZ(a){var b,c;b=Z(a.ek);c=Z(a.ek);return AVn(Eu(a.zq,b,c),Z(a.ek));}
function Qc(a){var b;b=Z(a.ek);if(b==(-1))return null;return Bw(a.zF,b);}
function RJ(a){var b,c,d;b=Z(a.ek);c=BG();d=0;while(d<b){BC(c,Hh(a));d=d+1|0;}return c;}
function Rb(){var a=this;B.call(a);a.p7=null;a.p5=0;a.p6=0;a.p3=null;a.p4=0;a.p2=0;}
function APZ(a,b){var c,d,e,f,g,h,i,j;c=a.p7;d=a.p5;e=a.p6;f=a.p3;g=a.p4;h=a.p2;i=CC(c.bo,5.0);d=Bd((c.bo.b2.a-d|0)-i|0,Be((i-d|0)-c.Q.j.a|0,b.g.a));j=Bd((c.bo.b2.b-e|0)-i|0,Be((i-e|0)-c.Q.j.b|0,b.g.b));V(f,d+g|0,j+h|0);EP(c,f,c.U.j);}
function Wk(){var a=this;B.call(a);a.za=null;a.zb=null;a.y$=null;a.y_=0;a.y8=0;a.y9=0;a.y6=0;a.y7=0;a.y4=0;a.y5=0;a.tu=0;}
function AUj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.za;d=a.zb;e=a.y$;f=a.y_;g=a.y8;h=a.y9;i=a.y6;j=a.y7;k=a.y4;l=a.y5;m=a.tu;n=CC(c.bo,5.0);o=c.U.ho();Cs(d,c.U.j);Cs(e,c.U.h);switch(f){case -1:f=Bd(h+(b.g.a-g|0)|0,c.bo.b2.a-n|0);g=o.a;h=h+i|0;f=Be(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Be((i+b.g.a|0)-g|0,Be(o.a,n-c.Q.h.a|0));}b:{switch(j){case -1:f=Be(n,Bd(l+(b.g.b-k|0)|0,(c.bo.b2.b+c.Q.j.b|0)-n|0));g=o.b;h=l+m|0;f=Be(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Be((m+b.g.b|0)-k|0,o.b);}EP(c,e,d);}
function TP(){var a=this;B.call(a);a.wg=null;a.wf=0.0;}
function M2(a,b){return K7(a.wg,b,a.wf*2.0+0.875);}
var ABW=G(BD);
function OL(){B.call(this);this.qT=null;}
function AV7(a){AGh(a.qT);}
function OM(){B.call(this);this.rs=null;}
function AZw(a){Hg(a.rs);}
function OK(){B.call(this);this.uR=null;}
function ASF(a){AG4(a.uR);}
function Ub(){B.call(this);this.xj=null;}
function AOs(a){a.xj.z9();}
function Ua(){B.call(this);this.tJ=null;}
function AYv(a){a.tJ.uS();}
function Xb(){B.call(this);this.qq=null;}
function ALU(a){var b,c,d,e,f,g,h,i;b=a.qq;c=(b.qF.cW()).data;d=R(Cg,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new VO;i.wJ=b;i.wI=h;e[f]=Wb(i,h);f=f+1|0;}return d;}
function Zc(){B.call(this);this.v6=null;}
function ANy(a){a.v6.nH.hS(0);}
function Zd(){B.call(this);this.wP=null;}
function AZj(a){a.wP.nH.hS(1);}
function UT(){B.call(this);this.yh=null;}
function AJ9(a){var b,c,d,e,f;b=a.yh.d.f;c=b.cm;d=new K;N(d);U(H(d,C(459)),c);$rt_globals.console.info($rt_ustr(M(d)));c=b.mL;d=new K;N(d);U(H(d,C(460)),c);$rt_globals.console.info($rt_ustr(M(d)));d=b.da;e=Hf(E1(b));AB9(d,0,d.c_,e);b=By();f=b.mk;f.data[0]=10;WB(b,f,0,1);}
function UO(){B.call(this);this.vW=null;}
function ANz(a){YI(a.vW);}
function UP(){B.call(this);this.wx=null;}
function AR4(a){ZQ(a.wx);}
function UQ(){B.call(this);this.ut=null;}
function AWI(a){NS(a.ut.d);}
function UR(){B.call(this);this.pN=null;}
function AVz(a){UF(a.pN);}
function Ok(){B.call(this);this.we=null;}
function ARm(a){var b,c,d,e,f,g,h;b=a.we;c=R(Cg,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Wb(PO(b,g),Wg(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Wb(PO(b,g),Wg(g));e=h;}return c;}
function S$(){B.call(this);this.sh=null;}
function AQp(a,b,c){HA(B_(a.sh.d.f,b.bp),0,J(c));}
var WU=G(0);
function ABc(){var a=this;B.call(a);a.lX=null;a.oY=null;a.kF=null;a.q7=null;}
function A11(a,b,c){var d=new ABc();AC_(d,a,b,c);return d;}
function AC_(a,b,c,d){a.lX=b;a.oY=c;a.kF=d;}
function MQ(a,b){var c,d;c=new ABj;d=a.lX.values();c.jX=a;c.wW=d;c.kv=b;Z7(c);}
function XR(a){var b,c,d,e;b=a.q7;if(b===null){b=a.kF;c=b.data;d=I4(a);e=c.length;b=Db(b,e+1|0);b.data[e]=d;b=b;a.q7=b;}return b;}
function I4(a){return HS(a.lX.name);}
function AMv(a){return LC(a.kF,I4(a));}
function AGg(){var a=this;B.call(a);a.i_=null;a.dA=0;}
function AVn(a,b){var c=new AGg();AJ2(c,a,b);return c;}
function AJ2(a,b,c){a.i_=b;a.dA=c;}
function APr(a,b){var c;if(a===b)return 1;if(b!==null&&BH(a)===BH(b)){c=b;return a.dA==c.dA&&BT(a.i_,c.i_)?1:0;}return 0;}
function VI(){B.call(this);this.qo=null;}
function AWy(a,b){b=b;Oi(a.qo,b);}
function U7(){B.call(this);this.vU=null;}
function A0W(a,b){b=b;G3(a.vU,b);}
var SG=G();
function Ft(){var a=this;B.call(a);a.jR=0;a.sR=0;a.jo=null;a.gO=null;a.w4=null;a.lr=null;}
function A66(a){var b=new Ft();Nj(b,a);return b;}
function Nj(a,b){a.lr=b;a.sR=b.cX;a.jo=null;}
function F5(a){var b,c;if(a.jo!==null)return 1;while(true){b=a.jR;c=a.lr.b6.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.jR=b+1|0;}return 0;}
function AHy(a){var b;if(a.sR==a.lr.cX)return;b=new H0;X(b);L(b);}
function Nv(a){var b,c,d,e;AHy(a);if(!F5(a)){b=new L8;X(b);L(b);}b=a.jo;if(b!==null){c=a.gO;if(c!==null)a.w4=c;a.gO=b;a.jo=b.cU;}else{d=a.lr.b6.data;e=a.jR;a.jR=e+1|0;b=d[e];a.gO=b;a.jo=b.cU;a.w4=null;}}
var Zu=G(Ft);
function PI(a){Nv(a);return a.gO.cS;}
var SJ=G(Ft);
function ACA(a){Nv(a);return a.gO;}
var YA=G(Ft);
function ADw(){var a=this;B.call(a);a.NC=null;a.Qz=0;}
function Yx(){var a=this;B.call(a);a.l=null;a.dQ=0;a.mb=null;a.qi=0;a.hr=0;a.fx=0;a.bz=0;a.mP=null;}
function MI(a){return a.l.bN;}
function UM(a,b,c,d){var e,f,g,h,i,j;e=BG();f=a.dQ;g=0;if(c!=f)a.dQ=c;a:{switch(b){case -1073741784:h=new Rc;c=a.bz+1|0;a.bz=c;F_(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new P_;c=a.bz+1|0;a.bz=c;F_(h,c);break a;case -33554392:h=new RV;c=a.bz+1|0;a.bz=c;F_(h,c);break a;default:c=a.hr+1|0;a.hr=c;if(d!==null)h=A27(c);else{h=new FT;F_(h,0);g=1;}c=a.hr;if(c<=(-1))break a;if(c>=10)break a;a.mb.data[c]=h;break a;}h=new ACK;F_(h,(-1));}while(true){if(E$(a.l)&&a.l.n==(-536870788))
{d=AZH(Cj(a,2),Cj(a,64));while(!Dt(a.l)&&E$(a.l)){i=a.l;j=i.n;if(j&&j!=(-536870788)&&j!=(-536870871))break;CF(d,Bk(i));i=a.l;if(i.bi!=(-536870788))continue;Bk(i);}i=K8(a,d);i.S(h);}else if(a.l.bi==(-536870788)){i=HR(h);Bk(a.l);}else{i=Xe(a,h);d=a.l;if(d.bi==(-536870788))Bk(d);}if(i!==null)BC(e,i);if(Dt(a.l))break;if(a.l.bi==(-536870871))break;}if(a.l.mr==(-536870788))BC(e,HR(h));if(a.dQ!=f&&!g){a.dQ=f;d=a.l;d.gM=f;d.n=d.bi;d.e9=d.fi;j=d.dj;d.x=j+1|0;d.i6=j;FC(d);}switch(b){case -1073741784:break;case -536870872:d
=new Vs;FU(d,e,h);return d;case -268435416:d=new ABC;FU(d,e,h);return d;case -134217688:d=new YB;FU(d,e,h);return d;case -67108824:d=new Sd;FU(d,e,h);return d;case -33554392:d=new D0;FU(d,e,h);return d;default:switch(e.m){case 0:break;case 1:return A2Y(Bw(e,0),h);default:return A1z(e,h);}return HR(h);}d=new J7;FU(d,e,h);return d;}
function AJa(a){var b,c,d,e,f,g,h;b=BI(4);c=(-1);d=(-1);if(!Dt(a.l)&&E$(a.l)){e=b.data;c=Bk(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B0(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bi;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bk(f);f=a.l;g=f.bi;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bk(f);return AZu(e,3);}return AZu(e,2);}if(!Cj(a,2))return ADS(b[0]);if(Cj(a,64))return AYc(b[0]);return AT$(b[0]);}e=b.data;c=1;while(c<4&&!Dt(a.l)&&E$(a.l)){h=c+1|0;e[c]=Bk(a.l);c=h;}if(c==1){h=e[0];if(!(A67.Cd(h)==A68?0:1))return UE(a,e[0]);}if
(!Cj(a,2))return A3u(b,c);if(Cj(a,64)){f=new Uz;O$(f,b,c);return f;}f=new Z8;O$(f,b,c);return f;}
function Xe(a,b){var c,d,e,f,g,h,i;if(E$(a.l)&&!KA(a.l)&&M0(a.l.n)){if(Cj(a,128)){c=AJa(a);if(!Dt(a.l)){d=a.l;e=d.bi;if(!(e==(-536870871)&&!(b instanceof FT))&&e!=(-536870788)&&!E$(d))c=LX(a,b,c);}}else if(!WC(a.l)&&!AA5(a.l)){f=new Ph;N(f);while(!Dt(a.l)&&E$(a.l)&&!WC(a.l)&&!AA5(a.l)){if(!(!KA(a.l)&&!a.l.n)&&!(!KA(a.l)&&M0(a.l.n))){g=a.l.n;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bk(a.l);if(!LW(e))BN(f,e&65535);else JI(f,HF(e));}if(!Cj(a,2)){c=new YP;DQ(c);c.cD
=M(f);e=f.K;c.bI=e;c.ok=AXd(e);c.mR=AXd(c.bI);h=0;while(h<(c.bI-1|0)){QX(c.ok,P(c.cD,h),(c.bI-h|0)-1|0);QX(c.mR,P(c.cD,(c.bI-h|0)-1|0),(c.bI-h|0)-1|0);h=h+1|0;}}else if(Cj(a,64))c=A3t(f);else{c=new OI;DQ(c);c.i8=M(f);c.bI=f.K;}}else c=LX(a,b,ACt(a,b));}else{d=a.l;if(d.bi!=(-536870871))c=LX(a,b,ACt(a,b));else{if(b instanceof FT)L(Ck(C(21),d.bN,Pf(d)));c=HR(b);}}a:{if(!Dt(a.l)){e=a.l.bi;if(!(e==(-536870871)&&!(b instanceof FT))&&e!=(-536870788)){f=Xe(a,b);if(c instanceof C6&&!(c instanceof FD)&&!(c instanceof CW)
&&!(c instanceof EX)){i=c;if(!f.b0(i.L)){c=new T5;E6(c,i.L,i.e,i.jj);c.L.S(c);}}if((f.ir()&65535)!=43)c.S(f);else c.S(f.L);break a;}}if(c===null)return null;c.S(b);}if((c.ir()&65535)!=43)return c;return c.L;}
function LX(a,b,c){var d,e,f,g,h;d=a.l;e=d.bi;if(c!==null&&!(c instanceof B$)){switch(e){case -2147483606:Bk(d);d=new Vf;Dm(d,c,b,e);N6();c.S(A69);return d;case -2147483605:Bk(d);d=new XE;Dm(d,c,b,(-2147483606));N6();c.S(A69);return d;case -2147483585:Bk(d);d=new PX;Dm(d,c,b,(-536870849));N6();c.S(A69);return d;case -2147483525:f=new OF;d=F7(d);g=a.fx+1|0;a.fx=g;Md(f,d,c,b,(-536870849),g);N6();c.S(A69);return f;case -1073741782:case -1073741781:Bk(d);d=new Q9;Dm(d,c,b,e);c.S(d);return d;case -1073741761:Bk(d);d
=new Yd;Dm(d,c,b,(-536870849));c.S(b);return d;case -1073741701:h=new ST;d=F7(d);e=a.fx+1|0;a.fx=e;Md(h,d,c,b,(-536870849),e);c.S(h);return h;case -536870870:case -536870869:Bk(d);if(c.ir()!=(-2147483602)){d=new CW;Dm(d,c,b,e);}else if(Cj(a,32)){d=new Q$;Dm(d,c,b,e);}else{d=new WK;f=Xo(a.dQ);Dm(d,c,b,e);d.mq=f;}c.S(d);return d;case -536870849:Bk(d);d=new Go;Dm(d,c,b,(-536870849));c.S(b);return d;case -536870789:h=new F9;d=F7(d);e=a.fx+1|0;a.fx=e;Md(h,d,c,b,(-536870849),e);c.S(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bk(d);d=new ACZ;E6(d,f,b,e);f.e=d;return d;case -2147483585:Bk(d);c=new T1;E6(c,f,b,(-2147483585));return c;case -2147483525:c=new Xd;Rs(c,F7(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bk(d);d=new Yc;E6(d,f,b,e);f.e=d;return d;case -1073741761:Bk(d);c=new AAj;E6(c,f,b,(-1073741761));return c;case -1073741701:c=new QW;Rs(c,F7(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bk(d);d=A1O(f,b,e);f.e=d;return d;case -536870849:Bk(d);c
=new EX;E6(c,f,b,(-536870849));return c;case -536870789:return A2v(F7(d),f,b,(-536870789));default:}return c;}
function ACt(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof FT;while(true){a:{e=a.l;f=e.bi;if((f&(-2147418113))==(-2147483608)){Bk(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dQ=g;else{if(f!=(-1073741784))g=a.dQ;c=UM(a,f,g,b);e=a.l;if(e.bi!=(-536870871))L(Ck(C(21),e.bN,e.dj));Bk(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bk(e);c
=AZl(0);break a;case -2147483577:Bk(e);c=new WG;B1(c);break a;case -2147483558:Bk(e);c=new Us;h=a.bz+1|0;a.bz=h;AJk(c,h);break a;case -2147483550:Bk(e);c=AZl(1);break a;case -2147483526:Bk(e);c=new ABZ;B1(c);break a;case -536870876:Bk(e);a.bz=a.bz+1|0;if(Cj(a,8)){if(Cj(a,1)){c=A1r(a.bz);break a;}c=A09(a.bz);break a;}if(Cj(a,1)){c=A1D(a.bz);break a;}c=A1X(a.bz);break a;case -536870866:Bk(e);if(Cj(a,32)){c=A15();break a;}c=A1U(Xo(a.dQ));break a;case -536870821:Bk(e);i=0;c=a.l;if(c.bi==(-536870818)){i=1;Bk(c);}c
=K8(a,Hm(a,i));c.S(b);e=a.l;if(e.bi!=(-536870819))L(Ck(C(21),e.bN,e.dj));W2(e,1);Bk(a.l);break a;case -536870818:Bk(e);a.bz=a.bz+1|0;if(!Cj(a,8)){c=new KZ;B1(c);break a;}c=new VU;e=Xo(a.dQ);B1(c);c.xR=e;break a;case 0:j=e.fi;if(j!==null)c=K8(a,j);else{if(Dt(e)){c=HR(b);break a;}c=ADS(f&65535);}Bk(a.l);break a;default:break b;}Bk(e);c=new KZ;B1(c);break a;}h=(f&2147483647)-48|0;if(a.hr<h)L(Ck(C(21),FJ(e),Pf(a.l)));Bk(e);a.bz=a.bz+1|0;c=!Cj(a,2)?A2h(h,a.bz):Cj(a,64)?A1s(h,a.bz):A3s(h,a.bz);a.mb.data[h].oa=1;a.qi
=1;break a;}if(f>=0&&!GY(e)){c=UE(a,f);Bk(a.l);}else if(f==(-536870788))c=HR(b);else{if(f!=(-536870871)){b=new JW;c=!GY(a.l)?Uo(f&65535):a.l.fi.cM();e=a.l;Mm(b,c,e.bN,e.dj);L(b);}if(d){b=new JW;e=a.l;Mm(b,C(21),e.bN,e.dj);L(b);}c=HR(b);}}}if(f!=(-16777176))break;}return c;}
function Hm(a,b){var c,d,e,f,g,h,i,j,$$je;c=AZH(Cj(a,2),Cj(a,64));EE(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dt(a.l))break a;h=a.l;b=h.bi;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CF(c,d);d=Bk(a.l);h=a.l;if(h.bi!=(-536870874)){d=38;break d;}if(h.n==(-536870821)){Bk(h);e=1;d=(-1);break d;}Bk(h);if(g){c=Hm(a,0);break d;}if(a.l.bi==(-536870819))break d;Uf(c,Hm(a,0));break d;case -536870867:if(!g){b=h.n;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bk(h);h=a.l;i=h.bi;if(GY(h))break c;if
(i<0){j=a.l.n;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(M0(i))break e;i=i&65535;break e;}catch($$e){$$je=EL($$e);if($$je instanceof En){break b;}else{throw $$e;}}}try{B9(c,d,i);}catch($$e){$$je=EL($$e);if($$je instanceof En){break b;}else{throw $$e;}}Bk(a.l);d=(-1);break d;}}if(d>=0)CF(c,d);d=45;Bk(a.l);break d;case -536870821:if(d>=0){CF(c,d);d=(-1);}Bk(a.l);j=0;h=a.l;if(h.bi==(-536870818)){Bk(h);j=1;}if(!e)AGL(c,Hm(a,j));else Uf(c,Hm(a,j));e=0;Bk(a.l);break d;case -536870819:if(d>=0)CF(c,
d);d=93;Bk(a.l);break d;case -536870818:if(d>=0)CF(c,d);d=94;Bk(a.l);break d;case 0:if(d>=0)CF(c,d);h=a.l.fi;if(h===null)d=0;else{AJR(c,h);d=(-1);}Bk(a.l);break d;default:}if(d>=0)CF(c,d);d=Bk(a.l);}g=0;}L(Ck(C(21),MI(a),a.l.dj));}L(Ck(C(21),MI(a),a.l.dj));}if(!f){if(d>=0)CF(c,d);return c;}L(Ck(C(21),MI(a),a.l.dj-1|0));}
function UE(a,b){var c,d,e;c=LW(b);if(Cj(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AT$(b&65535);}if(Cj(a,64)&&b>128){if(c){d=new Vm;DQ(d);d.bI=2;d.r1=GQ(GO(b));return d;}if(PH(b))return APn(b&65535);if(!RM(b))return AYc(b&65535);return AVV(b&65535);}}if(!c){if(PH(b))return APn(b&65535);if(!RM(b))return ADS(b&65535);return AVV(b&65535);}d=new D7;DQ(d);d.bI=2;d.gC=b;e=(HF(b)).data;d.lI=e[0];d.kT=e[1];return d;}
function K8(a,b){var c,d,e;if(!AIu(b)){if(!b.O){if(b.hW())return AM$(b);return ARe(b);}if(!b.hW())return AWa(b);c=new Me;AAB(c,b);return c;}c=ADi(b);d=new Os;B1(d);d.rm=c;d.CO=c.bg;if(!b.O){if(b.hW())return AE9(AM$(Jh(b)),d);return AE9(ARe(Jh(b)),d);}if(!b.hW())return AE9(AWa(Jh(b)),d);c=new Qw;e=new Me;AAB(e,Jh(b));AGp(c,e,d);return c;}
function Ji(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cj(a,b){return (a.dQ&b)!=b?0:1;}
function Y6(){B.call(this);this.xn=null;}
function AON(a,b){b.g3=a.xn.c_;}
function Y5(){B.call(this);this.tG=null;}
function AX5(a,b){b.gW=a.tG.c_.ch;}
function WJ(){B.call(this);this.qC=null;}
function AUr(a,b){b.g3=a.qC;}
var HM=G(0);
function Si(){B.call(this);this.xs=null;}
function AWU(a,b,c,d){Kt(a.xs,b,c.bp,d.bp);}
function Sj(){B.call(this);this.vw=null;}
function AVD(a,b,c,d){Kt(a.vw,b,c.bp,d.bp);}
function IF(){B.call(this);this.nE=0;}
var A6$=null;var A6_=null;var A7a=null;function APV(a){var b=new IF();AE_(b,a);return b;}
function AE_(a,b){a.nE=b;}
function W9(b){return !b?A6_:A6$;}
function AG$(){A6$=APV(1);A6_=APV(0);A7a=F($rt_booleancls());}
var Kv=G(0);
var Rd=G();
var WY=G(0);
var AEB=G();
function RA(){B.call(this);this.tI=null;}
function AXm(a,b,c,d){JB(a.tI,b,c.bp,d.bp);}
var Rz=G();
function ARV(a,b){return b.eu.dA>=0?0:1;}
var Ry=G();
function AQe(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fC;if(b===null)break b;if(b.dA>=0)break b;}c=1;break a;}c=0;}return c;}
function RC(){B.call(this);this.yM=null;}
function AW1(a,b,c,d){JB(a.yM,b,c.bp,d.bp);}
var Gs=G(CE);
var A65=null;var A64=null;var A7b=null;function RO(){RO=Bm(Gs);A0I();}
function AYL(a,b){var c=new Gs();AEp(c,a,b);return c;}
function AEp(a,b,c){RO();Dz(a,b,c);}
function A0I(){var b;A65=AYL(C(461),0);b=AYL(C(462),1);A64=b;A7b=I(Gs,[A65,b]);}
function ACW(){B.call(this);this.wX=null;}
function AU9(a,b){Dy(a.wX,b);}
function BO(){var a=this;B.call(a);a.e=null;a.cu=0;a.wp=null;a.jj=0;}
var A34=0;function B1(a){var b;b=A34;A34=b+1|0;a.wp=Nu(b);}
function Nd(a,b){var c;c=A34;A34=c+1|0;a.wp=Nu(c);a.e=b;}
function Ir(a,b,c,d){var e;e=d.y;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Iz(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AUl(a,b){a.jj=b;}
function ATX(a){return a.jj;}
function AQU(a){return a.e;}
function ARs(a,b){a.e=b;}
function AZA(a,b){return 1;}
function A0f(a){return null;}
function Ka(a){var b;a.cu=1;b=a.e;if(b!==null){if(!b.cu){b=b.gg();if(b!==null){a.e.cu=1;a.e=b;}a.e.eG();}else if(b instanceof HH&&b.eK.oa)a.e=b.e;}}
function AGw(){A34=1;}
function VO(){var a=this;B.call(a);a.wJ=null;a.wI=null;}
function AM9(a){var b,c;b=a.wJ;c=a.wI;b.iG.tp(c);}
function U8(){var a=this;B.call(a);a.qx=null;a.qv=null;a.qu=0;a.qw=0;}
function AXq(a,b){b=b;EI(a.qx,a.qv,b,a.qu,a.qw);}
function U9(){var a=this;B.call(a);a.Av=null;a.Au=null;a.At=0;a.As=0;}
function AMF(a,b){b=b;EI(a.Av,a.Au,b,a.At,a.As);}
function WI(){B.call(this);this.vo=null;}
function AOY(a,b){ACg(a.vo,b);}
function ACV(){var a=this;Eh.call(a);a.yP=null;a.iV=null;}
function A0_(a,b,c){var d=new ACV();AFg(d,a,b,c);return d;}
function AFg(a,b,c,d){Nx(a,I4(b),c);a.yP=b;a.iV=d;Q5(a);Iv(a);}
function Q5(a){var b;b=new V6;b.xo=a;a.i2=b;a.kB=b;a.eW=A5V;}
var Z2=G();
var A6X=null;function A2Z(){A2Z=Bm(Z2);ATn();}
function ATn(){var b,c;RO();b=BI((A7b.fl()).data.length);c=b.data;A6X=b;c[A65.dv]=1;c[A64.dv]=2;}
function Q7(){B.call(this);this.ye=null;}
function AMJ(a,b){var c,d;c=a.ye;d=b.il;b=new K;N(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(M(b)));}
function RR(){B.call(this);this.z0=null;}
function AQi(a,b){SC(HI(a.z0),b,A6a,ADO(C(463)));}
function CV(){var a=this;BO.call(a);a.oa=0;a.ed=0;}
var A69=null;function N6(){N6=Bm(CV);AUZ();}
function A27(a){var b=new CV();F_(b,a);return b;}
function F_(a,b){N6();B1(a);a.ed=b;}
function AKP(a,b,c,d){var e,f;e=IT(d,a.ed);Mz(d,a.ed,b);f=a.e.c(b,c,d);if(f<0)Mz(d,a.ed,e);return f;}
function AWJ(a){return a.ed;}
function AK2(a,b){return 0;}
function AUZ(){var b;b=new WD;B1(b);A69=b;}
function GT(){var a=this;B.call(a);a.be=null;a.gM=0;a.fa=0;a.t9=0;a.mr=0;a.bi=0;a.n=0;a.x3=0;a.fi=null;a.e9=null;a.x=0;a.jx=0;a.dj=0;a.i6=0;a.bN=null;}
var A7c=null;var A67=null;var A68=0;function W2(a,b){if(b>0&&b<3)a.fa=b;if(b==1){a.n=a.bi;a.e9=a.fi;a.x=a.i6;a.i6=a.dj;FC(a);}}
function GY(a){return a.fi===null?0:1;}
function KA(a){return a.e9===null?0:1;}
function Bk(a){FC(a);return a.mr;}
function F7(a){var b;b=a.fi;FC(a);return b;}
function FC(a){var b,c,d,e,f,g,h,$$je;a.mr=a.bi;a.bi=a.n;a.fi=a.e9;a.dj=a.i6;a.i6=a.x;while(true){b=0;c=a.x>=a.be.data.length?0:Lz(a);a.n=c;a.e9=null;if(a.fa==4){if(c!=92)return;c=a.x;d=a.be.data;c=c>=d.length?0:d[B4(a)];a.n=c;switch(c){case 69:break;default:a.n=92;a.x=a.jx;return;}a.fa=a.t9;a.n=a.x>(a.be.data.length-2|0)?0:Lz(a);}a:{c=a.n;if(c!=92){e=a.fa;if(e==1)switch(c){case 36:a.n=(-536870876);break a;case 40:if(a.be.data[a.x]!=63){a.n=(-2147483608);break a;}B4(a);c=a.be.data[a.x];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.n=(-134217688);B4(a);break b;default:L(Ck(C(21),FJ(a),a.x));}a.n=(-67108824);B4(a);}else{switch(c){case 33:break;case 60:B4(a);c=a.be.data[a.x];e=1;break b;case 61:a.n=(-536870872);B4(a);break b;case 62:a.n=(-33554392);B4(a);break b;default:f=AJP(a);a.n=f;if(f<256){a.gM=f;f=f<<16;a.n=f;a.n=(-1073741784)|f;break b;}f=f&255;a.n=f;a.gM=f;f=f<<16;a.n=f;a.n=(-16777176)|f;break b;}a.n=(-268435416);B4(a);}}if(!e)break;}break a;case 41:a.n=(-536870871);break a;case 42:case 43:case 63:e
=a.x;d=a.be.data;switch(e>=d.length?42:d[e]){case 43:a.n=c|(-2147483648);B4(a);break a;case 63:a.n=c|(-1073741824);B4(a);break a;default:}a.n=c|(-536870912);break a;case 46:a.n=(-536870866);break a;case 91:a.n=(-536870821);W2(a,2);break a;case 93:if(e!=2)break a;a.n=(-536870819);break a;case 94:a.n=(-536870818);break a;case 123:a.e9=AF5(a,c);break a;case 124:a.n=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.n=(-536870874);break a;case 45:a.n=(-536870867);break a;case 91:a.n=(-536870821);break a;case 93:a.n
=(-536870819);break a;case 94:a.n=(-536870818);break a;default:}}else{c=a.x>=(a.be.data.length-2|0)?(-1):Lz(a);c:{a.n=c;switch(c){case -1:L(Ck(C(21),FJ(a),a.x));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.n
=AE3(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fa!=1)break a;a.n=(-2147483648)|c;break a;case 65:a.n=(-2147483583);break a;case 66:a.n=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:L(Ck(C(21),FJ(a),a.x));case 68:case 83:case 87:case 100:case 115:case 119:a.e9=Rp(Eu(a.be,
a.jx,1),0);a.n=0;break a;case 71:a.n=(-2147483577);break a;case 80:case 112:break c;case 81:a.t9=a.fa;a.fa=4;b=1;break a;case 90:a.n=(-2147483558);break a;case 97:a.n=7;break a;case 98:a.n=(-2147483550);break a;case 99:c=a.x;d=a.be.data;if(c>=(d.length-2|0))L(Ck(C(21),FJ(a),a.x));a.n=d[B4(a)]&31;break a;case 101:a.n=27;break a;case 102:a.n=12;break a;case 110:a.n=10;break a;case 114:a.n=13;break a;case 116:a.n=9;break a;case 117:a.n=XG(a,4);break a;case 120:a.n=XG(a,2);break a;case 122:a.n=(-2147483526);break a;default:}break a;}g
=AIB(a);h=0;if(a.n==80)h=1;try{a.e9=Rp(g,h);}catch($$e){$$je=EL($$e);if($$je instanceof Mh){L(Ck(C(21),FJ(a),a.x));}else{throw $$e;}}a.n=0;}}if(b)continue;else break;}}
function AIB(a){var b,c,d,e,f,g;b=new K;Gw(b,10);c=a.x;d=a.be;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Eu(d,B4(a),1);f=new K;N(f);H(H(f,C(464)),b);return M(f);}B4(a);c=0;a:{while(true){g=a.x;d=a.be.data;if(g>=(d.length-2|0))break;c=d[B4(a)];if(c==125)break a;BN(b,c);}}if(c!=125)L(Ck(C(21),a.bN,a.x));}if(!b.K)L(Ck(C(21),a.bN,a.x));f=M(b);if(J(f)==1){b=new K;N(b);H(H(b,C(464)),f);return M(b);}b:{c:{if(J(f)>3){if(M5(f,C(464)))break c;if(M5(f,C(465)))break c;}break b;}f=Do(f,2);}return f;}
function AF5(a,b){var c,d,e,f,g,$$je;c=new K;Gw(c,4);d=(-1);e=2147483647;a:{while(true){f=a.x;g=a.be.data;if(f>=g.length)break a;b=g[B4(a)];if(b==125)break a;if(b==44&&d<0)try{d=Kr(D5(c),10);AF$(c,0,AG_(c));continue;}catch($$e){$$je=EL($$e);if($$je instanceof Dn){break;}else{throw $$e;}}BN(c,b&65535);}L(Ck(C(21),a.bN,a.x));}if(b!=125)L(Ck(C(21),a.bN,a.x));if(c.K>0)b:{try{e=Kr(D5(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EL($$e);if($$je instanceof Dn){}else{throw $$e;}}L(Ck(C(21),a.bN,a.x));}else if
(d<0)L(Ck(C(21),a.bN,a.x));if((d|e|(e-d|0))<0)L(Ck(C(21),a.bN,a.x));b=a.x;g=a.be.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.n=(-2147483525);B4(a);break c;case 63:a.n=(-1073741701);B4(a);break c;default:}a.n=(-536870789);}c=new VC;c.fv=d;c.fu=e;return c;}
function FJ(a){return a.bN;}
function Dt(a){return !a.bi&&!a.n&&a.x==a.x3&&!GY(a)?1:0;}
function M0(b){return b<0?0:1;}
function E$(a){return !Dt(a)&&!GY(a)&&M0(a.bi)?1:0;}
function WC(a){var b;b=a.bi;return b<=56319&&b>=55296?1:0;}
function AA5(a){var b;b=a.bi;return b<=57343&&b>=56320?1:0;}
function RM(b){return b<=56319&&b>=55296?1:0;}
function PH(b){return b<=57343&&b>=56320?1:0;}
function XG(a,b){var c,d,e,f,$$je;c=new K;Gw(c,b);d=a.be.data.length-2|0;e=0;while(true){f=BL(e,b);if(f>=0)break;if(a.x>=d)break;BN(c,a.be.data[B4(a)]);e=e+1|0;}if(!f)a:{try{b=Kr(D5(c),16);}catch($$e){$$je=EL($$e);if($$je instanceof Dn){break a;}else{throw $$e;}}return b;}L(Ck(C(21),a.bN,a.x));}
function AE3(a){var b,c,d,e,f,g;b=3;c=1;d=a.be.data;e=d.length-2|0;f=AAK(d[a.x],8);switch(f){case -1:break;default:if(f>3)b=2;B4(a);a:{while(true){if(c>=b)break a;g=a.x;if(g>=e)break a;g=AAK(a.be.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B4(a);c=c+1|0;}}return f;}L(Ck(C(21),a.bN,a.x));}
function AJP(a){var b,c,d,e;b=1;c=a.gM;a:while(true){d=a.x;e=a.be.data;if(d>=e.length)L(Ck(C(21),a.bN,d));b:{c:{switch(e[d]){case 41:B4(a);return c|256;case 45:if(!b)L(Ck(C(21),a.bN,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B4(a);}B4(a);return c;}
function B4(a){var b,c,d,e,f;b=a.x;a.jx=b;if(!(a.gM&4))a.x=b+1|0;else{c=a.be.data.length-2|0;a.x=b+1|0;a:while(true){d=a.x;if(d<c&&QU(a.be.data[d])){a.x=a.x+1|0;continue;}d=a.x;if(d>=c)break;e=a.be.data;if(e[d]!=35)break;a.x=d+1|0;while(true){f=a.x;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.x=f+1|0;}}}return a.jx;}
function AJr(b){return A7c.Gz(b);}
function Lz(a){var b,c,d,e;b=a.be.data[B4(a)];if(CO(b)){c=a.jx+1|0;d=a.be.data;if(c<d.length){e=d[c];if(Dd(e)){B4(a);return EF(b,e);}}}return b;}
function Pf(a){return a.dj;}
function JW(){var a=this;BR.call(a);a.BY=null;a.BG=null;a.rT=0;}
function Ck(a,b,c){var d=new JW();Mm(d,a,b,c);return d;}
function Mm(a,b,c,d){X(a);a.rT=(-1);a.BY=b;a.BG=c;a.rT=d;}
function O7(){var a=this;B.call(a);a.uN=null;a.uO=0.0;}
function AS8(a){var b,c;b=a.uN;c=a.uO;b.iG.mU(c);}
var Rc=G(CV);
function ATb(a,b,c,d){var e;e=a.ed;BX(d,e,b-Du(d,e)|0);return a.e.c(b,c,d);}
function AYC(a,b){return 0;}
var ACK=G(CV);
function AUh(a,b,c,d){return b;}
var P_=G(CV);
function AK9(a,b,c,d){if(Du(d,a.ed)!=b)b=(-1);return b;}
function RV(){CV.call(this);this.vG=0;}
function ATd(a,b,c,d){var e;e=a.ed;BX(d,e,b-Du(d,e)|0);a.vG=b;return b;}
function AXJ(a,b){return 0;}
var FT=G(CV);
function ARF(a,b,c,d){if(d.lu!=1&&b!=d.y)return (-1);d.j1=1;Mz(d,0,b);return b;}
function B$(){BO.call(this);this.bI=0;}
function DQ(a){B1(a);a.bI=1;}
function A0G(a,b,c,d){var e;if((b+a.b9()|0)>d.y){d.dE=1;return (-1);}e=a.by(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function AZd(a){return a.bI;}
function ANG(a,b){return 1;}
var AFQ=G(B$);
function HR(a){var b=new AFQ();AWP(b,a);return b;}
function AWP(a,b){Nd(a,b);a.bI=1;a.jj=1;a.bI=0;}
function AYU(a,b,c){return 0;}
function AU2(a,b,c,d){var e,f,g;e=d.y;f=d.c6;while(true){g=BL(b,e);if(g>0)return (-1);if(g<0&&Dd(P(c,b))&&b>f&&CO(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AUd(a,b,c,d,e){var f,g;f=e.y;g=e.c6;while(true){if(c<b)return (-1);if(c<f&&Dd(P(d,c))&&c>g&&CO(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ATc(a,b){return 0;}
function B3(){var a=this;BO.call(a);a.bK=null;a.eK=null;a.ba=0;}
function A1z(a,b){var c=new B3();FU(c,a,b);return c;}
function FU(a,b,c){B1(a);a.bK=b;a.eK=c;a.ba=c.ed;}
function AMX(a,b,c,d){var e,f,g,h;if(a.bK===null)return (-1);e=Gi(d,a.ba);DP(d,a.ba,b);f=a.bK.m;g=0;while(true){if(g>=f){DP(d,a.ba,e);return (-1);}h=(Bw(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function APK(a,b){a.eK.e=b;}
function AWu(a,b){var c;a:{c=a.bK;if(c!==null){c=B2(c);while(true){if(!B7(c))break a;if(!(B8(c)).b0(b))continue;else return 1;}}}return 0;}
function AP_(a,b){return IT(b,a.ba)>=0&&Gi(b,a.ba)==IT(b,a.ba)?0:1;}
function ALr(a){var b,c,d,e;a.cu=1;b=a.eK;if(b!==null&&!b.cu)Ka(b);a:{b=a.bK;if(b!==null){c=b.m;d=0;while(true){if(d>=c)break a;b=Bw(a.bK,d);e=b.gg();if(e===null)e=b;else{b.cu=1;EB(a.bK,d);YO(a.bK,d,e);}if(!e.cu)e.eG();d=d+1|0;}}}if(a.e!==null)Ka(a);}
var J7=G(B3);
function APx(a,b,c,d){var e,f,g,h;e=Du(d,a.ba);BX(d,a.ba,b);f=a.bK.m;g=0;while(true){if(g>=f){BX(d,a.ba,e);return (-1);}h=(Bw(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AYh(a,b){return !Du(b,a.ba)?0:1;}
var D0=G(J7);
function AUB(a,b,c,d){var e,f,g;e=Du(d,a.ba);BX(d,a.ba,b);f=a.bK.m;g=0;while(g<f){if((Bw(a.bK,g)).c(b,c,d)>=0)return a.e.c(a.eK.vG,c,d);g=g+1|0;}BX(d,a.ba,e);return (-1);}
function AX_(a,b){a.e=b;}
var Vs=G(D0);
function API(a,b,c,d){var e,f;e=a.bK.m;f=0;while(f<e){if((Bw(a.bK,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ARx(a,b){return 0;}
var ABC=G(D0);
function AKZ(a,b,c,d){var e,f;e=a.bK.m;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bw(a.bK,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AZf(a,b){return 0;}
var YB=G(D0);
function ALp(a,b,c,d){var e,f,g,h;e=a.bK.m;f=d.j4?0:d.c6;a:{g=a.e.c(b,c,d);if(g>=0){BX(d,a.ba,b);h=0;while(true){if(h>=e)break a;if((Bw(a.bK,h)).cy(f,b,c,d)>=0){BX(d,a.ba,(-1));return g;}h=h+1|0;}}}return (-1);}
function A0T(a,b){return 0;}
var Sd=G(D0);
function AST(a,b,c,d){var e,f;e=a.bK.m;BX(d,a.ba,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bw(a.bK,f)).cy(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AYr(a,b){return 0;}
function HH(){B3.call(this);this.db=null;}
function A2Y(a,b){var c=new HH();ADQ(c,a,b);return c;}
function ADQ(a,b,c){B1(a);a.db=b;a.eK=c;a.ba=c.ed;}
function AKl(a,b,c,d){var e,f;e=Gi(d,a.ba);DP(d,a.ba,b);f=a.db.c(b,c,d);if(f>=0)return f;DP(d,a.ba,e);return (-1);}
function AOw(a,b,c,d){var e;e=a.db.cn(b,c,d);if(e>=0)DP(d,a.ba,e);return e;}
function AYE(a,b,c,d,e){var f;f=a.db.cy(b,c,d,e);if(f>=0)DP(e,a.ba,f);return f;}
function AWs(a,b){return a.db.b0(b);}
function AXG(a){var b;b=new OB;ADQ(b,a.db,a.eK);a.e=b;return b;}
function AR1(a){var b;a.cu=1;b=a.eK;if(b!==null&&!b.cu)Ka(b);b=a.db;if(b!==null&&!b.cu){b=b.gg();if(b!==null){a.db.cu=1;a.db=b;}a.db.eG();}}
var GV=G();
function Y(){var a=this;GV.call(a);a.bg=0;a.ct=0;a.M=null;a.lB=null;a.l4=null;a.O=0;}
var A7d=null;function Pz(){Pz=Bm(Y);ALJ();}
function Bz(a){var b;Pz();b=new ACe;b.D=BI(64);a.M=b;}
function ATI(a){return null;}
function ATq(a){return a.M;}
function AIu(a){var b,c,d,e,f;if(!a.ct)b=H9(a.M,0)>=2048?0:1;else{a:{c=a.M;b=0;d=c.bt;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=IP(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+IP(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AVy(a){return a.O;}
function AY_(a){return a;}
function ADi(a){var b,c;if(a.l4===null){b=a.fB();c=new T4;c.DP=a;c.vS=b;Bz(c);a.l4=c;EE(c,a.ct);}return a.l4;}
function Jh(a){var b,c;if(a.lB===null){b=a.fB();c=new T2;c.B1=a;c.zk=b;c.uf=a;Bz(c);a.lB=c;EE(c,a.bg);a.lB.O=a.O;}return a.lB;}
function A0a(a){return 0;}
function EE(a,b){var c;c=a.bg;if(c^b){a.bg=c?0:1;a.ct=a.ct?0:1;}if(!a.O)a.O=1;return a;}
function AMx(a){return a.bg;}
function MY(b,c){Pz();return b.o(c);}
function JG(b,c){var d,e;Pz();if(b.dL()!==null&&c.dL()!==null){b=b.dL();c=c.dL();d=Bd(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Rp(b,c){var d,e,f;Pz();d=0;while(true){AQz();e=A7e.data;if(d>=e.length){f=new Mh;Bl(f,C(21));f.Cy=C(21);f.DU=b;L(f);}e=e[d].data;if(Bj(b,e[0]))break;d=d+1|0;}return AI7(e[1],c);}
function ALJ(){var b;b=new G8;AQz();A7d=b;}
function ADK(){var a=this;Y.call(a);a.oU=0;a.p$=0;a.hs=0;a.mF=0;a.em=0;a.gd=0;a.I=null;a.bE=null;}
function Dv(){var a=new ADK();ASu(a);return a;}
function AZH(a,b){var c=new ADK();ALA(c,a,b);return c;}
function ASu(a){Bz(a);a.I=A0V();}
function ALA(a,b,c){Bz(a);a.I=A0V();a.oU=b;a.p$=c;}
function CF(a,b){a:{if(a.oU){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.em){N9(a.I,Ji(b&65535));break a;}Lr(a.I,Ji(b&65535));break a;}if(a.p$&&b>128){a.hs=1;b=GQ(GO(b));}}}if(!(!RM(b)&&!PH(b))){if(a.mF)N9(a.M,b-55296|0);else Lr(a.M,b-55296|0);}if(a.em)N9(a.I,b);else Lr(a.I,b);if(!a.O&&LW(b))a.O=1;return a;}
function AJR(a,b){var c,d,e;if(!a.O&&b.O)a.O=1;if(a.mF){if(!b.ct)F3(a.M,b.fB());else Dj(a.M,b.fB());}else if(!b.ct)Gl(a.M,b.fB());else{Gd(a.M,b.fB());Dj(a.M,b.fB());a.ct=a.ct?0:1;a.mF=1;}if(!a.gd&&b.dL()!==null){if(a.em){if(!b.bg)F3(a.I,b.dL());else Dj(a.I,b.dL());}else if(!b.bg)Gl(a.I,b.dL());else{Gd(a.I,b.dL());Dj(a.I,b.dL());a.bg=a.bg?0:1;a.em=1;}}else{c=a.bg;d=a.bE;if(d!==null){if(!c){e=new WT;e.CZ=a;e.z6=c;e.t2=d;e.tU=b;Bz(e);a.bE=e;}else{e=new WV;e.D5=a;e.sf=c;e.xA=d;e.w$=b;Bz(e);a.bE=e;}}else{if(c&&!a.em
&&N2(a.I)){d=new WQ;d.Dp=a;d.xE=b;Bz(d);a.bE=d;}else if(!c){d=new WO;d.or=a;d.nU=c;d.wk=b;Bz(d);a.bE=d;}else{d=new WP;d.m6=a;d.lW=c;d.tX=b;Bz(d);a.bE=d;}a.gd=1;}}return a;}
function B9(a,b,c){var d,e,f,g,h;if(b>c){d=new BR;X(d);L(d);}a:{b:{if(!a.oU){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CF(a,b);b=b+1|0;}}if(!a.em)ID(a.I,b,c+1|0);else{d=a.I;c=c+1|0;if(b>c){d=new BD;X(d);L(d);}e=d.bt;if(b<e){f=Bd(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(JD(d,b)|Iw(d,f));}else{h=d.D.data;h[g]=h[g]&JD(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&Iw(d,f);}}G$(d);}}}}return a;}
function AGL(a,b){var c,d,e;if(!a.O&&b.O)a.O=1;if(b.hs)a.hs=1;c=a.ct;if(!(c^b.ct)){if(!c)Gl(a.M,b.M);else Dj(a.M,b.M);}else if(c)F3(a.M,b.M);else{Gd(a.M,b.M);Dj(a.M,b.M);a.ct=1;}if(!a.gd&&CZ(b)!==null){c=a.bg;if(!(c^b.bg)){if(!c)Gl(a.I,CZ(b));else Dj(a.I,CZ(b));}else if(c)F3(a.I,CZ(b));else{Gd(a.I,CZ(b));Dj(a.I,CZ(b));a.bg=1;}}else{c=a.bg;d=a.bE;if(d!==null){if(!c){e=new Pq;e.AR=a;e.to=c;e.zu=d;e.um=b;Bz(e);a.bE=e;}else{e=new PN;e.A6=a;e.zR=c;e.pP=d;e.qa=b;Bz(e);a.bE=e;}}else{if(!a.em&&N2(a.I)){if(!c){d=new WR;d.D6
=a;d.ru=b;Bz(d);a.bE=d;}else{d=new WS;d.C4=a;d.zI=b;Bz(d);a.bE=d;}}else if(!c){d=new WW;d.ts=a;d.sm=b;d.xC=c;Bz(d);a.bE=d;}else{d=new WX;d.sD=a;d.sK=b;d.yl=c;Bz(d);a.bE=d;}a.gd=1;}}}
function Uf(a,b){var c,d,e;if(!a.O&&b.O)a.O=1;if(b.hs)a.hs=1;c=a.ct;if(!(c^b.ct)){if(!c)Dj(a.M,b.M);else Gl(a.M,b.M);}else if(!c)F3(a.M,b.M);else{Gd(a.M,b.M);Dj(a.M,b.M);a.ct=0;}if(!a.gd&&CZ(b)!==null){c=a.bg;if(!(c^b.bg)){if(!c)Dj(a.I,CZ(b));else Gl(a.I,CZ(b));}else if(!c)F3(a.I,CZ(b));else{Gd(a.I,CZ(b));Dj(a.I,CZ(b));a.bg=0;}}else{c=a.bg;d=a.bE;if(d!==null){if(!c){e=new Ps;e.CY=a;e.yU=c;e.vQ=d;e.sd=b;Bz(e);a.bE=e;}else{e=new Pt;e.C6=a;e.yx=c;e.vj=d;e.yQ=b;Bz(e);a.bE=e;}}else{if(!a.em&&N2(a.I)){if(!c){d=new Po;d.A9
=a;d.wH=b;Bz(d);a.bE=d;}else{d=new Pp;d.D4=a;d.rj=b;Bz(d);a.bE=d;}}else if(!c){d=new Pu;d.AB=a;d.z2=b;d.sF=c;Bz(d);a.bE=d;}else{d=new Pn;d.sE=a;d.yC=b;d.xN=c;Bz(d);a.bE=d;}a.gd=1;}}}
function C5(a,b){var c;c=a.bE;if(c!==null)return a.bg^c.o(b);return a.bg^DL(a.I,b);}
function CZ(a){if(!a.gd)return a.I;return null;}
function AUY(a){return a.M;}
function ARi(a){var b,c;if(a.bE!==null)return a;b=CZ(a);c=new Pr;c.CP=a;c.kX=b;Bz(c);return EE(c,a.bg);}
function AW4(a){var b,c,d;b=new K;N(b);c=H9(a.I,0);while(c>=0){JI(b,HF(c));BN(b,124);c=H9(a.I,c+1|0);}d=b.K;if(d>0)TT(b,d-1|0);return M(b);}
function AMA(a){return a.hs;}
function Mh(){var a=this;Bt.call(a);a.Cy=null;a.DU=null;}
function Eb(){BO.call(this);this.L=null;}
function Dm(a,b,c,d){Nd(a,c);a.L=b;a.jj=d;}
function A0L(a){return a.L;}
function AQH(a,b){return !a.L.b0(b)&&!a.e.b0(b)?0:1;}
function AZI(a,b){return 1;}
function AOL(a){var b;a.cu=1;b=a.e;if(b!==null&&!b.cu){b=b.gg();if(b!==null){a.e.cu=1;a.e=b;}a.e.eG();}b=a.L;if(b!==null){if(!b.cu){b=b.gg();if(b!==null){a.L.cu=1;a.L=b;}a.L.eG();}else if(b instanceof HH&&b.eK.oa)a.L=b.e;}}
function C6(){Eb.call(this);this.bb=null;}
function A1O(a,b,c){var d=new C6();E6(d,a,b,c);return d;}
function E6(a,b,c,d){Dm(a,b,c,d);a.bb=b;}
function ASU(a,b,c,d){var e,f;e=0;a:{while((b+a.bb.b9()|0)<=d.y){f=a.bb.by(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.bb.b9()|0;e=e+(-1)|0;}return f;}
function FD(){C6.call(this);this.kj=null;}
function A2v(a,b,c,d){var e=new FD();Rs(e,a,b,c,d);return e;}
function Rs(a,b,c,d,e){E6(a,c,d,e);a.kj=b;}
function ATx(a,b,c,d){var e,f,g,h,i;e=a.kj;f=e.fv;g=e.fu;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bb.b9()|0)>d.y)break a;i=a.bb.by(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.bb.b9()|0;h=h+(-1)|0;}return i;}if((b+a.bb.b9()|0)>d.y){d.dE=1;return (-1);}i=a.bb.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CW=G(Eb);
function AS5(a,b,c,d){var e;if(!a.L.H(d))return a.e.c(b,c,d);e=a.L.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var EX=G(C6);
function AWH(a,b,c,d){var e;e=a.L.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function ASC(a,b){a.e=b;a.L.S(b);}
var T5=G(C6);
function A0C(a,b,c,d){while((b+a.bb.b9()|0)<=d.y&&a.bb.by(b,c)>0){b=b+a.bb.b9()|0;}return a.e.c(b,c,d);}
function AO7(a,b,c,d){var e,f,g;e=a.e.cn(b,c,d);if(e<0)return (-1);f=e-a.bb.b9()|0;while(f>=b&&a.bb.by(f,c)>0){g=f-a.bb.b9()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.m8=null;a.ms=null;}
function AI7(a,b){if(!b&&a.m8===null)a.m8=a.F();else if(b&&a.ms===null)a.ms=EE(a.F(),1);if(b)return a.ms;return a.m8;}
var Dn=G(BR);
function VC(){var a=this;GV.call(a);a.fv=0;a.fu=0;}
function AW8(a){var b,c,d,e,f;b=a.fv;c=a.fu;d=c!=2147483647?Nu(c):C(21);e=new K;N(e);BN(e,123);f=U(e,b);BN(f,44);BN(H(f,d),125);return M(e);}
var WD=G(BO);
function ANY(a,b,c,d){return b;}
function AXE(a,b){return 0;}
function ACe(){var a=this;B.call(a);a.D=null;a.bt=0;}
function A0V(){var a=new ACe();AT5(a);return a;}
function AT5(a){a.D=BI(0);}
function Lr(a,b){var c,d;c=b/32|0;if(b>=a.bt){JJ(a,c+1|0);a.bt=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function ID(a,b,c){var d,e,f,g,h;d=BL(b,c);if(d>0){e=new BD;X(e);L(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bt){JJ(a,f+1|0);a.bt=c;}if(d==f){g=a.D.data;g[d]=g[d]|Iw(a,b)&JD(a,c);}else{g=a.D.data;g[d]=g[d]|Iw(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|JD(a,c);}}}
function Iw(a,b){return (-1)<<(b%32|0);}
function JD(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function N9(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bt-1|0))G$(a);}}
function DL(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function H9(a,b){var c,d,e,f;c=a.bt;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return IP(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+IP(e[f])|0;f=f+1|0;}return (-1);}
function JJ(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Be((b*3|0)/2|0,(c*2|0)+1|0);a.D=I3(a.D,c);}
function G$(a){var b,c,d;b=(a.bt+31|0)/32|0;a.bt=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Wh(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bt=a.bt-32|0;}a.bt=a.bt-d|0;}}
function Dj(a,b){var c,d,e,f;c=Bd(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bt=Bd(a.bt,b.bt);G$(a);}
function F3(a,b){var c,d,e;c=Bd(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}G$(a);}
function Gl(a,b){var c,d,e;c=Be(a.bt,b.bt);a.bt=c;JJ(a,(c+31|0)/32|0);c=Bd(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function Gd(a,b){var c,d,e;c=Be(a.bt,b.bt);a.bt=c;JJ(a,(c+31|0)/32|0);c=Bd(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}G$(a);}
function N2(a){return a.bt?0:1;}
function Os(){var a=this;B3.call(a);a.rm=null;a.CO=0;}
function Qw(){var a=this;B3.call(a);a.nn=null;a.o4=null;}
function AE9(a,b){var c=new Qw();AGp(c,a,b);return c;}
function AGp(a,b,c){B1(a);a.nn=b;a.o4=c;}
function AKN(a,b,c,d){var e,f,g,h,i;e=a.nn.c(b,c,d);if(e<0)a:{f=a.o4;g=d.c6;e=d.y;h=b+1|0;e=BL(h,e);if(e>0){d.dE=1;e=(-1);}else{i=P(c,b);if(!f.rm.o(i))e=(-1);else{if(CO(i)){if(e<0&&Dd(P(c,h))){e=(-1);break a;}}else if(Dd(i)&&b>g&&CO(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AXw(a,b){a.e=b;a.o4.e=b;a.nn.S(b);}
function ALb(a,b){return 1;}
function AK1(a,b){return 1;}
function DU(){var a=this;B3.call(a);a.d0=null;a.Bz=0;}
function AWa(a){var b=new DU();AAB(b,a);return b;}
function AAB(a,b){B1(a);a.d0=b.ln();a.Bz=b.bg;}
function AUT(a,b,c,d){var e,f,g,h;e=d.y;if(b<e){f=b+1|0;g=P(c,b);if(a.o(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Ja(g,f)&&a.o(EF(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AMM(a,b){return a.d0.o(b);}
function AKJ(a,b){if(b instanceof D7)return MY(a.d0,b.gC);if(b instanceof EA)return MY(a.d0,b.dB);if(b instanceof DU)return JG(a.d0,b.d0);if(!(b instanceof Ew))return 1;return JG(a.d0,b.f$);}
function ANS(a){return a.d0;}
function AY5(a,b){a.e=b;}
function AMp(a,b){return 1;}
var Me=G(DU);
function ANH(a,b){return a.d0.o(GQ(GO(b)));}
function ADE(){var a=this;B$.call(a);a.xe=null;a.Bi=0;}
function AM$(a){var b=new ADE();APf(b,a);return b;}
function APf(a,b){DQ(a);a.xe=b.ln();a.Bi=b.bg;}
function AWe(a,b,c){return !a.xe.o(Fw(Fb(P(c,b))))?(-1):1;}
function Ew(){var a=this;B$.call(a);a.f$=null;a.BL=0;}
function ARe(a){var b=new Ew();AP0(b,a);return b;}
function AP0(a,b){DQ(a);a.f$=b.ln();a.BL=b.bg;}
function Vi(a,b,c){return !a.f$.o(P(c,b))?(-1):1;}
function APM(a,b){if(b instanceof EA)return MY(a.f$,b.dB);if(b instanceof Ew)return JG(a.f$,b.f$);if(!(b instanceof DU)){if(!(b instanceof D7))return 1;return 0;}return JG(a.f$,b.d0);}
function W1(){var a=this;B3.call(a);a.iD=null;a.pf=null;a.kh=0;}
function AZu(a,b){var c=new W1();AS6(c,a,b);return c;}
function AS6(a,b,c){B1(a);a.iD=b;a.kh=c;}
function AOC(a,b){a.e=b;}
function QD(a){if(a.pf===null)a.pf=Hf(a.iD);return a.pf;}
function AJ8(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.y;f=BI(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DN([k,l]):DN([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.kh;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.iD.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.kh==3){k=f[0];m=a.iD.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.kh==2){b=f[0];m=a.iD.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ATQ(a,b){return b instanceof W1&&!Bj(QD(b),QD(a))?0:1;}
function ARn(a,b){return 1;}
function EA(){B$.call(this);this.dB=0;}
function ADS(a){var b=new EA();AP4(b,a);return b;}
function AP4(a,b){DQ(a);a.dB=b;}
function AV6(a){return 1;}
function AM7(a,b,c){return a.dB!=P(c,b)?(-1):1;}
function AMb(a,b,c,d){var e,f,g;if(!(c instanceof BM))return Ir(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=JF(c,a.dB,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ANU(a,b,c,d,e){var f;if(!(d instanceof BM))return Iz(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hk(d,a.dB,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ARf(a,b){if(b instanceof EA)return b.dB!=a.dB?0:1;if(!(b instanceof Ew)){if(b instanceof DU)return b.o(a.dB);if(!(b instanceof D7))return 1;return 0;}return Vi(b,0,Uo(a.dB))<=0?0:1;}
function AGb(){B$.call(this);this.va=0;}
function AYc(a){var b=new AGb();AW0(b,a);return b;}
function AW0(a,b){DQ(a);a.va=Fw(Fb(b));}
function ASI(a,b,c){return a.va!=Fw(Fb(P(c,b)))?(-1):1;}
function AC3(){var a=this;B$.call(a);a.ur=0;a.vN=0;}
function AT$(a){var b=new AC3();AQw(b,a);return b;}
function AQw(a,b){DQ(a);a.ur=b;a.vN=Ji(b);}
function AKe(a,b,c){return a.ur!=P(c,b)&&a.vN!=P(c,b)?(-1):1;}
function FI(){var a=this;B3.call(a);a.je=0;a.mm=null;a.lT=null;a.lN=0;}
function A3u(a,b){var c=new FI();O$(c,a,b);return c;}
function O$(a,b,c){B1(a);a.je=1;a.lT=b;a.lN=c;}
function A0i(a,b){a.e=b;}
function APw(a,b,c,d){var e,f,g,h,i,j,k,l;e=BI(4);f=d.y;if(b>=f)return (-1);g=K1(a,b,c,f);h=b+a.je|0;i=AJr(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DM(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=K1(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AJr(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.je|0;if(h>=f){b=k;break a;}g=K1(a,h,c,f);b=k;}}}if(b!=a.lN)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.lT.data[g])break;g=g+1|0;}return (-1);}
function Ud(a){var b,c;if(a.mm===null){b=new K;N(b);c=0;while(c<a.lN){JI(b,HF(a.lT.data[c]));c=c+1|0;}a.mm=M(b);}return a.mm;}
function K1(a,b,c,d){var e,f,g;a.je=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Ja(e,f)){g=B0(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CO(g[0])&&Dd(g[1])?EF(g[0],g[1]):g[0];a.je=2;}}return e;}
function ANZ(a,b){return b instanceof FI&&!Bj(Ud(b),Ud(a))?0:1;}
function AYa(a,b){return 1;}
var Uz=G(FI);
var Z8=G(FI);
var Vf=G(CW);
function AUm(a,b,c,d){var e;while(true){e=a.L.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var XE=G(CW);
function AWW(a,b,c,d){var e;e=a.L.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.L.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Go=G(CW);
function AY3(a,b,c,d){var e;if(!a.L.H(d))return a.e.c(b,c,d);e=a.L.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function AZS(a,b){a.e=b;a.L.S(b);}
var PX=G(Go);
function ANQ(a,b,c,d){var e;e=a.L.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AW$(a,b){a.e=b;}
function F9(){var a=this;CW.call(a);a.gI=null;a.dG=0;}
function A7f(a,b,c,d,e){var f=new F9();Md(f,a,b,c,d,e);return f;}
function Md(a,b,c,d,e,f){Dm(a,c,d,e);a.gI=b;a.dG=f;}
function A0Q(a,b,c,d){var e,f;e=VA(d,a.dG);if(!a.L.H(d))return a.e.c(b,c,d);if(e>=a.gI.fu)return a.e.c(b,c,d);f=a.dG;e=e+1|0;EJ(d,f,e);f=a.L.c(b,c,d);if(f>=0){EJ(d,a.dG,0);return f;}f=a.dG;e=e+(-1)|0;EJ(d,f,e);if(e>=a.gI.fv)return a.e.c(b,c,d);EJ(d,a.dG,0);return (-1);}
var OF=G(F9);
function ANm(a,b,c,d){var e,f,g;e=0;f=a.gI.fu;a:{while(true){g=a.L.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gI.fv)return (-1);return a.e.c(b,c,d);}
var Q9=G(CW);
function AR7(a,b,c,d){var e;if(!a.L.H(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.L.c(b,c,d);}
var Yd=G(Go);
function ALc(a,b,c,d){var e;if(!a.L.H(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.L.c(b,c,d);return e;}
var ST=G(F9);
function ATi(a,b,c,d){var e,f,g;e=VA(d,a.dG);if(!a.L.H(d))return a.e.c(b,c,d);f=a.gI;if(e>=f.fu){EJ(d,a.dG,0);return a.e.c(b,c,d);}if(e<f.fv){EJ(d,a.dG,e+1|0);g=a.L.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){EJ(d,a.dG,0);return g;}EJ(d,a.dG,e+1|0);g=a.L.c(b,c,d);}return g;}
var Q$=G(Eb);
function A0H(a,b,c,d){var e;e=d.y;if(e>b)return a.e.cy(b,e,c,d);return a.e.c(b,c,d);}
function AQ4(a,b,c,d){var e;e=d.y;if(a.e.cy(b,e,c,d)>=0)return b;return (-1);}
function WK(){Eb.call(this);this.mq=null;}
function APN(a,b,c,d){var e,f;e=d.y;f=AAQ(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cy(b,e,c,d);return a.e.c(b,c,d);}
function AJ$(a,b,c,d){var e,f,g,h;e=d.y;f=a.e.cn(b,c,d);if(f<0)return (-1);g=AAQ(a,f,e,c);if(g>=0)e=g;g=Be(f,a.e.cy(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.mq.ik(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function AAQ(a,b,c,d){while(true){if(b>=c)return (-1);if(a.mq.ik(P(d,b)))break;b=b+1|0;}return b;}
var Fo=G();
var A7g=null;var A7h=null;function Xo(b){var c;if(!(b&1)){c=A7h;if(c!==null)return c;c=new AA_;A7h=c;return c;}c=A7g;if(c!==null)return c;c=new AA$;A7g=c;return c;}
var ACZ=G(C6);
function AKB(a,b,c,d){var e;a:{while(true){if((b+a.bb.b9()|0)>d.y)break a;e=a.bb.by(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var T1=G(EX);
function AOX(a,b,c,d){var e;if((b+a.bb.b9()|0)<=d.y){e=a.bb.by(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var Xd=G(FD);
function AYH(a,b,c,d){var e,f,g,h,i;e=a.kj;f=e.fv;g=e.fu;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bb.b9()|0)>d.y)break a;i=a.bb.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.bb.b9()|0)>d.y){d.dE=1;return (-1);}i=a.bb.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Yc=G(C6);
function APJ(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.bb.b9()|0)<=d.y){e=a.bb.by(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var AAj=G(EX);
function AKH(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.L.c(b,c,d);}
var QW=G(FD);
function AYW(a,b,c,d){var e,f,g,h,i,j;e=a.kj;f=e.fv;g=e.fu;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.bb.b9()|0)<=d.y){i=a.bb.by(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bb.b9()|0)>d.y){d.dE=1;return (-1);}j=a.bb.by(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var KZ=G(BO);
function AWt(a,b,c,d){if(b&&!(d.ge&&b==d.c6))return (-1);return a.e.c(b,c,d);}
function AVW(a,b){return 0;}
function ADZ(){BO.call(this);this.t5=0;}
function AZl(a){var b=new ADZ();ANK(b,a);return b;}
function ANK(a,b){B1(a);a.t5=b;}
function ATG(a,b,c,d){var e,f,g;e=b<d.y?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.j4?0:d.c6;return (e!=32&&!Yg(a,e,b,g,c)?0:1)^(f!=32&&!Yg(a,f,b-1|0,g,c)?0:1)^a.t5?(-1):a.e.c(b,c,d);}
function ATP(a,b){return 0;}
function Yg(a,b,c,d,e){var f;if(!Kq(b)&&b!=95){a:{if(CA(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Kq(f))return 0;if(CA(f)!=6)return 1;}}return 1;}return 0;}
var WG=G(BO);
function ANJ(a,b,c,d){if(b!=d.iq)return (-1);return a.e.c(b,c,d);}
function ASv(a,b){return 0;}
function Us(){BO.call(this);this.gN=0;}
function A1X(a){var b=new Us();AJk(b,a);return b;}
function AJk(a,b){B1(a);a.gN=b;}
function AXY(a,b,c,d){var e,f,g;e=!d.ge?J(c):d.y;if(b>=e){BX(d,a.gN,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BX(d,a.gN,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BX(d,a.gN,0);return a.e.c(b,c,d);}
function AUe(a,b){var c;c=!Du(b,a.gN)?0:1;BX(b,a.gN,(-1));return c;}
var ABZ=G(BO);
function AXt(a,b,c,d){if(b<(d.j4?J(c):d.y))return (-1);d.dE=1;d.DJ=1;return a.e.c(b,c,d);}
function ASH(a,b){return 0;}
function VU(){BO.call(this);this.xR=null;}
function AT_(a,b,c,d){a:{if(b!=d.y){if(!b)break a;if(d.ge&&b==d.c6)break a;if(a.xR.yA(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AMT(a,b){return 0;}
var AF1=G(B3);
function A15(){var a=new AF1();AXj(a);return a;}
function AXj(a){B1(a);}
function AR$(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dE=1;return (-1);}g=P(c,b);if(CO(g)){h=b+2|0;if(h<=e&&Ja(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function ATS(a,b){a.e=b;}
function AXe(a){return (-2147483602);}
function ATR(a,b){return 1;}
function ADJ(){B3.call(this);this.mJ=null;}
function A1U(a){var b=new ADJ();ALv(b,a);return b;}
function ALv(a,b){B1(a);a.mJ=b;}
function AXn(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dE=1;return (-1);}g=P(c,b);if(CO(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Ja(g,h))return a.mJ.ik(EF(g,h))?(-1):a.e.c(b,c,d);}}return a.mJ.ik(g)?(-1):a.e.c(f,c,d);}
function AYy(a,b){a.e=b;}
function AJX(a){return (-2147483602);}
function ASk(a,b){return 1;}
function AJp(){BO.call(this);this.ja=0;}
function A1D(a){var b=new AJp();AVh(b,a);return b;}
function AVh(a,b){B1(a);a.ja=b;}
function AN2(a,b,c,d){var e;e=!d.ge?J(c):d.y;if(b>=e){BX(d,a.ja,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BX(d,a.ja,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AVg(a,b){var c;c=!Du(b,a.ja)?0:1;BX(b,a.ja,(-1));return c;}
function AIx(){BO.call(this);this.ic=0;}
function A1r(a){var b=new AIx();AVA(b,a);return b;}
function AVA(a,b){B1(a);a.ic=b;}
function APs(a,b,c,d){if((!d.ge?J(c)-b|0:d.y-b|0)<=0){BX(d,a.ic,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);BX(d,a.ic,1);return a.e.c(b+1|0,c,d);}
function AU_(a,b){var c;c=!Du(b,a.ic)?0:1;BX(b,a.ic,(-1));return c;}
function AGK(){BO.call(this);this.gq=0;}
function A09(a){var b=new AGK();A0S(b,a);return b;}
function A0S(a,b){B1(a);a.gq=b;}
function AVR(a,b,c,d){var e,f,g;e=!d.ge?J(c)-b|0:d.y-b|0;if(!e){BX(d,a.gq,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BX(d,a.gq,0);return a.e.c(b,c,d);case 13:if(g!=10){BX(d,a.gq,0);return a.e.c(b,c,d);}BX(d,a.gq,0);return a.e.c(b,c,d);default:}return (-1);}
function ALy(a,b){var c;c=!Du(b,a.gq)?0:1;BX(b,a.gq,(-1));return c;}
function H3(){var a=this;B3.call(a);a.p0=0;a.g7=0;}
function A3s(a,b){var c=new H3();PG(c,a,b);return c;}
function PG(a,b,c){B1(a);a.p0=b;a.g7=c;}
function AKD(a,b,c,d){var e,f,g,h;e=Gy(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BX(d,a.g7,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Ji(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AX8(a,b){a.e=b;}
function Gy(a,b){var c,d;c=a.p0;d=Gi(b,c);c=IT(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.mM)?Cr(b.mM,d,c):null;}
function AQr(a,b){var c;c=!Du(b,a.g7)?0:1;BX(b,a.g7,(-1));return c;}
var AJu=G(H3);
function A2h(a,b){var c=new AJu();AZK(c,a,b);return c;}
function AZK(a,b,c){PG(a,b,c);}
function ALC(a,b,c,d){var e,f;e=Gy(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=!AAA(c,e,b)?(-1):J(e);if(f<0)return (-1);BX(d,a.g7,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ARv(a,b,c,d){var e,f;e=Gy(a,d);f=d.c6;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=XF(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AKr(a,b,c,d,e){var f,g;f=Gy(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Qa(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AWR(a,b){return 1;}
var AHW=G(H3);
function A1s(a,b){var c=new AHW();AMS(c,a,b);return c;}
function AMS(a,b,c){PG(a,b,c);}
function AOr(a,b,c,d){var e,f;e=Gy(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BX(d,a.g7,J(e));return a.e.c(b+J(e)|0,c,d);}if(Fw(Fb(P(e,f)))!=Fw(Fb(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Ph=G(GD);
function AMD(a,b,c,d,e){VF(a,b,c,d,e);return a;}
function ATJ(a,b,c,d){ACm(a,b,c,d);return a;}
function AT4(a,b){My(a,b);}
function AZc(a,b,c){ACx(a,b,c);return a;}
function YP(){var a=this;B$.call(a);a.cD=null;a.ok=null;a.mR=null;}
function ALO(a,b,c){return !KW(a,c,b)?(-1):a.bI;}
function ATE(a,b,c,d){var e,f,g;e=d.y;while(true){if(b>e)return (-1);f=P(a.cD,a.bI-1|0);a:{while(true){g=a.bI;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&KW(a,c,b))break;b=b+Zo(a.ok,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bI|0,c,d)>=0)break;b=b+1|0;}return b;}
function AVk(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cD,0);g=(J(d)-c|0)-a.bI|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&KW(a,d,c))break;c=c-Zo(a.mR,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bI|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ANa(a,b){var c;if(b instanceof EA)return b.dB!=P(a.cD,0)?0:1;if(b instanceof Ew)return Vi(b,0,Cr(a.cD,0,1))<=0?0:1;if(!(b instanceof DU)){if(!(b instanceof D7))return 1;return J(a.cD)>1&&b.gC==EF(P(a.cD,0),P(a.cD,1))?1:0;}a:{b:{b=b;if(!b.o(P(a.cD,0))){if(J(a.cD)<=1)break b;if(!b.o(EF(P(a.cD,0),P(a.cD,1))))break b;}c=1;break a;}c=0;}return c;}
function KW(a,b,c){var d;d=0;while(d<a.bI){if(P(b,d+c|0)!=P(a.cD,d))return 0;d=d+1|0;}return 1;}
function AC2(){B$.call(this);this.lh=null;}
function A3t(a){var b=new AC2();AZq(b,a);return b;}
function AZq(a,b){var c,d,e;DQ(a);c=new K;N(c);d=0;while(true){e=BL(d,b.K);if(e>=0){a.lh=M(c);a.bI=c.K;return;}if(d<0)break;if(e>=0)break;BN(c,Fw(Fb(b.B.data[d])));d=d+1|0;}b=new BD;X(b);L(b);}
function AOx(a,b,c){var d;d=0;while(true){if(d>=J(a.lh))return J(a.lh);if(P(a.lh,d)!=Fw(Fb(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OI(){B$.call(this);this.i8=null;}
function AYI(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.i8))return J(a.i8);e=P(a.i8,d);f=b+d|0;if(e!=P(c,f)&&Ji(P(a.i8,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var G8=G();
var A7i=null;var A7j=null;var A7e=null;function AQz(){AQz=Bm(G8);AL3();}
function AL3(){A7i=A10();A7j=A2J();A7e=I($rt_arraycls(B),[I(B,[C(466),A18()]),I(B,[C(467),A07()]),I(B,[C(468),A3d()]),I(B,[C(469),A3h()]),I(B,[C(470),A7j]),I(B,[C(471),A2Q()]),I(B,[C(472),A1w()]),I(B,[C(473),A2j()]),I(B,[C(474),A2g()]),I(B,[C(475),A1e()]),I(B,[C(476),A1l()]),I(B,[C(477),A2m()]),I(B,[C(478),A1N()]),I(B,[C(479),A03()]),I(B,[C(480),A3f()]),I(B,[C(481),A1k()]),I(B,[C(482),A2O()]),I(B,[C(483),A2u()]),I(B,[C(484),A2P()]),I(B,[C(485),A1g()]),I(B,[C(486),A3k()]),I(B,[C(487),A2p()]),I(B,[C(488),A1F()]),
I(B,[C(489),A3b()]),I(B,[C(490),A2$()]),I(B,[C(491),A12()]),I(B,[C(492),A1f()]),I(B,[C(493),A23()]),I(B,[C(494),A7i]),I(B,[C(495),A1I()]),I(B,[C(496),A2l()]),I(B,[C(497),A7i]),I(B,[C(498),A01()]),I(B,[C(499),A7j]),I(B,[C(500),A1o()]),I(B,[C(501),Q(0,127)]),I(B,[C(502),Q(128,255)]),I(B,[C(503),Q(256,383)]),I(B,[C(504),Q(384,591)]),I(B,[C(505),Q(592,687)]),I(B,[C(506),Q(688,767)]),I(B,[C(507),Q(768,879)]),I(B,[C(508),Q(880,1023)]),I(B,[C(509),Q(1024,1279)]),I(B,[C(510),Q(1280,1327)]),I(B,[C(511),Q(1328,1423)]),
I(B,[C(512),Q(1424,1535)]),I(B,[C(513),Q(1536,1791)]),I(B,[C(514),Q(1792,1871)]),I(B,[C(515),Q(1872,1919)]),I(B,[C(516),Q(1920,1983)]),I(B,[C(517),Q(2304,2431)]),I(B,[C(518),Q(2432,2559)]),I(B,[C(519),Q(2560,2687)]),I(B,[C(520),Q(2688,2815)]),I(B,[C(521),Q(2816,2943)]),I(B,[C(522),Q(2944,3071)]),I(B,[C(523),Q(3072,3199)]),I(B,[C(524),Q(3200,3327)]),I(B,[C(525),Q(3328,3455)]),I(B,[C(526),Q(3456,3583)]),I(B,[C(527),Q(3584,3711)]),I(B,[C(528),Q(3712,3839)]),I(B,[C(529),Q(3840,4095)]),I(B,[C(530),Q(4096,4255)]),
I(B,[C(531),Q(4256,4351)]),I(B,[C(532),Q(4352,4607)]),I(B,[C(533),Q(4608,4991)]),I(B,[C(534),Q(4992,5023)]),I(B,[C(535),Q(5024,5119)]),I(B,[C(536),Q(5120,5759)]),I(B,[C(537),Q(5760,5791)]),I(B,[C(538),Q(5792,5887)]),I(B,[C(539),Q(5888,5919)]),I(B,[C(540),Q(5920,5951)]),I(B,[C(541),Q(5952,5983)]),I(B,[C(542),Q(5984,6015)]),I(B,[C(543),Q(6016,6143)]),I(B,[C(544),Q(6144,6319)]),I(B,[C(545),Q(6400,6479)]),I(B,[C(546),Q(6480,6527)]),I(B,[C(547),Q(6528,6623)]),I(B,[C(548),Q(6624,6655)]),I(B,[C(549),Q(6656,6687)]),
I(B,[C(550),Q(7424,7551)]),I(B,[C(551),Q(7552,7615)]),I(B,[C(552),Q(7616,7679)]),I(B,[C(553),Q(7680,7935)]),I(B,[C(554),Q(7936,8191)]),I(B,[C(555),Q(8192,8303)]),I(B,[C(556),Q(8304,8351)]),I(B,[C(557),Q(8352,8399)]),I(B,[C(558),Q(8400,8447)]),I(B,[C(559),Q(8448,8527)]),I(B,[C(560),Q(8528,8591)]),I(B,[C(561),Q(8592,8703)]),I(B,[C(562),Q(8704,8959)]),I(B,[C(563),Q(8960,9215)]),I(B,[C(564),Q(9216,9279)]),I(B,[C(565),Q(9280,9311)]),I(B,[C(566),Q(9312,9471)]),I(B,[C(567),Q(9472,9599)]),I(B,[C(568),Q(9600,9631)]),
I(B,[C(569),Q(9632,9727)]),I(B,[C(570),Q(9728,9983)]),I(B,[C(571),Q(9984,10175)]),I(B,[C(572),Q(10176,10223)]),I(B,[C(573),Q(10224,10239)]),I(B,[C(574),Q(10240,10495)]),I(B,[C(575),Q(10496,10623)]),I(B,[C(576),Q(10624,10751)]),I(B,[C(577),Q(10752,11007)]),I(B,[C(578),Q(11008,11263)]),I(B,[C(579),Q(11264,11359)]),I(B,[C(580),Q(11392,11519)]),I(B,[C(581),Q(11520,11567)]),I(B,[C(582),Q(11568,11647)]),I(B,[C(583),Q(11648,11743)]),I(B,[C(584),Q(11776,11903)]),I(B,[C(585),Q(11904,12031)]),I(B,[C(586),Q(12032,12255)]),
I(B,[C(587),Q(12272,12287)]),I(B,[C(588),Q(12288,12351)]),I(B,[C(589),Q(12352,12447)]),I(B,[C(590),Q(12448,12543)]),I(B,[C(591),Q(12544,12591)]),I(B,[C(592),Q(12592,12687)]),I(B,[C(593),Q(12688,12703)]),I(B,[C(594),Q(12704,12735)]),I(B,[C(595),Q(12736,12783)]),I(B,[C(596),Q(12784,12799)]),I(B,[C(597),Q(12800,13055)]),I(B,[C(598),Q(13056,13311)]),I(B,[C(599),Q(13312,19893)]),I(B,[C(600),Q(19904,19967)]),I(B,[C(601),Q(19968,40959)]),I(B,[C(602),Q(40960,42127)]),I(B,[C(603),Q(42128,42191)]),I(B,[C(604),Q(42752,
42783)]),I(B,[C(605),Q(43008,43055)]),I(B,[C(606),Q(44032,55203)]),I(B,[C(607),Q(55296,56191)]),I(B,[C(608),Q(56192,56319)]),I(B,[C(609),Q(56320,57343)]),I(B,[C(610),Q(57344,63743)]),I(B,[C(611),Q(63744,64255)]),I(B,[C(612),Q(64256,64335)]),I(B,[C(613),Q(64336,65023)]),I(B,[C(614),Q(65024,65039)]),I(B,[C(615),Q(65040,65055)]),I(B,[C(616),Q(65056,65071)]),I(B,[C(617),Q(65072,65103)]),I(B,[C(618),Q(65104,65135)]),I(B,[C(619),Q(65136,65279)]),I(B,[C(620),Q(65280,65519)]),I(B,[C(621),Q(0,1114111)]),I(B,[C(622),
A2n()]),I(B,[C(623),BZ(0,1)]),I(B,[C(624),JX(62,1)]),I(B,[C(625),BZ(1,1)]),I(B,[C(626),BZ(2,1)]),I(B,[C(627),BZ(3,0)]),I(B,[C(628),BZ(4,0)]),I(B,[C(629),BZ(5,1)]),I(B,[C(630),JX(448,1)]),I(B,[C(631),BZ(6,1)]),I(B,[C(632),BZ(7,0)]),I(B,[C(633),BZ(8,1)]),I(B,[C(634),JX(3584,1)]),I(B,[C(635),BZ(9,1)]),I(B,[C(636),BZ(10,1)]),I(B,[C(637),BZ(11,1)]),I(B,[C(638),JX(28672,0)]),I(B,[C(639),BZ(12,0)]),I(B,[C(640),BZ(13,0)]),I(B,[C(641),BZ(14,0)]),I(B,[C(642),A2G(983040,1,1)]),I(B,[C(643),BZ(15,0)]),I(B,[C(644),BZ(16,
1)]),I(B,[C(645),BZ(18,1)]),I(B,[C(646),A1C(19,0,1)]),I(B,[C(647),JX(1643118592,1)]),I(B,[C(648),BZ(20,0)]),I(B,[C(649),BZ(21,0)]),I(B,[C(650),BZ(22,0)]),I(B,[C(651),BZ(23,0)]),I(B,[C(652),BZ(24,1)]),I(B,[C(653),JX(2113929216,1)]),I(B,[C(654),BZ(25,1)]),I(B,[C(655),BZ(26,0)]),I(B,[C(656),BZ(27,0)]),I(B,[C(657),BZ(28,1)]),I(B,[C(658),BZ(29,0)]),I(B,[C(659),BZ(30,0)])]);}
function Vm(){B$.call(this);this.r1=0;}
function AQN(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.r1!=GQ(GO(EF(e,d)))?(-1):2;}
function Nm(){B3.call(this);this.gX=0;}
function APn(a){var b=new Nm();ALg(b,a);return b;}
function ALg(a,b){B1(a);a.gX=b;}
function AXC(a,b){a.e=b;}
function AUf(a,b,c,d){var e,f;e=b+1|0;if(e>d.y){d.dE=1;return (-1);}f=P(c,b);if(b>d.c6&&CO(P(c,b-1|0)))return (-1);if(a.gX!=f)return (-1);return a.e.c(e,c,d);}
function AM_(a,b,c,d){var e,f,g,h;if(!(c instanceof BM))return Ir(a,b,c,d);e=d.c6;f=d.y;while(true){if(b>=f)return (-1);g=JF(c,a.gX,b);if(g<0)return (-1);if(g>e&&CO(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AUE(a,b,c,d,e){var f,g;if(!(d instanceof BM))return Iz(a,b,c,d,e);f=e.c6;a:{while(true){if(c<b)return (-1);g=Hk(d,a.gX,c);if(g<0)break a;if(g<b)break a;if(g>f&&CO(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKq(a,b){if(b instanceof EA)return 0;if(b instanceof Ew)return 0;if(b instanceof DU)return 0;if(b instanceof D7)return 0;if(b instanceof Nt)return 0;if(!(b instanceof Nm))return 1;return b.gX!=a.gX?0:1;}
function ARa(a,b){return 1;}
function Nt(){B3.call(this);this.gH=0;}
function AVV(a){var b=new Nt();APq(b,a);return b;}
function APq(a,b){B1(a);a.gH=b;}
function AT3(a,b){a.e=b;}
function AKa(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;g=BL(f,e);if(g>0){d.dE=1;return (-1);}h=P(c,b);if(g<0&&Dd(P(c,f)))return (-1);if(a.gH!=h)return (-1);return a.e.c(f,c,d);}
function AXM(a,b,c,d){var e,f;if(!(c instanceof BM))return Ir(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=JF(c,a.gH,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dd(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function AQI(a,b,c,d,e){var f,g;if(!(d instanceof BM))return Iz(a,b,c,d,e);f=e.y;a:{while(true){if(c<b)return (-1);g=Hk(d,a.gH,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dd(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALP(a,b){if(b instanceof EA)return 0;if(b instanceof Ew)return 0;if(b instanceof DU)return 0;if(b instanceof D7)return 0;if(b instanceof Nm)return 0;if(!(b instanceof Nt))return 1;return b.gH!=a.gH?0:1;}
function AXT(a,b){return 1;}
function D7(){var a=this;B$.call(a);a.lI=0;a.kT=0;a.gC=0;}
function AYj(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.lI==e&&a.kT==d?2:(-1);}
function AW5(a,b,c,d){var e,f;if(!(c instanceof BM))return Ir(a,b,c,d);e=d.y;while(b<e){b=JF(c,a.lI,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.kT==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ALh(a,b,c,d,e){var f;if(!(d instanceof BM))return Iz(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hk(d,a.kT,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.lI==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AYd(a,b){if(b instanceof D7)return b.gC!=a.gC?0:1;if(b instanceof DU)return b.o(a.gC);if(b instanceof EA)return 0;if(!(b instanceof Ew))return 1;return 0;}
var AA$=G(Fo);
function ALm(a,b){return b!=10?0:1;}
function AQo(a,b,c){return b!=10?0:1;}
var AA_=G(Fo);
function AYX(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ARX(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AFo(){var a=this;B.call(a);a.nJ=null;a.lV=null;a.iN=0;a.uQ=0;}
function AXd(a){var b=new AFo();ANI(b,a);return b;}
function ANI(a,b){var c,d;while(true){c=a.iN;if(b<c)break;a.iN=c<<1|1;}d=c<<1|1;a.iN=d;d=d+1|0;a.nJ=BI(d);a.lV=BI(d);a.uQ=b;}
function QX(a,b,c){var d,e,f,g;d=0;e=a.iN;f=b&e;while(true){g=a.nJ.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.lV.data[f]=c;}
function Zo(a,b){var c,d,e,f;c=a.iN;d=b&c;e=0;while(true){f=a.nJ.data[d];if(!f)break;if(f==b)return a.lV.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.uQ;}
var ADc=G();
var Nk=G(Bf);
function A10(){var a=new Nk();ANn(a);return a;}
function ANn(a){}
function AH2(a){return CF(B9(Dv(),9,13),32);}
var MJ=G(Bf);
function A2J(){var a=new MJ();AQ7(a);return a;}
function AQ7(a){}
function AIt(a){return B9(Dv(),48,57);}
var AFh=G(Bf);
function A18(){var a=new AFh();AMY(a);return a;}
function AMY(a){}
function AYB(a){return B9(Dv(),97,122);}
var AFD=G(Bf);
function A07(){var a=new AFD();ANM(a);return a;}
function ANM(a){}
function ARc(a){return B9(Dv(),65,90);}
var AFF=G(Bf);
function A3d(){var a=new AFF();AKV(a);return a;}
function AKV(a){}
function AMg(a){return B9(Dv(),0,127);}
var Ng=G(Bf);
function A3h(){var a=new Ng();ALE(a);return a;}
function ALE(a){}
function ADM(a){return B9(B9(Dv(),97,122),65,90);}
var Lp=G(Ng);
function A2Q(){var a=new Lp();ANw(a);return a;}
function ANw(a){}
function AEb(a){return B9(ADM(a),48,57);}
var AGB=G(Bf);
function A1w(){var a=new AGB();AWX(a);return a;}
function AWX(a){}
function AVB(a){return B9(B9(B9(Dv(),33,64),91,96),123,126);}
var N_=G(Lp);
function A2j(){var a=new N_();AP$(a);return a;}
function AP$(a){}
function AGI(a){return B9(B9(B9(AEb(a),33,64),91,96),123,126);}
var AIa=G(N_);
function A2g(){var a=new AIa();AQ3(a);return a;}
function AQ3(a){}
function AOM(a){return CF(AGI(a),32);}
var AEE=G(Bf);
function A1e(){var a=new AEE();AYJ(a);return a;}
function AYJ(a){}
function AUu(a){return CF(CF(Dv(),32),9);}
var ADU=G(Bf);
function A1l(){var a=new ADU();AZ5(a);return a;}
function AZ5(a){}
function AOJ(a){return CF(B9(Dv(),0,31),127);}
var AHr=G(Bf);
function A2m(){var a=new AHr();AK4(a);return a;}
function AK4(a){}
function ARZ(a){return B9(B9(B9(Dv(),48,57),97,102),65,70);}
var AJe=G(Bf);
function A1N(){var a=new AJe();ATw(a);return a;}
function ATw(a){}
function AXb(a){var b;b=new ZL;b.Dm=a;Bz(b);b.O=1;return b;}
var AGE=G(Bf);
function A03(){var a=new AGE();AQj(a);return a;}
function AQj(a){}
function ASN(a){var b;b=new Vv;b.Dq=a;Bz(b);b.O=1;return b;}
var AIZ=G(Bf);
function A3f(){var a=new AIZ();AKX(a);return a;}
function AKX(a){}
function ANs(a){var b;b=new Rl;b.Dc=a;Bz(b);return b;}
var AE$=G(Bf);
function A1k(){var a=new AE$();AOK(a);return a;}
function AOK(a){}
function AQv(a){var b;b=new Rk;b.Ba=a;Bz(b);return b;}
var AFR=G(Bf);
function A2O(){var a=new AFR();ALB(a);return a;}
function ALB(a){}
function AUs(a){var b;b=new Uh;b.Ce=a;Bz(b);ID(b.M,0,2048);b.O=1;return b;}
var ADo=G(Bf);
function A2u(){var a=new ADo();ALk(a);return a;}
function ALk(a){}
function ALZ(a){var b;b=new Xa;b.DB=a;Bz(b);b.O=1;return b;}
var AGR=G(Bf);
function A2P(){var a=new AGR();AOv(a);return a;}
function AOv(a){}
function AZ8(a){var b;b=new Pe;b.CA=a;Bz(b);b.O=1;return b;}
var AI5=G(Bf);
function A1g(){var a=new AI5();AO0(a);return a;}
function AO0(a){}
function ASJ(a){var b;b=new Ym;b.BA=a;Bz(b);return b;}
var AFy=G(Bf);
function A3k(){var a=new AFy();AVJ(a);return a;}
function AVJ(a){}
function AN3(a){var b;b=new Vr;b.AI=a;Bz(b);b.O=1;return b;}
var AHL=G(Bf);
function A2p(){var a=new AHL();AKt(a);return a;}
function AKt(a){}
function AL5(a){var b;b=new Vt;b.BR=a;Bz(b);b.O=1;return b;}
var AEG=G(Bf);
function A1F(){var a=new AEG();ALo(a);return a;}
function ALo(a){}
function AVm(a){var b;b=new OZ;b.Cb=a;Bz(b);b.O=1;return b;}
var AGm=G(Bf);
function A3b(){var a=new AGm();AN7(a);return a;}
function AN7(a){}
function AWo(a){var b;b=new Xq;b.DW=a;Bz(b);b.O=1;return b;}
var AI$=G(Bf);
function A2$(){var a=new AI$();AW7(a);return a;}
function AW7(a){}
function ARo(a){var b;b=new Xx;b.Bh=a;Bz(b);return b;}
var AEl=G(Bf);
function A12(){var a=new AEl();ALl(a);return a;}
function ALl(a){}
function AP5(a){var b;b=new Z3;b.DE=a;Bz(b);return b;}
var AD5=G(Bf);
function A1f(){var a=new AD5();AYn(a);return a;}
function AYn(a){}
function AO_(a){var b;b=new Zj;b.AK=a;Bz(b);b.O=1;return b;}
var AGC=G(Bf);
function A23(){var a=new AGC();AVF(a);return a;}
function AVF(a){}
function AYt(a){var b;b=new Ow;b.D7=a;Bz(b);b.O=1;return b;}
var Kj=G(Bf);
function A1I(){var a=new Kj();AMa(a);return a;}
function AMa(a){}
function AEF(a){return CF(B9(B9(B9(Dv(),97,122),65,90),48,57),95);}
var AJm=G(Kj);
function A2l(){var a=new AJm();AVM(a);return a;}
function AVM(a){}
function AO3(a){var b;b=EE(AEF(a),1);b.O=1;return b;}
var AIf=G(Nk);
function A01(){var a=new AIf();ARK(a);return a;}
function ARK(a){}
function ATC(a){var b;b=EE(AH2(a),1);b.O=1;return b;}
var AD3=G(MJ);
function A1o(){var a=new AD3();AWd(a);return a;}
function AWd(a){}
function AM4(a){var b;b=EE(AIt(a),1);b.O=1;return b;}
function AHu(){var a=this;Bf.call(a);a.rW=0;a.xP=0;}
function Q(a,b){var c=new AHu();AZ7(c,a,b);return c;}
function AZ7(a,b,c){a.rW=b;a.xP=c;}
function AOe(a){return B9(Dv(),a.rW,a.xP);}
var AHF=G(Bf);
function A2n(){var a=new AHF();AR3(a);return a;}
function AR3(a){}
function ARP(a){return B9(B9(Dv(),65279,65279),65520,65533);}
function AH6(){var a=this;Bf.call(a);a.pg=0;a.nS=0;a.wq=0;}
function BZ(a,b){var c=new AH6();ALx(c,a,b);return c;}
function A1C(a,b,c){var d=new AH6();ARU(d,a,b,c);return d;}
function ALx(a,b,c){a.nS=c;a.pg=b;}
function ARU(a,b,c,d){a.wq=d;a.nS=c;a.pg=b;}
function AU$(a){var b;b=A17(a.pg);if(a.wq)ID(b.M,0,2048);b.O=a.nS;return b;}
function AIb(){var a=this;Bf.call(a);a.nk=0;a.lY=0;a.p_=0;}
function JX(a,b){var c=new AIb();AL6(c,a,b);return c;}
function A2G(a,b,c){var d=new AIb();ASK(d,a,b,c);return d;}
function AL6(a,b,c){a.lY=c;a.nk=b;}
function ASK(a,b,c,d){a.p_=d;a.lY=c;a.nk=b;}
function AJ1(a){var b;b=new YU;AE4(b,a.nk);if(a.p_)ID(b.M,0,2048);b.O=a.lY;return b;}
var AHx=G();
var ADC=G();
function AEk(b){var c,d,e,f,g,h,i;c=AQF(Gc(b));d=MC(c);e=BI(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+MC(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=OE(c);h=h+1|0;}return e;}
function M6(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function VX(){var a=this;B.call(a);a.wO=0;a.sp=0;a.w0=null;}
function AME(a,b,c){var d=new VX();AQ2(d,a,b,c);return d;}
function AQ2(a,b,c,d){a.wO=b;a.sp=c;a.w0=d;}
function AFt(){var a=this;B.call(a);a.v4=null;a.xr=0;}
function AQF(a){var b=new AFt();AUC(b,a);return b;}
function AUC(a,b){a.v4=b;}
var AHT=G();
function MC(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.v4.data;f=b.xr;b.xr=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Ba(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function OE(b){var c,d;c=MC(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var L8=G(Bt);
function ABE(){var a=this;B.call(a);a.xt=null;a.xu=null;}
function AJ3(a,b){var c,d,e,f;c=a.xt;d=a.xu;e=new ACB;f=AAS(Ei(d));AJA(e,b,null,f);HP(c,e);}
function ABD(){B.call(this);this.v5=null;}
function ARp(a,b){Bp(a.v5,b);}
function AHl(){B.call(this);this.QP=null;}
function RF(){B.call(this);this.rN=null;}
function AVe(a,b){b.gW=a.rN;}
function Q0(){B.call(this);this.s1=null;}
function ALu(a,b){I$(a.s1,b);}
function AA6(){var a=this;B.call(a);a.D8=null;a.j9=null;}
function AMk(a,b){var c;c=a.j9;b=b;a.j9=W9(!c.nE&&!b.eC?0:1);return 1;}
function AAt(){var a=this;B.call(a);a.Bt=null;a.r5=null;}
function AAv(){B.call(this);this.DN=null;}
function AZV(a,b){$rt_globals.console.info($rt_ustr(b));}
var Ko=G(0);
function O8(){var a=this;B.call(a);a.kQ=0;a.AM=null;}
function AX$(a,b){var c;c=new K;N(c);H(H(c,C(660)),b);$rt_globals.console.info($rt_ustr(M(c)));a.kQ=a.kQ+1|0;MQ(b,a);}
function AVI(a,b){var c;c=new K;N(c);H(H(c,C(661)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function AQO(a){var b;b=a.kQ-1|0;a.kQ=b;if(!b)Bp(By(),C(662));}
function AAO(){var a=this;B.call(a);a.Cr=null;a.Cs=null;}
function ZX(){var a=this;B.call(a);a.DT=null;a.DS=null;a.DR=null;}
function V6(){B.call(this);this.xo=null;}
function ATK(a){var b,c,d,e;b=a.xo;c=By();d=H6(b);e=new K;N(e);H(H(e,C(663)),d);Bp(c,M(e));c=b.yP;e=new ZJ;e.fZ=b;e.lc=BG();e.lE=BG();MQ(c,e);}
function T4(){var a=this;Y.call(a);a.vS=null;a.DP=null;}
function AMm(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.ct^DL(a.vS,c):0;}
function T2(){var a=this;Y.call(a);a.zk=null;a.uf=null;a.B1=null;}
function AS4(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.ct^DL(a.zk,c):0;return a.uf.o(b)&&!d?1:0;}
function Pr(){var a=this;Y.call(a);a.kX=null;a.CP=null;}
function AN8(a,b){return a.bg^DL(a.kX,b);}
function AVp(a){var b,c,d;b=new K;N(b);c=H9(a.kX,0);while(c>=0){JI(b,HF(c));BN(b,124);c=H9(a.kX,c+1|0);}d=b.K;if(d>0)TT(b,d-1|0);return M(b);}
function WQ(){var a=this;Y.call(a);a.xE=null;a.Dp=null;}
function AYm(a,b){return a.xE.o(b);}
function WO(){var a=this;Y.call(a);a.nU=0;a.wk=null;a.or=null;}
function AQM(a,b){return !(a.nU^DL(a.or.I,b))&&!(a.nU^a.or.em^a.wk.o(b))?0:1;}
function WP(){var a=this;Y.call(a);a.lW=0;a.tX=null;a.m6=null;}
function AWE(a,b){return !(a.lW^DL(a.m6.I,b))&&!(a.lW^a.m6.em^a.tX.o(b))?1:0;}
function WT(){var a=this;Y.call(a);a.z6=0;a.t2=null;a.tU=null;a.CZ=null;}
function AUL(a,b){return a.z6^(!a.t2.o(b)&&!a.tU.o(b)?0:1);}
function WV(){var a=this;Y.call(a);a.sf=0;a.xA=null;a.w$=null;a.D5=null;}
function AJY(a,b){return a.sf^(!a.xA.o(b)&&!a.w$.o(b)?0:1)?0:1;}
function WR(){var a=this;Y.call(a);a.ru=null;a.D6=null;}
function AMZ(a,b){return C5(a.ru,b);}
function WS(){var a=this;Y.call(a);a.zI=null;a.C4=null;}
function AOB(a,b){return C5(a.zI,b)?0:1;}
function WW(){var a=this;Y.call(a);a.sm=null;a.xC=0;a.ts=null;}
function ARy(a,b){return !C5(a.sm,b)&&!(a.xC^DL(a.ts.I,b))?0:1;}
function WX(){var a=this;Y.call(a);a.sK=null;a.yl=0;a.sD=null;}
function AUo(a,b){return !C5(a.sK,b)&&!(a.yl^DL(a.sD.I,b))?1:0;}
function Pq(){var a=this;Y.call(a);a.to=0;a.zu=null;a.um=null;a.AR=null;}
function A00(a,b){return !(a.to^a.zu.o(b))&&!C5(a.um,b)?0:1;}
function PN(){var a=this;Y.call(a);a.zR=0;a.pP=null;a.qa=null;a.A6=null;}
function AM2(a,b){return !(a.zR^a.pP.o(b))&&!C5(a.qa,b)?1:0;}
function Po(){var a=this;Y.call(a);a.wH=null;a.A9=null;}
function ALG(a,b){return C5(a.wH,b);}
function Pp(){var a=this;Y.call(a);a.rj=null;a.D4=null;}
function AVc(a,b){return C5(a.rj,b)?0:1;}
function Pu(){var a=this;Y.call(a);a.z2=null;a.sF=0;a.AB=null;}
function ANL(a,b){return C5(a.z2,b)&&a.sF^DL(a.AB.I,b)?1:0;}
function Pn(){var a=this;Y.call(a);a.yC=null;a.xN=0;a.sE=null;}
function AZm(a,b){return C5(a.yC,b)&&a.xN^DL(a.sE.I,b)?0:1;}
function Ps(){var a=this;Y.call(a);a.yU=0;a.vQ=null;a.sd=null;a.CY=null;}
function ATM(a,b){return a.yU^a.vQ.o(b)&&C5(a.sd,b)?1:0;}
function Pt(){var a=this;Y.call(a);a.yx=0;a.vj=null;a.yQ=null;a.C6=null;}
function APY(a,b){return a.yx^a.vj.o(b)&&C5(a.yQ,b)?0:1;}
var LP=G(0);
function Zi(){var a=this;B.call(a);a.A2=null;a.zv=null;a.k_=null;a.cG=null;a.jQ=0;a.oo=0;}
function Om(a,b){var c,d,e;c=J(a.k_);if(b>=0&&b<=c){ACH(a.cG,null,(-1),(-1));d=a.cG;d.lu=1;d.eE=b;c=d.iq;if(c<0)c=b;d.iq=c;b=a.zv.cn(b,a.k_,d);if(b==(-1))a.cG.dE=1;if(b>=0){d=a.cG;if(d.j1){e=d.d3.data;if(e[0]==(-1)){c=d.eE;e[0]=c;e[1]=c;}d.iq=Mb(d);return 1;}}a.cG.eE=(-1);return 0;}d=new BD;Bl(d,De(b));L(d);}
function AGl(a){return PM(a.cG,0);}
function AHH(a){return Rm(a.cG,0);}
function ADg(a){return a.cG.j4;}
function AIh(){var a=this;B.call(a);a.M7=null;a.M5=null;a.M8=0.0;}
var C4=G(0);
var A4Q=null;var A58=null;var A4S=null;var A4R=null;var A4U=null;var A4T=null;var A4W=null;var A4V=null;var A4Y=null;var A4X=null;var A4Z=null;function AFH(){AFH=Bm(C4);AZ_();}
function AZ_(){A4Q=CH(0);A58=Dq(8,8,8);A4S=S(C(664));A4R=Dq(255,255,255);A4U=S(C(665));A4T=S(C(666));A4W=S(C(667));A4V=S(C(668));A4Y=EM(205,205,205,153);A4X=EM(255,255,255,0);A4Z=S(C(117));}
function Cw(){CE.call(this);this.oH=null;}
var A7k=null;var A7l=null;var A7m=null;var A7n=null;var A7o=null;var A7p=null;var A7q=null;var A7r=null;var A7s=null;var A7t=null;var A7u=null;var A7v=null;var A7w=null;var A7x=null;var A7y=null;var A40=null;function AE5(){AE5=Bm(Cw);A0x();}
function DB(a,b,c){var d=new Cw();Yu(d,a,b,c);return d;}
function A0k(a,b,c,d){var e=new Cw();ADz(e,a,b,c,d);return e;}
function Yu(a,b,c,d){AE5();Dz(a,b,c);a.oH=Jr(d,null);}
function ADz(a,b,c,d,e){AE5();Dz(a,b,c);a.oH=Jr(d,e);}
function A0x(){var b;b=new Cw;AFH();Yu(b,C(369),0,A58);A7k=b;A7l=DB(C(370),1,S(C(669)));A7m=DB(C(372),2,S(C(670)));A7n=DB(C(374),3,S(C(671)));A7o=DB(C(376),4,A58);A7p=DB(C(377),5,S(C(672)));A7q=DB(C(379),6,S(C(417)));A7r=DB(C(381),7,S(C(673)));A7s=DB(C(383),8,S(C(674)));A7t=A0k(C(385),9,A58,Dq(237,235,252));A7u=A0k(C(386),10,S(C(415)),S(C(675)));A7v=DB(C(387),11,S(C(417)));A7w=DB(C(389),12,S(C(418)));A7x=DB(C(391),13,S(C(676)));b=DB(C(392),14,S(C(393)));A7y=b;A40=I(Cw,[A7k,A7l,A7m,A7n,A7o,A7p,A7q,A7r,A7s,A7t,
A7u,A7v,A7w,A7x,b]);}
var DR=G(0);
var A44=null;var A45=null;var A41=null;var A42=null;var A43=null;var A59=null;var A5$=null;var A46=null;var A47=null;function ATg(){ATg=Bm(DR);AUI();}
function AUI(){A44=S(C(115));A45=S(C(677));A41=S(C(678));A42=S(C(679));A43=S(C(680));A59=S(C(115));A5$=S(C(677));A46=EM(205,205,205,153);A47=Dq(247,248,250);}
function ABu(){var a=this;B.call(a);a.lw=null;a.ij=0;}
var OB=G(HH);
function AMH(a,b,c,d){var e,f,g;e=0;f=d.y;a:{while(true){if(b>f){b=e;break a;}g=Gi(d,a.ba);DP(d,a.ba,b);e=a.db.c(b,c,d);if(e>=0)break;DP(d,a.ba,g);b=b+1|0;}}return b;}
function A0P(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Gi(e,a.ba);DP(e,a.ba,c);f=a.db.c(c,d,e);if(f>=0)break;DP(e,a.ba,g);c=c+(-1)|0;}}return c;}
function ALw(a){return null;}
var Qs=G(Bt);
var Uw=G(Bt);
function S_(){F1.call(this);this.Cv=0;}
function Qm(){F1.call(this);this.DZ=0;}
function Uu(){B.call(this);this.qh=null;}
function AVl(a,b){a.qh.i(HS(b));}
function Uv(){var a=this;B.call(a);a.q5=null;a.q6=null;}
function ATL(a,b){var c,d;c=a.q5;d=a.q6;b.text().then(Bu(c,"f"),Bu(d,"f"));}
function AAZ(){var a=this;B.call(a);a.sn=null;a.zl=null;a.uF=0;a.l7=0;}
function M3(a,b){return Ce(a.sn)<b?0:1;}
var ADk=G();
function ADI(b){var c,d,e,f,g,h,i,j;c=ATW();d=CG(b);Bq(c,d);e=0;f=0;while(f<d){g=B_(b,f);h=I_(g);Bq(c,h);i=0;while(i<h){j=JC(g,i);GP(c,e,LM(j));e=e+LM(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return Qi(c);}
function ADq(b){var c,d,e,f,g,h,i,j,k;c=Z(b);d=R(Gb,c);e=d.data;f=0;while(f<c){a:{g=Z(b);if(g!=(-1)){h=Z(b);i=Z(b);if(i==(-1)){j=new Gb;j.gJ=h;e[g]=j;}else{j=new Gb;j.gJ=h;j.mV=BI(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].mV.data[k]=Z(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function Xr(){B.call(this);this.v2=null;}
function AWi(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.v2;d=CM(c[0]);c=LL(d);e=new Ta;d=ADq(c);f=ADq(c);g=Z(c);h=R(LJ,g);i=h.data;j=0;while(j<g){i[j]=MS(Z(c),Z(c),Z(c),Z(c),Z(c));j=j+1|0;}AEM(e,d,f,h);b.ky=e;MD(b.E,e.zN);MD(b.G,b.ky.zO);c=b.lS;e=b.ky;c.jB=e;b.fr.fq=e;}
var ADB=G(0);
function ABh(){B.call(this);this.vV=null;}
function AP7(a,b){var c,d,e,f;c=a.vV;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.r5;c=By();e=new K;N(e);H(H(e,C(681)),b);Bp(c,M(e));b=By();f=d.length;c=new K;N(c);U(H(c,C(682)),f);Bp(b,M(c));}
function ABi(){var a=this;B.call(a);a.zd=null;a.ze=null;}
function APg(a,b){var c,d;c=a.zd;d=a.ze;b.arrayBuffer().then(Bu(c,"f"),Bu(d,"f"));}
function ABj(){var a=this;B.call(a);a.wW=null;a.kv=null;a.jX=null;}
function Z7(a){var b,c;b=a.wW.next();c=a.jX.oY;b.then(Bu(a,"f"),Bu(c,"f"));}
function AQa(a,b){var c,d;if(b.done?1:0)a.kv.uW();else{Z7(a);c=b.value;if(!(c.kind==='file'?1:0)){b=new ABc;d=a.jX;AC_(b,c,d.oY,XR(d));a.kv.sQ(b);}else{b=A0$(c,null,XR(a.jX));a.kv.vR(b);}}}
function WA(){var a=this;B.call(a);a.w7=null;a.w8=null;}
function ZJ(){var a=this;B.call(a);a.lc=null;a.lE=null;a.fZ=null;}
function AZx(a,b){var c,d;c=new ACV;d=a.fZ;AFg(c,b,d.jk+1|0,d.iV);BC(a.lc,c);}
function ARw(a,b){var c,d,e;c=AYb(Ei(b),a.fZ.jk+1|0);d=a.fZ.iV;e=new P7;e.AF=d;e.AE=b;e.D$=c;c.nR=e;BC(a.lE,c);}
function AZQ(a){var b,c,d,e,f;if(!(Ev(a.lc)&&Ev(a.lE))){b=F$(a.lc,A5V);c=F$(a.lE,A5V);KI(b,A6S);KI(c,A6S);a.fZ.eW=IW(b,c);}Kc(a.fZ);d=a.fZ;e=d.iV;f=new Yz;f.vl=d;d.i2=f;d.kB=f;if(UY(d)>0)II(e.c4.f9);}
function AA3(){var a=this;B.call(a);a.d3=null;a.ko=null;a.oJ=null;a.mM=null;a.qV=0;a.j1=0;a.c6=0;a.y=0;a.eE=0;a.j4=0;a.ge=0;a.dE=0;a.DJ=0;a.iq=0;a.lu=0;}
function BX(a,b,c){a.ko.data[b]=c;}
function Du(a,b){return a.ko.data[b];}
function Mb(a){return Rm(a,0);}
function Rm(a,b){YS(a,b);return a.d3.data[(b*2|0)+1|0];}
function DP(a,b,c){a.d3.data[b*2|0]=c;}
function Mz(a,b,c){a.d3.data[(b*2|0)+1|0]=c;}
function Gi(a,b){return a.d3.data[b*2|0];}
function IT(a,b){return a.d3.data[(b*2|0)+1|0];}
function AFj(a){return PM(a,0);}
function PM(a,b){YS(a,b);return a.d3.data[b*2|0];}
function VA(a,b){return a.oJ.data[b];}
function EJ(a,b,c){a.oJ.data[b]=c;}
function YS(a,b){var c;if(!a.j1){c=new C2;X(c);L(c);}if(b>=0&&b<a.qV)return;c=new BD;Bl(c,De(b));L(c);}
function ACH(a,b,c,d){a.j1=0;a.lu=2;Jf(a.d3,(-1));Jf(a.ko,(-1));if(b!==null)a.mM=b;if(c>=0){a.c6=c;a.y=d;}a.eE=a.c6;}
function AEd(a){return a.lu;}
function SI(){B.call(this);this.wL=null;}
function AWx(a,b){a.wL.i($rt_str(b.message));}
function ABd(){B.call(this);this.vP=null;}
function AXQ(a){EC(a.vP);}
function ZL(){Y.call(this);this.Dm=null;}
function ARE(a,b){return CA(b)!=2?0:1;}
function Vv(){Y.call(this);this.Dq=null;}
function ATA(a,b){return CA(b)!=1?0:1;}
function Rl(){Y.call(this);this.Dc=null;}
function AKF(a,b){return QU(b);}
function Rk(){Y.call(this);this.Ba=null;}
function AU8(a,b){return 0;}
function Uh(){Y.call(this);this.Ce=null;}
function ANC(a,b){return !CA(b)?0:1;}
function Xa(){Y.call(this);this.DB=null;}
function AZP(a,b){return CA(b)!=9?0:1;}
function Pe(){Y.call(this);this.CA=null;}
function APD(a,b){return HC(b);}
function Ym(){Y.call(this);this.BA=null;}
function AQy(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Vr(){Y.call(this);this.AI=null;}
function A0E(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HC(b);}return b;}
function Vt(){Y.call(this);this.BR=null;}
function ALR(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HC(b);}return b;}
function OZ(){Y.call(this);this.Cb=null;}
function ARM(a,b){a:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Xq(){Y.call(this);this.DW=null;}
function AWM(a,b){return Kq(b);}
function Xx(){Y.call(this);this.Bh=null;}
function AX6(a,b){return Xy(b);}
function Z3(){Y.call(this);this.DE=null;}
function AZE(a,b){return CA(b)!=3?0:1;}
function Zj(){Y.call(this);this.AK=null;}
function AR5(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HC(b);}return b;}
function Ow(){Y.call(this);this.D7=null;}
function ALL(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HC(b);}return b;}
function LY(){Y.call(this);this.m1=0;}
function A17(a){var b=new LY();AE4(b,a);return b;}
function AE4(a,b){Bz(a);a.m1=b;}
function APE(a,b){return a.bg^(a.m1!=CA(b&65535)?0:1);}
var YU=G(LY);
function AY6(a,b){return a.bg^(!(a.m1>>CA(b&65535)&1)?0:1);}
var ACr=G(0);
function XU(){B.call(this);this.u2=null;}
function AOl(a){var b,c;b=a.u2;c=b.w7;b=b.w8;c.En(b.lp,b.oQ,null);}
var AET=G(0);
function P7(){var a=this;B.call(a);a.AF=null;a.AE=null;a.D$=null;}
function AQK(a){var b,c,d,e;b=a.AF;c=a.AE;b.oN=c;d=Cn(b.l5,c);if(d!==null)ACu(b,d);else if(Cn(b.iT,c)!==null){b=new K;N(b);H(H(b,C(683)),c);$rt_globals.console.info($rt_ustr(M(b)));}else{Ed(b.iT,c,LC(c.jn,Ei(c)));d=new ABl;d.wv=b;d.wr=c;e=new ABm;e.z3=b;e.z4=c;T3(c,d,e);}}
var AHa=G();
function Yz(){B.call(this);this.vl=null;}
function AMN(a){var b,c;b=a.vl;Iv(b);c=b.iV;if(UY(b)>0)II(c.c4.f9);Q5(b);}
function ABl(){var a=this;B.call(a);a.wv=null;a.wr=null;}
function AXi(a,b){var c,d,e,f;c=a.wv;d=a.wr;e=Lb(c.iT,d);b=AHd(b);f=AMn(b.jK,AAS(e));Ed(c.l5,d,f);if(BT(c.oN,d))ACu(c,f);}
function ABm(){var a=this;B.call(a);a.z3=null;a.z4=null;}
function AVZ(a,b){var c,d,e;c=a.z3;d=a.z4;c=Lb(c.iT,d);d=ED();e=new K;N(e);H(H(H(H(e,C(684)),c),C(28)),b);Bp(d,M(e));}
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"ui",4,"js",4,"diff"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bJ",A3I(AOH),"cM",A3H(ALf)],Ra,0,B,[],0,3,0,0,0,VK,0,B,[],3,3,0,0,0,Vn,0,B,[],3,3,0,0,0,ABH,0,B,[VK,Vn],0,3,0,0,0,AHq,0,B,[],4,0,0,0,0,AHf,0,B,[],4,3,0,0,0,GJ,0,B,[],0,3,0,0,0,En,0,GJ,[],0,3,0,0,0,Bt,0,En,[],0,3,0,0,0,AIc,0,Bt,[],0,3,0,0,0,C0,0,B,[],3,3,0,0,0,CI,0,B,[],3,3,0,0,0,J0,0,B,[],3,3,0,0,0,BM,"String",1,B,[C0,CI,J0],0,3,0,FM,["cM",A3H(ALd),"bJ",A3I(Bj),"gj",A3H(Nr),"lM",A3I(AMG)],Fm,0,GJ,[],0,3,0,0,0,H_,0,Fm,[],0,3,0,0,0,AHV,0,H_,[],0,3,0,0,0,Ej,0,B,[C0],1,3,0,0,0,Hu,
0,Ej,[CI],0,3,0,0,["gj",A3H(ASQ),"bJ",A3I(A0o),"lM",A3I(AWm)],GD,0,B,[C0,J0],0,0,0,0,["jw",A3I(My),"cM",A3H(M)],Jq,0,B,[],3,3,0,0,0,K,0,GD,[Jq],0,3,0,0,["o6",A3L(AWh),"ov",A3K(ALY),"cM",A3H(D5),"jw",A3I(AN4),"pl",A3J(AWD)],EU,0,H_,[],0,3,0,0,0,AIQ,0,EU,[],0,3,0,0,0,AHO,0,EU,[],0,3,0,0,0,Z1,0,B,[],3,3,0,0,0,C3,0,B,[],3,3,0,0,0,W_,0,B,[],3,0,0,0,0,JS,0,B,[Z1,C3,W_],1,3,0,0,["cE",A3H(Es)],YN,0,JS,[],0,3,0,0,0,AGY,0,B,[],0,3,0,0,0,AJn,0,B,[],4,3,0,0,0,BQ,0,B,[],3,3,0,0,0,Ca,0,B,[BQ],3,3,0,0,0,Z$,0,B,[Ca],0,3,0,
0,["bf",A3I(A0B)],AE6,0,B,[],0,3,0,0,0,AIo,0,B,[BQ],1,3,0,0,0,ADh,0,B,[],3,3,0,0,0,AJb,0,B,[],3,3,0,0,0,AFC,0,B,[],3,3,0,0,0,LF,0,B,[],0,3,0,0,0,ADN,0,B,[BQ],1,3,0,0,0,Z_,0,B,[Ca],0,3,0,0,["bf",A3I(AJZ)],Z9,0,B,[Ca],0,3,0,0,["bf",A3I(AZF)],Lm,0,B,[],4,3,0,0,0,AFA,0,B,[],4,3,0,0,0,AHI,0,B,[],0,3,0,0,0,AJW,0,B,[],4,3,0,0,0,VL,0,B,[Ca],0,3,0,0,["bf",A3I(AXr)]]);
$rt_metadata([AFN,0,B,[BQ],1,3,0,0,0,AG7,0,B,[],0,3,0,0,0,ABk,0,B,[BQ],3,3,0,0,0,AIe,0,B,[ABk],1,3,0,0,["JG",A3I(AVx),"PQ",A3H(AOF)],AEv,0,B,[BQ],1,3,0,0,0,F2,0,B,[],3,3,0,0,0,RX,0,B,[F2],0,3,0,0,0,BD,0,Bt,[],0,3,0,0,0,AIC,0,B,[],4,3,0,0,0,GR,0,Bt,[],0,3,0,0,0,IZ,0,Bt,[],0,3,0,0,0,Df,0,B,[CI],0,3,0,0,0,Vj,0,B,[BQ],3,3,0,0,0,Zk,0,B,[Vj],3,3,0,0,0,EN,0,B,[BQ],3,3,0,0,0,AG1,0,B,[BQ,Zk,EN],1,3,0,0,["Iv",A3H(AW9),"I3",A3I(AY$),"QD",A3I(AYZ),"Mg",A3I(AUq),"Pa",A3I(AKc),"KU",A3H(ALS),"PO",A3J(AY7),"Jg",A3K(ANR),"JN",
A3H(ATz),"J6",A3H(AXR),"Os",A3I(AZB),"MV",A3H(AOU),"QX",A3I(ANu),"Hf",A3H(APb),"Nw",A3H(ASz),"QQ",A3H(AOf),"EL",A3I(AKL),"Jk",A3H(A0q),"OK",A3J(AVU),"MI",A3J(AOO),"PG",A3J(ARS),"Po",A3H(ASX),"P7",A3H(ANd),"JR",A3I(AL1),"Oc",A3I(AMR),"L_",A3J(AV4),"GU",A3H(AOo),"JF",A3I(ATB),"K7",A3H(AMQ),"Kb",A3H(AQc),"LZ",A3I(AJ4),"He",A3I(ARl),"QL",A3I(ATU),"Gv",A3H(AZt),"Mx",A3J(AT0),"PC",A3I(AXZ),"GL",A3H(AQC),"Lp",A3J(APB),"Fd",A3J(APk),"Nh",A3H(ARg),"JT",A3I(ASd),"Gb",A3K(AXh),"FB",A3H(ALW),"Gf",A3J(AUb),"MO",A3H(ATh),
"IN",A3H(A0l),"Op",A3H(APy),"D_",A3H(ATf),"In",A3J(APC),"K8",A3I(AUz),"Oa",A3I(AMW),"Fu",A3H(AYA)],O0,0,B,[Ca],0,3,0,0,["bf",A3I(AP9)],AH3,0,B,[],4,3,0,0,0,Xp,0,B,[EN],3,3,0,0,0,Q1,0,B,[EN],3,3,0,0,0,YC,0,B,[EN],3,3,0,0,0,Se,0,B,[EN],3,3,0,0,0,ACo,0,B,[EN],3,3,0,0,0,AAM,0,B,[EN,Xp,Q1,YC,Se,ACo],3,3,0,0,0,AHo,0,B,[BQ,AAM],1,3,0,0,["OX",A3J(AXA),"Qa",A3J(AWk),"FE",A3K(ANf),"MD",A3I(AKW),"H0",A3K(AUN)],BR,0,Bt,[],0,3,0,0,0,ACY,0,Bt,[],0,3,0,0,0,H7,0,BD,[],0,3,0,0,0,AHC,0,B,[],0,3,0,0,0,Yf,0,B,[],3,3,0,0,0,W0,0,
B,[Yf],3,3,0,0,0,Zq,0,B,[W0],0,3,0,0,0,BF,0,B,[],3,3,0,0,0,AIl,0,B,[BF],0,3,0,0,0,Bb,0,B,[],3,3,0,0,0,AIm,0,B,[Bb],0,3,0,0,0,YG,0,B,[BQ],3,3,0,0,0,Tp,0,B,[YG],0,3,0,0,["Hg",A3I(AVT)],Tn,0,B,[Bb],0,3,0,0,0,X$,0,B,[BQ],3,3,0,0,0,To,0,B,[X$],0,3,0,0,["Af",A3J(AL_)],AFY,0,B,[BQ],1,3,0,0,0,Cx,0,B,[BQ],3,3,0,0,0,Tm,0,B,[Cx],0,3,0,0,["cs",A3I(AQb)],Zb,0,B,[],0,3,0,0,0,TU,0,B,[],3,3,0,0,["e6",A3I(ASG)],Hn,0,B,[TU],3,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],Fp,0,B,[Hn],1,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8),"et",A3H(Ev),"qb",
A3I(AYO)],Na,0,B,[Hn],3,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],Mf,0,B,[Na],3,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8)]]);
$rt_metadata([Fd,0,Fp,[Mf],1,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8),"yf",A3I(AQq),"b7",A3H(B2),"s_",A3J(APQ),"nK",A3J(AZo),"bJ",A3I(AO6)],LT,0,Fd,[],1,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],Oj,0,B,[Hn],3,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],ACI,0,B,[Oj,Na],3,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],SL,0,LT,[ACI],0,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],La,0,B,[],3,3,0,0,0,D6,0,B,[La],1,3,0,0,0,Eo,0,B,[],3,3,0,0,0,UC,0,B,[La],3,3,0,0,0,OD,0,B,[UC],3,3,0,0,0,Xf,0,D6,[Eo,C0,OD],0,3,0,0,0,Zf,0,B,[BF],0,3,0,0,0,Zg,0,B,[Ca],0,3,
0,0,["bf",A3I(ASW)],ADT,0,B,[],0,3,0,0,0,Np,0,B,[],1,3,0,0,0,Tf,0,Np,[],0,3,0,0,0,Ci,0,B,[C3],1,3,0,0,["cf",A3I(A0m)],XN,0,B,[],0,3,0,0,0,ABM,0,B,[Cx],0,3,0,0,["cs",A3I(AXK)],ABN,0,B,[Cx],0,3,0,0,["cs",A3I(AXV)],ABO,0,B,[Cx],0,3,0,0,["cs",A3I(AOS)],ABP,0,B,[Cx],0,3,0,0,["cs",A3I(AWB)],ABQ,0,B,[Cx],0,3,0,0,["cs",A3I(AWN)],ABR,0,B,[Cx],0,3,0,0,["cs",A3I(AQh)],ABS,0,B,[Cx],0,3,0,0,["cs",A3I(ANe)],ABT,0,B,[Cx],0,3,0,0,["cs",A3I(A0K)],ABU,0,B,[Cx],0,3,0,0,["cs",A3I(AMO)],ABV,0,B,[Cx],0,3,0,0,["cs",A3I(AQX)],UZ,0,
B,[Cx],0,3,0,0,["cs",A3I(A0n)],U0,0,B,[Cx],0,3,0,0,["cs",A3I(AOD)],U1,0,B,[Cx],0,3,0,0,["cs",A3I(AOW)],U2,0,B,[Cx],0,3,0,0,["cs",A3I(AX1)],AAu,0,B,[],3,3,0,0,0,AAF,0,B,[AAu],0,3,0,0,0,AAE,0,B,[Cx],0,3,0,0,["cs",A3I(ANW)],Of,0,B,[],0,3,0,0,0,Kd,0,B,[F2],0,3,0,0,["pr",A3J(Mu)],AF9,0,B,[],0,3,0,0,0,Eq,0,B,[],3,3,0,0,0,Cp,0,B,[Eq],3,3,0,0,0,Cz,0,B,[],3,3,0,0,["bQ",A3I(AWc),"cw",A3J(ARC),"dt",A3J(AKv),"cv",A3K(AYe)],Ez,0,B,[],3,3,0,0,0,Dl,0,B,[Eq],3,3,0,0,0,Fn,0,B,[],3,3,0,0,0,DD,0,B,[],3,3,0,0,0,FF,0,B,[DD],3,3,
0,0,0,Qx,0,B,[C3],0,3,0,0,0,Bg,0,B,[],0,3,0,0,["cM",A3H(AGF),"bJ",A3I(ANN)],ABY,0,B,[],0,3,0,0,0,AFE,0,B,[],0,3,0,0,0]);
$rt_metadata([AHc,0,B,[],3,3,0,0,0,X8,0,B,[],0,3,0,0,0,NE,0,B,[],0,3,0,0,0,C_,0,NE,[],0,3,0,0,0,AJl,0,C_,[],0,3,0,0,0,Fe,0,C_,[],0,3,0,0,0,Yq,0,C_,[],0,3,0,0,0,AEy,0,Fe,[],0,3,0,0,0,Hi,0,Fe,[],0,3,0,0,0,O6,0,Hi,[],0,3,0,0,0,AGo,0,Hi,[],0,3,0,0,0,AHp,0,Fe,[],0,3,0,0,0,AIS,0,C_,[],0,3,0,0,0,ADx,0,C_,[],0,3,0,0,0,YX,0,B,[BQ],3,3,0,0,0,AJU,0,B,[YX],3,3,0,0,0,X7,0,B,[C3],0,3,0,0,0,Qr,0,B,[],0,3,0,0,0,CE,0,B,[CI,C0],1,3,0,0,0,GW,0,CE,[],12,3,0,Jg,0,L2,0,B,[],3,3,0,0,0,R$,0,B,[L2],3,3,0,0,0,AAJ,0,B,[],3,3,0,0,0,GF,
0,B,[R$,AAJ],1,3,0,0,0,Mq,0,GF,[],0,3,0,0,0,AEf,0,Mq,[],0,3,0,0,0,Hs,0,GF,[],1,3,0,0,0,Lk,0,Hs,[],0,3,0,0,["mc",A3K(ANP)],D$,0,CE,[],12,3,0,AZR,0,Mi,0,B,[CI],1,3,0,0,0,L5,0,Mi,[],0,3,0,AEa,0,KY,0,B,[],32,0,0,AG0,0,Xj,0,B,[],0,3,0,0,0,HT,0,CE,[],12,0,0,AEQ,0,Hy,0,CE,[],12,3,0,AES,0,Nc,0,Hs,[],0,3,0,0,["mc",A3K(AMr)],Tq,0,En,[],0,3,0,0,0,AFz,0,BR,[],0,3,0,0,0,L4,0,B,[BQ],3,3,0,0,0,ACD,0,B,[L4],0,3,0,0,["bf",A3I(AQG)],ACE,0,B,[L4],0,3,0,0,["bf",A3I(AK$)],H1,0,B,[],1,3,0,0,0,Y$,0,B,[],3,3,0,0,0,Le,0,H1,[CI,Jq,J0,
Y$],1,3,0,0,0,MF,0,H1,[CI],1,3,0,0,0,Is,0,B,[],0,3,0,G_,0,OH,0,Ci,[],0,3,0,0,["bP",A3H(AOy),"bZ",A3J(ANt)],HB,0,Ci,[],1,3,0,0,["bZ",A3J(AEI)],CL,0,HB,[],1,3,0,0,["bP",A3H(AMl),"bZ",A3J(Io),"cf",A3I(AK3)],GC,0,B,[],3,3,0,0,0]);
$rt_metadata([MM,0,B,[],3,3,0,0,0,FX,0,B,[],3,3,0,0,0,Kz,0,CL,[Cz,GC,MM,FX,Ez,Fn,FF],0,3,0,0,["hD",A3J(AZ4),"cf",A3I(AQt),"bP",A3H(AWK),"gL",A3H(AVP),"z9",A3H(AQP),"uS",A3H(AWG),"tp",A3I(ARk),"mU",A3I(AXu),"hS",A3I(ALK),"bZ",A3J(AN6),"hi",A3I(AKA),"bQ",A3I(AXO),"cv",A3K(AVQ),"cw",A3J(AOR),"dt",A3J(AYg),"dq",A3K(AP6),"cW",A3H(AWg)],AFJ,0,Kz,[],0,3,0,0,["gL",A3H(AO1)],AF7,0,B,[],0,3,0,0,0,AIg,0,B,[BQ],1,3,0,0,0,KF,0,Le,[],1,0,0,0,0,AEt,0,KF,[],0,0,0,0,0,K9,0,B,[],1,3,0,0,0,NJ,0,B,[],0,3,0,0,0,ADn,0,B,[],0,3,0,
0,0,IQ,0,B,[BQ],3,3,0,0,0,VT,0,B,[IQ],0,3,0,0,["bf",A3I(AMy)],VS,0,B,[IQ],0,3,0,0,["bf",A3I(APv)],VQ,0,B,[Ca],0,3,0,0,["bf",A3I(APW)],VP,0,B,[Ca],0,3,0,0,["bf",A3I(AUc)],W,0,B,[],3,3,0,0,0,Sr,0,B,[W],0,3,0,0,["i",A3I(A0r)],Ss,0,B,[W],0,3,0,0,["i",A3I(AWl)],TD,0,B,[BF],0,3,0,0,["bc",A3I(ARz)],TC,0,B,[BF],0,3,0,0,["bc",A3I(AKk)],Tz,0,B,[BF],0,3,0,0,["bc",A3I(AUQ)],Ty,0,B,[BF],0,3,0,0,["bc",A3I(AXs)],TB,0,B,[BF],0,3,0,0,["bc",A3I(AMf)],TA,0,B,[BF],0,3,0,0,["bc",A3I(ASE)],TG,0,B,[BF],0,3,0,0,["bc",A3I(ALX)],TF,
0,B,[BF],0,3,0,0,["bc",A3I(AOq)],TI,0,B,[BF],0,3,0,0,["bc",A3I(AYQ)],TH,0,B,[BF],0,3,0,0,["bc",A3I(AJ7)],ZO,0,B,[BF],0,3,0,0,["bc",A3I(AKf)],ZN,0,B,[BF],0,3,0,0,["bc",A3I(AWq)],ZM,0,B,[BF],0,3,0,0,["bc",A3I(APd)],ZC,0,B,[BF],0,3,0,0,["bc",A3I(AMC)],ZB,0,B,[BF],0,3,0,0,["bc",A3I(ASP)],Zz,0,B,[BF],0,3,0,0,["bc",A3I(AZM)],Zy,0,B,[BF],0,3,0,0,["bc",A3I(AOz)],Zx,0,B,[BF],0,3,0,0,["bc",A3I(AYT)],Zw,0,B,[BF],0,3,0,0,["bc",A3I(AJ0)],Zv,0,B,[BF],0,3,0,0,["bc",A3I(AYF)],ZG,0,B,[BF],0,3,0,0,["bc",A3I(AXW)],ZF,0,B,[BF],
0,3,0,0,["bc",A3I(ALz)],ZE,0,B,[BF],0,3,0,0,["bc",A3I(AVC)],ZD,0,B,[BF],0,3,0,0,["bc",A3I(ANo)],ZI,0,B,[BF],0,3,0,0,["bc",A3I(ANp)],AB3,0,B,[],0,0,0,0,0,H5,0,B,[],0,3,0,0,0,PK,0,H5,[],0,3,0,0,0,AFK,0,B,[],0,3,0,0,0,Od,0,H5,[],0,3,0,0,0,Sy,0,B,[BQ],3,3,0,0,0]);
$rt_metadata([OW,0,B,[Sy],0,3,0,0,["JZ",A3I(AWr)],AAR,0,B,[W],0,3,0,0,["i",A3I(ABF)],AB$,0,MF,[],0,0,0,0,0,CB,0,B,[C3],0,3,0,0,["cE",A3H(AQu),"ho",A3H(AXk),"dr",A3K(HD),"dp",A3I(AJB),"cf",A3I(AT7),"mf",A3I(AOt),"oc",A3I(ARY),"i0",A3J(AYs),"qz",A3H(AR6),"cv",A3K(ANj),"cw",A3J(ALe),"dt",A3J(AO5),"bQ",A3I(ARO),"dq",A3K(AYl)],AD4,0,CB,[],0,3,0,0,["dp",A3I(AFf)],AEw,0,B,[],0,0,0,0,0,FG,0,B,[],3,3,0,0,["uX",A3H(AXl),"te",A3H(AMI)],Ql,0,B,[],3,0,0,0,0,L1,0,B,[FG],3,3,0,0,["uX",A3H(AXl),"te",A3H(AMI)],AD9,0,CB,[FG,
Cz,MM,Ql,L1],0,3,0,0,["dr",A3K(L3),"i0",A3J(APH),"oE",A3J(A0s),"te",A3H(AU7),"uX",A3H(ATk),"z9",A3H(Wc),"uS",A3H(ACP),"tp",A3I(Pj),"mU",A3I(AQk),"qz",A3H(Lx),"cE",A3H(ATF),"cf",A3I(IL),"ps",A3I(AHY),"ho",A3H(AFS),"oM",A3H(AQ8),"dp",A3I(AWQ),"kL",A3H(SS),"jV",A3H(SR),"hc",A3I(AP3),"tN",A3H(APT),"oT",A3H(ASy),"dq",A3K(Ls),"dt",A3J(R9),"cw",A3J(Vu),"cv",A3K(Ox),"bQ",A3I(Wu),"hZ",A3I(AZ$)],AGQ,0,B,[],0,3,0,0,0,SY,0,B,[W],0,3,0,0,["i",A3I(AKI)],SZ,0,B,[W],0,3,0,0,["i",A3I(AZh)],S0,0,B,[Cp],0,3,0,0,["P",A3I(AN_)],HG,
0,B,[Cp],0,3,0,0,["P",A3I(AMK)],SW,0,B,[W],0,3,0,0,["i",A3I(AOT)],SX,0,B,[Dl],0,3,0,0,["P",A3I(AZN)],C9,0,B,[],3,3,0,0,0,ACl,0,B,[Cz,C9],0,3,0,0,["bQ",A3I(AS1),"cv",A3K(ALn),"cw",A3J(ANl),"dt",A3J(AZ6),"gs",A3J(AV_)],SF,0,B,[],0,3,0,0,0,Vk,0,B,[Ez],0,3,0,0,["dq",A3K(AZ2)],ADY,0,B,[],0,3,0,0,0,ACB,0,B,[],0,3,0,0,0,ACq,0,B,[],0,3,0,0,0,Ff,0,B,[C3],0,3,0,0,0,AGk,0,B,[],0,3,0,0,0,ADX,0,B,[C3],0,3,0,0,0,Wp,0,B,[W],0,3,0,0,0,Wo,0,B,[W],0,3,0,0,["i",A3I(AKS)],Wn,0,B,[W],0,3,0,0,["i",A3I(AKh)],AIO,0,B,[],0,3,0,0,0,Wm,
0,B,[Bb],0,3,0,0,["k",A3H(AS3)],Wt,0,B,[Bb],0,3,0,0,["k",A3H(AVa)],Ws,0,B,[Bb],0,3,0,0,["k",A3H(A0Y)],Wr,0,B,[Bb],0,3,0,0,["k",A3H(AOk)],Wq,0,B,[Bb],0,3,0,0,["k",A3H(APX)],Wl,0,B,[Bb],0,3,0,0,["k",A3H(A0t)],TN,0,B,[Bb],0,3,0,0,["k",A3H(AOn)],TO,0,B,[Bb],0,3,0,0,["k",A3H(AXS)],AE1,0,B,[BQ],1,3,0,0,0,M1,0,B,[],4,3,0,AV3,0,ADv,0,B,[],3,3,0,0,0,YZ,0,B,[Cp],0,3,0,0,["P",A3I(AM6)],YY,0,B,[Cp],0,3,0,0,["P",A3I(AUa)],Ll,0,B,[],3,3,0,0,0,AG8,0,Fd,[Eo,C0,Ll],0,3,0,0,["oW",A3I(AV8),"m2",A3I(Bw),"cZ",A3H(AXD),"yf",A3I(BC),
"nK",A3J(YO),"pq",A3I(EB),"qb",A3I(TK),"iI",A3H(Ij),"s_",A3J(AHi),"e6",A3I(Fg)],J1,0,B,[],0,3,0,0,0,Fa,0,B,[],0,3,0,0,0,MZ,0,Fa,[],0,3,0,0,0,ZK,0,Fa,[],0,3,0,0,0]);
$rt_metadata([XV,0,Fa,[],0,3,0,0,0,G5,0,B,[],3,3,0,0,0,RK,0,B,[],3,3,0,0,0,BY,0,B,[],0,3,0,0,["bJ",A3I(ASo)],Ld,0,B,[],0,3,0,0,0,Ig,0,B,[C3],0,3,0,0,["cE",A3H(AE8)],XL,0,B,[],3,0,0,0,0,Oa,0,B,[],3,3,0,0,0,X3,0,B,[Bb],0,3,0,0,["k",A3H(AVH)],X2,0,B,[Bb],0,3,0,0,["k",A3H(ASO)],AJs,0,B,[],0,3,0,0,0,SD,0,B,[],0,3,0,0,0,GM,0,B,[],1,3,0,0,0,YL,0,GM,[],0,3,0,0,["sY",A3I(B_)],LN,0,B,[],3,3,0,0,0,SH,0,B,[LN],3,3,0,0,0,RZ,"JsFileHandle",7,B,[SH],0,3,0,0,["cM",A3H(AV$),"gj",A3H(AKo)],ABA,0,B,[],3,3,0,0,0,AIv,0,B,[ABA],
0,3,0,0,["cM",A3H(AUt)],YT,0,B,[Oa],0,3,0,0,0,G6,0,B,[CI],0,3,0,0,0,Nl,0,B,[],0,3,0,0,0,Dx,0,B,[],0,3,0,0,0,Xu,0,B,[],0,3,0,0,0,K3,0,D6,[Eo,C0],0,3,0,0,0,Ct,0,B,[],0,3,0,0,0,Ni,0,K3,[],0,3,0,0,0,YR,0,B,[],0,3,0,0,0,AJL,0,B,[CI],0,3,0,0,["bJ",A3I(AQY),"lM",A3I(AT6)],TZ,0,B,[F2],0,3,0,0,["pr",A3J(AOp)],Yp,0,B,[],0,3,0,0,["cM",A3H(AKx),"bJ",A3I(ALa)],I9,0,B,[],3,3,0,0,0,GI,0,B,[I9,Eo],0,0,0,0,["bJ",A3I(AUv)],HK,0,GI,[],0,0,0,0,0,Nf,0,K9,[],1,3,0,0,0,P1,0,Nf,[],0,3,0,0,0,IS,0,En,[],0,3,0,0,0,Op,0,B,[IQ],0,3,0,0,
["bf",A3I(ASg)],Or,0,B,[Ca],0,3,0,0,["bf",A3I(ARL)],Oq,0,B,[Ca],0,3,0,0,["bf",A3I(ATu)],IH,0,B,[],0,3,0,0,0,J_,0,CL,[GC,FX],0,3,0,0,["hS",A3I(AVN),"cf",A3I(AZe),"bP",A3H(AM8),"gL",A3H(A0j),"bZ",A3J(AJ6),"hi",A3I(AUO)],AGT,0,Ci,[],0,3,0,0,["cf",A3I(AKm),"bP",A3H(AL0),"bZ",A3J(AN$)],ZZ,0,Ci,[],0,3,0,0,["cf",A3I(APt),"bP",A3H(ATY),"bZ",A3J(AU5)],Ww,0,CL,[Cz,C9],0,3,0,0,["cw",A3J(ARC),"dt",A3J(AKv),"gs",A3J(ANF),"bZ",A3J(AMz),"bP",A3H(AUK),"bQ",A3I(AOa),"cv",A3K(AKT)],ZA,0,CL,[C9],0,3,0,0,["gs",A3J(ALQ),"bZ",A3J(AK8)],VY,
0,HB,[Cz],0,3,0,0,["bQ",A3I(AWc),"cw",A3J(ARC),"dt",A3J(AKv),"cv",A3K(AYe),"bP",A3H(AYP),"cf",A3I(AKg)],RW,0,Ci,[],0,3,0,0,["bP",A3H(AJ5),"bZ",A3J(ASL)],D2,0,Ci,[],0,3,0,0,["bP",A3H(Y9),"bZ",A3J(RS)],Qt,"SelectFileTest",5,D2,[],0,3,0,0,0]);
$rt_metadata([Wd,0,CL,[],0,3,0,0,0,VB,"RenderTexture",5,D2,[],0,3,0,0,["cf",A3I(ANh),"bP",A3H(AUA),"bZ",A3J(A0h)],RU,"ScissorDemo",5,D2,[],0,3,0,0,["bP",A3H(A0N),"bZ",A3J(AM3)],Zp,0,Ci,[],0,3,0,0,["bP",A3H(ARN),"bZ",A3J(AUM),"cf",A3I(AYu)],J4,"ClipboardTest",5,D2,[Cz],0,3,0,0,["bQ",A3I(AWc),"cw",A3J(ARC),"dt",A3J(AKv),"cv",A3K(AN0)],RH,0,Ci,[],0,3,0,0,["bP",A3H(ASn),"bZ",A3J(AXv)],GS,0,Ci,[Cz],1,3,0,0,["bQ",A3I(AWc),"cw",A3J(ARC),"dt",A3J(AKv),"cv",A3K(AYe),"bP",A3H(AD2)],Sm,0,GS,[],0,3,0,0,["cw",A3J(ARC),"dt",
A3J(AKv),"cv",A3K(AYe),"bZ",A3J(AYi),"bQ",A3I(AZb)],Sl,0,GS,[],0,3,0,0,["cw",A3J(ARC),"dt",A3J(AKv),"cv",A3K(AYe),"bQ",A3I(A0u),"bP",A3H(ALN),"bZ",A3J(AKE)],WZ,0,CL,[C9],0,3,0,0,["gs",A3J(AZg)],Ee,"WindowDemo",6,CL,[C9],0,3,[0,0,0],0,["iQ",A3H(AUk),"oG",A3H(AOh),"j$",A3I(W8),"gs",A3J(AYY)],PR,"EditorInViewDemo",5,Ee,[C9,GC,FX],0,3,[0,0,0],0,["cf",A3I(AUg),"iQ",A3H(AK_),"oG",A3H(AS9),"j$",A3I(A0w),"hi",A3I(AQS),"hS",A3I(AQg)],V2,0,B,[Cz],0,0,0,0,["cw",A3J(ARC),"dt",A3J(AKv),"cv",A3K(AYe),"bQ",A3I(AYM)],PY,0,
B,[],3,3,0,0,0,QZ,"ProjectViewDemo",5,Ee,[GC,PY],0,3,[0,0,0],0,["iQ",A3H(APe),"j$",A3I(AO9),"hi",A3I(AWY)],ABn,0,Ci,[Cz],0,3,0,0,["bQ",A3I(AWc),"cw",A3J(ARC),"dt",A3J(AKv),"cv",A3K(AYe),"bZ",A3J(A0p),"bP",A3H(AVG),"cf",A3I(AQE)],XT,"FileViewDemo",6,Ee,[C9],0,3,[0,0,0],0,["iQ",A3H(AW_),"j$",A3I(AYp)],Ol,0,J_,[],0,3,0,0,["gL",A3H(AT1)],O5,"DiffMiddleDemo",8,Ee,[C9],0,3,[0,0,0],0,["iQ",A3H(AU1)],JR,0,B,[],0,3,0,0,0,AEr,0,B,[],0,3,0,0,0,ADu,0,B,[],3,3,0,0,0,AGN,0,B,[],0,3,0,0,0,AEO,0,B,[],3,3,0,0,0,AGu,0,B,[],0,
3,0,0,0,L_,0,B,[I9,C0],0,3,0,0,0,Kl,0,L_,[],0,0,0,0,0,AJC,0,B,[],0,3,0,0,0,XB,0,B,[Cp],0,3,0,0,["P",A3I(ATN)],Xz,0,B,[W],0,3,0,0,["i",A3I(AVd)],XA,0,B,[Dl],0,3,0,0,["P",A3I(AQ_)],AGq,0,J1,[],0,3,0,0,0,SU,0,B,[Cz],0,0,0,0,["bQ",A3I(ATZ),"cv",A3K(AKb),"cw",A3J(ATT),"dt",A3J(ATp)],X1,0,B,[Cp],0,3,0,0,["P",A3I(AZv)],X0,0,B,[Cp],0,3,0,0,["P",A3I(AXX)],XZ,0,B,[Fn],0,3,0,0,["hD",A3J(AWj)],XY,0,B,[Bb],0,3,0,0,["k",A3H(ASZ)],XX,0,B,[Dl],0,3,0,0,["P",A3I(APA)],XW,0,B,[Ez],0,3,0,0,["dq",A3K(AZC)],Ha,0,BY,[],0,3,0,0,0,AFp,
0,B,[],3,3,0,0,0,Vz,0,B,[Cz],0,0,0,0,["bQ",A3I(AWc),"cw",A3J(ARC),"dt",A3J(AKv),"cv",A3K(AMj)],Vw,0,B,[],0,3,0,0,0,AEP,0,B,[],0,3,0,0,0,AHB,0,B,[],0,3,0,0,["bJ",A3I(AYV)],AAp,0,B,[Cp],0,3,0,0,["P",A3I(APc)],AAl,0,B,[Dl],0,3,0,0,["P",A3I(AQW)],AAm,0,B,[Bb],0,3,0,0,["k",A3H(A0R)],AAn,0,B,[Bb],0,3,0,0,["k",A3H(AKO)],Cg,0,B,[],0,3,0,0,0]);
$rt_metadata([Tt,0,B,[Cp],0,3,0,0,["P",A3I(AWb)],Tu,0,B,[Dl],0,3,0,0,["P",A3I(AKw)],AF8,0,B,[],0,3,0,0,0,Oz,0,B,[C9],0,3,0,0,["gs",A3J(APj)],Oy,0,B,[Cp],0,3,0,0,["P",A3I(AXy)],YH,0,B,[],3,3,0,0,0,AGU,0,B,[YH],0,3,0,0,0,VJ,0,B,[Cz],0,0,0,0,["cv",A3K(AYe),"cw",A3J(AS_),"dt",A3J(AKs),"bQ",A3I(AUV)],Y0,0,B,[Ez],0,3,0,0,["dq",A3K(APh)],P6,0,B,[Cp],0,3,0,0,["P",A3I(AO8)],QM,0,B,[Dl],0,3,0,0,["P",A3I(ASp)],QL,0,B,[W],0,3,0,0,["i",A3I(AYz)],AAz,0,B,[Cz],0,0,0,0,["dt",A3J(AKv),"cv",A3K(AYe),"bQ",A3I(AXN),"cw",A3J(ASf)],AEW,
0,B,[],0,3,0,0,0,Da,0,B,[],3,3,0,Fv,0,XC,0,B,[Cz],0,0,0,0,["cv",A3K(AYe),"cw",A3J(ANx),"dt",A3J(ATl),"bQ",A3I(AMo)],U4,0,B,[Ez],0,3,0,0,["dq",A3K(AZz)],AB7,0,B,[Cp],0,3,0,0,["P",A3I(ALH)],AB6,0,B,[Fn],0,3,0,0,["hD",A3J(AWp)],AB5,0,B,[Fn],0,3,0,0,["hD",A3J(ALM)],AB4,0,B,[FF],0,3,0,0,["cW",A3H(AOE)],AB8,0,B,[FF],0,3,0,0,["cW",A3H(AY8)],Rq,0,B,[Cp],0,3,0,0,["P",A3I(ARW)],Yo,0,B,[Cp],0,3,0,0,["P",A3I(ARB)],Yn,0,B,[Dl],0,3,0,0,["P",A3I(AOi)],OX,0,B,[W],0,3,0,0,["i",A3I(AXL)],OY,0,B,[Dl],0,3,0,0,["P",A3I(AZp)],Wx,
0,B,[Dl],0,3,0,0,["P",A3I(AL4)],Qb,0,B,[Cp],0,3,0,0,["P",A3I(AN1)],AFW,0,B,[],3,3,0,0,0,Tx,0,B,[Dl],0,3,0,0,["P",A3I(AP8)],Tw,0,B,[Cp],0,3,0,0,["P",A3I(APz)],Di,0,B,[],3,3,0,AMw,0,Cm,0,CE,[],12,3,0,S3,0,J6,0,B,[],0,3,0,0,0,IJ,0,B,[],0,3,0,0,0,AIr,0,B,[],0,3,0,0,0,DE,0,B,[],3,3,0,AS7,0,W6,0,B,[BQ],3,3,0,0,0,Xi,0,B,[W6],0,3,0,0,["Af",A3J(AVi)],W7,0,B,[BQ],3,3,0,0,0,Xg,0,B,[W7],0,3,0,0,["Af",A3J(AVY)],ADP,0,B,[],0,3,0,0,0,AGS,0,B,[BQ],3,3,0,0,0,T_,0,B,[],0,3,0,0,0,DI,0,B,[],3,3,0,AWV,0,HO,0,B,[],3,3,0,0,0,Pv,0,
B,[HO],0,3,0,0,["vg",A3K(AYo)],Pw,0,B,[HO],0,3,0,0,0,SV,0,B,[W],0,3,0,0,["i",A3I(AXp)]]);
$rt_metadata([Pc,0,B,[W],0,3,0,0,["i",A3I(AMd)],Pb,0,B,[W],0,3,0,0,["i",A3I(AK0)],O_,0,B,[W],0,3,0,0,["i",A3I(AKi)],O9,0,B,[W],0,3,0,0,["i",A3I(A0v)],AGy,0,B,[],0,3,0,0,0,TQ,0,B,[W],0,3,0,0,["i",A3I(AV0)],AA1,0,B,[Cp],0,3,0,0,["P",A3I(ANc)],AJc,0,B,[],0,3,0,0,["bJ",A3I(AUn)],IR,0,B,[],0,3,0,0,0,J2,0,B,[],4,3,0,0,0,AHe,0,B,[],0,3,0,0,0,Cq,0,CE,[],12,3,0,AD0,0,AJH,0,B,[],0,3,0,0,0,AEg,0,B,[BQ],4,3,0,0,0,AJQ,0,B,[],0,3,0,0,0,AC6,0,B,[],3,3,0,0,0,CX,0,B,[BQ],1,3,0,0,0,AIH,0,CX,[],1,3,0,0,0,AI2,0,CX,[],1,3,0,0,0,AHs,
0,CX,[],1,3,0,0,0,AHD,0,CX,[],1,3,0,0,0,AJf,0,CX,[],1,3,0,0,0,Uk,0,B,[Bb],0,3,0,0,["k",A3H(ANT)],O2,0,B,[BF],0,3,0,0,["bc",A3I(ATm)],Yy,0,B,[],0,3,0,0,0,AHb,0,B,[],0,3,0,0,0,Gb,0,B,[],0,3,0,0,0,AFn,0,B,[],0,3,0,0,0,AD$,0,B,[],4,3,0,0,0,SB,0,B,[],0,0,0,0,0,AHg,0,B,[],3,3,0,0,0,So,0,B,[Ez],0,3,0,0,["dq",A3K(ARI)],Sn,0,B,[Fn],0,3,0,0,["hD",A3J(AZ1)],Sq,0,B,[FF],0,3,0,0,["cW",A3H(ANi)],Sp,0,B,[C3],0,3,0,0,0,WE,0,B,[Cz],0,0,0,0,["cw",A3J(ARC),"dt",A3J(AKv),"cv",A3K(AYe),"bQ",A3I(A0U)],AEe,0,B,[BQ],1,3,0,0,0,AFP,
0,B,[C9,FG,C3],0,3,0,0,["uX",A3H(AXl),"te",A3H(AMI),"gs",A3J(A0A),"hZ",A3I(AOu),"cE",A3H(AQd)],U6,0,B,[W],0,3,0,0,["i",A3I(AVO)],W5,0,B,[W],0,3,0,0,["i",A3I(ASr)],AAx,0,B,[W],0,3,0,0,["i",A3I(AW2)],ABs,0,B,[DD],0,3,0,0,["cW",A3H(A0D)],AID,0,B,[],3,3,0,0,0,Lw,0,B,[],3,3,0,0,0,Qq,0,B,[Lw],0,3,0,0,["xQ",A3I(AT8)],OU,0,B,[BF],0,3,0,0,["bc",A3I(AZG)],AFc,0,B,[],0,3,0,0,0,P8,0,B,[C3],0,3,0,0,0,AC9,0,B,[],0,3,0,0,0,Ta,0,B,[],0,3,0,0,0]);
$rt_metadata([LJ,0,B,[],0,3,0,0,0,RI,0,B,[],3,3,0,0,0,AA8,0,B,[W],0,3,0,0,["i",A3I(AT9)],F1,0,IS,[],0,3,0,0,0,ACh,0,Fm,[],0,3,0,0,0,ACk,0,B,[W],0,3,0,0,["i",A3I(ASV)],Tk,0,B,[W],0,3,0,0,["i",A3I(AZ0)],UN,0,B,[Bb],0,3,0,0,["k",A3H(AYG)],ACs,0,Ej,[CI],0,3,0,0,0,Gh,0,B,[],0,0,0,0,0,Jm,0,B,[],4,3,0,0,0,Te,0,B,[],0,3,0,0,0,NY,0,B,[],1,3,0,0,0,ABy,0,B,[CI],0,3,0,0,["bJ",A3I(AKj),"gj",A3H(AQs),"lM",A3I(AX3)],AEo,0,CX,[],1,3,0,0,0,TL,0,B,[Bb],0,3,0,0,["k",A3H(AK7)],ACQ,0,B,[],3,3,0,0,0,HN,0,CB,[],1,3,0,0,["cE",A3H(AXf),
"dp",A3I(AO2),"cf",A3I(ATj),"dr",A3K(ALT),"cv",A3K(AZL),"cw",A3J(ARj),"dt",A3J(AZT),"bQ",A3I(A0c),"dq",A3K(AMs)],Qf,0,HN,[FX],0,3,0,0,["Al",A3H(ANO),"ho",A3H(AVE)],X4,0,B,[W],0,3,0,0,["i",A3I(ATy)],QC,0,B,[W],0,3,0,0,["i",A3I(AXc)],Fc,0,CB,[],0,3,0,0,0,Qy,0,Fc,[FG],0,3,0,0,["uX",A3H(AXl),"te",A3H(AMI),"cE",A3H(AZY),"i0",A3J(AUJ),"dp",A3I(AS$),"oc",A3I(AX2),"mf",A3I(AY9),"bQ",A3I(AOm),"cw",A3J(AMB),"cv",A3K(AQl),"hZ",A3I(AZi)],T7,0,B,[Bb],0,3,0,0,["k",A3H(AR0)],KG,0,CB,[],0,3,0,0,["cE",A3H(AQZ),"dr",A3K(AM0),
"dp",A3I(AYx),"cv",A3K(ARh),"cw",A3J(AQ1),"dt",A3J(APm),"bQ",A3I(AO$),"dq",A3K(AU3),"ho",A3H(AGt)],Py,0,Fc,[],0,3,0,0,["ho",A3H(AR8),"oc",A3I(AX9),"dp",A3I(ASl),"mf",A3I(ATo)],Q8,0,B,[W],0,3,0,0,0,Tr,0,CB,[],0,3,0,0,0,Y2,0,Ej,[CI],0,3,0,0,0,AAi,0,B,[W],0,3,0,0,["i",A3I(AN9)],ACN,0,B,[Bb],0,3,0,0,["k",A3H(AWn)],ACG,0,B,[Bb],0,3,0,0,["k",A3H(AX4)],T0,0,B,[Bb],0,3,0,0,["k",A3H(AYS)],ACL,0,HN,[],0,0,0,0,["Al",A3H(AOj)],AAf,0,B,[],0,3,0,0,0,JK,0,B,[],0,3,0,0,0,N5,0,B,[],3,3,0,0,0,AAo,0,B,[],0,3,0,0,0,Wf,0,B,[Bb],
0,3,0,0,["k",A3H(ASb)],RQ,0,B,[Bb],0,3,0,0,["k",A3H(AOc)],Pl,0,B,[W],0,3,0,0,["i",A3I(AKu)],Pk,0,B,[W],0,3,0,0,["i",A3I(AKK)],KT,0,B,[],0,3,0,0,0,C2,0,Bt,[],0,3,0,0,0,AIR,0,Fm,[],0,3,0,0,0,AJK,0,B,[],0,3,0,0,0,Rn,0,B,[W],0,3,0,0,["i",A3I(AXg)],AAy,0,B,[W],0,3,0,0,["i",A3I(AVS)],Rw,0,B,[W],0,3,0,0,["i",A3I(AUR)],Rv,0,B,[W],0,3,0,0,["i",A3I(AZX)]]);
$rt_metadata([E8,0,B,[],3,3,0,0,0,Wa,0,B,[E8],0,0,0,0,["cA",A3H(B7),"b8",A3H(B8),"oC",A3H(Ys)],K0,0,NY,[],1,3,0,0,0,Sc,0,K0,[],0,3,0,0,0,AB0,0,B,[W],0,3,0,0,0,UG,0,B,[W],0,3,0,0,["i",A3I(ARJ)],PB,0,B,[DD],0,3,0,0,["cW",A3H(AKz)],PA,0,B,[DD],0,3,0,0,["cW",A3H(AMu)],Q2,0,B,[DD],0,3,0,0,["cW",A3H(AZs)],WF,0,B,[DD],0,3,0,0,["cW",A3H(ASM)],Y8,0,B,[Ca],0,3,0,0,["bf",A3I(A0e)],AEs,0,B,[BQ],1,3,0,0,0,ABq,0,B,[Ca],0,3,0,0,["bf",A3I(AMP)],AIq,0,B,[BF],0,3,0,0,0,AEU,0,B,[BF],0,3,0,0,0,V9,0,B,[W],0,3,0,0,["i",A3I(ALF)],V8,
0,B,[W],0,3,0,0,["i",A3I(AQR)],Hb,0,B,[],0,3,0,0,0,Eh,0,Hb,[],0,3,0,0,0,Q4,0,B,[Bb],0,3,0,0,["k",A3H(AWz)],K6,0,Fc,[FG],0,3,0,0,["uX",A3H(AXl),"te",A3H(AMI),"cE",A3H(APS),"i0",A3J(AKQ),"dp",A3I(AWS),"cv",A3K(AZy),"cw",A3J(ALI)],AH4,0,K6,[],0,3,0,0,["uX",A3H(AXl),"te",A3H(AMI)],St,0,B,[Bb],0,3,0,0,0,AFM,0,B,[],0,3,0,0,0,RT,0,D6,[Eo,C0],0,3,0,0,0,TJ,0,B,[],0,3,0,0,0,Ts,0,B,[],0,3,0,0,0,Xt,0,B,[Eq],0,3,0,0,0,R3,0,B,[W],0,3,0,0,["i",A3I(AQT)],XD,0,Ej,[CI],0,3,0,0,0,JN,0,B,[],4,3,0,0,0,S4,0,B,[Bb],0,3,0,0,["k",A3H(AKy)],S5,
0,B,[Bb],0,3,0,0,["k",A3H(AMq)],S6,0,B,[Bb],0,3,0,0,["k",A3H(AZZ)],S7,0,B,[Bb],0,3,0,0,["k",A3H(AOA)],S8,0,B,[Bb],0,3,0,0,["k",A3H(AQB)],Oo,0,B,[Ca],0,3,0,0,["bf",A3I(A0X)],UJ,0,B,[],3,3,0,A1V,0,O3,0,CB,[],0,3,0,0,["dp",A3I(AKp)],AFV,0,KG,[],0,0,0,0,["i0",A3J(ANg)],AAG,0,B,[],0,3,0,0,0,SN,0,B,[],3,3,0,ANr,0,QG,0,B,[F2],0,3,0,0,["pr",A3J(AR_)],AJE,0,GM,[],0,0,0,0,["sY",A3I(A0J)],UX,0,B,[Bb],0,3,0,0,["k",A3H(AVw)],Vo,0,B,[L1],0,0,0,0,["uX",A3H(AXl),"te",A3H(AMI),"kL",A3H(ARA),"jV",A3H(AX7),"hc",A3I(ASq),"tN",
A3H(AWf),"oT",A3H(APF),"oE",A3J(AVo),"ps",A3I(AVf),"oM",A3H(KD)],Qh,0,B,[FX],0,3,0,0,["hS",A3I(AYw)],Qg,0,B,[DD],0,3,0,0,["cW",A3H(AUF)],D8,0,Bt,[],0,3,0,0,0,We,0,B,[],0,3,0,0,0]);
$rt_metadata([ABb,0,B,[W],0,3,0,0,["i",A3I(AK6)],AFU,0,B,[],0,3,0,0,0,R8,0,B,[],0,0,0,0,0,ADy,0,B,[],3,3,0,0,0,Re,0,B,[Bb],0,3,0,0,["k",A3H(AVL)],Xv,0,B,[],1,3,0,0,0,Yi,0,B,[L2],3,3,0,0,0,OS,0,B,[Yi],3,3,0,0,0,H2,0,B,[OS],1,3,0,0,0,Y_,0,H2,[],0,3,0,0,0,QA,0,B,[],3,3,0,0,0,On,0,B,[W],0,3,0,0,0,ACn,0,B,[W],0,3,0,0,["i",A3I(AKR)],AEA,0,B,[],3,3,0,0,0,Jk,0,GI,[],0,0,0,0,0,H0,0,Bt,[],0,3,0,0,0,AA4,0,B,[W],0,3,0,0,["i",A3I(AQ9)],ACw,0,B,[Ca],0,3,0,0,["bf",A3I(AYN)],ACv,0,B,[Ca],0,3,0,0,["bf",A3I(AUD)],AB2,0,B,[Ca],
0,3,0,0,["bf",A3I(AVr)],AB1,0,B,[Ca],0,3,0,0,["bf",A3I(AVX)],AIW,0,B,[],0,3,0,0,0,Qp,0,B,[W],0,3,0,0,["i",A3I(ATD)],ADe,0,B,[W],0,3,0,0,0,Sx,0,B,[Cx],0,3,0,0,["cs",A3I(ATa)],AAH,0,B,[HO],0,3,0,0,["vg",A3K(AOg)],Ut,0,B,[BF],0,3,0,0,0,Fz,0,B,[],0,3,0,0,0,AG6,0,B,[],0,3,0,0,0,ADF,0,B,[],0,3,0,0,0,AJS,0,B,[],0,3,0,0,0,ACi,0,B,[Bb],0,3,0,0,["k",A3H(ATr)],ACj,0,B,[Bb],0,3,0,0,["k",A3H(AVK)],FL,0,B,[],0,3,0,0,0,UV,0,B,[W],0,3,0,0,["i",A3I(AMV)],Nh,0,FL,[],0,3,0,0,0,KV,0,FL,[],0,3,0,0,0,TW,0,B,[W],0,3,0,0,["i",A3I(ATt)],P$,
0,B,[],0,3,0,0,0,PF,0,B,[W],0,3,0,0,["i",A3I(AWT)],PJ,0,B,[Hn],3,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],Fi,0,Fp,[PJ],1,3,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],MX,0,Fi,[],1,0,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],Tl,0,MX,[],0,0,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],NC,0,D6,[],1,0,0,0,0,Ti,0,NC,[],0,0,0,0,0,NR,0,Fd,[Ll],1,0,0,0,["e6",A3I(ASG),"iI",A3H(AUy),"pq",A3I(AOP),"oW",A3I(ANX)],Tj,0,NR,[],0,0,0,0,["e6",A3I(ASG),"m2",A3I(AOV),"cZ",A3H(AOb),"b7",A3H(AL8),"et",A3H(AKC)],Tg,0,B,[E8],0,0,0,0,["cA",A3H(AKn),"b8",A3H(AXH),"oC",
A3H(AQJ)],Xs,0,B,[E8],3,3,0,0,0]);
$rt_metadata([Th,0,B,[Xs],0,0,0,0,0,Vd,0,B,[F2],0,3,0,0,0,Qz,0,B,[Eq],0,3,0,0,["P",A3I(A0Z)],J8,0,D8,[],0,3,0,0,0,Jp,0,Bt,[],0,3,0,0,0,NL,0,Bt,[],0,3,0,0,0,Xm,0,B,[W],0,3,0,0,["i",A3I(AXI)],AGz,0,B,[W],0,3,0,0,0,Qo,0,B,[QA],0,3,0,0,0,Zn,0,B,[Bb],0,3,0,0,["k",A3H(ATs)],SA,0,B,[Bb],0,3,0,0,["k",A3H(AU6)],ABK,0,B,[Bb],0,3,0,0,["k",A3H(AR9)],GX,0,B,[],0,3,0,0,0,PS,0,Fi,[],0,0,0,0,["oW",A3I(AV8)],SQ,0,Fi,[],0,0,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],PT,0,Fp,[],0,0,0,0,["e6",A3I(ASG),"oW",A3I(AV8)],Vg,0,B,[W],0,3,0,0,
["i",A3I(AUX)],S9,0,B,[W],0,3,0,0,["i",A3I(AWA)],Kb,0,B,[],0,3,0,0,["bJ",A3I(AIA)],LV,0,Kb,[],0,3,0,0,["bJ",A3I(ATO)],EY,0,B,[],0,3,0,0,["bJ",A3I(AG9)],Hw,0,EY,[],0,3,0,0,0,JV,0,EY,[],0,3,0,0,["bJ",A3I(AZ3)],I6,0,EY,[],0,3,0,0,["bJ",A3I(ATe)],AD8,0,H2,[],0,3,0,0,0,Ri,0,B,[Bb],0,3,0,0,["k",A3H(ANq)],Rj,0,B,[Bb],0,3,0,0,["k",A3H(ALs)],Rg,0,B,[Bb],0,3,0,0,["k",A3H(AKG)],Rh,0,B,[Bb],0,3,0,0,["k",A3H(ANk)],QP,0,B,[Bb],0,3,0,0,["k",A3H(AYf)],QO,0,B,[Bb],0,3,0,0,["k",A3H(AXo)],QN,0,B,[Bb],0,3,0,0,["k",A3H(ASA)],PL,
0,B,[Bb],0,3,0,0,["k",A3H(APp)],Qn,0,B,[],3,3,0,0,0,XP,0,B,[Bb],0,3,0,0,["k",A3H(ALj)],Sh,0,B,[G5],0,3,0,0,["pw",A3J(AMU)],Vx,0,B,[],0,3,0,0,0,QT,0,B,[],0,3,0,0,0,Rb,0,B,[W],0,3,0,0,["i",A3I(APZ)],Wk,0,B,[W],0,3,0,0,["i",A3I(AUj)],TP,0,B,[Lw],0,3,0,0,["xQ",A3I(M2)],ABW,0,BD,[],0,3,0,0,0,OL,0,B,[Bb],0,3,0,0,["k",A3H(AV7)],OM,0,B,[Bb],0,3,0,0,["k",A3H(AZw)],OK,0,B,[Bb],0,3,0,0,["k",A3H(ASF)],Ub,0,B,[Bb],0,3,0,0,["k",A3H(AOs)],Ua,0,B,[Bb],0,3,0,0,["k",A3H(AYv)],Xb,0,B,[DD],0,3,0,0,["cW",A3H(ALU)],Zc,0,B,[Bb],0,
3,0,0,["k",A3H(ANy)],Zd,0,B,[Bb],0,3,0,0,["k",A3H(AZj)]]);
$rt_metadata([UT,0,B,[Bb],0,3,0,0,["k",A3H(AJ9)],UO,0,B,[Bb],0,3,0,0,["k",A3H(ANz)],UP,0,B,[Bb],0,3,0,0,["k",A3H(AR4)],UQ,0,B,[Bb],0,3,0,0,["k",A3H(AWI)],UR,0,B,[Bb],0,3,0,0,["k",A3H(AVz)],Ok,0,B,[DD],0,3,0,0,["cW",A3H(ARm)],S$,0,B,[G5],0,3,0,0,["pw",A3J(AQp)],WU,0,B,[LN],3,3,0,0,0,ABc,0,B,[WU],0,0,0,0,["cM",A3H(AMv)],AGg,0,B,[CI],0,3,0,0,["bJ",A3I(APr)],VI,0,B,[W],0,3,0,0,["i",A3I(AWy)],U7,0,B,[W],0,3,0,0,["i",A3I(A0W)],SG,0,B,[HO],0,3,0,0,0,Ft,0,B,[],0,0,0,0,0,Zu,0,Ft,[E8],0,0,0,0,0,SJ,0,Ft,[E8],0,0,0,0,0,YA,
0,Ft,[E8],0,0,0,0,0,ADw,0,B,[W],0,0,0,0,0,Yx,0,B,[C0],4,3,0,0,0,Y6,0,B,[W],0,3,0,0,["i",A3I(AON)],Y5,0,B,[W],0,3,0,0,["i",A3I(AX5)],WJ,0,B,[W],0,3,0,0,["i",A3I(AUr)],HM,0,B,[],3,3,0,0,0,Si,0,B,[HM],0,3,0,0,["lg",A3K(AWU)],Sj,0,B,[HM],0,3,0,0,["lg",A3K(AVD)],IF,0,B,[C0,CI],0,3,0,0,0,Kv,0,B,[],3,3,0,0,0,Rd,0,B,[Kv],0,3,0,0,0,WY,0,B,[Kv],3,3,0,0,0,AEB,0,B,[WY],0,3,0,0,0,RA,0,B,[HM],0,3,0,0,["lg",A3K(AXm)],Rz,0,B,[Eq],0,3,0,0,["P",A3I(ARV)],Ry,0,B,[Eq],0,3,0,0,["P",A3I(AQe)],RC,0,B,[HM],0,3,0,0,["lg",A3K(AW1)],Gs,
0,CE,[],12,0,0,RO,0,ACW,0,B,[W],0,3,0,0,["i",A3I(AU9)],BO,0,B,[],1,0,0,0,["cn",A3K(Ir),"cy",A3L(Iz),"ir",A3H(ATX),"S",A3I(ARs),"b0",A3I(AZA),"gg",A3H(A0f),"eG",A3H(Ka)],VO,0,B,[Bb],0,3,0,0,["k",A3H(AM9)],U8,0,B,[W],0,3,0,0,["i",A3I(AXq)],U9,0,B,[W],0,3,0,0,["i",A3I(AMF)],WI,0,B,[W],0,3,0,0,["i",A3I(AOY)],ACV,0,Eh,[],0,3,0,0,0,Z2,0,B,[],32,0,0,A2Z,0,Q7,0,B,[W],0,3,0,0,["i",A3I(AMJ)],RR,0,B,[W],0,3,0,0,["i",A3I(AQi)],CV,0,BO,[],0,0,0,N6,["c",A3K(AKP),"H",A3I(AK2)],GT,0,B,[],0,0,0,0,0,JW,0,BR,[],0,3,0,0,0,O7,0,
B,[Bb],0,3,0,0,["k",A3H(AS8)],Rc,0,CV,[],0,0,0,0,["c",A3K(ATb),"H",A3I(AYC)]]);
$rt_metadata([ACK,0,CV,[],0,0,0,0,["c",A3K(AUh)],P_,0,CV,[],0,0,0,0,["c",A3K(AK9)],RV,0,CV,[],0,0,0,0,["c",A3K(ATd),"H",A3I(AXJ)],FT,0,CV,[],0,0,0,0,["c",A3K(ARF)],B$,0,BO,[],1,0,0,0,["c",A3K(A0G),"b9",A3H(AZd),"H",A3I(ANG)],AFQ,0,B$,[],0,0,0,0,["by",A3J(AYU),"cn",A3K(AU2),"cy",A3L(AUd),"H",A3I(ATc)],B3,0,BO,[],0,0,0,0,["c",A3K(AMX),"S",A3I(APK),"b0",A3I(AWu),"H",A3I(AP_),"eG",A3H(ALr)],J7,0,B3,[],0,0,0,0,["c",A3K(APx),"H",A3I(AYh)],D0,0,J7,[],0,0,0,0,["c",A3K(AUB),"S",A3I(AX_)],Vs,0,D0,[],0,0,0,0,["c",A3K(API),
"H",A3I(ARx)],ABC,0,D0,[],0,0,0,0,["c",A3K(AKZ),"H",A3I(AZf)],YB,0,D0,[],0,0,0,0,["c",A3K(ALp),"H",A3I(A0T)],Sd,0,D0,[],0,0,0,0,["c",A3K(AST),"H",A3I(AYr)],HH,0,B3,[],0,0,0,0,["c",A3K(AKl),"cn",A3K(AOw),"cy",A3L(AYE),"b0",A3I(AWs),"gg",A3H(AXG),"eG",A3H(AR1)],GV,0,B,[],1,0,0,0,0,Y,0,GV,[],1,0,0,Pz,["dL",A3H(ATI),"fB",A3H(ATq),"ln",A3H(AY_),"hW",A3H(A0a)],ADK,0,Y,[],0,0,0,0,["o",A3I(C5),"dL",A3H(CZ),"fB",A3H(AUY),"ln",A3H(ARi),"cM",A3H(AW4),"hW",A3H(AMA)],Mh,0,Bt,[],0,3,0,0,0,Eb,0,BO,[],1,0,0,0,["b0",A3I(AQH),
"H",A3I(AZI),"eG",A3H(AOL)],C6,0,Eb,[],0,0,0,0,["c",A3K(ASU)],FD,0,C6,[],0,0,0,0,["c",A3K(ATx)],CW,0,Eb,[],0,0,0,0,["c",A3K(AS5)],EX,0,C6,[],0,0,0,0,["c",A3K(AWH),"S",A3I(ASC)],T5,0,C6,[],0,0,0,0,["c",A3K(A0C),"cn",A3K(AO7)],Bf,0,B,[],1,0,0,0,0,Dn,0,BR,[],0,3,0,0,0,VC,0,GV,[Eo],0,0,0,0,["cM",A3H(AW8)],WD,0,BO,[],0,0,0,0,["c",A3K(ANY),"H",A3I(AXE)],ACe,0,B,[Eo,C0],0,3,0,0,0,Os,0,B3,[],0,0,0,0,0,Qw,0,B3,[],0,0,0,0,["c",A3K(AKN),"S",A3I(AXw),"H",A3I(ALb),"b0",A3I(AK1)],DU,0,B3,[],0,0,0,0,["c",A3K(AUT),"o",A3I(AMM),
"b0",A3I(AKJ),"S",A3I(AY5),"H",A3I(AMp)],Me,0,DU,[],0,0,0,0,["o",A3I(ANH)],ADE,0,B$,[],0,0,0,0,["by",A3J(AWe)],Ew,0,B$,[],0,0,0,0,["by",A3J(Vi),"b0",A3I(APM)],W1,0,B3,[],0,0,0,0,["S",A3I(AOC),"c",A3K(AJ8),"b0",A3I(ATQ),"H",A3I(ARn)],EA,0,B$,[],0,0,0,0,["b9",A3H(AV6),"by",A3J(AM7),"cn",A3K(AMb),"cy",A3L(ANU),"b0",A3I(ARf)],AGb,0,B$,[],0,0,0,0,["by",A3J(ASI)],AC3,0,B$,[],0,0,0,0,["by",A3J(AKe)],FI,0,B3,[],0,0,0,0,["S",A3I(A0i),"c",A3K(APw),"b0",A3I(ANZ),"H",A3I(AYa)],Uz,0,FI,[],0,0,0,0,0,Z8,0,FI,[],0,0,0,0,0,Vf,
0,CW,[],0,0,0,0,["c",A3K(AUm)],XE,0,CW,[],0,0,0,0,["c",A3K(AWW)],Go,0,CW,[],0,0,0,0,["c",A3K(AY3),"S",A3I(AZS)],PX,0,Go,[],0,0,0,0,["c",A3K(ANQ),"S",A3I(AW$)],F9,0,CW,[],0,0,0,0,["c",A3K(A0Q)],OF,0,F9,[],0,0,0,0,["c",A3K(ANm)],Q9,0,CW,[],0,0,0,0,["c",A3K(AR7)],Yd,0,Go,[],0,0,0,0,["c",A3K(ALc)]]);
$rt_metadata([ST,0,F9,[],0,0,0,0,["c",A3K(ATi)],Q$,0,Eb,[],0,0,0,0,["c",A3K(A0H),"cn",A3K(AQ4)],WK,0,Eb,[],0,0,0,0,["c",A3K(APN),"cn",A3K(AJ$)],Fo,0,B,[],1,0,0,0,0,ACZ,0,C6,[],0,0,0,0,["c",A3K(AKB)],T1,0,EX,[],0,0,0,0,["c",A3K(AOX)],Xd,0,FD,[],0,0,0,0,["c",A3K(AYH)],Yc,0,C6,[],0,0,0,0,["c",A3K(APJ)],AAj,0,EX,[],0,0,0,0,["c",A3K(AKH)],QW,0,FD,[],0,0,0,0,["c",A3K(AYW)],KZ,0,BO,[],4,0,0,0,["c",A3K(AWt),"H",A3I(AVW)],ADZ,0,BO,[],0,0,0,0,["c",A3K(ATG),"H",A3I(ATP)],WG,0,BO,[],0,0,0,0,["c",A3K(ANJ),"H",A3I(ASv)],Us,
0,BO,[],4,0,0,0,["c",A3K(AXY),"H",A3I(AUe)],ABZ,0,BO,[],0,0,0,0,["c",A3K(AXt),"H",A3I(ASH)],VU,0,BO,[],0,0,0,0,["c",A3K(AT_),"H",A3I(AMT)],AF1,0,B3,[],0,0,0,0,["c",A3K(AR$),"S",A3I(ATS),"ir",A3H(AXe),"H",A3I(ATR)],ADJ,0,B3,[],4,0,0,0,["c",A3K(AXn),"S",A3I(AYy),"ir",A3H(AJX),"H",A3I(ASk)],AJp,0,BO,[],4,0,0,0,["c",A3K(AN2),"H",A3I(AVg)],AIx,0,BO,[],0,0,0,0,["c",A3K(APs),"H",A3I(AU_)],AGK,0,BO,[],0,0,0,0,["c",A3K(AVR),"H",A3I(ALy)],H3,0,B3,[],0,0,0,0,["c",A3K(AKD),"S",A3I(AX8),"H",A3I(AQr)],AJu,0,H3,[],0,0,0,0,
["c",A3K(ALC),"cn",A3K(ARv),"cy",A3L(AKr),"b0",A3I(AWR)],AHW,0,H3,[],0,0,0,0,["c",A3K(AOr)],Ph,0,GD,[Jq],0,3,0,0,["o6",A3L(AMD),"ov",A3K(ATJ),"jw",A3I(AT4),"pl",A3J(AZc)],YP,0,B$,[],0,0,0,0,["by",A3J(ALO),"cn",A3K(ATE),"cy",A3L(AVk),"b0",A3I(ANa)],AC2,0,B$,[],0,0,0,0,["by",A3J(AOx)],OI,0,B$,[],0,0,0,0,["by",A3J(AYI)],G8,0,B,[],4,0,0,AQz,0,Vm,0,B$,[],0,0,0,0,["by",A3J(AQN)],Nm,0,B3,[],0,0,0,0,["S",A3I(AXC),"c",A3K(AUf),"cn",A3K(AM_),"cy",A3L(AUE),"b0",A3I(AKq),"H",A3I(ARa)],Nt,0,B3,[],0,0,0,0,["S",A3I(AT3),"c",
A3K(AKa),"cn",A3K(AXM),"cy",A3L(AQI),"b0",A3I(ALP),"H",A3I(AXT)],D7,0,B$,[],0,0,0,0,["by",A3J(AYj),"cn",A3K(AW5),"cy",A3L(ALh),"b0",A3I(AYd)],AA$,0,Fo,[],0,0,0,0,["ik",A3I(ALm),"yA",A3J(AQo)],AA_,0,Fo,[],0,0,0,0,["ik",A3I(AYX),"yA",A3J(ARX)],AFo,0,B,[],0,0,0,0,0,ADc,0,B,[],0,0,0,0,0,Nk,0,Bf,[],0,0,0,0,["F",A3H(AH2)],MJ,0,Bf,[],0,0,0,0,["F",A3H(AIt)],AFh,0,Bf,[],0,0,0,0,["F",A3H(AYB)],AFD,0,Bf,[],0,0,0,0,["F",A3H(ARc)],AFF,0,Bf,[],0,0,0,0,["F",A3H(AMg)],Ng,0,Bf,[],0,0,0,0,["F",A3H(ADM)],Lp,0,Ng,[],0,0,0,0,["F",
A3H(AEb)],AGB,0,Bf,[],0,0,0,0,["F",A3H(AVB)],N_,0,Lp,[],0,0,0,0,["F",A3H(AGI)],AIa,0,N_,[],0,0,0,0,["F",A3H(AOM)],AEE,0,Bf,[],0,0,0,0,["F",A3H(AUu)],ADU,0,Bf,[],0,0,0,0,["F",A3H(AOJ)],AHr,0,Bf,[],0,0,0,0,["F",A3H(ARZ)]]);
$rt_metadata([AJe,0,Bf,[],0,0,0,0,["F",A3H(AXb)],AGE,0,Bf,[],0,0,0,0,["F",A3H(ASN)],AIZ,0,Bf,[],0,0,0,0,["F",A3H(ANs)],AE$,0,Bf,[],0,0,0,0,["F",A3H(AQv)],AFR,0,Bf,[],0,0,0,0,["F",A3H(AUs)],ADo,0,Bf,[],0,0,0,0,["F",A3H(ALZ)],AGR,0,Bf,[],0,0,0,0,["F",A3H(AZ8)],AI5,0,Bf,[],0,0,0,0,["F",A3H(ASJ)],AFy,0,Bf,[],0,0,0,0,["F",A3H(AN3)],AHL,0,Bf,[],0,0,0,0,["F",A3H(AL5)],AEG,0,Bf,[],0,0,0,0,["F",A3H(AVm)],AGm,0,Bf,[],0,0,0,0,["F",A3H(AWo)],AI$,0,Bf,[],0,0,0,0,["F",A3H(ARo)],AEl,0,Bf,[],0,0,0,0,["F",A3H(AP5)],AD5,0,Bf,
[],0,0,0,0,["F",A3H(AO_)],AGC,0,Bf,[],0,0,0,0,["F",A3H(AYt)],Kj,0,Bf,[],0,0,0,0,["F",A3H(AEF)],AJm,0,Kj,[],0,0,0,0,["F",A3H(AO3)],AIf,0,Nk,[],0,0,0,0,["F",A3H(ATC)],AD3,0,MJ,[],0,0,0,0,["F",A3H(AM4)],AHu,0,Bf,[],0,0,0,0,["F",A3H(AOe)],AHF,0,Bf,[],0,0,0,0,["F",A3H(ARP)],AH6,0,Bf,[],0,0,0,0,["F",A3H(AU$)],AIb,0,Bf,[],0,0,0,0,["F",A3H(AJ1)],AHx,0,B,[],4,0,0,0,0,ADC,0,B,[],4,3,0,0,0,VX,0,B,[],0,3,0,0,0,AFt,0,B,[],0,3,0,0,0,AHT,0,B,[],4,3,0,0,0,L8,0,Bt,[],0,3,0,0,0,ABE,0,B,[W],0,3,0,0,["i",A3I(AJ3)],ABD,0,B,[W],
0,3,0,0,["i",A3I(ARp)],AHl,0,B,[Eq],0,3,0,0,0,RF,0,B,[W],0,3,0,0,["i",A3I(AVe)],Q0,0,B,[W],0,3,0,0,["i",A3I(ALu)],AA6,0,B,[Eq],0,0,0,0,["P",A3I(AMk)],AAt,0,B,[W],0,3,0,0,0,AAv,0,B,[W],0,3,0,0,["i",A3I(AZV)],Ko,0,B,[],3,3,0,0,0,O8,0,B,[Ko],0,0,0,0,["sQ",A3I(AX$),"vR",A3I(AVI),"uW",A3H(AQO)],AAO,0,B,[W],0,3,0,0,0,ZX,0,B,[W],0,3,0,0,0,V6,0,B,[Bb],0,3,0,0,["k",A3H(ATK)],T4,0,Y,[],0,0,0,0,["o",A3I(AMm)],T2,0,Y,[],0,0,0,0,["o",A3I(AS4)],Pr,0,Y,[],0,0,0,0,["o",A3I(AN8),"cM",A3H(AVp)],WQ,0,Y,[],0,0,0,0,["o",A3I(AYm)],WO,
0,Y,[],0,0,0,0,["o",A3I(AQM)],WP,0,Y,[],0,0,0,0,["o",A3I(AWE)],WT,0,Y,[],0,0,0,0,["o",A3I(AUL)]]);
$rt_metadata([WV,0,Y,[],0,0,0,0,["o",A3I(AJY)],WR,0,Y,[],0,0,0,0,["o",A3I(AMZ)],WS,0,Y,[],0,0,0,0,["o",A3I(AOB)],WW,0,Y,[],0,0,0,0,["o",A3I(ARy)],WX,0,Y,[],0,0,0,0,["o",A3I(AUo)],Pq,0,Y,[],0,0,0,0,["o",A3I(A00)],PN,0,Y,[],0,0,0,0,["o",A3I(AM2)],Po,0,Y,[],0,0,0,0,["o",A3I(ALG)],Pp,0,Y,[],0,0,0,0,["o",A3I(AVc)],Pu,0,Y,[],0,0,0,0,["o",A3I(ANL)],Pn,0,Y,[],0,0,0,0,["o",A3I(AZm)],Ps,0,Y,[],0,0,0,0,["o",A3I(ATM)],Pt,0,Y,[],0,0,0,0,["o",A3I(APY)],LP,0,B,[],3,3,0,0,0,Zi,0,B,[LP],4,3,0,0,0,AIh,0,B,[G5],0,3,0,0,0,C4,0,
B,[],3,3,0,AFH,0,Cw,0,CE,[],12,3,0,AE5,0,DR,0,B,[],3,3,0,ATg,0,ABu,0,B,[],0,3,0,0,0,OB,0,HH,[],0,0,0,0,["cn",A3K(AMH),"cy",A3L(A0P),"gg",A3H(ALw)],Qs,0,Bt,[],0,3,0,0,0,Uw,0,Bt,[],0,3,0,0,0,S_,0,F1,[],0,3,0,0,0,Qm,0,F1,[],0,3,0,0,0,Uu,0,B,[Ca],0,3,0,0,["bf",A3I(AVl)],Uv,0,B,[Ca],0,3,0,0,["bf",A3I(ATL)],AAZ,0,B,[],0,3,0,0,0,ADk,0,B,[],0,3,0,0,0,Xr,0,B,[W],0,3,0,0,["i",A3I(AWi)],ADB,0,B,[],3,3,0,0,0,ABh,0,B,[Ca],0,3,0,0,["bf",A3I(AP7)],ABi,0,B,[Ca],0,3,0,0,["bf",A3I(APg)],ABj,0,B,[Ca],0,0,0,0,["bf",A3I(AQa)],WA,
0,B,[Bb],0,3,0,0,0,ZJ,0,B,[Ko],0,0,0,0,["sQ",A3I(AZx),"vR",A3I(ARw),"uW",A3H(AZQ)],AA3,0,B,[LP],0,0,0,0,0,SI,0,B,[Ca],0,3,0,0,["bf",A3I(AWx)],ABd,0,B,[Bb],0,3,0,0,["k",A3H(AXQ)],ZL,0,Y,[],0,0,0,0,["o",A3I(ARE)],Vv,0,Y,[],0,0,0,0,["o",A3I(ATA)],Rl,0,Y,[],0,0,0,0,["o",A3I(AKF)],Rk,0,Y,[],0,0,0,0,["o",A3I(AU8)],Uh,0,Y,[],0,0,0,0,["o",A3I(ANC)],Xa,0,Y,[],0,0,0,0,["o",A3I(AZP)],Pe,0,Y,[],0,0,0,0,["o",A3I(APD)],Ym,0,Y,[],0,0,0,0,["o",A3I(AQy)],Vr,0,Y,[],0,0,0,0,["o",A3I(A0E)],Vt,0,Y,[],0,0,0,0,["o",A3I(ALR)],OZ,0,
Y,[],0,0,0,0,["o",A3I(ARM)]]);
$rt_metadata([Xq,0,Y,[],0,0,0,0,["o",A3I(AWM)],Xx,0,Y,[],0,0,0,0,["o",A3I(AX6)],Z3,0,Y,[],0,0,0,0,["o",A3I(AZE)],Zj,0,Y,[],0,0,0,0,["o",A3I(AR5)],Ow,0,Y,[],0,0,0,0,["o",A3I(ALL)],LY,0,Y,[],0,0,0,0,["o",A3I(APE)],YU,0,LY,[],0,0,0,0,["o",A3I(AY6)],ACr,0,B,[BQ],3,3,0,0,0,XU,0,B,[ACr],0,3,0,0,["GR",A3H(AOl)],AET,0,B,[BQ],3,3,0,0,0,P7,0,B,[Bb],0,3,0,0,["k",A3H(AQK)],AHa,0,B,[],0,0,0,0,0,Yz,0,B,[Bb],0,3,0,0,["k",A3H(AMN)],ABl,0,B,[W],0,3,0,0,["i",A3I(AXi)],ABm,0,B,[W],0,3,0,0,["i",A3I(AVZ)]]);
function $rt_array(cls,data){this.UI=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser","#wasm","#diffDemo","","[]","Patter is null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","navigator.clipboard is undefined","Illegal argument javaObject instanceof ","keydown","keyup","mousemove",
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
"BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#F7F8FA","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","ClassL.java","ClassR.java","selectScene ",
"CodiconDemo","RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","TwoWindowsDemo","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas",
"#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","","Segoe UI","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","text","java","cpp","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...",
"font pow >","Development >","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","deleteDiffModel","ns-resize","ew-resize",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js","js",".activity","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile",
"CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","File is too large: "," name: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40",
"#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","Open project...","Project root","FileTreeView model size = ","Folder ","ClassFile ","#616161",
"#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu",
"Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","Open project ...","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ",
"  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","nwse-resize","nesw-resize","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed",
"/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Expected "," ints to write, but "," written","open file ","Int","Iter","VP","Resolve","Rep","No definition or usages","fileHandle = "," - project view"," ints to read, but "," read","fib(",") result = ",") time = ","Unknown scope type: ","/Resolved in ","readClipboardText error: ","Unexpected type: ","Unexpected ref node type: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ",
"Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B",
"IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue",
"KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A",
"SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths",
"CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials",
"Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","  sub dir: ","  file: ","complete","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","file = ","file.content.length = ","request in progress ","Error fetching file "]);
BM.prototype.toString=function(){return $rt_ustr(this);};
BM.prototype.valueOf=BM.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ALf(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CN=Long_add;var Jv=Long_sub;var Cf=Long_mul;var AFr=Long_div;var AS0=Long_rem;var A1m=Long_or;var C$=Long_and;var A7z=Long_xor;var HE=Long_shl;var A2H=Long_shr;var FZ=Long_shru;var A7A=Long_compare;var It=Long_eq;var A7B=Long_ne;var A1j=Long_lt;var AL9=Long_le;var A7C=Long_gt;var A1i=Long_ge;var A7D=Long_not;var A2S=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A2T);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Z$.prototype;c.f=c.bf;c=Z_.prototype;c.f=c.bf;c=Z9.prototype;c.f=c.bf;c=VL.prototype;c.f=c.bf;c=AIe.prototype;c.get=c.JG;Object.defineProperty(c,"length",{get:c.PQ});c=AG1.prototype;c.createEntityReference=c.Mg;c.getElementById=c.Os;c.createTextNode=c.Oc;c.hasChildNodes=c.Nh;c.querySelectorAll=c.LZ;c.removeChild=c.PC;c.cloneNode=c.EL;c.createComment=c.QL;c.insertBefore=c.Mx;c.getElementsByTagNameNS=c.PO;c.hasAttributes=c.Hf;c.normalize=c.Kb;c.hasChildNodesJS=c.J6;c.getElementsByTagName=c.JF;c.appendChild
=c.K8;c.createAttributeNS=c.OK;c.dispatchEvent=c.JR;c.replaceChild=c.Fd;c.createElementNS=c.Gf;c.createCDATASection=c.I3;c.querySelector=c.He;c.createElement=c.Pa;c.isSupported=c.PG;c.importNode=c.MI;c.removeEventListener=c.Gb;c.createAttribute=c.JT;c.createDocumentFragment=c.D_;c.createProcessingInstruction=c.L_;c.addEventListener=c.In;Object.defineProperty(c,"nodeName",{get:c.K7});Object.defineProperty(c,"documentElement",{get:c.GU});Object.defineProperty(c,"childNodes",{get:c.IN});Object.defineProperty(c,
"prefix",{get:c.MO,set:c.QX});Object.defineProperty(c,"implementation",{get:c.Jk});Object.defineProperty(c,"textContent",{get:c.QQ,set:c.Oa});Object.defineProperty(c,"parentNode",{get:c.Op});Object.defineProperty(c,"nextSibling",{get:c.GL});Object.defineProperty(c,"nodeType",{get:c.Po});Object.defineProperty(c,"doctype",{get:c.Nw});Object.defineProperty(c,"localName",{get:c.P7});Object.defineProperty(c,"nodeValue",{get:c.Gv,set:c.QD});Object.defineProperty(c,"firstChild",{get:c.JN});Object.defineProperty(c,
"lastChild",{get:c.Iv});Object.defineProperty(c,"previousSibling",{get:c.KU});Object.defineProperty(c,"namespaceURI",{get:c.Fu});Object.defineProperty(c,"attributes",{get:c.MV});Object.defineProperty(c,"ownerDocument",{get:c.FB});c=O0.prototype;c.f=c.bf;c=AHo.prototype;c.removeEventListener=c.FE;c.dispatchEvent=c.MD;c.addEventListener=c.H0;c=Tp.prototype;c.onAnimationFrame=c.Hg;c=To.prototype;c.f=c.Af;c=Tm.prototype;c.handleEvent=c.cs;c=Zg.prototype;c.f=c.bf;c=ABM.prototype;c.handleEvent=c.cs;c=ABN.prototype;c.handleEvent
=c.cs;c=ABO.prototype;c.handleEvent=c.cs;c=ABP.prototype;c.handleEvent=c.cs;c=ABQ.prototype;c.handleEvent=c.cs;c=ABR.prototype;c.handleEvent=c.cs;c=ABS.prototype;c.handleEvent=c.cs;c=ABT.prototype;c.handleEvent=c.cs;c=ABU.prototype;c.handleEvent=c.cs;c=ABV.prototype;c.handleEvent=c.cs;c=UZ.prototype;c.handleEvent=c.cs;c=U0.prototype;c.handleEvent=c.cs;c=U1.prototype;c.handleEvent=c.cs;c=U2.prototype;c.handleEvent=c.cs;c=AAE.prototype;c.handleEvent=c.cs;c=ACD.prototype;c.f=c.bf;c=ACE.prototype;c.f=c.bf;c=VT.prototype;c.f
=c.bf;c=VS.prototype;c.f=c.bf;c=VQ.prototype;c.f=c.bf;c=VP.prototype;c.f=c.bf;c=OW.prototype;c.accept=c.JZ;c=Op.prototype;c.f=c.bf;c=Or.prototype;c.f=c.bf;c=Oq.prototype;c.f=c.bf;c=Xi.prototype;c.f=c.Af;c=Xg.prototype;c.f=c.Af;c=Y8.prototype;c.f=c.bf;c=ABq.prototype;c.f=c.bf;c=Oo.prototype;c.f=c.bf;c=ACw.prototype;c.f=c.bf;c=ACv.prototype;c.f=c.bf;c=AB2.prototype;c.f=c.bf;c=AB1.prototype;c.f=c.bf;c=Sx.prototype;c.handleEvent=c.cs;c=Uu.prototype;c.f=c.bf;c=Uv.prototype;c.f=c.bf;c=ABh.prototype;c.f=c.bf;c=ABi.prototype;c.f
=c.bf;c=ABj.prototype;c.f=c.bf;c=SI.prototype;c.f=c.bf;c=XU.prototype;c.onTimer=c.GR;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);