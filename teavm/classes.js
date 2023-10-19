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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.ft=f;}
function $rt_cls(cls){return AES(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gf(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.ca.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ASj(t);}
function $rt_throwableCause(t){return ASr(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AYG());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AYH(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AYI());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BG=$rt_compare;var AYJ=$rt_nullCheck;var F=$rt_cls;var R=$rt_createArray;var Ji=$rt_isInstance;var AYK=$rt_nativeThread;var AYL=$rt_suspending;var AYM=$rt_resuming;var AYN=$rt_invalidPointer;var C=$rt_s;var Bq=$rt_eraseClinit;var W=$rt_imul;var Er=$rt_wrapException;var AYO=$rt_checkBounds;var AYP=$rt_checkUpperBound;var AYQ=$rt_checkLowerBound;var AYR=$rt_wrapFunction0;var AYS=$rt_wrapFunction1;var AYT=$rt_wrapFunction2;var AYU=$rt_wrapFunction3;var AYV=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var ADB=$rt_createCharArrayFromData;var AXk=$rt_createByteArrayFromData;var AYC=$rt_createShortArrayFromData;var Em=$rt_createIntArrayFromData;var AYW=$rt_createBooleanArrayFromData;var AYX=$rt_createFloatArrayFromData;var AYY=$rt_createDoubleArrayFromData;var ABU=$rt_createLongArrayFromData;var AYF=$rt_createBooleanArray;var D8=$rt_createByteArray;var AYZ=$rt_createShortArray;var BV=$rt_createCharArray;var BM=$rt_createIntArray;var AY0=$rt_createLongArray;var AHU=$rt_createFloatArray;var AY1
=$rt_createDoubleArray;var BG=$rt_compare;var AY2=$rt_castToClass;var AY3=$rt_castToInterface;var AY4=Long_toNumber;var Bp=Long_fromInt;var AY5=Long_fromNumber;var D=Long_create;var Fa=Long_ZERO;var AY6=Long_hi;var GD=Long_lo;
function B(){this.$id$=0;}
function AY7(){var a=new B();AF6(a);return a;}
function AF6(a){}
function BI(a){return AES(a.constructor);}
function AO6(a,b){return a!==b?0:1;}
function AJR(a){var b,c,d,e,f,g,h,i,j;b=JM(a);if(!b)c=C(0);else{d=(((32-O2(b)|0)+4|0)-1|0)/4|0;e=BV(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=HL((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gf(e);}j=new M;O(j);H(H(j,C(1)),c);return N(j);}
function JM(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AOk(a){var b,c,d;if(!Ji(a,Eg)&&a.constructor.$meta.item===null){b=new Xr;Y(b);K(b);}b=AH4(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Tn(){var a=this;B.call(a);a.xb=0;a.sM=null;}
function AXB(b){var c,d,e,f,g,h,i,j,k,l;AF4();AA6();AEb();AFn();AHv();ACK();AEm();AF7();ADd();AEo();AA3();AE8();AE$();ADT();ACR();ADk();AGu();AB6();ADm();ABf();AEy();AFf();ABx();AHg();c=(ABk()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))QN(C(2),C(3));else{d=new Tn;BP(d);e=new Vs;e.us=d;f=new Oj;c=new $rt_globals.Worker("teavm/worker.js");g=new O6;g.qR=c;g.qS=e;g.qT=f;e=Bl(g,"f");c.onmessage=e;h=I(Mu,[KA(C(4),C(5),400),KA(C(6),C(7),400),
KA(C(8),C(5),700),KA(C(9),C(7),700)]);b=R(Mu,1);b.data[0]=ATr(C(10),Fs(C(11),C(12)),C(5),400);b=(Mp(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.tT;f=c.sD;k=new M;O(k);BL(H(H(k,C(13)),f),41);k=N(k);f=c.sx;l=c.qA;f=AL_($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BP(d);c=new Vt;c.vS=d;g=new Vr;e.then(Bl(c,"f"),Bl(g,"f"));}}
function ADY(b){var c,d,e,f,g,h,i,j,k;c=new Um;d=new Tx;c.rG=new $rt_globals.TextDecoder("utf-16");e=new Xq;e.qv=c;c.tu=e;e=new Xn;e.xt=c;c.nF=e;f=new Xo;f.to=c;c.v4=new $rt_globals.ResizeObserver(Bl(f,"f"));e=new Xl;e.pS=c;c.oz=e;c.ji=1;f=new QL;f.Ac=null;f.ky=AY8;c.nc=f;c.r_=b;f=new Xm;f.wi=c;e=Bl(f,"f");b.onmessage=e;e=ADS();b.postMessage(e);c.or=(Ei()).getElementById("canvasDiv");b=ABk();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.d6
=b;c.or.appendChild(b);f=c.d6;e=AQv(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)QN(C(2),C(14));else{g=new Rd;e=c.d6;f=c.nF;g.d1=null;g.hV=e;g.ct=AXL(f);h=$rt_globals.window;i=R(Dw,14);j=i.data;k=new Yx;k.o1=g;j[0]=CX(g,e,C(15),k);f=new Yy;f.t1=g;j[1]=CX(g,e,C(16),f);f=new Yz;f.qk=g;j[2]=CX(g,e,C(17),f);f=new YA;f.xm=g;j[3]=CX(g,e,C(18),f);f=new YB;f.th=g;j[4]=CX(g,e,C(19),f);f=new YC;f.pq=g;j[5]=CX(g,e,C(20),f);k=new YD;k.xE=g;j[6]=CX(g,e,C(21),k);k=new YE;k.tq=g;j[7]=CX(g,e,C(22),k);k=new YF;k.pD
=g;j[8]=CX(g,e,C(23),k);k=new YG;k.ws=g;j[9]=CX(g,e,C(24),k);k=new AAc;k.vI=g;j[10]=CX(g,e,C(25),k);k=new AAd;k.um=g;j[11]=AE2(g,h,C(26),k,1);k=new AAe;k.n$=g;j[12]=CX(g,h,C(27),k);k=new AAf;k.wR=g;j[13]=CX(g,h,C(28),k);g.zx=AUT(i);AC2(g,e);c.mN=g;c.gN=AW6(b,c.nF);ASW(c.v4,c.d6);e=$rt_globals.window;g=c.oz;e.addEventListener("resize",Bl(g,"handleEvent"));c.fY=AD$(d,ACT(c));U1(c);}AFE(c);}
var Od=G(0);
var Nt=G(0);
function Ys(){var a=this;B.call(a);a.ly=null;a.gw=null;}
function AES(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ys;c.gw=b;d=c;b.classObject=d;}return c;}
function IH(a){if(a.ly===null)a.ly=$rt_str(a.gw.$meta.name);return a.ly;}
function Io(a){return a.gw.$meta.primitive?1:0;}
function IN(a){return AES(a.gw.$meta.item);}
var ACa=G();
function Bl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function LY(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ABO=G();
function AH4(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AEV(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AEV(d[e],c))return 1;e=e+1|0;}return 0;}
function GX(){var a=this;B.call(a);a.ie=null;a.l_=null;a.j3=0;a.kD=0;}
function AY9(){var a=new GX();Y(a);return a;}
function AY$(a){var b=new GX();Bi(b,a);return b;}
function Y(a){a.j3=1;a.kD=1;}
function Bi(a,b){a.j3=1;a.kD=1;a.ie=b;}
function ALM(a){return a;}
function ASj(a){return a.ie;}
function ASr(a){var b;b=a.l_;if(b===a)b=null;return b;}
var Ef=G(GX);
var Bu=G(Ef);
function AYH(a){var b=new Bu();AUw(b,a);return b;}
function AUw(a,b){Bi(a,b);}
var ADW=G(Bu);
var CN=G(0);
var CG=G(0);
var Js=G(0);
function By(){var a=this;B.call(a);a.ca=null;a.iJ=0;}
var AY_=null;var AZa=null;var AZb=null;function FD(){FD=Bq(By);AT4();}
function AMF(){var a=new By();AAV(a);return a;}
function Gf(a){var b=new By();HW(b,a);return b;}
function EQ(a,b,c){var d=new By();Nc(d,a,b,c);return d;}
function AAV(a){FD();a.ca=AY_;}
function HW(a,b){FD();Nc(a,b,0,b.data.length);}
function Nc(a,b,c,d){var e;FD();e=BV(d);a.ca=e;DB(b,c,e,0,d);}
function M8(b){var c;FD();c=AMF();c.ca=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.ca.data;if(b<c.length)return c[b];}d=new HJ;Y(d);K(d);}
function J(a){return a.ca.data.length;}
function Fz(a){return a.ca.data.length?0:1;}
function RG(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){DB(a.ca,b,d,e,c);return;}}g=new BD;Y(g);K(g);}
function V4(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function IE(a,b){if(a===b)return 1;return V4(a,b,0);}
function Eo(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function G9(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.ca.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=IL(b);h=Jl(b);while(true){f=a.ca.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Gn(a,b,c){var d,e,f,g,h;d=Bb(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.ca.data[d]==e)break;d=d+(-1)|0;}return d;}f=IL(b);g=Jl(b);while(true){if(d<1)return (-1);h=a.ca.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Rt(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Vw(a,b){return Rt(a,b,0);}
function RE(a,b,c){var d,e;d=Bb(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function SU(a,b){return RE(a,b,J(a));}
function Ca(a,b,c){var d,e;d=BG(b,c);if(d>0){e=new BD;Y(e);K(e);}if(!d){FD();return AZa;}if(!b&&c==J(a))return a;return EQ(a.ca,b,c-b|0);}
function Do(a,b){return Ca(a,b,J(a));}
function RS(a,b,c){return Ca(a,b,c);}
function Fs(a,b){var c,d,e,f,g,h;if(Fz(b))return a;if(Fz(a))return b;c=BV(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return M8(c);}
function WX(a,b,c){var d,e,f,g;d=new M;O(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BL(d,P(a,f));}f=f+1|0;}H(d,Do(a,f));return N(d);}
function Tz(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Ca(a,b,c+1|0);}
function AJO(a){return a;}
function FA(a){var b,c,d,e,f;b=a.ca.data;c=BV(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function C8(b){var c;FD();c=new M;O(c);return N(V(c,b));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof By))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function IX(a){var b,c,d,e;a:{if(!a.iJ){b=a.ca.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.iJ=(31*a.iJ|0)+e|0;d=d+1|0;}}}return a.iJ;}
function ML(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new G4;Bi(b,C(29));K(b);}AZc=1;d=new SX;d.lh=R(CT,10);d.gW=(-1);d.fg=(-1);d.bD=(-1);e=new Ha;e.fc=1;e.bV=b;e.bi=BV(J(b)+2|0);DB(FA(b),0,e.bi,0,J(b));f=e.bi.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.tj=g;e.gD=0;Fk(e);Fk(e);d.h=e;d.dO=0;d.mj=Z0(d,(-1),0,null);if(!Dn(d.h)){b=new Jn;h=d.h;J6(b,C(30),h.bV,h.ds);K(b);}if(d.o6)d.mj.eM();b=BH();h=new T8;h.je=(-1);h.lD=(-1);h.ys=d;h.v1=d.mj;h.jz=a;h.je=0;g=J(a);h.lD=g;e=new WZ;i=h.je;j=d.gW;k=d.fg+1|0;l=d.bD+
1|0;e.ip=(-1);m=j+1|0;e.p6=m;e.d5=BM(m*2|0);f=BM(l);e.kp=f;H1(f,(-1));if(k>0)e.ma=BM(k);H1(e.d5,(-1));ZT(e,a,i,g);h.cD=e;e.fP=1;n=0;m=0;if(!J(a)){f=R(By,1);f.data[0]=C(30);}else{while(true){l=J(h.jz);if(!AA_(h))l=h.lD;e=h.cD;if(e.eE>=0&&AC8(e)==1){e=h.cD;e.eE=JJ(e);if(JJ(h.cD)==AFm(h.cD)){e=h.cD;e.eE=e.eE+1|0;}g=h.cD.eE;g=g<=l&&NB(h,g)?1:0;}else g=NB(h,h.je);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BC(b,RS(a,m,AG5(h)));m=ACO(h);n=g;}a:{BC(b,RS(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Br(b,
g)))break a;Ey(b,g);}}if(g<0)g=0;f=Ie(b,R(By,g));}return f;}
function AL2(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Bb(J(a),J(b));e=0;while(true){if(e>=d){c=J(a)-J(b)|0;break a;}c=P(a,e)-P(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AT4(){AY_=BV(0);AZa=AMF();AZb=new UM;}
var E0=G(GX);
var HM=G(E0);
var ADu=G(HM);
var D7=G();
function GE(){D7.call(this);this.bF=0;}
var AZd=null;var AZe=null;function ATM(a){var b=new GE();ACx(b,a);return b;}
function ACx(a,b){a.bF=b;}
function L6(b){return (OC(AYq(20),b,10)).cO();}
function Kg(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dj;Bi(b,C(31));K(b);}d=J(b);if(0==d){b=new Dj;Bi(b,C(32));K(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dj;Y(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=QH(P(b,f));if(i<0){j=new Dj;k=Ca(b,0,d);b=new M;O(b);H(H(b,C(33)),k);Bi(j,N(b));K(j);}if(i>=c){j=new Dj;l=Ca(b,0,d);b=new M;O(b);H(H(V(H(b,C(34)),c),C(35)),l);Bi(j,N(b));K(j);}g=W(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dj;k=Ca(b,0,d);b=new M;O(b);H(H(b,C(36)),k);Bi(j,N(b));K(j);}b=new Dj;j=new M;O(j);V(H(j,C(37)),c);Bi(b,N(j));K(b);}
function Dh(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AZe===null){AZe=R(GE,256);c=0;while(true){d=AZe.data;if(c>=d.length)break a;d[c]=ATM(c-128|0);c=c+1|0;}}}return AZe.data[b+128|0];}return ATM(b);}
function AVh(a,b){if(a===b)return 1;return b instanceof GE&&b.bF==a.bF?1:0;}
function O2(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function I0(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AOc(a,b){b=b;return BG(a.bF,b.bF);}
function AF4(){AZd=F($rt_intcls());}
function GI(){var a=this;B.call(a);a.B=null;a.J=0;}
function AZf(){var a=new GI();O(a);return a;}
function AYq(a){var b=new GI();Gl(b,a);return b;}
function O(a){Gl(a,16);}
function Gl(a,b){a.B=BV(b);}
function OC(a,b,c){return ADK(a,a.J,b,c);}
function ADK(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ci(a,b,b+1|0);else{Ci(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=HL(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=W(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ci(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=HL($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AEI(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BG(c,0.0);if(!d){if(1.0/c===Infinity){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ci(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ci(a,b,b+8|0);d=b;}else{Ci(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AZg;AEz(c,f);d=f.lI;g=f.lp;h=f.pj;i=1;j=1;if(h)j=2;k=9;l=ATw(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ci(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.B.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.B.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.B.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.B.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ACs(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BG(c,0.0);if(!d){if(1.0/c===Infinity){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ci(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ci(a,b,b+8|0);d=b;}else{Ci(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AZh;ADO(c,f);g=f.ml;h=f.k_;i=f.o0;j=1;k=1;if(i)k=2;l=18;m=AQ0(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ci(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.B.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ALk(p,Fa))d=0;else{d=GD(AFx(g,p));g=AH9(g,p);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AFx(p,Bp(10));q=q+1|0;}if(h){e=a.B.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ATw(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AQ0(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=AZi.data;g=f.length-1|0;while(g>=0){if(Ia(AH9(b,Cb(c,f[g])),Fa)){d=d|e;c=Cb(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BL(a,b){return a.nk(a.J,b);}
function ZK(a,b,c){Ci(a,b,b+1|0);a.B.data[b]=c;return a;}
function Kk(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.B=OV(a.B,d);}
function N(a){return EQ(a.B,0,a.J);}
function Zr(a,b,c,d){return a.mM(a.J,b,c,d);}
function N7(a,b,c,d,e){var f,g,h,i;Ci(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function I3(a,b){return a.lR(b,0,b.data.length);}
function Ci(a,b,c){var d,e,f,g;d=a.J;e=d-b|0;a.iB((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.J=a.J+(c-b|0)|0;}
var Iv=G(0);
var M=G(GI);
function Mz(){var a=new M();AU5(a);return a;}
function AU5(a){O(a);}
function H(a,b){M$(a,a.J,b===null?C(38):b.cO());return a;}
function BU(a,b){M$(a,a.J,b);return a;}
function V(a,b){OC(a,b,10);return a;}
function GJ(a,b){var c,d,e,f,g,h,i,j;c=a.J;d=1;if(AWO(b,Fa)){d=0;b=AXv(b);}a:{if(Dt(b,Bp(10))<0){if(d)Ci(a,c,c+1|0);else{Ci(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=HL(GD(b),10);}else{g=1;h=Bp(1);i=Dc(Bp(-1),Bp(10));b:{while(true){j=Cb(h,Bp(10));if(Dt(j,b)>0){j=h;break b;}g=g+1|0;if(Dt(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ci(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(Ia(j,Fa))break a;e=a.B.data;c=f+1|0;e[f]=HL(GD((Dc(b,j))),10);b=AA$(b,j);j=Dc(j,Bp(10));f=c;}}}return a;}
function Fx(a,b){AEI(a,a.J,b);return a;}
function AAQ(a,b){BL(a,b);return a;}
function Gt(a,b){M$(a,a.J,!b?C(39):C(40));return a;}
function AGM(a,b,c){var d,e,f,g,h,i;d=BG(b,c);if(d<=0){e=a.J;if(b<=e){if(d){f=e-c|0;a.J=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new HJ;Y(i);K(i);}
function X_(a,b){var c,d,e,f;if(b>=0){c=a.J;if(b<c){c=c-1|0;a.J=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new HJ;Y(f);K(f);}
function AN8(a,b,c,d,e){N7(a,b,c,d,e);return a;}
function AK5(a,b,c,d){Zr(a,b,c,d);return a;}
function ABy(a){return a.J;}
function D4(a){return N(a);}
function AOg(a,b){Kk(a,b);}
function AOO(a,b,c){ZK(a,b,c);return a;}
function M$(a,b,c){var d,e,f;if(b>=0&&b<=a.J){a:{if(c===null)c=C(38);else if(Fz(c))break a;Kk(a,a.J+J(c)|0);d=a.J-1|0;while(d>=b){a.B.data[d+J(c)|0]=a.B.data[d];d=d+(-1)|0;}a.J=a.J+J(c)|0;d=0;while(d<J(c)){e=a.B.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new HJ;Y(c);K(c);}
var EB=G(HM);
var AE0=G(EB);
function AZj(a){var b=new AE0();AJ1(b,a);return b;}
function AJ1(a,b){Bi(a,b);}
var ADb=G(EB);
function AZk(a){var b=new ADb();AKh(b,a);return b;}
function AKh(a,b){Bi(a,b);}
var Vh=G(0);
var Dw=G(0);
function AUT(b){var c;c=new Se;c.yF=b;return c;}
function CK(b,c){if(b!==null)b.em();return c;}
var QB=G(0);
function Jf(){var a=this;B.call(a);a.m0=0;a.l7=0;}
var AZl=0;function F$(a){AZl=AZl-1|0;}
function Gp(a,b,c){J0(a,ACm(b,c,400,0));}
function SS(a,b){return Lp(a,b,0.875);}
function Lp(a,b,c){return EA(a,b)+c|0;}
function Tg(){var a=this;Jf.call(a);a.kF=null;a.bx=null;a.oh=null;}
function EI(a){var b,c,d;b=a.bx;c=a.m0;d=a.l7;b.clearRect(0.0,0.0,c,d);}
function TO(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bx;d="center";c.textAlign=d;break a;case 2:c=a.bx;d="right";c.textAlign=d;break a;default:break a;}d=a.bx;c="left";d.textAlign=c;}}
function CC(a,b){J0(a,Gy(b.oF));}
function J0(a,b){var c;if(!(a.oh==b?1:0)){c=a.bx;a.oh=b;c.font=b;}}
function ACm(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.bx;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function EA(a,b){var c;c=$rt_ustr(b);return a.bx.measureText(c).width;}
function L8(a,b,c,d){var e,f;e=a.bx;f=$rt_ustr(Gf(ADB([35,G6(b/16|0),G6(b%16|0),G6(c/16|0),G6(c%16|0),G6(d/16|0),G6(d%16|0)])));e.fillStyle=f;}
var AA7=G();
var AGi=G();
function BW(b,c){if(b===c)return 1;return b!==null?b.bU(c):c!==null?0:1;}
function BP(b){if(b!==null)return b;b=new G4;Bi(b,C(30));K(b);}
var Z=G(0);
function Vs(){B.call(this);this.us=null;}
var Bz=G(0);
var AD8=G();
var ABc=G(0);
function KA(b,c,d){return ATr(C(41),Fs(C(11),b),c,d);}
var AFU=G(0);
var AFQ=G(0);
function Mp(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dp(b,f+g|0);DB(c,0,d,f,g);return d;}
function LD(b,c,d){DB(b,c,d,0,d.data.length);return d;}
function S7(b,c,d){var e;if(c>0)DB(b,0,d,0,c);e=d.data.length;if(c<e)DB(b,c+1|0,d,c,e-c|0);return d;}
function ADl(b,c,d,e){var f;if(c>0)DB(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DB(b,d,e,c,f-d|0);}return e;}
function Gb(b){var c;c=new XW;c.jJ=b;return c;}
function Q0(b,c){if(b.data.length!=c)b=Dp(b,c);return b;}
function AFP(b,c,d){var e;e=c.data.length;if(e==d)c=Dp(c,e*2|0);c.data[d]=b;return c;}
function Mu(){var a=this;B.call(a);a.tT=null;a.sD=null;a.sx=null;a.qA=0;}
function ATr(a,b,c,d){var e=new Mu();AR5(e,a,b,c,d);return e;}
function AR5(a,b,c,d,e){a.tT=b;a.sD=c;a.sx=d;a.qA=e;}
var AB8=G();
function AL_(b,c){return {style:b,weight:c};}
var BY=G(0);
function Vt(){B.call(this);this.vS=null;}
function AHA(a,b){var c,d,e;c=a.vS;d=0;while(d<b.length){e=b[d];(Ei()).fonts.add(e);d=d+1|0;}c.xb=1;b=c.sM;if(b!==null)ADY(b);}
var Vr=G();
function AT_(a,b){$rt_globals.console.info("font load error "+b);}
var L5=G();
var AZm=null;var AZn=null;function BA(){if(AZm===null)AZm=APB(AZo,0);return AZm;}
function Fb(){if(AZn===null)AZn=APB(AZp,0);return AZn;}
function AXo(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=L_(b)&&(e+f|0)<=L_(d)){a:{b:{if(b!==d){g=IN(BI(b));h=IN(BI(d));if(g!==null&&h!==null){if(g===h)break b;if(!Io(g)&&!Io(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.gw;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AEV(n.constructor,o)?1:0)){Lj(b,c,d,e,j);b=new Jm;Y(b);K(b);}j=j+1|0;k=m;}Lj(b,c,d,e,f);return;}if(!Io(g))break a;if(Io(h))break b;else break a;}b=new Jm;Y(b);K(b);}}Lj(b,c,
d,e,f);return;}b=new Jm;Y(b);K(b);}b=new BD;Y(b);K(b);}d=new G4;Bi(d,C(42));K(d);}
function DB(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=L_(b)&&(e+f|0)<=L_(d)){Lj(b,c,d,e,f);return;}b=new BD;Y(b);K(b);}
function Lj(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ez(){return Long_fromNumber(new Date().getTime());}
function AFp(){return AY5($rt_globals.performance.now()*1000000.0);}
var AFN=G();
var ACP=G();
function QN(b,c){var d,e,f;d=(Ei()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ei()).getElementById($rt_ustr(b)).appendChild(d);}
function ABk(){return (Ei()).createElement("canvas");}
function AGT(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AQv(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AHu=G();
var Oj=G();
function AQd(a,b){var c;c=new Bu;Bi(c,$rt_str(b.message));K(c);}
var AF9=G();
function FS(b){return $rt_str(b);}
var ABp=G();
function OV(b,c){var d,e,f,g;b=b.data;d=BV(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AGF(b,c){var d,e,f,g;b=b.data;d=D8(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function M0(b,c){var d,e,f,g;b=b.data;d=BM(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dp(b,c){var d,e,f,g;d=b.data;e=AFl(IN(BI(b)),c);f=Bb(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ACj(b){var c,d,e;if(b===null)return C(38);c=new M;O(c);BU(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(44));H(c,e[d]);d=d+1|0;}BU(c,C(45));return N(c);}
function AFg(b){var c,d,e;if(b===null)return C(38);c=new M;O(c);BU(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(44));V(c,e[d]);d=d+1|0;}BU(c,C(45));return N(c);}
function ASG(b){var c,d,e;if(b===null)return C(38);c=new M;O(c);BU(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(44));Fx(c,e[d]);d=d+1|0;}BU(c,C(45));return N(c);}
function AVY(b){var c,d,e,f;if(b===null)return C(38);c=new M;O(c);BU(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(44));f=e[d];ACs(c,c.J,f);d=d+1|0;}BU(c,C(45));return N(c);}
function H1(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BE;Y(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ABV(b,c,d,e){var f,g;if(c>d){e=new BE;Y(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ACM(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AY8;e=R(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bb(j,h+f|0);l=h+(2*f|0)|0;m=Bb(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.wZ(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AEJ(b,c){return VE(b,0,b.data.length,c);}
function VE(b,c,d,e){var f,g,h,i,j;f=BG(c,d);if(f>0){g=new BE;Y(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var XD=G(0);
var ADX=G();
function AML(a,b){return a.Dd(b);}
function AO4(a){return a.zZ();}
var ADJ=G();
var HI=G(0);
var UM=G();
var BD=G(Bu);
var AEF=G();
function L_(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AZq());}return b.data.length;}
function AFl(b,c){if(b===null){b=new G4;Y(b);K(b);}if(b===F($rt_voidcls())){b=new BE;Y(b);K(b);}if(c>=0)return AUJ(b.gw,c);b=new AAy;Y(b);K(b);}
function AUJ(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var G4=G(Bu);
var Jm=G(Bu);
var C_=G();
var AZr=null;var AZs=null;var AZt=null;var AZu=null;var AZv=null;var AZw=null;var AZx=null;var AZy=null;var AZz=null;var AZA=null;function Zc(b){var c,d;c=new By;d=BV(1);d.data[0]=b;HW(c,d);return c;}
function MQ(b){return b>=65536&&b<=1114111?1:0;}
function CI(b){return (b&64512)!=55296?0:1;}
function C7(b){return (b&64512)!=56320?0:1;}
function MU(b){return !CI(b)&&!C7(b)?0:1;}
function HU(b,c){return CI(b)&&C7(c)?1:0;}
function EE(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IL(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jl(b){return (56320|b&1023)&65535;}
function Fd(b){return G3(b)&65535;}
function G3(b){if(AZu===null){if(AZx===null)AZx=AFe();AZu=ADo((AZx.value!==null?$rt_str(AZx.value):null));}return Ug(AZu,b);}
function EL(b){return G0(b)&65535;}
function G0(b){if(AZt===null){if(AZy===null)AZy=AF5();AZt=ADo((AZy.value!==null?$rt_str(AZy.value):null));}return Ug(AZt,b);}
function Ug(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BG(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Wq(b,c){if(c>=2&&c<=36){b=QH(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function QH(b){var c,d,e,f,g,h,i,j,k,l;if(AZs===null){if(AZz===null)AZz=ADw();c=(AZz.value!==null?$rt_str(AZz.value):null);d=ASs(FA(c));e=Ku(d);f=BM(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Oe(d)|0;j=j+Oe(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AZs=f;}g=AZs.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BG(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function HL(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GT(b){var c;if(b<65536){c=BV(1);c.data[0]=b&65535;return c;}return ADB([IL(b),Jl(b)]);}
function Cy(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&MU(b&65535))return 19;if(AZv===null){if(AZA===null)AZA=AHm();d=(AZA.value!==null?$rt_str(AZA.value):null);e=R(Ov,16384);f=e.data;g=D8(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Li(P(d,l));if(m==64){l=l+1|0;m=Li(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|W(c,Li(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Li(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ALY(k,k+i|0,AGF(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ALY(k,k+i|0,AGF(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AZv=Dp(e,j);}e=AZv.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.s1)o=p+1|0;else{c=d.qP;if(b>=c)return d.q4.data[b-c|0];c=p-1|0;}}return 0;}
function Ke(b){a:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function GL(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cy(b)!=16?0:1;}
function Rg(b){switch(Cy(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function SZ(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Rg(b);}return 1;}
function AA6(){AZr=F($rt_charcls());AZw=R(C_,128);}
function AFe(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AF5(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ADw(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
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
var No=G(0);
var Uf=G(0);
var Es=G(0);
var AGh=G(0);
function Ei(){return $rt_globals.window.document;}
function O6(){var a=this;B.call(a);a.qR=null;a.qS=null;a.qT=null;}
function ARp(a,b){var c,d,e;c=a.qR;d=a.qS;e=a.qT;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=Gy(Ll(c));c=d.us;c.sM=b;if(c.xb)ADY(b);}}
var ADE=G();
function FJ(){return AVI();}
function AVI(){return Math.random();}
function Bb(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function AUO(b,c){return Math.max(b,c);}
function Ny(b){if(b<0)b= -b|0;return b;}
function AMy(b){return Math.abs(b);}
var Q8=G(0);
var Td=G(0);
var S4=G(0);
var Vf=G(0);
var Zu=G(0);
var Wr=G(0);
var Qf=G(0);
var QC=G(0);
var ABb=G();
function AQo(a,b){b=a.jU(b);Lb();return b===null?null:b instanceof $rt_objcls()&&b instanceof Ex?Gy(b):b;}
function AS_(a,b,c){a.Hr($rt_str(b),LY(c,"handleEvent"));}
function ASu(a,b,c){a.Ed($rt_str(b),LY(c,"handleEvent"));}
function AQj(a,b,c,d){a.Ce($rt_str(b),LY(c,"handleEvent"),d?1:0);}
function AUu(a,b){return !!a.Hx(b);}
function AJ$(a){return a.zZ();}
function AH3(a,b,c,d){a.F0($rt_str(b),LY(c,"handleEvent"),d?1:0);}
var BE=G(Bu);
var AAy=G(Bu);
function Ex(){B.call(this);this.t5=null;}
var AZB=null;var AZC=null;var AZD=null;var AZE=null;var AZF=null;var AZG=null;function Lb(){Lb=Bq(Ex);AKf();}
function NT(a){var b=new Ex();AEq(b,a);return b;}
function AEq(a,b){Lb();a.t5=b;}
function Ll(b){var c,d,e,f,g,h;Lb();if(b===null)return null;a:{c=b;if(AZC!==null){d=$rt_str(typeof c);if(!Bn(d,C(46))&&!Bn(d,C(47))){if(Bn(d,C(48))){e=AZD.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=NT(c);h=g;AZD.set(c,new $rt_globals.WeakRef(h));OU(AZF,h,c);return g;}if(!Bn(d,C(49)))break a;else{e=AZE.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=NT(c);h=g;AZE.set(c,new $rt_globals.WeakRef(h));OU(AZG,
h,c);return g;}}e=AZC.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=NT(c);AZC.set(c,new $rt_globals.WeakRef(g));return g;}}return NT(c);}
function Gy(b){Lb();if(b!==null)return b.t5;return null;}
function Uq(b){Lb();if(b===null)return null;return b instanceof $rt_objcls()?b:Ll(b);}
function AKf(){AZB=new $rt_globals.WeakMap();AZC=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();AZD=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AZE=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AZF=AZD===null?null:new $rt_globals.FinalizationRegistry(Bl(new Qv,"accept"));AZG=AZE===null?null:new $rt_globals.FinalizationRegistry(Bl(new Qw,"accept"));}
function OU(b,c,d){return b.register(c,d);}
var AG2=G();
var AC7=G();
var AHp=G();
var KC=G(0);
var Qv=G();
function AJ8(a,b){var c;b=Uq(b);c=AZD;b=Gy(b);c.delete(b);}
var ADs=G();
var Qw=G();
function AH5(a,b){var c;b=Uq(b);c=AZE;b=Gy(b);c.delete(b);}
var HJ=G(BD);
var ACy=G();
function ADS(){return "ping";}
var Qe=G(0);
function Um(){var a=this;B.call(a);a.rG=null;a.tu=null;a.nF=null;a.or=null;a.d6=null;a.v4=null;a.oz=null;a.mN=null;a.gN=null;a.ji=0;a.za=0;a.sV=null;a.fY=null;a.r_=null;a.nc=null;a.uy=0;}
function AFE(a){a.d6.focus();}
function OG(a,b){var c;c=Ei();b=$rt_ustr(b);c.title=b;}
function ACT(a){var b,c,d;b=new Np;c=a.gN;d=a.mN.ct;b.bf=c;b.m=d;b.b0=a;return b;}
function U1(a){a.za=$rt_globals.requestAnimationFrame(Bl(a.tu,"onAnimationFrame"));}
function Gs(a){a.ji=1;}
function UZ(a,b,c){var d,e;a.mN.d1=B$(b,c);d=a.d6;e=b;d.width=e;d=a.d6;e=c;d.height=e;d=a.gN;U(d.dL,b,c);e=d.bv;d=d.dL;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fY.cd(a.gN.dL,Lk(a));a.fY.bI();}
function GU(a,b){var c,d,e;c=a.sV;d=a.d6;if(BW(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.sV=b;}
function Kc(a){return $rt_globals.performance.now()/1000.0;}
function Lk(a){return $rt_globals.window.devicePixelRatio;}
function XX(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AG0(b,1);else{c=new YP;d=$rt_globals.window.showDirectoryPicker();e=new YO;e.qW=b;e.qX=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function ME(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AG0(b,0);else{c=new ZJ;d=$rt_globals.window.showOpenFilePicker();e=new ZI;e.rD=b;e.rC=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function CU(a,b,c,d){var e,f,g,h,i,j;d=d.data;e=a.uy+1|0;a.uy=e;f=a.nc;g=Dh(e);f.iF=MS(f,f.iF,g);g=Wz(f,g);Nq(g,b);Nq(g,b);f.kE=f.kE+1|0;b=a.r_;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;0;g[0]=f;c=$rt_ustr(c);1;g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof By)f=$rt_ustr(c);else if(Ji(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(Ji(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(Ji(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof LI)){b=new BE;c
=IH(BI(c));f=new M;O(f);H(H(f,C(50)),c);Bi(b,N(f));K(b);}c=c;f=c.hq;if(f===null)f=c.fL;}j=e+2|0;j;g[j]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function SV(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new SM;e.oJ=b;b=AHr(c);d.then(Bl(e,"f"),Bl(b,"f"));}
function V6(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.rG;b=(FA(b)).data;f=f.decode(b);b=e.writeText(f);e=new Wl;e.t4=c;c=AHr(d);b.then(Bl(e,"f"),Bl(c,"f"));}
function ZR(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AHr(b){var c;c=new NH;c.uj=b;return c;}
var B9=G(0);
var Tx=G();
function AD$(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bn(C(51),c)){d=new Oi;Eu(d,b);b=$rt_globals.fetch("test.wasm");e=new Os;b=b.then(Bl(e,"f"));e=new Or;b=b.then(Bl(e,"f"));e=new Op;f=new Oo;b.then(Bl(e,"f"),Bl(f,"f"));}else if(!Bn(C(52),c))d=(ATS(J(c)<=0?C(30):Do(c,1))).bX(b);else{d=new XE;AC5(d,b);d.F.ei=1;d.E.ei=1;c=new Vv;c.oM=d;Qo(d,c,C(53));c=new Vx;c.uw=d;Qo(d,c,C(54));}return d;}
var Bj=G(0);
var AD5=G();
var ADA=G();
var S8=G(0);
function Xq(){B.call(this);this.qv=null;}
function ANg(a,b){var c,d;c=b;b=a.qv;if(!(!b.fY.c2(c/1000.0)&&!b.ji)){d=b.gN.dL;if(W(d.b,d.a)){b.ji=0;b.fY.bI();}}U1(b);}
function Xn(){B.call(this);this.xt=null;}
function Dm(a){Gs(a.xt);}
var R9=G(0);
function Xo(){B.call(this);this.to=null;}
function ALm(a,b,c){var d,e,f,g;c=a.to;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.d6){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lk(c);UZ(c,HN(f.width*g),HN(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];UZ(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AGp=G();
function ASW(b,c){ARL(b,c,AId());}
function AId(){return {box:'device-pixel-content-box'};}
function ARL(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cp=G(0);
function Xl(){B.call(this);this.pS=null;}
function ARx(a,b){b=a.pS;b.fY.cd(b.gN.dL,Lk(b));b.fY.bI();}
var LH=G(0);
function Sf(a,b,c){var d;d=Cl(a,b);if(d===null)d=F3(a,b,c);return d;}
function D5(){var a=this;B.call(a);a.lr=null;a.lC=null;}
var Eg=G(0);
var ZQ=G(0);
var Ob=G(0);
function QL(){var a=this;D5.call(a);a.iF=null;a.ky=null;a.Ac=null;a.kE=0;}
function Wz(a,b){var c,d;c=a.iF;while(true){if(c===null)return null;d=Kf(a.ky,b,c.jQ);if(!d)break;c=d>=0?c.cb:c.bW;}return c;}
function MS(a,b,c){var d,e;if(b===null){b=new Kb;d=null;b.jQ=c;b.jl=d;b.f4=1;b.gh=1;return b;}e=Kf(a.ky,c,b.jQ);if(!e)return b;if(e>=0)b.cb=MS(a,b.cb,c);else b.bW=MS(a,b.bW,c);Et(b);return Kt(b);}
function KS(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Kf(a.ky,c,b.jQ);if(d<0)b.bW=KS(a,b.bW,c);else if(d>0)b.cb=KS(a,b.cb,c);else{e=b.cb;if(e===null)return b.bW;f=b.bW;g=R(Kb,e.f4).data;h=0;while(true){b=e.bW;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.cb;while(h>0){h=h+(-1)|0;j=g[h];j.bW=b;Et(j);b=Kt(j);}e.cb=b;e.bW=f;Et(e);b=e;}Et(b);return Kt(b);}
function Xm(){B.call(this);this.wi=null;}
function ASU(a,b){var c,d,e,f,g,h,i,j,k;c=a.wi.nc;b=b.data;if(!(b===ADS()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BE;Y(b);K(b);}if(b.length<1){b=new BE;Y(b);K(b);}d=Dh(b[0]);e=Wz(c,d);if(e===null)c=null;else{c.iF=KS(c,c.iF,d);c.kE=c.kE+1|0;c=e.jl;}f=R(B,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FS(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new Ux;AF6(e);e.h_=k;}else e=(k instanceof $rt_globals.File?1:0)?AEM(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AEM(k,null);g[h]=e;h=j;}c.g(f);}}
function Rd(){var a=this;B.call(a);a.ct=null;a.hV=null;a.zx=null;a.d1=null;}
function N9(){return (Ei()).activeElement;}
function CX(a,b,c,d){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"));return Y4(a,b,c,d);}
function AE2(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"),!!e);return Y4(a,b,c,d);}
function Y4(a,b,c,d){var e;e=new R5;e.yg=b;e.yi=c;e.yh=d;return e;}
function Vu(a,b){var c;c=new WB;c.xl=b;return c;}
function ER(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.hV.getBoundingClientRect();e=B$(HN((b.clientX-d.left)*c),HN((b.clientY-d.top)*c));f=new Bf;g=a.d1;f.b=g.b;f.a=g.a;d=new Nm;V8(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.i=e;d.x0=f;return d;}
function AAk(a,b,c){var d,e,f,g;d=new QG;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;V8(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.k6=0;d.ea=e;d.bl=f;d.ii=c;d.tv=g;return d;}
function DT(a,b){b.stopPropagation();b.preventDefault();}
function AC2(a,b){var c;c=new ZO;c.rc=b;b.onpointerdown=Bl(c,"f");c=new ZP;c.pY=b;b.onpointerup=Bl(c,"f");}
function LT(){var a=this;B.call(a);a.sS=null;a.cS=null;a.bv=null;a.u2=null;a.yL=0;a.zV=0;a.kH=null;a.Ax=null;a.z_=null;a.y9=null;a.gS=null;a.ih=null;a.hn=null;a.Aj=null;a.qB=null;a.dL=null;a.w0=null;a.mI=0;a.kZ=0;a.nm=0;a.m7=0;a.i9=0;a.nh=null;}
function HT(a,b,c){return Hl(a,b,c,400,0);}
function CO(a,b,c){return Nw(a.sS,b,c);}
function FE(a,b){var c,d,e,f,g;c=a.bv;d=b.bt;e=b.bN;f=b.bo;g=b.bO;c.clearColor(d,e,f,g);a.bv.clear(16384);}
function Cw(a,b){var c;if(b==a.kZ)return b;if(!b)a.bv.disable(3042);else{a.bv.enable(3042);a.bv.blendFuncSeparate(770,771,1,1);}c=a.kZ;a.kZ=b;return c;}
function Tq(a,b,c){Mg(a,b.b,b.a,c);}
function Mg(a,b,c,d){var e,f;e=d.b;f=d.a;a.m7=1;a.i9=1;d=a.nh;d.s6=b;d.s8=c;d.s5=e;d.s4=f;V9(a);}
function Hq(a){a.m7=0;a.i9=0;V9(a);}
function V9(a){var b,c,d,e,f,g;b=a.nm;c=a.m7;if(b!=c){a.nm=c;if(!c)a.bv.disable(3089);else a.bv.enable(3089);}if(a.nm&&a.i9){a.i9=0;d=a.bv;e=a.nh;b=e.s6;c=a.dL.a-e.s8|0;f=e.s4;c=c-f|0;g=e.s5;d.scissor(b,c,g,f);}}
function IO(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.qB;c=a.mI;d=b.g7.ug;e=b.eQ;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eQ;h=b.ov;e.bindBuffer(34962,h);i=b.g7.nN.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eQ;m=k.h3;n=k.fK;o=b.g7.lN*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.fK|0;j=j+1|0;}a:{e=b.xo;if(e!==null){c=0;b.eQ.bindBuffer(34962,e);i=b.g7.sP.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eQ;j=e.h3;p=e.fK;m=e.qL;n=b.g7.q8;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.fK|0;g=g+1|0;}}}q=b.wD;if(q===null){c=b.tA;if(c>0)b.eQ.drawArrays(4,0,c);}else{b.eQ.bindBuffer(34963,q);k=b.eQ;g=b.wT;k.drawElements(4,g,5123,0);}a.mI=d;}
function Bx(a,b,c,d,e){IV(a,a.kH);JE(a.kH,a.bv,b,c,d,a.dL);d=a.kH;G7(a.bv,d.wh,e);IO(a);}
function AAC(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;IV(a,a.hn);JE(a.hn,a.bv,b,c,d,a.dL);j=a.hn;d=a.bv;k=j.nQ;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.nP;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.hn;G7(a.bv,d.pp,i);IO(a);}
function E1(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;IV(a,a.gS);JE(a.gS,a.bv,b,c,d,a.dL);V3(a.gS,a.bv,f);d=a.gS;j=a.bv;f=f.f7;b=f.b;c=f.a;k=e.bt;l=b;m=k/l;k=e.bN;n=c;o=k/n;k=e.bo/l;l=e.bO/n;d=d.vK;j.uniform4f(d,m,o,k,l);d=a.gS;e=a.bv;G7(e,d.rm,g);G7(e,d.o8,h);d=d.qq;e.uniform2f(d,i,0.0);IO(a);}
function CZ(a){var b,c;b=new J_;c=a.u2;b.f7=new Bf;b.eu=c;b.fA=c.dR.createTexture();AZH=AZH+1|0;return b;}
function Pl(a,b){Zw(a.bv,b);}
function IV(a,b){var c,d;if(b!==a.w0){c=a.bv;d=b.b5;c.useProgram(d);a.w0=b;}}
function AFT(){var a=this;LT.call(a);a.zA=null;a.Aa=null;}
function AW6(a,b){var c=new AFT();ANy(c,a,b);return c;}
function ANy(a,b,c){var d,e,f,g,h,i,j,k,l;d=new V_;a.dL=new Bf;a.mI=0;a.nh=new YK;a.sS=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);H(H(f,C(55)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bv=b;a.cS=Nw(d,4,4);g=AHU(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BV(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;f=new R6;Kq();k=AZI;f.eQ=b;f.g7=k;f.tA=h.length/k.lN|0;f.wT
=j.length;k=b.createBuffer();f.ov=k;b.bindBuffer(34962,k);k=g.data;b.bufferData(34962,k,35044);f.xo=null;k=b.createBuffer();f.wD=k;if(k!==null){b.bindBuffer(34963,k);k=i.data;b.bufferData(34963,k,35044);}k=null;b.bindBuffer(34962,k);k=null;b.bindBuffer(34963,k);a.qB=f;a.zV=IE(e,C(56));f=new R7;f.dR=b;a.u2=f;l=b.getParameter(3379);a.yL=l;f=new M;O(f);V(H(f,C(57)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(DC,7);i=g.data;d=new Yc;Jd(d,b,C(58),C(59),AZI);f=d.b5;d.wh=b.getUniformLocation(f,"uColor");a.kH=d;i[0]
=d;f=AWx(b,C(60));a.Ax=f;i[1]=f;f=AXy(b);a.z_=f;i[2]=f;f=AX4(b);a.y9=f;i[3]=f;f=AW7(b);a.gS=f;i[4]=f;f=AYe(b);a.ih=f;i[5]=f;f=AXZ(b);a.hn=f;i[6]=f;a.Aj=g;Zw(b,C(61));a.Aa=new V$;a.zA=c;}
function Hl(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cS;g=ACm(b,c,d,e);J0(f,g);h=f.bx.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=EA(f,C(62));m=EA(f,C(63));h=new LJ;n=Ll(g);h.nt=b;h.yq=c;o=c|0;if(o!==c){b=new M;O(b);Fx(H(b,C(64)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.qG=o;h.yy=d;h.y7=e;h.dx=i;h.eY=j;h.yp=l;h.nd=k;h.oF=n;h.sI=Dl(i);h.z4=Dl(h.eY);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.yv=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b
=C(65);}h.yf=b;return h;}
function Cz(){B.call(this);this.bd=null;}
function Eu(a,b){a.bd=b;}
function AVe(a,b){return 0;}
var JS=G();
var AY8=null;function Kf(a,b,c){return b.kG(c);}
function AEb(){AY8=new JS;}
function ACH(){var a=this;B.call(a);a.b_=null;a.nH=null;a.bB=null;a.dG=null;a.e3=null;a.f8=null;a.gH=null;a.kr=null;a.lm=null;a.dl=null;a.ig=null;a.pP=0;}
function AXL(a){var b=new ACH();AQX(b,a);return b;}
function AQX(a,b){a.b_=CM(R(Cr,0));a.nH=CM(R(Cr,0));a.bB=CM(R(Cu,0));a.dG=CM(R(DO,0));a.e3=CM(R(EJ,0));a.f8=CM(R(E2,0));a.gH=CM(R(Fo,0));a.kr=CM(R(Bj,0));a.lm=CM(R(Bj,0));a.dl=b;}
function VG(a,b){var c,d,e,f;Dm(a.dl);c=(Cs(!b.ii?a.nH:a.b_)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].U(b);if(f)break;if(b.k6)break;e=e+1|0;}return f;}
function SN(a,b,c){var d,e,f;Dm(a.dl);d=(Cs(a.f8)).data;e=d.length;f=0;while(f<e){if(d[f].g$(b,c))return 1;f=f+1|0;}return 0;}
function Yx(){B.call(this);this.o1=null;}
function AQT(a,b){var c;c=a.o1;if(VG(c.ct,AAk(c,b,1)))DT(c,b);}
function Yy(){B.call(this);this.t1=null;}
function AQ_(a,b){var c;c=a.t1;if(VG(c.ct,AAk(c,b,0)))DT(c,b);}
function Yz(){B.call(this);this.qk=null;}
function APj(a,b){var c,d,e,f,g,h,i;c=a.qk;if(c.d1!==null){a:{b:{d=ER(c,b);e=c.ct;Dm(e.dl);f=e.ig;if(f!==null)f.g(d);else{g=(Cs(e.bB)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bR(d))break a;i=i+1|0;}}}}DT(c,b);}}
function YA(){B.call(this);this.xm=null;}
function AOK(a,b){var c,d,e,f,g,h;c=a.xm;b.button;if(c.d1!==null)a:{d=ER(c,b);c=c.ct;e=b.button;Dm(c.dl);if(c.ig===null){f=(Cs(c.bB)).data;g=f.length;h=0;while(h<g){b=f[h].ci(d,e);if(b!==null){c.ig=b;c.pP=e;break a;}h=h+1|0;}}}}
function YB(){B.call(this);this.th=null;}
function AO_(a,b){var c,d,e,f,g,h,i;c=a.th;b.button;if(c.d1!==null){d=ER(c,b);e=c.ct;f=b.button;Dm(e.dl);if(f==e.pP&&e.ig!==null)e.ig=null;g=(Cs(e.bB)).data;h=g.length;i=0;a:{while(i<h){if(g[i].c5(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DT(c,b);}}
function YC(){B.call(this);this.pq=null;}
function ARH(a,b){var c,d,e,f,g,h,i,j,k;c=a.pq;if(c.d1!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.ct;f=ER(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dm(e.dl);i=(Cs(e.dG)).data;j=i.length;k=0;b:{while(k<j){if(i[k].df(f,d,h))break b;k=k+1|0;}}DT(c,b);}}
function YD(){B.call(this);this.xE=null;}
function AM1(a,b){var c,d,e,f,g,h,i,j;c=a.xE;if(c.d1!==null){d=ER(c,b);e=c.ct;f=b.button;g=b.detail;Dm(e.dl);h=(Cs(e.bB)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cB(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DT(c,b);}}
function YE(){B.call(this);this.tq=null;}
function AVO(a,b){var c,d,e,f,g,h,i;c=a.tq;if(c.d1!==null){d=ER(c,b);e=c.ct;Dm(e.dl);f=(Cs(e.e3)).data;g=f.length;h=0;a:{while(h<g){if(f[h].U(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DT(c,b);}}
function YF(){B.call(this);this.pD=null;}
function AL$(a,b){var c,d,e;b=a.pD.ct;c=(Cs(b.lm)).data;d=c.length;e=0;while(e<d){c[e].o();e=e+1|0;}Dm(b.dl);}
function YG(){B.call(this);this.ws=null;}
function AS4(a,b){var c,d,e;b=a.ws.ct;c=(Cs(b.kr)).data;d=c.length;e=0;while(e<d){c[e].o();e=e+1|0;}Dm(b.dl);}
function AAc(){B.call(this);this.vI=null;}
function AVf(a,b){var c;c=a.vI;if(c.d1!==null)ER(c,b);}
function AAd(){B.call(this);this.um=null;}
function AO2(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.um;if(N9()===c.hV){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cs(c.ct.gH)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dQ();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.ct.dl;m=new OZ;m.wJ=k;m.wK=l;g.getAsString(Bl(m,"accept"));DT(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);H(H(H(H(l,C(66)),k),C(67)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function AAe(){B.call(this);this.n$=null;}
function APp(a,b){var c;c=a.n$;if(N9()===c.hV&&SN(c.ct,Vu(c,b),0))DT(c,b);}
function AAf(){B.call(this);this.wR=null;}
function ARr(a,b){var c;c=a.wR;if(N9()===c.hV&&SN(c.ct,Vu(c,b),1))DT(c,b);}
var VT=G(0);
var V_=G();
function Nw(a,b,c){var d,e,f;d=new Tg;AZl=AZl+1|0;d.m0=b;d.l7=c;e=(Ei()).createElement("canvas");d.kF=e;f=b;e.width=f;e=d.kF;f=c;e.height=f;d.bx=d.kF.getContext("2d");return d;}
var V$=G();
function ANV(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Np(){var a=this;B.call(a);a.bf=null;a.m=null;a.b0=null;}
function AGL(){var a=this;B.call(a);a.h0=null;a.jy=null;a.hL=0;}
function CM(a){var b=new AGL();AMV(b,a);return b;}
function AMV(a,b){a.h0=b;}
function Ba(a,b){var c,d,e;c=a.hL;d=a.h0;if(c==d.data.length)a.h0=Dp(d,c+4|0);d=a.h0.data;e=a.hL;a.hL=e+1|0;d[e]=b;a.jy=null;}
function Cs(a){var b;b=a.jy;if(!(b!==null&&b.data.length==a.hL))a.jy=Dp(a.h0,a.hL);return a.jy;}
var DW=G(0);
var Cr=G(0);
var Cu=G(0);
function AN1(a,b){return 0;}
function AUb(a,b,c){return null;}
function AIC(a,b,c){return 0;}
function ARG(a,b,c,d){return 0;}
var DO=G(0);
var EJ=G(0);
var E2=G(0);
var E4=G(0);
var Fo=G(0);
function Se(){B.call(this);this.yF=null;}
function Bf(){var a=this;B.call(a);a.b=0;a.a=0;}
function B$(a,b){var c=new Bf();Rn(c,a,b);return c;}
function Rn(a,b,c){a.b=b;a.a=c;}
function Cx(a,b){a.b=b.b;a.a=b.a;}
function U(a,b,c){a.b=b;a.a=c;}
function AAD(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);V(H(V(H(d,C(68)),b),C(69)),c);return N(d);}
function LN(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function YK(){var a=this;B.call(a);a.s6=0;a.s8=0;a.s5=0;a.s4=0;}
var AFS=G();
var ABJ=G(0);
function R7(){B.call(this);this.dR=null;}
function Mk(){var a=this;B.call(a);a.b5=null;a.z6=null;}
function AEL(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(70):C(71);g=$rt_str(b.getShaderInfoLog(e));h=new M;O(h);H(H(h,f),g);g=N(h);b.deleteShader(e);Bt(BA(),g);Bt(Fb(),C(72));Bt(Fb(),d);Bt(Fb(),C(72));b=new Bu;Bi(b,g);K(b);}
function DC(){var a=this;Mk.call(a);a.pC=null;a.rj=null;a.mQ=null;}
function AZJ(a,b,c,d){var e=new DC();Jd(e,a,b,c,d);return e;}
function Jd(a,b,c,d,e){var f,g,h,i,j,k;a.z6=e;f=AEL(b,35633,c);d=AEL(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.b5=g;h=e.tM.data;i=h.length;j=0;while(j<i){c=h[j];d=a.b5;k=c.h3;c=c.ru;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.b5;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Zw(b,C(73));a.mQ=new Bf;c=a.b5;a.pC=b.getUniformLocation(c,"uResolution");c=a.b5;a.rj=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new M;O(c);H(H(c,C(74)),d);Bi(b,N(c));K(b);}
function ACJ(a,b,c){var d,e,f;if(!LN(a.mQ,c)){Cx(a.mQ,c);d=a.pC;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function JE(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.rj;b.uniform4f(e,i,l,h,j);ACJ(a,b,f);}
function Yc(){DC.call(this);this.wh=null;}
function EP(){DC.call(this);this.tc=null;}
function AWx(a,b){var c=new EP();VC(c,a,b);return c;}
function AZK(a,b,c){var d=new EP();VH(d,a,b,c);return d;}
function VC(a,b,c){VH(a,b,C(58),c);}
function VH(a,b,c,d){Kq();Jd(a,b,c,d,AZI);c=a.b5;a.tc=b.getUniformLocation(c,"sDiffuse");}
function V3(a,b,c){var d;d=a.tc;b.uniform1i(d,0);b.activeTexture(33984);c=c.fA;b.bindTexture(3553,c);}
var ADp=G(DC);
function AXy(a){var b=new ADp();AUH(b,a);return b;}
function AUH(a,b){Kq();Jd(a,b,C(58),C(75),AZI);}
function AFA(){EP.call(this);this.yR=null;}
function AX4(a){var b=new AFA();AMe(b,a);return b;}
function AMe(a,b){var c;VC(a,b,C(76));c=a.b5;a.yR=b.getUniformLocation(c,"uContrast");}
function AE6(){var a=this;EP.call(a);a.vK=null;a.rm=null;a.o8=null;a.qq=null;}
function AW7(a){var b=new AE6();ARC(b,a);return b;}
function ARC(a,b){var c;VH(a,b,C(77),C(78));c=a.b5;a.vK=b.getUniformLocation(c,"uTexTransform");c=a.b5;a.rm=b.getUniformLocation(c,"uColor");c=a.b5;a.o8=b.getUniformLocation(c,"uBgColor");c=a.b5;a.qq=b.getUniformLocation(c,"uContrast");}
function AB_(){var a=this;EP.call(a);a.xp=null;a.xn=null;a.rL=null;}
function AYe(a){var b=new AB_();ALy(b,a);return b;}
function ALy(a,b){var c,d;VC(a,b,C(79));c=a.b5;a.xp=b.getUniformLocation(c,"uColorB");d=a.b5;a.xn=b.getUniformLocation(d,"uColorF");d=a.b5;a.rL=b.getUniformLocation(d,"uContrast");}
function AE5(){var a=this;DC.call(a);a.pp=null;a.nQ=null;a.nP=null;}
function AXZ(a){var b=new AE5();ALA(b,a);return b;}
function ALA(a,b){var c;Kq();Jd(a,b,C(58),C(80),AZI);c=a.b5;a.pp=b.getUniformLocation(c,"uColor");c=a.b5;a.nQ=b.getUniformLocation(c,"uPoints1");c=a.b5;a.nP=b.getUniformLocation(c,"uPoints2");}
var TD=G(0);
var AHs=G(0);
function G7(b,c,d){var e,f,g,h;e=d.bt;f=d.bN;g=d.bo;h=d.bO;b.uniform4f(c,e,f,g,h);}
function Zw(b,c){var d,e;d=b.getError();if(d){b=BA();e=new M;O(e);V(H(e,c),d);Bt(b,N(e));}}
function R5(){var a=this;B.call(a);a.yg=null;a.yi=null;a.yh=null;}
function R6(){var a=this;B.call(a);a.eQ=null;a.g7=null;a.ov=null;a.xo=null;a.wD=null;a.tA=0;a.wT=0;}
function Co(){var a=this;B.call(a);a.yc=null;a.dj=0;}
function Dd(a,b,c){a.yc=b;a.dj=c;}
function He(){var a=this;Co.call(a);a.tM=null;a.nN=null;a.sP=null;a.lN=0;a.q8=0;a.ug=0;}
var AZI=null;var AZL=null;function Kq(){Kq=Bq(He);ANq();}
function ANq(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new He;c=R(Eb,2);d=c.data;AUq();d[0]=AZM;d[1]=AZN;Kq();Dd(b,C(81),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];ABa();switch(AZO.data[l.m$.dj]){case 1:f=f+l.fK|0;h=h+1|0;break a;case 2:e=e+l.fK|0;g=g+1|0;break a;default:}}i=i|1<<l.h3;k=k+1|0;}b.tM=c;b.lN=e;b.q8=f;b.ug=i;c=R(Eb,g);m=c.data;b.nN=c;c=R(Eb,h);n=c.data;b.sP=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];ABa();switch(AZO.data[l.m$.dj]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AZI=b;c=R(He,1);c.data[0]=b;AZL=c;}
var M2=G(0);
var U5=G(0);
var Wm=G(0);
var GO=G();
function J$(){GO.call(this);this.xS=null;}
function AC$(){var a=this;J$.call(a);a.zS=0;a.l1=0;a.ju=null;a.lq=null;a.uR=null;}
function APB(a,b){var c=new AC$();AT7(c,a,b);return c;}
function AT7(a,b,c){a.xS=b;b=new M;O(b);a.ju=b;a.lq=BV(32);a.zS=c;AC1();a.uR=AZP;}
function Vb(a,b,c,d){var e,$$je;e=a.xS;if(e===null)a.l1=1;if(!(a.l1?0:1))return;a:{try{e.li(b,c,d);break a;}catch($$e){$$je=Er($$e);if($$je instanceof I9){}else{throw $$e;}}a.l1=1;}}
function Px(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AD3(b,c,d-c|0);e=D8(Bd(16,Bb(e.length,1024)));g=ADQ(e,0,e.data.length);h=a.uR;i=new Rb;b=D8(1);j=b.data;j[0]=63;HD();k=AZQ;i.mV=k;i.l8=k;c=j.length;if(c&&c>=i.nO){i.x_=h;i.rr=b.ft();i.zM=2.0;i.nO=4.0;i.qK=BV(512);i.pn=D8(512);k=AZR;if(k===null){i=new BE;Bi(i,C(82));K(i);}i.mV=k;i.l8=k;a:while(true){if(i.jq==3){f=new CL;Y(f);K(f);}i.jq=2;b:{while(true){try{k=ABq(i,f,g);}catch($$e){$$je=Er($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(IU(k))
{d=Cc(f);if(d<=0)break b;k=Ed(d);}else if(HA(k))break;h=!MO(k)?i.mV:i.l8;c:{if(h!==AZR){if(h===AZS)break c;else break b;}d=Cc(g);b=i.rr;l=b.data.length;if(d<l){k=AZT;break b;}Y7(g,b,0,l);}EW(f,f.Z+KU(k)|0);}}l=HA(k);Vb(a,e,0,g.Z);Pu(g);if(!l){while(true){d=i.jq;if(d!=2&&d!=4){f=new CL;Y(f);K(f);}f=AZU;if(f===f)i.jq=3;l=HA(f);Vb(a,e,0,g.Z);Pu(g);if(!l)break;}return;}}K(AKN(f));}i=new BE;Bi(i,C(83));K(i);}
function Bt(a,b){var c,d,e,f,g,h,i,j;BL(BU(a.ju,b),10);b=a.ju;c=b.J;d=a.lq;if(c>d.data.length)d=BV(c);e=0;f=0;if(e>c){b=new BD;Bi(b,C(84));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Px(a,d,0,c);a.ju.J=0;}
function GC(){GO.call(this);this.zC=null;}
function AAp(a){a.zC=D8(1);}
var L3=G(GC);
var AZo=null;function ANK(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AFn(){var b;b=new L3;AAp(b);AZo=b;}
function Eb(){var a=this;Co.call(a);a.ru=null;a.m$=null;a.fK=0;a.qL=0;a.h3=0;}
var AZM=null;var AZN=null;var AZV=null;function AUq(){AUq=Bq(Eb);AMG();}
function AXj(a,b,c,d,e,f,g){var h=new Eb();X6(h,a,b,c,d,e,f,g);return h;}
function X6(a,b,c,d,e,f,g,h){AUq();Dd(a,b,c);a.ru=d;a.m$=e;a.fK=f;a.qL=g;a.h3=h;}
function AMG(){var b;b=new Eb;AEt();X6(b,C(85),0,C(86),AZW,2,0,0);AZM=b;b=AXj(C(87),1,C(88),AZW,2,0,1);AZN=b;AZV=I(Eb,[AZM,b]);}
function J2(){var a=this;B.call(a);a.xZ=null;a.yT=null;}
function AFH(b){var c,d;if(Fz(b))K(AC4(b));if(!AFJ(P(b,0)))K(AC4(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AFJ(d))break a;else K(AC4(b));}}c=c+1|0;}}
function AFJ(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var M6=G(J2);
var AZP=null;function AC1(){AC1=Bq(M6);ALw();}
function AFW(a){var b,c;b=new Vc;b.fF=C(89);HD();c=AZQ;b.hE=c;b.m3=c;b.yI=a;b.nW=0.3333333432674408;b.y_=0.5;b.pw=D8(512);b.tZ=BV(512);return b;}
function ALw(){var b,c,d,e,f;b=new M6;AC1();c=R(By,0);d=c.data;AFH(C(90));e=d.length;f=0;while(f<e){AFH(d[f]);f=f+1|0;}b.xZ=C(90);b.yT=c.ft();AZP=b;}
var K9=G();
var AZX=null;var AZO=null;function ABa(){ABa=Bq(K9);AQD();}
function AQD(){var b,c;AEt();b=BM((AZY.ft()).data.length);c=b.data;AZO=b;c[AZZ.dj]=1;c[AZW.dj]=2;AEv();c=BM((AZ0.ft()).data.length);b=c.data;AZX=c;b[AZ1.dj]=1;b[AZ2.dj]=2;}
function QQ(){var a=this;B.call(a);a.f3=null;a.nA=null;a.k2=null;a.ur=null;a.q7=null;a.rn=null;}
function ADf(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.f3,b,c));}
function NU(a,b){var c,d,e,f,g,h,i,$$je;c=new By;d=b;while(a.nA[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.f3,b,d));f=e.data;FD();d=f.length;AC1();g=AZP;h=ADQ(e,0,d);a:{try{i=AFW(g);HD();g=ABZ(AEP(AGx(i,AZR),AZR),h);break a;}catch($$e){$$je=Er($$e);if($$je instanceof F9){g=$$je;}else{throw $$e;}}h=new Zn;h.j3=1;h.kD=1;h.ie=C(91);h.l_=g;K(h);}if(!g.Z&&g.dU==g.nv)c.ca=g.h2;else{f=BV(Cc(g));e=f.data;c.ca=f;OE(g,f,0,e.length);}return c;}
function N_(a,b){var c,d,e;c=new By;d=b>>>1|0;e=d;while(a.k2[e]){e=e+1|0;}d=e-d|0;HW(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f3,b,d)));return c;}
var Hk=G(Co);
var AZZ=null;var AZW=null;var AZY=null;function AEt(){AEt=Bq(Hk);AK3();}
function ALs(a,b){var c=new Hk();AFZ(c,a,b);return c;}
function AFZ(a,b,c){AEt();Dd(a,b,c);}
function AK3(){var b;AZZ=ALs(C(92),0);b=ALs(C(93),1);AZW=b;AZY=I(Hk,[AZZ,b]);}
var GG=G(Co);
var AZ1=null;var AZ2=null;var AZ0=null;function AEv(){AEv=Bq(GG);ALG();}
function AVW(a,b){var c=new GG();ABT(c,a,b);return c;}
function ABT(a,b,c){AEv();Dd(a,b,c);}
function ALG(){var b;AZ1=AVW(C(94),0);b=AVW(C(95),1);AZ2=b;AZ0=I(GG,[AZ1,b]);}
var Ln=G(GC);
var AZp=null;function ALI(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AHv(){var b;b=new Ln;AAp(b);AZp=b;}
var Xr=G(Ef);
function AFM(){BE.call(this);this.yb=null;}
function AC4(a){var b=new AFM();ATC(b,a);return b;}
function ATC(a,b){Y(a);a.yb=b;}
var M5=G(0);
function ZO(){B.call(this);this.rc=null;}
function ASt(a,b){a.rc.setPointerCapture(b.pointerId);}
function ZP(){B.call(this);this.pY=null;}
function AJI(a,b){a.pY.releasePointerCapture(b.pointerId);}
function Hw(){var a=this;B.call(a);a.nv=0;a.Z=0;a.dU=0;a.h$=0;}
function X2(a,b){a.h$=(-1);a.nv=b;a.dU=b;}
function EW(a,b){var c,d,e;if(b>=0&&b<=a.dU){a.Z=b;if(b<a.h$)a.h$=0;return a;}c=new BE;d=a.dU;e=new M;O(e);BL(V(H(V(H(e,C(96)),b),C(97)),d),93);Bi(c,N(e));K(c);}
function Cc(a){return a.dU-a.Z|0;}
function DV(a){return a.Z>=a.dU?0:1;}
var TW=G(0);
var LK=G(Hw);
function AG$(b){var c,d;if(b>=0)return ARg(0,b,BV(b),0,b,0);c=new BE;d=new M;O(d);V(H(d,C(98)),b);Bi(c,N(d));K(c);}
function AD3(b,c,d){return ARg(0,b.data.length,b,c,c+d|0,0);}
function OE(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BD;i=new M;O(i);V(H(V(H(i,C(99)),g),C(100)),f);Bi(h,N(i));K(h);}if(Cc(a)<d){j=new MB;Y(j);K(j);}if(d<0){j=new BD;k=new M;O(k);H(V(H(k,C(101)),d),C(102));Bi(j,N(k));K(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.h2.data[m+a.nf|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BD;d=b.length;k=new M;O(k);BL(V(H(V(H(k,C(103)),c),C(97)),d),41);Bi(j,N(k));K(j);}
function KR(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.nC){b=new JF;Y(b);K(b);}e=d-c|0;if(Cc(a)<e){b=new It;Y(b);K(b);}if(c>J(b)){f=new BD;d=J(b);b=new M;O(b);BL(V(H(V(H(b,C(104)),c),C(97)),d),41);Bi(f,N(b));K(f);}if(d>J(b)){f=new BD;c=J(b);b=new M;O(b);V(H(V(H(b,C(105)),d),C(106)),c);Bi(f,N(b));K(f);}if(c>d){b=new BD;f=new M;O(f);V(H(V(H(f,C(104)),c),C(107)),d);Bi(b,N(f));K(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;T2(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function KB(){var a=this;Hw.call(a);a.l0=0;a.mL=null;a.zp=null;}
function ADQ(b,c,d){var e,f,g;e=b.data;f=new Y6;g=e.length;d=c+d|0;X2(f,g);ANw();f.zp=AZ3;f.l0=0;f.mL=b;f.Z=c;f.dU=d;f.zt=0;f.oq=0;return f;}
function Y7(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.oq){e=new JF;Y(e);K(e);}if(Cc(a)<d){e=new It;Y(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BD;j=new M;O(j);V(H(V(H(j,C(108)),h),C(100)),g);Bi(i,N(j));K(i);}if(d<0){e=new BD;i=new M;O(i);H(V(H(i,C(101)),d),C(102));Bi(e,N(i));K(e);}h=a.Z;k=h+a.l0|0;l=0;while(l<d){b=a.mL.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BD;d=b.length;i=new M;O(i);BL(V(H(V(H(i,C(103)),c),C(97)),d),41);Bi(e,N(i));K(e);}
function Pu(a){a.Z=0;a.dU=a.nv;a.h$=(-1);return a;}
function H_(){B.call(this);this.Aq=null;}
var AZS=null;var AZR=null;var AZQ=null;function HD(){HD=Bq(H_);AO5();}
function AGP(a){var b=new H_();AFD(b,a);return b;}
function AFD(a,b){HD();a.Aq=b;}
function AO5(){AZS=AGP(C(109));AZR=AGP(C(110));AZQ=AGP(C(111));}
var Oi=G(Cz);
function AOV(a){}
function ANj(a,b,c){}
function CP(){var a=this;Cz.call(a);a.gl=null;a.t=null;}
function FW(a,b){var c,d,e;Eu(a,b);a.gl=ACk(0,0,64);c=new Wd;c.cj=new Bf;c.en=CM(R(EG,0));c.dK=new Bf;c.vL=new Bf;c.xW=new B_;c.xX=new B_;c.c7=b.bf;d=b.b0;c.i$=d;c.cP=Sr(d);d=b.m.lm;e=new RZ;e.ta=c;Ba(d,e);d=b.m.kr;e=new RX;e.xg=c;Ba(d,e);a.t=c;Ba(b.m.b_,new TJ);b=b.m.b_;c=a.t;BP(c);d=new TI;d.pv=c;Ba(b,d);}
function FP(a){FE(a.bd.bf,a.gl);}
function G2(a,b,c){var d,e,f,g,h;a:{d=a.t;Cx(d.cj,b);e=d.b4;if(e!==c){d.b4=c;f=(Cs(d.en)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].g_(e,c);h=h+1|0;}}}}
var Qc=G(0);
var KK=G(0);
function AHc(a){a.jp(KG());}
function KV(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IJ;c=new Je;d=new HF;ALP();Ky(d,AZ4);M7(c,d,BO(AZ5),BO(AZ6),BO(AZ7),BO(AZ5),BO(AZ8),BO(AZ9),BO(AZ$),BO(AZ_),BO(A0a),BO(A0b));AFC();e=(A0c.ft()).data;f=e.length;g=R(JB,f);h=g.data;i=0;while(i<f){h[i]=e[i].kY;i=i+1|0;}j=AE9(S(C(112)),S(C(113)),S(C(114)),S(C(115)));k=new IQ;l=new I5;AIm();m=A0d;M_(l,m,A0e,A0f,A0g,A0h,m);Mh(k,l,AF$(),AG3(S(C(116)),S(C(117)),S(C(118))),AF$(),AAF(1,0.17499999701976776),A0i,A0j);JL(b,c,g,j,k,AAU(S(C(119)),S(C(120)),S(C(121)),S(C(122))));a.jp(b);}
function AD7(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IJ;c=new Je;d=new HF;AFY();Ky(d,A0k);M7(c,d,BO(A0l),BO(A0m),BO(A0n),BO(A0l),BO(A0o),BO(A0p),BO(A0q),BO(A0r),BO(A0s),BO(A0t));AE1();e=(A0u.ft()).data;f=e.length;g=R(JB,f);h=g.data;i=0;while(i<f){h[i]=e[i].l9;i=i+1|0;}j=AE9(S(C(123)),S(C(124)),S(C(125)),S(C(126)));k=new IQ;l=new I5;AIF();m=A0v;M_(l,m,A0w,A0x,A0y,A0z,m);Mh(k,l,AGA(),AG3(S(C(127)),S(C(128)),CQ(0)),AGA(),AAF(1,0.07500000298023224),A0A,A0B);JL(b,c,g,j,k,AAU(S(C(129)),S(C(130)),S(C(131)),S(C(132))));a.jp(b);}
var KN=G(0);
function Kr(){var a=this;CP.call(a);a.F=null;a.E=null;a.eC=null;a.hG=0;a.gi=null;a.jf=null;a.xi=null;}
function AX0(a){var b=new Kr();AC5(b,a);return b;}
function AC5(a,b){var c,d,e;FW(a,b);c=new RY;c.dq=new Bf;c.e5=new Bf;c.i5=new Bf;c.i6=new Bf;c.i3=new Bf;c.i4=new Bf;a.jf=c;a.xi=TY();c=AS1(a.t);a.eC=c;a.F=ADc(a.t,c);a.E=ADc(a.t,a.eC);c=a.F;c.bT=1;d=new WM;d.wz=a;e=new WN;e.r8=a;Yu(c,d,d);Yu(a.E,e,e);c=a.F;d=new WO;d.oE=a;c.jg=d;d=a.E;e=new WH;e.vt=a;d.jg=e;Pe(a.t,c);Ba(b.m.bB,a.eC);Ba(b.m.dG,a.eC);Ba(b.m.dG,a);Ba(b.m.bB,a);c=b.m.b_;d=new WJ;d.rO=a;Ba(c,d);c=b.m.b_;d=new IB;e=new WK;e.oi=a;N6(d,b,e);Ba(c,d);Ba(b.m.f8,a);Ba(b.m.gH,a);b=b.m.e3;c=new WL;c.tO=
a;Ba(b,c);KV(a);}
function AAv(a,b){if(a.F===b)a.hG=a.hG|1;if(a.E===b)a.hG=a.hG|2;if((a.hG&3)==3)AGO(a);}
function AUK(a,b,c){if(Ea(a.t,a.F))return Hn(a.F,b,c);if(!Ea(a.t,a.E))return 0;return Hn(a.E,b,c);}
function ADH(a){if(Ea(a.t,a.F))return Z5(a,a.F);if(!Ea(a.t,a.E))return null;return Z5(a,a.E);}
function Z5(a,b){var c;c=new WT;c.rW=b;return c;}
function XC(a,b,c){var d,e,f,g,h,i,j;d=a.gi;if(d!==null&&d.gt!==null){e=b!==a.F?0:1;f=FT(b);g=(Hj(b)+f|0)/2|0;h=g-f|0;d=a.gi;d=d.gt.data[Gr(d,g,e)];i=g-(!e?d.it:d.iu)|0;j=b.bs-W(f,b.R)|0;c.bs=L2(W(((!e?d.iu:d.it)+i|0)-h|0,c.R)+j|0,H7(c));return;}}
function AGO(a){var b,c,d,e,f,g;Bt(BA(),C(133));b=a.F.e;c=a.E.e;d=ET(b.f);e=ET(c.f);f=ABY(b.f);g=ABY(c.f);b=a.bd.b0;c=new AAg;c.tf=a;CU(b,c,C(134),I(B,[d,f,e,g]));}
function ARX(a,b){var c,d;c=LM(a.F,b);d=LM(a.E,b);return !c&&!d?0:1;}
function AO9(a){FP(a);JI(a.F);JI(a.E);AHe(a.jf,a.gi,a.t,a.F,a.E,a.xi,a.eC.Y);AAb(a.eC);}
function AM_(a){return M1(0);}
function ASL(a){OT(a.F);OT(a.E);}
function AO0(a){Z_(a.F);Z_(a.E);}
function ATU(a,b){PG(a.F,b);PG(a.E,b);}
function AOl(a,b,c){G2(a,b,c);AEi(a,b,c);}
function AEi(a,b,c){var d,e,f,g,h,i;d=new Bf;e=Cd(20.0,c);f=new Bf;g=b.b/2|0;h=e/2|0;Rn(f,g-h|0,b.a);JX(a.F,d,f,c);i=b.b;d.b=(i-(i/2|0)|0)+h|0;JX(a.E,d,f,c);U(a.jf.dq,f.b,d.a);U(a.jf.e5,d.b-f.b|0,f.a);}
function AIH(a,b){BP(b);NZ(a.eC,b);KQ(a.F,b);KQ(a.E,b);}
function AGv(a,b){if(b.bl!=121)return 0;return 1;}
function ADP(a,b){var c,d,e;if(Ea(a.t,a.F)){c=a.eC;d=a.F;e=new Ql;e.nZ=a;MW(c,b,d,a,a,e);}if(Ea(a.t,a.E)){c=a.eC;d=a.E;e=new Qk;e.w$=a;MW(c,b,d,a,a,e);}return 1;}
function AQZ(a,b){var c,d;c=DR(a.F,b.i)&&Ph(a.F,b)?1:0;d=DR(a.E,b.i)&&Ph(a.E,b)?1:0;return !c&&!d?0:1;}
function ANd(a,b,c,d){var e,f;e=DR(a.F,b.i)&&NX(a.F,b,c,d)?1:0;f=DR(a.E,b.i)&&NX(a.E,b,c,d)?1:0;return !e&&!f?0:1;}
function APi(a,b,c){var d,e,f,g,h,i,j,k;d=DR(a.F,b.i);e=DR(a.E,b.i);f=a.t;g=f.ex;h=g!==null?0:1;i=a.F;j=g!==i?0:1;k=g!==a.E?0:1;if(d&&!(!h&&!k))F5(f,i);if(e&&!(!h&&!j))F5(a.t,a.E);if(d){i=NE(a.F,b,c);if(i!==null)return i;}return !e?null:NE(a.E,b,c);}
function ARO(a,b,c){var d,e,f,g;d=DR(a.F,b.i);e=DR(a.E,b.i);f=d&&U3(a.F,b,c)?1:0;g=e&&U3(a.E,b,c)?1:0;return !f&&!g?0:1;}
function ARl(a,b,c,d){var e,f,g,h;e=DR(a.F,b.i);f=DR(a.E,b.i);g=e&&Kw(a.F,c,d)?1:0;h=f&&Kw(a.E,c,d)?1:0;return !g&&!h?0:1;}
function AN7(a){return ADH(a);}
var XE=G(Kr);
function APw(a){return M1(1);}
function Qo(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new NI;d=d.then(Bl(e,"f"));f=new NL;f.te=b;f.td=c;g=new NJ;d.then(Bl(f,"f"),Bl(g,"f"));}
var AGJ=G();
function ATS(b){var c,d;if(J(b)>0){c=new M;O(c);H(H(c,C(135)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(IX(b)){case -1570047148:if(!Bn(b,C(136)))break a;d=16;break a;case -1509980539:if(!Bn(b,C(137)))break a;d=12;break a;case -1073555521:if(!Bn(b,C(138)))break a;d=13;break a;case -1045861099:if(!Bn(b,C(139)))break a;d=17;break a;case -1045861098:if(!Bn(b,C(140)))break a;d=18;break a;case -811765794:if(!Bn(b,C(141)))break a;d=5;break a;case -785237654:if(!Bn(b,C(142)))break a;d=10;break a;case -631889171:if
(!Bn(b,C(143)))break a;d=8;break a;case -439438829:if(!Bn(b,C(144)))break a;d=19;break a;case -223304637:if(!Bn(b,C(145)))break a;d=2;break a;case 2129957:if(!Bn(b,C(146)))break a;d=1;break a;case 3343967:if(!Bn(b,C(147)))break a;d=9;break a;case 3556498:if(!Bn(b,C(148)))break a;d=4;break a;case 485517998:if(!Bn(b,C(149)))break a;d=6;break a;case 544901384:if(!Bn(b,C(150)))break a;d=3;break a;case 1030621992:if(!Bn(b,C(151)))break a;d=15;break a;case 1465713255:if(!Bn(b,C(152)))break a;d=7;break a;case 1554501643:if
(!Bn(b,C(153)))break a;d=14;break a;case 1609169232:if(!Bn(b,C(154)))break a;d=11;break a;default:}}b:{switch(d){case 1:break;case 2:b=new XK;break b;case 3:case 4:b=new XH;break b;case 5:b=new XG;break b;case 6:b=new XJ;break b;case 7:b=new XI;break b;case 8:case 9:b=new XO;break b;case 10:b=new XN;break b;case 11:b=new XQ;break b;case 12:b=new XP;break b;case 13:b=new UR;break b;case 14:b=new UQ;break b;case 15:b=new UP;break b;case 16:b=new UI;break b;case 17:b=new UH;break b;case 18:b=new UF;break b;case 19:b
=new UE;break b;default:b=new UD;break b;}b=new XL;}return b;}
var AD0=G();
var KL=G(LK);
function ADF(){var a=this;KL.call(a);a.nC=0;a.nf=0;a.h2=null;}
function ARg(a,b,c,d,e,f){var g=new ADF();AV4(g,a,b,c,d,e,f);return g;}
function AV4(a,b,c,d,e,f,g){X2(a,c);a.Z=e;a.dU=f;a.nf=b;a.nC=g;a.h2=d;}
function T2(a,b,c){a.h2.data[b+a.nf|0]=c;}
function Lv(){var a=this;B.call(a);a.x_=null;a.rr=null;a.zM=0.0;a.nO=0.0;a.mV=null;a.l8=null;a.jq=0;}
function Ms(){var a=this;B.call(a);a.g9=0;a.i2=0;}
var AZU=null;var AZT=null;function ABA(a,b){var c=new Ms();ACh(c,a,b);return c;}
function ACh(a,b,c){a.g9=b;a.i2=c;}
function IU(a){return a.g9?0:1;}
function HA(a){return a.g9!=1?0:1;}
function Lm(a){return !SD(a)&&!MO(a)?0:1;}
function SD(a){return a.g9!=2?0:1;}
function MO(a){return a.g9!=3?0:1;}
function KU(a){var b;if(Lm(a))return a.i2;b=new D_;Y(b);K(b);}
function Ed(b){return ABA(2,b);}
function Xa(a){var b,c;switch(a.g9){case 0:b=new R$;Y(b);K(b);case 1:b=new Zv;Y(b);K(b);case 2:b=new W1;c=a.i2;Y(b);b.AN=c;K(b);case 3:b=new RV;c=a.i2;Y(b);b.AF=c;K(b);default:}}
function ACK(){AZU=ABA(0,0);AZT=ABA(1,0);}
var ABl=G();
var I4=G(0);
var Os=G();
function ALR(a,b){return b.arrayBuffer();}
var Or=G();
function AQh(a,b){var c,d;c=new QO;d=new QM;return $rt_globals.WebAssembly.instantiate(b,ANT(Bl(c,"f"),Bl(d,"f")));}
var Op=G();
function AQ6(a,b){AJz(b);}
var Oo=G();
function AKg(a,b){AGT(b);}
function Vv(){B.call(this);this.oM=null;}
function AVi(a,b){L0(a.oM.F,b);}
function Vx(){B.call(this);this.uw=null;}
function AOb(a,b){L0(a.uw.E,b);}
var XL=G();
function AUa(a,b){return AX0(b);}
var XK=G();
function AIi(a,b){return AX$(b);}
var XH=G();
function ALn(a,b){return AYB(b);}
var XG=G();
function AQf(a,b){var c,d,e;c=new Po;FW(c,b);d=new NK;d.mO=new Bf;d.ns=new Bf;c.rq=d;c.ee=AD2();c.c9=AD2();c.eB=Sc(c.t);Ba(c.t.en,c);d=b.m.b_;e=new VO;e.uz=c;Ba(d,e);Ba(b.m.bB,c);b=b.m.e3;d=new VK;d.v$=c;Ba(b,d);AAs(c.c9);c.nI=EX(C(155),25.0);JH(c.eB,Hi(),c.nI);BJ(c.gl,CQ(43));b=Hi();Im(c.ee,b);Im(c.c9,b);b=c.ee;b.kd=new VL;d=c.c9;d.kd=new VM;d.lz=new P1;d.nU=new P2;KW(b,(S0(0)).jJ);KW(c.c9,(S0(0)).jJ);return c;}
var XJ=G();
function ALt(a,b){var c,d,e;c=new UG;FW(c,b);c.lk=EX(C(156),15.0);d=AEH();c.fm=d;Ba(c.t.en,d);Ba(c.t.en,c);BJ(c.gl,CQ(43));d=Sc(c.t);c.iG=d;JH(d,Hi(),EX(C(155),25.0));d=b.m.b_;e=new Xz;e.yt=c;Ba(d,e);d=b.m.e3;e=new XB;e.v_=c;Ba(d,e);Ba(b.m.bB,ACD(c.iG));Ba(b.m.bB,c.fm);b=b.m.dG;d=c.fm;BP(d);e=new XA;e.r$=d;Ba(b,e);return c;}
var XI=G();
function AHz(a,b){var c,d,e;c=new Ox;FW(c,b);c.g3=BH();c.fS=BH();c.qx=S(C(157));c.iX=ATy();c.g2=0;d=c.t.en;e=new N0;e.qj=c;Ba(d,e);Ba(b.m.bB,c);d=b.m.b_;e=new NY;e.wE=c;Ba(d,e);b=HT(b.bf,C(155),35);c.i8=b;c.kw=ABn(Fj(b));BJ(c.gl,S(C(158)));return c;}
var XO=G();
function AK1(a,b){var c,d,e,f;c=new UC;Eu(c,b);c.g5=AGS();c.et=0;c.uV=500;c.qy=H8(0,0,0,255,new B_);c.kS=20;c.o_=20;c.t6=KG();d=b.m.bB;e=new Oc;e.jB=c;f=new WG;f.tX=e;e.ql=f;Ba(d,e);d=b.m.dG;e=new TK;e.u5=c;Ba(d,e);c.eR=b.bf;c.pM=Sr(b.b0);Tj(c.g5,HT(c.eR,C(155),c.o_),c.kS,c.eR);c.iw=Jc();return c;}
var XN=G();
function AOJ(a,b){var c,d;c=new R_;GN(c,b);b=b.m.b_;d=new Rr;d.r0=c;Ba(b,d);return c;}
var XQ=G();
function ASO(a,b){return AYs(b);}
var XP=G();
function AHM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new NV;GN(c,b);c.er=FZ(0,0,300,300);c.fX=U$(0,0,3,3);d=b.bf;b=b.m.bB;e=new VZ;e.lE=c;Ba(b,e);b=AHb(d);c.vy=b;Gd(c.er,b);GH(c.er);b=c.er.bA;F0();BJ(b,A0C);BJ(c.er.bq,CR(204,120,50));AEv();e=AZ2;f=D8((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CZ(d);ABa();switch(AZX.data[e.dj]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b
=new EB;Y(b);K(b);}b:{Ok(m,5,5,h);b=m.eu.dR;switch(AZX.data[e.dj]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new EB;Y(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.ms=m;U(c.fX.s,BT(m),Da(c.ms));BJ(c.fX.bA,c.mY);return c;}
var UR=G();
function AH_(a,b){var c,d,e;c=new Uw;GN(c,b);c.gk=FZ(0,0,300,300);c.kM=new Bf;c.jC=new Bf;c.im=new Bf;d=b.bf;b=b.m.bB;e=new PF;e.jr=c;Ba(b,e);b=AHb(d);c.oZ=b;Gd(c.gk,b);GH(c.gk);b=c.gk.bA;F0();BJ(b,A0C);BJ(c.gk.bq,CR(204,120,50));return c;}
var UQ=G();
function AOj(a,b){var c,d,e,f;c=new Ul;Eu(c,b);c.Ag=20;c.AH=11;c.x2=220;c.kh=new Bf;c.zB=5000;c.hA=1;c.ga=I(HF,[CQ(0),CQ(255)]);c.ew=b.bf;d=b.m.bB;e=new Ro;e.jP=c;f=new X4;f.sR=e;e.oB=f;Ba(d,e);b=b.m.dG;d=new AAi;d.pR=c;Ba(b,d);b=CO(c.ew,200,220);c.kT=b;Gp(b,C(155),20.0);b=CO(c.ew,200,20);c.fZ=b;Gp(b,C(155),20.0);c.h5=Jc();return c;}
var UP=G();
function APS(a,b){var c,d,e;c=new Jw;GN(c,b);Ba(b.m.bB,c);d=b.m.b_;e=new YZ;e.nS=c;Ba(d,e);Ba(b.m.f8,new YY);d=b.m.f8;e=new YX;e.re=c;Ba(d,e);Ba(b.m.gH,new YV);d=b.m.gH;e=new Y0;e.ty=c;Ba(d,e);b=!ZR(b.b0)?C(159):C(160);d=new M;O(d);H(H(d,C(161)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var UI=G();
function ALW(a,b){var c,d,e,f,g,h;c=new T3;Eu(c,b);c.ud=CQ(20);c.gd=FZ(0,0,300,300);d=b.m.b_;e=new TH;e.Az=c;Ba(d,e);b=b.bf;d=HT(b,C(10),88);CC(b.cS,d);f=Dl(AUO(EA(b.cS,C(162)),EA(b.cS,C(163))));g=KM(d,1.1799999475479126);h=BA();e=new M;O(e);V(H(V(H(e,C(164)),f),C(165)),g);Bt(h,N(e));e=CO(b,f,g*3|0);c.hU=e;CC(e,d);Ch(c.hU,C(162),0.0,d.dx);Ch(c.hU,C(163),0.0,g+d.dx);Ch(c.hU,C(166),0.0,(g*2|0)+d.dx);b=CZ(b);c.lP=b;CS(b,c.hU);Gd(c.gd,c.lP);GH(c.gd);b=c.gd.bA;F0();BJ(b,A0C);BJ(c.gd.bq,A0D);return c;}
var UH=G();
function AHT(a,b){var c;c=new Vn;Nj(c,b);Hv(c.ck,0,0,300,300);U(c.dd,300,300);return c;}
var UF=G();
function AUi(a,b){var c;c=new Vm;Nj(c,b);c.fz=new Bf;c.gf=new Bf;U(c.d4,150,140);U(c.dd,500,100);U(c.e$,150,200);U(c.ev,500,250);return c;}
var UE=G();
function AOW(a,b){var c,d,e,f;c=new Zj;FW(c,b);c.pZ=EX(C(156),20.0);d=AEH();c.ey=d;Ba(c.t.en,d);Ba(c.t.en,c);BJ(c.gl,CQ(43));d=Sc(c.t);c.hY=d;JH(d,Hi(),EX(C(155),25.0));d=b.m.b_;e=new Z8;e.zD=c;Ba(d,e);d=b.m.e3;e=new Z$;e.rY=c;Ba(d,e);Ba(b.m.bB,ACD(c.hY));Ba(b.m.bB,c.ey);d=b.m.bB;e=c.t.cP;f=new Uk;f.u$=e;Ba(d,f);b=b.m.dG;d=c.ey;BP(d);e=new Z9;e.vJ=d;Ba(b,e);return c;}
var UD=G();
function ASQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new Nx;AHf(c,b);d=c.c0;e=new Jx;f=ARD(C(167));g=R(By,8);h=J(C(168));i=0;j=0;k=h+1|0;while(true){l=G9(C(168),10,j);m=l>=0?Ca(C(168),j,l):Do(C(168),j);n=i+1|0;g=AFP(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}ZM(e,Q0(g,n),C(169),f);L0(d,e);return c;}
function HC(){var a=this;B.call(a);a.bP=0;a.cq=0;a.dh=0;a.jI=0;}
function A0E(a,b,c,d){var e=new HC();V8(e,a,b,c,d);return e;}
function V8(a,b,c,d,e){a.bP=d;a.cq=b;a.dh=c;a.jI=e;}
function QG(){var a=this;HC.call(a);a.ea=null;a.bl=0;a.ii=0;a.tv=0;a.k6=0;}
var AF3=G();
function Yj(b,c){return (b+(c/2|0)|0)/c|0;}
function RH(b,c,d){if(b<(2147483647/c|0))return Yj(W(b,c),d);return 0.5+c*b/d|0;}
function Jh(b,c){return ((b+c|0)-1|0)/c|0;}
function HN(b){return b+0.5|0;}
function Dl(b){return b+0.5|0;}
function EH(b,c,d){return Bd(b,Bb(c,d));}
function Nm(){var a=this;HC.call(a);a.i=null;a.x0=null;}
var VW=G(0);
function OZ(){var a=this;B.call(a);a.wJ=null;a.wK=null;}
function AOo(a,b){var c,d;c=a.wJ;d=a.wK;$rt_globals.console.info("paste plain string "+b);c.g(FS(b));Dm(d);}
function WB(){B.call(this);this.xl=null;}
function Ye(a,b){a.xl.clipboardData.setData("text/plain",$rt_ustr(b));}
function Y6(){var a=this;KB.call(a);a.zt=0;a.oq=0;}
function RY(){var a=this;B.call(a);a.dq=null;a.e5=null;a.i5=null;a.i6=null;a.i3=null;a.i4=null;}
function AHe(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=c.c7;i=a.dq;Bx(h,i.b,i.a,a.e5,g.b8.fk);if(b!==null&&b.gt!==null){j=CF(c,2.0);k=Gr(b,FT(d),1);l=Gr(b,Hj(d),1);m=Gr(b,FT(e),0);n=Gr(b,Hj(e),0);o=Bb(k,m);p=Bd(l,n);n=BG(o,p);if(n<=0)Cw(h,1);while(o<=p){q=b.gt.data[o];if(q.lf){k=d.R;r=W(k,q.iu)-d.bs|0;s=r+W(q.nq,k)|0;k=e.R;t=W(k,q.it)-e.bs|0;u=t+W(q.np,k)|0;U(a.i5,a.dq.b,r);U(a.i3,a.dq.b,s);U(a.i6,a.dq.b+a.e5.b|0,t);U(a.i4,a.dq.b+a.e5.b|0,u);v=Bd(Bb(r,t),a.dq.a);w=Bb(Bd(s,u),a.dq.a+a.e5.a|0);Hv(f,
a.dq.b,v,a.e5.b,w-v|0);BJ(f.bA,g.hr.hi);BJ(f.bq,I1(g.dY,g,q.lf));if(r==s){x=c.dK;U(x,a.dq.b-d.ba.b|0,j);if(t>=r){i=a.i3;U(i,i.b,i.a+j|0);k=r;}else{k=r-j|0;i=a.i5;U(i,i.b,i.a-j|0);}Bx(h,d.ba.b,k,x,f.bq);}if(t==u){i=c.dK;U(i,e.cz.b,j);if(r>=t){x=a.i4;U(x,x.b,x.a+j|0);}else{t=t-j|0;x=a.i6;U(x,x.b,x.a-j|0);}Bx(h,a.dq.b+a.e5.b|0,t,i,f.bq);}i=f.A;AAC(h,i.b,i.a,f.s,a.i5,a.i6,a.i3,a.i4,f.bq);}o=o+1|0;}if(n<=0)Cw(h,0);return;}}
function Ju(){var a=this;B.call(a);a.A=null;a.s=null;a.bq=null;a.bA=null;}
function TY(){var a=new Ju();WF(a);return a;}
function U$(a,b,c,d){var e=new Ju();AKa(e,a,b,c,d);return e;}
function WF(a){a.A=new Bf;a.s=new Bf;a.bq=new B_;a.bA=new B_;}
function AKa(a,b,c,d,e){a.A=new Bf;a.s=new Bf;a.bq=new B_;a.bA=new B_;Hv(a,b,c,d,e);}
function Hv(a,b,c,d,e){U(a.A,b,c);U(a.s,d,e);}
function U9(a){U(a.s,0,0);}
function K3(a){var b;b=a.s;return W(b.b,b.a)?0:1;}
function Eq(a,b){return Gw(b,a.A,a.s);}
function Tc(a,b,c,d){var e;e=a.A;Bx(b,e.b+c|0,e.a+d|0,a.s,a.bq);}
function Z7(a,b,c,d,e,f){var g,h,i,j;g=a.A;d=g.b+d|0;e=g.a+e|0;g=a.s;h=a.bA;i=a.bq;IV(b,b.ih);JE(b.ih,b.bv,d,e,g,b.dL);V3(b.ih,b.bv,c);g=b.ih;j=b.bv;G7(j,g.xp,h);G7(j,g.xn,i);c=g.rL;j.uniform2f(c,f,0.0);IO(b);}
function ADN(){var a=this;B.call(a);a.eH=null;a.eO=null;a.du=null;a.ch=null;a.Y=null;}
function AS1(a){var b=new ADN();ARi(b,a);return b;}
function ARi(a,b){a.eO=AEH();a.eH=b;a.ch=Sc(b);}
function NZ(a,b){var c;a.Y=b;c=a.du;if(c!==null)c.e_=b.V;JH(a.ch,b.V,b.wu);}
function AAb(a){LQ(a.eO,a.eH.c7);HV(a.ch);}
function AQ4(a,b){return !AAT(a.eO,b)&&!LC(a.ch,b)?0:1;}
function AUD(a,b,c,d){return !ABW(a.eO,b,c,d)&&!Kz(a.ch,b,c,d)?0:1;}
function ASd(a,b,c){var d;d=M4(a.ch,b,c);if(d!==null)return d;return ADI(a.eO,b,c);}
function AOv(a,b,c){return !AGY(a.eO,b,c)&&!DD(a.ch)?0:1;}
function SP(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=ANx();i=c.j;j=0;while(j<i){if(f===null){k=(Br(c,j)).bm;l=Tz(Fe(BR(g.f,k)));m=Us(g.gK);}else{n=f.data;k=n[j].mk.l5;l=!BW(g.gK,n[j].jS)?C(30):Tz(Fe(BR(g.f,k)));m=Us(n[j].jS);}if(J(l)>153){o=Ca(l,0,150);n=new M;O(n);H(H(n,o),C(170));l=N(n);}if(J(m)>153){o=Ca(m,0,150);n=new M;O(n);H(H(n,o),C(170));m=N(n);}p=C8(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Br(c,j);}if(f!==null){q=new Zo;q.rk=d;q.rl=o;}else{q=new Zp;q.wN=d;q.wM=n;}Nh(h,
m,p,l,q);j=j+1|0;}r=YI(h);if(a.du!==null)U0(a);c=new Sg;n=a.eH;o=new P$;o.va=a;o.u_=d;AGt(c,n,o);OL(c,r);d=a.Y;AAt(c,d.V,d.w8);a.du=AAZ(a.eH);d=AAE(c,a.eH);n=a.Y.V;AAm(d,n.ls,n.k7);K2(a.du,d);d=a.du;n=new M;O(n);H(H(n,C(171)),e);Ir(d,N(n),a.Y.vH,4.0);d=a.du;d.e_=a.Y.V;HS(a.eO,d);d=a.du;s=(d.T.r.a+CF(d.bE,2.0)|0)+CF(a.eH,2.0)|0;i=(c.dT+c.eD|0)+c.gr|0;t=CF(c.cx,5.0);e=B$(EH(t,b.b,c.cx.cj.b-i|0),EH(s,b.a,c.cx.cj.a-c.c1.a|0));Re(c);ACb(c);s=(c.dT+c.eD|0)+c.gr|0;b=c.cx;i=(b.cj.b-e.b|0)-CF(b,5.0)|0;b=c.cx;t=(b.cj.a
-e.a|0)-CF(b,5.0)|0;d=B$(Bb(s,i),Bb(c.c1.a,t));FI(a.du,e,d);F5(a.eH,c);}
function U0(a){J1(a.eO,a.du);LS(a.du);a.du=null;}
function Sw(a,b){var c;c=new Tt;c.qN=a;c.qO=b;return c;}
function MW(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DD(a.ch)){g=a.ch;h=b.i;b=new U2;b.X=a;b.bK=c;b.pu=f;b.iK=e;b.kC=d;i=U6();e=b.bK.e;d=DY(e);e=Gx(e);f=b.bK.fn;if(Sp(f,d,e)!==null){j=b.X.Y.V.bg;k=new V1;k.u7=b;k.u8=h;D3(i,C(172),j,k);}if(MR(f,d,e)!==null){j=b.X.Y.V.bg;k=new V2;k.vd=b;k.ve=h;D3(i,C(173),j,k);}if(VX(f,d,e)!==null){e=b.X.Y.V.bg;f=new V0;f.s3=b;f.s2=h;D3(i,C(174),e,f);}e=b.X.Y.V.bg;f=new VY;f.rz=b;f.ry=h;D3(i,C(175),e,f);if(!b.bK.ei){e=b.X.Y.V.bg;f=new VB;f.pr=b;D3(i,C(176),e,f);}e=b.X.Y.V.bg;f
=new Vz;f.sW=b;D3(i,C(177),e,f);if(!b.bK.ei&&ZR(IK(b))){e=b.X.Y.V.bg;f=new VA;f.vG=b;D3(i,C(178),e,f);}l=b.X.Y.V.bg;d=U6();m=b.X.Y.V.bg;n=R(C$,3);o=n.data;k=b.kC;BP(k);e=new Yg;e.tD=k;o[0]=DL(C(179),m,e);k=b.X.Y.V.bg;p=b.kC;BP(p);e=new Yf;e.p7=p;o[1]=DL(C(180),k,e);e=b.X.Y.V.bg;j=b.kC;BP(j);k=new Yi;k.rw=j;o[2]=DL(C(181),e,k);Kp(d,C(182),m,Gb(n),A0F);f=b.X.Y.V.bg;n=R(C$,2);o=n.data;k=b.iK;BP(k);j=new Zt;j.wj=k;o[0]=DL(C(183),f,j);j=b.X.Y.V.bg;k=b.iK;BP(k);p=new Zs;p.rF=k;o[1]=DL(C(184),j,p);GP(d,C(185),f,Gb(n));f
=b.X.Y.V.bg;j=new Pn;j.vg=b;Kp(d,C(186),f,j,A0F);GP(i,C(187),l,II(d));k=b.X.Y.V.bg;d=U6();GP(d,C(188),b.X.Y.V.bg,ADq(b));f=b.X.Y.V.bg;m=new AAn;m.p8=b;D3(d,C(189),f,m);GP(i,C(190),k,II(d));GF(g,h,II(i),Sw(a,c));}}
function ASD(a,b,c,d){return LL(a.eO,b,c,d);}
function AB$(b){var c;c=new U8;c.wn=b;return c;}
var H5=G(0);
function AP8(a){}
function AL4(a){}
function ACZ(){var a=this;B.call(a);a.ba=null;a.cz=null;a.cE=null;a.W=null;a.j_=null;a.xG=0;a.nz=null;a.c4=null;a.u=0;a.y=0;a.ib=0;a.mC=0;a.gq=0;a.kn=null;a.fQ=null;a.cI=null;a.R=0;a.e=null;a.eJ=null;a.fn=null;a.q=null;a.he=null;a.dZ=null;a.kK=null;a.hd=null;a.vP=0;a.tp=0;a.cU=0;a.cl=0;a.cu=0;a.fx=null;a.fp=null;a.fr=null;a.bs=0;a.dC=0;a.hM=0;a.iN=0;a.iT=0;a.AR=0;a.yk=0;a.kv=0;a.jN=0;a.j5=0;a.d_=0;a.di=null;a.kl=0;a.i0=0;a.fi=null;a.ei=0;a.bT=0;a.h6=null;a.hj=null;a.x6=null;a.iI=null;a.sq=null;a.uq=null;a.jg
=null;a.lO=0;a.xO=null;a.fw=Fa;a.pJ=null;a.vv=null;}
function ADc(a,b){var c=new ACZ();ARK(c,a,b);return c;}
function ARK(a,b,c){var d,e,f,g;a.ba=new Bf;a.cz=new Bf;a.xG=0;a.nz=R(Bj,10);a.c4=AMH();a.gq=16;a.kn=C(155);a.cI=R(LJ,4);d=new Jx;e=new Le;e.dn=IM();e.c_=IM();e.gR=BH();e.z=VP(C(30));e.h4=0;e.cL=0;e.c8=VQ(e);e.d2=ASf();d.f=e;d.j1=C(191);d.gK=null;a.e=d;f=new ZA;f.qV=CM(R(K0,0));f.xD=CM(R(K0,0));f.oo=CM(R(UK,0));f.wo=CM(R(RK,0));f.vO=CM(R(FV,0));f.vq=CM(R(T6,0));a.fn=f;a.q=AJe();e=new V7;e.fa=R(LB,16);e.e6=0;e.dE=(-1);a.he=e;a.hd=R(ES,0);a.fx=B$(1,0);a.fp=Jc();a.fr=Jc();a.bs=0;a.dC=0;a.hM=0;a.iT=1;a.kv=1;a.jN
=1;a.j5=0;a.d_=3;a.di=AGS();a.fi=C(192);a.ei=0;a.bT=0;a.h6=null;a.hj=BH();e=Fb();BP(e);f=new Pa;f.zX=e;a.iI=f;a.xO=new B_;e=new O_;e.n4=a;a.pJ=e;e=new O$;e.so=a;a.vv=e;a.cE=b;a.W=b.c7;a.j_=c;g=a.nz.data;b=new O9;b.v2=a;g[0]=b;b=new Pf;b.pA=a;g[1]=b;b=new Pd;b.tG=a;g[2]=b;b=new Pc;b.xL=a;g[3]=b;b=new Pb;b.pm=a;g[4]=b;b=new O8;b.sU=a;g[5]=b;b=new O7;b.wB=a;g[6]=b;AIc();a.iN=A0G===A0H?0:1;}
function JX(a,b,c,d){Cx(a.ba,b);Cx(a.cz,c);Uy(a,b,c,d);}
function Yu(a,b,c){a.sq=b;a.uq=c;}
function Uy(a,b,c,d){var e;a.cU=Cd(80.0,d);a.cl=Cd(1.0,d);a.cu=Cd(10.0,d);if(!a.bT)Cx(a.cE.dK,a.ba);else U(a.cE.dK,(b.b+c.b|0)-JQ(a)|0,b.a);TU(a.di,a.cE.dK,JQ(a),c.a,d);b=a.c4;e=Cd(2.0,d);b.eG.s.b=e;SO(a,a.kn,a.gq);Wp(a);}
function ALS(a){a.mC=1;L9(a);}
function AIL(a){a.mC=0;}
function L9(a){Rv(a.c4,Kc(Ct(a)));}
function KQ(a,b){var c,d;a.dZ=b;c=a.c4;d=b.b8.xC;BJ(c.eG.bq,d);c=a.fp;d=b.b8;Hm(c,d.l3,d.mb);c=a.fr;b=b.b8;Hm(c,b.l3,b.mb);}
function OT(a){JP(a,a.fQ.nt,a.gq+1|0);}
function Z_(a){var b;b=a.gq;if(b<=7)return;JP(a,a.fQ.nt,b-1|0);}
function PG(a,b){JP(a,b,a.gq);}
function JP(a,b,c){if(a.cE.b4!==0.0){SO(a,b,c);Gs(Ct(a));}a.gq=c;a.kn=b;}
function SO(a,b,c){var d,e,f,g,h,i;d=Cd(c,a.cE.b4);e=a.fQ;f=e!==null?e.qG:0;if(!(d==f&&BW(b,a.kn))){Qx(a.di);g=a.hd.data;c=g.length;f=0;while(f<c){ZU(g[f]);f=f+1|0;}g=a.e.f.z.data;c=g.length;f=0;while(f<c){Ev(g[f]);f=f+1|0;}g=a.cI.data;c=HO(0,0);e=a.W;h=d;g[c]=Hl(e,b,h,400,0);a.cI.data[HO(0,1)]=Hl(a.W,b,h,400,2);a.cI.data[HO(1,0)]=Hl(a.W,b,h,700,0);a.cI.data[HO(1,1)]=Hl(a.W,b,h,700,2);e=a.cI.data[HO(0,0)];a.fQ=e;c=Fj(e);a.R=Dl(c*1.25);a.c4.eG.s.a=Fj(a.fQ);a.kK=CK(a.kK,CO(a.W,1024,a.R));f=a.R;i=Ze(a.c4);e=new M;O(e);b
=H(H(e,C(193)),b);BL(b,32);V(H(V(H(V(H(V(b,d),C(194)),c),C(165)),f),C(195)),i);$rt_globals.console.info($rt_ustr(N(e)));if(A0I){c=Lr(a.fQ,a.R);b=new M;O(b);V(H(b,C(196)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.ib=GR(FF(a),a.y,a.W.cS,a.cI);Hr(a);Wp(a);}}
function Nl(a){return W(CB(a.e.f)+5|0,a.R);}
function H7(a){return Bd(Nl(a)-a.cz.a|0,0);}
function U4(a){return Bd(a.hM-Dk(a)|0,0);}
function Dk(a){var b;b=!a.bT?0:C9(a)+a.cu|0;return Bd(1,(a.cz.b-a.cU|0)-b|0);}
function JQ(a){return a.bT?a.cU:a.cU-a.cu|0;}
function DP(a){return a.cz.a;}
function LM(a,b){var c,d,e;c=a.e.f;d=c.h4;e=c.cL;d=d!=e&&b-c.tP>0.03125?1:0;if(d&&a.lO!=e){a.lO=e;Ta(a);}d=L2((a.bs+a.AR|0)-a.yk|0,H7(a));e=a.bs==d?0:1;if(e)FX(a,d);return !U7(a.c4,b)&&!e&&!a.xG?0:1;}
function FX(a,b){var c,d;c=L2(b,H7(a));if(c!=a.bs){a.bs=c;d=a.uq;if(d!==null)d.iZ(c);}}
function Jk(a,b){var c,d;c=L2(b,U4(a));if(c!=a.dC){a.dC=c;d=a.sq;if(d!==null)d.iZ(c);}}
function JI(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;b=Jh(a.cz.a,a.R)+7|0;c=a.hd;if(c.data.length<b)a.hd=ACQ(b,c,a.vP,a.tp,a.e.f);Cw(a.W,0);Tq(a.W,a.ba,a.cz);d=(a.R-Ze(a.c4)|0)/2|0;e=(a.ib-(UY(a.c4)/2|0)|0)-a.dC|0;f=!a.bT?a.cU:(a.cl+a.cu|0)+C9(a)|0;W_(a.c4,f+e|0,(d+W(a.u,a.R)|0)-a.bs|0);g=CB(a.e.f);h=FT(a);i=Hj(a);a.vP=h;a.tp=i;j=a.cE.dK;U(j,Dk(a),a.R);k=!a.bT?a.ba.b+a.cU|0:((a.ba.b+a.cl|0)+a.cu|0)+C9(a)|0;l=h;while(l<=i&&l<g){m=BR(a.e.f,l);n=Xs(a,l);ABR(n,m,a.kK,a.cI,a.W,a.R,Dk(a),a.dC);o=n.b7;a.hM
=Bd(a.hM,E8(m)+(40.0*a.cE.b4|0)|0);p=W(a.R,l)-a.bs|0;c=a.eJ;q=c===null?null:c.data[l];b=a.ba.a+p|0;m=a.W;r=a.xO;s=!a.iN?0.0:0.5;d=Dk(a);f=a.R;p=a.dC;t=a.dZ;u=AEU(a.q,l);if(u!==null){if(u.a==(-1))u.a=o.I;u.b=GR(o,u.b,a.W.cS,a.cI);u.a=GR(o,u.a,a.W.cS,a.cI);}AFv(n,b,k,m,r,j,s,d,f,p,t,u,a.h6,a.hj,a.u!=l?0:1,a.eJ===null?0:1,q);l=l+1|0;}l=h;while(l<=i&&l<g&&a.kv){n=Xs(a,l);p=W(a.R,l)-a.bs|0;v=AF2(a.q,l);m=a.dZ;q=m.b8;r=q.rM;w=a.u==l&&a.eJ===null?1:0;a:{if(v)r=q.nw;else{c=a.eJ;if(c!==null){c=c.data;if(l<c.length&&
c[l]!==null){r=I1(m.dY,m,c[l].gx);break a;}}if(w)r=q.i7;}}AB7(n,a.W,k,a.ba.a+p|0,a.R,j,a.dC,Dk(a),r);l=l+1|0;}if(a.iT){x=Bb(i+1|0,g);AD_(a,W(a.R,x)-a.bs|0);}AFh(a);AEl(a,h,i);if(a.jN)AHa(a,h,i,g);if(a.mC&&e>=(( -UY(a.c4)|0)/2|0)){n=a.c4;m=a.cz;if(ABL(n.eG.A,0,0,m))WE(a.c4,a.W,a.ba);}AEQ(a);ADR(a);Hq(a.W);}
function AHa(a,b,c,d){var e,f,g,h,i,j,k,l;while(b<=c&&b<d){a:{e=a.eJ;if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dZ;h=I1(h.dY,h,g.gx);}else h=e!==null?a.dZ.b8.fk:a.dZ.b8.i7;if(!(a.u!=b&&g===null)){a.fx.b=!a.bT?(a.cu-a.cl|0)-a.d_|0:((a.cu+C9(a)|0)+a.cl|0)-a.d_|0;i=a.fx;j=a.R;i.a=j;k=a.bT?0:(a.cU-a.cu|0)+a.cl|0;j=W(j,b)-a.bs|0;g=a.W;l=a.ba;Bx(g,l.b+k|0,l.a+j|0,i,h);}b=b+1|0;}}
function AEl(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cz.a;e=Bb(d,W(CB(a.e.f),a.R)-a.bs|0);f=a.di;g=a.bs;h=a.eJ===null?a.u:(-1);i=a.W;j=a.dZ;Tq(i,f.fU,f.fh);LO(f,i,b,d);Vj(f,b);UV(f,g,e,j,i);k=j.hr;if(e<d){l=f.fU;Bx(i,l.b,l.a+e|0,B$(f.fh.b,d-e|0),k.hi);}if(b<=h&&h<=c){m=j.hr;c=h/20|0;l=f.cK;j=Br(l,c%l.j|0);k=f.fU;e=W(f.cK.j,f.jV);b=j.ff.a;d=((j.ks.a-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%Da(j.bu)|0)|0;b=h%j.d$|0;c=j.O;d=d+W(b,c)|0;if(d<( -c|0))d=d+e|0;U(j.dW,j.ff.b,c);f=j.eP;b=h%j.d$|0;c=j.O;Cv(f,0.0,W(b,c),j.ff.b,
c);EV(j,i,d,k,m.pN,m.n9);}Hq(i);}
function FT(a){return Bb(a.bs/a.R|0,CB(a.e.f)-1|0);}
function Hj(a){return Bb(((a.bs+DP(a)|0)-1|0)/a.R|0,CB(a.e.f)-1|0);}
function Wp(a){Tj(a.di,a.cI.data[0],a.R,a.W);LO(a.di,a.W,FT(a),DP(a));}
function Xs(a,b){var c;c=a.hd.data;return c[b%c.length|0];}
function AG6(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dq(a.q))Dv(a,a.fi);else{b=D2(a.q);c=FL(a.q);d=c.P;e=b.P;f=(d-e|0)+1|0;g=BM(f);h=g.data;i=R(By,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.fi;e=e+1|0;k=f;}l=Du(a.u,a.y);m=new Za;m.nT=a;PL(a,g,0,0,i,l,m);b.bh=b.bh+J(a.fi)|0;c.bh=c.bh+J(a.fi)|0;Mt(a,a.y+J(a.fi)|0,0);Eh(a);}return 1;}
function AAJ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dq(a.q)){b=BR(a.e.f,a.u);if(b.p.data.length>0){c=Yr(a,b);if(c===null)return 1;d=a.e.f;e=a.u;f=Du(e,a.y);d.cL=d.cL+1|0;g=d.gR;h=R(Hf,1);h.data[0]=ATG(e,0,1,c,f.bm,f.bw);BC(g,h);KT(d,e,0,1,c);GK(b,0,J(c));Mt(a,a.y-J(c)|0,0);}}else{f=D2(a.q);c=FL(a.q);i=c.P;j=f.P;i=(i-j|0)+1|0;k=BM(i);h=k.data;l=R(By,i);m=l.data;e=a.y;n=a.u;o=0;while(j<=c.P){b=BR(a.e.f,j);if(b.p.data.length>0){b=Yr(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=M0(k,o);h=Dp(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.P)f.bh=Bd(0,f.bh-J(b)|0);if(j==c.P){c.bh=Bd(0,c.bh-J(b)|0);Mt(a,a.y-J(b)|0,0);}i=i+1|0;}f=Du(n,e);b=new Yh;b.vF=a;PL(a,p,0,1,h,f,b);}Eh(a);return 1;}
function Yr(a,b){var c,d,e,f;c=EH(0,J(a.fi),OD(b));if(!c)b=null;else{b=C(62);if(c<0){b=new BE;Y(b);K(b);}if(c!=1){d=b.ca.data.length;if(d&&c){e=BV(W(d,c));d=0;f=0;while(f<c){RG(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=M8(e);}else b=AZa;}}return b;}
function PL(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BM(i);k=AYF(i).data;H1(j,c);c=0;l=k.length;if(c>l){f=new BE;Y(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cL=o.cL+1|0;p=R(Hf,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ATG(h[m],n[m],k[m],b[m],f.bm,f.bw);m=m+1|0;}BC(o.gR,p);c=0;while(c<i){b=e.data;KT(o,h[c],n[c],k[c],b[c]);g.kx(Dh(h[c]),b[c]);c=c+1|0;}}
function AGe(a){var b,c,d,e,f,g,h,i;if(Dq(a.q))GM(a);Ev(BR(a.e.f,a.u));b=a.e.f;c=a.u;d=a.y;e=b.z;f=e.data;g=f[c];e=Dp(e,f.length+1|0);f=e.data;b.z=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DS(R(Cf,0));b.z.data[c+1|0]=g;}else if(d==g.I){f[c]=g;f[c+1|0]=DS(R(Cf,0));}else{f=(Iu(g,d)).data;e=b.z.data;e[c]=f[0];e[c+1|0]=f[1];}FK(b,c,d,0,C(197));Eh(a);return CE(a,a.u+1|0,0,0);}
function AHh(a){if(Dq(a.q))GM(a);else NR(a.e.f,a.u,a.y);Hr(a);Eh(a);return 1;}
function ADG(a){var b,c,d;if(Dq(a.q)){GM(a);return 1;}b=a.y;if(!b&&!a.u)return 1;if(b){c=a.u;b=b-1|0;NR(a.e.f,c,b);}else{c=a.u-1|0;b=F1(a.e.f,c);d=a.e.f;LR(d,c);FK(d,c,F1(d,c),1,C(197));}Eh(a);return CE(a,c,b,0);}
function Dv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ei)return 0;if(Dq(a.q))GM(a);c=ML(WX(b,C(198),C(30)),C(197),(-1));d=c.data;b=a.e.f;e=a.u;f=a.y;AAq(b,e,f,c);g=d.length;if(!g)h=AZa;else{i=0;j=0;while(j<g){i=i+J(d[j])|0;j=j+1|0;}k=BV(i+W(g-1|0,J(C(197)))|0);c=k.data;l=0;h=d[0];j=0;while(j<J(h)){m=l+1|0;c[l]=P(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<J(C(197))){m=l+1|0;c[l]=P(C(197),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<J(h)){m=l+1|0;c[l]=P(h,j);j=j+1|0;l=m;}n=n+1|0;}h=M8(k);}FK(b,e,f,0,h);e=a.u;m=(e+g|0)-1|
0;CE(a,m,m!=e?J(d[g-1|0]):a.y+J(d[0])|0,0);FQ(a);Eh(a);return 1;}
function GM(a){var b,c,d;b=D2(a.q);c=a.e.f;d=a.q;N8(c,d,X9(c,d));CE(a,b.P,b.bh,0);FQ(a);Eh(a);}
function FQ(a){var b;b=a.q;b.dt=0;B7(b.b1,a.u,a.y);B7(a.q.bL,a.u,a.y);}
function C9(a){return a.fQ.nd|0;}
function AD_(a,b){var c,d;c=a.cz.a;if(b<c){d=a.cE.dK;d.a=c-b|0;d.b=!a.bT?Dk(a)+a.d_|0:Dk(a)+a.cl|0;c=!a.bT?(a.ba.b+a.cU|0)-a.d_|0:(((a.ba.b+a.cu|0)+C9(a)|0)+a.cl|0)-a.d_|0;Bx(a.W,c,a.ba.a+b|0,d,a.dZ.b8.fk);}}
function AEQ(a){var b;b=a.bT?a.ba.b+C9(a)|0:a.ba.b+a.cz.b|0;Jv(a.fp,a.bs,a.ba.a,DP(a),Nl(a),b,C9(a));b=!a.bT?a.ba.b+a.cU|0:((a.ba.b+a.cl|0)+a.cu|0)+C9(a)|0;St(a.fr,a.dC,b,Dk(a),a.hM,a.ba.a+DP(a)|0,C9(a));}
function ADR(a){var b,c;b=ST(a.fp);c=ST(a.fr);if(!(!b&&!c)){Cw(a.W,1);if(b)GQ(a.fp,a.W);if(c)GQ(a.fr,a.W);if(b)GZ(a.fp,a.W);if(c)GZ(a.fr,a.W);}}
function AFh(a){var b,c,d,e;b=a.fx;c=a.cz;b.a=c.a;b.b=a.cl;d=!a.bT?a.cU-a.cu|0:(c.b-JQ(a)|0)-a.cl|0;b=a.W;c=a.ba;Bx(b,c.b+d|0,c.a,a.fx,a.dZ.b8.uC);a.fx.b=!a.bT?(a.cu-a.cl|0)-a.d_|0:((a.cu+C9(a)|0)+a.cl|0)-a.d_|0;e=a.bT?0:(a.cU-a.cu|0)+a.cl|0;b=a.W;c=a.ba;Bx(b,c.b+e|0,c.a,a.fx,a.dZ.b8.fk);}
function L2(b,c){return Bb(Bd(0,b),c);}
function IP(a,b){var c,d,e,f,g,h,i;b=b.data;$rt_globals.console.info("onFileParsed");a.kl=1;a.i0=1;c=Dy(b[0]);d=EF(b[1]);e=(Dy(b[2])).data[0];if(b.length<5)AFB(a.e.f,c,d);else{f=Dy(b[3]);g=EF(b[4]);ABu(a.e.f,c,d,f,g,0);Ik(a);}Wx(a,ADt(e));GU(Ct(a),A0J);Gs(Ct(a));h=IA(Ez(),a.fw);i=new M;O(i);H(GJ(H(i,C(199)),h),C(200));$rt_globals.console.info($rt_ustr(N(i)));i=a.jg;if(i!==null)i.g(a);}
function Ik(a){var b,c,d,e,f,g;b=Ez();EZ(a.e.f.dn);EZ(a.e.f.c_);c=a.e.f;if(c.gE===null)Rc(c);c=a.e.f;d=c.d2;BP(c);e=new WR;e.rV=c;f=d.eU;if(f!==null){c=new Pk;c.hl=d;c.k9=e;UT(d,f,c);}g=Ez();if(a.j5){c=BA();b=IA(g,b);d=new M;O(d);H(GJ(H(d,C(201)),b),C(202));Bt(c,N(d));}}
function Wx(a,b){var c,d;c=DY(a.e);if(!BW(c,b)){d=new M;O(d);H(H(H(H(d,C(203)),c),C(204)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.j1=b;}}
function Ct(a){return a.cE.i$;}
function JO(a,b){var c,d,e,f,g,h;c=EN(b);d=new M;O(d);H(H(d,C(205)),c);$rt_globals.console.info($rt_ustr(N(d)));OG(Ct(a),EN(b));CE(a,0,0,0);a.fw=Ez();a.kl=0;a.i0=0;a.eJ=null;Mc(a.di,null);e=new Jx;f=R(By,1);f.data[0]=C(30);AEZ(e,f,AWI(C(30),C(30),EN(b),null));a.e=e;CE(a,0,0,0);c=EN(b);g=Gn(c,46,J(c)-1|0);if(g!=(-1))c=Do(c,g);h=!Bn(c,C(206))?5120:10240;c=new T0;c.qr=a;c.qs=h;c.qt=b;d=b.fL;if(d!==null)L1(c,Kn(b,d.size));else{d=b.hq.getFile();e=new Va;e.nL=b;e.nM=c;b=new Vd;b.wV=c;d.then(Bl(e,"f"),Bl(b,"f"));}}
function Ic(a,b,c,d,e){if(Is(a,e))return 1;if(c&&d)return 1;if(c)FX(a,a.bs+((W(b,a.R)*12|0)/10|0)|0);else if(!d){HR(a,a.u+b|0,e);VR(a);}return 1;}
function TF(a,b,c,d){var e,f,g;if(Is(a,d))return 1;e=FF(a);if(!c)f=a.y+b|0;else if(b>=0)f=Hb(e,a.y);else{f=a.y;if(!f)f=(-1);else{c=Jq(e,f);if(c>0&&e.d7.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.d7.data[c-1|0];}}if(f>e.I){if((a.u+1|0)<CB(a.e.f))CE(a,a.u+1|0,0,d);}else if(f>=0)Dg(a,f,d);else{b=a.u;if(b>0){g=(BR(a.e.f,b-1|0)).I;CE(a,a.u-1|0,g,d);}}XU(a);return 1;}
function Is(a,b){if(Dq(a.q)&&!b){FQ(a);Hr(a);return 1;}if(!(b&&Dq(a.q)))FQ(a);return 0;}
function CE(a,b,c,d){a.y=c;return HR(a,b,d);}
function HR(a,b,c){a.u=EH(0,b,CB(a.e.f)-1|0);return Dg(a,a.y,c);}
function Dg(a,b,c){a.y=EH(0,b,(FF(a)).I);a.ib=a.cE.b4===0.0?0:GR(FF(a),a.y,a.W.cS,a.cI);L9(a);Hr(a);if(c)a.q.dt=1;L$(a.q,a.u,a.y);a.q.dt=0;return 1;}
function Mt(a,b,c){var d;d=QZ(a.q);Dg(a,b,c);a.q=d;}
function Hr(a){VR(a);XU(a);}
function VR(a){var b,c,d,e,f;b=a.bs;c=b+DP(a)|0;d=a.u;e=a.R;d=W(d,e);f=d+e|0;if(d<(b+e|0))FX(a,d-e|0);else if(f>(c-e|0))FX(a,(f-DP(a)|0)+a.R|0);}
function XU(a){var b,c,d,e,f;b=Dl(a.cE.b4*30.0);c=a.dC;d=c+Dk(a)|0;e=a.ib;f=e+b|0;if(e<(c+b|0))Jk(a,e-b|0);else if(f>(d-b|0))Jk(a,(f-Dk(a)|0)+b|0);}
function AAl(a){var b;LP(a,Du(a.u,a.y),Hp(a.e.f,a.u,a.y));if(!(a.h6!==null&&!D$(a.hj))){b=a.y;if(b>0)LP(a,Du(a.u,b-1|0),Hp(a.e.f,a.u,a.y-1|0));}}
function LP(a,b,c){var d,e,f,g,h,i,j,k,l;UL(a);d=a.e.f;e=Cl(d.dn,c);if(e!==null)c=e;a:{f=Cl(d.c_,c);if(f!==null){a.h6=Mo(d,c);c=BZ(f);while(true){if(!B1(c))break a;g=B3(c);BC(a.hj,Mo(d,g));}}}h=b.bm;i=b.bw;b=a.fn;c=DY(a.e);d=Gx(a.e);j=(Cs(b.wo)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.wr(c,d)){d=b.AG;break b;}l=l+1|0;}d=null;}if(d!==null){g=a.e;c=new NG;c.zj=a;c.zl=g;c.zh=h;c.zi=i;d.ti(g,h,i,c,a.iI);}}
function IG(a,b){var c;CE(a,b.bm,b.bw,0);c=Hb(FF(a),a.y);B7(a.q.bL,a.u,c);B7(a.q.b1,a.u,a.y);}
function EY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.ba;e=c-d.b|0;f=EH(0,((b.a-d.a|0)+a.bs|0)/a.R|0,CB(a.e.f)-1|0);g=!a.bT?a.cU:(a.cl+a.cu|0)+C9(a)|0;h=Bd(0,(e-g|0)+a.dC|0);b=BR(a.e.f,f);d=a.W.cS;i=a.cI;if(!(b.eS!==null&&!b.gs))Lg(b,d,i);j=b.eS;e=b.p.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.I;else{c=VE(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.p.data.length)k=b.I;else{j=TN(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.p.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(A0K){d=new M;O(d);V(H(V(H(V(H(d,C(207)),e),C(208)),h),C(209)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return Du(f,k);}
function ZX(a,b){var c;c=b.bm;a.u=c;a.y=b.bw;a.ib=GR(BR(a.e.f,c),a.y,a.W.cS,a.cI);L9(a);}
function FF(a){return BR(a.e.f,a.u);}
function Kw(a,b,c){var d,e;d=Dl((a.R*4|0)*c/150.0);e=Dl(b);if(d)FX(a,a.bs+d|0);if(e)Jk(a,a.dC+e|0);return 1;}
function U3(a,b,c){a.q.dt=0;return 1;}
function NE(a,b,c){var d,e,f;if(c)return null;d=FH(a.fp,b.i,a.pJ,1);if(d!==null)return d;d=FH(a.fr,b.i,a.vv,0);if(d!==null)return d;Jp(a);e=EY(a,b.i);f=Hp(a.e.f,e.bm,e.bw);ZX(a,e);LP(a,e,f);if(!b.bP){b=a.q;if(!b.dt)B7(b.b1,a.u,a.y);}b=a.q;b.dt=1;L$(b,a.u,a.y);b=new Zq;b.vM=a;return b;}
function NX(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.cq){b=b.i;e=EY(a,b);f=Hp(a.e.f,e.bm,e.bw);g=UN(a,f);h=MR(a.fn,DY(a.e),Gx(a.e));if(h!==null){f=a.e;c=e.bm;d=e.bw;e=new YM;e.zc=a;e.zd=b;e.zb=g;h.ti(f,c,d,e,a.iI);}else{e=Cl(a.e.f.dn,f);if(e!==null){IG(a,e);c=1;}else{e=Cl(a.e.f.c_,f);if(e!==null&&!D$(e)){if(e.j!=1){SP(a.j_,b,e,a,g);c=1;}else{IG(a,Br(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EY(a,b.i)).bm;e=BR(a.e.f,c);c=Gj(e,a.y);d=Hb(e,a.y);b=MI(e,c);if((d-1|0)==e.I){B7(a.q.b1,a.u,OD(e));B7(a.q.bL,
a.u,e.I);}else{if(b!==null){b=b.v;i=0;c:{while(true){j=b.ca.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.y;if(c==i){c=Gj(e,c-1|0);d=Hb(e,c);}else{if(d!=i){Rp(a.q,a.u);break b;}c=Gj(e,d+1|0);d=Hb(e,c);}}}B7(a.q.b1,a.u,c);a.q.dt=1;CE(a,a.u,d,0);a.q.dt=0;Jp(a);}}break a;case 3:break;default:break a;}Rp(a.q,a.u);To(a.he);Jp(a);}}return 1;}
function Ph(a,b){var c,d,e,f,g,h,i,j,k;c=a.cE.cP;if(FU(a.fp,b.i,c))return 1;if(FU(a.fr,b.i,c))return 1;d=a.di;if(Gw(b.i,d.fU,d.fh)&&Gg(c)?1:0)return 1;e=b.i;f=!a.bT?a.ba.b+a.cU|0:((a.ba.b+a.cu|0)+a.cl|0)+C9(a)|0;a:{g=a.ba.a;h=Dk(a);i=DP(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Gg(c);if(b.cq){e=EY(a,b.i);e.bw=Gj(BR(a.e.f,e.bm),e.bw);b=a.e.f;if(!Go(b.dn,e)&&!Go(b.c_,e)?0:1)return DE(c,C(210));}return DE(c,C(191));}
function AUW(a,b){var c,d,e,f;c=b.cq;if(c&&b.bl==65){c=CB(a.e.f)-1|0;d=F1(a.e.f,c);B7(a.q.b1,0,0);B7(a.q.bL,CB(a.e.f)-1|0,d);return 1;}if(c&&b.bl==80){JC(a);return 1;}if(!a.ei&&c&&b.bl==90){if(Dq(a.q))FQ(a);b=a.e.f;b.cL=b.cL+1|0;e=b.gR;d=e.j;if(!d)e=null;else{f=(Ey(e,d-1|0)).data;e=Oq(b,f[0]);c=1;while(c<f.length){Oq(b,f[c]);c=c+1|0;}}if(e!==null){CE(a,e.b,e.a,0);Eh(a);}return 1;}if(!c&&!b.dh){if(Bn(b.ea,C(211))){Dv(a,C(212));Dg(a,a.y-1|0,0);c=1;}else if(Bn(b.ea,C(213))){Dv(a,C(214));Dg(a,a.y-1|0,0);c=1;}else if
(Bn(b.ea,C(43))){Dv(a,C(215));Dg(a,a.y-1|0,0);c=1;}else if(Bn(b.ea,C(216))){Dv(a,C(217));Dg(a,a.y-1|0,0);c=1;}else if(Bn(b.ea,C(218))){Dv(a,C(219));Dg(a,a.y-1|0,0);c=1;}else if(!Bn(b.ea,C(220)))c=0;else{Dv(a,C(221));Dg(a,a.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dh&&!b.cq)){d=b.bl;if(d>=48&&d<=57){c=d-48|0;e=a.nz.data[c];if(e!==null)e.o();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bl){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(ADM(a,b))return 1;if(a.ei)c=0;else c:{switch(b.bl){case 8:break;case 9:c=!b.bP?AG6(a):AAJ(a);break c;case 13:c=AGe(a);break c;case 46:c=AHh(a);break c;default:c=0;break c;}c=ADG(a);}if(c)return 1;if(b.cq&&b.bl==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AMX(b.bl)&&b.bl!=27){if(!b.cq&&!b.dh&&!b.jI)return J(b.ea)>0&&Dv(a,b.ea)?1:0;return 0;}return 0;}
function UW(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bn(C(169),DY(a.e))){b=Ct(a);c=new Ps;c.uF=a;d=R(B,3);e=d.data;e[0]=ET(a.e.f);f=FT(a);g=Hj(a);h=Bd(0,f-100|0);f=Bb(CB(a.e.f)-1|0,g+100|0);i=BM(3);j=i.data;j[0]=E7(a.e.f,h);k=a.e.f;l=0;f=Bb(f+1|0,k.z.data.length);m=0;while(m<f){l=l+F1(k,m)|0;if(m!=(k.z.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.c8;k=BH();Nk(n,n.da,k);i=BM(3*k.j|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Br(k,m);h=p+1|0;o[p]=q.bZ;l=h+1|0;o[h]=q.b3;p=l+1|0;o[l]=q.fj;m=m+
1|0;}e[2]=i;CU(b,c,C(222),d);}}
function JC(a){var b,c,d,e;b=ACl(DY(a.e));if(b===null){b=a.jg;if(b!==null)b.g(a);}else{a.fw=Ez();c=Ct(a);d=new WD;d.pI=a;e=R(B,1);e.data[0]=ET(a.e.f);CU(c,d,b,e);}}
function Ta(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=DY(a.e);if(b!==null&&!Bn(C(191),b)){c=a.e.f.c8;d=WQ(c,c.da);if(d===null){Ik(a);Ka(a.e.f);return;}a:{e=Em([C1(d),C6(d),d.bY.fj]);f=ET(a.e.f);g=BM(1);h=(-1);switch(IX(b)){case 3401:if(!Bn(b,C(223)))break a;h=3;break a;case 98723:if(!Bn(b,C(224)))break a;h=2;break a;case 3254818:if(!Bn(b,C(169)))break a;h=1;break a;case 3556653:if(!Bn(b,C(191)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=
(-1);break b;}h=0;}g.data[0]=h;c=a.e.f.d2;if(c.eU===null){i=BM(0);j=BV(0);}else{c:{k=AKs(d.cM,c.dm);l=new Zy;l.ez=k;l.o4=d;l.bQ=AJJ();b=new M;O(b);l.h7=b;l.fs=IM();b=new Uo;m=AGk(16);b.f0=0;b.dS=R(Ib,m);b.p4=0.75;XF(b);l.f$=b;b=new XT;c=l.bQ;k=l.h7;d=l.fs;b.dI=c;b.kL=k;b.rU=d;l.mp=b;b=new Xw;b.cR=c;b.lY=k;b.qI=d;l.mx=b;b=KE(l.ez.dm);c=b.hv;if(c.cV>0){m=c.cT;h=0;d:while(true){i=b.hv.cf.data;if(h>=i.length)break c;c=i[h];while(c!==null){k=c.cJ;if(Go(l.fs,k))Cl(l.fs,k);else{d=l.fs;F3(d,k,Dh(d.cV));}c=c.cQ;if(m
!=b.hv.cT)break d;}h=h+1|0;}b=new Hu;Y(b);K(b);}}b=l.ez.eU;if(b!==null)S6(l,b);Bs(l.bQ,l.ez.dm.cV);b=T1(KE(l.ez.dm));while(Fl(b)){c=QE(b);G1(l.bQ,l.h7.J,J(c));BU(l.h7,c);}AD9(l);ADe(l);AEN(l.o4,l.bQ,l.f$);l.rx=RR(l.bQ);j=FA(N(l.h7));l.A2=j;i=l.rx;}b=Ct(a);k=new Z1;k.qb=a;CU(b,k,C(225),I(B,[f,g,e,i,j]));}else Ka(a.e.f);}
function Hn(a,b,c){var d,e,f,g,h,i;if(c&&a.ei)return 0;d=D2(a.q);e=d.P;if(Dq(a.q)){f=a.e.f;g=a.q;h=X9(f,g);if(c)N8(f,g,h);if(c){CE(a,d.P,d.bh,0);FQ(a);Eh(a);}}else{h=Fs(Fe(a.e.f.z.data[e]),C(197));i=Bb(CB(a.e.f)-1|0,e);B7(a.q.bL,i,0);if(e>=(CB(a.e.f)-1|0))B7(a.q.bL,i,F1(a.e.f,i));else B7(a.q.b1,i+1|0,0);if(c)GM(a);else CE(a,e,0,0);}b.g(h);return 1;}
function ADM(a,b){var c,d,e,f;a:{switch(b.bl){case 33:c=b.cq?HR(a,Jh(a.bs,a.R),b.bP):Ic(a,2-Yj(DP(a),a.R)|0,0,b.dh,b.bP);break a;case 34:c=!b.cq?Ic(a,Yj(DP(a),a.R)-2|0,0,b.dh,b.bP):HR(a,((a.bs+DP(a)|0)/a.R|0)-1|0,b.bP);break a;case 35:if(!Is(a,b.bP)&&!Dg(a,(FF(a)).I,b.bP)){c=0;break a;}c=1;break a;case 36:if(!Is(a,b.bP)&&!Dg(a,0,b.bP)){c=0;break a;}c=1;break a;case 37:c=b.cq;if(c&&b.dh){Jp(a);d=a.he;e=d.dE;if(e<=0)d=null;else{f=d.fa.data;c=e-1|0;d.dE=c;d=f[c];}if(d===null)c=1;else{CE(a,Mv(d),Km(d),0);a.q=QZ(d.kR);c
=1;}break a;}c=TF(a,(-1),c,b.bP);break a;case 38:c=Ic(a,(-1),b.cq,b.dh,b.bP);break a;case 39:c=b.cq;if(c&&b.dh){d=a.he;c=d.dE;if(c==(d.e6-1|0))d=null;else{f=d.fa.data;c=c+1|0;d.dE=c;d=f[c];}if(d===null)c=1;else{CE(a,Mv(d),Km(d),0);a.q=QZ(d.kR);c=1;}break a;}c=TF(a,1,c,b.bP);break a;case 40:c=Ic(a,1,b.cq,b.dh,b.bP);break a;default:}c=0;}if(c&&b.bP)B7(a.q.bL,a.u,a.y);if(c)AAl(a);return c;}
function Jp(a){var b,c,d,e,f,g,h;b=a.he;c=b.dE;b=c<0?null:b.fa.data[c];if(b!==null&&a.u==Mv(b)&&a.y==Km(b))return;d=a.he;b=new LB;c=a.u;e=a.y;f=a.q;b.mg=Du(c,e);g=QZ(f);b.kR=g;g.dt=0;e=d.dE;h=d.e6;if(e==(h-1|0))Xu(d,b);else{c=e+1|0;while(c<h){To(d);c=c+1|0;}Xu(d,b);}d.dE=d.dE+1|0;}
function Eh(a){a.e.f.tP=Kc(Ct(a));}
function L0(a,b){var c,d,e,f,g,h,i;a.x6=null;UL(a);c=a.e;a.e=b;a.fw=Ez();d=ACl(DY(a.e));if(d!==null){e=Ct(a);f=new Te;f.uf=a;g=R(B,1);g.data[0]=ET(a.e.f);CU(e,f,d,g);}g=(Cs(a.fn.vO)).data;h=g.length;i=0;while(i<h){g[i].kx(c,b);i=i+1|0;}}
function UL(a){a.h6=null;H0(a.hj);}
function ACl(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(IX(b)){case 3401:if(!Bn(b,C(223)))break a;c=2;break a;case 98723:if(!Bn(b,C(224)))break a;c=1;break a;case 3254818:if(!Bn(b,C(169)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=C(226);break b;case 2:b=C(227);break b;default:b=null;break b;}b=C(228);}}return b;}
function UN(a,b){var c;c=Mo(a.e.f,b);if(c===null)return C(30);return c.v;}
function DR(a,b){return Gw(b,a.ba,a.cz);}
function Kx(a,b){var c,d,e,f,g;a.eJ=b;Bt(BA(),C(229));b=a.eJ;if(b===null){Bt(BA(),C(230));Mc(a.di,null);}else{b=b.data;c=D8(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gx<<24>>24;e=e+1|0;}Mc(a.di,c);}}
var Ih=G(0);
function WM(){B.call(this);this.wz=null;}
function AOd(a,b){var c;c=a.wz;XC(c,c.F,c.E);}
function WN(){B.call(this);this.r8=null;}
function AIZ(a,b){var c;c=a.r8;XC(c,c.E,c.F);}
function WO(){B.call(this);this.oE=null;}
function AOs(a,b){AAv(a.oE,b);}
function WH(){B.call(this);this.vt=null;}
function APl(a,b){AAv(a.vt,b);}
function WJ(){B.call(this);this.rO=null;}
function AUj(a,b){return AGv(a.rO,b);}
function IB(){var a=this;B.call(a);a.k0=null;a.rg=null;a.qu=null;}
function A0L(a,b){var c=new IB();N6(c,a,b);return c;}
function A0M(a,b,c){var d=new IB();Zm(d,a,b,c);return d;}
function N6(a,b,c){Zm(a,b,null,c);}
function Zm(a,b,c,d){a.k0=b.b0;a.rg=c;a.qu=d;}
function AL7(a,b){var c,d;if(b.cq&&b.bl==79){c=a.rg;if(c!==null&&b.bP)XX(a.k0,c);else ME(a.k0,a.qu);d=1;}else d=0;return d;}
function WK(){B.call(this);this.oi=null;}
function AS5(a,b){var c,d;c=a.oi;d=Ea(c.t,c.F)?c.F:!Ea(c.t,c.E)?null:c.E;if(d!==null){JO(d,b);c.gi=null;}}
function WL(){B.call(this);this.tO=null;}
function AK0(a,b){b=b;return ADP(a.tO,b);}
var AER=G();
var ABE=G(0);
function ACk(b,c,d){return H8(b,c,d,255,new B_);}
function H8(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Y2(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AMy(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bt=g+i;e.bN=h+i;e.bo=j+i;return e;}
function Kh(b,c,d,e,f){f=Y2(b,c,d,f);f.bO=e;return f;}
function G6(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Wd(){var a=this;B.call(a);a.c7=null;a.i$=null;a.cP=null;a.cj=null;a.b4=0.0;a.ex=null;a.en=null;a.dK=null;a.vL=null;a.xW=null;a.xX=null;}
function Ki(a){var b;b=a.ex;if(b!==null)b.uv();}
function KP(a){var b;b=a.ex;if(b!==null)b.xK();}
function Pe(a,b){var c;c=a.i$.d6!==(Ei()).activeElement?0:1;if(c)KP(a);a.ex=b;if(c)Ki(a);}
function F5(a,b){KP(a);a.ex=b;Ki(a);}
function Ea(a,b){return b!==a.ex?0:1;}
function Jr(a){return a.c7.cS;}
function HH(a,b){return HT(a.c7,b.kq,Cd(b.iP,a.b4));}
function CF(a,b){return Cd(b,a.b4);}
var TJ=G();
function AMJ(a,b){var c,d,e;c=b.cq;d=c&&!b.bP&&!b.dh&&!b.jI?1:0;a:{if(d){d=b.bl;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bP&&!c&&!b.dh&&!b.jI?1:0;d=d&&b.bl==46?1:0;}b:{if(!d){e=b.bl;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.k6=1;}return 0;}
function TI(){B.call(this);this.pv=null;}
function AKd(a,b){var c;c=a.pv.ex;return c!==null&&c.hJ(b)?1:0;}
function B_(){var a=this;B.call(a);a.bt=0.0;a.bN=0.0;a.bo=0.0;a.bO=0.0;}
function AUF(a){var b=new B_();AP_(b,a);return b;}
function Cv(a,b,c,d,e){a.bt=b;a.bN=c;a.bo=d;a.bO=e;}
function AP_(a,b){a.bt=b.bt;a.bN=b.bN;a.bo=b.bo;a.bO=b.bO;}
function BJ(a,b){a.bt=b.bt;a.bN=b.bN;a.bo=b.bo;a.bO=b.bO;return a;}
function AVK(a,b){if(a===b)return 1;return b!==null&&BI(a)===BI(b)&&Ld(a,b)?1:0;}
function Ld(a,b){return b.bt===a.bt&&b.bN===a.bN&&b.bo===a.bo&&b.bO===a.bO?1:0;}
var EG=G(0);
function AGW(){B.call(this);this.c3=null;}
function AEH(){var a=new AGW();ASg(a);return a;}
function ASg(a){a.c3=BH();}
function HS(a,b){Th(a.c3,0,b);}
function J1(a,b){XV(a.c3,b);}
function LQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.c3.j-1|0;while(c>=0){d=Br(a.c3,c);d.S.fJ(b);e=d.T;f=d.e_.iO;if(!Lf(e)){if(!Yq(e)&&!(!e.hT&&e.dH!==null)){e.hT=0;W5(e);g=e.eI;h=(g.dx+g.eY+5.0)/10.0;i=CF(e.hN,e.j6);g=b.cS;j=e.eI;k=e.hw;l=h*2.0;CC(g,j);m=i+Lp(g,k,l)|0;e.hx=m;m=EH(0,m,e.r.b);if(m){j=CO(b,m,e.r.a);CC(j,e.eI);g=e.hw;l=i;h=l+h;k=e.eI;n=k.dx;Ch(j,g,h,l+n-(n+k.eY)/16.0);g=e.dH;if(g===null){g=CZ(b);e.dH=g;}CS(g,j);F$(j);Cv(e.k5,0.0,0.0,BT(e.dH),Da(e.dH));}}g=f.tB;j=e.dH;if(j===null)Rh(e,b,0,e.r.b,
g);else{i=BT(j);f=f.we;j=e.G;m=j.b;o=j.a;j=e.dH;E1(b,m,o,j.f7,e.k5,j,f,g,0.0);m=e.r.b;if(i<m)Rh(e,b,i,m-i|0,g);}}Cw(b,1);i=CF(d.bE,2.0);m=Lf(d.T);f=d.bE;e=f.dK;f=f.vL;p=m?0:d.T.r.a;g=d.S.r;U(f,g.b,g.a+p|0);ACv(b,f,!m?d.T.G:d.S.G,d.e_.iO.me, -i|0,e);f=d.S;AET(b,f.r,f.G,i,p,QT(d.e_.js,d.bE.b4),d.e_.js.m6,e);c=c+(-1)|0;}}
function AAT(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.c3;if(c>=d.j)break;a:{e=Br(d,c);f=b.i;if(DN(e.T,f))g=DE(e.bE.cP,null);else{g=CF(e.bE,7.0);h=CF(e.bE,25.0);if(PB(e,f.b,g)){i=O3(e,f.b,h);if(Q2(e,f.a,g)){g=DE(e.bE.cP,Mw(i,C(231)));break a;}if(OW(e,f.a,g)){g=DE(e.bE.cP,Mw( -i|0,C(231)));break a;}}if(Yw(e,f.a,g)){h=Y$(e,f.a,h);if(AAj(e,f.b,g)){g=DE(e.bE.cP,Mw(h,C(232)));break a;}if(N1(e,f.b,g)){g=DE(e.bE.cP,Mw( -h|0,C(232)));break a;}}g=0;}}b:{c:{if(!g){if(!DN(e.S,b.i))break c;if(!e.S.bR(b)&&!DE(e.bE.cP,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABW(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.c3;if(e>=f.j)break;a:{b:{g=Br(f,e);if(!DN(g.T,b.i)){if(!DN(g.S,b.i))break b;if(!g.S.cB(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function ADI(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.c3;if(d>=e.j)return null;a:{f=Br(e,d);if(!c){b:{e=b.i;if(!Lf(f.T)&&DN(f.T,e)){g=f.S.G;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.T.G;i=e.b-i|0;k=e.a-k|0;e=new Bf;g=new O5;g.oR=f;g.oS=i;g.oT=k;g.oU=e;g.oN=h;g.oP=j;}else{h=CF(f.bE,7.0);i=CF(f.bE,25.0);if(PB(f,e.b,h)){j=O3(f,e.b,i);if(Q2(f,e.a,h)){g=I8(f,e,j,(-1));break b;}if(OW(f,e.a,h)){g=I8(f,e,j,1);break b;}}if(Yw(f,e.a,h)){i=Y$(f,e.a,i);if(AAj(f,e.b,h)){g=I8(f,e,(-1),i);break b;}if(N1(f,e.b,h)){g
=I8(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DN(f.T,b.i)?A0N:f.S.ci(b,c);e=f.S;if(e===null)g=null;else if(g===null)g=!DN(e,b.i)?null:A0N;}if(g!==null)break;d=d+1|0;}return g;}
function AGY(a,b,c){var d,e,f,g;d=0;while(true){e=a.c3;if(d>=e.j)break;a:{b:{f=Br(e,d);if(!DN(f.T,b.i)){if(!DN(f.S,b.i))break b;if(!f.S.c5(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function LL(a,b,c,d){var e,f;e=0;while(true){f=a.c3;if(e>=f.j)break;if((Br(f,e)).S.df(b,c,d))return 1;e=e+1|0;}return 0;}
function ANX(a,b,c){var d,e,f;d=0;while(true){e=a.c3;if(d>=e.j)break;f=Br(e,d);e=f.S;e.jZ(e.G,e.r,c);e=f.T;if(e.hs!==null){e.eI=null;e.hx=0;e.hT=1;}J9(f);d=d+1|0;}}
function RT(a,b){var c,d,e;c=0;d=0;while(true){e=a.c3;if(d>=e.j)break;Br(e,d);c=0|c;d=d+1|0;}return c;}
function ZZ(a,b,c){var d;d=0;while(true){b=a.c3;if(d>=b.j)break;Br(b,d);d=d+1|0;}}
function AF_(){var a=this;B.call(a);a.c6=null;a.cw=null;a.jF=null;a.j$=null;a.io=null;a.ku=null;}
function Sc(a){var b=new AF_();ARU(b,a);return b;}
function ARU(a,b){a.cw=BH();a.ku=A0O;a.c6=b;Ba(b.en,a);}
function JH(a,b,c){a.jF=c;a.io=b;b=BZ(a.cw);while(B1(b)){Im(B3(b),a.io);}}
function GF(a,b,c,d){var e,f;e=a.c6;f=e.cj;if(W(f.b,f.a)&&e.b4!==0.0){if(a.jF!==null&&!DD(a)){a.ku=d;a.j$=HH(a.c6,a.jF);e=PK(a,b,c,null);b=new XS;b.tU=a;e.kd=b;F5(a.c6,a);return;}b=new BE;Y(b);K(b);}c=new CL;Bi(c,C(233));K(c);}
function DZ(a){var b;if(DD(a)){b=a.c6;if(b.ex===a)b.ex=null;Vo(a,null);a.ku.o();a.ku=A0O;}}
function Y5(a,b,c,d,e){var f,g,h;f=AD2();AAs(f);KW(f,c.dQ());Im(f,a.io);Ij(f,a.j$);Ht(f,a.c6);if(d===null)g=b.b;else{g=b.b;g=a.c6.cj.b<((g+(Ek(d)).b|0)+(Ek(f)).b|0)?g-(Ek(f)).b|0:(g+(Ek(d)).b|0)-d.fH|0;}h=b.a;b=a.c6.cj;KO(f,Bd(0,Bb(g,b.b-(Ek(f)).b|0)),Bd(0,Bb(h,b.a-(Ek(f)).a|0)));b=new Z3;b.s9=a;b.s$=f;b.s_=e;f.lz=b;BC(a.cw,f);return f;}
function PK(a,b,c,d){return Y5(a,b,c,d,null);}
function AVu(a,b,c){var d,e;a.j$=HH(a.c6,a.jF);d=BZ(a.cw);while(B1(d)){e=B3(d);Ij(e,a.j$);Ht(e,a.c6);}}
function HV(a){var b,c;if(D$(a.cw))return;Cw(a.c6.c7,1);b=0;while(true){c=a.cw;if(b>=c.j)break;MG(Br(c,b),a.c6);b=b+1|0;}}
function LC(a,b){var c,d;c=0;d=a.cw.j-1|0;a:{while(d>=0){c=LF(Br(a.cw,d),b.i,a.c6.cP);if(c)break a;d=d+(-1)|0;}}return c;}
function Kz(a,b,c,d){var e,f;e=0;f=a.cw.j-1|0;a:{while(f>=0){e=Mx(Br(a.cw,f),b.i,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function M4(a,b,c){var d,e,f;d=null;e=a.cw.j-1|0;a:{while(e>=0){f=Br(a.cw,e);d=b.i;c=Eq(f.cr,d);if(!c&&!K3(f.cr)){d=f.kd;if(d!==null)d.o();}d=!c?null:A0N;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AOQ(a,b){var c;if(!DD(a))return 0;a:{switch(b.bl){case 27:DZ(a);c=1;break a;default:}c=0;}return c;}
function ADh(b,c){var d,e,f;d=b.dB;e=c.cY;f=c.fH;b=new Bf;c=d.A;Rn(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function Vo(a,b){var c,d;c=a.cw.j-1|0;a:{while(true){if(c<0)break a;d=Br(a.cw,c);if(b===d)break;Ey(a.cw,c);OQ(d);c=c+(-1)|0;}}}
function DD(a){return a.cw.j<=0?0:1;}
function ACB(){var a=this;B.call(a);a.eG=null;a.lj=0.0;a.hR=0.0;a.gJ=0;}
function AMH(){var a=new ACB();ARb(a);return a;}
function ARb(a){var b;b=U$(0,0,2,20);a.eG=b;a.lj=0.5;a.hR=0.0;H8(187,187,187,255,b.bq);}
function Ze(a){return a.eG.s.a;}
function UY(a){return a.eG.s.b;}
function U7(a,b){var c,d;a:{c=a.gJ;if(b>a.hR)while(true){d=a.hR+a.lj;a.hR=d;a.gJ=a.gJ?0:1;if(b>d)continue;else break a;}}return a.gJ==c?0:1;}
function W_(a,b,c){U(a.eG.A,b,c);}
function Rv(a,b){a.hR=b+a.lj*1.25;a.gJ=1;}
function WE(a,b,c){if(a.gJ)Tc(a.eG,b,c.b,c.a);}
function LJ(){var a=this;B.call(a);a.nt=null;a.yf=null;a.yq=0.0;a.qG=0;a.yy=0;a.y7=0;a.sI=0;a.z4=0;a.dx=0.0;a.eY=0.0;a.yp=0.0;a.nd=0.0;a.yv=0;a.oF=null;}
function Fj(a){return Dl(a.dx+a.eY);}
function KM(a,b){return Dl((a.dx+a.eY)*b);}
function Jx(){var a=this;B.call(a);a.gK=null;a.f=null;a.j1=null;a.vb=null;}
function AWV(a,b){var c=new Jx();AEZ(c,a,b);return c;}
function A0P(a,b,c){var d=new Jx();ZM(d,a,b,c);return d;}
function AEZ(a,b,c){ZM(a,b,null,c);}
function ZM(a,b,c,d){var e,f,g,h,i,j,k;a.gK=d;a.j1=c;if(d===null)c=null;else{c=d.f9;c=c===null?null:!Eo(c,C(234))&&!Eo(c,C(235))&&!Eo(c,C(236))&&!Eo(c,C(237))&&!Eo(c,C(238))&&!Eo(c,C(239))?(Eo(c,C(206))?C(169):!Eo(c,C(240))?null:C(223)):C(224);}e=b.data;a.vb=c;c=new Le;f=e.length;if(!f)g=VP(C(30));else{g=R(CD,f);h=g.data;i=0;while(i<f){j=new CD;k=R(Cf,1);k.data[0]=Rx(e[i]);Iq(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.dn=IM();c.c_=IM();c.gR=BH();if(!b.length){c=new BE;Y(c);K(c);}c.z=g;c.h4=0;c.cL=0;c.c8=VQ(c);c.d2=ASf();a.f
=c;}
function DY(a){var b;b=a.j1;if(b===null)b=a.vb;return b;}
function Gx(a){var b;b=a.gK;return b===null?null:b.jn;}
function ZA(){var a=this;B.call(a);a.qV=null;a.xD=null;a.oo=null;a.wo=null;a.vO=null;a.vq=null;}
function MR(a,b,c){return SQ(a,Cs(a.qV),b,c);}
function Sp(a,b,c){return SQ(a,Cs(a.xD),b,c);}
function SQ(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.wr(c,d))return g.zq;f=f+1|0;}return null;}
function VX(a,b,c){var d,e,f,g;d=(Cs(a.oo)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.wr(b,c))return g.zk;f=f+1|0;}return null;}
function AGq(){var a=this;B.call(a);a.b1=null;a.bL=null;a.dt=0;}
function AJe(){var a=new AGq();AVs(a);return a;}
function QZ(a){var b=new AGq();APP(b,a);return b;}
function AVs(a){a.b1=new Hs;a.bL=new Hs;}
function APP(a,b){var c;c=new Hs;a.b1=c;a.bL=new Hs;Wi(c,b.b1);Wi(a.bL,b.bL);a.dt=b.dt;}
function L$(a,b,c){B7(a.bL,b,c);if(!a.dt)B7(a.b1,b,c);}
function Rp(a,b){B7(a.b1,b,0);B7(a.bL,b+1|0,0);}
function D2(a){if(Tl(a.b1,a.bL)>0)return a.bL;return a.b1;}
function FL(a){if(Tl(a.b1,a.bL)<0)return a.bL;return a.b1;}
function AEU(a,b){var c,d,e,f;c=D2(a);d=FL(a);e=c.P;if(e<=b){f=BG(b,d.P);if(f<=0)return B$(b<=e?c.bh:0,f>=0?d.bh:(-1));}return null;}
function Dq(a){var b,c;b=a.b1;c=a.bL;return (b===c?1:c!==null&&BI(b)===BI(c)?(b.P==c.P&&b.bh==c.bh?1:0):0)?0:1;}
function AF2(a,b){var c,d;if(!Dq(a))return 0;c=D2(a);d=FL(a);return c.P<=b&&b<d.P?1:0;}
function V7(){var a=this;B.call(a);a.fa=null;a.e6=0;a.dE=0;}
function Xu(a,b){var c,d,e;c=a.e6;d=a.fa;if(c==d.data.length)a.fa=Dp(d,c+16|0);d=a.fa.data;e=a.e6;a.e6=e+1|0;d[e]=b;}
function To(a){var b,c,d;b=a.dE;c=a.e6-1|0;if(b==c)a.dE=b-1|0;d=a.fa.data;a.e6=c;d[c]=null;}
function ES(){var a=this;B.call(a);a.b$=0;a.b7=null;a.fe=null;a.d9=0;a.dD=0;}
var A0Q=0;var A0R=0;var A0I=0;function ABR(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.b7;j=i===b&&!i.iV?0:1;if(j){a.b7=b;Lg(b,e.cS,d);}i=a.b7;k=i===null?0:E8(i)<g?Jh(E8(a.b7),1024):Jh(g,1024)+1|0;l=k<=a.d9?0:1;if(l)a.d9=k;if(!(!j&&!l)){if(A0Q){m=b.gb;$rt_globals.console.info("fMeasure"+m.data);A0Q=0;}if(!A0I){i=c.bx;b="alphabetic";i.textBaseline=b;}else{b=c.bx;i="top";b.textBaseline=i;}a.dD=h/1024|0;while(true){i=a.fe;if(i.j>=a.d9)break;BC(i,CZ(e));}k=0;while(k<a.d9){Jg(a,c,f,d,a.dD+k|0);k=k+1|0;}a.b7.iV=0;}if(!D$(a.fe)
&&h<=E8(a.b7)){k=h/1024|0;g=a.dD;if(k!=g){if(Ny(k-g|0)>=a.d9){g=0;while(g<a.d9){Jg(a,c,f,d,k+g|0);g=g+1|0;}a.dD=k;}else{while(true){h=a.dD;if(h>=k)break;Jg(a,c,f,d,h+a.d9|0);a.dD=a.dD+1|0;}while(true){h=a.dD;if(h<=k)break;Jg(a,c,f,d,h-1|0);a.dD=a.dD-1|0;}}}}}
function Lr(b,c){return (c-Fj(b)|0)/2|0;}
function N2(b,c){return Lr(b,c)+b.sI|0;}
function Jg(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;EI(b);f=a.b7.gb;g=e*1024|0;h=QS(a,g);if(h>=a.b7.p.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.b$;a:{while(true){l=a.b7;if(h>=l.p.data.length)break a;l=US(l,h);m=!A0I?N2(d.data[l.cg],c):Lr(d.data[l.cg],c);n=d.data;o=f.data;CC(b,n[l.cg]);Ch(b,l.v,k,m);k=o[h]-j+a.b$;if(k>1024.0)break;h=h+1|0;}}CS(Br(a.fe,e%a.d9|0),b);}
function AFv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(D$(a.fe))return;if(!a.d9)return;if(j>E8(a.b7))return;r=a.b7;s=r.eS;t=r.p;u=j/1024|0;v=QS(a,j);w= -a.b$|0;x=i;a:{while(true){y=t.data;z=y.length;if(v>=z)break a;ba=v!=(z-1|0)?0:1;if(w>=h)break;bb=s.data;r=Br(a.fe,u%a.d9|0);bc=y[v];bd=bb[v]+a.b$|0;be=u*1024|0;bf=(bd-be|0)>1024?0:1;bg=u+1|0;bh=bg*1024|0;bi=Bb(bh,bd)-j|0;if(bf&&ba)bi=bi+a.b$|0;if((w+bi|0)>h)bi=h-w|0;bj=l!==null?0:1;b:{if
(!bj){bk=!ba?a.b$:2*a.b$|0;z=l.b;bl=l.a;if(!(z<bl&&j<=bl&&(j+bi|0)>(z+bk|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bj){bm=!ba?a.b$:2*a.b$|0;if(j>=l.b&&(j+bi|0)<=(l.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(o&&!p)bo=k.b8.i7;if(bc===m)bo=k.b8.pL;bp=BZ(n);d:{while(B1(bp)){if(BW(B3(bp),bc)){bj=1;break d;}}bj=0;}if(bj)bo=k.b8.xF;if(q!==null){y=q.mr;if(y===null)z=0;else{y=y.data;z=v>=y.length?0:y[v];}bo=AAx(k.dY,k,z,q.gx);}if(!bn&&!bl){l.a=Bb(l.a,E8(a.b7));bk=j>=l.b?bi:(Bb(bd,bh)-l.b|0)-(!ba?a.b$:0)|0;bh=(j+bi|0)<=
(l.a+(!ba?a.b$:2*a.b$|0)|0)?0:(Bb(bd,bh)-l.a|0)-(!ba?a.b$:0)|0;bm=j-be|0;bl=w+c|0;bq=bm;bj=bi-bk|0;Cv(e,bq,0.0,bj,x);U(f,bj,i);Ip(a,d,bl,b,f,e,bc,r,g,k,0,bo);bj=bm+bi|0;Cv(e,bj-bh|0,0.0,bh,x);U(f,bh,i);z=bl+bi|0;Ip(a,d,z-bh|0,b,f,e,bc,r,g,k,0,bo);br=bj-bk|0;bj=bk-bh|0;Cv(e,br,0.0,bj,x);U(f,bj,i);Ip(a,d,z-bk|0,b,f,e,bc,r,g,k,1,bo);}else{Cv(e,j-be|0,0.0,bi,x);U(f,bi,i);Ip(a,d,w+c|0,b,f,e,bc,r,g,k,bn,bo);}j=j+bi|0;w=w+bi|0;if(!bf){v=v+(-1)|0;u=bg;}v=v+1|0;}}}
function Ip(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bO!==0.0&&f.bo!==0.0){m=j.uc.data[g.cH];if(k)n=j.b8.nw;else{g=m.pz;if(g===null)g=j.b8.fk;if(l===null)l=BP(g);n=l;}g=m.pB;if(A0R)i=0.0;E1(b,c,d,e,f,h,g,n,i);return;}return;}}
function QS(a,b){var c,d,e,f,g,h,i;c=a.b7;d=c.gb;e=0;f=c.p.data.length;g=b;b=BG(e,f);if(b>0){c=new BE;Y(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BG(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ZU(a){a.b7=null;D9(a.fe,new Yn);H0(a.fe);}
function AB7(a,b,c,d,e,f,g,h,i){var j,k;j=E8(a.b7);if(j)j=j+a.b$|0;if(!j)j=j-a.b$|0;k=Bd( -a.b$|0,j-g|0);if(k>=h)return;U(f,h-k|0,e);Bx(b,c+k|0,d,f,i);}
function ACQ(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(ES,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=BR(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.b7===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new ES;f.b$=3;f.fe=BH();f.dD=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)ZU(o);h=h+1|0;}return g;}
function AEm(){A0I=0;}
function AG4(){var a=this;B.call(a);a.fE=null;a.de=null;a.es=null;a.eX=null;a.iQ=null;a.iR=null;}
function Jc(){var a=new AG4();ANu(a);return a;}
function ANu(a){a.fE=new Bf;a.de=new Bf;a.es=new Bf;a.eX=new Bf;a.iQ=new B_;a.iR=new B_;}
function ST(a){var b;b=a.de;return !W(b.b,b.a)?0:1;}
function Ig(a,b){return Gw(b,a.es,a.eX);}
function FH(a,b,c,d){var e,f,g,h,i;e=Ig(a,b);f=Gw(b,a.fE,a.de);if(!e&&!f)return null;if(!f){if(!d)c.g(Yv(a,b.b-a.es.b|0));else c.g(Rm(a,b.a-a.es.a|0));}g=!d?a.fE.b+(a.de.b/2|0)|0:a.fE.a+(a.de.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new TS;b.wP=a;b.wQ=c;b.wO=i;}else{b=new TR;b.qe=a;b.qc=c;b.qd=i;}return b;}
function Hm(a,b,c){if(b!==null&&c!==null){BJ(a.iQ,c);BJ(a.iR,b);return;}}
function ACV(b,c){var d;d=new Wa;d.sK=b;d.xN=c;return d;}
function Rm(a,b){var c,d,e;c=a.eX.a;d=a.de.a;e=c-d|0;return ACV(Bb(Bd(0,b-(d/2|0)|0),e),e);}
function Yv(a,b){var c,d,e;c=a.eX.b;d=a.de.b;e=c-d|0;return ACV(Bb(Bd(0,b-(d/2|0)|0),e),e);}
function Jv(a,b,c,d,e,f,g){YQ(a,b,c,d,e,f,g,1);}
function St(a,b,c,d,e,f,g){YQ(a,b,c,d,e,f,g,0);}
function YQ(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){U(a.eX,0,0);U(a.de,0,0);}else{i=Bb(g*3|0,d);j=Bd(RH(d,d,e),i);e=e-d|0;i=d-j|0;i=i?RH(b,i,e):0;if(!h){k=a.fE;k.b=i+c|0;k.a=f-g|0;l=a.de;l.b=j;l.a=g;l=a.es;l.b=c;l.a=k.a;k=a.eX;k.b=d;k.a=g;}else{k=a.fE;k.b=f-g|0;k.a=i+c|0;l=a.de;l.b=g;l.a=j;l=a.es;l.b=k.b;l.a=c;k=a.eX;k.b=g;k.a=d;}}}
function Zh(a,b){GQ(a,b);GZ(a,b);}
function GQ(a,b){var c;c=a.es;Bx(b,c.b,c.a,a.eX,a.iQ);}
function GZ(a,b){var c,d;c=a.de;c.b=c.b-2|0;c.a=c.a-2|0;d=a.fE;Bx(b,d.b+1|0,d.a+1|0,c,a.iR);b=a.de;b.b=b.b+2|0;b.a=b.a+2|0;}
function FU(a,b,c){return Ig(a,b)&&Gg(c)?1:0;}
function ACz(){var a=this;B.call(a);a.zF=20;a.fU=null;a.fh=null;a.jb=null;a.na=0;a.jV=0;a.jk=0.0;a.cK=null;a.kQ=null;a.eW=null;a.f5=null;a.f1=0;}
function AGS(){var a=new ACz();AU3(a);return a;}
function AU3(a){a.zF=20;a.fU=new Bf;a.fh=new Bf;a.cK=BH();a.kQ=D8(0);}
function Vj(a,b){var c,d,e,f,g;c=a.f1;if(b==c)return;d=a.cK.j;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bd(0,(c-1|0)/20|0);f=Bd(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Tf(a,b);a.f1=b;}else{if(a.f1>=b)while(true){if(g<f)break a;a.f1=ON(Br(a.cK,g%d|0),a.eW,a.f5,a.f1,b,e,a.jk);g=g+(-1)|0;}while(f<=g){a.f1=ON(Br(a.cK,f%d|0),a.eW,a.f5,a.f1,b,e,a.jk);f=f+1|0;}}}}
function Mc(a,b){if(b===null)b=D8(0);a.kQ=b;}
function UV(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=BZ(a.cK);while(B1(f)){g=B3(f);h=a.fU;i=W(a.cK.j,a.jV);j=a.kQ;k=g.ff.a;l=((g.ks.a-(b%i|0)|0)+i|0)%i|0;m=d.hr;n=b+l|0;o=g.O;n=n/o|0;p=l+k|0;q=BG(p,c);if(q<=0){o=k/o|0;k=0;p=0;q=0;while(p<o){i=n+p|0;if(MK(g,j,q,i,d,m)){i=W((p-k|0)+1|0,g.O);U(g.dW,BT(g.bu),i);Cv(g.eP,0.0,W(k,g.O),BT(g.bu),i);i=q;}else{r=Gc(d,j,q,m);EV(g,e,l+W(k,g.O)|0,h,m.fB,r);U(g.dW,BT(g.bu),g.O);Cv(g.eP,0.0,W(p,g.O),BT(g.bu),g.O);k=p;}p=p+1|0;q=i;}r=Gc(d,j,q,m);EV(g,e,l+W(k,g.O)|
0,h,m.fB,r);}else{if(q>0&&l<c){o=Bd(c-l|0,0);k=g.O;q=o/k|0;if(o%k|0)q=q+1|0;s=0;t=0;u=0;while(t<q){v=n+t|0;if(MK(g,j,u,v,d,m)){o=W((t-s|0)+1|0,g.O);U(g.dW,BT(g.bu),o);Cv(g.eP,0.0,W(s,g.O),BT(g.bu),o);v=u;}else{r=Gc(d,j,u,m);EV(g,e,l+W(s,g.O)|0,h,m.fB,r);U(g.dW,BT(g.bu),g.O);Cv(g.eP,0.0,W(t,g.O),BT(g.bu),g.O);s=t;}t=t+1|0;u=v;}r=Gc(d,j,u,m);EV(g,e,l+W(s,g.O)|0,h,m.fB,r);}if(p>i){n=b/g.O|0;o=Bb(p%i|0,c);U(g.dW,BT(g.bu),g.O);k=b%Da(g.bu)|0;l=g.O;k=k/l|0;p=k+(o/l|0)|0;if(o%l|0)p=p+1|0;o=k;s=k;i=n;while(o<p){if(MK(g,
j,i,n+(o-k|0)|0,d,m)){l=W((o-s|0)+1|0,g.O);U(g.dW,BT(g.bu),l);Cv(g.eP,0.0,W(s,g.O),BT(g.bu),l);}else{r=Gc(d,j,i,m);l=s-k|0;q=g.O;EV(g,e,W(l,q)-(b%q|0)|0,h,m.fB,r);i=(n+o|0)-k|0;U(g.dW,BT(g.bu),g.O);Cv(g.eP,0.0,W(o,g.O),BT(g.bu),g.O);s=o;}o=o+1|0;}r=Gc(d,j,i,m);n=s-k|0;o=g.O;EV(g,e,W(n,o)-(b%o|0)|0,h,m.fB,r);}}}}
function LO(a,b,c,d){var e,f,g,h,i,j;e=a.cK.j;while(true){f=a.cK.j;g=W(f,a.jV);if(g>(d+a.na|0))break;h=B$(0,g);i=new Ry;g=a.fh.b;f=a.na;j=a.jb;i.dW=new Bf;i.eP=new B_;i.ks=h;i.d$=20;i.O=f;i.ff=B$(g,20*f|0);i.ha=N2(j,f);if(i.bu===null)i.bu=CZ(b);BC(a.cK,i);}if(f==e)return;Tf(a,c);}
function Tf(a,b){var c,d,e,f,g,h,i,j;c=a.cK;d=c.j;e=W((b/(d*20|0)|0)+1|0,d)*20|0;c=BZ(c);while(B1(c)){f=B3(c);g=a.eW;h=a.jk;EI(g);i=0;while(true){j=f.d$;if(i>=j)break;j=e-W(d,j)|0;if(j<b)j=e;e=j+1|0;GB(f,g,C8(e),W(f.O,i)+f.ha|0,h);i=i+1|0;}CS(f.bu,g);}}
function Tj(a,b,c,d){var e;a.jb=b;a.na=c;e=c*20|0;a.jV=e;b=CK(a.eW,CO(d,a.fh.b,e));a.eW=b;CC(b,a.jb);TO(a.eW,2);b=CK(a.f5,CO(d,a.fh.b,c));a.f5=b;CC(b,a.jb);TO(a.f5,2);}
function Qx(a){D9(a.cK,new Nv);H0(a.cK);a.eW=CK(a.eW,null);a.f5=CK(a.f5,null);}
function TU(a,b,c,d,e){Cx(a.fU,b);U(a.fh,c,d);a.jk=e;}
var Yb=G(0);
function AHB(a,b){var c;c=a.br();while(c.bz()){b.g(c.bn());}}
var HZ=G(0);
function ANP(a,b){var c,d;c=a.br();d=0;while(c.bz()){if(b.U(c.bn())){c.l4();d=1;}}return d;}
var E5=G();
function D$(a){return a.cW()?0:1;}
function Ie(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=AFl(IN(BI(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BZ(a);while(B1(f)){g=b.data;h=e+1|0;g[e]=B3(f);e=h;}return b;}
function ASM(a,b){var c;c=a.br();while(c.bz()){if(BW(c.bn(),b)){c.l4();return 1;}}return 0;}
function I2(a,b){var c,d;c=0;d=b.br();while(d.bz()){if(!a.tC(d.bn()))continue;c=1;}return c;}
var TA=G(0);
var JW=G(0);
function Gv(){E5.call(this);this.cG=0;}
function ARQ(a,b){a.nE(a.cW(),b);return 1;}
function BZ(a){var b;b=new OO;b.hu=a;b.nr=a.cG;b.jt=a.cW();b.gP=(-1);return b;}
function AQR(a,b,c){var d,e;if(b>=0&&b<=a.cW()){if(c.eh())return 0;d=c.br();while(d.bz()){e=b+1|0;a.nE(b,d.bn());b=e;}return 1;}c=new BE;Y(c);K(c);}
function ATN(a,b,c){c=new D_;Y(c);K(c);}
function K1(a,b){var c,d;c=a.cW();d=0;while(true){if(d>=c)return (-1);if(BW(b,a.jU(d)))break;d=d+1|0;}return d;}
function APE(a,b){var c,d;if(!Ji(b,JW))return 0;c=b;if(a.j!=c.j)return 0;d=0;while(d<c.j){if(!BW(Br(a,d),Br(c,d)))return 0;d=d+1|0;}return 1;}
var L4=G(0);
function ABt(){var a=this;Gv.call(a);a.cC=null;a.j=0;}
function BH(){var a=new ABt();AL8(a);return a;}
function AL8(a){a.cC=R(B,10);}
function J7(a,b){var c,d;c=a.cC.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cC=Dp(a.cC,d);}}
function Br(a,b){JU(a,b);return a.cC.data[b];}
function AQy(a){return a.j;}
function BC(a,b){var c,d;J7(a,a.j+1|0);c=a.cC.data;d=a.j;a.j=d+1|0;c[d]=b;a.cG=a.cG+1|0;return 1;}
function Th(a,b,c){var d,e,f;Q$(a,b);J7(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.cC.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cC.data[b]=c;a.j=d+1|0;a.cG=a.cG+1|0;}
function Ey(a,b){var c,d,e,f;JU(a,b);c=a.cC.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cG=a.cG+1|0;return d;}
function XV(a,b){var c;c=K1(a,b);if(c<0)return 0;Ey(a,c);return 1;}
function H0(a){ABV(a.cC,0,a.j,null);a.j=0;a.cG=a.cG+1|0;}
function ABX(a,b,c){var d,e,f,g,h,i;Q$(a,b);if(c.eh())return 0;J7(a,a.j+c.cW()|0);d=c.cW();e=a.j;f=e-1|0;while(f>=b){g=a.cC.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.j=e+d|0;h=c.br();i=0;while(i<d){g=a.cC.data;e=b+1|0;g[b]=h.bn();i=i+1|0;b=e;}a.cG=a.cG+1|0;return 1;}
function JU(a,b){var c;if(b>=0&&b<a.j)return;c=new BD;Y(c);K(c);}
function Q$(a,b){var c;if(b>=0&&b<=a.j)return;c=new BD;Y(c);K(c);}
function D9(a,b){var c;c=0;while(c<a.j){b.g(a.cC.data[c]);c=c+1|0;}}
function Pa(){B.call(this);this.zX=null;}
function O_(){B.call(this);this.n4=null;}
function AJb(a,b){var c;c=a.n4;FX(c,Fq(b,H7(c)));}
function O$(){B.call(this);this.so=null;}
function AIf(a,b){var c;c=a.so;Jk(c,Fq(b,U4(c)));}
function O9(){B.call(this);this.v2=null;}
function AIe(a){var b,c;b=a.v2;c=b.iN?0:1;b.iN=c;b=new M;O(b);Gt(H(b,C(241)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Pf(){B.call(this);this.pA=null;}
function AL6(a){var b,c;b=a.pA;c=b.iT?0:1;b.iT=c;b=new M;O(b);Gt(H(b,C(242)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Pd(){B.call(this);this.tG=null;}
function AWb(a){var b,c;b=a.tG;c=b.kv^1;b.kv=c;b=new M;O(b);Gt(H(b,C(243)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Pc(){B.call(this);this.xL=null;}
function AOF(a){var b,c,d,e,f;b=a.xL;c=(b.d_+3|0)%6|0;b.d_=c;d=b.hd.data;e=d.length;f=0;while(f<e){b=d[f];b.b$=c;b=b.b7;if(b!==null)b.iV=1;f=f+1|0;}}
function Pb(){B.call(this);this.pm=null;}
function AQ7(a){var b;b=a.pm;b.bT=b.bT?0:1;Qx(b.di);b.di=AGS();Uy(b,b.ba,b.cz,b.cE.b4);}
function O8(){B.call(this);this.sU=null;}
function AVl(a){var b;b=a.sU;b.jN=b.jN?0:1;}
function O7(){B.call(this);this.wB=null;}
function AHZ(a){var b;b=a.wB;b.j5=b.j5?0:1;}
var FC=G(Co);
var A0G=null;var A0S=null;var A0H=null;var A0T=null;function AIc(){AIc=Bq(FC);APG();}
function AEA(a,b){var c=new FC();AEk(c,a,b);return c;}
function AEk(a,b,c){AIc();Dd(a,b,c);}
function APG(){var b;A0G=AEA(C(244),0);A0S=AEA(C(245),1);b=AEA(C(246),2);A0H=b;A0T=I(FC,[A0G,A0S,b]);}
function K6(){B.call(this);this.zP=null;}
var AZ3=null;var A0U=null;function ANw(){ANw=Bq(K6);AVT();}
function ALl(a){var b=new K6();AAG(b,a);return b;}
function AAG(a,b){ANw();a.zP=b;}
function AVT(){AZ3=ALl(C(247));A0U=ALl(C(248));}
var Ng=G(0);
function Gg(a){return DE(a,null);}
function Sr(b){var c;c=new Tu;c.v9=b;return c;}
function RZ(){B.call(this);this.ta=null;}
function AMZ(a){Ki(a.ta);}
function RX(){B.call(this);this.xg=null;}
function AHR(a){KP(a.xg);}
var AAa=G(0);
var A0O=null;function AF7(){A0O=new O0;}
function Le(){var a=this;B.call(a);a.z=null;a.c8=null;a.d2=null;a.dn=null;a.c_=null;a.gR=null;a.gE=null;a.cL=0;a.h4=0;a.tP=0.0;}
function VQ(a){var b;b=W3(a);return AGU(AJy(Ko(0,b,0),null,null));}
function BR(a,b){return a.z.data[b];}
function CB(a){return a.z.data.length;}
function W3(a){return E7(a,CB(a));}
function F1(a,b){return a.z.data[b].I;}
function LR(a,b){var c,d,e,f,g,h,i;c=a.z.data;d=c[b];e=c[b+1|0];f=DS(Mp(d.p,e.p));g=a.z;h=g.data.length;if(b<h&&b>=0){i=R(CD,h-1|0);c=i.data;S7(g,b,i);c[b]=f;a.z=i;return;}d=new Bu;Y(d);K(d);}
function NR(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.z.data;if(!(c<d[b].I?0:1)){d=(BR(a,b)).p.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){f=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}f=0;}FD();h=new By;d=BV(1);d.data[0]=f;HW(h,d);FK(a,b,c,1,h);h=a.z.data[b];i=h.p;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=J(d[j].v);if(c<b)break;c=c-b|0;j=j+1|0;}}if(J(d[j].v)==1)h.p=S7(i,j,R(Cf,e-1|0));else{k=d[j];if(c<=0)l=Dz(Do(k.v,1),k.cH,k.cg);else if(c>=(J(k.v)-1|0)){l=new Cf;m=k.v;Vp(l,Ca(m,0,J(m)-
1|0),k.cH,k.cg);}else{i=BV(J(k.v)-1|0);n=i.data;b=0;while(b<c){n[b]=P(k.v,b);b=b+1|0;}b=n.length;while(c<b){m=k.v;e=c+1|0;n[c]=P(m,e);c=e;}l=Dz(Gf(i),k.cH,k.cg);}d[j]=l;}h.I=h.I-1|0;Ev(h);}else if(b!=(d.length-1|0)){FK(a,b,c,1,C(197));LR(a,b);}}
function AAq(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){TT(a.z.data[b],c,e[0]);return;}g=f-1|0;h=Iu(a.z.data[b],c);d=a.z;i=Dp(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.p.data;m=l.length;c=!m?0:J(l[m-1|0].v);Ne(j,j.p.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fz(e[m]))j=DS(R(Cf,0));else{j=new CD;l=R(Cf,1);l.data[0]=Dz(e[m],0,0);Iq(j,l);}d[b+m|0]=j;m=m+1|0;}Ne(h[1],0,0,e[g]);d[b+g|0]=h[1];a.z
=i;}
function X9(a,b){var c,d,e,f,g,h,i;c=D2(b);d=FL(b);e=c.P;if(e==d.P)return Ca(Fe(a.z.data[e]),c.bh,d.bh);f=new M;O(f);b=a.z.data[c.P];e=c.bh;BL(BU(f,Do(Fe(b),e)),10);g=a.z.data;e=c.P+1|0;h=d.P;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AAQ(BU(f,Fe(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.z.data[d.P];h=d.bh;BU(f,Ca(Fe(b),0,h));return N(f);}b=new YH;Y(b);K(b);}
function N8(a,b,c){var d;Yt(a,b);d=D2(b);FK(a,d.P,d.bh,1,c);}
function Yt(a,b){var c,d,e,f,g,h,i;a:{c=D2(b);d=FL(b);e=c.P;if(e==d.P)GK(a.z.data[e],c.bh,d.bh);else{b=a.z.data[e];GK(b,c.bh,b.I);GK(a.z.data[d.P],0,d.bh);e=c.P+1|0;f=d.P;g=a.z;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(CD,(h-f|0)+e|0);ADl(g,e,f,i);a.z=i;LR(a,c.P);break a;}b=new Bu;Y(b);K(b);}b=new Bu;Y(b);K(b);}}}
function Hp(a,b,c){return Du(b,Gj(BR(a,b),c));}
function Y8(a,b){var c,d,e;c=0;d=0;while(true){e=a.z.data.length;if(c>=e)break;if((d+(BR(a,c)).I|0)>=b)return B$(c,b-d|0);d=d+((BR(a,c)).I+1|0)|0;c=c+1|0;}return B$(e,0);}
function E7(a,b){var c,d,e;c=0;d=a.z.data.length;e=0;while(e<b){c=c+F1(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Mo(a,b){return MI(BR(a,b.bm),b.bw);}
function ET(a){var b,c,d,e,f,g,h,i,j;b=BV(W3(a));c=b.data;d=a.z.data.length;e=0;f=0;while(e<d){g=a.z.data[e].p.data;h=g.length;i=0;while(i<h){j=g[i].v;RG(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function FK(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cL=a.cL+1|0;f=a.gR;g=R(Hf,1);h=new Hf;h.ed=b;h.ej=c;i=ML(e,C(197),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B$(b,c+J(i[0])|0);break a;}k=B$((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=B$(b,c);}i=g.data;h.l$=k;h.ni=d;h.ge=e;i[0]=h;BC(f,g);KT(a,b,c,d,e);}
function KT(a,b,c,d,e){var f;f=E7(a,b)+c|0;if(!d){Qh(a.c8,f,J(e));Wn(a.d2,f,J(e));}else{RU(a.c8,f,J(e));Oz(a.d2,f,J(e));}}
function Oq(a,b){var c,d,e;c=ML(b.ge,C(197),(-1));if(b.ni){AAq(a,b.ed,b.ej,c);Qh(a.c8,E7(a,b.ed)+b.ej|0,J(b.ge));Wn(a.d2,E7(a,b.ed)+b.ej|0,J(b.ge));}else{c=c.data;d=AJe();B7(d.b1,b.ed,b.ej);e=c.length;if(e==1)B7(d.bL,b.ed,b.ej+J(c[0])|0);else B7(d.bL,(b.ed+e|0)-1|0,J(c[e-1|0]));Yt(a,d);RU(a.c8,E7(a,b.ed)+b.ej|0,J(b.ge));Oz(a.d2,E7(a,b.ed)+b.ej|0,J(b.ge));}return b.l$;}
function Ka(a){a.h4=a.cL;}
function Ra(a,b){var c,d,e,f,g;c=0;d=0;while(true){e=a.z.data;f=e.length;if(d>=f)break;g=e[d].I;if(b<=(c+g|0))return Du(d,b-c|0);c=c+(g+1|0)|0;d=d+1|0;}return Du(f,0);}
function Rc(a){var b,c,d;a.gE=BM(a.z.data.length+1|0);b=0;while(b<a.z.data.length){c=a.gE.data;d=b+1|0;c[d]=(c[b]+(BR(a,b)).I|0)+1|0;b=d;}}
var Fi=G();
function K0(){Fi.call(this);this.zq=null;}
function UK(){Fi.call(this);this.zk=null;}
function RK(){Fi.call(this);this.AG=null;}
var FV=G(0);
var T6=G(0);
function Hs(){var a=this;B.call(a);a.P=0;a.bh=0;}
function B7(a,b,c){a.P=b;a.bh=c;}
function Wi(a,b){a.P=b.P;a.bh=b.bh;}
function Tl(a,b){var c;c=BG(a.P,b.P);if(c)return c;return BG(a.bh,b.bh);}
function LB(){var a=this;B.call(a);a.mg=null;a.kR=null;}
function Mv(a){return a.mg.bm;}
function Km(a){return a.mg.bw;}
var X7=G(0);
function Ux(){B.call(this);this.h_=null;}
function EF(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.h_));}
function Dy(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.h_));}
function AKJ(a){var b,c;b=a.h_.byteLength;c=new M;O(c);H(V(H(c,C(249)),b),C(250));return N(c);}
var Wg=G(0);
function LI(){var a=this;B.call(a);a.hq=null;a.fL=null;a.nb=null;}
function AEM(a,b){var c=new LI();ANr(c,a,b);return c;}
function AWr(a,b,c){var d=new LI();Pv(d,a,b,c);return d;}
function AAP(b){var c,d,e,f,g,h,i;c=new LI;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=R(By,0);else{f=R(By,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=FS(e[h]);h=h+1|0;}}}else f=R(By,0);Pv(c,d,b,f);return c;}
function ANr(a,b,c){Pv(a,b,c,R(By,0));}
function Pv(a,b,c,d){a.hq=b;a.fL=c;a.nb=d;}
function Kn(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EN(a);e=new M;O(e);H(H(e,C(251)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EN(a){var b;b=a.hq;return FS(b!==null?b.name:a.fL.name);}
function ANS(a){var b,c,d,e,f;if(a.fL===null){b=a.nb;c=EN(a);d=ACj(b);e=new M;O(e);H(H(H(e,d),C(252)),c);c=N(e);}else{b=a.nb;c=EN(a);f=Kn(a,a.fL.size);d=ACj(b);e=new M;O(e);V(H(H(H(H(e,d),C(252)),c),C(253)),f);c=N(e);}return c;}
function Tu(){B.call(this);this.v9=null;}
function DE(a,b){GU(a.v9,b);return 1;}
function Lh(){var a=this;D5.call(a);a.cV=0;a.cf=null;a.cT=0;a.xI=0.0;a.lZ=0;}
function IM(){var a=new Lh();Rz(a);return a;}
function AMz(a,b){return R(G5,b);}
function Rz(a){var b;b=AGV(16);a.cV=0;a.cf=R(G5,b);a.xI=0.75;Wt(a);}
function AGV(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function EZ(a){var b;if(a.cV>0){a.cV=0;b=a.cf;ABV(b,0,b.data.length,null);a.cT=a.cT+1|0;}}
function Wt(a){a.lZ=a.cf.data.length*a.xI|0;}
function Go(a,b){return UX(a,b)===null?0:1;}
function WS(a){var b;b=new Wu;b.sp=a;return b;}
function Cl(a,b){var c;c=UX(a,b);if(c===null)return null;return c.cZ;}
function UX(a,b){var c,d;if(b===null)c=TQ(a);else{d=b.m5();c=Sa(a,b,d&(a.cf.data.length-1|0),d);}return c;}
function Sa(a,b,c,d){var e;e=a.cf.data[c];while(e!==null&&!(e.jT==d&&ABg(b,e.cJ))){e=e.cQ;}return e;}
function TQ(a){var b;b=a.cf.data[0];while(b!==null&&b.cJ!==null){b=b.cQ;}return b;}
function KE(a){var b;if(a.lr===null){b=new QW;b.hv=a;a.lr=b;}return a.lr;}
function F3(a,b,c){var d,e,f,g;if(b===null){d=TQ(a);if(d===null){a.cT=a.cT+1|0;d=Wk(a,null,0,0);e=a.cV+1|0;a.cV=e;if(e>a.lZ)WI(a);}}else{e=b.m5();f=e&(a.cf.data.length-1|0);d=Sa(a,b,f,e);if(d===null){a.cT=a.cT+1|0;d=Wk(a,b,f,e);e=a.cV+1|0;a.cV=e;if(e>a.lZ)WI(a);}}g=d.cZ;d.cZ=c;return g;}
function Wk(a,b,c,d){var e,f;e=new G5;AAh(e,b,null);e.jT=d;f=a.cf.data;e.cQ=f[c];f[c]=e;return e;}
function AC_(a,b){var c,d,e,f,g,h,i,j;c=AGV(!b?1:b<<1);d=R(G5,c);e=d.data;f=0;b=c-1|0;while(true){g=a.cf.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.jT&b;j=h.cQ;h.cQ=e[i];e[i]=h;h=j;}f=f+1|0;}a.cf=d;Wt(a);}
function WI(a){AC_(a,a.cf.data.length);}
function ABg(b,c){return b!==c&&!b.bU(c)?0:1;}
function CD(){var a=this;B.call(a);a.p=null;a.I=0;a.gb=null;a.eS=null;a.d7=null;a.hp=null;a.gs=0;a.iV=0;a.hX=0;}
var A0V=0;var A0W=0;var A0K=0;function DS(a){var b=new CD();Iq(b,a);return b;}
function Iq(a,b){var c,d,e,f;c=b.data;a.p=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.I=d;Ev(a);}
function US(a,b){return a.p.data[b];}
function Gj(a,b){var c;c=Jq(a,b);return c<=0?0:a.d7.data[c-1|0];}
function Jq(a,b){var c,d,e,f;c=a.p.data.length;if(!c)return (-1);if(!(a.d7!==null&&!a.hX)){Y9(a);d=0;e=0;f=a.p.data.length;while(d<f){e=e+J(a.p.data[d].v)|0;a.d7.data[d]=e;d=d+1|0;}a.hX=0;}d=VE(a.d7,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function MI(a,b){var c;c=a.p.data;if(!c.length)return null;return c[Jq(a,b)];}
function GK(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.I){a.p=R(Cf,0);Ev(a);a.I=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.p.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.p.data[f].v);j=BG(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.p.data[f];if(!b&&c==J(k.v)?1:0){g=a.p;a.p=S7(g,e,R(Cf,g.data.length-1|0));a.I=a.I-d|0;Ev(a);return;}a.p.data[e]=Dz(Fs(Ca(k.v,0,b),Do(k.v,c)),k.cH,k.cg);}else{g=a.p.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.p.data[e]=Dz(Ca(l.v,0,b),l.cH,l.cg);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.p.data[f]=Dz(Do(m.v,c),m.cH,m.cg);g=a.p;a.p=ADl(g,e,f,R(Cf,(g.data.length-f|0)+e|0));}a.I=a.I-d|0;Ev(a);}
function Iu(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(CD,[DS(R(Cf,0)),a]);if(b>=a.I)return I(CD,[a,DS(R(Cf,0))]);c=a.p;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(CD,[DS(LD(c,0,R(Cf,d))),DS(LD(c,d,R(Cf,f-d|0)))]);h=e[d];e=LD(c,0,R(Cf,d+1|0));i=e.data;j=LD(c,d,R(Cf,f-d|0));c=j.data;i[d]=Dz(Ca(h.v,0,b),h.cH,h.cg);c[0]=Dz(Do(h.v,b),h.cH,h.cg);return I(CD,[DS(e),DS(j)]);}
function TT(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.p.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}Ne(a,d,b,c);}
function Ne(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.p;f=e.data;g=f.length;if(!g){h=R(Cf,1);h.data[0]=Rx(d);a.p=h;}else if(!b&&!c){i=R(Cf,g+1|0);h=i.data;DB(e,0,i,1,g);h[0]=Rx(d);a.p=i;}else{j=f[b];if(c<=0)k=Dz(Fs(d,j.v),j.cH,j.cg);else if(c>=J(j.v))k=Dz(Fs(j.v,d),j.cH,j.cg);else{l=J(d);m=l+c|0;n=J(j.v)-c|0;h=BV(J(j.v)+l|0);i=h.data;o=0;while(o<c){i[o]=P(j.v,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=P(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=P(j.v,g+c|0);g=g+1|0;}k=Dz(Gf(h),j.cH,j.cg);}f[b]=k;}a.I=a.I+J(d)|0;Ev(a);}
function OD(a){var b,c,d,e,f,g;b=0;c=a.p.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<MD(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lg(a,b,c){var d,e,f,g,h,i,j;d=a.p.data.length;e=a.gb;if(!(e!==null&&e.data.length>=d)){a.gb=AHU(d);a.eS=BM(d);a.gs=1;}Y9(a);if(!a.gs)A0W=A0W+1|0;else{f=0;g=0.0;A0V=A0V+1|0;h=0;while(h<d){i=c.data;j=a.p.data[h];f=f+J(j.v)|0;a.d7.data[h]=f;CC(b,i[j.cg]);g=g+EA(b,j.v);a.gb.data[h]=g;a.eS.data[h]=g+0.5|0;h=h+1|0;}a.I=f;a.gs=0;a.hX=0;}}
function Y9(a){var b;b=a.d7;if(!(b!==null&&b.data.length>=a.p.data.length)){a.d7=BM(a.p.data.length);a.hX=1;}}
function Ev(a){a.gs=1;a.iV=1;a.hX=1;a.hp=null;}
function TN(a,b,c,d){var e,f,g,h,i,j,k;if(a.hp===null)a.hp=R($rt_arraycls($rt_intcls()),a.p.data.length);e=a.hp.data[d];if(e===null){e=c.data;f=a.p.data[d];CC(b,e[f.cg]);f=f.v;e=BM(J(f)-1|0);c=FA(f);g=!d?0.0:a.gb.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new By;k=i+1|0;Nc(f,c,0,k);h[i]=g+EA(b,f)+0.5|0;i=k;}a.hp.data[d]=e;}return e;}
function GR(a,b,c,d){var e,f,g,h,i;if(a.p.data.length&&b){if(!(!a.gs&&a.eS!==null))Lg(a,c,d);if(b>=a.I)return a.eS.data[a.p.data.length-1|0];e=0;f=0;a:{while(true){g=a.p.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BG(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eS.data[f];}return (TN(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function E8(a){var b,c,d;a:{b=a.p.data.length;if(b){c=a.eS.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hb(a,b){var c;if(b>=a.I)return b+1|0;c=Jq(a,b);return a.d7.data[c];}
function Fe(a){var b,c,d,e;b=new M;Gl(b,a.I);c=a.p.data;d=c.length;e=0;while(e<d){BU(b,c[e].v);e=e+1|0;}return N(b);}
function VP(b){var c,d,e,f;c=R(CD,1);d=c.data;e=new CD;f=R(Cf,1);f.data[0]=Rx(b);Iq(e,f);d[0]=e;return c;}
function ADd(){A0K=0;}
function ACo(){var a=this;B.call(a);a.eU=null;a.dm=null;}
function ASf(){var a=new ACo();AH6(a);return a;}
function AKs(a,b){var c=new ACo();AMh(c,a,b);return c;}
function AH6(a){var b;b=new Ly;Rz(b);a.dm=b;}
function AMh(a,b,c){a.eU=b;a.dm=c;}
function UT(a,b,c){var d;d=new NO;d.xe=c;d.xc=b;AGB(b,d);b=b.b6;d=new NP;d.n3=a;d.n2=c;b.ep(d);}
function Wn(a,b,c){var d;d=a.eU;if(d===null)return;Su(a,d,b,c);}
function Oz(a,b,c){var d;d=a.eU;if(d===null)return;VJ(a,d,b,c);}
function Su(a,b,c,d){var e,f,g,h;e=b.dw.br();while(e.bz()){Z4(a,e.bn(),c,d);}e=b.eg.br();while(e.bz()){f=e.bn();g=new W4;g.t$=a;Ej(a,g,f,c,d);}h=b.e7.br();while(h.bz()){e=h.bn();Z4(a,e.e1,c,d);f=new W2;f.qm=a;Ej(a,f,e.il,c,d);}b=b.b6.br();while(b.bz()){Su(a,b.bn(),c,d);}}
function Z4(a,b,c,d){Kj(a,b.db,c,d);}
function Ej(a,b,c,d,e){var f,g;a:{if(c instanceof Fu){f=c.ke;g=new OH;g.r3=a;g.r4=b;g.r5=d;g.r6=e;D9(f,g);}else{if(!(c instanceof EC)){if(!(c instanceof EK))break a;f=c;Ej(a,b,f.eF,d,e);Ej(a,b,f.gj,d,e);return;}g=c.fv;f=new OJ;f.wg=a;f.wc=b;f.wd=d;f.wf=e;D9(g,f);}}if(c!==null){c=c.dM;if(c!==null)b.jK(c,Dh(d),Dh(e));}}
function Kj(a,b,c,d){var e;e=b.cy;if(e>=c)b.cy=e+d|0;}
function VJ(a,b,c,d){var e,f,g,h;e=b.dw.br();while(e.bz()){IR(a,(e.bn()).db,c,d);}e=b.eg.br();while(e.bz()){f=e.bn();g=new Ud;g.xV=a;Ej(a,g,f,c,d);}h=b.e7.br();while(h.bz()){e=h.bn();IR(a,e.e1.db,c,d);f=new T_;f.nY=a;Ej(a,f,e.il,c,d);}b.dw.mB(new Ub);b.eg.mB(new Ua);b=b.b6.br();while(b.bz()){VJ(a,b.bn(),c,d);}}
function IR(a,b,c,d){var e;e=b.cy;if(e>=c)b.cy=e-d|0;}
var O0=G();
function AVp(a){}
function Cf(){var a=this;B.call(a);a.v=null;a.cH=0;a.cg=0;}
function Rx(a){var b=new Cf();ALq(b,a);return b;}
function Dz(a,b,c){var d=new Cf();Vp(d,a,b,c);return d;}
function ALq(a,b){Vp(a,b,0,0);}
function Vp(a,b,c,d){a.v=b;a.cH=c;a.cg=d;}
function HO(b,c){return (!b?0:2)+(!c?0:1)|0;}
function MD(a){return J(a.v);}
function Om(){var a=this;B.call(a);a.da=null;a.eN=0;}
var A0X=null;function AGU(a){var b=new Om();ACu(b,a);return b;}
function ACu(a,b){a.eN=0;a.da=b;}
function WQ(a,b){var c;if(b.ek)return b;b=BZ(b.bp);while(true){if(!B1(b))return null;c=WQ(a,B3(b));if(c!==null)break;}return c;}
function Wv(a,b,c){var d,e,f,g;d=KD(a,a.da,b);if(d===null)return;e=c.cM.b6;f=c.bp;if(d===a.da){b=new Uv;b.pT=a;D9(f,b);b=new UJ;b.vT=a;e.ep(b);b=a.da;b.bp=f;b.cM.b6=e;b.ek=0;return;}if(!D$(f)){b=d.gT;if(b!==null){c=new Xe;c.qh=b;D9(f,c);g=K1(b.bp,d);if(g==(-1))I2(b.bp,f);else{Ey(b.bp,g);ABX(b.bp,g,f);}}}b=d.cM.eA;c=new YW;c.oe=b;e.ep(c);g=K1(b.b6,d.cM);if(g==(-1))I2(b.b6,e);else{b.b6.nu(g);b.b6.uo(g,e);}}
function KD(a,b,c){var d,e,f,g;d=b.bY;if(d.bZ==c.bZ&&d.b3==c.b3?1:0){d=BZ(b.bp);while(B1(d)){e=KD(a,B3(d),c);if(e!==null)return e;}return b;}b=BZ(b.bp);while(true){if(!B1(b))return null;d=B3(b);f=c.bZ;g=c.b3;e=d.bY;if(e.bZ<=f&&g<=e.b3?1:0){e=KD(a,d,c);if(e!==null)break;}}return e;}
function Nk(a,b,c){BC(c,b.bY);b=BZ(b.bp);while(B1(b)){Nk(a,B3(b),c);}}
function Qh(a,b,c){a.eN=0;Lw(a,a.da,b,c);}
function Lw(a,b,c,d){var e;if(C6(b)<c)return;a:{if(C1(b)>c){MV(b,d);GY(b,d);b=BZ(b.bp);while(B1(b)){Lw(a,B3(b),c,d);}}else{if(!LU(b,c)){if(a.eN)break a;if(C6(b)!=c)break a;}GY(b,d);if(C1(b)==c&&a.eN)MV(b,d);e=BZ(b.bp);while(B1(e)){Lw(a,B3(e),c,d);}if(!a.eN){b.ek=1;a.eN=1;}}}}
function RU(a,b,c){a.eN=0;Kv(a,a.da,b,c);}
function Kv(a,b,c,d){var e,f,g,h,i,j;if(C6(b)<c)return;e=C1(b);f=c+d|0;if(e>f){e= -d|0;MV(b,e);GY(b,e);g=BZ(b.bp);while(B1(g)){Kv(a,B3(g),c,d);}b.bp=Zx(a,b.bp);}else{h=b.bY;if(c<=h.bZ&&h.b3<=f?1:0){if(b===a.da){Mb(b,0);KJ(b,0);b.cM.b6.iS();}else{Mb(b,(-1));KJ(b,(-1));ZN(b.cM);b.cM=null;}H0(b.bp);}else{e=LU(b,c);f=LU(b,f);if(e&&f)GY(b, -d|0);else if(e)KJ(b,c);else{if(!f)return;Mb(b,c);GY(b, -d|0);}h=BZ(b.bp);while(B1(h)){Kv(a,B3(h),c,d);}h=b.bp;i=null;g=Qu(0);while(true){d=0;a:{while(true){if(i===null)i=BZ(h);if
(!B1(i))c=0;else{j=B3(i);g=Qu(!ADg(g)&&!j.ek?0:1);c=1;d=1;}if(!c){c=0;break a;}if(!d)break;}c=1;}if(!c)break;}if(!g.ny&&!a.eN)b.ek=1;else a.eN=1;b.bp=Zx(a,b.bp);}}}
function Zx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BH();d=null;e=A0X;f=b.cC;g=b.j;if(e===null)e=AY8;h=R(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}ACM(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.cG=b.cG+1|0;b=BZ(b);while(B1(b)){m=B3(b);if(C1(m)==C6(m))continue;if(!m.ek){if(d!==null){BC(c,d);d=null;}BC(c,m);}else if(d===null)d=m;else{n=AJy(Ko(Bb(C1(d),C1(m)),Bd(C6(d),C6(m)),d.bY.fj),d.gT,d.cM);n.ek=1;d=m.cM;if(d===null)d=n;else{ZN(d);d=n;}}}if(d!==null)BC(c,d);return c;}
function Zd(a,b,c,d){var e,f,g,h,i;if((C6(c)-C1(c)|0)<43)e=Ca(d,C1(c),C6(c));else{e=Ca(d,C1(c),C1(c)+20|0);f=Ca(d,C6(c)-20|0,C6(c));g=new M;O(g);H(H(H(g,e),C(170)),f);e=N(g);}e=WX(e,C(197),C(254));f=BA();g=new M;O(g);h=V(g,b);BL(h,32);h=H(h,c);BL(h,9);H(h,e);Bt(f,N(g));c=BZ(c.bp);i=b+1|0;while(B1(c)){Zd(a,i,B3(c),d);}}
function AEo(){A0X=new Si;}
var Ly=G(Lh);
function MC(a,b,c){var d;if(b!==null&&c!==null){if(!Go(a,b)){c=new BE;d=new M;O(d);H(H(d,C(255)),b);Bi(c,N(d));K(c);}if(!Go(a,c)){b=new BE;d=new M;O(d);H(H(d,C(255)),c);Bi(b,N(d));K(b);}if(Bn(b,c))return 1;c=BZ(Cl(a,c));while(B1(c)){if(MC(a,b,B3(c)))return 1;}return 0;}return 1;}
function AG1(){var a=this;B.call(a);a.bZ=0;a.b3=0;a.fj=0;}
function Ko(a,b,c){var d=new AG1();ALj(d,a,b,c);return d;}
function ALj(a,b,c,d){a.bZ=b;a.b3=c;a.fj=d;}
function ATa(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.bZ==c.bZ&&a.b3==c.b3&&a.fj==c.fj?1:0;}return 0;}
function AJ0(a,b){var c;b=b;c=BG(a.bZ,b.bZ);if(!c)c=BG(b.b3,a.b3);return c;}
var Si=G();
function AQP(a,b,c){var d;b=b;c=c;b=b.bY;c=c.bY;d=BG(b.bZ,c.bZ);if(!d)d=BG(c.b3,b.b3);return d;}
function Xd(){var a=this;B.call(a);a.bY=null;a.gT=null;a.bp=null;a.cM=null;a.ek=0;}
function AJy(a,b,c){var d=new Xd();AGr(d,a,b,c);return d;}
function AGr(a,b,c,d){a.ek=0;a.bY=b;a.gT=c;a.bp=BH();a.cM=d;}
function ABK(b){return AAA(b,null);}
function AAA(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Be(b);e=Be(b);f=Be(b);g=Be(b);h=Be(b);i=Ko(d,e,f);j=new Xd;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AGr(j,i,null,l);m=0;while(m<g){l=AAA(b,c);l.gT=j;BC(j.bp,l);m=m+1|0;}return j;}
function AEN(b,c,d){var e,f,g,h,i;a:{e=b.bY;f=b.bp;g=e.bZ;h=e.b3;i=e.fj;Bs(c,g);G1(c,h,i);Bs(c,f.j);if(d!==null){e=b.cM;if(e!==null&&X5(d,e)){g=(MN(d,b.cM)).bF;break a;}}g=(-1);}Bs(c,g);b=BZ(f);while(B1(b)){AEN(B3(b),c,d);}}
function C1(a){return a.bY.bZ;}
function C6(a){return a.bY.b3;}
function Mb(a,b){a.bY.bZ=b;}
function KJ(a,b){a.bY.b3=b;}
function MV(a,b){var c;c=a.bY;c.bZ=c.bZ+b|0;}
function GY(a,b){var c;c=a.bY;c.b3=c.b3+b|0;}
function LU(a,b){return C1(a)<=b&&b<C6(a)?1:0;}
function AM8(a){var b,c,d,e,f;b=a.bY;c=b.bZ;d=b.b3;e=b.fj;b=new M;O(b);BL(b,40);BL(V(H(V(H(V(b,c),C(44)),d),C(44)),e),41);b=N(b);c=a.ek;f=new M;O(f);Gt(H(H(f,b),C(44)),c);return N(f);}
function ASl(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BW(a.bY,c.bY)&&BW(a.bp,c.bp)?1:0;}return 0;}
var HQ=G(0);
function GV(){var a=this;B.call(a);a.cJ=null;a.cZ=null;}
function A0Y(a,b){var c=new GV();AAh(c,a,b);return c;}
function AAh(a,b,c){a.cJ=b;a.cZ=c;}
function AKM(a,b){var c,d;if(a===b)return 1;if(!Ji(b,HQ))return 0;a:{b:{c:{d:{c=b;b=a.cJ;if(b!==null){if(!b.bU(c.cJ))break c;else break d;}if(c.cJ!==null)break c;}b=a.cZ;if(b!==null){if(!b.bU(c.cZ))break c;else break b;}if(c.cZ===null)break b;}d=0;break a;}d=1;}return d;}
function G5(){var a=this;GV.call(a);a.jT=0;a.cQ=null;}
function Ls(){var a=this;Lv.call(a);a.qK=null;a.pn=null;}
function ABq(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.qK;e=0;f=0;g=a.pn;a:{while(true){if((e+32|0)>f&&DV(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bb(Cc(b)+j|0,i.length);OE(b,d,j,f-j|0);e=0;}if(!DV(c)){k=!DV(b)&&e>=f?AZU:AZT;break a;}i=g.data;j=Bb(Cc(c),i.length);l=new OY;l.ob=b;l.rA=c;k=AEa(a,d,e,f,g,0,j,l);e=l.vC;j=l.xa;if(k===null){if(!DV(b)&&e>=f)k=AZU;else if(!DV(c)&&e>=f)k=AZT;}Y7(c,g,0,j);if(k!==null)break;}}EW(b,b.Z-(f-e|0)|0);return k;}
var Rb=G(Ls);
function AEa(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Mq(h,2))break a;i=AZT;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!MU(l)){if((f+3|0)>g){j=j+(-1)|0;if(Mq(h,3))break a;i=AZT;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CI(l)){i=Ed(1);break a;}if
(j>=d){if(DV(h.ob))break a;i=AZU;break a;}c=j+1|0;m=k[j];if(!C7(m)){j=c+(-2)|0;i=Ed(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Mq(h,4))break a;i=AZT;break a;}k=e.data;o=EE(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vC=j;h.xa=f;return i;}
var I9=G(Ef);
var NI=G();
function AVx(a,b){return b.text();}
function NL(){var a=this;B.call(a);a.te=null;a.td=null;}
function AUv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.te;d=a.td;e=R(By,8);f=BV(16);g=0;h=0;i=b.length;j=0;while(true){k=BG(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=EQ(f,0,g);m=h+1|0;e=AFP(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=OV(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.g(AWV(Q0(e,h),ARD(d)));}
var NJ=G();
function AI1(a,b){AGT(b);}
function IJ(){var a=this;B.call(a);a.b8=null;a.V=null;a.uc=null;a.hr=null;a.dY=null;a.vH=null;a.wu=null;a.w8=null;}
function A0Z(a,b,c,d,e){var f=new IJ();JL(f,a,b,c,d,e);return f;}
function KG(){var b,c,d,e,f,g,h,i;b=new IJ;c=new Je;d=new HF;F0();Ky(d,A00);M7(c,d,BO(A0C),BO(A01),BO(A02),BO(A0C),BO(A03),BO(A04),BO(A05),BO(A06),BO(A07),BO(A08));ACF();e=(A09.ft()).data;f=e.length;g=R(JB,f);h=g.data;i=0;while(i<f){h[i]=e[i].m2;i=i+1|0;}JL(b,c,g,AE9(S(C(256)),S(C(257)),S(C(258)),S(C(259))),Hi(),AAU(S(C(119)),S(C(120)),S(C(121)),S(C(260))));return b;}
function JL(a,b,c,d,e,f){var g;g=c.data;a.vH=EX(C(156),16.0);a.wu=EX(C(156),17.0);a.w8=EX(C(155),15.0);a.b8=b;a.uc=c;a.hr=d;if(g.length>=15){a.V=e;a.dY=f;return;}b=new BE;Y(b);K(b);}
function JK(){var a=this;CP.call(a);a.c0=null;a.g4=null;}
function AX$(a){var b=new JK();AHf(b,a);return b;}
function AHf(a,b){var c,d,e,f;FW(a,b);c=AS1(a.t);a.g4=c;d=ADc(a.t,c);a.c0=d;Pe(a.t,d);Ba(b.m.bB,a.g4);Ba(b.m.dG,a.g4);Ba(b.m.bB,a.c0);c=b.m.b_;d=new Rl;d.qf=a;Ba(c,d);c=b.m.b_;d=new IB;e=a.c0;BP(e);f=new Ri;f.wI=e;N6(d,b,f);Ba(c,d);c=b.m.f8;d=a.c0;BP(d);e=new Rj;e.p$=d;Ba(c,e);c=b.m.gH;d=new Pi;d.q6=a;Ba(c,d);c=b.m.dG;d=new Pj;d.xA=a;Ba(c,d);b=b.m.e3;c=new Pg;c.oI=a;Ba(b,c);KV(a);}
function ATv(a,b){return LM(a.c0,b);}
function AMM(a){FP(a);JI(a.c0);AAb(a.g4);}
function AVa(a){return M1(0);}
function AHL(a,b,c){G2(a,b,c);a.mh(b,c);}
function AE4(a,b,c){JX(a.c0,new Bf,b,c);}
function ALe(a,b){BP(b);NZ(a.g4,b);KQ(a.c0,b);}
function ADj(a,b){if(b.bl!=121)return 0;return 1;}
function ABv(a,b){var c,d,e;if(Ea(a.t,a.c0)){c=a.g4;d=a.c0;e=new Ui;e.tV=a;MW(c,b,d,a,d,e);}return 1;}
function AA1(){var a=this;Cz.call(a);a.lS=null;a.lt=null;a.dz=null;a.g6=null;a.fR=null;a.hS=null;a.n5=null;a.iv=null;a.wm=null;a.mm=null;a.yM=null;a.yO=null;a.gI=null;a.mR=null;a.rR=0;}
function AYB(a){var b=new AA1();AOY(b,a);return b;}
function AOY(a,b){var c,d,e,f,g,h,i;Eu(a,b);c=(KG()).b8.fk;a.lS=c;a.lt=AUF(c);a.dz=FZ(0,0,300,300);a.g6=U$(0,0,3,3);a.fR=FZ(0,0,300,300);a.hS=AMH();d=R(By,4);e=d.data;e[0]=C(210);e[1]=C(191);e[2]=C(232);e[3]=C(231);a.n5=d;a.iv=R(Ju,e.length);c=b.bf;f=b.m.bB;g=new WC;g.fW=a;Ba(f,g);f=b.m.b_;g=new RQ;g.xJ=a;Ba(f,g);f=b.m.nH;g=new RP;g.q3=a;Ba(f,g);f=b.m.f8;g=new RO;g.z1=a;Ba(f,g);f=b.m.kr;g=new RN;g.x8=a;Ba(f,g);f=b.m.e3;g=new RM;g.ze=a;Ba(f,g);b=b.m.dG;f=new RL;f.vs=a;Ba(b,f);h=CO(a.bd.bf,300,300);f=h.bx;b="white";f.fillStyle
=b;b=h.bx;f="white";b.strokeStyle=f;b=h.bx;f=10.0;b.lineWidth=f;h.bx.strokeRect(75.0,140.0,150.0,110.0);h.bx.fillRect(130.0,190.0,40.0,60.0);h.bx.beginPath();h.bx.moveTo(50.0,140.0);h.bx.lineTo(150.0,60.0);h.bx.lineTo(250.0,140.0);h.bx.closePath();h.bx.stroke();Gp(h,C(261),11.0);L8(h,187,187,187);Rw(a,C(262),h);b=CZ(a.bd.bf);CS(b,h);F$(h);a.wm=b;Gd(a.dz,b);GH(a.dz);BJ(a.dz.bA,a.lS);BJ(a.dz.bq,CR(204,120,50));b=CO(c,255,100);a.gI=b;Gp(b,C(156),11.0);b=BA();i=$rt_str(a.gI.bx.font);g=new M;O(g);H(H(g,C(263)),i);Bt(b,
N(g));EA(a.gI,C(264));L8(a.gI,169,183,198);Rw(a,C(264),a.gI);b=CZ(c);a.mm=b;CS(b,a.gI);Gd(a.fR,a.mm);GH(a.fR);HE(a.fR,CQ(255));HP(a.fR,a.lS);a.yM=CZ(c);BJ(a.g6.bA,a.lt);}
function Rw(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function TZ(a,b){Kh(FJ(),0.5+FJ()*0.5,0.5+FJ()*0.5,1.0,b.bq);}
function AIn(a,b){var c;a.rR=a.rR+1|0;c=b/5.0;Kh(c-(c|0),1.0,1.0,1.0,a.g6.bq);return U7(a.hS,b);}
function AK$(a){var b,c,d,e,f,g;b=a.bd.bf;FE(b,a.lt);c=a.iv.data;d=c.length;e=0;while(e<d){Tc(c[e],b,0,0);e=e+1|0;}DG(a.dz,b,a.wm,0,0,0.5);f=a.mm;d=0;while(d<7){g=a.fR;DG(g,b,f,W(d,10+((10*g.s.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.yO;if(g!==null)Z7(a.g6,b,g,0,0,0.0);WE(a.hS,b,new Bf);Pl(b,C(265));}
function AOr(a,b,c){var d,e,f,g,h,i,j;d=BA();e=new M;O(e);H(H(e,C(266)),b);Bt(d,N(e));d=BA();e=new M;O(e);Fx(H(e,C(267)),c);Bt(d,N(e));f=Cd(30.0,c);g=Cd(10.0,c);h=0;while(true){i=a.iv.data;if(h>=i.length)break;j=1+h|0;i[h]=U$(W(g,j)+W(f,h)|0,f,f,f);TZ(a,a.iv.data[h]);h=j;}U(a.g6.A,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dz;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.fR;d.A.a=b.a-d.s.a|0;}
function OB(a,b){var c,d,e,f,g;c=BA();d=!b.ii?C(268):C(269);e=b.ea;f=b.bl;g=b.tv;b=new M;O(b);Gt(H(V(H(H(H(b,d),e),C(270)),f),C(271)),g);Bt(c,N(b));return 0;}
function Po(){var a=this;CP.call(a);a.rq=null;a.ee=null;a.c9=null;a.eB=null;a.nI=null;}
function ANA(a,b,c){var d;d=HH(a.t,a.nI);Ij(a.ee,d);Ij(a.c9,d);Ht(a.ee,a.t);Ht(a.c9,a.t);}
function S0(b){return IW(b,ATy());}
function IW(b,c){var d;d=U6();MH(d,KX(b,Ja(c,25)),!b?null:IW(b-1|0,c));MH(d,KX(b,Ja(c,20)),!b?null:IW(b-1|0,c));MH(d,KX(b,Ja(c,15)),!b?null:IW(b-1|0,c));MH(d,KX(b,Ja(c,10)),!b?null:IW(b-1|0,c));return II(d);}
function KX(b,c){var d;if(b){d=new M;O(d);H(H(V(d,b),C(35)),c);c=N(d);}return c;}
function MH(b,c,d){var e,f;e=new HG;f=Kh(FJ(),1.0,1.0,1.0,new B_);AEx();Il(e,f,A0$,A0_);if(d!==null)GP(b,c,e,d);else{d=new Y3;d.qE=c;D3(b,c,e,d);}}
function ALT(a,b,c){var d,e;G2(a,b,c);b=a.t.cj;d=Ek(a.ee);e=Ek(a.c9);KO(a.ee,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);KO(a.c9,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AK_(a){var b,c,d,e,f,g,h,i;FP(a);b=a.bd.bf;Cw(b,1);c=a.rq;d=a.t;e=d.cj;U(c.mO,e.b,Cd(2.0,d.b4));U(c.ns,Cd(2.0,d.b4),e.a);F0();f=A07;g=d.c7;h=e.a/2|0;i=c.mO;Bx(g,0,h-(i.a/2|0)|0,i,f);g=d.c7;h=e.b/2|0;c=c.ns;Bx(g,h-(c.b/2|0)|0,0,c,f);MG(a.ee,a.t);MG(a.c9,a.t);HV(a.eB);Cw(b,0);}
function AOt(a,b){var c,d,e;c=LC(a.eB,b);d=LF(a.ee,b.i,a.t.cP);e=LF(a.c9,b.i,a.t.cP);return !c&&!d&&!e?0:1;}
function ATI(a,b,c){return M4(a.eB,b,c);}
function ASY(a,b,c){return DD(a.eB);}
function AJc(a,b,c,d){var e,f,g;e=Kz(a.eB,b,c,d);f=Mx(a.ee,b.i,c,d);g=Mx(a.c9,b.i,c,d);return !e&&!f&&!g?0:1;}
function UG(){var a=this;CP.call(a);a.iG=null;a.fm=null;a.jW=null;a.lk=null;}
function AKT(a,b,c){if(b===0.0)R8(a);}
function AQQ(a){var b;FP(a);b=a.bd.bf;LQ(a.fm,b);HV(a.iG);}
function R8(a){var b,c,d,e,f,g,h;b=a.jW;if(b!==null){J1(a.fm,b);LS(b);}b=(KG()).V;c=AYl(a.t,new Og);d=EX(C(155),14.0);e=ANx();f=0;while(f<300){g=C8(f);h=new Uz;h.pg=C(272);h.pf=g;h.pe=C(273);Nh(e,C(272),g,C(273),h);f=f+1|0;}OL(c,YI(e));AAt(c,b,d);g=AAZ(a.t);h=AAE(c,a.t);AAm(h,b.ls,b.k7);K2(g,h);g.e_=b;Ir(g,C(274),a.lk,2.0);a.jW=g;HS(a.fm,g);Q1(a);}
function AJB(a,b,c){G2(a,b,c);ZZ(a.fm,b,c);Q1(a);}
function Q1(a){var b,c,d;b=a.t.cj;FI(a.jW,B$((b.b*2|0)/10|0,(b.a*4|0)/10|0),B$((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.jW;b=AAD(c.S.r);d=new M;O(d);H(H(d,C(275)),b);Ir(c,N(d),a.lk,2.0);}
function AK4(a,b){return RT(a.fm,b);}
function Ox(){var a=this;CP.call(a);a.kw=null;a.g3=null;a.fS=null;a.i8=null;a.qx=null;a.iX=null;a.hf=null;a.gB=null;a.jx=0;a.g2=0;}
function Pm(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.g3.j>0){d=FJ();e=a.g3;f=d*(e.j-1|0)|0;e=Ey(e,f);Ey(a.fS,f);f=a.g2;g=e.s;a.g2=f-W(g.b,g.a)|0;IS(a.kw,e.dc);}c=c+1|0;}}
function Mr(a,b){var c,d,e,f,g,h,i,j;c=Jr(a.t);CC(c,a.i8);d=0;while(d<b){e=Ja(a.iX,1+(FJ()*19.0|0)|0);f=AJd();g=f.dc;h=a.kw;BP(c);i=new R4;i.uk=c;BJ(g,JG(h,e,i));(Y2(FJ(),1.0,1.0,f.bA)).bO=0.5;h=f.A;g=f.dc;U(h,g.bt|0,g.bN|0);h=f.s;g=f.dc;U(h,g.bo|0,g.bO|0);BC(a.fS,e);BC(a.g3,f);j=a.g2;h=f.s;a.g2=j+W(h.b,h.a)|0;d=d+1|0;}a.gB=J3(a.kw);}
function ASN(a){var b,c,d,e,f,g,h,i;FP(a);b=a.bd.bf;Cw(b,1);c=a.t.c7;if(a.fS.j){d=a.gB;d=CO(c,d.b,d.a);CC(d,a.i8);e=a.i8.dx;Bx(c,0,0,a.gB,a.qx);f=0;while(f<a.fS.j){g=Br(a.g3,f);h=Br(a.fS,f);g=g.dc;Ch(d,h,g.bt,g.bN+e);f=f+1|0;}g=a.hf;if(!(g!==null&&BT(g)==a.gB.b&&Da(a.hf)==a.gB.a))a.hf=CK(a.hf,CZ(c));CS(a.hf,d);F$(d);i=0;while(i<a.fS.j){d=Br(a.g3,i);HE(d,CQ(0));DG(d,c,a.hf,0,0,0.0);i=i+1|0;}}Cw(b,0);}
function AIa(a,b){var c,d;if(a.jx){c=a.gB;d=Bb(W(c.b,c.a),2211840);if(a.g2/d<=0.7)Mr(a,IZ(a.iX,5));else Pm(a,IZ(a.iX,5));}return a.jx;}
function UC(){var a=this;Cz.call(a);a.eR=null;a.g5=null;a.iw=null;a.la=null;a.et=0;a.uV=0;a.qy=null;a.kS=0;a.o_=0;a.pM=null;a.t6=null;}
function AHK(a){var b,c;b=a.et;c=new M;O(c);V(H(c,C(276)),b);$rt_globals.console.info($rt_ustr(N(c)));FE(a.eR,a.qy);Jv(a.iw,a.et,0,Gm(a),5000,a.la.b,20);Cw(a.eR,1);Zh(a.iw,a.eR);Cw(a.eR,0);b=a.et;c=new M;O(c);V(H(c,C(276)),b);$rt_globals.console.info($rt_ustr(N(c)));Vj(a.g5,a.et/a.kS|0);UV(a.g5,a.et,Gm(a),a.t6,a.eR);}
function AHJ(a,b,c){a.la=b;TU(a.g5,B$(0,0),50,Gm(a),c);LO(a.g5,a.eR,0,Gm(a));}
function XZ(a){return 5000-Gm(a)|0;}
function Gm(a){return Bb(a.uV,a.la.a);}
function Df(){var a=this;Cz.call(a);a.mY=null;a.hk=null;a.x9=0.0;}
function A1a(a){var b=new Df();GN(b,a);return b;}
function GN(a,b){Eu(a,b);a.mY=ACk(0,0,64);a.hk=new Bf;OG(b.b0,IH(BI(a)));}
function TV(a){FE(a.bd.bf,a.mY);}
function Un(a,b,c){Cx(a.hk,b);a.x9=c;}
var R_=G(Df);
var ABd=G(Df);
function AYs(a){var b=new ABd();ARc(b,a);return b;}
function ARc(a,b){var c,d,e,f,g,h;GN(a,b);c=b.b0;d=new SJ;d.yB=a;e=R(B,1);e.data[0]=C(277);CU(c,d,C(278),e);f=b.b0;g=new SI;g.zQ=a;h=R(B,1);h.data[0]=ADB([1,2,3,4,5]);CU(f,g,C(279),h);f=b.b0;g=new SL;g.n7=a;h=R(B,1);h.data[0]=AXk([1,2,3,4,5]);CU(f,g,C(280),h);f=b.b0;g=new SK;g.y$=a;h=R(B,1);h.data[0]=Em([1,2,3,4,5]);CU(f,g,C(281),h);f=b.m.b_;d=new IB;g=new SH;g.Ad=a;c=new SG;c.pH=a;Zm(d,b,g,c);Ba(f,d);}
function Zk(a,b){var c,d,e,f,g,h;c=b.data;d=BA();e=c[0];f=new M;O(f);H(H(f,C(282)),e);Bt(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((R0(b,1)).h_));d=BA();e=c[1];if(b===null)f=C(38);else{f=new M;O(f);BU(f,C(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BU(f,C(44));V(f,c[g]);g=g+1|0;}BU(f,C(45));f=N(f);}h=new M;O(h);H(H(H(H(h,C(283)),e),C(284)),f);Bt(d,N(h));}
function NV(){var a=this;Df.call(a);a.er=null;a.fX=null;a.ms=null;a.vy=null;a.nJ=null;}
function AM7(a,b){b=b/5.0;Kh(b-(b|0),1.0,1.0,1.0,a.fX.bq);return 0;}
function AKU(a){TV(a);DG(a.er,a.bd.bf,a.vy,0,0,0.5);Z7(a.fX,a.bd.bf,a.ms,0,0,0.0);Pl(a.bd.bf,C(265));}
function AU6(a,b,c){var d,e,f;Un(a,b,c);U(a.fX.A,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.er;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Uw(){var a=this;Df.call(a);a.gk=null;a.oZ=null;a.kM=null;a.jC=null;a.im=null;}
function AVV(a){var b,c,d,e,f,g;TV(a);b=a.bd.bf;c=a.jC;Mg(b,c.b,c.a,a.im);b=a.gk;c=a.oZ;d=a.hk;e=a.bd.bf;f=0;while(true){g=0;while(true){DG(b,e,c,g,f,0.5);g=g+BT(c)|0;if(g>=d.b)break;}f=f+Da(c)|0;if(f>=d.a)break;}Hq(a.bd.bf);}
function AMC(a,b,c){Un(a,b,c);U(a.im,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function Ul(){var a=this;Cz.call(a);a.ew=null;a.kT=null;a.fZ=null;a.cc=null;a.e2=0;a.h5=null;a.e0=0;a.Ag=20;a.AH=11;a.x2=220;a.kh=null;a.zB=5000;a.hA=0;a.ga=null;}
function AUA(a){var b,c,d,e,f,g,h;b=a.h5;c=a.e0;d=a.kh;Jv(b,c,0,d.a,5000,d.b,20);Cw(a.ew,1);Zh(a.h5,a.ew);if(a.cc===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.kT,C8(e),0.0,c);}b=CZ(a.ew);a.cc=b;CS(b,a.kT);}if(a.e0<=a.e2)while(true){f=a.e2;if(f<=a.e0)break;a.e2=f-20|0;b=a.fZ;g=a.hA-1|0;a.hA=g;Ch(b,C8(g),0.0,20.0);Iz(a.cc,a.fZ,0,a.e2%220|0);EI(a.fZ);}else while(a.e2<(a.e0-20|0)){b=a.fZ;g=a.hA+1|0;a.hA=g;Ch(b,C8((g+11|0)-1|0),0.0,20.0);Iz(a.cc,a.fZ,0,a.e2%220|0);EI(a.fZ);a.e2=a.e2+20|0;}b=FZ(0,0,BT(a.cc),Da(a.cc));H4(b,
0,0,BT(a.cc),Da(a.cc));HE(b,a.ga.data[0]);HP(b,a.ga.data[1]);DG(b,a.ew,a.cc,400,0,1.0);g=a.e0%220|0;f=Bb(Da(a.cc)-g|0,200);d=FZ(0,0,BT(a.cc),f);H4(d,0,g,BT(a.cc),f);HE(d,a.ga.data[0]);HP(d,a.ga.data[1]);DG(d,a.ew,a.cc,0,0,1.0);h=FZ(0,f,BT(a.cc),(Da(a.cc)-f|0)-20|0);H4(h,0,0,BT(a.cc),(Da(a.cc)-f|0)-20|0);HE(h,a.ga.data[1]);HP(h,a.ga.data[0]);DG(h,a.ew,a.cc,0,0,1.0);}
function ALc(a,b,c){Cx(a.kh,b);}
function ASh(a,b){return 0;}
function TL(a){return 5000-a.kh.a|0;}
function Jw(){Df.call(this);this.d8=0;}
function Tb(a){var b,c;b=a.bd.b0;c=new Xj;c.pG=a;SV(b,c,N4(a));}
function QY(a){var b,c,d,e;b=a.d8+1|0;a.d8=b;c=IH(F(Jw));d=new M;O(d);H(H(V(H(d,C(285)),b),C(35)),c);e=N(d);c=a.bd.b0;d=new Z2;d.p0=e;V6(c,e,d,N4(a));}
function N4(a){var b;b=new R1;b.xs=a;return b;}
function AN9(a,b,c,d){a:{switch(c){case 0:break;case 2:QY(a);break a;default:break a;}Tb(a);}return 1;}
function T3(){var a=this;Cz.call(a);a.ud=null;a.gd=null;a.lP=null;a.hU=null;}
function AVJ(a){var b;b=a.bd.bf;FE(b,a.ud);DG(a.gd,b,a.lP,0,0,0.5);}
function AQi(a,b,c){var d,e,f;d=a.gd;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function G$(){var a=this;Cz.call(a);a.vN=null;a.ck=null;a.d4=null;a.dd=null;a.e$=null;a.ev=null;}
function Nj(a,b){var c,d;Eu(a,b);a.vN=CQ(20);a.ck=TY();a.d4=new Bf;a.dd=new Bf;a.e$=new Bf;a.ev=new Bf;c=b.m.b_;d=new WV;d.z5=a;Ba(c,d);Ba(b.m.bB,a);b=a.ck.bA;F0();BJ(b,A0C);BJ(a.ck.bq,A0D);}
function ACL(a){var b,c,d;b=a.bd.bf;FE(b,a.vN);c=a.ck;d=c.A;Bx(b,d.b,d.a,c.s,c.bA);Cw(b,1);c=a.ck;d=c.A;AAC(b,d.b,d.a,c.s,a.d4,a.dd,a.e$,a.ev,c.bq);Cw(b,0);}
function AON(a,b){return 0;}
var Vn=G(G$);
function ARR(a,b,c){var d,e,f;d=a.ck;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);U(a.d4,0,0);U(a.dd,Bb(b.b,b.a),Bb(b.b,b.a));b=a.e$;d=a.d4;U(b,d.b,d.a+20|0);b=a.ev;d=a.dd;U(b,d.b,d.a+40|0);}
function ATs(a,b){var c,d,e;Cx(a.d4,b.i);b=a.dd;c=a.ck;d=c.A;e=d.b;c=c.s;U(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.e$;c=a.d4;U(b,c.b,c.a+20|0);b=a.ev;c=a.dd;U(b,c.b,c.a+40|0);return 0;}
function Vm(){var a=this;G$.call(a);a.fz=null;a.gf=null;}
function AVo(a,b){var c;c=a.dd;b=b.i;c.a=b.a-50|0;a.ev.a=b.a+100|0;return 1;}
function AKP(a){var b,c,d,e,f,g,h;b=Bd(a.d4.b,a.e$.b);c=Bb(a.dd.b,a.ev.b);d=Bb(a.d4.a,a.dd.a)-50|0;e=Bd(a.e$.a,a.ev.a)+50|0;Hv(a.ck,b,d,c-b|0,e-d|0);ACL(a);f=a.ck.A.b-10|0;Up(a,a.bd.bf,10,f,a.d4,a.e$);g=a.ck;h=g.A.b+g.s.b|0;Up(a,a.bd.bf,h,f,a.dd,a.ev);}
function Up(a,b,c,d,e,f){var g;U(a.fz,c,a.ck.A.a);U(a.gf,d,e.a-a.ck.A.a|0);g=a.fz;Bx(b,g.b,g.a,a.gf,a.ck.bA);U(a.fz,c,e.a);U(a.gf,d,f.a-e.a|0);e=a.fz;Bx(b,e.b,e.a,a.gf,a.ck.bq);U(a.fz,c,f.a);e=a.gf;g=a.ck;U(e,d,(g.A.a+g.s.a|0)-f.a|0);e=a.fz;Bx(b,e.b,e.a,a.gf,a.ck.bA);}
function AIP(a,b,c){}
function Zj(){var a=this;CP.call(a);a.hY=null;a.ey=null;a.iL=null;a.iM=null;a.pZ=null;}
function ALO(a,b,c){if(b===0.0)Wc(a);}
function AUe(a){var b;FP(a);b=a.bd.bf;LQ(a.ey,b);HV(a.hY);}
function Wc(a){S$(a,a.iL);S$(a,a.iM);a.iL=Zg(a,0.5,0,C(286));a.iM=Zg(a,1.0,1,C(287));HS(a.ey,a.iL);HS(a.ey,a.iM);Ya(a);}
function S$(a,b){if(b!==null){J1(a.ey,b);LS(b);}}
function Zg(a,b,c,d){var e,f,g;e=AAZ(a.t);f=new Qd;g=new YJ;g.q_=a;g.ra=e;g.q$=d;Ws(f);f.kk=new B_;f.mG=new Bf;f.qC=g;f.qz=b;if(c)f=AAE(f,a.t);K2(e,f);e.e_=Hi();return e;}
function ATn(a,b,c){G2(a,b,c);ZZ(a.ey,b,c);Ya(a);}
function Ya(a){var b;b=a.t.cj;FI(a.iM,B$((b.b*2|0)/10|0,(b.a*2|0)/10|0),B$((b.b*7|0)/10|0,(b.a*7|0)/10|0));FI(a.iL,B$(b.b/10|0,b.a/10|0),B$((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AMD(a,b){return RT(a.ey,b);}
var Nx=G(JK);
function AJS(a){return M1(1);}
function AV7(a,b,c){AE4(a,b,c);}
function Je(){var a=this;B.call(a);a.xC=null;a.fk=null;a.uC=null;a.zI=null;a.rM=null;a.nw=null;a.pL=null;a.xF=null;a.mb=null;a.l3=null;a.i7=null;}
function A1b(a,b,c,d,e,f,g,h,i,j,k){var l=new Je();M7(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function M7(a,b,c,d,e,f,g,h,i,j,k,l){a.xC=b;a.fk=c;a.uC=d;a.zI=e;a.rM=f;a.nw=g;a.pL=h;a.xF=i;a.mb=j;a.l3=k;a.i7=l;}
var ABD=G(0);
function AAR(){var a=this;B.call(a);a.fB=null;a.hi=null;a.pN=null;a.n9=null;}
function AE9(a,b,c,d){var e=new AAR();AVt(e,a,b,c,d);return e;}
function AVt(a,b,c,d,e){a.fB=b;a.hi=c;a.pN=d;a.n9=e;}
var AEp=G(0);
function Hi(){var b,c,d;b=new IQ;c=new I5;AEx();d=A1c;M_(c,d,A1d,A1e,A1f,A1g,d);Mh(b,c,AGN(),AG3(S(C(288)),S(C(117)),S(C(118))),AGN(),AAF(1,0.125),A1h,A1i);return b;}
function AGN(){var b,c;b=new HG;c=S(C(289));AEx();Il(b,c,A0$,A0_);return b;}
function AF$(){var b,c;b=new HG;c=S(C(118));AIm();Il(b,c,A1j,A1k);return b;}
function AGA(){var b,c;b=new HG;AFY();c=A1l;AIF();Il(b,c,A1m,A1n);return b;}
function AHd(){var a=this;B.call(a);a.sJ=null;a.nK=null;a.u3=null;a.op=null;}
function AAU(a,b,c,d){var e=new AHd();AI2(e,a,b,c,d);return e;}
function AI2(a,b,c,d,e){a.sJ=b;a.nK=c;a.u3=d;a.op=e;}
function AAx(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dY.nK;break a;case 3:if(c!=3){b=b.dY.op;break a;}b=b.dY.u3;break a;default:b=b.b8.fk;break a;}b=b.dY.sJ;}return b;}
function I1(a,b,c){return AAx(a,b,0,c);}
function Na(){var a=this;B.call(a);a.jQ=null;a.jl=null;}
function Nq(a,b){var c;c=a.jl;a.jl=b;return c;}
function Kb(){var a=this;Na.call(a);a.bW=null;a.cb=null;a.f4=0;a.gh=0;}
function Kt(a){var b;b=Lx(a);if(b==2){if(Lx(a.cb)<0)a.cb=Oh(a.cb);return Qq(a);}if(b!=(-2))return a;if(Lx(a.bW)>0)a.bW=Qq(a.bW);return Oh(a);}
function Lx(a){var b,c;b=a.cb;c=b===null?0:b.f4;b=a.bW;return c-(b===null?0:b.f4)|0;}
function Oh(a){var b;b=a.bW;a.bW=b.cb;b.cb=a;Et(a);Et(b);return b;}
function Qq(a){var b;b=a.cb;a.cb=b.bW;b.bW=a;Et(a);Et(b);return b;}
function Et(a){var b,c,d;b=a.cb;c=b===null?0:b.f4;b=a.bW;d=b===null?0:b.f4;a.f4=Bd(c,d)+1|0;a.gh=1;b=a.bW;if(b!==null)a.gh=1+b.gh|0;b=a.cb;if(b!==null)a.gh=a.gh+b.gh|0;}
var AGH=G();
function AJz(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new QQ;c=c.buffer;d.f3=c;d.nA=new $rt_globals.Int8Array(c);d.k2=new $rt_globals.Uint16Array(c);d.ur=new $rt_globals.Int32Array(c);d.q7=new $rt_globals.Float32Array(c);d.rn=new $rt_globals.Float64Array(c);e=d.f3.byteLength;c=new M;O(c);V(H(c,C(290)),e);CJ(N(c));e=b.callToCpp1();c=new M;O(c);V(H(c,C(291)),e);CJ(N(c));f=b.callToCpp2();c=new M;O(c);Fx(H(c,C(292)),f);CJ(N(c));c=NU(d,b.getC8String());g=new M;O(g);H(H(g,C(293)),c);CJ(N(g));c
=N_(d,b.getC16String());g=new M;O(g);H(H(g,C(294)),c);CJ(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.f3,h,8));c=AFg(i);g=new M;O(g);H(H(g,C(295)),c);CJ(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.f3,h,8));c=ASG(j);g=new M;O(g);H(H(g,C(296)),c);CJ(N(g));k=ADf(d,b.getCDoubleArray8(),8);l=AVY(k);c=new M;O(c);H(H(c,C(297)),l);CJ(D4(c));l=AVL(b.getC8String(),C(298),d);c=Mz();H(H(c,C(299)),l);CJ(D4(c));l=AO8(b.getC16String(),C(300),
d);c=Mz();H(H(c,C(301)),l);CJ(D4(c));c=AQ$(i,d,b.getCIntArray8(),Em([11,22,33,44,55,66,77,88]));g=Mz();H(H(g,C(302)),c);CJ(D4(g));c=AS0(j,d,b.getCFloatArray8(),100,Em([111,222,333,444,555,666,777,888]));g=Mz();H(H(g,C(303)),c);CJ(D4(g));b=ATo(k,d,b.getCDoubleArray8(),1000,Em([1111,2222,3333,4444,5555,6666,7777,8888]));c=Mz();H(H(c,C(304)),b);CJ(D4(c));}
function AS0(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(305);h=0;i=e;a:{while(h<g){if(Dl(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.q7[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(306);}return C(307);}
function ATo(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(305);h=0;i=e;a:{while(h<g){if(HN(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.rn[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(306);}return C(307);}
function AQ$(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(305);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.ur[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(306);}return C(307);}
function AVL(b,c,d){var e,f,g,h;e=NU(d,b);if(!Bn(c,e))return C(308);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.nA[h])return C(309);f=f+1|0;}return C(306);}
function AO8(b,c,d){var e,f,g,h;e=N_(d,b);if(!Bn(c,e))return C(308);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.k2[h>>>1|0]&65535))return C(309);f=f+1|0;}return C(306);}
function CJ(b){QN(C(2),b);}
function ANT(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Rl(){B.call(this);this.qf=null;}
function AJu(a,b){return ADj(a.qf,b);}
function Ri(){B.call(this);this.wI=null;}
function AMc(a,b){JO(a.wI,b);}
function Rj(){B.call(this);this.p$=null;}
function ATH(a,b,c){return Hn(a.p$,b,c);}
function Pi(){B.call(this);this.q6=null;}
function ARf(a){var b,c;b=a.q6.c0;BP(b);c=new Pr;c.o5=b;return c;}
function Pj(){B.call(this);this.xA=null;}
function ANU(a,b,c,d){return Kw(a.xA.c0,c,d);}
function Pg(){B.call(this);this.oI=null;}
function AOL(a,b){b=b;return ABv(a.oI,b);}
function AG9(){Ju.call(this);this.dc=null;}
function AJd(){var a=new AG9();AU2(a);return a;}
function FZ(a,b,c,d){var e=new AG9();ANQ(e,a,b,c,d);return e;}
function AU2(a){WF(a);a.dc=new B_;}
function ANQ(a,b,c,d,e){WF(a);a.dc=new B_;Hv(a,b,c,d,e);}
function GH(a){var b,c;b=a.s;c=a.dc;U(b,c.bo-c.bt|0,c.bO-c.bN|0);}
function Gd(a,b){H4(a,0,0,BT(b),Da(b));}
function H4(a,b,c,d,e){Cv(a.dc,b,c,d,e);}
function DG(a,b,c,d,e,f){var g;g=a.A;E1(b,g.b+d|0,g.a+e|0,a.s,a.dc,c,a.bq,a.bA,f);}
function HE(a,b){BJ(a.bq,b);}
function HP(a,b){BJ(a.bA,b);}
function WC(){B.call(this);this.fW=null;}
function AJM(a,b){var c,d,e,f,g,h,i;c=a.fW;d=c.mR;if(d!==null){e=c.dz.A;f=e.b;g=b.i;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.mR=g;}d=b.i;f=d.b;c=c.g6;e=c.s;h=f-e.b|0;f=d.a-e.a|0;U(c.A,h,f);c=a.fW;d=c.bd.b0;b=b.i;f=0;a:{while(true){i=c.iv.data;if(f>=i.length)break;if(Eq(i[f],b)){b=c.n5.data[f];break a;}f=f+1|0;}b=null;}GU(d,b);return 1;}
function AH1(a,b,c,d){if(!c&&d==2){b=a.fW;TZ(b,b.dz);}return 1;}
function AJG(a,b,c){var d,e;d=BA();e=new M;O(e);V(H(e,C(310)),c);Bt(d,N(e));if(!c){d=b.i;b=a.fW;b.mR=!Eq(b.dz,d)?null:d;W_(a.fW.hS,d.b,d.a);b=a.fW;Rv(b.hS,Kc(b.bd.b0));}return A0N;}
function AIR(a,b,c){var d;b=BA();d=new M;O(d);V(H(d,C(311)),c);Bt(b,N(d));return 1;}
function RQ(){B.call(this);this.xJ=null;}
function ATY(a,b){return OB(a.xJ,b);}
function RP(){B.call(this);this.q3=null;}
function ARh(a,b){return OB(a.q3,b);}
function RO(){B.call(this);this.z1=null;}
function AN$(a,b,c){var d,e;Bt(BA(),C(312));d=!c?C(313):C(28);e=new M;O(e);H(H(H(e,C(314)),d),C(315));Ye(b,N(e));return 1;}
function RN(){B.call(this);this.x8=null;}
function AH7(a){Bt(BA(),C(316));}
function RM(){B.call(this);this.ze=null;}
function AQn(a,b){Bt(BA(),C(317));return 1;}
function RL(){B.call(this);this.vs=null;}
function AT6(a,b,c,d){var e,f,g;b=a.vs;e=( -d|0)/10|0;b=b.dz;f=b.s;f.b=f.b+e|0;f.a=f.a+e|0;b=b.A;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function HF(){var a=this;B_.call(a);a.gY=0;a.g1=0;a.gZ=0;a.g0=0;}
function CQ(a){var b=new HF();AVz(b,a);return b;}
function CR(a,b,c){var d=new HF();AK2(d,a,b,c);return d;}
function S(a){var b=new HF();AS6(b,a);return b;}
function FG(a,b,c,d){var e=new HF();SF(e,a,b,c,d);return e;}
function BO(a){var b=new HF();Ky(b,a);return b;}
function AVz(a,b){SF(a,b,b,b,255);}
function AK2(a,b,c,d){SF(a,b,c,d,255);}
function AS6(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.gY=Jy(P(b,1))*17|0;a.g1=Jy(P(b,2))*17|0;a.gZ=Jy(P(b,3))*17|0;a.g0=255;}else{a.gY=Mf(P(b,1),P(b,2));a.g1=Mf(P(b,3),P(b,4));a.gZ=Mf(P(b,5),P(b,6));a.g0=J(b)!=9?255:Mf(P(b,7),P(b,8));}H8(a.gY,a.g1,a.gZ,a.g0,a);return;}}
function SF(a,b,c,d,e){a.gY=b;a.g1=c;a.gZ=d;a.g0=e;H8(b,c,d,e,a);}
function Ky(a,b){a.gY=b.gY;a.g1=b.g1;a.gZ=b.gZ;a.g0=b.g0;BJ(a,b);}
function Jy(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Mf(b,c){return (16*Jy(b)|0)+Jy(c)|0;}
function NK(){var a=this;B.call(a);a.mO=null;a.ns=null;}
function AEr(){var a=this;B.call(a);a.fD=null;a.cr=null;a.fq=null;a.gQ=null;a.m1=null;a.co=null;a.gy=null;a.cY=0;a.fH=0;a.no=0;a.hK=0;a.gM=0;a.kd=null;a.lz=null;a.nU=null;}
function AD2(){var a=new AEr();ATe(a);return a;}
function ATe(a){a.cr=TY();a.fq=new Bf;a.gQ=new Bf;a.co=A1o;a.hK=(-1);}
function KW(a,b){Xx(a);a.co=b;}
function Ij(a,b){a.fD=b;Xx(a);}
function Im(a,b){var c,d,e,f,g;a.m1=b.js;c=b.bg.ia;BJ(a.cr.bq,c);c=b.iO.me;BJ(a.cr.bA,c);d=0;while(true){e=a.co.data;if(d>=e.length)break;c=e[d];f=b.bg;c.kj=f;c=c.dB;g=f.lw;f=f.ia;BJ(c.bq,g);BJ(c.bA,f);d=d+1|0;}}
function OQ(a){a.gy=CK(a.gy,null);U(a.fq,0,0);a.co=A1o;a.hK=(-1);U9(a.cr);}
function Ht(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Jr(b);d=b.b4;BP(a.fD);CC(c,a.fD);e=KM(a.fD,1.25);f=0;a.cY=Cd(2.0,d);a.fH=Cd(3.0,d);a.no=Cd(12.0,d);g=0;h=a.co.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=SS(c,l.mo);n=a.no;n=(n+m|0)+n|0;f=Bd(f,n);b=l.dB;l=b.A;l.b=g;l.a=0;l=b.s;l.b=n;l.a=e;Cv(b.dc,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.fq;b.b=g;b.a=e;b=a.cr.s;n=a.gM;if(!n){m=a.cY;m=(g+m|0)+W(m,a.co.data.length)|0;}else m=(f+(a.cY*2|0)|0)+(a.fH*2|0)|0;b.b=m;if(!n)e=e+(a.cY*2|0)|0;else{n=a.cY;e=(W(e+n|0,a.co.data.length)
+n|0)+(a.fH*2|0)|0;}b.a=e;}
function KO(a,b,c){var d,e,f,g,h,i,j;U(a.cr.A,b,c);d=a.cY+a.fH|0;e=a.co.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dB;j=i.A;j.b=b+d|0;j.a=c+h|0;if(!a.gM){if(!i.s.b)AA9();d=d+(i.s.b+a.cY|0)|0;}else{if(!i.s.a)AA9();h=h+(i.s.a+a.cY|0)|0;}g=g+1|0;}}
function AA9(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ek(a){var b,c;b=a.fq;if(b.b&&b.a)return a.cr.s;c=new Bu;Bi(c,C(318));K(c);}
function Xx(a){U(a.fq,0,0);}
function MG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.c7;if(!a.co.data.length)return;a:{if(a.gy!==null){d=a.fq;if(W(d.b,d.a))break a;}d=a.fq;if(!W(d.b,d.a))Ht(a,b);d=a.fq;e=d.b;f=d.a;if(!W(e,f))return;d=CO(c,e,f);CC(d,a.fD);g=KM(a.fD,0.125);h=a.fD;i=h.dx;j=g+i-(i+h.eY)/16.0;k=a.co.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.mo,h.dB.dc.bt+a.no,j);l=l+1|0;}h=CK(a.gy,CZ(c));a.gy=h;CS(h,d);F$(d);}if(!K3(a.cr)){d=a.cr;ACv(c,d.s,d.A,d.bA,a.cY,a.gQ);d=a.cr;h=d.s;m=d.A;d=d.bq;e=a.cY;n=a.gQ;n.b=(h.b-e|0)-e|0;n.a=(h.a-
e|0)-e|0;Bx(c,m.b+e|0,m.a+e|0,n,d);if(a.gM){d=a.cr;AET(c,d.s,d.A,0,0,QT(a.m1,b.b4),a.m1.m6,a.gQ);}}k=a.co.data;l=k.length;o=0;while(o<l){DG(k[o].dB,c,a.gy,0,0,0.0);o=o+1|0;}b:{if(a.gM){k=a.co.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dB;m=a.gQ;e=(a.cr.s.b-(a.cY*2|0)|0)-(a.fH*2|0)|0;b=h.s;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.A;Bx(c,d.b+b.b|0,d.a,m,h.bA);}o=o+1|0;}}}}
function LF(a,b,c){var d,e,f,g,h,i,j;d=Eq(a.cr,b);e=!d?(-1):OX(a,b);f=a.hK;if(f!=e){if(f>=0){g=a.co.data[f];WW(g,0);if(a.nU!==null){h=a.hK;i=BA();j=new M;O(j);H(H(V(H(j,C(319)),h),C(320)),g);Bt(i,N(j));}}if(e>=0){i=a.co.data[e];g=a.lz;if(g!==null)g.n0(b,e,i);WW(i,1);}a.hK=e;}return d&&Gg(c)?1:0;}
function Mx(a,b,c,d){var e,f;e=OX(a,b);if(e>=0){f=a.co.data[e];if(!WP(f))f.lo.o();}return 1;}
function OX(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.co.data;if(c>=d.length)return (-1);e=d[c].dB;if(Eq(e,b))return c;if(a.gM){f=e.A;g=f.b;e=e.s;h=e.b;g=g+h|0;i=f.a;f=a.gQ;f.b=(a.cr.s.b-(a.cY*2|0)|0)-h|0;f.a=e.a;if(ABL(b,g,i,f))break;}c=c+1|0;}return c;}
function AAs(a){a.gM=1;}
function VO(){B.call(this);this.uz=null;}
function APR(a,b){var c;c=a.uz;if(b.bl==32)OQ(c.c9);return 0;}
function VK(){B.call(this);this.v$=null;}
function AS2(a,b){var c,d,e,f;b=b;c=a.v$;Bt(BA(),C(321));if(!DD(c.eB)){d=c.eB;b=b.i;e=S0(4);f=new UU;f.y1=c;GF(d,b,e,f);}return 1;}
function ACw(){var a=this;B.call(a);a.kq=null;a.iP=0.0;}
function EX(a,b){var c=new ACw();AQO(c,a,b);return c;}
function AQO(a,b,c){a.kq=b;a.iP=c;}
function ASS(a,b){if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){b=b;return a.iP===b.iP&&BW(a.kq,b.kq)?1:0;}return 0;}
var VL=G();
function AV3(a){Bt(BA(),C(322));}
var VM=G();
function AI4(a){Bt(BA(),C(323));}
function C$(){var a=this;B.call(a);a.dB=null;a.lo=null;a.kj=null;a.jv=null;a.mv=null;a.mo=null;}
function AFi(a,b,c){var d=new C$();Ml(d,a,b,c);return d;}
function AXP(a,b,c,d,e){var f=new C$();ABB(f,a,b,c,d,e);return f;}
function Ml(a,b,c,d){ABB(a,b,c,d,null,null);}
function ABB(a,b,c,d,e,f){var g;g=AJd();a.dB=g;a.mo=c;a.kj=d;a.mv=f;a.lo=b;BJ(g.bq,d.lw);BJ(a.dB.bA,d.ia);a.jv=e;}
function WP(a){return a.jv===null?0:1;}
function WW(a,b){BJ(a.dB.bA,!b?a.kj.ia:a.kj.uS);}
function Xz(){B.call(this);this.yt=null;}
function AN0(a,b){return b.ii&&b.bl==32?1:0;}
function XB(){B.call(this);this.v_=null;}
function AID(a,b){var c,d,e,f,g,h;b=b;c=a.v_;if(!DD(c.iG)){d=c.iG;b=b.i;e=R(C$,1);f=e.data;g=new C$;h=new Qz;h.ow=c;Ml(g,h,C(324),d.io.bg);f[0]=g;GF(d,b,Gb(e),A0O);}return 1;}
var AED=G();
function AHb(b){var c,d;c=CO(b,250,64);Gp(c,C(261),25.0);L8(c,187,187,187);Ch(c,C(325),0.0,24.0);Ch(c,C(325),0.25,56.0);d=CZ(b);CS(d,c);F$(c);return d;}
function ACD(b){var c;c=new Tw;c.iy=b;return c;}
function XA(){B.call(this);this.r$=null;}
function ARN(a,b,c,d){return LL(a.r$,b,c,d);}
function AGK(){var a=this;B.call(a);a.mX=0;a.mZ=0;}
function ATy(){var a=new AGK();AUp(a);return a;}
function AUp(a){var b,c;b=AGn(GD((AFp())));c=GD((AFp()))^(-559038737);a.mX=b;a.mZ=c;c=0;while(c<19){Tp(a);c=c+1|0;}}
function Tp(a){var b,c;b=a.mX;c=a.mZ;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.mX=c;a.mZ=b;return b;}
function AGn(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function IZ(a,b){return 5.9604644775390625E-8*(Tp(a)&16777215)*b|0;}
function N0(){B.call(this);this.qj=null;}
function AP2(a,b,c){var d;d=a.qj;if(b===0.0)Mr(d,100);}
function NY(){B.call(this);this.wE=null;}
function AQp(a,b){var c,d,e;c=a.wE;d=b.bl;if(d==32){c.jx=c.jx?0:1;e=1;}else if(d==13){Mr(c,1);e=1;}else if(d!=8)e=0;else{Pm(c,1);e=1;}return e;}
var S_=G(0);
function AAS(b,c){var d;d=new X0;d.pX=b;d.pW=c;return d;}
function AA2(){var a=this;B.call(a);a.gp=null;a.hc=0;a.jG=0;a.gL=0;}
function ABn(a){var b=new AA2();ALL(b,a);return b;}
function ALL(a,b){a.gp=BH();a.gL=0;a.jG=2048;a.hc=b;}
function JG(a,b,c){var d,e,f,g,h,i,j;d=c.sG(b);e=a.jG;if(d>e){c=new Bu;f=new M;O(f);BL(V(H(V(H(f,C(326)),d),C(327)),e),41);Bi(c,N(f));K(c);}if(!a.hc){b=new BE;Bi(b,C(328));K(b);}a:{b=new B_;if(d){b:{c=a.gp;if(c.j>0){c=BZ(c);g=d;while(true){if(!B1(c))break b;f=B3(c);if(f.bo>=g)break;}Cv(b,f.bt,f.bN,g,a.hc);f.bt=f.bt+g;h=f.bo-g;f.bo=h;if(h===0.0)XV(a.gp,f);break a;}}g=a.gL;i=d;Cv(b,0.0,g,i,a.hc);c=a.gp;f=new B_;h=a.gL;g=a.jG-d|0;j=a.hc;f.bt=i;f.bN=h;f.bo=g;f.bO=j;BC(c,f);a.gL=a.gL+a.hc|0;}}return b;}
function IS(a,b){var c,d,e,f,g,h,i;a:{c=AUF(b);b=a.gp;if(b.j>0){d=BZ(b);while(true){if(!B1(d))break a;e=B3(d);if(e.bN===c.bN){f=e.bt;g=e.bo;h=f+g;i=c.bt;if(h===i){c.bt=f;c.bo=c.bo+g;SR(d);}else{h=c.bo;if(i+h===f){c.bo=h+g;SR(d);}}}}}}BC(a.gp,c);}
function J3(a){return B$(a.jG,a.gL);}
function Oc(){var a=this;B.call(a);a.ql=null;a.jB=null;}
function AIr(a,b,c){if(c)return A0N;return FH(a.jB.iw,b.i,a.ql,1);}
function AIw(a,b,c){return 1;}
function ALx(a,b){var c;c=a.jB;return FU(c.iw,b.i,c.pM);}
function TK(){B.call(this);this.u5=null;}
function APZ(a,b,c,d){var e,f;b=a.u5;e=(Ny(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.et=Bb(Bd(0,b.et+W(e,f)|0),XZ(b));return 1;}
function Rr(){B.call(this);this.r0=null;}
function APH(a,b){var c,d,e;c=a.r0;if(b.cq&&b.bl==79){if(!b.bP){b=c.bd.b0;d=new OK;d.vr=c;ME(b,d);}else{b=c.bd.b0;d=new OI;d.ye=c;XX(b,d);}e=1;}else e=0;return e;}
function SJ(){B.call(this);this.yB=null;}
function APC(a,b){var c,d,e;c=b.data;b=BA();d=c[0];e=new M;O(e);H(H(e,C(282)),d);Bt(b,N(e));b=BA();c=c[1];e=new M;O(e);H(H(e,C(329)),c);Bt(b,N(e));}
function SI(){B.call(this);this.zQ=null;}
function ASo(a,b){var c,d,e,f,g,h,i;c=b.data;d=BA();e=c[0];f=new M;O(f);H(H(f,C(282)),e);Bt(d,N(f));e=EF(R0(b,1));b=BA();g=c[1];if(e===null)d=C(38);else{d=new M;O(d);BU(d,C(43));h=0;while(true){i=e.data;if(h>=i.length)break;if(h>0)BU(d,C(44));BL(d,i[h]);h=h+1|0;}BU(d,C(45));d=N(d);}c=new M;O(c);H(H(H(H(c,C(330)),g),C(331)),d);Bt(b,N(c));}
function SL(){B.call(this);this.n7=null;}
function AJU(a,b){Zk(a.n7,b);}
function SK(){B.call(this);this.y$=null;}
function AI3(a,b){var c,d,e,f,g;c=b.data;d=BA();e=c[0];f=new M;O(f);H(H(f,C(282)),e);Bt(d,N(f));e=Dy(R0(b,1));b=BA();g=c[1];d=AFg(e);c=new M;O(c);H(H(H(H(c,C(332)),g),C(333)),d);Bt(b,N(c));}
function SH(){B.call(this);this.Ad=null;}
function AUX(a,b){var c,d;c=Fb();d=new M;O(d);H(H(d,C(334)),b);Bt(c,N(d));b=new D_;Y(b);K(b);}
function SG(){B.call(this);this.pH=null;}
function ANJ(a,b){var c,d,e,f;c=a.pH;d=c.bd.b0;e=new Xb;e.ul=c;f=R(B,1);f.data[0]=b;CU(d,e,C(335),f);}
function VZ(){B.call(this);this.lE=null;}
function AQY(a,b){var c,d,e,f,g,h;c=a.lE;d=c.nJ;if(d!==null){e=c.er.A;f=e.b;g=b.i;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.nJ=g;}b=b.i;f=b.b;c=c.fX;d=c.s;f=f-d.b|0;h=b.a-d.a|0;U(c.A,f,h);return 1;}
function AVv(a,b,c){var d;if(!c){d=b.i;b=a.lE;if(!Eq(b.er,d))d=null;b.nJ=d;}return A0N;}
var C3=G(0);
var A00=null;var A0D=null;var A01=null;var A0C=null;var A03=null;var A02=null;var A05=null;var A04=null;var A07=null;var A06=null;var A08=null;function F0(){F0=Bq(C3);AVP();}
function AVP(){A00=CQ(187);A0D=S(C(336));A01=CQ(55);A0C=CQ(43);A03=CR(33,66,131);A02=CR(60,63,65);A05=S(C(337));A04=S(C(338));A07=FG(85,85,85,128);A06=FG(43,43,43,0);A08=S(C(259));}
function Ro(){var a=this;B.call(a);a.oB=null;a.jP=null;}
function ANl(a,b,c){var d;if(!c){d=FH(a.jP.h5,b.i,a.oB,1);if(d!==null)return d;}return A0N;}
function AIM(a,b,c){return 1;}
function ALF(a,b){var c;c=a.jP;return FU(c.h5,b.i,Sr(c.bd.b0));}
function AAi(){B.call(this);this.pR=null;}
function AT1(a,b,c,d){var e,f;b=a.pR;e=(Ny(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.e0=Bb(Bd(0,b.e0+W(e,f)|0),TL(b));return 1;}
function YZ(){B.call(this);this.nS=null;}
function AKE(a,b){var c,d;a:{c=a.nS;switch(b.bl){case 67:QY(c);d=1;break a;case 86:Tb(c);d=1;break a;default:}d=0;}return d;}
var YY=G();
function AOi(a,b,c){return 0;}
function YX(){B.call(this);this.re=null;}
function AKL(a,b,c){var d,e;d=a.re;c=d.d8+1|0;d.d8=c;d=IH(F(Jw));e=new M;O(e);H(H(V(e,c),C(339)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Ye(b,e);return 1;}
var YV=G();
function AO3(a){return null;}
function Y0(){B.call(this);this.ty=null;}
function ATh(a){var b,c;b=a.ty;c=new ZW;c.ox=b;return c;}
function TH(){B.call(this);this.Az=null;}
function AUU(a,b){return 0;}
function Z8(){B.call(this);this.zD=null;}
function AKn(a,b){return b.ii&&b.bl==32?1:0;}
function Z$(){B.call(this);this.rY=null;}
function AIy(a,b){var c,d,e,f,g,h;b=b;c=a.rY;if(!DD(c.hY)){d=c.hY;b=b.i;e=R(C$,1);f=e.data;g=new C$;h=new OS;h.od=c;Ml(g,h,C(324),d.io.bg);f[0]=g;GF(d,b,Gb(e),A0O);}return 1;}
function Z9(){B.call(this);this.vJ=null;}
function ASm(a,b,c,d){return LL(a.vJ,b,c,d);}
function AFX(){var a=this;B.call(a);a.jn=null;a.ll=null;a.f9=null;a.Am=null;}
function ARD(a){var b=new AFX();ASP(b,a);return b;}
function AWI(a,b,c,d){var e=new AFX();AA0(e,a,b,c,d);return e;}
function ASP(a,b){AA0(a,null,null,b,null);}
function AA0(a,b,c,d,e){a.jn=b;a.ll=c;a.f9=d;a.Am=e;}
function AKy(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BW(a.jn,c.jn)&&BW(a.ll,c.ll)&&BW(a.f9,c.f9)?1:0;}return 0;}
var Db=G(0);
var AZ4=null;var A1p=null;var AZ6=null;var AZ5=null;var AZ8=null;var AZ7=null;var AZ$=null;var AZ9=null;var A0a=null;var AZ_=null;var A0b=null;function ALP(){ALP=Bq(Db);ATz();}
function ATz(){AZ4=CQ(206);A1p=S(C(340));AZ6=S(C(341));AZ5=S(C(113));AZ8=S(C(342));AZ7=S(C(343));AZ$=S(C(344));AZ9=S(C(345));A0a=FG(107,106,107,128);AZ_=FG(30,31,34,0);A0b=S(C(115));}
function Cj(){Co.call(this);this.kY=null;}
var A1q=null;var A1r=null;var A1s=null;var A1t=null;var A1u=null;var A1v=null;var A1w=null;var A1x=null;var A1y=null;var A1z=null;var A1A=null;var A1B=null;var A1C=null;var A1D=null;var A1E=null;var A0c=null;function AFC(){AFC=Bq(Cj);AOC();}
function D1(a,b,c){var d=new Cj();Ty(d,a,b,c);return d;}
function AW3(a,b,c,d){var e=new Cj();Zf(e,a,b,c,d);return e;}
function Ty(a,b,c,d){AFC();Dd(a,b,c);a.kY=Ix(d,null);}
function Zf(a,b,c,d,e){AFC();Dd(a,b,c);a.kY=Ix(d,e);}
function AOC(){var b,c;b=new Cj;ALP();Ty(b,C(346),0,A1p);A1q=b;A1r=D1(C(347),1,S(C(348)));A1s=D1(C(349),2,S(C(350)));A1t=D1(C(48),3,S(C(351)));A1u=D1(C(352),4,A1p);A1v=D1(C(353),5,S(C(354)));A1w=D1(C(355),6,S(C(356)));A1x=D1(C(49),7,S(C(357)));A1y=D1(C(358),8,S(C(359)));c=new Cj;F0();Zf(c,C(360),9,A0D,S(C(344)));A1z=c;A1A=AW3(C(361),10,A0D,S(C(116)));A1B=D1(C(362),11,S(C(363)));A1C=D1(C(364),12,S(C(365)));A1D=D1(C(366),13,A1p);b=D1(C(367),14,S(C(368)));A1E=b;A0c=I(Cj,[A1q,A1r,A1s,A1t,A1u,A1v,A1w,A1x,A1y,A1z,
A1A,A1B,A1C,A1D,b]);}
function JB(){var a=this;B.call(a);a.pB=null;a.pz=null;}
function Ix(a,b){var c=new JB();APv(c,a,b);return c;}
function APv(a,b,c){a.pB=b;a.pz=c;}
function IQ(){var a=this;B.call(a);a.js=null;a.iO=null;a.w5=null;a.wS=null;a.bg=null;a.ls=null;a.k7=null;}
function A1F(a,b,c,d,e,f,g){var h=new IQ();Mh(h,a,b,c,d,e,f,g);return h;}
function Mh(a,b,c,d,e,f,g,h){a.w5=b;a.wS=c;a.iO=d;a.bg=e;a.js=f;a.ls=g;a.k7=h;}
function AEg(){var a=this;B.call(a);a.m6=null;a.si=0;}
function AAF(a,b){var c=new AEg();AS3(c,a,b);return c;}
function AS3(a,b,c){var d;d=new B_;a.m6=d;a.si=b;d.bO=c;}
function QT(a,b){return Cd(a.si,b);}
var DQ=G(0);
var A0g=null;var A0h=null;var A0d=null;var A0e=null;var A0f=null;var A1j=null;var A1k=null;var A0i=null;var A0j=null;function AIm(){AIm=Bq(DQ);AQ2();}
function AQ2(){A0g=S(C(343));A0h=S(C(369));A0d=S(C(118));A0e=S(C(356));A0f=S(C(340));A1j=S(C(343));A1k=S(C(370));A0i=S(C(371));A0j=CR(43,45,48);}
var Qs=G(0);
var QO=G();
function AMg(a,b,c){var d,e;d=b;e=c;b=new M;O(b);V(H(V(H(b,C(372)),d),C(373)),e);CJ(N(b));return d+e|0;}
var Qt=G(0);
var QM=G();
function ANo(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fx(H(Fx(H(b,C(374)),d),C(373)),e);CJ(N(b));return d+e;}
var ACc=G();
var AAY=G(0);
function J_(){var a=this;B.call(a);a.eu=null;a.fA=null;a.f7=null;}
var AZH=0;function AE_(a){var b;b=a.fA;if(b!==null){AZH=AZH-1|0;a.eu.dR.deleteTexture(b);a.fA=null;}}
function BT(a){return a.f7.b;}
function Da(a){return a.f7.a;}
function Vg(a,b,c,d){var e;e=a.f7;e.b=b;e.a=c;MM(a);a.eu.dR.texStorage2D(3553,1,d,b,c);e=a.eu.dR;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function MM(a){var b,c;b=a.eu.dR;c=a.fA;b.bindTexture(3553,c);}
function CS(a,b){Ok(a,b.m0,b.l7,32856);RI(a,b,0,0);}
function Ok(a,b,c,d){var e,f,g,h;a:{e=a.f7;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){MM(a);break a;}e=a.eu.dR;h=a.fA;e.deleteTexture(h);a.fA=a.eu.dR.createTexture();Vg(a,b,c,d);break a;}}Vg(a,b,c,d);}}
function Iz(a,b,c,d){MM(a);RI(a,b,c,d);}
function RI(a,b,c,d){var e;e=a.eu.dR;b=b.kF;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function YN(){B.call(this);this.nx=null;}
var A1o=null;function U6(){var a=new YN();AB0(a);return a;}
function AB0(a){a.nx=BH();}
function D3(a,b,c,d){Qn(a,AFi(d,b,c));}
function DL(b,c,d){return AFi(d,b,c);}
function GP(a,b,c,d){Kp(a,b,c,d,null);}
function Kp(a,b,c,d,e){Qn(a,AXP(null,b,c,d,e));}
function Qn(a,b){BC(a.nx,b);}
function II(a){return Gb(Ie(a.nx,A1o));}
function AA3(){A1o=R(C$,0);}
var DU=G(0);
var A1f=null;var A1g=null;var A1c=null;var A1d=null;var A1e=null;var A0$=null;var A0_=null;var A1h=null;var A1i=null;function AEx(){AEx=Bq(DU);AQq();}
function AQq(){A1f=S(C(375));A1g=S(C(376));A1c=S(C(289));A1d=S(C(377));A1e=S(C(336));A0$=S(C(375));A0_=S(C(376));A1h=FG(118,121,122,128);A1i=CR(63,66,68);}
var G_=G(0);
var P1=G();
function AR6(a,b,c,d){var e;b=BA();e=new M;O(e);H(H(V(H(e,C(378)),c),C(320)),d);Bt(b,N(e));}
var P2=G();
function Tw(){B.call(this);this.iy=null;}
function AVE(a,b){return LC(a.iy,b);}
function ARq(a,b,c,d){return Kz(a.iy,b,c,d);}
function AVq(a,b,c){return M4(a.iy,b,c);}
function APm(a,b,c){return DD(a.iy);}
function WG(){B.call(this);this.tX=null;}
function AQc(a,b){var c;c=a.tX.jB;c.et=Fq(b,XZ(c));}
var AHl=G();
function X4(){B.call(this);this.sR=null;}
function ANp(a,b){var c;c=a.sR.jP;c.e0=Fq(b,TL(c));}
function WV(){B.call(this);this.z5=null;}
function AMW(a,b){return 0;}
function Uk(){B.call(this);this.u$=null;}
function AVm(a,b){return DE(a.u$,null);}
var ACf=G();
function I5(){var a=this;B.call(a);a.tW=null;a.o2=null;a.p5=null;a.uX=null;a.rE=null;a.i1=null;}
function A1G(a,b,c,d,e,f){var g=new I5();M_(g,a,b,c,d,e,f);return g;}
function M_(a,b,c,d,e,f,g){a.tW=b;a.o2=c;a.p5=d;a.uX=e;a.rE=f;a.i1=g;}
function HG(){var a=this;B.call(a);a.lw=null;a.ia=null;a.uS=null;}
function A1H(a,b,c){var d=new HG();Il(d,a,b,c);return d;}
function Il(a,b,c,d){a.lw=b;a.ia=c;a.uS=d;}
function ABM(){var a=this;B.call(a);a.me=null;a.tB=null;a.we=null;}
function AG3(a,b,c){var d=new ABM();AUn(d,a,b,c);return d;}
function AUn(a,b,c,d){a.me=b;a.tB=c;a.we=d;}
function Ck(){Co.call(this);this.m2=null;}
var A1I=null;var A1J=null;var A1K=null;var A1L=null;var A1M=null;var A1N=null;var A1O=null;var A1P=null;var A1Q=null;var A1R=null;var A1S=null;var A1T=null;var A1U=null;var A1V=null;var A1W=null;var A09=null;function ACF(){ACF=Bq(Ck);ANz();}
function D0(a,b,c){var d=new Ck();Vl(d,a,b,c);return d;}
function AS7(a,b,c,d){var e=new Ck();AGm(e,a,b,c,d);return e;}
function Vl(a,b,c,d){ACF();Dd(a,b,c);a.m2=Ix(d,null);}
function AGm(a,b,c,d,e){ACF();Dd(a,b,c);a.m2=Ix(d,e);}
function ANz(){var b;b=new Ck;F0();Vl(b,C(346),0,A0D);A1I=b;A1J=D0(C(347),1,S(C(379)));A1K=D0(C(349),2,S(C(380)));A1L=D0(C(48),3,S(C(381)));A1M=D0(C(352),4,S(C(379)));A1N=D0(C(353),5,CR(188,63,60));A1O=D0(C(355),6,S(C(382)));A1P=D0(C(49),7,S(C(383)));A1Q=D0(C(358),8,S(C(384)));A1R=AS7(C(360),9,A0D,CR(52,65,52));A1S=AS7(C(361),10,S(C(385)),S(C(386)));A1T=D0(C(362),11,S(C(387)));A1U=D0(C(364),12,S(C(388)));A1V=D0(C(366),13,A0D);b=D0(C(367),14,S(C(368)));A1W=b;A09=I(Ck,[A1I,A1J,A1K,A1L,A1M,A1N,A1O,A1P,A1Q,A1R,
A1S,A1T,A1U,A1V,b]);}
var AGR=G();
function Ja(b,c){var d,e,f;if(c<=0)return C(30);d=BV(c);e=d.data;e[0]=AFy(IZ(b,52));f=1;while(f<c){e[f]=AFy(IZ(b,62));f=f+1|0;}return Gf(d);}
function AFy(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var ADa=G();
function AHk(){var a=this;B.call(a);a.HN=null;a.E9=null;a.Gt=0;a.FX=0;}
var ABQ=G(0);
function ADt(b){var c;a:{switch(b){case 0:break;case 1:c=C(169);break a;case 2:c=C(224);break a;case 3:c=C(223);break a;default:c=null;break a;}c=C(191);}return c;}
var CW=G();
var AEK=G(CW);
var AFw=G(CW);
var ACg=G(CW);
var ACA=G(CW);
var AF1=G(CW);
function Y3(){B.call(this);this.qE=null;}
function ANO(a){var b;b=a.qE;Bt(BA(),b);}
var ABC=G();
function Cd(b,c){return Dl(b*c);}
function ID(){var a=this;B.call(a);a.gx=0;a.mr=null;}
function W$(){var a=this;B.call(a);a.AD=null;a.wx=null;a.gt=null;}
function Gr(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.gt.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bb(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.it:i.iu;k=!c?i.np:i.nq;if(j<=k&&k<(j+k|0))return h;j=BG(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function My(){var a=this;B.call(a);a.iu=0;a.nq=0;a.it=0;a.np=0;a.lf=0;}
var AC0=G();
function PF(){B.call(this);this.jr=null;}
function AV8(a,b){var c,d,e,f,g;c=a.jr;d=c.kM;if(d!==null){e=b.i;f=e.b-d.b|0;g=e.a-d.a|0;e=c.jC;e.b=EH(0,e.b+f|0,c.hk.b-c.im.b|0);c=a.jr;d=c.jC;d.a=EH(0,d.a+g|0,c.hk.a-c.im.a|0);}a.jr.kM=b.i;return 1;}
var AC9=G();
function Te(){B.call(this);this.uf=null;}
function AJk(a,b){IP(a.uf,b);}
function XW(){B.call(this);this.jJ=null;}
function AVy(a){return a.jJ;}
function AFq(){var a=this;B.call(a);a.bE=null;a.T=null;a.S=null;a.e_=null;}
function AAZ(a){var b=new AFq();AQN(b,a);return b;}
function AQN(a,b){var c;a.S=AWd();a.bE=b;c=new Xt;Mm(c);c.k5=new B_;c.hN=b;a.T=c;}
function Ir(a,b,c,d){var e,f,g,h;e=a.T;f=BW(e.hs,c)?0:1;g=BW(e.hw,b)?0:1;h=d===e.j6?0:1;if(f){e.hs=c;e.eI=null;Q4(e,0);}e.hT=!f&&!g&&!h?0:1;e.hw=b;e.j6=d;e.hx=0;J9(a);}
function LS(a){var b;b=a.T;b.dH=CK(b.dH,null);a.S=CK(a.S,null);}
function K2(a,b){var c,d,e;c=a.S;d=c.G;e=c.r;b=CK(c,b);a.S=b;b.jZ(d,e,a.bE.b4);}
function FI(a,b,c){var d;d=a.S;d.jZ(b,c,d.el);J9(a);}
function J9(a){var b,c,d,e;b=a.T;c=a.S.r.b;b.r.b=c;d=b.dH;if(d!==null&&c!=BT(d)&&!(c>=b.hx&&BT(b.dH)>=b.hx))b.hT=1;b=a.T;b.el=a.bE.b4;if(Yq(b))c=0;else{b=a.T;W5(b);e=CF(b.hN,b.j6);Q4(b,Fj(b.eI)+(e*2|0)|0);c=b.r.a;}b=a.T.G;d=a.S.G;U(b,d.b,d.a-c|0);}
function Mw(b,c){if(b<0)c=C(389);else if(b>0)c=C(390);return c;}
function AAj(a,b,c){var d;d=a.T.G.b;return (d-c|0)<=b&&b<d?1:0;}
function N1(a,b,c){var d,e;d=a.T;e=d.G.b+d.r.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Q2(a,b,c){var d;d=a.T.G.a;return (d-c|0)<=b&&b<d?1:0;}
function OW(a,b,c){var d,e;d=a.S;e=d.G.a+d.r.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Yw(a,b,c){var d,e,f;d=a.T.G.a-c|0;e=a.S;f=(e.G.a+e.r.a|0)+c|0;return d<=b&&b<f?1:0;}
function Y$(a,b,c){var d,e;d=a.T.G.a+c|0;e=a.S;return ADC(b,d,(e.G.a+e.r.a|0)-c|0);}
function PB(a,b,c){var d,e,f;d=a.T;e=d.G.b;f=e-c|0;e=(e+d.r.b|0)+c|0;return f<=b&&b<e?1:0;}
function O3(a,b,c){var d,e;d=a.T;e=d.G.b;return ADC(b,e+c|0,(e+d.r.b|0)-c|0);}
function ADC(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BG(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function I8(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bf;f=new Bf;g=b.b;h=b.a;b=a.S;i=b.G;j=i.b;k=i.a;b=b.r;l=b.b;m=b.a;b=new X1;b.uO=a;b.uQ=e;b.uP=f;b.uK=c;b.uJ=g;b.uN=j;b.uL=l;b.uZ=d;b.uY=h;b.u0=k;b.vA=m;return b;}
var AEG=G(0);
var Mi=G(0);
function R4(){B.call(this);this.uk=null;}
function AJ3(a,b){return SS(a.uk,b);}
var Yn=G();
function AP0(a,b){AE_(b);}
var AFj=G();
function ACv(b,c,d,e,f,g){g.b=c.b;g.a=f;Bx(b,d.b,d.a,g,e);Bx(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bx(b,d.b,d.a+f|0,g,e);Bx(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AET(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bx(b,j,k,i,h);Bx(b,j,k,i,h);Bx(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bx(b,l,j,i,h);Bx(b,l,j,i,h);Bx(b,l+g|0,j+g|0,i,h);}
function Ry(){var a=this;B.call(a);a.bu=null;a.ks=null;a.ff=null;a.d$=0;a.O=0;a.dW=null;a.eP=null;a.ha=0;}
function ON(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d$;i=W(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}EI(c);j=d+(-1)|0;b=C8(d);d=W(j,a.O)%a.ff.a|0;GB(a,c,b,a.ha,g);Iz(a.bu,c,0,d);if(!(j%a.d$|0))break;d=j;}}else{EI(b);k=a.d$-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GB(a,b,C8(j),W(a.O,k)+a.ha|0,g);k=k+(-1)|0;j=h;}CS(a.bu,b);j=Bd(i,e);}return j;}k=a.d$;h=W(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bb(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EI(c);b=C8((d+f|0)+1|0);j=d+1|0;d
=W(d,a.O)%a.ff.a|0;GB(a,c,b,a.ha,g);Iz(a.bu,c,0,d);if(!(j%a.d$|0))break;d=j;}}else{EI(b);d=0;while(d<a.d$){h=h+1|0;GB(a,b,C8((h>e?h-f|0:h)+f|0),W(a.O,d)+a.ha|0,g);d=d+1|0;}CS(a.bu,b);j=Bb(i,e);}return j;}
function MK(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Gc(e,b,c,f)!==f.hi?0:1;}
function Gc(b,c,d,e){c=c.data;return d<c.length&&c[d]?I1(b.dY,b,c[d]):e.hi;}
function EV(a,b,c,d,e,f){E1(b,a.ks.b+d.b|0,c+d.a|0,a.dW,a.eP,a.bu,e,f,0.0);}
function GB(a,b,c,d,e){Ch(b,c,a.ff.b-20.0*e,d);}
function Zy(){var a=this;B.call(a);a.ez=null;a.o4=null;a.rx=null;a.A2=null;a.bQ=null;a.mp=null;a.mx=null;a.fs=null;a.f$=null;a.h7=null;}
function S6(a,b){var c,d,e,f,g,h;if(X5(a.f$,b))MN(a.f$,b);else{c=a.f$;d=Dh(c.f0);if(b===null){e=Sd(c);if(e===null){c.kf=c.kf+1|0;e=X8(c,null,0,0);f=c.f0+1|0;c.f0=f;if(f>c.mt)OA(c);}}else{g=JM(b);h=g&(c.dS.data.length-1|0);e=OM(c,b,h,g);if(e===null){c.kf=c.kf+1|0;e=X8(c,b,h,g);f=c.f0+1|0;c.f0=f;if(f>c.mt)OA(c);}}e.cZ=d;}b=b.b6;if(b===null)return;c=new Z6;c.qJ=a;b.ep(c);}
function AD9(a){var b,c,d,e,f;b=T1(KE(a.ez.dm));while(Fl(b)){c=QE(b);d=Cl(a.ez.dm,c);Bs(a.bQ,d.j);c=BZ(d);while(B1(c)){e=B3(c);f=Cl(a.fs,e);Bs(a.bQ,f.bF);}}}
function ADe(a){if(a.ez.eU===null){Bs(a.bQ,(-1));return;}Bs(a.bQ,a.f$.f0);T7(a,a.ez.eU);}
function T7(a,b){var c,d,e,f;c=(MN(a.f$,b)).bF;Bs(a.bQ,c);if(b instanceof Lu)Bs(a.bQ,(-1));else if(!(b instanceof Iy))Bs(a.bQ,0);else Bs(a.bQ,1);d=a.mp;Bs(d.dI,b.dw.cW());e=b.dw;f=new Nf;f.w9=d;e.ep(f);d=a.mx;Bs(d.cR,b.eg.cW());e=b.eg;f=new WY;f.uE=d;e.ep(f);d=b.hF;Bs(a.bQ,d.cW());e=new Yd;e.vD=a;d.ep(e);d=b.e7;Bs(a.bQ,d.cW());d=d.br();while(d.bz()){e=d.bn();On(a.mp,e.e1);Ho(a.mx,e.il);Bs(a.bQ,e.lu);}d=b.j9;if(d===null)Bs(a.bQ,(-1));else Bs(a.bQ,(Cl(a.fs,d)).bF);b=b.b6;Bs(a.bQ,b.cW());d=new Qr;d.oc=a;b.ep(d);}
function Z1(){B.call(this);this.qb=null;}
function ALz(a,b){var c,d,e,f,g;c=a.qb;if(c.e.f.cL==c.lO){b=b.data;d=Dy(b[0]);e=EF(b[1]);f=null;g=null;if(b.length>=4){f=Dy(b[2]);g=EF(b[3]);}AAN(c.e.f,d,e,f,g);EZ(c.e.f.c_);EZ(c.e.f.dn);Rc(c.e.f);Ik(c);Ka(c.e.f);AAl(c);}}
var AAW=G();
function Gw(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function ABL(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function AGc(){var a=this;B.call(a);a.bm=0;a.bw=0;}
function Du(a,b){var c=new AGc();AOu(c,a,b);return c;}
function AOu(a,b,c){a.bm=b;a.bw=c;}
function AIh(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.bm==c.bm&&a.bw==c.bw?1:0;}return 0;}
function ARW(a){var b,c,d,e;b=R(B,2).data;b[0]=Dh(a.bm);b[1]=Dh(a.bw);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bF)|0;d=d+1|0;}return c;}
function ARv(a,b){var c;b=b;c=BG(a.bm,b.bm);if(!c)c=BG(a.bw,b.bw);return c;}
function Zq(){B.call(this);this.vM=null;}
function AH2(a,b){var c;c=a.vM;ZX(c,EY(c,b.i));L$(c.q,c.u,c.y);Hr(c);}
var T4=G(0);
var A0N=null;function AE8(){A0N=new Sm;}
var E$=G(0);
function OO(){var a=this;B.call(a);a.ix=0;a.nr=0;a.jt=0;a.gP=0;a.hu=null;}
function B1(a){return a.ix>=a.jt?0:1;}
function B3(a){var b,c;QU(a);b=a.ix;a.gP=b;c=a.hu;a.ix=b+1|0;return c.jU(b);}
function SR(a){var b,c,d;if(a.gP<0){b=new CL;Y(b);K(b);}QU(a);a.hu.nu(a.gP);a.nr=a.hu.cG;c=a.gP;d=a.ix;if(c<d)a.ix=d-1|0;a.jt=a.jt-1|0;a.gP=(-1);}
function QU(a){var b;if(a.nr>=a.hu.cG)return;b=new Hu;Y(b);K(b);}
var F9=G(I9);
var Zn=G(E0);
function AF8(){var a=this;B.call(a);a.hH=null;a.mu=0;a.fG=0;}
function AJJ(){var a=new AF8();AVB(a);return a;}
function AVB(a){a.mu=0;a.hH=BM(16);a.fG=0;}
function G1(a,b,c){Bs(a,b);Bs(a,c);}
function Bs(a,b){var c,d;c=a.hH;d=c.data.length;if(d==a.fG)a.hH=M0(c,d*2|0);c=a.hH.data;d=a.fG;a.fG=d+1|0;c[d]=b;}
function RR(a){var b,c,d,e,f;b=a.mu;if(b&&a.fG!=b){c=Fb();b=a.mu;d=a.fG;e=new M;O(e);H(V(H(V(H(e,C(391)),b),C(392)),d),C(393));Bt(c,N(e));}f=a.hH;b=f.data.length;d=a.fG;if(b!=d)f=M0(f,d);return f;}
function Uo(){var a=this;D5.call(a);a.f0=0;a.dS=null;a.kf=0;a.p4=0.0;a.mt=0;}
function AGk(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function XF(a){a.mt=a.dS.data.length*a.p4|0;}
function X5(a,b){return ZY(a,b)===null?0:1;}
function MN(a,b){var c;c=ZY(a,b);if(c===null)return null;return c.cZ;}
function ZY(a,b){var c,d;if(b===null)c=Sd(a);else{d=JM(b);c=OM(a,b,d&(a.dS.data.length-1|0),d);}return c;}
function OM(a,b,c,d){var e;e=a.dS.data[c];while(e!==null&&!(e.mq==d&&(b!==e.cJ?0:1))){e=e.hB;}return e;}
function Sd(a){var b;b=a.dS.data[0];while(b!==null&&b.cJ!==null){b=b.hB;}return b;}
function X8(a,b,c,d){var e,f;e=new Ib;AAh(e,b,null);e.mq=d;f=a.dS.data;e.hB=f[c];f[c]=e;return e;}
function OA(a){var b,c,d,e,f,g,h,i;b=a.dS.data.length;b=AGk(!b?1:b<<1);c=R(Ib,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dS.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.mq&f;i=h.hB;h.hB=d[b];d[b]=h;h=i;}e=e+1|0;}a.dS=c;XF(a);}
function XT(){var a=this;B.call(a);a.dI=null;a.kL=null;a.rU=null;}
function On(a,b){var c;if(!(b instanceof F6)){Bs(a.dI,3);Y_(a,b);Bs(a.dI,b.gC);}else{c=b;Bs(a.dI,5);Y_(a,c);Bs(a.dI,c.kO);b=c.gc;Bs(a.dI,b.j);c=new Oa;c.pb=a;D9(b,c);}}
function Y_(a,b){var c;c=b.db.fN;G1(a.dI,a.kL.J,J(c));Bs(a.dI,b.db.cy);Nr(a,b.eK);BU(a.kL,c);}
function Nr(a,b){if(b===null)Bs(a.dI,(-1));else Bs(a.dI,(Cl(a.rU,b)).bF);}
function Xw(){var a=this;B.call(a);a.cR=null;a.lY=null;a.qI=null;}
function Ho(a,b){var c,d,e;if(b instanceof Fu){c=b;Bs(a.cR,9);RD(a,c.ke);}else if(b instanceof EC){d=b;Bs(a.cR,3);Sh(a,d);Bs(a.cR,d.ho);RD(a,d.fv);}else if(b instanceof EK){e=b;Bs(a.cR,4);Ho(a,e.eF);Ho(a,e.gj);}else if(b===null)Bs(a.cR,(-1));else{Bs(a.cR,5);Sh(a,b);Bs(a.cR,b.jY);}}
function Sh(a,b){var c;c=b.dM.fN;G1(a.cR,a.lY.J,J(c));Bs(a.cR,b.dM.cy);b=b.dk;if(b===null)Bs(a.cR,(-1));else Bs(a.cR,(Cl(a.qI,b)).bF);BU(a.lY,c);}
function RD(a,b){var c;Bs(a.cR,b.j);c=new AAo;c.pi=a;D9(b,c);}
function Xj(){B.call(this);this.pG=null;}
function AUB(a,b){var c,d;c=a.pG;d=c.d8+1|0;c.d8=d;c=new M;O(c);H(H(V(c,d),C(394)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Z2(){B.call(this);this.p0=null;}
function ASy(a){var b,c;b=a.p0;c=new M;O(c);H(H(H(c,C(395)),b),C(396));$rt_globals.console.info($rt_ustr(N(c)));}
var ZD=G(D7);
var A1X=null;function AE$(){A1X=F($rt_floatcls());}
var FO=G();
var A1Y=null;var A1Z=null;var AZi=null;var AZh=null;var AZg=null;function ADT(){A1Y=Em([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A1Z=ABU([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);AZi=ABU([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);AZh=new VN;AZg=new Xc;}
var Id=G();
var A10=0;var A11=null;var A12=null;function AEz(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.pj=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.lI=0;c.lp=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Ia(C0(Bp(d),Bp(8388608)),Fa)){d=d<<1;f=f+(-1)|0;}}g=AEJ(A12,f);if(g<0)g= -g|0;h=A12.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=H9(d,A11.data[e],i);if(j<A10){while($rt_ucmp(j,A10)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A12.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=H9(d,
A11.data[e],i);}e=d<<1;d=e+1|0;h=A11.data;f=g+1|0;k=h[f];l=i-1|0;m=H9(d,k,l);n=H9(e-1|0,A11.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?W($rt_udiv(j,o),o):q<0?W($rt_udiv(j,k),k)+k|0:W($rt_udiv((j+(k/2|0)|0),k),k);if(Dt(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.lI=d;c.lp=g-50|0;}
function H9(b,c,d){return GD(F2(Cb(C0(Bp(b),D(4294967295, 0)),C0(Bp(c),D(4294967295, 0))),32-d|0));}
function ACR(){A10=$rt_udiv((-1),10);A11=Em([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A12=Em([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Xc(){var a=this;B.call(a);a.lI=0;a.lp=0;a.pj=0;}
function MP(){var a=this;B.call(a);a.yI=null;a.nW=0.0;a.y_=0.0;a.fF=null;a.hE=null;a.m3=null;a.fM=0;}
function AGx(a,b){var c;if(b!==null){a.hE=b;return a;}c=new BE;Bi(c,C(397));K(c);}
function AEP(a,b){var c;if(b!==null){a.m3=b;return a;}c=new BE;Bi(c,C(397));K(c);}
function R3(a,b,c,d){var e,f,g,$$je;e=a.fM;if(!(e==2&&!d)&&e!=3){a.fM=d?2:1;while(true){try{f=AGz(a,b,c);}catch($$e){$$je=Er($$e);if($$je instanceof Bu){g=$$je;K(AKN(g));}else{throw $$e;}}if(HA(f))return f;if(IU(f)){if(d&&DV(b)){g=a.hE;HD();if(g===AZQ)return Ed(Cc(b));if(Cc(c)<=J(a.fF))return AZT;EW(b,b.Z+Cc(b)|0);if(a.hE===AZR)KR(c,a.fF);}return f;}if(SD(f)){g=a.hE;HD();if(g===AZQ)return f;if(g===AZR){if(Cc(c)<J(a.fF))return AZT;KR(c,a.fF);}EW(b,b.Z+KU(f)|0);}else if(MO(f)){g=a.m3;HD();if(g===AZQ)break;if(g
===AZR){if(Cc(c)<J(a.fF))return AZT;KR(c,a.fF);}EW(b,b.Z+KU(f)|0);}}return f;}b=new CL;Y(b);K(b);}
function ABZ(a,b){var c,d,e,f;c=a.fM;if(c&&c!=3){b=new CL;Y(b);K(b);}if(!Cc(b))return AG$(0);if(a.fM)a.fM=0;d=AG$(Bd(8,Cc(b)*a.nW|0));while(true){e=R3(a,b,d,0);if(IU(e))break;if(HA(e))d=Uh(a,d);if(!Lm(e))continue;Xa(e);}b=R3(a,b,d,1);if(Lm(b))Xa(b);while(true){f=a.fM;if(f!=3&&f!=2)break;a.fM=3;if(IU(AZU)){d.dU=d.Z;d.Z=0;d.h$=(-1);return d;}d=Uh(a,d);}b=new CL;Y(b);K(b);}
function Uh(a,b){var c,d,e;c=b.h2;d=OV(c,Bd(8,c.data.length*2|0));e=AD3(d,0,d.data.length);EW(e,b.Z);return e;}
var ADy=G(CW);
function Pr(){B.call(this);this.o5=null;}
function AJq(a,b){Dv(a.o5,b);}
function R1(){B.call(this);this.xs=null;}
function AI8(a,b){var c,d;c=a.xs;d=c.d8+1|0;c.d8=d;c=b.ie;b=new M;O(b);H(H(V(b,d),C(398)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Sm=G();
function APU(a,b){}
function Fc(){var a=this;B.call(a);a.G=null;a.r=null;a.el=0.0;}
function AWd(){var a=new Fc();Mm(a);return a;}
function Mm(a){a.G=new Bf;a.r=new Bf;}
function AR0(a){}
function AP7(a){return B$(0,0);}
function S9(a,b,c,d){var e;if(!LN(a.G,b)){a.ln(b);Cx(a.G,b);}if(!LN(a.r,c)){a.lg(c);Cx(a.r,c);}e=a.el;if(e!==d){a.el=d;a.ro(e,d);}}
function DN(a,b){return Gw(b,a.G,a.r);}
function AGG(a,b){var c,d,e,f;c=a.G;d=c.b;e=c.a;f=a.r;AXa();Bx(b,d,e,f,A13);}
function Xp(a,b){var c;c=a.G;Mg(b,c.b,c.a,a.r);}
function AJ2(a,b){return 0;}
function AOP(a,b){}
function AUZ(a,b){}
function ASc(a,b,c){}
function AM9(a,b,c,d){return 0;}
function AJQ(a,b,c){return null;}
function APD(a,b,c){return 0;}
function AUC(a,b){return 0;}
function ARV(a,b,c,d){return 0;}
function Gi(){var a=this;Fc.call(a);a.c1=null;a.bG=null;a.gg=null;}
function A14(){var a=new Gi();Ws(a);return a;}
function Ws(a){Mm(a);a.c1=new Bf;a.bG=new Bf;}
function AMs(a,b){a.gg=b;}
function ADx(a){var b;b=a.bG;b.b=J5(a,b.b);b=a.bG;b.a=MA(a,b.a);}
function W6(a,b){a.bG.b=J5(a,b);}
function AAw(a,b){a.bG.a=MA(a,b);}
function AG_(a,b,c){a.bG.b=J5(a,b);a.bG.a=MA(a,c);}
function MA(a,b){return Bd(0,Bb(b,a.c1.a-a.r.a|0));}
function J5(a,b){return Bd(0,Bb(b,a.c1.b-a.r.b|0));}
function Sg(){var a=this;Gi.call(a);a.cx=null;a.d0=null;a.hg=null;a.vi=null;a.ef=null;a.ce=null;a.eo=null;a.fT=null;a.dv=0;a.fd=0;a.xw=null;a.dT=0;a.eD=0;a.gr=0;a.fI=0;a.fu=0;a.cN=0;a.eq=null;a.jc=null;a.rS=null;a.hP=null;}
function AYl(a,b){var c=new Sg();AGt(c,a,b);return c;}
function AGt(a,b,c){Ws(a);a.d0=TY();a.hg=new Bf;a.ce=A15;a.eo=R(I7,0);a.dT=0;a.eD=0;a.gr=0;a.fI=0;a.fu=0;a.eq=ABn(0);a.hP=IM();a.cx=b;a.jc=c;a.xw=c;QV(a);}
function QV(a){a.dv=Cd(2.0,a.cx.b4);}
function ZB(a){return a.ce.data.length?0:1;}
function OL(a,b){VD(a);a.ce=b;}
function VD(a){U(a.hg,0,0);}
function AAt(a,b,c){a.rS=b;a.vi=c;a.ef=null;a.eq=null;a.fd=0;VD(a);}
function AUz(a){a.fT=CK(a.fT,null);U(a.hg,0,0);EZ(a.hP);a.eq=null;a.ce=A15;a.eo=null;a.dT=0;a.eD=0;a.gr=0;U9(a.d0);a.jc=null;}
function AK9(a,b,c){Re(a);QV(a);a.ef=null;a.eq=null;a.fd=0;}
function AIp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=Jr(a.cx);if(ZB(a))return;KF(a);CC(c,a.ef);d=Ec(a);e=AAS(c,a.fd);f=Bb(Jh(a.r.a,d),a.ce.data.length)+30|0;g=a.rS.w5;h=a.eo.data;i=h.length;if(i<f){a:{j=a.fI;k=a.fu;l=a.ce;m=a.eq;n=a.hP;o=R(I7,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gm!==q){XR(m,t,n);p[r]=J4(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=J4(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=J4(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){XR(m,q,n);h[j]=null;}j=j+1|0;}a.eo=o;Cx(a.hg,J3(a.eq));RB(a,a.cx.c7);}a.fI=Bb((a.bG.a+a.dv|0)/(Ec(a)+a.dv|0)|0,a.ce.data.length-1|0);a.fu=Bb((((a.bG.a+a.d0.s.a|0)-1|0)+a.dv|0)/(Ec(a)+a.dv|0)|0,a.ce.data.length-1|0);if(!a.eo.data.length)return;AAI(a,e);Xp(a,b);t=g.uX;m=a.G;Bx(b,m.b,m.a,a.r,t);m=a.d0.A;u=m.b;v=m.a;w=CF(a.cx,2.0);m=a.cx.dK;x=a.fI;j=u+w|0;while(x<=a.fu){n=Qp(a,x);k=W(x,Ec(a));i=x
+1|0;y=k+W(i,a.dv)|0;k=j+a.dT|0;r=k+a.eD|0;z=a.cN!=x?0:1;ba=!z?t:g.rE;q=!z?g.tW:g.i1;bb=!z?g.o2:g.i1;bc=!z?g.p5:g.i1;bd=(v+y|0)-a.bG.a|0;E1(b,j,bd,n.hO,n.sQ,a.fT,q,ba,0.0);E1(b,k,bd,n.iA,n.iW,a.fT,bb,ba,0.0);E1(b,r,bd,n.hQ,n.j8,a.fT,bc,ba,0.0);k=n.hO.b;s=j+k|0;U(m,Bd(0,a.dT-k|0),n.hO.a);Bx(b,s,bd,m,ba);k=j+a.dT|0;s=n.iA.b;be=k+s|0;U(m,Bd(0,a.eD-s|0),n.iA.a);Bx(b,be,bd,m,ba);k=n.hQ.b;bf=r+k|0;U(m,Bd(0,(((a.d0.s.b-k|0)-a.eD|0)-a.dT|0)-w|0),n.hQ.a);Bx(b,bf,bd,m,ba);bg=(u+a.r.b|0)-w|0;U(m,w,Ec(a)+a.dv|0);Bx(b,bg,
bd,m,t);x=i;}Hq(b);}
function AAI(a,b){var c,d,e,f,g,h;c=0;d=a.fI;while(d<=a.fu){e=Qp(a,d);if(!(e!==null&&e.gm===a.ce.data[d])){f=a.eo.data;g=a.ce;e=a.eq;h=a.hP;c=d%f.length|0;if(f[c]!==null)XR(e,f[c],h);f[c]=J4(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cx(a.hg,J3(a.eq));RB(a,a.cx.c7);}}
function RB(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.hg;c=CO(b,c.b+150|0,c.a);CC(c,a.ef);d=a.ef;e=d.dx;f=e-(e+d.eY)/16.0;g=a.eo.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gm.jo;k=d.iW;Ch(c,j,k.bt+a.fd,f+k.bN);j=d.gm.jD;d=d.j8;Ch(c,j,d.bt+a.fd,f+d.bN);}i=i+1|0;}a:{d=a.hP;if(d.cV>0){h=d.cT;i=0;b:while(true){g=d.cf.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cJ;l=j.cZ;k=k;l=l.kg;Ch(c,k,l.bt+a.fd,f+l.bN);j=j.cQ;if(h!=d.cT)break b;}i=i+1|0;}b=new Hu;Y(b);K(b);}}b=CK(a.fT,CZ(b));a.fT=b;CS(b,c);F$(c);}
function Qp(a,b){var c;c=a.eo.data;return c[b%c.length|0];}
function ARs(a,b){Cx(a.d0.s,b);}
function ATj(a,b){Cx(a.d0.A,b);}
function ACb(a){var b,c;KF(a);b=Ec(a);c=a.ce.data.length;b=W(b,c)+W(a.dv,c+1|0)|0;U(a.c1,a.r.b,b);}
function Re(a){var b,c,d,e,f,g,h,i,j;b=Jr(a.cx);if(ZB(a))return;KF(a);CC(b,a.ef);c=AAS(b,a.fd);d=a.ce.data;e=d.length;f=0;while(f<e){g=d[f];h=K7(c,g.gz);i=K7(c,g.jo);j=K7(c,g.jD);a.dT=Bd(a.dT,h);a.eD=Bd(a.eD,i);a.gr=Bd(a.gr,j);f=f+1|0;}}
function AOI(a,b){var c;c=TX(a,b.i);if(c>=0)a.cN=c;return Eq(a.d0,a.G)&&Gg(a.cx.cP)?1:0;}
function ALV(a,b,c){if(!Eq(a.d0,b.i)&&!K3(a.d0)){b=a.xw;if(b!==null)b.o();}return null;}
function ARJ(a,b,c,d){var e;if(d==1){e=TX(a,b.i);if(e>=0)XM(a,a.ce.data[e]);}return 1;}
function XM(a,b){a.jc.o();b.tE.o();}
function TX(a,b){var c,d,e;if(!a.eo.data.length)return (-1);c=Ec(a);d=(b.a-a.G.a|0)+a.bG.a|0;e=a.dv;e=(d+e|0)/(c+e|0)|0;if(e<a.ce.data.length)return e;return (-1);}
function Ec(a){return Fj(a.ef);}
function KF(a){var b;if(a.ef===null){b=HH(a.cx,a.vi);a.ef=b;a.eq=ABn(Fj(b));a.fd=Dl(a.ef.nd);}}
function ATF(a,b){var c,d,e;a:{switch(b.bl){case 13:XM(a,a.ce.data[a.cN]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cN=a.fI;b=a.gg;c=a.bG;Jz(b,c.b,c.a-(a.r.a/2|0)|0);return 0;case 34:a.cN=a.fu;b=a.gg;c=a.bG;Jz(b,c.b,c.a+(a.r.a/2|0)|0);return 0;case 35:case 39:a.cN=a.ce.data.length-1|0;break a;case 36:case 37:a.cN=0;break a;case 38:d=a.cN;e=a.ce.data.length;a.cN=((d+e
|0)-1|0)%e|0;break a;case 40:a.cN=(a.cN+1|0)%a.ce.data.length|0;break a;default:break a;}a.jc.o();return 0;}e=a.cN;if(e<=a.fI)Jz(a.gg,a.bG.b,W(e,Ec(a))+W(a.cN,a.dv)|0);else if(e>=a.fu)Jz(a.gg,a.bG.b,(W(e+1|0,Ec(a))+W(a.cN+2|0,a.dv)|0)-a.r.a|0);return 0;}
var Og=G();
function AMk(a){}
function ACE(){var a=this;Fc.call(a);a.nB=null;a.p2=null;a.u1=null;a.bH=null;a.dg=null;a.dp=null;a.wb=0.0;a.w6=null;a.w1=null;}
function AAE(a,b){var c=new ACE();AHW(c,a,b);return c;}
function AHW(a,b,c){var d;c=c.cP;Mm(a);d=new PI;d.rP=a;a.p2=d;d=new PH;d.tb=a;a.u1=d;a.wb=10.0;a.bH=b;a.nB=c;b.gg=a;}
function ATd(a){var b;b=a.bH;b.gg=null;a.bH=CK(b,null);}
function AAm(a,b,c){var d;a.w6=b;a.w1=c;d=a.dg;if(d!==null)Hm(d,b,c);d=a.dp;if(d!==null)Hm(d,b,c);}
function AMw(a,b,c,d){S9(a,b,c,d);S9(a.bH,b,c,d);if(d!==0.0){a.bH.xf();ADx(a.bH);if(X3(a))Jb(a);else a.dp=null;if(PN(a))HX(a);else a.dg=null;}}
function Jz(a,b,c){AG_(a.bH,b,c);if(X3(a))Jb(a);if(PN(a))HX(a);}
function PN(a){var b;b=a.r.a;return b>0&&a.bH.c1.a>b?1:0;}
function X3(a){var b;b=a.r.b;return b>0&&a.bH.c1.b>b?1:0;}
function Jb(a){var b,c,d,e,f,g;b=a.dp;if(b===null)b=Jc();a.dp=b;SC(a,b);c=a.dp;b=a.bH;d=b.bG.b;e=a.G;f=e.b;g=a.r;St(c,d,f,g.b,b.c1.b,e.a+g.a|0,MX(a));}
function HX(a){var b,c,d,e,f,g;b=a.dg;if(b===null)b=Jc();a.dg=b;SC(a,b);c=a.dg;b=a.bH;d=b.bG.a;e=a.G;f=e.a;g=a.r;Jv(c,d,f,g.a,b.c1.a,e.b+g.b|0,MX(a));}
function MX(a){return Cd(a.wb,a.el);}
function SC(a,b){var c,d;c=a.w6;d=a.w1;if(!(c!==null&&d!==null?(Ld(b.iQ,c)&&Ld(b.iR,d)?1:0):0))Hm(b,c,d);}
function ASi(a,b){var c;a.bH.fJ(b);if(!(a.dg===null&&a.dp===null)){Cw(b,1);c=a.dg;if(c!==null)GQ(c,b);c=a.dp;if(c!==null)GQ(c,b);c=a.dg;if(c!==null)GZ(c,b);c=a.dp;if(c!==null)GZ(c,b);Cw(b,0);}}
function Wb(a,b){var c,d;a:{b:{c=a.dg;if(!(c!==null&&Ig(c,b))){c=a.dp;if(c===null)break b;if(!Ig(c,b))break b;}d=1;break a;}d=0;}return d;}
function ATR(a,b,c,d){return !Wb(a,b.i)&&!a.bH.cB(b,c,d)?0:1;}
function ATi(a,b,c){var d,e;d=a.dg;if(d!==null){e=FH(d,b.i,a.p2,1);if(e!==null)return e;}d=a.dp;if(d!==null){e=FH(d,b.i,a.u1,0);if(e!==null)return e;}return a.bH.ci(b,c);}
function AP4(a,b,c){return Wb(a,b.i)?1:0;}
function API(a,b){var c,d,e;c=a.dg;d=c!==null&&FU(c,b.i,a.nB)?1:0;c=a.dp;e=c!==null&&FU(c,b.i,a.nB)?1:0;return !d&&!e&&!a.bH.bR(b)?0:1;}
function ALK(a,b,c,d){var e,f;if(!DN(a,b.i))return 0;e=Cd(d*0.25,a.el);f=Cd(c*0.25,a.el);if(b.bP){f=f+e|0;e=0;}if(a.dg!==null&&e){b=a.bH;AAw(b,b.bG.a+e|0);HX(a);}if(a.dp!==null&&f){b=a.bH;W6(b,b.bG.b+f|0);Jb(a);}return 1;}
function AVg(a){var b,c;b=MX(a);c=a.bH.jX();c.b=Bd(c.b,b);c.a=Bd(c.a,b);return c;}
function Qd(){var a=this;Gi.call(a);a.kk=null;a.mG=null;a.qC=null;a.qz=0.0;}
function AKG(a){var b,c;b=a.c1;c=a.r;U(b,c.b*3|0,c.a*5|0);}
function AVj(a){var b;b=Cd(20.0,a.el);return B$(b,b);}
function ARz(a,b){var c,d,e,f;c=a.qC;d=c.q_;e=c.ra;c=c.q$;f=new M;O(f);H(H(H(f,c),C(35)),b);Ir(e,N(f),d.pZ,3.0);}
function AVH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;AGG(a,b);Xp(a,b);c=Cd(30.0,a.el);d=a.bG;e=d.b;f=W(e/c|0,c);g=d.a;h=W(g/c|0,c);d=a.r;i=W(((e+d.b|0)-1|0)/c|0,c);e=W(((g+d.a|0)-1|0)/c|0,c);d=a.mG;d.a=c;d.b=c;a.kk.bO=1.0;while(h<=e){g=a.G.a-a.bG.a|0;j=f;while(j<=i){k=a.G.b-a.bG.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AGn(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;Y2(n,0.75,a.qz,a.kk);Bx(b,k+j|0,g+h|0,a.mG,a.kk);j=j+c|0;}h=h+c|0;}Hq(b);}
function AIQ(a,b){}
function YJ(){var a=this;B.call(a);a.q_=null;a.ra=null;a.q$=null;}
var TM=G(D7);
var A16=null;function Dc(b,c){return Long_udiv(b, c);}
function AA$(b,c){return Long_urem(b, c);}
function Dt(b,c){return Long_ucompare(b, c);}
function ADk(){A16=F($rt_longcls());}
function Qz(){B.call(this);this.ow=null;}
function ATq(a){R8(a.ow);}
function OS(){B.call(this);this.od=null;}
function AKc(a){Wc(a.od);}
function VF(){B.call(this);this.nl=null;}
var A15=null;function ANx(){var a=new VF();AB4(a);return a;}
function AB4(a){a.nl=BH();}
function Nh(a,b,c,d,e){var f;f=new K5;f.tE=e;f.jo=c;f.jD=d;f.gz=b;BC(a.nl,f);}
function YI(a){return Ie(a.nl,A15);}
function Us(b){var c,d;if(b===null)b=C(30);else{c=b.f9;if(c===null)b=C(30);else{d=SU(c,C(399));b=d==(-1)?b.f9:Do(b.f9,d+1|0);}}return b;}
function AGu(){A15=R(K5,0);}
function I7(){var a=this;B.call(a);a.sQ=null;a.iW=null;a.j8=null;a.hO=null;a.iA=null;a.hQ=null;a.gm=null;}
function J4(b,c,d,e){var f,g,h;f=new I7;f.hO=new Bf;f.iA=new Bf;f.hQ=new Bf;f.gm=b;g=Cl(e,b.gz);if(g!==null)g.ic=g.ic+1|0;else{g=new XY;h=JG(c,b.gz,d);g.ic=1;g.kg=h;F3(e,b.gz,g);}e=g.kg;f.sQ=e;U(f.hO,e.bo|0,e.bO|0);e=JG(c,b.jo,d);f.iW=e;U(f.iA,e.bo|0,e.bO|0);b=JG(c,b.jD,d);f.j8=b;U(f.hQ,b.bo|0,b.bO|0);return f;}
function XR(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gm.gz;f=Cl(d,e);g=f.ic-1|0;f.ic=g;if(!g){a:{h=0;i=null;if(e===null){j=d.cf.data[0];while(j!==null){if(j.cJ===null)break a;e=j.cQ;i=j;j=e;}}else{k=IX(e);l=d.cf.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.jT==k&&ABg(e,j.cJ))){m=j.cQ;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cQ=j.cQ;else d.cf.data[h]=j.cQ;d.cT=d.cT+1|0;d.cV=d.cV-1|0;}IS(b,f.kg);}IS(b,c.iW);IS(b,c.j8);}
function Xt(){var a=this;Fc.call(a);a.hN=null;a.hw=null;a.hs=null;a.eI=null;a.j6=0.0;a.hT=0;a.hx=0;a.dH=null;a.k5=null;}
function Lf(a){var b;b=a.r;return b.b&&b.a?0:1;}
function Yq(a){var b,c;a:{if(a.hs!==null){b=a.hw;if(b!==null&&!Fz(b)){c=0;break a;}}c=1;}return c;}
function Q4(a,b){a.r.a=b;}
function Rh(a,b,c,d,e){var f,g;f=a.hN.dK;U(f,d,a.r.a);g=a.G;Bx(b,g.b+c|0,g.a,f,e);}
function W5(a){if(a.eI===null)a.eI=HH(a.hN,a.hs);}
function VN(){var a=this;B.call(a);a.ml=Fa;a.k_=0;a.o0=0;}
function Uz(){var a=this;B.call(a);a.pg=null;a.pf=null;a.pe=null;}
function AJo(a){var b,c,d,e,f;b=a.pg;c=a.pf;d=a.pe;e=BA();f=new M;O(f);b=H(f,b);BL(b,9);b=H(b,c);BL(b,9);H(b,d);Bt(e,N(f));}
function PI(){B.call(this);this.rP=null;}
function AIA(a,b){var c,d;c=a.rP;d=Fq(b,c.bH.c1.a-c.r.a|0);AAw(c.bH,d);HX(c);}
function PH(){B.call(this);this.tb=null;}
function AIY(a,b){var c,d;c=a.tb;d=Fq(b,c.bH.c1.b-c.r.b|0);W6(c.bH,d);Jb(c);}
function K5(){var a=this;B.call(a);a.tE=null;a.jo=null;a.jD=null;a.gz=null;}
var CL=G(Bu);
var AE3=G(E0);
function AKN(a){var b=new AE3();APg(b,a);return b;}
function APg(a,b){a.j3=1;a.kD=1;a.l_=b;}
function WR(){B.call(this);this.rV=null;}
function Sv(a,b,c){var d,e,f,g,h,i;d=a.rV;e=b.dM.cy;f=d.gE;if(f===null)b=Ra(d,e);else{g=AEJ(f,e);if(g<0)g=( -g|0)-1|0;g=g-1|0;b=Du(g,e-(g<0?0:d.gE.data[g])|0);}if(b.bw>=(BR(d,b.bm)).I){b.bm=b.bm+1|0;b.bw=0;}h=MI(BR(d,b.bm),b.bw);if(c===null)h.cH=5;else{g=c.gC!=3?0:2;i=!(c instanceof F6)?0:2;c=Ra(d,c.db.cy);F3(d.dn,b,c);Sf(d.c_,c,BH());BC(Cl(d.c_,c),b);h.cH=g;h.cg=i;}}
function YM(){var a=this;B.call(a);a.zc=null;a.zd=null;a.zb=null;}
function TS(){var a=this;B.call(a);a.wP=null;a.wQ=null;a.wO=0;}
function ALp(a,b){var c,d,e;c=a.wP;d=a.wQ;e=a.wO;d.g(Yv(c,(b.i.b+e|0)-c.es.b|0));}
function TR(){var a=this;B.call(a);a.qe=null;a.qc=null;a.qd=0;}
function AUy(a,b){var c,d,e;c=a.qe;d=a.qc;e=a.qd;d.g(Rm(c,(b.i.a+e|0)-c.es.a|0));}
function K_(){var a=this;MP.call(a);a.pw=null;a.tZ=null;}
function AGz(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.pw;e=0;f=0;g=a.tZ;a:{b:{while(true){if((e+32|0)>f&&DV(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cc(b)+k|0;h=j.length;f=Bb(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BD;c=new M;O(c);V(H(V(H(c,C(400)),l),C(100)),h);Bi(b,N(c));K(b);}if(Cc(b)<m){b=new MB;Y(b);K(b);}if(m<0){b=new BD;c=new M;O(c);H(V(H(c,C(101)),m),C(102));Bi(b,N(c));K(b);}n=b.Z;h=n+b.l0|0;e=0;while(e<m){o=k+1|0;i=b.mL.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!DV(c)){p=!DV(b)&&e>=f?AZU:AZT;break a;}i=g.data;n=Cc(c);o=i.length;n=Bb(n,o);q=new WU;q.sY=b;q.vx=c;p=AGZ(a,d,e,f,g,0,n,q);e=q.xk;if(p===null&&0==q.lb)p=AZU;k=q.lb;h=0;if(c.nC){b=new JF;Y(b);K(b);}if(Cc(c)<k)break;if(h>o){b=new BD;c=new M;O(c);BL(V(H(V(H(c,C(103)),h),C(97)),o),41);Bi(b,N(c));K(b);}l=h+k|0;if(l>o){b=new BD;c=new M;O(c);V(H(V(H(c,C(105)),l),C(100)),o);Bi(b,N(c));K(b);}if(k<0){b=new BD;c=new M;O(c);H(V(H(c,C(101)),k),C(102));Bi(b,N(c));K(b);}o=c.Z;m=0;while(m
<k){l=o+1|0;n=h+1|0;T2(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new It;Y(b);K(b);}b=new BD;c=new M;O(c);BL(V(H(V(H(c,C(103)),k),C(97)),h),41);Bi(b,N(c));K(b);}EW(b,b.Z-(f-e|0)|0);return p;}
var Vc=G(K_);
function AGZ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(La(h,2))break a;i=AZU;break a;}c=k+1|0;n=j[k];if(!FY(a,n)){c=c+(-2)|0;i=Ed(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(La(h,3))break a;i=AZU;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FY(a,n))break b;if(!FY(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(MU(p)){c=k+(-3)|0;i=Ed(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Ed(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(La(h,4))break a;i=AZU;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cc(h.vx)<2?0:1)break a;i=AZT;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FY(a,n))break c;if(!FY(a,o))break c;if(!FY(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=IL(r);m=c+1|0;j[c]=Jl(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Ed(1);break a;}c=k+(-3)|0;i
=Ed(1);}h.xk=c;h.lb=f;return i;}
function FY(a,b){return (b&192)!=128?0:1;}
function ZW(){B.call(this);this.ox=null;}
function AUs(a,b){var c,d;c=a.ox;d=c.d8+1|0;c.d8=d;c=new M;O(c);H(H(V(c,d),C(401)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Ql(){B.call(this);this.nZ=null;}
function AIG(a){return a.nZ.gA();}
function Qk(){B.call(this);this.w$=null;}
function ALN(a){return a.w$.gA();}
function Ui(){B.call(this);this.tV=null;}
function AQJ(a){return a.tV.gA();}
function UU(){B.call(this);this.y1=null;}
function AUk(a){Bt(BA(),C(402));}
function SM(){B.call(this);this.oJ=null;}
function AHP(a,b){a.oJ.g(FS(b));}
function Wl(){B.call(this);this.t4=null;}
function AVb(a,b){a.t4.o();}
function NG(){var a=this;B.call(a);a.zj=null;a.zl=null;a.zh=0;a.zi=0;}
var AEf=G();
var AFt=G();
function OK(){B.call(this);this.vr=null;}
function AKA(a,b){var c,d,e,f;c=a.vr;d=new M;O(d);H(H(d,C(403)),b);$rt_globals.console.info($rt_ustr(N(d)));d=new VS;d.zg=c;d.sd=b;e=new VV;e.Al=c;f=new Wh;f.yP=e;e=new Xv;e.pl=d;c=b.fL;if(c!==null)c.arrayBuffer().then(Bl(e,"f"),Bl(f,"f"));else{b=b.hq.getFile();c=new Xy;c.vn=e;c.vo=f;b.then(Bl(c,"f"),Bl(f,"f"));}}
function OI(){B.call(this);this.ye=null;}
function AST(a,b){var c;c=new M;O(c);H(H(c,C(404)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Nv=G();
function ATf(a,b){b=b;b.bu=CK(b.bu,null);}
function XS(){B.call(this);this.tU=null;}
function AJF(a){DZ(a.tU);}
function Ib(){var a=this;GV.call(a);a.mq=0;a.hB=null;}
var Hu=G(Bu);
function WT(){B.call(this);this.rW=null;}
function AQs(a,b){var c;c=a.rW;Dv(c,b);Kx(c,null);JC(c);}
var Rq=G(D7);
var A17=null;function AB6(){A17=F($rt_doublecls());}
var I$=G();
var A18=Fa;var A19=null;var A1$=null;function ADO(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.o0=Ia(C0(d,D(0, 2147483648)),Fa)?0:1;e=C0(d,D(4294967295, 1048575));f=GD(AXb(d,52))&2047;if(Ia(e,Fa)&&!f){c.ml=Fa;c.k_=0;return;}if(f)e=AWT(e,D(0, 1048576));else{e=GS(e,1);while(Ia(C0(e,D(0, 1048576)),Fa)){e=GS(e,1);f=f+(-1)|0;}}g=A1$.data;h=f<<16>>16;i=0;j=g.length;k=BG(i,j);if(k>0){c=new BE;Y(c);K(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BG(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IC(e,A19.data[h],i);if(ALk(m,A18)){while(Dt(m,A18)<=0){j=j+(-1)|0;m=CH(Cb(m,Bp(10)),Bp(9));}g=A1$.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IC(e,A19.data[h],i);}e=GS(e,1);d=CH(e,Bp(1));g=A19.data;h=j+1|0;n=g[h];f=i-1|0;n=IC(d,n,f);o=IC(IA(e,Bp(1)),A19.data[h],f);p=Bp(1);while(true){q=Cb(p,Bp(10));if(Dt(Dc(m,q),Dc(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Cb(r,Bp(10));if(Dt(Dc(m,s),Dc(n,s))>=0)break;r=s;}h=Dt(p,r);e=h>0?Cb(Dc(m,p),p):h<0?CH(Cb(Dc(m,r),r),r):Cb(Dc(CH(m,AFx(r,Bp(2))),r),r);if(Dt(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dc(e,Bp(10));if(Dt(e,D(2808348672, 232830643))<0)break;}else if(Dt(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cb(e,Bp(10));}c.ml=e;c.k_=j-330|0;}
function IC(b,c,d){var e,f,g,h,i,j,k,l;e=C0(b,Bp(65535));f=C0(F2(b,16),Bp(65535));g=C0(F2(b,32),Bp(65535));h=C0(F2(b,48),Bp(65535));i=C0(c,Bp(65535));j=C0(F2(c,16),Bp(65535));k=C0(F2(c,32),Bp(65535));l=C0(F2(c,48),Bp(65535));return CH(CH(CH(GS(Cb(l,h),32+d|0),GS(CH(Cb(l,g),Cb(k,h)),16+d|0)),GS(CH(CH(Cb(l,f),Cb(k,g)),Cb(j,h)),d)),F2(CH(CH(CH(Cb(k,e),Cb(j,f)),Cb(i,g)),GS(CH(CH(CH(Cb(l,e),Cb(k,f)),Cb(j,g)),Cb(i,h)),16)),32-d|0));}
function ADm(){A18=Dc(Bp(-1),Bp(10));A19=ABU([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A1$=AYC([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function NH(){B.call(this);this.uj=null;}
function AWa(a,b){var c,d;c=a.uj;d=new Bu;Bi(d,$rt_str(b.message));c.g(d);}
function AA8(){B.call(this);this.FI=null;}
function Wa(){var a=this;B.call(a);a.sK=0;a.xN=0;}
function Fq(a,b){return RH(a.sK,b,a.xN);}
function Z3(){var a=this;B.call(a);a.s9=null;a.s$=null;a.s_=null;}
function AR8(a,b,c,d){var e,f;b=a.s9;e=a.s$;f=a.s_;Vo(b,e);if(f!==null)d.lo.o();if(WP(d)){if(d.mv===null)PK(b,ADh(d,e),d.jv,e);else Y5(b,ADh(d,e),d.jv,e,d.mv);}}
function Fw(){var a=this;B.call(a);a.eA=null;a.b6=null;a.eg=null;a.dw=null;a.e7=null;a.hF=null;a.j9=null;}
function AWi(a){var b=new Fw();AEu(b,a);return b;}
function AEu(a,b){a.eA=b;a.b6=BH();a.eg=BH();a.dw=BH();a.hF=BH();a.e7=BH();}
function ZN(a){var b;b=a.eA;if(b!==null)b.b6.oW(a);}
function AGB(a,b){var c,d,e,f,g,h,i;c=a.e7.br();while(c.bz()){d=c.bn();e=Zz(b,d.il);if(e!==null){f=e.eK;if(f!==null){if(d.lu==1)d.e1.eK=f;else{e=d.e1;g=R(By,15).data;g[0]=C(405);g[1]=C(406);g[2]=C(407);g[3]=C(408);g[4]=C(409);g[5]=C(410);g[6]=C(411);g[7]=C(412);g[8]=C(413);g[9]=C(414);g[10]=C(415);g[11]=C(416);g[12]=C(417);g[13]=C(418);g[14]=C(419);h=g.length;i=0;a:{while(i<h){if(IE(f,g[i])){h=1;break a;}i=i+1|0;}h=0;}b:{if(h){h=Vw(f,C(216));i=Vw(f,C(420));if(h!=(-1)&&i!=(-1)){d=Ca(f,h+1|0,i);break b;}}h=SU(f,
C(43));d=h==(-1)?null:Ca(f,0,h);}e.eK=d;}}}}c=a.eg.br();while(c.bz()){Zz(b,c.bn());}}
function LG(a,b){var c,d,e,f;c=a.e7.br();while(true){if(!c.bz()){c=a.dw.br();while(true){if(!c.bz()){c=a.b6.br();a:while(true){if(!c.bz())return null;d=c.bn();if(!(d instanceof Iy))continue;e=d.dw.br();while(e.bz()){f=e.bn();if(b.U(f))break a;}}return f;}e=c.bn();if(b.U(e))break;}return e;}e=c.bn();if(b.U(e.e1))break;}return e.e1;}
function Z6(){B.call(this);this.qJ=null;}
function AMp(a,b){b=b;S6(a.qJ,b);}
var Lu=G(Fw);
function Iy(){Fw.call(this);this.yY=null;}
function Yd(){B.call(this);this.vD=null;}
function AIX(a,b){var c;b=b;c=a.vD;Bs(c.bQ,(Cl(c.fs,b)).bF);}
function RA(){var a=this;B.call(a);a.e1=null;a.il=null;a.lu=0;}
function Qr(){B.call(this);this.oc=null;}
function APn(a,b){b=b;T7(a.oc,b);}
var D_=G(Bu);
function OY(){var a=this;B.call(a);a.ob=null;a.rA=null;a.vC=0;a.xa=0;}
function Mq(a,b){return Cc(a.rA)<b?0:1;}
function Pk(){var a=this;B.call(a);a.hl=null;a.k9=null;}
function GA(a,b,c){var d,e;a:{if(c!==null){if(!(c instanceof EC))break a;if(c.ho!=3)break a;}return null;}d=c.jY;if(d!=4&&d!=5){e=LZ(a,b,c);if(e!==null){b=e.eK;if(b!==null)c.dk=b;}if(c.jY!=3&&!(c instanceof EK)&&!(c instanceof Fu))Sv(a.k9,c,e);return e;}b:{while(true){if(b===null){e=null;break b;}e=b.j9;if(e!==null)break;b=b.eA;}}c.dk=e;return null;}
function LZ(a,b,c){var d,e,f,g,h;if(c instanceof Fu){c=c.ke;d=new ZC;d.st=a;d.su=b;D9(c,d);return null;}if(c instanceof EC){e=c;Nu(a,b,e);return HY(a,b,e);}if(c instanceof EK){f=c;c=BH();JZ(f,c);GA(a,b,f.eF);d=H3(a,f.eF.dk);g=1;while(g<c.j){e=Br(c,g);if(!(e instanceof EC)){GA(a,d,e);d=H3(a,f.eF.dk);}else{e=e;Nu(a,b,e);h=HY(a,d,e);Sv(a.k9,e,h);}g=g+1|0;}return null;}if(b===null)d=null;else{d=new Q6;d.vV=a;d.vW=c;d=LG(b,d);if(d===null){d=new Q5;d.se=a;d=N5(a,b,c,d);}}if(d!==null)return d;if(b===null)return null;b
=b.eA;return b===null?null:LZ(a,b,c);}
function Nu(a,b,c){c=BZ(c.fv);while(B1(c)){GA(a,b,B3(c));}}
function HY(a,b,c){var d,e,f;if(c.ho==2){d=H3(a,c.dk);if(d===null)return null;b=new Sy;b.n_=a;b.oa=c;return LG(d,b);}if(b===null)return null;e=new SA;e.tR=a;e.tQ=c;e=LG(b,e);if(e!==null)return e;e=new SB;e.vj=a;f=N5(a,b,c,e);if(f!==null)return f;b=b.eA;return b===null?null:HY(a,b,c);}
function N5(a,b,c,d){var e,f;b=b.hF.br();while(true){if(!b.bz())return null;e=H3(a,b.bn());if(e===null)continue;f=d.pd(e,c);if(f!==null)break;}return f;}
function H3(a,b){if(b===null)return null;return QR(a,a.hl.eU,b);}
function QR(a,b,c){var d,e;d=b.j9;if(d!==null&&Bn(d,c))return b;b=b.b6.br();while(true){if(!b.bz())return null;e=QR(a,b.bn(),c);if(e!==null)break;}return e;}
var AGf=G();
function We(b,c,d,e){var f,g;f=b.next();g=new ZH;g.ot=b;g.os=c;g.oy=d;g.ou=e;f.then(Bl(g,"f"),Bl(d,"f"));}
function ABi(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AG0(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Ei()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new ZE;f.sj=b;f.sk=d;d.addEventListener("change",Bl(f,"handleEvent"));d.click();}
function ABs(b,c){var d;if(c.isFile?1:0)b.g(AAP(c.file()));else{c=c.createReader();d=new Zl;d.vU=b;c.readEntries(Bl(d,"f"));}}
function U2(){var a=this;B.call(a);a.bK=null;a.pu=null;a.iK=null;a.kC=null;a.X=null;}
function IK(a){return a.bK.cE.i$;}
function AAr(a){var b;b=new Vy;b.ph=a;return b;}
function ADq(a){var b,c,d,e,f,g;b=R(C$,5);c=b.data;d=a.X.Y.V.bg;e=a.bK;BP(e);f=new PP;f.ss=e;c[0]=DL(C(421),d,f);d=a.X.Y.V.bg;e=a.bK;BP(e);f=new PQ;f.wt=e;c[1]=DL(C(422),d,f);e=a.X.Y.V.bg;f=a.bK;BP(f);g=new PR;g.uA=f;c[2]=DL(C(423),e,g);e=a.X.Y.V.bg;f=a.bK;BP(f);g=new PM;g.oK=f;c[3]=DL(C(424),e,g);e=a.X.Y.V.bg;f=a.bK;BP(f);g=new PO;g.xx=f;c[4]=DL(C(425),e,g);return Gb(b);}
function Kd(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DZ(a.X.ch);d=a.bK.e;e=DY(d);f=Gx(d);g=a.bK.fn;if(c===null)h=null;else{AXK();switch(A1_.data[c.dj]){case 1:h=MR(g,e,f);break a;case 2:h=Sp(g,e,f);break a;default:}b=new EB;Y(b);K(b);}}c=a.bK;e=EY(c,b);f=Hp(c.e.f,e.bm,e.bw);g=UN(c,f);if(h!==null){f=c.e;i=e.bm;j=e.bw;e=new U_;e.At=c;e.As=b;e.Ar=g;h.ti(f,i,j,e,c.iI);}else{e=Cl(c.e.f.dn,f);if(e!==null)IG(c,e);else{e=Cl(c.e.f.c_,f);if(e!==null&&!D$(e))SP(c.j_,b,e,c,g);else{g=c.j_;DZ(g.ch);h=g.ch;k=R(C$,1);l=k.data;d=new C$;BP(h);f
=new OF;f.of=h;Ml(d,f,C(426),g.Y.V.wS);l[0]=d;GF(h,b,Gb(k),Sw(g,c));}}}}
var ABG=G(0);
function AMX(b){return 112<=b&&b<=123?1:0;}
var QF=G(0);
var EU=G(E5);
function QW(){EU.call(this);this.hv=null;}
function T1(a){var b;b=new UA;Lz(b,a.hv);return b;}
function Nf(){B.call(this);this.w9=null;}
function ALC(a,b){b=b;On(a.w9,b);}
function WY(){B.call(this);this.uE=null;}
function AOG(a,b){b=b;Ho(a.uE,b);}
function JR(){var a=this;B.call(a);a.db=null;a.eK=null;a.gC=0;}
function AXU(a,b,c){var d=new JR();AFo(d,a,b,c);return d;}
function AFo(a,b,c,d){a.db=b;a.eK=c;a.gC=d;}
function Rk(a,b,c){var d,e,f,g;a:{d=b.dM;if(d!==null){e=a.db;if(!Bn(d.fN,e.fN)){f=0;break a;}}f=1;}d=b.dk;g=d!==null&&!MC(c,a.eK,d)?0:1;if(f&&g){if(a.gC!=1)return 1;b=b.dM;return b!==null&&a.db.cy<b.cy?1:0;}return 0;}
function AEB(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BW(a.db,c.db)&&BW(a.eK,c.eK)&&BW(Dh(a.gC),Dh(c.gC))?1:0;}return 0;}
function F6(){var a=this;JR.call(a);a.gc=null;a.kO=0;}
function W9(a,b,c){var d,e,f,g;a:{if(b instanceof EC&&b.ho==a.kO&&Rk(a,b,c)){b:{b=b.fv;if(a.gc.j!=b.j)d=0;else{e=0;while(e<a.gc.j){f=Br(b,e);g=Br(a.gc,e);if(f!==null){f=f.dk;if(f!==null&&!MC(c,f,g)){d=0;break b;}}e=e+1|0;}d=1;}}if(d){d=1;break a;}}d=0;}return d;}
function AJv(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){if(!AEB(a,b))return 0;c=b;return BW(a.gc,c.gc);}return 0;}
function EO(){var a=this;B.call(a);a.dM=null;a.dk=null;a.jY=0;}
function AWH(a,b,c){var d=new EO();LW(d,a,b,c);return d;}
function LW(a,b,c,d){a.dM=b;a.dk=c;a.jY=d;}
function ABw(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BW(a.dM,c.dM)&&BW(a.dk,c.dk)?1:0;}return 0;}
function Fu(){EO.call(this);this.ke=null;}
function EC(){var a=this;EO.call(a);a.fv=null;a.ho=0;}
function AUI(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){if(!ABw(a,b))return 0;c=b;return BW(a.fv,c.fv);}return 0;}
function EK(){var a=this;EO.call(a);a.eF=null;a.gj=null;}
function JZ(a,b){var c;c=a.eF;if(!(c instanceof EK))BC(b,c);else JZ(c,b);c=a.gj;if(!(c instanceof EK))BC(b,c);else JZ(c,b);}
function AIE(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BW(a.eF,c.eF)&&BW(a.gj,c.gj)?1:0;}return 0;}
function NO(){var a=this;B.call(a);a.xe=null;a.xc=null;}
function Zz(a,b){return GA(a.xe,a.xc,b);}
function NP(){var a=this;B.call(a);a.n3=null;a.n2=null;}
function ANe(a,b){b=b;UT(a.n3,b,a.n2);}
var ZJ=G();
function ASK(a,b){ABi(b);}
function ZI(){var a=this;B.call(a);a.rD=null;a.rC=null;}
function AKX(a,b){var c,d,e,f,g,h,i;c=a.rD;d=a.rC;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new RW;i.pF=c;i.pE=g;h.then(Bl(i,"f"),Bl(d,"f"));e=e+1|0;}}
var YP=G();
function AMx(a,b){ABi(b);}
function YO(){var a=this;B.call(a);a.qW=null;a.qX=null;}
function ANn(a,b){var c,d,e,f,g;c=a.qW;d=a.qX;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(By,1);g.data[0]=FS(b.name);We(f,c,d,g);}
var ACp=G();
function AFB(b,c,d){ADi(b,c,d,0);}
function ADi(b,c,d,e){ABu(b,c,d,null,null,e);}
function ABu(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u;h=Yl(c);i=Be(h);j=Be(h);k=Be(h);l=CB(b);m=BM(i+1|0);n=!g?R(CD,i):Q0(b.z,i);c=m.data;b.z=n;o=0;while(o<i){if(g&&o<l){p=4*Be(h)|0;h.fy=h.fy+p|0;c[o+1|0]=(c[o]+(BR(b,o)).I|0)+1|0;}else{b.z.data[o]=DS(ACX(h,d,0));c[o+1|0]=(c[o]+(BR(b,o)).I|0)+1|0;}o=o+1|0;}if(j)b.c8=AGU(ABK(h));b.gE=m;EZ(b.dn);EZ(b.c_);q=b.dn;g=0;while(g<k){F3(q,Du(Be(h),Be(h)),Du(Be(h),Be(h)));g=g+1|0;}r=b.dn;s=b.c_;r=Pt(WS(r));while(Fl(r)){t=ZL(r);q=t.cJ;t=t.cZ;Sf(s,t,BH());BC(Cl(s,t),
q);}if(s.lC===null){r=new QX;r.xr=s;s.lC=r;}r=s.lC;q=new S1;Lz(q,r.xr);while(Fl(q)){L7(q);r=q.gG.cZ;t=AY8;c=R(B,r.j);d=c.data;Ie(r,c);ACM(c,t);g=0;u=d.length;while(g<u){t=d[g];JU(r,g);r.cC.data[g]=t;g=g+1|0;}}Sl(h);if(e!==null&&f!==null){r=APs(e,f);PC(r);b.d2=AKs(r.l2,r.ik);b.c8=AGU(r.mE);}}
function AAN(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Yl(c);i=Be(h);j=Be(h);k=Be(h);l=Be(h);m=Y8(b,i);n=Y8(b,j);o=(Iu(BR(b,m.b),m.a)).data[0].p;p=(Iu(BR(b,n.b),n.a)).data[1].p;q=0;r=k-1|0;while(q<k){g=ACX(h,d,i);if(!q)g=Mp(o,g);if(q==r)g=Mp(g,p);s=m.b+q|0;t=DS(g);b.z.data[s]=t;q=q+1|0;}if(l){u=ABK(h);v=Ko(i,j,(-1));Wv(b.c8,v,u);}else if(e!==null&&f!==null){t=APs(e,f);PC(t);v=Ko(i,j,(-1));Wv(b.c8,v,t.mE);b.d2.dm=t.ik;}Sl(h);}
function ACX(b,c,d){var e,f,g,h,i,j,k,l;e=Be(b);f=R(Cf,e);g=f.data;h=0;while(h<e){i=Be(b);j=Be(b);k=Be(b);l=Be(b);g[h]=Dz(EQ(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
var Y1=G(0);
var A0J=null;function ABf(){A0J=null;}
function ZE(){var a=this;B.call(a);a.sj=null;a.sk=null;}
function AMl(a,b){var c,d,e,f,g,h;b=a.sj;c=a.sk;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new NC;h.om=b;h.ol=g;$rt_globals.setTimeout(Bl(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=AAP(d.item(f));g=new Nn;g.tH=b;g.tI=c;$rt_globals.setTimeout(Bl(g,"onTimer"),0);f=f+1|0;}}
function ABS(){var a=this;B.call(a);a.jS=null;a.mk=null;}
function AHq(){var a=this;B.call(a);a.yU=0;a.Aw=0;a.p1=0;a.l5=0;}
function Zo(){var a=this;B.call(a);a.rk=null;a.rl=null;}
function AIU(a){var b,c,d,e,f,g;b=a.rk;c=a.rl;if(BW(c.jS,b.e.gK)){c=c.mk;CE(b,c.l5,c.p1,0);B7(b.q.b1,c.l5,c.p1);B7(b.q.bL,c.Aw,c.yU);}else{d=(Cs(b.fn.vq)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ct(b);b=new Pw;b.rh=g;b.ri=c;BP(b);c=new RJ;c.xU=b;$rt_globals.setTimeout(Bl(c,"onTimer"),0);}}}
function Zp(){var a=this;B.call(a);a.wN=null;a.wM=null;}
function AM3(a){IG(a.wN,a.wM);}
function AGX(){var a=this;B.call(a);a.fN=null;a.cy=0;}
function AMn(a,b){var c=new AGX();AHI(c,a,b);return c;}
function AHI(a,b,c){a.fN=b;a.cy=c;}
function AQb(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.cy==c.cy&&BW(a.fN,c.fN)?1:0;}return 0;}
function Oa(){B.call(this);this.pb=null;}
function AOE(a,b){b=b;Nr(a.pb,b);}
function AAo(){B.call(this);this.pi=null;}
function AV$(a,b){b=b;Ho(a.pi,b);}
function AFc(){var a=this;B.call(a);a.jm=null;a.fy=0;}
function Yl(a){var b=new AFc();AHV(b,a);return b;}
function AHV(a,b){a.jm=b;a.fy=0;}
function Be(a){var b,c;b=a.jm.data;c=a.fy;a.fy=c+1|0;return b[c];}
function Sl(a){var b,c,d,e;if(a.fy!=a.jm.data.length){b=Fb();c=a.jm.data.length;d=a.fy;e=new M;O(e);H(V(H(V(H(e,C(391)),c),C(427)),d),C(428));Bt(b,N(e));}}
var Ff=G();
var A2a=null;var A2b=null;var A2c=null;var A2d=null;var A2e=null;var A2f=null;function AEy(){A2a=new Xk;A2b=new Xh;A2c=new Xi;A2d=new Xf;A2e=new Xg;A2f=new AAu;}
function ABo(){var a=this;B.call(a);a.cF=null;a.k4=null;a.lK=null;a.mD=null;a.my=null;a.l2=null;a.mE=null;a.hm=null;a.ik=null;}
function APs(a,b){var c=new ABo();AUg(c,a,b);return c;}
function AUg(a,b,c){a.cF=Yl(b);a.k4=c;}
function PC(a){var b,c,d,e,f,g,h,i;b=Be(a.cF);c=new Ly;Rz(c);a.ik=c;a.hm=BH();d=0;while(d<b){e=Be(a.cF);f=Be(a.cF);g=EQ(a.k4,e,f);F3(a.ik,g,BH());BC(a.hm,g);d=d+1|0;}c=Pt(WS(a.ik));while(Fl(c)){I2((ZL(c)).cZ,Ow(a));}d=Be(a.cF);if(d==(-1))a.l2=null;else{a.lK=R(Fw,d);c=new NM;h=a.cF;i=a.k4;g=a.hm;c.dX=h;c.sA=i;c.rK=g;a.mD=c;c=new SY;c.eb=h;c.vE=i;c.wa=g;a.my=c;a.l2=Sz(a,null);}a.mE=AAA(a.cF,a.lK);}
function Sz(a,b){var c,d,e,f,g,h,i,j,k;c=Be(a.cF);d=Be(a.cF);e=a.mD;f=Be(e.dX);g=BH();h=0;while(h<f){BC(g,NQ(e));h=h+1|0;}a:{switch(d){case -1:e=new Lu;e.eA=b;b=A2c;e.b6=b;e.eg=b;e.dw=b;e.hF=b;e.e7=b;break a;case 0:e=AWi(b);break a;case 1:e=new Iy;AEu(e,b);if(D$(g)){b=new CL;Bi(b,C(429));K(b);}e.yY=Br(g,0);I2(e.dw,g);break a;default:}b=new CL;e=new M;O(e);V(H(e,C(430)),d);Bi(b,N(e));K(b);}e.dw=g;b=a.my;d=Be(b.eb);g=BH();h=0;while(h<d){BC(g,Gk(b));h=h+1|0;}e.eg=g;e.hF=Ow(a);d=Be(a.cF);b=BH();h=0;while(h<d){g
=NQ(a.mD);i=Gk(a.my);j=Be(a.cF);k=new RA;k.e1=g;k.il=i;k.lu=j;BC(b,k);h=h+1|0;}e.e7=b;h=Be(a.cF);e.j9=h==(-1)?null:Br(a.hm,h);d=Be(a.cF);b=BH();h=0;while(h<d){BC(b,Sz(a,e));h=h+1|0;}e.b6=b;a.lK.data[c]=e;return e;}
function Ow(a){var b,c,d,e;b=Be(a.cF);c=BH();d=0;while(d<b){e=Be(a.cF);BC(c,Br(a.hm,e));d=d+1|0;}return c;}
var KY=G(EU);
var Xk=G(KY);
var Ma=G(D5);
var Xh=G(Ma);
var MJ=G(Gv);
function AKO(a){var b;b=new D_;Y(b);K(b);}
function APf(a,b){var c;c=new D_;Y(c);K(c);}
function ANW(a,b){b=new D_;Y(b);K(b);}
var Xi=G(MJ);
function APo(a,b){var c;c=new BD;Y(c);K(c);}
function AOx(a){return 0;}
function ALi(a){return A2d;}
function AIK(a){return 1;}
var Xf=G();
function AIq(a){return 0;}
function AQI(a){var b;b=new M9;Y(b);K(b);}
function ASB(a){var b;b=new CL;Y(b);K(b);}
var Q_=G(0);
var Xg=G();
var AAu=G();
function E_(){var a=this;B.call(a);a.jj=0;a.tK=0;a.iq=null;a.gG=null;a.rb=null;a.j0=null;}
function A2g(a){var b=new E_();Lz(b,a);return b;}
function Lz(a,b){a.j0=b;a.tK=b.cT;a.iq=null;}
function Fl(a){var b,c;if(a.iq!==null)return 1;while(true){b=a.jj;c=a.j0.cf.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.jj=b+1|0;}return 0;}
function ACr(a){var b;if(a.tK==a.j0.cT)return;b=new Hu;Y(b);K(b);}
function L7(a){var b,c,d,e;ACr(a);if(!Fl(a)){b=new M9;Y(b);K(b);}b=a.iq;if(b!==null){c=a.gG;if(c!==null)a.rb=c;a.gG=b;a.iq=b.cQ;}else{d=a.j0.cf.data;e=a.jj;a.jj=e+1|0;b=d[e];a.gG=b;a.iq=b.cQ;a.rb=null;}}
var UA=G(E_);
function QE(a){L7(a);return a.gG.cJ;}
var JF=G(D_);
var It=G(Bu);
var MB=G(Bu);
function AGI(){B.call(this);this.Bb=null;}
function Tt(){var a=this;B.call(a);a.qN=null;a.qO=null;}
function AQV(a){var b,c;b=a.qN;c=a.qO;F5(b.eH,c);}
function WD(){B.call(this);this.pI=null;}
function AMr(a,b){IP(a.pI,b);}
function P$(){var a=this;B.call(a);a.va=null;a.u_=null;}
function AJX(a){var b,c;b=a.va;c=a.u_;F5(b.eH,c);U0(b);}
var AE7=G();
function R0(b,c){return b.data[c];}
function Hf(){var a=this;B.call(a);a.ed=0;a.ej=0;a.l$=null;a.ni=0;a.ge=null;}
function ATG(a,b,c,d,e,f){var g=new Hf();AOA(g,a,b,c,d,e,f);return g;}
function AOA(a,b,c,d,e,f,g){a.ed=b;a.ej=c;a.l$=B$(f,g);a.ni=d;a.ge=e;}
function Wu(){EU.call(this);this.sp=null;}
function Pt(a){var b;b=new Wj;Lz(b,a.sp);return b;}
function QX(){E5.call(this);this.xr=null;}
var Ss=G(0);
var OP=G(0);
var Hx=G();
function ACY(){var a=this;Hx.call(a);a.H8=null;a.Ki=0;a.IK=0;a.F9=0;}
function V1(){var a=this;B.call(a);a.u7=null;a.u8=null;}
function AKQ(a){var b,c;b=a.u7;c=a.u8;Ue();Kd(b,c,A2h);}
function V2(){var a=this;B.call(a);a.vd=null;a.ve=null;}
function AHO(a){var b,c;b=a.vd;c=a.ve;Ue();Kd(b,c,A2i);}
function VY(){var a=this;B.call(a);a.rz=null;a.ry=null;}
function AN3(a){Kd(a.rz,a.ry,null);}
function V0(){var a=this;B.call(a);a.s3=null;a.s2=null;}
function ARe(a){var b,c,d,e,f,g,h;b=a.s3;c=a.s2;d=DY(b.bK.e);e=Gx(b.bK.e);d=VX(b.bK.fn,d,e);DZ(b.X.ch);b=b.bK;e=EY(b,c);if(d!==null){f=b.e;g=e.bm;h=e.bw;e=new Ww;e.AJ=b;e.AK=c;d.IU(f,g,h,1,e,b.iI);}}
function Vz(){B.call(this);this.sW=null;}
function APk(a){var b;b=a.sW;DZ(b.X.ch);Hn(b.bK,AAr(b),0);}
function VB(){B.call(this);this.pr=null;}
function ARd(a){var b;b=a.pr;DZ(b.X.ch);Hn(b.bK,AAr(b),1);}
function VA(){B.call(this);this.vG=null;}
function ATO(a){var b,c,d;b=a.vG;DZ(b.X.ch);c=IK(b);b=b.bK;BP(b);d=new O1;d.sr=b;SV(c,d,AB$(C(431)));}
var R2=G(0);
var A0F=null;function AFf(){A0F=new Wf;}
function AAn(){B.call(this);this.p8=null;}
function AR_(a){var b,c,d;b=a.p8;DZ(b.X.ch);c=IK(b);b=b.bK;BP(b);d=new Qg;d.sC=b;ME(c,d);}
function Za(){B.call(this);this.nT=null;}
function ANL(a,b,c){var d,e;c=a.nT;d=c.e.f;e=b.bF;b=c.fi;TT(d.z.data[e],0,b);}
function NM(){var a=this;B.call(a);a.dX=null;a.sA=null;a.rK=null;}
function NQ(a){var b,c,d,e,f,g,h;a:{b=Be(a.dX);switch(b){case 3:break;case 5:c=Pq(a);d=Mn(a);b=Be(a.dX);e=Be(a.dX);f=BH();g=0;while(g<e){BC(f,Mn(a));g=g+1|0;}h=new F6;AFo(h,c,d,4);h.gc=f;h.kO=b;break a;default:c=new CL;d=new M;O(d);V(H(d,C(432)),b);Bi(c,N(d));K(c);}h=AXU(Pq(a),Mn(a),Be(a.dX));}return h;}
function Pq(a){var b,c;b=Be(a.dX);c=Be(a.dX);return AMn(EQ(a.sA,b,c),Be(a.dX));}
function Mn(a){var b;b=Be(a.dX);if(b==(-1))return null;return Br(a.rK,b);}
function SY(){var a=this;B.call(a);a.eb=null;a.vE=null;a.wa=null;}
function Gk(a){var b,c,d,e,f;a:{b:{b=Be(a.eb);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Oy(a);d=RF(a);b=Be(a.eb);e=T5(a);f=new EC;LW(f,c,d,2);f.ho=b;f.fv=e;break a;case 4:c=Gk(a);d=Gk(a);f=new EK;LW(f,c.dM,c.dk,(-1));f.eF=c;f.gj=d;break a;case 5:f=AWH(Oy(a),RF(a),Be(a.eb));break a;case 9:c=T5(a);f=new Fu;LW(f,null,null,(-1));if(D$(c)){c=new BE;Bi(c,C(433));K(c);}f.ke=c;break a;default:break b;}f=null;break a;}c=new CL;d=new M;O(d);V(H(d,C(434)),b);Bi(c,N(d));K(c);}return f;}
function Oy(a){var b,c;b=Be(a.eb);c=Be(a.eb);return AMn(EQ(a.vE,b,c),Be(a.eb));}
function RF(a){var b;b=Be(a.eb);if(b==(-1))return null;return Br(a.wa,b);}
function T5(a){var b,c,d;b=Be(a.eb);c=BH();d=0;while(d<b){BC(c,Gk(a));d=d+1|0;}return c;}
function O5(){var a=this;B.call(a);a.oR=null;a.oS=0;a.oT=0;a.oU=null;a.oN=0;a.oP=0;}
function APx(a,b){var c,d,e,f,g,h,i,j;c=a.oR;d=a.oS;e=a.oT;f=a.oU;g=a.oN;h=a.oP;i=CF(c.bE,5.0);d=Bb((c.bE.cj.b-d|0)-i|0,Bd((i-d|0)-c.T.r.b|0,b.i.b));j=Bb((c.bE.cj.a-e|0)-i|0,Bd((i-e|0)-c.T.r.a|0,b.i.a));U(f,d+g|0,j+h|0);FI(c,f,c.S.r);}
function X1(){var a=this;B.call(a);a.uO=null;a.uQ=null;a.uP=null;a.uK=0;a.uJ=0;a.uN=0;a.uL=0;a.uZ=0;a.uY=0;a.u0=0;a.vA=0;}
function AMo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.uO;d=a.uQ;e=a.uP;f=a.uK;g=a.uJ;h=a.uN;i=a.uL;j=a.uZ;k=a.uY;l=a.u0;m=a.vA;n=CF(c.bE,5.0);o=c.S.jX();Cx(d,c.S.r);Cx(e,c.S.G);switch(f){case -1:f=Bb(h+(b.i.b-g|0)|0,c.bE.cj.b-n|0);g=o.b;h=h+i|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bd((i+b.i.b|0)-g|0,Bd(o.b,n-c.T.G.b|0));}b:{switch(j){case -1:f=Bd(n,Bb(l+(b.i.a-k|0)|0,(c.bE.cj.a+c.T.r.a|0)-n|0));g=o.a;h=l+m|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bd((m+b.i.a|0)-k|0,o.a);}FI(c,e,d);}
function X0(){var a=this;B.call(a);a.pX=null;a.pW=0.0;}
function K7(a,b){return Lp(a.pX,b,a.pW*2.0+0.875);}
var YH=G(BD);
function Yg(){B.call(this);this.tD=null;}
function AJt(a){AHc(a.tD);}
function Yf(){B.call(this);this.p7=null;}
function AIo(a){KV(a.p7);}
function Yi(){B.call(this);this.rw=null;}
function ANZ(a){AD7(a.rw);}
function Zt(){B.call(this);this.wj=null;}
function AR2(a){a.wj.w3();}
function Zs(){B.call(this);this.rF=null;}
function AM0(a){a.rF.xz();}
function Pn(){B.call(this);this.vg=null;}
function ATE(a){var b,c,d,e,f,g,h,i;b=a.vg;c=(b.pu.dQ()).data;d=R(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Ot;i.vm=b;i.vl=h;e[f]=AFi(i,h,b.X.Y.V.bg);f=f+1|0;}return d;}
function PP(){B.call(this);this.ss=null;}
function AL0(a){var b,c,d,e,f;b=a.ss.e.f;c=b.cL;d=new M;O(d);V(H(d,C(435)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.h4;d=new M;O(d);V(H(d,C(436)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.c8;e=Gf(ET(b));Zd(d,0,d.da,e);b=BA();f=b.lq;f.data[0]=10;Px(b,f,0,1);}
function PQ(){B.call(this);this.wt=null;}
function AUG(a){Ta(a.wt);}
function PR(){B.call(this);this.uA=null;}
function AR7(a){UW(a.uA);}
function PM(){B.call(this);this.oK=null;}
function AMI(a){Ik(a.oK);}
function PO(){B.call(this);this.xx=null;}
function AVG(a){JC(a.xx);}
function Yh(){B.call(this);this.vF=null;}
function APy(a,b,c){GK(BR(a.vF.e.f,b.bF),0,J(c));}
function RW(){var a=this;B.call(a);a.pF=null;a.pE=null;}
function AK8(a,b){a.pF.g(AEM(a.pE,b));}
var Jt=G(0);
function NC(){var a=this;B.call(a);a.om=null;a.ol=null;}
function ANs(a){ABs(a.om,a.ol);}
function Nn(){var a=this;B.call(a);a.tH=null;a.tI=null;}
function AHD(a){a.tH.g(a.tI);}
var Wf=G();
function ZH(){var a=this;B.call(a);a.ot=null;a.os=null;a.oy=null;a.ou=null;}
function AMT(a,b){var c,d,e,f,g,h,i;c=a.ot;d=a.os;e=a.oy;f=a.ou;if(!(b.done?1:0)){We(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new VU;c.qZ=d;c.q0=g;c.q1=f;b.then(Bl(c,"f"),Bl(e,"f"));}else{h=f.data;c=g.values();b=FS(g.name);i=h.length;f=Dp(f,i+1|0);f.data[i]=b;We(c,d,e,f);}}}
var Wj=G(E_);
function ZL(a){L7(a);return a.gG;}
var S1=G(E_);
var Wo=G(0);
var A13=null;function AXa(){AXa=Bq(Wo);AU9();}
function AU9(){A13=S(C(375));}
function SX(){var a=this;B.call(a);a.h=null;a.dO=0;a.lh=null;a.o6=0;a.gW=0;a.fg=0;a.bD=0;a.mj=null;}
function KH(a){return a.h.bV;}
function Z0(a,b,c,d){var e,f,g,h,i,j;e=BH();f=a.dO;g=0;if(c!=f)a.dO=c;a:{switch(b){case -1073741784:h=new Tr;c=a.bD+1|0;a.bD=c;Fy(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new RC;c=a.bD+1|0;a.bD=c;Fy(h,c);break a;case -33554392:h=new UB;c=a.bD+1|0;a.bD=c;Fy(h,c);break a;default:c=a.gW+1|0;a.gW=c;if(d!==null)h=AX1(c);else{h=new FM;Fy(h,0);g=1;}c=a.gW;if(c<=(-1))break a;if(c>=10)break a;a.lh.data[c]=h;break a;}h=new ZV;Fy(h,(-1));}while(true){if(Fg(a.h)&&a.h.k==(-536870788))
{d=AUd(Cg(a,2),Cg(a,64));while(!Dn(a.h)&&Fg(a.h)){i=a.h;j=i.k;if(j&&j!=(-536870788)&&j!=(-536870871))break;CA(d,Bk(i));i=a.h;if(i.bk!=(-536870788))continue;Bk(i);}i=Lq(a,d);i.Q(h);}else if(a.h.bk==(-536870788)){i=Hd(h);Bk(a.h);}else{i=QK(a,h);d=a.h;if(d.bk==(-536870788))Bk(d);}if(i!==null)BC(e,i);if(Dn(a.h))break;if(a.h.bk==(-536870871))break;}if(a.h.lG==(-536870788))BC(e,Hd(h));if(a.dO!=f&&!g){a.dO=f;d=a.h;d.gD=f;d.k=d.bk;d.e9=d.fo;j=d.ds;d.w=j+1|0;d.hW=j;Fk(d);}switch(b){case -1073741784:break;case -536870872:d
=new NA;FN(d,e,h);return d;case -268435416:d=new X$;FN(d,e,h);return d;case -134217688:d=new S2;FN(d,e,h);return d;case -67108824:d=new Ve;FN(d,e,h);return d;case -33554392:d=new DX;FN(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AXJ(Br(e,0),h);default:return AXi(e,h);}return Hd(h);}d=new JD;FN(d,e,h);return d;}
function AFO(a){var b,c,d,e,f,g,h;b=BM(4);c=(-1);d=(-1);if(!Dn(a.h)&&Fg(a.h)){e=b.data;c=Bk(a.h);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BV(3);b=e.data;b[0]=c&65535;f=a.h;g=f.bk;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bk(f);f=a.h;g=f.bk;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bk(f);return ATX(e,3);}return ATX(e,2);}if(!Cg(a,2))return ACq(b[0]);if(Cg(a,64))return ARE(b[0]);return AJ6(b[0]);}e=b.data;c=1;while(c<4&&!Dn(a.h)&&Fg(a.h)){h=c+1|0;e[c]=Bk(a.h);c=h;}if(c==1){h=e[0];if(!(A2j.Ae(h)==A2k?0:1))return ZS(a,e[0]);}if
(!Cg(a,2))return AYE(b,c);if(Cg(a,64)){f=new ZG;Pp(f,b,c);return f;}f=new Vq;Pp(f,b,c);return f;}
function QK(a,b){var c,d,e,f,g,h,i;if(Fg(a.h)&&!Ks(a.h)&&K4(a.h.k)){if(Cg(a,128)){c=AFO(a);if(!Dn(a.h)){d=a.h;e=d.bk;if(!(e==(-536870871)&&!(b instanceof FM))&&e!=(-536870788)&&!Fg(d))c=MY(a,b,c);}}else if(!PA(a.h)&&!W0(a.h)){f=new PD;O(f);while(!Dn(a.h)&&Fg(a.h)&&!PA(a.h)&&!W0(a.h)){if(!(!Ks(a.h)&&!a.h.k)&&!(!Ks(a.h)&&K4(a.h.k))){g=a.h.k;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bk(a.h);if(!MQ(e))BL(f,e&65535);else I3(f,GT(e));}if(!Cg(a,2)){c=new Tm;DH(c);c.cA
=N(f);e=f.J;c.bS=e;c.lA=APV(e);c.mn=APV(c.bS);h=0;while(h<(c.bS-1|0)){S5(c.lA,P(c.cA,h),(c.bS-h|0)-1|0);S5(c.mn,P(c.cA,(c.bS-h|0)-1|0),(c.bS-h|0)-1|0);h=h+1|0;}}else if(Cg(a,64))c=AYD(f);else{c=new Ol;DH(c);c.hZ=N(f);c.bS=f.J;}}else c=MY(a,b,ZF(a,b));}else{d=a.h;if(d.bk!=(-536870871))c=MY(a,b,ZF(a,b));else{if(b instanceof FM)K(Ce(C(30),d.bV,Pz(d)));c=Hd(b);}}a:{if(!Dn(a.h)){e=a.h.bk;if(!(e==(-536870871)&&!(b instanceof FM))&&e!=(-536870788)){f=QK(a,b);if(c instanceof C5&&!(c instanceof Fm)&&!(c instanceof CV)
&&!(c instanceof EM)){i=c;if(!f.b2(i.L)){c=new Yp;E9(c,i.L,i.d,i.ij);c.L.Q(c);}}if((f.ir()&65535)!=43)c.Q(f);else c.Q(f.L);break a;}}if(c===null)return null;c.Q(b);}if((c.ir()&65535)!=43)return c;return c.L;}
function MY(a,b,c){var d,e,f,g,h;d=a.h;e=d.bk;if(c!==null&&!(c instanceof B6)){switch(e){case -2147483606:Bk(d);d=new AAz;Di(d,c,b,e);M3();c.Q(A2l);return d;case -2147483605:Bk(d);d=new Rs;Di(d,c,b,(-2147483606));M3();c.Q(A2l);return d;case -2147483585:Bk(d);d=new Q3;Di(d,c,b,(-536870849));M3();c.Q(A2l);return d;case -2147483525:f=new Of;d=Fp(d);g=a.fg+1|0;a.fg=g;JT(f,d,c,b,(-536870849),g);M3();c.Q(A2l);return f;case -1073741782:case -1073741781:Bk(d);d=new Ti;Di(d,c,b,e);c.Q(d);return d;case -1073741761:Bk(d);d
=new Sn;Di(d,c,b,(-536870849));c.Q(b);return d;case -1073741701:h=new Wy;d=Fp(d);e=a.fg+1|0;a.fg=e;JT(h,d,c,b,(-536870849),e);c.Q(h);return h;case -536870870:case -536870869:Bk(d);if(c.ir()!=(-2147483602)){d=new CV;Di(d,c,b,e);}else if(Cg(a,32)){d=new Tk;Di(d,c,b,e);}else{d=new PS;f=Q7(a.dO);Di(d,c,b,e);d.lF=f;}c.Q(d);return d;case -536870849:Bk(d);d=new F_;Di(d,c,b,(-536870849));c.Q(b);return d;case -536870789:h=new Fr;d=Fp(d);e=a.fg+1|0;a.fg=e;JT(h,d,c,b,(-536870849),e);c.Q(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bk(d);d=new AAB;E9(d,f,b,e);f.d=d;return d;case -2147483585:Bk(d);c=new Yk;E9(c,f,b,(-2147483585));return c;case -2147483525:c=new QJ;TP(c,Fp(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bk(d);d=new Sj;E9(d,f,b,e);f.d=d;return d;case -1073741761:Bk(d);c=new VI;E9(c,f,b,(-1073741761));return c;case -1073741701:c=new S3;TP(c,Fp(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bk(d);d=AXR(f,b,e);f.d=d;return d;case -536870849:Bk(d);c
=new EM;E9(c,f,b,(-536870849));return c;case -536870789:return AWQ(Fp(d),f,b,(-536870789));default:}return c;}
function ZF(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof FM;while(true){a:{e=a.h;f=e.bk;if((f&(-2147418113))==(-2147483608)){Bk(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dO=g;else{if(f!=(-1073741784))g=a.dO;c=Z0(a,f,g,b);e=a.h;if(e.bk!=(-536870871))K(Ce(C(30),e.bV,e.ds));Bk(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bk(e);c
=ATJ(0);break a;case -2147483577:Bk(e);c=new PJ;BX(c);break a;case -2147483558:Bk(e);c=new Zi;h=a.bD+1|0;a.bD=h;AGb(c,h);break a;case -2147483550:Bk(e);c=ATJ(1);break a;case -2147483526:Bk(e);c=new YL;BX(c);break a;case -536870876:Bk(e);a.bD=a.bD+1|0;if(Cg(a,8)){if(Cg(a,1)){c=AW8(a.bD);break a;}c=AWq(a.bD);break a;}if(Cg(a,1)){c=AXn(a.bD);break a;}c=AX7(a.bD);break a;case -536870866:Bk(e);if(Cg(a,32)){c=AYo();break a;}c=AXY(Q7(a.dO));break a;case -536870821:Bk(e);i=0;c=a.h;if(c.bk==(-536870818)){i=1;Bk(c);}c
=Lq(a,Gq(a,i));c.Q(b);e=a.h;if(e.bk!=(-536870819))K(Ce(C(30),e.bV,e.ds));Qm(e,1);Bk(a.h);break a;case -536870818:Bk(e);a.bD=a.bD+1|0;if(!Cg(a,8)){c=new K$;BX(c);break a;}c=new Ou;e=Q7(a.dO);BX(c);c.sH=e;break a;case 0:j=e.fo;if(j!==null)c=Lq(a,j);else{if(Dn(e)){c=Hd(b);break a;}c=ACq(f&65535);}Bk(a.h);break a;default:break b;}Bk(e);c=new K$;BX(c);break a;}h=(f&2147483647)-48|0;if(a.gW<h)K(Ce(C(30),Fv(e),Pz(a.h)));Bk(e);a.bD=a.bD+1|0;c=!Cg(a,2)?AWv(h,a.bD):Cg(a,64)?AW9(h,a.bD):AYy(h,a.bD);a.lh.data[h].le=1;a.o6
=1;break a;}if(f>=0&&!Hg(e)){c=ZS(a,f);Bk(a.h);}else if(f==(-536870788))c=Hd(b);else{if(f!=(-536870871)){b=new Jn;c=!Hg(a.h)?Zc(f&65535):a.h.fo.cO();e=a.h;J6(b,c,e.bV,e.ds);K(b);}if(d){b=new Jn;e=a.h;J6(b,C(30),e.bV,e.ds);K(b);}c=Hd(b);}}}if(f!=(-16777176))break;}return c;}
function Gq(a,b){var c,d,e,f,g,h,i,j,$$je;c=AUd(Cg(a,2),Cg(a,64));ED(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dn(a.h))break a;h=a.h;b=h.bk;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CA(c,d);d=Bk(a.h);h=a.h;if(h.bk!=(-536870874)){d=38;break d;}if(h.k==(-536870821)){Bk(h);e=1;d=(-1);break d;}Bk(h);if(g){c=Gq(a,0);break d;}if(a.h.bk==(-536870819))break d;YT(c,Gq(a,0));break d;case -536870867:if(!g){b=h.k;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bk(h);h=a.h;i=h.bk;if(Hg(h))break c;if
(i<0){j=a.h.k;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(K4(i))break e;i=i&65535;break e;}catch($$e){$$je=Er($$e);if($$je instanceof Ef){break b;}else{throw $$e;}}}try{B4(c,d,i);}catch($$e){$$je=Er($$e);if($$je instanceof Ef){break b;}else{throw $$e;}}Bk(a.h);d=(-1);break d;}}if(d>=0)CA(c,d);d=45;Bk(a.h);break d;case -536870821:if(d>=0){CA(c,d);d=(-1);}Bk(a.h);j=0;h=a.h;if(h.bk==(-536870818)){Bk(h);j=1;}if(!e)AAM(c,Gq(a,j));else YT(c,Gq(a,j));e=0;Bk(a.h);break d;case -536870819:if(d>=0)CA(c,
d);d=93;Bk(a.h);break d;case -536870818:if(d>=0)CA(c,d);d=94;Bk(a.h);break d;case 0:if(d>=0)CA(c,d);h=a.h.fo;if(h===null)d=0;else{AHo(c,h);d=(-1);}Bk(a.h);break d;default:}if(d>=0)CA(c,d);d=Bk(a.h);}g=0;}K(Ce(C(30),KH(a),a.h.ds));}K(Ce(C(30),KH(a),a.h.ds));}if(!f){if(d>=0)CA(c,d);return c;}K(Ce(C(30),KH(a),a.h.ds-1|0));}
function ZS(a,b){var c,d,e;c=MQ(b);if(Cg(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AJ6(b&65535);}if(Cg(a,64)&&b>128){if(c){d=new Ns;DH(d);d.bS=2;d.r2=G3(G0(b));return d;}if(QA(b))return AP5(b&65535);if(!T$(b))return ARE(b&65535);return ANh(b&65535);}}if(!c){if(QA(b))return AP5(b&65535);if(!T$(b))return ACq(b&65535);return ANh(b&65535);}d=new D6;DH(d);d.bS=2;d.gn=b;e=(GT(b)).data;d.kA=e[0];d.ja=e[1];return d;}
function Lq(a,b){var c,d,e;if(!AEn(b)){if(!b.N){if(b.hC())return AMP(b);return ATK(b);}if(!b.hC())return ANY(b);c=new JV;V5(c,b);return c;}c=ABh(b);d=new NN;BX(d);d.qQ=c;d.x4=c.bj;if(!b.N){if(b.hC())return AFa(AMP(H2(b)),d);return AFa(ATK(H2(b)),d);}if(!b.hC())return AFa(ANY(H2(b)),d);c=new Sb;e=new JV;V5(e,H2(b));AG8(c,e,d);return c;}
function H6(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cg(a,b){return (a.dO&b)!=b?0:1;}
function Uv(){B.call(this);this.pT=null;}
function AI_(a,b){b.gT=a.pT.da;}
function UJ(){B.call(this);this.vT=null;}
function AS8(a,b){b.eA=a.vT.da.cM;}
var Gh=G(Co);
var A2i=null;var A2h=null;var A2m=null;function Ue(){Ue=Bq(Gh);AVN();}
function ASH(a,b){var c=new Gh();ADz(c,a,b);return c;}
function ADz(a,b,c){Ue();Dd(a,b,c);}
function AVN(){var b;A2i=ASH(C(437),0);b=ASH(C(438),1);A2h=b;A2m=I(Gh,[A2i,b]);}
function O1(){B.call(this);this.sr=null;}
function AM6(a,b){Dv(a.sr,b);}
function Xe(){B.call(this);this.qh=null;}
function AKq(a,b){b.gT=a.qh;}
var G8=G(0);
function W4(){B.call(this);this.t$=null;}
function AN_(a,b,c,d){Kj(a.t$,b,c.bF,d.bF);}
function W2(){B.call(this);this.qm=null;}
function AJh(a,b,c,d){Kj(a.qm,b,c.bF,d.bF);}
function IF(){B.call(this);this.ny=0;}
var A2n=null;var A2o=null;var A2p=null;function AQ1(a){var b=new IF();AFd(b,a);return b;}
function AFd(a,b){a.ny=b;}
function ADg(a){return a.ny;}
function Qu(b){return !b?A2o:A2n;}
function ABx(){A2n=AQ1(1);A2o=AQ1(0);A2p=F($rt_booleancls());}
var Gu=G(0);
var AGC=G();
var Qb=G(0);
var AGD=G();
function Ud(){B.call(this);this.xV=null;}
function AQK(a,b,c,d){IR(a.xV,b,c.bF,d.bF);}
var Ub=G();
function AOq(a,b){return b.db.cy>=0?0:1;}
var Ua=G();
function AS9(a,b){var c;a:{b:{b=b;if(b!==null){b=b.dM;if(b===null)break b;if(b.cy>=0)break b;}c=1;break a;}c=0;}return c;}
function T_(){B.call(this);this.nY=null;}
function ARm(a,b,c,d){IR(a.nY,b,c.bF,d.bF);}
function BK(){var a=this;B.call(a);a.d=null;a.cp=0;a.qg=null;a.ij=0;}
var AZc=0;function BX(a){var b;b=AZc;AZc=b+1|0;a.qg=L6(b);}
function Lo(a,b){var c;c=AZc;AZc=c+1|0;a.qg=L6(c);a.d=b;}
function H$(a,b,c,d){var e;e=d.x;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function In(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AKu(a,b){a.ij=b;}
function AJK(a){return a.ij;}
function ASZ(a){return a.d;}
function AT3(a,b){a.d=b;}
function AT2(a,b){return 1;}
function AU4(a){return null;}
function JN(a){var b;a.cp=1;b=a.d;if(b!==null){if(!b.cp){b=b.fV();if(b!==null){a.d.cp=1;a.d=b;}a.d.eM();}else if(b instanceof GW&&b.eT.le)a.d=b.d;}}
function AHg(){AZc=1;}
var Vi=G();
var A1_=null;function AXK(){AXK=Bq(Vi);AIN();}
function AIN(){var b,c;Ue();b=BM((A2m.ft()).data.length);c=b.data;A1_=b;c[A2i.dj]=1;c[A2h.dj]=2;}
function Vy(){B.call(this);this.ph=null;}
function AJA(a,b){V6(IK(a.ph),b,A0O,AB$(C(439)));}
function U8(){B.call(this);this.wn=null;}
function AVZ(a,b){var c,d;c=a.wn;d=b.ie;b=new M;O(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function Ot(){var a=this;B.call(a);a.vm=null;a.vl=null;}
function AUc(a){var b,c;b=a.vm;c=a.vl;b.iK.uM(c);}
function OH(){var a=this;B.call(a);a.r3=null;a.r4=null;a.r5=0;a.r6=0;}
function AKC(a,b){b=b;Ej(a.r3,a.r4,b,a.r5,a.r6);}
function OJ(){var a=this;B.call(a);a.wg=null;a.wc=null;a.wd=0;a.wf=0;}
function AQS(a,b){b=b;Ej(a.wg,a.wc,b,a.wd,a.wf);}
function CT(){var a=this;BK.call(a);a.le=0;a.dV=0;}
var A2l=null;function M3(){M3=Bq(CT);ALE();}
function AX1(a){var b=new CT();Fy(b,a);return b;}
function Fy(a,b){M3();BX(a);a.dV=b;}
function AI5(a,b,c,d){var e,f;e=I_(d,a.dV);Kl(d,a.dV,b);f=a.d.c(b,c,d);if(f<0)Kl(d,a.dV,e);return f;}
function AO7(a){return a.dV;}
function AJr(a,b){return 0;}
function ALE(){var b;b=new PE;BX(b);A2l=b;}
function Ha(){var a=this;B.call(a);a.bi=null;a.gD=0;a.fc=0;a.v8=0;a.lG=0;a.bk=0;a.k=0;a.tj=0;a.fo=null;a.e9=null;a.w=0;a.iC=0;a.ds=0;a.hW=0;a.bV=null;}
var A2q=null;var A2j=null;var A2k=0;function Qm(a,b){if(b>0&&b<3)a.fc=b;if(b==1){a.k=a.bk;a.e9=a.fo;a.w=a.hW;a.hW=a.ds;Fk(a);}}
function Hg(a){return a.fo===null?0:1;}
function Ks(a){return a.e9===null?0:1;}
function Bk(a){Fk(a);return a.lG;}
function Fp(a){var b;b=a.fo;Fk(a);return b;}
function Fk(a){var b,c,d,e,f,g,h,$$je;a.lG=a.bk;a.bk=a.k;a.fo=a.e9;a.ds=a.hW;a.hW=a.w;while(true){b=0;c=a.w>=a.bi.data.length?0:Mj(a);a.k=c;a.e9=null;if(a.fc==4){if(c!=92)return;c=a.w;d=a.bi.data;c=c>=d.length?0:d[B5(a)];a.k=c;switch(c){case 69:break;default:a.k=92;a.w=a.iC;return;}a.fc=a.v8;a.k=a.w>(a.bi.data.length-2|0)?0:Mj(a);}a:{c=a.k;if(c!=92){e=a.fc;if(e==1)switch(c){case 36:a.k=(-536870876);break a;case 40:if(a.bi.data[a.w]!=63){a.k=(-2147483608);break a;}B5(a);c=a.bi.data[a.w];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.k=(-134217688);B5(a);break b;default:K(Ce(C(30),Fv(a),a.w));}a.k=(-67108824);B5(a);}else{switch(c){case 33:break;case 60:B5(a);c=a.bi.data[a.w];e=1;break b;case 61:a.k=(-536870872);B5(a);break b;case 62:a.k=(-33554392);B5(a);break b;default:f=AHi(a);a.k=f;if(f<256){a.gD=f;f=f<<16;a.k=f;a.k=(-1073741784)|f;break b;}f=f&255;a.k=f;a.gD=f;f=f<<16;a.k=f;a.k=(-16777176)|f;break b;}a.k=(-268435416);B5(a);}}if(!e)break;}break a;case 41:a.k=(-536870871);break a;case 42:case 43:case 63:e
=a.w;d=a.bi.data;switch(e>=d.length?42:d[e]){case 43:a.k=c|(-2147483648);B5(a);break a;case 63:a.k=c|(-1073741824);B5(a);break a;default:}a.k=c|(-536870912);break a;case 46:a.k=(-536870866);break a;case 91:a.k=(-536870821);Qm(a,2);break a;case 93:if(e!=2)break a;a.k=(-536870819);break a;case 94:a.k=(-536870818);break a;case 123:a.e9=AGE(a,c);break a;case 124:a.k=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.k=(-536870874);break a;case 45:a.k=(-536870867);break a;case 91:a.k=(-536870821);break a;case 93:a.k
=(-536870819);break a;case 94:a.k=(-536870818);break a;default:}}else{c=a.w>=(a.bi.data.length-2|0)?(-1):Mj(a);c:{a.k=c;switch(c){case -1:K(Ce(C(30),Fv(a),a.w));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.k
=AEW(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fc!=1)break a;a.k=(-2147483648)|c;break a;case 65:a.k=(-2147483583);break a;case 66:a.k=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(Ce(C(30),Fv(a),a.w));case 68:case 83:case 87:case 100:case 115:case 119:a.e9=TG(EQ(a.bi,
a.iC,1),0);a.k=0;break a;case 71:a.k=(-2147483577);break a;case 80:case 112:break c;case 81:a.v8=a.fc;a.fc=4;b=1;break a;case 90:a.k=(-2147483558);break a;case 97:a.k=7;break a;case 98:a.k=(-2147483550);break a;case 99:c=a.w;d=a.bi.data;if(c>=(d.length-2|0))K(Ce(C(30),Fv(a),a.w));a.k=d[B5(a)]&31;break a;case 101:a.k=27;break a;case 102:a.k=12;break a;case 110:a.k=10;break a;case 114:a.k=13;break a;case 116:a.k=9;break a;case 117:a.k=Ru(a,4);break a;case 120:a.k=Ru(a,2);break a;case 122:a.k=(-2147483526);break a;default:}break a;}g
=AEE(a);h=0;if(a.k==80)h=1;try{a.e9=TG(g,h);}catch($$e){$$je=Er($$e);if($$je instanceof JY){K(Ce(C(30),Fv(a),a.w));}else{throw $$e;}}a.k=0;}}if(b)continue;else break;}}
function AEE(a){var b,c,d,e,f,g;b=new M;Gl(b,10);c=a.w;d=a.bi;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EQ(d,B5(a),1);f=new M;O(f);H(H(f,C(440)),b);return N(f);}B5(a);c=0;a:{while(true){g=a.w;d=a.bi.data;if(g>=(d.length-2|0))break;c=d[B5(a)];if(c==125)break a;BL(b,c);}}if(c!=125)K(Ce(C(30),a.bV,a.w));}if(!b.J)K(Ce(C(30),a.bV,a.w));f=N(b);if(J(f)==1){b=new M;O(b);H(H(b,C(440)),f);return N(b);}b:{c:{if(J(f)>3){if(IE(f,C(440)))break c;if(IE(f,C(441)))break c;}break b;}f=Do(f,2);}return f;}
function AGE(a,b){var c,d,e,f,g,$$je;c=new M;Gl(c,4);d=(-1);e=2147483647;a:{while(true){f=a.w;g=a.bi.data;if(f>=g.length)break a;b=g[B5(a)];if(b==125)break a;if(b==44&&d<0)try{d=Kg(D4(c),10);AGM(c,0,ABy(c));continue;}catch($$e){$$je=Er($$e);if($$je instanceof Dj){break;}else{throw $$e;}}BL(c,b&65535);}K(Ce(C(30),a.bV,a.w));}if(b!=125)K(Ce(C(30),a.bV,a.w));if(c.J>0)b:{try{e=Kg(D4(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Er($$e);if($$je instanceof Dj){}else{throw $$e;}}K(Ce(C(30),a.bV,a.w));}else if
(d<0)K(Ce(C(30),a.bV,a.w));if((d|e|(e-d|0))<0)K(Ce(C(30),a.bV,a.w));b=a.w;g=a.bi.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.k=(-2147483525);B5(a);break c;case 63:a.k=(-1073741701);B5(a);break c;default:}a.k=(-536870789);}c=new N3;c.fb=d;c.e8=e;return c;}
function Fv(a){return a.bV;}
function Dn(a){return !a.bk&&!a.k&&a.w==a.tj&&!Hg(a)?1:0;}
function K4(b){return b<0?0:1;}
function Fg(a){return !Dn(a)&&!Hg(a)&&K4(a.bk)?1:0;}
function PA(a){var b;b=a.bk;return b<=56319&&b>=55296?1:0;}
function W0(a){var b;b=a.bk;return b<=57343&&b>=56320?1:0;}
function T$(b){return b<=56319&&b>=55296?1:0;}
function QA(b){return b<=57343&&b>=56320?1:0;}
function Ru(a,b){var c,d,e,f,$$je;c=new M;Gl(c,b);d=a.bi.data.length-2|0;e=0;while(true){f=BG(e,b);if(f>=0)break;if(a.w>=d)break;BL(c,a.bi.data[B5(a)]);e=e+1|0;}if(!f)a:{try{b=Kg(D4(c),16);}catch($$e){$$je=Er($$e);if($$je instanceof Dj){break a;}else{throw $$e;}}return b;}K(Ce(C(30),a.bV,a.w));}
function AEW(a){var b,c,d,e,f,g;b=3;c=1;d=a.bi.data;e=d.length-2|0;f=Wq(d[a.w],8);switch(f){case -1:break;default:if(f>3)b=2;B5(a);a:{while(true){if(c>=b)break a;g=a.w;if(g>=e)break a;g=Wq(a.bi.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B5(a);c=c+1|0;}}return f;}K(Ce(C(30),a.bV,a.w));}
function AHi(a){var b,c,d,e;b=1;c=a.gD;a:while(true){d=a.w;e=a.bi.data;if(d>=e.length)K(Ce(C(30),a.bV,d));b:{c:{switch(e[d]){case 41:B5(a);return c|256;case 45:if(!b)K(Ce(C(30),a.bV,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B5(a);}B5(a);return c;}
function B5(a){var b,c,d,e,f;b=a.w;a.iC=b;if(!(a.gD&4))a.w=b+1|0;else{c=a.bi.data.length-2|0;a.w=b+1|0;a:while(true){d=a.w;if(d<c&&SZ(a.bi.data[d])){a.w=a.w+1|0;continue;}d=a.w;if(d>=c)break;e=a.bi.data;if(e[d]!=35)break;a.w=d+1|0;while(true){f=a.w;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.w=f+1|0;}}}return a.iC;}
function AGo(b){return A2q.FE(b);}
function Mj(a){var b,c,d,e;b=a.bi.data[B5(a)];if(CI(b)){c=a.iC+1|0;d=a.bi.data;if(c<d.length){e=d[c];if(C7(e)){B5(a);return EE(b,e);}}}return b;}
function Pz(a){return a.ds;}
function Jn(){var a=this;BE.call(a);a.zW=null;a.zv=null;a.rN=0;}
function Ce(a,b,c){var d=new Jn();J6(d,a,b,c);return d;}
function J6(a,b,c,d){Y(a);a.rN=(-1);a.zW=b;a.zv=c;a.rN=d;}
function Zl(){B.call(this);this.vU=null;}
function AQ3(a,b){var c,d;c=a.vU;d=0;while(d<b.length){ABs(c,b[d]);d=d+1|0;}}
var AEw=G(0);
function VU(){var a=this;B.call(a);a.qZ=null;a.q0=null;a.q1=null;}
function AQA(a,b){a.qZ.g(AWr(a.q0,b,a.q1));}
var Tr=G(CT);
function AIt(a,b,c,d){var e;e=a.dV;BQ(d,e,b-Dr(d,e)|0);return a.d.c(b,c,d);}
function ASq(a,b){return 0;}
var ZV=G(CT);
function AKr(a,b,c,d){return b;}
var RC=G(CT);
function AJH(a,b,c,d){if(Dr(d,a.dV)!=b)b=(-1);return b;}
function UB(){CT.call(this);this.oO=0;}
function AIB(a,b,c,d){var e;e=a.dV;BQ(d,e,b-Dr(d,e)|0);a.oO=b;return b;}
function AQM(a,b){return 0;}
var FM=G(CT);
function AUm(a,b,c,d){if(d.kc!=1&&b!=d.x)return (-1);d.jA=1;Kl(d,0,b);return b;}
function B6(){BK.call(this);this.bS=0;}
function DH(a){BX(a);a.bS=1;}
function AVF(a,b,c,d){var e;if((b+a.b9()|0)>d.x){d.dF=1;return (-1);}e=a.bC(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function ATu(a){return a.bS;}
function ANB(a,b){return 1;}
var AGa=G(B6);
function Hd(a){var b=new AGa();APe(b,a);return b;}
function APe(a,b){Lo(a,b);a.bS=1;a.ij=1;a.bS=0;}
function ASR(a,b,c){return 0;}
function ALJ(a,b,c,d){var e,f,g;e=d.x;f=d.cX;while(true){g=BG(b,e);if(g>0)return (-1);if(g<0&&C7(P(c,b))&&b>f&&CI(P(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AKi(a,b,c,d,e){var f,g;f=e.x;g=e.cX;while(true){if(c<b)return (-1);if(c<f&&C7(P(d,c))&&c>g&&CI(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AIz(a,b){return 0;}
function B2(){var a=this;BK.call(a);a.bM=null;a.eT=null;a.bb=0;}
function AXi(a,b){var c=new B2();FN(c,a,b);return c;}
function FN(a,b,c){BX(a);a.bM=b;a.eT=c;a.bb=c.dV;}
function AMt(a,b,c,d){var e,f,g,h;if(a.bM===null)return (-1);e=FR(d,a.bb);DF(d,a.bb,b);f=a.bM.j;g=0;while(true){if(g>=f){DF(d,a.bb,e);return (-1);}h=(Br(a.bM,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AQC(a,b){a.eT.d=b;}
function AOy(a,b){var c;a:{c=a.bM;if(c!==null){c=BZ(c);while(true){if(!B1(c))break a;if(!(B3(c)).b2(b))continue;else return 1;}}}return 0;}
function ARu(a,b){return I_(b,a.bb)>=0&&FR(b,a.bb)==I_(b,a.bb)?0:1;}
function AKe(a){var b,c,d,e;a.cp=1;b=a.eT;if(b!==null&&!b.cp)JN(b);a:{b=a.bM;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Br(a.bM,d);e=b.fV();if(e===null)e=b;else{b.cp=1;Ey(a.bM,d);Th(a.bM,d,e);}if(!e.cp)e.eM();d=d+1|0;}}}if(a.d!==null)JN(a);}
var JD=G(B2);
function AQm(a,b,c,d){var e,f,g,h;e=Dr(d,a.bb);BQ(d,a.bb,b);f=a.bM.j;g=0;while(true){if(g>=f){BQ(d,a.bb,e);return (-1);}h=(Br(a.bM,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ARP(a,b){return !Dr(b,a.bb)?0:1;}
var DX=G(JD);
function AKV(a,b,c,d){var e,f,g;e=Dr(d,a.bb);BQ(d,a.bb,b);f=a.bM.j;g=0;while(g<f){if((Br(a.bM,g)).c(b,c,d)>=0)return a.d.c(a.eT.oO,c,d);g=g+1|0;}BQ(d,a.bb,e);return (-1);}
function ARA(a,b){a.d=b;}
var NA=G(DX);
function AQx(a,b,c,d){var e,f;e=a.bM.j;f=0;while(f<e){if((Br(a.bM,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AT8(a,b){return 0;}
var X$=G(DX);
function AJl(a,b,c,d){var e,f;e=a.bM.j;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Br(a.bM,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ATA(a,b){return 0;}
var S2=G(DX);
function AJ_(a,b,c,d){var e,f,g,h;e=a.bM.j;f=d.jH?0:d.cX;a:{g=a.d.c(b,c,d);if(g>=0){BQ(d,a.bb,b);h=0;while(true){if(h>=e)break a;if((Br(a.bM,h)).cv(f,b,c,d)>=0){BQ(d,a.bb,(-1));return g;}h=h+1|0;}}}return (-1);}
function AV6(a,b){return 0;}
var Ve=G(DX);
function AHX(a,b,c,d){var e,f;e=a.bM.j;BQ(d,a.bb,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Br(a.bM,f)).cv(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ASb(a,b){return 0;}
function GW(){B2.call(this);this.c$=null;}
function AXJ(a,b){var c=new GW();ACe(c,a,b);return c;}
function ACe(a,b,c){BX(a);a.c$=b;a.eT=c;a.bb=c.dV;}
function AIk(a,b,c,d){var e,f;e=FR(d,a.bb);DF(d,a.bb,b);f=a.c$.c(b,c,d);if(f>=0)return f;DF(d,a.bb,e);return (-1);}
function AOS(a,b,c,d){var e;e=a.c$.cs(b,c,d);if(e>=0)DF(d,a.bb,e);return e;}
function ASv(a,b,c,d,e){var f;f=a.c$.cv(b,c,d,e);if(f>=0)DF(e,a.bb,f);return f;}
function AOp(a,b){return a.c$.b2(b);}
function AQG(a){var b;b=new N$;ACe(b,a.c$,a.eT);a.d=b;return b;}
function AU8(a){var b;a.cp=1;b=a.eT;if(b!==null&&!b.cp)JN(b);b=a.c$;if(b!==null&&!b.cp){b=b.fV();if(b!==null){a.c$.cp=1;a.c$=b;}a.c$.eM();}}
var Hc=G();
function X(){var a=this;Hc.call(a);a.bj=0;a.cn=0;a.M=null;a.ki=null;a.k8=null;a.N=0;}
var A2r=null;function Qi(){Qi=Bq(X);AKF();}
function Bv(a){var b;Qi();b=new Zb;b.C=BM(64);a.M=b;}
function AJn(a){return null;}
function AIS(a){return a.M;}
function AEn(a){var b,c,d,e,f;if(!a.cn)b=HK(a.M,0)>=2048?0:1;else{a:{c=a.M;b=0;d=c.by;if(b<d){e=c.C.data;f=(e[0]^(-1))>>>0|0;if(f)b=I0(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+I0(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AMO(a){return a.N;}
function ATm(a){return a;}
function ABh(a){var b,c;if(a.k8===null){b=a.fl();c=new Yo;c.An=a;c.pc=b;Bv(c);a.k8=c;ED(c,a.cn);}return a.k8;}
function H2(a){var b,c;if(a.ki===null){b=a.fl();c=new Ym;c.z0=a;c.vu=b;c.wp=a;Bv(c);a.ki=c;ED(c,a.bj);a.ki.N=a.N;}return a.ki;}
function AU1(a){return 0;}
function ED(a,b){var c;c=a.bj;if(c^b){a.bj=c?0:1;a.cn=a.cn?0:1;}if(!a.N)a.N=1;return a;}
function ALQ(a){return a.bj;}
function KZ(b,c){Qi();return b.l(c);}
function IY(b,c){var d,e;Qi();if(b.dA()!==null&&c.dA()!==null){b=b.dA();c=c.dA();d=Bb(b.C.data.length,c.C.data.length);e=0;a:{while(e<d){if(b.C.data[e]&c.C.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function TG(b,c){var d,e,f;Qi();d=0;while(true){AR$();e=A2s.data;if(d>=e.length){f=new JY;Bi(f,C(30));f.AP=C(30);f.Au=b;K(f);}e=e[d].data;if(Bn(b,e[0]))break;d=d+1|0;}return AFI(e[1],c);}
function AKF(){var b;b=new Hy;AR$();A2r=b;}
function AB3(){var a=this;X.call(a);a.mw=0;a.oL=0;a.gX=0;a.l6=0;a.ec=0;a.fO=0;a.H=null;a.bJ=null;}
function Ds(){var a=new AB3();AVR(a);return a;}
function AUd(a,b){var c=new AB3();AKt(c,a,b);return c;}
function AVR(a){Bv(a);a.H=AV9();}
function AKt(a,b,c){Bv(a);a.H=AV9();a.mw=b;a.oL=c;}
function CA(a,b){a:{if(a.mw){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ec){Nb(a.H,H6(b&65535));break a;}Me(a.H,H6(b&65535));break a;}if(a.oL&&b>128){a.gX=1;b=G3(G0(b));}}}if(!(!T$(b)&&!QA(b))){if(a.l6)Nb(a.M,b-55296|0);else Me(a.M,b-55296|0);}if(a.ec)Nb(a.H,b);else Me(a.H,b);if(!a.N&&MQ(b))a.N=1;return a;}
function AHo(a,b){var c,d,e;if(!a.N&&b.N)a.N=1;if(a.l6){if(!b.cn)Ga(a.M,b.fl());else De(a.M,b.fl());}else if(!b.cn)F8(a.M,b.fl());else{FB(a.M,b.fl());De(a.M,b.fl());a.cn=a.cn?0:1;a.l6=1;}if(!a.fO&&b.dA()!==null){if(a.ec){if(!b.bj)Ga(a.H,b.dA());else De(a.H,b.dA());}else if(!b.bj)F8(a.H,b.dA());else{FB(a.H,b.dA());De(a.H,b.dA());a.bj=a.bj?0:1;a.ec=1;}}else{c=a.bj;d=a.bJ;if(d!==null){if(!c){e=new P8;e.yo=a;e.wY=c;e.v5=d;e.vQ=b;Bv(e);a.bJ=e;}else{e=new P9;e.AY=a;e.sy=c;e.sb=d;e.rp=b;Bv(e);a.bJ=e;}}else{if(c&&!a.ec
&&MT(a.H)){d=new P5;d.zu=a;d.sm=b;Bv(d);a.bJ=d;}else if(!c){d=new P3;d.lL=a;d.kN=c;d.p3=b;Bv(d);a.bJ=d;}else{d=new P4;d.mJ=a;d.kW=c;d.vZ=b;Bv(d);a.bJ=d;}a.fO=1;}}return a;}
function B4(a,b,c){var d,e,f,g,h;if(b>c){d=new BE;Y(d);K(d);}a:{b:{if(!a.mw){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CA(a,b);b=b+1|0;}}if(!a.ec)Iw(a.H,b,c+1|0);else{d=a.H;c=c+1|0;if(b>c){d=new BD;Y(d);K(d);}e=d.by;if(b<e){f=Bb(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.C.data;h[g]=h[g]&(IT(d,b)|If(d,f));}else{h=d.C.data;h[g]=h[g]&IT(d,b);e=g+1|0;while(e<c){d.C.data[e]=0;e=e+1|0;}if(f&31){h=d.C.data;h[c]=h[c]&If(d,f);}}HB(d);}}}}return a;}
function AAM(a,b){var c,d,e;if(!a.N&&b.N)a.N=1;if(b.gX)a.gX=1;c=a.cn;if(!(c^b.cn)){if(!c)F8(a.M,b.M);else De(a.M,b.M);}else if(c)Ga(a.M,b.M);else{FB(a.M,b.M);De(a.M,b.M);a.cn=1;}if(!a.fO&&CY(b)!==null){c=a.bj;if(!(c^b.bj)){if(!c)F8(a.H,CY(b));else De(a.H,CY(b));}else if(c)Ga(a.H,CY(b));else{FB(a.H,CY(b));De(a.H,CY(b));a.bj=1;}}else{c=a.bj;d=a.bJ;if(d!==null){if(!c){e=new PW;e.x$=a;e.uI=c;e.vY=d;e.wF=b;Bv(e);a.bJ=e;}else{e=new QP;e.yx=a;e.wA=c;e.ok=d;e.oV=b;Bv(e);a.bJ=e;}}else{if(!a.ec&&MT(a.H)){if(!c){d=new P6;d.AZ
=a;d.q9=b;Bv(d);a.bJ=d;}else{d=new P7;d.yA=a;d.wl=b;Bv(d);a.bJ=d;}}else if(!c){d=new P_;d.uT=a;d.sT=b;d.sf=c;Bv(d);a.bJ=d;}else{d=new Qa;d.tl=a;d.tz=b;d.tN=c;Bv(d);a.bJ=d;}a.fO=1;}}}
function YT(a,b){var c,d,e;if(!a.N&&b.N)a.N=1;if(b.gX)a.gX=1;c=a.cn;if(!(c^b.cn)){if(!c)De(a.M,b.M);else F8(a.M,b.M);}else if(!c)Ga(a.M,b.M);else{FB(a.M,b.M);De(a.M,b.M);a.cn=0;}if(!a.fO&&CY(b)!==null){c=a.bj;if(!(c^b.bj)){if(!c)De(a.H,CY(b));else F8(a.H,CY(b));}else if(!c)Ga(a.H,CY(b));else{FB(a.H,CY(b));De(a.H,CY(b));a.bj=0;}}else{c=a.bj;d=a.bJ;if(d!==null){if(!c){e=new PY;e.ym=a;e.uW=c;e.pa=d;e.sv=b;Bv(e);a.bJ=e;}else{e=new PZ;e.yH=a;e.t8=c;e.n8=d;e.uG=b;Bv(e);a.bJ=e;}}else{if(!a.ec&&MT(a.H)){if(!c){d=new PU;d.yC
=a;d.qD=b;Bv(d);a.bJ=d;}else{d=new PV;d.AV=a;d.qM=b;Bv(d);a.bJ=d;}}else if(!c){d=new P0;d.xR=a;d.wU=b;d.tt=c;Bv(d);a.bJ=d;}else{d=new PT;d.tr=a;d.uh=b;d.sz=c;Bv(d);a.bJ=d;}a.fO=1;}}}
function C4(a,b){var c;c=a.bJ;if(c!==null)return a.bj^c.l(b);return a.bj^DA(a.H,b);}
function CY(a){if(!a.fO)return a.H;return null;}
function ALD(a){return a.M;}
function ATT(a){var b,c;if(a.bJ!==null)return a;b=CY(a);c=new PX;c.x5=a;c.jd=b;Bv(c);return ED(c,a.bj);}
function APJ(a){var b,c,d;b=new M;O(b);c=HK(a.H,0);while(c>=0){I3(b,GT(c));BL(b,124);c=HK(a.H,c+1|0);}d=b.J;if(d>0)X_(b,d-1|0);return N(b);}
function ALU(a){return a.gX;}
function JY(){var a=this;Bu.call(a);a.AP=null;a.Au=null;}
function Ee(){BK.call(this);this.L=null;}
function Di(a,b,c,d){Lo(a,c);a.L=b;a.ij=d;}
function AVQ(a){return a.L;}
function ASx(a,b){return !a.L.b2(b)&&!a.d.b2(b)?0:1;}
function AUf(a,b){return 1;}
function APc(a){var b;a.cp=1;b=a.d;if(b!==null&&!b.cp){b=b.fV();if(b!==null){a.d.cp=1;a.d=b;}a.d.eM();}b=a.L;if(b!==null){if(!b.cp){b=b.fV();if(b!==null){a.L.cp=1;a.L=b;}a.L.eM();}else if(b instanceof GW&&b.eT.le)a.L=b.d;}}
function C5(){Ee.call(this);this.be=null;}
function AXR(a,b,c){var d=new C5();E9(d,a,b,c);return d;}
function E9(a,b,c,d){Di(a,b,c,d);a.be=b;}
function AH0(a,b,c,d){var e,f;e=0;a:{while((b+a.be.b9()|0)<=d.x){f=a.be.bC(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.be.b9()|0;e=e+(-1)|0;}return f;}
function Fm(){C5.call(this);this.kb=null;}
function AWQ(a,b,c,d){var e=new Fm();TP(e,a,b,c,d);return e;}
function TP(a,b,c,d,e){E9(a,c,d,e);a.kb=b;}
function AI7(a,b,c,d){var e,f,g,h,i;e=a.kb;f=e.fb;g=e.e8;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.b9()|0)>d.x)break a;i=a.be.bC(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.be.b9()|0;h=h+(-1)|0;}return i;}if((b+a.be.b9()|0)>d.x){d.dF=1;return (-1);}i=a.be.bC(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CV=G(Ee);
function AIj(a,b,c,d){var e;if(!a.L.K(d))return a.d.c(b,c,d);e=a.L.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var EM=G(C5);
function AO1(a,b,c,d){var e;e=a.L.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function AV_(a,b){a.d=b;a.L.Q(b);}
var Yp=G(C5);
function AVw(a,b,c,d){while((b+a.be.b9()|0)<=d.x&&a.be.bC(b,c)>0){b=b+a.be.b9()|0;}return a.d.c(b,c,d);}
function APF(a,b,c,d){var e,f,g;e=a.d.cs(b,c,d);if(e<0)return (-1);f=e-a.be.b9()|0;while(f>=b&&a.be.bC(f,c)>0){g=f-a.be.b9()|0;e=f;f=g;}return e;}
function Bc(){var a=this;B.call(a);a.mP=null;a.lH=null;}
function AFI(a,b){if(!b&&a.mP===null)a.mP=a.D();else if(b&&a.lH===null)a.lH=ED(a.D(),1);if(b)return a.lH;return a.mP;}
var Dj=G(BE);
function N3(){var a=this;Hc.call(a);a.fb=0;a.e8=0;}
function APO(a){var b,c,d,e,f;b=a.fb;c=a.e8;d=c!=2147483647?L6(c):C(30);e=new M;O(e);BL(e,123);f=V(e,b);BL(f,44);BL(H(f,d),125);return N(e);}
var PE=G(BK);
function AN4(a,b,c,d){return b;}
function AQB(a,b){return 0;}
function Zb(){var a=this;B.call(a);a.C=null;a.by=0;}
function AV9(){var a=new Zb();AJZ(a);return a;}
function AJZ(a){a.C=BM(0);}
function Me(a,b){var c,d;c=b/32|0;if(b>=a.by){I6(a,c+1|0);a.by=b+1|0;}d=a.C.data;d[c]=d[c]|1<<(b%32|0);}
function Iw(a,b,c){var d,e,f,g,h;d=BG(b,c);if(d>0){e=new BD;Y(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.by){I6(a,f+1|0);a.by=c;}if(d==f){g=a.C.data;g[d]=g[d]|If(a,b)&IT(a,c);}else{g=a.C.data;g[d]=g[d]|If(a,b);h=d+1|0;while(h<f){a.C.data[h]=(-1);h=h+1|0;}if(c&31){g=a.C.data;g[f]=g[f]|IT(a,c);}}}
function If(a,b){return (-1)<<(b%32|0);}
function IT(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Nb(a,b){var c,d,e,f;c=b/32|0;d=a.C.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.by-1|0))HB(a);}}
function DA(a,b){var c,d;c=b/32|0;d=a.C.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function HK(a,b){var c,d,e,f;c=a.by;if(b>=c)return (-1);d=b/32|0;e=a.C.data;f=e[d]>>>(b%32|0)|0;if(f)return I0(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+I0(e[f])|0;f=f+1|0;}return (-1);}
function I6(a,b){var c;c=a.C.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.C=M0(a.C,c);}
function HB(a){var b,c,d;b=(a.by+31|0)/32|0;a.by=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=O2(a.C.data[c]);if(d<32)break;c=c+(-1)|0;a.by=a.by-32|0;}a.by=a.by-d|0;}}
function De(a,b){var c,d,e,f;c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&b.C.data[d];d=d+1|0;}while(true){f=a.C.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.by=Bb(a.by,b.by);HB(a);}
function Ga(a,b){var c,d,e;c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&(b.C.data[d]^(-1));d=d+1|0;}HB(a);}
function F8(a,b){var c,d,e;c=Bd(a.by,b.by);a.by=c;I6(a,(c+31|0)/32|0);c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]|b.C.data[d];d=d+1|0;}}
function FB(a,b){var c,d,e;c=Bd(a.by,b.by);a.by=c;I6(a,(c+31|0)/32|0);c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]^b.C.data[d];d=d+1|0;}HB(a);}
function MT(a){return a.by?0:1;}
function NN(){var a=this;B2.call(a);a.qQ=null;a.x4=0;}
function Sb(){var a=this;B2.call(a);a.ne=null;a.mK=null;}
function AFa(a,b){var c=new Sb();AG8(c,a,b);return c;}
function AG8(a,b,c){BX(a);a.ne=b;a.mK=c;}
function AI0(a,b,c,d){var e,f,g,h,i;e=a.ne.c(b,c,d);if(e<0)a:{f=a.mK;g=d.cX;e=d.x;h=b+1|0;e=BG(h,e);if(e>0){d.dF=1;e=(-1);}else{i=P(c,b);if(!f.qQ.l(i))e=(-1);else{if(CI(i)){if(e<0&&C7(P(c,h))){e=(-1);break a;}}else if(C7(i)&&b>g&&CI(P(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AQk(a,b){a.d=b;a.mK.d=b;a.ne.Q(b);}
function AJL(a,b){return 1;}
function AJm(a,b){return 1;}
function DM(){var a=this;B2.call(a);a.d3=null;a.zn=0;}
function ANY(a){var b=new DM();V5(b,a);return b;}
function V5(a,b){BX(a);a.d3=b.jR();a.zn=b.bj;}
function ALu(a,b,c,d){var e,f,g,h;e=d.x;if(b<e){f=b+1|0;g=P(c,b);if(a.l(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(HU(g,f)&&a.l(EE(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AL9(a,b){return a.d3.l(b);}
function AIW(a,b){if(b instanceof D6)return KZ(a.d3,b.gn);if(b instanceof Ew)return KZ(a.d3,b.dy);if(b instanceof DM)return IY(a.d3,b.d3);if(!(b instanceof Ep))return 1;return IY(a.d3,b.fC);}
function ANN(a){return a.d3;}
function ATb(a,b){a.d=b;}
function ALH(a,b){return 1;}
var JV=G(DM);
function ANC(a,b){return a.d3.l(G3(G0(b)));}
function ABP(){var a=this;B6.call(a);a.rI=null;a.y0=0;}
function AMP(a){var b=new ABP();APW(b,a);return b;}
function APW(a,b){DH(a);a.rI=b.jR();a.y0=b.bj;}
function AN5(a,b,c){return !a.rI.l(Fd(EL(P(c,b))))?(-1):1;}
function Ep(){var a=this;B6.call(a);a.fC=null;a.zH=0;}
function ATK(a){var b=new Ep();ARa(b,a);return b;}
function ARa(a,b){DH(a);a.fC=b.jR();a.zH=b.bj;}
function Ni(a,b,c){return !a.fC.l(P(c,b))?(-1):1;}
function AQF(a,b){if(b instanceof Ew)return KZ(a.fC,b.dy);if(b instanceof Ep)return IY(a.fC,b.fC);if(!(b instanceof DM)){if(!(b instanceof D6))return 1;return 0;}return IY(a.fC,b.d3);}
function Qj(){var a=this;B2.call(a);a.hh=null;a.m4=null;a.ka=0;}
function ATX(a,b){var c=new Qj();AIl(c,a,b);return c;}
function AIl(a,b,c){BX(a);a.hh=b;a.ka=c;}
function AOZ(a,b){a.d=b;}
function So(a){if(a.m4===null)a.m4=Gf(a.hh);return a.m4;}
function AHN(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.x;f=BM(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?Em([k,l]):Em([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ka;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.hh.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ka==3){k=f[0];m=a.hh.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ka==2){b=f[0];m=a.hh.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AJC(a,b){return b instanceof Qj&&!Bn(So(b),So(a))?0:1;}
function ATW(a,b){return 1;}
function Ew(){B6.call(this);this.dy=0;}
function ACq(a){var b=new Ew();ARj(b,a);return b;}
function ARj(a,b){DH(a);a.dy=b;}
function ANI(a){return 1;}
function AMK(a,b,c){return a.dy!=P(c,b)?(-1):1;}
function ALr(a,b,c,d){var e,f,g;if(!(c instanceof By))return H$(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=G9(c,a.dy,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ANR(a,b,c,d,e){var f;if(!(d instanceof By))return In(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Gn(d,a.dy,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ATP(a,b){if(b instanceof Ew)return b.dy!=a.dy?0:1;if(!(b instanceof Ep)){if(b instanceof DM)return b.l(a.dy);if(!(b instanceof D6))return 1;return 0;}return Ni(b,0,Zc(a.dy))<=0?0:1;}
function AGQ(){B6.call(this);this.nV=0;}
function ARE(a){var b=new AGQ();APA(b,a);return b;}
function APA(a,b){DH(a);a.nV=Fd(EL(b));}
function AHE(a,b,c){return a.nV!=Fd(EL(P(c,b)))?(-1):1;}
function AAO(){var a=this;B6.call(a);a.wL=0;a.o9=0;}
function AJ6(a){var b=new AAO();AR4(b,a);return b;}
function AR4(a,b){DH(a);a.wL=b;a.o9=H6(b);}
function AH$(a,b,c){return a.wL!=P(c,b)&&a.o9!=P(c,b)?(-1):1;}
function Ft(){var a=this;B2.call(a);a.h9=0;a.lx=null;a.kP=null;a.kJ=0;}
function AYE(a,b){var c=new Ft();Pp(c,a,b);return c;}
function Pp(a,b,c){BX(a);a.h9=1;a.kP=b;a.kJ=c;}
function AU7(a,b){a.d=b;}
function AQl(a,b,c,d){var e,f,g,h,i,j,k,l;e=BM(4);f=d.x;if(b>=f)return (-1);g=Lc(a,b,c,f);h=b+a.h9|0;i=AGo(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DB(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Lc(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AGo(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.h9|0;if(h>=f){b=k;break a;}g=Lc(a,h,c,f);b=k;}}}if(b!=a.kJ)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.kP.data[g])break;g=g+1|0;}return (-1);}
function YR(a){var b,c;if(a.lx===null){b=new M;O(b);c=0;while(c<a.kJ){I3(b,GT(a.kP.data[c]));c=c+1|0;}a.lx=N(b);}return a.lx;}
function Lc(a,b,c,d){var e,f,g;a.h9=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(HU(e,f)){g=BV(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CI(g[0])&&C7(g[1])?EE(g[0],g[1]):g[0];a.h9=2;}}return e;}
function AN6(a,b){return b instanceof Ft&&!Bn(YR(b),YR(a))?0:1;}
function ARB(a,b){return 1;}
var ZG=G(Ft);
var Vq=G(Ft);
var AAz=G(CV);
function AKx(a,b,c,d){var e;while(true){e=a.L.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Rs=G(CV);
function APr(a,b,c,d){var e;e=a.L.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.L.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var F_=G(CV);
function AS$(a,b,c,d){var e;if(!a.L.K(d))return a.d.c(b,c,d);e=a.L.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AUr(a,b){a.d=b;a.L.Q(b);}
var Q3=G(F_);
function ANM(a,b,c,d){var e;e=a.L.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function APQ(a,b){a.d=b;}
function Fr(){var a=this;CV.call(a);a.gv=null;a.dJ=0;}
function A2t(a,b,c,d,e){var f=new Fr();JT(f,a,b,c,d,e);return f;}
function JT(a,b,c,d,e,f){Di(a,c,d,e);a.gv=b;a.dJ=f;}
function AV2(a,b,c,d){var e,f;e=NS(d,a.dJ);if(!a.L.K(d))return a.d.c(b,c,d);if(e>=a.gv.e8)return a.d.c(b,c,d);f=a.dJ;e=e+1|0;En(d,f,e);f=a.L.c(b,c,d);if(f>=0){En(d,a.dJ,0);return f;}f=a.dJ;e=e+(-1)|0;En(d,f,e);if(e>=a.gv.fb)return a.d.c(b,c,d);En(d,a.dJ,0);return (-1);}
var Of=G(Fr);
function ANb(a,b,c,d){var e,f,g;e=0;f=a.gv.e8;a:{while(true){g=a.L.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gv.fb)return (-1);return a.d.c(b,c,d);}
var Ti=G(CV);
function AVd(a,b,c,d){var e;if(!a.L.K(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.L.c(b,c,d);}
var Sn=G(F_);
function AJN(a,b,c,d){var e;if(!a.L.K(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.L.c(b,c,d);return e;}
var Wy=G(Fr);
function AII(a,b,c,d){var e,f,g;e=NS(d,a.dJ);if(!a.L.K(d))return a.d.c(b,c,d);f=a.gv;if(e>=f.e8){En(d,a.dJ,0);return a.d.c(b,c,d);}if(e<f.fb){En(d,a.dJ,e+1|0);g=a.L.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){En(d,a.dJ,0);return g;}En(d,a.dJ,e+1|0);g=a.L.c(b,c,d);}return g;}
var Tk=G(Ee);
function AVM(a,b,c,d){var e;e=d.x;if(e>b)return a.d.cv(b,e,c,d);return a.d.c(b,c,d);}
function ATp(a,b,c,d){var e;e=d.x;if(a.d.cv(b,e,c,d)>=0)return b;return (-1);}
function PS(){Ee.call(this);this.lF=null;}
function AQH(a,b,c,d){var e,f;e=d.x;f=WA(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cv(b,e,c,d);return a.d.c(b,c,d);}
function AHS(a,b,c,d){var e,f,g,h;e=d.x;f=a.d.cs(b,c,d);if(f<0)return (-1);g=WA(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.d.cv(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.lF.id(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function WA(a,b,c,d){while(true){if(b>=c)return (-1);if(a.lF.id(P(d,b)))break;b=b+1|0;}return b;}
var E3=G();
var A2u=null;var A2v=null;function Q7(b){var c;if(!(b&1)){c=A2v;if(c!==null)return c;c=new W8;A2v=c;return c;}c=A2u;if(c!==null)return c;c=new W7;A2u=c;return c;}
var AAB=G(C5);
function AIJ(a,b,c,d){var e;a:{while(true){if((b+a.be.b9()|0)>d.x)break a;e=a.be.bC(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Yk=G(EM);
function APq(a,b,c,d){var e;if((b+a.be.b9()|0)<=d.x){e=a.be.bC(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var QJ=G(Fm);
function ASz(a,b,c,d){var e,f,g,h,i;e=a.kb;f=e.fb;g=e.e8;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.b9()|0)>d.x)break a;i=a.be.bC(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.be.b9()|0)>d.x){d.dF=1;return (-1);}i=a.be.bC(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Sj=G(C5);
function AQz(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.be.b9()|0)<=d.x){e=a.be.bC(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var VI=G(EM);
function AIV(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.L.c(b,c,d);}
var S3=G(Fm);
function ASV(a,b,c,d){var e,f,g,h,i,j;e=a.kb;f=e.fb;g=e.e8;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.be.b9()|0)<=d.x){i=a.be.bC(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.b9()|0)>d.x){d.dF=1;return (-1);}j=a.be.bC(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var K$=G(BK);
function AOw(a,b,c,d){if(b&&!(d.fP&&b==d.cX))return (-1);return a.d.c(b,c,d);}
function ANm(a,b){return 0;}
function ACC(){BK.call(this);this.v7=0;}
function ATJ(a){var b=new ACC();ANF(b,a);return b;}
function ANF(a,b){BX(a);a.v7=b;}
function AJj(a,b,c,d){var e,f,g;e=b<d.x?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.jH?0:d.cX;return (e!=32&&!Sq(a,e,b,g,c)?0:1)^(f!=32&&!Sq(a,f,b-1|0,g,c)?0:1)^a.v7?(-1):a.d.c(b,c,d);}
function AJx(a,b){return 0;}
function Sq(a,b,c,d,e){var f;if(!Ke(b)&&b!=95){a:{if(Cy(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Ke(f))return 0;if(Cy(f)!=6)return 1;}}return 1;}return 0;}
var PJ=G(BK);
function ANE(a,b,c,d){if(b!=d.ip)return (-1);return a.d.c(b,c,d);}
function AVX(a,b){return 0;}
function Zi(){BK.call(this);this.gF=0;}
function AX7(a){var b=new Zi();AGb(b,a);return b;}
function AGb(a,b){BX(a);a.gF=b;}
function ARo(a,b,c,d){var e,f,g;e=!d.fP?J(c):d.x;if(b>=e){BQ(d,a.gF,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BQ(d,a.gF,0);return a.d.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BQ(d,a.gF,0);return a.d.c(b,c,d);}
function AKl(a,b){var c;c=!Dr(b,a.gF)?0:1;BQ(b,a.gF,(-1));return c;}
var YL=G(BK);
function AQg(a,b,c,d){if(b<(d.jH?J(c):d.x))return (-1);d.dF=1;d.z9=1;return a.d.c(b,c,d);}
function AHC(a,b){return 0;}
function Ou(){BK.call(this);this.sH=null;}
function AKb(a,b,c,d){a:{if(b!=d.x){if(!b)break a;if(d.fP&&b==d.cX)break a;if(a.sH.ub(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AMj(a,b){return 0;}
var AGy=G(B2);
function AYo(){var a=new AGy();AP6(a);return a;}
function AP6(a){BX(a);}
function AVk(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dF=1;return (-1);}g=P(c,b);if(CI(g)){h=b+2|0;if(h<=e&&HU(g,P(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AJE(a,b){a.d=b;}
function APX(a){return (-2147483602);}
function AJD(a,b){return 1;}
function AB1(){B2.call(this);this.mc=null;}
function AXY(a){var b=new AB1();AKj(b,a);return b;}
function AKj(a,b){BX(a);a.mc=b;}
function AP9(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dF=1;return (-1);}g=P(c,b);if(CI(g)){b=b+2|0;if(b<=e){h=P(c,f);if(HU(g,h))return a.mc.id(EE(g,h))?(-1):a.d.c(b,c,d);}}return a.mc.id(g)?(-1):a.d.c(f,c,d);}
function ASk(a,b){a.d=b;}
function AHx(a){return (-2147483602);}
function AVC(a,b){return 1;}
function AGl(){BK.call(this);this.h1=0;}
function AXn(a){var b=new AGl();AMf(b,a);return b;}
function AMf(a,b){BX(a);a.h1=b;}
function AOa(a,b,c,d){var e;e=!d.fP?J(c):d.x;if(b>=e){BQ(d,a.h1,0);return a.d.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BQ(d,a.h1,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AMd(a,b){var c;c=!Dr(b,a.h1)?0:1;BQ(b,a.h1,(-1));return c;}
function AEs(){BK.call(this);this.h8=0;}
function AW8(a){var b=new AEs();AMQ(b,a);return b;}
function AMQ(a,b){BX(a);a.h8=b;}
function AQe(a,b,c,d){if((!d.fP?J(c)-b|0:d.x-b|0)<=0){BQ(d,a.h8,0);return a.d.c(b,c,d);}if(P(c,b)!=10)return (-1);BQ(d,a.h8,1);return a.d.c(b+1|0,c,d);}
function AL5(a,b){var c;c=!Dr(b,a.h8)?0:1;BQ(b,a.h8,(-1));return c;}
function AAL(){BK.call(this);this.f6=0;}
function AWq(a){var b=new AAL();AV5(b,a);return b;}
function AV5(a,b){BX(a);a.f6=b;}
function ANf(a,b,c,d){var e,f,g;e=!d.fP?J(c)-b|0:d.x-b|0;if(!e){BQ(d,a.f6,0);return a.d.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BQ(d,a.f6,0);return a.d.c(b,c,d);case 13:if(g!=10){BQ(d,a.f6,0);return a.d.c(b,c,d);}BQ(d,a.f6,0);return a.d.c(b,c,d);default:}return (-1);}
function AKp(a,b){var c;c=!Dr(b,a.f6)?0:1;BQ(b,a.f6,(-1));return c;}
function Hz(){var a=this;B2.call(a);a.oC=0;a.hb=0;}
function AYy(a,b){var c=new Hz();Qy(c,a,b);return c;}
function Qy(a,b,c){BX(a);a.oC=b;a.hb=c;}
function AIO(a,b,c,d){var e,f,g,h;e=Gz(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=0;while(true){if(f>=J(e)){BQ(d,a.hb,J(e));return a.d.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&H6(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ARy(a,b){a.d=b;}
function Gz(a,b){var c,d;c=a.oC;d=FR(b,c);c=I_(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.mf)?Ca(b.mf,d,c):null;}
function ARS(a,b){var c;c=!Dr(b,a.hb)?0:1;BQ(b,a.hb,(-1));return c;}
var AGs=G(Hz);
function AWv(a,b){var c=new AGs();AUh(c,a,b);return c;}
function AUh(a,b,c){Qy(a,b,c);}
function AKw(a,b,c,d){var e,f;e=Gz(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=!V4(c,e,b)?(-1):J(e);if(f<0)return (-1);BQ(d,a.hb,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AT5(a,b,c,d){var e,f;e=Gz(a,d);f=d.cX;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=Rt(c,e,b);if(b<0)return (-1);if(a.d.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AIv(a,b,c,d,e){var f,g;f=Gz(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=RE(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function APh(a,b){return 1;}
var ADv=G(Hz);
function AW9(a,b){var c=new ADv();AMb(c,a,b);return c;}
function AMb(a,b,c){Qy(a,b,c);}
function AOM(a,b,c,d){var e,f;e=Gz(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=0;while(true){if(f>=J(e)){BQ(d,a.hb,J(e));return a.d.c(b+J(e)|0,c,d);}if(Fd(EL(P(e,f)))!=Fd(EL(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var PD=G(GI);
function ALX(a,b,c,d,e){N7(a,b,c,d,e);return a;}
function AJp(a,b,c,d){Zr(a,b,c,d);return a;}
function AJY(a,b){Kk(a,b);}
function ATt(a,b,c){ZK(a,b,c);return a;}
function Tm(){var a=this;B6.call(a);a.cA=null;a.lA=null;a.mn=null;}
function AKR(a,b,c){return !K8(a,c,b)?(-1):a.bS;}
function AJf(a,b,c,d){var e,f,g;e=d.x;while(true){if(b>e)return (-1);f=P(a.cA,a.bS-1|0);a:{while(true){g=a.bS;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&K8(a,c,b))break;b=b+Uj(a.lA,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bS|0,c,d)>=0)break;b=b+1|0;}return b;}
function AMi(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cA,0);g=(J(d)-c|0)-a.bS|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&K8(a,d,c))break;c=c-Uj(a.mn,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bS|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AMU(a,b){var c;if(b instanceof Ew)return b.dy!=P(a.cA,0)?0:1;if(b instanceof Ep)return Ni(b,0,Ca(a.cA,0,1))<=0?0:1;if(!(b instanceof DM)){if(!(b instanceof D6))return 1;return J(a.cA)>1&&b.gn==EE(P(a.cA,0),P(a.cA,1))?1:0;}a:{b:{b=b;if(!b.l(P(a.cA,0))){if(J(a.cA)<=1)break b;if(!b.l(EE(P(a.cA,0),P(a.cA,1))))break b;}c=1;break a;}c=0;}return c;}
function K8(a,b,c){var d;d=0;while(d<a.bS){if(P(b,d+c|0)!=P(a.cA,d))return 0;d=d+1|0;}return 1;}
function AAK(){B6.call(this);this.jL=null;}
function AYD(a){var b=new AAK();ATQ(b,a);return b;}
function ATQ(a,b){var c,d,e;DH(a);c=new M;O(c);d=0;while(true){e=BG(d,b.J);if(e>=0){a.jL=N(c);a.bS=c.J;return;}if(d<0)break;if(e>=0)break;BL(c,Fd(EL(b.B.data[d])));d=d+1|0;}b=new BD;Y(b);K(b);}
function AOU(a,b,c){var d;d=0;while(true){if(d>=J(a.jL))return J(a.jL);if(P(a.jL,d)!=Fd(EL(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Ol(){B6.call(this);this.hZ=null;}
function ASC(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.hZ))return J(a.hZ);e=P(a.hZ,d);f=b+d|0;if(e!=P(c,f)&&H6(P(a.hZ,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Hy=G();
var A2w=null;var A2x=null;var A2s=null;function AR$(){AR$=Bq(Hy);ALd();}
function ALd(){A2w=AYf();A2x=AXh();A2s=I($rt_arraycls(B),[I(B,[C(442),AYz()]),I(B,[C(443),AWn()]),I(B,[C(444),AYc()]),I(B,[C(445),AYj()]),I(B,[C(446),A2x]),I(B,[C(447),AXs()]),I(B,[C(448),AXf()]),I(B,[C(449),AWy()]),I(B,[C(450),AWu()]),I(B,[C(451),AWD()]),I(B,[C(452),AWS()]),I(B,[C(453),AWB()]),I(B,[C(454),AXQ()]),I(B,[C(455),AWh()]),I(B,[C(456),AYg()]),I(B,[C(457),AWR()]),I(B,[C(458),AXq()]),I(B,[C(459),AWP()]),I(B,[C(460),AXr()]),I(B,[C(461),AWG()]),I(B,[C(462),AYn()]),I(B,[C(463),AWK()]),I(B,[C(464),AXw()]),
I(B,[C(465),AYa()]),I(B,[C(466),AX8()]),I(B,[C(467),AYk()]),I(B,[C(468),AWF()]),I(B,[C(469),AXW()]),I(B,[C(470),A2w]),I(B,[C(471),AXD()]),I(B,[C(472),AWz()]),I(B,[C(473),A2w]),I(B,[C(474),AWf()]),I(B,[C(475),A2x]),I(B,[C(476),AW1()]),I(B,[C(477),Q(0,127)]),I(B,[C(478),Q(128,255)]),I(B,[C(479),Q(256,383)]),I(B,[C(480),Q(384,591)]),I(B,[C(481),Q(592,687)]),I(B,[C(482),Q(688,767)]),I(B,[C(483),Q(768,879)]),I(B,[C(484),Q(880,1023)]),I(B,[C(485),Q(1024,1279)]),I(B,[C(486),Q(1280,1327)]),I(B,[C(487),Q(1328,1423)]),
I(B,[C(488),Q(1424,1535)]),I(B,[C(489),Q(1536,1791)]),I(B,[C(490),Q(1792,1871)]),I(B,[C(491),Q(1872,1919)]),I(B,[C(492),Q(1920,1983)]),I(B,[C(493),Q(2304,2431)]),I(B,[C(494),Q(2432,2559)]),I(B,[C(495),Q(2560,2687)]),I(B,[C(496),Q(2688,2815)]),I(B,[C(497),Q(2816,2943)]),I(B,[C(498),Q(2944,3071)]),I(B,[C(499),Q(3072,3199)]),I(B,[C(500),Q(3200,3327)]),I(B,[C(501),Q(3328,3455)]),I(B,[C(502),Q(3456,3583)]),I(B,[C(503),Q(3584,3711)]),I(B,[C(504),Q(3712,3839)]),I(B,[C(505),Q(3840,4095)]),I(B,[C(506),Q(4096,4255)]),
I(B,[C(507),Q(4256,4351)]),I(B,[C(508),Q(4352,4607)]),I(B,[C(509),Q(4608,4991)]),I(B,[C(510),Q(4992,5023)]),I(B,[C(511),Q(5024,5119)]),I(B,[C(512),Q(5120,5759)]),I(B,[C(513),Q(5760,5791)]),I(B,[C(514),Q(5792,5887)]),I(B,[C(515),Q(5888,5919)]),I(B,[C(516),Q(5920,5951)]),I(B,[C(517),Q(5952,5983)]),I(B,[C(518),Q(5984,6015)]),I(B,[C(519),Q(6016,6143)]),I(B,[C(520),Q(6144,6319)]),I(B,[C(521),Q(6400,6479)]),I(B,[C(522),Q(6480,6527)]),I(B,[C(523),Q(6528,6623)]),I(B,[C(524),Q(6624,6655)]),I(B,[C(525),Q(6656,6687)]),
I(B,[C(526),Q(7424,7551)]),I(B,[C(527),Q(7552,7615)]),I(B,[C(528),Q(7616,7679)]),I(B,[C(529),Q(7680,7935)]),I(B,[C(530),Q(7936,8191)]),I(B,[C(531),Q(8192,8303)]),I(B,[C(532),Q(8304,8351)]),I(B,[C(533),Q(8352,8399)]),I(B,[C(534),Q(8400,8447)]),I(B,[C(535),Q(8448,8527)]),I(B,[C(536),Q(8528,8591)]),I(B,[C(537),Q(8592,8703)]),I(B,[C(538),Q(8704,8959)]),I(B,[C(539),Q(8960,9215)]),I(B,[C(540),Q(9216,9279)]),I(B,[C(541),Q(9280,9311)]),I(B,[C(542),Q(9312,9471)]),I(B,[C(543),Q(9472,9599)]),I(B,[C(544),Q(9600,9631)]),
I(B,[C(545),Q(9632,9727)]),I(B,[C(546),Q(9728,9983)]),I(B,[C(547),Q(9984,10175)]),I(B,[C(548),Q(10176,10223)]),I(B,[C(549),Q(10224,10239)]),I(B,[C(550),Q(10240,10495)]),I(B,[C(551),Q(10496,10623)]),I(B,[C(552),Q(10624,10751)]),I(B,[C(553),Q(10752,11007)]),I(B,[C(554),Q(11008,11263)]),I(B,[C(555),Q(11264,11359)]),I(B,[C(556),Q(11392,11519)]),I(B,[C(557),Q(11520,11567)]),I(B,[C(558),Q(11568,11647)]),I(B,[C(559),Q(11648,11743)]),I(B,[C(560),Q(11776,11903)]),I(B,[C(561),Q(11904,12031)]),I(B,[C(562),Q(12032,12255)]),
I(B,[C(563),Q(12272,12287)]),I(B,[C(564),Q(12288,12351)]),I(B,[C(565),Q(12352,12447)]),I(B,[C(566),Q(12448,12543)]),I(B,[C(567),Q(12544,12591)]),I(B,[C(568),Q(12592,12687)]),I(B,[C(569),Q(12688,12703)]),I(B,[C(570),Q(12704,12735)]),I(B,[C(571),Q(12736,12783)]),I(B,[C(572),Q(12784,12799)]),I(B,[C(573),Q(12800,13055)]),I(B,[C(574),Q(13056,13311)]),I(B,[C(575),Q(13312,19893)]),I(B,[C(576),Q(19904,19967)]),I(B,[C(577),Q(19968,40959)]),I(B,[C(578),Q(40960,42127)]),I(B,[C(579),Q(42128,42191)]),I(B,[C(580),Q(42752,
42783)]),I(B,[C(581),Q(43008,43055)]),I(B,[C(582),Q(44032,55203)]),I(B,[C(583),Q(55296,56191)]),I(B,[C(584),Q(56192,56319)]),I(B,[C(585),Q(56320,57343)]),I(B,[C(586),Q(57344,63743)]),I(B,[C(587),Q(63744,64255)]),I(B,[C(588),Q(64256,64335)]),I(B,[C(589),Q(64336,65023)]),I(B,[C(590),Q(65024,65039)]),I(B,[C(591),Q(65040,65055)]),I(B,[C(592),Q(65056,65071)]),I(B,[C(593),Q(65072,65103)]),I(B,[C(594),Q(65104,65135)]),I(B,[C(595),Q(65136,65279)]),I(B,[C(596),Q(65280,65519)]),I(B,[C(597),Q(0,1114111)]),I(B,[C(598),
AWC()]),I(B,[C(599),BS(0,1)]),I(B,[C(600),Jo(62,1)]),I(B,[C(601),BS(1,1)]),I(B,[C(602),BS(2,1)]),I(B,[C(603),BS(3,0)]),I(B,[C(604),BS(4,0)]),I(B,[C(605),BS(5,1)]),I(B,[C(606),Jo(448,1)]),I(B,[C(607),BS(6,1)]),I(B,[C(608),BS(7,0)]),I(B,[C(609),BS(8,1)]),I(B,[C(610),Jo(3584,1)]),I(B,[C(611),BS(9,1)]),I(B,[C(612),BS(10,1)]),I(B,[C(613),BS(11,1)]),I(B,[C(614),Jo(28672,0)]),I(B,[C(615),BS(12,0)]),I(B,[C(616),BS(13,0)]),I(B,[C(617),BS(14,0)]),I(B,[C(618),AW_(983040,1,1)]),I(B,[C(619),BS(15,0)]),I(B,[C(620),BS(16,
1)]),I(B,[C(621),BS(18,1)]),I(B,[C(622),AXm(19,0,1)]),I(B,[C(623),Jo(1643118592,1)]),I(B,[C(624),BS(20,0)]),I(B,[C(625),BS(21,0)]),I(B,[C(626),BS(22,0)]),I(B,[C(627),BS(23,0)]),I(B,[C(628),BS(24,1)]),I(B,[C(629),Jo(2113929216,1)]),I(B,[C(630),BS(25,1)]),I(B,[C(631),BS(26,0)]),I(B,[C(632),BS(27,0)]),I(B,[C(633),BS(28,1)]),I(B,[C(634),BS(29,0)]),I(B,[C(635),BS(30,0)])]);}
function Ns(){B6.call(this);this.r2=0;}
function ASJ(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.r2!=G3(G0(EE(e,d)))?(-1):2;}
function LE(){B2.call(this);this.gU=0;}
function AP5(a){var b=new LE();AJT(b,a);return b;}
function AJT(a,b){BX(a);a.gU=b;}
function AQw(a,b){a.d=b;}
function AKm(a,b,c,d){var e,f;e=b+1|0;if(e>d.x){d.dF=1;return (-1);}f=P(c,b);if(b>d.cX&&CI(P(c,b-1|0)))return (-1);if(a.gU!=f)return (-1);return a.d.c(e,c,d);}
function AMS(a,b,c,d){var e,f,g,h;if(!(c instanceof By))return H$(a,b,c,d);e=d.cX;f=d.x;while(true){if(b>=f)return (-1);g=G9(c,a.gU,b);if(g<0)return (-1);if(g>e&&CI(P(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AKZ(a,b,c,d,e){var f,g;if(!(d instanceof By))return In(a,b,c,d,e);f=e.cX;a:{while(true){if(c<b)return (-1);g=Gn(d,a.gU,c);if(g<0)break a;if(g<b)break a;if(g>f&&CI(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AIs(a,b){if(b instanceof Ew)return 0;if(b instanceof Ep)return 0;if(b instanceof DM)return 0;if(b instanceof D6)return 0;if(b instanceof LX)return 0;if(!(b instanceof LE))return 1;return b.gU!=a.gU?0:1;}
function ATB(a,b){return 1;}
function LX(){B2.call(this);this.gu=0;}
function ANh(a){var b=new LX();AQa(b,a);return b;}
function AQa(a,b){BX(a);a.gu=b;}
function AJW(a,b){a.d=b;}
function AHY(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;g=BG(f,e);if(g>0){d.dF=1;return (-1);}h=P(c,b);if(g<0&&C7(P(c,f)))return (-1);if(a.gu!=h)return (-1);return a.d.c(f,c,d);}
function AQW(a,b,c,d){var e,f;if(!(c instanceof By))return H$(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=G9(c,a.gu,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C7(P(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function ASA(a,b,c,d,e){var f,g;if(!(d instanceof By))return In(a,b,c,d,e);f=e.x;a:{while(true){if(c<b)return (-1);g=Gn(d,a.gu,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C7(P(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKS(a,b){if(b instanceof Ew)return 0;if(b instanceof Ep)return 0;if(b instanceof DM)return 0;if(b instanceof D6)return 0;if(b instanceof LE)return 0;if(!(b instanceof LX))return 1;return b.gu!=a.gu?0:1;}
function AQ9(a,b){return 1;}
function D6(){var a=this;B6.call(a);a.kA=0;a.ja=0;a.gn=0;}
function ART(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.kA==e&&a.ja==d?2:(-1);}
function APK(a,b,c,d){var e,f;if(!(c instanceof By))return H$(a,b,c,d);e=d.x;while(b<e){b=G9(c,a.kA,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.ja==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AJV(a,b,c,d,e){var f;if(!(d instanceof By))return In(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Gn(d,a.ja,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kA==P(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ARF(a,b){if(b instanceof D6)return b.gn!=a.gn?0:1;if(b instanceof DM)return b.l(a.gn);if(b instanceof Ew)return 0;if(!(b instanceof Ep))return 1;return 0;}
var W7=G(E3);
function AJ7(a,b){return b!=10?0:1;}
function ARM(a,b,c){return b!=10?0:1;}
var W8=G(E3);
function ASX(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AUV(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AFr(){var a=this;B.call(a);a.nD=null;a.kV=null;a.hz=0;a.xy=0;}
function APV(a){var b=new AFr();AND(b,a);return b;}
function AND(a,b){var c,d;while(true){c=a.hz;if(b<c)break;a.hz=c<<1|1;}d=c<<1|1;a.hz=d;d=d+1|0;a.nD=BM(d);a.kV=BM(d);a.xy=b;}
function S5(a,b,c){var d,e,f,g;d=0;e=a.hz;f=b&e;while(true){g=a.nD.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.kV.data[f]=c;}
function Uj(a,b){var c,d,e,f;c=a.hz;d=b&c;e=0;while(true){f=a.nD.data[d];if(!f)break;if(f==b)return a.kV.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xy;}
var AA4=G();
var LA=G(Bc);
function AYf(){var a=new LA();ANc(a);return a;}
function ANc(a){}
function ADD(a){return CA(B4(Ds(),9,13),32);}
var KI=G(Bc);
function AXh(){var a=new KI();ATx(a);return a;}
function ATx(a){}
function AEj(a){return B4(Ds(),48,57);}
var AFk=G(Bc);
function AYz(){var a=new AFk();AMu(a);return a;}
function AMu(a){}
function ASp(a){return B4(Ds(),97,122);}
var AFR=G(Bc);
function AWn(){var a=new AFR();ANH(a);return a;}
function ANH(a){}
function ATD(a){return B4(Ds(),65,90);}
var AFV=G(Bc);
function AYc(){var a=new AFV();AJg(a);return a;}
function AJg(a){}
function ALv(a){return B4(Ds(),0,127);}
var Lt=G(Bc);
function AYj(){var a=new Lt();AKz(a);return a;}
function AKz(a){}
function AB5(a){return B4(B4(Ds(),97,122),65,90);}
var Md=G(Lt);
function AXs(){var a=new Md();ANk(a);return a;}
function ANk(a){}
function AC3(a){return B4(AB5(a),48,57);}
var AHn=G(Bc);
function AXf(){var a=new AHn();APt(a);return a;}
function APt(a){}
function AMR(a){return B4(B4(B4(Ds(),33,64),91,96),123,126);}
var Nd=G(Md);
function AWy(){var a=new Nd();ARt(a);return a;}
function ARt(a){}
function AAH(a){return B4(B4(B4(AC3(a),33,64),91,96),123,126);}
var ADU=G(Nd);
function AWu(){var a=new ADU();ATl(a);return a;}
function ATl(a){}
function APd(a){return CA(AAH(a),32);}
var AEc=G(Bc);
function AWD(){var a=new AEc();ASE(a);return a;}
function ASE(a){}
function AKK(a){return CA(CA(Ds(),32),9);}
var ACt=G(Bc);
function AWS(){var a=new ACt();AUL(a);return a;}
function AUL(a){}
function APa(a){return CA(B4(Ds(),0,31),127);}
var ACd=G(Bc);
function AWB(){var a=new ACd();AJw(a);return a;}
function AJw(a){}
function AU0(a){return B4(B4(B4(Ds(),48,57),97,102),65,70);}
var AF0=G(Bc);
function AXQ(){var a=new AF0();AI6(a);return a;}
function AI6(a){}
function APT(a){var b;b=new UO;b.zm=a;Bv(b);b.N=1;return b;}
var AHw=G(Bc);
function AWh(){var a=new AHw();ARI(a);return a;}
function ARI(a){}
function AHQ(a){var b;b=new NF;b.zw=a;Bv(b);b.N=1;return b;}
var AFs=G(Bc);
function AYg(){var a=new AFs();AJi(a);return a;}
function AJi(a){}
function ANi(a){var b;b=new TC;b.yX=a;Bv(b);return b;}
var AFb=G(Bc);
function AWR(){var a=new AFb();APb(a);return a;}
function APb(a){}
function AR1(a){var b;b=new TB;b.yE=a;Bv(b);return b;}
var AGd=G(Bc);
function AXq(){var a=new AGd();AKv(a);return a;}
function AKv(a){}
function AKH(a){var b;b=new YU;b.Af=a;Bv(b);Iw(b.M,0,2048);b.N=1;return b;}
var ABm=G(Bc);
function AWP(){var a=new ABm();AJ4(a);return a;}
function AJ4(a){}
function AK7(a){var b;b=new QD;b.zJ=a;Bv(b);b.N=1;return b;}
var AAX=G(Bc);
function AXr(){var a=new AAX();AOR(a);return a;}
function AOR(a){}
function AUQ(a){var b;b=new Py;b.AS=a;Bv(b);b.N=1;return b;}
var AFz=G(Bc);
function AWG(){var a=new AFz();APu(a);return a;}
function APu(a){}
function AHF(a){var b;b=new SE;b.zo=a;Bv(b);return b;}
var AFL=G(Bc);
function AYn(){var a=new AFL();AM2(a);return a;}
function AM2(a){}
function AOf(a){var b;b=new Nz;b.xY=a;Bv(b);b.N=1;return b;}
var ACU=G(Bc);
function AWK(){var a=new ACU();AIx(a);return a;}
function AIx(a){}
function ALf(a){var b;b=new ND;b.zN=a;Bv(b);b.N=1;return b;}
var AEh=G(Bc);
function AXw(){var a=new AEh();AJ9(a);return a;}
function AJ9(a){}
function AMm(a){var b;b=new O4;b.Ab=a;Bv(b);b.N=1;return b;}
var AG7=G(Bc);
function AYa(){var a=new AG7();AOm(a);return a;}
function AOm(a){}
function AOh(a){var b;b=new Q9;b.Ay=a;Bv(b);b.N=1;return b;}
var AFK=G(Bc);
function AX8(){var a=new AFK();APN(a);return a;}
function APN(a){}
function ATZ(a){var b;b=new Rf;b.yZ=a;Bv(b);return b;}
var ADr=G(Bc);
function AYk(){var a=new ADr();AJ5(a);return a;}
function AJ5(a){}
function ARk(a){var b;b=new Vk;b.zU=a;Bv(b);return b;}
var ACS=G(Bc);
function AWF(){var a=new ACS();AR3(a);return a;}
function AR3(a){}
function APL(a){var b;b=new T9;b.x1=a;Bv(b);b.N=1;return b;}
var AHt=G(Bc);
function AXW(){var a=new AHt();AMY(a);return a;}
function AMY(a){}
function ASe(a){var b;b=new NW;b.A0=a;Bv(b);b.N=1;return b;}
var J8=G(Bc);
function AXD(){var a=new J8();ALo(a);return a;}
function ALo(a){}
function AEe(a){return CA(B4(B4(B4(Ds(),97,122),65,90),48,57),95);}
var AGg=G(J8);
function AWz(){var a=new AGg();AM5(a);return a;}
function AM5(a){}
function APz(a){var b;b=ED(AEe(a),1);b.N=1;return b;}
var ADZ=G(LA);
function AWf(){var a=new ADZ();AUt(a);return a;}
function AUt(a){}
function AJa(a){var b;b=ED(ADD(a),1);b.N=1;return b;}
var ACN=G(KI);
function AW1(){var a=new ACN();AN2(a);return a;}
function AN2(a){}
function AME(a){var b;b=ED(AEj(a),1);b.N=1;return b;}
function ACi(){var a=this;Bc.call(a);a.rQ=0;a.sB=0;}
function Q(a,b){var c=new ACi();AUN(c,a,b);return c;}
function AUN(a,b,c){a.rQ=b;a.sB=c;}
function AOz(a){return B4(Ds(),a.rQ,a.sB);}
var ACI=G(Bc);
function AWC(){var a=new ACI();AU$(a);return a;}
function AU$(a){}
function AUE(a){return B4(B4(Ds(),65279,65279),65520,65533);}
function ADL(){var a=this;Bc.call(a);a.m9=0;a.kI=0;a.qi=0;}
function BS(a,b){var c=new ADL();AKo(c,a,b);return c;}
function AXm(a,b,c){var d=new ADL();AUP(d,a,b,c);return d;}
function AKo(a,b,c){a.kI=c;a.m9=b;}
function AUP(a,b,c,d){a.qi=d;a.kI=c;a.m9=b;}
function AL1(a){var b;b=AYv(a.m9);if(a.qi)Iw(b.M,0,2048);b.N=a.kI;return b;}
function ADV(){var a=this;Bc.call(a);a.m8=0;a.kX=0;a.oQ=0;}
function Jo(a,b){var c=new ADV();ALg(c,a,b);return c;}
function AW_(a,b,c){var d=new ADV();AHH(d,a,b,c);return d;}
function ALg(a,b,c){a.kX=c;a.m8=b;}
function AHH(a,b,c,d){a.oQ=d;a.kX=c;a.m8=b;}
function AHG(a){var b;b=new Tv;AEY(b,a.m8);if(a.oQ)Iw(b.M,0,2048);b.N=a.kX;return b;}
var ACn=G();
var ABN=G();
function ADo(b){var c,d,e,f,g,h,i;c=ASs(FA(b));d=Ku(c);e=BM(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Ku(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Oe(c);h=h+1|0;}return e;}
function Li(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Ov(){var a=this;B.call(a);a.qP=0;a.s1=0;a.q4=null;}
function ALY(a,b,c){var d=new Ov();ATk(d,a,b,c);return d;}
function ATk(a,b,c,d){a.qP=b;a.s1=c;a.q4=d;}
function AFF(){var a=this;B.call(a);a.py=null;a.rX=0;}
function ASs(a){var b=new AFF();AKW(b,a);return b;}
function AKW(a,b){a.py=b;}
var ADn=G();
function Ku(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.py.data;f=b.rX;b.rX=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+W(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Oe(b){var c,d;c=Ku(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var M9=G(Bu);
function AB2(){B.call(this);this.Lk=null;}
function Ps(){B.call(this);this.uF=null;}
function AUR(a,b){var c,d,e,f;c=b.data;b=a.uF;d=Dy(c[0]);e=EF(c[1]);AAN(b.e.f,d,e,null,null);GU(Ct(b),A0J);Gs(Ct(b));f=IA(Ez(),b.fw);b=new M;O(b);H(GJ(H(b,C(636)),f),C(200));$rt_globals.console.info($rt_ustr(N(b)));}
function Qg(){B.call(this);this.sC=null;}
function AM$(a,b){JO(a.sC,b);}
function YW(){B.call(this);this.oe=null;}
function AQU(a,b){b.eA=a.oe;}
var ABj=G();
function ABY(b){var c,d,e,f,g,h,i,j;c=AJJ();d=CB(b);Bs(c,d);e=0;f=0;while(f<d){g=BR(b,f);h=g.p.data.length;Bs(c,h);i=0;while(i<h){j=US(g,i);G1(c,e,MD(j));e=e+MD(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return RR(c);}
function ABr(b){var c,d,e,f,g,h,i,j,k;c=Be(b);d=R(ID,c);e=d.data;f=0;while(f<c){a:{g=Be(b);if(g!=(-1)){h=Be(b);i=Be(b);if(i==(-1)){j=new ID;j.gx=h;e[g]=j;}else{j=new ID;j.gx=h;j.mr=BM(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].mr.data[k]=Be(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AAg(){B.call(this);this.tf=null;}
function AP$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.tf;d=Dy(c[0]);c=Yl(d);e=new W$;d=ABr(c);f=ABr(c);g=Be(c);h=R(My,g);i=h.data;j=0;while(j<g){k=Be(c);l=Be(c);m=Be(c);n=Be(c);o=Be(c);p=new My;p.iu=k;p.nq=l;p.it=m;p.np=n;p.lf=o;i[j]=p;j=j+1|0;}e.AD=d;e.wx=f;e.gt=h;b.gi=e;Kx(b.F,d);Kx(b.E,b.gi.wx);}
function AEd(){Hx.call(this);this.IX=null;}
var Sk=G(0);
function U_(){var a=this;B.call(a);a.At=null;a.As=null;a.Ar=null;}
function Ww(){var a=this;B.call(a);a.AJ=null;a.AK=null;}
function Yo(){var a=this;X.call(a);a.pc=null;a.An=null;}
function ALB(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cn^DA(a.pc,c):0;}
function Ym(){var a=this;X.call(a);a.vu=null;a.wp=null;a.z0=null;}
function AIg(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cn^DA(a.vu,c):0;return a.wp.l(b)&&!d?1:0;}
function PX(){var a=this;X.call(a);a.jd=null;a.x5=null;}
function AOn(a,b){return a.bj^DA(a.jd,b);}
function AMq(a){var b,c,d;b=new M;O(b);c=HK(a.jd,0);while(c>=0){I3(b,GT(c));BL(b,124);c=HK(a.jd,c+1|0);}d=b.J;if(d>0)X_(b,d-1|0);return N(b);}
function P5(){var a=this;X.call(a);a.sm=null;a.zu=null;}
function ARY(a,b){return a.sm.l(b);}
function P3(){var a=this;X.call(a);a.kN=0;a.p3=null;a.lL=null;}
function ASI(a,b){return !(a.kN^DA(a.lL.H,b))&&!(a.kN^a.lL.ec^a.p3.l(b))?0:1;}
function P4(){var a=this;X.call(a);a.kW=0;a.vZ=null;a.mJ=null;}
function AOT(a,b){return !(a.kW^DA(a.mJ.H,b))&&!(a.kW^a.mJ.ec^a.vZ.l(b))?1:0;}
function P8(){var a=this;X.call(a);a.wY=0;a.v5=null;a.vQ=null;a.yo=null;}
function ALa(a,b){return a.wY^(!a.v5.l(b)&&!a.vQ.l(b)?0:1);}
function P9(){var a=this;X.call(a);a.sy=0;a.sb=null;a.rp=null;a.AY=null;}
function AHy(a,b){return a.sy^(!a.sb.l(b)&&!a.rp.l(b)?0:1)?0:1;}
function P6(){var a=this;X.call(a);a.q9=null;a.AZ=null;}
function AMv(a,b){return C4(a.q9,b);}
function P7(){var a=this;X.call(a);a.wl=null;a.yA=null;}
function AOX(a,b){return C4(a.wl,b)?0:1;}
function P_(){var a=this;X.call(a);a.sT=null;a.sf=0;a.uT=null;}
function AT9(a,b){return !C4(a.sT,b)&&!(a.sf^DA(a.uT.H,b))?0:1;}
function Qa(){var a=this;X.call(a);a.tz=null;a.tN=0;a.tl=null;}
function AKD(a,b){return !C4(a.tz,b)&&!(a.tN^DA(a.tl.H,b))?1:0;}
function PW(){var a=this;X.call(a);a.uI=0;a.vY=null;a.wF=null;a.x$=null;}
function AWc(a,b){return !(a.uI^a.vY.l(b))&&!C4(a.wF,b)?0:1;}
function QP(){var a=this;X.call(a);a.wA=0;a.ok=null;a.oV=null;a.yx=null;}
function AMB(a,b){return !(a.wA^a.ok.l(b))&&!C4(a.oV,b)?1:0;}
function PU(){var a=this;X.call(a);a.qD=null;a.yC=null;}
function AKB(a,b){return C4(a.qD,b);}
function PV(){var a=this;X.call(a);a.qM=null;a.AV=null;}
function AMa(a,b){return C4(a.qM,b)?0:1;}
function P0(){var a=this;X.call(a);a.wU=null;a.tt=0;a.xR=null;}
function ANG(a,b){return C4(a.wU,b)&&a.tt^DA(a.xR.H,b)?1:0;}
function PT(){var a=this;X.call(a);a.uh=null;a.sz=0;a.tr=null;}
function ATL(a,b){return C4(a.uh,b)&&a.sz^DA(a.tr.H,b)?0:1;}
function PY(){var a=this;X.call(a);a.uW=0;a.pa=null;a.sv=null;a.ym=null;}
function AJs(a,b){return a.uW^a.pa.l(b)&&C4(a.sv,b)?1:0;}
function PZ(){var a=this;X.call(a);a.t8=0;a.n8=null;a.uG=null;a.yH=null;}
function AQ8(a,b){return a.t8^a.n8.l(b)&&C4(a.uG,b)?0:1;}
var MF=G(0);
function T8(){var a=this;B.call(a);a.ys=null;a.v1=null;a.jz=null;a.cD=null;a.je=0;a.lD=0;}
function NB(a,b){var c,d,e;c=J(a.jz);if(b>=0&&b<=c){ZT(a.cD,null,(-1),(-1));d=a.cD;d.kc=1;d.eE=b;c=d.ip;if(c<0)c=b;d.ip=c;b=a.v1.cs(b,a.jz,d);if(b==(-1))a.cD.dF=1;if(b>=0){d=a.cD;if(d.jA){e=d.d5.data;if(e[0]==(-1)){c=d.eE;e[0]=c;e[1]=c;}d.ip=JJ(d);return 1;}}a.cD.eE=(-1);return 0;}d=new BD;Bi(d,C8(b));K(d);}
function AG5(a){return QI(a.cD,0);}
function ACO(a){return TE(a.cD,0);}
function AA_(a){return a.cD.jH;}
function AD1(){var a=this;B.call(a);a.Fe=null;a.Fc=null;a.Fh=0.0;}
var C2=G(0);
var A0k=null;var A1l=null;var A0m=null;var A0l=null;var A0o=null;var A0n=null;var A0q=null;var A0p=null;var A0s=null;var A0r=null;var A0t=null;function AFY(){AFY=Bq(C2);AUY();}
function AUY(){A0k=CQ(0);A1l=CR(0,0,0);A0m=S(C(637));A0l=CR(255,255,255);A0o=CR(166,214,255);A0n=S(C(638));A0q=S(C(639));A0p=S(C(640));A0s=FG(205,205,205,153);A0r=FG(255,255,255,0);A0t=S(C(126));}
function Cn(){Co.call(this);this.l9=null;}
var A2y=null;var A2z=null;var A2A=null;var A2B=null;var A2C=null;var A2D=null;var A2E=null;var A2F=null;var A2G=null;var A2H=null;var A2I=null;var A2J=null;var A2K=null;var A2L=null;var A2M=null;var A0u=null;function AE1(){AE1=Bq(Cn);AVr();}
function DJ(a,b,c){var d=new Cn();SW(d,a,b,c);return d;}
function AVc(a,b,c,d){var e=new Cn();ABH(e,a,b,c,d);return e;}
function SW(a,b,c,d){AE1();Dd(a,b,c);a.l9=Ix(d,null);}
function ABH(a,b,c,d,e){AE1();Dd(a,b,c);a.l9=Ix(d,e);}
function AVr(){var b;b=new Cn;AFY();SW(b,C(346),0,A1l);A2y=b;A2z=DJ(C(347),1,CR(0,49,191));A2A=DJ(C(349),2,S(C(641)));A2B=DJ(C(48),3,S(C(642)));A2C=DJ(C(352),4,A1l);A2D=DJ(C(353),5,S(C(643)));A2E=DJ(C(355),6,S(C(387)));A2F=DJ(C(49),7,S(C(644)));A2G=DJ(C(358),8,S(C(645)));A2H=AVc(C(360),9,A1l,CR(237,235,252));A2I=AVc(C(361),10,S(C(385)),S(C(646)));A2J=DJ(C(362),11,S(C(387)));A2K=DJ(C(364),12,S(C(388)));A2L=DJ(C(366),13,S(C(647)));b=DJ(C(367),14,S(C(368)));A2M=b;A0u=I(Cn,[A2y,A2z,A2A,A2B,A2C,A2D,A2E,A2F,A2G,A2H,
A2I,A2J,A2K,A2L,b]);}
var DI=G(0);
var A0y=null;var A0z=null;var A0v=null;var A0w=null;var A0x=null;var A1m=null;var A1n=null;var A0A=null;var A0B=null;function AIF(){AIF=Bq(DI);AK6();}
function AK6(){A0y=S(C(124));A0z=S(C(648));A0v=S(C(649));A0w=S(C(650));A0x=S(C(651));A1m=S(C(124));A1n=S(C(648));A0A=FG(205,205,205,153);A0B=CR(247,248,250);}
function XY(){var a=this;B.call(a);a.kg=null;a.ic=0;}
function Xb(){B.call(this);this.ul=null;}
function AOB(a,b){Zk(a.ul,b);}
var N$=G(GW);
function AL3(a,b,c,d){var e,f,g;e=0;f=d.x;a:{while(true){if(b>f){b=e;break a;}g=FR(d,a.bb);DF(d,a.bb,b);e=a.c$.c(b,c,d);if(e>=0)break;DF(d,a.bb,g);b=b+1|0;}}return b;}
function AV1(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=FR(e,a.bb);DF(e,a.bb,c);f=a.c$.c(c,d,e);if(f>=0)break;DF(e,a.bb,g);c=c+(-1)|0;}}return c;}
function AKk(a){return null;}
var R$=G(Bu);
var Zv=G(Bu);
function W1(){F9.call(this);this.AN=0;}
function RV(){F9.call(this);this.AF=0;}
function AFG(){var a=this;B.call(a);a.Lu=null;a.Hv=null;}
function WU(){var a=this;B.call(a);a.sY=null;a.vx=null;a.xk=0;a.lb=0;}
function La(a,b){return Cc(a.sY)<b?0:1;}
function ACW(){var a=this;B.call(a);a.Eo=null;a.CQ=null;}
function Pw(){var a=this;B.call(a);a.rh=null;a.ri=null;}
function VS(){var a=this;B.call(a);a.zg=null;a.sd=null;}
function VV(){B.call(this);this.Al=null;}
var AFu=G(0);
function M1(b){return !b?I(By,[C(155),C(156),C(652)]):I(By,[C(155),C(156),C(652),C(41)]);}
var ABe=G();
function T0(){var a=this;B.call(a);a.qr=null;a.qs=0;a.qt=null;}
function L1(a,b){var c,d,e,f,g,h,i,j,k;c=a.qr;d=a.qs;e=a.qt;if(b<=d){f=Ct(c);g=new Ur;g.vc=c;h=R(B,1);h.data[0]=e;CU(f,g,C(653),h);}else{i=Ct(c);g=new Ut;g.qa=c;j=R(B,2);k=j.data;k[0]=e;h=BM(1);h.data[0]=250;k[1]=h;CU(i,g,C(654),j);f=Ct(c);g=new Uu;g.rs=c;h=R(B,1);h.data[0]=e;CU(f,g,C(655),h);}}
function WZ(){var a=this;B.call(a);a.d5=null;a.kp=null;a.ma=null;a.mf=null;a.p6=0;a.jA=0;a.cX=0;a.x=0;a.eE=0;a.jH=0;a.fP=0;a.dF=0;a.z9=0;a.ip=0;a.kc=0;}
function BQ(a,b,c){a.kp.data[b]=c;}
function Dr(a,b){return a.kp.data[b];}
function JJ(a){return TE(a,0);}
function TE(a,b){Ts(a,b);return a.d5.data[(b*2|0)+1|0];}
function DF(a,b,c){a.d5.data[b*2|0]=c;}
function Kl(a,b,c){a.d5.data[(b*2|0)+1|0]=c;}
function FR(a,b){return a.d5.data[b*2|0];}
function I_(a,b){return a.d5.data[(b*2|0)+1|0];}
function AFm(a){return QI(a,0);}
function QI(a,b){Ts(a,b);return a.d5.data[b*2|0];}
function NS(a,b){return a.ma.data[b];}
function En(a,b,c){a.ma.data[b]=c;}
function Ts(a,b){var c;if(!a.jA){c=new CL;Y(c);K(c);}if(b>=0&&b<a.p6)return;c=new BD;Bi(c,C8(b));K(c);}
function ZT(a,b,c,d){a.jA=0;a.kc=2;H1(a.d5,(-1));H1(a.kp,(-1));if(b!==null)a.mf=b;if(c>=0){a.cX=c;a.x=d;}a.eE=a.cX;}
function AC8(a){return a.kc;}
function OF(){B.call(this);this.of=null;}
function ATg(a){DZ(a.of);}
function ZC(){var a=this;B.call(a);a.st=null;a.su=null;}
function AVU(a,b){b=b;GA(a.st,a.su,b);}
function Sy(){var a=this;B.call(a);a.n_=null;a.oa=null;}
function AQu(a,b){var c,d;c=a.n_;d=a.oa;return !(b instanceof F6)?0:W9(b,d,c.hl.dm);}
function SA(){var a=this;B.call(a);a.tR=null;a.tQ=null;}
function ANa(a,b){var c,d;c=a.tR;d=a.tQ;return !(b instanceof F6)?0:W9(b,d,c.hl.dm);}
function SB(){B.call(this);this.vj=null;}
function ATV(a,b,c){c=c;return HY(a.vj,b,c);}
function Q6(){var a=this;B.call(a);a.vV=null;a.vW=null;}
function AOe(a,b){var c;c=a.vV;return Rk(b,a.vW,c.hl.dm);}
function Q5(){B.call(this);this.se=null;}
function AIu(a,b,c){return LZ(a.se,b,c);}
function UO(){X.call(this);this.zm=null;}
function AUl(a,b){return Cy(b)!=2?0:1;}
function NF(){X.call(this);this.zw=null;}
function AI$(a,b){return Cy(b)!=1?0:1;}
function TC(){X.call(this);this.yX=null;}
function AIT(a,b){return SZ(b);}
function TB(){X.call(this);this.yE=null;}
function ALZ(a,b){return 0;}
function YU(){X.call(this);this.Af=null;}
function ANt(a,b){return !Cy(b)?0:1;}
function QD(){X.call(this);this.zJ=null;}
function AUo(a,b){return Cy(b)!=9?0:1;}
function Py(){X.call(this);this.AS=null;}
function AQr(a,b){return GL(b);}
function SE(){X.call(this);this.zo=null;}
function AR9(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Nz(){X.call(this);this.xY=null;}
function AVA(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GL(b);}return b;}
function ND(){X.call(this);this.zN=null;}
function AKY(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GL(b);}return b;}
function O4(){X.call(this);this.Ab=null;}
function AUx(a,b){a:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Q9(){X.call(this);this.Ay=null;}
function AO$(a,b){return Ke(b);}
function Rf(){X.call(this);this.yZ=null;}
function ARw(a,b){return Rg(b);}
function Vk(){X.call(this);this.zU=null;}
function AT$(a,b){return Cy(b)!=3?0:1;}
function T9(){X.call(this);this.x1=null;}
function AU_(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=GL(b);}return b;}
function NW(){X.call(this);this.A0=null;}
function AKI(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=GL(b);}return b;}
function MZ(){X.call(this);this.mz=0;}
function AYv(a){var b=new MZ();AEY(b,a);return b;}
function AEY(a,b){Bv(a);a.mz=b;}
function AQt(a,b){return a.bj^(a.mz!=Cy(b&65535)?0:1);}
var Tv=G(MZ);
function ATc(a,b){return a.bj^(!(a.mz>>Cy(b&65535)&1)?0:1);}
function ABF(){var a=this;B.call(a);a.F5=null;a.K5=0;}
function RJ(){B.call(this);this.xU=null;}
function AOH(a){var b,c;b=a.xU;c=b.rh;b=b.ri;c.Bj(b.jS,b.mk,null);}
function Xv(){B.call(this);this.pl=null;}
function ARn(a,b){var c,d,e,f;c=a.pl;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.sd;c=BA();e=new M;O(e);H(H(e,C(656)),b);Bt(c,N(e));b=BA();f=d.length;c=new M;O(c);V(H(c,C(657)),f);Bt(b,N(c));}
function Xy(){var a=this;B.call(a);a.vn=null;a.vo=null;}
function APY(a,b){var c,d;c=a.vn;d=a.vo;b.arrayBuffer().then(Bl(c,"f"),Bl(d,"f"));}
function Va(){var a=this;B.call(a);a.nL=null;a.nM=null;}
function AMN(a,b){var c;c=a.nL;L1(a.nM,Kn(c,b.size));}
function Vd(){B.call(this);this.wV=null;}
function AH8(a,b){var c;c=a.wV;Bt(Fb(),$rt_str(b.message));L1(c,0);}
function Wh(){B.call(this);this.yP=null;}
function AOD(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Ut(){B.call(this);this.qa=null;}
function AI9(a,b){var c,d,e,f;c=a.qa;if(!c.kl){b=b.data;d=Dy(b[0]);e=EF(b[1]);AFB(c.e.f,d,e);c.i0=1;f=IA(Ez(),c.fw);b=new M;O(b);H(GJ(H(b,C(658)),f),C(200));$rt_globals.console.info($rt_ustr(N(b)));}}
function Uu(){B.call(this);this.rs=null;}
function AJP(a,b){var c,d,e,f,g,h;c=b.data;d=a.rs;e=(Dy(c[2])).data[0];if(e!=1)IP(d,b);else{d.kl=1;f=Dy(c[0]);g=EF(c[1]);ADi(d.e.f,f,g,d.i0);Wx(d,ADt(e));GU(Ct(d),A0J);Gs(Ct(d));h=IA(Ez(),d.fw);b=new M;O(b);H(GJ(H(b,C(659)),h),C(200));$rt_globals.console.info($rt_ustr(N(b)));UW(d);JC(d);}}
function Ur(){B.call(this);this.vc=null;}
function ARZ(a,b){IP(a.vc,b);}
var ABz=G();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",5,"worker",4,"js"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bU",AYS(AO6),"cO",AYR(AJR)],Tn,0,B,[],0,3,0,0,0,Od,0,B,[],3,3,0,0,0,Nt,0,B,[],3,3,0,0,0,Ys,0,B,[Od,Nt],0,3,0,0,0,ACa,0,B,[],4,0,0,0,0,ABO,0,B,[],4,3,0,0,0,GX,0,B,[],0,3,0,0,0,Ef,0,GX,[],0,3,0,0,0,Bu,0,Ef,[],0,3,0,0,0,ADW,0,Bu,[],0,3,0,0,0,CN,0,B,[],3,3,0,0,0,CG,0,B,[],3,3,0,0,0,Js,0,B,[],3,3,0,0,0,By,"String",1,B,[CN,CG,Js],0,3,0,FD,["cO",AYR(AJO),"bU",AYS(Bn),"m5",AYR(IX),"kG",AYS(AL2)],E0,0,GX,[],0,3,0,0,0,HM,0,E0,[],0,3,0,0,0,ADu,0,HM,[],0,3,0,0,0,D7,0,B,[CN],1,3,0,0,0,GE,
0,D7,[CG],0,3,0,0,["bU",AYS(AVh),"kG",AYS(AOc)],GI,0,B,[CN,Js],0,0,0,0,["iB",AYS(Kk),"cO",AYR(N)],Iv,0,B,[],3,3,0,0,0,M,0,GI,[Iv],0,3,0,0,["mM",AYV(AN8),"lR",AYU(AK5),"cO",AYR(D4),"iB",AYS(AOg),"nk",AYT(AOO)],EB,0,HM,[],0,3,0,0,0,AE0,0,EB,[],0,3,0,0,0,ADb,0,EB,[],0,3,0,0,0,Vh,0,B,[],3,3,0,0,0,Dw,0,B,[],3,3,0,0,0,QB,0,B,[],3,0,0,0,0,Jf,0,B,[Vh,Dw,QB],1,3,0,0,["em",AYR(F$)],Tg,0,Jf,[],0,3,0,0,0,AA7,0,B,[],0,3,0,0,0,AGi,0,B,[],4,3,0,0,0,Z,0,B,[],3,3,0,0,0,Vs,0,B,[Z],0,3,0,0,0,Bz,0,B,[],3,3,0,0,0,AD8,0,B,[Bz],1,
3,0,0,0,ABc,0,B,[],3,3,0,0,0,AFU,0,B,[],3,3,0,0,0,AFQ,0,B,[],3,3,0,0,0,Mu,0,B,[],0,3,0,0,0,AB8,0,B,[Bz],1,3,0,0,0,BY,0,B,[Bz],3,3,0,0,0,Vt,0,B,[BY],0,3,0,0,["bc",AYS(AHA)],Vr,0,B,[BY],0,3,0,0,["bc",AYS(AT_)],L5,0,B,[],4,3,0,0,0,AFN,0,B,[],4,3,0,0,0,ACP,0,B,[],0,3,0,0,0,AHu,0,B,[],4,3,0,0,0,Oj,0,B,[BY],0,3,0,0,["bc",AYS(AQd)]]);
$rt_metadata([AF9,0,B,[Bz],1,3,0,0,0,ABp,0,B,[],0,3,0,0,0,XD,0,B,[Bz],3,3,0,0,0,ADX,0,B,[XD],1,3,0,0,["AI",AYS(AML),"JZ",AYR(AO4)],ADJ,0,B,[Bz],1,3,0,0,0,HI,0,B,[],3,3,0,0,0,UM,0,B,[HI],0,3,0,0,0,BD,0,Bu,[],0,3,0,0,0,AEF,0,B,[],4,3,0,0,0,G4,0,Bu,[],0,3,0,0,0,Jm,0,Bu,[],0,3,0,0,0,C_,0,B,[CG],0,3,0,0,0,No,0,B,[Bz],3,3,0,0,0,Uf,0,B,[No],3,3,0,0,0,Es,0,B,[Bz],3,3,0,0,0,AGh,0,B,[Uf,Es],3,3,0,0,0,O6,0,B,[BY],0,3,0,0,["bc",AYS(ARp)],ADE,0,B,[],4,3,0,0,0,Q8,0,B,[Es],3,3,0,0,0,Td,0,B,[Es],3,3,0,0,0,S4,0,B,[Es],3,3,0,
0,0,Vf,0,B,[Es],3,3,0,0,0,Zu,0,B,[Es],3,3,0,0,0,Wr,0,B,[Es,Q8,Td,S4,Vf,Zu],3,3,0,0,0,Qf,0,B,[],3,3,0,0,0,QC,0,B,[Bz],3,3,0,0,0,ABb,0,B,[Bz,Wr,Qf,QC],1,3,0,0,["AI",AYS(AQo),"Dx",AYT(AS_),"KA",AYT(ASu),"GQ",AYU(AQj),"EB",AYS(AUu),"EL",AYR(AJ$),"CP",AYU(AH3)],BE,0,Bu,[],0,3,0,0,0,AAy,0,Bu,[],0,3,0,0,0,Ex,0,B,[],4,3,0,Lb,0,AG2,0,B,[Bz],1,3,0,0,0,AC7,0,B,[Bz],1,3,0,0,0,AHp,0,B,[Bz],1,3,0,0,0,KC,0,B,[Bz],3,3,0,0,0,Qv,0,B,[KC],0,3,0,0,["xv",AYS(AJ8)],ADs,0,B,[Bz],1,3,0,0,0,Qw,0,B,[KC],0,3,0,0,["xv",AYS(AH5)],HJ,0,
BD,[],0,3,0,0,0,ACy,0,B,[],0,3,0,0,0,Qe,0,B,[],3,3,0,0,0,Um,0,B,[Qe],0,3,0,0,0,B9,0,B,[],3,3,0,0,0,Tx,0,B,[B9],0,3,0,0,0,Bj,0,B,[],3,3,0,0,0,AD5,0,B,[Bj],0,3,0,0,0,ADA,0,B,[Bz],1,3,0,0,0,S8,0,B,[Bz],3,3,0,0,0,Xq,0,B,[S8],0,3,0,0,["GU",AYS(ANg)],Xn,0,B,[Bj],0,3,0,0,0,R9,0,B,[Bz],3,3,0,0,0]);
$rt_metadata([Xo,0,B,[R9],0,3,0,0,["xd",AYT(ALm)],AGp,0,B,[Bz],1,3,0,0,0,Cp,0,B,[Bz],3,3,0,0,0,Xl,0,B,[Cp],0,3,0,0,["cm",AYS(ARx)],LH,0,B,[],3,3,0,0,0,D5,0,B,[LH],1,3,0,0,0,Eg,0,B,[],3,3,0,0,0,ZQ,0,B,[LH],3,3,0,0,0,Ob,0,B,[ZQ],3,3,0,0,0,QL,0,D5,[Eg,CN,Ob],0,3,0,0,0,Xm,0,B,[BY],0,3,0,0,["bc",AYS(ASU)],Rd,0,B,[],0,3,0,0,0,LT,0,B,[],1,3,0,0,0,AFT,0,LT,[],0,3,0,0,0,Cz,0,B,[Dw],1,3,0,0,["c2",AYS(AVe)],JS,0,B,[HI],0,3,0,0,["wZ",AYT(Kf)],ACH,0,B,[],0,3,0,0,0,Yx,0,B,[Cp],0,3,0,0,["cm",AYS(AQT)],Yy,0,B,[Cp],0,3,0,0,
["cm",AYS(AQ_)],Yz,0,B,[Cp],0,3,0,0,["cm",AYS(APj)],YA,0,B,[Cp],0,3,0,0,["cm",AYS(AOK)],YB,0,B,[Cp],0,3,0,0,["cm",AYS(AO_)],YC,0,B,[Cp],0,3,0,0,["cm",AYS(ARH)],YD,0,B,[Cp],0,3,0,0,["cm",AYS(AM1)],YE,0,B,[Cp],0,3,0,0,["cm",AYS(AVO)],YF,0,B,[Cp],0,3,0,0,["cm",AYS(AL$)],YG,0,B,[Cp],0,3,0,0,["cm",AYS(AS4)],AAc,0,B,[Cp],0,3,0,0,["cm",AYS(AVf)],AAd,0,B,[Cp],0,3,0,0,["cm",AYS(AO2)],AAe,0,B,[Cp],0,3,0,0,["cm",AYS(APp)],AAf,0,B,[Cp],0,3,0,0,["cm",AYS(ARr)],VT,0,B,[],3,3,0,0,0,V_,0,B,[VT],0,3,0,0,0,V$,0,B,[Cp],0,3,0,
0,["cm",AYS(ANV)],Np,0,B,[],0,3,0,0,0,AGL,0,B,[],0,3,0,0,0,DW,0,B,[],3,3,0,0,0,Cr,0,B,[DW],3,3,0,0,0,Cu,0,B,[],3,3,0,0,["bR",AYS(AN1),"ci",AYT(AUb),"c5",AYT(AIC),"cB",AYU(ARG)],DO,0,B,[],3,3,0,0,0,EJ,0,B,[DW],3,3,0,0,0,E2,0,B,[],3,3,0,0,0,E4,0,B,[],3,3,0,0,0,Fo,0,B,[E4],3,3,0,0,0,Se,0,B,[Dw],0,3,0,0,0,Bf,0,B,[],0,3,0,0,["cO",AYR(AAD)],YK,0,B,[],0,3,0,0,0,AFS,0,B,[],0,3,0,0,0,ABJ,0,B,[],3,3,0,0,0,R7,0,B,[],0,3,0,0,0]);
$rt_metadata([Mk,0,B,[],0,3,0,0,0,DC,0,Mk,[],0,3,0,0,0,Yc,0,DC,[],0,3,0,0,0,EP,0,DC,[],0,3,0,0,0,ADp,0,DC,[],0,3,0,0,0,AFA,0,EP,[],0,3,0,0,0,AE6,0,EP,[],0,3,0,0,0,AB_,0,EP,[],0,3,0,0,0,AE5,0,DC,[],0,3,0,0,0,TD,0,B,[Bz],3,3,0,0,0,AHs,0,B,[TD],3,3,0,0,0,R5,0,B,[Dw],0,3,0,0,0,R6,0,B,[],0,3,0,0,0,Co,0,B,[CG,CN],1,3,0,0,0,He,0,Co,[],12,3,0,Kq,0,M2,0,B,[],3,3,0,0,0,U5,0,B,[M2],3,3,0,0,0,Wm,0,B,[],3,3,0,0,0,GO,0,B,[U5,Wm],1,3,0,0,0,J$,0,GO,[],0,3,0,0,0,AC$,0,J$,[],0,3,0,0,0,GC,0,GO,[],1,3,0,0,0,L3,0,GC,[],0,3,0,0,
["li",AYU(ANK)],Eb,0,Co,[],12,3,0,AUq,0,J2,0,B,[CG],1,3,0,0,0,M6,0,J2,[],0,3,0,AC1,0,K9,0,B,[],32,0,0,ABa,0,QQ,0,B,[],0,3,0,0,0,Hk,0,Co,[],12,0,0,AEt,0,GG,0,Co,[],12,0,0,AEv,0,Ln,0,GC,[],0,3,0,0,["li",AYU(ALI)],Xr,0,Ef,[],0,3,0,0,0,AFM,0,BE,[],0,3,0,0,0,M5,0,B,[Bz],3,3,0,0,0,ZO,0,B,[M5],0,3,0,0,["bc",AYS(ASt)],ZP,0,B,[M5],0,3,0,0,["bc",AYS(AJI)],Hw,0,B,[],1,3,0,0,0,TW,0,B,[],3,3,0,0,0,LK,0,Hw,[CG,Iv,Js,TW],1,3,0,0,0,KB,0,Hw,[CG],1,3,0,0,0,H_,0,B,[],0,3,0,HD,0,Oi,0,Cz,[],0,3,0,0,["bI",AYR(AOV),"cd",AYT(ANj)],CP,
0,Cz,[],1,3,0,0,["cd",AYT(G2)],Qc,0,B,[],3,3,0,0,0,KK,0,B,[Qc],3,3,0,0,0,KN,0,B,[],3,3,0,0,0,Kr,0,CP,[Cu,KK,KN,DO,E2,Fo],0,3,0,0,["g$",AYT(AUK),"c2",AYS(ARX),"bI",AYR(AO9),"gA",AYR(AM_),"w3",AYR(ASL),"xz",AYR(AO0),"uM",AYS(ATU),"cd",AYT(AOl),"jp",AYS(AIH),"bR",AYS(AQZ),"cB",AYU(ANd),"ci",AYT(APi),"c5",AYT(ARO),"df",AYU(ARl),"dQ",AYR(AN7)],XE,0,Kr,[],0,3,0,0,["gA",AYR(APw)],AGJ,0,B,[],0,3,0,0,0,AD0,0,B,[Bz],1,3,0,0,0]);
$rt_metadata([KL,0,LK,[],1,0,0,0,0,ADF,0,KL,[],0,0,0,0,0,Lv,0,B,[],1,3,0,0,0,Ms,0,B,[],0,3,0,0,0,ABl,0,B,[],0,3,0,0,0,I4,0,B,[Bz],3,3,0,0,0,Os,0,B,[I4],0,3,0,0,["bc",AYS(ALR)],Or,0,B,[I4],0,3,0,0,["bc",AYS(AQh)],Op,0,B,[BY],0,3,0,0,["bc",AYS(AQ6)],Oo,0,B,[BY],0,3,0,0,["bc",AYS(AKg)],Vv,0,B,[Z],0,3,0,0,["g",AYS(AVi)],Vx,0,B,[Z],0,3,0,0,["g",AYS(AOb)],XL,0,B,[B9],0,3,0,0,["bX",AYS(AUa)],XK,0,B,[B9],0,3,0,0,["bX",AYS(AIi)],XH,0,B,[B9],0,3,0,0,["bX",AYS(ALn)],XG,0,B,[B9],0,3,0,0,["bX",AYS(AQf)],XJ,0,B,[B9],0,3,
0,0,["bX",AYS(ALt)],XI,0,B,[B9],0,3,0,0,["bX",AYS(AHz)],XO,0,B,[B9],0,3,0,0,["bX",AYS(AK1)],XN,0,B,[B9],0,3,0,0,["bX",AYS(AOJ)],XQ,0,B,[B9],0,3,0,0,["bX",AYS(ASO)],XP,0,B,[B9],0,3,0,0,["bX",AYS(AHM)],UR,0,B,[B9],0,3,0,0,["bX",AYS(AH_)],UQ,0,B,[B9],0,3,0,0,["bX",AYS(AOj)],UP,0,B,[B9],0,3,0,0,["bX",AYS(APS)],UI,0,B,[B9],0,3,0,0,["bX",AYS(ALW)],UH,0,B,[B9],0,3,0,0,["bX",AYS(AHT)],UF,0,B,[B9],0,3,0,0,["bX",AYS(AUi)],UE,0,B,[B9],0,3,0,0,["bX",AYS(AOW)],UD,0,B,[B9],0,3,0,0,["bX",AYS(ASQ)],HC,0,B,[],0,3,0,0,0,QG,0,
HC,[],0,3,0,0,0,AF3,0,B,[],0,3,0,0,0,Nm,0,HC,[],0,3,0,0,0,VW,0,B,[Bz],3,3,0,0,0,OZ,0,B,[VW],0,3,0,0,["xv",AYS(AOo)],WB,0,B,[Z],0,3,0,0,["g",AYS(Ye)],Y6,0,KB,[],0,0,0,0,0,RY,0,B,[],0,3,0,0,0,Ju,0,B,[],0,3,0,0,0,ADN,0,B,[Cu,DO],0,0,0,0,["bR",AYS(AQ4),"cB",AYU(AUD),"ci",AYT(ASd),"c5",AYT(AOv),"df",AYU(ASD)],H5,0,B,[],3,3,0,0,["xK",AYR(AP8),"uv",AYR(AL4)],ACZ,0,B,[H5,Cu,KN],0,3,0,0,["uv",AYR(ALS),"xK",AYR(AIL),"w3",AYR(OT),"xz",AYR(Z_),"uM",AYS(PG),"c5",AYT(U3),"ci",AYT(NE),"cB",AYU(NX),"bR",AYS(Ph),"hJ",AYS(AUW)],Ih,
0,B,[],3,3,0,0,0,WM,0,B,[Ih],0,3,0,0,["iZ",AYS(AOd)],WN,0,B,[Ih],0,3,0,0,["iZ",AYS(AIZ)],WO,0,B,[Z],0,3,0,0,["g",AYS(AOs)],WH,0,B,[Z],0,3,0,0,["g",AYS(APl)],WJ,0,B,[Cr],0,3,0,0,["U",AYS(AUj)],IB,0,B,[Cr],0,3,0,0,["U",AYS(AL7)]]);
$rt_metadata([WK,0,B,[Z],0,3,0,0,["g",AYS(AS5)],WL,0,B,[EJ],0,3,0,0,["U",AYS(AK0)],AER,0,B,[Bz],1,3,0,0,0,ABE,0,B,[],3,3,0,0,0,Wd,0,B,[],0,3,0,0,0,TJ,0,B,[Cr],0,3,0,0,["U",AYS(AMJ)],TI,0,B,[Cr],0,3,0,0,["U",AYS(AKd)],B_,0,B,[],0,3,0,0,["bU",AYS(AVK)],EG,0,B,[],3,3,0,0,0,AGW,0,B,[Cu,EG],0,3,0,0,["bR",AYS(AAT),"cB",AYU(ABW),"ci",AYT(ADI),"c5",AYT(AGY),"g_",AYT(ANX)],AF_,0,B,[EG,H5],0,3,0,0,["xK",AYR(AP8),"uv",AYR(AL4),"g_",AYT(AVu),"hJ",AYS(AOQ)],ACB,0,B,[],0,3,0,0,0,LJ,0,B,[],0,3,0,0,0,Jx,0,B,[],0,3,0,0,0,ZA,
0,B,[],0,3,0,0,0,AGq,0,B,[],0,3,0,0,0,V7,0,B,[],0,3,0,0,0,ES,0,B,[Dw],0,0,0,0,0,AG4,0,B,[],0,3,0,0,0,ACz,0,B,[Dw],0,3,0,0,0,Yb,0,B,[],3,3,0,0,["ep",AYS(AHB)],HZ,0,B,[Yb],3,3,0,0,["ep",AYS(AHB),"mB",AYS(ANP)],E5,0,B,[HZ],1,3,0,0,["ep",AYS(AHB),"mB",AYS(ANP),"eh",AYR(D$),"oW",AYS(ASM)],TA,0,B,[HZ],3,3,0,0,["ep",AYS(AHB),"mB",AYS(ANP)],JW,0,B,[TA],3,3,0,0,["ep",AYS(AHB),"mB",AYS(ANP)],Gv,0,E5,[JW],1,3,0,0,["ep",AYS(AHB),"mB",AYS(ANP),"tC",AYS(ARQ),"br",AYR(BZ),"uo",AYT(AQR),"nE",AYT(ATN),"bU",AYS(APE)],L4,0,B,
[],3,3,0,0,0,ABt,0,Gv,[Eg,CN,L4],0,3,0,0,["mB",AYS(ANP),"jU",AYS(Br),"cW",AYR(AQy),"tC",AYS(BC),"nE",AYT(Th),"nu",AYS(Ey),"oW",AYS(XV),"iS",AYR(H0),"uo",AYT(ABX),"ep",AYS(D9)],Pa,0,B,[Z],0,3,0,0,0,O_,0,B,[Z],0,3,0,0,["g",AYS(AJb)],O$,0,B,[Z],0,3,0,0,["g",AYS(AIf)],O9,0,B,[Bj],0,3,0,0,["o",AYR(AIe)],Pf,0,B,[Bj],0,3,0,0,["o",AYR(AL6)],Pd,0,B,[Bj],0,3,0,0,["o",AYR(AWb)],Pc,0,B,[Bj],0,3,0,0,["o",AYR(AOF)],Pb,0,B,[Bj],0,3,0,0,["o",AYR(AQ7)],O8,0,B,[Bj],0,3,0,0,["o",AYR(AVl)],O7,0,B,[Bj],0,3,0,0,["o",AYR(AHZ)],FC,
0,Co,[],12,3,0,AIc,0,K6,0,B,[],4,3,0,ANw,0,Ng,0,B,[],3,3,0,0,0,RZ,0,B,[Bj],0,3,0,0,["o",AYR(AMZ)],RX,0,B,[Bj],0,3,0,0,["o",AYR(AHR)],AAa,0,B,[],3,3,0,0,0,Le,0,B,[],0,3,0,0,0,Fi,0,B,[],0,3,0,0,0,K0,0,Fi,[],0,3,0,0,0,UK,0,Fi,[],0,3,0,0,0,RK,0,Fi,[],0,3,0,0,0,FV,0,B,[],3,3,0,0,0]);
$rt_metadata([T6,0,B,[],3,3,0,0,0,Hs,0,B,[CG],0,3,0,0,0,LB,0,B,[],0,3,0,0,0,X7,0,B,[],3,3,0,0,0,Ux,0,B,[X7],0,3,0,0,["cO",AYR(AKJ)],Wg,0,B,[],3,3,0,0,0,LI,"JsFileHandle",7,B,[Wg],0,3,0,0,["cO",AYR(ANS)],Tu,0,B,[Ng],0,3,0,0,0,Lh,0,D5,[Eg,CN],0,3,0,0,0,CD,0,B,[],0,3,0,0,0,ACo,0,B,[],0,3,0,0,0,O0,0,B,[Bj],0,3,0,0,["o",AYR(AVp)],Cf,0,B,[],0,3,0,0,0,Om,0,B,[],0,3,0,0,0,Ly,0,Lh,[],0,3,0,0,0,AG1,0,B,[CG],0,3,0,0,["bU",AYS(ATa),"kG",AYS(AJ0)],Si,0,B,[HI],0,3,0,0,["wZ",AYT(AQP)],Xd,0,B,[],0,3,0,0,["cO",AYR(AM8),"bU",
AYS(ASl)],HQ,0,B,[],3,3,0,0,0,GV,0,B,[HQ,Eg],0,0,0,0,["bU",AYS(AKM)],G5,0,GV,[],0,0,0,0,0,Ls,0,Lv,[],1,3,0,0,0,Rb,0,Ls,[],0,3,0,0,0,I9,0,Ef,[],0,3,0,0,0,NI,0,B,[I4],0,3,0,0,["bc",AYS(AVx)],NL,0,B,[BY],0,3,0,0,["bc",AYS(AUv)],NJ,0,B,[BY],0,3,0,0,["bc",AYS(AI1)],IJ,0,B,[],0,3,0,0,0,JK,0,CP,[KK],0,3,0,0,["c2",AYS(ATv),"bI",AYR(AMM),"gA",AYR(AVa),"cd",AYT(AHL),"mh",AYT(AE4),"jp",AYS(ALe)],AA1,0,Cz,[],0,3,0,0,["c2",AYS(AIn),"bI",AYR(AK$),"cd",AYT(AOr)],Po,0,CP,[Cu,EG],0,3,0,0,["g_",AYT(ANA),"cd",AYT(ALT),"bI",AYR(AK_),
"bR",AYS(AOt),"ci",AYT(ATI),"c5",AYT(ASY),"cB",AYU(AJc)],UG,0,CP,[EG],0,3,0,0,["g_",AYT(AKT),"bI",AYR(AQQ),"cd",AYT(AJB),"c2",AYS(AK4)],Ox,0,CP,[Cu],0,3,0,0,["bR",AYS(AN1),"ci",AYT(AUb),"c5",AYT(AIC),"cB",AYU(ARG),"bI",AYR(ASN),"c2",AYS(AIa)],UC,0,Cz,[],0,3,0,0,["bI",AYR(AHK),"cd",AYT(AHJ)],Df,0,Cz,[],0,3,0,0,["bI",AYR(TV),"cd",AYT(Un)],R_,"SelectFileTest",5,Df,[],0,3,0,0,0,ABd,"WorkerTest",6,Df,[],0,3,0,0,0,NV,"RenderTexture",5,Df,[],0,3,0,0,["c2",AYS(AM7),"bI",AYR(AKU),"cd",AYT(AU6)],Uw,"ScissorDemo",5,Df,
[],0,3,0,0,["bI",AYR(AVV),"cd",AYT(AMC)],Ul,0,Cz,[],0,3,0,0,["bI",AYR(AUA),"cd",AYT(ALc),"c2",AYS(ASh)],Jw,"ClipboardTest",5,Df,[Cu],0,3,0,0,["bR",AYS(AN1),"ci",AYT(AUb),"c5",AYT(AIC),"cB",AYU(AN9)],T3,0,Cz,[],0,3,0,0,["bI",AYR(AVJ),"cd",AYT(AQi)],G$,0,Cz,[Cu],1,3,0,0,["bR",AYS(AN1),"ci",AYT(AUb),"c5",AYT(AIC),"cB",AYU(ARG),"bI",AYR(ACL)],Vn,0,G$,[],0,3,0,0,["ci",AYT(AUb),"c5",AYT(AIC),"cB",AYU(ARG),"cd",AYT(ARR),"bR",AYS(ATs)],Vm,0,G$,[],0,3,0,0,["ci",AYT(AUb),"c5",AYT(AIC),"cB",AYU(ARG),"bR",AYS(AVo),"bI",
AYR(AKP),"cd",AYT(AIP)],Zj,0,CP,[EG],0,3,0,0,["g_",AYT(ALO),"bI",AYR(AUe),"cd",AYT(ATn),"c2",AYS(AMD)],Nx,0,JK,[],0,3,0,0,["gA",AYR(AJS),"mh",AYT(AV7)],Je,0,B,[],0,3,0,0,0,ABD,0,B,[],3,3,0,0,0,AAR,0,B,[],0,3,0,0,0]);
$rt_metadata([AEp,0,B,[],3,3,0,0,0,AHd,0,B,[],0,3,0,0,0,Na,0,B,[HQ,CN],0,3,0,0,0,Kb,0,Na,[],0,0,0,0,0,AGH,0,B,[],0,3,0,0,0,Rl,0,B,[Cr],0,3,0,0,["U",AYS(AJu)],Ri,0,B,[Z],0,3,0,0,["g",AYS(AMc)],Rj,0,B,[E2],0,3,0,0,["g$",AYT(ATH)],Pi,0,B,[Fo],0,3,0,0,["dQ",AYR(ARf)],Pj,0,B,[DO],0,3,0,0,["df",AYU(ANU)],Pg,0,B,[EJ],0,3,0,0,["U",AYS(AOL)],AG9,0,Ju,[],0,3,0,0,0,WC,0,B,[Cu],0,0,0,0,["bR",AYS(AJM),"cB",AYU(AH1),"ci",AYT(AJG),"c5",AYT(AIR)],RQ,0,B,[Cr],0,3,0,0,["U",AYS(ATY)],RP,0,B,[Cr],0,3,0,0,["U",AYS(ARh)],RO,0,B,
[E2],0,3,0,0,["g$",AYT(AN$)],RN,0,B,[Bj],0,3,0,0,["o",AYR(AH7)],RM,0,B,[EJ],0,3,0,0,["U",AYS(AQn)],RL,0,B,[DO],0,3,0,0,["df",AYU(AT6)],HF,0,B_,[],0,3,0,0,0,NK,0,B,[],0,3,0,0,0,AEr,0,B,[],0,3,0,0,0,VO,0,B,[Cr],0,3,0,0,["U",AYS(APR)],VK,0,B,[EJ],0,3,0,0,["U",AYS(AS2)],ACw,0,B,[],0,3,0,0,["bU",AYS(ASS)],VL,0,B,[Bj],0,3,0,0,["o",AYR(AV3)],VM,0,B,[Bj],0,3,0,0,["o",AYR(AI4)],C$,0,B,[],0,3,0,0,0,Xz,0,B,[Cr],0,3,0,0,["U",AYS(AN0)],XB,0,B,[EJ],0,3,0,0,["U",AYS(AID)],AED,0,B,[],0,3,0,0,0,XA,0,B,[DO],0,3,0,0,["df",AYU(ARN)],AGK,
0,B,[],0,3,0,0,0,N0,0,B,[EG],0,3,0,0,["g_",AYT(AP2)],NY,0,B,[Cr],0,3,0,0,["U",AYS(AQp)],S_,0,B,[],3,3,0,0,0,AA2,0,B,[S_],0,3,0,0,0,Oc,0,B,[Cu],0,0,0,0,["cB",AYU(ARG),"ci",AYT(AIr),"c5",AYT(AIw),"bR",AYS(ALx)],TK,0,B,[DO],0,3,0,0,["df",AYU(APZ)],Rr,0,B,[Cr],0,3,0,0,["U",AYS(APH)],SJ,0,B,[Z],0,3,0,0,["g",AYS(APC)],SI,0,B,[Z],0,3,0,0,["g",AYS(ASo)],SL,0,B,[Z],0,3,0,0,["g",AYS(AJU)],SK,0,B,[Z],0,3,0,0,["g",AYS(AI3)],SH,0,B,[Z],0,3,0,0,["g",AYS(AUX)],SG,0,B,[Z],0,3,0,0,["g",AYS(ANJ)],VZ,0,B,[Cu],0,0,0,0,["c5",AYT(AIC),
"cB",AYU(ARG),"bR",AYS(AQY),"ci",AYT(AVv)],C3,0,B,[],3,3,0,F0,0,Ro,0,B,[Cu],0,0,0,0,["cB",AYU(ARG),"ci",AYT(ANl),"c5",AYT(AIM),"bR",AYS(ALF)],AAi,0,B,[DO],0,3,0,0,["df",AYU(AT1)]]);
$rt_metadata([YZ,0,B,[Cr],0,3,0,0,["U",AYS(AKE)],YY,0,B,[E2],0,3,0,0,["g$",AYT(AOi)],YX,0,B,[E2],0,3,0,0,["g$",AYT(AKL)],YV,0,B,[Fo],0,3,0,0,["dQ",AYR(AO3)],Y0,0,B,[Fo],0,3,0,0,["dQ",AYR(ATh)],TH,0,B,[Cr],0,3,0,0,["U",AYS(AUU)],Z8,0,B,[Cr],0,3,0,0,["U",AYS(AKn)],Z$,0,B,[EJ],0,3,0,0,["U",AYS(AIy)],Z9,0,B,[DO],0,3,0,0,["df",AYU(ASm)],AFX,0,B,[],0,3,0,0,["bU",AYS(AKy)],Db,0,B,[],3,3,0,ALP,0,Cj,0,Co,[],12,3,0,AFC,0,JB,0,B,[],0,3,0,0,0,IQ,0,B,[],0,3,0,0,0,AEg,0,B,[],0,3,0,0,0,DQ,0,B,[],3,3,0,AIm,0,Qs,0,B,[Bz],3,
3,0,0,0,QO,0,B,[Qs],0,3,0,0,["xd",AYT(AMg)],Qt,0,B,[Bz],3,3,0,0,0,QM,0,B,[Qt],0,3,0,0,["xd",AYT(ANo)],ACc,0,B,[],0,3,0,0,0,AAY,0,B,[Bz],3,3,0,0,0,J_,0,B,[Dw],0,3,0,0,["em",AYR(AE_)],YN,0,B,[],0,3,0,0,0,DU,0,B,[],3,3,0,AEx,0,G_,0,B,[],3,3,0,0,0,P1,0,B,[G_],0,3,0,0,["n0",AYU(AR6)],P2,0,B,[G_],0,3,0,0,0,Tw,0,B,[Cu],0,0,0,0,["bR",AYS(AVE),"cB",AYU(ARq),"ci",AYT(AVq),"c5",AYT(APm)],WG,0,B,[Z],0,3,0,0,["g",AYS(AQc)],AHl,0,B,[],0,3,0,0,0,X4,0,B,[Z],0,3,0,0,["g",AYS(ANp)],WV,0,B,[Cr],0,3,0,0,["U",AYS(AMW)],Uk,0,B,[Cu],
0,0,0,0,["ci",AYT(AUb),"c5",AYT(AIC),"cB",AYU(ARG),"bR",AYS(AVm)],ACf,0,B,[],0,3,0,0,0,I5,0,B,[],0,3,0,0,0,HG,0,B,[],4,3,0,0,0,ABM,0,B,[],0,3,0,0,0,Ck,0,Co,[],12,3,0,ACF,0,AGR,0,B,[],0,3,0,0,0,ADa,0,B,[Bz],4,3,0,0,0,AHk,0,B,[],0,3,0,0,0,ABQ,0,B,[],3,3,0,0,0,CW,0,B,[Bz],1,3,0,0,0,AEK,0,CW,[],1,3,0,0,0,AFw,0,CW,[],1,3,0,0,0,ACg,0,CW,[],1,3,0,0,0,ACA,0,CW,[],1,3,0,0,0,AF1,0,CW,[],1,3,0,0,0,Y3,0,B,[Bj],0,3,0,0,["o",AYR(ANO)]]);
$rt_metadata([ABC,0,B,[],0,3,0,0,0,ID,0,B,[],0,3,0,0,0,W$,0,B,[],0,3,0,0,0,My,0,B,[],0,3,0,0,0,AC0,0,B,[],4,3,0,0,0,PF,0,B,[Cu],0,0,0,0,["ci",AYT(AUb),"c5",AYT(AIC),"cB",AYU(ARG),"bR",AYS(AV8)],AC9,0,B,[Bz],1,3,0,0,0,Te,0,B,[Z],0,3,0,0,["g",AYS(AJk)],XW,0,B,[E4],0,3,0,0,["dQ",AYR(AVy)],AFq,0,B,[],0,3,0,0,0,AEG,0,B,[],3,3,0,0,0,Mi,0,B,[],3,3,0,0,0,R4,0,B,[Mi],0,3,0,0,["sG",AYS(AJ3)],Yn,0,B,[Z],0,3,0,0,["g",AYS(AP0)],AFj,0,B,[],0,3,0,0,0,Ry,0,B,[Dw],0,3,0,0,0,Zy,0,B,[],0,3,0,0,0,Z1,0,B,[Z],0,3,0,0,["g",AYS(ALz)],AAW,
0,B,[],0,3,0,0,0,AGc,0,B,[CG],0,3,0,0,["bU",AYS(AIh),"m5",AYR(ARW),"kG",AYS(ARv)],Zq,0,B,[Z],0,3,0,0,["g",AYS(AH2)],T4,0,B,[],3,3,0,0,0,E$,0,B,[],3,3,0,0,0,OO,0,B,[E$],0,0,0,0,["bz",AYR(B1),"bn",AYR(B3),"l4",AYR(SR)],F9,0,I9,[],0,3,0,0,0,Zn,0,E0,[],0,3,0,0,0,AF8,0,B,[],0,3,0,0,0,Uo,0,D5,[Eg,CN],0,3,0,0,0,XT,0,B,[],0,3,0,0,0,Xw,0,B,[],0,3,0,0,0,Xj,0,B,[Z],0,3,0,0,["g",AYS(AUB)],Z2,0,B,[Bj],0,3,0,0,["o",AYR(ASy)],ZD,0,D7,[CG],0,3,0,0,0,FO,0,B,[],0,0,0,0,0,Id,0,B,[],4,3,0,0,0,Xc,0,B,[],0,3,0,0,0,MP,0,B,[],1,3,
0,0,0,ADy,0,CW,[],1,3,0,0,0,Pr,0,B,[Z],0,3,0,0,["g",AYS(AJq)],R1,0,B,[Z],0,3,0,0,["g",AYS(AI8)],Sm,0,B,[Z],0,3,0,0,["g",AYS(APU)],Fc,0,B,[Dw],0,3,0,0,["em",AYR(AR0),"jX",AYR(AP7),"jZ",AYU(S9),"fJ",AYS(AGG),"ln",AYS(AOP),"lg",AYS(AUZ),"ro",AYT(ASc),"cB",AYU(AM9),"ci",AYT(AJQ),"c5",AYT(APD),"bR",AYS(AUC),"df",AYU(ARV)],Gi,0,Fc,[],0,3,0,0,0,Sg,0,Gi,[H5],0,3,0,0,["xK",AYR(AP8),"uv",AYR(AL4),"em",AYR(AUz),"ro",AYT(AK9),"fJ",AYS(AIp),"lg",AYS(ARs),"ln",AYS(ATj),"xf",AYR(ACb),"bR",AYS(AOI),"ci",AYT(ALV),"cB",AYU(ARJ),
"hJ",AYS(ATF)],Og,0,B,[Bj],0,3,0,0,["o",AYR(AMk)],ACE,0,Fc,[],0,3,0,0,["em",AYR(ATd),"jZ",AYU(AMw),"fJ",AYS(ASi),"cB",AYU(ATR),"ci",AYT(ATi),"c5",AYT(AP4),"bR",AYS(API),"df",AYU(ALK),"jX",AYR(AVg)],Qd,0,Gi,[],0,3,0,0,["xf",AYR(AKG),"jX",AYR(AVj),"lg",AYS(ARz),"fJ",AYS(AVH),"ln",AYS(AIQ)],YJ,0,B,[Z],0,3,0,0,0,TM,0,D7,[CG],0,3,0,0,0,Qz,0,B,[Bj],0,3,0,0,["o",AYR(ATq)]]);
$rt_metadata([OS,0,B,[Bj],0,3,0,0,["o",AYR(AKc)],VF,0,B,[],0,3,0,0,0,I7,0,B,[],0,3,0,0,0,Xt,0,Fc,[],0,3,0,0,0,VN,0,B,[],0,3,0,0,0,Uz,0,B,[Bj],0,3,0,0,["o",AYR(AJo)],PI,0,B,[Z],0,3,0,0,["g",AYS(AIA)],PH,0,B,[Z],0,3,0,0,["g",AYS(AIY)],K5,0,B,[],0,3,0,0,0,CL,0,Bu,[],0,3,0,0,0,AE3,0,E0,[],0,3,0,0,0,WR,0,B,[FV],0,3,0,0,0,YM,0,B,[Z],0,3,0,0,0,TS,0,B,[Z],0,3,0,0,["g",AYS(ALp)],TR,0,B,[Z],0,3,0,0,["g",AYS(AUy)],K_,0,MP,[],1,3,0,0,0,Vc,0,K_,[],0,3,0,0,0,ZW,0,B,[Z],0,3,0,0,["g",AYS(AUs)],Ql,0,B,[E4],0,3,0,0,["dQ",AYR(AIG)],Qk,
0,B,[E4],0,3,0,0,["dQ",AYR(ALN)],Ui,0,B,[E4],0,3,0,0,["dQ",AYR(AQJ)],UU,0,B,[Bj],0,3,0,0,["o",AYR(AUk)],SM,0,B,[BY],0,3,0,0,["bc",AYS(AHP)],Wl,0,B,[BY],0,3,0,0,["bc",AYS(AVb)],NG,0,B,[Z],0,3,0,0,0,AEf,0,B,[B9],0,3,0,0,0,AFt,0,B,[B9],0,3,0,0,0,OK,0,B,[Z],0,3,0,0,["g",AYS(AKA)],OI,0,B,[Z],0,3,0,0,["g",AYS(AST)],Nv,0,B,[Z],0,3,0,0,["g",AYS(ATf)],XS,0,B,[Bj],0,3,0,0,["o",AYR(AJF)],Ib,0,GV,[],0,0,0,0,0,Hu,0,Bu,[],0,3,0,0,0,WT,0,B,[Z],0,3,0,0,["g",AYS(AQs)],Rq,0,D7,[CG],0,3,0,0,0,I$,0,B,[],4,3,0,0,0,NH,0,B,[BY],0,
3,0,0,["bc",AYS(AWa)],AA8,0,B,[Z],0,3,0,0,0,Wa,0,B,[],0,3,0,0,0,Z3,0,B,[G_],0,3,0,0,["n0",AYU(AR8)],Fw,0,B,[],0,3,0,0,0,Z6,0,B,[Z],0,3,0,0,["g",AYS(AMp)],Lu,0,Fw,[],0,3,0,0,0,Iy,0,Fw,[],0,3,0,0,0,Yd,0,B,[Z],0,3,0,0,["g",AYS(AIX)],RA,0,B,[],0,3,0,0,0,Qr,0,B,[Z],0,3,0,0,["g",AYS(APn)],D_,0,Bu,[],0,3,0,0,0,OY,0,B,[],0,3,0,0,0,Pk,0,B,[],0,3,0,0,0]);
$rt_metadata([AGf,0,B,[],0,3,0,0,0,U2,0,B,[],0,0,0,0,0,ABG,0,B,[],3,3,0,0,0,QF,0,B,[HZ],3,3,0,0,["ep",AYS(AHB),"mB",AYS(ANP)],EU,0,E5,[QF],1,3,0,0,["ep",AYS(AHB),"mB",AYS(ANP)],QW,0,EU,[],0,0,0,0,["mB",AYS(ANP)],Nf,0,B,[Z],0,3,0,0,["g",AYS(ALC)],WY,0,B,[Z],0,3,0,0,["g",AYS(AOG)],JR,0,B,[],0,3,0,0,["bU",AYS(AEB)],F6,0,JR,[],0,3,0,0,["bU",AYS(AJv)],EO,0,B,[],0,3,0,0,["bU",AYS(ABw)],Fu,0,EO,[],0,3,0,0,0,EC,0,EO,[],0,3,0,0,["bU",AYS(AUI)],EK,0,EO,[],0,3,0,0,["bU",AYS(AIE)],NO,0,B,[B9],0,3,0,0,0,NP,0,B,[Z],0,3,0,
0,["g",AYS(ANe)],ZJ,0,B,[BY],0,3,0,0,["bc",AYS(ASK)],ZI,0,B,[BY],0,3,0,0,["bc",AYS(AKX)],YP,0,B,[BY],0,3,0,0,["bc",AYS(AMx)],YO,0,B,[BY],0,3,0,0,["bc",AYS(ANn)],ACp,0,B,[],1,3,0,0,0,Y1,0,B,[],3,3,0,0,0,ZE,0,B,[Cp],0,3,0,0,["cm",AYS(AMl)],ABS,0,B,[],0,3,0,0,0,AHq,0,B,[],0,3,0,0,0,Zo,0,B,[Bj],0,3,0,0,["o",AYR(AIU)],Zp,0,B,[Bj],0,3,0,0,["o",AYR(AM3)],AGX,0,B,[CG],0,3,0,0,["bU",AYS(AQb)],Oa,0,B,[Z],0,3,0,0,["g",AYS(AOE)],AAo,0,B,[Z],0,3,0,0,["g",AYS(AV$)],AFc,0,B,[],0,3,0,0,0,Ff,0,B,[],0,3,0,0,0,ABo,0,B,[],0,3,
0,0,0,KY,0,EU,[],1,0,0,0,["ep",AYS(AHB),"mB",AYS(ANP)],Xk,0,KY,[],0,0,0,0,["ep",AYS(AHB),"mB",AYS(ANP)],Ma,0,D5,[],1,0,0,0,0,Xh,0,Ma,[],0,0,0,0,0,MJ,0,Gv,[L4],1,0,0,0,["ep",AYS(AHB),"iS",AYR(AKO),"nu",AYS(APf),"mB",AYS(ANW)],Xi,0,MJ,[],0,0,0,0,["ep",AYS(AHB),"jU",AYS(APo),"cW",AYR(AOx),"br",AYR(ALi),"eh",AYR(AIK)],Xf,0,B,[E$],0,0,0,0,["bz",AYR(AIq),"bn",AYR(AQI),"l4",AYR(ASB)],Q_,0,B,[E$],3,3,0,0,0,Xg,0,B,[Q_],0,0,0,0,0,AAu,0,B,[HI],0,3,0,0,0,E_,0,B,[],0,0,0,0,0,UA,0,E_,[E$],0,0,0,0,0,JF,0,D_,[],0,3,0,0,0,It,
0,Bu,[],0,3,0,0,0,MB,0,Bu,[],0,3,0,0,0,AGI,0,B,[Z],0,3,0,0,0,Tt,0,B,[Bj],0,3,0,0,["o",AYR(AQV)]]);
$rt_metadata([WD,0,B,[Z],0,3,0,0,["g",AYS(AMr)],P$,0,B,[Bj],0,3,0,0,["o",AYR(AJX)],AE7,0,B,[],0,3,0,0,0,Hf,0,B,[],0,3,0,0,0,Wu,0,EU,[],0,0,0,0,["ep",AYS(AHB),"mB",AYS(ANP)],QX,0,E5,[],0,0,0,0,["ep",AYS(AHB),"mB",AYS(ANP)],Ss,0,B,[M2],3,3,0,0,0,OP,0,B,[Ss],3,3,0,0,0,Hx,0,B,[OP],1,3,0,0,0,ACY,0,Hx,[],0,3,0,0,0,V1,0,B,[Bj],0,3,0,0,["o",AYR(AKQ)],V2,0,B,[Bj],0,3,0,0,["o",AYR(AHO)],VY,0,B,[Bj],0,3,0,0,["o",AYR(AN3)],V0,0,B,[Bj],0,3,0,0,["o",AYR(ARe)],Vz,0,B,[Bj],0,3,0,0,["o",AYR(APk)],VB,0,B,[Bj],0,3,0,0,["o",AYR(ARd)],VA,
0,B,[Bj],0,3,0,0,["o",AYR(ATO)],R2,0,B,[],3,3,0,0,0,AAn,0,B,[Bj],0,3,0,0,["o",AYR(AR_)],Za,0,B,[FV],0,3,0,0,["kx",AYT(ANL)],NM,0,B,[],0,3,0,0,0,SY,0,B,[],0,3,0,0,0,O5,0,B,[Z],0,3,0,0,["g",AYS(APx)],X1,0,B,[Z],0,3,0,0,["g",AYS(AMo)],X0,0,B,[Mi],0,3,0,0,["sG",AYS(K7)],YH,0,BD,[],0,3,0,0,0,Yg,0,B,[Bj],0,3,0,0,["o",AYR(AJt)],Yf,0,B,[Bj],0,3,0,0,["o",AYR(AIo)],Yi,0,B,[Bj],0,3,0,0,["o",AYR(ANZ)],Zt,0,B,[Bj],0,3,0,0,["o",AYR(AR2)],Zs,0,B,[Bj],0,3,0,0,["o",AYR(AM0)],Pn,0,B,[E4],0,3,0,0,["dQ",AYR(ATE)],PP,0,B,[Bj],0,
3,0,0,["o",AYR(AL0)],PQ,0,B,[Bj],0,3,0,0,["o",AYR(AUG)],PR,0,B,[Bj],0,3,0,0,["o",AYR(AR7)],PM,0,B,[Bj],0,3,0,0,["o",AYR(AMI)],PO,0,B,[Bj],0,3,0,0,["o",AYR(AVG)],Yh,0,B,[FV],0,3,0,0,["kx",AYT(APy)],RW,0,B,[BY],0,3,0,0,["bc",AYS(AK8)],Jt,0,B,[Bz],3,3,0,0,0,NC,0,B,[Jt],0,3,0,0,["sE",AYR(ANs)],Nn,0,B,[Jt],0,3,0,0,["sE",AYR(AHD)],Wf,0,B,[G_],0,3,0,0,0,ZH,0,B,[BY],0,3,0,0,["bc",AYS(AMT)],Wj,0,E_,[E$],0,0,0,0,0,S1,0,E_,[E$],0,0,0,0,0,Wo,0,B,[],3,3,0,AXa,0,SX,0,B,[CN],4,3,0,0,0,Uv,0,B,[Z],0,3,0,0,["g",AYS(AI_)],UJ,
0,B,[Z],0,3,0,0,["g",AYS(AS8)]]);
$rt_metadata([Gh,0,Co,[],12,0,0,Ue,0,O1,0,B,[Z],0,3,0,0,["g",AYS(AM6)],Xe,0,B,[Z],0,3,0,0,["g",AYS(AKq)],G8,0,B,[],3,3,0,0,0,W4,0,B,[G8],0,3,0,0,["jK",AYU(AN_)],W2,0,B,[G8],0,3,0,0,["jK",AYU(AJh)],IF,0,B,[CN,CG],0,3,0,0,0,Gu,0,B,[],3,3,0,0,0,AGC,0,B,[Gu],0,3,0,0,0,Qb,0,B,[Gu],3,3,0,0,0,AGD,0,B,[Qb],0,3,0,0,0,Ud,0,B,[G8],0,3,0,0,["jK",AYU(AQK)],Ub,0,B,[DW],0,3,0,0,["U",AYS(AOq)],Ua,0,B,[DW],0,3,0,0,["U",AYS(AS9)],T_,0,B,[G8],0,3,0,0,["jK",AYU(ARm)],BK,0,B,[],1,0,0,0,["cs",AYU(H$),"cv",AYV(In),"ir",AYR(AJK),"Q",
AYS(AT3),"b2",AYS(AT2),"fV",AYR(AU4),"eM",AYR(JN)],Vi,0,B,[],32,0,0,AXK,0,Vy,0,B,[Z],0,3,0,0,["g",AYS(AJA)],U8,0,B,[Z],0,3,0,0,["g",AYS(AVZ)],Ot,0,B,[Bj],0,3,0,0,["o",AYR(AUc)],OH,0,B,[Z],0,3,0,0,["g",AYS(AKC)],OJ,0,B,[Z],0,3,0,0,["g",AYS(AQS)],CT,0,BK,[],0,0,0,M3,["c",AYU(AI5),"K",AYS(AJr)],Ha,0,B,[],0,0,0,0,0,Jn,0,BE,[],0,3,0,0,0,Zl,0,B,[BY],0,3,0,0,["bc",AYS(AQ3)],AEw,0,B,[Bz],3,3,0,0,0,VU,0,B,[BY],0,3,0,0,["bc",AYS(AQA)],Tr,0,CT,[],0,0,0,0,["c",AYU(AIt),"K",AYS(ASq)],ZV,0,CT,[],0,0,0,0,["c",AYU(AKr)],RC,
0,CT,[],0,0,0,0,["c",AYU(AJH)],UB,0,CT,[],0,0,0,0,["c",AYU(AIB),"K",AYS(AQM)],FM,0,CT,[],0,0,0,0,["c",AYU(AUm)],B6,0,BK,[],1,0,0,0,["c",AYU(AVF),"b9",AYR(ATu),"K",AYS(ANB)],AGa,0,B6,[],0,0,0,0,["bC",AYT(ASR),"cs",AYU(ALJ),"cv",AYV(AKi),"K",AYS(AIz)],B2,0,BK,[],0,0,0,0,["c",AYU(AMt),"Q",AYS(AQC),"b2",AYS(AOy),"K",AYS(ARu),"eM",AYR(AKe)],JD,0,B2,[],0,0,0,0,["c",AYU(AQm),"K",AYS(ARP)],DX,0,JD,[],0,0,0,0,["c",AYU(AKV),"Q",AYS(ARA)],NA,0,DX,[],0,0,0,0,["c",AYU(AQx),"K",AYS(AT8)],X$,0,DX,[],0,0,0,0,["c",AYU(AJl),
"K",AYS(ATA)],S2,0,DX,[],0,0,0,0,["c",AYU(AJ_),"K",AYS(AV6)],Ve,0,DX,[],0,0,0,0,["c",AYU(AHX),"K",AYS(ASb)],GW,0,B2,[],0,0,0,0,["c",AYU(AIk),"cs",AYU(AOS),"cv",AYV(ASv),"b2",AYS(AOp),"fV",AYR(AQG),"eM",AYR(AU8)],Hc,0,B,[],1,0,0,0,0,X,0,Hc,[],1,0,0,Qi,["dA",AYR(AJn),"fl",AYR(AIS),"jR",AYR(ATm),"hC",AYR(AU1)],AB3,0,X,[],0,0,0,0,["l",AYS(C4),"dA",AYR(CY),"fl",AYR(ALD),"jR",AYR(ATT),"cO",AYR(APJ),"hC",AYR(ALU)],JY,0,Bu,[],0,3,0,0,0,Ee,0,BK,[],1,0,0,0,["b2",AYS(ASx),"K",AYS(AUf),"eM",AYR(APc)],C5,0,Ee,[],0,0,0,0,
["c",AYU(AH0)],Fm,0,C5,[],0,0,0,0,["c",AYU(AI7)]]);
$rt_metadata([CV,0,Ee,[],0,0,0,0,["c",AYU(AIj)],EM,0,C5,[],0,0,0,0,["c",AYU(AO1),"Q",AYS(AV_)],Yp,0,C5,[],0,0,0,0,["c",AYU(AVw),"cs",AYU(APF)],Bc,0,B,[],1,0,0,0,0,Dj,0,BE,[],0,3,0,0,0,N3,0,Hc,[Eg],0,0,0,0,["cO",AYR(APO)],PE,0,BK,[],0,0,0,0,["c",AYU(AN4),"K",AYS(AQB)],Zb,0,B,[Eg,CN],0,3,0,0,0,NN,0,B2,[],0,0,0,0,0,Sb,0,B2,[],0,0,0,0,["c",AYU(AI0),"Q",AYS(AQk),"K",AYS(AJL),"b2",AYS(AJm)],DM,0,B2,[],0,0,0,0,["c",AYU(ALu),"l",AYS(AL9),"b2",AYS(AIW),"Q",AYS(ATb),"K",AYS(ALH)],JV,0,DM,[],0,0,0,0,["l",AYS(ANC)],ABP,
0,B6,[],0,0,0,0,["bC",AYT(AN5)],Ep,0,B6,[],0,0,0,0,["bC",AYT(Ni),"b2",AYS(AQF)],Qj,0,B2,[],0,0,0,0,["Q",AYS(AOZ),"c",AYU(AHN),"b2",AYS(AJC),"K",AYS(ATW)],Ew,0,B6,[],0,0,0,0,["b9",AYR(ANI),"bC",AYT(AMK),"cs",AYU(ALr),"cv",AYV(ANR),"b2",AYS(ATP)],AGQ,0,B6,[],0,0,0,0,["bC",AYT(AHE)],AAO,0,B6,[],0,0,0,0,["bC",AYT(AH$)],Ft,0,B2,[],0,0,0,0,["Q",AYS(AU7),"c",AYU(AQl),"b2",AYS(AN6),"K",AYS(ARB)],ZG,0,Ft,[],0,0,0,0,0,Vq,0,Ft,[],0,0,0,0,0,AAz,0,CV,[],0,0,0,0,["c",AYU(AKx)],Rs,0,CV,[],0,0,0,0,["c",AYU(APr)],F_,0,CV,[],
0,0,0,0,["c",AYU(AS$),"Q",AYS(AUr)],Q3,0,F_,[],0,0,0,0,["c",AYU(ANM),"Q",AYS(APQ)],Fr,0,CV,[],0,0,0,0,["c",AYU(AV2)],Of,0,Fr,[],0,0,0,0,["c",AYU(ANb)],Ti,0,CV,[],0,0,0,0,["c",AYU(AVd)],Sn,0,F_,[],0,0,0,0,["c",AYU(AJN)],Wy,0,Fr,[],0,0,0,0,["c",AYU(AII)],Tk,0,Ee,[],0,0,0,0,["c",AYU(AVM),"cs",AYU(ATp)],PS,0,Ee,[],0,0,0,0,["c",AYU(AQH),"cs",AYU(AHS)],E3,0,B,[],1,0,0,0,0,AAB,0,C5,[],0,0,0,0,["c",AYU(AIJ)],Yk,0,EM,[],0,0,0,0,["c",AYU(APq)],QJ,0,Fm,[],0,0,0,0,["c",AYU(ASz)],Sj,0,C5,[],0,0,0,0,["c",AYU(AQz)],VI,0,EM,
[],0,0,0,0,["c",AYU(AIV)],S3,0,Fm,[],0,0,0,0,["c",AYU(ASV)],K$,0,BK,[],4,0,0,0,["c",AYU(AOw),"K",AYS(ANm)],ACC,0,BK,[],0,0,0,0,["c",AYU(AJj),"K",AYS(AJx)],PJ,0,BK,[],0,0,0,0,["c",AYU(ANE),"K",AYS(AVX)],Zi,0,BK,[],4,0,0,0,["c",AYU(ARo),"K",AYS(AKl)],YL,0,BK,[],0,0,0,0,["c",AYU(AQg),"K",AYS(AHC)],Ou,0,BK,[],0,0,0,0,["c",AYU(AKb),"K",AYS(AMj)],AGy,0,B2,[],0,0,0,0,["c",AYU(AVk),"Q",AYS(AJE),"ir",AYR(APX),"K",AYS(AJD)],AB1,0,B2,[],4,0,0,0,["c",AYU(AP9),"Q",AYS(ASk),"ir",AYR(AHx),"K",AYS(AVC)],AGl,0,BK,[],4,0,0,0,
["c",AYU(AOa),"K",AYS(AMd)],AEs,0,BK,[],0,0,0,0,["c",AYU(AQe),"K",AYS(AL5)],AAL,0,BK,[],0,0,0,0,["c",AYU(ANf),"K",AYS(AKp)]]);
$rt_metadata([Hz,0,B2,[],0,0,0,0,["c",AYU(AIO),"Q",AYS(ARy),"K",AYS(ARS)],AGs,0,Hz,[],0,0,0,0,["c",AYU(AKw),"cs",AYU(AT5),"cv",AYV(AIv),"b2",AYS(APh)],ADv,0,Hz,[],0,0,0,0,["c",AYU(AOM)],PD,0,GI,[Iv],0,3,0,0,["mM",AYV(ALX),"lR",AYU(AJp),"iB",AYS(AJY),"nk",AYT(ATt)],Tm,0,B6,[],0,0,0,0,["bC",AYT(AKR),"cs",AYU(AJf),"cv",AYV(AMi),"b2",AYS(AMU)],AAK,0,B6,[],0,0,0,0,["bC",AYT(AOU)],Ol,0,B6,[],0,0,0,0,["bC",AYT(ASC)],Hy,0,B,[],4,0,0,AR$,0,Ns,0,B6,[],0,0,0,0,["bC",AYT(ASJ)],LE,0,B2,[],0,0,0,0,["Q",AYS(AQw),"c",AYU(AKm),
"cs",AYU(AMS),"cv",AYV(AKZ),"b2",AYS(AIs),"K",AYS(ATB)],LX,0,B2,[],0,0,0,0,["Q",AYS(AJW),"c",AYU(AHY),"cs",AYU(AQW),"cv",AYV(ASA),"b2",AYS(AKS),"K",AYS(AQ9)],D6,0,B6,[],0,0,0,0,["bC",AYT(ART),"cs",AYU(APK),"cv",AYV(AJV),"b2",AYS(ARF)],W7,0,E3,[],0,0,0,0,["id",AYS(AJ7),"ub",AYT(ARM)],W8,0,E3,[],0,0,0,0,["id",AYS(ASX),"ub",AYT(AUV)],AFr,0,B,[],0,0,0,0,0,AA4,0,B,[],0,0,0,0,0,LA,0,Bc,[],0,0,0,0,["D",AYR(ADD)],KI,0,Bc,[],0,0,0,0,["D",AYR(AEj)],AFk,0,Bc,[],0,0,0,0,["D",AYR(ASp)],AFR,0,Bc,[],0,0,0,0,["D",AYR(ATD)],AFV,
0,Bc,[],0,0,0,0,["D",AYR(ALv)],Lt,0,Bc,[],0,0,0,0,["D",AYR(AB5)],Md,0,Lt,[],0,0,0,0,["D",AYR(AC3)],AHn,0,Bc,[],0,0,0,0,["D",AYR(AMR)],Nd,0,Md,[],0,0,0,0,["D",AYR(AAH)],ADU,0,Nd,[],0,0,0,0,["D",AYR(APd)],AEc,0,Bc,[],0,0,0,0,["D",AYR(AKK)],ACt,0,Bc,[],0,0,0,0,["D",AYR(APa)],ACd,0,Bc,[],0,0,0,0,["D",AYR(AU0)],AF0,0,Bc,[],0,0,0,0,["D",AYR(APT)],AHw,0,Bc,[],0,0,0,0,["D",AYR(AHQ)],AFs,0,Bc,[],0,0,0,0,["D",AYR(ANi)],AFb,0,Bc,[],0,0,0,0,["D",AYR(AR1)],AGd,0,Bc,[],0,0,0,0,["D",AYR(AKH)],ABm,0,Bc,[],0,0,0,0,["D",AYR(AK7)],AAX,
0,Bc,[],0,0,0,0,["D",AYR(AUQ)],AFz,0,Bc,[],0,0,0,0,["D",AYR(AHF)],AFL,0,Bc,[],0,0,0,0,["D",AYR(AOf)],ACU,0,Bc,[],0,0,0,0,["D",AYR(ALf)],AEh,0,Bc,[],0,0,0,0,["D",AYR(AMm)],AG7,0,Bc,[],0,0,0,0,["D",AYR(AOh)],AFK,0,Bc,[],0,0,0,0,["D",AYR(ATZ)],ADr,0,Bc,[],0,0,0,0,["D",AYR(ARk)],ACS,0,Bc,[],0,0,0,0,["D",AYR(APL)],AHt,0,Bc,[],0,0,0,0,["D",AYR(ASe)],J8,0,Bc,[],0,0,0,0,["D",AYR(AEe)],AGg,0,J8,[],0,0,0,0,["D",AYR(APz)],ADZ,0,LA,[],0,0,0,0,["D",AYR(AJa)],ACN,0,KI,[],0,0,0,0,["D",AYR(AME)],ACi,0,Bc,[],0,0,0,0,["D",AYR(AOz)]]);
$rt_metadata([ACI,0,Bc,[],0,0,0,0,["D",AYR(AUE)],ADL,0,Bc,[],0,0,0,0,["D",AYR(AL1)],ADV,0,Bc,[],0,0,0,0,["D",AYR(AHG)],ACn,0,B,[],4,0,0,0,0,ABN,0,B,[],4,3,0,0,0,Ov,0,B,[],0,3,0,0,0,AFF,0,B,[],0,3,0,0,0,ADn,0,B,[],4,3,0,0,0,M9,0,Bu,[],0,3,0,0,0,AB2,0,B,[DW],0,3,0,0,0,Ps,0,B,[Z],0,3,0,0,["g",AYS(AUR)],Qg,0,B,[Z],0,3,0,0,["g",AYS(AM$)],YW,0,B,[Z],0,3,0,0,["g",AYS(AQU)],ABj,0,B,[],0,3,0,0,0,AAg,0,B,[Z],0,3,0,0,["g",AYS(AP$)],AEd,0,Hx,[],0,3,0,0,0,Sk,0,B,[],3,3,0,0,0,U_,0,B,[Z],0,3,0,0,0,Ww,0,B,[Z],0,3,0,0,0,Yo,
0,X,[],0,0,0,0,["l",AYS(ALB)],Ym,0,X,[],0,0,0,0,["l",AYS(AIg)],PX,0,X,[],0,0,0,0,["l",AYS(AOn),"cO",AYR(AMq)],P5,0,X,[],0,0,0,0,["l",AYS(ARY)],P3,0,X,[],0,0,0,0,["l",AYS(ASI)],P4,0,X,[],0,0,0,0,["l",AYS(AOT)],P8,0,X,[],0,0,0,0,["l",AYS(ALa)],P9,0,X,[],0,0,0,0,["l",AYS(AHy)],P6,0,X,[],0,0,0,0,["l",AYS(AMv)],P7,0,X,[],0,0,0,0,["l",AYS(AOX)],P_,0,X,[],0,0,0,0,["l",AYS(AT9)],Qa,0,X,[],0,0,0,0,["l",AYS(AKD)],PW,0,X,[],0,0,0,0,["l",AYS(AWc)],QP,0,X,[],0,0,0,0,["l",AYS(AMB)],PU,0,X,[],0,0,0,0,["l",AYS(AKB)],PV,0,X,
[],0,0,0,0,["l",AYS(AMa)],P0,0,X,[],0,0,0,0,["l",AYS(ANG)],PT,0,X,[],0,0,0,0,["l",AYS(ATL)],PY,0,X,[],0,0,0,0,["l",AYS(AJs)],PZ,0,X,[],0,0,0,0,["l",AYS(AQ8)],MF,0,B,[],3,3,0,0,0,T8,0,B,[MF],4,3,0,0,0,AD1,0,B,[FV],0,3,0,0,0,C2,0,B,[],3,3,0,AFY,0,Cn,0,Co,[],12,3,0,AE1,0,DI,0,B,[],3,3,0,AIF,0,XY,0,B,[],0,3,0,0,0,Xb,0,B,[Z],0,3,0,0,["g",AYS(AOB)],N$,0,GW,[],0,0,0,0,["cs",AYU(AL3),"cv",AYV(AV1),"fV",AYR(AKk)],R$,0,Bu,[],0,3,0,0,0,Zv,0,Bu,[],0,3,0,0,0]);
$rt_metadata([W1,0,F9,[],0,3,0,0,0,RV,0,F9,[],0,3,0,0,0,AFG,0,B,[DW],0,0,0,0,0,WU,0,B,[],0,3,0,0,0,ACW,0,B,[Sk],0,3,0,0,0,Pw,0,B,[Bj],0,3,0,0,0,VS,0,B,[Z],0,3,0,0,0,VV,0,B,[Z],0,3,0,0,0,AFu,0,B,[],3,3,0,0,0,ABe,0,B,[],0,3,0,0,0,T0,0,B,[Ih],0,3,0,0,0,WZ,0,B,[MF],0,0,0,0,0,OF,0,B,[Bj],0,3,0,0,["o",AYR(ATg)],ZC,0,B,[Z],0,3,0,0,["g",AYS(AVU)],Sy,0,B,[DW],0,3,0,0,["U",AYS(AQu)],SA,0,B,[DW],0,3,0,0,["U",AYS(ANa)],SB,0,B,[Gu],0,3,0,0,["pd",AYT(ATV)],Q6,0,B,[DW],0,3,0,0,["U",AYS(AOe)],Q5,0,B,[Gu],0,3,0,0,["pd",AYT(AIu)],UO,
0,X,[],0,0,0,0,["l",AYS(AUl)],NF,0,X,[],0,0,0,0,["l",AYS(AI$)],TC,0,X,[],0,0,0,0,["l",AYS(AIT)],TB,0,X,[],0,0,0,0,["l",AYS(ALZ)],YU,0,X,[],0,0,0,0,["l",AYS(ANt)],QD,0,X,[],0,0,0,0,["l",AYS(AUo)],Py,0,X,[],0,0,0,0,["l",AYS(AQr)],SE,0,X,[],0,0,0,0,["l",AYS(AR9)],Nz,0,X,[],0,0,0,0,["l",AYS(AVA)],ND,0,X,[],0,0,0,0,["l",AYS(AKY)],O4,0,X,[],0,0,0,0,["l",AYS(AUx)],Q9,0,X,[],0,0,0,0,["l",AYS(AO$)],Rf,0,X,[],0,0,0,0,["l",AYS(ARw)],Vk,0,X,[],0,0,0,0,["l",AYS(AT$)],T9,0,X,[],0,0,0,0,["l",AYS(AU_)],NW,0,X,[],0,0,0,0,["l",
AYS(AKI)],MZ,0,X,[],0,0,0,0,["l",AYS(AQt)],Tv,0,MZ,[],0,0,0,0,["l",AYS(ATc)],ABF,0,B,[Z],0,0,0,0,0,RJ,0,B,[Jt],0,3,0,0,["sE",AYR(AOH)],Xv,0,B,[BY],0,3,0,0,["bc",AYS(ARn)],Xy,0,B,[BY],0,3,0,0,["bc",AYS(APY)],Va,0,B,[BY],0,3,0,0,["bc",AYS(AMN)],Vd,0,B,[BY],0,3,0,0,["bc",AYS(AH8)],Wh,0,B,[BY],0,3,0,0,["bc",AYS(AOD)],Ut,0,B,[Z],0,3,0,0,["g",AYS(AI9)],Uu,0,B,[Z],0,3,0,0,["g",AYS(AJP)],Ur,0,B,[Z],0,3,0,0,["g",AYS(ARZ)],ABz,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.O6=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","#diffDemo","ClassL.java","ClassR.java",
"[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ",
"x = ",", y = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ",
"Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","selectScene ","CodiconDemo","RenderTexture","ScissorDemo","LineShaderDemo1","LineShaderDemo2",
"ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Editor0","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","text","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ","\n","\r","Full file parsed in ","ms","Resolving all in ",
" ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parseScopes","setDiffModel","deleteDiffModel","ns-resize","ew-resize","trying to display with unknown screen size and dpr",".cpp",".cc",".cxx",".hpp",".c",".h",".js","applyContrast = ","renderBlankLines = ","drawTails = ",
"Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","\\n","Cannot find type: ","#606366","#2B2B2B","#A4A3A3","#323232","#303C47","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ",
"hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ",
"methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","#6AAB73","comma","error","#F75464","unused","#6F737A","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#3C3F41","#4B6EAF",
"#787878","onEnter item ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","nwse-resize","nesw-resize","Expected "," ints to write, but "," written"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","Iterable<","Collection<","List<","ArrayList<","LinkedList<","Vector<","Stack<","Set<","SortedSet<",
"TreeSet<","HashSet<","LinkedHashSet<","Queue<","Deque<","ArrayDeque<",">","Int","Iter","VP","Resolve","Rep","No definition or usages"," ints to read, but "," read","Member should contains at least 1 decl","Unknown scope type: ","readClipboardText error: ","Unexpected type: ","Empty Expression","Unexpected ref node type: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit",
"javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement",
"Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement",
"LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B",
"SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs",
"YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl",
"Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in ","#EBECF0","#F8F9FB","#edebfc","#FCE8F4","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","Verdana","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
By.prototype.toString=function(){return $rt_ustr(this);};
By.prototype.valueOf=By.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AJR(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CH=Long_add;var IA=Long_sub;var Cb=Long_mul;var AFx=Long_div;var AH9=Long_rem;var AWT=Long_or;var C0=Long_and;var A2N=Long_xor;var GS=Long_shl;var AXb=Long_shr;var F2=Long_shru;var A2O=Long_compare;var Ia=Long_eq;var A2P=Long_ne;var AWO=Long_lt;var ALk=Long_le;var A2Q=Long_gt;var A2R=Long_ge;var A2S=Long_not;var AXv=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AXB);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Vt.prototype;c.f=c.bc;c=Vr.prototype;c.f=c.bc;c=Oj.prototype;c.f=c.bc;c=ADX.prototype;c.get=c.AI;Object.defineProperty(c,"length",{get:c.JZ});c=O6.prototype;c.f=c.bc;c=ABb.prototype;c.removeEventListener=c.GQ;c.dispatchEvent=c.EB;c.get=c.AI;c.addEventListener=c.CP;Object.defineProperty(c,"length",{get:c.EL});c=Qv.prototype;c.accept=c.xv;c=Qw.prototype;c.accept=c.xv;c=Xq.prototype;c.onAnimationFrame=c.GU;c=Xo.prototype;c.f=c.xd;c=Xl.prototype;c.handleEvent=c.cm;c=Xm.prototype;c.f=c.bc;c=Yx.prototype;c.handleEvent
=c.cm;c=Yy.prototype;c.handleEvent=c.cm;c=Yz.prototype;c.handleEvent=c.cm;c=YA.prototype;c.handleEvent=c.cm;c=YB.prototype;c.handleEvent=c.cm;c=YC.prototype;c.handleEvent=c.cm;c=YD.prototype;c.handleEvent=c.cm;c=YE.prototype;c.handleEvent=c.cm;c=YF.prototype;c.handleEvent=c.cm;c=YG.prototype;c.handleEvent=c.cm;c=AAc.prototype;c.handleEvent=c.cm;c=AAd.prototype;c.handleEvent=c.cm;c=AAe.prototype;c.handleEvent=c.cm;c=AAf.prototype;c.handleEvent=c.cm;c=V$.prototype;c.handleEvent=c.cm;c=ZO.prototype;c.f=c.bc;c=
ZP.prototype;c.f=c.bc;c=Os.prototype;c.f=c.bc;c=Or.prototype;c.f=c.bc;c=Op.prototype;c.f=c.bc;c=Oo.prototype;c.f=c.bc;c=OZ.prototype;c.accept=c.xv;c=NI.prototype;c.f=c.bc;c=NL.prototype;c.f=c.bc;c=NJ.prototype;c.f=c.bc;c=QO.prototype;c.f=c.xd;c=QM.prototype;c.f=c.xd;c=SM.prototype;c.f=c.bc;c=Wl.prototype;c.f=c.bc;c=NH.prototype;c.f=c.bc;c=ZJ.prototype;c.f=c.bc;c=ZI.prototype;c.f=c.bc;c=YP.prototype;c.f=c.bc;c=YO.prototype;c.f=c.bc;c=ZE.prototype;c.handleEvent=c.cm;c=RW.prototype;c.f=c.bc;c=NC.prototype;c.onTimer
=c.sE;c=Nn.prototype;c.onTimer=c.sE;c=ZH.prototype;c.f=c.bc;c=Zl.prototype;c.f=c.bc;c=VU.prototype;c.f=c.bc;c=RJ.prototype;c.onTimer=c.sE;c=Xv.prototype;c.f=c.bc;c=Xy.prototype;c.f=c.bc;c=Va.prototype;c.f=c.bc;c=Vd.prototype;c.f=c.bc;c=Wh.prototype;c.f=c.bc;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);