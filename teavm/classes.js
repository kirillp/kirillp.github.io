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
index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eF=f;}
function $rt_cls(cls){return ABW(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FT(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bV.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AOe(t);}
function $rt_throwableCause(t){return AOm(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ATY());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ATZ(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AT0());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BE=$rt_compare;var AT1=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var Ix=$rt_isInstance;var AT2=$rt_nativeThread;var AT3=$rt_suspending;var AT4=$rt_resuming;var AT5=$rt_invalidPointer;var B=$rt_s;var Bl=$rt_eraseClinit;var Bd=$rt_imul;var Ef=$rt_wrapException;var AT6=$rt_checkBounds;var AT7=$rt_checkUpperBound;var AT8=$rt_checkLowerBound;var AT9=$rt_wrapFunction0;var AT$=$rt_wrapFunction1;var AT_=$rt_wrapFunction2;var AUa=$rt_wrapFunction3;var AUb=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var AAJ=$rt_createCharArrayFromData;var ASL=$rt_createByteArrayFromData;var AUc=$rt_createShortArrayFromData;var E4=$rt_createIntArrayFromData;var AUd=$rt_createBooleanArrayFromData;var AUe=$rt_createFloatArrayFromData;var AUf=$rt_createDoubleArrayFromData;var AGh=$rt_createLongArrayFromData;var ATX=$rt_createBooleanArray;var E9=$rt_createByteArray;var AUg=$rt_createShortArray;var BR=$rt_createCharArray;var BI=$rt_createIntArray;var ATB=$rt_createLongArray;var AEx=$rt_createFloatArray;var AUh
=$rt_createDoubleArray;var BE=$rt_compare;var AUi=$rt_castToClass;var AUj=$rt_castToInterface;var AUk=Long_toNumber;var Bb=Long_fromInt;var AUl=Long_fromNumber;var Cc=Long_create;var El=Long_ZERO;var AUm=Long_hi;var EC=Long_lo;
function C(){this.$id$=0;}
function AUn(){var a=new C();AC2(a);return a;}
function AC2(a){}
function Co(a){return ABW(a.constructor);}
function ALf(a,b){return a!==b?0:1;}
function AF4(a){var b,c,d,e,f,g,h,i,j;b=Yf(a);if(!b)c=B(0);else{d=(((32-NC(b)|0)+4|0)-1|0)/4|0;e=BR(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Hb((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FT(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function Yf(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKw(a){var b,c,d;if(!Ix(a,Ej)&&a.constructor.$meta.item===null){b=new VC;V(b);J(b);}b=AEJ(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Rw(){var a=this;C.call(a);a.uf=0;a.qD=null;}
function ASZ(b){var c,d,e,f,g,h,i,j,k,l;AC0();Yw();ABh();ACk();ZX();ACK();Yl();AC4();AEe();Yn();ACa();ABE();AB_();ACb();AAW();Z5();Zj();AAt();AAv();AAl();YG();Yo();ADY();c=(YM()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))OX(B(2),B(3));else{d=new Rw;BD(d);e=new TM;e.sd=d;f=new M_;c=new $rt_globals.Worker("teavm/worker.js");g=new NH;g.oK=c;g.oL=e;g.oM=f;e=Bk(g,"f");c.onmessage=e;h=H(LM,[JI(B(4),B(5),400),JI(B(6),B(7),400),JI(B(8),B(5),700),
JI(B(9),B(7),700)]);b=R(LM,1);b.data[0]=APb(B(10),Fb(B(11),B(12)),B(5),400);b=(LI(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.rL;f=c.qx;k=new M;O(k);BB(G(G(k,B(13)),f),41);k=N(k);f=c.qs;l=c.os;f=AIp($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BD(d);c=new TN;c.tb=d;g=new TL;e.then(Bk(c,"f"),Bk(g,"f"));}}
function AA0(b){var c,d,e,f,g,h,i,j,k;c=new SF;d=new RJ;c.pH=new $rt_globals.TextDecoder("utf-16");e=new VB;e.om=c;c.rp=e;e=new Vu;e.uw=c;c.lU=e;f=new Vv;f.re=c;c.tk=new $rt_globals.ResizeObserver(Bk(f,"f"));e=new Vs;e.nL=c;c.mA=e;c.h1=1;f=new OV;f.xc=null;f.jd=AUo;c.lw=f;c.p9=b;f=new Vt;f.tw=c;e=Bk(f,"f");b.onmessage=e;e=AAV();b.postMessage(e);c.mt=(D8()).getElementById("canvasDiv");b=YM();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dA
=b;c.mt.appendChild(b);f=c.dA;e=AME(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)OX(B(2),B(14));else{g=new Pg;e=c.dA;f=c.lU;g.dt=null;g.gQ=e;g.cj=AS9(f);h=$rt_globals.window;i=R(Ds,14);j=i.data;k=new Wl;k.mR=g;j[0]=CR(g,e,B(15),k);f=new Wm;f.rV=g;j[1]=CR(g,e,B(16),f);f=new Wn;f.n6=g;j[2]=CR(g,e,B(17),f);f=new Wo;f.ur=g;j[3]=CR(g,e,B(18),f);f=new Wp;f.q4=g;j[4]=CR(g,e,B(19),f);f=new Wq;f.nk=g;j[5]=CR(g,e,B(20),f);k=new Wr;k.uI=g;j[6]=CR(g,e,B(21),k);k=new Ws;k.rh=g;j[7]=CR(g,e,B(22),k);k=new Wt;k.nv
=g;j[8]=CR(g,e,B(23),k);k=new Wu;k.tG=g;j[9]=CR(g,e,B(24),k);k=new XM;k.s7=g;j[10]=CR(g,e,B(25),k);k=new XN;k.r_=g;j[11]=AB7(g,h,B(26),k,1);k=new XO;k.mc=g;j[12]=CR(g,h,B(27),k);k=new XP;k.tZ=g;j[13]=CR(g,h,B(28),k);g.wA=AQB(i);AAd(g,e);c.k7=g;c.fS=ASx(b,c.lU);AOQ(c.tk,c.dA);e=$rt_globals.window;g=c.mA;e.addEventListener("resize",Bk(g,"handleEvent"));c.fa=ABc(d,Z7(c));Tc(c);}ACA(c);}
var M5=F(0);
var Mw=F(0);
function Wg(){var a=this;C.call(a);a.j1=null;a.fF=null;}
function ABW(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Wg;c.fF=b;d=c;b.classObject=d;}return c;}
function HZ(a){if(a.j1===null)a.j1=$rt_str(a.fF.$meta.name);return a.j1;}
function HP(a){return a.fF.$meta.primitive?1:0;}
function H6(a){return ABW(a.fF.$meta.item);}
var Zn=F();
function Bk(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Ll(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Y7=F();
function AEJ(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ABZ(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ABZ(d[e],c))return 1;e=e+1|0;}return 0;}
function Gt(){var a=this;C.call(a);a.g$=null;a.ky=null;a.iU=0;a.jf=0;}
function AUp(){var a=new Gt();V(a);return a;}
function AUq(a){var b=new Gt();Bn(b,a);return b;}
function V(a){a.iU=1;a.jf=1;}
function Bn(a,b){a.iU=1;a.jf=1;a.g$=b;}
function AH6(a){return a;}
function AOe(a){return a.g$;}
function AOm(a){var b;b=a.ky;if(b===a)b=null;return b;}
var D2=F(Gt);
var Bp=F(D2);
function ATZ(a){var b=new Bp();AQh(b,a);return b;}
function AQh(a,b){Bn(a,b);}
var AAZ=F(Bp);
var Dh=F(0);
var CI=F(0);
var IK=F(0);
function Bv(){var a=this;C.call(a);a.bV=null;a.hv=0;}
var AUr=null;var AUs=null;var AUt=null;function EK(){EK=Bl(Bv);APO();}
function AIR(){var a=new Bv();Yp(a);return a;}
function FT(a){var b=new Bv();Hl(b,a);return b;}
function JG(a,b,c){var d=new Bv();Mk(d,a,b,c);return d;}
function Yp(a){EK();a.bV=AUr;}
function Hl(a,b){EK();Mk(a,b,0,b.data.length);}
function Mk(a,b,c,d){var e;EK();e=BR(d);a.bV=e;Dw(b,c,e,0,d);}
function Mf(b){var c;EK();c=AIR();c.bV=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bV.data;if(b<c.length)return c[b];}d=new G_;V(d);J(d);}
function I(a){return a.bV.data.length;}
function Fo(a){return a.bV.data.length?0:1;}
function PB(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=I(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dw(a.bV,b,d,e,c);return;}}g=new Bw;V(g);J(g);}
function Ud(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function KB(a,b){if(a===b)return 1;return Ud(a,b,0);}
function Ec(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GE(a,b,c){var d,e,f,g,h;d=Z(0,c);if(b<65536){e=b&65535;while(true){f=a.bV.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=H2(b);h=IC(b);while(true){f=a.bV.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FZ(a,b,c){var d,e,f,g,h;d=Y(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bV.data[d]==e)break;d=d+(-1)|0;}return d;}f=H2(b);g=IC(b);while(true){if(d<1)return (-1);h=a.bV.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function ZP(a,b,c){var d,e,f;d=Z(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Py(a,b,c){var d,e;d=Y(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function B9(a,b,c){var d,e;d=BE(b,c);if(d>0){e=new Bw;V(e);J(e);}if(!d){EK();return AUs;}if(!b&&c==I(a))return a;return JG(a.bV,b,c-b|0);}
function Dk(a,b){return B9(a,b,I(a));}
function PH(a,b,c){return B9(a,b,c);}
function Fb(a,b){var c,d,e,f,g,h;if(Fo(b))return a;if(Fo(a))return b;c=BR(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Mf(c);}
function U5(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BB(d,L(a,f));}f=f+1|0;}G(d,Dk(a,f));return N(d);}
function RN(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B9(a,b,c+1|0);}
function AF3(a){return a;}
function Gr(a){var b,c,d,e,f;b=a.bV.data;c=BR(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cv(b){EK();return b===null?B(29):b.cq();}
function C0(b){var c;EK();c=new M;O(c);return N(T(c,b));}
function Bo(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Lj(a){var b,c,d,e;a:{if(!a.hv){b=a.bV.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hv=(31*a.hv|0)+e|0;d=d+1|0;}}}return a.hv;}
function LV(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GA;Bn(b,B(30));J(b);}AUu=1;d=new QS;d.jL=R(CN,10);d.fZ=(-1);d.ev=(-1);d.br=(-1);e=new GG;e.es=1;e.bH=b;e.bb=BR(I(b)+2|0);Dw(Gr(b),0,e.bb,0,I(b));f=e.bb.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.q7=g;e.fH=0;E1(e);E1(e);d.f=e;d.df=0;d.kK=XD(d,(-1),0,null);if(!Dj(d.f)){b=new IF;h=d.f;Ja(b,B(31),h.bH,h.c5);J(b);}if(d.mU)d.kK.d6();b=Cn();h=new Sp;h.hZ=(-1);h.j7=(-1);h.vG=d;h.tg=d.kK;h.il=a;h.hZ=0;g=I(a);h.j7=g;e=new U8;i=h.hZ;j=d.fZ;k=d.ev+1|0;l=d.br+
1|0;e.hd=(-1);m=j+1|0;e.n0=m;e.dz=BI(m*2|0);f=BI(l);e.jb=f;Ht(f,(-1));if(k>0)e.kA=BI(k);Ht(e.dz,(-1));Xs(e,a,i,g);h.cp=e;e.e2=1;n=0;m=0;if(!I(a)){f=R(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.il);if(!Yz(h))l=h.j7;e=h.cp;if(e.d3>=0&&AAj(e)==1){e=h.cp;e.d3=IW(e);if(IW(h.cp)==ACj(h.cp)){e=h.cp;e.d3=e.d3+1|0;}g=h.cp.d3;g=g<=l&&ME(h,g)?1:0;}else g=ME(h,h.hZ);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BY(b,PH(a,m,ADK(h)));m=Z1(h);n=g;}a:{BY(b,PH(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bs(b,
g)))break a;Ek(b,g);}}if(g<0)g=0;f=HH(b,R(Bv,g));}return f;}
function AIe(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Y(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function APO(){AUr=BR(0);AUs=AIR();AUt=new SR;}
var EE=F(Gt);
var Hc=F(EE);
var AAB=F(Hc);
var DV=F();
function Ff(){DV.call(this);this.fk=0;}
var AUv=null;var AUw=null;function ADj(a){var b=new Ff();JU(b,a);return b;}
function JU(a,b){a.fk=b;}
function Jn(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Db;Bn(b,B(32));J(b);}d=I(b);if(0==d){b=new Db;Bn(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Db;V(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=OP(L(b,f));if(i<0){j=new Db;k=B9(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bn(j,N(b));J(j);}if(i>=c){j=new Db;l=B9(b,0,d);b=new M;O(b);G(G(T(G(b,B(35)),c),B(36)),l);Bn(j,N(b));J(j);}g=Bd(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Db;k=B9(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bn(j,N(b));J(j);}b=new Db;j=new M;O(j);T(G(j,B(38)),c);Bn(b,N(j));J(b);}
function FY(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AUw===null){AUw=R(Ff,256);c=0;while(true){d=AUw.data;if(c>=d.length)break a;d[c]=ADj(c-128|0);c=c+1|0;}}}return AUw.data[b+128|0];}return ADj(b);}
function L3(a){var b;b=a.fk;return (Np(ATK(20),b,10)).cq();}
function NC(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Id(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function J8(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AKq(a,b){b=b;return BE(a.fk,b.fk);}
function AC0(){AUv=E($rt_intcls());}
function Gf(){var a=this;C.call(a);a.A=null;a.L=0;}
function AUx(){var a=new Gf();O(a);return a;}
function ATK(a){var b=new Gf();FV(b,a);return b;}
function O(a){FV(a,16);}
function FV(a,b){a.A=BR(b);}
function Np(a,b,c){return AAQ(a,a.L,b,c);}
function AAQ(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cd(a,b,b+1|0);else{Cd(a,b,b+2|0);f=a.A.data;g=b+1|0;f[b]=45;b=g;}a.A.data[b]=Hb(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bd(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cd(a,b,b+i|0);if(e)e=b;else{f=a.A.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.A.data;b=e+1|0;f[e]=Hb($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ABN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BE(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUy;ABF(c,f);d=f.ka;g=f.jW;h=f.nf;i=1;j=1;if(h)j=2;k=9;l=APg(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Z(k,i+1|0);g=0;}else{d=d/AUz.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cd(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.A.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.A.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.A.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function ZI(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BE(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AUA;AAT(c,f);g=f.kM;h=f.jE;i=f.mP;j=1;k=1;if(i)k=2;l=18;m=AM6(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Z(l,j+1|0);h=0;}else{g=Dp(g,AUB.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cd(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.A.data;k=b+1|0;e[b]=45;}n=Cc(1569325056, 23283064);o=0;while(o<l){if(Px(n,El))d=0;else{d=EC(Dp(g,n));g=
MN(g,n);}e=a.A.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Dp(n,Bb(10));o=o+1|0;}if(h){e=a.A.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function APg(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AM6(b){var c,d,e,f,g;c=Bb(1);d=0;e=16;f=AUC.data;g=f.length-1|0;while(g>=0){if(Fa(MN(b,BN(c,f[g])),El)){d=d|e;c=BN(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BB(a,b){return a.lD(a.L,b);}
function Xh(a,b,c){Cd(a,b,b+1|0);a.A.data[b]=c;return a;}
function Jr(a,b){var c,d;c=a.A.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.A=YF(a.A,d);}
function N(a){return JG(a.A,0,a.L);}
function W1(a,b,c,d){return a.k6(a.L,b,c,d);}
function MZ(a,b,c,d,e){var f,g,h,i;Cd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.A.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Ie(a,b){return a.kj(b,0,b.data.length);}
function Cd(a,b,c){var d,e,f,g;d=a.L;e=d-b|0;a.ho((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.A.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.L=a.L+(c-b|0)|0;}
var HT=F(0);
var M=F(Gf);
function LP(){var a=new M();AQI(a);return a;}
function AQI(a){O(a);}
function G(a,b){var c;c=a.L;if(b===null)b=B(29);Mg(a,c,b);return a;}
function BZ(a,b){Mg(a,a.L,b);return a;}
function T(a,b){Np(a,b,10);return a;}
function HR(a,b){var c,d,e,f,g,h,i,j;c=a.L;d=1;if(AHB(b,El)){d=0;b=ASV(b);}a:{if(Le(b,Bb(10))<0){if(d)Cd(a,c,c+1|0);else{Cd(a,c,c+2|0);e=a.A.data;f=c+1|0;e[c]=45;c=f;}a.A.data[c]=Hb(EC(b),10);}else{g=1;h=Bb(1);i=FE(Bb(-1),Bb(10));b:{while(true){j=BN(h,Bb(10));if(Le(j,b)>0){j=h;break b;}g=g+1|0;if(Le(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cd(a,c,c+g|0);if(d)f=c;else{e=a.A.data;f=c+1|0;e[c]=45;}while(true){if(Fa(j,El))break a;e=a.A.data;c=f+1|0;e[f]=Hb(EC((FE(b,j))),10);b=Nm(b,j);j=FE(j,Bb(10));f=c;}}}return a;}
function Fj(a,b){ABN(a,a.L,b);return a;}
function Yj(a,b){BB(a,b);return a;}
function F3(a,b){Mg(a,a.L,!b?B(39):B(40));return a;}
function ADz(a,b,c){var d,e,f,g,h,i;d=BE(b,c);if(d<=0){e=a.L;if(b<=e){if(d){f=e-c|0;a.L=e-(c-b|0)|0;g=0;while(g<f){h=a.A.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new G_;V(i);J(i);}
function V3(a,b){var c,d,e,f;if(b>=0){c=a.L;if(b<c){c=c-1|0;a.L=c;while(b<c){d=a.A.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new G_;V(f);J(f);}
function AKl(a,b,c,d,e){MZ(a,b,c,d,e);return a;}
function AHm(a,b,c,d){W1(a,b,c,d);return a;}
function YU(a){return a.L;}
function DT(a){return N(a);}
function AKt(a,b){Jr(a,b);}
function AK0(a,b,c){Xh(a,b,c);return a;}
function Mg(a,b,c){var d,e,f;if(b>=0&&b<=a.L){a:{if(c===null)c=B(29);else if(Fo(c))break a;Jr(a,a.L+I(c)|0);d=a.L-1|0;while(d>=b){a.A.data[d+I(c)|0]=a.A.data[d];d=d+(-1)|0;}a.L=a.L+I(c)|0;d=0;while(d<I(c)){e=a.A.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new G_;V(c);J(c);}
var Eo=F(Hc);
var AB5=F(Eo);
function AUD(a){var b=new AB5();AGb(b,a);return b;}
function AGb(a,b){Bn(a,b);}
var AAp=F(Eo);
function AUE(a){var b=new AAp();AGy(b,a);return b;}
function AGy(a,b){Bn(a,b);}
var TE=F(0);
var Ds=F(0);
function AQB(b){var c;c=new P5;c.vX=b;return c;}
function CG(b,c){if(b!==null)b.dR();return c;}
var OL=F(0);
function Ir(){var a=this;C.call(a);a.li=0;a.kw=0;}
var AUF=0;function FM(a){AUF=AUF-1|0;}
function F0(a,b,c){I7(a,ZB(b,c,400,0));}
function QG(a,b){return KL(a,b,0.875);}
function KL(a,b,c){return En(a,b)+c|0;}
function Ri(){var a=this;Ir.call(a);a.ji=null;a.bn=null;a.mi=null;}
function Eu(a){var b,c,d;b=a.bn;c=a.li;d=a.kw;b.clearRect(0.0,0.0,c,d);}
function R4(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bn;d="center";c.textAlign=d;break a;case 2:c=a.bn;d="right";c.textAlign=d;break a;default:break a;}d=a.bn;c="left";d.textAlign=c;}}
function Cw(a,b){I7(a,JL(b.mD));}
function I7(a,b){var c;if(!(a.mi==b?1:0)){c=a.bn;a.mi=b;c.font=b;}}
function ZB(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.bn;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function En(a,b){var c;c=$rt_ustr(b);return a.bn.measureText(c).width;}
function Lq(a,b,c,d){var e,f;e=a.bn;f=$rt_ustr(FT(AAJ([35,GD(b/16|0),GD(b%16|0),GD(c/16|0),GD(c%16|0),GD(d/16|0),GD(d%16|0)])));e.fillStyle=f;}
var Yx=F();
var ADf=F();
function C2(b,c){if(b===c)return 1;return b!==null?b.cu(c):c!==null?0:1;}
function BD(b){if(b!==null)return b;b=new GA;Bn(b,B(31));J(b);}
var Bc=F(0);
function TM(){C.call(this);this.sd=null;}
var Bt=F(0);
var ABb=F();
var YC=F(0);
function JI(b,c,d){return APb(B(41),Fb(B(11),b),c,d);}
var ACR=F(0);
var ACM=F(0);
function LI(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dl(b,f+g|0);Dw(c,0,d,f,g);return d;}
function KW(b,c,d){Dw(b,c,d,0,d.data.length);return d;}
function Q1(b,c,d){var e;if(c>0)Dw(b,0,d,0,c);e=d.data.length;if(c<e)Dw(b,c+1|0,d,c,e-c|0);return d;}
function AAu(b,c,d,e){var f;if(c>0)Dw(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dw(b,d,e,c,f-d|0);}return e;}
function FQ(b){var c;c=new VU;c.iy=b;return c;}
function LM(){var a=this;C.call(a);a.rL=null;a.qx=null;a.qs=null;a.os=0;}
function APb(a,b,c,d){var e=new LM();AN6(e,a,b,c,d);return e;}
function AN6(a,b,c,d,e){a.rL=b;a.qx=c;a.qs=d;a.os=e;}
var Zk=F();
function AIp(b,c){return {style:b,weight:c};}
var BW=F(0);
function TN(){C.call(this);this.tb=null;}
function AEi(a,b){var c,d,e;c=a.tb;d=0;while(d<b.length){e=b[d];(D8()).fonts.add(e);d=d+1|0;}c.uf=1;b=c.qD;if(b!==null)AA0(b);}
var TL=F();
function APW(a,b){$rt_globals.console.info("font load error "+b);}
var Lp=F();
var AUG=null;var AUH=null;function By(){if(AUG===null)AUG=ALP(AUI,0);return AUG;}
function LH(){if(AUH===null)AUH=ALP(AUJ,0);return AUH;}
function ASP(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Lr(b)&&(e+f|0)<=Lr(d)){a:{b:{if(b!==d){g=H6(Co(b));h=H6(Co(d));if(g!==null&&h!==null){if(g===h)break b;if(!HP(g)&&!HP(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fF;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ABZ(n.constructor,o)?1:0)){KD(b,c,d,e,j);b=new ID;V(b);J(b);}j=j+1|0;k=m;}KD(b,c,d,e,f);return;}if(!HP(g))break a;if(HP(h))break b;else break a;}b=new ID;V(b);J(b);}}KD(b,c,
d,e,f);return;}b=new ID;V(b);J(b);}b=new Bw;V(b);J(b);}d=new GA;Bn(d,B(42));J(d);}
function Dw(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Lr(b)&&(e+f|0)<=Lr(d)){KD(b,c,d,e,f);return;}b=new Bw;V(b);J(b);}
function KD(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FC(){return Long_fromNumber(new Date().getTime());}
function ACl(){return AUl($rt_globals.performance.now()*1000000.0);}
var ACJ=F();
var Z3=F();
function OX(b,c){var d,e,f;d=(D8()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(D8()).getElementById($rt_ustr(b)).appendChild(d);}
function YM(){return (D8()).createElement("canvas");}
function AME(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AEb=F();
var M_=F();
function AMm(a,b){var c;c=new Bp;Bn(c,$rt_str(b.message));J(c);}
var AC6=F();
function FA(b){return $rt_str(b);}
var YP=F();
function YF(b,c){var d,e,f,g;b=b.data;d=BR(c);e=d.data;f=Y(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ADu(b,c){var d,e,f,g;b=b.data;d=E9(c);e=d.data;f=Y(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ADT(b,c){var d,e,f,g;b=b.data;d=BI(c);e=d.data;f=Y(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dl(b,c){var d,e,f,g;d=b.data;e=UA(H6(Co(b)),c);f=Y(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Zx(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BZ(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BZ(c,B(44));G(c,e[d]);d=d+1|0;}BZ(c,B(45));return N(c);}
function ACh(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BZ(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BZ(c,B(44));T(c,e[d]);d=d+1|0;}BZ(c,B(45));return N(c);}
function AOD(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BZ(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BZ(c,B(44));Fj(c,e[d]);d=d+1|0;}BZ(c,B(45));return N(c);}
function ARo(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);BZ(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BZ(c,B(44));f=e[d];ZI(c,c.L,f);d=d+1|0;}BZ(c,B(45));return N(c);}
function Ht(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BC;V(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Za(b,c,d,e){var f,g;if(c>d){e=new BC;V(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ZY(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AUo;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Y(j,h+f|0);l=h+(2*f|0)|0;m=Y(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.lN(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ABO(b,c){return TT(b,0,b.data.length,c);}
function TT(b,c,d,e){var f,g,h,i,j;f=BE(c,d);if(f>0){g=new BC;V(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var JH=F(0);
var AAg=F();
function AQ$(a,b){return a.vD(b);}
function AGl(a){return a.wZ();}
var AAO=F();
var FL=F(0);
var SR=F();
var Bw=F(Bp);
var ABM=F();
function Lr(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AUK());}return b.data.length;}
function UA(b,c){if(b===null){b=new GA;V(b);J(b);}if(b===E($rt_voidcls())){b=new BC;V(b);J(b);}if(c>=0)return AQo(b.fF,c);b=new X1;V(b);J(b);}
function AQo(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GA=F(Bp);
var ID=F(Bp);
var C3=F();
var AUL=null;var AUM=null;var AUN=null;var AUO=null;var AUP=null;var AUQ=null;var AUR=null;var AUS=null;var AUT=null;var AUU=null;function WS(b){var c,d;c=new Bv;d=BR(1);d.data[0]=b;Hl(c,d);return c;}
function L0(b){return b>=65536&&b<=1114111?1:0;}
function CD(b){return (b&64512)!=55296?0:1;}
function CZ(b){return (b&64512)!=56320?0:1;}
function L5(b){return !CD(b)&&!CZ(b)?0:1;}
function Hk(b,c){return CD(b)&&CZ(c)?1:0;}
function Er(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function H2(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function IC(b){return (56320|b&1023)&65535;}
function EU(b){return Gz(b)&65535;}
function Gz(b){if(AUO===null){if(AUR===null)AUR=ACg();AUO=AAy((AUR.value!==null?$rt_str(AUR.value):null));}return Sx(AUO,b);}
function Ew(b){return Gw(b)&65535;}
function Gw(b){if(AUN===null){if(AUS===null)AUS=AC1();AUN=AAy((AUS.value!==null?$rt_str(AUS.value):null));}return Sx(AUN,b);}
function Sx(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BE(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function UI(b,c){if(c>=2&&c<=36){b=OP(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function OP(b){var c,d,e,f,g,h,i,j,k,l;if(AUM===null){if(AUT===null)AUT=AAD();c=(AUT.value!==null?$rt_str(AUT.value):null);d=AOn(Gr(c));e=JE(d);f=BI(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+M7(d)|0;j=j+M7(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AUM=f;}g=AUM.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BE(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Hb(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Go(b){var c;if(b<65536){c=BR(1);c.data[0]=b&65535;return c;}return AAJ([H2(b),IC(b)]);}
function Cs(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&L5(b&65535))return 19;if(AUP===null){if(AUU===null)AUU=AD2();d=(AUU.value!==null?$rt_str(AUU.value):null);e=R(Nj,16384);f=e.data;g=E9(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=KC(L(d,l));if(m==64){l=l+1|0;m=KC(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bd(c,KC(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=KC(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AIb(k,k+i|0,ADu(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AIb(k,k+i|0,ADu(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AUP=Dl(e,j);}e=AUP.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qS)o=p+1|0;else{c=d.oI;if(b>=c)return d.oV.data[b-c|0];c=p-1|0;}}return 0;}
function Jl(b){a:{switch(Cs(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gj(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cs(b)!=16?0:1;}
function Pi(b){switch(Cs(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function QT(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Pi(b);}return 1;}
function Yw(){AUL=E($rt_charcls());AUQ=R(C3,128);}
function ACg(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AC1(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AAD(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AD2(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Mq=F(0);
var Sw=F(0);
var Eg=F(0);
var ADe=F(0);
function D8(){return $rt_globals.window.document;}
function NH(){var a=this;C.call(a);a.oK=null;a.oL=null;a.oM=null;}
function ANq(a,b){var c,d,e;c=a.oK;d=a.oL;e=a.oM;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=JL(KF(c));c=d.sd;c.qD=b;if(c.uf)AA0(b);}}
var AAM=F();
function Fu(){return AQ_();}
function AQ_(){return Math.random();}
function Y(b,c){if(b<c)c=b;return c;}
function Z(b,c){if(b>c)c=b;return c;}
function IX(b){if(b<=0)b= -b|0;return b;}
var O9=F(0);
var Q$=F(0);
var QY=F(0);
var Ty=F(0);
var W2=F(0);
var UJ=F(0);
var Ou=F(0);
var YB=F();
function AKU(a,b,c){a.Dy($rt_str(b),Ll(c,"handleEvent"));}
function ALh(a,b,c){a.AJ($rt_str(b),Ll(c,"handleEvent"));}
function AFo(a,b){return a.vD(b);}
function AMr(a,b,c,d){a.y3($rt_str(b),Ll(c,"handleEvent"),d?1:0);}
function AQf(a,b){return !!a.DD(b);}
function AGo(a){return a.wZ();}
function AEI(a,b,c,d){a.Cd($rt_str(b),Ll(c,"handleEvent"),d?1:0);}
var BC=F(Bp);
var X1=F(Bp);
var G_=F(Bw);
var ZM=F();
function AAV(){return "ping";}
function D4(){C.call(this);this.iP=null;}
var AUV=null;var AUW=null;var AUX=null;var AUY=null;var AUZ=null;var AU0=null;function Ks(){Ks=Bl(D4);AGw();}
function MT(a){var b=new D4();ABw(b,a);return b;}
function ABw(a,b){Ks();a.iP=b;}
function KF(b){var c,d,e,f,g;Ks();if(b===null)return null;a:{c=b;if(AUW!==null){d=$rt_str(typeof c);if(!Bo(d,B(46))&&!Bo(d,B(47))){if(Bo(d,B(48))){b=AUX.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=MT(c);g=f;b=AUX;e=new $rt_globals.WeakRef(g);b.set(c,e);AUZ.register(g,c);return f;}if(!Bo(d,B(49)))break a;else{b=AUY.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=MT(c);g=f;b=AUY;e=new $rt_globals.WeakRef(g);b.set(c,
e);AU0.register(g,c);return f;}}b=AUW.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=MT(c);b=AUW;e=new $rt_globals.WeakRef(f);b.set(c,e);return f;}}return MT(c);}
function JL(b){Ks();if(b!==null)return b.iP;return null;}
function AP3(a,b){if(b===a)return 1;if(b===null)return 0;if(!(b instanceof D4))return 0;return a.iP!==b.iP?0:1;}
function AGw(){AUV=new $rt_globals.WeakMap();AUW=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();AUX=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AUY=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AUZ=AUX===null?null:new $rt_globals.FinalizationRegistry(Bk(new WU,"accept"));AU0=AUY===null?null:new $rt_globals.FinalizationRegistry(Bk(new WV,"accept"));}
var Ot=F(0);
function SF(){var a=this;C.call(a);a.pH=null;a.rp=null;a.lU=null;a.mt=null;a.dA=null;a.tk=null;a.mA=null;a.k7=null;a.fS=null;a.h1=0;a.wk=0;a.qM=null;a.fa=null;a.p9=null;a.lw=null;a.sg=0;}
function ACA(a){a.dA.focus();}
function Ns(a,b){var c;c=D8();b=$rt_ustr(b);c.title=b;}
function Z7(a){var b,c,d;b=new Mr;c=a.fS;d=a.k7.cj;b.bj=c;b.l=d;b.b0=a;return b;}
function Tc(a){a.wk=$rt_globals.requestAnimationFrame(Bk(a.rp,"onAnimationFrame"));}
function F2(a){a.h1=1;}
function Tb(a,b,c){var d,e;a.k7.dt=BV(b,c);d=a.dA;e=b;d.width=e;d=a.dA;e=c;d.height=e;d=a.fS;Bf(d.dE,b,c);e=d.bB;d=d.dE;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fa.ci(a.fS.dE,KE(a));a.fa.bI();}
function Gq(a,b){var c,d,e;c=a.qM;d=a.dA;if(C2(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.qM=b;}
function Jj(a){return $rt_globals.performance.now()/1000.0;}
function KE(a){return $rt_globals.window.devicePixelRatio;}
function VV(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADF(b,1);else{c=new WF;d=$rt_globals.window.showDirectoryPicker();e=new WE;e.oN=b;e.oO=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function LR(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADF(b,0);else{c=new Xc;d=$rt_globals.window.showOpenFilePicker();e=new Xb;e.pF=b;e.pE=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function C1(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.sg+1|0;a.sg=e;f=a.lw;g=FY(e);f.hs=L2(f,f.hs,g);g=UQ(f,g);Ms(g,b);Ms(g,b);f.jh=f.jh+1|0;b=a.p9;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(Ix(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(Ix(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(Ix(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof K6)){b=new BC;c=HZ(Co(c));f
=new M;O(f);G(G(f,B(50)),c);Bn(b,N(f));J(b);}c=c;f=c.gq;if(f===null)f=c.eV;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function QH(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new Qu;e.mG=b;b=AD$(c);d.then(Bk(e,"f"),Bk(b,"f"));}
function Uf(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.pH;b=(Gr(b)).data;f=f.decode(b);b=e.writeText(f);e=new Uy;e.rX=c;c=AD$(d);b.then(Bk(e,"f"),Bk(c,"f"));}
function Xp(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AD$(b){var c;c=new MK;c.r9=b;return c;}
var Ca=F(0);
var RJ=F();
function ABc(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Bo(B(51),c))d=(AO6(I(c)<=0?B(31):Dk(c,1))).b9(b);else{d=new M$;EO(d,b);b=$rt_globals.fetch("test.wasm");e=new Nh;b=b.then(Bk(e,"f"));e=new Ng;b=b.then(Bk(e,"f"));e=new Nf;f=new Ne;b.then(Bk(e,"f"),Bk(f,"f"));}return d;}
var Bi=F(0);
var AA8=F();
var AAi=F();
var AAI=F();
var Q2=F(0);
function VB(){C.call(this);this.om=null;}
function AJv(a,b){var c,d;c=b;b=a.om;if(!(!b.fa.cI(c/1000.0)&&!b.h1)){d=b.fS.dE;if(Bd(d.b,d.a)){b.h1=0;b.fa.bI();}}Tc(b);}
function Vu(){C.call(this);this.uw=null;}
function Df(a){F2(a.uw);}
var PX=F(0);
function Vv(){C.call(this);this.re=null;}
function AHF(a,b,c){var d,e,f,g;c=a.re;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dA){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=KE(c);Tb(c,He(f.width*g),He(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Tb(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ADl=F();
function AOQ(b,c){ANP(b,c,AER());}
function AER(){return {box:'device-pixel-content-box'};}
function ANP(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cl=F(0);
function Vs(){C.call(this);this.nL=null;}
function ANy(a,b){b=a.nL;b.fa.ci(b.fS.dE,KE(b));b.fa.bI();}
var K1=F(0);
function EA(){C.call(this);this.j4=null;}
var Ej=F(0);
var Xo=F(0);
var M4=F(0);
function OV(){var a=this;EA.call(a);a.hs=null;a.jd=null;a.xc=null;a.jh=0;}
function UQ(a,b){var c,d;c=a.hs;while(true){if(c===null)return null;d=Jm(a.jd,b,c.iE);if(!d)break;c=d>=0?c.bW:c.bJ;}return c;}
function L2(a,b,c){var d,e;if(b===null){b=new Ji;d=null;b.iE=c;b.h4=d;b.fe=1;b.fm=1;return b;}e=Jm(a.jd,c,b.iE);if(!e)return b;if(e>=0)b.bW=L2(a,b.bW,c);else b.bJ=L2(a,b.bJ,c);Eh(b);return JD(b);}
function J5(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Jm(a.jd,c,b.iE);if(d<0)b.bJ=J5(a,b.bJ,c);else if(d>0)b.bW=J5(a,b.bW,c);else{e=b.bW;if(e===null)return b.bJ;f=b.bJ;g=R(Ji,e.fe).data;h=0;while(true){b=e.bJ;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bW;while(h>0){h=h+(-1)|0;j=g[h];j.bJ=b;Eh(j);b=JD(j);}e.bW=b;e.bJ=f;Eh(e);b=e;}Eh(b);return JD(b);}
function Vt(){C.call(this);this.tw=null;}
function AON(a,b){var c,d,e,f,g,h,i,j,k;c=a.tw.lw;b=b.data;if(!(b===AAV()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BC;V(b);J(b);}if(b.length<1){b=new BC;V(b);J(b);}d=FY(b[0]);e=UQ(c,d);if(e===null)c=null;else{c.hs=J5(c,c.hs,d);c.jh=c.jh+1|0;c=e.h4;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FA(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new SN;AC2(e);e.g7=k;}else e=(k instanceof $rt_globals.File?1:0)?ABR(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:ABR(k,null);g[h]=e;h=j;}c.n(f);}}
var ADH=F();
var AD8=F();
var JM=F(0);
var WU=F();
function ANT(a,b){Ks();AUX.delete(b);}
var AAA=F();
var WV=F();
function ALA(a,b){Ks();AUY.delete(b);}
function Pg(){var a=this;C.call(a);a.cj=null;a.gQ=null;a.wA=null;a.dt=null;}
function M1(){return (D8()).activeElement;}
function CR(a,b,c,d){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"));return WO(a,b,c,d);}
function AB7(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"),!!e);return WO(a,b,c,d);}
function WO(a,b,c,d){var e;e=new PT;e.vp=b;e.vu=c;e.vs=d;return e;}
function TO(a,b){var c;c=new UT;c.uq=b;return c;}
function EB(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gQ.getBoundingClientRect();e=BV(He((b.clientX-d.left)*c),He((b.clientY-d.top)*c));f=new Bm;g=a.dt;f.b=g.b;f.a=g.a;d=new Mn;Ug(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.u9=f;return d;}
function XR(a,b,c){var d,e,f,g;d=new OO;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Ug(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jB=0;d.dC=e;d.bf=f;d.hb=c;d.rr=g;return d;}
function DM(a,b){b.stopPropagation();b.preventDefault();}
function AAd(a,b){var c;c=new Xm;c.o6=b;b.onpointerdown=Bk(c,"f");c=new Xn;c.nN=b;b.onpointerup=Bk(c,"f");}
function Lh(){var a=this;C.call(a);a.qK=null;a.cA=null;a.bB=null;a.sz=null;a.v2=0;a.wW=0;a.jk=null;a.xt=null;a.w_=null;a.wi=null;a.fW=null;a.ha=null;a.xh=null;a.ov=null;a.dE=null;a.t$=null;a.k0=0;a.jx=0;a.lF=0;a.lo=0;a.hR=0;a.lC=null;}
function Hj(a,b,c){return GP(a,b,c,400,0);}
function CK(a,b,c){return Mz(a.qK,b,c);}
function Gy(a,b){var c,d,e,f,g;c=a.bB;d=b.bk;e=b.bx;f=b.bg;g=b.by;c.clearColor(d,e,f,g);a.bB.clear(16384);}
function CJ(a,b){var c;if(b==a.jx)return b;if(!b)a.bB.disable(3042);else{a.bB.enable(3042);a.bB.blendFuncSeparate(770,771,1,1);}c=a.jx;a.jx=b;return c;}
function Lz(a,b,c,d){var e,f,g;a.lo=1;a.hR=1;e=a.lC;f=d.b;g=d.a;e.qV=b;e.qW=c;e.qU=f;e.qT=g;Uh(a);}
function Is(a){a.lo=0;a.hR=0;Uh(a);}
function Uh(a){var b,c,d,e,f,g;b=a.lF;c=a.lo;if(b!=c){a.lF=c;if(!c)a.bB.disable(3089);else a.bB.enable(3089);}if(a.lF&&a.hR){a.hR=0;d=a.bB;e=a.lC;b=e.qV;c=a.dE.a-e.qW|0;f=e.qT;c=c-f|0;g=e.qU;d.scissor(b,c,g,f);}}
function KX(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.ov;c=a.k0;d=b.f$.r3;e=b.d8;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.d8;h=b.mx;e.bindBuffer(34962,h);i=b.f$.lZ.data;g=i.length;j=0;while(j<g){k=i[j];l=b.d8;m=k.gX;n=k.eR;o=b.f$.kf*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eR|0;j=j+1|0;}a:{e=b.ut;if(e!==null){c=0;b.d8.bindBuffer(34962,e);i=b.f$.qI.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.d8;j=e.gX;p=e.eR;m=e.oF;n=b.f$.o0;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eR|0;g=g+1|0;}}}q=b.tO;if(q===null){c=b.rw;if(c>0)b.d8.drawArrays(4,0,c);}else{b.d8.bindBuffer(34963,q);k=b.d8;g=b.t3;k.drawElements(4,g,5123,0);}a.k0=d;}
function Bz(a,b,c,d,e){K$(a,a.jk);Ma(a.jk,a.bB,b,c,d,a.dE);d=a.jk;H$(a.bB,d.tv,e);KX(a);}
function EF(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;K$(a,a.fW);Ma(a.fW,a.bB,b,c,d,a.dE);Uc(a.fW,a.bB,f);d=a.fW;j=a.bB;f=f.fi;b=f.b;c=f.a;k=e.bk;l=b;m=k/l;k=e.bx;n=c;o=k/n;k=e.bg/l;l=e.by/n;d=d.s8;j.uniform4f(d,m,o,k,l);d=a.fW;e=a.bB;H$(e,d.pd,g);H$(e,d.m1,h);d=d.n_;e.uniform2f(d,i,0.0);KX(a);}
function CT(a){var b,c;b=new Jh;c=a.sz;b.fi=new Bm;b.dW=c;b.eM=c.dk.createTexture();AU1=AU1+1|0;return b;}
function NN(a,b){W4(a.bB,b);}
function K$(a,b){var c,d;if(b!==a.t$){c=a.bB;d=b.cl;c.useProgram(d);a.t$=b;}}
function ACQ(){var a=this;Lh.call(a);a.wE=null;a.xa=null;}
function ASx(a,b){var c=new ACQ();AJR(c,a,b);return c;}
function AJR(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Uk;a.dE=new Bm;a.k0=0;a.lC=new Wx;a.qK=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(52)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bB=b;a.cA=Mz(d,4,4);g=AEx(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BR(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new PV;Y0();f=AU2;k.d8=b;k.f$=f;k.rw=h.length/f.kf|0;k.t3
=j.length;f=b.createBuffer();k.mx=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.ut=null;f=b.createBuffer();k.tO=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.ov=k;a.wW=KB(e,B(53));f=new PW;f.dk=b;a.sz=f;l=b.getParameter(3379);a.v2=l;f=new M;O(f);T(G(f,B(54)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(D9,6);i=g.data;d=new V6;LF(d,b,B(55),B(56),AU2);f=d.cl;d.tv=b.getUniformLocation(f,"uColor");a.jk=d;i[0]
=d;f=AR2(b,B(57));a.xt=f;i[1]=f;f=new QD;LF(f,b,B(55),B(58),AU2);a.w_=f;i[2]=f;f=ATm(b);a.wi=f;i[3]=f;f=ASy(b);a.fW=f;i[4]=f;f=ATx(b);a.ha=f;i[5]=f;a.xh=g;W4(b,B(59));a.xa=new Ui;a.wE=c;}
function GP(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cA;g=ZB(b,c,d,e);I7(f,g);h=f.bn.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=En(f,B(60));m=En(f,B(61));h=new K7;n=KF(g);h.lK=b;h.vE=c;o=c|0;if(o!==c){b=new M;O(b);Fj(G(b,B(62)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.oC=o;h.vM=d;h.wh=e;h.dr=i;h.ee=j;h.vB=l;h.lx=k;h.mD=n;h.qC=Dd(i);h.w4=Dd(h.ee);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.vJ=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(63);}h.vo=b;return h;}
function CC(){C.call(this);this.bl=null;}
function EO(a,b){a.bl=b;}
function AQR(a,b){return 0;}
var I0=F();
var AUo=null;function Jm(a,b,c){return b.jj(c);}
function ABh(){AUo=new I0;}
function ZT(){var a=this;C.call(a);a.b2=null;a.lW=null;a.bt=null;a.dd=null;a.eh=null;a.fj=null;a.fM=null;a.jc=null;a.jT=null;a.cX=null;a.g_=null;a.nI=0;}
function AS9(a){var b=new ZT();AM4(b,a);return b;}
function AM4(a,b){a.b2=CH(R(Cr,0));a.lW=CH(R(Cr,0));a.bt=CH(R(Cu,0));a.dd=CH(R(DF,0));a.eh=CH(R(Ev,0));a.fj=CH(R(EG,0));a.fM=CH(R(E8,0));a.jc=CH(R(Bi,0));a.jT=CH(R(Bi,0));a.cX=b;}
function TV(a,b){var c,d,e,f;Df(a.cX);c=(Cp(!b.hb?a.lW:a.b2)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bz(b);if(f)break;if(b.jB)break;e=e+1|0;}return f;}
function QE(a,b,c){var d,e,f;Df(a.cX);d=(Cp(a.fj)).data;e=d.length;f=0;while(f<e){if(d[f].gb(b,c))return 1;f=f+1|0;}return 0;}
function Wl(){C.call(this);this.mR=null;}
function AM0(a,b){var c;c=a.mR;if(TV(c.cj,XR(c,b,1)))DM(c,b);}
function Wm(){C.call(this);this.rV=null;}
function ANd(a,b){var c;c=a.rV;if(TV(c.cj,XR(c,b,0)))DM(c,b);}
function Wn(){C.call(this);this.n6=null;}
function ALy(a,b){var c,d,e,f,g,h,i;c=a.n6;if(c.dt!==null){a:{b:{d=EB(c,b);e=c.cj;Df(e.cX);f=e.g_;if(f!==null)f.n(d);else{g=(Cp(e.bt)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bO(d))break a;i=i+1|0;}}}}DM(c,b);}}
function Wo(){C.call(this);this.ur=null;}
function AKW(a,b){var c,d,e,f,g,h;c=a.ur;b.button;if(c.dt!==null)a:{d=EB(c,b);c=c.cj;e=b.button;Df(c.cX);if(c.g_===null){f=(Cp(c.bt)).data;g=f.length;h=0;while(h<g){b=f[h].b4(d,e);if(b!==null){c.g_=b;c.nI=e;break a;}h=h+1|0;}}}}
function Wp(){C.call(this);this.q4=null;}
function ALl(a,b){var c,d,e,f,g,h,i;c=a.q4;b.button;if(c.dt!==null){d=EB(c,b);e=c.cj;f=b.button;Df(e.cX);if(f==e.nI&&e.g_!==null)e.g_=null;g=(Cp(e.bt)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cJ(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DM(c,b);}}
function Wq(){C.call(this);this.nk=null;}
function ANM(a,b){var c,d,e,f,g,h,i,j,k;c=a.nk;if(c.dt!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cj;f=EB(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Df(e.cX);i=(Cp(e.dd)).data;j=i.length;k=0;b:{while(k<j){if(i[k].cU(f,d,h))break b;k=k+1|0;}}DM(c,b);}}
function Wr(){C.call(this);this.uI=null;}
function AI_(a,b){var c,d,e,f,g,h,i,j;c=a.uI;if(c.dt!==null){d=EB(c,b);e=c.cj;f=b.button;g=b.detail;Df(e.cX);h=(Cp(e.bt)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cn(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DM(c,b);}}
function Ws(){C.call(this);this.rh=null;}
function ARf(a,b){var c,d,e,f,g,h,i;c=a.rh;if(c.dt!==null){d=EB(c,b);e=c.cj;Df(e.cX);f=(Cp(e.eh)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bz(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DM(c,b);}}
function Wt(){C.call(this);this.nv=null;}
function AIn(a,b){var c,d,e;b=a.nv.cj;c=(Cp(b.jT)).data;d=c.length;e=0;while(e<d){c[e].o();e=e+1|0;}Df(b.cX);}
function Wu(){C.call(this);this.tG=null;}
function AOW(a,b){var c,d,e;b=a.tG.cj;c=(Cp(b.jc)).data;d=c.length;e=0;while(e<d){c[e].o();e=e+1|0;}Df(b.cX);}
function XM(){C.call(this);this.s7=null;}
function AQS(a,b){var c;c=a.s7;if(c.dt!==null)EB(c,b);}
function XN(){C.call(this);this.r_=null;}
function AK_(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.r_;if(M1()===c.gQ){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cp(c.cj.fM)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dh();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cj.cX;m=new NA;m.tQ=k;m.tR=l;g.getAsString(Bk(m,"accept"));DM(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(64)),k),B(65)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function XO(){C.call(this);this.mc=null;}
function ALC(a,b){var c;c=a.mc;if(M1()===c.gQ&&QE(c.cj,TO(c,b),0))DM(c,b);}
function XP(){C.call(this);this.tZ=null;}
function ANs(a,b){var c;c=a.tZ;if(M1()===c.gQ&&QE(c.cj,TO(c,b),1))DM(c,b);}
var T9=F(0);
var Uk=F();
function Mz(a,b,c){var d,e,f;d=new Ri;AUF=AUF+1|0;d.li=b;d.kw=c;e=(D8()).createElement("canvas");d.ji=e;f=b;e.width=f;e=d.ji;f=c;e.height=f;d.bn=d.ji.getContext("2d");return d;}
var Ui=F();
function AKb(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Mr(){var a=this;C.call(a);a.bj=null;a.l=null;a.b0=null;}
function ADy(){var a=this;C.call(a);a.gU=null;a.ik=null;a.gI=0;}
function CH(a){var b=new ADy();AI5(b,a);return b;}
function AI5(a,b){a.gU=b;}
function W(a,b){var c,d,e;c=a.gI;d=a.gU;if(c==d.data.length)a.gU=Dl(d,c+4|0);d=a.gU.data;e=a.gI;a.gI=e+1|0;d[e]=b;a.ik=null;}
function Cp(a){var b;b=a.ik;if(!(b!==null&&b.data.length==a.gI))a.ik=Dl(a.gU,a.gI);return a.ik;}
var IH=F(0);
var Cr=F(0);
var Cu=F(0);
function AKg(a,b){return 0;}
function APX(a,b,c){return null;}
function AE9(a,b,c){return 0;}
function ANL(a,b,c,d){return 0;}
var DF=F(0);
var Ev=F(0);
var EG=F(0);
var EL=F(0);
var E8=F(0);
function P5(){C.call(this);this.vX=null;}
function Bm(){var a=this;C.call(a);a.b=0;a.a=0;}
function BV(a,b){var c=new Bm();ZL(c,a,b);return c;}
function ZL(a,b,c){a.b=b;a.a=c;}
function Cy(a,b){a.b=b.b;a.a=b.a;}
function Bf(a,b,c){a.b=b;a.a=c;}
function X6(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);T(G(T(G(d,B(66)),b),B(67)),c);return N(d);}
function K9(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function Wx(){var a=this;C.call(a);a.qV=0;a.qW=0;a.qU=0;a.qT=0;}
var ACP=F();
var Y4=F(0);
function PW(){C.call(this);this.dk=null;}
function LD(){var a=this;C.call(a);a.cl=null;a.w6=null;}
function ABQ(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(68):B(69);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bu(By(),f);b=new Bp;Bn(b,f);J(b);}
function D9(){var a=this;LD.call(a);a.nu=null;a.pa=null;a.la=null;}
function AU3(a,b,c,d){var e=new D9();LF(e,a,b,c,d);return e;}
function LF(a,b,c,d,e){var f,g,h,i,j,k;a.w6=e;f=ABQ(b,35633,c);d=ABQ(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.cl=g;h=e.rI.data;i=h.length;j=0;while(j<i){c=h[j];d=a.cl;k=c.gX;c=c.pt;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.cl;b.linkProgram(c);if(b.getProgramParameter(c,35714)){W4(b,B(70));a.la=new Bm;c=a.cl;a.nu=b.getUniformLocation(c,"uResolution");c=a.cl;a.pa=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bp;c=new M;O(c);G(G(c,B(71)),d);Bn(b,N(c));J(b);}
function ZV(a,b,c){var d,e,f;if(!K9(a.la,c)){Cy(a.la,c);d=a.nu;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function Ma(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pa;b.uniform4f(e,i,l,h,j);ZV(a,b,f);}
function V6(){D9.call(this);this.tv=null;}
function Ez(){D9.call(this);this.q1=null;}
function AR2(a,b){var c=new Ez();TS(c,a,b);return c;}
function AU4(a,b,c){var d=new Ez();TW(d,a,b,c);return d;}
function TS(a,b,c){TW(a,b,B(55),c);}
function TW(a,b,c,d){Y0();LF(a,b,c,d,AU2);c=a.cl;a.q1=b.getUniformLocation(c,"sDiffuse");}
function Uc(a,b,c){var d;d=a.q1;b.uniform1i(d,0);b.activeTexture(33984);c=c.eM;b.bindTexture(3553,c);}
var QD=F(D9);
function ACx(){Ez.call(this);this.v7=null;}
function ATm(a){var b=new ACx();AIu(b,a);return b;}
function AIu(a,b){var c;TS(a,b,B(72));c=a.cl;a.v7=b.getUniformLocation(c,"uContrast");}
function AB9(){var a=this;Ez.call(a);a.s8=null;a.pd=null;a.m1=null;a.n_=null;}
function ASy(a){var b=new AB9();ANH(b,a);return b;}
function ANH(a,b){var c;TW(a,b,B(73),B(74));c=a.cl;a.s8=b.getUniformLocation(c,"uTexTransform");c=a.cl;a.pd=b.getUniformLocation(c,"uColor");c=a.cl;a.m1=b.getUniformLocation(c,"uBgColor");c=a.cl;a.n_=b.getUniformLocation(c,"uContrast");}
function Zm(){var a=this;Ez.call(a);a.uu=null;a.us=null;a.pQ=null;}
function ATx(a){var b=new Zm();AHV(b,a);return b;}
function AHV(a,b){var c,d;TS(a,b,B(75));c=a.cl;a.uu=b.getUniformLocation(c,"uColorB");d=a.cl;a.us=b.getUniformLocation(d,"uColorF");d=a.cl;a.pQ=b.getUniformLocation(d,"uContrast");}
var RS=F(0);
var AD_=F(0);
function H$(b,c,d){var e,f,g,h;e=d.bk;f=d.bx;g=d.bg;h=d.by;b.uniform4f(c,e,f,g,h);}
function W4(b,c){var d,e;d=b.getError();if(d){b=By();e=new M;O(e);T(G(e,c),d);Bu(b,N(e));}}
function PT(){var a=this;C.call(a);a.vp=null;a.vu=null;a.vs=null;}
function PV(){var a=this;C.call(a);a.d8=null;a.f$=null;a.mx=null;a.ut=null;a.tO=null;a.rw=0;a.t3=0;}
function Cj(){var a=this;C.call(a);a.vm=null;a.cW=0;}
function C7(a,b,c){a.vm=b;a.cW=c;}
function GK(){var a=this;Cj.call(a);a.rI=null;a.lZ=null;a.qI=null;a.kf=0;a.o0=0;a.r3=0;}
var AU2=null;var AU5=null;function Y0(){Y0=Bl(GK);AJI();}
function AJI(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GK;c=R(DW,2);d=c.data;AP$();d[0]=AU6;d[1]=AU7;Y0();C7(b,B(76),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];YA();switch(AU8.data[l.lr.cW]){case 1:f=f+l.eR|0;h=h+1|0;break a;case 2:e=e+l.eR|0;g=g+1|0;break a;default:}}i=i|1<<l.gX;k=k+1|0;}b.rI=c;b.kf=e;b.o0=f;b.r3=i;c=R(DW,g);m=c.data;b.lZ=c;c=R(DW,h);n=c.data;b.qI=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];YA();switch(AU8.data[l.lr.cW]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AU2=b;c=R(GK,1);c.data[0]=b;AU5=c;}
var L_=F(0);
var Te=F(0);
var Uz=F(0);
var Gl=F();
function Jf(){Gl.call(this);this.uY=null;}
function AAm(){var a=this;Jf.call(a);a.wU=0;a.kr=0;a.id=null;a.jX=null;a.sr=null;}
function ALP(a,b){var c=new AAm();APQ(c,a,b);return c;}
function APQ(a,b,c){a.uY=b;b=new M;O(b);a.id=b;a.jX=BR(32);a.wU=c;AAa();a.sr=AU9;}
function Tt(a,b,c,d){var e,$$je;e=a.uY;if(e===null)a.kr=1;if(!(a.kr?0:1))return;a:{try{e.jM(b,c,d);break a;}catch($$e){$$je=Ef($$e);if($$je instanceof Ik){}else{throw $$e;}}a.kr=1;}}
function NW(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AA6(b,c,d-c|0);e=E9(Z(16,Y(e.length,1024)));g=AAU(e,0,e.data.length);h=a.sr;i=new Pd;b=E9(1);j=b.data;j[0]=63;G8();k=AU$;i.ld=k;i.kx=k;c=j.length;if(c&&c>=i.l0){i.vh=h;i.po=b.eF();i.wN=2.0;i.l0=4.0;i.oE=BR(512);i.ni=E9(512);k=AU_;if(k===null){i=new BC;Bn(i,B(77));J(i);}i.ld=k;i.kx=k;a:while(true){if(i.h_==3){f=new DZ;V(f);J(f);}i.h_=2;b:{while(true){try{k=YQ(i,f,g);}catch($$e){$$je=Ef($$e);if($$je instanceof Bp){f=$$je;break a;}else{throw $$e;}}if(H9(k))
{d=B5(f);if(d<=0)break b;k=D0(d);}else if(G5(k))break;h=!LX(k)?i.ld:i.kx;c:{if(h!==AU_){if(h===AVa)break c;else break b;}d=B5(g);b=i.po;l=b.data.length;if(d<l){k=AVb;break b;}WQ(g,b,0,l);}ED(f,f.U+J7(k)|0);}}l=G5(k);Tt(a,e,0,g.U);NU(g);if(!l){while(true){d=i.h_;if(d!=2&&d!=4){f=new DZ;V(f);J(f);}f=AVc;if(f===f)i.h_=3;l=G5(f);Tt(a,e,0,g.U);NU(g);if(!l)break;}return;}}J(AG9(f));}i=new BC;Bn(i,B(78));J(i);}
function Bu(a,b){var c,d,e,f,g,h,i,j;BB(BZ(a.id,b),10);b=a.id;c=b.L;d=a.jX;if(c>d.data.length)d=BR(c);e=0;f=0;if(e>c){b=new Bw;Bn(b,B(79));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.A.data;j=e+1|0;g[f]=i[e];f=h;e=j;}NW(a,d,0,c);a.id.L=0;}
function F$(){Gl.call(this);this.wF=null;}
function XV(a){a.wF=E9(1);}
var Lo=F(F$);
var AUI=null;function AJ5(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ACk(){var b;b=new Lo;XV(b);AUI=b;}
function DW(){var a=this;Cj.call(a);a.pt=null;a.lr=null;a.eR=0;a.oF=0;a.gX=0;}
var AU6=null;var AU7=null;var AVd=null;function AP$(){AP$=Bl(DW);AIS();}
function ASK(a,b,c,d,e,f,g){var h=new DW();VY(h,a,b,c,d,e,f,g);return h;}
function VY(a,b,c,d,e,f,g,h){AP$();C7(a,b,c);a.pt=d;a.lr=e;a.eR=f;a.oF=g;a.gX=h;}
function AIS(){var b;b=new DW;ABz();VY(b,B(80),0,B(81),AVe,2,0,0);AU6=b;b=ASK(B(82),1,B(83),AVe,2,0,1);AU7=b;AVd=H(DW,[AU6,b]);}
function I8(){var a=this;C.call(a);a.u8=null;a.v$=null;}
function ACD(b){var c,d;if(Fo(b))J(AAf(b));if(!ACF(L(b,0)))J(AAf(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ACF(d))break a;else J(AAf(b));}}c=c+1|0;}}
function ACF(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Md=F(I8);
var AU9=null;function AAa(){AAa=Bl(Md);AHS();}
function ACT(a){var b,c;b=new Tu;b.eP=B(84);G8();c=AU$;b.gB=c;b.ll=c;b.v0=a;b.l$=0.3333333432674408;b.wj=0.5;b.no=E9(512);b.rU=BR(512);return b;}
function AHS(){var b,c,d,e,f;b=new Md;AAa();c=R(Bv,0);d=c.data;ACD(B(85));e=d.length;f=0;while(f<e){ACD(d[f]);f=f+1|0;}b.u8=B(85);b.v$=c.eF();AU9=b;}
var Kj=F();
var AVf=null;var AU8=null;function YA(){YA=Bl(Kj);AMP();}
function AMP(){var b,c;ABz();b=BI((AVg.eF()).data.length);c=b.data;AU8=b;c[AVh.cW]=1;c[AVe.cW]=2;ABB();c=BI((AVi.eF()).data.length);b=c.data;AVf=c;b[AVj.cW]=1;b[AVk.cW]=2;}
function O0(){var a=this;C.call(a);a.fd=null;a.lP=null;a.jz=null;a.sc=null;a.oZ=null;a.pg=null;}
function AAr(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.fd,b,c));}
function MU(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.lP[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.fd,b,d));f=e.data;EK();d=f.length;AAa();g=AU9;h=AAU(e,0,d);a:{try{i=ACT(g);G8();g=Zb(ABU(ADp(i,AU_),AU_),h);break a;}catch($$e){$$je=Ef($$e);if($$je instanceof FK){g=$$je;}else{throw $$e;}}h=new WY;h.iU=1;h.jf=1;h.g$=B(86);h.ky=g;J(h);}if(!g.U&&g.dm==g.lM)c.bV=g.gW;else{f=BR(B5(g));e=f.data;c.bV=f;Nr(g,f,0,e.length);}return c;}
function M3(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.jz[e]){e=e+1|0;}d=e-d|0;Hl(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.fd,b,d)));return c;}
var GO=F(Cj);
var AVh=null;var AVe=null;var AVg=null;function ABz(){ABz=Bl(GO);AHl();}
function AHK(a,b){var c=new GO();ACU(c,a,b);return c;}
function ACU(a,b,c){ABz();C7(a,b,c);}
function AHl(){var b;AVh=AHK(B(87),0);b=AHK(B(88),1);AVe=b;AVg=H(GO,[AVh,b]);}
var Ge=F(Cj);
var AVj=null;var AVk=null;var AVi=null;function ABB(){ABB=Bl(Ge);AH0();}
function ARl(a,b){var c=new Ge();Y9(c,a,b);return c;}
function Y9(a,b,c){ABB();C7(a,b,c);}
function AH0(){var b;AVj=ARl(B(89),0);b=ARl(B(90),1);AVk=b;AVi=H(Ge,[AVj,b]);}
var VC=F(D2);
function ACI(){BC.call(this);this.vl=null;}
function AAf(a){var b=new ACI();APm(b,a);return b;}
function APm(a,b){V(a);a.vl=b;}
var Mc=F(0);
function Xm(){C.call(this);this.o6=null;}
function AOp(a,b){a.o6.setPointerCapture(b.pointerId);}
function Xn(){C.call(this);this.nN=null;}
function AFW(a,b){a.nN.releasePointerCapture(b.pointerId);}
function GZ(){var a=this;C.call(a);a.lM=0;a.U=0;a.dm=0;a.g6=0;}
function VW(a,b){a.g6=(-1);a.lM=b;a.dm=b;}
function ED(a,b){var c,d,e;if(b>=0&&b<=a.dm){a.U=b;if(b<a.g6)a.g6=0;return a;}c=new BC;d=a.dm;e=new M;O(e);BB(T(G(T(G(e,B(91)),b),B(92)),d),93);Bn(c,N(e));J(c);}
function B5(a){return a.dm-a.U|0;}
function DN(a){return a.U>=a.dm?0:1;}
var R_=F(0);
var K8=F(GZ);
function ADQ(b){var c,d;if(b>=0)return ANf(0,b,BR(b),0,b,0);c=new BC;d=new M;O(d);T(G(d,B(93)),b);Bn(c,N(d));J(c);}
function AA6(b,c,d){return ANf(0,b.data.length,b,c,c+d|0,0);}
function Nr(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bw;i=new M;O(i);T(G(T(G(i,B(94)),g),B(95)),f);Bn(h,N(i));J(h);}if(B5(a)<d){j=new LQ;V(j);J(j);}if(d<0){j=new Bw;k=new M;O(k);G(T(G(k,B(96)),d),B(97));Bn(j,N(k));J(j);}g=a.U;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.gW.data[m+a.lz|0];l=l+1|0;c=n;m=o;}a.U=g+d|0;return a;}}b=b.data;j=new Bw;d=b.length;k=new M;O(k);BB(T(G(T(G(k,B(98)),c),B(92)),d),41);Bn(j,N(k));J(j);}
function J3(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lQ){b=new IT;V(b);J(b);}e=d-c|0;if(B5(a)<e){b=new HS;V(b);J(b);}if(c>I(b)){f=new Bw;d=I(b);b=new M;O(b);BB(T(G(T(G(b,B(99)),c),B(92)),d),41);Bn(f,N(b));J(f);}if(d>I(b)){f=new Bw;c=I(b);b=new M;O(b);T(G(T(G(b,B(100)),d),B(101)),c);Bn(f,N(b));J(f);}if(c>d){b=new Bw;f=new M;O(f);T(G(T(G(f,B(99)),c),B(102)),d);Bn(b,N(f));J(b);}g=a.U;while(c<d){h=g+1|0;i=c+1|0;Sh(a,g,L(b,c));g=h;c=i;}a.U=a.U+e|0;return a;}
function JJ(){var a=this;GZ.call(a);a.kq=0;a.k5=null;a.wt=null;}
function AAU(b,c,d){var e,f,g;e=b.data;f=new WP;g=e.length;d=c+d|0;VW(f,g);AJO();f.wt=AVl;f.kq=0;f.k5=b;f.U=c;f.dm=d;f.ww=0;f.mr=0;return f;}
function WQ(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mr){e=new IT;V(e);J(e);}if(B5(a)<d){e=new HS;V(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bw;j=new M;O(j);T(G(T(G(j,B(103)),h),B(95)),g);Bn(i,N(j));J(i);}if(d<0){e=new Bw;i=new M;O(i);G(T(G(i,B(96)),d),B(97));Bn(e,N(i));J(e);}h=a.U;k=h+a.kq|0;l=0;while(l<d){b=a.k5.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.U=h+d|0;return a;}}b=b.data;e=new Bw;d=b.length;i=new M;O(i);BB(T(G(T(G(i,B(98)),c),B(92)),d),41);Bn(e,N(i));J(e);}
function NU(a){a.U=0;a.dm=a.lM;a.g6=(-1);return a;}
function HE(){C.call(this);this.xl=null;}
var AVa=null;var AU_=null;var AU$=null;function G8(){G8=Bl(HE);ALe();}
function ADA(a){var b=new HE();ACz(b,a);return b;}
function ACz(a,b){G8();a.xl=b;}
function ALe(){AVa=ADA(B(104));AU_=ADA(B(105));AU$=ADA(B(106));}
var M$=F(CC);
function AK6(a){}
function AJy(a,b,c){}
var ADU=F();
function AO6(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(107)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Lj(b)){case -1570047148:if(!Bo(b,B(108)))break a;d=16;break a;case -1519338717:if(!Bo(b,B(109)))break a;d=2;break a;case -1509980539:if(!Bo(b,B(110)))break a;d=12;break a;case -1073555521:if(!Bo(b,B(111)))break a;d=13;break a;case -811765794:if(!Bo(b,B(112)))break a;d=5;break a;case -785237654:if(!Bo(b,B(113)))break a;d=10;break a;case -631889171:if(!Bo(b,B(114)))break a;d=8;break a;case -439438829:if
(!Bo(b,B(115)))break a;d=17;break a;case 2129957:if(!Bo(b,B(116)))break a;d=1;break a;case 3343967:if(!Bo(b,B(117)))break a;d=9;break a;case 3556498:if(!Bo(b,B(118)))break a;d=4;break a;case 485517998:if(!Bo(b,B(119)))break a;d=6;break a;case 544901384:if(!Bo(b,B(120)))break a;d=3;break a;case 1030621992:if(!Bo(b,B(121)))break a;d=15;break a;case 1465713255:if(!Bo(b,B(122)))break a;d=7;break a;case 1554501643:if(!Bo(b,B(123)))break a;d=14;break a;case 1609169232:if(!Bo(b,B(124)))break a;d=11;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new S6;break b;case 3:case 4:b=new S5;break b;case 5:b=new S4;break b;case 6:b=new S3;break b;case 7:b=new S2;break b;case 8:case 9:b=new S1;break b;case 10:b=new S0;break b;case 11:b=new SZ;break b;case 12:b=new SY;break b;case 13:b=new QB;break b;case 14:b=new Qz;break b;case 15:b=new QA;break b;case 16:b=new Qx;break b;case 17:b=new Qy;break b;default:b=new Qv;break b;}b=new S7;}return b;}
var AA5=F();
var JY=F(K8);
function AAN(){var a=this;JY.call(a);a.lQ=0;a.lz=0;a.gW=null;}
function ANf(a,b,c,d,e,f){var g=new AAN();ARt(g,a,b,c,d,e,f);return g;}
function ARt(a,b,c,d,e,f,g){VW(a,c);a.U=e;a.dm=f;a.lz=b;a.lQ=g;a.gW=d;}
function Sh(a,b,c){a.gW.data[b+a.lz|0]=c;}
function KT(){var a=this;C.call(a);a.vh=null;a.po=null;a.wN=0.0;a.l0=0.0;a.ld=null;a.kx=null;a.h_=0;}
function LK(){var a=this;C.call(a);a.f_=0;a.hK=0;}
var AVc=null;var AVb=null;function YX(a,b){var c=new LK();Zt(c,a,b);return c;}
function Zt(a,b,c){a.f_=b;a.hK=c;}
function H9(a){return a.f_?0:1;}
function G5(a){return a.f_!=1?0:1;}
function KI(a){return !Qo(a)&&!LX(a)?0:1;}
function Qo(a){return a.f_!=2?0:1;}
function LX(a){return a.f_!=3?0:1;}
function J7(a){var b;if(KI(a))return a.hK;b=new Fh;V(b);J(b);}
function D0(b){return YX(2,b);}
function Vg(a){var b,c;switch(a.f_){case 0:b=new PY;V(b);J(b);case 1:b=new W3;V(b);J(b);case 2:b=new U_;c=a.hK;V(b);b.xE=c;J(b);case 3:b=new PL;c=a.hK;V(b);b.xy=c;J(b);default:}}
function ZX(){AVc=YX(0,0);AVb=YX(1,0);}
var YN=F();
var Ln=F(0);
var Nh=F();
function AH8(a,b){return b.arrayBuffer();}
var Ng=F();
function AMq(a,b){var c,d;c=new OY;d=new OW;return $rt_globals.WebAssembly.instantiate(b,AKa(Bk(c,"f"),Bk(d,"f")));}
var Nf=F();
function AM$(a,b){AFR(b);}
var Ne=F();
function AGx(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var S7=F();
function AMI(a,b){var c,d,e,f;c=new Xv;Fg(c,b);d=AM5(c.s);c.ek=d;c.P=ADr(c.s,d);c.O=ADr(c.s,c.ek);d=c.P;d.bT=1;e=new QN;e.sw=c;f=new QL;f.t0=c;Qw(d,e,e);Qw(c.O,f,f);WL(c.s,c.P);W(b.l.bt,c.ek);W(b.l.dd,c.ek);W(b.l.dd,c);W(b.l.bt,c);d=b.l.b2;e=new QM;e.vW=c;W(d,e);d=b.l.b2;e=new HG;f=new QJ;f.rM=c;R5(e,b,f);W(d,e);W(b.l.fj,c);W(b.l.fM,c);b=b.l.eh;d=new QK;d.mj=c;W(b,d);AAc(c);return c;}
var S6=F();
function AFz(a,b){return ATP(b);}
var S5=F();
function AJe(a,b){return AR5(b);}
var S4=F();
function AJb(a,b){var c,d,e;c=new V2;Fg(c,b);d=new US;d.lt=new Bm;d.jR=new Bm;c.q9=d;c.du=YT();c.cF=YT();c.d4=MO(c.s);W(c.s.dS,c);d=b.l.b2;e=new S9;e.s9=c;W(d,e);W(b.l.bt,c);b=b.l.eh;d=new Ta;d.rN=c;W(b,d);SH(c.cF);c.k9=EP(B(125),25.0);H1(c.d4,FX(),c.k9);BG(c.f7,CY(43));b=FX();H4(c.du,b);H4(c.cF,b);b=c.du;b.i7=new S_;d=c.cF;d.i7=new S8;d.jq=new WZ;d.sJ=new W0;KS(b,(Nx(0)).iy);KS(c.cF,(Nx(0)).iy);return c;}
var S3=F();
function AJQ(a,b){var c,d,e;c=new Xf;Fg(c,b);c.kh=EP(B(126),15.0);d=ADX();c.eg=d;W(c.s.dS,d);W(c.s.dS,c);BG(c.f7,CY(43));d=MO(c.s);c.g1=d;H1(d,FX(),EP(B(125),25.0));d=b.l.b2;e=new Ox;e.ve=c;W(d,e);d=b.l.eh;e=new Oy;e.p4=c;W(d,e);W(b.l.bt,YS(c.g1));W(b.l.bt,c.eg);b=b.l.dd;d=c.eg;BD(d);e=new Oz;e.tn=d;W(b,e);return c;}
var S2=F();
function AFG(a,b){var c,d,e;c=new X0;Fg(c,b);c.fs=Cn();c.eX=Cn();c.op=S(B(127));c.h5=APi();c.fO=0;d=c.s.dS;e=new TX;e.me=c;W(d,e);W(b.l.bt,c);d=b.l.b2;e=new TY;e.pZ=c;W(d,e);b=Hj(b.bj,B(125),35);c.i6=b;c.hN=ADJ(E0(b));BG(c.f7,S(B(128)));return c;}
var S1=F();
function AHh(a,b){var c,d,e,f;c=new O5;EO(c,b);c.fI=ABx();c.dY=0;c.rF=500;c.t7=HB(0,0,0,255,new B2);c.lu=20;c.um=20;c.oe=AAq();d=b.l.bt;e=new Wh;e.iu=c;f=new XZ;f.ro=e;e.qO=f;W(d,e);d=b.l.dd;e=new SL;e.ny=c;W(d,e);c.d0=b.bj;c.sD=Uw(b.b0);TA(c.fI,Hj(c.d0,B(125),c.um),c.lu,c.d0);c.gA=Hn();return c;}
var S0=F();
function AMZ(a,b){var c,d;c=new QP;Gk(c,b);b=b.l.b2;d=new PZ;d.t9=c;W(b,d);return c;}
var SZ=F();
function AQA(a,b){return ATr(b);}
var SY=F();
function ARr(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new WJ;Gk(c,b);c.dI=Fd(0,0,300,300);c.eN=SC(0,0,3,3);d=b.bj;b=b.l.bt;e=new TI;e.kL=c;W(b,e);b=Z_(d);c.pk=b;Gh(c.dI,b);G1(c.dI);b=c.dI.b1;G9();BG(b,AVm);BG(c.dI.bQ,CL(204,120,50));ABB();e=AVk;f=E9((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CT(d);YA();switch(AVf.data[e.cW]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Eo;V(b);J(b);}b:
{Na(m,5,5,h);b=m.dW.dk;switch(AVf.data[e.cW]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Eo;V(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.j5=m;Bf(c.eN.x,Ce(m),C4(c.j5));BG(c.eN.b1,c.lg);return c;}
var QB=F();
function AKJ(a,b){var c,d,e;c=new Sb;Gk(c,b);c.f5=Fd(0,0,300,300);c.jF=new Bm;c.h8=new Bm;c.hi=new Bm;d=b.bj;b=b.l.bt;e=new VN;e.i$=c;W(b,e);b=Z_(d);c.rj=b;Gh(c.f5,b);G1(c.f5);b=c.f5.b1;G9();BG(b,AVm);BG(c.f5.bQ,CL(204,120,50));return c;}
var Qz=F();
function AEv(a,b){var c,d,e,f;c=new OH;EO(c,b);c.wm=20;c.xR=11;c.v5=220;c.iR=new Bm;c.wJ=5000;c.gm=1;c.ff=H(G$,[CY(0),CY(255)]);c.d7=b.bj;d=b.l.bt;e=new T7;e.i1=c;f=new Pu;f.mO=e;e.pB=f;W(d,e);b=b.l.dd;d=new NS;d.tr=c;W(b,d);b=CK(c.d7,200,220);c.jy=b;F0(b,B(125),20.0);b=CK(c.d7,200,20);c.e4=b;F0(b,B(125),20.0);c.ht=Hn();return c;}
var QA=F();
function AH4(a,b){var c,d,e;c=new Io;Gk(c,b);W(b.l.bt,c);d=b.l.b2;e=new So;e.rs=c;W(d,e);W(b.l.fj,new Sn);d=b.l.fj;e=new Sl;e.o9=c;W(d,e);W(b.l.fM,new Sk);d=b.l.fM;e=new Sm;e.mT=c;W(d,e);b=!Xp(b.b0)?B(129):B(130);d=new M;O(d);G(G(d,B(131)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var Qx=F();
function AK1(a,b){var c,d,e,f,g,h,i,j;c=new P2;EO(c,b);c.m3=CY(20);c.eY=Fd(0,0,300,300);d=b.l.b2;e=new RT;e.xm=c;W(d,e);b=b.bj;d=Hj(b,B(10),88);Cw(b.cA,d);f=En(b.cA,B(132));g=En(b.cA,B(133));if(f>g)g=f;h=Dd(g);i=J0(d,1.1799999475479126);j=By();e=new M;O(e);T(G(T(G(e,B(134)),h),B(135)),i);Bu(j,N(e));e=CK(b,h,i*2|0);c.hO=e;Cw(e,d);Ch(c.hO,B(132),0.0,d.dr);Ch(c.hO,B(133),0.0,i+d.dr);b=CT(b);c.k$=b;CM(b,c.hO);Gh(c.eY,c.k$);G1(c.eY);b=c.eY.b1;G9();BG(b,AVm);BG(c.eY.bQ,AVn);return c;}
var Qy=F();
function AOJ(a,b){var c,d,e,f;c=new Wi;Fg(c,b);c.sC=EP(B(126),20.0);d=ADX();c.d1=d;W(c.s.dS,d);W(c.s.dS,c);BG(c.f7,CY(43));d=MO(c.s);c.gu=d;H1(d,FX(),EP(B(125),25.0));d=b.l.b2;e=new Qj;e.xj=c;W(d,e);d=b.l.eh;e=new Qk;e.p7=c;W(d,e);W(b.l.bt,YS(c.gu));W(b.l.bt,c.d1);d=b.l.bt;e=c.s.cy;f=new Ro;f.l6=e;W(d,f);b=b.l.dd;d=c.d1;BD(d);e=new Ql;e.ru=d;W(b,e);return c;}
var Qv=F();
function AEk(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Rb;X9(c,b);d=c.cG;e=new Iq;f=AQD(null,null,B(136),null);g=R(Bv,8);h=I(B(137));i=0;j=0;k=h+1|0;while(true){l=GE(B(137),10,j);m=l>=0?B9(B(137),j,l):Dk(B(137),j);n=g.data;o=i+1|0;j=n.length;if(j==i)g=Dl(g,j*2|0);g.data[i]=m;g=g;j=l<0?k:l+1|0;if(j>h)break;i=o;}if(g.data.length!=o)g=Dl(g,o);Qm(e,g,B(138),f);d.vn=null;U1(d);b=d.e;d.e=e;d.eK=FC();p=AA_(Do(d.e));if(p!==null){f=Ck(d);m=new ML;m.pu=d;n=R(C,1);n.data[0]=Gg(d.e.g);C1(f,m,p,n);}n=(Cp(d.ej.md)).data;i
=n.length;j=0;while(j<i){n[j].lR(b,e);j=j+1|0;}return c;}
function G7(){var a=this;C.call(a);a.bA=0;a.ce=0;a.cV=0;a.ix=0;}
function AVo(a,b,c,d){var e=new G7();Ug(e,a,b,c,d);return e;}
function Ug(a,b,c,d,e){a.bA=d;a.ce=b;a.cV=c;a.ix=e;}
function OO(){var a=this;G7.call(a);a.dC=null;a.bf=0;a.hb=0;a.rr=0;a.jB=0;}
var ACY=F();
function V9(b,c){return (b+(c/2|0)|0)/c|0;}
function PC(b,c,d){if(b<(2147483647/c|0))return V9(Bd(b,c),d);return 0.5+c*b/d|0;}
function Iv(b,c){return ((b+c|0)-1|0)/c|0;}
function He(b){return b+0.5|0;}
function Dd(b){return b+0.5|0;}
function Et(b,c,d){return Z(b,Y(c,d));}
function Mn(){var a=this;G7.call(a);a.h=null;a.u9=null;}
var T_=F(0);
function NA(){var a=this;C.call(a);a.tQ=null;a.tR=null;}
function AKA(a,b){var c,d;c=a.tQ;d=a.tR;$rt_globals.console.info("paste plain string "+b);c.n(FA(b));Df(d);}
function UT(){C.call(this);this.uq=null;}
function V8(a,b){a.uq.clipboardData.setData("text/plain",$rt_ustr(b));}
function WP(){var a=this;JJ.call(a);a.ww=0;a.mr=0;}
var ABV=F();
function Kh(){C.call(this);this.wR=null;}
var AVl=null;var AVp=null;function AJO(){AJO=Bl(Kh);ARi();}
function AHE(a){var b=new Kh();X7(b,a);return b;}
function X7(a,b){AJO();a.wR=b;}
function ARi(){AVl=AHE(B(139));AVp=AHE(B(140));}
var VZ=F(0);
function SN(){C.call(this);this.g7=null;}
function FG(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.g7));}
function Es(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.g7));}
function AG3(a){var b,c;b=a.g7.byteLength;c=new M;O(c);G(T(G(c,B(141)),b),B(142));return N(c);}
var Us=F(0);
function K6(){var a=this;C.call(a);a.gq=null;a.eV=null;a.lv=null;}
function ABR(a,b){var c=new K6();AJJ(c,a,b);return c;}
function ART(a,b,c){var d=new K6();NV(d,a,b,c);return d;}
function Yh(b){var c,d,e,f,g,h,i,j,k;c=new K6;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=UA(E(D4),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=KF(f[h]);h=h+1|0;}}j=g.data;h=j.length;if(!h)i=R(Bv,0);else{i=R(Bv,h-1|0);g=i.data;h=0;k=g.length;while(h<k){g[h]=FA(JL(j[h]));h=h+1|0;}}}else i=R(Bv,0);NV(c,d,b,i);return c;}
function AJJ(a,b,c){NV(a,b,c,R(Bv,0));}
function NV(a,b,c,d){a.gq=b;a.eV=c;a.lv=d;}
function Ju(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Ey(a);e=new M;O(e);G(G(e,B(143)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function Ey(a){var b;b=a.gq;return FA(b!==null?b.name:a.eV.name);}
function AJ_(a){var b,c,d,e,f;if(a.eV===null){b=a.lv;c=Ey(a);d=Zx(b);e=new M;O(e);G(G(G(e,d),B(144)),c);c=N(e);}else{b=a.lv;c=Ey(a);f=Ju(a,a.eV.size);d=Zx(b);e=new M;O(e);T(G(G(G(G(e,d),B(144)),c),B(145)),f);c=N(e);}return c;}
function KP(){var a=this;KT.call(a);a.oE=null;a.ni=null;}
function YQ(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.oE;e=0;f=0;g=a.ni;a:{while(true){if((e+32|0)>f&&DN(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Y(B5(b)+j|0,i.length);Nr(b,d,j,f-j|0);e=0;}if(!DN(c)){k=!DN(b)&&e>=f?AVc:AVb;break a;}i=g.data;j=Y(B5(c),i.length);l=new Nz;l.mg=b;l.pA=c;k=ABf(a,d,e,f,g,0,j,l);e=l.sZ;j=l.ue;if(k===null){if(!DN(b)&&e>=f)k=AVc;else if(!DN(c)&&e>=f)k=AVb;}WQ(c,g,0,j);if(k!==null)break;}}ED(b,b.U-(f-e|0)|0);return k;}
var Pd=F(KP);
function ABf(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LJ(h,2))break a;i=AVb;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!L5(l)){if((f+3|0)>g){j=j+(-1)|0;if(LJ(h,3))break a;i=AVb;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CD(l)){i=D0(1);break a;}if
(j>=d){if(DN(h.mg))break a;i=AVc;break a;}c=j+1|0;m=k[j];if(!CZ(m)){j=c+(-2)|0;i=D0(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LJ(h,4))break a;i=AVb;break a;}k=e.data;o=Er(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.sZ=j;h.ue=f;return i;}
var Ik=F(D2);
function CP(){var a=this;CC.call(a);a.f7=null;a.s=null;}
function Fg(a,b){var c,d,e;EO(a,b);a.f7=Zy(0,0,64);c=new XT;c.b6=new Bm;c.dS=CH(R(Em,0));c.dP=new Bm;c.nO=new Bm;c.xT=new B2;c.xS=new B2;c.cT=b.bj;d=b.b0;c.iv=d;c.cy=Uw(d);d=b.l.jT;e=new Mx;e.m5=c;W(d,e);d=b.l.jc;e=new My;e.qn=c;W(d,e);a.s=c;W(b.l.b2,new Se);b=b.l.b2;c=a.s;BD(c);d=new Sf;d.rO=c;W(b,d);}
function E3(a){Gy(a.bl.bj,a.f7);}
function GT(a,b,c){var d,e,f,g,h;a:{d=a.s;Cy(d.b6,b);e=d.bK;if(e!==c){d.bK=c;f=(Cp(d.dS)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gc(e,c);h=h+1|0;}}}}
var Kb=F(0);
var Lc=F(0);
function Xv(){var a=this;CP.call(a);a.P=null;a.O=null;a.ek=null;}
function AJj(a,b,c){if(DX(a.s,a.P))return GC(a.P,b,c);if(!DX(a.s,a.O))return 0;return GC(a.O,b,c);}
function V_(a,b,c){var d,e;d=10*b.W|0;if(IX(b.bm-c.bm|0)>d){e=b.bm;c.bm=Hz(Z(e-d|0,Y(c.bm,e+d|0)),Ip(c));}c.cE=Hz(b.cE,Kf(c));}
function AHZ(a,b){var c,d;c=K0(a.P,b);d=K0(a.O,b);return !c&&!d?0:1;}
function AP2(a){E3(a);L$(a.P);L$(a.O);V5(a.ek);}
function VG(a){return Xw(0);}
function AIZ(a){XW(a.P);XW(a.O);}
function AOa(a){WA(a.P);WA(a.O);}
function AOU(a,b){XX(a.P,b);XX(a.O,b);}
function ANN(a,b,c){var d,e,f;GT(a,b,c);d=new Bm;e=BV(b.b/2|0,b.a);LE(a.P,d,e,c);f=b.b;d.b=f-(f/2|0)|0;LE(a.O,d,e,c);}
function AOI(a){JB(a,Kg());}
function AAc(a){JB(a,ABH());}
function APf(a){JB(a,AAK());}
function JB(a,b){BD(b);PA(a.ek,b);Lg(a.P,b);Lg(a.O,b);}
function ALc(a,b){var c,d;c=DG(a.P,b.h)&&Pj(a.P,b)?1:0;d=DG(a.O,b.h)&&Pj(a.O,b)?1:0;return !c&&!d?0:1;}
function AK$(a,b,c,d){var e,f;e=DG(a.P,b.h)&&QC(a.P,b,c,d)?1:0;f=DG(a.O,b.h)&&QC(a.O,b,c,d)?1:0;return !e&&!f?0:1;}
function AFs(a,b,c){var d,e,f,g,h,i,j,k;d=DG(a.P,b.h);e=DG(a.O,b.h);f=a.s;g=f.d5;h=g!==null?0:1;i=a.P;j=g!==i?0:1;k=g!==a.O?0:1;if(d&&!(!h&&!k))FO(f,i);if(e&&!(!h&&!j))FO(a.s,a.O);if(d){i=UW(a.P,b,c);if(i!==null)return i;}return !e?null:UW(a.O,b,c);}
function AIo(a,b,c){var d,e,f,g;d=DG(a.P,b.h);e=DG(a.O,b.h);f=d&&UO(a.P,b,c)?1:0;g=e&&UO(a.O,b,c)?1:0;return !f&&!g?0:1;}
function ANa(a,b,c,d){var e,f,g,h;e=DG(a.P,b.h);f=DG(a.O,b.h);g=e&&Jy(a.P,c,d)?1:0;h=f&&Jy(a.O,c,d)?1:0;return !g&&!h?0:1;}
function AKQ(a){var b,c;if(DX(a.s,a.P)){b=a.P;BD(b);c=new Q5;c.tW=b;}else if(!DX(a.s,a.O))c=null;else{b=a.O;BD(b);c=new Q4;c.of=b;}return c;}
function Ku(){var a=this;CP.call(a);a.cG=null;a.fT=null;}
function ATP(a){var b=new Ku();X9(b,a);return b;}
function X9(a,b){var c,d,e,f;Fg(a,b);c=AM5(a.s);a.fT=c;d=ADr(a.s,c);a.cG=d;WL(a.s,d);W(b.l.bt,a.fT);W(b.l.dd,a.fT);W(b.l.bt,a.cG);c=b.l.b2;d=new RY;d.oc=a;W(c,d);c=b.l.b2;d=new HG;e=a.cG;BD(e);f=new R2;f.tY=e;R5(d,b,f);W(c,d);c=b.l.fj;d=a.cG;BD(d);e=new R1;e.l1=d;W(c,e);c=b.l.fM;d=new R0;d.pe=a;W(c,d);c=b.l.dd;d=new RZ;d.uP=a;W(c,d);b=b.l.eh;c=new R3;c.mM=a;W(b,c);AB6(a);}
function AGG(a,b){return K0(a.cG,b);}
function AJu(a){E3(a);L$(a.cG);V5(a.fT);}
function ANm(a){return Xw(0);}
function ALX(a,b,c){GT(a,b,c);a.qG(b,c);}
function ZZ(a,b,c){LE(a.cG,new Bm,b,c);}
function ALV(a){Jp(a,Kg());}
function AB6(a){Jp(a,ABH());}
function AKV(a){Jp(a,AAK());}
function Jp(a,b){BD(b);PA(a.fT,b);Lg(a.cG,b);}
function ADS(a,b){if(b.bf!=121)return 0;return 1;}
function YW(a,b){var c,d,e;if(DX(a.s,a.cG)){c=a.fT;d=a.cG;e=new NL;e.sE=a;Ky(c,b,d,a,d,e);}return 1;}
function YE(){var a=this;CC.call(a);a.lE=null;a.kT=null;a.da=null;a.gd=null;a.e7=null;a.gZ=null;a.u5=null;a.gO=null;a.qZ=null;a.lG=null;a.vk=null;a.wp=null;a.fN=null;a.jr=null;a.qa=0;}
function AR5(a){var b=new YE();AKY(b,a);return b;}
function AKY(a,b){var c,d,e,f,g,h,i;EO(a,b);c=(Kg()).cz.go;a.lE=c;a.kT=AQl(c);a.da=Fd(0,0,300,300);a.gd=SC(0,0,3,3);a.e7=Fd(0,0,300,300);a.gZ=AMl();d=R(Bv,4);e=d.data;e[0]=B(146);e[1]=B(147);e[2]=B(148);e[3]=B(149);a.u5=d;a.gO=R(It,e.length);c=b.bj;f=b.l.bt;g=new TJ;g.e5=a;W(f,g);f=b.l.b2;g=new RC;g.uR=a;W(f,g);f=b.l.lW;g=new RB;g.oa=a;W(f,g);f=b.l.fj;g=new RE;g.wO=a;W(f,g);f=b.l.jc;g=new RD;g.vd=a;W(f,g);f=b.l.eh;g=new RA;g.wl=a;W(f,g);b=b.l.dd;f=new Rz;f.s1=a;W(b,f);h=CK(a.bl.bj,300,300);f=h.bn;b="white";f.fillStyle
=b;b=h.bn;f="white";b.strokeStyle=f;b=h.bn;f=10.0;b.lineWidth=f;h.bn.strokeRect(75.0,140.0,150.0,110.0);h.bn.fillRect(130.0,190.0,40.0,60.0);h.bn.beginPath();h.bn.moveTo(50.0,140.0);h.bn.lineTo(150.0,60.0);h.bn.lineTo(250.0,140.0);h.bn.closePath();h.bn.stroke();F0(h,B(150),11.0);Lq(h,187,187,187);Pc(a,B(151),h);b=CT(a.bl.bj);CM(b,h);FM(h);a.qZ=b;Gh(a.da,b);G1(a.da);BG(a.da.b1,a.lE);BG(a.da.bQ,CL(204,120,50));b=CK(c,255,100);a.fN=b;F0(b,B(126),11.0);b=By();i=$rt_str(a.fN.bn.font);g=new M;O(g);G(G(g,B(152)),i);Bu(b,
N(g));En(a.fN,B(153));Lq(a.fN,169,183,198);Pc(a,B(153),a.fN);b=CT(c);a.lG=b;CM(b,a.fN);Gh(a.e7,a.lG);G1(a.e7);F_(a.e7,CY(255));Hy(a.e7,a.lE);a.vk=CT(c);BG(a.gd.b1,a.kT);}
function Pc(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function WG(a,b){Jo(Fu(),0.5+Fu()*0.5,0.5+Fu()*0.5,1.0,b.bQ);}
function AET(a,b){var c;a.qa=a.qa+1|0;c=b/5.0;Jo(c-(c|0),1.0,1.0,1.0,a.gd.bQ);return SQ(a.gZ,b);}
function AHU(a){var b,c,d,e,f,g;b=a.bl.bj;Gy(b,a.kT);c=a.gO.data;d=c.length;e=0;while(e<d){Um(c[e],b,0,0);e=e+1|0;}DE(a.da,b,a.qZ,0,0,0.5);f=a.lG;d=0;while(d<7){g=a.e7;DE(g,b,f,Bd(d,10+((10*g.x.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.wp;if(g!==null)T1(a.gd,b,g,0,0,0.0);U0(a.gZ,b,new Bm);NN(b,B(154));}
function AOo(a,b,c){var d,e,f,g,h,i,j,k,l;d=By();e=Cv(b);f=new M;O(f);G(G(f,B(155)),e);Bu(d,N(f));g=By();d=new M;O(d);Fj(G(d,B(156)),c);Bu(g,N(d));h=B$(30.0,c);i=B$(10.0,c);j=0;while(true){k=a.gO.data;if(j>=k.length)break;l=1+j|0;k[j]=SC(Bd(i,l)+Bd(h,j)|0,h,h,h);WG(a,a.gO.data[j]);j=l;}Bf(a.gd.N,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.da;g=d.N;h=b.b;d=d.x;Bf(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.e7;d.N.a=b.a-d.x.a|0;}
function OR(a,b){var c,d,e,f,g;c=By();d=!b.hb?B(157):B(158);e=b.dC;f=b.bf;g=b.rr;b=new M;O(b);F3(G(T(G(G(G(b,d),e),B(159)),f),B(160)),g);Bu(c,N(b));return 0;}
var Em=F(0);
function V2(){var a=this;CP.call(a);a.q9=null;a.du=null;a.cF=null;a.d4=null;a.k9=null;}
function APR(a,b,c){var d;d=GN(a.s,a.k9);HX(a.du,d);HX(a.cF,d);GV(a.du,a.s);GV(a.cF,a.s);}
function Nx(b){return IS(b,APi());}
function IS(b,c){var d;d=PK();Kt(d,KO(b,Im(c,25)),!b?null:IS(b-1|0,c));Kt(d,KO(b,Im(c,20)),!b?null:IS(b-1|0,c));Kt(d,KO(b,Im(c,15)),!b?null:IS(b-1|0,c));Kt(d,KO(b,Im(c,10)),!b?null:IS(b-1|0,c));return Ho(d);}
function KO(b,c){var d;if(b){d=new M;O(d);G(G(T(d,b),B(36)),c);c=N(d);}return c;}
function Kt(b,c,d){var e,f;e=new Gv;f=Jo(Fu(),1.0,1.0,1.0,new B2);XG();Hm(e,f,AVq,AVr);if(d!==null)GH(b,c,e,d);else{d=new Ua;d.s3=c;D5(b,c,e,d);}}
function AHn(a,b,c){var d,e;GT(a,b,c);b=a.s.b6;d=D_(a.du);e=D_(a.cF);JT(a.du,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);JT(a.cF,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AH9(a){var b,c,d,e,f,g,h,i;E3(a);b=a.bl.bj;CJ(b,1);c=a.q9;d=a.s;e=d.b6;Bf(c.lt,e.b,B$(2.0,d.bK));Bf(c.jR,B$(2.0,d.bK),e.a);G9();f=AVs;g=d.cT;h=e.a/2|0;i=c.lt;Bz(g,0,h-(i.a/2|0)|0,i,f);g=d.cT;h=e.b/2|0;c=c.jR;Bz(g,h-(c.b/2|0)|0,0,c,f);Jw(a.du,a.s);Jw(a.cF,a.s);Ih(a.d4);CJ(b,0);}
function ANI(a,b){var c,d,e;c=Kr(a.d4,b);d=Kd(a.du,b.h,a.s.cy);e=Kd(a.cF,b.h,a.s.cy);return !c&&!d&&!e?0:1;}
function AIf(a,b,c){return I_(a.d4,b,c);}
function AF1(a,b,c){return DJ(a.d4);}
function AM2(a,b,c,d){var e,f,g;e=Je(a.d4,b,c,d);f=J6(a.du,b.h,c,d);g=J6(a.cF,b.h,c,d);return !e&&!f&&!g?0:1;}
function Xf(){var a=this;CP.call(a);a.g1=null;a.eg=null;a.hQ=null;a.kh=null;}
function AIi(a,b,c){if(b===0.0)XB(a);}
function ANj(a){var b;E3(a);b=a.bl.bj;IZ(a.eg,b);Ih(a.g1);}
function XB(a){var b,c,d,e,f,g,h;b=a.hQ;if(b!==null){J4(a.eg,b);JQ(b);}b=(Kg()).S;c=ATF(a.s,new VM);d=EP(B(125),14.0);e=AM7();f=0;while(f<300){g=C0(f);h=new X4;h.rS=B(161);h.rR=g;h.rQ=B(162);M6(e,B(161),g,B(162),h);f=f+1|0;}VP(c,QI(e));XE(c,b,d);g=ABt(a.s);h=Ze(c,a.s);Qs(h,b.ls,b.jV);LN(g,h);g.ea=b;Iw(g,B(163),a.kh,2.0);a.hQ=g;IM(a.eg,g);Uo(a);}
function AGB(a,b,c){GT(a,b,c);PP(a.eg,b,c);Uo(a);}
function Uo(a){var b,c,d;b=a.s.b6;Fm(a.hQ,BV((b.b*2|0)/10|0,(b.a*4|0)/10|0),BV((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.hQ;b=X6(c.M.r);d=new M;O(d);G(G(d,B(164)),b);Iw(c,N(d),a.kh,2.0);}
function AOu(a,b){return Oe(a.eg,b);}
function X0(){var a=this;CP.call(a);a.hN=null;a.fs=null;a.eX=null;a.i6=null;a.op=null;a.h5=null;a.fD=null;a.fo=null;a.i0=0;a.fO=0;}
function Wy(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fs.i>0){d=Fu();e=a.fs;f=d*(e.i-1|0)|0;e=Ek(e,f);Ek(a.eX,f);f=a.fO;g=e.x;a.fO=f-Bd(g.b,g.a)|0;Ia(a.hN,e.c4);}c=c+1|0;}}
function Ko(a,b){var c,d,e,f,g,h,i,j;c=IB(a.s);Cw(c,a.i6);d=0;while(d<b){e=Im(a.h5,1+(Fu()*19.0|0)|0);f=ALb();g=f.c4;h=a.hN;BD(c);i=new Rg;i.oH=c;BG(g,Hh(h,e,i));(WN(Fu(),1.0,1.0,f.b1)).by=0.5;h=f.N;g=f.c4;Bf(h,g.bk|0,g.bx|0);h=f.x;g=f.c4;Bf(h,g.bg|0,g.by|0);BY(a.eX,e);BY(a.fs,f);j=a.fO;h=f.x;a.fO=j+Bd(h.b,h.a)|0;d=d+1|0;}a.fo=L8(a.hN);}
function ANS(a){var b,c,d,e,f,g,h,i;E3(a);b=a.bl.bj;CJ(b,1);c=a.s.cT;if(a.eX.i){d=a.fo;d=CK(c,d.b,d.a);Cw(d,a.i6);e=a.i6.dr;Bz(c,0,0,a.fo,a.op);f=0;while(f<a.eX.i){g=Bs(a.fs,f);h=Bs(a.eX,f);g=g.c4;Ch(d,h,g.bk,g.bx+e);f=f+1|0;}g=a.fD;if(!(g!==null&&Ce(g)==a.fo.b&&C4(a.fD)==a.fo.a))a.fD=CG(a.fD,CT(c));CM(a.fD,d);FM(d);i=0;while(i<a.eX.i){d=Bs(a.fs,i);F_(d,CY(0));DE(d,c,a.fD,0,0,0.0);i=i+1|0;}}CJ(b,0);}
function AG1(a,b){var c,d;if(a.i0){c=a.fo;d=Y(Bd(c.b,c.a),2211840);if(a.fO/d<=0.7)Ko(a,Ic(a.h5,5));else Wy(a,Ic(a.h5,5));}return a.i0;}
function O5(){var a=this;CC.call(a);a.d0=null;a.fI=null;a.gA=null;a.kv=null;a.dY=0;a.rF=0;a.t7=null;a.lu=0;a.um=0;a.sD=null;a.oe=null;}
function AFa(a){var b,c;b=a.dY;c=new M;O(c);T(G(c,B(165)),b);$rt_globals.console.info($rt_ustr(N(c)));Gy(a.d0,a.t7);In(a.gA,a.dY,0,F9(a),5000,a.kv.b,20);CJ(a.d0,1);PU(a.gA,a.d0);CJ(a.d0,0);b=a.dY;c=new M;O(c);T(G(c,B(165)),b);$rt_globals.console.info($rt_ustr(N(c)));Xy(a.fI,a.dY/a.lu|0);Qt(a.fI,a.dY,F9(a),a.oe,a.d0);}
function APA(a,b,c){a.kv=b;Vh(a.fI,BV(0,0),50,F9(a),c);JW(a.fI,a.d0,0,F9(a));}
function PJ(a){return 5000-F9(a)|0;}
function F9(a){return Y(a.rF,a.kv.a);}
function C$(){var a=this;CC.call(a);a.lg=null;a.gk=null;a.vf=0.0;}
function AVt(a){var b=new C$();Gk(b,a);return b;}
function Gk(a,b){EO(a,b);a.lg=Zy(0,0,64);a.gk=new Bm;Ns(b.b0,HZ(Co(a)));}
function R$(a){Gy(a.bl.bj,a.lg);}
function SG(a,b,c){Cy(a.gk,b);a.vf=c;}
var QP=F(C$);
var ADN=F(C$);
function ATr(a){var b=new ADN();AMB(b,a);return b;}
function AMB(a,b){var c,d,e,f,g,h;Gk(a,b);c=b.b0;d=new Rf;d.vP=a;e=R(C,1);e.data[0]=B(166);C1(c,d,B(167),e);f=b.b0;g=new Re;g.xA=a;h=R(C,1);h.data[0]=AAJ([1,2,3,4,5]);C1(f,g,B(168),h);f=b.b0;g=new Rd;g.n$=a;h=R(C,1);h.data[0]=ASL([1,2,3,4,5]);C1(f,g,B(169),h);f=b.b0;g=new Rc;g.vx=a;h=R(C,1);h.data[0]=E4([1,2,3,4,5]);C1(f,g,B(170),h);f=b.l.b2;d=new HG;g=new Ra;g.wD=a;c=new Q_;c.pY=a;Vj(d,b,g,c);W(f,d);}
function Up(a,b){var c,d,e,f,g,h;c=b.data;d=By();e=Cv(c[0]);f=new M;O(f);G(G(f,B(171)),e);Bu(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((RQ(b,1)).g7));d=By();e=Cv(c[1]);if(b===null)f=B(29);else{f=new M;O(f);BZ(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BZ(f,B(44));T(f,c[g]);g=g+1|0;}BZ(f,B(45));f=N(f);}h=new M;O(h);G(G(G(G(h,B(172)),e),B(173)),f);Bu(d,N(h));}
function WJ(){var a=this;C$.call(a);a.dI=null;a.eN=null;a.j5=null;a.pk=null;a.k8=null;}
function AKr(a,b){b=b/5.0;Jo(b-(b|0),1.0,1.0,1.0,a.eN.bQ);return 0;}
function AEN(a){R$(a);DE(a.dI,a.bl.bj,a.pk,0,0,0.5);T1(a.eN,a.bl.bj,a.j5,0,0,0.0);NN(a.bl.bj,B(154));}
function ANh(a,b,c){var d,e,f;SG(a,b,c);Bf(a.eN.N,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dI;e=d.N;f=b.b;d=d.x;Bf(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Sb(){var a=this;C$.call(a);a.f5=null;a.rj=null;a.jF=null;a.h8=null;a.hi=null;}
function AQ5(a){var b,c,d,e,f,g;R$(a);b=a.bl.bj;c=a.h8;Lz(b,c.b,c.a,a.hi);b=a.f5;c=a.rj;d=a.gk;e=a.bl.bj;f=0;while(true){g=0;while(true){DE(b,e,c,g,f,0.5);g=g+Ce(c)|0;if(g>=d.b)break;}f=f+C4(c)|0;if(f>=d.a)break;}Is(a.bl.bj);}
function AGs(a,b,c){SG(a,b,c);Bf(a.hi,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function OH(){var a=this;CC.call(a);a.d7=null;a.jy=null;a.e4=null;a.bZ=null;a.ew=0;a.ht=null;a.ex=0;a.wm=20;a.xR=11;a.v5=220;a.iR=null;a.wJ=5000;a.gm=0;a.ff=null;}
function AQ8(a){var b,c,d,e,f,g,h;b=a.ht;c=a.ex;d=a.iR;In(b,c,0,d.a,5000,d.b,20);CJ(a.d7,1);PU(a.ht,a.d7);if(a.bZ===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.jy,C0(e),0.0,c);}b=CT(a.d7);a.bZ=b;CM(b,a.jy);}if(a.ex<=a.ew)while(true){f=a.ew;if(f<=a.ex)break;a.ew=f-20|0;b=a.e4;g=a.gm-1|0;a.gm=g;Ch(b,C0(g),0.0,20.0);HV(a.bZ,a.e4,0,a.ew%220|0);Eu(a.e4);}else while(a.ew<(a.ex-20|0)){b=a.e4;g=a.gm+1|0;a.gm=g;Ch(b,C0((g+11|0)-1|0),0.0,20.0);HV(a.bZ,a.e4,0,a.ew%220|0);Eu(a.e4);a.ew=a.ew+20|0;}b=Fd(0,0,Ce(a.bZ),C4(a.bZ));HD(b,
0,0,Ce(a.bZ),C4(a.bZ));F_(b,a.ff.data[0]);Hy(b,a.ff.data[1]);DE(b,a.d7,a.bZ,400,0,1.0);g=a.ex%220|0;f=Y(C4(a.bZ)-g|0,200);d=Fd(0,0,Ce(a.bZ),f);HD(d,0,g,Ce(a.bZ),f);F_(d,a.ff.data[0]);Hy(d,a.ff.data[1]);DE(d,a.d7,a.bZ,0,0,1.0);h=Fd(0,f,Ce(a.bZ),(C4(a.bZ)-f|0)-20|0);HD(h,0,0,Ce(a.bZ),(C4(a.bZ)-f|0)-20|0);F_(h,a.ff.data[1]);Hy(h,a.ff.data[0]);DE(h,a.d7,a.bZ,0,0,1.0);}
function AIE(a,b,c){Cy(a.iR,b);}
function AG7(a,b){return 0;}
function RK(a){return 5000-a.iR.a|0;}
function Io(){C$.call(this);this.dw=0;}
function Q8(a){var b,c;b=a.bl.b0;c=new P9;c.ml=a;QH(b,c,Ru(a));}
function Mv(a){var b,c,d,e;b=a.dw+1|0;a.dw=b;c=HZ(E(Io));d=new M;O(d);G(G(T(G(d,B(174)),b),B(36)),c);e=N(d);c=a.bl.b0;d=new T5;d.pC=e;Uf(c,e,d,Ru(a));}
function Ru(a){var b;b=new VD;b.ok=a;return b;}
function AOi(a,b,c,d){a:{switch(c){case 0:break;case 2:Mv(a);break a;default:break a;}Q8(a);}return 1;}
function P2(){var a=this;CC.call(a);a.m3=null;a.eY=null;a.k$=null;a.hO=null;}
function AQZ(a){var b;b=a.bl.bj;Gy(b,a.m3);DE(a.eY,b,a.k$,0,0,0.5);}
function ALs(a,b,c){var d,e,f;d=a.eY;e=d.N;f=b.b;d=d.x;Bf(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Wi(){var a=this;CP.call(a);a.gu=null;a.d1=null;a.iX=null;a.iY=null;a.sC=null;}
function AJC(a,b,c){if(b===0.0)NF(a);}
function ARm(a){var b;E3(a);b=a.bl.bj;IZ(a.d1,b);Ih(a.gu);}
function NF(a){Ww(a,a.iX);Ww(a,a.iY);a.iX=M0(a,0.5,0,B(175));a.iY=M0(a,1.0,1,B(176));IM(a.d1,a.iX);IM(a.d1,a.iY);WW(a);}
function Ww(a,b){if(b!==null){J4(a.d1,b);JQ(b);}}
function M0(a,b,c,d){var e,f,g;e=ABt(a.s);f=new VS;g=new Pm;g.sG=a;g.sH=e;g.sF=d;TH(f);f.hG=new B2;f.kW=new Bm;f.rP=g;f.pz=b;if(c)f=Ze(f,a.s);LN(e,f);e.ea=FX();return e;}
function ANA(a,b,c){GT(a,b,c);PP(a.d1,b,c);WW(a);}
function WW(a){var b;b=a.s.b6;Fm(a.iY,BV((b.b*2|0)/10|0,(b.a*2|0)/10|0),BV((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fm(a.iX,BV(b.b/10|0,b.a/10|0),BV((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AKn(a,b){return Oe(a.d1,b);}
var Rb=F(Ku);
function AJH(a){return Xw(1);}
function ALw(a,b,c){ZZ(a,b,c);}
var Hg=F(0);
function Mh(){var a=this;C.call(a);a.iE=null;a.h4=null;}
function Ms(a,b){var c;c=a.h4;a.h4=b;return c;}
function Ji(){var a=this;Mh.call(a);a.bJ=null;a.bW=null;a.fe=0;a.fm=0;}
function JD(a){var b;b=KU(a);if(b==2){if(KU(a.bW)<0)a.bW=M9(a.bW);return OE(a);}if(b!=(-2))return a;if(KU(a.bJ)>0)a.bJ=OE(a.bJ);return M9(a);}
function KU(a){var b,c;b=a.bW;c=b===null?0:b.fe;b=a.bJ;return c-(b===null?0:b.fe)|0;}
function M9(a){var b;b=a.bJ;a.bJ=b.bW;b.bW=a;Eh(a);Eh(b);return b;}
function OE(a){var b;b=a.bW;a.bW=b.bJ;b.bJ=a;Eh(a);Eh(b);return b;}
function Eh(a){var b,c,d;b=a.bW;c=b===null?0:b.fe;b=a.bJ;d=b===null?0:b.fe;a.fe=Z(c,d)+1|0;a.fm=1;b=a.bJ;if(b!==null)a.fm=1+b.fm|0;b=a.bW;if(b!==null)a.fm=a.fm+b.fm|0;}
var ADv=F();
function AFR(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new O0;c=c.buffer;d.fd=c;d.lP=new $rt_globals.Int8Array(c);d.jz=new $rt_globals.Uint16Array(c);d.sc=new $rt_globals.Int32Array(c);d.oZ=new $rt_globals.Float32Array(c);d.pg=new $rt_globals.Float64Array(c);e=d.fd.byteLength;c=new M;O(c);T(G(c,B(177)),e);CF(N(c));e=b.callToCpp1();c=new M;O(c);T(G(c,B(178)),e);CF(N(c));f=b.callToCpp2();c=new M;O(c);Fj(G(c,B(179)),f);CF(N(c));c=MU(d,b.getC8String());g=new M;O(g);G(G(g,B(180)),c);CF(N(g));c
=M3(d,b.getC16String());g=new M;O(g);G(G(g,B(181)),c);CF(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.fd,h,8));c=ACh(i);g=new M;O(g);G(G(g,B(182)),c);CF(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.fd,h,8));c=AOD(j);g=new M;O(g);G(G(g,B(183)),c);CF(N(g));k=AAr(d,b.getCDoubleArray8(),8);l=ARo(k);c=new M;O(c);G(G(c,B(184)),l);CF(DT(c));l=ARc(b.getC8String(),B(185),d);c=LP();G(G(c,B(186)),l);CF(DT(c));l=ALj(b.getC16String(),B(187),
d);c=LP();G(G(c,B(188)),l);CF(DT(c));c=ANc(i,d,b.getCIntArray8(),E4([11,22,33,44,55,66,77,88]));g=LP();G(G(g,B(189)),c);CF(DT(g));c=AOV(j,d,b.getCFloatArray8(),100,E4([111,222,333,444,555,666,777,888]));g=LP();G(G(g,B(190)),c);CF(DT(g));b=AO_(k,d,b.getCDoubleArray8(),1000,E4([1111,2222,3333,4444,5555,6666,7777,8888]));c=LP();G(G(c,B(191)),b);CF(DT(c));}
function AOV(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(192);h=0;i=e;a:{while(h<g){if(Dd(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.oZ[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(193);}return B(194);}
function AO_(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(192);h=0;i=e;a:{while(h<g){if(He(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.pg[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(193);}return B(194);}
function ANc(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(192);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.sc[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(193);}return B(194);}
function ARc(b,c,d){var e,f,g,h;e=MU(d,b);if(!Bo(c,e))return B(195);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lP[h])return B(196);f=f+1|0;}return B(193);}
function ALj(b,c,d){var e,f,g,h;e=M3(d,b);if(!Bo(c,e))return B(195);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jz[h>>>1|0]&65535))return B(196);f=f+1|0;}return B(193);}
function CF(b){OX(B(2),b);}
function AKa(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function ACm(){var a=this;C.call(a);a.dX=null;a.dK=null;a.di=null;a.b7=null;a.Z=null;}
function AM5(a){var b=new ACm();AJ6(b,a);return b;}
function AJ6(a,b){a.dK=ADX();a.dX=b;a.b7=MO(b);}
function PA(a,b){var c;a.Z=b;c=a.di;if(c!==null)c.ea=b.S;H1(a.b7,b.S,b.qc);}
function V5(a){IZ(a.dK,a.dX.cT);Ih(a.b7);}
function ANV(a,b){return !Y$(a.dK,b)&&!Kr(a.b7,b)?0:1;}
function ARx(a,b,c,d){return !AA3(a.dK,b,c,d)&&!Je(a.b7,b,c,d)?0:1;}
function AFX(a,b,c){var d;d=I_(a.b7,b,c);if(d!==null)return d;return X8(a.dK,b,c);}
function AMo(a,b,c){return !ADW(a.dK,b,c)&&!DJ(a.b7)?0:1;}
function U9(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=AM7();i=c.i;j=0;while(j<i){if(f===null){k=(Bs(c,j)).bs;l=RN(EI(B3(g.g,k)));m=Vy(g.fL);}else{n=f.data;k=n[j].jN.ku;l=!C2(g.fL,n[j].hT)?B(31):RN(EI(B3(g.g,k)));m=Vy(n[j].hT);}if(I(l)>153){o=B9(l,0,150);n=new M;O(n);G(G(n,o),B(197));l=N(n);}if(I(m)>153){o=B9(m,0,150);n=new M;O(n);G(G(n,o),B(197));m=N(n);}p=C0(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bs(c,j);}if(f!==null){q=new Uj;q.mX=d;q.mW=o;}else{q=new Ul;q.u4=d;q.uZ=n;}M6(h,
m,p,l,q);j=j+1|0;}r=QI(h);if(a.di!==null)T0(a);c=new QO;n=a.dX;o=new Sq;o.oh=a;o.og=d;AAb(c,n,o);VP(c,r);d=a.Z;XE(c,d.S,d.sI);a.di=ABt(a.dX);d=Ze(c,a.dX);n=a.Z.S;Qs(d,n.ls,n.jV);LN(a.di,d);d=a.di;n=new M;O(n);G(G(n,B(198)),e);Iw(d,N(n),a.Z.o_,4.0);d=a.di;d.ea=a.Z.S;IM(a.dK,d);d=a.di;s=(d.R.r.a+CA(d.bp,2.0)|0)+CA(a.dX,2.0)|0;i=(c.dH+c.dJ|0)+c.fJ|0;t=CA(c.ct,5.0);e=BV(Et(t,b.b,c.ct.b6.b-i|0),Et(s,b.a,c.ct.b6.a-c.cC.a|0));Th(c);Zu(c);s=(c.dH+c.dJ|0)+c.fJ|0;b=c.ct;i=(b.b6.b-e.b|0)-CA(b,5.0)|0;b=c.ct;t=(b.b6.a-e.a
|0)-CA(b,5.0)|0;d=BV(Y(s,i),Y(c.cC.a,t));Fm(a.di,e,d);FO(a.dX,c);}
function T0(a){J4(a.dK,a.di);JQ(a.di);a.di=null;}
function Nq(a,b){var c;c=new Sg;c.te=a;c.ti=b;return c;}
function Ky(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DJ(a.b7)){g=a.b7;h=b.h;b=new SP;b.V=a;b.bG=c;b.n5=f;b.hD=e;b.io=d;i=PK();e=b.bG.e;d=Do(e);e=GX(e);f=b.bG.ej;if(Vw(f,d,e)!==null){j=b.V.Z.S.be;k=new Rs;k.nE=b;k.nD=h;D5(i,B(199),j,k);}if(KQ(f,d,e)!==null){j=b.V.Z.S.be;k=new Rr;k.oQ=b;k.oS=h;D5(i,B(200),j,k);}if(Nn(f,d,e)!==null){e=b.V.Z.S.be;f=new Rp;f.mV=b;f.mY=h;D5(i,B(201),e,f);}e=b.V.Z.S.be;f=new Rq;f.uL=b;f.uM=h;D5(i,B(202),e,f);if(!b.bG.fb){e=b.V.Z.S.be;f=new Pq;f.th=b;D5(i,B(203),e,f);}e=b.V.Z.S.be;f
=new Po;f.p0=b;D5(i,B(204),e,f);if(!b.bG.fb&&Xp(Iu(b))){e=b.V.Z.S.be;f=new Pr;f.sk=b;D5(i,B(205),e,f);}l=b.V.Z.S.be;d=PK();m=b.V.Z.S.be;n=R(C6,3);o=n.data;k=b.io;BD(k);e=new SJ;e.nK=k;o[0]=D6(B(206),m,e);k=b.V.Z.S.be;p=b.io;BD(p);e=new SK;e.rc=p;o[1]=D6(B(207),k,e);e=b.V.Z.S.be;j=b.io;BD(j);k=new SI;k.uU=j;o[2]=D6(B(208),e,k);Jt(d,B(209),m,FQ(n),AVu);f=b.V.Z.S.be;n=R(C6,2);o=n.data;k=b.hD;BD(k);j=new N_;j.rC=k;o[0]=D6(B(210),f,j);j=b.V.Z.S.be;k=b.hD;BD(k);p=new N$;p.qr=k;o[1]=D6(B(211),j,p);GH(d,B(212),f,FQ(n));f
=b.V.Z.S.be;j=new U6;j.q2=b;Jt(d,B(213),f,j,AVu);GH(i,B(214),l,Ho(d));k=b.V.Z.S.be;d=PK();GH(d,B(215),b.V.Z.S.be,AEc(b));f=b.V.Z.S.be;m=new V0;m.sy=b;D5(d,B(216),f,m);GH(i,B(217),k,Ho(d));Ga(g,h,Ho(i),Nq(a,c));}}
function AKS(a,b,c,d){return Lb(a.dK,b,c,d);}
function YD(b){var c;c=new VR;c.tA=b;return c;}
var HN=F(0);
function AGW(a){}
function ARE(a){}
function AAs(){var a=this;C.call(a);a.bh=null;a.cx=null;a.co=null;a.T=null;a.ie=null;a.q_=0;a.lk=null;a.cK=null;a.y=0;a.w=0;a.gT=0;a.kH=0;a.fR=0;a.iM=null;a.eI=null;a.cw=null;a.W=0;a.e=null;a.ej=null;a.q=null;a.fn=null;a.ep=null;a.lT=null;a.ge=null;a.tC=0;a.rK=0;a.rG=0;a.cS=0;a.c$=0;a.cH=0;a.gL=null;a.ef=null;a.ec=null;a.bm=0;a.cE=0;a.gY=0;a.hP=0;a.hE=0;a.vI=0;a.va=0;a.i8=0;a.kB=0;a.dQ=null;a.hA=0;a.hz=0;a.eH=null;a.fb=0;a.bT=0;a.h3=null;a.hS=null;a.vn=null;a.gF=null;a.np=null;a.uW=null;a.kD=0;a.q8=null;a.eK
=El;a.s5=null;a.tu=null;}
function ADr(a,b){var c=new AAs();AJA(c,a,b);return c;}
function AJA(a,b,c){var d,e,f,g;a.bh=new Bm;a.cx=new Bm;a.q_=0;a.lk=R(Bi,10);a.cK=AMl();a.fR=16;a.iM=B(125);a.cw=R(K7,4);d=new Iq;e=new HM;e.d9=Gx();e.et=Gx();e.fc=Cn();e.C=MP(B(31));e.fu=0;e.cr=0;e.c8=T2(e);d.g=e;d.iL=B(147);d.fL=null;a.e=d;f=new VO;f.mQ=CH(R(Me,0));f.st=CH(R(Me,0));f.sO=CH(R(MA,0));f.oi=CH(R(P3,0));f.md=CH(R(GU,0));f.rd=CH(R(Rj,0));a.ej=f;a.q=AMR();e=new Nl;e.eD=R(Jb,16);e.eE=0;e.db=(-1);a.fn=e;a.ge=R(ET,0);a.rG=100;a.gL=BV(1,0);a.ef=Hn();a.ec=Hn();a.bm=0;a.cE=0;a.gY=0;a.hE=1;a.i8=1;a.kB=
3;a.dQ=ABx();a.eH=B(218);a.fb=0;a.bT=0;a.h3=null;a.hS=Cn();e=LH();BD(e);f=new UH;f.xF=e;a.gF=f;a.q8=new B2;e=new UG;e.qY=a;a.s5=e;e=new UC;e.nm=a;a.tu=e;a.co=b;a.T=b.cT;a.ie=c;g=a.lk.data;b=new UB;b.s4=a;g[0]=b;b=new UE;b.rk=a;g[1]=b;b=new UD;b.nJ=a;g[2]=b;b=new U4;b.tq=a;g[3]=b;b=new U3;b.qk=a;g[4]=b;AEQ();a.hP=AVv===AVw?0:1;}
function LE(a,b,c,d){Cy(a.bh,b);Cy(a.cx,c);RR(a,b,c,d);}
function Qw(a,b,c){a.np=b;a.uW=c;}
function RR(a,b,c,d){var e;a.cS=B$(a.rG,d);a.c$=B$(1.0,d);a.cH=B$(10.0,d);if(!a.bT)Cy(a.co.dP,a.bh);else Bf(a.co.dP,(b.b+c.b|0)-Lm(a)|0,b.a);Vh(a.dQ,a.co.dP,Lm(a),c.a,d);b=a.cK;e=B$(2.0,d);b.dL.x.b=e;TU(a,a.iM,a.fR);VA(a);}
function AHN(a){a.kH=1;LG(a);}
function AGt(a){a.kH=0;}
function LG(a){Sj(a.cK,Jj(Ck(a)));}
function Lg(a,b){var c,d;a.ep=b;c=a.cK;d=b.cz.sW;BG(c.dL.bQ,d);c=a.ef;d=b.cz;Gd(c,d.lI,d.ln);c=a.ec;b=b.cz;Gd(c,b.lI,b.ln);}
function XW(a){K_(a,a.eI.lK,a.fR+1|0);}
function WA(a){var b;b=a.fR;if(b<=7)return;K_(a,a.eI.lK,b-1|0);}
function XX(a,b){K_(a,b,a.fR);}
function K_(a,b,c){if(a.co.bK!==0.0){TU(a,b,c);F2(Ck(a));}a.fR=c;a.iM=b;}
function TU(a,b,c){var d,e,f,g,h,i;d=B$(c,a.co.bK);e=a.eI;f=e!==null?e.oC:0;if(!(d==f&&C2(b,a.iM))){NT(a.dQ);g=a.ge.data;c=g.length;f=0;while(f<c){Qh(g[f]);f=f+1|0;}g=a.e.g.C.data;c=g.length;f=0;while(f<c){Ee(g[f]);f=f+1|0;}g=a.cw.data;c=Hi(0,0);e=a.T;h=d;g[c]=GP(e,b,h,400,0);a.cw.data[Hi(0,1)]=GP(a.T,b,h,400,2);a.cw.data[Hi(1,0)]=GP(a.T,b,h,700,0);a.cw.data[Hi(1,1)]=GP(a.T,b,h,700,2);e=a.cw.data[Hi(0,0)];a.eI=e;c=E0(e);a.W=Dd(c*1.25);a.cK.dL.x.a=E0(a.eI);a.lT=CG(a.lT,CK(a.T,1024,a.W));f=a.W;i=SB(a.cK);e=new M;O(e);b
=G(G(e,B(219)),b);BB(b,32);T(G(T(G(T(G(T(b,d),B(220)),c),B(135)),f),B(221)),i);$rt_globals.console.info($rt_ustr(N(e)));if(AVx){c=Ld(a.eI,a.W);b=new M;O(b);T(G(b,B(222)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gT=GY(Fs(a),a.w,a.T.cA,a.cw);GQ(a);VA(a);}}
function UX(a){return Bd(CB(a.e.g)+5|0,a.W);}
function Ip(a){return Z(UX(a)-a.cx.a|0,0);}
function Kf(a){return Z(a.gY-Dc(a)|0,0);}
function Dc(a){var b;b=!a.bT?0:Di(a)+a.cH|0;return (a.cx.b-a.cS|0)-b|0;}
function Lm(a){return a.bT?a.cS:a.cS-a.cH|0;}
function DI(a){return a.cx.a;}
function K0(a,b){var c,d,e;c=a.e.g;d=c.fu;e=c.cr;d=d!=e&&b-c.pf>0.03125?1:0;if(d&&a.kD!=e){a.kD=e;SE(a);}d=Hz((a.bm+a.vI|0)-a.va|0,Ip(a));e=a.bm==d?0:1;if(e)E7(a,d);return !SQ(a.cK,b)&&!e&&!a.q_?0:1;}
function E7(a,b){var c,d;c=Hz(b,Ip(a));if(c!=a.bm){a.bm=c;d=a.uW;if(d!==null)d.hI(c);}}
function H_(a,b){var c,d;c=Hz(b,Kf(a));if(c!=a.cE){a.cE=c;d=a.np;if(d!==null)d.hI(c);}}
function L$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;b=Iv(a.cx.a,a.W)+7|0;c=a.ge.data;d=c.length;if(d<b){a:{e=a.tC;f=a.rK;g=a.e.g;h=R(ET,b);b=0;if(d>0){i=h.data;while(true){if(e>f)break a;j=B3(g,e);k=e%i.length|0;l=e%d|0;m=c[l];if(m.bS===j&&i[k]===null){i[k]=m;c[l]=null;}e=e+1|0;}}}i=h.data;f=0;k=i.length;while(f<k){if(i[f]===null){if(b>=d)g=null;else{e=b+1|0;g=c[b];b=e;}while(b<d&&g===null){e=b+1|0;g=c[b];b=e;}if(g!==null){i[f]=g;c[b-1|0]=null;}else{g=new ET;g.bR=3;g.em=Cn();g.c6=0;i[f]=g;}}f=f+1|0;}while
(b<d){g=c[b];if(g!==null)Qh(g);b=b+1|0;}a.ge=h;}CJ(a.T,0);g=a.T;j=a.bh;m=a.cx;Lz(g,j.b,j.a,m);d=(a.W-SB(a.cK)|0)/2|0;e=(a.gT-(P$(a.cK)/2|0)|0)-a.cE|0;n=!a.bT?a.cS:(a.c$+a.cH|0)+Di(a)|0;PI(a.cK,n+e|0,(d+Bd(a.y,a.W)|0)-a.bm|0);f=CB(a.e.g);k=K5(a);l=UU(a);a.tC=k;a.rK=l;o=a.co.dP;Bf(o,Dc(a),a.W);p=!a.bT?a.bh.b+a.cS|0:((a.bh.b+a.c$|0)+a.cH|0)+Di(a)|0;q=k;while(q<=l&&q<f){m=B3(a.e.g,q);r=QZ(a,q);ABp(r,m,a.lT,a.cw,a.T,a.W,Dc(a),a.cE);s=r.bS;a.gY=Z(a.gY,EZ(m)+(40.0*a.co.bK|0)|0);t=Bd(a.W,q)-a.bm|0;ACo(r,a.bh.a+t|0,
p,a.T,a.q8,o,!a.hP?0.0:0.5,Dc(a),a.W,a.cE,a.ep,ADa(a,q,s),a.h3,a.hS);q=q+1|0;}q=k;while(q<=l&&q<f&&a.i8){g=QZ(a,q);t=Bd(a.W,q)-a.bm|0;j=!ZE(a.q,q)?a.ep.cz.n1:a.ep.cz.kz;ABY(g,a.T,p,a.bh.a+t|0,a.W,o,a.cE,Dc(a),j);q=q+1|0;}if(a.kH&&e>=(( -P$(a.cK)|0)/2|0)){g=a.cK;j=a.cx;if(Y5(g.dL.N,0,0,j))U0(a.cK,a.T,a.bh);}if(a.hE){u=Y(l+1|0,f);ABu(a,Bd(a.W,u)-a.bm|0);}ZA(a);AAG(a,k,l);AB$(a);ACN(a);Is(a.T);}
function ADa(a,b,c){var d,e,f,g;a:{d=a.q;e=D3(d);d=Fx(d);f=e.J;if(f<=b){g=BE(b,d.J);if(g<=0){d=BV(b<=f?e.ba:0,g>=0?d.ba:(-1));break a;}}d=null;}if(d!==null){if(d.a==(-1))d.a=c.Q;d.b=GY(c,d.b,a.T.cA,a.cw);d.a=GY(c,d.a,a.T.cA,a.cw);}return d;}
function AAG(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cx.a;e=Y(d,Bd(CB(a.e.g),a.W)-a.bm|0);f=a.dQ;g=a.bm;h=a.y;i=a.T;j=a.ep.p8;JW(f,i,b,d);Xy(f,b);Qt(f,g,e,j,i);if(e<d){k=f.fG;Bz(i,k.b,k.a+e|0,BV(f.e0.b,d-e|0),j.g4);}if(b<=h&&h<=c){c=h/20|0;k=f.cv;k=Bs(k,c%k.i|0);l=f.fG;c=Bd(f.cv.i,f.ia);b=k.eu.a;d=((k.iJ.a-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C4(k.bY)|0)|0;b=h%k.dF|0;e=k.er;d=d+Bd(b,e)|0;if(d<( -e|0))d=d+c|0;Bf(k.f8,k.eu.b,e);m=k.fz;b=h%k.dF|0;c=k.er;CE(m,0.0,Bd(b,c),k.eu.b,c);IU(k,i,d,l,j.ol,j.t1);}}
function K5(a){return Y(a.bm/a.W|0,CB(a.e.g)-1|0);}
function UU(a){return Y(((a.bm+DI(a)|0)-1|0)/a.W|0,CB(a.e.g)-1|0);}
function VA(a){TA(a.dQ,a.cw.data[0],a.W,a.T);JW(a.dQ,a.T,K5(a),DI(a));}
function QZ(a,b){var c;c=a.ge.data;return c[b%c.length|0];}
function AD4(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dq(a.q))C9(a,a.eH);else{b=D3(a.q);c=Fx(a.q);d=c.J;e=b.J;f=(d-e|0)+1|0;g=BI(f);h=g.data;i=R(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eH;e=e+1|0;k=f;}l=ER(a.y,a.w);m=new PQ;m.mZ=a;Pe(a,g,0,0,i,l,m);b.ba=b.ba+I(a.eH)|0;c.ba=c.ba+I(a.eH)|0;LY(a,a.w+I(a.eH)|0,0);DY(a);}return 1;}
function ABS(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dq(a.q)){b=B3(a.e.g,a.y);if(b.p.data.length>0){c=RL(a,b);if(c===null)return 1;d=a.e.g;e=a.y;f=ER(e,a.w);d.cr=d.cr+1|0;g=d.fc;h=R(G0,1);h.data[0]=AEU(e,0,1,c,f.bs,f.bC);BY(g,h);JA(d,e,0,1,c);FR(b,0,I(c));LY(a,a.w-I(c)|0,0);}}else{f=D3(a.q);c=Fx(a.q);i=c.J;j=f.J;i=(i-j|0)+1|0;k=BI(i);h=k.data;l=R(Bv,i);m=l.data;e=a.w;n=a.y;o=0;while(j<=c.J){b=B3(a.e.g,j);if(b.p.data.length>0){b=RL(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=ADT(k,o);h=Dl(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.J)f.ba=Z(0,f.ba-I(b)|0);if(j==c.J){c.ba=Z(0,c.ba-I(b)|0);LY(a,a.w-I(b)|0,0);}i=i+1|0;}f=ER(n,e);b=new MV;b.nG=a;Pe(a,p,0,1,h,f,b);}DY(a);return 1;}
function RL(a,b){var c,d,e,f;c=Et(0,I(a.eH),W6(b));if(!c)b=null;else{b=B(60);if(c<0){b=new BC;V(b);J(b);}if(c!=1){d=b.bV.data.length;if(d&&c){e=BR(Bd(d,c));d=0;f=0;while(f<c){PB(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Mf(e);}else b=AUs;}}return b;}
function Pe(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BI(i);k=ATX(i).data;Ht(j,c);c=0;l=k.length;if(c>l){f=new BC;V(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.g;o.cr=o.cr+1|0;p=R(G0,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AEU(h[m],n[m],k[m],b[m],f.bs,f.bC);m=m+1|0;}BY(o.fc,p);c=0;while(c<i){b=e.data;JA(o,h[c],n[c],k[c],b[c]);g.lR(FY(h[c]),b[c]);c=c+1|0;}}
function ADn(a){var b,c,d,e,f,g,h,i;if(Dq(a.q))GF(a);Ee(B3(a.e.g,a.y));b=a.e.g;c=a.y;d=a.w;e=b.C;f=e.data;g=f[c];e=Dl(e,f.length+1|0);f=e.data;b.C=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DP(R(B6,0));b.C.data[c+1|0]=g;}else if(d==g.Q){f[c]=g;f[c+1|0]=DP(R(B6,0));}else{f=(Iz(g,d)).data;e=b.C.data;e[c]=f[0];e[c+1|0]=f[1];}Gu(b,c,d,0,B(223));DY(a);return Cz(a,a.y+1|0,0,0);}
function AC3(a){if(Dq(a.q))GF(a);else O6(a.e.g,a.y,a.w);GQ(a);DY(a);return 1;}
function Yi(a){var b,c,d;if(Dq(a.q)){GF(a);return 1;}b=a.w;if(!b&&!a.y)return 1;if(b){c=a.y;b=b-1|0;O6(a.e.g,c,b);}else{c=a.y-1|0;b=Fk(a.e.g,c);d=a.e.g;K2(d,c);Gu(d,c,Fk(d,c),1,B(223));}DY(a);return Cz(a,c,b,0);}
function C9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.fb)return 0;if(Dq(a.q))GF(a);c=LV(U5(b,B(224),B(31)),B(223),(-1));d=c.data;b=a.e.g;e=a.y;f=a.w;XQ(b,e,f,c);g=d.length;if(!g)h=AUs;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BR(i+Bd(g-1|0,I(B(223)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(223))){m=l+1|0;c[l]=L(B(223),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Mf(k);}Gu(b,e,f,0,h);e=a.y;m=(e+g|0)-1|
0;Cz(a,m,m!=e?I(d[g-1|0]):a.w+I(d[0])|0,0);E6(a);DY(a);return 1;}
function GF(a){var b,c,d;b=D3(a.q);c=a.e.g;d=a.q;Tp(c,d,VX(c,d));Cz(a,b.J,b.ba,0);E6(a);DY(a);}
function E6(a){var b;b=a.q;b.cY=0;B1(b.bM,a.y,a.w);B1(a.q.bD,a.y,a.w);}
function Di(a){return a.eI.lx|0;}
function ABu(a,b){var c,d,e;c=a.cx.a;if(b<c){d=a.co.dP;d.a=c-b|0;d.b=!a.bT?Dc(a):Dc(a)+a.c$|0;e=!a.bT?a.bh.b+a.cS|0:(a.bh.b+a.cH|0)+Di(a)|0;Bz(a.T,e,a.bh.a+b|0,d,a.ep.cz.go);}}
function AB$(a){var b;b=a.bT?a.bh.b+Di(a)|0:a.bh.b+a.cx.b|0;In(a.ef,a.bm,a.bh.a,DI(a),UX(a),b,Di(a));b=!a.bT?a.bh.b+a.cS|0:((a.bh.b+a.c$|0)+a.cH|0)+Di(a)|0;Mo(a.ec,a.cE,b,Dc(a),a.gY,a.bh.a+DI(a)|0,Di(a));}
function ACN(a){var b,c;b=PG(a.ef);c=PG(a.ec);if(!(!b&&!c)){CJ(a.T,1);if(b)FU(a.ef,a.T);if(c)FU(a.ec,a.T);if(b)Gc(a.ef,a.T);if(c)Gc(a.ec,a.T);}}
function ZA(a){var b,c,d,e;b=a.gL;c=a.cx;b.a=c.a;b.b=a.c$;d=!a.bT?a.cS-a.cH|0:(c.b-Lm(a)|0)-a.c$|0;b=a.T;c=a.bh;Bz(b,c.b+d|0,c.a,a.gL,a.ep.cz.uK);a.gL.b=!a.bT?a.cH-a.c$|0:a.cH+Di(a)|0;e=a.bT?0:(a.cS-a.cH|0)+a.c$|0;b=a.T;c=a.bh;Bz(b,c.b+e|0,c.a,a.gL,a.ep.cz.go);}
function Hz(b,c){return Y(Z(0,b),c);}
function HF(a,b){var c,d,e,f,g;b=b.data;a.hA=1;a.hz=1;c=Es(b[0]);d=FG(b[1]);e=(Es(b[2])).data[0];a.e.g=ABA(c,d);V7(a,AC9(e));Gq(Ck(a),AVy);F2(Ck(a));f=Kn(FC(),a.eK);g=new M;O(g);G(HR(G(g,B(225)),f),B(226));$rt_globals.console.info($rt_ustr(N(g)));}
function V7(a,b){var c,d;c=Do(a.e);if(!C2(c,b)){d=new M;O(d);G(G(G(G(d,B(227)),c),B(228)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.iL=b;}}
function Ck(a){return a.co.iv;}
function KG(a,b){var c,d,e,f,g,h,i;c=Ey(b);d=new M;O(d);G(G(d,B(229)),c);$rt_globals.console.info($rt_ustr(N(d)));Ns(Ck(a),Ey(b));Cz(a,0,0,0);a.eK=FC();a.hA=0;a.hz=0;e=new Iq;f=R(Bv,1);f.data[0]=B(31);Qm(e,f,null,AQD(B(31),B(31),Ey(b),null));a.e=e;Cz(a,0,0,0);c=Ey(b);g=FZ(c,46,I(c)-1|0);if(g!=(-1))c=Dk(c,g);h=!Bo(c,B(230))?5120:10240;c=new Rt;c.nB=a;c.nA=h;c.nz=b;i=b.eV;if(i!==null)Jv(c,Ju(b,i.size));else{i=b.gq.getFile();d=new Ts;d.lX=b;d.lY=c;b=new Tv;b.t5=c;i.then(Bk(d,"f"),Bk(b,"f"));}}
function Hw(a,b,c,d,e){if(Hp(a,e))return 1;if(c&&d)return 1;if(c)E7(a,a.bm+((Bd(b,a.W)*12|0)/10|0)|0);else if(!d){IE(a,a.y+b|0,e);Tj(a);}return 1;}
function T6(a,b,c,d){var e,f,g;if(Hp(a,d))return 1;e=Fs(a);if(!c)f=a.w+b|0;else if(b>=0)f=GR(e,a.w);else{f=a.w;if(!f)f=(-1);else{c=Ij(e,f);if(c>0&&e.dl.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dl.data[c-1|0];}}if(f>e.Q){if((a.y+1|0)<CB(a.e.g))Cz(a,a.y+1|0,0,d);}else if(f>=0)Dr(a,f,d);else{b=a.y;if(b>0){g=(B3(a.e.g,b-1|0)).Q;Cz(a,a.y-1|0,g,d);}}Ps(a);return 1;}
function Hp(a,b){if(Dq(a.q)&&!b){E6(a);GQ(a);return 1;}if(!(b&&Dq(a.q)))E6(a);return 0;}
function Cz(a,b,c,d){a.w=c;return IE(a,b,d);}
function IE(a,b,c){a.y=Et(0,b,CB(a.e.g)-1|0);return Dr(a,a.w,c);}
function Dr(a,b,c){a.w=Et(0,b,(Fs(a)).Q);a.gT=a.co.bK===0.0?0:GY(Fs(a),a.w,a.T.cA,a.cw);LG(a);GQ(a);if(c)a.q.cY=1;KH(a.q,a.y,a.w);a.q.cY=0;return 1;}
function LY(a,b,c){var d;d=Rx(a.q);Dr(a,b,c);a.q=d;}
function GQ(a){Tj(a);Ps(a);}
function Tj(a){var b,c,d,e,f;b=a.bm;c=b+DI(a)|0;d=a.y;e=a.W;d=Bd(d,e);f=d+e|0;if(d<(b+e|0))E7(a,d-e|0);else if(f>(c-e|0))E7(a,(f-DI(a)|0)+a.W|0);}
function Ps(a){var b,c,d,e,f;b=Dd(a.co.bK*30.0);c=a.cE;d=c+Dc(a)|0;e=a.gT;f=e+b|0;if(e<(c+b|0))H_(a,e-b|0);else if(f>(d-b|0))H_(a,(f-Dc(a)|0)+b|0);}
function Tr(a,b,c){var d,e,f,g,h,i,j,k,l;U1(a);d=a.e.g;e=DO(d.d9,c);if(e!==null)a.h3=J_(d,e);if(e!==null)c=e;a:{f=DO(d.et,c);if(f!==null){c=BS(f);while(true){if(!B4(c))break a;g=BX(c);BY(a.hS,J_(d,g));}}}h=b.bs;i=b.bC;b=a.ej;c=Do(a.e);d=GX(a.e);j=(Cp(b.oi)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.tE(c,d)){c=b.w5;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new MJ;b.vq=a;b.vr=d;b.vt=h;b.vv=i;c.r2(d,h,i,b,a.gF);}}
function Hx(a,b){var c;Cz(a,b.bs,b.bC,0);c=GR(Fs(a),a.w);B1(a.q.bD,a.y,c);B1(a.q.bM,a.y,a.w);}
function ES(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.bh;e=c-d.b|0;f=Et(0,((b.a-d.a|0)+a.bm|0)/a.W|0,CB(a.e.g)-1|0);g=!a.bT?a.cS:(a.c$+a.cH|0)+Di(a)|0;h=Z(0,(e-g|0)+a.cE|0);b=B3(a.e.g,f);d=a.T.cA;i=a.cw;if(!(b.d_!==null&&!b.fB))Lf(b,d,i);j=b.d_;e=b.p.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.Q;else{c=TT(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.p.data.length)k=b.Q;else{j=WD(b,d,i,c);k=0;e=0;while(e<c){k=k+I(b.p.data[e].t)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AVz){d=new M;O(d);T(G(T(G(T(G(d,B(231)),e),B(232)),h),B(233)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return ER(f,k);}
function Tg(a,b){var c;c=b.bs;a.y=c;a.w=b.bC;a.gT=GY(B3(a.e.g,c),a.w,a.T.cA,a.cw);LG(a);}
function Fs(a){return B3(a.e.g,a.y);}
function Jy(a,b,c){var d,e;d=Dd((a.W*4|0)*c/150.0);e=Dd(b);if(d)E7(a,a.bm+d|0);if(e)H_(a,a.cE+e|0);return 1;}
function UO(a,b,c){a.q.cY=0;return 1;}
function UW(a,b,c){var d,e,f;if(c)return null;d=Fe(a.ef,b.h,a.s5,1);if(d!==null)return d;d=Fe(a.ec,b.h,a.tu,0);if(d!==null)return d;IO(a);e=ES(a,b.h);f=HK(a.e.g,e.bs,e.bC);Tg(a,e);Tr(a,e,f);if(!b.bA){b=a.q;if(!b.cY)B1(b.bM,a.y,a.w);}b=a.q;b.cY=1;KH(b,a.y,a.w);b=new Td;b.t_=a;return b;}
function QC(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.ce){b=b.h;e=ES(a,b);f=HK(a.e.g,e.bs,e.bC);g=OC(a,f);h=KQ(a.ej,Do(a.e),GX(a.e));if(h!==null){f=a.e;c=e.bs;d=e.bC;e=new Sa;e.vS=a;e.vT=b;e.vR=g;h.r2(f,c,d,e,a.gF);}else{e=DO(a.e.g.d9,f);if(e!==null){Hx(a,e);c=1;}else{e=DO(a.e.g.et,f);if(e!==null&&!Eb(e)){if(e.i!=1){U9(a.ie,b,e,a,g);c=1;}else{Hx(a,Bs(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(ES(a,b.h)).bs;e=B3(a.e.g,c);c=GW(e,a.w);d=GR(e,a.w);b=UN(e,c);if((d-1|0)==e.Q){B1(a.q.bM,a.y,W6(e));B1(a.q.bD,
a.y,e.Q);}else{if(b!==null){b=b.t;i=0;c:{while(true){j=b.bV.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.w;if(c==i){c=GW(e,c-1|0);d=GR(e,c);}else{if(d!=i){P0(a.q,a.y);break b;}c=GW(e,d+1|0);d=GR(e,c);}}}B1(a.q.bM,a.y,c);a.q.cY=1;Cz(a,a.y,d,0);a.q.cY=0;IO(a);}}break a;case 3:break;default:break a;}P0(a.q,a.y);Xe(a.fn);IO(a);}}return 1;}
function Pj(a,b){var c,d,e,f,g,h,i,j,k;c=a.co.cy;if(Fp(a.ef,b.h,c))return 1;if(Fp(a.ec,b.h,c))return 1;d=a.dQ;if(F5(b.h,d.fG,d.e0)&&Hd(c)?1:0)return 1;e=b.h;f=!a.bT?a.bh.b+a.cS|0:((a.bh.b+a.cH|0)+a.c$|0)+Di(a)|0;a:{g=a.bh.a;h=Dc(a);i=DI(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Hd(c);if(b.ce){e=ES(a,b.h);e.bC=GW(B3(a.e.g,e.bs),e.bC);b=a.e.g;if(!NJ(b.d9,e)&&!NJ(b.et,e)?0:1)return DC(c,B(146));}return DC(c,B(147));}
function AMD(a,b){var c,d,e,f;c=b.ce;if(c&&b.bf==65){c=CB(a.e.g)-1|0;d=Fk(a.e.g,c);B1(a.q.bM,0,0);B1(a.q.bD,CB(a.e.g)-1|0,d);return 1;}if(c&&b.bf==80){J2(a);return 1;}if(!a.fb&&c&&b.bf==90){if(Dq(a.q))E6(a);b=a.e.g;b.cr=b.cr+1|0;e=b.fc;d=e.i;if(!d)e=null;else{f=(Ek(e,d-1|0)).data;e=Tf(b,f[0]);c=1;while(c<f.length){Tf(b,f[c]);c=c+1|0;}}if(e!==null){Cz(a,e.b,e.a,0);DY(a);}return 1;}if(!c&&!b.cV){if(Bo(b.dC,B(234))){C9(a,B(235));Dr(a,a.w-1|0,0);c=1;}else if(Bo(b.dC,B(236))){C9(a,B(237));Dr(a,a.w-1|0,0);c=1;}else if
(Bo(b.dC,B(43))){C9(a,B(238));Dr(a,a.w-1|0,0);c=1;}else if(Bo(b.dC,B(239))){C9(a,B(240));Dr(a,a.w-1|0,0);c=1;}else if(Bo(b.dC,B(241))){C9(a,B(242));Dr(a,a.w-1|0,0);c=1;}else if(!Bo(b.dC,B(243)))c=0;else{C9(a,B(244));Dr(a,a.w-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cV&&!b.ce)){d=b.bf;if(d>=48&&d<=57){c=d-48|0;e=a.lk.data[c];if(e!==null)e.o();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bf){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(AAH(a,b))return 1;if(a.fb)c=0;else c:{switch(b.bf){case 8:break;case 9:c=!b.bA?AD4(a):ABS(a);break c;case 13:c=ADn(a);break c;case 46:c=AC3(a);break c;default:c=0;break c;}c=Yi(a);}if(c)return 1;if(b.ce&&b.bf==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AI8(b.bf)&&b.bf!=27){if(!b.ce&&!b.cV&&!b.ix)return I(b.dC)>0&&C9(a,b.dC)?1:0;return 0;}return 0;}
function WB(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bo(B(138),Do(a.e))){b=Ck(a);c=new Tl;c.m4=a;d=R(C,3);e=d.data;e[0]=Gg(a.e.g);f=K5(a);g=UU(a);h=Z(0,f-100|0);f=Y(CB(a.e.g)-1|0,g+100|0);i=BI(3);j=i.data;j[0]=F8(a.e.g,h);k=a.e.g;l=0;f=Y(f+1|0,k.C.data.length);m=0;while(m<f){l=l+Fk(k,m)|0;if(m!=(k.C.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.g.c8;k=Cn();Wk(n,n.cP,k);i=BI(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bs(k,m);h=p+1|0;o[p]=q.bL;l=h+1|0;o[h]=q.bP;p=l+1|0;o[l]=q.e9;m=m+1|0;}e[2]
=i;C1(b,c,B(245),d);}}
function J2(a){var b,c,d,e;b=AA_(Do(a.e));if(b!==null){a.eK=FC();c=Ck(a);d=new QX;d.sh=a;e=R(C,1);e.data[0]=Gg(a.e.g);C1(c,d,b,e);}}
function SE(a){var b,c,d,e,f,g,h;b=a.e.g.c8;c=O8(b,b.cP);if(c===null)return;if(Bo(B(147),Do(a.e)))Pf(a.e.g);a:{d=E4([CV(c),C5(c),c.b3.e9]);e=Gg(a.e.g);f=BI(1);g=Do(a.e);h=(-1);switch(Lj(g)){case 3401:if(!Bo(g,B(246)))break a;h=3;break a;case 98723:if(!Bo(g,B(247)))break a;h=2;break a;case 3254818:if(!Bo(g,B(138)))break a;h=1;break a;case 3556653:if(!Bo(g,B(147)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Ck(a);c=new SM;c.uz=a;C1(b,c,B(248),H(C,[e,f,d]));}
function GC(a,b,c){var d,e,f,g,h,i;if(c&&a.fb)return 0;d=D3(a.q);e=d.J;if(Dq(a.q)){f=a.e.g;g=a.q;h=VX(f,g);if(c)Tp(f,g,h);if(c){Cz(a,d.J,d.ba,0);E6(a);DY(a);}}else{h=Fb(EI(a.e.g.C.data[e]),B(223));i=Y(CB(a.e.g)-1|0,e);B1(a.q.bD,i,0);if(e>=(CB(a.e.g)-1|0))B1(a.q.bD,i,Fk(a.e.g,i));else B1(a.q.bM,i+1|0,0);if(c)GF(a);else Cz(a,e,0,0);}b.n(h);return 1;}
function AAH(a,b){var c,d,e,f;a:{switch(b.bf){case 33:c=b.ce?IE(a,Iv(a.bm,a.W),b.bA):Hw(a,2-V9(DI(a),a.W)|0,0,b.cV,b.bA);break a;case 34:c=!b.ce?Hw(a,V9(DI(a),a.W)-2|0,0,b.cV,b.bA):IE(a,((a.bm+DI(a)|0)/a.W|0)-1|0,b.bA);break a;case 35:if(!Hp(a,b.bA)&&!Dr(a,(Fs(a)).Q,b.bA)){c=0;break a;}c=1;break a;case 36:if(!Hp(a,b.bA)&&!Dr(a,0,b.bA)){c=0;break a;}c=1;break a;case 37:c=b.ce;if(c&&b.cV){IO(a);d=a.fn;e=d.db;if(e<=0)d=null;else{f=d.eD.data;c=e-1|0;d.db=c;d=f[c];}if(d===null)c=1;else{Cz(a,IV(d),LL(d),0);a.q=Rx(d.lB);c
=1;}break a;}c=T6(a,(-1),c,b.bA);break a;case 38:c=Hw(a,(-1),b.ce,b.cV,b.bA);break a;case 39:c=b.ce;if(c&&b.cV){d=a.fn;c=d.db;if(c==(d.eE-1|0))d=null;else{f=d.eD.data;c=c+1|0;d.db=c;d=f[c];}if(d===null)c=1;else{Cz(a,IV(d),LL(d),0);a.q=Rx(d.lB);c=1;}break a;}c=T6(a,1,c,b.bA);break a;case 40:c=Hw(a,1,b.ce,b.cV,b.bA);break a;default:}c=0;}if(c&&b.bA)B1(a.q.bD,a.y,a.w);if(c)Tr(a,ER(a.y,a.w),HK(a.e.g,a.y,a.w));return c;}
function IO(a){var b,c,d,e,f,g,h;b=a.fn;c=b.db;b=c<0?null:b.eD.data[c];if(b!==null&&a.y==IV(b)&&a.w==LL(b))return;d=a.fn;b=new Jb;c=a.y;e=a.w;f=a.q;b.kU=ER(c,e);g=Rx(f);b.lB=g;g.cY=0;e=d.db;h=d.eE;if(e==(h-1|0))MQ(d,b);else{c=e+1|0;while(c<h){Xe(d);c=c+1|0;}MQ(d,b);}d.db=d.db+1|0;}
function DY(a){a.e.g.pf=Jj(Ck(a));}
function U1(a){a.h3=null;Hr(a.hS);}
function AA_(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Lj(b)){case 3401:if(!Bo(b,B(246)))break a;c=2;break a;case 98723:if(!Bo(b,B(247)))break a;c=1;break a;case 3254818:if(!Bo(b,B(138)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(249);break b;case 2:b=B(250);break b;default:b=null;break b;}b=B(251);}}return b;}
function OC(a,b){var c;c=J_(a.e.g,b);if(c===null)return B(31);return c.t;}
function DG(a,b){return F5(b,a.bh,a.cx);}
var HL=F(0);
function QN(){C.call(this);this.sw=null;}
function AJt(a,b){var c;c=a.sw;V_(c,c.P,c.O);}
function QL(){C.call(this);this.t0=null;}
function ALz(a,b){var c;c=a.t0;V_(c,c.O,c.P);}
function QM(){C.call(this);this.vW=null;}
function AEF(a,b){return b.bf!=121?0:1;}
function HG(){var a=this;C.call(a);a.jD=null;a.oq=null;a.l2=null;}
function AVA(a,b){var c=new HG();R5(c,a,b);return c;}
function AVB(a,b,c){var d=new HG();Vj(d,a,b,c);return d;}
function R5(a,b,c){Vj(a,b,null,c);}
function Vj(a,b,c,d){a.jD=b.b0;a.oq=c;a.l2=d;}
function AOw(a,b){var c,d;if(b.ce&&b.bf==79){c=a.oq;if(c!==null&&b.bA)VV(a.jD,c);else LR(a.jD,a.l2);d=1;}else d=0;return d;}
function QJ(){C.call(this);this.rM=null;}
function AEZ(a,b){var c;c=a.rM;c=DX(c.s,c.P)?c.P:!DX(c.s,c.O)?null:c.O;if(c!==null)KG(c,b);}
function QK(){C.call(this);this.mj=null;}
function ALd(a,b){var c,d,e,f;b=b;c=a.mj;if(DX(c.s,c.P)){d=c.ek;e=c.P;f=new Xz;f.oD=c;Ky(d,b,e,c,c,f);}if(DX(c.s,c.O)){d=c.ek;e=c.O;f=new XA;f.si=c;Ky(d,b,e,c,c,f);}return 1;}
function RY(){C.call(this);this.oc=null;}
function ALH(a,b){return ADS(a.oc,b);}
function R2(){C.call(this);this.tY=null;}
function AQE(a,b){KG(a.tY,b);}
function R1(){C.call(this);this.l1=null;}
function ALI(a,b,c){return GC(a.l1,b,c);}
function R0(){C.call(this);this.pe=null;}
function AQm(a){var b,c;b=a.pe.cG;BD(b);c=new XH;c.m9=b;return c;}
function RZ(){C.call(this);this.uP=null;}
function APL(a,b,c,d){return Jy(a.uP.cG,c,d);}
function R3(){C.call(this);this.mM=null;}
function AIQ(a,b){b=b;return YW(a.mM,b);}
function HQ(){var a=this;C.call(a);a.cz=null;a.S=null;a.up=null;a.p8=null;a.o_=null;a.qc=null;a.sI=null;}
function AVC(a,b,c,d){var e=new HQ();JS(e,a,b,c,d);return e;}
function Kg(){var b,c,d,e,f,g,h,i;b=new HQ;c=new IN;d=new G$;G9();JF(d,AVD);Kq(c,d,BL(AVm),BL(AVE),BL(AVF),BL(AVm),BL(AVG),BL(AVH),BL(AVI),BL(AVJ),BL(AVs));ABC();e=(AVK.eF()).data;f=e.length;g=R(Iy,f);h=g.data;i=0;while(i<f){h[i]=e[i].kX;i=i+1|0;}JS(b,c,g,AAq(),FX());return b;}
function ABH(){var b,c,d,e,f,g,h,i,j,k,l;b=new HQ;c=new IN;d=new G$;AMk();JF(d,AVL);Kq(c,d,BL(AVM),BL(AVN),BL(AVO),BL(AVM),BL(AVP),BL(AVQ),BL(AVR),BL(AVS),BL(AVT));ABa();e=(AVU.eF()).data;f=e.length;g=R(Iy,f);h=g.data;i=0;while(i<f){h[i]=e[i].kd;i=i+1|0;}j=AAw(S(B(252)),S(B(253)),S(B(254)),S(B(255)));k=new HY;l=new HA;AJf();d=AVV;JO(l,d,AVW,AVX,AVY,AVZ,d);K3(k,l,AAn(),Y1(S(B(256)),S(B(257)),S(B(258))),AAn(),Zh(1,0.17499999701976776),AV0,AV1);JS(b,c,g,j,k);return b;}
function AAK(){var b,c,d,e,f,g,h,i,j,k,l;b=new HQ;c=new IN;d=new G$;ABq();JF(d,AV2);Kq(c,d,BL(AV3),BL(AV4),BL(AV5),BL(AV3),BL(AV6),BL(AV7),BL(AV8),BL(AV9),BL(AV$));ZS();e=(AV_.eF()).data;f=e.length;g=R(Iy,f);h=g.data;i=0;while(i<f){h[i]=e[i].kO;i=i+1|0;}j=AAw(S(B(259)),S(B(260)),S(B(261)),S(B(262)));k=new HY;l=new HA;AN3();d=AWa;JO(l,d,AWb,AWc,AWd,AWe,d);K3(k,l,YL(),Y1(S(B(263)),S(B(264)),CY(0)),YL(),Zh(1,0.07500000298023224),AWf,AWg);JS(b,c,g,j,k);return b;}
function JS(a,b,c,d,e){var f;f=c.data;a.o_=EP(B(126),16.0);a.qc=EP(B(126),17.0);a.sI=EP(B(125),15.0);a.cz=b;a.up=c;a.p8=d;if(f.length>=15){a.S=e;return;}b=new BC;V(b);J(b);}
function IN(){var a=this;C.call(a);a.sW=null;a.go=null;a.uK=null;a.xD=null;a.n1=null;a.kz=null;a.pW=null;a.n4=null;a.ln=null;a.lI=null;}
function AWh(a,b,c,d,e,f,g,h,i,j){var k=new IN();Kq(k,a,b,c,d,e,f,g,h,i,j);return k;}
function Kq(a,b,c,d,e,f,g,h,i,j,k){a.sW=b;a.go=c;a.uK=d;a.xD=e;a.n1=f;a.kz=g;a.pW=h;a.n4=i;a.ln=j;a.lI=k;}
function B2(){var a=this;C.call(a);a.bk=0.0;a.bx=0.0;a.bg=0.0;a.by=0.0;}
function AQl(a){var b=new B2();AMh(b,a);return b;}
function CE(a,b,c,d,e){a.bk=b;a.bx=c;a.bg=d;a.by=e;}
function AMh(a,b){a.bk=b.bk;a.bx=b.bx;a.bg=b.bg;a.by=b.by;}
function BG(a,b){a.bk=b.bk;a.bx=b.bx;a.bg=b.bg;a.by=b.by;return a;}
function ARa(a,b){if(a===b)return 1;return b!==null&&Co(a)===Co(b)&&Kw(a,b)?1:0;}
function Kw(a,b){return b.bk===a.bk&&b.bx===a.bx&&b.bg===a.bg&&b.by===a.by?1:0;}
function It(){var a=this;C.call(a);a.N=null;a.x=null;a.bQ=null;a.b1=null;}
function AKI(){var a=new It();R7(a);return a;}
function SC(a,b,c,d){var e=new It();AHC(e,a,b,c,d);return e;}
function R7(a){a.N=new Bm;a.x=new Bm;a.bQ=new B2;a.b1=new B2;}
function AHC(a,b,c,d,e){a.N=new Bm;a.x=new Bm;a.bQ=new B2;a.b1=new B2;PR(a,b,c,d,e);}
function PR(a,b,c,d,e){Bf(a.N,b,c);Bf(a.x,d,e);}
function SU(a){Bf(a.x,0,0);}
function L1(a){var b;b=a.x;return Bd(b.b,b.a)?0:1;}
function Ep(a,b){return F5(b,a.N,a.x);}
function Um(a,b,c,d){var e;e=a.N;Bz(b,e.b+c|0,e.a+d|0,a.x,a.bQ);}
function T1(a,b,c,d,e,f){var g,h,i,j;g=a.N;d=g.b+d|0;e=g.a+e|0;g=a.x;h=a.b1;i=a.bQ;K$(b,b.ha);Ma(b.ha,b.bB,d,e,g,b.dE);Uc(b.ha,b.bB,c);g=b.ha;j=b.bB;H$(j,g.uu,h);H$(j,g.us,i);c=g.pQ;j.uniform2f(c,f,0.0);KX(b);}
function ACZ(){It.call(this);this.c4=null;}
function ALb(){var a=new ACZ();AFM(a);return a;}
function Fd(a,b,c,d){var e=new ACZ();ALa(e,a,b,c,d);return e;}
function AFM(a){R7(a);a.c4=new B2;}
function ALa(a,b,c,d,e){R7(a);a.c4=new B2;PR(a,b,c,d,e);}
function G1(a){var b,c;b=a.x;c=a.c4;Bf(b,c.bg-c.bk|0,c.by-c.bx|0);}
function Gh(a,b){HD(a,0,0,Ce(b),C4(b));}
function HD(a,b,c,d,e){CE(a.c4,b,c,d,e);}
function DE(a,b,c,d,e,f){var g;g=a.N;EF(b,g.b+d|0,g.a+e|0,a.x,a.c4,c,a.bQ,a.b1,f);}
function F_(a,b){BG(a.bQ,b);}
function Hy(a,b){BG(a.b1,b);}
function AAP(){var a=this;C.call(a);a.dL=null;a.kQ=0.0;a.gC=0.0;a.gf=0;}
function AMl(){var a=new AAP();AQV(a);return a;}
function AQV(a){var b;b=SC(0,0,2,20);a.dL=b;a.kQ=0.5;a.gC=0.0;HB(187,187,187,255,b.bQ);}
function SB(a){return a.dL.x.a;}
function P$(a){return a.dL.x.b;}
function SQ(a,b){var c,d;a:{c=a.gf;if(b>a.gC)while(true){d=a.gC+a.kQ;a.gC=d;a.gf=a.gf?0:1;if(b>d)continue;else break a;}}return a.gf==c?0:1;}
function PI(a,b,c){Bf(a.dL.N,b,c);}
function Sj(a,b){a.gC=b+a.kQ*1.25;a.gf=1;}
function U0(a,b,c){if(a.gf)Um(a.dL,b,c.b,c.a);}
function TJ(){C.call(this);this.e5=null;}
function ANt(a,b){var c,d,e,f,g,h,i;c=a.e5;d=c.jr;if(d!==null){e=c.da.N;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.jr=g;}d=b.h;f=d.b;c=c.gd;e=c.x;h=f-e.b|0;f=d.a-e.a|0;Bf(c.N,h,f);c=a.e5;d=c.bl.b0;b=b.h;f=0;a:{while(true){i=c.gO.data;if(f>=i.length)break;if(Ep(i[f],b)){b=c.u5.data[f];break a;}f=f+1|0;}b=null;}Gq(d,b);return 1;}
function AO1(a,b,c,d){if(!c&&d==2){b=a.e5;WG(b,b.da);}return 1;}
function AHR(a,b,c){var d,e;d=By();e=new M;O(e);T(G(e,B(265)),c);Bu(d,N(e));if(!c){d=b.h;b=a.e5;b.jr=!Ep(b.da,d)?null:d;PI(a.e5.gZ,d.b,d.a);b=a.e5;Sj(b.gZ,Jj(b.bl.b0));}return AWi;}
function AHs(a,b,c){var d;b=By();d=new M;O(d);T(G(d,B(266)),c);Bu(b,N(d));return 1;}
function RC(){C.call(this);this.uR=null;}
function ANn(a,b){return OR(a.uR,b);}
function RB(){C.call(this);this.oa=null;}
function APZ(a,b){return OR(a.oa,b);}
function RE(){C.call(this);this.wO=null;}
function AQu(a,b,c){var d,e;Bu(By(),B(267));d=!c?B(268):B(28);e=new M;O(e);G(G(G(e,B(269)),d),B(270));V8(b,N(e));return 1;}
function RD(){C.call(this);this.vd=null;}
function AQs(a){Bu(By(),B(271));}
function RA(){C.call(this);this.wl=null;}
function ALN(a,b){Bu(By(),B(272));return 1;}
function Rz(){C.call(this);this.s1=null;}
function AJq(a,b,c,d){var e,f,g;b=a.s1;e=( -d|0)/10|0;b=b.da;f=b.x;f.b=f.b+e|0;f.a=f.a+e|0;b=b.N;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function G$(){var a=this;B2.call(a);a.f1=0;a.f4=0;a.f2=0;a.f3=0;}
function CY(a){var b=new G$();AQ3(b,a);return b;}
function CL(a,b,c){var d=new G$();AHk(d,a,b,c);return d;}
function S(a){var b=new G$();AOY(b,a);return b;}
function Ft(a,b,c,d){var e=new G$();Qr(e,a,b,c,d);return e;}
function BL(a){var b=new G$();JF(b,a);return b;}
function AQ3(a,b){Qr(a,b,b,b,255);}
function AHk(a,b,c,d){Qr(a,b,c,d,255);}
function AOY(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.f1=IP(L(b,1))*17|0;a.f4=IP(L(b,2))*17|0;a.f2=IP(L(b,3))*17|0;a.f3=255;}else{a.f1=Ly(L(b,1),L(b,2));a.f4=Ly(L(b,3),L(b,4));a.f2=Ly(L(b,5),L(b,6));a.f3=I(b)!=9?255:Ly(L(b,7),L(b,8));}HB(a.f1,a.f4,a.f2,a.f3,a);return;}}
function Qr(a,b,c,d,e){a.f1=b;a.f4=c;a.f2=d;a.f3=e;HB(b,c,d,e,a);}
function JF(a,b){a.f1=b.f1;a.f4=b.f4;a.f2=b.f2;a.f3=b.f3;BG(a,b);}
function IP(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Ly(b,c){return (16*IP(b)|0)+IP(c)|0;}
function US(){var a=this;C.call(a);a.lt=null;a.jR=null;}
function Zv(){var a=this;C.call(a);a.e8=null;a.cc=null;a.ed=null;a.f6=null;a.k3=null;a.b_=null;a.fv=null;a.cO=0;a.eJ=0;a.lj=0;a.gG=0;a.fx=0;a.i7=null;a.jq=null;a.sJ=null;}
function YT(){var a=new Zv();AQv(a);return a;}
function AQv(a){a.cc=AKI();a.ed=new Bm;a.f6=new Bm;a.b_=AWj;a.gG=(-1);}
function KS(a,b){TC(a);a.b_=b;}
function HX(a,b){a.e8=b;TC(a);}
function H4(a,b){var c,d,e,f,g;a.k3=b.iS;c=b.be.hk;BG(a.cc.bQ,c);c=b.hW.jP;BG(a.cc.b1,c);d=0;while(true){e=a.b_.data;if(d>=e.length)break;c=e[d];f=b.be;c.i_=f;c=c.dj;g=f.kV;f=f.hk;BG(c.bQ,g);BG(c.b1,f);d=d+1|0;}}
function To(a){a.fv=CG(a.fv,null);Bf(a.ed,0,0);a.b_=AWj;a.gG=(-1);SU(a.cc);}
function GV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=IB(b);d=b.bK;BD(a.e8);Cw(c,a.e8);e=J0(a.e8,1.25);f=0;a.cO=B$(2.0,d);a.eJ=B$(3.0,d);a.lj=B$(12.0,d);g=0;h=a.b_.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=QG(c,l.j8);n=a.lj;n=(n+m|0)+n|0;f=Z(f,n);b=l.dj;l=b.N;l.b=g;l.a=0;l=b.x;l.b=n;l.a=e;CE(b.c4,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.ed;b.b=g;b.a=e;b=a.cc.x;n=a.fx;if(!n){m=a.cO;m=(g+m|0)+Bd(m,a.b_.data.length)|0;}else m=(f+(a.cO*2|0)|0)+(a.eJ*2|0)|0;b.b=m;if(!n)e=e+(a.cO*2|0)|0;else{n=a.cO;e=(Bd(e+n|0,a.b_.data.length)
+n|0)+(a.eJ*2|0)|0;}b.a=e;}
function JT(a,b,c){var d,e,f,g,h,i,j;Bf(a.cc.N,b,c);d=a.cO+a.eJ|0;e=a.b_.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dj;j=i.N;j.b=b+d|0;j.a=c+h|0;if(!a.fx){if(!i.x.b)AD3();d=d+(i.x.b+a.cO|0)|0;}else{if(!i.x.a)AD3();h=h+(i.x.a+a.cO|0)|0;}g=g+1|0;}}
function AD3(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function D_(a){var b,c;b=a.ed;if(b.b&&b.a)return a.cc.x;c=new Bp;Bn(c,B(273));J(c);}
function TC(a){Bf(a.ed,0,0);}
function Jw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cT;if(!a.b_.data.length)return;a:{if(a.fv!==null){d=a.ed;if(Bd(d.b,d.a))break a;}d=a.ed;if(!Bd(d.b,d.a))GV(a,b);d=a.ed;e=d.b;f=d.a;if(!Bd(e,f))return;d=CK(c,e,f);Cw(d,a.e8);g=J0(a.e8,0.125);h=a.e8;i=h.dr;j=g+i-(i+h.ee)/16.0;k=a.b_.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.j8,h.dj.c4.bk+a.lj,j);l=l+1|0;}h=CG(a.fv,CT(c));a.fv=h;CM(h,d);FM(d);}if(!L1(a.cc)){d=a.cc;AC7(c,d.x,d.N,d.b1,a.cO,a.f6);d=a.cc;h=d.x;m=d.N;d=d.bQ;e=a.cO;n=a.f6;n.b=(h.b-e|0)-e|0;n.a=(h.a
-e|0)-e|0;Bz(c,m.b+e|0,m.a+e|0,n,d);if(a.fx){d=a.cc;ACr(c,d.x,d.N,0,0,Q6(a.k3,b.bK),a.k3.lO,a.f6);}}k=a.b_.data;l=k.length;o=0;while(o<l){DE(k[o].dj,c,a.fv,0,0,0.0);o=o+1|0;}b:{if(a.fx){k=a.b_.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dj;m=a.f6;e=(a.cc.x.b-(a.cO*2|0)|0)-(a.eJ*2|0)|0;b=h.x;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.N;Bz(c,d.b+b.b|0,d.a,m,h.b1);}o=o+1|0;}}}}
function Kd(a,b,c){var d,e,f,g,h,i;d=Ep(a.cc,b);e=!d?(-1):UV(a,b);f=a.gG;if(f!=e){if(f>=0){g=a.b_.data[f];NE(g,0);if(a.sJ!==null){f=a.gG;h=By();g=Cv(g);i=new M;O(i);G(G(T(G(i,B(274)),f),B(275)),g);Bu(h,N(i));}}if(e>=0){h=a.b_.data[e];g=a.jq;if(g!==null)g.nn(b,e,h);NE(h,1);}a.gG=e;}return d&&Hd(c)?1:0;}
function J6(a,b,c,d){var e,f;e=UV(a,b);if(e>=0){f=a.b_.data[e];if(!Mt(f))f.lV.o();}return 1;}
function UV(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.b_.data;if(c>=d.length)return (-1);e=d[c].dj;if(Ep(e,b))return c;if(a.fx){f=e.N;g=f.b;e=e.x;h=e.b;g=g+h|0;i=f.a;f=a.f6;f.b=(a.cc.x.b-(a.cO*2|0)|0)-h|0;f.a=e.a;if(Y5(b,g,i,f))break;}c=c+1|0;}return c;}
function SH(a){a.fx=1;}
function Yy(){var a=this;C.call(a);a.cB=null;a.cb=null;a.i5=null;a.iW=null;a.g0=null;a.iq=null;}
function MO(a){var b=new Yy();AGf(b,a);return b;}
function AGf(a,b){a.cb=Cn();a.iq=AWk;a.cB=b;W(b.dS,a);}
function H1(a,b,c){a.i5=c;a.g0=b;b=BS(a.cb);while(B4(b)){H4(BX(b),a.g0);}}
function Ga(a,b,c,d){var e,f;e=a.cB;f=e.b6;if(Bd(f.b,f.a)&&e.bK!==0.0){if(a.i5!==null&&!DJ(a)){a.iq=d;a.iW=GN(a.cB,a.i5);e=Tw(a,b,c,null);b=new SW;b.sS=a;e.i7=b;FO(a.cB,a);return;}b=new BC;V(b);J(b);}c=new DZ;Bn(c,B(276));J(c);}
function DL(a){var b;if(DJ(a)){b=a.cB;if(b.d5===a)b.d5=null;Tk(a,null);a.iq.o();a.iq=AWk;}}
function PE(a,b,c,d,e){var f,g,h;f=YT();SH(f);KS(f,c.dh());H4(f,a.g0);HX(f,a.iW);GV(f,a.cB);if(d===null)g=b.b;else{g=b.b;g=a.cB.b6.b<((g+(D_(d)).b|0)+(D_(f)).b|0)?g-(D_(f)).b|0:(g+(D_(d)).b|0)-d.eJ|0;}h=b.a;b=a.cB.b6;JT(f,Z(0,Y(g,b.b-(D_(f)).b|0)),Z(0,Y(h,b.a-(D_(f)).a|0)));b=new No;b.tH=a;b.tJ=f;b.tI=e;f.jq=b;BY(a.cb,f);return f;}
function Tw(a,b,c,d){return PE(a,b,c,d,null);}
function AGr(a,b,c){var d,e;a.iW=GN(a.cB,a.i5);d=BS(a.cb);while(B4(d)){e=BX(d);HX(e,a.iW);GV(e,a.cB);}}
function Ih(a){var b,c;if(Eb(a.cb))return;CJ(a.cB.cT,1);b=0;while(true){c=a.cb;if(b>=c.i)break;Jw(Bs(c,b),a.cB);b=b+1|0;}}
function Kr(a,b){var c,d;c=0;d=a.cb.i-1|0;a:{while(d>=0){c=Kd(Bs(a.cb,d),b.h,a.cB.cy);if(c)break a;d=d+(-1)|0;}}return c;}
function Je(a,b,c,d){var e,f;e=0;f=a.cb.i-1|0;a:{while(f>=0){e=J6(Bs(a.cb,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function I_(a,b,c){var d,e,f;d=null;e=a.cb.i-1|0;a:{while(e>=0){f=Bs(a.cb,e);d=b.h;c=Ep(f.cc,d);if(!c&&!L1(f.cc)){d=f.i7;if(d!==null)d.o();}d=!c?null:AWi;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AE0(a,b){var c;if(!DJ(a))return 0;a:{switch(b.bf){case 27:DL(a);c=1;break a;default:}c=0;}return c;}
function ADV(b,c){var d,e,f;d=b.dj;e=c.cO;f=c.eJ;b=new Bm;c=d.N;ZL(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function Tk(a,b){var c,d;c=a.cb.i-1|0;a:{while(true){if(c<0)break a;d=Bs(a.cb,c);if(b===d)break;Ek(a.cb,c);To(d);c=c+(-1)|0;}}}
function DJ(a){return a.cb.i<=0?0:1;}
function XT(){var a=this;C.call(a);a.cT=null;a.iv=null;a.cy=null;a.b6=null;a.bK=0.0;a.d5=null;a.dS=null;a.dP=null;a.nO=null;a.xT=null;a.xS=null;}
function KM(a){var b;b=a.d5;if(b!==null)b.sf();}
function JN(a){var b;b=a.d5;if(b!==null)b.uO();}
function WL(a,b){var c;c=a.iv.dA!==(D8()).activeElement?0:1;if(c)JN(a);a.d5=b;if(c)KM(a);}
function FO(a,b){JN(a);a.d5=b;KM(a);}
function DX(a,b){return b!==a.d5?0:1;}
function IB(a){return a.cT.cA;}
function GN(a,b){return Hj(a.cT,b.ih,B$(b.hB,a.bK));}
function CA(a,b){return B$(b,a.bK);}
function S9(){C.call(this);this.s9=null;}
function ANR(a,b){var c;c=a.s9;if(b.bf==32)To(c.cF);return 0;}
function Ta(){C.call(this);this.rN=null;}
function AEA(a,b){var c,d,e,f;b=b;c=a.rN;Bu(By(),B(277));if(!DJ(c.d4)){d=c.d4;b=b.h;e=Nx(4);f=new Vc;f.xU=c;Ga(d,b,e,f);}return 1;}
function ADL(){var a=this;C.call(a);a.ih=null;a.hB=0.0;}
function EP(a,b){var c=new ADL();AEp(c,a,b);return c;}
function AEp(a,b,c){a.ih=b;a.hB=c;}
function ARw(a,b){if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){b=b;return a.hB===b.hB&&C2(a.ih,b.ih)?1:0;}return 0;}
function HY(){var a=this;C.call(a);a.iS=null;a.hW=null;a.m8=null;a.pr=null;a.be=null;a.ls=null;a.jV=null;}
function AWl(a,b,c,d,e,f,g){var h=new HY();K3(h,a,b,c,d,e,f,g);return h;}
function K3(a,b,c,d,e,f,g,h){a.m8=b;a.pr=c;a.hW=d;a.be=e;a.iS=f;a.ls=g;a.jV=h;}
function FX(){var b,c,d;b=new HY;c=new HA;XG();d=AWm;JO(c,d,AWn,AWo,AWp,AWq,d);K3(b,c,ABk(),Y1(S(B(278)),S(B(257)),S(B(258))),ABk(),Zh(1,0.125),AWr,AWs);return b;}
var S_=F();
function AI$(a){Bu(By(),B(279));}
var S8=F();
function APc(a){Bu(By(),B(280));}
function C6(){var a=this;C.call(a);a.dj=null;a.lV=null;a.i_=null;a.hX=null;a.jp=null;a.j8=null;}
function ABI(a,b,c){var d=new C6();K4(d,a,b,c);return d;}
function ATs(a,b,c,d,e){var f=new C6();ABg(f,a,b,c,d,e);return f;}
function K4(a,b,c,d){ABg(a,b,c,d,null,null);}
function ABg(a,b,c,d,e,f){var g;g=ALb();a.dj=g;a.j8=c;a.i_=d;a.jp=f;a.lV=b;BG(g.bQ,d.kV);BG(a.dj.b1,d.hk);a.hX=e;}
function Mt(a){return a.hX===null?0:1;}
function NE(a,b){BG(a.dj.b1,!b?a.i_.hk:a.i_.ph);}
function AA4(){C.call(this);this.cM=null;}
function ADX(){var a=new AA4();AKN(a);return a;}
function AKN(a){a.cM=Cn();}
function IM(a,b){Rk(a.cM,0,b);}
function J4(a,b){VT(a.cM,b);}
function IZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cM.i-1|0;while(c>=0){d=Bs(a.cM,c);d.M.eQ(b);e=d.R;f=d.ea.hW;if(!LO(e)){if(!TP(e)&&!(!e.gs&&e.c9!==null)){e.gs=0;QR(e);g=e.dU;h=(g.dr+g.ee+5.0)/10.0;i=CA(e.gD,e.iG);g=b.cA;j=e.dU;k=e.gH;l=h*2.0;Cw(g,j);m=i+KL(g,k,l)|0;e.hq=m;m=Et(0,m,e.r.b);if(m){j=CK(b,m,e.r.a);Cw(j,e.dU);g=e.gH;l=i;h=l+h;k=e.dU;n=k.dr;Ch(j,g,h,l+n-(n+k.ee)/16.0);g=e.c9;if(g===null){g=CT(b);e.c9=g;}CM(g,j);FM(j);CE(e.lc,0.0,0.0,Ce(e.c9),C4(e.c9));}}g=f.qH;j=e.c9;if(j===null)O_(e,b,0,e.r.b,
g);else{i=Ce(j);f=f.pN;j=e.D;m=j.b;o=j.a;j=e.c9;EF(b,m,o,j.fi,e.lc,j,f,g,0.0);m=e.r.b;if(i<m)O_(e,b,i,m-i|0,g);}}CJ(b,1);i=CA(d.bp,2.0);m=LO(d.R);f=d.bp;e=f.dP;f=f.nO;p=m?0:d.R.r.a;g=d.M.r;Bf(f,g.b,g.a+p|0);AC7(b,f,!m?d.R.D:d.M.D,d.ea.hW.jP, -i|0,e);f=d.M;ACr(b,f.r,f.D,i,p,Q6(d.ea.iS,d.bp.bK),d.ea.iS.lO,e);c=c+(-1)|0;}}
function Y$(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cM;if(c>=d.i)break;a:{e=Bs(d,c);f=b.h;if(DH(e.R,f))g=DC(e.bp.cy,null);else{g=CA(e.bp,7.0);h=CA(e.bp,25.0);if(Vx(e,f.b,g)){i=UK(e,f.b,h);if(Pl(e,f.a,g)){g=DC(e.bp.cy,Jz(i,B(149)));break a;}if(P6(e,f.a,g)){g=DC(e.bp.cy,Jz( -i|0,B(149)));break a;}}if(MR(e,f.a,g)){h=RM(e,f.a,h);if(N9(e,f.b,g)){g=DC(e.bp.cy,Jz(h,B(148)));break a;}if(TF(e,f.b,g)){g=DC(e.bp.cy,Jz( -h|0,B(148)));break a;}}g=0;}}b:{c:{if(!g){if(!DH(e.M,b.h))break c;if(!e.M.bO(b)&&!DC(e.bp.cy,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function AA3(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cM;if(e>=f.i)break;a:{b:{g=Bs(f,e);if(!DH(g.R,b.h)){if(!DH(g.M,b.h))break b;if(!g.M.cn(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function X8(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cM;if(d>=e.i)return null;a:{f=Bs(e,d);if(!c){b:{e=b.h;if(!LO(f.R)&&DH(f.R,e)){g=f.M.D;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.R.D;i=e.b-i|0;k=e.a-k|0;e=new Bm;g=new Qn;g.ot=f;g.ow=i;g.ox=k;g.oy=e;g.oz=h;g.ou=j;}else{h=CA(f.bp,7.0);i=CA(f.bp,25.0);if(Vx(f,e.b,h)){j=UK(f,e.b,i);if(Pl(f,e.a,h)){g=H3(f,e,j,(-1));break b;}if(P6(f,e.a,h)){g=H3(f,e,j,1);break b;}}if(MR(f,e.a,h)){i=RM(f,e.a,i);if(N9(f,e.b,h)){g=H3(f,e,(-1),i);break b;}if(TF(f,e.b,h)){g=
H3(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DH(f.R,b.h)?AWi:f.M.b4(b,c);e=f.M;if(e===null)g=null;else if(g===null)g=!DH(e,b.h)?null:AWi;}if(g!==null)break;d=d+1|0;}return g;}
function ADW(a,b,c){var d,e,f,g;d=0;while(true){e=a.cM;if(d>=e.i)break;a:{b:{f=Bs(e,d);if(!DH(f.R,b.h)){if(!DH(f.M,b.h))break b;if(!f.M.cJ(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function Lb(a,b,c,d){var e,f;e=0;while(true){f=a.cM;if(e>=f.i)break;if((Bs(f,e)).M.cU(b,c,d))return 1;e=e+1|0;}return 0;}
function AQn(a,b,c){var d,e,f;d=0;while(true){e=a.cM;if(d>=e.i)break;f=Bs(e,d);e=f.M;e.iK(e.D,e.r,c);e=f.R;if(e.gl!==null){e.dU=null;e.hq=0;e.gs=1;}JX(f);d=d+1|0;}}
function Oe(a,b){var c,d,e;c=0;d=0;while(true){e=a.cM;if(d>=e.i)break;Bs(e,d);c=0|c;d=d+1|0;}return c;}
function PP(a,b,c){var d;d=0;while(true){b=a.cM;if(d>=b.i)break;Bs(b,d);d=d+1|0;}}
function Ox(){C.call(this);this.ve=null;}
function AGq(a,b){return b.hb&&b.bf==32?1:0;}
function Oy(){C.call(this);this.p4=null;}
function APw(a,b){var c,d,e,f,g,h;b=b;c=a.p4;if(!DJ(c.g1)){d=c.g1;b=b.h;e=R(C6,1);f=e.data;g=new C6;h=new Vd;h.o7=c;K4(g,h,B(281),d.g0.be);f[0]=g;Ga(d,b,FQ(e),AWk);}return 1;}
var ABX=F();
function Z_(b){var c,d;c=CK(b,250,64);F0(c,B(150),25.0);Lq(c,187,187,187);Ch(c,B(282),0.0,24.0);Ch(c,B(282),0.25,56.0);d=CT(b);CM(d,c);FM(c);return d;}
function YS(b){var c;c=new VQ;c.gp=b;return c;}
function Oz(){C.call(this);this.tn=null;}
function AMA(a,b,c,d){return Lb(a.tn,b,c,d);}
var V4=F(0);
var Hq=F(0);
var EM=F();
function Eb(a){return a.i?0:1;}
function HH(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=UA(H6(Co(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BS(a);while(B4(f)){g=b.data;h=e+1|0;g[e]=BX(f);e=h;}return b;}
var I4=F(0);
function F4(){EM.call(this);this.cs=0;}
function BS(a){var b;b=new Nt;b.gt=a;b.lJ=a.cs;b.ic=a.na();b.fV=(-1);return b;}
function Qb(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(C2(b,Bs(a,d)))break;d=d+1|0;}return d;}
function ALQ(a,b){var c,d;if(!Ix(b,I4))return 0;c=b;if(a.i!=c.i)return 0;d=0;while(d<c.i){if(!C2(Bs(a,d),Bs(c,d)))return 0;d=d+1|0;}return 1;}
var Ig=F(0);
function NP(){var a=this;F4.call(a);a.cg=null;a.i=0;}
function Cn(){var a=new NP();AIl(a);return a;}
function AWt(a){var b=new NP();MH(b,a);return b;}
function AIl(a){MH(a,10);}
function MH(a,b){a.cg=R(C,b);}
function Jc(a,b){var c,d;c=a.cg.data.length;if(c<b){d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.cg=Dl(a.cg,d);}}
function Bs(a,b){I2(a,b);return a.cg.data[b];}
function AMK(a){return a.i;}
function BY(a,b){var c,d;Jc(a,a.i+1|0);c=a.cg.data;d=a.i;a.i=d+1|0;c[d]=b;a.cs=a.cs+1|0;return 1;}
function Rk(a,b,c){var d,e,f;Pa(a,b);Jc(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.cg.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cg.data[b]=c;a.i=d+1|0;a.cs=a.cs+1|0;}
function Ek(a,b){var c,d,e,f;I2(a,b);c=a.cg.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cs=a.cs+1|0;return d;}
function VT(a,b){var c;c=Qb(a,b);if(c<0)return 0;Ek(a,c);return 1;}
function Hr(a){Za(a.cg,0,a.i,null);a.i=0;a.cs=a.cs+1|0;}
function I2(a,b){var c;if(b>=0&&b<a.i)return;c=new Bw;V(c);J(c);}
function Pa(a,b){var c;if(b>=0&&b<=a.i)return;c=new Bw;V(c);J(c);}
function JZ(a,b){var c;c=0;while(c<a.i){b.n(a.cg.data[c]);c=c+1|0;}}
function N6(a,b){var c,d,e,f,g,h,i;c=a.cg;d=a.i;if(b===null)b=AUo;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}ZY(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cs=a.cs+1|0;}
function ADx(){var a=this;C.call(a);a.lf=0;a.lh=0;}
function APi(){var a=new ADx();AP9(a);return a;}
function AP9(a){var b,c;b=ADi(EC((ACl())));c=EC((ACl()))^(-559038737);a.lf=b;a.lh=c;c=0;while(c<19){RF(a);c=c+1|0;}}
function RF(a){var b,c;b=a.lf;c=a.lh;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.lf=c;a.lh=b;return b;}
function ADi(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function Ic(a,b){return 5.960464477539063E-8*(RF(a)&16777215)*b|0;}
function TX(){C.call(this);this.me=null;}
function AMe(a,b,c){var d;d=a.me;if(b===0.0)Ko(d,100);}
function TY(){C.call(this);this.pZ=null;}
function AEG(a,b){var c,d,e;c=a.pZ;d=b.bf;if(d==32){c.i0=c.i0?0:1;e=1;}else if(d==13){Ko(c,1);e=1;}else if(d!=8)e=0;else{Wy(c,1);e=1;}return e;}
var Nk=F(0);
function AD9(b,c){var d;d=new Va;d.uS=b;d.uT=c;return d;}
function ACW(){var a=this;C.call(a);a.fw=null;a.fQ=0;a.ir=0;a.fP=0;}
function ADJ(a){var b=new ACW();AIk(b,a);return b;}
function AIk(a,b){a.fw=Cn();a.fP=0;a.ir=2048;a.fQ=b;}
function Hh(a,b,c){var d,e,f,g,h,i,j;d=c.qz(b);e=a.ir;if(d>e){c=new Bp;f=new M;O(f);BB(T(G(T(G(f,B(283)),d),B(284)),e),41);Bn(c,N(f));J(c);}if(!a.fQ){b=new BC;Bn(b,B(285));J(b);}a:{b=new B2;if(d){b:{c=a.fw;if(c.i>0){c=BS(c);g=d;while(true){if(!B4(c))break b;f=BX(c);if(f.bg>=g)break;}CE(b,f.bk,f.bx,g,a.fQ);f.bk=f.bk+g;h=f.bg-g;f.bg=h;if(h===0.0)VT(a.fw,f);break a;}}g=a.fP;i=d;CE(b,0.0,g,i,a.fQ);c=a.fw;f=new B2;h=a.fP;g=a.ir-d|0;j=a.fQ;f.bk=i;f.bx=h;f.bg=g;f.by=j;BY(c,f);a.fP=a.fP+a.fQ|0;}}return b;}
function Ia(a,b){var c,d,e,f,g,h,i;a:{c=AQl(b);b=a.fw;if(b.i>0){d=BS(b);while(true){if(!B4(d))break a;e=BX(d);if(e.bx===c.bx){f=e.bk;g=e.bg;h=f+g;i=c.bk;if(h===i){c.bk=f;c.bg=c.bg+g;QF(d);}else{h=c.bg;if(i+h===f){c.bg=h+g;QF(d);}}}}}}BY(a.fw,c);}
function L8(a){return BV(a.ir,a.fP);}
function ABe(){var a=this;C.call(a);a.wT=20;a.fG=null;a.e0=null;a.ib=null;a.kg=0;a.ia=0;a.iT=0.0;a.cv=null;a.ey=null;a.e$=null;a.fl=0;}
function ABx(){var a=new ABe();AQj(a);return a;}
function AQj(a){a.wT=20;a.fG=new Bm;a.e0=new Bm;a.cv=Cn();}
function Xy(a,b){var c,d,e,f,g;c=a.fl;if(b==c)return;d=a.cv.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Z(0,(c-1|0)/20|0);f=Z(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Su(a,b);a.fl=b;}else{if(a.fl>=b)while(true){if(g<f)break a;a.fl=SV(Bs(a.cv,g%d|0),a.ey,a.e$,a.fl,b,e,a.iT);g=g+(-1)|0;}while(f<=g){a.fl=SV(Bs(a.cv,f%d|0),a.ey,a.e$,a.fl,b,e,a.iT);f=f+1|0;}}}}
function Qt(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BS(a.cv);while(B4(f)){g=BX(f);h=a.fG;i=Bd(a.cv.i,a.ia);j=g.eu.a;k=((g.iJ.a-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BE(l,c);if(m<=0){Bf(g.f8,Ce(g.bY),j);CE(g.fz,0.0,0.0,Ce(g.bY),j);IU(g,e,k,h,d.h7,d.g4);}else{if(m>0&&k<c){m=Z(c-k|0,0);Bf(g.f8,Ce(g.bY),m);CE(g.fz,0.0,0.0,Ce(g.bY),m);IU(g,e,k,h,d.h7,d.g4);}if(l>i){m=Y(l%i|0,c);Bf(g.f8,Ce(g.bY),m);CE(g.fz,0.0,b%C4(g.bY)|0,Ce(g.bY),m);IU(g,e,0,h,d.h7,d.g4);}}}}
function JW(a,b,c,d){var e,f,g,h,i,j;e=a.cv.i;while(true){f=a.cv.i;g=Bd(f,a.ia);if(g>(d+a.kg|0))break;h=BV(0,g);i=new Nd;g=a.e0.b;f=a.kg;j=a.ib;i.f8=new Bm;i.fz=new B2;i.iJ=h;i.dF=20;i.er=f;i.eu=BV(g,20*f|0);i.fC=Ti(j,f);if(i.bY===null)i.bY=CT(b);BY(a.cv,i);}if(f==e)return;Su(a,c);}
function Su(a,b){var c,d,e,f,g,h,i,j;c=a.cv;d=c.i;e=Bd((b/(d*20|0)|0)+1|0,d)*20|0;c=BS(c);while(B4(c)){f=BX(c);g=a.ey;h=a.iT;Eu(g);i=0;while(true){j=f.dF;if(i>=j)break;j=e-Bd(d,j)|0;if(j<b)j=e;e=j+1|0;F6(f,g,C0(e),Bd(f.er,i)+f.fC|0,h);i=i+1|0;}CM(f.bY,g);}}
function TA(a,b,c,d){var e;a.ib=b;a.kg=c;e=c*20|0;a.ia=e;b=CG(a.ey,CK(d,a.e0.b,e));a.ey=b;Cw(b,a.ib);R4(a.ey,2);b=CG(a.e$,CK(d,a.e0.b,c));a.e$=b;Cw(b,a.ib);R4(a.e$,2);}
function NT(a){JZ(a.cv,new Ry);Hr(a.cv);a.ey=CG(a.ey,null);a.e$=CG(a.e$,null);}
function Vh(a,b,c,d,e){Cy(a.fG,b);Bf(a.e0,c,d);a.iT=e;}
var YZ=F(0);
function Zy(b,c,d){return HB(b,c,d,255,new B2);}
function HB(b,c,d,e,f){CE(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function WN(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bk=g+i;e.bx=h+i;e.bg=j+i;return e;}
function Jo(b,c,d,e,f){f=WN(b,c,d,f);f.by=e;return f;}
function GD(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Y_(){var a=this;C.call(a);a.h7=null;a.g4=null;a.ol=null;a.t1=null;}
function AAw(a,b,c,d){var e=new Y_();AM8(e,a,b,c,d);return e;}
function AAq(){return AAw(S(B(286)),S(B(287)),S(B(288)),S(B(289)));}
function AM8(a,b,c,d,e){a.h7=b;a.g4=c;a.ol=d;a.t1=e;}
function Wh(){var a=this;C.call(a);a.qO=null;a.iu=null;}
function AGk(a,b,c){if(c)return AWi;return Fe(a.iu.gA,b.h,a.qO,1);}
function AND(a,b,c){return 1;}
function AHL(a,b){var c;c=a.iu;return Fp(c.gA,b.h,c.sD);}
function SL(){C.call(this);this.ny=null;}
function AG6(a,b,c,d){var e,f;b=a.ny;e=(IX(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dY=Y(Z(0,b.dY+Bd(e,f)|0),PJ(b));return 1;}
var Uq=F(0);
function Hd(a){return DC(a,null);}
function Uw(b){var c;c=new NM;c.nl=b;return c;}
function ABd(){var a=this;C.call(a);a.eT=null;a.cR=null;a.dT=null;a.en=null;a.hx=null;a.hw=null;}
function Hn(){var a=new ABd();AHH(a);return a;}
function AHH(a){a.eT=new Bm;a.cR=new Bm;a.dT=new Bm;a.en=new Bm;a.hx=new B2;a.hw=new B2;}
function PG(a){var b;b=a.cR;return !Bd(b.b,b.a)?0:1;}
function II(a,b){return F5(b,a.dT,a.en);}
function Fe(a,b,c,d){var e,f,g,h,i;e=II(a,b);f=F5(b,a.eT,a.cR);if(!e&&!f)return null;if(!f){if(!d)c.n(Xj(a,b.b-a.dT.b|0));else c.n(Ov(a,b.a-a.dT.a|0));}g=!d?a.eT.b+(a.cR.b/2|0)|0:a.eT.a+(a.cR.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new NK;b.sP=a;b.sR=c;b.sQ=i;}else{b=new NI;b.pK=a;b.pJ=c;b.pL=i;}return b;}
function Gd(a,b,c){if(b!==null&&c!==null){BG(a.hx,c);BG(a.hw,b);return;}}
function ADI(b,c){var d;d=new TQ;d.qJ=b;d.l4=c;return d;}
function Ov(a,b){var c,d,e;c=a.en.a;d=a.cR.a;e=c-d|0;return ADI(Y(Z(0,b-(d/2|0)|0),e),e);}
function Xj(a,b){var c,d,e;c=a.en.b;d=a.cR.b;e=c-d|0;return ADI(Y(Z(0,b-(d/2|0)|0),e),e);}
function In(a,b,c,d,e,f,g){NQ(a,b,c,d,e,f,g,1);}
function Mo(a,b,c,d,e,f,g){NQ(a,b,c,d,e,f,g,0);}
function NQ(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bf(a.en,0,0);Bf(a.cR,0,0);}else{i=Y(g*3|0,d);j=Z(PC(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PC(b,i,e):0;if(!h){k=a.eT;k.b=i+c|0;k.a=f-g|0;l=a.cR;l.b=j;l.a=g;l=a.dT;l.b=c;l.a=k.a;k=a.en;k.b=d;k.a=g;}else{k=a.eT;k.b=f-g|0;k.a=i+c|0;l=a.cR;l.b=g;l.a=j;l=a.dT;l.b=k.b;l.a=c;k=a.en;k.b=g;k.a=d;}}}
function PU(a,b){FU(a,b);Gc(a,b);}
function FU(a,b){var c;c=a.dT;Bz(b,c.b,c.a,a.en,a.hx);}
function Gc(a,b){var c,d;c=a.cR;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eT;Bz(b,d.b+1|0,d.a+1|0,c,a.hw);b=a.cR;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fp(a,b,c){return II(a,b)&&Hd(c)?1:0;}
function PZ(){C.call(this);this.t9=null;}
function AOl(a,b){var c,d,e;c=a.t9;if(b.ce&&b.bf==79){if(!b.bA){b=c.bl.b0;d=new Sd;d.uh=c;LR(b,d);}else{b=c.bl.b0;d=new Sc;d.wB=c;VV(b,d);}e=1;}else e=0;return e;}
function Rf(){C.call(this);this.vP=null;}
function AE7(a,b){var c,d,e,f;c=b.data;b=By();d=Cv(c[0]);e=new M;O(e);G(G(e,B(171)),d);Bu(b,N(e));b=By();f=c[1];d=new M;O(d);G(G(d,B(290)),f);Bu(b,N(d));}
function Re(){C.call(this);this.xA=null;}
function ARb(a,b){var c,d,e,f,g,h,i;c=b.data;d=By();e=Cv(c[0]);f=new M;O(f);G(G(f,B(171)),e);Bu(d,N(f));g=FG(RQ(b,1));b=By();d=Cv(c[1]);if(g===null)c=B(29);else{c=new M;O(c);BZ(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BZ(c,B(44));BB(c,i[h]);h=h+1|0;}BZ(c,B(45));c=N(c);}e=new M;O(e);G(G(G(G(e,B(291)),d),B(292)),c);Bu(b,N(e));}
function Rd(){C.call(this);this.n$=null;}
function AHp(a,b){Up(a.n$,b);}
function Rc(){C.call(this);this.vx=null;}
function AMu(a,b){var c,d,e,f,g;c=b.data;d=By();e=Cv(c[0]);f=new M;O(f);G(G(f,B(171)),e);Bu(d,N(f));g=Es(RQ(b,1));b=By();d=Cv(c[1]);c=ACh(g);e=new M;O(e);G(G(G(G(e,B(293)),d),B(294)),c);Bu(b,N(e));}
function Ra(){C.call(this);this.wD=null;}
function ALB(a,b){var c,d;c=LH();b=Cv(b);d=new M;O(d);G(G(d,B(295)),b);Bu(c,N(d));b=new Fh;V(b);J(b);}
function Q_(){C.call(this);this.pY=null;}
function ANB(a,b){var c,d,e,f;c=a.pY;d=c.bl.b0;e=new N4;e.q3=c;f=R(C,1);f.data[0]=b;C1(d,e,B(296),f);}
function TI(){C.call(this);this.kL=null;}
function APy(a,b){var c,d,e,f,g,h;c=a.kL;d=c.k8;if(d!==null){e=c.dI.N;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.k8=g;}b=b.h;f=b.b;c=c.eN;d=c.x;f=f-d.b|0;h=b.a-d.a|0;Bf(c.N,f,h);return 1;}
function ALG(a,b,c){var d;if(!c){d=b.h;b=a.kL;if(!Ep(b.dI,d))d=null;b.k8=d;}return AWi;}
var De=F(0);
var AVD=null;var AVn=null;var AVE=null;var AVm=null;var AVG=null;var AVF=null;var AVI=null;var AVH=null;var AVs=null;var AVJ=null;function G9(){G9=Bl(De);AIH();}
function AIH(){AVD=CY(187);AVn=S(B(297));AVE=CY(55);AVm=CY(43);AVG=CL(33,66,131);AVF=CL(60,63,65);AVI=S(B(298));AVH=S(B(299));AVs=Ft(85,85,85,128);AVJ=Ft(43,43,43,0);}
function T7(){var a=this;C.call(a);a.pB=null;a.i1=null;}
function AMJ(a,b,c){var d;if(!c){d=Fe(a.i1.ht,b.h,a.pB,1);if(d!==null)return d;}return AWi;}
function AGm(a,b,c){return 1;}
function AFh(a,b){var c;c=a.i1;return Fp(c.ht,b.h,Uw(c.bl.b0));}
function NS(){C.call(this);this.tr=null;}
function AE_(a,b,c,d){var e,f;b=a.tr;e=(IX(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ex=Y(Z(0,b.ex+Bd(e,f)|0),RK(b));return 1;}
function So(){C.call(this);this.rs=null;}
function APC(a,b){var c,d;a:{c=a.rs;switch(b.bf){case 67:Mv(c);d=1;break a;case 86:Q8(c);d=1;break a;default:}d=0;}return d;}
var Sn=F();
function AHM(a,b,c){return 0;}
function Sl(){C.call(this);this.o9=null;}
function AO2(a,b,c){var d,e;d=a.o9;c=d.dw+1|0;d.dw=c;d=HZ(E(Io));e=new M;O(e);G(G(T(e,c),B(300)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));V8(b,e);return 1;}
var Sk=F();
function AM1(a){return null;}
function Sm(){C.call(this);this.mT=null;}
function AGc(a){var b,c;b=a.mT;c=new PO;c.rA=b;return c;}
function RT(){C.call(this);this.xm=null;}
function AHT(a,b){return 0;}
function K7(){var a=this;C.call(a);a.lK=null;a.vo=null;a.vE=0.0;a.oC=0;a.vM=0;a.wh=0;a.qC=0;a.w4=0;a.dr=0.0;a.ee=0.0;a.vB=0.0;a.lx=0.0;a.vJ=0;a.mD=null;}
function E0(a){return Dd(a.dr+a.ee);}
function J0(a,b){return Dd((a.dr+a.ee)*b);}
function Qj(){C.call(this);this.xj=null;}
function AIq(a,b){return b.hb&&b.bf==32?1:0;}
function Qk(){C.call(this);this.p7=null;}
function AEH(a,b){var c,d,e,f,g,h;b=b;c=a.p7;if(!DJ(c.gu)){d=c.gu;b=b.h;e=R(C6,1);f=e.data;g=new C6;h=new Rm;h.mk=c;K4(g,h,B(281),d.g0.be);f[0]=g;Ga(d,b,FQ(e),AWk);}return 1;}
function Ql(){C.call(this);this.ru=null;}
function AN0(a,b,c,d){return Lb(a.ru,b,c,d);}
function Iq(){var a=this;C.call(a);a.fL=null;a.g=null;a.iL=null;a.pP=null;}
function AWu(a,b,c){var d=new Iq();Qm(d,a,b,c);return d;}
function Qm(a,b,c,d){var e,f,g,h,i,j,k;a.fL=d;a.iL=c;if(d===null)c=null;else{c=d.e3;c=c===null?null:!Ec(c,B(301))&&!Ec(c,B(302))&&!Ec(c,B(303))&&!Ec(c,B(304))&&!Ec(c,B(305))&&!Ec(c,B(306))?(Ec(c,B(230))?B(138):!Ec(c,B(307))?null:B(246)):B(247);}e=b.data;a.pP=c;c=new HM;f=e.length;if(!f)g=MP(B(31));else{g=R(Cx,f);h=g.data;i=0;while(i<f){j=new Cx;k=R(B6,1);k.data[0]=RV(e[i]);H5(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.d9=Gx();c.et=Gx();c.fc=Cn();if(!b.length){c=new BC;V(c);J(c);}c.C=g;c.fu=0;c.cr=0;c.c8=T2(c);a.g=c;}
function Do(a){var b;b=a.iL;if(b===null)b=a.pP;return b;}
function GX(a){var b;b=a.fL;return b===null?null:b.hy;}
function AAR(){var a=this;C.call(a);a.hy=null;a.kI=null;a.e3=null;a.xQ=null;}
function AQD(a,b,c,d){var e=new AAR();AKC(e,a,b,c,d);return e;}
function AKC(a,b,c,d,e){a.hy=b;a.kI=c;a.e3=d;a.xQ=e;}
function AQa(a,b){var c;if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){c=b;return C2(a.hy,c.hy)&&C2(a.kI,c.kI)&&C2(a.e3,c.e3)?1:0;}return 0;}
var OF=F(0);
var OY=F();
function AIw(a,b,c){var d,e;d=b;e=c;b=new M;O(b);T(G(T(G(b,B(308)),d),B(309)),e);CF(N(b));return d+e|0;}
var OG=F(0);
var OW=F();
function AJG(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fj(G(Fj(G(b,B(310)),d),B(309)),e);CF(N(b));return d+e;}
var Zo=F();
var Yt=F(0);
var Se=F();
function ARA(a,b){var c,d,e;c=b.ce;d=c&&!b.bA&&!b.cV&&!b.ix?1:0;a:{if(d){d=b.bf;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bA&&!c&&!b.cV&&!b.ix?1:0;d=d&&b.bf==46?1:0;}b:{if(!d){e=b.bf;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jB=1;}return 0;}
function Sf(){C.call(this);this.rO=null;}
function AEL(a,b){var c;c=a.rO.d5;return c!==null&&c.hV(b)?1:0;}
function VO(){var a=this;C.call(a);a.mQ=null;a.st=null;a.sO=null;a.oi=null;a.md=null;a.rd=null;}
function KQ(a,b,c){return Xk(a,Cp(a.mQ),b,c);}
function Vw(a,b,c){return Xk(a,Cp(a.st),b,c);}
function Xk(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.tE(c,d))return g.v1;f=f+1|0;}return null;}
function Nn(a,b,c){var d,e,f,g;d=(Cp(a.sO)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.tE(b,c))return g.v9;f=f+1|0;}return null;}
function Ya(){var a=this;C.call(a);a.bM=null;a.bD=null;a.cY=0;}
function AMR(){var a=new Ya();AFc(a);return a;}
function Rx(a){var b=new Ya();AEy(b,a);return b;}
function AFc(a){a.bM=new Gi;a.bD=new Gi;}
function AEy(a,b){var c;c=new Gi;a.bM=c;a.bD=new Gi;W9(c,b.bM);W9(a.bD,b.bD);a.cY=b.cY;}
function KH(a,b,c){B1(a.bD,b,c);if(!a.cY)B1(a.bM,b,c);}
function P0(a,b){B1(a.bM,b,0);B1(a.bD,b+1|0,0);}
function D3(a){if(XC(a.bM,a.bD)>0)return a.bD;return a.bM;}
function Fx(a){if(XC(a.bM,a.bD)<0)return a.bD;return a.bM;}
function Dq(a){var b,c;b=a.bM;c=a.bD;return (b===c?1:c!==null&&Co(b)===Co(c)?(b.J==c.J&&b.ba==c.ba?1:0):0)?0:1;}
function ZE(a,b){var c,d;if(!Dq(a))return 0;c=D3(a);d=Fx(a);return c.J<=b&&b<d.J?1:0;}
function Nl(){var a=this;C.call(a);a.eD=null;a.eE=0;a.db=0;}
function MQ(a,b){var c,d,e;c=a.eE;d=a.eD;if(c==d.data.length)a.eD=Dl(d,c+16|0);d=a.eD.data;e=a.eE;a.eE=e+1|0;d[e]=b;}
function Xe(a){var b,c,d;b=a.db;c=a.eE-1|0;if(b==c)a.db=b-1|0;d=a.eD.data;a.eE=c;d[c]=null;}
function ET(){var a=this;C.call(a);a.bR=0;a.bS=null;a.em=null;a.dB=0;a.c6=0;}
var AWv=0;var AWw=0;var AVx=0;function ABp(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bS;j=i===b&&!i.hM?0:1;if(j){a.bS=b;Lf(b,e.cA,d);}i=a.bS;k=i===null?0:EZ(i)<g?Iv(EZ(a.bS),1024):Iv(g,1024)+1|0;l=k<=a.dB?0:1;if(l)a.dB=k;if(!(!j&&!l)){if(AWv){m=b.fg;$rt_globals.console.info("fMeasure"+m.data);AWv=0;}if(!AVx){i=c.bn;b="alphabetic";i.textBaseline=b;}else{b=c.bn;i="top";b.textBaseline=i;}a.c6=h/1024|0;while(true){i=a.em;if(i.i>=a.dB)break;BY(i,CT(e));}k=0;while(k<a.dB){H0(a,c,f,d,a.c6+k|0);k=k+1|0;}a.bS.hM=0;}if(!Eb(a.em)
&&h<=EZ(a.bS)){k=h/1024|0;g=a.c6;if(k!=g){if(IX(k-g|0)>=a.dB){g=0;while(g<a.dB){H0(a,c,f,d,k+g|0);g=g+1|0;}a.c6=k;}else{while(true){h=a.c6;if(h>=k)break;H0(a,c,f,d,h+a.dB|0);a.c6=a.c6+1|0;}while(true){h=a.c6;if(h<=k)break;H0(a,c,f,d,h-1|0);a.c6=a.c6-1|0;}}}}}
function Ld(b,c){return (c-E0(b)|0)/2|0;}
function Ti(b,c){return Ld(b,c)+b.qC|0;}
function H0(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Eu(b);f=a.bS.fg;g=e*1024|0;h=OT(a,g);if(h>=a.bS.p.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bR;a:{while(true){l=a.bS.p.data;if(h>=l.length)break a;m=l[h];n=!AVx?Ti(d.data[m.b8],c):Ld(d.data[m.b8],c);o=f.data;Cw(b,d.data[m.b8]);Ch(b,m.t,k,n);k=o[h]-j+a.bR;if(k>1024.0)break;h=h+1|0;}}CM(Bs(a.em,e%a.dB|0),b);}
function ACo(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(Eb(a.em))return;if(!a.dB)return;if(j>EZ(a.bS))return;o=a.bS;p=o.d_;q=o.p;r=j/1024|0;s=OT(a,j);t= -a.bR|0;u=i;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=h)break;y=p.data;o=Bs(a.em,r%a.dB|0);z=v[s];ba=y[s]+a.bR|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Y(be,ba)-j|0;if(bc&&x)bf=bf+a.bR|0;if((t+bf|0)>h)bf=h-t|0;bg=l!==null?0:1;b:{if(!bg){bh=!x
?a.bR:2*a.bR|0;w=l.b;bi=l.a;if(!(w<bi&&j<=bi&&(j+bf|0)>(w+bh|0)?0:1)){bj=0;break b;}}bj=1;}c:{if(!bg){bi=!x?a.bR:2*a.bR|0;if(j>=l.b&&(j+bf|0)<=(l.a+bi|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(z===m)bl=k.cz.pW;bm=BS(n);d:{e:{while(B4(bm)){f:{bn=BX(bm);if(bn!==null){if(!bn.cu(z))break f;else break e;}if(z===null)break e;}}bh=0;break d;}bh=1;}if(bh)bl=k.cz.n4;if(!bk&&!bj){l.a=Y(l.a,EZ(a.bS));bi=j>=l.b?bf:(Y(ba,be)-l.b|0)-(!x?a.bR:0)|0;bh=(j+bf|0)<=(l.a+(!x?a.bR:2*a.bR|0)|0)?0:(Y(ba,be)-l.a|0)-(!x?a.bR:0)|0;w=j-
bb|0;x=t+c|0;bo=w;bb=bf-bi|0;CE(e,bo,0.0,bb,u);Bf(f,bb,i);Hf(a,d,x,b,f,e,z,o,g,k,0,bl);w=w+bf|0;CE(e,w-bh|0,0.0,bh,u);Bf(f,bh,i);x=x+bf|0;Hf(a,d,x-bh|0,b,f,e,z,o,g,k,0,bl);bp=w-bi|0;bh=bi-bh|0;CE(e,bp,0.0,bh,u);Bf(f,bh,i);Hf(a,d,x-bi|0,b,f,e,z,o,g,k,1,bl);}else{CE(e,j-bb|0,0.0,bf,u);Bf(f,bf,i);Hf(a,d,t+c|0,b,f,e,z,o,g,k,bk,bl);}j=j+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function Hf(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.by!==0.0&&f.bg!==0.0){m=j.up.data[g.cN];if(k)n=j.cz.kz;else{g=m.m6;if(g===null)g=j.cz.go;if(l===null)l=BD(g);n=l;}g=m.m_;if(AWw)i=0.0;EF(b,c,d,e,f,h,g,n,i);return;}return;}}
function OT(a,b){var c,d,e,f,g,h,i;c=a.bS;d=c.fg;e=0;f=c.p.data.length;g=b;b=BE(e,f);if(b>0){c=new BC;V(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BE(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Qh(a){a.bS=null;JZ(a.em,new Qi);Hr(a.em);}
function ABY(a,b,c,d,e,f,g,h,i){var j,k;j=EZ(a.bS);if(j)j=j+a.bR|0;if(!j)j=j-a.bR|0;k=Z( -a.bR|0,j-g|0);if(k>=h)return;Bf(f,h-k|0,e);Bz(b,c+k|0,d,f,i);}
function ACK(){AVx=0;}
function UH(){C.call(this);this.xF=null;}
function UG(){C.call(this);this.qY=null;}
function AOv(a,b){var c;c=a.qY;E7(c,FJ(b,Ip(c)));}
function UC(){C.call(this);this.nm=null;}
function AMs(a,b){var c;c=a.nm;H_(c,FJ(b,Kf(c)));}
function UB(){C.call(this);this.s4=null;}
function AOs(a){var b,c;b=a.s4;c=b.hP?0:1;b.hP=c;b=new M;O(b);F3(G(b,B(311)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function UE(){C.call(this);this.rk=null;}
function AJr(a){var b,c;b=a.rk;c=b.hE?0:1;b.hE=c;b=new M;O(b);F3(G(b,B(312)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function UD(){C.call(this);this.nJ=null;}
function ALL(a){var b,c;b=a.nJ;c=b.i8^1;b.i8=c;b=new M;O(b);F3(G(b,B(313)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function U4(){C.call(this);this.tq=null;}
function ANU(a){var b,c,d,e,f;b=a.tq;c=(b.kB+3|0)%6|0;b.kB=c;d=b.ge.data;e=d.length;f=0;while(f<e){b=d[f];b.bR=c;b=b.bS;if(b!==null)b.hM=1;f=f+1|0;}}
function U3(){C.call(this);this.qk=null;}
function AI6(a){var b;b=a.qk;b.bT=b.bT?0:1;NT(b.dQ);b.dQ=ABx();RR(b,b.bh,b.cx,b.co.bK);}
var Fr=F(Cj);
var AVv=null;var AWx=null;var AVw=null;var AWy=null;function AEQ(){AEQ=Bl(Fr);ALT();}
function ABG(a,b){var c=new Fr();ABs(c,a,b);return c;}
function ABs(a,b,c){AEQ();C7(a,b,c);}
function ALT(){var b;AVv=ABG(B(314),0);AWx=ABG(B(315),1);b=ABG(B(316),2);AVw=b;AWy=H(Fr,[AVv,AWx,b]);}
var AB3=F(0);
function Jh(){var a=this;C.call(a);a.dW=null;a.eM=null;a.fi=null;}
var AU1=0;function ACc(a){var b;b=a.eM;if(b!==null){AU1=AU1-1|0;a.dW.dk.deleteTexture(b);a.eM=null;}}
function Ce(a){return a.fi.b;}
function C4(a){return a.fi.a;}
function Tz(a,b,c,d){var e;e=a.fi;e.b=b;e.a=c;LW(a);a.dW.dk.texStorage2D(3553,1,d,b,c);e=a.dW.dk;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function LW(a){var b,c;b=a.dW.dk;c=a.eM;b.bindTexture(3553,c);}
function CM(a,b){Na(a,b.li,b.kw,32856);PD(a,b,0,0);}
function Na(a,b,c,d){var e,f,g,h;a:{e=a.fi;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){LW(a);break a;}e=a.dW.dk;h=a.eM;e.deleteTexture(h);a.eM=a.dW.dk.createTexture();Tz(a,b,c,d);break a;}}Tz(a,b,c,d);}}
function HV(a,b,c,d){LW(a);PD(a,b,c,d);}
function PD(a,b,c,d){var e;e=a.dW.dk;b=b.ji;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function TD(){C.call(this);this.jO=null;}
var AWj=null;function PK(){var a=new TD();AAF(a);return a;}
function AAF(a){a.jO=Cn();}
function D5(a,b,c,d){Pp(a,ABI(d,b,c));}
function D6(b,c,d){return ABI(d,b,c);}
function GH(a,b,c,d){Jt(a,b,c,d,null);}
function Jt(a,b,c,d,e){Pp(a,ATs(null,b,c,d,e));}
function Pp(a,b){BY(a.jO,b);}
function Ho(a){return FQ(HH(a.jO,AWj));}
function Yl(){AWj=R(C6,0);}
var XL=F(0);
var AWk=null;function AC4(){AWk=new NB;}
function HA(){var a=this;C.call(a);a.u1=null;a.o8=null;a.uk=null;a.rq=null;a.pO=null;a.iN=null;}
function AWz(a,b,c,d,e,f){var g=new HA();JO(g,a,b,c,d,e,f);return g;}
function JO(a,b,c,d,e,f,g){a.u1=b;a.o8=c;a.uk=d;a.rq=e;a.pO=f;a.iN=g;}
function ACB(){var a=this;C.call(a);a.jP=null;a.qH=null;a.pN=null;}
function Y1(a,b,c){var d=new ACB();ANG(d,a,b,c);return d;}
function ANG(a,b,c,d){a.jP=b;a.qH=c;a.pN=d;}
function Gv(){var a=this;C.call(a);a.kV=null;a.hk=null;a.ph=null;}
function AWA(a,b,c){var d=new Gv();Hm(d,a,b,c);return d;}
function Hm(a,b,c,d){a.kV=b;a.hk=c;a.ph=d;}
function ABk(){var b,c;b=new Gv;c=S(B(317));XG();Hm(b,c,AVq,AVr);return b;}
function AAn(){var b,c;b=new Gv;c=S(B(258));AJf();Hm(b,c,AWB,AWC);return b;}
function YL(){var b,c;b=new Gv;ABq();c=AWD;AN3();Hm(b,c,AWE,AWF);return b;}
function AEd(){var a=this;C.call(a);a.lO=null;a.q0=0;}
function Zh(a,b){var c=new AEd();AQU(c,a,b);return c;}
function AQU(a,b,c){var d;d=new B2;a.lO=d;a.q0=b;d.by=c;}
function Q6(a,b){return B$(a.q0,b);}
var DR=F(0);
var AWp=null;var AWq=null;var AWm=null;var AWn=null;var AWo=null;var AVq=null;var AVr=null;var AWr=null;var AWs=null;function XG(){XG=Bl(DR);AOZ();}
function AOZ(){AWp=S(B(318));AWq=S(B(319));AWm=S(B(317));AWn=S(B(320));AWo=S(B(297));AVq=S(B(318));AVr=S(B(319));AWr=Ft(118,121,122,128);AWs=CL(63,66,68);}
var Gm=F(0);
var WZ=F();
function AOd(a,b,c,d){var e;b=By();d=Cv(d);e=new M;O(e);G(G(T(G(e,B(321)),c),B(275)),d);Bu(b,N(e));}
var W0=F();
function VQ(){C.call(this);this.gp=null;}
function AEK(a,b){return Kr(a.gp,b);}
function AOf(a,b,c,d){return Je(a.gp,b,c,d);}
function AMi(a,b,c){return I_(a.gp,b,c);}
function AJP(a,b,c){return DJ(a.gp);}
function XZ(){C.call(this);this.ro=null;}
function ANE(a,b){var c;c=a.ro.iu;c.dY=FJ(b,PJ(c));}
function NM(){C.call(this);this.nl=null;}
function DC(a,b){Gq(a.nl,b);return 1;}
var ABn=F();
function Pu(){C.call(this);this.mO=null;}
function AJX(a,b){var c;c=a.mO.i1;c.ex=FJ(b,RK(c));}
function Ro(){C.call(this);this.l6=null;}
function AEO(a,b){return DC(a.l6,null);}
var ZC=F();
function Mx(){C.call(this);this.m5=null;}
function AKT(a){KM(a.m5);}
function My(){C.call(this);this.qn=null;}
function AJl(a){JN(a.qn);}
function HM(){var a=this;C.call(a);a.C=null;a.c8=null;a.d9=null;a.et=null;a.fc=null;a.cr=0;a.fu=0;a.pf=0.0;}
function T2(a){var b,c,d,e,f,g,h,i;b=Tm(a);c=new IJ;d=new NP;e=N0(0,b,0);f=new Xt;f.s2=e;MH(d,1);e=BS(f);g=0;while(true){h=d.cg.data;i=h.length;if(g>=i)break;h[g]=BX(e);g=g+1|0;}d.i=i;T8(c,d);return c;}
function B3(a,b){return a.C.data[b];}
function CB(a){return a.C.data.length;}
function Tm(a){return F8(a,CB(a));}
function Fk(a,b){return a.C.data[b].Q;}
function K2(a,b){var c,d,e,f,g,h,i;c=a.C.data;d=c[b];e=c[b+1|0];f=DP(LI(d.p,e.p));g=a.C;h=g.data.length;if(b<h&&b>=0){i=R(Cx,h-1|0);c=i.data;Q1(g,b,i);c[b]=f;a.C=i;return;}d=new Bp;V(d);J(d);}
function O6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.C.data;if(!(c<d[b].Q?0:1)){d=(B3(a,b)).p.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.t)){f=L(h.t,g);break a;}g=g-I(h.t)|0;f=f+1|0;}f=0;}EK();h=new Bv;d=BR(1);d.data[0]=f;Hl(h,d);Gu(a,b,c,1,h);h=a.C.data[b];i=h.p;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].t);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].t)==1)h.p=Q1(i,j,R(B6,e-1|0));else{k=d[j];if(c<=0)l=DD(Dk(k.t,1),k.cN,k.b8);else if(c>=(I(k.t)-1|0)){l=new B6;m=k.t;Vb(l,B9(m,0,I(m)-
1|0),k.cN,k.b8);}else{i=BR(I(k.t)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.t,b);b=b+1|0;}b=n.length;while(c<b){m=k.t;e=c+1|0;n[c]=L(m,e);c=e;}l=DD(FT(i),k.cN,k.b8);}d[j]=l;}h.Q=h.Q-1|0;Ee(h);}else if(b!=(d.length-1|0))K2(a,b);}
function XQ(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){W5(a.C.data[b],c,e[0]);return;}g=f-1|0;h=Iz(a.C.data[b],c);d=a.C;i=Dl(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.p.data;m=l.length;c=!m?0:I(l[m-1|0].t);Jq(j,j.p.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fo(e[m]))j=DP(R(B6,0));else{j=new Cx;l=R(B6,1);l.data[0]=DD(e[m],0,0);H5(j,l);}d[b+m|0]=j;m=m+1|0;}Jq(h[1],0,0,e[g]);d[b+g|0]=h[1];a.C
=i;}
function VX(a,b){var c,d,e,f,g,h,i;c=D3(b);d=Fx(b);e=c.J;if(e==d.J)return B9(EI(a.C.data[e]),c.ba,d.ba);f=new M;O(f);b=a.C.data[c.J];e=c.ba;BB(BZ(f,Dk(EI(b),e)),10);g=a.C;h=c.J+1|0;e=d.J;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Yj(BZ(f,EI(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.C.data[d.J];i=d.ba;BZ(f,B9(EI(b),0,i));return N(f);}}b=new Wv;V(b);J(b);}
function Tp(a,b,c){var d;UF(a,b);d=D3(b);Gu(a,d.J,d.ba,1,c);}
function UF(a,b){var c,d,e,f,g,h,i;a:{c=D3(b);d=Fx(b);e=c.J;if(e==d.J)FR(a.C.data[e],c.ba,d.ba);else{b=a.C.data[e];FR(b,c.ba,b.Q);FR(a.C.data[d.J],0,d.ba);e=c.J+1|0;f=d.J;g=a.C;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Cx,(h-f|0)+e|0);AAu(g,e,f,i);a.C=i;K2(a,c.J);break a;}b=new Bp;V(b);J(b);}b=new Bp;V(b);J(b);}}}
function HK(a,b,c){return ER(b,GW(B3(a,b),c));}
function Nw(a,b){var c,d,e;c=0;d=0;while(true){e=a.C.data.length;if(c>=e)break;if((d+(B3(a,c)).Q|0)>=b)return BV(c,b-d|0);d=d+((B3(a,c)).Q+1|0)|0;c=c+1|0;}return BV(e,0);}
function F8(a,b){var c,d,e;c=0;d=a.C.data.length;e=0;while(e<b){c=c+Fk(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function J_(a,b){return UN(B3(a,b.bs),b.bC);}
function Gg(a){var b,c,d,e,f,g,h,i,j;b=BR(Tm(a));c=b.data;d=a.C.data.length;e=0;f=0;while(e<d){g=a.C.data[e].p.data;h=g.length;i=0;while(i<h){j=g[i].t;PB(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gu(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cr=a.cr+1|0;f=a.fc;g=R(G0,1);h=new G0;h.eG=b;h.e_=c;i=LV(e,B(223),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BV(b,c+I(i[0])|0);break a;}k=BV((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=BV(b,c);}i=g.data;h.kC=k;h.jm=d;h.gK=e;i[0]=h;BY(f,g);JA(a,b,c,d,e);}
function JA(a,b,c,d,e){var f;f=F8(a,b)+c|0;if(!d)Pw(a.c8,f,I(e));else TR(a.c8,f,I(e));}
function Tf(a,b){var c,d,e;c=LV(b.gK,B(223),(-1));if(b.jm){XQ(a,b.eG,b.e_,c);Pw(a.c8,F8(a,b.eG)+b.e_|0,I(b.gK));}else{c=c.data;d=AMR();B1(d.bM,b.eG,b.e_);e=c.length;if(e==1)B1(d.bD,b.eG,b.e_+I(c[0])|0);else B1(d.bD,(b.eG+e|0)-1|0,I(c[e-1|0]));UF(a,d);TR(a.c8,F8(a,b.eG)+b.e_|0,I(b.gK));}return b.kC;}
function Pf(a){a.fu=a.cr;}
var EV=F();
function Me(){EV.call(this);this.v1=null;}
function MA(){EV.call(this);this.v9=null;}
function P3(){EV.call(this);this.w5=null;}
var GU=F(0);
var Rj=F(0);
function Gi(){var a=this;C.call(a);a.J=0;a.ba=0;}
function B1(a,b,c){a.J=b;a.ba=c;}
function W9(a,b){a.J=b.J;a.ba=b.ba;}
function XC(a,b){var c;c=BE(a.J,b.J);if(c)return c;return BE(a.ba,b.ba);}
function Jb(){var a=this;C.call(a);a.kU=null;a.lB=null;}
function IV(a){return a.kU.bs;}
function LL(a){return a.kU.bC;}
var KJ=F(F$);
var AUJ=null;function AH3(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AEe(){var b;b=new KJ;XV(b);AUJ=b;}
function Ci(){Cj.call(this);this.kX=null;}
var AWG=null;var AWH=null;var AWI=null;var AWJ=null;var AWK=null;var AWL=null;var AWM=null;var AWN=null;var AWO=null;var AWP=null;var AWQ=null;var AWR=null;var AWS=null;var AWT=null;var AWU=null;var AVK=null;function ABC(){ABC=Bl(Ci);AQP();}
function DK(a,b,c){var d=new Ci();XF(d,a,b,c);return d;}
function APM(a,b,c,d){var e=new Ci();ABi(e,a,b,c,d);return e;}
function XF(a,b,c,d){ABC();C7(a,b,c);a.kX=If(d,null);}
function ABi(a,b,c,d,e){ABC();C7(a,b,c);a.kX=If(d,e);}
function AQP(){var b;b=new Ci;G9();XF(b,B(322),0,AVn);AWG=b;AWH=DK(B(323),1,S(B(324)));AWI=DK(B(325),2,S(B(326)));AWJ=DK(B(48),3,S(B(327)));AWK=DK(B(328),4,S(B(324)));AWL=DK(B(329),5,CL(188,63,60));AWM=DK(B(330),6,S(B(331)));AWN=DK(B(49),7,S(B(332)));AWO=DK(B(333),8,S(B(334)));AWP=APM(B(335),9,AVn,CL(52,65,52));AWQ=APM(B(336),10,S(B(337)),S(B(338)));AWR=DK(B(339),11,S(B(340)));AWS=DK(B(341),12,S(B(342)));AWT=DK(B(343),13,AVn);b=DK(B(344),14,S(B(345)));AWU=b;AVK=H(Ci,[AWG,AWH,AWI,AWJ,AWK,AWL,AWM,AWN,AWO,AWP,
AWQ,AWR,AWS,AWT,b]);}
function Iy(){var a=this;C.call(a);a.m_=null;a.m6=null;}
function If(a,b){var c=new Iy();AKP(c,a,b);return c;}
function AKP(a,b,c){a.m_=b;a.m6=c;}
var ADC=F();
function Im(b,c){var d,e,f;if(c<=0)return B(31);d=BR(c);e=d.data;e[0]=ACv(Ic(b,52));f=1;while(f<c){e[f]=ACv(Ic(b,62));f=f+1|0;}return FT(d);}
function ACv(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AAo=F();
function AD1(){var a=this;C.call(a);a.DQ=null;a.Bx=null;a.CD=0;a.Cb=0;}
var ADo=F(0);
function AC9(b){var c;a:{switch(b){case 0:break;case 1:c=B(138);break a;case 2:c=B(247);break a;case 3:c=B(246);break a;default:c=null;break a;}c=B(147);}return c;}
var CQ=F();
var ABP=F(CQ);
var ACu=F(CQ);
var Zr=F(CQ);
var ZO=F(CQ);
var ACX=F(CQ);
function AA1(){var a=this;EA.call(a);a.dp=0;a.b5=null;a.c2=0;a.uN=0.0;a.kp=0;}
function Gx(){var a=new AA1();AHx(a);return a;}
function AHx(a){var b;b=ADD(16);a.dp=0;a.b5=R(H7,b);a.uN=0.75;UL(a);}
function ADD(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function UL(a){a.kp=a.b5.data.length*a.uN|0;}
function NJ(a,b){return SX(a,b)===null?0:1;}
function DO(a,b){var c;c=SX(a,b);if(c===null)return null;return c.dv;}
function SX(a,b){var c,d;if(b===null)c=R8(a);else{d=b.i4();c=P1(a,b,d&(a.b5.data.length-1|0),d);}return c;}
function P1(a,b,c,d){var e;e=a.b5.data[c];while(e!==null&&!(e.iH==d&&YH(b,e.ds))){e=e.cL;}return e;}
function R8(a){var b;b=a.b5.data[0];while(b!==null&&b.ds!==null){b=b.cL;}return b;}
function La(a,b,c){var d,e,f;if(b===null){d=R8(a);if(d===null){a.c2=a.c2+1|0;d=Ux(a,null,0,0);e=a.dp+1|0;a.dp=e;if(e>a.kp)UY(a);}}else{e=b.i4();f=e&(a.b5.data.length-1|0);d=P1(a,b,f,e);if(d===null){a.c2=a.c2+1|0;d=Ux(a,b,f,e);e=a.dp+1|0;a.dp=e;if(e>a.kp)UY(a);}}b=d.dv;d.dv=c;return b;}
function Ux(a,b,c,d){var e,f,g;e=new H7;f=null;e.ds=b;e.dv=f;e.iH=d;g=a.b5.data;e.cL=g[c];g[c]=e;return e;}
function UY(a){var b,c,d,e,f,g,h,i;b=a.b5.data.length;b=ADD(!b?1:b<<1);c=R(H7,b);d=c.data;e=0;f=b-1|0;while(true){g=a.b5.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.iH&f;i=h.cL;h.cL=d[b];d[b]=h;h=i;}e=e+1|0;}a.b5=c;UL(a);}
function YH(b,c){return b!==c&&!b.cu(c)?0:1;}
function Cx(){var a=this;C.call(a);a.p=null;a.Q=0;a.fg=null;a.d_=null;a.dl=null;a.gJ=null;a.fB=0;a.hM=0;a.hl=0;}
var AWV=0;var AWW=0;var AVz=0;function DP(a){var b=new Cx();H5(b,a);return b;}
function H5(a,b){var c,d,e,f;c=b.data;a.p=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].t)|0;f=f+1|0;}a.Q=d;Ee(a);}
function GW(a,b){var c;c=Ij(a,b);return c<=0?0:a.dl.data[c-1|0];}
function Ij(a,b){var c,d,e,f;c=a.p.data.length;if(!c)return (-1);if(!(a.dl!==null&&!a.hl)){Wj(a);d=0;e=0;f=a.p.data.length;while(d<f){e=e+I(a.p.data[d].t)|0;a.dl.data[d]=e;d=d+1|0;}a.hl=0;}d=TT(a.dl,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function UN(a,b){var c;c=a.p.data;if(!c.length)return null;return c[Ij(a,b)];}
function FR(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.Q){a.p=R(B6,0);Ee(a);a.Q=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.p.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].t);i=I(a.p.data[f].t);j=BE(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.p.data[f];if(!b&&c==I(k.t)?1:0){g=a.p;a.p=Q1(g,e,R(B6,g.data.length-1|0));a.Q=a.Q-d|0;Ee(a);return;}a.p.data[e]=DD(Fb(B9(k.t,0,b),Dk(k.t,c)),k.cN,k.b8);}else{g=a.p.data;l=g[e];m=g[f];if(b){if(b!=
I(l.t))a.p.data[e]=DD(B9(l.t,0,b),l.cN,l.b8);e=e+1|0;}if(c==I(m.t))f=f+1|0;else if(c)a.p.data[f]=DD(Dk(m.t,c),m.cN,m.b8);g=a.p;a.p=AAu(g,e,f,R(B6,(g.data.length-f|0)+e|0));}a.Q=a.Q-d|0;Ee(a);}
function Iz(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cx,[DP(R(B6,0)),a]);if(b>=a.Q)return H(Cx,[a,DP(R(B6,0))]);c=a.p;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].t);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cx,[DP(KW(c,0,R(B6,d))),DP(KW(c,d,R(B6,f-d|0)))]);h=e[d];e=KW(c,0,R(B6,d+1|0));i=e.data;j=KW(c,d,R(B6,f-d|0));c=j.data;i[d]=DD(B9(h.t,0,b),h.cN,h.b8);c[0]=DD(Dk(h.t,b),h.cN,h.b8);return H(Cx,[DP(e),DP(j)]);}
function W5(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.p.data;if(e>=f.length)break a;g=I(f[d].t);if(b<=g)break;b=b-g|0;d=e;}}Jq(a,d,b,c);}
function Jq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.p;f=e.data;g=f.length;if(!g){h=R(B6,1);h.data[0]=RV(d);a.p=h;}else if(!b&&!c){i=R(B6,g+1|0);h=i.data;Dw(e,0,i,1,g);h[0]=RV(d);a.p=i;}else{j=f[b];if(c<=0)k=DD(Fb(d,j.t),j.cN,j.b8);else if(c>=I(j.t))k=DD(Fb(j.t,d),j.cN,j.b8);else{l=I(d);m=l+c|0;n=I(j.t)-c|0;h=BR(I(j.t)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.t,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.t,g+c|0);g=g+1|0;}k=DD(FT(h),j.cN,j.b8);}f[b]=k;}a.Q=a.Q+I(d)|0;Ee(a);}
function W6(a){var b,c,d,e,f,g;b=0;c=a.p.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<I(f.t)){if(L(f.t,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lf(a,b,c){var d,e,f,g,h,i,j;d=a.p.data.length;e=a.fg;if(!(e!==null&&e.data.length>=d)){a.fg=AEx(d);a.d_=BI(d);a.fB=1;}Wj(a);if(!a.fB)AWW=AWW+1|0;else{f=0;g=0.0;AWV=AWV+1|0;h=0;while(h<d){i=c.data;j=a.p.data[h];f=f+I(j.t)|0;a.dl.data[h]=f;Cw(b,i[j.b8]);g=g+En(b,j.t);a.fg.data[h]=g;a.d_.data[h]=g+0.5|0;h=h+1|0;}a.Q=f;a.fB=0;a.hl=0;}}
function Wj(a){var b;b=a.dl;if(!(b!==null&&b.data.length>=a.p.data.length)){a.dl=BI(a.p.data.length);a.hl=1;}}
function Ee(a){a.fB=1;a.hM=1;a.hl=1;a.gJ=null;}
function WD(a,b,c,d){var e,f,g,h,i,j,k;if(a.gJ===null)a.gJ=R($rt_arraycls($rt_intcls()),a.p.data.length);e=a.gJ.data[d];if(e===null){e=c.data;f=a.p.data[d];Cw(b,e[f.b8]);f=f.t;e=BI(I(f)-1|0);c=Gr(f);g=!d?0.0:a.fg.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;Mk(f,c,0,k);h[i]=g+En(b,f)+0.5|0;i=k;}a.gJ.data[d]=e;}return e;}
function GY(a,b,c,d){var e,f,g,h,i;if(a.p.data.length&&b){if(!(!a.fB&&a.d_!==null))Lf(a,c,d);if(b>=a.Q)return a.d_.data[a.p.data.length-1|0];e=0;f=0;a:{while(true){g=a.p.data;if(f>=g.length)break a;h=e+I(g[f].t)|0;i=BE(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.d_.data[f];}return (WD(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EZ(a){var b,c,d;a:{b=a.p.data.length;if(b){c=a.d_.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GR(a,b){var c;if(b>=a.Q)return b+1|0;c=Ij(a,b);return a.dl.data[c];}
function EI(a){var b,c,d,e;b=new M;FV(b,a.Q);c=a.p.data;d=c.length;e=0;while(e<d){BZ(b,c[e].t);e=e+1|0;}return N(b);}
function MP(b){var c,d,e,f;c=R(Cx,1);d=c.data;e=new Cx;f=R(B6,1);f.data[0]=RV(b);H5(e,f);d[0]=e;return c;}
function Yn(){AVz=0;}
var NB=F();
function AQY(a){}
function Ua(){C.call(this);this.s3=null;}
function ALg(a){var b;b=a.s3;Bu(By(),b);}
function B6(){var a=this;C.call(a);a.t=null;a.cN=0;a.b8=0;}
function RV(a){var b=new B6();APH(b,a);return b;}
function DD(a,b,c){var d=new B6();Vb(d,a,b,c);return d;}
function APH(a,b){Vb(a,b,0,0);}
function Vb(a,b,c,d){a.t=b;a.cN=c;a.b8=d;}
function Hi(b,c){return (!b?0:2)+(!c?0:1)|0;}
function IJ(){var a=this;C.call(a);a.cP=null;a.d2=0;}
var AWX=null;var AWY=null;function ATa(a){var b=new IJ();T8(b,a);return b;}
function ASc(a,b){var c=new IJ();XU(c,a,b);return c;}
function Vi(b,c){var d;d=BE(b.bL,c.bL);if(!d)d=BE(c.bP,b.bP);return d;}
function T8(a,b){XU(a,null,b);}
function XU(a,b,c){var d,e;a.d2=0;if(Eb(c))return;N6(c,AWX);if(b!==null)a.cP=MC(b);c=BS(c);while(B4(c)){d=BX(c);e=a.cP;if(e!==null){Q7(a,e,MC(d));continue;}a.cP=MC(d);}}
function O8(a,b){var c;if(b.eU)return b;b=BS(b.bv);while(true){if(!B4(b))return null;c=O8(a,BX(b));if(c!==null)break;}return c;}
function Kz(a,b,c){var d,e,f;d=b.b3;if(d.bL==c.bL&&d.bP==c.bP?1:0){e=BS(b.bv);while(B4(e)){f=Kz(a,BX(e),c);if(f!==null)return f;}return b;}b=BS(b.bv);while(true){if(!B4(b))return null;d=BX(b);if(P7(d,c.bL,c.bP)){e=Kz(a,d,c);if(e!==null)break;}}return e;}
function Wk(a,b,c){BY(c,b.b3);b=BS(b.bv);while(B4(b)){Wk(a,BX(b),c);}}
function Pw(a,b,c){a.d2=0;I$(a,a.cP,b,c);}
function I$(a,b,c,d){var e;if(C5(b)<c)return;a:{if(CV(b)>c){Kx(b,d);FW(b,d);b=BS(b.bv);while(B4(b)){I$(a,BX(b),c,d);}}else{if(!Kc(b,c)){if(a.d2)break a;if(C5(b)!=c)break a;}FW(b,d);if(CV(b)==c&&a.d2)Kx(b,d);e=BS(b.bv);while(B4(e)){I$(a,BX(e),c,d);}if(!a.d2){b.eU=1;a.d2=1;}}}}
function TR(a,b,c){a.d2=0;Mi(a,a.cP,b,c);}
function Mi(a,b,c,d){var e,f,g,h;if(C5(b)<c)return;e=CV(b);f=c+d|0;if(e>f){e= -d|0;Kx(b,e);FW(b,e);g=BS(b.bv);while(B4(g)){Mi(a,BX(g),c,d);}b.bv=ND(a,b.bv);}else{g=b.b3;if(c<=g.bL&&g.bP<=f?1:0){if(b!==a.cP){Jg(b,(-1));J9(b,(-1));}else{Jg(b,0);J9(b,0);}Hr(b.bv);}else{e=Kc(b,c);f=Kc(b,f);if(e&&f)FW(b, -d|0);else if(e)J9(b,c);else{if(!f)return;Jg(b,c);FW(b, -d|0);}h=BS(b.bv);while(B4(h)){Mi(a,BX(h),c,d);}b.bv=ND(a,b.bv);if(!a.d2){b.eU=1;a.d2=1;}}}}
function ND(a,b){var c,d,e,f,g,h;c=Cn();d=null;N6(b,AWY);b=BS(b);while(B4(b)){e=BX(b);if(CV(e)==C5(e))continue;if(!e.eU){if(d!==null){BY(c,d);d=null;}BY(c,e);}else if(d===null)d=e;else{f=Y(CV(d),CV(e));g=Z(C5(d),C5(e));h=MC(N0(f,g,d.b3.e9));h.dG=e.dG;h.eU=1;d=h;}}if(d!==null)BY(c,d);return c;}
function Q7(a,b,c){var d,e;a:{if(OD(b,c)){d=BS(b.bv);while(true){if(!B4(d)){BY(b.bv,c);c.dG=b;break a;}e=BX(d);if(OD(e,c))break;}Q7(a,e,c);return;}}}
function R9(a,b,c,d){var e,f,g,h,i,j;if((C5(c)-CV(c)|0)<43)e=B9(d,CV(c),C5(c));else{e=B9(d,CV(c),CV(c)+20|0);f=B9(d,C5(c)-20|0,C5(c));g=new M;O(g);G(G(G(g,e),B(197)),f);e=N(g);}e=U5(e,B(223),B(346));f=By();g=Cv(c);h=new M;O(h);i=T(h,b);BB(i,32);g=G(i,g);BB(g,9);G(g,e);Bu(f,N(h));c=BS(c.bv);j=b+1|0;while(B4(c)){R9(a,j,BX(c),d);}}
function ACa(){AWX=new Xg;AWY=new Xi;}
function ADG(){var a=this;C.call(a);a.bL=0;a.bP=0;a.e9=0;}
function N0(a,b,c){var d=new ADG();AHD(d,a,b,c);return d;}
function AHD(a,b,c,d){a.bL=b;a.bP=c;a.e9=d;}
function AO3(a,b){var c;if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){c=b;return a.bL==c.bL&&a.bP==c.bP&&a.e9==c.e9?1:0;}return 0;}
function AGa(a,b){var c;b=b;c=BE(a.bL,b.bL);if(!c)c=BE(b.bP,a.bP);return c;}
var Xg=F();
function AIU(a,b,c){return Vi(b,c);}
var Xi=F();
function AKx(a,b,c){b=b;c=c;return Vi(b.b3,c.b3);}
var EW=F();
var AWZ=null;var AW0=null;var AW1=null;var AW2=null;var AW3=null;var AW4=null;function ABE(){AWZ=new Vr;AW0=new Vp;AW1=new Vq;AW2=new Vn;AW3=new Vo;AW4=new XY;}
var G4=F(F4);
function ALt(a,b){var c;c=new Fh;V(c);J(c);}
function Xt(){G4.call(this);this.s2=null;}
function AH1(a){return 1;}
function AQL(a,b){var c;if(!b)return a.s2;c=new Bw;V(c);J(c);}
function Ym(){var a=this;C.call(a);a.b3=null;a.dG=null;a.bv=null;a.eU=0;}
function MC(a){var b=new Ym();ANl(b,a);return b;}
function ANl(a,b){a.eU=0;a.b3=b;a.dG=null;a.bv=Cn();}
function CV(a){return a.b3.bL;}
function C5(a){return a.b3.bP;}
function Jg(a,b){a.b3.bL=b;}
function J9(a,b){a.b3.bP=b;}
function Kx(a,b){var c;c=a.b3;c.bL=c.bL+b|0;}
function FW(a,b){var c;c=a.b3;c.bP=c.bP+b|0;}
function Kc(a,b){return CV(a)<=b&&b<C5(a)?1:0;}
function P7(a,b,c){var d;d=a.b3;return d.bL<=b&&c<=d.bP?1:0;}
function OD(a,b){b=b.b3;return P7(a,b.bL,b.bP);}
function AI1(a){var b,c,d,e,f;b=a.b3;c=b.bL;d=b.bP;e=b.e9;b=new M;O(b);BB(b,40);BB(T(G(T(G(T(b,c),B(44)),d),B(44)),e),41);b=N(b);c=a.eU;f=new M;O(f);F3(G(G(f,b),B(44)),c);return N(f);}
var ON=F(0);
var Gb=F(EM);
var J$=F(Gb);
var Vr=F(J$);
var Lt=F(EA);
var Vp=F(Lt);
var Vq=F(G4);
var FB=F(0);
var Vn=F();
var Pb=F(0);
var Vo=F();
var XY=F();
function Nt(){var a=this;C.call(a);a.hj=0;a.lJ=0;a.ic=0;a.fV=0;a.gt=null;}
function B4(a){return a.hj>=a.ic?0:1;}
function BX(a){var b,c;O1(a);b=a.hj;a.fV=b;c=a.gt;a.hj=b+1|0;return c.ri(b);}
function QF(a){var b,c,d;if(a.fV<0){b=new DZ;V(b);J(b);}O1(a);a.gt.t6(a.fV);a.lJ=a.gt.cs;c=a.fV;d=a.hj;if(c<d)a.hj=d-1|0;a.ic=a.ic-1|0;a.fV=(-1);}
function O1(a){var b;if(a.lJ>=a.gt.cs)return;b=new IA;V(b);J(b);}
var Z$=F();
function VN(){C.call(this);this.i$=null;}
function AOE(a,b){var c,d,e,f,g;c=a.i$;d=c.jF;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.h8;e.b=Et(0,e.b+f|0,c.gk.b-c.hi.b|0);c=a.i$;d=c.h8;d.a=Et(0,d.a+g|0,c.gk.a-c.hi.a|0);}a.i$.jF=b.h;return 1;}
var AAk=F();
function KA(){var a=this;C.call(a);a.ds=null;a.dv=null;}
function AG8(a,b){var c,d;if(a===b)return 1;if(!Ix(b,Hg))return 0;a:{b:{c:{d:{c=b;b=a.ds;if(b!==null){if(!b.cu(c.ds))break c;else break d;}if(c.ds!==null)break c;}b=a.dv;if(b!==null){if(!b.cu(c.dv))break c;else break b;}if(c.dv===null)break b;}d=0;break a;}d=1;}return d;}
function H7(){var a=this;KA.call(a);a.iH=0;a.cL=null;}
function ML(){C.call(this);this.pu=null;}
function AOR(a,b){HF(a.pu,b);}
function VU(){C.call(this);this.iy=null;}
function AQ2(a){return a.iy;}
var C_=F(0);
var AVL=null;var AW5=null;var AVN=null;var AVM=null;var AVP=null;var AVO=null;var AVR=null;var AVQ=null;var AVT=null;var AVS=null;function AMk(){AMk=Bl(C_);ALm();}
function ALm(){AVL=CY(206);AW5=S(B(347));AVN=S(B(348));AVM=S(B(253));AVP=S(B(349));AVO=S(B(350));AVR=S(B(351));AVQ=S(B(352));AVT=Ft(107,106,107,128);AVS=Ft(30,31,34,0);}
function B_(){Cj.call(this);this.kd=null;}
var AW6=null;var AW7=null;var AW8=null;var AW9=null;var AW$=null;var AW_=null;var AXa=null;var AXb=null;var AXc=null;var AXd=null;var AXe=null;var AXf=null;var AXg=null;var AXh=null;var AXi=null;var AVU=null;function ABa(){ABa=Bl(B_);AFZ();}
function Dx(a,b,c){var d=new B_();W7(d,a,b,c);return d;}
function ASg(a,b,c,d){var e=new B_();Qp(e,a,b,c,d);return e;}
function W7(a,b,c,d){ABa();C7(a,b,c);a.kd=If(d,null);}
function Qp(a,b,c,d,e){ABa();C7(a,b,c);a.kd=If(d,e);}
function AFZ(){var b,c;b=new B_;AMk();W7(b,B(322),0,AW5);AW6=b;AW7=Dx(B(323),1,S(B(353)));AW8=Dx(B(325),2,S(B(354)));AW9=Dx(B(48),3,S(B(355)));AW$=Dx(B(328),4,AW5);AW_=Dx(B(329),5,S(B(356)));AXa=Dx(B(330),6,S(B(357)));AXb=Dx(B(49),7,S(B(358)));AXc=Dx(B(333),8,S(B(359)));c=new B_;G9();Qp(c,B(335),9,AVn,S(B(351)));AXd=c;AXe=ASg(B(336),10,AVn,S(B(256)));AXf=Dx(B(339),11,S(B(360)));AXg=Dx(B(341),12,S(B(361)));AXh=Dx(B(343),13,AW5);b=Dx(B(344),14,S(B(345)));AXi=b;AVU=H(B_,[AW6,AW7,AW8,AW9,AW$,AW_,AXa,AXb,AXc,AXd,
AXe,AXf,AXg,AXh,b]);}
var DS=F(0);
var AVY=null;var AVZ=null;var AVV=null;var AVW=null;var AVX=null;var AWB=null;var AWC=null;var AV0=null;var AV1=null;function AJf(){AJf=Bl(DS);AMv();}
function AMv(){AVY=S(B(350));AVZ=S(B(362));AVV=S(B(258));AVW=S(B(357));AVX=S(B(347));AWB=S(B(350));AWC=S(B(363));AV0=S(B(364));AV1=CL(43,45,48);}
function AD7(){var a=this;C.call(a);a.bp=null;a.R=null;a.M=null;a.ea=null;}
function ABt(a){var b=new AD7();AQ0(b,a);return b;}
function AQ0(a,b){var c;a.M=AR1();a.bp=b;c=new Tq;Lv(c);c.lc=new B2;c.gD=b;a.R=c;}
function Iw(a,b,c,d){var e,f,g,h;e=a.R;f=C2(e.gl,c)?0:1;g=C2(e.gH,b)?0:1;h=d===e.iG?0:1;if(f){e.gl=c;e.dU=null;Xx(e,0);}e.gs=!f&&!g&&!h?0:1;e.gH=b;e.iG=d;e.hq=0;JX(a);}
function JQ(a){var b;b=a.R;b.c9=CG(b.c9,null);a.M=CG(a.M,null);}
function LN(a,b){var c,d,e;c=a.M;d=c.D;e=c.r;b=CG(c,b);a.M=b;b.iK(d,e,a.bp.bK);}
function Fm(a,b,c){var d;d=a.M;d.iK(b,c,d.dV);JX(a);}
function JX(a){var b,c,d,e;b=a.R;c=a.M.r.b;b.r.b=c;d=b.c9;if(d!==null&&c!=Ce(d)&&!(c>=b.hq&&Ce(b.c9)>=b.hq))b.gs=1;b=a.R;b.dV=a.bp.bK;if(TP(b))c=0;else{b=a.R;QR(b);e=CA(b.gD,b.iG);Xx(b,E0(b.dU)+(e*2|0)|0);c=b.r.a;}b=a.R.D;d=a.M.D;Bf(b,d.b,d.a-c|0);}
function Jz(b,c){if(b<0)c=B(365);else if(b>0)c=B(366);return c;}
function N9(a,b,c){var d;d=a.R.D.b;return (d-c|0)<=b&&b<d?1:0;}
function TF(a,b,c){var d,e;d=a.R;e=d.D.b+d.r.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Pl(a,b,c){var d;d=a.R.D.a;return (d-c|0)<=b&&b<d?1:0;}
function P6(a,b,c){var d,e;d=a.M;e=d.D.a+d.r.a|0;return e<=b&&b<(e+c|0)?1:0;}
function MR(a,b,c){var d,e,f;d=a.R.D.a-c|0;e=a.M;f=(e.D.a+e.r.a|0)+c|0;return d<=b&&b<f?1:0;}
function RM(a,b,c){var d,e;d=a.R.D.a+c|0;e=a.M;return ACy(b,d,(e.D.a+e.r.a|0)-c|0);}
function Vx(a,b,c){var d,e,f;d=a.R;e=d.D.b;f=e-c|0;e=(e+d.r.b|0)+c|0;return f<=b&&b<e?1:0;}
function UK(a,b,c){var d,e;d=a.R;e=d.D.b;return ACy(b,e+c|0,(e+d.r.b|0)-c|0);}
function ACy(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BE(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H3(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bm;f=new Bm;g=b.b;h=b.a;b=a.M;i=b.D;j=i.b;k=i.a;b=b.r;l=b.b;m=b.a;b=new Xl;b.nT=a;b.nS=e;b.nQ=f;b.nP=c;b.nX=g;b.nW=j;b.nV=l;b.nU=d;b.nZ=h;b.nY=k;b.rW=m;return b;}
var LA=F(0);
function Rg(){C.call(this);this.oH=null;}
function ALY(a,b){return QG(a.oH,b);}
var Si=F(0);
var AWi=null;function AB_(){AWi=new Qa;}
function AC_(){var a=this;C.call(a);a.bs=0;a.bC=0;}
function ER(a,b){var c=new AC_();AKD(c,a,b);return c;}
function AKD(a,b,c){a.bs=b;a.bC=c;}
function AEV(a,b){var c;if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){c=b;return a.bs==c.bs&&a.bC==c.bC?1:0;}return 0;}
function ANZ(a){var b,c,d,e,f,g,h;b=R(C,2).data;b[0]=FY(a.bs);b[1]=FY(a.bC);c=(-1515898884);d=0;while(d<b.length){e=b[d];if(e===null)f=0;else{g=e.fk;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;c=J8(h,4)^((h>>>7|0)|h<<25)^J8(c,13);d=d+1|0;}return c;}
function ANw(a,b){var c;b=b;c=BE(a.bs,b.bs);if(!c)c=BE(a.bC,b.bC);return c;}
function Td(){C.call(this);this.t_=null;}
function AGY(a,b){var c;c=a.t_;Tg(c,ES(c,b.h));KH(c.q,c.y,c.w);GQ(c);}
var YY=F();
function B$(b,c){return Dd(b*c);}
var X_=F();
function AC7(b,c,d,e,f,g){g.b=c.b;g.a=f;Bz(b,d.b,d.a,g,e);Bz(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bz(b,d.b,d.a+f|0,g,e);Bz(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ACr(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bz(b,j,k,i,h);Bz(b,j,k,i,h);Bz(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bz(b,l,j,i,h);Bz(b,l,j,i,h);Bz(b,l+g|0,j+g|0,i,h);}
function Nd(){var a=this;C.call(a);a.bY=null;a.iJ=null;a.eu=null;a.dF=0;a.er=0;a.f8=null;a.fz=null;a.fC=0;}
function SV(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dF;i=Bd(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Z(i,e))a:{while(true){if(d<=e){j=d;break a;}Eu(c);j=d+(-1)|0;b=C0(d);d=Bd(j,a.er)%a.eu.a|0;F6(a,c,b,a.fC,g);HV(a.bY,c,0,d);if(!(j%a.dF|0))break;d=j;}}else{Eu(b);k=a.dF-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;F6(a,b,C0(j),Bd(a.er,k)+a.fC|0,g);k=k+(-1)|0;j=h;}CM(a.bY,b);j=Z(i,e);}return j;}k=a.dF;h=Bd(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Y(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Eu(c);b=C0((d+f|0)+1|0);j=d+1|
0;d=Bd(d,a.er)%a.eu.a|0;F6(a,c,b,a.fC,g);HV(a.bY,c,0,d);if(!(j%a.dF|0))break;d=j;}}else{Eu(b);d=0;while(d<a.dF){h=h+1|0;F6(a,b,C0((h>e?h-f|0:h)+f|0),Bd(a.er,d)+a.fC|0,g);d=d+1|0;}CM(a.bY,b);j=Y(i,e);}return j;}
function IU(a,b,c,d,e,f){EF(b,a.iJ.b+d.b|0,c+d.a|0,a.f8,a.fz,a.bY,e,f,0.0);}
function F6(a,b,c,d,e){Ch(b,c,a.eu.b-20.0*e,d);}
var FK=F(Ik);
var WY=F(EE);
function P9(){C.call(this);this.ml=null;}
function AMX(a,b){var c,d;c=a.ml;d=c.dw+1|0;c.dw=d;c=new M;O(c);G(G(T(c,d),B(367)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function T5(){C.call(this);this.pC=null;}
function APt(a){var b,c;b=a.pC;c=new M;O(c);G(G(G(c,B(368)),b),B(369));$rt_globals.console.info($rt_ustr(N(c)));}
var Yq=F();
function F5(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Y5(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
var IA=F(Bp);
var L6=F(DV);
var AXj=0.0;var AXk=null;function ACb(){AXj=$rt_globals.NaN;AXk=E($rt_floatcls());}
var Fy=F();
var AUz=null;var AUB=null;var AUC=null;var AUA=null;var AUy=null;function AAW(){AUz=E4([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AUB=AGh([Bb(1),Bb(10),Bb(100),Bb(1000),Bb(10000),Bb(100000),Bb(1000000),Bb(10000000),Bb(100000000),Bb(1000000000),Cc(1410065408, 2),Cc(1215752192, 23),Cc(3567587328, 232),Cc(1316134912, 2328),Cc(276447232, 23283),Cc(2764472320, 232830),Cc(1874919424, 2328306),Cc(1569325056, 23283064),Cc(2808348672, 232830643)]);AUC=AGh([Bb(1),Bb(10),Bb(100),Bb(10000),Bb(100000000),
Cc(1874919424, 2328306)]);AUA=new T3;AUy=new Vk;}
var J1=F();
var AXl=null;var AXm=null;function ABF(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.nf=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.ka=0;c.jW=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Fa(CU(Bb(e),Bb(8388608)),El)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=ABO(AXm,f);if(h<0)h=( -h|0)-2|0;i=AXm.data;j=9+(f-i[h]|0)|0;k=Bb(e);l=AXl.data;m=EC(D7(BN(k,Bb(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=EC(D7(BN(k,Bb(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BE(q,r);e=e>0?Bd(m/q|0,q):e<0?Bd(m/r|0,r)+r|0:Bd((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.ka=e;c.jW=h-50|0;}
function Z5(){var b,c,d,e,f,g,h,i;AXl=BI(100);AXm=BI(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AXl.data;g=d+50|0;f[g]=$rt_udiv(e,20);AXm.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:EC(Cq(Bb(h),Gn(BN(Bb(b&((1<<i)-1|0)),Bb(10)),i)));f=AXl.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AXm.data[i]=c;d=d+1|0;}}
function Vk(){var a=this;C.call(a);a.ka=0;a.jW=0;a.nf=0;}
function LZ(){var a=this;C.call(a);a.v0=null;a.l$=0.0;a.wj=0.0;a.eP=null;a.gB=null;a.ll=null;a.eW=0;}
function ADp(a,b){var c;if(b!==null){a.gB=b;return a;}c=new BC;Bn(c,B(370));J(c);}
function ABU(a,b){var c;if(b!==null){a.ll=b;return a;}c=new BC;Bn(c,B(370));J(c);}
function PS(a,b,c,d){var e,f,g,$$je;e=a.eW;if(!(e==2&&!d)&&e!=3){a.eW=d?2:1;while(true){try{f=ADs(a,b,c);}catch($$e){$$je=Ef($$e);if($$je instanceof Bp){g=$$je;J(AG9(g));}else{throw $$e;}}if(G5(f))return f;if(H9(f)){if(d&&DN(b)){g=a.gB;G8();if(g===AU$)return D0(B5(b));if(B5(c)<=I(a.eP))return AVb;ED(b,b.U+B5(b)|0);if(a.gB===AU_)J3(c,a.eP);}return f;}if(Qo(f)){g=a.gB;G8();if(g===AU$)return f;if(g===AU_){if(B5(c)<I(a.eP))return AVb;J3(c,a.eP);}ED(b,b.U+J7(f)|0);}else if(LX(f)){g=a.ll;G8();if(g===AU$)break;if(g
===AU_){if(B5(c)<I(a.eP))return AVb;J3(c,a.eP);}ED(b,b.U+J7(f)|0);}}return f;}b=new DZ;V(b);J(b);}
function Zb(a,b){var c,d,e,f;c=a.eW;if(c&&c!=3){b=new DZ;V(b);J(b);}if(!B5(b))return ADQ(0);if(a.eW)a.eW=0;d=ADQ(Z(8,B5(b)*a.l$|0));while(true){e=PS(a,b,d,0);if(H9(e))break;if(G5(e))d=SA(a,d);if(!KI(e))continue;Vg(e);}b=PS(a,b,d,1);if(KI(b))Vg(b);while(true){f=a.eW;if(f!=3&&f!=2)break;a.eW=3;if(H9(AVc)){d.dm=d.U;d.U=0;d.g6=(-1);return d;}d=SA(a,d);}b=new DZ;V(b);J(b);}
function SA(a,b){var c,d,e;c=b.gW;d=YF(c,Z(8,c.data.length*2|0));e=AA6(d,0,d.data.length);ED(e,b.U);return e;}
function XH(){C.call(this);this.m9=null;}
function AFm(a,b){C9(a.m9,b);}
function VD(){C.call(this);this.ok=null;}
function ARd(a,b){var c,d;c=a.ok;d=c.dw+1|0;c.dw=d;c=b.g$;b=new M;O(b);G(G(T(b,d),B(371)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Qa=F();
function AL6(a,b){}
var AAE=F(CQ);
function Rm(){C.call(this);this.mk=null;}
function AJk(a){NF(a.mk);}
function Vd(){C.call(this);this.o7=null;}
function ANg(a){XB(a.o7);}
function T3(){var a=this;C.call(a);a.kM=El;a.jE=0;a.mP=0;}
var DZ=F(Bp);
var AB8=F(EE);
function AG9(a){var b=new AB8();ALu(b,a);return b;}
function ALu(a,b){a.iU=1;a.jf=1;a.ky=b;}
var Qi=F();
function AQd(a,b){ACc(b);}
function Q5(){C.call(this);this.tW=null;}
function AIx(a,b){C9(a.tW,b);}
function Q4(){C.call(this);this.of=null;}
function AL0(a,b){C9(a.of,b);}
function Sa(){var a=this;C.call(a);a.vS=null;a.vT=null;a.vR=null;}
function NK(){var a=this;C.call(a);a.sP=null;a.sR=null;a.sQ=0;}
function AE$(a,b){var c,d,e;c=a.sP;d=a.sR;e=a.sQ;d.n(Xj(c,(b.h.b+e|0)-c.dT.b|0));}
function NI(){var a=this;C.call(a);a.pK=null;a.pJ=null;a.pL=0;}
function AG$(a,b){var c,d,e;c=a.pK;d=a.pJ;e=a.pL;d.n(Ov(c,(b.h.a+e|0)-c.dT.a|0));}
function SM(){C.call(this);this.uz=null;}
function AGT(a,b){var c,d,e;c=a.uz;if(c.e.g.cr==c.kD){b=b.data;d=Es(b[0]);e=FG(b[1]);AA$(c.e.g,d,e);Pf(c.e.g);}}
function Km(){var a=this;LZ.call(a);a.no=null;a.rU=null;}
function ADs(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.no;e=0;f=0;g=a.rU;a:{b:{while(true){if((e+32|0)>f&&DN(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B5(b)+k|0;h=j.length;f=Y(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bw;c=new M;O(c);T(G(T(G(c,B(372)),l),B(95)),h);Bn(b,N(c));J(b);}if(B5(b)<m){b=new LQ;V(b);J(b);}if(m<0){b=new Bw;c=new M;O(c);G(T(G(c,B(96)),m),B(97));Bn(b,N(c));J(b);}n=b.U;h=n+b.kq|0;e=0;while(e<m){o=k+1|0;i=b.k5.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.U=n+m|0;e=0;}if(!DN(c)){p=!DN(b)&&e>=f?AVc:AVb;break a;}i=g.data;n=B5(c);o=i.length;n=Y(n,o);q=new U2;q.qQ=b;q.sV=c;p=ADE(a,d,e,f,g,0,n,q);e=q.uo;if(p===null&&0==q.jG)p=AVc;k=q.jG;h=0;if(c.lQ){b=new IT;V(b);J(b);}if(B5(c)<k)break;if(h>o){b=new Bw;c=new M;O(c);BB(T(G(T(G(c,B(98)),h),B(92)),o),41);Bn(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bw;c=new M;O(c);T(G(T(G(c,B(100)),l),B(95)),o);Bn(b,N(c));J(b);}if(k<0){b=new Bw;c=new M;O(c);G(T(G(c,B(96)),k),B(97));Bn(b,N(c));J(b);}o=c.U;m=0;while(m<k){l=o+
1|0;n=h+1|0;Sh(c,o,i[h]);m=m+1|0;o=l;h=n;}c.U=c.U+k|0;if(p!==null)break a;}b=new HS;V(b);J(b);}b=new Bw;c=new M;O(c);BB(T(G(T(G(c,B(98)),k),B(92)),h),41);Bn(b,N(c));J(b);}ED(b,b.U-(f-e|0)|0);return p;}
var Tu=F(Km);
function ADE(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Kp(h,2))break a;i=AVc;break a;}c=k+1|0;n=j[k];if(!FD(a,n)){c=c+(-2)|0;i=D0(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Kp(h,3))break a;i=AVc;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FD(a,n))break b;if(!FD(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(L5(p)){c=k+(-3)|0;i=D0(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=D0(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Kp(h,4))break a;i=AVc;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B5(h.sV)<2?0:1)break a;i=AVb;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FD(a,n))break c;if(!FD(a,o))break c;if(!FD(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=H2(r);m=c+1|0;j[c]=IC(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=D0(1);break a;}c=k+(-3)|0;i
=D0(1);}h.uo=c;h.jG=f;return i;}
function FD(a,b){return (b&192)!=128?0:1;}
function PO(){C.call(this);this.rA=null;}
function AGd(a,b){var c,d;c=a.rA;d=c.dw+1|0;c.dw=d;c=new M;O(c);G(G(T(c,d),B(373)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Vc(){C.call(this);this.xU=null;}
function AMg(a){Bu(By(),B(374));}
function NL(){C.call(this);this.sE=null;}
function AEr(a){return a.sE.kb();}
function Xz(){C.call(this);this.oD=null;}
function APV(a){return VG(a.oD);}
function XA(){C.call(this);this.si=null;}
function AFA(a){return VG(a.si);}
function Qu(){C.call(this);this.mG=null;}
function AEt(a,b){a.mG.n(FA(b));}
function Uy(){C.call(this);this.rX=null;}
function AQO(a,b){a.rX.o();}
function MJ(){var a=this;C.call(a);a.vq=null;a.vr=null;a.vt=0;a.vv=0;}
var Zs=F();
var ABJ=F();
function Sd(){C.call(this);this.uh=null;}
function AFp(a,b){var c,d,e,f;c=a.uh;d=Cv(b);e=new M;O(e);G(G(e,B(375)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new Sz;d.wc=c;d.oX=b;e=new Sy;e.u7=c;f=new Ut;f.v4=e;e=new VI;e.nh=d;c=b.eV;if(c!==null)c.arrayBuffer().then(Bk(e,"f"),Bk(f,"f"));else{b=b.gq.getFile();c=new VL;c.sL=e;c.sM=f;b.then(Bk(c,"f"),Bk(f,"f"));}}
function Sc(){C.call(this);this.wB=null;}
function AF6(a,b){var c;b=Cv(b);c=new M;O(c);G(G(c,B(376)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function SW(){C.call(this);this.sS=null;}
function AJm(a){DL(a.sS);}
var JV=F(DV);
var AXn=0.0;var AXo=null;function Zj(){AXn=$rt_globals.NaN;AXo=E($rt_doublecls());}
var Lw=F();
var AXp=null;var AXq=null;function AAT(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mP=Fa(CU(d,Cc(0, 2147483648)),El)?0:1;e=CU(d,Cc(4294967295, 1048575));f=EC(Gn(d,52))&2047;if(Fa(e,El)&&!f){c.kM=El;c.jE=0;return;}g=0;if(f)e=ASn(e,Cc(0, 1048576));else{e=Fn(e,1);while(Fa(CU(e,Cc(0, 1048576)),El)){e=Fn(e,1);f=f+(-1)|0;g=g+1|0;}}h=ABO(AXq,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AXq.data[h]|0)|0;j=Rh(e,AXp.data[h],i);if(ZN(j,Cc(2808348672, 232830643))){h=h+1|0;i=12+(f-AXq.data[h]|0)|0;j=Rh(e,AXp.data[h],
i);}k=D7(AXp.data[h],(63-i|0)-g|0);l=Gn(Cq(k,Bb(1)),1);m=Gn(k,1);if(Fa(e,Cc(0, 1048576)))m=Gn(m,2);n=Bb(10);while(Px(n,m)){n=BN(n,Bb(10));}if(ZN(MN(j,n),Dp(m,Bb(2))))n=Dp(n,Bb(10));o=Bb(1);while(Px(o,l)){o=BN(o,Bb(10));}if(AHi(Kn(o,MN(j,o)),Dp(l,Bb(2))))o=Dp(o,Bb(10));f=ASJ(n,o);e=f>0?BN(Dp(j,n),n):f<0?Cq(BN(Dp(j,o),o),o):BN(Dp(Cq(j,Dp(o,Bb(2))),o),o);if(ZN(e,Cc(2808348672, 232830643))){h=h+1|0;e=Dp(e,Bb(10));}else if(AHB(e,Cc(1569325056, 23283064))){h=h+(-1)|0;e=BN(e,Bb(10));}c.kM=e;c.jE=h-330|0;}
function Rh(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CU(b,Bb(65535));f=CU(D7(b,16),Bb(65535));g=CU(D7(b,32),Bb(65535));h=CU(D7(b,48),Bb(65535));i=CU(c,Bb(65535));j=CU(D7(c,16),Bb(65535));k=CU(D7(c,32),Bb(65535));l=CU(D7(c,48),Bb(65535));m=Cq(Cq(BN(k,e),BN(j,f)),BN(i,g));n=Cq(Cq(Cq(BN(l,e),BN(k,f)),BN(j,g)),BN(i,h));o=Cq(Cq(Fn(BN(l,h),32+d|0),Fn(Cq(BN(l,g),BN(k,h)),16+d|0)),Fn(Cq(Cq(BN(l,f),BN(k,g)),BN(j,h)),d));return Cq(d>16?Cq(o,Fn(n,d-16|0)):Cq(o,D7(n,16-d|0)),D7(m,32-d|0));}
function AAv(){var b,c,d,e,f,g,h,i,j,k;AXp=ATB(660);AXq=BI(660);b=Cc(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AXp.data;g=d+330|0;f[g]=FE(e,Bb(80));AXq.data[g]=c;e=FE(e,Bb(10));h=Nm(e,Bb(10));while(Px(e,b)&&Fa(CU(e,Cc(0, 2147483648)),El)){e=Fn(e,1);c=c+1|0;h=Fn(h,1);}e=Cq(e,Dp(h,Bb(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AHi(e,Cc(3435973836, 214748364))){e=Gn(e,1);j=j+1|0;d=d+(-1)|0;}k=BN(e,Bb(10));b=j<=0?k:Cq(k,Gn(BN(CU(b,Bb((1<<j)-1|0)),Bb(10)),j));f=AXp.data;g=(330-i|0)-1|0;f[g]=FE(b,
Bb(80));AXq.data[g]=d;i=i+1|0;}}
function MK(){C.call(this);this.r9=null;}
function ARD(a,b){var c,d;c=a.r9;d=new Bp;Bn(d,$rt_str(b.message));c.n(d);}
function TQ(){var a=this;C.call(a);a.qJ=0;a.l4=0;}
function FJ(a,b){return PC(a.qJ,b,a.l4);}
function EH(){var a=this;C.call(a);a.D=null;a.r=null;a.dV=0.0;}
function AR1(){var a=new EH();Lv(a);return a;}
function Lv(a){a.D=new Bm;a.r=new Bm;}
function AMy(a){}
function AQg(a){return BV(0,0);}
function PM(a,b,c,d){var e;if(!K9(a.D,b)){a.jU(b);Cy(a.D,b);}if(!K9(a.r,c)){a.jK(c);Cy(a.r,c);}e=a.dV;if(e!==d){a.dV=d;a.pi(e,d);}}
function DH(a,b){return F5(b,a.D,a.r);}
function Zc(a,b){var c,d,e,f;c=a.D;d=c.b;e=c.a;f=a.r;XG();Bz(b,d,e,f,AVq);}
function VE(a,b){var c;c=a.D;Lz(b,c.b,c.a,a.r);}
function APo(a,b){return 0;}
function AHQ(a,b){}
function AO7(a,b){}
function ARj(a,b,c){}
function APF(a,b,c,d){return 0;}
function AOX(a,b,c){return null;}
function AP5(a,b,c){return 0;}
function ALS(a,b){return 0;}
function AHI(a,b,c,d){return 0;}
function GB(){var a=this;EH.call(a);a.cC=null;a.ch=null;}
function AXr(){var a=new GB();TH(a);return a;}
function TH(a){Lv(a);a.cC=new Bm;a.ch=new Bm;}
function ADR(a){var b;b=a.ch;b.b=Wz(a,b.b);b=a.ch;b.a=QQ(a,b.a);}
function UZ(a,b){a.ch.b=Wz(a,b);}
function Q9(a,b){a.ch.a=QQ(a,b);}
function QQ(a,b){return Z(0,Y(b,a.cC.a-a.r.a|0));}
function Wz(a,b){return Z(0,Y(b,a.cC.b-a.r.b|0));}
function QO(){var a=this;GB.call(a);a.ct=null;a.dq=null;a.fy=null;a.qe=null;a.dy=null;a.bX=null;a.dM=null;a.eZ=null;a.dO=0;a.ez=0;a.l5=null;a.dH=0;a.dJ=0;a.fJ=0;a.gN=0;a.hn=0;a.dZ=0;a.dN=null;a.is=null;a.ng=null;a.gn=null;}
function ATF(a,b){var c=new QO();AAb(c,a,b);return c;}
function AAb(a,b,c){TH(a);a.dq=AKI();a.fy=new Bm;a.bX=AXs;a.dM=R(HW,0);a.dH=0;a.dJ=0;a.fJ=0;a.gN=0;a.hn=0;a.dN=ADJ(0);a.gn=Gx();a.ct=b;a.is=c;a.l5=c;S$(a);}
function S$(a){a.dO=B$(2.0,a.ct.bK);}
function V$(a){return a.bX.data.length?0:1;}
function VP(a,b){OI(a);a.bX=b;}
function OI(a){Bf(a.fy,0,0);}
function XE(a,b,c){a.ng=b;a.qe=c;a.dy=null;a.dN=null;a.ez=0;OI(a);}
function ARy(a){var b,c;a.eZ=CG(a.eZ,null);Bf(a.fy,0,0);b=a.gn;if(b.dp>0){b.dp=0;c=b.b5;Za(c,0,c.data.length,null);b.c2=b.c2+1|0;}a.dN=null;a.bX=AXs;a.dM=null;a.dH=0;a.dJ=0;a.fJ=0;SU(a.dq);a.is=null;}
function AGS(a,b,c){Th(a);S$(a);a.dy=null;a.dN=null;a.ez=0;}
function AJz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=IB(a.ct);if(V$(a))return;Ls(a);Cw(c,a.dy);d=EX(a);e=AD9(c,a.ez);f=Y(Iv(a.r.a,d),a.bX.data.length)+30|0;g=a.ng.m8;h=a.dM.data;i=h.length;if(i<f){a:{j=a.gN;k=a.hn;l=a.bX;m=a.dN;n=a.gn;o=R(HW,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.ga!==q){U7(m,t,n);p[r]=LB(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=LB(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=LB(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){U7(m,q,n);h[j]=null;}j=j+1|0;}a.dM=o;Cy(a.fy,L8(a.dN));TB(a,a.ct.cT);}a.gN=Y((a.ch.a+a.dO|0)/(EX(a)+a.dO|0)|0,a.bX.data.length-1|0);a.hn=Y((((a.ch.a+a.dq.x.a|0)-1|0)+a.dO|0)/(EX(a)+a.dO|0)|0,a.bX.data.length-1|0);if(!a.dM.data.length)return;Yk(a,e);VE(a,b);t=g.rq;m=a.D;Bz(b,m.b,m.a,a.r,t);m=a.dq.N;u=m.b;v=m.a;w=CA(a.ct,2.0);m=a.ct.dP;x=a.gN;j=u+w|0;while(x<=a.hn){n=Nb(a,x);k=Bd(x,EX(a));i=x+1
|0;y=k+Bd(i,a.dO)|0;k=j+a.dH|0;r=k+a.dJ|0;z=a.dZ!=x?0:1;ba=!z?t:g.pO;q=!z?g.u1:g.iN;bb=!z?g.o8:g.iN;bc=!z?g.uk:g.iN;bd=(v+y|0)-a.ch.a|0;EF(b,j,bd,n.gx,n.rb,a.eZ,q,ba,0.0);EF(b,k,bd,n.g2,n.hL,a.eZ,bb,ba,0.0);EF(b,r,bd,n.g8,n.ij,a.eZ,bc,ba,0.0);k=n.gx.b;s=j+k|0;Bf(m,Z(0,a.dH-k|0),n.gx.a);Bz(b,s,bd,m,ba);k=j+a.dH|0;s=n.g2.b;be=k+s|0;Bf(m,Z(0,a.dJ-s|0),n.g2.a);Bz(b,be,bd,m,ba);k=n.g8.b;bf=r+k|0;Bf(m,Z(0,(((a.dq.x.b-k|0)-a.dJ|0)-a.dH|0)-w|0),n.g8.a);Bz(b,bf,bd,m,ba);bg=(u+a.r.b|0)-w|0;Bf(m,w,EX(a)+a.dO|0);Bz(b,bg,
bd,m,t);x=i;}Is(b);}
function Yk(a,b){var c,d,e,f,g,h;c=0;d=a.gN;while(d<=a.hn){e=Nb(a,d);if(!(e!==null&&e.ga===a.bX.data[d])){f=a.dM.data;g=a.bX;e=a.dN;h=a.gn;c=d%f.length|0;if(f[c]!==null)U7(e,f[c],h);f[c]=LB(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cy(a.fy,L8(a.dN));TB(a,a.ct.cT);}}
function TB(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fy;c=CK(b,c.b+150|0,c.a);Cw(c,a.dy);d=a.dy;e=d.dr;f=e-(e+d.ee)/16.0;g=a.dM.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.ga.h9;k=d.hL;Ch(c,j,k.bk+a.ez,f+k.bx);j=d.ga.im;d=d.ij;Ch(c,j,d.bk+a.ez,f+d.bx);}i=i+1|0;}a:{d=a.gn;if(d.dp>0){h=d.c2;i=0;b:while(true){g=d.b5.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.ds;l=j.dv;k=k;l=l.h0;Ch(c,k,l.bk+a.ez,f+l.bx);j=j.cL;if(h!=d.c2)break b;}i=i+1|0;}b=new IA;V(b);J(b);}}b=CG(a.eZ,CT(b));a.eZ=b;CM(b,c);FM(c);}
function Nb(a,b){var c;c=a.dM.data;return c[b%c.length|0];}
function AKL(a,b){Cy(a.dq.x,b);}
function AHq(a,b){Cy(a.dq.N,b);}
function Zu(a){var b,c;Ls(a);b=EX(a);c=a.bX.data.length;b=Bd(b,c)+Bd(a.dO,c+1|0)|0;Bf(a.cC,a.r.b,b);}
function Th(a){var b,c,d,e,f,g,h,i,j;b=IB(a.ct);if(V$(a))return;Ls(a);Cw(b,a.dy);c=AD9(b,a.ez);d=a.bX.data;e=d.length;f=0;while(f<e){g=d[f];h=JK(c,g.gi);i=JK(c,g.h9);j=JK(c,g.im);a.dH=Z(a.dH,h);a.dJ=Z(a.dJ,i);a.fJ=Z(a.fJ,j);f=f+1|0;}}
function AQq(a,b){var c;c=NO(a,b.h);if(c>=0)a.dZ=c;return Ep(a.dq,a.D)&&Hd(a.ct.cy)?1:0;}
function AE1(a,b,c){if(!Ep(a.dq,b.h)&&!L1(a.dq)){b=a.l5;if(b!==null)b.o();}return null;}
function AFe(a,b,c,d){var e;if(d==1){e=NO(a,b.h);if(e>=0)Ny(a,a.bX.data[e]);}return 1;}
function Ny(a,b){a.is.o();b.l9.o();}
function NO(a,b){var c,d,e;if(!a.dM.data.length)return (-1);c=EX(a);d=(b.a-a.D.a|0)+a.ch.a|0;e=a.dO;e=(d+e|0)/(c+e|0)|0;if(e<a.bX.data.length)return e;return (-1);}
function EX(a){return E0(a.dy);}
function Ls(a){var b;if(a.dy===null){b=GN(a.ct,a.qe);a.dy=b;a.dN=ADJ(E0(b));a.ez=Dd(a.dy.lx);}}
function AKf(a,b){var c,d;a:{switch(b.bf){case 13:Ny(a,a.bX.data[a.dZ]);break a;case 27:break;case 37:a.dZ=0;break a;case 38:c=a.dZ;d=a.bX.data.length;a.dZ=((c+d|0)-1|0)%d|0;break a;case 39:a.dZ=a.bX.data.length-1|0;break a;case 40:a.dZ=(a.dZ+1|0)%a.bX.data.length|0;break a;default:break a;}a.is.o();}return 0;}
var VM=F();
function ARk(a){}
function AAh(){var a=this;EH.call(a);a.k2=null;a.rg=null;a.tB=null;a.bE=null;a.cZ=null;a.c1=null;a.r$=0.0;a.l7=null;a.ms=null;}
function Ze(a,b){var c=new AAh();AQc(c,a,b);return c;}
function AQc(a,b,c){var d;c=c.cy;Lv(a);d=new Vl;d.ra=a;a.rg=d;d=new Vm;d.nF=a;a.tB=d;a.r$=10.0;a.bE=b;a.k2=c;}
function AFi(a){a.bE=CG(a.bE,null);}
function Qs(a,b,c){var d;a.l7=b;a.ms=c;d=a.cZ;if(d!==null)Gd(d,b,c);d=a.c1;if(d!==null)Gd(d,b,c);}
function AGZ(a,b,c,d){var e;PM(a,b,c,d);PM(a.bE,b,c,d);if(d!==0.0){a.bE.ul();ADR(a.bE);e=a.r.b;if(e>0&&a.bE.cC.b>e?1:0)Kk(a);else a.c1=null;e=a.r.a;if(e>0&&a.bE.cC.a>e?1:0)KZ(a);else a.cZ=null;}}
function Kk(a){var b,c,d,e,f,g;b=a.c1;if(b===null)b=Hn();a.c1=b;T4(a,b);c=a.c1;b=a.bE;d=b.ch.b;e=a.D;f=e.b;g=a.r;Mo(c,d,f,g.b,b.cC.b,e.a+g.a|0,Jx(a));}
function KZ(a){var b,c,d,e,f,g;b=a.cZ;if(b===null)b=Hn();a.cZ=b;T4(a,b);c=a.cZ;b=a.bE;d=b.ch.a;e=a.D;f=e.a;g=a.r;In(c,d,f,g.a,b.cC.a,e.b+g.b|0,Jx(a));}
function Jx(a){return B$(a.r$,a.dV);}
function T4(a,b){var c,d;c=a.l7;d=a.ms;if(!(c!==null&&d!==null?(Kw(b.hx,c)&&Kw(b.hw,d)?1:0):0))Gd(b,c,d);}
function AOB(a,b){var c;a.bE.eQ(b);if(!(a.cZ===null&&a.c1===null)){CJ(b,1);c=a.cZ;if(c!==null)FU(c,b);c=a.c1;if(c!==null)FU(c,b);c=a.cZ;if(c!==null)Gc(c,b);c=a.c1;if(c!==null)Gc(c,b);CJ(b,0);}}
function MX(a,b){var c,d;a:{b:{c=a.cZ;if(!(c!==null&&II(c,b))){c=a.c1;if(c===null)break b;if(!II(c,b))break b;}d=1;break a;}d=0;}return d;}
function AI7(a,b,c,d){return !MX(a,b.h)&&!a.bE.cn(b,c,d)?0:1;}
function API(a,b,c){var d,e;d=a.cZ;if(d!==null){e=Fe(d,b.h,a.rg,1);if(e!==null)return e;}d=a.c1;if(d!==null){e=Fe(d,b.h,a.tB,0);if(e!==null)return e;}return a.bE.b4(b,c);}
function AII(a,b,c){return MX(a,b.h)?1:0;}
function AJZ(a,b){var c,d,e;c=a.cZ;d=c!==null&&Fp(c,b.h,a.k2)?1:0;c=a.c1;e=c!==null&&Fp(c,b.h,a.k2)?1:0;return !d&&!e&&!a.bE.bO(b)?0:1;}
function AOP(a,b,c,d){var e,f;if(!DH(a,b.h))return 0;e=B$(d*0.25,a.dV);f=B$(c*0.25,a.dV);if(b.bA){f=f+e|0;e=0;}if(a.cZ!==null&&e){b=a.bE;Q9(b,b.ch.a+e|0);KZ(a);}if(a.c1!==null&&f){b=a.bE;UZ(b,b.ch.b+f|0);Kk(a);}return 1;}
function AMd(a){var b,c;b=Jx(a);c=a.bE.iI();c.b=Z(c.b,b);c.a=Z(c.a,b);return c;}
function VS(){var a=this;GB.call(a);a.hG=null;a.kW=null;a.rP=null;a.pz=0.0;}
function AMY(a){var b,c;b=a.cC;c=a.r;Bf(b,c.b*3|0,c.a*5|0);}
function AKO(a){var b;b=B$(20.0,a.dV);return BV(b,b);}
function AJB(a,b){var c,d,e,f;c=a.rP;d=c.sG;e=c.sH;c=c.sF;b=Cv(b);f=new M;O(f);G(G(G(f,c),B(36)),b);Iw(e,N(f),d.sC,3.0);}
function AHj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;Zc(a,b);VE(a,b);c=B$(30.0,a.dV);d=a.ch;e=d.b;f=Bd(e/c|0,c);g=d.a;h=Bd(g/c|0,c);d=a.r;i=Bd(((e+d.b|0)-1|0)/c|0,c);e=Bd(((g+d.a|0)-1|0)/c|0,c);d=a.kW;d.a=c;d.b=c;a.hG.by=1.0;while(h<=e){g=a.D.a-a.ch.a|0;j=f;while(j<=i){k=a.D.b-a.ch.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ADi(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;WN(n,0.75,a.pz,a.hG);Bz(b,k+j|0,g+h|0,a.kW,a.hG);j=j+c|0;}h=h+c|0;}Is(b);}
function AKd(a,b){}
function Pm(){var a=this;C.call(a);a.sG=null;a.sH=null;a.sF=null;}
function No(){var a=this;C.call(a);a.tH=null;a.tJ=null;a.tI=null;}
function AQt(a,b,c,d){var e,f;b=a.tH;e=a.tJ;f=a.tI;Tk(b,e);if(f!==null)d.lV.o();if(Mt(d)){if(d.jp===null)Tw(b,ADV(d,e),d.hX,e);else PE(b,ADV(d,e),d.hX,e,d.jp);}}
function Xq(){C.call(this);this.kS=null;}
var AXs=null;function AM7(){var a=new Xq();ZK(a);return a;}
function ZK(a){a.kS=Cn();}
function M6(a,b,c,d,e){var f;f=new Jk;f.l9=e;f.h9=c;f.im=d;f.gi=b;BY(a.kS,f);}
function QI(a){return HH(a.kS,AXs);}
function Vy(b){var c,d;if(b===null)b=B(31);else{c=b.e3;if(c===null)b=B(31);else{d=Py(c,B(377),I(c));b=d==(-1)?b.e3:Dk(b.e3,d+1|0);}}return b;}
function AAl(){AXs=R(Jk,0);}
function HW(){var a=this;C.call(a);a.rb=null;a.hL=null;a.ij=null;a.gx=null;a.g2=null;a.g8=null;a.ga=null;}
function LB(b,c,d,e){var f,g,h;f=new HW;f.gx=new Bm;f.g2=new Bm;f.g8=new Bm;f.ga=b;g=DO(e,b.gi);if(g!==null)g.gM=g.gM+1|0;else{g=new N7;h=Hh(c,b.gi,d);g.gM=1;g.h0=h;La(e,b.gi,g);}e=g.h0;f.rb=e;Bf(f.gx,e.bg|0,e.by|0);e=Hh(c,b.h9,d);f.hL=e;Bf(f.g2,e.bg|0,e.by|0);b=Hh(c,b.im,d);f.ij=b;Bf(f.g8,b.bg|0,b.by|0);return f;}
function U7(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.ga.gi;f=DO(d,e);g=f.gM-1|0;f.gM=g;if(!g){a:{h=0;i=null;if(e===null){j=d.b5.data[0];while(j!==null){if(j.ds===null)break a;k=j.cL;i=j;j=k;}}else{l=e.i4();m=d.b5.data;h=l&(m.length-1|0);j=m[h];while(j!==null&&!(j.iH==l&&YH(e,j.ds))){k=j.cL;i=j;j=k;}}}if(j===null)j=null;else{if(i!==null)i.cL=j.cL;else d.b5.data[h]=j.cL;d.c2=d.c2+1|0;d.dp=d.dp-1|0;}Ia(b,f.h0);}Ia(b,c.hL);Ia(b,c.ij);}
function Tq(){var a=this;EH.call(a);a.gD=null;a.gH=null;a.gl=null;a.dU=null;a.iG=0.0;a.gs=0;a.hq=0;a.c9=null;a.lc=null;}
function LO(a){var b;b=a.r;return b.b&&b.a?0:1;}
function TP(a){var b,c;a:{if(a.gl!==null){b=a.gH;if(b!==null&&!Fo(b)){c=0;break a;}}c=1;}return c;}
function Xx(a,b){a.r.a=b;}
function O_(a,b,c,d,e){var f,g;f=a.gD.dP;Bf(f,d,a.r.a);g=a.D;Bz(b,g.b+c|0,g.a,f,e);}
function QR(a){if(a.dU===null)a.dU=GN(a.gD,a.gl);}
var RX=F(DV);
var AXt=null;function FE(b,c){return Long_udiv(b, c);}
function Nm(b,c){return Long_urem(b, c);}
function Le(b,c){return Long_ucompare(b, c);}
function AAt(){AXt=E($rt_longcls());}
function X4(){var a=this;C.call(a);a.rS=null;a.rR=null;a.rQ=null;}
function AHw(a){var b,c,d,e,f;b=a.rS;c=a.rR;d=a.rQ;e=By();f=new M;O(f);b=G(f,b);BB(b,9);b=G(b,c);BB(b,9);G(b,d);Bu(e,N(f));}
function Vl(){C.call(this);this.ra=null;}
function AQe(a,b){var c,d;c=a.ra;d=FJ(b,c.bE.cC.a-c.r.a|0);Q9(c.bE,d);KZ(c);}
function Vm(){C.call(this);this.nF=null;}
function AFq(a,b){var c,d;c=a.nF;d=FJ(b,c.bE.cC.b-c.r.b|0);UZ(c.bE,d);Kk(c);}
function Jk(){var a=this;C.call(a);a.l9=null;a.h9=null;a.im=null;a.gi=null;}
var Fh=F(Bp);
function Nz(){var a=this;C.call(a);a.mg=null;a.pA=null;a.sZ=0;a.ue=0;}
function LJ(a,b){return B5(a.pA)<b?0:1;}
var ADc=F();
function Ur(b,c,d,e){var f,g;f=b.next();g=new Xa;g.mv=b;g.mu=c;g.my=d;g.mw=e;f.then(Bk(g,"f"),Bk(d,"f"));}
function YJ(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADF(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(D8()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new W8;f.qf=b;f.qg=d;d.addEventListener("change",Bk(f,"handleEvent"));d.click();}
function YR(b,c){var d;if(c.isFile?1:0)b.n(Yh(c.file()));else{c=c.createReader();d=new WX;d.tc=b;c.readEntries(Bk(d,"f"));}}
function SP(){var a=this;C.call(a);a.bG=null;a.n5=null;a.hD=null;a.io=null;a.V=null;}
function Iu(a){return a.bG.co.iv;}
function N5(a){var b;b=new O3;b.px=a;return b;}
function AEc(a){var b,c,d,e,f,g;b=R(C6,4);c=b.data;d=a.V.Z.S.be;e=a.bG;BD(e);f=new VF;f.sB=e;c[0]=D6(B(378),d,f);e=a.V.Z.S.be;f=a.bG;BD(f);g=new VK;g.ne=f;c[1]=D6(B(379),e,g);e=a.V.Z.S.be;f=a.bG;BD(f);g=new VJ;g.ry=f;c[2]=D6(B(380),e,g);e=a.V.Z.S.be;f=a.bG;BD(f);g=new VH;g.u2=f;c[3]=D6(B(381),e,g);return FQ(b);}
function I5(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DL(a.V.b7);d=a.bG.e;e=Do(d);f=GX(d);g=a.bG.ej;if(c===null)h=null;else{AR9();switch(AXu.data[c.cW]){case 1:h=KQ(g,e,f);break a;case 2:h=Vw(g,e,f);break a;default:}b=new Eo;V(b);J(b);}}c=a.bG;e=ES(c,b);f=HK(c.e.g,e.bs,e.bC);g=OC(c,f);if(h!==null){f=c.e;i=e.bs;j=e.bC;e=new Pz;e.xq=c;e.xr=b;e.xs=g;h.r2(f,i,j,e,c.gF);}else{e=DO(c.e.g.d9,f);if(e!==null)Hx(c,e);else{e=DO(c.e.g.et,f);if(e!==null&&!Eb(e))U9(c.ie,b,e,c,g);else{g=c.ie;DL(g.b7);h=g.b7;k=R(C6,1);l=k.data;d=new C6;BD(h);f
=new Vz;f.nC=h;K4(d,f,B(382),g.Z.S.pr);l[0]=d;Ga(h,b,FQ(k),Nq(g,c));}}}}
var Y2=F(0);
function AI8(b){return 112<=b&&b<=123?1:0;}
var Ry=F();
function AIF(a,b){b=b;b.bY=CG(b.bY,null);}
var Xc=F();
function AOH(a,b){YJ(b);}
function Xb(){var a=this;C.call(a);a.pF=null;a.pE=null;}
function AHe(a,b){var c,d,e,f,g,h,i;c=a.pF;d=a.pE;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new PN;i.nx=c;i.nw=g;h.then(Bk(i,"f"),Bk(d,"f"));e=e+1|0;}}
var WF=F();
function AIM(a,b){YJ(b);}
function WE(){var a=this;C.call(a);a.oN=null;a.oO=null;}
function AJF(a,b){var c,d,e,f,g;c=a.oN;d=a.oO;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bv,1);g.data[0]=FA(b.name);Ur(f,c,d,g);}
var Ys=F();
function ABA(b,c){return ACt(null,b,c,0);}
function ACt(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=APp(c);g=Cb(f);h=Cb(f);i=Cb(f);j=R(Cx,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<CB(b)){l=Cb(f);c[k]=B3(b,k);l=4*l|0;f.eL=f.eL+l|0;}else c[k]=DP(ABm(f,d,0));k=k+1|0;}m=YK(f,h);n=new HM;n.d9=Gx();n.et=Gx();n.fc=Cn();if(!c.length){b=new BC;V(b);J(b);}n.C=j;n.fu=0;n.cr=0;n.c8=ATa(m);b=n.d9;e=0;while(e<i){La(b,ER(Cb(f),Cb(f)),ER(Cb(f),Cb(f)));e=e+1|0;}b=n.d9;m=n.et;o=new Uu;Sv(o,b);while(I9(o)){Ub(o);p=o.gP;q=p.ds;p=p.dv;b=Cn();if(DO(m,p)===null)La(m,p,b);BY(DO(m,
p),q);}if(m.j4===null){b=new O2;b.uv=m;m.j4=b;}b=m.j4;q=new QU;Sv(q,b.uv);while(I9(q)){Ub(q);b=q.gP.dv;m=AUo;c=R(C,b.i);d=c.data;HH(b,c);ZY(c,m);e=0;g=d.length;while(e<g){m=d[e];I2(b,e);b.cg.data[e]=m;e=e+1|0;}}P_(f);return n;}
function AA$(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=APp(c);g=Cb(f);h=Cb(f);i=Cb(f);j=Cb(f);k=Nw(b,g);l=Nw(b,h);m=(Iz(B3(b,k.b),k.a)).data[0].p;e=(Iz(B3(b,l.b),l.a)).data[1].p;n=0;o=i-1|0;while(n<i){p=ABm(f,d,g);if(!n)p=LI(m,p);if(n==o)p=LI(p,e);q=k.b+n|0;r=DP(p);b.C.data[q]=r;n=n+1|0;}r=YK(f,j);P_(f);if(!Eb(r)){s=N0(g,h,(-1));b=b.c8;f=ASc(s,r);r=Kz(b,b.cP,s);if(r!==null){f=f.cP.bv;if(r===b.cP)b.cP=Bs(f,0);else if(r.dG!==null){b=new NY;b.rT=r;JZ(f,b);q=Qb(r.dG.bv,
r);Ek(r.dG.bv,q);b=r.dG.bv;Pa(b,q);if(!Eb(f)){Jc(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.cg.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BS(f);g=0;while(g<j){c=b.cg.data;h=q+1|0;c[q]=BX(f);g=g+1|0;q=h;}b.cs=b.cs+1|0;}}}}}
function ABm(b,c,d){var e,f,g,h,i,j,k,l;e=Cb(b);f=R(B6,e);g=f.data;h=0;while(h<e){i=Cb(b);j=Cb(b);k=Cb(b);l=Cb(b);g[h]=DD(JG(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function YK(b,c){var d,e;d=Cn();e=0;while(e<c){BY(d,N0(Cb(b),Cb(b),Cb(b)));e=e+1|0;}return d;}
var WM=F(0);
var AVy=null;function YG(){AVy=null;}
function W8(){var a=this;C.call(a);a.qf=null;a.qg=null;}
function AIC(a,b){var c,d,e,f,g,h;b=a.qf;c=a.qg;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new MF;h.mp=b;h.mo=g;$rt_globals.setTimeout(Bk(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Yh(d.item(f));g=new Mp;g.rD=b;g.rE=c;$rt_globals.setTimeout(Bk(g,"onTimer"),0);f=f+1|0;}}
function Z4(){var a=this;C.call(a);a.hT=null;a.jN=null;}
function ADw(){var a=this;C.call(a);a.xN=0;a.xz=0;a.sa=0;a.ku=0;}
function Uj(){var a=this;C.call(a);a.mX=null;a.mW=null;}
function AJg(a){var b,c,d,e,f,g;b=a.mX;c=a.mW;if(C2(c.hT,b.e.fL)){c=c.jN;Cz(b,c.ku,c.sa,0);B1(b.q.bM,c.ku,c.sa);B1(b.q.bD,c.xz,c.xN);}else{d=(Cp(b.ej.rd)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ck(b);b=new Tn;b.tt=g;b.ts=c;BD(b);c=new PF;c.u0=b;$rt_globals.setTimeout(Bk(c,"onTimer"),0);}}}
function Ul(){var a=this;C.call(a);a.u4=null;a.uZ=null;}
function AN_(a){Hx(a.u4,a.uZ);}
function ACf(){var a=this;C.call(a);a.h6=null;a.eL=0;}
function APp(a){var b=new ACf();AEz(b,a);return b;}
function AEz(a,b){a.h6=b;a.eL=0;}
function Cb(a){var b,c;b=a.h6.data;c=a.eL;a.eL=c+1|0;return b[c];}
function P_(a){var b,c,d,e;if(a.eL!=a.h6.data.length){b=LH();c=a.h6.data.length;d=a.eL;e=new M;O(e);G(T(G(T(G(e,B(383)),c),B(384)),d),B(385));Bu(b,N(e));}}
var IT=F(Fh);
var HS=F(Bp);
var LQ=F(Bp);
function ZG(){C.call(this);this.D_=null;}
function Sg(){var a=this;C.call(a);a.te=null;a.ti=null;}
function AQT(a){var b,c;b=a.te;c=a.ti;FO(b.dX,c);}
function QX(){C.call(this);this.sh=null;}
function AJ2(a,b){HF(a.sh,b);}
function Sq(){var a=this;C.call(a);a.oh=null;a.og=null;}
function AFx(a){var b,c;b=a.oh;c=a.og;FO(b.dX,c);T0(b);}
var Yb=F();
function RQ(b,c){return b.data[c];}
function G0(){var a=this;C.call(a);a.eG=0;a.e_=0;a.kC=null;a.jm=0;a.gK=null;}
function AEU(a,b,c,d,e,f){var g=new G0();AJV(g,a,b,c,d,e,f);return g;}
function AJV(a,b,c,d,e,f,g){a.eG=b;a.e_=c;a.kC=BV(f,g);a.jm=d;a.gK=e;}
function ACn(){Gb.call(this);this.B9=null;}
function O2(){EM.call(this);this.uv=null;}
var Wv=F(Bw);
var Qg=F(0);
var Nu=F(0);
var LT=F();
function Z9(){var a=this;LT.call(a);a.Ea=null;a.Gb=0;a.EL=0;a.Cm=0;}
function Rs(){var a=this;C.call(a);a.nE=null;a.nD=null;}
function AF8(a){var b,c;b=a.nE;c=a.nD;UM();I5(b,c,AXv);}
function Rr(){var a=this;C.call(a);a.oQ=null;a.oS=null;}
function AEB(a){var b,c;b=a.oQ;c=a.oS;UM();I5(b,c,AXw);}
function Rq(){var a=this;C.call(a);a.uL=null;a.uM=null;}
function AKG(a){I5(a.uL,a.uM,null);}
function Rp(){var a=this;C.call(a);a.mV=null;a.mY=null;}
function APr(a){var b,c,d,e,f,g,h;b=a.mV;c=a.mY;d=Do(b.bG.e);e=GX(b.bG.e);d=Nn(b.bG.ej,d,e);DL(b.V.b7);b=b.bG;e=ES(b,c);if(d!==null){f=b.e;g=e.bs;h=e.bC;e=new Qe;e.wH=b;e.wG=c;d.G8(f,g,h,1,e,b.gF);}}
function Po(){C.call(this);this.p0=null;}
function AOL(a){var b;b=a.p0;DL(b.V.b7);GC(b.bG,N5(b),0);}
function Pq(){C.call(this);this.th=null;}
function AJK(a){var b;b=a.th;DL(b.V.b7);GC(b.bG,N5(b),1);}
function Pr(){C.call(this);this.sk=null;}
function AGA(a){var b,c,d;b=a.sk;DL(b.V.b7);c=Iu(b);b=b.bG;BD(b);d=new SS;d.sm=b;QH(c,d,YD(B(386)));}
var Xd=F(0);
var AVu=null;function Yo(){AVu=new Pk;}
function V0(){C.call(this);this.sy=null;}
function AFu(a){var b,c,d;b=a.sy;DL(b.V.b7);c=Iu(b);b=b.bG;BD(b);d=new Q3;d.qu=b;LR(c,d);}
function PQ(){C.call(this);this.mZ=null;}
function AOM(a,b,c){var d,e;c=a.mZ;d=c.e.g;e=b.fk;b=c.eH;W5(d.C.data[e],0,b);}
function SJ(){C.call(this);this.nK=null;}
function AKe(a){a.nK.s6();}
function SK(){C.call(this);this.rc=null;}
function ALx(a){a.rc.on();}
function SI(){C.call(this);this.uU=null;}
function AMU(a){a.uU.pS();}
function N_(){C.call(this);this.rC=null;}
function AJa(a){a.rC.ub();}
function N$(){C.call(this);this.qr=null;}
function APB(a){a.qr.uD();}
function U6(){C.call(this);this.q2=null;}
function AG5(a){var b,c,d,e,f,g,h,i;b=a.q2;c=(b.n5.dh()).data;d=R(C6,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new X5;i.pw=b;i.pv=h;e[f]=ABI(i,h,b.V.Z.S.be);f=f+1|0;}return d;}
function VF(){C.call(this);this.sB=null;}
function ANr(a){var b,c,d,e,f;b=a.sB.e.g;c=b.cr;d=new M;O(d);T(G(d,B(387)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fu;d=new M;O(d);T(G(d,B(388)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.c8;e=FT(Gg(b));R9(d,0,d.cP,e);b=By();f=b.jX;f.data[0]=10;NW(b,f,0,1);}
function VK(){C.call(this);this.ne=null;}
function AKm(a){SE(a.ne);}
function VJ(){C.call(this);this.ry=null;}
function AFn(a){WB(a.ry);}
function VH(){C.call(this);this.u2=null;}
function AHb(a){J2(a.u2);}
function MV(){C.call(this);this.nG=null;}
function AKv(a,b,c){FR(B3(a.nG.e.g,b.fk),0,I(c));}
function PN(){var a=this;C.call(a);a.nx=null;a.nw=null;}
function AHr(a,b){a.nx.n(ABR(a.nw,b));}
var IL=F(0);
function MF(){var a=this;C.call(a);a.mp=null;a.mo=null;}
function AJL(a){YR(a.mp,a.mo);}
function Mp(){var a=this;C.call(a);a.rD=null;a.rE=null;}
function AEl(a){a.rD.n(a.rE);}
var Pk=F();
function Xa(){var a=this;C.call(a);a.mv=null;a.mu=null;a.my=null;a.mw=null;}
function AI3(a,b){var c,d,e,f,g,h,i;c=a.mv;d=a.mu;e=a.my;f=a.mw;if(!(b.done?1:0)){Ur(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new T$;c.oP=d;c.oR=g;c.oT=f;b.then(Bk(c,"f"),Bk(e,"f"));}else{h=f.data;c=g.values();b=FA(g.name);i=h.length;f=Dl(f,i+1|0);f.data[i]=b;Ur(c,d,e,f);}}}
function GS(){var a=this;C.call(a);a.h2=0;a.rH=0;a.hf=null;a.gP=null;a.o4=null;a.iO=null;}
function AXx(a){var b=new GS();Sv(b,a);return b;}
function Sv(a,b){a.iO=b;a.rH=b.c2;a.hf=null;}
function I9(a){var b,c;if(a.hf!==null)return 1;while(true){b=a.h2;c=a.iO.b5.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.h2=b+1|0;}return 0;}
function ZH(a){var b;if(a.rH==a.iO.c2)return;b=new IA;V(b);J(b);}
function Ub(a){var b,c,d,e;ZH(a);if(!I9(a)){b=new XS;V(b);J(b);}b=a.hf;if(b!==null){c=a.gP;if(c!==null)a.o4=c;a.gP=b;a.hf=b.cL;}else{d=a.iO.b5.data;e=a.h2;a.h2=e+1|0;b=d[e];a.gP=b;a.hf=b.cL;a.o4=null;}}
var Uu=F(GS);
var QU=F(GS);
function QS(){var a=this;C.call(a);a.f=null;a.df=0;a.jL=null;a.mU=0;a.fZ=0;a.ev=0;a.br=0;a.kK=null;}
function JP(a){return a.f.bH;}
function XD(a,b,c,d){var e,f,g,h,i,j;e=Cn();f=a.df;g=0;if(c!=f)a.df=c;a:{switch(b){case -1073741784:h=new RG;c=a.br+1|0;a.br=c;Fl(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Pv;c=a.br+1|0;a.br=c;Fl(h,c);break a;case -33554392:h=new SO;c=a.br+1|0;a.br=c;Fl(h,c);break a;default:c=a.fZ+1|0;a.fZ=c;if(d!==null)h=ATj(c);else{h=new Fv;Fl(h,0);g=1;}c=a.fZ;if(c<=(-1))break a;if(c>=10)break a;a.jL.data[c]=h;break a;}h=new Xu;Fl(h,(-1));}while(true){if(EY(a.f)&&a.f.j==(-536870788))
{d=APY(B8(a,2),B8(a,64));while(!Dj(a.f)&&EY(a.f)){i=a.f;j=i.j;if(j&&j!=(-536870788)&&j!=(-536870871))break;Ct(d,Be(i));i=a.f;if(i.bd!=(-536870788))continue;Be(i);}i=KN(a,d);i.K(h);}else if(a.f.bd==(-536870788)){i=GJ(h);Be(a.f);}else{i=OU(a,h);d=a.f;if(d.bd==(-536870788))Be(d);}if(i!==null)BY(e,i);if(Dj(a.f))break;if(a.f.bd==(-536870871))break;}if(a.f.j$==(-536870788))BY(e,GJ(h));if(a.df!=f&&!g){a.df=f;d=a.f;d.fH=f;d.j=d.bd;d.eo=d.eB;j=d.c5;d.u=j+1|0;d.gR=j;E1(d);}switch(b){case -1073741784:break;case -536870872:d
=new MD;Fw(d,e,h);return d;case -268435416:d=new V1;Fw(d,e,h);return d;case -134217688:d=new QV;Fw(d,e,h);return d;case -67108824:d=new Tx;Fw(d,e,h);return d;case -33554392:d=new DQ;Fw(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return AS7(Bs(e,0),h);default:return ASI(e,h);}return GJ(h);}d=new IR;Fw(d,e,h);return d;}
function ACL(a){var b,c,d,e,f,g,h;b=BI(4);c=(-1);d=(-1);if(!Dj(a.f)&&EY(a.f)){e=b.data;c=Be(a.f);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BR(3);b=e.data;b[0]=c&65535;f=a.f;g=f.bd;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Be(f);f=a.f;g=f.bd;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Be(f);return APE(e,3);}return APE(e,2);}if(!B8(a,2))return ZF(b[0]);if(B8(a,64))return ANJ(b[0]);return AGi(b[0]);}e=b.data;c=1;while(c<4&&!Dj(a.f)&&EY(a.f)){h=c+1|0;e[c]=Be(a.f);c=h;}if(c==1){h=e[0];if(!(AXy.xd(h)==AXz?0:1))return Xr(a,e[0]);}if
(!B8(a,2))return ATW(b,c);if(B8(a,64)){f=new W_;NR(f,b,c);return f;}f=new TK;NR(f,b,c);return f;}
function OU(a,b){var c,d,e,f,g,h,i;if(EY(a.f)&&!JC(a.f)&&Ke(a.f.j)){if(B8(a,128)){c=ACL(a);if(!Dj(a.f)){d=a.f;e=d.bd;if(!(e==(-536870871)&&!(b instanceof Fv))&&e!=(-536870788)&&!EY(d))c=L7(a,b,c);}}else if(!N1(a.f)&&!U$(a.f)){f=new N2;O(f);while(!Dj(a.f)&&EY(a.f)&&!N1(a.f)&&!U$(a.f)){if(!(!JC(a.f)&&!a.f.j)&&!(!JC(a.f)&&Ke(a.f.j))){g=a.f.j;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Be(a.f);if(!L0(e))BB(f,e&65535);else Ie(f,Go(e));}if(!B8(a,2)){c=new Rv;Dz(c);c.cm
=N(f);e=f.L;c.bF=e;c.j2=AL7(e);c.kN=AL7(c.bF);h=0;while(h<(c.bF-1|0)){Q0(c.j2,L(c.cm,h),(c.bF-h|0)-1|0);Q0(c.kN,L(c.cm,(c.bF-h|0)-1|0),(c.bF-h|0)-1|0);h=h+1|0;}}else if(B8(a,64))c=ATT(f);else{c=new Nc;Dz(c);c.gS=N(f);c.bF=f.L;}}else c=L7(a,b,W$(a,b));}else{d=a.f;if(d.bd!=(-536870871))c=L7(a,b,W$(a,b));else{if(b instanceof Fv)J(B7(B(31),d.bH,NZ(d)));c=GJ(b);}}a:{if(!Dj(a.f)){e=a.f.bd;if(!(e==(-536870871)&&!(b instanceof Fv))&&e!=(-536870788)){f=OU(a,b);if(c instanceof CX&&!(c instanceof E2)&&!(c instanceof CO)
&&!(c instanceof Ex)){i=c;if(!f.bN(i.G)){c=new Wf;EQ(c,i.G,i.d,i.hc);c.G.K(c);}}if((f.hg()&65535)!=43)c.K(f);else c.K(f.G);break a;}}if(c===null)return null;c.K(b);}if((c.hg()&65535)!=43)return c;return c.G;}
function L7(a,b,c){var d,e,f,g,h;d=a.f;e=d.bd;if(c!==null&&!(c instanceof BT)){switch(e){case -2147483606:Be(d);d=new X2;Da(d,c,b,e);Mb();c.K(AXA);return d;case -2147483605:Be(d);d=new Pn;Da(d,c,b,(-2147483606));Mb();c.K(AXA);return d;case -2147483585:Be(d);d=new O4;Da(d,c,b,(-536870849));Mb();c.K(AXA);return d;case -2147483525:f=new M8;d=E$(d);g=a.ev+1|0;a.ev=g;I1(f,d,c,b,(-536870849),g);Mb();c.K(AXA);return f;case -1073741782:case -1073741781:Be(d);d=new Rl;Da(d,c,b,e);c.K(d);return d;case -1073741761:Be(d);d
=new Qc;Da(d,c,b,(-536870849));c.K(b);return d;case -1073741701:h=new UP;d=E$(d);e=a.ev+1|0;a.ev=e;I1(h,d,c,b,(-536870849),e);c.K(h);return h;case -536870870:case -536870869:Be(d);if(c.hg()!=(-2147483602)){d=new CO;Da(d,c,b,e);}else if(B8(a,32)){d=new Rn;Da(d,c,b,e);}else{d=new Oa;f=O7(a.df);Da(d,c,b,e);d.j9=f;}c.K(d);return d;case -536870849:Be(d);d=new FN;Da(d,c,b,(-536870849));c.K(b);return d;case -536870789:h=new E_;d=E$(d);e=a.ev+1|0;a.ev=e;I1(h,d,c,b,(-536870849),e);c.K(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Be(d);d=new X3;EQ(d,f,b,e);f.d=d;return d;case -2147483585:Be(d);c=new Wa;EQ(c,f,b,(-2147483585));return c;case -2147483525:c=new OS;R6(c,E$(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Be(d);d=new P8;EQ(d,f,b,e);f.d=d;return d;case -1073741761:Be(d);c=new TZ;EQ(c,f,b,(-1073741761));return c;case -1073741701:c=new QW;R6(c,E$(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Be(d);d=ATc(f,b,e);f.d=d;return d;case -536870849:Be(d);c
=new Ex;EQ(c,f,b,(-536870849));return c;case -536870789:return ASk(E$(d),f,b,(-536870789));default:}return c;}
function W$(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fv;while(true){a:{e=a.f;f=e.bd;if((f&(-2147418113))==(-2147483608)){Be(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.df=g;else{if(f!=(-1073741784))g=a.df;c=XD(a,f,g,b);e=a.f;if(e.bd!=(-536870871))J(B7(B(31),e.bH,e.c5));Be(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Be(e);c
=APq(0);break a;case -2147483577:Be(e);c=new N8;BK(c);break a;case -2147483558:Be(e);c=new WT;h=a.br+1|0;a.br=h;AC$(c,h);break a;case -2147483550:Be(e);c=APq(1);break a;case -2147483526:Be(e);c=new WC;BK(c);break a;case -536870876:Be(e);a.br=a.br+1|0;if(B8(a,8)){if(B8(a,1)){c=ASz(a.br);break a;}c=ARS(a.br);break a;}if(B8(a,1)){c=ASO(a.br);break a;}c=ATo(a.br);break a;case -536870866:Be(e);if(B8(a,32)){c=ATI();break a;}c=ATi(O7(a.df));break a;case -536870821:Be(e);i=0;c=a.f;if(c.bd==(-536870818)){i=1;Be(c);}c
=KN(a,F1(a,i));c.K(b);e=a.f;if(e.bd!=(-536870819))J(B7(B(31),e.bH,e.c5));OB(e,1);Be(a.f);break a;case -536870818:Be(e);a.br=a.br+1|0;if(!B8(a,8)){c=new Kl;BK(c);break a;}c=new Ni;e=O7(a.df);BK(c);c.qB=e;break a;case 0:j=e.eB;if(j!==null)c=KN(a,j);else{if(Dj(e)){c=GJ(b);break a;}c=ZF(f&65535);}Be(a.f);break a;default:break b;}Be(e);c=new Kl;BK(c);break a;}h=(f&2147483647)-48|0;if(a.fZ<h)J(B7(B(31),Fi(e),NZ(a.f)));Be(e);a.br=a.br+1|0;c=!B8(a,2)?ARZ(h,a.br):B8(a,64)?ASA(h,a.br):ATQ(h,a.br);a.jL.data[h].jJ=1;a.mU
=1;break a;}if(f>=0&&!GL(e)){c=Xr(a,f);Be(a.f);}else if(f==(-536870788))c=GJ(b);else{if(f!=(-536870871)){b=new IF;c=!GL(a.f)?WS(f&65535):a.f.eB.cq();e=a.f;Ja(b,c,e.bH,e.c5);J(b);}if(d){b=new IF;e=a.f;Ja(b,B(31),e.bH,e.c5);J(b);}c=GJ(b);}}}if(f!=(-16777176))break;}return c;}
function F1(a,b){var c,d,e,f,g,h,i,j,$$je;c=APY(B8(a,2),B8(a,64));Eq(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dj(a.f))break a;h=a.f;b=h.bd;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Ct(c,d);d=Be(a.f);h=a.f;if(h.bd!=(-536870874)){d=38;break d;}if(h.j==(-536870821)){Be(h);e=1;d=(-1);break d;}Be(h);if(g){c=F1(a,0);break d;}if(a.f.bd==(-536870819))break d;WI(c,F1(a,0));break d;case -536870867:if(!g){b=h.j;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Be(h);h=a.f;i=h.bd;if(GL(h))break c;if
(i<0){j=a.f.j;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Ke(i))break e;i=i&65535;break e;}catch($$e){$$je=Ef($$e);if($$je instanceof D2){break b;}else{throw $$e;}}}try{BP(c,d,i);}catch($$e){$$je=Ef($$e);if($$je instanceof D2){break b;}else{throw $$e;}}Be(a.f);d=(-1);break d;}}if(d>=0)Ct(c,d);d=45;Be(a.f);break d;case -536870821:if(d>=0){Ct(c,d);d=(-1);}Be(a.f);j=0;h=a.f;if(h.bd==(-536870818)){Be(h);j=1;}if(!e)Ye(c,F1(a,j));else WI(c,F1(a,j));e=0;Be(a.f);break d;case -536870819:if(d>=0)Ct(c,
d);d=93;Be(a.f);break d;case -536870818:if(d>=0)Ct(c,d);d=94;Be(a.f);break d;case 0:if(d>=0)Ct(c,d);h=a.f.eB;if(h===null)d=0;else{AD6(c,h);d=(-1);}Be(a.f);break d;default:}if(d>=0)Ct(c,d);d=Be(a.f);}g=0;}J(B7(B(31),JP(a),a.f.c5));}J(B7(B(31),JP(a),a.f.c5));}if(!f){if(d>=0)Ct(c,d);return c;}J(B7(B(31),JP(a),a.f.c5-1|0));}
function Xr(a,b){var c,d,e;c=L0(b);if(B8(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AGi(b&65535);}if(B8(a,64)&&b>128){if(c){d=new Mu;Dz(d);d.bF=2;d.p5=Gz(Gw(b));return d;}if(OK(b))return AMb(b&65535);if(!Ss(b))return ANJ(b&65535);return AJw(b&65535);}}if(!c){if(OK(b))return AMb(b&65535);if(!Ss(b))return ZF(b&65535);return AJw(b&65535);}d=new DU;Dz(d);d.bF=2;d.fq=b;e=(Go(b)).data;d.je=e[0];d.hU=e[1];return d;}
function KN(a,b){var c,d,e;if(!ABv(b)){if(!b.I){if(b.gy())return AIX(b);return APs(b);}if(!b.gy())return AKc(b);c=new I3;Ue(c,b);return c;}c=YI(b);d=new MM;BK(d);d.oJ=c;d.vb=c.bc;if(!b.I){if(b.gy())return ACd(AIX(Hu(b)),d);return ACd(APs(Hu(b)),d);}if(!b.gy())return ACd(AKc(Hu(b)),d);c=new P4;e=new I3;Ue(e,Hu(b));ADO(c,e,d);return c;}
function Hv(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B8(a,b){return (a.df&b)!=b?0:1;}
function NY(){C.call(this);this.rT=null;}
function ARv(a,b){b.dG=a.rT.dG;}
var Gp=F(Cj);
var AXw=null;var AXv=null;var AXB=null;function UM(){UM=Bl(Gp);AHv();}
function AJS(a,b){var c=new Gp();Zz(c,a,b);return c;}
function Zz(a,b,c){UM();C7(a,b,c);}
function AHv(){var b;AXw=AJS(B(389),0);b=AJS(B(390),1);AXv=b;AXB=H(Gp,[AXw,b]);}
function SS(){C.call(this);this.sm=null;}
function AKp(a,b){C9(a.sm,b);}
function Qn(){var a=this;C.call(a);a.ot=null;a.ow=0;a.ox=0;a.oy=null;a.oz=0;a.ou=0;}
function AJc(a,b){var c,d,e,f,g,h,i,j;c=a.ot;d=a.ow;e=a.ox;f=a.oy;g=a.oz;h=a.ou;i=CA(c.bp,5.0);d=Y((c.bp.b6.b-d|0)-i|0,Z((i-d|0)-c.R.r.b|0,b.h.b));j=Y((c.bp.b6.a-e|0)-i|0,Z((i-e|0)-c.R.r.a|0,b.h.a));Bf(f,d+g|0,j+h|0);Fm(c,f,c.M.r);}
function Xl(){var a=this;C.call(a);a.nT=null;a.nS=null;a.nQ=null;a.nP=0;a.nX=0;a.nW=0;a.nV=0;a.nU=0;a.nZ=0;a.nY=0;a.rW=0;}
function AKF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.nT;d=a.nS;e=a.nQ;f=a.nP;g=a.nX;h=a.nW;i=a.nV;j=a.nU;k=a.nZ;l=a.nY;m=a.rW;n=CA(c.bp,5.0);o=c.M.iI();Cy(d,c.M.r);Cy(e,c.M.D);switch(f){case -1:f=Y(h+(b.h.b-g|0)|0,c.bp.b6.b-n|0);g=o.b;h=h+i|0;f=Z(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Z((i+b.h.b|0)-g|0,Z(o.b,n-c.R.D.b|0));}b:{switch(j){case -1:f=Z(n,Y(l+(b.h.a-k|0)|0,(c.bp.b6.a+c.R.r.a|0)-n|0));g=o.a;h=l+m|0;f=Z(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Z((m+b.h.a|0)-k|0,o.a);}Fm(c,e,d);}
function Va(){var a=this;C.call(a);a.uS=null;a.uT=0.0;}
function JK(a,b){return KL(a.uS,b,a.uT*2.0+0.875);}
function BA(){var a=this;C.call(a);a.d=null;a.cd=0;a.n2=null;a.hc=0;}
var AUu=0;function BK(a){var b,c;b=new Ff;c=AUu;AUu=c+1|0;JU(b,c);a.n2=L3(b);}
function KK(a,b){var c,d;c=new Ff;d=AUu;AUu=d+1|0;JU(c,d);a.n2=L3(c);a.d=b;}
function HC(a,b,c,d){var e;e=d.v;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function HO(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGM(a,b){a.hc=b;}
function AFY(a){return a.hc;}
function AOT(a){return a.d;}
function APN(a,b){a.d=b;}
function APK(a,b){return 1;}
function AQH(a){return null;}
function IY(a){var b;a.cd=1;b=a.d;if(b!==null){if(!b.cd){b=b.e6();if(b!==null){a.d.cd=1;a.d=b;}a.d.d6();}else if(b instanceof Gs&&b.d$.jJ)a.d=b.d;}}
function ADY(){AUu=1;}
var Un=F();
var AXu=null;function AR9(){AR9=Bl(Un);AFD();}
function AFD(){var b,c;UM();b=BI((AXB.eF()).data.length);c=b.data;AXu=b;c[AXw.cW]=1;c[AXv.cW]=2;}
function O3(){C.call(this);this.px=null;}
function AGV(a,b){Uf(Iu(a.px),b,AWk,YD(B(391)));}
function VR(){C.call(this);this.tA=null;}
function AIz(a,b){var c,d;c=a.tA;d=b.g$;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function X5(){var a=this;C.call(a);a.pw=null;a.pv=null;}
function AGH(a){var b,c;b=a.pw;c=a.pv;b.hD.sq(c);}
function CN(){var a=this;BA.call(a);a.jJ=0;a.dn=0;}
var AXA=null;function Mb(){Mb=Bl(CN);AHY();}
function ATj(a){var b=new CN();Fl(b,a);return b;}
function Fl(a,b){Mb();BK(a);a.dn=b;}
function AFt(a,b,c,d){var e,f;e=Il(d,a.dn);Js(d,a.dn,b);f=a.d.c(b,c,d);if(f<0)Js(d,a.dn,e);return f;}
function ALi(a){return a.dn;}
function AFN(a,b){return 0;}
function AHY(){var b;b=new N3;BK(b);AXA=b;}
function GG(){var a=this;C.call(a);a.bb=null;a.fH=0;a.es=0;a.tp=0;a.j$=0;a.bd=0;a.j=0;a.q7=0;a.eB=null;a.eo=null;a.u=0;a.hp=0;a.c5=0;a.gR=0;a.bH=null;}
var AXC=null;var AXy=null;var AXz=0;function OB(a,b){if(b>0&&b<3)a.es=b;if(b==1){a.j=a.bd;a.eo=a.eB;a.u=a.gR;a.gR=a.c5;E1(a);}}
function GL(a){return a.eB===null?0:1;}
function JC(a){return a.eo===null?0:1;}
function Be(a){E1(a);return a.j$;}
function E$(a){var b;b=a.eB;E1(a);return b;}
function E1(a){var b,c,d,e,f,g,h,$$je;a.j$=a.bd;a.bd=a.j;a.eB=a.eo;a.c5=a.gR;a.gR=a.u;while(true){b=0;c=a.u>=a.bb.data.length?0:LC(a);a.j=c;a.eo=null;if(a.es==4){if(c!=92)return;c=a.u;d=a.bb.data;c=c>=d.length?0:d[BQ(a)];a.j=c;switch(c){case 69:break;default:a.j=92;a.u=a.hp;return;}a.es=a.tp;a.j=a.u>(a.bb.data.length-2|0)?0:LC(a);}a:{c=a.j;if(c!=92){e=a.es;if(e==1)switch(c){case 36:a.j=(-536870876);break a;case 40:if(a.bb.data[a.u]!=63){a.j=(-2147483608);break a;}BQ(a);c=a.bb.data[a.u];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.j=(-134217688);BQ(a);break b;default:J(B7(B(31),Fi(a),a.u));}a.j=(-67108824);BQ(a);}else{switch(c){case 33:break;case 60:BQ(a);c=a.bb.data[a.u];e=1;break b;case 61:a.j=(-536870872);BQ(a);break b;case 62:a.j=(-33554392);BQ(a);break b;default:f=ADZ(a);a.j=f;if(f<256){a.fH=f;f=f<<16;a.j=f;a.j=(-1073741784)|f;break b;}f=f&255;a.j=f;a.fH=f;f=f<<16;a.j=f;a.j=(-16777176)|f;break b;}a.j=(-268435416);BQ(a);}}if(!e)break;}break a;case 41:a.j=(-536870871);break a;case 42:case 43:case 63:e
=a.u;d=a.bb.data;switch(e>=d.length?42:d[e]){case 43:a.j=c|(-2147483648);BQ(a);break a;case 63:a.j=c|(-1073741824);BQ(a);break a;default:}a.j=c|(-536870912);break a;case 46:a.j=(-536870866);break a;case 91:a.j=(-536870821);OB(a,2);break a;case 93:if(e!=2)break a;a.j=(-536870819);break a;case 94:a.j=(-536870818);break a;case 123:a.eo=ADt(a,c);break a;case 124:a.j=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.j=(-536870874);break a;case 45:a.j=(-536870867);break a;case 91:a.j=(-536870821);break a;case 93:a.j
=(-536870819);break a;case 94:a.j=(-536870818);break a;default:}}else{c=a.u>=(a.bb.data.length-2|0)?(-1):LC(a);c:{a.j=c;switch(c){case -1:J(B7(B(31),Fi(a),a.u));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.j
=AB0(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.es!=1)break a;a.j=(-2147483648)|c;break a;case 65:a.j=(-2147483583);break a;case 66:a.j=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B7(B(31),Fi(a),a.u));case 68:case 83:case 87:case 100:case 115:case 119:a.eo=RW(JG(a.bb,
a.hp,1),0);a.j=0;break a;case 71:a.j=(-2147483577);break a;case 80:case 112:break c;case 81:a.tp=a.es;a.es=4;b=1;break a;case 90:a.j=(-2147483558);break a;case 97:a.j=7;break a;case 98:a.j=(-2147483550);break a;case 99:c=a.u;d=a.bb.data;if(c>=(d.length-2|0))J(B7(B(31),Fi(a),a.u));a.j=d[BQ(a)]&31;break a;case 101:a.j=27;break a;case 102:a.j=12;break a;case 110:a.j=10;break a;case 114:a.j=13;break a;case 116:a.j=9;break a;case 117:a.j=Pt(a,4);break a;case 120:a.j=Pt(a,2);break a;case 122:a.j=(-2147483526);break a;default:}break a;}g
=ABL(a);h=0;if(a.j==80)h=1;try{a.eo=RW(g,h);}catch($$e){$$je=Ef($$e);if($$je instanceof I6){J(B7(B(31),Fi(a),a.u));}else{throw $$e;}}a.j=0;}}if(b)continue;else break;}}
function ABL(a){var b,c,d,e,f,g;b=new M;FV(b,10);c=a.u;d=a.bb;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=JG(d,BQ(a),1);f=new M;O(f);G(G(f,B(392)),b);return N(f);}BQ(a);c=0;a:{while(true){g=a.u;d=a.bb.data;if(g>=(d.length-2|0))break;c=d[BQ(a)];if(c==125)break a;BB(b,c);}}if(c!=125)J(B7(B(31),a.bH,a.u));}if(!b.L)J(B7(B(31),a.bH,a.u));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(392)),f);return N(b);}b:{c:{if(I(f)>3){if(KB(f,B(392)))break c;if(KB(f,B(393)))break c;}break b;}f=Dk(f,2);}return f;}
function ADt(a,b){var c,d,e,f,g,$$je;c=new M;FV(c,4);d=(-1);e=2147483647;a:{while(true){f=a.u;g=a.bb.data;if(f>=g.length)break a;b=g[BQ(a)];if(b==125)break a;if(b==44&&d<0)try{d=Jn(DT(c),10);ADz(c,0,YU(c));continue;}catch($$e){$$je=Ef($$e);if($$je instanceof Db){break;}else{throw $$e;}}BB(c,b&65535);}J(B7(B(31),a.bH,a.u));}if(b!=125)J(B7(B(31),a.bH,a.u));if(c.L>0)b:{try{e=Jn(DT(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ef($$e);if($$je instanceof Db){}else{throw $$e;}}J(B7(B(31),a.bH,a.u));}else if
(d<0)J(B7(B(31),a.bH,a.u));if((d|e|(e-d|0))<0)J(B7(B(31),a.bH,a.u));b=a.u;g=a.bb.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.j=(-2147483525);BQ(a);break c;case 63:a.j=(-1073741701);BQ(a);break c;default:}a.j=(-536870789);}c=new MY;c.eq=d;c.el=e;return c;}
function Fi(a){return a.bH;}
function Dj(a){return !a.bd&&!a.j&&a.u==a.q7&&!GL(a)?1:0;}
function Ke(b){return b<0?0:1;}
function EY(a){return !Dj(a)&&!GL(a)&&Ke(a.bd)?1:0;}
function N1(a){var b;b=a.bd;return b<=56319&&b>=55296?1:0;}
function U$(a){var b;b=a.bd;return b<=57343&&b>=56320?1:0;}
function Ss(b){return b<=56319&&b>=55296?1:0;}
function OK(b){return b<=57343&&b>=56320?1:0;}
function Pt(a,b){var c,d,e,f,$$je;c=new M;FV(c,b);d=a.bb.data.length-2|0;e=0;while(true){f=BE(e,b);if(f>=0)break;if(a.u>=d)break;BB(c,a.bb.data[BQ(a)]);e=e+1|0;}if(!f)a:{try{b=Jn(DT(c),16);}catch($$e){$$je=Ef($$e);if($$je instanceof Db){break a;}else{throw $$e;}}return b;}J(B7(B(31),a.bH,a.u));}
function AB0(a){var b,c,d,e,f,g;b=3;c=1;d=a.bb.data;e=d.length-2|0;f=UI(d[a.u],8);switch(f){case -1:break;default:if(f>3)b=2;BQ(a);a:{while(true){if(c>=b)break a;g=a.u;if(g>=e)break a;g=UI(a.bb.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BQ(a);c=c+1|0;}}return f;}J(B7(B(31),a.bH,a.u));}
function ADZ(a){var b,c,d,e;b=1;c=a.fH;a:while(true){d=a.u;e=a.bb.data;if(d>=e.length)J(B7(B(31),a.bH,d));b:{c:{switch(e[d]){case 41:BQ(a);return c|256;case 45:if(!b)J(B7(B(31),a.bH,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BQ(a);}BQ(a);return c;}
function BQ(a){var b,c,d,e,f;b=a.u;a.hp=b;if(!(a.fH&4))a.u=b+1|0;else{c=a.bb.data.length-2|0;a.u=b+1|0;a:while(true){d=a.u;if(d<c&&QT(a.bb.data[d])){a.u=a.u+1|0;continue;}d=a.u;if(d>=c)break;e=a.bb.data;if(e[d]!=35)break;a.u=d+1|0;while(true){f=a.u;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.u=f+1|0;}}}return a.hp;}
function ADk(b){return AXC.BX(b);}
function LC(a){var b,c,d,e;b=a.bb.data[BQ(a)];if(CD(b)){c=a.hp+1|0;d=a.bb.data;if(c<d.length){e=d[c];if(CZ(e)){BQ(a);return Er(b,e);}}}return b;}
function NZ(a){return a.c5;}
function IF(){var a=this;BC.call(a);a.wX=null;a.wy=null;a.pR=0;}
function B7(a,b,c){var d=new IF();Ja(d,a,b,c);return d;}
function Ja(a,b,c,d){V(a);a.pR=(-1);a.wX=b;a.wy=c;a.pR=d;}
function WX(){C.call(this);this.tc=null;}
function AM9(a,b){var c,d;c=a.tc;d=0;while(d<b.length){YR(c,b[d]);d=d+1|0;}}
var ABD=F(0);
function T$(){var a=this;C.call(a);a.oP=null;a.oR=null;a.oT=null;}
function AMM(a,b){a.oP.n(ART(a.oR,b,a.oT));}
var RG=F(CN);
function AE3(a,b,c,d){var e;e=a.dn;BF(d,e,b-Dm(d,e)|0);return a.d.c(b,c,d);}
function AOk(a,b){return 0;}
var Xu=F(CN);
function AGK(a,b,c,d){return b;}
var Pv=F(CN);
function AFV(a,b,c,d){if(Dm(d,a.dn)!=b)b=(-1);return b;}
function SO(){CN.call(this);this.mI=0;}
function AE8(a,b,c,d){var e;e=a.dn;BF(d,e,b-Dm(d,e)|0);a.mI=b;return b;}
function AMW(a,b){return 0;}
var Fv=F(CN);
function AP6(a,b,c,d){if(d.i3!=1&&b!=d.v)return (-1);d.ip=1;Js(d,0,b);return b;}
function BT(){BA.call(this);this.bF=0;}
function Dz(a){BK(a);a.bF=1;}
function AQ9(a,b,c,d){var e;if((b+a.bU()|0)>d.v){d.dc=1;return (-1);}e=a.bq(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function APe(a){return a.bF;}
function AJT(a,b){return 1;}
var AC8=F(BT);
function GJ(a){var b=new AC8();ALr(b,a);return b;}
function ALr(a,b){KK(a,b);a.bF=1;a.hc=1;a.bF=0;}
function AOK(a,b,c){return 0;}
function AH5(a,b,c,d){var e,f,g;e=d.v;f=d.cD;while(true){g=BE(b,e);if(g>0)return (-1);if(g<0&&CZ(L(c,b))&&b>f&&CD(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AGz(a,b,c,d,e){var f,g;f=e.v;g=e.cD;while(true){if(c<b)return (-1);if(c<f&&CZ(L(d,c))&&c>g&&CD(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AE6(a,b){return 0;}
function BO(){var a=this;BA.call(a);a.bw=null;a.d$=null;a.X=0;}
function ASI(a,b){var c=new BO();Fw(c,a,b);return c;}
function Fw(a,b,c){BK(a);a.bw=b;a.d$=c;a.X=c.dn;}
function AIJ(a,b,c,d){var e,f,g,h;if(a.bw===null)return (-1);e=Fz(d,a.X);Dy(d,a.X,b);f=a.bw.i;g=0;while(true){if(g>=f){Dy(d,a.X,e);return (-1);}h=(Bs(a.bw,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AMO(a,b){a.d$.d=b;}
function AKH(a,b){var c;a:{c=a.bw;if(c!==null){c=BS(c);while(true){if(!B4(c))break a;if(!(BX(c)).bN(b))continue;else return 1;}}}return 0;}
function ANv(a,b){return Il(b,a.X)>=0&&Fz(b,a.X)==Il(b,a.X)?0:1;}
function AGv(a){var b,c,d,e;a.cd=1;b=a.d$;if(b!==null&&!b.cd)IY(b);a:{b=a.bw;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bs(a.bw,d);e=b.e6();if(e===null)e=b;else{b.cd=1;Ek(a.bw,d);Rk(a.bw,d,e);}if(!e.cd)e.d6();d=d+1|0;}}}if(a.d!==null)IY(a);}
var IR=F(BO);
function AMx(a,b,c,d){var e,f,g,h;e=Dm(d,a.X);BF(d,a.X,b);f=a.bw.i;g=0;while(true){if(g>=f){BF(d,a.X,e);return (-1);}h=(Bs(a.bw,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANW(a,b){return !Dm(b,a.X)?0:1;}
var DQ=F(IR);
function AHc(a,b,c,d){var e,f,g;e=Dm(d,a.X);BF(d,a.X,b);f=a.bw.i;g=0;while(g<f){if((Bs(a.bw,g)).c(b,c,d)>=0)return a.d.c(a.d$.mI,c,d);g=g+1|0;}BF(d,a.X,e);return (-1);}
function ANC(a,b){a.d=b;}
var MD=F(DQ);
function AMH(a,b,c,d){var e,f;e=a.bw.i;f=0;while(f<e){if((Bs(a.bw,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function APS(a,b){return 0;}
var V1=F(DQ);
function AFI(a,b,c,d){var e,f;e=a.bw.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bw,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function APk(a,b){return 0;}
var QV=F(DQ);
function AGp(a,b,c,d){var e,f,g,h;e=a.bw.i;f=d.iw?0:d.cD;a:{g=a.d.c(b,c,d);if(g>=0){BF(d,a.X,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bw,h)).ck(f,b,c,d)>=0){BF(d,a.X,(-1));return g;}h=h+1|0;}}}return (-1);}
function ARz(a,b){return 0;}
var Tx=F(DQ);
function AEC(a,b,c,d){var e,f;e=a.bw.i;BF(d,a.X,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bw,f)).ck(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AN$(a,b){return 0;}
function Gs(){BO.call(this);this.cQ=null;}
function AS7(a,b){var c=new Gs();Zq(c,a,b);return c;}
function Zq(a,b,c){BK(a);a.cQ=b;a.d$=c;a.X=c.dn;}
function AEX(a,b,c,d){var e,f;e=Fz(d,a.X);Dy(d,a.X,b);f=a.cQ.c(b,c,d);if(f>=0)return f;Dy(d,a.X,e);return (-1);}
function AK3(a,b,c,d){var e;e=a.cQ.cf(b,c,d);if(e>=0)Dy(d,a.X,e);return e;}
function AOq(a,b,c,d,e){var f;f=a.cQ.ck(b,c,d,e);if(f>=0)Dy(e,a.X,f);return f;}
function AKB(a,b){return a.cQ.bN(b);}
function AMS(a){var b;b=new M2;Zq(b,a.cQ,a.d$);a.d=b;return b;}
function AQK(a){var b;a.cd=1;b=a.d$;if(b!==null&&!b.cd)IY(b);b=a.cQ;if(b!==null&&!b.cd){b=b.e6();if(b!==null){a.cQ.cd=1;a.cQ=b;}a.cQ.d6();}}
var GI=F();
function U(){var a=this;GI.call(a);a.bc=0;a.ca=0;a.H=null;a.i9=null;a.jC=null;a.I=0;}
var AXD=null;function Ow(){Ow=Bl(U);AGX();}
function Br(a){var b;Ow();b=new WR;b.z=BI(64);a.H=b;}
function AFK(a){return null;}
function AFg(a){return a.H;}
function ABv(a){var b,c,d,e,f;if(!a.ca)b=Ha(a.H,0)>=2048?0:1;else{a:{c=a.H;b=0;d=c.bo;if(b<d){e=c.z.data;f=(e[0]^(-1))>>>0|0;if(f)b=Id(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Id(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AIW(a){return a.I;}
function AO$(a){return a;}
function YI(a){var b,c;if(a.jC===null){b=a.eA();c=new Wd;c.xk=a;c.nb=b;Br(c);a.jC=c;Eq(c,a.ca);}return a.jC;}
function Hu(a){var b,c;if(a.i9===null){b=a.eA();c=new Wb;c.w0=a;c.sT=b;c.tD=a;Br(c);a.i9=c;Eq(c,a.bc);a.i9.I=a.I;}return a.i9;}
function AQG(a){return 0;}
function Eq(a,b){var c;c=a.bc;if(c^b){a.bc=c?0:1;a.ca=a.ca?0:1;}if(!a.I)a.I=1;return a;}
function AH7(a){return a.bc;}
function Ka(b,c){Ow();return b.k(c);}
function Ib(b,c){var d,e;Ow();if(b.c_()!==null&&c.c_()!==null){b=b.c_();c=c.c_();d=Y(b.z.data.length,c.z.data.length);e=0;a:{while(e<d){if(b.z.data[e]&c.z.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function RW(b,c){var d,e,f;Ow();d=0;while(true){AN8();e=AXE.data;if(d>=e.length){f=new I6;Bn(f,B(31));f.xH=B(31);f.xn=b;J(f);}e=e[d].data;if(Bo(b,e[0]))break;d=d+1|0;}return ACE(e[1],c);}
function AGX(){var b;b=new G2;AN8();AXD=b;}
function Zg(){var a=this;U.call(a);a.kP=0;a.mH=0;a.f0=0;a.kt=0;a.dD=0;a.e1=0;a.E=null;a.bu=null;}
function Dn(){var a=new Zg();ARh(a);return a;}
function APY(a,b){var c=new Zg();AGL(c,a,b);return c;}
function ARh(a){Br(a);a.E=ARB();}
function AGL(a,b,c){Br(a);a.E=ARB();a.kP=b;a.mH=c;}
function Ct(a,b){a:{if(a.kP){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dD){Mj(a.E,Hv(b&65535));break a;}Lx(a.E,Hv(b&65535));break a;}if(a.mH&&b>128){a.f0=1;b=Gz(Gw(b));}}}if(!(!Ss(b)&&!OK(b))){if(a.kt)Mj(a.H,b-55296|0);else Lx(a.H,b-55296|0);}if(a.dD)Mj(a.E,b);else Lx(a.E,b);if(!a.I&&L0(b))a.I=1;return a;}
function AD6(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(a.kt){if(!b.ca)FP(a.H,b.eA());else C8(a.H,b.eA());}else if(!b.ca)FI(a.H,b.eA());else{Fq(a.H,b.eA());C8(a.H,b.eA());a.ca=a.ca?0:1;a.kt=1;}if(!a.e1&&b.c_()!==null){if(a.dD){if(!b.bc)FP(a.E,b.c_());else C8(a.E,b.c_());}else if(!b.bc)FI(a.E,b.c_());else{Fq(a.E,b.c_());C8(a.E,b.c_());a.bc=a.bc?0:1;a.dD=1;}}else{c=a.bc;d=a.bu;if(d!==null){if(!c){e=new Op;e.vA=a;e.t8=c;e.tl=d;e.ta=b;Br(e);a.bu=e;}else{e=new Oq;e.xP=a;e.qt=c;e.p_=d;e.pm=b;Br(e);a.bu=e;}}else{if(c&&!a.dD
&&L4(a.E)){d=new Om;d.wx=a;d.qi=b;Br(d);a.bu=d;}else if(!c){d=new Ok;d.kc=a;d.jo=c;d.nR=b;Br(d);a.bu=d;}else{d=new Ol;d.k1=a;d.jv=c;d.tf=b;Br(d);a.bu=d;}a.e1=1;}}return a;}
function BP(a,b,c){var d,e,f,g,h;if(b>c){d=new BC;V(d);J(d);}a:{b:{if(!a.kP){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Ct(a,b);b=b+1|0;}}if(!a.dD)HU(a.E,b,c+1|0);else{d=a.E;c=c+1|0;if(b>c){d=new Bw;V(d);J(d);}e=d.bo;if(b<e){f=Y(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.z.data;h[g]=h[g]&(H8(d,b)|HI(d,f));}else{h=d.z.data;h[g]=h[g]&H8(d,b);e=g+1|0;while(e<c){d.z.data[e]=0;e=e+1|0;}if(f&31){h=d.z.data;h[c]=h[c]&HI(d,f);}}G6(d);}}}}return a;}
function Ye(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f0)a.f0=1;c=a.ca;if(!(c^b.ca)){if(!c)FI(a.H,b.H);else C8(a.H,b.H);}else if(c)FP(a.H,b.H);else{Fq(a.H,b.H);C8(a.H,b.H);a.ca=1;}if(!a.e1&&CS(b)!==null){c=a.bc;if(!(c^b.bc)){if(!c)FI(a.E,CS(b));else C8(a.E,CS(b));}else if(c)FP(a.E,CS(b));else{Fq(a.E,CS(b));C8(a.E,CS(b));a.bc=1;}}else{c=a.bc;d=a.bu;if(d!==null){if(!c){e=new Of;e.vg=a;e.sp=c;e.td=d;e.tP=b;Br(e);a.bu=e;}else{e=new OZ;e.vL=a;e.tM=c;e.mm=d;e.mK=b;Br(e);a.bu=e;}}else{if(!a.dD&&L4(a.E)){if(!c){d=new On;d.xV
=a;d.o1=b;Br(d);a.bu=d;}else{d=new Oo;d.vQ=a;d.tz=b;Br(d);a.bu=d;}}else if(!c){d=new Or;d.ss=a;d.qL=b;d.qd=c;Br(d);a.bu=d;}else{d=new Os;d.q$=a;d.rv=b;d.rJ=c;Br(d);a.bu=d;}a.e1=1;}}}
function WI(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.f0)a.f0=1;c=a.ca;if(!(c^b.ca)){if(!c)C8(a.H,b.H);else FI(a.H,b.H);}else if(!c)FP(a.H,b.H);else{Fq(a.H,b.H);C8(a.H,b.H);a.ca=0;}if(!a.e1&&CS(b)!==null){c=a.bc;if(!(c^b.bc)){if(!c)C8(a.E,CS(b));else FI(a.E,CS(b));}else if(!c)FP(a.E,CS(b));else{Fq(a.E,CS(b));C8(a.E,CS(b));a.bc=0;}}else{c=a.bc;d=a.bu;if(d!==null){if(!c){e=new Oh;e.vz=a;e.sx=c;e.m$=d;e.qp=b;Br(e);a.bu=e;}else{e=new Oi;e.vZ=a;e.rZ=c;e.mb=d;e.so=b;Br(e);a.bu=e;}}else{if(!a.dD&&L4(a.E)){if(!c){d=new Oc;d.vU
=a;d.oA=b;Br(d);a.bu=d;}else{d=new Od;d.xL=a;d.oG=b;Br(d);a.bu=d;}}else if(!c){d=new Oj;d.uX=a;d.t4=b;d.rn=c;Br(d);a.bu=d;}else{d=new Ob;d.rl=a;d.r4=b;d.qv=c;Br(d);a.bu=d;}a.e1=1;}}}
function CW(a,b){var c;c=a.bu;if(c!==null)return a.bc^c.k(b);return a.bc^Dv(a.E,b);}
function CS(a){if(!a.e1)return a.E;return null;}
function AHX(a){return a.H;}
function APz(a){var b,c;if(a.bu!==null)return a;b=CS(a);c=new Og;c.vc=a;c.hY=b;Br(c);return Eq(c,a.bc);}
function ALU(a){var b,c,d;b=new M;O(b);c=Ha(a.E,0);while(c>=0){Ie(b,Go(c));BB(b,124);c=Ha(a.E,c+1|0);}d=b.L;if(d>0)V3(b,d-1|0);return N(b);}
function AH$(a){return a.f0;}
function I6(){var a=this;Bp.call(a);a.xH=null;a.xn=null;}
function D1(){BA.call(this);this.G=null;}
function Da(a,b,c,d){KK(a,c);a.G=b;a.hc=d;}
function ARg(a){return a.G;}
function AOt(a,b){return !a.G.bN(b)&&!a.d.bN(b)?0:1;}
function AP0(a,b){return 1;}
function ALp(a){var b;a.cd=1;b=a.d;if(b!==null&&!b.cd){b=b.e6();if(b!==null){a.d.cd=1;a.d=b;}a.d.d6();}b=a.G;if(b!==null){if(!b.cd){b=b.e6();if(b!==null){a.G.cd=1;a.G=b;}a.G.d6();}else if(b instanceof Gs&&b.d$.jJ)a.G=b.d;}}
function CX(){D1.call(this);this.Y=null;}
function ATc(a,b,c){var d=new CX();EQ(d,a,b,c);return d;}
function EQ(a,b,c,d){Da(a,b,c,d);a.Y=b;}
function AEE(a,b,c,d){var e,f;e=0;a:{while((b+a.Y.bU()|0)<=d.v){f=a.Y.bq(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.Y.bU()|0;e=e+(-1)|0;}return f;}
function E2(){CX.call(this);this.i2=null;}
function ASk(a,b,c,d){var e=new E2();R6(e,a,b,c,d);return e;}
function R6(a,b,c,d,e){EQ(a,c,d,e);a.i2=b;}
function AFw(a,b,c,d){var e,f,g,h,i;e=a.i2;f=e.eq;g=e.el;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.Y.bU()|0)>d.v)break a;i=a.Y.bq(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.Y.bU()|0;h=h+(-1)|0;}return i;}if((b+a.Y.bU()|0)>d.v){d.dc=1;return (-1);}i=a.Y.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CO=F(D1);
function AEW(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.G.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Ex=F(CX);
function AK9(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ARC(a,b){a.d=b;a.G.K(b);}
var Wf=F(CX);
function AQ1(a,b,c,d){while((b+a.Y.bU()|0)<=d.v&&a.Y.bq(b,c)>0){b=b+a.Y.bU()|0;}return a.d.c(b,c,d);}
function ALR(a,b,c,d){var e,f,g;e=a.d.cf(b,c,d);if(e<0)return (-1);f=e-a.Y.bU()|0;while(f>=b&&a.Y.bq(f,c)>0){g=f-a.Y.bU()|0;e=f;f=g;}return e;}
function X(){var a=this;C.call(a);a.k_=null;a.j_=null;}
function ACE(a,b){if(!b&&a.k_===null)a.k_=a.B();else if(b&&a.j_===null)a.j_=Eq(a.B(),1);if(b)return a.j_;return a.k_;}
var Db=F(BC);
function MY(){var a=this;GI.call(a);a.eq=0;a.el=0;}
function AL3(a){var b,c,d,e,f;b=a.eq;c=a.el;d=c==2147483647?B(31):L3(ADj(c));e=new M;O(e);BB(e,123);f=T(e,b);BB(f,44);BB(G(f,d),125);return N(e);}
var N3=F(BA);
function AKi(a,b,c,d){return b;}
function AMN(a,b){return 0;}
function WR(){var a=this;C.call(a);a.z=null;a.bo=0;}
function ARB(){var a=new WR();AF_(a);return a;}
function AF_(a){a.z=BI(0);}
function Lx(a,b){var c,d;c=b/32|0;if(b>=a.bo){Ii(a,c+1|0);a.bo=b+1|0;}d=a.z.data;d[c]=d[c]|1<<(b%32|0);}
function HU(a,b,c){var d,e,f,g,h;d=BE(b,c);if(d>0){e=new Bw;V(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bo){Ii(a,f+1|0);a.bo=c;}if(d==f){g=a.z.data;g[d]=g[d]|HI(a,b)&H8(a,c);}else{g=a.z.data;g[d]=g[d]|HI(a,b);h=d+1|0;while(h<f){a.z.data[h]=(-1);h=h+1|0;}if(c&31){g=a.z.data;g[f]=g[f]|H8(a,c);}}}
function HI(a,b){return (-1)<<(b%32|0);}
function H8(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Mj(a,b){var c,d;c=b/32|0;d=a.z.data;if(c<d.length){d[c]=d[c]&J8((-2),b%32|0);if(b==(a.bo-1|0))G6(a);}}
function Dv(a,b){var c,d;c=b/32|0;d=a.z.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Ha(a,b){var c,d,e,f;c=a.bo;if(b>=c)return (-1);d=b/32|0;e=a.z.data;f=e[d]>>>(b%32|0)|0;if(f)return Id(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Id(e[f])|0;f=f+1|0;}return (-1);}
function Ii(a,b){var c;c=a.z.data.length;if(c>=b)return;c=Z((b*3|0)/2|0,(c*2|0)+1|0);a.z=ADT(a.z,c);}
function G6(a){var b,c,d;b=(a.bo+31|0)/32|0;a.bo=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NC(a.z.data[c]);if(d<32)break;c=c+(-1)|0;a.bo=a.bo-32|0;}a.bo=a.bo-d|0;}}
function C8(a,b){var c,d,e,f;c=Y(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&b.z.data[d];d=d+1|0;}while(true){f=a.z.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bo=Y(a.bo,b.bo);G6(a);}
function FP(a,b){var c,d,e;c=Y(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&(b.z.data[d]^(-1));d=d+1|0;}G6(a);}
function FI(a,b){var c,d,e;c=Z(a.bo,b.bo);a.bo=c;Ii(a,(c+31|0)/32|0);c=Y(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]|b.z.data[d];d=d+1|0;}}
function Fq(a,b){var c,d,e;c=Z(a.bo,b.bo);a.bo=c;Ii(a,(c+31|0)/32|0);c=Y(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]^b.z.data[d];d=d+1|0;}G6(a);}
function L4(a){return a.bo?0:1;}
function MM(){var a=this;BO.call(a);a.oJ=null;a.vb=0;}
function P4(){var a=this;BO.call(a);a.ly=null;a.k4=null;}
function ACd(a,b){var c=new P4();ADO(c,a,b);return c;}
function ADO(a,b,c){BK(a);a.ly=b;a.k4=c;}
function AFr(a,b,c,d){var e,f,g,h,i;e=a.ly.c(b,c,d);if(e<0)a:{f=a.k4;g=d.cD;e=d.v;h=b+1|0;e=BE(h,e);if(e>0){d.dc=1;e=(-1);}else{i=L(c,b);if(!f.oJ.k(i))e=(-1);else{if(CD(i)){if(e<0&&CZ(L(c,h))){e=(-1);break a;}}else if(CZ(i)&&b>g&&CD(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AMt(a,b){a.d=b;a.k4.d=b;a.ly.K(b);}
function AF0(a,b){return 1;}
function AFJ(a,b){return 1;}
function DA(){var a=this;BO.call(a);a.dx=null;a.wr=0;}
function AKc(a){var b=new DA();Ue(b,a);return b;}
function Ue(a,b){BK(a);a.dx=b.iF();a.wr=b.bc;}
function AHO(a,b,c,d){var e,f,g,h;e=d.v;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Hk(g,f)&&a.k(Er(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AIm(a,b){return a.dx.k(b);}
function AFl(a,b){if(b instanceof DU)return Ka(a.dx,b.fq);if(b instanceof Ei)return Ka(a.dx,b.c7);if(b instanceof DA)return Ib(a.dx,b.dx);if(!(b instanceof Ed))return 1;return Ib(a.dx,b.eO);}
function AJ8(a){return a.dx;}
function AO4(a,b){a.d=b;}
function AH2(a,b){return 1;}
var I3=F(DA);
function AJU(a,b){return a.dx.k(Gz(Gw(b)));}
function Y8(){var a=this;BT.call(a);a.pI=null;a.we=0;}
function AIX(a){var b=new Y8();AL8(b,a);return b;}
function AL8(a,b){Dz(a);a.pI=b.iF();a.we=b.bc;}
function AKj(a,b,c){return !a.pI.k(EU(Ew(L(c,b))))?(-1):1;}
function Ed(){var a=this;BT.call(a);a.eO=null;a.wL=0;}
function APs(a){var b=new Ed();ANe(b,a);return b;}
function ANe(a,b){Dz(a);a.eO=b.iF();a.wL=b.bc;}
function Mm(a,b,c){return !a.eO.k(L(c,b))?(-1):1;}
function AMQ(a,b){if(b instanceof Ei)return Ka(a.eO,b.c7);if(b instanceof Ed)return Ib(a.eO,b.eO);if(!(b instanceof DA)){if(!(b instanceof DU))return 1;return 0;}return Ib(a.eO,b.dx);}
function OA(){var a=this;BO.call(a);a.gj=null;a.lm=null;a.iZ=0;}
function APE(a,b){var c=new OA();AEY(c,a,b);return c;}
function AEY(a,b,c){BK(a);a.gj=b;a.iZ=c;}
function AK8(a,b){a.d=b;}
function Qd(a){if(a.lm===null)a.lm=FT(a.gj);return a.lm;}
function AEs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.v;f=BI(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?E4([k,l]):E4([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iZ;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gj.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iZ==3){k=f[0];m=a.gj.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iZ==2){b=f[0];m=a.gj.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AFS(a,b){return b instanceof OA&&!Bo(Qd(b),Qd(a))?0:1;}
function APD(a,b){return 1;}
function Ei(){BT.call(this);this.c7=0;}
function ZF(a){var b=new Ei();ANi(b,a);return b;}
function ANi(a,b){Dz(a);a.c7=b;}
function AJ4(a){return 1;}
function AIT(a,b,c){return a.c7!=L(c,b)?(-1):1;}
function AHJ(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return HC(a,b,c,d);e=d.v;while(true){if(b>=e)return (-1);f=GE(c,a.c7,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AJ$(a,b,c,d,e){var f;if(!(d instanceof Bv))return HO(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FZ(d,a.c7,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function APv(a,b){if(b instanceof Ei)return b.c7!=a.c7?0:1;if(!(b instanceof Ed)){if(b instanceof DA)return b.k(a.c7);if(!(b instanceof DU))return 1;return 0;}return Mm(b,0,WS(a.c7))<=0?0:1;}
function ADB(){BT.call(this);this.l8=0;}
function ANJ(a){var b=new ADB();ALO(b,a);return b;}
function ALO(a,b){Dz(a);a.l8=EU(Ew(b));}
function AEm(a,b,c){return a.l8!=EU(Ew(L(c,b)))?(-1):1;}
function Yg(){var a=this;BT.call(a);a.tT=0;a.m2=0;}
function AGi(a){var b=new Yg();AN5(b,a);return b;}
function AN5(a,b){Dz(a);a.tT=b;a.m2=Hv(b);}
function AEP(a,b,c){return a.tT!=L(c,b)&&a.m2!=L(c,b)?(-1):1;}
function Fc(){var a=this;BO.call(a);a.g5=0;a.j0=null;a.js=null;a.jn=0;}
function ATW(a,b){var c=new Fc();NR(c,a,b);return c;}
function NR(a,b,c){BK(a);a.g5=1;a.js=b;a.jn=c;}
function AQJ(a,b){a.d=b;}
function AMw(a,b,c,d){var e,f,g,h,i,j,k,l;e=BI(4);f=d.v;if(b>=f)return (-1);g=Kv(a,b,c,f);h=b+a.g5|0;i=ADk(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dw(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Kv(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ADk(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.g5|0;if(h>=f){b=k;break a;}g=Kv(a,h,c,f);b=k;}}}if(b!=a.jn)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.js.data[g])break;g=g+1|0;}return (-1);}
function WH(a){var b,c;if(a.j0===null){b=new M;O(b);c=0;while(c<a.jn){Ie(b,Go(a.js.data[c]));c=c+1|0;}a.j0=N(b);}return a.j0;}
function Kv(a,b,c,d){var e,f,g;a.g5=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Hk(e,f)){g=BR(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CD(g[0])&&CZ(g[1])?Er(g[0],g[1]):g[0];a.g5=2;}}return e;}
function AKk(a,b){return b instanceof Fc&&!Bo(WH(b),WH(a))?0:1;}
function ANF(a,b){return 1;}
var W_=F(Fc);
var TK=F(Fc);
var X2=F(CO);
function AGP(a,b,c,d){var e;while(true){e=a.G.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Pn=F(CO);
function ALF(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.G.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FN=F(CO);
function AO0(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.G.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AP_(a,b){a.d=b;a.G.K(b);}
var O4=F(FN);
function AJ7(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AL4(a,b){a.d=b;}
function E_(){var a=this;CO.call(a);a.fE=null;a.de=0;}
function AXF(a,b,c,d,e){var f=new E_();I1(f,a,b,c,d,e);return f;}
function I1(a,b,c,d,e,f){Da(a,c,d,e);a.fE=b;a.de=f;}
function ARs(a,b,c,d){var e,f;e=MS(d,a.de);if(!a.G.F(d))return a.d.c(b,c,d);if(e>=a.fE.el)return a.d.c(b,c,d);f=a.de;e=e+1|0;Ea(d,f,e);f=a.G.c(b,c,d);if(f>=0){Ea(d,a.de,0);return f;}f=a.de;e=e+(-1)|0;Ea(d,f,e);if(e>=a.fE.eq)return a.d.c(b,c,d);Ea(d,a.de,0);return (-1);}
var M8=F(E_);
function AJo(a,b,c,d){var e,f,g;e=0;f=a.fE.el;a:{while(true){g=a.G.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fE.eq)return (-1);return a.d.c(b,c,d);}
var Rl=F(CO);
function AQQ(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.G.c(b,c,d);}
var Qc=F(FN);
function AF2(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.G.c(b,c,d);return e;}
var UP=F(E_);
function AFb(a,b,c,d){var e,f,g;e=MS(d,a.de);if(!a.G.F(d))return a.d.c(b,c,d);f=a.fE;if(e>=f.el){Ea(d,a.de,0);return a.d.c(b,c,d);}if(e<f.eq){Ea(d,a.de,e+1|0);g=a.G.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Ea(d,a.de,0);return g;}Ea(d,a.de,e+1|0);g=a.G.c(b,c,d);}return g;}
var Rn=F(D1);
function ARe(a,b,c,d){var e;e=d.v;if(e>b)return a.d.ck(b,e,c,d);return a.d.c(b,c,d);}
function APa(a,b,c,d){var e;e=d.v;if(a.d.ck(b,e,c,d)>=0)return b;return (-1);}
function Oa(){D1.call(this);this.j9=null;}
function AMT(a,b,c,d){var e,f;e=d.v;f=UR(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.ck(b,e,c,d);return a.d.c(b,c,d);}
function AEw(a,b,c,d){var e,f,g,h;e=d.v;f=a.d.cf(b,c,d);if(f<0)return (-1);g=UR(a,f,e,c);if(g>=0)e=g;g=Z(f,a.d.ck(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.j9.g9(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function UR(a,b,c,d){while(true){if(b>=c)return (-1);if(a.j9.g9(L(d,b)))break;b=b+1|0;}return b;}
var EJ=F();
var AXG=null;var AXH=null;function O7(b){var c;if(!(b&1)){c=AXH;if(c!==null)return c;c=new Vf;AXH=c;return c;}c=AXG;if(c!==null)return c;c=new Ve;AXG=c;return c;}
var X3=F(CX);
function AFd(a,b,c,d){var e;a:{while(true){if((b+a.Y.bU()|0)>d.v)break a;e=a.Y.bq(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Wa=F(Ex);
function ALD(a,b,c,d){var e;if((b+a.Y.bU()|0)<=d.v){e=a.Y.bq(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var OS=F(E2);
function AOx(a,b,c,d){var e,f,g,h,i;e=a.i2;f=e.eq;g=e.el;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.Y.bU()|0)>d.v)break a;i=a.Y.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.Y.bU()|0)>d.v){d.dc=1;return (-1);}i=a.Y.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var P8=F(CX);
function AML(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.Y.bU()|0)<=d.v){e=a.Y.bq(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var TZ=F(Ex);
function AFk(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.G.c(b,c,d);}
var QW=F(E2);
function AOO(a,b,c,d){var e,f,g,h,i,j;e=a.i2;f=e.eq;g=e.el;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.Y.bU()|0)<=d.v){i=a.Y.bq(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.Y.bU()|0)>d.v){d.dc=1;return (-1);}j=a.Y.bq(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Kl=F(BA);
function AKE(a,b,c,d){if(b&&!(d.e2&&b==d.cD))return (-1);return a.d.c(b,c,d);}
function AJE(a,b){return 0;}
function ZQ(){BA.call(this);this.tm=0;}
function APq(a){var b=new ZQ();AJ0(b,a);return b;}
function AJ0(a,b){BK(a);a.tm=b;}
function AFH(a,b,c,d){var e,f,g;e=b<d.v?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.iw?0:d.cD;return (e!=32&&!Qf(a,e,b,g,c)?0:1)^(f!=32&&!Qf(a,f,b-1|0,g,c)?0:1)^a.tm?(-1):a.d.c(b,c,d);}
function AFQ(a,b){return 0;}
function Qf(a,b,c,d,e){var f;if(!Jl(b)&&b!=95){a:{if(Cs(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(Jl(f))return 0;if(Cs(f)!=6)return 1;}}return 1;}return 0;}
var N8=F(BA);
function AJY(a,b,c,d){if(b!=d.hd)return (-1);return a.d.c(b,c,d);}
function ARn(a,b){return 0;}
function WT(){BA.call(this);this.fK=0;}
function ATo(a){var b=new WT();AC$(b,a);return b;}
function AC$(a,b){BK(a);a.fK=b;}
function ANp(a,b,c,d){var e,f,g;e=!d.e2?I(c):d.v;if(b>=e){BF(d,a.fK,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BF(d,a.fK,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BF(d,a.fK,0);return a.d.c(b,c,d);}
function AGE(a,b){var c;c=!Dm(b,a.fK)?0:1;BF(b,a.fK,(-1));return c;}
var WC=F(BA);
function AMp(a,b,c,d){if(b<(d.iw?I(c):d.v))return (-1);d.dc=1;d.w9=1;return a.d.c(b,c,d);}
function AEj(a,b){return 0;}
function Ni(){BA.call(this);this.qB=null;}
function AGu(a,b,c,d){a:{if(b!=d.v){if(!b)break a;if(d.e2&&b==d.cD)break a;if(a.qB.r1(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AIB(a,b){return 0;}
var ADq=F(BO);
function ATI(){var a=new ADq();AMc(a);return a;}
function AMc(a){BK(a);}
function AQW(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;if(f>e){d.dc=1;return (-1);}g=L(c,b);if(CD(g)){h=b+2|0;if(h<=e&&Hk(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AFU(a,b){a.d=b;}
function AL9(a){return (-2147483602);}
function AFT(a,b){return 1;}
function Zd(){BO.call(this);this.kE=null;}
function ATi(a){var b=new Zd();AGC(b,a);return b;}
function AGC(a,b){BK(a);a.kE=b;}
function AMf(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;if(f>e){d.dc=1;return (-1);}g=L(c,b);if(CD(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Hk(g,h))return a.kE.g9(Er(g,h))?(-1):a.d.c(b,c,d);}}return a.kE.g9(g)?(-1):a.d.c(f,c,d);}
function AOg(a,b){a.d=b;}
function AEg(a){return (-2147483602);}
function AQ6(a,b){return 1;}
function ADh(){BA.call(this);this.gV=0;}
function ASO(a){var b=new ADh();AIv(b,a);return b;}
function AIv(a,b){BK(a);a.gV=b;}
function AKo(a,b,c,d){var e;e=!d.e2?I(c):d.v;if(b>=e){BF(d,a.gV,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BF(d,a.gV,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AIt(a,b){var c;c=!Dm(b,a.gV)?0:1;BF(b,a.gV,(-1));return c;}
function ABy(){BA.call(this);this.g3=0;}
function ASz(a){var b=new ABy();AIY(b,a);return b;}
function AIY(a,b){BK(a);a.g3=b;}
function AMn(a,b,c,d){if((!d.e2?I(c)-b|0:d.v-b|0)<=0){BF(d,a.g3,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BF(d,a.g3,1);return a.d.c(b+1|0,c,d);}
function AIj(a,b){var c;c=!Dm(b,a.g3)?0:1;BF(b,a.g3,(-1));return c;}
function Yd(){BA.call(this);this.fh=0;}
function ARS(a){var b=new Yd();ARu(b,a);return b;}
function ARu(a,b){BK(a);a.fh=b;}
function AJs(a,b,c,d){var e,f,g;e=!d.e2?I(c)-b|0:d.v-b|0;if(!e){BF(d,a.fh,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BF(d,a.fh,0);return a.d.c(b,c,d);case 13:if(g!=10){BF(d,a.fh,0);return a.d.c(b,c,d);}BF(d,a.fh,0);return a.d.c(b,c,d);default:}return (-1);}
function AGJ(a,b){var c;c=!Dm(b,a.fh)?0:1;BF(b,a.fh,(-1));return c;}
function G3(){var a=this;BO.call(a);a.mC=0;a.gg=0;}
function ATQ(a,b){var c=new G3();OJ(c,a,b);return c;}
function OJ(a,b,c){BK(a);a.mC=b;a.gg=c;}
function AFf(a,b,c,d){var e,f,g,h;e=F7(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=0;while(true){if(f>=I(e)){BF(d,a.gg,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Hv(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ANz(a,b){a.d=b;}
function F7(a,b){var c,d;c=a.mC;d=Fz(b,c);c=Il(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.kG)?B9(b.kG,d,c):null;}
function ANX(a,b){var c;c=!Dm(b,a.gg)?0:1;BF(b,a.gg,(-1));return c;}
var ADm=F(G3);
function ARZ(a,b){var c=new ADm();AP1(c,a,b);return c;}
function AP1(a,b,c){OJ(a,b,c);}
function AGO(a,b,c,d){var e,f;e=F7(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=!Ud(c,e,b)?(-1):I(e);if(f<0)return (-1);BF(d,a.gg,f);return a.d.c(b+f|0,c,d);}return (-1);}
function APP(a,b,c,d){var e,f;e=F7(a,d);f=d.cD;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=ZP(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AE4(a,b,c,d,e){var f,g;f=F7(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Py(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALv(a,b){return 1;}
var AAC=F(G3);
function ASA(a,b){var c=new AAC();AIs(c,a,b);return c;}
function AIs(a,b,c){OJ(a,b,c);}
function AKX(a,b,c,d){var e,f;e=F7(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=0;while(true){if(f>=I(e)){BF(d,a.gg,I(e));return a.d.c(b+I(e)|0,c,d);}if(EU(Ew(L(e,f)))!=EU(Ew(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var N2=F(Gf);
function AH_(a,b,c,d,e){MZ(a,b,c,d,e);return a;}
function AFL(a,b,c,d){W1(a,b,c,d);return a;}
function AF$(a,b){Jr(a,b);}
function APd(a,b,c){Xh(a,b,c);return a;}
function Rv(){var a=this;BT.call(a);a.cm=null;a.j2=null;a.kN=null;}
function AG_(a,b,c){return !Ki(a,c,b)?(-1):a.bF;}
function AFC(a,b,c,d){var e,f,g;e=d.v;while(true){if(b>e)return (-1);f=L(a.cm,a.bF-1|0);a:{while(true){g=a.bF;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Ki(a,c,b))break;b=b+SD(a.j2,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bF|0,c,d)>=0)break;b=b+1|0;}return b;}
function AIy(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.cm,0);g=(I(d)-c|0)-a.bF|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Ki(a,d,c))break;c=c-SD(a.kN,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bF|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AI4(a,b){var c;if(b instanceof Ei)return b.c7!=L(a.cm,0)?0:1;if(b instanceof Ed)return Mm(b,0,B9(a.cm,0,1))<=0?0:1;if(!(b instanceof DA)){if(!(b instanceof DU))return 1;return I(a.cm)>1&&b.fq==Er(L(a.cm,0),L(a.cm,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.cm,0))){if(I(a.cm)<=1)break b;if(!b.k(Er(L(a.cm,0),L(a.cm,1))))break b;}c=1;break a;}c=0;}return c;}
function Ki(a,b,c){var d;d=0;while(d<a.bF){if(L(b,d+c|0)!=L(a.cm,d))return 0;d=d+1|0;}return 1;}
function Yc(){BT.call(this);this.iA=null;}
function ATT(a){var b=new Yc();APx(b,a);return b;}
function APx(a,b){var c,d,e;Dz(a);c=new M;O(c);d=0;while(true){e=BE(d,b.L);if(e>=0){a.iA=N(c);a.bF=c.L;return;}if(d<0)break;if(e>=0)break;BB(c,EU(Ew(b.A.data[d])));d=d+1|0;}b=new Bw;V(b);J(b);}
function AK5(a,b,c){var d;d=0;while(true){if(d>=I(a.iA))return I(a.iA);if(L(a.iA,d)!=EU(Ew(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Nc(){BT.call(this);this.gS=null;}
function AOz(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gS))return I(a.gS);e=L(a.gS,d);f=b+d|0;if(e!=L(c,f)&&Hv(L(a.gS,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var G2=F();
var AXI=null;var AXJ=null;var AXE=null;function AN8(){AN8=Bl(G2);AHu();}
function AHu(){AXI=ATy();AXJ=ASH();AXE=H($rt_arraycls(C),[H(C,[B(394),ATR()]),H(C,[B(395),ARP()]),H(C,[B(396),ATv()]),H(C,[B(397),ATC()]),H(C,[B(398),AXJ]),H(C,[B(399),ASS()]),H(C,[B(400),ASF()]),H(C,[B(401),AR3()]),H(C,[B(402),ARY()]),H(C,[B(403),AR$()]),H(C,[B(404),ASm()]),H(C,[B(405),AR7()]),H(C,[B(406),ATb()]),H(C,[B(407),ARJ()]),H(C,[B(408),ATz()]),H(C,[B(409),ASl()]),H(C,[B(410),ASQ()]),H(C,[B(411),ASj()]),H(C,[B(412),ASR()]),H(C,[B(413),ASb()]),H(C,[B(414),ATH()]),H(C,[B(415),ASf()]),H(C,[B(416),ASW()]),
H(C,[B(417),ATt()]),H(C,[B(418),ATp()]),H(C,[B(419),ATD()]),H(C,[B(420),ASa()]),H(C,[B(421),ATg()]),H(C,[B(422),AXI]),H(C,[B(423),AS0()]),H(C,[B(424),AR4()]),H(C,[B(425),AXI]),H(C,[B(426),ARH()]),H(C,[B(427),AXJ]),H(C,[B(428),ASu()]),H(C,[B(429),P(0,127)]),H(C,[B(430),P(128,255)]),H(C,[B(431),P(256,383)]),H(C,[B(432),P(384,591)]),H(C,[B(433),P(592,687)]),H(C,[B(434),P(688,767)]),H(C,[B(435),P(768,879)]),H(C,[B(436),P(880,1023)]),H(C,[B(437),P(1024,1279)]),H(C,[B(438),P(1280,1327)]),H(C,[B(439),P(1328,1423)]),
H(C,[B(440),P(1424,1535)]),H(C,[B(441),P(1536,1791)]),H(C,[B(442),P(1792,1871)]),H(C,[B(443),P(1872,1919)]),H(C,[B(444),P(1920,1983)]),H(C,[B(445),P(2304,2431)]),H(C,[B(446),P(2432,2559)]),H(C,[B(447),P(2560,2687)]),H(C,[B(448),P(2688,2815)]),H(C,[B(449),P(2816,2943)]),H(C,[B(450),P(2944,3071)]),H(C,[B(451),P(3072,3199)]),H(C,[B(452),P(3200,3327)]),H(C,[B(453),P(3328,3455)]),H(C,[B(454),P(3456,3583)]),H(C,[B(455),P(3584,3711)]),H(C,[B(456),P(3712,3839)]),H(C,[B(457),P(3840,4095)]),H(C,[B(458),P(4096,4255)]),
H(C,[B(459),P(4256,4351)]),H(C,[B(460),P(4352,4607)]),H(C,[B(461),P(4608,4991)]),H(C,[B(462),P(4992,5023)]),H(C,[B(463),P(5024,5119)]),H(C,[B(464),P(5120,5759)]),H(C,[B(465),P(5760,5791)]),H(C,[B(466),P(5792,5887)]),H(C,[B(467),P(5888,5919)]),H(C,[B(468),P(5920,5951)]),H(C,[B(469),P(5952,5983)]),H(C,[B(470),P(5984,6015)]),H(C,[B(471),P(6016,6143)]),H(C,[B(472),P(6144,6319)]),H(C,[B(473),P(6400,6479)]),H(C,[B(474),P(6480,6527)]),H(C,[B(475),P(6528,6623)]),H(C,[B(476),P(6624,6655)]),H(C,[B(477),P(6656,6687)]),
H(C,[B(478),P(7424,7551)]),H(C,[B(479),P(7552,7615)]),H(C,[B(480),P(7616,7679)]),H(C,[B(481),P(7680,7935)]),H(C,[B(482),P(7936,8191)]),H(C,[B(483),P(8192,8303)]),H(C,[B(484),P(8304,8351)]),H(C,[B(485),P(8352,8399)]),H(C,[B(486),P(8400,8447)]),H(C,[B(487),P(8448,8527)]),H(C,[B(488),P(8528,8591)]),H(C,[B(489),P(8592,8703)]),H(C,[B(490),P(8704,8959)]),H(C,[B(491),P(8960,9215)]),H(C,[B(492),P(9216,9279)]),H(C,[B(493),P(9280,9311)]),H(C,[B(494),P(9312,9471)]),H(C,[B(495),P(9472,9599)]),H(C,[B(496),P(9600,9631)]),
H(C,[B(497),P(9632,9727)]),H(C,[B(498),P(9728,9983)]),H(C,[B(499),P(9984,10175)]),H(C,[B(500),P(10176,10223)]),H(C,[B(501),P(10224,10239)]),H(C,[B(502),P(10240,10495)]),H(C,[B(503),P(10496,10623)]),H(C,[B(504),P(10624,10751)]),H(C,[B(505),P(10752,11007)]),H(C,[B(506),P(11008,11263)]),H(C,[B(507),P(11264,11359)]),H(C,[B(508),P(11392,11519)]),H(C,[B(509),P(11520,11567)]),H(C,[B(510),P(11568,11647)]),H(C,[B(511),P(11648,11743)]),H(C,[B(512),P(11776,11903)]),H(C,[B(513),P(11904,12031)]),H(C,[B(514),P(12032,12255)]),
H(C,[B(515),P(12272,12287)]),H(C,[B(516),P(12288,12351)]),H(C,[B(517),P(12352,12447)]),H(C,[B(518),P(12448,12543)]),H(C,[B(519),P(12544,12591)]),H(C,[B(520),P(12592,12687)]),H(C,[B(521),P(12688,12703)]),H(C,[B(522),P(12704,12735)]),H(C,[B(523),P(12736,12783)]),H(C,[B(524),P(12784,12799)]),H(C,[B(525),P(12800,13055)]),H(C,[B(526),P(13056,13311)]),H(C,[B(527),P(13312,19893)]),H(C,[B(528),P(19904,19967)]),H(C,[B(529),P(19968,40959)]),H(C,[B(530),P(40960,42127)]),H(C,[B(531),P(42128,42191)]),H(C,[B(532),P(42752,
42783)]),H(C,[B(533),P(43008,43055)]),H(C,[B(534),P(44032,55203)]),H(C,[B(535),P(55296,56191)]),H(C,[B(536),P(56192,56319)]),H(C,[B(537),P(56320,57343)]),H(C,[B(538),P(57344,63743)]),H(C,[B(539),P(63744,64255)]),H(C,[B(540),P(64256,64335)]),H(C,[B(541),P(64336,65023)]),H(C,[B(542),P(65024,65039)]),H(C,[B(543),P(65040,65055)]),H(C,[B(544),P(65056,65071)]),H(C,[B(545),P(65072,65103)]),H(C,[B(546),P(65104,65135)]),H(C,[B(547),P(65136,65279)]),H(C,[B(548),P(65280,65519)]),H(C,[B(549),P(0,1114111)]),H(C,[B(550),
AR8()]),H(C,[B(551),BJ(0,1)]),H(C,[B(552),IG(62,1)]),H(C,[B(553),BJ(1,1)]),H(C,[B(554),BJ(2,1)]),H(C,[B(555),BJ(3,0)]),H(C,[B(556),BJ(4,0)]),H(C,[B(557),BJ(5,1)]),H(C,[B(558),IG(448,1)]),H(C,[B(559),BJ(6,1)]),H(C,[B(560),BJ(7,0)]),H(C,[B(561),BJ(8,1)]),H(C,[B(562),IG(3584,1)]),H(C,[B(563),BJ(9,1)]),H(C,[B(564),BJ(10,1)]),H(C,[B(565),BJ(11,1)]),H(C,[B(566),IG(28672,0)]),H(C,[B(567),BJ(12,0)]),H(C,[B(568),BJ(13,0)]),H(C,[B(569),BJ(14,0)]),H(C,[B(570),ASB(983040,1,1)]),H(C,[B(571),BJ(15,0)]),H(C,[B(572),BJ(16,
1)]),H(C,[B(573),BJ(18,1)]),H(C,[B(574),ASN(19,0,1)]),H(C,[B(575),IG(1643118592,1)]),H(C,[B(576),BJ(20,0)]),H(C,[B(577),BJ(21,0)]),H(C,[B(578),BJ(22,0)]),H(C,[B(579),BJ(23,0)]),H(C,[B(580),BJ(24,1)]),H(C,[B(581),IG(2113929216,1)]),H(C,[B(582),BJ(25,1)]),H(C,[B(583),BJ(26,0)]),H(C,[B(584),BJ(27,0)]),H(C,[B(585),BJ(28,1)]),H(C,[B(586),BJ(29,0)]),H(C,[B(587),BJ(30,0)])]);}
function Mu(){BT.call(this);this.p5=0;}
function AOG(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.p5!=Gz(Gw(Er(e,d)))?(-1):2;}
function KY(){BO.call(this);this.fX=0;}
function AMb(a){var b=new KY();AF5(b,a);return b;}
function AF5(a,b){BK(a);a.fX=b;}
function AMF(a,b){a.d=b;}
function AGF(a,b,c,d){var e,f;e=b+1|0;if(e>d.v){d.dc=1;return (-1);}f=L(c,b);if(b>d.cD&&CD(L(c,b-1|0)))return (-1);if(a.fX!=f)return (-1);return a.d.c(e,c,d);}
function AI2(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return HC(a,b,c,d);e=d.cD;f=d.v;while(true){if(b>=f)return (-1);g=GE(c,a.fX,b);if(g<0)return (-1);if(g>e&&CD(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AHg(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HO(a,b,c,d,e);f=e.cD;a:{while(true){if(c<b)return (-1);g=FZ(d,a.fX,c);if(g<0)break a;if(g<b)break a;if(g>f&&CD(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AE2(a,b){if(b instanceof Ei)return 0;if(b instanceof Ed)return 0;if(b instanceof DA)return 0;if(b instanceof DU)return 0;if(b instanceof Lk)return 0;if(!(b instanceof KY))return 1;return b.fX!=a.fX?0:1;}
function APl(a,b){return 1;}
function Lk(){BO.call(this);this.fA=0;}
function AJw(a){var b=new Lk();AMj(b,a);return b;}
function AMj(a,b){BK(a);a.fA=b;}
function AF9(a,b){a.d=b;}
function AED(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;g=BE(f,e);if(g>0){d.dc=1;return (-1);}h=L(c,b);if(g<0&&CZ(L(c,f)))return (-1);if(a.fA!=h)return (-1);return a.d.c(f,c,d);}
function AM3(a,b,c,d){var e,f;if(!(c instanceof Bv))return HC(a,b,c,d);e=d.v;while(true){if(b>=e)return (-1);f=GE(c,a.fA,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CZ(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AOy(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HO(a,b,c,d,e);f=e.v;a:{while(true){if(c<b)return (-1);g=FZ(d,a.fA,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CZ(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AHa(a,b){if(b instanceof Ei)return 0;if(b instanceof Ed)return 0;if(b instanceof DA)return 0;if(b instanceof DU)return 0;if(b instanceof KY)return 0;if(!(b instanceof Lk))return 1;return b.fA!=a.fA?0:1;}
function ANb(a,b){return 1;}
function DU(){var a=this;BT.call(a);a.je=0;a.hU=0;a.fq=0;}
function ANY(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.je==e&&a.hU==d?2:(-1);}
function ALW(a,b,c,d){var e,f;if(!(c instanceof Bv))return HC(a,b,c,d);e=d.v;while(b<e){b=GE(c,a.je,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hU==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AF7(a,b,c,d,e){var f;if(!(d instanceof Bv))return HO(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FZ(d,a.hU,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.je==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANK(a,b){if(b instanceof DU)return b.fq!=a.fq?0:1;if(b instanceof DA)return b.k(a.fq);if(b instanceof Ei)return 0;if(!(b instanceof Ed))return 1;return 0;}
var Ve=F(EJ);
function AGj(a,b){return b!=10?0:1;}
function ANQ(a,b,c){return b!=10?0:1;}
var Vf=F(EJ);
function AOS(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AQC(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ACp(){var a=this;C.call(a);a.lS=null;a.ju=null;a.gw=0;a.uB=0;}
function AL7(a){var b=new ACp();AJW(b,a);return b;}
function AJW(a,b){var c,d;while(true){c=a.gw;if(b<c)break;a.gw=c<<1|1;}d=c<<1|1;a.gw=d;d=d+1|0;a.lS=BI(d);a.ju=BI(d);a.uB=b;}
function Q0(a,b,c){var d,e,f,g;d=0;e=a.gw;f=b&e;while(true){g=a.lS.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.ju.data[f]=c;}
function SD(a,b){var c,d,e,f;c=a.gw;d=b&c;e=0;while(true){f=a.lS.data[d];if(!f)break;if(f==b)return a.ju.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.uB;}
var Yu=F();
var KV=F(X);
function ATy(){var a=new KV();AJp(a);return a;}
function AJp(a){}
function AAL(a){return Ct(BP(Dn(),9,13),32);}
var JR=F(X);
function ASH(){var a=new JR();APh(a);return a;}
function APh(a){}
function ABr(a){return BP(Dn(),48,57);}
var ACi=F(X);
function ATR(){var a=new ACi();AIK(a);return a;}
function AIK(a){}
function AOj(a){return BP(Dn(),97,122);}
var ACO=F(X);
function ARP(){var a=new ACO();AJ3(a);return a;}
function AJ3(a){}
function APn(a){return BP(Dn(),65,90);}
var ACS=F(X);
function ATv(){var a=new ACS();AFE(a);return a;}
function AFE(a){}
function AHP(a){return BP(Dn(),0,127);}
var KR=F(X);
function ATC(){var a=new KR();AGQ(a);return a;}
function AGQ(a){}
function Zi(a){return BP(BP(Dn(),97,122),65,90);}
var Lu=F(KR);
function ASS(){var a=new Lu();AJD(a);return a;}
function AJD(a){}
function AAe(a){return BP(Zi(a),48,57);}
var AD5=F(X);
function ASF(){var a=new AD5();ALJ(a);return a;}
function ALJ(a){}
function AI0(a){return BP(BP(BP(Dn(),33,64),91,96),123,126);}
var Ml=F(Lu);
function AR3(){var a=new Ml();ANu(a);return a;}
function ANu(a){}
function X$(a){return BP(BP(BP(AAe(a),33,64),91,96),123,126);}
var AAX=F(Ml);
function ARY(){var a=new AAX();AO9(a);return a;}
function AO9(a){}
function ALq(a){return Ct(X$(a),32);}
var ABj=F(X);
function AR$(){var a=new ABj();AOA(a);return a;}
function AOA(a){}
function AG4(a){return Ct(Ct(Dn(),32),9);}
var ZJ=F(X);
function ASm(){var a=new ZJ();AQp(a);return a;}
function AQp(a){}
function ALn(a){return Ct(BP(Dn(),0,31),127);}
var Zp=F(X);
function AR7(){var a=new Zp();AFP(a);return a;}
function AFP(a){}
function AQF(a){return BP(BP(BP(Dn(),48,57),97,102),65,70);}
var ACV=F(X);
function ATb(){var a=new ACV();AFv(a);return a;}
function AFv(a){}
function AL5(a){var b;b=new ST;b.wq=a;Br(b);b.I=1;return b;}
var AEf=F(X);
function ARJ(){var a=new AEf();ANO(a);return a;}
function ANO(a){}
function AEu(a){var b;b=new MI;b.wz=a;Br(b);b.I=1;return b;}
var ACq=F(X);
function ATz(){var a=new ACq();AFF(a);return a;}
function AFF(a){}
function AJx(a){var b;b=new RP;b.wb=a;Br(b);return b;}
var ACe=F(X);
function ASl(){var a=new ACe();ALo(a);return a;}
function ALo(a){}
function AN2(a){var b;b=new RO;b.vV=a;Br(b);return b;}
var ADb=F(X);
function ASQ(){var a=new ADb();AGN(a);return a;}
function AGN(a){}
function AG0(a){var b;b=new WK;b.xe=a;Br(b);HU(b.H,0,2048);b.I=1;return b;}
var YO=F(X);
function ASj(){var a=new YO();AGe(a);return a;}
function AGe(a){}
function AHo(a){var b;b=new OM;b.wM=a;Br(b);b.I=1;return b;}
var Yr=F(X);
function ASR(){var a=new Yr();AK2(a);return a;}
function AK2(a){}
function AQy(a){var b;b=new NX;b.xI=a;Br(b);b.I=1;return b;}
var ACw=F(X);
function ASb(){var a=new ACw();ALK(a);return a;}
function ALK(a){}
function AEn(a){var b;b=new Qq;b.ws=a;Br(b);return b;}
var ACH=F(X);
function ATH(){var a=new ACH();AJd(a);return a;}
function AJd(a){}
function AKs(a){var b;b=new MB;b.u6=a;Br(b);b.I=1;return b;}
var Z8=F(X);
function ASf(){var a=new Z8();AE5(a);return a;}
function AE5(a){}
function AHy(a){var b;b=new MG;b.wP=a;Br(b);b.I=1;return b;}
var ABo=F(X);
function ASW(){var a=new ABo();AGn(a);return a;}
function AGn(a){}
function AID(a){var b;b=new NG;b.xb=a;Br(b);b.I=1;return b;}
var ADM=F(X);
function ATt(){var a=new ADM();AKy(a);return a;}
function AKy(a){}
function AKu(a){var b;b=new O$;b.xu=a;Br(b);b.I=1;return b;}
var ACG=F(X);
function ATp(){var a=new ACG();AL2(a);return a;}
function AL2(a){}
function APG(a){var b;b=new Ph;b.wd=a;Br(b);return b;}
var AAz=F(X);
function ATD(){var a=new AAz();AGg(a);return a;}
function AGg(a){}
function ANk(a){var b;b=new TG;b.wV=a;Br(b);return b;}
var Z6=F(X);
function ASa(){var a=new Z6();AN4(a);return a;}
function AN4(a){}
function ALZ(a){var b;b=new Sr;b.u$=a;Br(b);b.I=1;return b;}
var AEa=F(X);
function ATg(){var a=new AEa();AI9(a);return a;}
function AI9(a){}
function AOc(a){var b;b=new MW;b.xX=a;Br(b);b.I=1;return b;}
var Jd=F(X);
function AS0(){var a=new Jd();AHG(a);return a;}
function AHG(a){}
function ABl(a){return Ct(BP(BP(BP(Dn(),97,122),65,90),48,57),95);}
var ADd=F(Jd);
function AR4(){var a=new ADd();AJi(a);return a;}
function AJi(a){}
function ALM(a){var b;b=Eq(ABl(a),1);b.I=1;return b;}
var AA2=F(KV);
function ARH(){var a=new AA2();AQb(a);return a;}
function AQb(a){}
function AFB(a){var b;b=Eq(AAL(a),1);b.I=1;return b;}
var Z0=F(JR);
function ASu(){var a=new Z0();AKh(a);return a;}
function AKh(a){}
function AIP(a){var b;b=Eq(ABr(a),1);b.I=1;return b;}
function Zw(){var a=this;X.call(a);a.pT=0;a.qw=0;}
function P(a,b){var c=new Zw();AQw(c,a,b);return c;}
function AQw(a,b,c){a.pT=b;a.qw=c;}
function AKK(a){return BP(Dn(),a.pT,a.qw);}
var ZU=F(X);
function AR8(){var a=new ZU();AQM(a);return a;}
function AQM(a){}
function AQk(a){return BP(BP(Dn(),65279,65279),65520,65533);}
function AAS(){var a=this;X.call(a);a.lq=0;a.jl=0;a.n3=0;}
function BJ(a,b){var c=new AAS();AGI(c,a,b);return c;}
function ASN(a,b,c){var d=new AAS();AQx(d,a,b,c);return d;}
function AGI(a,b,c){a.jl=c;a.lq=b;}
function AQx(a,b,c,d){a.n3=d;a.jl=c;a.lq=b;}
function AId(a){var b;b=ATN(a.lq);if(a.n3)HU(b.H,0,2048);b.I=a.jl;return b;}
function AAY(){var a=this;X.call(a);a.lp=0;a.jw=0;a.mJ=0;}
function IG(a,b){var c=new AAY();AHz(c,a,b);return c;}
function ASB(a,b,c){var d=new AAY();AEq(d,a,b,c);return d;}
function AHz(a,b,c){a.jw=c;a.lp=b;}
function AEq(a,b,c,d){a.mJ=d;a.jw=c;a.lp=b;}
function AEo(a){var b;b=new RI;AB2(b,a.lp);if(a.mJ)HU(b.H,0,2048);b.I=a.jw;return b;}
var ZD=F();
var Y6=F();
function AAy(b){var c,d,e,f,g,h,i;c=AOn(Gr(b));d=JE(c);e=BI(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+JE(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=M7(c);h=h+1|0;}return e;}
function KC(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Nj(){var a=this;C.call(a);a.oI=0;a.qS=0;a.oV=null;}
function AIb(a,b,c){var d=new Nj();AO8(d,a,b,c);return d;}
function AO8(a,b,c,d){a.oI=b;a.qS=c;a.oV=d;}
function ACC(){var a=this;C.call(a);a.nr=null;a.p2=0;}
function AOn(a){var b=new ACC();AHd(b,a);return b;}
function AHd(a,b){a.nr=b;}
var AAx=F();
function JE(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nr.data;f=b.p2;b.p2=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bd(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function M7(b){var c,d;c=JE(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Zf(){C.call(this);this.Hb=null;}
function Tl(){C.call(this);this.m4=null;}
function ARp(a,b){var c,d,e,f;c=b.data;b=a.m4;d=Es(c[0]);e=FG(c[1]);AA$(b.e.g,d,e);Gq(Ck(b),AVy);F2(Ck(b));f=Kn(FC(),b.eK);b=new M;O(b);G(HR(G(b,B(588)),f),B(226));$rt_globals.console.info($rt_ustr(N(b)));}
function Q3(){C.call(this);this.qu=null;}
function AIa(a,b){KG(a.qu,b);}
function Pz(){var a=this;C.call(a);a.xq=null;a.xr=null;a.xs=null;}
function Qe(){var a=this;C.call(a);a.wH=null;a.wG=null;}
function Wd(){var a=this;U.call(a);a.nb=null;a.xk=null;}
function AHW(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.ca^Dv(a.nb,c):0;}
function Wb(){var a=this;U.call(a);a.sT=null;a.tD=null;a.w0=null;}
function AES(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.ca^Dv(a.sT,c):0;return a.tD.k(b)&&!d?1:0;}
function Og(){var a=this;U.call(a);a.hY=null;a.vc=null;}
function AKz(a,b){return a.bc^Dv(a.hY,b);}
function AIG(a){var b,c,d;b=new M;O(b);c=Ha(a.hY,0);while(c>=0){Ie(b,Go(c));BB(b,124);c=Ha(a.hY,c+1|0);}d=b.L;if(d>0)V3(b,d-1|0);return N(b);}
function Om(){var a=this;U.call(a);a.qi=null;a.wx=null;}
function AN1(a,b){return a.qi.k(b);}
function Ok(){var a=this;U.call(a);a.jo=0;a.nR=null;a.kc=null;}
function AOF(a,b){return !(a.jo^Dv(a.kc.E,b))&&!(a.jo^a.kc.dD^a.nR.k(b))?0:1;}
function Ol(){var a=this;U.call(a);a.jv=0;a.tf=null;a.k1=null;}
function AK4(a,b){return !(a.jv^Dv(a.k1.E,b))&&!(a.jv^a.k1.dD^a.tf.k(b))?1:0;}
function Op(){var a=this;U.call(a);a.t8=0;a.tl=null;a.ta=null;a.vA=null;}
function AHt(a,b){return a.t8^(!a.tl.k(b)&&!a.ta.k(b)?0:1);}
function Oq(){var a=this;U.call(a);a.qt=0;a.p_=null;a.pm=null;a.xP=null;}
function AEh(a,b){return a.qt^(!a.p_.k(b)&&!a.pm.k(b)?0:1)?0:1;}
function On(){var a=this;U.call(a);a.o1=null;a.xV=null;}
function AIL(a,b){return CW(a.o1,b);}
function Oo(){var a=this;U.call(a);a.tz=null;a.vQ=null;}
function AK7(a,b){return CW(a.tz,b)?0:1;}
function Or(){var a=this;U.call(a);a.qL=null;a.qd=0;a.ss=null;}
function APT(a,b){return !CW(a.qL,b)&&!(a.qd^Dv(a.ss.E,b))?0:1;}
function Os(){var a=this;U.call(a);a.rv=null;a.rJ=0;a.q$=null;}
function AGU(a,b){return !CW(a.rv,b)&&!(a.rJ^Dv(a.q$.E,b))?1:0;}
function Of(){var a=this;U.call(a);a.sp=0;a.td=null;a.tP=null;a.vg=null;}
function ARF(a,b){return !(a.sp^a.td.k(b))&&!CW(a.tP,b)?0:1;}
function OZ(){var a=this;U.call(a);a.tM=0;a.mm=null;a.mK=null;a.vL=null;}
function AIO(a,b){return !(a.tM^a.mm.k(b))&&!CW(a.mK,b)?1:0;}
function Oc(){var a=this;U.call(a);a.oA=null;a.vU=null;}
function AGR(a,b){return CW(a.oA,b);}
function Od(){var a=this;U.call(a);a.oG=null;a.xL=null;}
function AIr(a,b){return CW(a.oG,b)?0:1;}
function Oj(){var a=this;U.call(a);a.t4=null;a.rn=0;a.uX=null;}
function AJ1(a,b){return CW(a.t4,b)&&a.rn^Dv(a.uX.E,b)?1:0;}
function Ob(){var a=this;U.call(a);a.r4=null;a.qv=0;a.rl=null;}
function APu(a,b){return CW(a.r4,b)&&a.qv^Dv(a.rl.E,b)?0:1;}
function Oh(){var a=this;U.call(a);a.sx=0;a.m$=null;a.qp=null;a.vz=null;}
function AFO(a,b){return a.sx^a.m$.k(b)&&CW(a.qp,b)?1:0;}
function Oi(){var a=this;U.call(a);a.rZ=0;a.mb=null;a.so=null;a.vZ=null;}
function AM_(a,b){return a.rZ^a.mb.k(b)&&CW(a.so,b)?0:1;}
var LS=F(0);
function Sp(){var a=this;C.call(a);a.vG=null;a.tg=null;a.il=null;a.cp=null;a.hZ=0;a.j7=0;}
function ME(a,b){var c,d,e;c=I(a.il);if(b>=0&&b<=c){Xs(a.cp,null,(-1),(-1));d=a.cp;d.i3=1;d.d3=b;c=d.hd;if(c<0)c=b;d.hd=c;b=a.tg.cf(b,a.il,d);if(b==(-1))a.cp.dc=1;if(b>=0){d=a.cp;if(d.ip){e=d.dz.data;if(e[0]==(-1)){c=d.d3;e[0]=c;e[1]=c;}d.hd=IW(d);return 1;}}a.cp.d3=(-1);return 0;}d=new Bw;Bn(d,C0(b));J(d);}
function ADK(a){return OQ(a.cp,0);}
function Z1(a){return RU(a.cp,0);}
function Yz(a){return a.cp.iw;}
var Dg=F(0);
var AV2=null;var AWD=null;var AV4=null;var AV3=null;var AV6=null;var AV5=null;var AV8=null;var AV7=null;var AV$=null;var AV9=null;function ABq(){ABq=Bl(Dg);AKZ();}
function AKZ(){AV2=CY(0);AWD=CL(0,0,0);AV4=S(B(589));AV3=CL(255,255,255);AV6=CL(166,214,255);AV5=S(B(590));AV8=S(B(591));AV7=S(B(592));AV$=Ft(205,205,205,153);AV9=Ft(255,255,255,0);}
function Cg(){Cj.call(this);this.kO=null;}
var AXK=null;var AXL=null;var AXM=null;var AXN=null;var AXO=null;var AXP=null;var AXQ=null;var AXR=null;var AXS=null;var AXT=null;var AXU=null;var AXV=null;var AXW=null;var AXX=null;var AXY=null;var AV_=null;function ZS(){ZS=Bl(Cg);AIh();}
function DB(a,b,c){var d=new Cg();We(d,a,b,c);return d;}
function AJn(a,b,c,d){var e=new Cg();AB4(e,a,b,c,d);return e;}
function We(a,b,c,d){ZS();C7(a,b,c);a.kO=If(d,null);}
function AB4(a,b,c,d,e){ZS();C7(a,b,c);a.kO=If(d,e);}
function AIh(){var b;b=new Cg;ABq();We(b,B(322),0,AWD);AXK=b;AXL=DB(B(323),1,CL(0,49,191));AXM=DB(B(325),2,S(B(593)));AXN=DB(B(48),3,S(B(594)));AXO=DB(B(328),4,AWD);AXP=DB(B(329),5,S(B(595)));AXQ=DB(B(330),6,S(B(340)));AXR=DB(B(49),7,S(B(596)));AXS=DB(B(333),8,S(B(597)));AXT=AJn(B(335),9,AWD,CL(237,235,252));AXU=AJn(B(336),10,S(B(337)),S(B(598)));AXV=DB(B(339),11,S(B(340)));AXW=DB(B(341),12,S(B(342)));AXX=DB(B(343),13,S(B(599)));b=DB(B(344),14,S(B(345)));AXY=b;AV_=H(Cg,[AXK,AXL,AXM,AXN,AXO,AXP,AXQ,AXR,AXS,AXT,
AXU,AXV,AXW,AXX,b]);}
var Du=F(0);
var AWd=null;var AWe=null;var AWa=null;var AWb=null;var AWc=null;var AWE=null;var AWF=null;var AWf=null;var AWg=null;function AN3(){AN3=Bl(Du);AIA();}
function AIA(){AWd=S(B(260));AWe=S(B(600));AWa=S(B(601));AWb=S(B(602));AWc=S(B(603));AWE=S(B(260));AWF=S(B(600));AWf=Ft(205,205,205,153);AWg=CL(247,248,250);}
function N4(){C.call(this);this.q3=null;}
function AOb(a,b){Up(a.q3,b);}
var M2=F(Gs);
function AIg(a,b,c,d){var e,f,g;e=0;f=d.v;a:{while(true){if(b>f){b=e;break a;}g=Fz(d,a.X);Dy(d,a.X,b);e=a.cQ.c(b,c,d);if(e>=0)break;Dy(d,a.X,g);b=b+1|0;}}return b;}
function ARq(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fz(e,a.X);Dy(e,a.X,c);f=a.cQ.c(c,d,e);if(f>=0)break;Dy(e,a.X,g);c=c+(-1)|0;}}return c;}
function AGD(a){return null;}
var PY=F(Bp);
var W3=F(Bp);
function U_(){FK.call(this);this.xE=0;}
function PL(){FK.call(this);this.xy=0;}
var XS=F(Bp);
function U2(){var a=this;C.call(a);a.qQ=null;a.sV=null;a.uo=0;a.jG=0;}
function Kp(a,b){return B5(a.qQ)<b?0:1;}
function Tn(){var a=this;C.call(a);a.tt=null;a.ts=null;}
function Sz(){var a=this;C.call(a);a.wc=null;a.oX=null;}
function Sy(){C.call(this);this.u7=null;}
var ACs=F(0);
function Xw(b){return !b?H(Bv,[B(125),B(126),B(604)]):H(Bv,[B(125),B(126),B(604),B(41)]);}
var ZW=F();
function Rt(){var a=this;C.call(a);a.nB=null;a.nA=0;a.nz=null;}
function Jv(a,b){var c,d,e,f,g,h,i,j,k;c=a.nB;d=a.nA;e=a.nz;if(b<=d){f=Ck(c);g=new XI;g.mF=c;h=R(C,1);h.data[0]=e;C1(f,g,B(605),h);}else{i=Ck(c);g=new XJ;g.tF=c;j=R(C,2);k=j.data;k[0]=e;h=BI(1);h.data[0]=250;k[1]=h;C1(i,g,B(606),j);f=Ck(c);g=new XK;g.se=c;h=R(C,1);h.data[0]=e;C1(f,g,B(607),h);}}
function U8(){var a=this;C.call(a);a.dz=null;a.jb=null;a.kA=null;a.kG=null;a.n0=0;a.ip=0;a.cD=0;a.v=0;a.d3=0;a.iw=0;a.e2=0;a.dc=0;a.w9=0;a.hd=0;a.i3=0;}
function BF(a,b,c){a.jb.data[b]=c;}
function Dm(a,b){return a.jb.data[b];}
function IW(a){return RU(a,0);}
function RU(a,b){RH(a,b);return a.dz.data[(b*2|0)+1|0];}
function Dy(a,b,c){a.dz.data[b*2|0]=c;}
function Js(a,b,c){a.dz.data[(b*2|0)+1|0]=c;}
function Fz(a,b){return a.dz.data[b*2|0];}
function Il(a,b){return a.dz.data[(b*2|0)+1|0];}
function ACj(a){return OQ(a,0);}
function OQ(a,b){RH(a,b);return a.dz.data[b*2|0];}
function MS(a,b){return a.kA.data[b];}
function Ea(a,b,c){a.kA.data[b]=c;}
function RH(a,b){var c;if(!a.ip){c=new DZ;V(c);J(c);}if(b>=0&&b<a.n0)return;c=new Bw;Bn(c,C0(b));J(c);}
function Xs(a,b,c,d){a.ip=0;a.i3=2;Ht(a.dz,(-1));Ht(a.jb,(-1));if(b!==null)a.kG=b;if(c>=0){a.cD=c;a.v=d;}a.d3=a.cD;}
function AAj(a){return a.i3;}
function AC5(){var a=this;C.call(a);a.A5=null;a.A6=null;a.A4=0.0;}
function Vz(){C.call(this);this.nC=null;}
function AP7(a){DL(a.nC);}
function N7(){var a=this;C.call(a);a.h0=null;a.gM=0;}
function ST(){U.call(this);this.wq=null;}
function AP4(a,b){return Cs(b)!=2?0:1;}
function MI(){U.call(this);this.wz=null;}
function AFy(a,b){return Cs(b)!=1?0:1;}
function RP(){U.call(this);this.wb=null;}
function AFj(a,b){return QT(b);}
function RO(){U.call(this);this.vV=null;}
function AIc(a,b){return 0;}
function WK(){U.call(this);this.xe=null;}
function AJM(a,b){return !Cs(b)?0:1;}
function OM(){U.call(this);this.wM=null;}
function AP8(a,b){return Cs(b)!=9?0:1;}
function NX(){U.call(this);this.xI=null;}
function AMz(a,b){return Gj(b);}
function Qq(){U.call(this);this.ws=null;}
function AN7(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MB(){U.call(this);this.u6=null;}
function AQ4(a,b){a:{b:{switch(Cs(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gj(b);}return b;}
function MG(){U.call(this);this.wP=null;}
function AHf(a,b){a:{b:{switch(Cs(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gj(b);}return b;}
function NG(){U.call(this);this.xb=null;}
function AQi(a,b){a:{switch(Cs(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function O$(){U.call(this);this.xu=null;}
function ALk(a,b){return Jl(b);}
function Ph(){U.call(this);this.wd=null;}
function ANx(a,b){return Pi(b);}
function TG(){U.call(this);this.wV=null;}
function APU(a,b){return Cs(b)!=3?0:1;}
function Sr(){U.call(this);this.u$=null;}
function AQN(a,b){a:{b:{switch(Cs(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gj(b);}return b;}
function MW(){U.call(this);this.xX=null;}
function AG2(a,b){a:{b:{switch(Cs(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gj(b);}return b;}
function L9(){U.call(this);this.kR=0;}
function ATN(a){var b=new L9();AB2(b,a);return b;}
function AB2(a,b){Br(a);a.kR=b;}
function AMC(a,b){return a.bc^(a.kR!=Cs(b&65535)?0:1);}
var RI=F(L9);
function AO5(a,b){return a.bc^(!(a.kR>>Cs(b&65535)&1)?0:1);}
function PF(){C.call(this);this.u0=null;}
function AKR(a){var b,c;b=a.u0;c=b.tt;b=b.ts;c.Fh(b.hT,b.jN,null);}
function VI(){C.call(this);this.nh=null;}
function ANo(a,b){var c,d,e,f;c=a.nh;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.oX;c=By();b=Cv(b);e=new M;O(e);G(G(e,B(608)),b);Bu(c,N(e));b=By();f=d.length;c=new M;O(c);T(G(c,B(609)),f);Bu(b,N(c));}
function VL(){var a=this;C.call(a);a.sL=null;a.sM=null;}
function AL$(a,b){var c,d;c=a.sL;d=a.sM;b.arrayBuffer().then(Bk(c,"f"),Bk(d,"f"));}
function Ts(){var a=this;C.call(a);a.lX=null;a.lY=null;}
function AIV(a,b){var c;c=a.lX;Jv(a.lY,Ju(c,b.size));}
function Tv(){C.call(this);this.t5=null;}
function AEM(a,b){var c;c=a.t5;Bu(LH(),$rt_str(b.message));Jv(c,0);}
function Ut(){C.call(this);this.v4=null;}
function AKM(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function XJ(){C.call(this);this.tF=null;}
function APj(a,b){var c,d;c=a.tF;if(!c.hA){b=b.data;c.e.g=ABA(Es(b[0]),FG(b[1]));c.hz=1;d=Kn(FC(),c.eK);b=new M;O(b);G(HR(G(b,B(610)),d),B(226));$rt_globals.console.info($rt_ustr(N(b)));}}
function XK(){C.call(this);this.se=null;}
function ALE(a,b){var c,d,e,f,g,h;c=b.data;d=a.se;e=(Es(c[2])).data[0];if(e!=1)HF(d,b);else{d.hA=1;f=Es(c[0]);g=FG(c[1]);b=d.e;b.g=ACt(b.g,f,g,d.hz);V7(d,AC9(e));Gq(Ck(d),AVy);F2(Ck(d));h=Kn(FC(),d.eK);b=new M;O(b);G(HR(G(b,B(611)),h),B(226));$rt_globals.console.info($rt_ustr(N(b)));WB(d);J2(d);}}
function XI(){C.call(this);this.mF=null;}
function ARG(a,b){HF(a.mF,b);}
var YV=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["cu",AT$(ALf),"cq",AT9(AF4)],Rw,0,C,[],0,3,0,0,0,M5,0,C,[],3,3,0,0,0,Mw,0,C,[],3,3,0,0,0,Wg,0,C,[M5,Mw],0,3,0,0,0,Zn,0,C,[],4,0,0,0,0,Y7,0,C,[],4,3,0,0,0,Gt,0,C,[],0,3,0,0,0,D2,0,Gt,[],0,3,0,0,0,Bp,0,D2,[],0,3,0,0,0,AAZ,0,Bp,[],0,3,0,0,0,Dh,0,C,[],3,3,0,0,0,CI,0,C,[],3,3,0,0,0,IK,0,C,[],3,3,0,0,0,Bv,"String",1,C,[Dh,CI,IK],0,3,0,EK,["cq",AT9(AF3),"cu",AT$(Bo),"i4",AT9(Lj),"jj",AT$(AIe)],EE,0,Gt,[],0,3,0,0,0,Hc,0,EE,[],0,3,0,0,0,AAB,0,Hc,[],0,3,0,0,0,DV,0,C,[Dh],1,3,0,0,0,Ff,0,
DV,[CI],0,3,0,0,["jj",AT$(AKq)],Gf,0,C,[Dh,IK],0,0,0,0,["ho",AT$(Jr),"cq",AT9(N)],HT,0,C,[],3,3,0,0,0,M,0,Gf,[HT],0,3,0,0,["k6",AUb(AKl),"kj",AUa(AHm),"cq",AT9(DT),"ho",AT$(AKt),"lD",AT_(AK0)],Eo,0,Hc,[],0,3,0,0,0,AB5,0,Eo,[],0,3,0,0,0,AAp,0,Eo,[],0,3,0,0,0,TE,0,C,[],3,3,0,0,0,Ds,0,C,[],3,3,0,0,0,OL,0,C,[],3,0,0,0,0,Ir,0,C,[TE,Ds,OL],1,3,0,0,["dR",AT9(FM)],Ri,0,Ir,[],0,3,0,0,0,Yx,0,C,[],0,3,0,0,0,ADf,0,C,[],4,3,0,0,0,Bc,0,C,[],3,3,0,0,0,TM,0,C,[Bc],0,3,0,0,0,Bt,0,C,[],3,3,0,0,0,ABb,0,C,[Bt],1,3,0,0,0,YC,0,C,
[],3,3,0,0,0,ACR,0,C,[],3,3,0,0,0,ACM,0,C,[],3,3,0,0,0,LM,0,C,[],0,3,0,0,0,Zk,0,C,[Bt],1,3,0,0,0,BW,0,C,[Bt],3,3,0,0,0,TN,0,C,[BW],0,3,0,0,["bi",AT$(AEi)],TL,0,C,[BW],0,3,0,0,["bi",AT$(APW)],Lp,0,C,[],4,3,0,0,0,ACJ,0,C,[],4,3,0,0,0,Z3,0,C,[],0,3,0,0,0,AEb,0,C,[],4,3,0,0,0,M_,0,C,[BW],0,3,0,0,["bi",AT$(AMm)]]);
$rt_metadata([AC6,0,C,[Bt],1,3,0,0,0,YP,0,C,[],0,3,0,0,0,JH,0,C,[Bt],3,3,0,0,0,AAg,0,C,[JH],1,3,0,0,["Gs",AT$(AQ$),"FN",AT9(AGl)],AAO,0,C,[Bt],1,3,0,0,0,FL,0,C,[],3,3,0,0,0,SR,0,C,[FL],0,3,0,0,0,Bw,0,Bp,[],0,3,0,0,0,ABM,0,C,[],4,3,0,0,0,GA,0,Bp,[],0,3,0,0,0,ID,0,Bp,[],0,3,0,0,0,C3,0,C,[CI],0,3,0,0,0,Mq,0,C,[Bt],3,3,0,0,0,Sw,0,C,[Mq],3,3,0,0,0,Eg,0,C,[Bt],3,3,0,0,0,ADe,0,C,[Sw,Eg],3,3,0,0,0,NH,0,C,[BW],0,3,0,0,["bi",AT$(ANq)],AAM,0,C,[],4,3,0,0,0,O9,0,C,[Eg],3,3,0,0,0,Q$,0,C,[Eg],3,3,0,0,0,QY,0,C,[Eg],3,3,0,
0,0,Ty,0,C,[Eg],3,3,0,0,0,W2,0,C,[Eg],3,3,0,0,0,UJ,0,C,[Eg,O9,Q$,QY,Ty,W2],3,3,0,0,0,Ou,0,C,[],3,3,0,0,0,YB,0,C,[Bt,UJ,Ou,JH],1,3,0,0,["Eq",AT_(AKU),"Gy",AT_(ALh),"yf",AT$(AFo),"CY",AUa(AMr),"A1",AT$(AQf),"A_",AT9(AGo),"zy",AUa(AEI)],BC,0,Bp,[],0,3,0,0,0,X1,0,Bp,[],0,3,0,0,0,G_,0,Bw,[],0,3,0,0,0,ZM,0,C,[],0,3,0,0,0,D4,0,C,[],4,3,0,Ks,["cu",AT$(AP3)],Ot,0,C,[],3,3,0,0,0,SF,0,C,[Ot],0,3,0,0,0,Ca,0,C,[],3,3,0,0,0,RJ,0,C,[Ca],0,3,0,0,0,Bi,0,C,[],3,3,0,0,0,AA8,0,C,[Bi],0,3,0,0,0,AAi,0,C,[Bt],1,3,0,0,0,AAI,0,C,[Bt],
1,3,0,0,0,Q2,0,C,[Bt],3,3,0,0,0,VB,0,C,[Q2],0,3,0,0,["C0",AT$(AJv)],Vu,0,C,[Bi],0,3,0,0,0,PX,0,C,[Bt],3,3,0,0,0,Vv,0,C,[PX],0,3,0,0,["ui",AT_(AHF)],ADl,0,C,[Bt],1,3,0,0,0,Cl,0,C,[Bt],3,3,0,0,0,Vs,0,C,[Cl],0,3,0,0,["b$",AT$(ANy)],K1,0,C,[],3,3,0,0,0,EA,0,C,[K1],1,3,0,0,0,Ej,0,C,[],3,3,0,0,0]);
$rt_metadata([Xo,0,C,[K1],3,3,0,0,0,M4,0,C,[Xo],3,3,0,0,0,OV,0,EA,[Ej,Dh,M4],0,3,0,0,0,Vt,0,C,[BW],0,3,0,0,["bi",AT$(AON)],ADH,0,C,[Bt],1,3,0,0,0,AD8,0,C,[Bt],1,3,0,0,0,JM,0,C,[Bt],3,3,0,0,0,WU,0,C,[JM],0,3,0,0,["ux",AT$(ANT)],AAA,0,C,[Bt],1,3,0,0,0,WV,0,C,[JM],0,3,0,0,["ux",AT$(ALA)],Pg,0,C,[],0,3,0,0,0,Lh,0,C,[],1,3,0,0,0,ACQ,0,Lh,[],0,3,0,0,0,CC,0,C,[Ds],1,3,0,0,["cI",AT$(AQR)],I0,0,C,[FL],0,3,0,0,["lN",AT_(Jm)],ZT,0,C,[],0,3,0,0,0,Wl,0,C,[Cl],0,3,0,0,["b$",AT$(AM0)],Wm,0,C,[Cl],0,3,0,0,["b$",AT$(ANd)],Wn,
0,C,[Cl],0,3,0,0,["b$",AT$(ALy)],Wo,0,C,[Cl],0,3,0,0,["b$",AT$(AKW)],Wp,0,C,[Cl],0,3,0,0,["b$",AT$(ALl)],Wq,0,C,[Cl],0,3,0,0,["b$",AT$(ANM)],Wr,0,C,[Cl],0,3,0,0,["b$",AT$(AI_)],Ws,0,C,[Cl],0,3,0,0,["b$",AT$(ARf)],Wt,0,C,[Cl],0,3,0,0,["b$",AT$(AIn)],Wu,0,C,[Cl],0,3,0,0,["b$",AT$(AOW)],XM,0,C,[Cl],0,3,0,0,["b$",AT$(AQS)],XN,0,C,[Cl],0,3,0,0,["b$",AT$(AK_)],XO,0,C,[Cl],0,3,0,0,["b$",AT$(ALC)],XP,0,C,[Cl],0,3,0,0,["b$",AT$(ANs)],T9,0,C,[],3,3,0,0,0,Uk,0,C,[T9],0,3,0,0,0,Ui,0,C,[Cl],0,3,0,0,["b$",AT$(AKb)],Mr,0,
C,[],0,3,0,0,0,ADy,0,C,[],0,3,0,0,0,IH,0,C,[],3,3,0,0,0,Cr,0,C,[IH],3,3,0,0,0,Cu,0,C,[],3,3,0,0,["bO",AT$(AKg),"b4",AT_(APX),"cJ",AT_(AE9),"cn",AUa(ANL)],DF,0,C,[],3,3,0,0,0,Ev,0,C,[IH],3,3,0,0,0,EG,0,C,[],3,3,0,0,0,EL,0,C,[],3,3,0,0,0,E8,0,C,[EL],3,3,0,0,0,P5,0,C,[Ds],0,3,0,0,0,Bm,0,C,[],0,3,0,0,["cq",AT9(X6)],Wx,0,C,[],0,3,0,0,0,ACP,0,C,[],0,3,0,0,0,Y4,0,C,[],3,3,0,0,0,PW,0,C,[],0,3,0,0,0,LD,0,C,[],0,3,0,0,0]);
$rt_metadata([D9,0,LD,[],0,3,0,0,0,V6,0,D9,[],0,3,0,0,0,Ez,0,D9,[],0,3,0,0,0,QD,0,D9,[],0,3,0,0,0,ACx,0,Ez,[],0,3,0,0,0,AB9,0,Ez,[],0,3,0,0,0,Zm,0,Ez,[],0,3,0,0,0,RS,0,C,[Bt],3,3,0,0,0,AD_,0,C,[RS],3,3,0,0,0,PT,0,C,[Ds],0,3,0,0,0,PV,0,C,[],0,3,0,0,0,Cj,0,C,[CI,Dh],1,3,0,0,0,GK,0,Cj,[],12,3,0,Y0,0,L_,0,C,[],3,3,0,0,0,Te,0,C,[L_],3,3,0,0,0,Uz,0,C,[],3,3,0,0,0,Gl,0,C,[Te,Uz],1,3,0,0,0,Jf,0,Gl,[],0,3,0,0,0,AAm,0,Jf,[],0,3,0,0,0,F$,0,Gl,[],1,3,0,0,0,Lo,0,F$,[],0,3,0,0,["jM",AUa(AJ5)],DW,0,Cj,[],12,3,0,AP$,0,I8,0,
C,[CI],1,3,0,0,0,Md,0,I8,[],0,3,0,AAa,0,Kj,0,C,[],32,0,0,YA,0,O0,0,C,[],0,3,0,0,0,GO,0,Cj,[],12,0,0,ABz,0,Ge,0,Cj,[],12,0,0,ABB,0,VC,0,D2,[],0,3,0,0,0,ACI,0,BC,[],0,3,0,0,0,Mc,0,C,[Bt],3,3,0,0,0,Xm,0,C,[Mc],0,3,0,0,["bi",AT$(AOp)],Xn,0,C,[Mc],0,3,0,0,["bi",AT$(AFW)],GZ,0,C,[],1,3,0,0,0,R_,0,C,[],3,3,0,0,0,K8,0,GZ,[CI,HT,IK,R_],1,3,0,0,0,JJ,0,GZ,[CI],1,3,0,0,0,HE,0,C,[],0,3,0,G8,0,M$,0,CC,[],0,3,0,0,["bI",AT9(AK6),"ci",AT_(AJy)],ADU,0,C,[],0,3,0,0,0,AA5,0,C,[Bt],1,3,0,0,0,JY,0,K8,[],1,0,0,0,0,AAN,0,JY,[],0,0,
0,0,0,KT,0,C,[],1,3,0,0,0,LK,0,C,[],0,3,0,0,0,YN,0,C,[],0,3,0,0,0,Ln,0,C,[Bt],3,3,0,0,0,Nh,0,C,[Ln],0,3,0,0,["bi",AT$(AH8)],Ng,0,C,[Ln],0,3,0,0,["bi",AT$(AMq)],Nf,0,C,[BW],0,3,0,0,["bi",AT$(AM$)]]);
$rt_metadata([Ne,0,C,[BW],0,3,0,0,["bi",AT$(AGx)],S7,0,C,[Ca],0,3,0,0,["b9",AT$(AMI)],S6,0,C,[Ca],0,3,0,0,["b9",AT$(AFz)],S5,0,C,[Ca],0,3,0,0,["b9",AT$(AJe)],S4,0,C,[Ca],0,3,0,0,["b9",AT$(AJb)],S3,0,C,[Ca],0,3,0,0,["b9",AT$(AJQ)],S2,0,C,[Ca],0,3,0,0,["b9",AT$(AFG)],S1,0,C,[Ca],0,3,0,0,["b9",AT$(AHh)],S0,0,C,[Ca],0,3,0,0,["b9",AT$(AMZ)],SZ,0,C,[Ca],0,3,0,0,["b9",AT$(AQA)],SY,0,C,[Ca],0,3,0,0,["b9",AT$(ARr)],QB,0,C,[Ca],0,3,0,0,["b9",AT$(AKJ)],Qz,0,C,[Ca],0,3,0,0,["b9",AT$(AEv)],QA,0,C,[Ca],0,3,0,0,["b9",AT$(AH4)],Qx,
0,C,[Ca],0,3,0,0,["b9",AT$(AK1)],Qy,0,C,[Ca],0,3,0,0,["b9",AT$(AOJ)],Qv,0,C,[Ca],0,3,0,0,["b9",AT$(AEk)],G7,0,C,[],0,3,0,0,0,OO,0,G7,[],0,3,0,0,0,ACY,0,C,[],0,3,0,0,0,Mn,0,G7,[],0,3,0,0,0,T_,0,C,[Bt],3,3,0,0,0,NA,0,C,[T_],0,3,0,0,["ux",AT$(AKA)],UT,0,C,[Bc],0,3,0,0,["n",AT$(V8)],WP,0,JJ,[],0,0,0,0,0,ABV,0,C,[Bt],1,3,0,0,0,Kh,0,C,[],4,3,0,AJO,0,VZ,0,C,[],3,3,0,0,0,SN,0,C,[VZ],0,3,0,0,["cq",AT9(AG3)],Us,0,C,[],3,3,0,0,0,K6,"JsFileHandle",5,C,[Us],0,3,0,0,["cq",AT9(AJ_)],KP,0,KT,[],1,3,0,0,0,Pd,0,KP,[],0,3,0,0,
0,Ik,0,D2,[],0,3,0,0,0,CP,0,CC,[],1,3,0,0,["ci",AT_(GT)],Kb,0,C,[],3,3,0,0,0,Lc,0,C,[],3,3,0,0,0,Xv,0,CP,[Cu,Kb,Lc,DF,EG,E8],0,3,0,0,["gb",AT_(AJj),"cI",AT$(AHZ),"bI",AT9(AP2),"ub",AT9(AIZ),"uD",AT9(AOa),"sq",AT$(AOU),"ci",AT_(ANN),"s6",AT9(AOI),"on",AT9(AAc),"pS",AT9(APf),"bO",AT$(ALc),"cn",AUa(AK$),"b4",AT_(AFs),"cJ",AT_(AIo),"cU",AUa(ANa),"dh",AT9(AKQ)],Ku,0,CP,[Kb],0,3,0,0,["cI",AT$(AGG),"bI",AT9(AJu),"kb",AT9(ANm),"ci",AT_(ALX),"qG",AT_(ZZ),"s6",AT9(ALV),"on",AT9(AB6),"pS",AT9(AKV)],YE,0,CC,[],0,3,0,0,
["cI",AT$(AET),"bI",AT9(AHU),"ci",AT_(AOo)],Em,0,C,[],3,3,0,0,0,V2,0,CP,[Cu,Em],0,3,0,0,["gc",AT_(APR),"ci",AT_(AHn),"bI",AT9(AH9),"bO",AT$(ANI),"b4",AT_(AIf),"cJ",AT_(AF1),"cn",AUa(AM2)],Xf,0,CP,[Em],0,3,0,0,["gc",AT_(AIi),"bI",AT9(ANj),"ci",AT_(AGB),"cI",AT$(AOu)],X0,0,CP,[Cu],0,3,0,0,["bO",AT$(AKg),"b4",AT_(APX),"cJ",AT_(AE9),"cn",AUa(ANL),"bI",AT9(ANS),"cI",AT$(AG1)],O5,0,CC,[],0,3,0,0,["bI",AT9(AFa),"ci",AT_(APA)],C$,0,CC,[],0,3,0,0,["bI",AT9(R$),"ci",AT_(SG)],QP,"SelectFileTest",6,C$,[],0,3,0,0,0,ADN,
"WorkerTest",7,C$,[],0,3,0,0,0,WJ,"RenderTexture",6,C$,[],0,3,0,0,["cI",AT$(AKr),"bI",AT9(AEN),"ci",AT_(ANh)],Sb,"ScissorDemo",6,C$,[],0,3,0,0,["bI",AT9(AQ5),"ci",AT_(AGs)]]);
$rt_metadata([OH,0,CC,[],0,3,0,0,["bI",AT9(AQ8),"ci",AT_(AIE),"cI",AT$(AG7)],Io,"ClipboardTest",6,C$,[Cu],0,3,0,0,["bO",AT$(AKg),"b4",AT_(APX),"cJ",AT_(AE9),"cn",AUa(AOi)],P2,0,CC,[],0,3,0,0,["bI",AT9(AQZ),"ci",AT_(ALs)],Wi,0,CP,[Em],0,3,0,0,["gc",AT_(AJC),"bI",AT9(ARm),"ci",AT_(ANA),"cI",AT$(AKn)],Rb,0,Ku,[],0,3,0,0,["kb",AT9(AJH),"qG",AT_(ALw)],Hg,0,C,[],3,3,0,0,0,Mh,0,C,[Hg,Dh],0,3,0,0,0,Ji,0,Mh,[],0,0,0,0,0,ADv,0,C,[],0,3,0,0,0,ACm,0,C,[Cu,DF],0,0,0,0,["bO",AT$(ANV),"cn",AUa(ARx),"b4",AT_(AFX),"cJ",AT_(AMo),
"cU",AUa(AKS)],HN,0,C,[],3,3,0,0,["uO",AT9(AGW),"sf",AT9(ARE)],AAs,0,C,[HN,Cu,Lc],0,3,0,0,["sf",AT9(AHN),"uO",AT9(AGt),"ub",AT9(XW),"uD",AT9(WA),"sq",AT$(XX),"cJ",AT_(UO),"b4",AT_(UW),"cn",AUa(QC),"bO",AT$(Pj),"hV",AT$(AMD)],HL,0,C,[],3,3,0,0,0,QN,0,C,[HL],0,3,0,0,["hI",AT$(AJt)],QL,0,C,[HL],0,3,0,0,["hI",AT$(ALz)],QM,0,C,[Cr],0,3,0,0,["bz",AT$(AEF)],HG,0,C,[Cr],0,3,0,0,["bz",AT$(AOw)],QJ,0,C,[Bc],0,3,0,0,["n",AT$(AEZ)],QK,0,C,[Ev],0,3,0,0,["bz",AT$(ALd)],RY,0,C,[Cr],0,3,0,0,["bz",AT$(ALH)],R2,0,C,[Bc],0,3,
0,0,["n",AT$(AQE)],R1,0,C,[EG],0,3,0,0,["gb",AT_(ALI)],R0,0,C,[E8],0,3,0,0,["dh",AT9(AQm)],RZ,0,C,[DF],0,3,0,0,["cU",AUa(APL)],R3,0,C,[Ev],0,3,0,0,["bz",AT$(AIQ)],HQ,0,C,[],0,3,0,0,0,IN,0,C,[],0,3,0,0,0,B2,0,C,[],0,3,0,0,["cu",AT$(ARa)],It,0,C,[],0,3,0,0,0,ACZ,0,It,[],0,3,0,0,0,AAP,0,C,[],0,3,0,0,0,TJ,0,C,[Cu],0,0,0,0,["bO",AT$(ANt),"cn",AUa(AO1),"b4",AT_(AHR),"cJ",AT_(AHs)],RC,0,C,[Cr],0,3,0,0,["bz",AT$(ANn)],RB,0,C,[Cr],0,3,0,0,["bz",AT$(APZ)],RE,0,C,[EG],0,3,0,0,["gb",AT_(AQu)],RD,0,C,[Bi],0,3,0,0,["o",AT9(AQs)],RA,
0,C,[Ev],0,3,0,0,["bz",AT$(ALN)],Rz,0,C,[DF],0,3,0,0,["cU",AUa(AJq)],G$,0,B2,[],0,3,0,0,0,US,0,C,[],0,3,0,0,0,Zv,0,C,[],0,3,0,0,0,Yy,0,C,[Em,HN],0,3,0,0,["uO",AT9(AGW),"sf",AT9(ARE),"gc",AT_(AGr),"hV",AT$(AE0)],XT,0,C,[],0,3,0,0,0,S9,0,C,[Cr],0,3,0,0,["bz",AT$(ANR)],Ta,0,C,[Ev],0,3,0,0,["bz",AT$(AEA)],ADL,0,C,[],0,3,0,0,["cu",AT$(ARw)],HY,0,C,[],0,3,0,0,0,S_,0,C,[Bi],0,3,0,0,["o",AT9(AI$)],S8,0,C,[Bi],0,3,0,0,["o",AT9(APc)],C6,0,C,[],0,3,0,0,0]);
$rt_metadata([AA4,0,C,[Cu,Em],0,3,0,0,["bO",AT$(Y$),"cn",AUa(AA3),"b4",AT_(X8),"cJ",AT_(ADW),"gc",AT_(AQn)],Ox,0,C,[Cr],0,3,0,0,["bz",AT$(AGq)],Oy,0,C,[Ev],0,3,0,0,["bz",AT$(APw)],ABX,0,C,[],0,3,0,0,0,Oz,0,C,[DF],0,3,0,0,["cU",AUa(AMA)],V4,0,C,[],3,3,0,0,0,Hq,0,C,[V4],3,3,0,0,0,EM,0,C,[Hq],1,3,0,0,0,I4,0,C,[Hq],3,3,0,0,0,F4,0,EM,[I4],1,3,0,0,["cu",AT$(ALQ)],Ig,0,C,[],3,3,0,0,0,NP,0,F4,[Ej,Dh,Ig],0,3,0,0,["ri",AT$(Bs),"na",AT9(AMK),"t6",AT$(Ek)],ADx,0,C,[],0,3,0,0,0,TX,0,C,[Em],0,3,0,0,["gc",AT_(AMe)],TY,0,C,
[Cr],0,3,0,0,["bz",AT$(AEG)],Nk,0,C,[],3,3,0,0,0,ACW,0,C,[Nk],0,3,0,0,0,ABe,0,C,[Ds],0,3,0,0,0,YZ,0,C,[],3,3,0,0,0,Y_,0,C,[],0,3,0,0,0,Wh,0,C,[Cu],0,0,0,0,["cn",AUa(ANL),"b4",AT_(AGk),"cJ",AT_(AND),"bO",AT$(AHL)],SL,0,C,[DF],0,3,0,0,["cU",AUa(AG6)],Uq,0,C,[],3,3,0,0,0,ABd,0,C,[],0,3,0,0,0,PZ,0,C,[Cr],0,3,0,0,["bz",AT$(AOl)],Rf,0,C,[Bc],0,3,0,0,["n",AT$(AE7)],Re,0,C,[Bc],0,3,0,0,["n",AT$(ARb)],Rd,0,C,[Bc],0,3,0,0,["n",AT$(AHp)],Rc,0,C,[Bc],0,3,0,0,["n",AT$(AMu)],Ra,0,C,[Bc],0,3,0,0,["n",AT$(ALB)],Q_,0,C,[Bc],
0,3,0,0,["n",AT$(ANB)],TI,0,C,[Cu],0,0,0,0,["cJ",AT_(AE9),"cn",AUa(ANL),"bO",AT$(APy),"b4",AT_(ALG)],De,0,C,[],3,3,0,G9,0,T7,0,C,[Cu],0,0,0,0,["cn",AUa(ANL),"b4",AT_(AMJ),"cJ",AT_(AGm),"bO",AT$(AFh)],NS,0,C,[DF],0,3,0,0,["cU",AUa(AE_)],So,0,C,[Cr],0,3,0,0,["bz",AT$(APC)],Sn,0,C,[EG],0,3,0,0,["gb",AT_(AHM)],Sl,0,C,[EG],0,3,0,0,["gb",AT_(AO2)],Sk,0,C,[E8],0,3,0,0,["dh",AT9(AM1)],Sm,0,C,[E8],0,3,0,0,["dh",AT9(AGc)],RT,0,C,[Cr],0,3,0,0,["bz",AT$(AHT)],K7,0,C,[],0,3,0,0,0,Qj,0,C,[Cr],0,3,0,0,["bz",AT$(AIq)],Qk,0,
C,[Ev],0,3,0,0,["bz",AT$(AEH)],Ql,0,C,[DF],0,3,0,0,["cU",AUa(AN0)],Iq,0,C,[],0,3,0,0,0,AAR,0,C,[],0,3,0,0,["cu",AT$(AQa)],OF,0,C,[Bt],3,3,0,0,0,OY,0,C,[OF],0,3,0,0,["ui",AT_(AIw)],OG,0,C,[Bt],3,3,0,0,0]);
$rt_metadata([OW,0,C,[OG],0,3,0,0,["ui",AT_(AJG)],Zo,0,C,[],0,3,0,0,0,Yt,0,C,[Bt],3,3,0,0,0,Se,0,C,[Cr],0,3,0,0,["bz",AT$(ARA)],Sf,0,C,[Cr],0,3,0,0,["bz",AT$(AEL)],VO,0,C,[],0,3,0,0,0,Ya,0,C,[],0,3,0,0,0,Nl,0,C,[],0,3,0,0,0,ET,0,C,[Ds],0,0,0,0,0,UH,0,C,[Bc],0,3,0,0,0,UG,0,C,[Bc],0,3,0,0,["n",AT$(AOv)],UC,0,C,[Bc],0,3,0,0,["n",AT$(AMs)],UB,0,C,[Bi],0,3,0,0,["o",AT9(AOs)],UE,0,C,[Bi],0,3,0,0,["o",AT9(AJr)],UD,0,C,[Bi],0,3,0,0,["o",AT9(ALL)],U4,0,C,[Bi],0,3,0,0,["o",AT9(ANU)],U3,0,C,[Bi],0,3,0,0,["o",AT9(AI6)],Fr,
0,Cj,[],12,3,0,AEQ,0,AB3,0,C,[],3,3,0,0,0,Jh,0,C,[Ds],0,3,0,0,["dR",AT9(ACc)],TD,0,C,[],0,3,0,0,0,XL,0,C,[],3,3,0,0,0,HA,0,C,[],0,3,0,0,0,ACB,0,C,[],0,3,0,0,0,Gv,0,C,[],4,3,0,0,0,AEd,0,C,[],0,3,0,0,0,DR,0,C,[],3,3,0,XG,0,Gm,0,C,[],3,3,0,0,0,WZ,0,C,[Gm],0,3,0,0,["nn",AUa(AOd)],W0,0,C,[Gm],0,3,0,0,0,VQ,0,C,[Cu],0,0,0,0,["bO",AT$(AEK),"cn",AUa(AOf),"b4",AT_(AMi),"cJ",AT_(AJP)],XZ,0,C,[Bc],0,3,0,0,["n",AT$(ANE)],NM,0,C,[Uq],0,3,0,0,0,ABn,0,C,[],0,3,0,0,0,Pu,0,C,[Bc],0,3,0,0,["n",AT$(AJX)],Ro,0,C,[Cu],0,0,0,0,["b4",
AT_(APX),"cJ",AT_(AE9),"cn",AUa(ANL),"bO",AT$(AEO)],ZC,0,C,[],0,3,0,0,0,Mx,0,C,[Bi],0,3,0,0,["o",AT9(AKT)],My,0,C,[Bi],0,3,0,0,["o",AT9(AJl)],HM,0,C,[],0,3,0,0,0,EV,0,C,[],0,3,0,0,0,Me,0,EV,[],0,3,0,0,0,MA,0,EV,[],0,3,0,0,0,P3,0,EV,[],0,3,0,0,0,GU,0,C,[],3,3,0,0,0,Rj,0,C,[],3,3,0,0,0,Gi,0,C,[CI],0,3,0,0,0,Jb,0,C,[],0,3,0,0,0,KJ,0,F$,[],0,3,0,0,["jM",AUa(AH3)],Ci,0,Cj,[],12,3,0,ABC,0]);
$rt_metadata([Iy,0,C,[],0,3,0,0,0,ADC,0,C,[],0,3,0,0,0,AAo,0,C,[Bt],4,3,0,0,0,AD1,0,C,[],0,3,0,0,0,ADo,0,C,[],3,3,0,0,0,CQ,0,C,[Bt],1,3,0,0,0,ABP,0,CQ,[],1,3,0,0,0,ACu,0,CQ,[],1,3,0,0,0,Zr,0,CQ,[],1,3,0,0,0,ZO,0,CQ,[],1,3,0,0,0,ACX,0,CQ,[],1,3,0,0,0,AA1,0,EA,[Ej,Dh],0,3,0,0,0,Cx,0,C,[],0,3,0,0,0,NB,0,C,[Bi],0,3,0,0,["o",AT9(AQY)],Ua,0,C,[Bi],0,3,0,0,["o",AT9(ALg)],B6,0,C,[],0,3,0,0,0,IJ,0,C,[],0,3,0,0,0,ADG,0,C,[CI],0,3,0,0,["cu",AT$(AO3),"jj",AT$(AGa)],Xg,0,C,[FL],0,3,0,0,["lN",AT_(AIU)],Xi,0,C,[FL],0,3,0,
0,["lN",AT_(AKx)],EW,0,C,[],0,3,0,0,0,G4,0,F4,[Ig],1,0,0,0,["t6",AT$(ALt)],Xt,0,G4,[Ig],0,0,0,0,["na",AT9(AH1),"ri",AT$(AQL)],Ym,0,C,[],0,3,0,0,["cq",AT9(AI1)],ON,0,C,[Hq],3,3,0,0,0,Gb,0,EM,[ON],1,3,0,0,0,J$,0,Gb,[],1,0,0,0,0,Vr,0,J$,[],0,0,0,0,0,Lt,0,EA,[],1,0,0,0,0,Vp,0,Lt,[],0,0,0,0,0,Vq,0,G4,[],0,0,0,0,0,FB,0,C,[],3,3,0,0,0,Vn,0,C,[FB],0,0,0,0,0,Pb,0,C,[FB],3,3,0,0,0,Vo,0,C,[Pb],0,0,0,0,0,XY,0,C,[FL],0,3,0,0,0,Nt,0,C,[FB],0,0,0,0,0,Z$,0,C,[],4,3,0,0,0,VN,0,C,[Cu],0,0,0,0,["b4",AT_(APX),"cJ",AT_(AE9),"cn",
AUa(ANL),"bO",AT$(AOE)],AAk,0,C,[Bt],1,3,0,0,0,KA,0,C,[Hg,Ej],0,0,0,0,["cu",AT$(AG8)],H7,0,KA,[],0,0,0,0,0,ML,0,C,[Bc],0,3,0,0,["n",AT$(AOR)],VU,0,C,[EL],0,3,0,0,["dh",AT9(AQ2)],C_,0,C,[],3,3,0,AMk,0,B_,0,Cj,[],12,3,0,ABa,0,DS,0,C,[],3,3,0,AJf,0,AD7,0,C,[],0,3,0,0,0,LA,0,C,[],3,3,0,0,0,Rg,0,C,[LA],0,3,0,0,["qz",AT$(ALY)]]);
$rt_metadata([Si,0,C,[],3,3,0,0,0,AC_,0,C,[CI],0,3,0,0,["cu",AT$(AEV),"i4",AT9(ANZ),"jj",AT$(ANw)],Td,0,C,[Bc],0,3,0,0,["n",AT$(AGY)],YY,0,C,[],0,3,0,0,0,X_,0,C,[],0,3,0,0,0,Nd,0,C,[Ds],0,3,0,0,0,FK,0,Ik,[],0,3,0,0,0,WY,0,EE,[],0,3,0,0,0,P9,0,C,[Bc],0,3,0,0,["n",AT$(AMX)],T5,0,C,[Bi],0,3,0,0,["o",AT9(APt)],Yq,0,C,[],0,3,0,0,0,IA,0,Bp,[],0,3,0,0,0,L6,0,DV,[CI],0,3,0,0,0,Fy,0,C,[],0,0,0,0,0,J1,0,C,[],4,3,0,0,0,Vk,0,C,[],0,3,0,0,0,LZ,0,C,[],1,3,0,0,0,XH,0,C,[Bc],0,3,0,0,["n",AT$(AFm)],VD,0,C,[Bc],0,3,0,0,["n",
AT$(ARd)],Qa,0,C,[Bc],0,3,0,0,["n",AT$(AL6)],AAE,0,CQ,[],1,3,0,0,0,Rm,0,C,[Bi],0,3,0,0,["o",AT9(AJk)],Vd,0,C,[Bi],0,3,0,0,["o",AT9(ANg)],T3,0,C,[],0,3,0,0,0,DZ,0,Bp,[],0,3,0,0,0,AB8,0,EE,[],0,3,0,0,0,Qi,0,C,[Bc],0,3,0,0,["n",AT$(AQd)],Q5,0,C,[Bc],0,3,0,0,["n",AT$(AIx)],Q4,0,C,[Bc],0,3,0,0,["n",AT$(AL0)],Sa,0,C,[Bc],0,3,0,0,0,NK,0,C,[Bc],0,3,0,0,["n",AT$(AE$)],NI,0,C,[Bc],0,3,0,0,["n",AT$(AG$)],SM,0,C,[Bc],0,3,0,0,["n",AT$(AGT)],Km,0,LZ,[],1,3,0,0,0,Tu,0,Km,[],0,3,0,0,0,PO,0,C,[Bc],0,3,0,0,["n",AT$(AGd)],Vc,
0,C,[Bi],0,3,0,0,["o",AT9(AMg)],NL,0,C,[EL],0,3,0,0,["dh",AT9(AEr)],Xz,0,C,[EL],0,3,0,0,["dh",AT9(APV)],XA,0,C,[EL],0,3,0,0,["dh",AT9(AFA)],Qu,0,C,[BW],0,3,0,0,["bi",AT$(AEt)],Uy,0,C,[BW],0,3,0,0,["bi",AT$(AQO)],MJ,0,C,[Bc],0,3,0,0,0,Zs,0,C,[Ca],0,3,0,0,0,ABJ,0,C,[Ca],0,3,0,0,0,Sd,0,C,[Bc],0,3,0,0,["n",AT$(AFp)],Sc,0,C,[Bc],0,3,0,0,["n",AT$(AF6)],SW,0,C,[Bi],0,3,0,0,["o",AT9(AJm)],JV,0,DV,[CI],0,3,0,0,0,Lw,0,C,[],4,3,0,0,0]);
$rt_metadata([MK,0,C,[BW],0,3,0,0,["bi",AT$(ARD)],TQ,0,C,[],0,3,0,0,0,EH,0,C,[Ds],0,3,0,0,["dR",AT9(AMy),"iI",AT9(AQg),"iK",AUa(PM),"eQ",AT$(Zc),"jU",AT$(AHQ),"jK",AT$(AO7),"pi",AT_(ARj),"cn",AUa(APF),"b4",AT_(AOX),"cJ",AT_(AP5),"bO",AT$(ALS),"cU",AUa(AHI)],GB,0,EH,[],0,3,0,0,0,QO,0,GB,[HN],0,3,0,0,["uO",AT9(AGW),"sf",AT9(ARE),"dR",AT9(ARy),"pi",AT_(AGS),"eQ",AT$(AJz),"jK",AT$(AKL),"jU",AT$(AHq),"ul",AT9(Zu),"bO",AT$(AQq),"b4",AT_(AE1),"cn",AUa(AFe),"hV",AT$(AKf)],VM,0,C,[Bi],0,3,0,0,["o",AT9(ARk)],AAh,0,EH,
[],0,3,0,0,["dR",AT9(AFi),"iK",AUa(AGZ),"eQ",AT$(AOB),"cn",AUa(AI7),"b4",AT_(API),"cJ",AT_(AII),"bO",AT$(AJZ),"cU",AUa(AOP),"iI",AT9(AMd)],VS,0,GB,[],0,3,0,0,["ul",AT9(AMY),"iI",AT9(AKO),"jK",AT$(AJB),"eQ",AT$(AHj),"jU",AT$(AKd)],Pm,0,C,[Bc],0,3,0,0,0,No,0,C,[Gm],0,3,0,0,["nn",AUa(AQt)],Xq,0,C,[],0,3,0,0,0,HW,0,C,[],0,3,0,0,0,Tq,0,EH,[],0,3,0,0,0,RX,0,DV,[CI],0,3,0,0,0,X4,0,C,[Bi],0,3,0,0,["o",AT9(AHw)],Vl,0,C,[Bc],0,3,0,0,["n",AT$(AQe)],Vm,0,C,[Bc],0,3,0,0,["n",AT$(AFq)],Jk,0,C,[],0,3,0,0,0,Fh,0,Bp,[],0,3,
0,0,0,Nz,0,C,[],0,3,0,0,0,ADc,0,C,[],0,3,0,0,0,SP,0,C,[],0,0,0,0,0,Y2,0,C,[],3,3,0,0,0,Ry,0,C,[Bc],0,3,0,0,["n",AT$(AIF)],Xc,0,C,[BW],0,3,0,0,["bi",AT$(AOH)],Xb,0,C,[BW],0,3,0,0,["bi",AT$(AHe)],WF,0,C,[BW],0,3,0,0,["bi",AT$(AIM)],WE,0,C,[BW],0,3,0,0,["bi",AT$(AJF)],Ys,0,C,[],1,3,0,0,0,WM,0,C,[],3,3,0,0,0,W8,0,C,[Cl],0,3,0,0,["b$",AT$(AIC)],Z4,0,C,[],0,3,0,0,0,ADw,0,C,[],0,3,0,0,0,Uj,0,C,[Bi],0,3,0,0,["o",AT9(AJg)],Ul,0,C,[Bi],0,3,0,0,["o",AT9(AN_)],ACf,0,C,[],0,3,0,0,0,IT,0,Fh,[],0,3,0,0,0,HS,0,Bp,[],0,3,0,
0,0,LQ,0,Bp,[],0,3,0,0,0,ZG,0,C,[Bc],0,3,0,0,0,Sg,0,C,[Bi],0,3,0,0,["o",AT9(AQT)],QX,0,C,[Bc],0,3,0,0,["n",AT$(AJ2)],Sq,0,C,[Bi],0,3,0,0,["o",AT9(AFx)],Yb,0,C,[],0,3,0,0,0,G0,0,C,[],0,3,0,0,0,ACn,0,Gb,[],0,0,0,0,0,O2,0,EM,[],0,0,0,0,0,Wv,0,Bw,[],0,3,0,0,0,Qg,0,C,[L_],3,3,0,0,0,Nu,0,C,[Qg],3,3,0,0,0]);
$rt_metadata([LT,0,C,[Nu],1,3,0,0,0,Z9,0,LT,[],0,3,0,0,0,Rs,0,C,[Bi],0,3,0,0,["o",AT9(AF8)],Rr,0,C,[Bi],0,3,0,0,["o",AT9(AEB)],Rq,0,C,[Bi],0,3,0,0,["o",AT9(AKG)],Rp,0,C,[Bi],0,3,0,0,["o",AT9(APr)],Po,0,C,[Bi],0,3,0,0,["o",AT9(AOL)],Pq,0,C,[Bi],0,3,0,0,["o",AT9(AJK)],Pr,0,C,[Bi],0,3,0,0,["o",AT9(AGA)],Xd,0,C,[],3,3,0,0,0,V0,0,C,[Bi],0,3,0,0,["o",AT9(AFu)],PQ,0,C,[GU],0,3,0,0,["lR",AT_(AOM)],SJ,0,C,[Bi],0,3,0,0,["o",AT9(AKe)],SK,0,C,[Bi],0,3,0,0,["o",AT9(ALx)],SI,0,C,[Bi],0,3,0,0,["o",AT9(AMU)],N_,0,C,[Bi],0,
3,0,0,["o",AT9(AJa)],N$,0,C,[Bi],0,3,0,0,["o",AT9(APB)],U6,0,C,[EL],0,3,0,0,["dh",AT9(AG5)],VF,0,C,[Bi],0,3,0,0,["o",AT9(ANr)],VK,0,C,[Bi],0,3,0,0,["o",AT9(AKm)],VJ,0,C,[Bi],0,3,0,0,["o",AT9(AFn)],VH,0,C,[Bi],0,3,0,0,["o",AT9(AHb)],MV,0,C,[GU],0,3,0,0,["lR",AT_(AKv)],PN,0,C,[BW],0,3,0,0,["bi",AT$(AHr)],IL,0,C,[Bt],3,3,0,0,0,MF,0,C,[IL],0,3,0,0,["qy",AT9(AJL)],Mp,0,C,[IL],0,3,0,0,["qy",AT9(AEl)],Pk,0,C,[Gm],0,3,0,0,0,Xa,0,C,[BW],0,3,0,0,["bi",AT$(AI3)],GS,0,C,[],0,0,0,0,0,Uu,0,GS,[FB],0,0,0,0,0,QU,0,GS,[FB],
0,0,0,0,0,QS,0,C,[Dh],4,3,0,0,0,NY,0,C,[Bc],0,3,0,0,["n",AT$(ARv)],Gp,0,Cj,[],12,0,0,UM,0,SS,0,C,[Bc],0,3,0,0,["n",AT$(AKp)],Qn,0,C,[Bc],0,3,0,0,["n",AT$(AJc)],Xl,0,C,[Bc],0,3,0,0,["n",AT$(AKF)],Va,0,C,[LA],0,3,0,0,["qz",AT$(JK)],BA,0,C,[],1,0,0,0,["cf",AUa(HC),"ck",AUb(HO),"hg",AT9(AFY),"K",AT$(APN),"bN",AT$(APK),"e6",AT9(AQH),"d6",AT9(IY)],Un,0,C,[],32,0,0,AR9,0,O3,0,C,[Bc],0,3,0,0,["n",AT$(AGV)],VR,0,C,[Bc],0,3,0,0,["n",AT$(AIz)],X5,0,C,[Bi],0,3,0,0,["o",AT9(AGH)],CN,0,BA,[],0,0,0,Mb,["c",AUa(AFt),"F",AT$(AFN)],GG,
0,C,[],0,0,0,0,0,IF,0,BC,[],0,3,0,0,0,WX,0,C,[BW],0,3,0,0,["bi",AT$(AM9)],ABD,0,C,[Bt],3,3,0,0,0,T$,0,C,[BW],0,3,0,0,["bi",AT$(AMM)]]);
$rt_metadata([RG,0,CN,[],0,0,0,0,["c",AUa(AE3),"F",AT$(AOk)],Xu,0,CN,[],0,0,0,0,["c",AUa(AGK)],Pv,0,CN,[],0,0,0,0,["c",AUa(AFV)],SO,0,CN,[],0,0,0,0,["c",AUa(AE8),"F",AT$(AMW)],Fv,0,CN,[],0,0,0,0,["c",AUa(AP6)],BT,0,BA,[],1,0,0,0,["c",AUa(AQ9),"bU",AT9(APe),"F",AT$(AJT)],AC8,0,BT,[],0,0,0,0,["bq",AT_(AOK),"cf",AUa(AH5),"ck",AUb(AGz),"F",AT$(AE6)],BO,0,BA,[],0,0,0,0,["c",AUa(AIJ),"K",AT$(AMO),"bN",AT$(AKH),"F",AT$(ANv),"d6",AT9(AGv)],IR,0,BO,[],0,0,0,0,["c",AUa(AMx),"F",AT$(ANW)],DQ,0,IR,[],0,0,0,0,["c",AUa(AHc),
"K",AT$(ANC)],MD,0,DQ,[],0,0,0,0,["c",AUa(AMH),"F",AT$(APS)],V1,0,DQ,[],0,0,0,0,["c",AUa(AFI),"F",AT$(APk)],QV,0,DQ,[],0,0,0,0,["c",AUa(AGp),"F",AT$(ARz)],Tx,0,DQ,[],0,0,0,0,["c",AUa(AEC),"F",AT$(AN$)],Gs,0,BO,[],0,0,0,0,["c",AUa(AEX),"cf",AUa(AK3),"ck",AUb(AOq),"bN",AT$(AKB),"e6",AT9(AMS),"d6",AT9(AQK)],GI,0,C,[],1,0,0,0,0,U,0,GI,[],1,0,0,Ow,["c_",AT9(AFK),"eA",AT9(AFg),"iF",AT9(AO$),"gy",AT9(AQG)],Zg,0,U,[],0,0,0,0,["k",AT$(CW),"c_",AT9(CS),"eA",AT9(AHX),"iF",AT9(APz),"cq",AT9(ALU),"gy",AT9(AH$)],I6,0,Bp,
[],0,3,0,0,0,D1,0,BA,[],1,0,0,0,["bN",AT$(AOt),"F",AT$(AP0),"d6",AT9(ALp)],CX,0,D1,[],0,0,0,0,["c",AUa(AEE)],E2,0,CX,[],0,0,0,0,["c",AUa(AFw)],CO,0,D1,[],0,0,0,0,["c",AUa(AEW)],Ex,0,CX,[],0,0,0,0,["c",AUa(AK9),"K",AT$(ARC)],Wf,0,CX,[],0,0,0,0,["c",AUa(AQ1),"cf",AUa(ALR)],X,0,C,[],1,0,0,0,0,Db,0,BC,[],0,3,0,0,0,MY,0,GI,[Ej],0,0,0,0,["cq",AT9(AL3)],N3,0,BA,[],0,0,0,0,["c",AUa(AKi),"F",AT$(AMN)],WR,0,C,[Ej,Dh],0,3,0,0,0,MM,0,BO,[],0,0,0,0,0,P4,0,BO,[],0,0,0,0,["c",AUa(AFr),"K",AT$(AMt),"F",AT$(AF0),"bN",AT$(AFJ)],DA,
0,BO,[],0,0,0,0,["c",AUa(AHO),"k",AT$(AIm),"bN",AT$(AFl),"K",AT$(AO4),"F",AT$(AH2)],I3,0,DA,[],0,0,0,0,["k",AT$(AJU)],Y8,0,BT,[],0,0,0,0,["bq",AT_(AKj)],Ed,0,BT,[],0,0,0,0,["bq",AT_(Mm),"bN",AT$(AMQ)],OA,0,BO,[],0,0,0,0,["K",AT$(AK8),"c",AUa(AEs),"bN",AT$(AFS),"F",AT$(APD)],Ei,0,BT,[],0,0,0,0,["bU",AT9(AJ4),"bq",AT_(AIT),"cf",AUa(AHJ),"ck",AUb(AJ$),"bN",AT$(APv)],ADB,0,BT,[],0,0,0,0,["bq",AT_(AEm)],Yg,0,BT,[],0,0,0,0,["bq",AT_(AEP)],Fc,0,BO,[],0,0,0,0,["K",AT$(AQJ),"c",AUa(AMw),"bN",AT$(AKk),"F",AT$(ANF)],W_,
0,Fc,[],0,0,0,0,0,TK,0,Fc,[],0,0,0,0,0,X2,0,CO,[],0,0,0,0,["c",AUa(AGP)],Pn,0,CO,[],0,0,0,0,["c",AUa(ALF)],FN,0,CO,[],0,0,0,0,["c",AUa(AO0),"K",AT$(AP_)],O4,0,FN,[],0,0,0,0,["c",AUa(AJ7),"K",AT$(AL4)],E_,0,CO,[],0,0,0,0,["c",AUa(ARs)],M8,0,E_,[],0,0,0,0,["c",AUa(AJo)],Rl,0,CO,[],0,0,0,0,["c",AUa(AQQ)]]);
$rt_metadata([Qc,0,FN,[],0,0,0,0,["c",AUa(AF2)],UP,0,E_,[],0,0,0,0,["c",AUa(AFb)],Rn,0,D1,[],0,0,0,0,["c",AUa(ARe),"cf",AUa(APa)],Oa,0,D1,[],0,0,0,0,["c",AUa(AMT),"cf",AUa(AEw)],EJ,0,C,[],1,0,0,0,0,X3,0,CX,[],0,0,0,0,["c",AUa(AFd)],Wa,0,Ex,[],0,0,0,0,["c",AUa(ALD)],OS,0,E2,[],0,0,0,0,["c",AUa(AOx)],P8,0,CX,[],0,0,0,0,["c",AUa(AML)],TZ,0,Ex,[],0,0,0,0,["c",AUa(AFk)],QW,0,E2,[],0,0,0,0,["c",AUa(AOO)],Kl,0,BA,[],4,0,0,0,["c",AUa(AKE),"F",AT$(AJE)],ZQ,0,BA,[],0,0,0,0,["c",AUa(AFH),"F",AT$(AFQ)],N8,0,BA,[],0,0,0,
0,["c",AUa(AJY),"F",AT$(ARn)],WT,0,BA,[],4,0,0,0,["c",AUa(ANp),"F",AT$(AGE)],WC,0,BA,[],0,0,0,0,["c",AUa(AMp),"F",AT$(AEj)],Ni,0,BA,[],0,0,0,0,["c",AUa(AGu),"F",AT$(AIB)],ADq,0,BO,[],0,0,0,0,["c",AUa(AQW),"K",AT$(AFU),"hg",AT9(AL9),"F",AT$(AFT)],Zd,0,BO,[],4,0,0,0,["c",AUa(AMf),"K",AT$(AOg),"hg",AT9(AEg),"F",AT$(AQ6)],ADh,0,BA,[],4,0,0,0,["c",AUa(AKo),"F",AT$(AIt)],ABy,0,BA,[],0,0,0,0,["c",AUa(AMn),"F",AT$(AIj)],Yd,0,BA,[],0,0,0,0,["c",AUa(AJs),"F",AT$(AGJ)],G3,0,BO,[],0,0,0,0,["c",AUa(AFf),"K",AT$(ANz),"F",
AT$(ANX)],ADm,0,G3,[],0,0,0,0,["c",AUa(AGO),"cf",AUa(APP),"ck",AUb(AE4),"bN",AT$(ALv)],AAC,0,G3,[],0,0,0,0,["c",AUa(AKX)],N2,0,Gf,[HT],0,3,0,0,["k6",AUb(AH_),"kj",AUa(AFL),"ho",AT$(AF$),"lD",AT_(APd)],Rv,0,BT,[],0,0,0,0,["bq",AT_(AG_),"cf",AUa(AFC),"ck",AUb(AIy),"bN",AT$(AI4)],Yc,0,BT,[],0,0,0,0,["bq",AT_(AK5)],Nc,0,BT,[],0,0,0,0,["bq",AT_(AOz)],G2,0,C,[],4,0,0,AN8,0,Mu,0,BT,[],0,0,0,0,["bq",AT_(AOG)],KY,0,BO,[],0,0,0,0,["K",AT$(AMF),"c",AUa(AGF),"cf",AUa(AI2),"ck",AUb(AHg),"bN",AT$(AE2),"F",AT$(APl)],Lk,0,
BO,[],0,0,0,0,["K",AT$(AF9),"c",AUa(AED),"cf",AUa(AM3),"ck",AUb(AOy),"bN",AT$(AHa),"F",AT$(ANb)],DU,0,BT,[],0,0,0,0,["bq",AT_(ANY),"cf",AUa(ALW),"ck",AUb(AF7),"bN",AT$(ANK)],Ve,0,EJ,[],0,0,0,0,["g9",AT$(AGj),"r1",AT_(ANQ)],Vf,0,EJ,[],0,0,0,0,["g9",AT$(AOS),"r1",AT_(AQC)],ACp,0,C,[],0,0,0,0,0,Yu,0,C,[],0,0,0,0,0,KV,0,X,[],0,0,0,0,["B",AT9(AAL)],JR,0,X,[],0,0,0,0,["B",AT9(ABr)],ACi,0,X,[],0,0,0,0,["B",AT9(AOj)],ACO,0,X,[],0,0,0,0,["B",AT9(APn)],ACS,0,X,[],0,0,0,0,["B",AT9(AHP)],KR,0,X,[],0,0,0,0,["B",AT9(Zi)],Lu,
0,KR,[],0,0,0,0,["B",AT9(AAe)],AD5,0,X,[],0,0,0,0,["B",AT9(AI0)],Ml,0,Lu,[],0,0,0,0,["B",AT9(X$)],AAX,0,Ml,[],0,0,0,0,["B",AT9(ALq)],ABj,0,X,[],0,0,0,0,["B",AT9(AG4)],ZJ,0,X,[],0,0,0,0,["B",AT9(ALn)]]);
$rt_metadata([Zp,0,X,[],0,0,0,0,["B",AT9(AQF)],ACV,0,X,[],0,0,0,0,["B",AT9(AL5)],AEf,0,X,[],0,0,0,0,["B",AT9(AEu)],ACq,0,X,[],0,0,0,0,["B",AT9(AJx)],ACe,0,X,[],0,0,0,0,["B",AT9(AN2)],ADb,0,X,[],0,0,0,0,["B",AT9(AG0)],YO,0,X,[],0,0,0,0,["B",AT9(AHo)],Yr,0,X,[],0,0,0,0,["B",AT9(AQy)],ACw,0,X,[],0,0,0,0,["B",AT9(AEn)],ACH,0,X,[],0,0,0,0,["B",AT9(AKs)],Z8,0,X,[],0,0,0,0,["B",AT9(AHy)],ABo,0,X,[],0,0,0,0,["B",AT9(AID)],ADM,0,X,[],0,0,0,0,["B",AT9(AKu)],ACG,0,X,[],0,0,0,0,["B",AT9(APG)],AAz,0,X,[],0,0,0,0,["B",AT9(ANk)],Z6,
0,X,[],0,0,0,0,["B",AT9(ALZ)],AEa,0,X,[],0,0,0,0,["B",AT9(AOc)],Jd,0,X,[],0,0,0,0,["B",AT9(ABl)],ADd,0,Jd,[],0,0,0,0,["B",AT9(ALM)],AA2,0,KV,[],0,0,0,0,["B",AT9(AFB)],Z0,0,JR,[],0,0,0,0,["B",AT9(AIP)],Zw,0,X,[],0,0,0,0,["B",AT9(AKK)],ZU,0,X,[],0,0,0,0,["B",AT9(AQk)],AAS,0,X,[],0,0,0,0,["B",AT9(AId)],AAY,0,X,[],0,0,0,0,["B",AT9(AEo)],ZD,0,C,[],4,0,0,0,0,Y6,0,C,[],4,3,0,0,0,Nj,0,C,[],0,3,0,0,0,ACC,0,C,[],0,3,0,0,0,AAx,0,C,[],4,3,0,0,0,Zf,0,C,[IH],0,3,0,0,0,Tl,0,C,[Bc],0,3,0,0,["n",AT$(ARp)],Q3,0,C,[Bc],0,3,0,
0,["n",AT$(AIa)],Pz,0,C,[Bc],0,3,0,0,0,Qe,0,C,[Bc],0,3,0,0,0,Wd,0,U,[],0,0,0,0,["k",AT$(AHW)],Wb,0,U,[],0,0,0,0,["k",AT$(AES)],Og,0,U,[],0,0,0,0,["k",AT$(AKz),"cq",AT9(AIG)],Om,0,U,[],0,0,0,0,["k",AT$(AN1)],Ok,0,U,[],0,0,0,0,["k",AT$(AOF)],Ol,0,U,[],0,0,0,0,["k",AT$(AK4)],Op,0,U,[],0,0,0,0,["k",AT$(AHt)],Oq,0,U,[],0,0,0,0,["k",AT$(AEh)],On,0,U,[],0,0,0,0,["k",AT$(AIL)],Oo,0,U,[],0,0,0,0,["k",AT$(AK7)],Or,0,U,[],0,0,0,0,["k",AT$(APT)],Os,0,U,[],0,0,0,0,["k",AT$(AGU)],Of,0,U,[],0,0,0,0,["k",AT$(ARF)],OZ,0,U,[],
0,0,0,0,["k",AT$(AIO)],Oc,0,U,[],0,0,0,0,["k",AT$(AGR)]]);
$rt_metadata([Od,0,U,[],0,0,0,0,["k",AT$(AIr)],Oj,0,U,[],0,0,0,0,["k",AT$(AJ1)],Ob,0,U,[],0,0,0,0,["k",AT$(APu)],Oh,0,U,[],0,0,0,0,["k",AT$(AFO)],Oi,0,U,[],0,0,0,0,["k",AT$(AM_)],LS,0,C,[],3,3,0,0,0,Sp,0,C,[LS],4,3,0,0,0,Dg,0,C,[],3,3,0,ABq,0,Cg,0,Cj,[],12,3,0,ZS,0,Du,0,C,[],3,3,0,AN3,0,N4,0,C,[Bc],0,3,0,0,["n",AT$(AOb)],M2,0,Gs,[],0,0,0,0,["cf",AUa(AIg),"ck",AUb(ARq),"e6",AT9(AGD)],PY,0,Bp,[],0,3,0,0,0,W3,0,Bp,[],0,3,0,0,0,U_,0,FK,[],0,3,0,0,0,PL,0,FK,[],0,3,0,0,0,XS,0,Bp,[],0,3,0,0,0,U2,0,C,[],0,3,0,0,0,Tn,
0,C,[Bi],0,3,0,0,0,Sz,0,C,[Bc],0,3,0,0,0,Sy,0,C,[Bc],0,3,0,0,0,ACs,0,C,[],3,3,0,0,0,ZW,0,C,[],0,3,0,0,0,Rt,0,C,[HL],0,3,0,0,0,U8,0,C,[LS],0,0,0,0,0,AC5,0,C,[GU],0,3,0,0,0,Vz,0,C,[Bi],0,3,0,0,["o",AT9(AP7)],N7,0,C,[],0,3,0,0,0,ST,0,U,[],0,0,0,0,["k",AT$(AP4)],MI,0,U,[],0,0,0,0,["k",AT$(AFy)],RP,0,U,[],0,0,0,0,["k",AT$(AFj)],RO,0,U,[],0,0,0,0,["k",AT$(AIc)],WK,0,U,[],0,0,0,0,["k",AT$(AJM)],OM,0,U,[],0,0,0,0,["k",AT$(AP8)],NX,0,U,[],0,0,0,0,["k",AT$(AMz)],Qq,0,U,[],0,0,0,0,["k",AT$(AN7)],MB,0,U,[],0,0,0,0,["k",
AT$(AQ4)],MG,0,U,[],0,0,0,0,["k",AT$(AHf)],NG,0,U,[],0,0,0,0,["k",AT$(AQi)],O$,0,U,[],0,0,0,0,["k",AT$(ALk)],Ph,0,U,[],0,0,0,0,["k",AT$(ANx)],TG,0,U,[],0,0,0,0,["k",AT$(APU)],Sr,0,U,[],0,0,0,0,["k",AT$(AQN)],MW,0,U,[],0,0,0,0,["k",AT$(AG2)],L9,0,U,[],0,0,0,0,["k",AT$(AMC)],RI,0,L9,[],0,0,0,0,["k",AT$(AO5)],PF,0,C,[IL],0,3,0,0,["qy",AT9(AKR)],VI,0,C,[BW],0,3,0,0,["bi",AT$(ANo)],VL,0,C,[BW],0,3,0,0,["bi",AT$(AL$)],Ts,0,C,[BW],0,3,0,0,["bi",AT$(AIV)]]);
$rt_metadata([Tv,0,C,[BW],0,3,0,0,["bi",AT$(AEM)],Ut,0,C,[BW],0,3,0,0,["bi",AT$(AKM)],XJ,0,C,[Bc],0,3,0,0,["n",AT$(APj)],XK,0,C,[Bc],0,3,0,0,["n",AT$(ALE)],XI,0,C,[Bc],0,3,0,0,["n",AT$(ARG)],YV,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.KM=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ",
"#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",
"Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ",
"","","w = ",", lineHeight = ","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","pointer","text","ew-resize","ns-resize","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",
", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐",
"c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","mouseDown b=","mouseUp b=","onCopy","copied","This is a ",
" text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","trying to display with unknown screen size and dpr","onContextMenu","#616161","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","#606366","#2B2B2B","#A4A3A3","#323232","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ",
"todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy",".cpp",".cc",".cxx",".hpp",".c",".h",".js","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","#BBBBBB","#3C3F41","#4B6EAF","#787878","onEnter item ","defaultText","keyword","#CC7832","field","#9876AA","#6A8759","comma","error","unused","#72737A","#6897BB","method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080",
"annotation","#BBB529","type","operator","#5F8C8A","\\n","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","#CF8E6D","#C77DBB","#6AAB73","#F75464","#6F737A","#2AACB8","#56A8F5","#7A7E85","#B3AE60","#2E436E","#2E426D","#4D4E51","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","/","Int","Iter","VP","Rep","No definition or usages",
"Expected "," ints to read, but "," read","readClipboardText error: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase",
"javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement",
"Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures",
"OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in ","#EBECF0","#F8F9FB","#edebfc","#FCE8F4","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000",
"#818594","#080808","Verdana","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AF4(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cq=Long_add;var Kn=Long_sub;var BN=Long_mul;var Dp=Long_div;var MN=Long_rem;var ASn=Long_or;var CU=Long_and;var AXZ=Long_xor;var Fn=Long_shl;var Gn=Long_shr;var D7=Long_shru;var ASJ=Long_compare;var Fa=Long_eq;var AX0=Long_ne;var AHB=Long_lt;var Px=Long_le;var AHi=Long_gt;var ZN=Long_ge;var AX1=Long_not;var ASV=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ASZ);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=TN.prototype;c.f=c.bi;c=TL.prototype;c.f=c.bi;c=M_.prototype;c.f=c.bi;c=AAg.prototype;c.get=c.Gs;Object.defineProperty(c,"length",{get:c.FN});c=NH.prototype;c.f=c.bi;c=YB.prototype;c.removeEventListener=c.CY;c.dispatchEvent=c.A1;c.get=c.yf;c.addEventListener=c.zy;Object.defineProperty(c,"length",{get:c.A_});c=VB.prototype;c.onAnimationFrame=c.C0;c=Vv.prototype;c.f=c.ui;c=Vs.prototype;c.handleEvent=c.b$;c=Vt.prototype;c.f=c.bi;c=WU.prototype;c.accept=c.ux;c=WV.prototype;c.accept=c.ux;c=Wl.prototype;c.handleEvent
=c.b$;c=Wm.prototype;c.handleEvent=c.b$;c=Wn.prototype;c.handleEvent=c.b$;c=Wo.prototype;c.handleEvent=c.b$;c=Wp.prototype;c.handleEvent=c.b$;c=Wq.prototype;c.handleEvent=c.b$;c=Wr.prototype;c.handleEvent=c.b$;c=Ws.prototype;c.handleEvent=c.b$;c=Wt.prototype;c.handleEvent=c.b$;c=Wu.prototype;c.handleEvent=c.b$;c=XM.prototype;c.handleEvent=c.b$;c=XN.prototype;c.handleEvent=c.b$;c=XO.prototype;c.handleEvent=c.b$;c=XP.prototype;c.handleEvent=c.b$;c=Ui.prototype;c.handleEvent=c.b$;c=Xm.prototype;c.f=c.bi;c=Xn.prototype;c.f
=c.bi;c=Nh.prototype;c.f=c.bi;c=Ng.prototype;c.f=c.bi;c=Nf.prototype;c.f=c.bi;c=Ne.prototype;c.f=c.bi;c=NA.prototype;c.accept=c.ux;c=OY.prototype;c.f=c.ui;c=OW.prototype;c.f=c.ui;c=Qu.prototype;c.f=c.bi;c=Uy.prototype;c.f=c.bi;c=MK.prototype;c.f=c.bi;c=Xc.prototype;c.f=c.bi;c=Xb.prototype;c.f=c.bi;c=WF.prototype;c.f=c.bi;c=WE.prototype;c.f=c.bi;c=W8.prototype;c.handleEvent=c.b$;c=PN.prototype;c.f=c.bi;c=MF.prototype;c.onTimer=c.qy;c=Mp.prototype;c.onTimer=c.qy;c=Xa.prototype;c.f=c.bi;c=WX.prototype;c.f=c.bi;c
=T$.prototype;c.f=c.bi;c=PF.prototype;c.onTimer=c.qy;c=VI.prototype;c.f=c.bi;c=VL.prototype;c.f=c.bi;c=Ts.prototype;c.f=c.bi;c=Tv.prototype;c.f=c.bi;c=Ut.prototype;c.f=c.bi;})();
}));
