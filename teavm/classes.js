"use strict";
(function(root,module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(root,exports);});}else if(typeof exports==='object'&&typeof exports.nodeName!=='string'){module(global,exports);}else{module(root,root);}}(typeof self!=='undefined'?self:this,function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,
cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,
cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,
data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),
data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data)
{var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data)
{var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:
jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element
=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays
=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),
arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),
arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]
=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+
0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"
?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix
=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if
(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass
=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f)
{return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f)
{return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target)
{return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,
n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,
n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError
=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if
(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=
err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}
else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)
!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive
?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}
else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};Long_fromInt=function(val){return $rt_globals.BigInt(val);};Long_fromNumber=function(val){return $rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,
val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||
index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.e8=f;}
function $rt_cls(cls){return AAI(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FJ(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bQ.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AMQ(t);}
function $rt_throwableCause(t){return AMY(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ASo());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ASp(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ASq());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BD=$rt_compare;var ASr=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var Vb=$rt_isInstance;var ASs=$rt_nativeThread;var ASt=$rt_suspending;var ASu=$rt_resuming;var ASv=$rt_invalidPointer;var B=$rt_s;var Bq=$rt_eraseClinit;var Be=$rt_imul;var D6=$rt_wrapException;var ASw=$rt_checkBounds;var ASx=$rt_checkUpperBound;var ASy=$rt_checkLowerBound;var ASz=$rt_wrapFunction0;var ASA=$rt_wrapFunction1;var ASB=$rt_wrapFunction2;var ASC=$rt_wrapFunction3;var ASD=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var ZB=$rt_createCharArrayFromData;var AQ_=$rt_createByteArrayFromData;var ASE=$rt_createShortArrayFromData;var EU=$rt_createIntArrayFromData;var ASF=$rt_createBooleanArrayFromData;var ASG=$rt_createFloatArrayFromData;var ASH=$rt_createDoubleArrayFromData;var AFa=$rt_createLongArrayFromData;var ASn=$rt_createBooleanArray;var EX=$rt_createByteArray;var ASI=$rt_createShortArray;var BQ=$rt_createCharArray;var BH=$rt_createIntArray;var AR2=$rt_createLongArray;var ADq=$rt_createFloatArray;var ASJ
=$rt_createDoubleArray;var BD=$rt_compare;var ASK=$rt_castToClass;var ASL=$rt_castToInterface;var ASM=Long_toNumber;var Bd=Long_fromInt;var ASN=Long_fromNumber;var B_=Long_create;var Ed=Long_ZERO;var ASO=Long_hi;var Eu=Long_lo;
function C(){this.$id$=0;}
function ASP(){var a=new C();ABR(a);return a;}
function ABR(a){}
function Cy(a){return AAI(a.constructor);}
function AJU(a,b){return a!==b?0:1;}
function AEU(a){var b,c,d,e,f,g,h,i,j;b=Xh(a);if(!b)c=B(0);else{d=(((32-MW(b)|0)+4|0)-1|0)/4|0;e=BQ(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GV((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FJ(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function Xh(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AJd(a){var b,c,d;if(!Vb(a,Eb)&&a.constructor.$meta.item===null){b=new UM;U(b);J(b);}b=ADA(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Qx(){var a=this;C.call(a);a.tx=0;a.qa=null;}
function ARn(b){var c,d,e,f,g,h,i,j,k,l;ABO();Xz();AAa();AA9();YS();ABw();Xn();ABU();AC_();Xp();AAX();AAs();AAY();ZO();YZ();Yh();Zm();Zo();Zg();XJ();ZW();ACS();c=(XM()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Oe(B(2),B(3));else{d=new Qx;BI(d);e=new SO;e.rK=d;f=new Mu;c=new $rt_globals.Worker("teavm/worker.js");g=new M0;g.oo=c;g.op=e;g.oq=f;e=Bk(g,"f");c.onmessage=e;h=H(K3,[I$(B(4),B(5),400),I$(B(6),B(7),400),I$(B(8),B(5),700),I$(B(9),
B(7),700)]);b=R(K3,1);b.data[0]=ANL(B(10),E1(B(11),B(12)),B(5),400);b=(KZ(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.ri;f=c.p6;k=new M;O(k);BA(G(G(k,B(13)),f),41);k=N(k);f=c.pT;l=c.oa;f=AHc($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BI(d);c=new SP;c.sB=d;g=new SN;e.then(Bk(c,"f"),Bk(g,"f"));}}
function ZT(b){var c,d,e,f,g,h,i,j,k;c=new RG;d=new QK;c.o_=new $rt_globals.TextDecoder("utf-16");e=new UL;e.n8=c;c.qX=e;e=new UF;e.tM=c;c.lH=e;f=new UG;f.qM=c;c.sR=new $rt_globals.ResizeObserver(Bk(f,"f"));e=new UD;e.nI=c;c.mA=e;c.hK=1;f=new Oc;f.ws=null;f.i0=ASQ;c.lk=f;c.pw=b;f=new UE;f.sZ=c;e=Bk(f,"f");b.onmessage=e;e=ZN();b.postMessage(e);c.mo=(DW()).getElementById("canvasDiv");b=XM();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dh
=b;c.mo.appendChild(b);f=c.dh;e=ALd(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)Oe(B(2),B(14));else{g=new OB;e=c.dh;f=c.lH;g.dc=null;g.gF=e;g.ca=ARx(f);h=$rt_globals.window;i=R(Dj,14);j=i.data;k=new Vt;k.mS=g;j[0]=CP(g,e,B(15),k);f=new Vu;f.rr=g;j[1]=CP(g,e,B(16),f);f=new Vv;f.nT=g;j[2]=CP(g,e,B(17),f);f=new Vw;f.tG=g;j[3]=CP(g,e,B(18),f);f=new Vx;f.qD=g;j[4]=CP(g,e,B(19),f);f=new Vy;f.nh=g;j[5]=CP(g,e,B(20),f);k=new Vz;k.tU=g;j[6]=CP(g,e,B(21),k);k=new VA;k.qP=g;j[7]=CP(g,e,B(22),k);k=new VB;k.ny
=g;j[8]=CP(g,e,B(23),k);k=new VC;k.s7=g;j[9]=CP(g,e,B(24),k);k=new WP;k.sw=g;j[10]=CP(g,e,B(25),k);k=new WQ;k.rF=g;j[11]=AAS(g,h,B(26),k,1);k=new WR;k.l3=g;j[12]=CP(g,h,B(27),k);k=new WS;k.tj=g;j[13]=CP(g,h,B(28),k);g.vO=AO2(i);Y$(g,e);c.kV=g;c.fG=AQX(b,c.lH);ANo(c.sR,c.dh);e=$rt_globals.window;g=c.mA;e.addEventListener("resize",Bk(g,"handleEvent"));c.eT=Z8(d,Y1(c));Sd(c);}ABm(c);}
var Mm=F(0);
var LP=F(0);
function Vo(){var a=this;C.call(a);a.jN=null;a.ft=null;}
function AAI(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Vo;c.ft=b;d=c;b.classObject=d;}return c;}
function HA(a){if(a.jN===null)a.jN=$rt_str(a.ft.$meta.name);return a.jN;}
function Hr(a){return a.ft.$meta.primitive?1:0;}
function HG(a){return AAI(a.ft.$meta.item);}
var Yl=F();
function Bk(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function KD(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var X7=F();
function ADA(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AAM(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AAM(d[e],c))return 1;e=e+1|0;}return 0;}
function Gj(){var a=this;C.call(a);a.g1=null;a.kl=null;a.iz=0;a.i2=0;}
function ASR(){var a=new Gj();U(a);return a;}
function ASS(a){var b=new Gj();Bl(b,a);return b;}
function U(a){a.iz=1;a.i2=1;}
function Bl(a,b){a.iz=1;a.i2=1;a.g1=b;}
function AGX(a){return a;}
function AMQ(a){return a.g1;}
function AMY(a){var b;b=a.kl;if(b===a)b=null;return b;}
var DR=F(Gj);
function AST(){var a=new DR();AA6(a);return a;}
function AA6(a){U(a);}
var Bm=F(DR);
function ASp(a){var b=new Bm();AOK(b,a);return b;}
function AOK(a,b){Bl(a,b);}
var ZS=F(Bm);
var Da=F(0);
var CH=F(0);
var Ig=F(0);
function Bw(){var a=this;C.call(a);a.bQ=null;a.hk=0;}
var ASU=null;var ASV=null;var ASW=null;function EB(){EB=Bq(Bw);AOi();}
function AHz(){var a=new Bw();Xr(a);return a;}
function FJ(a){var b=new Bw();G3(b,a);return b;}
function I8(a,b,c){var d=new Bw();LC(d,a,b,c);return d;}
function Xr(a){EB();a.bQ=ASU;}
function G3(a,b){EB();LC(a,b,0,b.data.length);}
function LC(a,b,c,d){var e;EB();e=BQ(d);a.bQ=e;Dn(b,c,e,0,d);}
function Lx(b){var c;EB();c=AHz();c.bQ=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bQ.data;if(b<c.length)return c[b];}d=new GT;U(d);J(d);}
function I(a){return a.bQ.data.length;}
function Fb(a){return a.bQ.data.length?0:1;}
function OR(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=I(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dn(a.bQ,b,d,e,c);return;}}g=new Bv;U(g);J(g);}
function Tk(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function JY(a,b){if(a===b)return 1;return Tk(a,b,0);}
function Gq(a,b,c){var d,e,f,g,h;d=V(0,c);if(b<65536){e=b&65535;while(true){f=a.bQ.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=HC(b);h=H9(b);while(true){f=a.bQ.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FP(a,b,c){var d,e,f,g,h;d=X(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bQ.data[d]==e)break;d=d+(-1)|0;}return d;}f=HC(b);g=H9(b);while(true){if(d<1)return (-1);h=a.bQ.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function YL(a,b,c){var d,e,f;d=V(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function B8(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new Bv;U(e);J(e);}if(!d){EB();return ASV;}if(!b&&c==I(a))return a;return I8(a.bQ,b,c-b|0);}
function Dt(a,b){return B8(a,b,I(a));}
function OY(a,b,c){return B8(a,b,c);}
function E1(a,b){var c,d,e,f,g,h;if(Fb(b))return a;if(Fb(a))return b;c=BQ(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Lx(c);}
function Ud(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BA(d,L(a,f));}f=f+1|0;}G(d,Dt(a,f));return N(d);}
function QP(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B8(a,b,c+1|0);}
function AET(a){return a;}
function Gh(a){var b,c,d,e,f;b=a.bQ.data;c=BQ(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Ct(b){EB();return b===null?B(29):b.ci();}
function CZ(b){var c;EB();c=new M;O(c);return N(S(c,b));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bw))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function KB(a){var b,c,d,e;a:{if(!a.hk){b=a.bQ.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hk=(31*a.hk|0)+e|0;d=d+1|0;}}}return a.hk;}
function Lb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gn;Bl(b,B(30));J(b);}ASX=1;d=new PW;d.jz=R(CM,10);d.fO=(-1);d.d9=(-1);d.bo=(-1);e=new Gs;e.d6=1;e.bB=b;e.ba=BQ(I(b)+2|0);Dn(Gh(b),0,e.ba,0,I(b));f=e.ba.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.qE=g;e.fw=0;EQ(e);EQ(e);d.f=e;d.c3=0;d.kw=WM(d,(-1),0,null);if(!Db(d.f)){b=new Ia;h=d.f;IH(b,B(31),h.bB,h.cN);J(b);}if(d.mU)d.kw.dJ();b=Cl();h=new Ro;h.hJ=(-1);h.jV=(-1);h.uU=d;h.sG=d.kw;h.h4=a;h.hJ=0;g=I(a);h.jV=g;e=new Uf;i=h.hJ;j=d.fO;k=d.d9+1|0;l=d.bo+
1|0;e.g6=(-1);m=j+1|0;e.nP=m;e.dg=BH(m*2|0);f=BH(l);e.iW=f;G_(f,(-1));if(k>0)e.km=BH(k);G_(e.dg,(-1));WD(e,a,i,g);h.ch=e;e.eI=1;n=0;m=0;if(!I(a)){f=R(Bw,1);f.data[0]=B(31);}else{while(true){l=I(h.h4);if(!XC(h))l=h.jV;e=h.ch;if(e.dH>=0&&Ze(e)==1){e=h.ch;e.dH=It(e);if(It(h.ch)==AA8(h.ch)){e=h.ch;e.dH=e.dH+1|0;}g=h.ch.dH;g=g<=l&&LY(h,g)?1:0;}else g=LY(h,h.hJ);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BX(b,OY(a,m,ACz(h)));m=YV(h);n=g;}a:{BX(b,OY(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bs(b,
g)))break a;Ec(b,g);}}if(g<0)g=0;f=Hm(b,R(Bw,g));}return f;}
function AG7(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=X(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AOi(){ASU=BQ(0);ASV=AHz();ASW=new RR;}
var Ew=F(Gj);
var GW=F(Ew);
var Zt=F(GW);
var DK=F();
function E5(){DK.call(this);this.e5=0;}
var ASY=null;var ASZ=null;function AB$(a){var b=new E5();Ji(b,a);return b;}
function Ji(a,b){a.e5=b;}
function IW(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new C9;Bl(b,B(32));J(b);}d=I(b);if(0==d){b=new C9;Bl(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new C9;U(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=N6(L(b,f));if(i<0){j=new C9;k=B8(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bl(j,N(b));J(j);}if(i>=c){j=new C9;l=B8(b,0,d);b=new M;O(b);G(G(S(G(b,B(35)),c),B(36)),l);Bl(j,N(b));J(j);}g=Be(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new C9;k=B8(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bl(j,N(b));J(j);}b=new C9;j=new M;O(j);S(G(j,B(38)),c);Bl(b,N(j));J(b);}
function FO(b){var c,d;if(b>=(-128)&&b<=127){a:{if(ASZ===null){ASZ=R(E5,256);c=0;while(true){d=ASZ.data;if(c>=d.length)break a;d[c]=AB$(c-128|0);c=c+1|0;}}}return ASZ.data[b+128|0];}return AB$(b);}
function Lk(a){var b;b=a.e5;return (MJ(ASa(20),b,10)).ci();}
function MW(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HP(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Jy(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AI9(a,b){b=b;return BD(a.e5,b.e5);}
function ABO(){ASY=E($rt_intcls());}
function F7(){var a=this;C.call(a);a.B=null;a.M=0;}
function AS0(){var a=new F7();O(a);return a;}
function ASa(a){var b=new F7();FM(b,a);return b;}
function O(a){FM(a,16);}
function FM(a,b){a.B=BQ(b);}
function MJ(a,b,c){return ZH(a,a.M,b,c);}
function ZH(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ca(a,b,b+1|0);else{Ca(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=GV(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Be(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ca(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=GV($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AAy(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){Ca(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ca(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ca(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ca(a,b,b+8|0);d=b;}else{Ca(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AS1;AAt(c,f);d=f.j1;g=f.jI;h=f.nc;i=1;j=1;if(h)j=2;k=9;l=ANQ(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=V(k,i+1|0);g=0;}else{d=d/AS2.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ca(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.B.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.B.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.B.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function YE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){Ca(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ca(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ca(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ca(a,b,b+8|0);d=b;}else{Ca(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AS3;ZL(c,f);g=f.kz;h=f.js;i=f.mP;j=1;k=1;if(i)k=2;l=18;m=ALE(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=V(l,j+1|0);h=0;}else{g=Dg(g,AS4.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ca(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}n=B_(1569325056, 23283064);o=0;while(o<l){if(OQ(n,Ed))d=0;else{d=Eu(Dg(g,n));g=L5(g,
n);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Dg(n,Bd(10));o=o+1|0;}if(h){e=a.B.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function ANQ(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ALE(b){var c,d,e,f,g;c=Bd(1);d=0;e=16;f=AS5.data;g=f.length-1|0;while(g>=0){if(E0(L5(b,BM(c,f[g])),Ed)){d=d|e;c=BM(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BA(a,b){return a.ls(a.M,b);}
function Wp(a,b,c){Ca(a,b,b+1|0);a.B.data[b]=c;return a;}
function IZ(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:V(b,V(c*2|0,5));a.B=XI(a.B,d);}
function N(a){return I8(a.B,0,a.M);}
function V_(a,b,c,d){return a.kU(a.M,b,c,d);}
function Mg(a,b,c,d,e){var f,g,h,i;Ca(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HR(a,b){return a.j9(b,0,b.data.length);}
function Ca(a,b,c){var d,e,f,g;d=a.M;e=d-b|0;a.he((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.M=a.M+(c-b|0)|0;}
var Hu=F(0);
var M=F(F7);
function K6(){var a=new M();AO$(a);return a;}
function AO$(a){O(a);}
function G(a,b){var c;c=a.M;if(b===null)b=B(29);Ly(a,c,b);return a;}
function BY(a,b){Ly(a,a.M,b);return a;}
function S(a,b){MJ(a,b,10);return a;}
function Hs(a,b){var c,d,e,f,g,h,i,j;c=a.M;d=1;if(AGt(b,Ed)){d=0;b=ARj(b);}a:{if(Kx(b,Bd(10))<0){if(d)Ca(a,c,c+1|0);else{Ca(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=GV(Eu(b),10);}else{g=1;h=Bd(1);i=Fv(Bd(-1),Bd(10));b:{while(true){j=BM(h,Bd(10));if(Kx(j,b)>0){j=h;break b;}g=g+1|0;if(Kx(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ca(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(E0(j,Ed))break a;e=a.B.data;c=f+1|0;e[f]=GV(Eu((Fv(b,j))),10);b=MH(b,j);j=Fv(j,Bd(10));f=c;}}}return a;}
function E8(a,b){AAy(a,a.M,b);return a;}
function Xl(a,b){BA(a,b);return a;}
function FT(a,b){Ly(a,a.M,!b?B(39):B(40));return a;}
function ACo(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.M;if(b<=e){if(d){f=e-c|0;a.M=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GT;U(i);J(i);}
function Va(a,b){var c,d,e,f;if(b>=0){c=a.M;if(b<c){c=c-1|0;a.M=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GT;U(f);J(f);}
function AI4(a,b,c,d,e){Mg(a,b,c,d,e);return a;}
function AGf(a,b,c,d){V_(a,b,c,d);return a;}
function XV(a){return a.M;}
function DH(a){return N(a);}
function AJa(a,b){IZ(a,b);}
function AJG(a,b,c){Wp(a,b,c);return a;}
function Ly(a,b,c){var d,e,f;if(b>=0&&b<=a.M){a:{if(c===null)c=B(29);else if(Fb(c))break a;IZ(a,a.M+I(c)|0);d=a.M-1|0;while(d>=b){a.B.data[d+I(c)|0]=a.B.data[d];d=d+(-1)|0;}a.M=a.M+I(c)|0;d=0;while(d<I(c)){e=a.B.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new GT;U(c);J(c);}
var Eg=F(GW);
var AAR=F(Eg);
function AS6(a){var b=new AAR();AE5(b,a);return b;}
function AE5(a,b){Bl(a,b);}
var Zj=F(Eg);
function AS7(a){var b=new Zj();AFq(b,a);return b;}
function AFq(a,b){Bl(a,b);}
var SE=F(0);
var Dj=F(0);
function AO2(b){var c;c=new Pk;c.u7=b;return c;}
function CX(b,c){if(b!==null)b.fo();return c;}
var N1=F(0);
function H1(){var a=this;C.call(a);a.k8=0;a.kj=0;}
var AS8=0;function FD(a){AS8=AS8-1|0;}
function FQ(a,b,c){IC(a,Yx(b,c,400,0));}
function PP(a,b){return J7(a,b,0.875);}
function J7(a,b,c){return Ef(a,b)+c|0;}
function Qj(){var a=this;H1.call(a);a.i6=null;a.bj=null;a.md=null;}
function Em(a){var b,c,d;b=a.bj;c=a.k8;d=a.kj;b.clearRect(0.0,0.0,c,d);}
function Q7(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bj;d="center";c.textAlign=d;break a;case 2:c=a.bj;d="right";c.textAlign=d;break a;default:break a;}d=a.bj;c="left";d.textAlign=c;}}
function Cu(a,b){IC(a,Jb(b.mG));}
function IC(a,b){var c;if(!(a.md==b?1:0)){c=a.bj;a.md=b;c.font=b;}}
function Yx(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Cf(a,b,c,d){var e,f,g;e=a.bj;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function AA5(a,b){var c,d;if(!b){c=a.bj;d="alphabetic";c.textBaseline=d;}else{d=a.bj;c="top";d.textBaseline=c;}}
function Ef(a,b){var c;c=$rt_ustr(b);return a.bj.measureText(c).width;}
function KI(a,b,c,d){var e,f;e=a.bj;f=$rt_ustr(FJ(ZB([35,Gp(b/16|0),Gp(b%16|0),Gp(c/16|0),Gp(c%16|0),Gp(d/16|0),Gp(d%16|0)])));e.fillStyle=f;}
var XA=F();
var AB6=F();
function D$(b,c){if(b===c)return 1;return b!==null?b.dR(c):c!==null?0:1;}
function BI(b){if(b!==null)return b;b=new Gn;Bl(b,B(31));J(b);}
var Bb=F(0);
function SO(){C.call(this);this.rK=null;}
var Bt=F(0);
var Z7=F();
var XF=F(0);
function I$(b,c,d){return ANL(B(41),E1(B(11),b),c,d);}
var ABE=F(0);
var ABz=F(0);
function KZ(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dc(b,f+g|0);Dn(c,0,d,f,g);return d;}
function Kg(b,c,d){Dn(b,c,d,0,d.data.length);return d;}
function P4(b,c,d){var e;if(c>0)Dn(b,0,d,0,c);e=d.data.length;if(c<e)Dn(b,c+1|0,d,c,e-c|0);return d;}
function Zn(b,c,d,e){var f;if(c>0)Dn(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dn(b,d,e,c,f-d|0);}return e;}
function FG(b){var c;c=new U3;c.ib=b;return c;}
function K3(){var a=this;C.call(a);a.ri=null;a.p6=null;a.pT=null;a.oa=0;}
function ANL(a,b,c,d){var e=new K3();AMG(e,a,b,c,d);return e;}
function AMG(a,b,c,d,e){a.ri=b;a.p6=c;a.pT=d;a.oa=e;}
var Yi=F();
function AHc(b,c){return {style:b,weight:c};}
var BU=F(0);
function SP(){C.call(this);this.sB=null;}
function ADd(a,b){var c,d,e;c=a.sB;d=0;while(d<b.length){e=b[d];(DW()).fonts.add(e);d=d+1|0;}c.tx=1;b=c.qa;if(b!==null)ZT(b);}
var SN=F();
function AOq(a,b){$rt_globals.console.info("font load error "+b);}
var KG=F();
var AS9=null;var AS$=null;function By(){if(AS9===null)AS9=AKu(AS_,0);return AS9;}
function KX(){if(AS$===null)AS$=AKu(ATa,0);return AS$;}
function ARd(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KJ(b)&&(e+f|0)<=KJ(d)){a:{b:{if(b!==d){g=HG(Cy(b));h=HG(Cy(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hr(g)&&!Hr(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.ft;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AAM(n.constructor,o)?1:0)){J0(b,c,d,e,j);b=new H$;U(b);J(b);}j=j+1|0;k=m;}J0(b,c,d,e,f);return;}if(!Hr(g))break a;if(Hr(h))break b;else break a;}b=new H$;U(b);J(b);}}J0(b,c,
d,e,f);return;}b=new H$;U(b);J(b);}b=new Bv;U(b);J(b);}d=new Gn;Bl(d,B(42));J(d);}
function Dn(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KJ(b)&&(e+f|0)<=KJ(d)){J0(b,c,d,e,f);return;}b=new Bv;U(b);J(b);}
function J0(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ft(){return Long_fromNumber(new Date().getTime());}
function AA$(){return ASN($rt_globals.performance.now()*1000000.0);}
var ABv=F();
var YX=F();
function Oe(b,c){var d,e,f;d=(DW()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DW()).getElementById($rt_ustr(b)).appendChild(d);}
function XM(){return (DW()).createElement("canvas");}
function ALd(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AC8=F();
var Mu=F();
function AKZ(a,b){var c;c=new Bm;Bl(c,$rt_str(b.message));J(c);}
var ABV=F();
function Fq(b){return $rt_str(b);}
var XQ=F();
function XI(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACj(b,c){var d,e,f,g;b=b.data;d=EX(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACM(b,c){var d,e,f,g;b=b.data;d=BH(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dc(b,c){var d,e,f,g;d=b.data;e=TH(HG(Cy(b)),c);f=X(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Yv(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));G(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function AA4(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));S(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function ANc(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));E8(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function APR(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));f=e[d];YE(c,c.M,f);d=d+1|0;}BY(c,B(45));return N(c);}
function G_(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BC;U(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function YT(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=ASQ;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=X(j,h+f|0);l=h+(2*f|0)|0;m=X(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.lA(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AAz(b,c){return SY(b,0,b.data.length,c);}
function SY(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BC;U(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var I9=F(0);
var Zb=F();
function APA(a,b){return a.uP(b);}
function AFd(a){return a.wd();}
var ZF=F();
var FC=F(0);
var RR=F();
var Bv=F(Bm);
var AAx=F();
function KJ(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(ATb());}return b.data.length;}
function TH(b,c){if(b===null){b=new Gn;U(b);J(b);}if(b===E($rt_voidcls())){b=new BC;U(b);J(b);}if(c>=0)return AOP(b.ft,c);b=new W1;U(b);J(b);}
function AOP(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gn=F(Bm);
var H$=F(Bm);
var C2=F();
var ATc=null;var ATd=null;var ATe=null;var ATf=null;var ATg=null;var ATh=null;var ATi=null;var ATj=null;var ATk=null;var ATl=null;function V0(b){var c,d;c=new Bw;d=BQ(1);d.data[0]=b;G3(c,d);return c;}
function Lh(b){return b>=65536&&b<=1114111?1:0;}
function CC(b){return (b&64512)!=55296?0:1;}
function CY(b){return (b&64512)!=56320?0:1;}
function Lm(b){return !CC(b)&&!CY(b)?0:1;}
function G2(b,c){return CC(b)&&CY(c)?1:0;}
function Ej(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function HC(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function H9(b){return (56320|b&1023)&65535;}
function EJ(b){return Gm(b)&65535;}
function Gm(b){if(ATf===null){if(ATi===null)ATi=AA3();ATf=Zq((ATi.value!==null?$rt_str(ATi.value):null));}return Rw(ATf,b);}
function Eo(b){return Gl(b)&65535;}
function Gl(b){if(ATe===null){if(ATj===null)ATj=ABP();ATe=Zq((ATj.value!==null?$rt_str(ATj.value):null));}return Rw(ATe,b);}
function Rw(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function TP(b,c){if(c>=2&&c<=36){b=N6(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function N6(b){var c,d,e,f,g,h,i,j,k,l;if(ATd===null){if(ATk===null)ATk=Zv();c=(ATk.value!==null?$rt_str(ATk.value):null);d=AMZ(Gh(c));e=I7(d);f=BH(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Mp(d)|0;j=j+Mp(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}ATd=f;}g=ATd.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GV(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Ge(b){var c;if(b<65536){c=BQ(1);c.data[0]=b&65535;return c;}return ZB([HC(b),H9(b)]);}
function Co(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Lm(b&65535))return 19;if(ATg===null){if(ATl===null)ATl=ACW();d=(ATl.value!==null?$rt_str(ATl.value):null);e=R(MD,16384);f=e.data;g=EX(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=JZ(L(d,l));if(m==64){l=l+1|0;m=JZ(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Be(c,JZ(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=JZ(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AG4(k,k+i|0,ACj(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AG4(k,k+i|0,ACj(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}ATg=Dc(e,j);}e=ATg.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qo)o=p+1|0;else{c=d.om;if(b>=c)return d.oB.data[b-c|0];c=p-1|0;}}return 0;}
function IT(b){a:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Ga(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Co(b)!=16?0:1;}
function OD(b){switch(Co(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function PX(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return OD(b);}return 1;}
function Xz(){ATc=E($rt_charcls());ATh=R(C2,128);}
function AA3(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ABP(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Zv(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ACW(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var LJ=F(0);
var Rv=F(0);
var D7=F(0);
var AB5=F(0);
function DW(){return $rt_globals.window.document;}
function M0(){var a=this;C.call(a);a.oo=null;a.op=null;a.oq=null;}
function AL2(a,b){var c,d,e;c=a.oo;d=a.op;e=a.oq;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=Jb(J2(c));c=d.rK;c.qa=b;if(c.tx)ZT(b);}}
var ZD=F();
function Fh(){return APB();}
function APB(){return Math.random();}
function X(b,c){if(b<c)c=b;return c;}
function V(b,c){if(b>c)c=b;return c;}
function LT(b){if(b<=0)b= -b|0;return b;}
var Or=F(0);
var P$=F(0);
var P1=F(0);
var Sz=F(0);
var Wa=F(0);
var TQ=F(0);
var NL=F(0);
var XE=F();
function AJB(a,b,c){a.Cx($rt_str(b),KD(c,"handleEvent"));}
function AJW(a,b,c){a.zN($rt_str(b),KD(c,"handleEvent"));}
function AEe(a,b){return a.uP(b);}
function AK4(a,b,c,d){a.x6($rt_str(b),KD(c,"handleEvent"),d?1:0);}
function AOI(a,b){return !!a.CC(b);}
function AFh(a){return a.wd();}
function ADz(a,b,c,d){a.Bb($rt_str(b),KD(c,"handleEvent"),d?1:0);}
var BC=F(Bm);
var W1=F(Bm);
var GT=F(Bv);
var YI=F();
function ZN(){return "ping";}
function DU(){C.call(this);this.iv=null;}
var ATm=null;var ATn=null;var ATo=null;var ATp=null;var ATq=null;var ATr=null;function JQ(){JQ=Bq(DU);AFo();}
function Ma(a){var b=new DU();AAm(b,a);return b;}
function AAm(a,b){JQ();a.iv=b;}
function J2(b){var c,d,e,f,g;JQ();if(b===null)return null;a:{c=b;if(ATn!==null){d=$rt_str(typeof c);if(!Bn(d,B(46))&&!Bn(d,B(47))){if(Bn(d,B(48))){b=ATo.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Ma(c);g=f;b=ATo;e=new $rt_globals.WeakRef(g);b.set(c,e);ATq.register(g,c);return f;}if(!Bn(d,B(49)))break a;else{b=ATp.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Ma(c);g=f;b=ATp;e=new $rt_globals.WeakRef(g);b.set(c,
e);ATr.register(g,c);return f;}}b=ATn.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Ma(c);b=ATn;e=new $rt_globals.WeakRef(f);b.set(c,e);return f;}}return Ma(c);}
function Jb(b){JQ();if(b!==null)return b.iv;return null;}
function AOw(a,b){if(b===a)return 1;if(b===null)return 0;if(!(b instanceof DU))return 0;return a.iv!==b.iv?0:1;}
function AFo(){ATm=new $rt_globals.WeakMap();ATn=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();ATo=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATp=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATq=ATo===null?null:new $rt_globals.FinalizationRegistry(Bk(new V3,"accept"));ATr=ATp===null?null:new $rt_globals.FinalizationRegistry(Bk(new V4,"accept"));}
var NK=F(0);
function RG(){var a=this;C.call(a);a.o_=null;a.qX=null;a.lH=null;a.mo=null;a.dh=null;a.sR=null;a.mA=null;a.kV=null;a.fG=null;a.hK=0;a.vv=0;a.qh=null;a.eT=null;a.pw=null;a.lk=null;a.rN=0;}
function ABm(a){a.dh.focus();}
function MM(a,b){var c;c=DW();b=$rt_ustr(b);c.title=b;}
function Y1(a){var b,c,d;b=new LK;c=a.fG;d=a.kV.ca;b.Y=c;b.o=d;b.bV=a;return b;}
function Sd(a){a.vv=$rt_globals.requestAnimationFrame(Bk(a.qX,"onAnimationFrame"));}
function FS(a){a.hK=1;}
function Sc(a,b,c){var d,e;a.kV.dc=B3(b,c);d=a.dh;e=b;d.width=e;d=a.dh;e=c;d.height=e;d=a.fG;Y(d.dn,b,c);e=d.bx;d=d.dn;b=d.b;c=d.a;e.viewport(0,0,b,c);a.eT.b_(a.fG.dn,J1(a));a.eT.bT();}
function Gg(a,b){var c,d,e;c=a.qh;d=a.dh;if(D$(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.qh=b;}
function IR(a){return $rt_globals.performance.now()/1000.0;}
function J1(a){return $rt_globals.window.devicePixelRatio;}
function U4(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ACu(b,1);else{c=new VM;d=$rt_globals.window.showDirectoryPicker();e=new VL;e.os=b;e.ot=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function K8(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ACu(b,0);else{c=new Wm;d=$rt_globals.window.showOpenFilePicker();e=new Wl;e.o9=b;e.o8=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function C0(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.rN+1|0;a.rN=e;f=a.lk;g=FO(e);f.hi=Lj(f,f.hi,g);g=TY(f,g);LL(g,b);LL(g,b);f.i5=f.i5+1|0;b=a.pw;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bw)f=$rt_ustr(c);else if(Vb(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(Vb(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(Vb(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof Ko)){b=new BC;c=HA(Cy(c));f
=new M;O(f);G(G(f,B(50)),c);Bl(b,N(f));J(b);}c=c;f=c.gg;if(f===null)f=c.eC;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function PQ(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new PG;e.mH=b;b=AC5(c);d.then(Bk(e,"f"),Bk(b,"f"));}
function Tm(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.o_;b=(Gh(b)).data;f=f.decode(b);b=e.writeText(f);e=new TF;e.rs=c;c=AC5(d);b.then(Bk(e,"f"),Bk(c,"f"));}
function WA(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AC5(b){var c;c=new L3;c.rD=b;return c;}
var Ci=F(0);
var QK=F();
function Z8(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Bn(B(51),c))d=(ANE(I(c)<=0?B(31):Dt(c,1))).cd(b);else{d=new Ms;D9(d,b);b=$rt_globals.fetch("test.wasm");e=new MB;b=b.then(Bk(e,"f"));e=new MA;b=b.then(Bk(e,"f"));e=new Mz;f=new My;b.then(Bk(e,"f"),Bk(f,"f"));}return d;}
var Bi=F(0);
var Z2=F();
var Zd=F();
var ZA=F();
var P5=F(0);
function UL(){C.call(this);this.n8=null;}
function AId(a,b){var c,d;c=b;b=a.n8;if(!(!b.eT.c0(c/1000.0)&&!b.hK)){d=b.fG.dn;if(Be(d.b,d.a)){b.hK=0;b.eT.bT();}}Sd(b);}
function UF(){C.call(this);this.tM=null;}
function C_(a){FS(a.tM);}
var Pb=F(0);
function UG(){C.call(this);this.qM=null;}
function AGx(a,b,c){var d,e,f,g;c=a.qM;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dh){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=J1(c);Sc(c,GY(f.width*g),GY(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Sc(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ACa=F();
function ANo(b,c){AMp(b,c,ADI());}
function ADI(){return {box:'device-pixel-content-box'};}
function AMp(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Ch=F(0);
function UD(){C.call(this);this.nI=null;}
function AL_(a,b){b=a.nI;b.eT.b_(b.fG.dn,J1(b));b.eT.bT();}
var Kl=F(0);
function Er(){C.call(this);this.jS=null;}
var Eb=F(0);
var Wz=F(0);
var Ml=F(0);
function Oc(){var a=this;Er.call(a);a.hi=null;a.i0=null;a.ws=null;a.i5=0;}
function TY(a,b){var c,d;c=a.hi;while(true){if(c===null)return null;d=IV(a.i0,b,c.ii);if(!d)break;c=d>=0?c.bR:c.bD;}return c;}
function Lj(a,b,c){var d,e;if(b===null){b=new IQ;d=null;b.ii=c;b.hN=d;b.eZ=1;b.e9=1;return b;}e=IV(a.i0,c,b.ii);if(!e)return b;if(e>=0)b.bR=Lj(a,b.bR,c);else b.bD=Lj(a,b.bD,c);D8(b);return I6(b);}
function Ju(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=IV(a.i0,c,b.ii);if(d<0)b.bD=Ju(a,b.bD,c);else if(d>0)b.bR=Ju(a,b.bR,c);else{e=b.bR;if(e===null)return b.bD;f=b.bD;g=R(IQ,e.eZ).data;h=0;while(true){b=e.bD;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bR;while(h>0){h=h+(-1)|0;j=g[h];j.bD=b;D8(j);b=I6(j);}e.bR=b;e.bD=f;D8(e);b=e;}D8(b);return I6(b);}
function UE(){C.call(this);this.sZ=null;}
function ANl(a,b){var c,d,e,f,g,h,i,j,k;c=a.sZ.lk;b=b.data;if(!(b===ZN()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BC;U(b);J(b);}if(b.length<1){b=new BC;U(b);J(b);}d=FO(b[0]);e=TY(c,d);if(e===null)c=null;else{c.hi=Ju(c,c.hi,d);c.i5=c.i5+1|0;c=e.hN;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=Fq(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new RM;ABR(e);e.gW=k;}else e=(k instanceof $rt_globals.File?1:0)?AAD(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AAD(k,null);g[h]=e;h=j;}c.l(f);}}
var ACw=F();
var AC3=F();
var Jc=F(0);
var V3=F();
function AMt(a,b){JQ();ATo.delete(b);}
var Zs=F();
var V4=F();
function AKh(a,b){JQ();ATp.delete(b);}
function OB(){var a=this;C.call(a);a.ca=null;a.gF=null;a.vO=null;a.dc=null;}
function Mi(){return (DW()).activeElement;}
function CP(a,b,c,d){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"));return VU(a,b,c,d);}
function AAS(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"),!!e);return VU(a,b,c,d);}
function VU(a,b,c,d){var e;e=new O9;e.uF=b;e.uH=c;e.uG=d;return e;}
function SS(a,b){var c;c=new T2;c.tF=b;return c;}
function Es(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gF.getBoundingClientRect();e=B3(GY((b.clientX-d.left)*c),GY((b.clientY-d.top)*c));f=new Z;g=a.dc;f.b=g.b;f.a=g.a;d=new LG;Tn(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.ui=f;return d;}
function WU(a,b,c){var d,e,f,g;d=new N5;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Tn(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jo=0;d.dk=e;d.bm=f;d.g3=c;d.qY=g;return d;}
function DB(a,b){b.stopPropagation();b.preventDefault();}
function Y$(a,b){var c;c=new Ww;c.oK=b;b.onpointerdown=Bk(c,"f");c=new Wy;c.nL=b;b.onpointerup=Bk(c,"f");}
function Kz(){var a=this;C.call(a);a.qf=null;a.cq=null;a.bx=null;a.r7=null;a.vb=0;a.wa=0;a.i8=null;a.wH=null;a.wp=null;a.vs=null;a.fK=null;a.g2=null;a.wx=null;a.ob=null;a.dn=null;a.tt=null;a.kM=0;a.jk=0;a.lt=0;a.ld=0;a.hB=0;a.lr=null;}
function FK(a,b,c){return GA(a,b,c,400,0);}
function CJ(a,b,c){return LS(a.qf,b,c);}
function Fg(a,b){var c,d,e,f,g;c=a.bx;d=b.bh;e=b.bt;f=b.be;g=b.bu;c.clearColor(d,e,f,g);a.bx.clear(16384);}
function CI(a,b){var c;if(b==a.jk)return b;if(!b)a.bx.disable(3042);else{a.bx.enable(3042);a.bx.blendFuncSeparate(770,771,1,1);}c=a.jk;a.jk=b;return c;}
function T9(a,b,c,d){var e,f,g;a.ld=1;a.hB=1;e=a.lr;f=d.b;g=d.a;e.qs=b;e.qt=c;e.qr=f;e.qp=g;To(a);}
function KY(a){a.ld=0;a.hB=0;To(a);}
function To(a){var b,c,d,e,f,g;b=a.lt;c=a.ld;if(b!=c){a.lt=c;if(!c)a.bx.disable(3089);else a.bx.enable(3089);}if(a.lt&&a.hB){a.hB=0;d=a.bx;e=a.lr;b=e.qs;c=a.dn.a-e.qt|0;f=e.qp;c=c-f|0;g=e.qr;d.scissor(b,c,g,f);}}
function Kh(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.ob;c=a.kM;d=b.f0.rz;e=b.dL;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dL;h=b.ms;e.bindBuffer(34962,h);i=b.f0.lL.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dL;m=k.gN;n=k.ey;o=b.f0.j6*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.ey|0;j=j+1|0;}a:{e=b.tI;if(e!==null){c=0;b.dL.bindBuffer(34962,e);i=b.f0.qd.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dL;j=e.gN;p=e.ey;m=e.oj;n=b.f0.oH;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.ey|0;g=g+1|0;}}}q=b.ta;if(q===null){c=b.q2;if(c>0)b.dL.drawArrays(4,0,c);}else{b.dL.bindBuffer(34963,q);k=b.dL;g=b.tk;k.drawElements(4,g,5123,0);}a.kM=d;}
function BB(a,b,c,d,e){Kt(a,a.i8);Ls(a.i8,a.bx,b,c,d,a.dn);d=a.i8;HL(a.bx,d.sY,e);Kh(a);}
function Ex(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Kt(a,a.fK);Ls(a.fK,a.bx,b,c,d,a.dn);Tj(a.fK,a.bx,f);d=a.fK;j=a.bx;f=f.e3;b=f.b;c=f.a;k=e.bh;l=b;m=k/l;k=e.bt;n=c;o=k/n;k=e.be/l;l=e.bu/n;d=d.sx;j.uniform4f(d,m,o,k,l);d=a.fK;e=a.bx;HL(e,d.oN,g);HL(e,d.m1,h);d=d.n1;e.uniform2f(d,i,0.0);Kh(a);}
function CR(a){var b,c;b=new IP;c=a.r7;b.e3=new Z;b.dA=c;b.er=c.c7.createTexture();ATs=ATs+1|0;return b;}
function M5(a,b){Wc(a.bx,b);}
function Kt(a,b){var c,d;if(b!==a.tt){c=a.bx;d=b.cc;c.useProgram(d);a.tt=b;}}
function ABD(){var a=this;Kz.call(a);a.vS=null;a.wq=null;}
function AQX(a,b){var c=new ABD();AIz(c,a,b);return c;}
function AIz(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Tr;a.dn=new Z;a.kM=0;a.lr=new VF;a.qf=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(52)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bx=b;a.cq=LS(d,4,4);g=ADq(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BQ(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new O_;X1();f=ATt;k.dL=b;k.f0=f;k.q2=h.length/f.j6|0;k.tk=
j.length;f=b.createBuffer();k.ms=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.tI=null;f=b.createBuffer();k.ta=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.ob=k;a.wa=JY(e,B(53));f=new Pa;f.c7=b;a.r7=f;l=b.getParameter(3379);a.vb=l;f=new M;O(f);S(G(f,B(54)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(DY,6);i=g.data;d=new Vd;KU(d,b,B(55),B(56),ATt);f=d.cc;d.sY=b.getUniformLocation(f,"uColor");a.i8=d;i[0]
=d;f=AQr(b,B(57));a.wH=f;i[1]=f;f=new PM;KU(f,b,B(55),B(58),ATt);a.wp=f;i[2]=f;f=ARN(b);a.vs=f;i[3]=f;f=AQY(b);a.fK=f;i[4]=f;f=ARX(b);a.g2=f;i[5]=f;a.wx=g;Wc(b,B(59));a.wq=new Tp;a.vS=c;}
function GA(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cq;g=Yx(b,c,d,e);IC(f,g);h=f.bj.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Ef(f,B(60));m=Ef(f,B(61));h=new Kp;n=J2(g);h.ly=b;h.uQ=c;o=c|0;if(o!==c){b=new M;O(b);E8(G(b,B(62)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.og=o;h.uZ=d;h.vr=e;h.db=i;h.dT=j;h.uN=l;h.ll=k;h.mG=n;h.p$=C$(i);h.wi=C$(h.dT);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.uW=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(63);}h.uE=b;return h;}
function Cp(){C.call(this);this.bb=null;}
function D9(a,b){a.bb=b;}
function APg(a,b){return 0;}
var Iw=F();
var ASQ=null;function IV(a,b,c){return b.i7(c);}
function AAa(){ASQ=new Iw;}
function YO(){var a=this;C.call(a);a.bZ=null;a.lI=null;a.bC=null;a.dE=null;a.ez=null;a.f3=null;a.gE=null;a.iX=null;a.jF=null;a.cI=null;}
function ARx(a){var b=new YO();ALD(b,a);return b;}
function ALD(a,b){a.bZ=CG(R(Ck,0));a.lI=CG(R(Ck,0));a.bC=CG(R(CB,0));a.dE=CG(R(DM,0));a.ez=CG(R(EP,0));a.f3=CG(R(Fa,0));a.gE=CG(R(FV,0));a.iX=CG(R(Bi,0));a.jF=CG(R(Bi,0));a.cI=b;}
function S2(a,b){var c,d,e,f;C_(a.cI);c=(Cm(!b.g3?a.lI:a.bZ)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bv(b);if(f)break;if(b.jo)break;e=e+1|0;}return f;}
function PN(a,b,c){var d,e,f;C_(a.cI);d=(Cm(a.f3)).data;e=d.length;f=0;while(f<e){if(d[f].ha(b,c))return 1;f=f+1|0;}return 0;}
function Vt(){C.call(this);this.mS=null;}
function ALz(a,b){var c;c=a.mS;if(S2(c.ca,WU(c,b,1)))DB(c,b);}
function Vu(){C.call(this);this.rr=null;}
function ALO(a,b){var c;c=a.rr;if(S2(c.ca,WU(c,b,0)))DB(c,b);}
function Vv(){C.call(this);this.nT=null;}
function AKf(a,b){var c,d,e,f,g,h;c=a.nT;if(c.dc!==null){d=Es(c,b);e=c.ca;C_(e.cI);f=(Cm(e.bC)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bX(d))break a;h=h+1|0;}}DB(c,b);}}
function Vw(){C.call(this);this.tG=null;}
function AJC(a,b){var c,d,e,f,g,h;c=a.tG;b.button;if(c.dc!==null){d=Es(c,b);c=c.ca;e=b.button;C_(c.cI);f=(Cm(c.bC)).data;g=f.length;h=0;a:{while(h<g){if(f[h].cZ(d,e))break a;h=h+1|0;}}}}
function Vx(){C.call(this);this.qD=null;}
function AJ1(a,b){var c,d,e,f,g,h,i;c=a.qD;b.button;if(c.dc!==null){d=Es(c,b);e=c.ca;f=b.button;C_(e.cI);g=(Cm(e.bC)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cG(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DB(c,b);}}
function Vy(){C.call(this);this.nh=null;}
function AMn(a,b){var c,d,e,f,g,h,i,j,k;c=a.nh;if(c.dc!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.ca;f=Es(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C_(e.cI);i=(Cm(e.dE)).data;j=i.length;k=0;b:{while(k<j){if(i[k].cY(f,d,h))break b;k=k+1|0;}}DB(c,b);}}
function Vz(){C.call(this);this.tU=null;}
function AHS(a,b){var c,d,e,f,g,h,i,j;c=a.tU;if(c.dc!==null){d=Es(c,b);e=c.ca;f=b.button;g=b.detail;C_(e.cI);h=(Cm(e.bC)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cm(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DB(c,b);}}
function VA(){C.call(this);this.qP=null;}
function API(a,b){var c,d,e,f,g,h,i;c=a.qP;if(c.dc!==null){d=Es(c,b);e=c.ca;C_(e.cI);f=(Cm(e.ez)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bv(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DB(c,b);}}
function VB(){C.call(this);this.ny=null;}
function AHb(a,b){var c,d,e;b=a.ny.ca;c=(Cm(b.jF)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C_(b.cI);}
function VC(){C.call(this);this.s7=null;}
function ANs(a,b){var c,d,e;b=a.s7.ca;c=(Cm(b.iX)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C_(b.cI);}
function WP(){C.call(this);this.sw=null;}
function APh(a,b){var c;c=a.sw;if(c.dc!==null)Es(c,b);}
function WQ(){C.call(this);this.rF=null;}
function AJQ(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.rF;if(Mi()===c.gF){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cm(c.ca.gE)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].f7();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.ca.cI;m=new MU;m.te=k;m.tf=l;g.getAsString(Bk(m,"accept"));DB(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(64)),k),B(65)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function WR(){C.call(this);this.l3=null;}
function AKj(a,b){var c;c=a.l3;if(Mi()===c.gF&&PN(c.ca,SS(c,b),0))DB(c,b);}
function WS(){C.call(this);this.tj=null;}
function AL4(a,b){var c;c=a.tj;if(Mi()===c.gF&&PN(c.ca,SS(c,b),1))DB(c,b);}
var Te=F(0);
var Tr=F();
function LS(a,b,c){var d,e,f;d=new Qj;AS8=AS8+1|0;d.k8=b;d.kj=c;e=(DW()).createElement("canvas");d.i6=e;f=b;e.width=f;e=d.i6;f=c;e.height=f;d.bj=d.i6.getContext("2d");return d;}
var Tp=F();
function AIU(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function LK(){var a=this;C.call(a);a.Y=null;a.o=null;a.bV=null;}
function ACn(){var a=this;C.call(a);a.gK=null;a.h3=null;a.gx=0;}
function CG(a){var b=new ACn();AHO(b,a);return b;}
function AHO(a,b){a.gK=b;}
function Ba(a,b){var c,d,e;c=a.gx;d=a.gK;if(c==d.data.length)a.gK=Dc(d,c+4|0);d=a.gK.data;e=a.gx;a.gx=e+1|0;d[e]=b;a.h3=null;}
function Cm(a){var b;b=a.h3;if(!(b!==null&&b.data.length==a.gx))a.h3=Dc(a.gK,a.gx);return a.h3;}
var Ic=F(0);
var Ck=F(0);
var CB=F(0);
function AIY(a,b){return 0;}
function AMm(a,b,c,d){return 0;}
function AE_(a,b,c){return 0;}
function ADZ(a,b,c){return 0;}
var DM=F(0);
var EP=F(0);
var Fa=F(0);
var HE=F(0);
var FV=F(0);
function Pk(){C.call(this);this.u7=null;}
function Z(){var a=this;C.call(a);a.b=0;a.a=0;}
function B3(a,b){var c=new Z();YH(c,a,b);return c;}
function YH(a,b,c){a.b=b;a.a=c;}
function C1(a,b){a.b=b.b;a.a=b.a;}
function Y(a,b,c){a.b=b;a.a=c;}
function W9(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);S(G(S(G(d,B(66)),b),B(67)),c);return N(d);}
function Ks(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function VF(){var a=this;C.call(a);a.qs=0;a.qt=0;a.qr=0;a.qp=0;}
var ABC=F();
var X4=F(0);
function Pa(){C.call(this);this.c7=null;}
function KS(){var a=this;C.call(a);a.cc=null;a.wk=null;}
function AAC(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(68):B(69);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bu(By(),f);b=new Bm;Bl(b,f);J(b);}
function DY(){var a=this;KS.call(a);a.nx=null;a.oM=null;a.kZ=null;}
function ATu(a,b,c,d){var e=new DY();KU(e,a,b,c,d);return e;}
function KU(a,b,c,d,e){var f,g,h,i,j,k;a.wk=e;f=AAC(b,35633,c);d=AAC(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.cc=g;h=e.rf.data;i=h.length;j=0;while(j<i){c=h[j];d=a.cc;k=c.gN;c=c.oY;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.cc;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Wc(b,B(70));a.kZ=new Z;c=a.cc;a.nx=b.getUniformLocation(c,"uResolution");c=a.cc;a.oM=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bm;c=new M;O(c);G(G(c,B(71)),d);Bl(b,N(c));J(b);}
function YQ(a,b,c){var d,e,f;if(!Ks(a.kZ,c)){C1(a.kZ,c);d=a.nx;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function Ls(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.oM;b.uniform4f(e,i,l,h,j);YQ(a,b,f);}
function Vd(){DY.call(this);this.sY=null;}
function Eq(){DY.call(this);this.qx=null;}
function AQr(a,b){var c=new Eq();SW(c,a,b);return c;}
function ATv(a,b,c){var d=new Eq();S3(d,a,b,c);return d;}
function SW(a,b,c){S3(a,b,B(55),c);}
function S3(a,b,c,d){X1();KU(a,b,c,d,ATt);c=a.cc;a.qx=b.getUniformLocation(c,"sDiffuse");}
function Tj(a,b,c){var d;d=a.qx;b.uniform1i(d,0);b.activeTexture(33984);c=c.er;b.bindTexture(3553,c);}
var PM=F(DY);
function ABj(){Eq.call(this);this.vf=null;}
function ARN(a){var b=new ABj();AHh(b,a);return b;}
function AHh(a,b){var c;SW(a,b,B(72));c=a.cc;a.vf=b.getUniformLocation(c,"uContrast");}
function AAU(){var a=this;Eq.call(a);a.sx=null;a.oN=null;a.m1=null;a.n1=null;}
function AQY(a){var b=new AAU();AMi(b,a);return b;}
function AMi(a,b){var c;S3(a,b,B(73),B(74));c=a.cc;a.sx=b.getUniformLocation(c,"uTexTransform");c=a.cc;a.oN=b.getUniformLocation(c,"uColor");c=a.cc;a.m1=b.getUniformLocation(c,"uBgColor");c=a.cc;a.n1=b.getUniformLocation(c,"uContrast");}
function Yk(){var a=this;Eq.call(a);a.tJ=null;a.tH=null;a.pj=null;}
function ARX(a){var b=new Yk();AGN(b,a);return b;}
function AGN(a,b){var c,d;SW(a,b,B(75));c=a.cc;a.tJ=b.getUniformLocation(c,"uColorB");d=a.cc;a.tH=b.getUniformLocation(d,"uColorF");d=a.cc;a.pj=b.getUniformLocation(d,"uContrast");}
var QT=F(0);
var AC6=F(0);
function HL(b,c,d){var e,f,g,h;e=d.bh;f=d.bt;g=d.be;h=d.bu;b.uniform4f(c,e,f,g,h);}
function Wc(b,c){var d,e;d=b.getError();if(d){b=By();e=new M;O(e);S(G(e,c),d);Bu(b,N(e));}}
function O9(){var a=this;C.call(a);a.uF=null;a.uH=null;a.uG=null;}
function O_(){var a=this;C.call(a);a.dL=null;a.f0=null;a.ms=null;a.tI=null;a.ta=null;a.q2=0;a.tk=0;}
function Cq(){var a=this;C.call(a);a.uA=null;a.cH=0;}
function DD(a,b,c){a.uA=b;a.cH=c;}
function Gv(){var a=this;Cq.call(a);a.rf=null;a.lL=null;a.qd=null;a.j6=0;a.oH=0;a.rz=0;}
var ATt=null;var ATw=null;function X1(){X1=Bq(Gv);AIq();}
function AIq(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gv;c=R(DL,2);d=c.data;AOC();d[0]=ATx;d[1]=ATy;X1();DD(b,B(76),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];XD();switch(ATz.data[l.lg.cH]){case 1:f=f+l.ey|0;h=h+1|0;break a;case 2:e=e+l.ey|0;g=g+1|0;break a;default:}}i=i|1<<l.gN;k=k+1|0;}b.rf=c;b.j6=e;b.oH=f;b.rz=i;c=R(DL,g);m=c.data;b.lL=c;c=R(DL,h);n=c.data;b.qd=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];XD();switch(ATz.data[l.lg.cH]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}ATt=b;c=R(Gv,1);c.data[0]=b;ATw=c;}
var Lr=F(0);
var Sf=F(0);
var TG=F(0);
var Gc=F();
function IN(){Gc.call(this);this.t9=null;}
function Zh(){var a=this;IN.call(a);a.v$=0;a.kf=0;a.hY=null;a.jK=null;a.r1=null;}
function AKu(a,b){var c=new Zh();AOl(c,a,b);return c;}
function AOl(a,b,c){a.t9=b;b=new M;O(b);a.hY=b;a.jK=BQ(32);a.v$=c;Y7();a.r1=ATA;}
function Su(a,b,c,d){var e,$$je;e=a.t9;if(e===null)a.kf=1;if(!(a.kf?0:1))return;a:{try{e.jA(b,c,d);break a;}catch($$e){$$je=D6($$e);if($$je instanceof HW){}else{throw $$e;}}a.kf=1;}}
function Nb(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=Z0(b,c,d-c|0);e=EX(V(16,X(e.length,1024)));g=ZM(e,0,e.data.length);h=a.r1;i=new Oy;b=EX(1);j=b.data;j[0]=63;GR();k=ATB;i.k3=k;i.kk=k;c=j.length;if(c&&c>=i.lM){i.uv=h;i.oW=b.e8();i.v3=2.0;i.lM=4.0;i.oh=BQ(512);i.ne=EX(512);k=ATC;if(k===null){i=new BC;Bl(i,B(77));J(i);}i.k3=k;i.kk=k;a:while(true){if(i.hT==3){f=new DO;U(f);J(f);}i.hT=2;b:{while(true){try{k=XR(i,f,g);}catch($$e){$$je=D6($$e);if($$je instanceof Bm){f=$$je;break a;}else{throw $$e;}}if(HK(k))
{d=B4(f);if(d<=0)break b;k=DP(d);}else if(GO(k))break;h=!Ld(k)?i.k3:i.kk;c:{if(h!==ATC){if(h===ATD)break c;else break b;}d=B4(g);b=i.oW;l=b.data.length;if(d<l){k=ATE;break b;}VX(g,b,0,l);}Ev(f,f.R+Jw(k)|0);}}l=GO(k);Su(a,e,0,g.R);M_(g);if(!l){while(true){d=i.hT;if(d!=2&&d!=4){f=new DO;U(f);J(f);}f=ATF;if(f===f)i.hT=3;l=GO(f);Su(a,e,0,g.R);M_(g);if(!l)break;}return;}}J(AF1(f));}i=new BC;Bl(i,B(78));J(i);}
function Bu(a,b){var c,d,e,f,g,h,i,j;BA(BY(a.hY,b),10);b=a.hY;c=b.M;d=a.jK;if(c>d.data.length)d=BQ(c);e=0;f=0;if(e>c){b=new Bv;Bl(b,B(79));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Nb(a,d,0,c);a.hY.M=0;}
function F0(){Gc.call(this);this.vT=null;}
function WX(a){a.vT=EX(1);}
var KF=F(F0);
var AS_=null;function AIM(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AA9(){var b;b=new KF;WX(b);AS_=b;}
function DL(){var a=this;Cq.call(a);a.oY=null;a.lg=null;a.ey=0;a.oj=0;a.gN=0;}
var ATx=null;var ATy=null;var ATG=null;function AOC(){AOC=Bq(DL);AHA();}
function AQ$(a,b,c,d,e,f,g){var h=new DL();U7(h,a,b,c,d,e,f,g);return h;}
function U7(a,b,c,d,e,f,g,h){AOC();DD(a,b,c);a.oY=d;a.lg=e;a.ey=f;a.oj=g;a.gN=h;}
function AHA(){var b;b=new DL;AAo();U7(b,B(80),0,B(81),ATH,2,0,0);ATx=b;b=AQ$(B(82),1,B(83),ATH,2,0,1);ATy=b;ATG=H(DL,[ATx,b]);}
function ID(){var a=this;C.call(a);a.uh=null;a.vi=null;}
function ABp(b){var c,d;if(Fb(b))J(Za(b));if(!ABr(L(b,0)))J(Za(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ABr(d))break a;else J(Za(b));}}c=c+1|0;}}
function ABr(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Lv=F(ID);
var ATA=null;function Y7(){Y7=Bq(Lv);AGJ();}
function ABG(a){var b,c;b=new Sv;b.ev=B(84);GR();c=ATB;b.gr=c;b.lb=c;b.u$=a;b.lV=0.3333333432674408;b.vt=0.5;b.nt=EX(512);b.rq=BQ(512);return b;}
function AGJ(){var b,c,d,e,f;b=new Lv;Y7();c=R(Bw,0);d=c.data;ABp(B(85));e=d.length;f=0;while(f<e){ABp(d[f]);f=f+1|0;}b.uh=B(85);b.vi=c.e8();ATA=b;}
var JI=F();
var ATI=null;var ATz=null;function XD(){XD=Bq(JI);ALo();}
function ALo(){var b,c;AAo();b=BH((ATJ.e8()).data.length);c=b.data;ATz=b;c[ATK.cH]=1;c[ATH.cH]=2;AAq();c=BH((ATL.e8()).data.length);b=c.data;ATI=c;b[ATM.cH]=1;b[ATN.cH]=2;}
function Oi(){var a=this;C.call(a);a.eY=null;a.lC=null;a.jm=null;a.rJ=null;a.oG=null;a.oR=null;}
function Zk(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.eY,b,c));}
function Mb(a,b){var c,d,e,f,g,h,i,$$je;c=new Bw;d=b;while(a.lC[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.eY,b,d));f=e.data;EB();d=f.length;Y7();g=ATA;h=ZM(e,0,d);a:{try{i=ABG(g);GR();g=Ya(AAG(ACf(i,ATC),ATC),h);break a;}catch($$e){$$je=D6($$e);if($$je instanceof FB){g=$$je;}else{throw $$e;}}h=new V7;h.iz=1;h.i2=1;h.g1=B(86);h.kl=g;J(h);}if(!g.R&&g.c9==g.lz)c.bQ=g.gM;else{f=BQ(B4(g));e=f.data;c.bQ=f;ML(g,f,0,e.length);}return c;}
function Mk(a,b){var c,d,e;c=new Bw;d=b>>>1|0;e=d;while(a.jm[e]){e=e+1|0;}d=e-d|0;G3(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.eY,b,d)));return c;}
var Gz=F(Cq);
var ATK=null;var ATH=null;var ATJ=null;function AAo(){AAo=Bq(Gz);AGe();}
function AGC(a,b){var c=new Gz();ABH(c,a,b);return c;}
function ABH(a,b,c){AAo();DD(a,b,c);}
function AGe(){var b;ATK=AGC(B(87),0);b=AGC(B(88),1);ATH=b;ATJ=H(Gz,[ATK,b]);}
var F5=F(Cq);
var ATM=null;var ATN=null;var ATL=null;function AAq(){AAq=Bq(F5);AGR();}
function APN(a,b){var c=new F5();X9(c,a,b);return c;}
function X9(a,b,c){AAq();DD(a,b,c);}
function AGR(){var b;ATM=APN(B(89),0);b=APN(B(90),1);ATN=b;ATL=H(F5,[ATM,b]);}
var UM=F(DR);
function ABu(){BC.call(this);this.uz=null;}
function Za(a){var b=new ABu();ANV(b,a);return b;}
function ANV(a,b){U(a);a.uz=b;}
var Lu=F(0);
function Ww(){C.call(this);this.oK=null;}
function AM1(a,b){a.oK.setPointerCapture(b.pointerId);}
function Wy(){C.call(this);this.nL=null;}
function AEO(a,b){a.nL.releasePointerCapture(b.pointerId);}
function GI(){var a=this;C.call(a);a.lz=0;a.R=0;a.c9=0;a.gV=0;}
function U5(a,b){a.gV=(-1);a.lz=b;a.c9=b;}
function Ev(a,b){var c,d,e;if(b>=0&&b<=a.c9){a.R=b;if(b<a.gV)a.gV=0;return a;}c=new BC;d=a.c9;e=new M;O(e);BA(S(G(S(G(e,B(91)),b),B(92)),d),93);Bl(c,N(e));J(c);}
function B4(a){return a.c9-a.R|0;}
function DC(a){return a.R>=a.c9?0:1;}
var Rb=F(0);
var Kq=F(GI);
function ACJ(b){var c,d;if(b>=0)return ALS(0,b,BQ(b),0,b,0);c=new BC;d=new M;O(d);S(G(d,B(93)),b);Bl(c,N(d));J(c);}
function Z0(b,c,d){return ALS(0,b.data.length,b,c,c+d|0,0);}
function ML(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bv;i=new M;O(i);S(G(S(G(i,B(94)),g),B(95)),f);Bl(h,N(i));J(h);}if(B4(a)<d){j=new K7;U(j);J(j);}if(d<0){j=new Bv;k=new M;O(k);G(S(G(k,B(96)),d),B(97));Bl(j,N(k));J(j);}g=a.R;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.gM.data[m+a.ln|0];l=l+1|0;c=n;m=o;}a.R=g+d|0;return a;}}b=b.data;j=new Bv;d=b.length;k=new M;O(k);BA(S(G(S(G(k,B(98)),c),B(92)),d),41);Bl(j,N(k));J(j);}
function Js(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lD){b=new Io;U(b);J(b);}e=d-c|0;if(B4(a)<e){b=new Ht;U(b);J(b);}if(c>I(b)){f=new Bv;d=I(b);b=new M;O(b);BA(S(G(S(G(b,B(99)),c),B(92)),d),41);Bl(f,N(b));J(f);}if(d>I(b)){f=new Bv;c=I(b);b=new M;O(b);S(G(S(G(b,B(100)),d),B(101)),c);Bl(f,N(b));J(f);}if(c>d){b=new Bv;f=new M;O(f);S(G(S(G(f,B(99)),c),B(102)),d);Bl(b,N(f));J(b);}g=a.R;while(c<d){h=g+1|0;i=c+1|0;Rh(a,g,L(b,c));g=h;c=i;}a.R=a.R+e|0;return a;}
function I_(){var a=this;GI.call(a);a.ke=0;a.kS=null;a.vH=null;}
function ZM(b,c,d){var e,f,g;e=b.data;f=new VW;g=e.length;d=c+d|0;U5(f,g);AIw();f.vH=ATO;f.ke=0;f.kS=b;f.R=c;f.c9=d;f.vK=0;f.mn=0;return f;}
function VX(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mn){e=new Io;U(e);J(e);}if(B4(a)<d){e=new Ht;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bv;j=new M;O(j);S(G(S(G(j,B(103)),h),B(95)),g);Bl(i,N(j));J(i);}if(d<0){e=new Bv;i=new M;O(i);G(S(G(i,B(96)),d),B(97));Bl(e,N(i));J(e);}h=a.R;k=h+a.ke|0;l=0;while(l<d){b=a.kS.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.R=h+d|0;return a;}}b=b.data;e=new Bv;d=b.length;i=new M;O(i);BA(S(G(S(G(i,B(98)),c),B(92)),d),41);Bl(e,N(i));J(e);}
function M_(a){a.R=0;a.c9=a.lz;a.gV=(-1);return a;}
function Hk(){C.call(this);this.wB=null;}
var ATD=null;var ATC=null;var ATB=null;function GR(){GR=Bq(Hk);AJT();}
function ACp(a){var b=new Hk();ABl(b,a);return b;}
function ABl(a,b){GR();a.wB=b;}
function AJT(){ATD=ACp(B(104));ATC=ACp(B(105));ATB=ACp(B(106));}
var Ms=F(Cp);
function AJM(a){}
function AIg(a,b,c){}
var ACN=F();
function ANE(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(107)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(KB(b)){case -1570047148:if(!Bn(b,B(108)))break a;d=15;break a;case -1519338717:if(!Bn(b,B(109)))break a;d=1;break a;case -1509980539:if(!Bn(b,B(110)))break a;d=11;break a;case -1383096302:if(!Bn(b,B(111)))break a;d=5;break a;case -1073555521:if(!Bn(b,B(112)))break a;d=12;break a;case -811765794:if(!Bn(b,B(113)))break a;d=4;break a;case -785237654:if(!Bn(b,B(114)))break a;d=9;break a;case -631889171:if
(!Bn(b,B(115)))break a;d=7;break a;case -439438829:if(!Bn(b,B(116)))break a;d=16;break a;case 3343967:if(!Bn(b,B(117)))break a;d=8;break a;case 3556498:if(!Bn(b,B(118)))break a;d=3;break a;case 544901384:if(!Bn(b,B(119)))break a;d=2;break a;case 1030621992:if(!Bn(b,B(120)))break a;d=14;break a;case 1465713255:if(!Bn(b,B(121)))break a;d=6;break a;case 1554501643:if(!Bn(b,B(122)))break a;d=13;break a;case 1609169232:if(!Bn(b,B(123)))break a;d=10;break a;default:}}b:{switch(d){case 1:break;case 2:case 3:b=new R7;break b;case 4:b
=new R6;break b;case 5:b=new R5;break b;case 6:b=new R4;break b;case 7:case 8:b=new R3;break b;case 9:b=new R2;break b;case 10:b=new R1;break b;case 11:b=new R0;break b;case 12:b=new RZ;break b;case 13:b=new PL;break b;case 14:b=new PJ;break b;case 15:b=new PK;break b;case 16:b=new PH;break b;default:b=new PI;break b;}b=new R8;}return b;}
var ZZ=F();
var Jm=F(Kq);
function ZE(){var a=this;Jm.call(a);a.lD=0;a.ln=0;a.gM=null;}
function ALS(a,b,c,d,e,f){var g=new ZE();APV(g,a,b,c,d,e,f);return g;}
function APV(a,b,c,d,e,f,g){U5(a,c);a.R=e;a.c9=f;a.ln=b;a.lD=g;a.gM=d;}
function Rh(a,b,c){a.gM.data[b+a.ln|0]=c;}
function Kd(){var a=this;C.call(a);a.uv=null;a.oW=null;a.v3=0.0;a.lM=0.0;a.k3=null;a.kk=null;a.hT=0;}
function K1(){var a=this;C.call(a);a.f2=0;a.hv=0;}
var ATF=null;var ATE=null;function XY(a,b){var c=new K1();Yr(c,a,b);return c;}
function Yr(a,b,c){a.f2=b;a.hv=c;}
function HK(a){return a.f2?0:1;}
function GO(a){return a.f2!=1?0:1;}
function J4(a){return !PC(a)&&!Ld(a)?0:1;}
function PC(a){return a.f2!=2?0:1;}
function Ld(a){return a.f2!=3?0:1;}
function Jw(a){var b;if(J4(a))return a.hv;b=new E6;U(b);J(b);}
function DP(b){return XY(2,b);}
function Ur(a){var b,c;switch(a.f2){case 0:b=new Pc;U(b);J(b);case 1:b=new Wb;U(b);J(b);case 2:b=new Uh;c=a.hv;U(b);b.wQ=c;J(b);case 3:b=new O2;c=a.hv;U(b);b.wM=c;J(b);default:}}
function YS(){ATF=XY(0,0);ATE=XY(1,0);}
var XN=F();
var KE=F(0);
var MB=F();
function AGZ(a,b){return b.arrayBuffer();}
var MA=F();
function AK3(a,b){var c,d;c=new Of;d=new Od;return $rt_globals.WebAssembly.instantiate(b,AIT(Bk(c,"f"),Bk(d,"f")));}
var Mz=F();
function ALJ(a,b){AEI(b);}
var My=F();
function AFp(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var R8=F();
function ALh(a,b){return ASf(b);}
var R7=F();
function AEp(a,b){return AQu(b);}
var R6=F();
function AHZ(a,b){var c,d,e;c=new U_;Hp(c,b);d=new T0;d.lh=new Z;d.jD=new Z;c.qG=d;c.dd=XU();c.cu=XU();c.dI=L6(c.Q);Ba(c.Q.dv,c);d=b.o.bZ;e=new R$;e.sz=c;Ba(d,e);Ba(b.o.bC,c);b=b.o.ez;d=new Sb;d.rl=c;Ba(b,d);RI(c.cu);b=Fl(B(124),25.0);c.rp=b;d=c.dI;d.eW=b;Iq(d,Fj());BF(c.fW,CF(43));b=Fj();HH(c.dd,b);HH(c.cu,b);b=c.dd;b.iP=new R_;d=c.cu;d.iP=new R9;d.jd=new V8;d.sg=new V9;Kc(b,(MS(0)).ib);Kc(c.cu,(MS(0)).ib);return c;}
var R5=F();
function AHV(a,b){var c,d,e;c=new Wu;Hp(c,b);c.k0=Fl(B(125),15.0);d=ACR();c.ea=d;Ba(c.Q.dv,d);Ba(c.Q.dv,c);BF(c.fW,CF(43));d=L6(c.Q);c.e$=d;Iq(d,Fj());c.e$.eW=Fl(B(124),25.0);d=b.o.bZ;e=new W5;e.uC=c;Ba(d,e);d=b.o.ez;e=new W6;e.sy=c;Ba(d,e);Ba(b.o.bC,XT(c.e$));Ba(b.o.bC,c.ea);b=b.o.dE;d=c.ea;BI(d);e=new W8;e.pg=d;Ba(b,e);return c;}
var R4=F();
function AIy(a,b){var c,d,e;c=new W0;Hp(c,b);c.fe=Cl();c.eE=Cl();c.n$=Br(B(126));c.hO=ANS();c.fC=0;d=c.Q.dv;e=new S4;e.l6=c;Ba(d,e);Ba(b.o.bC,c);d=b.o.bZ;e=new S5;e.pr=c;Ba(d,e);b=FK(b.Y,B(124),35);c.iO=b;c.hy=ACy(En(b));BF(c.fW,Br(B(127)));return c;}
var R3=F();
function AEw(a,b){var c,d,e,f;c=new On;D9(c,b);c.fx=AJ9();c.dC=0;c.ra=500;c.tp=W3(0,0,0,255);c.li=20;c.tD=20;c.n3=ABS();d=b.o.bC;e=new Vp;e.h$=c;f=new WZ;f.qW=e;e.qk=f;Ba(d,e);d=b.o.dE;e=new RL;e.nB=c;Ba(d,e);c.dD=b.Y;c.sc=TD(b.bV);SB(c.fx,FK(c.dD,B(124),c.tD),c.li,c.dD);c.gq=G5();return c;}
var R2=F();
function AF_(a,b){var c,d;c=new PT;Gb(c,b);b=b.o.bZ;d=new Pd;d.ts=c;Ba(b,d);return c;}
var R1=F();
function ALy(a,b){return ARS(b);}
var R0=F();
function AO1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new VQ;Gb(c,b);c.ds=E3(0,0,300,300);c.es=RC(0,0,3,3);d=b.Y;b=b.o.bC;e=new SJ;e.ky=c;Ba(b,e);b=Y5(d);c.oU=b;F9(c.ds,b);GK(c.ds);b=c.ds.bW;Do();BF(b,ATP);BF(c.ds.bM,Cv(204,120,50));AAq();e=ATN;f=EX((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CR(d);XD();switch(ATI.data[e.cH]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Eg;U(b);J(b);}b:
{Mv(m,5,5,h);b=m.dA.c7;switch(ATI.data[e.cH]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Eg;U(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.jT=m;Y(c.es.x,Cb(m),C3(c.jT));BF(c.es.bW,c.k6);return c;}
var RZ=F();
function APT(a,b){var c,d,e;c=new Rc;Gb(c,b);c.fU=E3(0,0,300,300);c.jt=new Z;c.hP=new Z;c.g$=new Z;d=b.Y;b=b.o.bC;e=new UV;e.iS=c;Ba(b,e);b=Y5(d);c.qR=b;F9(c.fU,b);GK(c.fU);b=c.fU.bW;Do();BF(b,ATP);BF(c.fU.bM,Cv(204,120,50));return c;}
var PL=F();
function AJo(a,b){var c,d,e,f;c=new NW;D9(c,b);c.vx=20;c.w2=11;c.vd=220;c.ix=new Z;c.vV=5000;c.gd=1;c.e0=H(If,[CF(0),CF(255)]);c.dK=b.Y;d=b.o.bC;e=new Tb;e.iK=c;f=new ON;f.mO=e;e.o6=f;Ba(d,e);b=b.o.dE;d=new M$;d.sW=c;Ba(b,d);b=CJ(c.dK,200,220);c.jl=b;FQ(b,B(124),20.0);b=CJ(c.dK,200,20);c.eJ=b;FQ(b,B(124),20.0);c.hj=G5();return c;}
var PJ=F();
function ADo(a,b){var c,d,e;c=new H0;Gb(c,b);Ba(b.o.bC,c);d=b.o.bZ;e=new Rn;e.qZ=c;Ba(d,e);Ba(b.o.f3,new Rm);d=b.o.f3;e=new Rk;e.oL=c;Ba(d,e);Ba(b.o.gE,new Rj);d=b.o.gE;e=new Rl;e.mT=c;Ba(d,e);b=!WA(b.bV)?B(128):B(129);d=new M;O(d);G(G(d,B(130)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var PK=F();
function AGV(a,b){var c,d,e,f,g,h,i,j;c=new Ph;D9(c,b);c.m3=CF(20);c.eF=E3(0,0,300,300);d=b.o.bZ;e=new QU;e.wC=c;Ba(d,e);b=b.Y;d=FK(b,B(10),88);Cu(b.cq,d);f=Ef(b.cq,B(131));g=Ef(b.cq,B(132));if(f>g)g=f;h=C$(g);i=Jo(d,1.1799999475479126);j=By();e=new M;O(e);S(G(S(G(e,B(133)),h),B(134)),i);Bu(j,N(e));e=CJ(b,h,i*2|0);c.hz=e;Cu(e,d);Cf(c.hz,B(131),0.0,d.db);Cf(c.hz,B(132),0.0,i+d.db);b=CR(b);c.kX=b;CL(b,c.hz);F9(c.eF,c.kX);GK(c.eF);b=c.eF.bW;Do();BF(b,ATP);BF(c.eF.bM,ATQ);return c;}
var PH=F();
function AJH(a,b){var c,d,e,f;c=new Vq;Hp(c,b);c.sb=Fl(B(125),20.0);d=ACR();c.dF=d;Ba(c.Q.dv,d);Ba(c.Q.dv,c);BF(c.fW,CF(43));d=L6(c.Q);c.ff=d;Iq(d,Fj());c.ff.eW=Fl(B(124),25.0);d=b.o.bZ;e=new Pz;e.wz=c;Ba(d,e);d=b.o.ez;e=new PA;e.pv=c;Ba(d,e);Ba(b.o.bC,XT(c.ff));Ba(b.o.bC,c.dF);d=b.o.bC;e=c.Q.cp;f=new Qp;f.lS=e;Ba(d,f);b=b.o.dE;d=c.dF;BI(d);e=new PB;e.q0=d;Ba(b,e);return c;}
var PI=F();
function ANh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=new Qb;W_(c,b);d=c.cD;e=new KW;f=R(Bw,8);g=I(B(135));h=0;i=0;j=g+1|0;while(true){k=Gq(B(135),10,i);l=k>=0?B8(B(135),i,k):Dt(B(135),i);m=f.data;n=h+1|0;i=m.length;if(i==h)f=Dc(f,i*2|0);f.data[h]=l;f=f;i=k<0?j:k+1|0;if(i>g)break;h=n;}if(f.data.length!=n)f=Dc(f,n);o=f.data;e.fA=null;e.ir=B(136);e.ph=null;p=new Jx;i=o.length;if(!i)m=L7(B(31));else{m=R(Cw,i);f=m.data;g=0;while(g<i){b=new Cw;q=R(B5,1);q.data[0]=QW(o[g]);HF(b,q);f[g]=b;g=g+1|0;}}f=m.data;p.dM
=HD();p.d7=HD();p.eX=Cl();if(!f.length){b=new BC;AA6(b);J(b);}p.D=m;p.fg=0;p.cj=0;p.cQ=S8(p);e.g=p;d.uB=null;Ua(d);b=d.e;d.e=e;d.ep=Ft();p=Z6(Df(d.e));if(p!==null){l=Cg(d);r=new T5;r.rj=d;f=R(C,1);f.data[0]=F8(d.e.g);C0(l,r,p,f);}f=(Cm(d.dW.l4)).data;s=f.length;i=0;while(i<s){f[i].lE(b,e);i=i+1|0;}return c;}
function GQ(){var a=this;C.call(a);a.bw=0;a.cg=0;a.c1=0;a.ku=0;}
function ATR(a,b,c,d){var e=new GQ();Tn(e,a,b,c,d);return e;}
function Tn(a,b,c,d,e){a.bw=d;a.cg=b;a.c1=c;a.ku=e;}
function N5(){var a=this;GQ.call(a);a.dk=null;a.bm=0;a.g3=0;a.qY=0;a.jo=0;}
function ACC(b){var c,d,e;c=b.cg;d=c&&!b.bw&&!b.c1&&!b.ku?1:0;a:{if(d){d=b.bm;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bw&&!c&&!b.c1&&!b.ku?1:0;d=d&&b.bm==46?1:0;}b:{if(!d){e=b.bm;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jo=1;}return 0;}
var ABM=F();
function Vg(b,c){return (b+(c/2|0)|0)/c|0;}
function OS(b,c,d){if(b<(2147483647/c|0))return Vg(Be(b,c),d);return 0.5+c*b/d|0;}
function H5(b,c){return ((b+c|0)-1|0)/c|0;}
function GY(b){return b+0.5|0;}
function C$(b){return b+0.5|0;}
function EO(b,c,d){return V(b,X(c,d));}
function LG(){var a=this;GQ.call(a);a.j=null;a.ui=null;}
var Tg=F(0);
function MU(){var a=this;C.call(a);a.te=null;a.tf=null;}
function AJh(a,b){var c,d;c=a.te;d=a.tf;$rt_globals.console.info("paste plain string "+b);c.l(Fq(b));C_(d);}
function T2(){C.call(this);this.tF=null;}
function Vf(a,b){a.tF.clipboardData.setData("text/plain",$rt_ustr(b));}
function VW(){var a=this;I_.call(a);a.vK=0;a.mn=0;}
var AAH=F();
function JG(){C.call(this);this.v7=null;}
var ATO=null;var ATS=null;function AIw(){AIw=Bq(JG);APL();}
function AGw(a){var b=new JG();W$(b,a);return b;}
function W$(a,b){AIw();a.v7=b;}
function APL(){ATO=AGw(B(137));ATS=AGw(B(138));}
var U8=F(0);
function RM(){C.call(this);this.gW=null;}
function Fx(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gW));}
function El(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.gW));}
function AFW(a){var b,c;b=a.gW.byteLength;c=new M;O(c);G(S(G(c,B(139)),b),B(140));return N(c);}
var Ty=F(0);
function Ko(){var a=this;C.call(a);a.gg=null;a.eC=null;a.lj=null;}
function AAD(a,b){var c=new Ko();AIr(c,a,b);return c;}
function AQi(a,b,c){var d=new Ko();Na(d,a,b,c);return d;}
function Xj(b){var c,d,e,f,g,h,i,j,k;c=new Ko;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=TH(E(DU),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=J2(f[h]);h=h+1|0;}}j=g.data;h=j.length;if(!h)i=R(Bw,0);else{i=R(Bw,h-1|0);g=i.data;h=0;k=g.length;while(h<k){g[h]=Fq(Jb(j[h]));h=h+1|0;}}}else i=R(Bw,0);Na(c,d,b,i);return c;}
function AIr(a,b,c){Na(a,b,c,R(Bw,0));}
function Na(a,b,c,d){a.gg=b;a.eC=c;a.lj=d;}
function I1(a,b){var c,d,e;c=b|0;if(c===b)return c;d=ES(a);e=new M;O(e);G(G(e,B(141)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function ES(a){var b;b=a.gg;return Fq(b!==null?b.name:a.eC.name);}
function AIS(a){var b,c,d,e,f;if(a.eC===null){b=a.lj;c=ES(a);d=Yv(b);e=new M;O(e);G(G(G(e,d),B(142)),c);c=N(e);}else{b=a.lj;c=ES(a);f=I1(a,a.eC.size);d=Yv(b);e=new M;O(e);S(G(G(G(G(e,d),B(142)),c),B(143)),f);c=N(e);}return c;}
function J_(){var a=this;Kd.call(a);a.oh=null;a.ne=null;}
function XR(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.oh;e=0;f=0;g=a.ne;a:{while(true){if((e+32|0)>f&&DC(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=X(B4(b)+j|0,i.length);ML(b,d,j,f-j|0);e=0;}if(!DC(c)){k=!DC(b)&&e>=f?ATF:ATE;break a;}i=g.data;j=X(B4(c),i.length);l=new MT;l.mb=b;l.o5=c;k=Z_(a,d,e,f,g,0,j,l);e=l.sq;j=l.tw;if(k===null){if(!DC(b)&&e>=f)k=ATF;else if(!DC(c)&&e>=f)k=ATE;}VX(c,g,0,j);if(k!==null)break;}}Ev(b,b.R-(f-e|0)|0);return k;}
var Oy=F(J_);
function Z_(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(K0(h,2))break a;i=ATE;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Lm(l)){if((f+3|0)>g){j=j+(-1)|0;if(K0(h,3))break a;i=ATE;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CC(l)){i=DP(1);break a;}if
(j>=d){if(DC(h.mb))break a;i=ATF;break a;}c=j+1|0;m=k[j];if(!CY(m)){j=c+(-2)|0;i=DP(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(K0(h,4))break a;i=ATE;break a;}k=e.data;o=Ej(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.sq=j;h.tw=f;return i;}
var HW=F(DR);
function JS(){var a=this;Cp.call(a);a.qA=null;a.eU=null;a.cD=null;a.fH=null;a.pL=null;a.lq=null;}
function ASf(a){var b=new JS();W_(b,a);return b;}
function W_(a,b){var c,d,e,f,g;D9(a,b);a.qA=Os(0,0,64);a.pL=new Z;a.lq=new Z;c=AEn(b);a.eU=c;d=new TS;d.qJ=Fl(B(125),15.0);d.d3=c;d.dt=ACR();e=L6(d.d3);d.b1=e;e.eW=Fl(B(125),17.0);a.fH=d;c=AR1(a.eU,d);a.cD=c;d=a.eU;f=d.h_.dh!==(DW()).activeElement?0:1;if(f)Je(d);d.ef=c;if(f)J8(d);Ba(b.o.bC,a.fH);Ba(b.o.dE,a.fH);Ba(b.o.bC,a.cD);Ba(b.o.bZ,new QZ);c=b.o.bZ;d=new Q3;d.ti=a;Ba(c,d);c=b.o.bZ;d=new Jr;g=a.cD;BI(g);e=new Q2;e.lN=g;Uv(d,b,null,e);Ba(c,d);c=b.o.bZ;d=a.eU;BI(d);g=new Q1;g.oO=d;Ba(c,g);c=b.o.f3;d=a.cD;BI(d);g
=new Q0;g.t2=d;Ba(c,g);c=b.o.gE;d=new Q6;d.mN=a;Ba(c,d);c=b.o.dE;d=new Q5;d.rQ=a;Ba(c,d);b=b.o.ez;c=new Q4;c.sI=a;Ba(b,c);SQ(a);}
function AFA(a,b){var c,d,e,f;c=a.cD;d=c.e.g;e=d.fg;f=d.cj;e=e!=f&&b-d.oP>0.03125?1:0;if(e&&c.kp!=f){c.kp=f;RE(c);}e=c.bi;f=D2(c,(e+c.uV|0)-c.un|0,EI(c));c.bi=f;e=e==f?0:1;return !RP(c.cv,b)&&!e&&!c.qI?0:1;}
function AIc(a){var b;Fg(a.bb.Y,a.qA);ACO(a.cD);b=a.fH;Iv(b.dt,b.d3.cT);HT(b.b1);}
function ALY(a){return ACP(0);}
function AKB(a,b,c){var d,e,f;RU(a.eU,b,c);a.rG(b);b=a.cD;d=a.pL;e=a.lq;C1(b.ck,d);C1(b.cE,e);b.cC=B9(b.rb,c);f=B9(10.0,c);b.kN=f;f=b.cC-f|0;Ut(b.ew,b.ck,f,b.cE.a,c);d=b.cv;f=B9(2.0,c);d.du.x.b=f;SZ(b,b.is,b.fF);UK(b);}
function AAh(a,b){Y(a.lq,b.b,b.a);}
function SQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new KH;c=new If;Do();NR(c,ATP);d=CT(ATT);e=CT(ATU);f=CT(ATV);g=CT(ATP);h=CT(ATW);i=CT(ATX);j=CT(ATY);Yn();k=(ATZ.e8()).data;l=k.length;m=R(IL,l);n=m.data;o=0;while(o<l){n[o]=k[o].kB;o=o+1|0;}ME(b,c,d,e,f,g,h,i,j,m,ABS(),Fj());Un(a,b);}
function AAf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=new KH;c=new If;Do();NR(c,AT0);d=CT(AT1);e=CT(AT2);f=CT(ATV);g=CT(AT0);h=CT(AT3);i=CT(AT4);j=CT(AT5);ABQ();k=(AT6.e8()).data;l=k.length;m=R(IL,l);n=m.data;o=0;while(o<l){n[o]=k[o].la;o=o+1|0;}p=AJ6(CF(173),CF(242),CF(173),Cv(252,250,237));q=new Kj;r=new ET;s=AT7;t=AT2;EF();F6(r,s,t,s,AT8,AT9);u=new ET;s=AT7;t=AT2;v=AT8;F6(u,s,t,s,v,v);RQ(q,r,u,ACI(),Br(B(144)),ACI(),AFt(1,0.07500000298023224));ME(b,c,d,e,f,g,h,i,j,m,p,q);Un(a,b);}
function Un(a,b){var c,d;BI(b);c=a.fH;c.bk=b;d=c.da;if(d!==null)d.dP=b.bg;Iq(c.b1,b.bg);c=a.cD;c.d2=b;c=c.cv;b=b.pP;BF(c.du.bM,b);}
function ACL(a,b){if(b.bm!=121)return 0;return 1;}
function XX(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=a.eU;d=a.cD;if(d!==c.ef?0:1){c=a.fH;if(!Dz(c.b1)){e=c.b1;f=b.j;b=new RO;b.U=c;b.bp=d;b.gR=a;g=O1();h=b.bp.e;i=Df(h);j=GG(h);k=b.bp.dW;if(UH(k,i,j)!==null){h=b.U.bk.bg.X;l=new Qt;l.nE=b;l.nD=f;DX(g,B(145),h,l);}if(Ka(k,i,j)!==null){m=b.U.bk.bg.X;l=new Qs;l.ov=b;l.ox=f;DX(g,B(146),m,l);}if(MI(k,i,j)!==null){i=b.U.bk.bg.X;j=new Qq;j.mX=b;j.mZ=f;DX(g,B(147),i,j);}i=b.U.bk.bg.X;j=new Qr;j.tX=b;j.tY=f;DX(g,B(148),i,j);if(!b.bp.eV){i=b.U.bk.bg.X;j=new OJ;j.sJ=
b;DX(g,B(149),i,j);}i=b.U.bk.bg.X;j=new OH;j.ps=b;DX(g,B(150),i,j);if(!b.bp.eV&&WA(H4(b))){i=b.U.bk.bg.X;j=new OK;j.rR=b;DX(g,B(151),i,j);}m=b.U.bk.bg.X;h=O1();j=b.U.bk.bg.X;n=R(C5,2);o=n.data;p=b.gR;BI(p);q=new RJ;q.nH=p;o[0]=D_(B(152),j,q);p=b.U.bk.bg.X;q=b.gR;BI(q);r=new RK;r.qK=q;o[1]=D_(B(153),p,r);Et(h,B(154),j,FG(n));j=b.U.bk.bg.X;n=R(C5,2);o=n.data;p=b.bp;BI(p);q=new Np;q.q9=p;o[0]=D_(B(155),j,q);p=b.U.bk.bg.X;q=b.bp;BI(q);r=new No;r.pS=q;o[1]=D_(B(156),p,r);Et(h,B(157),j,FG(n));j=b.U.bk.bg.X;l=new Ue;l.qz
=b;Et(h,B(158),j,l);Et(g,B(159),m,G6(h));k=b.U.bk.bg.X;m=O1();Et(m,B(160),b.U.bk.bg.X,AC9(b));h=b.U.bk.bg.X;i=new U9;i.r5=b;DX(m,B(161),h,i);Et(g,B(162),k,G6(m));F2(e,f,G6(g),MK(c,d));}}return 1;}
function XH(){var a=this;Cp.call(a);a.kH=null;a.cU=null;a.f5=null;a.eM=null;a.gP=null;a.ud=null;a.gC=null;a.qv=null;a.lu=null;a.uy=null;a.vC=null;a.fB=null;a.je=null;a.pz=0;}
function AQu(a){var b=new XH();AJF(b,a);return b;}
function AJF(a,b){var c,d,e,f,g,h,i;D9(a,b);c=new BW;Do();AAQ(c,ATP);a.kH=c;a.cU=E3(0,0,300,300);a.f5=RC(0,0,3,3);a.eM=E3(0,0,300,300);a.gP=AKY();d=R(Bw,4);e=d.data;e[0]=B(163);e[1]=B(164);e[2]=B(165);e[3]=B(166);a.ud=d;a.gC=R(H3,e.length);f=b.Y;c=b.o.bC;g=new SL;g.eK=a;Ba(c,g);c=b.o.bZ;g=new QD;g.t3=a;Ba(c,g);c=b.o.lI;g=new QC;g.n2=a;Ba(c,g);c=b.o.f3;g=new QF;g.v4=a;Ba(c,g);c=b.o.iX;g=new QE;g.uq=a;Ba(c,g);c=b.o.ez;g=new QB;g.vw=a;Ba(c,g);b=b.o.dE;c=new QA;c.sr=a;Ba(b,c);h=CJ(a.bb.Y,300,300);c=h.bj;b="white";c.fillStyle
=b;b=h.bj;c="white";b.strokeStyle=c;b=h.bj;c=10.0;b.lineWidth=c;h.bj.strokeRect(75.0,140.0,150.0,110.0);h.bj.fillRect(130.0,190.0,40.0,60.0);h.bj.beginPath();h.bj.moveTo(50.0,140.0);h.bj.lineTo(150.0,60.0);h.bj.lineTo(250.0,140.0);h.bj.closePath();h.bj.stroke();FQ(h,B(167),11.0);KI(h,187,187,187);Ox(a,B(168),h);b=CR(a.bb.Y);CL(b,h);FD(h);a.qv=b;F9(a.cU,b);GK(a.cU);BF(a.cU.bW,ATP);BF(a.cU.bM,Cv(204,120,50));b=CJ(f,255,100);a.fB=b;FQ(b,B(125),11.0);b=By();i=$rt_str(a.fB.bj.font);g=new M;O(g);G(G(g,B(169)),i);Bu(b,
N(g));Ef(a.fB,B(170));KI(a.fB,169,183,198);Ox(a,B(170),a.fB);b=CR(f);a.lu=b;CL(b,a.fB);F9(a.eM,a.lu);GK(a.eM);F1(a.eM,CF(255));Hf(a.eM,ATP);a.uy=CR(f);BF(a.f5.bW,a.kH);}
function Ox(a,b,c){Cf(c,b,0.0,20.0);Cf(c,b,0.25,40.0);Cf(c,b,0.5,60.0);Cf(c,b,0.75,80.0);}
function VN(a,b){IX(Fh(),0.5+Fh()*0.5,0.5+Fh()*0.5,1.0,b.bM);}
function ADK(a,b){var c;a.pz=a.pz+1|0;c=b/5.0;IX(c-(c|0),1.0,1.0,1.0,a.f5.bM);return RP(a.gP,b);}
function AGL(a){var b,c,d,e,f,g;b=a.bb.Y;Fg(b,a.kH);c=a.gC.data;d=c.length;e=0;while(e<d){Tt(c[e],b,0,0);e=e+1|0;}Dw(a.cU,b,a.qv,0,0,0.5);f=a.lu;d=0;while(d<7){g=a.eM;Dw(g,b,f,Be(d,10+((10*g.x.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.vC;if(g!==null)S7(a.f5,b,g,0,0,0.0);T_(a.gP,b,new Z);M5(b,B(171));}
function AM0(a,b,c){var d,e,f,g,h,i,j,k,l;d=By();e=Ct(b);f=new M;O(f);G(G(f,B(172)),e);Bu(d,N(f));g=By();d=new M;O(d);E8(G(d,B(173)),c);Bu(g,N(d));h=B9(30.0,c);i=B9(10.0,c);j=0;while(true){k=a.gC.data;if(j>=k.length)break;l=1+j|0;k[j]=RC(Be(i,l)+Be(h,j)|0,h,h,h);VN(a,a.gC.data[j]);j=l;}Y(a.f5.N,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.cU;g=d.N;h=b.b;d=d.x;Y(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.eM;d.N.a=b.a-d.x.a|0;}
function N9(a,b){var c,d,e,f,g;c=By();d=!b.g3?B(174):B(175);e=b.dk;f=b.bm;g=b.qY;b=new M;O(b);FT(G(S(G(G(G(b,d),e),B(176)),f),B(177)),g);Bu(c,N(b));return 0;}
function DT(){var a=this;Cp.call(a);a.fW=null;a.Q=null;}
function Hp(a,b){var c,d;D9(a,b);a.fW=Os(0,0,64);a.Q=AEn(b);Ba(b.o.bZ,new Rf);b=b.o.bZ;c=a.Q;BI(c);d=new Rg;d.rm=c;Ba(b,d);}
function G4(a){Fg(a.bb.Y,a.fW);}
function KT(a,b,c){RU(a.Q,b,c);}
var Ee=F(0);
function U_(){var a=this;DT.call(a);a.qG=null;a.dd=null;a.cu=null;a.dI=null;a.rp=null;}
function AOm(a,b,c){var d;d=Gy(a.Q,a.rp);Hz(a.dd,d);Hz(a.cu,d);GE(a.dd,a.Q);GE(a.cu,a.Q);}
function MS(b){return In(b,ANS());}
function In(b,c){var d;d=O1();JR(d,J$(b,HY(c,25)),!b?null:In(b-1|0,c));JR(d,J$(b,HY(c,20)),!b?null:In(b-1|0,c));JR(d,J$(b,HY(c,15)),!b?null:In(b-1|0,c));JR(d,J$(b,HY(c,10)),!b?null:In(b-1|0,c));return G6(d);}
function J$(b,c){var d;if(b){d=new M;O(d);G(G(S(d,b),B(36)),c);c=N(d);}return c;}
function JR(b,c,d){var e,f;e=new G0;f=IX(Fh(),1.0,1.0,1.0,new BW);EF();Lf(e,f,AT$,AT_);if(d!==null)Et(b,c,e,d);else{d=new Th;d.st=c;DX(b,c,e,d);}}
function AGg(a,b,c){var d,e;KT(a,b,c);b=a.Q.bL;d=D0(a.dd);e=D0(a.cu);Jh(a.dd,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);Jh(a.cu,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AG0(a){var b,c,d,e,f,g,h,i;G4(a);b=a.bb.Y;CI(b,1);c=a.qG;d=a.Q;e=d.bL;Y(c.lh,e.b,B9(2.0,d.bE));Y(c.jD,B9(2.0,d.bE),e.a);EF();f=AUa;g=d.cT;h=e.a/2|0;i=c.lh;BB(g,0,h-(i.a/2|0)|0,i,f);g=d.cT;h=e.b/2|0;c=c.jD;BB(g,h-(c.b/2|0)|0,0,c,f);I2(a.dd,a.Q);I2(a.cu,a.Q);HT(a.dI);CI(b,0);}
function AMj(a,b){var c,d,e;c=JP(a.dI,b);d=JE(a.dd,b.j,a.Q.cp);e=JE(a.cu,b.j,a.Q.cp);return !c&&!d&&!e?0:1;}
function AHT(a,b,c){return Jd(a.dI,b,c);}
function AER(a,b,c){return Dz(a.dI);}
function ALB(a,b,c,d){var e,f,g;e=IM(a.dI,b,c,d);f=Jv(a.dd,b.j,c,d);g=Jv(a.cu,b.j,c,d);return !e&&!f&&!g?0:1;}
function Wu(){var a=this;DT.call(a);a.e$=null;a.ea=null;a.iu=null;a.k0=null;}
function AO6(a,b,c){if(b===0.0)PF(a);}
function AFv(a){var b;G4(a);b=a.bb.Y;Iv(a.ea,b);HT(a.e$);}
function PF(a){var b,c,d,e,f,g,h,i,j;b=a.iu;if(b!==null){Jt(a.ea,b);Hj(b);}b=Fj();c=AR6(a.Q,new Mn);d=FK(a.bb.Y,B(124),25);e=ALF();f=0;while(f<300){g=CZ(f);h=new ET;Do();i=ATQ;j=ATU;EF();F6(h,i,j,i,AUb,AT9);h=new SR;h.nZ=B(178);h.n0=g;h.nY=B(179);Mo(e,B(178),g,B(179),h);f=f+1|0;}UY(c,PR(e));UW(c,d);c.jr=b;e=AAj(a.Q);K4(e,Yd(c,a.Q));e.dP=b;H6(e,B(180),a.k0,2.0);a.iu=e;Ii(a.ea,e);Qh(a);}
function AJ0(a,b,c){KT(a,b,c);O6(a.ea,b,c);Qh(a);}
function Qh(a){var b,c,d;b=a.Q.bL;CK(a.iu,B3((b.b*2|0)/10|0,(b.a*4|0)/10|0),B3((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.iu;b=W9(c.p.n);d=new M;O(d);G(G(d,B(181)),b);H6(c,N(d),a.k0,2.0);}
function AOF(a,b){return Nu(a.ea,b);}
function W0(){var a=this;DT.call(a);a.hy=null;a.fe=null;a.eE=null;a.iO=null;a.n$=null;a.hO=null;a.fq=null;a.fa=null;a.iJ=0;a.fC=0;}
function VG(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fe.i>0){d=Fh();e=a.fe;f=d*(e.i-1|0)|0;e=Ec(e,f);Ec(a.eE,f);f=a.fC;g=e.x;a.fC=f-Be(g.b,g.a)|0;HM(a.hy,e.cM);}c=c+1|0;}}
function JN(a,b){var c,d,e,f,g,h,i,j;c=H8(a.Q);Cu(c,a.iO);d=0;while(d<b){e=HY(a.hO,1+(Fh()*19.0|0)|0);f=AJS();g=f.cM;h=a.hy;BI(c);i=new Qg;i.ol=c;BF(g,GZ(h,e,i));(VT(Fh(),1.0,1.0,f.bW)).bu=0.5;h=f.N;g=f.cM;Y(h,g.bh|0,g.bt|0);h=f.x;g=f.cM;Y(h,g.be|0,g.bu|0);BX(a.eE,e);BX(a.fe,f);j=a.fC;h=f.x;a.fC=j+Be(h.b,h.a)|0;d=d+1|0;}a.fa=Wt(a.hy);}
function AMs(a){var b,c,d,e,f,g,h,i;G4(a);b=a.bb.Y;CI(b,1);c=a.Q.cT;if(a.eE.i){d=a.fa;d=CJ(c,d.b,d.a);Cu(d,a.iO);e=a.iO.db;BB(c,0,0,a.fa,a.n$);f=0;while(f<a.eE.i){g=Bs(a.fe,f);h=Bs(a.eE,f);g=g.cM;Cf(d,h,g.bh,g.bt+e);f=f+1|0;}g=a.fq;if(!(g!==null&&Cb(g)==a.fa.b&&C3(a.fq)==a.fa.a))a.fq=CX(a.fq,CR(c));CL(a.fq,d);FD(d);i=0;while(i<a.eE.i){d=Bs(a.fe,i);F1(d,CF(0));Dw(d,c,a.fq,0,0,0.0);i=i+1|0;}}CI(b,0);}
function AFU(a,b){var c,d;if(a.iJ){c=a.fa;d=X(Be(c.b,c.a),2211840);if(a.fC/d<=0.7)JN(a,HO(a.hO,5));else VG(a,HO(a.hO,5));}return a.iJ;}
function On(){var a=this;Cp.call(a);a.dD=null;a.fx=null;a.gq=null;a.ki=null;a.dC=0;a.ra=0;a.tp=null;a.li=0;a.tD=0;a.sc=null;a.n3=null;}
function AD2(a){var b,c;b=a.dC;c=new M;O(c);S(G(c,B(182)),b);$rt_globals.console.info($rt_ustr(N(c)));Fg(a.dD,a.tp);HZ(a.gq,a.dC,0,FZ(a),5000,a.ki.b,20);CI(a.dD,1);O$(a.gq,a.dD);CI(a.dD,0);b=a.dC;c=new M;O(c);S(G(c,B(182)),b);$rt_globals.console.info($rt_ustr(N(c)));WJ(a.fx,a.dC/a.li|0);S_(a.fx,a.dC,FZ(a),a.n3,a.dD);}
function AN8(a,b,c){a.ki=b;Ut(a.fx,B3(0,0),50,FZ(a),c);Jk(a.fx,a.dD,0,FZ(a));}
function O0(a){return 5000-FZ(a)|0;}
function FZ(a){return X(a.ra,a.ki.a);}
function C7(){var a=this;Cp.call(a);a.k6=null;a.gb=null;a.ur=0.0;}
function AUc(a){var b=new C7();Gb(b,a);return b;}
function Gb(a,b){D9(a,b);a.k6=Os(0,0,64);a.gb=new Z;MM(b.bV,HA(Cy(a)));}
function Ra(a){Fg(a.bb.Y,a.k6);}
function RH(a,b,c){C1(a.gb,b);a.ur=c;}
var PT=F(C7);
var ACE=F(C7);
function ARS(a){var b=new ACE();ALa(b,a);return b;}
function ALa(a,b){var c,d,e,f,g,h;Gb(a,b);c=b.bV;d=new Qf;d.u2=a;e=R(C,1);e.data[0]=B(183);C0(c,d,B(184),e);f=b.bV;g=new Qe;g.wO=a;h=R(C,1);h.data[0]=ZB([1,2,3,4,5]);C0(f,g,B(185),h);f=b.bV;g=new Qd;g.nX=a;h=R(C,1);h.data[0]=AQ_([1,2,3,4,5]);C0(f,g,B(186),h);f=b.bV;g=new Qc;g.uJ=a;h=R(C,1);h.data[0]=EU([1,2,3,4,5]);C0(f,g,B(187),h);f=b.o.bZ;d=new Jr;g=new Qa;g.vR=a;c=new P_;c.pp=a;Uv(d,b,g,c);Ba(f,d);}
function Tv(a,b){var c,d,e,f,g,h;c=b.data;d=By();e=Ct(c[0]);f=new M;O(f);G(G(f,B(188)),e);Bu(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((QS(b,1)).gW));d=By();e=Ct(c[1]);if(b===null)f=B(29);else{f=new M;O(f);BY(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BY(f,B(44));S(f,c[g]);g=g+1|0;}BY(f,B(45));f=N(f);}h=new M;O(h);G(G(G(G(h,B(189)),e),B(190)),f);Bu(d,N(h));}
function VQ(){var a=this;C7.call(a);a.ds=null;a.es=null;a.jT=null;a.oU=null;a.kW=null;}
function AI$(a,b){b=b/5.0;IX(b-(b|0),1.0,1.0,1.0,a.es.bM);return 0;}
function ADE(a){Ra(a);Dw(a.ds,a.bb.Y,a.oU,0,0,0.5);S7(a.es,a.bb.Y,a.jT,0,0,0.0);M5(a.bb.Y,B(171));}
function ALT(a,b,c){var d,e,f;RH(a,b,c);Y(a.es.N,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.ds;e=d.N;f=b.b;d=d.x;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Rc(){var a=this;C7.call(a);a.fU=null;a.qR=null;a.jt=null;a.hP=null;a.g$=null;}
function APu(a){var b,c,d,e,f,g;Ra(a);b=a.bb.Y;c=a.hP;T9(b,c.b,c.a,a.g$);b=a.fU;c=a.qR;d=a.gb;e=a.bb.Y;f=0;while(true){g=0;while(true){Dw(b,e,c,g,f,0.5);g=g+Cb(c)|0;if(g>=d.b)break;}f=f+C3(c)|0;if(f>=d.a)break;}KY(a.bb.Y);}
function AFk(a,b,c){RH(a,b,c);Y(a.g$,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function NW(){var a=this;Cp.call(a);a.dK=null;a.jl=null;a.eJ=null;a.bU=null;a.d$=0;a.hj=null;a.d_=0;a.vx=20;a.w2=11;a.vd=220;a.ix=null;a.vV=5000;a.gd=0;a.e0=null;}
function APx(a){var b,c,d,e,f,g,h;b=a.hj;c=a.d_;d=a.ix;HZ(b,c,0,d.a,5000,d.b,20);CI(a.dK,1);O$(a.hj,a.dK);if(a.bU===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Cf(a.jl,CZ(e),0.0,c);}b=CR(a.dK);a.bU=b;CL(b,a.jl);}if(a.d_<=a.d$)while(true){f=a.d$;if(f<=a.d_)break;a.d$=f-20|0;b=a.eJ;g=a.gd-1|0;a.gd=g;Cf(b,CZ(g),0.0,20.0);Hw(a.bU,a.eJ,0,a.d$%220|0);Em(a.eJ);}else while(a.d$<(a.d_-20|0)){b=a.eJ;g=a.gd+1|0;a.gd=g;Cf(b,CZ((g+11|0)-1|0),0.0,20.0);Hw(a.bU,a.eJ,0,a.d$%220|0);Em(a.eJ);a.d$=a.d$+20|0;}b=E3(0,0,Cb(a.bU),C3(a.bU));Hi(b,
0,0,Cb(a.bU),C3(a.bU));F1(b,a.e0.data[0]);Hf(b,a.e0.data[1]);Dw(b,a.dK,a.bU,400,0,1.0);g=a.d_%220|0;f=X(C3(a.bU)-g|0,200);d=E3(0,0,Cb(a.bU),f);Hi(d,0,g,Cb(a.bU),f);F1(d,a.e0.data[0]);Hf(d,a.e0.data[1]);Dw(d,a.dK,a.bU,0,0,1.0);h=E3(0,f,Cb(a.bU),(C3(a.bU)-f|0)-20|0);Hi(h,0,0,Cb(a.bU),(C3(a.bU)-f|0)-20|0);F1(h,a.e0.data[1]);Hf(h,a.e0.data[0]);Dw(h,a.dK,a.bU,0,0,1.0);}
function AHo(a,b,c){C1(a.ix,b);}
function AF0(a,b){return 0;}
function QL(a){return 5000-a.ix.a|0;}
function H0(){C7.call(this);this.de=0;}
function P9(a){var b,c;b=a.bb.bV;c=new Pq;c.mj=a;PQ(b,c,Qu(a));}
function LO(a){var b,c,d,e;b=a.de+1|0;a.de=b;c=HA(E(H0));d=new M;O(d);G(G(S(G(d,B(191)),b),B(36)),c);e=N(d);c=a.bb.bV;d=new S$;d.o7=e;Tm(c,e,d,Qu(a));}
function Qu(a){var b;b=new UN;b.n6=a;return b;}
function AMU(a,b,c,d){a:{switch(c){case 0:break;case 2:LO(a);break a;default:break a;}P9(a);}return 1;}
function Ph(){var a=this;Cp.call(a);a.m3=null;a.eF=null;a.kX=null;a.hz=null;}
function APo(a){var b;b=a.bb.Y;Fg(b,a.m3);Dw(a.eF,b,a.kX,0,0,0.5);}
function AJ_(a,b,c){var d,e,f;d=a.eF;e=d.N;f=b.b;d=d.x;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Vq(){var a=this;DT.call(a);a.ff=null;a.dF=null;a.iG=null;a.iH=null;a.sb=null;}
function AIk(a,b,c){if(b===0.0)MY(a);}
function APP(a){var b;G4(a);b=a.bb.Y;Iv(a.dF,b);HT(a.ff);}
function MY(a){VE(a,a.iG);VE(a,a.iH);a.iG=Mh(a,0.5,0,B(192));a.iH=Mh(a,1.0,1,B(193));Ii(a.dF,a.iG);Ii(a.dF,a.iH);V5(a);}
function VE(a,b){if(b!==null){Jt(a.dF,b);Hj(b);}}
function Mh(a,b,c,d){var e,f,g;e=AAj(a.Q);f=new U1;g=new OF;g.se=a;g.sf=e;g.sd=d;SI(f);f.hr=new BW;f.kJ=new Z;f.rn=g;f.o4=b;if(c)f=Yd(f,a.Q);K4(e,f);e.dP=Fj();return e;}
function AMb(a,b,c){KT(a,b,c);O6(a.dF,b,c);V5(a);}
function V5(a){var b;b=a.Q.bL;CK(a.iH,B3((b.b*2|0)/10|0,(b.a*2|0)/10|0),B3((b.b*7|0)/10|0,(b.a*7|0)/10|0));CK(a.iG,B3(b.b/10|0,b.a/10|0),B3((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AI6(a,b){return Nu(a.dF,b);}
var Qb=F(JS);
function AIp(a){return ACP(1);}
function AFr(a,b){AAh(a,b);}
var Is=F(0);
function Lz(){var a=this;C.call(a);a.ii=null;a.hN=null;}
function LL(a,b){var c;c=a.hN;a.hN=b;return c;}
function IQ(){var a=this;Lz.call(a);a.bD=null;a.bR=null;a.eZ=0;a.e9=0;}
function I6(a){var b;b=Ke(a);if(b==2){if(Ke(a.bR)<0)a.bR=Mr(a.bR);return NS(a);}if(b!=(-2))return a;if(Ke(a.bD)>0)a.bD=NS(a.bD);return Mr(a);}
function Ke(a){var b,c;b=a.bR;c=b===null?0:b.eZ;b=a.bD;return c-(b===null?0:b.eZ)|0;}
function Mr(a){var b;b=a.bD;a.bD=b.bR;b.bR=a;D8(a);D8(b);return b;}
function NS(a){var b;b=a.bR;a.bR=b.bD;b.bD=a;D8(a);D8(b);return b;}
function D8(a){var b,c,d;b=a.bR;c=b===null?0:b.eZ;b=a.bD;d=b===null?0:b.eZ;a.eZ=V(c,d)+1|0;a.e9=1;b=a.bD;if(b!==null)a.e9=1+b.e9|0;b=a.bR;if(b!==null)a.e9=a.e9+b.e9|0;}
var ACk=F();
function AEI(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Oi;c=c.buffer;d.eY=c;d.lC=new $rt_globals.Int8Array(c);d.jm=new $rt_globals.Uint16Array(c);d.rJ=new $rt_globals.Int32Array(c);d.oG=new $rt_globals.Float32Array(c);d.oR=new $rt_globals.Float64Array(c);e=d.eY.byteLength;c=new M;O(c);S(G(c,B(194)),e);CE(N(c));e=b.callToCpp1();c=new M;O(c);S(G(c,B(195)),e);CE(N(c));f=b.callToCpp2();c=new M;O(c);E8(G(c,B(196)),f);CE(N(c));c=Mb(d,b.getC8String());g=new M;O(g);G(G(g,B(197)),c);CE(N(g));c
=Mk(d,b.getC16String());g=new M;O(g);G(G(g,B(198)),c);CE(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.eY,h,8));c=AA4(i);g=new M;O(g);G(G(g,B(199)),c);CE(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.eY,h,8));c=ANc(j);g=new M;O(g);G(G(g,B(200)),c);CE(N(g));k=Zk(d,b.getCDoubleArray8(),8);l=APR(k);c=new M;O(c);G(G(c,B(201)),l);CE(DH(c));l=APE(b.getC8String(),B(202),d);c=K6();G(G(c,B(203)),l);CE(DH(c));l=AJY(b.getC16String(),B(204),
d);c=K6();G(G(c,B(205)),l);CE(DH(c));c=ALN(i,d,b.getCIntArray8(),EU([11,22,33,44,55,66,77,88]));g=K6();G(G(g,B(206)),c);CE(DH(g));c=ANr(j,d,b.getCFloatArray8(),100,EU([111,222,333,444,555,666,777,888]));g=K6();G(G(g,B(207)),c);CE(DH(g));b=ANJ(k,d,b.getCDoubleArray8(),1000,EU([1111,2222,3333,4444,5555,6666,7777,8888]));c=K6();G(G(c,B(208)),b);CE(DH(c));}
function ANr(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(209);h=0;i=e;a:{while(h<g){if(C$(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.oG[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(210);}return B(211);}
function ANJ(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(209);h=0;i=e;a:{while(h<g){if(GY(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.oR[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(210);}return B(211);}
function ALN(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(209);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.rJ[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(210);}return B(211);}
function APE(b,c,d){var e,f,g,h;e=Mb(d,b);if(!Bn(c,e))return B(212);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lC[h])return B(213);f=f+1|0;}return B(210);}
function AJY(b,c,d){var e,f,g,h;e=Mk(d,b);if(!Bn(c,e))return B(212);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jm[h>>>1|0]&65535))return B(213);f=f+1|0;}return B(210);}
function CE(b){Oe(B(2),b);}
function AIT(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
var X0=F(0);
function Os(b,c,d){return Hg(b,c,d,255,new BW);}
function W3(b,c,d,e){return Hg(b,c,d,e,new BW);}
function Hg(b,c,d,e,f){CD(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function VT(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bh=g+i;e.bt=h+i;e.be=j+i;return e;}
function IX(b,c,d,e,f){f=VT(b,c,d,f);f.bu=e;return f;}
function Gp(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function ACZ(){var a=this;C.call(a);a.cT=null;a.h_=null;a.bL=null;a.cp=null;a.bE=0.0;a.ef=null;a.dv=null;a.jH=null;a.nM=null;a.w4=null;a.w3=null;}
function AEn(a){var b=new ACZ();AEZ(b,a);return b;}
function AEZ(a,b){var c,d;a.bL=new Z;a.dv=CG(R(Ee,0));a.jH=new Z;a.nM=new Z;a.w4=new BW;a.w3=new BW;a.cT=b.Y;c=b.bV;a.h_=c;a.cp=TD(c);c=b.o.jF;d=new LQ;d.m8=a;Ba(c,d);b=b.o.iX;c=new LR;c.pQ=a;Ba(b,c);}
function RU(a,b,c){var d,e,f,g;a:{C1(a.bL,b);d=a.bE;if(d!==c){a.bE=c;e=(Cm(a.dv)).data;f=e.length;g=0;while(true){if(g>=f)break a;e[g].f4(d,c);g=g+1|0;}}}}
function Md(a,b){var c;c=a.ef;return c!==null&&c.hH(b)?1:0;}
function J8(a){var b;b=a.ef;if(b!==null)b.rM();}
function Je(a){var b;b=a.ef;if(b!==null)b.t1();}
function WK(a,b){Je(a);a.ef=b;J8(a);}
function H8(a){return a.cT.cq;}
function Gy(a,b){return FK(a.cT,b.h0,B9(b.hn,a.bE));}
function Cs(a,b){return B9(b,a.bE);}
function TS(){var a=this;C.call(a);a.d3=null;a.qJ=null;a.dt=null;a.da=null;a.b1=null;a.bk=null;}
function AMv(a,b){return !X_(a.dt,b)&&!JP(a.b1,b)?0:1;}
function APZ(a,b,c,d){return !ZX(a.dt,b,c,d)&&!IM(a.b1,b,c,d)?0:1;}
function APH(a,b,c){return !Y6(a.dt,b,c)&&!Jd(a.b1,b,c)?0:1;}
function AK1(a,b,c){return !ACQ(a.dt,b,c)&&!Dz(a.b1)?0:1;}
function Rx(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=null;f=d.e;g=ALF();h=c.i;i=0;while(i<h){if(e===null){j=(Bs(c,i)).bA;k=QP(Ez(B1(f.g,j)));l=UJ(f.fA);}else{m=e.data;j=m[i].jB.kh;k=!D$(f.fA,m[i].hE)?B(31):QP(Ez(B1(f.g,j)));l=UJ(m[i].hE);}if(I(k)>43){n=B8(k,0,40);m=new M;O(m);G(G(m,n),B(214));k=N(m);}if(I(l)>43){n=B8(l,0,40);m=new M;O(m);G(G(m,n),B(214));l=N(m);}m=CZ(j+1|0);if(e!==null){o=e.data;n=null;o=o[i];}else{o=null;n=Bs(c,i);}if(e!==null){p=new Tq;p.m0=d;p.mY=o;}else{p=new Ts;p.uc=d;p.t$=n;}Mo(g,
l,m,k,p);i=i+1|0;}q=PR(g);c=a.da;if(c!==null)Hj(c);a.da=AAj(a.d3);d=new PS;c=a.d3;m=new Rp;m.n4=a;Y8(d,c,m);UW(d,Gy(a.d3,Fl(B(125),17.0)));UY(d,q);K4(a.da,Yd(d,a.d3));H6(a.da,B(215),a.qJ,2.0);c=a.da;m=a.bk.bg;c.dP=m;d.jr=m;Ii(a.dt,c);c=a.da;Si(d);Ys(d);h=d.cs.b;r=d.ee.bL.b;s=EO(h,(r*4|0)/10|0,((r*9|0)/10|0)-b.b|0);h=d.cs.a;r=d.ee.bL.a;CK(c,b,B3(s,EO(h,(r*4|0)/10|0,((r*9|0)/10|0)-b.a|0)));}
function MK(a,b){var c;c=new Uo;c.ng=a;c.nf=b;return c;}
function AJy(a,b,c,d){return Kv(a.dt,b,c,d);}
function XG(b){var c;c=new WN;c.td=b;return c;}
var JC=F(0);
function AFP(a){}
function AP6(a){}
function Zl(){var a=this;C.call(a);a.dX=null;a.W=null;a.hZ=null;a.qI=0;a.k_=null;a.cv=null;a.z=0;a.y=0;a.gJ=0;a.kt=0;a.fF=0;a.is=null;a.en=null;a.co=null;a.Z=0;a.e=null;a.dW=null;a.r=null;a.e_=null;a.d2=null;a.lG=null;a.f6=null;a.s3=0;a.rh=0;a.rb=0;a.cC=0;a.jJ=0;a.kN=0;a.j4=null;a.eu=null;a.eq=null;a.bi=0;a.cf=0;a.gO=0;a.hA=0;a.hp=0;a.uV=0;a.un=0;a.iQ=0;a.kn=0;a.ew=null;a.ck=null;a.cE=null;a.hm=0;a.hl=0;a.el=null;a.eV=0;a.hM=null;a.hC=null;a.uB=null;a.gv=null;a.kp=0;a.qF=null;a.gX=null;a.ep=Ed;a.fN=null;a.sv
=null;a.sX=null;}
function AR1(a,b){var c=new Zl();AIi(c,a,b);return c;}
function AIi(a,b,c){var d,e,f;a.qI=0;a.k_=R(Bi,10);a.cv=AKY();a.fF=16;a.is=B(124);a.co=R(Kp,4);d=new KW;d.g=AL7();d.ir=B(164);d.fA=null;a.e=d;d=new UX;d.mQ=CG(R(Lw,0));d.r3=CG(R(Lw,0));d.sj=CG(R(LU,0));d.n5=CG(R(Pi,0));d.l4=CG(R(H2,0));d.qL=CG(R(Qk,0));a.dW=d;a.r=ALq();e=new MG;e.eh=R(II,16);e.ei=0;e.cV=(-1);a.e_=e;a.f6=R(EH,0);a.rb=100;a.jJ=1;a.j4=B3(1,0);a.eu=G5();a.eq=G5();a.bi=0;a.cf=0;a.gO=0;a.hp=1;a.iQ=1;a.kn=3;a.ew=AJ9();a.ck=new Z;a.cE=new Z;a.el=B(216);a.eV=0;a.hM=null;a.hC=Cl();e=KX();BI(e);d=new TO;d.wR
=e;a.gv=d;a.qF=new BW;a.gX=new Z;e=new TN;e.qu=a;a.sv=e;e=new TJ;e.nj=a;a.sX=e;a.dX=b;a.W=b.cT;a.hZ=c;f=a.k_.data;b=new TI;b.su=a;f[0]=b;b=new TL;b.qS=a;f[1]=b;b=new TK;b.nF=a;f[2]=b;b=new Uc;b.sV=a;f[3]=b;ADH();a.hA=AUd===AUe?0:1;}
function AGF(a){a.kt=1;KV(a);}
function AFl(a){a.kt=0;}
function KV(a){Ri(a.cv,IR(Cg(a)));}
function Ku(a,b,c){if(a.dX.bE!==0.0){SZ(a,b,c);FS(Cg(a));}a.fF=c;a.is=b;}
function SZ(a,b,c){var d,e,f,g,h,i,j;d=B9(c,a.dX.bE);e=a.en;f=e!==null?e.og:0;if(!(d==f&&D$(b,a.is))){g=a.ew;Jn(g.cn,new Qz);G9(g.cn);g.eb=CX(g.eb,null);g.eR=CX(g.eR,null);h=a.f6.data;c=h.length;f=0;while(f<c){Px(h[f]);f=f+1|0;}h=a.e.g.D.data;c=h.length;f=0;while(f<c){D5(h[f]);f=f+1|0;}h=a.co.data;c=G1(0,0);e=a.W;i=d;h[c]=GA(e,b,i,400,0);a.co.data[G1(0,1)]=GA(a.W,b,i,400,2);a.co.data[G1(1,0)]=GA(a.W,b,i,700,0);a.co.data[G1(1,1)]=GA(a.W,b,i,700,2);e=a.co.data[G1(0,0)];a.en=e;c=En(e);a.Z=C$(c*1.25);a.cv.du.x.a
=En(a.en);a.lG=CX(a.lG,CJ(a.W,1024,a.Z));f=a.Z;j=RB(a.cv);e=new M;O(e);b=G(G(e,B(217)),b);BA(b,32);S(G(S(G(S(G(S(b,d),B(218)),c),B(134)),f),B(219)),j);$rt_globals.console.info($rt_ustr(N(e)));if(AUf){c=Kw(a.en,a.Z);b=new M;O(b);S(G(b,B(220)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gJ=GH(Ff(a),a.y,a.W.cq,a.co);GB(a);UK(a);}}
function T7(a){return Be(CA(a.e.g)+5|0,a.Z);}
function EI(a){return V(T7(a)-a.cE.a|0,0);}
function F$(a){return V(a.gO-DJ(a)|0,0);}
function DJ(a){return a.cE.b-a.cC|0;}
function Dy(a){return a.cE.a;}
function ACO(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=H5(a.cE.a,a.Z)+7|0;c=a.f6;if(c.data.length<b)a.f6=Y9(b,c,a.s3,a.rh,a.e.g);CI(a.W,0);d=a.j4;d.a=a.cE.a;d.b=a.jJ;e=a.W;f=a.ck;BB(e,(f.b+a.cC|0)-a.kN|0,f.a,d,a.d2.r8);d=a.j4;b=a.kN;g=a.jJ;d.b=b-g|0;e=a.W;f=a.ck;BB(e,((f.b+a.cC|0)-b|0)+g|0,f.a,d,a.d2.iN);a.bi=X(a.bi,EI(a));a.cf=X(a.cf,F$(a));g=(a.Z-RB(a.cv)|0)/2|0;h=(a.gJ-(Pr(a.cv)/2|0)|0)-a.cf|0;OZ(a.cv,a.cC+h|0,(g+Be(a.z,a.Z)|0)-a.bi|0);i=CA(a.e.g);j=Kn(a);k=T4(a);a.s3=j;a.rh=k;l=j;while(l<=k&&l<i){m
=B1(a.e.g,l);n=P2(a,l);f=a.lG;o=a.co;p=a.W;q=a.Z;r=DJ(a);s=a.cf;d=n.bO;b=d===m&&!d.hx?0:1;if(b){n.bO=m;Ky(m,p.cq,o);}d=n.bO;g=d===null?0:EN(d)<r?H5(EN(n.bO),1024):H5(r,1024)+1|0;r=g<=n.di?0:1;if(r)n.di=g;if(!(!b&&!r)){if(AUg){c=m.e1;$rt_globals.console.info("fMeasure"+c.data);AUg=0;}AA5(f,AUf);ABa(n,f,p,o,q,s);n.bO.hx=0;}AAW(n,f,o,q,s);t=n.bO;a.gO=V(a.gO,EN(m)+(40.0*a.dX.bE|0)|0);r=Be(a.Z,l)-a.bi|0;d=a.ck;AA1(n,d.a+r|0,d.b+a.cC|0,a.W,a.qF,a.gX,!a.hA?0.0:0.5,DJ(a),a.Z,a.cf,a.d2,AB1(a,l,t),a.hM,a.hC);l=l+1|0;}q
=j;while(q<=k&&q<i&&a.iQ){d=P2(a,q);r=Be(a.Z,q)-a.bi|0;e=!YA(a.r,q)?a.d2.l1:a.d2.kT;f=a.W;p=a.ck;AAL(d,f,p.b+a.cC|0,p.a+r|0,a.Z,a.gX,a.cf,DJ(a),e);q=q+1|0;}if(a.kt&&h>=(( -Pr(a.cv)|0)/2|0)){d=a.cv;e=a.cE;if(X5(d.du.N,0,0,e))T_(a.cv,a.W,a.ck);}if(a.hp){s=X(k+1|0,i);AAk(a,Be(a.Z,s)-a.bi|0);}Zy(a,j,k);AAV(a);ABA(a);}
function AB1(a,b,c){var d,e,f,g;a:{d=a.r;e=DS(d);d=Fm(d);f=e.J;if(f<=b){g=BD(b,d.J);if(g<=0){d=B3(b<=f?e.V:0,g>=0?d.V:(-1));break a;}}d=null;}if(d!==null){if(d.a==(-1))d.a=c.O;d.b=GH(c,d.b,a.W.cq,a.co);d.a=GH(c,d.a,a.W.cq,a.co);}return d;}
function Zy(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cE.a;e=X(d,Be(CA(a.e.g),a.Z)-a.bi|0);f=a.ew;g=a.bi;h=a.z;i=a.W;j=a.d2.tQ;Jk(f,i,b,d);WJ(f,b);S_(f,g,e,j,i);if(e<d){k=f.fv;BB(i,k.b,k.a+e|0,B3(f.eG.b,d-e|0),j.g5);}if(b<=h&&h<=c){c=h/20|0;k=f.cn;k=Bs(k,c%k.i|0);l=f.fv;c=Be(f.cn.i,f.hU);b=k.d8.a;d=((k.ip.a-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C3(k.bS)|0)|0;b=h%k.dp|0;e=k.d5;d=d+Be(b,e)|0;if(d<( -e|0))d=d+c|0;Y(k.fX,k.d8.b,e);m=k.fl;b=h%k.dp|0;c=k.d5;CD(m,0.0,Be(b,c),k.d8.b,c);Ip(k,i,d,l,j.o2,j.o$);}}
function Kn(a){return X(a.bi/a.Z|0,CA(a.e.g)-1|0);}
function T4(a){return X(((a.bi+Dy(a)|0)-1|0)/a.Z|0,CA(a.e.g)-1|0);}
function UK(a){SB(a.ew,a.co.data[0],a.Z,a.W);Jk(a.ew,a.W,Kn(a),Dy(a));}
function P2(a,b){var c;c=a.f6.data;return c[b%c.length|0];}
function ACY(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dh(a.r))DG(a,a.el);else{b=DS(a.r);c=Fm(a.r);d=c.J;e=b.J;f=(d-e|0)+1|0;g=BH(f);h=g.data;i=R(Bw,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.el;e=e+1|0;k=f;}l=EG(a.z,a.y);m=new U0;m.rO=a;Oz(a,g,0,0,i,l,m);b.V=b.V+I(a.el)|0;c.V=c.V+I(a.el)|0;Le(a,a.y+I(a.el)|0,0);DN(a);}return 1;}
function AAE(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dh(a.r)){b=B1(a.e.g,a.z);if(b.q.data.length>0){c=QN(a,b);if(c===null)return 1;d=a.e.g;e=a.z;f=EG(e,a.y);d.cj=d.cj+1|0;g=d.eX;h=R(GJ,1);h.data[0]=ADL(e,0,1,c,f.bA,f.bG);BX(g,h);I4(d,e,0,1,c);FH(b,0,I(c));Le(a,a.y-I(c)|0,0);}}else{f=DS(a.r);c=Fm(a.r);i=c.J;j=f.J;i=(i-j|0)+1|0;k=BH(i);h=k.data;l=R(Bw,i);m=l.data;e=a.y;n=a.z;o=0;while(j<=c.J){b=B1(a.e.g,j);if(b.q.data.length>0){b=QN(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=ACM(k,o);h=Dc(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.J)f.V=V(0,f.V-I(b)|0);if(j==c.J){c.V=V(0,c.V-I(b)|0);Le(a,a.y-I(b)|0,0);}i=i+1|0;}f=EG(n,e);b=new RF;b.tq=a;Oz(a,p,0,1,h,f,b);}DN(a);return 1;}
function QN(a,b){var c,d,e,f;c=EO(0,I(a.el),Wf(b));if(!c)b=null;else{b=B(60);if(c<0){b=new BC;U(b);J(b);}if(c!=1){d=b.bQ.data.length;if(d&&c){e=BQ(Be(d,c));d=0;f=0;while(f<c){OR(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Lx(e);}else b=ASV;}}return b;}
function Oz(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BH(i);k=ASn(i).data;G_(j,c);c=0;l=k.length;if(c>l){f=new BC;U(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.g;o.cj=o.cj+1|0;p=R(GJ,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ADL(h[m],n[m],k[m],b[m],f.bA,f.bG);m=m+1|0;}BX(o.eX,p);c=0;while(c<i){b=e.data;I4(o,h[c],n[c],k[c],b[c]);g.lE(FO(h[c]),b[c]);c=c+1|0;}}
function ACc(a){var b,c,d,e,f,g,h,i;if(Dh(a.r))Gr(a);D5(B1(a.e.g,a.z));b=a.e.g;c=a.z;d=a.y;e=b.D;f=e.data;g=f[c];e=Dc(e,f.length+1|0);f=e.data;b.D=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DE(R(B5,0));b.D.data[c+1|0]=g;}else if(d==g.O){f[c]=g;f[c+1|0]=DE(R(B5,0));}else{f=(H7(g,d)).data;e=b.D.data;e[c]=f[0];e[c+1|0]=f[1];}Gk(b,c,d,0,B(221));DN(a);return Cz(a,a.z+1|0,0,0);}
function ABT(a){if(Dh(a.r))Gr(a);else Oo(a.e.g,a.z,a.y);GB(a);DN(a);return 1;}
function Xk(a){var b,c,d;if(Dh(a.r)){Gr(a);return 1;}b=a.y;if(!b&&!a.z)return 1;if(b){c=a.z;b=b-1|0;Oo(a.e.g,c,b);}else{c=a.z-1|0;b=E9(a.e.g,c);d=a.e.g;Km(d,c);Gk(d,c,E9(d,c),1,B(221));}DN(a);return Cz(a,c,b,0);}
function DG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eV)return 0;if(Dh(a.r))Gr(a);c=Lb(Ud(b,B(222),B(31)),B(221),(-1));d=c.data;b=a.e.g;e=a.z;f=a.y;WT(b,e,f,c);g=d.length;if(!g)h=ASV;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BQ(i+Be(g-1|0,I(B(221)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(221))){m=l+1|0;c[l]=L(B(221),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Lx(k);}Gk(b,e,f,0,h);e=a.z;m=(e+g|0)-1|
0;Cz(a,m,m!=e?I(d[g-1|0]):a.y+I(d[0])|0,0);EW(a);DN(a);return 1;}
function Gr(a){var b,c,d;b=DS(a.r);c=a.e.g;d=a.r;So(c,d,U6(c,d));Cz(a,b.J,b.V,0);EW(a);DN(a);}
function EW(a){var b;b=a.r;b.cJ=0;B0(b.bI,a.z,a.y);B0(a.r.by,a.z,a.y);}
function Po(a){return a.en.ll|0;}
function AAk(a,b){var c,d,e;c=a.cE.a;if(b<c){d=a.gX;d.a=c-b|0;d.b=DJ(a);d=a.W;e=a.ck;BB(d,e.b+a.cC|0,e.a+b|0,a.gX,a.d2.iN);}}
function AAV(a){HZ(a.eu,a.bi,a.ck.a,Dy(a),T7(a),a.ck.b+a.cE.b|0,Po(a));LH(a.eq,a.cf,a.ck.b+a.cC|0,DJ(a),a.gO,a.ck.a+Dy(a)|0,Po(a));}
function ABA(a){var b,c;b=OX(a.eu);c=OX(a.eq);if(!(!b&&!c)){CI(a.W,1);if(b)FL(a.eu,a.W);if(c)FL(a.eq,a.W);if(b)F4(a.eu,a.W);if(c)F4(a.eq,a.W);}}
function D2(a,b,c){return X(V(0,b),c);}
function Hl(a,b){var c,d,e,f,g;b=b.data;a.hm=1;a.hl=1;c=El(b[0]);d=Fx(b[1]);e=(El(b[2])).data[0];a.e.g=AAp(c,d);Ve(a,ABY(e));Gg(Cg(a),AUh);FS(Cg(a));f=JM(Ft(),a.ep);g=new M;O(g);G(Hs(G(g,B(223)),f),B(224));$rt_globals.console.info($rt_ustr(N(g)));}
function Ve(a,b){var c,d;c=Df(a.e);if(!D$(c,b)){d=new M;O(d);G(G(G(G(d,B(225)),c),B(226)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.ir=b;}}
function Cg(a){return a.dX.h_;}
function QM(a,b){var c,d,e,f,g;c=ES(b);d=new M;O(d);G(G(d,B(227)),c);$rt_globals.console.info($rt_ustr(N(d)));MM(Cg(a),ES(b));Cz(a,0,0,0);a.ep=Ft();a.hm=0;a.hl=0;a.e.g=AL7();Cz(a,0,0,0);c=ES(b);e=FP(c,46,I(c)-1|0);if(e!=(-1))c=Dt(c,e);f=!Bn(c,B(228))?5120:10240;c=new Wd;c.q3=a;c.q4=f;c.q5=b;d=b.eC;if(d!==null)Lo(c,I1(b,d.size));else{d=b.gg.getFile();g=new St;g.lJ=b;g.lK=c;b=new Sw;b.tm=c;d.then(Bk(g,"f"),Bk(b,"f"));}}
function Hd(a,b,c,d,e){if(G7(a,e))return 1;if(c&&d)return 1;if(c)a.bi=D2(a,a.bi+((Be(b,a.Z)*12|0)/10|0)|0,EI(a));else if(!d){H_(a,a.z+b|0,e);Sk(a);}return 1;}
function Ta(a,b,c,d){var e,f,g;if(G7(a,d))return 1;e=Ff(a);if(!c)f=a.y+b|0;else if(b>=0)f=GC(e,a.y);else{f=a.y;if(!f)f=(-1);else{c=HV(e,f);if(c>0&&e.c8.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.c8.data[c-1|0];}}if(f>e.O){if((a.z+1|0)<CA(a.e.g))Cz(a,a.z+1|0,0,d);}else if(f>=0)Di(a,f,d);else{b=a.z;if(b>0){g=(B1(a.e.g,b-1|0)).O;Cz(a,a.z-1|0,g,d);}}OL(a);return 1;}
function G7(a,b){if(Dh(a.r)&&!b){EW(a);GB(a);return 1;}if(!(b&&Dh(a.r)))EW(a);return 0;}
function Cz(a,b,c,d){a.y=c;return H_(a,b,d);}
function H_(a,b,c){a.z=EO(0,b,CA(a.e.g)-1|0);return Di(a,a.y,c);}
function Di(a,b,c){a.y=EO(0,b,(Ff(a)).O);a.gJ=a.dX.bE===0.0?0:GH(Ff(a),a.y,a.W.cq,a.co);KV(a);GB(a);if(c)a.r.cJ=1;J3(a.r,a.z,a.y);a.r.cJ=0;return 1;}
function Le(a,b,c){var d;d=Qy(a.r);Di(a,b,c);a.r=d;}
function GB(a){Sk(a);OL(a);}
function Sk(a){var b,c,d,e,f;b=a.bi;c=b+Dy(a)|0;d=a.z;e=a.Z;d=Be(d,e);f=d+e|0;if(d<(b+e|0))a.bi=D2(a,d-e|0,EI(a));else if(f>(c-e|0))a.bi=D2(a,(f-Dy(a)|0)+a.Z|0,EI(a));}
function OL(a){var b,c,d,e,f;b=C$(a.dX.bE*30.0);c=a.cf;d=c+DJ(a)|0;e=a.gJ;f=e+b|0;if(e<(c+b|0))a.cf=D2(a,e-b|0,F$(a));else if(f>(d-b|0))a.cf=D2(a,(f-DJ(a)|0)+b|0,F$(a));}
function Ss(a,b,c){var d,e,f,g,h,i,j,k,l;Ua(a);d=a.e.g;e=Ek(d.dM,c);if(e!==null)a.hM=Pn(d,e);if(e!==null)c=e;a:{f=Ek(d.d7,c);if(f!==null){c=BR(f);while(true){if(!B2(c))break a;g=BV(c);BX(a.hC,Pn(d,g));}}}h=b.bA;i=b.bG;b=a.dW;c=Df(a.e);d=GG(a.e);j=(Cm(b.n5)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.s6(c,d)){c=b.wj;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new Sr;b.v1=a;b.v2=d;b.vZ=h;b.v0=i;c.ry(d,h,i,b,a.gv);}}
function He(a,b){var c;Cz(a,b.bA,b.bG,0);c=GC(Ff(a),a.y);B0(a.r.by,a.z,c);B0(a.r.bI,a.z,a.y);}
function Fr(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.ck;e=c-d.b|0;f=EO(0,((b.a-d.a|0)+a.bi|0)/a.Z|0,CA(a.e.g)-1|0);g=V(0,(e-a.cC|0)+a.cf|0);b=B1(a.e.g,f);d=a.W.cq;h=a.co;if(!(b.dO!==null&&!b.fn))Ky(b,d,h);i=b.dO;e=b.q.data.length;if(!e)j=0;else if(g<=0)j=0;else{k=i.data;if(g>=k[e-1|0])j=b.O;else{l=SY(i,0,e,g);if(l<0)l=( -l|0)-1|0;if(l==b.q.data.length)j=b.O;else{i=VK(b,d,h,l);j=0;c=0;while(c<l){j=j+I(b.q.data[c].v)|0;c=c+1|0;}c=!l?0:k[l-1|0];e=k[l];l=0;a:{while(true){h=i.data;if(l>=h.length){m=e;break a;}m
=h[l];if(g<m)break;j=j+1|0;l=l+1|0;e=m;c=m;}}if(AUi){b=new M;O(b);S(G(S(G(S(G(b,B(229)),c),B(230)),g),B(231)),m);$rt_globals.console.info($rt_ustr(N(b)));n=j;$rt_globals.console.info(" pos = "+n);}if((g-c|0)>(m-g|0))j=j+1|0;}}}return EG(f,j);}
function Sh(a,b){var c;c=b.bA;a.z=c;a.y=b.bG;a.gJ=GH(B1(a.e.g,c),a.y,a.W.cq,a.co);KV(a);}
function Ff(a){return B1(a.e.g,a.z);}
function AMd(a,b,c){a.r.cJ=0;if(a.fN!==null)a.fN=null;return 1;}
function AOk(a,b,c){var d,e,f,g,h,i,j;if(!c){d=E4(a.eu,b.j,a.sv,1);a.fN=d;if(d!==null)return 1;d=E4(a.eq,b.j,a.sX,0);a.fN=d;if(d!==null)return 1;a:{Ij(a);d=b.j;e=Fr(a,d);f=OU(a.e.g,e.bA,e.bG);if(b.cg){g=Ka(a.dW,Df(a.e),GG(a.e));if(g!==null){h=a.e;c=e.bA;i=e.bG;j=new T3;j.uS=a;j.uR=d;g.ry(h,c,i,j,a.gv);}else{g=Ek(a.e.g.dM,f);if(g!==null){He(a,g);c=1;}else{g=Ek(a.e.g.d7,f);if(g!==null&&!D3(g)){if(g.i!=1){Rx(a.hZ,d,g,a);c=1;}else{He(a,Bs(g,0));c=1;}}else c=0;}if(c)break a;}}Sh(a,e);Ss(a,e,f);if(!b.bw){b=a.r;if
(!b.cJ)B0(b.bI,a.z,a.y);}b=a.r;b.cJ=1;J3(b,a.z,a.y);b=new T1;b.qm=a;a.fN=b;}}return 1;}
function AHM(a,b,c,d){var e,f,g;if(!c&&d==3){Pf(a.r,a.z);Wn(a.e_);Ij(a);return 1;}if(!c&&d==2){a:{c=(Fr(a,b.j)).bA;e=B1(a.e.g,c);c=GF(e,a.y);d=GC(e,a.y);b=TV(e,c);if((d-1|0)==e.O){B0(a.r.bI,a.z,Wf(e));B0(a.r.by,a.z,e.O);}else{if(b!==null){b=b.v;f=0;b:{while(true){g=b.bQ.data;if(f>=g.length)break;if(g[f]!=32){f=0;break b;}f=f+1|0;}f=1;}if(f){f=a.y;if(c==f){c=GF(e,c-1|0);d=GC(e,c);}else{if(d!=f){Pf(a.r,a.z);break a;}c=GF(e,d+1|0);d=GC(e,c);}}}B0(a.r.bI,a.z,c);a.r.cJ=1;Cz(a,a.z,d,0);a.r.cJ=0;}}Ij(a);return 1;}return 1;}
function AGa(a,b){var c,d,e,f,g,h,i,j;c=a.fN;if(c!==null){c.l(b);return 1;}c=a.dX.cp;if(Fc(a.eu,b.j,c))return 1;if(Fc(a.eq,b.j,c))return 1;d=a.ew;if(Ha(b.j,d.fv,d.eG)&&GX(c)?1:0)return 1;a:{d=b.j;e=a.ck;f=e.b+a.cC|0;g=e.a;h=DJ(a);i=Dy(a);j=d.b;if(f<=j&&j<(f+h|0)){f=d.a;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GX(c);if(b.cg){d=Fr(a,b.j);Wx(a.e.g,d);b=a.e.g;if(!M2(b.dM,d)&&!M2(b.d7,d)?0:1)return Du(c,B(163));}return Du(c,B(164));}
function ALc(a,b){var c,d,e,f;c=b.cg;if(c&&b.bm==65){c=CA(a.e.g)-1|0;d=E9(a.e.g,c);B0(a.r.bI,0,0);B0(a.r.by,CA(a.e.g)-1|0,d);return 1;}if(c&&b.bm==80){Jq(a);return 1;}if(!a.eV&&c&&b.bm==90){if(Dh(a.r))EW(a);b=a.e.g;b.cj=b.cj+1|0;e=b.eX;d=e.i;if(!d)e=null;else{f=(Ec(e,d-1|0)).data;e=Sg(b,f[0]);c=1;while(c<f.length){Sg(b,f[c]);c=c+1|0;}}if(e!==null){Cz(a,e.b,e.a,0);DN(a);}return 1;}if(!c&&!b.c1){if(Bn(b.dk,B(232))){DG(a,B(233));Di(a,a.y-1|0,0);c=1;}else if(Bn(b.dk,B(234))){DG(a,B(235));Di(a,a.y-1|0,0);c=1;}else if
(Bn(b.dk,B(43))){DG(a,B(236));Di(a,a.y-1|0,0);c=1;}else if(Bn(b.dk,B(237))){DG(a,B(238));Di(a,a.y-1|0,0);c=1;}else if(Bn(b.dk,B(239))){DG(a,B(240));Di(a,a.y-1|0,0);c=1;}else if(!Bn(b.dk,B(241)))c=0;else{DG(a,B(242));Di(a,a.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c1&&!b.cg)){d=b.bm;if(d>=48&&d<=57){c=d-48|0;e=a.k_.data[c];if(e!==null)e.s();c=1;break a;}}c=0;}if(c)return 1;d=b.bm;if(112<=d&&d<=123)c=1;else b:{switch(d){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(Zz(a,b))return 1;if(a.eV)c=0;else c:{switch(b.bm){case 8:break;case 9:c=!b.bw?ACY(a):AAE(a);break c;case 13:c=ACc(a);break c;case 46:c=ABT(a);break c;default:c=0;break c;}c=Xk(a);}if(c)return 1;if(b.cg&&b.bm==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(b.bm==27)return 0;return I(b.dk)>0&&DG(a,b.dk)?1:0;}
function VI(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bn(B(136),Df(a.e))){b=Cg(a);c=new Mt;c.pq=a;d=R(C,3);e=d.data;e[0]=F8(a.e.g);f=Kn(a);g=T4(a);h=V(0,f-100|0);f=X(CA(a.e.g)-1|0,g+100|0);i=BH(3);j=i.data;j[0]=FY(a.e.g,h);k=a.e.g;l=0;f=X(f+1|0,k.D.data.length);m=0;while(m<f){l=l+E9(k,m)|0;if(m!=(k.D.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.g.cQ;k=Cl();Vs(n,n.cz,k);i=BH(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bs(k,m);h=p+1|0;o[p]=q.bF;l=h+1|0;o[h]=q.bK;p=l+1|0;o[l]=q.eP;m=m+1|0;}e[2]
=i;C0(b,c,B(243),d);}}
function Jq(a){var b,c,d,e;b=Z6(Df(a.e));if(b!==null){a.ep=Ft();c=Cg(a);d=new VY;d.pB=a;e=R(C,1);e.data[0]=F8(a.e.g);C0(c,d,b,e);}}
function RE(a){var b,c,d,e,f,g,h;b=a.e.g.cQ;c=Oq(b,b.cz);if(c===null)return;if(Bn(B(164),Df(a.e)))OA(a.e.g);a:{d=EU([CU(c),C4(c),c.b0.eP]);e=F8(a.e.g);f=BH(1);g=Df(a.e);h=(-1);switch(KB(g)){case 3401:if(!Bn(g,B(244)))break a;h=3;break a;case 98723:if(!Bn(g,B(245)))break a;h=2;break a;case 3254818:if(!Bn(g,B(136)))break a;h=1;break a;case 3556653:if(!Bn(g,B(164)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Cg(a);c=new SF;c.o1=a;C0(b,c,B(246),H(C,[e,f,d]));}
function Kr(a,b,c){var d,e,f,g,h,i;if(c&&a.eV)return 0;d=DS(a.r);e=d.J;if(Dh(a.r)){f=a.e.g;g=a.r;h=U6(f,g);if(c)So(f,g,h);if(c){Cz(a,d.J,d.V,0);EW(a);DN(a);}}else{h=E1(Ez(a.e.g.D.data[e]),B(221));i=X(CA(a.e.g)-1|0,e);B0(a.r.by,i,0);if(e>=(CA(a.e.g)-1|0))B0(a.r.by,i,E9(a.e.g,i));else B0(a.r.bI,i+1|0,0);if(c)Gr(a);else Cz(a,e,0,0);}b.l(h);return 1;}
function Zz(a,b){var c,d,e,f;a:{switch(b.bm){case 33:c=b.cg?H_(a,H5(a.bi,a.Z),b.bw):Hd(a,2-Vg(Dy(a),a.Z)|0,0,b.c1,b.bw);break a;case 34:c=!b.cg?Hd(a,Vg(Dy(a),a.Z)-2|0,0,b.c1,b.bw):H_(a,((a.bi+Dy(a)|0)/a.Z|0)-1|0,b.bw);break a;case 35:if(!G7(a,b.bw)&&!Di(a,(Ff(a)).O,b.bw)){c=0;break a;}c=1;break a;case 36:if(!G7(a,b.bw)&&!Di(a,0,b.bw)){c=0;break a;}c=1;break a;case 37:c=b.cg;if(c&&b.c1){Ij(a);d=a.e_;e=d.cV;if(e<=0)d=null;else{f=d.eh.data;c=e-1|0;d.cV=c;d=f[c];}if(d===null)c=0;else{Cz(a,Ir(d),K2(d),0);a.r=Qy(d.lp);c
=1;}break a;}c=Ta(a,(-1),c,b.bw);break a;case 38:c=Hd(a,(-1),b.cg,b.c1,b.bw);break a;case 39:c=b.cg;if(c&&b.c1){d=a.e_;c=d.cV;if(c==(d.ei-1|0))d=null;else{f=d.eh.data;c=c+1|0;d.cV=c;d=f[c];}if(d===null)c=0;else{Cz(a,Ir(d),K2(d),0);a.r=Qy(d.lp);c=1;}break a;}c=Ta(a,1,c,b.bw);break a;case 40:c=Hd(a,1,b.cg,b.c1,b.bw);break a;default:}c=0;}if(c&&b.bw)B0(a.r.by,a.z,a.y);if(c)Ss(a,EG(a.z,a.y),OU(a.e.g,a.z,a.y));return c;}
function Ij(a){var b,c,d,e,f,g,h;b=a.e_;c=b.cV;b=c<0?null:b.eh.data[c];if(b!==null&&a.z==Ir(b)&&a.y==K2(b))return;d=a.e_;b=new II;c=a.z;e=a.y;f=a.r;b.kI=EG(c,e);g=Qy(f);b.lp=g;g.cJ=0;e=d.cV;h=d.ei;if(e==(h-1|0))L8(d,b);else{c=e+1|0;while(c<h){Wn(d);c=c+1|0;}L8(d,b);}d.cV=d.cV+1|0;}
function DN(a){a.e.g.oP=IR(Cg(a));}
function Ua(a){a.hM=null;G9(a.hC);}
function Z6(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(KB(b)){case 3401:if(!Bn(b,B(244)))break a;c=2;break a;case 98723:if(!Bn(b,B(245)))break a;c=1;break a;case 3254818:if(!Bn(b,B(136)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(247);break b;case 2:b=B(248);break b;default:b=null;break b;}b=B(249);}}return b;}
var QZ=F();
function AKm(a,b){return ACC(b);}
function Q3(){C.call(this);this.ti=null;}
function AHL(a,b){return ACL(a.ti,b);}
function Jr(){var a=this;C.call(a);a.jq=null;a.n_=null;a.lP=null;}
function AUj(a,b,c){var d=new Jr();Uv(d,a,b,c);return d;}
function Uv(a,b,c,d){a.jq=b.bV;a.n_=c;a.lP=d;}
function AM7(a,b){var c,d;if(b.cg&&b.bm==79){c=a.n_;if(c!==null&&b.bw)U4(a.jq,c);else K8(a.jq,a.lP);d=1;}else d=0;return d;}
function Q2(){C.call(this);this.lN=null;}
function AEf(a,b){QM(a.lN,b);}
function Q1(){C.call(this);this.oO=null;}
function AP1(a,b){return Md(a.oO,b);}
function Q0(){C.call(this);this.t2=null;}
function ALG(a,b,c){return Kr(a.t2,b,c);}
function Q6(){C.call(this);this.mN=null;}
function APz(a){var b,c;b=a.mN.cD;BI(b);c=new MQ;c.tV=b;return c;}
function Q5(){C.call(this);this.rQ=null;}
function AJw(a,b,c,d){var e,f;b=a.rQ.cD;e=C$((b.Z*4|0)*d/150.0);f=C$(c);b.bi=D2(b,b.bi+e|0,EI(b));b.cf=D2(b,b.cf+f|0,F$(b));return 1;}
function Q4(){C.call(this);this.sI=null;}
function AMH(a,b){b=b;return XX(a.sI,b);}
function BW(){var a=this;C.call(a);a.bh=0.0;a.bt=0.0;a.be=0.0;a.bu=0.0;}
function AR$(a){var b=new BW();AAQ(b,a);return b;}
function CD(a,b,c,d,e){a.bh=b;a.bt=c;a.be=d;a.bu=e;}
function AAQ(a,b){a.bh=b.bh;a.bt=b.bt;a.be=b.be;a.bu=b.bu;}
function BF(a,b){a.bh=b.bh;a.bt=b.bt;a.be=b.be;a.bu=b.bu;return a;}
function APC(a,b){var c;if(a===b)return 1;a:{if(b!==null&&Cy(a)===Cy(b)){b=b;if(b.bh===a.bh&&b.bt===a.bt&&b.be===a.be&&b.bu===a.bu?1:0){c=1;break a;}}c=0;}return c;}
var Cx=F(0);
var ATT=null;var AT1=null;var ATP=null;var ATQ=null;var ATU=null;var ATV=null;var ATW=null;var AT0=null;var AT7=null;var AT2=null;var AT3=null;var ATX=null;var AT4=null;var ATY=null;var AT5=null;function Do(){Do=Bq(Cx);ALi();}
function ALi(){ATT=CF(187);AT1=CF(0);ATP=CF(43);ATQ=Br(B(250));ATU=CF(85);ATV=Cv(60,63,65);ATW=Cv(33,66,131);AT0=Cv(255,255,255);AT7=Cv(0,0,0);AT2=Cv(212,212,212);AT3=Cv(166,214,255);ATX=Br(B(251));AT4=Br(B(252));ATY=Br(B(253));AT5=Br(B(252));}
function H3(){var a=this;C.call(a);a.N=null;a.x=null;a.bM=null;a.bW=null;}
function AJn(){var a=new H3();Q9(a);return a;}
function RC(a,b,c,d){var e=new H3();AGu(e,a,b,c,d);return e;}
function Q9(a){a.N=new Z;a.x=new Z;a.bM=new BW;a.bW=new BW;}
function AGu(a,b,c,d,e){a.N=new Z;a.x=new Z;a.bM=new BW;a.bW=new BW;O7(a,b,c,d,e);}
function O7(a,b,c,d,e){Y(a.N,b,c);Y(a.x,d,e);}
function Li(a){var b;b=a.x;return Be(b.b,b.a)?0:1;}
function Eh(a,b){return Ha(b,a.N,a.x);}
function Tt(a,b,c,d){var e;e=a.N;BB(b,e.b+c|0,e.a+d|0,a.x,a.bM);}
function S7(a,b,c,d,e,f){var g,h,i,j;g=a.N;d=g.b+d|0;e=g.a+e|0;g=a.x;h=a.bW;i=a.bM;Kt(b,b.g2);Ls(b.g2,b.bx,d,e,g,b.dn);Tj(b.g2,b.bx,c);g=b.g2;j=b.bx;HL(j,g.tJ,h);HL(j,g.tH,i);c=g.pj;j.uniform2f(c,f,0.0);Kh(b);}
function ABN(){H3.call(this);this.cM=null;}
function AJS(){var a=new ABN();AED(a);return a;}
function E3(a,b,c,d){var e=new ABN();AJR(e,a,b,c,d);return e;}
function AED(a){Q9(a);a.cM=new BW;}
function AJR(a,b,c,d,e){Q9(a);a.cM=new BW;O7(a,b,c,d,e);}
function GK(a){var b,c;b=a.x;c=a.cM;Y(b,c.be-c.bh|0,c.bu-c.bt|0);}
function F9(a,b){Hi(a,0,0,Cb(b),C3(b));}
function Hi(a,b,c,d,e){CD(a.cM,b,c,d,e);}
function Dw(a,b,c,d,e,f){var g;g=a.N;Ex(b,g.b+d|0,g.a+e|0,a.x,a.cM,c,a.bM,a.bW,f);}
function F1(a,b){BF(a.bM,b);}
function Hf(a,b){BF(a.bW,b);}
function ZG(){var a=this;C.call(a);a.du=null;a.kD=0.0;a.gs=0.0;a.f8=0;}
function AKY(){var a=new ZG();APj(a);return a;}
function APj(a){var b;b=RC(0,0,2,20);a.du=b;a.kD=0.5;a.gs=0.0;Hg(187,187,187,255,b.bM);}
function RB(a){return a.du.x.a;}
function Pr(a){return a.du.x.b;}
function RP(a,b){var c,d;a:{c=a.f8;if(b>a.gs)while(true){d=a.gs+a.kD;a.gs=d;a.f8=a.f8?0:1;if(b>d)continue;else break a;}}return a.f8==c?0:1;}
function OZ(a,b,c){Y(a.du.N,b,c);}
function Ri(a,b){a.gs=b+a.kD*1.25;a.f8=1;}
function T_(a,b,c){if(a.f8)Tt(a.du,b,c.b,c.a);}
function SL(){C.call(this);this.eK=null;}
function AL5(a,b){var c,d,e,f,g,h,i;c=a.eK;d=c.je;if(d!==null){e=c.cU.N;f=e.b;g=b.j;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.je=g;}d=b.j;f=d.b;c=c.f5;e=c.x;h=f-e.b|0;f=d.a-e.a|0;Y(c.N,h,f);c=a.eK;d=c.bb.bV;b=b.j;f=0;a:{while(true){i=c.gC.data;if(f>=i.length)break;if(Eh(i[f],b)){b=c.ud.data[f];break a;}f=f+1|0;}b=null;}Gg(d,b);return 1;}
function ANx(a,b,c,d){if(!c&&d==2){b=a.eK;VN(b,b.cU);}return 1;}
function AJ2(a,b,c){var d,e;d=By();e=new M;O(e);S(G(e,B(254)),c);Bu(d,N(e));if(!c){d=b.j;b=a.eK;b.je=!Eh(b.cU,d)?null:d;OZ(a.eK.gP,d.b,d.a);b=a.eK;Ri(b.gP,IR(b.bb.bV));}return 1;}
function AGl(a,b,c){var d;b=By();d=new M;O(d);S(G(d,B(255)),c);Bu(b,N(d));return 1;}
function QD(){C.call(this);this.t3=null;}
function ALZ(a,b){return N9(a.t3,b);}
function QC(){C.call(this);this.n2=null;}
function AOt(a,b){return N9(a.n2,b);}
function QF(){C.call(this);this.v4=null;}
function AOV(a,b,c){var d,e;Bu(By(),B(256));d=!c?B(257):B(28);e=new M;O(e);G(G(G(e,B(258)),d),B(259));Vf(b,N(e));return 1;}
function QE(){C.call(this);this.uq=null;}
function AOU(a){Bu(By(),B(260));}
function QB(){C.call(this);this.vw=null;}
function AKs(a,b){Bu(By(),B(261));return 1;}
function QA(){C.call(this);this.sr=null;}
function AH8(a,b,c,d){var e,f,g;b=a.sr;e=( -d|0)/10|0;b=b.cU;f=b.x;f.b=f.b+e|0;f.a=f.a+e|0;b=b.N;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function If(){var a=this;BW.call(a);a.fQ=0;a.fT=0;a.fR=0;a.fS=0;}
function CF(a){var b=new If();APs(b,a);return b;}
function Cv(a,b,c){var d=new If();AGd(d,a,b,c);return d;}
function Br(a){var b=new If();ANu(b,a);return b;}
function AUk(a,b,c,d){var e=new If();PE(e,a,b,c,d);return e;}
function CT(a){var b=new If();NR(b,a);return b;}
function APs(a,b){PE(a,b,b,b,255);}
function AGd(a,b,c,d){PE(a,b,c,d,255);}
function ANu(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.fQ=Ik(L(b,1))*17|0;a.fT=Ik(L(b,2))*17|0;a.fR=Ik(L(b,3))*17|0;a.fS=255;}else{a.fQ=KP(L(b,1),L(b,2));a.fT=KP(L(b,3),L(b,4));a.fR=KP(L(b,5),L(b,6));a.fS=I(b)!=9?255:KP(L(b,7),L(b,8));}Hg(a.fQ,a.fT,a.fR,a.fS,a);return;}}
function PE(a,b,c,d,e){a.fQ=b;a.fT=c;a.fR=d;a.fS=e;Hg(b,c,d,e,a);}
function NR(a,b){a.fQ=b.fQ;a.fT=b.fT;a.fR=b.fR;a.fS=b.fS;BF(a,b);}
function Ik(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function KP(b,c){return (16*Ik(b)|0)+Ik(c)|0;}
function T0(){var a=this;C.call(a);a.lh=null;a.jD=null;}
function Yt(){var a=this;C.call(a);a.eO=null;a.b6=null;a.dS=null;a.fV=null;a.kQ=null;a.bY=null;a.fh=null;a.cy=0;a.eo=0;a.k9=0;a.fr=0;a.fj=0;a.iP=null;a.jd=null;a.sg=null;}
function XU(){var a=new Yt();AOW(a);return a;}
function AOW(a){a.b6=AJn();a.dS=new Z;a.fV=new Z;a.bY=AUl;a.fr=(-1);}
function Kc(a,b){SC(a);a.bY=b;}
function Hz(a,b){a.eO=b;SC(a);}
function HH(a,b){var c,d,e,f,g;a.kQ=b.iF;c=b.X.fk;BF(a.b6.bM,c);c=b.k$;BF(a.b6.bW,c);d=0;while(true){e=a.bY.data;if(d>=e.length)break;f=e[d];c=b.X;f.iU=c;f=f.c6;g=c.iY;c=c.fk;BF(f.bM,g);BF(f.bW,c);if(a.fr==d)IU(a.bY.data[d],1);d=d+1|0;}}
function Sn(a){a.fh=CX(a.fh,null);Y(a.dS,0,0);a.bY=AUl;a.fr=(-1);Y(a.b6.x,0,0);}
function GE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=H8(b);d=b.bE;BI(a.eO);Cu(c,a.eO);e=Jo(a.eO,1.25);f=0;a.cy=B9(2.0,d);a.eo=B9(3.0,d);a.k9=B9(12.0,d);g=0;h=a.bY.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=PP(c,l.jW);n=a.k9;n=(n+m|0)+n|0;f=V(f,n);b=l.c6;l=b.N;l.b=g;l.a=0;l=b.x;l.b=n;l.a=e;CD(b.cM,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.dS;b.b=g;b.a=e;b=a.b6.x;n=a.fj;if(!n){m=a.cy;m=(g+m|0)+Be(m,a.bY.data.length)|0;}else m=(f+(a.cy*2|0)|0)+(a.eo*2|0)|0;b.b=m;if(!n)e=e+(a.cy*2|0)|0;else{n=a.cy;e=(Be(e+n|0,a.bY.data.length)
+n|0)+(a.eo*2|0)|0;}b.a=e;}
function Jh(a,b,c){var d,e,f,g,h,i,j;Y(a.b6.N,b,c);d=a.cy+a.eo|0;e=a.bY.data;f=e.length;g=0;h=d;while(g<f){i=e[g].c6;j=i.N;j.b=b+d|0;j.a=c+h|0;if(!a.fj){if(!i.x.b)ACX();d=d+(i.x.b+a.cy|0)|0;}else{if(!i.x.a)ACX();h=h+(i.x.a+a.cy|0)|0;}g=g+1|0;}}
function ACX(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function D0(a){var b,c;b=a.dS;if(b.b&&b.a)return a.b6.x;c=new Bm;Bl(c,B(262));J(c);}
function SC(a){Y(a.dS,0,0);}
function I2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cT;if(!a.bY.data.length)return;a:{if(a.fh!==null){d=a.dS;if(Be(d.b,d.a))break a;}d=a.dS;if(!Be(d.b,d.a))GE(a,b);d=a.dS;e=d.b;f=d.a;if(!Be(e,f))return;d=CJ(c,e,f);Cu(d,a.eO);g=Jo(a.eO,0.125);h=a.eO;i=h.db;j=g+i-(i+h.dT)/16.0;k=a.bY.data;f=k.length;l=0;while(l<f){h=k[l];Cf(d,h.jW,h.c6.cM.bh+a.k9,j);l=l+1|0;}h=CX(a.fh,CR(c));a.fh=h;CL(h,d);FD(d);}if(!Li(a.b6)){d=a.b6;ABW(c,d.x,d.N,d.bW,a.cy,a.fV);d=a.b6;h=d.x;m=d.N;d=d.bM;e=a.cy;n=a.fV;n.b=(h.b-e|0)-e|0;n.a=(h.a
-e|0)-e|0;BB(c,m.b+e|0,m.a+e|0,n,d);if(a.fj){d=a.b6;ABd(c,d.x,d.N,0,0,P7(a.kQ,b.bE),a.kQ.lB,a.fV);}}k=a.bY.data;l=k.length;o=0;while(o<l){Dw(k[o].c6,c,a.fh,0,0,0.0);o=o+1|0;}b:{if(a.fj){k=a.bY.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].c6;m=a.fV;e=(a.b6.x.b-(a.cy*2|0)|0)-(a.eo*2|0)|0;b=h.x;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.N;BB(c,d.b+b.b|0,d.a,m,h.bW);}o=o+1|0;}}}}
function JE(a,b,c){var d,e,f,g,h,i;d=Eh(a.b6,b);e=!d?(-1):T6(a,b);f=a.fr;if(f!=e){if(f>=0){g=a.bY.data[f];IU(g,0);if(a.sg!==null){f=a.fr;h=By();g=Ct(g);i=new M;O(i);G(G(S(G(i,B(263)),f),B(264)),g);Bu(h,N(i));}}if(e>=0){h=a.bY.data[e];IU(h,1);g=a.jd;if(g!==null)g.nr(b,e,h);}a.fr=e;}return d&&GX(c)?1:0;}
function Jv(a,b,c,d){var e,f;e=T6(a,b);if(e>=0){f=a.bY.data[e];if(!LM(f))f.tW.s();}return 1;}
function T6(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bY.data;if(c>=d.length)return (-1);e=d[c].c6;if(Eh(e,b))return c;if(a.fj){f=e.N;g=f.b;e=e.x;h=e.b;g=g+h|0;i=f.a;f=a.fV;f.b=(a.b6.x.b-(a.cy*2|0)|0)-h|0;f.a=e.a;if(X5(b,g,i,f))break;}c=c+1|0;}return c;}
function RI(a){a.fj=1;}
function XB(){var a=this;C.call(a);a.cr=null;a.b5=null;a.eW=null;a.iC=null;a.gQ=null;a.h7=null;}
function L6(a){var b=new XB();AE9(b,a);return b;}
function AE9(a,b){a.b5=Cl();a.h7=AUm;a.cr=b;Ba(b.dv,a);}
function Iq(a,b){a.gQ=b;b=BR(a.b5);while(B2(b)){HH(BV(b),a.gQ);}}
function F2(a,b,c,d){var e,f;e=a.cr;f=e.bL;if(Be(f.b,f.a)&&e.bE!==0.0){if(a.eW!==null&&!Dz(a)){a.h7=d;a.iC=Gy(a.cr,a.eW);e=Sx(a,b,c,null);b=new RX;b.lO=a;e.iP=b;WK(a.cr,a);return;}b=new BC;U(b);J(b);}c=new DO;Bl(c,B(265));J(c);}
function DA(a){var b;if(Dz(a)){b=a.cr;if(b.ef===a)b.ef=null;Sl(a,null);a.h7.s();a.h7=AUm;}}
function Sx(a,b,c,d){var e,f,g,h;e=XU();RI(e);Kc(e,c.f7());HH(e,a.gQ);Hz(e,a.iC);GE(e,a.cr);if(d===null)f=b.b;else{g=b.b;f=a.cr.bL.b<((g+(D0(d)).b|0)+(D0(e)).b|0)?g-(D0(e)).b|0:(g+(D0(d)).b|0)-d.eo|0;}h=b.a;b=a.cr.bL;Jh(e,V(0,X(f,b.b-(D0(e)).b|0)),V(0,X(h,b.a-(D0(e)).a|0)));b=new Og;b.lW=a;b.lX=e;e.jd=b;BX(a.b5,e);return e;}
function AFj(a,b,c){var d,e;a.iC=Gy(a.cr,a.eW);d=BR(a.b5);while(B2(d)){e=BV(d);Hz(e,a.iC);GE(e,a.cr);}}
function HT(a){var b,c;if(D3(a.b5))return;CI(a.cr.cT,1);b=0;while(true){c=a.b5;if(b>=c.i)break;I2(Bs(c,b),a.cr);b=b+1|0;}}
function JP(a,b){var c,d;c=0;d=a.b5.i-1|0;a:{while(d>=0){c=JE(Bs(a.b5,d),b.j,a.cr.cp);if(c)break a;d=d+(-1)|0;}}return c;}
function IM(a,b,c,d){var e,f;e=0;f=a.b5.i-1|0;a:{while(f>=0){e=Jv(Bs(a.b5,f),b.j,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jd(a,b,c){var d,e,f,g;d=0;e=a.b5.i-1|0;a:{while(e>=0){f=Bs(a.b5,e);g=b.j;d=Eh(f.b6,g);if(!d&&!Li(f.b6)){f=f.iP;if(f!==null)f.s();}if(d)break a;e=e+(-1)|0;}}return d;}
function ADP(a,b){var c;if(!Dz(a))return 0;a:{switch(b.bm){case 27:DA(a);c=1;break a;default:}c=0;}return c;}
function Sl(a,b){var c,d;c=a.b5.i-1|0;a:{while(true){if(c<0)break a;d=Bs(a.b5,c);if(b===d)break;Ec(a.b5,c);Sn(d);c=c+(-1)|0;}}}
function Dz(a){return a.b5.i<=0?0:1;}
function R$(){C.call(this);this.sz=null;}
function AMr(a,b){var c;c=a.sz;if(b.bm==32)Sn(c.cu);return 0;}
function Sb(){C.call(this);this.rl=null;}
function ADs(a,b){var c,d,e,f;b=b;c=a.rl;Bu(By(),B(266));if(!Dz(c.dI)){d=c.dI;b=b.j;e=MS(4);f=new Uk;f.w5=c;F2(d,b,e,f);}return 1;}
function ACA(){var a=this;C.call(a);a.h0=null;a.hn=0.0;}
function Fl(a,b){var c=new ACA();ADj(c,a,b);return c;}
function ADj(a,b,c){a.h0=b;a.hn=c;}
function APY(a,b){if(a===b)return 1;if(b!==null&&Cy(a)===Cy(b)){b=b;return a.hn===b.hn&&D$(a.h0,b.h0)?1:0;}return 0;}
function Kj(){var a=this;C.call(a);a.nC=null;a.wo=null;a.tS=null;a.k$=null;a.X=null;a.iF=null;}
function AUn(a,b,c,d,e,f){var g=new Kj();RQ(g,a,b,c,d,e,f);return g;}
function Fj(){var b,c,d,e,f,g;b=new Kj;c=new ET;Do();d=ATQ;e=ATU;EF();F6(c,d,e,d,AUb,AT9);f=new ET;d=ATQ;e=ATU;g=AUb;F6(f,d,e,d,g,g);RQ(b,c,f,Xm(),Br(B(267)),Xm(),AFt(1,0.125));return b;}
function RQ(a,b,c,d,e,f,g){a.nC=b;a.wo=c;a.tS=d;a.k$=e;a.X=f;a.iF=g;}
var R_=F();
function AHR(a){Bu(By(),B(268));}
var R9=F();
function ANN(a){Bu(By(),B(269));}
function C5(){var a=this;C.call(a);a.c6=null;a.tW=null;a.iU=null;a.jP=null;a.jW=null;}
function ACe(a,b,c){var d=new C5();JV(d,a,b,c);return d;}
function ARD(a,b,c,d){var e=new C5();ZQ(e,a,b,c,d);return e;}
function JV(a,b,c,d){ZQ(a,b,c,d,null);}
function ZQ(a,b,c,d,e){var f;f=AJS();a.c6=f;a.jW=c;a.iU=d;a.tW=b;BF(f.bM,d.iY);BF(a.c6.bW,d.fk);a.jP=e;}
function LM(a){return a.jP===null?0:1;}
function IU(a,b){BF(a.c6.bW,!b?a.iU.fk:a.iU.s4);}
function ZY(){var a=this;C.call(a);a.cw=null;a.gZ=null;a.qq=0;}
function ACR(){var a=new ZY();AJt(a);return a;}
function AJt(a){a.cw=Cl();}
function Ii(a,b){Ql(a.cw,0,b);}
function Jt(a,b){U2(a.cw,b);}
function Iv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cw.i-1|0;while(c>=0){d=Bs(a.cw,c);d.p.ex(b);e=d.P;f=d.dP;if(!K5(e)){if(!ST(e)&&!(!e.gi&&e.cR!==null)){e.gi=0;PV(e);g=e.dx;h=(g.db+g.dT+5.0)/10.0;i=Cs(e.gt,e.il);g=b.cq;j=e.dx;k=e.gw;l=h*2.0;Cu(g,j);m=i+J7(g,k,l)|0;e.hg=m;n=X(m,e.n.b);if(n){g=CJ(b,n,e.n.a);Cu(g,e.dx);j=e.gw;l=i;h=l+h;k=e.dx;o=k.db;Cf(g,j,h,l+o-(o+k.dT)/16.0);j=e.cR;if(j===null){j=CR(b);e.cR=j;}CL(j,g);FD(g);CD(e.k2,0.0,0.0,Cb(e.cR),C3(e.cR));}}g=f.X.fk;j=e.cR;if(j===null)Ou(e,b,0,e.n.b,g);else
{i=Cb(j);f=f.X.iY;j=e.t;m=j.b;n=j.a;j=e.cR;Ex(b,m,n,j.e3,e.k2,j,f,g,0.0);m=e.n.b;if(i<m)Ou(e,b,i,m-i|0,g);}}CI(b,1);i=Cs(d.L,2.0);m=K5(d.P);f=d.L;e=f.jH;f=f.nM;p=m?0:d.P.n.a;g=d.p.n;Y(f,g.b,g.a+p|0);ABW(b,f,!m?d.P.t:d.p.t,d.dP.k$, -i|0,e);f=d.p;ABd(b,f.n,f.t,i,p,P7(d.dP.iF,d.L.bE),d.dP.iF.lB,e);c=c+(-1)|0;}}
function X_(a,b){var c,d,e,f;c=a.gZ;if(c!==null){c.l(b);return 1;}d=0;while(true){c=a.cw;if(d>=c.i)break;a:{b:{e=Bs(c,d);if(!ABo(e,b.j)){if(!Fo(e.p,b.j))break b;if(!e.p.bX(b)&&!Du(e.L.cp,null))break b;}f=1;break a;}f=0;}if(f)return 1;d=d+1|0;}return 0;}
function ZX(a,b,c,d){var e,f,g;e=0;while(true){f=a.cw;if(e>=f.i)break;g=Bs(f,e);if(Fo(g.p,b.j)&&g.p.cm(b,c,d)?1:0)return 1;e=e+1|0;}return 0;}
function Y6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;if(a.gZ!==null)return 1;d=0;while(true){e=a.cw;if(d>=e.i)break;a:{f=Bs(e,d);if(!c){e=b.j;if(!K5(f.P)&&Fo(f.P,e)){g=f.p.t;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.P.t;i=e.b-i|0;k=e.a-k|0;g=new Z;e=new Qw;e.sO=f;e.sP=i;e.sM=k;e.sN=g;e.sK=h;e.sL=j;}else{h=Cs(f.L,7.0);i=Cs(f.L,25.0);j=L9(f,e.a,h);k=UI(f,e.b,h);l=TR(f,e.b,i);m=QO(f,e.a,i);n=k&&OE(f,e.a,h)?1:0;o=j&&Nn(f,e.b,h)?1:0;i=j&&SG(f,e.b,h)?1:0;h=k&&Pl(f,e.a,h)?1:0;if(n){if(l<0)e=TB(f,e);else if(l>0)e=Tc(f,
e);else{g=new Z;p=new Z;h=e.a;e=f.p;j=e.t.a;i=e.n.a;e=new TW;e.rV=f;e.rT=h;e.rU=j;e.rX=i;e.rZ=p;e.rW=g;}}else if(o){if(m<0)e=TB(f,e);else if(m>0)e=Ob(f,e);else{g=new Z;p=new Z;h=e.b;e=f.p;i=e.t.b;j=e.n.b;e=new WE;e.p4=f;e.p3=h;e.p2=i;e.p1=j;e.p0=p;e.pZ=g;}}else if(i){if(m<0)e=Tc(f,e);else if(m>0)e=NA(f,e);else{g=new Z;h=e.b;i=f.p.n.b;e=new Vl;e.me=f;e.mf=h;e.mg=i;e.mh=g;}}else if(!h)e=null;else if(l<0)e=Ob(f,e);else if(l>0)e=NA(f,e);else{g=new Z;h=e.a;i=f.p.n.a;e=new LE;e.m5=f;e.m4=h;e.m7=i;e.m6=g;}}if(e!==
null)break a;}e=f.p.im(b,c);if(e===null)e=!Fo(f.p,b.j)?null:AUo;}if(e!==null){a.gZ=e;a.qq=c;return 1;}d=d+1|0;}return 0;}
function ACQ(a,b,c){var d,e;if(c==a.qq&&a.gZ!==null){a.gZ=null;return 1;}d=0;while(true){e=a.cw;if(d>=e.i)break;if((Bs(e,d)).p.cG(b,c))return 1;d=d+1|0;}return 0;}
function Kv(a,b,c,d){var e,f;e=0;while(true){f=a.cw;if(e>=f.i)break;if((Bs(f,e)).p.cY(b,c,d))return 1;e=e+1|0;}return 0;}
function AOO(a,b,c){var d,e,f;d=0;while(true){e=a.cw;if(d>=e.i)break;f=Bs(e,d);e=f.p;e.iq(e.t,e.n,c);e=f.P;if(e.gc!==null){e.dx=null;e.hg=0;e.gi=1;}Jl(f);d=d+1|0;}}
function Nu(a,b){var c,d,e;c=0;d=0;while(true){e=a.cw;if(d>=e.i)break;Bs(e,d);c=0|c;d=d+1|0;}return c;}
function O6(a,b,c){var d;d=0;while(true){b=a.cw;if(d>=b.i)break;Bs(b,d);d=d+1|0;}}
function W5(){C.call(this);this.uC=null;}
function AI3(a,b){return b.g3&&b.bm==32?1:0;}
function W6(){C.call(this);this.sy=null;}
function AKr(a,b){var c,d,e,f,g,h;b=b;c=a.sy;if(!Dz(c.e$)){d=c.e$;b=b.j;e=R(C5,1);f=e.data;g=new C5;h=new VV;h.m$=c;JV(g,h,B(270),d.gQ.X);f[0]=g;F2(d,b,FG(e),AUm);}return 1;}
var AAJ=F();
function Y5(b){var c,d;c=CJ(b,250,64);FQ(c,B(167),25.0);KI(c,187,187,187);Cf(c,B(271),0.0,24.0);Cf(c,B(271),0.25,56.0);d=CR(b);CL(d,c);FD(c);return d;}
function XT(b){var c;c=new UZ;c.gf=b;return c;}
function W8(){C.call(this);this.pg=null;}
function AKH(a,b,c,d){return Kv(a.pg,b,c,d);}
var Vc=F(0);
var G8=F(0);
var EC=F();
function D3(a){return a.i?0:1;}
function Hm(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=TH(HG(Cy(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BR(a);while(B2(f)){g=b.data;h=e+1|0;g[e]=BV(f);e=h;}return b;}
var L$=F(0);
function FU(){EC.call(this);this.cl=0;}
function BR(a){var b;b=new MN;b.gj=a;b.lw=a.cl;b.hX=a.m_();b.fJ=(-1);return b;}
function Ps(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(D$(b,Bs(a,d)))break;d=d+1|0;}return d;}
var HS=F(0);
function M7(){var a=this;FU.call(a);a.b9=null;a.i=0;}
function Cl(){var a=new M7();AG_(a);return a;}
function AUp(a){var b=new M7();L1(b,a);return b;}
function AG_(a){L1(a,10);}
function L1(a,b){a.b9=R(C,b);}
function IJ(a,b){var c,d;c=a.b9.data.length;if(c<b){d=c>=1073741823?2147483647:V(b,V(c*2|0,5));a.b9=Dc(a.b9,d);}}
function Bs(a,b){Iy(a,b);return a.b9.data[b];}
function ALj(a){return a.i;}
function BX(a,b){var c,d;IJ(a,a.i+1|0);c=a.b9.data;d=a.i;a.i=d+1|0;c[d]=b;a.cl=a.cl+1|0;return 1;}
function Ql(a,b,c){var d,e,f;Ov(a,b);IJ(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.b9.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.b9.data[b]=c;a.i=d+1|0;a.cl=a.cl+1|0;}
function Ec(a,b){var c,d,e,f;Iy(a,b);c=a.b9.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cl=a.cl+1|0;return d;}
function U2(a,b){var c;c=Ps(a,b);if(c<0)return 0;Ec(a,c);return 1;}
function G9(a){var b,c,d,e,f,g;b=a.b9;c=0;d=a.i;e=null;if(c>d){e=new BC;U(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.i=0;a.cl=a.cl+1|0;}
function Iy(a,b){var c;if(b>=0&&b<a.i)return;c=new Bv;U(c);J(c);}
function Ov(a,b){var c;if(b>=0&&b<=a.i)return;c=new Bv;U(c);J(c);}
function Jn(a,b){var c;c=0;while(c<a.i){b.l(a.b9.data[c]);c=c+1|0;}}
function Nl(a,b){var c,d,e,f,g,h,i;c=a.b9;d=a.i;if(b===null)b=ASQ;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}YT(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cl=a.cl+1|0;}
function ACm(){var a=this;C.call(a);a.k5=0;a.k7=0;}
function ANS(){var a=new ACm();AOB(a);return a;}
function AOB(a){var b,c;b=AB9(Eu((AA$())));c=Eu((AA$()))^(-559038737);a.k5=b;a.k7=c;c=0;while(c<19){QG(a);c=c+1|0;}}
function QG(a){var b,c;b=a.k5;c=a.k7;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.k5=c;a.k7=b;return b;}
function AB9(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function HO(a,b){return 5.960464477539063E-8*(QG(a)&16777215)*b|0;}
function S4(){C.call(this);this.l6=null;}
function AKU(a,b,c){var d;d=a.l6;if(b===0.0)JN(d,100);}
function S5(){C.call(this);this.pr=null;}
function ADx(a,b){var c,d,e;c=a.pr;d=b.bm;if(d==32){c.iJ=c.iJ?0:1;e=1;}else if(d==13){JN(c,1);e=1;}else if(d!=8)e=0;else{VG(c,1);e=1;}return e;}
var MF=F(0);
function AC4(b,c){var d;d=new Ui;d.t4=b;d.t5=c;return d;}
function ABJ(){var a=this;C.call(a);a.fi=null;a.fE=0;a.h8=0;a.fD=0;}
function ACy(a){var b=new ABJ();AG$(b,a);return b;}
function AG$(a,b){a.fi=Cl();a.fD=0;a.h8=2048;a.fE=b;}
function GZ(a,b,c){var d,e,f,g,h,i,j;d=c.p8(b);e=a.h8;if(d>e){c=new Bm;f=new M;O(f);BA(S(G(S(G(f,B(272)),d),B(273)),e),41);Bl(c,N(f));J(c);}if(!a.fE){b=new BC;Bl(b,B(274));J(b);}a:{b=new BW;if(d){b:{c=a.fi;if(c.i>0){c=BR(c);g=d;while(true){if(!B2(c))break b;f=BV(c);if(f.be>=g)break;}CD(b,f.bh,f.bt,g,a.fE);f.bh=f.bh+g;h=f.be-g;f.be=h;if(h===0.0)U2(a.fi,f);break a;}}g=a.fD;i=d;CD(b,0.0,g,i,a.fE);c=a.fi;f=new BW;h=a.fD;g=a.h8-d|0;j=a.fE;f.bh=i;f.bt=h;f.be=g;f.bu=j;BX(c,f);a.fD=a.fD+a.fE|0;}}return b;}
function HM(a,b){var c,d,e,f,g,h,i;a:{c=AR$(b);b=a.fi;if(b.i>0){d=BR(b);while(true){if(!B2(d))break a;e=BV(d);if(e.bt===c.bt){f=e.bh;g=e.be;h=f+g;i=c.bh;if(h===i){c.bh=f;c.be=c.be+g;PO(d);}else{h=c.be;if(i+h===f){c.be=h+g;PO(d);}}}}}}BX(a.fi,c);}
function Wt(a){return B3(a.h8,a.fD);}
function Z$(){var a=this;C.call(a);a.v9=20;a.fv=null;a.eG=null;a.hV=null;a.j7=0;a.hU=0;a.iy=0.0;a.cn=null;a.eb=null;a.eR=null;a.e6=0;}
function AJ9(){var a=new Z$();AOM(a);return a;}
function AOM(a){a.v9=20;a.fv=new Z;a.eG=new Z;a.cn=Cl();}
function WJ(a,b){var c,d,e,f,g;c=a.e6;if(b==c)return;d=a.cn.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=V(0,(c-1|0)/20|0);f=V(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Rt(a,b);a.e6=b;}else{if(a.e6>=b)while(true){if(g<f)break a;a.e6=RV(Bs(a.cn,g%d|0),a.eb,a.eR,a.e6,b,e,a.iy);g=g+(-1)|0;}while(f<=g){a.e6=RV(Bs(a.cn,f%d|0),a.eb,a.eR,a.e6,b,e,a.iy);f=f+1|0;}}}}
function S_(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BR(a.cn);while(B2(f)){g=BV(f);h=a.fv;i=Be(a.cn.i,a.hU);j=g.d8.a;k=((g.ip.a-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BD(l,c);if(m<=0){Y(g.fX,Cb(g.bS),j);CD(g.fl,0.0,0.0,Cb(g.bS),j);Ip(g,e,k,h,d.iA,d.g5);}else{if(m>0&&k<c){m=V(c-k|0,0);Y(g.fX,Cb(g.bS),m);CD(g.fl,0.0,0.0,Cb(g.bS),m);Ip(g,e,k,h,d.iA,d.g5);}if(l>i){m=X(l%i|0,c);Y(g.fX,Cb(g.bS),m);CD(g.fl,0.0,b%C3(g.bS)|0,Cb(g.bS),m);Ip(g,e,0,h,d.iA,d.g5);}}}}
function Jk(a,b,c,d){var e,f,g,h,i,j;e=a.cn.i;while(true){f=a.cn.i;g=Be(f,a.hU);if(g>(d+a.j7|0))break;h=B3(0,g);i=new Mx;g=a.eG.b;f=a.j7;j=a.hV;i.fX=new Z;i.fl=new BW;i.ip=h;i.dp=20;i.d5=f;i.d8=B3(g,20*f|0);i.fp=Sj(j,f);if(i.bS===null)i.bS=CR(b);BX(a.cn,i);}if(f==e)return;Rt(a,c);}
function Rt(a,b){var c,d,e,f,g,h,i,j;c=a.cn;d=c.i;e=Be((b/(d*20|0)|0)+1|0,d)*20|0;c=BR(c);while(B2(c)){f=BV(c);g=a.eb;h=a.iy;Em(g);i=0;while(true){j=f.dp;if(i>=j)break;j=e-Be(d,j)|0;if(j<b)j=e;e=j+1|0;FW(f,g,CZ(e),Be(f.d5,i)+f.fp|0,h);i=i+1|0;}CL(f.bS,g);}}
function SB(a,b,c,d){var e;a.hV=b;a.j7=c;e=c*20|0;a.hU=e;b=CX(a.eb,CJ(d,a.eG.b,e));a.eb=b;Cu(b,a.hV);Q7(a.eb,2);b=CX(a.eR,CJ(d,a.eG.b,c));a.eR=b;Cu(b,a.hV);Q7(a.eR,2);}
function Ut(a,b,c,d,e){C1(a.fv,b);Y(a.eG,c,d);a.iy=e;}
var ABy=F(0);
function ABS(){return AJ6(Cv(96,99,102),Cv(49,51,53),Cv(164,163,163),CF(50));}
function Vp(){var a=this;C.call(a);a.iD=null;a.qk=null;a.h$=null;}
function AKK(a,b,c){if(!c){b=E4(a.h$.gq,b.j,a.qk,1);a.iD=b;if(b!==null)return 1;}return 1;}
function AMf(a,b,c){if(a.iD!==null)a.iD=null;return 1;}
function AGD(a,b){var c;c=a.iD;if(c!==null){c.l(b);return 1;}c=a.h$;return Fc(c.gq,b.j,c.sc);}
function RL(){C.call(this);this.nB=null;}
function AFZ(a,b,c,d){var e,f;b=a.nB;e=(LT(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dC=X(V(0,b.dC+Be(e,f)|0),O0(b));return 1;}
var Tw=F(0);
function GX(a){return Du(a,null);}
function TD(b){var c;c=new M4;c.ni=b;return c;}
function Z9(){var a=this;C.call(a);a.eA=null;a.cB=null;a.dw=null;a.d0=null;a.lY=null;a.jb=null;}
function G5(){var a=new Z9();AGz(a);return a;}
function AGz(a){var b;a.eA=new Z;a.cB=new Z;a.dw=new Z;a.d0=new Z;b=new BW;a.lY=b;a.jb=new BW;EF();BF(b,AUa);BF(a.jb,AUq);}
function OX(a){var b;b=a.cB;return !Be(b.b,b.a)?0:1;}
function Id(a,b){return Ha(b,a.dw,a.d0);}
function E4(a,b,c,d){var e,f,g,h,i;e=Id(a,b);f=Ha(b,a.eA,a.cB);if(!e&&!f)return null;if(!f){if(!d)c.l(Wr(a,b.b-a.dw.b|0));else c.l(NM(a,b.a-a.dw.a|0));}g=!d?a.eA.b+(a.cB.b/2|0)|0:a.eA.a+(a.cB.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new M3;b.sk=a;b.sm=c;b.sl=i;}else{b=new M1;b.pd=a;b.pc=c;b.pe=i;}return b;}
function ACx(b,c){var d;d=new SU;d.qe=b;d.lQ=c;return d;}
function NM(a,b){var c,d,e;c=a.d0.a;d=a.cB.a;e=c-d|0;return ACx(X(V(0,b-(d/2|0)|0),e),e);}
function Wr(a,b){var c,d,e;c=a.d0.b;d=a.cB.b;e=c-d|0;return ACx(X(V(0,b-(d/2|0)|0),e),e);}
function HZ(a,b,c,d,e,f,g){M8(a,b,c,d,e,f,g,1);}
function LH(a,b,c,d,e,f,g){M8(a,b,c,d,e,f,g,0);}
function M8(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Y(a.d0,0,0);Y(a.cB,0,0);}else{i=X(g*3|0,d);j=V(OS(d,d,e),i);e=e-d|0;i=d-j|0;i=i?OS(b,i,e):0;if(!h){k=a.eA;k.b=i+c|0;k.a=f-g|0;l=a.cB;l.b=j;l.a=g;l=a.dw;l.b=c;l.a=k.a;k=a.d0;k.b=d;k.a=g;}else{k=a.eA;k.b=f-g|0;k.a=i+c|0;l=a.cB;l.b=g;l.a=j;l=a.dw;l.b=k.b;l.a=c;k=a.d0;k.b=g;k.a=d;}}}
function O$(a,b){FL(a,b);F4(a,b);}
function FL(a,b){var c;c=a.dw;BB(b,c.b,c.a,a.d0,a.lY);}
function F4(a,b){var c,d;c=a.cB;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eA;BB(b,d.b+1|0,d.a+1|0,c,a.jb);b=a.cB;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fc(a,b,c){return Id(a,b)&&GX(c)?1:0;}
function Pd(){C.call(this);this.ts=null;}
function AMX(a,b){var c,d,e;c=a.ts;if(b.cg&&b.bm==79){if(!b.bw){b=c.bb.bV;d=new Re;d.ty=c;K8(b,d);}else{b=c.bb.bV;d=new Rd;d.vP=c;U4(b,d);}e=1;}else e=0;return e;}
function Qf(){C.call(this);this.u2=null;}
function ADX(a,b){var c,d,e,f;c=b.data;b=By();d=Ct(c[0]);e=new M;O(e);G(G(e,B(188)),d);Bu(b,N(e));b=By();f=c[1];d=new M;O(d);G(G(d,B(275)),f);Bu(b,N(d));}
function Qe(){C.call(this);this.wO=null;}
function APD(a,b){var c,d,e,f,g,h,i;c=b.data;d=By();e=Ct(c[0]);f=new M;O(f);G(G(f,B(188)),e);Bu(d,N(f));g=Fx(QS(b,1));b=By();d=Ct(c[1]);if(g===null)c=B(29);else{c=new M;O(c);BY(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BY(c,B(44));BA(c,i[h]);h=h+1|0;}BY(c,B(45));c=N(c);}e=new M;O(e);G(G(G(G(e,B(276)),d),B(277)),c);Bu(b,N(e));}
function Qd(){C.call(this);this.nX=null;}
function AGi(a,b){Tv(a.nX,b);}
function Qc(){C.call(this);this.uJ=null;}
function AK7(a,b){var c,d,e,f,g;c=b.data;d=By();e=Ct(c[0]);f=new M;O(f);G(G(f,B(188)),e);Bu(d,N(f));g=El(QS(b,1));b=By();d=Ct(c[1]);c=AA4(g);e=new M;O(e);G(G(G(G(e,B(278)),d),B(279)),c);Bu(b,N(e));}
function Qa(){C.call(this);this.vR=null;}
function AKi(a,b){var c,d;c=KX();b=Ct(b);d=new M;O(d);G(G(d,B(280)),b);Bu(c,N(d));b=new E6;U(b);J(b);}
function P_(){C.call(this);this.pp=null;}
function AMc(a,b){var c,d,e,f;c=a.pp;d=c.bb.bV;e=new Nj;e.qC=c;f=R(C,1);f.data[0]=b;C0(d,e,B(281),f);}
function SJ(){C.call(this);this.ky=null;}
function AN6(a,b){var c,d,e,f,g,h;c=a.ky;d=c.kW;if(d!==null){e=c.ds.N;f=e.b;g=b.j;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.kW=g;}b=b.j;f=b.b;c=c.es;d=c.x;f=f-d.b|0;h=b.a-d.a|0;Y(c.N,f,h);return 1;}
function AOr(a,b,c){var d;if(!c){d=b.j;b=a.ky;if(!Eh(b.ds,d))d=null;b.kW=d;}return 1;}
function Tb(){var a=this;C.call(a);a.ie=null;a.o6=null;a.iK=null;}
function AEz(a,b,c){if(!c){b=E4(a.iK.hj,b.j,a.o6,1);a.ie=b;if(b!==null)return 1;}return 1;}
function AFe(a,b,c){if(a.ie!==null)a.ie=null;return 1;}
function AD9(a,b){var c;c=a.ie;if(c!==null){c.l(b);return 1;}c=a.iK;return Fc(c.hj,b.j,TD(c.bb.bV));}
function M$(){C.call(this);this.sW=null;}
function AD1(a,b,c,d){var e,f;b=a.sW;e=(LT(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.d_=X(V(0,b.d_+Be(e,f)|0),QL(b));return 1;}
function Rn(){C.call(this);this.qZ=null;}
function AN$(a,b){var c,d;a:{c=a.qZ;switch(b.bm){case 67:LO(c);d=1;break a;case 86:P9(c);d=1;break a;default:}d=0;}return d;}
var Rm=F();
function AGE(a,b,c){return 0;}
function Rk(){C.call(this);this.oL=null;}
function ANz(a,b,c){var d,e;d=a.oL;c=d.de+1|0;d.de=c;d=HA(E(H0));e=new M;O(e);G(G(S(e,c),B(282)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Vf(b,e);return 1;}
var Rj=F();
function ALA(a){return null;}
function Rl(){C.call(this);this.mT=null;}
function AE6(a){var b,c;b=a.mT;c=new O5;c.q8=b;return c;}
function QU(){C.call(this);this.wC=null;}
function AGK(a,b){return 0;}
function Kp(){var a=this;C.call(a);a.ly=null;a.uE=null;a.uQ=0.0;a.og=0;a.uZ=0;a.vr=0;a.p$=0;a.wi=0;a.db=0.0;a.dT=0.0;a.uN=0.0;a.ll=0.0;a.uW=0;a.mG=null;}
function En(a){return C$(a.db+a.dT);}
function Jo(a,b){return C$((a.db+a.dT)*b);}
function Pz(){C.call(this);this.wz=null;}
function AHd(a,b){return b.g3&&b.bm==32?1:0;}
function PA(){C.call(this);this.pv=null;}
function ADy(a,b){var c,d,e,f,g,h;b=b;c=a.pv;if(!Dz(c.ff)){d=c.ff;b=b.j;e=R(C5,1);f=e.data;g=new C5;h=new Qn;h.mi=c;JV(g,h,B(270),d.gQ.X);f[0]=g;F2(d,b,FG(e),AUm);}return 1;}
function PB(){C.call(this);this.q0=null;}
function AMA(a,b,c,d){return Kv(a.q0,b,c,d);}
function KW(){var a=this;C.call(a);a.fA=null;a.g=null;a.ir=null;a.ph=null;}
function Df(a){var b;b=a.ir;if(b===null)b=a.ph;return b;}
function GG(a){var b;b=a.fA;return b===null?null:b.ul;}
var NT=F(0);
var Of=F();
function AHj(a,b,c){var d,e;d=b;e=c;b=new M;O(b);S(G(S(G(b,B(283)),d),B(284)),e);CE(N(b));return d+e|0;}
var NU=F(0);
var Od=F();
function AIo(a,b,c){var d,e;d=b;e=c;b=new M;O(b);E8(G(E8(G(b,B(285)),d),B(284)),e);CE(N(b));return d+e;}
var Ym=F();
var Xv=F(0);
function LQ(){C.call(this);this.m8=null;}
function AJA(a){J8(a.m8);}
function LR(){C.call(this);this.pQ=null;}
function AH5(a){Je(a.pQ);}
function UX(){var a=this;C.call(a);a.mQ=null;a.r3=null;a.sj=null;a.n5=null;a.l4=null;a.qL=null;}
function Ka(a,b,c){return Wv(a,Cm(a.mQ),b,c);}
function UH(a,b,c){return Wv(a,Cm(a.r3),b,c);}
function Wv(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.s6(c,d))return g.u_;f=f+1|0;}return null;}
function MI(a,b,c){var d,e,f,g;d=(Cm(a.sj)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.s6(b,c))return g.vh;f=f+1|0;}return null;}
function Xc(){var a=this;C.call(a);a.bI=null;a.by=null;a.cJ=0;}
function ALq(){var a=new Xc();AD4(a);return a;}
function Qy(a){var b=new Xc();ADr(b,a);return b;}
function AD4(a){a.bI=new F_;a.by=new F_;}
function ADr(a,b){var c;c=new F_;a.bI=c;a.by=new F_;Wh(c,b.bI);Wh(a.by,b.by);a.cJ=b.cJ;}
function J3(a,b,c){B0(a.by,b,c);if(!a.cJ)B0(a.bI,b,c);}
function Pf(a,b){B0(a.bI,b,0);B0(a.by,b+1|0,0);}
function DS(a){if(WL(a.bI,a.by)>0)return a.by;return a.bI;}
function Fm(a){if(WL(a.bI,a.by)<0)return a.by;return a.bI;}
function Dh(a){var b,c;b=a.bI;c=a.by;return (b===c?1:c!==null&&Cy(b)===Cy(c)?(b.J==c.J&&b.V==c.V?1:0):0)?0:1;}
function YA(a,b){var c,d;if(!Dh(a))return 0;c=DS(a);d=Fm(a);return c.J<=b&&b<d.J?1:0;}
function MG(){var a=this;C.call(a);a.eh=null;a.ei=0;a.cV=0;}
function L8(a,b){var c,d,e;c=a.ei;d=a.eh;if(c==d.data.length)a.eh=Dc(d,c+16|0);d=a.eh.data;e=a.ei;a.ei=e+1|0;d[e]=b;}
function Wn(a){var b,c,d;b=a.cV;c=a.ei-1|0;if(b==c)a.cV=b-1|0;d=a.eh.data;a.ei=c;d[c]=null;}
function EH(){var a=this;C.call(a);a.bN=0;a.bO=null;a.dZ=null;a.di=0;a.cO=0;}
var AUg=0;var AUr=0;var AUf=0;function Kw(b,c){return (c-En(b)|0)/2|0;}
function Sj(b,c){return Kw(b,c)+b.p$|0;}
function AAW(a,b,c,d,e){var f,g;if(D3(a.dZ))return;if(e>EN(a.bO))return;f=e/1024|0;e=a.cO;if(f==e)return;if(LT(f-e|0)>=a.di){g=0;while(g<a.di){HB(a,b,d,c,f+g|0);g=g+1|0;}a.cO=f;return;}while(true){e=a.cO;if(e>=f)break;HB(a,b,d,c,e+a.di|0);a.cO=a.cO+1|0;}while(true){e=a.cO;if(e<=f)break;HB(a,b,d,c,e-1|0);a.cO=a.cO-1|0;}}
function HB(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Em(b);f=a.bO.e1;g=e*1024|0;h=N_(a,g);if(h>=a.bO.q.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bN;a:{while(true){l=a.bO.q.data;if(h>=l.length)break a;m=l[h];n=!AUf?Sj(d.data[m.b2],c):Kw(d.data[m.b2],c);o=f.data;Cu(b,d.data[m.b2]);Cf(b,m.v,k,n);k=o[h]-j+a.bN;if(k>1024.0)break;h=h+1|0;}}CL(Bs(a.dZ,e%a.di|0),b);}
function AA1(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(D3(a.dZ))return;if(!a.di)return;if(j>EN(a.bO))return;o=a.bO;p=o.dO;q=o.q;r=j/1024|0;s=N_(a,j);t= -a.bN|0;u=i;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=h)break;y=p.data;o=Bs(a.dZ,r%a.di|0);z=v[s];ba=y[s]+a.bN|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=X(be,ba)-j|0;if(bc&&x)bf=bf+a.bN|0;if((t+bf|0)>h)bf=h-t|0;bg=l!==null?0:1;b:{if(!bg){bh=!x
?a.bN:2*a.bN|0;bi=l.b;w=l.a;if(!(bi<w&&j<=w&&(j+bf|0)>(bi+bh|0)?0:1)){bh=0;break b;}}bh=1;}c:{if(!bg){bj=!x?a.bN:2*a.bN|0;if(j>=l.b&&(j+bf|0)<=(l.a+bj|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(z===m)bl=k.p_;bm=BR(n);d:{e:{while(B2(bm)){f:{bn=BV(bm);if(bn!==null){if(!bn.dR(z))break f;else break e;}if(z===null)break e;}}bi=0;break d;}bi=1;}if(bi)bl=k.mR;if(!bk&&!bh){l.a=X(l.a,EN(a.bO));bj=j>=l.b?bf:(X(ba,be)-l.b|0)-(!x?a.bN:0)|0;bi=(j+bf|0)<=(l.a+(!x?a.bN:2*a.bN|0)|0)?0:(X(ba,be)-l.a|0)-(!x?a.bN:0)|0;w=j-bb|0;be
=t+c|0;bo=w;x=bf-bj|0;CD(e,bo,0.0,x,u);Y(f,x,i);HQ(a,d,be,b,f,e,z,o,g,k,0,bl);w=w+bf|0;CD(e,w-bi|0,0.0,bi,u);Y(f,bi,i);be=be+bf|0;HQ(a,d,be-bi|0,b,f,e,z,o,g,k,0,bl);bp=w-bj|0;bi=bj-bi|0;CD(e,bp,0.0,bi,u);Y(f,bi,i);HQ(a,d,be-bj|0,b,f,e,z,o,g,k,1,bl);}else{CD(e,j-bb|0,0.0,bf,u);Y(f,bf,i);HQ(a,d,t+c|0,b,f,e,z,o,g,k,bk,bl);}j=j+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function HQ(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bu!==0.0&&f.be!==0.0){m=j.nR.data[g.cx];if(k)n=j.kT;else{g=m.rd;if(g===null)g=j.iN;if(l===null)l=BI(g);n=l;}g=m.rc;if(AUr)i=0.0;Ex(b,c,d,e,f,h,g,n,i);return;}return;}}
function N_(a,b){var c,d,e,f,g,h,i;c=a.bO;d=c.e1;e=0;f=c.q.data.length;g=b;b=BD(e,f);if(b>0){c=new BC;U(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ABa(a,b,c,d,e,f){var g,h;a.cO=f/1024|0;while(true){g=a.dZ;if(g.i>=a.di)break;BX(g,CR(c));}h=0;while(h<a.di){HB(a,b,e,d,a.cO+h|0);h=h+1|0;}}
function Px(a){a.bO=null;Jn(a.dZ,new Py);G9(a.dZ);}
function AAL(a,b,c,d,e,f,g,h,i){var j,k;j=EN(a.bO);if(j)j=j+a.bN|0;if(!j)j=j-a.bN|0;k=V( -a.bN|0,j-g|0);if(k>=h)return;Y(f,h-k|0,e);BB(b,c+k|0,d,f,i);}
function Y9(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EH,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B1(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bO===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EH;f.bN=3;f.dZ=Cl();f.cO=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Px(o);h=h+1|0;}return g;}
function ABw(){AUf=0;}
function TO(){C.call(this);this.wR=null;}
function TN(){C.call(this);this.qu=null;}
function AM6(a,b){var c;c=a.qu;c.bi=FA(b,EI(c));}
function TJ(){C.call(this);this.nj=null;}
function AK5(a,b){var c;c=a.nj;c.cf=FA(b,F$(c));}
function TI(){C.call(this);this.su=null;}
function AM4(a){var b,c;b=a.su;c=b.hA?0:1;b.hA=c;b=new M;O(b);FT(G(b,B(286)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TL(){C.call(this);this.qS=null;}
function AH$(a){var b,c;b=a.qS;c=b.hp?0:1;b.hp=c;b=new M;O(b);FT(G(b,B(287)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TK(){C.call(this);this.nF=null;}
function AKp(a){var b,c;b=a.nF;c=b.iQ^1;b.iQ=c;b=new M;O(b);FT(G(b,B(288)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Uc(){C.call(this);this.sV=null;}
function AMu(a){var b,c,d,e,f;b=a.sV;c=(b.kn+3|0)%6|0;b.kn=c;d=b.f6.data;e=d.length;f=0;while(f<e){b=d[f];b.bN=c;b=b.bO;if(b!==null)b.hx=1;f=f+1|0;}}
var Fe=F(Cq);
var AUd=null;var AUs=null;var AUe=null;var AUt=null;function ADH(){ADH=Bq(Fe);AKx();}
function AAu(a,b){var c=new Fe();AAi(c,a,b);return c;}
function AAi(a,b,c){ADH();DD(a,b,c);}
function AKx(){var b;AUd=AAu(B(289),0);AUs=AAu(B(290),1);b=AAu(B(291),2);AUe=b;AUt=H(Fe,[AUd,AUs,b]);}
function IP(){var a=this;C.call(a);a.dA=null;a.er=null;a.e3=null;}
var ATs=0;function AAZ(a){var b;b=a.er;if(b!==null){ATs=ATs-1|0;a.dA.c7.deleteTexture(b);a.er=null;}}
function Cb(a){return a.e3.b;}
function C3(a){return a.e3.a;}
function SA(a,b,c,d){var e;e=a.e3;e.b=b;e.a=c;Lc(a);a.dA.c7.texStorage2D(3553,1,d,b,c);e=a.dA.c7;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Lc(a){var b,c;b=a.dA.c7;c=a.er;b.bindTexture(3553,c);}
function CL(a,b){Mv(a,b.k8,b.kj,32856);OT(a,b,0,0);}
function Mv(a,b,c,d){var e,f,g,h;a:{e=a.e3;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){Lc(a);break a;}e=a.dA.c7;h=a.er;e.deleteTexture(h);a.er=a.dA.c7.createTexture();SA(a,b,c,d);break a;}}SA(a,b,c,d);}}
function Hw(a,b,c,d){Lc(a);OT(a,b,c,d);}
function OT(a,b,c,d){var e;e=a.dA.c7;b=b.i6;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Rf=F();
function AP2(a,b){return ACC(b);}
function Rg(){C.call(this);this.rm=null;}
function ADC(a,b){return Md(a.rm,b);}
function SD(){C.call(this);this.jC=null;}
var AUl=null;function O1(){var a=new SD();Zx(a);return a;}
function Zx(a){a.jC=Cl();}
function DX(a,b,c,d){OI(a,ACe(d,b,c));}
function D_(b,c,d){return ACe(d,b,c);}
function Et(a,b,c,d){OI(a,ARD(null,b,c,d));}
function OI(a,b){BX(a.jC,b);}
function G6(a){return FG(Hm(a.jC,AUl));}
function Xn(){AUl=R(C5,0);}
var WO=F(0);
var AUm=null;function ABU(){AUm=new MV;}
function ET(){var a=this;C.call(a);a.nV=null;a.sH=null;a.tB=null;a.pU=null;a.qN=null;}
function AUu(a,b,c,d,e){var f=new ET();F6(f,a,b,c,d,e);return f;}
function F6(a,b,c,d,e,f){a.nV=b;a.sH=c;a.tB=d;a.pU=e;a.qN=f;}
function G0(){var a=this;C.call(a);a.iY=null;a.fk=null;a.s4=null;}
function AUv(a,b,c){var d=new G0();Lf(d,a,b,c);return d;}
function Lf(a,b,c,d){a.iY=b;a.fk=c;a.s4=d;}
function Xm(){var b,c;b=new G0;c=Br(B(292));EF();Lf(b,c,AT$,AT_);return b;}
function ACI(){var b,c;b=new G0;Do();c=AT7;EF();Lf(b,c,AT8,AT_);return b;}
function AC$(){var a=this;C.call(a);a.lB=null;a.qw=0;}
function AFt(a,b){var c=new AC$();APi(c,a,b);return c;}
function APi(a,b,c){var d;d=new BW;a.lB=d;a.qw=b;d.bu=c;}
function P7(a,b){return B9(a.qw,b);}
var Hy=F(0);
var V8=F();
function AMP(a,b,c,d){var e;b=By();d=Ct(d);e=new M;O(e);G(G(S(G(e,B(293)),c),B(264)),d);Bu(b,N(e));}
var V9=F();
function UZ(){C.call(this);this.gf=null;}
function ADB(a,b){return JP(a.gf,b);}
function AMR(a,b,c,d){return IM(a.gf,b,c,d);}
function ANM(a,b,c){return Jd(a.gf,b,c);}
function AIx(a,b,c){return Dz(a.gf);}
function ABK(){var a=this;C.call(a);a.iA=null;a.g5=null;a.o2=null;a.o$=null;}
function AJ6(a,b,c,d){var e=new ABK();APn(e,a,b,c,d);return e;}
function APn(a,b,c,d,e){a.iA=b;a.g5=c;a.o2=d;a.o$=e;}
function WZ(){C.call(this);this.qW=null;}
function AMg(a,b){var c;c=a.qW.h$;c.dC=FA(b,O0(c));}
function M4(){C.call(this);this.ni=null;}
function Du(a,b){Gg(a.ni,b);return 1;}
var Ds=F(0);
var AUa=null;var AUq=null;var AT$=null;var AUw=null;var AT_=null;var AUb=null;var AUx=null;var AT9=null;var AT8=null;function EF(){EF=Bq(Ds);AH3();}
function AH3(){AUa=W3(50,50,50,100);AUq=W3(80,80,80,200);AT$=Br(B(294));AUw=Br(B(267));AT_=Br(B(295));AUb=Br(B(294));AUx=Br(B(267));AT9=Br(B(295));Do();AT8=AT0;}
var AAd=F();
function ON(){C.call(this);this.mO=null;}
function AIF(a,b){var c;c=a.mO.iK;c.d_=FA(b,QL(c));}
function Qp(){C.call(this);this.lS=null;}
function ADF(a,b){return Du(a.lS,null);}
var Yy=F();
function Jx(){var a=this;C.call(a);a.D=null;a.cQ=null;a.dM=null;a.d7=null;a.eX=null;a.cj=0;a.fg=0;a.oP=0.0;}
function AL7(){var a=new Jx();ANB(a);return a;}
function ANB(a){a.dM=HD();a.d7=HD();a.eX=Cl();a.D=L7(B(31));a.fg=0;a.cj=0;a.cQ=S8(a);}
function S8(a){var b,c,d,e,f,g,h,i;b=Sm(a);c=new Ie;d=new M7;e=Nf(0,b,0);f=new WF;f.ss=e;L1(d,1);e=BR(f);g=0;while(true){h=d.b9.data;i=h.length;if(g>=i)break;h[g]=BV(e);g=g+1|0;}d.i=i;Td(c,d);return c;}
function B1(a,b){return a.D.data[b];}
function CA(a){return a.D.data.length;}
function Sm(a){return FY(a,CA(a));}
function E9(a,b){return a.D.data[b].O;}
function Km(a,b){var c,d,e,f,g,h,i;c=a.D.data;d=c[b];e=c[b+1|0];f=DE(KZ(d.q,e.q));g=a.D;h=g.data.length;if(b<h&&b>=0){i=R(Cw,h-1|0);c=i.data;P4(g,b,i);c[b]=f;a.D=i;return;}d=new Bm;U(d);J(d);}
function Oo(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.D.data;if(!(c<d[b].O?0:1)){d=(B1(a,b)).q.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.v)){f=L(h.v,g);break a;}g=g-I(h.v)|0;f=f+1|0;}f=0;}EB();h=new Bw;d=BQ(1);d.data[0]=f;G3(h,d);Gk(a,b,c,1,h);h=a.D.data[b];i=h.q;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].v);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].v)==1)h.q=P4(i,j,R(B5,e-1|0));else{k=d[j];if(c<=0)l=Dv(Dt(k.v,1),k.cx,k.b2);else if(c>=(I(k.v)-1|0)){l=new B5;m=k.v;Uj(l,B8(m,0,I(m)-
1|0),k.cx,k.b2);}else{i=BQ(I(k.v)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.v,b);b=b+1|0;}b=n.length;while(c<b){m=k.v;e=c+1|0;n[c]=L(m,e);c=e;}l=Dv(FJ(i),k.cx,k.b2);}d[j]=l;}h.O=h.O-1|0;D5(h);}else if(b!=(d.length-1|0))Km(a,b);}
function WT(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){We(a.D.data[b],c,e[0]);return;}g=f-1|0;h=H7(a.D.data[b],c);d=a.D;i=Dc(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.q.data;m=l.length;c=!m?0:I(l[m-1|0].v);IY(j,j.q.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fb(e[m]))j=DE(R(B5,0));else{j=new Cw;l=R(B5,1);l.data[0]=Dv(e[m],0,0);HF(j,l);}d[b+m|0]=j;m=m+1|0;}IY(h[1],0,0,e[g]);d[b+g|0]=h[1];a.D
=i;}
function U6(a,b){var c,d,e,f,g,h,i;c=DS(b);d=Fm(b);e=c.J;if(e==d.J)return B8(Ez(a.D.data[e]),c.V,d.V);f=new M;O(f);b=a.D.data[c.J];e=c.V;BA(BY(f,Dt(Ez(b),e)),10);g=a.D;h=c.J+1|0;e=d.J;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Xl(BY(f,Ez(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.D.data[d.J];i=d.V;BY(f,B8(Ez(b),0,i));return N(f);}}b=new VD;U(b);J(b);}
function So(a,b,c){var d;TM(a,b);d=DS(b);Gk(a,d.J,d.V,1,c);}
function TM(a,b){var c,d,e,f,g,h,i;a:{c=DS(b);d=Fm(b);e=c.J;if(e==d.J)FH(a.D.data[e],c.V,d.V);else{b=a.D.data[e];FH(b,c.V,b.O);FH(a.D.data[d.J],0,d.V);e=c.J+1|0;f=d.J;g=a.D;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Cw,(h-f|0)+e|0);Zn(g,e,f,i);a.D=i;Km(a,c.J);break a;}b=new Bm;U(b);J(b);}b=new Bm;U(b);J(b);}}}
function OU(a,b,c){return EG(b,GF(B1(a,b),c));}
function Wx(a,b){b.bG=GF(B1(a,b.bA),b.bG);}
function MR(a,b){var c,d,e;c=0;d=0;while(true){e=a.D.data.length;if(c>=e)break;if((d+(B1(a,c)).O|0)>=b)return B3(c,b-d|0);d=d+((B1(a,c)).O+1|0)|0;c=c+1|0;}return B3(e,0);}
function FY(a,b){var c,d,e;c=0;d=a.D.data.length;e=0;while(e<b){c=c+E9(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Pn(a,b){return TV(B1(a,b.bA),b.bG);}
function F8(a){var b,c,d,e,f,g,h,i,j;b=BQ(Sm(a));c=b.data;d=a.D.data.length;e=0;f=0;while(e<d){g=a.D.data[e].q.data;h=g.length;i=0;while(i<h){j=g[i].v;OR(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gk(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cj=a.cj+1|0;f=a.eX;g=R(GJ,1);h=new GJ;h.ek=b;h.eS=c;i=Lb(e,B(221),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B3(b,c+I(i[0])|0);break a;}k=B3((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=B3(b,c);}i=g.data;h.ko=k;h.i_=d;h.gA=e;i[0]=h;BX(f,g);I4(a,b,c,d,e);}
function I4(a,b,c,d,e){var f;f=FY(a,b)+c|0;if(!d)OP(a.cQ,f,I(e));else SV(a.cQ,f,I(e));}
function Sg(a,b){var c,d,e;c=Lb(b.gA,B(221),(-1));if(b.i_){WT(a,b.ek,b.eS,c);OP(a.cQ,FY(a,b.ek)+b.eS|0,I(b.gA));}else{c=c.data;d=ALq();B0(d.bI,b.ek,b.eS);e=c.length;if(e==1)B0(d.by,b.ek,b.eS+I(c[0])|0);else B0(d.by,(b.ek+e|0)-1|0,I(c[e-1|0]));TM(a,d);SV(a.cQ,FY(a,b.ek)+b.eS|0,I(b.gA));}return b.ko;}
function OA(a){a.fg=a.cj;}
var EK=F();
function Lw(){EK.call(this);this.u_=null;}
function LU(){EK.call(this);this.vh=null;}
function Pi(){EK.call(this);this.wj=null;}
var H2=F(0);
var Qk=F(0);
function F_(){var a=this;C.call(a);a.J=0;a.V=0;}
function B0(a,b,c){a.J=b;a.V=c;}
function Wh(a,b){a.J=b.J;a.V=b.V;}
function WL(a,b){var c;c=BD(a.J,b.J);if(c)return c;return BD(a.V,b.V);}
function II(){var a=this;C.call(a);a.kI=null;a.lp=null;}
function Ir(a){return a.kI.bA;}
function K2(a){return a.kI.bG;}
var J5=F(F0);
var ATa=null;function AGU(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AC_(){var b;b=new J5;WX(b);ATa=b;}
var ACr=F();
function HY(b,c){var d,e,f;if(c<=0)return B(31);d=BQ(c);e=d.data;e[0]=ABh(HO(b,52));f=1;while(f<c){e[f]=ABh(HO(b,62));f=f+1|0;}return FJ(d);}
function ABh(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var Zi=F();
function ACV(){var a=this;C.call(a);a.CN=null;a.Au=null;a.BE=0;a.A_=0;}
function ZI(){var a=this;C.call(a);a.ul=null;a.Cv=null;}
var ACd=F(0);
function ABY(b){var c;a:{switch(b){case 0:break;case 1:c=B(136);break a;case 2:c=B(245);break a;case 3:c=B(244);break a;default:c=null;break a;}c=B(164);}return c;}
var CO=F();
var AAB=F(CO);
var ABg=F(CO);
var Yq=F(CO);
var YK=F(CO);
var ABL=F(CO);
function ZU(){var a=this;Er.call(a);a.ge=0;a.cF=null;a.f_=0;a.tZ=0.0;a.kd=0;}
function HD(){var a=new ZU();AGp(a);return a;}
function AGp(a){var b;b=ACs(16);a.ge=0;a.cF=R(HI,b);a.tZ=0.75;TT(a);}
function ACs(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TT(a){a.kd=a.cF.data.length*a.tZ|0;}
function M2(a,b){return RY(a,b)===null?0:1;}
function Ek(a,b){var c;c=RY(a,b);if(c===null)return null;return c.fu;}
function RY(a,b){var c,d;if(b===null)c=Q$(a);else{d=X$(b);c=Pg(a,b,d&(a.cF.data.length-1|0),d);}return c;}
function Pg(a,b,c,d){var e,f;e=a.cF.data[c];while(e!==null){if(e.kE==d){f=e.hD;if(b!==f&&!Xq(b,f)?0:1)break;}e=e.eN;}return e;}
function Q$(a){var b;b=a.cF.data[0];while(b!==null&&b.hD!==null){b=b.eN;}return b;}
function Sa(a,b,c){var d,e,f;if(b===null){d=Q$(a);if(d===null){a.f_=a.f_+1|0;d=TE(a,null,0,0);e=a.ge+1|0;a.ge=e;if(e>a.kd)T8(a);}}else{e=X$(b);f=e&(a.cF.data.length-1|0);d=Pg(a,b,f,e);if(d===null){a.f_=a.f_+1|0;d=TE(a,b,f,e);e=a.ge+1|0;a.ge=e;if(e>a.kd)T8(a);}}b=d.fu;d.fu=c;return b;}
function TE(a,b,c,d){var e,f,g;e=new HI;f=null;e.hD=b;e.fu=f;e.kE=d;g=a.cF.data;e.eN=g[c];g[c]=e;return e;}
function T8(a){var b,c,d,e,f,g,h,i;b=a.cF.data.length;b=ACs(!b?1:b<<1);c=R(HI,b);d=c.data;e=0;f=b-1|0;while(true){g=a.cF.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.kE&f;i=h.eN;h.eN=d[b];d[b]=h;h=i;}e=e+1|0;}a.cF=c;TT(a);}
function X$(b){var c,d,e,f,g,h;c=R(C,2).data;c[0]=FO(b.bA);c[1]=FO(b.bG);d=(-1515898884);e=0;while(e<c.length){b=c[e];if(b===null)f=0;else{g=b.e5;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;d=Jy(h,4)^((h>>>7|0)|h<<25)^Jy(d,13);e=e+1|0;}return d;}
function Cw(){var a=this;C.call(a);a.q=null;a.O=0;a.e1=null;a.dO=null;a.c8=null;a.gz=null;a.fn=0;a.hx=0;a.hb=0;}
var AUy=0;var AUz=0;var AUi=0;function DE(a){var b=new Cw();HF(b,a);return b;}
function HF(a,b){var c,d,e,f;c=b.data;a.q=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].v)|0;f=f+1|0;}a.O=d;D5(a);}
function GF(a,b){var c;c=HV(a,b);return c<=0?0:a.c8.data[c-1|0];}
function HV(a,b){var c,d,e,f;c=a.q.data.length;if(!c)return (-1);if(!(a.c8!==null&&!a.hb)){Vr(a);d=0;e=0;f=a.q.data.length;while(d<f){e=e+I(a.q.data[d].v)|0;a.c8.data[d]=e;d=d+1|0;}a.hb=0;}d=SY(a.c8,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function TV(a,b){var c;c=a.q.data;if(!c.length)return null;return c[HV(a,b)];}
function FH(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.O){a.q=R(B5,0);D5(a);a.O=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.q.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].v);i=I(a.q.data[f].v);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.q.data[f];if(!b&&c==I(k.v)?1:0){g=a.q;a.q=P4(g,e,R(B5,g.data.length-1|0));a.O=a.O-d|0;D5(a);return;}a.q.data[e]=Dv(E1(B8(k.v,0,b),Dt(k.v,c)),k.cx,k.b2);}else{g=a.q.data;l=g[e];m=g[f];if(b){if(b!=
I(l.v))a.q.data[e]=Dv(B8(l.v,0,b),l.cx,l.b2);e=e+1|0;}if(c==I(m.v))f=f+1|0;else if(c)a.q.data[f]=Dv(Dt(m.v,c),m.cx,m.b2);g=a.q;a.q=Zn(g,e,f,R(B5,(g.data.length-f|0)+e|0));}a.O=a.O-d|0;D5(a);}
function H7(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cw,[DE(R(B5,0)),a]);if(b>=a.O)return H(Cw,[a,DE(R(B5,0))]);c=a.q;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cw,[DE(Kg(c,0,R(B5,d))),DE(Kg(c,d,R(B5,f-d|0)))]);h=e[d];e=Kg(c,0,R(B5,d+1|0));i=e.data;j=Kg(c,d,R(B5,f-d|0));c=j.data;i[d]=Dv(B8(h.v,0,b),h.cx,h.b2);c[0]=Dv(Dt(h.v,b),h.cx,h.b2);return H(Cw,[DE(e),DE(j)]);}
function We(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.q.data;if(e>=f.length)break a;g=I(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}IY(a,d,b,c);}
function IY(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.q;f=e.data;g=f.length;if(!g){h=R(B5,1);h.data[0]=QW(d);a.q=h;}else if(!b&&!c){i=R(B5,g+1|0);h=i.data;Dn(e,0,i,1,g);h[0]=QW(d);a.q=i;}else{j=f[b];if(c<=0)k=Dv(E1(d,j.v),j.cx,j.b2);else if(c>=I(j.v))k=Dv(E1(j.v,d),j.cx,j.b2);else{l=I(d);m=l+c|0;n=I(j.v)-c|0;h=BQ(I(j.v)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.v,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.v,g+c|0);g=g+1|0;}k=Dv(FJ(h),j.cx,j.b2);}f[b]=k;}a.O=a.O+I(d)|0;D5(a);}
function Wf(a){var b,c,d,e,f,g;b=0;c=a.q.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<I(f.v)){if(L(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Ky(a,b,c){var d,e,f,g,h,i,j;d=a.q.data.length;e=a.e1;if(!(e!==null&&e.data.length>=d)){a.e1=ADq(d);a.dO=BH(d);a.fn=1;}Vr(a);if(!a.fn)AUz=AUz+1|0;else{f=0;g=0.0;AUy=AUy+1|0;h=0;while(h<d){i=c.data;j=a.q.data[h];f=f+I(j.v)|0;a.c8.data[h]=f;Cu(b,i[j.b2]);g=g+Ef(b,j.v);a.e1.data[h]=g;a.dO.data[h]=g+0.5|0;h=h+1|0;}a.O=f;a.fn=0;a.hb=0;}}
function Vr(a){var b;b=a.c8;if(!(b!==null&&b.data.length>=a.q.data.length)){a.c8=BH(a.q.data.length);a.hb=1;}}
function D5(a){a.fn=1;a.hx=1;a.hb=1;a.gz=null;}
function VK(a,b,c,d){var e,f,g,h,i,j,k;if(a.gz===null)a.gz=R($rt_arraycls($rt_intcls()),a.q.data.length);e=a.gz.data[d];if(e===null){e=c.data;f=a.q.data[d];Cu(b,e[f.b2]);f=f.v;e=BH(I(f)-1|0);c=Gh(f);g=!d?0.0:a.e1.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bw;k=i+1|0;LC(f,c,0,k);h[i]=g+Ef(b,f)+0.5|0;i=k;}a.gz.data[d]=e;}return e;}
function GH(a,b,c,d){var e,f,g,h,i;if(a.q.data.length&&b){if(!(!a.fn&&a.dO!==null))Ky(a,c,d);if(b>=a.O)return a.dO.data[a.q.data.length-1|0];e=0;f=0;a:{while(true){g=a.q.data;if(f>=g.length)break a;h=e+I(g[f].v)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dO.data[f];}return (VK(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EN(a){var b,c,d;a:{b=a.q.data.length;if(b){c=a.dO.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GC(a,b){var c;if(b>=a.O)return b+1|0;c=HV(a,b);return a.c8.data[c];}
function Ez(a){var b,c,d,e;b=new M;FM(b,a.O);c=a.q.data;d=c.length;e=0;while(e<d){BY(b,c[e].v);e=e+1|0;}return N(b);}
function L7(b){var c,d,e,f;c=R(Cw,1);d=c.data;e=new Cw;f=R(B5,1);f.data[0]=QW(b);HF(e,f);d[0]=e;return c;}
function Xp(){AUi=0;}
var MV=F();
function APm(a){}
function Th(){C.call(this);this.st=null;}
function AJV(a){var b;b=a.st;Bu(By(),b);}
function B5(){var a=this;C.call(a);a.v=null;a.cx=0;a.b2=0;}
function QW(a){var b=new B5();AOd(b,a);return b;}
function Dv(a,b,c){var d=new B5();Uj(d,a,b,c);return d;}
function AOd(a,b){Uj(a,b,0,0);}
function Uj(a,b,c,d){a.v=b;a.cx=c;a.b2=d;}
function G1(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Ie(){var a=this;C.call(a);a.cz=null;a.dG=0;}
var AUA=null;var AUB=null;function ARA(a){var b=new Ie();Td(b,a);return b;}
function AQD(a,b){var c=new Ie();WW(c,a,b);return c;}
function Uu(b,c){var d;d=BD(b.bF,c.bF);if(!d)d=BD(c.bK,b.bK);return d;}
function Td(a,b){WW(a,null,b);}
function WW(a,b,c){var d,e;a.dG=0;if(D3(c))return;Nl(c,AUA);if(b!==null)a.cz=LW(b);c=BR(c);while(B2(c)){d=BV(c);e=a.cz;if(e!==null){P8(a,e,LW(d));continue;}a.cz=LW(d);}}
function Oq(a,b){var c;if(b.eB)return b;b=BR(b.br);while(true){if(!B2(b))return null;c=Oq(a,BV(b));if(c!==null)break;}return c;}
function JW(a,b,c){var d,e,f;d=b.b0;if(d.bF==c.bF&&d.bK==c.bK?1:0){e=BR(b.br);while(B2(e)){f=JW(a,BV(e),c);if(f!==null)return f;}return b;}b=BR(b.br);while(true){if(!B2(b))return null;d=BV(b);if(Pm(d,c.bF,c.bK)){e=JW(a,d,c);if(e!==null)break;}}return e;}
function Vs(a,b,c){BX(c,b.b0);b=BR(b.br);while(B2(b)){Vs(a,BV(b),c);}}
function OP(a,b,c){a.dG=0;IF(a,a.cz,b,c);}
function IF(a,b,c,d){var e;if(C4(b)<c)return;a:{if(CU(b)>c){JU(b,d);FN(b,d);b=BR(b.br);while(B2(b)){IF(a,BV(b),c,d);}}else{if(!JD(b,c)){if(a.dG)break a;if(C4(b)!=c)break a;}FN(b,d);if(CU(b)==c&&a.dG)JU(b,d);e=BR(b.br);while(B2(e)){IF(a,BV(e),c,d);}if(!a.dG){b.eB=1;a.dG=1;}}}}
function SV(a,b,c){a.dG=0;LA(a,a.cz,b,c);}
function LA(a,b,c,d){var e,f,g,h;if(C4(b)<c)return;e=CU(b);f=c+d|0;if(e>f){e= -d|0;JU(b,e);FN(b,e);g=BR(b.br);while(B2(g)){LA(a,BV(g),c,d);}b.br=MX(a,b.br);}else{g=b.b0;if(c<=g.bF&&g.bK<=f?1:0){if(b!==a.cz){IO(b,(-1));Jz(b,(-1));}else{IO(b,0);Jz(b,0);}G9(b.br);}else{e=JD(b,c);f=JD(b,f);if(e&&f)FN(b, -d|0);else if(e)Jz(b,c);else{if(!f)return;IO(b,c);FN(b, -d|0);}h=BR(b.br);while(B2(h)){LA(a,BV(h),c,d);}b.br=MX(a,b.br);if(!a.dG){b.eB=1;a.dG=1;}}}}
function MX(a,b){var c,d,e,f,g,h;c=Cl();d=null;Nl(b,AUB);b=BR(b);while(B2(b)){e=BV(b);if(CU(e)==C4(e))continue;if(!e.eB){if(d!==null){BX(c,d);d=null;}BX(c,e);}else if(d===null)d=e;else{f=X(CU(d),CU(e));g=V(C4(d),C4(e));h=LW(Nf(f,g,d.b0.eP));h.dq=e.dq;h.eB=1;d=h;}}if(d!==null)BX(c,d);return c;}
function P8(a,b,c){var d,e;a:{if(NQ(b,c)){d=BR(b.br);while(true){if(!B2(d)){BX(b.br,c);c.dq=b;break a;}e=BV(d);if(NQ(e,c))break;}P8(a,e,c);return;}}}
function Q_(a,b,c,d){var e,f,g,h,i,j;if((C4(c)-CU(c)|0)<43)e=B8(d,CU(c),C4(c));else{e=B8(d,CU(c),CU(c)+20|0);f=B8(d,C4(c)-20|0,C4(c));g=new M;O(g);G(G(G(g,e),B(214)),f);e=N(g);}e=Ud(e,B(221),B(296));f=By();g=Ct(c);h=new M;O(h);i=S(h,b);BA(i,32);g=G(i,g);BA(g,9);G(g,e);Bu(f,N(h));c=BR(c.br);j=b+1|0;while(B2(c)){Q_(a,j,BV(c),d);}}
function AAX(){AUA=new Wo;AUB=new Wq;}
function ACv(){var a=this;C.call(a);a.bF=0;a.bK=0;a.eP=0;}
function Nf(a,b,c){var d=new ACv();AGv(d,a,b,c);return d;}
function AGv(a,b,c,d){a.bF=b;a.bK=c;a.eP=d;}
function ANA(a,b){var c;if(a===b)return 1;if(b!==null&&Cy(a)===Cy(b)){c=b;return a.bF==c.bF&&a.bK==c.bK&&a.eP==c.eP?1:0;}return 0;}
function AE4(a,b){var c;b=b;c=BD(a.bF,b.bF);if(!c)c=BD(b.bK,a.bK);return c;}
var Wo=F();
function AHC(a,b,c){return Uu(b,c);}
var Wq=F();
function AJe(a,b,c){b=b;c=c;return Uu(b.b0,c.b0);}
var EL=F();
var AUC=null;var AUD=null;var AUE=null;var AUF=null;var AUG=null;var AUH=null;function AAs(){AUC=new UC;AUD=new UA;AUE=new UB;AUF=new Uy;AUG=new Uz;AUH=new WY;}
var GN=F(FU);
function AKb(a,b){var c;c=new E6;U(c);J(c);}
function WF(){GN.call(this);this.ss=null;}
function AGS(a){return 1;}
function APb(a,b){var c;if(!b)return a.ss;c=new Bv;U(c);J(c);}
function Xo(){var a=this;C.call(a);a.b0=null;a.dq=null;a.br=null;a.eB=0;}
function LW(a){var b=new Xo();ALW(b,a);return b;}
function ALW(a,b){a.eB=0;a.b0=b;a.dq=null;a.br=Cl();}
function CU(a){return a.b0.bF;}
function C4(a){return a.b0.bK;}
function IO(a,b){a.b0.bF=b;}
function Jz(a,b){a.b0.bK=b;}
function JU(a,b){var c;c=a.b0;c.bF=c.bF+b|0;}
function FN(a,b){var c;c=a.b0;c.bK=c.bK+b|0;}
function JD(a,b){return CU(a)<=b&&b<C4(a)?1:0;}
function Pm(a,b,c){var d;d=a.b0;return d.bF<=b&&c<=d.bK?1:0;}
function NQ(a,b){b=b.b0;return Pm(a,b.bF,b.bK);}
function AHI(a){var b,c,d,e,f;b=a.b0;c=b.bF;d=b.bK;e=b.eP;b=new M;O(b);BA(b,40);BA(S(G(S(G(S(b,c),B(44)),d),B(44)),e),41);b=N(b);c=a.eB;f=new M;O(f);FT(G(G(f,b),B(44)),c);return N(f);}
var N4=F(0);
var F3=F(EC);
var JA=F(F3);
var UC=F(JA);
var KK=F(Er);
var UA=F(KK);
var UB=F(GN);
var Fs=F(0);
var Uy=F();
var Ow=F(0);
var Uz=F();
var WY=F();
function KH(){var a=this;C.call(a);a.iN=null;a.pP=null;a.r8=null;a.uk=null;a.l1=null;a.kT=null;a.p_=null;a.mR=null;a.bg=null;a.nR=null;a.tQ=null;}
function AUI(a,b,c,d,e,f,g,h,i,j,k){var l=new KH();ME(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function ME(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=j.data;a.iN=b;a.pP=c;a.r8=d;a.uk=e;a.l1=f;a.kT=g;a.p_=h;a.mR=i;a.nR=j;a.tQ=k;if(m.length>=15){a.bg=l;return;}b=new BC;U(b);J(b);}
function MN(){var a=this;C.call(a);a.g_=0;a.lw=0;a.hX=0;a.fJ=0;a.gj=null;}
function B2(a){return a.g_>=a.hX?0:1;}
function BV(a){var b,c;Oj(a);b=a.g_;a.fJ=b;c=a.gj;a.g_=b+1|0;return c.qQ(b);}
function PO(a){var b,c,d;if(a.fJ<0){b=new DO;U(b);J(b);}Oj(a);a.gj.to(a.fJ);a.lw=a.gj.cl;c=a.fJ;d=a.g_;if(c<d)a.g_=d-1|0;a.hX=a.hX-1|0;a.fJ=(-1);}
function Oj(a){var b;if(a.lw>=a.gj.cl)return;b=new K9;U(b);J(b);}
var Y4=F();
function UV(){C.call(this);this.iS=null;}
function ANd(a,b){var c,d,e,f,g;c=a.iS;d=c.jt;if(d!==null){e=b.j;f=e.b-d.b|0;g=e.a-d.a|0;e=c.hP;e.b=EO(0,e.b+f|0,c.gb.b-c.g$.b|0);c=a.iS;d=c.hP;d.a=EO(0,d.a+g|0,c.gb.a-c.g$.a|0);}a.iS.jt=b.j;return 1;}
var Zf=F();
function JX(){var a=this;C.call(a);a.hD=null;a.fu=null;}
function HI(){var a=this;JX.call(a);a.kE=0;a.eN=null;}
function T5(){C.call(this);this.rj=null;}
function AH_(a,b){Hl(a.rj,b);}
function U3(){C.call(this);this.ib=null;}
function APr(a){return a.ib;}
function Ce(){Cq.call(this);this.kB=null;}
var AUJ=null;var AUK=null;var AUL=null;var AUM=null;var AUN=null;var AUO=null;var AUP=null;var AUQ=null;var AUR=null;var AUS=null;var AUT=null;var AUU=null;var AUV=null;var AUW=null;var AUX=null;var ATZ=null;function Yn(){Yn=Bq(Ce);AO3();}
function Dl(a,b,c){var d=new Ce();Se(d,a,b,c);return d;}
function AO5(a,b,c,d){var e=new Ce();AAA(e,a,b,c,d);return e;}
function Se(a,b,c,d){Yn();DD(a,b,c);a.kB=Sp(d,null);}
function AAA(a,b,c,d,e){Yn();DD(a,b,c);a.kB=Sp(d,e);}
function AO3(){var b;b=new Ce;Do();Se(b,B(297),0,ATQ);AUJ=b;AUK=Dl(B(298),1,Cv(204,120,50));AUL=Dl(B(299),2,Br(B(300)));AUM=Dl(B(48),3,Br(B(301)));AUN=Dl(B(302),4,Br(B(303)));AUO=Dl(B(304),5,Cv(188,63,60));AUP=Dl(B(305),6,Br(B(306)));AUQ=Dl(B(49),7,Br(B(307)));AUR=Dl(B(308),8,Br(B(309)));AUS=AO5(B(310),9,ATQ,Cv(52,65,52));AUT=AO5(B(311),10,Br(B(312)),Br(B(313)));AUU=Dl(B(314),11,Br(B(315)));AUV=Dl(B(316),12,Br(B(317)));AUW=Dl(B(318),13,Br(B(319)));b=Dl(B(320),14,Br(B(321)));AUX=b;ATZ=H(Ce,[AUJ,AUK,AUL,AUM,AUN,
AUO,AUP,AUQ,AUR,AUS,AUT,AUU,AUV,AUW,b]);}
function IL(){var a=this;C.call(a);a.rc=null;a.rd=null;}
function Sp(a,b){var c=new IL();AEJ(c,a,b);return c;}
function AEJ(a,b,c){a.rc=b;a.rd=c;}
function AC2(){var a=this;C.call(a);a.L=null;a.P=null;a.p=null;a.dP=null;}
function AAj(a){var b=new AC2();APp(b,a);return b;}
function APp(a,b){var c;a.p=AQq();a.L=b;c=new Sq;KM(c);c.k2=new BW;c.gt=b;a.P=c;}
function H6(a,b,c,d){var e,f,g,h;e=a.P;f=D$(e.gc,c)?0:1;g=D$(e.gw,b)?0:1;h=d===e.il?0:1;if(f){e.gc=c;e.dx=null;WI(e,0);}e.gi=!f&&!g&&!h?0:1;e.gw=b;e.il=d;e.hg=0;Jl(a);}
function Hj(a){var b;b=a.P;b.cR=CX(b.cR,null);a.p=CX(a.p,null);}
function K4(a,b){var c,d,e;c=a.p;d=c.t;e=c.n;b=CX(c,b);a.p=b;b.iq(d,e,a.L.bE);}
function CK(a,b,c){var d;d=a.p;d.iq(b,c,d.dy);Jl(a);}
function Jl(a){var b,c,d,e;b=a.P;c=a.p.n.b;b.n.b=c;d=b.cR;if(d!==null&&c!=Cb(d)&&!(c>=b.hg&&Cb(b.cR)>=b.hg))b.gi=1;b=a.P;b.dy=a.L.bE;if(ST(b))c=0;else{b=a.P;PV(b);e=Cs(b.gt,b.il);WI(b,En(b.dx)+(e*2|0)|0);c=b.n.a;}b=a.P.t;d=a.p.t;Y(b,d.b,d.a-c|0);}
function ABo(a,b){var c,d,e,f,g,h,i,j,k,l;if(Fo(a.P,b))return Du(a.L.cp,null);c=Cs(a.L,7.0);d=Cs(a.L,25.0);e=L9(a,b.a,c);f=UI(a,b.b,c);g=TR(a,b.b,d);h=QO(a,b.a,d);i=f&&OE(a,b.a,c)?1:0;j=e&&Nn(a,b.b,c)?1:0;k=e&&SG(a,b.b,c)?1:0;l=f&&Pl(a,b.a,c)?1:0;if(i)return Du(a.L.cp,g<0?B(322):g<=0?B(166):B(323));if(j)return Du(a.L.cp,h<0?B(322):h<=0?B(165):B(323));if(k)return Du(a.L.cp,h<0?B(323):h<=0?B(165):B(322));if(!l)return 0;return Du(a.L.cp,g<0?B(323):g<=0?B(166):B(322));}
function Nn(a,b,c){var d;d=a.P.t.b;return (d-c|0)<=b&&b<d?1:0;}
function SG(a,b,c){var d,e;d=a.P;e=d.t.b+d.n.b|0;return e<=b&&b<(e+c|0)?1:0;}
function OE(a,b,c){var d;d=a.P.t.a;return (d-c|0)<=b&&b<d?1:0;}
function Pl(a,b,c){var d,e;d=a.p;e=d.t.a+d.n.a|0;return e<=b&&b<(e+c|0)?1:0;}
function L9(a,b,c){var d,e,f;d=a.P.t.a-c|0;e=a.p;f=(e.t.a+e.n.a|0)+c|0;return d<=b&&b<f?1:0;}
function QO(a,b,c){var d,e;d=a.P.t.a+c|0;e=a.p;return ABk(b,d,(e.t.a+e.n.a|0)-c|0);}
function UI(a,b,c){var d,e,f;d=a.P;e=d.t.b;f=e-c|0;e=(e+d.n.b|0)+c|0;return f<=b&&b<e?1:0;}
function TR(a,b,c){var d,e;d=a.P;e=d.t.b;return ABk(b,e+c|0,(e+d.n.b|0)-c|0);}
function ABk(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BD(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function TB(a,b){var c,d,e,f,g,h,i,j,k;c=new Z;d=new Z;e=b.b;f=b.a;b=a.p;g=b.t;h=g.a;i=g.b;b=b.n;j=b.a;k=b.b;b=new NV;b.mB=a;b.mC=f;b.mE=h;b.mw=j;b.mx=e;b.my=i;b.mz=k;b.mu=d;b.mv=c;return b;}
function Tc(a,b){var c,d,e,f,g,h,i;c=new Z;d=new Z;e=b.b;f=b.a;b=a.p;g=b.t.a;b=b.n;h=b.a;i=b.b;b=new Ws;b.pD=a;b.pE=f;b.pH=g;b.pI=h;b.pJ=e;b.pK=i;b.pF=d;b.pG=c;return b;}
function NA(a,b){var c,d,e,f,g;c=new Z;d=b.b;e=b.a;b=a.p.n;f=b.b;g=b.a;b=new SK;b.l7=a;b.l5=d;b.l9=f;b.l8=e;b.l_=g;b.l$=c;return b;}
function Ob(a,b){var c,d,e,f,g,h,i,j;c=new Z;d=new Z;e=b.b;f=b.a;b=a.p;g=b.n;h=g.b;i=g.a;j=b.t.b;b=new Pe;b.nm=a;b.nk=e;b.nl=j;b.np=h;b.nq=f;b.nn=i;b.no=d;b.ns=c;return b;}
var KQ=F(0);
function Qg(){C.call(this);this.ol=null;}
function AKC(a,b){return PP(a.ol,b);}
var XZ=F();
function B9(b,c){return C$(b*c);}
var Xb=F();
function ABW(b,c,d,e,f,g){g.b=c.b;g.a=f;BB(b,d.b,d.a,g,e);BB(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;BB(b,d.b,d.a+f|0,g,e);BB(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ABd(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;BB(b,j,k,i,h);BB(b,j,k,i,h);BB(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;BB(b,l,j,i,h);BB(b,l,j,i,h);BB(b,l+g|0,j+g|0,i,h);}
function Mx(){var a=this;C.call(a);a.bS=null;a.ip=null;a.d8=null;a.dp=0;a.d5=0;a.fX=null;a.fl=null;a.fp=0;}
function RV(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dp;i=Be(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=V(i,e))a:{while(true){if(d<=e){j=d;break a;}Em(c);j=d+(-1)|0;b=CZ(d);d=Be(j,a.d5)%a.d8.a|0;FW(a,c,b,a.fp,g);Hw(a.bS,c,0,d);if(!(j%a.dp|0))break;d=j;}}else{Em(b);k=a.dp-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FW(a,b,CZ(j),Be(a.d5,k)+a.fp|0,g);k=k+(-1)|0;j=h;}CL(a.bS,b);j=V(i,e);}return j;}k=a.dp;h=Be(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=X(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Em(c);b=CZ((d+f|0)+1|0);j=d+1|
0;d=Be(d,a.d5)%a.d8.a|0;FW(a,c,b,a.fp,g);Hw(a.bS,c,0,d);if(!(j%a.dp|0))break;d=j;}}else{Em(b);d=0;while(d<a.dp){h=h+1|0;FW(a,b,CZ((h>e?h-f|0:h)+f|0),Be(a.d5,d)+a.fp|0,g);d=d+1|0;}CL(a.bS,b);j=X(i,e);}return j;}
function Ip(a,b,c,d,e,f){Ex(b,a.ip.b+d.b|0,c+d.a|0,a.fX,a.fl,a.bS,e,f,0.0);}
function FW(a,b,c,d,e){Cf(b,c,a.d8.b-20.0*e,d);}
var FB=F(HW);
var V7=F(Ew);
function Pq(){C.call(this);this.mj=null;}
function ALv(a,b){var c,d;c=a.mj;d=c.de+1|0;c.de=d;c=new M;O(c);G(G(S(c,d),B(324)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function S$(){C.call(this);this.o7=null;}
function AN2(a){var b,c;b=a.o7;c=new M;O(c);G(G(G(c,B(325)),b),B(326));$rt_globals.console.info($rt_ustr(N(c)));}
var Xs=F();
function Ha(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function X5(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
var K9=F(Bm);
var Ln=F(DK);
var AUY=0.0;var AUZ=null;function AAY(){AUY=$rt_globals.NaN;AUZ=E($rt_floatcls());}
var Fn=F();
var AS2=null;var AS4=null;var AS5=null;var AS3=null;var AS1=null;function ZO(){AS2=EU([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AS4=AFa([Bd(1),Bd(10),Bd(100),Bd(1000),Bd(10000),Bd(100000),Bd(1000000),Bd(10000000),Bd(100000000),Bd(1000000000),B_(1410065408, 2),B_(1215752192, 23),B_(3567587328, 232),B_(1316134912, 2328),B_(276447232, 23283),B_(2764472320, 232830),B_(1874919424, 2328306),B_(1569325056, 23283064),B_(2808348672, 232830643)]);AS5=AFa([Bd(1),Bd(10),Bd(100),Bd(10000),Bd(100000000),
B_(1874919424, 2328306)]);AS3=new S9;AS1=new Uw;}
var Jp=F();
var AU0=null;var AU1=null;function AAt(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.nc=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.j1=0;c.jI=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(E0(CS(Bd(e),Bd(8388608)),Ed)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AAz(AU1,f);if(h<0)h=( -h|0)-2|0;i=AU1.data;j=9+(f-i[h]|0)|0;k=Bd(e);l=AU0.data;m=Eu(DV(BM(k,Bd(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=Eu(DV(BM(k,Bd(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BD(q,r);e=e>0?Be(m/q|0,q):e<0?Be(m/r|0,r)+r|0:Be((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.j1=e;c.jI=h-50|0;}
function YZ(){var b,c,d,e,f,g,h,i;AU0=BH(100);AU1=BH(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AU0.data;g=d+50|0;f[g]=$rt_udiv(e,20);AU1.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Eu(Cn(Bd(h),Gd(BM(Bd(b&((1<<i)-1|0)),Bd(10)),i)));f=AU0.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AU1.data[i]=c;d=d+1|0;}}
function Uw(){var a=this;C.call(a);a.j1=0;a.jI=0;a.nc=0;}
function Lg(){var a=this;C.call(a);a.u$=null;a.lV=0.0;a.vt=0.0;a.ev=null;a.gr=null;a.lb=null;a.eD=0;}
function ACf(a,b){var c;if(b!==null){a.gr=b;return a;}c=new BC;Bl(c,B(327));J(c);}
function AAG(a,b){var c;if(b!==null){a.lb=b;return a;}c=new BC;Bl(c,B(327));J(c);}
function O8(a,b,c,d){var e,f,g,$$je;e=a.eD;if(!(e==2&&!d)&&e!=3){a.eD=d?2:1;while(true){try{f=ACh(a,b,c);}catch($$e){$$je=D6($$e);if($$je instanceof Bm){g=$$je;J(AF1(g));}else{throw $$e;}}if(GO(f))return f;if(HK(f)){if(d&&DC(b)){g=a.gr;GR();if(g===ATB)return DP(B4(b));if(B4(c)<=I(a.ev))return ATE;Ev(b,b.R+B4(b)|0);if(a.gr===ATC)Js(c,a.ev);}return f;}if(PC(f)){g=a.gr;GR();if(g===ATB)return f;if(g===ATC){if(B4(c)<I(a.ev))return ATE;Js(c,a.ev);}Ev(b,b.R+Jw(f)|0);}else if(Ld(f)){g=a.lb;GR();if(g===ATB)break;if(g
===ATC){if(B4(c)<I(a.ev))return ATE;Js(c,a.ev);}Ev(b,b.R+Jw(f)|0);}}return f;}b=new DO;U(b);J(b);}
function Ya(a,b){var c,d,e,f;c=a.eD;if(c&&c!=3){b=new DO;U(b);J(b);}if(!B4(b))return ACJ(0);if(a.eD)a.eD=0;d=ACJ(V(8,B4(b)*a.lV|0));while(true){e=O8(a,b,d,0);if(HK(e))break;if(GO(e))d=RA(a,d);if(!J4(e))continue;Ur(e);}b=O8(a,b,d,1);if(J4(b))Ur(b);while(true){f=a.eD;if(f!=3&&f!=2)break;a.eD=3;if(HK(ATF)){d.c9=d.R;d.R=0;d.gV=(-1);return d;}d=RA(a,d);}b=new DO;U(b);J(b);}
function RA(a,b){var c,d,e;c=b.gM;d=XI(c,V(8,c.data.length*2|0));e=Z0(d,0,d.data.length);Ev(e,b.R);return e;}
function MQ(){C.call(this);this.tV=null;}
function ALP(a,b){DG(a.tV,b);}
function UN(){C.call(this);this.n6=null;}
function APF(a,b){var c,d;c=a.n6;d=c.de+1|0;c.de=d;c=b.g1;b=new M;O(b);G(G(S(b,d),B(328)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Zw=F(CO);
function VV(){C.call(this);this.m$=null;}
function AJE(a){PF(a.m$);}
function Qn(){C.call(this);this.mi=null;}
function AH4(a){MY(a.mi);}
function S9(){var a=this;C.call(a);a.kz=Ed;a.js=0;a.mP=0;}
var DO=F(Bm);
var AAT=F(Ew);
function AF1(a){var b=new AAT();AKc(b,a);return b;}
function AKc(a,b){a.iz=1;a.i2=1;a.kl=b;}
var Py=F();
function AOH(a,b){AAZ(b);}
function AB0(){var a=this;C.call(a);a.bA=0;a.bG=0;}
function EG(a,b){var c=new AB0();AJj(c,a,b);return c;}
function AJj(a,b,c){a.bA=b;a.bG=c;}
function Xq(a,b){var c;if(a===b)return 1;if(b!==null&&Cy(a)===Cy(b)){c=b;return a.bA==c.bA&&a.bG==c.bG?1:0;}return 0;}
function AL9(a,b){var c;b=b;c=BD(a.bA,b.bA);if(!c)c=BD(a.bG,b.bG);return c;}
function M3(){var a=this;C.call(a);a.sk=null;a.sm=null;a.sl=0;}
function AD0(a,b){var c,d,e;c=a.sk;d=a.sm;e=a.sl;d.l(Wr(c,(b.j.b+e|0)-c.dw.b|0));}
function M1(){var a=this;C.call(a);a.pd=null;a.pc=null;a.pe=0;}
function AF2(a,b){var c,d,e;c=a.pd;d=a.pc;e=a.pe;d.l(NM(c,(b.j.a+e|0)-c.dw.a|0));}
function T3(){var a=this;C.call(a);a.uS=null;a.uR=null;}
function T1(){C.call(this);this.qm=null;}
function AEW(a,b){var c;c=a.qm;Sh(c,Fr(c,b.j));J3(c.r,c.z,c.y);GB(c);}
function SF(){C.call(this);this.o1=null;}
function AOS(a,b){var c,d,e;c=a.o1;if(c.e.g.cj==c.kp){b=b.data;d=El(b[0]);e=Fx(b[1]);Z5(c.e.g,d,e);OA(c.e.g);}}
function JL(){var a=this;Lg.call(a);a.nt=null;a.rq=null;}
function ACh(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.nt;e=0;f=0;g=a.rq;a:{b:{while(true){if((e+32|0)>f&&DC(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B4(b)+k|0;h=j.length;f=X(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bv;c=new M;O(c);S(G(S(G(c,B(329)),l),B(95)),h);Bl(b,N(c));J(b);}if(B4(b)<m){b=new K7;U(b);J(b);}if(m<0){b=new Bv;c=new M;O(c);G(S(G(c,B(96)),m),B(97));Bl(b,N(c));J(b);}n=b.R;h=n+b.ke|0;e=0;while(e<m){o=k+1|0;i=b.kS.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.R=n+m|0;e=0;}if(!DC(c)){p=!DC(b)&&e>=f?ATF:ATE;break a;}i=g.data;n=B4(c);o=i.length;n=X(n,o);q=new Ub;q.ql=b;q.so=c;p=ACt(a,d,e,f,g,0,n,q);e=q.tE;if(p===null&&0==q.ju)p=ATF;k=q.ju;h=0;if(c.lD){b=new Io;U(b);J(b);}if(B4(c)<k)break;if(h>o){b=new Bv;c=new M;O(c);BA(S(G(S(G(c,B(98)),h),B(92)),o),41);Bl(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bv;c=new M;O(c);S(G(S(G(c,B(100)),l),B(95)),o);Bl(b,N(c));J(b);}if(k<0){b=new Bv;c=new M;O(c);G(S(G(c,B(96)),k),B(97));Bl(b,N(c));J(b);}o=c.R;m=0;while(m<k){l=o+
1|0;n=h+1|0;Rh(c,o,i[h]);m=m+1|0;o=l;h=n;}c.R=c.R+k|0;if(p!==null)break a;}b=new Ht;U(b);J(b);}b=new Bv;c=new M;O(c);BA(S(G(S(G(c,B(98)),k),B(92)),h),41);Bl(b,N(c));J(b);}Ev(b,b.R-(f-e|0)|0);return p;}
var Sv=F(JL);
function ACt(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(JO(h,2))break a;i=ATF;break a;}c=k+1|0;n=j[k];if(!Fu(a,n)){c=c+(-2)|0;i=DP(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(JO(h,3))break a;i=ATF;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Fu(a,n))break b;if(!Fu(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Lm(p)){c=k+(-3)|0;i=DP(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DP(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(JO(h,4))break a;i=ATF;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B4(h.so)<2?0:1)break a;i=ATE;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Fu(a,n))break c;if(!Fu(a,o))break c;if(!Fu(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=HC(r);m=c+1|0;j[c]=H9(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DP(1);break a;}c=k+(-3)|0;i
=DP(1);}h.tE=c;h.ju=f;return i;}
function Fu(a,b){return (b&192)!=128?0:1;}
function O5(){C.call(this);this.q8=null;}
function AE7(a,b){var c,d;c=a.q8;d=c.de+1|0;c.de=d;c=new M;O(c);G(G(S(c,d),B(330)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Uk(){C.call(this);this.w5=null;}
function AKW(a){Bu(By(),B(331));}
function PG(){C.call(this);this.mH=null;}
function ADm(a,b){a.mH.l(Fq(b));}
function TF(){C.call(this);this.rs=null;}
function APe(a,b){a.rs.s();}
function Re(){C.call(this);this.ty=null;}
function AEg(a,b){var c,d,e,f;c=a.ty;d=Ct(b);e=new M;O(e);G(G(e,B(332)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new Rz;d.vm=c;d.oE=b;e=new Ry;e.ug=c;f=new Tz;f.vc=e;e=new UR;e.nd=d;c=b.eC;if(c!==null)c.arrayBuffer().then(Bk(e,"f"),Bk(f,"f"));else{b=b.gg.getFile();c=new UU;c.sh=e;c.si=f;b.then(Bk(c,"f"),Bk(f,"f"));}}
function Rd(){C.call(this);this.vP=null;}
function AEX(a,b){var c;b=Ct(b);c=new M;O(c);G(G(c,B(333)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Z3=F();
var Qz=F();
function AHp(a,b){b=b;b.bS=CX(b.bS,null);}
function RX(){C.call(this);this.lO=null;}
function AJs(a){DA(a.lO);}
var Jj=F(DK);
var AU2=0.0;var AU3=null;function Yh(){AU2=$rt_globals.NaN;AU3=E($rt_doublecls());}
var KN=F();
var AU4=null;var AU5=null;function ZL(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mP=E0(CS(d,B_(0, 2147483648)),Ed)?0:1;e=CS(d,B_(4294967295, 1048575));f=Eu(Gd(d,52))&2047;if(E0(e,Ed)&&!f){c.kz=Ed;c.js=0;return;}g=0;if(f)e=AQN(e,B_(0, 1048576));else{e=E_(e,1);while(E0(CS(e,B_(0, 1048576)),Ed)){e=E_(e,1);f=f+(-1)|0;g=g+1|0;}}h=AAz(AU5,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AU5.data[h]|0)|0;j=Qi(e,AU4.data[h],i);if(YJ(j,B_(2808348672, 232830643))){h=h+1|0;i=12+(f-AU5.data[h]|0)|0;j=Qi(e,AU4.data[h],
i);}k=DV(AU4.data[h],(63-i|0)-g|0);l=Gd(Cn(k,Bd(1)),1);m=Gd(k,1);if(E0(e,B_(0, 1048576)))m=Gd(m,2);n=Bd(10);while(OQ(n,m)){n=BM(n,Bd(10));}if(YJ(L5(j,n),Dg(m,Bd(2))))n=Dg(n,Bd(10));o=Bd(1);while(OQ(o,l)){o=BM(o,Bd(10));}if(AGb(JM(o,L5(j,o)),Dg(l,Bd(2))))o=Dg(o,Bd(10));f=AQ9(n,o);e=f>0?BM(Dg(j,n),n):f<0?Cn(BM(Dg(j,o),o),o):BM(Dg(Cn(j,Dg(o,Bd(2))),o),o);if(YJ(e,B_(2808348672, 232830643))){h=h+1|0;e=Dg(e,Bd(10));}else if(AGt(e,B_(1569325056, 23283064))){h=h+(-1)|0;e=BM(e,Bd(10));}c.kz=e;c.js=h-330|0;}
function Qi(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CS(b,Bd(65535));f=CS(DV(b,16),Bd(65535));g=CS(DV(b,32),Bd(65535));h=CS(DV(b,48),Bd(65535));i=CS(c,Bd(65535));j=CS(DV(c,16),Bd(65535));k=CS(DV(c,32),Bd(65535));l=CS(DV(c,48),Bd(65535));m=Cn(Cn(BM(k,e),BM(j,f)),BM(i,g));n=Cn(Cn(Cn(BM(l,e),BM(k,f)),BM(j,g)),BM(i,h));o=Cn(Cn(E_(BM(l,h),32+d|0),E_(Cn(BM(l,g),BM(k,h)),16+d|0)),E_(Cn(Cn(BM(l,f),BM(k,g)),BM(j,h)),d));return Cn(d>16?Cn(o,E_(n,d-16|0)):Cn(o,DV(n,16-d|0)),DV(m,32-d|0));}
function Zo(){var b,c,d,e,f,g,h,i,j,k;AU4=AR2(660);AU5=BH(660);b=B_(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AU4.data;g=d+330|0;f[g]=Fv(e,Bd(80));AU5.data[g]=c;e=Fv(e,Bd(10));h=MH(e,Bd(10));while(OQ(e,b)&&E0(CS(e,B_(0, 2147483648)),Ed)){e=E_(e,1);c=c+1|0;h=E_(h,1);}e=Cn(e,Dg(h,Bd(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AGb(e,B_(3435973836, 214748364))){e=Gd(e,1);j=j+1|0;d=d+(-1)|0;}k=BM(e,Bd(10));b=j<=0?k:Cn(k,Gd(BM(CS(b,Bd((1<<j)-1|0)),Bd(10)),j));f=AU4.data;g=(330-i|0)-1|0;f[g]=Fv(b,
Bd(80));AU5.data[g]=d;i=i+1|0;}}
function L3(){C.call(this);this.rD=null;}
function AP5(a,b){var c,d;c=a.rD;d=new Bm;Bl(d,$rt_str(b.message));c.l(d);}
function Og(){var a=this;C.call(a);a.lW=null;a.lX=null;}
function ADV(a,b,c,d){var e,f,g,h;b=a.lW;e=a.lX;Sl(b,e);if(LM(d)){f=d.c6;g=e.cy;c=e.eo;h=new Z;f=f.N;YH(h,(f.b-(g*3|0)|0)-c|0,(f.a-g|0)-c|0);Sx(b,h,d.jP,e);}}
function SU(){var a=this;C.call(a);a.qe=0;a.lQ=0;}
function FA(a,b){return OS(a.qe,b,a.lQ);}
function Ey(){var a=this;C.call(a);a.t=null;a.n=null;a.dy=0.0;}
function AQq(){var a=new Ey();KM(a);return a;}
function KM(a){a.t=new Z;a.n=new Z;}
function AK$(a){}
function AOJ(a){return B3(0,0);}
function O3(a,b,c,d){var e;if(!Ks(a.n,c)){a.jy(c);C1(a.n,c);}if(!Ks(a.t,b)){a.jG(b);C1(a.t,b);}e=a.dy;if(e!==d){a.dy=d;a.oT(e,d);}}
function Fo(a,b){return Ha(b,a.t,a.n);}
function Yb(a,b){var c,d,e,f;c=a.t;d=c.b;e=c.a;f=a.n;EF();BB(b,d,e,f,AT$);}
function UO(a,b){var c;c=a.t;T9(b,c.b,c.a,a.n);}
function ANY(a,b){return 0;}
function AGI(a,b){}
function ANF(a,b){}
function APM(a,b,c){}
function AOb(a,b,c,d){return 0;}
function ANt(a,b,c){return null;}
function AOy(a,b,c){return 0;}
function AKw(a,b){return 0;}
function AGA(a,b,c,d){return 0;}
function Go(){var a=this;Ey.call(a);a.cs=null;a.b$=null;}
function AU6(){var a=new Go();SI(a);return a;}
function SI(a){KM(a);a.cs=new Z;a.b$=new Z;}
function ACK(a){var b;b=a.b$;b.b=VH(a,b.b);b=a.b$;b.a=PU(a,b.a);}
function T$(a,b){a.b$.b=VH(a,b);}
function ZK(a,b){a.b$.a=PU(a,b);}
function PU(a,b){return V(0,X(b,a.cs.a-a.n.a|0));}
function VH(a,b){return V(0,X(b,a.cs.b-a.n.b|0));}
function PS(){var a=this;Go.call(a);a.ee=null;a.c_=null;a.gm=null;a.eQ=null;a.dB=null;a.dj=null;a.dQ=null;a.gH=null;a.c5=0;a.fY=0;a.lR=null;a.ej=0;a.em=0;a.hW=0;a.gB=0;a.hd=0;a.j2=null;a.ht=null;a.pV=null;a.jr=null;}
function AR6(a,b){var c=new PS();Y8(c,a,b);return c;}
function Y8(a,b,c){SI(a);a.c_=AJn();a.gm=new Z;a.eQ=new Z;a.dj=AU7;a.dQ=R(Hx,0);a.ej=0;a.em=0;a.hW=0;a.gB=0;a.hd=0;a.j2=new Z;a.ht=ACy(0);a.ee=b;a.pV=c;a.lR=c;a.c5=B9(2.0,b.bE);}
function Vh(a){return a.dj.data.length?0:1;}
function UY(a,b){NX(a);a.dj=b;}
function NX(a){Y(a.gm,0,0);}
function UW(a,b){a.dB=b;a.ht=ACy(En(b));a.fY=C$(b.ll);NX(a);}
function AFM(a,b,c){Si(a);a.c5=B9(2.0,a.ee.bE);}
function AIQ(a,b){ZK(a,b);}
function AIh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=H8(a.ee);if(Vh(a))return;BI(a.dB);Cu(c,a.dB);d=En(a.dB);e=AC4(c,a.fY);f=X(H5(a.c_.x.a,d),a.dj.data.length)+30|0;g=0;a.gB=X((a.b$.a+a.c5|0)/(GS(a)+a.c5|0)|0,a.dj.data.length-1|0);a.hd=X((((a.b$.a+a.c_.x.a|0)-1|0)+a.c5|0)/(GS(a)+a.c5|0)|0,a.dj.data.length-1|0);if(a.dQ.data.length<=0)g=1;else{h=a.gB;a:{b:{while(h<=a.hd){i=IG(a,h);if(i===null)break b;if(i.e4!==a.dj.data[h])break b;h=h+1|0;}break a;}g=1;}}j=a.jr.nC;if(g){a.dQ=ALX(f,a.dQ,a.gB,
a.hd,a.dj,a.ht,j,e);C1(a.gm,Wt(a.ht));AAK(a,a.ee.cT);}k=a.gm;if(!Be(k.b,k.a))return;if(!a.dQ.data.length)return;UO(a,b);l=j.pU;k=a.t;BB(b,k.b,k.a,a.n,l);m=a.c5;k=a.c_.N;n=k.b;o=k.a;p=M6(a,a.j2);q=a.gB;r=n+m|0;while(q<=a.hd){i=IG(a,q);s=Be(q,GS(a));h=q+1|0;t=s+Be(h,a.c5)|0;s=r+a.ej|0;u=s+a.em|0;v=p!=q?0:1;w=(o+t|0)-a.b$.a|0;k=!v?l:j.qN;Ex(b,r,w,i.gn,i.ik,a.gH,j.nV,k,0.0);Ex(b,s,w,i.gS,i.hw,a.gH,j.sH,k,0.0);Ex(b,u,w,i.gY,i.h2,a.gH,j.tB,k,0.0);s=i.gn.b;x=r+s|0;Y(a.eQ,V(0,a.ej-s|0),i.gn.a);BB(b,x,w,a.eQ,k);y=r+
a.ej|0;s=i.gS.b;y=y+s|0;Y(a.eQ,V(0,a.em-s|0),i.gS.a);BB(b,y,w,a.eQ,k);s=i.gY.b;z=u+s|0;Y(a.eQ,V(0,(((a.c_.x.b-s|0)-a.em|0)-a.ej|0)-(a.c5*2|0)|0),i.gY.a);BB(b,z,w,a.eQ,k);q=h;}KY(b);}
function AAK(a,b){var c,d,e,f,g,h,i,j,k;c=a.gm;c=CJ(b,c.b+150|0,c.a);Cu(c,a.dB);d=a.dB;e=d.db;f=e-(e+d.dT)/16.0;g=a.dQ.data;h=g.length;i=0;while(i<h){j=g[i];if(j!==null){d=j.e4.i3;k=j.ik;Cf(c,d,k.bh+a.fY,f+k.bt);d=j.e4.hR;k=j.hw;Cf(c,d,k.bh+a.fY,f+k.bt);d=j.e4.h5;k=j.h2;Cf(c,d,k.bh+a.fY,f+k.bt);}i=i+1|0;}b=CX(a.gH,CR(b));a.gH=b;CL(b,c);FD(c);}
function IG(a,b){var c;c=a.dQ.data;return c[b%c.length|0];}
function AJq(a,b){C1(a.c_.x,b);}
function AGj(a,b){Y(a.c_.N,b.b,b.a);}
function Ys(a){var b,c,d;b=(a.ej+a.em|0)+a.hW|0;c=GS(a);d=a.dj.data.length;c=Be(c,d)+Be(a.c5,d+1|0)|0;Y(a.cs,b,c);}
function Si(a){var b,c,d,e,f,g,h,i,j;b=H8(a.ee);if(Vh(a))return;BI(a.dB);Cu(b,a.dB);c=AC4(b,a.fY);d=a.dj.data;e=d.length;f=0;while(f<e){g=d[f];h=Ja(c,g.i3);i=Ja(c,g.hR);j=Ja(c,g.h5);a.ej=V(a.ej,h);a.em=V(a.em,i);a.hW=V(a.hW,j);f=f+1|0;}}
function AOR(a,b){C1(a.j2,b.j);return Eh(a.c_,a.t)&&GX(a.ee.cp)?1:0;}
function ADQ(a,b,c){if(!Eh(a.c_,b.j)&&!Li(a.c_)){b=a.lR;if(b!==null)b.s();}return AUo;}
function AD6(a,b,c,d){var e,f;if(d==1){e=M6(a,b.j);if(e>=0){f=IG(a,e);a.pV.s();f.e4.lU.s();}}return 1;}
function M6(a,b){var c,d,e;if(!a.dQ.data.length)return (-1);c=GS(a);d=(b.a-a.t.a|0)+a.b$.a|0;e=a.c5;return (d+e|0)/(c+e|0)|0;}
function GS(a){return En(a.dB);}
var Mn=F();
function AEc(a){}
function Zc(){var a=this;Ey.call(a);a.kP=null;a.qO=null;a.s2=null;a.bH=null;a.dm=null;a.dr=null;a.rE=0.0;}
function Yd(a,b){var c=new Zc();AOG(c,a,b);return c;}
function AOG(a,b,c){var d;KM(a);d=new S0;d.nw=a;a.qO=d;d=new S1;d.qB=a;a.s2=d;a.rE=10.0;a.bH=b;a.kP=c.cp;}
function AFS(a,b,c,d){var e;O3(a,b,c,d);O3(a.bH,b,c,d);if(d!==0.0){a.bH.tC();ACK(a.bH);e=a.n.b;if(e>0&&a.bH.cs.b>e?1:0)JJ(a);else a.dr=null;e=a.n.a;if(e>0&&a.bH.cs.a>e?1:0)Kk(a);else a.dm=null;}}
function JJ(a){var b,c,d,e,f,g;b=a.dr;if(b===null){b=G5();a.dr=b;}c=a.bH;d=c.b$.b;e=a.t;f=e.b;g=a.n;LH(b,d,f,g.b,c.cs.b,e.a+g.a|0,I3(a));}
function Kk(a){var b,c,d,e,f,g;b=a.dm;if(b===null){b=G5();a.dm=b;}c=a.bH;d=c.b$.a;e=a.t;f=e.a;g=a.n;HZ(b,d,f,g.a,c.cs.a,e.b+g.b|0,I3(a));}
function I3(a){return B9(a.rE,a.dy);}
function ANa(a,b){var c;a.bH.ex(b);if(!(a.dm===null&&a.dr===null)){CI(b,1);c=a.dm;if(c!==null)FL(c,b);c=a.dr;if(c!==null)FL(c,b);c=a.dm;if(c!==null)F4(c,b);c=a.dr;if(c!==null)F4(c,b);CI(b,0);}}
function Me(a,b){var c,d;a:{b:{c=a.dm;if(!(c!==null&&Id(c,b))){c=a.dr;if(c===null)break b;if(!Id(c,b))break b;}d=1;break a;}d=0;}return d;}
function AHP(a,b,c,d){return !Me(a,b.j)&&!a.bH.cm(b,c,d)?0:1;}
function AOe(a,b,c){var d,e;d=a.dm;if(d!==null){e=E4(d,b.j,a.qO,1);if(e!==null)return e;}d=a.dr;if(d!==null){e=E4(d,b.j,a.s2,0);if(e!==null)return e;}return a.bH.im(b,c);}
function AHr(a,b,c){return Me(a,b.j)?1:0;}
function AIH(a,b){var c,d,e;c=a.dm;d=c!==null&&Fc(c,b.j,a.kP)?1:0;c=a.dr;e=c!==null&&Fc(c,b.j,a.kP)?1:0;return !d&&!e&&!a.bH.bX(b)?0:1;}
function ANn(a,b,c,d){var e,f;if(!Fo(a,b.j))return 0;e=B9(d*0.25,a.dy);f=B9(c*0.25,a.dy);if(b.bw){f=f+e|0;e=0;}if(a.dm!==null&&e){b=a.bH;b.jY(b.b$.a+e|0);Kk(a);}if(a.dr!==null&&f){b=a.bH;T$(b,b.b$.b+f|0);JJ(a);}return 1;}
function AKT(a){var b,c;b=I3(a);c=a.bH.cW();c.b=V(c.b,b);c.a=V(c.a,b);return c;}
function U1(){var a=this;Go.call(a);a.hr=null;a.kJ=null;a.rn=null;a.o4=0.0;}
function ALx(a){var b,c;b=a.cs;c=a.n;Y(b,c.b*3|0,c.a*5|0);}
function AJu(a){var b;b=B9(20.0,a.dy);return B3(b,b);}
function AIj(a,b){var c,d,e,f;c=a.rn;d=c.se;e=c.sf;c=c.sd;b=Ct(b);f=new M;O(f);G(G(G(f,c),B(36)),b);H6(e,N(f),d.sb,3.0);}
function AGc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;Yb(a,b);UO(a,b);c=B9(30.0,a.dy);d=a.b$;e=d.b;f=Be(e/c|0,c);g=d.a;h=Be(g/c|0,c);d=a.n;i=Be(((e+d.b|0)-1|0)/c|0,c);e=Be(((g+d.a|0)-1|0)/c|0,c);d=a.kJ;d.a=c;d.b=c;a.hr.bu=1.0;while(h<=e){g=a.t.a-a.b$.a|0;j=f;while(j<=i){k=a.t.b-a.b$.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AB9(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;VT(n,0.75,a.o4,a.hr);BB(b,k+j|0,g+h|0,a.kJ,a.hr);j=j+c|0;}h=h+c|0;}KY(b);}
function AIW(a,b){}
function OF(){var a=this;C.call(a);a.se=null;a.sf=null;a.sd=null;}
function WB(){C.call(this);this.kG=null;}
var AU7=null;function ALF(){var a=new WB();YG(a);return a;}
function YG(a){a.kG=Cl();}
function Mo(a,b,c,d,e){var f;f=new IS;f.lU=e;f.hR=c;f.h5=d;f.i3=b;BX(a.kG,f);}
function PR(a){return Hm(a.kG,AU7);}
function UJ(b){return b===null?B(31):b.Ea();}
function Zg(){AU7=R(IS,0);}
function Hx(){var a=this;C.call(a);a.ik=null;a.hw=null;a.h2=null;a.gn=null;a.gS=null;a.gY=null;a.e4=null;}
function ALX(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=R(Hx,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=WH(f.data[d],h,g,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.e4!==n){ACD(g,q);m[o]=WH(n,h,g,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=WH(n,h,g,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){ACD(g,r);j[d]=null;}d=d+1|0;}return k;}
function WH(b,c,d,e){var f;f=new Hx;f.gn=new Z;f.gS=new Z;f.gY=new Z;f.e4=b;c=GZ(d,b.i3,e);f.ik=c;Y(f.gn,c.be|0,c.bu|0);c=GZ(d,b.hR,e);f.hw=c;Y(f.gS,c.be|0,c.bu|0);b=GZ(d,b.h5,e);f.h2=b;Y(f.gY,b.be|0,b.bu|0);return f;}
function ACD(b,c){HM(b,c.ik);HM(b,c.hw);HM(b,c.h2);}
function Sq(){var a=this;Ey.call(a);a.gt=null;a.gw=null;a.gc=null;a.dx=null;a.il=0.0;a.gi=0;a.hg=0;a.cR=null;a.k2=null;}
function K5(a){var b;b=a.n;return b.b&&b.a?0:1;}
function ST(a){var b,c;a:{if(a.gc!==null){b=a.gw;if(b!==null&&!Fb(b)){c=0;break a;}}c=1;}return c;}
function WI(a,b){a.n.a=b;}
function Ou(a,b,c,d,e){var f,g;f=a.gt.jH;Y(f,d,a.n.a);g=a.t;BB(b,g.b+c|0,g.a,f,e);}
function PV(a){if(a.dx===null)a.dx=Gy(a.gt,a.gc);}
function S0(){C.call(this);this.nw=null;}
function AJ3(a,b){var c,d;c=a.nw;d=FA(b,c.bH.cs.a-c.n.a|0);c.bH.jY(d);Kk(c);}
function S1(){C.call(this);this.qB=null;}
function AH9(a,b){var c,d;c=a.qB;d=FA(b,c.bH.cs.b-c.n.b|0);T$(c.bH,d);JJ(c);}
var QY=F(DK);
var AU8=null;function Fv(b,c){return Long_udiv(b, c);}
function MH(b,c){return Long_urem(b, c);}
function Kx(b,c){return Long_ucompare(b, c);}
function Zm(){AU8=E($rt_longcls());}
function SR(){var a=this;C.call(a);a.nZ=null;a.n0=null;a.nY=null;}
function ANw(a){var b,c,d,e,f;b=a.nZ;c=a.n0;d=a.nY;e=By();f=new M;O(f);b=G(f,b);BA(b,9);b=G(b,c);BA(b,9);G(b,d);Bu(e,N(f));}
function IS(){var a=this;C.call(a);a.lU=null;a.hR=null;a.h5=null;a.i3=null;}
var E6=F(Bm);
function MT(){var a=this;C.call(a);a.mb=null;a.o5=null;a.sq=0;a.tw=0;}
function K0(a,b){return B4(a.o5)<b?0:1;}
var AB3=F();
function Tx(b,c,d,e){var f,g;f=b.next();g=new Wk;g.mq=b;g.mp=c;g.mt=d;g.mr=e;f.then(Bk(g,"f"),Bk(d,"f"));}
function XL(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ACu(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DW()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Wg;f.pM=b;f.pN=d;d.addEventListener("change",Bk(f,"handleEvent"));d.click();}
function XS(b,c){var d;if(c.isFile?1:0)b.l(Xj(c.file()));else{c=c.createReader();d=new V6;d.sD=b;c.readEntries(Bk(d,"f"));}}
function RO(){var a=this;C.call(a);a.bp=null;a.gR=null;a.U=null;}
function H4(a){return a.gR.eU.h_;}
function Nk(a){var b;b=new Ol;b.o3=a;return b;}
function AC9(a){var b,c,d,e,f,g;b=R(C5,4);c=b.data;d=a.U.bk.bg.X;e=a.bp;BI(e);f=new UP;f.r$=e;c[0]=D_(B(334),d,f);e=a.U.bk.bg.X;f=a.bp;BI(f);g=new UT;g.nb=f;c[1]=D_(B(335),e,g);e=a.U.bk.bg.X;f=a.bp;BI(f);g=new US;g.q7=f;c[2]=D_(B(336),e,g);e=a.U.bk.bg.X;f=a.bp;BI(f);g=new UQ;g.ub=f;c[3]=D_(B(337),e,g);return FG(b);}
function IA(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{DA(a.U.b1);d=a.bp.e;e=Df(d);f=GG(d);g=a.bp.dW;if(c===null)h=null;else{AQy();switch(AU9.data[c.cH]){case 1:h=Ka(g,e,f);break a;case 2:h=UH(g,e,f);break a;default:}b=new Eg;U(b);J(b);}}c=a.bp;e=Fr(c,b);if(h!==null){f=c.e;i=e.bA;j=e.bG;e=new Ux;e.vA=c;e.vz=b;h.ry(f,i,j,e,c.gv);}else{Wx(c.e.g,e);f=Ek(c.e.g.dM,e);if(f!==null)He(c,f);else{e=Ek(c.e.g.d7,e);if(e!==null&&!D3(e))Rx(c.hZ,b,e,c);else{e=c.hZ;DA(e.b1);f=e.b1;k=R(C5,1);l=k.data;g=new C5;BI(f);m=new V$;m.tT=f;JV(g,
m,B(338),e.bk.bg.tS);l[0]=g;F2(f,b,FG(k),MK(e,c));}}}}
function Sr(){var a=this;C.call(a);a.v1=null;a.v2=null;a.vZ=0;a.v0=0;}
var Wm=F();
function ANg(a,b){XL(b);}
function Wl(){var a=this;C.call(a);a.o9=null;a.o8=null;}
function AF8(a,b){var c,d,e,f,g,h,i;c=a.o9;d=a.o8;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new O4;i.nA=c;i.nz=g;h.then(Bk(i,"f"),Bk(d,"f"));e=e+1|0;}}
var VM=F();
function AHv(a,b){XL(b);}
function VL(){var a=this;C.call(a);a.os=null;a.ot=null;}
function AIn(a,b){var c,d,e,f,g;c=a.os;d=a.ot;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bw,1);g.data[0]=Fq(b.name);Tx(f,c,d,g);}
var Xu=F();
function AAp(b,c){return ABf(null,b,c,0);}
function ABf(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AHW(c);g=B$(f);h=B$(f);i=B$(f);j=R(Cw,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<CA(b)){l=B$(f);c[k]=B1(b,k);l=4*l|0;f.e7=f.e7+l|0;}else c[k]=DE(Xy(f,d,0));k=k+1|0;}m=ACF(f,h);n=new Jx;n.dM=HD();n.d7=HD();n.eX=Cl();if(!c.length){b=new BC;U(b);J(b);}n.D=j;n.fg=0;n.cj=0;n.cQ=ARA(m);b=n.dM;e=0;while(e<i){Sa(b,EG(B$(f),B$(f)),EG(B$(f),B$(f)));e=e+1|0;}b=n.dM;m=n.d7;o=new TA;Ru(o,b);while(IE(o)){Ti(o);b=o.gD;p=b.hD;q=b.fu;b=Cl();if(Ek(m,q)===null)Sa(m,q,b);BX(Ek(m,
q),p);}if(m.jS===null){b=new Ok;b.tK=m;m.jS=b;}b=m.jS;q=new PY;Ru(q,b.tK);while(IE(q)){Ti(q);b=q.gD.fu;m=ASQ;c=R(C,b.i);d=c.data;Hm(b,c);YT(c,m);e=0;g=d.length;while(e<g){m=d[e];Iy(b,e);b.b9.data[e]=m;e=e+1|0;}}N2(f);return n;}
function Z5(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AHW(c);g=B$(f);h=B$(f);i=B$(f);j=B$(f);k=MR(b,g);l=MR(b,h);m=(H7(B1(b,k.b),k.a)).data[0].q;e=(H7(B1(b,l.b),l.a)).data[1].q;n=0;o=i-1|0;while(n<i){p=Xy(f,d,g);if(!n)p=KZ(m,p);if(n==o)p=KZ(p,e);q=k.b+n|0;r=DE(p);b.D.data[q]=r;n=n+1|0;}r=ACF(f,j);N2(f);if(!D3(r)){s=Nf(g,h,(-1));b=b.cQ;f=AQD(s,r);r=JW(b,b.cz,s);if(r!==null){f=f.cz.br;if(r===b.cz)b.cz=Bs(f,0);else if(r.dq!==null){b=new Nd;b.ro=r;Jn(f,b);q=Ps(r.dq.br,
r);Ec(r.dq.br,q);b=r.dq.br;Ov(b,q);if(!D3(f)){IJ(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.b9.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BR(f);g=0;while(g<j){c=b.b9.data;h=q+1|0;c[q]=BV(f);g=g+1|0;q=h;}b.cl=b.cl+1|0;}}}}}
function Xy(b,c,d){var e,f,g,h,i,j,k,l;e=B$(b);f=R(B5,e);g=f.data;h=0;while(h<e){i=B$(b);j=B$(b);k=B$(b);l=B$(b);g[h]=Dv(I8(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ACF(b,c){var d,e;d=Cl();e=0;while(e<c){BX(d,Nf(B$(b),B$(b),B$(b)));e=e+1|0;}return d;}
var VS=F(0);
var AUh=null;function XJ(){AUh=null;}
function Wg(){var a=this;C.call(a);a.pM=null;a.pN=null;}
function AHm(a,b){var c,d,e,f,g,h;b=a.pM;c=a.pN;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new LZ;h.mm=b;h.ml=g;$rt_globals.setTimeout(Bk(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Xj(d.item(f));g=new LI;g.q$=b;g.q_=c;$rt_globals.setTimeout(Bk(g,"onTimer"),0);f=f+1|0;}}
function YY(){var a=this;C.call(a);a.hE=null;a.jB=null;}
function ACl(){var a=this;C.call(a);a.wZ=0;a.wN=0;a.rH=0;a.kh=0;}
function Tq(){var a=this;C.call(a);a.m0=null;a.mY=null;}
function AH0(a){var b,c,d,e,f,g;b=a.m0;c=a.mY;if(D$(c.hE,b.e.fA)){c=c.jB;Cz(b,c.kh,c.rH,0);B0(b.r.bI,c.kh,c.rH);B0(b.r.by,c.wN,c.wZ);}else{d=(Cm(b.dW.qL)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Cg(b);b=new NZ;b.nJ=g;b.nK=c;BI(b);c=new OW;c.t_=b;$rt_globals.setTimeout(Bk(c,"onTimer"),0);}}}
function Ts(){var a=this;C.call(a);a.uc=null;a.t$=null;}
function AMM(a){He(a.uc,a.t$);}
function XP(){var a=this;C.call(a);a.iE=null;a.e7=0;}
function AHW(a){var b=new XP();ANW(b,a);return b;}
function ANW(a,b){a.iE=b;a.e7=0;}
function B$(a){var b,c;b=a.iE.data;c=a.e7;a.e7=c+1|0;return b[c];}
function N2(a){var b,c,d,e;if(a.e7!=a.iE.data.length){b=KX();c=a.iE.data.length;d=a.e7;e=new M;O(e);G(S(G(S(G(e,B(339)),c),B(340)),d),B(341));Bu(b,N(e));}}
var Io=F(E6);
var Ht=F(Bm);
var K7=F(Bm);
function YC(){C.call(this);this.C7=null;}
function Uo(){var a=this;C.call(a);a.ng=null;a.nf=null;}
function AMB(a){var b,c;b=a.ng;c=a.nf;WK(b.d3,c);}
function VY(){C.call(this);this.pB=null;}
function ANk(a,b){Hl(a.pB,b);}
function Rp(){C.call(this);this.n4=null;}
function AEm(a){var b;b=a.n4;Jt(b.dt,b.da);Hj(b.da);b.da=null;}
var Xd=F();
function QS(b,c){return b.data[c];}
function GJ(){var a=this;C.call(a);a.ek=0;a.eS=0;a.ko=null;a.i_=0;a.gA=null;}
function ADL(a,b,c,d,e,f){var g=new GJ();AID(g,a,b,c,d,e,f);return g;}
function AID(a,b,c,d,e,f,g){a.ek=b;a.eS=c;a.ko=B3(f,g);a.i_=d;a.gA=e;}
function AA_(){F3.call(this);this.A6=null;}
function Ok(){EC.call(this);this.tK=null;}
var VD=F(Bv);
var Pw=F(0);
var MO=F(0);
var K_=F();
function Y3(){var a=this;K_.call(a);a.C8=null;a.E3=0;a.DE=0;a.Bk=0;}
function Qt(){var a=this;C.call(a);a.nE=null;a.nD=null;}
function AE0(a){var b,c;b=a.nE;c=a.nD;TU();IA(b,c,AU$);}
function Qs(){var a=this;C.call(a);a.ov=null;a.ox=null;}
function ADt(a){var b,c;b=a.ov;c=a.ox;TU();IA(b,c,AU_);}
function Qr(){var a=this;C.call(a);a.tX=null;a.tY=null;}
function AJl(a){IA(a.tX,a.tY,null);}
function Qq(){var a=this;C.call(a);a.mX=null;a.mZ=null;}
function AN0(a){var b,c,d,e,f,g,h;b=a.mX;c=a.mZ;d=Df(b.bp.e);e=GG(b.bp.e);d=MI(b.bp.dW,d,e);DA(b.U.b1);b=b.bp;e=Fr(b,c);if(d!==null){f=b.e;g=e.bA;h=e.bG;e=new V2;e.ut=b;e.uu=c;d.FW(f,g,h,1,e,b.gv);}}
function OH(){C.call(this);this.ps=null;}
function ANj(a){var b;b=a.ps;DA(b.U.b1);Kr(b.bp,Nk(b),0);}
function OJ(){C.call(this);this.sJ=null;}
function AIs(a){var b;b=a.sJ;DA(b.U.b1);Kr(b.bp,Nk(b),1);}
function OK(){C.call(this);this.rR=null;}
function AFu(a){var b,c,d;b=a.rR;DA(b.U.b1);c=H4(b);b=b.bp;BI(b);d=new RS;d.rS=b;PQ(c,d,XG(B(342)));}
function U9(){C.call(this);this.r5=null;}
function AEj(a){var b,c,d;b=a.r5;DA(b.U.b1);c=H4(b);b=b.bp;BI(b);d=new P6;d.pX=b;K8(c,d);}
function U0(){C.call(this);this.rO=null;}
function AKg(a,b,c){var d,e;c=a.rO;d=c.e.g;e=b.e5;b=c.el;We(d.D.data[e],0,b);}
function RJ(){C.call(this);this.nH=null;}
function AIX(a){SQ(a.nH);}
function RK(){C.call(this);this.qK=null;}
function AKe(a){AAf(a.qK);}
function Np(){C.call(this);this.q9=null;}
function AHU(a){var b;b=a.q9;Ku(b,b.en.ly,b.fF+1|0);}
function No(){C.call(this);this.pS=null;}
function AN9(a){var b,c;b=a.pS;c=b.fF;if(c>7)Ku(b,b.en.ly,c-1|0);}
function Ue(){C.call(this);this.qz=null;}
function AFY(a){var b,c,d,e,f,g,h,i;b=a.qz;c=(b.gR.oD()).data;d=R(C5,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new W7;i.o0=b;i.oZ=h;e[f]=ACe(i,h,b.U.bk.bg.X);f=f+1|0;}return d;}
function UP(){C.call(this);this.r$=null;}
function AL3(a){var b,c,d,e,f;b=a.r$.e.g;c=b.cj;d=new M;O(d);S(G(d,B(343)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fg;d=new M;O(d);S(G(d,B(344)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.cQ;e=FJ(F8(b));Q_(d,0,d.cz,e);b=By();f=b.jK;f.data[0]=10;Nb(b,f,0,1);}
function UT(){C.call(this);this.nb=null;}
function AI5(a){RE(a.nb);}
function US(){C.call(this);this.q7=null;}
function AEd(a){VI(a.q7);}
function UQ(){C.call(this);this.ub=null;}
function AF5(a){Jq(a.ub);}
function RF(){C.call(this);this.tq=null;}
function AIb(a,b,c){FH(B1(a.tq.e.g,b.e5),0,I(c));}
function O4(){var a=this;C.call(a);a.nA=null;a.nz=null;}
function AGk(a,b){a.nA.l(AAD(a.nz,b));}
var Ih=F(0);
function LZ(){var a=this;C.call(a);a.mm=null;a.ml=null;}
function AIt(a){XS(a.mm,a.ml);}
function LI(){var a=this;C.call(a);a.q$=null;a.q_=null;}
function ADf(a){a.q$.l(a.q_);}
function Wk(){var a=this;C.call(a);a.mq=null;a.mp=null;a.mt=null;a.mr=null;}
function AHK(a,b){var c,d,e,f,g,h,i;c=a.mq;d=a.mp;e=a.mt;f=a.mr;if(!(b.done?1:0)){Tx(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Tf;c.ou=d;c.ow=g;c.oy=f;b.then(Bk(c,"f"),Bk(e,"f"));}else{h=f.data;c=g.values();b=Fq(g.name);i=h.length;f=Dc(f,i+1|0);f.data[i]=b;Tx(c,d,e,f);}}}
function GD(){var a=this;C.call(a);a.hL=0;a.re=0;a.g8=null;a.gD=null;a.oJ=null;a.it=null;}
function AVa(a){var b=new GD();Ru(b,a);return b;}
function Ru(a,b){a.it=b;a.re=b.f_;a.g8=null;}
function IE(a){var b,c;if(a.g8!==null)return 1;while(true){b=a.hL;c=a.it.cF.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hL=b+1|0;}return 0;}
function YD(a){var b;if(a.re==a.it.f_)return;b=new K9;U(b);J(b);}
function Ti(a){var b,c,d,e;YD(a);if(!IE(a)){b=new WV;U(b);J(b);}b=a.g8;if(b!==null){c=a.gD;if(c!==null)a.oJ=c;a.gD=b;a.g8=b.eN;}else{d=a.it.cF.data;e=a.hL;a.hL=e+1|0;b=d[e];a.gD=b;a.g8=b.eN;a.oJ=null;}}
var TA=F(GD);
var PY=F(GD);
var SX=F(0);
var AUo=null;function ZW(){AUo=new RW;}
function PW(){var a=this;C.call(a);a.f=null;a.c3=0;a.jz=null;a.mU=0;a.fO=0;a.d9=0;a.bo=0;a.kw=null;}
function Jf(a){return a.f.bB;}
function WM(a,b,c,d){var e,f,g,h,i,j;e=Cl();f=a.c3;g=0;if(c!=f)a.c3=c;a:{switch(b){case -1073741784:h=new QH;c=a.bo+1|0;a.bo=c;E$(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OO;c=a.bo+1|0;a.bo=c;E$(h,c);break a;case -33554392:h=new RN;c=a.bo+1|0;a.bo=c;E$(h,c);break a;default:c=a.fO+1|0;a.fO=c;if(d!==null)h=ARK(c);else{h=new Fi;E$(h,0);g=1;}c=a.fO;if(c<=(-1))break a;if(c>=10)break a;a.jz.data[c]=h;break a;}h=new WG;E$(h,(-1));}while(true){if(EM(a.f)&&a.f.h==(-536870788))
{d=AOs(B7(a,2),B7(a,64));while(!Db(a.f)&&EM(a.f)){i=a.f;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cr(d,Bf(i));i=a.f;if(i.bd!=(-536870788))continue;Bf(i);}i=J9(a,d);i.K(h);}else if(a.f.bd==(-536870788)){i=Gu(h);Bf(a.f);}else{i=Oa(a,h);d=a.f;if(d.bd==(-536870788))Bf(d);}if(i!==null)BX(e,i);if(Db(a.f))break;if(a.f.bd==(-536870871))break;}if(a.f.jZ==(-536870788))BX(e,Gu(h));if(a.c3!=f&&!g){a.c3=f;d=a.f;d.fw=f;d.h=d.bd;d.d1=d.ed;j=d.cN;d.u=j+1|0;d.gG=j;EQ(d);}switch(b){case -1073741784:break;case -536870872:d
=new LX;Fk(d,e,h);return d;case -268435416:d=new U$;Fk(d,e,h);return d;case -134217688:d=new PZ;Fk(d,e,h);return d;case -67108824:d=new Sy;Fk(d,e,h);return d;case -33554392:d=new DF;Fk(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return ARv(Bs(e,0),h);default:return AQ8(e,h);}return Gu(h);}d=new Im;Fk(d,e,h);return d;}
function ABx(a){var b,c,d,e,f,g,h;b=BH(4);c=(-1);d=(-1);if(!Db(a.f)&&EM(a.f)){e=b.data;c=Bf(a.f);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BQ(3);b=e.data;b[0]=c&65535;f=a.f;g=f.bd;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bf(f);f=a.f;g=f.bd;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bf(f);return AOa(e,3);}return AOa(e,2);}if(!B7(a,2))return YB(b[0]);if(B7(a,64))return AMk(b[0]);return AFb(b[0]);}e=b.data;c=1;while(c<4&&!Db(a.f)&&EM(a.f)){h=c+1|0;e[c]=Bf(a.f);c=h;}if(c==1){h=e[0];if(!(AVb.wt(h)==AVc?0:1))return WC(a,e[0]);}if
(!B7(a,2))return ASm(b,c);if(B7(a,64)){f=new Wj;M9(f,b,c);return f;}f=new SM;M9(f,b,c);return f;}
function Oa(a,b){var c,d,e,f,g,h,i;if(EM(a.f)&&!I5(a.f)&&JF(a.f.h)){if(B7(a,128)){c=ABx(a);if(!Db(a.f)){d=a.f;e=d.bd;if(!(e==(-536870871)&&!(b instanceof Fi))&&e!=(-536870788)&&!EM(d))c=Lp(a,b,c);}}else if(!Ng(a.f)&&!Ug(a.f)){f=new Nh;O(f);while(!Db(a.f)&&EM(a.f)&&!Ng(a.f)&&!Ug(a.f)){if(!(!I5(a.f)&&!a.f.h)&&!(!I5(a.f)&&JF(a.f.h))){g=a.f.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bf(a.f);if(!Lh(e))BA(f,e&65535);else HR(f,Ge(e));}if(!B7(a,2)){c=new Qv;Dq(c);c.ce
=N(f);e=f.M;c.bz=e;c.jO=AKL(e);c.kA=AKL(c.bz);h=0;while(h<(c.bz-1|0)){P3(c.jO,L(c.ce,h),(c.bz-h|0)-1|0);P3(c.kA,L(c.ce,(c.bz-h|0)-1|0),(c.bz-h|0)-1|0);h=h+1|0;}}else if(B7(a,64))c=ASj(f);else{c=new Mw;Dq(c);c.gI=N(f);c.bz=f.M;}}else c=Lp(a,b,Wi(a,b));}else{d=a.f;if(d.bd!=(-536870871))c=Lp(a,b,Wi(a,b));else{if(b instanceof Fi)J(B6(B(31),d.bB,Ne(d)));c=Gu(b);}}a:{if(!Db(a.f)){e=a.f.bd;if(!(e==(-536870871)&&!(b instanceof Fi))&&e!=(-536870788)){f=Oa(a,b);if(c instanceof CW&&!(c instanceof ER)&&!(c instanceof CN)
&&!(c instanceof Ep)){i=c;if(!f.bJ(i.G)){c=new Vn;EE(c,i.G,i.d,i.g4);c.G.K(c);}}if((f.g9()&65535)!=43)c.K(f);else c.K(f.G);break a;}}if(c===null)return null;c.K(b);}if((c.g9()&65535)!=43)return c;return c.G;}
function Lp(a,b,c){var d,e,f,g,h;d=a.f;e=d.bd;if(c!==null&&!(c instanceof BS)){switch(e){case -2147483606:Bf(d);d=new W2;C8(d,c,b,e);Lt();c.K(AVd);return d;case -2147483605:Bf(d);d=new OG;C8(d,c,b,(-2147483606));Lt();c.K(AVd);return d;case -2147483585:Bf(d);d=new Om;C8(d,c,b,(-536870849));Lt();c.K(AVd);return d;case -2147483525:f=new Mq;d=EY(d);g=a.d9+1|0;a.d9=g;Ix(f,d,c,b,(-536870849),g);Lt();c.K(AVd);return f;case -1073741782:case -1073741781:Bf(d);d=new Qm;C8(d,c,b,e);c.K(d);return d;case -1073741761:Bf(d);d
=new Pt;C8(d,c,b,(-536870849));c.K(b);return d;case -1073741701:h=new TX;d=EY(d);e=a.d9+1|0;a.d9=e;Ix(h,d,c,b,(-536870849),e);c.K(h);return h;case -536870870:case -536870869:Bf(d);if(c.g9()!=(-2147483602)){d=new CN;C8(d,c,b,e);}else if(B7(a,32)){d=new Qo;C8(d,c,b,e);}else{d=new Nq;f=Op(a.c3);C8(d,c,b,e);d.jX=f;}c.K(d);return d;case -536870849:Bf(d);d=new FE;C8(d,c,b,(-536870849));c.K(b);return d;case -536870789:h=new EZ;d=EY(d);e=a.d9+1|0;a.d9=e;Ix(h,d,c,b,(-536870849),e);c.K(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bf(d);d=new W4;EE(d,f,b,e);f.d=d;return d;case -2147483585:Bf(d);c=new Vi;EE(c,f,b,(-2147483585));return c;case -2147483525:c=new N$;Q8(c,EY(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new Pp;EE(d,f,b,e);f.d=d;return d;case -1073741761:Bf(d);c=new S6;EE(c,f,b,(-1073741761));return c;case -1073741701:c=new P0;Q8(c,EY(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=ARC(f,b,e);f.d=d;return d;case -536870849:Bf(d);c
=new Ep;EE(c,f,b,(-536870849));return c;case -536870789:return AQK(EY(d),f,b,(-536870789));default:}return c;}
function Wi(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fi;while(true){a:{e=a.f;f=e.bd;if((f&(-2147418113))==(-2147483608)){Bf(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.c3=g;else{if(f!=(-1073741784))g=a.c3;c=WM(a,f,g,b);e=a.f;if(e.bd!=(-536870871))J(B6(B(31),e.bB,e.cN));Bf(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(e);c
=ANZ(0);break a;case -2147483577:Bf(e);c=new Nm;BK(c);break a;case -2147483558:Bf(e);c=new V1;h=a.bo+1|0;a.bo=h;ABZ(c,h);break a;case -2147483550:Bf(e);c=ANZ(1);break a;case -2147483526:Bf(e);c=new VJ;BK(c);break a;case -536870876:Bf(e);a.bo=a.bo+1|0;if(B7(a,8)){if(B7(a,1)){c=AQZ(a.bo);break a;}c=AQh(a.bo);break a;}if(B7(a,1)){c=ARc(a.bo);break a;}c=ARP(a.bo);break a;case -536870866:Bf(e);if(B7(a,32)){c=AR9();break a;}c=ARJ(Op(a.c3));break a;case -536870821:Bf(e);i=0;c=a.f;if(c.bd==(-536870818)){i=1;Bf(c);}c
=J9(a,FR(a,i));c.K(b);e=a.f;if(e.bd!=(-536870819))J(B6(B(31),e.bB,e.cN));NP(e,1);Bf(a.f);break a;case -536870818:Bf(e);a.bo=a.bo+1|0;if(!B7(a,8)){c=new JK;BK(c);break a;}c=new MC;e=Op(a.c3);BK(c);c.p9=e;break a;case 0:j=e.ed;if(j!==null)c=J9(a,j);else{if(Db(e)){c=Gu(b);break a;}c=YB(f&65535);}Bf(a.f);break a;default:break b;}Bf(e);c=new JK;BK(c);break a;}h=(f&2147483647)-48|0;if(a.fO<h)J(B6(B(31),E7(e),Ne(a.f)));Bf(e);a.bo=a.bo+1|0;c=!B7(a,2)?AQo(h,a.bo):B7(a,64)?AQ0(h,a.bo):ASg(h,a.bo);a.jz.data[h].jx=1;a.mU
=1;break a;}if(f>=0&&!Gw(e)){c=WC(a,f);Bf(a.f);}else if(f==(-536870788))c=Gu(b);else{if(f!=(-536870871)){b=new Ia;c=!Gw(a.f)?V0(f&65535):a.f.ed.ci();e=a.f;IH(b,c,e.bB,e.cN);J(b);}if(d){b=new Ia;e=a.f;IH(b,B(31),e.bB,e.cN);J(b);}c=Gu(b);}}}if(f!=(-16777176))break;}return c;}
function FR(a,b){var c,d,e,f,g,h,i,j,$$je;c=AOs(B7(a,2),B7(a,64));Ei(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Db(a.f))break a;h=a.f;b=h.bd;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cr(c,d);d=Bf(a.f);h=a.f;if(h.bd!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=FR(a,0);break d;}if(a.f.bd==(-536870819))break d;VP(c,FR(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bf(h);h=a.f;i=h.bd;if(Gw(h))break c;if
(i<0){j=a.f.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(JF(i))break e;i=i&65535;break e;}catch($$e){$$je=D6($$e);if($$je instanceof DR){break b;}else{throw $$e;}}}try{BO(c,d,i);}catch($$e){$$je=D6($$e);if($$je instanceof DR){break b;}else{throw $$e;}}Bf(a.f);d=(-1);break d;}}if(d>=0)Cr(c,d);d=45;Bf(a.f);break d;case -536870821:if(d>=0){Cr(c,d);d=(-1);}Bf(a.f);j=0;h=a.f;if(h.bd==(-536870818)){Bf(h);j=1;}if(!e)Xg(c,FR(a,j));else VP(c,FR(a,j));e=0;Bf(a.f);break d;case -536870819:if(d>=0)Cr(c,
d);d=93;Bf(a.f);break d;case -536870818:if(d>=0)Cr(c,d);d=94;Bf(a.f);break d;case 0:if(d>=0)Cr(c,d);h=a.f.ed;if(h===null)d=0;else{AC1(c,h);d=(-1);}Bf(a.f);break d;default:}if(d>=0)Cr(c,d);d=Bf(a.f);}g=0;}J(B6(B(31),Jf(a),a.f.cN));}J(B6(B(31),Jf(a),a.f.cN));}if(!f){if(d>=0)Cr(c,d);return c;}J(B6(B(31),Jf(a),a.f.cN-1|0));}
function WC(a,b){var c,d,e;c=Lh(b);if(B7(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AFb(b&65535);}if(B7(a,64)&&b>128){if(c){d=new LN;Dq(d);d.bz=2;d.pu=Gm(Gl(b));return d;}if(N0(b))return AKR(b&65535);if(!Rr(b))return AMk(b&65535);return AIe(b&65535);}}if(!c){if(N0(b))return AKR(b&65535);if(!Rr(b))return YB(b&65535);return AIe(b&65535);}d=new DI;Dq(d);d.bz=2;d.fc=b;e=(Ge(b)).data;d.i1=e[0];d.hF=e[1];return d;}
function J9(a,b){var c,d,e;if(!AAl(b)){if(!b.I){if(b.go())return AHF(b);return AN1(b);}if(!b.go())return AIV(b);c=new Iz;Tl(c,b);return c;}c=XK(b);d=new L4;BK(d);d.on=c;d.uo=c.bc;if(!b.I){if(b.go())return AA0(AHF(Hb(b)),d);return AA0(AN1(Hb(b)),d);}if(!b.go())return AA0(AIV(Hb(b)),d);c=new Pj;e=new Iz;Tl(e,Hb(b));ACG(c,e,d);return c;}
function Hc(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B7(a,b){return (a.c3&b)!=b?0:1;}
function Nd(){C.call(this);this.ro=null;}
function APX(a,b){b.dq=a.ro.dq;}
var Gf=F(Cq);
var AU_=null;var AU$=null;var AVe=null;function TU(){TU=Bq(Gf);AGo();}
function AIA(a,b){var c=new Gf();Yw(c,a,b);return c;}
function Yw(a,b,c){TU();DD(a,b,c);}
function AGo(){var b;AU_=AIA(B(345),0);b=AIA(B(346),1);AU$=b;AVe=H(Gf,[AU_,b]);}
function RS(){C.call(this);this.rS=null;}
function AI8(a,b){DG(a.rS,b);}
function Qw(){var a=this;C.call(a);a.sO=null;a.sP=0;a.sM=0;a.sN=null;a.sK=0;a.sL=0;}
function AEr(a,b){var c,d,e,f,g,h,i,j;c=a.sO;d=a.sP;e=a.sM;f=a.sN;g=a.sK;h=a.sL;i=Cs(c.L,5.0);d=X((c.L.bL.b-d|0)-i|0,V((i-d|0)-c.P.n.b|0,b.j.b));j=X((c.L.bL.a-e|0)-i|0,V((i-e|0)-c.P.n.a|0,b.j.a));Y(f,d+g|0,j+h|0);CK(c,f,c.p.n);}
function NV(){var a=this;C.call(a);a.mB=null;a.mC=0;a.mE=0;a.mw=0;a.mx=0;a.my=0;a.mz=0;a.mu=null;a.mv=null;}
function AJc(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.mB;d=a.mC;e=a.mE;f=a.mw;g=a.mx;h=a.my;i=a.mz;j=a.mu;k=a.mv;l=Cs(c.L,5.0);m=c.p.cW();d=X(e+(b.j.a-d|0)|0,(c.L.bL.a+c.P.n.a|0)-l|0);e=e+f|0;d=e-d|0;d=V(m.a,d);e=e-d|0;l=X(h+(b.j.b-g|0)|0,c.L.bL.b-l|0);f=h+i|0;l=f-l|0;l=V(m.b,l);Y(j,f-l|0,e);Y(k,l,d);CK(c,j,k);}
function TW(){var a=this;C.call(a);a.rV=null;a.rT=0;a.rU=0;a.rX=0;a.rZ=null;a.rW=null;}
function ANy(a,b){var c,d,e,f,g,h,i,j;c=a.rV;d=a.rT;e=a.rU;f=a.rX;g=a.rZ;h=a.rW;i=Cs(c.L,5.0);j=c.p.cW();d=X(e+(b.j.a-d|0)|0,(c.L.bL.a+c.P.n.a|0)-i|0);e=e+f|0;d=e-d|0;d=V(j.a,d);Y(g,c.p.t.b,e-d|0);Y(h,c.p.n.b,d);CK(c,g,h);}
function Ws(){var a=this;C.call(a);a.pD=null;a.pE=0;a.pH=0;a.pI=0;a.pJ=0;a.pK=0;a.pF=null;a.pG=null;}
function AKa(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.pD;d=a.pE;e=a.pH;f=a.pI;g=a.pJ;h=a.pK;i=a.pF;j=a.pG;k=Cs(c.L,5.0);l=c.p.cW();d=X(e+(b.j.a-d|0)|0,(c.L.bL.a+c.P.n.a|0)-k|0);e=e+f|0;d=e-d|0;d=V(l.a,d);e=e-d|0;h=V(h+(b.j.b-g|0)|0,V(l.b,k-c.P.t.b|0));Y(i,c.p.t.b,e);Y(j,h,d);CK(c,i,j);}
function WE(){var a=this;C.call(a);a.p4=null;a.p3=0;a.p2=0;a.p1=0;a.p0=null;a.pZ=null;}
function APO(a,b){var c,d,e,f,g,h,i,j;c=a.p4;d=a.p3;e=a.p2;f=a.p1;g=a.p0;h=a.pZ;i=Cs(c.L,5.0);j=c.p.cW();d=X(e+(b.j.b-d|0)|0,c.L.bL.b-i|0);e=e+f|0;d=e-d|0;d=V(j.b,d);Y(g,e-d|0,c.p.t.a);Y(h,d,c.p.n.a);CK(c,g,h);}
function Pe(){var a=this;C.call(a);a.nm=null;a.nk=0;a.nl=0;a.np=0;a.nq=0;a.nn=0;a.no=null;a.ns=null;}
function ALR(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.nm;d=a.nk;e=a.nl;f=a.np;g=a.nq;h=a.nn;i=a.no;j=a.ns;k=Cs(c.L,5.0);l=c.p.cW();d=X(e+(b.j.b-d|0)|0,c.L.bL.b-k|0);m=e+f|0;d=m-d|0;d=V(l.b,d);m=m-d|0;f=V(h+(b.j.a-g|0)|0,l.a);Y(i,m,c.p.t.a);Y(j,d,f);CK(c,i,j);}
function Vl(){var a=this;C.call(a);a.me=null;a.mf=0;a.mg=0;a.mh=null;}
function AJz(a,b){var c,d,e,f,g,h;c=a.me;d=a.mf;e=a.mg;f=a.mh;g=Cs(c.L,5.0);h=c.p.cW();Y(f,V(e+(b.j.b-d|0)|0,V(h.b,g-c.P.t.b|0)),c.p.n.a);CK(c,c.p.t,f);}
function SK(){var a=this;C.call(a);a.l7=null;a.l5=0;a.l9=0;a.l8=0;a.l_=0;a.l$=null;}
function AFR(a,b){var c,d,e,f,g,h,i,j;c=a.l7;d=a.l5;e=a.l9;f=a.l8;g=a.l_;h=a.l$;i=Cs(c.L,5.0);j=c.p.cW();Y(h,V(e+(b.j.b-d|0)|0,V(j.b,i-c.P.t.b|0)),V(g+(b.j.a-f|0)|0,j.a));CK(c,c.p.t,h);}
function LE(){var a=this;C.call(a);a.m5=null;a.m4=0;a.m7=0;a.m6=null;}
function AFf(a,b){var c,d,e,f,g;c=a.m5;d=a.m4;e=a.m7;f=a.m6;Cs(c.L,5.0);g=c.p.cW();d=V(e+(b.j.a-d|0)|0,g.a);Y(f,c.p.n.b,d);CK(c,c.p.t,f);}
var RW=F();
function AEa(a,b){}
function Ui(){var a=this;C.call(a);a.t4=null;a.t5=0.0;}
function Ja(a,b){return J7(a.t4,b,a.t5*2.0+0.875);}
function Bz(){var a=this;C.call(a);a.d=null;a.b7=0;a.nQ=null;a.g4=0;}
var ASX=0;function BK(a){var b,c;b=new E5;c=ASX;ASX=c+1|0;Ji(b,c);a.nQ=Lk(b);}
function J6(a,b){var c,d;c=new E5;d=ASX;ASX=d+1|0;Ji(c,d);a.nQ=Lk(c);a.d=b;}
function Hh(a,b,c,d){var e;e=d.w;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hq(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFG(a,b){a.g4=b;}
function AEP(a){return a.g4;}
function ANq(a){return a.d;}
function AOh(a,b){a.d=b;}
function AOg(a,b){return 1;}
function AO9(a){return null;}
function Iu(a){var b;a.b7=1;b=a.d;if(b!==null){if(!b.b7){b=b.eL();if(b!==null){a.d.b7=1;a.d=b;}a.d.dJ();}else if(b instanceof Gi&&b.dN.jx)a.d=b.d;}}
function ACS(){ASX=1;}
var Tu=F();
var AU9=null;function AQy(){AQy=Bq(Tu);AEt();}
function AEt(){var b,c;TU();b=BH((AVe.e8()).data.length);c=b.data;AU9=b;c[AU_.cH]=1;c[AU$.cH]=2;}
function Ol(){C.call(this);this.o3=null;}
function AFO(a,b){Tm(H4(a.o3),b,AUm,XG(B(347)));}
function WN(){C.call(this);this.td=null;}
function AGM(a,b){var c,d;c=a.td;d=b.g1;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function W7(){var a=this;C.call(a);a.o0=null;a.oZ=null;}
function AFB(a){var b,c;b=a.o0;c=a.oZ;b=b.bp;Ku(b,c,b.fF);}
function CM(){var a=this;Bz.call(a);a.jx=0;a.c$=0;}
var AVd=null;function Lt(){Lt=Bq(CM);AGQ();}
function ARK(a){var b=new CM();E$(b,a);return b;}
function E$(a,b){Lt();BK(a);a.c$=b;}
function AEi(a,b,c,d){var e,f;e=HX(d,a.c$);I0(d,a.c$,b);f=a.d.c(b,c,d);if(f<0)I0(d,a.c$,e);return f;}
function AJX(a){return a.c$;}
function AEE(a,b){return 0;}
function AGQ(){var b;b=new Ni;BK(b);AVd=b;}
function Gs(){var a=this;C.call(a);a.ba=null;a.fw=0;a.d6=0;a.sU=0;a.jZ=0;a.bd=0;a.h=0;a.qE=0;a.ed=null;a.d1=null;a.u=0;a.hf=0;a.cN=0;a.gG=0;a.bB=null;}
var AVf=null;var AVb=null;var AVc=0;function NP(a,b){if(b>0&&b<3)a.d6=b;if(b==1){a.h=a.bd;a.d1=a.ed;a.u=a.gG;a.gG=a.cN;EQ(a);}}
function Gw(a){return a.ed===null?0:1;}
function I5(a){return a.d1===null?0:1;}
function Bf(a){EQ(a);return a.jZ;}
function EY(a){var b;b=a.ed;EQ(a);return b;}
function EQ(a){var b,c,d,e,f,g,h,$$je;a.jZ=a.bd;a.bd=a.h;a.ed=a.d1;a.cN=a.gG;a.gG=a.u;while(true){b=0;c=a.u>=a.ba.data.length?0:KR(a);a.h=c;a.d1=null;if(a.d6==4){if(c!=92)return;c=a.u;d=a.ba.data;c=c>=d.length?0:d[BP(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.u=a.hf;return;}a.d6=a.sU;a.h=a.u>(a.ba.data.length-2|0)?0:KR(a);}a:{c=a.h;if(c!=92){e=a.d6;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.ba.data[a.u]!=63){a.h=(-2147483608);break a;}BP(a);c=a.ba.data[a.u];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.h=(-134217688);BP(a);break b;default:J(B6(B(31),E7(a),a.u));}a.h=(-67108824);BP(a);}else{switch(c){case 33:break;case 60:BP(a);c=a.ba.data[a.u];e=1;break b;case 61:a.h=(-536870872);BP(a);break b;case 62:a.h=(-33554392);BP(a);break b;default:f=ACT(a);a.h=f;if(f<256){a.fw=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fw=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BP(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e
=a.u;d=a.ba.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BP(a);break a;case 63:a.h=c|(-1073741824);BP(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);NP(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.d1=ACi(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.u>=(a.ba.data.length-2|0)?(-1):KR(a);c:{a.h=c;switch(c){case -1:J(B6(B(31),E7(a),a.u));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=AAN(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.d6!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B6(B(31),E7(a),a.u));case 68:case 83:case 87:case 100:case 115:case 119:a.d1=QX(I8(a.ba,
a.hf,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.sU=a.d6;a.d6=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.u;d=a.ba.data;if(c>=(d.length-2|0))J(B6(B(31),E7(a),a.u));a.h=d[BP(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=OM(a,4);break a;case 120:a.h=OM(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=AAw(a);h=0;if(a.h==80)h=1;try{a.d1=QX(g,h);}catch($$e){$$je=D6($$e);if($$je instanceof IB){J(B6(B(31),E7(a),a.u));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function AAw(a){var b,c,d,e,f,g;b=new M;FM(b,10);c=a.u;d=a.ba;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=I8(d,BP(a),1);f=new M;O(f);G(G(f,B(348)),b);return N(f);}BP(a);c=0;a:{while(true){g=a.u;d=a.ba.data;if(g>=(d.length-2|0))break;c=d[BP(a)];if(c==125)break a;BA(b,c);}}if(c!=125)J(B6(B(31),a.bB,a.u));}if(!b.M)J(B6(B(31),a.bB,a.u));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(348)),f);return N(b);}b:{c:{if(I(f)>3){if(JY(f,B(348)))break c;if(JY(f,B(349)))break c;}break b;}f=Dt(f,2);}return f;}
function ACi(a,b){var c,d,e,f,g,$$je;c=new M;FM(c,4);d=(-1);e=2147483647;a:{while(true){f=a.u;g=a.ba.data;if(f>=g.length)break a;b=g[BP(a)];if(b==125)break a;if(b==44&&d<0)try{d=IW(DH(c),10);ACo(c,0,XV(c));continue;}catch($$e){$$je=D6($$e);if($$je instanceof C9){break;}else{throw $$e;}}BA(c,b&65535);}J(B6(B(31),a.bB,a.u));}if(b!=125)J(B6(B(31),a.bB,a.u));if(c.M>0)b:{try{e=IW(DH(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=D6($$e);if($$je instanceof C9){}else{throw $$e;}}J(B6(B(31),a.bB,a.u));}else if
(d<0)J(B6(B(31),a.bB,a.u));if((d|e|(e-d|0))<0)J(B6(B(31),a.bB,a.u));b=a.u;g=a.ba.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BP(a);break c;case 63:a.h=(-1073741701);BP(a);break c;default:}a.h=(-536870789);}c=new Mf;c.d4=d;c.dY=e;return c;}
function E7(a){return a.bB;}
function Db(a){return !a.bd&&!a.h&&a.u==a.qE&&!Gw(a)?1:0;}
function JF(b){return b<0?0:1;}
function EM(a){return !Db(a)&&!Gw(a)&&JF(a.bd)?1:0;}
function Ng(a){var b;b=a.bd;return b<=56319&&b>=55296?1:0;}
function Ug(a){var b;b=a.bd;return b<=57343&&b>=56320?1:0;}
function Rr(b){return b<=56319&&b>=55296?1:0;}
function N0(b){return b<=57343&&b>=56320?1:0;}
function OM(a,b){var c,d,e,f,$$je;c=new M;FM(c,b);d=a.ba.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.u>=d)break;BA(c,a.ba.data[BP(a)]);e=e+1|0;}if(!f)a:{try{b=IW(DH(c),16);}catch($$e){$$je=D6($$e);if($$je instanceof C9){break a;}else{throw $$e;}}return b;}J(B6(B(31),a.bB,a.u));}
function AAN(a){var b,c,d,e,f,g;b=3;c=1;d=a.ba.data;e=d.length-2|0;f=TP(d[a.u],8);switch(f){case -1:break;default:if(f>3)b=2;BP(a);a:{while(true){if(c>=b)break a;g=a.u;if(g>=e)break a;g=TP(a.ba.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BP(a);c=c+1|0;}}return f;}J(B6(B(31),a.bB,a.u));}
function ACT(a){var b,c,d,e;b=1;c=a.fw;a:while(true){d=a.u;e=a.ba.data;if(d>=e.length)J(B6(B(31),a.bB,d));b:{c:{switch(e[d]){case 41:BP(a);return c|256;case 45:if(!b)J(B6(B(31),a.bB,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BP(a);}BP(a);return c;}
function BP(a){var b,c,d,e,f;b=a.u;a.hf=b;if(!(a.fw&4))a.u=b+1|0;else{c=a.ba.data.length-2|0;a.u=b+1|0;a:while(true){d=a.u;if(d<c&&PX(a.ba.data[d])){a.u=a.u+1|0;continue;}d=a.u;if(d>=c)break;e=a.ba.data;if(e[d]!=35)break;a.u=d+1|0;while(true){f=a.u;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.u=f+1|0;}}}return a.hf;}
function AB_(b){return AVf.AT(b);}
function KR(a){var b,c,d,e;b=a.ba.data[BP(a)];if(CC(b)){c=a.hf+1|0;d=a.ba.data;if(c<d.length){e=d[c];if(CY(e)){BP(a);return Ej(b,e);}}}return b;}
function Ne(a){return a.cN;}
function Ia(){var a=this;BC.call(a);a.wb=null;a.vM=null;a.pl=0;}
function B6(a,b,c){var d=new Ia();IH(d,a,b,c);return d;}
function IH(a,b,c,d){U(a);a.pl=(-1);a.wb=b;a.vM=c;a.pl=d;}
function V6(){C.call(this);this.sD=null;}
function ALH(a,b){var c,d;c=a.sD;d=0;while(d<b.length){XS(c,b[d]);d=d+1|0;}}
var AAr=F(0);
function Tf(){var a=this;C.call(a);a.ou=null;a.ow=null;a.oy=null;}
function ALl(a,b){a.ou.l(AQi(a.ow,b,a.oy));}
var QH=F(CM);
function ADS(a,b,c,d){var e;e=a.c$;BE(d,e,b-Dd(d,e)|0);return a.d.c(b,c,d);}
function AMW(a,b){return 0;}
var WG=F(CM);
function AFE(a,b,c,d){return b;}
var OO=F(CM);
function AEN(a,b,c,d){if(Dd(d,a.c$)!=b)b=(-1);return b;}
function RN(){CM.call(this);this.mJ=0;}
function ADY(a,b,c,d){var e;e=a.c$;BE(d,e,b-Dd(d,e)|0);a.mJ=b;return b;}
function ALu(a,b){return 0;}
var Fi=F(CM);
function AOz(a,b,c,d){if(d.iM!=1&&b!=d.w)return (-1);d.h6=1;I0(d,0,b);return b;}
function BS(){Bz.call(this);this.bz=0;}
function Dq(a){BK(a);a.bz=1;}
function APy(a,b,c,d){var e;if((b+a.bP()|0)>d.w){d.cX=1;return (-1);}e=a.bn(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function ANP(a){return a.bz;}
function AIB(a,b){return 1;}
var ABX=F(BS);
function Gu(a){var b=new ABX();AJ$(b,a);return b;}
function AJ$(a,b){J6(a,b);a.bz=1;a.g4=1;a.bz=0;}
function ANi(a,b,c){return 0;}
function AGW(a,b,c,d){var e,f,g;e=d.w;f=d.ct;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&CY(L(c,b))&&b>f&&CC(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AFs(a,b,c,d,e){var f,g;f=e.w;g=e.ct;while(true){if(c<b)return (-1);if(c<f&&CY(L(d,c))&&c>g&&CC(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ADW(a,b){return 0;}
function BN(){var a=this;Bz.call(a);a.bs=null;a.dN=null;a.S=0;}
function AQ8(a,b){var c=new BN();Fk(c,a,b);return c;}
function Fk(a,b,c){BK(a);a.bs=b;a.dN=c;a.S=c.c$;}
function AHs(a,b,c,d){var e,f,g,h;if(a.bs===null)return (-1);e=Fp(d,a.S);Dp(d,a.S,b);f=a.bs.i;g=0;while(true){if(g>=f){Dp(d,a.S,e);return (-1);}h=(Bs(a.bs,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ALn(a,b){a.dN.d=b;}
function AJm(a,b){var c;a:{c=a.bs;if(c!==null){c=BR(c);while(true){if(!B2(c))break a;if(!(BV(c)).bJ(b))continue;else return 1;}}}return 0;}
function AL8(a,b){return HX(b,a.S)>=0&&Fp(b,a.S)==HX(b,a.S)?0:1;}
function AFn(a){var b,c,d,e;a.b7=1;b=a.dN;if(b!==null&&!b.b7)Iu(b);a:{b=a.bs;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bs(a.bs,d);e=b.eL();if(e===null)e=b;else{b.b7=1;Ec(a.bs,d);Ql(a.bs,d,e);}if(!e.b7)e.dJ();d=d+1|0;}}}if(a.d!==null)Iu(a);}
var Im=F(BN);
function AK9(a,b,c,d){var e,f,g,h;e=Dd(d,a.S);BE(d,a.S,b);f=a.bs.i;g=0;while(true){if(g>=f){BE(d,a.S,e);return (-1);}h=(Bs(a.bs,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AMw(a,b){return !Dd(b,a.S)?0:1;}
var DF=F(Im);
function AF6(a,b,c,d){var e,f,g;e=Dd(d,a.S);BE(d,a.S,b);f=a.bs.i;g=0;while(g<f){if((Bs(a.bs,g)).c(b,c,d)>=0)return a.d.c(a.dN.mJ,c,d);g=g+1|0;}BE(d,a.S,e);return (-1);}
function AMe(a,b){a.d=b;}
var LX=F(DF);
function ALg(a,b,c,d){var e,f;e=a.bs.i;f=0;while(f<e){if((Bs(a.bs,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AOn(a,b){return 0;}
var U$=F(DF);
function AEy(a,b,c,d){var e,f;e=a.bs.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bs,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ANT(a,b){return 0;}
var PZ=F(DF);
function AFi(a,b,c,d){var e,f,g,h;e=a.bs.i;f=d.ia?0:d.ct;a:{g=a.d.c(b,c,d);if(g>=0){BE(d,a.S,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bs,h)).cb(f,b,c,d)>=0){BE(d,a.S,(-1));return g;}h=h+1|0;}}}return (-1);}
function AP0(a,b){return 0;}
var Sy=F(DF);
function ADu(a,b,c,d){var e,f;e=a.bs.i;BE(d,a.S,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bs,f)).cb(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AML(a,b){return 0;}
function Gi(){BN.call(this);this.cA=null;}
function ARv(a,b){var c=new Gi();Yp(c,a,b);return c;}
function Yp(a,b,c){BK(a);a.cA=b;a.dN=c;a.S=c.c$;}
function ADN(a,b,c,d){var e,f;e=Fp(d,a.S);Dp(d,a.S,b);f=a.cA.c(b,c,d);if(f>=0)return f;Dp(d,a.S,e);return (-1);}
function AJJ(a,b,c,d){var e;e=a.cA.b8(b,c,d);if(e>=0)Dp(d,a.S,e);return e;}
function AM2(a,b,c,d,e){var f;f=a.cA.cb(b,c,d,e);if(f>=0)Dp(e,a.S,f);return f;}
function AJi(a,b){return a.cA.bJ(b);}
function ALr(a){var b;b=new Mj;Yp(b,a.cA,a.dN);a.d=b;return b;}
function APa(a){var b;a.b7=1;b=a.dN;if(b!==null&&!b.b7)Iu(b);b=a.cA;if(b!==null&&!b.b7){b=b.eL();if(b!==null){a.cA.b7=1;a.cA=b;}a.cA.dJ();}}
var Gt=F();
function T(){var a=this;Gt.call(a);a.bc=0;a.b4=0;a.H=null;a.iR=null;a.jp=null;a.I=0;}
var AVg=null;function NN(){NN=Bq(T);AFQ();}
function Bp(a){var b;NN();b=new VZ;b.A=BH(64);a.H=b;}
function AEB(a){return null;}
function AD8(a){return a.H;}
function AAl(a){var b,c,d,e,f;if(!a.b4)b=GU(a.H,0)>=2048?0:1;else{a:{c=a.H;b=0;d=c.bl;if(b<d){e=c.A.data;f=(e[0]^(-1))>>>0|0;if(f)b=HP(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HP(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AHE(a){return a.I;}
function ANI(a){return a;}
function XK(a){var b,c;if(a.jp===null){b=a.ec();c=new Vm;c.wA=a;c.na=b;Bp(c);a.jp=c;Ei(c,a.b4);}return a.jp;}
function Hb(a){var b,c;if(a.iR===null){b=a.ec();c=new Vj;c.we=a;c.sn=b;c.s5=a;Bp(c);a.iR=c;Ei(c,a.bc);a.iR.I=a.I;}return a.iR;}
function AO8(a){return 0;}
function Ei(a,b){var c;c=a.bc;if(c^b){a.bc=c?0:1;a.b4=a.b4?0:1;}if(!a.I)a.I=1;return a;}
function AGY(a){return a.bc;}
function JB(b,c){NN();return b.k(c);}
function HN(b,c){var d,e;NN();if(b.cS()!==null&&c.cS()!==null){b=b.cS();c=c.cS();d=X(b.A.data.length,c.A.data.length);e=0;a:{while(e<d){if(b.A.data[e]&c.A.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function QX(b,c){var d,e,f;NN();d=0;while(true){AMJ();e=AVh.data;if(d>=e.length){f=new IB;Bl(f,B(31));f.wU=B(31);f.wD=b;J(f);}e=e[d].data;if(Bn(b,e[0]))break;d=d+1|0;}return ABq(e[1],c);}
function AFQ(){var b;b=new GL;AMJ();AVg=b;}
function Yf(){var a=this;T.call(a);a.kC=0;a.mI=0;a.fP=0;a.kg=0;a.dl=0;a.eH=0;a.E=null;a.bq=null;}
function De(){var a=new Yf();APK(a);return a;}
function AOs(a,b){var c=new Yf();AFF(c,a,b);return c;}
function APK(a){Bp(a);a.E=AP3();}
function AFF(a,b,c){Bp(a);a.E=AP3();a.kC=b;a.mI=c;}
function Cr(a,b){a:{if(a.kC){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dl){LB(a.E,Hc(b&65535));break a;}KO(a.E,Hc(b&65535));break a;}if(a.mI&&b>128){a.fP=1;b=Gm(Gl(b));}}}if(!(!Rr(b)&&!N0(b))){if(a.kg)LB(a.H,b-55296|0);else KO(a.H,b-55296|0);}if(a.dl)LB(a.E,b);else KO(a.E,b);if(!a.I&&Lh(b))a.I=1;return a;}
function AC1(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(a.kg){if(!b.b4)FF(a.H,b.ec());else C6(a.H,b.ec());}else if(!b.b4)Fz(a.H,b.ec());else{Fd(a.H,b.ec());C6(a.H,b.ec());a.b4=a.b4?0:1;a.kg=1;}if(!a.eH&&b.cS()!==null){if(a.dl){if(!b.bc)FF(a.E,b.cS());else C6(a.E,b.cS());}else if(!b.bc)Fz(a.E,b.cS());else{Fd(a.E,b.cS());C6(a.E,b.cS());a.bc=a.bc?0:1;a.dl=1;}}else{c=a.bc;d=a.bq;if(d!==null){if(!c){e=new NG;e.uM=a;e.tr=c;e.sS=d;e.sA=b;Bp(e);a.bq=e;}else{e=new NH;e.w1=a;e.pW=c;e.py=d;e.oV=b;Bp(e);a.bq=e;}}else{if(c&&!a.dl
&&Ll(a.E)){d=new ND;d.vL=a;d.pO=b;Bp(d);a.bq=d;}else if(!c){d=new NB;d.j3=a;d.jc=c;d.nN=b;Bp(d);a.bq=d;}else{d=new NC;d.kO=a;d.ji=c;d.sF=b;Bp(d);a.bq=d;}a.eH=1;}}return a;}
function BO(a,b,c){var d,e,f,g,h;if(b>c){d=new BC;U(d);J(d);}a:{b:{if(!a.kC){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cr(a,b);b=b+1|0;}}if(!a.dl)Hv(a.E,b,c+1|0);else{d=a.E;c=c+1|0;if(b>c){d=new Bv;U(d);J(d);}e=d.bl;if(b<e){f=X(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.A.data;h[g]=h[g]&(HJ(d,b)|Hn(d,f));}else{h=d.A.data;h[g]=h[g]&HJ(d,b);e=g+1|0;while(e<c){d.A.data[e]=0;e=e+1|0;}if(f&31){h=d.A.data;h[c]=h[c]&Hn(d,f);}}GP(d);}}}}return a;}
function Xg(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.fP)a.fP=1;c=a.b4;if(!(c^b.b4)){if(!c)Fz(a.H,b.H);else C6(a.H,b.H);}else if(c)FF(a.H,b.H);else{Fd(a.H,b.H);C6(a.H,b.H);a.b4=1;}if(!a.eH&&CQ(b)!==null){c=a.bc;if(!(c^b.bc)){if(!c)Fz(a.E,CQ(b));else C6(a.E,CQ(b));}else if(c)FF(a.E,CQ(b));else{Fd(a.E,CQ(b));C6(a.E,CQ(b));a.bc=1;}}else{c=a.bc;d=a.bq;if(d!==null){if(!c){e=new Nv;e.us=a;e.r0=c;e.sE=d;e.tc=b;Bp(e);a.bq=e;}else{e=new Oh;e.uY=a;e.s_=c;e.mk=d;e.mL=b;Bp(e);a.bq=e;}}else{if(!a.dl&&Ll(a.E)){if(!c){d=new NE;d.w6
=a;d.oI=b;Bp(d);a.bq=d;}else{d=new NF;d.u3=a;d.s0=b;Bp(d);a.bq=d;}}else if(!c){d=new NI;d.r2=a;d.qg=b;d.pC=c;Bp(d);a.bq=d;}else{d=new NJ;d.qH=a;d.q1=b;d.rg=c;Bp(d);a.bq=d;}a.eH=1;}}}
function VP(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.fP)a.fP=1;c=a.b4;if(!(c^b.b4)){if(!c)C6(a.H,b.H);else Fz(a.H,b.H);}else if(!c)FF(a.H,b.H);else{Fd(a.H,b.H);C6(a.H,b.H);a.b4=0;}if(!a.eH&&CQ(b)!==null){c=a.bc;if(!(c^b.bc)){if(!c)C6(a.E,CQ(b));else Fz(a.E,CQ(b));}else if(!c)FF(a.E,CQ(b));else{Fd(a.E,CQ(b));C6(a.E,CQ(b));a.bc=0;}}else{c=a.bc;d=a.bq;if(d!==null){if(!c){e=new Nx;e.uL=a;e.r4=c;e.m9=d;e.pR=b;Bp(e);a.bq=e;}else{e=new Ny;e.u9=a;e.rt=c;e.l2=d;e.rY=b;Bp(e);a.bq=e;}}else{if(!a.dl&&Ll(a.E)){if(!c){d=new Ns;d.u4
=a;d.oe=b;Bp(d);a.bq=d;}else{d=new Nt;d.wY=a;d.ok=b;Bp(d);a.bq=d;}}else if(!c){d=new Nz;d.t8=a;d.tl=b;d.qU=c;Bp(d);a.bq=d;}else{d=new Nr;d.qT=a;d.rA=b;d.pY=c;Bp(d);a.bq=d;}a.eH=1;}}}
function CV(a,b){var c;c=a.bq;if(c!==null)return a.bc^c.k(b);return a.bc^Dm(a.E,b);}
function CQ(a){if(!a.eH)return a.E;return null;}
function AGP(a){return a.H;}
function AN7(a){var b,c;if(a.bq!==null)return a;b=CQ(a);c=new Nw;c.up=a;c.hI=b;Bp(c);return Ei(c,a.bc);}
function AKz(a){var b,c,d;b=new M;O(b);c=GU(a.E,0);while(c>=0){HR(b,Ge(c));BA(b,124);c=GU(a.E,c+1|0);}d=b.M;if(d>0)Va(b,d-1|0);return N(b);}
function AG1(a){return a.fP;}
function IB(){var a=this;Bm.call(a);a.wU=null;a.wD=null;}
function DQ(){Bz.call(this);this.G=null;}
function C8(a,b,c,d){J6(a,c);a.G=b;a.g4=d;}
function APJ(a){return a.G;}
function AM5(a,b){return !a.G.bJ(b)&&!a.d.bJ(b)?0:1;}
function AOu(a,b){return 1;}
function AJ7(a){var b;a.b7=1;b=a.d;if(b!==null&&!b.b7){b=b.eL();if(b!==null){a.d.b7=1;a.d=b;}a.d.dJ();}b=a.G;if(b!==null){if(!b.b7){b=b.eL();if(b!==null){a.G.b7=1;a.G=b;}a.G.dJ();}else if(b instanceof Gi&&b.dN.jx)a.G=b.d;}}
function CW(){DQ.call(this);this.T=null;}
function ARC(a,b,c){var d=new CW();EE(d,a,b,c);return d;}
function EE(a,b,c,d){C8(a,b,c,d);a.T=b;}
function ADw(a,b,c,d){var e,f;e=0;a:{while((b+a.T.bP()|0)<=d.w){f=a.T.bn(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.T.bP()|0;e=e+(-1)|0;}return f;}
function ER(){CW.call(this);this.iL=null;}
function AQK(a,b,c,d){var e=new ER();Q8(e,a,b,c,d);return e;}
function Q8(a,b,c,d,e){EE(a,c,d,e);a.iL=b;}
function AEl(a,b,c,d){var e,f,g,h,i;e=a.iL;f=e.d4;g=e.dY;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.T.bP()|0)>d.w)break a;i=a.T.bn(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.T.bP()|0;h=h+(-1)|0;}return i;}if((b+a.T.bP()|0)>d.w){d.cX=1;return (-1);}i=a.T.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CN=F(DQ);
function ADM(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.G.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Ep=F(CW);
function AJP(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function AP4(a,b){a.d=b;a.G.K(b);}
var Vn=F(CW);
function APq(a,b,c,d){while((b+a.T.bP()|0)<=d.w&&a.T.bn(b,c)>0){b=b+a.T.bP()|0;}return a.d.c(b,c,d);}
function AKv(a,b,c,d){var e,f,g;e=a.d.b8(b,c,d);if(e<0)return (-1);f=e-a.T.bP()|0;while(f>=b&&a.T.bn(f,c)>0){g=f-a.T.bP()|0;e=f;f=g;}return e;}
function W(){var a=this;C.call(a);a.kY=null;a.j0=null;}
function ABq(a,b){if(!b&&a.kY===null)a.kY=a.C();else if(b&&a.j0===null)a.j0=Ei(a.C(),1);if(b)return a.j0;return a.kY;}
var C9=F(BC);
function Mf(){var a=this;Gt.call(a);a.d4=0;a.dY=0;}
function AKG(a){var b,c,d,e,f;b=a.d4;c=a.dY;d=c==2147483647?B(31):Lk(AB$(c));e=new M;O(e);BA(e,123);f=S(e,b);BA(f,44);BA(G(f,d),125);return N(e);}
var Ni=F(Bz);
function AI0(a,b,c,d){return b;}
function ALm(a,b){return 0;}
function VZ(){var a=this;C.call(a);a.A=null;a.bl=0;}
function AP3(){var a=new VZ();AE3(a);return a;}
function AE3(a){a.A=BH(0);}
function KO(a,b){var c,d;c=b/32|0;if(b>=a.bl){HU(a,c+1|0);a.bl=b+1|0;}d=a.A.data;d[c]=d[c]|1<<(b%32|0);}
function Hv(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new Bv;U(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bl){HU(a,f+1|0);a.bl=c;}if(d==f){g=a.A.data;g[d]=g[d]|Hn(a,b)&HJ(a,c);}else{g=a.A.data;g[d]=g[d]|Hn(a,b);h=d+1|0;while(h<f){a.A.data[h]=(-1);h=h+1|0;}if(c&31){g=a.A.data;g[f]=g[f]|HJ(a,c);}}}
function Hn(a,b){return (-1)<<(b%32|0);}
function HJ(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function LB(a,b){var c,d;c=b/32|0;d=a.A.data;if(c<d.length){d[c]=d[c]&Jy((-2),b%32|0);if(b==(a.bl-1|0))GP(a);}}
function Dm(a,b){var c,d;c=b/32|0;d=a.A.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GU(a,b){var c,d,e,f;c=a.bl;if(b>=c)return (-1);d=b/32|0;e=a.A.data;f=e[d]>>>(b%32|0)|0;if(f)return HP(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HP(e[f])|0;f=f+1|0;}return (-1);}
function HU(a,b){var c;c=a.A.data.length;if(c>=b)return;c=V((b*3|0)/2|0,(c*2|0)+1|0);a.A=ACM(a.A,c);}
function GP(a){var b,c,d;b=(a.bl+31|0)/32|0;a.bl=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=MW(a.A.data[c]);if(d<32)break;c=c+(-1)|0;a.bl=a.bl-32|0;}a.bl=a.bl-d|0;}}
function C6(a,b){var c,d,e,f;c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]&b.A.data[d];d=d+1|0;}while(true){f=a.A.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bl=X(a.bl,b.bl);GP(a);}
function FF(a,b){var c,d,e;c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]&(b.A.data[d]^(-1));d=d+1|0;}GP(a);}
function Fz(a,b){var c,d,e;c=V(a.bl,b.bl);a.bl=c;HU(a,(c+31|0)/32|0);c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]|b.A.data[d];d=d+1|0;}}
function Fd(a,b){var c,d,e;c=V(a.bl,b.bl);a.bl=c;HU(a,(c+31|0)/32|0);c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]^b.A.data[d];d=d+1|0;}GP(a);}
function Ll(a){return a.bl?0:1;}
function L4(){var a=this;BN.call(a);a.on=null;a.uo=0;}
function Pj(){var a=this;BN.call(a);a.lm=null;a.kR=null;}
function AA0(a,b){var c=new Pj();ACG(c,a,b);return c;}
function ACG(a,b,c){BK(a);a.lm=b;a.kR=c;}
function AEh(a,b,c,d){var e,f,g,h,i;e=a.lm.c(b,c,d);if(e<0)a:{f=a.kR;g=d.ct;e=d.w;h=b+1|0;e=BD(h,e);if(e>0){d.cX=1;e=(-1);}else{i=L(c,b);if(!f.on.k(i))e=(-1);else{if(CC(i)){if(e<0&&CY(L(c,h))){e=(-1);break a;}}else if(CY(i)&&b>g&&CC(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AK6(a,b){a.d=b;a.kR.d=b;a.lm.K(b);}
function AEQ(a,b){return 1;}
function AEA(a,b){return 1;}
function Dr(){var a=this;BN.call(a);a.df=null;a.vF=0;}
function AIV(a){var b=new Dr();Tl(b,a);return b;}
function Tl(a,b){BK(a);a.df=b.ij();a.vF=b.bc;}
function AGG(a,b,c,d){var e,f,g,h;e=d.w;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(G2(g,f)&&a.k(Ej(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AHa(a,b){return a.df.k(b);}
function AEb(a,b){if(b instanceof DI)return JB(a.df,b.fc);if(b instanceof Ea)return JB(a.df,b.cP);if(b instanceof Dr)return HN(a.df,b.df);if(!(b instanceof D4))return 1;return HN(a.df,b.et);}
function AIO(a){return a.df;}
function ANC(a,b){a.d=b;}
function AGT(a,b){return 1;}
var Iz=F(Dr);
function AIC(a,b){return a.df.k(Gm(Gl(b)));}
function X8(){var a=this;BS.call(a);a.pb=null;a.vo=0;}
function AHF(a){var b=new X8();AKM(b,a);return b;}
function AKM(a,b){Dq(a);a.pb=b.ij();a.vo=b.bc;}
function AI1(a,b,c){return !a.pb.k(EJ(Eo(L(c,b))))?(-1):1;}
function D4(){var a=this;BS.call(a);a.et=null;a.vX=0;}
function AN1(a){var b=new D4();ALQ(b,a);return b;}
function ALQ(a,b){Dq(a);a.et=b.ij();a.vX=b.bc;}
function LF(a,b,c){return !a.et.k(L(c,b))?(-1):1;}
function ALp(a,b){if(b instanceof Ea)return JB(a.et,b.cP);if(b instanceof D4)return HN(a.et,b.et);if(!(b instanceof Dr)){if(!(b instanceof DI))return 1;return 0;}return HN(a.et,b.df);}
function NO(){var a=this;BN.call(a);a.ga=null;a.lc=null;a.iI=0;}
function AOa(a,b){var c=new NO();ADO(c,a,b);return c;}
function ADO(a,b,c){BK(a);a.ga=b;a.iI=c;}
function AJO(a,b){a.d=b;}
function Pu(a){if(a.lc===null)a.lc=FJ(a.ga);return a.lc;}
function ADl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.w;f=BH(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?EU([k,l]):EU([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iI;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.ga.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iI==3){k=f[0];m=a.ga.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iI==2){b=f[0];m=a.ga.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AEK(a,b){return b instanceof NO&&!Bn(Pu(b),Pu(a))?0:1;}
function AN_(a,b){return 1;}
function Ea(){BS.call(this);this.cP=0;}
function YB(a){var b=new Ea();ALU(b,a);return b;}
function ALU(a,b){Dq(a);a.cP=b;}
function AIL(a){return 1;}
function AHB(a,b,c){return a.cP!=L(c,b)?(-1):1;}
function AGB(a,b,c,d){var e,f,g;if(!(c instanceof Bw))return Hh(a,b,c,d);e=d.w;while(true){if(b>=e)return (-1);f=Gq(c,a.cP,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AIR(a,b,c,d,e){var f;if(!(d instanceof Bw))return Hq(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FP(d,a.cP,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AN4(a,b){if(b instanceof Ea)return b.cP!=a.cP?0:1;if(!(b instanceof D4)){if(b instanceof Dr)return b.k(a.cP);if(!(b instanceof DI))return 1;return 0;}return LF(b,0,V0(a.cP))<=0?0:1;}
function ACq(){BS.call(this);this.lT=0;}
function AMk(a){var b=new ACq();AKt(b,a);return b;}
function AKt(a,b){Dq(a);a.lT=EJ(Eo(b));}
function ADg(a,b,c){return a.lT!=EJ(Eo(L(c,b)))?(-1):1;}
function Xi(){var a=this;BS.call(a);a.tg=0;a.m2=0;}
function AFb(a){var b=new Xi();AMF(b,a);return b;}
function AMF(a,b){Dq(a);a.tg=b;a.m2=Hc(b);}
function ADG(a,b,c){return a.tg!=L(c,b)&&a.m2!=L(c,b)?(-1):1;}
function E2(){var a=this;BN.call(a);a.gU=0;a.jM=null;a.jf=null;a.ja=0;}
function ASm(a,b){var c=new E2();M9(c,a,b);return c;}
function M9(a,b,c){BK(a);a.gU=1;a.jf=b;a.ja=c;}
function AO_(a,b){a.d=b;}
function AK8(a,b,c,d){var e,f,g,h,i,j,k,l;e=BH(4);f=d.w;if(b>=f)return (-1);g=JT(a,b,c,f);h=b+a.gU|0;i=AB_(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dn(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JT(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AB_(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gU|0;if(h>=f){b=k;break a;}g=JT(a,h,c,f);b=k;}}}if(b!=a.ja)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jf.data[g])break;g=g+1|0;}return (-1);}
function VO(a){var b,c;if(a.jM===null){b=new M;O(b);c=0;while(c<a.ja){HR(b,Ge(a.jf.data[c]));c=c+1|0;}a.jM=N(b);}return a.jM;}
function JT(a,b,c,d){var e,f,g;a.gU=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(G2(e,f)){g=BQ(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CC(g[0])&&CY(g[1])?Ej(g[0],g[1]):g[0];a.gU=2;}}return e;}
function AI2(a,b){return b instanceof E2&&!Bn(VO(b),VO(a))?0:1;}
function AMh(a,b){return 1;}
var Wj=F(E2);
var SM=F(E2);
var W2=F(CN);
function AFJ(a,b,c,d){var e;while(true){e=a.G.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var OG=F(CN);
function AKl(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.G.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FE=F(CN);
function ANv(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.G.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AOD(a,b){a.d=b;a.G.K(b);}
var Om=F(FE);
function AIN(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AKI(a,b){a.d=b;}
function EZ(){var a=this;CN.call(a);a.fs=null;a.c2=0;}
function AVi(a,b,c,d,e){var f=new EZ();Ix(f,a,b,c,d,e);return f;}
function Ix(a,b,c,d,e,f){C8(a,c,d,e);a.fs=b;a.c2=f;}
function APU(a,b,c,d){var e,f;e=L_(d,a.c2);if(!a.G.F(d))return a.d.c(b,c,d);if(e>=a.fs.dY)return a.d.c(b,c,d);f=a.c2;e=e+1|0;D1(d,f,e);f=a.G.c(b,c,d);if(f>=0){D1(d,a.c2,0);return f;}f=a.c2;e=e+(-1)|0;D1(d,f,e);if(e>=a.fs.d4)return a.d.c(b,c,d);D1(d,a.c2,0);return (-1);}
var Mq=F(EZ);
function AH6(a,b,c,d){var e,f,g;e=0;f=a.fs.dY;a:{while(true){g=a.G.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fs.d4)return (-1);return a.d.c(b,c,d);}
var Qm=F(CN);
function APf(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.G.c(b,c,d);}
var Pt=F(FE);
function AES(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.G.c(b,c,d);return e;}
var TX=F(EZ);
function AD3(a,b,c,d){var e,f,g;e=L_(d,a.c2);if(!a.G.F(d))return a.d.c(b,c,d);f=a.fs;if(e>=f.dY){D1(d,a.c2,0);return a.d.c(b,c,d);}if(e<f.d4){D1(d,a.c2,e+1|0);g=a.G.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){D1(d,a.c2,0);return g;}D1(d,a.c2,e+1|0);g=a.G.c(b,c,d);}return g;}
var Qo=F(DQ);
function APG(a,b,c,d){var e;e=d.w;if(e>b)return a.d.cb(b,e,c,d);return a.d.c(b,c,d);}
function ANK(a,b,c,d){var e;e=d.w;if(a.d.cb(b,e,c,d)>=0)return b;return (-1);}
function Nq(){DQ.call(this);this.jX=null;}
function ALs(a,b,c,d){var e,f;e=d.w;f=TZ(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cb(b,e,c,d);return a.d.c(b,c,d);}
function ADp(a,b,c,d){var e,f,g,h;e=d.w;f=a.d.b8(b,c,d);if(f<0)return (-1);g=TZ(a,f,e,c);if(g>=0)e=g;g=V(f,a.d.cb(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.jX.g0(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function TZ(a,b,c,d){while(true){if(b>=c)return (-1);if(a.jX.g0(L(d,b)))break;b=b+1|0;}return b;}
var EA=F();
var AVj=null;var AVk=null;function Op(b){var c;if(!(b&1)){c=AVk;if(c!==null)return c;c=new Um;AVk=c;return c;}c=AVj;if(c!==null)return c;c=new Ul;AVj=c;return c;}
var W4=F(CW);
function AD5(a,b,c,d){var e;a:{while(true){if((b+a.T.bP()|0)>d.w)break a;e=a.T.bn(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Vi=F(Ep);
function AKk(a,b,c,d){var e;if((b+a.T.bP()|0)<=d.w){e=a.T.bn(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var N$=F(ER);
function AM8(a,b,c,d){var e,f,g,h,i;e=a.iL;f=e.d4;g=e.dY;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.T.bP()|0)>d.w)break a;i=a.T.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.T.bP()|0)>d.w){d.cX=1;return (-1);}i=a.T.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Pp=F(CW);
function ALk(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.T.bP()|0)<=d.w){e=a.T.bn(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var S6=F(Ep);
function AD_(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.G.c(b,c,d);}
var P0=F(ER);
function ANm(a,b,c,d){var e,f,g,h,i,j;e=a.iL;f=e.d4;g=e.dY;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.T.bP()|0)<=d.w){i=a.T.bn(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.T.bP()|0)>d.w){d.cX=1;return (-1);}j=a.T.bn(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JK=F(Bz);
function AJk(a,b,c,d){if(b&&!(d.eI&&b==d.ct))return (-1);return a.d.c(b,c,d);}
function AIm(a,b){return 0;}
function YM(){Bz.call(this);this.sT=0;}
function ANZ(a){var b=new YM();AII(b,a);return b;}
function AII(a,b){BK(a);a.sT=b;}
function AEx(a,b,c,d){var e,f,g;e=b<d.w?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.ia?0:d.ct;return (e!=32&&!Pv(a,e,b,g,c)?0:1)^(f!=32&&!Pv(a,f,b-1|0,g,c)?0:1)^a.sT?(-1):a.d.c(b,c,d);}
function AEH(a,b){return 0;}
function Pv(a,b,c,d,e){var f;if(!IT(b)&&b!=95){a:{if(Co(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(IT(f))return 0;if(Co(f)!=6)return 1;}}return 1;}return 0;}
var Nm=F(Bz);
function AIG(a,b,c,d){if(b!=d.g6)return (-1);return a.d.c(b,c,d);}
function APQ(a,b){return 0;}
function V1(){Bz.call(this);this.fz=0;}
function ARP(a){var b=new V1();ABZ(b,a);return b;}
function ABZ(a,b){BK(a);a.fz=b;}
function AL1(a,b,c,d){var e,f,g;e=!d.eI?I(c):d.w;if(b>=e){BE(d,a.fz,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BE(d,a.fz,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BE(d,a.fz,0);return a.d.c(b,c,d);}
function AFy(a,b){var c;c=!Dd(b,a.fz)?0:1;BE(b,a.fz,(-1));return c;}
var VJ=F(Bz);
function AK2(a,b,c,d){if(b<(d.ia?I(c):d.w))return (-1);d.cX=1;d.wn=1;return a.d.c(b,c,d);}
function ADe(a,b){return 0;}
function MC(){Bz.call(this);this.p9=null;}
function AFm(a,b,c,d){a:{if(b!=d.w){if(!b)break a;if(d.eI&&b==d.ct)break a;if(a.p9.rv(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AHl(a,b){return 0;}
var ACg=F(BN);
function AR9(){var a=new ACg();AKS(a);return a;}
function AKS(a){BK(a);}
function APk(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;if(f>e){d.cX=1;return (-1);}g=L(c,b);if(CC(g)){h=b+2|0;if(h<=e&&G2(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AEM(a,b){a.d=b;}
function AKN(a){return (-2147483602);}
function AEL(a,b){return 1;}
function Yc(){BN.call(this);this.kq=null;}
function ARJ(a){var b=new Yc();AFw(b,a);return b;}
function AFw(a,b){BK(a);a.kq=b;}
function AKV(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;if(f>e){d.cX=1;return (-1);}g=L(c,b);if(CC(g)){b=b+2|0;if(b<=e){h=L(c,f);if(G2(g,h))return a.kq.g0(Ej(g,h))?(-1):a.d.c(b,c,d);}}return a.kq.g0(g)?(-1):a.d.c(f,c,d);}
function AMS(a,b){a.d=b;}
function ADb(a){return (-2147483602);}
function APv(a,b){return 1;}
function AB8(){Bz.call(this);this.gL=0;}
function ARc(a){var b=new AB8();AHi(b,a);return b;}
function AHi(a,b){BK(a);a.gL=b;}
function AI7(a,b,c,d){var e;e=!d.eI?I(c):d.w;if(b>=e){BE(d,a.gL,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BE(d,a.gL,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AHg(a,b){var c;c=!Dd(b,a.gL)?0:1;BE(b,a.gL,(-1));return c;}
function AAn(){Bz.call(this);this.gT=0;}
function AQZ(a){var b=new AAn();AHG(b,a);return b;}
function AHG(a,b){BK(a);a.gT=b;}
function AK0(a,b,c,d){if((!d.eI?I(c)-b|0:d.w-b|0)<=0){BE(d,a.gT,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BE(d,a.gT,1);return a.d.c(b+1|0,c,d);}
function AG9(a,b){var c;c=!Dd(b,a.gT)?0:1;BE(b,a.gT,(-1));return c;}
function Xf(){Bz.call(this);this.e2=0;}
function AQh(a){var b=new Xf();APW(b,a);return b;}
function APW(a,b){BK(a);a.e2=b;}
function AIa(a,b,c,d){var e,f,g;e=!d.eI?I(c)-b|0:d.w-b|0;if(!e){BE(d,a.e2,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BE(d,a.e2,0);return a.d.c(b,c,d);case 13:if(g!=10){BE(d,a.e2,0);return a.d.c(b,c,d);}BE(d,a.e2,0);return a.d.c(b,c,d);default:}return (-1);}
function AFD(a,b){var c;c=!Dd(b,a.e2)?0:1;BE(b,a.e2,(-1));return c;}
function GM(){var a=this;BN.call(a);a.mF=0;a.f9=0;}
function ASg(a,b){var c=new GM();NY(c,a,b);return c;}
function NY(a,b,c){BK(a);a.mF=b;a.f9=c;}
function AD7(a,b,c,d){var e,f,g,h;e=FX(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=0;while(true){if(f>=I(e)){BE(d,a.f9,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Hc(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AMa(a,b){a.d=b;}
function FX(a,b){var c,d;c=a.mF;d=Fp(b,c);c=HX(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.ks)?B8(b.ks,d,c):null;}
function AMx(a,b){var c;c=!Dd(b,a.f9)?0:1;BE(b,a.f9,(-1));return c;}
var ACb=F(GM);
function AQo(a,b){var c=new ACb();AOv(c,a,b);return c;}
function AOv(a,b,c){NY(a,b,c);}
function AFI(a,b,c,d){var e,f;e=FX(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=!Tk(c,e,b)?(-1):I(e);if(f<0)return (-1);BE(d,a.f9,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AOj(a,b,c,d){var e,f;e=FX(a,d);f=d.ct;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=YL(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ADT(a,b,c,d,e){var f,g;f=FX(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=X(c,I(d)-I(f)|0);b:{c:while(true){if(g<0){g=(-1);break b;}c=0;while(true){if(c>=I(f))break c;if(L(d,g+c|0)!=L(f,c))break;c=c+1|0;}g=g+(-1)|0;}}if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKd(a,b){return 1;}
var Zu=F(GM);
function AQ0(a,b){var c=new Zu();AHf(c,a,b);return c;}
function AHf(a,b,c){NY(a,b,c);}
function AJD(a,b,c,d){var e,f;e=FX(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=0;while(true){if(f>=I(e)){BE(d,a.f9,I(e));return a.d.c(b+I(e)|0,c,d);}if(EJ(Eo(L(e,f)))!=EJ(Eo(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Nh=F(F7);
function AG2(a,b,c,d,e){Mg(a,b,c,d,e);return a;}
function AEC(a,b,c,d){V_(a,b,c,d);return a;}
function AE2(a,b){IZ(a,b);}
function ANO(a,b,c){Wp(a,b,c);return a;}
function Qv(){var a=this;BS.call(a);a.ce=null;a.jO=null;a.kA=null;}
function AF3(a,b,c){return !JH(a,c,b)?(-1):a.bz;}
function AEs(a,b,c,d){var e,f,g;e=d.w;while(true){if(b>e)return (-1);f=L(a.ce,a.bz-1|0);a:{while(true){g=a.bz;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&JH(a,c,b))break;b=b+RD(a.jO,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bz|0,c,d)>=0)break;b=b+1|0;}return b;}
function AHk(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.ce,0);g=(I(d)-c|0)-a.bz|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&JH(a,d,c))break;c=c-RD(a.kA,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bz|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHN(a,b){var c;if(b instanceof Ea)return b.cP!=L(a.ce,0)?0:1;if(b instanceof D4)return LF(b,0,B8(a.ce,0,1))<=0?0:1;if(!(b instanceof Dr)){if(!(b instanceof DI))return 1;return I(a.ce)>1&&b.fc==Ej(L(a.ce,0),L(a.ce,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.ce,0))){if(I(a.ce)<=1)break b;if(!b.k(Ej(L(a.ce,0),L(a.ce,1))))break b;}c=1;break a;}c=0;}return c;}
function JH(a,b,c){var d;d=0;while(d<a.bz){if(L(b,d+c|0)!=L(a.ce,d))return 0;d=d+1|0;}return 1;}
function Xe(){BS.call(this);this.ic=null;}
function ASj(a){var b=new Xe();AN5(b,a);return b;}
function AN5(a,b){var c,d,e;Dq(a);c=new M;O(c);d=0;while(true){e=BD(d,b.M);if(e>=0){a.ic=N(c);a.bz=c.M;return;}if(d<0)break;if(e>=0)break;BA(c,EJ(Eo(b.B.data[d])));d=d+1|0;}b=new Bv;U(b);J(b);}
function AJL(a,b,c){var d;d=0;while(true){if(d>=I(a.ic))return I(a.ic);if(L(a.ic,d)!=EJ(Eo(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Mw(){BS.call(this);this.gI=null;}
function AM$(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gI))return I(a.gI);e=L(a.gI,d);f=b+d|0;if(e!=L(c,f)&&Hc(L(a.gI,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var GL=F();
var AVl=null;var AVm=null;var AVh=null;function AMJ(){AMJ=Bq(GL);AGn();}
function AGn(){AVl=ARY();AVm=AQ7();AVh=H($rt_arraycls(C),[H(C,[B(350),ASh()]),H(C,[B(351),AQe()]),H(C,[B(352),ARV()]),H(C,[B(353),AR3()]),H(C,[B(354),AVm]),H(C,[B(355),ARg()]),H(C,[B(356),AQ5()]),H(C,[B(357),AQs()]),H(C,[B(358),AQn()]),H(C,[B(359),AQz()]),H(C,[B(360),AQM()]),H(C,[B(361),AQw()]),H(C,[B(362),ARB()]),H(C,[B(363),AP$()]),H(C,[B(364),ARZ()]),H(C,[B(365),AQL()]),H(C,[B(366),ARe()]),H(C,[B(367),AQJ()]),H(C,[B(368),ARf()]),H(C,[B(369),AQC()]),H(C,[B(370),AR8()]),H(C,[B(371),AQG()]),H(C,[B(372),ARk()]),
H(C,[B(373),ART()]),H(C,[B(374),ARQ()]),H(C,[B(375),AR4()]),H(C,[B(376),AQB()]),H(C,[B(377),ARH()]),H(C,[B(378),AVl]),H(C,[B(379),ARo()]),H(C,[B(380),AQt()]),H(C,[B(381),AVl]),H(C,[B(382),AP8()]),H(C,[B(383),AVm]),H(C,[B(384),AQU()]),H(C,[B(385),P(0,127)]),H(C,[B(386),P(128,255)]),H(C,[B(387),P(256,383)]),H(C,[B(388),P(384,591)]),H(C,[B(389),P(592,687)]),H(C,[B(390),P(688,767)]),H(C,[B(391),P(768,879)]),H(C,[B(392),P(880,1023)]),H(C,[B(393),P(1024,1279)]),H(C,[B(394),P(1280,1327)]),H(C,[B(395),P(1328,1423)]),
H(C,[B(396),P(1424,1535)]),H(C,[B(397),P(1536,1791)]),H(C,[B(398),P(1792,1871)]),H(C,[B(399),P(1872,1919)]),H(C,[B(400),P(1920,1983)]),H(C,[B(401),P(2304,2431)]),H(C,[B(402),P(2432,2559)]),H(C,[B(403),P(2560,2687)]),H(C,[B(404),P(2688,2815)]),H(C,[B(405),P(2816,2943)]),H(C,[B(406),P(2944,3071)]),H(C,[B(407),P(3072,3199)]),H(C,[B(408),P(3200,3327)]),H(C,[B(409),P(3328,3455)]),H(C,[B(410),P(3456,3583)]),H(C,[B(411),P(3584,3711)]),H(C,[B(412),P(3712,3839)]),H(C,[B(413),P(3840,4095)]),H(C,[B(414),P(4096,4255)]),
H(C,[B(415),P(4256,4351)]),H(C,[B(416),P(4352,4607)]),H(C,[B(417),P(4608,4991)]),H(C,[B(418),P(4992,5023)]),H(C,[B(419),P(5024,5119)]),H(C,[B(420),P(5120,5759)]),H(C,[B(421),P(5760,5791)]),H(C,[B(422),P(5792,5887)]),H(C,[B(423),P(5888,5919)]),H(C,[B(424),P(5920,5951)]),H(C,[B(425),P(5952,5983)]),H(C,[B(426),P(5984,6015)]),H(C,[B(427),P(6016,6143)]),H(C,[B(428),P(6144,6319)]),H(C,[B(429),P(6400,6479)]),H(C,[B(430),P(6480,6527)]),H(C,[B(431),P(6528,6623)]),H(C,[B(432),P(6624,6655)]),H(C,[B(433),P(6656,6687)]),
H(C,[B(434),P(7424,7551)]),H(C,[B(435),P(7552,7615)]),H(C,[B(436),P(7616,7679)]),H(C,[B(437),P(7680,7935)]),H(C,[B(438),P(7936,8191)]),H(C,[B(439),P(8192,8303)]),H(C,[B(440),P(8304,8351)]),H(C,[B(441),P(8352,8399)]),H(C,[B(442),P(8400,8447)]),H(C,[B(443),P(8448,8527)]),H(C,[B(444),P(8528,8591)]),H(C,[B(445),P(8592,8703)]),H(C,[B(446),P(8704,8959)]),H(C,[B(447),P(8960,9215)]),H(C,[B(448),P(9216,9279)]),H(C,[B(449),P(9280,9311)]),H(C,[B(450),P(9312,9471)]),H(C,[B(451),P(9472,9599)]),H(C,[B(452),P(9600,9631)]),
H(C,[B(453),P(9632,9727)]),H(C,[B(454),P(9728,9983)]),H(C,[B(455),P(9984,10175)]),H(C,[B(456),P(10176,10223)]),H(C,[B(457),P(10224,10239)]),H(C,[B(458),P(10240,10495)]),H(C,[B(459),P(10496,10623)]),H(C,[B(460),P(10624,10751)]),H(C,[B(461),P(10752,11007)]),H(C,[B(462),P(11008,11263)]),H(C,[B(463),P(11264,11359)]),H(C,[B(464),P(11392,11519)]),H(C,[B(465),P(11520,11567)]),H(C,[B(466),P(11568,11647)]),H(C,[B(467),P(11648,11743)]),H(C,[B(468),P(11776,11903)]),H(C,[B(469),P(11904,12031)]),H(C,[B(470),P(12032,12255)]),
H(C,[B(471),P(12272,12287)]),H(C,[B(472),P(12288,12351)]),H(C,[B(473),P(12352,12447)]),H(C,[B(474),P(12448,12543)]),H(C,[B(475),P(12544,12591)]),H(C,[B(476),P(12592,12687)]),H(C,[B(477),P(12688,12703)]),H(C,[B(478),P(12704,12735)]),H(C,[B(479),P(12736,12783)]),H(C,[B(480),P(12784,12799)]),H(C,[B(481),P(12800,13055)]),H(C,[B(482),P(13056,13311)]),H(C,[B(483),P(13312,19893)]),H(C,[B(484),P(19904,19967)]),H(C,[B(485),P(19968,40959)]),H(C,[B(486),P(40960,42127)]),H(C,[B(487),P(42128,42191)]),H(C,[B(488),P(42752,
42783)]),H(C,[B(489),P(43008,43055)]),H(C,[B(490),P(44032,55203)]),H(C,[B(491),P(55296,56191)]),H(C,[B(492),P(56192,56319)]),H(C,[B(493),P(56320,57343)]),H(C,[B(494),P(57344,63743)]),H(C,[B(495),P(63744,64255)]),H(C,[B(496),P(64256,64335)]),H(C,[B(497),P(64336,65023)]),H(C,[B(498),P(65024,65039)]),H(C,[B(499),P(65040,65055)]),H(C,[B(500),P(65056,65071)]),H(C,[B(501),P(65072,65103)]),H(C,[B(502),P(65104,65135)]),H(C,[B(503),P(65136,65279)]),H(C,[B(504),P(65280,65519)]),H(C,[B(505),P(0,1114111)]),H(C,[B(506),
AQx()]),H(C,[B(507),BJ(0,1)]),H(C,[B(508),Ib(62,1)]),H(C,[B(509),BJ(1,1)]),H(C,[B(510),BJ(2,1)]),H(C,[B(511),BJ(3,0)]),H(C,[B(512),BJ(4,0)]),H(C,[B(513),BJ(5,1)]),H(C,[B(514),Ib(448,1)]),H(C,[B(515),BJ(6,1)]),H(C,[B(516),BJ(7,0)]),H(C,[B(517),BJ(8,1)]),H(C,[B(518),Ib(3584,1)]),H(C,[B(519),BJ(9,1)]),H(C,[B(520),BJ(10,1)]),H(C,[B(521),BJ(11,1)]),H(C,[B(522),Ib(28672,0)]),H(C,[B(523),BJ(12,0)]),H(C,[B(524),BJ(13,0)]),H(C,[B(525),BJ(14,0)]),H(C,[B(526),AQ1(983040,1,1)]),H(C,[B(527),BJ(15,0)]),H(C,[B(528),BJ(16,
1)]),H(C,[B(529),BJ(18,1)]),H(C,[B(530),ARb(19,0,1)]),H(C,[B(531),Ib(1643118592,1)]),H(C,[B(532),BJ(20,0)]),H(C,[B(533),BJ(21,0)]),H(C,[B(534),BJ(22,0)]),H(C,[B(535),BJ(23,0)]),H(C,[B(536),BJ(24,1)]),H(C,[B(537),Ib(2113929216,1)]),H(C,[B(538),BJ(25,1)]),H(C,[B(539),BJ(26,0)]),H(C,[B(540),BJ(27,0)]),H(C,[B(541),BJ(28,1)]),H(C,[B(542),BJ(29,0)]),H(C,[B(543),BJ(30,0)])]);}
function LN(){BS.call(this);this.pu=0;}
function ANf(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.pu!=Gm(Gl(Ej(e,d)))?(-1):2;}
function Ki(){BN.call(this);this.fL=0;}
function AKR(a){var b=new Ki();AEV(b,a);return b;}
function AEV(a,b){BK(a);a.fL=b;}
function ALe(a,b){a.d=b;}
function AFz(a,b,c,d){var e,f;e=b+1|0;if(e>d.w){d.cX=1;return (-1);}f=L(c,b);if(b>d.ct&&CC(L(c,b-1|0)))return (-1);if(a.fL!=f)return (-1);return a.d.c(e,c,d);}
function AHJ(a,b,c,d){var e,f,g,h;if(!(c instanceof Bw))return Hh(a,b,c,d);e=d.ct;f=d.w;while(true){if(b>=f)return (-1);g=Gq(c,a.fL,b);if(g<0)return (-1);if(g>e&&CC(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AF$(a,b,c,d,e){var f,g;if(!(d instanceof Bw))return Hq(a,b,c,d,e);f=e.ct;a:{while(true){if(c<b)return (-1);g=FP(d,a.fL,c);if(g<0)break a;if(g<b)break a;if(g>f&&CC(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ADR(a,b){if(b instanceof Ea)return 0;if(b instanceof D4)return 0;if(b instanceof Dr)return 0;if(b instanceof DI)return 0;if(b instanceof KC)return 0;if(!(b instanceof Ki))return 1;return b.fL!=a.fL?0:1;}
function ANU(a,b){return 1;}
function KC(){BN.call(this);this.fm=0;}
function AIe(a){var b=new KC();AKX(b,a);return b;}
function AKX(a,b){BK(a);a.fm=b;}
function AE1(a,b){a.d=b;}
function ADv(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;g=BD(f,e);if(g>0){d.cX=1;return (-1);}h=L(c,b);if(g<0&&CY(L(c,f)))return (-1);if(a.fm!=h)return (-1);return a.d.c(f,c,d);}
function ALC(a,b,c,d){var e,f;if(!(c instanceof Bw))return Hh(a,b,c,d);e=d.w;while(true){if(b>=e)return (-1);f=Gq(c,a.fm,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CY(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AM9(a,b,c,d,e){var f,g;if(!(d instanceof Bw))return Hq(a,b,c,d,e);f=e.w;a:{while(true){if(c<b)return (-1);g=FP(d,a.fm,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CY(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AF4(a,b){if(b instanceof Ea)return 0;if(b instanceof D4)return 0;if(b instanceof Dr)return 0;if(b instanceof DI)return 0;if(b instanceof Ki)return 0;if(!(b instanceof KC))return 1;return b.fm!=a.fm?0:1;}
function ALM(a,b){return 1;}
function DI(){var a=this;BS.call(a);a.i1=0;a.hF=0;a.fc=0;}
function AMz(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.i1==e&&a.hF==d?2:(-1);}
function AKA(a,b,c,d){var e,f;if(!(c instanceof Bw))return Hh(a,b,c,d);e=d.w;while(b<e){b=Gq(c,a.i1,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hF==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AEY(a,b,c,d,e){var f;if(!(d instanceof Bw))return Hq(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FP(d,a.hF,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.i1==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AMl(a,b){if(b instanceof DI)return b.fc!=a.fc?0:1;if(b instanceof Dr)return b.k(a.fc);if(b instanceof Ea)return 0;if(!(b instanceof D4))return 1;return 0;}
var Ul=F(EA);
function AFc(a,b){return b!=10?0:1;}
function AMq(a,b,c){return b!=10?0:1;}
var Um=F(EA);
function ANp(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AO4(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ABb(){var a=this;C.call(a);a.lF=null;a.jh=null;a.gl=0;a.tP=0;}
function AKL(a){var b=new ABb();AIE(b,a);return b;}
function AIE(a,b){var c,d;while(true){c=a.gl;if(b<c)break;a.gl=c<<1|1;}d=c<<1|1;a.gl=d;d=d+1|0;a.lF=BH(d);a.jh=BH(d);a.tP=b;}
function P3(a,b,c){var d,e,f,g;d=0;e=a.gl;f=b&e;while(true){g=a.lF.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jh.data[f]=c;}
function RD(a,b){var c,d,e,f;c=a.gl;d=b&c;e=0;while(true){f=a.lF.data[d];if(!f)break;if(f==b)return a.jh.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.tP;}
var Xw=F();
var Kf=F(W);
function ARY(){var a=new Kf();AH7(a);return a;}
function AH7(a){}
function ZC(a){return Cr(BO(De(),9,13),32);}
var Jg=F(W);
function AQ7(){var a=new Jg();ANR(a);return a;}
function ANR(a){}
function AAg(a){return BO(De(),48,57);}
var AA7=F(W);
function ASh(){var a=new AA7();AHt(a);return a;}
function AHt(a){}
function AMV(a){return BO(De(),97,122);}
var ABB=F(W);
function AQe(){var a=new ABB();AIK(a);return a;}
function AIK(a){}
function ANX(a){return BO(De(),65,90);}
var ABF=F(W);
function ARV(){var a=new ABF();AEu(a);return a;}
function AEu(a){}
function AGH(a){return BO(De(),0,127);}
var Kb=F(W);
function AR3(){var a=new Kb();AFK(a);return a;}
function AFK(a){}
function Yg(a){return BO(BO(De(),97,122),65,90);}
var KL=F(Kb);
function ARg(){var a=new KL();AIl(a);return a;}
function AIl(a){}
function Y_(a){return BO(Yg(a),48,57);}
var AC0=F(W);
function AQ5(){var a=new AC0();AKn(a);return a;}
function AKn(a){}
function AHH(a){return BO(BO(BO(De(),33,64),91,96),123,126);}
var LD=F(KL);
function AQs(){var a=new LD();AL6(a);return a;}
function AL6(a){}
function Xa(a){return BO(BO(BO(Y_(a),33,64),91,96),123,126);}
var ZP=F(LD);
function AQn(){var a=new ZP();ANH(a);return a;}
function ANH(a){}
function AJ8(a){return Cr(Xa(a),32);}
var AAb=F(W);
function AQz(){var a=new AAb();AM_(a);return a;}
function AM_(a){}
function AFX(a){return Cr(Cr(De(),32),9);}
var YF=F(W);
function AQM(){var a=new YF();AOQ(a);return a;}
function AOQ(a){}
function AJ4(a){return Cr(BO(De(),0,31),127);}
var Yo=F(W);
function AQw(){var a=new Yo();AEG(a);return a;}
function AEG(a){}
function AO7(a){return BO(BO(BO(De(),48,57),97,102),65,70);}
var ABI=F(W);
function ARB(){var a=new ABI();AEk(a);return a;}
function AEk(a){}
function AKJ(a){var b;b=new RT;b.vE=a;Bp(b);b.I=1;return b;}
var ADa=F(W);
function AP$(){var a=new ADa();AMo(a);return a;}
function AMo(a){}
function ADn(a){var b;b=new L2;b.vN=a;Bp(b);b.I=1;return b;}
var ABc=F(W);
function ARZ(){var a=new ABc();AEv(a);return a;}
function AEv(a){}
function AIf(a){var b;b=new QR;b.vl=a;Bp(b);return b;}
var AA2=F(W);
function AQL(){var a=new AA2();AJ5(a);return a;}
function AJ5(a){}
function AMD(a){var b;b=new QQ;b.u6=a;Bp(b);return b;}
var AB2=F(W);
function ARe(){var a=new AB2();AFH(a);return a;}
function AFH(a){}
function AFT(a){var b;b=new VR;b.wu=a;Bp(b);Hv(b.H,0,2048);b.I=1;return b;}
var XO=F(W);
function AQJ(){var a=new XO();AE8(a);return a;}
function AE8(a){}
function AGh(a){var b;b=new N3;b.vY=a;Bp(b);b.I=1;return b;}
var Xt=F(W);
function ARf(){var a=new Xt();AJI(a);return a;}
function AJI(a){}
function AOZ(a){var b;b=new Nc;b.wV=a;Bp(b);b.I=1;return b;}
var ABi=F(W);
function AQC(){var a=new ABi();AKo(a);return a;}
function AKo(a){}
function ADh(a){var b;b=new PD;b.vG=a;Bp(b);return b;}
var ABt=F(W);
function AR8(){var a=new ABt();AHY(a);return a;}
function AHY(a){}
function AI_(a){var b;b=new LV;b.uf=a;Bp(b);b.I=1;return b;}
var Y2=F(W);
function AQG(){var a=new Y2();ADU(a);return a;}
function ADU(a){}
function AGq(a){var b;b=new L0;b.v5=a;Bp(b);b.I=1;return b;}
var AAe=F(W);
function ARk(){var a=new AAe();AFg(a);return a;}
function AFg(a){}
function AHn(a){var b;b=new MZ;b.wr=a;Bp(b);b.I=1;return b;}
var ACB=F(W);
function ART(){var a=new ACB();AJf(a);return a;}
function AJf(a){}
function AJb(a){var b;b=new Ot;b.wI=a;Bp(b);b.I=1;return b;}
var ABs=F(W);
function ARQ(){var a=new ABs();AKF(a);return a;}
function AKF(a){}
function AOc(a){var b;b=new OC;b.vn=a;Bp(b);return b;}
var Zr=F(W);
function AR4(){var a=new Zr();AE$(a);return a;}
function AE$(a){}
function ALV(a){var b;b=new SH;b.v_=a;Bp(b);return b;}
var Y0=F(W);
function AQB(){var a=new Y0();AME(a);return a;}
function AME(a){}
function AKD(a){var b;b=new Rq;b.uj=a;Bp(b);b.I=1;return b;}
var AC7=F(W);
function ARH(){var a=new AC7();AHQ(a);return a;}
function AHQ(a){}
function AMO(a){var b;b=new Mc;b.w7=a;Bp(b);b.I=1;return b;}
var IK=F(W);
function ARo(){var a=new IK();AGy(a);return a;}
function AGy(a){}
function AAc(a){return Cr(BO(BO(BO(De(),97,122),65,90),48,57),95);}
var AB4=F(IK);
function AQt(){var a=new AB4();AH2(a);return a;}
function AH2(a){}
function AKq(a){var b;b=Ei(AAc(a),1);b.I=1;return b;}
var ZV=F(Kf);
function AP8(){var a=new ZV();AOE(a);return a;}
function AOE(a){}
function AEq(a){var b;b=Ei(ZC(a),1);b.I=1;return b;}
var YU=F(Jg);
function AQU(){var a=new YU();AIZ(a);return a;}
function AIZ(a){}
function AHy(a){var b;b=Ei(AAg(a),1);b.I=1;return b;}
function Yu(){var a=this;W.call(a);a.pm=0;a.p5=0;}
function P(a,b){var c=new Yu();AOX(c,a,b);return c;}
function AOX(a,b,c){a.pm=b;a.p5=c;}
function AJp(a){return BO(De(),a.pm,a.p5);}
var YP=F(W);
function AQx(){var a=new YP();APc(a);return a;}
function APc(a){}
function AON(a){return BO(BO(De(),65279,65279),65520,65533);}
function ZJ(){var a=this;W.call(a);a.lf=0;a.i$=0;a.nS=0;}
function BJ(a,b){var c=new ZJ();AFC(c,a,b);return c;}
function ARb(a,b,c){var d=new ZJ();AOY(d,a,b,c);return d;}
function AFC(a,b,c){a.i$=c;a.lf=b;}
function AOY(a,b,c,d){a.nS=d;a.i$=c;a.lf=b;}
function AG6(a){var b;b=ASd(a.lf);if(a.nS)Hv(b.H,0,2048);b.I=a.i$;return b;}
function ZR(){var a=this;W.call(a);a.le=0;a.jj=0;a.mK=0;}
function Ib(a,b){var c=new ZR();AGr(c,a,b);return c;}
function AQ1(a,b,c){var d=new ZR();ADk(d,a,b,c);return d;}
function AGr(a,b,c){a.jj=c;a.le=b;}
function ADk(a,b,c,d){a.mK=d;a.jj=c;a.le=b;}
function ADi(a){var b;b=new QJ;AAP(b,a.le);if(a.mK)Hv(b.H,0,2048);b.I=a.jj;return b;}
var Yz=F();
var X6=F();
function Zq(b){var c,d,e,f,g,h,i;c=AMZ(Gh(b));d=I7(c);e=BH(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+I7(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Mp(c);h=h+1|0;}return e;}
function JZ(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function MD(){var a=this;C.call(a);a.om=0;a.qo=0;a.oB=null;}
function AG4(a,b,c){var d=new MD();ANG(d,a,b,c);return d;}
function ANG(a,b,c,d){a.om=b;a.qo=c;a.oB=d;}
function ABn(){var a=this;C.call(a);a.nv=null;a.pt=0;}
function AMZ(a){var b=new ABn();AF7(b,a);return b;}
function AF7(a,b){a.nv=b;}
var Zp=F();
function I7(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nv.data;f=b.pt;b.pt=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Be(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Mp(b){var c,d;c=I7(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Ye(){C.call(this);this.F2=null;}
function Mt(){C.call(this);this.pq=null;}
function AKy(a,b){var c,d,e,f;c=b.data;b=a.pq;d=El(c[0]);e=Fx(c[1]);Z5(b.e.g,d,e);Gg(Cg(b),AUh);FS(Cg(b));f=JM(Ft(),b.ep);b=new M;O(b);G(Hs(G(b,B(544)),f),B(224));$rt_globals.console.info($rt_ustr(N(b)));}
function P6(){C.call(this);this.pX=null;}
function AG3(a,b){QM(a.pX,b);}
function Ux(){var a=this;C.call(a);a.vA=null;a.vz=null;}
function V2(){var a=this;C.call(a);a.ut=null;a.uu=null;}
var ABe=F(0);
function ACP(b){return !b?H(Bw,[B(124),B(125),B(545)]):H(Bw,[B(124),B(125),B(545),B(41)]);}
function Vm(){var a=this;T.call(a);a.na=null;a.wA=null;}
function AGO(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b4^Dm(a.na,c):0;}
function Vj(){var a=this;T.call(a);a.sn=null;a.s5=null;a.we=null;}
function ADJ(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b4^Dm(a.sn,c):0;return a.s5.k(b)&&!d?1:0;}
function Nw(){var a=this;T.call(a);a.hI=null;a.up=null;}
function AJg(a,b){return a.bc^Dm(a.hI,b);}
function AHq(a){var b,c,d;b=new M;O(b);c=GU(a.hI,0);while(c>=0){HR(b,Ge(c));BA(b,124);c=GU(a.hI,c+1|0);}d=b.M;if(d>0)Va(b,d-1|0);return N(b);}
function ND(){var a=this;T.call(a);a.pO=null;a.vL=null;}
function AMC(a,b){return a.pO.k(b);}
function NB(){var a=this;T.call(a);a.jc=0;a.nN=null;a.j3=null;}
function ANe(a,b){return !(a.jc^Dm(a.j3.E,b))&&!(a.jc^a.j3.dl^a.nN.k(b))?0:1;}
function NC(){var a=this;T.call(a);a.ji=0;a.sF=null;a.kO=null;}
function AJK(a,b){return !(a.ji^Dm(a.kO.E,b))&&!(a.ji^a.kO.dl^a.sF.k(b))?1:0;}
function NG(){var a=this;T.call(a);a.tr=0;a.sS=null;a.sA=null;a.uM=null;}
function AGm(a,b){return a.tr^(!a.sS.k(b)&&!a.sA.k(b)?0:1);}
function NH(){var a=this;T.call(a);a.pW=0;a.py=null;a.oV=null;a.w1=null;}
function ADc(a,b){return a.pW^(!a.py.k(b)&&!a.oV.k(b)?0:1)?0:1;}
function NE(){var a=this;T.call(a);a.oI=null;a.w6=null;}
function AHu(a,b){return CV(a.oI,b);}
function NF(){var a=this;T.call(a);a.s0=null;a.u3=null;}
function AJN(a,b){return CV(a.s0,b)?0:1;}
function NI(){var a=this;T.call(a);a.qg=null;a.pC=0;a.r2=null;}
function AOo(a,b){return !CV(a.qg,b)&&!(a.pC^Dm(a.r2.E,b))?0:1;}
function NJ(){var a=this;T.call(a);a.q1=null;a.rg=0;a.qH=null;}
function AFN(a,b){return !CV(a.q1,b)&&!(a.rg^Dm(a.qH.E,b))?1:0;}
function Nv(){var a=this;T.call(a);a.r0=0;a.sE=null;a.tc=null;a.us=null;}
function AP7(a,b){return !(a.r0^a.sE.k(b))&&!CV(a.tc,b)?0:1;}
function Oh(){var a=this;T.call(a);a.s_=0;a.mk=null;a.mL=null;a.uY=null;}
function AHx(a,b){return !(a.s_^a.mk.k(b))&&!CV(a.mL,b)?1:0;}
function Ns(){var a=this;T.call(a);a.oe=null;a.u4=null;}
function AFL(a,b){return CV(a.oe,b);}
function Nt(){var a=this;T.call(a);a.ok=null;a.wY=null;}
function AHe(a,b){return CV(a.ok,b)?0:1;}
function Nz(){var a=this;T.call(a);a.tl=null;a.qU=0;a.t8=null;}
function AIJ(a,b){return CV(a.tl,b)&&a.qU^Dm(a.t8.E,b)?1:0;}
function Nr(){var a=this;T.call(a);a.rA=null;a.pY=0;a.qT=null;}
function AN3(a,b){return CV(a.rA,b)&&a.pY^Dm(a.qT.E,b)?0:1;}
function Nx(){var a=this;T.call(a);a.r4=0;a.m9=null;a.pR=null;a.uL=null;}
function AEF(a,b){return a.r4^a.m9.k(b)&&CV(a.pR,b)?1:0;}
function Ny(){var a=this;T.call(a);a.rt=0;a.l2=null;a.rY=null;a.u9=null;}
function ALL(a,b){return a.rt^a.l2.k(b)&&CV(a.rY,b)?0:1;}
var K$=F(0);
function Ro(){var a=this;C.call(a);a.uU=null;a.sG=null;a.h4=null;a.ch=null;a.hJ=0;a.jV=0;}
function LY(a,b){var c,d,e;c=I(a.h4);if(b>=0&&b<=c){WD(a.ch,null,(-1),(-1));d=a.ch;d.iM=1;d.dH=b;c=d.g6;if(c<0)c=b;d.g6=c;b=a.sG.b8(b,a.h4,d);if(b==(-1))a.ch.cX=1;if(b>=0){d=a.ch;if(d.h6){e=d.dg.data;if(e[0]==(-1)){c=d.dH;e[0]=c;e[1]=c;}d.g6=It(d);return 1;}}a.ch.dH=(-1);return 0;}d=new Bv;Bl(d,CZ(b));J(d);}
function ACz(a){return N8(a.ch,0);}
function YV(a){return QV(a.ch,0);}
function XC(a){return a.ch.ia;}
function Cd(){Cq.call(this);this.la=null;}
var AVn=null;var AVo=null;var AVp=null;var AVq=null;var AVr=null;var AVs=null;var AVt=null;var AVu=null;var AVv=null;var AVw=null;var AVx=null;var AVy=null;var AVz=null;var AVA=null;var AVB=null;var AT6=null;function ABQ(){ABQ=Bq(Cd);AMy();}
function Dx(a,b,c){var d=new Cd();N7(d,a,b,c);return d;}
function AHX(a,b,c,d){var e=new Cd();X2(e,a,b,c,d);return e;}
function N7(a,b,c,d){ABQ();DD(a,b,c);a.la=Sp(d,null);}
function X2(a,b,c,d,e){ABQ();DD(a,b,c);a.la=Sp(d,e);}
function AMy(){var b;b=new Cd;Do();N7(b,B(297),0,AT7);AVn=b;AVo=Dx(B(298),1,Cv(0,49,191));AVp=Dx(B(299),2,Br(B(546)));AVq=Dx(B(48),3,Br(B(547)));AVr=Dx(B(302),4,AT7);AVs=Dx(B(304),5,Br(B(548)));AVt=Dx(B(305),6,Br(B(315)));AVu=Dx(B(49),7,Br(B(549)));AVv=Dx(B(308),8,Br(B(550)));AVw=AHX(B(310),9,ATQ,Cv(237,235,252));AVx=AHX(B(311),10,Br(B(312)),Br(B(551)));AVy=Dx(B(314),11,Br(B(315)));AVz=Dx(B(316),12,Br(B(317)));AVA=Dx(B(318),13,Br(B(319)));b=Dx(B(320),14,Br(B(321)));AVB=b;AT6=H(Cd,[AVn,AVo,AVp,AVq,AVr,AVs,AVt,
AVu,AVv,AVw,AVx,AVy,AVz,AVA,b]);}
function Nj(){C.call(this);this.qC=null;}
function AMN(a,b){Tv(a.qC,b);}
var Mj=F(Gi);
function AG8(a,b,c,d){var e,f,g;e=0;f=d.w;a:{while(true){if(b>f){b=e;break a;}g=Fp(d,a.S);Dp(d,a.S,b);e=a.cA.c(b,c,d);if(e>=0)break;Dp(d,a.S,g);b=b+1|0;}}return b;}
function APS(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fp(e,a.S);Dp(e,a.S,c);f=a.cA.c(c,d,e);if(f>=0)break;Dp(e,a.S,g);c=c+(-1)|0;}}return c;}
function AFx(a){return null;}
var Pc=F(Bm);
var Wb=F(Bm);
function Uh(){FB.call(this);this.wQ=0;}
function O2(){FB.call(this);this.wM=0;}
var WV=F(Bm);
function Ub(){var a=this;C.call(a);a.ql=null;a.so=null;a.tE=0;a.ju=0;}
function JO(a,b){return B4(a.ql)<b?0:1;}
function Rz(){var a=this;C.call(a);a.vm=null;a.oE=null;}
function Ry(){C.call(this);this.ug=null;}
function Uf(){var a=this;C.call(a);a.dg=null;a.iW=null;a.km=null;a.ks=null;a.nP=0;a.h6=0;a.ct=0;a.w=0;a.dH=0;a.ia=0;a.eI=0;a.cX=0;a.wn=0;a.g6=0;a.iM=0;}
function BE(a,b,c){a.iW.data[b]=c;}
function Dd(a,b){return a.iW.data[b];}
function It(a){return QV(a,0);}
function QV(a,b){QI(a,b);return a.dg.data[(b*2|0)+1|0];}
function Dp(a,b,c){a.dg.data[b*2|0]=c;}
function I0(a,b,c){a.dg.data[(b*2|0)+1|0]=c;}
function Fp(a,b){return a.dg.data[b*2|0];}
function HX(a,b){return a.dg.data[(b*2|0)+1|0];}
function AA8(a){return N8(a,0);}
function N8(a,b){QI(a,b);return a.dg.data[b*2|0];}
function L_(a,b){return a.km.data[b];}
function D1(a,b,c){a.km.data[b]=c;}
function QI(a,b){var c;if(!a.h6){c=new DO;U(c);J(c);}if(b>=0&&b<a.nP)return;c=new Bv;Bl(c,CZ(b));J(c);}
function WD(a,b,c,d){a.h6=0;a.iM=2;G_(a.dg,(-1));G_(a.iW,(-1));if(b!==null)a.ks=b;if(c>=0){a.ct=c;a.w=d;}a.dH=a.ct;}
function Ze(a){return a.iM;}
function V$(){C.call(this);this.tT=null;}
function ALw(a){DA(a.tT);}
var YR=F();
var OV=F(0);
function Wd(){var a=this;C.call(a);a.q3=null;a.q4=0;a.q5=null;}
function Lo(a,b){var c,d,e,f,g,h,i,j,k;c=a.q3;d=a.q4;e=a.q5;if(b<=d){f=Cg(c);g=new Uq;g.nu=c;h=R(C,1);h.data[0]=e;C0(f,g,B(552),h);}else{i=Cg(c);g=new Us;g.pa=c;j=R(C,2);k=j.data;k[0]=e;h=BH(1);h.data[0]=250;k[1]=h;C0(i,g,B(553),j);f=Cg(c);g=new Up;g.qy=c;h=R(C,1);h.data[0]=e;C0(f,g,B(554),h);}}
function RT(){T.call(this);this.vE=null;}
function AOx(a,b){return Co(b)!=2?0:1;}
function L2(){T.call(this);this.vN=null;}
function AEo(a,b){return Co(b)!=1?0:1;}
function QR(){T.call(this);this.vl=null;}
function AD$(a,b){return PX(b);}
function QQ(){T.call(this);this.u6=null;}
function AG5(a,b){return 0;}
function VR(){T.call(this);this.wu=null;}
function AIu(a,b){return !Co(b)?0:1;}
function N3(){T.call(this);this.vY=null;}
function AOA(a,b){return Co(b)!=9?0:1;}
function Nc(){T.call(this);this.wV=null;}
function AK_(a,b){return Ga(b);}
function PD(){T.call(this);this.vG=null;}
function AMI(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function LV(){T.call(this);this.uf=null;}
function APt(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ga(b);}return b;}
function L0(){T.call(this);this.v5=null;}
function AF9(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ga(b);}return b;}
function MZ(){T.call(this);this.wr=null;}
function AOL(a,b){a:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ot(){T.call(this);this.wI=null;}
function AJZ(a,b){return IT(b);}
function OC(){T.call(this);this.vn=null;}
function AL$(a,b){return OD(b);}
function SH(){T.call(this);this.v_=null;}
function AOp(a,b){return Co(b)!=3?0:1;}
function Rq(){T.call(this);this.uj=null;}
function APd(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Ga(b);}return b;}
function Mc(){T.call(this);this.w7=null;}
function AFV(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Ga(b);}return b;}
function Lq(){T.call(this);this.kF=0;}
function ASd(a){var b=new Lq();AAP(b,a);return b;}
function AAP(a,b){Bp(a);a.kF=b;}
function ALb(a,b){return a.bc^(a.kF!=Co(b&65535)?0:1);}
var QJ=F(Lq);
function AND(a,b){return a.bc^(!(a.kF>>Co(b&65535)&1)?0:1);}
function UR(){C.call(this);this.nd=null;}
function AL0(a,b){var c,d,e,f;c=a.nd;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.oE;c=By();b=Ct(b);e=new M;O(e);G(G(e,B(555)),b);Bu(c,N(e));b=By();f=d.length;c=new M;O(c);S(G(c,B(556)),f);Bu(b,N(c));}
function UU(){var a=this;C.call(a);a.sh=null;a.si=null;}
function AKO(a,b){var c,d;c=a.sh;d=a.si;b.arrayBuffer().then(Bk(c,"f"),Bk(d,"f"));}
function St(){var a=this;C.call(a);a.lJ=null;a.lK=null;}
function AHD(a,b){var c;c=a.lJ;Lo(a.lK,I1(c,b.size));}
function Sw(){C.call(this);this.tm=null;}
function ADD(a,b){var c;c=a.tm;Bu(KX(),$rt_str(b.message));Lo(c,0);}
function Tz(){C.call(this);this.vc=null;}
function AJr(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function NZ(){var a=this;C.call(a);a.nJ=null;a.nK=null;}
function Us(){C.call(this);this.pa=null;}
function ALI(a,b){var c,d;c=a.pa;if(!c.hm){b=b.data;c.e.g=AAp(El(b[0]),Fx(b[1]));c.hl=1;d=JM(Ft(),c.ep);b=new M;O(b);G(Hs(G(b,B(557)),d),B(224));$rt_globals.console.info($rt_ustr(N(b)));}}
function Up(){C.call(this);this.qy=null;}
function AJv(a,b){var c,d,e,f,g,h;c=b.data;d=a.qy;e=(El(c[2])).data[0];if(e!=1)Hl(d,b);else{d.hm=1;f=El(c[0]);g=Fx(c[1]);b=d.e;b.g=ABf(b.g,f,g,d.hl);Ve(d,ABY(e));Gg(Cg(d),AUh);FS(Cg(d));h=JM(Ft(),d.ep);b=new M;O(b);G(Hs(G(b,B(558)),h),B(224));$rt_globals.console.info($rt_ustr(N(b)));VI(d);Jq(d);}}
function Uq(){C.call(this);this.nu=null;}
function ALK(a,b){Hl(a.nu,b);}
function OW(){C.call(this);this.t_=null;}
function AJx(a){var b,c;b=a.t_;c=b.nJ;b=b.nK;c.Ec(b.hE,b.jB,null);}
var XW=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["dR",ASA(AJU),"ci",ASz(AEU)],Qx,0,C,[],0,3,0,0,0,Mm,0,C,[],3,3,0,0,0,LP,0,C,[],3,3,0,0,0,Vo,0,C,[Mm,LP],0,3,0,0,0,Yl,0,C,[],4,0,0,0,0,X7,0,C,[],4,3,0,0,0,Gj,0,C,[],0,3,0,0,0,DR,0,Gj,[],0,3,0,0,0,Bm,0,DR,[],0,3,0,0,0,ZS,0,Bm,[],0,3,0,0,0,Da,0,C,[],3,3,0,0,0,CH,0,C,[],3,3,0,0,0,Ig,0,C,[],3,3,0,0,0,Bw,"String",1,C,[Da,CH,Ig],0,3,0,EB,["ci",ASz(AET),"dR",ASA(Bn),"i7",ASA(AG7)],Ew,0,Gj,[],0,3,0,0,0,GW,0,Ew,[],0,3,0,0,0,Zt,0,GW,[],0,3,0,0,0,DK,0,C,[Da],1,3,0,0,0,E5,0,DK,[CH],0,3,0,
0,["i7",ASA(AI9)],F7,0,C,[Da,Ig],0,0,0,0,["he",ASA(IZ),"ci",ASz(N)],Hu,0,C,[],3,3,0,0,0,M,0,F7,[Hu],0,3,0,0,["kU",ASD(AI4),"j9",ASC(AGf),"ci",ASz(DH),"he",ASA(AJa),"ls",ASB(AJG)],Eg,0,GW,[],0,3,0,0,0,AAR,0,Eg,[],0,3,0,0,0,Zj,0,Eg,[],0,3,0,0,0,SE,0,C,[],3,3,0,0,0,Dj,0,C,[],3,3,0,0,0,N1,0,C,[],3,0,0,0,0,H1,0,C,[SE,Dj,N1],1,3,0,0,["fo",ASz(FD)],Qj,0,H1,[],0,3,0,0,0,XA,0,C,[],0,3,0,0,0,AB6,0,C,[],4,3,0,0,0,Bb,0,C,[],3,3,0,0,0,SO,0,C,[Bb],0,3,0,0,0,Bt,0,C,[],3,3,0,0,0,Z7,0,C,[Bt],1,3,0,0,0,XF,0,C,[],3,3,0,0,0,ABE,
0,C,[],3,3,0,0,0,ABz,0,C,[],3,3,0,0,0,K3,0,C,[],0,3,0,0,0,Yi,0,C,[Bt],1,3,0,0,0,BU,0,C,[Bt],3,3,0,0,0,SP,0,C,[BU],0,3,0,0,["bf",ASA(ADd)],SN,0,C,[BU],0,3,0,0,["bf",ASA(AOq)],KG,0,C,[],4,3,0,0,0,ABv,0,C,[],4,3,0,0,0,YX,0,C,[],0,3,0,0,0,AC8,0,C,[],4,3,0,0,0,Mu,0,C,[BU],0,3,0,0,["bf",ASA(AKZ)]]);
$rt_metadata([ABV,0,C,[Bt],1,3,0,0,0,XQ,0,C,[],0,3,0,0,0,I9,0,C,[Bt],3,3,0,0,0,Zb,0,C,[I9],1,3,0,0,["Fi",ASA(APA),"EE",ASz(AFd)],ZF,0,C,[Bt],1,3,0,0,0,FC,0,C,[],3,3,0,0,0,RR,0,C,[FC],0,3,0,0,0,Bv,0,Bm,[],0,3,0,0,0,AAx,0,C,[],4,3,0,0,0,Gn,0,Bm,[],0,3,0,0,0,H$,0,Bm,[],0,3,0,0,0,C2,0,C,[CH],0,3,0,0,0,LJ,0,C,[Bt],3,3,0,0,0,Rv,0,C,[LJ],3,3,0,0,0,D7,0,C,[Bt],3,3,0,0,0,AB5,0,C,[Rv,D7],3,3,0,0,0,M0,0,C,[BU],0,3,0,0,["bf",ASA(AL2)],ZD,0,C,[],4,3,0,0,0,Or,0,C,[D7],3,3,0,0,0,P$,0,C,[D7],3,3,0,0,0,P1,0,C,[D7],3,3,0,0,0,Sz,
0,C,[D7],3,3,0,0,0,Wa,0,C,[D7],3,3,0,0,0,TQ,0,C,[D7,Or,P$,P1,Sz,Wa],3,3,0,0,0,NL,0,C,[],3,3,0,0,0,XE,0,C,[Bt,TQ,NL,I9],1,3,0,0,["Dm",ASB(AJB),"Fo",ASB(AJW),"xm",ASA(AEe),"BW",ASC(AK4),"z2",ASA(AOI),"z8",ASz(AFh),"yD",ASC(ADz)],BC,0,Bm,[],0,3,0,0,0,W1,0,Bm,[],0,3,0,0,0,GT,0,Bv,[],0,3,0,0,0,YI,0,C,[],0,3,0,0,0,DU,0,C,[],4,3,0,JQ,["dR",ASA(AOw)],NK,0,C,[],3,3,0,0,0,RG,0,C,[NK],0,3,0,0,0,Ci,0,C,[],3,3,0,0,0,QK,0,C,[Ci],0,3,0,0,0,Bi,0,C,[],3,3,0,0,0,Z2,0,C,[Bi],0,3,0,0,0,Zd,0,C,[Bt],1,3,0,0,0,ZA,0,C,[Bt],1,3,0,0,
0,P5,0,C,[Bt],3,3,0,0,0,UL,0,C,[P5],0,3,0,0,["BZ",ASA(AId)],UF,0,C,[Bi],0,3,0,0,0,Pb,0,C,[Bt],3,3,0,0,0,UG,0,C,[Pb],0,3,0,0,["tz",ASB(AGx)],ACa,0,C,[Bt],1,3,0,0,0,Ch,0,C,[Bt],3,3,0,0,0,UD,0,C,[Ch],0,3,0,0,["b3",ASA(AL_)],Kl,0,C,[],3,3,0,0,0,Er,0,C,[Kl],1,3,0,0,0,Eb,0,C,[],3,3,0,0,0]);
$rt_metadata([Wz,0,C,[Kl],3,3,0,0,0,Ml,0,C,[Wz],3,3,0,0,0,Oc,0,Er,[Eb,Da,Ml],0,3,0,0,0,UE,0,C,[BU],0,3,0,0,["bf",ASA(ANl)],ACw,0,C,[Bt],1,3,0,0,0,AC3,0,C,[Bt],1,3,0,0,0,Jc,0,C,[Bt],3,3,0,0,0,V3,0,C,[Jc],0,3,0,0,["tN",ASA(AMt)],Zs,0,C,[Bt],1,3,0,0,0,V4,0,C,[Jc],0,3,0,0,["tN",ASA(AKh)],OB,0,C,[],0,3,0,0,0,Kz,0,C,[],1,3,0,0,0,ABD,0,Kz,[],0,3,0,0,0,Cp,0,C,[Dj],1,3,0,0,["c0",ASA(APg)],Iw,0,C,[FC],0,3,0,0,["lA",ASB(IV)],YO,0,C,[],0,3,0,0,0,Vt,0,C,[Ch],0,3,0,0,["b3",ASA(ALz)],Vu,0,C,[Ch],0,3,0,0,["b3",ASA(ALO)],Vv,
0,C,[Ch],0,3,0,0,["b3",ASA(AKf)],Vw,0,C,[Ch],0,3,0,0,["b3",ASA(AJC)],Vx,0,C,[Ch],0,3,0,0,["b3",ASA(AJ1)],Vy,0,C,[Ch],0,3,0,0,["b3",ASA(AMn)],Vz,0,C,[Ch],0,3,0,0,["b3",ASA(AHS)],VA,0,C,[Ch],0,3,0,0,["b3",ASA(API)],VB,0,C,[Ch],0,3,0,0,["b3",ASA(AHb)],VC,0,C,[Ch],0,3,0,0,["b3",ASA(ANs)],WP,0,C,[Ch],0,3,0,0,["b3",ASA(APh)],WQ,0,C,[Ch],0,3,0,0,["b3",ASA(AJQ)],WR,0,C,[Ch],0,3,0,0,["b3",ASA(AKj)],WS,0,C,[Ch],0,3,0,0,["b3",ASA(AL4)],Te,0,C,[],3,3,0,0,0,Tr,0,C,[Te],0,3,0,0,0,Tp,0,C,[Ch],0,3,0,0,["b3",ASA(AIU)],LK,0,
C,[],0,3,0,0,0,ACn,0,C,[],0,3,0,0,0,Ic,0,C,[],3,3,0,0,0,Ck,0,C,[Ic],3,3,0,0,0,CB,0,C,[],3,3,0,0,["bX",ASA(AIY),"cm",ASC(AMm),"cZ",ASB(AE_),"cG",ASB(ADZ)],DM,0,C,[],3,3,0,0,0,EP,0,C,[Ic],3,3,0,0,0,Fa,0,C,[],3,3,0,0,0,HE,0,C,[],3,3,0,0,0,FV,0,C,[HE],3,3,0,0,0,Pk,0,C,[Dj],0,3,0,0,0,Z,0,C,[],0,3,0,0,["ci",ASz(W9)],VF,0,C,[],0,3,0,0,0,ABC,0,C,[],0,3,0,0,0,X4,0,C,[],3,3,0,0,0,Pa,0,C,[],0,3,0,0,0,KS,0,C,[],0,3,0,0,0]);
$rt_metadata([DY,0,KS,[],0,3,0,0,0,Vd,0,DY,[],0,3,0,0,0,Eq,0,DY,[],0,3,0,0,0,PM,0,DY,[],0,3,0,0,0,ABj,0,Eq,[],0,3,0,0,0,AAU,0,Eq,[],0,3,0,0,0,Yk,0,Eq,[],0,3,0,0,0,QT,0,C,[Bt],3,3,0,0,0,AC6,0,C,[QT],3,3,0,0,0,O9,0,C,[Dj],0,3,0,0,0,O_,0,C,[],0,3,0,0,0,Cq,0,C,[CH,Da],1,3,0,0,0,Gv,0,Cq,[],12,3,0,X1,0,Lr,0,C,[],3,3,0,0,0,Sf,0,C,[Lr],3,3,0,0,0,TG,0,C,[],3,3,0,0,0,Gc,0,C,[Sf,TG],1,3,0,0,0,IN,0,Gc,[],0,3,0,0,0,Zh,0,IN,[],0,3,0,0,0,F0,0,Gc,[],1,3,0,0,0,KF,0,F0,[],0,3,0,0,["jA",ASC(AIM)],DL,0,Cq,[],12,3,0,AOC,0,ID,0,
C,[CH],1,3,0,0,0,Lv,0,ID,[],0,3,0,Y7,0,JI,0,C,[],32,0,0,XD,0,Oi,0,C,[],0,3,0,0,0,Gz,0,Cq,[],12,0,0,AAo,0,F5,0,Cq,[],12,0,0,AAq,0,UM,0,DR,[],0,3,0,0,0,ABu,0,BC,[],0,3,0,0,0,Lu,0,C,[Bt],3,3,0,0,0,Ww,0,C,[Lu],0,3,0,0,["bf",ASA(AM1)],Wy,0,C,[Lu],0,3,0,0,["bf",ASA(AEO)],GI,0,C,[],1,3,0,0,0,Rb,0,C,[],3,3,0,0,0,Kq,0,GI,[CH,Hu,Ig,Rb],1,3,0,0,0,I_,0,GI,[CH],1,3,0,0,0,Hk,0,C,[],0,3,0,GR,0,Ms,0,Cp,[],0,3,0,0,["bT",ASz(AJM),"b_",ASB(AIg)],ACN,0,C,[],0,3,0,0,0,ZZ,0,C,[Bt],1,3,0,0,0,Jm,0,Kq,[],1,0,0,0,0,ZE,0,Jm,[],0,0,0,
0,0,Kd,0,C,[],1,3,0,0,0,K1,0,C,[],0,3,0,0,0,XN,0,C,[],0,3,0,0,0,KE,0,C,[Bt],3,3,0,0,0,MB,0,C,[KE],0,3,0,0,["bf",ASA(AGZ)],MA,0,C,[KE],0,3,0,0,["bf",ASA(AK3)],Mz,0,C,[BU],0,3,0,0,["bf",ASA(ALJ)]]);
$rt_metadata([My,0,C,[BU],0,3,0,0,["bf",ASA(AFp)],R8,0,C,[Ci],0,3,0,0,["cd",ASA(ALh)],R7,0,C,[Ci],0,3,0,0,["cd",ASA(AEp)],R6,0,C,[Ci],0,3,0,0,["cd",ASA(AHZ)],R5,0,C,[Ci],0,3,0,0,["cd",ASA(AHV)],R4,0,C,[Ci],0,3,0,0,["cd",ASA(AIy)],R3,0,C,[Ci],0,3,0,0,["cd",ASA(AEw)],R2,0,C,[Ci],0,3,0,0,["cd",ASA(AF_)],R1,0,C,[Ci],0,3,0,0,["cd",ASA(ALy)],R0,0,C,[Ci],0,3,0,0,["cd",ASA(AO1)],RZ,0,C,[Ci],0,3,0,0,["cd",ASA(APT)],PL,0,C,[Ci],0,3,0,0,["cd",ASA(AJo)],PJ,0,C,[Ci],0,3,0,0,["cd",ASA(ADo)],PK,0,C,[Ci],0,3,0,0,["cd",ASA(AGV)],PH,
0,C,[Ci],0,3,0,0,["cd",ASA(AJH)],PI,0,C,[Ci],0,3,0,0,["cd",ASA(ANh)],GQ,0,C,[],0,3,0,0,0,N5,0,GQ,[],0,3,0,0,0,ABM,0,C,[],0,3,0,0,0,LG,0,GQ,[],0,3,0,0,0,Tg,0,C,[Bt],3,3,0,0,0,MU,0,C,[Tg],0,3,0,0,["tN",ASA(AJh)],T2,0,C,[Bb],0,3,0,0,["l",ASA(Vf)],VW,0,I_,[],0,0,0,0,0,AAH,0,C,[Bt],1,3,0,0,0,JG,0,C,[],4,3,0,AIw,0,U8,0,C,[],3,3,0,0,0,RM,0,C,[U8],0,3,0,0,["ci",ASz(AFW)],Ty,0,C,[],3,3,0,0,0,Ko,"JsFileHandle",5,C,[Ty],0,3,0,0,["ci",ASz(AIS)],J_,0,Kd,[],1,3,0,0,0,Oy,0,J_,[],0,3,0,0,0,HW,0,DR,[],0,3,0,0,0,JS,0,Cp,[],0,
3,0,0,["c0",ASA(AFA),"bT",ASz(AIc),"oD",ASz(ALY),"b_",ASB(AKB),"rG",ASA(AAh)],XH,0,Cp,[],0,3,0,0,["c0",ASA(ADK),"bT",ASz(AGL),"b_",ASB(AM0)],DT,0,Cp,[],1,3,0,0,["b_",ASB(KT)],Ee,0,C,[],3,3,0,0,0,U_,0,DT,[CB,Ee],0,3,0,0,["f4",ASB(AOm),"b_",ASB(AGg),"bT",ASz(AG0),"bX",ASA(AMj),"cZ",ASB(AHT),"cG",ASB(AER),"cm",ASC(ALB)],Wu,0,DT,[Ee],0,3,0,0,["f4",ASB(AO6),"bT",ASz(AFv),"b_",ASB(AJ0),"c0",ASA(AOF)],W0,0,DT,[CB],0,3,0,0,["bX",ASA(AIY),"cm",ASC(AMm),"cZ",ASB(AE_),"cG",ASB(ADZ),"bT",ASz(AMs),"c0",ASA(AFU)],On,0,Cp,
[],0,3,0,0,["bT",ASz(AD2),"b_",ASB(AN8)],C7,0,Cp,[],0,3,0,0,["bT",ASz(Ra),"b_",ASB(RH)],PT,"SelectFileTest",6,C7,[],0,3,0,0,0,ACE,"WorkerTest",7,C7,[],0,3,0,0,0,VQ,"RenderTexture",6,C7,[],0,3,0,0,["c0",ASA(AI$),"bT",ASz(ADE),"b_",ASB(ALT)],Rc,"ScissorDemo",6,C7,[],0,3,0,0,["bT",ASz(APu),"b_",ASB(AFk)],NW,0,Cp,[],0,3,0,0,["bT",ASz(APx),"b_",ASB(AHo),"c0",ASA(AF0)],H0,"ClipboardTest",6,C7,[CB],0,3,0,0,["bX",ASA(AIY),"cZ",ASB(AE_),"cG",ASB(ADZ),"cm",ASC(AMU)],Ph,0,Cp,[],0,3,0,0,["bT",ASz(APo),"b_",ASB(AJ_)],Vq,
0,DT,[Ee],0,3,0,0,["f4",ASB(AIk),"bT",ASz(APP),"b_",ASB(AMb),"c0",ASA(AI6)]]);
$rt_metadata([Qb,0,JS,[],0,3,0,0,["oD",ASz(AIp),"rG",ASA(AFr)],Is,0,C,[],3,3,0,0,0,Lz,0,C,[Is,Da],0,3,0,0,0,IQ,0,Lz,[],0,0,0,0,0,ACk,0,C,[],0,3,0,0,0,X0,0,C,[],3,3,0,0,0,ACZ,0,C,[],0,3,0,0,0,TS,0,C,[CB,DM],0,0,0,0,["bX",ASA(AMv),"cm",ASC(APZ),"cZ",ASB(APH),"cG",ASB(AK1),"cY",ASC(AJy)],JC,0,C,[],3,3,0,0,["t1",ASz(AFP),"rM",ASz(AP6)],Zl,0,C,[JC,CB],0,3,0,0,["rM",ASz(AGF),"t1",ASz(AFl),"cG",ASB(AMd),"cZ",ASB(AOk),"cm",ASC(AHM),"bX",ASA(AGa),"hH",ASA(ALc)],QZ,0,C,[Ck],0,3,0,0,["bv",ASA(AKm)],Q3,0,C,[Ck],0,3,0,0,
["bv",ASA(AHL)],Jr,0,C,[Ck],0,3,0,0,["bv",ASA(AM7)],Q2,0,C,[Bb],0,3,0,0,["l",ASA(AEf)],Q1,0,C,[Ck],0,3,0,0,["bv",ASA(AP1)],Q0,0,C,[Fa],0,3,0,0,["ha",ASB(ALG)],Q6,0,C,[FV],0,3,0,0,["f7",ASz(APz)],Q5,0,C,[DM],0,3,0,0,["cY",ASC(AJw)],Q4,0,C,[EP],0,3,0,0,["bv",ASA(AMH)],BW,0,C,[],0,3,0,0,["dR",ASA(APC)],Cx,0,C,[],3,3,0,Do,0,H3,0,C,[],0,3,0,0,0,ABN,0,H3,[],0,3,0,0,0,ZG,0,C,[],0,3,0,0,0,SL,0,C,[CB],0,0,0,0,["bX",ASA(AL5),"cm",ASC(ANx),"cZ",ASB(AJ2),"cG",ASB(AGl)],QD,0,C,[Ck],0,3,0,0,["bv",ASA(ALZ)],QC,0,C,[Ck],0,
3,0,0,["bv",ASA(AOt)],QF,0,C,[Fa],0,3,0,0,["ha",ASB(AOV)],QE,0,C,[Bi],0,3,0,0,["s",ASz(AOU)],QB,0,C,[EP],0,3,0,0,["bv",ASA(AKs)],QA,0,C,[DM],0,3,0,0,["cY",ASC(AH8)],If,0,BW,[],0,3,0,0,0,T0,0,C,[],0,3,0,0,0,Yt,0,C,[],0,3,0,0,0,XB,0,C,[Ee,JC],0,3,0,0,["t1",ASz(AFP),"rM",ASz(AP6),"f4",ASB(AFj),"hH",ASA(ADP)],R$,0,C,[Ck],0,3,0,0,["bv",ASA(AMr)],Sb,0,C,[EP],0,3,0,0,["bv",ASA(ADs)],ACA,0,C,[],0,3,0,0,["dR",ASA(APY)],Kj,0,C,[],0,3,0,0,0,R_,0,C,[Bi],0,3,0,0,["s",ASz(AHR)],R9,0,C,[Bi],0,3,0,0,["s",ASz(ANN)],C5,0,C,[],
0,3,0,0,0,ZY,0,C,[CB,Ee],0,3,0,0,["bX",ASA(X_),"cm",ASC(ZX),"cZ",ASB(Y6),"cG",ASB(ACQ),"f4",ASB(AOO)],W5,0,C,[Ck],0,3,0,0,["bv",ASA(AI3)],W6,0,C,[EP],0,3,0,0,["bv",ASA(AKr)],AAJ,0,C,[],0,3,0,0,0,W8,0,C,[DM],0,3,0,0,["cY",ASC(AKH)],Vc,0,C,[],3,3,0,0,0,G8,0,C,[Vc],3,3,0,0,0,EC,0,C,[G8],1,3,0,0,0]);
$rt_metadata([L$,0,C,[G8],3,3,0,0,0,FU,0,EC,[L$],1,3,0,0,0,HS,0,C,[],3,3,0,0,0,M7,0,FU,[Eb,Da,HS],0,3,0,0,["qQ",ASA(Bs),"m_",ASz(ALj),"to",ASA(Ec)],ACm,0,C,[],0,3,0,0,0,S4,0,C,[Ee],0,3,0,0,["f4",ASB(AKU)],S5,0,C,[Ck],0,3,0,0,["bv",ASA(ADx)],MF,0,C,[],3,3,0,0,0,ABJ,0,C,[MF],0,3,0,0,0,Z$,0,C,[Dj],0,3,0,0,0,ABy,0,C,[],3,3,0,0,0,Vp,0,C,[CB],0,0,0,0,["cm",ASC(AMm),"cZ",ASB(AKK),"cG",ASB(AMf),"bX",ASA(AGD)],RL,0,C,[DM],0,3,0,0,["cY",ASC(AFZ)],Tw,0,C,[],3,3,0,0,0,Z9,0,C,[],0,3,0,0,0,Pd,0,C,[Ck],0,3,0,0,["bv",ASA(AMX)],Qf,
0,C,[Bb],0,3,0,0,["l",ASA(ADX)],Qe,0,C,[Bb],0,3,0,0,["l",ASA(APD)],Qd,0,C,[Bb],0,3,0,0,["l",ASA(AGi)],Qc,0,C,[Bb],0,3,0,0,["l",ASA(AK7)],Qa,0,C,[Bb],0,3,0,0,["l",ASA(AKi)],P_,0,C,[Bb],0,3,0,0,["l",ASA(AMc)],SJ,0,C,[CB],0,0,0,0,["cm",ASC(AMm),"cG",ASB(ADZ),"bX",ASA(AN6),"cZ",ASB(AOr)],Tb,0,C,[CB],0,0,0,0,["cm",ASC(AMm),"cZ",ASB(AEz),"cG",ASB(AFe),"bX",ASA(AD9)],M$,0,C,[DM],0,3,0,0,["cY",ASC(AD1)],Rn,0,C,[Ck],0,3,0,0,["bv",ASA(AN$)],Rm,0,C,[Fa],0,3,0,0,["ha",ASB(AGE)],Rk,0,C,[Fa],0,3,0,0,["ha",ASB(ANz)],Rj,0,
C,[FV],0,3,0,0,["f7",ASz(ALA)],Rl,0,C,[FV],0,3,0,0,["f7",ASz(AE6)],QU,0,C,[Ck],0,3,0,0,["bv",ASA(AGK)],Kp,0,C,[],0,3,0,0,0,Pz,0,C,[Ck],0,3,0,0,["bv",ASA(AHd)],PA,0,C,[EP],0,3,0,0,["bv",ASA(ADy)],PB,0,C,[DM],0,3,0,0,["cY",ASC(AMA)],KW,0,C,[],0,3,0,0,0,NT,0,C,[Bt],3,3,0,0,0,Of,0,C,[NT],0,3,0,0,["tz",ASB(AHj)],NU,0,C,[Bt],3,3,0,0,0,Od,0,C,[NU],0,3,0,0,["tz",ASB(AIo)],Ym,0,C,[],0,3,0,0,0,Xv,0,C,[Bt],3,3,0,0,0,LQ,0,C,[Bi],0,3,0,0,["s",ASz(AJA)],LR,0,C,[Bi],0,3,0,0,["s",ASz(AH5)],UX,0,C,[],0,3,0,0,0,Xc,0,C,[],0,3,
0,0,0,MG,0,C,[],0,3,0,0,0,EH,0,C,[Dj],0,0,0,0,0,TO,0,C,[Bb],0,3,0,0,0,TN,0,C,[Bb],0,3,0,0,["l",ASA(AM6)]]);
$rt_metadata([TJ,0,C,[Bb],0,3,0,0,["l",ASA(AK5)],TI,0,C,[Bi],0,3,0,0,["s",ASz(AM4)],TL,0,C,[Bi],0,3,0,0,["s",ASz(AH$)],TK,0,C,[Bi],0,3,0,0,["s",ASz(AKp)],Uc,0,C,[Bi],0,3,0,0,["s",ASz(AMu)],Fe,0,Cq,[],12,3,0,ADH,0,IP,0,C,[Dj],0,3,0,0,["fo",ASz(AAZ)],Rf,0,C,[Ck],0,3,0,0,["bv",ASA(AP2)],Rg,0,C,[Ck],0,3,0,0,["bv",ASA(ADC)],SD,0,C,[],0,3,0,0,0,WO,0,C,[],3,3,0,0,0,ET,0,C,[],0,3,0,0,0,G0,0,C,[],4,3,0,0,0,AC$,0,C,[],0,3,0,0,0,Hy,0,C,[],3,3,0,0,0,V8,0,C,[Hy],0,3,0,0,["nr",ASC(AMP)],V9,0,C,[Hy],0,3,0,0,0,UZ,0,C,[CB],
0,0,0,0,["bX",ASA(ADB),"cm",ASC(AMR),"cZ",ASB(ANM),"cG",ASB(AIx)],ABK,0,C,[],0,0,0,0,0,WZ,0,C,[Bb],0,3,0,0,["l",ASA(AMg)],M4,0,C,[Tw],0,3,0,0,0,Ds,0,C,[],3,3,0,EF,0,AAd,0,C,[],0,3,0,0,0,ON,0,C,[Bb],0,3,0,0,["l",ASA(AIF)],Qp,0,C,[CB],0,0,0,0,["cm",ASC(AMm),"cZ",ASB(AE_),"cG",ASB(ADZ),"bX",ASA(ADF)],Yy,0,C,[],0,3,0,0,0,Jx,0,C,[],0,3,0,0,0,EK,0,C,[],0,3,0,0,0,Lw,0,EK,[],0,3,0,0,0,LU,0,EK,[],0,3,0,0,0,Pi,0,EK,[],0,3,0,0,0,H2,0,C,[],3,3,0,0,0,Qk,0,C,[],3,3,0,0,0,F_,0,C,[CH],0,3,0,0,0,II,0,C,[],0,3,0,0,0,J5,0,F0,
[],0,3,0,0,["jA",ASC(AGU)],ACr,0,C,[],0,3,0,0,0,Zi,0,C,[Bt],4,3,0,0,0,ACV,0,C,[],0,3,0,0,0,ZI,0,C,[],0,3,0,0,0,ACd,0,C,[],3,3,0,0,0,CO,0,C,[Bt],1,3,0,0,0,AAB,0,CO,[],1,3,0,0,0,ABg,0,CO,[],1,3,0,0,0,Yq,0,CO,[],1,3,0,0,0,YK,0,CO,[],1,3,0,0,0,ABL,0,CO,[],1,3,0,0,0,ZU,0,Er,[Eb,Da],0,3,0,0,0,Cw,0,C,[],0,3,0,0,0,MV,0,C,[Bi],0,3,0,0,["s",ASz(APm)]]);
$rt_metadata([Th,0,C,[Bi],0,3,0,0,["s",ASz(AJV)],B5,0,C,[],0,3,0,0,0,Ie,0,C,[],0,3,0,0,0,ACv,0,C,[CH],0,3,0,0,["dR",ASA(ANA),"i7",ASA(AE4)],Wo,0,C,[FC],0,3,0,0,["lA",ASB(AHC)],Wq,0,C,[FC],0,3,0,0,["lA",ASB(AJe)],EL,0,C,[],0,3,0,0,0,GN,0,FU,[HS],1,0,0,0,["to",ASA(AKb)],WF,0,GN,[HS],0,0,0,0,["m_",ASz(AGS),"qQ",ASA(APb)],Xo,0,C,[],0,3,0,0,["ci",ASz(AHI)],N4,0,C,[G8],3,3,0,0,0,F3,0,EC,[N4],1,3,0,0,0,JA,0,F3,[],1,0,0,0,0,UC,0,JA,[],0,0,0,0,0,KK,0,Er,[],1,0,0,0,0,UA,0,KK,[],0,0,0,0,0,UB,0,GN,[],0,0,0,0,0,Fs,0,C,[],
3,3,0,0,0,Uy,0,C,[Fs],0,0,0,0,0,Ow,0,C,[Fs],3,3,0,0,0,Uz,0,C,[Ow],0,0,0,0,0,WY,0,C,[FC],0,3,0,0,0,KH,0,C,[],0,3,0,0,0,MN,0,C,[Fs],0,0,0,0,0,Y4,0,C,[],4,3,0,0,0,UV,0,C,[CB],0,0,0,0,["cm",ASC(AMm),"cZ",ASB(AE_),"cG",ASB(ADZ),"bX",ASA(ANd)],Zf,0,C,[Bt],1,3,0,0,0,JX,0,C,[Is,Eb],0,0,0,0,0,HI,0,JX,[],0,0,0,0,0,T5,0,C,[Bb],0,3,0,0,["l",ASA(AH_)],U3,0,C,[HE],0,3,0,0,["f7",ASz(APr)],Ce,0,Cq,[],12,3,0,Yn,0,IL,0,C,[],0,3,0,0,0,AC2,0,C,[],0,3,0,0,0,KQ,0,C,[],3,3,0,0,0,Qg,0,C,[KQ],0,3,0,0,["p8",ASA(AKC)],XZ,0,C,[],0,3,0,
0,0,Xb,0,C,[],0,3,0,0,0,Mx,0,C,[Dj],0,3,0,0,0,FB,0,HW,[],0,3,0,0,0,V7,0,Ew,[],0,3,0,0,0,Pq,0,C,[Bb],0,3,0,0,["l",ASA(ALv)],S$,0,C,[Bi],0,3,0,0,["s",ASz(AN2)],Xs,0,C,[],0,3,0,0,0,K9,0,Bm,[],0,3,0,0,0,Ln,0,DK,[CH],0,3,0,0,0,Fn,0,C,[],0,0,0,0,0,Jp,0,C,[],4,3,0,0,0,Uw,0,C,[],0,3,0,0,0,Lg,0,C,[],1,3,0,0,0]);
$rt_metadata([MQ,0,C,[Bb],0,3,0,0,["l",ASA(ALP)],UN,0,C,[Bb],0,3,0,0,["l",ASA(APF)],Zw,0,CO,[],1,3,0,0,0,VV,0,C,[Bi],0,3,0,0,["s",ASz(AJE)],Qn,0,C,[Bi],0,3,0,0,["s",ASz(AH4)],S9,0,C,[],0,3,0,0,0,DO,0,Bm,[],0,3,0,0,0,AAT,0,Ew,[],0,3,0,0,0,Py,0,C,[Bb],0,3,0,0,["l",ASA(AOH)],AB0,0,C,[CH],0,3,0,0,["dR",ASA(Xq),"i7",ASA(AL9)],M3,0,C,[Bb],0,3,0,0,["l",ASA(AD0)],M1,0,C,[Bb],0,3,0,0,["l",ASA(AF2)],T3,0,C,[Bb],0,3,0,0,0,T1,0,C,[Bb],0,3,0,0,["l",ASA(AEW)],SF,0,C,[Bb],0,3,0,0,["l",ASA(AOS)],JL,0,Lg,[],1,3,0,0,0,Sv,0,JL,
[],0,3,0,0,0,O5,0,C,[Bb],0,3,0,0,["l",ASA(AE7)],Uk,0,C,[Bi],0,3,0,0,["s",ASz(AKW)],PG,0,C,[BU],0,3,0,0,["bf",ASA(ADm)],TF,0,C,[BU],0,3,0,0,["bf",ASA(APe)],Re,0,C,[Bb],0,3,0,0,["l",ASA(AEg)],Rd,0,C,[Bb],0,3,0,0,["l",ASA(AEX)],Z3,0,C,[Ci],0,3,0,0,0,Qz,0,C,[Bb],0,3,0,0,["l",ASA(AHp)],RX,0,C,[Bi],0,3,0,0,["s",ASz(AJs)],Jj,0,DK,[CH],0,3,0,0,0,KN,0,C,[],4,3,0,0,0,L3,0,C,[BU],0,3,0,0,["bf",ASA(AP5)],Og,0,C,[Hy],0,3,0,0,["nr",ASC(ADV)],SU,0,C,[],0,3,0,0,0,Ey,0,C,[Dj],0,3,0,0,["fo",ASz(AK$),"cW",ASz(AOJ),"iq",ASC(O3),
"ex",ASA(Yb),"jG",ASA(AGI),"jy",ASA(ANF),"oT",ASB(APM),"cm",ASC(AOb),"im",ASB(ANt),"cG",ASB(AOy),"bX",ASA(AKw),"cY",ASC(AGA)],Go,0,Ey,[],0,3,0,0,["jY",ASA(ZK)],PS,0,Go,[],0,3,0,0,["oT",ASB(AFM),"jY",ASA(AIQ),"ex",ASA(AIh),"jy",ASA(AJq),"jG",ASA(AGj),"tC",ASz(Ys),"bX",ASA(AOR),"im",ASB(ADQ),"cm",ASC(AD6)],Mn,0,C,[Bi],0,3,0,0,["s",ASz(AEc)],Zc,0,Ey,[],0,3,0,0,["iq",ASC(AFS),"ex",ASA(ANa),"cm",ASC(AHP),"im",ASB(AOe),"cG",ASB(AHr),"bX",ASA(AIH),"cY",ASC(ANn),"cW",ASz(AKT)],U1,0,Go,[],0,3,0,0,["tC",ASz(ALx),"cW",
ASz(AJu),"jy",ASA(AIj),"ex",ASA(AGc),"jG",ASA(AIW)],OF,0,C,[Bb],0,3,0,0,0,WB,0,C,[],0,3,0,0,0,Hx,0,C,[],0,3,0,0,0,Sq,0,Ey,[],0,3,0,0,0,S0,0,C,[Bb],0,3,0,0,["l",ASA(AJ3)],S1,0,C,[Bb],0,3,0,0,["l",ASA(AH9)],QY,0,DK,[CH],0,3,0,0,0,SR,0,C,[Bi],0,3,0,0,["s",ASz(ANw)],IS,0,C,[],0,3,0,0,0,E6,0,Bm,[],0,3,0,0,0,MT,0,C,[],0,3,0,0,0,AB3,0,C,[],0,3,0,0,0,RO,0,C,[],0,0,0,0,0]);
$rt_metadata([Sr,0,C,[Bb],0,3,0,0,0,Wm,0,C,[BU],0,3,0,0,["bf",ASA(ANg)],Wl,0,C,[BU],0,3,0,0,["bf",ASA(AF8)],VM,0,C,[BU],0,3,0,0,["bf",ASA(AHv)],VL,0,C,[BU],0,3,0,0,["bf",ASA(AIn)],Xu,0,C,[],1,3,0,0,0,VS,0,C,[],3,3,0,0,0,Wg,0,C,[Ch],0,3,0,0,["b3",ASA(AHm)],YY,0,C,[],0,3,0,0,0,ACl,0,C,[],0,3,0,0,0,Tq,0,C,[Bi],0,3,0,0,["s",ASz(AH0)],Ts,0,C,[Bi],0,3,0,0,["s",ASz(AMM)],XP,0,C,[],0,3,0,0,0,Io,0,E6,[],0,3,0,0,0,Ht,0,Bm,[],0,3,0,0,0,K7,0,Bm,[],0,3,0,0,0,YC,0,C,[Bb],0,3,0,0,0,Uo,0,C,[Bi],0,3,0,0,["s",ASz(AMB)],VY,0,
C,[Bb],0,3,0,0,["l",ASA(ANk)],Rp,0,C,[Bi],0,3,0,0,["s",ASz(AEm)],Xd,0,C,[],0,3,0,0,0,GJ,0,C,[],0,3,0,0,0,AA_,0,F3,[],0,0,0,0,0,Ok,0,EC,[],0,0,0,0,0,VD,0,Bv,[],0,3,0,0,0,Pw,0,C,[Lr],3,3,0,0,0,MO,0,C,[Pw],3,3,0,0,0,K_,0,C,[MO],1,3,0,0,0,Y3,0,K_,[],0,3,0,0,0,Qt,0,C,[Bi],0,3,0,0,["s",ASz(AE0)],Qs,0,C,[Bi],0,3,0,0,["s",ASz(ADt)],Qr,0,C,[Bi],0,3,0,0,["s",ASz(AJl)],Qq,0,C,[Bi],0,3,0,0,["s",ASz(AN0)],OH,0,C,[Bi],0,3,0,0,["s",ASz(ANj)],OJ,0,C,[Bi],0,3,0,0,["s",ASz(AIs)],OK,0,C,[Bi],0,3,0,0,["s",ASz(AFu)],U9,0,C,[Bi],
0,3,0,0,["s",ASz(AEj)],U0,0,C,[H2],0,3,0,0,["lE",ASB(AKg)],RJ,0,C,[Bi],0,3,0,0,["s",ASz(AIX)],RK,0,C,[Bi],0,3,0,0,["s",ASz(AKe)],Np,0,C,[Bi],0,3,0,0,["s",ASz(AHU)],No,0,C,[Bi],0,3,0,0,["s",ASz(AN9)],Ue,0,C,[HE],0,3,0,0,["f7",ASz(AFY)],UP,0,C,[Bi],0,3,0,0,["s",ASz(AL3)],UT,0,C,[Bi],0,3,0,0,["s",ASz(AI5)],US,0,C,[Bi],0,3,0,0,["s",ASz(AEd)],UQ,0,C,[Bi],0,3,0,0,["s",ASz(AF5)],RF,0,C,[H2],0,3,0,0,["lE",ASB(AIb)],O4,0,C,[BU],0,3,0,0,["bf",ASA(AGk)],Ih,0,C,[Bt],3,3,0,0,0]);
$rt_metadata([LZ,0,C,[Ih],0,3,0,0,["p7",ASz(AIt)],LI,0,C,[Ih],0,3,0,0,["p7",ASz(ADf)],Wk,0,C,[BU],0,3,0,0,["bf",ASA(AHK)],GD,0,C,[],0,0,0,0,0,TA,0,GD,[Fs],0,0,0,0,0,PY,0,GD,[Fs],0,0,0,0,0,SX,0,C,[],3,3,0,0,0,PW,0,C,[Da],4,3,0,0,0,Nd,0,C,[Bb],0,3,0,0,["l",ASA(APX)],Gf,0,Cq,[],12,0,0,TU,0,RS,0,C,[Bb],0,3,0,0,["l",ASA(AI8)],Qw,0,C,[Bb],0,3,0,0,["l",ASA(AEr)],NV,0,C,[Bb],0,3,0,0,["l",ASA(AJc)],TW,0,C,[Bb],0,3,0,0,["l",ASA(ANy)],Ws,0,C,[Bb],0,3,0,0,["l",ASA(AKa)],WE,0,C,[Bb],0,3,0,0,["l",ASA(APO)],Pe,0,C,[Bb],0,
3,0,0,["l",ASA(ALR)],Vl,0,C,[Bb],0,3,0,0,["l",ASA(AJz)],SK,0,C,[Bb],0,3,0,0,["l",ASA(AFR)],LE,0,C,[Bb],0,3,0,0,["l",ASA(AFf)],RW,0,C,[Bb],0,3,0,0,["l",ASA(AEa)],Ui,0,C,[KQ],0,3,0,0,["p8",ASA(Ja)],Bz,0,C,[],1,0,0,0,["b8",ASC(Hh),"cb",ASD(Hq),"g9",ASz(AEP),"K",ASA(AOh),"bJ",ASA(AOg),"eL",ASz(AO9),"dJ",ASz(Iu)],Tu,0,C,[],32,0,0,AQy,0,Ol,0,C,[Bb],0,3,0,0,["l",ASA(AFO)],WN,0,C,[Bb],0,3,0,0,["l",ASA(AGM)],W7,0,C,[Bi],0,3,0,0,["s",ASz(AFB)],CM,0,Bz,[],0,0,0,Lt,["c",ASC(AEi),"F",ASA(AEE)],Gs,0,C,[],0,0,0,0,0,Ia,0,BC,
[],0,3,0,0,0,V6,0,C,[BU],0,3,0,0,["bf",ASA(ALH)],AAr,0,C,[Bt],3,3,0,0,0,Tf,0,C,[BU],0,3,0,0,["bf",ASA(ALl)],QH,0,CM,[],0,0,0,0,["c",ASC(ADS),"F",ASA(AMW)],WG,0,CM,[],0,0,0,0,["c",ASC(AFE)],OO,0,CM,[],0,0,0,0,["c",ASC(AEN)],RN,0,CM,[],0,0,0,0,["c",ASC(ADY),"F",ASA(ALu)],Fi,0,CM,[],0,0,0,0,["c",ASC(AOz)],BS,0,Bz,[],1,0,0,0,["c",ASC(APy),"bP",ASz(ANP),"F",ASA(AIB)],ABX,0,BS,[],0,0,0,0,["bn",ASB(ANi),"b8",ASC(AGW),"cb",ASD(AFs),"F",ASA(ADW)],BN,0,Bz,[],0,0,0,0,["c",ASC(AHs),"K",ASA(ALn),"bJ",ASA(AJm),"F",ASA(AL8),
"dJ",ASz(AFn)],Im,0,BN,[],0,0,0,0,["c",ASC(AK9),"F",ASA(AMw)],DF,0,Im,[],0,0,0,0,["c",ASC(AF6),"K",ASA(AMe)],LX,0,DF,[],0,0,0,0,["c",ASC(ALg),"F",ASA(AOn)],U$,0,DF,[],0,0,0,0,["c",ASC(AEy),"F",ASA(ANT)],PZ,0,DF,[],0,0,0,0,["c",ASC(AFi),"F",ASA(AP0)],Sy,0,DF,[],0,0,0,0,["c",ASC(ADu),"F",ASA(AML)],Gi,0,BN,[],0,0,0,0,["c",ASC(ADN),"b8",ASC(AJJ),"cb",ASD(AM2),"bJ",ASA(AJi),"eL",ASz(ALr),"dJ",ASz(APa)],Gt,0,C,[],1,0,0,0,0,T,0,Gt,[],1,0,0,NN,["cS",ASz(AEB),"ec",ASz(AD8),"ij",ASz(ANI),"go",ASz(AO8)]]);
$rt_metadata([Yf,0,T,[],0,0,0,0,["k",ASA(CV),"cS",ASz(CQ),"ec",ASz(AGP),"ij",ASz(AN7),"ci",ASz(AKz),"go",ASz(AG1)],IB,0,Bm,[],0,3,0,0,0,DQ,0,Bz,[],1,0,0,0,["bJ",ASA(AM5),"F",ASA(AOu),"dJ",ASz(AJ7)],CW,0,DQ,[],0,0,0,0,["c",ASC(ADw)],ER,0,CW,[],0,0,0,0,["c",ASC(AEl)],CN,0,DQ,[],0,0,0,0,["c",ASC(ADM)],Ep,0,CW,[],0,0,0,0,["c",ASC(AJP),"K",ASA(AP4)],Vn,0,CW,[],0,0,0,0,["c",ASC(APq),"b8",ASC(AKv)],W,0,C,[],1,0,0,0,0,C9,0,BC,[],0,3,0,0,0,Mf,0,Gt,[Eb],0,0,0,0,["ci",ASz(AKG)],Ni,0,Bz,[],0,0,0,0,["c",ASC(AI0),"F",ASA(ALm)],VZ,
0,C,[Eb,Da],0,3,0,0,0,L4,0,BN,[],0,0,0,0,0,Pj,0,BN,[],0,0,0,0,["c",ASC(AEh),"K",ASA(AK6),"F",ASA(AEQ),"bJ",ASA(AEA)],Dr,0,BN,[],0,0,0,0,["c",ASC(AGG),"k",ASA(AHa),"bJ",ASA(AEb),"K",ASA(ANC),"F",ASA(AGT)],Iz,0,Dr,[],0,0,0,0,["k",ASA(AIC)],X8,0,BS,[],0,0,0,0,["bn",ASB(AI1)],D4,0,BS,[],0,0,0,0,["bn",ASB(LF),"bJ",ASA(ALp)],NO,0,BN,[],0,0,0,0,["K",ASA(AJO),"c",ASC(ADl),"bJ",ASA(AEK),"F",ASA(AN_)],Ea,0,BS,[],0,0,0,0,["bP",ASz(AIL),"bn",ASB(AHB),"b8",ASC(AGB),"cb",ASD(AIR),"bJ",ASA(AN4)],ACq,0,BS,[],0,0,0,0,["bn",
ASB(ADg)],Xi,0,BS,[],0,0,0,0,["bn",ASB(ADG)],E2,0,BN,[],0,0,0,0,["K",ASA(AO_),"c",ASC(AK8),"bJ",ASA(AI2),"F",ASA(AMh)],Wj,0,E2,[],0,0,0,0,0,SM,0,E2,[],0,0,0,0,0,W2,0,CN,[],0,0,0,0,["c",ASC(AFJ)],OG,0,CN,[],0,0,0,0,["c",ASC(AKl)],FE,0,CN,[],0,0,0,0,["c",ASC(ANv),"K",ASA(AOD)],Om,0,FE,[],0,0,0,0,["c",ASC(AIN),"K",ASA(AKI)],EZ,0,CN,[],0,0,0,0,["c",ASC(APU)],Mq,0,EZ,[],0,0,0,0,["c",ASC(AH6)],Qm,0,CN,[],0,0,0,0,["c",ASC(APf)],Pt,0,FE,[],0,0,0,0,["c",ASC(AES)],TX,0,EZ,[],0,0,0,0,["c",ASC(AD3)],Qo,0,DQ,[],0,0,0,0,
["c",ASC(APG),"b8",ASC(ANK)],Nq,0,DQ,[],0,0,0,0,["c",ASC(ALs),"b8",ASC(ADp)],EA,0,C,[],1,0,0,0,0,W4,0,CW,[],0,0,0,0,["c",ASC(AD5)],Vi,0,Ep,[],0,0,0,0,["c",ASC(AKk)],N$,0,ER,[],0,0,0,0,["c",ASC(AM8)],Pp,0,CW,[],0,0,0,0,["c",ASC(ALk)],S6,0,Ep,[],0,0,0,0,["c",ASC(AD_)],P0,0,ER,[],0,0,0,0,["c",ASC(ANm)],JK,0,Bz,[],4,0,0,0,["c",ASC(AJk),"F",ASA(AIm)],YM,0,Bz,[],0,0,0,0,["c",ASC(AEx),"F",ASA(AEH)],Nm,0,Bz,[],0,0,0,0,["c",ASC(AIG),"F",ASA(APQ)],V1,0,Bz,[],4,0,0,0,["c",ASC(AL1),"F",ASA(AFy)],VJ,0,Bz,[],0,0,0,0,["c",
ASC(AK2),"F",ASA(ADe)],MC,0,Bz,[],0,0,0,0,["c",ASC(AFm),"F",ASA(AHl)]]);
$rt_metadata([ACg,0,BN,[],0,0,0,0,["c",ASC(APk),"K",ASA(AEM),"g9",ASz(AKN),"F",ASA(AEL)],Yc,0,BN,[],4,0,0,0,["c",ASC(AKV),"K",ASA(AMS),"g9",ASz(ADb),"F",ASA(APv)],AB8,0,Bz,[],4,0,0,0,["c",ASC(AI7),"F",ASA(AHg)],AAn,0,Bz,[],0,0,0,0,["c",ASC(AK0),"F",ASA(AG9)],Xf,0,Bz,[],0,0,0,0,["c",ASC(AIa),"F",ASA(AFD)],GM,0,BN,[],0,0,0,0,["c",ASC(AD7),"K",ASA(AMa),"F",ASA(AMx)],ACb,0,GM,[],0,0,0,0,["c",ASC(AFI),"b8",ASC(AOj),"cb",ASD(ADT),"bJ",ASA(AKd)],Zu,0,GM,[],0,0,0,0,["c",ASC(AJD)],Nh,0,F7,[Hu],0,3,0,0,["kU",ASD(AG2),
"j9",ASC(AEC),"he",ASA(AE2),"ls",ASB(ANO)],Qv,0,BS,[],0,0,0,0,["bn",ASB(AF3),"b8",ASC(AEs),"cb",ASD(AHk),"bJ",ASA(AHN)],Xe,0,BS,[],0,0,0,0,["bn",ASB(AJL)],Mw,0,BS,[],0,0,0,0,["bn",ASB(AM$)],GL,0,C,[],4,0,0,AMJ,0,LN,0,BS,[],0,0,0,0,["bn",ASB(ANf)],Ki,0,BN,[],0,0,0,0,["K",ASA(ALe),"c",ASC(AFz),"b8",ASC(AHJ),"cb",ASD(AF$),"bJ",ASA(ADR),"F",ASA(ANU)],KC,0,BN,[],0,0,0,0,["K",ASA(AE1),"c",ASC(ADv),"b8",ASC(ALC),"cb",ASD(AM9),"bJ",ASA(AF4),"F",ASA(ALM)],DI,0,BS,[],0,0,0,0,["bn",ASB(AMz),"b8",ASC(AKA),"cb",ASD(AEY),
"bJ",ASA(AMl)],Ul,0,EA,[],0,0,0,0,["g0",ASA(AFc),"rv",ASB(AMq)],Um,0,EA,[],0,0,0,0,["g0",ASA(ANp),"rv",ASB(AO4)],ABb,0,C,[],0,0,0,0,0,Xw,0,C,[],0,0,0,0,0,Kf,0,W,[],0,0,0,0,["C",ASz(ZC)],Jg,0,W,[],0,0,0,0,["C",ASz(AAg)],AA7,0,W,[],0,0,0,0,["C",ASz(AMV)],ABB,0,W,[],0,0,0,0,["C",ASz(ANX)],ABF,0,W,[],0,0,0,0,["C",ASz(AGH)],Kb,0,W,[],0,0,0,0,["C",ASz(Yg)],KL,0,Kb,[],0,0,0,0,["C",ASz(Y_)],AC0,0,W,[],0,0,0,0,["C",ASz(AHH)],LD,0,KL,[],0,0,0,0,["C",ASz(Xa)],ZP,0,LD,[],0,0,0,0,["C",ASz(AJ8)],AAb,0,W,[],0,0,0,0,["C",ASz(AFX)],YF,
0,W,[],0,0,0,0,["C",ASz(AJ4)],Yo,0,W,[],0,0,0,0,["C",ASz(AO7)],ABI,0,W,[],0,0,0,0,["C",ASz(AKJ)],ADa,0,W,[],0,0,0,0,["C",ASz(ADn)],ABc,0,W,[],0,0,0,0,["C",ASz(AIf)],AA2,0,W,[],0,0,0,0,["C",ASz(AMD)],AB2,0,W,[],0,0,0,0,["C",ASz(AFT)],XO,0,W,[],0,0,0,0,["C",ASz(AGh)],Xt,0,W,[],0,0,0,0,["C",ASz(AOZ)],ABi,0,W,[],0,0,0,0,["C",ASz(ADh)],ABt,0,W,[],0,0,0,0,["C",ASz(AI_)],Y2,0,W,[],0,0,0,0,["C",ASz(AGq)],AAe,0,W,[],0,0,0,0,["C",ASz(AHn)],ACB,0,W,[],0,0,0,0,["C",ASz(AJb)],ABs,0,W,[],0,0,0,0,["C",ASz(AOc)],Zr,0,W,[],
0,0,0,0,["C",ASz(ALV)],Y0,0,W,[],0,0,0,0,["C",ASz(AKD)],AC7,0,W,[],0,0,0,0,["C",ASz(AMO)]]);
$rt_metadata([IK,0,W,[],0,0,0,0,["C",ASz(AAc)],AB4,0,IK,[],0,0,0,0,["C",ASz(AKq)],ZV,0,Kf,[],0,0,0,0,["C",ASz(AEq)],YU,0,Jg,[],0,0,0,0,["C",ASz(AHy)],Yu,0,W,[],0,0,0,0,["C",ASz(AJp)],YP,0,W,[],0,0,0,0,["C",ASz(AON)],ZJ,0,W,[],0,0,0,0,["C",ASz(AG6)],ZR,0,W,[],0,0,0,0,["C",ASz(ADi)],Yz,0,C,[],4,0,0,0,0,X6,0,C,[],4,3,0,0,0,MD,0,C,[],0,3,0,0,0,ABn,0,C,[],0,3,0,0,0,Zp,0,C,[],4,3,0,0,0,Ye,0,C,[Ic],0,3,0,0,0,Mt,0,C,[Bb],0,3,0,0,["l",ASA(AKy)],P6,0,C,[Bb],0,3,0,0,["l",ASA(AG3)],Ux,0,C,[Bb],0,3,0,0,0,V2,0,C,[Bb],0,3,
0,0,0,ABe,0,C,[],3,3,0,0,0,Vm,0,T,[],0,0,0,0,["k",ASA(AGO)],Vj,0,T,[],0,0,0,0,["k",ASA(ADJ)],Nw,0,T,[],0,0,0,0,["k",ASA(AJg),"ci",ASz(AHq)],ND,0,T,[],0,0,0,0,["k",ASA(AMC)],NB,0,T,[],0,0,0,0,["k",ASA(ANe)],NC,0,T,[],0,0,0,0,["k",ASA(AJK)],NG,0,T,[],0,0,0,0,["k",ASA(AGm)],NH,0,T,[],0,0,0,0,["k",ASA(ADc)],NE,0,T,[],0,0,0,0,["k",ASA(AHu)],NF,0,T,[],0,0,0,0,["k",ASA(AJN)],NI,0,T,[],0,0,0,0,["k",ASA(AOo)],NJ,0,T,[],0,0,0,0,["k",ASA(AFN)],Nv,0,T,[],0,0,0,0,["k",ASA(AP7)],Oh,0,T,[],0,0,0,0,["k",ASA(AHx)],Ns,0,T,[],
0,0,0,0,["k",ASA(AFL)],Nt,0,T,[],0,0,0,0,["k",ASA(AHe)],Nz,0,T,[],0,0,0,0,["k",ASA(AIJ)],Nr,0,T,[],0,0,0,0,["k",ASA(AN3)],Nx,0,T,[],0,0,0,0,["k",ASA(AEF)],Ny,0,T,[],0,0,0,0,["k",ASA(ALL)],K$,0,C,[],3,3,0,0,0,Ro,0,C,[K$],4,3,0,0,0,Cd,0,Cq,[],12,3,0,ABQ,0,Nj,0,C,[Bb],0,3,0,0,["l",ASA(AMN)],Mj,0,Gi,[],0,0,0,0,["b8",ASC(AG8),"cb",ASD(APS),"eL",ASz(AFx)],Pc,0,Bm,[],0,3,0,0,0,Wb,0,Bm,[],0,3,0,0,0,Uh,0,FB,[],0,3,0,0,0,O2,0,FB,[],0,3,0,0,0,WV,0,Bm,[],0,3,0,0,0,Ub,0,C,[],0,3,0,0,0]);
$rt_metadata([Rz,0,C,[Bb],0,3,0,0,0,Ry,0,C,[Bb],0,3,0,0,0,Uf,0,C,[K$],0,0,0,0,0,V$,0,C,[Bi],0,3,0,0,["s",ASz(ALw)],YR,0,C,[],0,3,0,0,0,OV,0,C,[],3,3,0,0,0,Wd,0,C,[OV],0,3,0,0,0,RT,0,T,[],0,0,0,0,["k",ASA(AOx)],L2,0,T,[],0,0,0,0,["k",ASA(AEo)],QR,0,T,[],0,0,0,0,["k",ASA(AD$)],QQ,0,T,[],0,0,0,0,["k",ASA(AG5)],VR,0,T,[],0,0,0,0,["k",ASA(AIu)],N3,0,T,[],0,0,0,0,["k",ASA(AOA)],Nc,0,T,[],0,0,0,0,["k",ASA(AK_)],PD,0,T,[],0,0,0,0,["k",ASA(AMI)],LV,0,T,[],0,0,0,0,["k",ASA(APt)],L0,0,T,[],0,0,0,0,["k",ASA(AF9)],MZ,0,
T,[],0,0,0,0,["k",ASA(AOL)],Ot,0,T,[],0,0,0,0,["k",ASA(AJZ)],OC,0,T,[],0,0,0,0,["k",ASA(AL$)],SH,0,T,[],0,0,0,0,["k",ASA(AOp)],Rq,0,T,[],0,0,0,0,["k",ASA(APd)],Mc,0,T,[],0,0,0,0,["k",ASA(AFV)],Lq,0,T,[],0,0,0,0,["k",ASA(ALb)],QJ,0,Lq,[],0,0,0,0,["k",ASA(AND)],UR,0,C,[BU],0,3,0,0,["bf",ASA(AL0)],UU,0,C,[BU],0,3,0,0,["bf",ASA(AKO)],St,0,C,[BU],0,3,0,0,["bf",ASA(AHD)],Sw,0,C,[BU],0,3,0,0,["bf",ASA(ADD)],Tz,0,C,[BU],0,3,0,0,["bf",ASA(AJr)],NZ,0,C,[Bi],0,3,0,0,0,Us,0,C,[Bb],0,3,0,0,["l",ASA(ALI)],Up,0,C,[Bb],0,3,
0,0,["l",ASA(AJv)],Uq,0,C,[Bb],0,3,0,0,["l",ASA(ALK)],OW,0,C,[Ih],0,3,0,0,["p7",ASz(AJx)],XW,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Jw=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ",
"#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",
"Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","FindUsagesDemoNew","ScissorDemo","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","many","test","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","",
"","w = ",", lineHeight = ","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","#B9BDC9","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...",
"Development >","pointer","text","ew-resize","ns-resize","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1",
"Window 2","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","...","Find Usages","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","#A9B7C6","#40332B","#edebfc","#344134","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ",
"trying to display with unknown screen size and dpr","onContextMenu","#616161","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile"," on Copy","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","applyContrast = ",
"renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","#BBBBBB","onEnter item ","#3C3F41","#4B6EAF","\\n","defaultText","keyword","field","#9876AA","#6A8759","comma","#CC7832","error","unused","#72737A","#6897BB","method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080","annotation","#BBB529","type","#287BDE","operator","#5F8C8A","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","The last byte in dst ",
" onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable",
"javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya",
"Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols",
"CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement",
"Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates",
"HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf",
"Viewport parsed in ","Verdana","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bw.prototype.toString=function(){return $rt_ustr(this);};
Bw.prototype.valueOf=Bw.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AEU(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cn=Long_add;var JM=Long_sub;var BM=Long_mul;var Dg=Long_div;var L5=Long_rem;var AQN=Long_or;var CS=Long_and;var AVC=Long_xor;var E_=Long_shl;var Gd=Long_shr;var DV=Long_shru;var AQ9=Long_compare;var E0=Long_eq;var AVD=Long_ne;var AGt=Long_lt;var OQ=Long_le;var AGb=Long_gt;var YJ=Long_ge;var AVE=Long_not;var ARj=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ARn);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=SP.prototype;c.f=c.bf;c=SN.prototype;c.f=c.bf;c=Mu.prototype;c.f=c.bf;c=Zb.prototype;c.get=c.Fi;Object.defineProperty(c,"length",{get:c.EE});c=M0.prototype;c.f=c.bf;c=XE.prototype;c.removeEventListener=c.BW;c.dispatchEvent=c.z2;c.get=c.xm;c.addEventListener=c.yD;Object.defineProperty(c,"length",{get:c.z8});c=UL.prototype;c.onAnimationFrame=c.BZ;c=UG.prototype;c.f=c.tz;c=UD.prototype;c.handleEvent=c.b3;c=UE.prototype;c.f=c.bf;c=V3.prototype;c.accept=c.tN;c=V4.prototype;c.accept=c.tN;c=Vt.prototype;c.handleEvent
=c.b3;c=Vu.prototype;c.handleEvent=c.b3;c=Vv.prototype;c.handleEvent=c.b3;c=Vw.prototype;c.handleEvent=c.b3;c=Vx.prototype;c.handleEvent=c.b3;c=Vy.prototype;c.handleEvent=c.b3;c=Vz.prototype;c.handleEvent=c.b3;c=VA.prototype;c.handleEvent=c.b3;c=VB.prototype;c.handleEvent=c.b3;c=VC.prototype;c.handleEvent=c.b3;c=WP.prototype;c.handleEvent=c.b3;c=WQ.prototype;c.handleEvent=c.b3;c=WR.prototype;c.handleEvent=c.b3;c=WS.prototype;c.handleEvent=c.b3;c=Tp.prototype;c.handleEvent=c.b3;c=Ww.prototype;c.f=c.bf;c=Wy.prototype;c.f
=c.bf;c=MB.prototype;c.f=c.bf;c=MA.prototype;c.f=c.bf;c=Mz.prototype;c.f=c.bf;c=My.prototype;c.f=c.bf;c=MU.prototype;c.accept=c.tN;c=Of.prototype;c.f=c.tz;c=Od.prototype;c.f=c.tz;c=PG.prototype;c.f=c.bf;c=TF.prototype;c.f=c.bf;c=L3.prototype;c.f=c.bf;c=Wm.prototype;c.f=c.bf;c=Wl.prototype;c.f=c.bf;c=VM.prototype;c.f=c.bf;c=VL.prototype;c.f=c.bf;c=Wg.prototype;c.handleEvent=c.b3;c=O4.prototype;c.f=c.bf;c=LZ.prototype;c.onTimer=c.p7;c=LI.prototype;c.onTimer=c.p7;c=Wk.prototype;c.f=c.bf;c=V6.prototype;c.f=c.bf;c
=Tf.prototype;c.f=c.bf;c=UR.prototype;c.f=c.bf;c=UU.prototype;c.f=c.bf;c=St.prototype;c.f=c.bf;c=Sw.prototype;c.f=c.bf;c=Tz.prototype;c.f=c.bf;c=OW.prototype;c.onTimer=c.p7;})();
}));
