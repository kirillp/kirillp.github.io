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
function $rt_cls(cls){return Th(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Hr(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.cc.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ASp(t);}
function $rt_throwableCause(t){return A0B(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A5H());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A5I(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A5J());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BK=$rt_compare;var A5K=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var Jd=$rt_isInstance;var A5L=$rt_nativeThread;var A5M=$rt_suspending;var A5N=$rt_resuming;var A5O=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var Bc=$rt_imul;var EY=$rt_wrapException;var A5P=$rt_checkBounds;var A5Q=$rt_checkUpperBound;var A5R=$rt_checkLowerBound;var A5S=$rt_wrapFunction0;var A5T=$rt_wrapFunction1;var A5U=$rt_wrapFunction2;var A5V=$rt_wrapFunction3;var A5W=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AJm=$rt_createCharArrayFromData;var A3O=$rt_createByteArrayFromData;var A4m=$rt_createShortArrayFromData;var DX=$rt_createIntArrayFromData;var A5X=$rt_createBooleanArrayFromData;var A5Y=$rt_createFloatArrayFromData;var A5Z=$rt_createDoubleArrayFromData;var AIG=$rt_createLongArrayFromData;var A5G=$rt_createBooleanArray;var DM=$rt_createByteArray;var A50=$rt_createShortArray;var B5=$rt_createCharArray;var BP=$rt_createIntArray;var A51=$rt_createLongArray;var ALC=$rt_createFloatArray;var A52
=$rt_createDoubleArray;var BK=$rt_compare;var A53=$rt_castToClass;var A54=$rt_castToInterface;var A55=Long_toNumber;var Bp=Long_fromInt;var A56=Long_fromNumber;var D=Long_create;var FL=Long_ZERO;var A57=Long_hi;var GS=Long_lo;
function B(){this.$id$=0;}
function BE(a){return Th(a.constructor);}
function AQl(a,b){return a!==b?0:1;}
function AMS(a){var b,c,d,e,f,g,h,i,j;b=MI(a);if(!b)c=C(0);else{d=(((32-Xl(b)|0)+4|0)-1|0)/4|0;e=B5(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Im((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Hr(e);}j=new K;M(j);H(H(j,C(1)),c);return L(j);}
function MI(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function APH(a){var b,c,d;if(!Jd(a,Ex)&&a.constructor.$meta.item===null){b=new Uq;Y(b);N(b);}b=ALI(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function R4(){var a=this;B.call(a);a.BK=0;a.qy=null;}
function A46(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AKJ();AIj();AF0();AGG();AH1();AI6();AF9();AEq();AFD();AHr();AIi();AKi();AGs();AJA();AI$();AG6();AGl();AJf();AKZ();AF_();AIM();AFF();AKp();AJZ();AIw();AHT();AHm();AKn();c=(AEE()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Yg(C(2),C(3));else{d=new R4;BC(d);e=new ABu;e.Ao=d;f=new WP;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j=new PE;j.yq=i;j.yr=g;j.ys
=6;j.yt=e;j.yo=f;k=Bv(j,"f");i.onmessage=k;h=h+1|0;}l=I(L6,[Fb(C(4),C(5),300),Fb(C(6),C(7),300),Fb(C(8),C(5),400),Fb(C(9),C(7),400),Fb(C(10),C(5),600),Fb(C(11),C(7),600),Fb(C(12),C(5),700),Fb(C(13),C(7),700)]);m=Q(L6,1);m.data[0]=ASU(C(14),Fx(C(15),C(16)),C(5),400);b=(L4(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.uc;f=c.tp;i=new K;M(i);BM(H(H(i,C(17)),f),41);i=L(i);f=c.tm;o=c.r9;c=AXb($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1
|0;}e=$rt_globals.Promise.all(g);BC(d);c=new ABv;c.A5=d;g=new ABt;e.then(Bv(c,"f"),Bv(g,"f"));}}
function AGM(b){var c,d,e,f,g,h,i,j;c=new AAC;d=new Up;d.yb=c;c.tX=d;d=new Un;d.BQ=c;c.ou=d;e=new Uo;e.zJ=c;c.vv=new $rt_globals.ResizeObserver(Bv(e,"f"));d=new Um;d.rE=c;c.w$=d;c.lv=1;d=new AAm;d.mw=new TI;e=new Ye;e.DN=null;e.mo=A58;d.sx=e;BC(e);f=new AAo;f.zZ=e;d.BM=f;d.Bc=b;g=b.length;h=0;while(h<g){e=b[h];i=new AAp;i.zb=d;i.za=h;f=Bv(i,"f");e.onmessage=f;e=b[h];f=AJy();e.postMessage(f);h=h+1|0;}d.iw=0;d.pk=BP(g);c.Bt=d;c.qP=(Ev()).getElementById("canvasDiv");d=AEE();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.eu=d;c.qP.appendChild(d);b=c.eu;d=ARo(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Yg(C(2),C(18));else{c.pP=A4S(c.eu,c.ou);b=new Uf;j=c.ou;AKI(b,e,new AB0,1,2.25,0.625);b.DL=new ABZ;b.Da=j;c.hS=b;AR8(c.vv,c.eu,AUZ());d=$rt_globals.window;j=c.w$;d.addEventListener("resize",Bv(j,"handleEvent"));j=new OQ;b=c.hS;d=c.pP.ct;j.P=b;j.o=d;j.bw=c;d=$rt_str($rt_globals.window.location.hash);if(Bj(C(19),d)){b=new Pl;El(b,j);d=$rt_globals.fetch("test.wasm");j
=new WX;d=d.then(Bv(j,"f"));j=new WW;e=d.then(Bv(j,"f"));j=new WU;d=new WT;e.then(Bv(j,"f"),Bv(d,"f"));}else b=Bj(C(20),d)?A4N(j):(A1u(J(d)<=0?C(21):Dw(d,1))).bc(j);c.gH=b;S6(c);}c.eu.focus();}
var WO=G(0);
var Wr=G(0);
function ACX(){var a=this;B.call(a);a.m5=null;a.vy=null;a.d_=null;}
function Th(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new ACX;c.d_=b;d=c;b.classObject=d;}return c;}
function JT(a){if(a.m5===null)a.m5=AG3(a.d_);return a.m5;}
function Nc(a){var b,c,d,e;b=a.vy;if(b===null){if(ALd(a.d_)===null?0:1){b=Nc(HV(a));c=new K;M(c);H(H(c,b),C(22));b=L(c);}else{b=a.d_.$meta.enclosingClass;if((b===null?null:Th(b))!==null){b=$rt_str(a.d_.$meta.simpleName);if(b===null)b=C(21);}else{b=AG3(a.d_);d=RT(b,36);if(d==(-1)){e=RT(b,46);if(e!=(-1))b=Dw(b,e+1|0);}else{b=Dw(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(21);}}}a.vy=b;}return b;}
function IQ(a){return a.d_.$meta.primitive?1:0;}
function HV(a){return Th(ALd(a.d_));}
var AIQ=G();
function Bv(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fg(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AIE=G();
function ALI(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AKc(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AKc(d[e],c))return 1;e=e+1|0;}return 0;}
function ALd(b){return b.$meta.item;}
function AG3(b){return $rt_str(b.$meta.name);}
function GZ(){var a=this;B.call(a);a.iQ=null;a.nq=null;a.kM=0;a.k7=0;}
function A59(){var a=new GZ();Y(a);return a;}
function A5$(a){var b=new GZ();Bm(b,a);return b;}
function Y(a){a.kM=1;a.k7=1;}
function Bm(a,b){a.kM=1;a.k7=1;a.iQ=b;}
function AW5(a){return a;}
function ASp(a){return a.iQ;}
function A0B(a){var b;b=a.nq;if(b===a)b=null;return b;}
var Ew=G(GZ);
function A5_(){var a=new Ew();AGA(a);return a;}
function AGA(a){Y(a);}
var Bu=G(Ew);
function A5I(a){var b=new Bu();A10(b,a);return b;}
function A10(a,b){Bm(a,b);}
var AJD=G(Bu);
var C7=G(0);
var CK=G(0);
var Ko=G(0);
function BJ(){var a=this;B.call(a);a.cc=null;a.j9=0;}
var A6a=null;var A6b=null;var A6c=null;function Ff(){Ff=Bn(BJ);ATk();}
function AOJ(){var a=new BJ();AEo(a);return a;}
function Hr(a){var b=new BJ();Jt(b,a);return b;}
function EC(a,b,c){var d=new BJ();OJ(d,a,b,c);return d;}
function AEo(a){Ff();a.cc=A6a;}
function Jt(a,b){Ff();OJ(a,b,0,b.data.length);}
function OJ(a,b,c,d){var e;Ff();e=B5(d);a.cc=e;C6(b,c,e,0,d);}
function Mz(b){var c;Ff();c=AOJ();c.cc=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.cc.data;if(b<c.length)return c[b];}d=new Ii;Y(d);N(d);}
function J(a){return a.cc.data.length;}
function Gr(a){return a.cc.data.length?0:1;}
function QX(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C6(a.cc,b,d,e,c);return;}}g=new BH;Y(g);N(g);}
function Ov(a,b){var c,d,e;if(a===b)return 0;c=Be(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ABV(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function ND(a,b){if(a===b)return 1;return ABV(a,b,0);}
function DB(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function J1(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.cc.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JU(b);h=Je(b);while(true){f=a.cc.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Hw(a,b,c){var d,e,f,g,h;d=Be(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.cc.data[d]==e)break;d=d+(-1)|0;}return d;}f=JU(b);g=Je(b);while(true){if(d<1)return (-1);h=a.cc.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function RT(a,b){return Hw(a,b,J(a)-1|0);}
function YF(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AZA(a,b){return YF(a,b,0);}
function QU(a,b,c){var d,e;d=Be(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AFI(a,b){return QU(a,b,J(a));}
function Cu(a,b,c){var d,e;d=BK(b,c);if(d>0){e=new BH;Y(e);N(e);}if(!d){Ff();return A6b;}if(!b&&c==J(a))return a;return EC(a.cc,b,c-b|0);}
function Dw(a,b){return Cu(a,b,J(a));}
function Q4(a,b,c){return Cu(a,b,c);}
function Fx(a,b){var c,d,e,f,g,h;if(Gr(b))return a;if(Gr(a))return b;c=B5(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Mz(c);}
function ACi(a,b,c){var d,e,f,g;d=new K;M(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BM(d,P(a,f));}f=f+1|0;}H(d,Dw(a,f));return L(d);}
function Z5(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cu(a,b,c+1|0);}
function AMQ(a){return a;}
function Gt(a){var b,c,d,e,f;b=a.cc.data;c=B5(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cy(b){Ff();return b===null?C(23):b.cP();}
function NI(b){var c,d;Ff();c=new BJ;d=B5(1);d.data[0]=b;Jt(c,d);return c;}
function Dm(b){var c;Ff();c=new K;M(c);return L(U(c,b));}
function Bj(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BJ))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function J2(a){var b,c,d,e;a:{if(!a.j9){b=a.cc.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.j9=(31*a.j9|0)+e|0;d=d+1|0;}}}return a.j9;}
function Mj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new F5;Bm(b,C(24));N(b);}A6d=1;d=new ZD;d.mU=Q(CZ,10);d.hZ=(-1);d.fN=(-1);d.bA=(-1);e=new G8;e.fs=1;e.bR=b;e.bg=B5(J(b)+2|0);C6(Gt(b),0,e.bg,0,J(b));f=e.bg.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.zG=g;e.hf=0;FU(e);FU(e);d.l=e;d.d3=0;d.ny=VR(d,(-1),0,null);if(!DD(d.l)){b=new Kk;h=d.l;MT(b,C(21),h.bR,h.ds);N(b);}if(d.ra)d.ny.eU();b=BL();h=new AAs;h.kq=(-1);h.o$=(-1);h.CA=d;h.A7=d.ny;h.lL=a;h.kq=0;g=J(a);h.o$=g;e=new ACj;i=h.kq;j=d.hZ;k=d.fN+1|0;l=d.bA
+1|0;e.iV=(-1);m=j+1|0;e.rM=m;e.ed=BP(m*2|0);f=BP(l);e.k1=f;Jy(f,(-1));if(k>0)e.pt=BP(k);Jy(e.ed,(-1));ADZ(e,a,i,g);h.cI=e;e.gC=1;n=0;m=0;if(!J(a)){f=Q(BJ,1);f.data[0]=C(21);}else{while(true){l=J(h.lL);if(!AEy(h))l=h.o$;e=h.cI;if(e.eR>=0&&AFz(e)==1){e=h.cI;e.eR=MH(e);if(MH(h.cI)==AGF(h.cI)){e=h.cI;e.eR=e.eR+1|0;}g=h.cI.eR;g=g<=l&&OZ(h,g)?1:0;}else g=OZ(h,h.kq);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BB(b,Q4(a,m,AHI(h)));m=AI7(h);n=g;}a:{BB(b,Q4(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(BG(b,
g)))break a;EN(b,g);}}if(g<0)g=0;f=Gp(b,Q(BJ,g));}return f;}
function AOj(a,b){return Ov(a,b);}
function ATk(){A6a=B5(0);A6b=AOJ();A6c=new SQ;}
var FC=G(GZ);
var In=G(FC);
var AJi=G(In);
var Es=G();
function HG(){Es.call(this);this.bp=0;}
var A6e=null;var A6f=null;function A1p(a){var b=new HG();AFb(b,a);return b;}
function AFb(a,b){a.bp=b;}
function J6(b){return (W7(A5z(20),b,10)).cP();}
function KR(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Du;Bm(b,C(25));N(b);}d=J(b);if(0==d){b=new Du;Bm(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Du;Y(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=Ya(P(b,f));if(i<0){j=new Du;k=Cu(b,0,d);b=new K;M(b);H(H(b,C(27)),k);Bm(j,L(b));N(j);}if(i>=c){j=new Du;l=Cu(b,0,d);b=new K;M(b);H(H(U(H(b,C(28)),c),C(29)),l);Bm(j,L(b));N(j);}g=Bc(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Du;k=Cu(b,0,d);b=new K;M(b);H(H(b,C(30)),k);Bm(j,L(b));N(j);}b=new Du;j=new K;M(j);U(H(j,C(31)),c);Bm(b,L(j));N(b);}
function CX(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A6f===null){A6f=Q(HG,256);c=0;while(true){d=A6f.data;if(c>=d.length)break a;d[c]=A1p(c-128|0);c=c+1|0;}}}return A6f.data[b+128|0];}return A1p(b);}
function A2z(a,b){if(a===b)return 1;return b instanceof HG&&b.bp==a.bp?1:0;}
function Xl(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function I6(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AYk(a,b){b=b;return BK(a.bp,b.bp);}
function AKJ(){A6e=F($rt_intcls());}
function GT(){var a=this;B.call(a);a.C=null;a.L=0;}
function A6g(){var a=new GT();M(a);return a;}
function A5z(a){var b=new GT();GN(b,a);return b;}
function M(a){GN(a,16);}
function GN(a,b){a.C=B5(b);}
function W7(a,b,c){return AJt(a,a.L,b,c);}
function AJt(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cq(a,b,b+1|0);else{Cq(a,b,b+2|0);f=a.C.data;g=b+1|0;f[b]=45;b=g;}a.C.data[b]=Im(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bc(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cq(a,b,b+i|0);if(e)e=b;else{f=a.C.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.C.data;b=e+1|0;f[e]=Im($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AJ6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BK(c,0.0);if(!d){if(1.0/c===Infinity){Cq(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cq(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cq(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cq(a,b,b+8|0);d=b;}else{Cq(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A6h;AJ0(c,f);d=f.na;g=f.m1;h=f.rh;i=1;j=1;if(h)j=2;k=9;l=ASV(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cq(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.C.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.C.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.C.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.C.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AIZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BK(c,0.0);if(!d){if(1.0/c===Infinity){Cq(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cq(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cq(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cq(a,b,b+8|0);d=b;}else{Cq(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A6i;AFT(c,f);g=f.nz;h=f.mN;i=f.q7;j=1;k=1;if(i)k=2;l=18;m=ARD(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cq(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.C.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.C.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ANN(p,FL))d=0;else{d=GS(AGN(g,p));g=AUX(g,p);}e=a.C.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AGN(p,Bp(10));q=q+1|0;}if(h){e=a.C.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ASV(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ARD(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=A6j.data;g=f.length-1|0;while(g>=0){if(IK(AUX(b,Ci(c,f[g])),FL)){d=d|e;c=Ci(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BM(a,b){return a.p7(a.L,b);}
function ADR(a,b,c){Cq(a,b,b+1|0);a.C.data[b]=c;return a;}
function M3(a,b){var c,d;c=a.C.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.C=KN(a.C,d);}
function L(a){return EC(a.C,0,a.L);}
function ADB(a,b,c,d){return a.pO(a.L,b,c,d);}
function WI(a,b,c,d,e){var f,g,h,i;Cq(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.C.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function J5(a,b){return a.pe(b,0,b.data.length);}
function Cq(a,b,c){var d,e,f,g;d=a.L;e=d-b|0;a.j3((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.C.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.L=a.L+(c-b|0)|0;}
var JL=G(0);
var K=G(GT);
function L_(){var a=new K();A2n(a);return a;}
function A2n(a){M(a);}
function H(a,b){var c;c=a.L;if(b===null)b=C(23);MC(a,c,b);return a;}
function BY(a,b){MC(a,a.L,b);return a;}
function U(a,b){W7(a,b,10);return a;}
function HL(a,b){var c,d,e,f,g,h,i,j;c=a.L;d=1;if(A3w(b,FL)){d=0;b=A45(b);}a:{if(DG(b,Bp(10))<0){if(d)Cq(a,c,c+1|0);else{Cq(a,c,c+2|0);e=a.C.data;f=c+1|0;e[c]=45;c=f;}a.C.data[c]=Im(GS(b),10);}else{g=1;h=Bp(1);i=Df(Bp(-1),Bp(10));b:{while(true){j=Ci(h,Bp(10));if(DG(j,b)>0){j=h;break b;}g=g+1|0;if(DG(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cq(a,c,c+g|0);if(d)f=c;else{e=a.C.data;f=c+1|0;e[c]=45;}while(true){if(IK(j,FL))break a;e=a.C.data;c=f+1|0;e[f]=Im(GS((Df(b,j))),10);b=AIl(b,j);j=Df(j,Bp(10));f=c;}}}return a;}
function EH(a,b){AJ6(a,a.L,b);return a;}
function AEk(a,b){BM(a,b);return a;}
function Jx(a,b){MC(a,a.L,!b?C(32):C(33));return a;}
function AHv(a,b,c){var d,e,f,g,h,i;d=BK(b,c);if(d<=0){e=a.L;if(b<=e){if(d){f=e-c|0;a.L=e-(c-b|0)|0;g=0;while(g<f){h=a.C.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Ii;Y(i);N(i);}
function UX(a,b){var c,d,e,f;if(b>=0){c=a.L;if(b<c){c=c-1|0;a.L=c;while(b<c){d=a.C.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ii;Y(f);N(f);}
function AYg(a,b,c,d,e){WI(a,b,c,d,e);return a;}
function ANC(a,b,c,d){ADB(a,b,c,d);return a;}
function AIx(a){return a.L;}
function Ed(a){return L(a);}
function APG(a,b){M3(a,b);}
function AYD(a,b,c){ADR(a,b,c);return a;}
function MC(a,b,c){var d,e,f;if(b>=0&&b<=a.L){a:{if(c===null)c=C(23);else if(Gr(c))break a;M3(a,a.L+J(c)|0);d=a.L-1|0;while(d>=b){a.C.data[d+J(c)|0]=a.C.data[d];d=d+(-1)|0;}a.L=a.L+J(c)|0;d=0;while(d<J(c)){e=a.C.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Ii;Y(c);N(c);}
var E6=G(In);
var AKf=G(E6);
function A6k(a){var b=new AKf();AMV(b,a);return b;}
function AMV(a,b){Bm(a,b);}
var AJc=G(E6);
function A6l(a){var b=new AJc();AM5(b,a);return b;}
function AM5(a,b){Bm(a,b);}
var ABk=G(0);
var C_=G(0);
function BV(b,c){if(b!==null)b.b4();return c;}
var X$=G(0);
function Kf(){var a=this;B.call(a);a.jh=0;a.nV=0;a.no=0;}
var A6m=0;function Ez(a){A6m=A6m-1|0;}
function Hy(a,b,c){KF(a,AIW(b,c,400,0));}
function Lh(a,b){return Lt(a,b,0.875);}
function Lt(a,b,c){return Eo(a,b)+c|0;}
function ZV(){var a=this;Kf.call(a);a.i8=null;a.dc=null;a.wV=null;}
function ER(a){var b,c,d;b=a.dc;c=a.nV;d=a.no;b.clearRect(0.0,0.0,c,d);}
function AAb(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dc;d="center";c.textAlign=d;break a;case 2:c=a.dc;d="right";c.textAlign=d;break a;default:break a;}d=a.dc;c="left";d.textAlign=c;}}
function Cm(a,b){KF(a,b.qX);}
function KF(a,b){var c;if(a.wV!==b){c=a.dc;a.wV=b;c.font=b;}}
function AIW(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B0(a,b,c,d){var e,f,g;e=a.dc;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eo(a,b){var c;c=$rt_ustr(b);return a.dc.measureText(c).width;}
function J$(a,b,c,d){var e,f;e=a.dc;f=$rt_ustr(Hr(AJm([35,HX(b/16|0),HX(b%16|0),HX(c/16|0),HX(c%16|0),HX(d/16|0),HX(d%16|0)])));e.fillStyle=f;}
function AVH(){return {alpha:false};}
var AIk=G();
var AKP=G();
function BO(b,c){if(b===c)return 1;return b!==null?b.bJ(c):c!==null?0:1;}
function BC(b){if(b!==null)return b;b=new F5;Bm(b,C(21));N(b);}
var BT=G(0);
function Ns(b){return b;}
var Ce=G(0);
function ABu(){B.call(this);this.Ao=null;}
function A2P(a,b){var c;c=a.Ao;c.qy=b;if(c.BK)AGM(b);}
var AGr=G();
function K$(b,c){return b.data[c];}
var AJP=G();
var AEz=G(0);
function Fb(b,c,d){return ASU(C(34),Fx(C(15),b),c,d);}
var AKD=G(0);
var AGX=G(0);
function L4(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C8(b,f+g|0);C6(c,0,d,f,g);return d;}
function Lx(b,c,d){C6(b,c,d,0,d.data.length);return d;}
function ZM(b,c,d){var e;if(c>0)C6(b,0,d,0,c);e=d.data.length;if(c<e)C6(b,c+1|0,d,c,e-c|0);return d;}
function AFE(b,c,d,e){var f;if(c>0)C6(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C6(b,d,e,c,f-d|0);}return e;}
function C3(b){var c;c=new PV;c.kk=b;return c;}
function AE9(b,c){if(b.data.length!=c)b=C8(b,c);return b;}
function AGW(b,c,d){var e;e=c.data.length;if(e==d)c=C8(c,e*2|0);c.data[d]=b;return c;}
function ACe(b,c,d){var e;e=c.data.length;if(e==d)c=Or(c,e*2|0);c.data[d]=b;return c;}
function Oq(b){return KN(b,b.data.length);}
function L6(){var a=this;B.call(a);a.uc=null;a.tp=null;a.tm=null;a.r9=0;}
function ASU(a,b,c,d){var e=new L6();ASi(e,a,b,c,d);return e;}
function ASi(a,b,c,d,e){a.uc=b;a.tp=c;a.tm=d;a.r9=e;}
var AE4=G();
function AXb(b,c){return {style:b,weight:c};}
function ABv(){B.call(this);this.A5=null;}
function ALq(a,b){var c,d,e;c=a.A5;d=0;while(d<b.length){e=b[d];(Ev()).fonts.add(e);d=d+1|0;}c.BK=1;b=c.qy;if(b!==null)AGM(b);}
var ABt=G();
function A1G(a,b){$rt_globals.console.info("font load error "+b);}
var LL=G();
var A6n=null;var A6o=null;function Bt(){if(A6n===null)A6n=AQM(A6p,0);return A6n;}
function En(){if(A6o===null)A6o=AQM(A6q,0);return A6o;}
function A3R(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N8(b)&&(e+f|0)<=N8(d)){a:{b:{if(b!==d){g=HV(BE(b));h=HV(BE(d));if(g!==null&&h!==null){if(g===h)break b;if(!IQ(g)&&!IQ(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.d_;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AKc(n.constructor,o)?1:0)){NH(b,c,d,e,j);b=new Jf;Y(b);N(b);}j=j+1|0;k=m;}NH(b,c,d,e,f);return;}if(!IQ(g))break a;if(IQ(h))break b;else break a;}b=new Jf;Y(b);N(b);}}NH(b,c,
d,e,f);return;}b=new Jf;Y(b);N(b);}b=new BH;Y(b);N(b);}d=new F5;Bm(d,C(35));N(d);}
function C6(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N8(b)&&(e+f|0)<=N8(d)){NH(b,c,d,e,f);return;}b=new BH;Y(b);N(b);}
function NH(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function E5(){return Long_fromNumber(new Date().getTime());}
function AGI(){return A56($rt_globals.performance.now()*1000000.0);}
var AGV=G();
var AI8=G();
function Yg(b,c){var d,e,f;d=(Ev()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ev()).getElementById($rt_ustr(b)).appendChild(d);}
function AEE(){return (Ev()).createElement("canvas");}
function AHA(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ARo(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ALn=G();
var WP=G();
function AZs(a,b){var c;c=new Bu;Bm(c,$rt_str(b.message));N(c);}
var AG9=G();
function H4(b){return $rt_str(b);}
var AIt=G();
function KN(b,c){var d,e,f,g;b=b.data;d=B5(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Or(b,c){var d,e,f,g;b=b.data;d=DM(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Jj(b,c){var d,e,f,g;b=b.data;d=BP(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C8(b,c){var d,e,f,g;d=b.data;e=AGE(HV(BE(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AGx(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));U(c,e[d]);d=d+1|0;}BY(c,C(38));return L(c);}
function ASy(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));EH(c,e[d]);d=d+1|0;}BY(c,C(38));return L(c);}
function AUp(b){var c,d,e,f;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));f=e[d];AIZ(c,c.L,f);d=d+1|0;}BY(c,C(38));return L(c);}
function Jy(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BU;Y(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AEY(b,c,d,e){var f,g;if(c>d){e=new BU;Y(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function K8(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A58;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qd(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AJ7(b,c){return ABz(b,0,b.data.length,c);}
function ABz(b,c,d,e){var f,g,h,i,j;f=BK(c,d);if(f>0){g=new BU;Y(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var ACC=G(0);
var AJF=G();
function AXw(a,b){return a.NG(b);}
function AQi(a){return a.Q8();}
var AFR=G();
var Gg=G(0);
var SQ=G();
var BH=G(Bu);
var AJ3=G();
function N8(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A6r());}return b.data.length;}
function AGE(b,c){if(b===null){b=new F5;Y(b);N(b);}if(b===F($rt_voidcls())){b=new BU;Y(b);N(b);}if(c>=0)return ATG(b.d_,c);b=new AEe;Y(b);N(b);}
function ATG(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var F5=G(Bu);
var Jf=G(Bu);
function Dn(){B.call(this);this.mZ=0;}
var A6s=null;var A6t=null;var A6u=null;var A6v=null;var A6w=null;var A6x=null;var A6y=null;var A6z=null;var A6A=null;var A6B=null;function AT9(a){var b=new Dn();AFu(b,a);return b;}
function AFu(a,b){a.mZ=b;}
function PF(b){var c,d;c=A6x.data;if(b>=c.length)return AT9(b);d=c[b];if(d===null){d=AT9(b);A6x.data[b]=d;}return d;}
function Vt(b){var c,d;c=new BJ;d=B5(1);d.data[0]=b;Jt(c,d);return c;}
function Mn(b){return b>=65536&&b<=1114111?1:0;}
function CS(b){return (b&64512)!=55296?0:1;}
function Dl(b){return (b&64512)!=56320?0:1;}
function OA(b){return !CS(b)&&!Dl(b)?0:1;}
function Js(b,c){return CS(b)&&Dl(c)?1:0;}
function EP(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JU(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Je(b){return (56320|b&1023)&65535;}
function FN(b){return G5(b)&65535;}
function G5(b){if(A6v===null){if(A6y===null)A6y=AKm();A6v=AFG((A6y.value!==null?$rt_str(A6y.value):null));}return SH(A6v,b);}
function Fq(b){return G3(b)&65535;}
function G3(b){if(A6u===null){if(A6z===null)A6z=AKK();A6u=AFG((A6z.value!==null?$rt_str(A6z.value):null));}return SH(A6u,b);}
function SH(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BK(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function AB5(b,c){if(c>=2&&c<=36){b=Ya(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Ya(b){var c,d,e,f,g,h,i,j,k,l;if(A6t===null){if(A6A===null)A6A=AJk();c=(A6A.value!==null?$rt_str(A6A.value):null);d=ASs(Gt(c));e=M$(d);f=BP(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Pi(d)|0;j=j+Pi(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A6t=f;}g=A6t.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BK(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Im(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HR(b){var c;if(b<65536){c=B5(1);c.data[0]=b&65535;return c;}return AJm([JU(b),Je(b)]);}
function CE(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&OA(b&65535))return 19;if(A6w===null){if(A6B===null)A6B=AHY();d=(A6B.value!==null?$rt_str(A6B.value):null);e=Q(W1,16384);f=e.data;g=DM(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=NE(P(d,l));if(m==64){l=l+1|0;m=NE(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bc(c,NE(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=NE(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AOh(k,k+i|0,Or(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AOh(k,k+i|0,Or(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A6w=C8(e,j);}e=A6w.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.tB)o=p+1|0;else{c=d.yp;if(b>=c)return d.yy.data[b-c|0];c=p-1|0;}}return 0;}
function KQ(b){a:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function HO(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CE(b)!=16?0:1;}
function Yy(b){switch(CE(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function RN(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Yy(b);}return 1;}
function AIj(){A6s=F($rt_charcls());A6x=Q(Dn,128);}
function AKm(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AKK(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AJk(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AHY(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Wm=G(0);
var AAu=G(0);
var E0=G(0);
var AIm=G();
function Ev(){return $rt_globals.window.document;}
function AZa(a){return a.IE();}
function A09(a,b){return a.Kl($rt_str(b));}
function A0Y(a,b){a.HT($rt_str(b));}
function AWq(a,b){return a.NQ($rt_str(b));}
function ALG(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ANv(a){return a.Rs();}
function A06(a,b,c){return a.Qf($rt_str(b),$rt_str(c));}
function APr(a,b,c,d){a.C1($rt_str(b),Fg(c,"handleEvent"),d?1:0);}
function AVx(a){return a.O6();}
function AZQ(a){return !!a.KK();}
function A1C(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AQC(a){return a.H2();}
function AO7(a,b){a.P8($rt_str(b));}
function AQW(a){return !!a.HK();}
function AUu(a){return a.Ku();}
function APV(a){return $rt_ustr(a.FO());}
function AMi(a,b){return a.Ib(b?1:0);}
function A2B(a){return a.KJ();}
function AXU(a,b,c){return a.R3($rt_str(b),$rt_str(c));}
function AQu(a,b,c){return a.Oo(b,c?1:0);}
function ATI(a,b,c){return !!a.JY($rt_str(b),$rt_str(c));}
function AUT(a){return a.I$();}
function AOT(a){return $rt_ustr(a.LG());}
function ANF(a,b){return !!a.E8(b);}
function AOu(a,b){return a.L8($rt_str(b));}
function AX3(a,b,c){return a.IC($rt_str(b),$rt_str(c));}
function AP3(a){return a.MU();}
function AVA(a,b){return a.Ry($rt_str(b));}
function AOt(a){return $rt_ustr(a.My());}
function ARZ(a){a.HF();}
function ALw(a,b){return a.R6($rt_str(b));}
function ATe(a,b){return a.HY($rt_str(b));}
function AVU(a,b){return a.HD($rt_str(b));}
function A1v(a){return $rt_ustr(a.M6());}
function AV1(a,b,c){return a.PK(b,c);}
function AZZ(a,b){return a.FN(b);}
function ASn(a){return a.JK();}
function ARk(a,b,c){a.EE($rt_str(b),Fg(c,"handleEvent"));}
function AQ5(a,b,c){return a.GE(b,c);}
function AS$(a){return !!a.Q6();}
function AT8(a,b){return a.Iy($rt_str(b));}
function AZj(a,b,c,d){a.Cq($rt_str(b),Fg(c,"handleEvent"),d?1:0);}
function ANA(a){return a.JL();}
function AWc(a,b,c){return a.Ia($rt_str(b),$rt_str(c));}
function AVe(a){return $rt_ustr(a.Nl());}
function A2w(a){return a.MM();}
function ARh(a){return a.MZ();}
function AVc(a){return a.JZ();}
function ARl(a,b,c){a.E7($rt_str(b),Fg(c,"handleEvent"));}
function AWz(a,b){return a.Lt(b);}
function AOA(a,b){a.F6($rt_str(b));}
function A0y(a){return $rt_ustr(a.Mr());}
function PE(){var a=this;B.call(a);a.yq=null;a.yr=null;a.ys=0;a.yt=null;a.yo=null;}
function ARU(a,b){var c,d,e,f,g;c=a.yq;d=a.yr;e=a.ys;f=a.yt;g=a.yo;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AJq=G();
function ASD(b){return Math.exp(b);}
function AIn(b){return Math.log(b);}
function Jm(b,c){return AYL(b,c);}
function AYL(b,c){return Math.pow(b,c);}
function DQ(){return AUg();}
function AUg(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function ATJ(b,c){return Math.max(b,c);}
function Wt(b){if(b<0)b= -b|0;return b;}
function AOF(b){return Math.abs(b);}
var Yr=G(0);
var RV=G(0);
var ZI=G(0);
var Te=G(0);
var ADE=G(0);
var AB7=G(0);
var AIO=G();
function AZz(a,b,c){a.E7($rt_str(b),Fg(c,"handleEvent"));}
function AYi(a,b,c){a.EE($rt_str(b),Fg(c,"handleEvent"));}
function AOV(a,b,c,d){a.Cq($rt_str(b),Fg(c,"handleEvent"),d?1:0);}
function AMw(a,b){return !!a.E8(b);}
function AWO(a,b,c,d){a.C1($rt_str(b),Fg(c,"handleEvent"),d?1:0);}
var BU=G(Bu);
var AEe=G(Bu);
var Ii=G(BH);
var AI2=G();
function AJy(){return "ping";}
function AHV(b){return b===AJy()?1:0;}
var Zl=G(0);
var X3=G(0);
function AAC(){var a=this;B.call(a);a.tX=null;a.ou=null;a.qP=null;a.eu=null;a.vv=null;a.w$=null;a.pP=null;a.hS=null;a.lv=0;a.EO=0;a.zy=null;a.gH=null;a.Bt=null;}
function Gj(a,b){var c;c=Ev();b=$rt_ustr(b);c.title=b;}
function S6(a){a.EO=$rt_globals.requestAnimationFrame(Bv(a.tX,"onAnimationFrame"));}
function Jw(a){a.lv=1;}
function AA$(a,b,c){var d,e;a.pP.es=BF(b,c);d=a.eu;e=b;d.width=e;d=a.eu;e=c;d.height=e;d=a.hS;X(d.c7,b,c);e=d.Y;d=d.c7;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gH.ce(a.hS.c7,Lq(a));a.gH.bM();}
function ZU(a,b){var c,d,e;c=a.zy;d=a.eu;if(BO(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.zy=b;}
function MZ(a){return $rt_globals.performance.now()/1000.0;}
function Lq(a){return $rt_globals.window.devicePixelRatio;}
function Jc(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEt(null,b);else{c=new ADf;d=$rt_globals.window.showDirectoryPicker();e=new ADe;e.sn=b;e.so=c;d.then(Bv(e,"f"),Bv(c,"f"));}}
function Kh(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEt(b,null);else{c=new ADQ;d=$rt_globals.window.showOpenFilePicker();e=new ADP;e.sP=b;d.then(Bv(e,"f"),Bv(c,"f"));}}
function CU(a,b,c,d){var e,f,g,h;e=a.Bt;f=e.iw;if(f>0){g=e.pk.data;f=f-1|0;e.iw=f;Tx(e,b,c,d,g[f]);}else{h=e.mw;e=new ADg;e.uA=b;e.AP=c;e.Ac=d;b=new Ty;b.rt=e;c=h.mv;b.AG=c;if(c===null)h.pd=b;else c.uh=b;h.mv=b;h.b2=h.b2+1|0;h.lc=h.lc+1|0;}}
function RJ(a,b,c){var d,e;if(!L2()){b=new Bu;Bm(b,C(39));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new AAg;e.tj=b;b=ALk(c);d.then(Bv(e,"f"),Bv(b,"f"));}}
function Tz(a,b,c,d){var e,f,g;if(!L2()){b=new Bu;Bm(b,C(39));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=Gt(b);A39();b=A6C;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ACH;e.vI=c;c=ALk(d);b.then(Bv(e,"f"),Bv(c,"f"));}}
function VI(a){return L2()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function ALk(b){var c;c=new O1;c.Al=b;return c;}
var BD=G(0);
var AJM=G();
var V=G(0);
var AJN=G();
var ZN=G(0);
function Up(){B.call(this);this.yb=null;}
function AXT(a,b){var c,d;c=b;b=a.yb;if(!(!b.gH.cj(c/1000.0)&&!b.lv)){d=b.hS.c7;if(Bc(d.a,d.b)){b.lv=0;b.gH.bM();}}S6(b);}
function Un(){B.call(this);this.BQ=null;}
function DC(a){Jw(a.BQ);}
var Za=G(0);
function Uo(){B.call(this);this.zJ=null;}
function ANP(a,b,c){var d,e,f,g;c=a.zJ;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.eu){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lq(c);AA$(c,GG(f.width*g),GG(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];AA$(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AHg=G();
function AUZ(){return {box:'device-pixel-content-box'};}
function AR8(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CA=G(0);
function Um(){B.call(this);this.rE=null;}
function ARY(a,b){b=a.rE;b.gH.ce(b.hS.c7,Lq(b));b.gH.bM();}
function AAm(){var a=this;B.call(a);a.mw=null;a.Bc=null;a.sx=null;a.pk=null;a.xd=0;a.iw=0;a.BM=null;}
function Tx(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.xd+1|0;a.xd=f;g=a.sx;h=CX(f);g.j5=Oy(g,g.j5,h);h=AB8(g,h);Wp(h,b);Wp(h,b);g.mr=g.mr+1|0;b=a.Bc[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BJ)g=$rt_ustr(c);else if(Jd(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(Jd(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(Jd(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof SS)){b=new BU;c
=JT(BE(c));g=new K;M(g);H(H(g,C(40)),c);Bm(b,L(g));N(b);}c=c;g=c.ij;if(g===null)g=c.ga;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var UZ=G(0);
function AUC(a,b){var c;c=a.b9();while(c.cD()){b.g(c.b_());}}
var HA=G(0);
function T2(a){var b,c;b=new AAj;c=new Q_;c.yl=a;b.AA=c;return b;}
function AX8(a,b){var c,d;c=a.b9();d=0;while(c.cD()){if(b.H(c.b_())){c.pm();d=1;}}return d;}
var FE=G();
function ED(a){return a.c2()?0:1;}
function Gp(a,b){var c,d,e,f,g,h;c=b.data;d=a.q;e=c.length;if(e<d)b=AGE(HV(BE(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B7(a);while(B_(f)){g=b.data;h=e+1|0;g[e]=Ca(f);e=h;}return b;}
function A0M(a,b){var c;c=a.b9();while(c.cD()){if(BO(c.b_(),b)){c.pm();return 1;}}return 0;}
function H2(a,b){var c,d;c=0;d=b.b9();while(d.cD()){if(!a.zW(d.b_()))continue;c=1;}return c;}
var NK=G(0);
var ML=G(0);
function Ft(){FE.call(this);this.b2=0;}
function AR_(a,b){a.ot(a.c2(),b);return 1;}
function B7(a){var b;b=new Xe;b.jj=a;b.qb=a.b2;b.lE=a.c2();b.hV=(-1);return b;}
function ARz(a,b,c){var d,e;if(b>=0&&b<=a.c2()){if(c.eG())return 0;d=c.b9();while(d.cD()){e=b+1|0;a.ot(b,d.b_());b=e;}return 1;}c=new BU;Y(c);N(c);}
function A1q(a,b,c){c=new Eg;Y(c);N(c);}
function Lc(a,b){var c,d;c=a.c2();d=0;while(true){if(d>=c)return (-1);if(BO(b,a.kG(d)))break;d=d+1|0;}return d;}
function AQO(a,b){var c,d;if(!Jd(b,ML))return 0;c=b;if(a.q!=c.q)return 0;d=0;while(d<c.q){if(!BO(BG(a,d),BG(c,d)))return 0;d=d+1|0;}return 1;}
var Mk=G(Ft);
var OU=G(0);
var AD0=G(0);
function TI(){var a=this;Mk.call(a);a.pd=null;a.mv=null;a.lc=0;}
var Ly=G(0);
function Ee(){var a=this;B.call(a);a.o3=null;a.o8=null;}
var Ex=G(0);
var VH=G(0);
var Ph=G(0);
function Ye(){var a=this;Ee.call(a);a.j5=null;a.mo=null;a.DN=null;a.mr=0;}
function AHn(a,b){var c;c=AB8(a,b);if(c===null)return null;a.j5=K_(a,a.j5,b);a.mr=a.mr+1|0;return c.ks;}
function AB8(a,b){var c,d;c=a.j5;while(true){if(c===null)return null;d=M0(a.mo,b,c.l4);if(!d)break;c=d>=0?c.b5:c.bV;}return c;}
function Oy(a,b,c){var d,e;if(b===null){b=new KL;d=null;b.l4=c;b.ks=d;b.gN=1;b.gX=1;return b;}e=M0(a.mo,c,b.l4);if(!e)return b;if(e>=0)b.b5=Oy(a,b.b5,c);else b.bV=Oy(a,b.bV,c);E1(b);return M9(b);}
function K_(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=M0(a.mo,c,b.l4);if(d<0)b.bV=K_(a,b.bV,c);else if(d>0)b.b5=K_(a,b.b5,c);else{e=b.b5;if(e===null)return b.bV;f=b.bV;g=Q(KL,e.gN).data;h=0;while(true){b=e.bV;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b5;while(h>0){h=h+(-1)|0;j=g[h];j.bV=b;E1(j);b=M9(j);}e.b5=b;e.bV=f;E1(e);b=e;}E1(b);return M9(b);}
function AAo(){B.call(this);this.zZ=null;}
function AAp(){var a=this;B.call(a);a.zb=null;a.za=0;}
function AUS(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.zb;d=a.za;AHV(b.data);e=c.mw;f=e.pd;if(f===null)g=null;else{g=f.uh;e.pd=g;if(g!==null)g.AG=null;else e.mv=null;e.lc=e.lc-1|0;e.b2=e.b2+1|0;g=f.rt;}if(g!==null)Tx(c,g.uA,g.AP,g.Ac,d);else{h=c.pk.data;i=c.iw;c.iw=i+1|0;h[i]=d;}c=c.BM;b=b.data;if(!AHV(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BU;Y(b);N(b);}if(b.length<1){b=new BU;AGA(b);N(b);}e=CX(b[0]);c=AHn(c.zZ,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?H4(Ns(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A3A(Ns(e)):(e instanceof $rt_globals.File?1:0)?AJ$(null,Ns(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AJ$(Ns(e),null);k=l;}c.g(h);}}
function AE_(){var a=this;B.call(a);a.ct=null;a.jz=null;a.EY=null;a.es=null;}
function A4S(a,b){var c=new AE_();A1m(c,a,b);return c;}
function A1m(a,b,c){var d,e,f,g;a.es=null;a.jz=b;d=new YN;d.bG=CN(Q(Cr,0));d.ox=CN(Q(Cr,0));d.bT=CN(Q(CD,0));d.fv=CN(Q(EK,0));d.cT=CN(Q(CW,0));d.gQ=CN(Q(EX,0));d.hi=CN(Q(E_,0));d.mm=CN(Q(V,0));d.mX=CN(Q(V,0));d.dq=c;a.ct=d;e=$rt_globals.window;f=Q(C_,14);g=f.data;d=new AC2;d.q9=a;g[0]=C4(a,b,C(41),d);d=new AC3;d.z_=a;g[1]=C4(a,b,C(42),d);d=new AC4;d.x1=a;g[2]=C4(a,b,C(43),d);d=new AC5;d.wd=a;g[3]=C4(a,b,C(44),d);d=new AC6;d.tO=a;g[4]=C4(a,b,C(45),d);d=new AC7;d.rq=a;g[5]=C4(a,b,C(46),d);d=new AC8;d.BZ=a;g[6]
=C4(a,b,C(47),d);d=new AC9;d.zL=a;g[7]=C4(a,b,C(48),d);d=new AC$;d.xF=a;g[8]=C4(a,b,C(49),d);d=new AC_;d.vL=a;g[9]=C4(a,b,C(50),d);d=new VX;d.vg=a;g[10]=C4(a,b,C(51),d);d=new VY;d.uq=a;e.addEventListener("paste",Bv(d,"handleEvent"),!!1);g[11]=Vp(a,e,C(52),d);d=new VZ;d.wS=a;g[12]=C4(a,e,C(53),d);d=new V0;d.Bz=a;g[13]=C4(a,e,C(54),d);c=new Rk;c.CL=f;a.EY=c;e=new ADW;e.yB=b;b.onpointerdown=Bv(e,"f");e=new ADX;e.xP=b;b.onpointerup=Bv(e,"f");}
function WJ(){return (Ev()).activeElement;}
function C4(a,b,c,d){b.addEventListener($rt_ustr(c),Bv(d,"handleEvent"));return Vp(a,b,c,d);}
function Vp(a,b,c,d){var e;e=new Y9;e.Em=b;e.Eo=c;e.En=d;return e;}
function ABw(a,b){var c;c=new AB$;c.wc=b;return c;}
function Fa(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.jz.getBoundingClientRect();e=BF(GG((b.clientX-d.left)*c),GG((b.clientY-d.top)*c));f=AJX(a.es);d=new OO;ABX(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.Ec=f;return d;}
function V3(a,b,c){var d,e,f,g;d=new Qo;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;ABX(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.oP=0;d.ei=e;d.bm=f;d.jQ=c;d.zO=g;return d;}
function D8(a,b){b.stopPropagation();b.preventDefault();}
function NY(){var a=this;B.call(a);a.px=null;a.ch=null;a.Y=null;a.l6=0;a.AF=null;a.ED=0;a.Dq=0;a.k9=null;a.kZ=null;a.DK=null;a.Fb=null;a.uP=null;a.xg=null;a.iR=null;a.ie=null;a.jZ=null;a.DS=null;a.r$=null;a.c7=null;a.BF=null;a.pK=0;a.mG=0;a.oc=0;a.n2=0;a.lp=0;a.n9=null;a.oj=0.0;a.pS=0.0;}
function AKI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c7=new Bg;a.pK=0;a.n9=new ADc;a.px=c;a.l6=d;g=$rt_str(b.getParameter(7938));h=new K;M(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(L(h)));a.Y=b;a.ch=KJ(c,4,4,1);i=ALC(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B5(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Rc;Jz();c=A6D;m.eV=b;m.h5=c;m.t2=j.length/c.nc|0;m.BA
=l.length;n=b.createBuffer();m.w7=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.wf=null;n=b.createBuffer();m.vR=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.r$=m;a.Dq=ND(g,C(56));c=new Y$;c.d5=b;a.AF=c;a.oj=e;a.pS=f;d=b.getParameter(3379);a.ED=d;c=new K;M(c);U(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(L(c)));k=Q(Di,9);i=k.data;c=A3D(b);a.k9=c;i[0]=c;c=A4v(b,C(58));a.kZ=c;i[1]=c;c=new Zw;H9(c,b,C(59),
C(60),A6D);a.DK=c;i[2]=c;c=A5k(b);a.Fb=c;i[3]=c;c=new PL;VP(c,b,C(61),C(62));a.uP=c;i[4]=c;c=A5w(b);a.xg=c;i[5]=c;c=A4b(b);a.iR=c;i[6]=c;c=A5f(b);a.ie=c;i[7]=c;c=A5g(b);a.jZ=c;i[8]=c;a.DS=k;ADI(b,C(63));}
function Is(a,b,c){return Gy(a,b,c,400,0);}
function HJ(a,b,c){return KJ(a.px,b,c,0);}
function D5(a,b,c,d){return KJ(a.px,b,c,d);}
function ADq(a,b,c,d,e,f){var g,h;Cm(a.ch,c);g=D5(a,Lh(a.ch,b)+(d*2|0)|0,e,f);Cm(g,c);B0(g,b,d,LN(c,e));h=CV(a);CM(h,g);Ez(g);return h;}
function EJ(a,b){var c,d,e,f,g;c=a.Y;d=b.bn;e=b.bs;f=b.bf;g=b.bC;c.clearColor(d,e,f,g);a.Y.clear(16384);}
function B$(a,b){var c;if(b==a.mG)return b;if(!b)a.Y.disable(3042);else{a.Y.enable(3042);a.Y.blendFuncSeparate(770,771,1,1);}c=a.mG;a.mG=b;return c;}
function NG(a,b,c){LV(a,b.a,b.b,c);}
function LV(a,b,c,d){var e,f;e=d.a;f=d.b;a.n2=1;a.lp=1;d=a.n9;d.tE=b;d.tF=c;d.tD=e;d.tC=f;ABY(a);}
function Gc(a){a.n2=0;a.lp=0;ABY(a);}
function ABY(a){var b,c,d,e,f,g;b=a.oc;c=a.n2;if(b!=c){a.oc=c;if(!c)a.Y.disable(3089);else a.Y.enable(3089);}if(a.oc&&a.lp){a.lp=0;d=a.Y;e=a.n9;b=e.tE;c=a.c7.b-e.tF|0;f=e.tC;c=c-f|0;g=e.tD;d.scissor(b,c,g,f);}}
function F3(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.r$;c=a.pK;d=b.h5.Ai;e=b.eV;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eV;h=b.w7;e.bindBuffer(34962,h);i=b.h5.qt.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eV;m=k.jG;n=k.gy;o=b.h5.nc*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gy|0;j=j+1|0;}a:{e=b.wf;if(e!==null){c=0;b.eV.bindBuffer(34962,e);i=b.h5.zu.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eV;j=e.jG;p=e.gy;m=e.sg;n=b.h5.yz;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gy|0;g=g+1|0;}}}q=b.vR;if(q===null){c=b.t2;if(c>0)b.eV.drawArrays(4,0,c);}else{b.eV.bindBuffer(34963,q);k=b.eV;g=b.BA;k.drawElements(4,g,5123,0);}a.pK=d;}
function Bs(a,b,c,d,e){Gv(a,a.k9);GF(a.k9,a.Y,b,c,d,a.c7);d=a.k9;FG(a.Y,d.Bg,e);F3(a);}
function AEg(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Gv(a,a.ie);GF(a.ie,a.Y,b,c,d,a.c7);j=a.ie;d=a.Y;k=j.wD;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.wC;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.ie;FG(a.Y,d.xv,i);F3(a);}
function Md(a,b,c,d,e,f,g,h){var i,j;Gv(a,a.jZ);GF(a.jZ,a.Y,b,c,d,a.c7);d=a.jZ;i=a.Y;j=d.t0;i.uniform2f(j,e,f);FG(i,d.ye,g);d=a.jZ;FG(a.Y,d.w9,h);F3(a);}
function DJ(a,b,c,d,e,f,g,h,i){var j;j=!i?a.uP:a.xg;Gv(a,j);AK6(j,a.Y,!i?a.pS:a.oj);GF(j,a.Y,b,c,d,a.c7);N4(j,a.Y,f);AEl(j,a.Y,f,e);AJ5(j,a.Y,g,h);F3(a);}
function CV(a){var b,c;b=new Iw;c=a.AF;b.eT=new Bg;b.eL=c;b.f4=c.d5.createTexture();A6E=A6E+1|0;return b;}
function M2(a,b){ADI(a.Y,b);}
function Gv(a,b){var c,d;if(b!==a.BF){c=a.Y;d=b.bE;c.useProgram(d);a.BF=b;}}
function Uf(){var a=this;NY.call(a);a.Da=null;a.DL=null;}
function Gy(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.ch;g=AIW(b,c,d,e);KF(f,g);h=f.dc.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eo(f,C(64));m=Eo(f,C(65));h=new LC;n=g;h.oi=b;h.o0=c;h.CG=d;h.CW=e;h.eq=i;h.eI=j;h.Cx=l;h.p5=k;h.qX=n;h.tr=CY(i);h.DA=CY(h.eI);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.CC=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.Ct=b;return h;}
function Cv(){B.call(this);this.x=null;}
function El(a,b){a.x=b;}
function A2x(a,b){return 0;}
function YN(){var a=this;B.call(a);a.bG=null;a.ox=null;a.bT=null;a.fv=null;a.cT=null;a.gQ=null;a.hi=null;a.mm=null;a.mX=null;a.dq=null;a.fa=null;a.xK=0;}
function Tt(a,b){var c,d,e,f;DC(a.dq);c=(B3(!b.jQ?a.ox:a.bG)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].H(b);if(f)break;if(b.oP)break;e=e+1|0;}return f;}
function RH(a,b,c){var d,e,f;DC(a.dq);d=(B3(a.gQ)).data;e=d.length;f=0;while(f<e){if(d[f].h9(b,c))return 1;f=f+1|0;}return 0;}
function AC2(){B.call(this);this.q9=null;}
function AZK(a,b){var c;c=a.q9;if(Tt(c.ct,V3(c,b,1)))D8(c,b);}
function AC3(){B.call(this);this.z_=null;}
function AZU(a,b){var c;c=a.z_;if(Tt(c.ct,V3(c,b,0)))D8(c,b);}
function AC4(){B.call(this);this.x1=null;}
function AQz(a,b){var c,d,e,f,g,h,i;c=a.x1;if(c.es!==null){a:{b:{d=Fa(c,b);e=c.ct;DC(e.dq);f=e.fa;if(f!==null)f.g(d);else{g=(B3(e.bT)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bU(d))break a;i=i+1|0;}}}}D8(c,b);}}
function AC5(){B.call(this);this.wd=null;}
function AYB(a,b){var c,d,e,f,g,h;c=a.wd;b.button;if(c.es!==null)a:{d=Fa(c,b);c=c.ct;e=b.button;DC(c.dq);if(c.fa===null){f=(B3(c.bT)).data;g=f.length;h=0;while(h<g){b=f[h].cn(d,e);if(b!==null){c.fa=b;c.xK=e;break a;}h=h+1|0;}}}}
function AC6(){B.call(this);this.tO=null;}
function AYN(a,b){var c,d,e,f,g,h,i;c=a.tO;b.button;if(c.es!==null){d=Fa(c,b);e=c.ct;f=b.button;DC(e.dq);if(f==e.xK&&e.fa!==null)e.fa=null;g=(B3(e.bT)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dB(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)D8(c,b);}}
function AC7(){B.call(this);this.rq=null;}
function AR4(a,b){var c,d,e,f,g,h,i,j,k;c=a.rq;if(c.es!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.ct;f=Fa(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DC(e.dq);i=(B3(e.fv)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dy(f,d,h))break b;k=k+1|0;}}D8(c,b);}}
function AC8(){B.call(this);this.BZ=null;}
function AOU(a,b){var c,d,e,f,g,h,i,j;c=a.BZ;if(c.es!==null){d=Fa(c,b);e=c.ct;f=b.button;g=b.detail;DC(e.dq);h=(B3(e.bT)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cy(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)D8(c,b);}}
function AC9(){B.call(this);this.zL=null;}
function A2X(a,b){var c,d,e,f,g,h,i;c=a.zL;if(c.es!==null){d=Fa(c,b);e=c.ct;DC(e.dq);f=(B3(e.cT)).data;g=f.length;h=0;a:{while(h<g){if(f[h].H(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)D8(c,b);}}
function AC$(){B.call(this);this.xF=null;}
function AOr(a,b){var c,d,e,f,g,h;b=a.xF.ct;if(b.fa!==null){c=En();d=Cy(b.fa);e=new K;M(e);H(H(e,C(67)),d);Bk(c,L(e));}f=(B3(b.mX)).data;g=f.length;h=0;while(h<g){f[h].f();h=h+1|0;}DC(b.dq);}
function AC_(){B.call(this);this.vL=null;}
function ASL(a,b){var c,d,e;b=a.vL.ct;c=(B3(b.mm)).data;d=c.length;e=0;while(e<d){c[e].f();e=e+1|0;}if(b.fa!==null)b.fa=null;DC(b.dq);}
function VX(){B.call(this);this.vg=null;}
function A2y(a,b){var c;c=a.vg;if(c.es!==null)Fa(c,b);}
function VY(){B.call(this);this.uq=null;}
function AQg(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.uq;if(WJ()===c.jz){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B3(c.ct.hi)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cC();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.ct.dq;m=new Py;m.vX=k;m.vY=l;g.getAsString(Bv(m,"accept"));D8(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new K;M(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(L(l)));}e=e+1
|0;}}}
function VZ(){B.call(this);this.wS=null;}
function AQE(a,b){var c;c=a.wS;if(WJ()===c.jz&&RH(c.ct,ABw(c,b),0))D8(c,b);}
function V0(){B.call(this);this.Bz=null;}
function AZ1(a,b){var c;c=a.Bz;if(WJ()===c.jz&&RH(c.ct,ABw(c,b),1))D8(c,b);}
var ABR=G(0);
var AB0=G();
function KJ(a,b,c,d){var e,f,g,h,i;e=new ZV;e.jh=d;A6m=A6m+1|0;e.nV=b;e.no=c;f=(Ev()).createElement("canvas");e.i8=f;g=b;f.width=g;h=e.i8;f=c;h.height=f;if(!d)g=e.i8.getContext("2d");else{i=e.i8;h=AVH();g=i.getContext("2d",h);}e.dc=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var ABZ=G();
function APw(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function OQ(){var a=this;B.call(a);a.P=null;a.o=null;a.bw=null;}
var KD=G();
var A58=null;function M0(a,b,c){return b.ms(c);}
function AF0(){A58=new KD;}
function AHu(){var a=this;B.call(a);a.dm=null;a.gd=null;a.db=0;}
function CN(a){var b=new AHu();AOR(b,a);return b;}
function AOR(a,b){a.dm=b;}
function MO(a,b){return a.dm.data[b];}
function Ba(a,b){var c,d,e;c=a.db;d=a.dm;if(c==d.data.length)a.dm=C8(d,c+4|0);d=a.dm.data;e=a.db;a.db=e+1|0;d[e]=b;a.gd=null;}
function Sh(a,b){var c,d,e,f;c=0;while(true){d=a.dm.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.db=a.db-1|0;a.gd=null;}c=c+1|0;}}
function B3(a){var b;b=a.gd;if(!(b!==null&&b.data.length==a.db))a.gd=C8(a.dm,a.db);return a.gd;}
var D$=G(0);
var Cr=G(0);
var CD=G(0);
function AYc(a,b){return 0;}
function ATr(a,b,c){return null;}
function AL3(a,b,c){return 0;}
function A0c(a,b,c,d){return 0;}
var EK=G(0);
var CW=G(0);
var EX=G(0);
var Dd=G(0);
var E_=G(0);
function Rk(){B.call(this);this.CL=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BF(a,b){var c=new Bg();QM(c,a,b);return c;}
function AJX(a){var b=new Bg();ANz(b,a);return b;}
function QM(a,b,c){a.a=b;a.b=c;}
function ANz(a,b){a.a=b.a;a.b=b.b;}
function Cn(a,b){a.a=b.a;a.b=b.b;}
function X(a,b,c){a.a=b;a.b=c;}
function AH3(a){var b,c,d;b=a.a;c=a.b;d=new K;M(d);U(H(U(H(d,C(70)),b),C(71)),c);return L(d);}
function APn(a,b){var c;a:{b:{if(a!==b){if(BE(b)!==BE(a))break b;if(!JZ(a,b))break b;}c=1;break a;}c=0;}return c;}
function JZ(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function ADc(){var a=this;B.call(a);a.tE=0;a.tF=0;a.tD=0;a.tC=0;}
var AGZ=G();
var AIB=G(0);
function Y$(){B.call(this);this.d5=null;}
function Ob(){var a=this;B.call(a);a.bE=null;a.Fd=null;}
function AJ9(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new K;M(h);H(H(h,f),g);g=L(h);b.deleteShader(e);Bk(Bt(),g);Bk(En(),C(74));Bk(En(),d);Bk(En(),C(74));b=new Bu;Bm(b,g);N(b);}
function Di(){var a=this;Ob.call(a);a.xE=null;a.sD=null;a.nR=null;}
function A6F(a,b,c,d){var e=new Di();H9(e,a,b,c,d);return e;}
function H9(a,b,c,d,e){var f,g,h,i,j,k;a.Fd=e;f=AJ9(b,35633,c);d=AJ9(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bE=g;h=e.ua.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bE;k=c.jG;c=c.sL;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bE;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADI(b,C(75));a.nR=new Bg;c=a.bE;a.xE=b.getUniformLocation(c,"uResolution");c=a.bE;a.sD=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new K;M(c);H(H(c,C(76)),d);Bm(b,L(c));N(b);}
function AFi(a,b,c){var d,e,f;if(!JZ(a.nR,c)){Cn(a.nR,c);d=a.xE;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function GF(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.sD;b.uniform4f(e,i,l,h,j);AFi(a,b,f);}
function AKN(){Di.call(this);this.Bg=null;}
function A3D(a){var b=new AKN();AX0(b,a);return b;}
function AX0(a,b){var c;Jz();H9(a,b,C(59),C(77),A6D);c=a.bE;a.Bg=b.getUniformLocation(c,"uColor");}
function Fu(){Di.call(this);this.tJ=null;}
function A4v(a,b){var c=new Fu();ABy(c,a,b);return c;}
function A6G(a,b,c){var d=new Fu();ABC(d,a,b,c);return d;}
function ABy(a,b,c){ABC(a,b,C(59),c);}
function ABC(a,b,c,d){Jz();H9(a,b,c,d,A6D);c=a.bE;a.tJ=b.getUniformLocation(c,"sDiffuse");}
function N4(a,b,c){var d;d=a.tJ;b.uniform1i(d,0);b.activeTexture(33984);c=c.f4;b.bindTexture(3553,c);}
var Zw=G(Di);
function AFU(){Fu.call(this);this.Cn=null;}
function A5k(a){var b=new AFU();ARA(b,a);return b;}
function ARA(a,b){var c;ABy(a,b,C(78));c=a.bE;a.Cn=b.getUniformLocation(c,"uContrast");}
function Hu(){var a=this;Fu.call(a);a.r1=null;a.sV=null;a.tY=null;a.Av=null;a.qF=0.0;}
function A6H(a,b,c){var d=new Hu();VP(d,a,b,c);return d;}
function VP(a,b,c,d){ABC(a,b,c,d);c=a.bE;a.r1=b.getUniformLocation(c,"uTexTransform");c=a.bE;a.sV=b.getUniformLocation(c,"uColor");c=a.bE;a.tY=b.getUniformLocation(c,"uBgColor");c=a.bE;a.Av=b.getUniformLocation(c,"uTextPow");}
function AK6(a,b,c){var d;if(a.qF!==c){a.qF=c;d=a.Av;b.uniform2f(d,c,0.0);}}
function AJ5(a,b,c,d){FG(b,a.sV,c);FG(b,a.tY,d);}
function AEl(a,b,c,d){var e,f,g,h,i,j;c=c.eT;e=c.a;f=c.b;g=d.bn;h=e;g=g/h;i=d.bs;j=f;i=i/j;h=d.bf/h;j=d.bC/j;c=a.r1;b.uniform4f(c,g,i,h,j);}
var PL=G(Hu);
var AHL=G(Hu);
function A5w(a){var b=new AHL();AWV(b,a);return b;}
function AWV(a,b){VP(a,b,C(61),C(79));}
function AIP(){var a=this;Fu.call(a);a.wg=null;a.we=null;a.sW=null;}
function A4b(a){var b=new AIP();ANZ(b,a);return b;}
function ANZ(a,b){var c,d;ABy(a,b,C(80));c=a.bE;a.wg=b.getUniformLocation(c,"uColorB");d=a.bE;a.we=b.getUniformLocation(d,"uColorF");d=a.bE;a.sW=b.getUniformLocation(d,"uContrast");}
function AKh(){var a=this;Di.call(a);a.xv=null;a.wD=null;a.wC=null;}
function A5f(a){var b=new AKh();AWX(b,a);return b;}
function AWX(a,b){var c;Jz();H9(a,b,C(59),C(81),A6D);c=a.bE;a.xv=b.getUniformLocation(c,"uColor");c=a.bE;a.wD=b.getUniformLocation(c,"uPoints1");c=a.bE;a.wC=b.getUniformLocation(c,"uPoints2");}
function AEP(){var a=this;Di.call(a);a.w9=null;a.t0=null;a.ye=null;}
function A5g(a){var b=new AEP();AVV(b,a);return b;}
function AVV(a,b){var c;Jz();H9(a,b,C(59),C(82),A6D);c=a.bE;a.w9=b.getUniformLocation(c,"uColor");c=a.bE;a.t0=b.getUniformLocation(c,"uBaseline");c=a.bE;a.ye=b.getUniformLocation(c,"uScaleHExp");}
var Z6=G(0);
var ALl=G(0);
function FG(b,c,d){var e,f,g,h;e=d.bn;f=d.bs;g=d.bf;h=d.bC;b.uniform4f(c,e,f,g,h);}
function ADI(b,c){var d,e;d=b.getError();if(d){b=Bt();e=new K;M(e);U(H(e,c),d);Bk(b,L(e));}}
function Y9(){var a=this;B.call(a);a.Em=null;a.Eo=null;a.En=null;}
function Rc(){var a=this;B.call(a);a.eV=null;a.h5=null;a.w7=null;a.wf=null;a.vR=null;a.t2=0;a.BA=0;}
function CH(){var a=this;B.call(a);a.El=null;a.fS=0;}
function DK(a,b,c){a.El=b;a.fS=c;}
function G_(){var a=this;CH.call(a);a.ua=null;a.qt=null;a.zu=null;a.nc=0;a.yz=0;a.Ai=0;}
var A6D=null;var A6I=null;function Jz(){Jz=Bn(G_);AO_();}
function AO_(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new G_;c=Q(Ei,2);d=c.data;A1V();d[0]=A6J;d[1]=A6K;Jz();DK(b,C(83),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.p3.fS){case 0:f=f+l.gy|0;h=h+1|0;break a;case 1:e=e+l.gy|0;g=g+1|0;break a;default:}}i=i|1<<l.jG;k=k+1|0;}b.ua=c;b.nc=e;b.yz=f;b.Ai=i;c=Q(Ei,g);m=c.data;b.qt=c;c=Q(Ei,h);n=c.data;b.zu=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.p3.fS){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A6D
=b;c=Q(G_,1);c.data[0]=b;A6I=c;}
var Mu=G(0);
var S9=G(0);
var AB4=G(0);
var GV=G();
function MX(){GV.call(this);this.Cd=null;}
function AFB(){var a=this;MX.call(a);a.Do=0;a.nl=0;a.lG=null;a.m2=null;a.uL=null;}
function AQM(a,b){var c=new AFB();A1E(c,a,b);return c;}
function A1E(a,b,c){a.Cd=b;b=new K;M(b);a.lG=b;a.m2=B5(32);a.Do=c;AFv();a.uL=A6L;}
function ABh(a,b,c,d){var e,$$je;e=a.Cd;if(e===null)a.nl=1;if(!(a.nl?0:1))return;a:{try{e.mV(b,c,d);break a;}catch($$e){$$je=EY($$e);if($$je instanceof I9){}else{throw $$e;}}a.nl=1;}}
function XF(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AJK(b,c,d-c|0);e=DM(Bd(16,Be(e.length,1024)));g=AJx(e,0,e.data.length);h=a.uL;i=new QH;b=DM(1);j=b.data;j[0]=63;Hn();k=A6M;i.nU=k;i.np=k;c=j.length;if(c&&c>=i.wB){i.Ek=h;i.sJ=b.hD();i.Dj=2.0;i.wB=4.0;i.yj=B5(512);i.ro=DM(512);k=A6N;if(k===null){i=new BU;Bm(i,C(84));N(i);}i.nU=k;i.np=k;a:while(true){if(i.ly==3){f=new C$;Y(f);N(f);}i.ly=2;b:{while(true){try{k=AEH(i,f,g);}catch($$e){$$je=EY($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(I3(k))
{d=Ch(f);if(d<=0)break b;k=Eu(d);}else if(If(k))break;h=!Ml(k)?i.nU:i.np;c:{if(h!==A6N){if(h===A6O)break c;else break b;}d=Ch(g);b=i.sJ;l=b.data.length;if(d<l){k=A6P;break b;}ADo(g,b,0,l);}FA(f,f.Z+La(k)|0);}}l=If(k);ABh(a,e,0,g.Z);PU(g);if(!l){while(true){d=i.ly;if(d!=2&&d!=4){f=new C$;Y(f);N(f);}f=A6Q;if(f===f)i.ly=3;l=If(f);ABh(a,e,0,g.Z);PU(g);if(!l)break;}return;}}N(AWw(f));}i=new BU;Bm(i,C(85));N(i);}
function Bk(a,b){var c,d,e,f,g,h,i,j;BM(BY(a.lG,b),10);b=a.lG;c=b.L;d=a.m2;if(c>d.data.length)d=B5(c);e=0;f=0;if(e>c){b=new BH;Bm(b,C(86));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.C.data;j=e+1|0;g[f]=i[e];f=h;e=j;}XF(a,d,0,c);a.lG.L=0;}
function HF(){GV.call(this);this.E3=null;}
function Wc(a){a.E3=DM(1);}
var LJ=G(HF);
var A6p=null;function APp(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AGG(){var b;b=new LJ;Wc(b);A6p=b;}
function Ei(){var a=this;CH.call(a);a.sL=null;a.p3=null;a.gy=0;a.sg=0;a.jG=0;}
var A6J=null;var A6K=null;var A6R=null;function A1V(){A1V=Bn(Ei);AXu();}
function A3N(a,b,c,d,e,f,g){var h=new Ei();UV(h,a,b,c,d,e,f,g);return h;}
function UV(a,b,c,d,e,f,g,h){A1V();DK(a,b,c);a.sL=d;a.p3=e;a.gy=f;a.sg=g;a.jG=h;}
function AXu(){var b;b=new Ei;AQv();UV(b,C(87),0,C(88),A6S,2,0,0);A6J=b;b=A3N(C(89),1,C(90),A6S,2,0,1);A6K=b;A6R=I(Ei,[A6J,b]);}
function MP(){var a=this;B.call(a);a.Eb=null;a.EG=null;}
function AGP(b){var c,d;if(Gr(b))N(AJa(b));if(!AKy(P(b,0)))N(AJa(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AKy(d))break a;else N(AJa(b));}}c=c+1|0;}}
function AKy(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mx=G(MP);
var A6L=null;function AFv(){AFv=Bn(Mx);ANY();}
function AG1(a){var b,c;b=new Tc;b.gv=C(91);Hn();c=A6M;b.jo=c;b.n0=c;b.EB=a;b.wI=0.3333333432674408;b.CY=0.5;b.xz=DM(512);b.z9=B5(512);return b;}
function ANY(){var b,c,d,e,f;b=new Mx;AFv();c=Q(BJ,0);d=c.data;AGP(C(92));e=d.length;f=0;while(f<e){AGP(d[f]);f=f+1|0;}b.Eb=C(92);b.EG=c.hD();A6L=b;}
function Yi(){var a=this;B.call(a);a.gk=null;a.qh=null;a.mH=null;a.An=null;a.su=null;a.sG=null;}
function AJd(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gk,b,c));}
function O9(a,b){var c,d,e,f,g,h,i,$$je;c=new BJ;d=b;while(a.qh[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gk,b,d));f=e.data;Ff();d=f.length;AFv();g=A6L;h=AJx(e,0,d);a:{try{i=AG1(g);Hn();g=AII(AGi(AK1(i,A6N),A6N),h);break a;}catch($$e){$$je=EY($$e);if($$je instanceof Gf){g=$$je;}else{throw $$e;}}h=new ADx;h.kM=1;h.k7=1;h.iQ=C(93);h.nq=g;N(h);}if(!g.Z&&g.eo==g.ok)c.cc=g.iC;else{f=B5(Ch(g));e=f.data;c.cc=f;Ps(g,f,0,e.length);}return c;}
function WL(a,b){var c,d,e;c=new BJ;d=b>>>1|0;e=d;while(a.mH[e]){e=e+1|0;}d=e-d|0;Jt(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gk,b,d)));return c;}
var H5=G(CH);
var A6T=null;var A6S=null;var A6U=null;function AQv(){AQv=Bn(H5);AWI();}
function ANT(a,b){var c=new H5();AKF(c,a,b);return c;}
function AKF(a,b,c){AQv();DK(a,b,c);}
function AWI(){var b;A6T=ANT(C(94),0);b=ANT(C(95),1);A6S=b;A6U=I(H5,[A6T,b]);}
var NM=G(HF);
var A6q=null;function AN8(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AH1(){var b;b=new NM;Wc(b);A6q=b;}
function AGU(){BU.call(this);this.Cs=null;}
function AJa(a){var b=new AGU();AS3(b,a);return b;}
function AS3(a,b){Y(a);a.Cs=b;}
var Uq=G(Ew);
var Mw=G(0);
function ADW(){B.call(this);this.yB=null;}
function ASu(a,b){a.yB.setPointerCapture(b.pointerId);}
function ADX(){B.call(this);this.xP=null;}
function AMK(a,b){a.xP.releasePointerCapture(b.pointerId);}
function Ic(){var a=this;B.call(a);a.ok=0;a.Z=0;a.eo=0;a.jL=0;}
function ACO(a,b){a.jL=(-1);a.ok=b;a.eo=b;}
function FA(a,b){var c,d,e;if(b>=0&&b<=a.eo){a.Z=b;if(b<a.jL)a.jL=0;return a;}c=new BU;d=a.eo;e=new K;M(e);BM(U(H(U(H(e,C(96)),b),C(97)),d),93);Bm(c,L(e));N(c);}
function Ch(a){return a.eo-a.Z|0;}
function D9(a){return a.Z>=a.eo?0:1;}
var AAi=G(0);
var LD=G(Ic);
function AHO(b){var c,d;if(b>=0)return ARL(0,b,B5(b),0,b,0);c=new BU;d=new K;M(d);U(H(d,C(98)),b);Bm(c,L(d));N(c);}
function AJK(b,c,d){return ARL(0,b.data.length,b,c,c+d|0,0);}
function Ps(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BH;i=new K;M(i);U(H(U(H(i,C(99)),g),C(100)),f);Bm(h,L(i));N(h);}if(Ch(a)<d){j=new Oh;Y(j);N(j);}if(d<0){j=new BH;k=new K;M(k);H(U(H(k,C(101)),d),C(102));Bm(j,L(k));N(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iC.data[m+a.p6|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BH;d=b.length;k=new K;M(k);BM(U(H(U(H(k,C(103)),c),C(97)),d),41);Bm(j,L(k));N(j);}
function Nm(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.qi){b=new Kw;Y(b);N(b);}e=d-c|0;if(Ch(a)<e){b=new JK;Y(b);N(b);}if(c>J(b)){f=new BH;d=J(b);b=new K;M(b);BM(U(H(U(H(b,C(104)),c),C(97)),d),41);Bm(f,L(b));N(f);}if(d>J(b)){f=new BH;c=J(b);b=new K;M(b);U(H(U(H(b,C(105)),d),C(106)),c);Bm(f,L(b));N(f);}if(c>d){b=new BH;f=new K;M(f);U(H(U(H(f,C(104)),c),C(107)),d);Bm(b,L(f));N(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;AAn(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function Nd(){var a=this;Ic.call(a);a.nk=0;a.pN=null;a.C4=null;}
function AJx(b,c,d){var e,f,g;e=b.data;f=new ADn;g=e.length;d=c+d|0;ACO(f,g);AX2();f.C4=A6V;f.nk=0;f.pN=b;f.Z=c;f.eo=d;f.C8=0;f.w6=0;return f;}
function ADo(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.w6){e=new Kw;Y(e);N(e);}if(Ch(a)<d){e=new JK;Y(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BH;j=new K;M(j);U(H(U(H(j,C(108)),h),C(100)),g);Bm(i,L(j));N(i);}if(d<0){e=new BH;i=new K;M(i);H(U(H(i,C(101)),d),C(102));Bm(e,L(i));N(e);}h=a.Z;k=h+a.nk|0;l=0;while(l<d){b=a.pN.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BH;d=b.length;i=new K;M(i);BM(U(H(U(H(i,C(103)),c),C(97)),d),41);Bm(e,
L(i));N(e);}
function PU(a){a.Z=0;a.eo=a.ok;a.jL=(-1);return a;}
function IJ(){B.call(this);this.DV=null;}
var A6O=null;var A6N=null;var A6M=null;function Hn(){Hn=Bn(IJ);AQj();}
function AHx(a){var b=new IJ();AKw(b,a);return b;}
function AKw(a,b){Hn();a.DV=b;}
function AQj(){A6O=AHx(C(109));A6N=AHx(C(110));A6M=AHx(C(111));}
var Pl=G(Cv);
function AQb(a){}
function AO6(a,b,c){}
function HN(){var a=this;Cv.call(a);a.dS=null;a.r=null;}
function ACN(a,b){var c,d,e;El(a,b);a.dS=AIV(0,0,64);c=new TC;c.bO=new Bg;c.dU=CN(Q(C2,0));c.d1=new Bg;c.p4=new Bg;c.mt=new B2;c.Cg=new B2;d=b.P;c.bH=d;e=b.bw;c.e2=e;c.cz=d.l6;c.cW=Ry(e);d=b.o.mX;e=new Y5;e.tI=c;Ba(d,e);d=b.o.mm;e=new Y4;e.v_=c;Ba(d,e);a.r=c;Ba(b.o.bG,new Z8);b=b.o.bG;c=a.r;BC(c);d=new Z7;d.xy=c;Ba(b,d);}
function HB(a){EJ(a.x.P,a.dS);}
function AF5(a,b,c){var d,e,f,g,h;a:{d=a.r;Cn(d.bO,b);e=d.cf;if(e!==c){d.cf=c;f=(B3(d.dU)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].fV(e,c);h=h+1|0;}}}}
function CG(){HN.call(this);this.M=null;}
function Ga(a,b){KW(a,b,1);}
function KW(a,b,c){var d,e,f;ACN(a,b);d=new ADA;e=a.r;d.b7=CN(Q(TO,0));d.b$=e;a.M=d;Ba(a.r.dU,d);Ba(b.o.bT,a.M);d=b.o.fv;e=a.M;BC(e);f=new Wo;f.v6=e;Ba(d,f);d=b.o.cT;e=a.M;BC(e);f=new Wn;f.tt=e;Ba(d,f);if(c){b=b.o.bT;f=a.r.cW;d=new W6;d.wA=f;Ba(b,d);}}
function AN2(a){HB(a);JR(a.M);}
function IE(a,b,c){var d,e;AF5(a,b,c);d=(B3(a.M.b7)).data.length;e=0;while(e<d){e=e+1|0;}}
function AME(a,b){var c,d,e,f,g;c=a.M;d=0;e=(B3(c.b7)).data;f=e.length;g=0;while(g<f){d=e[g].W.cj(b)|d;g=g+1|0;}return d;}
var EF=G(0);
function AHD(a){a.e8(IF());}
function Hs(a){a.e8(Mi());}
function AIp(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IY;c=new Ke;d=new Ho;AG2();K2(d,A6W);My(c,d,BZ(A6X),BZ(A6Y),BZ(A6Z),BZ(A6X),BZ(A60),BZ(A61),BZ(A62),BZ(A63),BZ(A64),BZ(A65));e=AJE(S(C(112)));AGp();f=(A66.hD()).data;g=f.length;h=Q(Ku,g);i=h.data;j=0;while(j<g){i[j]=f[j].pr;j=j+1|0;}k=AKj(S(C(113)),S(C(114)),S(C(115)),S(C(116)));l=new I0;m=new I8;AVd();d=A67;OH(m,d,A68,A69,A6$,A6_,d);LW(l,m,AK2(),AHG(S(C(117)),S(C(112)),CC(0)),AK2(),AH4(1,0.07500000298023224),A7a,A7b);LM(b,c,e,h,k,l,AEn(S(C(118)),S(C(119)),S(C(120)),
S(C(121))));a.e8(b);}
var JG=G(0);
var Fk=G(0);
function KZ(){var a=this;CG.call(a);a.E=null;a.G=null;a.iL=null;a.jq=0;a.k_=null;a.mz=null;a.zx=null;a.nj=null;a.fI=null;}
function A5h(a){var b=new KZ();AFy(b,a);return b;}
function AFy(a,b){var c,d,e;KW(a,b,0);a.fI=AV3(a.r);c=K1(a.M);a.iL=c;a.E=Ih(c);c=Ih(a.iL);a.G=c;a.mz=AHq(a.E,c);c=a.E;c.b3=1;Oj(a.fI,c,a.G);c=a.E;d=new TY;d.Br=a;c.iu=d;c=a.G;d=new TZ;d.y1=a;c.iu=d;AHo(a,0);M1(a.r,a.E);Ba(b.o.fv,a);Ba(b.o.bT,a);c=b.o.bG;d=new T0;d.w_=a;Ba(c,d);c=b.o.bG;d=new HS;e=new TW;e.u6=a;It(d,b,e);Ba(c,d);Ba(b.o.gQ,a);Ba(b.o.hi,a);b=b.o.cT;c=new TX;c.s0=a;Ba(b,c);Hs(a);}
function Wg(a,b){if(a.E===b)a.jq=a.jq|1;if(a.G===b)a.jq=a.jq|2;if((a.jq&3)==3)AK8(a);}
function AHo(a,b){IZ(a.E,b);IZ(a.G,b);}
function A19(a,b,c){if(DO(a.r,a.E))return He(a.E,b,c);if(!DO(a.r,a.G))return 0;return He(a.G,b,c);}
function AFQ(a){if(DO(a.r,a.E))return VU(a,a.E);if(!DO(a.r,a.G))return null;return VU(a,a.G);}
function VU(a,b){var c;c=new S1;c.sz=b;return c;}
function AFw(a,b,c){var d;d=Er(c);if(b!==a.E)a.nj=d;else a.zx=d;b=a.zx;if(b!==null&&a.nj!==null)Gj(a.x.bw,Er(c));else{if(b!==null)Gj(a.x.bw,b);b=a.nj;if(b!==null)Gj(a.x.bw,b);}}
function AK8(a){var b,c,d;Bk(Bt(),C(122));b=a.E.d.h;c=a.G.d.h;d=new Vr;d.sH=a;AIr(b,c,d,a.x.bw);}
function ASe(a,b){var c,d;c=I2(a.E,b);d=I2(a.G,b);return !c&&!d?0:1;}
function AYK(a){var b;HB(a);Ip(a.E);Ip(a.G);b=a.fI;AGC(b,b.iF.bH);JR(a.M);}
function AXP(a){return FS(0);}
function ASC(a){Jv(a.E);Jv(a.G);}
function AYG(a){Ky(a.E);Ky(a.G);}
function ATc(a,b){IA(a.E,b);IA(a.G,b);}
function AZv(a,b){Kz(a.r,b);}
function ANm(a,b){if(H6(a.M,b)){LY(a.E);LY(a.G);}}
function API(a,b,c){IE(a,b,c);AF4(a,b,c);}
function AF4(a,b,c){var d,e,f,g,h,i;d=new Bg;e=Cg(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;QM(f,g-h|0,b.b);Mv(a.E,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;Mv(a.G,d,f,c);X(a.fI.i,f.a,d.b);X(a.fI.k,d.a-f.a|0,f.b);}
function AL7(a,b){BC(b);GL(a.iL,b);Fy(a.E,b);Fy(a.G,b);a.fI.il=b;}
function AHi(a,b){if(b.bm!=121)return 0;return 1;}
function AJw(a,b){var c,d,e,f;if(DO(a.r,a.E)){c=a.iL;d=b.j;e=a.E;f=new Pd;f.uV=a;GQ(c,d,e,a,a,a,f);}if(DO(a.r,a.G)){c=a.iL;b=b.j;d=a.G;e=new Pc;e.t$=a;GQ(c,b,d,a,a,a,e);}return 1;}
function AZO(a,b){var c,d;c=BW(a.E,b.j)&&Xx(a.E,b)?1:0;d=BW(a.G,b.j)&&Xx(a.G,b)?1:0;return !c&&!d?0:1;}
function AXQ(a,b,c,d){var e,f;e=BW(a.E,b.j)&&O_(a.E,b,c,d)?1:0;f=BW(a.G,b.j)&&O_(a.G,b,c,d)?1:0;return !e&&!f?0:1;}
function AQy(a,b,c){var d,e,f,g,h,i,j,k;d=BW(a.E,b.j);e=BW(a.G,b.j);f=a.r;g=f.ee;h=g!==null?0:1;i=a.E;j=g!==i?0:1;k=g!==a.G?0:1;if(d&&!(!h&&!k))FP(f,i);if(e&&!(!h&&!j))FP(a.r,a.G);if(d){i=Wx(a.E,b,c);if(i!==null)return i;}return !e?null:Wx(a.G,b,c);}
function A0e(a,b,c){var d,e,f,g;d=BW(a.E,b.j);e=BW(a.G,b.j);f=d&&S8(a.E,b,c)?1:0;g=e&&S8(a.G,b,c)?1:0;return !f&&!g?0:1;}
function ARP(a,b,c,d){var e,f,g,h;e=BW(a.E,b.j);f=BW(a.G,b.j);g=e&&LT(a.E,b,c,d)?1:0;h=f&&LT(a.G,b,c,d)?1:0;return !g&&!h?0:1;}
function AYf(a){return AFQ(a);}
var AG4=G(KZ);
function A4N(a){var b=new AG4();A1Y(b,a);return b;}
function A1Y(a,b){var c;AFy(a,b);a.E.e0=1;a.G.e0=1;c=new To;c.xb=a;Qg(a,c,C(123));c=new Tq;c.Aq=a;Qg(a,c,C(124));}
function AQJ(a){return FS(1);}
function Qg(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new O2;d=d.then(Bv(e,"f"));f=new O4;f.tL=b;f.tK=c;g=new O3;d.then(Bv(f,"f"),Bv(g,"f"));}
var AHs=G();
function A1u(b){var c,d;if(J(b)>0){c=new K;M(c);H(H(c,C(125)),b);$rt_globals.console.info($rt_ustr(L(c)));}a:{d=(-1);switch(J2(b)){case -1570047148:if(!Bj(b,C(126)))break a;d=17;break a;case -1509980539:if(!Bj(b,C(127)))break a;d=13;break a;case -1351411913:if(!Bj(b,C(128)))break a;d=5;break a;case -1073555521:if(!Bj(b,C(129)))break a;d=14;break a;case -1045861099:if(!Bj(b,C(130)))break a;d=18;break a;case -1045861098:if(!Bj(b,C(131)))break a;d=19;break a;case -811765794:if(!Bj(b,C(132)))break a;d=6;break a;case -785237654:if
(!Bj(b,C(133)))break a;d=11;break a;case -695287066:if(!Bj(b,C(134)))break a;d=20;break a;case -631889171:if(!Bj(b,C(135)))break a;d=9;break a;case -536831301:if(!Bj(b,C(136)))break a;d=25;break a;case -439438829:if(!Bj(b,C(137)))break a;d=21;break a;case -357667878:if(!Bj(b,C(138)))break a;d=22;break a;case -223304637:if(!Bj(b,C(139)))break a;d=2;break a;case -193916863:if(!Bj(b,C(140)))break a;d=23;break a;case 2129957:if(!Bj(b,C(141)))break a;d=1;break a;case 3343967:if(!Bj(b,C(142)))break a;d=10;break a;case 3556498:if
(!Bj(b,C(143)))break a;d=4;break a;case 91636708:if(!Bj(b,C(144)))break a;d=24;break a;case 485517998:if(!Bj(b,C(145)))break a;d=7;break a;case 544901384:if(!Bj(b,C(146)))break a;d=3;break a;case 1030621992:if(!Bj(b,C(147)))break a;d=16;break a;case 1164939699:if(!Bj(b,C(148)))break a;d=27;break a;case 1465713255:if(!Bj(b,C(149)))break a;d=8;break a;case 1554501643:if(!Bj(b,C(150)))break a;d=15;break a;case 1609169232:if(!Bj(b,C(151)))break a;d=12;break a;case 2090248989:if(!Bj(b,C(152)))break a;d=26;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new UE;break b;case 3:case 4:b=new UB;break b;case 5:b=new UA;break b;case 6:b=new UD;break b;case 7:b=new UC;break b;case 8:b=new UI;break b;case 9:case 10:b=new UH;break b;case 11:b=new UK;break b;case 12:b=new UJ;break b;case 13:b=new AA1;break b;case 14:b=new AA0;break b;case 15:b=new AAZ;break b;case 16:b=new AAO;break b;case 17:b=new AAN;break b;case 18:b=new AAL;break b;case 19:b=new AAK;break b;case 20:b=new AAJ;break b;case 21:b=new AAI;break b;case 22:b=new AAH;break b;case 23:b
=new AAS;break b;case 24:b=new AAR;break b;case 25:b=new AAQ;break b;case 26:b=new AAP;break b;case 27:b=new AAU;break b;default:b=new AAT;break b;}b=new UF;}return b;}
var AJH=G();
var K6=G(LD);
function AFO(){var a=this;K6.call(a);a.qi=0;a.p6=0;a.iC=null;}
function ARL(a,b,c,d,e,f){var g=new AFO();AUv(g,a,b,c,d,e,f);return g;}
function AUv(a,b,c,d,e,f,g){ACO(a,c);a.Z=e;a.eo=f;a.p6=b;a.qi=g;a.iC=d;}
function AAn(a,b,c){a.iC.data[b+a.p6|0]=c;}
function Lv(){var a=this;B.call(a);a.Ek=null;a.sJ=null;a.Dj=0.0;a.wB=0.0;a.nU=null;a.np=null;a.ly=0;}
function Of(){var a=this;B.call(a);a.h8=0;a.kf=0;}
var A6Q=null;var A6P=null;function AEL(a,b){var c=new Of();AIT(c,a,b);return c;}
function AIT(a,b,c){a.h8=b;a.kf=c;}
function I3(a){return a.h8?0:1;}
function If(a){return a.h8!=1?0:1;}
function NL(a){return !RD(a)&&!Ml(a)?0:1;}
function RD(a){return a.h8!=2?0:1;}
function Ml(a){return a.h8!=3?0:1;}
function La(a){var b;if(NL(a))return a.kf;b=new Eg;Y(b);N(b);}
function Eu(b){return AEL(2,b);}
function Ud(a){var b,c;switch(a.h8){case 0:b=new Re;Y(b);N(b);case 1:b=new VB;Y(b);N(b);case 2:b=new Ua;c=a.kf;Y(b);b.D4=c;N(b);case 3:b=new Q9;c=a.kf;Y(b);b.Ft=c;N(b);default:}}
function AI6(){A6Q=AEL(0,0);A6P=AEL(1,0);}
var AEF=G();
var I7=G(0);
var WX=G();
function AOb(a,b){return b.arrayBuffer();}
var WW=G();
function ARd(a,b){var c,d;c=new Yh;d=new Yf;return $rt_globals.WebAssembly.instantiate(b,APv(Bv(c,"f"),Bv(d,"f")));}
var WU=G();
function ARG(a,b){AMG(b);}
var WT=G();
function AWd(a,b){AHA(b);}
var W=G(0);
function To(){B.call(this);this.xb=null;}
function A2C(a,b){H1(a.xb.E,b);}
function Tq(){B.call(this);this.Aq=null;}
function AYj(a,b){H1(a.Aq.G,b);}
var UF=G();
function ATq(a,b){return A5h(b);}
var UE=G();
function ALQ(a,b){return A4a(b);}
var UB=G();
function AWR(a,b){return A4l(b);}
var UA=G();
function AZt(a,b){var c,d,e,f,g;c=new ABi;El(c,b);d=(IF()).br.ej;c.ER=d;c.ld=AK9(d);c.i0=new Bg;c.h$=new Bg;c.dk=KU();c.dZ=KU();c.m_=FS(1);b=b.o.bT;d=new WC;d.mg=c;Ba(b,d);b=c.m_.data[DQ()*c.m_.data.length|0];d=Is(c.x.P,b,10);c.m0=d;Cm(c.x.P.ch,d);e=Eo(c.x.P.ch,C(153));d=c.x.P.ch;f=new K;M(f);BM(f,43);H(f,b);g=CY(e+Eo(d,L(f)));c.jD=g;c.iH=BV(c.iH,AD9(c,1,g,b,c.m0,c.x.P));c.iG=BV(c.iG,AD9(c,0,c.jD,b,c.m0,c.x.P));Rh(c,c.dk,c.iH);Rh(c,c.dZ,c.iG);Cp(c.dk.X,1.0,1.0,1.0,1.0);Fl(c.dk,c.ld);Cp(c.dZ.X,1.0,1.0,1.0,1.0);Fl(c.dZ,
c.ld);b=Bt();g=c.jD;d=new K;M(d);U(H(d,C(154)),g);Bk(b,L(d));return c;}
var UD=G();
function ANW(a,b){var c,d,e;c=new XA;Ga(c,b);d=new Wz;d.nO=new Bg;d.oh=new Bg;c.yG=d;c.ff=AJJ();c.dE=AJJ();c.oz=Dv(C(155),25.0);Ba(c.r.dU,c);d=b.o.bG;e=new ABL;e.uD=c;Ba(d,e);Ba(b.o.bT,c);b=b.o.cT;d=new ABF;d.vG=c;Ba(b,d);AEa(c.dE);BR(c.dS,CC(43));b=Fi();JJ(c.ff,b);JJ(c.dE,b);b=c.ff;b.kW=new ABG;d=c.dE;d.kW=new ABH;d.o6=new Qc;d.wG=new Qd;Nr(b,(RP(0)).kk);Nr(c.dE,(RP(0)).kk);return c;}
var UC=G();
function AUz(a,b){var c,d,e;c=new AAM;Ga(c,b);Ba(c.r.dU,c);BR(c.dS,CC(43));d=b.o.bG;e=new Uu;e.CB=c;Ba(d,e);b=b.o.cT;d=new Uv;d.Be=c;Ba(b,d);return c;}
var UI=G();
function ANB(a,b){var c,d,e;c=new W2;ACN(c,b);c.h2=BL();c.gi=BL();c.r6=S(C(156));c.kb=UY();c.h1=0;d=c.r.dU;e=new Pb;e.x0=c;Ba(d,e);Ba(b.o.bT,c);d=b.o.bG;e=new Pa;e.vS=c;Ba(d,e);b=Is(b.P,C(155),35);c.ki=b;c.mn=AIq(EA(b));BR(c.dS,S(C(157)));return c;}
var UH=G();
function AP5(a,b){var c,d,e,f;c=new SP;El(c,b);c.h4=AHz();c.e$=0;c.uO=500;c.r7=IG(0,0,0,255,new B2);c.mB=20;c.xk=20;c.Ad=IF();d=b.o.bT;e=new WN;e.lO=c;f=new TV;f.z8=e;e.rT=f;Ba(d,e);d=b.o.fv;e=new Z9;e.AI=c;Ba(d,e);c.eC=b.P;c.xI=Ry(b.bw);YM(c.h4,Is(c.eC,C(155),c.xk),c.mB,c.eC.l6);c.iZ=Jb();return c;}
var UK=G();
function A0O(a,b){var c,d;c=new Rf;HP(c,b);b=b.o.bG;d=new QO;d.s8=c;Ba(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var UJ=G();
function ALz(a,b){var c,d,e,f,g,h,i;c=new Xh;Ga(c,b);d=b.o.cT;e=new RG;e.x3=c;Ba(d,e);d=b.bw;f=new PT;f.DB=c;g=Q(B,1);g.data[0]=C(158);CU(d,f,C(159),g);h=new PS;h.EL=c;g=Q(B,1);g.data[0]=AJm([1,2,3,4,5]);CU(d,h,C(160),g);h=new PP;h.Ce=c;i=Q(B,1);i.data[0]=A3O([1,2,3,4,5]);CU(d,h,C(161),i);h=new PN;h.EU=c;g=Q(B,1);g.data[0]=DX([1,2,3,4,5]);CU(d,h,C(162),g);d=b.o.bG;e=new HS;h=new RF;h.Aa=c;It(e,b,h);Ba(d,e);return c;}
var AA1=G();
function ALK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new WE;HP(c,b);c.e7=Ia(0,0,300,300);c.gG=Ta(0,0,3,3);d=b.P;b=b.o.bT;e=new ABU;e.m7=c;Ba(b,e);b=ALe(d);c.AY=b;FT(c.e7,b);F0(c.e7);b=c.e7.bl;FM();BR(b,A7c);BR(c.e7.X,Dy(204,120,50));AQB();e=A7d;f=DM((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CV(d);switch(e.fS){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new E6;Y(b);N(b);}b:
{WQ(m,5,5,h);b=m.eL.d5;switch(e.fS){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new E6;Y(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.nF=m;X(c.gG.t,BQ(m),CO(c.nF));BR(c.gG.bl,c.pX);return c;}
var AA0=G();
function AYo(a,b){var c,d,e;c=new SN;HP(c,b);c.g2=Ia(0,0,300,300);c.my=new Bg;c.kz=new Bg;c.jU=new Bg;d=b.P;b=b.o.bT;e=new XI;e.ku=c;Ba(b,e);b=ALe(d);c.q5=b;FT(c.g2,b);F0(c.g2);b=c.g2.bl;FM();BR(b,A7c);BR(c.g2.X,Dy(204,120,50));return c;}
var AAZ=G();
function AQY(a,b){var c,d,e,f;c=new AAB;El(c,b);c.DQ=20;c.Fu=11;c.Ed=220;c.md=new Bg;c.E2=5000;c.im=1;c.gT=I(Ho,[CC(0),CC(255)]);c.eN=b.P;d=b.o.bT;e=new YC;e.l3=c;f=new UU;f.tv=e;e.qU=f;Ba(d,e);b=b.o.fv;d=new V2;d.rB=c;Ba(b,d);b=HJ(c.eN,200,220);c.oH=b;Hy(b,C(155),20.0);b=HJ(c.eN,200,20);c.gJ=b;Hy(b,C(155),20.0);c.iD=Jb();return c;}
var AAO=G();
function AOf(a,b){var c,d,e;c=new Ks;HP(c,b);Ba(b.o.bT,c);d=b.o.bG;e=new ADk;e.wF=c;Ba(d,e);Ba(b.o.gQ,new ADj);d=b.o.gQ;e=new ADi;e.sA=c;Ba(d,e);Ba(b.o.hi,new ADh);d=b.o.hi;e=new ADl;e.zS=c;Ba(d,e);b=!VI(b.bw)?C(163):C(164);d=new K;M(d);H(H(d,C(165)),b);$rt_globals.console.info($rt_ustr(L(d)));return c;}
var AAN=G();
function AUN(a,b){var c,d;c=new Sz;HP(c,b);c.ui=CC(20);c.go=Ia(0,0,300,300);c.vW=Dv(C(14),80.0);b=b.o.bG;d=new Sf;d.DX=c;Ba(b,d);return c;}
var AAL=G();
function A1O(a,b){var c;c=new Tn;OM(c,b);Hj(c.ck,0,0,300,300);X(c.dl,300,300);return c;}
var AAK=G();
function AQc(a,b){var c;c=new Tm;OM(c,b);c.f3=new Bg;c.gp=new Bg;X(c.ec,150,140);X(c.dl,500,100);X(c.fq,150,200);X(c.eM,500,250);return c;}
var AAJ=G();
function A0R(a,b){var c,d,e;c=new Wb;Ga(c,b);c.Cm=3;c.wh=Dv(C(166),20.0);c.j6=UY();c.ql=1;Ba(c.r.dU,c);BR(c.dS,CC(43));d=b.o.bG;e=new Pz;e.zf=c;Ba(d,e);b=b.o.cT;d=new PA;d.vQ=c;Ba(b,d);return c;}
var AAI=G();
function ALt(a,b){return A4K(b);}
var AAH=G();
function A0D(a,b){var c,d,e,f;c=new Qx;Kd(c,b);BR(c.dS,CC(43));c.me=K1(c.M);d=b.o.bG;e=new HS;f=new PB;f.Bq=c;It(e,b,f);Ba(d,e);b=b.o.cT;d=new PC;d.zc=c;Ba(b,d);return c;}
var AAS=G();
function AZV(a,b){var c,d;c=new RU;Kd(c,b);c.kc=JV();c.gw=JV();b=b.o.cT;d=new XB;d.ya=c;Ba(b,d);return c;}
var AAR=G();
function AM_(a,b){var c;c=new YU;Kd(c,b);c.v0=Mi();BR(c.dS,CC(43));return c;}
var AAQ=G();
function AXA(a,b){return A4n(b);}
var AAP=G();
function AO2(a,b){var c,d,e;c=new PK;Kd(c,b);c.vh=Mi();BR(c.dS,CC(43));d=b.o.cT;e=new Uz;e.Cy=c;Ba(d,e);b=b.o.bG;d=new Uy;d.tZ=c;Ba(b,d);return c;}
var AAU=G();
function AO3(a,b){var c,d;c=new TS;Ga(c,b);c.kd=Mi();Ba(c.r.dU,c);BR(c.dS,CC(43));b=b.o.cT;d=new AA3;d.qY=c;Ba(b,d);return c;}
var AAT=G();
function AVq(a,b){var c;c=new OW;AHS(c,b);AKz(c.dx);return c;}
function ADg(){var a=this;B.call(a);a.uA=null;a.AP=null;a.Ac=null;}
function Ig(){var a=this;B.call(a);a.bL=0;a.cN=0;a.dA=0;a.kC=0;}
function A7e(a,b,c,d){var e=new Ig();ABX(e,a,b,c,d);return e;}
function ABX(a,b,c,d,e){a.bL=d;a.cN=b;a.dA=c;a.kC=e;}
function Qo(){var a=this;Ig.call(a);a.ei=null;a.bm=0;a.jQ=0;a.zO=0;a.oP=0;}
var AG5=G();
function U3(b,c){return (b+(c/2|0)|0)/c|0;}
function YP(b,c,d){if(b<(2147483647/c|0))return U3(Bc(b,c),d);return 0.5+c*b/d|0;}
function H_(b,c){return ((b+c|0)-1|0)/c|0;}
function GG(b){return b+0.5|0;}
function CY(b){return b+0.5|0;}
function E7(b,c,d){return Bd(b,Be(c,d));}
function Nb(b,c){return AIn(b)/AIn(c);}
function OO(){var a=this;Ig.call(a);a.j=null;a.Ec=null;}
var Tw=G(0);
function Py(){var a=this;B.call(a);a.vX=null;a.vY=null;}
function AYp(a,b){var c,d;c=a.vX;d=a.vY;$rt_globals.console.info("paste plain string "+b);c.g(H4(b));DC(d);}
function AB$(){B.call(this);this.wc=null;}
function ACV(a,b){a.wc.clipboardData.setData("text/plain",$rt_ustr(b));}
function ADn(){var a=this;Nd.call(a);a.C8=0;a.w6=0;}
function CB(){var a=this;B.call(a);a.i=null;a.k=null;a.bS=0.0;}
function AUy(){var a=new CB();E4(a);return a;}
function E4(a){a.i=new Bg;a.k=new Bg;}
function ASf(a){}
function AZl(a){return BF(0,0);}
function JQ(a,b,c,d){var e;if(!JZ(a.i,b)){a.rI(b);Cn(a.i,b);}if(!JZ(a.k,c)){a.oY(c);Cn(a.k,c);}e=a.bS;if(e!==d){a.bS=d;a.lB(e,d);}}
function Dz(a,b){return Cg(b,a.bS);}
function BW(a,b){return Gk(b,a.i,a.k);}
function AK4(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;AO4();Bs(b,d,e,f,A7f);}
function ACv(a,b){var c;c=a.i;LV(b,c.a,c.b,a.k);}
function AV8(a,b){return 0;}
function AP7(a,b){}
function ATQ(a,b){}
function A0r(a,b,c){}
function ATZ(a){}
function AOX(a,b,c,d){return 0;}
function AMR(a,b,c){return null;}
function AQN(a,b,c){return 0;}
function ATE(a,b){return 0;}
function A0j(a,b,c,d){return 0;}
function AFl(){var a=this;CB.call(a);a.iF=null;a.lm=null;a.ln=null;a.lk=null;a.ll=null;a.et=null;a.gz=null;a.gA=null;a.il=null;}
function AV3(a){var b=new AFl();ANe(b,a);return b;}
function ANe(a,b){E4(a);a.lm=new Bg;a.ln=new Bg;a.lk=new Bg;a.ll=new Bg;a.iF=b;}
function Oj(a,b,c){a.gz=b;a.gA=c;}
function AGC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.i;Bs(b,c.a,c.b,a.k,a.il.br.ej);if(a.et===null)return;d=Cs(a.iF,2.0);e=GO(a.et,a.gz.lj(),1);f=GO(a.et,a.gz.kv(),1);g=GO(a.et,a.gA.lj(),0);h=GO(a.et,a.gA.kv(),0);i=Be(e,g);j=Bd(f,h);g=BK(i,j);if(g<=0)B$(b,1);k=a.gz.kX();l=a.gz.l0();m=a.gA.l0();n=a.gA.kX();o=a.iF.p4;while(i<=j){p=a.et.iq.data[i];if(p.oX){q=a.gz.hI(p.h7);r=a.gz.hI(p.h7+p.og|0);s=a.gA.hI(p.h6);t=a.gA.hI(p.h6+p.of|0);X(a.lm,a.i.a,q);X(a.lk,a.i.a,r);X(a.ln,a.i.a+a.k.a|0,s);X(a.ll,
a.i.a+a.k.a|0,t);u=Bd(Be(q,s),a.i.b);v=Be(Bd(r,t),a.i.b+a.k.b|0);if(v>u){X(o,a.k.a,v-u|0);c=a.il;w=J4(c.d8,c,p.oX);if(q==r)Rd(a,b,q,s,d,k.a,l.a,w,a.lm,a.lk);if(s==t)Rd(a,b,s,q,d,n.a,m.a,w,a.ln,a.ll);AEg(b,a.i.a,u,o,a.lm,a.ln,a.lk,a.ll,w);}}i=i+1|0;}if(g<=0)B$(b,0);}
function Rd(a,b,c,d,e,f,g,h,i,j){var k;k=a.iF.d1;X(k,g,e);if(d>=c)j.b=j.b+e|0;else{c=c-e|0;i.b=i.b-e|0;}Bs(b,f,c,k,h);}
function AFS(){var a=this;B.call(a);a.bQ=null;a.du=null;a.ix=null;}
function K1(a){var b=new AFS();AMj(b,a);return b;}
function AMj(a,b){a.bQ=b;}
function GL(a,b){var c;a.ix=b;c=a.du;if(c!==null)Fe(c,b.cS);c=a.bQ.eb;if(c!==null)Gi(c,b.cS,b.i1);}
function Zx(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=APd();i=c.q;j=0;while(j<i){if(f===null){k=(BG(c,j)).bq;l=Z5(FO(Cd(g.h,k)));m=AAE(g.gc);}else{n=f.data;k=n[j].py.nm;l=!BO(g.gc,n[j].l7)?C(21):Z5(FO(Cd(g.h,k)));m=AAE(n[j].l7);}if(J(l)>153){o=Cu(l,0,150);n=new K;M(n);H(H(n,o),C(167));l=L(n);}if(J(m)>153){n=Cu(m,0,150);o=new K;M(o);H(H(o,n),C(167));m=L(o);}n=Dm(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BG(c,j);}if(f!==null){q=new ADy;q.sE=d;q.sF=p;}else{q=new ADz;q.By=d;q.Bx
=o;}Wk(h,m,n,l,q);j=j+1|0;}r=ADa(h);if(a.du!==null)AA_(a);c=a.bQ.b$;g=new Rq;f=new AAz;f.qR=a;f.qS=d;AKY(g,c,f);Xc(g,r);d=a.ix;We(g,d.cS,d.BI);d=AEr(c);a.du=d;d.pQ=d.pQ|1;d=GH(g,c);f=a.ix.cS;Jh(d,f.m3,f.oQ);Le(a.du,d);Fe(a.du,a.ix.cS);d=a.du;f=new K;M(f);H(H(f,C(168)),e);DL(d,L(f));EI(a.bQ,a.du);d=a.du;i=(d.Q.k.b+Cs(d.bb,2.0)|0)+Cs(c,2.0)|0;s=(g.d7+g.eQ|0)+g.hH|0;t=Cs(g.bW,5.0);e=BF(E7(t,b.a,g.bW.bO.a-s|0),E7(i,b.b,g.bW.bO.b-g.cJ.b|0));Yw(g);K4(g);i=Ej(g);s=g.b6.data.length;i=Bc(i,s)+Bc(g.dR,s+1|0)|0;X(g.cJ,
g.k.a,i);i=(g.d7+g.eQ|0)+g.hH|0;b=g.bW;s=(b.bO.a-e.a|0)-Cs(b,5.0)|0;b=g.bW;t=(b.bO.b-e.b|0)-Cs(b,5.0)|0;d=BF(Be(i,s),Be(g.cJ.b,t));Et(a.du,e,d);FP(c,g);}
function AA_(a){Iu(a.bQ,a.du);J0(a.du);a.du=null;}
function Lk(a,b,c){var d,e;d=a.bQ;e=a.ix;Me(d,e.cS,e.i1,b,c);}
function GQ(a,b,c,d,e,f,g){Lk(a,b,Yb(UM(a,c,g,d,e,f),b,null));}
function UM(a,b,c,d,e,f){var g;g=new S7;g.gr=a;g.bu=b;g.rv=c;g.ja=e;g.op=f;g.mq=d;return g;}
function AE5(b){var c;c=new R0;c.zV=b;return c;}
var FW=G(0);
function AZm(a){}
function AOl(a){}
var Q7=G(0);
var Mt=G(0);
function AFr(){var a=this;CB.call(a);a.cK=null;a.bj=null;a.kS=null;a.B0=0;a.on=null;a.dd=null;a.nK=0;a.hG=0.0;a.mk=null;a.C7=null;a.f1=null;a.V=0;a.c$=0;a.d=null;a.fB=null;a.er=null;a.eW=null;a.A4=0;a.zK=0;a.c1=0;a.ci=0;a.co=0;a.ig=null;a.fW=null;a.fD=null;a.ju=0;a.j$=0;a.Fw=0;a.Cv=0;a.k4=0;a.lY=0;a.pV=0;a.eh=0;a.de=null;a.fy=null;a.e0=0;a.b3=0;a.Ck=null;a.j8=null;a.y_=null;a.uv=null;a.iu=null;a.bx=0;a.cM=null;a.sI=0;a.rx=null;a.va=null;}
function Ih(a){var b=new AFr();ASd(b,a);return b;}
function ASd(a,b){var c,d,e;E4(a);a.B0=0;a.on=Q(V,10);a.dd=AXv();a.hG=16.0;a.mk=C(155);a.d=A4D(Q(BJ,0),null,null);c=new ADJ;c.yu=CN(Q(Nx,0));c.BY=CN(Q(Nx,0));c.qK=CN(Q(AAX,0));c.vJ=CN(Q(YW,0));c.vj=CN(Q(Hh,0));c.AS=CN(Q(SC,0));a.fB=c;a.eW=Q(Fv,0);a.ig=BF(1,0);a.fW=Jb();a.fD=Jb();a.ju=0;a.j$=1;a.k4=1;a.lY=1;a.pV=1;a.eh=3;a.de=AHz();a.fy=C(169);a.e0=0;a.b3=0;c=En();BC(c);d=new Xs;d.Ds=c;a.j8=d;a.bx=0;c=new Xr;c.qz=a;a.rx=c;c=new Xq;c.ti=a;a.va=c;c=b.bQ.b$;a.cK=c;a.bj=c.bH;a.kS=b;b=APS(c.cz);a.cM=b;a.f1=b.g_;e
=a.on.data;b=new Xp;b.A8=a;e[1]=b;b=new Xw;b.xD=a;e[2]=b;b=new Xv;b.t5=a;e[3]=b;b=new Xu;b.ws=a;e[4]=b;b=new Xt;b.rj=a;e[5]=b;b=new Xo;b.zw=a;e[6]=b;K9(a.d,a,GD(a));}
function O8(a,b){var c,d,e;c=new V9;c.wY=a;d=new V8;d.yH=a;Ba(b.gQ,c);Ba(b.hi,d);e=new V$;e.DG=b;e.DH=c;e.DI=d;return e;}
function Mv(a,b,c,d){JQ(a,b,c,d);AAF(a,b,c,d);}
function ARp(a,b,c){Vm(a,a.mk,a.hG);P0(a.cM,c);}
function A2D(a,b,c){a.y_=b;a.uv=c;}
function AAF(a,b,c,d){var e;a.c1=Cg(80.0,d);a.ci=Cg(1.0,d);a.co=Cg(10.0,d);e=!a.b3?b.a:(b.a+c.a|0)-Ir(a)|0;X(a.cK.d1,e,b.b);Sm(a.de,a.cK.d1,Be(Ir(a),c.a),c.b,d);b=a.dd;e=Cg(2.0,d);b.eS.t.a=e;}
function AW7(a){a.nK=1;N6(a);}
function AVh(a){a.nK=0;}
function N6(a){YH(a.dd,MZ(GD(a)));}
function Fy(a,b){var c,d;a.er=b;c=a.dd;d=b.br.BX;BR(c.eS.X,d);c=a.fW;d=b.br;H8(c,d.lI,d.lN);c=a.fD;b=b.br;H8(c,b.lI,b.lN);}
function Jv(a){OC(a,a.cM.cX.oi,a.hG+1.0);}
function Ky(a){var b;b=a.hG;if(b<=7.0)return;OC(a,a.cM.cX.oi,b-1.0);}
function IA(a,b){OC(a,b,a.hG);}
function AR6(a,b){Kz(a.cK,b);}
function OC(a,b,c){if(a.cK.cf!==0.0){Vm(a,b,c);Jw(GD(a));}a.hG=c;a.mk=b;}
function LY(a){var b,c,d;b=a.cM;c=a.cK.cz;d=a.bj;b.iN=c;if(b.hK.jh!=c&&b.d$)AD5(b,d);S2(a.eW);ID(a.de);N$(a);}
function Vm(a,b,c){var d,e,f,g,h,i,j,k;d=a.bS;e=c*d;Cg(c,d);f=a.cM.cX;d=f===null?0.0:f.o0;if(!(e===d&&BO(b,a.mk))){ID(a.de);Ow(a.eW);g=a.d.h.B.data;h=g.length;i=0;while(i<h){E2(g[i]);i=i+1|0;}j=a.cM;f=a.bj;j.cX=AI9(b,e,300,600,j.g_,f);f=a.cM;a.C7=f.cX;a.V=Sq(f,1.25,a.bj);a.c$=CY(a.cM.cX.p5);a.dd.eS.t.b=EA(a.cM.cX);h=EA(a.cM.cX);i=a.V;k=Vv(a.dd);f=new K;M(f);b=H(H(f,C(170)),b);BM(b,32);U(H(U(H(U(H(EH(b,e),C(171)),h),C(172)),i),C(173)),k);$rt_globals.console.info($rt_ustr(L(f)));if(A7g){h=Nj(a.cM.cX,a.V);b=new K;M(b);U(H(b,
C(174)),h);$rt_globals.console.info($rt_ustr(L(b)));}a.d.ir=GX(F2(a),a.d.A,a.bj.ch,a.f1);H$(a);N$(a);}}
function AVF(a){Ow(a.eW);Yo(a.cM);ID(a.de);}
function ON(a){return Bc(CJ(a.d.h)+5|0,a.V);}
function K3(a){return Bd(ON(a)-a.k.b|0,0);}
function ABa(a){return Bd(a.ju-Gl(a)|0,0);}
function Gl(a){var b;b=!a.b3?0:a.c$+a.co|0;return Bd(1,(a.k.a-a.c1|0)-b|0);}
function Ir(a){return a.b3?a.c1:a.c1-a.co|0;}
function Ek(a){return a.k.b;}
function I2(a,b){var c,d,e;c=a.d.h;if(ABB(c)&&b-c.z4>0.03125?1:0){d=a.sI;e=a.d.h.cq;if(d!=e){a.sI=e;ZQ(a);}}if(a.V)AA5(a);d=ABM((a.bx+a.Fw|0)-a.Cv|0,K3(a));e=a.bx==d?0:1;if(e)F4(a,d);return !ABb(a.dd,b)&&!e&&!a.B0?0:1;}
function IL(a,b){var c,d;b=ABM(b,ABa(a));c=a.d;d=b==c.dT?0:1;if(d)c.dT=b;if(d){c=a.y_;if(c!==null)c.f();}}
function F4(a,b){var c;if(AJl(a,b)){c=a.uv;if(c!==null)c.f();}}
function AJl(a,b){var c,d;c=ABM(b,K3(a));d=c==a.bx?0:1;if(d){a.bx=c;a.d.mI=c/a.V;}return d;}
function AHc(a){return BF((Ir(a)+a.ci|0)+a.co|0,a.V);}
function ASX(a){return a.V;}
function AYR(a,b){Ip(a);}
function Ip(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=H_(a.k.b,a.V)+7|0;c=a.eW;if(c.data.length<b)a.eW=Zn(b,c,a.cM,a.A4,a.zK,a.d.h);B$(a.bj,0);NG(a.bj,a.i,a.k);d=(a.V-Vv(a.dd)|0)/2|0;b=a.d.ir-(S4(a.dd)/2|0)|0;e=a.d;f=b-e.dT|0;g=!a.b3?a.c1:(a.ci+a.co|0)+a.c$|0;Uc(a.dd,g+f|0,(d+Bc(e.w,a.V)|0)-a.bx|0);h=CJ(a.d.h);i=TQ(a);j=TP(a);a.A4=i;a.zK=j;k=!a.b3?a.i.a+a.c1|0:((a.i.a+a.ci|0)+a.co|0)+a.c$|0;l=Gl(a);c=a.d.lD;m=Dz(a,40.0);n=i;while(n<=j&&n<h){o=Cd(a.d.h,n);p=ACw(a,n);XC(p,o,a.bj,a.V,l,a.d.dT,n,
n%a.eW.data.length|0);a.ju=Bd(a.ju,FI(o)+m|0);g=a.V;q=Bc(g,n)-a.bx|0;r=c===null?null:c.data[n];s=a.i.b+q|0;t=a.bj;q=a.d.dT;u=a.er;e=AKb(Bi(a),n);if(e!==null){if(e.b==(-1))e.b=o.S;e.a=GX(o,e.a,a.bj.ch,a.f1);e.b=GX(o,e.b,a.bj.ch,a.f1);}v=a.d;Qi(p,s,k,t,l,g,q,u,e,v.iT,v.iE,v.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cK.d1;n=i;while(n<=j&&n<h&&a.k4){v=ACw(a,n);q=Bc(a.V,n)-a.bx|0;p=Bi(a);if(!Dx(p))w=0;else{o=Eq(p);p=F8(p);w=o.K<=n&&n<p.K?1:0;}o=a.er;p=o.br;t=p.sX;x=a.d.w==n&&c===null?1:0;a:{if(w)t=p.k2;else{if(c!==null)
{y=c.data;if(n<y.length&&y[n]!==null){t=J4(o.d8,o,y[n].hd);break a;}}if(x)t=p.gt;}}AIN(v,a.bj,k,a.i.b+q|0,a.V,e,a.d.dT,l,t);n=n+1|0;}if(a.j$){s=Be(j+1|0,h);AKq(a,Bc(a.V,s)-a.bx|0,l);}AGy(a);if(a.lY)AHP(a,i,j,h);if(a.nK&&f>=(( -S4(a.dd)|0)/2|0)){e=a.dd;v=a.k;if(AES(e.eS.u,0,0,v))ACa(a.dd,a.bj,a.i);}AGj(a);AFV(a);Gc(a.bj);AF8(a,i,j);}
function AHP(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.lD;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.er;h=J4(h.d8,h,g.hd);}else h=e!==null?a.er.br.ej:a.er.br.gt;if(!(a.d.w!=b&&g===null)){g=a.ig;i=a.b3;g.a=!i?(a.co-a.ci|0)-a.eh|0:((a.co+a.c$|0)+a.ci|0)-a.eh|0;j=a.V;g.b=j;i=i?0:(a.c1-a.co|0)+a.ci|0;j=Bc(j,b)-a.bx|0;k=a.bj;l=a.i;Bs(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AF8(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Be(d,Bc(CJ(a.d.h),a.V)-a.bx|0);f=a.de;g=a.bx;h=a.d;i=h.lD===null?h.w:(-1);j=a.bj;k=a.er;NG(j,f.gD,f.fw);S0(f,j,b,d);ABO(f,b,j);AA4(f,g,e,k,j);l=k.le;if(e<d){h=f.gD;Bs(j,h.a,h.b+e|0,BF(f.fw.a,d-e|0),l.k$);}if(b<=i&&i<=c){k=k.le;c=i/20|0;h=f.c5;l=BG(h,c%h.q|0);h=f.gD;d=Bc(f.c5.q,f.hn);c=l.ft.b;b=((l.qg.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CO(l.cR)|0)|0;c=i%l.eg|0;e=l.cu;b=b+Bc(c,e)|0;if(b<( -e|0))b=b+d|0;X(l.jc,l.ft.a,e);f=l.jY;c=i%l.eg|0;d=l.cu;Cp(f,0.0,
Bc(c,d),l.ft.a,d);Np(l,j,b,h,k.xJ,k.qC);}Gc(j);}
function TQ(a){return Be(a.bx/a.V|0,CJ(a.d.h)-1|0);}
function TP(a){return Be(((a.bx+Ek(a)|0)-1|0)/a.V|0,CJ(a.d.h)-1|0);}
function ARM(a,b){return (Bc(a.V,b)-a.bx|0)+a.i.b|0;}
function ARC(a){return a.i;}
function AUt(a){return a.k;}
function N$(a){YM(a.de,a.cM.cX,a.V,a.cK.cz);}
function ACw(a,b){var c;c=a.eW.data;return c[b%c.length|0];}
function Va(a,b){var c,d,e,f;c=E7(0,J(a.fy),Pr(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BU;Y(b);N(b);}if(c!=1){d=b.cc.data.length;if(d&&c){e=B5(Bc(d,c));d=0;f=0;while(f<c){QX(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Mz(e);}else b=A6b;}}return b;}
function P4(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BP(i);k=A5G(i).data;Jy(j,c);c=0;l=k.length;if(c>l){f=new BU;Y(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cq=o.cq+1|0;p=Q(Ha,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AS6(h[m],n[m],k[m],b[m],f.bq,f.bv);m=m+1|0;}BB(o.iJ,p);c=0;while(c<i){b=e.data;Nn(o,h[c],n[c],k[c],b[c]);g.qj(CX(h[c]),b[c]);c=c+1|0;}}
function ALf(a){var b;if(Dx(Bi(a)))GU(a);else{b=a.d;O7(b.h,b.w,b.A);}H$(a);Ey(a);return 1;}
function DI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.e0)return 0;if(Dx(Bi(a)))GU(a);c=Mj(ACi(b,C(175),C(21)),C(176),(-1));d=c.data;b=a.d;e=b.h;f=b.w;g=b.A;AD$(e,f,g,c);h=d.length;if(!h)b=A6b;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B5(i+Bc(h-1|0,J(C(176)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(176))){m=l+1|0;c[l]=P(C(176),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Mz(k);}F7(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CP(a,m,m!=f?J(d[h-1|0]):b.A+J(d[0])|0,0);F_(a);Ey(a);return 1;}
function GU(a){var b,c,d;b=Eq(Bi(a));c=a.d.h;d=Bi(a);Pe(c,d,UW(c,d));CP(a,b.K,b.ba,0);F_(a);Ey(a);}
function F_(a){var b,c;(Bi(a)).dt=0;b=(Bi(a)).bN;c=a.d;Cf(b,c.w,c.A);b=(Bi(a)).bB;c=a.d;Cf(b,c.w,c.A);}
function AKq(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cK.d1;e.b=d-b|0;d=a.b3;e.a=!d?c+a.eh|0:c+a.ci|0;d=!d?(a.i.a+a.c1|0)-a.eh|0:(((a.i.a+a.co|0)+a.c$|0)+a.ci|0)-a.eh|0;Bs(a.bj,d,a.i.b+b|0,e,a.er.br.ej);}}
function AGj(a){var b;b=a.b3?a.i.a+a.c$|0:a.i.a+a.k.a|0;Kr(a.fW,a.bx,a.i.b,Ek(a),ON(a),b,a.c$);b=!a.b3?a.i.a+a.c1|0:((a.i.a+a.ci|0)+a.co|0)+a.c$|0;Rz(a.fD,a.d.dT,b,Gl(a),a.ju,a.i.b+Ek(a)|0,a.c$);}
function AFV(a){var b,c;b=Zz(a.fW);c=Zz(a.fD);if(!(!b&&!c)){B$(a.bj,1);if(b)GW(a.fW,a.bj);if(c)GW(a.fD,a.bj);if(b)G2(a.fW,a.bj);if(c)G2(a.fD,a.bj);}}
function AGy(a){var b,c,d,e,f;b=a.ig;c=a.k;b.b=c.b;b.a=a.ci;d=!a.b3?a.c1-a.co|0:(c.a-Ir(a)|0)-a.ci|0;b=a.bj;c=a.i;Bs(b,c.a+d|0,c.b,a.ig,a.er.br.uG);b=a.ig;d=a.b3;b.a=!d?(a.co-a.ci|0)-a.eh|0:((a.co+a.c$|0)+a.ci|0)-a.eh|0;e=d?0:(a.c1-a.co|0)+a.ci|0;c=a.bj;f=a.i;Bs(c,f.a+e|0,f.b,b,a.er.br.ej);}
function ABM(b,c){return Be(Bd(0,b),c);}
function GD(a){return a.cK.e2;}
function GK(a,b,c){var d,e,f;d=Er(b);e=new K;M(e);H(H(e,C(177)),d);$rt_globals.console.info($rt_ustr(L(e)));CP(a,0,0,0);f=new Ze;f.w4=a;f.w3=b;f.w2=c;c=En();BC(c);d=new Zd;d.Au=c;U9(b,f,d);}
function JE(a,b,c,d,e){if(IR(a,e))return 1;if(c&&d)return 1;if(c)F4(a,a.bx+((Bc(b,a.V)*12|0)/10|0)|0);else if(!d){Iq(a,a.d.w+b|0,e);ABP(a);}return 1;}
function Sd(a,b,c,d){var e,f,g;if(IR(a,d))return 1;e=F2(a);if(!c)f=a.d.A+b|0;else if(b>=0)f=G9(e,a.d.A);else{b=a.d.A;if(!b)f=(-1);else{c=Km(e,b);if(c>0&&e.ev.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.ev.data[c-1|0];}}if(f>e.S){e=a.d;if((e.w+1|0)<CJ(e.h))CP(a,a.d.w+1|0,0,d);}else if(f>=0)DA(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(Cd(e.h,b-1|0)).S;CP(a,a.d.w-1|0,g,d);}}ACI(a);return 1;}
function IR(a,b){if(Dx(Bi(a))&&!b){F_(a);H$(a);return 1;}if(!(b&&Dx(Bi(a))))F_(a);return 0;}
function CP(a,b,c,d){a.d.A=c;return Iq(a,b,d);}
function Iq(a,b,c){var d;d=a.d;d.w=E7(0,b,CJ(d.h)-1|0);return DA(a,a.d.A,c);}
function DA(a,b,c){var d,e;a.d.A=E7(0,b,(F2(a)).S);a.d.ir=a.bS===0.0?0:GX(F2(a),a.d.A,a.bj.ch,a.f1);N6(a);H$(a);if(c)(Bi(a)).dt=1;d=Bi(a);e=a.d;N7(d,e.w,e.A);(Bi(a)).dt=0;return 1;}
function MB(a,b){var c;c=AWp(Bi(a));DA(a,b,0);JN(Bi(a),c);}
function H$(a){ABP(a);ACI(a);}
function ABP(a){var b,c,d,e,f;b=a.bx;c=b+Ek(a)|0;d=a.d.w;e=a.V;d=Bc(d,e);f=d+e|0;if(d<(b+e|0))F4(a,d-e|0);else if(f>(c-e|0))F4(a,(f-Ek(a)|0)+a.V|0);}
function ACI(a){var b,c,d,e,f;b=CY(a.cK.cf*30.0);c=a.d.dT;d=c+Gl(a)|0;e=a.d.ir;f=e+b|0;if(e<(c+b|0))IL(a,e-b|0);else if(f>(d-b|0))IL(a,(f-Gl(a)|0)+b|0);}
function IX(a,b){var c,d;CP(a,b.bq,b.bv,0);c=G9(F2(a),a.d.A);Cf((Bi(a)).bB,a.d.w,c);b=(Bi(a)).bN;d=a.d;Cf(b,d.w,d.A);}
function FB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=E7(0,((b.b-d.b|0)+a.bx|0)/a.V|0,CJ(a.d.h)-1|0);g=!a.b3?a.c1:(a.ci+a.co|0)+a.c$|0;h=Bd(0,(e-g|0)+a.d.dT|0);b=Cd(a.d.h,f);d=a.bj.ch;i=a.f1;if(!(b.eX!==null&&!b.g$))NC(b,d,i);j=b.eX;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.S;else{c=ABz(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.S;else{j=AAa(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=
j.data;if(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A7h){b=new K;M(b);U(H(U(H(U(H(b,C(178)),e),C(179)),h),C(180)),m);$rt_globals.console.info($rt_ustr(L(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DR(f,k);}
function VM(a,b){var c,d;c=a.d;d=b.bq;c.w=d;c.A=b.bv;c.ir=GX(Cd(c.h,d),a.d.A,a.bj.ch,a.f1);N6(a);}
function F2(a){var b;b=a.d;return Cd(b.h,b.w);}
function LT(a,b,c,d){var e,f;e=CY((a.V*4|0)*d/150.0);f=CY(c);if(e)F4(a,a.bx+e|0);if(f)IL(a,a.d.dT+f|0);return 1;}
function S8(a,b,c){(Bi(a)).dt=0;return 1;}
function Wx(a,b,c){var d;if(c)return null;d=F6(a.fW,b.j,a.rx,1);if(d!==null)return d;d=F6(a.fD,b.j,a.va,0);if(d!==null)return d;Jg(a);VM(a,FB(a,b.j));LA(a.d);if(!b.bL&&!(Bi(a)).dt){b=(Bi(a)).bN;d=a.d;Cf(b,d.w,d.A);}(Bi(a)).dt=1;b=Bi(a);d=a.d;N7(b,d.w,d.A);b=new ACL;b.zv=a;return b;}
function O_(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cN){b=b.j;e=FB(a,b);f=Ja(a.d.h,e.bq,e.bv);g=SR(a,f);h=Ox(a.fB,Ea(a.d),HE(a.d));if(h!==null){i=a.d;c=e.bq;d=e.bv;e=new Yn;e.Dg=a;e.Dd=b;e.De=g;h.tP(i,c,d,e,a.j8);}else{e=Cx(a.d.h.dP,f);if(e!==null){IX(a,e);c=1;}else{e=Cx(a.d.h.dF,f);if(e!==null&&!ED(e)){if(e.q!=1){Zx(a.kS,b,e,a,g);c=1;}else{IX(a,BG(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(FB(a,b.j)).bq;g=Cd(a.d.h,c);c=GM(g,a.d.A);d=G9(g,a.d.A);b=On(g,c);if((d-1|0)==g.S){Cf((Bi(a)).bN,
a.d.w,Pr(g));Cf((Bi(a)).bB,a.d.w,g.S);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.cc.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.A;if(c==j){c=GM(g,c-1|0);d=G9(g,c);}else{if(d!=j){QN(Bi(a),a.d.w);break b;}c=GM(g,d+1|0);d=G9(g,c);}}}Cf((Bi(a)).bN,a.d.w,c);(Bi(a)).dt=1;CP(a,a.d.w,d,0);(Bi(a)).dt=0;Jg(a);}}break a;case 3:break;default:break a;}QN(Bi(a),a.d.w);ZX(a.d.h3);Jg(a);}}return 1;}
function Xx(a,b){var c,d,e,f,g,h,i,j;c=a.cK.cW;if(Gb(a.fW,b.j,c))return 1;if(Gb(a.fD,b.j,c))return 1;d=a.de;if(Gk(b.j,d.gD,d.fw)&&GI(c)?1:0)return 1;e=b.j;f=!a.b3?a.c1:(a.co+a.ci|0)+a.c$|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=Gl(a);i=Ek(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GI(c);if(b.cN){e=FB(a,b.j);e.bv=GM(Cd(a.d.h,e.bq),e.bv);b=a.d.h;if(!Hx(b.dP,e)&&!Hx(b.dF,e)?0:1)return DY(c,C(181));}return DY(c,C(182));}
function A2f(a,b){var c,d,e,f,g;c=b.cN;if(c&&b.bm==65){c=CJ(a.d.h)-1|0;d=GA(a.d.h,c);Cf((Bi(a)).bN,0,0);Cf((Bi(a)).bB,CJ(a.d.h)-1|0,d);return 1;}if(c&&b.bm==80){Mq(a.d);return 1;}if(!a.e0&&c&&b.bm==90){if(Dx(Bi(a)))F_(a);b=a.d.h;b.cq=b.cq+1|0;e=b.iJ;d=e.q;if(!d)e=null;else{f=(EN(e,d-1|0)).data;e=WV(b,f[0]);c=1;while(c<f.length){WV(b,f[c]);c=c+1|0;}}if(e!==null){CP(a,e.a,e.b,0);Ey(a);}return 1;}if(!c&&!b.dA){if(Bj(b.ei,C(183))){DI(a,C(184));DA(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ei,C(185))){DI(a,C(186));DA(a,a.d.A
-1|0,0);c=1;}else if(Bj(b.ei,C(36))){DI(a,C(22));DA(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ei,C(187))){DI(a,C(188));DA(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ei,C(189))){DI(a,C(190));DA(a,a.d.A-1|0,0);c=1;}else if(!Bj(b.ei,C(191)))c=0;else{DI(a,C(192));DA(a,a.d.A-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dA&&!b.cN)){d=b.bm;if(d>=48&&d<=57){c=d-48|0;e=a.on.data[c];if(e!==null)e.f();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bm){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AJv(a,b))return 1;if(AGg(a,b))return 1;c=b.cN;if(c&&b.bm==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bm;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dA&&!b.kC)return J(b.ei)>0&&DI(a,b.ei)?1:0;return 0;}return 0;}
function AA5(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=TQ(a);d=TP(a);if(b.fe!=3&&b.gF==3){e=T2(b.pn);f=new WR;f.yL=c;f.yK=d;g=new Rs;g.sw=f;while(!g.mT&&AB6(e,g)){}if(!g.mT&&Bj(C(193),Ea(b))){c=Bd(0,c-100|0);d=Be(CJ(b.h)-1|0,d+100|0);BB(b.pn,BF(c,d));h=BP(3);i=h.data;i[0]=FH(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.B.data.length);k=0;while(k<d){j=j+GA(e,k)|0;if(k!=(e.B.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.As=E5();e=b.fc;l=new ACJ;l.sm=b;i=Q(B,3);m=i.data;m[0]=Fc(b.h);m[1]=h;b=b.h.dh;g=BL();ABj(b,b.df,
g);h=BP(3*g.q|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BG(g,o);d=k+1|0;n[k]=b.b0;q=d+1|0;n[d]=b.bY;k=q+1|0;n[q]=b.fR;o=o+1|0;}m[2]=h;CU(e,l,C(194),i);}}}
function VK(a){Mq(a.d);}
function ZQ(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.fQ){c=E3(b);d=new K;M(d);H(H(d,c),C(195));$rt_globals.console.info($rt_ustr(L(d)));}c=Ea(b);if(c!==null&&!Bj(C(182),c)){d=b.h.dh;e=QI(d,d.df);if(e===null){Op(b);KK(b.h);}else{f=DX([Do(e),De(e),e.bX.fR]);g=Fc(b.h);h=BP(1);h.data[0]=AIb(c);d=b.h.e6;if(d.fE===null){i=BP(0);j=B5(0);}else{c=AUc(AWj(e.cm,d.fd),e);W$(c);i=c.oK;j=c.mW;}k=b.h.cq;c=b.fc;d=new OX;d.Ay=b;l=Q(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BP(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CU(c,d,C(196),l);}}
else KK(b.h);}
function He(a,b,c){var d,e,f,g,h,i;if(c&&a.e0)return 0;d=Eq(Bi(a));e=d.K;if(Dx(Bi(a))){f=a.d.h;g=Bi(a);h=UW(f,g);if(c)Pe(f,g,h);if(c){CP(a,d.K,d.ba,0);F_(a);Ey(a);}}else{h=Fx(FO(a.d.h.B.data[e]),C(176));i=Be(CJ(a.d.h)-1|0,e);Cf((Bi(a)).bB,i,0);if(e>=(CJ(a.d.h)-1|0))Cf((Bi(a)).bB,i,GA(a.d.h,i));else Cf((Bi(a)).bN,i+1|0,0);if(c)GU(a);else CP(a,e,0,0);}b.g(h);return 1;}
function AGg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.e0)return 0;a:{switch(b.bm){case 8:if(Dx(Bi(a))){GU(a);c=1;}else{b=a.d;d=b.A;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;O7(b.h,e,c);}else{e=b.w-1|0;c=GA(b.h,e);b=a.d.h;LG(b,e);F7(b,e,GA(b,e),1,C(176));}Ey(a);c=CP(a,e,c,0);}}break a;case 9:if(!b.bL){if(!Dx(Bi(a)))DI(a,a.fy);else{f=Eq(Bi(a));g=F8(Bi(a));c=g.K;d=f.K;e=(c-d|0)+1|0;h=BP(e);i=h.data;j=Q(BJ,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fy;d=d+1|0;e=l;}b=new ACQ;m=a.d;AJQ(b,m.w,m.A);m=new AAl;m.zp
=a;P4(a,h,0,0,j,b,m);f.ba=f.ba+J(a.fy)|0;g.ba=g.ba+J(a.fy)|0;MB(a,a.d.A+J(a.fy)|0);Ey(a);}c=1;}else b:{if(!Dx(Bi(a))){b=a.d;f=Cd(b.h,b.w);if(f.s.data.length>0){g=Va(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.w;b=DR(e,m.A);n.cq=n.cq+1|0;o=n.iJ;h=Q(Ha,1);h.data[0]=AS6(e,0,1,g,b.bq,b.bv);BB(o,h);Nn(n,e,0,1,g);HM(f,0,J(g));MB(a,a.d.A-J(g)|0);}}else{b=Eq(Bi(a));f=F8(Bi(a));c=f.K;p=b.K;c=(c-p|0)+1|0;h=BP(c);k=h.data;j=Q(BJ,c);q=j.data;g=a.d;e=g.A;l=g.w;c=0;while(p<=f.K){g=Cd(a.d.h,p);if(g.s.data.length>0){g=Va(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Jj(h,c);j=C8(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.K)b.ba=Bd(0,b.ba-J(g)|0);if(p==f.K){f.ba=Bd(0,f.ba-J(g)|0);MB(a,a.d.A-J(g)|0);}d=d+1|0;}b=DR(l,e);f=new RC;f.ss=a;P4(a,h,0,1,j,b,f);}Ey(a);c=1;}break a;case 13:if(Dx(Bi(a)))GU(a);b=a.d;E2(Cd(b.h,b.w));b=a.d;AKL(b.h,b.w,b.A);Ey(a);c=CP(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ALf(a);}return c;}
function AJv(a,b){var c,d,e,f;a:{switch(b.bm){case 33:c=b.cN?Iq(a,H_(a.bx,a.V),b.bL):JE(a,2-U3(Ek(a),a.V)|0,0,b.dA,b.bL);break a;case 34:c=!b.cN?JE(a,U3(Ek(a),a.V)-2|0,0,b.dA,b.bL):Iq(a,((a.bx+Ek(a)|0)/a.V|0)-1|0,b.bL);break a;case 35:if(!IR(a,b.bL)&&!DA(a,(F2(a)).S,b.bL)){c=0;break a;}c=1;break a;case 36:if(!IR(a,b.bL)&&!DA(a,0,b.bL)){c=0;break a;}c=1;break a;case 37:c=b.cN;if(c&&b.dA){Jg(a);d=a.d.h3;e=d.dL;if(e<=0)d=null;else{f=d.fr.data;c=e-1|0;d.dL=c;d=f[c];}if(d===null)c=1;else{CP(a,L8(d),KX(d),0);JN(Bi(a),
d.oG);c=1;}break a;}c=Sd(a,(-1),c,b.bL);break a;case 38:c=JE(a,(-1),b.cN,b.dA,b.bL);break a;case 39:c=b.cN;if(c&&b.dA){d=a.d.h3;e=d.dL;if(e==(d.fo-1|0))d=null;else{f=d.fr.data;c=e+1|0;d.dL=c;d=f[c];}if(d===null)c=1;else{CP(a,L8(d),KX(d),0);JN(Bi(a),d.oG);c=1;}break a;}c=Sd(a,1,c,b.bL);break a;case 40:c=JE(a,1,b.cN,b.dA,b.bL);break a;default:}c=0;}if(c&&b.bL){b=(Bi(a)).bB;d=a.d;Cf(b,d.w,d.A);}if(c)LA(a.d);return c;}
function Jg(a){var b,c,d,e,f,g,h;b=a.d;c=b.h3;d=c.dL;c=d<0?null:c.fr.data[d];if(c!==null&&b.w==L8(c)&&a.d.A==KX(c))return;c=a.d;e=c.h3;b=new NU;d=c.w;f=c.A;c=Bi(a);b.pw=DR(d,f);g=AWp(c);b.oG=g;g.dt=0;f=e.dL;h=e.fo;if(f==(h-1|0))ACx(e,b);else{d=f+1|0;while(d<h){ZX(e);d=d+1|0;}ACx(e,b);}e.dL=e.dL+1|0;}
function Ey(a){a.d.h.z4=MZ(GD(a));}
function H1(a,b){var c,d,e,f;a.Ck=null;LO(a.de,null);AD7(a.d);c=a.d;a.d=b;K9(c,null,null);K9(b,a,GD(a));d=(B3(a.fB.vj)).data;e=d.length;f=0;while(f<e){d[f].qj(c,b);f=f+1|0;}a.bx=GG(b.mI*a.V);}
function SR(a,b){var c;c=L3(a.d.h,b);if(c===null)return C(21);return c.v;}
function HC(a,b){var c,d,e,f,g;a.d.lD=b;if(b===null){Bk(Bt(),C(197));LO(a.de,null);}else{b=b.data;c=DM(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.hd<<24>>24;e=e+1|0;}LO(a.de,c);}}
function IZ(a,b){a.d.qB=b;}
function Bi(a){return a.d.rC;}
function L1(a){var b;b=a.iu;if(b!==null)b.g(a);}
function AIc(){var a=this;B.call(a);a.lJ=null;a.n6=null;a.g0=null;}
function AHq(a,b){var c=new AIc();AWx(c,a,b);return c;}
function AWx(a,b,c){var d,e;a.lJ=b;a.n6=c;d=null;e=new UR;e.sy=a;b.po(d,e);b=null;d=new US;d.rH=a;c.po(b,d);}
function YI(a,b,c){var d,e,f,g,h,i,j;d=a.g0;if(d!==null&&d.iq!==null){e=b!==a.lJ?0:1;f=b.lj();g=(b.kv()+f|0)/2|0;h=g-f|0;d=a.g0;d=d.iq.data[GO(d,g,e)];i=g-(!e?d.h6:d.h7)|0;j= -(b.hI(f)-(b.kX()).b|0)|0;c.qe(Bc(((!e?d.h7:d.h6)+i|0)-h|0,c.pv())+j|0);return;}}
function TY(){B.call(this);this.Br=null;}
function AMf(a,b){Wg(a.Br,b);}
function TZ(){B.call(this);this.y1=null;}
function A1i(a,b){Wg(a.y1,b);}
function T0(){B.call(this);this.w_=null;}
function APO(a,b){return AHi(a.w_,b);}
function HS(){var a=this;B.call(a);a.oL=null;a.sC=null;a.r2=null;}
function A7i(a,b){var c=new HS();It(c,a,b);return c;}
function It(a,b,c){var d;d=null;a.oL=b.bw;a.sC=d;a.r2=c;}
function AOo(a,b){var c,d;if(b.cN&&b.bm==79){c=a.sC;if(c!==null&&b.bL)Jc(a.oL,c);else Kh(a.oL,a.r2);d=1;}else d=0;return d;}
function TW(){B.call(this);this.u6=null;}
function AQA(a,b){var c,d,e;c=a.u6;d=DO(c.r,c.E)?c.E:!DO(c.r,c.G)?null:c.G;if(d!==null){e=new RL;e.x6=c;e.x4=d;e.x5=b;GK(d,b,e);c.k_=null;c.mz.g0=null;c.fI.et=null;}}
function TX(){B.call(this);this.s0=null;}
function A1P(a,b){b=b;return AJw(a.s0,b);}
var C2=G(0);
function ADA(){var a=this;B.call(a);a.b$=null;a.b7=null;a.eb=null;}
function Me(a,b,c,d,e){var f,g;f=Nu(a.b$);Gi(f,b,c);b=a.b$;c=b.ee;g=new ACZ;g.w0=b;g.wZ=c;f.j2=g;Sg(f,d,e);Gn(a,f);}
function Gn(a,b){var c;c=a.eb;if(c!==b)a.eb=BV(c,b);}
function OB(a,b){var c;c=new ACM;c.q6=a;c.q8=b;return c;}
function Yq(a,b){var c;c=new ADL;c.yh=a;c.yi=b;return c;}
function DS(a){var b;b=a.eb;if(b!==null){Mr(b);Gn(a,null);}}
function EI(a,b){var c,d,e,f;c=a.b7;d=c.db;e=c.dm;if(d==e.data.length)c.dm=C8(e,d+4|0);d=c.db;f=d;while(0<f){e=c.dm.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.dm.data[0]=b;c.db=d+1|0;c.gd=null;return b;}
function Iu(a,b){Sh(a.b7,b);}
function JR(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B3(a.b7)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.b$.bH;d.W.dw(e);f=d.Q;g=d.ge.jb;if(!RW(f)){if(!Oi(f)&&!(!f.eJ&&f.d0!==null)){f.eJ=0;ACq(f);h=f.ez;i=(h.eq+h.eI+5.0)/10.0;j=Cs(f.f_,f.kO);h=e.ch;k=f.ez;l=f.jI;m=i*2.0;Cm(h,k);n=j+Lt(h,l,m)|0;f.ik=n;n=E7(0,n,f.k.a);if(n){h=D5(e,n,f.k.b,f.f_.cz);Cm(h,f.ez);k=f.jI;m=j;i=m+i;l=f.ez;o=l.eq;B0(h,k,i,m+o-(o+l.eI)/16.0);k=f.d0;if(k===null){k=CV(e);f.d0=k;}CM(k,h);Ez(h);Cp(f.mK,0.0,0.0,BQ(f.d0),CO(f.d0));}}h=g.l9;k
=f.d0;if(k===null)QJ(f,e,0,f.k.a,h);else{j=BQ(k);g=g.ob;k=f.i;n=k.a;p=k.b;k=f.d0;DJ(e,n,p,k.eT,f.mK,k,g,h,f.f_.cz);n=f.k.a;if(j<n)QJ(f,e,j,n-j|0,h);}}l=d.di;if(l!==null){q=d.bb;h=d.Q;k=d.ge.jb;if(l.i7!==null){if(l.dg===null)AGq(l,q);n=Cs(q,2.0);j=Bd(0,((h.k.b-CO(l.dg)|0)/2|0)-n|0);l.gf.a=(((h.i.a+h.k.a|0)-j|0)-BQ(l.dg)|0)-n|0;f=l.gf;r=h.i.b+j|0;p=n/2|0;f.b=r-p|0;f=l.kI;j=BQ(l.dg);r=n*2|0;X(f,j+r|0,CO(l.dg)+r|0);f=q.bH;g=l.gf;Bs(f,g.a,g.b,l.kI,!l.lS?k.l9:k.jH);Cp(q.mt,0.0,0.0,BQ(l.dg),CO(l.dg));f=q.bH;g=l.gf;n
=g.a+n|0;p=g.b+p|0;g=l.dg;DJ(f,n,p,g.eT,q.mt,g,k.ob,!l.lS?k.l9:k.jH,0);}}B$(e,1);j=Cs(d.bb,2.0);n=RW(d.Q);f=d.bb;g=f.d1;f=f.p4;p=n?0:d.Q.k.b;h=d.W.k;X(f,h.a,h.b+p|0);AI0(e,f,!n?d.Q.i:d.W.i,d.ge.jb.jH, -j|0,g);f=d.W;AKa(e,f.k,f.i,j,p,Yk(d.ge.lA,d.bb.cf),d.ge.lA.n1,g);c=c+(-1)|0;}f=a.eb;if(f!==null)AEs(f);}
function H6(a,b){var c,d,e,f;c=a.b$;if(c.cz==b)d=0;else{c.cz=b;Jw(c.e2);d=1;}if(d){c=a.eb;if(c!==null){c=B7(c.cg);while(B_(c)){Od(Ca(c));}}e=(B3(a.b7)).data;b=e.length;f=0;while(f<b){c=e[f];c.Q.eJ=1;c.W.ke();f=f+1|0;}}return d;}
function AUY(a,b){var c,d,e,f,g,h,i,j,k;c=a.eb;if(c!==null){d=0;e=c.cg.q-1|0;a:{while(e>=0){d=NW(BG(c.cg,e),b.j,c.cQ.cW);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B3(a.b7)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.j;if(BW(h.Q,c)){i=h.di;if(i!==null)i.lS=Ti(i,c);e=DY(h.bb.cW,null);}else{i=h.di;if(i!==null)i.lS=0;e=Cs(h.bb,7.0);j=Cs(h.bb,25.0);if(M8(h,c.a,e)){k=Xn(h,c.a,j);if(Nf(h,c.b,e)){e=DY(h.bb.cW,L9(k,C(198)));break b;}if(KP(h,c.b,e)){e=DY(h.bb.cW,L9( -k|0,C(198)));break b;}}if(Ok(h,c.b,e)){j=ADr(h,
c.b,j);if(OG(h,c.a,e)){e=DY(h.bb.cW,L9(j,C(199)));break b;}if(MM(h,c.a,e)){e=DY(h.bb.cW,L9( -j|0,C(199)));break b;}}e=0;}}c:{d:{if(!e){if(!BW(h.W,b.j))break d;if(!h.W.bU(b)&&!DY(h.bb.cW,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function AMZ(a,b,c,d){var e,f,g,h,i,j;e=a.eb;if(e!==null){f=0;g=e.cg.q-1|0;a:{while(g>=0){f=Og(BG(e.cg,g),b.j,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B3(a.b7)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!BW(i.Q,b.j)&&!PQ(i,b.j)){if(!Mh(i,b))break c;if(!i.W.cy(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function AOZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.eb;if(d!==null){e=null;f=d.cg.q-1|0;a:{while(f>=0){e=BG(d.cg,f);g=b.j;h=Fd(e.cp,g);if(!h&&!Lf(e.cp)){e=e.kW;if(e!==null)e.f();}e=!h?null:A7j;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B3(a.b7);j=0;while(true){k=i.data;if(j>=k.length)break;b:{g=k[j];l=b.j;if(!c){c:{m=Cs(g.bb,7.0);n=Cs(g.bb,25.0);if(M8(g,l.a,m)){f=Xn(g,l.a,n);if(Nf(g,l.b,m)){d=J9(g,l,f,(-1));break c;}if(KP(g,l.b,m)){d=J9(g,l,f,1);break c;}}if(Ok(g,l.b,m)){h=ADr(g,l.b,n);if(OG(g,l.a,
m)){d=J9(g,l,(-1),h);break c;}if(MM(g,l.a,m)){d=J9(g,l,1,h);break c;}}d=null;}if(d!==null)break b;if(BW(g.Q,l)){e=g.di;if(e!==null&&Ti(e,l)){g.di.i7.f();d=A7j;break b;}e=g.W.i;f=e.a;h=l.a;f=f-h|0;m=e.b;n=l.b;m=m-n|0;e=g.Q.i;h=e.a-h|0;n=e.b-n|0;e=new Bg;d=new Ym;d.qq=g;d.qs=h;d.qr=n;d.qo=e;d.qn=f;d.qp=m;break b;}}d=!Mh(g,b)?null:g.W.cn(b,c);}if(d!==null){if(!c&&g!==ADw(a)){b=a.b7;f=0;k=b.dm;i=k.data;c=i.length;d:{while(true){if(f>=c){f=(-1);break d;}if(g===i[f])break;f=f+1|0;}}if(f>=0){h=b.db;if(h<=f){b=new Ol;Bm(b,
J6(f));N(b);}if(f){e=i[f];while(f>0){i[f]=i[f-1|0];f=f+(-1)|0;}i[0]=e;i=b.gd;if(i!==null)C6(k,0,i,0,h);}}}return d;}j=j+1|0;}return null;}
function A1_(a,b,c){var d,e,f,g,h;d=a.eb;if(d!==null&&Ju(d))return 1;e=(B3(a.b7)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!BW(d.Q,b.j)){if(!Mh(d,b))break b;if(!d.W.dB(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function AX_(a,b,c){var d,e,f,g,h;d=(B3(a.b7)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.W;h.dz(h.i,h.k,c);h=g.Q;if(h.hE!==null){h.ez=null;h.ik=0;h.eJ=1;}Iv(g);h=g.di;if(h!==null)NX(h);f=f+1|0;}}
function ADw(a){var b;b=a.b7;return b.db<=0?null:MO(b,0);}
function TC(){var a=this;B.call(a);a.bH=null;a.e2=null;a.cW=null;a.bO=null;a.cf=0.0;a.cz=0;a.ee=null;a.dU=null;a.d1=null;a.p4=null;a.mt=null;a.Cg=null;}
function KS(a){var b;b=a.ee;if(b!==null)b.uB();}
function K7(a){var b;b=a.ee;if(b!==null)b.wq();}
function M1(a,b){var c;c=a.e2.eu!==(Ev()).activeElement?0:1;if(c)K7(a);a.ee=b;if(c)KS(a);}
function FP(a,b){K7(a);a.ee=b;KS(a);}
function ABx(a,b){if(a.ee===b)a.ee=null;}
function DO(a,b){return b!==a.ee?0:1;}
function Kn(a){return a.bH.ch;}
function Fm(a,b){return Gy(a.bH,b.h_,b.g1*a.cf,b.j7,0);}
function Cs(a,b){return Cg(b,a.cf);}
function Kz(a,b){var c;c=a.bH;if(!a.cz)c.pS=b;else c.oj=b;Jw(a.e2);}
function Wo(){B.call(this);this.v6=null;}
function A15(a,b,c,d){var e,f,g,h;e=(B3(a.v6.b7)).data;f=e.length;g=0;a:{while(g<f){if(e[g].W.dy(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function Wn(){B.call(this);this.tt=null;}
function AM0(a,b){var c,d,e,f;b=b;c=a.tt;b=b.j;d=0;e=c.b7.db;a:{while(d<e){f=MO(c.b7,d);if(!BW(f.Q,b)&&!PQ(f,b)&&!ACp(f,b)?0:1){c=MO(c.b7,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.wP;if(c!==null&&AGm(c.uW,b)?1:0){d=1;break b;}}d=0;}return d;}
function AFd(){var a=this;B.call(a);a.eS=null;a.oZ=0.0;a.iB=0.0;a.hj=0;}
function AXv(){var a=new AFd();ARK(a);return a;}
function ARK(a){var b;b=Ta(0,0,2,20);a.eS=b;a.oZ=0.5;a.iB=0.0;IG(187,187,187,255,b.X);}
function Vv(a){return a.eS.t.b;}
function S4(a){return a.eS.t.a;}
function ABb(a,b){var c,d;a:{c=a.hj;if(b>a.iB)while(true){d=a.iB+a.oZ;a.iB=d;a.hj=a.hj?0:1;if(b>d)continue;else break a;}}return a.hj==c?0:1;}
function Uc(a,b,c){X(a.eS.u,b,c);}
function YH(a,b){a.iB=b+a.oZ*1.25;a.hj=1;}
function ACa(a,b,c){if(a.hj)ZS(a.eS,b,c.a,c.b);}
function ADU(){var a=this;B.call(a);a.gc=null;a.h=null;a.pR=null;a.rC=null;a.h3=null;a.jt=null;a.fc=null;a.lD=null;a.w=0;a.A=0;a.ir=0;a.iT=null;a.iE=null;a.pn=null;a.fe=0;a.gF=0;a.gY=0;a.i2=FL;a.As=FL;a.A$=FL;a.qB=0;a.EK=0;a.dT=0;a.mI=0.0;a.fQ=0;}
function A4x(a,b,c){var d=new ADU();AK3(d,a,b,c);return d;}
function AN4(a,b){var c=new ADU();ARb(c,a,b);return c;}
function A4D(a,b,c){var d=new ADU();VG(d,a,b,c);return d;}
function AK3(a,b,c,d){VG(a,(AIC(b)).kj,c,d);}
function ARb(a,b,c){VG(a,b,null,c);}
function VG(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.rC=AMu();f=new TA;f.fr=Q(NU,16);f.fo=0;f.dL=(-1);a.h3=f;a.iT=null;a.iE=BL();a.pn=BL();a.fe=1;a.gF=1;a.gY=1;a.dT=0;a.mI=0.0;a.fQ=0;a.gc=d;a.pR=c;c=new ZT;g=e.length;b=Q(DH,Bd(1,g));if(!g)b.data[0]=XR(C(21));h=b.data;i=0;while(i<g){h[i]=XR(e[i]);i=i+1|0;}d=new Yu;f=new NR;QQ(f);d.fd=f;c.e6=d;c.dP=JV();c.dF=JV();c.iJ=BL();if(!h.length){c=new BU;Y(c);N(c);}c.B=b;j=ACn(c);c.dh=AGS(ATv(KY(0,j,0),null,null));a.h=c;}
function Ea(a){var b;b=a.pR;if(b===null){b=a.gc;b=b===null?C(182):AHU(b.gR);}return b;}
function HE(a){var b;b=a.gc;return b===null?null:b.kt;}
function Ms(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gF=3;a.gY=3;a.fe=3;c=CQ(b[0]);d=EQ(b[1]);CQ(b[2]);if(b.length<5)Oa(a.h,c,d);else{e=CQ(b[3]);f=e.data;g=EQ(b[4]);Xy(a.h,c,d,e,g,0);TL(a,Jj(e,f.length),Oq(g));}if(a.fQ){h=E3(a);i=JP(E5(),a.i2);j=new K;M(j);H(HL(H(H(j,h),C(200)),i),C(201));$rt_globals.console.info($rt_ustr(L(j)));}h=a.jt;if(h!==null)L1(h);}
function LA(a){var b;SD(a,DR(a.w,a.A),Ja(a.h,a.w,a.A));if(!(a.iT!==null&&!ED(a.iE))){b=a.A;if(b>0)SD(a,DR(a.w,b-1|0),Ja(a.h,a.w,a.A-1|0));}}
function SD(a,b,c){var d,e,f,g,h,i,j,k;AD7(a);d=Cx(a.h.dP,c);if(d!==null)c=d;a:{e=Cx(a.h.dF,c);if(e!==null){a.iT=L3(a.h,c);c=B7(e);while(true){if(!B_(c))break a;f=Ca(c);BB(a.iE,L3(a.h,f));}}}c=a.jt;if(c!==null){g=b.bq;h=b.bv;b=c.fB;f=Ea(c.d);e=HE(c.d);i=(B3(b.vJ)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Bn(f,e)){b=b.D1;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new P5;e.Eq=c;e.Es=f;e.Er=g;e.Ep=h;b.tP(f,g,h,e,c.j8);}}}
function AD7(a){a.iT=null;Iy(a.iE);}
function TL(a,b,c){var d,e,f,g,h;if(a.fc!==null){a.A$=E5();d=a.h.cq;e=a.fc;f=new Yl;f.ze=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BP(1);b.data[0]=d;h[2]=b;CU(e,f,C(202),g);}}
function K9(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.jt=b;a.fc=c;if(c===null){d=a.h.B.data;e=d.length;f=0;while(f<e){Tl(d[f]);f=f+1|0;}}else if(a.fe==1){a.i2=E5();b=Ea(a);if(BO(b,C(182))){a.gF=3;a.gY=3;a.fe=3;b=a.jt;if(b!==null)L1(b);}else{e=BO(b,C(193));f=BO(b,C(203));d=Fc(a.h);g=d.data.length;h=!e?5120:10240;i=AIb(b);if(f)JS(a,d,i);else if(g<=h)JS(a,d,i);else if(!e){Vu(a,Oq(d),i);JS(a,d,i);}else{Vu(a,Oq(d),i);j=Oq(d);k=a.fc;c=new Q8;c.zg=a;l=Q(B,2);m=l.data;m[0]=j;j=BP(1);j.data[0]=i;m[1]=j;CU(k,c,C(204),l);a.gF=
2;JS(a,d,i);}}}}
function Vu(a,b,c){var d,e;d=a.fc;e=new U7;e.zB=a;CU(d,e,C(205),I(B,[b,DX([c,250])]));a.gY=2;}
function JS(a,b,c){var d,e,f,g;d=a.fc;e=new W_;e.xY=a;f=Q(B,2);g=f.data;g[0]=b;b=BP(1);b.data[0]=c;g[1]=b;CU(d,e,C(206),f);a.fe=2;}
function E3(a){var b;b=a.gc;return b===null?C(21):ACt(b);}
function Mq(a){var b,c,d,e,f;if(a.fQ){b=E3(a);c=new K;M(c);H(H(c,b),C(207));$rt_globals.console.info($rt_ustr(L(c)));}b=Ea(a);if(b===null)d=null;else{a:{e=(-1);switch(J2(b)){case -1655966961:if(!Bj(b,C(203)))break a;e=3;break a;case 3401:if(!Bj(b,C(208)))break a;e=2;break a;case 98723:if(!Bj(b,C(209)))break a;e=1;break a;case 3254818:if(!Bj(b,C(193)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(210);break b;case 2:d=C(211);break b;case 3:d=C(212);break b;default:d=null;break b;}d=C(213);}}if
(d===null)L1(a.jt);else{a.i2=E5();b=a.fc;c=new ABq;c.vk=a;f=Q(B,1);f.data[0]=Fc(a.h);CU(b,c,d,f);}}
function Op(a){var b;b=AUc(a.h.e6,null);W$(b);TL(a,b.oK,b.mW);}
function ADJ(){var a=this;B.call(a);a.yu=null;a.BY=null;a.qK=null;a.vJ=null;a.vj=null;a.AS=null;}
function Ox(a,b,c){return RI(a,B3(a.yu),b,c);}
function Zk(a,b,c){return RI(a,B3(a.BY),b,c);}
function RI(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Bn(c,d))return g.EV;f=f+1|0;}return null;}
function ABT(a,b,c){var d,e,f,g;d=(B3(a.qK)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Bn(b,c))return g.EQ;f=f+1|0;}return null;}
function Fv(){var a=this;B.call(a);a.cb=0;a.da=null;a.cE=null;a.eD=null;a.dK=0;}
var A7k=0;var A7g=0;function XC(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cE;j=i===b&&!i.jg?0:1;if(j){a.cE=b;NC(b,c.ch,a.da.g_);}k=H_(Be(FI(b),e+2048|0),1024);l=a.eD;m=l.data.length;n=k<=m?0:1;if(n){a.eD=C8(l,k);while(m<k){a.eD.data[m]=CV(c);m=m+1|0;}}o=a.da.hK;if(!(!j&&!n)){if(A7k){l=b.gn;$rt_globals.console.info("fMeasure"+l.data);A7k=0;}if(!A7g){c=o.dc;b="alphabetic";c.textBaseline=b;}else{b=o.dc;c="top";b.textBaseline=c;}a.dK=f/1024|0;p=0;while(p<k){Ki(a,o,d,a.dK+p|0);p=p+1|0;}a.cE.jg=0;}e=a.eD.data.length;if
(e&&f<=FI(a.cE)){f=f/1024|0;g=a.dK;if(f!=g){if(Wt(f-g|0)>=e){g=0;while(g<e){Ki(a,o,d,f+g|0);g=g+1|0;}a.dK=f;}else{while(true){g=a.dK;if(g>=f)break;Ki(a,o,d,g+e|0);a.dK=a.dK+1|0;}while(true){g=a.dK;if(g<=f)break;Ki(a,o,d,g-1|0);a.dK=a.dK-1|0;}}}}}
function Ki(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Yj(a,e);g=a.cE;if(f>=g.s.data.length)return;h=g.gn;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.cb;l=a.da.g_;ER(b);a:{while(true){g=a.cE;if(f>=g.s.data.length)break a;m=l.data;g=JX(g,f);n=m[KG(g)];o=!A7g?LN(n,c):Nj(n,c);m=h.data;Cm(b,n);B0(b,g.v,k,o);k=m[f]-j+a.cb;if(k>1024.0)break;f=f+1|0;}}h=a.eD.data;CM(h[d%h.length|0],b);}
function Qi(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.eD.data.length;if(!o)return;if(g>FI(a.cE))return;p=a.cE;q=p.eX;r=p.s;s=g/1024|0;t=Yj(a,g);u= -a.cb|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.eD.data[s%o|0];bb=w[t];bc=z[t]+a.cb|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.cb|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.cb:2*a.cb|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.cb:2*a.cb|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.br.gt;if(bb===j)bo=h.br.ry;if(k!==null){p=B7(k);d:{while(B_(p)){if(BO(Ca(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.br.wo;}if(n!==null){w=n.nE;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AEc(h.d8,h,bi,n.hd);}if(!bn&&!bl){i.b=Be(i.b,FI(a.cE));AF6(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.cb:0)|0,(g
+bg|0)<=(i.b+(!y?a.cb:2*a.cb|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.cb:0)|0,g-x|0,bo);}else{bp=h.jN.data[bb.bZ];p=bn?h.br.k2:S$(bo,WZ(h,bp.mS));Cp(a.da.js,g-x|0,0.0,bg,v);X(a.da.ih,bg,f);Hd(a.da,d,ba,u+c|0,b,bp.g9,p);}if((bb.bF&12)>>2>0){bc=u+c|0;B$(d,1);p=a.da;bq=p.nG;bq.a=bg;x=b+p.ub|0;bk=x-p.BL|0;br=p.qT;bs=x+br;ba=p.hv;T3();Md(d,bc,bk,bq,br,bs,ba,A7l.lb.g9);B$(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AF6(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.jN.data[h.bZ];o=n.g9;p=S$(m,WZ(f,n.mS));q=f.br.k2;f=a.da;r=f.js;s=f.ih;t=l;u=i-j|0;v=u;w=e;Cp(r,t,0.0,v,w);X(s,u,e);Hd(a.da,b,g,c,d,o,p);l=l+i|0;Cp(r,l-k|0,0.0,k,w);X(s,k,e);f=a.da;c=c+i|0;Hd(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cp(r,t,0.0,i,w);X(s,i,e);Hd(a.da,b,g,c-j|0,d,o,q);}
function S$(b,c){if(b!==null)c=b;return c;}
function Yj(a,b){var c,d,e,f,g,h,i;c=a.cE;d=c.gn;e=0;f=c.s.data.length;g=b;b=BK(e,f);if(b>0){c=new BU;Y(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BK(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AD1(a){var b,c,d;b=a.eD.data;c=b.length;d=0;while(d<c){AGt(b[d]);d=d+1|0;}a.eD=a.da.nS;a.cE=null;}
function AIN(a,b,c,d,e,f,g,h,i){var j,k;j=FI(a.cE);if(j)j=j+a.cb|0;if(!j)j=j-a.cb|0;k=Bd( -a.cb|0,j-g|0);if(k>=h)return;X(f,h-k|0,e);Bs(b,c+k|0,d,f,i);}
function Zn(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=Q(Fv,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.ue(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cE===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Fv;g.cb=3;g.dK=0;g.da=d;g.eD=d.nS;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AD1(q);j=j+1|0;}return i;}
function S2(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cE;if(e!==null)e.jg=1;d=d+1|0;}}
function Ow(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AD1(b[d]);d=d+1|0;}}
function AF9(){A7g=0;}
function AHH(){var a=this;B.call(a);a.f6=null;a.dn=null;a.e9=null;a.fG=null;a.oC=null;a.oo=null;}
function Jb(){var a=new AHH();AX1(a);return a;}
function AX1(a){a.f6=new Bg;a.dn=new Bg;a.e9=new Bg;a.fG=new Bg;a.oC=new B2;a.oo=new B2;}
function Zz(a){var b;b=a.dn;return !Bc(b.a,b.b)?0:1;}
function IN(a,b){return Gk(b,a.e9,a.fG);}
function F6(a,b,c,d){var e,f,g,h,i;e=IN(a,b);f=Gk(b,a.f6,a.dn);if(!e&&!f)return null;if(!f){if(!d)c.g(Vc(a,b.a-a.e9.a|0));else c.g(QL(a,b.b-a.e9.b|0));}g=!d?a.f6.a+(a.dn.a/2|0)|0:a.f6.b+(a.dn.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Sl;b.v3=a;b.v4=c;b.v2=i;}else{b=new Sk;b.rQ=a;b.rO=c;b.rP=i;}return b;}
function H8(a,b,c){if(c!==null)BR(a.oC,c);if(b!==null)BR(a.oo,b);}
function AFo(b,c){var d;d=new AB1;d.ts=b;d.B9=c;return d;}
function QL(a,b){var c,d,e;c=a.fG.b;d=a.dn.b;e=c-d|0;return AFo(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Vc(a,b){var c,d,e;c=a.fG.a;d=a.dn.a;e=c-d|0;return AFo(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Kr(a,b,c,d,e,f,g){Vg(a,b,c,d,e,f,g,1);}
function Rz(a,b,c,d,e,f,g){Vg(a,b,c,d,e,f,g,0);}
function Vg(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(YP(d,d,e),i);e=e-d|0;i=d-j|0;i=i?YP(b,i,e):0;if(!h){k=a.f6;k.a=i+c|0;k.b=f-g|0;l=a.dn;l.a=j;l.b=g;l=a.e9;l.a=c;l.b=k.b;k=a.fG;k.a=d;k.b=g;break a;}k=a.f6;k.a=f-g|0;k.b=i+c|0;l=a.dn;l.a=g;l.b=j;l=a.e9;l.a=k.a;l.b=c;k=a.fG;k.a=g;k.b=d;break a;}}X(a.fG,0,0);X(a.dn,0,0);}}
function Vw(a,b){GW(a,b);G2(a,b);}
function GW(a,b){var c;c=a.e9;Bs(b,c.a,c.b,a.fG,a.oC);}
function G2(a,b){var c,d;c=a.dn;c.a=c.a-2|0;c.b=c.b-2|0;d=a.f6;Bs(b,d.a+1|0,d.b+1|0,c,a.oo);b=a.dn;b.a=b.a+2|0;b.b=b.b+2|0;}
function Gb(a,b,c){return IN(a,b)&&GI(c)?1:0;}
function AFc(){var a=this;B.call(a);a.E6=20;a.gD=null;a.fw=null;a.lw=0.0;a.lt=null;a.jn=0;a.kY=0;a.hn=0;a.c5=null;a.oE=null;a.fi=null;a.gO=null;a.gM=0;}
function AHz(){var a=new AFc();A2k(a);return a;}
function A2k(a){a.E6=20;a.gD=new Bg;a.fw=new Bg;a.c5=BL();a.oE=DM(0);}
function ABO(a,b,c){var d,e,f,g,h;d=a.gM;if(b==d)return;e=a.c5.q;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){RX(a,b);a.gM=b;}else{XP(a,c);if(a.gM>=b)while(true){if(h<g)break a;a.gM=Pt(BG(a.c5,h%e|0),a.fi,a.gO,a.gM,b,f,a.lw);h=h+(-1)|0;}while(g<=h){a.gM=Pt(BG(a.c5,g%e|0),a.fi,a.gO,a.gM,b,f,a.lw);g=g+1|0;}}}}
function LO(a,b){if(b===null)b=DM(0);a.oE=b;}
function AA4(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hn;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c5;h=BG(h,g%h.q|0);i=a.gD;j=a.oE;k=h.ft.b;l=d.le;m=b+f|0;n=h.cu;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&V7(d,j,r,l)!==l.k$?0:1){k=Bc((q-p|0)+1|0,h.cu);X(h.jc,BQ(h.cR),k);Cp(h.jY,0.0,Bc(p,h.cu),BQ(h.cR),k);t=r;}else{u=V7(d,j,r,l);Np(h,e,f+Bc(p,h.cu)|0,i,l.o2,u);X(h.jc,BQ(h.cR),h.cu);Cp(h.jY,0.0,Bc(q,h.cu),BQ(h.cR),h.cu);p=q;}q=q+1|0;r=t;}u=V7(d,j,r,l);Np(h,
e,f+Bc(p,h.cu)|0,i,l.o2,u);g=g+1|0;f=f+a.hn|0;}}
function S0(a,b,c,d){var e,f,g,h,i,j;e=a.c5.q;while(true){f=a.c5.q;g=Bc(f,a.hn);if(g>(d+a.kY|0))break;h=BF(0,g);i=new QP;g=a.fw.a;f=a.kY;j=a.lt;i.jc=new Bg;i.jY=new B2;i.qg=h;i.eg=20;i.cu=f;i.ft=BF(g,20*f|0);i.hz=LN(j,f);if(i.cR===null)i.cR=CV(b);BB(a.c5,i);}if(f==e)return;XP(a,b);RX(a,c);}
function RX(a,b){var c,d,e,f,g,h,i,j,k;c=a.c5;d=c.q;e=Bc((b/(d*20|0)|0)+1|0,d)*20|0;c=B7(c);while(B_(c)){f=Ca(c);g=a.fi;h=a.lw;ER(g);i=0;while(true){j=f.eg;if(i>=j)break;k=e-Bc(d,j)|0;if(k<b)k=e;e=k+1|0;GR(f,g,Dm(e),Bc(f.cu,i)+f.hz|0,h);i=i+1|0;}CM(f.cR,g);f.w5=g.jh;}}
function YM(a,b,c,d){a.lt=b;a.kY=c;a.hn=c*20|0;a.jn=d;YO(a);}
function XP(a,b){var c;c=a.fi;if(!(c!==null&&c.jh==a.jn)){c=D5(b,a.fw.a,a.hn,a.jn);a.fi=c;Cm(c,a.lt);AAb(a.fi,2);}c=a.gO;if(!(c!==null&&c.jh==a.jn)){b=D5(b,a.fw.a,a.kY,a.jn);a.gO=b;Cm(b,a.lt);AAb(a.gO,2);}}
function ID(a){Fw(a.c5,new ADD);Iy(a.c5);YO(a);}
function YO(a){a.fi=BV(a.fi,null);a.gO=BV(a.gO,null);}
function Sm(a,b,c,d,e){Cn(a.gD,b);X(a.fw,c,d);a.lw=e;}
function Xs(){B.call(this);this.Ds=null;}
function Xr(){B.call(this);this.qz=null;}
function AMs(a,b){var c;c=a.qz;F4(c,FX(b,K3(c)));}
function Xq(){B.call(this);this.ti=null;}
function ALM(a,b){var c;c=a.ti;IL(c,FX(b,ABa(c)));}
function AKd(){var a=this;B.call(a);a.js=null;a.ih=null;a.nG=null;a.hv=null;a.g_=null;a.nS=null;a.cX=null;a.hK=null;a.qT=0.0;a.d$=0;a.ub=0;a.BL=0;a.iN=0;}
function APS(a){var b=new AKd();ATi(b,a);return b;}
function ATi(a,b){var c;a.js=new B2;a.ih=new Bg;a.nG=new Bg;c=new B2;a.hv=c;a.g_=Q(LC,4);a.nS=Q(Iw,0);a.iN=b;LF(c);}
function Yo(a){a.hK=BV(a.hK,null);}
function Sq(a,b,c){var d,e;d=CY(EA(a.cX)*b);a.d$=d;e=a.cX;a.ub= -( -((d+e.eq+e.eI)/2.0)|0)|0;AD5(a,c);return a.d$;}
function P0(a,b){var c,d;LF(a.hv);c=a.hv;U2(c,b,c);a.qT=W8(a.hv);c=a.hv;d=c.bs+c.bf+1.5|0;a.BL=d;X(a.nG,0,d*2|0);}
function AD5(a,b){a.hK=BV(a.hK,D5(b,1024,a.d$,a.iN));}
function Hd(a,b,c,d,e,f,g){var h,i;h=a.ih;if(h.a&&h.b){i=a.js;if(i.bC!==0.0&&i.bf!==0.0){DJ(b,d,e,h,i,c,f,g,a.iN);return;}}}
function Xp(){B.call(this);this.A8=null;}
function AU0(a){var b,c;b=a.A8;c=b.j$?0:1;b.j$=c;b=new K;M(b);Jx(H(b,C(214)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xw(){B.call(this);this.xD=null;}
function AXa(a){var b,c;b=a.xD;c=b.k4^1;b.k4=c;b=new K;M(b);Jx(H(b,C(215)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xv(){B.call(this);this.t5=null;}
function A3a(a){var b,c,d,e,f;b=a.t5;c=(b.eh+3|0)%6|0;b.eh=c;d=b.eW.data;e=d.length;f=0;while(f<e){b=d[f];b.cb=c;b=b.cE;if(b!==null)b.jg=1;f=f+1|0;}}
function Xu(){B.call(this);this.ws=null;}
function APZ(a){var b;b=a.ws;b.b3=b.b3?0:1;ID(b.de);b.de=AHz();N$(b);AAF(b,b.i,b.k,b.cK.cf);}
function Xt(){B.call(this);this.rj=null;}
function ARH(a){var b;b=a.rj;b.lY=b.lY?0:1;}
function Xo(){B.call(this);this.zw=null;}
function A2E(a){var b;b=a.zw;b.pV=b.pV?0:1;}
function UR(){B.call(this);this.sy=null;}
function AP2(a){var b;b=a.sy;YI(b,b.lJ,b.n6);}
function US(){B.call(this);this.rH=null;}
function AZR(a){var b;b=a.rH;YI(b,b.n6,b.lJ);}
var AGk=G();
function Nz(){B.call(this);this.Dl=null;}
var A6V=null;var A7m=null;function AX2(){AX2=Bn(Nz);A2Z();}
function ANO(a){var b=new Nz();AH5(b,a);return b;}
function AH5(a,b){AX2();a.Dl=b;}
function A2Z(){A6V=ANO(C(216));A7m=ANO(C(217));}
var AEN=G(0);
function AIV(b,c,d){return IG(b,c,d,255,new B2);}
function IG(b,c,d,e,f){Cp(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Vn(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AOF(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bn=g+i;e.bs=h+i;e.bf=j+i;return e;}
function Ix(b,c,d,e,f){f=Vn(b,c,d,f);f.bC=e;return f;}
function HX(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var Z8=G();
function AOK(a,b){var c,d,e;c=b.cN;d=c&&!b.bL&&!b.dA&&!b.kC?1:0;a:{if(d){d=b.bm;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bL&&!c&&!b.dA&&!b.kC?1:0;d=d&&b.bm==46?1:0;}b:{if(!d){e=b.bm;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.oP=1;}return 0;}
function Z7(){B.call(this);this.xy=null;}
function AWb(a,b){var c;c=a.xy.ee;return c!==null&&c.it(b)?1:0;}
function TO(){var a=this;B.call(a);a.bb=null;a.wP=null;a.CN=null;a.E1=null;a.Q=null;a.di=null;a.W=null;a.ge=null;a.pQ=0;}
function AEr(a){var b=new TO();ARx(b,a);return b;}
function A2r(a,b){var c=new TO();AFn(c,a,b);return c;}
function ARx(a,b){AFn(a,b,AUy());}
function AFn(a,b,c){var d;a.bb=b;d=new Ur;E4(d);d.mK=new B2;d.f_=b;a.Q=d;a.W=c;}
function Tp(a,b){var c,d;if(a.di===null){c=new QK;c.gf=new Bg;c.kI=new Bg;a.di=c;d=a.ge;if(d!==null)AAv(c,d);}a.di.i7=b;}
function DL(a,b){var c;c=a.Q;c.eJ=c.eJ|(BO(c.jI,b)?0:1);c.jI=b;Iv(a);}
function AAw(a,b,c){var d,e,f;d=a.Q;e=BO(d.hE,b)?0:1;f=c===d.kO?0:1;if(e){d.hE=b;d.ez=null;QE(d,0);}d.eJ=d.eJ|(!e&&!f?0:1);d.kO=c;d.ik=0;Iv(a);}
function Fe(a,b){var c;a.ge=b;c=b.tk;BC(b);AAw(a,c,3.0);c=a.di;if(c!==null)AAv(c,b);}
function J0(a){var b;b=a.Q;b.d0=BV(b.d0,null);b.ez=null;a.W=BV(a.W,null);b=a.di;if(b!==null){NX(b);b.i7=null;}}
function Le(a,b){var c,d,e;c=a.W;d=c.i;e=c.k;b=BV(c,b);a.W=b;b.dz(d,e,a.bb.cf);}
function Et(a,b,c){a.W.dz(b,c,a.bb.cf);Iv(a);}
function Iv(a){var b,c,d;if(a.bb.cf!==0.0){b=a.Q;if(b.hE!==null){c=a.W.k.a;b.k.a=c;d=b.d0;if(d!==null&&c!=BQ(d)&&!(c>=b.ik&&BQ(b.d0)>=b.ik))b.eJ=1;b=a.Q;b.bS=a.bb.cf;if(Oi(b))c=0;else{b=a.Q;QE(b,VF(b));c=b.k.b;}b=a.Q.i;d=a.W.i;X(b,d.a,d.b-c|0);b=a.di;if(b!==null)Cn(b.gf,a.Q.i);return;}}}
function ACF(a){return VF(a.Q);}
function Mh(a,b){return ACp(a,b.j);}
function ACp(a,b){var c;c=!(a.pQ&1)?0:1;return !c&&!BW(a.W,b)?0:1;}
function L9(b,c){if(b<0)c=C(218);else if(b>0)c=C(219);return c;}
function OG(a,b,c){var d;d=a.Q.i.a;return (d-c|0)<=b&&b<d?1:0;}
function MM(a,b,c){var d,e;d=a.Q;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Nf(a,b,c){var d;d=a.Q.i.b;return (d-c|0)<=b&&b<d?1:0;}
function KP(a,b,c){var d,e;d=a.W;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Ok(a,b,c){var d,e,f;d=a.Q.i.b-c|0;e=a.W;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function ADr(a,b,c){var d,e;d=a.Q.i.b+c|0;e=a.W;return AJn(b,d,(e.i.b+e.k.b|0)-c|0);}
function M8(a,b,c){var d,e,f;d=a.Q;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function Xn(a,b,c){var d,e;d=a.Q;e=d.i.a;return AJn(b,e+c|0,(e+d.k.a|0)-c|0);}
function AJn(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BK(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function PQ(a,b){var c;a:{b:{c:{c=Cs(a.bb,7.0);if(M8(a,b.a,c)){if(Nf(a,b.b,c))break c;if(KP(a,b.b,c))break c;}if(!Ok(a,b.b,c))break b;if(!OG(a,b.a,c)&&!MM(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function J9(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.W;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new VC;b.u0=a;b.u1=e;b.u$=f;b.u_=c;b.u7=g;b.u8=j;b.u4=l;b.u5=d;b.u2=h;b.u3=k;b.vO=m;return b;}
function Kp(){var a=this;B.call(a);a.u=null;a.t=null;a.X=null;a.bl=null;}
function Sv(){var a=new Kp();ACc(a);return a;}
function Ta(a,b,c,d){var e=new Kp();AM3(e,a,b,c,d);return e;}
function ACc(a){a.u=new Bg;a.t=new Bg;a.X=new B2;a.bl=new B2;}
function AM3(a,b,c,d,e){a.u=new Bg;a.t=new Bg;a.X=new B2;a.bl=new B2;Hj(a,b,c,d,e);}
function Hj(a,b,c,d,e){X(a.u,b,c);X(a.t,d,e);}
function ABd(a){X(a.t,0,0);}
function Lf(a){var b;b=a.t;return Bc(b.a,b.b)?0:1;}
function Fd(a,b){return Gk(b,a.u,a.t);}
function ZS(a,b,c,d){var e;e=a.u;Bs(b,e.a+c|0,e.b+d|0,a.t,a.X);}
function VW(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.bl;i=a.X;Gv(b,b.iR);GF(b.iR,b.Y,d,e,g,b.c7);N4(b.iR,b.Y,c);g=b.iR;j=b.Y;FG(j,g.wg,h);FG(j,g.we,i);c=g.sW;j.uniform2f(c,f,0.0);F3(b);}
var Fp=G();
function Nx(){Fp.call(this);this.EV=null;}
function AAX(){Fp.call(this);this.EQ=null;}
function YW(){Fp.call(this);this.D1=null;}
var Hh=G(0);
var SC=G(0);
function B2(){var a=this;B.call(a);a.bn=0.0;a.bs=0.0;a.bf=0.0;a.bC=0.0;}
function ADS(a,b,c,d){var e=new B2();A0p(e,a,b,c,d);return e;}
function AK9(a){var b=new B2();AKe(b,a);return b;}
function A0p(a,b,c,d,e){a.bn=b;a.bs=c;a.bf=d;a.bC=e;}
function Cp(a,b,c,d,e){a.bn=b;a.bs=c;a.bf=d;a.bC=e;}
function AKe(a,b){a.bn=b.bn;a.bs=b.bs;a.bf=b.bf;a.bC=b.bC;}
function BR(a,b){a.bn=b.bn;a.bs=b.bs;a.bf=b.bf;a.bC=b.bC;return a;}
function AUi(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BE(a)===BE(b)){b=b;if(b.bn===a.bn&&b.bs===a.bs&&b.bf===a.bf&&b.bC===a.bC?1:0){c=1;break a;}}c=0;}return c;}
var LK=G(0);
function AIu(){var a=this;Ft.call(a);a.cH=null;a.q=0;}
function BL(){var a=new AIu();AOp(a);return a;}
function AOp(a){a.cH=Q(B,10);}
function MU(a,b){var c,d;c=a.cH.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cH=C8(a.cH,d);}}
function BG(a,b){KE(a,b);return a.cH.data[b];}
function AZC(a){return a.q;}
function BB(a,b){var c,d;MU(a,a.q+1|0);c=a.cH.data;d=a.q;a.q=d+1|0;c[d]=b;a.b2=a.b2+1|0;return 1;}
function AJz(a,b,c){var d,e,f;QG(a,b);MU(a,a.q+1|0);d=a.q;e=d;while(e>b){f=a.cH.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cH.data[b]=c;a.q=d+1|0;a.b2=a.b2+1|0;}
function EN(a,b){var c,d,e,f;KE(a,b);c=a.cH.data;d=c[b];e=a.q-1|0;a.q=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b2=a.b2+1|0;return d;}
function AG7(a,b){var c;c=Lc(a,b);if(c<0)return 0;EN(a,c);return 1;}
function Iy(a){AEY(a.cH,0,a.q,null);a.q=0;a.b2=a.b2+1|0;}
function AIH(a,b,c){var d,e,f,g,h,i;QG(a,b);if(c.eG())return 0;MU(a,a.q+c.c2()|0);d=c.c2();e=a.q;f=e-1|0;while(f>=b){g=a.cH.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.q=e+d|0;h=c.b9();i=0;while(i<d){g=a.cH.data;e=b+1|0;g[b]=h.b_();i=i+1|0;b=e;}a.b2=a.b2+1|0;return 1;}
function KE(a,b){var c;if(b>=0&&b<a.q)return;c=new BH;Y(c);N(c);}
function QG(a,b){var c;if(b>=0&&b<=a.q)return;c=new BH;Y(c);N(c);}
function Fw(a,b){var c;c=0;while(c<a.q){b.g(a.cH.data[c]);c=c+1|0;}}
function LC(){var a=this;B.call(a);a.oi=null;a.Ct=null;a.o0=0.0;a.CG=0;a.CW=0;a.tr=0;a.DA=0;a.eq=0.0;a.eI=0.0;a.Cx=0.0;a.p5=0.0;a.CC=0;a.qX=null;}
function LN(a,b){return Nj(a,b)+a.tr|0;}
function Nj(a,b){return (b-EA(a)|0)/2|0;}
function EA(a){return CY(a.eq+a.eI);}
function Nk(a,b){return CY((a.eq+a.eI)*b);}
function Iw(){var a=this;B.call(a);a.eL=null;a.f4=null;a.eT=null;}
var A6E=0;function AGt(a){var b;b=a.f4;if(b!==null){A6E=A6E-1|0;a.eL.d5.deleteTexture(b);a.f4=null;}}
function BQ(a){return a.eT.a;}
function CO(a){return a.eT.b;}
function Tf(a,b,c,d){var e;e=a.eT;e.a=b;e.b=c;Os(a);a.eL.d5.texStorage2D(3553,1,d,b,c);e=a.eL.d5;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Os(a){var b,c;b=a.eL.d5;c=a.f4;b.bindTexture(3553,c);}
function CM(a,b){WQ(a,b.nV,b.no,32856);YS(a,b,0,0);}
function WQ(a,b,c,d){var e,f,g,h;a:{e=a.eT;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){Os(a);break a;}e=a.eL.d5;h=a.f4;e.deleteTexture(h);a.f4=a.eL.d5.createTexture();Tf(a,b,c,d);break a;}}Tf(a,b,c,d);}}
function JO(a,b,c,d){Os(a);YS(a,b,c,d);}
function YS(a,b,c,d){var e;e=a.eL.d5;b=b.i8;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var YL=G(0);
var A7n=0.0;function LF(b){Cp(b,1.0471975803375244,0.75,1.25,0.375);}
function U2(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:Jm(b.bC,Jm(c,A7n));Cp(d,b.bn/c,b.bs*c,ATJ(b.bf*c,1.25),e);}
function W8(b){var c;c=b.bs;return c-(c|0)>=0.25?0.0:0.5;}
function AEq(){A7n=Nb(Nb(0.5,0.375),4.0);}
var OL=G(0);
function GI(a){return DY(a,null);}
function Ry(b){var c;c=new Z1;c.vF=b;return c;}
function Y5(){B.call(this);this.tI=null;}
function AXG(a){KS(a.tI);}
function Y4(){B.call(this);this.v_=null;}
function AUM(a){K7(a.v_);}
function AKV(){var a=this;B.call(a);a.bN=null;a.bB=null;a.dt=0;}
function AMu(){var a=new AKV();A2L(a);return a;}
function AWp(a){var b=new AKV();AQV(b,a);return b;}
function A2L(a){a.bN=new Hi;a.bB=new Hi;}
function AQV(a,b){a.bN=new Hi;a.bB=new Hi;JN(a,b);}
function JN(a,b){AB3(a.bN,b.bN);AB3(a.bB,b.bB);a.dt=b.dt;}
function N7(a,b,c){Cf(a.bB,b,c);if(!a.dt)Cf(a.bN,b,c);}
function QN(a,b){Cf(a.bN,b,0);Cf(a.bB,b+1|0,0);}
function Eq(a){if(R3(a.bN,a.bB)>0)return a.bB;return a.bN;}
function F8(a){if(R3(a.bN,a.bB)<0)return a.bB;return a.bN;}
function AKb(a,b){var c,d,e,f;c=a.bN;d=c.K;e=a.bB;if(d==e.K&&c.ba==e.ba?1:0)return null;c=Eq(a);e=F8(a);d=c.K;if(d<=b){f=BK(b,e.K);if(f<=0)return BF(b<=d?c.ba:0,f>=0?e.ba:(-1));}return null;}
function Dx(a){var b,c;b=a.bN;c=a.bB;return (b.K==c.K&&b.ba==c.ba?1:0)?0:1;}
function TA(){var a=this;B.call(a);a.fr=null;a.fo=0;a.dL=0;}
function ACx(a,b){var c,d,e;c=a.fo;d=a.fr;if(c==d.data.length)a.fr=C8(d,c+16|0);d=a.fr.data;e=a.fo;a.fo=e+1|0;d[e]=b;}
function ZX(a){var b,c,d;b=a.dL;c=a.fo-1|0;if(b==c)a.dL=b-1|0;d=a.fr.data;a.fo=c;d[c]=null;}
var G1=G();
function ZT(){var a=this;G1.call(a);a.B=null;a.dh=null;a.e6=null;a.dP=null;a.dF=null;a.iJ=null;a.lF=null;a.cq=0;a.nt=0;a.z4=0.0;}
function Cd(a,b){return a.B.data[b];}
function CJ(a){return a.B.data.length;}
function ACn(a){return FH(a,CJ(a));}
function GA(a,b){return a.B.data[b].S;}
function AKL(a,b,c){var d,e,f,g,h;d=a.B;e=d.data;f=e[b];d=C8(d,e.length+1|0);e=d.data;a.B=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=D7(Q(Cw,0));a.B.data[b+1|0]=f;}else if(c==f.S){e[b]=f;e[b+1|0]=D7(Q(Cw,0));}else{e=(IS(f,c)).data;d=a.B.data;d[b]=e[0];d[b+1|0]=e[1];}F7(a,b,c,0,C(176));}
function LG(a,b){var c,d,e,f,g,h,i;c=a.B.data;d=c[b];e=c[b+1|0];f=D7(L4(d.s,e.s));g=a.B;h=g.data.length;if(b<h&&b>=0){i=Q(DH,h-1|0);c=i.data;ZM(g,b,i);c[b]=f;a.B=i;return;}d=new Bu;Y(d);N(d);}
function O7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.B.data;if(!(c<d[b].S?0:1)){d=(Cd(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}F7(a,b,c,1,NI(e));h=a.B.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=ZM(d,e,Q(Cw,f-1|0));else{j=i[e];if(c<=0)k=Ec(Dw(j.v,1),j.bZ,j.bF);else if(c>=(J(j.v)-1|0)){k=new Cw;l=j.v;ABp(k,Cu(l,0,J(l)-1|0),j.bZ,j.bF);}else{d=B5(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=Ec(Hr(d),j.bZ,j.bF);}i[e]=k;}h.S=h.S-1|0;E2(h);}else if(b!=(d.length-1|0)){F7(a,b,c,1,C(176));LG(a,b);}}
function AD$(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){AAf(a.B.data[b],c,e[0]);return;}g=f-1|0;d=(IS(a.B.data[b],c)).data;h=d[0];i=d[1];d=a.B;j=C8(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);MF(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Gr(e[m])?XR(e[m]):D7(Q(Cw,0));d[b+m|0]=k;m=m+1|0;}MF(i,0,0,e[g]);d[b+g|0]=i;a.B=j;}
function UW(a,b){var c,d,e,f,g,h,i;c=Eq(b);d=F8(b);e=c.K;if(e==d.K)return Cu(FO(a.B.data[e]),c.ba,d.ba);f=new K;M(f);b=a.B.data[c.K];e=c.ba;BM(BY(f,Dw(FO(b),e)),10);g=a.B.data;e=c.K+1|0;h=d.K;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AEk(BY(f,FO(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.B.data[d.K];h=d.ba;BY(f,Cu(FO(b),0,h));return L(f);}b=new Ol;Y(b);N(b);}
function Pe(a,b,c){var d;AC0(a,b);d=Eq(b);F7(a,d.K,d.ba,1,c);}
function AC0(a,b){var c,d,e,f,g,h,i;a:{c=Eq(b);d=F8(b);e=c.K;if(e==d.K)HM(a.B.data[e],c.ba,d.ba);else{b=a.B.data[e];HM(b,c.ba,b.S);HM(a.B.data[d.K],0,d.ba);e=c.K+1|0;f=d.K;g=a.B;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(DH,(h-f|0)+e|0);AFE(g,e,f,i);a.B=i;LG(a,c.K);break a;}b=new Bu;Y(b);N(b);}b=new Bu;Y(b);N(b);}}}
function Ja(a,b,c){return DR(b,GM(Cd(a,b),c));}
function ADp(a,b){var c,d,e;c=0;d=0;while(true){e=a.B.data.length;if(c>=e)break;if((d+(Cd(a,c)).S|0)>=b)return BF(c,b-d|0);d=d+((Cd(a,c)).S+1|0)|0;c=c+1|0;}return BF(e,0);}
function FH(a,b){var c,d,e;c=0;d=a.B.data.length;e=0;while(e<b){c=c+GA(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function L3(a,b){return On(Cd(a,b.bq),b.bv);}
function Fc(a){var b,c,d,e,f,g,h,i,j;b=B5(ACn(a));c=b.data;d=a.B.data.length;e=0;f=0;while(e<d){g=a.B.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;QX(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function F7(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cq=a.cq+1|0;f=a.iJ;g=Q(Ha,1);h=new Ha;h.ek=b;h.e1=c;i=Mj(e,C(176),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BF(b,c+J(i[0])|0);break a;}k=BF((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BF(b,c);}i=g.data;h.ps=k;h.n$=d;h.gW=e;i[0]=h;BB(f,g);Nn(a,b,c,d,e);}
function Nn(a,b,c,d,e){var f;f=FH(a,b)+c|0;if(!d){XQ(a.dh,f,J(e));TJ(a.e6,f,J(e));}else{Vd(a.dh,f,J(e));Pp(a.e6,f,J(e));}}
function WV(a,b){var c,d,e;c=Mj(b.gW,C(176),(-1));if(b.n$){AD$(a,b.ek,b.e1,c);XQ(a.dh,FH(a,b.ek)+b.e1|0,J(b.gW));TJ(a.e6,FH(a,b.ek)+b.e1|0,J(b.gW));}else{c=c.data;d=AMu();Cf(d.bN,b.ek,b.e1);e=c.length;if(e==1)Cf(d.bB,b.ek,b.e1+J(c[0])|0);else Cf(d.bB,(b.ek+e|0)-1|0,J(c[e-1|0]));AC0(a,d);Vd(a.dh,FH(a,b.ek)+b.e1|0,J(b.gW));Pp(a.e6,FH(a,b.ek)+b.e1|0,J(b.gW));}return b.ps;}
function ABB(a){return a.nt==a.cq?0:1;}
function KK(a){a.nt=a.cq;}
function Ni(a){var b,c,d;a.lF=BP(a.B.data.length+1|0);b=0;while(b<a.B.data.length){c=a.lF.data;d=b+1|0;c[d]=(c[b]+(Cd(a,b)).S|0)+1|0;b=d;}}
function VQ(a,b){var c,d,e,f,g,h;c=a.lF;if(c===null){d=0;e=0;a:{while(true){c=a.B.data;f=c.length;if(e>=f)break;g=c[e].S;if(b<=(d+g|0)){h=DR(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DR(f,0);}return h;}d=AJ7(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DR(d,b-(d<0?0:a.lF.data[d])|0);if(h.bv>=(Cd(a,h.bq)).S){h.bq=h.bq+1|0;h.bv=0;}return h;}
var Mc=G(0);
function E9(a){return Ux(a.tq(),a.pa());}
function Ux(b,c){var d,e,f;b=b.data;d=b.length;if(!d)return c;e=new K;M(e);f=0;while(f<d){BM(BY(e,b[f]),47);f=f+1|0;}return L(BY(e,c));}
var TE=G(0);
function SS(){var a=this;B.call(a);a.ij=null;a.ga=null;a.jV=null;}
function AJ$(a,b){var c=new SS();APa(c,a,b);return c;}
function A3m(a,b,c){var d=new SS();AEK(d,a,b,c);return d;}
function APa(a,b,c){AEK(a,b,c,Q(BJ,0));}
function AEK(a,b,c,d){a.ij=b;a.ga=c;a.jV=d;}
function Er(a){var b;b=a.ij;return H4(b!==null?b.name:a.ga.name);}
function AL8(a){return a.jV;}
function U9(a,b,c){var d,e,f;d=AKW(c);e=new Vz;e.q_=b;b=a.ga;if(b!==null)b.text().then(Bv(e,"f"),Bv(d,"f"));else{b=a.ij.getFile();f=new VA;f.rW=e;f.rX=d;b.then(Bv(f,"f"),Bv(d,"f"));}}
function AKW(b){var c;c=new TF;c.yk=b;return c;}
function AX$(a){var b,c,d,e,f,g,h,i;if(a.ga===null)b=Ux(a.jV,Er(a));else{c=a.jV;b=Er(a);d=a.ga.size;e=d|0;if(e!==d){f=Er(a);g=new K;M(g);H(H(g,C(220)),f);$rt_globals.console.info($rt_ustr(L(g))+d);e=0;}if(c===null)f=C(23);else{g=new K;M(g);BY(g,C(36));h=0;while(true){i=c.data;if(h>=i.length)break;if(h>0)BY(g,C(37));H(g,i[h]);h=h+1|0;}BY(g,C(38));f=L(g);}g=new K;M(g);U(H(H(H(H(g,f),C(221)),b),C(222)),e);b=L(g);}return b;}
var ACS=G(0);
function AJW(){B.call(this);this.iK=null;}
function A3A(a){var b=new AJW();AZd(b,a);return b;}
function AZd(a,b){a.iK=b;}
function EQ(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iK));}
function CQ(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iK));}
function AWt(a){var b,c;b=a.iK.byteLength;c=new K;M(c);H(U(H(c,C(223)),b),C(224));return L(c);}
function Z1(){B.call(this);this.vF=null;}
function DY(a,b){ZU(a.vF,b);return 1;}
function Hi(){var a=this;B.call(a);a.K=0;a.ba=0;}
function Cf(a,b,c){a.K=b;a.ba=c;}
function AB3(a,b){a.K=b.K;a.ba=b.ba;}
function R3(a,b){var c;c=BK(a.K,b.K);if(c)return c;return BK(a.ba,b.ba);}
function NU(){var a=this;B.call(a);a.pw=null;a.oG=null;}
function L8(a){return a.pw.bq;}
function KX(a){return a.pw.bv;}
function DH(){var a=this;B.call(a);a.s=null;a.S=0;a.gn=null;a.eX=null;a.ev=null;a.ii=null;a.g$=0;a.jg=0;a.jB=0;}
var A7o=0;var A7p=0;var A7h=0;function XR(a){var b=new DH();AKk(b,a);return b;}
function D7(a){var b=new DH();Zt(b,a);return b;}
function AKk(a,b){var c;c=Q(Cw,1);c.data[0]=AI4(b);Zt(a,c);}
function Zt(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.S=d;E2(a);}
function Jr(a){return a.s.data.length;}
function JX(a,b){return a.s.data[b];}
function GM(a,b){var c;c=Km(a,b);return c<=0?0:a.ev.data[c-1|0];}
function Km(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.ev!==null&&!a.jB)){Vs(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.ev.data[d]=e;d=d+1|0;}a.jB=0;}d=ABz(a.ev,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function On(a,b){var c;c=a.s.data;if(!c.length)return null;return c[Km(a,b)];}
function HM(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.S){a.s=Q(Cw,0);E2(a);a.S=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BK(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=ZM(g,e,Q(Cw,g.data.length-1|0));a.S=a.S-d|0;E2(a);return;}a.s.data[e]=Ec(Fx(Cu(k.v,0,b),Dw(k.v,c)),k.bZ,k.bF);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=Ec(Cu(l.v,0,b),l.bZ,l.bF);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=Ec(Dw(m.v,c),m.bZ,m.bF);g=a.s;a.s=AFE(g,e,f,Q(Cw,(g.data.length-f|0)+e|0));}a.S=a.S-d|0;E2(a);}
function IS(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DH,[D7(Q(Cw,0)),a]);if(b>=a.S)return I(DH,[a,D7(Q(Cw,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DH,[D7(Lx(c,0,Q(Cw,d))),D7(Lx(c,d,Q(Cw,f-d|0)))]);h=e[d];e=Lx(c,0,Q(Cw,d+1|0));i=e.data;j=Lx(c,d,Q(Cw,f-d|0));c=j.data;i[d]=Ec(Cu(h.v,0,b),h.bZ,h.bF);c[0]=Ec(Dw(h.v,b),h.bZ,h.bF);return I(DH,[D7(e),D7(j)]);}
function AAf(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}MF(a,d,b,c);}
function MF(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Gr(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Cw,1);h.data[0]=AI4(d);a.s=h;}else if(!b&&!c){h=Q(Cw,g+1|0);f=h.data;C6(e,0,h,1,g);f[0]=AI4(d);a.s=h;}else{i=f[b];if(c<=0)j=Ec(Fx(d,i.v),i.bZ,i.bF);else if(c>=J(i.v))j=Ec(Fx(i.v,d),i.bZ,i.bF);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B5(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=Ec(Hr(e),i.bZ,i.bF);}f[b]=j;}a.S=a.S
+J(d)|0;E2(a);}
function Pr(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Mb(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function NC(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gn;if(!(e!==null&&e.data.length>=d)){a.gn=ALC(d);a.eX=BP(d);a.g$=1;}Vs(a);if(!a.g$)A7p=A7p+1|0;else{f=0;g=0.0;A7o=A7o+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.ev.data[h]=f;Cm(b,i[KG(j)]);g=g+Eo(b,j.v);a.gn.data[h]=g;a.eX.data[h]=g+0.5|0;h=h+1|0;}a.S=f;a.g$=0;a.jB=0;}}
function Vs(a){var b;b=a.ev;if(!(b!==null&&b.data.length>=a.s.data.length)){a.ev=BP(a.s.data.length);a.jB=1;}}
function Tl(a){a.g$=1;a.ii=null;}
function E2(a){Tl(a);a.jg=1;a.jB=1;}
function AAa(a,b,c,d){var e,f,g,h,i,j,k;if(a.ii===null)a.ii=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.ii.data[d];if(e===null){e=c.data;f=a.s.data[d];Cm(b,e[KG(f)]);f=f.v;e=BP(J(f)-1|0);c=Gt(f);g=!d?0.0:a.gn.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BJ;k=i+1|0;OJ(f,c,0,k);h[i]=g+Eo(b,f)+0.5|0;i=k;}a.ii.data[d]=e;}return e;}
function GX(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.g$&&a.eX!==null))NC(a,c,d);if(b>=a.S)return a.eX.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BK(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eX.data[f];}return (AAa(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FI(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eX.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function G9(a,b){var c;if(b>=a.S)return b+1|0;c=Km(a,b);return a.ev.data[c];}
function FO(a){var b,c,d,e;b=new K;GN(b,a.S);c=a.s.data;d=c.length;e=0;while(e<d){BY(b,c[e].v);e=e+1|0;}return L(b);}
function AFD(){A7h=0;}
function Yu(){var a=this;B.call(a);a.fE=null;a.fd=null;}
function AWj(a,b){var c=new Yu();AXi(c,a,b);return c;}
function AXi(a,b,c){a.fE=b;a.fd=c;}
function TJ(a,b,c){var d;d=a.fE;if(d===null)return;Zp(a,d,b,c);}
function Pp(a,b,c){var d;d=a.fE;if(d===null)return;ABE(a,d,b,c);}
function Zp(a,b,c,d){var e,f,g,h;e=b.eZ.b9();while(e.cD()){VT(a,e.b_(),c,d);}e=b.fF.b9();while(e.cD()){f=e.b_();g=new Tj;g.yY=a;ES(a,g,f,c,d);}h=b.hQ.b9();while(h.cD()){e=h.b_();VT(a,e.ls,c,d);f=new Tk;f.w8=a;ES(a,f,e.kU,c,d);}b=b.cL.b9();while(b.cD()){Zp(a,b.b_(),c,d);}}
function VT(a,b,c,d){KT(a,b.eH,c,d);}
function ES(a,b,c,d,e){var f,g;a:{if(c instanceof HI){f=c.hy;g=new V5;g.rn=a;g.rl=b;g.rk=d;g.rm=e;Fw(f,g);}else{if(!(c instanceof Kj)){if(!(c instanceof Jn))break a;f=c;ES(a,b,f.jT,d,e);ES(a,b,f.i$,d,e);return;}g=c.id;f=new V6;f.B6=a;f.B5=b;f.B4=d;f.B3=e;Fw(g,f);}}if(c!==null){c=c.fU;if(c!==null)b.lW(c,CX(d),CX(e));}}
function KT(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e+d|0;}
function ABE(a,b,c,d){var e,f,g,h;e=b.eZ.b9();while(e.cD()){JW(a,(e.b_()).eH,c,d);}e=b.fF.b9();while(e.cD()){f=e.b_();g=new Sp;g.vb=a;ES(a,g,f,c,d);}h=b.hQ.b9();while(h.cD()){e=h.b_();JW(a,e.ls.eH,c,d);f=new Sr;f.Ar=a;ES(a,f,e.kU,c,d);}b.eZ.pE(new So);b.fF.pE(new Sn);b=b.cL.b9();while(b.cD()){ABE(a,b.b_(),c,d);}}
function JW(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e-d|0;}
function Lp(){var a=this;Ee.call(a);a.c8=0;a.b8=null;a.c0=0;a.B7=0.0;a.ni=0;}
function JV(){var a=new Lp();QQ(a);return a;}
function AXr(a,b){return Q(HW,b);}
function QQ(a){var b;b=AHB(16);a.c8=0;a.b8=Q(HW,b);a.B7=0.75;TM(a);}
function AHB(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function EW(a){var b;if(a.c8>0){a.c8=0;b=a.b8;AEY(b,0,b.data.length,null);a.c0=a.c0+1|0;}}
function TM(a){a.ni=a.b8.data.length*a.B7|0;}
function Hx(a,b){return AA8(a,b)===null?0:1;}
function N_(a){var b;b=new TN;b.y$=a;return b;}
function Cx(a,b){var c;c=AA8(a,b);if(c===null)return null;return c.cU;}
function AA8(a,b){var c,d;if(b===null)c=Sj(a);else{d=b.p1();c=Rg(a,b,d&(a.b8.data.length-1|0),d);}return c;}
function Rg(a,b,c,d){var e;e=a.b8.data[c];while(e!==null&&!(e.l8==d&&AIo(b,e.cO))){e=e.cY;}return e;}
function Sj(a){var b;b=a.b8.data[0];while(b!==null&&b.cO!==null){b=b.cY;}return b;}
function Ne(a){var b;if(a.o3===null){b=new Qy;b.jk=a;a.o3=b;}return a.o3;}
function DU(a,b,c){var d,e,f,g;if(b===null){d=Sj(a);if(d===null){a.c0=a.c0+1|0;d=TH(a,null,0,0);e=a.c8+1|0;a.c8=e;if(e>a.ni)ACd(a);}}else{e=b.p1();f=e&(a.b8.data.length-1|0);d=Rg(a,b,f,e);if(d===null){a.c0=a.c0+1|0;d=TH(a,b,f,e);e=a.c8+1|0;a.c8=e;if(e>a.ni)ACd(a);}}g=d.cU;d.cU=c;return g;}
function TH(a,b,c,d){var e,f;e=new HW;V1(e,b,null);e.l8=d;f=a.b8.data;e.cY=f[c];f[c]=e;return e;}
function AJb(a,b){var c,d,e,f,g,h,i,j;c=AHB(!b?1:b<<1);d=Q(HW,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b8.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.l8&b;j=h.cY;h.cY=e[i];e[i]=h;h=j;}f=f+1|0;}a.b8=d;TM(a);}
function ACd(a){AJb(a,a.b8.data.length);}
function Lz(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b8.data[0];while(e!==null){if(e.cO===null)break a;b=e.cY;d=e;e=b;}}else{f=J2(b);g=a.b8.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.l8==f&&AIo(b,e.cO))){h=e.cY;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.cY=e.cY;else a.b8.data[c]=e.cY;a.c0=a.c0+1|0;a.c8=a.c8-1|0;}if(e===null)return null;return e.cU;}
function AIo(b,c){return b!==c&&!b.bJ(c)?0:1;}
function Cw(){var a=this;B.call(a);a.v=null;a.bZ=0;a.bF=0;}
function AI4(a){var b=new Cw();AWT(b,a);return b;}
function Ec(a,b,c){var d=new Cw();ABp(d,a,b,c);return d;}
function AWT(a,b){ABp(a,b,0,0);}
function ABp(a,b,c,d){a.v=b;a.bZ=c;a.bF=d;}
function KG(a){return a.bF&3;}
function Jo(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Mb(a){return J(a.v);}
var NR=G(Lp);
function ZY(){var a=this;B.call(a);a.df=null;a.e_=0;}
var A7q=null;function AGS(a){var b=new ZY();AHh(b,a);return b;}
function AHh(a,b){a.e_=0;a.df=b;}
function QI(a,b){var c;if(b.eP)return b;b=B7(b.bo);while(true){if(!B_(b))return null;c=QI(a,Ca(b));if(c!==null)break;}return c;}
function Xm(a,b,c){var d,e,f,g;d=NJ(a,a.df,b);if(d===null)return;b=c.cm;e=b===null?A7r:b.cL;f=c.bo;c=a.df;if(d===c){if(c.cm===null)c.cm=b;b=new AAe;b.yV=a;Fw(f,b);b=new AAd;b.u9=a;e.fm(b);b=a.df;b.bo=f;b.cm.cL=e;b.eP=0;return;}if(!ED(f)){c=d.hw;if(c!==null){b=new XN;b.rr=c;Fw(f,b);g=Lc(c.bo,d);if(g==(-1))H2(c.bo,f);else{EN(c.bo,g);AIH(c.bo,g,f);}}}b=d.cm;if(b!==null){b=b.ho;c=new Sx;c.sR=b;e.fm(c);g=Lc(b.cL,d.cm);if(g==(-1))H2(b.cL,e);else{b.cL.qc(g);b.cL.ut(g,e);}}}
function NJ(a,b,c){var d,e,f,g;d=b.bX;if(d.b0==c.b0&&d.bY==c.bY?1:0){d=B7(b.bo);while(B_(d)){e=NJ(a,Ca(d),c);if(e!==null)return e;}return b;}b=B7(b.bo);while(true){if(!B_(b))return null;d=Ca(b);f=c.b0;g=c.bY;e=d.bX;if(e.b0<=f&&g<=e.bY?1:0){e=NJ(a,d,c);if(e!==null)break;}}return e;}
function ABj(a,b,c){BB(c,b.bX);b=B7(b.bo);while(B_(b)){ABj(a,Ca(b),c);}}
function XQ(a,b,c){a.e_=0;Lr(a,a.df,b,c);}
function Lr(a,b,c,d){var e;if(De(b)<c)return;a:{if(Do(b)>c){LZ(b,d);Hq(b,d);b=B7(b.bo);while(B_(b)){Lr(a,Ca(b),c,d);}}else{if(!MS(b,c)){if(a.e_)break a;if(De(b)!=c)break a;}Hq(b,d);if(Do(b)==c&&a.e_)LZ(b,d);e=B7(b.bo);while(B_(e)){Lr(a,Ca(e),c,d);}if(!a.e_){b.eP=1;a.e_=1;}}}}
function Vd(a,b,c){a.e_=0;MW(a,a.df,b,c);}
function MW(a,b,c,d){var e,f,g,h,i,j;if(De(b)<c)return;e=Do(b);f=c+d|0;if(e>f){e= -d|0;LZ(b,e);Hq(b,e);g=B7(b.bo);while(B_(g)){MW(a,Ca(g),c,d);}b.bo=WH(a,b.bo);}else{h=b.bX;if(c<=h.b0&&h.bY<=f?1:0){if(b===a.df){L7(b,0);MV(b,0);h=b.cm;if(h!==null)h.cL.je();}else{L7(b,(-1));MV(b,(-1));h=b.cm;if(h!==null){ADV(h);b.cm=null;}}Iy(b.bo);}else{e=MS(b,c);f=MS(b,f);if(e&&f)Hq(b, -d|0);else if(e)MV(b,c);else{if(!f)return;L7(b,c);Hq(b, -d|0);}h=B7(b.bo);while(B_(h)){MW(a,Ca(h),c,d);}h=T2(b.bo);g=X9(0);i=new R7;j=new ACm;j.FD
=i;j.kJ=g;while(AB6(h,j)){}if(!j.kJ.om&&!a.e_)b.eP=1;else a.e_=1;b.bo=WH(a,b.bo);}}}
function WH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BL();d=null;e=A7q;f=b.cH;g=b.q;if(e===null)e=A58;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}K8(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b2=b.b2+1|0;b=B7(b);while(B_(b)){m=Ca(b);if(Do(m)==De(m))continue;if(!m.eP){if(d!==null){BB(c,d);d=null;}BB(c,m);}else if(d===null)d=m;else{n=ATv(KY(Be(Do(d),Do(m)),Bd(De(d),De(m)),d.bX.fR),d.hw,d.cm);n.eP=1;d=m.cm;if(d===null)d=n;else{ADV(d);d=n;}}}if(d!==null)BB(c,d);return c;}
function ADm(a,b,c,d){var e,f,g,h,i,j;if((De(c)-Do(c)|0)<43)e=Cu(d,Do(c),De(c));else{e=Cu(d,Do(c),Do(c)+20|0);f=Cu(d,De(c)-20|0,De(c));g=new K;M(g);H(H(H(g,e),C(167)),f);e=L(g);}e=ACi(e,C(176),C(225));f=Bt();g=Cy(c);h=new K;M(h);i=U(h,b);BM(i,32);g=H(i,g);BM(g,9);H(g,e);Bk(f,L(h));c=B7(c.bo);j=b+1|0;while(B_(c)){ADm(a,j,Ca(c),d);}}
function AHr(){A7q=new U4;}
function ALc(){var a=this;B.call(a);a.b0=0;a.bY=0;a.fR=0;}
function KY(a,b,c){var d=new ALc();AWQ(d,a,b,c);return d;}
function AWQ(a,b,c,d){a.b0=b;a.bY=c;a.fR=d;}
function ASN(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.b0==c.b0&&a.bY==c.bY&&a.fR==c.fR?1:0;}return 0;}
function AV7(a,b){var c;b=b;c=BK(a.b0,b.b0);if(!c)c=BK(b.bY,a.bY);return c;}
var U4=G();
function AP4(a,b,c){var d;b=b;c=c;b=b.bX;c=c.bX;d=BK(b.b0,c.b0);if(!d)d=BK(c.bY,b.bY);return d;}
function Zv(){var a=this;B.call(a);a.bX=null;a.hw=null;a.bo=null;a.cm=null;a.eP=0;}
function ATv(a,b,c){var d=new Zv();AGR(d,a,b,c);return d;}
function AGR(a,b,c,d){a.eP=0;a.bX=b;a.hw=c;a.bo=BL();a.cm=d;}
function AHK(b){return ZC(b,null);}
function ZC(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bb(b);e=Bb(b);f=Bb(b);g=Bb(b);h=Bb(b);i=KY(d,e,f);j=new Zv;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AGR(j,i,null,l);m=0;while(m<g){l=ZC(b,c);l.hw=j;BB(j.bo,l);m=m+1|0;}return j;}
function AED(b,c,d){var e,f,g,h,i;a:{e=b.bX;f=b.bo;g=e.b0;h=e.bY;i=e.fR;Bq(c,g);G4(c,h,i);Bq(c,f.q);if(d!==null){e=b.cm;if(e!==null&&ACP(d,e)){g=(Ot(d,b.cm)).bp;break a;}}g=(-1);}Bq(c,g);b=B7(f);while(B_(b)){AED(Ca(b),c,d);}}
function Do(a){return a.bX.b0;}
function De(a){return a.bX.bY;}
function L7(a,b){a.bX.b0=b;}
function MV(a,b){a.bX.bY=b;}
function LZ(a,b){var c;c=a.bX;c.b0=c.b0+b|0;}
function Hq(a,b){var c;c=a.bX;c.bY=c.bY+b|0;}
function MS(a,b){return Do(a)<=b&&b<De(a)?1:0;}
function AL5(a){var b,c,d,e,f;b=a.bX;c=b.b0;d=b.bY;e=b.fR;b=new K;M(b);BM(b,40);BM(U(H(U(H(U(b,c),C(37)),d),C(37)),e),41);b=L(b);c=a.eP;f=new K;M(f);Jx(H(H(f,b),C(37)),c);return L(f);}
function AMN(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.bX,c.bX)&&BO(a.bo,c.bo)?1:0;}return 0;}
var Jq=G(0);
function GY(){var a=this;B.call(a);a.cO=null;a.cU=null;}
function A7s(a,b){var c=new GY();V1(c,a,b);return c;}
function V1(a,b,c){a.cO=b;a.cU=c;}
function AWv(a,b){var c,d;if(a===b)return 1;if(!Jd(b,Jq))return 0;a:{b:{c:{d:{c=b;b=a.cO;if(b!==null){if(!b.bJ(c.cO))break c;else break d;}if(c.cO!==null)break c;}b=a.cU;if(b!==null){if(!b.bJ(c.cU))break c;else break b;}if(c.cU===null)break b;}d=0;break a;}d=1;}return d;}
function HW(){var a=this;GY.call(a);a.l8=0;a.cY=null;}
function NO(){var a=this;Lv.call(a);a.yj=null;a.ro=null;}
function AEH(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.yj;e=0;f=0;g=a.ro;a:{while(true){if((e+32|0)>f&&D9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Ch(b)+j|0,i.length);Ps(b,d,j,f-j|0);e=0;}if(!D9(c)){k=!D9(b)&&e>=f?A6Q:A6P;break a;}i=g.data;j=Be(Ch(c),i.length);l=new Xi;l.qD=b;l.yI=c;k=AFZ(a,d,e,f,g,0,j,l);e=l.ve;j=l.v$;if(k===null){if(!D9(b)&&e>=f)k=A6Q;else if(!D9(c)&&e>=f)k=A6P;}ADo(c,g,0,j);if(k!==null)break;}}FA(b,b.Z-(f-e|0)|0);return k;}
var QH=G(NO);
function AFZ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Oe(h,2))break a;i=A6P;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!OA(l)){if((f+3|0)>g){j=j+(-1)|0;if(Oe(h,3))break a;i=A6P;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CS(l)){i=Eu(1);break a;}if
(j>=d){if(D9(h.qD))break a;i=A6Q;break a;}c=j+1|0;m=k[j];if(!Dl(m)){j=c+(-2)|0;i=Eu(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Oe(h,4))break a;i=A6P;break a;}k=e.data;o=EP(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.ve=j;h.v$=f;return i;}
var I9=G(Ew);
var O2=G();
function AT_(a,b){return b.text();}
function O4(){var a=this;B.call(a);a.tL=null;a.tK=null;}
function ATB(a,b){var c,d,e,f;c=a.tL;d=a.tK;e=b.length;f=new Pw;f.AK=b;c.g(AN4((AKB(e,f)).kj,AB_(d)));}
var O3=G();
function AVs(a,b){AHA(b);}
function IY(){var a=this;B.call(a);a.br=null;a.Fr=null;a.cS=null;a.jN=null;a.le=null;a.d8=null;a.i1=null;a.BI=null;a.pF=null;a.oS=null;}
function A7t(a,b,c,d,e,f){var g=new IY();LM(g,a,b,c,d,e,f);return g;}
function IF(){var b,c,d,e,f,g,h,i,j;b=new IY;c=new Ke;d=new Ho;FM();K2(d,A7u);My(c,d,BZ(A7c),BZ(A7v),BZ(A7w),BZ(A7c),BZ(A7x),BZ(A7y),BZ(A7z),BZ(A7A),BZ(A7B),BZ(A7C));e=AJE(S(C(226)));AFh();f=(A7D.hD()).data;g=f.length;h=Q(Ku,g);i=h.data;j=0;while(j<g){i[j]=f[j].nZ;j=j+1|0;}LM(b,c,e,h,AKj(S(C(227)),S(C(228)),S(C(229)),S(C(230))),Fi(),AEn(S(C(231)),S(C(232)),S(C(233)),S(C(234))));return b;}
function Mi(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IY;c=new Ke;d=new Ho;AN_();K2(d,A7E);My(c,d,BZ(A7F),BZ(A7G),BZ(A7H),BZ(A7F),BZ(A7I),BZ(A7J),BZ(A7K),BZ(A7L),BZ(A7M),BZ(A7N));e=AJE(S(C(235)));T3();f=(A7O.hD()).data;g=f.length;h=Q(Ku,g);i=h.data;j=0;while(j<g){i[j]=f[j].lb;j=j+1|0;}k=AKj(S(C(236)),S(C(237)),S(C(238)),S(C(239)));l=new I0;d=new I8;AU4();m=A7P;OH(d,m,A7Q,A7R,A7S,A7T,m);LW(l,d,AG$(),AHG(S(C(240)),S(C(241)),S(C(242))),AG$(),AH4(1,0.17499999701976776),A7U,A7V);LM(b,c,e,h,k,l,AEn(S(C(231)),S(C(232)),
S(C(233)),S(C(243))));return b;}
function LM(a,b,c,d,e,f,g){var h;h=d.data;a.i1=Dv(C(166),17.0);a.BI=Dv(C(155),15.0);a.pF=Dv(C(166),15.0);a.oS=Dv(C(14),15.0);a.br=b;a.Fr=c;a.jN=d;a.le=e;if(h.length>=15){a.cS=f;a.d8=g;return;}b=new BU;Y(b);N(b);}
function WZ(a,b){if(b===null)b=a.br.ej;return b;}
function KA(){var a=this;CG.call(a);a.dx=null;a.nY=null;}
function A4a(a){var b=new KA();AHS(b,a);return b;}
function AHS(a,b){var c,d,e,f;KW(a,b,0);c=K1(a.M);a.nY=c;d=Ih(c);a.dx=d;M1(a.r,d);c=b.o.bG;d=new YB;d.rR=a;Ba(c,d);c=b.o.bG;d=new HS;e=new Yz;e.Bw=a;It(d,b,e);Ba(c,d);c=a.dx;d=b.o;f=new ABc;f.qI=c;Ba(d.bT,c);Ba(d.fv,f);O8(a.dx,b.o);b=b.o.cT;c=new YA;c.xV=a;Ba(b,c);Hs(a);}
function AJs(a,b){var c,d;c=a.dx;d=new ABN;d.uX=a;d.uY=b;GK(c,b,d);}
function AXN(a,b){if(H6(a.M,b))LY(a.dx);}
function A1d(a,b){return I2(a.dx,b);}
function AOM(a){HB(a);Ip(a.dx);JR(a.M);}
function A2u(a){return FS(0);}
function ALy(a,b,c){var d;IE(a,b,c);d=a.dx;Mv(d,d.i,b,c);}
function AWP(a,b){BC(b);GL(a.nY,b);Fy(a.dx,b);}
function AJe(a,b){if(b.bm!=121)return 0;return 1;}
function AEJ(a,b){var c,d,e;if(DO(a.r,a.dx)){c=a.nY;b=b.j;d=a.dx;e=new AAy;e.z7=a;GQ(c,b,d,a,d,a,e);}return 1;}
function AIf(){var a=this;Cv.call(a);a.yM=null;a.o4=null;a.kg=null;a.em=null;a.lV=null;a.hx=null;a.eB=null;a.jy=null;a.qA=null;a.iY=null;a.p8=null;a.p9=null;a.pp=null;a.y3=null;a.CO=null;a.s3=0;}
function A4l(a){var b=new AIf();AYF(b,a);return b;}
function AYF(a,b){var c,d,e,f;El(a,b);c=(IF()).br.ej;a.yM=c;a.o4=AK9(c);a.kg=new Bg;a.em=KU();a.lV=KU();a.hx=Ta(0,0,3,3);a.eB=Ia(0,0,300,300);a.jy=AXv();d=Q(BJ,4);e=d.data;e[0]=C(181);e[1]=C(182);e[2]=C(199);e[3]=C(198);a.qA=d;a.iY=Q(Kp,e.length);c=b.o.bT;f=new TT;f.fz=a;Ba(c,f);c=b.o.bG;f=new Y2;f.B8=a;Ba(c,f);c=b.o.ox;f=new Y1;f.sr=a;Ba(c,f);c=b.o.gQ;f=new Y0;f.Dv=a;Ba(c,f);c=b.o.mm;f=new YZ;f.Eh=a;Ba(c,f);c=b.o.cT;f=new YY;f.EP=a;Ba(c,f);b=b.o.fv;c=new YX;c.AU=a;Ba(b,c);a.p8=ACG(a,1);a.p9=ACG(a,0);R9(a,a.em,
a.p8);R9(a,a.lV,a.p9);a.pp=ADT(a,0);a.y3=ADT(a,1);FT(a.eB,a.pp);F0(a.eB);HD(a.eB,Dy(169,183,198));Fl(a.eB,a.yM);Cp(a.em.X,1.0,1.0,1.0,1.0);Fl(a.em,a.eB.bl);BR(a.hx.bl,a.o4);}
function R9(a,b,c){FT(b,c);F0(b);}
function Sw(a,b){Ix(DQ(),0.5+DQ()*0.5,0.5+DQ()*0.5,1.0,b.X);}
function ACG(a,b){var c,d;c=D5(a.x.P,200,100,b);Hy(c,C(244),11.0);B0(c,C(245),0.0,20.0);J$(c,255,0,0);B0(c,C(245),0.25,40.0);J$(c,0,255,0);B0(c,C(245),0.5,60.0);J$(c,0,0,255);B0(c,C(245),0.75,80.0);d=CV(a.x.P);CM(d,c);Ez(c);return d;}
function ADT(a,b){var c,d,e,f;c=D5(a.x.P,255,100,b);Hy(c,C(166),10.0);d=Bt();e=$rt_str(c.dc.font);f=new K;M(f);H(H(f,C(246)),e);Bk(d,L(f));Eo(c,C(247));B0(c,C(247),0.0,20.0);B0(c,C(247),0.25,40.0);B0(c,C(247),0.5,60.0);B0(c,C(247),0.75,80.0);e=CV(a.x.P);CM(e,c);Ez(c);return e;}
function ALT(a,b){var c;a.s3=a.s3+1|0;c=b/5.0;Ix(c-(c|0),1.0,1.0,1.0,a.hx.X);return ABb(a.jy,b);}
function ANE(a){var b,c,d,e,f,g,h,i;b=a.x.P;EJ(b,a.o4);c=a.iY.data;d=c.length;e=0;while(e<d){ZS(c[e],b,0,0);e=e+1|0;}f=a.eB;g=f.u;g.b=(a.kg.b-f.t.b|0)-5|0;g.a=0;B$(b,0);h=0;while(h<7){f=a.eB;EG(f,b,a.pp,Bc(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eB;f.u.b=(a.kg.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.y3;f=a.eB;f.u.a=Bc(h,10+((10*f.t.a|0)/15|0)|0)+5|0;ST(f,b,g,1);h=h+1|0;}ST(a.em,b,a.p8,1);B$(b,1);g=a.lV;f=a.p9;i=g.u;h=i.a;d=i.b;g=g.t;Gv(b,b.kZ);GF(b.kZ,b.Y,h,d,g,b.c7);N4(b.kZ,b.Y,f);F3(b);B$(b,0);f=
a.CO;if(f!==null)VW(a.hx,b,f,0,0,0.0);ACa(a.jy,b,new Bg);M2(b,C(248));}
function APM(a,b,c){var d,e,f,g,h,i,j,k;d=Bt();e=Cy(b);f=new K;M(f);H(H(f,C(249)),e);Bk(d,L(f));d=Bt();f=new K;M(f);EH(H(f,C(250)),c);Bk(d,L(f));g=Cg(30.0,c);h=Cg(10.0,c);i=0;while(true){j=a.iY.data;if(i>=j.length)break;k=1+i|0;j[i]=Ta(Bc(h,k)+Bc(g,i)|0,g,g,g);Sw(a,a.iY.data[i]);i=k;}X(a.hx.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.em;X(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);X(a.lV.u,(b.a/2|0)+10|0,50);Cn(a.kg,b);}
function W5(a,b){var c,d,e,f,g;c=Bt();d=!b.jQ?C(251):C(252);e=b.ei;f=b.bm;g=b.zO;b=new K;M(b);Jx(H(U(H(H(H(b,d),e),C(253)),f),C(254)),g);Bk(c,L(b));return 0;}
function ABi(){var a=this;Cv.call(a);a.ER=null;a.ld=null;a.i0=null;a.h$=null;a.dk=null;a.dZ=null;a.m_=null;a.m0=null;a.jD=0;a.iH=null;a.iG=null;}
function Rh(a,b,c){FT(b,c);F0(b);}
function AD9(a,b,c,d,e,f){var g,h;g=D5(f,c,120,b);Cm(g,e);e=!b?C(255):C(256);h=new K;M(h);H(H(H(h,e),d),C(153));d=L(h);B0(g,d,0.0,20.0);B0(g,d,0.25,40.0);B0(g,d,0.5,60.0);B0(g,d,0.75,80.0);B0(g,d,1.0,100.0);h=CV(f);CM(h,g);Ez(g);return h;}
function ARa(a,b){return 0;}
function AVZ(a){var b,c,d,e,f,g,h,i;b=a.x.P;EJ(b,a.ld);B$(b,0);c=a.i0;d=c.b;e=a.h$;f=d-e.b|0;g=c.a-e.a|0;Bs(b,0,0,e,a.dk.bl);Bs(b,g,0,a.h$,a.dZ.bl);Bs(b,0,f,a.h$,a.dk.X);Bs(b,g,f,a.h$,a.dZ.X);c=a.dk;e=c.u;h=e.b;i=((a.i0.b*3|0)/4|0)-(c.t.b/2|0)|0;Iz(c,b,e.a,h,a.iH,0,1);c=a.dk;Iz(c,b,c.u.a,i,a.iH,1,1);c=a.dZ;Iz(c,b,c.u.a,h,a.iG,0,0);e=a.dZ;Iz(e,b,e.u.a,i,a.iG,1,0);M2(b,C(248));}
function AW6(a,b,c){var d,e;Cn(a.i0,b);X(a.h$,b.a/2|0,b.b/2|0);d=a.i0.b/4|0;e=a.dk;d=d-(e.t.b/2|0)|0;X(e.u,(b.a/4|0)-(a.jD/2|0)|0,d);X(a.dZ.u,((b.a*3|0)/4|0)-(a.jD/2|0)|0,d);}
function XA(){var a=this;CG.call(a);a.yG=null;a.ff=null;a.dE=null;a.oz=null;}
function APf(a,b,c){var d;d=Fm(a.r,a.oz);JH(a.ff,d,a.r);JH(a.dE,d,a.r);}
function RP(b){return I4(b,UY());}
function I4(b,c){var d;d=LE();Om(d,Nt(b,Kc(c,25)),!b?null:I4(b-1|0,c));Om(d,Nt(b,Kc(c,20)),!b?null:I4(b-1|0,c));Om(d,Nt(b,Kc(c,15)),!b?null:I4(b-1|0,c));Om(d,Nt(b,Kc(c,10)),!b?null:I4(b-1|0,c));return G0(d);}
function Nt(b,c){var d;if(b){d=new K;M(d);H(H(U(d,b),C(29)),c);c=L(d);}return c;}
function Om(b,c,d){if(d!==null)FJ(b,c,d);else{d=new Vo;d.r_=c;D2(b,c,d);}}
function AOc(a,b,c){var d,e;IE(a,b,c);b=a.r.bO;d=EB(a.ff);e=EB(a.dE);Nl(a.ff,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Nl(a.dE,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AWL(a){var b,c,d,e,f,g,h,i;HB(a);b=a.x.P;B$(b,1);c=a.yG;d=a.r;e=d.bO;X(c.nO,e.a,Cg(2.0,d.cf));X(c.oh,Cg(2.0,d.cf),e.b);FM();f=A7B;g=d.bH;h=e.b/2|0;i=c.nO;Bs(g,0,h-(i.b/2|0)|0,i,f);g=d.bH;h=e.a/2|0;c=c.oh;Bs(g,h-(c.a/2|0)|0,0,c,f);Mg(a.ff,a.r);Mg(a.dE,a.r);JR(a.M);B$(b,0);}
function APP(a,b){var c,d;c=NW(a.ff,b.j,a.r.cW);d=NW(a.dE,b.j,a.r.cW);return !c&&!d?0:1;}
function AMt(a,b,c,d){var e,f;e=Og(a.ff,b.j,c,d);f=Og(a.dE,b.j,c,d);return !e&&!f?0:1;}
function AAM(){CG.call(this);this.kH=null;}
function ANt(a,b,c){if(b===0.0)Y_(a);}
function Y_(a){var b,c,d,e,f,g,h,i;b=a.kH;if(b!==null){Iu(a.M,b);J0(b);}b=(IF()).cS;c=A5v(a.r,new Vb);d=Dv(C(155),14.0);e=APd();f=0;while(f<300){g=Dm(f);h=new SK;h.Bd=C(257);h.Ba=g;h.Bb=C(258);Wk(e,C(257),g,C(258),h);f=f+1|0;}Xc(c,ADa(e));We(c,b,d);g=AEr(a.r);i=GH(c,a.r);Jh(i,b.m3,b.oQ);Le(g,i);Fe(g,b);DL(g,C(145));a.kH=g;EI(a.M,g);QC(a);}
function AMI(a,b,c){IE(a,b,c);QC(a);}
function QC(a){var b,c,d;b=a.r.bO;Et(a.kH,BF((b.a*2|0)/10|0,(b.b*4|0)/10|0),BF((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.kH;b=AH3(c.W.k);d=new K;M(d);H(H(d,C(259)),b);DL(c,L(d));}
function W2(){var a=this;HN.call(a);a.mn=null;a.h2=null;a.gi=null;a.ki=null;a.r6=null;a.kb=null;a.ib=null;a.hO=null;a.lK=0;a.h1=0;}
function PI(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.h2.q>0){d=DQ();e=a.h2;f=d*(e.q-1|0)|0;e=EN(e,f);EN(a.gi,f);f=a.h1;g=e.t;a.h1=f-Bc(g.a,g.b)|0;I1(a.mn,e.dv);}c=c+1|0;}}
function L5(a,b){var c,d,e,f,g,h,i,j;c=Kn(a.r);Cm(c,a.ki);d=0;while(d<b){e=Kc(a.kb,1+(DQ()*19.0|0)|0);f=KU();g=f.dv;h=a.mn;BC(c);i=new Rb;i.up=c;BR(g,Kx(h,e,i));(Vn(DQ(),1.0,1.0,f.bl)).bC=0.5;h=f.u;g=f.dv;X(h,g.bn|0,g.bs|0);h=f.t;g=f.dv;X(h,g.bf|0,g.bC|0);BB(a.gi,e);BB(a.h2,f);j=a.h1;h=f.t;a.h1=j+Bc(h.a,h.b)|0;d=d+1|0;}a.hO=MQ(a.mn);}
function A0N(a){var b,c,d,e,f,g,h,i;HB(a);b=a.x.P;B$(b,1);c=a.r.bH;if(a.gi.q){d=a.hO;d=HJ(c,d.a,d.b);Cm(d,a.ki);e=a.ki.eq;Bs(c,0,0,a.hO,a.r6);f=0;while(f<a.gi.q){g=BG(a.h2,f);h=BG(a.gi,f);g=g.dv;B0(d,h,g.bn,g.bs+e);f=f+1|0;}g=a.ib;if(!(g!==null&&BQ(g)==a.hO.a&&CO(a.ib)==a.hO.b))a.ib=BV(a.ib,CV(c));CM(a.ib,d);Ez(d);i=0;while(i<a.gi.q){d=BG(a.h2,i);HD(d,CC(0));EG(d,c,a.ib,0,0);i=i+1|0;}}B$(b,0);}
function ALL(a,b){var c,d;if(a.lK){c=a.hO;d=Be(Bc(c.a,c.b),2211840);if(a.h1/d<=0.7)L5(a,D6(a.kb,5));else PI(a,D6(a.kb,5));}return a.lK;}
function SP(){var a=this;Cv.call(a);a.eC=null;a.h4=null;a.iZ=null;a.oV=null;a.e$=0;a.uO=0;a.r7=null;a.mB=0;a.xk=0;a.xI=null;a.Ad=null;}
function ALx(a){var b,c;b=a.e$;c=new K;M(c);U(H(c,C(260)),b);$rt_globals.console.info($rt_ustr(L(c)));EJ(a.eC,a.r7);Kr(a.iZ,a.e$,0,Hv(a),5000,a.oV.a,20);B$(a.eC,1);Vw(a.iZ,a.eC);B$(a.eC,0);b=a.e$;c=new K;M(c);U(H(c,C(260)),b);$rt_globals.console.info($rt_ustr(L(c)));ABO(a.h4,a.e$/a.mB|0,a.eC);AA4(a.h4,a.e$,Hv(a),a.Ad,a.eC);}
function AUJ(a,b,c){a.oV=b;Sm(a.h4,BF(0,0),50,Hv(a),c);S0(a.h4,a.eC,0,Hv(a));}
function UQ(a){return 5000-Hv(a)|0;}
function Hv(a){return Be(a.uO,a.oV.b);}
function Ds(){var a=this;Cv.call(a);a.pX=null;a.gZ=null;a.qO=0.0;}
function A7W(a){var b=new Ds();HP(b,a);return b;}
function HP(a,b){El(a,b);a.pX=AIV(0,0,64);a.gZ=new Bg;Gj(b.bw,JT(BE(a)));}
function AAh(a){EJ(a.x.P,a.pX);}
function SL(a,b,c){Cn(a.gZ,b);a.qO=c;}
var Rf=G(Ds);
var Xh=G(CG);
function Hg(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.x.bw;f=new Ra;f.Dh=a;f.t6=b;g=Q(B,1);h=g.data;i=BP(1);i.data[0]=b;h[0]=i;CU(e,f,C(261),g);d=d+1|0;}}
function ADv(a,b){var c,d,e,f,g,h;c=b.data;d=Bt();e=Cy(c[0]);f=new K;M(f);H(H(f,C(262)),e);Bk(d,L(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((K$(b,1)).iK));d=Bt();e=Cy(c[1]);if(b===null)f=C(23);else{f=new K;M(f);BY(f,C(36));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BY(f,C(37));U(f,c[g]);g=g+1|0;}BY(f,C(38));f=L(f);}h=new K;M(h);H(H(H(H(h,C(263)),e),C(264)),f);Bk(d,L(h));}
function WE(){var a=this;Ds.call(a);a.e7=null;a.gG=null;a.nF=null;a.AY=null;a.qm=null;}
function AOW(a,b){b=b/5.0;Ix(b-(b|0),1.0,1.0,1.0,a.gG.X);return 0;}
function AWA(a){AAh(a);EG(a.e7,a.x.P,a.AY,0,0);VW(a.gG,a.x.P,a.nF,0,0,0.0);M2(a.x.P,C(248));}
function A2o(a,b,c){var d,e,f;SL(a,b,c);X(a.gG.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.e7;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function SN(){var a=this;Ds.call(a);a.g2=null;a.q5=null;a.my=null;a.kz=null;a.jU=null;}
function A20(a){var b,c,d,e,f,g;AAh(a);b=a.x.P;c=a.kz;LV(b,c.a,c.b,a.jU);b=a.g2;c=a.q5;d=a.gZ;e=a.x.P;f=0;while(true){g=0;while(true){EG(b,e,c,g,f);g=g+BQ(c)|0;if(g>=d.a)break;}f=f+CO(c)|0;if(f>=d.b)break;}Gc(a.x.P);}
function AOH(a,b,c){SL(a,b,c);X(a.jU,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function AAB(){var a=this;Cv.call(a);a.eN=null;a.oH=null;a.gJ=null;a.cd=null;a.fl=0;a.iD=null;a.fH=0;a.DQ=20;a.Fu=11;a.Ed=220;a.md=null;a.E2=5000;a.im=0;a.gT=null;}
function ATD(a){var b,c,d,e,f,g,h;b=a.iD;c=a.fH;d=a.md;Kr(b,c,0,d.b,5000,d.a,20);B$(a.eN,1);Vw(a.iD,a.eN);if(a.cd===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B0(a.oH,Dm(e),0.0,c);}b=CV(a.eN);a.cd=b;CM(b,a.oH);}if(a.fH<=a.fl)while(true){f=a.fl;if(f<=a.fH)break;a.fl=f-20|0;b=a.gJ;g=a.im-1|0;a.im=g;B0(b,Dm(g),0.0,20.0);JO(a.cd,a.gJ,0,a.fl%220|0);ER(a.gJ);}else while(a.fl<(a.fH-20|0)){b=a.gJ;g=a.im+1|0;a.im=g;B0(b,Dm((g+11|0)-1|0),0.0,20.0);JO(a.cd,a.gJ,0,a.fl%220|0);ER(a.gJ);a.fl=a.fl+20|0;}b=Ia(0,0,BQ(a.cd),CO(a.cd));IB(b,
0,0,BQ(a.cd),CO(a.cd));HD(b,a.gT.data[0]);Fl(b,a.gT.data[1]);EG(b,a.eN,a.cd,400,0);g=a.fH%220|0;f=Be(CO(a.cd)-g|0,200);d=Ia(0,0,BQ(a.cd),f);IB(d,0,g,BQ(a.cd),f);HD(d,a.gT.data[0]);Fl(d,a.gT.data[1]);EG(d,a.eN,a.cd,0,0);h=Ia(0,f,BQ(a.cd),(CO(a.cd)-f|0)-20|0);IB(h,0,0,BQ(a.cd),(CO(a.cd)-f|0)-20|0);HD(h,a.gT.data[1]);Fl(h,a.gT.data[0]);EG(h,a.eN,a.cd,0,0);}
function AWN(a,b,c){Cn(a.md,b);}
function A0t(a,b){return 0;}
function Z$(a){return 5000-a.md.b|0;}
function Ks(){Ds.call(this);this.ef=0;}
function ZR(a){var b,c;b=a.x.bw;c=new Uk;c.xG=a;RJ(b,c,WG(a));}
function QB(a){var b,c,d,e;b=a.ef+1|0;a.ef=b;c=JT(F(Ks));d=new K;M(d);H(H(U(H(d,C(265)),b),C(29)),c);e=L(d);c=a.x.bw;d=new VS;d.xQ=e;Tz(c,e,d,WG(a));}
function WG(a){var b;b=new Y6;b.BP=a;return b;}
function APC(a,b,c,d){a:{switch(c){case 0:break;case 2:QB(a);break a;default:break a;}ZR(a);}return 1;}
function Sz(){var a=this;Ds.call(a);a.ui=null;a.go=null;a.lC=null;a.pj=null;a.vW=null;}
function AUh(a){var b,c,d,e,f,g,h,i;if(a.lC===null){b=a.x.P;c=a.vW;d=Is(b,c.h_,Cg(c.g1,a.qO));Cm(b.ch,d);e=CY(Eo(b.ch,C(266)));f=Bt();g=d.o0;c=new K;M(c);EH(H(c,C(267)),g);Bk(f,L(c));h=Nk(d,1.1799999475479126);c=Bt();i=new K;M(i);U(H(U(H(i,C(268)),e),C(172)),h);Bk(c,L(i));c=HJ(b,e,h);a.pj=c;Cm(c,d);B0(a.pj,C(266),0.0,d.eq);b=CV(b);a.lC=b;CM(b,a.pj);FT(a.go,a.lC);F0(a.go);b=a.go.bl;FM();BR(b,A7c);BR(a.go.X,A7X);}b=a.x.P;EJ(b,a.ui);c=a.go;i=c.u;f=a.gZ;e=f.a;c=c.t;X(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);EG(a.go,b,a.lC,
0,0);}
function G7(){var a=this;Cv.call(a);a.vi=null;a.ck=null;a.ec=null;a.dl=null;a.fq=null;a.eM=null;}
function OM(a,b){var c,d;El(a,b);a.vi=CC(20);a.ck=Sv();a.ec=new Bg;a.dl=new Bg;a.fq=new Bg;a.eM=new Bg;c=b.o.bG;d=new ACh;d.DC=a;Ba(c,d);Ba(b.o.bT,a);b=a.ck.bl;FM();BR(b,A7c);BR(a.ck.X,A7X);}
function AFj(a){var b,c,d;b=a.x.P;EJ(b,a.vi);c=a.ck;d=c.u;Bs(b,d.a,d.b,c.t,c.bl);B$(b,1);c=a.ck;d=c.u;AEg(b,d.a,d.b,c.t,a.ec,a.dl,a.fq,a.eM,c.X);B$(b,0);}
function AYC(a,b){return 0;}
var Tn=G(G7);
function A0g(a,b,c){var d,e,f;d=a.ck;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);X(a.ec,0,0);X(a.dl,Be(b.a,b.b),Be(b.a,b.b));b=a.fq;d=a.ec;X(b,d.a,d.b+20|0);b=a.eM;d=a.dl;X(b,d.a,d.b+40|0);}
function A1a(a,b){var c,d,e;Cn(a.ec,b.j);b=a.dl;c=a.ck;d=c.u;e=d.a;c=c.t;X(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fq;c=a.ec;X(b,c.a,c.b+20|0);b=a.eM;c=a.dl;X(b,c.a,c.b+40|0);return 0;}
function Tm(){var a=this;G7.call(a);a.f3=null;a.gp=null;}
function A2G(a,b){var c;c=a.dl;b=b.j;c.b=b.b-50|0;a.eM.b=b.b+100|0;return 1;}
function ANp(a){var b,c,d,e,f,g,h;b=Bd(a.ec.a,a.fq.a);c=Be(a.dl.a,a.eM.a);d=Be(a.ec.b,a.dl.b)-50|0;e=Bd(a.fq.b,a.eM.b)+50|0;Hj(a.ck,b,d,c-b|0,e-d|0);AFj(a);f=a.ck.u.a-10|0;AAD(a,a.x.P,10,f,a.ec,a.fq);g=a.ck;h=g.u.a+g.t.a|0;AAD(a,a.x.P,h,f,a.dl,a.eM);}
function AAD(a,b,c,d,e,f){var g;X(a.f3,c,a.ck.u.b);X(a.gp,d,e.b-a.ck.u.b|0);g=a.f3;Bs(b,g.a,g.b,a.gp,a.ck.bl);X(a.f3,c,e.b);X(a.gp,d,f.b-e.b|0);e=a.f3;Bs(b,e.a,e.b,a.gp,a.ck.X);X(a.f3,c,f.b);e=a.gp;g=a.ck;X(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.f3;Bs(b,e.a,e.b,a.gp,a.ck.bl);}
function AMc(a,b,c){}
function Wb(){var a=this;CG.call(a);a.Cm=3;a.wh=null;a.j6=null;a.ql=0;}
function APe(a,b,c){var d,e;if(b===0.0){EI(a.M,YT(a));d=S3(a,0.5,0,C(269));e=a.r.bO;Et(EI(a.M,d),BF(e.a/10|0,e.b/10|0),BF((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function YT(a){var b,c,d,e,f,g;b=a.ql+1|0;a.ql=b;c=new K;M(c);U(H(c,C(270)),b);c=S3(a,1.0,1,L(c));d=a.r.bO;e=d.a/10|0;f=e+D6(a.j6,e)|0;e=d.b/20|0;e=e+D6(a.j6,e)|0;b=d.a;b=((b*7|0)/10|0)+D6(a.j6,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+D6(a.j6,g/10|0)|0;Et(c,BF(f,e),BF(b,g));return c;}
function S3(a,b,c,d){var e,f,g;e=AEr(a.r);if(d===null)f=new ADF;else{f=new ADH;f.ux=e;f.uy=d;}g=new Qe;LR(g);g.mj=new B2;g.pJ=new Bg;g.yf=f;g.r8=b;if(c){d=GH(g,a.r);Jh(d,A7Y,A7Z);g=d;}Le(e,g);Fe(e,Fi());AAw(e,a.wh,3.0);d=new ADG;d.qM=a;d.qN=e;Tp(e,d);return e;}
function Ep(){CG.call(this);this.hm=null;}
function A4K(a){var b=new Ep();Kd(b,a);return b;}
function Kd(a,b){Ga(a,b);Ba(a.r.dU,a);BR(a.dS,CC(43));}
function AWk(a){return AUy();}
function APX(a){return 1;}
function N5(a,b){Fe(a.hm,b);}
function AIK(a,b){var c,d,e;c=a.r.bO;d=!a.pq()?0:ACF(b);e=c.b-d|0;Et(b,BF(c.a/20|0,d+(e/20|0)|0),BF((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A0X(a,b,c){if(b===0.0){a.hm=A2r(a.r,a.jp());N5(a,Fi());if(a.pq())DL(a.hm,Nc(BE(a)));EI(a.M,a.hm);a.kK(a.hm);}}
function Qx(){var a=this;Ep.call(a);a.me=null;a.eK=null;a.Ez=null;}
function AWh(a,b){var c;c=a.eK;return c!==null&&I2(c,b)?1:0;}
function AML(a){var b;b=Ih(a.me);a.eK=b;a.Ez=O8(b,a.x.o);AKz(a.eK);M1(a.r,a.eK);return a.eK;}
function AU5(a){return 0;}
function A2I(a,b){AIK(a,b);Hs(a);}
function ASG(a,b){BC(b);GL(a.me,b);Fy(a.eK,b);N5(a,b.cS);}
function AR2(a,b){H6(a.M,b);}
function W6(){B.call(this);this.wA=null;}
function A0K(a,b){DY(a.wA,null);return 0;}
function TS(){CG.call(this);this.kd=null;}
function AA9(a){return FS(1);}
function Zc(a){var b,c,d,e;b=new Zg;c=a.kd;d=a.M;e=new Vf;e.AW=a;UL(b,d,c,e);d=A1h(b.c3.b$);b.dO=d;AC1(d,c);c=AKr(C(271),0);d=AKr(C(272),0);IV(c);IV(d);e=new SJ;e.sY=b;c.dX=e;e=new SI;e.vf=b;d.dX=e;ET(b.dO.dY,c);ET(b.dO.dV,d);EI(b.c3,S_(b,b.dO,0.0));}
function AT4(a,b,c){if(b===0.0)Zc(a);}
function PK(){var a=this;Ep.call(a);a.vh=null;a.fO=null;}
function AIA(){var b;b=I(L$,[Nq(1,3,4,5,1),Nq(5,6,10,2,2),Nq(12,2,13,3,3),Nq(15,3,17,2,4)]);return A5d(Q(Gs,0),Q(Gs,0),b);}
function AW2(a){var b,c,d,e;b=A1h(a.r);a.fO=b;AC1(b,a.vh);c=a.fO.dY;BC(c);d=new ABe;d.rg=c;b=PJ(C(273),4,d);d=a.fO.dV;BC(d);e=new ABf;e.to=d;c=PJ(C(273),4,e);ET(a.fO.dY,b);ET(a.fO.dV,c);AA2(a.fO,AIA());return a.fO;}
var K5=G(0);
function AMy(a,b,c){LB(b);}
function AKU(a,b){var c;c=new RQ;c.un=a;c.uo=b;return c;}
function RU(){var a=this;Ep.call(a);a.c9=null;a.zl=null;a.kc=null;a.gw=null;}
function AQZ(a){var b,c,d,e;b=new Q0;c=a.M;E4(b);b.gq=K1(c);d=TU(c.b$);b.gs=d;b.kQ=GH(d,c.b$);e=new PH;E4(e);c=new B2;AO4();AKe(c,A7f);e.A3=c;b.oJ=e;d=Ih(b.gq);b.fY=d;b.Ax=a;MD(b,I(CB,[b.kQ,b.oJ,d]));b.sb=FS(1);a.c9=b;b=AKr(C(274),0);IV(b);c=new RY;c.A0=a;b.dX=c;ET(a.c9.gs,b);return a.c9;}
function RZ(a){var b,c;b=a.x.bw;c=new ACk;c.vx=a;Jc(b,c);}
function AQS(a,b){AFY(b,0.0);Hs(a);}
function AYZ(a,b){var c;N5(a,b.cS);c=a.c9;Kb(c.gs,b);JI(c.gs,c.kQ);GL(c.gq,b);Fy(c.fY,b);}
function ASq(a,b){var c,d,e;c=b.hJ;d=E9(c);a.zl=d;e=Cx(a.kc,d);if(e!==null)ADO(a,e);else{b=Bt();e=new K;M(e);H(H(e,C(275)),d);Bk(b,L(e));if(Hx(a.gw,d)){b=new K;M(b);H(H(b,C(276)),d);$rt_globals.console.info($rt_ustr(L(b)));}else{DU(a.gw,d,d);b=new ABJ;b.ty=a;b.tx=d;e=new ABI;e.xr=a;e.xt=d;U9(c,b,e);}}}
function ADO(a,b){H1(a.c9.fY,b);b=a.c9;FP(b.gq.bQ.b$,b.fY);}
function ALS(a,b){var c;ADC(b);if(Jl(b)>0)EL(a.c9.gs);c=b.gl.data;if(c.length==1&&!b.gU.data.length)c[0].dX.f();}
function AOm(a,b){if(Jl(b)>0)EL(a.c9.gs);Lo(b);}
function ASb(a,b,c){if(AHU(c)!==C(182))QS(b);else LB(b);}
function YU(){var a=this;Ep.call(a);a.lz=null;a.v0=null;}
function AZc(a){var b,c,d,e;b=TU(a.r);a.lz=b;BC(b);c=new Tr;c.s_=b;b=PJ(C(273),4,c);d=Bt();e=OP(b);c=new K;M(c);U(H(c,C(277)),e);Bk(d,L(c));ET(a.lz,b);Kb(a.lz,a.v0);b=a.lz;return JI(b,GH(b,a.r));}
function A0o(a,b){var c;c=a.r.bO;Et(b,BF(c.a/30|0,c.b/10|0),BF((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
var OW=G(KA);
function AV2(a){return FS(1);}
function ACD(){var a=this;Cv.call(a);a.tc=null;a.mR=null;a.fj=null;a.oU=null;a.mQ=0.0;a.he=null;a.wl=null;a.tQ=null;a.x9=null;a.yS=null;a.sj=null;a.qx=null;a.Ci=null;a.wJ=null;a.lH=null;}
var A70=0;function A4n(a){var b=new ACD();AT7(b,a);return b;}
function AT7(a,b){var c,d,e;El(a,b);a.tc=new B2;a.mR=ADS(1.0,0.0,0.0,1.0);a.fj=Sv();a.oU=new Bg;a.mQ=3.1415927410125732;c=AJT();a.he=c;a.wl=HH(c,1.25);a.tQ=HH(a.he,1.3333333730697632);a.x9=HH(a.he,1.5);a.yS=HH(a.he,1.6666666269302368);a.sj=HH(a.he,2.0);a.qx=ADS(a.mQ/24.0,15.0,3.0,0.5);c=ADS(a.mQ/12.0,25.0,3.0,0.5);a.Ci=c;a.wJ=DX([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.lH=I(B2,[a.he,a.wl,a.tQ,a.x9,a.yS,a.sj,a.qx,c]);c=b.o.bG;d=new QV;d.Fs=a;Ba(c,d);Ba(b.o.bT,a);b=a.fj.X;FM();BR(b,A7c);Hj(a.fj,0,0,600,60);e
=Nb(0.5,0.375);Jm(0.375,e);Jm(0.375,Jm(3.0,Nb(e,3.0)));HH(AJT(),3.0);}
function A2A(a,b,c){var d,e,f;Cn(a.oU,b);d=a.fj;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function HH(b,c){var d;d=new B2;U2(b,c,d);return d;}
function AJT(){var b;b=new B2;LF(b);return b;}
function AXF(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.x.P;EJ(b,a.tc);B$(b,1);c=a.fj;d=c.u.a;e=c.t.b/2|0;f=0;while(true){g=a.lH.data;if(f>=g.length)break;h=a.wJ.data[f];c=g[f];i=W8(c);j=a.fj;k=j.u;l=k.a;m=k.b;Md(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.mR);f=f+1|0;}if(A70){c=A4e(1,2);n=0;while(n<1000){h=D6(c,a.lH.data.length);l=D6(c,a.oU.b-a.fj.t.b|0);j=a.lH.data[h];i=j.bs;i=i-(i|0)>=0.25?0.0:0.5;k=a.fj;Md(b,k.u.a,l,k.t,d+i,(e+l|0)+i,j,a.mR);n=n+1|0;}}B$(b,0);}
function ASr(a,b){return A70;}
function Ke(){var a=this;B.call(a);a.BX=null;a.ej=null;a.uG=null;a.Df=null;a.sX=null;a.k2=null;a.ry=null;a.wo=null;a.lN=null;a.lI=null;a.gt=null;}
function A71(a,b,c,d,e,f,g,h,i,j,k){var l=new Ke();My(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function My(a,b,c,d,e,f,g,h,i,j,k,l){a.BX=b;a.ej=c;a.uG=d;a.Df=e;a.sX=f;a.k2=g;a.ry=h;a.wo=i;a.lN=j;a.lI=k;a.gt=l;}
function AFM(){B.call(this);this.Fa=null;}
function AJE(a){var b=new AFM();AUV(b,a);return b;}
function AUV(a,b){a.Fa=b;}
var AEM=G(0);
function AH_(){var a=this;B.call(a);a.o2=null;a.k$=null;a.xJ=null;a.qC=null;}
function AKj(a,b,c,d){var e=new AH_();A2N(e,a,b,c,d);return e;}
function A2N(a,b,c,d,e){a.o2=b;a.k$=c;a.xJ=d;a.qC=e;}
var AGa=G(0);
function Fi(){var b,c,d;b=new I0;c=new I8;AYW();d=A72;OH(c,d,A73,A74,A75,A76,d);LW(b,c,AHw(),AHG(S(C(278)),S(C(241)),S(C(242))),AHw(),AH4(1,0.125),A77,A78);return b;}
function AHw(){var b,c;b=new Kq;c=S(C(279));AYW();Lb(b,c,A79,A7$);return b;}
function AG$(){var b,c;b=new Kq;c=S(C(242));AU4();Lb(b,c,A7_,A8a);return b;}
function AK2(){var b,c;b=new Kq;AG2();c=A8b;AVd();Lb(b,c,A8c,A8d);return b;}
function AHR(){var a=this;B.call(a);a.zo=null;a.wz=null;a.uQ=null;a.qL=null;}
function AEn(a,b,c,d){var e=new AHR();AVt(e,a,b,c,d);return e;}
function AVt(a,b,c,d,e){a.zo=b;a.wz=c;a.uQ=d;a.qL=e;}
function AEc(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.d8.wz;break a;case 3:if(c!=3){b=b.d8.qL;break a;}b=b.d8.uQ;break a;default:b=b.br.ej;break a;}b=b.d8.zo;}return b;}
function J4(a,b,c){return AEc(a,b,0,c);}
function ME(){var a=this;B.call(a);a.l4=null;a.ks=null;}
function Wp(a,b){var c;c=a.ks;a.ks=b;return c;}
function KL(){var a=this;ME.call(a);a.bV=null;a.b5=null;a.gN=0;a.gX=0;}
function M9(a){var b;b=Lw(a);if(b==2){if(Lw(a.b5)<0)a.b5=Pk(a.b5);return Qh(a);}if(b!=(-2))return a;if(Lw(a.bV)>0)a.bV=Qh(a.bV);return Pk(a);}
function Lw(a){var b,c;b=a.b5;c=b===null?0:b.gN;b=a.bV;return c-(b===null?0:b.gN)|0;}
function Pk(a){var b;b=a.bV;a.bV=b.b5;b.b5=a;E1(a);E1(b);return b;}
function Qh(a){var b;b=a.b5;a.b5=b.bV;b.bV=a;E1(a);E1(b);return b;}
function E1(a){var b,c,d;b=a.b5;c=b===null?0:b.gN;b=a.bV;d=b===null?0:b.gN;a.gN=Bd(c,d)+1|0;a.gX=1;b=a.bV;if(b!==null)a.gX=1+b.gX|0;b=a.b5;if(b!==null)a.gX=a.gX+b.gX|0;}
var AK5=G();
function AMG(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Yi;c=c.buffer;d.gk=c;d.qh=new $rt_globals.Int8Array(c);d.mH=new $rt_globals.Uint16Array(c);d.An=new $rt_globals.Int32Array(c);d.su=new $rt_globals.Float32Array(c);d.sG=new $rt_globals.Float64Array(c);e=d.gk.byteLength;c=new K;M(c);U(H(c,C(280)),e);CT(L(c));e=b.callToCpp1();c=new K;M(c);U(H(c,C(281)),e);CT(L(c));f=b.callToCpp2();c=new K;M(c);EH(H(c,C(282)),f);CT(L(c));c=O9(d,b.getC8String());g=new K;M(g);H(H(g,C(283)),c);CT(L(g));c
=WL(d,b.getC16String());g=new K;M(g);H(H(g,C(284)),c);CT(L(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gk,h,8));c=AGx(i);g=new K;M(g);H(H(g,C(285)),c);CT(L(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gk,h,8));c=ASy(j);g=new K;M(g);H(H(g,C(286)),c);CT(L(g));k=AJd(d,b.getCDoubleArray8(),8);l=AUp(k);c=new K;M(c);H(H(c,C(287)),l);CT(Ed(c));l=AUk(b.getC8String(),C(288),d);c=L_();H(H(c,C(289)),l);CT(Ed(c));l=AQn(b.getC16String(),C(290),
d);c=L_();H(H(c,C(291)),l);CT(Ed(c));c=AZT(i,d,b.getCIntArray8(),DX([11,22,33,44,55,66,77,88]));g=L_();H(H(g,C(292)),c);CT(Ed(g));c=ASJ(j,d,b.getCFloatArray8(),100,DX([111,222,333,444,555,666,777,888]));g=L_();H(H(g,C(293)),c);CT(Ed(g));b=A0_(k,d,b.getCDoubleArray8(),1000,DX([1111,2222,3333,4444,5555,6666,7777,8888]));c=L_();H(H(c,C(294)),b);CT(Ed(c));}
function ASJ(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(295);h=0;i=e;a:{while(h<g){if(CY(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.su[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(296);}return C(297);}
function A0_(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(295);h=0;i=e;a:{while(h<g){if(GG(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.sG[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(296);}return C(297);}
function AZT(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(295);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.An[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(296);}return C(297);}
function AUk(b,c,d){var e,f,g,h;e=O9(d,b);if(!Bj(c,e))return C(298);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.qh[h])return C(299);f=f+1|0;}return C(296);}
function AQn(b,c,d){var e,f,g,h;e=WL(d,b);if(!Bj(c,e))return C(298);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.mH[h>>>1|0]&65535))return C(299);f=f+1|0;}return C(296);}
function CT(b){Yg(C(2),b);}
function APv(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function YB(){B.call(this);this.rR=null;}
function AVM(a,b){return AJe(a.rR,b);}
function Yz(){B.call(this);this.Bw=null;}
function AXd(a,b){AJs(a.Bw,b);}
function YA(){B.call(this);this.xV=null;}
function AS1(a,b){b=b;return AEJ(a.xV,b);}
function AHN(){Kp.call(this);this.dv=null;}
function KU(){var a=new AHN();A2i(a);return a;}
function Ia(a,b,c,d){var e=new AHN();AX9(e,a,b,c,d);return e;}
function A2i(a){ACc(a);a.dv=new B2;}
function AX9(a,b,c,d,e){ACc(a);a.dv=new B2;Hj(a,b,c,d,e);}
function F0(a){var b,c;b=a.t;c=a.dv;X(b,c.bf-c.bn|0,c.bC-c.bs|0);}
function FT(a,b){IB(a,0,0,BQ(b),CO(b));}
function IB(a,b,c,d,e){Cp(a.dv,b,c,d,e);}
function EG(a,b,c,d,e){var f;f=a.u;DJ(b,f.a+d|0,f.b+e|0,a.t,a.dv,c,a.X,a.bl,0);}
function ST(a,b,c,d){var e;e=a.u;DJ(b,e.a,e.b,a.t,a.dv,c,a.X,a.bl,d);}
function Iz(a,b,c,d,e,f,g){DJ(b,c,d,a.t,a.dv,e,!f?a.X:a.bl,!f?a.bl:a.X,g);}
function HD(a,b){BR(a.X,b);}
function Fl(a,b){BR(a.bl,b);}
function TT(){B.call(this);this.fz=null;}
function AV0(a,b){var c,d,e,f,g,h;c=b.j;d=c.a;e=a.fz.hx;f=e.t;d=d-f.a|0;g=c.b-f.b|0;X(e.u,d,g);c=a.fz;e=c.x.bw;b=b.j;d=0;a:{while(true){h=c.iY.data;if(d>=h.length)break;if(Fd(h[d],b)){b=c.qA.data[d];break a;}d=d+1|0;}b=null;}ZU(e,b);return 1;}
function ALF(a,b,c,d){if(!c&&d==2){b=a.fz;Sw(b,b.em);}return 1;}
function AVT(a,b,c){var d,e;d=Bt();e=new K;M(e);U(H(e,C(300)),c);Bk(d,L(e));if(c)return null;d=b.j;e=!Fd(a.fz.em,d)?null:d;Uc(a.fz.jy,d.a,d.b);b=a.fz;YH(b.jy,MZ(b.x.bw));if(e===null)b=A7j;else{b=new ACo;b.sS=a;b.sT=e;}return b;}
function AVl(a,b,c){var d;b=Bt();d=new K;M(d);U(H(d,C(301)),c);Bk(b,L(d));return 1;}
function Y2(){B.call(this);this.B8=null;}
function A1x(a,b){return W5(a.B8,b);}
function Y1(){B.call(this);this.sr=null;}
function AZW(a,b){return W5(a.sr,b);}
function Y0(){B.call(this);this.Dv=null;}
function AYh(a,b,c){var d,e;Bk(Bt(),C(302));d=!c?C(303):C(54);e=new K;M(e);H(H(H(e,C(304)),d),C(305));ACV(b,L(e));return 1;}
function YZ(){B.call(this);this.Eh=null;}
function AUW(a){Bk(Bt(),C(306));}
function YY(){B.call(this);this.EP=null;}
function ARj(a,b){Bk(Bt(),C(307));return 1;}
function YX(){B.call(this);this.AU=null;}
function A1D(a,b,c,d){var e,f,g;b=a.AU;e=( -d|0)/10|0;b=b.em;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Ho(){var a=this;B2.call(a);a.hq=0;a.ht=0;a.hr=0;a.hs=0;}
function CC(a){var b=new Ho();AUa(b,a);return b;}
function Dy(a,b,c){var d=new Ho();AWH(d,a,b,c);return d;}
function S(a){var b=new Ho();A00(b,a);return b;}
function EZ(a,b,c,d){var e=new Ho();RE(e,a,b,c,d);return e;}
function BZ(a){var b=new Ho();K2(b,a);return b;}
function AUa(a,b){RE(a,b,b,b,255);}
function AWH(a,b,c,d){RE(a,b,c,d,255);}
function A00(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.hq=Kt(P(b,1))*17|0;a.ht=Kt(P(b,2))*17|0;a.hr=Kt(P(b,3))*17|0;a.hs=255;}else{a.hq=LU(P(b,1),P(b,2));a.ht=LU(P(b,3),P(b,4));a.hr=LU(P(b,5),P(b,6));a.hs=J(b)!=9?255:LU(P(b,7),P(b,8));}IG(a.hq,a.ht,a.hr,a.hs,a);return;}}
function RE(a,b,c,d,e){a.hq=b;a.ht=c;a.hr=d;a.hs=e;IG(b,c,d,e,a);}
function K2(a,b){a.hq=b.hq;a.ht=b.ht;a.hr=b.hr;a.hs=b.hs;BR(a,b);}
function Kt(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LU(b,c){return (16*Kt(b)|0)+Kt(c)|0;}
var AGL=G(0);
function FS(b){return !b?I(BJ,[C(155),C(166),C(308)]):I(BJ,[C(155),C(166),C(308),C(34)]);}
function WC(){B.call(this);this.mg=null;}
function AN0(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.mg.dk;e=DQ();f=e-0.5+(DQ()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DQ()*0.3;h=0.5+DQ()*0.5;Ix(e,g,h,1.0,b.X);Ix(f,g,h,1.0,b.bl);b=a.mg;BR(b.dZ.X,b.dk.X);b=a.mg;BR(b.dZ.bl,b.dk.bl);}return 1;}
function Wz(){var a=this;B.call(a);a.nO=null;a.oh=null;}
function AGb(){var a=this;B.call(a);a.f5=null;a.cp=null;a.gV=null;a.hX=null;a.nX=null;a.cF=null;a.hL=null;a.c4=0;a.f8=0;a.oe=0;a.ko=0;a.kD=0;a.hR=0;a.kW=null;a.o6=null;a.wG=null;a.nM=null;}
function AJJ(){var a=new AGb();ASP(a);return a;}
function ASP(a){a.cp=Sv();a.gV=new Bg;a.hX=new Bg;a.cF=A8e;a.ko=(-1);a.kD=1;}
function Nr(a,b){Od(a);a.cF=b;}
function JH(a,b,c){a.f5=b;ACR(a,c);Od(a);}
function JJ(a,b){var c;a.nX=b.lA;c=b.o9.pL;BR(a.cp.X,c);c=b.jb.jH;BR(a.cp.bl,c);a.nM=b.o9;}
function MY(a){a.hL=BV(a.hL,null);X(a.gV,0,0);a.cF=A8e;a.ko=(-1);ABd(a.cp);}
function ACR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Kn(b);d=b.cf;BC(a.f5);Cm(c,a.f5);e=Nk(a.f5,1.25);f=0;a.c4=Cg(2.0,d);a.f8=Cg(3.0,d);a.oe=Cg(12.0,d);g=0;h=a.cF.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Lh(c,l.nC);n=a.oe;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fn;b.a=g;b.b=0;b=l.ex;b.a=n;b.b=e;Cp(l.kl,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gV;b.a=g;b.b=e;b=a.cp.t;n=a.hR;if(!n){m=a.c4;m=(g+m|0)+Bc(m,a.cF.data.length)|0;}else m=(f+(a.c4*2|0)|0)+(a.f8*2|0)|0;b.a=m;if(!n)e=e+(a.c4*2|0)|0;else{n=a.c4;e=(Bc(e+n|0,a.cF.data.length)+n
|0)+(a.f8*2|0)|0;}b.b=e;}
function Nl(a,b,c){var d,e,f,g,h,i,j;X(a.cp.u,b,c);d=a.c4+a.f8|0;e=a.cF.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fn;j.a=b+d|0;j.b=c+h|0;if(!a.hR){if(!i.ex.a)AEx();d=d+(i.ex.a+a.c4|0)|0;}else{if(!i.ex.b)AEx();h=h+(i.ex.b+a.c4|0)|0;}g=g+1|0;}}
function AEx(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EB(a){var b,c;b=a.gV;if(b.a&&b.b)return a.cp.t;c=new Bu;Bm(c,C(309));N(c);}
function Od(a){a.kD=1;}
function Mg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bH;if(!a.cF.data.length)return;if(a.hL===null)a.hL=CV(c);a:{if(!a.kD){d=a.gV;if(Bc(d.a,d.b))break a;}d=a.gV;if(!Bc(d.a,d.b))ACR(a,b);d=a.gV;e=d.a;f=d.b;if(!Bc(e,f))return;d=D5(c,e,f,b.cz);Cm(d,a.f5);g=Nk(a.f5,0.125);h=a.f5;i=h.eq;g=g+i-(i+h.eI)/16.0;j=a.cF.data;e=j.length;f=0;while(f<e){h=j[f];B0(d,h.nC,h.kl.bn+a.oe,g);f=f+1|0;}CM(a.hL,d);a.kD=0;Ez(d);}if(!Lf(a.cp)){d=a.cp;AI0(c,d.t,d.u,d.bl,a.c4,a.hX);d=a.cp;h=d.t;k=d.u;d=d.X;e=a.c4;l=a.hX;l.a=(h.a-e|0)-
e|0;l.b=(h.b-e|0)-e|0;Bs(c,k.a+e|0,k.b+e|0,l,d);if(a.hR){d=a.cp;AKa(c,d.t,d.u,0,0,Yk(a.nX,b.cf),a.nX.n1,a.hX);}}j=a.cF.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fn;e=h.a;f=h.b;h=d.ex;k=d.kl;l=a.hL;o=a.nM;DJ(c,e,f,h,k,l,o.rU,Vk(o,d.la),b.cz);n=n+1|0;}b:{if(a.hR){j=a.cF.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.hX;e=(a.cp.t.a-(a.c4*2|0)|0)-(a.f8*2|0)|0;h=d.ex;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fn;Bs(c,k.a+h.a|0,k.b,b,Vk(a.nM,d.la));}p=p+1|0;}}}}
function NW(a,b,c){var d,e,f,g,h,i;d=Fd(a.cp,b);e=!d?(-1):Px(a,b);f=a.ko;if(f!=e){if(f>=0){g=a.cF.data[f];g.la=0;if(a.wG!==null){h=Bt();g=Cy(g);i=new K;M(i);H(H(U(H(i,C(310)),f),C(311)),g);Bk(h,L(i));}}if(e>=0){h=a.cF.data[e];g=a.o6;if(g!==null)g.wM(b,e,h);h.la=1;}a.ko=e;}return d&&GI(c)?1:0;}
function Og(a,b,c,d){var e,f;e=Px(a,b);if(e>=0){f=a.cF.data[e];if(!ACf(f))f.mY.f();}return 1;}
function Px(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cF.data;if(c>=d.length)return (-1);e=d[c];if(Gk(b,e.fn,e.ex))return c;if(a.hR){f=e.fn;g=f.a;e=e.ex;h=e.a;g=g+h|0;i=f.b;f=a.hX;f.a=(a.cp.t.a-(a.c4*2|0)|0)-h|0;f.b=e.b;if(AES(b,g,i,f))break;}c=c+1|0;}return c;}
function AEa(a){a.hR=1;}
function AI1(){var a=this;B.call(a);a.h_=null;a.g1=0.0;a.j7=0;a.kn=0;}
function Dv(a,b){var c=new AI1();ARy(c,a,b);return c;}
function ARy(a,b,c){a.h_=b;a.g1=c;a.j7=400;a.kn=700;}
function A0U(a,b){if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){b=b;return a.g1===b.g1&&a.j7==b.j7&&a.kn==b.kn&&BO(a.h_,b.h_)?1:0;}return 0;}
function ABL(){B.call(this);this.uD=null;}
function AQX(a,b){var c;c=a.uD;if(b.bm==32)MY(c.dE);return 0;}
function ABF(){B.call(this);this.vG=null;}
function ASK(a,b){var c,d,e,f;b=b;c=a.vG;d=Nu(c.r);Gi(d,Fi(),c.oz);b=b.j;e=RP(4);f=new UP;f.Dw=c;Jp(d,b,e,f);Gn(c.M,d);return 1;}
var ABG=G();
function A25(a){Bk(Bt(),C(312));}
var ABH=G();
function AMm(a){Bk(Bt(),C(313));}
function BN(){var a=this;B.call(a);a.mY=null;a.kl=null;a.fn=null;a.ex=null;a.ng=null;a.tN=null;a.la=0;a.nC=null;}
function Xf(a,b){var c=new BN();CL(c,a,b);return c;}
function A4Z(a,b,c,d){var e=new BN();AJo(e,a,b,c,d);return e;}
function CL(a,b,c){AJo(a,b,c,null,null);}
function AJo(a,b,c,d,e){a.kl=new B2;a.fn=new Bg;a.ex=new Bg;a.nC=c;a.tN=e;a.mY=b;a.ng=d;}
function ACf(a){return a.ng===null?0:1;}
function Uu(){B.call(this);this.CB=null;}
function AYb(a,b){return b.jQ&&b.bm==32?1:0;}
function Uv(){B.call(this);this.Be=null;}
function AL4(a,b){var c,d,e,f,g,h;b=b;c=a.Be;d=Nu(c.r);Gi(d,Fi(),Dv(C(155),25.0));b=b.j;e=Q(BN,1);f=e.data;g=new BN;h=new AD4;h.Bv=c;CL(g,h,C(314));f[0]=g;Jp(d,b,C3(e),A8f);Gn(c.M,d);return 1;}
function AHt(){var a=this;B.call(a);a.pW=0;a.pY=0;}
function UY(){var a=new AHt();ATw(a);return a;}
function A4e(a,b){var c=new AHt();AK_(c,a,b);return c;}
function ATw(a){AK_(a,AKS(GS((AGI()))),GS((AGI()))^(-559038737));}
function AK_(a,b,c){var d;a.pW=b;a.pY=c;d=0;while(d<19){NF(a);d=d+1|0;}}
function NF(a){var b,c;b=a.pW;c=a.pY;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.pW=c;a.pY=b;return b;}
function AKS(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AKt(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function D6(a,b){return U0(a)*b|0;}
function U0(a){return 5.960464477539063E-8*(NF(a)&16777215);}
function QZ(a,b){var c,d,e;c=AKt(NF(a));d=ASD( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function Pb(){B.call(this);this.x0=null;}
function AQ4(a,b,c){var d;d=a.x0;if(b===0.0)L5(d,100);}
function Pa(){B.call(this);this.vS=null;}
function AZx(a,b){var c,d,e;c=a.vS;d=b.bm;if(d==32){c.lK=c.lK?0:1;e=1;}else if(d==13){L5(c,1);e=1;}else if(d!=8)e=0;else{PI(c,1);e=1;}return e;}
var ZO=G(0);
function AIa(b,c){var d;d=new UT;d.xO=b;d.xN=c;return d;}
function AIg(){var a=this;B.call(a);a.hF=null;a.ia=0;a.lU=0;a.hk=0;}
function AIq(a){var b=new AIg();AN$(b,a);return b;}
function AN$(a,b){a.hF=BL();a.hk=0;a.lU=2048;a.ia=b;}
function Kx(a,b,c){var d,e,f,g,h,i;d=c.zm(b);e=a.lU;if(d>e){c=new Bu;f=new K;M(f);BM(U(H(U(H(f,C(315)),d),C(316)),e),41);Bm(c,L(f));N(c);}if(!a.ia){b=new BU;Bm(b,C(317));N(b);}a:{b=new B2;if(d){b:{c=a.hF;if(c.q>0){c=B7(c);g=d;while(true){if(!B_(c))break b;f=Ca(c);if(f.bf>=g)break;}Cp(b,f.bn,f.bs,g,a.ia);f.bn=f.bn+g;h=f.bf-g;f.bf=h;if(h===0.0)AG7(a.hF,f);break a;}}g=a.hk;i=d;Cp(b,0.0,g,i,a.ia);BB(a.hF,ADS(i,a.hk,a.lU-d|0,a.ia));a.hk=a.hk+a.ia|0;}}return b;}
function I1(a,b){var c,d,e,f,g,h,i;a:{c=AK9(b);b=a.hF;if(b.q>0){d=B7(b);while(true){if(!B_(d))break a;e=Ca(d);if(e.bs===c.bs){f=e.bn;g=e.bf;h=f+g;i=c.bn;if(h===i){c.bn=f;c.bf=c.bf+g;Zy(d);}else{h=c.bf;if(i+h===f){c.bf=h+g;Zy(d);}}}}}}BB(a.hF,c);}
function MQ(a){return BF(a.lU,a.hk);}
function WN(){var a=this;B.call(a);a.rT=null;a.lO=null;}
function AU7(a,b,c){if(c)return A7j;return F6(a.lO.iZ,b.j,a.rT,1);}
function ALZ(a,b,c){return 1;}
function AWW(a,b){var c;c=a.lO;return Gb(c.iZ,b.j,c.xI);}
function Z9(){B.call(this);this.AI=null;}
function AQ2(a,b,c,d){var e,f;b=a.AI;e=(Wt(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.e$=Be(Bd(0,b.e$+Bc(e,f)|0),UQ(b));return 1;}
function QO(){B.call(this);this.s8=null;}
function AQR(a,b){var c,d,e;c=a.s8;if(b.cN&&b.bm==79){if(!b.bL){b=c.x.bw;d=new Xb;d.uZ=c;Kh(b,d);}else{b=c.x.bw;d=new Xa;d.xp=c;Jc(b,d);}e=1;}else e=0;return e;}
function RG(){B.call(this);this.x3=null;}
function AUj(a,b){var c,d,e,f,g,h,i;b=b;c=a.x3;d=Nu(c.r);Gi(d,Fi(),Dv(C(155),25.0));b=b.j;e=Q(BN,5);f=e.data;g=new BN;h=new T4;h.rD=c;CL(g,h,C(318));f[0]=g;g=new BN;h=new T5;h.si=c;CL(g,h,C(319));f[1]=g;g=new BN;h=new T6;h.tG=c;CL(g,h,C(320));f[2]=g;h=new BN;i=new T7;i.xB=c;CL(h,i,C(321));f[3]=h;h=new BN;i=new T8;i.x2=c;CL(h,i,C(322));f[4]=h;Jp(d,b,C3(e),A8f);Gn(c.M,d);return 1;}
function RF(){B.call(this);this.Aa=null;}
function A0x(a,b){var c,d,e,f;c=a.Aa;d=c.x.bw;e=new XM;e.wW=c;f=Q(B,1);f.data[0]=b;CU(d,e,C(323),f);}
function ABU(){B.call(this);this.m7=null;}
function AZN(a,b){var c,d,e,f,g,h;c=a.m7;d=c.qm;if(d!==null){e=c.e7.u;f=e.a;g=b.j;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.qm=g;}b=b.j;f=b.a;c=c.gG;d=c.t;f=f-d.a|0;h=b.b-d.b|0;X(c.u,f,h);return 1;}
function AT$(a,b,c){var d;if(!c){d=b.j;b=a.m7;if(!Fd(b.e7,d))d=null;b.qm=d;}return A7j;}
var AGf=G();
function ALe(b){var c,d;c=HJ(b,250,64);Hy(c,C(244),25.0);J$(c,187,187,187);B0(c,C(324),0.0,24.0);B0(c,C(324),0.25,56.0);d=CV(b);CM(d,c);Ez(c);return d;}
var Dj=G(0);
var A7u=null;var A7X=null;var A7v=null;var A7c=null;var A7x=null;var A7w=null;var A7z=null;var A7y=null;var A7B=null;var A7A=null;var A7C=null;function FM(){FM=Bn(Dj);AUm();}
function AUm(){A7u=CC(187);A7X=S(C(325));A7v=CC(55);A7c=CC(43);A7x=Dy(33,66,131);A7w=Dy(60,63,65);A7z=S(C(326));A7y=S(C(327));A7B=EZ(85,85,85,128);A7A=EZ(43,43,43,0);A7C=S(C(230));}
function YC(){var a=this;B.call(a);a.qU=null;a.l3=null;}
function AO$(a,b,c){var d;if(!c){d=F6(a.l3.iD,b.j,a.qU,1);if(d!==null)return d;}return A7j;}
function AVi(a,b,c){return 1;}
function AN5(a,b){var c;c=a.l3;return Gb(c.iD,b.j,Ry(c.x.bw));}
function V2(){B.call(this);this.rB=null;}
function A1A(a,b,c,d){var e,f;b=a.rB;e=(Wt(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fH=Be(Bd(0,b.fH+Bc(e,f)|0),Z$(b));return 1;}
function ADk(){B.call(this);this.wF=null;}
function ANi(a,b){var c,d;a:{c=a.wF;switch(b.bm){case 67:QB(c);d=1;break a;case 86:ZR(c);d=1;break a;default:}d=0;}return d;}
var ADj=G();
function AYn(a,b,c){return 0;}
function ADi(){B.call(this);this.sA=null;}
function ANo(a,b,c){var d,e;d=a.sA;c=d.ef+1|0;d.ef=c;d=JT(F(Ks));e=new K;M(e);H(H(U(e,c),C(328)),d);e=L(e);$rt_globals.console.info($rt_ustr(e));ACV(b,e);return 1;}
var ADh=G();
function AQh(a){return null;}
function ADl(){B.call(this);this.zS=null;}
function A07(a){var b,c;b=a.zS;c=new VL;c.qQ=b;return c;}
function Sf(){B.call(this);this.DX=null;}
function ATN(a,b){return 0;}
function Pz(){B.call(this);this.zf=null;}
function ALV(a,b){var c;c=a.zf;if(b.jQ&&b.bm==27){b=ADw(c.M);if(b!==null){b=b.di;if(b===null){b=new F5;Y(b);N(b);}b.i7.f();}}return 0;}
function PA(){B.call(this);this.vQ=null;}
function AXB(a,b){var c,d,e,f,g,h,i;b=b;c=a.vQ;d=Nu(c.r);Gi(d,Fi(),Dv(C(155),25.0));b=b.j;e=Q(BN,1);f=e.data;g=new BN;h=c.M;i=new Xz;i.yR=c;CL(g,OB(h,i),C(329));f[0]=g;Jp(d,b,C3(e),A8f);Gn(c.M,d);return 1;}
function PB(){B.call(this);this.Bq=null;}
function AZL(a,b){var c,d,e;c=a.Bq;d=c.eK;if(d!==null){e=new AAV;e.B1=c;e.B2=b;GK(d,b,e);}}
function PC(){B.call(this);this.zc=null;}
function A1s(a,b){var c,d,e;b=b;c=a.zc;if(DO(c.r,c.eK)){d=c.me;b=b.j;e=c.eK;GQ(d,b,e,c,e,c,new XK);}return 1;}
function AA3(){B.call(this);this.qY=null;}
function ARR(a,b){var c,d,e,f,g,h;b=b;c=a.qY;d=Q(BN,2);e=d.data;f=new BN;g=c.M;h=new Zs;h.Am=c;CL(f,OB(g,h),C(330));e[0]=f;g=new BN;f=c.M;h=new Zr;h.r5=c;CL(g,OB(f,h),C(331));e[1]=g;f=C3(d);h=c.M;c=c.kd;Me(h,c.cS,c.i1,b.j,f);return 1;}
function Uz(){B.call(this);this.Cy=null;}
function ARS(a,b){return 1;}
function Uy(){B.call(this);this.tZ=null;}
function ARi(a,b){var c,d;c=a.tZ;if(b.bm!=32)d=0;else{AA2(c.fO,AIA());d=1;}return d;}
function XB(){B.call(this);this.ya=null;}
function ANI(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.ya;d=c.c9;if(d===null)e=1;else{if(!BW(d.fY,b.j)){d=c.c9.gq;f=b.j;g=Q(BN,1);h=g.data;b=new BN;i=new U5;i.vA=c;CL(b,i,C(332));h[0]=b;Lk(d,f,C3(g));}else{c=c.c9;b=b.j;if(BW(c.fY,b)){d=c.gq;f=c.fY;i=c.Ax;j=d.bQ;BC(j);k=new Q2;k.qH=j;j=new Q1;j.BV=c;GQ(d,b,f,i,f,k,j);}}e=1;}return e;}
var AHe=G(0);
function AKz(b){H1(b,A4x(C(333),C(193),AB_(C(334))));}
function QV(){B.call(this);this.Fs=null;}
function APD(a,b){return 0;}
var Dp=G(0);
var A7E=null;var A8g=null;var A7G=null;var A7F=null;var A7I=null;var A7H=null;var A7K=null;var A7J=null;var A7M=null;var A7L=null;var A7N=null;function AN_(){AN_=Bn(Dp);AS0();}
function AS0(){A7E=CC(206);A8g=S(C(335));A7G=S(C(336));A7F=S(C(237));A7I=S(C(337));A7H=S(C(226));A7K=S(C(338));A7J=S(C(339));A7M=EZ(107,106,107,128);A7L=EZ(30,31,34,0);A7N=S(C(239));}
function Co(){CH.call(this);this.lb=null;}
var A8h=null;var A8i=null;var A8j=null;var A8k=null;var A8l=null;var A7l=null;var A8m=null;var A8n=null;var A8o=null;var A8p=null;var A8q=null;var A8r=null;var A8s=null;var A8t=null;var A8u=null;var A7O=null;function T3(){T3=Bn(Co);AYv();}
function DV(a,b,c){var d=new Co();Z3(d,a,b,c);return d;}
function A4P(a,b,c,d){var e=new Co();ADu(e,a,b,c,d);return e;}
function Z3(a,b,c,d){T3();DK(a,b,c);a.lb=JM(d,null);}
function ADu(a,b,c,d,e){T3();DK(a,b,c);a.lb=JM(d,e);}
function AYv(){var b,c;b=new Co;AN_();Z3(b,C(340),0,A8g);A8h=b;A8i=DV(C(341),1,S(C(342)));A8j=DV(C(343),2,S(C(344)));A8k=DV(C(345),3,S(C(346)));A8l=DV(C(347),4,A8g);A7l=DV(C(348),5,S(C(349)));A8m=DV(C(350),6,S(C(351)));A8n=DV(C(352),7,S(C(353)));A8o=DV(C(354),8,S(C(355)));c=new Co;FM();ADu(c,C(356),9,A7X,S(C(338)));A8p=c;A8q=A4P(C(357),10,A7X,S(C(240)));A8r=DV(C(358),11,S(C(359)));A8s=DV(C(360),12,S(C(361)));A8t=DV(C(362),13,A8g);b=DV(C(363),14,S(C(364)));A8u=b;A7O=I(Co,[A8h,A8i,A8j,A8k,A8l,A7l,A8m,A8n,A8o,
A8p,A8q,A8r,A8s,A8t,b]);}
function Ku(){var a=this;B.call(a);a.g9=null;a.mS=null;}
function JM(a,b){var c=new Ku();AY0(c,a,b);return c;}
function AY0(a,b,c){a.g9=b;a.mS=c;}
function I0(){var a=this;B.call(a);a.lA=null;a.tk=null;a.oF=null;a.Ej=3;a.jb=null;a.BH=null;a.Fv=null;a.o9=null;a.m3=null;a.oQ=null;}
function A8v(a,b,c,d,e,f,g){var h=new I0();LW(h,a,b,c,d,e,f,g);return h;}
function LW(a,b,c,d,e,f,g,h){a.tk=Dv(C(166),16.0);a.oF=Dv(C(14),16.0);a.Ej=3;a.BH=b;a.Fv=c;a.jb=d;a.o9=e;a.lA=f;a.m3=g;a.oQ=h;}
function AJS(){var a=this;B.call(a);a.n1=null;a.tf=0;}
function AH4(a,b){var c=new AJS();A0Z(c,a,b);return c;}
function A0Z(a,b,c){var d;d=new B2;a.n1=d;a.tf=b;d.bC=c;}
function Yk(a,b){return Cg(a.tf,b);}
var DP=G(0);
var A7S=null;var A7T=null;var A7P=null;var A7Q=null;var A7R=null;var A7_=null;var A8a=null;var A7U=null;var A7V=null;function AU4(){AU4=Bn(DP);AZP();}
function AZP(){A7S=S(C(226));A7T=S(C(365));A7P=S(C(242));A7Q=S(C(351));A7R=S(C(335));A7_=S(C(226));A8a=S(C(366));A7U=S(C(367));A7V=Dy(43,45,48);}
var X7=G(0);
var Yh=G();
function AXh(a,b,c){var d,e;d=b;e=c;b=new K;M(b);U(H(U(H(b,C(368)),d),C(369)),e);CT(L(b));return d+e|0;}
var X8=G(0);
var Yf=G();
function AXY(a,b,c){var d,e;d=b;e=c;b=new K;M(b);EH(H(EH(H(b,C(370)),d),C(369)),e);CT(L(b));return d+e;}
var AE6=G();
var AIe=G(0);
function Ve(){B.call(this);this.ol=null;}
var A8e=null;function LE(){var a=new Ve();AIJ(a);return a;}
function AIJ(a){a.ol=BL();}
function D2(a,b,c){Na(a,C9(b,c));}
function C9(b,c){return Xf(c,b);}
function FJ(a,b,c){I5(a,b,c,null);}
function I5(a,b,c,d){Na(a,A4Z(null,b,c,d));}
function Na(a,b){BB(a.ol,b);}
function G0(a){return C3(Gp(a.ol,A8e));}
function AIi(){A8e=Q(BN,0);}
var DT=G(0);
var A75=null;var A76=null;var A72=null;var A73=null;var A74=null;var A79=null;var A7$=null;var A77=null;var A78=null;function AYW(){AYW=Bn(DT);AZy();}
function AZy(){A75=S(C(235));A76=S(C(371));A72=S(C(279));A73=S(C(372));A74=S(C(325));A79=S(C(235));A7$=S(C(371));A77=EZ(118,121,122,128);A78=Dy(63,66,68);}
var H0=G(0);
var Qc=G();
function A0n(a,b,c,d){var e;b=Bt();d=Cy(d);e=new K;M(e);H(H(U(H(e,C(373)),c),C(311)),d);Bk(b,L(e));}
var Qd=G();
function TV(){B.call(this);this.z8=null;}
function AZq(a,b){var c;c=a.z8.lO;c.e$=FX(b,UQ(c));}
function PT(){B.call(this);this.DB=null;}
function ANU(a,b){var c,d,e,f;c=b.data;b=Bt();d=Cy(c[0]);e=new K;M(e);H(H(e,C(262)),d);Bk(b,L(e));b=Bt();f=c[1];d=new K;M(d);H(H(d,C(374)),f);Bk(b,L(d));}
function PS(){B.call(this);this.EL=null;}
function AMB(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bt();e=Cy(c[0]);f=new K;M(f);H(H(f,C(262)),e);Bk(d,L(f));g=EQ(K$(b,1));b=Bt();d=Cy(c[1]);if(g===null)c=C(23);else{c=new K;M(c);BY(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BY(c,C(37));BM(c,i[h]);h=h+1|0;}BY(c,C(38));c=L(c);}e=new K;M(e);H(H(H(H(e,C(375)),d),C(376)),c);Bk(b,L(e));}
function PP(){B.call(this);this.Ce=null;}
function ALN(a,b){ADv(a.Ce,b);}
function PN(){B.call(this);this.EU=null;}
function A2H(a,b){var c,d,e,f,g;c=b.data;d=Bt();e=Cy(c[0]);f=new K;M(f);H(H(f,C(262)),e);Bk(d,L(f));g=CQ(K$(b,1));b=Bt();d=Cy(c[1]);c=AGx(g);e=new K;M(e);H(H(H(H(e,C(377)),d),C(378)),c);Bk(b,L(e));}
var AHW=G();
function UU(){B.call(this);this.tv=null;}
function AXZ(a,b){var c;c=a.tv.l3;c.fH=FX(b,Z$(c));}
function ACh(){B.call(this);this.DC=null;}
function AOS(a,b){return 0;}
function AKE(){var a=this;B.call(a);a.kt=null;a.o1=null;a.gR=null;a.Fj=null;}
function AB_(a){var b=new AKE();A0P(b,a);return b;}
function A0P(a,b){var c,d,e;c=null;d=null;e=null;a.kt=c;a.o1=d;a.gR=b;a.Fj=e;}
function ACt(a){var b,c;b=a.gR;if(b===null)return C(21);c=AFI(b,C(379));return c==(-1)?a.gR:Dw(a.gR,c+1|0);}
function AWn(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.kt,c.kt)&&BO(a.o1,c.o1)&&BO(a.gR,c.gR)?1:0;}return 0;}
function I8(){var a=this;B.call(a);a.ud=null;a.q$=null;a.rK=null;a.AC=null;a.sQ=null;a.li=null;}
function A8w(a,b,c,d,e,f){var g=new I8();OH(g,a,b,c,d,e,f);return g;}
function OH(a,b,c,d,e,f,g){a.ud=b;a.q$=c;a.rK=d;a.AC=e;a.sQ=f;a.li=g;}
function Kq(){var a=this;B.call(a);a.rU=null;a.pL=null;a.uM=null;}
function A8x(a,b,c){var d=new Kq();Lb(d,a,b,c);return d;}
function Lb(a,b,c,d){a.rU=b;a.pL=c;a.uM=d;}
function Vk(a,b){return !b?a.pL:a.uM;}
function AID(){var a=this;B.call(a);a.jH=null;a.l9=null;a.ob=null;}
function AHG(a,b,c){var d=new AID();A1R(d,a,b,c);return d;}
function A1R(a,b,c,d){a.jH=b;a.l9=c;a.ob=d;}
function Ct(){CH.call(this);this.nZ=null;}
var A8y=null;var A8z=null;var A8A=null;var A8B=null;var A8C=null;var A8D=null;var A8E=null;var A8F=null;var A8G=null;var A8H=null;var A8I=null;var A8J=null;var A8K=null;var A8L=null;var A8M=null;var A7D=null;function AFh(){AFh=Bn(Ct);AX4();}
function Eb(a,b,c){var d=new Ct();ABn(d,a,b,c);return d;}
function A01(a,b,c,d){var e=new Ct();AHf(e,a,b,c,d);return e;}
function ABn(a,b,c,d){AFh();DK(a,b,c);a.nZ=JM(d,null);}
function AHf(a,b,c,d,e){AFh();DK(a,b,c);a.nZ=JM(d,e);}
function AX4(){var b;b=new Ct;FM();ABn(b,C(340),0,A7X);A8y=b;A8z=Eb(C(341),1,S(C(380)));A8A=Eb(C(343),2,S(C(381)));A8B=Eb(C(345),3,S(C(382)));A8C=Eb(C(347),4,S(C(380)));A8D=Eb(C(348),5,Dy(188,63,60));A8E=Eb(C(350),6,S(C(383)));A8F=Eb(C(352),7,S(C(384)));A8G=Eb(C(354),8,S(C(385)));A8H=A01(C(356),9,A7X,Dy(52,65,52));A8I=A01(C(357),10,S(C(386)),S(C(387)));A8J=Eb(C(358),11,S(C(388)));A8K=Eb(C(360),12,S(C(389)));A8L=Eb(C(362),13,A7X);b=Eb(C(363),14,S(C(364)));A8M=b;A7D=I(Ct,[A8y,A8z,A8A,A8B,A8C,A8D,A8E,A8F,A8G,A8H,
A8I,A8J,A8K,A8L,b]);}
var AK$=G();
function Kc(b,c){var d,e,f;if(c<=0)return C(21);d=B5(c);e=d.data;e[0]=AKu(D6(b,52));f=1;while(f<c){e[f]=AKu(D6(b,62));f=f+1|0;}return Hr(d);}
function AKu(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AFC=G();
function ALh(){var a=this;B.call(a);a.Jv=null;a.OX=null;a.IK=0;a.Pu=0;}
var AEm=G(0);
function AKB(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BJ,8);e=DM(8);f=B5(16);g=0;h=0;i=0;while(true){j=BK(i,b);if(j>0)break;k=j>=0?10:(c.bc(CX(i))).mZ;if(k==10){d=AGW(EC(f,0,g),d,h);e=ACe(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=KN(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AGW(EC(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bc(CX(j))).mZ==10){e=ACe(1,e,h);i=j;}else e=ACe(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new ZE;d=AE9(d,h);if(m.length!=h)e=Or(e,h);c.kj=d;c.CF=e;return c;}
function AIC(b){var c,d;c=J(b);BC(b);d=new PG;d.t9=b;return AKB(c,d);}
var C1=G();
var AJ8=G(C1);
var AKs=G(C1);
var AIS=G(C1);
var AI3=G(C1);
var AKH=G(C1);
function Vo(){B.call(this);this.r_=null;}
function APt(a){var b;b=a.r_;Bk(Bt(),b);}
var HK=G(CH);
var A8N=null;var A7d=null;var A8O=null;function AQB(){AQB=Bn(HK);AW1();}
function A22(a,b){var c=new HK();AEX(c,a,b);return c;}
function AEX(a,b,c){AQB();DK(a,b,c);}
function AW1(){var b;A8N=A22(C(390),0);b=A22(C(391),1);A7d=b;A8O=I(HK,[A8N,b]);}
function PG(){B.call(this);this.t9=null;}
function AVj(a,b){return PF(P(a.t9,b.bp));}
function ZE(){var a=this;B.call(a);a.kj=null;a.CF=null;}
var AIz=G();
function Cg(b,c){return CY(b*c);}
function Gs(){var a=this;B.call(a);a.hd=0;a.nE=null;}
var AFt=G();
function Ty(){var a=this;B.call(a);a.rt=null;a.uh=null;a.AG=null;}
var AIF=G(0);
function AHU(b){if(b===null)return C(182);if(!DB(b,C(392))&&!DB(b,C(393))&&!DB(b,C(394))&&!DB(b,C(395))&&!DB(b,C(396))&&!DB(b,C(397))){if(DB(b,C(398)))return C(193);if(DB(b,C(399)))return C(208);if(DB(b,C(400)))return C(203);if(!DB(b,C(401))&&!DB(b,C(402)))return C(182);return C(403);}return C(209);}
function AIb(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(J2(b)){case -1655966961:if(!Bj(b,C(203)))break a;c=4;break a;case 3401:if(!Bj(b,C(208)))break a;c=3;break a;case 98723:if(!Bj(b,C(209)))break a;c=2;break a;case 3213227:if(!Bj(b,C(403)))break a;c=5;break a;case 3254818:if(!Bj(b,C(193)))break a;c=1;break a;case 3556653:if(!Bj(b,C(182)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=En();e
=new K;M(e);H(H(e,C(404)),b);Bk(d,L(e));c=0;break b;}c=0;}return c;}
function ABc(){B.call(this);this.qI=null;}
function APy(a,b,c,d){return LT(a.qI,b,c,d);}
function V9(){B.call(this);this.wY=null;}
function A2q(a,b,c){return He(a.wY,b,c);}
function V8(){B.call(this);this.yH=null;}
function AP_(a){var b,c;b=a.yH;c=new ACb;c.vP=b;return c;}
function V$(){var a=this;B.call(a);a.DG=null;a.DH=null;a.DI=null;}
function XI(){B.call(this);this.ku=null;}
function A28(a,b){var c,d,e,f,g;c=a.ku;d=c.my;if(d!==null){e=b.j;f=e.a-d.a|0;g=e.b-d.b|0;e=c.kz;e.a=E7(0,e.a+f|0,c.gZ.a-c.jU.a|0);c=a.ku;d=c.kz;d.b=E7(0,d.b+g|0,c.gZ.b-c.jU.b|0);}a.ku.my=b.j;return 1;}
var AFA=G();
function L2(){return "clipboard" in $rt_globals.navigator?1:0;}
function AG_(){var a=this;B.call(a);a.cQ=null;a.cg=null;a.kA=null;a.kR=null;a.n3=null;a.j2=null;}
function Nu(a){var b=new AG_();A0i(b,a);return b;}
function A0i(a,b){a.cg=BL();a.j2=A8f;a.cQ=b;Ba(b.dU,a);}
function Gi(a,b,c){a.kA=c;a.n3=b;b=B7(a.cg);while(B_(b)){JJ(Ca(b),a.n3);}}
function Jp(a,b,c,d){a.j2=d;Sg(a,b,c);}
function Sg(a,b,c){var d,e;d=a.cQ;e=d.bO;if(Bc(e.a,e.b)&&d.cf!==0.0){if(a.kA!==null&&!Ju(a)){a.kR=Fm(a.cQ,a.kA);d=Vq(a,b,c,null,null);b=new R8;b.t3=a;d.kW=b;FP(a.cQ,a);return;}b=new BU;Y(b);N(b);}c=new C$;Bm(c,C(405));N(c);}
function Mr(a){if(Ju(a)){ABx(a.cQ,a);ABo(a,null);a.j2.f();a.j2=A8f;}}
function Vq(a,b,c,d,e){var f,g,h;f=AJJ();AEa(f);Nr(f,c.cC());JJ(f,a.n3);JH(f,a.kR,a.cQ);if(d===null)g=b.a;else{g=b.a;g=a.cQ.bO.a<((g+(EB(d)).a|0)+(EB(f)).a|0)?g-(EB(f)).a|0:(g+(EB(d)).a|0)-d.f8|0;}h=b.b;b=a.cQ.bO;Nl(f,Bd(0,Be(g,b.a-(EB(f)).a|0)),Bd(0,Be(h,b.b-(EB(f)).b|0)));b=new AB2;b.vE=a;b.vB=f;b.vC=e;f.o6=b;BB(a.cg,f);return f;}
function A2O(a,b,c){var d;a.kR=Fm(a.cQ,a.kA);d=B7(a.cg);while(B_(d)){JH(Ca(d),a.kR,a.cQ);}}
function AEs(a){var b,c;if(ED(a.cg))return;B$(a.cQ.bH,1);b=0;while(true){c=a.cg;if(b>=c.q)break;Mg(BG(c,b),a.cQ);b=b+1|0;}}
function AP8(a,b){var c;if(!Ju(a))return 0;a:{switch(b.bm){case 27:Mr(a);c=1;break a;default:}c=0;}return c;}
function ABo(a,b){var c,d;c=a.cg.q-1|0;a:{while(true){if(c<0)break a;d=BG(a.cg,c);if(b===d)break;EN(a.cg,c);MY(d);c=c+(-1)|0;}}}
function Ju(a){return a.cg.q<=0?0:1;}
function AR0(a){var b,c;Sh(a.cQ.dU,a);ABx(a.cQ,a);b=a.cg;c=B7(b);while(B_(c)){MY(Ca(c));}Iy(b);}
function W_(){B.call(this);this.xY=null;}
function APT(a,b){Ms(a.xY,b);}
function U7(){B.call(this);this.zB=null;}
function A2s(a,b){var c,d,e,f;c=a.zB;if(c.gF!=3&&c.fe!=3){b=b.data;c.gY=3;d=CQ(b[0]);e=EQ(b[1]);Oa(c.h,d,e);if(c.fQ){b=E3(c);f=JP(E5(),c.i2);c=new K;M(c);H(HL(H(H(c,b),C(406)),f),C(201));$rt_globals.console.info($rt_ustr(L(c)));}}}
function Q8(){B.call(this);this.zg=null;}
function AVO(a,b){var c,d,e,f,g,h;c=a.zg;if(c.fe!=3){d=b.data;c.gF=3;if((CQ(d[2])).data[0]!=1)Ms(c,b);else{e=CQ(d[0]);f=EQ(d[1]);g=c.gY!=3?0:1;RA(c.h,e,f,g);if(c.fQ){b=E3(c);h=JP(E5(),c.i2);c=new K;M(c);H(HL(H(H(c,b),C(407)),h),C(201));$rt_globals.console.info($rt_ustr(L(c)));}}}}
function PV(){B.call(this);this.kk=null;}
function AU$(a){return a.kk;}
var AJ4=G(0);
var LX=G(0);
function Rb(){B.call(this);this.up=null;}
function AV9(a,b){return Lh(a.up,b);}
function Pw(){B.call(this);this.AK=null;}
function A1H(a,b){var c,d;c=a.AK;d=b.bp;return PF(c.charCodeAt(d)&65535);}
var AGz=G();
function AI0(b,c,d,e,f,g){g.a=c.a;g.b=f;Bs(b,d.a,d.b,g,e);Bs(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bs(b,d.a,d.b+f|0,g,e);Bs(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AKa(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bs(b,j,k,i,h);Bs(b,j,k,i,h);Bs(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bs(b,l,j,i,h);Bs(b,l,j,i,h);Bs(b,l+g|0,j+g|0,i,h);}
function QP(){var a=this;B.call(a);a.cR=null;a.qg=null;a.ft=null;a.eg=0;a.cu=0;a.jc=null;a.jY=null;a.hz=0;a.w5=0;}
function Pt(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.eg;i=Bc(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}ER(c);j=d+(-1)|0;b=Dm(d);d=Bc(j,a.cu)%a.ft.b|0;GR(a,c,b,a.hz,g);JO(a.cR,c,0,d);if(!(j%a.eg|0))break;d=j;}}else{ER(b);k=a.eg-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GR(a,b,Dm(j),Bc(a.cu,k)+a.hz|0,g);k=k+(-1)|0;j=h;}CM(a.cR,b);j=Bd(i,e);}return j;}k=a.eg;h=Bc(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}ER(c);b=Dm((d+f|0)+1|0);j=d
+1|0;d=Bc(d,a.cu)%a.ft.b|0;GR(a,c,b,a.hz,g);JO(a.cR,c,0,d);if(!(j%a.eg|0))break;d=j;}}else{ER(b);d=0;while(d<a.eg){h=h+1|0;GR(a,b,Dm((h>e?h-f|0:h)+f|0),Bc(a.cu,d)+a.hz|0,g);d=d+1|0;}CM(a.cR,b);j=Be(i,e);}return j;}
function V7(b,c,d,e){c=c.data;return d<c.length&&c[d]?J4(b.d8,b,c[d]):e.k$;}
function Np(a,b,c,d,e,f){DJ(b,a.qg.a+d.a|0,c+d.b|0,a.jc,a.jY,a.cR,e,f,a.w5);}
function GR(a,b,c,d,e){B0(b,c,a.ft.a-20.0*e,d);}
var AEp=G();
function Gk(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AES(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Ub(){var a=this;B.call(a);a.p$=null;a.p_=null;a.iq=null;}
function A5d(a,b,c){var d=new Ub();AF$(d,a,b,c);return d;}
function AF$(a,b,c,d){a.p$=b;a.p_=c;a.iq=d;}
function GO(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.iq.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.h6:i.h7;k=!c?i.of:i.og;l=BK(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function L$(){var a=this;B.call(a);a.h7=0;a.og=0;a.h6=0;a.of=0;a.oX=0;}
function Nq(a,b,c,d,e){var f=new L$();A03(f,a,b,c,d,e);return f;}
function A03(a,b,c,d,e,f){a.h7=b;a.og=c;a.h6=d;a.of=e;a.oX=f;}
var SA=G(0);
var A7j=null;function AKi(){A7j=new Rw;}
function ACo(){var a=this;B.call(a);a.sS=null;a.sT=null;}
function AV$(a,b){var c,d,e;c=a.sS;d=a.sT;c=c.fz.em.u;e=c.a;b=b.j;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Cn(d,b);}
var Gf=G(I9);
var ADx=G(FC);
function ACL(){B.call(this);this.zv=null;}
function AUl(a,b){var c,d;c=a.zv;VM(c,FB(c,b.j));b=Bi(c);d=c.d;N7(b,d.w,d.A);H$(c);}
function Uk(){B.call(this);this.xG=null;}
function A14(a,b){var c,d;c=a.xG;d=c.ef+1|0;c.ef=d;c=new K;M(c);H(H(U(c,d),C(408)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function VS(){B.call(this);this.xQ=null;}
function A0E(a){var b,c;b=a.xQ;c=new K;M(c);H(H(H(c,C(409)),b),C(410));$rt_globals.console.info($rt_ustr(L(c)));}
function G6(){var a=this;B.call(a);a.c3=null;a.nQ=null;a.iA=null;}
function UL(a,b,c,d){a.c3=b;a.iA=c;a.nQ=d;}
function S_(a,b,c){var d;d=A2r(a.c3.b$,b);Fe(d,a.iA.cS);DL(d,Nc(BE(a)));b=new OS;b.sO=a;b.sN=d;Tp(d,b);b=new OR;b.uW=a;d.wP=b;AFY(d,c);return d;}
function AGm(a,b){var c,d,e;c=a.BE(b);if(c!==null){d=a.c3;e=a.iA;Me(d,e.cS,e.i1,b,c);}return c===null?0:1;}
function Zg(){var a=this;G6.call(a);a.dO=null;a.oR=null;a.pZ=null;}
function AMM(a){var b;a.dO=null;b=null;a.pZ=b;a.oR=b;}
function AXI(a,b){var c,d,e,f;if(BW(a.dO.dY,b))return ZZ(a,1,C(271));if(BW(a.dO.dV,b))return ZZ(a,0,C(272));c=Q(BN,2);d=c.data;b=new BN;e=new XD;e.zQ=a;CL(b,e,C(271));d[0]=b;b=new BN;f=new XE;f.r3=a;CL(b,f,C(272));d[1]=b;return C3(c);}
function ZZ(a,b,c){var d,e,f,g;d=Q(BN,1);e=d.data;f=new BN;g=new AAq;g.qv=a;g.qu=b;CL(f,g,c);e[0]=f;return C3(d);}
function H7(a,b){var c,d;c=a.c3.b$.e2;d=new ZP;d.yn=a;d.ym=b;Jc(c,d);}
function Vf(){B.call(this);this.AW=null;}
function AUd(a){return AA9(a.AW);}
var ADM=G(Es);
var A8P=null;function Xk(b){var c;c=new K;M(c);return L(EH(c,b));}
function AGs(){A8P=F($rt_floatcls());}
var Gw=G();
var A8Q=null;var A8R=null;var A6j=null;var A6i=null;var A6h=null;function AJA(){A8Q=DX([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A8R=AIG([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A6j=AIG([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);A6i=new ABK;A6h=new Ue;}
var JF=G();
var A8S=0;var A8T=null;var A8U=null;function AJ0(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.rh=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.na=0;c.m1=0;return;}if(f)d=e|8388608;else{d=e<<1;while(IK(Dg(Bp(d),Bp(8388608)),FL)){d=d<<1;f=f+(-1)|0;}}g=AJ7(A8U,f);if(g<0)g= -g|0;h=A8U.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JC(d,A8T.data[e],i);if(j<A8S){while($rt_ucmp(j,A8S)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A8U.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JC(d,
A8T.data[e],i);}e=d<<1;d=e+1|0;h=A8T.data;f=g+1|0;k=h[f];l=i-1|0;m=JC(d,k,l);n=JC(e-1|0,A8T.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bc($rt_udiv(j,o),o):q<0?Bc($rt_udiv(j,k),k)+k|0:Bc($rt_udiv((j+(k/2|0)|0),k),k);if(DG(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.na=d;c.m1=g-50|0;}
function JC(b,c,d){return GS(Gd(Ci(Dg(Bp(b),D(4294967295, 0)),Dg(Bp(c),D(4294967295, 0))),32-d|0));}
function AI$(){A8S=$rt_udiv((-1),10);A8T=DX([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A8U=DX([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Ue(){var a=this;B.call(a);a.na=0;a.m1=0;a.rh=0;}
function Ou(){var a=this;B.call(a);a.EB=null;a.wI=0.0;a.CY=0.0;a.gv=null;a.jo=null;a.n0=null;a.gb=0;}
function AK1(a,b){var c;if(b!==null){a.jo=b;return a;}c=new BU;Bm(c,C(411));N(c);}
function AGi(a,b){var c;if(b!==null){a.n0=b;return a;}c=new BU;Bm(c,C(411));N(c);}
function Y8(a,b,c,d){var e,f,g,$$je;e=a.gb;if(!(e==2&&!d)&&e!=3){a.gb=d?2:1;while(true){try{f=AHl(a,b,c);}catch($$e){$$je=EY($$e);if($$je instanceof Bu){g=$$je;N(AWw(g));}else{throw $$e;}}if(If(f))return f;if(I3(f)){if(d&&D9(b)){g=a.jo;Hn();if(g===A6M)return Eu(Ch(b));if(Ch(c)<=J(a.gv))return A6P;FA(b,b.Z+Ch(b)|0);if(a.jo===A6N)Nm(c,a.gv);}return f;}if(RD(f)){g=a.jo;Hn();if(g===A6M)return f;if(g===A6N){if(Ch(c)<J(a.gv))return A6P;Nm(c,a.gv);}FA(b,b.Z+La(f)|0);}else if(Ml(f)){g=a.n0;Hn();if(g===A6M)break;if(g
===A6N){if(Ch(c)<J(a.gv))return A6P;Nm(c,a.gv);}FA(b,b.Z+La(f)|0);}}return f;}b=new C$;Y(b);N(b);}
function AII(a,b){var c,d,e,f;c=a.gb;if(c&&c!=3){b=new C$;Y(b);N(b);}if(!Ch(b))return AHO(0);if(a.gb)a.gb=0;d=AHO(Bd(8,Ch(b)*a.wI|0));while(true){e=Y8(a,b,d,0);if(I3(e))break;if(If(e))d=AAx(a,d);if(!NL(e))continue;Ud(e);}b=Y8(a,b,d,1);if(NL(b))Ud(b);while(true){f=a.gb;if(f!=3&&f!=2)break;a.gb=3;if(I3(A6Q)){d.eo=d.Z;d.Z=0;d.jL=(-1);return d;}d=AAx(a,d);}b=new C$;Y(b);N(b);}
function AAx(a,b){var c,d,e;c=b.iC;d=KN(c,Bd(8,c.data.length*2|0));e=AJK(d,0,d.data.length);FA(e,b.Z);return e;}
function ACQ(){var a=this;B.call(a);a.bq=0;a.bv=0;}
function DR(a,b){var c=new ACQ();AJQ(c,a,b);return c;}
function AJQ(a,b,c){a.bq=b;a.bv=c;}
function ALO(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.bq==c.bq&&a.bv==c.bv?1:0;}return 0;}
function ASc(a){var b,c,d,e;b=Q(B,2).data;b[0]=CX(a.bq);b[1]=CX(a.bv);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bp)|0;d=d+1|0;}return c;}
function AZ4(a,b){var c;b=b;c=BK(a.bq,b.bq);if(!c)c=BK(a.bv,b.bv);return c;}
var AFK=G(C1);
function UP(){B.call(this);this.Dw=null;}
function AMH(a){Bk(Bt(),C(412));}
var AD6=G(0);
var A8f=null;function AG6(){A8f=new Xj;}
function Zs(){B.call(this);this.Am=null;}
function ATd(a){Zc(a.Am);}
function Zr(){B.call(this);this.r5=null;}
function AYA(a){var b,c,d,e,f;b=a.r5;c=new M_;d=b.kd;e=b.M;f=new Wj;f.Ca=b;Xg(c,d,e,f);}
function HZ(){CB.call(this);this.cl=null;}
function MD(a,b){var c;if(a.cl===null){a.cl=b;return;}c=new Eg;Y(c);N(c);}
function AZi(a){var b,c,d;b=a.cl.data;c=b.length;d=0;while(d<c){b[d].b4();d=d+1|0;}}
function AQK(a,b){var c,d,e;c=a.cl.data;d=c.length;e=0;while(e<d){c[e].dw(b);e=e+1|0;}}
function AVg(a,b){var c,d,e,f;c=0;d=a.cl.data;e=d.length;f=0;while(f<e){c=c|d[f].cj(b);f=f+1|0;}return c;}
function ANw(a,b,c,d){JQ(a,b,c,d);a.BT();}
function A1N(a,b,c,d){var e,f,g,h,i;e=0;f=a.cl.data;g=f.length;h=0;while(h<g){i=f[h];if(BW(i,b.j))e=e|i.cy(b,c,d);h=h+1|0;}return e;}
function ATb(a,b,c){var d,e,f,g,h;d=a.cl.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(BW(g,b.j)){h=g.cn(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A1X(a,b,c){var d,e,f,g,h;d=0;e=a.cl.data;f=e.length;g=0;while(g<f){h=e[g];if(BW(h,b.j))d=d|h.dB(b,c);g=g+1|0;}return d;}
function A2j(a,b){var c,d,e,f,g;c=0;d=a.cl.data;e=d.length;f=0;while(f<e){g=d[f];if(BW(g,b.j))c=c|g.bU(b);f=f+1|0;}return c;}
function AN9(a,b,c,d){var e,f,g,h,i;e=0;f=a.cl.data;g=f.length;h=0;while(h<g){i=f[h];if(BW(i,b.j))e=e|i.dy(b,c,d);h=h+1|0;}return e;}
function A18(a){var b,c,d;b=a.cl.data;c=b.length;d=0;while(d<c){b[d].ke();d=d+1|0;}}
function Q0(){var a=this;HZ.call(a);a.sb=null;a.Ax=null;a.gq=null;a.oJ=null;a.kQ=null;a.gs=null;a.fY=null;}
function APo(a){var b,c,d,e;b=a.k.a/4|0;c=b+Dz(a,1.0)|0;d=AJX(a.i);e=BF(b,a.k.b);a.cl.data[0].dz(d,e,a.bS);d.a=a.i.a+b|0;e.a=c-b|0;a.cl.data[1].dz(d,e,a.bS);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.cl.data[2].dz(d,e,a.bS);}
function AXD(a){var b,c;b=AHc(a.fY);c=AHQ(a.kQ);return BF((b.a+a.oJ.k.a|0)+c.a|0,b.b);}
function Y6(){B.call(this);this.BP=null;}
function AVw(a,b){var c,d;c=a.BP;d=c.ef+1|0;c.ef=d;c=b.iQ;b=new K;M(b);H(H(U(b,d),C(413)),c);$rt_globals.console.info($rt_ustr(L(b)));}
var Rw=G();
function AZf(a,b){}
function Fr(){var a=this;CB.call(a);a.cJ=null;a.U=null;a.fg=null;}
function A8V(){var a=new Fr();LR(a);return a;}
function LR(a){E4(a);a.cJ=new Bg;a.U=new Bg;}
function AXp(a,b){a.fg=b;}
function Tg(a,b,c){X(a.cJ,b,c);}
function Tu(a){var b;b=a.fg;if(b!==null)ACz(b);}
function AFJ(a){var b;b=a.U;b.a=W0(a,b.a);b=a.U;b.b=ACW(a,b.b);}
function AGQ(a,b){var c,d;c=a.U.a;d=W0(a,b);a.U.a=d;return c==d?0:1;}
function ALm(a,b){var c,d;c=a.U.b;d=ACW(a,b);a.U.b=d;return c==d?0:1;}
function ACW(a,b){return Bd(0,Be(b,a.cJ.b-a.k.b|0));}
function W0(a,b){return Bd(0,Be(b,a.cJ.a-a.k.a|0));}
function Rq(){var a=this;Fr.call(a);a.bW=null;a.d9=null;a.ic=null;a.AL=null;a.en=null;a.b6=null;a.e4=null;a.fP=null;a.dR=0;a.fM=0;a.BS=null;a.d7=0;a.eQ=0;a.hH=0;a.f9=0;a.f0=0;a.cV=0;a.e5=null;a.kp=null;a.yU=null;a.iz=null;}
function A5v(a,b){var c=new Rq();AKY(c,a,b);return c;}
function AKY(a,b,c){LR(a);a.d9=Sv();a.ic=new Bg;a.b6=A8W;a.e4=Q(J8,0);a.d7=0;a.eQ=0;a.hH=0;a.f9=0;a.f0=0;a.e5=AIq(0);a.iz=JV();a.bW=b;a.kp=c;a.BS=c;Qw(a);}
function Qw(a){a.dR=Cg(2.0,a.bW.cf);}
function VD(a){return a.b6.data.length?0:1;}
function Xc(a,b){Ts(a);a.b6=b;}
function Ts(a){X(a.ic,0,0);}
function We(a,b,c){a.yU=b;a.AL=c;a.en=null;a.e5=null;a.fM=0;Ts(a);}
function A12(a){a.fP=BV(a.fP,null);X(a.ic,0,0);EW(a.iz);a.e5=null;a.b6=A8W;a.e4=null;a.d7=0;a.eQ=0;a.hH=0;ABd(a.d9);a.kp=null;}
function AWK(a,b,c){Yw(a);Qw(a);a.en=null;a.e5=null;a.fM=0;}
function AU6(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=Kn(a.bW);if(VD(a))return;K4(a);Cm(c,a.en);d=Ej(a);e=AIa(c,a.fM);f=Be(H_(a.k.b,d),a.b6.data.length)+30|0;g=a.yU.BH;h=a.e4.data;d=h.length;if(d<f){a:{i=a.f9;j=a.f0;k=a.b6;l=a.e5;m=a.iz;n=Q(J8,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.g3!==c){ACE(l,q,m);o[f]=MR(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=MR(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=MR(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ACE(l,c,m);h[f]=null;}f=f+1|0;}a.e4=n;Cn(a.ic,MQ(a.e5));YJ(a,a.bW.bH);}a.f9=Be((a.U.b+a.dR|0)/(Ej(a)+a.dR|0)|0,a.b6.data.length-1|0);a.f0=Be((((a.U.b+a.d9.t.b|0)-1|0)+a.dR|0)/(Ej(a)+a.dR|0)|0,a.b6.data.length-1|0);if(!a.e4.data.length)return;AH7(a,e);ACv(a,b);q=g.AC;c=a.i;Bs(b,c.a,c.b,a.k,q);c=a.d9.u;i=c.a;j=c.b;p=Cs(a.bW,2.0);s=a.bW.d1;t=a.f9;u=i+p|0;while(t<=a.f0){l=X6(a,t);d=Bc(t,Ej(a));v
=t+1|0;w=d+Bc(v,a.dR)|0;x=u+a.d7|0;y=x+a.eQ|0;z=a.cV!=t?0:1;m=!z?q:g.sQ;ba=!z?g.ud:g.li;bb=!z?g.q$:g.li;bc=!z?g.rK:g.li;bd=(j+w|0)-a.U.b|0;DJ(b,u,bd,l.jw,l.tu,a.fP,ba,m,a.bW.cz);DJ(b,x,bd,l.j1,l.lf,a.fP,bb,m,a.bW.cz);DJ(b,y,bd,l.jx,l.kP,a.fP,bc,m,a.bW.cz);d=l.jw.a;be=u+d|0;X(s,Bd(0,a.d7-d|0),l.jw.b);Bs(b,be,bd,s,m);d=u+a.d7|0;f=l.j1.a;bf=d+f|0;X(s,Bd(0,a.eQ-f|0),l.j1.b);Bs(b,bf,bd,s,m);d=l.jx.a;bg=y+d|0;X(s,Bd(0,(((a.d9.t.a-d|0)-a.eQ|0)-a.d7|0)-p|0),l.jx.b);Bs(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;X(s,p,Ej(a)+a.dR
|0);Bs(b,bh,bd,s,q);t=v;}Gc(b);}
function AH7(a,b){var c,d,e,f,g,h;c=0;d=a.f9;while(d<=a.f0){e=X6(a,d);if(!(e!==null&&e.g3===a.b6.data[d])){f=a.e4.data;g=a.b6;e=a.e5;h=a.iz;c=d%f.length|0;if(f[c]!==null)ACE(e,f[c],h);f[c]=MR(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cn(a.ic,MQ(a.e5));YJ(a,a.bW.bH);}}
function YJ(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.ic;c=D5(b,c.a+150|0,c.b,a.bW.cz);Cm(c,a.en);d=a.en;e=d.eq;f=e-(e+d.eI)/16.0;g=a.e4.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.g3.lx;k=d.lf;B0(c,j,k.bn+a.fM,f+k.bs);j=d.g3.lP;d=d.kP;B0(c,j,d.bn+a.fM,f+d.bs);}i=i+1|0;}a:{d=a.iz;if(d.c8>0){h=d.c0;i=0;b:while(true){g=d.b8.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cO;l=j.cU;k=k;l=l.mc;B0(c,k,l.bn+a.fM,f+l.bs);j=j.cY;if(h!=d.c0)break b;}i=i+1|0;}b=new Ib;Y(b);N(b);}}if(a.fP===null)a.fP=CV(b);CM(a.fP,
c);Ez(c);}
function X6(a,b){var c;c=a.e4.data;return c[b%c.length|0];}
function AZ2(a,b){Cn(a.d9.t,b);}
function A08(a,b){Cn(a.d9.u,b);}
function Yw(a){var b,c,d,e,f,g,h,i,j;b=Kn(a.bW);if(VD(a))return;K4(a);Cm(b,a.en);c=AIa(b,a.fM);d=a.b6.data;e=d.length;f=0;while(f<e){g=d[f];h=NA(c,g.hM);i=NA(c,g.lx);j=NA(c,g.lP);a.d7=Bd(a.d7,h);a.eQ=Bd(a.eQ,i);a.hH=Bd(a.hH,j);f=f+1|0;}}
function AP1(a,b){var c;c=AAk(a,b.j);if(c>=0)a.cV=c;return Fd(a.d9,a.i)&&GI(a.bW.cW)?1:0;}
function AOe(a,b,c){if(!Fd(a.d9,b.j)&&!Lf(a.d9)){b=a.BS;if(b!==null)b.f();}return null;}
function AR7(a,b,c,d){var e;if(d==1){e=AAk(a,b.j);if(e>=0)UG(a,a.b6.data[e]);}return 1;}
function UG(a,b){a.kp.f();b.t4.f();}
function AAk(a,b){var c,d,e;if(!a.e4.data.length)return (-1);c=Ej(a);d=(b.b-a.i.b|0)+a.U.b|0;e=a.dR;e=(d+e|0)/(c+e|0)|0;if(e<a.b6.data.length)return e;return (-1);}
function Ej(a){return EA(a.en);}
function K4(a){var b;if(a.en===null){b=Fm(a.bW,a.AL);a.en=b;a.e5=AIq(EA(b));a.fM=CY(a.en.p5);}}
function A1j(a,b){var c,d,e;a:{switch(b.bm){case 13:UG(a,a.b6.data[a.cV]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cV=a.f9;b=a.fg;c=a.U;Ji(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.cV=a.f0;b=a.fg;c=a.U;Ji(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.cV=a.b6.data.length-1|0;break a;case 36:case 37:a.cV=0;break a;case 38:d=a.cV;e=a.b6.data.length;a.cV=((d+e|0)
-1|0)%e|0;break a;case 40:a.cV=(a.cV+1|0)%a.b6.data.length|0;break a;default:break a;}a.kp.f();return 0;}e=a.cV;if(e<=a.f9)Ji(a.fg,a.U.a,Bc(e,Ej(a))+Bc(a.cV,a.dR)|0);else if(e>=a.f0)Ji(a.fg,a.U.a,(Bc(e+1|0,Ej(a))+Bc(a.cV+2|0,a.dR)|0)-a.k.b|0);return 0;}
var Vb=G();
function ATS(a){}
function AFg(){var a=this;CB.call(a);a.oq=null;a.xR=null;a.AE=null;a.bP=null;a.dp=null;a.dD=null;a.uk=null;a.rf=null;a.vH=0.0;a.pu=null;a.oT=null;}
function GH(a,b){var c=new AFg();AUP(c,a,b);return c;}
function AUP(a,b,c){var d;c=c.cW;E4(a);d=new P2;d.yT=a;a.xR=d;d=new P1;d.zE=a;a.AE=d;a.vH=10.0;a.bP=b;a.oq=c;b.fg=a;}
function ASO(a){var b;b=a.bP;b.fg=null;a.bP=BV(b,null);}
function Jh(a,b,c){var d;a.oT=c;a.pu=b;d=a.dp;if(d!==null)H8(d,b,c);b=a.dD;if(b!==null)H8(b,a.pu,a.oT);}
function AOE(a,b,c,d){JQ(a,b,c,d);JQ(a.bP,b,c,d);if(d!==0.0)ACz(a);}
function Ji(a,b,c){Ld(a,b);LI(a,c);}
function ACz(a){var b;AFJ(a.bP);b=FR(a)*3|0;if(ZB(a,b))T1(a);else a.dD=null;if(AD3(a,b))WS(a);else a.dp=null;}
function AD3(a,b){var c;c=a.k.b;return c>b&&a.bP.cJ.b>c?1:0;}
function ZB(a,b){var c;c=a.k.a;return c>b&&a.bP.cJ.a>c?1:0;}
function T1(a){var b,c,d,e,f,g;b=a.dD;if(b===null)b=Jb();a.dD=b;Pg(a,b);c=a.dD;b=a.bP;d=b.U.a;e=a.i;f=e.a;g=a.k;Rz(c,d,f,g.a,b.cJ.a,e.b+g.b|0,FR(a));}
function WS(a){var b,c,d,e,f,g;b=a.dp;if(b===null)b=Jb();a.dp=b;Pg(a,b);c=a.dp;b=a.bP;d=b.U.b;e=a.i;f=e.b;g=a.k;Kr(c,d,f,g.b,b.cJ.b,e.a+g.a|0,FR(a));}
function FR(a){return Dz(a,a.vH);}
function Pg(a,b){H8(b,a.pu,a.oT);}
function A0v(a,b){var c;a.bP.dw(b);if(!(a.dp===null&&a.dD===null)){B$(b,1);c=a.dp;if(c!==null)GW(c,b);c=a.dD;if(c!==null)GW(c,b);c=a.dp;if(c!==null)G2(c,b);c=a.dD;if(c!==null)G2(c,b);B$(b,0);}}
function TB(a,b){var c,d;a:{b:{c=a.dp;if(!(c!==null&&IN(c,b))){c=a.dD;if(c===null)break b;if(!IN(c,b))break b;}d=1;break a;}d=0;}return d;}
function AS_(a,b,c,d){return !TB(a,b.j)&&!a.bP.cy(b,c,d)?0:1;}
function Ld(a,b){var c;b=AGQ(a.bP,b);if(ZB(a,FR(a)*3|0))T1(a);if(b){c=a.uk;if(c!==null)c.f();}}
function LI(a,b){var c;if(ACY(a,b)){c=a.rf;if(c!==null)c.f();}}
function ACY(a,b){var c;c=ALm(a.bP,b);if(AD3(a,FR(a)*3|0))WS(a);return c;}
function ASQ(a,b,c){var d,e;d=a.dp;if(d!==null){e=F6(d,b.j,a.xR,1);if(e!==null)return e;}d=a.dD;if(d!==null){e=F6(d,b.j,a.AE,0);if(e!==null)return e;}return a.bP.cn(b,c);}
function AQ7(a,b,c){return TB(a,b.j)?1:0;}
function AQT(a,b){var c,d,e;c=a.dp;d=c!==null&&Gb(c,b.j,a.oq)?1:0;c=a.dD;e=c!==null&&Gb(c,b.j,a.oq)?1:0;return !d&&!e&&!a.bP.bU(b)?0:1;}
function AW4(a,b,c,d){var e,f;if(!BW(a,b.j))return 0;e=Cg(d*0.5,a.bS);f=Cg(c*0.5,a.bS);if(b.bL){f=f+e|0;e=0;}if(a.dp!==null&&e)LI(a,a.bP.U.b+e|0);if(a.dD!==null&&f)Ld(a,a.bP.U.a+f|0);return 1;}
function AHQ(a){var b,c;b=FR(a);c=a.bP.hW();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
var ADF=G();
function ANx(a,b){}
function ADH(){var a=this;B.call(a);a.ux=null;a.uy=null;}
function ALP(a,b){var c,d,e;c=a.ux;d=a.uy;b=Cy(b);e=new K;M(e);H(H(H(e,d),C(29)),b);DL(c,L(e));}
function Qe(){var a=this;Fr.call(a);a.mj=null;a.pJ=null;a.yf=null;a.r8=0.0;}
function AT1(a){var b;b=Cg(20.0,a.bS);return BF(b,b);}
function AZ8(a,b){Tg(a,b.a*3|0,b.b*5|0);a.yf.g(b);}
function AUf(a,b){var c,d,e,f,g,h,i,j,k,l,m;AK4(a,b);ACv(a,b);c=Cg(30.0,a.bS);d=a.U;e=d.a;f=Bc(e/c|0,c);g=d.b;h=Bc(g/c|0,c);d=a.k;i=Bc(((e+d.a|0)-1|0)/c|0,c);e=Bc(((g+d.b|0)-1|0)/c|0,c);d=a.pJ;d.b=c;d.a=c;a.mj.bC=1.0;while(h<=e){g=a.i.b-a.U.b|0;j=f;while(j<=i){k=a.i.a-a.U.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AKS(l);m=m+1|0;}Vn(AKt(l),0.75,a.r8,a.mj);Bs(b,k+j|0,g+h|0,a.pJ,a.mj);j=j+c|0;}h=h+c|0;}Gc(b);}
function AQr(a,b,c){return A7j;}
function ADG(){var a=this;B.call(a);a.qM=null;a.qN=null;}
function AS4(a){var b,c;b=a.qM;c=a.qN;Iu(b.M,c);J0(c);}
function Ur(){var a=this;CB.call(a);a.f_=null;a.hE=null;a.jI=null;a.ez=null;a.kO=0.0;a.eJ=0;a.ik=0;a.d0=null;a.mK=null;}
function VF(a){var b;if(Oi(a))return 0;ACq(a);b=Cs(a.f_,a.kO);return EA(a.ez)+(b*2|0)|0;}
function RW(a){var b;b=a.k;return b.a&&b.b?0:1;}
function Oi(a){return a.hE!==null&&a.jI!==null?0:1;}
function QE(a,b){a.k.b=b;}
function QJ(a,b,c,d,e){var f,g;f=a.f_.d1;X(f,d,a.k.b);g=a.i;Bs(b,g.a+c|0,g.b,f,e);}
function ACq(a){if(a.ez===null)a.ez=Fm(a.f_,a.hE);}
function Ik(){HZ.call(this);this.eE=null;}
function P3(a,b){E4(a);a.eE=AV3(b);}
function APY(a){var b,c,d,e;b=Cg(20.0,a.bS);c=(a.k.a-b|0)/2|0;d=AJX(a.i);e=BF(c,a.k.b);a.cl.data[0].dz(d,e,a.bS);d.a=(a.i.a+a.k.a|0)-c|0;a.cl.data[1].dz(d,e,a.bS);e.a=(a.k.a-c|0)-c|0;d.a=a.i.a+c|0;a.cl.data[2].dz(d,e,a.bS);}
function AFP(){var a=this;Ik.call(a);a.dY=null;a.dV=null;a.kF=null;a.lT=null;a.vr=null;}
function A1h(a){var b=new AFP();AZp(b,a);return b;}
function AZp(a,b){var c,d;P3(a,b);a.dY=TU(b);a.dV=TU(b);a.kF=GH(a.dY,b);a.lT=GH(a.dV,b);c=AL2(a.kF,a.dY);d=AL2(a.lT,a.dV);Oj(a.eE,c,d);a.vr=AHq(c,d);MD(a,I(CB,[a.kF,a.lT,a.eE]));}
function AC1(a,b){a.eE.il=b;Kb(a.dY,b);JI(a.dY,a.kF);Kb(a.dV,b);JI(a.dV,a.lT);}
function AA2(a,b){a.vr.g0=b;a.eE.et=b;}
function Hp(){var a=this;B.call(a);a.dX=null;a.jd=null;a.oA=null;a.hl=null;a.jS=0;a.hC=0;a.hA=0;}
function A8X(a,b){var c=new Hp();S5(c,a,b);return c;}
function S5(a,b,c){a.hl=XR(b);a.jS=c;a.hC=0;}
function GC(a){return (JX(a.hl,0)).v;}
function AEj(a){a.hC=60084;}
function I_(a){return a.hC!=60084?0:1;}
function AFf(a){a.hC=60086;}
function AFp(a){a.hA=60035;}
function LB(a){a.hA=60027;}
function QS(a){a.hA=60137;}
function IV(a){a.hA=60151;}
function Dh(){Hp.call(this);this.fb=null;}
var A8Y=null;var A8Z=null;function AKr(a,b){var c=new Dh();J_(c,a,b);return c;}
function J_(a,b,c){S5(a,b,c);a.fb=A8Y;}
function A2d(a){return GC(a);}
function AK0(a){var b,c,d;b=Q(Hp,ADY(a));c=b.data;if(Q6(a,b,0)==c.length)return b;d=new Bu;Y(d);N(d);}
function Jl(a){return a.fb.data.length;}
function ADY(a){var b,c,d,e;b=1;if(I_(a)){c=a.fb.data;d=c.length;e=0;while(e<d){b=b+ADY(c[e])|0;e=e+1|0;}}return b;}
function OP(a){var b,c,d,e;b=1;c=a.fb.data;d=c.length;e=0;while(e<d){b=b+OP(c[e])|0;e=e+1|0;}return b;}
function Q6(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(I_(a)){d=a.fb.data;c=d.length;f=0;while(f<c){e=Q6(d[f],b,e);f=f+1|0;}}return e;}
function N0(a){AEj(a);IV(a);}
function IH(a){AFf(a);AFp(a);}
function Ut(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=Ov(GC(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AGl(){A8Y=Q(Dh,0);A8Z=new AD_;}
function SJ(){B.call(this);this.sY=null;}
function AVY(a){H7(a.sY,1);}
function SI(){B.call(this);this.vf=null;}
function AUD(a){H7(a.vf,0);}
var Z_=G(Es);
var A80=null;function Df(b,c){return Long_udiv(b, c);}
function AIl(b,c){return Long_urem(b, c);}
function DG(b,c){return Long_ucompare(b, c);}
function AJf(){A80=F($rt_longcls());}
function ACb(){B.call(this);this.vP=null;}
function A2F(a,b){DI(a.vP,b);}
function AD4(){B.call(this);this.Bv=null;}
function AYl(a){Y_(a.Bv);}
function Xz(){B.call(this);this.yR=null;}
function AVC(a){var b;b=a.yR;EI(b.M,YT(b));}
function U5(){B.call(this);this.vA=null;}
function A0Q(a){RZ(a.vA);}
function ABA(){B.call(this);this.oa=null;}
var A8W=null;function APd(){var a=new ABA();AE2(a);return a;}
function AE2(a){a.oa=BL();}
function Wk(a,b,c,d,e){var f;f=new Lg;f.t4=e;f.lx=c;f.lP=d;f.hM=b;BB(a.oa,f);}
function ADa(a){return Gp(a.oa,A8W);}
function AAE(b){return b===null?C(21):ACt(b);}
function AKZ(){A8W=Q(Lg,0);}
function J8(){var a=this;B.call(a);a.tu=null;a.lf=null;a.kP=null;a.jw=null;a.j1=null;a.jx=null;a.g3=null;}
function MR(b,c,d,e){var f,g,h;f=new J8;f.jw=new Bg;f.j1=new Bg;f.jx=new Bg;f.g3=b;g=Cx(e,b.hM);if(g!==null)g.iO=g.iO+1|0;else{g=new ACK;h=Kx(c,b.hM,d);g.iO=1;g.mc=h;DU(e,b.hM,g);}e=g.mc;f.tu=e;X(f.jw,e.bf|0,e.bC|0);e=Kx(c,b.lx,d);f.lf=e;X(f.j1,e.bf|0,e.bC|0);b=Kx(c,b.lP,d);f.kP=b;X(f.jx,b.bf|0,b.bC|0);return f;}
function ACE(b,c,d){var e,f,g;e=c.g3.hM;f=Cx(d,e);g=f.iO-1|0;f.iO=g;if(!g){Lz(d,e);I1(b,f.mc);}I1(b,c.lf);I1(b,c.kP);}
var OE=G(0);
var A7Y=null;var A7Z=null;function AF_(){A7Y=EZ(40,40,40,200);A7Z=EZ(43,43,43,128);}
function Ls(){var a=this;Fr.call(a);a.gm=null;a.cs=null;a.e3=null;a.hY=null;a.gx=null;a.lZ=null;a.mM=null;a.AQ=0;a.rb=0;a.oy=null;a.gg=null;a.gh=null;a.hb=null;a.hP=null;a.hU=null;a.jm=null;a.gI=null;a.rN=0;a.ka=0;}
function ARB(a){Ow(a.hY);Yo(a.cs);OY(a);}
function OY(a){a.gg=BV(a.gg,null);a.gh=BV(a.gh,null);a.hb=BV(a.hb,null);a.hP=BV(a.hP,null);a.hU=BV(a.hU,null);a.jm=BV(a.jm,null);a.gI=BV(a.gI,null);}
function W9(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.hb;break a;case 60084:c=a.gh;break a;case 60086:c=a.gg;break a;case 60136:c=a.gI;break a;case 60137:c=a.jm;break a;case 60151:c=a.hP;break a;default:c=null;break a;}c=a.hU;}return c;}
function Kb(a,b){var c,d;a.gx=b;c=BO(a.lZ,b.pF);d=BO(a.mM,b.oS);if(!(c&&d)){a.lZ=b.pF;a.mM=b.oS;if(a.bS!==0.0)SU(a);}}
function AMq(a,b,c){P0(a.cs,c);if(a.lZ!==null)SU(a);}
function SU(a){var b,c,d,e,f;S2(a.hY);b=a.cs;c=a.lZ;d=a.bS;e=a.gm.bH;f=b.g_;b.cX=AI9(c.h_,c.g1*d,c.j7,c.kn,f,e);Sq(a.cs,1.25,a.gm.bH);OY(a);b=Fm(a.gm,a.mM);a.gg=BV(a.gg,FF(a,60086,b));a.gh=BV(a.gh,FF(a,60084,b));a.hb=BV(a.hb,FF(a,60035,b));a.hP=BV(a.hP,FF(a,60151,b));a.hU=BV(a.hU,FF(a,60027,b));a.jm=BV(a.jm,FF(a,60137,b));a.gI=BV(a.gI,FF(a,60136,b));a.rN=Bd(Bd(Bd(Bd(BQ(a.hb),BQ(a.hP)),BQ(a.hU)),BQ(a.gI)),BQ(a.gI));a.ka=Bd(BQ(a.gh),BQ(a.gg));Pq(a);}
function Pq(a){Tg(a,a.cJ.a,Bc(a.e3.fA.data.length,a.cs.d$));Tu(a);}
function AYT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;c=a.gx.br.ej;d=a.i;Bs(b,d.a,d.b,a.k,c);BC(a.cs.cX);e=a.cs.d$;f=a.e3.fA.data.length;if(!f)return;g=Be(f,H_(a.k.b,e)+7|0);h=a.hY;if(h.data.length<g)a.hY=Zn(g,h,a.cs,a.AQ,a.rb,a.e3);NG(b,a.i,a.k);i=a.U.b;j=f-1|0;k=AGh(i,e,j);i=AGh((a.U.b+a.k.b|0)-1|0,e,j);a.AQ=k;a.rb=i;l=a.k.a;m=Dz(a,4.0);n=Dz(a,1.0)+a.ka|0;o=Dz(a,3.0);p=Dz(a,5.0);q=Dz(a,1.0);r=0;s=a.i.a-a.U.a|0;t=Dz(a,1.0);d=a.fg;u=t+(d===null?0:FR(d))|0;while(k<=i){v=a.e3.fA.data[k];h
=a.hY.data;t=k%h.length|0;w=h[t];XC(w,v.hl,b,e,l,0,k,t);x=Bc(e,k)-a.U.b|0;y=null;z=m+Bc(n,v.jS)|0;ba=a.oy!==v?0:1;if(ba){X(a.gm.d1,a.k.a,e);d=a.i;Bs(b,d.a,d.b+x|0,a.gm.d1,a.gx.br.gt);}bb=W9(a,v.hC);bc=W9(a,v.hA);if(bb!==null){d=a.gx;bd=d.jN.data[0];AEb(a,b,bb,s+z|0,(a.i.b+x|0)-q|0,!ba?c:d.br.gt,bd.g9);}if(bc!==null){d=a.gx;bd=d.jN.data[0];AEb(a,b,bc,((s+z|0)+a.ka|0)+o|0,(a.i.b+x|0)-q|0,!ba?c:d.br.gt,bd.g9);}be=FI(v.hl);bf=(((z+a.ka|0)+o|0)+a.rN|0)+p|0;r=Bd(r,(bf+be|0)+u|0);Qi(w,a.i.b+x|0,s+bf|0,b,l,e,0,a.gx,
null,null,null,ba,0,y);k=k+1|0;}d=a.cJ;if(d.a!=r){d.a=r;Tu(a);}Gc(b);}
function AEb(a,b,c,d,e,f,g){Cp(a.cs.js,0.0,0.0,BQ(c),CO(c));Cn(a.cs.ih,c.eT);Hd(a.cs,b,c,d,e,g,f);}
function A1z(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cs.d$;f=((b.j.b-a.i.b|0)+a.U.b|0)/e|0;if(f>=0){g=a.e3.fA.data;if(f<g.length){h=g[f];if(!WB(a,b,f)){b=h.oA;if(b!==null)b.f();}}}}return 1;}
function ANj(a,b,c){var d,e,f,g;d=a.cs.d$;e=((b.j.b-a.i.b|0)+a.U.b|0)/d|0;if(!c&&e>=0){f=a.e3.fA.data;if(e<f.length){g=f[e];if(WB(a,b,e)){b=g.jd;if(b!==null)b.f();}else{a.oy=g;b=g.dX;if(b!==null)b.f();}}}return A7j;}
function WB(a,b,c){var d,e,f,g,h,i,j;d=a.e3.fA.data[c];e=Dz(a,4.0);f=Dz(a,1.0);g=Bd(BQ(a.gh),BQ(a.gg));h=e+Bc(f+g|0,d.jS)|0;i=(a.i.a-a.U.a|0)+h|0;j=i+g|0;c=b.j.a;return i<=c&&c<j?1:0;}
function FF(a,b,c){var d,e,f;d=a.gm.bH;e=NI(b);f=a.cs;return ADq(d,e,c,1,f.d$,f.iN);}
function AGh(b,c,d){return Be(b/c|0,d);}
function AJr(){Ls.call(this);this.rp=null;}
function TU(a){var b=new AJr();ATl(b,a);return b;}
function ATl(a,b){LR(a);a.e3=AMz(Q(Hp,0));a.hY=Q(Fv,0);a.gm=b;a.cs=APS(b.cz);}
function EL(a){a.e3=AMz(AK0(a.rp));if(a.bS!==0.0)Pq(a);}
function ET(a,b){a.rp=b;EL(a);}
function JI(a,b){var c;c=a.gx.br;Jh(b,c.lI,c.lN);return b;}
function AF7(){var a=this;B.call(a);a.nA=null;a.f2=null;}
function AL2(a,b){var c=new AF7();AM8(c,a,b);return c;}
function AM8(a,b,c){a.nA=b;a.f2=c;}
function ASZ(a){return a.f2.U.b/MG(a)|0;}
function A1K(a){var b;b=a.f2;return H_((b.U.b+b.k.b|0)-1|0,MG(a));}
function ATP(a,b){var c;b=Bc(b,MG(a));c=a.f2;return (b+c.i.b|0)-c.U.b|0;}
function APN(a){return a.f2.i;}
function AVn(a){return a.f2.k;}
function AQk(a,b,c){var d;d=a.nA;d.uk=b;d.rf=c;}
function AY9(a,b){return ACY(a.nA,b);}
function MG(a){return a.f2.cs.d$;}
function ABK(){var a=this;B.call(a);a.nz=FL;a.mN=0;a.q7=0;}
var Xj=G();
function AT6(a){}
function SK(){var a=this;B.call(a);a.Bd=null;a.Ba=null;a.Bb=null;}
function APR(a){var b,c,d,e,f;b=a.Bd;c=a.Ba;d=a.Bb;e=Bt();f=new K;M(f);b=H(f,b);BM(b,9);b=H(b,c);BM(b,9);H(b,d);Bk(e,L(f));}
function P2(){B.call(this);this.yT=null;}
function AL1(a,b){var c;c=a.yT;LI(c,FX(b,c.bP.cJ.b-c.k.b|0));}
function P1(){B.call(this);this.zE=null;}
function AMh(a,b){var c;c=a.zE;Ld(c,FX(b,c.bP.cJ.a-c.k.a|0));}
var AD_=G();
function ASt(a,b,c){b=b;c=c;return Ov(GC(b),GC(c));}
function Lg(){var a=this;B.call(a);a.t4=null;a.lx=null;a.lP=null;a.hM=null;}
function AK7(){G1.call(this);this.fA=null;}
function AMz(a){var b=new AK7();ANV(b,a);return b;}
function ANV(a,b){a.fA=b;}
function A2W(a,b){return a.fA.data[b].hl;}
var C$=G(Bu);
var AKg=G(FC);
function AWw(a){var b=new AKg();AQx(b,a);return b;}
function AQx(a,b){a.kM=1;a.k7=1;a.nq=b;}
function ALb(){var a=this;B.call(a);a.oK=null;a.mW=null;a.eO=null;a.mJ=null;a.by=null;a.pz=null;a.nI=null;a.fZ=null;a.gS=null;a.jJ=null;}
function AUc(a,b){var c=new ALb();AYP(c,a,b);return c;}
function AYP(a,b,c){var d,e,f;a.eO=b;a.mJ=c;a.by=AVW();b=new K;M(b);a.jJ=b;a.fZ=JV();b=new SM;d=AKQ(16);b.gL=0;b.d6=Q(JD,d);b.xT=0.75;Uw(b);a.gS=b;b=new UN;c=a.by;e=a.jJ;f=a.fZ;b.dC=c;b.mx=e;b.s5=f;a.pz=b;b=new Us;b.cZ=c;b.nh=e;b.sc=f;a.nI=b;}
function W$(a){var b,c,d,e,f,g,h;a:{b=Ne(a.eO.fd);c=b.jk;if(c.c8>0){d=c.c0;e=0;b:while(true){f=b.jk.b8.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cO;if(Hx(a.fZ,g))Cx(a.fZ,g);else{h=a.fZ;DU(h,g,CX(h.c8));}c=c.cY;if(d!=b.jk.c0)break b;}e=e+1|0;}b=new Ib;Y(b);N(b);}}b=a.eO.fE;if(b!==null)ZK(a,b);Bq(a.by,a.eO.fd.c8);b=Sy(Ne(a.eO.fd));while(Fs(b)){c=Qm(b);G4(a.by,a.jJ.L,J(c));BY(a.jJ,c);}b=Sy(Ne(a.eO.fd));while(Fs(b)){c=Qm(b);c=Cx(a.eO.fd,c);Bq(a.by,c.q);c=B7(c);while(B_(c)){g=Ca(c);g=Cx(a.fZ,g);Bq(a.by,
g.bp);}}if(a.eO.fE===null)Bq(a.by,(-1));else{Bq(a.by,a.gS.gL);AAr(a,a.eO.fE);}if(a.mJ===null)Bq(a.by,(-1));else{Bq(a.by,1);AED(a.mJ,a.by,a.gS);}a.oK=Q3(a.by);a.mW=Gt(L(a.jJ));}
function ZK(a,b){var c,d,e,f,g,h;if(ACP(a.gS,b))Ot(a.gS,b);else{c=a.gS;d=CX(c.gL);if(b===null){e=Zb(c);if(e===null){c.mb=c.mb+1|0;e=ACT(c,null,0,0);f=c.gL+1|0;c.gL=f;if(f>c.pA)W4(c);}}else{g=MI(b);h=g&(c.d6.data.length-1|0);e=Xd(c,b,h,g);if(e===null){c.mb=c.mb+1|0;e=ACT(c,b,h,g);f=c.gL+1|0;c.gL=f;if(f>c.pA)W4(c);}}e.cU=d;}b=b.cL;if(b===null)return;c=new VV;c.sf=a;b.fm(c);}
function AAr(a,b){var c,d,e,f;c=(Ot(a.gS,b)).bp;Bq(a.by,c);if(b instanceof NQ)Bq(a.by,(-1));else if(!(b instanceof Li))Bq(a.by,0);else Bq(a.by,1);d=a.pz;Bq(d.dC,b.eZ.c2());e=b.eZ;f=new Wi;f.v9=d;e.fm(f);d=a.nI;Bq(d.cZ,b.fF.c2());e=b.fF;f=new T$;f.uI=d;e.fm(f);d=b.lq;Bq(a.by,d.c2());e=new U1;e.A1=a;d.fm(e);d=b.hQ;Bq(a.by,d.c2());d=d.b9();while(d.cD()){e=d.b_();Pn(a.pz,e.ls);Hf(a.nI,e.kU);Bq(a.by,e.rS);}d=b.uE;if(d===null)Bq(a.by,(-1));else Bq(a.by,(Cx(a.fZ,d)).bp);b=b.cL;Bq(a.by,b.c2());d=new Qj;d.qE=a;b.fm(d);}
function OX(){B.call(this);this.Ay=null;}
function AUA(a,b){var c,d,e,f,g,h,i,j;c=a.Ay;if(c.fQ){d=E3(c);e=new K;M(e);H(H(e,d),C(414));$rt_globals.console.info($rt_ustr(L(e)));}b=b.data;f=CQ(b[0]);g=EQ(b[1]);h=(CQ(b[2])).data[0];if(c.h.cq==h){i=null;j=null;if(b.length>=5){i=CQ(b[3]);j=EQ(b[4]);}b=Ea(c);if(!Bj(b,C(203))&&!Bj(b,C(403))?0:1)Oa(c.h,f,g);else{Ws(c.h,f,g,i,j);EW(c.h.dF);EW(c.h.dP);Ni(c.h);KK(c.h);Op(c);}}}
function ACJ(){B.call(this);this.sm=null;}
function AY4(a,b){var c,d,e,f;c=a.sm;if(c.fe!=3){b=b.data;d=CQ(b[0]);e=EQ(b[1]);Ws(c.h,d,e,null,null);if(c.fQ){b=E3(c);f=JP(E5(),c.As);c=new K;M(c);H(HL(H(H(c,b),C(415)),f),C(201));$rt_globals.console.info($rt_ustr(L(c)));}}}
var Ol=G(BH);
function Sl(){var a=this;B.call(a);a.v3=null;a.v4=null;a.v2=0;}
function AWS(a,b){var c,d,e;c=a.v3;d=a.v4;e=a.v2;d.g(Vc(c,(b.j.a+e|0)-c.e9.a|0));}
function Sk(){var a=this;B.call(a);a.rQ=null;a.rO=null;a.rP=0;}
function A11(a,b){var c,d,e;c=a.rQ;d=a.rO;e=a.rP;d.g(QL(c,(b.j.b+e|0)-c.e9.b|0));}
var Fj=G(0);
function Xe(){var a=this;B.call(a);a.jX=0;a.qb=0;a.lE=0;a.hV=0;a.jj=null;}
function B_(a){return a.jX>=a.lE?0:1;}
function Ca(a){var b,c;Qs(a);b=a.jX;a.hV=b;c=a.jj;a.jX=b+1|0;return c.kG(b);}
function Zy(a){var b,c,d;if(a.hV<0){b=new C$;Y(b);N(b);}Qs(a);a.jj.qc(a.hV);a.qb=a.jj.b2;c=a.hV;d=a.jX;if(c<d)a.jX=d-1|0;a.lE=a.lE-1|0;a.hV=(-1);}
function Qs(a){var b;if(a.qb>=a.jj.b2)return;b=new Ib;Y(b);N(b);}
function Lm(){var a=this;Ou.call(a);a.xz=null;a.z9=null;}
function AHl(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.xz;e=0;f=0;g=a.z9;a:{b:{while(true){if((e+32|0)>f&&D9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ch(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BH;c=new K;M(c);U(H(U(H(c,C(416)),l),C(100)),h);Bm(b,L(c));N(b);}if(Ch(b)<m){b=new Oh;Y(b);N(b);}if(m<0){b=new BH;c=new K;M(c);H(U(H(c,C(101)),m),C(102));Bm(b,L(c));N(b);}n=b.Z;h=n+b.nk|0;e=0;while(e<m){o=k+1|0;i=b.pN.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!D9(c)){p=!D9(b)&&e>=f?A6Q:A6P;break a;}i=g.data;n=Ch(c);o=i.length;n=Be(n,o);q=new ACg;q.tz=b;q.AX=c;p=ALa(a,d,e,f,g,0,n,q);e=q.wb;if(p===null&&0==q.mP)p=A6Q;k=q.mP;h=0;if(c.qi){b=new Kw;Y(b);N(b);}if(Ch(c)<k)break;if(h>o){b=new BH;c=new K;M(c);BM(U(H(U(H(c,C(103)),h),C(97)),o),41);Bm(b,L(c));N(b);}l=h+k|0;if(l>o){b=new BH;c=new K;M(c);U(H(U(H(c,C(105)),l),C(100)),o);Bm(b,L(c));N(b);}if(k<0){b=new BH;c=new K;M(c);H(U(H(c,C(101)),k),C(102));Bm(b,L(c));N(b);}o=c.Z;m=0;while(m
<k){l=o+1|0;n=h+1|0;AAn(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new JK;Y(b);N(b);}b=new BH;c=new K;M(c);BM(U(H(U(H(c,C(103)),k),C(97)),h),41);Bm(b,L(c));N(b);}FA(b,b.Z-(f-e|0)|0);return p;}
var Tc=G(Lm);
function ALa(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NB(h,2))break a;i=A6Q;break a;}c=k+1|0;n=j[k];if(!Gz(a,n)){c=c+(-2)|0;i=Eu(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NB(h,3))break a;i=A6Q;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gz(a,n))break b;if(!Gz(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(OA(p)){c=k+(-3)|0;i=Eu(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Eu(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NB(h,4))break a;i=A6Q;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ch(h.AX)<2?0:1)break a;i=A6P;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gz(a,n))break c;if(!Gz(a,o))break c;if(!Gz(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=JU(r);m=c+1|0;j[c]=Je(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Eu(1);break a;}c=k+(-3)|0;i
=Eu(1);}h.wb=c;h.mP=f;return i;}
function Gz(a,b){return (b&192)!=128?0:1;}
function Yn(){var a=this;B.call(a);a.Dg=null;a.Dd=null;a.De=null;}
function VL(){B.call(this);this.qQ=null;}
function ATy(a,b){var c,d;c=a.qQ;d=c.ef+1|0;c.ef=d;c=new K;M(c);H(H(U(c,d),C(417)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function Pd(){B.call(this);this.uV=null;}
function AR$(a){return a.uV.f$();}
function Pc(){B.call(this);this.t$=null;}
function AWE(a){return a.t$.f$();}
function AAy(){B.call(this);this.z7=null;}
function AZH(a){return a.z7.f$();}
var XK=G();
function AUK(a){return FS(1);}
function AAg(){B.call(this);this.tj=null;}
function A2l(a,b){a.tj.g(H4(b));}
var AFN=G();
function ACH(){B.call(this);this.vI=null;}
function AOs(a,b){a.vI.f();}
var AHF=G();
var AGK=G();
function Xb(){B.call(this);this.uZ=null;}
function ANg(a,b){var c,d,e,f;c=a.uZ;d=Cy(b);e=new K;M(e);H(H(e,C(418)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new ABQ;d.C0=c;d.td=b;e=new ABS;e.Fi=c;c=AKW(e);e=new ACy;e.xs=d;d=b.ga;if(d!==null)d.arrayBuffer().then(Bv(e,"f"),Bv(c,"f"));else{b=b.ij.getFile();f=new ACA;f.AN=e;f.AO=c;b.then(Bv(f,"f"),Bv(c,"f"));}}
function Xa(){B.call(this);this.xp=null;}
function ASF(a,b){var c,d,e;c=a.xp;d=Cy(b);e=new K;M(e);H(H(e,C(419)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new PM;d.Cl=c;No(b,d);}
function ABe(){B.call(this);this.rg=null;}
function ALr(a){EL(a.rg);}
var AE7=G();
function PJ(b,c,d){return AGB(b,0,c,d,UY());}
function AGB(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BK(c,d);h=g>=0?0:1+QZ(f,2.0)|0;i=g>0?0:1+QZ(f,3.0)|0;j=Q(Dh,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new K;M(m);U(H(m,C(420)),g);k[g]=AGB(L(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Dh;n=new K;M(n);U(H(n,C(421)),g);J_(m,L(n),l);n=new Rl;n.tH=m;m.oA=n;switch((l+g|0)%3|0){case 0:break;case 1:QS(m);break a;case 2:m.hA=60136;break a;default:break a;}LB(m);}if(U0(f)<0.25){n=JX(m.hl,0);n.bF=n.bF|2;}k[h+g|0]=m;g=g+1|0;}n=new Dh;S5(n,b,c);n.fb=A8Y;n.fb=j;b=new WK;b.wr
=n;b.wt=e;n.jd=b;n.dX=b;if((c+c|0)>d)IH(n);else N0(n);return n;}
function ABf(){B.call(this);this.to=null;}
function AOP(a){EL(a.to);}
function RY(){B.call(this);this.A0=null;}
function AYy(a){RZ(a.A0);}
function Tr(){B.call(this);this.s_=null;}
function ATs(a){EL(a.s_);}
var AHE=G();
function AFY(b,c){var d,e,f,g,h,i,j,k,l;d=b.bb.bO;e=ACF(b);f=Cs(b.bb,5.0);g=Cs(b.bb,c);h=g?g+e|0:0;i=BF(f+g|0,(f+h|0)+e|0);j=new Bg;k=d.a;l=f*2|0;QM(j,(k-l|0)-g|0,((d.b-e|0)-l|0)-h|0);Et(b,i,j);}
function ACM(){var a=this;B.call(a);a.q6=null;a.q8=null;}
function A2t(a){var b,c;b=a.q6;c=a.q8;DS(b);c.f();}
function QK(){var a=this;B.call(a);a.gf=null;a.kI=null;a.i7=null;a.qk=null;a.dg=null;a.lS=0;}
function AAv(a,b){if(!BO(b.oF,a.qk)){a.qk=b.oF;NX(a);}}
function NX(a){a.dg=BV(a.dg,null);}
function AGq(a,b){var c,d;c=Fm(b,a.qk);d=EA(c);a.dg=BV(a.dg,ADq(b.bH,NI(60088),c,0,d,0));}
function Ti(a,b){return a.dg!==null&&Gk(b,a.gf,a.kI)?1:0;}
var Eg=G(Bu);
function AG8(){var a=this;B.call(a);a.jr=null;a.nH=0;a.f7=0;}
function AVW(){var a=new AG8();AUb(a);return a;}
function AUb(a){a.nH=0;a.jr=BP(16);a.f7=0;}
function G4(a,b,c){Bq(a,b);Bq(a,c);}
function Bq(a,b){var c,d;c=a.jr;d=c.data.length;if(d==a.f7)a.jr=Jj(c,d*2|0);c=a.jr.data;d=a.f7;a.f7=d+1|0;c[d]=b;}
function Q3(a){var b,c,d,e,f;b=a.nH;if(b&&a.f7!=b){c=En();b=a.nH;d=a.f7;e=new K;M(e);H(U(H(U(H(e,C(422)),b),C(423)),d),C(424));Bk(c,L(e));}f=a.jr;b=f.data.length;d=a.f7;if(b!=d)f=Jj(f,d);return f;}
function SM(){var a=this;Ee.call(a);a.gL=0;a.d6=null;a.mb=0;a.xT=0.0;a.pA=0;}
function AKQ(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Uw(a){a.pA=a.d6.data.length*a.xT|0;}
function ACP(a,b){return VN(a,b)===null?0:1;}
function Ot(a,b){var c;c=VN(a,b);if(c===null)return null;return c.cU;}
function VN(a,b){var c,d;if(b===null)c=Zb(a);else{d=MI(b);c=Xd(a,b,d&(a.d6.data.length-1|0),d);}return c;}
function Xd(a,b,c,d){var e;e=a.d6.data[c];while(e!==null&&!(e.nD==d&&(b!==e.cO?0:1))){e=e.io;}return e;}
function Zb(a){var b;b=a.d6.data[0];while(b!==null&&b.cO!==null){b=b.io;}return b;}
function ACT(a,b,c,d){var e,f;e=new JD;V1(e,b,null);e.nD=d;f=a.d6.data;e.io=f[c];f[c]=e;return e;}
function W4(a){var b,c,d,e,f,g,h,i;b=a.d6.data.length;b=AKQ(!b?1:b<<1);c=Q(JD,b);d=c.data;e=0;f=b-1|0;while(true){g=a.d6.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.nD&f;i=h.io;h.io=d[b];d[b]=h;h=i;}e=e+1|0;}a.d6=c;Uw(a);}
function UN(){var a=this;B.call(a);a.dC=null;a.mx=null;a.s5=null;}
function Pn(a,b){var c;if(!(b instanceof Mm)){Bq(a.dC,3);ADs(a,b);Bq(a.dC,b.jv);}else{c=b;Bq(a.dC,5);ADs(a,c);Bq(a.dC,c.jv);Bq(a.dC,c.wL);b=c.k3;Bq(a.dC,b.q);c=new WM;c.re=a;Fw(b,c);}}
function ADs(a,b){var c;c=b.eH.jE;G4(a.dC,a.mx.L,J(c));Bq(a.dC,b.eH.dG);OT(a,b.mf);BY(a.mx,c);}
function OT(a,b){if(b===null)Bq(a.dC,(-1));else Bq(a.dC,(Cx(a.s5,b)).bp);}
function Us(){var a=this;B.call(a);a.cZ=null;a.nh=null;a.sc=null;}
function Hf(a,b){var c,d,e;if(b instanceof HI){c=b;Bq(a.cZ,9);YK(a,c.hy);}else if(b instanceof Kj){d=b;Bq(a.cZ,3);Zh(a,d);Bq(a.cZ,d.qJ);YK(a,d.id);}else if(b instanceof Jn){e=b;Bq(a.cZ,4);Hf(a,e.jT);Hf(a,e.i$);}else if(b===null)Bq(a.cZ,(-1));else{Bq(a.cZ,5);Zh(a,b);Bq(a.cZ,b.zX);}}
function Zh(a,b){var c;c=b.fU.jE;G4(a.cZ,a.nh.L,J(c));Bq(a.cZ,b.fU.dG);b=b.gK;if(b===null)Bq(a.cZ,(-1));else Bq(a.cZ,(Cx(a.sc,b)).bp);BY(a.nh,c);}
function YK(a,b){var c;Bq(a.cZ,b.q);c=new V4;c.xq=a;Fw(b,c);}
function WR(){var a=this;B.call(a);a.yL=0;a.yK=0;}
function S1(){B.call(this);this.sz=null;}
function ASH(a,b){var c;c=a.sz;DI(c,b);HC(c,null);VK(c);}
var YD=G(Es);
var A81=null;function AIM(){A81=F($rt_doublecls());}
var Ka=G();
var A82=FL;var A83=null;var A84=null;function AFT(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.q7=IK(Dg(d,D(0, 2147483648)),FL)?0:1;e=Dg(d,D(4294967295, 1048575));f=GS(A4U(d,52))&2047;if(IK(e,FL)&&!f){c.nz=FL;c.mN=0;return;}if(f)e=A3z(e,D(0, 1048576));else{e=HQ(e,1);while(IK(Dg(e,D(0, 1048576)),FL)){e=HQ(e,1);f=f+(-1)|0;}}g=A84.data;h=f<<16>>16;i=0;j=g.length;k=BK(i,j);if(k>0){c=new BU;Y(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BK(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IU(e,A83.data[h],i);if(ANN(m,A82)){while(DG(m,A82)<=0){j=j+(-1)|0;m=CR(Ci(m,Bp(10)),Bp(9));}g=A84.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IU(e,A83.data[h],i);}e=HQ(e,1);d=CR(e,Bp(1));g=A83.data;h=j+1|0;n=g[h];f=i-1|0;n=IU(d,n,f);o=IU(JP(e,Bp(1)),A83.data[h],f);p=Bp(1);while(true){q=Ci(p,Bp(10));if(DG(Df(m,q),Df(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ci(r,Bp(10));if(DG(Df(m,s),Df(n,s))>=0)break;r=s;}h=DG(p,r);e=h>0?Ci(Df(m,p),p):h<0?CR(Ci(Df(m,r),r),r):Ci(Df(CR(m,AGN(r,Bp(2))),r),r);if(DG(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Df(e,Bp(10));if(DG(e,D(2808348672, 232830643))<0)break;}else if(DG(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ci(e,Bp(10));}c.nz=e;c.mN=j-330|0;}
function IU(b,c,d){var e,f,g,h,i,j,k,l;e=Dg(b,Bp(65535));f=Dg(Gd(b,16),Bp(65535));g=Dg(Gd(b,32),Bp(65535));h=Dg(Gd(b,48),Bp(65535));i=Dg(c,Bp(65535));j=Dg(Gd(c,16),Bp(65535));k=Dg(Gd(c,32),Bp(65535));l=Dg(Gd(c,48),Bp(65535));return CR(CR(CR(HQ(Ci(l,h),32+d|0),HQ(CR(Ci(l,g),Ci(k,h)),16+d|0)),HQ(CR(CR(Ci(l,f),Ci(k,g)),Ci(j,h)),d)),Gd(CR(CR(CR(Ci(k,e),Ci(j,f)),Ci(i,g)),HQ(CR(CR(CR(Ci(l,e),Ci(k,f)),Ci(j,g)),Ci(i,h)),16)),32-d|0));}
function AFF(){A82=Df(Bp(-1),Bp(10));A83=AIG([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A84=A4m([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function T4(){B.call(this);this.rD=null;}
function AL6(a){Hg(a.rD,37,3);}
function T5(){B.call(this);this.si=null;}
function AN7(a){Hg(a.si,40,3);}
function T6(){B.call(this);this.tG=null;}
function A13(a){Hg(a.tG,42,3);}
function T7(){B.call(this);this.xB=null;}
function AQd(a){Hg(a.xB,45,3);}
function T8(){B.call(this);this.x2=null;}
function ASm(a){Hg(a.x2,45,5);}
function O1(){B.call(this);this.Al=null;}
function A2_(a,b){var c,d;c=a.Al;d=new Bu;Bm(d,$rt_str(b.message));c.g(d);}
var VO=G(0);
var A6C=null;function A39(){A39=Bn(VO);AZ0();}
function AZ0(){A6C=new $rt_globals.TextDecoder("utf-16");}
function PH(){CB.call(this);this.A3=null;}
function ALW(a,b){var c;c=a.i;Bs(b,c.a,c.b,a.k,a.A3);}
function AB1(){var a=this;B.call(a);a.ts=0;a.B9=0;}
function FX(a,b){var c;c=a.B9;if(c<=0)return 0;return YP(a.ts,b,c);}
function Rl(){B.call(this);this.tH=null;}
function AY7(a){var b,c,d;b=a.tH;c=Bt();d=GC(b);b=new K;M(b);H(H(b,C(425)),d);Bk(c,L(b));}
var TK=G(0);
var A7f=null;function AO4(){AO4=Bn(TK);ATU();}
function ATU(){A7f=S(C(235));}
function WK(){var a=this;B.call(a);a.wr=null;a.wt=null;}
function AY3(a){var b,c;b=a.wr;c=a.wt;if(!I_(b))N0(b);else IH(b);c.f();}
function Q2(){B.call(this);this.qH=null;}
function A0u(a,b){H6(a.qH,b);}
function Q1(){B.call(this);this.BV=null;}
function AWG(a){return a.BV.sb;}
function Xi(){var a=this;B.call(a);a.qD=null;a.yI=null;a.ve=0;a.v$=0;}
function Oe(a,b){return Ch(a.yI)<b?0:1;}
var AHd=G();
function AEB(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEt(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(Ev()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new Tv;d.addEventListener("change",Bv(e,"handleEvent"));d.click();}
var AEQ=G(0);
function R8(){B.call(this);this.t3=null;}
function AXL(a){Mr(a.t3);}
function ACZ(){var a=this;B.call(a);a.w0=null;a.wZ=null;}
function AT2(a){FP(a.w0,a.wZ);}
function OS(){var a=this;B.call(a);a.sO=null;a.sN=null;}
function AOY(a){var b,c;b=a.sO;c=a.sN;Iu(b.c3,c);J0(c);b.b4();}
function OR(){B.call(this);this.uW=null;}
var Yv=G();
var A85=null;function Oa(b,c,d){RA(b,c,d,0);}
function RA(b,c,d,e){Xy(b,c,d,null,null,e);}
function Xy(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=Ma(c);i=Bb(h);j=Bb(h);k=Bb(h);l=CJ(b);c=b.B;if(c.data.length<i)b.B=AE9(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bb(h)|0;h.fh=h.fh+n|0;}else b.B.data[m]=D7(Y7(h,d,0));m=m+1|0;}Ni(b);if(j)b.dh=AGS(AHK(h));EW(b.dP);EW(b.dF);o=b.dP;g=0;while(g<k){DU(o,DR(Bb(h),Bb(h)),DR(Bb(h),Bb(h)));g=g+1|0;}p=b.dP;o=b.dF;q=M6(N_(p));while(Fs(q)){r=OD(q);s=r.cO;p=r.cU;BC(A85);r=Cx(o,p);if(r===null){r=BL();DU(o,p,r);}BB(r,s);}if(o.o8===null){p=new QA;p.wj=o;o.o8=p;}p=o.o8;r=new ZG;NS(r,
p.wj);while(Fs(r)){N3(r);o=r.hh.cU;p=A58;c=Q(B,o.q);d=c.data;Gp(o,c);K8(c,p);g=0;t=d.length;while(g<t){p=d[g];KE(o,g);o.cH.data[g]=p;g=g+1|0;}}Rv(h);if(e!==null&&f!==null){p=AQH(e,f);PY(p);b.e6=AWj(p.pl,p.iS);b.dh=AGS(p.pH);}}
function Ws(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Ma(c);i=Bb(h);j=Bb(h);k=Bb(h)!=1?0:1;l=Bb(h);m=Bb(h);n=ADp(b,i);o=ADp(b,j);p=(IS(Cd(b,n.a),n.b)).data[0].s;q=(IS(Cd(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=Y7(h,d,i);if(!r)g=L4(p,g);if(r==s)g=L4(g,q);t=n.a+r|0;u=D7(g);c=b.B.data;v=c[t];c[t]=u;if(!k&&Jr(v)==Jr(u)){t=0;while(t<Jr(v)){o=v.s.data[t];w=u.s.data[t];x=o.bZ;y=x!=5?0:1;if(!y&&x&&!w.bZ){w.bZ=x;w.bF=o.bF;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AHK(h);w=KY(i,j,(-1));Xm(b.dh,w,u);}else if(e!==null&&f!==null){v=AQH(e,f);PY(v);w=KY(i,j,(-1));Xm(b.dh,w,v.pH);n=b.e6;n.fE=b.dh.df.cm;n.fd=v.iS;}}Rv(h);}
function Y7(b,c,d){var e,f,g,h,i,j,k,l;e=Bb(b);f=Q(Cw,e);g=f.data;h=0;while(h<e){i=Bb(b);j=Bb(b);k=Bb(b);l=Bb(b);g[h]=Ec(EC(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AKp(){A85=new Vy;}
var Zo=G(0);
var Pu=G(0);
var Id=G();
function AAj(){Id.call(this);this.AA=null;}
function AB6(a,b){var c,d,e;c=0;while(true){d=a.AA;if(d.kh===null)d.kh=B7(d.yl);if(!B_(d.kh))e=0;else{c=b.H(Ca(d.kh));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Ru=G(0);
function P5(){var a=this;B.call(a);a.Eq=null;a.Es=null;a.Er=0;a.Ep=0;}
var ADD=G();
function AMr(a,b){b=b;b.cR=BV(b.cR,null);}
var AFW=G(0);
function AI9(b,c,d,e,f,g){f=f.data;f[Jo(0,0)]=Gy(g,b,c,d,0);f[Jo(0,1)]=Gy(g,b,c,d,2);f[Jo(1,0)]=Gy(g,b,c,e,0);f[Jo(1,1)]=Gy(g,b,c,e,2);return f[Jo(0,0)];}
function JD(){var a=this;GY.call(a);a.nD=0;a.io=null;}
var Ib=G(Bu);
function ACk(){B.call(this);this.vx=null;}
function ASY(a,b){var c,d,e,f,g;c=a.vx;DS(c.c9.gq.bQ);EW(c.kc);d=M6(N_(c.gw));while(Fs(d)){e=OD(d);f=c.gw;g=e.cO;e=null;if(Hx(f,g))DU(f,g,e);}e=Bt();d=Cy(b);f=new K;M(f);H(H(f,C(426)),d);Bk(e,L(f));e=ASE(b,c);ET(c.c9.gs,e);e.jd.f();b=Fx(E9(b),C(427));DL(c.hm,b);}
var ADQ=G();
function A0L(a,b){AEB(b);}
function ADP(){B.call(this);this.sP=null;}
function AWD(a,b){var c,d,e;c=a.sP;d=0;e=b.length;while(d<e){c.g(AJ$(b[d],null));d=d+1|0;}}
var ADf=G();
function AXq(a,b){AEB(b);}
function ADe(){var a=this;B.call(a);a.sn=null;a.so=null;}
function AXX(a,b){var c,d,e;c=a.sn;d=a.so;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);c.g(A3Z(b,d,Q(BJ,0),Q(BJ,0)));}
function S7(){var a=this;B.call(a);a.bu=null;a.rv=null;a.ja=null;a.op=null;a.mq=null;a.gr=null;}
function Yb(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=LE();e=a.bu.d;f=Ea(e);e=HE(e);g=a.bu.fB;if(Zk(g,f,e)!==null){h=new Ro;h.rY=a;h.rZ=b;D2(d,C(428),h);}if(Ox(g,f,e)!==null){h=new Rm;h.zU=a;h.zT=b;D2(d,C(429),h);}if(ABT(g,f,e)!==null){e=new Rp;e.yD=a;e.yE=b;D2(d,C(430),e);}e=new Rn;e.Cb=a;e.B_=b;D2(d,C(431),e);HU(a);if(L2()){if(!a.bu.e0){f=new St;f.us=a;D2(d,C(432),f);}f=new Su;f.wT=a;D2(d,C(433),f);if(!a.bu.e0&&VI(HU(a))){f=new Ss;f.r0=a;D2(d,C(434),f);}}if(c!==null)Na(d,c);f=LE();i=Q(BJ,5).data;i[0]=C(182);i[1]=C(193);i[2]
=C(209);i[3]=C(208);i[4]=C(203);j=i.length;k=0;while(k<j){e=i[k];g=new RK;g.zs=a;g.zr=e;D2(f,e,g);k=k+1|0;}FJ(d,C(435),G0(f));b=LE();i=Q(BN,3);l=i.data;m=a.mq;BC(m);h=new Qv;h.x7=m;l[0]=C9(C(436),h);m=a.mq;BC(m);h=new Qt;h.z2=m;l[1]=C9(C(437),h);m=a.mq;BC(m);h=new Qu;h.qw=m;l[2]=C9(C(438),h);I5(b,C(439),C3(i),A86);i=Q(BN,2);l=i.data;m=a.ja;BC(m);h=new T9;h.z6=m;l[0]=C9(C(440),h);m=a.ja;BC(m);h=new T_;h.Cf=m;l[1]=C9(C(441),h);FJ(b,C(442),C3(i));m=new Zf;m.yW=a;I5(b,C(443),m,A86);if(a.bu.cK.bH.l6){i=Q(BN,2);l
=i.data;m=new ZL;m.st=a;l[0]=C9(C(444),m);m=new ZJ;m.AD=a;l[1]=C9(C(445),m);FJ(b,C(446),C3(i));}FJ(d,C(447),G0(b));j=c!==null?0:1;c=LE();FJ(c,C(448),AJh(a));if(j){e=new ZF;e.AT=a;D2(c,C(449),e);}g=new SZ;g.Bi=a;I5(c,C(450),g,A86);FJ(d,C(451),G0(c));return G0(d);}
function HU(a){return a.bu.cK.e2;}
function Wd(a){var b;b=new RO;b.um=a;return b;}
function AJh(a){var b,c,d,e,f;b=Q(BN,5);c=b.data;d=a.bu;BC(d);e=new SV;e.wk=d;c[0]=C9(C(452),e);e=a.bu;BC(e);f=new SW;f.sp=e;c[1]=C9(C(453),f);d=a.bu;BC(d);e=new SX;e.At=d;c[2]=C9(C(454),e);d=a.bu;BC(d);e=new SY;e.xf=d;c[3]=C9(C(455),e);d=a.bu;BC(d);e=new Tb;e.zj=d;c[4]=C9(C(456),e);return C3(b);}
function Qr(a,b){var c;c=new OV;c.xL=a;c.xM=b;return c;}
function KM(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DS(a.gr.bQ);d=a.bu.d;e=Ea(d);f=HE(d);g=a.bu.fB;if(c===null)h=null;else{A5a();switch(A87.data[c.fS]){case 1:h=Ox(g,e,f);break a;case 2:h=Zk(g,e,f);break a;default:}b=new E6;Y(b);N(b);}}c=a.bu;e=FB(c,b);g=Ja(c.d.h,e.bq,e.bv);f=SR(c,g);if(h!==null){g=c.d;i=e.bq;j=e.bv;e=new R$;e.Dz=c;e.Dy=b;e.Dx=f;h.tP(g,i,j,e,c.j8);}else{e=Cx(c.d.h.dP,g);if(e!==null)IX(c,e);else{e=Cx(c.d.h.dF,g);if(e!==null&&!ED(e))Zx(c.kS,b,e,c,f);else{c=c.kS;k=Q(BN,1);l=k.data;e=new BN;f=c.bQ;BC(f);g
=new AA7;g.Bl=f;CL(e,g,C(457));l[0]=e;Lk(c,b,C3(k));}}}}
function AB2(){var a=this;B.call(a);a.vE=null;a.vB=null;a.vC=null;}
function APW(a,b,c,d){var e,f,g,h;b=a.vE;e=a.vB;f=a.vC;ABo(b,e);if(f!==null)d.mY.f();if(ACf(d)){f=d.fn;g=e.c4;h=e.f8;Vq(b,BF((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.ng,e,d.tN);}}
function AKl(){var a=this;B.call(a);a.iy=null;a.fh=0;}
function Ma(a){var b=new AKl();AUO(b,a);return b;}
function AUO(a,b){a.iy=b;a.fh=0;}
function Bb(a){var b,c;b=a.iy.data;c=a.fh;a.fh=c+1|0;return b[c];}
function Rv(a){var b,c,d,e;if(a.fh!=a.iy.data.length){b=En();c=a.iy.data.length;d=a.fh;e=new K;M(e);H(U(H(U(H(e,C(422)),c),C(458)),d),C(459));Bk(b,L(e));}}
function Ra(){var a=this;B.call(a);a.Dh=null;a.t6=0;}
function AVD(a,b){var c,d,e,f;c=a.t6;d=(CQ(K$(b,0))).data;b=Bt();e=d[0];f=new K;M(f);U(H(U(H(f,C(460)),c),C(461)),e);Bk(b,L(f));b=Bt();e=d[1];f=new K;M(f);U(H(U(H(f,C(460)),c),C(462)),e);Bk(b,L(f));}
function AEw(){B.call(this);this.Pk=null;}
var Tv=G();
function AU8(a,b){}
var Vy=G();
var FQ=G();
var A88=null;var A89=null;var A7r=null;var A8$=null;var A8_=null;var A9a=null;function AJZ(){A88=new Ul;A89=new Ui;A7r=new Uj;A8$=new Ug;A8_=new Uh;A9a=new Wf;}
function AIs(){var a=this;B.call(a);a.pl=null;a.pH=null;a.iS=null;a.cB=null;a.oO=null;a.nb=null;a.i_=null;a.nL=null;a.pC=null;}
function AQH(a,b){var c=new AIs();A1L(c,a,b);return c;}
function A1L(a,b,c){a.cB=Ma(b);a.oO=c;}
function PY(a){var b,c,d,e,f,g,h,i;b=Bb(a.cB);c=new NR;QQ(c);a.iS=c;a.i_=BL();d=0;while(d<b){e=Bb(a.cB);f=Bb(a.cB);g=EC(a.oO,e,f);DU(a.iS,g,BL());BB(a.i_,g);d=d+1|0;}c=M6(N_(a.iS));while(Fs(c)){H2((OD(c)).cU,Po(a));}d=Bb(a.cB);if(d==(-1))a.pl=null;else{a.nb=Q(F1,d);c=new WA;h=a.cB;i=a.oO;g=a.i_;c.dQ=h;c.zi=i;c.yQ=g;a.nL=c;c=new RM;c.ew=h;c.A2=i;c.Bf=g;a.pC=c;a.pl=RB(a,null);}if(Bb(a.cB)!=(-1))a.pH=ZC(a.cB,a.nb);}
function RB(a,b){var c,d,e,f,g,h,i,j,k;c=Bb(a.cB);d=Bb(a.cB);e=a.nL;f=Bb(e.dQ);g=BL();h=0;while(h<f){BB(g,O6(e));h=h+1|0;}a:{switch(d){case -1:i=new NQ;i.ho=b;b=A7r;i.cL=b;i.fF=b;i.eZ=b;i.lq=b;i.hQ=b;break a;case 0:i=A4o(b);break a;case 1:i=new Li;AGc(i,b);H2(i.eZ,g);break a;default:}b=new C$;i=new K;M(i);U(H(i,C(463)),d);Bm(b,L(i));N(b);}i.eZ=g;b=a.pC;d=Bb(b.ew);e=BL();j=0;while(j<d){BB(e,Ht(b));j=j+1|0;}i.fF=e;i.lq=Po(a);d=Bb(a.cB);b=BL();j=0;while(j<d){e=O6(a.nL);g=Ht(a.pC);f=Bb(a.cB);k=new QR;k.ls=e;k.kU
=g;k.rS=f;BB(b,k);j=j+1|0;}i.hQ=b;j=Bb(a.cB);i.uE=j==(-1)?null:BG(a.i_,j);d=Bb(a.cB);b=BL();j=0;while(j<d){BB(b,RB(a,i));j=j+1|0;}i.cL=b;a.nb.data[c]=i;return i;}
function Po(a){var b,c,d,e;b=Bb(a.cB);c=BL();d=0;while(d<b){e=Bb(a.cB);BB(c,BG(a.i_,e));d=d+1|0;}return c;}
function AEW(){var a=this;B.call(a);a.l7=null;a.py=null;}
function ALj(){var a=this;B.call(a);a.EH=0;a.DW=0;a.rJ=0;a.nm=0;}
function ADy(){var a=this;B.call(a);a.sE=null;a.sF=null;}
function AVo(a){var b,c,d,e,f,g;b=a.sE;c=a.sF;if(BO(c.l7,b.d.gc)){c=c.py;CP(b,c.nm,c.rJ,0);Cf((Bi(b)).bN,c.nm,c.rJ);Cf((Bi(b)).bB,c.DW,c.EH);}else{d=(B3(b.fB.AS)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){GD(b);b=new YQ;b.s6=g;b.s7=c;BC(b);c=new YV;c.wx=b;$rt_globals.setTimeout(Bv(c,"onTimer"),0);}}}
function ADz(){var a=this;B.call(a);a.By=null;a.Bx=null;}
function AXK(a){IX(a.By,a.Bx);}
function F1(){var a=this;B.call(a);a.ho=null;a.cL=null;a.fF=null;a.eZ=null;a.hQ=null;a.lq=null;a.uE=null;}
function A4o(a){var b=new F1();AGc(b,a);return b;}
function AGc(a,b){a.ho=b;a.cL=BL();a.fF=BL();a.eZ=BL();a.lq=BL();a.hQ=BL();}
function ADV(a){var b;b=a.ho;if(b!==null)b.cL.q3(a);}
function VV(){B.call(this);this.sf=null;}
function AOy(a,b){b=b;ZK(a.sf,b);}
var NQ=G(F1);
var Li=G(F1);
function U1(){B.call(this);this.A1=null;}
function AVr(a,b){var c;b=b;c=a.A1;Bq(c.by,(Cx(c.fZ,b)).bp);}
function QR(){var a=this;B.call(a);a.ls=null;a.kU=null;a.rS=0;}
function Qj(){B.call(this);this.qE=null;}
function AYU(a,b){b=b;AAr(a.qE,b);}
var Qn=G(0);
var Fz=G(FE);
var Nv=G(Fz);
var Ul=G(Nv);
var N9=G(Ee);
var Ui=G(N9);
var Oo=G(Ft);
function AWy(a){var b;b=new Eg;Y(b);N(b);}
function AQw(a,b){var c;c=new Eg;Y(c);N(c);}
function APx(a,b){b=new Eg;Y(b);N(b);}
var Uj=G(Oo);
function AQD(a,b){var c;c=new BH;Y(c);N(c);}
function APQ(a){return 0;}
function ANM(a){return A8$;}
function AL$(a){return 1;}
var Ug=G();
function ALU(a){return 0;}
function AZF(a){var b;b=new MA;Y(b);N(b);}
function ASx(a){var b;b=new C$;Y(b);N(b);}
var Yt=G(0);
var Uh=G();
var Wf=G();
function Rs(){var a=this;B.call(a);a.mT=0;a.sw=null;}
function A3b(a,b){var c,d,e;c=a.sw;b=b;d=c.yL;e=c.yK;d=b.a<=d&&e<=b.b?1:0;a.mT=d;return d?0:1;}
var Kw=G(Eg);
var JK=G(Bu);
var Oh=G(Bu);
function Yl(){B.call(this);this.ze=null;}
function AZG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.ze;d=CQ(c[0]);e=(CQ(c[1])).data[0];if(!ABB(b.h)){c=b.h;if(c.cq==e){e=b.qB;f=Ma(d);EW(c.dP);EW(c.dF);Ni(c);while(f.fh>=f.iy.data.length?0:1){if(Bb(f)==(-1))continue;g=VQ(c,Bb(f));h=On(Cd(c,g.bq),g.bv);if(Bb(f)==(-1)){if(!e)continue;h.bZ=0;h.bF=h.bF|4;continue;}i=VQ(c,Bb(f));j=Bb(f);k=Bb(f);DU(c.dP,g,i);l=c.dF;m=BL();if(Cx(l,i)===null)DU(l,i,m);BB(Cx(c.dF,i),g);h.bZ=j;h.bF=k;}LA(b);if(b.EK){n=JP(E5(),b.A$);if(A3v(n,Bp(100))){b=E3(b);c=new K;M(c);H(HL(H(H(c,
b),C(464)),n),C(201));$rt_globals.console.info($rt_ustr(L(c)));}}}}}
function AHX(){B.call(this);this.Rz=null;}
function ABq(){B.call(this);this.vk=null;}
function AQm(a,b){Ms(a.vk,b);}
function Q_(){var a=this;B.call(a);a.yl=null;a.kh=null;}
function Vr(){B.call(this);this.sH=null;}
function AXR(a,b){var c,d;c=a.sH;c.k_=b;HC(c.E,b.p$);HC(c.G,c.k_.p_);b=c.mz;d=c.k_;b.g0=d;c.fI.et=d;}
var AEC=G();
function AEZ(b){var c,d,e,f,g,h,i,j;c=AVW();d=CJ(b);Bq(c,d);e=0;f=0;while(f<d){g=Cd(b,f);h=Jr(g);Bq(c,h);i=0;while(i<h){j=JX(g,i);G4(c,e,Mb(j));e=e+Mb(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return Q3(c);}
function AEI(b){var c,d,e,f,g,h,i,j,k;c=Bb(b);d=Q(Gs,c);e=d.data;f=0;while(f<c){a:{g=Bb(b);if(g!=(-1)){h=Bb(b);i=Bb(b);if(i==(-1)){j=new Gs;j.hd=h;e[g]=j;}else{j=new Gs;j.hd=h;j.nE=BP(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].nE.data[k]=Bb(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AIr(b,c,d,e){var f,g,h,i;f=Fc(b);g=Fc(c);h=AEZ(b);i=AEZ(c);b=new AA6;b.Bk=d;CU(e,b,C(465),I(B,[f,h,g,i]));}
function AAz(){var a=this;B.call(a);a.qR=null;a.qS=null;}
function AVp(a){var b,c;b=a.qR;c=a.qS;FP(b.bQ.b$,c);AA_(b);}
function Ha(){var a=this;B.call(a);a.ek=0;a.e1=0;a.ps=null;a.n$=0;a.gW=null;}
function AS6(a,b,c,d,e,f){var g=new Ha();AYu(g,a,b,c,d,e,f);return g;}
function AYu(a,b,c,d,e,f,g){a.ek=b;a.e1=c;a.ps=BF(f,g);a.n$=d;a.gW=e;}
function Qy(){Fz.call(this);this.jk=null;}
function Sy(a){var b;b=new AAG;NS(b,a.jk);return b;}
function TN(){Fz.call(this);this.y$=null;}
function M6(a){var b;b=new TG;NS(b,a.y$);return b;}
function QA(){FE.call(this);this.wj=null;}
function Wi(){B.call(this);this.v9=null;}
function AWY(a,b){b=b;Pn(a.v9,b);}
function T$(){B.call(this);this.uI=null;}
function AYz(a,b){b=b;Hf(a.uI,b);}
function KC(){var a=this;B.call(a);a.eH=null;a.mf=null;a.jv=0;}
function A35(a,b,c){var d=new KC();AGH(d,a,b,c);return d;}
function AGH(a,b,c,d){a.eH=b;a.mf=c;a.jv=d;}
function AJ1(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.eH,c.eH)&&BO(a.mf,c.mf)&&BO(CX(a.jv),CX(c.jv))?1:0;}return 0;}
function Mm(){var a=this;KC.call(a);a.k3=null;a.wL=0;}
function AVN(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){if(!AJ1(a,b))return 0;c=b;return BO(a.k3,c.k3);}return 0;}
function E$(){var a=this;B.call(a);a.fU=null;a.gK=null;a.zX=0;}
function A3u(a,b,c){var d=new E$();N1(d,a,b,c);return d;}
function N1(a,b,c,d){a.fU=b;a.gK=c;a.zX=d;}
function AIv(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.fU,c.fU)&&BO(a.gK,c.gK)?1:0;}return 0;}
function HI(){E$.call(this);this.hy=null;}
function Kj(){var a=this;E$.call(a);a.id=null;a.qJ=0;}
function A17(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){if(!AIv(a,b))return 0;c=b;return BO(a.id,c.id);}return 0;}
function Jn(){var a=this;E$.call(a);a.jT=null;a.i$=null;}
function AVb(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.jT,c.jT)&&BO(a.i$,c.i$)?1:0;}return 0;}
function Ym(){var a=this;B.call(a);a.qq=null;a.qs=0;a.qr=0;a.qo=null;a.qn=0;a.qp=0;}
function AZJ(a,b){var c,d,e,f,g,h,i,j;c=a.qq;d=a.qs;e=a.qr;f=a.qo;g=a.qn;h=a.qp;i=Cs(c.bb,5.0);d=Be((c.bb.bO.a-d|0)-i|0,Bd((i-d|0)-c.Q.k.a|0,b.j.a));j=Be((c.bb.bO.b-e|0)-i|0,Bd((i-e|0)-c.Q.k.b|0,b.j.b));X(f,d+g|0,j+h|0);Et(c,f,c.W.k);}
function AFq(){var a=this;Id.call(a);a.QN=null;a.R_=0;a.J_=0;a.Iu=0;}
function AA6(){B.call(this);this.Bk=null;}
function ARw(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.Bk;d=CQ(c[0]);c=Ma(d);e=new Ub;d=AEI(c);f=AEI(c);g=Bb(c);h=Q(L$,g);i=h.data;j=0;while(j<g){i[j]=Nq(Bb(c),Bb(c),Bb(c),Bb(c),Bb(c));j=j+1|0;}AF$(e,d,f,h);b.g(e);}
function M_(){var a=this;G6.call(a);a.fu=null;a.ji=null;a.wQ=null;a.nw=null;}
function A9b(a,b,c){var d=new M_();Xg(d,a,b,c);return d;}
function Xg(a,b,c,d){var e;UL(a,c,b,d);b=new UO;c=a.c3;P3(b,c.b$);d=K1(c);b.is=d;b.dJ=Ih(d);c=Ih(b.is);b.dI=c;Oj(b.eE,b.dJ,c);e=new O0;e.tU=b;c=b.dJ;c.iu=e;b.dI.iu=e;IZ(c,0);IZ(b.dI,0);c=b.dJ;c.b3=1;b.tT=AHq(c,b.dI);MD(b,I(CB,[b.dJ,b.dI,b.eE]));a.fu=b;Y3(b,a.iA);b=S_(a,a.fu,30.0);a.ji=b;c=new Wa;c.DD=a;b.CN=c;c=new V_;c.Dn=a;b.E1=c;EI(a.c3,b);}
function A0S(a,b){Fe(a.ji,b.cS);Y3(a.fu,b);}
function M7(a,b,c){var d,e;d=!c?a.fu.dI:a.fu.dJ;e=new Ri;e.vs=a;e.vt=b;e.vu=c;GK(d,b,e);}
function A1Q(a){a.fu=null;}
function AVy(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fu;d=c.dJ;c=c.dI;e=BW(d,b);f=BW(c,b);if(!e&&!f)return C3(I(BN,[M5(a,1,C(271)),M5(a,0,C(272))]));g=!e?C(272):C(271);if(e)c=d;d=M5(a,e,g);h=a.fu;i=h.is;j=a.nQ;k=new Qz;g=h.dJ;h=h.dI;l=i.bQ.b$;k.l2=g;k.l1=h;k.x$=l;g=a.c3;BC(g);h=new QF;h.yx=g;return Yb(UM(i,c,j,a,k,h),b,d);}
function M5(a,b,c){var d,e;d=new BN;e=new Z4;e.tb=a;e.ta=b;CL(d,e,c);return d;}
function Wj(){B.call(this);this.Ca=null;}
function A1f(a){return AA9(a.Ca);}
function AAl(){B.call(this);this.zp=null;}
function AUI(a,b,c){var d,e;c=a.zp;d=c.d.h;e=b.bp;b=c.fy;AAf(d.B.data[e],0,b);}
function WA(){var a=this;B.call(a);a.dQ=null;a.zi=null;a.yQ=null;}
function O6(a){var b,c,d,e,f,g,h,i;a:{b=Bb(a.dQ);switch(b){case 3:break;case 5:c=PR(a);d=Oc(a);b=Bb(a.dQ);e=Bb(a.dQ);f=Bb(a.dQ);g=BL();h=0;while(h<f){BB(g,Oc(a));h=h+1|0;}i=new Mm;AGH(i,c,d,b);i.k3=g;i.wL=e;break a;default:c=new C$;d=new K;M(d);U(H(d,C(466)),b);Bm(c,L(d));N(c);}i=A35(PR(a),Oc(a),Bb(a.dQ));}return i;}
function PR(a){var b,c;b=Bb(a.dQ);c=Bb(a.dQ);return AXn(EC(a.zi,b,c),Bb(a.dQ));}
function Oc(a){var b;b=Bb(a.dQ);if(b==(-1))return null;return BG(a.yQ,b);}
function RM(){var a=this;B.call(a);a.ew=null;a.A2=null;a.Bf=null;}
function Ht(a){var b,c,d,e,f;a:{b:{b=Bb(a.ew);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=W3(a);d=QW(a);b=Bb(a.ew);e=SB(a);f=new Kj;N1(f,c,d,2);f.qJ=b;f.id=e;break a;case 4:c=Ht(a);d=Ht(a);f=new Jn;N1(f,c.fU,c.gK,9);f.jT=c;f.i$=d;break a;case 5:f=A3u(W3(a),QW(a),Bb(a.ew));break a;case 9:c=SB(a);f=new HI;d=!ED(c)&&BG(c,0)!==null?(BG(c,0)).gK:null;N1(f,null,null,7);f.hy=BL();c=B7(c);while(B_(c)){e=Ca(c);if(!(e instanceof HI))BB(f.hy,e);else{e=e;H2(f.hy,e.hy);}}f.gK=d;break a;default:break b;}f
=null;break a;}c=new C$;d=new K;M(d);U(H(d,C(467)),b);Bm(c,L(d));N(c);}return f;}
function W3(a){var b,c;b=Bb(a.ew);c=Bb(a.ew);return AXn(EC(a.A2,b,c),Bb(a.ew));}
function QW(a){var b;b=Bb(a.ew);if(b==(-1))return null;return BG(a.Bf,b);}
function SB(a){var b,c,d;b=Bb(a.ew);c=BL();d=0;while(d<b){BB(c,Ht(a));d=d+1|0;}return c;}
function VC(){var a=this;B.call(a);a.u0=null;a.u1=null;a.u$=null;a.u_=0;a.u7=0;a.u8=0;a.u4=0;a.u5=0;a.u2=0;a.u3=0;a.vO=0;}
function ALs(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.u0;d=a.u1;e=a.u$;f=a.u_;g=a.u7;h=a.u8;i=a.u4;j=a.u5;k=a.u2;l=a.u3;m=a.vO;n=Cs(c.bb,5.0);o=c.W.hW();Cn(d,c.W.k);Cn(e,c.W.i);switch(f){case -1:f=Be(h+(b.j.a-g|0)|0,c.bb.bO.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.j.a|0)-g|0,Bd(o.a,n-c.Q.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.j.b-k|0)|0,(c.bb.bO.b+c.Q.k.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.j.b|0)-k|0,o.b);}Et(c,e,d);}
function UT(){var a=this;B.call(a);a.xO=null;a.xN=0.0;}
function NA(a,b){return Lt(a.xO,b,a.xN*2.0+0.875);}
function UO(){var a=this;Ik.call(a);a.is=null;a.dJ=null;a.dI=null;a.tT=null;a.mO=null;a.jO=0;}
function Y3(a,b){GL(a.is,b);a.eE.il=b;Fy(a.dJ,b);Fy(a.dI,b);}
function Wa(){B.call(this);this.DD=null;}
function V_(){B.call(this);this.Dn=null;}
function RC(){B.call(this);this.ss=null;}
function ANy(a,b,c){HM(Cd(a.ss.d.h,b.bp),0,J(c));}
var XY=G(0);
function ACu(){var a=this;B.call(a);a.mE=null;a.pG=null;a.jf=null;a.m6=null;}
function A3Z(a,b,c,d){var e=new ACu();AHk(e,a,b,c,d);return e;}
function AHk(a,b,c,d,e){a.mE=b;a.pG=c;a.jf=d;a.m6=e;}
function No(a,b){var c,d;c=new ACB;d=a.mE.values();c.kw=a;c.yv=d;c.k8=b;ABr(c);}
function YR(a){var b,c,d,e;b=a.m6;if(b===null){b=a.jf;c=b.data;d=Jk(a);e=c.length;b=C8(b,e+1|0);b.data[e]=d;b=b;a.m6=b;}return b;}
function Jk(a){return H4(a.mE.name);}
function A16(a){return a.jf;}
function AFs(a){return Ux(a.jf,Jk(a));}
function AHC(){var a=this;B.call(a);a.jE=null;a.dG=0;}
function AXn(a,b){var c=new AHC();ALv(c,a,b);return c;}
function ALv(a,b,c){a.jE=b;a.dG=c;}
function AQ$(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.dG==c.dG&&BO(a.jE,c.jE)?1:0;}return 0;}
function WM(){B.call(this);this.re=null;}
function AYx(a,b){b=b;OT(a.re,b);}
function V4(){B.call(this);this.xq=null;}
function A2$(a,b){b=b;Hf(a.xq,b);}
function O0(){B.call(this);this.tU=null;}
function A1T(a,b){var c,d,e;c=a.tU;d=c.dJ;if(d===b)c.jO=c.jO|1;e=c.dI;if(e===b)c.jO=c.jO|2;if((c.jO&3)==3){b=d.d.h;d=e.d.h;e=new XJ;e.wy=c;AIr(b,d,e,c.is.bQ.b$.e2);}}
function FK(){var a=this;B.call(a);a.kr=0;a.t8=0;a.jW=null;a.hh=null;a.yA=null;a.l$=null;}
function A9c(a){var b=new FK();NS(b,a);return b;}
function NS(a,b){a.l$=b;a.t8=b.c0;a.jW=null;}
function Fs(a){var b,c;if(a.jW!==null)return 1;while(true){b=a.kr;c=a.l$.b8.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.kr=b+1|0;}return 0;}
function AIY(a){var b;if(a.t8==a.l$.c0)return;b=new Ib;Y(b);N(b);}
function N3(a){var b,c,d,e;AIY(a);if(!Fs(a)){b=new MA;Y(b);N(b);}b=a.jW;if(b!==null){c=a.hh;if(c!==null)a.yA=c;a.hh=b;a.jW=b.cY;}else{d=a.l$.b8.data;e=a.kr;a.kr=e+1|0;b=d[e];a.hh=b;a.jW=b.cY;a.yA=null;}}
var AAG=G(FK);
function Qm(a){N3(a);return a.hh.cO;}
var TG=G(FK);
function OD(a){N3(a);return a.hh;}
var ZG=G(FK);
function AEO(){var a=this;B.call(a);a.Pz=null;a.SJ=0;}
function ZD(){var a=this;B.call(a);a.l=null;a.d3=0;a.mU=null;a.ra=0;a.hZ=0;a.fN=0;a.bA=0;a.ny=null;}
function Ng(a){return a.l.bR;}
function VR(a,b,c,d){var e,f,g,h,i,j;e=BL();f=a.d3;g=0;if(c!=f)a.d3=c;a:{switch(b){case -1073741784:h=new R6;c=a.bA+1|0;a.bA=c;Gq(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new QT;c=a.bA+1|0;a.bA=c;Gq(h,c);break a;case -33554392:h=new SO;c=a.bA+1|0;a.bA=c;Gq(h,c);break a;default:c=a.hZ+1|0;a.hZ=c;if(d!==null)h=A5i(c);else{h=new F9;Gq(h,0);g=1;}c=a.hZ;if(c<=(-1))break a;if(c>=10)break a;a.mU.data[c]=h;break a;}h=new AD2;Gq(h,(-1));}while(true){if(Fn(a.l)&&a.l.m==(-536870788))
{d=A1I(Ck(a,2),Ck(a,64));while(!DD(a.l)&&Fn(a.l)){i=a.l;j=i.m;if(j&&j!=(-536870788)&&j!=(-536870871))break;CI(d,Bl(i));i=a.l;if(i.bk!=(-536870788))continue;Bl(i);}i=Lu(a,d);i.T(h);}else if(a.l.bk==(-536870788)){i=H3(h);Bl(a.l);}else{i=Yd(a,h);d=a.l;if(d.bk==(-536870788))Bl(d);}if(i!==null)BB(e,i);if(DD(a.l))break;if(a.l.bk==(-536870871))break;}if(a.l.m9==(-536870788))BB(e,H3(h));if(a.d3!=f&&!g){a.d3=f;d=a.l;d.hf=f;d.m=d.bk;d.fp=d.fC;j=d.ds;d.y=j+1|0;d.jA=j;FU(d);}switch(b){case -1073741784:break;case -536870872:d
=new Wv;F$(d,e,h);return d;case -268435416:d=new ACU;F$(d,e,h);return d;case -134217688:d=new ZH;F$(d,e,h);return d;case -67108824:d=new Td;F$(d,e,h);return d;case -33554392:d=new D_;F$(d,e,h);return d;default:switch(e.q){case 0:break;case 1:return A4_(BG(e,0),h);default:return A3M(e,h);}return H3(h);}d=new Kv;F$(d,e,h);return d;}
function AKC(a){var b,c,d,e,f,g,h;b=BP(4);c=(-1);d=(-1);if(!DD(a.l)&&Fn(a.l)){e=b.data;c=Bl(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B5(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bk;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bl(f);f=a.l;g=f.bk;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bl(f);return A1w(e,3);}return A1w(e,2);}if(!Ck(a,2))return AE$(b[0]);if(Ck(a,64))return A0a(b[0]);return AV_(b[0]);}e=b.data;c=1;while(c<4&&!DD(a.l)&&Fn(a.l)){h=c+1|0;e[c]=Bl(a.l);c=h;}if(c==1){h=e[0];if(!(A9d.DO(h)==A9e?0:1))return VJ(a,e[0]);}if
(!Ck(a,2))return A5F(b,c);if(Ck(a,64)){f=new VE;PO(f,b,c);return f;}f=new ABs;PO(f,b,c);return f;}
function Yd(a,b){var c,d,e,f,g,h,i;if(Fn(a.l)&&!K0(a.l)&&Ny(a.l.m)){if(Ck(a,128)){c=AKC(a);if(!DD(a.l)){d=a.l;e=d.bk;if(!(e==(-536870871)&&!(b instanceof F9))&&e!=(-536870788)&&!Fn(d))c=Mo(a,b,c);}}else if(!XG(a.l)&&!ACl(a.l)){f=new PZ;M(f);while(!DD(a.l)&&Fn(a.l)&&!XG(a.l)&&!ACl(a.l)){if(!(!K0(a.l)&&!a.l.m)&&!(!K0(a.l)&&Ny(a.l.m))){g=a.l.m;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bl(a.l);if(!Mn(e))BM(f,e&65535);else J5(f,HR(e));}if(!Ck(a,2)){c=new ZW;D0(c);c.cG
=L(f);e=f.L;c.bI=e;c.o7=AZg(e);c.nB=AZg(c.bI);h=0;while(h<(c.bI-1|0)){RS(c.o7,P(c.cG,h),(c.bI-h|0)-1|0);RS(c.nB,P(c.cG,(c.bI-h|0)-1|0),(c.bI-h|0)-1|0);h=h+1|0;}}else if(Ck(a,64))c=A5E(f);else{c=new Pm;D0(c);c.jC=L(f);c.bI=f.L;}}else c=Mo(a,b,ADN(a,b));}else{d=a.l;if(d.bk!=(-536870871))c=Mo(a,b,ADN(a,b));else{if(b instanceof F9)N(Cl(C(21),d.bR,PX(d)));c=H3(b);}}a:{if(!DD(a.l)){e=a.l.bk;if(!(e==(-536870871)&&!(b instanceof F9))&&e!=(-536870788)){f=Yd(a,b);if(c instanceof Dc&&!(c instanceof FV)&&!(c instanceof C0)
&&!(c instanceof E8)){i=c;if(!f.b1(i.N)){c=new U_;Fh(c,i.N,i.e,i.jR);c.N.T(c);}}if((f.iW()&65535)!=43)c.T(f);else c.T(f.N);break a;}}if(c===null)return null;c.T(b);}if((c.iW()&65535)!=43)return c;return c.N;}
function Mo(a,b,c){var d,e,f,g,h;d=a.l;e=d.bk;if(c!==null&&!(c instanceof Cc)){switch(e){case -2147483606:Bl(d);d=new Wh;Dt(d,c,b,e);OF();c.T(A9f);return d;case -2147483605:Bl(d);d=new YE;Dt(d,c,b,(-2147483606));OF();c.T(A9f);return d;case -2147483585:Bl(d);d=new QD;Dt(d,c,b,(-536870849));OF();c.T(A9f);return d;case -2147483525:f=new Pj;d=Gm(d);g=a.fN+1|0;a.fN=g;MJ(f,d,c,b,(-536870849),g);OF();c.T(A9f);return f;case -1073741782:case -1073741781:Bl(d);d=new R1;Dt(d,c,b,e);c.T(d);return d;case -1073741761:Bl(d);d
=new Zj;Dt(d,c,b,(-536870849));c.T(b);return d;case -1073741701:h=new TR;d=Gm(d);e=a.fN+1|0;a.fN=e;MJ(h,d,c,b,(-536870849),e);c.T(h);return h;case -536870870:case -536870869:Bl(d);if(c.iW()!=(-2147483602)){d=new C0;Dt(d,c,b,e);}else if(Ck(a,32)){d=new R2;Dt(d,c,b,e);}else{d=new XO;f=Yp(a.d3);Dt(d,c,b,e);d.m8=f;}c.T(d);return d;case -536870849:Bl(d);d=new GE;Dt(d,c,b,(-536870849));c.T(b);return d;case -536870789:h=new Go;d=Gm(d);e=a.fN+1|0;a.fN=e;MJ(h,d,c,b,(-536870849),e);c.T(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bl(d);d=new AEf;Fh(d,f,b,e);f.e=d;return d;case -2147483585:Bl(d);c=new U6;Fh(c,f,b,(-2147483585));return c;case -2147483525:c=new Yc;Si(c,Gm(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bl(d);d=new Zi;Fh(d,f,b,e);f.e=d;return d;case -1073741761:Bl(d);c=new ABD;Fh(c,f,b,(-1073741761));return c;case -1073741701:c=new RR;Si(c,Gm(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bl(d);d=A32(f,b,e);f.e=d;return d;case -536870849:Bl(d);c
=new E8;Fh(c,f,b,(-536870849));return c;case -536870789:return A4I(Gm(d),f,b,(-536870789));default:}return c;}
function ADN(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F9;while(true){a:{e=a.l;f=e.bk;if((f&(-2147418113))==(-2147483608)){Bl(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.d3=g;else{if(f!=(-1073741784))g=a.d3;c=VR(a,f,g,b);e=a.l;if(e.bk!=(-536870871))N(Cl(C(21),e.bR,e.ds));Bl(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bl(e);c
=A1n(0);break a;case -2147483577:Bl(e);c=new XL;B6(c);break a;case -2147483558:Bl(e);c=new Vx;h=a.bA+1|0;a.bA=h;AKM(c,h);break a;case -2147483550:Bl(e);c=A1n(1);break a;case -2147483526:Bl(e);c=new ADd;B6(c);break a;case -536870876:Bl(e);a.bA=a.bA+1|0;if(Ck(a,8)){if(Ck(a,1)){c=A3E(a.bA);break a;}c=A3l(a.bA);break a;}if(Ck(a,1)){c=A3Q(a.bA);break a;}c=A3_(a.bA);break a;case -536870866:Bl(e);if(Ck(a,32)){c=A4g();break a;}c=A38(Yp(a.d3));break a;case -536870821:Bl(e);i=0;c=a.l;if(c.bk==(-536870818)){i=1;Bl(c);}c
=Lu(a,Hz(a,i));c.T(b);e=a.l;if(e.bk!=(-536870819))N(Cl(C(21),e.bR,e.ds));X5(e,1);Bl(a.l);break a;case -536870818:Bl(e);a.bA=a.bA+1|0;if(!Ck(a,8)){c=new Ll;B6(c);break a;}c=new WY;e=Yp(a.d3);B6(c);c.zn=e;break a;case 0:j=e.fC;if(j!==null)c=Lu(a,j);else{if(DD(e)){c=H3(b);break a;}c=AE$(f&65535);}Bl(a.l);break a;default:break b;}Bl(e);c=new Ll;B6(c);break a;}h=(f&2147483647)-48|0;if(a.hZ<h)N(Cl(C(21),FZ(e),PX(a.l)));Bl(e);a.bA=a.bA+1|0;c=!Ck(a,2)?A4u(h,a.bA):Ck(a,64)?A3F(h,a.bA):A5D(h,a.bA);a.mU.data[h].oW=1;a.ra
=1;break a;}if(f>=0&&!Hb(e)){c=VJ(a,f);Bl(a.l);}else if(f==(-536870788))c=H3(b);else{if(f!=(-536870871)){b=new Kk;c=!Hb(a.l)?Vt(f&65535):a.l.fC.cP();e=a.l;MT(b,c,e.bR,e.ds);N(b);}if(d){b=new Kk;e=a.l;MT(b,C(21),e.bR,e.ds);N(b);}c=H3(b);}}}if(f!=(-16777176))break;}return c;}
function Hz(a,b){var c,d,e,f,g,h,i,j,$$je;c=A1I(Ck(a,2),Ck(a,64));EO(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DD(a.l))break a;h=a.l;b=h.bk;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CI(c,d);d=Bl(a.l);h=a.l;if(h.bk!=(-536870874)){d=38;break d;}if(h.m==(-536870821)){Bl(h);e=1;d=(-1);break d;}Bl(h);if(g){c=Hz(a,0);break d;}if(a.l.bk==(-536870819))break d;Vj(c,Hz(a,0));break d;case -536870867:if(!g){b=h.m;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bl(h);h=a.l;i=h.bk;if(Hb(h))break c;if
(i<0){j=a.l.m;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Ny(i))break e;i=i&65535;break e;}catch($$e){$$je=EY($$e);if($$je instanceof Ew){break b;}else{throw $$e;}}}try{Cb(c,d,i);}catch($$e){$$je=EY($$e);if($$je instanceof Ew){break b;}else{throw $$e;}}Bl(a.l);d=(-1);break d;}}if(d>=0)CI(c,d);d=45;Bl(a.l);break d;case -536870821:if(d>=0){CI(c,d);d=(-1);}Bl(a.l);j=0;h=a.l;if(h.bk==(-536870818)){Bl(h);j=1;}if(!e)AH9(c,Hz(a,j));else Vj(c,Hz(a,j));e=0;Bl(a.l);break d;case -536870819:if(d>=0)CI(c,
d);d=93;Bl(a.l);break d;case -536870818:if(d>=0)CI(c,d);d=94;Bl(a.l);break d;case 0:if(d>=0)CI(c,d);h=a.l.fC;if(h===null)d=0;else{ALi(c,h);d=(-1);}Bl(a.l);break d;default:}if(d>=0)CI(c,d);d=Bl(a.l);}g=0;}N(Cl(C(21),Ng(a),a.l.ds));}N(Cl(C(21),Ng(a),a.l.ds));}if(!f){if(d>=0)CI(c,d);return c;}N(Cl(C(21),Ng(a),a.l.ds-1|0));}
function VJ(a,b){var c,d,e;c=Mn(b);if(Ck(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AV_(b&65535);}if(Ck(a,64)&&b>128){if(c){d=new Wq;D0(d);d.bI=2;d.s9=G5(G3(b));return d;}if(Ql(b))return AQ8(b&65535);if(!SE(b))return A0a(b&65535);return AXV(b&65535);}}if(!c){if(Ql(b))return AQ8(b&65535);if(!SE(b))return AE$(b&65535);return AXV(b&65535);}d=new Ef;D0(d);d.bI=2;d.g5=b;e=(HR(b)).data;d.mp=e[0];d.lr=e[1];return d;}
function Lu(a,b){var c,d,e;if(!AJV(b)){if(!b.R){if(b.ip())return AON(b);return AS8(b);}if(!b.ip())return AYa(b);c=new MK;ABW(c,b);return c;}c=AEA(b);d=new O5;B6(d);d.sk=c;d.Ef=c.bi;if(!b.R){if(b.ip())return AGu(AON(JA(b)),d);return AGu(AS8(JA(b)),d);}if(!b.ip())return AGu(AYa(JA(b)),d);c=new Rj;e=new MK;ABW(e,JA(b));AHM(c,e,d);return c;}
function JB(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Ck(a,b){return (a.d3&b)!=b?0:1;}
function AAe(){B.call(this);this.yV=null;}
function AQt(a,b){b.hw=a.yV.df;}
function AAd(){B.call(this);this.u9=null;}
function AZ5(a,b){b.ho=a.u9.df.cm;}
function XN(){B.call(this);this.rr=null;}
function AWr(a,b){b.hw=a.rr;}
var HY=G(0);
function Tj(){B.call(this);this.yY=null;}
function AYV(a,b,c,d){KT(a.yY,b,c.bp,d.bp);}
function Tk(){B.call(this);this.w8=null;}
function AXC(a,b,c,d){KT(a.w8,b,c.bp,d.bp);}
function IW(){B.call(this);this.om=0;}
var A9g=null;var A9h=null;var A9i=null;function ARE(a){var b=new IW();AGw(b,a);return b;}
function AGw(a,b){a.om=b;}
function X9(b){return !b?A9h:A9g;}
function AIw(){A9g=ARE(1);A9h=ARE(0);A9i=F($rt_booleancls());}
var KV=G(0);
var R7=G();
var X2=G(0);
var AFX=G();
function Sp(){B.call(this);this.vb=null;}
function AZn(a,b,c,d){JW(a.vb,b,c.bp,d.bp);}
var So=G();
function ATM(a,b){return b.eH.dG>=0?0:1;}
var Sn=G();
function AR1(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fU;if(b===null)break b;if(b.dG>=0)break b;}c=1;break a;}c=0;}return c;}
function Sr(){B.call(this);this.Ar=null;}
function AY2(a,b,c,d){JW(a.Ar,b,c.bp,d.bp);}
function BS(){var a=this;B.call(a);a.e=null;a.cx=0;a.xX=null;a.jR=0;}
var A6d=0;function B6(a){var b;b=A6d;A6d=b+1|0;a.xX=J6(b);}
function NN(a,b){var c;c=A6d;A6d=c+1|0;a.xX=J6(c);a.e=b;}
function II(a,b,c,d){var e;e=d.z;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function IP(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWl(a,b){a.jR=b;}
function AVX(a){return a.jR;}
function ASI(a){return a.e;}
function ATj(a,b){a.e=b;}
function A1B(a,b){return 1;}
function A2m(a){return null;}
function KB(a){var b;a.cx=1;b=a.e;if(b!==null){if(!b.cx){b=b.gE();if(b!==null){a.e.cx=1;a.e=b;}a.e.eU();}else if(b instanceof HT&&b.eY.oW)a.e=b.e;}}
function AHT(){A6d=1;}
function V5(){var a=this;B.call(a);a.rn=null;a.rl=null;a.rk=0;a.rm=0;}
function AZr(a,b){b=b;ES(a.rn,a.rl,b,a.rk,a.rm);}
function V6(){var a=this;B.call(a);a.B6=null;a.B5=null;a.B4=0;a.B3=0;}
function AOi(a,b){b=b;ES(a.B6,a.B5,b,a.B4,a.B3);}
function RL(){var a=this;B.call(a);a.x6=null;a.x4=null;a.x5=null;}
function AXj(a){AFw(a.x6,a.x4,a.x5);}
function XM(){B.call(this);this.wW=null;}
function AQG(a,b){ADv(a.wW,b);}
function AAV(){var a=this;B.call(a);a.B1=null;a.B2=null;}
function AMo(a){var b,c;b=a.B1;c=a.B2;Gj(b.x.bw,E9(c));}
function Io(){var a=this;Dh.call(a);a.jP=null;a.hN=null;a.gl=null;a.gU=null;}
var A9j=null;var A9k=null;function ASE(a,b){var c=new Io();AJR(c,a,b);return c;}
function A9l(a,b,c){var d=new Io();LP(d,a,b,c);return d;}
function AJR(a,b,c){LP(a,b,0,c);}
function LP(a,b,c,d){J_(a,Jk(b),c);a.gl=A9j;a.gU=A9k;a.jP=b;a.hN=d;Lo(a);IH(a);}
function Rt(a,b){return Ut(a.gl,b);}
function Lo(a){var b;b=new R5;b.sU=a;a.dX=b;a.jd=b;a.fb=A8Y;}
function ADC(a){var b;b=new AEd;b.tM=a;a.dX=b;a.jd=b;}
function AHm(){A9j=Q(Io,0);A9k=Q(KH,0);}
function CZ(){var a=this;BS.call(a);a.oW=0;a.ep=0;}
var A9f=null;function OF(){OF=Bn(CZ);AW0();}
function A5i(a){var b=new CZ();Gq(b,a);return b;}
function Gq(a,b){OF();B6(a);a.ep=b;}
function AMn(a,b,c,d){var e,f;e=I$(d,a.ep);M4(d,a.ep,b);f=a.e.c(b,c,d);if(f<0)M4(d,a.ep,e);return f;}
function AYJ(a){return a.ep;}
function AMD(a,b){return 0;}
function AW0(){var b;b=new XH;B6(b);A9f=b;}
function G8(){var a=this;B.call(a);a.bg=null;a.hf=0;a.fs=0;a.vD=0;a.m9=0;a.bk=0;a.m=0;a.zG=0;a.fC=null;a.fp=null;a.y=0;a.j4=0;a.ds=0;a.jA=0;a.bR=null;}
var A9m=null;var A9d=null;var A9e=0;function X5(a,b){if(b>0&&b<3)a.fs=b;if(b==1){a.m=a.bk;a.fp=a.fC;a.y=a.jA;a.jA=a.ds;FU(a);}}
function Hb(a){return a.fC===null?0:1;}
function K0(a){return a.fp===null?0:1;}
function Bl(a){FU(a);return a.m9;}
function Gm(a){var b;b=a.fC;FU(a);return b;}
function FU(a){var b,c,d,e,f,g,h,$$je;a.m9=a.bk;a.bk=a.m;a.fC=a.fp;a.ds=a.jA;a.jA=a.y;while(true){b=0;c=a.y>=a.bg.data.length?0:L0(a);a.m=c;a.fp=null;if(a.fs==4){if(c!=92)return;c=a.y;d=a.bg.data;c=c>=d.length?0:d[B9(a)];a.m=c;switch(c){case 69:break;default:a.m=92;a.y=a.j4;return;}a.fs=a.vD;a.m=a.y>(a.bg.data.length-2|0)?0:L0(a);}a:{c=a.m;if(c!=92){e=a.fs;if(e==1)switch(c){case 36:a.m=(-536870876);break a;case 40:if(a.bg.data[a.y]!=63){a.m=(-2147483608);break a;}B9(a);c=a.bg.data[a.y];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.m=(-134217688);B9(a);break b;default:N(Cl(C(21),FZ(a),a.y));}a.m=(-67108824);B9(a);}else{switch(c){case 33:break;case 60:B9(a);c=a.bg.data[a.y];e=1;break b;case 61:a.m=(-536870872);B9(a);break b;case 62:a.m=(-33554392);B9(a);break b;default:f=ALg(a);a.m=f;if(f<256){a.hf=f;f=f<<16;a.m=f;a.m=(-1073741784)|f;break b;}f=f&255;a.m=f;a.hf=f;f=f<<16;a.m=f;a.m=(-16777176)|f;break b;}a.m=(-268435416);B9(a);}}if(!e)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e
=a.y;d=a.bg.data;switch(e>=d.length?42:d[e]){case 43:a.m=c|(-2147483648);B9(a);break a;case 63:a.m=c|(-1073741824);B9(a);break a;default:}a.m=c|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);X5(a,2);break a;case 93:if(e!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fp=AHp(a,c);break a;case 124:a.m=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{c=a.y>=(a.bg.data.length-2|0)?(-1):L0(a);c:{a.m=c;switch(c){case -1:N(Cl(C(21),FZ(a),a.y));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=AGn(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fs!=1)break a;a.m=(-2147483648)|c;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cl(C(21),FZ(a),a.y));case 68:case 83:case 87:case 100:case 115:case 119:a.fp=Se(EC(a.bg,
a.j4,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.vD=a.fs;a.fs=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:c=a.y;d=a.bg.data;if(c>=(d.length-2|0))N(Cl(C(21),FZ(a),a.y));a.m=d[B9(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=YG(a,4);break a;case 120:a.m=YG(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=AJ2(a);h=0;if(a.m==80)h=1;try{a.fp=Se(g,h);}catch($$e){$$je=EY($$e);if($$je instanceof MN){N(Cl(C(21),FZ(a),a.y));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function AJ2(a){var b,c,d,e,f,g;b=new K;GN(b,10);c=a.y;d=a.bg;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EC(d,B9(a),1);f=new K;M(f);H(H(f,C(468)),b);return L(f);}B9(a);c=0;a:{while(true){g=a.y;d=a.bg.data;if(g>=(d.length-2|0))break;c=d[B9(a)];if(c==125)break a;BM(b,c);}}if(c!=125)N(Cl(C(21),a.bR,a.y));}if(!b.L)N(Cl(C(21),a.bR,a.y));f=L(b);if(J(f)==1){b=new K;M(b);H(H(b,C(468)),f);return L(b);}b:{c:{if(J(f)>3){if(ND(f,C(468)))break c;if(ND(f,C(469)))break c;}break b;}f=Dw(f,2);}return f;}
function AHp(a,b){var c,d,e,f,g,$$je;c=new K;GN(c,4);d=(-1);e=2147483647;a:{while(true){f=a.y;g=a.bg.data;if(f>=g.length)break a;b=g[B9(a)];if(b==125)break a;if(b==44&&d<0)try{d=KR(Ed(c),10);AHv(c,0,AIx(c));continue;}catch($$e){$$je=EY($$e);if($$je instanceof Du){break;}else{throw $$e;}}BM(c,b&65535);}N(Cl(C(21),a.bR,a.y));}if(b!=125)N(Cl(C(21),a.bR,a.y));if(c.L>0)b:{try{e=KR(Ed(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EY($$e);if($$je instanceof Du){}else{throw $$e;}}N(Cl(C(21),a.bR,a.y));}else if
(d<0)N(Cl(C(21),a.bR,a.y));if((d|e|(e-d|0))<0)N(Cl(C(21),a.bR,a.y));b=a.y;g=a.bg.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.m=(-2147483525);B9(a);break c;case 63:a.m=(-1073741701);B9(a);break c;default:}a.m=(-536870789);}c=new WF;c.fL=d;c.fK=e;return c;}
function FZ(a){return a.bR;}
function DD(a){return !a.bk&&!a.m&&a.y==a.zG&&!Hb(a)?1:0;}
function Ny(b){return b<0?0:1;}
function Fn(a){return !DD(a)&&!Hb(a)&&Ny(a.bk)?1:0;}
function XG(a){var b;b=a.bk;return b<=56319&&b>=55296?1:0;}
function ACl(a){var b;b=a.bk;return b<=57343&&b>=56320?1:0;}
function SE(b){return b<=56319&&b>=55296?1:0;}
function Ql(b){return b<=57343&&b>=56320?1:0;}
function YG(a,b){var c,d,e,f,$$je;c=new K;GN(c,b);d=a.bg.data.length-2|0;e=0;while(true){f=BK(e,b);if(f>=0)break;if(a.y>=d)break;BM(c,a.bg.data[B9(a)]);e=e+1|0;}if(!f)a:{try{b=KR(Ed(c),16);}catch($$e){$$je=EY($$e);if($$je instanceof Du){break a;}else{throw $$e;}}return b;}N(Cl(C(21),a.bR,a.y));}
function AGn(a){var b,c,d,e,f,g;b=3;c=1;d=a.bg.data;e=d.length-2|0;f=AB5(d[a.y],8);switch(f){case -1:break;default:if(f>3)b=2;B9(a);a:{while(true){if(c>=b)break a;g=a.y;if(g>=e)break a;g=AB5(a.bg.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B9(a);c=c+1|0;}}return f;}N(Cl(C(21),a.bR,a.y));}
function ALg(a){var b,c,d,e;b=1;c=a.hf;a:while(true){d=a.y;e=a.bg.data;if(d>=e.length)N(Cl(C(21),a.bR,d));b:{c:{switch(e[d]){case 41:B9(a);return c|256;case 45:if(!b)N(Cl(C(21),a.bR,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B9(a);}B9(a);return c;}
function B9(a){var b,c,d,e,f;b=a.y;a.j4=b;if(!(a.hf&4))a.y=b+1|0;else{c=a.bg.data.length-2|0;a.y=b+1|0;a:while(true){d=a.y;if(d<c&&RN(a.bg.data[d])){a.y=a.y+1|0;continue;}d=a.y;if(d>=c)break;e=a.bg.data;if(e[d]!=35)break;a.y=d+1|0;while(true){f=a.y;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.y=f+1|0;}}}return a.j4;}
function AKT(b){return A9m.Id(b);}
function L0(a){var b,c,d,e;b=a.bg.data[B9(a)];if(CS(b)){c=a.j4+1|0;d=a.bg.data;if(c<d.length){e=d[c];if(Dl(e)){B9(a);return EP(b,e);}}}return b;}
function PX(a){return a.ds;}
function Kk(){var a=this;BU.call(a);a.Dr=null;a.C9=null;a.sZ=0;}
function Cl(a,b,c){var d=new Kk();MT(d,a,b,c);return d;}
function MT(a,b,c,d){Y(a);a.sZ=(-1);a.Dr=b;a.C9=c;a.sZ=d;}
function XJ(){B.call(this);this.wy=null;}
function ASo(a,b){var c,d;c=a.wy;c.mO=b;HC(c.dJ,b.p$);HC(c.dI,c.mO.p_);b=c.tT;d=c.mO;b.g0=d;c.eE.et=d;}
var R6=G(CZ);
function AU9(a,b,c,d){var e;e=a.ep;B1(d,e,b-DE(d,e)|0);return a.e.c(b,c,d);}
function A0A(a,b){return 0;}
var AD2=G(CZ);
function AWi(a,b,c,d){return b;}
var QT=G(CZ);
function AMJ(a,b,c,d){if(DE(d,a.ep)!=b)b=(-1);return b;}
function SO(){CZ.call(this);this.xc=0;}
function AVa(a,b,c,d){var e;e=a.ep;B1(d,e,b-DE(d,e)|0);a.xc=b;return b;}
function AZI(a,b){return 0;}
var F9=G(CZ);
function ATu(a,b,c,d){if(d.ma!=1&&b!=d.z)return (-1);d.ky=1;M4(d,0,b);return b;}
function Cc(){BS.call(this);this.bI=0;}
function D0(a){B6(a);a.bI=1;}
function A2T(a,b,c,d){var e;if((b+a.ca()|0)>d.z){d.dM=1;return (-1);}e=a.bz(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function A1c(a){return a.bI;}
function APg(a,b){return 1;}
var AHa=G(Cc);
function H3(a){var b=new AHa();AYQ(b,a);return b;}
function AYQ(a,b){NN(a,b);a.bI=1;a.jR=1;a.bI=0;}
function A0T(a,b,c){return 0;}
function AW3(a,b,c,d){var e,f,g;e=d.z;f=d.c_;while(true){g=BK(b,e);if(g>0)return (-1);if(g<0&&Dl(P(c,b))&&b>f&&CS(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AWe(a,b,c,d,e){var f,g;f=e.z;g=e.c_;while(true){if(c<b)return (-1);if(c<f&&Dl(P(d,c))&&c>g&&CS(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AU_(a,b){return 0;}
function B8(){var a=this;BS.call(a);a.bK=null;a.eY=null;a.bd=0;}
function A3M(a,b){var c=new B8();F$(c,a,b);return c;}
function F$(a,b,c){B6(a);a.bK=b;a.eY=c;a.bd=c.ep;}
function AOB(a,b,c,d){var e,f,g,h;if(a.bK===null)return (-1);e=Gx(d,a.bd);DZ(d,a.bd,b);f=a.bK.q;g=0;while(true){if(g>=f){DZ(d,a.bd,e);return (-1);}h=(BG(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ARs(a,b){a.eY.e=b;}
function AYt(a,b){var c;a:{c=a.bK;if(c!==null){c=B7(c);while(true){if(!B_(c))break a;if(!(Ca(c)).b1(b))continue;else return 1;}}}return 0;}
function ARW(a,b){return I$(b,a.bd)>=0&&Gx(b,a.bd)==I$(b,a.bd)?0:1;}
function AM4(a){var b,c,d,e;a.cx=1;b=a.eY;if(b!==null&&!b.cx)KB(b);a:{b=a.bK;if(b!==null){c=b.q;d=0;while(true){if(d>=c)break a;b=BG(a.bK,d);e=b.gE();if(e===null)e=b;else{b.cx=1;EN(a.bK,d);AJz(a.bK,d,e);}if(!e.cx)e.eU();d=d+1|0;}}}if(a.e!==null)KB(a);}
var Kv=G(B8);
function ARg(a,b,c,d){var e,f,g,h;e=DE(d,a.bd);B1(d,a.bd,b);f=a.bK.q;g=0;while(true){if(g>=f){B1(d,a.bd,e);return (-1);}h=(BG(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A0f(a,b){return !DE(b,a.bd)?0:1;}
var D_=G(Kv);
function AWB(a,b,c,d){var e,f,g;e=DE(d,a.bd);B1(d,a.bd,b);f=a.bK.q;g=0;while(g<f){if((BG(a.bK,g)).c(b,c,d)>=0)return a.e.c(a.eY.xc,c,d);g=g+1|0;}B1(d,a.bd,e);return (-1);}
function AZ$(a,b){a.e=b;}
var Wv=G(D_);
function ARq(a,b,c,d){var e,f;e=a.bK.q;f=0;while(f<e){if((BG(a.bK,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ATo(a,b){return 0;}
var ACU=G(D_);
function AMA(a,b,c,d){var e,f;e=a.bK.q;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((BG(a.bK,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A1g(a,b){return 0;}
var ZH=G(D_);
function AM2(a,b,c,d){var e,f,g,h;e=a.bK.q;f=d.kB?0:d.c_;a:{g=a.e.c(b,c,d);if(g>=0){B1(d,a.bd,b);h=0;while(true){if(h>=e)break a;if((BG(a.bK,h)).cA(f,b,c,d)>=0){B1(d,a.bd,(-1));return g;}h=h+1|0;}}}return (-1);}
function A27(a,b){return 0;}
var Td=G(D_);
function AUQ(a,b,c,d){var e,f;e=a.bK.q;B1(d,a.bd,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((BG(a.bK,f)).cA(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A0q(a,b){return 0;}
function HT(){B8.call(this);this.dj=null;}
function A4_(a,b){var c=new HT();AE8(c,a,b);return c;}
function AE8(a,b,c){B6(a);a.dj=b;a.eY=c;a.bd=c.ep;}
function ALR(a,b,c,d){var e,f;e=Gx(d,a.bd);DZ(d,a.bd,b);f=a.dj.c(b,c,d);if(f>=0)return f;DZ(d,a.bd,e);return (-1);}
function AP$(a,b,c,d){var e;e=a.dj.cr(b,c,d);if(e>=0)DZ(d,a.bd,e);return e;}
function A0C(a,b,c,d,e){var f;f=a.dj.cA(b,c,d,e);if(f>=0)DZ(e,a.bd,f);return f;}
function AYq(a,b){return a.dj.b1(b);}
function AZE(a){var b;b=new Pf;AE8(b,a.dj,a.eY);a.e=b;return b;}
function ATT(a){var b;a.cx=1;b=a.eY;if(b!==null&&!b.cx)KB(b);b=a.dj;if(b!==null&&!b.cx){b=b.gE();if(b!==null){a.dj.cx=1;a.dj=b;}a.dj.eU();}}
function KH(){Dh.call(this);this.hJ=null;}
var G$=G();
function Z(){var a=this;G$.call(a);a.bi=0;a.cw=0;a.O=null;a.mi=null;a.mL=null;a.R=0;}
var A9n=null;function Qf(){Qf=Bn(Z);ANl();}
function By(a){var b;Qf();b=new ADt;b.D=BP(64);a.O=b;}
function AVI(a){return null;}
function AVm(a){return a.O;}
function AJV(a){var b,c,d,e,f;if(!a.cw)b=Il(a.O,0)>=2048?0:1;else{a:{c=a.O;b=0;d=c.bt;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=I6(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+I6(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AXx(a){return a.R;}
function A0$(a){return a;}
function AEA(a){var b,c;if(a.mL===null){b=a.fT();c=new U$;c.Fk=a;c.xn=b;By(c);a.mL=c;EO(c,a.cw);}return a.mL;}
function JA(a){var b,c;if(a.mi===null){b=a.fT();c=new U8;c.Du=a;c.AV=b;c.vK=a;By(c);a.mi=c;EO(c,a.bi);a.mi.R=a.R;}return a.mi;}
function A2h(a){return 0;}
function EO(a,b){var c;c=a.bi;if(c^b){a.bi=c?0:1;a.cw=a.cw?0:1;}if(!a.R)a.R=1;return a;}
function AOa(a){return a.bi;}
function Nw(b,c){Qf();return b.n(c);}
function J3(b,c){var d,e;Qf();if(b.dW()!==null&&c.dW()!==null){b=b.dW();c=c.dW();d=Be(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Se(b,c){var d,e,f;Qf();d=0;while(true){ASk();e=A9o.data;if(d>=e.length){f=new MN;Bm(f,C(21));f.D6=C(21);f.Fo=b;N(f);}e=e[d].data;if(Bj(b,e[0]))break;d=d+1|0;}return AKx(e[1],c);}
function ANl(){var b;b=new Hk;ASk();A9n=b;}
function AE1(){var a=this;Z.call(a);a.pB=0;a.q0=0;a.h0=0;a.nn=0;a.ey=0;a.gB=0;a.J=null;a.bD=null;}
function DF(){var a=new AE1();AUn(a);return a;}
function A1I(a,b){var c=new AE1();ANa(c,a,b);return c;}
function AUn(a){By(a);a.J=A29();}
function ANa(a,b,c){By(a);a.J=A29();a.pB=b;a.q0=c;}
function CI(a,b){a:{if(a.pB){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ey){OI(a.J,JB(b&65535));break a;}LS(a.J,JB(b&65535));break a;}if(a.q0&&b>128){a.h0=1;b=G5(G3(b));}}}if(!(!SE(b)&&!Ql(b))){if(a.nn)OI(a.O,b-55296|0);else LS(a.O,b-55296|0);}if(a.ey)OI(a.J,b);else LS(a.J,b);if(!a.R&&Mn(b))a.R=1;return a;}
function ALi(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(a.nn){if(!b.cw)Gh(a.O,b.fT());else Dq(a.O,b.fT());}else if(!b.cw)GB(a.O,b.fT());else{Gu(a.O,b.fT());Dq(a.O,b.fT());a.cw=a.cw?0:1;a.nn=1;}if(!a.gB&&b.dW()!==null){if(a.ey){if(!b.bi)Gh(a.J,b.dW());else Dq(a.J,b.dW());}else if(!b.bi)GB(a.J,b.dW());else{Gu(a.J,b.dW());Dq(a.J,b.dW());a.bi=a.bi?0:1;a.ey=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new XX;e.Eu=a;e.BD=c;e.vw=d;e.vm=b;By(e);a.bD=e;}else{e=new XZ;e.FA=a;e.tn=c;e.y4=d;e.yF=b;By(e);a.bD=e;}}else{if(c&&!a.ey
&&Oz(a.J)){d=new XU;d.EW=a;d.y8=b;By(d);a.bD=d;}else if(!c){d=new XS;d.pc=a;d.oD=c;d.xS=b;By(d);a.bD=d;}else{d=new XT;d.nN=a;d.mD=c;d.vp=b;By(d);a.bD=d;}a.gB=1;}}return a;}
function Cb(a,b,c){var d,e,f,g,h;if(b>c){d=new BU;Y(d);N(d);}a:{b:{if(!a.pB){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CI(a,b);b=b+1|0;}}if(!a.ey)IT(a.J,b,c+1|0);else{d=a.J;c=c+1|0;if(b>c){d=new BH;Y(d);N(d);}e=d.bt;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(JY(d,b)|IM(d,f));}else{h=d.D.data;h[g]=h[g]&JY(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&IM(d,f);}}Hm(d);}}}}return a;}
function AH9(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(b.h0)a.h0=1;c=a.cw;if(!(c^b.cw)){if(!c)GB(a.O,b.O);else Dq(a.O,b.O);}else if(c)Gh(a.O,b.O);else{Gu(a.O,b.O);Dq(a.O,b.O);a.cw=1;}if(!a.gB&&C5(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)GB(a.J,C5(b));else Dq(a.J,C5(b));}else if(c)Gh(a.J,C5(b));else{Gu(a.J,C5(b));Dq(a.J,C5(b));a.bi=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P9;e.Cp=a;e.uK=c;e.A6=d;e.vT=b;By(e);a.bD=e;}else{e=new Qq;e.CE=a;e.Bs=c;e.qG=d;e.q2=b;By(e);a.bD=e;}}else{if(!a.ey&&Oz(a.J)){if(!c){d=new XV;d.FB
=a;d.sv=b;By(d);a.bD=d;}else{d=new XW;d.Ex=a;d.Bj=b;By(d);a.bD=d;}}else if(!c){d=new X0;d.uN=a;d.tw=b;d.y6=c;By(d);a.bD=d;}else{d=new X1;d.tS=a;d.t1=b;d.z3=c;By(d);a.bD=d;}a.gB=1;}}}
function Vj(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(b.h0)a.h0=1;c=a.cw;if(!(c^b.cw)){if(!c)Dq(a.O,b.O);else GB(a.O,b.O);}else if(!c)Gh(a.O,b.O);else{Gu(a.O,b.O);Dq(a.O,b.O);a.cw=0;}if(!a.gB&&C5(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)Dq(a.J,C5(b));else GB(a.J,C5(b));}else if(!c)Gh(a.J,C5(b));else{Gu(a.J,C5(b));Dq(a.J,C5(b));a.bi=0;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P_;e.Et=a;e.AB=c;e.xl=d;e.tl=b;By(e);a.bD=e;}else{e=new Qa;e.EA=a;e.Ae=c;e.wR=d;e.Aw=b;By(e);a.bD=e;}}else{if(!a.ey&&Oz(a.J)){if(!c){d=new P7;d.CH
=a;d.yg=b;By(d);a.bD=d;}else{d=new P8;d.Fy=a;d.sh=b;By(d);a.bD=d;}}else if(!c){d=new Qb;d.Cc=a;d.BB=b;d.tW=c;By(d);a.bD=d;}else{d=new P6;d.tV=a;d.Aj=b;d.zh=c;By(d);a.bD=d;}a.gB=1;}}}
function Db(a,b){var c;c=a.bD;if(c!==null)return a.bi^c.n(b);return a.bi^DW(a.J,b);}
function C5(a){if(!a.gB)return a.J;return null;}
function AWZ(a){return a.O;}
function ATa(a){var b,c;if(a.bD!==null)return a;b=C5(a);c=new P$;c.Eg=a;c.lu=b;By(c);return EO(c,a.bi);}
function AY5(a){var b,c,d;b=new K;M(b);c=Il(a.J,0);while(c>=0){J5(b,HR(c));BM(b,124);c=Il(a.J,c+1|0);}d=b.L;if(d>0)UX(b,d-1|0);return L(b);}
function AOd(a){return a.h0;}
function MN(){var a=this;Bu.call(a);a.D6=null;a.Fo=null;}
function Em(){BS.call(this);this.N=null;}
function Dt(a,b,c,d){NN(a,c);a.N=b;a.jR=d;}
function A2Y(a){return a.N;}
function ASv(a,b){return !a.N.b1(b)&&!a.e.b1(b)?0:1;}
function A1J(a,b){return 1;}
function AQq(a){var b;a.cx=1;b=a.e;if(b!==null&&!b.cx){b=b.gE();if(b!==null){a.e.cx=1;a.e=b;}a.e.eU();}b=a.N;if(b!==null){if(!b.cx){b=b.gE();if(b!==null){a.N.cx=1;a.N=b;}a.N.eU();}else if(b instanceof HT&&b.eY.oW)a.N=b.e;}}
function Dc(){Em.call(this);this.be=null;}
function A32(a,b,c){var d=new Dc();Fh(d,a,b,c);return d;}
function Fh(a,b,c,d){Dt(a,b,c,d);a.be=b;}
function AUR(a,b,c,d){var e,f;e=0;a:{while((b+a.be.ca()|0)<=d.z){f=a.be.bz(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.be.ca()|0;e=e+(-1)|0;}return f;}
function FV(){Dc.call(this);this.kV=null;}
function A4I(a,b,c,d){var e=new FV();Si(e,a,b,c,d);return e;}
function Si(a,b,c,d,e){Fh(a,c,d,e);a.kV=b;}
function AVv(a,b,c,d){var e,f,g,h,i;e=a.kV;f=e.fL;g=e.fK;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.ca()|0)>d.z)break a;i=a.be.bz(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.be.ca()|0;h=h+(-1)|0;}return i;}if((b+a.be.ca()|0)>d.z){d.dM=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var C0=G(Em);
function AU2(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.N.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var E8=G(Dc);
function AYH(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function AUw(a,b){a.e=b;a.N.T(b);}
var U_=G(Dc);
function A2Q(a,b,c,d){while((b+a.be.ca()|0)<=d.z&&a.be.bz(b,c)>0){b=b+a.be.ca()|0;}return a.e.c(b,c,d);}
function AQQ(a,b,c,d){var e,f,g;e=a.e.cr(b,c,d);if(e<0)return (-1);f=e-a.be.ca()|0;while(f>=b&&a.be.bz(f,c)>0){g=f-a.be.ca()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.nP=null;a.m$=null;}
function AKx(a,b){if(!b&&a.nP===null)a.nP=a.F();else if(b&&a.m$===null)a.m$=EO(a.F(),1);if(b)return a.m$;return a.nP;}
var Du=G(BU);
function WF(){var a=this;G$.call(a);a.fL=0;a.fK=0;}
function AY_(a){var b,c,d,e,f;b=a.fL;c=a.fK;d=c!=2147483647?J6(c):C(21);e=new K;M(e);BM(e,123);f=U(e,b);BM(f,44);BM(H(f,d),125);return L(e);}
var XH=G(BS);
function APz(a,b,c,d){return b;}
function AZD(a,b){return 0;}
function ADt(){var a=this;B.call(a);a.D=null;a.bt=0;}
function A29(){var a=new ADt();AV6(a);return a;}
function AV6(a){a.D=BP(0);}
function LS(a,b){var c,d;c=b/32|0;if(b>=a.bt){J7(a,c+1|0);a.bt=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function IT(a,b,c){var d,e,f,g,h;d=BK(b,c);if(d>0){e=new BH;Y(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bt){J7(a,f+1|0);a.bt=c;}if(d==f){g=a.D.data;g[d]=g[d]|IM(a,b)&JY(a,c);}else{g=a.D.data;g[d]=g[d]|IM(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|JY(a,c);}}}
function IM(a,b){return (-1)<<(b%32|0);}
function JY(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function OI(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bt-1|0))Hm(a);}}
function DW(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Il(a,b){var c,d,e,f;c=a.bt;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return I6(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+I6(e[f])|0;f=f+1|0;}return (-1);}
function J7(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.D=Jj(a.D,c);}
function Hm(a){var b,c,d;b=(a.bt+31|0)/32|0;a.bt=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Xl(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bt=a.bt-32|0;}a.bt=a.bt-d|0;}}
function Dq(a,b){var c,d,e,f;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bt=Be(a.bt,b.bt);Hm(a);}
function Gh(a,b){var c,d,e;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}Hm(a);}
function GB(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;J7(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function Gu(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;J7(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}Hm(a);}
function Oz(a){return a.bt?0:1;}
function O5(){var a=this;B8.call(a);a.sk=null;a.Ef=0;}
function Rj(){var a=this;B8.call(a);a.n7=null;a.pM=null;}
function AGu(a,b){var c=new Rj();AHM(c,a,b);return c;}
function AHM(a,b,c){B6(a);a.n7=b;a.pM=c;}
function AMk(a,b,c,d){var e,f,g,h,i;e=a.n7.c(b,c,d);if(e<0)a:{f=a.pM;g=d.c_;e=d.z;h=b+1|0;e=BK(h,e);if(e>0){d.dM=1;e=(-1);}else{i=P(c,b);if(!f.sk.n(i))e=(-1);else{if(CS(i)){if(e<0&&Dl(P(c,h))){e=(-1);break a;}}else if(Dl(i)&&b>g&&CS(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AZw(a,b){a.e=b;a.pM.e=b;a.n7.T(b);}
function AMO(a,b){return 1;}
function AMC(a,b){return 1;}
function D4(){var a=this;B8.call(a);a.ea=null;a.C2=0;}
function AYa(a){var b=new D4();ABW(b,a);return b;}
function ABW(a,b){B6(a);a.ea=b.l5();a.C2=b.bi;}
function AWU(a,b,c,d){var e,f,g,h;e=d.z;if(b<e){f=b+1|0;g=P(c,b);if(a.n(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Js(g,f)&&a.n(EP(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AOq(a,b){return a.ea.n(b);}
function AMg(a,b){if(b instanceof Ef)return Nw(a.ea,b.g5);if(b instanceof EM)return Nw(a.ea,b.dH);if(b instanceof D4)return J3(a.ea,b.ea);if(!(b instanceof EE))return 1;return J3(a.ea,b.gu);}
function APs(a){return a.ea;}
function A04(a,b){a.e=b;}
function AN6(a,b){return 1;}
var MK=G(D4);
function APh(a,b){return a.ea.n(G5(G3(b)));}
function AEV(){var a=this;Cc.call(a);a.yO=null;a.CS=0;}
function AON(a){var b=new AEV();AQ0(b,a);return b;}
function AQ0(a,b){D0(a);a.yO=b.l5();a.CS=b.bi;}
function AYe(a,b,c){return !a.yO.n(FN(Fq(P(c,b))))?(-1):1;}
function EE(){var a=this;Cc.call(a);a.gu=null;a.Dc=0;}
function AS8(a){var b=new EE();ARJ(b,a);return b;}
function ARJ(a,b){D0(a);a.gu=b.l5();a.Dc=b.bi;}
function Wl(a,b,c){return !a.gu.n(P(c,b))?(-1):1;}
function ARu(a,b){if(b instanceof EM)return Nw(a.gu,b.dH);if(b instanceof EE)return J3(a.gu,b.gu);if(!(b instanceof D4)){if(!(b instanceof Ef))return 1;return 0;}return J3(a.gu,b.ea);}
function X4(){var a=this;B8.call(a);a.i9=null;a.p0=null;a.kT=0;}
function A1w(a,b){var c=new X4();AU3(c,a,b);return c;}
function AU3(a,b,c){B6(a);a.i9=b;a.kT=c;}
function AQf(a,b){a.e=b;}
function Rx(a){if(a.p0===null)a.p0=Hr(a.i9);return a.p0;}
function ALA(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.z;f=BP(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DX([k,l]):DX([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.kT;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.i9.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.kT==3){k=f[0];m=a.i9.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.kT==2){b=f[0];m=a.i9.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AVQ(a,b){return b instanceof X4&&!Bj(Rx(b),Rx(a))?0:1;}
function ATf(a,b){return 1;}
function EM(){Cc.call(this);this.dH=0;}
function AE$(a){var b=new EM();ARN(b,a);return b;}
function ARN(a,b){D0(a);a.dH=b;}
function AX5(a){return 1;}
function AOL(a,b,c){return a.dH!=P(c,b)?(-1):1;}
function ANS(a,b,c,d){var e,f,g;if(!(c instanceof BJ))return II(a,b,c,d);e=d.z;while(true){if(b>=e)return (-1);f=J1(c,a.dH,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function APu(a,b,c,d,e){var f;if(!(d instanceof BJ))return IP(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hw(d,a.dH,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AS9(a,b){if(b instanceof EM)return b.dH!=a.dH?0:1;if(!(b instanceof EE)){if(b instanceof D4)return b.n(a.dH);if(!(b instanceof Ef))return 1;return 0;}return Wl(b,0,Vt(a.dH))<=0?0:1;}
function AHy(){Cc.call(this);this.wH=0;}
function A0a(a){var b=new AHy();AY1(b,a);return b;}
function AY1(a,b){D0(a);a.wH=FN(Fq(b));}
function AUF(a,b,c){return a.wH!=FN(Fq(P(c,b)))?(-1):1;}
function AEi(){var a=this;Cc.call(a);a.vZ=0;a.xj=0;}
function AV_(a){var b=new AEi();ASh(b,a);return b;}
function ASh(a,b){D0(a);a.vZ=b;a.xj=JB(b);}
function ALJ(a,b,c){return a.vZ!=P(c,b)&&a.xj!=P(c,b)?(-1):1;}
function FY(){var a=this;B8.call(a);a.jK=0;a.m4=null;a.mA=null;a.mu=0;}
function A5F(a,b){var c=new FY();PO(c,a,b);return c;}
function PO(a,b,c){B6(a);a.jK=1;a.mA=b;a.mu=c;}
function A2p(a,b){a.e=b;}
function ARf(a,b,c,d){var e,f,g,h,i,j,k,l;e=BP(4);f=d.z;if(b>=f)return (-1);g=Ln(a,b,c,f);h=b+a.jK|0;i=AKT(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C6(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Ln(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AKT(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.jK|0;if(h>=f){b=k;break a;}g=Ln(a,h,c,f);b=k;}}}if(b!=a.mu)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.mA.data[g])break;g=g+1|0;}return (-1);}
function Vh(a){var b,c;if(a.m4===null){b=new K;M(b);c=0;while(c<a.mu){J5(b,HR(a.mA.data[c]));c=c+1|0;}a.m4=L(b);}return a.m4;}
function Ln(a,b,c,d){var e,f,g;a.jK=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Js(e,f)){g=B5(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CS(g[0])&&Dl(g[1])?EP(g[0],g[1]):g[0];a.jK=2;}}return e;}
function APA(a,b){return b instanceof FY&&!Bj(Vh(b),Vh(a))?0:1;}
function AZ_(a,b){return 1;}
var VE=G(FY);
var ABs=G(FY);
var Wh=G(C0);
function AWm(a,b,c,d){var e;while(true){e=a.N.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var YE=G(C0);
function AYX(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.N.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var GE=G(C0);
function A02(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.N.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function A1W(a,b){a.e=b;a.N.T(b);}
var QD=G(GE);
function APq(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AZb(a,b){a.e=b;}
function Go(){var a=this;C0.call(a);a.hc=null;a.dN=0;}
function A9p(a,b,c,d,e){var f=new Go();MJ(f,a,b,c,d,e);return f;}
function MJ(a,b,c,d,e,f){Dt(a,c,d,e);a.hc=b;a.dN=f;}
function A24(a,b,c,d){var e,f;e=WD(d,a.dN);if(!a.N.I(d))return a.e.c(b,c,d);if(e>=a.hc.fK)return a.e.c(b,c,d);f=a.dN;e=e+1|0;EU(d,f,e);f=a.N.c(b,c,d);if(f>=0){EU(d,a.dN,0);return f;}f=a.dN;e=e+(-1)|0;EU(d,f,e);if(e>=a.hc.fL)return a.e.c(b,c,d);EU(d,a.dN,0);return (-1);}
var Pj=G(Go);
function AO0(a,b,c,d){var e,f,g;e=0;f=a.hc.fK;a:{while(true){g=a.N.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.hc.fL)return (-1);return a.e.c(b,c,d);}
var R1=G(C0);
function AT0(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.N.c(b,c,d);}
var Zj=G(GE);
function AMP(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.N.c(b,c,d);return e;}
var TR=G(Go);
function AVf(a,b,c,d){var e,f,g;e=WD(d,a.dN);if(!a.N.I(d))return a.e.c(b,c,d);f=a.hc;if(e>=f.fK){EU(d,a.dN,0);return a.e.c(b,c,d);}if(e<f.fL){EU(d,a.dN,e+1|0);g=a.N.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){EU(d,a.dN,0);return g;}EU(d,a.dN,e+1|0);g=a.N.c(b,c,d);}return g;}
var R2=G(Em);
function A2U(a,b,c,d){var e;e=d.z;if(e>b)return a.e.cA(b,e,c,d);return a.e.c(b,c,d);}
function AST(a,b,c,d){var e;e=d.z;if(a.e.cA(b,e,c,d)>=0)return b;return (-1);}
function XO(){Em.call(this);this.m8=null;}
function ARv(a,b,c,d){var e,f;e=d.z;f=AB9(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cA(b,e,c,d);return a.e.c(b,c,d);}
function ALB(a,b,c,d){var e,f,g,h;e=d.z;f=a.e.cr(b,c,d);if(f<0)return (-1);g=AB9(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.e.cA(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.m8.iP(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function AB9(a,b,c,d){while(true){if(b>=c)return (-1);if(a.m8.iP(P(d,b)))break;b=b+1|0;}return b;}
var FD=G();
var A9q=null;var A9r=null;function Yp(b){var c;if(!(b&1)){c=A9r;if(c!==null)return c;c=new ACs;A9r=c;return c;}c=A9q;if(c!==null)return c;c=new ACr;A9q=c;return c;}
var AEf=G(Dc);
function AL9(a,b,c,d){var e;a:{while(true){if((b+a.be.ca()|0)>d.z)break a;e=a.be.bz(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var U6=G(E8);
function AQF(a,b,c,d){var e;if((b+a.be.ca()|0)<=d.z){e=a.be.bz(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var Yc=G(FV);
function A0F(a,b,c,d){var e,f,g,h,i;e=a.kV;f=e.fL;g=e.fK;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.ca()|0)>d.z)break a;i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.be.ca()|0)>d.z){d.dM=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Zi=G(Dc);
function ARr(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.be.ca()|0)<=d.z){e=a.be.bz(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ABD=G(E8);
function AMe(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.N.c(b,c,d);}
var RR=G(FV);
function A0V(a,b,c,d){var e,f,g,h,i,j;e=a.kV;f=e.fL;g=e.fK;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.be.ca()|0)<=d.z){i=a.be.bz(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.ca()|0)>d.z){d.dM=1;return (-1);}j=a.be.bz(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Ll=G(BS);
function AYs(a,b,c,d){if(b&&!(d.gC&&b==d.c_))return (-1);return a.e.c(b,c,d);}
function AXW(a,b){return 0;}
function AFe(){BS.call(this);this.vz=0;}
function A1n(a){var b=new AFe();APk(b,a);return b;}
function APk(a,b){B6(a);a.vz=b;}
function AVG(a,b,c,d){var e,f,g;e=b<d.z?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.kB?0:d.c_;return (e!=32&&!Zm(a,e,b,g,c)?0:1)^(f!=32&&!Zm(a,f,b-1|0,g,c)?0:1)^a.vz?(-1):a.e.c(b,c,d);}
function AVP(a,b){return 0;}
function Zm(a,b,c,d,e){var f;if(!KQ(b)&&b!=95){a:{if(CE(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(KQ(f))return 0;if(CE(f)!=6)return 1;}}return 1;}return 0;}
var XL=G(BS);
function APj(a,b,c,d){if(b!=d.iV)return (-1);return a.e.c(b,c,d);}
function AUo(a,b){return 0;}
function Vx(){BS.call(this);this.hg=0;}
function A3_(a){var b=new Vx();AKM(b,a);return b;}
function AKM(a,b){B6(a);a.hg=b;}
function AZY(a,b,c,d){var e,f,g;e=!d.gC?J(c):d.z;if(b>=e){B1(d,a.hg,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){B1(d,a.hg,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B1(d,a.hg,0);return a.e.c(b,c,d);}
function AWf(a,b){var c;c=!DE(b,a.hg)?0:1;B1(b,a.hg,(-1));return c;}
var ADd=G(BS);
function AZu(a,b,c,d){if(b<(d.kB?J(c):d.z))return (-1);d.dM=1;d.Fe=1;return a.e.c(b,c,d);}
function AUE(a,b){return 0;}
function WY(){BS.call(this);this.zn=null;}
function AWa(a,b,c,d){a:{if(b!=d.z){if(!b)break a;if(d.gC&&b==d.c_)break a;if(a.zn.Ah(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AOx(a,b){return 0;}
var AHj=G(B8);
function A4g(){var a=new AHj();AZk(a);return a;}
function AZk(a){B6(a);}
function AT3(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;if(f>e){d.dM=1;return (-1);}g=P(c,b);if(CS(g)){h=b+2|0;if(h<=e&&Js(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function AVS(a,b){a.e=b;}
function AZh(a){return (-2147483602);}
function AVR(a,b){return 1;}
function AE0(){B8.call(this);this.nr=null;}
function A38(a){var b=new AE0();AM6(b,a);return b;}
function AM6(a,b){B6(a);a.nr=b;}
function AZo(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;if(f>e){d.dM=1;return (-1);}g=P(c,b);if(CS(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Js(g,h))return a.nr.iP(EP(g,h))?(-1):a.e.c(b,c,d);}}return a.nr.iP(g)?(-1):a.e.c(f,c,d);}
function A0w(a,b){a.e=b;}
function ALo(a){return (-2147483602);}
function AUe(a,b){return 1;}
function AKR(){BS.call(this);this.jF=0;}
function A3Q(a){var b=new AKR();AXg(b,a);return b;}
function AXg(a,b){B6(a);a.jF=b;}
function APE(a,b,c,d){var e;e=!d.gC?J(c):d.z;if(b>=e){B1(d,a.jF,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){B1(d,a.jF,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AXf(a,b){var c;c=!DE(b,a.jF)?0:1;B1(b,a.jF,(-1));return c;}
function AJY(){BS.call(this);this.iI=0;}
function A3E(a){var b=new AJY();AXy(b,a);return b;}
function AXy(a,b){B6(a);a.iI=b;}
function AQ_(a,b,c,d){if((!d.gC?J(c)-b|0:d.z-b|0)<=0){B1(d,a.iI,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);B1(d,a.iI,1);return a.e.c(b+1|0,c,d);}
function AW_(a,b){var c;c=!DE(b,a.iI)?0:1;B1(b,a.iI,(-1));return c;}
function AH8(){BS.call(this);this.gP=0;}
function A3l(a){var b=new AH8();A26(b,a);return b;}
function A26(a,b){B6(a);a.gP=b;}
function AXS(a,b,c,d){var e,f,g;e=!d.gC?J(c)-b|0:d.z-b|0;if(!e){B1(d,a.gP,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B1(d,a.gP,0);return a.e.c(b,c,d);case 13:if(g!=10){B1(d,a.gP,0);return a.e.c(b,c,d);}B1(d,a.gP,0);return a.e.c(b,c,d);default:}return (-1);}
function AM$(a,b){var c;c=!DE(b,a.gP)?0:1;B1(b,a.gP,(-1));return c;}
function Ie(){var a=this;B8.call(a);a.qV=0;a.hB=0;}
function A5D(a,b){var c=new Ie();Qk(c,a,b);return c;}
function Qk(a,b,c){B6(a);a.qV=b;a.hB=c;}
function AMa(a,b,c,d){var e,f,g,h;e=GP(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=0;while(true){if(f>=J(e)){B1(d,a.hB,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&JB(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AZ7(a,b){a.e=b;}
function GP(a,b){var c,d;c=a.qV;d=Gx(b,c);c=I$(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.nu)?Cu(b.nu,d,c):null;}
function ASa(a,b){var c;c=!DE(b,a.hB)?0:1;B1(b,a.hB,(-1));return c;}
var AKX=G(Ie);
function A4u(a,b){var c=new AKX();A1M(c,a,b);return c;}
function A1M(a,b,c){Qk(a,b,c);}
function ANc(a,b,c,d){var e,f;e=GP(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=!ABV(c,e,b)?(-1):J(e);if(f<0)return (-1);B1(d,a.hB,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ATm(a,b,c,d){var e,f;e=GP(a,d);f=d.c_;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=YF(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ALY(a,b,c,d,e){var f,g;f=GP(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=QU(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AYS(a,b){return 1;}
var AJj=G(Ie);
function A3F(a,b){var c=new AJj();AOv(c,a,b);return c;}
function AOv(a,b,c){Qk(a,b,c);}
function AP6(a,b,c,d){var e,f;e=GP(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=0;while(true){if(f>=J(e)){B1(d,a.hB,J(e));return a.e.c(b+J(e)|0,c,d);}if(FN(Fq(P(e,f)))!=FN(Fq(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var PZ=G(GT);
function AOg(a,b,c,d,e){WI(a,b,c,d,e);return a;}
function AVJ(a,b,c,d){ADB(a,b,c,d);return a;}
function AV5(a,b){M3(a,b);}
function A1b(a,b,c){ADR(a,b,c);return a;}
function ZW(){var a=this;Cc.call(a);a.cG=null;a.o7=null;a.nB=null;}
function ANr(a,b,c){return !Lj(a,c,b)?(-1):a.bI;}
function AVE(a,b,c,d){var e,f,g;e=d.z;while(true){if(b>e)return (-1);f=P(a.cG,a.bI-1|0);a:{while(true){g=a.bI;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&Lj(a,c,b))break;b=b+AAA(a.o7,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bI|0,c,d)>=0)break;b=b+1|0;}return b;}
function AXk(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cG,0);g=(J(d)-c|0)-a.bI|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&Lj(a,d,c))break;c=c-AAA(a.nB,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bI|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AOQ(a,b){var c;if(b instanceof EM)return b.dH!=P(a.cG,0)?0:1;if(b instanceof EE)return Wl(b,0,Cu(a.cG,0,1))<=0?0:1;if(!(b instanceof D4)){if(!(b instanceof Ef))return 1;return J(a.cG)>1&&b.g5==EP(P(a.cG,0),P(a.cG,1))?1:0;}a:{b:{b=b;if(!b.n(P(a.cG,0))){if(J(a.cG)<=1)break b;if(!b.n(EP(P(a.cG,0),P(a.cG,1))))break b;}c=1;break a;}c=0;}return c;}
function Lj(a,b,c){var d;d=0;while(d<a.bI){if(P(b,d+c|0)!=P(a.cG,d))return 0;d=d+1|0;}return 1;}
function AEh(){Cc.call(this);this.lX=null;}
function A5E(a){var b=new AEh();A1t(b,a);return b;}
function A1t(a,b){var c,d,e;D0(a);c=new K;M(c);d=0;while(true){e=BK(d,b.L);if(e>=0){a.lX=L(c);a.bI=c.L;return;}if(d<0)break;if(e>=0)break;BM(c,FN(Fq(b.C.data[d])));d=d+1|0;}b=new BH;Y(b);N(b);}
function AQa(a,b,c){var d;d=0;while(true){if(d>=J(a.lX))return J(a.lX);if(P(a.lX,d)!=FN(Fq(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Pm(){Cc.call(this);this.jC=null;}
function A0G(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.jC))return J(a.jC);e=P(a.jC,d);f=b+d|0;if(e!=P(c,f)&&JB(P(a.jC,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Hk=G();
var A9s=null;var A9t=null;var A9o=null;function ASk(){ASk=Bn(Hk);ANH();}
function ANH(){A9s=A4c();A9t=A4W();A9o=I($rt_arraycls(B),[I(B,[C(470),A4j()]),I(B,[C(471),A3j()]),I(B,[C(472),A5q()]),I(B,[C(473),A5u()]),I(B,[C(474),A9t]),I(B,[C(475),A43()]),I(B,[C(476),A3J()]),I(B,[C(477),A4w()]),I(B,[C(478),A4t()]),I(B,[C(479),A3r()]),I(B,[C(480),A3y()]),I(B,[C(481),A4z()]),I(B,[C(482),A31()]),I(B,[C(483),A3f()]),I(B,[C(484),A5s()]),I(B,[C(485),A3x()]),I(B,[C(486),A41()]),I(B,[C(487),A4H()]),I(B,[C(488),A42()]),I(B,[C(489),A3t()]),I(B,[C(490),A5x()]),I(B,[C(491),A4C()]),I(B,[C(492),A3S()]),
I(B,[C(493),A5o()]),I(B,[C(494),A5l()]),I(B,[C(495),A4d()]),I(B,[C(496),A3s()]),I(B,[C(497),A5e()]),I(B,[C(498),A9s]),I(B,[C(499),A3V()]),I(B,[C(500),A4y()]),I(B,[C(501),A9s]),I(B,[C(502),A3d()]),I(B,[C(503),A9t]),I(B,[C(504),A3B()]),I(B,[C(505),R(0,127)]),I(B,[C(506),R(128,255)]),I(B,[C(507),R(256,383)]),I(B,[C(508),R(384,591)]),I(B,[C(509),R(592,687)]),I(B,[C(510),R(688,767)]),I(B,[C(511),R(768,879)]),I(B,[C(512),R(880,1023)]),I(B,[C(513),R(1024,1279)]),I(B,[C(514),R(1280,1327)]),I(B,[C(515),R(1328,1423)]),
I(B,[C(516),R(1424,1535)]),I(B,[C(517),R(1536,1791)]),I(B,[C(518),R(1792,1871)]),I(B,[C(519),R(1872,1919)]),I(B,[C(520),R(1920,1983)]),I(B,[C(521),R(2304,2431)]),I(B,[C(522),R(2432,2559)]),I(B,[C(523),R(2560,2687)]),I(B,[C(524),R(2688,2815)]),I(B,[C(525),R(2816,2943)]),I(B,[C(526),R(2944,3071)]),I(B,[C(527),R(3072,3199)]),I(B,[C(528),R(3200,3327)]),I(B,[C(529),R(3328,3455)]),I(B,[C(530),R(3456,3583)]),I(B,[C(531),R(3584,3711)]),I(B,[C(532),R(3712,3839)]),I(B,[C(533),R(3840,4095)]),I(B,[C(534),R(4096,4255)]),
I(B,[C(535),R(4256,4351)]),I(B,[C(536),R(4352,4607)]),I(B,[C(537),R(4608,4991)]),I(B,[C(538),R(4992,5023)]),I(B,[C(539),R(5024,5119)]),I(B,[C(540),R(5120,5759)]),I(B,[C(541),R(5760,5791)]),I(B,[C(542),R(5792,5887)]),I(B,[C(543),R(5888,5919)]),I(B,[C(544),R(5920,5951)]),I(B,[C(545),R(5952,5983)]),I(B,[C(546),R(5984,6015)]),I(B,[C(547),R(6016,6143)]),I(B,[C(548),R(6144,6319)]),I(B,[C(549),R(6400,6479)]),I(B,[C(550),R(6480,6527)]),I(B,[C(551),R(6528,6623)]),I(B,[C(552),R(6624,6655)]),I(B,[C(553),R(6656,6687)]),
I(B,[C(554),R(7424,7551)]),I(B,[C(555),R(7552,7615)]),I(B,[C(556),R(7616,7679)]),I(B,[C(557),R(7680,7935)]),I(B,[C(558),R(7936,8191)]),I(B,[C(559),R(8192,8303)]),I(B,[C(560),R(8304,8351)]),I(B,[C(561),R(8352,8399)]),I(B,[C(562),R(8400,8447)]),I(B,[C(563),R(8448,8527)]),I(B,[C(564),R(8528,8591)]),I(B,[C(565),R(8592,8703)]),I(B,[C(566),R(8704,8959)]),I(B,[C(567),R(8960,9215)]),I(B,[C(568),R(9216,9279)]),I(B,[C(569),R(9280,9311)]),I(B,[C(570),R(9312,9471)]),I(B,[C(571),R(9472,9599)]),I(B,[C(572),R(9600,9631)]),
I(B,[C(573),R(9632,9727)]),I(B,[C(574),R(9728,9983)]),I(B,[C(575),R(9984,10175)]),I(B,[C(576),R(10176,10223)]),I(B,[C(577),R(10224,10239)]),I(B,[C(578),R(10240,10495)]),I(B,[C(579),R(10496,10623)]),I(B,[C(580),R(10624,10751)]),I(B,[C(581),R(10752,11007)]),I(B,[C(582),R(11008,11263)]),I(B,[C(583),R(11264,11359)]),I(B,[C(584),R(11392,11519)]),I(B,[C(585),R(11520,11567)]),I(B,[C(586),R(11568,11647)]),I(B,[C(587),R(11648,11743)]),I(B,[C(588),R(11776,11903)]),I(B,[C(589),R(11904,12031)]),I(B,[C(590),R(12032,12255)]),
I(B,[C(591),R(12272,12287)]),I(B,[C(592),R(12288,12351)]),I(B,[C(593),R(12352,12447)]),I(B,[C(594),R(12448,12543)]),I(B,[C(595),R(12544,12591)]),I(B,[C(596),R(12592,12687)]),I(B,[C(597),R(12688,12703)]),I(B,[C(598),R(12704,12735)]),I(B,[C(599),R(12736,12783)]),I(B,[C(600),R(12784,12799)]),I(B,[C(601),R(12800,13055)]),I(B,[C(602),R(13056,13311)]),I(B,[C(603),R(13312,19893)]),I(B,[C(604),R(19904,19967)]),I(B,[C(605),R(19968,40959)]),I(B,[C(606),R(40960,42127)]),I(B,[C(607),R(42128,42191)]),I(B,[C(608),R(42752,
42783)]),I(B,[C(609),R(43008,43055)]),I(B,[C(610),R(44032,55203)]),I(B,[C(611),R(55296,56191)]),I(B,[C(612),R(56192,56319)]),I(B,[C(613),R(56320,57343)]),I(B,[C(614),R(57344,63743)]),I(B,[C(615),R(63744,64255)]),I(B,[C(616),R(64256,64335)]),I(B,[C(617),R(64336,65023)]),I(B,[C(618),R(65024,65039)]),I(B,[C(619),R(65040,65055)]),I(B,[C(620),R(65056,65071)]),I(B,[C(621),R(65072,65103)]),I(B,[C(622),R(65104,65135)]),I(B,[C(623),R(65136,65279)]),I(B,[C(624),R(65280,65519)]),I(B,[C(625),R(0,1114111)]),I(B,[C(626),
A4A()]),I(B,[C(627),B4(0,1)]),I(B,[C(628),Kl(62,1)]),I(B,[C(629),B4(1,1)]),I(B,[C(630),B4(2,1)]),I(B,[C(631),B4(3,0)]),I(B,[C(632),B4(4,0)]),I(B,[C(633),B4(5,1)]),I(B,[C(634),Kl(448,1)]),I(B,[C(635),B4(6,1)]),I(B,[C(636),B4(7,0)]),I(B,[C(637),B4(8,1)]),I(B,[C(638),Kl(3584,1)]),I(B,[C(639),B4(9,1)]),I(B,[C(640),B4(10,1)]),I(B,[C(641),B4(11,1)]),I(B,[C(642),Kl(28672,0)]),I(B,[C(643),B4(12,0)]),I(B,[C(644),B4(13,0)]),I(B,[C(645),B4(14,0)]),I(B,[C(646),A4T(983040,1,1)]),I(B,[C(647),B4(15,0)]),I(B,[C(648),B4(16,
1)]),I(B,[C(649),B4(18,1)]),I(B,[C(650),A3P(19,0,1)]),I(B,[C(651),Kl(1643118592,1)]),I(B,[C(652),B4(20,0)]),I(B,[C(653),B4(21,0)]),I(B,[C(654),B4(22,0)]),I(B,[C(655),B4(23,0)]),I(B,[C(656),B4(24,1)]),I(B,[C(657),Kl(2113929216,1)]),I(B,[C(658),B4(25,1)]),I(B,[C(659),B4(26,0)]),I(B,[C(660),B4(27,0)]),I(B,[C(661),B4(28,1)]),I(B,[C(662),B4(29,0)]),I(B,[C(663),B4(30,0)])]);}
function Wq(){Cc.call(this);this.s9=0;}
function ASA(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.s9!=G5(G3(EP(e,d)))?(-1):2;}
function NV(){B8.call(this);this.hp=0;}
function AQ8(a){var b=new NV();AMT(b,a);return b;}
function AMT(a,b){B6(a);a.hp=b;}
function AZB(a,b){a.e=b;}
function AWg(a,b,c,d){var e,f;e=b+1|0;if(e>d.z){d.dM=1;return (-1);}f=P(c,b);if(b>d.c_&&CS(P(c,b-1|0)))return (-1);if(a.hp!=f)return (-1);return a.e.c(e,c,d);}
function AOO(a,b,c,d){var e,f,g,h;if(!(c instanceof BJ))return II(a,b,c,d);e=d.c_;f=d.z;while(true){if(b>=f)return (-1);g=J1(c,a.hp,b);if(g<0)return (-1);if(g>e&&CS(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AWF(a,b,c,d,e){var f,g;if(!(d instanceof BJ))return IP(a,b,c,d,e);f=e.c_;a:{while(true){if(c<b)return (-1);g=Hw(d,a.hp,c);if(g<0)break a;if(g<b)break a;if(g>f&&CS(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALX(a,b){if(b instanceof EM)return 0;if(b instanceof EE)return 0;if(b instanceof D4)return 0;if(b instanceof Ef)return 0;if(b instanceof N2)return 0;if(!(b instanceof NV))return 1;return b.hp!=a.hp?0:1;}
function AS2(a,b){return 1;}
function N2(){B8.call(this);this.ha=0;}
function AXV(a){var b=new N2();AQ9(b,a);return b;}
function AQ9(a,b){B6(a);a.ha=b;}
function AV4(a,b){a.e=b;}
function ALE(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;g=BK(f,e);if(g>0){d.dM=1;return (-1);}h=P(c,b);if(g<0&&Dl(P(c,f)))return (-1);if(a.ha!=h)return (-1);return a.e.c(f,c,d);}
function AZM(a,b,c,d){var e,f;if(!(c instanceof BJ))return II(a,b,c,d);e=d.z;while(true){if(b>=e)return (-1);f=J1(c,a.ha,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dl(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function ASw(a,b,c,d,e){var f,g;if(!(d instanceof BJ))return IP(a,b,c,d,e);f=e.z;a:{while(true){if(c<b)return (-1);g=Hw(d,a.ha,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dl(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ANs(a,b){if(b instanceof EM)return 0;if(b instanceof EE)return 0;if(b instanceof D4)return 0;if(b instanceof Ef)return 0;if(b instanceof NV)return 0;if(!(b instanceof N2))return 1;return b.ha!=a.ha?0:1;}
function AZS(a,b){return 1;}
function Ef(){var a=this;Cc.call(a);a.mp=0;a.lr=0;a.g5=0;}
function A0h(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.mp==e&&a.lr==d?2:(-1);}
function AY6(a,b,c,d){var e,f;if(!(c instanceof BJ))return II(a,b,c,d);e=d.z;while(b<e){b=J1(c,a.mp,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.lr==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AMU(a,b,c,d,e){var f;if(!(d instanceof BJ))return IP(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hw(d,a.lr,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.mp==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A0b(a,b){if(b instanceof Ef)return b.g5!=a.g5?0:1;if(b instanceof D4)return b.n(a.g5);if(b instanceof EM)return 0;if(!(b instanceof EE))return 1;return 0;}
var ACr=G(FD);
function AMY(a,b){return b!=10?0:1;}
function AR9(a,b,c){return b!=10?0:1;}
var ACs=G(FD);
function A0W(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ATO(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AGJ(){var a=this;B.call(a);a.or=null;a.mC=null;a.jl=0;a.wm=0;}
function AZg(a){var b=new AGJ();APi(b,a);return b;}
function APi(a,b){var c,d;while(true){c=a.jl;if(b<c)break;a.jl=c<<1|1;}d=c<<1|1;a.jl=d;d=d+1|0;a.or=BP(d);a.mC=BP(d);a.wm=b;}
function RS(a,b,c){var d,e,f,g;d=0;e=a.jl;f=b&e;while(true){g=a.or.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.mC.data[f]=c;}
function AAA(a,b){var c,d,e,f;c=a.jl;d=b&c;e=0;while(true){f=a.or.data[d];if(!f)break;if(f==b)return a.mC.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.wm;}
var AEu=G();
var NT=G(Bf);
function A4c(){var a=new NT();AO1(a);return a;}
function AO1(a){}
function AJp(a){return CI(Cb(DF(),9,13),32);}
var Nh=G(Bf);
function A4W(){var a=new Nh();ASW(a);return a;}
function ASW(a){}
function AJU(a){return Cb(DF(),48,57);}
var AGD=G(Bf);
function A4j(){var a=new AGD();AOC(a);return a;}
function AOC(a){}
function A0z(a){return Cb(DF(),97,122);}
var AGY=G(Bf);
function A3j(){var a=new AGY();APm(a);return a;}
function APm(a){}
function AS5(a){return Cb(DF(),65,90);}
var AG0=G(Bf);
function A5q(){var a=new AG0();AMv(a);return a;}
function AMv(a){}
function ANX(a){return Cb(DF(),0,127);}
var NP=G(Bf);
function A5u(){var a=new NP();ANf(a);return a;}
function ANf(a){}
function AE3(a){return Cb(Cb(DF(),97,122),65,90);}
var LQ=G(NP);
function A43(){var a=new LQ();AO9(a);return a;}
function AO9(a){}
function AFx(a){return Cb(AE3(a),48,57);}
var AHZ=G(Bf);
function A3J(){var a=new AHZ();AYY(a);return a;}
function AYY(a){}
function AXz(a){return Cb(Cb(Cb(DF(),33,64),91,96),123,126);}
var OK=G(LQ);
function A4w(){var a=new OK();ARV(a);return a;}
function ARV(a){}
function AH6(a){return Cb(Cb(Cb(AFx(a),33,64),91,96),123,126);}
var AJB=G(OK);
function A4t(){var a=new AJB();ASS(a);return a;}
function ASS(a){}
function AQs(a){return CI(AH6(a),32);}
var AF1=G(Bf);
function A3r(){var a=new AF1();A0H(a);return a;}
function A0H(a){}
function AWu(a){return CI(CI(DF(),32),9);}
var AFa=G(Bf);
function A3y(){var a=new AFa();A1$(a);return a;}
function A1$(a){}
function AQo(a){return CI(Cb(DF(),0,31),127);}
var AIR=G(Bf);
function A4z(){var a=new AIR();AMF(a);return a;}
function AMF(a){}
function ATR(a){return Cb(Cb(Cb(DF(),48,57),97,102),65,70);}
var AKG=G(Bf);
function A31(){var a=new AKG();AVu(a);return a;}
function AVu(a){}
function AZe(a){var b;b=new AAY;b.ET=a;By(b);b.R=1;return b;}
var AH2=G(Bf);
function A3f(){var a=new AH2();AR5(a);return a;}
function AR5(a){}
function AUL(a){var b;b=new Wy;b.EX=a;By(b);b.R=1;return b;}
var AKo=G(Bf);
function A5s(){var a=new AKo();AMx(a);return a;}
function AMx(a){}
function AO5(a){var b;b=new Sa;b.EI=a;By(b);return b;}
var AGv=G(Bf);
function A3x(){var a=new AGv();AQp(a);return a;}
function AQp(a){}
function ASg(a){var b;b=new R_;b.CK=a;By(b);return b;}
var AHb=G(Bf);
function A41(){var a=new AHb();ANb(a);return a;}
function ANb(a){}
function AWs(a){var b;b=new Vl;b.DP=a;By(b);IT(b.O,0,2048);b.R=1;return b;}
var AEG=G(Bf);
function A4H(){var a=new AEG();AMW(a);return a;}
function AMW(a){}
function AND(a){var b;b=new X_;b.E9=a;By(b);b.R=1;return b;}
var AId=G(Bf);
function A42(){var a=new AId();AP9(a);return a;}
function AP9(a){}
function A2b(a){var b;b=new PW;b.D8=a;By(b);b.R=1;return b;}
var AKv=G(Bf);
function A3t(){var a=new AKv();AQI(a);return a;}
function AQI(a){}
function AUG(a){var b;b=new Zu;b.C3=a;By(b);return b;}
var AGT=G(Bf);
function A5x(){var a=new AGT();AXJ(a);return a;}
function AXJ(a){}
function APF(a){var b;b=new Wu;b.Ch=a;By(b);b.R=1;return b;}
var AI_=G(Bf);
function A4C(){var a=new AI_();AL0(a);return a;}
function AL0(a){}
function ANJ(a){var b;b=new Ww;b.Dk=a;By(b);b.R=1;return b;}
var AF3=G(Bf);
function A3S(){var a=new AF3();AM1(a);return a;}
function AM1(a){}
function AXm(a){var b;b=new PD;b.DM=a;By(b);b.R=1;return b;}
var AHJ=G(Bf);
function A5o(){var a=new AHJ();APK(a);return a;}
function APK(a){}
function AYm(a){var b;b=new Ys;b.Fq=a;By(b);b.R=1;return b;}
var AKA=G(Bf);
function A5l(){var a=new AKA();AY$(a);return a;}
function AY$(a){}
function ATg(a){var b;b=new Yx;b.CR=a;By(b);return b;}
var AFH=G(Bf);
function A4d(){var a=new AFH();AMX(a);return a;}
function AMX(a){}
function ARO(a){var b;b=new ABm;b.E_=a;By(b);return b;}
var AFm=G(Bf);
function A3s(){var a=new AFm();A0m(a);return a;}
function A0m(a){}
function AQU(a){var b;b=new AAt;b.Cj=a;By(b);b.R=1;return b;}
var AH0=G(Bf);
function A5e(){var a=new AH0();AXE(a);return a;}
function AXE(a){}
function A0s(a){var b;b=new O$;b.FC=a;By(b);b.R=1;return b;}
var KI=G(Bf);
function A3V(){var a=new KI();ANR(a);return a;}
function ANR(a){}
function AF2(a){return CI(Cb(Cb(Cb(DF(),97,122),65,90),48,57),95);}
var AKO=G(KI);
function A4y(){var a=new AKO();AXM(a);return a;}
function AXM(a){}
function AQL(a){var b;b=EO(AF2(a),1);b.R=1;return b;}
var AJG=G(NT);
function A3d(){var a=new AJG();ATz(a);return a;}
function ATz(a){}
function AVB(a){var b;b=EO(AJp(a),1);b.R=1;return b;}
var AFk=G(Nh);
function A3B(){var a=new AFk();AYd(a);return a;}
function AYd(a){}
function AOI(a){var b;b=EO(AJU(a),1);b.R=1;return b;}
function AIU(){var a=this;Bf.call(a);a.s2=0;a.zk=0;}
function R(a,b){var c=new AIU();A2a(c,a,b);return c;}
function A2a(a,b,c){a.s2=b;a.zk=c;}
function APU(a){return Cb(DF(),a.s2,a.zk);}
var AI5=G(Bf);
function A4A(){var a=new AI5();ATV(a);return a;}
function ATV(a){}
function ATF(a){return Cb(Cb(DF(),65279,65279),65520,65533);}
function AJu(){var a=this;Bf.call(a);a.p2=0;a.oB=0;a.xZ=0;}
function B4(a,b){var c=new AJu();AM9(c,a,b);return c;}
function A3P(a,b,c){var d=new AJu();ATK(d,a,b,c);return d;}
function AM9(a,b,c){a.oB=c;a.p2=b;}
function ATK(a,b,c,d){a.xZ=d;a.oB=c;a.p2=b;}
function AW9(a){var b;b=A4i(a.p2);if(a.xZ)IT(b.O,0,2048);b.R=a.oB;return b;}
function AJC(){var a=this;Bf.call(a);a.n4=0;a.mF=0;a.q1=0;}
function Kl(a,b){var c=new AJC();ANK(c,a,b);return c;}
function A4T(a,b,c){var d=new AJC();AUH(d,a,b,c);return d;}
function ANK(a,b,c){a.mF=c;a.n4=b;}
function AUH(a,b,c,d){a.q1=d;a.mF=c;a.n4=b;}
function ALu(a){var b;b=new Z2;AGo(b,a.n4);if(a.q1)IT(b.O,0,2048);b.R=a.mF;return b;}
var AIX=G();
var AEU=G();
function AFG(b){var c,d,e,f,g,h,i;c=ASs(Gt(b));d=M$(c);e=BP(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+M$(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Pi(c);h=h+1|0;}return e;}
function NE(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function W1(){var a=this;B.call(a);a.yp=0;a.tB=0;a.yy=null;}
function AOh(a,b,c){var d=new W1();ASR(d,a,b,c);return d;}
function ASR(a,b,c,d){a.yp=b;a.tB=c;a.yy=d;}
function AGO(){var a=this;B.call(a);a.xC=null;a.yX=0;}
function ASs(a){var b=new AGO();AWC(b,a);return b;}
function AWC(a,b){a.xC=b;}
var AJg=G();
function M$(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.xC.data;f=b.yX;b.yX=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bc(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Pi(b){var c,d;c=M$(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var MA=G(Bu);
function Ze(){var a=this;B.call(a);a.w4=null;a.w3=null;a.w2=null;}
function AYr(a,b){var c,d,e,f,g;c=a.w4;d=a.w3;e=a.w2;f=new ADU;g=AB_(Er(d));AK3(f,b,null,g);H1(c,f);e.f();}
function Zd(){B.call(this);this.Au=null;}
function ATX(a,b){Bk(a.Au,b);}
function AIL(){B.call(this);this.S0=null;}
function Sx(){B.call(this);this.sR=null;}
function AXe(a,b){b.ho=a.sR;}
function ACm(){var a=this;B.call(a);a.FD=null;a.kJ=null;}
function AN1(a,b){var c;c=a.kJ;b=b;a.kJ=X9(!c.om&&!b.eP?0:1);return 1;}
function ABN(){var a=this;B.call(a);a.uX=null;a.uY=null;}
function A1k(a){var b,c;b=a.uX;c=a.uY;Gj(b.x.bw,E9(c));}
function ABQ(){var a=this;B.call(a);a.C0=null;a.td=null;}
function ABS(){B.call(this);this.Fi=null;}
function A1Z(a,b){$rt_globals.console.info($rt_ustr(b));}
var KO=G(0);
function PM(){var a=this;B.call(a);a.lo=0;a.Cl=null;}
function AZ9(a,b){var c,d;c=Cy(b);d=new K;M(d);H(H(d,C(664)),c);$rt_globals.console.info($rt_ustr(L(d)));a.lo=a.lo+1|0;No(b,a);}
function AXH(a,b){var c;b=Cy(b);c=new K;M(c);H(H(c,C(665)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function ASB(a){var b;b=a.lo-1|0;a.lo=b;if(!b)Bk(Bt(),C(666));}
function R5(){B.call(this);this.sU=null;}
function ARe(a){var b,c,d,e;b=a.sU;c=Bt();d=GC(b);e=new K;M(e);H(H(e,C(667)),d);Bk(c,L(e));c=b.jP;e=new AAW;e.c6=b;e.lQ=BL();e.ml=BL();No(c,e);}
function U$(){var a=this;Z.call(a);a.xn=null;a.Fk=null;}
function AN3(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cw^DW(a.xn,c):0;}
function U8(){var a=this;Z.call(a);a.AV=null;a.vK=null;a.Du=null;}
function AU1(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cw^DW(a.AV,c):0;return a.vK.n(b)&&!d?1:0;}
function P$(){var a=this;Z.call(a);a.lu=null;a.Eg=null;}
function APL(a,b){return a.bi^DW(a.lu,b);}
function AXo(a){var b,c,d;b=new K;M(b);c=Il(a.lu,0);while(c>=0){J5(b,HR(c));BM(b,124);c=Il(a.lu,c+1|0);}d=b.L;if(d>0)UX(b,d-1|0);return L(b);}
function XU(){var a=this;Z.call(a);a.y8=null;a.EW=null;}
function A0k(a,b){return a.y8.n(b);}
function XS(){var a=this;Z.call(a);a.oD=0;a.xS=null;a.pc=null;}
function ASz(a,b){return !(a.oD^DW(a.pc.J,b))&&!(a.oD^a.pc.ey^a.xS.n(b))?0:1;}
function XT(){var a=this;Z.call(a);a.mD=0;a.vp=null;a.nN=null;}
function AYE(a,b){return !(a.mD^DW(a.nN.J,b))&&!(a.mD^a.nN.ey^a.vp.n(b))?1:0;}
function XX(){var a=this;Z.call(a);a.BD=0;a.vw=null;a.vm=null;a.Eu=null;}
function AWM(a,b){return a.BD^(!a.vw.n(b)&&!a.vm.n(b)?0:1);}
function XZ(){var a=this;Z.call(a);a.tn=0;a.y4=null;a.yF=null;a.FA=null;}
function ALp(a,b){return a.tn^(!a.y4.n(b)&&!a.yF.n(b)?0:1)?0:1;}
function XV(){var a=this;Z.call(a);a.sv=null;a.FB=null;}
function AOD(a,b){return Db(a.sv,b);}
function XW(){var a=this;Z.call(a);a.Bj=null;a.Ex=null;}
function AQe(a,b){return Db(a.Bj,b)?0:1;}
function X0(){var a=this;Z.call(a);a.tw=null;a.y6=0;a.uN=null;}
function ATp(a,b){return !Db(a.tw,b)&&!(a.y6^DW(a.uN.J,b))?0:1;}
function X1(){var a=this;Z.call(a);a.t1=null;a.z3=0;a.tS=null;}
function AWo(a,b){return !Db(a.t1,b)&&!(a.z3^DW(a.tS.J,b))?1:0;}
function P9(){var a=this;Z.call(a);a.uK=0;a.A6=null;a.vT=null;a.Cp=null;}
function A3c(a,b){return !(a.uK^a.A6.n(b))&&!Db(a.vT,b)?0:1;}
function Qq(){var a=this;Z.call(a);a.Bs=0;a.qG=null;a.q2=null;a.CE=null;}
function AOG(a,b){return !(a.Bs^a.qG.n(b))&&!Db(a.q2,b)?1:0;}
function P7(){var a=this;Z.call(a);a.yg=null;a.CH=null;}
function ANh(a,b){return Db(a.yg,b);}
function P8(){var a=this;Z.call(a);a.sh=null;a.Fy=null;}
function AXc(a,b){return Db(a.sh,b)?0:1;}
function Qb(){var a=this;Z.call(a);a.BB=null;a.tW=0;a.Cc=null;}
function APl(a,b){return Db(a.BB,b)&&a.tW^DW(a.Cc.J,b)?1:0;}
function P6(){var a=this;Z.call(a);a.Aj=null;a.zh=0;a.tV=null;}
function A1o(a,b){return Db(a.Aj,b)&&a.zh^DW(a.tV.J,b)?0:1;}
function P_(){var a=this;Z.call(a);a.AB=0;a.xl=null;a.tl=null;a.Et=null;}
function AVL(a,b){return a.AB^a.xl.n(b)&&Db(a.tl,b)?1:0;}
function Qa(){var a=this;Z.call(a);a.Ae=0;a.wR=null;a.Aw=null;a.EA=null;}
function ARI(a,b){return a.Ae^a.wR.n(b)&&Db(a.Aw,b)?0:1;}
var Mf=G(0);
function AAs(){var a=this;B.call(a);a.CA=null;a.A7=null;a.lL=null;a.cI=null;a.kq=0;a.o$=0;}
function OZ(a,b){var c,d,e;c=J(a.lL);if(b>=0&&b<=c){ADZ(a.cI,null,(-1),(-1));d=a.cI;d.ma=1;d.eR=b;c=d.iV;if(c<0)c=b;d.iV=c;b=a.A7.cr(b,a.lL,d);if(b==(-1))a.cI.dM=1;if(b>=0){d=a.cI;if(d.ky){e=d.ed.data;if(e[0]==(-1)){c=d.eR;e[0]=c;e[1]=c;}d.iV=MH(d);return 1;}}a.cI.eR=(-1);return 0;}d=new BH;Bm(d,Dm(b));N(d);}
function AHI(a){return Qp(a.cI,0);}
function AI7(a){return Sc(a.cI,0);}
function AEy(a){return a.cI.kB;}
function Ro(){var a=this;B.call(a);a.rY=null;a.rZ=null;}
function AZ3(a){var b,c;b=a.rY;c=a.rZ;SG();KM(b,c,A9u);}
function Rm(){var a=this;B.call(a);a.zU=null;a.zT=null;}
function AOz(a){var b,c;b=a.zU;c=a.zT;SG();KM(b,c,A9v);}
function Rn(){var a=this;B.call(a);a.Cb=null;a.B_=null;}
function ATx(a){KM(a.Cb,a.B_,null);}
function Rp(){var a=this;B.call(a);a.yD=null;a.yE=null;}
function ALH(a){var b,c,d,e,f,g,h;b=a.yD;c=a.yE;d=Ea(b.bu.d);e=HE(b.bu.d);d=ABT(b.bu.fB,d,e);DS(b.gr.bQ);b=b.bu;e=FB(b,c);if(d!==null){f=b.d;g=e.bq;h=e.bv;e=new ABg;e.Fn=b;e.Fm=c;d.Kf(f,g,h,1,e,b.j8);}}
function Su(){B.call(this);this.wT=null;}
function AS7(a){var b;b=a.wT;DS(b.gr.bQ);He(b.bu,Wd(b),0);}
function St(){B.call(this);this.us=null;}
function AYI(a){var b;b=a.us;DS(b.gr.bQ);He(b.bu,Wd(b),1);}
function Ss(){B.call(this);this.r0=null;}
function AZX(a){var b,c,d;b=a.r0;DS(b.gr.bQ);c=HU(b);b=b.bu;BC(b);d=new ADb;d.ru=b;RJ(c,d,AE5(C(668)));}
function RK(){var a=this;B.call(a);a.zs=null;a.zr=null;}
function AUr(a){var b,c;b=a.zs;c=a.zr;b=b.bu.d;b.pR=c;Mq(b);}
var Q$=G(0);
var A86=null;function AKn(){A86=new TD;}
function ZF(){B.call(this);this.AT=null;}
function A2K(a){var b,c,d,e;b=a.AT;c=HU(b);d=b.gr.bQ;e=new Sb;e.BU=b;Kh(c,Yq(d,e));}
function AJI(){var a=this;B.call(a);a.O2=null;a.O0=null;a.O3=0.0;}
function Qv(){B.call(this);this.x7=null;}
function ARF(a){AHD(a.x7);}
function Qt(){B.call(this);this.z2=null;}
function AW$(a){Hs(a.z2);}
function Qu(){B.call(this);this.qw=null;}
function A2c(a){AIp(a.qw);}
function T9(){B.call(this);this.z6=null;}
function A0d(a){a.z6.qf();}
function T_(){B.call(this);this.Cf=null;}
function AQP(a){a.Cf.os();}
function Zf(){B.call(this);this.yW=null;}
function A1e(a){var b,c,d,e,f,g,h,i;b=a.yW;c=(b.rv.cC()).data;d=Q(BN,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new QY;i.se=b;i.sd=h;e[f]=Xf(i,h);f=f+1|0;}return d;}
function ZL(){B.call(this);this.st=null;}
function AMb(a){a.st.op.g8(0);}
function ZJ(){B.call(this);this.AD=null;}
function ANq(a){a.AD.op.g8(1);}
function SV(){B.call(this);this.wk=null;}
function ATL(a){var b,c,d,e,f;b=a.wk.d.h;c=b.cq;d=new K;M(d);U(H(d,C(669)),c);$rt_globals.console.info($rt_ustr(L(d)));c=b.nt;d=new K;M(d);U(H(d,C(670)),c);$rt_globals.console.info($rt_ustr(L(d)));d=b.dh;e=Hr(Fc(b));ADm(d,0,d.df,e);b=Bt();f=b.m2;f.data[0]=10;XF(b,f,0,1);}
function SW(){B.call(this);this.sp=null;}
function AL_(a){ZQ(a.sp);}
function SX(){B.call(this);this.At=null;}
function ANk(a){AA5(a.At);}
function SY(){B.call(this);this.xf=null;}
function ATA(a){Op(a.xf.d);}
function Tb(){B.call(this);this.zj=null;}
function AYO(a){VK(a.zj);}
function SZ(){B.call(this);this.Bi=null;}
function A2M(a){var b,c,d,e,f,g,h;b=a.Bi;c=Q(BN,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Xf(Qr(b,g),Xk(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Xf(Qr(b,g),Xk(g));e=h;}return c;}
function ACK(){var a=this;B.call(a);a.mc=null;a.iO=0;}
var TD=G();
var Pf=G(HT);
function AOk(a,b,c,d){var e,f,g;e=0;f=d.z;a:{while(true){if(b>f){b=e;break a;}g=Gx(d,a.bd);DZ(d,a.bd,b);e=a.dj.c(b,c,d);if(e>=0)break;DZ(d,a.bd,g);b=b+1|0;}}return b;}
function A23(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Gx(e,a.bd);DZ(e,a.bd,c);f=a.dj.c(c,d,e);if(f>=0)break;DZ(e,a.bd,g);c=c+(-1)|0;}}return c;}
function AM7(a){return null;}
var Re=G(Bu);
var VB=G(Bu);
function Ua(){Gf.call(this);this.D4=0;}
function Q9(){Gf.call(this);this.Ft=0;}
function Vz(){B.call(this);this.q_=null;}
function AXl(a,b){a.q_.g(H4(b));}
function VA(){var a=this;B.call(a);a.rW=null;a.rX=null;}
function AVK(a,b){var c,d;c=a.rW;d=a.rX;b.text().then(Bv(c,"f"),Bv(d,"f"));}
function ACg(){var a=this;B.call(a);a.tz=null;a.AX=null;a.wb=0;a.mP=0;}
function NB(a,b){return Ch(a.tz)<b?0:1;}
var AET=G(0);
function ACy(){B.call(this);this.xs=null;}
function ARQ(a,b){var c,d,e,f;c=a.xs;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.td;c=Bt();b=Cy(b);e=new K;M(e);H(H(e,C(671)),b);Bk(c,L(e));b=Bt();f=d.length;c=new K;M(c);U(H(c,C(672)),f);Bk(b,L(c));}
function ACA(){var a=this;B.call(a);a.AN=null;a.AO=null;}
function AQ1(a,b){var c,d;c=a.AN;d=a.AO;b.arrayBuffer().then(Bv(c,"f"),Bv(d,"f"));}
function ACB(){var a=this;B.call(a);a.yv=null;a.k8=null;a.kw=null;}
function ABr(a){var b,c;b=a.yv.next();c=a.kw.pG;b.then(Bv(a,"f"),Bv(c,"f"));}
function ARX(a,b){var c,d;if(b.done?1:0)a.k8.wp();else{ABr(a);c=b.value;if(c.kind==='file'?1:0){b=A3m(c,null,YR(a.kw));a.k8.xm(b);}else{b=new ACu;d=a.kw;AHk(b,c,d.pG,YR(d),null);a.k8.t7(b);}}}
function YQ(){var a=this;B.call(a);a.s6=null;a.s7=null;}
function AAW(){var a=this;B.call(a);a.lQ=null;a.ml=null;a.c6=null;}
function A1y(a,b){var c,d;c=new Io;d=a.c6;LP(c,b,d.jS+1|0,d.hN);BB(a.lQ,c);}
function ATn(a,b){var c,d;c=Er(b);d=new KH;J_(d,c,a.c6.jS+1|0);d.hJ=b;a.c6.hN.rL(d,c);d.oA=AKU(a.c6.hN,d);BB(a.ml,d);}
function A1U(a){var b,c,d,e,f,g,h;if(!(ED(a.lQ)&&ED(a.ml))){a.c6.gl=Gp(a.lQ,A9j);a.c6.gU=Gp(a.ml,A9k);K8(a.c6.gl,A8Z);K8(a.c6.gU,A8Z);b=a.c6;c=b.gl;d=c.data;e=b.gU;f=e.data;g=d.length;h=f.length;d=Q(Dh,g+h|0);C6(c,0,d,0,g);C6(e,0,d,g,h);a.c6.fb=d;}N0(a.c6);b=a.c6;b.hN.xw(b);}
function ACj(){var a=this;B.call(a);a.ed=null;a.k1=null;a.pt=null;a.nu=null;a.rM=0;a.ky=0;a.c_=0;a.z=0;a.eR=0;a.kB=0;a.gC=0;a.dM=0;a.Fe=0;a.iV=0;a.ma=0;}
function B1(a,b,c){a.k1.data[b]=c;}
function DE(a,b){return a.k1.data[b];}
function MH(a){return Sc(a,0);}
function Sc(a,b){Z0(a,b);return a.ed.data[(b*2|0)+1|0];}
function DZ(a,b,c){a.ed.data[b*2|0]=c;}
function M4(a,b,c){a.ed.data[(b*2|0)+1|0]=c;}
function Gx(a,b){return a.ed.data[b*2|0];}
function I$(a,b){return a.ed.data[(b*2|0)+1|0];}
function AGF(a){return Qp(a,0);}
function Qp(a,b){Z0(a,b);return a.ed.data[b*2|0];}
function WD(a,b){return a.pt.data[b];}
function EU(a,b,c){a.pt.data[b]=c;}
function Z0(a,b){var c;if(!a.ky){c=new C$;Y(c);N(c);}if(b>=0&&b<a.rM)return;c=new BH;Bm(c,Dm(b));N(c);}
function ADZ(a,b,c,d){a.ky=0;a.ma=2;Jy(a.ed,(-1));Jy(a.k1,(-1));if(b!==null)a.nu=b;if(c>=0){a.c_=c;a.z=d;}a.eR=a.c_;}
function AFz(a){return a.ma;}
function TF(){B.call(this);this.yk=null;}
function AYw(a,b){a.yk.g($rt_str(b.message));}
function AAq(){var a=this;B.call(a);a.qv=null;a.qu=0;}
function A21(a){H7(a.qv,a.qu);}
function XD(){B.call(this);this.zQ=null;}
function ART(a){H7(a.zQ,1);}
function XE(){B.call(this);this.r3=null;}
function APB(a){H7(a.r3,0);}
function Z4(){var a=this;B.call(a);a.tb=null;a.ta=0;}
function AR3(a){var b,c,d,e,f;b=a.tb;c=a.ta;d=b.c3;e=d.b$.e2;f=new Q5;f.z1=b;f.zY=c;Kh(e,Yq(d,f));}
function QF(){B.call(this);this.yx=null;}
function AUU(a,b){H6(a.yx,b);}
function ADb(){B.call(this);this.ru=null;}
function AOw(a,b){DI(a.ru,b);}
var GJ=G(CH);
var A9v=null;var A9u=null;var A9w=null;function SG(){SG=Bn(GJ);A2V();}
function A0J(a,b){var c=new GJ();AFL(c,a,b);return c;}
function AFL(a,b,c){SG();DK(a,b,c);}
function A2V(){var b;A9v=A0J(C(673),0);b=A0J(C(674),1);A9u=b;A9w=I(GJ,[A9v,b]);}
function ZP(){var a=this;B.call(a);a.yn=null;a.ym=0;}
function A1r(a,b){var c,d,e,f,g,h,i;c=a.yn;d=a.ym;e=!d?c.dO.dV:c.dO.dY;DS(c.c3);f=Bt();g=E9(b);h=new K;M(h);H(H(h,C(675)),g);Bk(f,L(h));i=new AAc;i.hu=c;i.iU=d;i.ne=e;f=ASE(b,i);if(!d)c.pZ=f;else c.oR=f;f.dX.f();ET(e,f);}
function QY(){var a=this;B.call(a);a.se=null;a.sd=null;}
function AXt(a){var b,c;b=a.se;c=a.sd;b.ja.nW(c);}
function RO(){B.call(this);this.um=null;}
function AMl(a,b){Tz(HU(a.um),b,A8f,AE5(C(676)));}
function R0(){B.call(this);this.zV=null;}
function AOn(a,b){var c,d;c=a.zV;d=b.iQ;b=new K;M(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(L(b)));}
var ABl=G();
var A87=null;function A5a(){A5a=Bn(ABl);AVk();}
function AVk(){var b,c;SG();b=BP((A9w.hD()).data.length);c=b.data;A87=b;c[A9v.fS]=1;c[A9u.fS]=2;}
function OV(){var a=this;B.call(a);a.xL=null;a.xM=0.0;}
function AXO(a){var b,c;b=a.xL;c=a.xM;b.ja.kE(c);}
function AAY(){Z.call(this);this.ET=null;}
function ATt(a,b){return CE(b)!=2?0:1;}
function Wy(){Z.call(this);this.EX=null;}
function AVz(a,b){return CE(b)!=1?0:1;}
function Sa(){Z.call(this);this.EI=null;}
function AMd(a,b){return RN(b);}
function R_(){Z.call(this);this.CK=null;}
function AW8(a,b){return 0;}
function Vl(){Z.call(this);this.DP=null;}
function APb(a,b){return !CE(b)?0:1;}
function X_(){Z.call(this);this.E9=null;}
function A1S(a,b){return CE(b)!=9?0:1;}
function PW(){Z.call(this);this.D8=null;}
function ARm(a,b){return HO(b);}
function Zu(){Z.call(this);this.C3=null;}
function ASj(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Wu(){Z.call(this);this.Ch=null;}
function A2R(a,b){a:{b:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HO(b);}return b;}
function Ww(){Z.call(this);this.Dk=null;}
function ANu(a,b){a:{b:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HO(b);}return b;}
function PD(){Z.call(this);this.DM=null;}
function ATC(a,b){a:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ys(){Z.call(this);this.Fq=null;}
function AYM(a,b){return KQ(b);}
function Yx(){Z.call(this);this.CR=null;}
function AZ6(a,b){return Yy(b);}
function ABm(){Z.call(this);this.E_=null;}
function A1F(a,b){return CE(b)!=3?0:1;}
function AAt(){Z.call(this);this.Cj=null;}
function ATW(a,b){a:{b:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HO(b);}return b;}
function O$(){Z.call(this);this.FC=null;}
function ANn(a,b){a:{b:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HO(b);}return b;}
function Mp(){Z.call(this);this.nJ=0;}
function A4i(a){var b=new Mp();AGo(b,a);return b;}
function AGo(a,b){By(a);a.nJ=b;}
function ARn(a,b){return a.bi^(a.nJ!=CE(b&65535)?0:1);}
var Z2=G(Mp);
function A05(a,b){return a.bi^(!(a.nJ>>CE(b&65535)&1)?0:1);}
var ADK=G(0);
function YV(){B.call(this);this.wx=null;}
function AP0(a){var b,c;b=a.wx;c=b.s6;b=b.s7;c.FW(b.l7,b.py,null);}
function Sb(){B.call(this);this.BU=null;}
function A1l(a,b){GK(a.BU.bu,b,A8f);}
function Qz(){var a=this;B.call(a);a.l2=null;a.l1=null;a.x$=null;}
function ANQ(a){Jv(a.l2);Jv(a.l1);}
function ALD(a){Ky(a.l2);Ky(a.l1);}
function ASM(a,b){IA(a.l2,b);IA(a.l1,b);}
function ARc(a,b){Kz(a.x$,b);}
function ABg(){var a=this;B.call(a);a.Fn=null;a.Fm=null;}
function R$(){var a=this;B.call(a);a.Dz=null;a.Dy=null;a.Dx=null;}
function Q5(){var a=this;B.call(a);a.z1=null;a.zY=0;}
function ANd(a,b){M7(a.z1,b,a.zY);}
var Da=G(0);
var A6W=null;var A8b=null;var A6Y=null;var A6X=null;var A60=null;var A6Z=null;var A62=null;var A61=null;var A64=null;var A63=null;var A65=null;function AG2(){AG2=Bn(Da);A2g();}
function A2g(){A6W=CC(0);A8b=Dy(8,8,8);A6Y=S(C(677));A6X=Dy(255,255,255);A60=S(C(678));A6Z=S(C(679));A62=S(C(680));A61=S(C(681));A64=EZ(205,205,205,153);A63=EZ(255,255,255,0);A65=S(C(116));}
function Cz(){CH.call(this);this.pr=null;}
var A9x=null;var A9y=null;var A9z=null;var A9A=null;var A9B=null;var A9C=null;var A9D=null;var A9E=null;var A9F=null;var A9G=null;var A9H=null;var A9I=null;var A9J=null;var A9K=null;var A9L=null;var A66=null;function AGp(){AGp=Bn(Cz);A2J();}
function DN(a,b,c){var d=new Cz();ZA(d,a,b,c);return d;}
function A2v(a,b,c,d){var e=new Cz();AER(e,a,b,c,d);return e;}
function ZA(a,b,c,d){AGp();DK(a,b,c);a.pr=JM(d,null);}
function AER(a,b,c,d,e){AGp();DK(a,b,c);a.pr=JM(d,e);}
function A2J(){var b;b=new Cz;AG2();ZA(b,C(340),0,A8b);A9x=b;A9y=DN(C(341),1,S(C(682)));A9z=DN(C(343),2,S(C(683)));A9A=DN(C(345),3,S(C(684)));A9B=DN(C(347),4,A8b);A9C=DN(C(348),5,S(C(685)));A9D=DN(C(350),6,S(C(388)));A9E=DN(C(352),7,S(C(686)));A9F=DN(C(354),8,S(C(687)));A9G=A2v(C(356),9,A8b,Dy(237,235,252));A9H=A2v(C(357),10,S(C(386)),S(C(688)));A9I=DN(C(358),11,S(C(388)));A9J=DN(C(360),12,S(C(389)));A9K=DN(C(362),13,S(C(689)));b=DN(C(363),14,S(C(364)));A9L=b;A66=I(Cz,[A9x,A9y,A9z,A9A,A9B,A9C,A9D,A9E,A9F,A9G,
A9H,A9I,A9J,A9K,b]);}
var D1=G(0);
var A6$=null;var A6_=null;var A67=null;var A68=null;var A69=null;var A8c=null;var A8d=null;var A7a=null;var A7b=null;function AVd(){AVd=Bn(D1);AWJ();}
function AWJ(){A6$=S(C(114));A6_=S(C(690));A67=S(C(691));A68=S(C(692));A69=S(C(693));A8c=S(C(114));A8d=S(C(690));A7a=EZ(205,205,205,153);A7b=Dy(247,248,250);}
function AAc(){var a=this;B.call(a);a.iU=0;a.ne=null;a.hu=null;}
function APJ(a,b){var c,d,e;c=Bt();d=E9(b.hJ);e=new K;M(e);H(H(e,C(694)),d);Bk(c,L(e));c=new M_;d=a.hu;Xg(c,d.iA,d.c3,d.nQ);M7(c,b.hJ,a.iU);b=b.hJ;d=Rr(a,b.jV);if(d===null)d=null;else{b=Er(b);d=Ut(d.gU,b);}LH(a,d);if(d!==null)M7(c,d.hJ,a.iU?0:1);}
function AUq(a,b){var c,d,e;ADC(b);c=Bt();d=AFs(b.jP);e=new K;M(e);H(H(e,C(695)),d);Bk(c,L(e));c=AD8(a,b.jP);LH(a,c);if(c!==null&&(c.hC!=60086?0:1))c.dX.f();if(Jl(b)>0)EL(a.ne);}
function LH(a,b){(!a.iU?a.hu.dO.dY:a.hu.dO.dV).oy=b;}
function AUx(a,b){var c;if(Jl(b)>0)EL(a.ne);Lo(b);c=AD8(a,b.jP);LH(a,c);if(c!==null&&I_(c))c.dX.f();}
function Rr(a,b){var c,d,e;c=!a.iU?a.hu.oR:a.hu.pZ;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=Rt(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function AD8(a,b){var c;c=Rr(a,b.jf);return c===null?null:Rt(c,Jk(b));}
function ADL(){var a=this;B.call(a);a.yh=null;a.yi=null;}
function A0l(a,b){var c,d;c=a.yh;d=a.yi;DS(c);d.g(b);}
var AGd=G(0);
function AA7(){B.call(this);this.Bl=null;}
function AX7(a){DS(a.Bl);}
function RQ(){var a=this;B.call(a);a.un=null;a.uo=null;}
function A2e(a){a.un.zD(a.uo);}
var AIy=G();
function AEd(){B.call(this);this.tM=null;}
function AX6(a){var b;b=a.tM;IH(b);b.hN.uS(b);b.gl=A9j;b.gU=A9k;}
function Ri(){var a=this;B.call(a);a.vs=null;a.vt=null;a.vu=0;}
function AMp(a){var b,c,d,e;b=a.vs;c=a.vt;d=a.vu;c=E9(c);if(!d)b.nw=c;else b.wQ=c;e=b.wQ;if(e!==null&&b.nw!==null)DL(b.ji,c);else{if(e!==null)DL(b.ji,e);c=b.nw;if(c!==null)DL(b.ji,c);}}
function ABJ(){var a=this;B.call(a);a.ty=null;a.tx=null;}
function ATY(a,b){var c,d,e;c=a.ty;d=a.tx;Lz(c.gw,d);b=AIC(b);e=AN4(b.kj,AB_(d));DU(c.kc,d,e);if(BO(c.zl,d))ADO(c,e);}
function ABI(){var a=this;B.call(a);a.xr=null;a.xt=null;}
function AUB(a,b){var c,d,e;c=a.xr;d=a.xt;Lz(c.gw,d);c=En();e=new K;M(e);H(H(H(H(e,C(696)),d),C(29)),b);Bk(c,L(e));}
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"ui",4,"js",4,"diff"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bJ",A5T(AQl),"cP",A5S(AMS)],R4,0,B,[],0,3,0,0,0,WO,0,B,[],3,3,0,0,0,Wr,0,B,[],3,3,0,0,0,ACX,0,B,[WO,Wr],0,3,0,0,0,AIQ,0,B,[],4,0,0,0,0,AIE,0,B,[],4,3,0,0,0,GZ,0,B,[],0,3,0,0,0,Ew,0,GZ,[],0,3,0,0,0,Bu,0,Ew,[],0,3,0,0,0,AJD,0,Bu,[],0,3,0,0,0,C7,0,B,[],3,3,0,0,0,CK,0,B,[],3,3,0,0,0,Ko,0,B,[],3,3,0,0,0,BJ,"String",1,B,[C7,CK,Ko],0,3,0,Ff,["cP",A5S(AMQ),"bJ",A5T(Bj),"p1",A5S(J2),"ms",A5T(AOj)],FC,0,GZ,[],0,3,0,0,0,In,0,FC,[],0,3,0,0,0,AJi,0,In,[],0,3,0,0,0,Es,0,B,[C7],1,3,0,0,0,HG,
0,Es,[CK],0,3,0,0,["bJ",A5T(A2z),"ms",A5T(AYk)],GT,0,B,[C7,Ko],0,0,0,0,["j3",A5T(M3),"cP",A5S(L)],JL,0,B,[],3,3,0,0,0,K,0,GT,[JL],0,3,0,0,["pO",A5W(AYg),"pe",A5V(ANC),"cP",A5S(Ed),"j3",A5T(APG),"p7",A5U(AYD)],E6,0,In,[],0,3,0,0,0,AKf,0,E6,[],0,3,0,0,0,AJc,0,E6,[],0,3,0,0,0,ABk,0,B,[],3,3,0,0,0,C_,0,B,[],3,3,0,0,0,X$,0,B,[],3,0,0,0,0,Kf,0,B,[ABk,C_,X$],1,3,0,0,["b4",A5S(Ez)],ZV,0,Kf,[],0,3,0,0,0,AIk,0,B,[],0,3,0,0,0,AKP,0,B,[],4,3,0,0,0,BT,0,B,[],3,3,0,0,0,Ce,0,B,[BT],3,3,0,0,0,ABu,0,B,[Ce],0,3,0,0,["bh",A5T(A2P)],AGr,
0,B,[],0,3,0,0,0,AJP,0,B,[BT],1,3,0,0,0,AEz,0,B,[],3,3,0,0,0,AKD,0,B,[],3,3,0,0,0,AGX,0,B,[],3,3,0,0,0,L6,0,B,[],0,3,0,0,0,AE4,0,B,[BT],1,3,0,0,0,ABv,0,B,[Ce],0,3,0,0,["bh",A5T(ALq)],ABt,0,B,[Ce],0,3,0,0,["bh",A5T(A1G)],LL,0,B,[],4,3,0,0,0,AGV,0,B,[],4,3,0,0,0,AI8,0,B,[],0,3,0,0,0,ALn,0,B,[],4,3,0,0,0,WP,0,B,[Ce],0,3,0,0,["bh",A5T(AZs)]]);
$rt_metadata([AG9,0,B,[BT],1,3,0,0,0,AIt,0,B,[],0,3,0,0,0,ACC,0,B,[BT],3,3,0,0,0,AJF,0,B,[ACC],1,3,0,0,["Ly",A5T(AXw),"R0",A5S(AQi)],AFR,0,B,[BT],1,3,0,0,0,Gg,0,B,[],3,3,0,0,0,SQ,0,B,[Gg],0,3,0,0,0,BH,0,Bu,[],0,3,0,0,0,AJ3,0,B,[],4,3,0,0,0,F5,0,Bu,[],0,3,0,0,0,Jf,0,Bu,[],0,3,0,0,0,Dn,0,B,[CK],0,3,0,0,0,Wm,0,B,[BT],3,3,0,0,0,AAu,0,B,[Wm],3,3,0,0,0,E0,0,B,[BT],3,3,0,0,0,AIm,0,B,[BT,AAu,E0],1,3,0,0,["Kg",A5S(AZa),"KQ",A5T(A09),"SO",A5T(A0Y),"Oa",A5T(AWq),"Ri",A5T(ALG),"MN",A5S(ANv),"RY",A5U(A06),"K8",A5V(APr),
"LF",A5S(AVx),"LY",A5S(AZQ),"Qu",A5T(A1C),"OQ",A5S(AQC),"S7",A5T(AO7),"IX",A5S(AQW),"Pt",A5S(AUu),"S1",A5S(APV),"Gi",A5T(AMi),"La",A5S(A2B),"QP",A5U(AXU),"OD",A5U(AQu),"RQ",A5U(ATI),"Rx",A5S(AUT),"Sg",A5S(AOT),"LK",A5T(ANF),"Qc",A5T(AOu),"N6",A5U(AX3),"IB",A5S(AP3),"Lx",A5T(AVA),"M0",A5S(AOt),"L5",A5S(ARZ),"NT",A5T(ALw),"IW",A5T(ATe),"SW",A5T(AVU),"H_",A5S(A1v),"Ot",A5U(AV1),"RM",A5T(AZZ),"Ir",A5S(ASn),"Ni",A5U(ARk),"GN",A5U(AQ5),"Pd",A5S(AS$),"LL",A5T(AT8),"HR",A5V(AZj),"Hb",A5S(ANA),"HV",A5U(AWc),"OJ",A5S(AVe),
"Ky",A5S(A2w),"Qr",A5S(ARh),"FG",A5S(AVc),"J$",A5U(ARl),"M1",A5T(AWz),"P_",A5T(AOA),"G6",A5S(A0y)],PE,0,B,[Ce],0,3,0,0,["bh",A5T(ARU)],AJq,0,B,[],4,3,0,0,0,Yr,0,B,[E0],3,3,0,0,0,RV,0,B,[E0],3,3,0,0,0,ZI,0,B,[E0],3,3,0,0,0,Te,0,B,[E0],3,3,0,0,0,ADE,0,B,[E0],3,3,0,0,0,AB7,0,B,[E0,Yr,RV,ZI,Te,ADE],3,3,0,0,0,AIO,0,B,[BT,AB7],1,3,0,0,["Q2",A5U(AZz),"Sm",A5U(AYi),"Hd",A5V(AOV),"Oy",A5T(AMw),"JJ",A5V(AWO)],BU,0,Bu,[],0,3,0,0,0,AEe,0,Bu,[],0,3,0,0,0,Ii,0,BH,[],0,3,0,0,0,AI2,0,B,[],0,3,0,0,0,Zl,0,B,[],3,3,0,0,0,X3,0,
B,[Zl],3,3,0,0,0,AAC,0,B,[X3],0,3,0,0,0,BD,0,B,[],3,3,0,0,0,AJM,0,B,[BD],0,3,0,0,0,V,0,B,[],3,3,0,0,0,AJN,0,B,[V],0,3,0,0,0,ZN,0,B,[BT],3,3,0,0,0,Up,0,B,[ZN],0,3,0,0,["IY",A5T(AXT)],Un,0,B,[V],0,3,0,0,0,Za,0,B,[BT],3,3,0,0,0,Uo,0,B,[Za],0,3,0,0,["BN",A5U(ANP)],AHg,0,B,[BT],1,3,0,0,0,CA,0,B,[BT],3,3,0,0,0,Um,0,B,[CA],0,3,0,0,["cv",A5T(ARY)],AAm,0,B,[],0,3,0,0,0,UZ,0,B,[],3,3,0,0,["fm",A5T(AUC)],HA,0,B,[UZ],3,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],FE,0,B,[HA],1,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8),"eG",A5S(ED),"q3",
A5T(A0M)],NK,0,B,[HA],3,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],ML,0,B,[NK],3,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8)]]);
$rt_metadata([Ft,0,FE,[ML],1,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8),"zW",A5T(AR_),"b9",A5S(B7),"ut",A5U(ARz),"ot",A5U(A1q),"bJ",A5T(AQO)],Mk,0,Ft,[],1,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],OU,0,B,[HA],3,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],AD0,0,B,[OU,NK],3,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],TI,0,Mk,[AD0],0,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],Ly,0,B,[],3,3,0,0,0,Ee,0,B,[Ly],1,3,0,0,0,Ex,0,B,[],3,3,0,0,0,VH,0,B,[Ly],3,3,0,0,0,Ph,0,B,[VH],3,3,0,0,0,Ye,0,Ee,[Ex,C7,Ph],0,3,0,0,0,AAo,0,B,[BD],0,3,0,0,0,AAp,0,B,[Ce],0,
3,0,0,["bh",A5T(AUS)],AE_,0,B,[],0,3,0,0,0,NY,0,B,[],1,3,0,0,0,Uf,0,NY,[],0,3,0,0,0,Cv,0,B,[C_],1,3,0,0,["cj",A5T(A2x)],YN,0,B,[],0,3,0,0,0,AC2,0,B,[CA],0,3,0,0,["cv",A5T(AZK)],AC3,0,B,[CA],0,3,0,0,["cv",A5T(AZU)],AC4,0,B,[CA],0,3,0,0,["cv",A5T(AQz)],AC5,0,B,[CA],0,3,0,0,["cv",A5T(AYB)],AC6,0,B,[CA],0,3,0,0,["cv",A5T(AYN)],AC7,0,B,[CA],0,3,0,0,["cv",A5T(AR4)],AC8,0,B,[CA],0,3,0,0,["cv",A5T(AOU)],AC9,0,B,[CA],0,3,0,0,["cv",A5T(A2X)],AC$,0,B,[CA],0,3,0,0,["cv",A5T(AOr)],AC_,0,B,[CA],0,3,0,0,["cv",A5T(ASL)],VX,
0,B,[CA],0,3,0,0,["cv",A5T(A2y)],VY,0,B,[CA],0,3,0,0,["cv",A5T(AQg)],VZ,0,B,[CA],0,3,0,0,["cv",A5T(AQE)],V0,0,B,[CA],0,3,0,0,["cv",A5T(AZ1)],ABR,0,B,[],3,3,0,0,0,AB0,0,B,[ABR],0,3,0,0,0,ABZ,0,B,[CA],0,3,0,0,["cv",A5T(APw)],OQ,0,B,[],0,3,0,0,0,KD,0,B,[Gg],0,3,0,0,["qd",A5U(M0)],AHu,0,B,[],0,3,0,0,0,D$,0,B,[],3,3,0,0,0,Cr,0,B,[D$],3,3,0,0,0,CD,0,B,[],3,3,0,0,["bU",A5T(AYc),"cn",A5U(ATr),"dB",A5U(AL3),"cy",A5V(A0c)],EK,0,B,[],3,3,0,0,0,CW,0,B,[D$],3,3,0,0,0,EX,0,B,[],3,3,0,0,0,Dd,0,B,[],3,3,0,0,0,E_,0,B,[Dd],3,
3,0,0,0,Rk,0,B,[C_],0,3,0,0,0,Bg,0,B,[],0,3,0,0,["cP",A5S(AH3),"bJ",A5T(APn)],ADc,0,B,[],0,3,0,0,0,AGZ,0,B,[],0,3,0,0,0]);
$rt_metadata([AIB,0,B,[],3,3,0,0,0,Y$,0,B,[],0,3,0,0,0,Ob,0,B,[],0,3,0,0,0,Di,0,Ob,[],0,3,0,0,0,AKN,0,Di,[],0,3,0,0,0,Fu,0,Di,[],0,3,0,0,0,Zw,0,Di,[],0,3,0,0,0,AFU,0,Fu,[],0,3,0,0,0,Hu,0,Fu,[],0,3,0,0,0,PL,0,Hu,[],0,3,0,0,0,AHL,0,Hu,[],0,3,0,0,0,AIP,0,Fu,[],0,3,0,0,0,AKh,0,Di,[],0,3,0,0,0,AEP,0,Di,[],0,3,0,0,0,Z6,0,B,[BT],3,3,0,0,0,ALl,0,B,[Z6],3,3,0,0,0,Y9,0,B,[C_],0,3,0,0,0,Rc,0,B,[],0,3,0,0,0,CH,0,B,[CK,C7],1,3,0,0,0,G_,0,CH,[],12,3,0,Jz,0,Mu,0,B,[],3,3,0,0,0,S9,0,B,[Mu],3,3,0,0,0,AB4,0,B,[],3,3,0,0,0,GV,
0,B,[S9,AB4],1,3,0,0,0,MX,0,GV,[],0,3,0,0,0,AFB,0,MX,[],0,3,0,0,0,HF,0,GV,[],1,3,0,0,0,LJ,0,HF,[],0,3,0,0,["mV",A5V(APp)],Ei,0,CH,[],12,3,0,A1V,0,MP,0,B,[CK],1,3,0,0,0,Mx,0,MP,[],0,3,0,AFv,0,Yi,0,B,[],0,3,0,0,0,H5,0,CH,[],12,0,0,AQv,0,NM,0,HF,[],0,3,0,0,["mV",A5V(AN8)],AGU,0,BU,[],0,3,0,0,0,Uq,0,Ew,[],0,3,0,0,0,Mw,0,B,[BT],3,3,0,0,0,ADW,0,B,[Mw],0,3,0,0,["bh",A5T(ASu)],ADX,0,B,[Mw],0,3,0,0,["bh",A5T(AMK)],Ic,0,B,[],1,3,0,0,0,AAi,0,B,[],3,3,0,0,0,LD,0,Ic,[CK,JL,Ko,AAi],1,3,0,0,0,Nd,0,Ic,[CK],1,3,0,0,0,IJ,0,B,
[],0,3,0,Hn,0,Pl,0,Cv,[],0,3,0,0,["bM",A5S(AQb),"ce",A5U(AO6)],HN,0,Cv,[],1,3,0,0,["ce",A5U(AF5)],CG,0,HN,[],1,3,0,0,["bM",A5S(AN2),"ce",A5U(IE),"cj",A5T(AME)],EF,0,B,[],3,3,0,0,0,JG,0,B,[],3,3,0,0,0,Fk,0,B,[],3,3,0,0,0]);
$rt_metadata([KZ,0,CG,[CD,EF,JG,Fk,EK,EX,E_],0,3,0,0,["h9",A5U(A19),"cj",A5T(ASe),"bM",A5S(AYK),"f$",A5S(AXP),"qf",A5S(ASC),"os",A5S(AYG),"nW",A5T(ATc),"kE",A5T(AZv),"g8",A5T(ANm),"ce",A5U(API),"e8",A5T(AL7),"bU",A5T(AZO),"cy",A5V(AXQ),"cn",A5U(AQy),"dB",A5U(A0e),"dy",A5V(ARP),"cC",A5S(AYf)],AG4,0,KZ,[],0,3,0,0,["f$",A5S(AQJ)],AHs,0,B,[],0,3,0,0,0,AJH,0,B,[BT],1,3,0,0,0,K6,0,LD,[],1,0,0,0,0,AFO,0,K6,[],0,0,0,0,0,Lv,0,B,[],1,3,0,0,0,Of,0,B,[],0,3,0,0,0,AEF,0,B,[],0,3,0,0,0,I7,0,B,[BT],3,3,0,0,0,WX,0,B,[I7],0,
3,0,0,["bh",A5T(AOb)],WW,0,B,[I7],0,3,0,0,["bh",A5T(ARd)],WU,0,B,[Ce],0,3,0,0,["bh",A5T(ARG)],WT,0,B,[Ce],0,3,0,0,["bh",A5T(AWd)],W,0,B,[],3,3,0,0,0,To,0,B,[W],0,3,0,0,["g",A5T(A2C)],Tq,0,B,[W],0,3,0,0,["g",A5T(AYj)],UF,0,B,[BD],0,3,0,0,["bc",A5T(ATq)],UE,0,B,[BD],0,3,0,0,["bc",A5T(ALQ)],UB,0,B,[BD],0,3,0,0,["bc",A5T(AWR)],UA,0,B,[BD],0,3,0,0,["bc",A5T(AZt)],UD,0,B,[BD],0,3,0,0,["bc",A5T(ANW)],UC,0,B,[BD],0,3,0,0,["bc",A5T(AUz)],UI,0,B,[BD],0,3,0,0,["bc",A5T(ANB)],UH,0,B,[BD],0,3,0,0,["bc",A5T(AP5)],UK,0,B,
[BD],0,3,0,0,["bc",A5T(A0O)],UJ,0,B,[BD],0,3,0,0,["bc",A5T(ALz)],AA1,0,B,[BD],0,3,0,0,["bc",A5T(ALK)],AA0,0,B,[BD],0,3,0,0,["bc",A5T(AYo)],AAZ,0,B,[BD],0,3,0,0,["bc",A5T(AQY)],AAO,0,B,[BD],0,3,0,0,["bc",A5T(AOf)],AAN,0,B,[BD],0,3,0,0,["bc",A5T(AUN)],AAL,0,B,[BD],0,3,0,0,["bc",A5T(A1O)],AAK,0,B,[BD],0,3,0,0,["bc",A5T(AQc)],AAJ,0,B,[BD],0,3,0,0,["bc",A5T(A0R)],AAI,0,B,[BD],0,3,0,0,["bc",A5T(ALt)],AAH,0,B,[BD],0,3,0,0,["bc",A5T(A0D)],AAS,0,B,[BD],0,3,0,0,["bc",A5T(AZV)],AAR,0,B,[BD],0,3,0,0,["bc",A5T(AM_)],AAQ,
0,B,[BD],0,3,0,0,["bc",A5T(AXA)],AAP,0,B,[BD],0,3,0,0,["bc",A5T(AO2)],AAU,0,B,[BD],0,3,0,0,["bc",A5T(AO3)],AAT,0,B,[BD],0,3,0,0,["bc",A5T(AVq)],ADg,0,B,[],0,0,0,0,0,Ig,0,B,[],0,3,0,0,0,Qo,0,Ig,[],0,3,0,0,0,AG5,0,B,[],0,3,0,0,0,OO,0,Ig,[],0,3,0,0,0,Tw,0,B,[BT],3,3,0,0,0,Py,0,B,[Tw],0,3,0,0,["LR",A5T(AYp)]]);
$rt_metadata([AB$,0,B,[W],0,3,0,0,["g",A5T(ACV)],ADn,0,Nd,[],0,0,0,0,0,CB,0,B,[C_],0,3,0,0,["b4",A5S(ASf),"hW",A5S(AZl),"dz",A5V(JQ),"dw",A5T(AK4),"cj",A5T(AV8),"rI",A5T(AP7),"oY",A5T(ATQ),"lB",A5U(A0r),"ke",A5S(ATZ),"cy",A5V(AOX),"cn",A5U(AMR),"dB",A5U(AQN),"bU",A5T(ATE),"dy",A5V(A0j)],AFl,0,CB,[],0,3,0,0,["dw",A5T(AGC)],AFS,0,B,[],0,3,0,0,0,FW,0,B,[],3,3,0,0,["wq",A5S(AZm),"uB",A5S(AOl)],Q7,0,B,[],3,0,0,0,0,Mt,0,B,[FW],3,3,0,0,["wq",A5S(AZm),"uB",A5S(AOl)],AFr,0,CB,[FW,CD,JG,Q7,Mt],0,3,0,0,["dz",A5V(Mv),"lB",
A5U(ARp),"po",A5U(A2D),"uB",A5S(AW7),"wq",A5S(AVh),"qf",A5S(Jv),"os",A5S(Ky),"nW",A5T(IA),"kE",A5T(AR6),"ke",A5S(LY),"b4",A5S(AVF),"cj",A5T(I2),"qe",A5T(AJl),"hW",A5S(AHc),"pv",A5S(ASX),"dw",A5T(AYR),"lj",A5S(TQ),"kv",A5S(TP),"hI",A5T(ARM),"kX",A5S(ARC),"l0",A5S(AUt),"dy",A5V(LT),"dB",A5U(S8),"cn",A5U(Wx),"cy",A5V(O_),"bU",A5T(Xx),"it",A5T(A2f)],AIc,0,B,[],0,3,0,0,0,TY,0,B,[W],0,3,0,0,["g",A5T(AMf)],TZ,0,B,[W],0,3,0,0,["g",A5T(A1i)],T0,0,B,[Cr],0,3,0,0,["H",A5T(APO)],HS,0,B,[Cr],0,3,0,0,["H",A5T(AOo)],TW,0,
B,[W],0,3,0,0,["g",A5T(AQA)],TX,0,B,[CW],0,3,0,0,["H",A5T(A1P)],C2,0,B,[],3,3,0,0,0,ADA,0,B,[CD,C2],0,3,0,0,["bU",A5T(AUY),"cy",A5V(AMZ),"cn",A5U(AOZ),"dB",A5U(A1_),"fV",A5U(AX_)],TC,0,B,[],0,3,0,0,0,Wo,0,B,[EK],0,3,0,0,["dy",A5V(A15)],Wn,0,B,[CW],0,3,0,0,["H",A5T(AM0)],AFd,0,B,[],0,3,0,0,0,ADU,0,B,[],0,3,0,0,0,ADJ,0,B,[],0,3,0,0,0,Fv,0,B,[C_],0,3,0,0,0,AHH,0,B,[],0,3,0,0,0,AFc,0,B,[C_],0,3,0,0,0,Xs,0,B,[W],0,3,0,0,0,Xr,0,B,[W],0,3,0,0,["g",A5T(AMs)],Xq,0,B,[W],0,3,0,0,["g",A5T(ALM)],AKd,0,B,[],0,3,0,0,0,Xp,
0,B,[V],0,3,0,0,["f",A5S(AU0)],Xw,0,B,[V],0,3,0,0,["f",A5S(AXa)],Xv,0,B,[V],0,3,0,0,["f",A5S(A3a)],Xu,0,B,[V],0,3,0,0,["f",A5S(APZ)],Xt,0,B,[V],0,3,0,0,["f",A5S(ARH)],Xo,0,B,[V],0,3,0,0,["f",A5S(A2E)],UR,0,B,[V],0,3,0,0,["f",A5S(AP2)],US,0,B,[V],0,3,0,0,["f",A5S(AZR)],AGk,0,B,[BT],1,3,0,0,0,Nz,0,B,[],4,3,0,AX2,0,AEN,0,B,[],3,3,0,0,0,Z8,0,B,[Cr],0,3,0,0,["H",A5T(AOK)],Z7,0,B,[Cr],0,3,0,0,["H",A5T(AWb)],TO,0,B,[],0,3,0,0,0,Kp,0,B,[],0,3,0,0,0,Fp,0,B,[],0,3,0,0,0,Nx,0,Fp,[],0,3,0,0,0,AAX,0,Fp,[],0,3,0,0,0,YW,0,
Fp,[],0,3,0,0,0]);
$rt_metadata([Hh,0,B,[],3,3,0,0,0,SC,0,B,[],3,3,0,0,0,B2,0,B,[],0,3,0,0,["bJ",A5T(AUi)],LK,0,B,[],3,3,0,0,0,AIu,0,Ft,[Ex,C7,LK],0,3,0,0,["pE",A5T(AX8),"kG",A5T(BG),"c2",A5S(AZC),"zW",A5T(BB),"ot",A5U(AJz),"qc",A5T(EN),"q3",A5T(AG7),"je",A5S(Iy),"ut",A5U(AIH),"fm",A5T(Fw)],LC,0,B,[],0,3,0,0,0,Iw,0,B,[C_],0,3,0,0,["b4",A5S(AGt)],YL,0,B,[],3,0,0,0,0,OL,0,B,[],3,3,0,0,0,Y5,0,B,[V],0,3,0,0,["f",A5S(AXG)],Y4,0,B,[V],0,3,0,0,["f",A5S(AUM)],AKV,0,B,[],0,3,0,0,0,TA,0,B,[],0,3,0,0,0,G1,0,B,[],1,3,0,0,0,ZT,0,G1,[],0,3,
0,0,["ue",A5T(Cd)],Mc,0,B,[],3,3,0,0,0,TE,0,B,[Mc],3,3,0,0,0,SS,"JsFileHandle",7,B,[TE],0,3,0,0,["pa",A5S(Er),"tq",A5S(AL8),"cP",A5S(AX$)],ACS,0,B,[],3,3,0,0,0,AJW,0,B,[ACS],0,3,0,0,["cP",A5S(AWt)],Z1,0,B,[OL],0,3,0,0,0,Hi,0,B,[CK],0,3,0,0,0,NU,0,B,[],0,3,0,0,0,DH,0,B,[],0,3,0,0,0,Yu,0,B,[],0,3,0,0,0,Lp,0,Ee,[Ex,C7],0,3,0,0,0,Cw,0,B,[],0,3,0,0,0,NR,0,Lp,[],0,3,0,0,0,ZY,0,B,[],0,3,0,0,0,ALc,0,B,[CK],0,3,0,0,["bJ",A5T(ASN),"ms",A5T(AV7)],U4,0,B,[Gg],0,3,0,0,["qd",A5U(AP4)],Zv,0,B,[],0,3,0,0,["cP",A5S(AL5),"bJ",
A5T(AMN)],Jq,0,B,[],3,3,0,0,0,GY,0,B,[Jq,Ex],0,0,0,0,["bJ",A5T(AWv)],HW,0,GY,[],0,0,0,0,0,NO,0,Lv,[],1,3,0,0,0,QH,0,NO,[],0,3,0,0,0,I9,0,Ew,[],0,3,0,0,0,O2,0,B,[I7],0,3,0,0,["bh",A5T(AT_)],O4,0,B,[Ce],0,3,0,0,["bh",A5T(ATB)],O3,0,B,[Ce],0,3,0,0,["bh",A5T(AVs)],IY,0,B,[],0,3,0,0,0,KA,0,CG,[EF,Fk],0,3,0,0,["g8",A5T(AXN),"cj",A5T(A1d),"bM",A5S(AOM),"f$",A5S(A2u),"ce",A5U(ALy),"e8",A5T(AWP)],AIf,0,Cv,[],0,3,0,0,["cj",A5T(ALT),"bM",A5S(ANE),"ce",A5U(APM)],ABi,0,Cv,[],0,3,0,0,["cj",A5T(ARa),"bM",A5S(AVZ),"ce",A5U(AW6)],XA,
0,CG,[CD,C2],0,3,0,0,["cn",A5U(ATr),"dB",A5U(AL3),"fV",A5U(APf),"ce",A5U(AOc),"bM",A5S(AWL),"bU",A5T(APP),"cy",A5V(AMt)],AAM,0,CG,[C2],0,3,0,0,["fV",A5U(ANt),"ce",A5U(AMI)],W2,0,HN,[CD],0,3,0,0,["bU",A5T(AYc),"cn",A5U(ATr),"dB",A5U(AL3),"cy",A5V(A0c),"bM",A5S(A0N),"cj",A5T(ALL)],SP,0,Cv,[],0,3,0,0,["bM",A5S(ALx),"ce",A5U(AUJ)],Ds,0,Cv,[],0,3,0,0,["bM",A5S(AAh),"ce",A5U(SL)]]);
$rt_metadata([Rf,"SelectFileTest",5,Ds,[],0,3,0,0,0,Xh,0,CG,[],0,3,0,0,0,WE,"RenderTexture",5,Ds,[],0,3,0,0,["cj",A5T(AOW),"bM",A5S(AWA),"ce",A5U(A2o)],SN,"ScissorDemo",5,Ds,[],0,3,0,0,["bM",A5S(A20),"ce",A5U(AOH)],AAB,0,Cv,[],0,3,0,0,["bM",A5S(ATD),"ce",A5U(AWN),"cj",A5T(A0t)],Ks,"ClipboardTest",5,Ds,[CD],0,3,0,0,["bU",A5T(AYc),"cn",A5U(ATr),"dB",A5U(AL3),"cy",A5V(APC)],Sz,"CodiconDemo",5,Ds,[],0,3,0,0,["bM",A5S(AUh)],G7,0,Cv,[CD],1,3,0,0,["bU",A5T(AYc),"cn",A5U(ATr),"dB",A5U(AL3),"cy",A5V(A0c),"bM",A5S(AFj)],Tn,
0,G7,[],0,3,0,0,["cn",A5U(ATr),"dB",A5U(AL3),"cy",A5V(A0c),"ce",A5U(A0g),"bU",A5T(A1a)],Tm,0,G7,[],0,3,0,0,["cn",A5U(ATr),"dB",A5U(AL3),"cy",A5V(A0c),"bU",A5T(A2G),"bM",A5S(ANp),"ce",A5U(AMc)],Wb,0,CG,[C2],0,3,0,0,["fV",A5U(APe)],Ep,"WindowDemo",6,CG,[C2],0,3,[0,0,0],0,["jp",A5S(AWk),"pq",A5S(APX),"kK",A5T(AIK),"fV",A5U(A0X)],Qx,"EditorInViewDemo",5,Ep,[C2,EF,Fk],0,3,[0,0,0],0,["cj",A5T(AWh),"jp",A5S(AML),"pq",A5S(AU5),"kK",A5T(A2I),"e8",A5T(ASG),"g8",A5T(AR2)],W6,0,B,[CD],0,0,0,0,["cn",A5U(ATr),"dB",A5U(AL3),
"cy",A5V(A0c),"bU",A5T(A0K)],TS,0,CG,[C2],0,3,0,0,["fV",A5U(AT4)],PK,"DiffMiddleDemo",8,Ep,[C2],0,3,[0,0,0],0,["jp",A5S(AW2)],K5,0,B,[],3,3,0,0,["rL",A5U(AMy)],RU,"ProjectViewDemo",5,Ep,[EF,K5],0,3,[0,0,0],0,["jp",A5S(AQZ),"kK",A5T(AQS),"e8",A5T(AYZ),"zD",A5T(ASq),"xw",A5T(ALS),"uS",A5T(AOm),"rL",A5U(ASb)],YU,"FileViewDemo",6,Ep,[C2],0,3,[0,0,0],0,["jp",A5S(AZc),"kK",A5T(A0o)],OW,0,KA,[],0,3,0,0,["f$",A5S(AV2)],ACD,0,Cv,[CD],0,3,0,0,["bU",A5T(AYc),"cn",A5U(ATr),"dB",A5U(AL3),"cy",A5V(A0c),"ce",A5U(A2A),"bM",
A5S(AXF),"cj",A5T(ASr)],Ke,0,B,[],0,3,0,0,0,AFM,0,B,[],0,3,0,0,0,AEM,0,B,[],3,3,0,0,0,AH_,0,B,[],0,3,0,0,0,AGa,0,B,[],3,3,0,0,0,AHR,0,B,[],0,3,0,0,0,ME,0,B,[Jq,C7],0,3,0,0,0,KL,0,ME,[],0,0,0,0,0,AK5,0,B,[],0,3,0,0,0,YB,0,B,[Cr],0,3,0,0,["H",A5T(AVM)],Yz,0,B,[W],0,3,0,0,["g",A5T(AXd)],YA,0,B,[CW],0,3,0,0,["H",A5T(AS1)],AHN,0,Kp,[],0,3,0,0,0,TT,0,B,[CD],0,0,0,0,["bU",A5T(AV0),"cy",A5V(ALF),"cn",A5U(AVT),"dB",A5U(AVl)],Y2,0,B,[Cr],0,3,0,0,["H",A5T(A1x)],Y1,0,B,[Cr],0,3,0,0,["H",A5T(AZW)],Y0,0,B,[EX],0,3,0,0,["h9",
A5U(AYh)],YZ,0,B,[V],0,3,0,0,["f",A5S(AUW)],YY,0,B,[CW],0,3,0,0,["H",A5T(ARj)],YX,0,B,[EK],0,3,0,0,["dy",A5V(A1D)],Ho,0,B2,[],0,3,0,0,0,AGL,0,B,[],3,3,0,0,0,WC,0,B,[CD],0,0,0,0,["bU",A5T(AYc),"cn",A5U(ATr),"dB",A5U(AL3),"cy",A5V(AN0)],Wz,0,B,[],0,3,0,0,0,AGb,0,B,[],0,3,0,0,0,AI1,0,B,[],0,3,0,0,["bJ",A5T(A0U)],ABL,0,B,[Cr],0,3,0,0,["H",A5T(AQX)],ABF,0,B,[CW],0,3,0,0,["H",A5T(ASK)],ABG,0,B,[V],0,3,0,0,["f",A5S(A25)]]);
$rt_metadata([ABH,0,B,[V],0,3,0,0,["f",A5S(AMm)],BN,0,B,[],0,3,0,0,0,Uu,0,B,[Cr],0,3,0,0,["H",A5T(AYb)],Uv,0,B,[CW],0,3,0,0,["H",A5T(AL4)],AHt,0,B,[],0,3,0,0,0,Pb,0,B,[C2],0,3,0,0,["fV",A5U(AQ4)],Pa,0,B,[Cr],0,3,0,0,["H",A5T(AZx)],ZO,0,B,[],3,3,0,0,0,AIg,0,B,[ZO],0,3,0,0,0,WN,0,B,[CD],0,0,0,0,["cy",A5V(A0c),"cn",A5U(AU7),"dB",A5U(ALZ),"bU",A5T(AWW)],Z9,0,B,[EK],0,3,0,0,["dy",A5V(AQ2)],QO,0,B,[Cr],0,3,0,0,["H",A5T(AQR)],RG,0,B,[CW],0,3,0,0,["H",A5T(AUj)],RF,0,B,[W],0,3,0,0,["g",A5T(A0x)],ABU,0,B,[CD],0,0,0,0,
["dB",A5U(AL3),"cy",A5V(A0c),"bU",A5T(AZN),"cn",A5U(AT$)],AGf,0,B,[],0,3,0,0,0,Dj,0,B,[],3,3,0,FM,0,YC,0,B,[CD],0,0,0,0,["cy",A5V(A0c),"cn",A5U(AO$),"dB",A5U(AVi),"bU",A5T(AN5)],V2,0,B,[EK],0,3,0,0,["dy",A5V(A1A)],ADk,0,B,[Cr],0,3,0,0,["H",A5T(ANi)],ADj,0,B,[EX],0,3,0,0,["h9",A5U(AYn)],ADi,0,B,[EX],0,3,0,0,["h9",A5U(ANo)],ADh,0,B,[E_],0,3,0,0,["cC",A5S(AQh)],ADl,0,B,[E_],0,3,0,0,["cC",A5S(A07)],Sf,0,B,[Cr],0,3,0,0,["H",A5T(ATN)],Pz,0,B,[Cr],0,3,0,0,["H",A5T(ALV)],PA,0,B,[CW],0,3,0,0,["H",A5T(AXB)],PB,0,B,[W],
0,3,0,0,["g",A5T(AZL)],PC,0,B,[CW],0,3,0,0,["H",A5T(A1s)],AA3,0,B,[CW],0,3,0,0,["H",A5T(ARR)],Uz,0,B,[CW],0,3,0,0,["H",A5T(ARS)],Uy,0,B,[Cr],0,3,0,0,["H",A5T(ARi)],XB,0,B,[CW],0,3,0,0,["H",A5T(ANI)],AHe,0,B,[],3,3,0,0,0,QV,0,B,[Cr],0,3,0,0,["H",A5T(APD)],Dp,0,B,[],3,3,0,AN_,0,Co,0,CH,[],12,3,0,T3,0,Ku,0,B,[],0,3,0,0,0,I0,0,B,[],0,3,0,0,0,AJS,0,B,[],0,3,0,0,0,DP,0,B,[],3,3,0,AU4,0,X7,0,B,[BT],3,3,0,0,0,Yh,0,B,[X7],0,3,0,0,["BN",A5U(AXh)],X8,0,B,[BT],3,3,0,0,0,Yf,0,B,[X8],0,3,0,0,["BN",A5U(AXY)],AE6,0,B,[],0,
3,0,0,0,AIe,0,B,[BT],3,3,0,0,0,Ve,0,B,[],0,3,0,0,0,DT,0,B,[],3,3,0,AYW,0,H0,0,B,[],3,3,0,0,0]);
$rt_metadata([Qc,0,B,[H0],0,3,0,0,["wM",A5V(A0n)],Qd,0,B,[H0],0,3,0,0,0,TV,0,B,[W],0,3,0,0,["g",A5T(AZq)],PT,0,B,[W],0,3,0,0,["g",A5T(ANU)],PS,0,B,[W],0,3,0,0,["g",A5T(AMB)],PP,0,B,[W],0,3,0,0,["g",A5T(ALN)],PN,0,B,[W],0,3,0,0,["g",A5T(A2H)],AHW,0,B,[],0,3,0,0,0,UU,0,B,[W],0,3,0,0,["g",A5T(AXZ)],ACh,0,B,[Cr],0,3,0,0,["H",A5T(AOS)],AKE,0,B,[],0,3,0,0,["bJ",A5T(AWn)],I8,0,B,[],0,3,0,0,0,Kq,0,B,[],4,3,0,0,0,AID,0,B,[],0,3,0,0,0,Ct,0,CH,[],12,3,0,AFh,0,AK$,0,B,[],0,3,0,0,0,AFC,0,B,[BT],4,3,0,0,0,ALh,0,B,[],0,3,
0,0,0,AEm,0,B,[],3,3,0,0,0,C1,0,B,[BT],1,3,0,0,0,AJ8,0,C1,[],1,3,0,0,0,AKs,0,C1,[],1,3,0,0,0,AIS,0,C1,[],1,3,0,0,0,AI3,0,C1,[],1,3,0,0,0,AKH,0,C1,[],1,3,0,0,0,Vo,0,B,[V],0,3,0,0,["f",A5S(APt)],HK,0,CH,[],12,3,0,AQB,0,PG,0,B,[BD],0,3,0,0,["bc",A5T(AVj)],ZE,0,B,[],0,3,0,0,0,AIz,0,B,[],0,3,0,0,0,Gs,0,B,[],0,3,0,0,0,AFt,0,B,[],4,3,0,0,0,Ty,0,B,[],0,0,0,0,0,AIF,0,B,[],3,3,0,0,0,ABc,0,B,[EK],0,3,0,0,["dy",A5V(APy)],V9,0,B,[EX],0,3,0,0,["h9",A5U(A2q)],V8,0,B,[E_],0,3,0,0,["cC",A5S(AP_)],V$,0,B,[C_],0,3,0,0,0,XI,0,
B,[CD],0,0,0,0,["cn",A5U(ATr),"dB",A5U(AL3),"cy",A5V(A0c),"bU",A5T(A28)],AFA,0,B,[BT],1,3,0,0,0,AG_,0,B,[C2,FW,C_],0,3,0,0,["wq",A5S(AZm),"uB",A5S(AOl),"fV",A5U(A2O),"it",A5T(AP8),"b4",A5S(AR0)],W_,0,B,[W],0,3,0,0,["g",A5T(APT)],U7,0,B,[W],0,3,0,0,["g",A5T(A2s)],Q8,0,B,[W],0,3,0,0,["g",A5T(AVO)],PV,0,B,[Dd],0,3,0,0,["cC",A5S(AU$)],AJ4,0,B,[],3,3,0,0,0,LX,0,B,[],3,3,0,0,0,Rb,0,B,[LX],0,3,0,0,["zm",A5T(AV9)],Pw,0,B,[BD],0,3,0,0,["bc",A5T(A1H)],AGz,0,B,[],0,3,0,0,0]);
$rt_metadata([QP,0,B,[C_],0,3,0,0,0,AEp,0,B,[],0,3,0,0,0,Ub,0,B,[],0,3,0,0,0,L$,0,B,[],0,3,0,0,0,SA,0,B,[],3,3,0,0,0,ACo,0,B,[W],0,3,0,0,["g",A5T(AV$)],Gf,0,I9,[],0,3,0,0,0,ADx,0,FC,[],0,3,0,0,0,ACL,0,B,[W],0,3,0,0,["g",A5T(AUl)],Uk,0,B,[W],0,3,0,0,["g",A5T(A14)],VS,0,B,[V],0,3,0,0,["f",A5S(A0E)],G6,0,B,[],1,0,0,0,0,Zg,"FolderDiffWindow",8,G6,[],0,3,[0,0,0],0,["b4",A5S(AMM),"BE",A5T(AXI)],Vf,0,B,[Dd],0,3,0,0,["cC",A5S(AUd)],ADM,0,Es,[CK],0,3,0,0,0,Gw,0,B,[],0,0,0,0,0,JF,0,B,[],4,3,0,0,0,Ue,0,B,[],0,3,0,0,0,Ou,
0,B,[],1,3,0,0,0,ACQ,0,B,[CK],0,3,0,0,["bJ",A5T(ALO),"p1",A5S(ASc),"ms",A5T(AZ4)],AFK,0,C1,[],1,3,0,0,0,UP,0,B,[V],0,3,0,0,["f",A5S(AMH)],AD6,0,B,[],3,3,0,0,0,Zs,0,B,[V],0,3,0,0,["f",A5S(ATd)],Zr,0,B,[V],0,3,0,0,["f",A5S(AYA)],HZ,0,CB,[],1,3,0,0,["b4",A5S(AZi),"dw",A5T(AQK),"cj",A5T(AVg),"dz",A5V(ANw),"cy",A5V(A1N),"cn",A5U(ATb),"dB",A5U(A1X),"bU",A5T(A2j),"dy",A5V(AN9),"ke",A5S(A18)],Q0,0,HZ,[Fk],0,3,0,0,["BT",A5S(APo),"hW",A5S(AXD)],Y6,0,B,[W],0,3,0,0,["g",A5T(AVw)],Rw,0,B,[W],0,3,0,0,["g",A5T(AZf)],Fr,0,
CB,[],0,3,0,0,0,Rq,0,Fr,[FW],0,3,0,0,["wq",A5S(AZm),"uB",A5S(AOl),"b4",A5S(A12),"lB",A5U(AWK),"dw",A5T(AU6),"oY",A5T(AZ2),"rI",A5T(A08),"bU",A5T(AP1),"cn",A5U(AOe),"cy",A5V(AR7),"it",A5T(A1j)],Vb,0,B,[V],0,3,0,0,["f",A5S(ATS)],AFg,0,CB,[],0,3,0,0,["b4",A5S(ASO),"dz",A5V(AOE),"dw",A5T(A0v),"cy",A5V(AS_),"cn",A5U(ASQ),"dB",A5U(AQ7),"bU",A5T(AQT),"dy",A5V(AW4),"hW",A5S(AHQ)],ADF,0,B,[W],0,3,0,0,["g",A5T(ANx)],ADH,0,B,[W],0,3,0,0,["g",A5T(ALP)],Qe,0,Fr,[],0,3,0,0,["hW",A5S(AT1),"oY",A5T(AZ8),"dw",A5T(AUf),"cn",
A5U(AQr)],ADG,0,B,[V],0,3,0,0,["f",A5S(AS4)],Ur,0,CB,[],0,3,0,0,0,Ik,0,HZ,[],1,0,0,0,["BT",A5S(APY)],AFP,0,Ik,[EF],0,0,0,0,0,Hp,0,B,[],0,3,0,0,0,Dh,0,Hp,[],0,3,0,0,0,SJ,0,B,[V],0,3,0,0,["f",A5S(AVY)],SI,0,B,[V],0,3,0,0,["f",A5S(AUD)],Z_,0,Es,[CK],0,3,0,0,0,ACb,0,B,[W],0,3,0,0,["g",A5T(A2F)],AD4,0,B,[V],0,3,0,0,["f",A5S(AYl)],Xz,0,B,[V],0,3,0,0,["f",A5S(AVC)],U5,0,B,[V],0,3,0,0,["f",A5S(A0Q)],ABA,0,B,[],0,3,0,0,0]);
$rt_metadata([J8,0,B,[],0,3,0,0,0,OE,0,B,[],3,3,0,0,0,Ls,0,Fr,[FW],0,3,0,0,["wq",A5S(AZm),"uB",A5S(AOl),"b4",A5S(ARB),"lB",A5U(AMq),"dw",A5T(AYT),"cy",A5V(A1z),"cn",A5U(ANj)],AJr,0,Ls,[],0,3,0,0,["wq",A5S(AZm),"uB",A5S(AOl)],AF7,0,B,[Mt],0,3,0,0,["wq",A5S(AZm),"uB",A5S(AOl),"lj",A5S(ASZ),"kv",A5S(A1K),"hI",A5T(ATP),"kX",A5S(APN),"l0",A5S(AVn),"po",A5U(AQk),"qe",A5T(AY9),"pv",A5S(MG)],ABK,0,B,[],0,3,0,0,0,Xj,0,B,[V],0,3,0,0,["f",A5S(AT6)],SK,0,B,[V],0,3,0,0,["f",A5S(APR)],P2,0,B,[W],0,3,0,0,["g",A5T(AL1)],P1,
0,B,[W],0,3,0,0,["g",A5T(AMh)],AD_,0,B,[Gg],0,3,0,0,["qd",A5U(ASt)],Lg,0,B,[],0,3,0,0,0,AK7,0,G1,[],0,0,0,0,["ue",A5T(A2W)],C$,0,Bu,[],0,3,0,0,0,AKg,0,FC,[],0,3,0,0,0,ALb,0,B,[],0,3,0,0,0,OX,0,B,[W],0,3,0,0,["g",A5T(AUA)],ACJ,0,B,[W],0,3,0,0,["g",A5T(AY4)],Ol,0,BH,[],0,3,0,0,0,Sl,0,B,[W],0,3,0,0,["g",A5T(AWS)],Sk,0,B,[W],0,3,0,0,["g",A5T(A11)],Fj,0,B,[],3,3,0,0,0,Xe,0,B,[Fj],0,0,0,0,["cD",A5S(B_),"b_",A5S(Ca),"pm",A5S(Zy)],Lm,0,Ou,[],1,3,0,0,0,Tc,0,Lm,[],0,3,0,0,0,Yn,0,B,[W],0,3,0,0,0,VL,0,B,[W],0,3,0,0,["g",
A5T(ATy)],Pd,0,B,[Dd],0,3,0,0,["cC",A5S(AR$)],Pc,0,B,[Dd],0,3,0,0,["cC",A5S(AWE)],AAy,0,B,[Dd],0,3,0,0,["cC",A5S(AZH)],XK,0,B,[Dd],0,3,0,0,["cC",A5S(AUK)],AAg,0,B,[Ce],0,3,0,0,["bh",A5T(A2l)],AFN,0,B,[BT],1,3,0,0,0,ACH,0,B,[Ce],0,3,0,0,["bh",A5T(AOs)],AHF,0,B,[BD],0,3,0,0,0,AGK,0,B,[BD],0,3,0,0,0,Xb,0,B,[W],0,3,0,0,["g",A5T(ANg)],Xa,0,B,[W],0,3,0,0,["g",A5T(ASF)],ABe,0,B,[V],0,3,0,0,["f",A5S(ALr)],AE7,0,B,[],0,3,0,0,0,ABf,0,B,[V],0,3,0,0,["f",A5S(AOP)],RY,0,B,[V],0,3,0,0,["f",A5S(AYy)],Tr,0,B,[V],0,3,0,0,["f",
A5S(ATs)],AHE,0,B,[],0,3,0,0,0,ACM,0,B,[V],0,3,0,0,["f",A5S(A2t)],QK,0,B,[],0,3,0,0,0,Eg,0,Bu,[],0,3,0,0,0,AG8,0,B,[],0,3,0,0,0,SM,0,Ee,[Ex,C7],0,3,0,0,0,UN,0,B,[],0,3,0,0,0]);
$rt_metadata([Us,0,B,[],0,3,0,0,0,WR,0,B,[D$],0,3,0,0,0,S1,0,B,[W],0,3,0,0,["g",A5T(ASH)],YD,0,Es,[CK],0,3,0,0,0,Ka,0,B,[],4,3,0,0,0,T4,0,B,[V],0,3,0,0,["f",A5S(AL6)],T5,0,B,[V],0,3,0,0,["f",A5S(AN7)],T6,0,B,[V],0,3,0,0,["f",A5S(A13)],T7,0,B,[V],0,3,0,0,["f",A5S(AQd)],T8,0,B,[V],0,3,0,0,["f",A5S(ASm)],O1,0,B,[Ce],0,3,0,0,["bh",A5T(A2_)],VO,0,B,[],3,3,0,A39,0,PH,0,CB,[],0,3,0,0,["dw",A5T(ALW)],AB1,0,B,[],0,3,0,0,0,Rl,0,B,[V],0,3,0,0,["f",A5S(AY7)],TK,0,B,[],3,3,0,AO4,0,WK,0,B,[V],0,3,0,0,["f",A5S(AY3)],Q2,0,
B,[Fk],0,3,0,0,["g8",A5T(A0u)],Q1,0,B,[Dd],0,3,0,0,["cC",A5S(AWG)],Xi,0,B,[],0,3,0,0,0,AHd,0,B,[],0,3,0,0,0,AEQ,0,B,[],3,3,0,0,0,R8,0,B,[V],0,3,0,0,["f",A5S(AXL)],ACZ,0,B,[V],0,3,0,0,["f",A5S(AT2)],OS,0,B,[V],0,3,0,0,["f",A5S(AOY)],OR,0,B,[D$],0,3,0,0,0,Yv,0,B,[],1,3,0,0,0,Zo,0,B,[Mu],3,3,0,0,0,Pu,0,B,[Zo],3,3,0,0,0,Id,0,B,[Pu],1,3,0,0,0,AAj,0,Id,[],0,3,0,0,0,Ru,0,B,[],3,3,0,0,0,P5,0,B,[W],0,3,0,0,0,ADD,0,B,[W],0,3,0,0,["g",A5T(AMr)],AFW,0,B,[],3,3,0,0,0,JD,0,GY,[],0,0,0,0,0,Ib,0,Bu,[],0,3,0,0,0,ACk,0,B,[W],
0,3,0,0,["g",A5T(ASY)],ADQ,0,B,[Ce],0,3,0,0,["bh",A5T(A0L)],ADP,0,B,[Ce],0,3,0,0,["bh",A5T(AWD)],ADf,0,B,[Ce],0,3,0,0,["bh",A5T(AXq)],ADe,0,B,[Ce],0,3,0,0,["bh",A5T(AXX)],S7,0,B,[],0,3,0,0,0,AB2,0,B,[H0],0,3,0,0,["wM",A5V(APW)],AKl,0,B,[],0,3,0,0,0,Ra,0,B,[W],0,3,0,0,["g",A5T(AVD)],AEw,0,B,[W],0,3,0,0,0,Tv,0,B,[CA],0,3,0,0,["cv",A5T(AU8)],Vy,0,B,[BD],0,3,0,0,0,FQ,0,B,[],0,3,0,0,0]);
$rt_metadata([AIs,0,B,[],0,3,0,0,0,AEW,0,B,[],0,3,0,0,0,ALj,0,B,[],0,3,0,0,0,ADy,0,B,[V],0,3,0,0,["f",A5S(AVo)],ADz,0,B,[V],0,3,0,0,["f",A5S(AXK)],F1,0,B,[],0,3,0,0,0,VV,0,B,[W],0,3,0,0,["g",A5T(AOy)],NQ,0,F1,[],0,3,0,0,0,Li,0,F1,[],0,3,0,0,0,U1,0,B,[W],0,3,0,0,["g",A5T(AVr)],QR,0,B,[],0,3,0,0,0,Qj,0,B,[W],0,3,0,0,["g",A5T(AYU)],Qn,0,B,[HA],3,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],Fz,0,FE,[Qn],1,3,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],Nv,0,Fz,[],1,0,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],Ul,0,Nv,[],0,0,0,0,["fm",A5T(AUC),
"pE",A5T(AX8)],N9,0,Ee,[],1,0,0,0,0,Ui,0,N9,[],0,0,0,0,0,Oo,0,Ft,[LK],1,0,0,0,["fm",A5T(AUC),"je",A5S(AWy),"qc",A5T(AQw),"pE",A5T(APx)],Uj,0,Oo,[],0,0,0,0,["fm",A5T(AUC),"kG",A5T(AQD),"c2",A5S(APQ),"b9",A5S(ANM),"eG",A5S(AL$)],Ug,0,B,[Fj],0,0,0,0,["cD",A5S(ALU),"b_",A5S(AZF),"pm",A5S(ASx)],Yt,0,B,[Fj],3,3,0,0,0,Uh,0,B,[Yt],0,0,0,0,0,Wf,0,B,[Gg],0,3,0,0,0,Rs,0,B,[D$],0,3,0,0,["H",A5T(A3b)],Kw,0,Eg,[],0,3,0,0,0,JK,0,Bu,[],0,3,0,0,0,Oh,0,Bu,[],0,3,0,0,0,Yl,0,B,[W],0,3,0,0,["g",A5T(AZG)],AHX,0,B,[W],0,3,0,0,0,ABq,
0,B,[W],0,3,0,0,["g",A5T(AQm)],Q_,0,B,[Ru],0,3,0,0,0,Vr,0,B,[W],0,3,0,0,["g",A5T(AXR)],AEC,0,B,[],0,3,0,0,0,AAz,0,B,[V],0,3,0,0,["f",A5S(AVp)],Ha,0,B,[],0,3,0,0,0,Qy,0,Fz,[],0,0,0,0,["pE",A5T(AX8)],TN,0,Fz,[],0,0,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],QA,0,FE,[],0,0,0,0,["fm",A5T(AUC),"pE",A5T(AX8)],Wi,0,B,[W],0,3,0,0,["g",A5T(AWY)],T$,0,B,[W],0,3,0,0,["g",A5T(AYz)],KC,0,B,[],0,3,0,0,["bJ",A5T(AJ1)],Mm,0,KC,[],0,3,0,0,["bJ",A5T(AVN)],E$,0,B,[],0,3,0,0,["bJ",A5T(AIv)],HI,0,E$,[],0,3,0,0,0,Kj,0,E$,[],0,3,0,0,["bJ",
A5T(A17)],Jn,0,E$,[],0,3,0,0,["bJ",A5T(AVb)],Ym,0,B,[W],0,3,0,0,["g",A5T(AZJ)],AFq,0,Id,[],0,3,0,0,0,AA6,0,B,[W],0,3,0,0,["g",A5T(ARw)]]);
$rt_metadata([M_,"FileDiffWindow",8,G6,[EF],0,3,[0,0,0],0,["e8",A5T(A0S),"b4",A5S(A1Q),"BE",A5T(AVy)],Wj,0,B,[Dd],0,3,0,0,["cC",A5S(A1f)],AAl,0,B,[Hh],0,3,0,0,["qj",A5U(AUI)],WA,0,B,[],0,3,0,0,0,RM,0,B,[],0,3,0,0,0,VC,0,B,[W],0,3,0,0,["g",A5T(ALs)],UT,0,B,[LX],0,3,0,0,["zm",A5T(NA)],UO,0,Ik,[EF],0,0,0,0,0,Wa,0,B,[EX],0,3,0,0,0,V_,0,B,[E_],0,3,0,0,0,RC,0,B,[Hh],0,3,0,0,["qj",A5U(ANy)],XY,0,B,[Mc],3,3,0,0,0,ACu,0,B,[XY],0,0,0,0,["pa",A5S(Jk),"tq",A5S(A16),"cP",A5S(AFs)],AHC,0,B,[CK],0,3,0,0,["bJ",A5T(AQ$)],WM,
0,B,[W],0,3,0,0,["g",A5T(AYx)],V4,0,B,[W],0,3,0,0,["g",A5T(A2$)],O0,0,B,[W],0,3,0,0,["g",A5T(A1T)],FK,0,B,[],0,0,0,0,0,AAG,0,FK,[Fj],0,0,0,0,0,TG,0,FK,[Fj],0,0,0,0,0,ZG,0,FK,[Fj],0,0,0,0,0,AEO,0,B,[W],0,0,0,0,0,ZD,0,B,[C7],4,3,0,0,0,AAe,0,B,[W],0,3,0,0,["g",A5T(AQt)],AAd,0,B,[W],0,3,0,0,["g",A5T(AZ5)],XN,0,B,[W],0,3,0,0,["g",A5T(AWr)],HY,0,B,[],3,3,0,0,0,Tj,0,B,[HY],0,3,0,0,["lW",A5V(AYV)],Tk,0,B,[HY],0,3,0,0,["lW",A5V(AXC)],IW,0,B,[C7,CK],0,3,0,0,0,KV,0,B,[],3,3,0,0,0,R7,0,B,[KV],0,3,0,0,0,X2,0,B,[KV],3,3,
0,0,0,AFX,0,B,[X2],0,3,0,0,0,Sp,0,B,[HY],0,3,0,0,["lW",A5V(AZn)],So,0,B,[D$],0,3,0,0,["H",A5T(ATM)],Sn,0,B,[D$],0,3,0,0,["H",A5T(AR1)],Sr,0,B,[HY],0,3,0,0,["lW",A5V(AY2)],BS,0,B,[],1,0,0,0,["cr",A5V(II),"cA",A5W(IP),"iW",A5S(AVX),"T",A5T(ATj),"b1",A5T(A1B),"gE",A5S(A2m),"eU",A5S(KB)],V5,0,B,[W],0,3,0,0,["g",A5T(AZr)],V6,0,B,[W],0,3,0,0,["g",A5T(AOi)],RL,0,B,[V],0,3,0,0,["f",A5S(AXj)],XM,0,B,[W],0,3,0,0,["g",A5T(AQG)],AAV,0,B,[V],0,3,0,0,["f",A5S(AMo)],Io,0,Dh,[],0,3,0,0,0,CZ,0,BS,[],0,0,0,OF,["c",A5V(AMn),"I",
A5T(AMD)],G8,0,B,[],0,0,0,0,0,Kk,0,BU,[],0,3,0,0,0,XJ,0,B,[W],0,3,0,0,["g",A5T(ASo)],R6,0,CZ,[],0,0,0,0,["c",A5V(AU9),"I",A5T(A0A)]]);
$rt_metadata([AD2,0,CZ,[],0,0,0,0,["c",A5V(AWi)],QT,0,CZ,[],0,0,0,0,["c",A5V(AMJ)],SO,0,CZ,[],0,0,0,0,["c",A5V(AVa),"I",A5T(AZI)],F9,0,CZ,[],0,0,0,0,["c",A5V(ATu)],Cc,0,BS,[],1,0,0,0,["c",A5V(A2T),"ca",A5S(A1c),"I",A5T(APg)],AHa,0,Cc,[],0,0,0,0,["bz",A5U(A0T),"cr",A5V(AW3),"cA",A5W(AWe),"I",A5T(AU_)],B8,0,BS,[],0,0,0,0,["c",A5V(AOB),"T",A5T(ARs),"b1",A5T(AYt),"I",A5T(ARW),"eU",A5S(AM4)],Kv,0,B8,[],0,0,0,0,["c",A5V(ARg),"I",A5T(A0f)],D_,0,Kv,[],0,0,0,0,["c",A5V(AWB),"T",A5T(AZ$)],Wv,0,D_,[],0,0,0,0,["c",A5V(ARq),
"I",A5T(ATo)],ACU,0,D_,[],0,0,0,0,["c",A5V(AMA),"I",A5T(A1g)],ZH,0,D_,[],0,0,0,0,["c",A5V(AM2),"I",A5T(A27)],Td,0,D_,[],0,0,0,0,["c",A5V(AUQ),"I",A5T(A0q)],HT,0,B8,[],0,0,0,0,["c",A5V(ALR),"cr",A5V(AP$),"cA",A5W(A0C),"b1",A5T(AYq),"gE",A5S(AZE),"eU",A5S(ATT)],KH,0,Dh,[],0,3,0,0,0,G$,0,B,[],1,0,0,0,0,Z,0,G$,[],1,0,0,Qf,["dW",A5S(AVI),"fT",A5S(AVm),"l5",A5S(A0$),"ip",A5S(A2h)],AE1,0,Z,[],0,0,0,0,["n",A5T(Db),"dW",A5S(C5),"fT",A5S(AWZ),"l5",A5S(ATa),"cP",A5S(AY5),"ip",A5S(AOd)],MN,0,Bu,[],0,3,0,0,0,Em,0,BS,[],
1,0,0,0,["b1",A5T(ASv),"I",A5T(A1J),"eU",A5S(AQq)],Dc,0,Em,[],0,0,0,0,["c",A5V(AUR)],FV,0,Dc,[],0,0,0,0,["c",A5V(AVv)],C0,0,Em,[],0,0,0,0,["c",A5V(AU2)],E8,0,Dc,[],0,0,0,0,["c",A5V(AYH),"T",A5T(AUw)],U_,0,Dc,[],0,0,0,0,["c",A5V(A2Q),"cr",A5V(AQQ)],Bf,0,B,[],1,0,0,0,0,Du,0,BU,[],0,3,0,0,0,WF,0,G$,[Ex],0,0,0,0,["cP",A5S(AY_)],XH,0,BS,[],0,0,0,0,["c",A5V(APz),"I",A5T(AZD)],ADt,0,B,[Ex,C7],0,3,0,0,0,O5,0,B8,[],0,0,0,0,0,Rj,0,B8,[],0,0,0,0,["c",A5V(AMk),"T",A5T(AZw),"I",A5T(AMO),"b1",A5T(AMC)],D4,0,B8,[],0,0,0,0,
["c",A5V(AWU),"n",A5T(AOq),"b1",A5T(AMg),"T",A5T(A04),"I",A5T(AN6)],MK,0,D4,[],0,0,0,0,["n",A5T(APh)],AEV,0,Cc,[],0,0,0,0,["bz",A5U(AYe)],EE,0,Cc,[],0,0,0,0,["bz",A5U(Wl),"b1",A5T(ARu)],X4,0,B8,[],0,0,0,0,["T",A5T(AQf),"c",A5V(ALA),"b1",A5T(AVQ),"I",A5T(ATf)],EM,0,Cc,[],0,0,0,0,["ca",A5S(AX5),"bz",A5U(AOL),"cr",A5V(ANS),"cA",A5W(APu),"b1",A5T(AS9)],AHy,0,Cc,[],0,0,0,0,["bz",A5U(AUF)],AEi,0,Cc,[],0,0,0,0,["bz",A5U(ALJ)],FY,0,B8,[],0,0,0,0,["T",A5T(A2p),"c",A5V(ARf),"b1",A5T(APA),"I",A5T(AZ_)],VE,0,FY,[],0,0,
0,0,0,ABs,0,FY,[],0,0,0,0,0,Wh,0,C0,[],0,0,0,0,["c",A5V(AWm)],YE,0,C0,[],0,0,0,0,["c",A5V(AYX)],GE,0,C0,[],0,0,0,0,["c",A5V(A02),"T",A5T(A1W)],QD,0,GE,[],0,0,0,0,["c",A5V(APq),"T",A5T(AZb)],Go,0,C0,[],0,0,0,0,["c",A5V(A24)],Pj,0,Go,[],0,0,0,0,["c",A5V(AO0)],R1,0,C0,[],0,0,0,0,["c",A5V(AT0)]]);
$rt_metadata([Zj,0,GE,[],0,0,0,0,["c",A5V(AMP)],TR,0,Go,[],0,0,0,0,["c",A5V(AVf)],R2,0,Em,[],0,0,0,0,["c",A5V(A2U),"cr",A5V(AST)],XO,0,Em,[],0,0,0,0,["c",A5V(ARv),"cr",A5V(ALB)],FD,0,B,[],1,0,0,0,0,AEf,0,Dc,[],0,0,0,0,["c",A5V(AL9)],U6,0,E8,[],0,0,0,0,["c",A5V(AQF)],Yc,0,FV,[],0,0,0,0,["c",A5V(A0F)],Zi,0,Dc,[],0,0,0,0,["c",A5V(ARr)],ABD,0,E8,[],0,0,0,0,["c",A5V(AMe)],RR,0,FV,[],0,0,0,0,["c",A5V(A0V)],Ll,0,BS,[],4,0,0,0,["c",A5V(AYs),"I",A5T(AXW)],AFe,0,BS,[],0,0,0,0,["c",A5V(AVG),"I",A5T(AVP)],XL,0,BS,[],0,
0,0,0,["c",A5V(APj),"I",A5T(AUo)],Vx,0,BS,[],4,0,0,0,["c",A5V(AZY),"I",A5T(AWf)],ADd,0,BS,[],0,0,0,0,["c",A5V(AZu),"I",A5T(AUE)],WY,0,BS,[],0,0,0,0,["c",A5V(AWa),"I",A5T(AOx)],AHj,0,B8,[],0,0,0,0,["c",A5V(AT3),"T",A5T(AVS),"iW",A5S(AZh),"I",A5T(AVR)],AE0,0,B8,[],4,0,0,0,["c",A5V(AZo),"T",A5T(A0w),"iW",A5S(ALo),"I",A5T(AUe)],AKR,0,BS,[],4,0,0,0,["c",A5V(APE),"I",A5T(AXf)],AJY,0,BS,[],0,0,0,0,["c",A5V(AQ_),"I",A5T(AW_)],AH8,0,BS,[],0,0,0,0,["c",A5V(AXS),"I",A5T(AM$)],Ie,0,B8,[],0,0,0,0,["c",A5V(AMa),"T",A5T(AZ7),
"I",A5T(ASa)],AKX,0,Ie,[],0,0,0,0,["c",A5V(ANc),"cr",A5V(ATm),"cA",A5W(ALY),"b1",A5T(AYS)],AJj,0,Ie,[],0,0,0,0,["c",A5V(AP6)],PZ,0,GT,[JL],0,3,0,0,["pO",A5W(AOg),"pe",A5V(AVJ),"j3",A5T(AV5),"p7",A5U(A1b)],ZW,0,Cc,[],0,0,0,0,["bz",A5U(ANr),"cr",A5V(AVE),"cA",A5W(AXk),"b1",A5T(AOQ)],AEh,0,Cc,[],0,0,0,0,["bz",A5U(AQa)],Pm,0,Cc,[],0,0,0,0,["bz",A5U(A0G)],Hk,0,B,[],4,0,0,ASk,0,Wq,0,Cc,[],0,0,0,0,["bz",A5U(ASA)],NV,0,B8,[],0,0,0,0,["T",A5T(AZB),"c",A5V(AWg),"cr",A5V(AOO),"cA",A5W(AWF),"b1",A5T(ALX),"I",A5T(AS2)],N2,
0,B8,[],0,0,0,0,["T",A5T(AV4),"c",A5V(ALE),"cr",A5V(AZM),"cA",A5W(ASw),"b1",A5T(ANs),"I",A5T(AZS)],Ef,0,Cc,[],0,0,0,0,["bz",A5U(A0h),"cr",A5V(AY6),"cA",A5W(AMU),"b1",A5T(A0b)],ACr,0,FD,[],0,0,0,0,["iP",A5T(AMY),"Ah",A5U(AR9)],ACs,0,FD,[],0,0,0,0,["iP",A5T(A0W),"Ah",A5U(ATO)],AGJ,0,B,[],0,0,0,0,0,AEu,0,B,[],0,0,0,0,0,NT,0,Bf,[],0,0,0,0,["F",A5S(AJp)],Nh,0,Bf,[],0,0,0,0,["F",A5S(AJU)],AGD,0,Bf,[],0,0,0,0,["F",A5S(A0z)],AGY,0,Bf,[],0,0,0,0,["F",A5S(AS5)],AG0,0,Bf,[],0,0,0,0,["F",A5S(ANX)],NP,0,Bf,[],0,0,0,0,["F",
A5S(AE3)],LQ,0,NP,[],0,0,0,0,["F",A5S(AFx)],AHZ,0,Bf,[],0,0,0,0,["F",A5S(AXz)],OK,0,LQ,[],0,0,0,0,["F",A5S(AH6)],AJB,0,OK,[],0,0,0,0,["F",A5S(AQs)],AF1,0,Bf,[],0,0,0,0,["F",A5S(AWu)],AFa,0,Bf,[],0,0,0,0,["F",A5S(AQo)]]);
$rt_metadata([AIR,0,Bf,[],0,0,0,0,["F",A5S(ATR)],AKG,0,Bf,[],0,0,0,0,["F",A5S(AZe)],AH2,0,Bf,[],0,0,0,0,["F",A5S(AUL)],AKo,0,Bf,[],0,0,0,0,["F",A5S(AO5)],AGv,0,Bf,[],0,0,0,0,["F",A5S(ASg)],AHb,0,Bf,[],0,0,0,0,["F",A5S(AWs)],AEG,0,Bf,[],0,0,0,0,["F",A5S(AND)],AId,0,Bf,[],0,0,0,0,["F",A5S(A2b)],AKv,0,Bf,[],0,0,0,0,["F",A5S(AUG)],AGT,0,Bf,[],0,0,0,0,["F",A5S(APF)],AI_,0,Bf,[],0,0,0,0,["F",A5S(ANJ)],AF3,0,Bf,[],0,0,0,0,["F",A5S(AXm)],AHJ,0,Bf,[],0,0,0,0,["F",A5S(AYm)],AKA,0,Bf,[],0,0,0,0,["F",A5S(ATg)],AFH,0,Bf,
[],0,0,0,0,["F",A5S(ARO)],AFm,0,Bf,[],0,0,0,0,["F",A5S(AQU)],AH0,0,Bf,[],0,0,0,0,["F",A5S(A0s)],KI,0,Bf,[],0,0,0,0,["F",A5S(AF2)],AKO,0,KI,[],0,0,0,0,["F",A5S(AQL)],AJG,0,NT,[],0,0,0,0,["F",A5S(AVB)],AFk,0,Nh,[],0,0,0,0,["F",A5S(AOI)],AIU,0,Bf,[],0,0,0,0,["F",A5S(APU)],AI5,0,Bf,[],0,0,0,0,["F",A5S(ATF)],AJu,0,Bf,[],0,0,0,0,["F",A5S(AW9)],AJC,0,Bf,[],0,0,0,0,["F",A5S(ALu)],AIX,0,B,[],4,0,0,0,0,AEU,0,B,[],4,3,0,0,0,W1,0,B,[],0,3,0,0,0,AGO,0,B,[],0,3,0,0,0,AJg,0,B,[],4,3,0,0,0,MA,0,Bu,[],0,3,0,0,0,Ze,0,B,[W],0,
3,0,0,["g",A5T(AYr)],Zd,0,B,[W],0,3,0,0,["g",A5T(ATX)],AIL,0,B,[D$],0,3,0,0,0,Sx,0,B,[W],0,3,0,0,["g",A5T(AXe)],ACm,0,B,[D$],0,0,0,0,["H",A5T(AN1)],ABN,0,B,[V],0,3,0,0,["f",A5S(A1k)],ABQ,0,B,[W],0,3,0,0,0,ABS,0,B,[W],0,3,0,0,["g",A5T(A1Z)],KO,0,B,[],3,3,0,0,0,PM,0,B,[KO],0,0,0,0,["t7",A5T(AZ9),"xm",A5T(AXH),"wp",A5S(ASB)],R5,0,B,[V],0,3,0,0,["f",A5S(ARe)],U$,0,Z,[],0,0,0,0,["n",A5T(AN3)],U8,0,Z,[],0,0,0,0,["n",A5T(AU1)],P$,0,Z,[],0,0,0,0,["n",A5T(APL),"cP",A5S(AXo)],XU,0,Z,[],0,0,0,0,["n",A5T(A0k)],XS,0,Z,[],
0,0,0,0,["n",A5T(ASz)],XT,0,Z,[],0,0,0,0,["n",A5T(AYE)],XX,0,Z,[],0,0,0,0,["n",A5T(AWM)],XZ,0,Z,[],0,0,0,0,["n",A5T(ALp)]]);
$rt_metadata([XV,0,Z,[],0,0,0,0,["n",A5T(AOD)],XW,0,Z,[],0,0,0,0,["n",A5T(AQe)],X0,0,Z,[],0,0,0,0,["n",A5T(ATp)],X1,0,Z,[],0,0,0,0,["n",A5T(AWo)],P9,0,Z,[],0,0,0,0,["n",A5T(A3c)],Qq,0,Z,[],0,0,0,0,["n",A5T(AOG)],P7,0,Z,[],0,0,0,0,["n",A5T(ANh)],P8,0,Z,[],0,0,0,0,["n",A5T(AXc)],Qb,0,Z,[],0,0,0,0,["n",A5T(APl)],P6,0,Z,[],0,0,0,0,["n",A5T(A1o)],P_,0,Z,[],0,0,0,0,["n",A5T(AVL)],Qa,0,Z,[],0,0,0,0,["n",A5T(ARI)],Mf,0,B,[],3,3,0,0,0,AAs,0,B,[Mf],4,3,0,0,0,Ro,0,B,[V],0,3,0,0,["f",A5S(AZ3)],Rm,0,B,[V],0,3,0,0,["f",A5S(AOz)],Rn,
0,B,[V],0,3,0,0,["f",A5S(ATx)],Rp,0,B,[V],0,3,0,0,["f",A5S(ALH)],Su,0,B,[V],0,3,0,0,["f",A5S(AS7)],St,0,B,[V],0,3,0,0,["f",A5S(AYI)],Ss,0,B,[V],0,3,0,0,["f",A5S(AZX)],RK,0,B,[V],0,3,0,0,["f",A5S(AUr)],Q$,0,B,[],3,3,0,0,0,ZF,0,B,[V],0,3,0,0,["f",A5S(A2K)],AJI,0,B,[Hh],0,3,0,0,0,Qv,0,B,[V],0,3,0,0,["f",A5S(ARF)],Qt,0,B,[V],0,3,0,0,["f",A5S(AW$)],Qu,0,B,[V],0,3,0,0,["f",A5S(A2c)],T9,0,B,[V],0,3,0,0,["f",A5S(A0d)],T_,0,B,[V],0,3,0,0,["f",A5S(AQP)],Zf,0,B,[Dd],0,3,0,0,["cC",A5S(A1e)],ZL,0,B,[V],0,3,0,0,["f",A5S(AMb)],ZJ,
0,B,[V],0,3,0,0,["f",A5S(ANq)],SV,0,B,[V],0,3,0,0,["f",A5S(ATL)],SW,0,B,[V],0,3,0,0,["f",A5S(AL_)],SX,0,B,[V],0,3,0,0,["f",A5S(ANk)],SY,0,B,[V],0,3,0,0,["f",A5S(ATA)],Tb,0,B,[V],0,3,0,0,["f",A5S(AYO)],SZ,0,B,[Dd],0,3,0,0,["cC",A5S(A2M)],ACK,0,B,[],0,3,0,0,0,TD,0,B,[H0],0,3,0,0,0,Pf,0,HT,[],0,0,0,0,["cr",A5V(AOk),"cA",A5W(A23),"gE",A5S(AM7)],Re,0,Bu,[],0,3,0,0,0,VB,0,Bu,[],0,3,0,0,0,Ua,0,Gf,[],0,3,0,0,0,Q9,0,Gf,[],0,3,0,0,0,Vz,0,B,[Ce],0,3,0,0,["bh",A5T(AXl)],VA,0,B,[Ce],0,3,0,0,["bh",A5T(AVK)],ACg,0,B,[],0,
3,0,0,0,AET,0,B,[],3,3,0,0,0]);
$rt_metadata([ACy,0,B,[Ce],0,3,0,0,["bh",A5T(ARQ)],ACA,0,B,[Ce],0,3,0,0,["bh",A5T(AQ1)],ACB,0,B,[Ce],0,0,0,0,["bh",A5T(ARX)],YQ,0,B,[V],0,3,0,0,0,AAW,0,B,[KO],0,0,0,0,["t7",A5T(A1y),"xm",A5T(ATn),"wp",A5S(A1U)],ACj,0,B,[Mf],0,0,0,0,0,TF,0,B,[Ce],0,3,0,0,["bh",A5T(AYw)],AAq,0,B,[V],0,3,0,0,["f",A5S(A21)],XD,0,B,[V],0,3,0,0,["f",A5S(ART)],XE,0,B,[V],0,3,0,0,["f",A5S(APB)],Z4,0,B,[V],0,3,0,0,["f",A5S(AR3)],QF,0,B,[Fk],0,3,0,0,["g8",A5T(AUU)],ADb,0,B,[W],0,3,0,0,["g",A5T(AOw)],GJ,0,CH,[],12,0,0,SG,0,ZP,0,B,[W],
0,3,0,0,["g",A5T(A1r)],QY,0,B,[V],0,3,0,0,["f",A5S(AXt)],RO,0,B,[W],0,3,0,0,["g",A5T(AMl)],R0,0,B,[W],0,3,0,0,["g",A5T(AOn)],ABl,0,B,[],32,0,0,A5a,0,OV,0,B,[V],0,3,0,0,["f",A5S(AXO)],AAY,0,Z,[],0,0,0,0,["n",A5T(ATt)],Wy,0,Z,[],0,0,0,0,["n",A5T(AVz)],Sa,0,Z,[],0,0,0,0,["n",A5T(AMd)],R_,0,Z,[],0,0,0,0,["n",A5T(AW8)],Vl,0,Z,[],0,0,0,0,["n",A5T(APb)],X_,0,Z,[],0,0,0,0,["n",A5T(A1S)],PW,0,Z,[],0,0,0,0,["n",A5T(ARm)],Zu,0,Z,[],0,0,0,0,["n",A5T(ASj)],Wu,0,Z,[],0,0,0,0,["n",A5T(A2R)],Ww,0,Z,[],0,0,0,0,["n",A5T(ANu)],PD,
0,Z,[],0,0,0,0,["n",A5T(ATC)],Ys,0,Z,[],0,0,0,0,["n",A5T(AYM)],Yx,0,Z,[],0,0,0,0,["n",A5T(AZ6)],ABm,0,Z,[],0,0,0,0,["n",A5T(A1F)],AAt,0,Z,[],0,0,0,0,["n",A5T(ATW)],O$,0,Z,[],0,0,0,0,["n",A5T(ANn)],Mp,0,Z,[],0,0,0,0,["n",A5T(ARn)],Z2,0,Mp,[],0,0,0,0,["n",A5T(A05)],ADK,0,B,[BT],3,3,0,0,0,YV,0,B,[ADK],0,3,0,0,["Ix",A5S(AP0)],Sb,0,B,[W],0,3,0,0,["g",A5T(A1l)],Qz,0,B,[JG],0,3,0,0,["qf",A5S(ANQ),"os",A5S(ALD),"nW",A5T(ASM),"kE",A5T(ARc)],ABg,0,B,[W],0,3,0,0,0,R$,0,B,[W],0,3,0,0,0,Q5,0,B,[W],0,3,0,0,["g",A5T(ANd)],Da,
0,B,[],3,3,0,AG2,0,Cz,0,CH,[],12,3,0,AGp,0,D1,0,B,[],3,3,0,AVd,0,AAc,0,B,[K5],0,0,0,0,["rL",A5U(AMy),"zD",A5T(APJ),"xw",A5T(AUq),"uS",A5T(AUx)],ADL,0,B,[W],0,3,0,0,["g",A5T(A0l)]]);
$rt_metadata([AGd,0,B,[BT],3,3,0,0,0,AA7,0,B,[V],0,3,0,0,["f",A5S(AX7)],RQ,0,B,[V],0,3,0,0,["f",A5S(A2e)],AIy,0,B,[],0,0,0,0,0,AEd,0,B,[V],0,3,0,0,["f",A5S(AX6)],Ri,0,B,[V],0,3,0,0,["f",A5S(AMp)],ABJ,0,B,[W],0,3,0,0,["g",A5T(ATY)],ABI,0,B,[W],0,3,0,0,["g",A5T(AUB)]]);
function $rt_array(cls,data){this.WT=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel","ns-resize","ew-resize","/Full file parsed in ",
"ms","ScopeUtils.resolveAll","activity","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","js","cpp","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","nwse-resize","nesw-resize","File is too large: "," name: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436",
"#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","","codicon.pixel.size = ",
"w = ","Window 1","Window ","Select left...","Select right...","Project root","Open project...","request new model, file = ","request in progress ","FileTreeView model size = ","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5",
"asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","new folder diff window","new file diff window","Open project ...","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ",
"  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null",
"onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Folder ","ClassFile ","Expected "," ints to write, but "," written","open file ","openDirectory: "," - project view","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >",
"Settings >","parser >","open ...","font pow >","Development >","Int","Iter","VP","Resolve","Rep","No definition or usages"," ints to read, but "," read","fib(",") result = ",") time = ","Unknown scope type: ","/Resolved in ","DiffUtils.findDiffs","Unexpected type: ","Unexpected ref node type: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable",
"javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya",
"Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols",
"CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement",
"Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates",
"HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf",
"  sub dir: ","  file: ","complete","readDirectory: ","readClipboardText error: ","Current Version: ","Last Parsed Version: ","file = ","file.content.length = ","DEF","DECL","open dir = ","writeClipboardText error: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","opening file ... ","folderOpened ","Error fetching file "]);
BJ.prototype.toString=function(){return $rt_ustr(this);};
BJ.prototype.valueOf=BJ.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AMS(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CR=Long_add;var JP=Long_sub;var Ci=Long_mul;var AGN=Long_div;var AUX=Long_rem;var A3z=Long_or;var Dg=Long_and;var A9M=Long_xor;var HQ=Long_shl;var A4U=Long_shr;var Gd=Long_shru;var A9N=Long_compare;var IK=Long_eq;var A9O=Long_ne;var A3w=Long_lt;var ANN=Long_le;var A9P=Long_gt;var A3v=Long_ge;var A9Q=Long_not;var A45=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A46);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ABu.prototype;c.f=c.bh;c=ABv.prototype;c.f=c.bh;c=ABt.prototype;c.f=c.bh;c=WP.prototype;c.f=c.bh;c=AJF.prototype;c.get=c.Ly;Object.defineProperty(c,"length",{get:c.R0});c=AIm.prototype;c.createEntityReference=c.Oa;c.getElementById=c.Qu;c.createTextNode=c.Qc;c.hasChildNodes=c.Pd;c.querySelectorAll=c.NT;c.removeChild=c.RM;c.cloneNode=c.Gi;c.createComment=c.SW;c.insertBefore=c.Ot;c.getElementsByTagNameNS=c.RY;c.hasAttributes=c.IX;c.normalize=c.L5;c.hasChildNodesJS=c.LY;c.getElementsByTagName
=c.Lx;c.appendChild=c.M1;c.createAttributeNS=c.QP;c.dispatchEvent=c.LK;c.replaceChild=c.GN;c.createElementNS=c.HV;c.createCDATASection=c.KQ;c.querySelector=c.IW;c.createElement=c.Ri;c.isSupported=c.RQ;c.importNode=c.OD;c.removeEventListener=c.HR;c.createAttribute=c.LL;c.createDocumentFragment=c.FG;c.createProcessingInstruction=c.N6;c.addEventListener=c.J$;Object.defineProperty(c,"nodeName",{get:c.M0});Object.defineProperty(c,"documentElement",{get:c.IB});Object.defineProperty(c,"childNodes",{get:c.Ky});Object.defineProperty(c,
"prefix",{get:c.OJ,set:c.S7});Object.defineProperty(c,"implementation",{get:c.La});Object.defineProperty(c,"textContent",{get:c.S1,set:c.P_});Object.defineProperty(c,"parentNode",{get:c.Qr});Object.defineProperty(c,"nextSibling",{get:c.Ir});Object.defineProperty(c,"nodeType",{get:c.Rx});Object.defineProperty(c,"doctype",{get:c.Pt});Object.defineProperty(c,"localName",{get:c.Sg});Object.defineProperty(c,"nodeValue",{get:c.H_,set:c.SO});Object.defineProperty(c,"firstChild",{get:c.LF});Object.defineProperty(c,
"lastChild",{get:c.Kg});Object.defineProperty(c,"previousSibling",{get:c.MN});Object.defineProperty(c,"namespaceURI",{get:c.G6});Object.defineProperty(c,"attributes",{get:c.OQ});Object.defineProperty(c,"ownerDocument",{get:c.Hb});c=PE.prototype;c.f=c.bh;c=AIO.prototype;c.removeEventListener=c.Hd;c.dispatchEvent=c.Oy;c.addEventListener=c.JJ;c=Up.prototype;c.onAnimationFrame=c.IY;c=Uo.prototype;c.f=c.BN;c=Um.prototype;c.handleEvent=c.cv;c=AAp.prototype;c.f=c.bh;c=AC2.prototype;c.handleEvent=c.cv;c=AC3.prototype;c.handleEvent
=c.cv;c=AC4.prototype;c.handleEvent=c.cv;c=AC5.prototype;c.handleEvent=c.cv;c=AC6.prototype;c.handleEvent=c.cv;c=AC7.prototype;c.handleEvent=c.cv;c=AC8.prototype;c.handleEvent=c.cv;c=AC9.prototype;c.handleEvent=c.cv;c=AC$.prototype;c.handleEvent=c.cv;c=AC_.prototype;c.handleEvent=c.cv;c=VX.prototype;c.handleEvent=c.cv;c=VY.prototype;c.handleEvent=c.cv;c=VZ.prototype;c.handleEvent=c.cv;c=V0.prototype;c.handleEvent=c.cv;c=ABZ.prototype;c.handleEvent=c.cv;c=ADW.prototype;c.f=c.bh;c=ADX.prototype;c.f=c.bh;c=WX.prototype;c.f
=c.bh;c=WW.prototype;c.f=c.bh;c=WU.prototype;c.f=c.bh;c=WT.prototype;c.f=c.bh;c=Py.prototype;c.accept=c.LR;c=O2.prototype;c.f=c.bh;c=O4.prototype;c.f=c.bh;c=O3.prototype;c.f=c.bh;c=Yh.prototype;c.f=c.BN;c=Yf.prototype;c.f=c.BN;c=AAg.prototype;c.f=c.bh;c=ACH.prototype;c.f=c.bh;c=O1.prototype;c.f=c.bh;c=ADQ.prototype;c.f=c.bh;c=ADP.prototype;c.f=c.bh;c=ADf.prototype;c.f=c.bh;c=ADe.prototype;c.f=c.bh;c=Tv.prototype;c.handleEvent=c.cv;c=Vz.prototype;c.f=c.bh;c=VA.prototype;c.f=c.bh;c=ACy.prototype;c.f=c.bh;c=ACA.prototype;c.f
=c.bh;c=ACB.prototype;c.f=c.bh;c=TF.prototype;c.f=c.bh;c=YV.prototype;c.onTimer=c.Ix;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);