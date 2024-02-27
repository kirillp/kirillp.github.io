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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hl=f;}
function $rt_cls(cls){return SC(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Hk(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b$.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ARl(t);}
function $rt_throwableCause(t){return AZn(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A4h());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A4i(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A4j());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BL=$rt_compare;var A4k=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var I6=$rt_isInstance;var A4l=$rt_nativeThread;var A4m=$rt_suspending;var A4n=$rt_resuming;var A4o=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var Bb=$rt_imul;var ER=$rt_wrapException;var A4p=$rt_checkBounds;var A4q=$rt_checkUpperBound;var A4r=$rt_checkLowerBound;var A4s=$rt_wrapFunction0;var A4t=$rt_wrapFunction1;var A4u=$rt_wrapFunction2;var A4v=$rt_wrapFunction3;var A4w=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AIp=$rt_createCharArrayFromData;var A2n=$rt_createByteArrayFromData;var A2X=$rt_createShortArrayFromData;var DU=$rt_createIntArrayFromData;var A4x=$rt_createBooleanArrayFromData;var A4y=$rt_createFloatArrayFromData;var A4z=$rt_createDoubleArrayFromData;var AHJ=$rt_createLongArrayFromData;var A4g=$rt_createBooleanArray;var DJ=$rt_createByteArray;var A4A=$rt_createShortArray;var B4=$rt_createCharArray;var BN=$rt_createIntArray;var A4B=$rt_createLongArray;var AKG=$rt_createFloatArray;var A4C
=$rt_createDoubleArray;var BL=$rt_compare;var A4D=$rt_castToClass;var A4E=$rt_castToInterface;var A4F=Long_toNumber;var Bp=Long_fromInt;var A4G=Long_fromNumber;var D=Long_create;var FB=Long_ZERO;var A4H=Long_hi;var GH=Long_lo;
function B(){this.$id$=0;}
function BJ(a){return SC(a.constructor);}
function APn(a,b){return a!==b?0:1;}
function ALT(a){var b,c,d,e,f,g,h,i,j;b=Ms(a);if(!b)c=C(0);else{d=(((32-WE(b)|0)+4|0)-1|0)/4|0;e=B4(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=If((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Hk(e);}j=new K;M(j);H(H(j,C(1)),c);return L(j);}
function Ms(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AOI(a){var b,c,d;if(!I6(a,Et)&&a.constructor.$meta.item===null){b=new TO;X(b);N(b);}b=AKK(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Rw(){var a=this;B.call(a);a.AP=0;a.pW=null;}
function A3F(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AJL();AHo();AE8();AFO();AG6();AH9();AFf();ADB();AEM();AGy();AHn();AJk();AFz();AIB();AIb();AGc();AIi();AJ1();AFh();AFu();AHP();AEO();AJr();AI1();AJp();AHA();AGY();AGu();c=(ADO()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))XD(C(2),C(3));else{d=new Rw;BD(d);e=new AAz;e.zi=d;f=new V8;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<3){i=new $rt_globals.Worker(c);j=new Pd;j.xv=i;j.xw=g;j.xx
=3;j.xy=e;j.xs=f;k=Bv(j,"f");i.onmessage=k;h=h+1|0;}l=I(LS,[E5(C(4),C(5),300),E5(C(6),C(7),300),E5(C(8),C(5),400),E5(C(9),C(7),400),E5(C(10),C(5),600),E5(C(11),C(7),600),E5(C(12),C(5),700),E5(C(13),C(7),700)]);m=Q(LS,1);m.data[0]=ARP(C(14),Fn(C(15),C(16)),C(5),400);b=(LP(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.tn;f=c.sG;i=new K;M(i);BM(H(H(i,C(17)),f),41);i=L(i);f=c.sD;o=c.rz;c=AV4($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1
|0;}e=$rt_globals.Promise.all(g);BD(d);c=new AAA;c.z5=d;g=new AAy;e.then(Bv(c,"f"),Bv(g,"f"));}}
function AFU(b){var c,d,e,f,g,h,i,j;c=new ZM;d=new TN;d.xh=c;c.s9=d;d=new TL;d.AV=c;c.n3=d;e=new TM;e.yI=c;c.ux=new $rt_globals.ResizeObserver(Bv(e,"f"));d=new TK;d.q$=c;c.wb=d;c.k$=1;d=new Zx;d.l6=new S6;e=new XB;e.CL=null;e.lY=A4I;d.rU=e;BD(e);f=new ZB;f.yW=e;d.AR=f;d.Ac=b;g=b.length;h=0;while(h<g){e=b[h];i=new ZC;i.yk=d;i.yj=h;f=Bv(i,"f");e.onmessage=f;e=b[h];f=AIA();e.postMessage(f);h=h+1|0;}d.il=0;d.oU=BN(g);c.At=d;c.qc=(Er()).getElementById("canvasDiv");d=ADO();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.el=d;c.qc.appendChild(d);b=c.el;d=AQn(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)XD(C(2),C(18));else{c.pq=A3r(c.el,c.n3);b=new TD;j=c.n3;AJK(b,e,new AA5,1,2.25,0.625);b.CJ=new AA4;b.Ch=j;c.hF=b;AQ6(c.ux,c.el,ATN());d=$rt_globals.window;j=c.wb;d.addEventListener("resize",Bv(j,"handleEvent"));j=new Ot;b=c.hF;d=c.pq.co;j.O=b;j.p=d;j.bV=c;d=$rt_str($rt_globals.window.location.hash);if(Bi(C(19),d)){b=new OV;Eh(b,j);d=$rt_globals.fetch("test.wasm");j
=new We;d=d.then(Bv(j,"f"));j=new Wd;e=d.then(Bv(j,"f"));j=new Wb;d=new Wa;e.then(Bv(j,"f"),Bv(d,"f"));}else b=Bi(C(20),d)?A3m(j):(A0b(J(d)<=0?C(21):Dt(d,1))).ba(j);c.gn=b;Sq(c);}c.el.focus();}
var V7=G(0);
var VK=G(0);
function AB6(){var a=this;B.call(a);a.mF=null;a.uB=null;a.dY=null;}
function SC(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AB6;c.dY=b;d=c;b.classObject=d;}return c;}
function JH(a){if(a.mF===null)a.mF=AF_(a.dY);return a.mF;}
function Xu(a){var b,c,d,e;b=a.uB;if(b===null){if(AKf(a.dY)===null?0:1){b=Xu(HP(a));c=new K;M(c);H(H(c,b),C(22));b=L(c);}else{b=a.dY.$meta.enclosingClass;if((b===null?null:SC(b))!==null){b=$rt_str(a.dY.$meta.simpleName);if(b===null)b=C(21);}else{b=AF_(a.dY);d=Rj(b,36);if(d==(-1)){e=Rj(b,46);if(e!=(-1))b=Dt(b,e+1|0);}else{b=Dt(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(21);}}}a.uB=b;}return b;}
function II(a){return a.dY.$meta.primitive?1:0;}
function HP(a){return SC(AKf(a.dY));}
var AHT=G();
function Bv(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function E9(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AHH=G();
function AKK(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AJe(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AJe(d[e],c))return 1;e=e+1|0;}return 0;}
function AKf(b){return b.$meta.item;}
function AF_(b){return $rt_str(b.$meta.name);}
function GP(){var a=this;B.call(a);a.iG=null;a.m1=null;a.kn=0;a.kI=0;}
function A4J(){var a=new GP();X(a);return a;}
function A4K(a){var b=new GP();Bm(b,a);return b;}
function X(a){a.kn=1;a.kI=1;}
function Bm(a,b){a.kn=1;a.kI=1;a.iG=b;}
function AVW(a){return a;}
function ARl(a){return a.iG;}
function AZn(a){var b;b=a.m1;if(b===a)b=null;return b;}
var Es=G(GP);
function A4L(){var a=new Es();AFH(a);return a;}
function AFH(a){X(a);}
var Bu=G(Es);
function A4i(a){var b=new Bu();A0I(b,a);return b;}
function A0I(a,b){Bm(a,b);}
var AIE=G(Bu);
var C2=G(0);
var CJ=G(0);
var J$=G(0);
function BK(){var a=this;B.call(a);a.b$=null;a.jO=0;}
var A4M=null;var A4N=null;var A4O=null;function E8(){E8=Bn(BK);ASe();}
function ANI(){var a=new BK();ADz(a);return a;}
function Hk(a){var b=new BK();Jk(b,a);return b;}
function Ey(a,b,c){var d=new BK();Om(d,a,b,c);return d;}
function ADz(a){E8();a.b$=A4M;}
function Jk(a,b){E8();Om(a,b,0,b.data.length);}
function Om(a,b,c,d){var e;E8();e=B4(d);a.b$=e;Dd(b,c,e,0,d);}
function Mk(b){var c;E8();c=ANI();c.b$=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b$.data;if(b<c.length)return c[b];}d=new Ic;X(d);N(d);}
function J(a){return a.b$.data.length;}
function Gh(a){return a.b$.data.length?0:1;}
function Qw(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dd(a.b$,b,d,e,c);return;}}g=new BG;X(g);N(g);}
function Oa(a,b){var c,d,e;if(a===b)return 0;c=Be(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AA0(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Nj(a,b){if(a===b)return 1;return AA0(a,b,0);}
function DA(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function JO(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.b$.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JI(b);h=I7(b);while(true){f=a.b$.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Hp(a,b,c){var d,e,f,g,h;d=Be(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b$.data[d]==e)break;d=d+(-1)|0;}return d;}f=JI(b);g=I7(b);while(true){if(d<1)return (-1);h=a.b$.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Rj(a,b){return Hp(a,b,J(a)-1|0);}
function X1(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AYo(a,b){return X1(a,b,0);}
function Qt(a,b,c){var d,e;d=Be(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AER(a,b){return Qt(a,b,J(a));}
function Cs(a,b,c){var d,e;d=BL(b,c);if(d>0){e=new BG;X(e);N(e);}if(!d){E8();return A4N;}if(!b&&c==J(a))return a;return Ey(a.b$,b,c-b|0);}
function Dt(a,b){return Cs(a,b,J(a));}
function QC(a,b,c){return Cs(a,b,c);}
function Fn(a,b){var c,d,e,f,g,h;if(Gh(b))return a;if(Gh(a))return b;c=B4(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Mk(c);}
function ABo(a,b,c){var d,e,f,g;d=new K;M(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BM(d,P(a,f));}f=f+1|0;}H(d,Dt(a,f));return L(d);}
function Zg(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cs(a,b,c+1|0);}
function ALR(a){return a;}
function Gj(a){var b,c,d,e,f;b=a.b$.data;c=B4(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Ck(b){E8();return b===null?C(23):b.cK();}
function Zf(b){var c,d;E8();c=new BK;d=B4(1);d.data[0]=b;Jk(c,d);return c;}
function Dj(b){var c;E8();c=new K;M(c);return L(U(c,b));}
function Bi(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BK))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function NG(a){var b,c,d,e;a:{if(!a.jO){b=a.b$.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.jO=(31*a.jO|0)+e|0;d=d+1|0;}}}return a.jO;}
function L6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GX;Bm(b,C(24));N(b);}A4P=1;d=new YT;d.mt=Q(CW,10);d.hM=(-1);d.fA=(-1);d.bz=(-1);e=new GZ;e.fg=1;e.bM=b;e.bf=B4(J(b)+2|0);Dd(Gj(b),0,e.bf,0,J(b));f=e.bf.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.yF=g;e.gX=0;FK(e);FK(e);d.l=e;d.dQ=0;d.m8=U_(d,(-1),0,null);if(!DC(d.l)){b=new J6;h=d.l;MC(b,C(21),h.bM,h.dk);N(b);}if(d.qD)d.m8.eI();b=BI();h=new ZE;h.j5=(-1);h.oI=(-1);h.BA=d;h.z7=d.m8;h.lo=a;h.j5=0;g=J(a);h.oI=g;e=new ABp;i=h.j5;j=d.hM;k=d.fA+1|0;l=d.bz
+1|0;e.iK=(-1);m=j+1|0;e.rg=m;e.d2=BN(m*2|0);f=BN(l);e.kC=f;Jo(f,(-1));if(k>0)e.o3=BN(k);Jo(e.d2,(-1));AC8(e,a,i,g);h.cE=e;e.gj=1;n=0;m=0;if(!J(a)){f=Q(BK,1);f.data[0]=C(21);}else{while(true){l=J(h.lo);if(!ADI(h))l=h.oI;e=h.cE;if(e.eG>=0&&AEI(e)==1){e=h.cE;e.eG=Mr(e);if(Mr(h.cE)==AFN(h.cE)){e=h.cE;e.eG=e.eG+1|0;}g=h.cE.eG;g=g<=l&&OA(h,g)?1:0;}else g=OA(h,h.j5);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BC(b,QC(a,m,AGN(h)));m=AH$(h);n=g;}a:{BC(b,QC(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Bx(b,
g)))break a;EH(b,g);}}if(g<0)g=0;f=Gf(b,Q(BK,g));}return f;}
function ANk(a,b){return Oa(a,b);}
function ASe(){A4M=B4(0);A4N=ANI();A4O=new Sg;}
var Fs=G(GP);
var Ig=G(Fs);
var AIl=G(Ig);
var Eo=G();
function Hz(){Eo.call(this);this.bp=0;}
var A4Q=null;var A4R=null;function AZ9(a){var b=new Hz();AEl(b,a);return b;}
function AEl(a,b){a.bp=b;}
function NJ(b){return (Wo(A3$(20),b,10)).cK();}
function KA(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Ds;Bm(b,C(25));N(b);}d=J(b);if(0==d){b=new Ds;Bm(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Ds;X(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=Xy(P(b,f));if(i<0){j=new Ds;k=Cs(b,0,d);b=new K;M(b);H(H(b,C(27)),k);Bm(j,L(b));N(j);}if(i>=c){j=new Ds;l=Cs(b,0,d);b=new K;M(b);H(H(U(H(b,C(28)),c),C(29)),l);Bm(j,L(b));N(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Ds;k=Cs(b,0,d);b=new K;M(b);H(H(b,C(30)),k);Bm(j,L(b));N(j);}b=new Ds;j=new K;M(j);U(H(j,C(31)),c);Bm(b,L(j));N(b);}
function CU(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A4R===null){A4R=Q(Hz,256);c=0;while(true){d=A4R.data;if(c>=d.length)break a;d[c]=AZ9(c-128|0);c=c+1|0;}}}return A4R.data[b+128|0];}return AZ9(b);}
function ATB(a){return a.bp;}
function A1c(a,b){if(a===b)return 1;return b instanceof Hz&&b.bp==a.bp?1:0;}
function WE(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function IX(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AW_(a,b){b=b;return BL(a.bp,b.bp);}
function AJL(){A4Q=F($rt_intcls());}
function GJ(){var a=this;B.call(a);a.C=null;a.K=0;}
function A4S(){var a=new GJ();M(a);return a;}
function A3$(a){var b=new GJ();GC(b,a);return b;}
function M(a){GC(a,16);}
function GC(a,b){a.C=B4(b);}
function Wo(a,b,c){return AIv(a,a.K,b,c);}
function AIv(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cp(a,b,b+1|0);else{Cp(a,b,b+2|0);f=a.C.data;g=b+1|0;f[b]=45;b=g;}a.C.data[b]=If(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cp(a,b,b+i|0);if(e)e=b;else{f=a.C.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.C.data;b=e+1|0;f[e]=If($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AI8(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Cp(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cp(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cp(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cp(a,b,b+8|0);d=b;}else{Cp(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A4T;AI2(c,f);d=f.mN;g=f.mB;h=f.qN;i=1;j=1;if(h)j=2;k=9;l=ARQ(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cp(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.C.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.C.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.C.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.C.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AH2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Cp(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cp(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cp(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cp(a,b,b+8|0);d=b;}else{Cp(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A4U;AE2(c,f);g=f.m9;h=f.mm;i=f.qz;j=1;k=1;if(i)k=2;l=18;m=AQB(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cp(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.C.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.C.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AMN(p,FB))d=0;else{d=GH(AFV(g,p));g=ATL(g,p);}e=a.C.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AFV(p,Bp(10));q=q+1|0;}if(h){e=a.C.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ARQ(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AQB(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=A4V.data;g=f.length-1|0;while(g>=0){if(IC(ATL(b,Ch(c,f[g])),FB)){d=d|e;c=Ch(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BM(a,b){return a.pG(a.K,b);}
function ACX(a,b,c){Cp(a,b,b+1|0);a.C.data[b]=c;return a;}
function MN(a,b){var c,d;c=a.C.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.C=Kw(a.C,d);}
function L(a){return Ey(a.C,0,a.K);}
function ACL(a,b,c,d){return a.pp(a.K,b,c,d);}
function V1(a,b,c,d,e){var f,g,h,i;Cp(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.C.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function JR(a,b){return a.oO(b,0,b.data.length);}
function Cp(a,b,c){var d,e,f,g;d=a.K;e=d-b|0;a.jJ((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.C.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.K=a.K+(c-b|0)|0;}
var JA=G(0);
var K=G(GJ);
function LX(){var a=new K();A06(a);return a;}
function A06(a){M(a);}
function H(a,b){var c;c=a.K;if(b===null)b=C(23);Mn(a,c,b);return a;}
function BU(a,b){Mn(a,a.K,b);return a;}
function U(a,b){Wo(a,b,10);return a;}
function HE(a,b){var c,d,e,f,g,h,i,j;c=a.K;d=1;if(A17(b,FB)){d=0;b=A3E(b);}a:{if(DF(b,Bp(10))<0){if(d)Cp(a,c,c+1|0);else{Cp(a,c,c+2|0);e=a.C.data;f=c+1|0;e[c]=45;c=f;}a.C.data[c]=If(GH(b),10);}else{g=1;h=Bp(1);i=Da(Bp(-1),Bp(10));b:{while(true){j=Ch(h,Bp(10));if(DF(j,b)>0){j=h;break b;}g=g+1|0;if(DF(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cp(a,c,c+g|0);if(d)f=c;else{e=a.C.data;f=c+1|0;e[c]=45;}while(true){if(IC(j,FB))break a;e=a.C.data;c=f+1|0;e[f]=If(GH((Da(b,j))),10);b=AHq(b,j);j=Da(j,Bp(10));f=c;}}}return a;}
function EC(a,b){AI8(a,a.K,b);return a;}
function ADv(a,b){BM(a,b);return a;}
function Jn(a,b){Mn(a,a.K,!b?C(32):C(33));return a;}
function AGC(a,b,c){var d,e,f,g,h,i;d=BL(b,c);if(d<=0){e=a.K;if(b<=e){if(d){f=e-c|0;a.K=e-(c-b|0)|0;g=0;while(g<f){h=a.C.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Ic;X(i);N(i);}
function Uf(a,b){var c,d,e,f;if(b>=0){c=a.K;if(b<c){c=c-1|0;a.K=c;while(b<c){d=a.C.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ic;X(f);N(f);}
function AW6(a,b,c,d,e){V1(a,b,c,d,e);return a;}
function AMC(a,b,c,d){ACL(a,b,c,d);return a;}
function AHB(a){return a.K;}
function D_(a){return L(a);}
function AOH(a,b){MN(a,b);}
function AXq(a,b,c){ACX(a,b,c);return a;}
function Mn(a,b,c){var d,e,f;if(b>=0&&b<=a.K){a:{if(c===null)c=C(23);else if(Gh(c))break a;MN(a,a.K+J(c)|0);d=a.K-1|0;while(d>=b){a.C.data[d+J(c)|0]=a.C.data[d];d=d+(-1)|0;}a.K=a.K+J(c)|0;d=0;while(d<J(c)){e=a.C.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Ic;X(c);N(c);}
var EZ=G(Ig);
var AJh=G(EZ);
function A4W(a){var b=new AJh();ALW(b,a);return b;}
function ALW(a,b){Bm(a,b);}
var AIf=G(EZ);
function A4X(a){var b=new AIf();AL7(b,a);return b;}
function AL7(a,b){Bm(a,b);}
var AAp=G(0);
var C5=G(0);
function BY(b,c){if(b!==null)b.cC();return c;}
var Xv=G(0);
function J2(){var a=this;B.call(a);a.i4=0;a.nu=0;a.mZ=0;}
var A4Y=0;function Ew(a){A4Y=A4Y-1|0;}
function Hq(a,b,c){Kn(a,AHZ(b,c,400,0));}
function K4(a,b){return Lg(a,b,0.875);}
function Lg(a,b,c){return El(a,b)+c|0;}
function Y8(){var a=this;J2.call(a);a.iV=null;a.c$=null;a.v1=null;}
function EL(a){var b,c,d;b=a.c$;c=a.nu;d=a.mZ;b.clearRect(0.0,0.0,c,d);}
function Zo(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c$;d="center";c.textAlign=d;break a;case 2:c=a.c$;d="right";c.textAlign=d;break a;default:break a;}d=a.c$;c="left";d.textAlign=c;}}
function Cm(a,b){Kn(a,b.qq);}
function Kn(a,b){var c;if(a.v1!==b){c=a.c$;a.v1=b;c.font=b;}}
function AHZ(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BW(a,b,c,d){var e,f,g;e=a.c$;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function El(a,b){var c;c=$rt_ustr(b);return a.c$.measureText(c).width;}
function JV(a,b,c,d){var e,f;e=a.c$;f=$rt_ustr(Hk(AIp([35,HR(b/16|0),HR(b%16|0),HR(c/16|0),HR(c%16|0),HR(d/16|0),HR(d%16|0)])));e.fillStyle=f;}
function AUv(){return {alpha:false};}
var AHp=G();
var AJR=G();
function BS(b,c){if(b===c)return 1;return b!==null?b.bH(c):c!==null?0:1;}
function AEV(b){return b!==null?b.gp():0;}
function BD(b){if(b!==null)return b;b=new GX;Bm(b,C(21));N(b);}
var BQ=G(0);
function M$(b){return b;}
var Cd=G(0);
function AAz(){B.call(this);this.zi=null;}
function A1p(a,b){var c;c=a.zi;c.pW=b;if(c.AP)AFU(b);}
var AFy=G();
function KU(b,c){return b.data[c];}
var AIQ=G();
var ADJ=G(0);
function E5(b,c,d){return ARP(C(34),Fn(C(15),b),c,d);}
var AJF=G(0);
var AF5=G(0);
function LP(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dg(b,f+g|0);Dd(c,0,d,f,g);return d;}
function Lk(b,c,d){Dd(b,c,d,0,d.data.length);return d;}
function YZ(b,c,d){var e;if(c>0)Dd(b,0,d,0,c);e=d.data.length;if(c<e)Dd(b,c+1|0,d,c,e-c|0);return d;}
function AEN(b,c,d,e){var f;if(c>0)Dd(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dd(b,d,e,c,f-d|0);}return e;}
function Dy(b){var c;c=new Pw;c.jZ=b;return c;}
function AEh(b,c){if(b.data.length!=c)b=Dg(b,c);return b;}
function AF4(b,c,d){var e;e=c.data.length;if(e==d)c=Dg(c,e*2|0);c.data[d]=b;return c;}
function ABj(b,c,d){var e;e=c.data.length;if(e==d)c=N8(c,e*2|0);c.data[d]=b;return c;}
function N7(b){return Kw(b,b.data.length);}
function LS(){var a=this;B.call(a);a.tn=null;a.sG=null;a.sD=null;a.rz=0;}
function ARP(a,b,c,d){var e=new LS();ARf(e,a,b,c,d);return e;}
function ARf(a,b,c,d,e){a.tn=b;a.sG=c;a.sD=d;a.rz=e;}
var AEc=G();
function AV4(b,c){return {style:b,weight:c};}
function AAA(){B.call(this);this.z5=null;}
function AKt(a,b){var c,d,e;c=a.z5;d=0;while(d<b.length){e=b[d];(Er()).fonts.add(e);d=d+1|0;}c.AP=1;b=c.pW;if(b!==null)AFU(b);}
var AAy=G();
function A0q(a,b){$rt_globals.console.info("font load error "+b);}
var Lx=G();
var A4Z=null;var A40=null;function Bt(){if(A4Z===null)A4Z=APM(A41,0);return A4Z;}
function Ek(){if(A40===null)A40=APM(A42,0);return A40;}
function A2q(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=NP(b)&&(e+f|0)<=NP(d)){a:{b:{if(b!==d){g=HP(BJ(b));h=HP(BJ(d));if(g!==null&&h!==null){if(g===h)break b;if(!II(g)&&!II(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dY;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AJe(n.constructor,o)?1:0)){Nn(b,c,d,e,j);b=new I8;X(b);N(b);}j=j+1|0;k=m;}Nn(b,c,d,e,f);return;}if(!II(g))break a;if(II(h))break b;else break a;}b=new I8;X(b);N(b);}}Nn(b,c,
d,e,f);return;}b=new I8;X(b);N(b);}b=new BG;X(b);N(b);}d=new GX;Bm(d,C(35));N(d);}
function Dd(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=NP(b)&&(e+f|0)<=NP(d)){Nn(b,c,d,e,f);return;}b=new BG;X(b);N(b);}
function Nn(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EY(){return Long_fromNumber(new Date().getTime());}
function AFQ(){return A4G($rt_globals.performance.now()*1000000.0);}
var AF3=G();
var AH_=G();
function XD(b,c){var d,e,f;d=(Er()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Er()).getElementById($rt_ustr(b)).appendChild(d);}
function ADO(){return (Er()).createElement("canvas");}
function AGH(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AQn(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AKq=G();
var V8=G();
function AYg(a,b){var c;c=new Bu;Bm(c,$rt_str(b.message));N(c);}
var AGe=G();
function HY(b){return $rt_str(b);}
var AHx=G();
function Kw(b,c){var d,e,f,g;b=b.data;d=B4(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function N8(b,c){var d,e,f,g;b=b.data;d=DJ(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ja(b,c){var d,e,f,g;b=b.data;d=BN(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dg(b,c){var d,e,f,g;d=b.data;e=AFM(HP(BJ(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AFE(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BU(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(37));U(c,e[d]);d=d+1|0;}BU(c,C(38));return L(c);}
function ARu(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BU(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(37));EC(c,e[d]);d=d+1|0;}BU(c,C(38));return L(c);}
function ATg(b){var c,d,e,f;if(b===null)return C(23);c=new K;M(c);BU(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(37));f=e[d];AH2(c,c.K,f);d=d+1|0;}BU(c,C(38));return L(c);}
function Jo(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BR;X(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AD8(b,c,d,e){var f,g;if(c>d){e=new BR;X(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function KS(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A4I;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.pM(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AI9(b,c){return AAE(b,0,b.data.length,c);}
function AAE(b,c,d,e){var f,g,h,i,j;f=BL(c,d);if(f>0){g=new BR;X(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AFJ(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+AEV(e[d])|0;d=d+1|0;}return c;}
var ABJ=G(0);
var AIG=G();
function AWl(a,b){return a.Mx(b);}
function APk(a){return a.PP();}
var AE0=G();
var F$=G(0);
var Sg=G();
var BG=G(Bu);
var AI5=G();
function NP(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A43());}return b.data.length;}
function AFM(b,c){if(b===null){b=new GX;X(b);N(b);}if(b===F($rt_voidcls())){b=new BR;X(b);N(b);}if(c>=0)return ASB(b.dY,c);b=new ADp;X(b);N(b);}
function ASB(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GX=G(Bu);
var I8=G(Bu);
function Dk(){B.call(this);this.mz=0;}
var A44=null;var A45=null;var A46=null;var A47=null;var A48=null;var A49=null;var A4$=null;var A4_=null;var A5a=null;var A5b=null;function AS1(a){var b=new Dk();AEE(b,a);return b;}
function AEE(a,b){a.mz=b;}
function Pe(b){var c,d;c=A49.data;if(b>=c.length)return AS1(b);d=c[b];if(d===null){d=AS1(b);A49.data[b]=d;}return d;}
function UN(b){var c,d;c=new BK;d=B4(1);d.data[0]=b;Jk(c,d);return c;}
function L$(b){return b>=65536&&b<=1114111?1:0;}
function CP(b){return (b&64512)!=55296?0:1;}
function Di(b){return (b&64512)!=56320?0:1;}
function Of(b){return !CP(b)&&!Di(b)?0:1;}
function Jj(b,c){return CP(b)&&Di(c)?1:0;}
function EJ(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JI(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function I7(b){return (56320|b&1023)&65535;}
function FD(b){return GW(b)&65535;}
function GW(b){if(A47===null){if(A4$===null)A4$=AJo();A47=AEP((A4$.value!==null?$rt_str(A4$.value):null));}return R$(A47,b);}
function Fg(b){return GU(b)&65535;}
function GU(b){if(A46===null){if(A4_===null)A4_=AJM();A46=AEP((A4_.value!==null?$rt_str(A4_.value):null));}return R$(A46,b);}
function R$(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BL(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function AA$(b,c){if(c>=2&&c<=36){b=Xy(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Xy(b){var c,d,e,f,g,h,i,j,k,l;if(A45===null){if(A5a===null)A5a=AIn();c=(A5a.value!==null?$rt_str(A5a.value):null);d=ARo(Gj(c));e=MR(d);f=BN(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+OS(d)|0;j=j+OS(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A45=f;}g=A45.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BL(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function If(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HL(b){var c;if(b<65536){c=B4(1);c.data[0]=b&65535;return c;}return AIp([JI(b),I7(b)]);}
function CD(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Of(b&65535))return 19;if(A48===null){if(A5b===null)A5b=AG3();d=(A5b.value!==null?$rt_str(A5b.value):null);e=Q(Wi,16384);f=e.data;g=DJ(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Nk(P(d,l));if(m==64){l=l+1|0;m=Nk(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,Nk(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Nk(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ANi(k,k+i|0,N8(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ANi(k,k+i|0,N8(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A48=Dg(e,j);}e=A48.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.sQ)o=p+1|0;else{c=d.xt;if(b>=c)return d.xE.data[b-c|0];c=p-1|0;}}return 0;}
function Kz(b){a:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function HH(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CD(b)!=16?0:1;}
function XU(b){switch(CD(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Re(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return XU(b);}return 1;}
function AHo(){A44=F($rt_charcls());A49=Q(Dk,128);}
function AJo(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AJM(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AIn(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AG3(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var VG=G(0);
var ZG=G(0);
var ET=G(0);
var AHr=G();
function Er(){return $rt_globals.window.document;}
function AXY(a){return a.HD();}
function AZU(a,b){return a.Jj($rt_str(b));}
function AZJ(a,b){a.GT($rt_str(b));}
function AVe(a,b){return a.MH($rt_str(b));}
function AKJ(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AMw(a){return a.P_();}
function AZR(a,b,c){return a.O3($rt_str(b),$rt_str(c));}
function AOu(a,b,c,d){a.B8($rt_str(b),E9(c,"handleEvent"),d?1:0);}
function AUn(a){return a.NW();}
function AYD(a){return !!a.JH();}
function A0m(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function APC(a){return a.G2();}
function AN9(a,b){a.OW($rt_str(b));}
function APV(a){return !!a.GK();}
function ATj(a){return a.Js();}
function AOW(a){return $rt_ustr(a.ER());}
function ALk(a,b){return a.Hb(b?1:0);}
function A1e(a){return a.JG();}
function AWI(a,b,c){return a.QI($rt_str(b),$rt_str(c));}
function APu(a,b,c){return a.Nd(b,c?1:0);}
function ASD(a,b,c){return !!a.IW($rt_str(b),$rt_str(c));}
function ATI(a){return a.H9();}
function ANT(a){return $rt_ustr(a.KA());}
function AMF(a,b){return !!a.D$(b);}
function ANv(a,b){return a.K1($rt_str(b));}
function AWS(a,b,c){return a.HB($rt_str(b),$rt_str(c));}
function AO5(a){return a.LM();}
function AUp(a,b){return a.Qe($rt_str(b));}
function ANu(a){return $rt_ustr(a.Lq());}
function AQW(a){a.GG();}
function AKz(a,b){return a.QL($rt_str(b));}
function AR8(a,b){return a.GY($rt_str(b));}
function AUH(a,b){return a.GF($rt_str(b));}
function A0d(a){return $rt_ustr(a.LY());}
function AUO(a,b,c){return a.Oy(b,c);}
function AYL(a,b){return a.EQ(b);}
function ARk(a){return a.IJ();}
function AQj(a,b,c){a.DH($rt_str(b),E9(c,"handleEvent"));}
function AP4(a,b,c){return a.FF(b,c);}
function AR3(a){return !!a.PN();}
function AS0(a,b){return a.Hy($rt_str(b));}
function AX8(a,b,c,d){a.Bq($rt_str(b),E9(c,"handleEvent"),d?1:0);}
function AMA(a){return a.IK();}
function AU1(a,b,c){return a.Ha($rt_str(b),$rt_str(c));}
function AT5(a){return $rt_ustr(a.Md());}
function A0_(a){return a.LE();}
function AQg(a){return a.LR();}
function AT3(a){return a.IX();}
function AQk(a,b,c){a.D9($rt_str(b),E9(c,"handleEvent"));}
function AVn(a,b){return a.Kn(b);}
function ANA(a,b){a.E9($rt_str(b));}
function AZk(a){return $rt_ustr(a.Lj());}
function Pd(){var a=this;B.call(a);a.xv=null;a.xw=null;a.xx=0;a.xy=null;a.xs=null;}
function AQR(a,b){var c,d,e,f,g;c=a.xv;d=a.xw;e=a.xx;f=a.xy;g=a.xs;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AIt=G();
function ARz(b){return Math.exp(b);}
function AHs(b){return Math.log(b);}
function Jc(b,c){return AXy(b,c);}
function AXy(b,c){return Math.pow(b,c);}
function DP(){return AS9();}
function AS9(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function ASE(b,c){return Math.max(b,c);}
function VM(b){if(b<0)b= -b|0;return b;}
function ANE(b){return Math.abs(b);}
var XL=G(0);
var Rm=G(0);
var YX=G(0);
var Sz=G(0);
var ACO=G(0);
var ABa=G(0);
var AHR=G();
function AYn(a,b,c){a.D9($rt_str(b),E9(c,"handleEvent"));}
function AW9(a,b,c){a.DH($rt_str(b),E9(c,"handleEvent"));}
function ANV(a,b,c,d){a.Bq($rt_str(b),E9(c,"handleEvent"),d?1:0);}
function ALv(a,b){return !!a.D$(b);}
function AVD(a,b,c,d){a.B8($rt_str(b),E9(c,"handleEvent"),d?1:0);}
var BR=G(Bu);
var ADp=G(Bu);
var Ic=G(BG);
var AH5=G();
function AIA(){return "ping";}
function AG0(b){return b===AIA()?1:0;}
var YB=G(0);
var Xl=G(0);
function ZM(){var a=this;B.call(a);a.s9=null;a.n3=null;a.qc=null;a.el=null;a.ux=null;a.wb=null;a.pq=null;a.hF=null;a.k$=0;a.DR=0;a.yy=null;a.gn=null;a.At=null;}
function Ws(a,b){var c;c=Er();b=$rt_ustr(b);c.title=b;}
function Sq(a){a.DR=$rt_globals.requestAnimationFrame(Bv(a.s9,"onAnimationFrame"));}
function Jm(a){a.k$=1;}
function AAe(a,b,c){var d,e;a.pq.eh=BF(b,c);d=a.el;e=b;d.width=e;d=a.el;e=c;d.height=e;d=a.hF;V(d.c3,b,c);e=d.X;d=d.c3;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gn.ca(a.hF.c3,Lc(a));a.gn.bP();}
function Y7(a,b){var c,d,e;c=a.yy;d=a.el;if(BS(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.yy=b;}
function MI(a){return $rt_globals.performance.now()/1000.0;}
function Lc(a){return $rt_globals.window.devicePixelRatio;}
function I5(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADD(null,b);else{c=new ACp;d=$rt_globals.window.showDirectoryPicker();e=new ACo;e.rM=b;e.rN=c;d.then(Bv(e,"f"),Bv(c,"f"));}}
function N0(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADD(b,null);else{c=new ACW;d=$rt_globals.window.showOpenFilePicker();e=new ACV;e.r$=b;d.then(Bv(e,"f"),Bv(c,"f"));}}
function CR(a,b,c,d){var e,f,g,h;e=a.At;f=e.il;if(f>0){g=e.oU.data;f=f-1|0;e.il=f;SV(e,b,c,d,g[f]);}else{h=e.l6;e=new ACq;e.tJ=b;e.zR=c;e.y9=d;b=new SW;b.q0=e;c=h.l5;b.zy=c;if(c===null)h.oN=b;else c.tt=b;h.l5=b;h.b0=h.b0+1|0;h.kQ=h.kQ+1|0;}}
function Rc(a,b,c){var d,e;if(!LN()){b=new Bu;Bm(b,C(39));c.j(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new Zs;e.sA=b;b=AKn(c);d.then(Bv(e,"f"),Bv(b,"f"));}}
function SX(a,b,c,d){var e,f,g;if(!LN()){b=new Bu;Bm(b,C(39));d.j(b);}else{e=$rt_globals.navigator.clipboard;f=Gj(b);A2I();b=A5c;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ABQ;e.uM=c;c=AKn(d);b.then(Bv(e,"f"),Bv(c,"f"));}}
function U1(a){return LN()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AKn(b){var c;c=new OC;c.zg=b;return c;}
var BE=G(0);
var AIN=G();
var Z=G(0);
var AIO=G();
var Y1=G(0);
function TN(){B.call(this);this.xh=null;}
function AWH(a,b){var c,d;c=b;b=a.xh;if(!(!b.gn.cg(c/1000.0)&&!b.k$)){d=b.hF.c3;if(Bb(d.a,d.b)){b.k$=0;b.gn.bP();}}Sq(b);}
function TL(){B.call(this);this.AV=null;}
function DB(a){Jm(a.AV);}
var Yu=G(0);
function TM(){B.call(this);this.yI=null;}
function AMP(a,b,c){var d,e,f,g;c=a.yI;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.el){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lc(c);AAe(c,Gw(f.width*g),Gw(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];AAe(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AGo=G();
function ATN(){return {box:'device-pixel-content-box'};}
function AQ6(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cy=G(0);
function TK(){B.call(this);this.q$=null;}
function AQV(a,b){b=a.q$;b.gn.ca(b.hF.c3,Lc(b));b.gn.bP();}
function Zx(){var a=this;B.call(a);a.l6=null;a.Ac=null;a.rU=null;a.oU=null;a.wk=0;a.il=0;a.AR=null;}
function SV(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.wk+1|0;a.wk=f;g=a.rU;h=CU(f);g.jM=Od(g,g.jM,h);h=ABc(g,h);VI(h,b);VI(h,b);g.l1=g.l1+1|0;b=a.Ac[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BK)g=$rt_ustr(c);else if(I6(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(I6(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(I6(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof Si)){b=new BR;c
=JH(BJ(c));g=new K;M(g);H(H(g,C(40)),c);Bm(b,L(g));N(b);}c=c;g=c.ia;if(g===null)g=c.fY;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var Ug=G(0);
function ATq(a,b){var c;c=a.b5();while(c.cy()){b.j(c.b7());}}
var Hs=G(0);
function To(a){var b,c;b=new Zv;c=new QH;c.xr=a;b.zt=c;return b;}
function AWW(a,b){var c,d;c=a.b5();d=0;while(c.cy()){if(b.L(c.b7())){c.oW();d=1;}}return d;}
var Fv=G();
function Ez(a){return a.cY()?0:1;}
function Gf(a,b){var c,d,e,f,g,h;c=b.data;d=a.m;e=c.length;if(e<d)b=AFM(HP(BJ(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B6(a);while(B$(f)){g=b.data;h=e+1|0;g[e]=B_(f);e=h;}return b;}
function AZy(a,b){var c;c=a.b5();while(c.cy()){if(BS(c.b7(),b)){c.oW();return 1;}}return 0;}
function HW(a,b){var c,d;c=0;d=b.b5();while(d.cy()){if(!a.yT(d.b7()))continue;c=1;}return c;}
var Np=G(0);
var Mv=G(0);
function Fi(){Fv.call(this);this.b0=0;}
function AQ9(a,b){a.n2(a.cY(),b);return 1;}
function B6(a){var b;b=new Wx;b.i5=a;b.pK=a.b0;b.lh=a.cY();b.hI=(-1);return b;}
function AQx(a,b,c){var d,e;if(b>=0&&b<=a.cY()){if(c.ev())return 0;d=c.b5();while(d.cy()){e=b+1|0;a.n2(b,d.b7());b=e;}return 1;}c=new BR;X(c);N(c);}
function AZ$(a,b,c){c=new Ec;X(c);N(c);}
function KY(a,b){var c,d;c=a.cY();d=0;while(true){if(d>=c)return (-1);if(BS(b,a.nj(d)))break;d=d+1|0;}return d;}
function APO(a,b){var c,d;if(!I6(b,Mv))return 0;c=b;if(a.m!=c.m)return 0;d=0;while(d<c.m){if(!BS(Bx(a,d),Bx(c,d)))return 0;d=d+1|0;}return 1;}
var L7=G(Fi);
var Ow=G(0);
var AC9=G(0);
function S6(){var a=this;L7.call(a);a.oN=null;a.l5=null;a.kQ=0;}
var Ll=G(0);
function Ea(){var a=this;B.call(a);a.oA=null;a.oG=null;}
var Et=G(0);
var U0=G(0);
var OR=G(0);
function XB(){var a=this;Ea.call(a);a.jM=null;a.lY=null;a.CL=null;a.l1=0;}
function AGv(a,b){var c;c=ABc(a,b);if(c===null)return null;a.jM=KV(a,a.jM,b);a.l1=a.l1+1|0;return c.j7;}
function ABc(a,b){var c,d;c=a.jM;while(true){if(c===null)return null;d=MJ(a.lY,b,c.lC);if(!d)break;c=d>=0?c.b1:c.bS;}return c;}
function Od(a,b,c){var d,e;if(b===null){b=new Ku;d=null;b.lC=c;b.j7=d;b.gu=1;b.gE=1;return b;}e=MJ(a.lY,c,b.lC);if(!e)return b;if(e>=0)b.b1=Od(a,b.b1,c);else b.bS=Od(a,b.bS,c);EU(b);return MQ(b);}
function KV(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=MJ(a.lY,c,b.lC);if(d<0)b.bS=KV(a,b.bS,c);else if(d>0)b.b1=KV(a,b.b1,c);else{e=b.b1;if(e===null)return b.bS;f=b.bS;g=Q(Ku,e.gu).data;h=0;while(true){b=e.bS;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b1;while(h>0){h=h+(-1)|0;j=g[h];j.bS=b;EU(j);b=MQ(j);}e.b1=b;e.bS=f;EU(e);b=e;}EU(b);return MQ(b);}
function ZB(){B.call(this);this.yW=null;}
function ZC(){var a=this;B.call(a);a.yk=null;a.yj=0;}
function ATH(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.yk;d=a.yj;AG0(b.data);e=c.l6;f=e.oN;if(f===null)g=null;else{g=f.tt;e.oN=g;if(g!==null)g.zy=null;else e.l5=null;e.kQ=e.kQ-1|0;e.b0=e.b0+1|0;g=f.q0;}if(g!==null)SV(c,g.tJ,g.zR,g.y9,d);else{h=c.oU.data;i=c.il;c.il=i+1|0;h[i]=d;}c=c.AR;b=b.data;if(!AG0(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BR;X(b);N(b);}if(b.length<1){b=new BR;AFH(b);N(b);}e=CU(b[0]);c=AGv(c.yW,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?HY(M$(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A1_(M$(e)):(e instanceof $rt_globals.File?1:0)?AJa(null,M$(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AJa(M$(e),null);k=l;}c.j(h);}}
function AEj(){var a=this;B.call(a);a.co=null;a.ji=null;a.D1=null;a.eh=null;}
function A3r(a,b){var c=new AEj();AZ6(c,a,b);return c;}
function AZ6(a,b,c){var d,e,f,g;a.eh=null;a.ji=b;d=new X9;d.bF=CS(Q(Cq,0));d.n6=CS(Q(Cq,0));d.bO=CS(Q(CC,0));d.fi=CS(Q(EE,0));d.c1=CS(Q(C6,0));d.gx=CS(Q(Ft,0));d.g0=CS(Q(FN,0));d.lW=CS(Q(Z,0));d.mw=CS(Q(Z,0));d.di=c;a.co=d;e=$rt_globals.window;f=Q(C5,14);g=f.data;d=new AB_;d.qA=a;g[0]=C0(a,b,C(41),d);d=new ACa;d.y6=a;g[1]=C0(a,b,C(42),d);d=new ACb;d.w$=a;g[2]=C0(a,b,C(43),d);d=new ACc;d.vh=a;g[3]=C0(a,b,C(44),d);d=new ACd;d.s2=a;g[4]=C0(a,b,C(45),d);d=new ACe;d.qX=a;g[5]=C0(a,b,C(46),d);d=new ACf;d.A3=a;g[6]
=C0(a,b,C(47),d);d=new ACg;d.yK=a;g[7]=C0(a,b,C(48),d);d=new ACh;d.wP=a;g[8]=C0(a,b,C(49),d);d=new ACi;d.uP=a;g[9]=C0(a,b,C(50),d);d=new Vk;d.uk=a;g[10]=C0(a,b,C(51),d);d=new Vl;d.tC=a;e.addEventListener("paste",Bv(d,"handleEvent"),!!1);g[11]=UK(a,e,C(52),d);d=new Vm;d.vZ=a;g[12]=C0(a,e,C(53),d);d=new Vn;d.AA=a;g[13]=C0(a,e,C(54),d);c=new QQ;c.BL=f;a.D1=c;e=new AC3;e.xI=b;b.onpointerdown=Bv(e,"f");e=new AC4;e.wY=b;b.onpointerup=Bv(e,"f");}
function V2(){return (Er()).activeElement;}
function C0(a,b,c,d){b.addEventListener($rt_ustr(c),Bv(d,"handleEvent"));return UK(a,b,c,d);}
function UK(a,b,c,d){var e;e=new Yr;e.Ds=b;e.Du=c;e.Dt=d;return e;}
function AAB(a,b){var c;c=new ABe;c.vg=b;return c;}
function E4(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.ji.getBoundingClientRect();e=BF(Gw((b.clientX-d.left)*c),Gw((b.clientY-d.top)*c));f=AIZ(a.eh);d=new Or;AA2(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.Di=f;return d;}
function Vq(a,b,c){var d,e,f,g;d=new P3;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;AA2(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.om=0;d.d7=e;d.bl=f;d.jw=c;d.yN=g;return d;}
function D5(a,b){b.stopPropagation();b.preventDefault();}
function ND(){var a=this;B.call(a);a.o9=null;a.cd=null;a.X=null;a.lE=0;a.zx=null;a.DG=0;a.Cu=0;a.kK=null;a.kz=null;a.CI=null;a.Ed=null;a.t1=null;a.wn=null;a.iH=null;a.h6=null;a.jF=null;a.CQ=null;a.rA=null;a.c3=null;a.AI=null;a.pl=0;a.me=0;a.nL=0;a.nA=0;a.k3=0;a.nH=null;a.nT=0.0;a.pt=0.0;}
function AJK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c3=new Bg;a.pl=0;a.nH=new ACl;a.o9=c;a.lE=d;g=$rt_str(b.getParameter(7938));h=new K;M(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(L(h)));a.X=b;a.cd=Ks(c,4,4,1);i=AKG(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B4(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new QK;Jp();c=A5d;m.eJ=b;m.hT=c;m.tc=j.length/c.mP|0;m.AC
=l.length;n=b.createBuffer();m.v$=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.vj=null;n=b.createBuffer();m.uT=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.rA=m;a.Cu=Nj(g,C(56));c=new Ys;c.dS=b;a.zx=c;a.nT=e;a.pt=f;d=b.getParameter(3379);a.DG=d;c=new K;M(c);U(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(L(c)));k=Q(De,9);i=k.data;c=A2c(b);a.kK=c;i[0]=c;c=A26(b,C(58));a.kz=c;i[1]=c;c=new YM;H3(c,b,C(59),
C(60),A5d);a.CI=c;i[2]=c;c=A3V(b);a.Ed=c;i[3]=c;c=new Pm;U9(c,b,C(61),C(62));a.t1=c;i[4]=c;c=A37(b);a.wn=c;i[5]=c;c=A2M(b);a.iH=c;i[6]=c;c=A3Q(b);a.h6=c;i[7]=c;c=A3R(b);a.jF=c;i[8]=c;a.CQ=k;ACP(b,C(63));}
function Tn(a,b,c,d){return Il(a,b,Cf(c,d));}
function Il(a,b,c){return H0(a,b,c,400,0);}
function HC(a,b,c){return Ks(a.o9,b,c,0);}
function D2(a,b,c,d){return Ks(a.o9,b,c,d);}
function ED(a,b){var c,d,e,f,g;c=a.X;d=b.bm;e=b.bs;f=b.be;g=b.bB;c.clearColor(d,e,f,g);a.X.clear(16384);}
function B9(a,b){var c;if(b==a.me)return b;if(!b)a.X.disable(3042);else{a.X.enable(3042);a.X.blendFuncSeparate(770,771,1,1);}c=a.me;a.me=b;return c;}
function Nm(a,b,c){LH(a,b.a,b.b,c);}
function LH(a,b,c,d){var e,f;e=d.a;f=d.b;a.nA=1;a.k3=1;d=a.nH;d.sT=b;d.sU=c;d.sS=e;d.sR=f;AA3(a);}
function F5(a){a.nA=0;a.k3=0;AA3(a);}
function AA3(a){var b,c,d,e,f,g;b=a.nL;c=a.nA;if(b!=c){a.nL=c;if(!c)a.X.disable(3089);else a.X.enable(3089);}if(a.nL&&a.k3){a.k3=0;d=a.X;e=a.nH;b=e.sT;c=a.c3.b-e.sU|0;f=e.sR;c=c-f|0;g=e.sS;d.scissor(b,c,g,f);}}
function FV(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.rA;c=a.pl;d=b.hT.zd;e=b.eJ;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eJ;h=b.v$;e.bindBuffer(34962,h);i=b.hT.pT.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eJ;m=k.jp;n=k.gg;o=b.hT.mP*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gg|0;j=j+1|0;}a:{e=b.vj;if(e!==null){c=0;b.eJ.bindBuffer(34962,e);i=b.hT.yw.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eJ;j=e.jp;p=e.gg;m=e.rG;n=b.hT.xG;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gg|0;g=g+1|0;}}}q=b.uT;if(q===null){c=b.tc;if(c>0)b.eJ.drawArrays(4,0,c);}else{b.eJ.bindBuffer(34963,q);k=b.eJ;g=b.AC;k.drawElements(4,g,5123,0);}a.pl=d;}
function Bs(a,b,c,d,e){Gl(a,a.kK);Gv(a.kK,a.X,b,c,d,a.c3);d=a.kK;Fw(a.X,d.Ag,e);FV(a);}
function ADr(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Gl(a,a.h6);Gv(a.h6,a.X,b,c,d,a.c3);j=a.h6;d=a.X;k=j.vJ;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.vI;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.h6;Fw(a.X,d.wC,i);FV(a);}
function L1(a,b,c,d,e,f,g,h){var i,j;Gl(a,a.jF);Gv(a.jF,a.X,b,c,d,a.c3);d=a.jF;i=a.X;j=d.ta;i.uniform2f(j,e,f);Fw(i,d.xk,g);d=a.jF;Fw(a.X,d.wa,h);FV(a);}
function D4(a,b,c,d,e,f,g,h,i){var j;j=!i?a.t1:a.wn;Gl(a,j);AJ8(j,a.X,!i?a.pt:a.nT);Gv(j,a.X,b,c,d,a.c3);NL(j,a.X,f);ADw(j,a.X,f,e);AI7(j,a.X,g,h);FV(a);}
function CT(a){var b,c;b=new Ip;c=a.zx;b.fp=new Bg;b.eA=c;b.fR=c.dS.createTexture();A5e=A5e+1|0;return b;}
function MM(a,b){ACP(a.X,b);}
function Gl(a,b){var c,d;if(b!==a.AI){c=a.X;d=b.bD;c.useProgram(d);a.AI=b;}}
function TD(){var a=this;ND.call(a);a.Ch=null;a.CJ=null;}
function H0(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cd;g=AHZ(b,c,d,e);Kn(f,g);h=f.c$.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=El(f,C(64));m=El(f,C(65));h=new Lp;n=g;h.nS=b;h.ox=c;h.BG=d;h.BW=e;h.ef=i;h.ex=j;h.Bx=l;h.pE=k;h.qq=n;h.sJ=CV(i);h.CB=CV(h.ex);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.BC=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.Bt=b;return h;}
function Cu(){B.call(this);this.B=null;}
function Eh(a,b){a.B=b;}
function A1a(a,b){return 0;}
function X9(){var a=this;B.call(a);a.bF=null;a.n6=null;a.bO=null;a.fi=null;a.c1=null;a.gx=null;a.g0=null;a.lW=null;a.mw=null;a.di=null;a.e0=null;a.wU=0;}
function SR(a,b){var c,d,e,f;DB(a.di);c=(CA(!b.jw?a.n6:a.bF)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].L(b);if(f)break;if(b.om)break;e=e+1|0;}return f;}
function Q_(a,b,c){var d,e,f;DB(a.di);d=(CA(a.gx)).data;e=d.length;f=0;while(f<e){if(d[f].hX(b,c))return 1;f=f+1|0;}return 0;}
function AB_(){B.call(this);this.qA=null;}
function AYw(a,b){var c;c=a.qA;if(SR(c.co,Vq(c,b,1)))D5(c,b);}
function ACa(){B.call(this);this.y6=null;}
function AYH(a,b){var c;c=a.y6;if(SR(c.co,Vq(c,b,0)))D5(c,b);}
function ACb(){B.call(this);this.w$=null;}
function APz(a,b){var c,d,e,f,g,h,i;c=a.w$;if(c.eh!==null){a:{b:{d=E4(c,b);e=c.co;DB(e.di);f=e.e0;if(f!==null)f.j(d);else{g=(CA(e.bO)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bQ(d))break a;i=i+1|0;}}}}D5(c,b);}}
function ACc(){B.call(this);this.vh=null;}
function AXo(a,b){var c,d,e,f,g,h;c=a.vh;b.button;if(c.eh!==null)a:{d=E4(c,b);c=c.co;e=b.button;DB(c.di);if(c.e0===null){f=(CA(c.bO)).data;g=f.length;h=0;while(h<g){b=f[h].cu(d,e);if(b!==null){c.e0=b;c.wU=e;break a;}h=h+1|0;}}}}
function ACd(){B.call(this);this.s2=null;}
function AXA(a,b){var c,d,e,f,g,h,i;c=a.s2;b.button;if(c.eh!==null){d=E4(c,b);e=c.co;f=b.button;DB(e.di);if(f==e.wU&&e.e0!==null)e.e0=null;g=(CA(e.bO)).data;h=g.length;i=0;a:{while(i<h){if(g[i].ds(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)D5(c,b);}}
function ACe(){B.call(this);this.qX=null;}
function AQ0(a,b){var c,d,e,f,g,h,i,j,k;c=a.qX;if(c.eh!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.co;f=E4(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DB(e.di);i=(CA(e.fi)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dq(f,d,h))break b;k=k+1|0;}}D5(c,b);}}
function ACf(){B.call(this);this.A3=null;}
function ANU(a,b){var c,d,e,f,g,h,i,j;c=a.A3;if(c.eh!==null){d=E4(c,b);e=c.co;f=b.button;g=b.detail;DB(e.di);h=(CA(e.bO)).data;i=h.length;j=0;a:{while(j<i){if(h[j].ct(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)D5(c,b);}}
function ACg(){B.call(this);this.yK=null;}
function A1x(a,b){var c,d,e,f,g,h,i;c=a.yK;if(c.eh!==null){d=E4(c,b);e=c.co;DB(e.di);f=(CA(e.c1)).data;g=f.length;h=0;a:{while(h<g){if(f[h].L(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)D5(c,b);}}
function ACh(){B.call(this);this.wP=null;}
function ANs(a,b){var c,d,e,f,g,h;b=a.wP.co;if(b.e0!==null){c=Ek();d=Ck(b.e0);e=new K;M(e);H(H(e,C(67)),d);Bk(c,L(e));}f=(CA(b.mw)).data;g=f.length;h=0;while(h<g){f[h].f();h=h+1|0;}DB(b.di);}
function ACi(){B.call(this);this.uP=null;}
function ARH(a,b){var c,d,e;b=a.uP.co;c=(CA(b.lW)).data;d=c.length;e=0;while(e<d){c[e].f();e=e+1|0;}if(b.e0!==null)b.e0=null;DB(b.di);}
function Vk(){B.call(this);this.uk=null;}
function A1b(a,b){var c;c=a.uk;if(c.eh!==null)E4(c,b);}
function Vl(){B.call(this);this.tC=null;}
function APi(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.tC;if(V2()===c.ji){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(CA(c.co.g0)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cV();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.co.di;m=new O_;m.uZ=k;m.u0=l;g.getAsString(Bv(m,"accept"));D5(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new K;M(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(L(l)));}e=e+1
|0;}}}
function Vm(){B.call(this);this.vZ=null;}
function APE(a,b){var c;c=a.vZ;if(V2()===c.ji&&Q_(c.co,AAB(c,b),0))D5(c,b);}
function Vn(){B.call(this);this.AA=null;}
function AYN(a,b){var c;c=a.AA;if(V2()===c.ji&&Q_(c.co,AAB(c,b),1))D5(c,b);}
var AAU=G(0);
var AA5=G();
function Ks(a,b,c,d){var e,f,g,h,i;e=new Y8;e.i4=d;A4Y=A4Y+1|0;e.nu=b;e.mZ=c;f=(Er()).createElement("canvas");e.iV=f;g=b;f.width=g;h=e.iV;f=c;h.height=f;if(!d)g=e.iV.getContext("2d");else{i=e.iV;h=AUv();g=i.getContext("2d",h);}e.c$=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AA4=G();
function AOz(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Ot(){var a=this;B.call(a);a.O=null;a.p=null;a.bV=null;}
var Kl=G();
var A4I=null;function MJ(a,b,c){return b.l3(c);}
function AE8(){A4I=new Kl;}
function AGB(){var a=this;B.call(a);a.g2=null;a.ir=null;a.gh=0;}
function CS(a){var b=new AGB();ANR(b,a);return b;}
function ANR(a,b){a.g2=b;}
function Bc(a,b){var c,d,e;c=a.gh;d=a.g2;if(c==d.data.length)a.g2=Dg(d,c+4|0);d=a.g2.data;e=a.gh;a.gh=e+1|0;d[e]=b;a.ir=null;}
function CA(a){var b;b=a.ir;if(!(b!==null&&b.data.length==a.gh))a.ir=Dg(a.g2,a.gh);return a.ir;}
var Ev=G(0);
var Cq=G(0);
var CC=G(0);
function AW2(a,b){return 0;}
function ASm(a,b,c){return null;}
function AK5(a,b,c){return 0;}
function AY0(a,b,c,d){return 0;}
var EE=G(0);
var C6=G(0);
var Ft=G(0);
var DN=G(0);
var FN=G(0);
function QQ(){B.call(this);this.BL=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BF(a,b){var c=new Bg();Ql(c,a,b);return c;}
function AIZ(a){var b=new Bg();AMz(b,a);return b;}
function Ql(a,b,c){a.a=b;a.b=c;}
function AMz(a,b){a.a=b.a;a.b=b.b;}
function Ct(a,b){a.a=b.a;a.b=b.b;}
function V(a,b,c){a.a=b;a.b=c;}
function AG8(a){var b,c,d;b=a.a;c=a.b;d=new K;M(d);U(H(U(H(d,C(70)),b),C(71)),c);return L(d);}
function AOq(a,b){var c;a:{b:{if(a!==b){if(BJ(b)!==BJ(a))break b;if(!JN(a,b))break b;}c=1;break a;}c=0;}return c;}
function JN(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function ACl(){var a=this;B.call(a);a.sT=0;a.sU=0;a.sS=0;a.sR=0;}
var AF7=G();
var AHE=G(0);
function Ys(){B.call(this);this.dS=null;}
function NT(){var a=this;B.call(a);a.bD=null;a.Ef=null;}
function AI_(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new K;M(h);H(H(h,f),g);g=L(h);b.deleteShader(e);Bk(Bt(),g);Bk(Ek(),C(74));Bk(Ek(),d);Bk(Ek(),C(74));b=new Bu;Bm(b,g);N(b);}
function De(){var a=this;NT.call(a);a.wO=null;a.r0=null;a.nq=null;}
function A5f(a,b,c,d){var e=new De();H3(e,a,b,c,d);return e;}
function H3(a,b,c,d,e){var f,g,h,i,j,k;a.Ef=e;f=AI_(b,35633,c);d=AI_(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bD=g;h=e.tl.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bD;k=c.jp;c=c.r7;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bD;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ACP(b,C(75));a.nq=new Bg;c=a.bD;a.wO=b.getUniformLocation(c,"uResolution");c=a.bD;a.r0=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new K;M(c);H(H(c,C(76)),d);Bm(b,L(c));N(b);}
function AEs(a,b,c){var d,e,f;if(!JN(a.nq,c)){Ct(a.nq,c);d=a.wO;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Gv(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.r0;b.uniform4f(e,i,l,h,j);AEs(a,b,f);}
function AJP(){De.call(this);this.Ag=null;}
function A2c(a){var b=new AJP();AWP(b,a);return b;}
function AWP(a,b){var c;Jp();H3(a,b,C(59),C(77),A5d);c=a.bD;a.Ag=b.getUniformLocation(c,"uColor");}
function Fj(){De.call(this);this.sY=null;}
function A26(a,b){var c=new Fj();AAD(c,a,b);return c;}
function A5g(a,b,c){var d=new Fj();AAH(d,a,b,c);return d;}
function AAD(a,b,c){AAH(a,b,C(59),c);}
function AAH(a,b,c,d){Jp();H3(a,b,c,d,A5d);c=a.bD;a.sY=b.getUniformLocation(c,"sDiffuse");}
function NL(a,b,c){var d;d=a.sY;b.uniform1i(d,0);b.activeTexture(33984);c=c.fR;b.bindTexture(3553,c);}
var YM=G(De);
function AE3(){Fj.call(this);this.Bn=null;}
function A3V(a){var b=new AE3();AQy(b,a);return b;}
function AQy(a,b){var c;AAD(a,b,C(78));c=a.bD;a.Bn=b.getUniformLocation(c,"uContrast");}
function Hn(){var a=this;Fj.call(a);a.ru=null;a.sd=null;a.s$=null;a.zp=null;a.p7=0.0;}
function A5h(a,b,c){var d=new Hn();U9(d,a,b,c);return d;}
function U9(a,b,c,d){AAH(a,b,c,d);c=a.bD;a.ru=b.getUniformLocation(c,"uTexTransform");c=a.bD;a.sd=b.getUniformLocation(c,"uColor");c=a.bD;a.s$=b.getUniformLocation(c,"uBgColor");c=a.bD;a.zp=b.getUniformLocation(c,"uTextPow");}
function AJ8(a,b,c){var d;if(a.p7!==c){a.p7=c;d=a.zp;b.uniform2f(d,c,0.0);}}
function AI7(a,b,c,d){Fw(b,a.sd,c);Fw(b,a.s$,d);}
function ADw(a,b,c,d){var e,f,g,h,i,j;c=c.fp;e=c.a;f=c.b;g=d.bm;h=e;g=g/h;i=d.bs;j=f;i=i/j;h=d.be/h;j=d.bB/j;c=a.ru;b.uniform4f(c,g,i,h,j);}
var Pm=G(Hn);
var AGQ=G(Hn);
function A37(a){var b=new AGQ();AVK(b,a);return b;}
function AVK(a,b){U9(a,b,C(61),C(79));}
function AHS(){var a=this;Fj.call(a);a.vk=null;a.vi=null;a.se=null;}
function A2M(a){var b=new AHS();AMZ(b,a);return b;}
function AMZ(a,b){var c,d;AAD(a,b,C(80));c=a.bD;a.vk=b.getUniformLocation(c,"uColorB");d=a.bD;a.vi=b.getUniformLocation(d,"uColorF");d=a.bD;a.se=b.getUniformLocation(d,"uContrast");}
function AJj(){var a=this;De.call(a);a.wC=null;a.vJ=null;a.vI=null;}
function A3Q(a){var b=new AJj();AVN(b,a);return b;}
function AVN(a,b){var c;Jp();H3(a,b,C(59),C(81),A5d);c=a.bD;a.wC=b.getUniformLocation(c,"uColor");c=a.bD;a.vJ=b.getUniformLocation(c,"uPoints1");c=a.bD;a.vI=b.getUniformLocation(c,"uPoints2");}
function ADZ(){var a=this;De.call(a);a.wa=null;a.ta=null;a.xk=null;}
function A3R(a){var b=new ADZ();AUI(b,a);return b;}
function AUI(a,b){var c;Jp();H3(a,b,C(59),C(82),A5d);c=a.bD;a.wa=b.getUniformLocation(c,"uColor");c=a.bD;a.ta=b.getUniformLocation(c,"uBaseline");c=a.bD;a.xk=b.getUniformLocation(c,"uScaleHExp");}
var Zh=G(0);
var AKo=G(0);
function Fw(b,c,d){var e,f,g,h;e=d.bm;f=d.bs;g=d.be;h=d.bB;b.uniform4f(c,e,f,g,h);}
function ACP(b,c){var d,e;d=b.getError();if(d){b=Bt();e=new K;M(e);U(H(e,c),d);Bk(b,L(e));}}
function Yr(){var a=this;B.call(a);a.Ds=null;a.Du=null;a.Dt=null;}
function QK(){var a=this;B.call(a);a.eJ=null;a.hT=null;a.v$=null;a.vj=null;a.uT=null;a.tc=0;a.AC=0;}
function CG(){var a=this;B.call(a);a.Dr=null;a.fF=0;}
function DI(a,b,c){a.Dr=b;a.fF=c;}
function G2(){var a=this;CG.call(a);a.tl=null;a.pT=null;a.yw=null;a.mP=0;a.xG=0;a.zd=0;}
var A5d=null;var A5i=null;function Jp(){Jp=Bn(G2);AOd();}
function AOd(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new G2;c=Q(Ee,2);d=c.data;A0D();d[0]=A5j;d[1]=A5k;Jp();DI(b,C(83),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.pC.fF){case 0:f=f+l.gg|0;h=h+1|0;break a;case 1:e=e+l.gg|0;g=g+1|0;break a;default:}}i=i|1<<l.jp;k=k+1|0;}b.tl=c;b.mP=e;b.xG=f;b.zd=i;c=Q(Ee,g);m=c.data;b.pT=c;c=Q(Ee,h);n=c.data;b.yw=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.pC.fF){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A5d
=b;c=Q(G2,1);c.data[0]=b;A5i=c;}
var Mf=G(0);
var St=G(0);
var AA9=G(0);
var GL=G();
function MG(){GL.call(this);this.Be=null;}
function AEK(){var a=this;MG.call(a);a.Cs=0;a.mW=0;a.lj=null;a.mC=null;a.tW=null;}
function APM(a,b){var c=new AEK();A0o(c,a,b);return c;}
function A0o(a,b,c){a.Be=b;b=new K;M(b);a.lj=b;a.mC=B4(32);a.Cs=c;AEF();a.tW=A5l;}
function AAm(a,b,c,d){var e,$$je;e=a.Be;if(e===null)a.mW=1;if(!(a.mW?0:1))return;a:{try{e.mu(b,c,d);break a;}catch($$e){$$je=ER($$e);if($$je instanceof I0){}else{throw $$e;}}a.mW=1;}}
function WY(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AIL(b,c,d-c|0);e=DJ(Bd(16,Be(e.length,1024)));g=AIz(e,0,e.data.length);h=a.tW;i=new Qh;b=DJ(1);j=b.data;j[0]=63;Hf();k=A5m;i.nt=k;i.m0=k;c=j.length;if(c&&c>=i.vH){i.Dq=h;i.r5=b.hl();i.Cn=2.0;i.vH=4.0;i.xp=B4(512);i.qU=DJ(512);k=A5n;if(k===null){i=new BR;Bm(i,C(84));N(i);}i.nt=k;i.m0=k;a:while(true){if(i.lb==3){f=new C4;X(f);N(f);}i.lb=2;b:{while(true){try{k=ADR(i,f,g);}catch($$e){$$je=ER($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(IU(k))
{d=Cg(f);if(d<=0)break b;k=Eq(d);}else if(H_(k))break;h=!L8(k)?i.nt:i.m0;c:{if(h!==A5n){if(h===A5o)break c;else break b;}d=Cg(g);b=i.r5;l=b.data.length;if(d<l){k=A5p;break b;}ACz(g,b,0,l);}Fp(f,f.Y+KW(k)|0);}}l=H_(k);AAm(a,e,0,g.Y);Pv(g);if(!l){while(true){d=i.lb;if(d!=2&&d!=4){f=new C4;X(f);N(f);}f=A5q;if(f===f)i.lb=3;l=H_(f);AAm(a,e,0,g.Y);Pv(g);if(!l)break;}return;}}N(AVk(f));}i=new BR;Bm(i,C(85));N(i);}
function Bk(a,b){var c,d,e,f,g,h,i,j;BM(BU(a.lj,b),10);b=a.lj;c=b.K;d=a.mC;if(c>d.data.length)d=B4(c);e=0;f=0;if(e>c){b=new BG;Bm(b,C(86));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.C.data;j=e+1|0;g[f]=i[e];f=h;e=j;}WY(a,d,0,c);a.lj.K=0;}
function Hx(){GL.call(this);this.D5=null;}
function Vw(a){a.D5=DJ(1);}
var Lv=G(Hx);
var A41=null;function AOs(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AFO(){var b;b=new Lv;Vw(b);A41=b;}
function Ee(){var a=this;CG.call(a);a.r7=null;a.pC=null;a.gg=0;a.rG=0;a.jp=0;}
var A5j=null;var A5k=null;var A5r=null;function A0D(){A0D=Bn(Ee);AWj();}
function A2m(a,b,c,d,e,f,g){var h=new Ee();Ud(h,a,b,c,d,e,f,g);return h;}
function Ud(a,b,c,d,e,f,g,h){A0D();DI(a,b,c);a.r7=d;a.pC=e;a.gg=f;a.rG=g;a.jp=h;}
function AWj(){var b;b=new Ee;APv();Ud(b,C(87),0,C(88),A5s,2,0,0);A5j=b;b=A2m(C(89),1,C(90),A5s,2,0,1);A5k=b;A5r=I(Ee,[A5j,b]);}
function My(){var a=this;B.call(a);a.Dh=null;a.DJ=null;}
function AFX(b){var c,d;if(Gh(b))N(AId(b));if(!AJA(P(b,0)))N(AId(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AJA(d))break a;else N(AId(b));}}c=c+1|0;}}
function AJA(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mi=G(My);
var A5l=null;function AEF(){AEF=Bn(Mi);AMY();}
function AF9(a){var b,c;b=new Sx;b.ge=C(91);Hf();c=A5m;b.i$=c;b.ny=c;b.DE=a;b.vP=0.3333333432674408;b.BY=0.5;b.wG=DJ(512);b.y4=B4(512);return b;}
function AMY(){var b,c,d,e,f;b=new Mi;AEF();c=Q(BK,0);d=c.data;AFX(C(92));e=d.length;f=0;while(f<e){AFX(d[f]);f=f+1|0;}b.Dh=C(92);b.DJ=c.hl();A5l=b;}
function XF(){var a=this;B.call(a);a.f6=null;a.pP=null;a.mf=null;a.zh=null;a.rR=null;a.r3=null;}
function AIg(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.f6,b,c));}
function OJ(a,b){var c,d,e,f,g,h,i,$$je;c=new BK;d=b;while(a.pP[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.f6,b,d));f=e.data;E8();d=f.length;AEF();g=A5l;h=AIz(e,0,d);a:{try{i=AF9(g);Hf();g=AHL(AFr(AJ3(i,A5n),A5n),h);break a;}catch($$e){$$je=ER($$e);if($$je instanceof F8){g=$$je;}else{throw $$e;}}h=new ACG;h.kn=1;h.kI=1;h.iG=C(93);h.m1=g;N(h);}if(!g.Y&&g.ed==g.nU)c.b$=g.it;else{f=B4(Cg(g));e=f.data;c.b$=f;O5(g,f,0,e.length);}return c;}
function V4(a,b){var c,d,e;c=new BK;d=b>>>1|0;e=d;while(a.mf[e]){e=e+1|0;}d=e-d|0;Jk(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f6,b,d)));return c;}
var HZ=G(CG);
var A5t=null;var A5s=null;var A5u=null;function APv(){APv=Bn(HZ);AVw();}
function AMT(a,b){var c=new HZ();AJH(c,a,b);return c;}
function AJH(a,b,c){APv();DI(a,b,c);}
function AVw(){var b;A5t=AMT(C(94),0);b=AMT(C(95),1);A5s=b;A5u=I(HZ,[A5t,b]);}
var Nr=G(Hx);
var A42=null;function AM8(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AG6(){var b;b=new Nr;Vw(b);A42=b;}
function AF2(){BR.call(this);this.Bs=null;}
function AId(a){var b=new AF2();ARY(b,a);return b;}
function ARY(a,b){X(a);a.Bs=b;}
var TO=G(Es);
var Mh=G(0);
function AC3(){B.call(this);this.xI=null;}
function ARq(a,b){a.xI.setPointerCapture(b.pointerId);}
function AC4(){B.call(this);this.wY=null;}
function ALM(a,b){a.wY.releasePointerCapture(b.pointerId);}
function H8(){var a=this;B.call(a);a.nU=0;a.Y=0;a.ed=0;a.jt=0;}
function ABV(a,b){a.jt=(-1);a.nU=b;a.ed=b;}
function Fp(a,b){var c,d,e;if(b>=0&&b<=a.ed){a.Y=b;if(b<a.jt)a.jt=0;return a;}c=new BR;d=a.ed;e=new K;M(e);BM(U(H(U(H(e,C(96)),b),C(97)),d),93);Bm(c,L(e));N(c);}
function Cg(a){return a.ed-a.Y|0;}
function D6(a){return a.Y>=a.ed?0:1;}
var Zu=G(0);
var Lq=G(H8);
function AGT(b){var c,d;if(b>=0)return AQJ(0,b,B4(b),0,b,0);c=new BR;d=new K;M(d);U(H(d,C(98)),b);Bm(c,L(d));N(c);}
function AIL(b,c,d){return AQJ(0,b.data.length,b,c,c+d|0,0);}
function O5(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BG;i=new K;M(i);U(H(U(H(i,C(99)),g),C(100)),f);Bm(h,L(i));N(h);}if(Cg(a)<d){j=new NZ;X(j);N(j);}if(d<0){j=new BG;k=new K;M(k);H(U(H(k,C(101)),d),C(102));Bm(j,L(k));N(j);}g=a.Y;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.it.data[m+a.pF|0];l=l+1|0;c=n;m=o;}a.Y=g+d|0;return a;}}b=b.data;j=new BG;d=b.length;k=new K;M(k);BM(U(H(U(H(k,C(103)),c),C(97)),d),41);Bm(j,L(k));N(j);}
function M4(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.pQ){b=new Kg;X(b);N(b);}e=d-c|0;if(Cg(a)<e){b=new Jz;X(b);N(b);}if(c>J(b)){f=new BG;d=J(b);b=new K;M(b);BM(U(H(U(H(b,C(104)),c),C(97)),d),41);Bm(f,L(b));N(f);}if(d>J(b)){f=new BG;c=J(b);b=new K;M(b);U(H(U(H(b,C(105)),d),C(106)),c);Bm(f,L(b));N(f);}if(c>d){b=new BG;f=new K;M(f);U(H(U(H(f,C(104)),c),C(107)),d);Bm(b,L(f));N(b);}g=a.Y;while(c<d){h=g+1|0;i=c+1|0;ZA(a,g,P(b,c));g=h;c=i;}a.Y=a.Y+e|0;return a;}
function MU(){var a=this;H8.call(a);a.mV=0;a.po=null;a.B_=null;}
function AIz(b,c,d){var e,f,g;e=b.data;f=new ACy;g=e.length;d=c+d|0;ABV(f,g);AWR();f.B_=A5v;f.mV=0;f.po=b;f.Y=c;f.ed=d;f.Cd=0;f.v9=0;return f;}
function ACz(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.v9){e=new Kg;X(e);N(e);}if(Cg(a)<d){e=new Jz;X(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BG;j=new K;M(j);U(H(U(H(j,C(108)),h),C(100)),g);Bm(i,L(j));N(i);}if(d<0){e=new BG;i=new K;M(i);H(U(H(i,C(101)),d),C(102));Bm(e,L(i));N(e);}h=a.Y;k=h+a.mV|0;l=0;while(l<d){b=a.po.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Y=h+d|0;return a;}}b=b.data;e=new BG;d=b.length;i=new K;M(i);BM(U(H(U(H(i,C(103)),c),C(97)),d),41);Bm(e,
L(i));N(e);}
function Pv(a){a.Y=0;a.ed=a.nU;a.jt=(-1);return a;}
function IB(){B.call(this);this.CT=null;}
var A5o=null;var A5n=null;var A5m=null;function Hf(){Hf=Bn(IB);APl();}
function AGE(a){var b=new IB();AJy(b,a);return b;}
function AJy(a,b){Hf();a.CT=b;}
function APl(){A5o=AGE(C(109));A5n=AGE(C(110));A5m=AGE(C(111));}
var OV=G(Cu);
function APd(a){}
function AN8(a,b,c){}
function HG(){var a=this;Cu.call(a);a.dJ=null;a.q=null;}
function ABU(a,b){var c,d,e;Eh(a,b);a.dJ=AHY(0,0,64);c=new S0;c.bR=new Bg;c.ei=CS(Q(CZ,0));c.du=new Bg;c.pD=new Bg;c.Bg=new B0;c.Bh=new B0;d=b.O;c.b4=d;e=b.bV;c.hr=e;c.cv=d.lE;c.cP=QZ(e);d=b.p.mw;e=new Yn;e.sX=c;Bc(d,e);d=b.p.lW;e=new Ym;e.vd=c;Bc(d,e);a.q=c;Bc(b.p.bF,new Zj);b=b.p.bF;c=a.q;BD(c);d=new Zi;d.wF=c;Bc(b,d);}
function Hu(a){ED(a.B.O,a.dJ);}
function AFb(a,b,c){var d,e,f,g,h;a:{d=a.q;Ct(d.bR,b);e=d.cb;if(e!==c){d.cb=c;f=(CA(d.ei)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gy(e,c);h=h+1|0;}}}}
function CM(){HG.call(this);this.bb=null;}
function G6(a,b){KF(a,b,1);}
function KF(a,b,c){var d,e,f;ABU(a,b);d=new ACK;e=a.q;d.cO=BI();d.dE=e;a.bb=d;Bc(a.q.ei,d);Bc(b.p.bO,a.bb);e=b.p.fi;f=a.bb;BD(f);d=new VH;d.u_=f;Bc(e,d);if(c){b=b.p.bO;d=a.q.cP;e=new Wn;e.vG=d;Bc(b,e);}}
function AM2(a){Hu(a);JF(a.bb);}
function Iw(a,b,c){var d,e;AFb(a,b,c);b=a.bb;d=0;while(true){e=b.cO;if(d>=e.m)break;Bx(e,d);d=d+1|0;}}
function ALE(a,b){var c,d,e,f;c=a.bb;d=0;e=0;while(true){f=c.cO;if(e>=f.m)break;d=(Bx(f,e)).V.cg(b)|d;e=e+1|0;}return d;}
var GI=G(0);
function AGK(a){a.hB(Ix());}
function Hl(a){a.hB(L5());}
function AHu(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IQ;c=new J1;d=new Hg;AF$();KM(d,A5w);Mj(c,d,BV(A5x),BV(A5y),BV(A5z),BV(A5x),BV(A5A),BV(A5B),BV(A5C),BV(A5D),BV(A5E),BV(A5F));e=AIF(S(C(112)));AFx();f=(A5G.hl()).data;g=f.length;h=Q(Ke,g);i=h.data;j=0;while(j<g){i[j]=f[j].o1;j=j+1|0;}k=AJl(S(C(113)),S(C(114)),S(C(115)),S(C(116)));l=new IR;m=new IZ;AT4();d=A5H;Ok(m,d,A5I,A5J,A5K,A5L,d);LI(l,m,AJ4(),AGL(S(C(117)),S(C(112)),CB(0)),AJ4(),AG9(1,0.07500000298023224),A5M,A5N);Ly(b,c,e,h,k,l,ADy(S(C(118)),S(C(119)),S(C(120)),
S(C(121))));a.hB(b);}
var M2=G(0);
var F4=G(0);
function KJ(){var a=this;CM.call(a);a.E=null;a.G=null;a.iB=null;a.i_=0;a.kM=null;a.l9=null;a.fv=null;}
function A3S(a){var b=new KJ();AEH(b,a);return b;}
function AEH(a,b){var c,d,e;KF(a,b,0);a.fv=AUQ(a.q);c=PQ(a.bb);a.iB=c;a.E=KZ(a.q,c);c=KZ(a.q,a.iB);a.G=c;a.l9=ASn(a.E,c);c=a.E;c.ce=1;AB8(a.fv,c,a.G);c=a.E;d=new Tj;d.Ar=a;c.mH=d;c=a.G;d=new Tk;d.x9=a;c.mH=d;AGw(a,0);ML(a.q,a.E);Bc(b.p.fi,a);Bc(b.p.bO,a);c=b.p.bF;d=new Tl;d.wg=a;Bc(c,d);c=b.p.bF;d=new HM;e=new Th;e.ub=a;In(d,b,e);Bc(c,d);Bc(b.p.gx,a);Bc(b.p.g0,a);b=b.p.c1;c=new Ti;c.sh=a;Bc(b,c);Hl(a);}
function VB(a,b){if(a.E===b)a.i_=a.i_|1;if(a.G===b)a.i_=a.i_|2;if((a.i_&3)==3)AJ$(a);}
function AGw(a,b){RO(a.E,b);RO(a.G,b);}
function A0R(a,b,c){if(DL(a.q,a.E))return G8(a.E,b,c);if(!DL(a.q,a.G))return 0;return G8(a.G,b,c);}
function AEZ(a){if(DL(a.q,a.E))return Vh(a,a.E);if(!DL(a.q,a.G))return null;return Vh(a,a.G);}
function Vh(a,b){var c;c=new Sm;c.rW=b;return c;}
function AJ$(a){var b,c,d,e,f,g;Bk(Bt(),C(122));b=a.E.d.g;c=a.G.d.g;d=E6(b);e=E6(c);f=AD9(b);g=AD9(c);b=a.B.bV;c=new XN;c.wH=a;CR(b,c,C(123),I(B,[d,f,e,g]));}
function ARb(a,b){var c,d;c=IT(a.E,b);d=IT(a.G,b);return !c&&!d?0:1;}
function AXx(a){var b;Hu(a);Ii(a.E);Ii(a.G);b=a.fv;AFK(b,b.g5.b4);JF(a.bb);}
function AWD(a){return Gt(0);}
function ARy(a){Wz(a.E);Wz(a.G);}
function AXt(a){ADe(a.E);ADe(a.G);}
function AR7(a,b){PC(a.E,b);PC(a.G,b);}
function AYj(a,b){Ou(a.q,b);}
function AMo(a,b){if(J0(a.bb,b)){LK(a.E);LK(a.G);}}
function AOJ(a,b,c){Iw(a,b,c);AFa(a,b,c);}
function AFa(a,b,c){var d,e,f,g,h,i;d=new Bg;e=Cf(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;Ql(f,g-h|0,b.b);Mg(a.E,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;Mg(a.G,d,f,c);V(a.fv.i,f.a,d.b);V(a.fv.k,d.a-f.a|0,f.b);}
function AK$(a,b){BD(b);Im(a.iB,b);Hy(a.E,b);Hy(a.G,b);a.fv.jW=b;}
function AGq(a,b){if(b.bl!=121)return 0;return 1;}
function AIy(a,b){var c,d,e,f;if(DL(a.q,a.E)){c=a.iB;d=b.h;e=a.E;f=new PU;f.pU=a;GF(c,d,e,a,a,a,f);}if(DL(a.q,a.G)){c=a.iB;b=b.h;d=a.G;e=new PT;e.AN=a;GF(c,b,d,a,a,a,e);}return 1;}
function AYA(a,b){var c,d;c=B2(a.E,b.h)&&WR(a.E,b)?1:0;d=B2(a.G,b.h)&&WR(a.G,b)?1:0;return !c&&!d?0:1;}
function AWE(a,b,c,d){var e,f;e=B2(a.E,b.h)&&OL(a.E,b,c,d)?1:0;f=B2(a.G,b.h)&&OL(a.G,b,c,d)?1:0;return !e&&!f?0:1;}
function APy(a,b,c){var d,e,f,g,h,i,j,k;d=B2(a.E,b.h);e=B2(a.G,b.h);f=a.q;g=f.d3;h=g!==null?0:1;i=a.E;j=g!==i?0:1;k=g!==a.G?0:1;if(d&&!(!h&&!k))FF(f,i);if(e&&!(!h&&!j))FF(a.q,a.G);if(d){i=VQ(a.E,b,c);if(i!==null)return i;}return !e?null:VQ(a.G,b,c);}
function AY2(a,b,c){var d,e,f,g;d=B2(a.E,b.h);e=B2(a.G,b.h);f=d&&Ss(a.E,b,c)?1:0;g=e&&Ss(a.G,b,c)?1:0;return !f&&!g?0:1;}
function AQN(a,b,c,d){var e,f,g,h;e=B2(a.E,b.h);f=B2(a.G,b.h);g=e&&LF(a.E,b,c,d)?1:0;h=f&&LF(a.G,b,c,d)?1:0;return !g&&!h?0:1;}
function AW5(a){return AEZ(a);}
var AGa=G(KJ);
function A3m(a){var b=new AGa();A0G(b,a);return b;}
function A0G(a,b){var c;AEH(a,b);a.E.eO=1;a.G.eO=1;c=new SN;c.wi=a;PV(a,c,C(124));c=new SO;c.zk=a;PV(a,c,C(125));}
function APJ(a){return Gt(1);}
function PV(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new OD;d=d.then(Bv(e,"f"));f=new OF;f.s0=b;f.sZ=c;g=new OE;d.then(Bv(f,"f"),Bv(g,"f"));}
var AGz=G();
function A0b(b){var c,d;if(J(b)>0){c=new K;M(c);H(H(c,C(126)),b);$rt_globals.console.info($rt_ustr(L(c)));}a:{d=(-1);switch(NG(b)){case -1570047148:if(!Bi(b,C(127)))break a;d=17;break a;case -1509980539:if(!Bi(b,C(128)))break a;d=13;break a;case -1351411913:if(!Bi(b,C(129)))break a;d=5;break a;case -1073555521:if(!Bi(b,C(130)))break a;d=14;break a;case -1045861099:if(!Bi(b,C(131)))break a;d=18;break a;case -1045861098:if(!Bi(b,C(132)))break a;d=19;break a;case -811765794:if(!Bi(b,C(133)))break a;d=6;break a;case -785237654:if
(!Bi(b,C(134)))break a;d=11;break a;case -631889171:if(!Bi(b,C(135)))break a;d=9;break a;case -536831301:if(!Bi(b,C(136)))break a;d=25;break a;case -439438829:if(!Bi(b,C(137)))break a;d=21;break a;case -357667878:if(!Bi(b,C(138)))break a;d=22;break a;case -223304637:if(!Bi(b,C(139)))break a;d=2;break a;case -193916863:if(!Bi(b,C(140)))break a;d=23;break a;case 2129957:if(!Bi(b,C(141)))break a;d=1;break a;case 3343967:if(!Bi(b,C(142)))break a;d=10;break a;case 3556498:if(!Bi(b,C(143)))break a;d=4;break a;case 91636708:if
(!Bi(b,C(144)))break a;d=24;break a;case 485517998:if(!Bi(b,C(145)))break a;d=7;break a;case 544901384:if(!Bi(b,C(146)))break a;d=3;break a;case 675521850:if(!Bi(b,C(147)))break a;d=20;break a;case 1030621992:if(!Bi(b,C(148)))break a;d=16;break a;case 1164939699:if(!Bi(b,C(149)))break a;d=27;break a;case 1465713255:if(!Bi(b,C(150)))break a;d=8;break a;case 1554501643:if(!Bi(b,C(151)))break a;d=15;break a;case 1609169232:if(!Bi(b,C(152)))break a;d=12;break a;case 2090248989:if(!Bi(b,C(153)))break a;d=26;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new T0;break b;case 3:case 4:b=new TX;break b;case 5:b=new TW;break b;case 6:b=new TZ;break b;case 7:b=new TY;break b;case 8:b=new T4;break b;case 9:case 10:b=new T3;break b;case 11:b=new T6;break b;case 12:b=new T5;break b;case 13:b=new Z$;break b;case 14:b=new Z9;break b;case 15:b=new Z8;break b;case 16:b=new ZY;break b;case 17:b=new ZX;break b;case 18:b=new ZV;break b;case 19:b=new ZU;break b;case 20:b=new ZT;break b;case 21:b=new ZS;break b;case 22:b=new ZR;break b;case 23:b
=new Z2;break b;case 24:b=new Z1;break b;case 25:b=new Z0;break b;case 26:b=new ZZ;break b;case 27:b=new Z4;break b;default:b=new Z3;break b;}b=new T1;}return b;}
var AII=G();
var KQ=G(Lq);
function AEY(){var a=this;KQ.call(a);a.pQ=0;a.pF=0;a.it=null;}
function AQJ(a,b,c,d,e,f){var g=new AEY();ATl(g,a,b,c,d,e,f);return g;}
function ATl(a,b,c,d,e,f,g){ABV(a,c);a.Y=e;a.ed=f;a.pF=b;a.pQ=g;a.it=d;}
function ZA(a,b,c){a.it.data[b+a.pF|0]=c;}
function Li(){var a=this;B.call(a);a.Dq=null;a.r5=null;a.Cn=0.0;a.vH=0.0;a.nt=null;a.m0=null;a.lb=0;}
function NX(){var a=this;B.call(a);a.hW=0;a.jT=0;}
var A5q=null;var A5p=null;function ADV(a,b){var c=new NX();AHW(c,a,b);return c;}
function AHW(a,b,c){a.hW=b;a.jT=c;}
function IU(a){return a.hW?0:1;}
function H_(a){return a.hW!=1?0:1;}
function Nq(a){return !Q4(a)&&!L8(a)?0:1;}
function Q4(a){return a.hW!=2?0:1;}
function L8(a){return a.hW!=3?0:1;}
function KW(a){var b;if(Nq(a))return a.jT;b=new Ec;X(b);N(b);}
function Eq(b){return ADV(2,b);}
function TB(a){var b,c;switch(a.hW){case 0:b=new QL;X(b);N(b);case 1:b=new UV;X(b);N(b);case 2:b=new Tx;c=a.jT;X(b);b.C4=c;N(b);case 3:b=new QF;c=a.jT;X(b);b.Ew=c;N(b);default:}}
function AH9(){A5q=ADV(0,0);A5p=ADV(1,0);}
var ADP=G();
var IY=G(0);
var We=G();
function ANc(a,b){return b.arrayBuffer();}
var Wd=G();
function AQd(a,b){var c,d;c=new XE;d=new XC;return $rt_globals.WebAssembly.instantiate(b,AOy(Bv(c,"f"),Bv(d,"f")));}
var Wb=G();
function AQD(a,b){ALG(b);}
var Wa=G();
function AU2(a,b){AGH(b);}
var W=G(0);
function SN(){B.call(this);this.wi=null;}
function A1f(a,b){HV(a.wi.E,b);}
function SO(){B.call(this);this.zk=null;}
function AW$(a,b){HV(a.zk.G,b);}
var T1=G();
function ASk(a,b){return A3S(b);}
var T0=G();
function AKR(a,b){return A2L(b);}
var TX=G();
function AVG(a,b){return A2W(b);}
var TW=G();
function AYh(a,b){var c,d,e,f,g;c=new AAn;Eh(c,b);d=(Ix()).br.d9;c.DU=d;c.kR=AJ_(d);c.iP=new Bg;c.hY=new Bg;c.de=KD();c.dN=KD();c.mM=Gt(1);b=b.p.bO;d=new VV;d.lQ=c;Bc(b,d);b=c.mM.data[DP()*c.mM.data.length|0];d=Il(c.B.O,b,10);c.mA=d;Cm(c.B.O.cd,d);e=El(c.B.O.cd,C(154));d=c.B.O.cd;f=new K;M(f);BM(f,43);H(f,b);g=CV(e+El(d,L(f)));c.jm=g;c.ix=BY(c.ix,ADi(c,1,g,b,c.mA,c.B.O));c.iw=BY(c.iw,ADi(c,0,c.jm,b,c.mA,c.B.O));QO(c,c.de,c.ix);QO(c,c.dN,c.iw);Cw(c.de.W,1.0,1.0,1.0,1.0);Fb(c.de,c.kR);Cw(c.dN.W,1.0,1.0,1.0,1.0);Fb(c.dN,
c.kR);b=Bt();g=c.jm;d=new K;M(d);U(H(d,C(155)),g);Bk(b,L(d));return c;}
var TZ=G();
function AMW(a,b){var c,d,e;c=new WT;G6(c,b);d=new VS;d.no=new Bg;d.nR=new Bg;c.xO=d;c.e4=AIK();c.dw=AIK();c.n8=DM(C(156),25.0);Bc(c.q.ei,c);d=b.p.bF;e=new AAP;e.tM=c;Bc(d,e);Bc(b.p.bO,c);b=b.p.c1;d=new AAL;d.uJ=c;Bc(b,d);ADl(c.dw);BO(c.dJ,CB(43));b=E_();Jy(c.e4,b);Jy(c.dw,b);b=c.e4;b.kx=new AAM;d=c.dw;d.kx=new AAN;d.oD=new PO;d.vN=new PP;M9(b,(Rf(0)).jZ);M9(c.dw,(Rf(0)).jZ);return c;}
var TY=G();
function ATo(a,b){var c,d,e;c=new ZW;G6(c,b);Bc(c.q.ei,c);BO(c.dJ,CB(43));d=b.p.bF;e=new TR;e.BB=c;Bc(d,e);b=b.p.c1;d=new TS;d.Ae=c;Bc(b,d);return c;}
var T4=G();
function AMB(a,b){var c,d,e;c=new Wj;ABU(c,b);c.hP=BI();c.f3=BI();c.rw=S(C(157));c.jS=AGk();c.hO=0;d=c.q.ei;e=new ON;e.w9=c;Bc(d,e);Bc(b.p.bO,c);d=b.p.bF;e=new OM;e.uU=c;Bc(d,e);b=Il(b.O,C(156),35);c.jX=b;c.lX=AHv(E1(b));BO(c.dJ,S(C(158)));return c;}
var T3=G();
function AO7(a,b){var c,d,e,f;c=new Sf;Eh(c,b);c.hS=AGG();c.eX=0;c.tZ=500;c.rx=Iy(0,0,0,255,new B0);c.l_=20;c.ws=20;c.y$=Ix();d=b.p.bO;e=new V6;e.lr=c;f=new Tg;f.y3=e;e.ro=f;Bc(d,e);d=b.p.fi;e=new Zk;e.zA=c;Bc(d,e);c.et=b.O;c.wS=QZ(b.bV);X8(c.hS,Il(c.et,C(156),c.ws),c.l_,c.et.lE);c.iO=I4();return c;}
var T6=G();
function AZA(a,b){var c,d;c=new QM;HI(c,b);b=b.p.bF;d=new Qn;d.sn=c;Bc(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var T5=G();
function AKC(a,b){var c,d,e,f,g,h,i;c=new WA;G6(c,b);d=b.p.c1;e=new Q7;e.xb=c;Bc(d,e);d=b.bV;f=new Pu;f.CC=c;g=Q(B,1);g.data[0]=C(159);CR(d,f,C(160),g);h=new Pt;h.DO=c;g=Q(B,1);g.data[0]=AIp([1,2,3,4,5]);CR(d,h,C(161),g);h=new Pr;h.Bf=c;i=Q(B,1);i.data[0]=A2n([1,2,3,4,5]);CR(d,h,C(162),i);h=new Pp;h.DX=c;g=Q(B,1);g.data[0]=DU([1,2,3,4,5]);CR(d,h,C(163),g);d=b.p.bF;e=new HM;h=new Q6;h.y7=c;In(e,b,h);Bc(d,e);return c;}
var Z$=G();
function AKM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new VX;HI(c,b);c.eV=H6(0,0,300,300);c.gm=Sw(0,0,3,3);d=b.O;b=b.p.bO;e=new AAZ;e.mI=c;Bc(b,e);b=AKh(d);c.zY=b;FJ(c.eV,b);FS(c.eV);b=c.eV.bk;FC();BO(b,A5O);BO(c.eV.W,Dv(204,120,50));APB();e=A5P;f=DJ((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CT(d);switch(e.fF){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new EZ;X(b);N(b);}b:
{V9(m,5,5,h);b=m.eA.dS;switch(e.fF){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new EZ;X(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.ne=m;V(c.gm.t,BZ(m),Dl(c.ne));BO(c.gm.bk,c.py);return c;}
var Z9=G();
function AXd(a,b){var c,d,e;c=new Sd;HI(c,b);c.gI=H6(0,0,300,300);c.l8=new Bg;c.ke=new Bg;c.jA=new Bg;d=b.O;b=b.p.bO;e=new W1;e.j9=c;Bc(b,e);b=AKh(d);c.qy=b;FJ(c.gI,b);FS(c.gI);b=c.gI.bk;FC();BO(b,A5O);BO(c.gI.W,Dv(204,120,50));return c;}
var Z8=G();
function APX(a,b){var c,d,e,f;c=new ZL;Eh(c,b);c.CO=20;c.Ex=11;c.Dj=220;c.lN=new Bg;c.D4=5000;c.id=1;c.gB=I(Hg,[CB(0),CB(255)]);c.eC=b.O;d=b.p.bO;e=new XY;e.lB=c;f=new Uc;f.sM=e;e.qh=f;Bc(d,e);b=b.p.fi;d=new Vp;d.q7=c;Bc(b,d);b=HC(c.eC,200,220);c.oe=b;Hq(b,C(156),20.0);b=HC(c.eC,200,20);c.gq=b;Hq(b,C(156),20.0);c.iu=I4();return c;}
var ZY=G();
function ANg(a,b){var c,d,e;c=new Kc;HI(c,b);Bc(b.p.bO,c);d=b.p.bF;e=new ACu;e.vM=c;Bc(d,e);Bc(b.p.gx,new ACt);d=b.p.gx;e=new ACs;e.rX=c;Bc(d,e);Bc(b.p.g0,new ACr);d=b.p.g0;e=new ACw;e.yQ=c;Bc(d,e);b=!U1(b.bV)?C(164):C(165);d=new K;M(d);H(H(d,C(166)),b);$rt_globals.console.info($rt_ustr(L(d)));return c;}
var ZX=G();
function ATA(a,b){var c,d;c=new R2;HI(c,b);c.tv=CB(20);c.f9=H6(0,0,300,300);c.uY=DM(C(14),80.0);b=b.p.bF;d=new RM;d.CV=c;Bc(b,d);return c;}
var ZV=G();
function A0y(a,b){var c;c=new SI;Op(c,b);Hb(c.ch,0,0,300,300);V(c.df,300,300);return c;}
var ZU=G();
function APe(a,b){var c;c=new SH;Op(c,b);c.fQ=new Bg;c.f$=new Bg;V(c.d1,150,140);V(c.df,500,100);V(c.fe,150,200);V(c.eB,500,250);return c;}
var ZT=G();
function AZD(a,b){var c,d,e;c=new Xk;G6(c,b);c.Dz=3;c.xD=DM(C(167),20.0);Bc(c.q.ei,c);BO(c.dJ,CB(43));d=b.p.bF;e=new YK;e.CD=c;Bc(d,e);b=b.p.c1;d=new YJ;d.wm=c;Bc(b,d);return c;}
var ZS=G();
function AKv(a,b){return A3j(b);}
var ZR=G();
function AZp(a,b){var c,d,e,f;c=new P$;H2(c,b);BO(c.dJ,CB(43));c.lO=PQ(c.bb);d=b.p.bF;e=new HM;f=new Pa;f.Aq=c;In(e,b,f);Bc(d,e);b=b.p.c1;d=new Pb;d.yl=c;Bc(b,d);return c;}
var Z2=G();
function AYI(a,b){var c,d;c=new Rk;H2(c,b);c.o7=null;c.ml=JJ();c.jb=JJ();b=b.p.c1;d=new WU;d.xg=c;Bc(b,d);return c;}
var Z1=G();
function AMc(a,b){var c;c=new Yd;H2(c,b);c.u2=L5();BO(c.dJ,CB(43));return c;}
var Z0=G();
function AWq(a,b){return A2Y(b);}
var ZZ=G();
function AN3(a,b){var c,d,e;c=new Pl;H2(c,b);c.um=L5();BO(c.dJ,CB(43));d=b.p.c1;e=new TV;e.By=c;Bc(d,e);b=b.p.bF;d=new TU;d.s_=c;Bc(b,d);return c;}
var Z4=G();
function AN4(a,b){var c,d;c=new Td;H2(c,b);c.mn=L5();BO(c.dJ,CB(43));b=b.p.c1;d=new Z_;d.qr=c;Bc(b,d);return c;}
var Z3=G();
function AUg(a,b){var c;c=new Oy;AGX(c,b);AJB(c.dM);return c;}
function ACq(){var a=this;B.call(a);a.tJ=null;a.zR=null;a.y9=null;}
function Ia(){var a=this;B.call(a);a.bJ=0;a.cJ=0;a.dr=0;a.kh=0;}
function A5Q(a,b,c,d){var e=new Ia();AA2(e,a,b,c,d);return e;}
function AA2(a,b,c,d,e){a.bJ=d;a.cJ=b;a.dr=c;a.kh=e;}
function P3(){var a=this;Ia.call(a);a.d7=null;a.bl=0;a.jw=0;a.yN=0;a.om=0;}
var AGb=G();
function Uk(b,c){return (b+(c/2|0)|0)/c|0;}
function Ya(b,c,d){if(b<(2147483647/c|0))return Uk(Bb(b,c),d);return 0.5+c*b/d|0;}
function H5(b,c){return ((b+c|0)-1|0)/c|0;}
function Gw(b){return b+0.5|0;}
function CV(b){return b+0.5|0;}
function E0(b,c,d){return Bd(b,Be(c,d));}
function MT(b,c){return AHs(b)/AHs(c);}
function Or(){var a=this;Ia.call(a);a.h=null;a.Di=null;}
var SU=G(0);
function O_(){var a=this;B.call(a);a.uZ=null;a.u0=null;}
function AXe(a,b){var c,d;c=a.uZ;d=a.u0;$rt_globals.console.info("paste plain string "+b);c.j(HY(b));DB(d);}
function ABe(){B.call(this);this.vg=null;}
function AB4(a,b){a.vg.clipboardData.setData("text/plain",$rt_ustr(b));}
function ACy(){var a=this;MU.call(a);a.Cd=0;a.v9=0;}
function CE(){var a=this;B.call(a);a.i=null;a.k=null;a.bN=0.0;}
function ATn(){var a=new CE();EX(a);return a;}
function EX(a){a.i=new Bg;a.k=new Bg;}
function ARc(a){}
function AX_(a){return BF(0,0);}
function HJ(a,b,c,d){var e;if(!JN(a.i,b)){a.mx(b);Ct(a.i,b);}if(!JN(a.k,c)){a.ov(c);Ct(a.k,c);}e=a.bN;if(e!==d){a.bN=d;a.le(e,d);}}
function Dw(a,b){return Cf(b,a.bN);}
function B2(a,b){return Ht(b,a.i,a.k);}
function AJ6(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;AN6();Bs(b,d,e,f,A5R);}
function ABC(a,b){var c;c=a.i;LH(b,c.a,c.b,a.k);}
function AUV(a,b){return 0;}
function AO$(a,b){}
function ASK(a,b){}
function AZc(a,b,c){}
function ASS(a){}
function ANY(a,b,c,d){return 0;}
function ALS(a,b,c){return null;}
function APN(a,b,c){return 0;}
function ASz(a,b){return 0;}
function AY7(a,b,c,d){return 0;}
function AEv(){var a=this;CE.call(a);a.g5=null;a.k0=null;a.k1=null;a.kY=null;a.kZ=null;a.eS=null;a.hv=null;a.hw=null;a.jW=null;}
function AUQ(a){var b=new AEv();AMg(b,a);return b;}
function AMg(a,b){EX(a);a.k0=new Bg;a.k1=new Bg;a.kY=new Bg;a.kZ=new Bg;a.g5=b;}
function AB8(a,b,c){a.hv=b;a.hw=c;}
function AFK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=a.i;Bs(b,c.a,c.b,a.k,a.jW.br.d9);if(a.eS===null)return;d=Cz(a.g5,2.0);e=GD(a.eS,a.hv.kX(),1);f=GD(a.eS,a.hv.j$(),1);g=GD(a.eS,a.hw.kX(),0);h=GD(a.eS,a.hw.j$(),0);i=Be(e,g);j=Bd(f,h);h=BL(i,j);if(h<=0)B9(b,1);k=a.hv.uj();l=a.hw.pb();m=a.g5.pD;while(i<=j){n=a.eS.ih.data[i];if(n.ou){o=a.hv.ht(n.hV);p=a.hv.ht(n.hV+n.nP|0);q=a.hw.ht(n.hU);r=a.hw.ht(n.hU+n.nO|0);V(a.k0,a.i.a,o);V(a.kY,a.i.a,p);V(a.k1,a.i.a+a.k.a|0,q);V(a.kZ,a.i.a+a.k.a|0,r);s=Bd(Be(o,q),
a.i.b);t=Be(Bd(p,r),a.i.b+a.k.b|0);if(t>s){V(m,a.k.a,t-s|0);c=a.jW;u=JQ(c.dV,c,n.ou);if(o==p){n=a.g5.du;V(n,a.i.a-k.a|0,d);if(q>=o){c=a.kY;V(c,c.a,c.b+d|0);g=o;}else{g=o-d|0;c=a.k0;V(c,c.a,c.b-d|0);}Bs(b,k.a,g,n,u);}if(q==r){n=a.g5.du;V(n,l.a,d);if(o>=q){c=a.kZ;V(c,c.a,c.b+d|0);}else{q=q-d|0;c=a.k1;V(c,c.a,c.b-d|0);}Bs(b,a.i.a+a.k.a|0,q,n,u);}ADr(b,a.i.a,s,m,a.k0,a.k1,a.kY,a.kZ,u);}}i=i+1|0;}if(h<=0)B9(b,0);}
function AE1(){var a=this;B.call(a);a.b6=null;a.dm=null;a.im=null;}
function PQ(a){var b=new AE1();ALl(b,a);return b;}
function ALl(a,b){a.b6=b;}
function Im(a,b){var c;a.im=b;c=a.dm;if(c!==null)GQ(c,b.dA);c=a.b6.d0;if(c!==null)Ga(c,b.dA,b.kA);}
function YN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=AOh();i=c.m;j=0;while(j<i){if(f===null){k=(Bx(c,j)).bq;l=Zg(FE(Cc(g.g,k)));m=ZO(g.f0);}else{n=f.data;k=n[j].o$.mX;l=!BS(g.f0,n[j].lF)?C(21):Zg(FE(Cc(g.g,k)));m=ZO(n[j].lF);}if(J(l)>153){o=Cs(l,0,150);n=new K;M(n);H(H(n,o),C(168));l=L(n);}if(J(m)>153){n=Cs(m,0,150);o=new K;M(o);H(H(o,n),C(168));m=L(o);}n=Dj(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=Bx(c,j);}if(f!==null){q=new ACH;q.r1=d;q.r2=p;}else{q=new ACI;q.Az=d;q.Ay=
o;}VE(h,m,n,l,q);j=j+1|0;}r=ACk(h);if(a.dm!==null)AAf(a);c=a.b6.dE;g=new QS;f=new ZJ;f.qe=a;f.qf=d;AJ0(g,c,f);Wv(g,r);d=a.im;Vz(g,d.dA,d.AM);d=ADC(c);a.dm=d;d.pr=d.pr|1;d=Gx(g,c);f=a.im.dA;I$(d,f.mD,f.on);K1(a.dm,d);GQ(a.dm,a.im.dA);d=a.dm;f=new K;M(f);H(H(f,C(169)),e);FM(d,L(f));GA(a.b6,a.dm);d=a.dm;i=(d.Q.k.b+Cz(d.bo,2.0)|0)+Cz(c,2.0)|0;s=(g.dU+g.eF|0)+g.hq|0;t=Cz(g.bT,5.0);e=BF(E0(t,b.a,g.bT.bR.a-s|0),E0(i,b.b,g.bT.bR.b-g.cF.b|0));XS(g);KO(g);i=Ef(g);s=g.b2.data.length;i=Bb(i,s)+Bb(g.dI,s+1|0)|0;V(g.cF,g.k.a,
i);i=(g.dU+g.eF|0)+g.hq|0;b=g.bT;s=(b.bR.a-e.a|0)-Cz(b,5.0)|0;b=g.bT;t=(b.bR.b-e.b|0)-Cz(b,5.0)|0;d=BF(Be(i,s),Be(g.cF.b,t));Ep(a.dm,e,d);FF(c,g);}
function AAf(a){Ko(a.b6,a.dm);NC(a.dm);a.dm=null;}
function K7(a,b,c){var d,e;d=a.b6;e=a.im;d=Yw(d,e.dA,e.kA);Lf(d,b,c);Fl(a.b6,d);}
function GF(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;h=new Sr;h.ga=a;h.bu=c;h.q1=g;h.iZ=e;h.nZ=f;h.l0=d;c=Lr();e=h.bu.d;d=D8(e);e=Hw(e);f=h.bu.fn;if(YA(f,d,e)!==null){i=new RE;i.we=h;i.wf=b;DZ(c,C(170),i);}if(Oc(f,d,e)!==null){i=new RF;i.x1=h;i.x2=b;DZ(c,C(171),i);}if(AAW(f,d,e)!==null){e=new RD;e.p3=h;e.p5=b;DZ(c,C(172),e);}e=new RC;e.uw=h;e.uv=b;DZ(c,C(173),e);HO(h);if(LN()){if(!h.bu.eO){e=new Q9;e.Av=h;DZ(c,C(174),e);}e=new Q$;e.rr=h;DZ(c,C(175),e);if(!h.bu.eO&&U1(HO(h))){e=new Q8;e.yY=h;DZ(c,C(176),e);}}e=Lr();j
=Q(BK,5).data;j[0]=C(177);j[1]=C(178);j[2]=C(179);j[3]=C(180);j[4]=C(181);k=j.length;l=0;while(l<k){f=j[l];g=new P4;g.wc=h;g.wd=f;DZ(e,f,g);l=l+1|0;}Fz(c,C(182),GR(e));m=Lr();j=Q(B3,3);n=j.data;f=h.l0;BD(f);g=new OZ;g.rd=f;n[0]=C3(C(183),g);f=h.l0;BD(f);g=new O0;g.rQ=f;n[1]=C3(C(184),g);f=h.l0;BD(f);g=new OY;g.vr=f;n[2]=C3(C(185),g);IW(m,C(186),Dy(j),A5S);j=Q(B3,2);n=j.data;g=h.iZ;BD(g);i=new UA;i.xW=g;n[0]=C3(C(187),i);g=h.iZ;BD(g);i=new Uz;i.uf=g;n[1]=C3(C(188),i);Fz(m,C(189),Dy(j));g=new Xx;g.qM=h;IW(m,C(190),
g,A5S);if(h.bu.cG.b4.lE){j=Q(B3,2);n=j.data;g=new Zy;g.wM=h;n[0]=C3(C(191),g);g=new Zz;g.xu=h;n[1]=C3(C(192),g);Fz(m,C(193),Dy(j));}Fz(c,C(194),GR(m));e=Lr();Fz(e,C(195),AIk(h));g=new X_;g.vt=h;DZ(e,C(196),g);i=new Ox;i.wV=h;IW(e,C(197),i,A5S);Fz(c,C(198),GR(e));K7(a,b,GR(c));}
function AEd(b){var c;c=new Rr;c.yS=b;return c;}
var FO=G(0);
function AYa(a){}
function ANm(a){}
var QE=G(0);
var Me=G(0);
function AEB(){var a=this;CE.call(a);a.cG=null;a.bi=null;a.kt=null;a.A4=0;a.nX=null;a.c_=null;a.nk=0;a.hp=0.0;a.lU=null;a.Cc=null;a.fO=null;a.U=0;a.c7=0;a.d=null;a.fn=null;a.eg=null;a.eK=null;a.z4=0;a.yJ=0;a.cX=0;a.cf=0;a.cj=0;a.h7=null;a.fJ=null;a.fq=null;a.jd=0;a.jP=0;a.Ez=0;a.Bv=0;a.kF=0;a.lz=0;a.pw=0;a.d6=0;a.da=null;a.fk=null;a.eO=0;a.ce=0;a.Bl=null;a.jN=null;a.yi=null;a.tG=null;a.mH=null;a.bw=0;a.cI=null;a.r4=0;a.q3=null;a.ud=null;}
function KZ(a,b){var c=new AEB();AQ5(c,a,b);return c;}
function AQ5(a,b,c){var d,e,f;EX(a);a.A4=0;a.nX=Q(Z,10);a.c_=AWk();a.hp=16.0;a.lU=C(156);a.d=A3c(Q(BK,0),null,null);d=new ACQ;d.xz=CS(Q(Nd,0));d.A2=CS(Q(Nd,0));d.p_=CS(Q(Z6,0));d.uN=CS(Q(Yf,0));d.uo=CS(Q(G_,0));d.zU=CS(Q(R5,0));a.fn=d;a.eK=Q(Fk,0);a.h7=BF(1,0);a.fJ=I4();a.fq=I4();a.jd=0;a.jP=1;a.kF=1;a.lz=1;a.pw=1;a.d6=3;a.da=AGG();a.fk=C(199);a.eO=0;a.ce=0;e=Ek();BD(e);d=new WM;d.Cw=e;a.jN=d;a.bw=0;e=new WL;e.pX=a;a.q3=e;e=new WK;e.sx=a;a.ud=e;a.cG=b;a.bi=b.b4;a.kt=c;c=AOU(b.cv);a.cI=c;a.fO=c.gQ;f=a.nX.data;b
=new WJ;b.z8=a;f[1]=b;b=new WQ;b.wN=a;f[2]=b;b=new WP;b.tf=a;f[3]=b;b=new WO;b.vz=a;f[4]=b;b=new WN;b.qP=a;f[5]=b;b=new WI;b.yx=a;f[6]=b;KT(a.d,a,FH(a));}
function Sv(a,b,c){var d,e,f,g,h;d=!c?a:null;if(c)e=null;else{e=new SK;e.qE=a;}f=new SJ;f.t2=a;g=new SM;g.xF=a;if(d!==null)Bc(b.bO,d);if(e!==null)Bc(b.fi,e);Bc(b.gx,f);Bc(b.g0,g);h=new SL;h.De=d;h.Dc=b;h.Dd=e;h.Df=f;h.Dg=g;return h;}
function Mg(a,b,c,d){HJ(a,b,c,d);ZP(a,b,c,d);}
function AQo(a,b,c){UH(a,a.lU,a.hp);PB(a.cI,c);}
function A1g(a,b,c){a.yi=b;a.tG=c;}
function ZP(a,b,c,d){var e;a.cX=Cf(80.0,d);a.cf=Cf(1.0,d);a.cj=Cf(10.0,d);e=!a.ce?b.a:(b.a+c.a|0)-Ik(a)|0;V(a.cG.du,e,b.b);RS(a.da,a.cG.du,Be(Ik(a),c.a),c.b,d);b=a.c_;e=Cf(2.0,d);b.eH.t.a=e;}
function AVY(a){a.nk=1;NN(a);}
function AT8(a){a.nk=0;}
function NN(a){X3(a.c_,MI(FH(a)));}
function Hy(a,b){var c,d;a.eg=b;c=a.c_;d=b.br.A1;BO(c.eH.W,d);c=a.fJ;d=b.br;H1(c,d.ll,d.lq);c=a.fq;b=b.br;H1(c,b.ll,b.lq);}
function Wz(a){Og(a,a.cI.cR.nS,a.hp+1.0);}
function ADe(a){var b;b=a.hp;if(b<=7.0)return;Og(a,a.cI.cR.nS,b-1.0);}
function PC(a,b){Og(a,b,a.hp);}
function AQ3(a,b){Ou(a.cG,b);}
function Og(a,b,c){if(a.cG.cb!==0.0){UH(a,b,c);Jm(FH(a));}a.hp=c;a.lU=b;}
function LK(a){var b,c,d;b=a.cI;c=a.cG.cv;d=a.bi;b.iD=c;if(b.hu.i4!=c&&b.dX)ADd(b,d);Sn(a.eK);Iv(a.da);NR(a);}
function UH(a,b,c){var d,e,f,g,h,i,j,k;d=a.bN;e=c*d;Cf(c,d);f=a.cI.cR;d=f===null?0.0:f.ox;if(!(e===d&&BS(b,a.lU))){Iv(a.da);Ob(a.eK);g=a.d.g.A.data;h=g.length;i=0;while(i<h){EV(g[i]);i=i+1|0;}j=a.cI;f=a.bi;j.cR=AIa(b,e,300,600,j.gQ,f);f=a.cI;a.Cc=f.cR;a.U=RW(f,1.25,a.bi);a.c7=CV(a.cI.cR.pE);a.c_.eH.t.b=E1(a.cI.cR);h=E1(a.cI.cR);i=a.U;k=UP(a.c_);f=new K;M(f);b=H(H(f,C(200)),b);BM(b,32);U(H(U(H(U(H(EC(b,e),C(201)),h),C(202)),i),C(203)),k);$rt_globals.console.info($rt_ustr(L(f)));if(A5T){h=M0(a.cI.cR,a.U);b=new K;M(b);U(H(b,
C(204)),h);$rt_globals.console.info($rt_ustr(L(b)));}a.d.ii=GN(FU(a),a.d.z,a.bi.cd,a.fO);H4(a);NR(a);}}
function AUt(a){Ob(a.eK);XJ(a.cI);Iv(a.da);}
function Oq(a){return Bb(CI(a.d.g)+5|0,a.U);}
function KN(a){return Bd(Oq(a)-a.k.b|0,0);}
function AAg(a){return Bd(a.jd-Gc(a)|0,0);}
function Gc(a){var b;b=!a.ce?0:a.c7+a.cj|0;return Bd(1,(a.k.a-a.cX|0)-b|0);}
function Ik(a){return a.ce?a.cX:a.cX-a.cj|0;}
function Eg(a){return a.k.b;}
function IT(a,b){var c,d,e;c=a.d.g;if(AAG(c)&&b-c.y0>0.03125?1:0){d=a.r4;e=a.d.g.cl;if(d!=e){a.r4=e;Y3(a);}}if(a.U)AAb(a);d=AAQ((a.bw+a.Ez|0)-a.Bv|0,KN(a));e=a.bw==d?0:1;if(e)FW(a,d);return !AAh(a.c_,b)&&!e&&!a.A4?0:1;}
function ID(a,b){var c,d;b=AAQ(b,AAg(a));c=a.d;d=b==c.dK?0:1;if(d)c.dK=b;if(d){c=a.yi;if(c!==null)c.f();}}
function FW(a,b){var c;if(AIo(a,b)){c=a.tG;if(c!==null)c.f();}}
function AIo(a,b){var c,d;c=AAQ(b,KN(a));d=c==a.bw?0:1;if(d){a.bw=c;a.d.mg=c/a.U;}return d;}
function AGj(a){return BF((Ik(a)+a.cf|0)+a.cj|0,a.U);}
function ARS(a){return a.U;}
function AXD(a,b){Ii(a);}
function Ii(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=H5(a.k.b,a.U)+7|0;c=a.eK;if(c.data.length<b)a.eK=YD(b,c,a.cI,a.z4,a.yJ,a.d.g);B9(a.bi,0);Nm(a.bi,a.i,a.k);d=(a.U-UP(a.c_)|0)/2|0;b=a.d.ii-(So(a.c_)/2|0)|0;e=a.d;f=b-e.dK|0;g=!a.ce?a.cX:(a.cf+a.cj|0)+a.c7|0;TA(a.c_,g+f|0,(d+Bb(e.w,a.U)|0)-a.bw|0);h=CI(a.d.g);i=Tb(a);j=Ta(a);a.z4=i;a.yJ=j;k=!a.ce?a.i.a+a.cX|0:((a.i.a+a.cf|0)+a.cj|0)+a.c7|0;l=Gc(a);c=a.d.lg;m=Dw(a,40.0);n=i;while(n<=j&&n<h){o=Cc(a.d.g,n);p=ABD(a,n);WW(p,o,a.bi,a.U,l,a.d.dK,n,
n%a.eK.data.length|0);a.jd=Bd(a.jd,Fy(o)+m|0);b=a.U;q=Bb(b,n)-a.bw|0;r=c===null?null:c.data[n];d=a.i.b+q|0;e=a.bi;g=a.d.dK;s=a.eg;t=AJd(Bj(a),n);if(t!==null){if(t.b==(-1))t.b=o.R;t.a=GN(o,t.a,a.bi.cd,a.fO);t.b=GN(o,t.b,a.bi.cd,a.fO);}o=a.d;PX(p,d,k,e,l,b,g,s,t,o.iJ,o.iv,o.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cG.du;n=i;while(n<=j&&n<h&&a.kF){p=ABD(a,n);q=Bb(a.U,n)-a.bw|0;r=Bj(a);if(!Du(r))u=0;else{o=En(r);r=FZ(r);u=o.J<=n&&n<r.J?1:0;}s=a.eg;r=s.br;v=r.sf;w=a.d.w==n&&c===null?1:0;a:{if(u)v=r.kD;else{if(c!==null)
{x=c.data;if(n<x.length&&x[n]!==null){v=JQ(s.dV,s,x[n].gU);break a;}}if(w)v=r.gc;}}AHQ(p,a.bi,k,a.i.b+q|0,a.U,e,a.d.dK,l,v);n=n+1|0;}if(a.jP){y=Be(j+1|0,h);AJs(a,Bb(a.U,y)-a.bw|0,l);}AFF(a);AFe(a,i,j);if(a.lz)AGU(a,i,j,h);if(a.nk&&f>=(( -So(a.c_)|0)/2|0)){e=a.c_;p=a.k;if(AD2(e.eH.u,0,0,p))ABg(a.c_,a.bi,a.i);}AFs(a);AE4(a);F5(a.bi);}
function AGU(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.lg;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.eg;h=JQ(h.dV,h,g.gU);}else h=e!==null?a.eg.br.d9:a.eg.br.gc;if(!(a.d.w!=b&&g===null)){g=a.h7;i=a.ce;g.a=!i?(a.cj-a.cf|0)-a.d6|0:((a.cj+a.c7|0)+a.cf|0)-a.d6|0;j=a.U;g.b=j;i=i?0:(a.cX-a.cj|0)+a.cf|0;j=Bb(j,b)-a.bw|0;k=a.bi;l=a.i;Bs(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AFe(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Be(d,Bb(CI(a.d.g),a.U)-a.bw|0);f=a.da;g=a.bw;h=a.d;i=h.lg===null?h.w:(-1);j=a.bi;k=a.eg;Nm(j,f.gk,f.fj);Sl(f,j,b,d);AAR(f,b,j);AAa(f,g,e,k,j);l=k.kS;if(e<d){h=f.gk;Bs(j,h.a,h.b+e|0,BF(f.fj.a,d-e|0),l.kL);}if(b<=i&&i<=c){k=k.kS;c=i/20|0;h=f.c0;l=Bx(h,c%h.m|0);h=f.gk;d=Bb(f.c0.m,f.g7);c=l.fh.b;b=((l.pO.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%Dl(l.cL)|0)|0;c=i%l.d5|0;e=l.cp;b=b+Bb(c,e)|0;if(b<( -e|0))b=b+d|0;V(l.i0,l.fh.a,e);f=l.jE;c=i%l.d5|0;d=l.cp;Cw(f,0.0,
Bb(c,d),l.fh.a,d);M7(l,j,b,h,k.wT,k.p0);}F5(j);}
function Tb(a){return Be(a.bw/a.U|0,CI(a.d.g)-1|0);}
function Ta(a){return Be(((a.bw+Eg(a)|0)-1|0)/a.U|0,CI(a.d.g)-1|0);}
function AQK(a,b){return Bb(a.U,b)-a.bw|0;}
function AQA(a){return a.i;}
function ATi(a){return a.k;}
function NR(a){X8(a.da,a.cI.cR,a.U,a.cG.cv);}
function ABD(a,b){var c;c=a.eK.data;return c[b%c.length|0];}
function Us(a,b){var c,d,e,f;c=E0(0,J(a.fk),O4(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BR;X(b);N(b);}if(c!=1){d=b.b$.data.length;if(d&&c){e=B4(Bb(d,c));d=0;f=0;while(f<c){Qw(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Mk(e);}else b=A4N;}}return b;}
function PF(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BN(i);k=A4g(i).data;Jo(j,c);c=0;l=k.length;if(c>l){f=new BR;X(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.g;o.cl=o.cl+1|0;p=Q(G3,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AR0(h[m],n[m],k[m],b[m],f.bq,f.bv);m=m+1|0;}BC(o.iz,p);c=0;while(c<i){b=e.data;M5(o,h[c],n[c],k[c],b[c]);g.pR(CU(h[c]),b[c]);c=c+1|0;}}
function AKi(a){var b;if(Du(Bj(a)))GK(a);else{b=a.d;OI(b.g,b.w,b.z);}H4(a);Eu(a);return 1;}
function DH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eO)return 0;if(Du(Bj(a)))GK(a);c=L6(ABo(b,C(205),C(21)),C(206),(-1));d=c.data;b=a.d;e=b.g;f=b.w;g=b.z;ADj(e,f,g,c);h=d.length;if(!h)b=A4N;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B4(i+Bb(h-1|0,J(C(206)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(206))){m=l+1|0;c[l]=P(C(206),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Mk(k);}FY(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CL(a,m,m!=f?J(d[h-1|0]):b.z+J(d[0])|0,0);F2(a);Eu(a);return 1;}
function GK(a){var b,c,d;b=En(Bj(a));c=a.d.g;d=Bj(a);OO(c,d,Ue(c,d));CL(a,b.J,b.Z,0);F2(a);Eu(a);}
function F2(a){var b,c;(Bj(a)).dl=0;b=(Bj(a)).bK;c=a.d;Ce(b,c.w,c.z);b=(Bj(a)).bA;c=a.d;Ce(b,c.w,c.z);}
function AJs(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cG.du;e.b=d-b|0;d=a.ce;e.a=!d?c+a.d6|0:c+a.cf|0;d=!d?(a.i.a+a.cX|0)-a.d6|0:(((a.i.a+a.cj|0)+a.c7|0)+a.cf|0)-a.d6|0;Bs(a.bi,d,a.i.b+b|0,e,a.eg.br.d9);}}
function AFs(a){var b;b=a.ce?a.i.a+a.c7|0:a.i.a+a.k.a|0;Kb(a.fJ,a.bw,a.i.b,Eg(a),Oq(a),b,a.c7);b=!a.ce?a.i.a+a.cX|0:((a.i.a+a.cf|0)+a.cj|0)+a.c7|0;Q0(a.fq,a.d.dK,b,Gc(a),a.jd,a.i.b+Eg(a)|0,a.c7);}
function AE4(a){var b,c;b=YP(a.fJ);c=YP(a.fq);if(!(!b&&!c)){B9(a.bi,1);if(b)GM(a.fJ,a.bi);if(c)GM(a.fq,a.bi);if(b)GT(a.fJ,a.bi);if(c)GT(a.fq,a.bi);}}
function AFF(a){var b,c,d,e,f;b=a.h7;c=a.k;b.b=c.b;b.a=a.cf;d=!a.ce?a.cX-a.cj|0:(c.a-Ik(a)|0)-a.cf|0;b=a.bi;c=a.i;Bs(b,c.a+d|0,c.b,a.h7,a.eg.br.tQ);b=a.h7;d=a.ce;b.a=!d?(a.cj-a.cf|0)-a.d6|0:((a.cj+a.c7|0)+a.cf|0)-a.d6|0;e=d?0:(a.cX-a.cj|0)+a.cf|0;c=a.bi;f=a.i;Bs(c,f.a+e|0,f.b,b,a.eg.br.d9);}
function AAQ(b,c){return Be(Bd(0,b),c);}
function FH(a){return a.cG.hr;}
function Jh(a,b){var c,d,e;c=EN(b);d=new K;M(d);H(H(d,C(207)),c);$rt_globals.console.info($rt_ustr(L(d)));Ws(FH(a),EN(b));CL(a,0,0,0);c=new AB3;c.x5=a;c.x6=b;d=Ek();BD(d);e=new AB2;e.wL=d;Up(b,c,e);}
function Ju(a,b,c,d,e){if(IJ(a,e))return 1;if(c&&d)return 1;if(c)FW(a,a.bw+((Bb(b,a.U)*12|0)/10|0)|0);else if(!d){Ij(a,a.d.w+b|0,e);AAS(a);}return 1;}
function RK(a,b,c,d){var e,f,g;if(IJ(a,d))return 1;e=FU(a);if(!c)f=a.d.z+b|0;else if(b>=0)f=G0(e,a.d.z);else{b=a.d.z;if(!b)f=(-1);else{c=J8(e,b);if(c>0&&e.em.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.em.data[c-1|0];}}if(f>e.R){e=a.d;if((e.w+1|0)<CI(e.g))CL(a,a.d.w+1|0,0,d);}else if(f>=0)Dz(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(Cc(e.g,b-1|0)).R;CL(a,a.d.w-1|0,g,d);}}ABR(a);return 1;}
function IJ(a,b){if(Du(Bj(a))&&!b){F2(a);H4(a);return 1;}if(!(b&&Du(Bj(a))))F2(a);return 0;}
function CL(a,b,c,d){a.d.z=c;return Ij(a,b,d);}
function Ij(a,b,c){var d;d=a.d;d.w=E0(0,b,CI(d.g)-1|0);return Dz(a,a.d.z,c);}
function Dz(a,b,c){var d,e;a.d.z=E0(0,b,(FU(a)).R);a.d.ii=a.bN===0.0?0:GN(FU(a),a.d.z,a.bi.cd,a.fO);NN(a);H4(a);if(c)(Bj(a)).dl=1;d=Bj(a);e=a.d;NO(d,e.w,e.z);(Bj(a)).dl=0;return 1;}
function Mm(a,b){var c;c=AVd(Bj(a));Dz(a,b,0);JC(Bj(a),c);}
function H4(a){AAS(a);ABR(a);}
function AAS(a){var b,c,d,e,f;b=a.bw;c=b+Eg(a)|0;d=a.d.w;e=a.U;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))FW(a,d-e|0);else if(f>(c-e|0))FW(a,(f-Eg(a)|0)+a.U|0);}
function ABR(a){var b,c,d,e,f;b=CV(a.cG.cb*30.0);c=a.d.dK;d=c+Gc(a)|0;e=a.d.ii;f=e+b|0;if(e<(c+b|0))ID(a,e-b|0);else if(f>(d-b|0))ID(a,(f-Gc(a)|0)+b|0);}
function IP(a,b){var c,d;CL(a,b.bq,b.bv,0);c=G0(FU(a),a.d.z);Ce((Bj(a)).bA,a.d.w,c);b=(Bj(a)).bK;d=a.d;Ce(b,d.w,d.z);}
function Fq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=E0(0,((b.b-d.b|0)+a.bw|0)/a.U|0,CI(a.d.g)-1|0);g=!a.ce?a.cX:(a.cf+a.cj|0)+a.c7|0;h=Bd(0,(e-g|0)+a.d.dK|0);b=Cc(a.d.g,f);d=a.bi.cd;i=a.fO;if(!(b.eL!==null&&!b.gP))Ni(b,d,i);j=b.eL;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.R;else{c=AAE(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.R;else{j=Zn(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A5U){b=new K;M(b);U(H(U(H(U(H(b,C(208)),e),C(209)),h),C(210)),m);$rt_globals.console.info($rt_ustr(L(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DQ(f,k);}
function U5(a,b){var c,d;c=a.d;d=b.bq;c.w=d;c.z=b.bv;c.ii=GN(Cc(c.g,d),a.d.z,a.bi.cd,a.fO);NN(a);}
function FU(a){var b;b=a.d;return Cc(b.g,b.w);}
function LF(a,b,c,d){var e,f;e=CV((a.U*4|0)*d/150.0);f=CV(c);if(e)FW(a,a.bw+e|0);if(f)ID(a,a.d.dK+f|0);return 1;}
function Ss(a,b,c){(Bj(a)).dl=0;return 1;}
function VQ(a,b,c){var d;if(c)return null;d=FX(a.fJ,b.h,a.q3,1);if(d!==null)return d;d=FX(a.fq,b.h,a.ud,0);if(d!==null)return d;I9(a);U5(a,Fq(a,b.h));Ln(a.d);if(!b.bJ&&!(Bj(a)).dl){b=(Bj(a)).bK;d=a.d;Ce(b,d.w,d.z);}(Bj(a)).dl=1;b=Bj(a);d=a.d;NO(b,d.w,d.z);b=new ACJ;b.ul=a;return b;}
function OL(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cJ){b=b.h;e=Fq(a,b);f=I3(a.d.g,e.bq,e.bv);g=Sh(a,f);h=Oc(a.fn,D8(a.d),Hw(a.d));if(h!==null){i=a.d;c=e.bq;d=e.bv;e=new ACn;e.B0=a;e.B1=b;e.BZ=g;h.s3(i,c,d,e,a.jN);}else{e=Co(a.d.g.dG,f);if(e!==null){IP(a,e);c=1;}else{e=Co(a.d.g.dx,f);if(e!==null&&!Ez(e)){if(e.m!=1){YN(a.kt,b,e,a,g);c=1;}else{IP(a,Bx(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Fq(a,b.h)).bq;g=Cc(a.d.g,c);c=GB(g,a.d.z);d=G0(g,a.d.z);b=N4(g,c);if((d-1|0)==g.R){Ce((Bj(a)).bK,
a.d.w,O4(g));Ce((Bj(a)).bA,a.d.w,g.R);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.b$.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.z;if(c==j){c=GB(g,c-1|0);d=G0(g,c);}else{if(d!=j){Qm(Bj(a),a.d.w);break b;}c=GB(g,d+1|0);d=G0(g,c);}}}Ce((Bj(a)).bK,a.d.w,c);(Bj(a)).dl=1;CL(a,a.d.w,d,0);(Bj(a)).dl=0;I9(a);}}break a;case 3:break;default:break a;}Qm(Bj(a),a.d.w);Y_(a.d.hQ);I9(a);}}return 1;}
function WR(a,b){var c,d,e,f,g,h,i,j;c=a.cG.cP;if(F3(a.fJ,b.h,c))return 1;if(F3(a.fq,b.h,c))return 1;d=a.da;if(Ht(b.h,d.gk,d.fj)&&Gy(c)?1:0)return 1;e=b.h;f=!a.ce?a.cX:(a.cj+a.cf|0)+a.c7|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=Gc(a);i=Eg(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return Gy(c);if(b.cJ){e=Fq(a,b.h);e.bv=GB(Cc(a.d.g,e.bq),e.bv);b=a.d.g;if(!MK(b.dG,e)&&!MK(b.dx,e)?0:1)return DV(c,C(211));}return DV(c,C(177));}
function A0Y(a,b){var c,d,e,f,g;c=b.cJ;if(c&&b.bl==65){c=CI(a.d.g)-1|0;d=Gq(a.d.g,c);Ce((Bj(a)).bK,0,0);Ce((Bj(a)).bA,CI(a.d.g)-1|0,d);return 1;}if(c&&b.bl==80){Mb(a.d);return 1;}if(!a.eO&&c&&b.bl==90){if(Du(Bj(a)))F2(a);b=a.d.g;b.cl=b.cl+1|0;e=b.iz;d=e.m;if(!d)e=null;else{f=(EH(e,d-1|0)).data;e=Wc(b,f[0]);c=1;while(c<f.length){Wc(b,f[c]);c=c+1|0;}}if(e!==null){CL(a,e.a,e.b,0);Eu(a);}return 1;}if(!c&&!b.dr){if(Bi(b.d7,C(212))){DH(a,C(213));Dz(a,a.d.z-1|0,0);c=1;}else if(Bi(b.d7,C(214))){DH(a,C(215));Dz(a,a.d.z
-1|0,0);c=1;}else if(Bi(b.d7,C(36))){DH(a,C(22));Dz(a,a.d.z-1|0,0);c=1;}else if(Bi(b.d7,C(216))){DH(a,C(217));Dz(a,a.d.z-1|0,0);c=1;}else if(Bi(b.d7,C(218))){DH(a,C(219));Dz(a,a.d.z-1|0,0);c=1;}else if(!Bi(b.d7,C(220)))c=0;else{DH(a,C(221));Dz(a,a.d.z-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dr&&!b.cJ)){d=b.bl;if(d>=48&&d<=57){c=d-48|0;e=a.nX.data[c];if(e!==null)e.f();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bl){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AIx(a,b))return 1;if(AFp(a,b))return 1;c=b.cJ;if(c&&b.bl==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bl;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dr&&!b.kh)return J(b.d7)>0&&DH(a,b.d7)?1:0;return 0;}return 0;}
function AAb(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=Tb(a);d=Ta(a);if(b.fI!=3&&b.hR==3){e=To(b.oX);f=new XP;f.zl=c;f.zm=d;g=new QT;g.rT=f;while(!g.ms&&AA_(e,g)){}if(!g.ms&&Bi(C(178),D8(b))){c=Bd(0,c-100|0);d=Be(CI(b.g)-1|0,d+100|0);BC(b.oX,BF(c,d));h=BN(3);i=h.data;i[0]=Fx(b.g,c);e=b.g;j=0;d=Be(d+1|0,e.A.data.length);k=0;while(k<d){j=j+Gq(e,k)|0;if(k!=(e.A.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.zo=EY();e=b.e2;l=new AAY;l.vQ=b;i=Q(B,3);m=i.data;m[0]=E6(b.g);m[1]=h;b=b.g.dc;g=BI();AAo(b,b.db,
g);h=BN(3*g.m|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bx(g,o);d=k+1|0;n[k]=b.bY;q=d+1|0;n[d]=b.bW;k=q+1|0;n[q]=b.fE;o=o+1|0;}m[2]=h;CR(e,l,C(222),i);}}}
function U3(a){Mb(a.d);}
function Y3(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.fD){c=EW(b);d=new K;M(d);H(H(d,c),C(223));$rt_globals.console.info($rt_ustr(L(d)));}c=D8(b);if(c!==null&&!Bi(C(177),c)){d=b.g.dc;e=Qi(d,d.db);if(e===null){N6(b);Kt(b.g);}else{f=DU([Dm(e),C_(e),e.bU.fE]);g=E6(b.g);h=BN(1);h.data[0]=AHg(c);d=b.g.eU;if(d.fr===null){i=BN(0);j=B4(0);}else{c=AS6(AU8(e.ci,d.e3),e);Wr(c);i=c.oh;j=c.mv;}k=b.g.cl;c=b.e2;d=new RJ;d.uS=b;l=Q(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BN(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CR(c,d,C(224),l);}}
else Kt(b.g);}
function G8(a,b,c){var d,e,f,g,h,i;if(c&&a.eO)return 0;d=En(Bj(a));e=d.J;if(Du(Bj(a))){f=a.d.g;g=Bj(a);h=Ue(f,g);if(c)OO(f,g,h);if(c){CL(a,d.J,d.Z,0);F2(a);Eu(a);}}else{h=Fn(FE(a.d.g.A.data[e]),C(206));i=Be(CI(a.d.g)-1|0,e);Ce((Bj(a)).bA,i,0);if(e>=(CI(a.d.g)-1|0))Ce((Bj(a)).bA,i,Gq(a.d.g,i));else Ce((Bj(a)).bK,i+1|0,0);if(c)GK(a);else CL(a,e,0,0);}b.j(h);return 1;}
function AFp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.eO)return 0;a:{switch(b.bl){case 8:if(Du(Bj(a))){GK(a);c=1;}else{b=a.d;d=b.z;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;OI(b.g,e,c);}else{e=b.w-1|0;c=Gq(b.g,e);b=a.d.g;Lt(b,e);FY(b,e,Gq(b,e),1,C(206));}Eu(a);c=CL(a,e,c,0);}}break a;case 9:if(!b.bJ){if(!Du(Bj(a)))DH(a,a.fk);else{f=En(Bj(a));g=FZ(Bj(a));c=g.J;d=f.J;e=(c-d|0)+1|0;h=BN(e);i=h.data;j=Q(BK,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fk;d=d+1|0;e=l;}b=new ABX;m=a.d;AIR(b,m.w,m.z);m=new SD;m.ua
=a;PF(a,h,0,0,j,b,m);f.Z=f.Z+J(a.fk)|0;g.Z=g.Z+J(a.fk)|0;Mm(a,a.d.z+J(a.fk)|0);Eu(a);}c=1;}else b:{if(!Du(Bj(a))){b=a.d;f=Cc(b.g,b.w);if(f.s.data.length>0){g=Us(a,f);if(g===null){c=1;break b;}m=a.d;n=m.g;e=m.w;b=DQ(e,m.z);n.cl=n.cl+1|0;o=n.iz;h=Q(G3,1);h.data[0]=AR0(e,0,1,g,b.bq,b.bv);BC(o,h);M5(n,e,0,1,g);HF(f,0,J(g));Mm(a,a.d.z-J(g)|0);}}else{b=En(Bj(a));f=FZ(Bj(a));c=f.J;p=b.J;c=(c-p|0)+1|0;h=BN(c);k=h.data;j=Q(BK,c);q=j.data;g=a.d;e=g.z;l=g.w;c=0;while(p<=f.J){g=Cc(a.d.g,p);if(g.s.data.length>0){g=Us(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Ja(h,c);j=Dg(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.J)b.Z=Bd(0,b.Z-J(g)|0);if(p==f.J){f.Z=Bd(0,f.Z-J(g)|0);Mm(a,a.d.z-J(g)|0);}d=d+1|0;}b=DQ(l,e);f=new Tw;f.sI=a;PF(a,h,0,1,j,b,f);}Eu(a);c=1;}break a;case 13:if(Du(Bj(a)))GK(a);b=a.d;EV(Cc(b.g,b.w));b=a.d;AJN(b.g,b.w,b.z);Eu(a);c=CL(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AKi(a);}return c;}
function AIx(a,b){var c,d,e,f;a:{switch(b.bl){case 33:c=b.cJ?Ij(a,H5(a.bw,a.U),b.bJ):Ju(a,2-Uk(Eg(a),a.U)|0,0,b.dr,b.bJ);break a;case 34:c=!b.cJ?Ju(a,Uk(Eg(a),a.U)-2|0,0,b.dr,b.bJ):Ij(a,((a.bw+Eg(a)|0)/a.U|0)-1|0,b.bJ);break a;case 35:if(!IJ(a,b.bJ)&&!Dz(a,(FU(a)).R,b.bJ)){c=0;break a;}c=1;break a;case 36:if(!IJ(a,b.bJ)&&!Dz(a,0,b.bJ)){c=0;break a;}c=1;break a;case 37:c=b.cJ;if(c&&b.dr){I9(a);d=a.d.hQ;e=d.dC;if(e<=0)d=null;else{f=d.ff.data;c=e-1|0;d.dC=c;d=f[c];}if(d===null)c=1;else{CL(a,LU(d),KG(d),0);JC(Bj(a),
d.od);c=1;}break a;}c=RK(a,(-1),c,b.bJ);break a;case 38:c=Ju(a,(-1),b.cJ,b.dr,b.bJ);break a;case 39:c=b.cJ;if(c&&b.dr){d=a.d.hQ;e=d.dC;if(e==(d.fc-1|0))d=null;else{f=d.ff.data;c=e+1|0;d.dC=c;d=f[c];}if(d===null)c=1;else{CL(a,LU(d),KG(d),0);JC(Bj(a),d.od);c=1;}break a;}c=RK(a,1,c,b.bJ);break a;case 40:c=Ju(a,1,b.cJ,b.dr,b.bJ);break a;default:}c=0;}if(c&&b.bJ){b=(Bj(a)).bA;d=a.d;Ce(b,d.w,d.z);}if(c)Ln(a.d);return c;}
function I9(a){var b,c,d,e,f,g,h;b=a.d;c=b.hQ;d=c.dC;c=d<0?null:c.ff.data[d];if(c!==null&&b.w==LU(c)&&a.d.z==KG(c))return;c=a.d;e=c.hQ;b=new Nz;d=c.w;f=c.z;c=Bj(a);b.o8=DQ(d,f);g=AVd(c);b.od=g;g.dl=0;f=e.dC;h=e.fc;if(f==(h-1|0))ABE(e,b);else{d=f+1|0;while(d<h){Y_(e);d=d+1|0;}ABE(e,b);}e.dC=e.dC+1|0;}
function Eu(a){a.d.g.y0=MI(FH(a));}
function HV(a,b){var c,d,e,f;a.Bl=null;LA(a.da,null);ADh(a.d);c=a.d;a.d=b;KT(c,null,null);KT(b,a,FH(a));d=(CA(a.fn.uo)).data;e=d.length;f=0;while(f<e){d[f].pR(c,b);f=f+1|0;}a.bw=Gw(b.mg*a.U);}
function Sh(a,b){var c;c=LO(a.d.g,b);if(c===null)return C(21);return c.v;}
function MS(a,b){var c,d,e,f,g;a.d.lg=b;if(b===null){Bk(Bt(),C(225));LA(a.da,null);}else{b=b.data;c=DJ(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gU<<24>>24;e=e+1|0;}LA(a.da,c);}}
function RO(a,b){a.d.pZ=b;}
function Bj(a){return a.d.q8;}
function Tz(a){var b;b=a.mH;if(b!==null)b.j(a);}
function AHh(){var a=this;B.call(a);a.lm=null;a.nE=null;a.h5=null;}
function ASn(a,b){var c=new AHh();AVl(c,a,b);return c;}
function AVl(a,b,c){var d,e;a.lm=b;a.nE=c;d=null;e=new T_;e.rV=a;b.oY(d,e);b=null;d=new Ua;d.rb=a;c.oY(b,d);}
function X4(a,b,c){var d,e,f,g,h,i,j;d=a.h5;if(d!==null&&d.ih!==null){e=b!==a.lm?0:1;f=b.kX();g=(b.j$()+f|0)/2|0;h=g-f|0;d=a.h5;d=d.ih.data[GD(d,g,e)];i=g-(!e?d.hU:d.hV)|0;j= -b.ht(f)|0;c.pN(Bb(((!e?d.hV:d.hU)+i|0)-h|0,c.o6())+j|0);return;}}
function Tj(){B.call(this);this.Ar=null;}
function ALh(a,b){VB(a.Ar,b);}
function Tk(){B.call(this);this.x9=null;}
function AZ3(a,b){VB(a.x9,b);}
function Tl(){B.call(this);this.wg=null;}
function AOQ(a,b){return AGq(a.wg,b);}
function HM(){var a=this;B.call(a);a.oi=null;a.rZ=null;a.rv=null;}
function A5V(a,b){var c=new HM();In(c,a,b);return c;}
function In(a,b,c){var d;d=null;a.oi=b.bV;a.rZ=d;a.rv=c;}
function ANp(a,b){var c,d;if(b.cJ&&b.bl==79){c=a.rZ;if(c!==null&&b.bJ)I5(a.oi,c);else N0(a.oi,a.rv);d=1;}else d=0;return d;}
function Th(){B.call(this);this.ub=null;}
function APA(a,b){var c,d;c=a.ub;d=DL(c.q,c.E)?c.E:!DL(c.q,c.G)?null:c.G;if(d!==null){Jh(d,b);c.kM=null;c.l9.h5=null;c.fv.eS=null;}}
function Ti(){B.call(this);this.sh=null;}
function A0z(a,b){b=b;return AIy(a.sh,b);}
var CZ=G(0);
function ACK(){var a=this;B.call(a);a.dE=null;a.cO=null;a.d0=null;}
function Yw(a,b,c){var d,e;d=Na(a.dE);Ga(d,b,c);b=a.dE;c=b.d3;e=new AB9;e.v5=b;e.v4=c;d.jI=e;return d;}
function Fl(a,b){var c;c=a.d0;if(c!==b)a.d0=BY(c,b);}
function Ej(a){var b;b=a.d0;if(b!==null){Mc(b);Fl(a,null);}}
function GA(a,b){Y9(a.cO,0,b);}
function Ko(a,b){T8(a.cO,b);}
function JF(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.cO.m-1|0;while(b>=0){c=Bx(a.cO,b);d=a.dE.b4;c.V.dp(d);e=c.Q;f=c.is.kO;if(!K_(e)){if(!N1(e)&&!(!e.ey&&e.dO!==null)){e.ey=0;ABv(e);g=e.eq;h=(g.ef+g.ex+5.0)/10.0;i=Cz(e.fX,e.kp);g=d.cd;j=e.eq;k=e.jq;l=h*2.0;Cm(g,j);m=i+Lg(g,k,l)|0;e.ib=m;m=E0(0,m,e.k.a);if(m){g=D2(d,m,e.k.b,e.fX.cv);Cm(g,e.eq);j=e.jq;l=i;h=l+h;k=e.eq;n=k.ef;BW(g,j,h,l+n-(n+k.ex)/16.0);j=e.dO;if(j===null){j=CT(d);e.dO=j;}CK(j,g);Ew(g);Cw(e.mi,0.0,0.0,BZ(e.dO),Dl(e.dO));}}g=f.yR;j=e.dO;if(j===null)Qj(e,
d,0,e.k.a,g);else{i=BZ(j);j=f.uL;k=e.i;m=k.a;o=k.b;k=e.dO;D4(d,m,o,k.fp,e.mi,k,j,g,e.fX.cv);m=e.k.a;if(i<m)Qj(e,d,i,m-i|0,g);}}B9(d,1);i=Cz(c.bo,2.0);m=K_(c.Q);g=c.bo;j=g.du;g=g.pD;o=m?0:c.Q.k.b;k=c.V.k;V(g,k.a,k.b+o|0);AH3(d,g,!m?c.Q.i:c.V.i,c.is.kO.o5, -i|0,j);g=c.V;AJc(d,g.k,g.i,i,o,XH(c.is.ld,c.bo.cb),c.is.ld.nz,j);b=b+(-1)|0;}c=a.d0;if(c!==null&&!Ez(c.cc)){B9(c.cS.b4,1);b=0;while(true){g=c.cc;if(b>=g.m)break;L3(Bx(g,b),c.cS);b=b+1|0;}}}
function J0(a,b){var c,d;c=a.dE;if(c.cv==b)d=0;else{c.cv=b;Jm(c.hr);d=1;}if(d){c=a.d0;if(c!==null){c=B6(c.cc);while(B$(c)){NV(B_(c));}}b=0;while(true){c=a.cO;if(b>=c.m)break;c=Bx(c,b);c.Q.ey=1;c.V.qV();b=b+1|0;}}return d;}
function ATM(a,b){var c,d,e,f,g,h;c=a.d0;if(c!==null){d=0;e=c.cc.m-1|0;a:{while(e>=0){d=NB(Bx(c.cc,e),b.h,c.cS.cP);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}e=0;while(true){c=a.cO;if(e>=c.m)break;b:{c=Bx(c,e);f=b.h;if(B2(c.Q,f))d=DV(c.bo.cP,null);else{d=Cz(c.bo,7.0);g=Cz(c.bo,25.0);if(MP(c,f.a,d)){h=WG(c,f.a,g);if(MW(c,f.b,d)){d=DV(c.bo.cP,LV(h,C(226)));break b;}if(Ky(c,f.b,d)){d=DV(c.bo.cP,LV( -h|0,C(226)));break b;}}if(N2(c,f.b,d)){g=ACB(c,f.b,g);if(Oj(c,f.a,d)){d=DV(c.bo.cP,LV(g,C(227)));break b;}if(Mw(c,
f.a,d)){d=DV(c.bo.cP,LV( -g|0,C(227)));break b;}}d=0;}}c:{d:{if(!d){if(!B2(c.V,b.h))break d;if(!c.V.bQ(b)&&!DV(c.bo.cP,null))break d;}d=1;break c;}d=0;}if(d)return 1;e=e+1|0;}return 0;}
function AL1(a,b,c,d){var e,f,g,h,i;e=a.d0;if(e!==null){f=0;g=e.cc.m-1|0;a:{while(g>=0){f=NY(Bx(e.cc,g),b.h,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=0;while(true){e=a.cO;if(h>=e.m)break;b:{c:{i=Bx(e,h);if(!B2(i.Q,b.h)){d:{e:{f:{e=b.h;f=Cz(i.bo,7.0);if(MP(i,e.a,f)){if(MW(i,e.b,f))break f;if(Ky(i,e.b,f))break f;}if(!N2(i,e.b,f))break e;if(!Oj(i,e.a,f)&&!Mw(i,e.a,f))break e;}f=1;break d;}f=0;}if(!f){if(!L4(i,b))break c;if(!i.V.ct(b,c,d))break c;}}f=1;break b;}f=0;}if(f)return 1;h=h+1|0;}return 0;}
function AN0(a,b,c){var d,e,f,g,h,i,j,k;d=a.d0;if(d!==null){e=null;f=d.cc.m-1|0;a:{while(f>=0){e=Bx(d.cc,f);g=b.h;h=E7(e.ck,g);if(!h&&!K2(e.ck)){e=e.kx;if(e!==null)e.f();}e=!h?null:A5W;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=0;while(true){d=a.cO;if(i>=d.m)return null;b:{g=Bx(d,i);if(!c){c:{d=b.h;if(!K_(g.Q)&&B2(g.Q,d)){e=g.V.i;f=e.a;h=d.a;f=f-h|0;j=e.b;k=d.b;j=j-k|0;d=g.Q.i;h=d.a-h|0;k=d.b-k|0;e=new Bg;d=new Rx;d.qp=g;d.qn=h;d.qo=k;d.ql=e;d.qm=f;d.qk=j;}else{f=Cz(g.bo,7.0);h=Cz(g.bo,25.0);if
(MP(g,d.a,f)){j=WG(g,d.a,h);if(MW(g,d.b,f)){d=JU(g,d,j,(-1));break c;}if(Ky(g,d.b,f)){d=JU(g,d,j,1);break c;}}if(N2(g,d.b,f)){h=ACB(g,d.b,h);if(Oj(g,d.a,f)){d=JU(g,d,(-1),h);break c;}if(Mw(g,d.a,f)){d=JU(g,d,1,h);break c;}}d=null;}}if(d!==null)break b;}d=B2(g.Q,b.h)?A5W:!L4(g,b)?null:g.V.cu(b,c);}if(d!==null)break;i=i+1|0;}return d;}
function A0T(a,b,c){var d,e,f;d=a.d0;if(d!==null&&Jl(d))return 1;e=0;while(true){d=a.cO;if(e>=d.m)break;a:{b:{d=Bx(d,e);if(!B2(d.Q,b.h)){if(!L4(d,b))break b;if(!d.V.ds(b,c))break b;}f=1;break a;}f=0;}if(f)return 1;e=e+1|0;}return 0;}
function AWZ(a,b,c){var d,e,f;d=0;while(true){e=a.cO;if(d>=e.m)break;f=Bx(e,d);e=f.V;e.eY(e.i,e.k,c);e=f.Q;if(e.hn!==null){e.eq=null;e.ib=0;e.ey=1;}Io(f);d=d+1|0;}}
function S0(){var a=this;B.call(a);a.b4=null;a.hr=null;a.cP=null;a.bR=null;a.cb=0.0;a.cv=0;a.d3=null;a.ei=null;a.du=null;a.pD=null;a.Bg=null;a.Bh=null;}
function KB(a){var b;b=a.d3;if(b!==null)b.tK();}
function KR(a){var b;b=a.d3;if(b!==null)b.vx();}
function ML(a,b){var c;c=a.hr.el!==(Er()).activeElement?0:1;if(c)KR(a);a.d3=b;if(c)KB(a);}
function FF(a,b){KR(a);a.d3=b;KB(a);}
function AAC(a,b){if(a.d3===b)a.d3=null;}
function DL(a,b){return b!==a.d3?0:1;}
function J9(a){return a.b4.cd;}
function F9(a,b){return Tn(a.b4,b.hZ,b.gH,a.cb);}
function Cz(a,b){return Cf(b,a.cb);}
function Ou(a,b){var c;c=a.b4;if(!a.cv)c.pt=b;else c.nT=b;Jm(a.hr);}
function VH(){B.call(this);this.u_=null;}
function A0O(a,b,c,d){var e,f,g,h;e=a.u_;f=0;a:{while(true){g=e.cO;if(f>=g.m)break;if((Bx(g,f)).V.dq(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function AEn(){var a=this;B.call(a);a.eH=null;a.ow=0.0;a.iq=0.0;a.g1=0;}
function AWk(){var a=new AEn();AQI(a);return a;}
function AQI(a){var b;b=Sw(0,0,2,20);a.eH=b;a.ow=0.5;a.iq=0.0;Iy(187,187,187,255,b.W);}
function UP(a){return a.eH.t.b;}
function So(a){return a.eH.t.a;}
function AAh(a,b){var c,d;a:{c=a.g1;if(b>a.iq)while(true){d=a.iq+a.ow;a.iq=d;a.g1=a.g1?0:1;if(b>d)continue;else break a;}}return a.g1==c?0:1;}
function TA(a,b,c){V(a.eH.u,b,c);}
function X3(a,b){a.iq=b+a.ow*1.25;a.g1=1;}
function ABg(a,b,c){if(a.g1)Y5(a.eH,b,c.a,c.b);}
function AC1(){var a=this;B.call(a);a.f0=null;a.g=null;a.ps=null;a.q8=null;a.hQ=null;a.k7=null;a.e2=null;a.lg=null;a.w=0;a.z=0;a.ii=0;a.iJ=null;a.iv=null;a.oX=null;a.fI=0;a.hR=0;a.h4=0;a.iQ=FB;a.zo=FB;a.z$=FB;a.pZ=0;a.DN=0;a.dK=0;a.mg=0.0;a.fD=0;}
function A28(a,b,c){var d=new AC1();AJ5(d,a,b,c);return d;}
function AM4(a,b){var c=new AC1();AQc(c,a,b);return c;}
function A3c(a,b,c){var d=new AC1();UZ(d,a,b,c);return d;}
function AJ5(a,b,c,d){UZ(a,(AHF(b)).jY,c,d);}
function AQc(a,b,c){UZ(a,b,null,c);}
function UZ(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.q8=ALt();f=new SY;f.ff=Q(Nz,16);f.fc=0;f.dC=(-1);a.hQ=f;a.iJ=null;a.iv=BI();a.oX=BI();a.fI=1;a.hR=1;a.h4=1;a.dK=0;a.mg=0.0;a.fD=0;a.f0=d;a.ps=c;c=new Y6;g=e.length;b=Q(DG,Bd(1,g));if(!g)b.data[0]=W$(C(21));h=b.data;i=0;while(i<g){h[i]=W$(e[i]);i=i+1|0;}d=new XQ;f=new Nw;Qp(f);d.e3=f;c.eU=d;c.dG=JJ();c.dx=JJ();c.iz=BI();if(!h.length){c=new BR;X(c);N(c);}c.A=b;j=ABt(c);c.dc=AF0(ASr(KH(0,j,0),null,null));a.g=c;}
function D8(a){var b;b=a.ps;if(b===null){b=a.f0;b=b===null?C(177):AGZ(b.gz);}return b;}
function Hw(a){var b;b=a.f0;return b===null?null:b.j8;}
function Md(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.hR=3;a.h4=3;a.fI=3;c=CN(b[0]);d=EK(b[1]);CN(b[2]);if(b.length<5)NS(a.g,c,d);else{e=CN(b[3]);f=e.data;g=EK(b[4]);WS(a.g,c,d,e,g,0);S9(a,Ja(e,f.length),N7(g));}if(a.fD){h=EW(a);i=JE(EY(),a.iQ);j=new K;M(j);H(HE(H(H(j,h),C(228)),i),C(229));$rt_globals.console.info($rt_ustr(L(j)));}h=a.k7;if(h!==null)Tz(h);}
function Ln(a){var b;R6(a,DQ(a.w,a.z),I3(a.g,a.w,a.z));if(!(a.iJ!==null&&!Ez(a.iv))){b=a.z;if(b>0)R6(a,DQ(a.w,b-1|0),I3(a.g,a.w,a.z-1|0));}}
function R6(a,b,c){var d,e,f,g,h,i,j,k;ADh(a);d=Co(a.g.dG,c);if(d!==null)c=d;a:{e=Co(a.g.dx,c);if(e!==null){a.iJ=LO(a.g,c);c=B6(e);while(true){if(!B$(c))break a;f=B_(c);BC(a.iv,LO(a.g,f));}}}c=a.k7;if(c!==null){g=b.bq;h=b.bv;b=c.fn;f=D8(c.d);e=Hw(c.d);i=(CA(b.uN)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Ak(f,e)){b=b.CZ;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new OB;e.B6=c;e.B7=f;e.B4=g;e.B5=h;b.s3(f,g,h,e,c.jN);}}}
function ADh(a){a.iJ=null;Ir(a.iv);}
function S9(a,b,c){var d,e,f,g,h;if(a.e2!==null){a.z$=EY();d=a.g.cl;e=a.e2;f=new XI;f.yn=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BN(1);b.data[0]=d;h[2]=b;CR(e,f,C(230),g);}}
function KT(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.k7=b;a.e2=c;if(c===null){d=a.g.A.data;e=d.length;f=0;while(f<e){SG(d[f]);f=f+1|0;}}else if(a.fI==1){a.iQ=EY();b=D8(a);e=BS(b,C(178));f=BS(b,C(181));d=E6(a.g);g=d.data.length;h=!e?5120:10240;i=AHg(b);if(f)JG(a,d,i);else if(g<=h)JG(a,d,i);else if(!e){UO(a,N7(d),i);JG(a,d,i);}else{UO(a,N7(d),i);j=N7(d);c=a.e2;k=new AAX;k.y2=a;l=Q(B,2);m=l.data;m[0]=j;j=BN(1);j.data[0]=i;m[1]=j;CR(c,k,C(231),l);a.hR=2;JG(a,d,i);}}}
function UO(a,b,c){var d,e;d=a.e2;e=new Xq;e.t_=a;CR(d,e,C(232),I(B,[b,DU([c,250])]));a.h4=2;}
function JG(a,b,c){var d,e,f,g;d=a.e2;e=new Vr;e.qF=a;f=Q(B,2);g=f.data;g[0]=b;b=BN(1);b.data[0]=c;g[1]=b;CR(d,e,C(233),f);a.fI=2;}
function EW(a){var b;b=a.f0;return b===null?C(21):ABy(b);}
function Mb(a){var b,c,d,e,f;if(a.fD){b=EW(a);c=new K;M(c);H(H(c,b),C(234));$rt_globals.console.info($rt_ustr(L(c)));}b=D8(a);if(b===null)d=null;else{a:{e=(-1);switch(NG(b)){case -1655966961:if(!Bi(b,C(181)))break a;e=3;break a;case 3401:if(!Bi(b,C(180)))break a;e=2;break a;case 98723:if(!Bi(b,C(179)))break a;e=1;break a;case 3254818:if(!Bi(b,C(178)))break a;e=0;break a;case 3556653:if(!Bi(b,C(177)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(235);break b;case 2:d=C(236);break b;case 3:d
=C(237);break b;case 4:d=C(238);break b;default:d=null;break b;}d=C(239);}}if(d===null)Tz(a.k7);else{a.iQ=EY();b=a.e2;c=new ABz;c.vK=a;f=Q(B,1);f.data[0]=E6(a.g);CR(b,c,d,f);}}
function N6(a){var b;b=AS6(a.g.eU,null);Wr(b);S9(a,b.oh,b.mv);}
function ACQ(){var a=this;B.call(a);a.xz=null;a.A2=null;a.p_=null;a.uN=null;a.uo=null;a.zU=null;}
function Oc(a,b,c){return Ra(a,CA(a.xz),b,c);}
function YA(a,b,c){return Ra(a,CA(a.A2),b,c);}
function Ra(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Ak(c,d))return g.DY;f=f+1|0;}return null;}
function AAW(a,b,c){var d,e,f,g;d=(CA(a.p_)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Ak(b,c))return g.DT;f=f+1|0;}return null;}
function Fk(){var a=this;B.call(a);a.b9=0;a.c9=null;a.cz=null;a.eu=null;a.dB=0;}
var A5X=0;var A5T=0;function WW(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cz;j=i===b&&!i.i3?0:1;if(j){a.cz=b;Ni(b,c.cd,a.c9.gQ);}k=H5(Be(Fy(b),e+2048|0),1024);l=a.eu;m=l.data.length;n=k<=m?0:1;if(n){a.eu=Dg(l,k);while(m<k){a.eu.data[m]=CT(c);m=m+1|0;}}o=a.c9.hu;if(!(!j&&!n)){if(A5X){l=b.f8;$rt_globals.console.info("fMeasure"+l.data);A5X=0;}if(!A5T){c=o.c$;b="alphabetic";c.textBaseline=b;}else{b=o.c$;c="top";b.textBaseline=c;}a.dB=f/1024|0;p=0;while(p<k){J4(a,o,d,a.dB+p|0);p=p+1|0;}a.cz.i3=0;}e=a.eu.data.length;if
(e&&f<=Fy(a.cz)){f=f/1024|0;g=a.dB;if(f!=g){if(VM(f-g|0)>=e){g=0;while(g<e){J4(a,o,d,f+g|0);g=g+1|0;}a.dB=f;}else{while(true){g=a.dB;if(g>=f)break;J4(a,o,d,g+e|0);a.dB=a.dB+1|0;}while(true){g=a.dB;if(g<=f)break;J4(a,o,d,g-1|0);a.dB=a.dB-1|0;}}}}}
function J4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=XG(a,e);g=a.cz;if(f>=g.s.data.length)return;h=g.f8;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.b9;l=a.c9.gQ;EL(b);a:{while(true){g=a.cz;if(f>=g.s.data.length)break a;m=l.data;g=JL(g,f);n=m[Kp(g)];o=!A5T?Lz(n,c):M0(n,c);m=h.data;Cm(b,n);BW(b,g.v,k,o);k=m[f]-j+a.b9;if(k>1024.0)break;f=f+1|0;}}h=a.eu.data;CK(h[d%h.length|0],b);}
function PX(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.eu.data.length;if(!o)return;if(g>Fy(a.cz))return;p=a.cz;q=p.eL;r=p.s;s=g/1024|0;t=XG(a,g);u= -a.b9|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.eu.data[s%o|0];bb=w[t];bc=z[t]+a.b9|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.b9|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.b9:2*a.b9|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.b9:2*a.b9|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.br.gc;if(bb===j)bo=h.br.q4;if(k!==null){p=B6(k);d:{while(B$(p)){if(BS(B_(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.br.vv;}if(n!==null){w=n.nd;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=ADo(h.dV,h,bi,n.gU);}if(!bn&&!bl){i.b=Be(i.b,Fy(a.cz));AFc(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.b9:0)|0,(g
+bg|0)<=(i.b+(!y?a.b9:2*a.b9|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.b9:0)|0,g-x|0,bo);}else{bp=h.ju.data[bb.bX];p=bn?h.br.kD:Su(bo,Wg(h,bp.mr));Cw(a.c9.jc,g-x|0,0.0,bg,v);V(a.c9.h$,bg,f);G7(a.c9,d,ba,u+c|0,b,bp.gO,p);}if((bb.bE&12)>>2>0){bc=u+c|0;B9(d,1);p=a.c9;bq=p.nf;bq.a=bg;x=b+p.tm|0;bk=x-p.AQ|0;br=p.qg;bs=x+br;ba=p.hc;Tp();L1(d,bc,bk,bq,br,bs,ba,A5Y.kP.gO);B9(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AFc(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.ju.data[h.bX];o=n.gO;p=Su(m,Wg(f,n.mr));q=f.br.kD;f=a.c9;r=f.jc;s=f.h$;t=l;u=i-j|0;v=u;w=e;Cw(r,t,0.0,v,w);V(s,u,e);G7(a.c9,b,g,c,d,o,p);l=l+i|0;Cw(r,l-k|0,0.0,k,w);V(s,k,e);f=a.c9;c=c+i|0;G7(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cw(r,t,0.0,i,w);V(s,i,e);G7(a.c9,b,g,c-j|0,d,o,q);}
function Su(b,c){if(b!==null)c=b;return c;}
function XG(a,b){var c,d,e,f,g,h,i;c=a.cz;d=c.f8;e=0;f=c.s.data.length;g=b;b=BL(e,f);if(b>0){c=new BR;X(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BL(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AC$(a){var b,c,d;b=a.eu.data;c=b.length;d=0;while(d<c){AFA(b[d]);d=d+1|0;}a.eu=a.c9.nr;a.cz=null;}
function AHQ(a,b,c,d,e,f,g,h,i){var j,k;j=Fy(a.cz);if(j)j=j+a.b9|0;if(!j)j=j-a.b9|0;k=Bd( -a.b9|0,j-g|0);if(k>=h)return;V(f,h-k|0,e);Bs(b,c+k|0,d,f,i);}
function YD(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=Q(Fk,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.tp(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cz===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Fk;g.b9=3;g.dB=0;g.c9=d;g.eu=d.nr;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AC$(q);j=j+1|0;}return i;}
function Sn(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cz;if(e!==null)e.i3=1;d=d+1|0;}}
function Ob(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AC$(b[d]);d=d+1|0;}}
function AFf(){A5T=0;}
function AGM(){var a=this;B.call(a);a.fT=null;a.dg=null;a.eW=null;a.ft=null;a.oa=null;a.nY=null;}
function I4(){var a=new AGM();AWQ(a);return a;}
function AWQ(a){a.fT=new Bg;a.dg=new Bg;a.eW=new Bg;a.ft=new Bg;a.oa=new B0;a.nY=new B0;}
function YP(a){var b;b=a.dg;return !Bb(b.a,b.b)?0:1;}
function IF(a,b){return Ht(b,a.eW,a.ft);}
function FX(a,b,c,d){var e,f,g,h,i;e=IF(a,b);f=Ht(b,a.fT,a.dg);if(!e&&!f)return null;if(!f){if(!d)c.j(Uu(a,b.a-a.eW.a|0));else c.j(Qk(a,b.b-a.eW.b|0));}g=!d?a.fT.a+(a.dg.a/2|0)|0:a.fT.b+(a.dg.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new RR;b.u6=a;b.u7=c;b.u5=i;}else{b=new RQ;b.rk=a;b.ri=c;b.rj=i;}return b;}
function H1(a,b,c){if(c!==null)BO(a.oa,c);if(b!==null)BO(a.nY,b);}
function AEy(b,c){var d;d=new AA6;d.sK=b;d.Ba=c;return d;}
function Qk(a,b){var c,d,e;c=a.ft.b;d=a.dg.b;e=c-d|0;return AEy(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Uu(a,b){var c,d,e;c=a.ft.a;d=a.dg.a;e=c-d|0;return AEy(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Kb(a,b,c,d,e,f,g){UB(a,b,c,d,e,f,g,1);}
function Q0(a,b,c,d,e,f,g){UB(a,b,c,d,e,f,g,0);}
function UB(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(Ya(d,d,e),i);e=e-d|0;i=d-j|0;i=i?Ya(b,i,e):0;if(!h){k=a.fT;k.a=i+c|0;k.b=f-g|0;l=a.dg;l.a=j;l.b=g;l=a.eW;l.a=c;l.b=k.b;k=a.ft;k.a=d;k.b=g;break a;}k=a.fT;k.a=f-g|0;k.b=i+c|0;l=a.dg;l.a=g;l.b=j;l=a.eW;l.a=k.a;l.b=c;k=a.ft;k.a=g;k.b=d;break a;}}V(a.ft,0,0);V(a.dg,0,0);}}
function UQ(a,b){GM(a,b);GT(a,b);}
function GM(a,b){var c;c=a.eW;Bs(b,c.a,c.b,a.ft,a.oa);}
function GT(a,b){var c,d;c=a.dg;c.a=c.a-2|0;c.b=c.b-2|0;d=a.fT;Bs(b,d.a+1|0,d.b+1|0,c,a.nY);b=a.dg;b.a=b.a+2|0;b.b=b.b+2|0;}
function F3(a,b,c){return IF(a,b)&&Gy(c)?1:0;}
function AEm(){var a=this;B.call(a);a.D8=20;a.gk=null;a.fj=null;a.k_=0.0;a.k8=null;a.i9=0;a.ky=0;a.g7=0;a.c0=null;a.oc=null;a.e8=null;a.gv=null;a.gt=0;}
function AGG(){var a=new AEm();A03(a);return a;}
function A03(a){a.D8=20;a.gk=new Bg;a.fj=new Bg;a.c0=BI();a.oc=DJ(0);}
function AAR(a,b,c){var d,e,f,g,h;d=a.gt;if(b==d)return;e=a.c0.m;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){Ro(a,b);a.gt=b;}else{W8(a,c);if(a.gt>=b)while(true){if(h<g)break a;a.gt=O6(Bx(a.c0,h%e|0),a.e8,a.gv,a.gt,b,f,a.k_);h=h+(-1)|0;}while(g<=h){a.gt=O6(Bx(a.c0,g%e|0),a.e8,a.gv,a.gt,b,f,a.k_);g=g+1|0;}}}}
function LA(a,b){if(b===null)b=DJ(0);a.oc=b;}
function AAa(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.g7;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c0;h=Bx(h,g%h.m|0);i=a.gk;j=a.oc;k=h.fh.b;l=d.kS;m=b+f|0;n=h.cp;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&Vv(d,j,r,l)!==l.kL?0:1){k=Bb((q-p|0)+1|0,h.cp);V(h.i0,BZ(h.cL),k);Cw(h.jE,0.0,Bb(p,h.cp),BZ(h.cL),k);t=r;}else{u=Vv(d,j,r,l);M7(h,e,f+Bb(p,h.cp)|0,i,l.oz,u);V(h.i0,BZ(h.cL),h.cp);Cw(h.jE,0.0,Bb(q,h.cp),BZ(h.cL),h.cp);p=q;}q=q+1|0;r=t;}u=Vv(d,j,r,l);M7(h,
e,f+Bb(p,h.cp)|0,i,l.oz,u);g=g+1|0;f=f+a.g7|0;}}
function Sl(a,b,c,d){var e,f,g,h,i,j;e=a.c0.m;while(true){f=a.c0.m;g=Bb(f,a.g7);if(g>(d+a.ky|0))break;h=BF(0,g);i=new Qo;g=a.fj.a;f=a.ky;j=a.k8;i.i0=new Bg;i.jE=new B0;i.pO=h;i.d5=20;i.cp=f;i.fh=BF(g,20*f|0);i.hh=Lz(j,f);if(i.cL===null)i.cL=CT(b);BC(a.c0,i);}if(f==e)return;W8(a,b);Ro(a,c);}
function Ro(a,b){var c,d,e,f,g,h,i,j,k;c=a.c0;d=c.m;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=B6(c);while(B$(c)){f=B_(c);g=a.e8;h=a.k_;EL(g);i=0;while(true){j=f.d5;if(i>=j)break;k=e-Bb(d,j)|0;if(k<b)k=e;e=k+1|0;GG(f,g,Dj(e),Bb(f.cp,i)+f.hh|0,h);i=i+1|0;}CK(f.cL,g);f.v8=g.i4;}}
function X8(a,b,c,d){a.k8=b;a.ky=c;a.g7=c*20|0;a.i9=d;X$(a);}
function W8(a,b){var c;c=a.e8;if(!(c!==null&&c.i4==a.i9)){c=D2(b,a.fj.a,a.g7,a.i9);a.e8=c;Cm(c,a.k8);Zo(a.e8,2);}c=a.gv;if(!(c!==null&&c.i4==a.i9)){b=D2(b,a.fj.a,a.ky,a.i9);a.gv=b;Cm(b,a.k8);Zo(a.gv,2);}}
function Iv(a){Fm(a.c0,new ACN);Ir(a.c0);X$(a);}
function X$(a){a.e8=BY(a.e8,null);a.gv=BY(a.gv,null);}
function RS(a,b,c,d,e){Ct(a.gk,b);V(a.fj,c,d);a.k_=e;}
function WM(){B.call(this);this.Cw=null;}
function WL(){B.call(this);this.pX=null;}
function ALr(a,b){var c;c=a.pX;FW(c,FP(b,KN(c)));}
function WK(){B.call(this);this.sx=null;}
function AKO(a,b){var c;c=a.sx;ID(c,FP(b,AAg(c)));}
function AJf(){var a=this;B.call(a);a.jc=null;a.h$=null;a.nf=null;a.hc=null;a.gQ=null;a.nr=null;a.cR=null;a.hu=null;a.qg=0.0;a.dX=0;a.tm=0;a.AQ=0;a.iD=0;}
function AOU(a){var b=new AJf();ASc(b,a);return b;}
function ASc(a,b){var c;a.jc=new B0;a.h$=new Bg;a.nf=new Bg;c=new B0;a.hc=c;a.gQ=Q(Lp,4);a.nr=Q(Ip,0);a.iD=b;Ls(c);}
function XJ(a){a.hu=BY(a.hu,null);}
function RW(a,b,c){var d,e;d=CV(E1(a.cR)*b);a.dX=d;e=a.cR;a.tm= -( -((d+e.ef+e.ex)/2.0)|0)|0;ADd(a,c);return a.dX;}
function PB(a,b){var c,d;Ls(a.hc);c=a.hc;Uj(c,b,c);a.qg=Wp(a.hc);c=a.hc;d=c.bs+c.be+1.5|0;a.AQ=d;V(a.nf,0,d*2|0);}
function ADd(a,b){a.hu=BY(a.hu,D2(b,1024,a.dX,a.iD));}
function G7(a,b,c,d,e,f,g){var h,i;h=a.h$;if(h.a&&h.b){i=a.jc;if(i.bB!==0.0&&i.be!==0.0){D4(b,d,e,h,i,c,f,g,a.iD);return;}}}
function WJ(){B.call(this);this.z8=null;}
function ATO(a){var b,c;b=a.z8;c=b.jP?0:1;b.jP=c;b=new K;M(b);Jn(H(b,C(240)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function WQ(){B.call(this);this.wN=null;}
function AV3(a){var b,c;b=a.wN;c=b.kF^1;b.kF=c;b=new K;M(b);Jn(H(b,C(241)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function WP(){B.call(this);this.tf=null;}
function A1L(a){var b,c,d,e,f;b=a.tf;c=(b.d6+3|0)%6|0;b.d6=c;d=b.eK.data;e=d.length;f=0;while(f<e){b=d[f];b.b9=c;b=b.cz;if(b!==null)b.i3=1;f=f+1|0;}}
function WO(){B.call(this);this.vz=null;}
function AO1(a){var b;b=a.vz;b.ce=b.ce?0:1;Iv(b.da);b.da=AGG();NR(b);ZP(b,b.i,b.k,b.cG.cb);}
function WN(){B.call(this);this.qP=null;}
function AQE(a){var b;b=a.qP;b.lz=b.lz?0:1;}
function WI(){B.call(this);this.yx=null;}
function A1h(a){var b;b=a.yx;b.pw=b.pw?0:1;}
function T_(){B.call(this);this.rV=null;}
function AO4(a){var b;b=a.rV;X4(b,b.lm,b.nE);}
function Ua(){B.call(this);this.rb=null;}
function AYE(a){var b;b=a.rb;X4(b,b.nE,b.lm);}
var AFt=G();
function Nf(){B.call(this);this.Cq=null;}
var A5v=null;var A5Z=null;function AWR(){AWR=Bn(Nf);A1z();}
function AMO(a){var b=new Nf();AG$(b,a);return b;}
function AG$(a,b){AWR();a.Cq=b;}
function A1z(){A5v=AMO(C(242));A5Z=AMO(C(243));}
var ADX=G(0);
function AHY(b,c,d){return Iy(b,c,d,255,new B0);}
function Iy(b,c,d,e,f){Cw(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function UI(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-ANE(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bm=g+i;e.bs=h+i;e.be=j+i;return e;}
function Iq(b,c,d,e,f){f=UI(b,c,d,f);f.bB=e;return f;}
function HR(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var Zj=G();
function ANJ(a,b){var c,d,e;c=b.cJ;d=c&&!b.bJ&&!b.dr&&!b.kh?1:0;a:{if(d){d=b.bl;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bJ&&!c&&!b.dr&&!b.kh?1:0;d=d&&b.bl==46?1:0;}b:{if(!d){e=b.bl;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.om=1;}return 0;}
function Zi(){B.call(this);this.wF=null;}
function AU0(a,b){var c;c=a.wF.d3;return c!==null&&c.ij(b)?1:0;}
var Lw=G(0);
function AHy(){var a=this;Fi.call(a);a.cD=null;a.m=0;}
function BI(){var a=new AHy();ANq(a);return a;}
function ANq(a){a.cD=Q(B,10);}
function MD(a,b){var c,d;c=a.cD.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cD=Dg(a.cD,d);}}
function Bx(a,b){Km(a,b);return a.cD.data[b];}
function AYq(a){return a.m;}
function BC(a,b){var c,d;MD(a,a.m+1|0);c=a.cD.data;d=a.m;a.m=d+1|0;c[d]=b;a.b0=a.b0+1|0;return 1;}
function Y9(a,b,c){var d,e,f;Qg(a,b);MD(a,a.m+1|0);d=a.m;e=d;while(e>b){f=a.cD.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cD.data[b]=c;a.m=d+1|0;a.b0=a.b0+1|0;}
function EH(a,b){var c,d,e,f;Km(a,b);c=a.cD.data;d=c[b];e=a.m-1|0;a.m=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b0=a.b0+1|0;return d;}
function T8(a,b){var c;c=KY(a,b);if(c<0)return 0;EH(a,c);return 1;}
function Ir(a){AD8(a.cD,0,a.m,null);a.m=0;a.b0=a.b0+1|0;}
function AHK(a,b,c){var d,e,f,g,h,i;Qg(a,b);if(c.ev())return 0;MD(a,a.m+c.cY()|0);d=c.cY();e=a.m;f=e-1|0;while(f>=b){g=a.cD.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.m=e+d|0;h=c.b5();i=0;while(i<d){g=a.cD.data;e=b+1|0;g[b]=h.b7();i=i+1|0;b=e;}a.b0=a.b0+1|0;return 1;}
function Km(a,b){var c;if(b>=0&&b<a.m)return;c=new BG;X(c);N(c);}
function Qg(a,b){var c;if(b>=0&&b<=a.m)return;c=new BG;X(c);N(c);}
function Fm(a,b){var c;c=0;while(c<a.m){b.j(a.cD.data[c]);c=c+1|0;}}
function J_(){var a=this;B.call(a);a.u=null;a.t=null;a.W=null;a.bk=null;}
function RY(){var a=new J_();ABh(a);return a;}
function Sw(a,b,c,d){var e=new J_();AL4(e,a,b,c,d);return e;}
function ABh(a){a.u=new Bg;a.t=new Bg;a.W=new B0;a.bk=new B0;}
function AL4(a,b,c,d,e){a.u=new Bg;a.t=new Bg;a.W=new B0;a.bk=new B0;Hb(a,b,c,d,e);}
function Hb(a,b,c,d,e){V(a.u,b,c);V(a.t,d,e);}
function AAi(a){V(a.t,0,0);}
function K2(a){var b;b=a.t;return Bb(b.a,b.b)?0:1;}
function E7(a,b){return Ht(b,a.u,a.t);}
function Y5(a,b,c,d){var e;e=a.u;Bs(b,e.a+c|0,e.b+d|0,a.t,a.W);}
function Vj(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.bk;i=a.W;Gl(b,b.iH);Gv(b.iH,b.X,d,e,g,b.c3);NL(b.iH,b.X,c);g=b.iH;j=b.X;Fw(j,g.vk,h);Fw(j,g.vi,i);c=g.se;j.uniform2f(c,f,0.0);FV(b);}
var Ff=G();
function Nd(){Ff.call(this);this.DY=null;}
function Z6(){Ff.call(this);this.DT=null;}
function Yf(){Ff.call(this);this.CZ=null;}
var G_=G(0);
var R5=G(0);
function B0(){var a=this;B.call(a);a.bm=0.0;a.bs=0.0;a.be=0.0;a.bB=0.0;}
function ACY(a,b,c,d){var e=new B0();AZa(e,a,b,c,d);return e;}
function AJ_(a){var b=new B0();AJg(b,a);return b;}
function AZa(a,b,c,d,e){a.bm=b;a.bs=c;a.be=d;a.bB=e;}
function Cw(a,b,c,d,e){a.bm=b;a.bs=c;a.be=d;a.bB=e;}
function AJg(a,b){a.bm=b.bm;a.bs=b.bs;a.be=b.be;a.bB=b.bB;}
function BO(a,b){a.bm=b.bm;a.bs=b.bs;a.be=b.be;a.bB=b.bB;return a;}
function AS_(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BJ(a)===BJ(b)){b=b;if(b.bm===a.bm&&b.bs===a.bs&&b.be===a.be&&b.bB===a.bB?1:0){c=1;break a;}}c=0;}return c;}
function Lp(){var a=this;B.call(a);a.nS=null;a.Bt=null;a.ox=0.0;a.BG=0;a.BW=0;a.sJ=0;a.CB=0;a.ef=0.0;a.ex=0.0;a.Bx=0.0;a.pE=0.0;a.BC=0;a.qq=null;}
function Lz(a,b){return M0(a,b)+a.sJ|0;}
function M0(a,b){return (b-E1(a)|0)/2|0;}
function E1(a){return CV(a.ef+a.ex);}
function M1(a,b){return CV((a.ef+a.ex)*b);}
function Ip(){var a=this;B.call(a);a.eA=null;a.fR=null;a.fp=null;}
var A5e=0;function AFA(a){var b;b=a.fR;if(b!==null){A5e=A5e-1|0;a.eA.dS.deleteTexture(b);a.fR=null;}}
function BZ(a){return a.fp.a;}
function Dl(a){return a.fp.b;}
function SA(a,b,c,d){var e;e=a.fp;e.a=b;e.b=c;N9(a);a.eA.dS.texStorage2D(3553,1,d,b,c);e=a.eA.dS;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function N9(a){var b,c;b=a.eA.dS;c=a.fR;b.bindTexture(3553,c);}
function CK(a,b){V9(a,b.nu,b.mZ,32856);Yc(a,b,0,0);}
function V9(a,b,c,d){var e,f,g,h;a:{e=a.fp;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){N9(a);break a;}e=a.eA.dS;h=a.fR;e.deleteTexture(h);a.fR=a.eA.dS.createTexture();SA(a,b,c,d);break a;}}SA(a,b,c,d);}}
function JD(a,b,c,d){N9(a);Yc(a,b,c,d);}
function Yc(a,b,c,d){var e;e=a.eA.dS;b=b.iV;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var X7=G(0);
var A50=0.0;function Ls(b){Cw(b,1.0471975803375244,0.75,1.25,0.375);}
function Uj(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:Jc(b.bB,Jc(c,A50));Cw(d,b.bm/c,b.bs*c,ASE(b.be*c,1.25),e);}
function Wp(b){var c;c=b.bs;return c-(c|0)>=0.25?0.0:0.5;}
function ADB(){A50=MT(MT(0.5,0.375),4.0);}
var Oo=G(0);
function Gy(a){return DV(a,null);}
function QZ(b){var c;c=new Zc;c.uI=b;return c;}
function Yn(){B.call(this);this.sX=null;}
function AWv(a){KB(a.sX);}
function Ym(){B.call(this);this.vd=null;}
function ATz(a){KR(a.vd);}
function AJX(){var a=this;B.call(a);a.bK=null;a.bA=null;a.dl=0;}
function ALt(){var a=new AJX();A1m(a);return a;}
function AVd(a){var b=new AJX();APU(b,a);return b;}
function A1m(a){a.bK=new Ha;a.bA=new Ha;}
function APU(a,b){a.bK=new Ha;a.bA=new Ha;JC(a,b);}
function JC(a,b){AA8(a.bK,b.bK);AA8(a.bA,b.bA);a.dl=b.dl;}
function NO(a,b,c){Ce(a.bA,b,c);if(!a.dl)Ce(a.bK,b,c);}
function Qm(a,b){Ce(a.bK,b,0);Ce(a.bA,b+1|0,0);}
function En(a){if(Rv(a.bK,a.bA)>0)return a.bA;return a.bK;}
function FZ(a){if(Rv(a.bK,a.bA)<0)return a.bA;return a.bK;}
function AJd(a,b){var c,d,e,f;c=a.bK;d=c.J;e=a.bA;if(d==e.J&&c.Z==e.Z?1:0)return null;c=En(a);e=FZ(a);d=c.J;if(d<=b){f=BL(b,e.J);if(f<=0)return BF(b<=d?c.Z:0,f>=0?e.Z:(-1));}return null;}
function Du(a){var b,c;b=a.bK;c=a.bA;return (b.J==c.J&&b.Z==c.Z?1:0)?0:1;}
function SY(){var a=this;B.call(a);a.ff=null;a.fc=0;a.dC=0;}
function ABE(a,b){var c,d,e;c=a.fc;d=a.ff;if(c==d.data.length)a.ff=Dg(d,c+16|0);d=a.ff.data;e=a.fc;a.fc=e+1|0;d[e]=b;}
function Y_(a){var b,c,d;b=a.dC;c=a.fc-1|0;if(b==c)a.dC=b-1|0;d=a.ff.data;a.fc=c;d[c]=null;}
var GS=G();
function Y6(){var a=this;GS.call(a);a.A=null;a.dc=null;a.eU=null;a.dG=null;a.dx=null;a.iz=null;a.li=null;a.cl=0;a.m4=0;a.y0=0.0;}
function Cc(a,b){return a.A.data[b];}
function CI(a){return a.A.data.length;}
function ABt(a){return Fx(a,CI(a));}
function Gq(a,b){return a.A.data[b].R;}
function AJN(a,b,c){var d,e,f,g,h;d=a.A;e=d.data;f=e[b];d=Dg(d,e.length+1|0);e=d.data;a.A=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=D3(Q(Cv,0));a.A.data[b+1|0]=f;}else if(c==f.R){e[b]=f;e[b+1|0]=D3(Q(Cv,0));}else{e=(IK(f,c)).data;d=a.A.data;d[b]=e[0];d[b+1|0]=e[1];}FY(a,b,c,0,C(206));}
function Lt(a,b){var c,d,e,f,g,h,i;c=a.A.data;d=c[b];e=c[b+1|0];f=D3(LP(d.s,e.s));g=a.A;h=g.data.length;if(b<h&&b>=0){i=Q(DG,h-1|0);c=i.data;YZ(g,b,i);c[b]=f;a.A=i;return;}d=new Bu;X(d);N(d);}
function OI(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.A.data;if(!(c<d[b].R?0:1)){d=(Cc(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}FY(a,b,c,1,Zf(e));h=a.A.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=YZ(d,e,Q(Cv,f-1|0));else{j=i[e];if(c<=0)k=D$(Dt(j.v,1),j.bX,j.bE);else if(c>=(J(j.v)-1|0)){k=new Cv;l=j.v;AAu(k,Cs(l,0,J(l)-1|0),j.bX,j.bE);}else{d=B4(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=D$(Hk(d),j.bX,j.bE);}i[e]=k;}h.R=h.R-1|0;EV(h);}else if(b!=(d.length-1|0)){FY(a,b,c,1,C(206));Lt(a,b);}}
function ADj(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Zr(a.A.data[b],c,e[0]);return;}g=f-1|0;d=(IK(a.A.data[b],c)).data;h=d[0];i=d[1];d=a.A;j=Dg(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);Mp(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Gh(e[m])?W$(e[m]):D3(Q(Cv,0));d[b+m|0]=k;m=m+1|0;}Mp(i,0,0,e[g]);d[b+g|0]=i;a.A=j;}
function Ue(a,b){var c,d,e,f,g,h,i;c=En(b);d=FZ(b);e=c.J;if(e==d.J)return Cs(FE(a.A.data[e]),c.Z,d.Z);f=new K;M(f);b=a.A.data[c.J];e=c.Z;BM(BU(f,Dt(FE(b),e)),10);g=a.A.data;e=c.J+1|0;h=d.J;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;ADv(BU(f,FE(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.A.data[d.J];h=d.Z;BU(f,Cs(FE(b),0,h));return L(f);}b=new ACj;X(b);N(b);}
function OO(a,b,c){var d;AB$(a,b);d=En(b);FY(a,d.J,d.Z,1,c);}
function AB$(a,b){var c,d,e,f,g,h,i;a:{c=En(b);d=FZ(b);e=c.J;if(e==d.J)HF(a.A.data[e],c.Z,d.Z);else{b=a.A.data[e];HF(b,c.Z,b.R);HF(a.A.data[d.J],0,d.Z);e=c.J+1|0;f=d.J;g=a.A;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(DG,(h-f|0)+e|0);AEN(g,e,f,i);a.A=i;Lt(a,c.J);break a;}b=new Bu;X(b);N(b);}b=new Bu;X(b);N(b);}}}
function I3(a,b,c){return DQ(b,GB(Cc(a,b),c));}
function ACA(a,b){var c,d,e;c=0;d=0;while(true){e=a.A.data.length;if(c>=e)break;if((d+(Cc(a,c)).R|0)>=b)return BF(c,b-d|0);d=d+((Cc(a,c)).R+1|0)|0;c=c+1|0;}return BF(e,0);}
function Fx(a,b){var c,d,e;c=0;d=a.A.data.length;e=0;while(e<b){c=c+Gq(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function LO(a,b){return N4(Cc(a,b.bq),b.bv);}
function E6(a){var b,c,d,e,f,g,h,i,j;b=B4(ABt(a));c=b.data;d=a.A.data.length;e=0;f=0;while(e<d){g=a.A.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;Qw(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function FY(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cl=a.cl+1|0;f=a.iz;g=Q(G3,1);h=new G3;h.d_=b;h.eP=c;i=L6(e,C(206),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BF(b,c+J(i[0])|0);break a;}k=BF((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BF(b,c);}i=g.data;h.o2=k;h.nI=d;h.gD=e;i[0]=h;BC(f,g);M5(a,b,c,d,e);}
function M5(a,b,c,d,e){var f;f=Fx(a,b)+c|0;if(!d){W9(a.dc,f,J(e));S7(a.eU,f,J(e));}else{Ux(a.dc,f,J(e));O2(a.eU,f,J(e));}}
function Wc(a,b){var c,d,e;c=L6(b.gD,C(206),(-1));if(b.nI){ADj(a,b.d_,b.eP,c);W9(a.dc,Fx(a,b.d_)+b.eP|0,J(b.gD));S7(a.eU,Fx(a,b.d_)+b.eP|0,J(b.gD));}else{c=c.data;d=ALt();Ce(d.bK,b.d_,b.eP);e=c.length;if(e==1)Ce(d.bA,b.d_,b.eP+J(c[0])|0);else Ce(d.bA,(b.d_+e|0)-1|0,J(c[e-1|0]));AB$(a,d);Ux(a.dc,Fx(a,b.d_)+b.eP|0,J(b.gD));O2(a.eU,Fx(a,b.d_)+b.eP|0,J(b.gD));}return b.o2;}
function AAG(a){return a.m4==a.cl?0:1;}
function Kt(a){a.m4=a.cl;}
function MZ(a){var b,c,d;a.li=BN(a.A.data.length+1|0);b=0;while(b<a.A.data.length){c=a.li.data;d=b+1|0;c[d]=(c[b]+(Cc(a,b)).R|0)+1|0;b=d;}}
function U$(a,b){var c,d,e,f,g,h;c=a.li;if(c===null){d=0;e=0;a:{while(true){c=a.A.data;f=c.length;if(e>=f)break;g=c[e].R;if(b<=(d+g|0)){h=DQ(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DQ(f,0);}return h;}d=AI9(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DQ(d,b-(d<0?0:a.li.data[d])|0);if(h.bv>=(Cc(a,h.bq)).R){h.bq=h.bq+1|0;h.bv=0;}return h;}
var L0=G(0);
function KI(a){return LQ(a.sH(),a.oK());}
function LQ(b,c){var d,e,f;b=b.data;d=b.length;if(!d)return c;e=new K;M(e);f=0;while(f<d){BM(BU(e,b[f]),47);f=f+1|0;}return L(BU(e,c));}
var S2=G(0);
function Si(){var a=this;B.call(a);a.ia=null;a.fY=null;a.jB=null;}
function AJa(a,b){var c=new Si();AOe(c,a,b);return c;}
function A1X(a,b,c){var d=new Si();ADU(d,a,b,c);return d;}
function AOe(a,b,c){ADU(a,b,c,Q(BK,0));}
function ADU(a,b,c,d){a.ia=b;a.fY=c;a.jB=d;}
function EN(a){var b;b=a.ia;return HY(b!==null?b.name:a.fY.name);}
function AK_(a){return a.jB;}
function Up(a,b,c){var d,e,f;d=AJY(c);e=new UT;e.qC=b;b=a.fY;if(b!==null)b.text().then(Bv(e,"f"),Bv(d,"f"));else{b=a.ia.getFile();f=new UU;f.rs=e;f.rt=d;b.then(Bv(f,"f"),Bv(d,"f"));}}
function AJY(b){var c;c=new S3;c.xq=b;return c;}
function AWY(a){var b,c,d,e,f,g,h,i;if(a.fY===null)b=LQ(a.jB,EN(a));else{c=a.jB;b=EN(a);d=a.fY.size;e=d|0;if(e!==d){f=EN(a);g=new K;M(g);H(H(g,C(244)),f);$rt_globals.console.info($rt_ustr(L(g))+d);e=0;}if(c===null)f=C(23);else{g=new K;M(g);BU(g,C(36));h=0;while(true){i=c.data;if(h>=i.length)break;if(h>0)BU(g,C(37));H(g,i[h]);h=h+1|0;}BU(g,C(38));f=L(g);}g=new K;M(g);U(H(H(H(H(g,f),C(245)),b),C(246)),e);b=L(g);}return b;}
function AKW(a){return (AEV(EN(a))*31|0)+AFJ(a.jB)|0;}
var ABZ=G(0);
function AIY(){B.call(this);this.iA=null;}
function A1_(a){var b=new AIY();AX1(b,a);return b;}
function AX1(a,b){a.iA=b;}
function EK(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iA));}
function CN(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iA));}
function AVh(a){var b,c;b=a.iA.byteLength;c=new K;M(c);H(U(H(c,C(247)),b),C(248));return L(c);}
function Zc(){B.call(this);this.uI=null;}
function DV(a,b){Y7(a.uI,b);return 1;}
function Ha(){var a=this;B.call(a);a.J=0;a.Z=0;}
function Ce(a,b,c){a.J=b;a.Z=c;}
function AA8(a,b){a.J=b.J;a.Z=b.Z;}
function Rv(a,b){var c;c=BL(a.J,b.J);if(c)return c;return BL(a.Z,b.Z);}
function Nz(){var a=this;B.call(a);a.o8=null;a.od=null;}
function LU(a){return a.o8.bq;}
function KG(a){return a.o8.bv;}
function DG(){var a=this;B.call(a);a.s=null;a.R=0;a.f8=null;a.eL=null;a.em=null;a.h_=null;a.gP=0;a.i3=0;a.jk=0;}
var A51=0;var A52=0;var A5U=0;function W$(a){var b=new DG();AJm(b,a);return b;}
function D3(a){var b=new DG();YH(b,a);return b;}
function AJm(a,b){var c;c=Q(Cv,1);c.data[0]=AH7(b);YH(a,c);}
function YH(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.R=d;EV(a);}
function Ji(a){return a.s.data.length;}
function JL(a,b){return a.s.data[b];}
function GB(a,b){var c;c=J8(a,b);return c<=0?0:a.em.data[c-1|0];}
function J8(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.em!==null&&!a.jk)){UM(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.em.data[d]=e;d=d+1|0;}a.jk=0;}d=AAE(a.em,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function N4(a,b){var c;c=a.s.data;if(!c.length)return null;return c[J8(a,b)];}
function HF(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.R){a.s=Q(Cv,0);EV(a);a.R=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BL(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=YZ(g,e,Q(Cv,g.data.length-1|0));a.R=a.R-d|0;EV(a);return;}a.s.data[e]=D$(Fn(Cs(k.v,0,b),Dt(k.v,c)),k.bX,k.bE);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=D$(Cs(l.v,0,b),l.bX,l.bE);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=D$(Dt(m.v,c),m.bX,m.bE);g=a.s;a.s=AEN(g,e,f,Q(Cv,(g.data.length-f|0)+e|0));}a.R=a.R-d|0;EV(a);}
function IK(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DG,[D3(Q(Cv,0)),a]);if(b>=a.R)return I(DG,[a,D3(Q(Cv,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DG,[D3(Lk(c,0,Q(Cv,d))),D3(Lk(c,d,Q(Cv,f-d|0)))]);h=e[d];e=Lk(c,0,Q(Cv,d+1|0));i=e.data;j=Lk(c,d,Q(Cv,f-d|0));c=j.data;i[d]=D$(Cs(h.v,0,b),h.bX,h.bE);c[0]=D$(Dt(h.v,b),h.bX,h.bE);return I(DG,[D3(e),D3(j)]);}
function Zr(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}Mp(a,d,b,c);}
function Mp(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Gh(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Cv,1);h.data[0]=AH7(d);a.s=h;}else if(!b&&!c){h=Q(Cv,g+1|0);f=h.data;Dd(e,0,h,1,g);f[0]=AH7(d);a.s=h;}else{i=f[b];if(c<=0)j=D$(Fn(d,i.v),i.bX,i.bE);else if(c>=J(i.v))j=D$(Fn(i.v,d),i.bX,i.bE);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B4(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=D$(Hk(e),i.bX,i.bE);}f[b]=j;}a.R=a.R
+J(d)|0;EV(a);}
function O4(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<LZ(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Ni(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.f8;if(!(e!==null&&e.data.length>=d)){a.f8=AKG(d);a.eL=BN(d);a.gP=1;}UM(a);if(!a.gP)A52=A52+1|0;else{f=0;g=0.0;A51=A51+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.em.data[h]=f;Cm(b,i[Kp(j)]);g=g+El(b,j.v);a.f8.data[h]=g;a.eL.data[h]=g+0.5|0;h=h+1|0;}a.R=f;a.gP=0;a.jk=0;}}
function UM(a){var b;b=a.em;if(!(b!==null&&b.data.length>=a.s.data.length)){a.em=BN(a.s.data.length);a.jk=1;}}
function SG(a){a.gP=1;a.h_=null;}
function EV(a){SG(a);a.i3=1;a.jk=1;}
function Zn(a,b,c,d){var e,f,g,h,i,j,k;if(a.h_===null)a.h_=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.h_.data[d];if(e===null){e=c.data;f=a.s.data[d];Cm(b,e[Kp(f)]);f=f.v;e=BN(J(f)-1|0);c=Gj(f);g=!d?0.0:a.f8.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BK;k=i+1|0;Om(f,c,0,k);h[i]=g+El(b,f)+0.5|0;i=k;}a.h_.data[d]=e;}return e;}
function GN(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.gP&&a.eL!==null))Ni(a,c,d);if(b>=a.R)return a.eL.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BL(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eL.data[f];}return (Zn(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Fy(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eL.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function G0(a,b){var c;if(b>=a.R)return b+1|0;c=J8(a,b);return a.em.data[c];}
function FE(a){var b,c,d,e;b=new K;GC(b,a.R);c=a.s.data;d=c.length;e=0;while(e<d){BU(b,c[e].v);e=e+1|0;}return L(b);}
function AEM(){A5U=0;}
function XQ(){var a=this;B.call(a);a.fr=null;a.e3=null;}
function AU8(a,b){var c=new XQ();AV_(c,a,b);return c;}
function AV_(a,b,c){a.fr=b;a.e3=c;}
function S7(a,b,c){var d;d=a.fr;if(d===null)return;YF(a,d,b,c);}
function O2(a,b,c){var d;d=a.fr;if(d===null)return;AAK(a,d,b,c);}
function YF(a,b,c,d){var e,f,g,h;e=b.eN.b5();while(e.cy()){Vf(a,e.b7(),c,d);}e=b.fs.b5();while(e.cy()){f=e.b7();g=new SE;g.x4=a;EM(a,g,f,c,d);}h=b.hD.b5();while(h.cy()){e=h.b7();Vf(a,e.k6,c,d);f=new SF;f.v_=a;EM(a,f,e.kv,c,d);}b=b.cH.b5();while(b.cy()){YF(a,b.b7(),c,d);}}
function Vf(a,b,c,d){KC(a,b.ew,c,d);}
function EM(a,b,c,d,e){var f,g;a:{if(c instanceof HB){f=c.hf;g=new Vt;g.qT=a;g.qR=b;g.qQ=d;g.qS=e;Fm(f,g);}else{if(!(c instanceof J5)){if(!(c instanceof Jd))break a;f=c;EM(a,b,f.jz,d,e);EM(a,b,f.iX,d,e);return;}g=c.h3;f=new Vu;f.A9=a;f.A8=b;f.A7=d;f.A6=e;Fm(g,f);}}if(c!==null){c=c.fH;if(c!==null)b.lx(c,CU(d),CU(e));}}
function KC(a,b,c,d){var e;e=b.dy;if(e>=c)b.dy=e+d|0;}
function AAK(a,b,c,d){var e,f,g,h;e=b.eN.b5();while(e.cy()){JK(a,(e.b7()).ew,c,d);}e=b.fs.b5();while(e.cy()){f=e.b7();g=new RV;g.ue=a;EM(a,g,f,c,d);}h=b.hD.b5();while(h.cy()){e=h.b7();JK(a,e.k6.ew,c,d);f=new RX;f.zn=a;EM(a,f,e.kv,c,d);}b.eN.pf(new RU);b.fs.pf(new RT);b=b.cH.b5();while(b.cy()){AAK(a,b.b7(),c,d);}}
function JK(a,b,c,d){var e;e=b.dy;if(e>=c)b.dy=e-d|0;}
function Lb(){var a=this;Ea.call(a);a.c5=0;a.b3=null;a.cW=0;a.A$=0.0;a.mU=0;}
function JJ(){var a=new Lb();Qp(a);return a;}
function AWh(a,b){return Q(HQ,b);}
function Qp(a){var b;b=AGI(16);a.c5=0;a.b3=Q(HQ,b);a.A$=0.75;S$(a);}
function AGI(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fr(a){var b;if(a.c5>0){a.c5=0;b=a.b3;AD8(b,0,b.data.length,null);a.cW=a.cW+1|0;}}
function S$(a){a.mU=a.b3.data.length*a.A$|0;}
function MK(a,b){return AAd(a,b)===null?0:1;}
function ABl(a){var b;b=new S_;b.yh=a;return b;}
function Co(a,b){var c;c=AAd(a,b);if(c===null)return null;return c.cM;}
function AAd(a,b){var c,d;if(b===null)c=RP(a);else{d=b.gp();c=QN(a,b,d&(a.b3.data.length-1|0),d);}return c;}
function QN(a,b,c,d){var e;e=a.b3.data[c];while(e!==null&&!(e.lG==d&&AHt(b,e.cQ))){e=e.cT;}return e;}
function RP(a){var b;b=a.b3.data[0];while(b!==null&&b.cQ!==null){b=b.cT;}return b;}
function MV(a){var b;if(a.oA===null){b=new P_;b.i6=a;a.oA=b;}return a.oA;}
function Em(a,b,c){var d,e,f,g;if(b===null){d=RP(a);if(d===null){a.cW=a.cW+1|0;d=S5(a,null,0,0);e=a.c5+1|0;a.c5=e;if(e>a.mU)ABi(a);}}else{e=b.gp();f=e&(a.b3.data.length-1|0);d=QN(a,b,f,e);if(d===null){a.cW=a.cW+1|0;d=S5(a,b,f,e);e=a.c5+1|0;a.c5=e;if(e>a.mU)ABi(a);}}g=d.cM;d.cM=c;return g;}
function S5(a,b,c,d){var e,f;e=new HQ;Vo(e,b,null);e.lG=d;f=a.b3.data;e.cT=f[c];f[c]=e;return e;}
function AIe(a,b){var c,d,e,f,g,h,i,j;c=AGI(!b?1:b<<1);d=Q(HQ,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b3.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.lG&b;j=h.cT;h.cT=e[i];e[i]=h;h=j;}f=f+1|0;}a.b3=d;S$(a);}
function ABi(a){AIe(a,a.b3.data.length);}
function Lm(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b3.data[0];while(e!==null){if(e.cQ===null)break a;b=e.cT;d=e;e=b;}}else{f=b.gp();g=a.b3.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.lG==f&&AHt(b,e.cQ))){h=e.cT;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.cT=e.cT;else a.b3.data[c]=e.cT;a.cW=a.cW+1|0;a.c5=a.c5-1|0;}if(e===null)return null;return e.cM;}
function AHt(b,c){return b!==c&&!b.bH(c)?0:1;}
function Cv(){var a=this;B.call(a);a.v=null;a.bX=0;a.bE=0;}
function AH7(a){var b=new Cv();AVI(b,a);return b;}
function D$(a,b,c){var d=new Cv();AAu(d,a,b,c);return d;}
function AVI(a,b){AAu(a,b,0,0);}
function AAu(a,b,c,d){a.v=b;a.bX=c;a.bE=d;}
function Kp(a){return a.bE&3;}
function Je(b,c){return (!b?0:2)+(!c?0:1)|0;}
function LZ(a){return J(a.v);}
var Nw=G(Lb);
function Za(){var a=this;B.call(a);a.db=null;a.eZ=0;}
var A53=null;function AF0(a){var b=new Za();AGp(b,a);return b;}
function AGp(a,b){a.eZ=0;a.db=b;}
function Qi(a,b){var c;if(b.eE)return b;b=B6(b.bn);while(true){if(!B$(b))return null;c=Qi(a,B_(b));if(c!==null)break;}return c;}
function WF(a,b,c){var d,e,f,g;d=No(a,a.db,b);if(d===null)return;b=c.ci;e=b===null?A54:b.cH;f=c.bn;c=a.db;if(d===c){if(c.ci===null)c.ci=b;b=new Zq;b.x0=a;Fm(f,b);b=new Zp;b.uc=a;e.fa(b);b=a.db;b.bn=f;b.ci.cH=e;b.eE=0;return;}if(!Ez(f)){c=d.hd;if(c!==null){b=new W5;b.qY=c;Fm(f,b);g=KY(c.bn,d);if(g==(-1))HW(c.bn,f);else{EH(c.bn,g);AHK(c.bn,g,f);}}}b=d.ci;if(b!==null){b=b.g8;c=new R0;c.sa=b;e.fa(c);g=KY(b.cH,d.ci);if(g==(-1))HW(b.cH,e);else{b.cH.pL(g);b.cH.tE(g,e);}}}
function No(a,b,c){var d,e,f,g;d=b.bU;if(d.bY==c.bY&&d.bW==c.bW?1:0){d=B6(b.bn);while(B$(d)){e=No(a,B_(d),c);if(e!==null)return e;}return b;}b=B6(b.bn);while(true){if(!B$(b))return null;d=B_(b);f=c.bY;g=c.bW;e=d.bU;if(e.bY<=f&&g<=e.bW?1:0){e=No(a,d,c);if(e!==null)break;}}return e;}
function AAo(a,b,c){BC(c,b.bU);b=B6(b.bn);while(B$(b)){AAo(a,B_(b),c);}}
function W9(a,b,c){a.eZ=0;Ld(a,a.db,b,c);}
function Ld(a,b,c,d){var e;if(C_(b)<c)return;a:{if(Dm(b)>c){LL(b,d);Hj(b,d);b=B6(b.bn);while(B$(b)){Ld(a,B_(b),c,d);}}else{if(!MB(b,c)){if(a.eZ)break a;if(C_(b)!=c)break a;}Hj(b,d);if(Dm(b)==c&&a.eZ)LL(b,d);e=B6(b.bn);while(B$(e)){Ld(a,B_(e),c,d);}if(!a.eZ){b.eE=1;a.eZ=1;}}}}
function Ux(a,b,c){a.eZ=0;MF(a,a.db,b,c);}
function MF(a,b,c,d){var e,f,g,h,i,j;if(C_(b)<c)return;e=Dm(b);f=c+d|0;if(e>f){e= -d|0;LL(b,e);Hj(b,e);g=B6(b.bn);while(B$(g)){MF(a,B_(g),c,d);}b.bn=V0(a,b.bn);}else{h=b.bU;if(c<=h.bY&&h.bW<=f?1:0){if(b===a.db){LT(b,0);ME(b,0);h=b.ci;if(h!==null)h.cH.i2();}else{LT(b,(-1));ME(b,(-1));h=b.ci;if(h!==null){AC2(h);b.ci=null;}}Ir(b.bn);}else{e=MB(b,c);f=MB(b,f);if(e&&f)Hj(b, -d|0);else if(e)ME(b,c);else{if(!f)return;LT(b,c);Hj(b, -d|0);}h=B6(b.bn);while(B$(h)){MF(a,B_(h),c,d);}h=To(b.bn);g=Xt(0);i=new Rz;j=new ABs;j.EG
=i;j.kk=g;while(AA_(h,j)){}if(!j.kk.nW&&!a.eZ)b.eE=1;else a.eZ=1;b.bn=V0(a,b.bn);}}}
function V0(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BI();d=null;e=A53;f=b.cD;g=b.m;if(e===null)e=A4I;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}KS(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b0=b.b0+1|0;b=B6(b);while(B$(b)){m=B_(b);if(Dm(m)==C_(m))continue;if(!m.eE){if(d!==null){BC(c,d);d=null;}BC(c,m);}else if(d===null)d=m;else{n=ASr(KH(Be(Dm(d),Dm(m)),Bd(C_(d),C_(m)),d.bU.fE),d.hd,d.ci);n.eE=1;d=m.ci;if(d===null)d=n;else{AC2(d);d=n;}}}if(d!==null)BC(c,d);return c;}
function ACx(a,b,c,d){var e,f,g,h,i,j;if((C_(c)-Dm(c)|0)<43)e=Cs(d,Dm(c),C_(c));else{e=Cs(d,Dm(c),Dm(c)+20|0);f=Cs(d,C_(c)-20|0,C_(c));g=new K;M(g);H(H(H(g,e),C(168)),f);e=L(g);}e=ABo(e,C(206),C(249));f=Bt();g=Ck(c);h=new K;M(h);i=U(h,b);BM(i,32);g=H(i,g);BM(g,9);H(g,e);Bk(f,L(h));c=B6(c.bn);j=b+1|0;while(B$(c)){ACx(a,j,B_(c),d);}}
function AGy(){A53=new Ul;}
function AKe(){var a=this;B.call(a);a.bY=0;a.bW=0;a.fE=0;}
function KH(a,b,c){var d=new AKe();AVF(d,a,b,c);return d;}
function AVF(a,b,c,d){a.bY=b;a.bW=c;a.fE=d;}
function ARI(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return a.bY==c.bY&&a.bW==c.bW&&a.fE==c.fE?1:0;}return 0;}
function AUU(a,b){var c;b=b;c=BL(a.bY,b.bY);if(!c)c=BL(b.bW,a.bW);return c;}
var Ul=G();
function AO6(a,b,c){var d;b=b;c=c;b=b.bU;c=c.bU;d=BL(b.bY,c.bY);if(!d)d=BL(c.bW,b.bW);return d;}
function YL(){var a=this;B.call(a);a.bU=null;a.hd=null;a.bn=null;a.ci=null;a.eE=0;}
function ASr(a,b,c){var d=new YL();AFZ(d,a,b,c);return d;}
function AFZ(a,b,c,d){a.eE=0;a.bU=b;a.hd=c;a.bn=BI();a.ci=d;}
function AGP(b){return YS(b,null);}
function YS(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Ba(b);e=Ba(b);f=Ba(b);g=Ba(b);h=Ba(b);i=KH(d,e,f);j=new YL;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AFZ(j,i,null,l);m=0;while(m<g){l=YS(b,c);l.hd=j;BC(j.bn,l);m=m+1|0;}return j;}
function ADN(b,c,d){var e,f,g,h,i;a:{e=b.bU;f=b.bn;g=e.bY;h=e.bW;i=e.fE;Bq(c,g);GV(c,h,i);Bq(c,f.m);if(d!==null){e=b.ci;if(e!==null&&ABW(d,e)){g=(N$(d,b.ci)).bp;break a;}}g=(-1);}Bq(c,g);b=B6(f);while(B$(b)){ADN(B_(b),c,d);}}
function Dm(a){return a.bU.bY;}
function C_(a){return a.bU.bW;}
function LT(a,b){a.bU.bY=b;}
function ME(a,b){a.bU.bW=b;}
function LL(a,b){var c;c=a.bU;c.bY=c.bY+b|0;}
function Hj(a,b){var c;c=a.bU;c.bW=c.bW+b|0;}
function MB(a,b){return Dm(a)<=b&&b<C_(a)?1:0;}
function AK7(a){var b,c,d,e,f;b=a.bU;c=b.bY;d=b.bW;e=b.fE;b=new K;M(b);BM(b,40);BM(U(H(U(H(U(b,c),C(37)),d),C(37)),e),41);b=L(b);c=a.eE;f=new K;M(f);Jn(H(H(f,b),C(37)),c);return L(f);}
function ALO(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BS(a.bU,c.bU)&&BS(a.bn,c.bn)?1:0;}return 0;}
var Jg=G(0);
function GO(){var a=this;B.call(a);a.cQ=null;a.cM=null;}
function A55(a,b){var c=new GO();Vo(c,a,b);return c;}
function Vo(a,b,c){a.cQ=b;a.cM=c;}
function AVj(a,b){var c,d;if(a===b)return 1;if(!I6(b,Jg))return 0;a:{b:{c:{d:{c=b;b=a.cQ;if(b!==null){if(!b.bH(c.cQ))break c;else break d;}if(c.cQ!==null)break c;}b=a.cM;if(b!==null){if(!b.bH(c.cM))break c;else break b;}if(c.cM===null)break b;}d=0;break a;}d=1;}return d;}
function HQ(){var a=this;GO.call(a);a.lG=0;a.cT=null;}
function Nt(){var a=this;Li.call(a);a.xp=null;a.qU=null;}
function ADR(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.xp;e=0;f=0;g=a.qU;a:{while(true){if((e+32|0)>f&&D6(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Cg(b)+j|0,i.length);O5(b,d,j,f-j|0);e=0;}if(!D6(c)){k=!D6(b)&&e>=f?A5q:A5p;break a;}i=g.data;j=Be(Cg(c),i.length);l=new WB;l.p1=b;l.xP=c;k=AE7(a,d,e,f,g,0,j,l);e=l.ui;j=l.vc;if(k===null){if(!D6(b)&&e>=f)k=A5q;else if(!D6(c)&&e>=f)k=A5p;}ACz(c,g,0,j);if(k!==null)break;}}Fp(b,b.Y-(f-e|0)|0);return k;}
var Qh=G(Nt);
function AE7(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(NW(h,2))break a;i=A5p;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Of(l)){if((f+3|0)>g){j=j+(-1)|0;if(NW(h,3))break a;i=A5p;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CP(l)){i=Eq(1);break a;}if
(j>=d){if(D6(h.p1))break a;i=A5q;break a;}c=j+1|0;m=k[j];if(!Di(m)){j=c+(-2)|0;i=Eq(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(NW(h,4))break a;i=A5p;break a;}k=e.data;o=EJ(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.ui=j;h.vc=f;return i;}
var I0=G(Es);
var OD=G();
function AS3(a,b){return b.text();}
function OF(){var a=this;B.call(a);a.s0=null;a.sZ=null;}
function ASw(a,b){var c,d,e,f;c=a.s0;d=a.sZ;e=b.length;f=new O9;f.zC=b;c.j(AM4((AJD(e,f)).jY,ABf(d)));}
var OE=G();
function AUi(a,b){AGH(b);}
function IQ(){var a=this;B.call(a);a.br=null;a.Eu=null;a.dA=null;a.ju=null;a.kS=null;a.dV=null;a.kA=null;a.AM=null;a.pg=null;a.op=null;}
function A56(a,b,c,d,e,f){var g=new IQ();Ly(g,a,b,c,d,e,f);return g;}
function Ix(){var b,c,d,e,f,g,h,i,j;b=new IQ;c=new J1;d=new Hg;FC();KM(d,A57);Mj(c,d,BV(A5O),BV(A58),BV(A59),BV(A5O),BV(A5$),BV(A5_),BV(A6a),BV(A6b),BV(A6c),BV(A6d));e=AIF(S(C(250)));AEr();f=(A6e.hl()).data;g=f.length;h=Q(Ke,g);i=h.data;j=0;while(j<g){i[j]=f[j].nx;j=j+1|0;}Ly(b,c,e,h,AJl(S(C(251)),S(C(252)),S(C(253)),S(C(254))),E_(),ADy(S(C(255)),S(C(256)),S(C(257)),S(C(258))));return b;}
function L5(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IQ;c=new J1;d=new Hg;ANa();KM(d,A6f);Mj(c,d,BV(A6g),BV(A6h),BV(A6i),BV(A6g),BV(A6j),BV(A6k),BV(A6l),BV(A6m),BV(A6n),BV(A6o));e=AIF(S(C(259)));Tp();f=(A6p.hl()).data;g=f.length;h=Q(Ke,g);i=h.data;j=0;while(j<g){i[j]=f[j].kP;j=j+1|0;}k=AJl(S(C(260)),S(C(261)),S(C(262)),S(C(263)));l=new IR;d=new IZ;ATS();m=A6q;Ok(d,m,A6r,A6s,A6t,A6u,m);LI(l,d,AGf(),AGL(S(C(264)),S(C(265)),S(C(266))),AGf(),AG9(1,0.17499999701976776),A6v,A6w);Ly(b,c,e,h,k,l,ADy(S(C(255)),S(C(256)),
S(C(257)),S(C(267))));return b;}
function Ly(a,b,c,d,e,f,g){var h;h=d.data;a.kA=DM(C(167),17.0);a.AM=DM(C(156),15.0);a.pg=DM(C(167),15.0);a.op=DM(C(14),15.0);a.br=b;a.Eu=c;a.ju=d;a.kS=e;if(h.length>=15){a.dA=f;a.dV=g;return;}b=new BR;X(b);N(b);}
function Wg(a,b){if(b===null)b=a.br.d9;return b;}
function Ki(){var a=this;CM.call(a);a.dM=null;a.nw=null;}
function A2L(a){var b=new Ki();AGX(b,a);return b;}
function AGX(a,b){var c,d,e,f;KF(a,b,0);c=PQ(a.bb);a.nw=c;d=KZ(a.q,c);a.dM=d;ML(a.q,d);c=b.p.bF;d=new XX;d.rl=a;Bc(c,d);c=b.p.bF;d=new HM;e=a.dM;BD(e);f=new XV;f.Ax=e;In(d,b,f);Bc(c,d);Sv(a.dM,b.p,0);b=b.p.c1;c=new XW;c.w4=a;Bc(b,c);Hl(a);}
function AWB(a,b){if(J0(a.bb,b))LK(a.dM);}
function AZ0(a,b){return IT(a.dM,b);}
function ANL(a){Hu(a);Ii(a.dM);JF(a.bb);}
function A09(a){return Gt(0);}
function AKB(a,b,c){var d;Iw(a,b,c);d=a.dM;Mg(d,d.i,b,c);}
function AVE(a,b){BD(b);Im(a.nw,b);Hy(a.dM,b);}
function AIh(a,b){if(b.bl!=121)return 0;return 1;}
function ADT(a,b){var c,d,e;if(DL(a.q,a.dM)){c=a.nw;b=b.h;d=a.dM;e=new Rn;e.tu=a;GF(c,b,d,a,d,a,e);}return 1;}
function AHk(){var a=this;Cu.call(a);a.xR=null;a.oB=null;a.jU=null;a.eb=null;a.lw=null;a.he=null;a.es=null;a.jh=null;a.pY=null;a.iN=null;a.pH=null;a.pI=null;a.oZ=null;a.x_=null;a.BO=null;a.sk=0;}
function A2W(a){var b=new AHk();AXs(b,a);return b;}
function AXs(a,b){var c,d,e,f;Eh(a,b);c=(Ix()).br.d9;a.xR=c;a.oB=AJ_(c);a.jU=new Bg;a.eb=KD();a.lw=KD();a.he=Sw(0,0,3,3);a.es=H6(0,0,300,300);a.jh=AWk();d=Q(BK,4);e=d.data;e[0]=C(211);e[1]=C(177);e[2]=C(227);e[3]=C(226);a.pY=d;a.iN=Q(J_,e.length);c=b.p.bO;f=new Te;f.fl=a;Bc(c,f);c=b.p.bF;f=new Yl;f.A_=a;Bc(c,f);c=b.p.n6;f=new Yk;f.rP=a;Bc(c,f);c=b.p.gx;f=new Yj;f.Cz=a;Bc(c,f);c=b.p.lW;f=new Yi;f.Dn=a;Bc(c,f);c=b.p.c1;f=new Yh;f.DS=a;Bc(c,f);b=b.p.fi;c=new Yg;c.zV=a;Bc(b,c);a.pH=ABP(a,1);a.pI=ABP(a,0);RB(a,a.eb,
a.pH);RB(a,a.lw,a.pI);a.oZ=ACZ(a,0);a.x_=ACZ(a,1);FJ(a.es,a.oZ);FS(a.es);Hv(a.es,Dv(169,183,198));Fb(a.es,a.xR);Cw(a.eb.W,1.0,1.0,1.0,1.0);Fb(a.eb,a.es.bk);BO(a.he.bk,a.oB);}
function RB(a,b,c){FJ(b,c);FS(b);}
function RZ(a,b){Iq(DP(),0.5+DP()*0.5,0.5+DP()*0.5,1.0,b.W);}
function ABP(a,b){var c,d;c=D2(a.B.O,200,100,b);Hq(c,C(268),11.0);BW(c,C(269),0.0,20.0);JV(c,255,0,0);BW(c,C(269),0.25,40.0);JV(c,0,255,0);BW(c,C(269),0.5,60.0);JV(c,0,0,255);BW(c,C(269),0.75,80.0);d=CT(a.B.O);CK(d,c);Ew(c);return d;}
function ACZ(a,b){var c,d,e,f;c=D2(a.B.O,255,100,b);Hq(c,C(167),10.0);d=Bt();e=$rt_str(c.c$.font);f=new K;M(f);H(H(f,C(270)),e);Bk(d,L(f));El(c,C(271));BW(c,C(271),0.0,20.0);BW(c,C(271),0.25,40.0);BW(c,C(271),0.5,60.0);BW(c,C(271),0.75,80.0);e=CT(a.B.O);CK(e,c);Ew(c);return e;}
function AKU(a,b){var c;a.sk=a.sk+1|0;c=b/5.0;Iq(c-(c|0),1.0,1.0,1.0,a.he.W);return AAh(a.jh,b);}
function AME(a){var b,c,d,e,f,g,h,i;b=a.B.O;ED(b,a.oB);c=a.iN.data;d=c.length;e=0;while(e<d){Y5(c[e],b,0,0);e=e+1|0;}f=a.es;g=f.u;g.b=(a.jU.b-f.t.b|0)-5|0;g.a=0;B9(b,0);h=0;while(h<7){f=a.es;EB(f,b,a.oZ,Bb(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.es;f.u.b=(a.jU.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.x_;f=a.es;f.u.a=Bb(h,10+((10*f.t.a|0)/15|0)|0)+5|0;Sj(f,b,g,1);h=h+1|0;}Sj(a.eb,b,a.pH,1);B9(b,1);g=a.lw;f=a.pI;i=g.u;h=i.a;d=i.b;g=g.t;Gl(b,b.kz);Gv(b.kz,b.X,h,d,g,b.c3);NL(b.kz,b.X,f);FV(b);B9(b,0);f=
a.BO;if(f!==null)Vj(a.he,b,f,0,0,0.0);ABg(a.jh,b,new Bg);MM(b,C(272));}
function AOO(a,b,c){var d,e,f,g,h,i,j,k;d=Bt();e=Ck(b);f=new K;M(f);H(H(f,C(273)),e);Bk(d,L(f));d=Bt();f=new K;M(f);EC(H(f,C(274)),c);Bk(d,L(f));g=Cf(30.0,c);h=Cf(10.0,c);i=0;while(true){j=a.iN.data;if(i>=j.length)break;k=1+i|0;j[i]=Sw(Bb(h,k)+Bb(g,i)|0,g,g,g);RZ(a,a.iN.data[i]);i=k;}V(a.he.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.eb;V(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);V(a.lw.u,(b.a/2|0)+10|0,50);Ct(a.jU,b);}
function Wm(a,b){var c,d,e,f,g;c=Bt();d=!b.jw?C(275):C(276);e=b.d7;f=b.bl;g=b.yN;b=new K;M(b);Jn(H(U(H(H(H(b,d),e),C(277)),f),C(278)),g);Bk(c,L(b));return 0;}
function AAn(){var a=this;Cu.call(a);a.DU=null;a.kR=null;a.iP=null;a.hY=null;a.de=null;a.dN=null;a.mM=null;a.mA=null;a.jm=0;a.ix=null;a.iw=null;}
function QO(a,b,c){FJ(b,c);FS(b);}
function ADi(a,b,c,d,e,f){var g,h;g=D2(f,c,120,b);Cm(g,e);e=!b?C(279):C(280);h=new K;M(h);H(H(H(h,e),d),C(154));d=L(h);BW(g,d,0.0,20.0);BW(g,d,0.25,40.0);BW(g,d,0.5,60.0);BW(g,d,0.75,80.0);BW(g,d,1.0,100.0);h=CT(f);CK(h,g);Ew(g);return h;}
function AQb(a,b){return 0;}
function AUM(a){var b,c,d,e,f,g,h,i;b=a.B.O;ED(b,a.kR);B9(b,0);c=a.iP;d=c.b;e=a.hY;f=d-e.b|0;g=c.a-e.a|0;Bs(b,0,0,e,a.de.bk);Bs(b,g,0,a.hY,a.dN.bk);Bs(b,0,f,a.hY,a.de.W);Bs(b,g,f,a.hY,a.dN.W);c=a.de;e=c.u;h=e.b;i=((a.iP.b*3|0)/4|0)-(c.t.b/2|0)|0;Is(c,b,e.a,h,a.ix,0,1);c=a.de;Is(c,b,c.u.a,i,a.ix,1,1);c=a.dN;Is(c,b,c.u.a,h,a.iw,0,0);e=a.dN;Is(e,b,e.u.a,i,a.iw,1,0);MM(b,C(272));}
function AVX(a,b,c){var d,e;Ct(a.iP,b);V(a.hY,b.a/2|0,b.b/2|0);d=a.iP.b/4|0;e=a.de;d=d-(e.t.b/2|0)|0;V(e.u,(b.a/4|0)-(a.jm/2|0)|0,d);V(a.dN.u,((b.a*3|0)/4|0)-(a.jm/2|0)|0,d);}
function WT(){var a=this;CM.call(a);a.xO=null;a.e4=null;a.dw=null;a.n8=null;}
function AOi(a,b,c){var d;d=F9(a.q,a.n8);Jw(a.e4,d,a.q);Jw(a.dw,d,a.q);}
function Rf(b){return IV(b,AGk());}
function IV(b,c){var d;d=Lr();N3(d,M_(b,JZ(c,25)),!b?null:IV(b-1|0,c));N3(d,M_(b,JZ(c,20)),!b?null:IV(b-1|0,c));N3(d,M_(b,JZ(c,15)),!b?null:IV(b-1|0,c));N3(d,M_(b,JZ(c,10)),!b?null:IV(b-1|0,c));return GR(d);}
function M_(b,c){var d;if(b){d=new K;M(d);H(H(U(d,b),C(29)),c);c=L(d);}return c;}
function N3(b,c,d){if(d!==null)Fz(b,c,d);else{d=new UJ;d.rB=c;DZ(b,c,d);}}
function ANd(a,b,c){var d,e;Iw(a,b,c);b=a.q.bR;d=Ex(a.e4);e=Ex(a.dw);M3(a.e4,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);M3(a.dw,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AVz(a){var b,c,d,e,f,g,h,i;Hu(a);b=a.B.O;B9(b,1);c=a.xO;d=a.q;e=d.bR;V(c.no,e.a,Cf(2.0,d.cb));V(c.nR,Cf(2.0,d.cb),e.b);FC();f=A6c;g=d.b4;h=e.b/2|0;i=c.no;Bs(g,0,h-(i.b/2|0)|0,i,f);g=d.b4;h=e.a/2|0;c=c.nR;Bs(g,h-(c.a/2|0)|0,0,c,f);L3(a.e4,a.q);L3(a.dw,a.q);JF(a.bb);B9(b,0);}
function AOR(a,b){var c,d;c=NB(a.e4,b.h,a.q.cP);d=NB(a.dw,b.h,a.q.cP);return !c&&!d?0:1;}
function ALs(a,b,c,d){var e,f;e=NY(a.e4,b.h,c,d);f=NY(a.dw,b.h,c,d);return !e&&!f?0:1;}
function ZW(){CM.call(this);this.kj=null;}
function AMu(a,b,c){if(b===0.0)Yt(a);}
function Yt(a){var b,c,d,e,f,g,h,i;b=a.kj;if(b!==null){Ko(a.bb,b);NC(b);}b=(Ix()).dA;c=A36(a.q,new Ut);d=DM(C(156),14.0);e=AOh();f=0;while(f<300){g=Dj(f);h=new R_;h.Ad=C(281);h.Aa=g;h.Ab=C(282);VE(e,C(281),g,C(282),h);f=f+1|0;}Wv(c,ACk(e));Vz(c,b,d);g=ADC(a.q);i=Gx(c,a.q);I$(i,b.mD,b.on);K1(g,i);GQ(g,b);FM(g,C(145));a.kj=g;GA(a.bb,g);Qd(a);}
function ALK(a,b,c){Iw(a,b,c);Qd(a);}
function Qd(a){var b,c,d;b=a.q.bR;Ep(a.kj,BF((b.a*2|0)/10|0,(b.b*4|0)/10|0),BF((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.kj;b=AG8(c.V.k);d=new K;M(d);H(H(d,C(283)),b);FM(c,L(d));}
function Wj(){var a=this;HG.call(a);a.lX=null;a.hP=null;a.f3=null;a.jX=null;a.rw=null;a.jS=null;a.h1=null;a.hA=null;a.ln=0;a.hO=0;}
function Pj(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.hP.m>0){d=DP();e=a.hP;f=d*(e.m-1|0)|0;e=EH(e,f);EH(a.f3,f);f=a.hO;g=e.t;a.hO=f-Bb(g.a,g.b)|0;IS(a.lX,e.dn);}c=c+1|0;}}
function LR(a,b){var c,d,e,f,g,h,i,j;c=J9(a.q);Cm(c,a.jX);d=0;while(d<b){e=JZ(a.jS,1+(DP()*19.0|0)|0);f=KD();g=f.dn;h=a.lX;BD(c);i=new QJ;i.tB=c;BO(g,Kh(h,e,i));(UI(DP(),1.0,1.0,f.bk)).bB=0.5;h=f.u;g=f.dn;V(h,g.bm|0,g.bs|0);h=f.t;g=f.dn;V(h,g.be|0,g.bB|0);BC(a.f3,e);BC(a.hP,f);j=a.hO;h=f.t;a.hO=j+Bb(h.a,h.b)|0;d=d+1|0;}a.hA=Mz(a.lX);}
function AZz(a){var b,c,d,e,f,g,h,i;Hu(a);b=a.B.O;B9(b,1);c=a.q.b4;if(a.f3.m){d=a.hA;d=HC(c,d.a,d.b);Cm(d,a.jX);e=a.jX.ef;Bs(c,0,0,a.hA,a.rw);f=0;while(f<a.f3.m){g=Bx(a.hP,f);h=Bx(a.f3,f);g=g.dn;BW(d,h,g.bm,g.bs+e);f=f+1|0;}g=a.h1;if(!(g!==null&&BZ(g)==a.hA.a&&Dl(a.h1)==a.hA.b))a.h1=BY(a.h1,CT(c));CK(a.h1,d);Ew(d);i=0;while(i<a.f3.m){d=Bx(a.hP,i);Hv(d,CB(0));EB(d,c,a.h1,0,0);i=i+1|0;}}B9(b,0);}
function AKN(a,b){var c,d;if(a.ln){c=a.hA;d=Be(Bb(c.a,c.b),2211840);if(a.hO/d<=0.7)LR(a,Gm(a.jS,5));else Pj(a,Gm(a.jS,5));}return a.ln;}
function Sf(){var a=this;Cu.call(a);a.et=null;a.hS=null;a.iO=null;a.os=null;a.eX=0;a.tZ=0;a.rx=null;a.l_=0;a.ws=0;a.wS=null;a.y$=null;}
function AKA(a){var b,c;b=a.eX;c=new K;M(c);U(H(c,C(284)),b);$rt_globals.console.info($rt_ustr(L(c)));ED(a.et,a.rx);Kb(a.iO,a.eX,0,Ho(a),5000,a.os.a,20);B9(a.et,1);UQ(a.iO,a.et);B9(a.et,0);b=a.eX;c=new K;M(c);U(H(c,C(284)),b);$rt_globals.console.info($rt_ustr(L(c)));AAR(a.hS,a.eX/a.l_|0,a.et);AAa(a.hS,a.eX,Ho(a),a.y$,a.et);}
function ATv(a,b,c){a.os=b;RS(a.hS,BF(0,0),50,Ho(a),c);Sl(a.hS,a.et,0,Ho(a));}
function T$(a){return 5000-Ho(a)|0;}
function Ho(a){return Be(a.tZ,a.os.b);}
function Dq(){var a=this;Cu.call(a);a.py=null;a.gF=null;a.qb=0.0;}
function A6x(a){var b=new Dq();HI(b,a);return b;}
function HI(a,b){Eh(a,b);a.py=AHY(0,0,64);a.gF=new Bg;Ws(b.bV,JH(BJ(a)));}
function Zt(a){ED(a.B.O,a.py);}
function Sb(a,b,c){Ct(a.gF,b);a.qb=c;}
var QM=G(Dq);
var WA=G(CM);
function G$(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.B.bV;f=new QI;f.Cl=a;f.tg=b;g=Q(B,1);h=g.data;i=BN(1);i.data[0]=b;h[0]=i;CR(e,f,C(285),g);d=d+1|0;}}
function ACF(a,b){var c,d,e,f,g,h;c=b.data;d=Bt();e=Ck(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((KU(b,1)).iA));d=Bt();e=Ck(c[1]);if(b===null)f=C(23);else{f=new K;M(f);BU(f,C(36));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BU(f,C(37));U(f,c[g]);g=g+1|0;}BU(f,C(38));f=L(f);}h=new K;M(h);H(H(H(H(h,C(287)),e),C(288)),f);Bk(d,L(h));}
function VX(){var a=this;Dq.call(a);a.eV=null;a.gm=null;a.ne=null;a.zY=null;a.pS=null;}
function ANW(a,b){b=b/5.0;Iq(b-(b|0),1.0,1.0,1.0,a.gm.W);return 0;}
function AVp(a){Zt(a);EB(a.eV,a.B.O,a.zY,0,0);Vj(a.gm,a.B.O,a.ne,0,0,0.0);MM(a.B.O,C(272));}
function A07(a,b,c){var d,e,f;Sb(a,b,c);V(a.gm.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.eV;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Sd(){var a=this;Dq.call(a);a.gI=null;a.qy=null;a.l8=null;a.ke=null;a.jA=null;}
function A1A(a){var b,c,d,e,f,g;Zt(a);b=a.B.O;c=a.ke;LH(b,c.a,c.b,a.jA);b=a.gI;c=a.qy;d=a.gF;e=a.B.O;f=0;while(true){g=0;while(true){EB(b,e,c,g,f);g=g+BZ(c)|0;if(g>=d.a)break;}f=f+Dl(c)|0;if(f>=d.b)break;}F5(a.B.O);}
function ANG(a,b,c){Sb(a,b,c);V(a.jA,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function ZL(){var a=this;Cu.call(a);a.eC=null;a.oe=null;a.gq=null;a.b_=null;a.e_=0;a.iu=null;a.fu=0;a.CO=20;a.Ex=11;a.Dj=220;a.lN=null;a.D4=5000;a.id=0;a.gB=null;}
function ASy(a){var b,c,d,e,f,g,h;b=a.iu;c=a.fu;d=a.lN;Kb(b,c,0,d.b,5000,d.a,20);B9(a.eC,1);UQ(a.iu,a.eC);if(a.b_===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BW(a.oe,Dj(e),0.0,c);}b=CT(a.eC);a.b_=b;CK(b,a.oe);}if(a.fu<=a.e_)while(true){f=a.e_;if(f<=a.fu)break;a.e_=f-20|0;b=a.gq;g=a.id-1|0;a.id=g;BW(b,Dj(g),0.0,20.0);JD(a.b_,a.gq,0,a.e_%220|0);EL(a.gq);}else while(a.e_<(a.fu-20|0)){b=a.gq;g=a.id+1|0;a.id=g;BW(b,Dj((g+11|0)-1|0),0.0,20.0);JD(a.b_,a.gq,0,a.e_%220|0);EL(a.gq);a.e_=a.e_+20|0;}b=H6(0,0,BZ(a.b_),Dl(a.b_));It(b,
0,0,BZ(a.b_),Dl(a.b_));Hv(b,a.gB.data[0]);Fb(b,a.gB.data[1]);EB(b,a.eC,a.b_,400,0);g=a.fu%220|0;f=Be(Dl(a.b_)-g|0,200);d=H6(0,0,BZ(a.b_),f);It(d,0,g,BZ(a.b_),f);Hv(d,a.gB.data[0]);Fb(d,a.gB.data[1]);EB(d,a.eC,a.b_,0,0);h=H6(0,f,BZ(a.b_),(Dl(a.b_)-f|0)-20|0);It(h,0,0,BZ(a.b_),(Dl(a.b_)-f|0)-20|0);Hv(h,a.gB.data[1]);Fb(h,a.gB.data[0]);EB(h,a.eC,a.b_,0,0);}
function AVB(a,b,c){Ct(a.lN,b);}
function AZe(a,b){return 0;}
function Zl(a){return 5000-a.lN.b|0;}
function Kc(){Dq.call(this);this.d4=0;}
function Y4(a){var b,c;b=a.B.bV;c=new TI;c.wQ=a;Rc(b,c,VZ(a));}
function Qb(a){var b,c,d,e;b=a.d4+1|0;a.d4=b;c=JH(F(Kc));d=new K;M(d);H(H(U(H(d,C(289)),b),C(29)),c);e=L(d);c=a.B.bV;d=new Va;d.wZ=e;SX(c,e,d,VZ(a));}
function VZ(a){var b;b=new Yo;b.AU=a;return b;}
function AOD(a,b,c,d){a:{switch(c){case 0:break;case 2:Qb(a);break a;default:break a;}Y4(a);}return 1;}
function R2(){var a=this;Dq.call(a);a.tv=null;a.f9=null;a.lf=null;a.oT=null;a.uY=null;}
function AS$(a){var b,c,d,e,f,g,h;if(a.lf===null){b=a.B.O;c=a.uY;c=Tn(b,c.hZ,c.gH,a.qb);Cm(b.cd,c);d=CV(El(b.cd,C(290)));e=Bt();f=c.ox;g=new K;M(g);EC(H(g,C(291)),f);Bk(e,L(g));h=M1(c,1.1799999475479126);e=Bt();g=new K;M(g);U(H(U(H(g,C(292)),d),C(202)),h);Bk(e,L(g));e=HC(b,d,h);a.oT=e;Cm(e,c);BW(a.oT,C(290),0.0,c.ef);b=CT(b);a.lf=b;CK(b,a.oT);FJ(a.f9,a.lf);FS(a.f9);b=a.f9.bk;FC();BO(b,A5O);BO(a.f9.W,A6y);}b=a.B.O;ED(b,a.tv);c=a.f9;e=c.u;g=a.gF;d=g.a;c=c.t;V(e,(d-c.a|0)/2|0,(g.b-c.b|0)/2|0);EB(a.f9,b,a.lf,0,
0);}
function GY(){var a=this;Cu.call(a);a.un=null;a.ch=null;a.d1=null;a.df=null;a.fe=null;a.eB=null;}
function Op(a,b){var c,d;Eh(a,b);a.un=CB(20);a.ch=RY();a.d1=new Bg;a.df=new Bg;a.fe=new Bg;a.eB=new Bg;c=b.p.bF;d=new ABn;d.CE=a;Bc(c,d);Bc(b.p.bO,a);b=a.ch.bk;FC();BO(b,A5O);BO(a.ch.W,A6y);}
function AEt(a){var b,c,d;b=a.B.O;ED(b,a.un);c=a.ch;d=c.u;Bs(b,d.a,d.b,c.t,c.bk);B9(b,1);c=a.ch;d=c.u;ADr(b,d.a,d.b,c.t,a.d1,a.df,a.fe,a.eB,c.W);B9(b,0);}
function AXp(a,b){return 0;}
var SI=G(GY);
function AY4(a,b,c){var d,e,f;d=a.ch;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);V(a.d1,0,0);V(a.df,Be(b.a,b.b),Be(b.a,b.b));b=a.fe;d=a.d1;V(b,d.a,d.b+20|0);b=a.eB;d=a.df;V(b,d.a,d.b+40|0);}
function AZX(a,b){var c,d,e;Ct(a.d1,b.h);b=a.df;c=a.ch;d=c.u;e=d.a;c=c.t;V(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fe;c=a.d1;V(b,c.a,c.b+20|0);b=a.eB;c=a.df;V(b,c.a,c.b+40|0);return 0;}
function SH(){var a=this;GY.call(a);a.fQ=null;a.f$=null;}
function A1i(a,b){var c;c=a.df;b=b.h;c.b=b.b-50|0;a.eB.b=b.b+100|0;return 1;}
function AMr(a){var b,c,d,e,f,g,h;b=Bd(a.d1.a,a.fe.a);c=Be(a.df.a,a.eB.a);d=Be(a.d1.b,a.df.b)-50|0;e=Bd(a.fe.b,a.eB.b)+50|0;Hb(a.ch,b,d,c-b|0,e-d|0);AEt(a);f=a.ch.u.a-10|0;ZN(a,a.B.O,10,f,a.d1,a.fe);g=a.ch;h=g.u.a+g.t.a|0;ZN(a,a.B.O,h,f,a.df,a.eB);}
function ZN(a,b,c,d,e,f){var g;V(a.fQ,c,a.ch.u.b);V(a.f$,d,e.b-a.ch.u.b|0);g=a.fQ;Bs(b,g.a,g.b,a.f$,a.ch.bk);V(a.fQ,c,e.b);V(a.f$,d,f.b-e.b|0);e=a.fQ;Bs(b,e.a,e.b,a.f$,a.ch.W);V(a.fQ,c,f.b);e=a.f$;g=a.ch;V(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.fQ;Bs(b,e.a,e.b,a.f$,a.ch.bk);}
function ALd(a,b,c){}
function Xk(){var a=this;CM.call(a);a.Dz=3;a.xD=null;a.kc=null;a.kb=null;}
function AZ2(a,b,c){if(b===0.0)ABS(a);}
function ABS(a){var b;Y0(a,a.kc);Y0(a,a.kb);a.kc=Qc(a,0.5,0,C(293));a.kb=Qc(a,1.0,1,C(294));GA(a.bb,a.kc);GA(a.bb,a.kb);b=a.q.bR;Ep(a.kb,BF((b.a*2|0)/10|0,(b.b*2|0)/10|0),BF((b.a*7|0)/10|0,(b.b*7|0)/10|0));Ep(a.kc,BF(b.a/10|0,b.b/10|0),BF((b.a*6|0)/10|0,(b.b*6|0)/10|0));}
function Y0(a,b){if(b!==null){Ko(a.bb,b);NC(b);}}
function Qc(a,b,c,d){var e,f,g;e=ADC(a.q);f=new PR;g=new Rs;g.sz=e;g.sy=d;LD(f);f.lT=new B0;f.pk=new Bg;f.xl=g;f.ry=b;if(c){d=Gx(f,a.q);I$(d,A6z,A6A);f=d;}K1(e,f);GQ(e,E_());ZH(e,a.xD,3.0);return e;}
function Dx(){CM.call(this);this.g6=null;}
function A3j(a){var b=new Dx();H2(b,a);return b;}
function H2(a,b){G6(a,b);Bc(a.q.ei,a);BO(a.dJ,CB(43));}
function AU$(a){return ATn();}
function AOY(a){return 1;}
function NM(a,b){GQ(a.g6,b);}
function AHN(a,b){var c,d,e;c=a.q.bR;d=!a.o0()?0:ABO(b);e=c.b-d|0;Ep(b,BF(c.a/20|0,d+(e/20|0)|0),BF((c.a*9|0)/10|0,(e*9|0)/10|0));}
function AZI(a,b,c){if(b===0.0){a.g6=A4a(a.q,a.hs());NM(a,E_());if(a.o0())FM(a.g6,Xu(BJ(a)));GA(a.bb,a.g6);a.kl(a.g6);}}
function P$(){var a=this;Dx.call(a);a.lO=null;a.ez=null;a.DC=null;}
function AU6(a,b){return IT(a.ez,b);}
function ALN(a){var b;b=KZ(a.q,a.lO);a.ez=b;a.DC=Sv(b,a.B.p,1);AJB(a.ez);ML(a.q,a.ez);return a.ez;}
function ATU(a){return 0;}
function A1k(a,b){AHN(a,b);Hl(a);}
function ARC(a,b){BD(b);Im(a.lO,b);Hy(a.ez,b);NM(a,b.dA);}
function AQZ(a,b){J0(a.bb,b);}
function Wn(){B.call(this);this.vG=null;}
function AZw(a,b){DV(a.vG,null);return 0;}
var KP=G(0);
function ALx(a,b,c){Lo(b);}
function AJW(a,b){var c;c=new Rg;c.tz=a;c.tA=b;return c;}
function Rk(){var a=this;Dx.call(a);a.c6=null;a.o7=null;a.ml=null;a.jb=null;}
function APY(a){var b,c,d,e,f;b=new Qy;c=a.bb;EX(b);b.f_=PQ(c);d=Tf(c.dE);b.gb=d;b.kr=Gx(d,c.dE);e=new Pg;EX(e);d=new B0;AN6();AJg(d,A5R);e.z3=d;b.og=e;f=KZ(c.dE,b.f_);b.fL=f;b.zr=a;Vy(b,I(CE,[b.kr,b.og,f]));b.rD=Gt(1);a.c6=b;b=AJt(C(295),0);IN(b);d=new Rp;d.z0=a;b.ek=d;EO(a.c6.gb,b);return a.c6;}
function Rq(a){var b,c;b=a.B.bV;c=new ABq;c.uz=a;I5(b,c);}
function APR(a,b){var c,d,e,f,g,h,i;c=a.q.bR;d=ABO(b);e=c.b-d|0;f=Cz(a.q,5.0);g=BF(f,f+d|0);h=new Bg;i=c.a;d=f*2|0;Ql(h,i-d|0,e-d|0);Ep(b,g,h);Hl(a);}
function AXL(a,b){var c;NM(a,b.dA);c=a.c6;JY(c.gb,b);Jx(c.gb,c.kr);Im(c.f_,b);Hy(c.fL,b);}
function ARm(a,b){var c,d,e;c=b.oE;a.o7=c;d=Co(a.ml,c);if(d!==null)ACU(a,d);else{b=Bt();d=Ck(c);e=new K;M(e);H(H(e,C(296)),d);Bk(b,L(e));if(Co(a.jb,c)!==null){b=Ck(c);c=new K;M(c);H(H(c,C(297)),b);$rt_globals.console.info($rt_ustr(L(c)));}else{Em(a.jb,c,KI(c));b=new ABK;b.xa=a;b.w8=c;d=new ABL;d.AE=a;d.AF=c;Up(c,b,d);}}}
function ACU(a,b){HV(a.c6.fL,b);b=a.c6;FF(b.f_.b6.dE,b.fL);}
function AKT(a,b){ACM(b);if(Jb(b)>0)EF(a.c6.gb);}
function ANn(a,b){if(Jb(b)>0)EF(a.c6.gb);La(b);}
function AQ_(a,b,c){if(AGZ(c)!==C(177))Qr(b);else Lo(b);}
function Yd(){var a=this;Dx.call(a);a.lc=null;a.u2=null;}
function AX0(a){var b,c,d,e;b=Tf(a.q);a.lc=b;BD(b);c=new SP;c.sq=b;b=Pk(C(298),4,c);d=Bt();e=Os(b);c=new K;M(c);U(H(c,C(299)),e);Bk(d,L(c));EO(a.lc,b);JY(a.lc,a.u2);b=a.lc;return Jx(b,Gx(b,a.q));}
function AY_(a,b){var c;c=a.q.bR;Ep(b,BF(c.a/30|0,c.b/10|0),BF((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
var Oy=G(Ki);
function AUP(a){return Gt(1);}
function ABM(){var a=this;Cu.call(a);a.sr=null;a.mq=null;a.e9=null;a.or=null;a.mp=0.0;a.gV=null;a.vp=null;a.s4=null;a.xe=null;a.xX=null;a.rJ=null;a.pV=null;a.Bj=null;a.vR=null;a.lk=null;}
var A6B=0;function A2Y(a){var b=new ABM();ASZ(b,a);return b;}
function ASZ(a,b){var c,d,e;Eh(a,b);a.sr=new B0;a.mq=ACY(1.0,0.0,0.0,1.0);a.e9=RY();a.or=new Bg;a.mp=3.1415927410125732;c=AIV();a.gV=c;a.vp=HA(c,1.25);a.s4=HA(a.gV,1.3333333730697632);a.xe=HA(a.gV,1.5);a.xX=HA(a.gV,1.6666666269302368);a.rJ=HA(a.gV,2.0);a.pV=ACY(a.mp/24.0,15.0,3.0,0.5);c=ACY(a.mp/12.0,25.0,3.0,0.5);a.Bj=c;a.vR=DU([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.lk=I(B0,[a.gV,a.vp,a.s4,a.xe,a.xX,a.rJ,a.pV,c]);c=b.p.bF;d=new Qu;d.Ev=a;Bc(c,d);Bc(b.p.bO,a);b=a.e9.W;FC();BO(b,A5O);Hb(a.e9,0,0,600,60);e
=MT(0.5,0.375);Jc(0.375,e);Jc(0.375,Jc(3.0,MT(e,3.0)));HA(AIV(),3.0);}
function A1d(a,b,c){var d,e,f;Ct(a.or,b);d=a.e9;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function HA(b,c){var d;d=new B0;Uj(b,c,d);return d;}
function AIV(){var b;b=new B0;Ls(b);return b;}
function AWu(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.B.O;ED(b,a.sr);B9(b,1);c=a.e9;d=c.u.a;e=c.t.b/2|0;f=0;while(true){g=a.lk.data;if(f>=g.length)break;h=a.vR.data[f];c=g[f];i=Wp(c);j=a.e9;k=j.u;l=k.a;m=k.b;L1(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.mq);f=f+1|0;}if(A6B){c=A2P(1,2);n=0;while(n<1000){h=Gm(c,a.lk.data.length);l=Gm(c,a.or.b-a.e9.t.b|0);j=a.lk.data[h];i=j.bs;i=i-(i|0)>=0.25?0.0:0.5;k=a.e9;L1(b,k.u.a,l,k.t,d+i,(e+l|0)+i,j,a.mq);n=n+1|0;}}B9(b,0);}
function ARn(a,b){return A6B;}
function Td(){var a=this;Dx.call(a);a.mn=null;a.ej=null;a.r9=null;a.v6=null;}
function AC7(a,b,c){var d,e,f,g;d=Q(B3,1);e=d.data;f=new B3;g=new Rb;g.u9=a;g.u8=b;C7(f,g,c);e[0]=f;return Dy(d);}
function Ib(a,b){var c,d;c=a.B.bV;d=new U8;d.t9=a;d.t8=b;I5(c,d);}
function A0g(a){var b,c,d;b=AUJ(a.q);a.ej=b;ADa(b,a.mn);b=AJt(C(300),0);c=AJt(C(301),0);IN(b);IN(c);d=new Uw;d.yg=a;b.ek=d;d=new Uv;d.wq=a;c.ek=d;EO(a.ej.d$,b);EO(a.ej.d8,c);KK(a.ej,W6());return a.ej;}
function Pl(){var a=this;Dx.call(a);a.um=null;a.fB=null;}
function W6(){var b;b=I(LW,[M8(1,3,4,5,1),M8(5,6,10,2,2),M8(12,2,13,3,3),M8(15,3,17,2,4)]);return A3O(Q(Gi,0),Q(Gi,0),b);}
function AVT(a){var b,c,d,e;b=AUJ(a.q);a.fB=b;ADa(b,a.um);c=a.fB.d$;BD(c);d=new AAj;d.qL=c;b=Pk(C(298),4,d);d=a.fB.d8;BD(d);e=new AAk;e.sF=d;c=Pk(C(298),4,e);EO(a.fB.d$,b);EO(a.fB.d8,c);KK(a.fB,W6());return a.fB;}
function J1(){var a=this;B.call(a);a.A1=null;a.d9=null;a.tQ=null;a.Ck=null;a.sf=null;a.kD=null;a.q4=null;a.vv=null;a.lq=null;a.ll=null;a.gc=null;}
function A6C(a,b,c,d,e,f,g,h,i,j,k){var l=new J1();Mj(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Mj(a,b,c,d,e,f,g,h,i,j,k,l){a.A1=b;a.d9=c;a.tQ=d;a.Ck=e;a.sf=f;a.kD=g;a.q4=h;a.vv=i;a.lq=j;a.ll=k;a.gc=l;}
function AEW(){B.call(this);this.Ec=null;}
function AIF(a){var b=new AEW();ATJ(b,a);return b;}
function ATJ(a,b){a.Ec=b;}
var ADW=G(0);
function AHe(){var a=this;B.call(a);a.oz=null;a.kL=null;a.wT=null;a.p0=null;}
function AJl(a,b,c,d){var e=new AHe();A1n(e,a,b,c,d);return e;}
function A1n(a,b,c,d,e){a.oz=b;a.kL=c;a.wT=d;a.p0=e;}
var AFi=G(0);
function E_(){var b,c,d;b=new IR;c=new IZ;AXI();d=A6D;Ok(c,d,A6E,A6F,A6G,A6H,d);LI(b,c,AGD(),AGL(S(C(302)),S(C(265)),S(C(266))),AGD(),AG9(1,0.125),A6I,A6J);return b;}
function AGD(){var b,c;b=new Ka;c=S(C(303));AXI();KX(b,c,A6K,A6L);return b;}
function AGf(){var b,c;b=new Ka;c=S(C(266));ATS();KX(b,c,A6M,A6N);return b;}
function AJ4(){var b,c;b=new Ka;AF$();c=A6O;AT4();KX(b,c,A6P,A6Q);return b;}
function AGW(){var a=this;B.call(a);a.yt=null;a.vF=null;a.t3=null;a.qa=null;}
function ADy(a,b,c,d){var e=new AGW();AUj(e,a,b,c,d);return e;}
function AUj(a,b,c,d,e){a.yt=b;a.vF=c;a.t3=d;a.qa=e;}
function ADo(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dV.vF;break a;case 3:if(c!=3){b=b.dV.qa;break a;}b=b.dV.t3;break a;default:b=b.br.d9;break a;}b=b.dV.yt;}return b;}
function JQ(a,b,c){return ADo(a,b,0,c);}
function Mo(){var a=this;B.call(a);a.lC=null;a.j7=null;}
function VI(a,b){var c;c=a.j7;a.j7=b;return c;}
function Ku(){var a=this;Mo.call(a);a.bS=null;a.b1=null;a.gu=0;a.gE=0;}
function MQ(a){var b;b=Lj(a);if(b==2){if(Lj(a.b1)<0)a.b1=OU(a.b1);return PW(a);}if(b!=(-2))return a;if(Lj(a.bS)>0)a.bS=PW(a.bS);return OU(a);}
function Lj(a){var b,c;b=a.b1;c=b===null?0:b.gu;b=a.bS;return c-(b===null?0:b.gu)|0;}
function OU(a){var b;b=a.bS;a.bS=b.b1;b.b1=a;EU(a);EU(b);return b;}
function PW(a){var b;b=a.b1;a.b1=b.bS;b.bS=a;EU(a);EU(b);return b;}
function EU(a){var b,c,d;b=a.b1;c=b===null?0:b.gu;b=a.bS;d=b===null?0:b.gu;a.gu=Bd(c,d)+1|0;a.gE=1;b=a.bS;if(b!==null)a.gE=1+b.gE|0;b=a.b1;if(b!==null)a.gE=a.gE+b.gE|0;}
var AJ7=G();
function ALG(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new XF;c=c.buffer;d.f6=c;d.pP=new $rt_globals.Int8Array(c);d.mf=new $rt_globals.Uint16Array(c);d.zh=new $rt_globals.Int32Array(c);d.rR=new $rt_globals.Float32Array(c);d.r3=new $rt_globals.Float64Array(c);e=d.f6.byteLength;c=new K;M(c);U(H(c,C(304)),e);CQ(L(c));e=b.callToCpp1();c=new K;M(c);U(H(c,C(305)),e);CQ(L(c));f=b.callToCpp2();c=new K;M(c);EC(H(c,C(306)),f);CQ(L(c));c=OJ(d,b.getC8String());g=new K;M(g);H(H(g,C(307)),c);CQ(L(g));c
=V4(d,b.getC16String());g=new K;M(g);H(H(g,C(308)),c);CQ(L(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.f6,h,8));c=AFE(i);g=new K;M(g);H(H(g,C(309)),c);CQ(L(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.f6,h,8));c=ARu(j);g=new K;M(g);H(H(g,C(310)),c);CQ(L(g));k=AIg(d,b.getCDoubleArray8(),8);l=ATg(k);c=new K;M(c);H(H(c,C(311)),l);CQ(D_(c));l=ATc(b.getC8String(),C(312),d);c=LX();H(H(c,C(313)),l);CQ(D_(c));l=APo(b.getC16String(),C(314),
d);c=LX();H(H(c,C(315)),l);CQ(D_(c));c=AYG(i,d,b.getCIntArray8(),DU([11,22,33,44,55,66,77,88]));g=LX();H(H(g,C(316)),c);CQ(D_(g));c=ARF(j,d,b.getCFloatArray8(),100,DU([111,222,333,444,555,666,777,888]));g=LX();H(H(g,C(317)),c);CQ(D_(g));b=AZW(k,d,b.getCDoubleArray8(),1000,DU([1111,2222,3333,4444,5555,6666,7777,8888]));c=LX();H(H(c,C(318)),b);CQ(D_(c));}
function ARF(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(319);h=0;i=e;a:{while(h<g){if(CV(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.rR[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(320);}return C(321);}
function AZW(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(319);h=0;i=e;a:{while(h<g){if(Gw(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.r3[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(320);}return C(321);}
function AYG(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(319);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.zh[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(320);}return C(321);}
function ATc(b,c,d){var e,f,g,h;e=OJ(d,b);if(!Bi(c,e))return C(322);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.pP[h])return C(323);f=f+1|0;}return C(320);}
function APo(b,c,d){var e,f,g,h;e=V4(d,b);if(!Bi(c,e))return C(322);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.mf[h>>>1|0]&65535))return C(323);f=f+1|0;}return C(320);}
function CQ(b){XD(C(2),b);}
function AOy(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function XX(){B.call(this);this.rl=null;}
function AUA(a,b){return AIh(a.rl,b);}
function XV(){B.call(this);this.Ax=null;}
function AV6(a,b){Jh(a.Ax,b);}
function XW(){B.call(this);this.w4=null;}
function ARW(a,b){b=b;return ADT(a.w4,b);}
function AGS(){J_.call(this);this.dn=null;}
function KD(){var a=new AGS();A01(a);return a;}
function H6(a,b,c,d){var e=new AGS();AWX(e,a,b,c,d);return e;}
function A01(a){ABh(a);a.dn=new B0;}
function AWX(a,b,c,d,e){ABh(a);a.dn=new B0;Hb(a,b,c,d,e);}
function FS(a){var b,c;b=a.t;c=a.dn;V(b,c.be-c.bm|0,c.bB-c.bs|0);}
function FJ(a,b){It(a,0,0,BZ(b),Dl(b));}
function It(a,b,c,d,e){Cw(a.dn,b,c,d,e);}
function EB(a,b,c,d,e){var f;f=a.u;D4(b,f.a+d|0,f.b+e|0,a.t,a.dn,c,a.W,a.bk,0);}
function Sj(a,b,c,d){var e;e=a.u;D4(b,e.a,e.b,a.t,a.dn,c,a.W,a.bk,d);}
function Is(a,b,c,d,e,f,g){D4(b,c,d,a.t,a.dn,e,!f?a.W:a.bk,!f?a.bk:a.W,g);}
function Hv(a,b){BO(a.W,b);}
function Fb(a,b){BO(a.bk,b);}
function Te(){B.call(this);this.fl=null;}
function AUN(a,b){var c,d,e,f,g,h;c=b.h;d=c.a;e=a.fl.he;f=e.t;d=d-f.a|0;g=c.b-f.b|0;V(e.u,d,g);c=a.fl;e=c.B.bV;b=b.h;d=0;a:{while(true){h=c.iN.data;if(d>=h.length)break;if(E7(h[d],b)){b=c.pY.data[d];break a;}d=d+1|0;}b=null;}Y7(e,b);return 1;}
function AKI(a,b,c,d){if(!c&&d==2){b=a.fl;RZ(b,b.eb);}return 1;}
function AUG(a,b,c){var d,e;d=Bt();e=new K;M(e);U(H(e,C(324)),c);Bk(d,L(e));if(c)return null;d=b.h;e=!E7(a.fl.eb,d)?null:d;TA(a.fl.jh,d.a,d.b);b=a.fl;X3(b.jh,MI(b.B.bV));if(e===null)b=A5W;else{b=new ABu;b.sb=a;b.sc=e;}return b;}
function AUb(a,b,c){var d;b=Bt();d=new K;M(d);U(H(d,C(325)),c);Bk(b,L(d));return 1;}
function Yl(){B.call(this);this.A_=null;}
function A0f(a,b){return Wm(a.A_,b);}
function Yk(){B.call(this);this.rP=null;}
function AYJ(a,b){return Wm(a.rP,b);}
function Yj(){B.call(this);this.Cz=null;}
function AW8(a,b,c){var d,e;Bk(Bt(),C(326));d=!c?C(327):C(54);e=new K;M(e);H(H(H(e,C(328)),d),C(329));AB4(b,L(e));return 1;}
function Yi(){B.call(this);this.Dn=null;}
function ATK(a){Bk(Bt(),C(330));}
function Yh(){B.call(this);this.DS=null;}
function AQi(a,b){Bk(Bt(),C(331));return 1;}
function Yg(){B.call(this);this.zV=null;}
function A0n(a,b,c,d){var e,f,g;b=a.zV;e=( -d|0)/10|0;b=b.eb;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Hg(){var a=this;B0.call(a);a.g$=0;a.hb=0;a.g_=0;a.ha=0;}
function CB(a){var b=new Hg();AS4(b,a);return b;}
function Dv(a,b,c){var d=new Hg();AVv(d,a,b,c);return d;}
function S(a){var b=new Hg();AZL(b,a);return b;}
function ES(a,b,c,d){var e=new Hg();Q5(e,a,b,c,d);return e;}
function BV(a){var b=new Hg();KM(b,a);return b;}
function AS4(a,b){Q5(a,b,b,b,255);}
function AVv(a,b,c,d){Q5(a,b,c,d,255);}
function AZL(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.g$=Kd(P(b,1))*17|0;a.hb=Kd(P(b,2))*17|0;a.g_=Kd(P(b,3))*17|0;a.ha=255;}else{a.g$=LG(P(b,1),P(b,2));a.hb=LG(P(b,3),P(b,4));a.g_=LG(P(b,5),P(b,6));a.ha=J(b)!=9?255:LG(P(b,7),P(b,8));}Iy(a.g$,a.hb,a.g_,a.ha,a);return;}}
function Q5(a,b,c,d,e){a.g$=b;a.hb=c;a.g_=d;a.ha=e;Iy(b,c,d,e,a);}
function KM(a,b){a.g$=b.g$;a.hb=b.hb;a.g_=b.g_;a.ha=b.ha;BO(a,b);}
function Kd(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LG(b,c){return (16*Kd(b)|0)+Kd(c)|0;}
var AFT=G(0);
function Gt(b){return !b?I(BK,[C(156),C(167),C(332)]):I(BK,[C(156),C(167),C(332),C(34)]);}
function VV(){B.call(this);this.lQ=null;}
function AM0(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.lQ.de;e=DP();f=e-0.5+(DP()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DP()*0.3;h=0.5+DP()*0.5;Iq(e,g,h,1.0,b.W);Iq(f,g,h,1.0,b.bk);b=a.lQ;BO(b.dN.W,b.de.W);b=a.lQ;BO(b.dN.bk,b.de.bk);}return 1;}
function VS(){var a=this;B.call(a);a.no=null;a.nR=null;}
function AFj(){var a=this;B.call(a);a.fS=null;a.ck=null;a.gC=null;a.hK=null;a.nv=null;a.cA=null;a.hx=null;a.cZ=0;a.fV=0;a.nN=0;a.j3=0;a.ki=0;a.hE=0;a.kx=null;a.oD=null;a.vN=null;a.nm=null;}
function AIK(){var a=new AFj();ARK(a);return a;}
function ARK(a){a.ck=RY();a.gC=new Bg;a.hK=new Bg;a.cA=A6R;a.j3=(-1);a.ki=1;}
function M9(a,b){NV(a);a.cA=b;}
function Jw(a,b,c){a.fS=b;ABY(a,c);NV(a);}
function Jy(a,b){var c;a.nv=b.ld;c=b.oH.pm;BO(a.ck.W,c);c=b.kO.o5;BO(a.ck.bk,c);a.nm=b.oH;}
function MH(a){a.hx=BY(a.hx,null);V(a.gC,0,0);a.cA=A6R;a.j3=(-1);AAi(a.ck);}
function ABY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=J9(b);d=b.cb;BD(a.fS);Cm(c,a.fS);e=M1(a.fS,1.25);f=0;a.cZ=Cf(2.0,d);a.fV=Cf(3.0,d);a.nN=Cf(12.0,d);g=0;h=a.cA.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=K4(c,l.na);n=a.nN;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fb;b.a=g;b.b=0;b=l.eo;b.a=n;b.b=e;Cw(l.j0,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gC;b.a=g;b.b=e;b=a.ck.t;n=a.hE;if(!n){m=a.cZ;m=(g+m|0)+Bb(m,a.cA.data.length)|0;}else m=(f+(a.cZ*2|0)|0)+(a.fV*2|0)|0;b.a=m;if(!n)e=e+(a.cZ*2|0)|0;else{n=a.cZ;e=(Bb(e+n|0,a.cA.data.length)+n
|0)+(a.fV*2|0)|0;}b.b=e;}
function M3(a,b,c){var d,e,f,g,h,i,j;V(a.ck.u,b,c);d=a.cZ+a.fV|0;e=a.cA.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fb;j.a=b+d|0;j.b=c+h|0;if(!a.hE){if(!i.eo.a)ADH();d=d+(i.eo.a+a.cZ|0)|0;}else{if(!i.eo.b)ADH();h=h+(i.eo.b+a.cZ|0)|0;}g=g+1|0;}}
function ADH(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ex(a){var b,c;b=a.gC;if(b.a&&b.b)return a.ck.t;c=new Bu;Bm(c,C(333));N(c);}
function NV(a){a.ki=1;}
function L3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.b4;if(!a.cA.data.length)return;if(a.hx===null)a.hx=CT(c);a:{if(!a.ki){d=a.gC;if(Bb(d.a,d.b))break a;}d=a.gC;if(!Bb(d.a,d.b))ABY(a,b);d=a.gC;e=d.a;f=d.b;if(!Bb(e,f))return;d=D2(c,e,f,b.cv);Cm(d,a.fS);g=M1(a.fS,0.125);h=a.fS;i=h.ef;g=g+i-(i+h.ex)/16.0;j=a.cA.data;e=j.length;f=0;while(f<e){h=j[f];BW(d,h.na,h.j0.bm+a.nN,g);f=f+1|0;}CK(a.hx,d);a.ki=0;Ew(d);}if(!K2(a.ck)){d=a.ck;AH3(c,d.t,d.u,d.bk,a.cZ,a.hK);d=a.ck;h=d.t;k=d.u;d=d.W;e=a.cZ;l=a.hK;l.a=(h.a-e|0)-
e|0;l.b=(h.b-e|0)-e|0;Bs(c,k.a+e|0,k.b+e|0,l,d);if(a.hE){d=a.ck;AJc(c,d.t,d.u,0,0,XH(a.nv,b.cb),a.nv.nz,a.hK);}}j=a.cA.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fb;e=h.a;f=h.b;h=d.eo;k=d.j0;l=a.hx;o=a.nm;D4(c,e,f,h,k,l,o.rp,UF(o,d.kN),b.cv);n=n+1|0;}b:{if(a.hE){j=a.cA.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.hK;e=(a.ck.t.a-(a.cZ*2|0)|0)-(a.fV*2|0)|0;h=d.eo;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fb;Bs(c,k.a+h.a|0,k.b,b,UF(a.nm,d.kN));}p=p+1|0;}}}}
function NB(a,b,c){var d,e,f,g,h,i;d=E7(a.ck,b);e=!d?(-1):O$(a,b);f=a.j3;if(f!=e){if(f>=0){g=a.cA.data[f];g.kN=0;if(a.vN!==null){h=Bt();g=Ck(g);i=new K;M(i);H(H(U(H(i,C(334)),f),C(335)),g);Bk(h,L(i));}}if(e>=0){h=a.cA.data[e];g=a.oD;if(g!==null)g.vU(b,e,h);h.kN=1;}a.j3=e;}return d&&Gy(c)?1:0;}
function NY(a,b,c,d){var e,f;e=O$(a,b);if(e>=0){f=a.cA.data[e];if(!ABk(f))f.my.f();}return 1;}
function O$(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cA.data;if(c>=d.length)return (-1);e=d[c];if(Ht(b,e.fb,e.eo))return c;if(a.hE){f=e.fb;g=f.a;e=e.eo;h=e.a;g=g+h|0;i=f.b;f=a.hK;f.a=(a.ck.t.a-(a.cZ*2|0)|0)-h|0;f.b=e.b;if(AD2(b,g,i,f))break;}c=c+1|0;}return c;}
function ADl(a){a.hE=1;}
function AH4(){var a=this;B.call(a);a.hZ=null;a.gH=0.0;a.l2=0;a.j2=0;}
function DM(a,b){var c=new AH4();AQw(c,a,b);return c;}
function AQw(a,b,c){a.hZ=b;a.gH=c;a.l2=400;a.j2=700;}
function AZF(a,b){if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){b=b;return a.gH===b.gH&&a.l2==b.l2&&a.j2==b.j2&&BS(a.hZ,b.hZ)?1:0;}return 0;}
function AAP(){B.call(this);this.tM=null;}
function APW(a,b){var c;c=a.tM;if(b.bl==32)MH(c.dw);return 0;}
function AAL(){B.call(this);this.uJ=null;}
function ARG(a,b){var c,d,e,f;b=b;c=a.uJ;d=Na(c.q);Ga(d,E_(),c.n8);b=b.h;e=Rf(4);f=new T9;f.CA=c;Jf(d,b,e,f);Fl(c.bb,d);return 1;}
var AAM=G();
function A1E(a){Bk(Bt(),C(336));}
var AAN=G();
function ALn(a){Bk(Bt(),C(337));}
function B3(){var a=this;B.call(a);a.my=null;a.j0=null;a.fb=null;a.eo=null;a.mS=null;a.s1=null;a.kN=0;a.na=null;}
function Wy(a,b){var c=new B3();C7(c,a,b);return c;}
function A3y(a,b,c,d){var e=new B3();AIr(e,a,b,c,d);return e;}
function C7(a,b,c){AIr(a,b,c,null,null);}
function AIr(a,b,c,d,e){a.j0=new B0;a.fb=new Bg;a.eo=new Bg;a.na=c;a.s1=e;a.my=b;a.mS=d;}
function ABk(a){return a.mS===null?0:1;}
function TR(){B.call(this);this.BB=null;}
function AW1(a,b){return b.jw&&b.bl==32?1:0;}
function TS(){B.call(this);this.Ae=null;}
function AK6(a,b){var c,d,e,f,g,h;b=b;c=a.Ae;d=Na(c.q);Ga(d,E_(),DM(C(156),25.0));b=b.h;e=Q(B3,1);f=e.data;g=new B3;h=new ADc;h.Aw=c;C7(g,h,C(338));f[0]=g;Jf(d,b,Dy(e),A6S);Fl(c.bb,d);return 1;}
function AGA(){var a=this;B.call(a);a.px=0;a.pz=0;}
function AGk(){var a=new AGA();ASs(a);return a;}
function A2P(a,b){var c=new AGA();AKb(c,a,b);return c;}
function ASs(a){AKb(a,AJU(GH((AFQ()))),GH((AFQ()))^(-559038737));}
function AKb(a,b,c){var d;a.px=b;a.pz=c;d=0;while(d<19){Nl(a);d=d+1|0;}}
function Nl(a){var b,c;b=a.px;c=a.pz;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.px=c;a.pz=b;return b;}
function AJU(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AJv(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Gm(a,b){return Uh(a)*b|0;}
function Uh(a){return 5.960464477539063E-8*(Nl(a)&16777215);}
function Qx(a,b){var c,d,e;c=AJv(Nl(a));d=ARz( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function ON(){B.call(this);this.w9=null;}
function AP3(a,b,c){var d;d=a.w9;if(b===0.0)LR(d,100);}
function OM(){B.call(this);this.uU=null;}
function AYl(a,b){var c,d,e;c=a.uU;d=b.bl;if(d==32){c.ln=c.ln?0:1;e=1;}else if(d==13){LR(c,1);e=1;}else if(d!=8)e=0;else{Pj(c,1);e=1;}return e;}
var Y2=G(0);
function AHf(b,c){var d;d=new Ub;d.wX=b;d.wW=c;return d;}
function AHl(){var a=this;B.call(a);a.ho=null;a.h0=0;a.lv=0;a.g3=0;}
function AHv(a){var b=new AHl();AM$(b,a);return b;}
function AM$(a,b){a.ho=BI();a.g3=0;a.lv=2048;a.h0=b;}
function Kh(a,b,c){var d,e,f,g,h,i;d=c.yr(b);e=a.lv;if(d>e){c=new Bu;f=new K;M(f);BM(U(H(U(H(f,C(339)),d),C(340)),e),41);Bm(c,L(f));N(c);}if(!a.h0){b=new BR;Bm(b,C(341));N(b);}a:{b=new B0;if(d){b:{c=a.ho;if(c.m>0){c=B6(c);g=d;while(true){if(!B$(c))break b;f=B_(c);if(f.be>=g)break;}Cw(b,f.bm,f.bs,g,a.h0);f.bm=f.bm+g;h=f.be-g;f.be=h;if(h===0.0)T8(a.ho,f);break a;}}g=a.g3;i=d;Cw(b,0.0,g,i,a.h0);BC(a.ho,ACY(i,a.g3,a.lv-d|0,a.h0));a.g3=a.g3+a.h0|0;}}return b;}
function IS(a,b){var c,d,e,f,g,h,i;a:{c=AJ_(b);b=a.ho;if(b.m>0){d=B6(b);while(true){if(!B$(d))break a;e=B_(d);if(e.bs===c.bs){f=e.bm;g=e.be;h=f+g;i=c.bm;if(h===i){c.bm=f;c.be=c.be+g;YO(d);}else{h=c.be;if(i+h===f){c.be=h+g;YO(d);}}}}}}BC(a.ho,c);}
function Mz(a){return BF(a.lv,a.g3);}
function V6(){var a=this;B.call(a);a.ro=null;a.lr=null;}
function ATW(a,b,c){if(c)return A5W;return FX(a.lr.iO,b.h,a.ro,1);}
function AK0(a,b,c){return 1;}
function AVL(a,b){var c;c=a.lr;return F3(c.iO,b.h,c.wS);}
function Zk(){B.call(this);this.zA=null;}
function AP1(a,b,c,d){var e,f;b=a.zA;e=(VM(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eX=Be(Bd(0,b.eX+Bb(e,f)|0),T$(b));return 1;}
function Qn(){B.call(this);this.sn=null;}
function APQ(a,b){var c,d,e;c=a.sn;if(b.cJ&&b.bl==79){if(!b.bJ){b=c.B.bV;d=new Wu;d.t$=c;N0(b,d);}else{b=c.B.bV;d=new Wt;d.wx=c;I5(b,d);}e=1;}else e=0;return e;}
function Q7(){B.call(this);this.xb=null;}
function ATa(a,b){var c,d,e,f,g,h,i;b=b;c=a.xb;d=Na(c.q);Ga(d,E_(),DM(C(156),25.0));b=b.h;e=Q(B3,5);f=e.data;g=new B3;h=new Tq;h.q9=c;C7(g,h,C(342));f[0]=g;g=new B3;h=new Tr;h.rI=c;C7(g,h,C(343));f[1]=g;g=new B3;h=new Ts;h.sV=c;C7(g,h,C(344));f[2]=g;h=new B3;i=new Tt;i.wJ=c;C7(h,i,C(345));f[3]=h;h=new B3;i=new Tu;i.w_=c;C7(h,i,C(346));f[4]=h;Jf(d,b,Dy(e),A6S);Fl(c.bb,d);return 1;}
function Q6(){B.call(this);this.y7=null;}
function AZj(a,b){var c,d,e,f;c=a.y7;d=c.B.bV;e=new W4;e.v2=c;f=Q(B,1);f.data[0]=b;CR(d,e,C(347),f);}
function AAZ(){B.call(this);this.mI=null;}
function AYz(a,b){var c,d,e,f,g,h;c=a.mI;d=c.pS;if(d!==null){e=c.eV.u;f=e.a;g=b.h;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.pS=g;}b=b.h;f=b.a;c=c.gm;d=c.t;f=f-d.a|0;h=b.b-d.b|0;V(c.u,f,h);return 1;}
function AS2(a,b,c){var d;if(!c){d=b.h;b=a.mI;if(!E7(b.eV,d))d=null;b.pS=d;}return A5W;}
var AFo=G();
function AKh(b){var c,d;c=HC(b,250,64);Hq(c,C(268),25.0);JV(c,187,187,187);BW(c,C(348),0.0,24.0);BW(c,C(348),0.25,56.0);d=CT(b);CK(d,c);Ew(c);return d;}
var Df=G(0);
var A57=null;var A6y=null;var A58=null;var A5O=null;var A5$=null;var A59=null;var A6a=null;var A5_=null;var A6c=null;var A6b=null;var A6d=null;function FC(){FC=Bn(Df);ATd();}
function ATd(){A57=CB(187);A6y=S(C(349));A58=CB(55);A5O=CB(43);A5$=Dv(33,66,131);A59=Dv(60,63,65);A6a=S(C(350));A5_=S(C(351));A6c=ES(85,85,85,128);A6b=ES(43,43,43,0);A6d=S(C(254));}
function XY(){var a=this;B.call(a);a.qh=null;a.lB=null;}
function AOa(a,b,c){var d;if(!c){d=FX(a.lB.iu,b.h,a.qh,1);if(d!==null)return d;}return A5W;}
function AT9(a,b,c){return 1;}
function AM5(a,b){var c;c=a.lB;return F3(c.iu,b.h,QZ(c.B.bV));}
function Vp(){B.call(this);this.q7=null;}
function A0k(a,b,c,d){var e,f;b=a.q7;e=(VM(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fu=Be(Bd(0,b.fu+Bb(e,f)|0),Zl(b));return 1;}
function ACu(){B.call(this);this.vM=null;}
function AMk(a,b){var c,d;a:{c=a.vM;switch(b.bl){case 67:Qb(c);d=1;break a;case 86:Y4(c);d=1;break a;default:}d=0;}return d;}
var ACt=G();
function AXc(a,b,c){return 0;}
function ACs(){B.call(this);this.rX=null;}
function AMq(a,b,c){var d,e;d=a.rX;c=d.d4+1|0;d.d4=c;d=JH(F(Kc));e=new K;M(e);H(H(U(e,c),C(352)),d);e=L(e);$rt_globals.console.info($rt_ustr(e));AB4(b,e);return 1;}
var ACr=G();
function APj(a){return null;}
function ACw(){B.call(this);this.yQ=null;}
function AZS(a){var b,c;b=a.yQ;c=new U4;c.qd=b;return c;}
function RM(){B.call(this);this.CV=null;}
function ASH(a,b){return 0;}
function YK(){B.call(this);this.CD=null;}
function ASl(a,b){return b.jw&&b.bl==32?1:0;}
function YJ(){B.call(this);this.wm=null;}
function AOZ(a,b){var c,d,e,f,g,h;b=b;c=a.wm;d=Na(c.q);Ga(d,E_(),DM(C(156),25.0));b=b.h;e=Q(B3,1);f=e.data;g=new B3;h=new AC6;h.Bc=c;C7(g,h,C(338));f[0]=g;Jf(d,b,Dy(e),A6S);Fl(c.bb,d);return 1;}
function Pa(){B.call(this);this.Aq=null;}
function AYx(a,b){var c;c=a.Aq.ez;if(c!==null)Jh(c,b);}
function Pb(){B.call(this);this.yl=null;}
function AZ_(a,b){var c,d,e;b=b;c=a.yl;if(DL(c.q,c.ez)){d=c.lO;b=b.h;e=c.ez;GF(d,b,e,c,e,c,new W2);}return 1;}
function WU(){B.call(this);this.xg=null;}
function AMI(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.xg;d=c.c6;if(d===null)e=1;else{if(!B2(d.fL,b.h)){d=c.c6.f_;f=b.h;g=Q(B3,1);h=g.data;b=new B3;i=new Um;i.uD=c;C7(b,i,C(353));h[0]=b;K7(d,f,Dy(g));}else{c=c.c6;b=b.h;if(B2(c.fL,b)){d=c.f_;f=c.fL;i=c.zr;j=d.b6;BD(j);k=new QA;k.p9=j;j=new Qz;j.AZ=c;GF(d,b,f,i,f,k,j);}}e=1;}return e;}
var AGm=G(0);
function AJB(b){HV(b,A28(C(354),C(178),ABf(C(355))));}
function Qu(){B.call(this);this.Ev=null;}
function AOE(a,b){return 0;}
function Z_(){B.call(this);this.qr=null;}
function AQP(a,b){var c,d,e,f,g,h,i;b=b;c=a.qr;if(c.ej!==null){d=c.bb;e=c.mn;d=Yw(d,e.dA,e.kA);b=b.h;if(B2(c.ej.d$,b))e=AC7(c,1,C(300));else if(B2(c.ej.d8,b))e=AC7(c,0,C(301));else{f=Q(B3,2);g=f.data;h=new B3;i=new Ph;i.vV=c;C7(h,i,C(300));g[0]=h;e=new B3;h=new Pi;h.A5=c;C7(e,h,C(301));g[1]=e;e=Dy(f);}Lf(d,b,e);Fl(c.bb,d);}return 1;}
function TV(){B.call(this);this.By=null;}
function AQQ(a,b){return 1;}
function TU(){B.call(this);this.s_=null;}
function AQh(a,b){var c,d;c=a.s_;if(b.bl!=32)d=0;else{KK(c.fB,W6());d=1;}return d;}
var Dn=G(0);
var A6f=null;var A6T=null;var A6h=null;var A6g=null;var A6j=null;var A6i=null;var A6l=null;var A6k=null;var A6n=null;var A6m=null;var A6o=null;function ANa(){ANa=Bn(Dn);ARV();}
function ARV(){A6f=CB(206);A6T=S(C(356));A6h=S(C(357));A6g=S(C(261));A6j=S(C(358));A6i=S(C(250));A6l=S(C(359));A6k=S(C(360));A6n=ES(107,106,107,128);A6m=ES(30,31,34,0);A6o=S(C(263));}
function Cn(){CG.call(this);this.kP=null;}
var A6U=null;var A6V=null;var A6W=null;var A6X=null;var A6Y=null;var A5Y=null;var A6Z=null;var A60=null;var A61=null;var A62=null;var A63=null;var A64=null;var A65=null;var A66=null;var A67=null;var A6p=null;function Tp(){Tp=Bn(Cn);AXj();}
function DS(a,b,c){var d=new Cn();Ze(d,a,b,c);return d;}
function A3o(a,b,c,d){var e=new Cn();ACE(e,a,b,c,d);return e;}
function Ze(a,b,c,d){Tp();DI(a,b,c);a.kP=JB(d,null);}
function ACE(a,b,c,d,e){Tp();DI(a,b,c);a.kP=JB(d,e);}
function AXj(){var b,c;b=new Cn;ANa();Ze(b,C(361),0,A6T);A6U=b;A6V=DS(C(362),1,S(C(363)));A6W=DS(C(364),2,S(C(365)));A6X=DS(C(366),3,S(C(367)));A6Y=DS(C(368),4,A6T);A5Y=DS(C(369),5,S(C(370)));A6Z=DS(C(371),6,S(C(372)));A60=DS(C(373),7,S(C(374)));A61=DS(C(375),8,S(C(376)));c=new Cn;FC();ACE(c,C(377),9,A6y,S(C(359)));A62=c;A63=A3o(C(378),10,A6y,S(C(264)));A64=DS(C(379),11,S(C(380)));A65=DS(C(381),12,S(C(382)));A66=DS(C(383),13,A6T);b=DS(C(384),14,S(C(385)));A67=b;A6p=I(Cn,[A6U,A6V,A6W,A6X,A6Y,A5Y,A6Z,A60,A61,
A62,A63,A64,A65,A66,b]);}
function Ke(){var a=this;B.call(a);a.gO=null;a.mr=null;}
function JB(a,b){var c=new Ke();AXM(c,a,b);return c;}
function AXM(a,b,c){a.gO=b;a.mr=c;}
function IR(){var a=this;B.call(a);a.ld=null;a.sB=null;a.Dp=3;a.kO=null;a.AL=null;a.Ey=null;a.oH=null;a.mD=null;a.on=null;}
function A68(a,b,c,d,e,f,g){var h=new IR();LI(h,a,b,c,d,e,f,g);return h;}
function LI(a,b,c,d,e,f,g,h){a.sB=DM(C(167),16.0);a.Dp=3;a.AL=b;a.Ey=c;a.kO=d;a.oH=e;a.ld=f;a.mD=g;a.on=h;}
function AIU(){var a=this;B.call(a);a.nz=null;a.su=0;}
function AG9(a,b){var c=new AIU();AZK(c,a,b);return c;}
function AZK(a,b,c){var d;d=new B0;a.nz=d;a.su=b;d.bB=c;}
function XH(a,b){return Cf(a.su,b);}
var DO=G(0);
var A6t=null;var A6u=null;var A6q=null;var A6r=null;var A6s=null;var A6M=null;var A6N=null;var A6v=null;var A6w=null;function ATS(){ATS=Bn(DO);AYB();}
function AYB(){A6t=S(C(250));A6u=S(C(386));A6q=S(C(266));A6r=S(C(372));A6s=S(C(356));A6M=S(C(250));A6N=S(C(387));A6v=S(C(388));A6w=Dv(43,45,48);}
var Xr=G(0);
var XE=G();
function AV$(a,b,c){var d,e;d=b;e=c;b=new K;M(b);U(H(U(H(b,C(389)),d),C(390)),e);CQ(L(b));return d+e|0;}
var Xs=G(0);
var XC=G();
function AWM(a,b,c){var d,e;d=b;e=c;b=new K;M(b);EC(H(EC(H(b,C(391)),d),C(390)),e);CQ(L(b));return d+e;}
var AEe=G();
var AHj=G(0);
function Uy(){B.call(this);this.nV=null;}
var A6R=null;function Lr(){var a=new Uy();AHM(a);return a;}
function AHM(a){a.nV=BI();}
function DZ(a,b,c){Xo(a,C3(b,c));}
function C3(b,c){return Wy(c,b);}
function Fz(a,b,c){IW(a,b,c,null);}
function IW(a,b,c,d){Xo(a,A3y(null,b,c,d));}
function Xo(a,b){BC(a.nV,b);}
function GR(a){return Dy(Gf(a.nV,A6R));}
function AHn(){A6R=Q(B3,0);}
var DR=G(0);
var A6G=null;var A6H=null;var A6D=null;var A6E=null;var A6F=null;var A6K=null;var A6L=null;var A6I=null;var A6J=null;function AXI(){AXI=Bn(DR);AYm();}
function AYm(){A6G=S(C(259));A6H=S(C(392));A6D=S(C(303));A6E=S(C(393));A6F=S(C(349));A6K=S(C(259));A6L=S(C(392));A6I=ES(118,121,122,128);A6J=Dv(63,66,68);}
var HU=G(0);
var PO=G();
function AY$(a,b,c,d){var e;b=Bt();d=Ck(d);e=new K;M(e);H(H(U(H(e,C(394)),c),C(335)),d);Bk(b,L(e));}
var PP=G();
function Tg(){B.call(this);this.y3=null;}
function AYe(a,b){var c;c=a.y3.lr;c.eX=FP(b,T$(c));}
function Pu(){B.call(this);this.CC=null;}
function AMU(a,b){var c,d,e,f;c=b.data;b=Bt();d=Ck(c[0]);e=new K;M(e);H(H(e,C(286)),d);Bk(b,L(e));b=Bt();f=c[1];d=new K;M(d);H(H(d,C(395)),f);Bk(b,L(d));}
function Pt(){B.call(this);this.DO=null;}
function ALA(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bt();e=Ck(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));g=EK(KU(b,1));b=Bt();d=Ck(c[1]);if(g===null)c=C(23);else{c=new K;M(c);BU(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BU(c,C(37));BM(c,i[h]);h=h+1|0;}BU(c,C(38));c=L(c);}e=new K;M(e);H(H(H(H(e,C(396)),d),C(397)),c);Bk(b,L(e));}
function Pr(){B.call(this);this.Bf=null;}
function AKP(a,b){ACF(a.Bf,b);}
function Pp(){B.call(this);this.DX=null;}
function A1j(a,b){var c,d,e,f,g;c=b.data;d=Bt();e=Ck(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));g=CN(KU(b,1));b=Bt();d=Ck(c[1]);c=AFE(g);e=new K;M(e);H(H(H(H(e,C(398)),d),C(399)),c);Bk(b,L(e));}
var AG1=G();
function Uc(){B.call(this);this.sM=null;}
function AWO(a,b){var c;c=a.sM.lB;c.fu=FP(b,Zl(c));}
function ABn(){B.call(this);this.CE=null;}
function ANS(a,b){return 0;}
function AJG(){var a=this;B.call(a);a.j8=null;a.oy=null;a.gz=null;a.El=null;}
function ABf(a){var b=new AJG();AZB(b,a);return b;}
function AZB(a,b){var c,d,e;c=null;d=null;e=null;a.j8=c;a.oy=d;a.gz=b;a.El=e;}
function ABy(a){var b,c;b=a.gz;if(b===null)return C(21);c=AER(b,C(400));return c==(-1)?a.gz:Dt(a.gz,c+1|0);}
function AVb(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BS(a.j8,c.j8)&&BS(a.oy,c.oy)&&BS(a.gz,c.gz)?1:0;}return 0;}
function IZ(){var a=this;B.call(a);a.to=null;a.qB=null;a.re=null;a.zv=null;a.r_=null;a.kW=null;}
function A69(a,b,c,d,e,f){var g=new IZ();Ok(g,a,b,c,d,e,f);return g;}
function Ok(a,b,c,d,e,f,g){a.to=b;a.qB=c;a.re=d;a.zv=e;a.r_=f;a.kW=g;}
function Ka(){var a=this;B.call(a);a.rp=null;a.pm=null;a.tX=null;}
function A6$(a,b,c){var d=new Ka();KX(d,a,b,c);return d;}
function KX(a,b,c,d){a.rp=b;a.pm=c;a.tX=d;}
function UF(a,b){return !b?a.pm:a.tX;}
function AHG(){var a=this;B.call(a);a.o5=null;a.yR=null;a.uL=null;}
function AGL(a,b,c){var d=new AHG();A0A(d,a,b,c);return d;}
function A0A(a,b,c,d){a.o5=b;a.yR=c;a.uL=d;}
function Cr(){CG.call(this);this.nx=null;}
var A6_=null;var A7a=null;var A7b=null;var A7c=null;var A7d=null;var A7e=null;var A7f=null;var A7g=null;var A7h=null;var A7i=null;var A7j=null;var A7k=null;var A7l=null;var A7m=null;var A7n=null;var A6e=null;function AEr(){AEr=Bn(Cr);AWT();}
function D9(a,b,c){var d=new Cr();AAs(d,a,b,c);return d;}
function AZM(a,b,c,d){var e=new Cr();AGn(e,a,b,c,d);return e;}
function AAs(a,b,c,d){AEr();DI(a,b,c);a.nx=JB(d,null);}
function AGn(a,b,c,d,e){AEr();DI(a,b,c);a.nx=JB(d,e);}
function AWT(){var b;b=new Cr;FC();AAs(b,C(361),0,A6y);A6_=b;A7a=D9(C(362),1,S(C(401)));A7b=D9(C(364),2,S(C(402)));A7c=D9(C(366),3,S(C(403)));A7d=D9(C(368),4,S(C(401)));A7e=D9(C(369),5,Dv(188,63,60));A7f=D9(C(371),6,S(C(404)));A7g=D9(C(373),7,S(C(405)));A7h=D9(C(375),8,S(C(406)));A7i=AZM(C(377),9,A6y,Dv(52,65,52));A7j=AZM(C(378),10,S(C(407)),S(C(408)));A7k=D9(C(379),11,S(C(409)));A7l=D9(C(381),12,S(C(410)));A7m=D9(C(383),13,A6y);b=D9(C(384),14,S(C(385)));A7n=b;A6e=I(Cr,[A6_,A7a,A7b,A7c,A7d,A7e,A7f,A7g,A7h,A7i,
A7j,A7k,A7l,A7m,b]);}
var AKa=G();
function JZ(b,c){var d,e,f;if(c<=0)return C(21);d=B4(c);e=d.data;e[0]=AJw(Gm(b,52));f=1;while(f<c){e[f]=AJw(Gm(b,62));f=f+1|0;}return Hk(d);}
function AJw(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AEL=G();
function AKk(){var a=this;B.call(a);a.Iu=null;a.NN=null;a.HJ=0;a.Oi=0;}
var ADx=G(0);
function AJD(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BK,8);e=DJ(8);f=B4(16);g=0;h=0;i=0;while(true){j=BL(i,b);if(j>0)break;k=j>=0?10:(c.ba(CU(i))).mz;if(k==10){d=AF4(Ey(f,0,g),d,h);e=ABj(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Kw(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AF4(Ey(f,0,g),d,h);j=i+1|0;if(j<b&&(c.ba(CU(j))).mz==10){e=ABj(1,e,h);i=j;}else e=ABj(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new YU;d=AEh(d,h);if(m.length!=h)e=N8(e,h);c.jY=d;c.BF=e;return c;}
function AHF(b){var c,d;c=J(b);BD(b);d=new Pf;d.tj=b;return AJD(c,d);}
var CY=G();
var AI$=G(CY);
var AJu=G(CY);
var AHV=G(CY);
var AH6=G(CY);
var AJJ=G(CY);
function UJ(){B.call(this);this.rB=null;}
function AOw(a){var b;b=a.rB;Bk(Bt(),b);}
var HD=G(CG);
var A7o=null;var A5P=null;var A7p=null;function APB(){APB=Bn(HD);AVR();}
function A1B(a,b){var c=new HD();AD7(c,a,b);return c;}
function AD7(a,b,c){APB();DI(a,b,c);}
function AVR(){var b;A7o=A1B(C(411),0);b=A1B(C(412),1);A5P=b;A7p=I(HD,[A7o,b]);}
function Pf(){B.call(this);this.tj=null;}
function AT$(a,b){return Pe(P(a.tj,b.bp));}
function YU(){var a=this;B.call(a);a.jY=null;a.BF=null;}
var AHD=G();
function Cf(b,c){return CV(b*c);}
function Gi(){var a=this;B.call(a);a.gU=0;a.nd=null;}
function AFR(){var a=this;B.call(a);a.bo=null;a.Q=null;a.V=null;a.is=null;a.pr=0;}
function ADC(a){var b=new AFR();AQv(b,a);return b;}
function A4a(a,b){var c=new AFR();AEx(c,a,b);return c;}
function AQv(a,b){AEx(a,b,ATn());}
function AEx(a,b,c){var d;a.bo=b;d=new TP;EX(d);d.mi=new B0;d.fX=b;a.Q=d;a.V=c;}
function FM(a,b){var c;c=a.Q;c.ey=c.ey|(BS(c.jq,b)?0:1);c.jq=b;Io(a);}
function ZH(a,b,c){var d,e,f;d=a.Q;e=BS(d.hn,b)?0:1;f=c===d.kp?0:1;if(e){d.hn=b;d.eq=null;Qf(d,0);}d.ey=d.ey|(!e&&!f?0:1);d.kp=c;d.ib=0;Io(a);}
function GQ(a,b){var c;a.is=b;c=b.sB;BD(b);ZH(a,c,3.0);}
function NC(a){var b;b=a.Q;b.dO=BY(b.dO,null);b.eq=null;a.V=BY(a.V,null);}
function K1(a,b){var c,d,e;c=a.V;d=c.i;e=c.k;b=BY(c,b);a.V=b;b.eY(d,e,a.bo.cb);}
function Ep(a,b,c){a.V.eY(b,c,a.bo.cb);Io(a);}
function Io(a){var b,c,d;if(a.bo.cb!==0.0){b=a.Q;if(b.hn!==null){c=a.V.k.a;b.k.a=c;d=b.dO;if(d!==null&&c!=BZ(d)&&!(c>=b.ib&&BZ(b.dO)>=b.ib))b.ey=1;b=a.Q;b.bN=a.bo.cb;if(N1(b))c=0;else{b=a.Q;Qf(b,UY(b));c=b.k.b;}b=a.Q.i;d=a.V.i;V(b,d.a,d.b-c|0);return;}}}
function ABO(a){return UY(a.Q);}
function L4(a,b){var c;c=!(a.pr&1)?0:1;return !c&&!B2(a.V,b.h)?0:1;}
function LV(b,c){if(b<0)c=C(413);else if(b>0)c=C(414);return c;}
function Oj(a,b,c){var d;d=a.Q.i.a;return (d-c|0)<=b&&b<d?1:0;}
function Mw(a,b,c){var d,e;d=a.Q;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function MW(a,b,c){var d;d=a.Q.i.b;return (d-c|0)<=b&&b<d?1:0;}
function Ky(a,b,c){var d,e;d=a.V;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function N2(a,b,c){var d,e,f;d=a.Q.i.b-c|0;e=a.V;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function ACB(a,b,c){var d,e;d=a.Q.i.b+c|0;e=a.V;return AIq(b,d,(e.i.b+e.k.b|0)-c|0);}
function MP(a,b,c){var d,e,f;d=a.Q;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function WG(a,b,c){var d,e;d=a.Q;e=d.i.a;return AIq(b,e+c|0,(e+d.k.a|0)-c|0);}
function AIq(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BL(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function JU(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.V;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new WH;b.zM=a;b.zN=e;b.zK=f;b.zL=c;b.zI=g;b.zJ=j;b.zG=l;b.zH=d;b.zE=h;b.zF=k;b.t0=m;return b;}
var AED=G();
function SW(){var a=this;B.call(a);a.q0=null;a.tt=null;a.zy=null;}
var AHI=G(0);
function AGZ(b){if(b===null)return C(177);if(!DA(b,C(415))&&!DA(b,C(416))&&!DA(b,C(417))&&!DA(b,C(418))&&!DA(b,C(419))&&!DA(b,C(420))){if(DA(b,C(421)))return C(178);if(DA(b,C(422)))return C(180);if(DA(b,C(423)))return C(181);if(!DA(b,C(424))&&!DA(b,C(425)))return C(177);return C(426);}return C(179);}
function AHg(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(NG(b)){case -1655966961:if(!Bi(b,C(181)))break a;c=4;break a;case 3401:if(!Bi(b,C(180)))break a;c=3;break a;case 98723:if(!Bi(b,C(179)))break a;c=2;break a;case 3213227:if(!Bi(b,C(426)))break a;c=5;break a;case 3254818:if(!Bi(b,C(178)))break a;c=1;break a;case 3556653:if(!Bi(b,C(177)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=Ek();e
=new K;M(e);H(H(e,C(427)),b);Bk(d,L(e));c=0;break b;}c=0;}return c;}
function SK(){B.call(this);this.qE=null;}
function ASt(a,b,c,d){return LF(a.qE,b,c,d);}
function SJ(){B.call(this);this.t2=null;}
function A0N(a,b,c){return G8(a.t2,b,c);}
function SM(){B.call(this);this.xF=null;}
function ANX(a){var b,c;b=a.xF;c=new AAI;c.xM=b;return c;}
function SL(){var a=this;B.call(a);a.De=null;a.Dc=null;a.Dd=null;a.Df=null;a.Dg=null;}
function W1(){B.call(this);this.j9=null;}
function A1H(a,b){var c,d,e,f,g;c=a.j9;d=c.l8;if(d!==null){e=b.h;f=e.a-d.a|0;g=e.b-d.b|0;e=c.ke;e.a=E0(0,e.a+f|0,c.gF.a-c.jA.a|0);c=a.j9;d=c.ke;d.b=E0(0,d.b+g|0,c.gF.b-c.jA.b|0);}a.j9.l8=b.h;return 1;}
var AEJ=G();
function LN(){return "clipboard" in $rt_globals.navigator?1:0;}
function AGg(){var a=this;B.call(a);a.cS=null;a.cc=null;a.kf=null;a.ks=null;a.nB=null;a.jI=null;}
function Na(a){var b=new AGg();AY6(b,a);return b;}
function AY6(a,b){a.cc=BI();a.jI=A6S;a.cS=b;Bc(b.ei,a);}
function Ga(a,b,c){a.kf=c;a.nB=b;b=B6(a.cc);while(B$(b)){Jy(B_(b),a.nB);}}
function Jf(a,b,c,d){a.jI=d;Lf(a,b,c);}
function Lf(a,b,c){var d,e;d=a.cS;e=d.bR;if(Bb(e.a,e.b)&&d.cb!==0.0){if(a.kf!==null&&!Jl(a)){a.ks=F9(a.cS,a.kf);d=UL(a,b,c,null,null);b=new RA;b.td=a;d.kx=b;FF(a.cS,a);return;}b=new BR;X(b);N(b);}c=new C4;Bm(c,C(428));N(c);}
function Mc(a){if(Jl(a)){AAC(a.cS,a);AAt(a,null);a.jI.f();a.jI=A6S;}}
function UL(a,b,c,d,e){var f,g,h;f=AIK();ADl(f);M9(f,c.cV());Jy(f,a.nB);Jw(f,a.ks,a.cS);if(d===null)g=b.a;else{g=b.a;g=a.cS.bR.a<((g+(Ex(d)).a|0)+(Ex(f)).a|0)?g-(Ex(f)).a|0:(g+(Ex(d)).a|0)-d.fV|0;}h=b.b;b=a.cS.bR;M3(f,Bd(0,Be(g,b.a-(Ex(f)).a|0)),Bd(0,Be(h,b.b-(Ex(f)).b|0)));b=new AA7;b.uH=a;b.uE=f;b.uF=e;f.oD=b;BC(a.cc,f);return f;}
function A1o(a,b,c){var d;a.ks=F9(a.cS,a.kf);d=B6(a.cc);while(B$(d)){Jw(B_(d),a.ks,a.cS);}}
function AO_(a,b){var c;if(!Jl(a))return 0;a:{switch(b.bl){case 27:Mc(a);c=1;break a;default:}c=0;}return c;}
function AAt(a,b){var c,d;c=a.cc.m-1|0;a:{while(true){if(c<0)break a;d=Bx(a.cc,c);if(b===d)break;EH(a.cc,c);MH(d);c=c+(-1)|0;}}}
function Jl(a){return a.cc.m<=0?0:1;}
function AQX(a){var b,c,d,e,f,g;b=a.cS;c=b.ei;d=0;while(true){e=c.g2.data;f=e.length;if(d>=f)break;if(e[d]===a){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.gh=c.gh-1|0;c.ir=null;}d=d+1|0;}AAC(b,a);b=a.cc;c=B6(b);while(B$(c)){MH(B_(c));}Ir(b);}
function Vr(){B.call(this);this.qF=null;}
function AWC(a,b){Md(a.qF,b);}
function Xq(){B.call(this);this.t_=null;}
function ATb(a,b){var c,d,e,f;c=a.t_;if(c.hR!=3&&c.fI!=3){b=b.data;c.h4=3;d=CN(b[0]);e=EK(b[1]);NS(c.g,d,e);if(c.fD){b=EW(c);f=JE(EY(),c.iQ);c=new K;M(c);H(HE(H(H(c,b),C(429)),f),C(229));$rt_globals.console.info($rt_ustr(L(c)));}}}
function AAX(){B.call(this);this.y2=null;}
function AXQ(a,b){var c,d,e,f,g,h;c=a.y2;if(c.fI!=3){d=b.data;c.hR=3;if((CN(d[2])).data[0]!=1)Md(c,b);else{e=CN(d[0]);f=EK(d[1]);g=c.h4!=3?0:1;Q2(c.g,e,f,g);if(c.fD){b=EW(c);h=JE(EY(),c.iQ);c=new K;M(c);H(HE(H(H(c,b),C(430)),h),C(229));$rt_globals.console.info($rt_ustr(L(c)));}}}}
function Pw(){B.call(this);this.jZ=null;}
function ATZ(a){return a.jZ;}
var AI6=G(0);
var LJ=G(0);
function QJ(){B.call(this);this.tB=null;}
function AUW(a,b){return K4(a.tB,b);}
function O9(){B.call(this);this.zC=null;}
function A0r(a,b){var c,d;c=a.zC;d=b.bp;return Pe(c.charCodeAt(d)&65535);}
var AFG=G();
function AH3(b,c,d,e,f,g){g.a=c.a;g.b=f;Bs(b,d.a,d.b,g,e);Bs(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bs(b,d.a,d.b+f|0,g,e);Bs(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AJc(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bs(b,j,k,i,h);Bs(b,j,k,i,h);Bs(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bs(b,l,j,i,h);Bs(b,l,j,i,h);Bs(b,l+g|0,j+g|0,i,h);}
function Qo(){var a=this;B.call(a);a.cL=null;a.pO=null;a.fh=null;a.d5=0;a.cp=0;a.i0=null;a.jE=null;a.hh=0;a.v8=0;}
function O6(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d5;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}EL(c);j=d+(-1)|0;b=Dj(d);d=Bb(j,a.cp)%a.fh.b|0;GG(a,c,b,a.hh,g);JD(a.cL,c,0,d);if(!(j%a.d5|0))break;d=j;}}else{EL(b);k=a.d5-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GG(a,b,Dj(j),Bb(a.cp,k)+a.hh|0,g);k=k+(-1)|0;j=h;}CK(a.cL,b);j=Bd(i,e);}return j;}k=a.d5;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EL(c);b=Dj((d+f|0)+1|0);j=d
+1|0;d=Bb(d,a.cp)%a.fh.b|0;GG(a,c,b,a.hh,g);JD(a.cL,c,0,d);if(!(j%a.d5|0))break;d=j;}}else{EL(b);d=0;while(d<a.d5){h=h+1|0;GG(a,b,Dj((h>e?h-f|0:h)+f|0),Bb(a.cp,d)+a.hh|0,g);d=d+1|0;}CK(a.cL,b);j=Be(i,e);}return j;}
function Vv(b,c,d,e){c=c.data;return d<c.length&&c[d]?JQ(b.dV,b,c[d]):e.kL;}
function M7(a,b,c,d,e,f){D4(b,a.pO.a+d.a|0,c+d.b|0,a.i0,a.jE,a.cL,e,f,a.v8);}
function GG(a,b,c,d,e){BW(b,c,a.fh.a-20.0*e,d);}
var ADA=G();
function Ht(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AD2(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Ty(){var a=this;B.call(a);a.Ao=null;a.Ap=null;a.ih=null;}
function A3O(a,b,c){var d=new Ty();AFg(d,a,b,c);return d;}
function AFg(a,b,c,d){a.Ao=b;a.Ap=c;a.ih=d;}
function GD(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.ih.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hU:i.hV;k=!c?i.nO:i.nP;l=BL(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function LW(){var a=this;B.call(a);a.hV=0;a.nP=0;a.hU=0;a.nO=0;a.ou=0;}
function M8(a,b,c,d,e){var f=new LW();AZO(f,a,b,c,d,e);return f;}
function AZO(a,b,c,d,e,f){a.hV=b;a.nP=c;a.hU=d;a.nO=e;a.ou=f;}
var R3=G(0);
var A5W=null;function AJk(){A5W=new QX;}
function ABu(){var a=this;B.call(a);a.sb=null;a.sc=null;}
function AUX(a,b){var c,d,e;c=a.sb;d=a.sc;c=c.fl.eb.u;e=c.a;b=b.h;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Ct(d,b);}
var F8=G(I0);
var ACG=G(Fs);
function ACJ(){B.call(this);this.ul=null;}
function ATG(a,b){var c,d;c=a.ul;U5(c,Fq(c,b.h));b=Bj(c);d=c.d;NO(b,d.w,d.z);H4(c);}
function TI(){B.call(this);this.wQ=null;}
function A0M(a,b){var c,d;c=a.wQ;d=c.d4+1|0;c.d4=d;c=new K;M(c);H(H(U(c,d),C(431)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function Va(){B.call(this);this.wZ=null;}
function AZq(a){var b,c;b=a.wZ;c=new K;M(c);H(H(H(c,C(432)),b),C(433));$rt_globals.console.info($rt_ustr(L(c)));}
var ACS=G(Eo);
var A7q=null;function WD(b){var c;c=new K;M(c);return L(EC(c,b));}
function AFz(){A7q=F($rt_floatcls());}
var Gn=G();
var A7r=null;var A7s=null;var A4V=null;var A4U=null;var A4T=null;function AIB(){A7r=DU([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A7s=AHJ([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A4V=AHJ([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);A4U=new AAO;A4T=new TC;}
var Jv=G();
var A7t=0;var A7u=null;var A7v=null;function AI2(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.qN=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.mN=0;c.mB=0;return;}if(f)d=e|8388608;else{d=e<<1;while(IC(Db(Bp(d),Bp(8388608)),FB)){d=d<<1;f=f+(-1)|0;}}g=AI9(A7v,f);if(g<0)g= -g|0;h=A7v.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Js(d,A7u.data[e],i);if(j<A7t){while($rt_ucmp(j,A7t)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A7v.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Js(d,
A7u.data[e],i);}e=d<<1;d=e+1|0;h=A7u.data;f=g+1|0;k=h[f];l=i-1|0;m=Js(d,k,l);n=Js(e-1|0,A7u.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bb($rt_udiv(j,o),o):q<0?Bb($rt_udiv(j,k),k)+k|0:Bb($rt_udiv((j+(k/2|0)|0),k),k);if(DF(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.mN=d;c.mB=g-50|0;}
function Js(b,c,d){return GH(F6(Ch(Db(Bp(b),D(4294967295, 0)),Db(Bp(c),D(4294967295, 0))),32-d|0));}
function AIb(){A7t=$rt_udiv((-1),10);A7u=DU([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A7v=DU([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function TC(){var a=this;B.call(a);a.mN=0;a.mB=0;a.qN=0;}
function N_(){var a=this;B.call(a);a.DE=null;a.vP=0.0;a.BY=0.0;a.ge=null;a.i$=null;a.ny=null;a.fZ=0;}
function AJ3(a,b){var c;if(b!==null){a.i$=b;return a;}c=new BR;Bm(c,C(434));N(c);}
function AFr(a,b){var c;if(b!==null){a.ny=b;return a;}c=new BR;Bm(c,C(434));N(c);}
function Yq(a,b,c,d){var e,f,g,$$je;e=a.fZ;if(!(e==2&&!d)&&e!=3){a.fZ=d?2:1;while(true){try{f=AGt(a,b,c);}catch($$e){$$je=ER($$e);if($$je instanceof Bu){g=$$je;N(AVk(g));}else{throw $$e;}}if(H_(f))return f;if(IU(f)){if(d&&D6(b)){g=a.i$;Hf();if(g===A5m)return Eq(Cg(b));if(Cg(c)<=J(a.ge))return A5p;Fp(b,b.Y+Cg(b)|0);if(a.i$===A5n)M4(c,a.ge);}return f;}if(Q4(f)){g=a.i$;Hf();if(g===A5m)return f;if(g===A5n){if(Cg(c)<J(a.ge))return A5p;M4(c,a.ge);}Fp(b,b.Y+KW(f)|0);}else if(L8(f)){g=a.ny;Hf();if(g===A5m)break;if(g
===A5n){if(Cg(c)<J(a.ge))return A5p;M4(c,a.ge);}Fp(b,b.Y+KW(f)|0);}}return f;}b=new C4;X(b);N(b);}
function AHL(a,b){var c,d,e,f;c=a.fZ;if(c&&c!=3){b=new C4;X(b);N(b);}if(!Cg(b))return AGT(0);if(a.fZ)a.fZ=0;d=AGT(Bd(8,Cg(b)*a.vP|0));while(true){e=Yq(a,b,d,0);if(IU(e))break;if(H_(e))d=ZI(a,d);if(!Nq(e))continue;TB(e);}b=Yq(a,b,d,1);if(Nq(b))TB(b);while(true){f=a.fZ;if(f!=3&&f!=2)break;a.fZ=3;if(IU(A5q)){d.ed=d.Y;d.Y=0;d.jt=(-1);return d;}d=ZI(a,d);}b=new C4;X(b);N(b);}
function ZI(a,b){var c,d,e;c=b.it;d=Kw(c,Bd(8,c.data.length*2|0));e=AIL(d,0,d.data.length);Fp(e,b.Y);return e;}
function ABX(){var a=this;B.call(a);a.bq=0;a.bv=0;}
function DQ(a,b){var c=new ABX();AIR(c,a,b);return c;}
function AIR(a,b,c){a.bq=b;a.bv=c;}
function AKQ(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return a.bq==c.bq&&a.bv==c.bv?1:0;}return 0;}
function ARa(a){return AFJ(I(B,[CU(a.bq),CU(a.bv)]));}
function AYP(a,b){var c;b=b;c=BL(a.bq,b.bq);if(!c)c=BL(a.bv,b.bv);return c;}
var AET=G(CY);
function T9(){B.call(this);this.CA=null;}
function ALI(a){Bk(Bt(),C(435));}
var ADf=G(0);
var A6S=null;function AGc(){A6S=new WC;}
function HT(){CE.call(this);this.c4=null;}
function Vy(a,b){var c;if(a.c4===null){a.c4=b;return;}c=new Ec;X(c);N(c);}
function AX6(a){var b,c,d;b=a.c4.data;c=b.length;d=0;while(d<c){b[d].cC();d=d+1|0;}}
function APK(a,b){var c,d,e;c=a.c4.data;d=c.length;e=0;while(e<d){c[e].dp(b);e=e+1|0;}}
function AT7(a,b){var c,d,e,f;c=0;d=a.c4.data;e=d.length;f=0;while(f<e){c=c|d[f].cg(b);f=f+1|0;}return c;}
function AMx(a,b,c,d){HJ(a,b,c,d);a.AY();}
function A0x(a,b,c,d){var e,f,g,h,i;e=0;f=a.c4.data;g=f.length;h=0;while(h<g){i=f[h];if(B2(i,b.h))e=e|i.ct(b,c,d);h=h+1|0;}return e;}
function AR6(a,b,c){var d,e,f,g,h;d=a.c4.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B2(g,b.h)){h=g.cu(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A0F(a,b,c){var d,e,f,g,h;d=0;e=a.c4.data;f=e.length;g=0;while(g<f){h=e[g];if(B2(h,b.h))d=d|h.ds(b,c);g=g+1|0;}return d;}
function A02(a,b){var c,d,e,f,g;c=0;d=a.c4.data;e=d.length;f=0;while(f<e){g=d[f];if(B2(g,b.h))c=c|g.bQ(b);f=f+1|0;}return c;}
function AM9(a,b,c,d){var e,f,g,h,i;e=0;f=a.c4.data;g=f.length;h=0;while(h<g){i=f[h];if(B2(i,b.h))e=e|i.dq(b,c,d);h=h+1|0;}return e;}
function Qy(){var a=this;HT.call(a);a.rD=null;a.zr=null;a.f_=null;a.og=null;a.kr=null;a.gb=null;a.fL=null;}
function AOr(a){var b,c,d,e;b=a.k.a/4|0;c=b+Dw(a,1.0)|0;d=AIZ(a.i);e=BF(b,a.k.b);a.c4.data[0].eY(d,e,a.bN);d.a=a.i.a+b|0;e.a=c-b|0;a.c4.data[1].eY(d,e,a.bN);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.c4.data[2].eY(d,e,a.bN);}
function AWs(a){var b,c;b=AGj(a.fL);c=AGV(a.kr);return BF((b.a+a.og.k.a|0)+c.a|0,b.b);}
function Yo(){B.call(this);this.AU=null;}
function AUm(a,b){var c,d;c=a.AU;d=c.d4+1|0;c.d4=d;c=b.iG;b=new K;M(b);H(H(U(b,d),C(436)),c);$rt_globals.console.info($rt_ustr(L(b)));}
var QX=G();
function AX3(a,b){}
function Fh(){var a=this;CE.call(a);a.cF=null;a.T=null;a.e5=null;}
function A7w(){var a=new Fh();LD(a);return a;}
function LD(a){EX(a);a.cF=new Bg;a.T=new Bg;}
function AWf(a,b){a.e5=b;}
function SB(a,b,c){V(a.cF,b,c);}
function SS(a){var b;b=a.e5;if(b!==null)ABG(b);}
function AES(a){var b;b=a.T;b.a=Wh(a,b.a);b=a.T;b.b=AB5(a,b.b);}
function AFY(a,b){var c,d;c=a.T.a;d=Wh(a,b);a.T.a=d;return c==d?0:1;}
function AKp(a,b){var c,d;c=a.T.b;d=AB5(a,b);a.T.b=d;return c==d?0:1;}
function AB5(a,b){return Bd(0,Be(b,a.cF.b-a.k.b|0));}
function Wh(a,b){return Bd(0,Be(b,a.cF.a-a.k.a|0));}
function QS(){var a=this;Fh.call(a);a.bT=null;a.dW=null;a.h2=null;a.zD=null;a.ec=null;a.b2=null;a.eR=null;a.fC=null;a.dI=0;a.fz=0;a.AX=null;a.dU=0;a.eF=0;a.hq=0;a.fW=0;a.fN=0;a.cN=0;a.eT=null;a.j4=null;a.xZ=null;a.ip=null;}
function A36(a,b){var c=new QS();AJ0(c,a,b);return c;}
function AJ0(a,b,c){LD(a);a.dW=RY();a.h2=new Bg;a.b2=A7x;a.eR=Q(JT,0);a.dU=0;a.eF=0;a.hq=0;a.fW=0;a.fN=0;a.eT=AHv(0);a.ip=JJ();a.bT=b;a.j4=c;a.AX=c;P9(a);}
function P9(a){a.dI=Cf(2.0,a.bT.cb);}
function UW(a){return a.b2.data.length?0:1;}
function Wv(a,b){SQ(a);a.b2=b;}
function SQ(a){V(a.h2,0,0);}
function Vz(a,b,c){a.xZ=b;a.zD=c;a.ec=null;a.eT=null;a.fz=0;SQ(a);}
function A0K(a){a.fC=BY(a.fC,null);V(a.h2,0,0);Fr(a.ip);a.eT=null;a.b2=A7x;a.eR=null;a.dU=0;a.eF=0;a.hq=0;AAi(a.dW);a.j4=null;}
function AVy(a,b,c){XS(a);P9(a);a.ec=null;a.eT=null;a.fz=0;}
function ATV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=J9(a.bT);if(UW(a))return;KO(a);Cm(c,a.ec);d=Ef(a);e=AHf(c,a.fz);f=Be(H5(a.k.b,d),a.b2.data.length)+30|0;g=a.xZ.AL;h=a.eR.data;d=h.length;if(d<f){a:{i=a.fW;j=a.fN;k=a.b2;l=a.eT;m=a.ip;n=Q(JT,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.gJ!==c){ABN(l,q,m);o[f]=MA(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=MA(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=MA(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ABN(l,c,m);h[f]=null;}f=f+1|0;}a.eR=n;Ct(a.h2,Mz(a.eT));X5(a,a.bT.b4);}a.fW=Be((a.T.b+a.dI|0)/(Ef(a)+a.dI|0)|0,a.b2.data.length-1|0);a.fN=Be((((a.T.b+a.dW.t.b|0)-1|0)+a.dI|0)/(Ef(a)+a.dI|0)|0,a.b2.data.length-1|0);if(!a.eR.data.length)return;AHa(a,e);ABC(a,b);q=g.zv;c=a.i;Bs(b,c.a,c.b,a.k,q);c=a.dW.u;i=c.a;j=c.b;p=Cz(a.bT,2.0);s=a.bT.du;t=a.fW;u=i+p|0;while(t<=a.fN){l=Xp(a,t);d=Bb(t,Ef(a));v
=t+1|0;w=d+Bb(v,a.dI)|0;x=u+a.dU|0;y=x+a.eF|0;z=a.cN!=t?0:1;m=!z?q:g.r_;ba=!z?g.to:g.kW;bb=!z?g.qB:g.kW;bc=!z?g.re:g.kW;bd=(j+w|0)-a.T.b|0;D4(b,u,bd,l.jf,l.sL,a.fC,ba,m,a.bT.cv);D4(b,x,bd,l.jH,l.kT,a.fC,bb,m,a.bT.cv);D4(b,y,bd,l.jg,l.kq,a.fC,bc,m,a.bT.cv);d=l.jf.a;be=u+d|0;V(s,Bd(0,a.dU-d|0),l.jf.b);Bs(b,be,bd,s,m);d=u+a.dU|0;f=l.jH.a;bf=d+f|0;V(s,Bd(0,a.eF-f|0),l.jH.b);Bs(b,bf,bd,s,m);d=l.jg.a;bg=y+d|0;V(s,Bd(0,(((a.dW.t.a-d|0)-a.eF|0)-a.dU|0)-p|0),l.jg.b);Bs(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;V(s,p,Ef(a)+a.dI
|0);Bs(b,bh,bd,s,q);t=v;}F5(b);}
function AHa(a,b){var c,d,e,f,g,h;c=0;d=a.fW;while(d<=a.fN){e=Xp(a,d);if(!(e!==null&&e.gJ===a.b2.data[d])){f=a.eR.data;g=a.b2;e=a.eT;h=a.ip;c=d%f.length|0;if(f[c]!==null)ABN(e,f[c],h);f[c]=MA(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Ct(a.h2,Mz(a.eT));X5(a,a.bT.b4);}}
function X5(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.h2;c=D2(b,c.a+150|0,c.b,a.bT.cv);Cm(c,a.ec);d=a.ec;e=d.ef;f=e-(e+d.ex)/16.0;g=a.eR.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gJ.la;k=d.kT;BW(c,j,k.bm+a.fz,f+k.bs);j=d.gJ.ls;d=d.kq;BW(c,j,d.bm+a.fz,f+d.bs);}i=i+1|0;}a:{d=a.ip;if(d.c5>0){h=d.cW;i=0;b:while(true){g=d.b3.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cQ;l=j.cM;k=k;l=l.lM;BW(c,k,l.bm+a.fz,f+l.bs);j=j.cT;if(h!=d.cW)break b;}i=i+1|0;}b=new H7;X(b);N(b);}}if(a.fC===null)a.fC=CT(b);CK(a.fC,
c);Ew(c);}
function Xp(a,b){var c;c=a.eR.data;return c[b%c.length|0];}
function AYO(a,b){Ct(a.dW.t,b);}
function AZT(a,b){Ct(a.dW.u,b);}
function XS(a){var b,c,d,e,f,g,h,i,j;b=J9(a.bT);if(UW(a))return;KO(a);Cm(b,a.ec);c=AHf(b,a.fz);d=a.b2.data;e=d.length;f=0;while(f<e){g=d[f];h=Ng(c,g.hy);i=Ng(c,g.la);j=Ng(c,g.ls);a.dU=Bd(a.dU,h);a.eF=Bd(a.eF,i);a.hq=Bd(a.hq,j);f=f+1|0;}}
function AO3(a,b){var c;c=Zw(a,b.h);if(c>=0)a.cN=c;return E7(a.dW,a.i)&&Gy(a.bT.cP)?1:0;}
function ANf(a,b,c){if(!E7(a.dW,b.h)&&!K2(a.dW)){b=a.AX;if(b!==null)b.f();}return null;}
function AQ4(a,b,c,d){var e;if(d==1){e=Zw(a,b.h);if(e>=0)T2(a,a.b2.data[e]);}return 1;}
function T2(a,b){a.j4.f();b.te.f();}
function Zw(a,b){var c,d,e;if(!a.eR.data.length)return (-1);c=Ef(a);d=(b.b-a.i.b|0)+a.T.b|0;e=a.dI;e=(d+e|0)/(c+e|0)|0;if(e<a.b2.data.length)return e;return (-1);}
function Ef(a){return E1(a.ec);}
function KO(a){var b;if(a.ec===null){b=F9(a.bT,a.zD);a.ec=b;a.eT=AHv(E1(b));a.fz=CV(a.ec.pE);}}
function AZ4(a,b){var c,d,e;a:{switch(b.bl){case 13:T2(a,a.b2.data[a.cN]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cN=a.fW;b=a.e5;c=a.T;I_(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.cN=a.fN;b=a.e5;c=a.T;I_(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.cN=a.b2.data.length-1|0;break a;case 36:case 37:a.cN=0;break a;case 38:d=a.cN;e=a.b2.data.length;a.cN=((d+e|0)
-1|0)%e|0;break a;case 40:a.cN=(a.cN+1|0)%a.b2.data.length|0;break a;default:break a;}a.j4.f();return 0;}e=a.cN;if(e<=a.fW)I_(a.e5,a.T.a,Bb(e,Ef(a))+Bb(a.cN,a.dI)|0);else if(e>=a.fN)I_(a.e5,a.T.a,(Bb(e+1|0,Ef(a))+Bb(a.cN+2|0,a.dI)|0)-a.k.b|0);return 0;}
var Ut=G();
function ASM(a){}
function AEq(){var a=this;CE.call(a);a.n0=null;a.w0=null;a.zw=null;a.bL=null;a.dh=null;a.dv=null;a.tx=null;a.qK=null;a.uK=0.0;a.o4=null;a.oq=null;}
function Gx(a,b){var c=new AEq();ATD(c,a,b);return c;}
function ATD(a,b,c){var d;c=c.cP;EX(a);d=new PE;d.xY=a;a.w0=d;d=new PD;d.yD=a;a.zw=d;a.uK=10.0;a.bL=b;a.n0=c;b.e5=a;}
function ARJ(a){var b;b=a.bL;b.e5=null;a.bL=BY(b,null);}
function I$(a,b,c){var d;a.oq=c;a.o4=b;d=a.dh;if(d!==null)H1(d,b,c);b=a.dv;if(b!==null)H1(b,a.o4,a.oq);}
function Q1(a,b,c,d){HJ(a,b,c,d);HJ(a.bL,b,c,d);if(d!==0.0)ABG(a);}
function I_(a,b,c){K0(a,b);Lu(a,c);}
function ABG(a){var b;AES(a.bL);b=FI(a)*3|0;if(YR(a,b))Tm(a);else a.dv=null;if(ADb(a,b))V$(a);else a.dh=null;}
function ADb(a,b){var c;c=a.k.b;return c>b&&a.bL.cF.b>c?1:0;}
function YR(a,b){var c;c=a.k.a;return c>b&&a.bL.cF.a>c?1:0;}
function Tm(a){var b,c,d,e,f,g;b=a.dv;if(b===null)b=I4();a.dv=b;OQ(a,b);c=a.dv;b=a.bL;d=b.T.a;e=a.i;f=e.a;g=a.k;Q0(c,d,f,g.a,b.cF.a,e.b+g.b|0,FI(a));}
function V$(a){var b,c,d,e,f,g;b=a.dh;if(b===null)b=I4();a.dh=b;OQ(a,b);c=a.dh;b=a.bL;d=b.T.b;e=a.i;f=e.b;g=a.k;Kb(c,d,f,g.b,b.cF.b,e.a+g.a|0,FI(a));}
function FI(a){return Dw(a,a.uK);}
function OQ(a,b){H1(b,a.o4,a.oq);}
function AZh(a,b){var c;a.bL.dp(b);if(!(a.dh===null&&a.dv===null)){B9(b,1);c=a.dh;if(c!==null)GM(c,b);c=a.dv;if(c!==null)GM(c,b);c=a.dh;if(c!==null)GT(c,b);c=a.dv;if(c!==null)GT(c,b);B9(b,0);}}
function SZ(a,b){var c,d;a:{b:{c=a.dh;if(!(c!==null&&IF(c,b))){c=a.dv;if(c===null)break b;if(!IF(c,b))break b;}d=1;break a;}d=0;}return d;}
function AR4(a,b,c,d){return !SZ(a,b.h)&&!a.bL.ct(b,c,d)?0:1;}
function K0(a,b){var c;b=AFY(a.bL,b);if(YR(a,FI(a)*3|0))Tm(a);if(b){c=a.tx;if(c!==null)c.f();}}
function Lu(a,b){var c;if(AB7(a,b)){c=a.qK;if(c!==null)c.f();}}
function AB7(a,b){var c;c=AKp(a.bL,b);if(ADb(a,FI(a)*3|0))V$(a);return c;}
function ARL(a,b,c){var d,e;d=a.dh;if(d!==null){e=FX(d,b.h,a.w0,1);if(e!==null)return e;}d=a.dv;if(d!==null){e=FX(d,b.h,a.zw,0);if(e!==null)return e;}return a.bL.cu(b,c);}
function AP6(a,b,c){return SZ(a,b.h)?1:0;}
function APS(a,b){var c,d,e;c=a.dh;d=c!==null&&F3(c,b.h,a.n0)?1:0;c=a.dv;e=c!==null&&F3(c,b.h,a.n0)?1:0;return !d&&!e&&!a.bL.bQ(b)?0:1;}
function AVV(a,b,c,d){var e,f;if(!B2(a,b.h))return 0;e=Cf(d*0.5,a.bN);f=Cf(c*0.5,a.bN);if(b.bJ){f=f+e|0;e=0;}if(a.dh!==null&&e)Lu(a,a.bL.T.b+e|0);if(a.dv!==null&&f)K0(a,a.bL.T.a+f|0);return 1;}
function AGV(a){var b,c;b=FI(a);c=a.bL.hJ();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
function PR(){var a=this;Fh.call(a);a.lT=null;a.pk=null;a.xl=null;a.ry=0.0;}
function ASU(a){var b;b=Cf(20.0,a.bN);return BF(b,b);}
function AYU(a,b){var c,d,e;SB(a,b.a*3|0,b.b*5|0);c=a.xl;d=c.sz;c=c.sy;b=Ck(b);e=new K;M(e);H(H(H(e,c),C(29)),b);FM(d,L(e));}
function AS8(a,b){var c,d,e,f,g,h,i,j,k,l,m;AJ6(a,b);ABC(a,b);c=Cf(30.0,a.bN);d=a.T;e=d.a;f=Bb(e/c|0,c);g=d.b;h=Bb(g/c|0,c);d=a.k;i=Bb(((e+d.a|0)-1|0)/c|0,c);e=Bb(((g+d.b|0)-1|0)/c|0,c);d=a.pk;d.b=c;d.a=c;a.lT.bB=1.0;while(h<=e){g=a.i.b-a.T.b|0;j=f;while(j<=i){k=a.i.a-a.T.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AJU(l);m=m+1|0;}UI(AJv(l),0.75,a.ry,a.lT);Bs(b,k+j|0,g+h|0,a.pk,a.lT);j=j+c|0;}h=h+c|0;}F5(b);}
function AUa(a,b){}
function Rs(){var a=this;B.call(a);a.sz=null;a.sy=null;}
function TP(){var a=this;CE.call(a);a.fX=null;a.hn=null;a.jq=null;a.eq=null;a.kp=0.0;a.ey=0;a.ib=0;a.dO=null;a.mi=null;}
function UY(a){var b;if(N1(a))return 0;ABv(a);b=Cz(a.fX,a.kp);return E1(a.eq)+(b*2|0)|0;}
function K_(a){var b;b=a.k;return b.a&&b.b?0:1;}
function N1(a){return a.hn!==null&&a.jq!==null?0:1;}
function Qf(a,b){a.k.b=b;}
function Qj(a,b,c,d,e){var f,g;f=a.fX.du;V(f,d,a.k.b);g=a.i;Bs(b,g.a+c|0,g.b,f,e);}
function ABv(a){if(a.eq===null)a.eq=F9(a.fX,a.hn);}
var Zm=G(Eo);
var A7y=null;function Da(b,c){return Long_udiv(b, c);}
function AHq(b,c){return Long_urem(b, c);}
function DF(b,c){return Long_ucompare(b, c);}
function AIi(){A7y=F($rt_longcls());}
function AAI(){B.call(this);this.xM=null;}
function AON(a,b){DH(a.xM,b);}
function ADc(){B.call(this);this.Aw=null;}
function AXa(a){Yt(a.Aw);}
function AC6(){B.call(this);this.Bc=null;}
function AYQ(a){ABS(a.Bc);}
function Um(){B.call(this);this.uD=null;}
function AZC(a){Rq(a.uD);}
function AKg(){var a=this;HT.call(a);a.d$=null;a.d8=null;a.h9=null;a.h8=null;a.gG=null;a.p4=null;}
function AUJ(a){var b=new AKg();ALJ(b,a);return b;}
function ALJ(a,b){var c,d;EX(a);a.d$=Tf(b);a.d8=Tf(b);a.h9=Gx(a.d$,b);a.h8=Gx(a.d8,b);a.gG=AUQ(b);c=AK4(a.h9,a.d$);d=AK4(a.h8,a.d8);AB8(a.gG,c,d);a.p4=ASn(c,d);Vy(a,I(CE,[a.h9,a.gG,a.h8]));}
function ADa(a,b){a.gG.jW=b;JY(a.d$,b);Jx(a.d$,a.h9);JY(a.d8,b);Jx(a.d8,a.h8);}
function KK(a,b){a.p4.h5=b;a.gG.eS=b;}
function AO0(a){var b,c,d,e,f;b=Cf(20.0,a.bN);c=a.k.a;d=(c/2|0)-(b/2|0)|0;c=c-d|0;e=AIZ(a.i);f=BF(d,a.k.b);Q1(a.h9,e,f,a.bN);e.a=a.i.a+c|0;Q1(a.h8,e,f,a.bN);e.a=a.i.a+d|0;f.a=c-d|0;HJ(a.gG,e,f,a.bN);}
function AAF(){B.call(this);this.nK=null;}
var A7x=null;function AOh(){var a=new AAF();AEa(a);return a;}
function AEa(a){a.nK=BI();}
function VE(a,b,c,d,e){var f;f=new K3;f.te=e;f.la=c;f.ls=d;f.hy=b;BC(a.nK,f);}
function ACk(a){return Gf(a.nK,A7x);}
function ZO(b){return b===null?C(21):ABy(b);}
function AJ1(){A7x=Q(K3,0);}
function JT(){var a=this;B.call(a);a.sL=null;a.kT=null;a.kq=null;a.jf=null;a.jH=null;a.jg=null;a.gJ=null;}
function MA(b,c,d,e){var f,g,h;f=new JT;f.jf=new Bg;f.jH=new Bg;f.jg=new Bg;f.gJ=b;g=Co(e,b.hy);if(g!==null)g.iE=g.iE+1|0;else{g=new ABT;h=Kh(c,b.hy,d);g.iE=1;g.lM=h;Em(e,b.hy,g);}e=g.lM;f.sL=e;V(f.jf,e.be|0,e.bB|0);e=Kh(c,b.la,d);f.kT=e;V(f.jH,e.be|0,e.bB|0);b=Kh(c,b.ls,d);f.kq=b;V(f.jg,b.be|0,b.bB|0);return f;}
function ABN(b,c,d){var e,f,g;e=c.gJ.hy;f=Co(d,e);g=f.iE-1|0;f.iE=g;if(!g){Lm(d,e);IS(b,f.lM);}IS(b,c.kT);IS(b,c.kq);}
var Oh=G(0);
var A6z=null;var A6A=null;function AFh(){A6z=ES(40,40,40,200);A6A=ES(43,43,43,128);}
function AAO(){var a=this;B.call(a);a.m9=FB;a.mm=0;a.qz=0;}
var WC=G();
function ASY(a){}
function Rb(){var a=this;B.call(a);a.u9=null;a.u8=0;}
function AP8(a){Ib(a.u9,a.u8);}
function Ph(){B.call(this);this.vV=null;}
function AVo(a){Ib(a.vV,1);}
function Pi(){B.call(this);this.A5=null;}
function ATx(a){Ib(a.A5,0);}
function R_(){var a=this;B.call(a);a.Ad=null;a.Aa=null;a.Ab=null;}
function AOT(a){var b,c,d,e,f;b=a.Ad;c=a.Aa;d=a.Ab;e=Bt();f=new K;M(f);b=H(f,b);BM(b,9);b=H(b,c);BM(b,9);H(b,d);Bk(e,L(f));}
function PE(){B.call(this);this.xY=null;}
function AK3(a,b){var c;c=a.xY;Lu(c,FP(b,c.bL.cF.b-c.k.b|0));}
function PD(){B.call(this);this.yD=null;}
function ALj(a,b){var c;c=a.yD;K0(c,FP(b,c.bL.cF.a-c.k.a|0));}
function K3(){var a=this;B.call(a);a.te=null;a.la=null;a.ls=null;a.hy=null;}
var C4=G(Bu);
var AJi=G(Fs);
function AVk(a){var b=new AJi();APx(b,a);return b;}
function APx(a,b){a.kn=1;a.kI=1;a.m1=b;}
function AKd(){var a=this;B.call(a);a.oh=null;a.mv=null;a.eD=null;a.mh=null;a.bx=null;a.o_=null;a.nh=null;a.fM=null;a.gA=null;a.jr=null;}
function AS6(a,b){var c=new AKd();AXB(c,a,b);return c;}
function AXB(a,b,c){var d,e,f;a.eD=b;a.mh=c;a.bx=AUK();b=new K;M(b);a.jr=b;a.fM=JJ();b=new Sc;d=AJS(16);b.gs=0;b.dT=Q(Jt,d);b.w2=0.75;TT(b);a.gA=b;b=new T7;c=a.bx;e=a.jr;f=a.fM;b.dt=c;b.l7=e;b.sm=f;a.o_=b;b=new TQ;b.cU=c;b.mT=e;b.rE=f;a.nh=b;}
function Wr(a){var b,c,d,e,f,g,h;a:{b=MV(a.eD.e3);c=b.i6;if(c.c5>0){d=c.cW;e=0;b:while(true){f=b.i6.b3.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cQ;if(MK(a.fM,g))Co(a.fM,g);else{h=a.fM;Em(h,g,CU(h.c5));}c=c.cT;if(d!=b.i6.cW)break b;}e=e+1|0;}b=new H7;X(b);N(b);}}b=a.eD.fr;if(b!==null)YY(a,b);Bq(a.bx,a.eD.e3.c5);b=R1(MV(a.eD.e3));while(Gb(b)){c=P1(b);GV(a.bx,a.jr.K,J(c));BU(a.jr,c);}b=R1(MV(a.eD.e3));while(Gb(b)){c=P1(b);c=Co(a.eD.e3,c);Bq(a.bx,c.m);c=B6(c);while(B$(c)){g=B_(c);g=Co(a.fM,g);Bq(a.bx,
g.bp);}}if(a.eD.fr===null)Bq(a.bx,(-1));else{Bq(a.bx,a.gA.gs);ZD(a,a.eD.fr);}if(a.mh===null)Bq(a.bx,(-1));else{Bq(a.bx,1);ADN(a.mh,a.bx,a.gA);}a.oh=QB(a.bx);a.mv=Gj(L(a.jr));}
function YY(a,b){var c,d,e,f,g,h;if(ABW(a.gA,b))N$(a.gA,b);else{c=a.gA;d=CU(c.gs);if(b===null){e=Yv(c);if(e===null){c.lL=c.lL+1|0;e=AB0(c,null,0,0);f=c.gs+1|0;c.gs=f;if(f>c.pa)Wl(c);}}else{g=Ms(b);h=g&(c.dT.data.length-1|0);e=Ww(c,b,h,g);if(e===null){c.lL=c.lL+1|0;e=AB0(c,b,h,g);f=c.gs+1|0;c.gs=f;if(f>c.pa)Wl(c);}}e.cM=d;}b=b.cH;if(b===null)return;c=new Vi;c.rF=a;b.fa(c);}
function ZD(a,b){var c,d,e,f;c=(N$(a.gA,b)).bp;Bq(a.bx,c);if(b instanceof Nv)Bq(a.bx,(-1));else if(!(b instanceof K5))Bq(a.bx,0);else Bq(a.bx,1);d=a.o_;Bq(d.dt,b.eN.cY());e=b.eN;f=new VD;f.vb=d;e.fa(f);d=a.nh;Bq(d.cU,b.fs.cY());e=b.fs;f=new Tv;f.tS=d;e.fa(f);d=b.k4;Bq(a.bx,d.cY());e=new Ui;e.z1=a;d.fa(e);d=b.hD;Bq(a.bx,d.cY());d=d.b5();while(d.cy()){e=d.b7();OX(a.o_,e.k6);G9(a.nh,e.kv);Bq(a.bx,e.rm);}d=b.tO;if(d===null)Bq(a.bx,(-1));else Bq(a.bx,(Co(a.fM,d)).bp);b=b.cH;Bq(a.bx,b.cY());d=new PY;d.p2=a;b.fa(d);}
function RJ(){B.call(this);this.uS=null;}
function AX7(a,b){var c,d,e,f,g,h,i,j;c=a.uS;if(c.fD){d=EW(c);e=new K;M(e);H(H(e,d),C(437));$rt_globals.console.info($rt_ustr(L(e)));}b=b.data;f=CN(b[0]);g=EK(b[1]);h=(CN(b[2])).data[0];if(c.g.cl==h){i=null;j=null;if(b.length>=5){i=CN(b[3]);j=EK(b[4]);}b=D8(c);if(!Bi(b,C(181))&&!Bi(b,C(426))?0:1)NS(c.g,f,g);else{VL(c.g,f,g,i,j);Fr(c.g.dx);Fr(c.g.dG);MZ(c.g);Kt(c.g);N6(c);}}}
function AAY(){B.call(this);this.vQ=null;}
function AWG(a,b){var c,d,e,f;c=a.vQ;if(c.fI!=3){b=b.data;d=CN(b[0]);e=EK(b[1]);VL(c.g,d,e,null,null);if(c.fD){b=EW(c);f=JE(EY(),c.zo);c=new K;M(c);H(HE(H(H(c,b),C(438)),f),C(229));$rt_globals.console.info($rt_ustr(L(c)));}}}
function RR(){var a=this;B.call(a);a.u6=null;a.u7=null;a.u5=0;}
function AVH(a,b){var c,d,e;c=a.u6;d=a.u7;e=a.u5;d.j(Uu(c,(b.h.a+e|0)-c.eW.a|0));}
function RQ(){var a=this;B.call(a);a.rk=null;a.ri=null;a.rj=0;}
function A0J(a,b){var c,d,e;c=a.rk;d=a.ri;e=a.rj;d.j(Qk(c,(b.h.b+e|0)-c.eW.b|0));}
var Fa=G(0);
function Wx(){var a=this;B.call(a);a.jD=0;a.pK=0;a.lh=0;a.hI=0;a.i5=null;}
function B$(a){return a.jD>=a.lh?0:1;}
function B_(a){var b,c;P8(a);b=a.jD;a.hI=b;c=a.i5;a.jD=b+1|0;return c.nj(b);}
function YO(a){var b,c,d;if(a.hI<0){b=new C4;X(b);N(b);}P8(a);a.i5.pL(a.hI);a.pK=a.i5.b0;c=a.hI;d=a.jD;if(c<d)a.jD=d-1|0;a.lh=a.lh-1|0;a.hI=(-1);}
function P8(a){var b;if(a.pK>=a.i5.b0)return;b=new H7;X(b);N(b);}
function K9(){var a=this;N_.call(a);a.wG=null;a.y4=null;}
function AGt(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.wG;e=0;f=0;g=a.y4;a:{b:{while(true){if((e+32|0)>f&&D6(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cg(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BG;c=new K;M(c);U(H(U(H(c,C(439)),l),C(100)),h);Bm(b,L(c));N(b);}if(Cg(b)<m){b=new NZ;X(b);N(b);}if(m<0){b=new BG;c=new K;M(c);H(U(H(c,C(101)),m),C(102));Bm(b,L(c));N(b);}n=b.Y;h=n+b.mV|0;e=0;while(e<m){o=k+1|0;i=b.po.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Y=n+m|0;e=0;}if(!D6(c)){p=!D6(b)&&e>=f?A5q:A5p;break a;}i=g.data;n=Cg(c);o=i.length;n=Be(n,o);q=new ABm;q.sO=b;q.zX=c;p=AKc(a,d,e,f,g,0,n,q);e=q.vf;if(p===null&&0==q.mo)p=A5q;k=q.mo;h=0;if(c.pQ){b=new Kg;X(b);N(b);}if(Cg(c)<k)break;if(h>o){b=new BG;c=new K;M(c);BM(U(H(U(H(c,C(103)),h),C(97)),o),41);Bm(b,L(c));N(b);}l=h+k|0;if(l>o){b=new BG;c=new K;M(c);U(H(U(H(c,C(105)),l),C(100)),o);Bm(b,L(c));N(b);}if(k<0){b=new BG;c=new K;M(c);H(U(H(c,C(101)),k),C(102));Bm(b,L(c));N(b);}o=c.Y;m=0;while(m
<k){l=o+1|0;n=h+1|0;ZA(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Y=c.Y+k|0;if(p!==null)break a;}b=new Jz;X(b);N(b);}b=new BG;c=new K;M(c);BM(U(H(U(H(c,C(103)),k),C(97)),h),41);Bm(b,L(c));N(b);}Fp(b,b.Y-(f-e|0)|0);return p;}
var Sx=G(K9);
function AKc(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Nh(h,2))break a;i=A5q;break a;}c=k+1|0;n=j[k];if(!Gp(a,n)){c=c+(-2)|0;i=Eq(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Nh(h,3))break a;i=A5q;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gp(a,n))break b;if(!Gp(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Of(p)){c=k+(-3)|0;i=Eq(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Eq(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Nh(h,4))break a;i=A5q;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cg(h.zX)<2?0:1)break a;i=A5p;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gp(a,n))break c;if(!Gp(a,o))break c;if(!Gp(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=JI(r);m=c+1|0;j[c]=I7(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Eq(1);break a;}c=k+(-3)|0;i
=Eq(1);}h.vf=c;h.mo=f;return i;}
function Gp(a,b){return (b&192)!=128?0:1;}
function ACn(){var a=this;B.call(a);a.B0=null;a.B1=null;a.BZ=null;}
function U4(){B.call(this);this.qd=null;}
function ASu(a,b){var c,d;c=a.qd;d=c.d4+1|0;c.d4=d;c=new K;M(c);H(H(U(c,d),C(440)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function PU(){B.call(this);this.pU=null;}
function AK9(a){return a.pU.gW();}
function PT(){B.call(this);this.AN=null;}
function AM_(a){return a.AN.gW();}
function Rn(){B.call(this);this.tu=null;}
function A0c(a){return a.tu.gW();}
var W2=G();
function ATw(a){return Gt(1);}
function Zs(){B.call(this);this.sA=null;}
function A04(a,b){a.sA.j(HY(b));}
var AEX=G();
function ABQ(){B.call(this);this.uM=null;}
function ANt(a,b){a.uM.f();}
var AIT=G();
var AFm=G();
function Wu(){B.call(this);this.t$=null;}
function AMi(a,b){var c,d,e,f;c=a.t$;d=Ck(b);e=new K;M(e);H(H(e,C(441)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new AAT;d.B3=c;d.ss=b;e=new AAV;e.Ek=c;c=AJY(e);e=new ABF;e.wz=d;d=b.fY;if(d!==null)d.arrayBuffer().then(Bv(e,"f"),Bv(c,"f"));else{b=b.ia.getFile();f=new ABH;f.zP=e;f.zQ=c;b.then(Bv(f,"f"),Bv(c,"f"));}}
function Wt(){B.call(this);this.wx=null;}
function ARB(a,b){var c,d,e;c=a.wx;d=Ck(b);e=new K;M(e);H(H(e,C(442)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new Po;d.Bm=c;M6(b,d);}
function Hh(){var a=this;B.call(a);a.ek=null;a.i1=null;a.n9=null;a.g4=null;a.jy=0;a.hk=0;a.hi=0;}
function A7z(a,b){var c=new Hh();Sp(c,a,b);return c;}
function Sp(a,b,c){a.g4=W$(b);a.jy=c;a.hk=0;}
function Gs(a){return (JL(a.g4,0)).v;}
function ADu(a){a.hk=60084;}
function I2(a){return a.hk!=60084?0:1;}
function AEp(a){a.hk=60086;}
function AEz(a){a.hi=60035;}
function Lo(a){a.hi=60027;}
function Qr(a){a.hi=60137;}
function IN(a){a.hi=60151;}
function Dc(){Hh.call(this);this.e1=null;}
var A7A=null;var A7B=null;function AJt(a,b){var c=new Dc();JW(c,a,b);return c;}
function JW(a,b,c){Sp(a,b,c);a.e1=A7A;}
function A0W(a){return Gs(a);}
function AJ2(a){var b,c,d;b=Q(Hh,AC5(a));c=b.data;if(QD(a,b,0)==c.length)return b;d=new Bu;X(d);N(d);}
function Jb(a){return a.e1.data.length;}
function AC5(a){var b,c,d,e;b=1;if(I2(a)){c=a.e1.data;d=c.length;e=0;while(e<d){b=b+AC5(c[e])|0;e=e+1|0;}}return b;}
function Os(a){var b,c,d,e;b=1;c=a.e1.data;d=c.length;e=0;while(e<d){b=b+Os(c[e])|0;e=e+1|0;}return b;}
function QD(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(I2(a)){d=a.e1.data;c=d.length;f=0;while(f<c){e=QD(d[f],b,e);f=f+1|0;}}return e;}
function NF(a){ADu(a);IN(a);}
function Iz(a){AEp(a);AEz(a);}
function AFu(){A7A=Q(Dc,0);A7B=new ADk;}
function Rp(){B.call(this);this.z0=null;}
function AXm(a){Rq(a.z0);}
function Le(){var a=this;Fh.call(a);a.f7=null;a.cn=null;a.eQ=null;a.hL=null;a.gf=null;a.lA=null;a.mk=null;a.zS=0;a.qG=0;a.n7=0;a.uA=null;a.f1=null;a.f2=null;a.gS=null;a.hC=null;a.hH=null;a.i8=null;a.go=null;a.rh=0;a.jR=0;}
function AQz(a){Ob(a.hL);XJ(a.cn);Oz(a);}
function Oz(a){a.f1=BY(a.f1,null);a.f2=BY(a.f2,null);a.gS=BY(a.gS,null);a.hC=BY(a.hC,null);a.hH=BY(a.hH,null);a.i8=BY(a.i8,null);a.go=BY(a.go,null);}
function Wq(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.gS;break a;case 60084:c=a.f2;break a;case 60086:c=a.f1;break a;case 60136:c=a.go;break a;case 60137:c=a.i8;break a;case 60151:c=a.hC;break a;default:c=null;break a;}c=a.hH;}return c;}
function JY(a,b){var c,d;a.gf=b;c=BS(a.lA,b.pg);d=BS(a.mk,b.op);if(!(c&&d)){a.lA=b.pg;a.mk=b.op;if(a.bN!==0.0)Sk(a);}}
function ALp(a,b,c){PB(a.cn,c);if(a.lA!==null)Sk(a);}
function Sk(a){var b,c,d,e,f;Sn(a.hL);b=a.cn;c=a.lA;d=a.bN;e=a.f7.b4;f=b.gQ;b.cR=AIa(c.hZ,c.gH*d,c.l2,c.j2,f,e);RW(a.cn,1.25,a.f7.b4);Oz(a);a.uA=F9(a.f7,a.mk);a.f1=BY(a.f1,Fe(a,60086));a.f2=BY(a.f2,Fe(a,60084));a.gS=BY(a.gS,Fe(a,60035));a.hC=BY(a.hC,Fe(a,60151));a.hH=BY(a.hH,Fe(a,60027));a.i8=BY(a.i8,Fe(a,60137));a.go=BY(a.go,Fe(a,60136));a.rh=Bd(Bd(Bd(Bd(BZ(a.gS),BZ(a.hC)),BZ(a.hH)),BZ(a.go)),BZ(a.go));a.jR=Bd(BZ(a.f2),BZ(a.f1));O3(a);}
function O3(a){SB(a,a.cF.a,Bb(a.eQ.fm.data.length,a.cn.dX));SS(a);}
function AXF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=a.gf.br.d9;d=a.i;Bs(b,d.a,d.b,a.k,c);BD(a.cn.cR);e=a.cn.dX;f=a.eQ.fm.data.length;if(!f)return;g=Be(f,H5(a.k.b,e)+7|0);h=a.hL;if(h.data.length<g)a.hL=YD(g,h,a.cn,a.zS,a.qG,a.eQ);Nm(b,a.i,a.k);i=a.T.b;j=f-1|0;k=AFq(i,e,j);i=AFq((a.T.b+a.k.b|0)-1|0,e,j);a.zS=k;a.qG=i;j=a.k.a;l=Dw(a,4.0);m=Dw(a,1.0)+a.jR|0;n=Dw(a,3.0);o=Dw(a,5.0);p=Dw(a,1.0);q=0;r=a.i.a-a.T.a|0;s=Dw(a,1.0);d=a.e5;t=s+(d===null?0:FI(d))|0;while(k<=i){u=a.eQ.fm.data[k];h
=a.hL.data;s=k%h.length|0;v=h[s];WW(v,u.g4,b,e,j,0,k,s);w=Bb(e,k)-a.T.b|0;x=null;y=l+Bb(m,u.jy)|0;z=a.n7!=k?0:1;if(z){V(a.f7.du,a.k.a,e);d=a.i;Bs(b,d.a,d.b+w|0,a.f7.du,a.gf.br.gc);}ba=Wq(a,u.hk);bb=Wq(a,u.hi);if(ba!==null){d=a.gf;bc=d.ju.data[0];ADm(a,b,ba,r+y|0,(a.i.b+w|0)-p|0,!z?c:d.br.gc,bc.gO);}if(bb!==null){d=a.gf;bc=d.ju.data[0];ADm(a,b,bb,((r+y|0)+a.jR|0)+n|0,(a.i.b+w|0)-p|0,!z?c:d.br.gc,bc.gO);}bd=Fy(u.g4);be=(((y+a.jR|0)+n|0)+a.rh|0)+o|0;q=Bd(q,(be+bd|0)+t|0);PX(v,a.i.b+w|0,r+be|0,b,j,e,0,a.gf,null,
null,null,z,0,x);k=k+1|0;}d=a.cF;if(d.a!=q){d.a=q;SS(a);}F5(b);}
function ADm(a,b,c,d,e,f,g){Cw(a.cn.jc,0.0,0.0,BZ(c),Dl(c));Ct(a.cn.h$,c.fp);G7(a.cn,b,c,d,e,g,f);}
function A0j(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cn.dX;f=((b.h.b-a.i.b|0)+a.T.b|0)/e|0;if(f>=0){g=a.eQ.fm.data;if(f<g.length){h=g[f];if(!VU(a,b,f)){b=h.n9;if(b!==null)b.f();}}}}return 1;}
function AMl(a,b,c){var d,e,f,g;d=a.cn.dX;e=((b.h.b-a.i.b|0)+a.T.b|0)/d|0;if(!c&&e>=0){f=a.eQ.fm.data;if(e<f.length){g=f[e];if(VU(a,b,e)){b=g.i1;if(b!==null)b.f();}else{a.n7=e;b=g.ek;if(b!==null)b.f();}}}return A5W;}
function VU(a,b,c){var d,e,f,g,h,i,j;d=a.eQ.fm.data[c];e=Dw(a,4.0);f=Dw(a,1.0);g=Bd(BZ(a.f2),BZ(a.f1));h=e+Bb(f+g|0,d.jy)|0;i=(a.i.a-a.T.a|0)+h|0;j=i+g|0;c=b.h.a;return i<=c&&c<j?1:0;}
function Fe(a,b){var c,d,e,f,g;c=a.f7.b4;d=Zf(b);e=a.uA;f=a.cn;b=f.dX;g=f.iD;Cm(c.cd,e);f=D2(c,K4(c.cd,d)+2|0,b,g);Cm(f,e);BW(f,d,1.0,Lz(e,b));c=CT(c);CK(c,f);Ew(f);return c;}
function AFq(b,c,d){return Be(b/c|0,d);}
function AIu(){Le.call(this);this.qW=null;}
function Tf(a){var b=new AIu();ASf(b,a);return b;}
function ASf(a,b){LD(a);a.eQ=ALy(Q(Hh,0));a.hL=Q(Fk,0);a.n7=(-1);a.f7=b;a.cn=AOU(b.cv);}
function EF(a){a.eQ=ALy(AJ2(a.qW));if(a.bN!==0.0)O3(a);}
function EO(a,b){a.qW=b;EF(a);}
function Jx(a,b){var c;c=a.gf.br;I$(b,c.ll,c.lq);return b;}
function SP(){B.call(this);this.sq=null;}
function ASo(a){EF(a.sq);}
var AEf=G();
function Pk(b,c,d){return AFI(b,0,c,d,AGk());}
function AFI(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BL(c,d);h=g>=0?0:1+Qx(f,2.0)|0;i=g>0?0:1+Qx(f,3.0)|0;j=Q(Dc,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new K;M(m);U(H(m,C(443)),g);k[g]=AFI(L(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Dc;n=new K;M(n);U(H(n,C(444)),g);JW(m,L(n),l);n=new QR;n.sW=m;m.n9=n;switch((l+g|0)%3|0){case 0:break;case 1:Qr(m);break a;case 2:m.hi=60136;break a;default:break a;}Lo(m);}if(Uh(f)<0.25){n=JL(m.g4,0);n.bE=n.bE|2;}k[h+g|0]=m;g=g+1|0;}n=new Dc;Sp(n,b,c);n.e1=A7A;n.e1=j;b=new V3;b.vy
=n;b.vA=e;n.i1=b;n.ek=b;if((c+c|0)>d)Iz(n);else NF(n);return n;}
function Uw(){B.call(this);this.yg=null;}
function AOM(a){Ib(a.yg,1);}
function Uv(){B.call(this);this.wq=null;}
function AK1(a){Ib(a.wq,0);}
function AAj(){B.call(this);this.qL=null;}
function AKu(a){EF(a.qL);}
function AAk(){B.call(this);this.sF=null;}
function ANP(a){EF(a.sF);}
function AGd(){var a=this;B.call(a);a.ja=null;a.ng=0;a.fU=0;}
function AUK(){var a=new AGd();AS5(a);return a;}
function AS5(a){a.ng=0;a.ja=BN(16);a.fU=0;}
function GV(a,b,c){Bq(a,b);Bq(a,c);}
function Bq(a,b){var c,d;c=a.ja;d=c.data.length;if(d==a.fU)a.ja=Ja(c,d*2|0);c=a.ja.data;d=a.fU;a.fU=d+1|0;c[d]=b;}
function QB(a){var b,c,d,e,f;b=a.ng;if(b&&a.fU!=b){c=Ek();b=a.ng;d=a.fU;e=new K;M(e);H(U(H(U(H(e,C(445)),b),C(446)),d),C(447));Bk(c,L(e));}f=a.ja;b=f.data.length;d=a.fU;if(b!=d)f=Ja(f,d);return f;}
function Sc(){var a=this;Ea.call(a);a.gs=0;a.dT=null;a.lL=0;a.w2=0.0;a.pa=0;}
function AJS(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TT(a){a.pa=a.dT.data.length*a.w2|0;}
function ABW(a,b){return U6(a,b)===null?0:1;}
function N$(a,b){var c;c=U6(a,b);if(c===null)return null;return c.cM;}
function U6(a,b){var c,d;if(b===null)c=Yv(a);else{d=Ms(b);c=Ww(a,b,d&(a.dT.data.length-1|0),d);}return c;}
function Ww(a,b,c,d){var e;e=a.dT.data[c];while(e!==null&&!(e.nb==d&&(b!==e.cQ?0:1))){e=e.ie;}return e;}
function Yv(a){var b;b=a.dT.data[0];while(b!==null&&b.cQ!==null){b=b.ie;}return b;}
function AB0(a,b,c,d){var e,f;e=new Jt;Vo(e,b,null);e.nb=d;f=a.dT.data;e.ie=f[c];f[c]=e;return e;}
function Wl(a){var b,c,d,e,f,g,h,i;b=a.dT.data.length;b=AJS(!b?1:b<<1);c=Q(Jt,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dT.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.nb&f;i=h.ie;h.ie=d[b];d[b]=h;h=i;}e=e+1|0;}a.dT=c;TT(a);}
function T7(){var a=this;B.call(a);a.dt=null;a.l7=null;a.sm=null;}
function OX(a,b){var c;if(!(b instanceof L9)){Bq(a.dt,3);ACC(a,b);Bq(a.dt,b.je);}else{c=b;Bq(a.dt,5);ACC(a,c);Bq(a.dt,c.je);Bq(a.dt,c.vT);b=c.kE;Bq(a.dt,b.m);c=new V5;c.qJ=a;Fm(b,c);}}
function ACC(a,b){var c;c=b.ew.jn;GV(a.dt,a.l7.K,J(c));Bq(a.dt,b.ew.dy);Ov(a,b.lP);BU(a.l7,c);}
function Ov(a,b){if(b===null)Bq(a.dt,(-1));else Bq(a.dt,(Co(a.sm,b)).bp);}
function TQ(){var a=this;B.call(a);a.cU=null;a.mT=null;a.rE=null;}
function G9(a,b){var c,d,e;if(b instanceof HB){c=b;Bq(a.cU,9);X6(a,c.hf);}else if(b instanceof J5){d=b;Bq(a.cU,3);Yx(a,d);Bq(a.cU,d.p$);X6(a,d.h3);}else if(b instanceof Jd){e=b;Bq(a.cU,4);G9(a,e.jz);G9(a,e.iX);}else if(b===null)Bq(a.cU,(-1));else{Bq(a.cU,5);Yx(a,b);Bq(a.cU,b.yU);}}
function Yx(a,b){var c;c=b.fH.jn;GV(a.cU,a.mT.K,J(c));Bq(a.cU,b.fH.dy);b=b.gr;if(b===null)Bq(a.cU,(-1));else Bq(a.cU,(Co(a.rE,b)).bp);BU(a.mT,c);}
function X6(a,b){var c;Bq(a.cU,b.m);c=new Vs;c.wy=a;Fm(b,c);}
function XP(){var a=this;B.call(a);a.zl=0;a.zm=0;}
function Sm(){B.call(this);this.rW=null;}
function ARD(a,b){var c;c=a.rW;DH(c,b);MS(c,null);U3(c);}
var XZ=G(Eo);
var A7C=null;function AHP(){A7C=F($rt_doublecls());}
var JX=G();
var A7D=FB;var A7E=null;var A7F=null;function AE2(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.qz=IC(Db(d,D(0, 2147483648)),FB)?0:1;e=Db(d,D(4294967295, 1048575));f=GH(A3t(d,52))&2047;if(IC(e,FB)&&!f){c.m9=FB;c.mm=0;return;}if(f)e=A1$(e,D(0, 1048576));else{e=HK(e,1);while(IC(Db(e,D(0, 1048576)),FB)){e=HK(e,1);f=f+(-1)|0;}}g=A7F.data;h=f<<16>>16;i=0;j=g.length;k=BL(i,j);if(k>0){c=new BR;X(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BL(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IM(e,A7E.data[h],i);if(AMN(m,A7D)){while(DF(m,A7D)<=0){j=j+(-1)|0;m=CO(Ch(m,Bp(10)),Bp(9));}g=A7F.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IM(e,A7E.data[h],i);}e=HK(e,1);d=CO(e,Bp(1));g=A7E.data;h=j+1|0;n=g[h];f=i-1|0;n=IM(d,n,f);o=IM(JE(e,Bp(1)),A7E.data[h],f);p=Bp(1);while(true){q=Ch(p,Bp(10));if(DF(Da(m,q),Da(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ch(r,Bp(10));if(DF(Da(m,s),Da(n,s))>=0)break;r=s;}h=DF(p,r);e=h>0?Ch(Da(m,p),p):h<0?CO(Ch(Da(m,r),r),r):Ch(Da(CO(m,AFV(r,Bp(2))),r),r);if(DF(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Da(e,Bp(10));if(DF(e,D(2808348672, 232830643))<0)break;}else if(DF(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ch(e,Bp(10));}c.m9=e;c.mm=j-330|0;}
function IM(b,c,d){var e,f,g,h,i,j,k,l;e=Db(b,Bp(65535));f=Db(F6(b,16),Bp(65535));g=Db(F6(b,32),Bp(65535));h=Db(F6(b,48),Bp(65535));i=Db(c,Bp(65535));j=Db(F6(c,16),Bp(65535));k=Db(F6(c,32),Bp(65535));l=Db(F6(c,48),Bp(65535));return CO(CO(CO(HK(Ch(l,h),32+d|0),HK(CO(Ch(l,g),Ch(k,h)),16+d|0)),HK(CO(CO(Ch(l,f),Ch(k,g)),Ch(j,h)),d)),F6(CO(CO(CO(Ch(k,e),Ch(j,f)),Ch(i,g)),HK(CO(CO(CO(Ch(l,e),Ch(k,f)),Ch(j,g)),Ch(i,h)),16)),32-d|0));}
function AEO(){A7D=Da(Bp(-1),Bp(10));A7E=AHJ([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A7F=A2X([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Tq(){B.call(this);this.q9=null;}
function AK8(a){G$(a.q9,37,3);}
function Tr(){B.call(this);this.rI=null;}
function AM7(a){G$(a.rI,40,3);}
function Ts(){B.call(this);this.sV=null;}
function A0L(a){G$(a.sV,42,3);}
function Tt(){B.call(this);this.wJ=null;}
function APf(a){G$(a.wJ,45,3);}
function Tu(){B.call(this);this.w_=null;}
function ARj(a){G$(a.w_,45,5);}
function OC(){B.call(this);this.zg=null;}
function A1K(a,b){var c,d;c=a.zg;d=new Bu;Bm(d,$rt_str(b.message));c.j(d);}
var U7=G(0);
var A5c=null;function A2I(){A2I=Bn(U7);AYM();}
function AYM(){A5c=new $rt_globals.TextDecoder("utf-16");}
function Pg(){CE.call(this);this.z3=null;}
function AKX(a,b){var c;c=a.i;Bs(b,c.a,c.b,a.k,a.z3);}
function AFd(){var a=this;B.call(a);a.m$=null;a.fP=null;}
function AK4(a,b){var c=new AFd();AL_(c,a,b);return c;}
function AL_(a,b,c){a.m$=b;a.fP=c;}
function ARU(a){return a.fP.T.b/Mq(a)|0;}
function A0u(a){var b;b=a.fP;return H5((b.T.b+b.k.b|0)-1|0,Mq(a));}
function ASJ(a,b){var c;b=Bb(b,Mq(a));c=a.fP;return (b+c.i.b|0)-c.T.b|0;}
function AOP(a){return a.fP.i;}
function AUd(a){return a.fP.k;}
function APm(a,b,c){var d;d=a.m$;d.tx=b;d.qK=c;}
function AXV(a,b){return AB7(a.m$,b);}
function Mq(a){return a.fP.cn.dX;}
function AA6(){var a=this;B.call(a);a.sK=0;a.Ba=0;}
function FP(a,b){var c;c=a.Ba;if(c<=0)return 0;return Ya(a.sK,b,c);}
var S8=G(0);
var A5R=null;function AN6(){AN6=Bn(S8);ASO();}
function ASO(){A5R=S(C(259));}
var ADk=G();
function ARp(a,b,c){b=b;c=c;return Oa(Gs(b),Gs(c));}
function AJ9(){GS.call(this);this.fm=null;}
function ALy(a){var b=new AJ9();AMV(b,a);return b;}
function AMV(a,b){a.fm=b;}
function A1w(a,b){return a.fm.data[b].g4;}
function QR(){B.call(this);this.sW=null;}
function AXT(a){var b,c,d;b=a.sW;c=Bt();d=Gs(b);b=new K;M(b);H(H(b,C(448)),d);Bk(c,L(b));}
function V3(){var a=this;B.call(a);a.vy=null;a.vA=null;}
function AXP(a){var b,c;b=a.vy;c=a.vA;if(!I2(b))NF(b);else Iz(b);c.f();}
function QA(){B.call(this);this.p9=null;}
function AZg(a,b){J0(a.p9,b);}
function Qz(){B.call(this);this.AZ=null;}
function AVu(a){return a.AZ.rD;}
function RA(){B.call(this);this.td=null;}
function AWz(a){Mc(a.td);}
var Ec=G(Bu);
function WB(){var a=this;B.call(a);a.p1=null;a.xP=null;a.ui=0;a.vc=0;}
function NW(a,b){return Cg(a.xP)<b?0:1;}
var AGl=G();
function ADL(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADD(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(Er()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new ST;d.addEventListener("change",Bv(e,"handleEvent"));d.click();}
function Sr(){var a=this;B.call(a);a.bu=null;a.q1=null;a.iZ=null;a.nZ=null;a.l0=null;a.ga=null;}
function HO(a){return a.bu.cG.hr;}
function Vx(a){var b;b=new Sa;b.AB=a;return b;}
function AIk(a){var b,c,d,e,f;b=Q(B3,5);c=b.data;d=a.bu;BD(d);e=new Vg;e.yV=d;c[0]=C3(C(449),e);e=a.bu;BD(e);f=new Vb;f.wA=e;c[1]=C3(C(450),f);d=a.bu;BD(d);e=new Vc;e.xc=d;c[2]=C3(C(451),e);d=a.bu;BD(d);e=new Vd;e.u3=d;c[3]=C3(C(452),e);d=a.bu;BD(d);e=new Ve;e.p6=d;c[4]=C3(C(453),e);return Dy(b);}
function P7(a,b){var c;c=new Pn;c.vn=a;c.vo=b;return c;}
function Kv(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Ej(a.ga.b6);d=a.bu.d;e=D8(d);f=Hw(d);g=a.bu.fn;if(c===null)h=null;else{A3L();switch(A7G.data[c.fF]){case 1:h=Oc(g,e,f);break a;case 2:h=YA(g,e,f);break a;default:}b=new EZ;X(b);N(b);}}c=a.bu;e=Fq(c,b);g=I3(c.d.g,e.bq,e.bv);f=Sh(c,g);if(h!==null){g=c.d;i=e.bq;j=e.bv;e=new AAl;e.Eq=c;e.Ep=b;e.Eo=f;h.s3(g,i,j,e,c.jN);}else{e=Co(c.d.g.dG,g);if(e!==null)IP(c,e);else{e=Co(c.d.g.dx,g);if(e!==null&&!Ez(e))YN(c.kt,b,e,c,f);else{c=c.kt;k=Q(B3,1);l=k.data;e=new B3;f=c.b6;BD(f);g
=new ABB;g.wt=f;C7(e,g,C(454));l[0]=e;K7(c,b,Dy(k));}}}}
var AD0=G(0);
function AB9(){var a=this;B.call(a);a.v5=null;a.v4=null;}
function ASV(a){FF(a.v5,a.v4);}
var XR=G();
var A7H=null;function NS(b,c,d){Q2(b,c,d,0);}
function Q2(b,c,d,e){WS(b,c,d,null,null,e);}
function WS(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=LY(c);i=Ba(h);j=Ba(h);k=Ba(h);l=CI(b);c=b.A;if(c.data.length<i)b.A=AEh(c,i);m=0;while(m<i){if(g&&m<l){n=4*Ba(h)|0;h.e7=h.e7+n|0;}else b.A.data[m]=D3(Yp(h,d,0));m=m+1|0;}MZ(b);if(j)b.dc=AF0(AGP(h));Fr(b.dG);Fr(b.dx);o=b.dG;g=0;while(g<k){Em(o,DQ(Ba(h),Ba(h)),DQ(Ba(h),Ba(h)));g=g+1|0;}p=b.dG;o=b.dx;q=WV(ABl(p));while(Gb(q)){r=AC0(q);s=r.cQ;p=r.cM;BD(A7H);r=Co(o,p);if(r===null){r=BI();Em(o,p,r);}BC(r,s);}if(o.oG===null){p=new Qa;p.vm=o;o.oG=p;}p=o.oG;r=new YV;Nx(r,
p.vm);while(Gb(r)){NK(r);o=r.gZ.cM;p=A4I;c=Q(B,o.m);d=c.data;Gf(o,c);KS(c,p);g=0;t=d.length;while(g<t){p=d[g];Km(o,g);o.cD.data[g]=p;g=g+1|0;}}QW(h);if(e!==null&&f!==null){p=APH(e,f);Pz(p);b.eU=AU8(p.oV,p.iI);b.dc=AF0(p.pi);}}
function VL(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=LY(c);i=Ba(h);j=Ba(h);k=Ba(h)!=1?0:1;l=Ba(h);m=Ba(h);n=ACA(b,i);o=ACA(b,j);p=(IK(Cc(b,n.a),n.b)).data[0].s;q=(IK(Cc(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=Yp(h,d,i);if(!r)g=LP(p,g);if(r==s)g=LP(g,q);t=n.a+r|0;u=D3(g);c=b.A.data;v=c[t];c[t]=u;if(!k&&Ji(v)==Ji(u)){t=0;while(t<Ji(v)){o=v.s.data[t];w=u.s.data[t];x=o.bX;y=x!=5?0:1;if(!y&&x&&!w.bX){w.bX=x;w.bE=o.bE;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AGP(h);w=KH(i,j,(-1));WF(b.dc,w,u);}else if(e!==null&&f!==null){v=APH(e,f);Pz(v);w=KH(i,j,(-1));WF(b.dc,w,v.pi);n=b.eU;n.fr=b.dc.db.ci;n.e3=v.iI;}}QW(h);}
function Yp(b,c,d){var e,f,g,h,i,j,k,l;e=Ba(b);f=Q(Cv,e);g=f.data;h=0;while(h<e){i=Ba(b);j=Ba(b);k=Ba(b);l=Ba(b);g[h]=D$(Ey(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AJr(){A7H=new US;}
var YE=G(0);
var O7=G(0);
var H9=G();
function Zv(){H9.call(this);this.zt=null;}
function AA_(a,b){var c,d,e;c=0;while(true){d=a.zt;if(d.jV===null)d.jV=B6(d.xr);if(!B$(d.jV))e=0;else{c=b.L(B_(d.jV));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var QV=G(0);
function OB(){var a=this;B.call(a);a.B6=null;a.B7=null;a.B4=0;a.B5=0;}
var ACN=G();
function ALq(a,b){b=b;b.cL=BY(b.cL,null);}
var AE5=G(0);
function AIa(b,c,d,e,f,g){f=f.data;f[Je(0,0)]=H0(g,b,c,d,0);f[Je(0,1)]=H0(g,b,c,d,2);f[Je(1,0)]=H0(g,b,c,e,0);f[Je(1,1)]=H0(g,b,c,e,2);return f[Je(0,0)];}
function Jt(){var a=this;GO.call(a);a.nb=0;a.ie=null;}
var H7=G(Bu);
function AA7(){var a=this;B.call(a);a.uH=null;a.uE=null;a.uF=null;}
function AOX(a,b,c,d){var e,f,g,h;b=a.uH;e=a.uE;f=a.uF;AAt(b,e);if(f!==null)d.my.f();if(ABk(d)){f=d.fb;g=e.cZ;h=e.fV;UL(b,BF((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.mS,e,d.s1);}}
function ABq(){B.call(this);this.uz=null;}
function ART(a,b){var c,d,e,f;c=a.uz;Ej(c.c6.f_.b6);d=Bt();e=Ck(b);f=new K;M(f);H(H(f,C(455)),e);Bk(d,L(f));d=ARA(b,c);EO(c.c6.gb,d);d.i1.f();b=LQ(b.hm,Fn(Hi(b),C(456)));FM(c.g6,b);}
var ACW=G();
function AZx(a,b){ADL(b);}
function ACV(){B.call(this);this.r$=null;}
function AVs(a,b){var c,d,e;c=a.r$;d=0;e=b.length;while(d<e){c.j(AJa(b[d],null));d=d+1|0;}}
var ACp=G();
function AWg(a,b){ADL(b);}
function ACo(){var a=this;B.call(a);a.rM=null;a.rN=null;}
function AWL(a,b){var c,d,e;c=a.rM;d=a.rN;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);c.j(A2y(b,d,Q(BK,0),Q(BK,0)));}
function AJn(){var a=this;B.call(a);a.io=null;a.e7=0;}
function LY(a){var b=new AJn();ATC(b,a);return b;}
function ATC(a,b){a.io=b;a.e7=0;}
function Ba(a){var b,c;b=a.io.data;c=a.e7;a.e7=c+1|0;return b[c];}
function QW(a){var b,c,d,e;if(a.e7!=a.io.data.length){b=Ek();c=a.io.data.length;d=a.e7;e=new K;M(e);H(U(H(U(H(e,C(445)),c),C(457)),d),C(458));Bk(b,L(e));}}
function QI(){var a=this;B.call(a);a.Cl=null;a.tg=0;}
function AUr(a,b){var c,d,e,f;c=a.tg;d=(CN(KU(b,0))).data;b=Bt();e=d[0];f=new K;M(f);U(H(U(H(f,C(459)),c),C(460)),e);Bk(b,L(f));b=Bt();e=d[1];f=new K;M(f);U(H(U(H(f,C(459)),c),C(461)),e);Bk(b,L(f));}
function ADG(){B.call(this);this.N$=null;}
function U8(){var a=this;B.call(a);a.t9=null;a.t8=0;}
function ALB(a,b){var c,d,e,f,g,h,i;c=a.t9;d=a.t8;e=!d?c.ej.d8:c.ej.d$;Ej(c.bb);f=Bt();g=KI(b);h=new K;M(h);H(H(h,C(462)),g);Bk(f,L(h));i=new ADg;i.n$=c;i.nQ=e;i.rn=d;f=ARA(b,i);if(!d)c.v6=f;else c.r9=f;f.ek.f();EO(e,f);}
var ST=G();
function ATX(a,b){}
var US=G();
var FG=G();
var A7I=null;var A7J=null;var A54=null;var A7K=null;var A7L=null;var A7M=null;function AI1(){A7I=new TJ;A7J=new TG;A54=new TH;A7K=new TE;A7L=new TF;A7M=new VA;}
function AHw(){var a=this;B.call(a);a.oV=null;a.pi=null;a.iI=null;a.cx=null;a.ol=null;a.mO=null;a.iY=null;a.nl=null;a.pd=null;}
function APH(a,b){var c=new AHw();A0v(c,a,b);return c;}
function A0v(a,b,c){a.cx=LY(b);a.ol=c;}
function Pz(a){var b,c,d,e,f,g,h,i;b=Ba(a.cx);c=new Nw;Qp(c);a.iI=c;a.iY=BI();d=0;while(d<b){e=Ba(a.cx);f=Ba(a.cx);g=Ey(a.ol,e,f);Em(a.iI,g,BI());BC(a.iY,g);d=d+1|0;}c=WV(ABl(a.iI));while(Gb(c)){HW((AC0(c)).cM,O1(a));}d=Ba(a.cx);if(d==(-1))a.oV=null;else{a.mO=Q(FT,d);c=new VT;h=a.cx;i=a.ol;g=a.iY;c.dH=h;c.yp=i;c.xV=g;a.nl=c;c=new Rd;c.en=h;c.z2=i;c.Af=g;a.pd=c;a.oV=Q3(a,null);}if(Ba(a.cx)!=(-1))a.pi=YS(a.cx,a.mO);}
function Q3(a,b){var c,d,e,f,g,h,i,j,k;c=Ba(a.cx);d=Ba(a.cx);e=a.nl;f=Ba(e.dH);g=BI();h=0;while(h<f){BC(g,OH(e));h=h+1|0;}a:{switch(d){case -1:i=new Nv;i.g8=b;b=A54;i.cH=b;i.fs=b;i.eN=b;i.k4=b;i.hD=b;break a;case 0:i=A2Z(b);break a;case 1:i=new K5;AFk(i,b);HW(i.eN,g);break a;default:}b=new C4;i=new K;M(i);U(H(i,C(463)),d);Bm(b,L(i));N(b);}i.eN=g;b=a.pd;d=Ba(b.en);e=BI();j=0;while(j<d){BC(e,Hm(b));j=j+1|0;}i.fs=e;i.k4=O1(a);d=Ba(a.cx);b=BI();j=0;while(j<d){e=OH(a.nl);g=Hm(a.pd);f=Ba(a.cx);k=new Qq;k.k6=e;k.kv
=g;k.rm=f;BC(b,k);j=j+1|0;}i.hD=b;j=Ba(a.cx);i.tO=j==(-1)?null:Bx(a.iY,j);d=Ba(a.cx);b=BI();j=0;while(j<d){BC(b,Q3(a,i));j=j+1|0;}i.cH=b;a.mO.data[c]=i;return i;}
function O1(a){var b,c,d,e;b=Ba(a.cx);c=BI();d=0;while(d<b){e=Ba(a.cx);BC(c,Bx(a.iY,e));d=d+1|0;}return c;}
function AD6(){var a=this;B.call(a);a.lF=null;a.o$=null;}
function AKm(){var a=this;B.call(a);a.DK=0;a.CU=0;a.rc=0;a.mX=0;}
function ACH(){var a=this;B.call(a);a.r1=null;a.r2=null;}
function AUe(a){var b,c,d,e,f,g;b=a.r1;c=a.r2;if(BS(c.lF,b.d.f0)){c=c.o$;CL(b,c.mX,c.rc,0);Ce((Bj(b)).bK,c.mX,c.rc);Ce((Bj(b)).bA,c.CU,c.DK);}else{d=(CA(b.fn.zU)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){FH(b);b=new WX;b.xK=g;b.xL=c;BD(b);c=new Ye;c.vE=b;$rt_globals.setTimeout(Bv(c,"onTimer"),0);}}}
function ACI(){var a=this;B.call(a);a.Az=null;a.Ay=null;}
function AWy(a){IP(a.Az,a.Ay);}
function FT(){var a=this;B.call(a);a.g8=null;a.cH=null;a.fs=null;a.eN=null;a.hD=null;a.k4=null;a.tO=null;}
function A2Z(a){var b=new FT();AFk(b,a);return b;}
function AFk(a,b){a.g8=b;a.cH=BI();a.fs=BI();a.eN=BI();a.k4=BI();a.hD=BI();}
function AC2(a){var b;b=a.g8;if(b!==null)b.cH.qw(a);}
function Vi(){B.call(this);this.rF=null;}
function ANz(a,b){b=b;YY(a.rF,b);}
var Nv=G(FT);
var K5=G(FT);
function Ui(){B.call(this);this.z1=null;}
function AUh(a,b){var c;b=b;c=a.z1;Bq(c.bx,(Co(c.fM,b)).bp);}
function Qq(){var a=this;B.call(a);a.k6=null;a.kv=null;a.rm=0;}
function PY(){B.call(this);this.p2=null;}
function AXG(a,b){b=b;ZD(a.p2,b);}
var P2=G(0);
var Fo=G(Fv);
var Nb=G(Fo);
var TJ=G(Nb);
var NQ=G(Ea);
var TG=G(NQ);
var N5=G(Fi);
function AVm(a){var b;b=new Ec;X(b);N(b);}
function APw(a,b){var c;c=new Ec;X(c);N(c);}
function AOA(a,b){b=new Ec;X(b);N(b);}
var TH=G(N5);
function APD(a,b){var c;c=new BG;X(c);N(c);}
function AOS(a){return 0;}
function AMM(a){return A7K;}
function ALb(a){return 1;}
var TE=G();
function AKV(a){return 0;}
function AYt(a){var b;b=new Ml;X(b);N(b);}
function ARt(a){var b;b=new C4;X(b);N(b);}
var XO=G(0);
var TF=G();
var VA=G();
function QT(){var a=this;B.call(a);a.ms=0;a.rT=null;}
function A1M(a,b){var c,d,e;c=a.rT;b=b;d=c.zl;e=c.zm;d=b.a<=d&&e<=b.b?1:0;a.ms=d;return d?0:1;}
var Kg=G(Ec);
var Jz=G(Bu);
var NZ=G(Bu);
function XI(){B.call(this);this.yn=null;}
function AYu(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.yn;d=CN(c[0]);e=(CN(c[1])).data[0];if(!AAG(b.g)){c=b.g;if(c.cl==e){e=b.pZ;f=LY(d);Fr(c.dG);Fr(c.dx);MZ(c);while(f.e7>=f.io.data.length?0:1){if(Ba(f)==(-1))continue;g=U$(c,Ba(f));h=N4(Cc(c,g.bq),g.bv);if(Ba(f)==(-1)){if(!e)continue;h.bX=0;h.bE=h.bE|4;continue;}i=U$(c,Ba(f));j=Ba(f);k=Ba(f);Em(c.dG,g,i);l=c.dx;m=BI();if(Co(l,i)===null)Em(l,i,m);BC(Co(c.dx,i),g);h.bX=j;h.bE=k;}Ln(b);if(b.DN){n=JE(EY(),b.z$);if(A16(n,Bp(100))){b=EW(b);c=new K;M(c);H(HE(H(H(c,
b),C(464)),n),C(229));$rt_globals.console.info($rt_ustr(L(c)));}}}}}
function AG2(){B.call(this);this.Qf=null;}
function ABz(){B.call(this);this.vK=null;}
function ALH(a,b){Md(a.vK,b);}
function QH(){var a=this;B.call(a);a.xr=null;a.jV=null;}
function ZJ(){var a=this;B.call(a);a.qe=null;a.qf=null;}
function AUf(a){var b,c;b=a.qe;c=a.qf;FF(b.b6.dE,c);AAf(b);}
function G3(){var a=this;B.call(a);a.d_=0;a.eP=0;a.o2=null;a.nI=0;a.gD=null;}
function AR0(a,b,c,d,e,f){var g=new G3();AXi(g,a,b,c,d,e,f);return g;}
function AXi(a,b,c,d,e,f,g){a.d_=b;a.eP=c;a.o2=BF(f,g);a.nI=d;a.gD=e;}
function P_(){Fo.call(this);this.i6=null;}
function R1(a){var b;b=new ZQ;Nx(b,a.i6);return b;}
function S_(){Fo.call(this);this.yh=null;}
function WV(a){var b;b=new S4;Nx(b,a.yh);return b;}
function Qa(){Fv.call(this);this.vm=null;}
function VD(){B.call(this);this.vb=null;}
function AVO(a,b){b=b;OX(a.vb,b);}
function Tv(){B.call(this);this.tS=null;}
function AXn(a,b){b=b;G9(a.tS,b);}
function Kk(){var a=this;B.call(a);a.ew=null;a.lP=null;a.je=0;}
function A2E(a,b,c){var d=new Kk();AFP(d,a,b,c);return d;}
function AFP(a,b,c,d){a.ew=b;a.lP=c;a.je=d;}
function AI3(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BS(a.ew,c.ew)&&BS(a.lP,c.lP)&&BS(CU(a.je),CU(c.je))?1:0;}return 0;}
function L9(){var a=this;Kk.call(a);a.kE=null;a.vT=0;}
function AUB(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){if(!AI3(a,b))return 0;c=b;return BS(a.kE,c.kE);}return 0;}
function E3(){var a=this;B.call(a);a.fH=null;a.gr=null;a.yU=0;}
function A15(a,b,c){var d=new E3();NH(d,a,b,c);return d;}
function NH(a,b,c,d){a.fH=b;a.gr=c;a.yU=d;}
function AHz(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BS(a.fH,c.fH)&&BS(a.gr,c.gr)?1:0;}return 0;}
function HB(){E3.call(this);this.hf=null;}
function J5(){var a=this;E3.call(a);a.h3=null;a.p$=0;}
function A0Q(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){if(!AHz(a,b))return 0;c=b;return BS(a.h3,c.h3);}return 0;}
function Jd(){var a=this;E3.call(a);a.jz=null;a.iX=null;}
function AT2(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BS(a.jz,c.jz)&&BS(a.iX,c.iX)?1:0;}return 0;}
function AEA(){var a=this;H9.call(a);a.Pu=null;a.QP=0;a.I9=0;a.Hu=0;}
function RE(){var a=this;B.call(a);a.we=null;a.wf=null;}
function AN5(a){var b,c;b=a.we;c=a.wf;R9();Kv(b,c,A7N);}
function RF(){var a=this;B.call(a);a.x1=null;a.x2=null;}
function AL6(a){var b,c;b=a.x1;c=a.x2;R9();Kv(b,c,A7O);}
function RC(){var a=this;B.call(a);a.uw=null;a.uv=null;}
function ALf(a){Kv(a.uw,a.uv,null);}
function RD(){var a=this;B.call(a);a.p3=null;a.p5=null;}
function ANZ(a){var b,c,d,e,f,g,h;b=a.p3;c=a.p5;d=D8(b.bu.d);e=Hw(b.bu.d);d=AAW(b.bu.fn,d,e);Ej(b.ga.b6);b=b.bu;e=Fq(b,c);if(d!==null){f=b.d;g=e.bq;h=e.bv;e=new ABb;e.C0=b;e.C1=c;d.Jd(f,g,h,1,e,b.jN);}}
function Q$(){B.call(this);this.rr=null;}
function AY1(a){var b;b=a.rr;Ej(b.ga.b6);G8(b.bu,Vx(b),0);}
function Q9(){B.call(this);this.Av=null;}
function AYd(a){var b;b=a.Av;Ej(b.ga.b6);G8(b.bu,Vx(b),1);}
function Q8(){B.call(this);this.yY=null;}
function ATk(a){var b,c,d;b=a.yY;Ej(b.ga.b6);c=HO(b);b=b.bu;BD(b);d=new ADn;d.xB=b;Rc(c,d,AEd(C(465)));}
function P4(){var a=this;B.call(a);a.wc=null;a.wd=null;}
function AP9(a){var b,c;b=a.wc;c=a.wd;b=b.bu.d;b.ps=c;Mb(b);}
var QG=G(0);
var A5S=null;function AJp(){A5S=new S1;}
function X_(){B.call(this);this.vt=null;}
function ALX(a){var b,c,d;b=a.vt;Ej(b.ga.b6);c=HO(b);b=b.bu;BD(b);d=new Rl;d.ts=b;N0(c,d);}
function SD(){B.call(this);this.ua=null;}
function ANy(a,b,c){var d,e;c=a.ua;d=c.d.g;e=b.bp;b=c.fk;Zr(d.A.data[e],0,b);}
function VT(){var a=this;B.call(a);a.dH=null;a.yp=null;a.xV=null;}
function OH(a){var b,c,d,e,f,g,h,i;a:{b=Ba(a.dH);switch(b){case 3:break;case 5:c=Ps(a);d=NU(a);b=Ba(a.dH);e=Ba(a.dH);f=Ba(a.dH);g=BI();h=0;while(h<f){BC(g,NU(a));h=h+1|0;}i=new L9;AFP(i,c,d,b);i.kE=g;i.vT=e;break a;default:c=new C4;d=new K;M(d);U(H(d,C(466)),b);Bm(c,L(d));N(c);}i=A2E(Ps(a),NU(a),Ba(a.dH));}return i;}
function Ps(a){var b,c;b=Ba(a.dH);c=Ba(a.dH);return AWd(Ey(a.yp,b,c),Ba(a.dH));}
function NU(a){var b;b=Ba(a.dH);if(b==(-1))return null;return Bx(a.xV,b);}
function Rd(){var a=this;B.call(a);a.en=null;a.z2=null;a.Af=null;}
function Hm(a){var b,c,d,e,f;a:{b:{b=Ba(a.en);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Wk(a);d=Qv(a);b=Ba(a.en);e=R4(a);f=new J5;NH(f,c,d,2);f.p$=b;f.h3=e;break a;case 4:c=Hm(a);d=Hm(a);f=new Jd;NH(f,c.fH,c.gr,9);f.jz=c;f.iX=d;break a;case 5:f=A15(Wk(a),Qv(a),Ba(a.en));break a;case 9:c=R4(a);f=new HB;d=!Ez(c)&&Bx(c,0)!==null?(Bx(c,0)).gr:null;NH(f,null,null,7);f.hf=BI();c=B6(c);while(B$(c)){e=B_(c);if(!(e instanceof HB))BC(f.hf,e);else{e=e;HW(f.hf,e.hf);}}f.gr=d;break a;default:break b;}f
=null;break a;}c=new C4;d=new K;M(d);U(H(d,C(467)),b);Bm(c,L(d));N(c);}return f;}
function Wk(a){var b,c;b=Ba(a.en);c=Ba(a.en);return AWd(Ey(a.z2,b,c),Ba(a.en));}
function Qv(a){var b;b=Ba(a.en);if(b==(-1))return null;return Bx(a.Af,b);}
function R4(a){var b,c,d;b=Ba(a.en);c=BI();d=0;while(d<b){BC(c,Hm(a));d=d+1|0;}return c;}
function Rx(){var a=this;B.call(a);a.qp=null;a.qn=0;a.qo=0;a.ql=null;a.qm=0;a.qk=0;}
function AQG(a,b){var c,d,e,f,g,h,i,j;c=a.qp;d=a.qn;e=a.qo;f=a.ql;g=a.qm;h=a.qk;i=Cz(c.bo,5.0);d=Be((c.bo.bR.a-d|0)-i|0,Bd((i-d|0)-c.Q.k.a|0,b.h.a));j=Be((c.bo.bR.b-e|0)-i|0,Bd((i-e|0)-c.Q.k.b|0,b.h.b));V(f,d+g|0,j+h|0);Ep(c,f,c.V.k);}
function WH(){var a=this;B.call(a);a.zM=null;a.zN=null;a.zK=null;a.zL=0;a.zI=0;a.zJ=0;a.zG=0;a.zH=0;a.zE=0;a.zF=0;a.t0=0;}
function AU9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.zM;d=a.zN;e=a.zK;f=a.zL;g=a.zI;h=a.zJ;i=a.zG;j=a.zH;k=a.zE;l=a.zF;m=a.t0;n=Cz(c.bo,5.0);o=c.V.hJ();Ct(d,c.V.k);Ct(e,c.V.i);switch(f){case -1:f=Be(h+(b.h.a-g|0)|0,c.bo.bR.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.h.a|0)-g|0,Bd(o.a,n-c.Q.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.h.b-k|0)|0,(c.bo.bR.b+c.Q.k.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.h.b|0)-k|0,o.b);}Ep(c,e,d);}
function Ub(){var a=this;B.call(a);a.wX=null;a.wW=0.0;}
function Ng(a,b){return Lg(a.wX,b,a.wW*2.0+0.875);}
var ACj=G(BG);
function OZ(){B.call(this);this.rd=null;}
function AWV(a){AGK(a.rd);}
function O0(){B.call(this);this.rQ=null;}
function A0h(a){Hl(a.rQ);}
function OY(){B.call(this);this.vr=null;}
function ATp(a){AHu(a.vr);}
function UA(){B.call(this);this.xW=null;}
function AO9(a){a.xW.AK();}
function Uz(){B.call(this);this.uf=null;}
function AZf(a){a.uf.vs();}
function Xx(){B.call(this);this.qM=null;}
function AMy(a){var b,c,d,e,f,g,h,i;b=a.qM;c=(b.q1.cV()).data;d=Q(B3,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new V_;i.xo=b;i.xn=h;e[f]=Wy(i,h);f=f+1|0;}return d;}
function Zy(){B.call(this);this.wM=null;}
function AOb(a){a.wM.nZ.ic(0);}
function Zz(){B.call(this);this.xu=null;}
function AZ5(a){a.xu.nZ.ic(1);}
function Vg(){B.call(this);this.yV=null;}
function AKE(a){var b,c,d,e,f;b=a.yV.d.g;c=b.cl;d=new K;M(d);U(H(d,C(468)),c);$rt_globals.console.info($rt_ustr(L(d)));c=b.m4;d=new K;M(d);U(H(d,C(469)),c);$rt_globals.console.info($rt_ustr(L(d)));d=b.dc;e=Hk(E6(b));ACx(d,0,d.db,e);b=Bt();f=b.mC;f.data[0]=10;WY(b,f,0,1);}
function Vb(){B.call(this);this.wA=null;}
function AOc(a){Y3(a.wA);}
function Vc(){B.call(this);this.xc=null;}
function ASQ(a){AAb(a.xc);}
function Vd(){B.call(this);this.u3=null;}
function AXv(a){N6(a.u3.d);}
function Ve(){B.call(this);this.p6=null;}
function AWn(a){U3(a.p6);}
function Ox(){B.call(this);this.wV=null;}
function AR9(a){var b,c,d,e,f,g,h;b=a.wV;c=Q(B3,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Wy(P7(b,g),WD(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Wy(P7(b,g),WD(g));e=h;}return c;}
function Tw(){B.call(this);this.sI=null;}
function AQ8(a,b,c){HF(Cc(a.sI.d.g,b.bp),0,J(c));}
var Xf=G(0);
function ABA(){var a=this;B.call(a);a.mc=null;a.ph=null;a.hm=null;a.mG=null;}
function A2y(a,b,c,d){var e=new ABA();AGs(e,a,b,c,d);return e;}
function AGs(a,b,c,d,e){a.mc=b;a.ph=c;a.hm=d;a.mG=e;}
function M6(a,b){var c,d;c=new ABI;d=a.mc.values();c.j_=a;c.xA=d;c.kJ=b;AAv(c);}
function Yb(a){var b,c,d,e;b=a.mG;if(b===null){b=a.hm;c=b.data;d=Hi(a);e=c.length;b=Dg(b,e+1|0);b.data[e]=d;b=b;a.mG=b;}return b;}
function Hi(a){return HY(a.mc.name);}
function A0P(a){return a.hm;}
function AEC(a){return LQ(a.hm,Hi(a));}
function AGJ(){var a=this;B.call(a);a.jn=null;a.dy=0;}
function AWd(a,b){var c=new AGJ();AKx(c,a,b);return c;}
function AKx(a,b,c){a.jn=b;a.dy=c;}
function AP_(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return a.dy==c.dy&&BS(a.jn,c.jn)?1:0;}return 0;}
function V5(){B.call(this);this.qJ=null;}
function AXl(a,b){b=b;Ov(a.qJ,b);}
function Vs(){B.call(this);this.wy=null;}
function A1J(a,b){b=b;G9(a.wy,b);}
var S1=G();
function FA(){var a=this;B.call(a);a.j6=0;a.ti=0;a.jC=null;a.gZ=null;a.xH=null;a.lH=null;}
function A7P(a){var b=new FA();Nx(b,a);return b;}
function Nx(a,b){a.lH=b;a.ti=b.cW;a.jC=null;}
function Gb(a){var b,c;if(a.jC!==null)return 1;while(true){b=a.j6;c=a.lH.b3.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.j6=b+1|0;}return 0;}
function AH1(a){var b;if(a.ti==a.lH.cW)return;b=new H7;X(b);N(b);}
function NK(a){var b,c,d,e;AH1(a);if(!Gb(a)){b=new Ml;X(b);N(b);}b=a.jC;if(b!==null){c=a.gZ;if(c!==null)a.xH=c;a.gZ=b;a.jC=b.cT;}else{d=a.lH.b3.data;e=a.j6;a.j6=e+1|0;b=d[e];a.gZ=b;a.jC=b.cT;a.xH=null;}}
var ZQ=G(FA);
function P1(a){NK(a);return a.gZ.cQ;}
var S4=G(FA);
function AC0(a){NK(a);return a.gZ;}
var YV=G(FA);
function ADY(){var a=this;B.call(a);a.On=null;a.Rp=0;}
function YT(){var a=this;B.call(a);a.l=null;a.dQ=0;a.mt=null;a.qD=0;a.hM=0;a.fA=0;a.bz=0;a.m8=null;}
function MX(a){return a.l.bM;}
function U_(a,b,c,d){var e,f,g,h,i,j;e=BI();f=a.dQ;g=0;if(c!=f)a.dQ=c;a:{switch(b){case -1073741784:h=new Ry;c=a.bz+1|0;a.bz=c;Gg(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Qs;c=a.bz+1|0;a.bz=c;Gg(h,c);break a;case -33554392:h=new Se;c=a.bz+1|0;a.bz=c;Gg(h,c);break a;default:c=a.hM+1|0;a.hM=c;if(d!==null)h=A3T(c);else{h=new F0;Gg(h,0);g=1;}c=a.hM;if(c<=(-1))break a;if(c>=10)break a;a.mt.data[c]=h;break a;}h=new AC_;Gg(h,(-1));}while(true){if(Fc(a.l)&&a.l.n==(-536870788))
{d=A0s(Cj(a,2),Cj(a,64));while(!DC(a.l)&&Fc(a.l)){i=a.l;j=i.n;if(j&&j!=(-536870788)&&j!=(-536870871))break;CH(d,Bl(i));i=a.l;if(i.bj!=(-536870788))continue;Bl(i);}i=Lh(a,d);i.S(h);}else if(a.l.bj==(-536870788)){i=HX(h);Bl(a.l);}else{i=XA(a,h);d=a.l;if(d.bj==(-536870788))Bl(d);}if(i!==null)BC(e,i);if(DC(a.l))break;if(a.l.bj==(-536870871))break;}if(a.l.mK==(-536870788))BC(e,HX(h));if(a.dQ!=f&&!g){a.dQ=f;d=a.l;d.gX=f;d.n=d.bj;d.fd=d.fo;j=d.dk;d.x=j+1|0;d.jj=j;FK(d);}switch(b){case -1073741784:break;case -536870872:d
=new VO;F1(d,e,h);return d;case -268435416:d=new AB1;F1(d,e,h);return d;case -134217688:d=new YW;F1(d,e,h);return d;case -67108824:d=new Sy;F1(d,e,h);return d;case -33554392:d=new D7;F1(d,e,h);return d;default:switch(e.m){case 0:break;case 1:return A3K(Bx(e,0),h);default:return A2l(e,h);}return HX(h);}d=new Kf;F1(d,e,h);return d;}
function AJE(a){var b,c,d,e,f,g,h;b=BN(4);c=(-1);d=(-1);if(!DC(a.l)&&Fc(a.l)){e=b.data;c=Bl(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B4(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bj;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bl(f);f=a.l;g=f.bj;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bl(f);return A0e(e,3);}return A0e(e,2);}if(!Cj(a,2))return AEi(b[0]);if(Cj(a,64))return AYY(b[0]);return AUY(b[0]);}e=b.data;c=1;while(c<4&&!DC(a.l)&&Fc(a.l)){h=c+1|0;e[c]=Bl(a.l);c=h;}if(c==1){h=e[0];if(!(A7Q.CM(h)==A7R?0:1))return U2(a,e[0]);}if
(!Cj(a,2))return A4f(b,c);if(Cj(a,64)){f=new UX;Pq(f,b,c);return f;}f=new AAx;Pq(f,b,c);return f;}
function XA(a,b){var c,d,e,f,g,h,i;if(Fc(a.l)&&!KL(a.l)&&Ne(a.l.n)){if(Cj(a,128)){c=AJE(a);if(!DC(a.l)){d=a.l;e=d.bj;if(!(e==(-536870871)&&!(b instanceof F0))&&e!=(-536870788)&&!Fc(d))c=L_(a,b,c);}}else if(!WZ(a.l)&&!ABr(a.l)){f=new PA;M(f);while(!DC(a.l)&&Fc(a.l)&&!WZ(a.l)&&!ABr(a.l)){if(!(!KL(a.l)&&!a.l.n)&&!(!KL(a.l)&&Ne(a.l.n))){g=a.l.n;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bl(a.l);if(!L$(e))BM(f,e&65535);else JR(f,HL(e));}if(!Cj(a,2)){c=new Y$;DX(c);c.cB
=L(f);e=f.K;c.bG=e;c.oF=AX4(e);c.m_=AX4(c.bG);h=0;while(h<(c.bG-1|0)){Ri(c.oF,P(c.cB,h),(c.bG-h|0)-1|0);Ri(c.m_,P(c.cB,(c.bG-h|0)-1|0),(c.bG-h|0)-1|0);h=h+1|0;}}else if(Cj(a,64))c=A4e(f);else{c=new OW;DX(c);c.jl=L(f);c.bG=f.K;}}else c=L_(a,b,ACT(a,b));}else{d=a.l;if(d.bj!=(-536870871))c=L_(a,b,ACT(a,b));else{if(b instanceof F0)N(Cl(C(21),d.bM,Py(d)));c=HX(b);}}a:{if(!DC(a.l)){e=a.l.bj;if(!(e==(-536870871)&&!(b instanceof F0))&&e!=(-536870788)){f=XA(a,b);if(c instanceof C$&&!(c instanceof FL)&&!(c instanceof CX)
&&!(c instanceof E2)){i=c;if(!f.bZ(i.M)){c=new Ur;E$(c,i.M,i.e,i.jx);c.M.S(c);}}if((f.iL()&65535)!=43)c.S(f);else c.S(f.M);break a;}}if(c===null)return null;c.S(b);}if((c.iL()&65535)!=43)return c;return c.M;}
function L_(a,b,c){var d,e,f,g,h;d=a.l;e=d.bj;if(c!==null&&!(c instanceof Cb)){switch(e){case -2147483606:Bl(d);d=new VC;Dr(d,c,b,e);Oi();c.S(A7S);return d;case -2147483605:Bl(d);d=new X0;Dr(d,c,b,(-2147483606));Oi();c.S(A7S);return d;case -2147483585:Bl(d);d=new Qe;Dr(d,c,b,(-536870849));Oi();c.S(A7S);return d;case -2147483525:f=new OT;d=Gd(d);g=a.fA+1|0;a.fA=g;Mt(f,d,c,b,(-536870849),g);Oi();c.S(A7S);return f;case -1073741782:case -1073741781:Bl(d);d=new Rt;Dr(d,c,b,e);c.S(d);return d;case -1073741761:Bl(d);d
=new Yz;Dr(d,c,b,(-536870849));c.S(b);return d;case -1073741701:h=new Tc;d=Gd(d);e=a.fA+1|0;a.fA=e;Mt(h,d,c,b,(-536870849),e);c.S(h);return h;case -536870870:case -536870869:Bl(d);if(c.iL()!=(-2147483602)){d=new CX;Dr(d,c,b,e);}else if(Cj(a,32)){d=new Ru;Dr(d,c,b,e);}else{d=new W7;f=XK(a.dQ);Dr(d,c,b,e);d.mJ=f;}c.S(d);return d;case -536870849:Bl(d);d=new Gu;Dr(d,c,b,(-536870849));c.S(b);return d;case -536870789:h=new Ge;d=Gd(d);e=a.fA+1|0;a.fA=e;Mt(h,d,c,b,(-536870849),e);c.S(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bl(d);d=new ADq;E$(d,f,b,e);f.e=d;return d;case -2147483585:Bl(d);c=new Un;E$(c,f,b,(-2147483585));return c;case -2147483525:c=new Xz;RN(c,Gd(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bl(d);d=new Yy;E$(d,f,b,e);f.e=d;return d;case -1073741761:Bl(d);c=new AAJ;E$(c,f,b,(-1073741761));return c;case -1073741701:c=new Rh;RN(c,Gd(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bl(d);d=A2B(f,b,e);f.e=d;return d;case -536870849:Bl(d);c
=new E2;E$(c,f,b,(-536870849));return c;case -536870789:return A3h(Gd(d),f,b,(-536870789));default:}return c;}
function ACT(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F0;while(true){a:{e=a.l;f=e.bj;if((f&(-2147418113))==(-2147483608)){Bl(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dQ=g;else{if(f!=(-1073741784))g=a.dQ;c=U_(a,f,g,b);e=a.l;if(e.bj!=(-536870871))N(Cl(C(21),e.bM,e.dk));Bl(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bl(e);c
=AZ7(0);break a;case -2147483577:Bl(e);c=new W3;B5(c);break a;case -2147483558:Bl(e);c=new UR;h=a.bz+1|0;a.bz=h;AJO(c,h);break a;case -2147483550:Bl(e);c=AZ7(1);break a;case -2147483526:Bl(e);c=new ACm;B5(c);break a;case -536870876:Bl(e);a.bz=a.bz+1|0;if(Cj(a,8)){if(Cj(a,1)){c=A2d(a.bz);break a;}c=A1W(a.bz);break a;}if(Cj(a,1)){c=A2p(a.bz);break a;}c=A2K(a.bz);break a;case -536870866:Bl(e);if(Cj(a,32)){c=A2R();break a;}c=A2H(XK(a.dQ));break a;case -536870821:Bl(e);i=0;c=a.l;if(c.bj==(-536870818)){i=1;Bl(c);}c
=Lh(a,Hr(a,i));c.S(b);e=a.l;if(e.bj!=(-536870819))N(Cl(C(21),e.bM,e.dk));Xn(e,1);Bl(a.l);break a;case -536870818:Bl(e);a.bz=a.bz+1|0;if(!Cj(a,8)){c=new K8;B5(c);break a;}c=new Wf;e=XK(a.dQ);B5(c);c.ys=e;break a;case 0:j=e.fo;if(j!==null)c=Lh(a,j);else{if(DC(e)){c=HX(b);break a;}c=AEi(f&65535);}Bl(a.l);break a;default:break b;}Bl(e);c=new K8;B5(c);break a;}h=(f&2147483647)-48|0;if(a.hM<h)N(Cl(C(21),FR(e),Py(a.l)));Bl(e);a.bz=a.bz+1|0;c=!Cj(a,2)?A25(h,a.bz):Cj(a,64)?A2e(h,a.bz):A4d(h,a.bz);a.mt.data[h].ot=1;a.qD
=1;break a;}if(f>=0&&!G4(e)){c=U2(a,f);Bl(a.l);}else if(f==(-536870788))c=HX(b);else{if(f!=(-536870871)){b=new J6;c=!G4(a.l)?UN(f&65535):a.l.fo.cK();e=a.l;MC(b,c,e.bM,e.dk);N(b);}if(d){b=new J6;e=a.l;MC(b,C(21),e.bM,e.dk);N(b);}c=HX(b);}}}if(f!=(-16777176))break;}return c;}
function Hr(a,b){var c,d,e,f,g,h,i,j,$$je;c=A0s(Cj(a,2),Cj(a,64));EI(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DC(a.l))break a;h=a.l;b=h.bj;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CH(c,d);d=Bl(a.l);h=a.l;if(h.bj!=(-536870874)){d=38;break d;}if(h.n==(-536870821)){Bl(h);e=1;d=(-1);break d;}Bl(h);if(g){c=Hr(a,0);break d;}if(a.l.bj==(-536870819))break d;UE(c,Hr(a,0));break d;case -536870867:if(!g){b=h.n;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bl(h);h=a.l;i=h.bj;if(G4(h))break c;if
(i<0){j=a.l.n;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Ne(i))break e;i=i&65535;break e;}catch($$e){$$je=ER($$e);if($$je instanceof Es){break b;}else{throw $$e;}}}try{Ca(c,d,i);}catch($$e){$$je=ER($$e);if($$je instanceof Es){break b;}else{throw $$e;}}Bl(a.l);d=(-1);break d;}}if(d>=0)CH(c,d);d=45;Bl(a.l);break d;case -536870821:if(d>=0){CH(c,d);d=(-1);}Bl(a.l);j=0;h=a.l;if(h.bj==(-536870818)){Bl(h);j=1;}if(!e)AHc(c,Hr(a,j));else UE(c,Hr(a,j));e=0;Bl(a.l);break d;case -536870819:if(d>=0)CH(c,
d);d=93;Bl(a.l);break d;case -536870818:if(d>=0)CH(c,d);d=94;Bl(a.l);break d;case 0:if(d>=0)CH(c,d);h=a.l.fo;if(h===null)d=0;else{AKl(c,h);d=(-1);}Bl(a.l);break d;default:}if(d>=0)CH(c,d);d=Bl(a.l);}g=0;}N(Cl(C(21),MX(a),a.l.dk));}N(Cl(C(21),MX(a),a.l.dk));}if(!f){if(d>=0)CH(c,d);return c;}N(Cl(C(21),MX(a),a.l.dk-1|0));}
function U2(a,b){var c,d,e;c=L$(b);if(Cj(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AUY(b&65535);}if(Cj(a,64)&&b>128){if(c){d=new VJ;DX(d);d.bG=2;d.so=GW(GU(b));return d;}if(P0(b))return AP7(b&65535);if(!R7(b))return AYY(b&65535);return AWJ(b&65535);}}if(!c){if(P0(b))return AP7(b&65535);if(!R7(b))return AEi(b&65535);return AWJ(b&65535);}d=new Eb;DX(d);d.bG=2;d.gL=b;e=(HL(b)).data;d.lZ=e[0];d.k5=e[1];return d;}
function Lh(a,b){var c,d,e;if(!AIX(b)){if(!b.P){if(b.ig())return ANN(b);return AR1(b);}if(!b.ig())return AW0(b);c=new Mu;AA1(c,b);return c;}c=ADK(b);d=new OG;B5(d);d.rK=c;d.Dl=c.bh;if(!b.P){if(b.ig())return AFB(ANN(Jq(b)),d);return AFB(AR1(Jq(b)),d);}if(!b.ig())return AFB(AW0(Jq(b)),d);c=new QP;e=new Mu;AA1(e,Jq(b));AGR(c,e,d);return c;}
function Jr(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cj(a,b){return (a.dQ&b)!=b?0:1;}
function Zq(){B.call(this);this.x0=null;}
function APt(a,b){b.hd=a.x0.db;}
function Zp(){B.call(this);this.uc=null;}
function AYR(a,b){b.g8=a.uc.db.ci;}
function W5(){B.call(this);this.qY=null;}
function AVf(a,b){b.hd=a.qY;}
var HS=G(0);
function SE(){B.call(this);this.x4=null;}
function AXH(a,b,c,d){KC(a.x4,b,c.bp,d.bp);}
function SF(){B.call(this);this.v_=null;}
function AWr(a,b,c,d){KC(a.v_,b,c.bp,d.bp);}
function IO(){B.call(this);this.nW=0;}
var A7T=null;var A7U=null;var A7V=null;function AQC(a){var b=new IO();AFD(b,a);return b;}
function AFD(a,b){a.nW=b;}
function Xt(b){return !b?A7U:A7T;}
function AHA(){A7T=AQC(1);A7U=AQC(0);A7V=F($rt_booleancls());}
var KE=G(0);
var Rz=G();
var Xj=G(0);
var AE6=G();
function RV(){B.call(this);this.ue=null;}
function AYb(a,b,c,d){JK(a.ue,b,c.bp,d.bp);}
var RU=G();
function ASG(a,b){return b.ew.dy>=0?0:1;}
var RT=G();
function AQY(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fH;if(b===null)break b;if(b.dy>=0)break b;}c=1;break a;}c=0;}return c;}
function RX(){B.call(this);this.zn=null;}
function AXO(a,b,c,d){JK(a.zn,b,c.bp,d.bp);}
var Gz=G(CG);
var A7O=null;var A7N=null;var A7W=null;function R9(){R9=Bn(Gz);A1v();}
function AZv(a,b){var c=new Gz();AEU(c,a,b);return c;}
function AEU(a,b,c){R9();DI(a,b,c);}
function A1v(){var b;A7O=AZv(C(470),0);b=AZv(C(471),1);A7N=b;A7W=I(Gz,[A7O,b]);}
function ADn(){B.call(this);this.xB=null;}
function AV0(a,b){DH(a.xB,b);}
function BP(){var a=this;B.call(a);a.e=null;a.cs=0;a.w6=null;a.jx=0;}
var A4P=0;function B5(a){var b;b=A4P;A4P=b+1|0;a.w6=NJ(b);}
function Ns(a,b){var c;c=A4P;A4P=c+1|0;a.w6=NJ(c);a.e=b;}
function IA(a,b,c,d){var e;e=d.y;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function IH(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AU_(a,b){a.jx=b;}
function AUL(a){return a.jx;}
function ARE(a){return a.e;}
function ASd(a,b){a.e=b;}
function A0l(a,b){return 1;}
function A05(a){return null;}
function Kj(a){var b;a.cs=1;b=a.e;if(b!==null){if(!b.cs){b=b.gl();if(b!==null){a.e.cs=1;a.e=b;}a.e.eI();}else if(b instanceof HN&&b.eM.ot)a.e=b.e;}}
function AGY(){A4P=1;}
function V_(){var a=this;B.call(a);a.xo=null;a.xn=null;}
function ANM(a){var b,c;b=a.xo;c=a.xn;b.iZ.tV(c);}
function Vt(){var a=this;B.call(a);a.qT=null;a.qR=null;a.qQ=0;a.qS=0;}
function AYf(a,b){b=b;EM(a.qT,a.qR,b,a.qQ,a.qS);}
function Vu(){var a=this;B.call(a);a.A9=null;a.A8=null;a.A7=0;a.A6=0;}
function ANj(a,b){b=b;EM(a.A9,a.A8,b,a.A7,a.A6);}
function W4(){B.call(this);this.v2=null;}
function APG(a,b){ACF(a.v2,b);}
function Ih(){var a=this;Dc.call(a);a.jv=null;a.hz=null;a.hg=null;a.jK=null;}
var A7X=null;var A7Y=null;function ARA(a,b){var c=new Ih();AIS(c,a,b);return c;}
function A7Z(a,b,c){var d=new Ih();LB(d,a,b,c);return d;}
function AIS(a,b,c){LB(a,b,0,c);}
function LB(a,b,c,d){JW(a,Hi(b),c);a.hg=A7X;a.jK=A7Y;a.jv=b;a.hz=d;La(a);Iz(a);}
function QU(a,b){var c,d,e,f,g,h;c=a.hg.data;d=0;e=c.length-1|0;a:{while(true){if(d>e){f=null;break a;}g=(d+e|0)>>>1|0;f=c[g];h=Oa(Gs(f),b);if(h<0)d=g+1|0;else{if(h<=0)break;e=g-1|0;}}}return f;}
function La(a){var b;b=new AAc;b.tN=a;a.ek=b;a.i1=b;a.e1=A7A;}
function ACM(a){var b;b=new ACv;b.Al=a;a.ek=b;a.i1=b;}
function AGu(){A7X=Q(Ih,0);A7Y=Q(Kq,0);}
var AAq=G();
var A7G=null;function A3L(){A3L=Bn(AAq);AT_();}
function AT_(){var b,c;R9();b=BN((A7W.hl()).data.length);c=b.data;A7G=b;c[A7O.fF]=1;c[A7N.fF]=2;}
function Rr(){B.call(this);this.yS=null;}
function ANo(a,b){var c,d;c=a.yS;d=b.iG;b=new K;M(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(L(b)));}
function Sa(){B.call(this);this.AB=null;}
function AQ1(a,b){SX(HO(a.AB),b,A6S,AEd(C(472)));}
function CW(){var a=this;BP.call(a);a.ot=0;a.ee=0;}
var A7S=null;function Oi(){Oi=Bn(CW);AVQ();}
function A3T(a){var b=new CW();Gg(b,a);return b;}
function Gg(a,b){Oi();B5(a);a.ee=b;}
function ALo(a,b,c,d){var e,f;e=I1(d,a.ee);MO(d,a.ee,b);f=a.e.c(b,c,d);if(f<0)MO(d,a.ee,e);return f;}
function AXw(a){return a.ee;}
function ALD(a,b){return 0;}
function AVQ(){var b;b=new W0;B5(b);A7S=b;}
function GZ(){var a=this;B.call(a);a.bf=null;a.gX=0;a.fg=0;a.uG=0;a.mK=0;a.bj=0;a.n=0;a.yF=0;a.fo=null;a.fd=null;a.x=0;a.jL=0;a.dk=0;a.jj=0;a.bM=null;}
var A70=null;var A7Q=null;var A7R=0;function Xn(a,b){if(b>0&&b<3)a.fg=b;if(b==1){a.n=a.bj;a.fd=a.fo;a.x=a.jj;a.jj=a.dk;FK(a);}}
function G4(a){return a.fo===null?0:1;}
function KL(a){return a.fd===null?0:1;}
function Bl(a){FK(a);return a.mK;}
function Gd(a){var b;b=a.fo;FK(a);return b;}
function FK(a){var b,c,d,e,f,g,h,$$je;a.mK=a.bj;a.bj=a.n;a.fo=a.fd;a.dk=a.jj;a.jj=a.x;while(true){b=0;c=a.x>=a.bf.data.length?0:LM(a);a.n=c;a.fd=null;if(a.fg==4){if(c!=92)return;c=a.x;d=a.bf.data;c=c>=d.length?0:d[B8(a)];a.n=c;switch(c){case 69:break;default:a.n=92;a.x=a.jL;return;}a.fg=a.uG;a.n=a.x>(a.bf.data.length-2|0)?0:LM(a);}a:{c=a.n;if(c!=92){e=a.fg;if(e==1)switch(c){case 36:a.n=(-536870876);break a;case 40:if(a.bf.data[a.x]!=63){a.n=(-2147483608);break a;}B8(a);c=a.bf.data[a.x];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.n=(-134217688);B8(a);break b;default:N(Cl(C(21),FR(a),a.x));}a.n=(-67108824);B8(a);}else{switch(c){case 33:break;case 60:B8(a);c=a.bf.data[a.x];e=1;break b;case 61:a.n=(-536870872);B8(a);break b;case 62:a.n=(-33554392);B8(a);break b;default:f=AKj(a);a.n=f;if(f<256){a.gX=f;f=f<<16;a.n=f;a.n=(-1073741784)|f;break b;}f=f&255;a.n=f;a.gX=f;f=f<<16;a.n=f;a.n=(-16777176)|f;break b;}a.n=(-268435416);B8(a);}}if(!e)break;}break a;case 41:a.n=(-536870871);break a;case 42:case 43:case 63:e
=a.x;d=a.bf.data;switch(e>=d.length?42:d[e]){case 43:a.n=c|(-2147483648);B8(a);break a;case 63:a.n=c|(-1073741824);B8(a);break a;default:}a.n=c|(-536870912);break a;case 46:a.n=(-536870866);break a;case 91:a.n=(-536870821);Xn(a,2);break a;case 93:if(e!=2)break a;a.n=(-536870819);break a;case 94:a.n=(-536870818);break a;case 123:a.fd=AGx(a,c);break a;case 124:a.n=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.n=(-536870874);break a;case 45:a.n=(-536870867);break a;case 91:a.n=(-536870821);break a;case 93:a.n
=(-536870819);break a;case 94:a.n=(-536870818);break a;default:}}else{c=a.x>=(a.bf.data.length-2|0)?(-1):LM(a);c:{a.n=c;switch(c){case -1:N(Cl(C(21),FR(a),a.x));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.n
=AFv(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fg!=1)break a;a.n=(-2147483648)|c;break a;case 65:a.n=(-2147483583);break a;case 66:a.n=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cl(C(21),FR(a),a.x));case 68:case 83:case 87:case 100:case 115:case 119:a.fd=RL(Ey(a.bf,
a.jL,1),0);a.n=0;break a;case 71:a.n=(-2147483577);break a;case 80:case 112:break c;case 81:a.uG=a.fg;a.fg=4;b=1;break a;case 90:a.n=(-2147483558);break a;case 97:a.n=7;break a;case 98:a.n=(-2147483550);break a;case 99:c=a.x;d=a.bf.data;if(c>=(d.length-2|0))N(Cl(C(21),FR(a),a.x));a.n=d[B8(a)]&31;break a;case 101:a.n=27;break a;case 102:a.n=12;break a;case 110:a.n=10;break a;case 114:a.n=13;break a;case 116:a.n=9;break a;case 117:a.n=X2(a,4);break a;case 120:a.n=X2(a,2);break a;case 122:a.n=(-2147483526);break a;default:}break a;}g
=AI4(a);h=0;if(a.n==80)h=1;try{a.fd=RL(g,h);}catch($$e){$$je=ER($$e);if($$je instanceof Mx){N(Cl(C(21),FR(a),a.x));}else{throw $$e;}}a.n=0;}}if(b)continue;else break;}}
function AI4(a){var b,c,d,e,f,g;b=new K;GC(b,10);c=a.x;d=a.bf;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ey(d,B8(a),1);f=new K;M(f);H(H(f,C(473)),b);return L(f);}B8(a);c=0;a:{while(true){g=a.x;d=a.bf.data;if(g>=(d.length-2|0))break;c=d[B8(a)];if(c==125)break a;BM(b,c);}}if(c!=125)N(Cl(C(21),a.bM,a.x));}if(!b.K)N(Cl(C(21),a.bM,a.x));f=L(b);if(J(f)==1){b=new K;M(b);H(H(b,C(473)),f);return L(b);}b:{c:{if(J(f)>3){if(Nj(f,C(473)))break c;if(Nj(f,C(474)))break c;}break b;}f=Dt(f,2);}return f;}
function AGx(a,b){var c,d,e,f,g,$$je;c=new K;GC(c,4);d=(-1);e=2147483647;a:{while(true){f=a.x;g=a.bf.data;if(f>=g.length)break a;b=g[B8(a)];if(b==125)break a;if(b==44&&d<0)try{d=KA(D_(c),10);AGC(c,0,AHB(c));continue;}catch($$e){$$je=ER($$e);if($$je instanceof Ds){break;}else{throw $$e;}}BM(c,b&65535);}N(Cl(C(21),a.bM,a.x));}if(b!=125)N(Cl(C(21),a.bM,a.x));if(c.K>0)b:{try{e=KA(D_(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=ER($$e);if($$je instanceof Ds){}else{throw $$e;}}N(Cl(C(21),a.bM,a.x));}else if
(d<0)N(Cl(C(21),a.bM,a.x));if((d|e|(e-d|0))<0)N(Cl(C(21),a.bM,a.x));b=a.x;g=a.bf.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.n=(-2147483525);B8(a);break c;case 63:a.n=(-1073741701);B8(a);break c;default:}a.n=(-536870789);}c=new VY;c.fy=d;c.fx=e;return c;}
function FR(a){return a.bM;}
function DC(a){return !a.bj&&!a.n&&a.x==a.yF&&!G4(a)?1:0;}
function Ne(b){return b<0?0:1;}
function Fc(a){return !DC(a)&&!G4(a)&&Ne(a.bj)?1:0;}
function WZ(a){var b;b=a.bj;return b<=56319&&b>=55296?1:0;}
function ABr(a){var b;b=a.bj;return b<=57343&&b>=56320?1:0;}
function R7(b){return b<=56319&&b>=55296?1:0;}
function P0(b){return b<=57343&&b>=56320?1:0;}
function X2(a,b){var c,d,e,f,$$je;c=new K;GC(c,b);d=a.bf.data.length-2|0;e=0;while(true){f=BL(e,b);if(f>=0)break;if(a.x>=d)break;BM(c,a.bf.data[B8(a)]);e=e+1|0;}if(!f)a:{try{b=KA(D_(c),16);}catch($$e){$$je=ER($$e);if($$je instanceof Ds){break a;}else{throw $$e;}}return b;}N(Cl(C(21),a.bM,a.x));}
function AFv(a){var b,c,d,e,f,g;b=3;c=1;d=a.bf.data;e=d.length-2|0;f=AA$(d[a.x],8);switch(f){case -1:break;default:if(f>3)b=2;B8(a);a:{while(true){if(c>=b)break a;g=a.x;if(g>=e)break a;g=AA$(a.bf.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B8(a);c=c+1|0;}}return f;}N(Cl(C(21),a.bM,a.x));}
function AKj(a){var b,c,d,e;b=1;c=a.gX;a:while(true){d=a.x;e=a.bf.data;if(d>=e.length)N(Cl(C(21),a.bM,d));b:{c:{switch(e[d]){case 41:B8(a);return c|256;case 45:if(!b)N(Cl(C(21),a.bM,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B8(a);}B8(a);return c;}
function B8(a){var b,c,d,e,f;b=a.x;a.jL=b;if(!(a.gX&4))a.x=b+1|0;else{c=a.bf.data.length-2|0;a.x=b+1|0;a:while(true){d=a.x;if(d<c&&Re(a.bf.data[d])){a.x=a.x+1|0;continue;}d=a.x;if(d>=c)break;e=a.bf.data;if(e[d]!=35)break;a.x=d+1|0;while(true){f=a.x;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.x=f+1|0;}}}return a.jL;}
function AJV(b){return A70.Hd(b);}
function LM(a){var b,c,d,e;b=a.bf.data[B8(a)];if(CP(b)){c=a.jL+1|0;d=a.bf.data;if(c<d.length){e=d[c];if(Di(e)){B8(a);return EJ(b,e);}}}return b;}
function Py(a){return a.dk;}
function J6(){var a=this;BR.call(a);a.Cv=null;a.Ce=null;a.sg=0;}
function Cl(a,b,c){var d=new J6();MC(d,a,b,c);return d;}
function MC(a,b,c,d){X(a);a.sg=(-1);a.Cv=b;a.Ce=c;a.sg=d;}
function Pn(){var a=this;B.call(a);a.vn=null;a.vo=0.0;}
function ATT(a){var b,c;b=a.vn;c=a.vo;b.iZ.nc(c);}
function ADg(){var a=this;B.call(a);a.nQ=null;a.rn=0;a.n$=null;}
function AVC(a,b){var c,d;c=Bt();b=KI(b.oE);d=new K;M(d);H(H(d,C(475)),b);Bk(c,L(d));}
function AMm(a,b){var c,d,e;ACM(b);c=Bt();d=AEC(b.jv);e=new K;M(e);H(H(e,C(476)),d);Bk(c,L(e));c=AAw(a,b.jv);if(c!==null&&(c.hk!=60086?0:1))c.ek.f();if(Jb(b)>0)EF(a.nQ);}
function AMR(a,b){var c;if(Jb(b)>0)EF(a.nQ);La(b);c=AAw(a,b.jv);if(c!==null&&I2(c))c.ek.f();}
function AAw(a,b){var c,d,e,f;c=!a.rn?a.n$.r9:a.n$.v6;if(c===null)return null;d=b.hm.data;e=d.length;f=0;while(true){if(f>=e)return QU(c,Hi(b));c=QU(c,d[f]);if(c===null)break;f=f+1|0;}return null;}
var Ry=G(CW);
function ATY(a,b,c,d){var e;e=a.ee;BX(d,e,b-DD(d,e)|0);return a.e.c(b,c,d);}
function AZm(a,b){return 0;}
var AC_=G(CW);
function AU7(a,b,c,d){return b;}
var Qs=G(CW);
function ALL(a,b,c,d){if(DD(d,a.ee)!=b)b=(-1);return b;}
function Se(){CW.call(this);this.wj=0;}
function AT1(a,b,c,d){var e;e=a.ee;BX(d,e,b-DD(d,e)|0);a.wj=b;return b;}
function AYv(a,b){return 0;}
var F0=G(CW);
function ASq(a,b,c,d){if(d.lK!=1&&b!=d.y)return (-1);d.kd=1;MO(d,0,b);return b;}
function Cb(){BP.call(this);this.bG=0;}
function DX(a){B5(a);a.bG=1;}
function A1t(a,b,c,d){var e;if((b+a.b8()|0)>d.y){d.dD=1;return (-1);}e=a.by(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function AZZ(a){return a.bG;}
function AOj(a,b){return 1;}
var AGh=G(Cb);
function HX(a){var b=new AGh();AXC(b,a);return b;}
function AXC(a,b){Ns(a,b);a.bG=1;a.jx=1;a.bG=0;}
function AZE(a,b,c){return 0;}
function AVU(a,b,c,d){var e,f,g;e=d.y;f=d.c8;while(true){g=BL(b,e);if(g>0)return (-1);if(g<0&&Di(P(c,b))&&b>f&&CP(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AU3(a,b,c,d,e){var f,g;f=e.y;g=e.c8;while(true){if(c<b)return (-1);if(c<f&&Di(P(d,c))&&c>g&&CP(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AT0(a,b){return 0;}
function B7(){var a=this;BP.call(a);a.bI=null;a.eM=null;a.bc=0;}
function A2l(a,b){var c=new B7();F1(c,a,b);return c;}
function F1(a,b,c){B5(a);a.bI=b;a.eM=c;a.bc=c.ee;}
function ANB(a,b,c,d){var e,f,g,h;if(a.bI===null)return (-1);e=Go(d,a.bc);DW(d,a.bc,b);f=a.bI.m;g=0;while(true){if(g>=f){DW(d,a.bc,e);return (-1);}h=(Bx(a.bI,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AQr(a,b){a.eM.e=b;}
function AXh(a,b){var c;a:{c=a.bI;if(c!==null){c=B6(c);while(true){if(!B$(c))break a;if(!(B_(c)).bZ(b))continue;else return 1;}}}return 0;}
function AQT(a,b){return I1(b,a.bc)>=0&&Go(b,a.bc)==I1(b,a.bc)?0:1;}
function AL5(a){var b,c,d,e;a.cs=1;b=a.eM;if(b!==null&&!b.cs)Kj(b);a:{b=a.bI;if(b!==null){c=b.m;d=0;while(true){if(d>=c)break a;b=Bx(a.bI,d);e=b.gl();if(e===null)e=b;else{b.cs=1;EH(a.bI,d);Y9(a.bI,d,e);}if(!e.cs)e.eI();d=d+1|0;}}}if(a.e!==null)Kj(a);}
var Kf=G(B7);
function AQf(a,b,c,d){var e,f,g,h;e=DD(d,a.bc);BX(d,a.bc,b);f=a.bI.m;g=0;while(true){if(g>=f){BX(d,a.bc,e);return (-1);}h=(Bx(a.bI,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AY3(a,b){return !DD(b,a.bc)?0:1;}
var D7=G(Kf);
function AVq(a,b,c,d){var e,f,g;e=DD(d,a.bc);BX(d,a.bc,b);f=a.bI.m;g=0;while(g<f){if((Bx(a.bI,g)).c(b,c,d)>=0)return a.e.c(a.eM.wj,c,d);g=g+1|0;}BX(d,a.bc,e);return (-1);}
function AYW(a,b){a.e=b;}
var VO=G(D7);
function AQp(a,b,c,d){var e,f;e=a.bI.m;f=0;while(f<e){if((Bx(a.bI,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ASi(a,b){return 0;}
var AB1=G(D7);
function ALz(a,b,c,d){var e,f;e=a.bI.m;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bx(a.bI,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AZ1(a,b){return 0;}
var YW=G(D7);
function AL3(a,b,c,d){var e,f,g,h;e=a.bI.m;f=d.kg?0:d.c8;a:{g=a.e.c(b,c,d);if(g>=0){BX(d,a.bc,b);h=0;while(true){if(h>=e)break a;if((Bx(a.bI,h)).cw(f,b,c,d)>=0){BX(d,a.bc,(-1));return g;}h=h+1|0;}}}return (-1);}
function A1G(a,b){return 0;}
var Sy=G(D7);
function ATE(a,b,c,d){var e,f;e=a.bI.m;BX(d,a.bc,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bx(a.bI,f)).cw(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AZb(a,b){return 0;}
function HN(){B7.call(this);this.dd=null;}
function A3K(a,b){var c=new HN();AEg(c,a,b);return c;}
function AEg(a,b,c){B5(a);a.dd=b;a.eM=c;a.bc=c.ee;}
function AKS(a,b,c,d){var e,f;e=Go(d,a.bc);DW(d,a.bc,b);f=a.dd.c(b,c,d);if(f>=0)return f;DW(d,a.bc,e);return (-1);}
function APb(a,b,c,d){var e;e=a.dd.cm(b,c,d);if(e>=0)DW(d,a.bc,e);return e;}
function AZo(a,b,c,d,e){var f;f=a.dd.cw(b,c,d,e);if(f>=0)DW(e,a.bc,f);return f;}
function AXf(a,b){return a.dd.bZ(b);}
function AYs(a){var b;b=new OP;AEg(b,a.dd,a.eM);a.e=b;return b;}
function ASN(a){var b;a.cs=1;b=a.eM;if(b!==null&&!b.cs)Kj(b);b=a.dd;if(b!==null&&!b.cs){b=b.gl();if(b!==null){a.dd.cs=1;a.dd=b;}a.dd.eI();}}
function Kq(){Dc.call(this);this.oE=null;}
var G1=G();
function Y(){var a=this;G1.call(a);a.bh=0;a.cr=0;a.N=null;a.lS=null;a.mj=null;a.P=0;}
var A71=null;function PS(){PS=Bn(Y);AMn();}
function Bz(a){var b;PS();b=new ACD;b.D=BN(64);a.N=b;}
function AUw(a){return null;}
function AUc(a){return a.N;}
function AIX(a){var b,c,d,e,f;if(!a.cr)b=Ie(a.N,0)>=2048?0:1;else{a:{c=a.N;b=0;d=c.bt;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=IX(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+IX(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AWm(a){return a.P;}
function AZV(a){return a;}
function ADK(a){var b,c;if(a.mj===null){b=a.fG();c=new Uq;c.Em=a;c.ww=b;Bz(c);a.mj=c;EI(c,a.cr);}return a.mj;}
function Jq(a){var b,c;if(a.lS===null){b=a.fG();c=new Uo;c.Cy=a;c.zW=b;c.uO=a;Bz(c);a.lS=c;EI(c,a.bh);a.lS.P=a.P;}return a.lS;}
function A00(a){return 0;}
function EI(a,b){var c;c=a.bh;if(c^b){a.bh=c?0:1;a.cr=a.cr?0:1;}if(!a.P)a.P=1;return a;}
function ANb(a){return a.bh;}
function Nc(b,c){PS();return b.o(c);}
function JP(b,c){var d,e;PS();if(b.dL()!==null&&c.dL()!==null){b=b.dL();c=c.dL();d=Be(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function RL(b,c){var d,e,f;PS();d=0;while(true){ARh();e=A72.data;if(d>=e.length){f=new Mx;Bm(f,C(21));f.C7=C(21);f.Er=b;N(f);}e=e[d].data;if(Bi(b,e[0]))break;d=d+1|0;}return AJz(e[1],c);}
function AMn(){var b;b=new Hc;ARh();A71=b;}
function AD_(){var a=this;Y.call(a);a.pc=0;a.qt=0;a.hN=0;a.mY=0;a.ep=0;a.gi=0;a.I=null;a.bC=null;}
function DE(){var a=new AD_();ATe(a);return a;}
function A0s(a,b){var c=new AD_();AMd(c,a,b);return c;}
function ATe(a){Bz(a);a.I=A1I();}
function AMd(a,b,c){Bz(a);a.I=A1I();a.pc=b;a.qt=c;}
function CH(a,b){a:{if(a.pc){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ep){Ol(a.I,Jr(b&65535));break a;}LE(a.I,Jr(b&65535));break a;}if(a.qt&&b>128){a.hN=1;b=GW(GU(b));}}}if(!(!R7(b)&&!P0(b))){if(a.mY)Ol(a.N,b-55296|0);else LE(a.N,b-55296|0);}if(a.ep)Ol(a.I,b);else LE(a.I,b);if(!a.P&&L$(b))a.P=1;return a;}
function AKl(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(a.mY){if(!b.cr)F_(a.N,b.fG());else Do(a.N,b.fG());}else if(!b.cr)Gr(a.N,b.fG());else{Gk(a.N,b.fG());Do(a.N,b.fG());a.cr=a.cr?0:1;a.mY=1;}if(!a.gi&&b.dL()!==null){if(a.ep){if(!b.bh)F_(a.I,b.dL());else Do(a.I,b.dL());}else if(!b.bh)Gr(a.I,b.dL());else{Gk(a.I,b.dL());Do(a.I,b.dL());a.bh=a.bh?0:1;a.ep=1;}}else{c=a.bh;d=a.bC;if(d!==null){if(!c){e=new Xe;e.Dw=a;e.AH=c;e.uy=d;e.uq=b;Bz(e);a.bC=e;}else{e=new Xg;e.ED=a;e.sE=c;e.ya=d;e.xN=b;Bz(e);a.bC=e;}}else{if(c&&!a.ep
&&Oe(a.I)){d=new Xb;d.DZ=a;d.ye=b;Bz(d);a.bC=d;}else if(!c){d=new W_;d.oM=a;d.ob=c;d.w1=b;Bz(d);a.bC=d;}else{d=new Xa;d.nn=a;d.mb=c;d.ut=b;Bz(d);a.bC=d;}a.gi=1;}}return a;}
function Ca(a,b,c){var d,e,f,g,h;if(b>c){d=new BR;X(d);N(d);}a:{b:{if(!a.pc){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CH(a,b);b=b+1|0;}}if(!a.ep)IL(a.I,b,c+1|0);else{d=a.I;c=c+1|0;if(b>c){d=new BG;X(d);N(d);}e=d.bt;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(JM(d,b)|IE(d,f));}else{h=d.D.data;h[g]=h[g]&JM(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&IE(d,f);}}He(d);}}}}return a;}
function AHc(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(b.hN)a.hN=1;c=a.cr;if(!(c^b.cr)){if(!c)Gr(a.N,b.N);else Do(a.N,b.N);}else if(c)F_(a.N,b.N);else{Gk(a.N,b.N);Do(a.N,b.N);a.cr=1;}if(!a.gi&&C1(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Gr(a.I,C1(b));else Do(a.I,C1(b));}else if(c)F_(a.I,C1(b));else{Gk(a.I,C1(b));Do(a.I,C1(b));a.bh=1;}}else{c=a.bh;d=a.bC;if(d!==null){if(!c){e=new PJ;e.Bp=a;e.tU=c;e.z6=d;e.uV=b;Bz(e);a.bC=e;}else{e=new P6;e.BE=a;e.As=c;e.p8=d;e.qv=b;Bz(e);a.bC=e;}}else{if(!a.ep&&Oe(a.I)){if(!c){d=new Xc;d.EE
=a;d.rS=b;Bz(d);a.bC=d;}else{d=new Xd;d.DA=a;d.Ai=b;Bz(d);a.bC=d;}}else if(!c){d=new Xh;d.tY=a;d.sN=b;d.yc=c;Bz(d);a.bC=d;}else{d=new Xi;d.s6=a;d.tb=b;d.yZ=c;Bz(d);a.bC=d;}a.gi=1;}}}
function UE(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(b.hN)a.hN=1;c=a.cr;if(!(c^b.cr)){if(!c)Do(a.N,b.N);else Gr(a.N,b.N);}else if(!c)F_(a.N,b.N);else{Gk(a.N,b.N);Do(a.N,b.N);a.cr=0;}if(!a.gi&&C1(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Do(a.I,C1(b));else Gr(a.I,C1(b));}else if(!c)F_(a.I,C1(b));else{Gk(a.I,C1(b));Do(a.I,C1(b));a.bh=0;}}else{c=a.bh;d=a.bC;if(d!==null){if(!c){e=new PL;e.Dv=a;e.zu=c;e.wu=d;e.sC=b;Bz(e);a.bC=e;}else{e=new PM;e.DD=a;e.y_=c;e.vY=d;e.zq=b;Bz(e);a.bC=e;}}else{if(!a.ep&&Oe(a.I)){if(!c){d=new PH;d.BH
=a;d.xm=b;Bz(d);a.bC=d;}else{d=new PI;d.EB=a;d.rH=b;Bz(d);a.bC=d;}}else if(!c){d=new PN;d.Bd=a;d.AD=b;d.s8=c;Bz(d);a.bC=d;}else{d=new PG;d.s7=a;d.ze=b;d.yo=c;Bz(d);a.bC=d;}a.gi=1;}}}
function C9(a,b){var c;c=a.bC;if(c!==null)return a.bh^c.o(b);return a.bh^DT(a.I,b);}
function C1(a){if(!a.gi)return a.I;return null;}
function AVP(a){return a.N;}
function AR5(a){var b,c;if(a.bC!==null)return a;b=C1(a);c=new PK;c.Dm=a;c.k9=b;Bz(c);return EI(c,a.bh);}
function AXR(a){var b,c,d;b=new K;M(b);c=Ie(a.I,0);while(c>=0){JR(b,HL(c));BM(b,124);c=Ie(a.I,c+1|0);}d=b.K;if(d>0)Uf(b,d-1|0);return L(b);}
function ANe(a){return a.hN;}
function Mx(){var a=this;Bu.call(a);a.C7=null;a.Er=null;}
function Ei(){BP.call(this);this.M=null;}
function Dr(a,b,c,d){Ns(a,c);a.M=b;a.jx=d;}
function A1y(a){return a.M;}
function ARr(a,b){return !a.M.bZ(b)&&!a.e.bZ(b)?0:1;}
function A0t(a,b){return 1;}
function APr(a){var b;a.cs=1;b=a.e;if(b!==null&&!b.cs){b=b.gl();if(b!==null){a.e.cs=1;a.e=b;}a.e.eI();}b=a.M;if(b!==null){if(!b.cs){b=b.gl();if(b!==null){a.M.cs=1;a.M=b;}a.M.eI();}else if(b instanceof HN&&b.eM.ot)a.M=b.e;}}
function C$(){Ei.call(this);this.bd=null;}
function A2B(a,b,c){var d=new C$();E$(d,a,b,c);return d;}
function E$(a,b,c,d){Dr(a,b,c,d);a.bd=b;}
function ATF(a,b,c,d){var e,f;e=0;a:{while((b+a.bd.b8()|0)<=d.y){f=a.bd.by(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.bd.b8()|0;e=e+(-1)|0;}return f;}
function FL(){C$.call(this);this.kw=null;}
function A3h(a,b,c,d){var e=new FL();RN(e,a,b,c,d);return e;}
function RN(a,b,c,d,e){E$(a,c,d,e);a.kw=b;}
function AUl(a,b,c,d){var e,f,g,h,i;e=a.kw;f=e.fy;g=e.fx;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bd.b8()|0)>d.y)break a;i=a.bd.by(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.bd.b8()|0;h=h+(-1)|0;}return i;}if((b+a.bd.b8()|0)>d.y){d.dD=1;return (-1);}i=a.bd.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CX=G(Ei);
function ATQ(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var E2=G(C$);
function AXu(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function ATm(a,b){a.e=b;a.M.S(b);}
var Ur=G(C$);
function A1q(a,b,c,d){while((b+a.bd.b8()|0)<=d.y&&a.bd.by(b,c)>0){b=b+a.bd.b8()|0;}return a.e.c(b,c,d);}
function APP(a,b,c,d){var e,f,g;e=a.e.cm(b,c,d);if(e<0)return (-1);f=e-a.bd.b8()|0;while(f>=b&&a.bd.by(f,c)>0){g=f-a.bd.b8()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.np=null;a.mL=null;}
function AJz(a,b){if(!b&&a.np===null)a.np=a.F();else if(b&&a.mL===null)a.mL=EI(a.F(),1);if(b)return a.mL;return a.np;}
var Ds=G(BR);
function VY(){var a=this;G1.call(a);a.fy=0;a.fx=0;}
function AXX(a){var b,c,d,e,f;b=a.fy;c=a.fx;d=c!=2147483647?NJ(c):C(21);e=new K;M(e);BM(e,123);f=U(e,b);BM(f,44);BM(H(f,d),125);return L(e);}
var W0=G(BP);
function AOB(a,b,c,d){return b;}
function AYr(a,b){return 0;}
function ACD(){var a=this;B.call(a);a.D=null;a.bt=0;}
function A1I(){var a=new ACD();AUT(a);return a;}
function AUT(a){a.D=BN(0);}
function LE(a,b){var c,d;c=b/32|0;if(b>=a.bt){JS(a,c+1|0);a.bt=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function IL(a,b,c){var d,e,f,g,h;d=BL(b,c);if(d>0){e=new BG;X(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bt){JS(a,f+1|0);a.bt=c;}if(d==f){g=a.D.data;g[d]=g[d]|IE(a,b)&JM(a,c);}else{g=a.D.data;g[d]=g[d]|IE(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|JM(a,c);}}}
function IE(a,b){return (-1)<<(b%32|0);}
function JM(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Ol(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bt-1|0))He(a);}}
function DT(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Ie(a,b){var c,d,e,f;c=a.bt;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return IX(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+IX(e[f])|0;f=f+1|0;}return (-1);}
function JS(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.D=Ja(a.D,c);}
function He(a){var b,c,d;b=(a.bt+31|0)/32|0;a.bt=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=WE(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bt=a.bt-32|0;}a.bt=a.bt-d|0;}}
function Do(a,b){var c,d,e,f;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bt=Be(a.bt,b.bt);He(a);}
function F_(a,b){var c,d,e;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}He(a);}
function Gr(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;JS(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function Gk(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;JS(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}He(a);}
function Oe(a){return a.bt?0:1;}
function OG(){var a=this;B7.call(a);a.rK=null;a.Dl=0;}
function QP(){var a=this;B7.call(a);a.nF=null;a.pn=null;}
function AFB(a,b){var c=new QP();AGR(c,a,b);return c;}
function AGR(a,b,c){B5(a);a.nF=b;a.pn=c;}
function ALm(a,b,c,d){var e,f,g,h,i;e=a.nF.c(b,c,d);if(e<0)a:{f=a.pn;g=d.c8;e=d.y;h=b+1|0;e=BL(h,e);if(e>0){d.dD=1;e=(-1);}else{i=P(c,b);if(!f.rK.o(i))e=(-1);else{if(CP(i)){if(e<0&&Di(P(c,h))){e=(-1);break a;}}else if(Di(i)&&b>g&&CP(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AYk(a,b){a.e=b;a.pn.e=b;a.nF.S(b);}
function ALP(a,b){return 1;}
function ALC(a,b){return 1;}
function D1(){var a=this;B7.call(a);a.dZ=null;a.B9=0;}
function AW0(a){var b=new D1();AA1(b,a);return b;}
function AA1(a,b){B5(a);a.dZ=b.lD();a.B9=b.bh;}
function AVJ(a,b,c,d){var e,f,g,h;e=d.y;if(b<e){f=b+1|0;g=P(c,b);if(a.o(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Jj(g,f)&&a.o(EJ(g,f)))return a.e.c(b,c,d);}}return (-1);}
function ANr(a,b){return a.dZ.o(b);}
function ALi(a,b){if(b instanceof Eb)return Nc(a.dZ,b.gL);if(b instanceof EG)return Nc(a.dZ,b.dz);if(b instanceof D1)return JP(a.dZ,b.dZ);if(!(b instanceof EA))return 1;return JP(a.dZ,b.gd);}
function AOv(a){return a.dZ;}
function AZP(a,b){a.e=b;}
function AM6(a,b){return 1;}
var Mu=G(D1);
function AOk(a,b){return a.dZ.o(GW(GU(b)));}
function AD5(){var a=this;Cb.call(a);a.xT=null;a.BS=0;}
function ANN(a){var b=new AD5();APZ(b,a);return b;}
function APZ(a,b){DX(a);a.xT=b.lD();a.BS=b.bh;}
function AW4(a,b,c){return !a.xT.o(FD(Fg(P(c,b))))?(-1):1;}
function EA(){var a=this;Cb.call(a);a.gd=null;a.Cj=0;}
function AR1(a){var b=new EA();AQH(b,a);return b;}
function AQH(a,b){DX(a);a.gd=b.lD();a.Cj=b.bh;}
function VF(a,b,c){return !a.gd.o(P(c,b))?(-1):1;}
function AQt(a,b){if(b instanceof EG)return Nc(a.gd,b.dz);if(b instanceof EA)return JP(a.gd,b.gd);if(!(b instanceof D1)){if(!(b instanceof Eb))return 1;return 0;}return JP(a.gd,b.dZ);}
function Xm(){var a=this;B7.call(a);a.iW=null;a.pA=null;a.ku=0;}
function A0e(a,b){var c=new Xm();ATR(c,a,b);return c;}
function ATR(a,b,c){B5(a);a.iW=b;a.ku=c;}
function APh(a,b){a.e=b;}
function QY(a){if(a.pA===null)a.pA=Hk(a.iW);return a.pA;}
function AKD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.y;f=BN(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DU([k,l]):DU([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ku;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.iW.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ku==3){k=f[0];m=a.iW.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ku==2){b=f[0];m=a.iW.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AUD(a,b){return b instanceof Xm&&!Bi(QY(b),QY(a))?0:1;}
function AR$(a,b){return 1;}
function EG(){Cb.call(this);this.dz=0;}
function AEi(a){var b=new EG();AQL(b,a);return b;}
function AQL(a,b){DX(a);a.dz=b;}
function AWU(a){return 1;}
function ANK(a,b,c){return a.dz!=P(c,b)?(-1):1;}
function AMS(a,b,c,d){var e,f,g;if(!(c instanceof BK))return IA(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=JO(c,a.dz,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AOx(a,b,c,d,e){var f;if(!(d instanceof BK))return IH(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hp(d,a.dz,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AR2(a,b){if(b instanceof EG)return b.dz!=a.dz?0:1;if(!(b instanceof EA)){if(b instanceof D1)return b.o(a.dz);if(!(b instanceof Eb))return 1;return 0;}return VF(b,0,UN(a.dz))<=0?0:1;}
function AGF(){Cb.call(this);this.vO=0;}
function AYY(a){var b=new AGF();AXN(b,a);return b;}
function AXN(a,b){DX(a);a.vO=FD(Fg(b));}
function ATs(a,b,c){return a.vO!=FD(Fg(P(c,b)))?(-1):1;}
function ADt(){var a=this;Cb.call(a);a.u1=0;a.wr=0;}
function AUY(a){var b=new ADt();ARe(b,a);return b;}
function ARe(a,b){DX(a);a.u1=b;a.wr=Jr(b);}
function AKL(a,b,c){return a.u1!=P(c,b)&&a.wr!=P(c,b)?(-1):1;}
function FQ(){var a=this;B7.call(a);a.js=0;a.mE=null;a.l$=null;a.l4=0;}
function A4f(a,b){var c=new FQ();Pq(c,a,b);return c;}
function Pq(a,b,c){B5(a);a.js=1;a.l$=b;a.l4=c;}
function A08(a,b){a.e=b;}
function AQe(a,b,c,d){var e,f,g,h,i,j,k,l;e=BN(4);f=d.y;if(b>=f)return (-1);g=K$(a,b,c,f);h=b+a.js|0;i=AJV(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dd(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=K$(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AJV(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.js|0;if(h>=f){b=k;break a;}g=K$(a,h,c,f);b=k;}}}if(b!=a.l4)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.l$.data[g])break;g=g+1|0;}return (-1);}
function UC(a){var b,c;if(a.mE===null){b=new K;M(b);c=0;while(c<a.l4){JR(b,HL(a.l$.data[c]));c=c+1|0;}a.mE=L(b);}return a.mE;}
function K$(a,b,c,d){var e,f,g;a.js=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Jj(e,f)){g=B4(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CP(g[0])&&Di(g[1])?EJ(g[0],g[1]):g[0];a.js=2;}}return e;}
function AOC(a,b){return b instanceof FQ&&!Bi(UC(b),UC(a))?0:1;}
function AYX(a,b){return 1;}
var UX=G(FQ);
var AAx=G(FQ);
var VC=G(CX);
function AVa(a,b,c,d){var e;while(true){e=a.M.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var X0=G(CX);
function AXJ(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.M.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Gu=G(CX);
function AZN(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function A0E(a,b){a.e=b;a.M.S(b);}
var Qe=G(Gu);
function AOt(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AXZ(a,b){a.e=b;}
function Ge(){var a=this;CX.call(a);a.gT=null;a.dF=0;}
function A73(a,b,c,d,e){var f=new Ge();Mt(f,a,b,c,d,e);return f;}
function Mt(a,b,c,d,e,f){Dr(a,c,d,e);a.gT=b;a.dF=f;}
function A1D(a,b,c,d){var e,f;e=VW(d,a.dF);if(!a.M.H(d))return a.e.c(b,c,d);if(e>=a.gT.fx)return a.e.c(b,c,d);f=a.dF;e=e+1|0;EP(d,f,e);f=a.M.c(b,c,d);if(f>=0){EP(d,a.dF,0);return f;}f=a.dF;e=e+(-1)|0;EP(d,f,e);if(e>=a.gT.fy)return a.e.c(b,c,d);EP(d,a.dF,0);return (-1);}
var OT=G(Ge);
function AN1(a,b,c,d){var e,f,g;e=0;f=a.gT.fx;a:{while(true){g=a.M.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gT.fy)return (-1);return a.e.c(b,c,d);}
var Rt=G(CX);
function AST(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var Yz=G(Gu);
function ALQ(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.M.c(b,c,d);return e;}
var Tc=G(Ge);
function AT6(a,b,c,d){var e,f,g;e=VW(d,a.dF);if(!a.M.H(d))return a.e.c(b,c,d);f=a.gT;if(e>=f.fx){EP(d,a.dF,0);return a.e.c(b,c,d);}if(e<f.fy){EP(d,a.dF,e+1|0);g=a.M.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){EP(d,a.dF,0);return g;}EP(d,a.dF,e+1|0);g=a.M.c(b,c,d);}return g;}
var Ru=G(Ei);
function A1u(a,b,c,d){var e;e=d.y;if(e>b)return a.e.cw(b,e,c,d);return a.e.c(b,c,d);}
function ARO(a,b,c,d){var e;e=d.y;if(a.e.cw(b,e,c,d)>=0)return b;return (-1);}
function W7(){Ei.call(this);this.mJ=null;}
function AQu(a,b,c,d){var e,f;e=d.y;f=ABd(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cw(b,e,c,d);return a.e.c(b,c,d);}
function AKF(a,b,c,d){var e,f,g,h;e=d.y;f=a.e.cm(b,c,d);if(f<0)return (-1);g=ABd(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.e.cw(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.mJ.iF(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function ABd(a,b,c,d){while(true){if(b>=c)return (-1);if(a.mJ.iF(P(d,b)))break;b=b+1|0;}return b;}
var Fu=G();
var A74=null;var A75=null;function XK(b){var c;if(!(b&1)){c=A75;if(c!==null)return c;c=new ABx;A75=c;return c;}c=A74;if(c!==null)return c;c=new ABw;A74=c;return c;}
var ADq=G(C$);
function ALa(a,b,c,d){var e;a:{while(true){if((b+a.bd.b8()|0)>d.y)break a;e=a.bd.by(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var Un=G(E2);
function APF(a,b,c,d){var e;if((b+a.bd.b8()|0)<=d.y){e=a.bd.by(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var Xz=G(FL);
function AZr(a,b,c,d){var e,f,g,h,i;e=a.kw;f=e.fy;g=e.fx;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bd.b8()|0)>d.y)break a;i=a.bd.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.bd.b8()|0)>d.y){d.dD=1;return (-1);}i=a.bd.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Yy=G(C$);
function AQq(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.bd.b8()|0)<=d.y){e=a.bd.by(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var AAJ=G(E2);
function ALg(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var Rh=G(FL);
function AZG(a,b,c,d){var e,f,g,h,i,j;e=a.kw;f=e.fy;g=e.fx;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.bd.b8()|0)<=d.y){i=a.bd.by(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bd.b8()|0)>d.y){d.dD=1;return (-1);}j=a.bd.by(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var K8=G(BP);
function AXg(a,b,c,d){if(b&&!(d.gj&&b==d.c8))return (-1);return a.e.c(b,c,d);}
function AWK(a,b){return 0;}
function AEo(){BP.call(this);this.uC=0;}
function AZ7(a){var b=new AEo();AOn(b,a);return b;}
function AOn(a,b){B5(a);a.uC=b;}
function AUu(a,b,c,d){var e,f,g;e=b<d.y?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.kg?0:d.c8;return (e!=32&&!YC(a,e,b,g,c)?0:1)^(f!=32&&!YC(a,f,b-1|0,g,c)?0:1)^a.uC?(-1):a.e.c(b,c,d);}
function AUC(a,b){return 0;}
function YC(a,b,c,d,e){var f;if(!Kz(b)&&b!=95){a:{if(CD(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Kz(f))return 0;if(CD(f)!=6)return 1;}}return 1;}return 0;}
var W3=G(BP);
function AOm(a,b,c,d){if(b!=d.iK)return (-1);return a.e.c(b,c,d);}
function ATf(a,b){return 0;}
function UR(){BP.call(this);this.gY=0;}
function A2K(a){var b=new UR();AJO(b,a);return b;}
function AJO(a,b){B5(a);a.gY=b;}
function AYK(a,b,c,d){var e,f,g;e=!d.gj?J(c):d.y;if(b>=e){BX(d,a.gY,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BX(d,a.gY,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BX(d,a.gY,0);return a.e.c(b,c,d);}
function AU4(a,b){var c;c=!DD(b,a.gY)?0:1;BX(b,a.gY,(-1));return c;}
var ACm=G(BP);
function AYi(a,b,c,d){if(b<(d.kg?J(c):d.y))return (-1);d.dD=1;d.Eg=1;return a.e.c(b,c,d);}
function ATr(a,b){return 0;}
function Wf(){BP.call(this);this.ys=null;}
function AUZ(a,b,c,d){a:{if(b!=d.y){if(!b)break a;if(d.gj&&b==d.c8)break a;if(a.ys.zc(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function ANx(a,b){return 0;}
var AGr=G(B7);
function A2R(){var a=new AGr();AX$(a);return a;}
function AX$(a){B5(a);}
function ASW(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dD=1;return (-1);}g=P(c,b);if(CP(g)){h=b+2|0;if(h<=e&&Jj(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function AUF(a,b){a.e=b;}
function AX5(a){return (-2147483602);}
function AUE(a,b){return 1;}
function AD$(){B7.call(this);this.m2=null;}
function A2H(a){var b=new AD$();AL9(b,a);return b;}
function AL9(a,b){B5(a);a.m2=b;}
function AYc(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dD=1;return (-1);}g=P(c,b);if(CP(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Jj(g,h))return a.m2.iF(EJ(g,h))?(-1):a.e.c(b,c,d);}}return a.m2.iF(g)?(-1):a.e.c(f,c,d);}
function AZi(a,b){a.e=b;}
function AKr(a){return (-2147483602);}
function AS7(a,b){return 1;}
function AJT(){BP.call(this);this.jo=0;}
function A2p(a){var b=new AJT();AV9(b,a);return b;}
function AV9(a,b){B5(a);a.jo=b;}
function AOF(a,b,c,d){var e;e=!d.gj?J(c):d.y;if(b>=e){BX(d,a.jo,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BX(d,a.jo,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AV8(a,b){var c;c=!DD(b,a.jo)?0:1;BX(b,a.jo,(-1));return c;}
function AI0(){BP.call(this);this.iy=0;}
function A2d(a){var b=new AI0();AWo(b,a);return b;}
function AWo(a,b){B5(a);a.iy=b;}
function AQa(a,b,c,d){if((!d.gj?J(c)-b|0:d.y-b|0)<=0){BX(d,a.iy,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);BX(d,a.iy,1);return a.e.c(b+1|0,c,d);}
function AV2(a,b){var c;c=!DD(b,a.iy)?0:1;BX(b,a.iy,(-1));return c;}
function AHb(){BP.call(this);this.gw=0;}
function A1W(a){var b=new AHb();A1F(b,a);return b;}
function A1F(a,b){B5(a);a.gw=b;}
function AWF(a,b,c,d){var e,f,g;e=!d.gj?J(c)-b|0:d.y-b|0;if(!e){BX(d,a.gw,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BX(d,a.gw,0);return a.e.c(b,c,d);case 13:if(g!=10){BX(d,a.gw,0);return a.e.c(b,c,d);}BX(d,a.gw,0);return a.e.c(b,c,d);default:}return (-1);}
function AMb(a,b){var c;c=!DD(b,a.gw)?0:1;BX(b,a.gw,(-1));return c;}
function H$(){var a=this;B7.call(a);a.qi=0;a.hj=0;}
function A4d(a,b){var c=new H$();PZ(c,a,b);return c;}
function PZ(a,b,c){B5(a);a.qi=b;a.hj=c;}
function ALc(a,b,c,d){var e,f,g,h;e=GE(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BX(d,a.hj,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Jr(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AYT(a,b){a.e=b;}
function GE(a,b){var c,d;c=a.qi;d=Go(b,c);c=I1(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.m5)?Cs(b.m5,d,c):null;}
function AQ$(a,b){var c;c=!DD(b,a.hj)?0:1;BX(b,a.hj,(-1));return c;}
var AJZ=G(H$);
function A25(a,b){var c=new AJZ();A0w(c,a,b);return c;}
function A0w(a,b,c){PZ(a,b,c);}
function AMf(a,b,c,d){var e,f;e=GE(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=!AA0(c,e,b)?(-1):J(e);if(f<0)return (-1);BX(d,a.hj,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ASg(a,b,c,d){var e,f;e=GE(a,d);f=d.c8;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=X1(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AKZ(a,b,c,d,e){var f,g;f=GE(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Qt(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AXE(a,b){return 1;}
var AIm=G(H$);
function A2e(a,b){var c=new AIm();ANw(c,a,b);return c;}
function ANw(a,b,c){PZ(a,b,c);}
function AO8(a,b,c,d){var e,f;e=GE(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BX(d,a.hj,J(e));return a.e.c(b+J(e)|0,c,d);}if(FD(Fg(P(e,f)))!=FD(Fg(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var PA=G(GJ);
function ANh(a,b,c,d,e){V1(a,b,c,d,e);return a;}
function AUx(a,b,c,d){ACL(a,b,c,d);return a;}
function AUS(a,b){MN(a,b);}
function AZY(a,b,c){ACX(a,b,c);return a;}
function Y$(){var a=this;Cb.call(a);a.cB=null;a.oF=null;a.m_=null;}
function AMs(a,b,c){return !K6(a,c,b)?(-1):a.bG;}
function AUs(a,b,c,d){var e,f,g;e=d.y;while(true){if(b>e)return (-1);f=P(a.cB,a.bG-1|0);a:{while(true){g=a.bG;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&K6(a,c,b))break;b=b+ZK(a.oF,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bG|0,c,d)>=0)break;b=b+1|0;}return b;}
function AWa(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cB,0);g=(J(d)-c|0)-a.bG|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&K6(a,d,c))break;c=c-ZK(a.m_,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bG|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ANQ(a,b){var c;if(b instanceof EG)return b.dz!=P(a.cB,0)?0:1;if(b instanceof EA)return VF(b,0,Cs(a.cB,0,1))<=0?0:1;if(!(b instanceof D1)){if(!(b instanceof Eb))return 1;return J(a.cB)>1&&b.gL==EJ(P(a.cB,0),P(a.cB,1))?1:0;}a:{b:{b=b;if(!b.o(P(a.cB,0))){if(J(a.cB)<=1)break b;if(!b.o(EJ(P(a.cB,0),P(a.cB,1))))break b;}c=1;break a;}c=0;}return c;}
function K6(a,b,c){var d;d=0;while(d<a.bG){if(P(b,d+c|0)!=P(a.cB,d))return 0;d=d+1|0;}return 1;}
function ADs(){Cb.call(this);this.ly=null;}
function A4e(a){var b=new ADs();A0a(b,a);return b;}
function A0a(a,b){var c,d,e;DX(a);c=new K;M(c);d=0;while(true){e=BL(d,b.K);if(e>=0){a.ly=L(c);a.bG=c.K;return;}if(d<0)break;if(e>=0)break;BM(c,FD(Fg(b.C.data[d])));d=d+1|0;}b=new BG;X(b);N(b);}
function APc(a,b,c){var d;d=0;while(true){if(d>=J(a.ly))return J(a.ly);if(P(a.ly,d)!=FD(Fg(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OW(){Cb.call(this);this.jl=null;}
function AZs(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.jl))return J(a.jl);e=P(a.jl,d);f=b+d|0;if(e!=P(c,f)&&Jr(P(a.jl,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Hc=G();
var A76=null;var A77=null;var A72=null;function ARh(){ARh=Bn(Hc);AMH();}
function AMH(){A76=A2N();A77=A3v();A72=I($rt_arraycls(B),[I(B,[C(477),A2U()]),I(B,[C(478),A1U()]),I(B,[C(479),A31()]),I(B,[C(480),A35()]),I(B,[C(481),A77]),I(B,[C(482),A3C()]),I(B,[C(483),A2i()]),I(B,[C(484),A27()]),I(B,[C(485),A24()]),I(B,[C(486),A12()]),I(B,[C(487),A19()]),I(B,[C(488),A2$()]),I(B,[C(489),A2A()]),I(B,[C(490),A1Q()]),I(B,[C(491),A33()]),I(B,[C(492),A18()]),I(B,[C(493),A3A()]),I(B,[C(494),A3g()]),I(B,[C(495),A3B()]),I(B,[C(496),A14()]),I(B,[C(497),A38()]),I(B,[C(498),A3b()]),I(B,[C(499),A2r()]),
I(B,[C(500),A3Z()]),I(B,[C(501),A3W()]),I(B,[C(502),A2O()]),I(B,[C(503),A13()]),I(B,[C(504),A3P()]),I(B,[C(505),A76]),I(B,[C(506),A2u()]),I(B,[C(507),A29()]),I(B,[C(508),A76]),I(B,[C(509),A1O()]),I(B,[C(510),A77]),I(B,[C(511),A2a()]),I(B,[C(512),R(0,127)]),I(B,[C(513),R(128,255)]),I(B,[C(514),R(256,383)]),I(B,[C(515),R(384,591)]),I(B,[C(516),R(592,687)]),I(B,[C(517),R(688,767)]),I(B,[C(518),R(768,879)]),I(B,[C(519),R(880,1023)]),I(B,[C(520),R(1024,1279)]),I(B,[C(521),R(1280,1327)]),I(B,[C(522),R(1328,1423)]),
I(B,[C(523),R(1424,1535)]),I(B,[C(524),R(1536,1791)]),I(B,[C(525),R(1792,1871)]),I(B,[C(526),R(1872,1919)]),I(B,[C(527),R(1920,1983)]),I(B,[C(528),R(2304,2431)]),I(B,[C(529),R(2432,2559)]),I(B,[C(530),R(2560,2687)]),I(B,[C(531),R(2688,2815)]),I(B,[C(532),R(2816,2943)]),I(B,[C(533),R(2944,3071)]),I(B,[C(534),R(3072,3199)]),I(B,[C(535),R(3200,3327)]),I(B,[C(536),R(3328,3455)]),I(B,[C(537),R(3456,3583)]),I(B,[C(538),R(3584,3711)]),I(B,[C(539),R(3712,3839)]),I(B,[C(540),R(3840,4095)]),I(B,[C(541),R(4096,4255)]),
I(B,[C(542),R(4256,4351)]),I(B,[C(543),R(4352,4607)]),I(B,[C(544),R(4608,4991)]),I(B,[C(545),R(4992,5023)]),I(B,[C(546),R(5024,5119)]),I(B,[C(547),R(5120,5759)]),I(B,[C(548),R(5760,5791)]),I(B,[C(549),R(5792,5887)]),I(B,[C(550),R(5888,5919)]),I(B,[C(551),R(5920,5951)]),I(B,[C(552),R(5952,5983)]),I(B,[C(553),R(5984,6015)]),I(B,[C(554),R(6016,6143)]),I(B,[C(555),R(6144,6319)]),I(B,[C(556),R(6400,6479)]),I(B,[C(557),R(6480,6527)]),I(B,[C(558),R(6528,6623)]),I(B,[C(559),R(6624,6655)]),I(B,[C(560),R(6656,6687)]),
I(B,[C(561),R(7424,7551)]),I(B,[C(562),R(7552,7615)]),I(B,[C(563),R(7616,7679)]),I(B,[C(564),R(7680,7935)]),I(B,[C(565),R(7936,8191)]),I(B,[C(566),R(8192,8303)]),I(B,[C(567),R(8304,8351)]),I(B,[C(568),R(8352,8399)]),I(B,[C(569),R(8400,8447)]),I(B,[C(570),R(8448,8527)]),I(B,[C(571),R(8528,8591)]),I(B,[C(572),R(8592,8703)]),I(B,[C(573),R(8704,8959)]),I(B,[C(574),R(8960,9215)]),I(B,[C(575),R(9216,9279)]),I(B,[C(576),R(9280,9311)]),I(B,[C(577),R(9312,9471)]),I(B,[C(578),R(9472,9599)]),I(B,[C(579),R(9600,9631)]),
I(B,[C(580),R(9632,9727)]),I(B,[C(581),R(9728,9983)]),I(B,[C(582),R(9984,10175)]),I(B,[C(583),R(10176,10223)]),I(B,[C(584),R(10224,10239)]),I(B,[C(585),R(10240,10495)]),I(B,[C(586),R(10496,10623)]),I(B,[C(587),R(10624,10751)]),I(B,[C(588),R(10752,11007)]),I(B,[C(589),R(11008,11263)]),I(B,[C(590),R(11264,11359)]),I(B,[C(591),R(11392,11519)]),I(B,[C(592),R(11520,11567)]),I(B,[C(593),R(11568,11647)]),I(B,[C(594),R(11648,11743)]),I(B,[C(595),R(11776,11903)]),I(B,[C(596),R(11904,12031)]),I(B,[C(597),R(12032,12255)]),
I(B,[C(598),R(12272,12287)]),I(B,[C(599),R(12288,12351)]),I(B,[C(600),R(12352,12447)]),I(B,[C(601),R(12448,12543)]),I(B,[C(602),R(12544,12591)]),I(B,[C(603),R(12592,12687)]),I(B,[C(604),R(12688,12703)]),I(B,[C(605),R(12704,12735)]),I(B,[C(606),R(12736,12783)]),I(B,[C(607),R(12784,12799)]),I(B,[C(608),R(12800,13055)]),I(B,[C(609),R(13056,13311)]),I(B,[C(610),R(13312,19893)]),I(B,[C(611),R(19904,19967)]),I(B,[C(612),R(19968,40959)]),I(B,[C(613),R(40960,42127)]),I(B,[C(614),R(42128,42191)]),I(B,[C(615),R(42752,
42783)]),I(B,[C(616),R(43008,43055)]),I(B,[C(617),R(44032,55203)]),I(B,[C(618),R(55296,56191)]),I(B,[C(619),R(56192,56319)]),I(B,[C(620),R(56320,57343)]),I(B,[C(621),R(57344,63743)]),I(B,[C(622),R(63744,64255)]),I(B,[C(623),R(64256,64335)]),I(B,[C(624),R(64336,65023)]),I(B,[C(625),R(65024,65039)]),I(B,[C(626),R(65040,65055)]),I(B,[C(627),R(65056,65071)]),I(B,[C(628),R(65072,65103)]),I(B,[C(629),R(65104,65135)]),I(B,[C(630),R(65136,65279)]),I(B,[C(631),R(65280,65519)]),I(B,[C(632),R(0,1114111)]),I(B,[C(633),
A2_()]),I(B,[C(634),B1(0,1)]),I(B,[C(635),J7(62,1)]),I(B,[C(636),B1(1,1)]),I(B,[C(637),B1(2,1)]),I(B,[C(638),B1(3,0)]),I(B,[C(639),B1(4,0)]),I(B,[C(640),B1(5,1)]),I(B,[C(641),J7(448,1)]),I(B,[C(642),B1(6,1)]),I(B,[C(643),B1(7,0)]),I(B,[C(644),B1(8,1)]),I(B,[C(645),J7(3584,1)]),I(B,[C(646),B1(9,1)]),I(B,[C(647),B1(10,1)]),I(B,[C(648),B1(11,1)]),I(B,[C(649),J7(28672,0)]),I(B,[C(650),B1(12,0)]),I(B,[C(651),B1(13,0)]),I(B,[C(652),B1(14,0)]),I(B,[C(653),A3s(983040,1,1)]),I(B,[C(654),B1(15,0)]),I(B,[C(655),B1(16,
1)]),I(B,[C(656),B1(18,1)]),I(B,[C(657),A2o(19,0,1)]),I(B,[C(658),J7(1643118592,1)]),I(B,[C(659),B1(20,0)]),I(B,[C(660),B1(21,0)]),I(B,[C(661),B1(22,0)]),I(B,[C(662),B1(23,0)]),I(B,[C(663),B1(24,1)]),I(B,[C(664),J7(2113929216,1)]),I(B,[C(665),B1(25,1)]),I(B,[C(666),B1(26,0)]),I(B,[C(667),B1(27,0)]),I(B,[C(668),B1(28,1)]),I(B,[C(669),B1(29,0)]),I(B,[C(670),B1(30,0)])]);}
function VJ(){Cb.call(this);this.so=0;}
function ARw(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.so!=GW(GU(EJ(e,d)))?(-1):2;}
function NA(){B7.call(this);this.g9=0;}
function AP7(a){var b=new NA();ALU(b,a);return b;}
function ALU(a,b){B5(a);a.g9=b;}
function AYp(a,b){a.e=b;}
function AU5(a,b,c,d){var e,f;e=b+1|0;if(e>d.y){d.dD=1;return (-1);}f=P(c,b);if(b>d.c8&&CP(P(c,b-1|0)))return (-1);if(a.g9!=f)return (-1);return a.e.c(e,c,d);}
function ANO(a,b,c,d){var e,f,g,h;if(!(c instanceof BK))return IA(a,b,c,d);e=d.c8;f=d.y;while(true){if(b>=f)return (-1);g=JO(c,a.g9,b);if(g<0)return (-1);if(g>e&&CP(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AVt(a,b,c,d,e){var f,g;if(!(d instanceof BK))return IH(a,b,c,d,e);f=e.c8;a:{while(true){if(c<b)return (-1);g=Hp(d,a.g9,c);if(g<0)break a;if(g<b)break a;if(g>f&&CP(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKY(a,b){if(b instanceof EG)return 0;if(b instanceof EA)return 0;if(b instanceof D1)return 0;if(b instanceof Eb)return 0;if(b instanceof NI)return 0;if(!(b instanceof NA))return 1;return b.g9!=a.g9?0:1;}
function ARX(a,b){return 1;}
function NI(){B7.call(this);this.gR=0;}
function AWJ(a){var b=new NI();AP$(b,a);return b;}
function AP$(a,b){B5(a);a.gR=b;}
function AUR(a,b){a.e=b;}
function AKH(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;g=BL(f,e);if(g>0){d.dD=1;return (-1);}h=P(c,b);if(g<0&&Di(P(c,f)))return (-1);if(a.gR!=h)return (-1);return a.e.c(f,c,d);}
function AYy(a,b,c,d){var e,f;if(!(c instanceof BK))return IA(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=JO(c,a.gR,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Di(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function ARs(a,b,c,d,e){var f,g;if(!(d instanceof BK))return IH(a,b,c,d,e);f=e.y;a:{while(true){if(c<b)return (-1);g=Hp(d,a.gR,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Di(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AMt(a,b){if(b instanceof EG)return 0;if(b instanceof EA)return 0;if(b instanceof D1)return 0;if(b instanceof Eb)return 0;if(b instanceof NA)return 0;if(!(b instanceof NI))return 1;return b.gR!=a.gR?0:1;}
function AYF(a,b){return 1;}
function Eb(){var a=this;Cb.call(a);a.lZ=0;a.k5=0;a.gL=0;}
function AY5(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.lZ==e&&a.k5==d?2:(-1);}
function AXS(a,b,c,d){var e,f;if(!(c instanceof BK))return IA(a,b,c,d);e=d.y;while(b<e){b=JO(c,a.lZ,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.k5==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ALV(a,b,c,d,e){var f;if(!(d instanceof BK))return IH(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hp(d,a.k5,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.lZ==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AYZ(a,b){if(b instanceof Eb)return b.gL!=a.gL?0:1;if(b instanceof D1)return b.o(a.gL);if(b instanceof EG)return 0;if(!(b instanceof EA))return 1;return 0;}
var ABw=G(Fu);
function AL0(a,b){return b!=10?0:1;}
function AQ7(a,b,c){return b!=10?0:1;}
var ABx=G(Fu);
function AZH(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ASI(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AFS(){var a=this;B.call(a);a.n1=null;a.ma=null;a.i7=0;a.vq=0;}
function AX4(a){var b=new AFS();AOl(b,a);return b;}
function AOl(a,b){var c,d;while(true){c=a.i7;if(b<c)break;a.i7=c<<1|1;}d=c<<1|1;a.i7=d;d=d+1|0;a.n1=BN(d);a.ma=BN(d);a.vq=b;}
function Ri(a,b,c){var d,e,f,g;d=0;e=a.i7;f=b&e;while(true){g=a.n1.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.ma.data[f]=c;}
function ZK(a,b){var c,d,e,f;c=a.i7;d=b&c;e=0;while(true){f=a.n1.data[d];if(!f)break;if(f==b)return a.ma.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.vq;}
var ADE=G();
var Ny=G(Bf);
function A2N(){var a=new Ny();AN2(a);return a;}
function AN2(a){}
function AIs(a){return CH(Ca(DE(),9,13),32);}
var MY=G(Bf);
function A3v(){var a=new MY();ARR(a);return a;}
function ARR(a){}
function AIW(a){return Ca(DE(),48,57);}
var AFL=G(Bf);
function A2U(){var a=new AFL();ANC(a);return a;}
function ANC(a){}
function AZl(a){return Ca(DE(),97,122);}
var AF6=G(Bf);
function A1U(){var a=new AF6();AOp(a);return a;}
function AOp(a){}
function ARZ(a){return Ca(DE(),65,90);}
var AF8=G(Bf);
function A31(){var a=new AF8();ALu(a);return a;}
function ALu(a){}
function AMX(a){return Ca(DE(),0,127);}
var Nu=G(Bf);
function A35(){var a=new Nu();AMh(a);return a;}
function AMh(a){}
function AEb(a){return Ca(Ca(DE(),97,122),65,90);}
var LC=G(Nu);
function A3C(){var a=new LC();AN_(a);return a;}
function AN_(a){}
function AEG(a){return Ca(AEb(a),48,57);}
var AG4=G(Bf);
function A2i(){var a=new AG4();AXK(a);return a;}
function AXK(a){}
function AWp(a){return Ca(Ca(Ca(DE(),33,64),91,96),123,126);}
var On=G(LC);
function A27(){var a=new On();AQS(a);return a;}
function AQS(a){}
function AG_(a){return Ca(Ca(Ca(AEG(a),33,64),91,96),123,126);}
var AIC=G(On);
function A24(){var a=new AIC();ARN(a);return a;}
function ARN(a){}
function APs(a){return CH(AG_(a),32);}
var AE9=G(Bf);
function A12(){var a=new AE9();AZt(a);return a;}
function AZt(a){}
function AVi(a){return CH(CH(DE(),32),9);}
var AEk=G(Bf);
function A19(){var a=new AEk();A0S(a);return a;}
function A0S(a){}
function APp(a){return CH(Ca(DE(),0,31),127);}
var AHU=G(Bf);
function A2$(){var a=new AHU();ALF(a);return a;}
function ALF(a){}
function ASL(a){return Ca(Ca(Ca(DE(),48,57),97,102),65,70);}
var AJI=G(Bf);
function A2A(){var a=new AJI();AUk(a);return a;}
function AUk(a){}
function AX2(a){var b;b=new Z7;b.DW=a;Bz(b);b.P=1;return b;}
var AG7=G(Bf);
function A1Q(){var a=new AG7();AQ2(a);return a;}
function AQ2(a){}
function ATy(a){var b;b=new VR;b.D0=a;Bz(b);b.P=1;return b;}
var AJq=G(Bf);
function A33(){var a=new AJq();ALw(a);return a;}
function ALw(a){}
function AN7(a){var b;b=new RH;b.DL=a;Bz(b);return b;}
var AFC=G(Bf);
function A18(){var a=new AFC();APq(a);return a;}
function APq(a){}
function ARd(a){var b;b=new RG;b.BK=a;Bz(b);return b;}
var AGi=G(Bf);
function A3A(){var a=new AGi();AMe(a);return a;}
function AMe(a){}
function AVg(a){var b;b=new UG;b.CN=a;Bz(b);IL(b.N,0,2048);b.P=1;return b;}
var ADQ=G(Bf);
function A3g(){var a=new ADQ();ALY(a);return a;}
function ALY(a){}
function AMD(a){var b;b=new Xw;b.D_=a;Bz(b);b.P=1;return b;}
var AHi=G(Bf);
function A3B(){var a=new AHi();APa(a);return a;}
function APa(a){}
function A0V(a){var b;b=new Px;b.C9=a;Bz(b);b.P=1;return b;}
var AJx=G(Bf);
function A14(){var a=new AJx();API(a);return a;}
function API(a){}
function ATt(a){var b;b=new YI;b.B$=a;Bz(b);return b;}
var AF1=G(Bf);
function A38(){var a=new AF1();AWx(a);return a;}
function AWx(a){}
function AOG(a){var b;b=new VN;b.Bi=a;Bz(b);b.P=1;return b;}
var AIc=G(Bf);
function A3b(){var a=new AIc();AK2(a);return a;}
function AK2(a){}
function AMJ(a){var b;b=new VP;b.Co=a;Bz(b);b.P=1;return b;}
var AE_=G(Bf);
function A2r(){var a=new AE_();AL2(a);return a;}
function AL2(a){}
function AWc(a){var b;b=new Pc;b.CK=a;Bz(b);b.P=1;return b;}
var AGO=G(Bf);
function A3Z(){var a=new AGO();AOK(a);return a;}
function AOK(a){}
function AXb(a){var b;b=new XM;b.Et=a;Bz(b);b.P=1;return b;}
var AJC=G(Bf);
function A3W(){var a=new AJC();AXW(a);return a;}
function AXW(a){}
function AR_(a){var b;b=new XT;b.BR=a;Bz(b);return b;}
var AEQ=G(Bf);
function A2O(){var a=new AEQ();ALZ(a);return a;}
function ALZ(a){}
function AQM(a){var b;b=new AAr;b.Eb=a;Bz(b);return b;}
var AEw=G(Bf);
function A13(){var a=new AEw();AY9(a);return a;}
function AY9(a){}
function APT(a){var b;b=new ZF;b.Bk=a;Bz(b);b.P=1;return b;}
var AG5=G(Bf);
function A3P(){var a=new AG5();AWt(a);return a;}
function AWt(a){}
function AZd(a){var b;b=new OK;b.EF=a;Bz(b);b.P=1;return b;}
var Kr=G(Bf);
function A2u(){var a=new Kr();AMQ(a);return a;}
function AMQ(a){}
function AE$(a){return CH(Ca(Ca(Ca(DE(),97,122),65,90),48,57),95);}
var AJQ=G(Kr);
function A29(){var a=new AJQ();AWA(a);return a;}
function AWA(a){}
function APL(a){var b;b=EI(AE$(a),1);b.P=1;return b;}
var AIH=G(Ny);
function A1O(){var a=new AIH();ASv(a);return a;}
function ASv(a){}
function AUq(a){var b;b=EI(AIs(a),1);b.P=1;return b;}
var AEu=G(MY);
function A2a(){var a=new AEu();AW3(a);return a;}
function AW3(a){}
function ANH(a){var b;b=EI(AIW(a),1);b.P=1;return b;}
function AHX(){var a=this;Bf.call(a);a.sj=0;a.yq=0;}
function R(a,b){var c=new AHX();A0U(c,a,b);return c;}
function A0U(a,b,c){a.sj=b;a.yq=c;}
function AOV(a){return Ca(DE(),a.sj,a.yq);}
var AH8=G(Bf);
function A2_(){var a=new AH8();ASP(a);return a;}
function ASP(a){}
function ASA(a){return Ca(Ca(DE(),65279,65279),65520,65533);}
function AIw(){var a=this;Bf.call(a);a.pB=0;a.n_=0;a.w7=0;}
function B1(a,b){var c=new AIw();AMa(c,a,b);return c;}
function A2o(a,b,c){var d=new AIw();ASF(d,a,b,c);return d;}
function AMa(a,b,c){a.n_=c;a.pB=b;}
function ASF(a,b,c,d){a.w7=d;a.n_=c;a.pB=b;}
function AV1(a){var b;b=A2T(a.pB);if(a.w7)IL(b.N,0,2048);b.P=a.n_;return b;}
function AID(){var a=this;Bf.call(a);a.nC=0;a.md=0;a.qu=0;}
function J7(a,b){var c=new AID();AMK(c,a,b);return c;}
function A3s(a,b,c){var d=new AID();ATu(d,a,b,c);return d;}
function AMK(a,b,c){a.md=c;a.nC=b;}
function ATu(a,b,c,d){a.qu=d;a.md=c;a.nC=b;}
function AKw(a){var b;b=new Zd;AFw(b,a.nC);if(a.qu)IL(b.N,0,2048);b.P=a.md;return b;}
var AH0=G();
var AD4=G();
function AEP(b){var c,d,e,f,g,h,i;c=ARo(Gj(b));d=MR(c);e=BN(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+MR(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=OS(c);h=h+1|0;}return e;}
function Nk(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Wi(){var a=this;B.call(a);a.xt=0;a.sQ=0;a.xE=null;}
function ANi(a,b,c){var d=new Wi();ARM(d,a,b,c);return d;}
function ARM(a,b,c,d){a.xt=b;a.sQ=c;a.xE=d;}
function AFW(){var a=this;B.call(a);a.wK=null;a.x3=0;}
function ARo(a){var b=new AFW();AVr(b,a);return b;}
function AVr(a,b){a.wK=b;}
var AIj=G();
function MR(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.wK.data;f=b.x3;b.x3=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function OS(b){var c,d;c=MR(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Ml=G(Bu);
function AB3(){var a=this;B.call(a);a.x5=null;a.x6=null;}
function AKy(a,b){var c,d,e,f;c=a.x5;d=a.x6;e=new AC1;f=ABf(EN(d));AJ5(e,b,null,f);HV(c,e);}
function AB2(){B.call(this);this.wL=null;}
function ASa(a,b){Bk(a.wL,b);}
function AHO(){B.call(this);this.RF=null;}
function R0(){B.call(this);this.sa=null;}
function AV7(a,b){b.g8=a.sa;}
function Rl(){B.call(this);this.ts=null;}
function AL8(a,b){Jh(a.ts,b);}
function ABs(){var a=this;B.call(a);a.EG=null;a.kk=null;}
function AM1(a,b){var c;c=a.kk;b=b;a.kk=Xt(!c.nW&&!b.eE?0:1);return 1;}
function AAT(){var a=this;B.call(a);a.B3=null;a.ss=null;}
function AAV(){B.call(this);this.Ek=null;}
function A0H(a,b){$rt_globals.console.info($rt_ustr(b));}
var Kx=G(0);
function Po(){var a=this;B.call(a);a.k2=0;a.Bm=null;}
function AYV(a,b){var c,d;c=Ck(b);d=new K;M(d);H(H(d,C(671)),c);$rt_globals.console.info($rt_ustr(L(d)));a.k2=a.k2+1|0;M6(b,a);}
function AWw(a,b){var c;b=Ck(b);c=new K;M(c);H(H(c,C(672)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function ARx(a){var b;b=a.k2-1|0;a.k2=b;if(!b)Bk(Bt(),C(673));}
function AAl(){var a=this;B.call(a);a.Eq=null;a.Ep=null;a.Eo=null;}
function ABb(){var a=this;B.call(a);a.C0=null;a.C1=null;}
function AAc(){B.call(this);this.tN=null;}
function AVS(a){var b,c,d,e;b=a.tN;c=Bt();d=Gs(b);e=new K;M(e);H(H(e,C(674)),d);Bk(c,L(e));c=b.jv;e=new Z5;e.c2=b;e.lt=BI();e.lV=BI();M6(c,e);}
function Uq(){var a=this;Y.call(a);a.ww=null;a.Em=null;}
function AM3(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cr^DT(a.ww,c):0;}
function Uo(){var a=this;Y.call(a);a.zW=null;a.uO=null;a.Cy=null;}
function ATP(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cr^DT(a.zW,c):0;return a.uO.o(b)&&!d?1:0;}
function PK(){var a=this;Y.call(a);a.k9=null;a.Dm=null;}
function AOL(a,b){return a.bh^DT(a.k9,b);}
function AWe(a){var b,c,d;b=new K;M(b);c=Ie(a.k9,0);while(c>=0){JR(b,HL(c));BM(b,124);c=Ie(a.k9,c+1|0);}d=b.K;if(d>0)Uf(b,d-1|0);return L(b);}
function Xb(){var a=this;Y.call(a);a.ye=null;a.DZ=null;}
function AY8(a,b){return a.ye.o(b);}
function W_(){var a=this;Y.call(a);a.ob=0;a.w1=null;a.oM=null;}
function ARv(a,b){return !(a.ob^DT(a.oM.I,b))&&!(a.ob^a.oM.ep^a.w1.o(b))?0:1;}
function Xa(){var a=this;Y.call(a);a.mb=0;a.ut=null;a.nn=null;}
function AXr(a,b){return !(a.mb^DT(a.nn.I,b))&&!(a.mb^a.nn.ep^a.ut.o(b))?1:0;}
function Xe(){var a=this;Y.call(a);a.AH=0;a.uy=null;a.uq=null;a.Dw=null;}
function AVA(a,b){return a.AH^(!a.uy.o(b)&&!a.uq.o(b)?0:1);}
function Xg(){var a=this;Y.call(a);a.sE=0;a.ya=null;a.xN=null;a.ED=null;}
function AKs(a,b){return a.sE^(!a.ya.o(b)&&!a.xN.o(b)?0:1)?0:1;}
function Xc(){var a=this;Y.call(a);a.rS=null;a.EE=null;}
function AND(a,b){return C9(a.rS,b);}
function Xd(){var a=this;Y.call(a);a.Ai=null;a.DA=null;}
function APg(a,b){return C9(a.Ai,b)?0:1;}
function Xh(){var a=this;Y.call(a);a.sN=null;a.yc=0;a.tY=null;}
function ASj(a,b){return !C9(a.sN,b)&&!(a.yc^DT(a.tY.I,b))?0:1;}
function Xi(){var a=this;Y.call(a);a.tb=null;a.yZ=0;a.s6=null;}
function AVc(a,b){return !C9(a.tb,b)&&!(a.yZ^DT(a.s6.I,b))?1:0;}
function PJ(){var a=this;Y.call(a);a.tU=0;a.z6=null;a.uV=null;a.Bp=null;}
function A1N(a,b){return !(a.tU^a.z6.o(b))&&!C9(a.uV,b)?0:1;}
function P6(){var a=this;Y.call(a);a.As=0;a.p8=null;a.qv=null;a.BE=null;}
function ANF(a,b){return !(a.As^a.p8.o(b))&&!C9(a.qv,b)?1:0;}
function PH(){var a=this;Y.call(a);a.xm=null;a.BH=null;}
function AMj(a,b){return C9(a.xm,b);}
function PI(){var a=this;Y.call(a);a.rH=null;a.EB=null;}
function AV5(a,b){return C9(a.rH,b)?0:1;}
function PN(){var a=this;Y.call(a);a.AD=null;a.s8=0;a.Bd=null;}
function AOo(a,b){return C9(a.AD,b)&&a.s8^DT(a.Bd.I,b)?1:0;}
function PG(){var a=this;Y.call(a);a.ze=null;a.yo=0;a.s7=null;}
function AZ8(a,b){return C9(a.ze,b)&&a.yo^DT(a.s7.I,b)?0:1;}
function PL(){var a=this;Y.call(a);a.zu=0;a.wu=null;a.sC=null;a.Dv=null;}
function AUz(a,b){return a.zu^a.wu.o(b)&&C9(a.sC,b)?1:0;}
function PM(){var a=this;Y.call(a);a.y_=0;a.vY=null;a.zq=null;a.DD=null;}
function AQF(a,b){return a.y_^a.vY.o(b)&&C9(a.zq,b)?0:1;}
var L2=G(0);
function ZE(){var a=this;B.call(a);a.BA=null;a.z7=null;a.lo=null;a.cE=null;a.j5=0;a.oI=0;}
function OA(a,b){var c,d,e;c=J(a.lo);if(b>=0&&b<=c){AC8(a.cE,null,(-1),(-1));d=a.cE;d.lK=1;d.eG=b;c=d.iK;if(c<0)c=b;d.iK=c;b=a.z7.cm(b,a.lo,d);if(b==(-1))a.cE.dD=1;if(b>=0){d=a.cE;if(d.kd){e=d.d2.data;if(e[0]==(-1)){c=d.eG;e[0]=c;e[1]=c;}d.iK=Mr(d);return 1;}}a.cE.eG=(-1);return 0;}d=new BG;Bm(d,Dj(b));N(d);}
function AGN(a){return P5(a.cE,0);}
function AH$(a){return RI(a.cE,0);}
function ADI(a){return a.cE.kg;}
function AIJ(){var a=this;B.call(a);a.NS=null;a.NQ=null;a.NT=0.0;}
var C8=G(0);
var A5w=null;var A6O=null;var A5y=null;var A5x=null;var A5A=null;var A5z=null;var A5C=null;var A5B=null;var A5E=null;var A5D=null;var A5F=null;function AF$(){AF$=Bn(C8);A0Z();}
function A0Z(){A5w=CB(0);A6O=Dv(8,8,8);A5y=S(C(675));A5x=Dv(255,255,255);A5A=S(C(676));A5z=S(C(677));A5C=S(C(678));A5B=S(C(679));A5E=ES(205,205,205,153);A5D=ES(255,255,255,0);A5F=S(C(116));}
function Cx(){CG.call(this);this.o1=null;}
var A78=null;var A79=null;var A7$=null;var A7_=null;var A8a=null;var A8b=null;var A8c=null;var A8d=null;var A8e=null;var A8f=null;var A8g=null;var A8h=null;var A8i=null;var A8j=null;var A8k=null;var A5G=null;function AFx(){AFx=Bn(Cx);A1l();}
function DK(a,b,c){var d=new Cx();YQ(d,a,b,c);return d;}
function A0$(a,b,c,d){var e=new Cx();AD1(e,a,b,c,d);return e;}
function YQ(a,b,c,d){AFx();DI(a,b,c);a.o1=JB(d,null);}
function AD1(a,b,c,d,e){AFx();DI(a,b,c);a.o1=JB(d,e);}
function A1l(){var b;b=new Cx;AF$();YQ(b,C(361),0,A6O);A78=b;A79=DK(C(362),1,S(C(680)));A7$=DK(C(364),2,S(C(681)));A7_=DK(C(366),3,S(C(682)));A8a=DK(C(368),4,A6O);A8b=DK(C(369),5,S(C(683)));A8c=DK(C(371),6,S(C(409)));A8d=DK(C(373),7,S(C(684)));A8e=DK(C(375),8,S(C(685)));A8f=A0$(C(377),9,A6O,Dv(237,235,252));A8g=A0$(C(378),10,S(C(407)),S(C(686)));A8h=DK(C(379),11,S(C(409)));A8i=DK(C(381),12,S(C(410)));A8j=DK(C(383),13,S(C(687)));b=DK(C(384),14,S(C(385)));A8k=b;A5G=I(Cx,[A78,A79,A7$,A7_,A8a,A8b,A8c,A8d,A8e,A8f,
A8g,A8h,A8i,A8j,b]);}
var DY=G(0);
var A5K=null;var A5L=null;var A5H=null;var A5I=null;var A5J=null;var A6P=null;var A6Q=null;var A5M=null;var A5N=null;function AT4(){AT4=Bn(DY);AVx();}
function AVx(){A5K=S(C(114));A5L=S(C(688));A5H=S(C(689));A5I=S(C(690));A5J=S(C(691));A6P=S(C(114));A6Q=S(C(688));A5M=ES(205,205,205,153);A5N=Dv(247,248,250);}
function ABT(){var a=this;B.call(a);a.lM=null;a.iE=0;}
var OP=G(HN);
function ANl(a,b,c,d){var e,f,g;e=0;f=d.y;a:{while(true){if(b>f){b=e;break a;}g=Go(d,a.bc);DW(d,a.bc,b);e=a.dd.c(b,c,d);if(e>=0)break;DW(d,a.bc,g);b=b+1|0;}}return b;}
function A1C(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Go(e,a.bc);DW(e,a.bc,c);f=a.dd.c(c,d,e);if(f>=0)break;DW(e,a.bc,g);c=c+(-1)|0;}}return c;}
function AL$(a){return null;}
var QL=G(Bu);
var UV=G(Bu);
function Tx(){F8.call(this);this.C4=0;}
function QF(){F8.call(this);this.Ew=0;}
function UT(){B.call(this);this.qC=null;}
function AWb(a,b){a.qC.j(HY(b));}
function UU(){var a=this;B.call(a);a.rs=null;a.rt=null;}
function AUy(a,b){var c,d;c=a.rs;d=a.rt;b.text().then(Bv(c,"f"),Bv(d,"f"));}
function ABm(){var a=this;B.call(a);a.sO=null;a.zX=null;a.vf=0;a.mo=0;}
function Nh(a,b){return Cg(a.sO)<b?0:1;}
var AD3=G(0);
var ADM=G();
function AD9(b){var c,d,e,f,g,h,i,j;c=AUK();d=CI(b);Bq(c,d);e=0;f=0;while(f<d){g=Cc(b,f);h=Ji(g);Bq(c,h);i=0;while(i<h){j=JL(g,i);GV(c,e,LZ(j));e=e+LZ(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return QB(c);}
function ADS(b){var c,d,e,f,g,h,i,j,k;c=Ba(b);d=Q(Gi,c);e=d.data;f=0;while(f<c){a:{g=Ba(b);if(g!=(-1)){h=Ba(b);i=Ba(b);if(i==(-1)){j=new Gi;j.gU=h;e[g]=j;}else{j=new Gi;j.gU=h;j.nd=BN(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].nd.data[k]=Ba(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function XN(){B.call(this);this.wH=null;}
function AW7(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.wH;d=CN(c[0]);c=LY(d);e=new Ty;d=ADS(c);f=ADS(c);g=Ba(c);h=Q(LW,g);i=h.data;j=0;while(j<g){i[j]=M8(Ba(c),Ba(c),Ba(c),Ba(c),Ba(c));j=j+1|0;}AFg(e,d,f,h);b.kM=e;MS(b.E,e.Ao);MS(b.G,b.kM.Ap);c=b.l9;e=b.kM;c.h5=e;b.fv.eS=e;}
function ABF(){B.call(this);this.wz=null;}
function AQO(a,b){var c,d,e,f;c=a.wz;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.ss;c=Bt();b=Ck(b);e=new K;M(e);H(H(e,C(692)),b);Bk(c,L(e));b=Bt();f=d.length;c=new K;M(c);U(H(c,C(693)),f);Bk(b,L(c));}
function ABH(){var a=this;B.call(a);a.zP=null;a.zQ=null;}
function AP0(a,b){var c,d;c=a.zP;d=a.zQ;b.arrayBuffer().then(Bv(c,"f"),Bv(d,"f"));}
function ABI(){var a=this;B.call(a);a.xA=null;a.kJ=null;a.j_=null;}
function AAv(a){var b,c;b=a.xA.next();c=a.j_.ph;b.then(Bv(a,"f"),Bv(c,"f"));}
function AQU(a,b){var c,d;if(b.done?1:0)a.kJ.vw();else{AAv(a);c=b.value;if(c.kind==='file'?1:0){b=A1X(c,null,Yb(a.j_));a.kJ.wv(b);}else{b=new ABA;d=a.j_;AGs(b,c,d.ph,Yb(d),null);a.kJ.th(b);}}}
function WX(){var a=this;B.call(a);a.xK=null;a.xL=null;}
function Z5(){var a=this;B.call(a);a.lt=null;a.lV=null;a.c2=null;}
function A0i(a,b){var c,d;c=new Ih;d=a.c2;LB(c,b,d.jy+1|0,d.hz);BC(a.lt,c);}
function ASh(a,b){var c,d;c=EN(b);d=new Kq;JW(d,c,a.c2.jy+1|0);d.oE=b;a.c2.hz.rf(d,c);d.n9=AJW(a.c2.hz,d);BC(a.lV,d);}
function A0C(a){var b,c,d,e,f,g,h;if(!(Ez(a.lt)&&Ez(a.lV))){a.c2.hg=Gf(a.lt,A7X);a.c2.jK=Gf(a.lV,A7Y);KS(a.c2.hg,A7B);KS(a.c2.jK,A7B);b=a.c2;c=b.hg;d=c.data;e=b.jK;f=e.data;g=d.length;h=f.length;d=Q(Dc,g+h|0);Dd(c,0,d,0,g);Dd(e,0,d,g,h);a.c2.e1=d;}NF(a.c2);b=a.c2;b.hz.wD(b);}
function ABp(){var a=this;B.call(a);a.d2=null;a.kC=null;a.o3=null;a.m5=null;a.rg=0;a.kd=0;a.c8=0;a.y=0;a.eG=0;a.kg=0;a.gj=0;a.dD=0;a.Eg=0;a.iK=0;a.lK=0;}
function BX(a,b,c){a.kC.data[b]=c;}
function DD(a,b){return a.kC.data[b];}
function Mr(a){return RI(a,0);}
function RI(a,b){Zb(a,b);return a.d2.data[(b*2|0)+1|0];}
function DW(a,b,c){a.d2.data[b*2|0]=c;}
function MO(a,b,c){a.d2.data[(b*2|0)+1|0]=c;}
function Go(a,b){return a.d2.data[b*2|0];}
function I1(a,b){return a.d2.data[(b*2|0)+1|0];}
function AFN(a){return P5(a,0);}
function P5(a,b){Zb(a,b);return a.d2.data[b*2|0];}
function VW(a,b){return a.o3.data[b];}
function EP(a,b,c){a.o3.data[b]=c;}
function Zb(a,b){var c;if(!a.kd){c=new C4;X(c);N(c);}if(b>=0&&b<a.rg)return;c=new BG;Bm(c,Dj(b));N(c);}
function AC8(a,b,c,d){a.kd=0;a.lK=2;Jo(a.d2,(-1));Jo(a.kC,(-1));if(b!==null)a.m5=b;if(c>=0){a.c8=c;a.y=d;}a.eG=a.c8;}
function AEI(a){return a.lK;}
function S3(){B.call(this);this.xq=null;}
function AXk(a,b){a.xq.j($rt_str(b.message));}
function ABB(){B.call(this);this.wt=null;}
function AYC(a){Ej(a.wt);}
function Z7(){Y.call(this);this.DW=null;}
function ASp(a,b){return CD(b)!=2?0:1;}
function VR(){Y.call(this);this.D0=null;}
function AUo(a,b){return CD(b)!=1?0:1;}
function RH(){Y.call(this);this.DL=null;}
function ALe(a,b){return Re(b);}
function RG(){Y.call(this);this.BK=null;}
function AVZ(a,b){return 0;}
function UG(){Y.call(this);this.CN=null;}
function AOf(a,b){return !CD(b)?0:1;}
function Xw(){Y.call(this);this.D_=null;}
function A0B(a,b){return CD(b)!=9?0:1;}
function Px(){Y.call(this);this.C9=null;}
function AQl(a,b){return HH(b);}
function YI(){Y.call(this);this.B$=null;}
function ARg(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function VN(){Y.call(this);this.Bi=null;}
function A1r(a,b){a:{b:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HH(b);}return b;}
function VP(){Y.call(this);this.Co=null;}
function AMv(a,b){a:{b:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HH(b);}return b;}
function Pc(){Y.call(this);this.CK=null;}
function ASx(a,b){a:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function XM(){Y.call(this);this.Et=null;}
function AXz(a,b){return Kz(b);}
function XT(){Y.call(this);this.BR=null;}
function AYS(a,b){return XU(b);}
function AAr(){Y.call(this);this.Eb=null;}
function A0p(a,b){return CD(b)!=3?0:1;}
function ZF(){Y.call(this);this.Bk=null;}
function ASR(a,b){a:{b:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HH(b);}return b;}
function OK(){Y.call(this);this.EF=null;}
function AMp(a,b){a:{b:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HH(b);}return b;}
function Ma(){Y.call(this);this.ni=0;}
function A2T(a){var b=new Ma();AFw(b,a);return b;}
function AFw(a,b){Bz(a);a.ni=b;}
function AQm(a,b){return a.bh^(a.ni!=CD(b&65535)?0:1);}
var Zd=G(Ma);
function AZQ(a,b){return a.bh^(!(a.ni>>CD(b&65535)&1)?0:1);}
var ACR=G(0);
function Ye(){B.call(this);this.vE=null;}
function AO2(a){var b,c;b=a.vE;c=b.xK;b=b.xL;c.EZ(b.lF,b.o$,null);}
var AFl=G(0);
function Rg(){var a=this;B.call(a);a.tz=null;a.tA=null;}
function A0X(a){a.tz.yC(a.tA);}
var AHC=G();
function ACv(){B.call(this);this.Al=null;}
function AVM(a){var b;b=a.Al;Iz(b);b.hz.t5(b);b.hg=A7X;b.jK=A7Y;}
function ABK(){var a=this;B.call(a);a.xa=null;a.w8=null;}
function AX9(a,b){var c,d,e,f;c=a.xa;d=a.w8;e=Lm(c.jb,d);b=AHF(b);f=AM4(b.jY,ABf(e));Em(c.ml,d,f);if(BS(c.o7,d))ACU(c,f);}
function ABL(){var a=this;B.call(a);a.AE=null;a.AF=null;}
function AWN(a,b){var c,d,e;c=a.AE;d=a.AF;c=Lm(c.jb,d);d=Ek();e=new K;M(e);H(H(H(H(e,C(694)),c),C(29)),b);Bk(d,L(e));}
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"ui",4,"js",4,"diff"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bH",A4t(APn),"cK",A4s(ALT)],Rw,0,B,[],0,3,0,0,0,V7,0,B,[],3,3,0,0,0,VK,0,B,[],3,3,0,0,0,AB6,0,B,[V7,VK],0,3,0,0,0,AHT,0,B,[],4,0,0,0,0,AHH,0,B,[],4,3,0,0,0,GP,0,B,[],0,3,0,0,0,Es,0,GP,[],0,3,0,0,0,Bu,0,Es,[],0,3,0,0,0,AIE,0,Bu,[],0,3,0,0,0,C2,0,B,[],3,3,0,0,0,CJ,0,B,[],3,3,0,0,0,J$,0,B,[],3,3,0,0,0,BK,"String",1,B,[C2,CJ,J$],0,3,0,E8,["cK",A4s(ALR),"bH",A4t(Bi),"gp",A4s(NG),"l3",A4t(ANk)],Fs,0,GP,[],0,3,0,0,0,Ig,0,Fs,[],0,3,0,0,0,AIl,0,Ig,[],0,3,0,0,0,Eo,0,B,[C2],1,3,0,0,0,Hz,
0,Eo,[CJ],0,3,0,0,["gp",A4s(ATB),"bH",A4t(A1c),"l3",A4t(AW_)],GJ,0,B,[C2,J$],0,0,0,0,["jJ",A4t(MN),"cK",A4s(L)],JA,0,B,[],3,3,0,0,0,K,0,GJ,[JA],0,3,0,0,["pp",A4w(AW6),"oO",A4v(AMC),"cK",A4s(D_),"jJ",A4t(AOH),"pG",A4u(AXq)],EZ,0,Ig,[],0,3,0,0,0,AJh,0,EZ,[],0,3,0,0,0,AIf,0,EZ,[],0,3,0,0,0,AAp,0,B,[],3,3,0,0,0,C5,0,B,[],3,3,0,0,0,Xv,0,B,[],3,0,0,0,0,J2,0,B,[AAp,C5,Xv],1,3,0,0,["cC",A4s(Ew)],Y8,0,J2,[],0,3,0,0,0,AHp,0,B,[],0,3,0,0,0,AJR,0,B,[],4,3,0,0,0,BQ,0,B,[],3,3,0,0,0,Cd,0,B,[BQ],3,3,0,0,0,AAz,0,B,[Cd],0,3,
0,0,["bg",A4t(A1p)],AFy,0,B,[],0,3,0,0,0,AIQ,0,B,[BQ],1,3,0,0,0,ADJ,0,B,[],3,3,0,0,0,AJF,0,B,[],3,3,0,0,0,AF5,0,B,[],3,3,0,0,0,LS,0,B,[],0,3,0,0,0,AEc,0,B,[BQ],1,3,0,0,0,AAA,0,B,[Cd],0,3,0,0,["bg",A4t(AKt)],AAy,0,B,[Cd],0,3,0,0,["bg",A4t(A0q)],Lx,0,B,[],4,3,0,0,0,AF3,0,B,[],4,3,0,0,0,AH_,0,B,[],0,3,0,0,0,AKq,0,B,[],4,3,0,0,0,V8,0,B,[Cd],0,3,0,0,["bg",A4t(AYg)]]);
$rt_metadata([AGe,0,B,[BQ],1,3,0,0,0,AHx,0,B,[],0,3,0,0,0,ABJ,0,B,[BQ],3,3,0,0,0,AIG,0,B,[ABJ],1,3,0,0,["Ks",A4t(AWl),"QF",A4s(APk)],AE0,0,B,[BQ],1,3,0,0,0,F$,0,B,[],3,3,0,0,0,Sg,0,B,[F$],0,3,0,0,0,BG,0,Bu,[],0,3,0,0,0,AI5,0,B,[],4,3,0,0,0,GX,0,Bu,[],0,3,0,0,0,I8,0,Bu,[],0,3,0,0,0,Dk,0,B,[CJ],0,3,0,0,0,VG,0,B,[BQ],3,3,0,0,0,ZG,0,B,[VG],3,3,0,0,0,ET,0,B,[BQ],3,3,0,0,0,AHr,0,B,[BQ,ZG,ET],1,3,0,0,["Je",A4s(AXY),"JN",A4t(AZU),"Rt",A4t(AZJ),"M2",A4t(AVe),"P1",A4t(AKJ),"LF",A4s(AMw),"QD",A4u(AZR),"J3",A4v(AOu),"Kz",
A4s(AUn),"KR",A4s(AYD),"Pe",A4t(A0m),"NG",A4s(APC),"RM",A4t(AN9),"HW",A4s(APV),"Oh",A4s(ATj),"RG",A4s(AOW),"Fl",A4t(ALk),"J7",A4s(A1e),"Pw",A4u(AWI),"Nt",A4u(APu),"Qv",A4u(ASD),"Qd",A4s(ATI),"QW",A4s(ANT),"KD",A4t(AMF),"O0",A4t(ANv),"MW",A4u(AWS),"HA",A4s(AO5),"Kr",A4t(AUp),"LS",A4s(ANu),"KY",A4s(AQW),"MK",A4t(AKz),"HV",A4t(AR8),"RB",A4t(AUH),"G_",A4s(A0d),"Ni",A4u(AUO),"Qr",A4t(AYL),"Hr",A4s(ARk),"Ma",A4u(AQj),"FN",A4u(AP4),"N4",A4s(AR3),"KE",A4t(AS0),"GR",A4v(AX8),"Gd",A4s(AMA),"GV",A4u(AU1),"Nz",A4s(AT5),
"Jw",A4s(A0_),"Pb",A4s(AQg),"EJ",A4s(AT3),"I8",A4u(AQk),"LT",A4t(AVn),"OY",A4t(ANA),"F7",A4s(AZk)],Pd,0,B,[Cd],0,3,0,0,["bg",A4t(AQR)],AIt,0,B,[],4,3,0,0,0,XL,0,B,[ET],3,3,0,0,0,Rm,0,B,[ET],3,3,0,0,0,YX,0,B,[ET],3,3,0,0,0,Sz,0,B,[ET],3,3,0,0,0,ACO,0,B,[ET],3,3,0,0,0,ABa,0,B,[ET,XL,Rm,YX,Sz,ACO],3,3,0,0,0,AHR,0,B,[BQ,ABa],1,3,0,0,["PJ",A4u(AYn),"Q3",A4u(AW9),"Gg",A4v(ANV),"No",A4t(ALv),"II",A4v(AVD)],BR,0,Bu,[],0,3,0,0,0,ADp,0,Bu,[],0,3,0,0,0,Ic,0,BG,[],0,3,0,0,0,AH5,0,B,[],0,3,0,0,0,YB,0,B,[],3,3,0,0,0,Xl,0,
B,[YB],3,3,0,0,0,ZM,0,B,[Xl],0,3,0,0,0,BE,0,B,[],3,3,0,0,0,AIN,0,B,[BE],0,3,0,0,0,Z,0,B,[],3,3,0,0,0,AIO,0,B,[Z],0,3,0,0,0,Y1,0,B,[BQ],3,3,0,0,0,TN,0,B,[Y1],0,3,0,0,["HX",A4t(AWH)],TL,0,B,[Z],0,3,0,0,0,Yu,0,B,[BQ],3,3,0,0,0,TM,0,B,[Yu],0,3,0,0,["AS",A4u(AMP)],AGo,0,B,[BQ],1,3,0,0,0,Cy,0,B,[BQ],3,3,0,0,0,TK,0,B,[Cy],0,3,0,0,["cq",A4t(AQV)],Zx,0,B,[],0,3,0,0,0,Ug,0,B,[],3,3,0,0,["fa",A4t(ATq)],Hs,0,B,[Ug],3,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],Fv,0,B,[Hs],1,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW),"ev",A4s(Ez),"qw",
A4t(AZy)],Np,0,B,[Hs],3,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],Mv,0,B,[Np],3,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW)]]);
$rt_metadata([Fi,0,Fv,[Mv],1,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW),"yT",A4t(AQ9),"b5",A4s(B6),"tE",A4u(AQx),"n2",A4u(AZ$),"bH",A4t(APO)],L7,0,Fi,[],1,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],Ow,0,B,[Hs],3,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],AC9,0,B,[Ow,Np],3,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],S6,0,L7,[AC9],0,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],Ll,0,B,[],3,3,0,0,0,Ea,0,B,[Ll],1,3,0,0,0,Et,0,B,[],3,3,0,0,0,U0,0,B,[Ll],3,3,0,0,0,OR,0,B,[U0],3,3,0,0,0,XB,0,Ea,[Et,C2,OR],0,3,0,0,0,ZB,0,B,[BE],0,3,0,0,0,ZC,0,B,[Cd],0,3,
0,0,["bg",A4t(ATH)],AEj,0,B,[],0,3,0,0,0,ND,0,B,[],1,3,0,0,0,TD,0,ND,[],0,3,0,0,0,Cu,0,B,[C5],1,3,0,0,["cg",A4t(A1a)],X9,0,B,[],0,3,0,0,0,AB_,0,B,[Cy],0,3,0,0,["cq",A4t(AYw)],ACa,0,B,[Cy],0,3,0,0,["cq",A4t(AYH)],ACb,0,B,[Cy],0,3,0,0,["cq",A4t(APz)],ACc,0,B,[Cy],0,3,0,0,["cq",A4t(AXo)],ACd,0,B,[Cy],0,3,0,0,["cq",A4t(AXA)],ACe,0,B,[Cy],0,3,0,0,["cq",A4t(AQ0)],ACf,0,B,[Cy],0,3,0,0,["cq",A4t(ANU)],ACg,0,B,[Cy],0,3,0,0,["cq",A4t(A1x)],ACh,0,B,[Cy],0,3,0,0,["cq",A4t(ANs)],ACi,0,B,[Cy],0,3,0,0,["cq",A4t(ARH)],Vk,0,
B,[Cy],0,3,0,0,["cq",A4t(A1b)],Vl,0,B,[Cy],0,3,0,0,["cq",A4t(APi)],Vm,0,B,[Cy],0,3,0,0,["cq",A4t(APE)],Vn,0,B,[Cy],0,3,0,0,["cq",A4t(AYN)],AAU,0,B,[],3,3,0,0,0,AA5,0,B,[AAU],0,3,0,0,0,AA4,0,B,[Cy],0,3,0,0,["cq",A4t(AOz)],Ot,0,B,[],0,3,0,0,0,Kl,0,B,[F$],0,3,0,0,["pM",A4u(MJ)],AGB,0,B,[],0,3,0,0,0,Ev,0,B,[],3,3,0,0,0,Cq,0,B,[Ev],3,3,0,0,0,CC,0,B,[],3,3,0,0,["bQ",A4t(AW2),"cu",A4u(ASm),"ds",A4u(AK5),"ct",A4v(AY0)],EE,0,B,[],3,3,0,0,0,C6,0,B,[Ev],3,3,0,0,0,Ft,0,B,[],3,3,0,0,0,DN,0,B,[],3,3,0,0,0,FN,0,B,[DN],3,3,
0,0,0,QQ,0,B,[C5],0,3,0,0,0,Bg,0,B,[],0,3,0,0,["cK",A4s(AG8),"bH",A4t(AOq)],ACl,0,B,[],0,3,0,0,0,AF7,0,B,[],0,3,0,0,0]);
$rt_metadata([AHE,0,B,[],3,3,0,0,0,Ys,0,B,[],0,3,0,0,0,NT,0,B,[],0,3,0,0,0,De,0,NT,[],0,3,0,0,0,AJP,0,De,[],0,3,0,0,0,Fj,0,De,[],0,3,0,0,0,YM,0,De,[],0,3,0,0,0,AE3,0,Fj,[],0,3,0,0,0,Hn,0,Fj,[],0,3,0,0,0,Pm,0,Hn,[],0,3,0,0,0,AGQ,0,Hn,[],0,3,0,0,0,AHS,0,Fj,[],0,3,0,0,0,AJj,0,De,[],0,3,0,0,0,ADZ,0,De,[],0,3,0,0,0,Zh,0,B,[BQ],3,3,0,0,0,AKo,0,B,[Zh],3,3,0,0,0,Yr,0,B,[C5],0,3,0,0,0,QK,0,B,[],0,3,0,0,0,CG,0,B,[CJ,C2],1,3,0,0,0,G2,0,CG,[],12,3,0,Jp,0,Mf,0,B,[],3,3,0,0,0,St,0,B,[Mf],3,3,0,0,0,AA9,0,B,[],3,3,0,0,0,GL,
0,B,[St,AA9],1,3,0,0,0,MG,0,GL,[],0,3,0,0,0,AEK,0,MG,[],0,3,0,0,0,Hx,0,GL,[],1,3,0,0,0,Lv,0,Hx,[],0,3,0,0,["mu",A4v(AOs)],Ee,0,CG,[],12,3,0,A0D,0,My,0,B,[CJ],1,3,0,0,0,Mi,0,My,[],0,3,0,AEF,0,XF,0,B,[],0,3,0,0,0,HZ,0,CG,[],12,0,0,APv,0,Nr,0,Hx,[],0,3,0,0,["mu",A4v(AM8)],AF2,0,BR,[],0,3,0,0,0,TO,0,Es,[],0,3,0,0,0,Mh,0,B,[BQ],3,3,0,0,0,AC3,0,B,[Mh],0,3,0,0,["bg",A4t(ARq)],AC4,0,B,[Mh],0,3,0,0,["bg",A4t(ALM)],H8,0,B,[],1,3,0,0,0,Zu,0,B,[],3,3,0,0,0,Lq,0,H8,[CJ,JA,J$,Zu],1,3,0,0,0,MU,0,H8,[CJ],1,3,0,0,0,IB,0,B,[],
0,3,0,Hf,0,OV,0,Cu,[],0,3,0,0,["bP",A4s(APd),"ca",A4u(AN8)],HG,0,Cu,[],1,3,0,0,["ca",A4u(AFb)],CM,0,HG,[],1,3,0,0,["bP",A4s(AM2),"ca",A4u(Iw),"cg",A4t(ALE)],GI,0,B,[],3,3,0,0,0,M2,0,B,[],3,3,0,0,0,F4,0,B,[],3,3,0,0,0]);
$rt_metadata([KJ,0,CM,[CC,GI,M2,F4,EE,Ft,FN],0,3,0,0,["hX",A4u(A0R),"cg",A4t(ARb),"bP",A4s(AXx),"gW",A4s(AWD),"AK",A4s(ARy),"vs",A4s(AXt),"tV",A4t(AR7),"nc",A4t(AYj),"ic",A4t(AMo),"ca",A4u(AOJ),"hB",A4t(AK$),"bQ",A4t(AYA),"ct",A4v(AWE),"cu",A4u(APy),"ds",A4u(AY2),"dq",A4v(AQN),"cV",A4s(AW5)],AGa,0,KJ,[],0,3,0,0,["gW",A4s(APJ)],AGz,0,B,[],0,3,0,0,0,AII,0,B,[BQ],1,3,0,0,0,KQ,0,Lq,[],1,0,0,0,0,AEY,0,KQ,[],0,0,0,0,0,Li,0,B,[],1,3,0,0,0,NX,0,B,[],0,3,0,0,0,ADP,0,B,[],0,3,0,0,0,IY,0,B,[BQ],3,3,0,0,0,We,0,B,[IY],0,
3,0,0,["bg",A4t(ANc)],Wd,0,B,[IY],0,3,0,0,["bg",A4t(AQd)],Wb,0,B,[Cd],0,3,0,0,["bg",A4t(AQD)],Wa,0,B,[Cd],0,3,0,0,["bg",A4t(AU2)],W,0,B,[],3,3,0,0,0,SN,0,B,[W],0,3,0,0,["j",A4t(A1f)],SO,0,B,[W],0,3,0,0,["j",A4t(AW$)],T1,0,B,[BE],0,3,0,0,["ba",A4t(ASk)],T0,0,B,[BE],0,3,0,0,["ba",A4t(AKR)],TX,0,B,[BE],0,3,0,0,["ba",A4t(AVG)],TW,0,B,[BE],0,3,0,0,["ba",A4t(AYh)],TZ,0,B,[BE],0,3,0,0,["ba",A4t(AMW)],TY,0,B,[BE],0,3,0,0,["ba",A4t(ATo)],T4,0,B,[BE],0,3,0,0,["ba",A4t(AMB)],T3,0,B,[BE],0,3,0,0,["ba",A4t(AO7)],T6,0,B,
[BE],0,3,0,0,["ba",A4t(AZA)],T5,0,B,[BE],0,3,0,0,["ba",A4t(AKC)],Z$,0,B,[BE],0,3,0,0,["ba",A4t(AKM)],Z9,0,B,[BE],0,3,0,0,["ba",A4t(AXd)],Z8,0,B,[BE],0,3,0,0,["ba",A4t(APX)],ZY,0,B,[BE],0,3,0,0,["ba",A4t(ANg)],ZX,0,B,[BE],0,3,0,0,["ba",A4t(ATA)],ZV,0,B,[BE],0,3,0,0,["ba",A4t(A0y)],ZU,0,B,[BE],0,3,0,0,["ba",A4t(APe)],ZT,0,B,[BE],0,3,0,0,["ba",A4t(AZD)],ZS,0,B,[BE],0,3,0,0,["ba",A4t(AKv)],ZR,0,B,[BE],0,3,0,0,["ba",A4t(AZp)],Z2,0,B,[BE],0,3,0,0,["ba",A4t(AYI)],Z1,0,B,[BE],0,3,0,0,["ba",A4t(AMc)],Z0,0,B,[BE],0,3,
0,0,["ba",A4t(AWq)],ZZ,0,B,[BE],0,3,0,0,["ba",A4t(AN3)],Z4,0,B,[BE],0,3,0,0,["ba",A4t(AN4)],Z3,0,B,[BE],0,3,0,0,["ba",A4t(AUg)],ACq,0,B,[],0,0,0,0,0,Ia,0,B,[],0,3,0,0,0,P3,0,Ia,[],0,3,0,0,0,AGb,0,B,[],0,3,0,0,0,Or,0,Ia,[],0,3,0,0,0,SU,0,B,[BQ],3,3,0,0,0,O_,0,B,[SU],0,3,0,0,["KK",A4t(AXe)]]);
$rt_metadata([ABe,0,B,[W],0,3,0,0,["j",A4t(AB4)],ACy,0,MU,[],0,0,0,0,0,CE,0,B,[C5],0,3,0,0,["cC",A4s(ARc),"hJ",A4s(AX_),"eY",A4v(HJ),"dp",A4t(AJ6),"cg",A4t(AUV),"mx",A4t(AO$),"ov",A4t(ASK),"le",A4u(AZc),"qV",A4s(ASS),"ct",A4v(ANY),"cu",A4u(ALS),"ds",A4u(APN),"bQ",A4t(ASz),"dq",A4v(AY7)],AEv,0,CE,[],0,3,0,0,["dp",A4t(AFK)],AE1,0,B,[],0,0,0,0,0,FO,0,B,[],3,3,0,0,["vx",A4s(AYa),"tK",A4s(ANm)],QE,0,B,[],3,0,0,0,0,Me,0,B,[FO],3,3,0,0,["vx",A4s(AYa),"tK",A4s(ANm)],AEB,0,CE,[FO,CC,M2,QE,Me],0,3,0,0,["eY",A4v(Mg),"le",
A4u(AQo),"oY",A4u(A1g),"tK",A4s(AVY),"vx",A4s(AT8),"AK",A4s(Wz),"vs",A4s(ADe),"tV",A4t(PC),"nc",A4t(AQ3),"qV",A4s(LK),"cC",A4s(AUt),"cg",A4t(IT),"pN",A4t(AIo),"hJ",A4s(AGj),"o6",A4s(ARS),"dp",A4t(AXD),"kX",A4s(Tb),"j$",A4s(Ta),"ht",A4t(AQK),"uj",A4s(AQA),"pb",A4s(ATi),"dq",A4v(LF),"ds",A4u(Ss),"cu",A4u(VQ),"ct",A4v(OL),"bQ",A4t(WR),"ij",A4t(A0Y)],AHh,0,B,[],0,3,0,0,0,Tj,0,B,[W],0,3,0,0,["j",A4t(ALh)],Tk,0,B,[W],0,3,0,0,["j",A4t(AZ3)],Tl,0,B,[Cq],0,3,0,0,["L",A4t(AOQ)],HM,0,B,[Cq],0,3,0,0,["L",A4t(ANp)],Th,0,
B,[W],0,3,0,0,["j",A4t(APA)],Ti,0,B,[C6],0,3,0,0,["L",A4t(A0z)],CZ,0,B,[],3,3,0,0,0,ACK,0,B,[CC,CZ],0,3,0,0,["bQ",A4t(ATM),"ct",A4v(AL1),"cu",A4u(AN0),"ds",A4u(A0T),"gy",A4u(AWZ)],S0,0,B,[],0,3,0,0,0,VH,0,B,[EE],0,3,0,0,["dq",A4v(A0O)],AEn,0,B,[],0,3,0,0,0,AC1,0,B,[],0,3,0,0,0,ACQ,0,B,[],0,3,0,0,0,Fk,0,B,[C5],0,3,0,0,0,AGM,0,B,[],0,3,0,0,0,AEm,0,B,[C5],0,3,0,0,0,WM,0,B,[W],0,3,0,0,0,WL,0,B,[W],0,3,0,0,["j",A4t(ALr)],WK,0,B,[W],0,3,0,0,["j",A4t(AKO)],AJf,0,B,[],0,3,0,0,0,WJ,0,B,[Z],0,3,0,0,["f",A4s(ATO)],WQ,
0,B,[Z],0,3,0,0,["f",A4s(AV3)],WP,0,B,[Z],0,3,0,0,["f",A4s(A1L)],WO,0,B,[Z],0,3,0,0,["f",A4s(AO1)],WN,0,B,[Z],0,3,0,0,["f",A4s(AQE)],WI,0,B,[Z],0,3,0,0,["f",A4s(A1h)],T_,0,B,[Z],0,3,0,0,["f",A4s(AO4)],Ua,0,B,[Z],0,3,0,0,["f",A4s(AYE)],AFt,0,B,[BQ],1,3,0,0,0,Nf,0,B,[],4,3,0,AWR,0,ADX,0,B,[],3,3,0,0,0,Zj,0,B,[Cq],0,3,0,0,["L",A4t(ANJ)],Zi,0,B,[Cq],0,3,0,0,["L",A4t(AU0)],Lw,0,B,[],3,3,0,0,0,AHy,0,Fi,[Et,C2,Lw],0,3,0,0,["pf",A4t(AWW),"nj",A4t(Bx),"cY",A4s(AYq),"yT",A4t(BC),"n2",A4u(Y9),"pL",A4t(EH),"qw",A4t(T8),
"i2",A4s(Ir),"tE",A4u(AHK),"fa",A4t(Fm)],J_,0,B,[],0,3,0,0,0,Ff,0,B,[],0,3,0,0,0,Nd,0,Ff,[],0,3,0,0,0,Z6,0,Ff,[],0,3,0,0,0,Yf,0,Ff,[],0,3,0,0,0]);
$rt_metadata([G_,0,B,[],3,3,0,0,0,R5,0,B,[],3,3,0,0,0,B0,0,B,[],0,3,0,0,["bH",A4t(AS_)],Lp,0,B,[],0,3,0,0,0,Ip,0,B,[C5],0,3,0,0,["cC",A4s(AFA)],X7,0,B,[],3,0,0,0,0,Oo,0,B,[],3,3,0,0,0,Yn,0,B,[Z],0,3,0,0,["f",A4s(AWv)],Ym,0,B,[Z],0,3,0,0,["f",A4s(ATz)],AJX,0,B,[],0,3,0,0,0,SY,0,B,[],0,3,0,0,0,GS,0,B,[],1,3,0,0,0,Y6,0,GS,[],0,3,0,0,["tp",A4t(Cc)],L0,0,B,[],3,3,0,0,0,S2,0,B,[L0],3,3,0,0,0,Si,"JsFileHandle",7,B,[S2],0,3,0,0,["oK",A4s(EN),"sH",A4s(AK_),"cK",A4s(AWY),"gp",A4s(AKW)],ABZ,0,B,[],3,3,0,0,0,AIY,0,B,[ABZ],
0,3,0,0,["cK",A4s(AVh)],Zc,0,B,[Oo],0,3,0,0,0,Ha,0,B,[CJ],0,3,0,0,0,Nz,0,B,[],0,3,0,0,0,DG,0,B,[],0,3,0,0,0,XQ,0,B,[],0,3,0,0,0,Lb,0,Ea,[Et,C2],0,3,0,0,0,Cv,0,B,[],0,3,0,0,0,Nw,0,Lb,[],0,3,0,0,0,Za,0,B,[],0,3,0,0,0,AKe,0,B,[CJ],0,3,0,0,["bH",A4t(ARI),"l3",A4t(AUU)],Ul,0,B,[F$],0,3,0,0,["pM",A4u(AO6)],YL,0,B,[],0,3,0,0,["cK",A4s(AK7),"bH",A4t(ALO)],Jg,0,B,[],3,3,0,0,0,GO,0,B,[Jg,Et],0,0,0,0,["bH",A4t(AVj)],HQ,0,GO,[],0,0,0,0,0,Nt,0,Li,[],1,3,0,0,0,Qh,0,Nt,[],0,3,0,0,0,I0,0,Es,[],0,3,0,0,0,OD,0,B,[IY],0,3,0,0,
["bg",A4t(AS3)],OF,0,B,[Cd],0,3,0,0,["bg",A4t(ASw)],OE,0,B,[Cd],0,3,0,0,["bg",A4t(AUi)],IQ,0,B,[],0,3,0,0,0,Ki,0,CM,[GI,F4],0,3,0,0,["ic",A4t(AWB),"cg",A4t(AZ0),"bP",A4s(ANL),"gW",A4s(A09),"ca",A4u(AKB),"hB",A4t(AVE)],AHk,0,Cu,[],0,3,0,0,["cg",A4t(AKU),"bP",A4s(AME),"ca",A4u(AOO)],AAn,0,Cu,[],0,3,0,0,["cg",A4t(AQb),"bP",A4s(AUM),"ca",A4u(AVX)],WT,0,CM,[CC,CZ],0,3,0,0,["cu",A4u(ASm),"ds",A4u(AK5),"gy",A4u(AOi),"ca",A4u(ANd),"bP",A4s(AVz),"bQ",A4t(AOR),"ct",A4v(ALs)],ZW,0,CM,[CZ],0,3,0,0,["gy",A4u(AMu),"ca",A4u(ALK)],Wj,
0,HG,[CC],0,3,0,0,["bQ",A4t(AW2),"cu",A4u(ASm),"ds",A4u(AK5),"ct",A4v(AY0),"bP",A4s(AZz),"cg",A4t(AKN)],Sf,0,Cu,[],0,3,0,0,["bP",A4s(AKA),"ca",A4u(ATv)],Dq,0,Cu,[],0,3,0,0,["bP",A4s(Zt),"ca",A4u(Sb)],QM,"SelectFileTest",5,Dq,[],0,3,0,0,0,WA,0,CM,[],0,3,0,0,0]);
$rt_metadata([VX,"RenderTexture",5,Dq,[],0,3,0,0,["cg",A4t(ANW),"bP",A4s(AVp),"ca",A4u(A07)],Sd,"ScissorDemo",5,Dq,[],0,3,0,0,["bP",A4s(A1A),"ca",A4u(ANG)],ZL,0,Cu,[],0,3,0,0,["bP",A4s(ASy),"ca",A4u(AVB),"cg",A4t(AZe)],Kc,"ClipboardTest",5,Dq,[CC],0,3,0,0,["bQ",A4t(AW2),"cu",A4u(ASm),"ds",A4u(AK5),"ct",A4v(AOD)],R2,"CodiconDemo",5,Dq,[],0,3,0,0,["bP",A4s(AS$)],GY,0,Cu,[CC],1,3,0,0,["bQ",A4t(AW2),"cu",A4u(ASm),"ds",A4u(AK5),"ct",A4v(AY0),"bP",A4s(AEt)],SI,0,GY,[],0,3,0,0,["cu",A4u(ASm),"ds",A4u(AK5),"ct",A4v(AY0),
"ca",A4u(AY4),"bQ",A4t(AZX)],SH,0,GY,[],0,3,0,0,["cu",A4u(ASm),"ds",A4u(AK5),"ct",A4v(AY0),"bQ",A4t(A1i),"bP",A4s(AMr),"ca",A4u(ALd)],Xk,0,CM,[CZ],0,3,0,0,["gy",A4u(AZ2)],Dx,"WindowDemo",6,CM,[CZ],0,3,[0,0,0],0,["hs",A4s(AU$),"o0",A4s(AOY),"kl",A4t(AHN),"gy",A4u(AZI)],P$,"EditorInViewDemo",5,Dx,[CZ,GI,F4],0,3,[0,0,0],0,["cg",A4t(AU6),"hs",A4s(ALN),"o0",A4s(ATU),"kl",A4t(A1k),"hB",A4t(ARC),"ic",A4t(AQZ)],Wn,0,B,[CC],0,0,0,0,["cu",A4u(ASm),"ds",A4u(AK5),"ct",A4v(AY0),"bQ",A4t(AZw)],KP,0,B,[],3,3,0,0,["rf",A4u(ALx)],Rk,
"ProjectViewDemo",5,Dx,[GI,KP],0,3,[0,0,0],0,["hs",A4s(APY),"kl",A4t(APR),"hB",A4t(AXL),"yC",A4t(ARm),"wD",A4t(AKT),"t5",A4t(ANn),"rf",A4u(AQ_)],Yd,"FileViewDemo",6,Dx,[CZ],0,3,[0,0,0],0,["hs",A4s(AX0),"kl",A4t(AY_)],Oy,0,Ki,[],0,3,0,0,["gW",A4s(AUP)],ABM,0,Cu,[CC],0,3,0,0,["bQ",A4t(AW2),"cu",A4u(ASm),"ds",A4u(AK5),"ct",A4v(AY0),"ca",A4u(A1d),"bP",A4s(AWu),"cg",A4t(ARn)],Td,"FolderDiff",8,Dx,[CZ],0,3,[0,0,0],0,["hs",A4s(A0g)],Pl,"DiffMiddleDemo",8,Dx,[CZ],0,3,[0,0,0],0,["hs",A4s(AVT)],J1,0,B,[],0,3,0,0,0,AEW,
0,B,[],0,3,0,0,0,ADW,0,B,[],3,3,0,0,0,AHe,0,B,[],0,3,0,0,0,AFi,0,B,[],3,3,0,0,0,AGW,0,B,[],0,3,0,0,0,Mo,0,B,[Jg,C2],0,3,0,0,0,Ku,0,Mo,[],0,0,0,0,0,AJ7,0,B,[],0,3,0,0,0,XX,0,B,[Cq],0,3,0,0,["L",A4t(AUA)],XV,0,B,[W],0,3,0,0,["j",A4t(AV6)],XW,0,B,[C6],0,3,0,0,["L",A4t(ARW)],AGS,0,J_,[],0,3,0,0,0,Te,0,B,[CC],0,0,0,0,["bQ",A4t(AUN),"ct",A4v(AKI),"cu",A4u(AUG),"ds",A4u(AUb)],Yl,0,B,[Cq],0,3,0,0,["L",A4t(A0f)],Yk,0,B,[Cq],0,3,0,0,["L",A4t(AYJ)],Yj,0,B,[Ft],0,3,0,0,["hX",A4u(AW8)],Yi,0,B,[Z],0,3,0,0,["f",A4s(ATK)],Yh,
0,B,[C6],0,3,0,0,["L",A4t(AQi)],Yg,0,B,[EE],0,3,0,0,["dq",A4v(A0n)],Hg,0,B0,[],0,3,0,0,0,AFT,0,B,[],3,3,0,0,0,VV,0,B,[CC],0,0,0,0,["bQ",A4t(AW2),"cu",A4u(ASm),"ds",A4u(AK5),"ct",A4v(AM0)],VS,0,B,[],0,3,0,0,0,AFj,0,B,[],0,3,0,0,0,AH4,0,B,[],0,3,0,0,["bH",A4t(AZF)],AAP,0,B,[Cq],0,3,0,0,["L",A4t(APW)],AAL,0,B,[C6],0,3,0,0,["L",A4t(ARG)],AAM,0,B,[Z],0,3,0,0,["f",A4s(A1E)],AAN,0,B,[Z],0,3,0,0,["f",A4s(ALn)],B3,0,B,[],0,3,0,0,0]);
$rt_metadata([TR,0,B,[Cq],0,3,0,0,["L",A4t(AW1)],TS,0,B,[C6],0,3,0,0,["L",A4t(AK6)],AGA,0,B,[],0,3,0,0,0,ON,0,B,[CZ],0,3,0,0,["gy",A4u(AP3)],OM,0,B,[Cq],0,3,0,0,["L",A4t(AYl)],Y2,0,B,[],3,3,0,0,0,AHl,0,B,[Y2],0,3,0,0,0,V6,0,B,[CC],0,0,0,0,["ct",A4v(AY0),"cu",A4u(ATW),"ds",A4u(AK0),"bQ",A4t(AVL)],Zk,0,B,[EE],0,3,0,0,["dq",A4v(AP1)],Qn,0,B,[Cq],0,3,0,0,["L",A4t(APQ)],Q7,0,B,[C6],0,3,0,0,["L",A4t(ATa)],Q6,0,B,[W],0,3,0,0,["j",A4t(AZj)],AAZ,0,B,[CC],0,0,0,0,["ds",A4u(AK5),"ct",A4v(AY0),"bQ",A4t(AYz),"cu",A4u(AS2)],AFo,
0,B,[],0,3,0,0,0,Df,0,B,[],3,3,0,FC,0,XY,0,B,[CC],0,0,0,0,["ct",A4v(AY0),"cu",A4u(AOa),"ds",A4u(AT9),"bQ",A4t(AM5)],Vp,0,B,[EE],0,3,0,0,["dq",A4v(A0k)],ACu,0,B,[Cq],0,3,0,0,["L",A4t(AMk)],ACt,0,B,[Ft],0,3,0,0,["hX",A4u(AXc)],ACs,0,B,[Ft],0,3,0,0,["hX",A4u(AMq)],ACr,0,B,[FN],0,3,0,0,["cV",A4s(APj)],ACw,0,B,[FN],0,3,0,0,["cV",A4s(AZS)],RM,0,B,[Cq],0,3,0,0,["L",A4t(ASH)],YK,0,B,[Cq],0,3,0,0,["L",A4t(ASl)],YJ,0,B,[C6],0,3,0,0,["L",A4t(AOZ)],Pa,0,B,[W],0,3,0,0,["j",A4t(AYx)],Pb,0,B,[C6],0,3,0,0,["L",A4t(AZ_)],WU,
0,B,[C6],0,3,0,0,["L",A4t(AMI)],AGm,0,B,[],3,3,0,0,0,Qu,0,B,[Cq],0,3,0,0,["L",A4t(AOE)],Z_,0,B,[C6],0,3,0,0,["L",A4t(AQP)],TV,0,B,[C6],0,3,0,0,["L",A4t(AQQ)],TU,0,B,[Cq],0,3,0,0,["L",A4t(AQh)],Dn,0,B,[],3,3,0,ANa,0,Cn,0,CG,[],12,3,0,Tp,0,Ke,0,B,[],0,3,0,0,0,IR,0,B,[],0,3,0,0,0,AIU,0,B,[],0,3,0,0,0,DO,0,B,[],3,3,0,ATS,0,Xr,0,B,[BQ],3,3,0,0,0,XE,0,B,[Xr],0,3,0,0,["AS",A4u(AV$)],Xs,0,B,[BQ],3,3,0,0,0,XC,0,B,[Xs],0,3,0,0,["AS",A4u(AWM)],AEe,0,B,[],0,3,0,0,0,AHj,0,B,[BQ],3,3,0,0,0,Uy,0,B,[],0,3,0,0,0,DR,0,B,[],3,
3,0,AXI,0,HU,0,B,[],3,3,0,0,0,PO,0,B,[HU],0,3,0,0,["vU",A4v(AY$)],PP,0,B,[HU],0,3,0,0,0]);
$rt_metadata([Tg,0,B,[W],0,3,0,0,["j",A4t(AYe)],Pu,0,B,[W],0,3,0,0,["j",A4t(AMU)],Pt,0,B,[W],0,3,0,0,["j",A4t(ALA)],Pr,0,B,[W],0,3,0,0,["j",A4t(AKP)],Pp,0,B,[W],0,3,0,0,["j",A4t(A1j)],AG1,0,B,[],0,3,0,0,0,Uc,0,B,[W],0,3,0,0,["j",A4t(AWO)],ABn,0,B,[Cq],0,3,0,0,["L",A4t(ANS)],AJG,0,B,[],0,3,0,0,["bH",A4t(AVb)],IZ,0,B,[],0,3,0,0,0,Ka,0,B,[],4,3,0,0,0,AHG,0,B,[],0,3,0,0,0,Cr,0,CG,[],12,3,0,AEr,0,AKa,0,B,[],0,3,0,0,0,AEL,0,B,[BQ],4,3,0,0,0,AKk,0,B,[],0,3,0,0,0,ADx,0,B,[],3,3,0,0,0,CY,0,B,[BQ],1,3,0,0,0,AI$,0,CY,
[],1,3,0,0,0,AJu,0,CY,[],1,3,0,0,0,AHV,0,CY,[],1,3,0,0,0,AH6,0,CY,[],1,3,0,0,0,AJJ,0,CY,[],1,3,0,0,0,UJ,0,B,[Z],0,3,0,0,["f",A4s(AOw)],HD,0,CG,[],12,3,0,APB,0,Pf,0,B,[BE],0,3,0,0,["ba",A4t(AT$)],YU,0,B,[],0,3,0,0,0,AHD,0,B,[],0,3,0,0,0,Gi,0,B,[],0,3,0,0,0,AFR,0,B,[],0,3,0,0,0,AED,0,B,[],4,3,0,0,0,SW,0,B,[],0,0,0,0,0,AHI,0,B,[],3,3,0,0,0,SK,0,B,[EE],0,3,0,0,["dq",A4v(ASt)],SJ,0,B,[Ft],0,3,0,0,["hX",A4u(A0N)],SM,0,B,[FN],0,3,0,0,["cV",A4s(ANX)],SL,0,B,[C5],0,3,0,0,0,W1,0,B,[CC],0,0,0,0,["cu",A4u(ASm),"ds",A4u(AK5),
"ct",A4v(AY0),"bQ",A4t(A1H)],AEJ,0,B,[BQ],1,3,0,0,0,AGg,0,B,[CZ,FO,C5],0,3,0,0,["vx",A4s(AYa),"tK",A4s(ANm),"gy",A4u(A1o),"ij",A4t(AO_),"cC",A4s(AQX)],Vr,0,B,[W],0,3,0,0,["j",A4t(AWC)],Xq,0,B,[W],0,3,0,0,["j",A4t(ATb)],AAX,0,B,[W],0,3,0,0,["j",A4t(AXQ)],Pw,0,B,[DN],0,3,0,0,["cV",A4s(ATZ)],AI6,0,B,[],3,3,0,0,0,LJ,0,B,[],3,3,0,0,0,QJ,0,B,[LJ],0,3,0,0,["yr",A4t(AUW)],O9,0,B,[BE],0,3,0,0,["ba",A4t(A0r)],AFG,0,B,[],0,3,0,0,0,Qo,0,B,[C5],0,3,0,0,0]);
$rt_metadata([ADA,0,B,[],0,3,0,0,0,Ty,0,B,[],0,3,0,0,0,LW,0,B,[],0,3,0,0,0,R3,0,B,[],3,3,0,0,0,ABu,0,B,[W],0,3,0,0,["j",A4t(AUX)],F8,0,I0,[],0,3,0,0,0,ACG,0,Fs,[],0,3,0,0,0,ACJ,0,B,[W],0,3,0,0,["j",A4t(ATG)],TI,0,B,[W],0,3,0,0,["j",A4t(A0M)],Va,0,B,[Z],0,3,0,0,["f",A4s(AZq)],ACS,0,Eo,[CJ],0,3,0,0,0,Gn,0,B,[],0,0,0,0,0,Jv,0,B,[],4,3,0,0,0,TC,0,B,[],0,3,0,0,0,N_,0,B,[],1,3,0,0,0,ABX,0,B,[CJ],0,3,0,0,["bH",A4t(AKQ),"gp",A4s(ARa),"l3",A4t(AYP)],AET,0,CY,[],1,3,0,0,0,T9,0,B,[Z],0,3,0,0,["f",A4s(ALI)],ADf,0,B,[],
3,3,0,0,0,HT,0,CE,[],1,3,0,0,["cC",A4s(AX6),"dp",A4t(APK),"cg",A4t(AT7),"eY",A4v(AMx),"ct",A4v(A0x),"cu",A4u(AR6),"ds",A4u(A0F),"bQ",A4t(A02),"dq",A4v(AM9)],Qy,0,HT,[F4],0,3,0,0,["AY",A4s(AOr),"hJ",A4s(AWs)],Yo,0,B,[W],0,3,0,0,["j",A4t(AUm)],QX,0,B,[W],0,3,0,0,["j",A4t(AX3)],Fh,0,CE,[],0,3,0,0,0,QS,0,Fh,[FO],0,3,0,0,["vx",A4s(AYa),"tK",A4s(ANm),"cC",A4s(A0K),"le",A4u(AVy),"dp",A4t(ATV),"ov",A4t(AYO),"mx",A4t(AZT),"bQ",A4t(AO3),"cu",A4u(ANf),"ct",A4v(AQ4),"ij",A4t(AZ4)],Ut,0,B,[Z],0,3,0,0,["f",A4s(ASM)],AEq,
0,CE,[],0,3,0,0,["cC",A4s(ARJ),"eY",A4v(Q1),"dp",A4t(AZh),"ct",A4v(AR4),"cu",A4u(ARL),"ds",A4u(AP6),"bQ",A4t(APS),"dq",A4v(AVV),"hJ",A4s(AGV)],PR,0,Fh,[],0,3,0,0,["hJ",A4s(ASU),"ov",A4t(AYU),"dp",A4t(AS8),"mx",A4t(AUa)],Rs,0,B,[W],0,3,0,0,0,TP,0,CE,[],0,3,0,0,0,Zm,0,Eo,[CJ],0,3,0,0,0,AAI,0,B,[W],0,3,0,0,["j",A4t(AON)],ADc,0,B,[Z],0,3,0,0,["f",A4s(AXa)],AC6,0,B,[Z],0,3,0,0,["f",A4s(AYQ)],Um,0,B,[Z],0,3,0,0,["f",A4s(AZC)],AKg,0,HT,[],0,0,0,0,["AY",A4s(AO0)],AAF,0,B,[],0,3,0,0,0,JT,0,B,[],0,3,0,0,0,Oh,0,B,[],3,
3,0,0,0,AAO,0,B,[],0,3,0,0,0,WC,0,B,[Z],0,3,0,0,["f",A4s(ASY)],Rb,0,B,[Z],0,3,0,0,["f",A4s(AP8)],Ph,0,B,[Z],0,3,0,0,["f",A4s(AVo)],Pi,0,B,[Z],0,3,0,0,["f",A4s(ATx)],R_,0,B,[Z],0,3,0,0,["f",A4s(AOT)],PE,0,B,[W],0,3,0,0,["j",A4t(AK3)],PD,0,B,[W],0,3,0,0,["j",A4t(ALj)],K3,0,B,[],0,3,0,0,0,C4,0,Bu,[],0,3,0,0,0,AJi,0,Fs,[],0,3,0,0,0]);
$rt_metadata([AKd,0,B,[],0,3,0,0,0,RJ,0,B,[W],0,3,0,0,["j",A4t(AX7)],AAY,0,B,[W],0,3,0,0,["j",A4t(AWG)],RR,0,B,[W],0,3,0,0,["j",A4t(AVH)],RQ,0,B,[W],0,3,0,0,["j",A4t(A0J)],Fa,0,B,[],3,3,0,0,0,Wx,0,B,[Fa],0,0,0,0,["cy",A4s(B$),"b7",A4s(B_),"oW",A4s(YO)],K9,0,N_,[],1,3,0,0,0,Sx,0,K9,[],0,3,0,0,0,ACn,0,B,[W],0,3,0,0,0,U4,0,B,[W],0,3,0,0,["j",A4t(ASu)],PU,0,B,[DN],0,3,0,0,["cV",A4s(AK9)],PT,0,B,[DN],0,3,0,0,["cV",A4s(AM_)],Rn,0,B,[DN],0,3,0,0,["cV",A4s(A0c)],W2,0,B,[DN],0,3,0,0,["cV",A4s(ATw)],Zs,0,B,[Cd],0,3,0,
0,["bg",A4t(A04)],AEX,0,B,[BQ],1,3,0,0,0,ABQ,0,B,[Cd],0,3,0,0,["bg",A4t(ANt)],AIT,0,B,[BE],0,3,0,0,0,AFm,0,B,[BE],0,3,0,0,0,Wu,0,B,[W],0,3,0,0,["j",A4t(AMi)],Wt,0,B,[W],0,3,0,0,["j",A4t(ARB)],Hh,0,B,[],0,3,0,0,0,Dc,0,Hh,[],0,3,0,0,0,Rp,0,B,[Z],0,3,0,0,["f",A4s(AXm)],Le,0,Fh,[FO],0,3,0,0,["vx",A4s(AYa),"tK",A4s(ANm),"cC",A4s(AQz),"le",A4u(ALp),"dp",A4t(AXF),"ct",A4v(A0j),"cu",A4u(AMl)],AIu,0,Le,[],0,3,0,0,["vx",A4s(AYa),"tK",A4s(ANm)],SP,0,B,[Z],0,3,0,0,["f",A4s(ASo)],AEf,0,B,[],0,3,0,0,0,Uw,0,B,[Z],0,3,0,0,
["f",A4s(AOM)],Uv,0,B,[Z],0,3,0,0,["f",A4s(AK1)],AAj,0,B,[Z],0,3,0,0,["f",A4s(AKu)],AAk,0,B,[Z],0,3,0,0,["f",A4s(ANP)],AGd,0,B,[],0,3,0,0,0,Sc,0,Ea,[Et,C2],0,3,0,0,0,T7,0,B,[],0,3,0,0,0,TQ,0,B,[],0,3,0,0,0,XP,0,B,[Ev],0,3,0,0,0,Sm,0,B,[W],0,3,0,0,["j",A4t(ARD)],XZ,0,Eo,[CJ],0,3,0,0,0,JX,0,B,[],4,3,0,0,0,Tq,0,B,[Z],0,3,0,0,["f",A4s(AK8)],Tr,0,B,[Z],0,3,0,0,["f",A4s(AM7)],Ts,0,B,[Z],0,3,0,0,["f",A4s(A0L)],Tt,0,B,[Z],0,3,0,0,["f",A4s(APf)],Tu,0,B,[Z],0,3,0,0,["f",A4s(ARj)],OC,0,B,[Cd],0,3,0,0,["bg",A4t(A1K)],U7,
0,B,[],3,3,0,A2I,0,Pg,0,CE,[],0,3,0,0,["dp",A4t(AKX)],AFd,0,B,[Me],0,3,0,0,["vx",A4s(AYa),"tK",A4s(ANm),"kX",A4s(ARU),"j$",A4s(A0u),"ht",A4t(ASJ),"uj",A4s(AOP),"pb",A4s(AUd),"oY",A4u(APm),"pN",A4t(AXV),"o6",A4s(Mq)]]);
$rt_metadata([AA6,0,B,[],0,3,0,0,0,S8,0,B,[],3,3,0,AN6,0,ADk,0,B,[F$],0,3,0,0,["pM",A4u(ARp)],AJ9,0,GS,[],0,0,0,0,["tp",A4t(A1w)],QR,0,B,[Z],0,3,0,0,["f",A4s(AXT)],V3,0,B,[Z],0,3,0,0,["f",A4s(AXP)],QA,0,B,[F4],0,3,0,0,["ic",A4t(AZg)],Qz,0,B,[DN],0,3,0,0,["cV",A4s(AVu)],RA,0,B,[Z],0,3,0,0,["f",A4s(AWz)],Ec,0,Bu,[],0,3,0,0,0,WB,0,B,[],0,3,0,0,0,AGl,0,B,[],0,3,0,0,0,Sr,0,B,[],0,0,0,0,0,AD0,0,B,[],3,3,0,0,0,AB9,0,B,[Z],0,3,0,0,["f",A4s(ASV)],XR,0,B,[],1,3,0,0,0,YE,0,B,[Mf],3,3,0,0,0,O7,0,B,[YE],3,3,0,0,0,H9,0,B,
[O7],1,3,0,0,0,Zv,0,H9,[],0,3,0,0,0,QV,0,B,[],3,3,0,0,0,OB,0,B,[W],0,3,0,0,0,ACN,0,B,[W],0,3,0,0,["j",A4t(ALq)],AE5,0,B,[],3,3,0,0,0,Jt,0,GO,[],0,0,0,0,0,H7,0,Bu,[],0,3,0,0,0,AA7,0,B,[HU],0,3,0,0,["vU",A4v(AOX)],ABq,0,B,[W],0,3,0,0,["j",A4t(ART)],ACW,0,B,[Cd],0,3,0,0,["bg",A4t(AZx)],ACV,0,B,[Cd],0,3,0,0,["bg",A4t(AVs)],ACp,0,B,[Cd],0,3,0,0,["bg",A4t(AWg)],ACo,0,B,[Cd],0,3,0,0,["bg",A4t(AWL)],AJn,0,B,[],0,3,0,0,0,QI,0,B,[W],0,3,0,0,["j",A4t(AUr)],ADG,0,B,[W],0,3,0,0,0,U8,0,B,[W],0,3,0,0,["j",A4t(ALB)],ST,0,B,
[Cy],0,3,0,0,["cq",A4t(ATX)],US,0,B,[BE],0,3,0,0,0,FG,0,B,[],0,3,0,0,0,AHw,0,B,[],0,3,0,0,0,AD6,0,B,[],0,3,0,0,0,AKm,0,B,[],0,3,0,0,0,ACH,0,B,[Z],0,3,0,0,["f",A4s(AUe)],ACI,0,B,[Z],0,3,0,0,["f",A4s(AWy)],FT,0,B,[],0,3,0,0,0,Vi,0,B,[W],0,3,0,0,["j",A4t(ANz)],Nv,0,FT,[],0,3,0,0,0,K5,0,FT,[],0,3,0,0,0,Ui,0,B,[W],0,3,0,0,["j",A4t(AUh)],Qq,0,B,[],0,3,0,0,0]);
$rt_metadata([PY,0,B,[W],0,3,0,0,["j",A4t(AXG)],P2,0,B,[Hs],3,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],Fo,0,Fv,[P2],1,3,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],Nb,0,Fo,[],1,0,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],TJ,0,Nb,[],0,0,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],NQ,0,Ea,[],1,0,0,0,0,TG,0,NQ,[],0,0,0,0,0,N5,0,Fi,[Lw],1,0,0,0,["fa",A4t(ATq),"i2",A4s(AVm),"pL",A4t(APw),"pf",A4t(AOA)],TH,0,N5,[],0,0,0,0,["fa",A4t(ATq),"nj",A4t(APD),"cY",A4s(AOS),"b5",A4s(AMM),"ev",A4s(ALb)],TE,0,B,[Fa],0,0,0,0,["cy",A4s(AKV),"b7",A4s(AYt),"oW",
A4s(ARt)],XO,0,B,[Fa],3,3,0,0,0,TF,0,B,[XO],0,0,0,0,0,VA,0,B,[F$],0,3,0,0,0,QT,0,B,[Ev],0,3,0,0,["L",A4t(A1M)],Kg,0,Ec,[],0,3,0,0,0,Jz,0,Bu,[],0,3,0,0,0,NZ,0,Bu,[],0,3,0,0,0,XI,0,B,[W],0,3,0,0,["j",A4t(AYu)],AG2,0,B,[W],0,3,0,0,0,ABz,0,B,[W],0,3,0,0,["j",A4t(ALH)],QH,0,B,[QV],0,3,0,0,0,ZJ,0,B,[Z],0,3,0,0,["f",A4s(AUf)],G3,0,B,[],0,3,0,0,0,P_,0,Fo,[],0,0,0,0,["pf",A4t(AWW)],S_,0,Fo,[],0,0,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],Qa,0,Fv,[],0,0,0,0,["fa",A4t(ATq),"pf",A4t(AWW)],VD,0,B,[W],0,3,0,0,["j",A4t(AVO)],Tv,0,
B,[W],0,3,0,0,["j",A4t(AXn)],Kk,0,B,[],0,3,0,0,["bH",A4t(AI3)],L9,0,Kk,[],0,3,0,0,["bH",A4t(AUB)],E3,0,B,[],0,3,0,0,["bH",A4t(AHz)],HB,0,E3,[],0,3,0,0,0,J5,0,E3,[],0,3,0,0,["bH",A4t(A0Q)],Jd,0,E3,[],0,3,0,0,["bH",A4t(AT2)],AEA,0,H9,[],0,3,0,0,0,RE,0,B,[Z],0,3,0,0,["f",A4s(AN5)],RF,0,B,[Z],0,3,0,0,["f",A4s(AL6)],RC,0,B,[Z],0,3,0,0,["f",A4s(ALf)],RD,0,B,[Z],0,3,0,0,["f",A4s(ANZ)],Q$,0,B,[Z],0,3,0,0,["f",A4s(AY1)],Q9,0,B,[Z],0,3,0,0,["f",A4s(AYd)],Q8,0,B,[Z],0,3,0,0,["f",A4s(ATk)],P4,0,B,[Z],0,3,0,0,["f",A4s(AP9)],QG,
0,B,[],3,3,0,0,0,X_,0,B,[Z],0,3,0,0,["f",A4s(ALX)],SD,0,B,[G_],0,3,0,0,["pR",A4u(ANy)],VT,0,B,[],0,3,0,0,0,Rd,0,B,[],0,3,0,0,0,Rx,0,B,[W],0,3,0,0,["j",A4t(AQG)],WH,0,B,[W],0,3,0,0,["j",A4t(AU9)]]);
$rt_metadata([Ub,0,B,[LJ],0,3,0,0,["yr",A4t(Ng)],ACj,0,BG,[],0,3,0,0,0,OZ,0,B,[Z],0,3,0,0,["f",A4s(AWV)],O0,0,B,[Z],0,3,0,0,["f",A4s(A0h)],OY,0,B,[Z],0,3,0,0,["f",A4s(ATp)],UA,0,B,[Z],0,3,0,0,["f",A4s(AO9)],Uz,0,B,[Z],0,3,0,0,["f",A4s(AZf)],Xx,0,B,[DN],0,3,0,0,["cV",A4s(AMy)],Zy,0,B,[Z],0,3,0,0,["f",A4s(AOb)],Zz,0,B,[Z],0,3,0,0,["f",A4s(AZ5)],Vg,0,B,[Z],0,3,0,0,["f",A4s(AKE)],Vb,0,B,[Z],0,3,0,0,["f",A4s(AOc)],Vc,0,B,[Z],0,3,0,0,["f",A4s(ASQ)],Vd,0,B,[Z],0,3,0,0,["f",A4s(AXv)],Ve,0,B,[Z],0,3,0,0,["f",A4s(AWn)],Ox,
0,B,[DN],0,3,0,0,["cV",A4s(AR9)],Tw,0,B,[G_],0,3,0,0,["pR",A4u(AQ8)],Xf,0,B,[L0],3,3,0,0,0,ABA,0,B,[Xf],0,0,0,0,["oK",A4s(Hi),"sH",A4s(A0P),"cK",A4s(AEC)],AGJ,0,B,[CJ],0,3,0,0,["bH",A4t(AP_)],V5,0,B,[W],0,3,0,0,["j",A4t(AXl)],Vs,0,B,[W],0,3,0,0,["j",A4t(A1J)],S1,0,B,[HU],0,3,0,0,0,FA,0,B,[],0,0,0,0,0,ZQ,0,FA,[Fa],0,0,0,0,0,S4,0,FA,[Fa],0,0,0,0,0,YV,0,FA,[Fa],0,0,0,0,0,ADY,0,B,[W],0,0,0,0,0,YT,0,B,[C2],4,3,0,0,0,Zq,0,B,[W],0,3,0,0,["j",A4t(APt)],Zp,0,B,[W],0,3,0,0,["j",A4t(AYR)],W5,0,B,[W],0,3,0,0,["j",A4t(AVf)],HS,
0,B,[],3,3,0,0,0,SE,0,B,[HS],0,3,0,0,["lx",A4v(AXH)],SF,0,B,[HS],0,3,0,0,["lx",A4v(AWr)],IO,0,B,[C2,CJ],0,3,0,0,0,KE,0,B,[],3,3,0,0,0,Rz,0,B,[KE],0,3,0,0,0,Xj,0,B,[KE],3,3,0,0,0,AE6,0,B,[Xj],0,3,0,0,0,RV,0,B,[HS],0,3,0,0,["lx",A4v(AYb)],RU,0,B,[Ev],0,3,0,0,["L",A4t(ASG)],RT,0,B,[Ev],0,3,0,0,["L",A4t(AQY)],RX,0,B,[HS],0,3,0,0,["lx",A4v(AXO)],Gz,0,CG,[],12,0,0,R9,0,ADn,0,B,[W],0,3,0,0,["j",A4t(AV0)],BP,0,B,[],1,0,0,0,["cm",A4v(IA),"cw",A4w(IH),"iL",A4s(AUL),"S",A4t(ASd),"bZ",A4t(A0l),"gl",A4s(A05),"eI",A4s(Kj)],V_,
0,B,[Z],0,3,0,0,["f",A4s(ANM)],Vt,0,B,[W],0,3,0,0,["j",A4t(AYf)],Vu,0,B,[W],0,3,0,0,["j",A4t(ANj)]]);
$rt_metadata([W4,0,B,[W],0,3,0,0,["j",A4t(APG)],Ih,0,Dc,[],0,3,0,0,0,AAq,0,B,[],32,0,0,A3L,0,Rr,0,B,[W],0,3,0,0,["j",A4t(ANo)],Sa,0,B,[W],0,3,0,0,["j",A4t(AQ1)],CW,0,BP,[],0,0,0,Oi,["c",A4v(ALo),"H",A4t(ALD)],GZ,0,B,[],0,0,0,0,0,J6,0,BR,[],0,3,0,0,0,Pn,0,B,[Z],0,3,0,0,["f",A4s(ATT)],ADg,0,B,[KP],0,0,0,0,["rf",A4u(ALx),"yC",A4t(AVC),"wD",A4t(AMm),"t5",A4t(AMR)],Ry,0,CW,[],0,0,0,0,["c",A4v(ATY),"H",A4t(AZm)],AC_,0,CW,[],0,0,0,0,["c",A4v(AU7)],Qs,0,CW,[],0,0,0,0,["c",A4v(ALL)],Se,0,CW,[],0,0,0,0,["c",A4v(AT1),
"H",A4t(AYv)],F0,0,CW,[],0,0,0,0,["c",A4v(ASq)],Cb,0,BP,[],1,0,0,0,["c",A4v(A1t),"b8",A4s(AZZ),"H",A4t(AOj)],AGh,0,Cb,[],0,0,0,0,["by",A4u(AZE),"cm",A4v(AVU),"cw",A4w(AU3),"H",A4t(AT0)],B7,0,BP,[],0,0,0,0,["c",A4v(ANB),"S",A4t(AQr),"bZ",A4t(AXh),"H",A4t(AQT),"eI",A4s(AL5)],Kf,0,B7,[],0,0,0,0,["c",A4v(AQf),"H",A4t(AY3)],D7,0,Kf,[],0,0,0,0,["c",A4v(AVq),"S",A4t(AYW)],VO,0,D7,[],0,0,0,0,["c",A4v(AQp),"H",A4t(ASi)],AB1,0,D7,[],0,0,0,0,["c",A4v(ALz),"H",A4t(AZ1)],YW,0,D7,[],0,0,0,0,["c",A4v(AL3),"H",A4t(A1G)],Sy,
0,D7,[],0,0,0,0,["c",A4v(ATE),"H",A4t(AZb)],HN,0,B7,[],0,0,0,0,["c",A4v(AKS),"cm",A4v(APb),"cw",A4w(AZo),"bZ",A4t(AXf),"gl",A4s(AYs),"eI",A4s(ASN)],Kq,0,Dc,[],0,3,0,0,0,G1,0,B,[],1,0,0,0,0,Y,0,G1,[],1,0,0,PS,["dL",A4s(AUw),"fG",A4s(AUc),"lD",A4s(AZV),"ig",A4s(A00)],AD_,0,Y,[],0,0,0,0,["o",A4t(C9),"dL",A4s(C1),"fG",A4s(AVP),"lD",A4s(AR5),"cK",A4s(AXR),"ig",A4s(ANe)],Mx,0,Bu,[],0,3,0,0,0,Ei,0,BP,[],1,0,0,0,["bZ",A4t(ARr),"H",A4t(A0t),"eI",A4s(APr)],C$,0,Ei,[],0,0,0,0,["c",A4v(ATF)],FL,0,C$,[],0,0,0,0,["c",A4v(AUl)],CX,
0,Ei,[],0,0,0,0,["c",A4v(ATQ)],E2,0,C$,[],0,0,0,0,["c",A4v(AXu),"S",A4t(ATm)],Ur,0,C$,[],0,0,0,0,["c",A4v(A1q),"cm",A4v(APP)],Bf,0,B,[],1,0,0,0,0,Ds,0,BR,[],0,3,0,0,0,VY,0,G1,[Et],0,0,0,0,["cK",A4s(AXX)],W0,0,BP,[],0,0,0,0,["c",A4v(AOB),"H",A4t(AYr)],ACD,0,B,[Et,C2],0,3,0,0,0,OG,0,B7,[],0,0,0,0,0,QP,0,B7,[],0,0,0,0,["c",A4v(ALm),"S",A4t(AYk),"H",A4t(ALP),"bZ",A4t(ALC)],D1,0,B7,[],0,0,0,0,["c",A4v(AVJ),"o",A4t(ANr),"bZ",A4t(ALi),"S",A4t(AZP),"H",A4t(AM6)],Mu,0,D1,[],0,0,0,0,["o",A4t(AOk)],AD5,0,Cb,[],0,0,0,0,
["by",A4u(AW4)],EA,0,Cb,[],0,0,0,0,["by",A4u(VF),"bZ",A4t(AQt)],Xm,0,B7,[],0,0,0,0,["S",A4t(APh),"c",A4v(AKD),"bZ",A4t(AUD),"H",A4t(AR$)],EG,0,Cb,[],0,0,0,0,["b8",A4s(AWU),"by",A4u(ANK),"cm",A4v(AMS),"cw",A4w(AOx),"bZ",A4t(AR2)],AGF,0,Cb,[],0,0,0,0,["by",A4u(ATs)]]);
$rt_metadata([ADt,0,Cb,[],0,0,0,0,["by",A4u(AKL)],FQ,0,B7,[],0,0,0,0,["S",A4t(A08),"c",A4v(AQe),"bZ",A4t(AOC),"H",A4t(AYX)],UX,0,FQ,[],0,0,0,0,0,AAx,0,FQ,[],0,0,0,0,0,VC,0,CX,[],0,0,0,0,["c",A4v(AVa)],X0,0,CX,[],0,0,0,0,["c",A4v(AXJ)],Gu,0,CX,[],0,0,0,0,["c",A4v(AZN),"S",A4t(A0E)],Qe,0,Gu,[],0,0,0,0,["c",A4v(AOt),"S",A4t(AXZ)],Ge,0,CX,[],0,0,0,0,["c",A4v(A1D)],OT,0,Ge,[],0,0,0,0,["c",A4v(AN1)],Rt,0,CX,[],0,0,0,0,["c",A4v(AST)],Yz,0,Gu,[],0,0,0,0,["c",A4v(ALQ)],Tc,0,Ge,[],0,0,0,0,["c",A4v(AT6)],Ru,0,Ei,[],0,
0,0,0,["c",A4v(A1u),"cm",A4v(ARO)],W7,0,Ei,[],0,0,0,0,["c",A4v(AQu),"cm",A4v(AKF)],Fu,0,B,[],1,0,0,0,0,ADq,0,C$,[],0,0,0,0,["c",A4v(ALa)],Un,0,E2,[],0,0,0,0,["c",A4v(APF)],Xz,0,FL,[],0,0,0,0,["c",A4v(AZr)],Yy,0,C$,[],0,0,0,0,["c",A4v(AQq)],AAJ,0,E2,[],0,0,0,0,["c",A4v(ALg)],Rh,0,FL,[],0,0,0,0,["c",A4v(AZG)],K8,0,BP,[],4,0,0,0,["c",A4v(AXg),"H",A4t(AWK)],AEo,0,BP,[],0,0,0,0,["c",A4v(AUu),"H",A4t(AUC)],W3,0,BP,[],0,0,0,0,["c",A4v(AOm),"H",A4t(ATf)],UR,0,BP,[],4,0,0,0,["c",A4v(AYK),"H",A4t(AU4)],ACm,0,BP,[],0,
0,0,0,["c",A4v(AYi),"H",A4t(ATr)],Wf,0,BP,[],0,0,0,0,["c",A4v(AUZ),"H",A4t(ANx)],AGr,0,B7,[],0,0,0,0,["c",A4v(ASW),"S",A4t(AUF),"iL",A4s(AX5),"H",A4t(AUE)],AD$,0,B7,[],4,0,0,0,["c",A4v(AYc),"S",A4t(AZi),"iL",A4s(AKr),"H",A4t(AS7)],AJT,0,BP,[],4,0,0,0,["c",A4v(AOF),"H",A4t(AV8)],AI0,0,BP,[],0,0,0,0,["c",A4v(AQa),"H",A4t(AV2)],AHb,0,BP,[],0,0,0,0,["c",A4v(AWF),"H",A4t(AMb)],H$,0,B7,[],0,0,0,0,["c",A4v(ALc),"S",A4t(AYT),"H",A4t(AQ$)],AJZ,0,H$,[],0,0,0,0,["c",A4v(AMf),"cm",A4v(ASg),"cw",A4w(AKZ),"bZ",A4t(AXE)],AIm,
0,H$,[],0,0,0,0,["c",A4v(AO8)],PA,0,GJ,[JA],0,3,0,0,["pp",A4w(ANh),"oO",A4v(AUx),"jJ",A4t(AUS),"pG",A4u(AZY)],Y$,0,Cb,[],0,0,0,0,["by",A4u(AMs),"cm",A4v(AUs),"cw",A4w(AWa),"bZ",A4t(ANQ)],ADs,0,Cb,[],0,0,0,0,["by",A4u(APc)],OW,0,Cb,[],0,0,0,0,["by",A4u(AZs)],Hc,0,B,[],4,0,0,ARh,0,VJ,0,Cb,[],0,0,0,0,["by",A4u(ARw)],NA,0,B7,[],0,0,0,0,["S",A4t(AYp),"c",A4v(AU5),"cm",A4v(ANO),"cw",A4w(AVt),"bZ",A4t(AKY),"H",A4t(ARX)],NI,0,B7,[],0,0,0,0,["S",A4t(AUR),"c",A4v(AKH),"cm",A4v(AYy),"cw",A4w(ARs),"bZ",A4t(AMt),"H",A4t(AYF)],Eb,
0,Cb,[],0,0,0,0,["by",A4u(AY5),"cm",A4v(AXS),"cw",A4w(ALV),"bZ",A4t(AYZ)],ABw,0,Fu,[],0,0,0,0,["iF",A4t(AL0),"zc",A4u(AQ7)],ABx,0,Fu,[],0,0,0,0,["iF",A4t(AZH),"zc",A4u(ASI)],AFS,0,B,[],0,0,0,0,0,ADE,0,B,[],0,0,0,0,0,Ny,0,Bf,[],0,0,0,0,["F",A4s(AIs)]]);
$rt_metadata([MY,0,Bf,[],0,0,0,0,["F",A4s(AIW)],AFL,0,Bf,[],0,0,0,0,["F",A4s(AZl)],AF6,0,Bf,[],0,0,0,0,["F",A4s(ARZ)],AF8,0,Bf,[],0,0,0,0,["F",A4s(AMX)],Nu,0,Bf,[],0,0,0,0,["F",A4s(AEb)],LC,0,Nu,[],0,0,0,0,["F",A4s(AEG)],AG4,0,Bf,[],0,0,0,0,["F",A4s(AWp)],On,0,LC,[],0,0,0,0,["F",A4s(AG_)],AIC,0,On,[],0,0,0,0,["F",A4s(APs)],AE9,0,Bf,[],0,0,0,0,["F",A4s(AVi)],AEk,0,Bf,[],0,0,0,0,["F",A4s(APp)],AHU,0,Bf,[],0,0,0,0,["F",A4s(ASL)],AJI,0,Bf,[],0,0,0,0,["F",A4s(AX2)],AG7,0,Bf,[],0,0,0,0,["F",A4s(ATy)],AJq,0,Bf,[],
0,0,0,0,["F",A4s(AN7)],AFC,0,Bf,[],0,0,0,0,["F",A4s(ARd)],AGi,0,Bf,[],0,0,0,0,["F",A4s(AVg)],ADQ,0,Bf,[],0,0,0,0,["F",A4s(AMD)],AHi,0,Bf,[],0,0,0,0,["F",A4s(A0V)],AJx,0,Bf,[],0,0,0,0,["F",A4s(ATt)],AF1,0,Bf,[],0,0,0,0,["F",A4s(AOG)],AIc,0,Bf,[],0,0,0,0,["F",A4s(AMJ)],AE_,0,Bf,[],0,0,0,0,["F",A4s(AWc)],AGO,0,Bf,[],0,0,0,0,["F",A4s(AXb)],AJC,0,Bf,[],0,0,0,0,["F",A4s(AR_)],AEQ,0,Bf,[],0,0,0,0,["F",A4s(AQM)],AEw,0,Bf,[],0,0,0,0,["F",A4s(APT)],AG5,0,Bf,[],0,0,0,0,["F",A4s(AZd)],Kr,0,Bf,[],0,0,0,0,["F",A4s(AE$)],AJQ,
0,Kr,[],0,0,0,0,["F",A4s(APL)],AIH,0,Ny,[],0,0,0,0,["F",A4s(AUq)],AEu,0,MY,[],0,0,0,0,["F",A4s(ANH)],AHX,0,Bf,[],0,0,0,0,["F",A4s(AOV)],AH8,0,Bf,[],0,0,0,0,["F",A4s(ASA)],AIw,0,Bf,[],0,0,0,0,["F",A4s(AV1)],AID,0,Bf,[],0,0,0,0,["F",A4s(AKw)],AH0,0,B,[],4,0,0,0,0,AD4,0,B,[],4,3,0,0,0,Wi,0,B,[],0,3,0,0,0,AFW,0,B,[],0,3,0,0,0,AIj,0,B,[],4,3,0,0,0,Ml,0,Bu,[],0,3,0,0,0,AB3,0,B,[W],0,3,0,0,["j",A4t(AKy)],AB2,0,B,[W],0,3,0,0,["j",A4t(ASa)],AHO,0,B,[Ev],0,3,0,0,0,R0,0,B,[W],0,3,0,0,["j",A4t(AV7)],Rl,0,B,[W],0,3,0,0,
["j",A4t(AL8)],ABs,0,B,[Ev],0,0,0,0,["L",A4t(AM1)],AAT,0,B,[W],0,3,0,0,0,AAV,0,B,[W],0,3,0,0,["j",A4t(A0H)]]);
$rt_metadata([Kx,0,B,[],3,3,0,0,0,Po,0,B,[Kx],0,0,0,0,["th",A4t(AYV),"wv",A4t(AWw),"vw",A4s(ARx)],AAl,0,B,[W],0,3,0,0,0,ABb,0,B,[W],0,3,0,0,0,AAc,0,B,[Z],0,3,0,0,["f",A4s(AVS)],Uq,0,Y,[],0,0,0,0,["o",A4t(AM3)],Uo,0,Y,[],0,0,0,0,["o",A4t(ATP)],PK,0,Y,[],0,0,0,0,["o",A4t(AOL),"cK",A4s(AWe)],Xb,0,Y,[],0,0,0,0,["o",A4t(AY8)],W_,0,Y,[],0,0,0,0,["o",A4t(ARv)],Xa,0,Y,[],0,0,0,0,["o",A4t(AXr)],Xe,0,Y,[],0,0,0,0,["o",A4t(AVA)],Xg,0,Y,[],0,0,0,0,["o",A4t(AKs)],Xc,0,Y,[],0,0,0,0,["o",A4t(AND)],Xd,0,Y,[],0,0,0,0,["o",A4t(APg)],Xh,
0,Y,[],0,0,0,0,["o",A4t(ASj)],Xi,0,Y,[],0,0,0,0,["o",A4t(AVc)],PJ,0,Y,[],0,0,0,0,["o",A4t(A1N)],P6,0,Y,[],0,0,0,0,["o",A4t(ANF)],PH,0,Y,[],0,0,0,0,["o",A4t(AMj)],PI,0,Y,[],0,0,0,0,["o",A4t(AV5)],PN,0,Y,[],0,0,0,0,["o",A4t(AOo)],PG,0,Y,[],0,0,0,0,["o",A4t(AZ8)],PL,0,Y,[],0,0,0,0,["o",A4t(AUz)],PM,0,Y,[],0,0,0,0,["o",A4t(AQF)],L2,0,B,[],3,3,0,0,0,ZE,0,B,[L2],4,3,0,0,0,AIJ,0,B,[G_],0,3,0,0,0,C8,0,B,[],3,3,0,AF$,0,Cx,0,CG,[],12,3,0,AFx,0,DY,0,B,[],3,3,0,AT4,0,ABT,0,B,[],0,3,0,0,0,OP,0,HN,[],0,0,0,0,["cm",A4v(ANl),
"cw",A4w(A1C),"gl",A4s(AL$)],QL,0,Bu,[],0,3,0,0,0,UV,0,Bu,[],0,3,0,0,0,Tx,0,F8,[],0,3,0,0,0,QF,0,F8,[],0,3,0,0,0,UT,0,B,[Cd],0,3,0,0,["bg",A4t(AWb)],UU,0,B,[Cd],0,3,0,0,["bg",A4t(AUy)],ABm,0,B,[],0,3,0,0,0,AD3,0,B,[],3,3,0,0,0,ADM,0,B,[],0,3,0,0,0,XN,0,B,[W],0,3,0,0,["j",A4t(AW7)],ABF,0,B,[Cd],0,3,0,0,["bg",A4t(AQO)],ABH,0,B,[Cd],0,3,0,0,["bg",A4t(AP0)],ABI,0,B,[Cd],0,0,0,0,["bg",A4t(AQU)],WX,0,B,[Z],0,3,0,0,0,Z5,0,B,[Kx],0,0,0,0,["th",A4t(A0i),"wv",A4t(ASh),"vw",A4s(A0C)],ABp,0,B,[L2],0,0,0,0,0,S3,0,B,[Cd],
0,3,0,0,["bg",A4t(AXk)]]);
$rt_metadata([ABB,0,B,[Z],0,3,0,0,["f",A4s(AYC)],Z7,0,Y,[],0,0,0,0,["o",A4t(ASp)],VR,0,Y,[],0,0,0,0,["o",A4t(AUo)],RH,0,Y,[],0,0,0,0,["o",A4t(ALe)],RG,0,Y,[],0,0,0,0,["o",A4t(AVZ)],UG,0,Y,[],0,0,0,0,["o",A4t(AOf)],Xw,0,Y,[],0,0,0,0,["o",A4t(A0B)],Px,0,Y,[],0,0,0,0,["o",A4t(AQl)],YI,0,Y,[],0,0,0,0,["o",A4t(ARg)],VN,0,Y,[],0,0,0,0,["o",A4t(A1r)],VP,0,Y,[],0,0,0,0,["o",A4t(AMv)],Pc,0,Y,[],0,0,0,0,["o",A4t(ASx)],XM,0,Y,[],0,0,0,0,["o",A4t(AXz)],XT,0,Y,[],0,0,0,0,["o",A4t(AYS)],AAr,0,Y,[],0,0,0,0,["o",A4t(A0p)],ZF,
0,Y,[],0,0,0,0,["o",A4t(ASR)],OK,0,Y,[],0,0,0,0,["o",A4t(AMp)],Ma,0,Y,[],0,0,0,0,["o",A4t(AQm)],Zd,0,Ma,[],0,0,0,0,["o",A4t(AZQ)],ACR,0,B,[BQ],3,3,0,0,0,Ye,0,B,[ACR],0,3,0,0,["Hx",A4s(AO2)],AFl,0,B,[BQ],3,3,0,0,0,Rg,0,B,[Z],0,3,0,0,["f",A4s(A0X)],AHC,0,B,[],0,0,0,0,0,ACv,0,B,[Z],0,3,0,0,["f",A4s(AVM)],ABK,0,B,[W],0,3,0,0,["j",A4t(AX9)],ABL,0,B,[W],0,3,0,0,["j",A4t(AWN)]]);
function $rt_array(cls,data){this.Vx=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#F7F8FA","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","ClassL.java","ClassR.java","selectScene ","CodiconDemo",
"RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","TwoWindowsDemo","ClipboardTest","FolderDiff","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas",
"#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","text","java","cpp","js","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","font pow >","Development >","  ","Set editor font to: ",
", ascent+descent = ",", lineHeight = ",", caretHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel","ns-resize","ew-resize","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile",
"ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","File is too large: "," name: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |",
"paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","","codicon.pixel.size = ","w = ","Window 1","Window 2","Open project...","request new model, file = ","request in progress ","Project root","FileTreeView model size = ","Select left...","Select right...","#616161","#BBBBBB",
"wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana",
"toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","Open project ...","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ",
"  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA","nwse-resize","nesw-resize",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: "," writeClipboardText \'",
"\' ok","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Folder ","ClassFile ","Expected "," ints to write, but "," written","open file ","Int","Iter","VP","Resolve","Rep","No definition or usages","fileHandle = "," - project view"," ints to read, but "," read","fib(",") result = ",") time = ","open dir = ","Unknown scope type: ","/Resolved in ","readClipboardText error: ",
"Unexpected type: ","Unexpected ref node type: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","opening file ... ","folderOpened ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase",
"javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement",
"Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures",
"OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","  sub dir: ","  file: ","complete","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1",
"#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","file = ","file.content.length = ","Error fetching file "]);
BK.prototype.toString=function(){return $rt_ustr(this);};
BK.prototype.valueOf=BK.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ALT(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CO=Long_add;var JE=Long_sub;var Ch=Long_mul;var AFV=Long_div;var ATL=Long_rem;var A1$=Long_or;var Db=Long_and;var A8l=Long_xor;var HK=Long_shl;var A3t=Long_shr;var F6=Long_shru;var A8m=Long_compare;var IC=Long_eq;var A8n=Long_ne;var A17=Long_lt;var AMN=Long_le;var A8o=Long_gt;var A16=Long_ge;var A8p=Long_not;var A3E=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A3F);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=AAz.prototype;c.f=c.bg;c=AAA.prototype;c.f=c.bg;c=AAy.prototype;c.f=c.bg;c=V8.prototype;c.f=c.bg;c=AIG.prototype;c.get=c.Ks;Object.defineProperty(c,"length",{get:c.QF});c=AHr.prototype;c.createEntityReference=c.M2;c.getElementById=c.Pe;c.createTextNode=c.O0;c.hasChildNodes=c.N4;c.querySelectorAll=c.MK;c.removeChild=c.Qr;c.cloneNode=c.Fl;c.createComment=c.RB;c.insertBefore=c.Ni;c.getElementsByTagNameNS=c.QD;c.hasAttributes=c.HW;c.normalize=c.KY;c.hasChildNodesJS=c.KR;c.getElementsByTagName
=c.Kr;c.appendChild=c.LT;c.createAttributeNS=c.Pw;c.dispatchEvent=c.KD;c.replaceChild=c.FN;c.createElementNS=c.GV;c.createCDATASection=c.JN;c.querySelector=c.HV;c.createElement=c.P1;c.isSupported=c.Qv;c.importNode=c.Nt;c.removeEventListener=c.GR;c.createAttribute=c.KE;c.createDocumentFragment=c.EJ;c.createProcessingInstruction=c.MW;c.addEventListener=c.I8;Object.defineProperty(c,"nodeName",{get:c.LS});Object.defineProperty(c,"documentElement",{get:c.HA});Object.defineProperty(c,"childNodes",{get:c.Jw});Object.defineProperty(c,
"prefix",{get:c.Nz,set:c.RM});Object.defineProperty(c,"implementation",{get:c.J7});Object.defineProperty(c,"textContent",{get:c.RG,set:c.OY});Object.defineProperty(c,"parentNode",{get:c.Pb});Object.defineProperty(c,"nextSibling",{get:c.Hr});Object.defineProperty(c,"nodeType",{get:c.Qd});Object.defineProperty(c,"doctype",{get:c.Oh});Object.defineProperty(c,"localName",{get:c.QW});Object.defineProperty(c,"nodeValue",{get:c.G_,set:c.Rt});Object.defineProperty(c,"firstChild",{get:c.Kz});Object.defineProperty(c,
"lastChild",{get:c.Je});Object.defineProperty(c,"previousSibling",{get:c.LF});Object.defineProperty(c,"namespaceURI",{get:c.F7});Object.defineProperty(c,"attributes",{get:c.NG});Object.defineProperty(c,"ownerDocument",{get:c.Gd});c=Pd.prototype;c.f=c.bg;c=AHR.prototype;c.removeEventListener=c.Gg;c.dispatchEvent=c.No;c.addEventListener=c.II;c=TN.prototype;c.onAnimationFrame=c.HX;c=TM.prototype;c.f=c.AS;c=TK.prototype;c.handleEvent=c.cq;c=ZC.prototype;c.f=c.bg;c=AB_.prototype;c.handleEvent=c.cq;c=ACa.prototype;c.handleEvent
=c.cq;c=ACb.prototype;c.handleEvent=c.cq;c=ACc.prototype;c.handleEvent=c.cq;c=ACd.prototype;c.handleEvent=c.cq;c=ACe.prototype;c.handleEvent=c.cq;c=ACf.prototype;c.handleEvent=c.cq;c=ACg.prototype;c.handleEvent=c.cq;c=ACh.prototype;c.handleEvent=c.cq;c=ACi.prototype;c.handleEvent=c.cq;c=Vk.prototype;c.handleEvent=c.cq;c=Vl.prototype;c.handleEvent=c.cq;c=Vm.prototype;c.handleEvent=c.cq;c=Vn.prototype;c.handleEvent=c.cq;c=AA4.prototype;c.handleEvent=c.cq;c=AC3.prototype;c.f=c.bg;c=AC4.prototype;c.f=c.bg;c=We.prototype;c.f
=c.bg;c=Wd.prototype;c.f=c.bg;c=Wb.prototype;c.f=c.bg;c=Wa.prototype;c.f=c.bg;c=O_.prototype;c.accept=c.KK;c=OD.prototype;c.f=c.bg;c=OF.prototype;c.f=c.bg;c=OE.prototype;c.f=c.bg;c=XE.prototype;c.f=c.AS;c=XC.prototype;c.f=c.AS;c=Zs.prototype;c.f=c.bg;c=ABQ.prototype;c.f=c.bg;c=OC.prototype;c.f=c.bg;c=ACW.prototype;c.f=c.bg;c=ACV.prototype;c.f=c.bg;c=ACp.prototype;c.f=c.bg;c=ACo.prototype;c.f=c.bg;c=ST.prototype;c.handleEvent=c.cq;c=UT.prototype;c.f=c.bg;c=UU.prototype;c.f=c.bg;c=ABF.prototype;c.f=c.bg;c=ABH.prototype;c.f
=c.bg;c=ABI.prototype;c.f=c.bg;c=S3.prototype;c.f=c.bg;c=Ye.prototype;c.onTimer=c.Hx;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);