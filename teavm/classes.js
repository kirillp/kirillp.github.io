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
index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.e_=f;}
function $rt_cls(cls){return AAG(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FK(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bP.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AMG(t);}
function $rt_throwableCause(t){return AMO(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ASg());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ASh(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ASi());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BD=$rt_compare;var ASj=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var Vg=$rt_isInstance;var ASk=$rt_nativeThread;var ASl=$rt_suspending;var ASm=$rt_resuming;var ASn=$rt_invalidPointer;var B=$rt_s;var Br=$rt_eraseClinit;var Bb=$rt_imul;var D9=$rt_wrapException;var ASo=$rt_checkBounds;var ASp=$rt_checkUpperBound;var ASq=$rt_checkLowerBound;var ASr=$rt_wrapFunction0;var ASs=$rt_wrapFunction1;var ASt=$rt_wrapFunction2;var ASu=$rt_wrapFunction3;var ASv=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var Zz=$rt_createCharArrayFromData;var AQ3=$rt_createByteArrayFromData;var ASw=$rt_createShortArrayFromData;var EW=$rt_createIntArrayFromData;var ASx=$rt_createBooleanArrayFromData;var ASy=$rt_createFloatArrayFromData;var ASz=$rt_createDoubleArrayFromData;var AE5=$rt_createLongArrayFromData;var ASf=$rt_createBooleanArray;var EZ=$rt_createByteArray;var ASA=$rt_createShortArray;var BQ=$rt_createCharArray;var BH=$rt_createIntArray;var ARU=$rt_createLongArray;var ADl=$rt_createFloatArray;var ASB
=$rt_createDoubleArray;var BD=$rt_compare;var ASC=$rt_castToClass;var ASD=$rt_castToInterface;var ASE=Long_toNumber;var Z=Long_fromInt;var ASF=Long_fromNumber;var B_=Long_create;var Ef=Long_ZERO;var ASG=Long_hi;var Ex=Long_lo;
function C(){this.$id$=0;}
function ASH(){var a=new C();ABN(a);return a;}
function ABN(a){}
function Cm(a){return AAG(a.constructor);}
function AJP(a,b){return a!==b?0:1;}
function AEO(a){var b,c,d,e,f,g,h,i,j;b=Xf(a);if(!b)c=B(0);else{d=(((32-M2(b)|0)+4|0)-1|0)/4|0;e=BQ(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GT((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FK(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function Xf(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AI$(a){var b,c,d;if(!Vg(a,Ed)&&a.constructor.$meta.item===null){b=new UQ;U(b);J(b);}b=ADv(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function QC(){var a=this;C.call(a);a.s3=0;a.pv=null;}
function ARf(b){var c,d,e,f,g,h,i,j,k,l;ABK();Xx();Z$();AA6();YQ();ABs();Xl();ABQ();AC6();Xn();AAV();AAq();AAW();ZM();YX();Yf();Zk();Zm();Ze();XH();ZU();ACN();c=(XK()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Ol(B(2),B(3));else{d=new QC;BI(d);e=new SU;e.rd=d;f=new Mx;c=new $rt_globals.Worker("teavm/worker.js");g=new M6;g.nW=c;g.nX=e;g.nY=f;e=Bk(g,"f");c.onmessage=e;h=H(K7,[Jc(B(4),B(5),400),Jc(B(6),B(7),400),Jc(B(8),B(5),700),Jc(B(9),
B(7),700)]);b=R(K7,1);b.data[0]=ANz(B(10),E3(B(11),B(12)),B(5),400);b=(K3(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.qI;f=c.pp;k=new M;O(k);BA(G(G(k,B(13)),f),41);k=N(k);f=c.pj;l=c.nJ;f=AG8($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BI(d);c=new SV;c.r$=d;g=new ST;e.then(Bk(c,"f"),Bk(g,"f"));}}
function ZR(b){var c,d,e,f,g,h,i,j,k;c=new RM;d=new QP;c.oI=new $rt_globals.TextDecoder("utf-16");e=new UP;e.nF=c;c.ql=e;e=new UI;e.tg=c;c.lM=e;f=new UJ;f.qb=c;c.sk=new $rt_globals.ResizeObserver(Bk(f,"f"));e=new UG;e.ng=c;c.mp=e;c.hM=1;f=new Oj;f.vW=null;f.i3=ASI;c.ln=f;c.o5=b;f=new UH;f.st=c;e=Bk(f,"f");b.onmessage=e;e=ZL();b.postMessage(e);c.mj=(DX()).getElementById("canvasDiv");b=XK();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dk
=b;c.mj.appendChild(b);f=c.dk;e=AK7(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)Ol(B(2),B(14));else{g=new OJ;e=c.dk;f=c.lM;g.de=null;g.gJ=e;g.cb=ARp(f);h=$rt_globals.window;i=R(Dk,14);j=i.data;k=new Vx;k.mE=g;j[0]=CQ(g,e,B(15),k);f=new Vy;f.qU=g;j[1]=CQ(g,e,B(16),f);f=new Vz;f.ns=g;j[2]=CQ(g,e,B(17),f);f=new VA;f.ta=g;j[3]=CQ(g,e,B(18),f);f=new VB;f.p4=g;j[4]=CQ(g,e,B(19),f);f=new VC;f.mY=g;j[5]=CQ(g,e,B(20),f);k=new VD;k.tn=g;j[6]=CQ(g,e,B(21),k);k=new VE;k.qd=g;j[7]=CQ(g,e,B(22),k);k=new VF;k.m7
=g;j[8]=CQ(g,e,B(23),k);k=new VG;k.sC=g;j[9]=CQ(g,e,B(24),k);k=new WP;k.rW=g;j[10]=CQ(g,e,B(25),k);k=new WQ;k.q9=g;j[11]=AAQ(g,h,B(26),k,1);k=new WR;k.l8=g;j[12]=CQ(g,h,B(27),k);k=new WS;k.sP=g;j[13]=CQ(g,h,B(28),k);g.vh=AOS(i);Y8(g,e);c.k0=g;c.fH=AQP(b,c.lM);ANf(c.sk,c.dk);e=$rt_globals.window;g=c.mp;e.addEventListener("resize",Bk(g,"handleEvent"));c.eX=Z6(d,YZ(c));Sk(c);}ABj(c);}
var Mq=F(0);
var LT=F(0);
function Vs(){var a=this;C.call(a);a.jR=null;a.fu=null;}
function AAG(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Vs;c.fu=b;d=c;b.classObject=d;}return c;}
function HB(a){if(a.jR===null)a.jR=$rt_str(a.fu.$meta.name);return a.jR;}
function Hs(a){return a.fu.$meta.primitive?1:0;}
function HI(a){return AAG(a.fu.$meta.item);}
var Yj=F();
function Bk(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function KI(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var X5=F();
function ADv(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AAK(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AAK(d[e],c))return 1;e=e+1|0;}return 0;}
function Gi(){var a=this;C.call(a);a.g4=null;a.kq=null;a.iE=0;a.i5=0;}
function ASJ(){var a=new Gi();U(a);return a;}
function ASK(a){var b=new Gi();Bl(b,a);return b;}
function U(a){a.iE=1;a.i5=1;}
function Bl(a,b){a.iE=1;a.i5=1;a.g4=b;}
function AGP(a){return a;}
function AMG(a){return a.g4;}
function AMO(a){var b;b=a.kq;if(b===a)b=null;return b;}
var DS=F(Gi);
var Bn=F(DS);
function ASh(a){var b=new Bn();AOA(b,a);return b;}
function AOA(a,b){Bl(a,b);}
var ZQ=F(Bn);
var C_=F(0);
var CI=F(0);
var Ij=F(0);
function Bv(){var a=this;C.call(a);a.bP=null;a.hn=0;}
var ASL=null;var ASM=null;var ASN=null;function EE(){EE=Br(Bv);AN9();}
function AHv(){var a=new Bv();Xp(a);return a;}
function FK(a){var b=new Bv();G2(b,a);return b;}
function Ja(a,b,c){var d=new Bv();LG(d,a,b,c);return d;}
function Xp(a){EE();a.bP=ASL;}
function G2(a,b){EE();LG(a,b,0,b.data.length);}
function LG(a,b,c,d){var e;EE();e=BQ(d);a.bP=e;Do(b,c,e,0,d);}
function LB(b){var c;EE();c=AHv();c.bP=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bP.data;if(b<c.length)return c[b];}d=new GR;U(d);J(d);}
function I(a){return a.bP.data.length;}
function Fe(a){return a.bP.data.length?0:1;}
function O0(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=I(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Do(a.bP,b,d,e,c);return;}}g=new Bw;U(g);J(g);}
function Tp(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function J3(a,b){if(a===b)return 1;return Tp(a,b,0);}
function D6(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Gp(a,b,c){var d,e,f,g,h;d=Ba(0,c);if(b<65536){e=b&65535;while(true){f=a.bP.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=HD(b);h=Ia(b);while(true){f=a.bP.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FP(a,b,c){var d,e,f,g,h;d=W(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bP.data[d]==e)break;d=d+(-1)|0;}return d;}f=HD(b);g=Ia(b);while(true){if(d<1)return (-1);h=a.bP.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function YJ(a,b,c){var d,e,f;d=Ba(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function OZ(a,b,c){var d,e;d=W(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function B8(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new Bw;U(e);J(e);}if(!d){EE();return ASM;}if(!b&&c==I(a))return a;return Ja(a.bP,b,c-b|0);}
function Db(a,b){return B8(a,b,I(a));}
function O6(a,b,c){return B8(a,b,c);}
function E3(a,b){var c,d,e,f,g,h;if(Fe(b))return a;if(Fe(a))return b;c=BQ(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return LB(c);}
function Ug(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BA(d,L(a,f));}f=f+1|0;}G(d,Db(a,f));return N(d);}
function QU(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B8(a,b,c+1|0);}
function AEN(a){return a;}
function Gg(a){var b,c,d,e,f;b=a.bP.data;c=BQ(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Ct(b){EE();return b===null?B(29):b.cj();}
function C0(b){var c;EE();c=new M;O(c);return N(S(c,b));}
function Bo(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function KG(a){var b,c,d,e;a:{if(!a.hn){b=a.bP.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hn=(31*a.hn|0)+e|0;d=d+1|0;}}}return a.hn;}
function Lf(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gm;Bl(b,B(30));J(b);}ASO=1;d=new P3;d.jD=R(CN,10);d.fQ=(-1);d.eb=(-1);d.bo=(-1);e=new Gr;e.d$=1;e.bC=b;e.X=BQ(I(b)+2|0);Do(Gg(b),0,e.X,0,I(b));f=e.X.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.p5=g;e.fx=0;EU(e);EU(e);d.f=e;d.c6=0;d.kC=WN(d,(-1),0,null);if(!Da(d.f)){b=new Id;h=d.f;IK(b,B(31),h.bC,h.cQ);J(b);}if(d.mG)d.kC.dP();b=Cl();h=new Ru;h.hL=(-1);h.j0=(-1);h.um=d;h.se=d.kC;h.h6=a;h.hL=0;g=I(a);h.j0=g;e=new Ui;i=h.hL;j=d.fQ;k=d.eb+1|0;l=d.bo+1|0;e.g9
=(-1);m=j+1|0;e.no=m;e.dj=BH(m*2|0);f=BH(l);e.i1=f;G_(f,(-1));if(k>0)e.kr=BH(k);G_(e.dj,(-1));WF(e,a,i,g);h.ci=e;e.eK=1;n=0;m=0;if(!I(a)){f=R(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.h6);if(!XA(h))l=h.j0;e=h.ci;if(e.dN>=0&&Zc(e)==1){e=h.ci;e.dN=Ix(e);if(Ix(h.ci)==AA5(h.ci)){e=h.ci;e.dN=e.dN+1|0;}g=h.ci.dN;g=g<=l&&L2(h,g)?1:0;}else g=L2(h,h.hL);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BX(b,O6(a,m,ACu(h)));m=YT(h);n=g;}a:{BX(b,O6(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bs(b,g)))break a;Ee(b,
g);}}if(g<0)g=0;f=Hl(b,R(Bv,g));}return f;}
function AGZ(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=W(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AN9(){ASL=BQ(0);ASM=AHv();ASN=new RW;}
var Ez=F(Gi);
var GU=F(Ez);
var Zr=F(GU);
var DL=F();
function E7(){DL.call(this);this.e8=0;}
var ASP=null;var ASQ=null;function AB6(a){var b=new E7();Jn(b,a);return b;}
function Jn(a,b){a.e8=b;}
function IZ(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new C9;Bl(b,B(32));J(b);}d=I(b);if(0==d){b=new C9;Bl(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new C9;U(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=Oc(L(b,f));if(i<0){j=new C9;k=B8(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bl(j,N(b));J(j);}if(i>=c){j=new C9;l=B8(b,0,d);b=new M;O(b);G(G(S(G(b,B(35)),c),B(36)),l);Bl(j,N(b));J(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new C9;k=B8(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bl(j,N(b));J(j);}b=new C9;j=new M;O(j);S(G(j,B(38)),c);Bl(b,N(j));J(b);}
function FO(b){var c,d;if(b>=(-128)&&b<=127){a:{if(ASQ===null){ASQ=R(E7,256);c=0;while(true){d=ASQ.data;if(c>=d.length)break a;d[c]=AB6(c-128|0);c=c+1|0;}}}return ASQ.data[b+128|0];}return AB6(b);}
function Lo(a){var b;b=a.e8;return (MO(AR4(20),b,10)).cj();}
function M2(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HR(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function JD(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AI5(a,b){b=b;return BD(a.e8,b.e8);}
function ABK(){ASP=E($rt_intcls());}
function F6(){var a=this;C.call(a);a.z=null;a.K=0;}
function ASR(){var a=new F6();O(a);return a;}
function AR4(a){var b=new F6();FM(b,a);return b;}
function O(a){FM(a,16);}
function FM(a,b){a.z=BQ(b);}
function MO(a,b,c){return ZF(a,a.K,b,c);}
function ZF(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ca(a,b,b+1|0);else{Ca(a,b,b+2|0);f=a.z.data;g=b+1|0;f[b]=45;b=g;}a.z.data[b]=GT(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ca(a,b,b+i|0);if(e)e=b;else{f=a.z.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.z.data;b=e+1|0;f[e]=GT($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AAw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){Ca(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ca(a,b,b+4|0);e=a.z.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ca(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ca(a,b,b+8|0);d=b;}else{Ca(a,b,b+9|0);e=a.z.data;d=b+1|0;e[b]=45;}e=a.z.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=ASS;AAr(c,f);d=f.j6;g=f.jM;h=f.mV;i=1;j=1;if(h)j=2;k=9;l=ANE(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Ba(k,i+1|0);g=0;}else{d=d/AST.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ca(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.z.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.z.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.z.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function YC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){Ca(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ca(a,b,b+4|0);e=a.z.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ca(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ca(a,b,b+8|0);d=b;}else{Ca(a,b,b+9|0);e=a.z.data;d=b+1|0;e[b]=45;}e=a.z.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=ASU;ZJ(c,f);g=f.kE;h=f.jw;i=f.mB;j=1;k=1;if(i)k=2;l=18;m=ALv(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Ba(l,j+1|0);h=0;}else{g=Dh(g,ASV.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ca(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.z.data;k=b+1|0;e[b]=45;}n=B_(1569325056, 23283064);o=0;while(o<l){if(OY(n,Ef))d=0;else{d=Ex(Dh(g,n));g=
L9(g,n);}e=a.z.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Dh(n,Z(10));o=o+1|0;}if(h){e=a.z.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function ANE(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ALv(b){var c,d,e,f,g;c=Z(1);d=0;e=16;f=ASW.data;g=f.length-1|0;while(g>=0){if(E2(L9(b,BM(c,f[g])),Ef)){d=d|e;c=BM(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BA(a,b){return a.lu(a.K,b);}
function Wt(a,b,c){Ca(a,b,b+1|0);a.z.data[b]=c;return a;}
function I2(a,b){var c,d;c=a.z.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.z=XG(a.z,d);}
function N(a){return Ja(a.z,0,a.K);}
function Wb(a,b,c,d){return a.kZ(a.K,b,c,d);}
function Mk(a,b,c,d,e){var f,g,h,i;Ca(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.z.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HT(a,b){return a.kc(b,0,b.data.length);}
function Ca(a,b,c){var d,e,f,g;d=a.K;e=d-b|0;a.hh((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.z.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.K=a.K+(c-b|0)|0;}
var Hv=F(0);
var M=F(F6);
function K$(){var a=new M();AO0(a);return a;}
function AO0(a){O(a);}
function G(a,b){var c;c=a.K;if(b===null)b=B(29);LC(a,c,b);return a;}
function BY(a,b){LC(a,a.K,b);return a;}
function S(a,b){MO(a,b,10);return a;}
function Ht(a,b){var c,d,e,f,g,h,i,j;c=a.K;d=1;if(AGm(b,Ef)){d=0;b=ARb(b);}a:{if(KC(b,Z(10))<0){if(d)Ca(a,c,c+1|0);else{Ca(a,c,c+2|0);e=a.z.data;f=c+1|0;e[c]=45;c=f;}a.z.data[c]=GT(Ex(b),10);}else{g=1;h=Z(1);i=Fw(Z(-1),Z(10));b:{while(true){j=BM(h,Z(10));if(KC(j,b)>0){j=h;break b;}g=g+1|0;if(KC(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ca(a,c,c+g|0);if(d)f=c;else{e=a.z.data;f=c+1|0;e[c]=45;}while(true){if(E2(j,Ef))break a;e=a.z.data;c=f+1|0;e[f]=GT(Ex((Fw(b,j))),10);b=MM(b,j);j=Fw(j,Z(10));f=c;}}}return a;}
function E$(a,b){AAw(a,a.K,b);return a;}
function Xj(a,b){BA(a,b);return a;}
function FT(a,b){LC(a,a.K,!b?B(39):B(40));return a;}
function ACk(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.K;if(b<=e){if(d){f=e-c|0;a.K=e-(c-b|0)|0;g=0;while(g<f){h=a.z.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GR;U(i);J(i);}
function Vf(a,b){var c,d,e,f;if(b>=0){c=a.K;if(b<c){c=c-1|0;a.K=c;while(b<c){d=a.z.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GR;U(f);J(f);}
function AI0(a,b,c,d,e){Mk(a,b,c,d,e);return a;}
function AF9(a,b,c,d){Wb(a,b,c,d);return a;}
function XT(a){return a.K;}
function DI(a){return N(a);}
function AI8(a,b){I2(a,b);}
function AJB(a,b,c){Wt(a,b,c);return a;}
function LC(a,b,c){var d,e,f;if(b>=0&&b<=a.K){a:{if(c===null)c=B(29);else if(Fe(c))break a;I2(a,a.K+I(c)|0);d=a.K-1|0;while(d>=b){a.z.data[d+I(c)|0]=a.z.data[d];d=d+(-1)|0;}a.K=a.K+I(c)|0;d=0;while(d<I(c)){e=a.z.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new GR;U(c);J(c);}
var Ei=F(GU);
var AAP=F(Ei);
function ASX(a){var b=new AAP();AEY(b,a);return b;}
function AEY(a,b){Bl(a,b);}
var Zh=F(Ei);
function ASY(a){var b=new Zh();AFj(b,a);return b;}
function AFj(a,b){Bl(a,b);}
var SL=F(0);
var Dk=F(0);
function AOS(b){var c;c=new Pr;c.uz=b;return c;}
function CF(b,c){if(b!==null)b.dZ();return c;}
var N9=F(0);
function H4(){var a=this;C.call(a);a.la=0;a.ko=0;}
var ASZ=0;function FE(a){ASZ=ASZ-1|0;}
function FQ(a,b,c){IG(a,Yv(b,c,400,0));}
function PW(a,b){return Ka(a,b,0.875);}
function Ka(a,b,c){return Eh(a,b)+c|0;}
function Qp(){var a=this;H4.call(a);a.i9=null;a.bk=null;a.mc=null;}
function Ep(a){var b,c,d;b=a.bk;c=a.la;d=a.ko;b.clearRect(0.0,0.0,c,d);}
function Ra(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bk;d="center";c.textAlign=d;break a;case 2:c=a.bk;d="right";c.textAlign=d;break a;default:break a;}d=a.bk;c="left";d.textAlign=c;}}
function Cu(a,b){IG(a,Jf(b.ms));}
function IG(a,b){var c;if(!(a.mc==b?1:0)){c=a.bk;a.mc=b;c.font=b;}}
function Yv(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Cf(a,b,c,d){var e,f,g;e=a.bk;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function AA3(a,b){var c,d;if(!b){c=a.bk;d="alphabetic";c.textBaseline=d;}else{d=a.bk;c="top";d.textBaseline=c;}}
function Eh(a,b){var c;c=$rt_ustr(b);return a.bk.measureText(c).width;}
function KN(a,b,c,d){var e,f;e=a.bk;f=$rt_ustr(FK(Zz([35,Go(b/16|0),Go(b%16|0),Go(c/16|0),Go(c%16|0),Go(d/16|0),Go(d%16|0)])));e.fillStyle=f;}
var Xy=F();
var AB2=F();
function Dg(b,c){if(b===c)return 1;return b!==null?b.dA(c):c!==null?0:1;}
function BI(b){if(b!==null)return b;b=new Gm;Bl(b,B(31));J(b);}
var Bc=F(0);
function SU(){C.call(this);this.rd=null;}
var Bt=F(0);
var Z5=F();
var XD=F(0);
function Jc(b,c,d){return ANz(B(41),E3(B(11),b),c,d);}
var ABA=F(0);
var ABv=F(0);
function K3(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dc(b,f+g|0);Do(c,0,d,f,g);return d;}
function Kl(b,c,d){Do(b,c,d,0,d.data.length);return d;}
function P_(b,c,d){var e;if(c>0)Do(b,0,d,0,c);e=d.data.length;if(c<e)Do(b,c+1|0,d,c,e-c|0);return d;}
function Zl(b,c,d,e){var f;if(c>0)Do(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Do(b,d,e,c,f-d|0);}return e;}
function FH(b){var c;c=new U8;c.ig=b;return c;}
function K7(){var a=this;C.call(a);a.qI=null;a.pp=null;a.pj=null;a.nJ=0;}
function ANz(a,b,c,d){var e=new K7();AMw(e,a,b,c,d);return e;}
function AMw(a,b,c,d,e){a.qI=b;a.pp=c;a.pj=d;a.nJ=e;}
var Yg=F();
function AG8(b,c){return {style:b,weight:c};}
var BU=F(0);
function SV(){C.call(this);this.r$=null;}
function AC$(a,b){var c,d,e;c=a.r$;d=0;while(d<b.length){e=b[d];(DX()).fonts.add(e);d=d+1|0;}c.s3=1;b=c.pv;if(b!==null)ZR(b);}
var ST=F();
function AOf(a,b){$rt_globals.console.info("font load error "+b);}
var KL=F();
var AS0=null;var AS1=null;function By(){if(AS0===null)AS0=AKm(AS2,0);return AS0;}
function K1(){if(AS1===null)AS1=AKm(AS3,0);return AS1;}
function AQ7(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KO(b)&&(e+f|0)<=KO(d)){a:{b:{if(b!==d){g=HI(Cm(b));h=HI(Cm(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hs(g)&&!Hs(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fu;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AAK(n.constructor,o)?1:0)){J5(b,c,d,e,j);b=new Ib;U(b);J(b);}j=j+1|0;k=m;}J5(b,c,d,e,f);return;}if(!Hs(g))break a;if(Hs(h))break b;else break a;}b=new Ib;U(b);J(b);}}J5(b,c,
d,e,f);return;}b=new Ib;U(b);J(b);}b=new Bw;U(b);J(b);}d=new Gm;Bl(d,B(42));J(d);}
function Do(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KO(b)&&(e+f|0)<=KO(d)){J5(b,c,d,e,f);return;}b=new Bw;U(b);J(b);}
function J5(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Fu(){return Long_fromNumber(new Date().getTime());}
function AA7(){return ASF($rt_globals.performance.now()*1000000.0);}
var ABr=F();
var YV=F();
function Ol(b,c){var d,e,f;d=(DX()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DX()).getElementById($rt_ustr(b)).appendChild(d);}
function XK(){return (DX()).createElement("canvas");}
function AK7(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AC3=F();
var Mx=F();
function AKQ(a,b){var c;c=new Bn;Bl(c,$rt_str(b.message));J(c);}
var ABR=F();
function Fs(b){return $rt_str(b);}
var XO=F();
function XG(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=W(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACf(b,c){var d,e,f,g;b=b.data;d=EZ(c);e=d.data;f=W(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACH(b,c){var d,e,f,g;b=b.data;d=BH(c);e=d.data;f=W(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dc(b,c){var d,e,f,g;d=b.data;e=TM(HI(Cm(b)),c);f=W(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Yt(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));G(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function AA2(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));S(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function AM5(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));E$(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function API(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));f=e[d];YC(c,c.K,f);d=d+1|0;}BY(c,B(45));return N(c);}
function G_(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BC;U(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function YR(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=ASI;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=W(j,h+f|0);l=h+(2*f|0)|0;m=W(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.lD(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AAx(b,c){return S3(b,0,b.data.length,c);}
function S3(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BC;U(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Jb=F(0);
var Y_=F();
function APr(a,b){return a.uh(b);}
function AE8(a){return a.vI();}
var ZD=F();
var FD=F(0);
var RW=F();
var Bw=F(Bn);
var AAv=F();
function KO(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AS4());}return b.data.length;}
function TM(b,c){if(b===null){b=new Gm;U(b);J(b);}if(b===E($rt_voidcls())){b=new BC;U(b);J(b);}if(c>=0)return AOF(b.fu,c);b=new W1;U(b);J(b);}
function AOF(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gm=F(Bn);
var Ib=F(Bn);
var C2=F();
var AS5=null;var AS6=null;var AS7=null;var AS8=null;var AS9=null;var AS$=null;var AS_=null;var ATa=null;var ATb=null;var ATc=null;function V3(b){var c,d;c=new Bv;d=BQ(1);d.data[0]=b;G2(c,d);return c;}
function Ll(b){return b>=65536&&b<=1114111?1:0;}
function CC(b){return (b&64512)!=55296?0:1;}
function CZ(b){return (b&64512)!=56320?0:1;}
function Lq(b){return !CC(b)&&!CZ(b)?0:1;}
function G1(b,c){return CC(b)&&CZ(c)?1:0;}
function El(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function HD(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ia(b){return (56320|b&1023)&65535;}
function EO(b){return Gl(b)&65535;}
function Gl(b){if(AS8===null){if(AS_===null)AS_=AA1();AS8=Zo((AS_.value!==null?$rt_str(AS_.value):null));}return RC(AS8,b);}
function Eq(b){return Gk(b)&65535;}
function Gk(b){if(AS7===null){if(ATa===null)ATa=ABL();AS7=Zo((ATa.value!==null?$rt_str(ATa.value):null));}return RC(AS7,b);}
function RC(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function TU(b,c){if(c>=2&&c<=36){b=Oc(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Oc(b){var c,d,e,f,g,h,i,j,k,l;if(AS6===null){if(ATb===null)ATb=Zt();c=(ATb.value!==null?$rt_str(ATb.value):null);d=AMP(Gg(c));e=I_(d);f=BH(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Ms(d)|0;j=j+Ms(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AS6=f;}g=AS6.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GT(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gd(b){var c;if(b<65536){c=BQ(1);c.data[0]=b&65535;return c;}return Zz([HD(b),Ia(b)]);}
function Cp(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Lq(b&65535))return 19;if(AS9===null){if(ATc===null)ATc=ACR();d=(ATc.value!==null?$rt_str(ATc.value):null);e=R(MH,16384);f=e.data;g=EZ(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=J4(L(d,l));if(m==64){l=l+1|0;m=J4(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,J4(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=J4(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AGW(k,k+i|0,ACf(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AGW(k,k+i|0,ACf(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AS9=Dc(e,j);}e=AS9.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.pO)o=p+1|0;else{c=d.nU;if(b>=c)return d.n9.data[b-c|0];c=p-1|0;}}return 0;}
function IW(b){a:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function F_(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cp(b)!=16?0:1;}
function OL(b){switch(Cp(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function P4(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return OL(b);}return 1;}
function Xx(){AS5=E($rt_charcls());AS$=R(C2,128);}
function AA1(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ABL(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Zt(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ACR(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var LM=F(0);
var RB=F(0);
var D$=F(0);
var AB1=F(0);
function DX(){return $rt_globals.window.document;}
function M6(){var a=this;C.call(a);a.nW=null;a.nX=null;a.nY=null;}
function ALU(a,b){var c,d,e;c=a.nW;d=a.nX;e=a.nY;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=Jf(J7(c));c=d.rd;c.pv=b;if(c.s3)ZR(b);}}
var ZB=F();
function Fk(){return APs();}
function APs(){return Math.random();}
function W(b,c){if(b<c)c=b;return c;}
function Ba(b,c){if(b>c)c=b;return c;}
function LX(b){if(b<=0)b= -b|0;return b;}
var Oz=F(0);
var Qf=F(0);
var P8=F(0);
var SG=F(0);
var Wc=F(0);
var TV=F(0);
var NQ=F(0);
var XC=F();
function AJx(a,b,c){a.B1($rt_str(b),KI(c,"handleEvent"));}
function AJR(a,b,c){a.zh($rt_str(b),KI(c,"handleEvent"));}
function AD_(a,b){return a.uh(b);}
function AKV(a,b,c,d){a.xA($rt_str(b),KI(c,"handleEvent"),d?1:0);}
function AOy(a,b){return !!a.B6(b);}
function AE_(a){return a.vI();}
function ADu(a,b,c,d){a.AH($rt_str(b),KI(c,"handleEvent"),d?1:0);}
var BC=F(Bn);
var W1=F(Bn);
var GR=F(Bw);
var YG=F();
function ZL(){return "ping";}
function DV(){C.call(this);this.iA=null;}
var ATd=null;var ATe=null;var ATf=null;var ATg=null;var ATh=null;var ATi=null;function JV(){JV=Br(DV);AFh();}
function Me(a){var b=new DV();AAk(b,a);return b;}
function AAk(a,b){JV();a.iA=b;}
function J7(b){var c,d,e,f,g;JV();if(b===null)return null;a:{c=b;if(ATe!==null){d=$rt_str(typeof c);if(!Bo(d,B(46))&&!Bo(d,B(47))){if(Bo(d,B(48))){b=ATf.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Me(c);g=f;b=ATf;e=new $rt_globals.WeakRef(g);b.set(c,e);ATh.register(g,c);return f;}if(!Bo(d,B(49)))break a;else{b=ATg.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Me(c);g=f;b=ATg;e=new $rt_globals.WeakRef(g);b.set(c,
e);ATi.register(g,c);return f;}}b=ATe.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Me(c);b=ATe;e=new $rt_globals.WeakRef(f);b.set(c,e);return f;}}return Me(c);}
function Jf(b){JV();if(b!==null)return b.iA;return null;}
function AOl(a,b){if(b===a)return 1;if(b===null)return 0;if(!(b instanceof DV))return 0;return a.iA!==b.iA?0:1;}
function AFh(){ATd=new $rt_globals.WeakMap();ATe=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();ATf=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATg=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATh=ATf===null?null:new $rt_globals.FinalizationRegistry(Bk(new V6,"accept"));ATi=ATg===null?null:new $rt_globals.FinalizationRegistry(Bk(new V7,"accept"));}
var NP=F(0);
function RM(){var a=this;C.call(a);a.oI=null;a.ql=null;a.lM=null;a.mj=null;a.dk=null;a.sk=null;a.mp=null;a.k0=null;a.fH=null;a.hM=0;a.u0=0;a.pI=null;a.eX=null;a.o5=null;a.ln=null;a.rg=0;}
function ABj(a){a.dk.focus();}
function MR(a,b){var c;c=DX();b=$rt_ustr(b);c.title=b;}
function YZ(a){var b,c,d;b=new LO;c=a.fH;d=a.k0.cb;b.bb=c;b.n=d;b.bU=a;return b;}
function Sk(a){a.u0=$rt_globals.requestAnimationFrame(Bk(a.ql,"onAnimationFrame"));}
function FS(a){a.hM=1;}
function Sj(a,b,c){var d,e;a.k0.de=B0(b,c);d=a.dk;e=b;d.width=e;d=a.dk;e=c;d.height=e;d=a.fH;Bg(d.dq,b,c);e=d.by;d=d.dq;b=d.b;c=d.a;e.viewport(0,0,b,c);a.eX.ca(a.fH.dq,J6(a));a.eX.bS();}
function Gf(a,b){var c,d,e;c=a.pI;d=a.dk;if(Dg(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.pI=b;}
function IU(a){return $rt_globals.performance.now()/1000.0;}
function J6(a){return $rt_globals.window.devicePixelRatio;}
function U9(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ACq(b,1);else{c=new VQ;d=$rt_globals.window.showDirectoryPicker();e=new VP;e.n0=b;e.n1=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function La(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ACq(b,0);else{c=new Wo;d=$rt_globals.window.showOpenFilePicker();e=new Wn;e.oG=b;e.oF=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function C1(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.rg+1|0;a.rg=e;f=a.ln;g=FO(e);f.hl=Ln(f,f.hl,g);g=T2(f,g);LP(g,b);LP(g,b);f.i8=f.i8+1|0;b=a.o5;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(Vg(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(Vg(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(Vg(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof Kt)){b=new BC;c=HB(Cm(c));f
=new M;O(f);G(G(f,B(50)),c);Bl(b,N(f));J(b);}c=c;f=c.gi;if(f===null)f=c.eD;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function PX(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new PN;e.mt=b;b=AC0(c);d.then(Bk(e,"f"),Bk(b,"f"));}
function Tr(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.oI;b=(Gg(b)).data;f=f.decode(b);b=e.writeText(f);e=new TK;e.qV=c;c=AC0(d);b.then(Bk(e,"f"),Bk(c,"f"));}
function WC(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AC0(b){var c;c=new L7;c.q7=b;return c;}
var Ci=F(0);
var QP=F();
function Z6(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Bo(B(51),c))d=(ANs(I(c)<=0?B(31):Db(c,1))).ce(b);else{d=new Mv;Ea(d,b);b=$rt_globals.fetch("test.wasm");e=new MF;b=b.then(Bk(e,"f"));e=new ME;b=b.then(Bk(e,"f"));e=new MD;f=new MC;b.then(Bk(e,"f"),Bk(f,"f"));}return d;}
var Bi=F(0);
var Z0=F();
var Zb=F();
var Zy=F();
var Qa=F(0);
function UP(){C.call(this);this.nF=null;}
function AH_(a,b){var c,d;c=b;b=a.nF;if(!(!b.eX.c3(c/1000.0)&&!b.hM)){d=b.fH.dq;if(Bb(d.b,d.a)){b.hM=0;b.eX.bS();}}Sk(b);}
function UI(){C.call(this);this.tg=null;}
function C$(a){FS(a.tg);}
var Pj=F(0);
function UJ(){C.call(this);this.qb=null;}
function AGq(a,b,c){var d,e,f,g;c=a.qb;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dk){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=J6(c);Sj(c,GW(f.width*g),GW(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Sj(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AB8=F();
function ANf(b,c){AMg(b,c,ADD());}
function ADD(){return {box:'device-pixel-content-box'};}
function AMg(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Ch=F(0);
function UG(){C.call(this);this.ng=null;}
function AL2(a,b){b=a.ng;b.eX.ca(b.fH.dq,J6(b));b.eX.bS();}
var Kq=F(0);
function Eu(){C.call(this);this.jX=null;}
var Ed=F(0);
var WB=F(0);
var Mp=F(0);
function Oj(){var a=this;Eu.call(a);a.hl=null;a.i3=null;a.vW=null;a.i8=0;}
function T2(a,b){var c,d;c=a.hl;while(true){if(c===null)return null;d=IY(a.i3,b,c.io);if(!d)break;c=d>=0?c.bQ:c.bF;}return c;}
function Ln(a,b,c){var d,e;if(b===null){b=new IT;d=null;b.io=c;b.hP=d;b.e3=1;b.fa=1;return b;}e=IY(a.i3,c,b.io);if(!e)return b;if(e>=0)b.bQ=Ln(a,b.bQ,c);else b.bF=Ln(a,b.bF,c);D_(b);return I$(b);}
function JA(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=IY(a.i3,c,b.io);if(d<0)b.bF=JA(a,b.bF,c);else if(d>0)b.bQ=JA(a,b.bQ,c);else{e=b.bQ;if(e===null)return b.bF;f=b.bF;g=R(IT,e.e3).data;h=0;while(true){b=e.bF;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bQ;while(h>0){h=h+(-1)|0;j=g[h];j.bF=b;D_(j);b=I$(j);}e.bQ=b;e.bF=f;D_(e);b=e;}D_(b);return I$(b);}
function UH(){C.call(this);this.st=null;}
function ANc(a,b){var c,d,e,f,g,h,i,j,k;c=a.st.ln;b=b.data;if(!(b===ZL()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BC;U(b);J(b);}if(b.length<1){b=new BC;U(b);J(b);}d=FO(b[0]);e=T2(c,d);if(e===null)c=null;else{c.hl=JA(c,c.hl,d);c.i8=c.i8+1|0;c=e.hP;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=Fs(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new RS;ABN(e);e.gZ=k;}else e=(k instanceof $rt_globals.File?1:0)?AAB(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AAB(k,null);g[h]=e;h=j;}c.m(f);}}
var ACs=F();
var ACY=F();
var Jg=F(0);
var V6=F();
function AMk(a,b){JV();ATf.delete(b);}
var Zq=F();
var V7=F();
function AKa(a,b){JV();ATg.delete(b);}
function OJ(){var a=this;C.call(a);a.cb=null;a.gJ=null;a.vh=null;a.de=null;}
function Mm(){return (DX()).activeElement;}
function CQ(a,b,c,d){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"));return VY(a,b,c,d);}
function AAQ(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"),!!e);return VY(a,b,c,d);}
function VY(a,b,c,d){var e;e=new Pf;e.t9=b;e.t_=c;e.t$=d;return e;}
function SX(a,b){var c;c=new T5;c.s_=b;return c;}
function Ev(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gJ.getBoundingClientRect();e=B0(GW((b.clientX-d.left)*c),GW((b.clientY-d.top)*c));f=new Bh;g=a.de;f.b=g.b;f.a=g.a;d=new LJ;Ts(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.k=e;d.tN=f;return d;}
function WU(a,b,c){var d,e,f,g;d=new Ob;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Ts(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.js=0;d.dm=e;d.bj=f;d.g6=c;d.qm=g;return d;}
function DC(a,b){b.stopPropagation();b.preventDefault();}
function Y8(a,b){var c;c=new Wy;c.og=b;b.onpointerdown=Bk(c,"f");c=new WA;c.nk=b;b.onpointerup=Bk(c,"f");}
function KE(){var a=this;C.call(a);a.pG=null;a.cr=null;a.by=null;a.ru=null;a.uF=0;a.vF=0;a.i_=null;a.v_=null;a.vT=null;a.uX=null;a.fM=null;a.g5=null;a.v1=null;a.nK=null;a.dq=null;a.sZ=null;a.kR=0;a.jo=0;a.lv=0;a.lg=0;a.hF=0;a.lt=null;}
function G0(a,b,c){return Gy(a,b,c,400,0);}
function CL(a,b,c){return LW(a.pG,b,c);}
function Fj(a,b){var c,d,e,f,g;c=a.by;d=b.bg;e=b.bu;f=b.bc;g=b.bv;c.clearColor(d,e,f,g);a.by.clear(16384);}
function CK(a,b){var c;if(b==a.jo)return b;if(!b)a.by.disable(3042);else{a.by.enable(3042);a.by.blendFuncSeparate(770,771,1,1);}c=a.jo;a.jo=b;return c;}
function Ua(a,b,c,d){var e,f,g;a.lg=1;a.hF=1;e=a.lt;f=d.b;g=d.a;e.pT=b;e.pU=c;e.pS=f;e.pP=g;Tt(a);}
function K2(a){a.lg=0;a.hF=0;Tt(a);}
function Tt(a){var b,c,d,e,f,g;b=a.lv;c=a.lg;if(b!=c){a.lv=c;if(!c)a.by.disable(3089);else a.by.enable(3089);}if(a.lv&&a.hF){a.hF=0;d=a.by;e=a.lt;b=e.pT;c=a.dq.a-e.pU|0;f=e.pP;c=c-f|0;g=e.pS;d.scissor(b,c,g,f);}}
function Km(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.nK;c=a.kR;d=b.f1.q3;e=b.dR;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dR;h=b.mn;e.bindBuffer(34962,h);i=b.f1.lQ.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dR;m=k.gQ;n=k.ez;o=b.f1.j$*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.ez|0;j=j+1|0;}a:{e=b.tc;if(e!==null){c=0;b.dR.bindBuffer(34962,e);i=b.f1.pB.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dR;j=e.gQ;p=e.ez;m=e.nR;n=b.f1.od;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.ez|0;g=g+1|0;}}}q=b.sH;if(q===null){c=b.qq;if(c>0)b.dR.drawArrays(4,0,c);}else{b.dR.bindBuffer(34963,q);k=b.dR;g=b.sQ;k.drawElements(4,g,5123,0);}a.kR=d;}
function BB(a,b,c,d,e){Ky(a,a.i_);Lw(a.i_,a.by,b,c,d,a.dq);d=a.i_;HN(a.by,d.ss,e);Km(a);}
function EA(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Ky(a,a.fM);Lw(a.fM,a.by,b,c,d,a.dq);To(a.fM,a.by,f);d=a.fM;j=a.by;f=f.e7;b=f.b;c=f.a;k=e.bg;l=b;m=k/l;k=e.bu;n=c;o=k/n;k=e.bc/l;l=e.bv/n;d=d.rX;j.uniform4f(d,m,o,k,l);d=a.fM;e=a.by;HN(e,d.ok,g);HN(e,d.mN,h);d=d.nx;e.uniform2f(d,i,0.0);Km(a);}
function CS(a){var b,c;b=new IS;c=a.ru;b.e7=new Bh;b.dG=c;b.er=c.c$.createTexture();ATj=ATj+1|0;return b;}
function M_(a,b){We(a.by,b);}
function Ky(a,b){var c,d;if(b!==a.sZ){c=a.by;d=b.cd;c.useProgram(d);a.sZ=b;}}
function ABz(){var a=this;KE.call(a);a.vl=null;a.vU=null;}
function AQP(a,b){var c=new ABz();AIv(c,a,b);return c;}
function AIv(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Tw;a.dq=new Bh;a.kR=0;a.lt=new VJ;a.pG=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(52)),e);$rt_globals.console.info($rt_ustr(N(f)));a.by=b;a.cr=LW(d,4,4);g=ADl(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BQ(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new Ph;XZ();f=ATk;k.dR=b;k.f1=f;k.qq=h.length/f.j$|0;k.sQ
=j.length;f=b.createBuffer();k.mn=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.tc=null;f=b.createBuffer();k.sH=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.nK=k;a.vF=J3(e,B(53));f=new Pi;f.c$=b;a.ru=f;l=b.getParameter(3379);a.uF=l;f=new M;O(f);S(G(f,B(54)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(D0,6);i=g.data;d=new Vi;KZ(d,b,B(55),B(56),ATk);f=d.cd;d.ss=b.getUniformLocation(f,"uColor");a.i_=d;i[0]
=d;f=AQj(b,B(57));a.v_=f;i[1]=f;f=new PT;KZ(f,b,B(55),B(58),ATk);a.vT=f;i[2]=f;f=ARF(b);a.uX=f;i[3]=f;f=AQQ(b);a.fM=f;i[4]=f;f=ARP(b);a.g5=f;i[5]=f;a.v1=g;We(b,B(59));a.vU=new Tu;a.vl=c;}
function Gy(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cr;g=Yv(b,c,d,e);IG(f,g);h=f.bk.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eh(f,B(60));m=Eh(f,B(61));h=new Ku;n=J7(g);h.lB=b;h.ui=c;o=c|0;if(o!==c){b=new M;O(b);E$(G(b,B(62)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.nO=o;h.ur=d;h.uW=e;h.dd=i;h.dX=j;h.uf=l;h.iU=k;h.ms=n;h.pt=CX(i);h.vN=CX(h.dX);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.uo=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(63);}h.t8=b;return h;}
function Cq(){C.call(this);this.bf=null;}
function Ea(a,b){a.bf=b;}
function AO8(a,b){return 0;}
var IA=F();
var ASI=null;function IY(a,b,c){return b.i$(c);}
function Z$(){ASI=new IA;}
function YM(){var a=this;C.call(a);a.bY=null;a.lN=null;a.bD=null;a.dK=null;a.eA=null;a.f5=null;a.gI=null;a.i2=null;a.jJ=null;a.cK=null;}
function ARp(a){var b=new YM();ALu(b,a);return b;}
function ALu(a,b){a.bY=CH(R(Ck,0));a.lN=CH(R(Ck,0));a.bD=CH(R(CB,0));a.dK=CH(R(DN,0));a.eA=CH(R(ET,0));a.f5=CH(R(Fd,0));a.gI=CH(R(FV,0));a.i2=CH(R(Bi,0));a.jJ=CH(R(Bi,0));a.cK=b;}
function S7(a,b){var c,d,e,f;C$(a.cK);c=(Cn(!b.g6?a.lN:a.bY)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bw(b);if(f)break;if(b.js)break;e=e+1|0;}return f;}
function PU(a,b,c){var d,e,f;C$(a.cK);d=(Cn(a.f5)).data;e=d.length;f=0;while(f<e){if(d[f].hd(b,c))return 1;f=f+1|0;}return 0;}
function Vx(){C.call(this);this.mE=null;}
function ALq(a,b){var c;c=a.mE;if(S7(c.cb,WU(c,b,1)))DC(c,b);}
function Vy(){C.call(this);this.qU=null;}
function ALF(a,b){var c;c=a.qU;if(S7(c.cb,WU(c,b,0)))DC(c,b);}
function Vz(){C.call(this);this.ns=null;}
function AJ$(a,b){var c,d,e,f,g,h;c=a.ns;if(c.de!==null){d=Ev(c,b);e=c.cb;C$(e.cK);f=(Cn(e.bD)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bW(d))break a;h=h+1|0;}}DC(c,b);}}
function VA(){C.call(this);this.ta=null;}
function AJy(a,b){var c,d,e,f,g,h;c=a.ta;b.button;if(c.de!==null){d=Ev(c,b);c=c.cb;e=b.button;C$(c.cK);f=(Cn(c.bD)).data;g=f.length;h=0;a:{while(h<g){if(f[h].c2(d,e))break a;h=h+1|0;}}}}
function VB(){C.call(this);this.p4=null;}
function AJV(a,b){var c,d,e,f,g,h,i;c=a.p4;b.button;if(c.de!==null){d=Ev(c,b);e=c.cb;f=b.button;C$(e.cK);g=(Cn(e.bD)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cI(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DC(c,b);}}
function VC(){C.call(this);this.mY=null;}
function AMe(a,b){var c,d,e,f,g,h,i,j,k;c=a.mY;if(c.de!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cb;f=Ev(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C$(e.cK);i=(Cn(e.dK)).data;j=i.length;k=0;b:{while(k<j){if(i[k].c1(f,d,h))break b;k=k+1|0;}}DC(c,b);}}
function VD(){C.call(this);this.tn=null;}
function AHO(a,b){var c,d,e,f,g,h,i,j;c=a.tn;if(c.de!==null){d=Ev(c,b);e=c.cb;f=b.button;g=b.detail;C$(e.cK);h=(Cn(e.bD)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cn(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DC(c,b);}}
function VE(){C.call(this);this.qd=null;}
function APz(a,b){var c,d,e,f,g,h,i;c=a.qd;if(c.de!==null){d=Ev(c,b);e=c.cb;C$(e.cK);f=(Cn(e.eA)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bw(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DC(c,b);}}
function VF(){C.call(this);this.m7=null;}
function AG6(a,b){var c,d,e;b=a.m7.cb;c=(Cn(b.jJ)).data;d=c.length;e=0;while(e<d){c[e].q();e=e+1|0;}C$(b.cK);}
function VG(){C.call(this);this.sC=null;}
function ANj(a,b){var c,d,e;b=a.sC.cb;c=(Cn(b.i2)).data;d=c.length;e=0;while(e<d){c[e].q();e=e+1|0;}C$(b.cK);}
function WP(){C.call(this);this.rW=null;}
function AO9(a,b){var c;c=a.rW;if(c.de!==null)Ev(c,b);}
function WQ(){C.call(this);this.q9=null;}
function AJL(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.q9;if(Mm()===c.gJ){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cn(c.cb.gI)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].f9();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cb.cK;m=new M0;m.sK=k;m.sL=l;g.getAsString(Bk(m,"accept"));DC(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(64)),k),B(65)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function WR(){C.call(this);this.l8=null;}
function AKc(a,b){var c;c=a.l8;if(Mm()===c.gJ&&PU(c.cb,SX(c,b),0))DC(c,b);}
function WS(){C.call(this);this.sP=null;}
function ALW(a,b){var c;c=a.sP;if(Mm()===c.gJ&&PU(c.cb,SX(c,b),1))DC(c,b);}
var Tj=F(0);
var Tw=F();
function LW(a,b,c){var d,e,f;d=new Qp;ASZ=ASZ+1|0;d.la=b;d.ko=c;e=(DX()).createElement("canvas");d.i9=e;f=b;e.width=f;e=d.i9;f=c;e.height=f;d.bk=d.i9.getContext("2d");return d;}
var Tu=F();
function AIQ(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function LO(){var a=this;C.call(a);a.bb=null;a.n=null;a.bU=null;}
function ACj(){var a=this;C.call(a);a.gN=null;a.h5=null;a.gB=0;}
function CH(a){var b=new ACj();AHK(b,a);return b;}
function AHK(a,b){a.gN=b;}
function X(a,b){var c,d,e;c=a.gB;d=a.gN;if(c==d.data.length)a.gN=Dc(d,c+4|0);d=a.gN.data;e=a.gB;a.gB=e+1|0;d[e]=b;a.h5=null;}
function Cn(a){var b;b=a.h5;if(!(b!==null&&b.data.length==a.gB))a.h5=Dc(a.gN,a.gB);return a.h5;}
var If=F(0);
var Ck=F(0);
var CB=F(0);
function AIV(a,b){return 0;}
function AMd(a,b,c,d){return 0;}
function AE4(a,b,c){return 0;}
function ADU(a,b,c){return 0;}
var DN=F(0);
var ET=F(0);
var Fd=F(0);
var HG=F(0);
var FV=F(0);
function Pr(){C.call(this);this.uz=null;}
function Bh(){var a=this;C.call(a);a.b=0;a.a=0;}
function B0(a,b){var c=new Bh();YF(c,a,b);return c;}
function YF(a,b,c){a.b=b;a.a=c;}
function CG(a,b){a.b=b.b;a.a=b.a;}
function Bg(a,b,c){a.b=b;a.a=c;}
function W7(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);S(G(S(G(d,B(66)),b),B(67)),c);return N(d);}
function Kx(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function VJ(){var a=this;C.call(a);a.pT=0;a.pU=0;a.pS=0;a.pP=0;}
var ABy=F();
var X2=F(0);
function Pi(){C.call(this);this.c$=null;}
function KX(){var a=this;C.call(a);a.cd=null;a.vP=null;}
function AAA(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(68):B(69);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bu(By(),f);b=new Bn;Bl(b,f);J(b);}
function D0(){var a=this;KX.call(a);a.m6=null;a.oj=null;a.k4=null;}
function ATl(a,b,c,d){var e=new D0();KZ(e,a,b,c,d);return e;}
function KZ(a,b,c,d,e){var f,g,h,i,j,k;a.vP=e;f=AAA(b,35633,c);d=AAA(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.cd=g;h=e.qF.data;i=h.length;j=0;while(j<i){c=h[j];d=a.cd;k=c.gQ;c=c.ov;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.cd;b.linkProgram(c);if(b.getProgramParameter(c,35714)){We(b,B(70));a.k4=new Bh;c=a.cd;a.m6=b.getUniformLocation(c,"uResolution");c=a.cd;a.oj=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bn;c=new M;O(c);G(G(c,B(71)),d);Bl(b,N(c));J(b);}
function YO(a,b,c){var d,e,f;if(!Kx(a.k4,c)){CG(a.k4,c);d=a.m6;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function Lw(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.oj;b.uniform4f(e,i,l,h,j);YO(a,b,f);}
function Vi(){D0.call(this);this.ss=null;}
function Et(){D0.call(this);this.pY=null;}
function AQj(a,b){var c=new Et();S1(c,a,b);return c;}
function ATm(a,b,c){var d=new Et();S8(d,a,b,c);return d;}
function S1(a,b,c){S8(a,b,B(55),c);}
function S8(a,b,c,d){XZ();KZ(a,b,c,d,ATk);c=a.cd;a.pY=b.getUniformLocation(c,"sDiffuse");}
function To(a,b,c){var d;d=a.pY;b.uniform1i(d,0);b.activeTexture(33984);c=c.er;b.bindTexture(3553,c);}
var PT=F(D0);
function ABg(){Et.call(this);this.uK=null;}
function ARF(a){var b=new ABg();AHb(b,a);return b;}
function AHb(a,b){var c;S1(a,b,B(72));c=a.cd;a.uK=b.getUniformLocation(c,"uContrast");}
function AAS(){var a=this;Et.call(a);a.rX=null;a.ok=null;a.mN=null;a.nx=null;}
function AQQ(a){var b=new AAS();AL_(b,a);return b;}
function AL_(a,b){var c;S8(a,b,B(73),B(74));c=a.cd;a.rX=b.getUniformLocation(c,"uTexTransform");c=a.cd;a.ok=b.getUniformLocation(c,"uColor");c=a.cd;a.mN=b.getUniformLocation(c,"uBgColor");c=a.cd;a.nx=b.getUniformLocation(c,"uContrast");}
function Yi(){var a=this;Et.call(a);a.td=null;a.tb=null;a.oR=null;}
function ARP(a){var b=new Yi();AGF(b,a);return b;}
function AGF(a,b){var c,d;S1(a,b,B(75));c=a.cd;a.td=b.getUniformLocation(c,"uColorB");d=a.cd;a.tb=b.getUniformLocation(d,"uColorF");d=a.cd;a.oR=b.getUniformLocation(d,"uContrast");}
var QY=F(0);
var AC1=F(0);
function HN(b,c,d){var e,f,g,h;e=d.bg;f=d.bu;g=d.bc;h=d.bv;b.uniform4f(c,e,f,g,h);}
function We(b,c){var d,e;d=b.getError();if(d){b=By();e=new M;O(e);S(G(e,c),d);Bu(b,N(e));}}
function Pf(){var a=this;C.call(a);a.t9=null;a.t_=null;a.t$=null;}
function Ph(){var a=this;C.call(a);a.dR=null;a.f1=null;a.mn=null;a.tc=null;a.sH=null;a.qq=0;a.sQ=0;}
function Cr(){var a=this;C.call(a);a.t5=null;a.cJ=0;}
function DE(a,b,c){a.t5=b;a.cJ=c;}
function Gu(){var a=this;Cr.call(a);a.qF=null;a.lQ=null;a.pB=null;a.j$=0;a.od=0;a.q3=0;}
var ATk=null;var ATn=null;function XZ(){XZ=Br(Gu);AIm();}
function AIm(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gu;c=R(DM,2);d=c.data;AOs();d[0]=ATo;d[1]=ATp;XZ();DE(b,B(76),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];XB();switch(ATq.data[l.lj.cJ]){case 1:f=f+l.ez|0;h=h+1|0;break a;case 2:e=e+l.ez|0;g=g+1|0;break a;default:}}i=i|1<<l.gQ;k=k+1|0;}b.qF=c;b.j$=e;b.od=f;b.q3=i;c=R(DM,g);m=c.data;b.lQ=c;c=R(DM,h);n=c.data;b.pB=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];XB();switch(ATq.data[l.lj.cJ]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}ATk=b;c=R(Gu,1);c.data[0]=b;ATn=c;}
var Lv=F(0);
var Sm=F(0);
var TL=F(0);
var Gb=F();
function IQ(){Gb.call(this);this.tC=null;}
function Zf(){var a=this;IQ.call(a);a.vD=0;a.kk=0;a.h0=null;a.jO=null;a.ro=null;}
function AKm(a,b){var c=new Zf();AOa(c,a,b);return c;}
function AOa(a,b,c){a.tC=b;b=new M;O(b);a.h0=b;a.jO=BQ(32);a.vD=c;Y5();a.ro=ATr;}
function SB(a,b,c,d){var e,$$je;e=a.tC;if(e===null)a.kk=1;if(!(a.kk?0:1))return;a:{try{e.jE(b,c,d);break a;}catch($$e){$$je=D9($$e);if($$je instanceof HY){}else{throw $$e;}}a.kk=1;}}
function Nh(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ZY(b,c,d-c|0);e=EZ(Ba(16,W(e.length,1024)));g=ZK(e,0,e.data.length);h=a.ro;i=new OG;b=EZ(1);j=b.data;j[0]=63;GP();k=ATs;i.k7=k;i.kp=k;c=j.length;if(c&&c>=i.lR){i.t0=h;i.ot=b.e_();i.vw=2.0;i.lR=4.0;i.nP=BQ(512);i.mX=EZ(512);k=ATt;if(k===null){i=new BC;Bl(i,B(77));J(i);}i.k7=k;i.kp=k;a:while(true){if(i.hW==3){f=new DP;U(f);J(f);}i.hW=2;b:{while(true){try{k=XP(i,f,g);}catch($$e){$$je=D9($$e);if($$je instanceof Bn){f=$$je;break a;}else{throw $$e;}}if(HM(k))
{d=B4(f);if(d<=0)break b;k=DQ(d);}else if(GM(k))break;h=!Lh(k)?i.k7:i.kp;c:{if(h!==ATt){if(h===ATu)break c;else break b;}d=B4(g);b=i.ot;l=b.data.length;if(d<l){k=ATv;break b;}V0(g,b,0,l);}Ey(f,f.Q+JC(k)|0);}}l=GM(k);SB(a,e,0,g.Q);Nf(g);if(!l){while(true){d=i.hW;if(d!=2&&d!=4){f=new DP;U(f);J(f);}f=ATw;if(f===f)i.hW=3;l=GM(f);SB(a,e,0,g.Q);Nf(g);if(!l)break;}return;}}J(AFT(f));}i=new BC;Bl(i,B(78));J(i);}
function Bu(a,b){var c,d,e,f,g,h,i,j;BA(BY(a.h0,b),10);b=a.h0;c=b.K;d=a.jO;if(c>d.data.length)d=BQ(c);e=0;f=0;if(e>c){b=new Bw;Bl(b,B(79));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.z.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Nh(a,d,0,c);a.h0.K=0;}
function F0(){Gb.call(this);this.vm=null;}
function WX(a){a.vm=EZ(1);}
var KK=F(F0);
var AS2=null;function AII(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AA6(){var b;b=new KK;WX(b);AS2=b;}
function DM(){var a=this;Cr.call(a);a.ov=null;a.lj=null;a.ez=0;a.nR=0;a.gQ=0;}
var ATo=null;var ATp=null;var ATx=null;function AOs(){AOs=Br(DM);AHw();}
function AQ2(a,b,c,d,e,f,g){var h=new DM();Va(h,a,b,c,d,e,f,g);return h;}
function Va(a,b,c,d,e,f,g,h){AOs();DE(a,b,c);a.ov=d;a.lj=e;a.ez=f;a.nR=g;a.gQ=h;}
function AHw(){var b;b=new DM;AAm();Va(b,B(80),0,B(81),ATy,2,0,0);ATo=b;b=AQ2(B(82),1,B(83),ATy,2,0,1);ATp=b;ATx=H(DM,[ATo,b]);}
function IH(){var a=this;C.call(a);a.tM=null;a.uN=null;}
function ABl(b){var c,d;if(Fe(b))J(Y$(b));if(!ABn(L(b,0)))J(Y$(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ABn(d))break a;else J(Y$(b));}}c=c+1|0;}}
function ABn(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Lz=F(IH);
var ATr=null;function Y5(){Y5=Br(Lz);AGC();}
function ABC(a){var b,c;b=new SC;b.ev=B(84);GP();c=ATs;b.gu=c;b.le=c;b.uC=a;b.l0=0.3333333432674408;b.uY=0.5;b.m2=EZ(512);b.qT=BQ(512);return b;}
function AGC(){var b,c,d,e,f;b=new Lz;Y5();c=R(Bv,0);d=c.data;ABl(B(85));e=d.length;f=0;while(f<e){ABl(d[f]);f=f+1|0;}b.tM=B(85);b.uN=c.e_();ATr=b;}
var JN=F();
var ATz=null;var ATq=null;function XB(){XB=Br(JN);ALg();}
function ALg(){var b,c;AAm();b=BH((ATA.e_()).data.length);c=b.data;ATq=b;c[ATB.cJ]=1;c[ATy.cJ]=2;AAo();c=BH((ATC.e_()).data.length);b=c.data;ATz=c;b[ATD.cJ]=1;b[ATE.cJ]=2;}
function Op(){var a=this;C.call(a);a.e2=null;a.lG=null;a.jq=null;a.rc=null;a.oc=null;a.oo=null;}
function Zi(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.e2,b,c));}
function Mf(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.lG[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.e2,b,d));f=e.data;EE();d=f.length;Y5();g=ATr;h=ZK(e,0,d);a:{try{i=ABC(g);GP();g=X$(AAE(ACb(i,ATt),ATt),h);break a;}catch($$e){$$je=D9($$e);if($$je instanceof FC){g=$$je;}else{throw $$e;}}h=new V$;h.iE=1;h.i5=1;h.g4=B(86);h.kq=g;J(h);}if(!g.Q&&g.da==g.lC)c.bP=g.gP;else{f=BQ(B4(g));e=f.data;c.bP=f;MQ(g,f,0,e.length);}return c;}
function Mo(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.jq[e]){e=e+1|0;}d=e-d|0;G2(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.e2,b,d)));return c;}
var Gx=F(Cr);
var ATB=null;var ATy=null;var ATA=null;function AAm(){AAm=Br(Gx);AF8();}
function AGv(a,b){var c=new Gx();ABD(c,a,b);return c;}
function ABD(a,b,c){AAm();DE(a,b,c);}
function AF8(){var b;ATB=AGv(B(87),0);b=AGv(B(88),1);ATy=b;ATA=H(Gx,[ATB,b]);}
var F5=F(Cr);
var ATD=null;var ATE=null;var ATC=null;function AAo(){AAo=Br(F5);AGJ();}
function APF(a,b){var c=new F5();X7(c,a,b);return c;}
function X7(a,b,c){AAo();DE(a,b,c);}
function AGJ(){var b;ATD=APF(B(89),0);b=APF(B(90),1);ATE=b;ATC=H(F5,[ATD,b]);}
var UQ=F(DS);
function ABq(){BC.call(this);this.t4=null;}
function Y$(a){var b=new ABq();ANJ(b,a);return b;}
function ANJ(a,b){U(a);a.t4=b;}
var Ly=F(0);
function Wy(){C.call(this);this.og=null;}
function AMR(a,b){a.og.setPointerCapture(b.pointerId);}
function WA(){C.call(this);this.nk=null;}
function AEI(a,b){a.nk.releasePointerCapture(b.pointerId);}
function GG(){var a=this;C.call(a);a.lC=0;a.Q=0;a.da=0;a.gY=0;}
function U$(a,b){a.gY=(-1);a.lC=b;a.da=b;}
function Ey(a,b){var c,d,e;if(b>=0&&b<=a.da){a.Q=b;if(b<a.gY)a.gY=0;return a;}c=new BC;d=a.da;e=new M;O(e);BA(S(G(S(G(e,B(91)),b),B(92)),d),93);Bl(c,N(e));J(c);}
function B4(a){return a.da-a.Q|0;}
function DD(a){return a.Q>=a.da?0:1;}
var Rg=F(0);
var Kv=F(GG);
function ACE(b){var c,d;if(b>=0)return ALI(0,b,BQ(b),0,b,0);c=new BC;d=new M;O(d);S(G(d,B(93)),b);Bl(c,N(d));J(c);}
function ZY(b,c,d){return ALI(0,b.data.length,b,c,c+d|0,0);}
function MQ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bw;i=new M;O(i);S(G(S(G(i,B(94)),g),B(95)),f);Bl(h,N(i));J(h);}if(B4(a)<d){j=new K_;U(j);J(j);}if(d<0){j=new Bw;k=new M;O(k);G(S(G(k,B(96)),d),B(97));Bl(j,N(k));J(j);}g=a.Q;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.gP.data[m+a.lp|0];l=l+1|0;c=n;m=o;}a.Q=g+d|0;return a;}}b=b.data;j=new Bw;d=b.length;k=new M;O(k);BA(S(G(S(G(k,B(98)),c),B(92)),d),41);Bl(j,N(k));J(j);}
function Jy(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lI){b=new Is;U(b);J(b);}e=d-c|0;if(B4(a)<e){b=new Hu;U(b);J(b);}if(c>I(b)){f=new Bw;d=I(b);b=new M;O(b);BA(S(G(S(G(b,B(99)),c),B(92)),d),41);Bl(f,N(b));J(f);}if(d>I(b)){f=new Bw;c=I(b);b=new M;O(b);S(G(S(G(b,B(100)),d),B(101)),c);Bl(f,N(b));J(f);}if(c>d){b=new Bw;f=new M;O(f);S(G(S(G(f,B(99)),c),B(102)),d);Bl(b,N(f));J(b);}g=a.Q;while(c<d){h=g+1|0;i=c+1|0;Rn(a,g,L(b,c));g=h;c=i;}a.Q=a.Q+e|0;return a;}
function Jd(){var a=this;GG.call(a);a.kj=0;a.kX=null;a.va=null;}
function ZK(b,c,d){var e,f,g;e=b.data;f=new VZ;g=e.length;d=c+d|0;U$(f,g);AIs();f.va=ATF;f.kj=0;f.kX=b;f.Q=c;f.da=d;f.vd=0;f.mi=0;return f;}
function V0(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mi){e=new Is;U(e);J(e);}if(B4(a)<d){e=new Hu;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bw;j=new M;O(j);S(G(S(G(j,B(103)),h),B(95)),g);Bl(i,N(j));J(i);}if(d<0){e=new Bw;i=new M;O(i);G(S(G(i,B(96)),d),B(97));Bl(e,N(i));J(e);}h=a.Q;k=h+a.kj|0;l=0;while(l<d){b=a.kX.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Q=h+d|0;return a;}}b=b.data;e=new Bw;d=b.length;i=new M;O(i);BA(S(G(S(G(i,B(98)),c),B(92)),d),41);Bl(e,N(i));J(e);}
function Nf(a){a.Q=0;a.da=a.lC;a.gY=(-1);return a;}
function Hj(){C.call(this);this.v5=null;}
var ATu=null;var ATt=null;var ATs=null;function GP(){GP=Br(Hj);AJO();}
function ACl(a){var b=new Hj();ABi(b,a);return b;}
function ABi(a,b){GP();a.v5=b;}
function AJO(){ATu=ACl(B(104));ATt=ACl(B(105));ATs=ACl(B(106));}
var Mv=F(Cq);
function AJH(a){}
function AIc(a,b,c){}
var ACI=F();
function ANs(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(107)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(KG(b)){case -1570047148:if(!Bo(b,B(108)))break a;d=15;break a;case -1519338717:if(!Bo(b,B(109)))break a;d=1;break a;case -1509980539:if(!Bo(b,B(110)))break a;d=11;break a;case -1073555521:if(!Bo(b,B(111)))break a;d=12;break a;case -811765794:if(!Bo(b,B(112)))break a;d=4;break a;case -785237654:if(!Bo(b,B(113)))break a;d=9;break a;case -631889171:if(!Bo(b,B(114)))break a;d=7;break a;case -439438829:if
(!Bo(b,B(115)))break a;d=16;break a;case 3343967:if(!Bo(b,B(116)))break a;d=8;break a;case 3556498:if(!Bo(b,B(117)))break a;d=3;break a;case 485517998:if(!Bo(b,B(118)))break a;d=5;break a;case 544901384:if(!Bo(b,B(119)))break a;d=2;break a;case 1030621992:if(!Bo(b,B(120)))break a;d=14;break a;case 1465713255:if(!Bo(b,B(121)))break a;d=6;break a;case 1554501643:if(!Bo(b,B(122)))break a;d=13;break a;case 1609169232:if(!Bo(b,B(123)))break a;d=10;break a;default:}}b:{switch(d){case 1:break;case 2:case 3:b=new Sc;break b;case 4:b
=new Sb;break b;case 5:b=new Sa;break b;case 6:b=new R_;break b;case 7:case 8:b=new R$;break b;case 9:b=new R9;break b;case 10:b=new R8;break b;case 11:b=new R7;break b;case 12:b=new R6;break b;case 13:b=new PS;break b;case 14:b=new PQ;break b;case 15:b=new PR;break b;case 16:b=new PO;break b;default:b=new PP;break b;}b=new Sd;}return b;}
var ZX=F();
var Jr=F(Kv);
function ZC(){var a=this;Jr.call(a);a.lI=0;a.lp=0;a.gP=null;}
function ALI(a,b,c,d,e,f){var g=new ZC();APM(g,a,b,c,d,e,f);return g;}
function APM(a,b,c,d,e,f,g){U$(a,c);a.Q=e;a.da=f;a.lp=b;a.lI=g;a.gP=d;}
function Rn(a,b,c){a.gP.data[b+a.lp|0]=c;}
function Ki(){var a=this;C.call(a);a.t0=null;a.ot=null;a.vw=0.0;a.lR=0.0;a.k7=null;a.kp=null;a.hW=0;}
function K5(){var a=this;C.call(a);a.f3=0;a.hy=0;}
var ATw=null;var ATv=null;function XW(a,b){var c=new K5();Yp(c,a,b);return c;}
function Yp(a,b,c){a.f3=b;a.hy=c;}
function HM(a){return a.f3?0:1;}
function GM(a){return a.f3!=1?0:1;}
function J9(a){return !PK(a)&&!Lh(a)?0:1;}
function PK(a){return a.f3!=2?0:1;}
function Lh(a){return a.f3!=3?0:1;}
function JC(a){var b;if(J9(a))return a.hy;b=new E8;U(b);J(b);}
function DQ(b){return XW(2,b);}
function Uu(a){var b,c;switch(a.f3){case 0:b=new Pk;U(b);J(b);case 1:b=new Wd;U(b);J(b);case 2:b=new Uk;c=a.hy;U(b);b.wi=c;J(b);case 3:b=new O$;c=a.hy;U(b);b.we=c;J(b);default:}}
function YQ(){ATw=XW(0,0);ATv=XW(1,0);}
var XL=F();
var KJ=F(0);
var MF=F();
function AGR(a,b){return b.arrayBuffer();}
var ME=F();
function AKU(a,b){var c,d;c=new Om;d=new Ok;return $rt_globals.WebAssembly.instantiate(b,AIP(Bk(c,"f"),Bk(d,"f")));}
var MD=F();
function ALA(a,b){AEC(b);}
var MC=F();
function AFi(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var Sd=F();
function AK_(a,b){return AR9(b);}
var Sc=F();
function AEk(a,b){return AQm(b);}
var Sb=F();
function AHV(a,b){var c,d,e;c=new Ve;Ho(c,b);d=new T4;d.lk=new Bh;d.jH=new Bh;c.p7=d;c.df=XS();c.cv=XS();c.dO=L$(c.P);X(c.P.dB,c);d=b.n.bY;e=new Sf;e.r2=c;X(d,e);X(b.n.bD,c);b=b.n.eA;d=new Si;d.qL=c;X(b,d);RO(c.cv);b=EH(B(124),25.0);c.qS=b;d=c.dO;d.e0=b;Iu(d,Fm());BF(c.fY,Cv(43));b=Fm();HJ(c.df,b);HJ(c.cv,b);b=c.df;b.iV=new Sg;d=c.cv;d.iV=new Se;d.jh=new V_;d.rG=new Wa;Kh(b,(MX(0)).ig);Kh(c.cv,(MX(0)).ig);return c;}
var Sa=F();
function AHR(a,b){var c,d,e;c=new Wq;Ho(c,b);c.ka=EH(B(125),15.0);d=ACM();c.dY=d;X(c.P.dB,d);X(c.P.dB,c);BF(c.fY,Cv(43));d=L$(c.P);c.fK=d;Iu(d,Fm());c.fK.e0=EH(B(124),25.0);d=b.n.bY;e=new NT;e.tV=c;X(d,e);d=b.n.eA;e=new NU;e.o2=c;X(d,e);X(b.n.bD,XR(c.fK));X(b.n.bD,c.dY);b=b.n.dK;d=c.dY;BI(d);e=new NV;e.sn=d;X(b,e);return c;}
var R_=F();
function AIu(a,b){var c,d,e;c=new W0;Ho(c,b);c.fg=Cl();c.eF=Cl();c.nH=Bm(B(126));c.hQ=ANG();c.fD=0;d=c.P.dB;e=new S9;e.l$=c;X(d,e);X(b.n.bD,c);d=b.n.bY;e=new S$;e.oZ=c;X(d,e);b=G0(b.bb,B(124),35);c.iT=b;c.hB=Wr(DZ(b));BF(c.fY,Bm(B(127)));return c;}
var R$=F();
function AEq(a,b){var c,d,e,f;c=new Ov;Ea(c,b);c.fy=AJ3();c.dH=0;c.qA=500;c.sV=W3(0,0,0,255);c.ll=20;c.s9=20;c.nz=ABO();d=b.n.bD;e=new Vt;e.ic=c;f=new WZ;f.qk=e;e.pL=f;X(d,e);d=b.n.dK;e=new RR;e.m$=c;X(d,e);c.dJ=b.bb;c.rC=TI(b.bU);SI(c.fy,G0(c.dJ,B(124),c.s9),c.ll,c.dJ);c.gt=G5();return c;}
var R9=F();
function AF3(a,b){var c,d;c=new P0;Ga(c,b);b=b.n.bY;d=new Pl;d.sY=c;X(b,d);return c;}
var R8=F();
function ALp(a,b){return ARK(b);}
var R7=F();
function AOR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new VU;Ga(c,b);c.dv=E5(0,0,300,300);c.es=RI(0,0,3,3);d=b.bb;b=b.n.bD;e=new SQ;e.kD=c;X(b,e);b=Y3(d);c.or=b;F8(c.dv,b);GI(c.dv);b=c.dv.bV;Dp();BF(b,ATG);BF(c.dv.bL,Cw(204,120,50));AAo();e=ATE;f=EZ((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CS(d);XB();switch(ATz.data[e.cJ]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Ei;U(b);J(b);}b:
{My(m,5,5,h);b=m.dG.c$;switch(ATz.data[e.cJ]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Ei;U(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.jY=m;Bg(c.es.v,Cb(m),C3(c.jY));BF(c.es.bV,c.k$);return c;}
var R6=F();
function APK(a,b){var c,d,e;c=new Rh;Ga(c,b);c.fW=E5(0,0,300,300);c.jx=new Bh;c.hS=new Bh;c.hb=new Bh;d=b.bb;b=b.n.bD;e=new U0;e.iY=c;X(b,e);b=Y3(d);c.qf=b;F8(c.fW,b);GI(c.fW);b=c.fW.bV;Dp();BF(b,ATG);BF(c.fW.bL,Cw(204,120,50));return c;}
var PS=F();
function AJk(a,b){var c,d,e,f;c=new N4;Ea(c,b);c.u2=20;c.wv=11;c.uI=220;c.iC=new Bh;c.vo=5000;c.gf=1;c.e4=H(Ii,[Cv(0),Cv(255)]);c.dQ=b.bb;d=b.n.bD;e=new Th;e.iP=c;f=new OV;f.mA=e;e.oD=f;X(d,e);b=b.n.dK;d=new Ne;d.sq=c;X(b,d);b=CL(c.dQ,200,220);c.jp=b;FQ(b,B(124),20.0);b=CL(c.dQ,200,20);c.eM=b;FQ(b,B(124),20.0);c.hm=G5();return c;}
var PQ=F();
function ADj(a,b){var c,d,e;c=new H2;Ga(c,b);X(b.n.bD,c);d=b.n.bY;e=new Rt;e.qn=c;X(d,e);X(b.n.f5,new Rs);d=b.n.f5;e=new Rq;e.oi=c;X(d,e);X(b.n.gI,new Rp);d=b.n.gI;e=new Rr;e.mF=c;X(d,e);b=!WC(b.bU)?B(128):B(129);d=new M;O(d);G(G(d,B(130)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var PR=F();
function AGN(a,b){var c,d,e,f,g,h,i,j;c=new Po;Ea(c,b);c.mP=Cv(20);c.eG=E5(0,0,300,300);d=b.n.bY;e=new QZ;e.v6=c;X(d,e);b=b.bb;d=G0(b,B(10),88);Cu(b.cr,d);f=Eh(b.cr,B(131));g=Eh(b.cr,B(132));if(f>g)g=f;h=CX(g);i=Jt(d,1.1799999475479126);j=By();e=new M;O(e);S(G(S(G(e,B(133)),h),B(134)),i);Bu(j,N(e));e=CL(b,h,i*2|0);c.hC=e;Cu(e,d);Cf(c.hC,B(131),0.0,d.dd);Cf(c.hC,B(132),0.0,i+d.dd);b=CS(b);c.k2=b;CM(b,c.hC);F8(c.eG,c.k2);GI(c.eG);b=c.eG.bV;Dp();BF(b,ATG);BF(c.eG.bL,ATH);return c;}
var PO=F();
function AJC(a,b){var c,d,e,f;c=new Vu;Ho(c,b);c.rB=EH(B(125),20.0);d=ACM();c.dL=d;X(c.P.dB,d);X(c.P.dB,c);BF(c.fY,Cv(43));d=L$(c.P);c.fh=d;Iu(d,Fm());c.fh.e0=EH(B(124),25.0);d=b.n.bY;e=new PG;e.v3=c;X(d,e);d=b.n.eA;e=new PH;e.o4=c;X(d,e);X(b.n.bD,XR(c.fh));X(b.n.bD,c.dL);d=b.n.bD;e=c.P.cq;f=new Qv;f.lX=e;X(d,f);b=b.n.dK;d=c.dL;BI(d);e=new PI;e.qo=d;X(b,e);return c;}
var PP=F();
function AM$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Qi;W9(c,b);d=c.cF;e=new H3;f=AOW(null,null,B(135),null);g=R(Bv,8);h=I(B(136));i=0;j=0;k=h+1|0;while(true){l=Gp(B(136),10,j);m=l>=0?B8(B(136),j,l):Db(B(136),j);n=g.data;o=i+1|0;j=n.length;if(j==i)g=Dc(g,j*2|0);g.data[i]=m;g=g;j=l<0?k:l+1|0;if(j>h)break;i=o;}if(g.data.length!=o)g=Dc(g,o);PJ(e,g,B(137),f);d.t6=null;Ud(d);b=d.e;d.e=e;d.ep=Fu();p=Z4(Df(d.e));if(p!==null){f=Cg(d);m=new T8;m.qJ=d;n=R(C,1);n.data[0]=F7(d.e.g);C1(f,m,p,n);}n=(Cn(d.d1.l9)).data;i
=n.length;j=0;while(j<i){n[j].lJ(b,e);j=j+1|0;}return c;}
function GO(){var a=this;C.call(a);a.bx=0;a.ch=0;a.c4=0;a.kA=0;}
function ATI(a,b,c,d){var e=new GO();Ts(e,a,b,c,d);return e;}
function Ts(a,b,c,d,e){a.bx=d;a.ch=b;a.c4=c;a.kA=e;}
function Ob(){var a=this;GO.call(a);a.dm=null;a.bj=0;a.g6=0;a.qm=0;a.js=0;}
function ACx(b){var c,d,e;c=b.ch;d=c&&!b.bx&&!b.c4&&!b.kA?1:0;a:{if(d){d=b.bj;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bx&&!c&&!b.c4&&!b.kA?1:0;d=d&&b.bj==46?1:0;}b:{if(!d){e=b.bj;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.js=1;}return 0;}
var ABI=F();
function Vl(b,c){return (b+(c/2|0)|0)/c|0;}
function O1(b,c,d){if(b<(2147483647/c|0))return Vl(Bb(b,c),d);return 0.5+c*b/d|0;}
function H8(b,c){return ((b+c|0)-1|0)/c|0;}
function GW(b){return b+0.5|0;}
function CX(b){return b+0.5|0;}
function Eo(b,c,d){return Ba(b,W(c,d));}
function LJ(){var a=this;GO.call(a);a.k=null;a.tN=null;}
var Tl=F(0);
function M0(){var a=this;C.call(a);a.sK=null;a.sL=null;}
function AJc(a,b){var c,d;c=a.sK;d=a.sL;$rt_globals.console.info("paste plain string "+b);c.m(Fs(b));C$(d);}
function T5(){C.call(this);this.s_=null;}
function Vk(a,b){a.s_.clipboardData.setData("text/plain",$rt_ustr(b));}
function VZ(){var a=this;Jd.call(a);a.vd=0;a.mi=0;}
var AAF=F();
function JL(){C.call(this);this.vA=null;}
var ATF=null;var ATJ=null;function AIs(){AIs=Br(JL);APC();}
function AGp(a){var b=new JL();W8(b,a);return b;}
function W8(a,b){AIs();a.vA=b;}
function APC(){ATF=AGp(B(138));ATJ=AGp(B(139));}
var Vb=F(0);
function RS(){C.call(this);this.gZ=null;}
function Fy(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gZ));}
function En(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.gZ));}
function AFO(a){var b,c;b=a.gZ.byteLength;c=new M;O(c);G(S(G(c,B(140)),b),B(141));return N(c);}
var TE=F(0);
function Kt(){var a=this;C.call(a);a.gi=null;a.eD=null;a.lm=null;}
function AAB(a,b){var c=new Kt();AIn(c,a,b);return c;}
function AQa(a,b,c){var d=new Kt();Ng(d,a,b,c);return d;}
function Xh(b){var c,d,e,f,g,h,i,j,k;c=new Kt;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=TM(E(DV),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=J7(f[h]);h=h+1|0;}}j=g.data;h=j.length;if(!h)i=R(Bv,0);else{i=R(Bv,h-1|0);g=i.data;h=0;k=g.length;while(h<k){g[h]=Fs(Jf(j[h]));h=h+1|0;}}}else i=R(Bv,0);Ng(c,d,b,i);return c;}
function AIn(a,b,c){Ng(a,b,c,R(Bv,0));}
function Ng(a,b,c,d){a.gi=b;a.eD=c;a.lm=d;}
function I4(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Es(a);e=new M;O(e);G(G(e,B(142)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function Es(a){var b;b=a.gi;return Fs(b!==null?b.name:a.eD.name);}
function AIO(a){var b,c,d,e,f;if(a.eD===null){b=a.lm;c=Es(a);d=Yt(b);e=new M;O(e);G(G(G(e,d),B(143)),c);c=N(e);}else{b=a.lm;c=Es(a);f=I4(a,a.eD.size);d=Yt(b);e=new M;O(e);S(G(G(G(G(e,d),B(143)),c),B(144)),f);c=N(e);}return c;}
function Ke(){var a=this;Ki.call(a);a.nP=null;a.mX=null;}
function XP(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.nP;e=0;f=0;g=a.mX;a:{while(true){if((e+32|0)>f&&DD(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=W(B4(b)+j|0,i.length);MQ(b,d,j,f-j|0);e=0;}if(!DD(c)){k=!DD(b)&&e>=f?ATw:ATv;break a;}i=g.data;j=W(B4(c),i.length);l=new MZ;l.ma=b;l.oC=c;k=Z9(a,d,e,f,g,0,j,l);e=l.rQ;j=l.s2;if(k===null){if(!DD(b)&&e>=f)k=ATw;else if(!DD(c)&&e>=f)k=ATv;}V0(c,g,0,j);if(k!==null)break;}}Ey(b,b.Q-(f-e|0)|0);return k;}
var OG=F(Ke);
function Z9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(K4(h,2))break a;i=ATv;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Lq(l)){if((f+3|0)>g){j=j+(-1)|0;if(K4(h,3))break a;i=ATv;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CC(l)){i=DQ(1);break a;}if
(j>=d){if(DD(h.ma))break a;i=ATw;break a;}c=j+1|0;m=k[j];if(!CZ(m)){j=c+(-2)|0;i=DQ(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(K4(h,4))break a;i=ATv;break a;}k=e.data;o=El(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.rQ=j;h.s2=f;return i;}
var HY=F(DS);
function JX(){var a=this;Cq.call(a);a.p1=null;a.eY=null;a.cF=null;a.fI=null;a.pb=null;a.ls=null;}
function AR9(a){var b=new JX();W9(b,a);return b;}
function W9(a,b){var c,d,e,f,g;Ea(a,b);a.p1=OA(0,0,64);a.pb=new Bh;a.ls=new Bh;c=AEi(b);a.eY=c;d=new TX;d.p$=EH(B(125),16.0);d.di=c;d.dx=ACM();e=L$(d.di);d.b2=e;e.e0=EH(B(125),17.0);a.fI=d;c=ART(a.eY,d);a.cF=c;d=a.eY;f=d.id.dk!==(DX()).activeElement?0:1;if(f)Ji(d);d.eh=c;if(f)Kb(d);X(b.n.bD,a.fI);X(b.n.dK,a.fI);X(b.n.bD,a.cF);X(b.n.bY,new Q4);c=b.n.bY;d=new Q8;d.sO=a;X(c,d);c=b.n.bY;d=new Jw;g=a.cF;BI(g);e=new Q7;e.lS=g;Uy(d,b,null,e);X(c,d);c=b.n.bY;d=a.eY;BI(d);g=new Q6;g.ol=d;X(c,g);c=b.n.f5;d=a.cF;BI(d);g
=new Q5;g.tv=d;X(c,g);c=b.n.gI;d=new Q_;d.mz=a;X(c,d);c=b.n.dK;d=new Q$;d.rj=a;X(c,d);b=b.n.eA;c=new Q9;c.sg=a;X(b,c);SW(a);}
function AFt(a,b){var c,d,e,f;c=a.cF;d=c.e.g;e=d.fi;f=d.ck;e=e!=f&&b-d.om>0.03125?1:0;if(e&&c.ku!=f){c.ku=f;RK(c);}e=c.bi;f=D4(c,(e+c.un|0)-c.tR|0,EN(c));c.bi=f;e=e==f?0:1;return !RV(c.cx,b)&&!e&&!c.p9?0:1;}
function AH$(a){var b;Fj(a.bf.bb,a.p1);ACJ(a.cF);b=a.fI;Iz(b.dx,b.di.cX);HV(b.b2);}
function ALQ(a){return ACK(0);}
function AKt(a,b,c){var d,e,f;R0(a.eY,b,c);a.q$(b);b=a.cF;d=a.pb;e=a.ls;CG(b.cl,d);CG(b.cG,e);b.cE=B9(b.qB,c);f=B9(10.0,c);b.kS=f;f=b.cE-f|0;Uw(b.ew,b.cl,f,b.cG.a,c);d=b.cx;f=B9(2.0,c);d.dy.v.b=f;S4(b,b.iy,b.fG);UO(b);}
function AAf(a,b){Bg(a.ls,b.b,b.a);}
function SW(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new KM;c=new Ii;Dp();N0(c,ATG);d=CU(ATK);e=CU(ATL);f=CU(ATM);g=CU(ATG);h=CU(ATN);i=CU(ATO);j=CU(ATP);Yl();k=(ATQ.e_()).data;l=k.length;m=R(IO,l);n=m.data;o=0;while(o<l){n[o]=k[o].kG;o=o+1|0;}MI(b,c,d,e,f,g,h,i,j,m,ABO(),Fm());Ur(a,b);}
function AAd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=new KM;c=new Ii;Dp();N0(c,ATR);d=CU(ATS);e=CU(ATT);f=CU(ATM);g=CU(ATR);h=CU(ATU);i=CU(ATV);j=CU(ATW);ABM();k=(ATX.e_()).data;l=k.length;m=R(IO,l);n=m.data;o=0;while(o<l){n[o]=k[o].ld;o=o+1|0;}p=AJ0(Cv(173),Cv(242),Cv(173),Cw(252,250,237));q=new Ko;r=new G4;s=ATY;t=ATT;EJ();JH(r,s,t,s,ATZ,AT0);LN(q,r,ACD(),Bm(B(145)),Bm(B(146)),Cv(0),ACD(),AFm(1,0.07500000298023224));MI(b,c,d,e,f,g,h,i,j,m,p,q);Ur(a,b);}
function Ur(a,b){var c,d;BI(b);c=a.fI;c.bh=b;d=c.dc;if(d!==null)d.dV=b.Z;Iu(c.b2,b.Z);c=a.cF;c.d7=b;c=c.cx;b=b.pf;BF(c.dy.bL,b);}
function ACG(a,b){if(b.bj!=121)return 0;return 1;}
function XV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=a.eY;d=a.cF;if(d!==c.eh?0:1){c=a.fI;if(!DA(c.b2)){e=c.b2;f=b.k;b=new RU;b.T=c;b.bp=d;b.gU=a;g=O9();h=b.bp.e;i=Df(h);j=GE(h);k=b.bp.d1;if(UK(k,i,j)!==null){h=b.T.bh.Z.bd;l=new Qz;l.nc=b;l.nb=f;DY(g,B(147),h,l);}if(Kf(k,i,j)!==null){m=b.T.bh.Z.bd;l=new Qy;l.n3=b;l.n5=f;DY(g,B(148),m,l);}if(MN(k,i,j)!==null){i=b.T.bh.Z.bd;j=new Qw;j.mJ=b;j.mL=f;DY(g,B(149),i,j);}i=b.T.bh.Z.bd;j=new Qx;j.tq=b;j.tr=f;DY(g,B(150),i,j);if(!b.bp.eZ){i=b.T.bh.Z.bd;j=new OR;j.sh=
b;DY(g,B(151),i,j);}i=b.T.bh.Z.bd;j=new OP;j.o0=b;DY(g,B(152),i,j);if(!b.bp.eZ&&WC(H7(b))){i=b.T.bh.Z.bd;j=new OS;j.rk=b;DY(g,B(153),i,j);}m=b.T.bh.Z.bd;h=O9();j=b.T.bh.Z.bd;n=R(C5,2);o=n.data;p=b.gU;BI(p);q=new RP;q.nf=p;o[0]=Eb(B(154),j,q);p=b.T.bh.Z.bd;q=b.gU;BI(q);r=new RQ;r.p_=q;o[1]=Eb(B(155),p,r);Ew(h,B(156),j,FH(n));j=b.T.bh.Z.bd;n=R(C5,2);o=n.data;p=b.bp;BI(p);q=new Nv;q.qx=p;o[0]=Eb(B(157),j,q);p=b.T.bh.Z.bd;q=b.bp;BI(q);r=new Nu;r.pi=q;o[1]=Eb(B(158),p,r);Ew(h,B(159),j,FH(n));j=b.T.bh.Z.bd;l=new Uh;l.p0
=b;Ew(h,B(160),j,l);Ew(g,B(161),m,G6(h));k=b.T.bh.Z.bd;m=O9();Ew(m,B(162),b.T.bh.Z.bd,AC4(b));h=b.T.bh.Z.bd;i=new Vc;i.rs=b;DY(m,B(163),h,i);Ew(g,B(164),k,G6(m));F2(e,f,G6(g),MP(c,d));}}return 1;}
function XF(){var a=this;Cq.call(a);a.kM=null;a.cY=null;a.f7=null;a.eP=null;a.gS=null;a.tI=null;a.gF=null;a.pW=null;a.lw=null;a.t3=null;a.u7=null;a.fC=null;a.ji=null;a.o8=0;}
function AQm(a){var b=new XF();AJA(b,a);return b;}
function AJA(a,b){var c,d,e,f,g,h,i;Ea(a,b);c=new BW;Dp();AAO(c,ATG);a.kM=c;a.cY=E5(0,0,300,300);a.f7=RI(0,0,3,3);a.eP=E5(0,0,300,300);a.gS=AKP();d=R(Bv,4);e=d.data;e[0]=B(165);e[1]=B(166);e[2]=B(167);e[3]=B(168);a.tI=d;a.gF=R(H6,e.length);f=b.bb;c=b.n.bD;g=new SR;g.eN=a;X(c,g);c=b.n.bY;g=new QI;g.tw=a;X(c,g);c=b.n.lN;g=new QH;g.ny=a;X(c,g);c=b.n.f5;g=new QK;g.vx=a;X(c,g);c=b.n.i2;g=new QJ;g.tU=a;X(c,g);c=b.n.eA;g=new QG;g.u1=a;X(c,g);b=b.n.dK;c=new QF;c.rR=a;X(b,c);h=CL(a.bf.bb,300,300);c=h.bk;b="white";c.fillStyle
=b;b=h.bk;c="white";b.strokeStyle=c;b=h.bk;c=10.0;b.lineWidth=c;h.bk.strokeRect(75.0,140.0,150.0,110.0);h.bk.fillRect(130.0,190.0,40.0,60.0);h.bk.beginPath();h.bk.moveTo(50.0,140.0);h.bk.lineTo(150.0,60.0);h.bk.lineTo(250.0,140.0);h.bk.closePath();h.bk.stroke();FQ(h,B(169),11.0);KN(h,187,187,187);OF(a,B(170),h);b=CS(a.bf.bb);CM(b,h);FE(h);a.pW=b;F8(a.cY,b);GI(a.cY);BF(a.cY.bV,ATG);BF(a.cY.bL,Cw(204,120,50));b=CL(f,255,100);a.fC=b;FQ(b,B(125),11.0);b=By();i=$rt_str(a.fC.bk.font);g=new M;O(g);G(G(g,B(171)),i);Bu(b,
N(g));Eh(a.fC,B(172));KN(a.fC,169,183,198);OF(a,B(172),a.fC);b=CS(f);a.lw=b;CM(b,a.fC);F8(a.eP,a.lw);GI(a.eP);F1(a.eP,Cv(255));Hf(a.eP,ATG);a.t3=CS(f);BF(a.f7.bV,a.kM);}
function OF(a,b,c){Cf(c,b,0.0,20.0);Cf(c,b,0.25,40.0);Cf(c,b,0.5,60.0);Cf(c,b,0.75,80.0);}
function VR(a,b){I0(Fk(),0.5+Fk()*0.5,0.5+Fk()*0.5,1.0,b.bL);}
function ADF(a,b){var c;a.o8=a.o8+1|0;c=b/5.0;I0(c-(c|0),1.0,1.0,1.0,a.f7.bL);return RV(a.gS,b);}
function AGE(a){var b,c,d,e,f,g;b=a.bf.bb;Fj(b,a.kM);c=a.gF.data;d=c.length;e=0;while(e<d){Ty(c[e],b,0,0);e=e+1|0;}Dw(a.cY,b,a.pW,0,0,0.5);f=a.lw;d=0;while(d<7){g=a.eP;Dw(g,b,f,Bb(d,10+((10*g.v.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.u7;if(g!==null)Tb(a.f7,b,g,0,0,0.0);Uc(a.gS,b,new Bh);M_(b,B(173));}
function AMQ(a,b,c){var d,e,f,g,h,i,j,k,l;d=By();e=Ct(b);f=new M;O(f);G(G(f,B(174)),e);Bu(d,N(f));g=By();d=new M;O(d);E$(G(d,B(175)),c);Bu(g,N(d));h=B9(30.0,c);i=B9(10.0,c);j=0;while(true){k=a.gF.data;if(j>=k.length)break;l=1+j|0;k[j]=RI(Bb(i,l)+Bb(h,j)|0,h,h,h);VR(a,a.gF.data[j]);j=l;}Bg(a.f7.M,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.cY;g=d.M;h=b.b;d=d.v;Bg(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.eP;d.M.a=b.a-d.v.a|0;}
function Of(a,b){var c,d,e,f,g;c=By();d=!b.g6?B(176):B(177);e=b.dm;f=b.bj;g=b.qm;b=new M;O(b);FT(G(S(G(G(G(b,d),e),B(178)),f),B(179)),g);Bu(c,N(b));return 0;}
function DU(){var a=this;Cq.call(a);a.fY=null;a.P=null;}
function Ho(a,b){var c,d;Ea(a,b);a.fY=OA(0,0,64);a.P=AEi(b);X(b.n.bY,new Rk);b=b.n.bY;c=a.P;BI(c);d=new Rl;d.qM=c;X(b,d);}
function G3(a){Fj(a.bf.bb,a.fY);}
function KY(a,b,c){R0(a.P,b,c);}
var Eg=F(0);
function Ve(){var a=this;DU.call(a);a.p7=null;a.df=null;a.cv=null;a.dO=null;a.qS=null;}
function AOb(a,b,c){var d;d=Fr(a.P,a.qS);HA(a.df,d);HA(a.cv,d);GC(a.df,a.P);GC(a.cv,a.P);}
function MX(b){return Iq(b,ANG());}
function Iq(b,c){var d;d=O9();JW(d,Kd(b,H0(c,25)),!b?null:Iq(b-1|0,c));JW(d,Kd(b,H0(c,20)),!b?null:Iq(b-1|0,c));JW(d,Kd(b,H0(c,15)),!b?null:Iq(b-1|0,c));JW(d,Kd(b,H0(c,10)),!b?null:Iq(b-1|0,c));return G6(d);}
function Kd(b,c){var d;if(b){d=new M;O(d);G(G(S(d,b),B(36)),c);c=N(d);}return c;}
function JW(b,c,d){var e,f;e=new GY;f=I0(Fk(),1.0,1.0,1.0,new BW);EJ();Lj(e,f,AT1,AT2);if(d!==null)Ew(b,c,e,d);else{d=new Tm;d.rT=c;DY(b,c,e,d);}}
function AF$(a,b,c){var d,e;KY(a,b,c);b=a.P.b1;d=D2(a.df);e=D2(a.cv);Jm(a.df,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);Jm(a.cv,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AGS(a){var b,c,d,e,f,g,h,i;G3(a);b=a.bf.bb;CK(b,1);c=a.p7;d=a.P;e=d.b1;Bg(c.lk,e.b,B9(2.0,d.bG));Bg(c.jH,B9(2.0,d.bG),e.a);EJ();f=AT3;g=d.cX;h=e.a/2|0;i=c.lk;BB(g,0,h-(i.a/2|0)|0,i,f);g=d.cX;h=e.b/2|0;c=c.jH;BB(g,h-(c.b/2|0)|0,0,c,f);I5(a.df,a.P);I5(a.cv,a.P);HV(a.dO);CK(b,0);}
function AMa(a,b){var c,d,e;c=JU(a.dO,b);d=JJ(a.df,b.k,a.P.cq);e=JJ(a.cv,b.k,a.P.cq);return !c&&!d&&!e?0:1;}
function AHP(a,b,c){return Jh(a.dO,b,c);}
function AEL(a,b,c){return DA(a.dO);}
function ALs(a,b,c,d){var e,f,g;e=IP(a.dO,b,c,d);f=JB(a.df,b.k,c,d);g=JB(a.cv,b.k,c,d);return !e&&!f&&!g?0:1;}
function Wq(){var a=this;DU.call(a);a.fK=null;a.dY=null;a.hE=null;a.ka=null;}
function AG1(a,b,c){if(b===0.0)WL(a);}
function ALM(a){var b;G3(a);b=a.bf.bb;Iz(a.dY,b);HV(a.fK);}
function WL(a){var b,c,d,e,f,g,h,i,j,k;b=a.hE;if(b!==null){Jz(a.dY,b);Jk(b);}b=Fm();c=ARY(a.P,new UZ);d=EH(B(124),14.0);e=ALw();f=0;while(f<300){g=C0(f);h=new G4;Dp();i=ATH;j=ATL;EJ();JH(h,i,j,i,AT4,AT0);h=new W5;h.qQ=B(180);h.qP=g;h.qO=B(181);Mr(e,B(180),g,B(181),h);f=f+1|0;}U2(c,PY(e));NY(c,d);c.jv=b;k=AAh(a.P);K8(k,Yb(c,a.P));k.dV=b;H9(k,B(182),a.ka,2.0);a.hE=k;Il(a.dY,k);TA(a);}
function AFo(a,b,c){KY(a,b,c);Pc(a.dY,b,c);TA(a);}
function TA(a){var b,c,d;b=a.P.b1;Fb(a.hE,B0((b.b*2|0)/10|0,(b.a*4|0)/10|0),B0((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.hE;b=W7(c.L.r);d=new M;O(d);G(G(d,B(183)),b);H9(c,N(d),a.ka,2.0);}
function AMW(a,b){return NA(a.dY,b);}
function W0(){var a=this;DU.call(a);a.hB=null;a.fg=null;a.eF=null;a.iT=null;a.nH=null;a.hQ=null;a.fr=null;a.fc=null;a.iO=0;a.fD=0;}
function VK(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fg.i>0){d=Fk();e=a.fg;f=d*(e.i-1|0)|0;e=Ee(e,f);Ee(a.eF,f);f=a.fD;g=e.v;a.fD=f-Bb(g.b,g.a)|0;HO(a.hB,e.cP);}c=c+1|0;}}
function JS(a,b){var c,d,e,f,g,h,i,j;c=H_(a.P);Cu(c,a.iT);d=0;while(d<b){e=H0(a.hQ,1+(Fk()*19.0|0)|0);f=AJN();g=f.cP;h=a.hB;BI(c);i=new Qn;i.nT=c;BF(g,GX(h,e,i));(VX(Fk(),1.0,1.0,f.bV)).bv=0.5;h=f.M;g=f.cP;Bg(h,g.bg|0,g.bu|0);h=f.v;g=f.cP;Bg(h,g.bc|0,g.bv|0);BX(a.eF,e);BX(a.fg,f);j=a.fD;h=f.v;a.fD=j+Bb(h.b,h.a)|0;d=d+1|0;}a.fc=Ww(a.hB);}
function AMj(a){var b,c,d,e,f,g,h,i;G3(a);b=a.bf.bb;CK(b,1);c=a.P.cX;if(a.eF.i){d=a.fc;d=CL(c,d.b,d.a);Cu(d,a.iT);e=a.iT.dd;BB(c,0,0,a.fc,a.nH);f=0;while(f<a.eF.i){g=Bs(a.fg,f);h=Bs(a.eF,f);g=g.cP;Cf(d,h,g.bg,g.bu+e);f=f+1|0;}g=a.fr;if(!(g!==null&&Cb(g)==a.fc.b&&C3(a.fr)==a.fc.a))a.fr=CF(a.fr,CS(c));CM(a.fr,d);FE(d);i=0;while(i<a.eF.i){d=Bs(a.fg,i);F1(d,Cv(0));Dw(d,c,a.fr,0,0,0.0);i=i+1|0;}}CK(b,0);}
function AFM(a,b){var c,d;if(a.iO){c=a.fc;d=W(Bb(c.b,c.a),2211840);if(a.fD/d<=0.7)JS(a,HQ(a.hQ,5));else VK(a,HQ(a.hQ,5));}return a.iO;}
function Ov(){var a=this;Cq.call(a);a.dJ=null;a.fy=null;a.gt=null;a.kn=null;a.dH=0;a.qA=0;a.sV=null;a.ll=0;a.s9=0;a.rC=null;a.nz=null;}
function ADX(a){var b,c;b=a.dH;c=new M;O(c);S(G(c,B(184)),b);$rt_globals.console.info($rt_ustr(N(c)));Fj(a.dJ,a.sV);H1(a.gt,a.dH,0,FZ(a),5000,a.kn.b,20);CK(a.dJ,1);Pg(a.gt,a.dJ);CK(a.dJ,0);b=a.dH;c=new M;O(c);S(G(c,B(184)),b);$rt_globals.console.info($rt_ustr(N(c)));WK(a.fy,a.dH/a.ll|0);Tf(a.fy,a.dH,FZ(a),a.nz,a.dJ);}
function ANX(a,b,c){a.kn=b;Uw(a.fy,B0(0,0),50,FZ(a),c);Jp(a.fy,a.dJ,0,FZ(a));}
function O8(a){return 5000-FZ(a)|0;}
function FZ(a){return W(a.qA,a.kn.a);}
function C7(){var a=this;Cq.call(a);a.k$=null;a.gd=null;a.tW=0.0;}
function AT5(a){var b=new C7();Ga(b,a);return b;}
function Ga(a,b){Ea(a,b);a.k$=OA(0,0,64);a.gd=new Bh;MR(b.bU,HB(Cm(a)));}
function Rf(a){Fj(a.bf.bb,a.k$);}
function RN(a,b,c){CG(a.gd,b);a.tW=c;}
var P0=F(C7);
var ACz=F(C7);
function ARK(a){var b=new ACz();AK4(b,a);return b;}
function AK4(a,b){var c,d,e,f,g,h;Ga(a,b);c=b.bU;d=new Qm;d.uu=a;e=R(C,1);e.data[0]=B(185);C1(c,d,B(186),e);f=b.bU;g=new Ql;g.wg=a;h=R(C,1);h.data[0]=Zz([1,2,3,4,5]);C1(f,g,B(187),h);f=b.bU;g=new Qk;g.nw=a;h=R(C,1);h.data[0]=AQ3([1,2,3,4,5]);C1(f,g,B(188),h);f=b.bU;g=new Qj;g.ub=a;h=R(C,1);h.data[0]=EW([1,2,3,4,5]);C1(f,g,B(189),h);f=b.n.bY;d=new Jw;g=new Qh;g.vk=a;c=new Qg;c.oX=a;Uy(d,b,g,c);X(f,d);}
function TB(a,b){var c,d,e,f,g,h;c=b.data;d=By();e=Ct(c[0]);f=new M;O(f);G(G(f,B(190)),e);Bu(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((QX(b,1)).gZ));d=By();e=Ct(c[1]);if(b===null)f=B(29);else{f=new M;O(f);BY(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BY(f,B(44));S(f,c[g]);g=g+1|0;}BY(f,B(45));f=N(f);}h=new M;O(h);G(G(G(G(h,B(191)),e),B(192)),f);Bu(d,N(h));}
function VU(){var a=this;C7.call(a);a.dv=null;a.es=null;a.jY=null;a.or=null;a.k1=null;}
function AI6(a,b){b=b/5.0;I0(b-(b|0),1.0,1.0,1.0,a.es.bL);return 0;}
function ADz(a){Rf(a);Dw(a.dv,a.bf.bb,a.or,0,0,0.5);Tb(a.es,a.bf.bb,a.jY,0,0,0.0);M_(a.bf.bb,B(173));}
function ALK(a,b,c){var d,e,f;RN(a,b,c);Bg(a.es.M,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dv;e=d.M;f=b.b;d=d.v;Bg(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Rh(){var a=this;C7.call(a);a.fW=null;a.qf=null;a.jx=null;a.hS=null;a.hb=null;}
function APl(a){var b,c,d,e,f,g;Rf(a);b=a.bf.bb;c=a.hS;Ua(b,c.b,c.a,a.hb);b=a.fW;c=a.qf;d=a.gd;e=a.bf.bb;f=0;while(true){g=0;while(true){Dw(b,e,c,g,f,0.5);g=g+Cb(c)|0;if(g>=d.b)break;}f=f+C3(c)|0;if(f>=d.a)break;}K2(a.bf.bb);}
function AFd(a,b,c){RN(a,b,c);Bg(a.hb,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function N4(){var a=this;Cq.call(a);a.dQ=null;a.jp=null;a.eM=null;a.bT=null;a.ec=0;a.hm=null;a.ed=0;a.u2=20;a.wv=11;a.uI=220;a.iC=null;a.vo=5000;a.gf=0;a.e4=null;}
function APo(a){var b,c,d,e,f,g,h;b=a.hm;c=a.ed;d=a.iC;H1(b,c,0,d.a,5000,d.b,20);CK(a.dQ,1);Pg(a.hm,a.dQ);if(a.bT===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Cf(a.jp,C0(e),0.0,c);}b=CS(a.dQ);a.bT=b;CM(b,a.jp);}if(a.ed<=a.ec)while(true){f=a.ec;if(f<=a.ed)break;a.ec=f-20|0;b=a.eM;g=a.gf-1|0;a.gf=g;Cf(b,C0(g),0.0,20.0);Hx(a.bT,a.eM,0,a.ec%220|0);Ep(a.eM);}else while(a.ec<(a.ed-20|0)){b=a.eM;g=a.gf+1|0;a.gf=g;Cf(b,C0((g+11|0)-1|0),0.0,20.0);Hx(a.bT,a.eM,0,a.ec%220|0);Ep(a.eM);a.ec=a.ec+20|0;}b=E5(0,0,Cb(a.bT),C3(a.bT));Hi(b,
0,0,Cb(a.bT),C3(a.bT));F1(b,a.e4.data[0]);Hf(b,a.e4.data[1]);Dw(b,a.dQ,a.bT,400,0,1.0);g=a.ed%220|0;f=W(C3(a.bT)-g|0,200);d=E5(0,0,Cb(a.bT),f);Hi(d,0,g,Cb(a.bT),f);F1(d,a.e4.data[0]);Hf(d,a.e4.data[1]);Dw(d,a.dQ,a.bT,0,0,1.0);h=E5(0,f,Cb(a.bT),(C3(a.bT)-f|0)-20|0);Hi(h,0,0,Cb(a.bT),(C3(a.bT)-f|0)-20|0);F1(h,a.e4.data[1]);Hf(h,a.e4.data[0]);Dw(h,a.dQ,a.bT,0,0,1.0);}
function AHj(a,b,c){CG(a.iC,b);}
function AFS(a,b){return 0;}
function QQ(a){return 5000-a.iC.a|0;}
function H2(){C7.call(this);this.dg=0;}
function Qe(a){var b,c;b=a.bf.bU;c=new Px;c.me=a;PX(b,c,QA(a));}
function LS(a){var b,c,d,e;b=a.dg+1|0;a.dg=b;c=HB(E(H2));d=new M;O(d);G(G(S(G(d,B(193)),b),B(36)),c);e=N(d);c=a.bf.bU;d=new Te;d.oE=e;Tr(c,e,d,QA(a));}
function QA(a){var b;b=new UR;b.nD=a;return b;}
function AMK(a,b,c,d){a:{switch(c){case 0:break;case 2:LS(a);break a;default:break a;}Qe(a);}return 1;}
function Po(){var a=this;Cq.call(a);a.mP=null;a.eG=null;a.k2=null;a.hC=null;}
function APf(a){var b;b=a.bf.bb;Fj(b,a.mP);Dw(a.eG,b,a.k2,0,0,0.5);}
function AJ5(a,b,c){var d,e,f;d=a.eG;e=d.M;f=b.b;d=d.v;Bg(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Vu(){var a=this;DU.call(a);a.fh=null;a.dL=null;a.iL=null;a.iM=null;a.rB=null;}
function AIg(a,b,c){if(b===0.0)M4(a);}
function APG(a){var b;G3(a);b=a.bf.bb;Iz(a.dL,b);HV(a.fh);}
function M4(a){VI(a,a.iL);VI(a,a.iM);a.iL=Ml(a,0.5,0,B(194));a.iM=Ml(a,1.0,1,B(195));Il(a.dL,a.iL);Il(a.dL,a.iM);V8(a);}
function VI(a,b){if(b!==null){Jz(a.dL,b);Jk(b);}}
function Ml(a,b,c,d){var e,f,g;e=AAh(a.P);f=new U6;g=new ON;g.rE=a;g.rF=e;g.rD=d;SP(f);f.hv=new BW;f.kO=new Bh;f.qN=g;f.oB=b;if(c)f=Yb(f,a.P);K8(e,f);e.dV=Fm();return e;}
function AL4(a,b,c){KY(a,b,c);Pc(a.dL,b,c);V8(a);}
function V8(a){var b;b=a.P.b1;Fb(a.iM,B0((b.b*2|0)/10|0,(b.a*2|0)/10|0),B0((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fb(a.iL,B0(b.b/10|0,b.a/10|0),B0((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AI2(a,b){return NA(a.dL,b);}
var Qi=F(JX);
function AIl(a){return ACK(1);}
function AFk(a,b){AAf(a,b);}
var Iw=F(0);
function LD(){var a=this;C.call(a);a.io=null;a.hP=null;}
function LP(a,b){var c;c=a.hP;a.hP=b;return c;}
function IT(){var a=this;LD.call(a);a.bF=null;a.bQ=null;a.e3=0;a.fa=0;}
function I$(a){var b;b=Kj(a);if(b==2){if(Kj(a.bQ)<0)a.bQ=Mu(a.bQ);return N1(a);}if(b!=(-2))return a;if(Kj(a.bF)>0)a.bF=N1(a.bF);return Mu(a);}
function Kj(a){var b,c;b=a.bQ;c=b===null?0:b.e3;b=a.bF;return c-(b===null?0:b.e3)|0;}
function Mu(a){var b;b=a.bF;a.bF=b.bQ;b.bQ=a;D_(a);D_(b);return b;}
function N1(a){var b;b=a.bQ;a.bQ=b.bF;b.bF=a;D_(a);D_(b);return b;}
function D_(a){var b,c,d;b=a.bQ;c=b===null?0:b.e3;b=a.bF;d=b===null?0:b.e3;a.e3=Ba(c,d)+1|0;a.fa=1;b=a.bF;if(b!==null)a.fa=1+b.fa|0;b=a.bQ;if(b!==null)a.fa=a.fa+b.fa|0;}
var ACg=F();
function AEC(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Op;c=c.buffer;d.e2=c;d.lG=new $rt_globals.Int8Array(c);d.jq=new $rt_globals.Uint16Array(c);d.rc=new $rt_globals.Int32Array(c);d.oc=new $rt_globals.Float32Array(c);d.oo=new $rt_globals.Float64Array(c);e=d.e2.byteLength;c=new M;O(c);S(G(c,B(196)),e);CE(N(c));e=b.callToCpp1();c=new M;O(c);S(G(c,B(197)),e);CE(N(c));f=b.callToCpp2();c=new M;O(c);E$(G(c,B(198)),f);CE(N(c));c=Mf(d,b.getC8String());g=new M;O(g);G(G(g,B(199)),c);CE(N(g));c
=Mo(d,b.getC16String());g=new M;O(g);G(G(g,B(200)),c);CE(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.e2,h,8));c=AA2(i);g=new M;O(g);G(G(g,B(201)),c);CE(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.e2,h,8));c=AM5(j);g=new M;O(g);G(G(g,B(202)),c);CE(N(g));k=Zi(d,b.getCDoubleArray8(),8);l=API(k);c=new M;O(c);G(G(c,B(203)),l);CE(DI(c));l=APv(b.getC8String(),B(204),d);c=K$();G(G(c,B(205)),l);CE(DI(c));l=AJT(b.getC16String(),B(206),
d);c=K$();G(G(c,B(207)),l);CE(DI(c));c=ALE(i,d,b.getCIntArray8(),EW([11,22,33,44,55,66,77,88]));g=K$();G(G(g,B(208)),c);CE(DI(g));c=ANi(j,d,b.getCFloatArray8(),100,EW([111,222,333,444,555,666,777,888]));g=K$();G(G(g,B(209)),c);CE(DI(g));b=ANx(k,d,b.getCDoubleArray8(),1000,EW([1111,2222,3333,4444,5555,6666,7777,8888]));c=K$();G(G(c,B(210)),b);CE(DI(c));}
function ANi(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(211);h=0;i=e;a:{while(h<g){if(CX(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.oc[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(212);}return B(213);}
function ANx(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(211);h=0;i=e;a:{while(h<g){if(GW(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.oo[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(212);}return B(213);}
function ALE(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(211);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.rc[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(212);}return B(213);}
function APv(b,c,d){var e,f,g,h;e=Mf(d,b);if(!Bo(c,e))return B(214);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lG[h])return B(215);f=f+1|0;}return B(212);}
function AJT(b,c,d){var e,f,g,h;e=Mo(d,b);if(!Bo(c,e))return B(214);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jq[h>>>1|0]&65535))return B(215);f=f+1|0;}return B(212);}
function CE(b){Ol(B(2),b);}
function AIP(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
var XY=F(0);
function OA(b,c,d){return Hg(b,c,d,255,new BW);}
function W3(b,c,d,e){return Hg(b,c,d,e,new BW);}
function Hg(b,c,d,e,f){CD(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function VX(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bg=g+i;e.bu=h+i;e.bc=j+i;return e;}
function I0(b,c,d,e,f){f=VX(b,c,d,f);f.bv=e;return f;}
function Go(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function ACU(){var a=this;C.call(a);a.cX=null;a.id=null;a.b1=null;a.cq=null;a.bG=0.0;a.eh=null;a.dB=null;a.jL=null;a.nl=null;a.wx=null;a.ww=null;}
function AEi(a){var b=new ACU();AES(b,a);return b;}
function AES(a,b){var c,d;a.b1=new Bh;a.dB=CH(R(Eg,0));a.jL=new Bh;a.nl=new Bh;a.wx=new BW;a.ww=new BW;a.cX=b.bb;c=b.bU;a.id=c;a.cq=TI(c);c=b.n.jJ;d=new LU;d.mQ=a;X(c,d);b=b.n.i2;c=new LV;c.pg=a;X(b,c);}
function R0(a,b,c){var d,e,f,g;a:{CG(a.b1,b);d=a.bG;if(d!==c){a.bG=c;e=(Cn(a.dB)).data;f=e.length;g=0;while(true){if(g>=f)break a;e[g].f6(d,c);g=g+1|0;}}}}
function Mh(a,b){var c;c=a.eh;return c!==null&&c.gz(b)?1:0;}
function Kb(a){var b;b=a.eh;if(b!==null)b.rf();}
function Ji(a){var b;b=a.eh;if(b!==null)b.tu();}
function Ir(a,b){Ji(a);a.eh=b;Kb(a);}
function H_(a){return a.cX.cr;}
function Fr(a,b){return G0(a.cX,b.h2,B9(b.hr,a.bG));}
function CJ(a,b){return B9(b,a.bG);}
function TX(){var a=this;C.call(a);a.di=null;a.p$=null;a.dx=null;a.dc=null;a.b2=null;a.bh=null;}
function AMm(a,b){return !X9(a.dx,b)&&!JU(a.b2,b)?0:1;}
function APQ(a,b,c,d){return !ZV(a.dx,b,c,d)&&!IP(a.b2,b,c,d)?0:1;}
function APy(a,b,c){return !Y4(a.dx,b,c)&&!Jh(a.b2,b,c)?0:1;}
function AKS(a,b,c){return !ACL(a.dx,b,c)&&!DA(a.b2)?0:1;}
function RD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=null;f=d.e;g=ALw();h=c.i;i=0;while(i<h){if(e===null){j=(Bs(c,i)).bs;k=QU(EC(B2(f.g,j)));l=UM(f.fB);}else{m=e.data;j=m[i].jF.km;k=!Dg(f.fB,m[i].hI)?B(31):QU(EC(B2(f.g,j)));l=UM(m[i].hI);}if(I(k)>153){m=B8(k,0,150);n=new M;O(n);G(G(n,m),B(216));k=N(n);}if(I(l)>153){m=B8(l,0,150);n=new M;O(n);G(G(n,m),B(216));l=N(n);}o=C0(j+1|0);if(e!==null){n=e.data;p=null;n=n[i];}else{n=null;p=Bs(c,i);}if(e!==null){m=new Tv;m.mM=d;m.mK=n;}else{m=new Tx;m.tH=d;m.tD=p;}Mr(g,
l,o,k,m);i=i+1|0;}q=PY(g);if(a.dc!==null)Ta(a);c=new PZ;n=a.di;m=new Rv;m.nB=a;m.nA=d;Y6(c,n,m);NY(c,EH(B(124),15.0));U2(c,q);c.jv=a.bh.Z;d=AAh(a.di);a.dc=d;K8(d,Yb(c,a.di));H9(a.dc,B(217),a.p$,4.0);d=a.dc;d.dV=a.bh.Z;Il(a.dx,d);d=a.dc;r=(d.O.r.a+CJ(d.bm,2.0)|0)+CJ(a.di,2.0)|0;s=(c.dt+c.dw|0)+c.fz|0;n=B0(Eo(0,b.b,c.cM.b1.b-s|0),Eo(r,b.a,c.cM.b1.a-c.ct.a|0));Sp(c);Yq(c);r=(c.dt+c.dw|0)+c.fz|0;b=c.cM;h=(b.b1.b-n.b|0)-CJ(b,5.0)|0;b=c.cM;s=(b.b1.a-n.a|0)-CJ(b,5.0)|0;d=B0(W(r,h),W(c.ct.a,s));Fb(a.dc,n,d);Ir(a.di,
c);}
function Ta(a){Jz(a.dx,a.dc);Jk(a.dc);a.dc=null;}
function MP(a,b){var c;c=new Rm;c.sc=a;c.si=b;return c;}
function AJu(a,b,c,d){return KA(a.dx,b,c,d);}
function XE(b){var c;c=new U4;c.sw=b;return c;}
var Hq=F(0);
function AFI(a){}
function APY(a){}
function Zj(){var a=this;C.call(a);a.d2=null;a.V=null;a.h1=null;a.p9=0;a.lc=null;a.cx=null;a.x=0;a.w=0;a.gM=0;a.ky=0;a.fG=0;a.iy=null;a.en=null;a.cp=null;a.W=0;a.e=null;a.d1=null;a.p=null;a.fb=null;a.d7=null;a.lL=null;a.f8=null;a.sy=0;a.qH=0;a.qB=0;a.cE=0;a.jN=0;a.kS=0;a.j8=null;a.eu=null;a.eq=null;a.bi=0;a.cg=0;a.gR=0;a.hD=0;a.ht=0;a.un=0;a.tR=0;a.iW=0;a.ks=0;a.ew=null;a.cl=null;a.cG=null;a.hq=0;a.hp=0;a.em=null;a.eZ=0;a.hO=null;a.hG=null;a.t6=null;a.gy=null;a.ku=0;a.p6=null;a.g0=null;a.ep=Ef;a.fP=null;a.rV
=null;a.sr=null;}
function ART(a,b){var c=new Zj();AIe(c,a,b);return c;}
function AIe(a,b,c){var d,e,f,g;a.p9=0;a.lc=R(Bi,10);a.cx=AKP();a.fG=16;a.iy=B(124);a.cp=R(Ku,4);d=new H3;e=new Hp;e.dS=HE();e.d_=HE();e.e1=Cl();e.B=L_(B(31));e.fi=0;e.ck=0;e.cU=Tc(e);d.g=e;d.ix=B(166);d.fB=null;a.e=d;f=new U1;f.mC=CH(R(LA,0));f.rq=CH(R(LA,0));f.rJ=CH(R(LY,0));f.nC=CH(R(Pp,0));f.l9=CH(R(H5,0));f.qa=CH(R(Qq,0));a.d1=f;a.p=ALi();e=new ML;e.ej=R(IL,16);e.ek=0;e.cZ=(-1);a.fb=e;a.f8=R(EM,0);a.qB=100;a.jN=1;a.j8=B0(1,0);a.eu=G5();a.eq=G5();a.bi=0;a.cg=0;a.gR=0;a.ht=1;a.iW=1;a.ks=3;a.ew=AJ3();a.cl
=new Bh;a.cG=new Bh;a.em=B(218);a.eZ=0;a.hO=null;a.hG=Cl();e=K1();BI(e);f=new TT;f.wj=e;a.gy=f;a.p6=new BW;a.g0=new Bh;e=new TS;e.pV=a;a.rV=e;e=new TO;e.m0=a;a.sr=e;a.d2=b;a.V=b.cX;a.h1=c;g=a.lc.data;b=new TN;b.rU=a;g[0]=b;b=new TQ;b.qg=a;g[1]=b;b=new TP;b.nd=a;g[2]=b;b=new Uf;b.sp=a;g[3]=b;ADC();a.hD=AT6===AT7?0:1;}
function AGy(a){a.ky=1;K0(a);}
function AFe(a){a.ky=0;}
function K0(a){Ro(a.cx,IU(Cg(a)));}
function Kz(a,b,c){if(a.d2.bG!==0.0){S4(a,b,c);FS(Cg(a));}a.fG=c;a.iy=b;}
function S4(a,b,c){var d,e,f,g,h,i,j;d=B9(c,a.d2.bG);e=a.en;f=e!==null?e.nO:0;if(!(d==f&&Dg(b,a.iy))){g=a.ew;Js(g.co,new QE);G9(g.co);g.ee=CF(g.ee,null);g.eV=CF(g.eV,null);h=a.f8.data;c=h.length;f=0;while(f<c){PE(h[f]);f=f+1|0;}h=a.e.g.B.data;c=h.length;f=0;while(f<c){D8(h[f]);f=f+1|0;}h=a.cp.data;c=GZ(0,0);e=a.V;i=d;h[c]=Gy(e,b,i,400,0);a.cp.data[GZ(0,1)]=Gy(a.V,b,i,400,2);a.cp.data[GZ(1,0)]=Gy(a.V,b,i,700,0);a.cp.data[GZ(1,1)]=Gy(a.V,b,i,700,2);e=a.cp.data[GZ(0,0)];a.en=e;c=DZ(e);a.W=CX(c*1.25);a.cx.dy.v.a
=DZ(a.en);a.lL=CF(a.lL,CL(a.V,1024,a.W));f=a.W;j=RH(a.cx);e=new M;O(e);b=G(G(e,B(219)),b);BA(b,32);S(G(S(G(S(G(S(b,d),B(220)),c),B(134)),f),B(221)),j);$rt_globals.console.info($rt_ustr(N(e)));if(AT8){c=KB(a.en,a.W);b=new M;O(b);S(G(b,B(222)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gM=GF(Fi(a),a.w,a.V.cr,a.cp);Gz(a);UO(a);}}
function T$(a){return Bb(CA(a.e.g)+5|0,a.W);}
function EN(a){return Ba(T$(a)-a.cG.a|0,0);}
function F9(a){return Ba(a.gR-DK(a)|0,0);}
function DK(a){return a.cG.b-a.cE|0;}
function Dz(a){return a.cG.a;}
function ACJ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=H8(a.cG.a,a.W)+7|0;c=a.f8;if(c.data.length<b)a.f8=Y7(b,c,a.sy,a.qH,a.e.g);CK(a.V,0);d=a.j8;d.a=a.cG.a;d.b=a.jN;e=a.V;f=a.cl;BB(e,(f.b+a.cE|0)-a.kS|0,f.a,d,a.d7.rw);d=a.j8;b=a.kS;g=a.jN;d.b=b-g|0;e=a.V;f=a.cl;BB(e,((f.b+a.cE|0)-b|0)+g|0,f.a,d,a.d7.iS);a.bi=W(a.bi,EN(a));a.cg=W(a.cg,F9(a));g=(a.W-RH(a.cx)|0)/2|0;h=(a.gM-(Py(a.cx)/2|0)|0)-a.cg|0;O7(a.cx,a.cE+h|0,(g+Bb(a.x,a.W)|0)-a.bi|0);i=CA(a.e.g);j=Ks(a);k=T7(a);a.sy=j;a.qH=k;l=j;while(l<=k&&l<i){m
=B2(a.e.g,l);n=P9(a,l);f=a.lL;o=a.cp;p=a.V;q=a.W;r=DK(a);s=a.cg;d=n.bN;b=d===m&&!d.hA?0:1;if(b){n.bN=m;KD(m,p.cr,o);}d=n.bN;g=d===null?0:ES(d)<r?H8(ES(n.bN),1024):H8(r,1024)+1|0;r=g<=n.dl?0:1;if(r)n.dl=g;if(!(!b&&!r)){if(AT9){c=m.e5;$rt_globals.console.info("fMeasure"+c.data);AT9=0;}AA3(f,AT8);AA9(n,f,p,o,q,s);n.bN.hA=0;}AAU(n,f,o,q,s);t=n.bN;a.gR=Ba(a.gR,ES(m)+(40.0*a.d2.bG|0)|0);r=Bb(a.W,l)-a.bi|0;d=a.cl;AAZ(n,d.a+r|0,d.b+a.cE|0,a.V,a.p6,a.g0,!a.hD?0.0:0.5,DK(a),a.W,a.cg,a.d7,ABX(a,l,t),a.hO,a.hG);l=l+1|0;}q
=j;while(q<=k&&q<i&&a.iW){d=P9(a,q);r=Bb(a.W,q)-a.bi|0;e=!Yy(a.p,q)?a.d7.l6:a.d7.kY;f=a.V;p=a.cl;AAJ(d,f,p.b+a.cE|0,p.a+r|0,a.W,a.g0,a.cg,DK(a),e);q=q+1|0;}if(a.ky&&h>=(( -Py(a.cx)|0)/2|0)){d=a.cx;e=a.cG;if(X3(d.dy.M,0,0,e))Uc(a.cx,a.V,a.cl);}if(a.ht){s=W(k+1|0,i);AAi(a,Bb(a.W,s)-a.bi|0);}Zw(a,j,k);AAT(a);ABw(a);}
function ABX(a,b,c){var d,e,f,g;a:{d=a.p;e=DT(d);d=Fo(d);f=e.I;if(f<=b){g=BD(b,d.I);if(g<=0){d=B0(b<=f?e.U:0,g>=0?d.U:(-1));break a;}}d=null;}if(d!==null){if(d.a==(-1))d.a=c.N;d.b=GF(c,d.b,a.V.cr,a.cp);d.a=GF(c,d.a,a.V.cr,a.cp);}return d;}
function Zw(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cG.a;e=W(d,Bb(CA(a.e.g),a.W)-a.bi|0);f=a.ew;g=a.bi;h=a.x;i=a.V;j=a.d7.tk;Jp(f,i,b,d);WK(f,b);Tf(f,g,e,j,i);if(e<d){k=f.fw;BB(i,k.b,k.a+e|0,B0(f.eI.b,d-e|0),j.g8);}if(b<=h&&h<=c){c=h/20|0;k=f.co;k=Bs(k,c%k.i|0);l=f.fw;c=Bb(f.co.i,f.hX);b=k.ea.a;d=((k.iv.a-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C3(k.bR)|0)|0;b=h%k.dr|0;e=k.d9;d=d+Bb(b,e)|0;if(d<( -e|0))d=d+c|0;Bg(k.fZ,k.ea.b,e);m=k.fn;b=h%k.dr|0;c=k.d9;CD(m,0.0,Bb(b,c),k.ea.b,c);It(k,i,d,l,j.oz,j.oH);}}
function Ks(a){return W(a.bi/a.W|0,CA(a.e.g)-1|0);}
function T7(a){return W(((a.bi+Dz(a)|0)-1|0)/a.W|0,CA(a.e.g)-1|0);}
function UO(a){SI(a.ew,a.cp.data[0],a.W,a.V);Jp(a.ew,a.V,Ks(a),Dz(a));}
function P9(a,b){var c;c=a.f8.data;return c[b%c.length|0];}
function ACT(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Di(a.p))DH(a,a.em);else{b=DT(a.p);c=Fo(a.p);d=c.I;e=b.I;f=(d-e|0)+1|0;g=BH(f);h=g.data;i=R(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.em;e=e+1|0;k=f;}l=EK(a.x,a.w);m=new U5;m.rh=a;OH(a,g,0,0,i,l,m);b.U=b.U+I(a.em)|0;c.U=c.U+I(a.em)|0;Li(a,a.w+I(a.em)|0,0);DO(a);}return 1;}
function AAC(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Di(a.p)){b=B2(a.e.g,a.x);if(b.o.data.length>0){c=QS(a,b);if(c===null)return 1;d=a.e.g;e=a.x;f=EK(e,a.w);d.ck=d.ck+1|0;g=d.e1;h=R(GH,1);h.data[0]=ADG(e,0,1,c,f.bs,f.bE);BX(g,h);I8(d,e,0,1,c);FI(b,0,I(c));Li(a,a.w-I(c)|0,0);}}else{f=DT(a.p);c=Fo(a.p);i=c.I;j=f.I;i=(i-j|0)+1|0;k=BH(i);h=k.data;l=R(Bv,i);m=l.data;e=a.w;n=a.x;o=0;while(j<=c.I){b=B2(a.e.g,j);if(b.o.data.length>0){b=QS(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=ACH(k,o);h=Dc(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.I)f.U=Ba(0,f.U-I(b)|0);if(j==c.I){c.U=Ba(0,c.U-I(b)|0);Li(a,a.w-I(b)|0,0);}i=i+1|0;}f=EK(n,e);b=new RL;b.sW=a;OH(a,p,0,1,h,f,b);}DO(a);return 1;}
function QS(a,b){var c,d,e,f;c=Eo(0,I(a.em),Wh(b));if(!c)b=null;else{b=B(60);if(c<0){b=new BC;U(b);J(b);}if(c!=1){d=b.bP.data.length;if(d&&c){e=BQ(Bb(d,c));d=0;f=0;while(f<c){O0(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=LB(e);}else b=ASM;}}return b;}
function OH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BH(i);k=ASf(i).data;G_(j,c);c=0;l=k.length;if(c>l){f=new BC;U(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.g;o.ck=o.ck+1|0;p=R(GH,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ADG(h[m],n[m],k[m],b[m],f.bs,f.bE);m=m+1|0;}BX(o.e1,p);c=0;while(c<i){b=e.data;I8(o,h[c],n[c],k[c],b[c]);g.lJ(FO(h[c]),b[c]);c=c+1|0;}}
function AB$(a){var b,c,d,e,f,g,h,i;if(Di(a.p))Gq(a);D8(B2(a.e.g,a.x));b=a.e.g;c=a.x;d=a.w;e=b.B;f=e.data;g=f[c];e=Dc(e,f.length+1|0);f=e.data;b.B=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DF(R(B5,0));b.B.data[c+1|0]=g;}else if(d==g.N){f[c]=g;f[c+1|0]=DF(R(B5,0));}else{f=(H$(g,d)).data;e=b.B.data;e[c]=f[0];e[c+1|0]=f[1];}Gj(b,c,d,0,B(223));DO(a);return Cz(a,a.x+1|0,0,0);}
function ABP(a){if(Di(a.p))Gq(a);else Ow(a.e.g,a.x,a.w);Gz(a);DO(a);return 1;}
function Xi(a){var b,c,d;if(Di(a.p)){Gq(a);return 1;}b=a.w;if(!b&&!a.x)return 1;if(b){c=a.x;b=b-1|0;Ow(a.e.g,c,b);}else{c=a.x-1|0;b=E_(a.e.g,c);d=a.e.g;Kr(d,c);Gj(d,c,E_(d,c),1,B(223));}DO(a);return Cz(a,c,b,0);}
function DH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eZ)return 0;if(Di(a.p))Gq(a);c=Lf(Ug(b,B(224),B(31)),B(223),(-1));d=c.data;b=a.e.g;e=a.x;f=a.w;WT(b,e,f,c);g=d.length;if(!g)h=ASM;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BQ(i+Bb(g-1|0,I(B(223)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(223))){m=l+1|0;c[l]=L(B(223),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=LB(k);}Gj(b,e,f,0,h);e=a.x;m=(e+g|0)-1|
0;Cz(a,m,m!=e?I(d[g-1|0]):a.w+I(d[0])|0,0);EY(a);DO(a);return 1;}
function Gq(a){var b,c,d;b=DT(a.p);c=a.e.g;d=a.p;Sv(c,d,U_(c,d));Cz(a,b.I,b.U,0);EY(a);DO(a);}
function EY(a){var b;b=a.p;b.cL=0;B1(b.bI,a.x,a.w);B1(a.p.bz,a.x,a.w);}
function Pv(a){return a.en.iU|0;}
function AAi(a,b){var c,d,e;c=a.cG.a;if(b<c){d=a.g0;d.a=c-b|0;d.b=DK(a);d=a.V;e=a.cl;BB(d,e.b+a.cE|0,e.a+b|0,a.g0,a.d7.iS);}}
function AAT(a){H1(a.eu,a.bi,a.cl.a,Dz(a),T$(a),a.cl.b+a.cG.b|0,Pv(a));LK(a.eq,a.cg,a.cl.b+a.cE|0,DK(a),a.gR,a.cl.a+Dz(a)|0,Pv(a));}
function ABw(a){var b,c;b=O5(a.eu);c=O5(a.eq);if(!(!b&&!c)){CK(a.V,1);if(b)FL(a.eu,a.V);if(c)FL(a.eq,a.V);if(b)F4(a.eu,a.V);if(c)F4(a.eq,a.V);}}
function D4(a,b,c){return W(Ba(0,b),c);}
function Hk(a,b){var c,d,e,f,g;b=b.data;a.hq=1;a.hp=1;c=En(b[0]);d=Fy(b[1]);e=(En(b[2])).data[0];a.e.g=AAn(c,d);Vj(a,ABU(e));Gf(Cg(a),AT$);FS(Cg(a));f=JR(Fu(),a.ep);g=new M;O(g);G(Ht(G(g,B(225)),f),B(226));$rt_globals.console.info($rt_ustr(N(g)));}
function Vj(a,b){var c,d;c=Df(a.e);if(!Dg(c,b)){d=new M;O(d);G(G(G(G(d,B(227)),c),B(228)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.ix=b;}}
function Cg(a){return a.d2.id;}
function QR(a,b){var c,d,e,f,g,h,i;c=Es(b);d=new M;O(d);G(G(d,B(229)),c);$rt_globals.console.info($rt_ustr(N(d)));MR(Cg(a),Es(b));Cz(a,0,0,0);a.ep=Fu();a.hq=0;a.hp=0;e=new H3;f=R(Bv,1);f.data[0]=B(31);PJ(e,f,null,AOW(B(31),B(31),Es(b),null));a.e=e;Cz(a,0,0,0);c=Es(b);g=FP(c,46,I(c)-1|0);if(g!=(-1))c=Db(c,g);h=!Bo(c,B(230))?5120:10240;c=new Wf;c.qr=a;c.qs=h;c.qt=b;i=b.eD;if(i!==null)Ls(c,I4(b,i.size));else{i=b.gi.getFile();d=new SA;d.lO=b;d.lP=c;b=new SD;b.sS=c;i.then(Bk(d,"f"),Bk(b,"f"));}}
function Hd(a,b,c,d,e){if(G7(a,e))return 1;if(c&&d)return 1;if(c)a.bi=D4(a,a.bi+((Bb(b,a.W)*12|0)/10|0)|0,EN(a));else if(!d){Ic(a,a.x+b|0,e);Sr(a);}return 1;}
function Tg(a,b,c,d){var e,f,g;if(G7(a,d))return 1;e=Fi(a);if(!c)f=a.w+b|0;else if(b>=0)f=GA(e,a.w);else{f=a.w;if(!f)f=(-1);else{c=HX(e,f);if(c>0&&e.c_.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.c_.data[c-1|0];}}if(f>e.N){if((a.x+1|0)<CA(a.e.g))Cz(a,a.x+1|0,0,d);}else if(f>=0)Dj(a,f,d);else{b=a.x;if(b>0){g=(B2(a.e.g,b-1|0)).N;Cz(a,a.x-1|0,g,d);}}OT(a);return 1;}
function G7(a,b){if(Di(a.p)&&!b){EY(a);Gz(a);return 1;}if(!(b&&Di(a.p)))EY(a);return 0;}
function Cz(a,b,c,d){a.w=c;return Ic(a,b,d);}
function Ic(a,b,c){a.x=Eo(0,b,CA(a.e.g)-1|0);return Dj(a,a.w,c);}
function Dj(a,b,c){a.w=Eo(0,b,(Fi(a)).N);a.gM=a.d2.bG===0.0?0:GF(Fi(a),a.w,a.V.cr,a.cp);K0(a);Gz(a);if(c)a.p.cL=1;J8(a.p,a.x,a.w);a.p.cL=0;return 1;}
function Li(a,b,c){var d;d=QD(a.p);Dj(a,b,c);a.p=d;}
function Gz(a){Sr(a);OT(a);}
function Sr(a){var b,c,d,e,f;b=a.bi;c=b+Dz(a)|0;d=a.x;e=a.W;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))a.bi=D4(a,d-e|0,EN(a));else if(f>(c-e|0))a.bi=D4(a,(f-Dz(a)|0)+a.W|0,EN(a));}
function OT(a){var b,c,d,e,f;b=CX(a.d2.bG*30.0);c=a.cg;d=c+DK(a)|0;e=a.gM;f=e+b|0;if(e<(c+b|0))a.cg=D4(a,e-b|0,F9(a));else if(f>(d-b|0))a.cg=D4(a,(f-DK(a)|0)+b|0,F9(a));}
function Sz(a,b,c){var d,e,f,g,h,i,j,k,l;Ud(a);d=a.e.g;e=Em(d.dS,c);if(e!==null)a.hO=Pu(d,e);if(e!==null)c=e;a:{f=Em(d.d_,c);if(f!==null){c=BR(f);while(true){if(!B3(c))break a;g=BV(c);BX(a.hG,Pu(d,g));}}}h=b.bs;i=b.bE;b=a.d1;c=Df(a.e);d=GE(a.e);j=(Cn(b.nC)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.sB(c,d)){c=b.vO;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new Sy;b.vu=a;b.vv=d;b.vs=h;b.vt=i;c.q2(d,h,i,b,a.gy);}}
function He(a,b){var c;Cz(a,b.bs,b.bE,0);c=GA(Fi(a),a.w);B1(a.p.bz,a.x,c);B1(a.p.bI,a.x,a.w);}
function EL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.cl;e=c-d.b|0;f=Eo(0,((b.a-d.a|0)+a.bi|0)/a.W|0,CA(a.e.g)-1|0);g=Ba(0,(e-a.cE|0)+a.cg|0);b=B2(a.e.g,f);d=a.V.cr;h=a.cp;if(!(b.dU!==null&&!b.fp))KD(b,d,h);i=b.dU;e=b.o.data.length;if(!e)j=0;else if(g<=0)j=0;else{k=i.data;if(g>=k[e-1|0])j=b.N;else{l=S3(i,0,e,g);if(l<0)l=( -l|0)-1|0;if(l==b.o.data.length)j=b.N;else{i=VO(b,d,h,l);j=0;c=0;while(c<l){j=j+I(b.o.data[c].t)|0;c=c+1|0;}c=!l?0:k[l-1|0];e=k[l];l=0;a:{while(true){h=i.data;if(l>=h.length){m=e;break a;}m
=h[l];if(g<m)break;j=j+1|0;l=l+1|0;e=m;c=m;}}if(AT_){b=new M;O(b);S(G(S(G(S(G(b,B(231)),c),B(232)),g),B(233)),m);$rt_globals.console.info($rt_ustr(N(b)));n=j;$rt_globals.console.info(" pos = "+n);}if((g-c|0)>(m-g|0))j=j+1|0;}}}return EK(f,j);}
function So(a,b){var c;c=b.bs;a.x=c;a.w=b.bE;a.gM=GF(B2(a.e.g,c),a.w,a.V.cr,a.cp);K0(a);}
function Fi(a){return B2(a.e.g,a.x);}
function AL6(a,b,c){a.p.cL=0;if(a.fP!==null)a.fP=null;return 1;}
function AN_(a,b,c){var d,e,f;if(!c){d=E6(a.eu,b.k,a.rV,1);a.fP=d;if(d!==null)return 1;d=E6(a.eq,b.k,a.sr,0);a.fP=d;if(d!==null)return 1;Im(a);e=EL(a,b.k);f=Jx(a.e.g,e.bs,e.bE);So(a,e);Sz(a,e,f);if(!b.bx){b=a.p;if(!b.cL)B1(b.bI,a.x,a.w);}b=a.p;b.cL=1;J8(b,a.x,a.w);b=new MK;b.rv=a;a.fP=b;}return 1;}
function AHI(a,b,c,d){var e,f,g,h,i;a:{if(!c){switch(d){case 1:e=b.k;f=EL(a,e);g=Jx(a.e.g,f.bs,f.bE);if(b.ch){b=Kf(a.d1,Df(a.e),GE(a.e));if(b!==null){g=a.e;c=f.bs;d=f.bE;f=new T6;f.uk=a;f.uj=e;b.q2(g,c,d,f,a.gy);}else{b=Em(a.e.g.dS,g);if(b!==null){He(a,b);c=1;}else{b=Em(a.e.g.d_,g);if(b!==null&&!D5(b)){if(b.i!=1){RD(a.h1,e,b,a);c=1;}else{He(a,Bs(b,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EL(a,b.k)).bs;e=B2(a.e.g,c);c=GD(e,a.w);d=GA(e,a.w);b=T0(e,c);if((d-1|0)==e.N){B1(a.p.bI,a.x,Wh(e));B1(a.p.bz,a.x,e.N);}
else{if(b!==null){b=b.t;h=0;c:{while(true){i=b.bP.data;if(h>=i.length)break;if(i[h]!=32){h=0;break c;}h=h+1|0;}h=1;}if(h){h=a.w;if(c==h){c=GD(e,c-1|0);d=GA(e,c);}else{if(d!=h){Pm(a.p,a.x);break b;}c=GD(e,d+1|0);d=GA(e,c);}}}B1(a.p.bI,a.x,c);a.p.cL=1;Cz(a,a.x,d,0);a.p.cL=0;}}Im(a);break a;case 3:break;default:break a;}Pm(a.p,a.x);Wp(a.fb);Im(a);}}return 1;}
function AF4(a,b){var c,d,e,f,g,h,i,j;c=a.fP;if(c!==null){c.m(b);return 1;}c=a.d2.cq;if(Ff(a.eu,b.k,c))return 1;if(Ff(a.eq,b.k,c))return 1;d=a.ew;if(Ha(b.k,d.fw,d.eI)&&GV(c)?1:0)return 1;a:{d=b.k;e=a.cl;f=e.b+a.cE|0;g=e.a;h=DK(a);i=Dz(a);j=d.b;if(f<=j&&j<(f+h|0)){f=d.a;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GV(c);if(b.ch){d=EL(a,b.k);Wz(a.e.g,d);b=a.e.g;if(!M8(b.dS,d)&&!M8(b.d_,d)?0:1)return Du(c,B(165));}return Du(c,B(166));}
function AK6(a,b){var c,d,e,f;c=b.ch;if(c&&b.bj==65){c=CA(a.e.g)-1|0;d=E_(a.e.g,c);B1(a.p.bI,0,0);B1(a.p.bz,CA(a.e.g)-1|0,d);return 1;}if(c&&b.bj==80){Jv(a);return 1;}if(!a.eZ&&c&&b.bj==90){if(Di(a.p))EY(a);b=a.e.g;b.ck=b.ck+1|0;e=b.e1;d=e.i;if(!d)e=null;else{f=(Ee(e,d-1|0)).data;e=Sn(b,f[0]);c=1;while(c<f.length){Sn(b,f[c]);c=c+1|0;}}if(e!==null){Cz(a,e.b,e.a,0);DO(a);}return 1;}if(!c&&!b.c4){if(Bo(b.dm,B(234))){DH(a,B(235));Dj(a,a.w-1|0,0);c=1;}else if(Bo(b.dm,B(236))){DH(a,B(237));Dj(a,a.w-1|0,0);c=1;}else if
(Bo(b.dm,B(43))){DH(a,B(238));Dj(a,a.w-1|0,0);c=1;}else if(Bo(b.dm,B(239))){DH(a,B(240));Dj(a,a.w-1|0,0);c=1;}else if(Bo(b.dm,B(241))){DH(a,B(242));Dj(a,a.w-1|0,0);c=1;}else if(!Bo(b.dm,B(243)))c=0;else{DH(a,B(244));Dj(a,a.w-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c4&&!b.ch)){d=b.bj;if(d>=48&&d<=57){c=d-48|0;e=a.lc.data[c];if(e!==null)e.q();c=1;break a;}}c=0;}if(c)return 1;d=b.bj;if(112<=d&&d<=123)c=1;else b:{switch(d){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(Zx(a,b))return 1;if(a.eZ)c=0;else c:{switch(b.bj){case 8:break;case 9:c=!b.bx?ACT(a):AAC(a);break c;case 13:c=AB$(a);break c;case 46:c=ABP(a);break c;default:c=0;break c;}c=Xi(a);}if(c)return 1;if(b.ch&&b.bj==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(b.bj==27)return 0;return I(b.dm)>0&&DH(a,b.dm)?1:0;}
function VM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bo(B(137),Df(a.e))){b=Cg(a);c=new Mw;c.oY=a;d=R(C,3);e=d.data;e[0]=F7(a.e.g);f=Ks(a);g=T7(a);h=Ba(0,f-100|0);f=W(CA(a.e.g)-1|0,g+100|0);i=BH(3);j=i.data;j[0]=FY(a.e.g,h);k=a.e.g;l=0;f=W(f+1|0,k.B.data.length);m=0;while(m<f){l=l+E_(k,m)|0;if(m!=(k.B.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.g.cU;k=Cl();Vw(n,n.cB,k);i=BH(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bs(k,m);h=p+1|0;o[p]=q.bH;l=h+1|0;o[h]=q.bK;p=l+1|0;o[l]=q.eT;m=m+1|
0;}e[2]=i;C1(b,c,B(245),d);}}
function Jv(a){var b,c,d,e;b=Z4(Df(a.e));if(b!==null){a.ep=Fu();c=Cg(a);d=new V1;d.o$=a;e=R(C,1);e.data[0]=F7(a.e.g);C1(c,d,b,e);}}
function RK(a){var b,c,d,e,f,g,h;b=a.e.g.cU;c=Oy(b,b.cB);if(c===null)return;if(Bo(B(166),Df(a.e)))OI(a.e.g);a:{d=EW([CV(c),C4(c),c.bZ.eT]);e=F7(a.e.g);f=BH(1);g=Df(a.e);h=(-1);switch(KG(g)){case 3401:if(!Bo(g,B(246)))break a;h=3;break a;case 98723:if(!Bo(g,B(247)))break a;h=2;break a;case 3254818:if(!Bo(g,B(137)))break a;h=1;break a;case 3556653:if(!Bo(g,B(166)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Cg(a);c=new SM;c.oy=a;C1(b,c,B(248),H(C,[e,f,d]));}
function Kw(a,b,c){var d,e,f,g,h,i;if(c&&a.eZ)return 0;d=DT(a.p);e=d.I;if(Di(a.p)){f=a.e.g;g=a.p;h=U_(f,g);if(c)Sv(f,g,h);if(c){Cz(a,d.I,d.U,0);EY(a);DO(a);}}else{h=E3(EC(a.e.g.B.data[e]),B(223));i=W(CA(a.e.g)-1|0,e);B1(a.p.bz,i,0);if(e>=(CA(a.e.g)-1|0))B1(a.p.bz,i,E_(a.e.g,i));else B1(a.p.bI,i+1|0,0);if(c)Gq(a);else Cz(a,e,0,0);}b.m(h);return 1;}
function Zx(a,b){var c,d,e,f;a:{switch(b.bj){case 33:c=b.ch?Ic(a,H8(a.bi,a.W),b.bx):Hd(a,2-Vl(Dz(a),a.W)|0,0,b.c4,b.bx);break a;case 34:c=!b.ch?Hd(a,Vl(Dz(a),a.W)-2|0,0,b.c4,b.bx):Ic(a,((a.bi+Dz(a)|0)/a.W|0)-1|0,b.bx);break a;case 35:if(!G7(a,b.bx)&&!Dj(a,(Fi(a)).N,b.bx)){c=0;break a;}c=1;break a;case 36:if(!G7(a,b.bx)&&!Dj(a,0,b.bx)){c=0;break a;}c=1;break a;case 37:c=b.ch;if(c&&b.c4){Im(a);d=a.fb;e=d.cZ;if(e<=0)d=null;else{f=d.ej.data;c=e-1|0;d.cZ=c;d=f[c];}if(d===null)c=0;else{Cz(a,Iv(d),K6(d),0);a.p=QD(d.lr);c
=1;}break a;}c=Tg(a,(-1),c,b.bx);break a;case 38:c=Hd(a,(-1),b.ch,b.c4,b.bx);break a;case 39:c=b.ch;if(c&&b.c4){d=a.fb;c=d.cZ;if(c==(d.ek-1|0))d=null;else{f=d.ej.data;c=c+1|0;d.cZ=c;d=f[c];}if(d===null)c=0;else{Cz(a,Iv(d),K6(d),0);a.p=QD(d.lr);c=1;}break a;}c=Tg(a,1,c,b.bx);break a;case 40:c=Hd(a,1,b.ch,b.c4,b.bx);break a;default:}c=0;}if(c&&b.bx)B1(a.p.bz,a.x,a.w);if(c)Sz(a,EK(a.x,a.w),Jx(a.e.g,a.x,a.w));return c;}
function Im(a){var b,c,d,e,f,g,h;b=a.fb;c=b.cZ;b=c<0?null:b.ej.data[c];if(b!==null&&a.x==Iv(b)&&a.w==K6(b))return;d=a.fb;b=new IL;c=a.x;e=a.w;f=a.p;b.kN=EK(c,e);g=QD(f);b.lr=g;g.cL=0;e=d.cZ;h=d.ek;if(e==(h-1|0))Ma(d,b);else{c=e+1|0;while(c<h){Wp(d);c=c+1|0;}Ma(d,b);}d.cZ=d.cZ+1|0;}
function DO(a){a.e.g.om=IU(Cg(a));}
function Ud(a){a.hO=null;G9(a.hG);}
function Z4(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(KG(b)){case 3401:if(!Bo(b,B(246)))break a;c=2;break a;case 98723:if(!Bo(b,B(247)))break a;c=1;break a;case 3254818:if(!Bo(b,B(137)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(249);break b;case 2:b=B(250);break b;default:b=null;break b;}b=B(251);}}return b;}
var Q4=F();
function AKf(a,b){return ACx(b);}
function Q8(){C.call(this);this.sO=null;}
function AHH(a,b){return ACG(a.sO,b);}
function Jw(){var a=this;C.call(a);a.ju=null;a.nI=null;a.lU=null;}
function AUa(a,b,c){var d=new Jw();Uy(d,a,b,c);return d;}
function Uy(a,b,c,d){a.ju=b.bU;a.nI=c;a.lU=d;}
function AMY(a,b){var c,d;if(b.ch&&b.bj==79){c=a.nI;if(c!==null&&b.bx)U9(a.ju,c);else La(a.ju,a.lU);d=1;}else d=0;return d;}
function Q7(){C.call(this);this.lS=null;}
function AEa(a,b){QR(a.lS,b);}
function Q6(){C.call(this);this.ol=null;}
function APT(a,b){return Mh(a.ol,b);}
function Q5(){C.call(this);this.tv=null;}
function ALx(a,b,c){return Kw(a.tv,b,c);}
function Q_(){C.call(this);this.mz=null;}
function APq(a){var b,c;b=a.mz.cF;BI(b);c=new MV;c.to=b;return c;}
function Q$(){C.call(this);this.rj=null;}
function AJs(a,b,c,d){var e,f;b=a.rj.cF;e=CX((b.W*4|0)*d/150.0);f=CX(c);b.bi=D4(b,b.bi+e|0,EN(b));b.cg=D4(b,b.cg+f|0,F9(b));return 1;}
function Q9(){C.call(this);this.sg=null;}
function AMx(a,b){b=b;return XV(a.sg,b);}
function BW(){var a=this;C.call(a);a.bg=0.0;a.bu=0.0;a.bc=0.0;a.bv=0.0;}
function AR2(a){var b=new BW();AAO(b,a);return b;}
function CD(a,b,c,d,e){a.bg=b;a.bu=c;a.bc=d;a.bv=e;}
function AAO(a,b){a.bg=b.bg;a.bu=b.bu;a.bc=b.bc;a.bv=b.bv;}
function BF(a,b){a.bg=b.bg;a.bu=b.bu;a.bc=b.bc;a.bv=b.bv;return a;}
function APt(a,b){var c;if(a===b)return 1;a:{if(b!==null&&Cm(a)===Cm(b)){b=b;if(b.bg===a.bg&&b.bu===a.bu&&b.bc===a.bc&&b.bv===a.bv?1:0){c=1;break a;}}c=0;}return c;}
var Cy=F(0);
var ATK=null;var ATS=null;var ATG=null;var ATH=null;var ATL=null;var ATM=null;var ATN=null;var ATR=null;var ATY=null;var ATT=null;var ATU=null;var ATO=null;var ATV=null;var ATP=null;var ATW=null;function Dp(){Dp=Br(Cy);ALa();}
function ALa(){ATK=Cv(187);ATS=Cv(0);ATG=Cv(43);ATH=Bm(B(252));ATL=Cv(85);ATM=Cw(60,63,65);ATN=Cw(33,66,131);ATR=Cw(255,255,255);ATY=Cw(0,0,0);ATT=Cw(212,212,212);ATU=Cw(166,214,255);ATO=Bm(B(253));ATV=Bm(B(254));ATP=Bm(B(255));ATW=Bm(B(254));}
function H6(){var a=this;C.call(a);a.M=null;a.v=null;a.bL=null;a.bV=null;}
function AJj(){var a=new H6();Rc(a);return a;}
function RI(a,b,c,d){var e=new H6();AGn(e,a,b,c,d);return e;}
function Rc(a){a.M=new Bh;a.v=new Bh;a.bL=new BW;a.bV=new BW;}
function AGn(a,b,c,d,e){a.M=new Bh;a.v=new Bh;a.bL=new BW;a.bV=new BW;Pd(a,b,c,d,e);}
function Pd(a,b,c,d,e){Bg(a.M,b,c);Bg(a.v,d,e);}
function R1(a){Bg(a.v,0,0);}
function Lm(a){var b;b=a.v;return Bb(b.b,b.a)?0:1;}
function Ej(a,b){return Ha(b,a.M,a.v);}
function Ty(a,b,c,d){var e;e=a.M;BB(b,e.b+c|0,e.a+d|0,a.v,a.bL);}
function Tb(a,b,c,d,e,f){var g,h,i,j;g=a.M;d=g.b+d|0;e=g.a+e|0;g=a.v;h=a.bV;i=a.bL;Ky(b,b.g5);Lw(b.g5,b.by,d,e,g,b.dq);To(b.g5,b.by,c);g=b.g5;j=b.by;HN(j,g.td,h);HN(j,g.tb,i);c=g.oR;j.uniform2f(c,f,0.0);Km(b);}
function ABJ(){H6.call(this);this.cP=null;}
function AJN(){var a=new ABJ();AEx(a);return a;}
function E5(a,b,c,d){var e=new ABJ();AJM(e,a,b,c,d);return e;}
function AEx(a){Rc(a);a.cP=new BW;}
function AJM(a,b,c,d,e){Rc(a);a.cP=new BW;Pd(a,b,c,d,e);}
function GI(a){var b,c;b=a.v;c=a.cP;Bg(b,c.bc-c.bg|0,c.bv-c.bu|0);}
function F8(a,b){Hi(a,0,0,Cb(b),C3(b));}
function Hi(a,b,c,d,e){CD(a.cP,b,c,d,e);}
function Dw(a,b,c,d,e,f){var g;g=a.M;EA(b,g.b+d|0,g.a+e|0,a.v,a.cP,c,a.bL,a.bV,f);}
function F1(a,b){BF(a.bL,b);}
function Hf(a,b){BF(a.bV,b);}
function ZE(){var a=this;C.call(a);a.dy=null;a.kI=0.0;a.gv=0.0;a.f$=0;}
function AKP(){var a=new ZE();APa(a);return a;}
function APa(a){var b;b=RI(0,0,2,20);a.dy=b;a.kI=0.5;a.gv=0.0;Hg(187,187,187,255,b.bL);}
function RH(a){return a.dy.v.a;}
function Py(a){return a.dy.v.b;}
function RV(a,b){var c,d;a:{c=a.f$;if(b>a.gv)while(true){d=a.gv+a.kI;a.gv=d;a.f$=a.f$?0:1;if(b>d)continue;else break a;}}return a.f$==c?0:1;}
function O7(a,b,c){Bg(a.dy.M,b,c);}
function Ro(a,b){a.gv=b+a.kI*1.25;a.f$=1;}
function Uc(a,b,c){if(a.f$)Ty(a.dy,b,c.b,c.a);}
function SR(){C.call(this);this.eN=null;}
function ALX(a,b){var c,d,e,f,g,h,i;c=a.eN;d=c.ji;if(d!==null){e=c.cY.M;f=e.b;g=b.k;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.ji=g;}d=b.k;f=d.b;c=c.f7;e=c.v;h=f-e.b|0;f=d.a-e.a|0;Bg(c.M,h,f);c=a.eN;d=c.bf.bU;b=b.k;f=0;a:{while(true){i=c.gF.data;if(f>=i.length)break;if(Ej(i[f],b)){b=c.tI.data[f];break a;}f=f+1|0;}b=null;}Gf(d,b);return 1;}
function ANn(a,b,c,d){if(!c&&d==2){b=a.eN;VR(b,b.cY);}return 1;}
function AJW(a,b,c){var d,e;d=By();e=new M;O(e);S(G(e,B(256)),c);Bu(d,N(e));if(!c){d=b.k;b=a.eN;b.ji=!Ej(b.cY,d)?null:d;O7(a.eN.gS,d.b,d.a);b=a.eN;Ro(b.gS,IU(b.bf.bU));}return 1;}
function AGd(a,b,c){var d;b=By();d=new M;O(d);S(G(d,B(257)),c);Bu(b,N(d));return 1;}
function QI(){C.call(this);this.tw=null;}
function ALR(a,b){return Of(a.tw,b);}
function QH(){C.call(this);this.ny=null;}
function AOi(a,b){return Of(a.ny,b);}
function QK(){C.call(this);this.vx=null;}
function AOL(a,b,c){var d,e;Bu(By(),B(258));d=!c?B(259):B(28);e=new M;O(e);G(G(G(e,B(260)),d),B(261));Vk(b,N(e));return 1;}
function QJ(){C.call(this);this.tU=null;}
function AOK(a){Bu(By(),B(262));}
function QG(){C.call(this);this.u1=null;}
function AKk(a,b){Bu(By(),B(263));return 1;}
function QF(){C.call(this);this.rR=null;}
function AH4(a,b,c,d){var e,f,g;b=a.rR;e=( -d|0)/10|0;b=b.cY;f=b.v;f.b=f.b+e|0;f.a=f.a+e|0;b=b.M;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function Ii(){var a=this;BW.call(a);a.fS=0;a.fV=0;a.fT=0;a.fU=0;}
function Cv(a){var b=new Ii();APj(b,a);return b;}
function Cw(a,b,c){var d=new Ii();AF7(d,a,b,c);return d;}
function Bm(a){var b=new Ii();ANl(b,a);return b;}
function AUb(a,b,c,d){var e=new Ii();PM(e,a,b,c,d);return e;}
function CU(a){var b=new Ii();N0(b,a);return b;}
function APj(a,b){PM(a,b,b,b,255);}
function AF7(a,b,c,d){PM(a,b,c,d,255);}
function ANl(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.fS=In(L(b,1))*17|0;a.fV=In(L(b,2))*17|0;a.fT=In(L(b,3))*17|0;a.fU=255;}else{a.fS=KU(L(b,1),L(b,2));a.fV=KU(L(b,3),L(b,4));a.fT=KU(L(b,5),L(b,6));a.fU=I(b)!=9?255:KU(L(b,7),L(b,8));}Hg(a.fS,a.fV,a.fT,a.fU,a);return;}}
function PM(a,b,c,d,e){a.fS=b;a.fV=c;a.fT=d;a.fU=e;Hg(b,c,d,e,a);}
function N0(a,b){a.fS=b.fS;a.fV=b.fV;a.fT=b.fT;a.fU=b.fU;BF(a,b);}
function In(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function KU(b,c){return (16*In(b)|0)+In(c)|0;}
function T4(){var a=this;C.call(a);a.lk=null;a.jH=null;}
function Yr(){var a=this;C.call(a);a.eR=null;a.b7=null;a.dW=null;a.fX=null;a.kV=null;a.bX=null;a.fj=null;a.cA=0;a.eo=0;a.lb=0;a.fs=0;a.fl=0;a.iV=null;a.jh=null;a.rG=null;}
function XS(){var a=new Yr();AOM(a);return a;}
function AOM(a){a.b7=AJj();a.dW=new Bh;a.fX=new Bh;a.bX=AUc;a.fs=(-1);}
function Kh(a,b){SJ(a);a.bX=b;}
function HA(a,b){a.eR=b;SJ(a);}
function HJ(a,b){var c,d,e,f,g;a.kV=b.iK;c=b.bd.gq;BF(a.b7.bL,c);c=b.je;BF(a.b7.bV,c);d=0;while(true){e=a.bX.data;if(d>=e.length)break;f=e[d];c=b.bd;f.iZ=c;f=f.c9;g=c.lF;c=c.gq;BF(f.bL,g);BF(f.bV,c);if(a.fs==d)IX(a.bX.data[d],1);d=d+1|0;}}
function Su(a){a.fj=CF(a.fj,null);Bg(a.dW,0,0);a.bX=AUc;a.fs=(-1);R1(a.b7);}
function GC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=H_(b);d=b.bG;BI(a.eR);Cu(c,a.eR);e=Jt(a.eR,1.25);f=0;a.cA=B9(2.0,d);a.eo=B9(3.0,d);a.lb=B9(12.0,d);g=0;h=a.bX.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=PW(c,l.j1);n=a.lb;n=(n+m|0)+n|0;f=Ba(f,n);b=l.c9;l=b.M;l.b=g;l.a=0;l=b.v;l.b=n;l.a=e;CD(b.cP,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.dW;b.b=g;b.a=e;b=a.b7.v;n=a.fl;if(!n){m=a.cA;m=(g+m|0)+Bb(m,a.bX.data.length)|0;}else m=(f+(a.cA*2|0)|0)+(a.eo*2|0)|0;b.b=m;if(!n)e=e+(a.cA*2|0)|0;else{n=a.cA;e=(Bb(e+n|0,a.bX.data.length)
+n|0)+(a.eo*2|0)|0;}b.a=e;}
function Jm(a,b,c){var d,e,f,g,h,i,j;Bg(a.b7.M,b,c);d=a.cA+a.eo|0;e=a.bX.data;f=e.length;g=0;h=d;while(g<f){i=e[g].c9;j=i.M;j.b=b+d|0;j.a=c+h|0;if(!a.fl){if(!i.v.b)ACS();d=d+(i.v.b+a.cA|0)|0;}else{if(!i.v.a)ACS();h=h+(i.v.a+a.cA|0)|0;}g=g+1|0;}}
function ACS(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function D2(a){var b,c;b=a.dW;if(b.b&&b.a)return a.b7.v;c=new Bn;Bl(c,B(264));J(c);}
function SJ(a){Bg(a.dW,0,0);}
function I5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cX;if(!a.bX.data.length)return;a:{if(a.fj!==null){d=a.dW;if(Bb(d.b,d.a))break a;}d=a.dW;if(!Bb(d.b,d.a))GC(a,b);d=a.dW;e=d.b;f=d.a;if(!Bb(e,f))return;d=CL(c,e,f);Cu(d,a.eR);g=Jt(a.eR,0.125);h=a.eR;i=h.dd;j=g+i-(i+h.dX)/16.0;k=a.bX.data;f=k.length;l=0;while(l<f){h=k[l];Cf(d,h.j1,h.c9.cP.bg+a.lb,j);l=l+1|0;}h=CF(a.fj,CS(c));a.fj=h;CM(h,d);FE(d);}if(!Lm(a.b7)){d=a.b7;ABS(c,d.v,d.M,d.bV,a.cA,a.fX);d=a.b7;h=d.v;m=d.M;d=d.bL;e=a.cA;n=a.fX;n.b=(h.b-e|0)-e|0;n.a=(h.a
-e|0)-e|0;BB(c,m.b+e|0,m.a+e|0,n,d);if(a.fl){d=a.b7;ABa(c,d.v,d.M,0,0,Qc(a.kV,b.bG),a.kV.lE,a.fX);}}k=a.bX.data;l=k.length;o=0;while(o<l){Dw(k[o].c9,c,a.fj,0,0,0.0);o=o+1|0;}b:{if(a.fl){k=a.bX.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].c9;m=a.fX;e=(a.b7.v.b-(a.cA*2|0)|0)-(a.eo*2|0)|0;b=h.v;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.M;BB(c,d.b+b.b|0,d.a,m,h.bV);}o=o+1|0;}}}}
function JJ(a,b,c){var d,e,f,g,h,i;d=Ej(a.b7,b);e=!d?(-1):T9(a,b);f=a.fs;if(f!=e){if(f>=0){g=a.bX.data[f];IX(g,0);if(a.rG!==null){f=a.fs;h=By();g=Ct(g);i=new M;O(i);G(G(S(G(i,B(265)),f),B(266)),g);Bu(h,N(i));}}if(e>=0){h=a.bX.data[e];IX(h,1);g=a.jh;if(g!==null)g.m1(b,e,h);}a.fs=e;}return d&&GV(c)?1:0;}
function JB(a,b,c,d){var e,f;e=T9(a,b);if(e>=0){f=a.bX.data[e];if(!LQ(f))f.tp.q();}return 1;}
function T9(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bX.data;if(c>=d.length)return (-1);e=d[c].c9;if(Ej(e,b))return c;if(a.fl){f=e.M;g=f.b;e=e.v;h=e.b;g=g+h|0;i=f.a;f=a.fX;f.b=(a.b7.v.b-(a.cA*2|0)|0)-h|0;f.a=e.a;if(X3(b,g,i,f))break;}c=c+1|0;}return c;}
function RO(a){a.fl=1;}
function Xz(){var a=this;C.call(a);a.cs=null;a.b6=null;a.e0=null;a.iH=null;a.gT=null;a.h$=null;}
function L$(a){var b=new Xz();AE2(b,a);return b;}
function AE2(a,b){a.b6=Cl();a.h$=AUd;a.cs=b;X(b.dB,a);}
function Iu(a,b){a.gT=b;b=BR(a.b6);while(B3(b)){HJ(BV(b),a.gT);}}
function F2(a,b,c,d){var e,f;e=a.cs;f=e.b1;if(Bb(f.b,f.a)&&e.bG!==0.0){if(a.e0!==null&&!DA(a)){a.h$=d;a.iH=Fr(a.cs,a.e0);e=SE(a,b,c,null);b=new R4;b.lT=a;e.iV=b;Ir(a.cs,a);return;}b=new BC;U(b);J(b);}c=new DP;Bl(c,B(267));J(c);}
function DB(a){var b;if(DA(a)){b=a.cs;if(b.eh===a)b.eh=null;Ss(a,null);a.h$.q();a.h$=AUd;}}
function SE(a,b,c,d){var e,f,g,h;e=XS();RO(e);Kh(e,c.f9());HJ(e,a.gT);HA(e,a.iH);GC(e,a.cs);if(d===null)f=b.b;else{g=b.b;f=a.cs.b1.b<((g+(D2(d)).b|0)+(D2(e)).b|0)?g-(D2(e)).b|0:(g+(D2(d)).b|0)-d.eo|0;}h=b.a;b=a.cs.b1;Jm(e,Ba(0,W(f,b.b-(D2(e)).b|0)),Ba(0,W(h,b.a-(D2(e)).a|0)));b=new On;b.l1=a;b.l2=e;e.jh=b;BX(a.b6,e);return e;}
function AFc(a,b,c){var d,e;a.iH=Fr(a.cs,a.e0);d=BR(a.b6);while(B3(d)){e=BV(d);HA(e,a.iH);GC(e,a.cs);}}
function HV(a){var b,c;if(D5(a.b6))return;CK(a.cs.cX,1);b=0;while(true){c=a.b6;if(b>=c.i)break;I5(Bs(c,b),a.cs);b=b+1|0;}}
function JU(a,b){var c,d;c=0;d=a.b6.i-1|0;a:{while(d>=0){c=JJ(Bs(a.b6,d),b.k,a.cs.cq);if(c)break a;d=d+(-1)|0;}}return c;}
function IP(a,b,c,d){var e,f;e=0;f=a.b6.i-1|0;a:{while(f>=0){e=JB(Bs(a.b6,f),b.k,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jh(a,b,c){var d,e,f,g;d=0;e=a.b6.i-1|0;a:{while(e>=0){f=Bs(a.b6,e);g=b.k;d=Ej(f.b7,g);if(!d&&!Lm(f.b7)){f=f.iV;if(f!==null)f.q();}if(d)break a;e=e+(-1)|0;}}return d;}
function ADK(a,b){var c;if(!DA(a))return 0;a:{switch(b.bj){case 27:DB(a);c=1;break a;default:}c=0;}return c;}
function Ss(a,b){var c,d;c=a.b6.i-1|0;a:{while(true){if(c<0)break a;d=Bs(a.b6,c);if(b===d)break;Ee(a.b6,c);Su(d);c=c+(-1)|0;}}}
function DA(a){return a.b6.i<=0?0:1;}
function Sf(){C.call(this);this.r2=null;}
function AMi(a,b){var c;c=a.r2;if(b.bj==32)Su(c.cv);return 0;}
function Si(){C.call(this);this.qL=null;}
function ADn(a,b){var c,d,e,f;b=b;c=a.qL;Bu(By(),B(268));if(!DA(c.dO)){d=c.dO;b=b.k;e=MX(4);f=new Un;f.wy=c;F2(d,b,e,f);}return 1;}
function ACv(){var a=this;C.call(a);a.h2=null;a.hr=0.0;}
function EH(a,b){var c=new ACv();ADe(c,a,b);return c;}
function ADe(a,b,c){a.h2=b;a.hr=c;}
function APP(a,b){if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){b=b;return a.hr===b.hr&&Dg(a.h2,b.h2)?1:0;}return 0;}
function Ko(){var a=this;C.call(a);a.m_=null;a.tm=null;a.je=null;a.ra=null;a.pR=null;a.bd=null;a.iK=null;}
function AUe(a,b,c,d,e,f,g){var h=new Ko();LN(h,a,b,c,d,e,f,g);return h;}
function Fm(){var b,c,d,e,f;b=new Ko;c=new G4;Dp();d=ATH;e=ATL;f=Bm(B(269));EJ();JH(c,d,e,f,AT4,AT0);LN(b,c,Xk(),Bm(B(270)),Bm(B(271)),Bm(B(269)),Xk(),AFm(1,0.125));return b;}
function LN(a,b,c,d,e,f,g,h){a.m_=b;a.tm=c;a.je=d;a.ra=e;a.pR=f;a.bd=g;a.iK=h;}
var Sg=F();
function AHN(a){Bu(By(),B(272));}
var Se=F();
function ANB(a){Bu(By(),B(273));}
function C5(){var a=this;C.call(a);a.c9=null;a.tp=null;a.iZ=null;a.jU=null;a.j1=null;}
function ACa(a,b,c){var d=new C5();J0(d,a,b,c);return d;}
function ARv(a,b,c,d){var e=new C5();ZO(e,a,b,c,d);return e;}
function J0(a,b,c,d){ZO(a,b,c,d,null);}
function ZO(a,b,c,d,e){var f;f=AJN();a.c9=f;a.j1=c;a.iZ=d;a.tp=b;BF(f.bL,d.lF);BF(a.c9.bV,d.gq);a.jU=e;}
function LQ(a){return a.jU===null?0:1;}
function IX(a,b){BF(a.c9.bV,!b?a.iZ.gq:a.iZ.sz);}
function ZW(){var a=this;C.call(a);a.cy=null;a.g2=null;a.pQ=0;}
function ACM(){var a=new ZW();AJp(a);return a;}
function AJp(a){a.cy=Cl();}
function Il(a,b){Qr(a.cy,0,b);}
function Jz(a,b){U7(a.cy,b);}
function Iz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cy.i-1|0;while(c>=0){d=Bs(a.cy,c);d.L.ey(b);e=d.O;f=d.dV;if(!K9(e)){if(!SY(e)&&!(!e.gl&&e.cV!==null)){e.gl=0;P2(e);g=e.dD;h=(g.dd+g.dX+5.0)/10.0;i=CJ(e.gw,e.ir);g=b.cr;j=e.dD;k=e.gA;l=h*2.0;Cu(g,j);m=i+Ka(g,k,l)|0;e.hj=m;m=Eo(0,m,e.r.b);if(m){g=CL(b,m,e.r.a);Cu(g,e.dD);j=e.gA;l=i;h=l+h;k=e.dD;n=k.dd;Cf(g,j,h,l+n-(n+k.dX)/16.0);j=e.cV;if(j===null){j=CS(b);e.cV=j;}CM(j,g);FE(g);CD(e.k6,0.0,0.0,Cb(e.cV),C3(e.cV));}}g=f.ra;j=e.cV;if(j===null)OC(e,b,0,e.r.b,g);else
{i=Cb(j);f=f.pR;j=e.C;m=j.b;o=j.a;j=e.cV;EA(b,m,o,j.e7,e.k6,j,f,g,0.0);m=e.r.b;if(i<m)OC(e,b,i,m-i|0,g);}}CK(b,1);i=CJ(d.bm,2.0);m=K9(d.O);f=d.bm;e=f.jL;f=f.nl;p=m?0:d.O.r.a;g=d.L.r;Bg(f,g.b,g.a+p|0);ABS(b,f,!m?d.O.C:d.L.C,d.dV.je, -i|0,e);f=d.L;ABa(b,f.r,f.C,i,p,Qc(d.dV.iK,d.bm.bG),d.dV.iK.lE,e);c=c+(-1)|0;}}
function X9(a,b){var c,d,e,f,g,h,i;c=a.g2;if(c!==null){c.m(b);return 1;}d=0;while(true){c=a.cy;if(d>=c.i)break;a:{e=Bs(c,d);f=b.k;if(Dy(e.O,f))g=Du(e.bm.cq,null);else{g=CJ(e.bm,7.0);h=CJ(e.bm,25.0);if(UL(e,f.b,g)){i=TW(e,f.b,h);if(OM(e,f.a,g)){g=Du(e.bm.cq,I7(i,B(168)));break a;}if(Ps(e,f.a,g)){g=Du(e.bm.cq,I7( -i|0,B(168)));break a;}}if(Mb(e,f.a,g)){h=QT(e,f.a,h);if(Nt(e,f.b,g)){g=Du(e.bm.cq,I7(h,B(167)));break a;}if(SN(e,f.b,g)){g=Du(e.bm.cq,I7( -h|0,B(167)));break a;}}g=0;}}b:{c:{if(!g){if(!Dy(e.L,b.k))break c;if
(!e.L.bW(b)&&!Du(e.bm.cq,null))break c;}g=1;break b;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function ZV(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cy;if(e>=f.i)break;a:{b:{g=Bs(f,e);if(!Dy(g.O,b.k)){if(!Dy(g.L,b.k))break b;if(!g.L.cn(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function Y4(a,b,c){var d,e,f,g,h,i,j,k;if(a.g2!==null)return 1;d=0;while(true){e=a.cy;if(d>=e.i)break;a:{f=Bs(e,d);if(!c){b:{e=b.k;if(!K9(f.O)&&Dy(f.O,e)){g=f.L.C;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.O.C;i=e.b-i|0;k=e.a-k|0;e=new Bh;g=new Ou;g.pE=f;g.pD=i;g.pz=k;g.py=e;g.pC=h;g.pA=j;}else{h=CJ(f.bm,7.0);i=CJ(f.bm,25.0);if(UL(f,e.b,h)){j=TW(f,e.b,i);if(OM(f,e.a,h)){g=HF(f,e,j,(-1));break b;}if(Ps(f,e.a,h)){g=HF(f,e,j,1);break b;}}if(Mb(f,e.a,h)){i=QT(f,e.a,i);if(Nt(f,e.b,h)){g=HF(f,e,(-1),i);break b;}if
(SN(f,e.b,h)){g=HF(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=Dy(f.O,b.k)?AUf:f.L.is(b,c);e=f.L;if(e===null)g=null;else if(g===null)g=!Dy(e,b.k)?null:AUf;}if(g!==null){a.g2=g;a.pQ=c;return 1;}d=d+1|0;}return 0;}
function ACL(a,b,c){var d,e,f,g;if(c==a.pQ&&a.g2!==null){a.g2=null;return 1;}d=0;while(true){e=a.cy;if(d>=e.i)break;a:{b:{f=Bs(e,d);if(!Dy(f.O,b.k)){if(!Dy(f.L,b.k))break b;if(!f.L.cI(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function KA(a,b,c,d){var e,f;e=0;while(true){f=a.cy;if(e>=f.i)break;if((Bs(f,e)).L.c1(b,c,d))return 1;e=e+1|0;}return 0;}
function AOE(a,b,c){var d,e,f;d=0;while(true){e=a.cy;if(d>=e.i)break;f=Bs(e,d);e=f.L;e.iw(e.C,e.r,c);e=f.O;if(e.ge!==null){e.dD=null;e.hj=0;e.gl=1;}Jq(f);d=d+1|0;}}
function NA(a,b){var c,d,e;c=0;d=0;while(true){e=a.cy;if(d>=e.i)break;Bs(e,d);c=0|c;d=d+1|0;}return c;}
function Pc(a,b,c){var d;d=0;while(true){b=a.cy;if(d>=b.i)break;Bs(b,d);d=d+1|0;}}
function NT(){C.call(this);this.tV=null;}
function AFb(a,b){return b.g6&&b.bj==32?1:0;}
function NU(){C.call(this);this.o2=null;}
function ANT(a,b){var c,d,e,f,g,h;b=b;c=a.o2;if(!DA(c.fK)){d=c.fK;b=b.k;e=R(C5,1);f=e.data;g=new C5;h=new Uo;h.oh=c;J0(g,h,B(274),d.gT.bd);f[0]=g;F2(d,b,FH(e),AUd);}return 1;}
var AAH=F();
function Y3(b){var c,d;c=CL(b,250,64);FQ(c,B(169),25.0);KN(c,187,187,187);Cf(c,B(275),0.0,24.0);Cf(c,B(275),0.25,56.0);d=CS(b);CM(d,c);FE(c);return d;}
function XR(b){var c;c=new U3;c.gh=b;return c;}
function NV(){C.call(this);this.sn=null;}
function AK3(a,b,c,d){return KA(a.sn,b,c,d);}
var Vh=F(0);
var G8=F(0);
var EF=F();
function D5(a){return a.i?0:1;}
function Hl(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=TM(HI(Cm(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BR(a);while(B3(f)){g=b.data;h=e+1|0;g[e]=BV(f);e=h;}return b;}
var Mc=F(0);
function FU(){EF.call(this);this.cm=0;}
function BR(a){var b;b=new MS;b.gm=a;b.lz=a.cm;b.hZ=a.mS();b.fL=(-1);return b;}
function Pz(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(Dg(b,Bs(a,d)))break;d=d+1|0;}return d;}
var HU=F(0);
function Nb(){var a=this;FU.call(a);a.b$=null;a.i=0;}
function Cl(){var a=new Nb();AG4(a);return a;}
function AUg(a){var b=new Nb();L5(b,a);return b;}
function AG4(a){L5(a,10);}
function L5(a,b){a.b$=R(C,b);}
function IM(a,b){var c,d;c=a.b$.data.length;if(c<b){d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.b$=Dc(a.b$,d);}}
function Bs(a,b){IC(a,b);return a.b$.data[b];}
function ALb(a){return a.i;}
function BX(a,b){var c,d;IM(a,a.i+1|0);c=a.b$.data;d=a.i;a.i=d+1|0;c[d]=b;a.cm=a.cm+1|0;return 1;}
function Qr(a,b,c){var d,e,f;OD(a,b);IM(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.b$.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.b$.data[b]=c;a.i=d+1|0;a.cm=a.cm+1|0;}
function Ee(a,b){var c,d,e,f;IC(a,b);c=a.b$.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cm=a.cm+1|0;return d;}
function U7(a,b){var c;c=Pz(a,b);if(c<0)return 0;Ee(a,c);return 1;}
function G9(a){var b,c,d,e,f,g;b=a.b$;c=0;d=a.i;e=null;if(c>d){e=new BC;U(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.i=0;a.cm=a.cm+1|0;}
function IC(a,b){var c;if(b>=0&&b<a.i)return;c=new Bw;U(c);J(c);}
function OD(a,b){var c;if(b>=0&&b<=a.i)return;c=new Bw;U(c);J(c);}
function Js(a,b){var c;c=0;while(c<a.i){b.m(a.b$.data[c]);c=c+1|0;}}
function Nr(a,b){var c,d,e,f,g,h,i;c=a.b$;d=a.i;if(b===null)b=ASI;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}YR(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cm=a.cm+1|0;}
function ACi(){var a=this;C.call(a);a.k9=0;a.k_=0;}
function ANG(){var a=new ACi();AOr(a);return a;}
function AOr(a){var b,c;b=AB5(Ex((AA7())));c=Ex((AA7()))^(-559038737);a.k9=b;a.k_=c;c=0;while(c<19){QL(a);c=c+1|0;}}
function QL(a){var b,c;b=a.k9;c=a.k_;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.k9=c;a.k_=b;return b;}
function AB5(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function HQ(a,b){return 5.960464477539063E-8*(QL(a)&16777215)*b|0;}
function S9(){C.call(this);this.l$=null;}
function AKL(a,b,c){var d;d=a.l$;if(b===0.0)JS(d,100);}
function S$(){C.call(this);this.oZ=null;}
function ADs(a,b){var c,d,e;c=a.oZ;d=b.bj;if(d==32){c.iO=c.iO?0:1;e=1;}else if(d==13){JS(c,1);e=1;}else if(d!=8)e=0;else{VK(c,1);e=1;}return e;}
var MJ=F(0);
function ACZ(b,c){var d;d=new Ul;d.tx=b;d.ty=c;return d;}
function ABF(){var a=this;C.call(a);a.fk=null;a.fF=0;a.h_=0;a.fE=0;}
function Wr(a){var b=new ABF();AG3(b,a);return b;}
function AG3(a,b){a.fk=Cl();a.fE=0;a.h_=2048;a.fF=b;}
function GX(a,b,c){var d,e,f,g,h,i,j;d=c.pr(b);e=a.h_;if(d>e){c=new Bn;f=new M;O(f);BA(S(G(S(G(f,B(276)),d),B(277)),e),41);Bl(c,N(f));J(c);}if(!a.fF){b=new BC;Bl(b,B(278));J(b);}a:{b=new BW;if(d){b:{c=a.fk;if(c.i>0){c=BR(c);g=d;while(true){if(!B3(c))break b;f=BV(c);if(f.bc>=g)break;}CD(b,f.bg,f.bu,g,a.fF);f.bg=f.bg+g;h=f.bc-g;f.bc=h;if(h===0.0)U7(a.fk,f);break a;}}g=a.fE;i=d;CD(b,0.0,g,i,a.fF);c=a.fk;f=new BW;h=a.fE;g=a.h_-d|0;j=a.fF;f.bg=i;f.bu=h;f.bc=g;f.bv=j;BX(c,f);a.fE=a.fE+a.fF|0;}}return b;}
function HO(a,b){var c,d,e,f,g,h,i;a:{c=AR2(b);b=a.fk;if(b.i>0){d=BR(b);while(true){if(!B3(d))break a;e=BV(d);if(e.bu===c.bu){f=e.bg;g=e.bc;h=f+g;i=c.bg;if(h===i){c.bg=f;c.bc=c.bc+g;PV(d);}else{h=c.bc;if(i+h===f){c.bc=h+g;PV(d);}}}}}}BX(a.fk,c);}
function Ww(a){return B0(a.h_,a.fE);}
function Z8(){var a=this;C.call(a);a.vC=20;a.fw=null;a.eI=null;a.hY=null;a.j_=0;a.hX=0;a.iD=0.0;a.co=null;a.ee=null;a.eV=null;a.e9=0;}
function AJ3(){var a=new Z8();AOC(a);return a;}
function AOC(a){a.vC=20;a.fw=new Bh;a.eI=new Bh;a.co=Cl();}
function WK(a,b){var c,d,e,f,g;c=a.e9;if(b==c)return;d=a.co.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Ba(0,(c-1|0)/20|0);f=Ba(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Rz(a,b);a.e9=b;}else{if(a.e9>=b)while(true){if(g<f)break a;a.e9=R2(Bs(a.co,g%d|0),a.ee,a.eV,a.e9,b,e,a.iD);g=g+(-1)|0;}while(f<=g){a.e9=R2(Bs(a.co,f%d|0),a.ee,a.eV,a.e9,b,e,a.iD);f=f+1|0;}}}}
function Tf(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BR(a.co);while(B3(f)){g=BV(f);h=a.fw;i=Bb(a.co.i,a.hX);j=g.ea.a;k=((g.iv.a-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BD(l,c);if(m<=0){Bg(g.fZ,Cb(g.bR),j);CD(g.fn,0.0,0.0,Cb(g.bR),j);It(g,e,k,h,d.iF,d.g8);}else{if(m>0&&k<c){m=Ba(c-k|0,0);Bg(g.fZ,Cb(g.bR),m);CD(g.fn,0.0,0.0,Cb(g.bR),m);It(g,e,k,h,d.iF,d.g8);}if(l>i){m=W(l%i|0,c);Bg(g.fZ,Cb(g.bR),m);CD(g.fn,0.0,b%C3(g.bR)|0,Cb(g.bR),m);It(g,e,0,h,d.iF,d.g8);}}}}
function Jp(a,b,c,d){var e,f,g,h,i,j;e=a.co.i;while(true){f=a.co.i;g=Bb(f,a.hX);if(g>(d+a.j_|0))break;h=B0(0,g);i=new MB;g=a.eI.b;f=a.j_;j=a.hY;i.fZ=new Bh;i.fn=new BW;i.iv=h;i.dr=20;i.d9=f;i.ea=B0(g,20*f|0);i.fq=Sq(j,f);if(i.bR===null)i.bR=CS(b);BX(a.co,i);}if(f==e)return;Rz(a,c);}
function Rz(a,b){var c,d,e,f,g,h,i,j;c=a.co;d=c.i;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=BR(c);while(B3(c)){f=BV(c);g=a.ee;h=a.iD;Ep(g);i=0;while(true){j=f.dr;if(i>=j)break;j=e-Bb(d,j)|0;if(j<b)j=e;e=j+1|0;FW(f,g,C0(e),Bb(f.d9,i)+f.fq|0,h);i=i+1|0;}CM(f.bR,g);}}
function SI(a,b,c,d){var e;a.hY=b;a.j_=c;e=c*20|0;a.hX=e;b=CF(a.ee,CL(d,a.eI.b,e));a.ee=b;Cu(b,a.hY);Ra(a.ee,2);b=CF(a.eV,CL(d,a.eI.b,c));a.eV=b;Cu(b,a.hY);Ra(a.eV,2);}
function Uw(a,b,c,d,e){CG(a.fw,b);Bg(a.eI,c,d);a.iD=e;}
var ABu=F(0);
function ABO(){return AJ0(Cw(96,99,102),Cw(49,51,53),Cw(164,163,163),Cv(50));}
function Vt(){var a=this;C.call(a);a.iI=null;a.pL=null;a.ic=null;}
function AKB(a,b,c){if(!c){b=E6(a.ic.gt,b.k,a.pL,1);a.iI=b;if(b!==null)return 1;}return 1;}
function AL8(a,b,c){if(a.iI!==null)a.iI=null;return 1;}
function AGw(a,b){var c;c=a.iI;if(c!==null){c.m(b);return 1;}c=a.ic;return Ff(c.gt,b.k,c.rC);}
function RR(){C.call(this);this.m$=null;}
function AFR(a,b,c,d){var e,f;b=a.m$;e=(LX(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dH=W(Ba(0,b.dH+Bb(e,f)|0),O8(b));return 1;}
var TC=F(0);
function GV(a){return Du(a,null);}
function TI(b){var c;c=new M$;c.mZ=b;return c;}
function Z7(){var a=this;C.call(a);a.eB=null;a.cD=null;a.dC=null;a.d5=null;a.l3=null;a.jf=null;}
function G5(){var a=new Z7();AGs(a);return a;}
function AGs(a){var b;a.eB=new Bh;a.cD=new Bh;a.dC=new Bh;a.d5=new Bh;b=new BW;a.l3=b;a.jf=new BW;EJ();BF(b,AT3);BF(a.jf,AUh);}
function O5(a){var b;b=a.cD;return !Bb(b.b,b.a)?0:1;}
function Ig(a,b){return Ha(b,a.dC,a.d5);}
function E6(a,b,c,d){var e,f,g,h,i;e=Ig(a,b);f=Ha(b,a.eB,a.cD);if(!e&&!f)return null;if(!f){if(!d)c.m(Wv(a,b.b-a.dC.b|0));else c.m(NR(a,b.a-a.dC.a|0));}g=!d?a.eB.b+(a.cD.b/2|0)|0:a.eB.a+(a.cD.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new M9;b.rK=a;b.rM=c;b.rL=i;}else{b=new M7;b.oM=a;b.oL=c;b.oN=i;}return b;}
function ACt(b,c){var d;d=new SZ;d.pF=b;d.lV=c;return d;}
function NR(a,b){var c,d,e;c=a.d5.a;d=a.cD.a;e=c-d|0;return ACt(W(Ba(0,b-(d/2|0)|0),e),e);}
function Wv(a,b){var c,d,e;c=a.d5.b;d=a.cD.b;e=c-d|0;return ACt(W(Ba(0,b-(d/2|0)|0),e),e);}
function H1(a,b,c,d,e,f,g){Nc(a,b,c,d,e,f,g,1);}
function LK(a,b,c,d,e,f,g){Nc(a,b,c,d,e,f,g,0);}
function Nc(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bg(a.d5,0,0);Bg(a.cD,0,0);}else{i=W(g*3|0,d);j=Ba(O1(d,d,e),i);e=e-d|0;i=d-j|0;i=i?O1(b,i,e):0;if(!h){k=a.eB;k.b=i+c|0;k.a=f-g|0;l=a.cD;l.b=j;l.a=g;l=a.dC;l.b=c;l.a=k.a;k=a.d5;k.b=d;k.a=g;}else{k=a.eB;k.b=f-g|0;k.a=i+c|0;l=a.cD;l.b=g;l.a=j;l=a.dC;l.b=k.b;l.a=c;k=a.d5;k.b=g;k.a=d;}}}
function Pg(a,b){FL(a,b);F4(a,b);}
function FL(a,b){var c;c=a.dC;BB(b,c.b,c.a,a.d5,a.l3);}
function F4(a,b){var c,d;c=a.cD;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eB;BB(b,d.b+1|0,d.a+1|0,c,a.jf);b=a.cD;b.b=b.b+2|0;b.a=b.a+2|0;}
function Ff(a,b,c){return Ig(a,b)&&GV(c)?1:0;}
function Pl(){C.call(this);this.sY=null;}
function AMN(a,b){var c,d,e;c=a.sY;if(b.ch&&b.bj==79){if(!b.bx){b=c.bf.bU;d=new Rj;d.s4=c;La(b,d);}else{b=c.bf.bU;d=new Ri;d.vi=c;U9(b,d);}e=1;}else e=0;return e;}
function Qm(){C.call(this);this.uu=null;}
function ADS(a,b){var c,d,e,f;c=b.data;b=By();d=Ct(c[0]);e=new M;O(e);G(G(e,B(190)),d);Bu(b,N(e));b=By();f=c[1];d=new M;O(d);G(G(d,B(279)),f);Bu(b,N(d));}
function Ql(){C.call(this);this.wg=null;}
function APu(a,b){var c,d,e,f,g,h,i;c=b.data;d=By();e=Ct(c[0]);f=new M;O(f);G(G(f,B(190)),e);Bu(d,N(f));g=Fy(QX(b,1));b=By();d=Ct(c[1]);if(g===null)c=B(29);else{c=new M;O(c);BY(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BY(c,B(44));BA(c,i[h]);h=h+1|0;}BY(c,B(45));c=N(c);}e=new M;O(e);G(G(G(G(e,B(280)),d),B(281)),c);Bu(b,N(e));}
function Qk(){C.call(this);this.nw=null;}
function AGa(a,b){TB(a.nw,b);}
function Qj(){C.call(this);this.ub=null;}
function AKY(a,b){var c,d,e,f,g;c=b.data;d=By();e=Ct(c[0]);f=new M;O(f);G(G(f,B(190)),e);Bu(d,N(f));g=En(QX(b,1));b=By();d=Ct(c[1]);c=AA2(g);e=new M;O(e);G(G(G(G(e,B(282)),d),B(283)),c);Bu(b,N(e));}
function Qh(){C.call(this);this.vk=null;}
function AKb(a,b){var c,d;c=K1();b=Ct(b);d=new M;O(d);G(G(d,B(284)),b);Bu(c,N(d));b=new E8;U(b);J(b);}
function Qg(){C.call(this);this.oX=null;}
function AL5(a,b){var c,d,e,f;c=a.oX;d=c.bf.bU;e=new Np;e.p3=c;f=R(C,1);f.data[0]=b;C1(d,e,B(285),f);}
function SQ(){C.call(this);this.kD=null;}
function ANV(a,b){var c,d,e,f,g,h;c=a.kD;d=c.k1;if(d!==null){e=c.dv.M;f=e.b;g=b.k;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.k1=g;}b=b.k;f=b.b;c=c.es;d=c.v;f=f-d.b|0;h=b.a-d.a|0;Bg(c.M,f,h);return 1;}
function AOg(a,b,c){var d;if(!c){d=b.k;b=a.kD;if(!Ej(b.dv,d))d=null;b.k1=d;}return 1;}
function Th(){var a=this;C.call(a);a.ik=null;a.oD=null;a.iP=null;}
function AEt(a,b,c){if(!c){b=E6(a.iP.hm,b.k,a.oD,1);a.ik=b;if(b!==null)return 1;}return 1;}
function AE9(a,b,c){if(a.ik!==null)a.ik=null;return 1;}
function AD4(a,b){var c;c=a.ik;if(c!==null){c.m(b);return 1;}c=a.iP;return Ff(c.hm,b.k,TI(c.bf.bU));}
function Ne(){C.call(this);this.sq=null;}
function ADW(a,b,c,d){var e,f;b=a.sq;e=(LX(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ed=W(Ba(0,b.ed+Bb(e,f)|0),QQ(b));return 1;}
function Rt(){C.call(this);this.qn=null;}
function ANZ(a,b){var c,d;a:{c=a.qn;switch(b.bj){case 67:LS(c);d=1;break a;case 86:Qe(c);d=1;break a;default:}d=0;}return d;}
var Rs=F();
function AGx(a,b,c){return 0;}
function Rq(){C.call(this);this.oi=null;}
function ANo(a,b,c){var d,e;d=a.oi;c=d.dg+1|0;d.dg=c;d=HB(E(H2));e=new M;O(e);G(G(S(e,c),B(286)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Vk(b,e);return 1;}
var Rp=F();
function ALr(a){return null;}
function Rr(){C.call(this);this.mF=null;}
function AEZ(a){var b,c;b=a.mF;c=new Pb;c.qw=b;return c;}
function QZ(){C.call(this);this.v6=null;}
function AGD(a,b){return 0;}
function Ku(){var a=this;C.call(a);a.lB=null;a.t8=null;a.ui=0.0;a.nO=0;a.ur=0;a.uW=0;a.pt=0;a.vN=0;a.dd=0.0;a.dX=0.0;a.uf=0.0;a.iU=0.0;a.uo=0;a.ms=null;}
function DZ(a){return CX(a.dd+a.dX);}
function Jt(a,b){return CX((a.dd+a.dX)*b);}
function PG(){C.call(this);this.v3=null;}
function AG9(a,b){return b.g6&&b.bj==32?1:0;}
function PH(){C.call(this);this.o4=null;}
function ADt(a,b){var c,d,e,f,g,h;b=b;c=a.o4;if(!DA(c.fh)){d=c.fh;b=b.k;e=R(C5,1);f=e.data;g=new C5;h=new Qt;h.md=c;J0(g,h,B(274),d.gT.bd);f[0]=g;F2(d,b,FH(e),AUd);}return 1;}
function PI(){C.call(this);this.qo=null;}
function AMr(a,b,c,d){return KA(a.qo,b,c,d);}
function H3(){var a=this;C.call(a);a.fB=null;a.g=null;a.ix=null;a.oP=null;}
function AUi(a,b,c){var d=new H3();PJ(d,a,b,c);return d;}
function PJ(a,b,c,d){var e,f,g,h,i,j,k;a.fB=d;a.ix=c;if(d===null)c=null;else{c=d.eL;c=c===null?null:!D6(c,B(287))&&!D6(c,B(288))&&!D6(c,B(289))&&!D6(c,B(290))&&!D6(c,B(291))&&!D6(c,B(292))?(D6(c,B(230))?B(137):!D6(c,B(293))?null:B(246)):B(247);}e=b.data;a.oP=c;c=new Hp;f=e.length;if(!f)g=L_(B(31));else{g=R(Cx,f);h=g.data;i=0;while(i<f){j=new Cx;k=R(B5,1);k.data[0]=Q1(e[i]);HH(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.dS=HE();c.d_=HE();c.e1=Cl();if(!b.length){c=new BC;U(c);J(c);}c.B=g;c.fi=0;c.ck=0;c.cU=Tc(c);a.g=c;}
function Df(a){var b;b=a.ix;if(b===null)b=a.oP;return b;}
function GE(a){var b;b=a.fB;return b===null?null:b.ho;}
function ZG(){var a=this;C.call(a);a.ho=null;a.kz=null;a.eL=null;a.wu=null;}
function AOW(a,b,c,d){var e=new ZG();AJe(e,a,b,c,d);return e;}
function AJe(a,b,c,d,e){a.ho=b;a.kz=c;a.eL=d;a.wu=e;}
function AOu(a,b){var c;if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){c=b;return Dg(a.ho,c.ho)&&Dg(a.kz,c.kz)&&Dg(a.eL,c.eL)?1:0;}return 0;}
var N2=F(0);
var Om=F();
function AHd(a,b,c){var d,e;d=b;e=c;b=new M;O(b);S(G(S(G(b,B(294)),d),B(295)),e);CE(N(b));return d+e|0;}
var N3=F(0);
var Ok=F();
function AIk(a,b,c){var d,e;d=b;e=c;b=new M;O(b);E$(G(E$(G(b,B(296)),d),B(295)),e);CE(N(b));return d+e;}
var Yk=F();
var Xt=F(0);
function LU(){C.call(this);this.mQ=null;}
function AJw(a){Kb(a.mQ);}
function LV(){C.call(this);this.pg=null;}
function AH1(a){Ji(a.pg);}
function U1(){var a=this;C.call(a);a.mC=null;a.rq=null;a.rJ=null;a.nC=null;a.l9=null;a.qa=null;}
function Kf(a,b,c){return Wx(a,Cn(a.mC),b,c);}
function UK(a,b,c){return Wx(a,Cn(a.rq),b,c);}
function Wx(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.sB(c,d))return g.uD;f=f+1|0;}return null;}
function MN(a,b,c){var d,e,f,g;d=(Cn(a.rJ)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.sB(b,c))return g.uM;f=f+1|0;}return null;}
function Xa(){var a=this;C.call(a);a.bI=null;a.bz=null;a.cL=0;}
function ALi(){var a=new Xa();ADZ(a);return a;}
function QD(a){var b=new Xa();ADm(b,a);return b;}
function ADZ(a){a.bI=new F$;a.bz=new F$;}
function ADm(a,b){var c;c=new F$;a.bI=c;a.bz=new F$;Wj(c,b.bI);Wj(a.bz,b.bz);a.cL=b.cL;}
function J8(a,b,c){B1(a.bz,b,c);if(!a.cL)B1(a.bI,b,c);}
function Pm(a,b){B1(a.bI,b,0);B1(a.bz,b+1|0,0);}
function DT(a){if(WM(a.bI,a.bz)>0)return a.bz;return a.bI;}
function Fo(a){if(WM(a.bI,a.bz)<0)return a.bz;return a.bI;}
function Di(a){var b,c;b=a.bI;c=a.bz;return (b===c?1:c!==null&&Cm(b)===Cm(c)?(b.I==c.I&&b.U==c.U?1:0):0)?0:1;}
function Yy(a,b){var c,d;if(!Di(a))return 0;c=DT(a);d=Fo(a);return c.I<=b&&b<d.I?1:0;}
function ML(){var a=this;C.call(a);a.ej=null;a.ek=0;a.cZ=0;}
function Ma(a,b){var c,d,e;c=a.ek;d=a.ej;if(c==d.data.length)a.ej=Dc(d,c+16|0);d=a.ej.data;e=a.ek;a.ek=e+1|0;d[e]=b;}
function Wp(a){var b,c,d;b=a.cZ;c=a.ek-1|0;if(b==c)a.cZ=b-1|0;d=a.ej.data;a.ek=c;d[c]=null;}
function EM(){var a=this;C.call(a);a.bM=0;a.bN=null;a.d4=null;a.dl=0;a.cR=0;}
var AT9=0;var AUj=0;var AT8=0;function KB(b,c){return (c-DZ(b)|0)/2|0;}
function Sq(b,c){return KB(b,c)+b.pt|0;}
function AAU(a,b,c,d,e){var f,g;if(D5(a.d4))return;if(e>ES(a.bN))return;f=e/1024|0;e=a.cR;if(f==e)return;if(LX(f-e|0)>=a.dl){g=0;while(g<a.dl){HC(a,b,d,c,f+g|0);g=g+1|0;}a.cR=f;return;}while(true){e=a.cR;if(e>=f)break;HC(a,b,d,c,e+a.dl|0);a.cR=a.cR+1|0;}while(true){e=a.cR;if(e<=f)break;HC(a,b,d,c,e-1|0);a.cR=a.cR-1|0;}}
function HC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Ep(b);f=a.bN.e5;g=e*1024|0;h=Oh(a,g);if(h>=a.bN.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bM;a:{while(true){l=a.bN.o.data;if(h>=l.length)break a;m=l[h];n=!AT8?Sq(d.data[m.b3],c):KB(d.data[m.b3],c);o=f.data;Cu(b,d.data[m.b3]);Cf(b,m.t,k,n);k=o[h]-j+a.bM;if(k>1024.0)break;h=h+1|0;}}CM(Bs(a.d4,e%a.dl|0),b);}
function AAZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(D5(a.d4))return;if(!a.dl)return;if(j>ES(a.bN))return;o=a.bN;p=o.dU;q=o.o;r=j/1024|0;s=Oh(a,j);t= -a.bM|0;u=i;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=h)break;y=p.data;o=Bs(a.d4,r%a.dl|0);z=v[s];ba=y[s]+a.bM|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=W(be,ba)-j|0;if(bc&&x)bf=bf+a.bM|0;if((t+bf|0)>h)bf=h-t|0;bg=l!==null?0:1;b:{if(!bg){bh=!x
?a.bM:2*a.bM|0;bi=l.b;w=l.a;if(!(bi<w&&j<=w&&(j+bf|0)>(bi+bh|0)?0:1)){bh=0;break b;}}bh=1;}c:{if(!bg){bj=!x?a.bM:2*a.bM|0;if(j>=l.b&&(j+bf|0)<=(l.a+bj|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(z===m)bl=k.pu;bm=BR(n);d:{e:{while(B3(bm)){f:{bn=BV(bm);if(bn!==null){if(!bn.dA(z))break f;else break e;}if(z===null)break e;}}bi=0;break d;}bi=1;}if(bi)bl=k.mD;if(!bk&&!bh){l.a=W(l.a,ES(a.bN));bj=j>=l.b?bf:(W(ba,be)-l.b|0)-(!x?a.bM:0)|0;bi=(j+bf|0)<=(l.a+(!x?a.bM:2*a.bM|0)|0)?0:(W(ba,be)-l.a|0)-(!x?a.bM:0)|0;w=j-bb|0;be
=t+c|0;bo=w;x=bf-bj|0;CD(e,bo,0.0,x,u);Bg(f,x,i);HS(a,d,be,b,f,e,z,o,g,k,0,bl);w=w+bf|0;CD(e,w-bi|0,0.0,bi,u);Bg(f,bi,i);be=be+bf|0;HS(a,d,be-bi|0,b,f,e,z,o,g,k,0,bl);bp=w-bj|0;bi=bj-bi|0;CD(e,bp,0.0,bi,u);Bg(f,bi,i);HS(a,d,be-bj|0,b,f,e,z,o,g,k,1,bl);}else{CD(e,j-bb|0,0.0,bf,u);Bg(f,bf,i);HS(a,d,t+c|0,b,f,e,z,o,g,k,bk,bl);}j=j+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function HS(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bv!==0.0&&f.bc!==0.0){m=j.nq.data[g.cz];if(k)n=j.kY;else{g=m.qD;if(g===null)g=j.iS;if(l===null)l=BI(g);n=l;}g=m.qC;if(AUj)i=0.0;EA(b,c,d,e,f,h,g,n,i);return;}return;}}
function Oh(a,b){var c,d,e,f,g,h,i;c=a.bN;d=c.e5;e=0;f=c.o.data.length;g=b;b=BD(e,f);if(b>0){c=new BC;U(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AA9(a,b,c,d,e,f){var g,h;a.cR=f/1024|0;while(true){g=a.d4;if(g.i>=a.dl)break;BX(g,CS(c));}h=0;while(h<a.dl){HC(a,b,e,d,a.cR+h|0);h=h+1|0;}}
function PE(a){a.bN=null;Js(a.d4,new PF);G9(a.d4);}
function AAJ(a,b,c,d,e,f,g,h,i){var j,k;j=ES(a.bN);if(j)j=j+a.bM|0;if(!j)j=j-a.bM|0;k=Ba( -a.bM|0,j-g|0);if(k>=h)return;Bg(f,h-k|0,e);BB(b,c+k|0,d,f,i);}
function Y7(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EM,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B2(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bN===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EM;f.bM=3;f.d4=Cl();f.cR=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)PE(o);h=h+1|0;}return g;}
function ABs(){AT8=0;}
function TT(){C.call(this);this.wj=null;}
function TS(){C.call(this);this.pV=null;}
function AMX(a,b){var c;c=a.pV;c.bi=FB(b,EN(c));}
function TO(){C.call(this);this.m0=null;}
function AKW(a,b){var c;c=a.m0;c.cg=FB(b,F9(c));}
function TN(){C.call(this);this.rU=null;}
function AMU(a){var b,c;b=a.rU;c=b.hD?0:1;b.hD=c;b=new M;O(b);FT(G(b,B(297)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TQ(){C.call(this);this.qg=null;}
function AH6(a){var b,c;b=a.qg;c=b.ht?0:1;b.ht=c;b=new M;O(b);FT(G(b,B(298)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TP(){C.call(this);this.nd=null;}
function AKi(a){var b,c;b=a.nd;c=b.iW^1;b.iW=c;b=new M;O(b);FT(G(b,B(299)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Uf(){C.call(this);this.sp=null;}
function AMl(a){var b,c,d,e,f;b=a.sp;c=(b.ks+3|0)%6|0;b.ks=c;d=b.f8.data;e=d.length;f=0;while(f<e){b=d[f];b.bM=c;b=b.bN;if(b!==null)b.hA=1;f=f+1|0;}}
var Fh=F(Cr);
var AT6=null;var AUk=null;var AT7=null;var AUl=null;function ADC(){ADC=Br(Fh);AKp();}
function AAs(a,b){var c=new Fh();AAg(c,a,b);return c;}
function AAg(a,b,c){ADC();DE(a,b,c);}
function AKp(){var b;AT6=AAs(B(300),0);AUk=AAs(B(301),1);b=AAs(B(302),2);AT7=b;AUl=H(Fh,[AT6,AUk,b]);}
function IS(){var a=this;C.call(a);a.dG=null;a.er=null;a.e7=null;}
var ATj=0;function AAX(a){var b;b=a.er;if(b!==null){ATj=ATj-1|0;a.dG.c$.deleteTexture(b);a.er=null;}}
function Cb(a){return a.e7.b;}
function C3(a){return a.e7.a;}
function SH(a,b,c,d){var e;e=a.e7;e.b=b;e.a=c;Lg(a);a.dG.c$.texStorage2D(3553,1,d,b,c);e=a.dG.c$;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Lg(a){var b,c;b=a.dG.c$;c=a.er;b.bindTexture(3553,c);}
function CM(a,b){My(a,b.la,b.ko,32856);O2(a,b,0,0);}
function My(a,b,c,d){var e,f,g,h;a:{e=a.e7;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){Lg(a);break a;}e=a.dG.c$;h=a.er;e.deleteTexture(h);a.er=a.dG.c$.createTexture();SH(a,b,c,d);break a;}}SH(a,b,c,d);}}
function Hx(a,b,c,d){Lg(a);O2(a,b,c,d);}
function O2(a,b,c,d){var e;e=a.dG.c$;b=b.i9;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Rk=F();
function APU(a,b){return ACx(b);}
function Rl(){C.call(this);this.qM=null;}
function ADx(a,b){return Mh(a.qM,b);}
function SK(){C.call(this);this.jG=null;}
var AUc=null;function O9(){var a=new SK();Zv(a);return a;}
function Zv(a){a.jG=Cl();}
function DY(a,b,c,d){OQ(a,ACa(d,b,c));}
function Eb(b,c,d){return ACa(d,b,c);}
function Ew(a,b,c,d){OQ(a,ARv(null,b,c,d));}
function OQ(a,b){BX(a.jG,b);}
function G6(a){return FH(Hl(a.jG,AUc));}
function Xl(){AUc=R(C5,0);}
var WO=F(0);
var AUd=null;function ABQ(){AUd=new M1;}
function G4(){var a=this;C.call(a);a.nu=null;a.sf=null;a.s7=null;a.pk=null;a.nh=null;a.h8=null;}
function AUm(a,b,c,d,e){var f=new G4();JH(f,a,b,c,d,e);return f;}
function JH(a,b,c,d,e,f){a.h8=Cv(255);a.nu=b;a.sf=c;a.s7=d;a.pk=e;a.nh=f;}
function GY(){var a=this;C.call(a);a.lF=null;a.gq=null;a.sz=null;}
function AUn(a,b,c){var d=new GY();Lj(d,a,b,c);return d;}
function Lj(a,b,c,d){a.lF=b;a.gq=c;a.sz=d;}
function Xk(){var b,c;b=new GY;c=Bm(B(303));EJ();Lj(b,c,AT1,AT2);return b;}
function ACD(){var b,c;b=new GY;Dp();c=ATY;EJ();Lj(b,c,ATZ,AT2);return b;}
function AC5(){var a=this;C.call(a);a.lE=null;a.pX=0;}
function AFm(a,b){var c=new AC5();AO_(c,a,b);return c;}
function AO_(a,b,c){var d;d=new BW;a.lE=d;a.pX=b;d.bv=c;}
function Qc(a,b){return B9(a.pX,b);}
var Hz=F(0);
var V_=F();
function AMF(a,b,c,d){var e;b=By();d=Ct(d);e=new M;O(e);G(G(S(G(e,B(304)),c),B(266)),d);Bu(b,N(e));}
var Wa=F();
function U3(){C.call(this);this.gh=null;}
function ADw(a,b){return JU(a.gh,b);}
function AMH(a,b,c,d){return IP(a.gh,b,c,d);}
function ANA(a,b,c){return Jh(a.gh,b,c);}
function AIt(a,b,c){return DA(a.gh);}
function ABG(){var a=this;C.call(a);a.iF=null;a.g8=null;a.oz=null;a.oH=null;}
function AJ0(a,b,c,d){var e=new ABG();APe(e,a,b,c,d);return e;}
function APe(a,b,c,d,e){a.iF=b;a.g8=c;a.oz=d;a.oH=e;}
function WZ(){C.call(this);this.qk=null;}
function AL9(a,b){var c;c=a.qk.ic;c.dH=FB(b,O8(c));}
function M$(){C.call(this);this.mZ=null;}
function Du(a,b){Gf(a.mZ,b);return 1;}
var Dt=F(0);
var AT3=null;var AUh=null;var AT1=null;var AUo=null;var AT2=null;var AT4=null;var AUp=null;var AT0=null;var ATZ=null;function EJ(){EJ=Br(Dt);AHZ();}
function AHZ(){AT3=W3(50,50,50,100);AUh=W3(80,80,80,200);AT1=Bm(B(305));AUo=Bm(B(270));AT2=Bm(B(306));AT4=Bm(B(307));AUp=Bm(B(270));AT0=Bm(B(306));Dp();ATZ=ATR;}
var AAb=F();
function OV(){C.call(this);this.mA=null;}
function AIB(a,b){var c;c=a.mA.iP;c.ed=FB(b,QQ(c));}
function Qv(){C.call(this);this.lX=null;}
function ADA(a,b){return Du(a.lX,null);}
var Yw=F();
function Hp(){var a=this;C.call(a);a.B=null;a.cU=null;a.dS=null;a.d_=null;a.e1=null;a.ck=0;a.fi=0;a.om=0.0;}
function Tc(a){var b,c,d,e,f,g,h,i;b=St(a);c=new Ih;d=new Nb;e=Nl(0,b,0);f=new WG;f.rS=e;L5(d,1);e=BR(f);g=0;while(true){h=d.b$.data;i=h.length;if(g>=i)break;h[g]=BV(e);g=g+1|0;}d.i=i;Ti(c,d);return c;}
function B2(a,b){return a.B.data[b];}
function CA(a){return a.B.data.length;}
function St(a){return FY(a,CA(a));}
function E_(a,b){return a.B.data[b].N;}
function Kr(a,b){var c,d,e,f,g,h,i;c=a.B.data;d=c[b];e=c[b+1|0];f=DF(K3(d.o,e.o));g=a.B;h=g.data.length;if(b<h&&b>=0){i=R(Cx,h-1|0);c=i.data;P_(g,b,i);c[b]=f;a.B=i;return;}d=new Bn;U(d);J(d);}
function Ow(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.B.data;if(!(c<d[b].N?0:1)){d=(B2(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.t)){f=L(h.t,g);break a;}g=g-I(h.t)|0;f=f+1|0;}f=0;}EE();h=new Bv;d=BQ(1);d.data[0]=f;G2(h,d);Gj(a,b,c,1,h);h=a.B.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].t);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].t)==1)h.o=P_(i,j,R(B5,e-1|0));else{k=d[j];if(c<=0)l=Dv(Db(k.t,1),k.cz,k.b3);else if(c>=(I(k.t)-1|0)){l=new B5;m=k.t;Um(l,B8(m,0,I(m)-
1|0),k.cz,k.b3);}else{i=BQ(I(k.t)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.t,b);b=b+1|0;}b=n.length;while(c<b){m=k.t;e=c+1|0;n[c]=L(m,e);c=e;}l=Dv(FK(i),k.cz,k.b3);}d[j]=l;}h.N=h.N-1|0;D8(h);}else if(b!=(d.length-1|0))Kr(a,b);}
function WT(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Wg(a.B.data[b],c,e[0]);return;}g=f-1|0;h=H$(a.B.data[b],c);d=a.B;i=Dc(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].t);I1(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fe(e[m]))j=DF(R(B5,0));else{j=new Cx;l=R(B5,1);l.data[0]=Dv(e[m],0,0);HH(j,l);}d[b+m|0]=j;m=m+1|0;}I1(h[1],0,0,e[g]);d[b+g|0]=h[1];a.B
=i;}
function U_(a,b){var c,d,e,f,g,h,i;c=DT(b);d=Fo(b);e=c.I;if(e==d.I)return B8(EC(a.B.data[e]),c.U,d.U);f=new M;O(f);b=a.B.data[c.I];e=c.U;BA(BY(f,Db(EC(b),e)),10);g=a.B;h=c.I+1|0;e=d.I;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Xj(BY(f,EC(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.B.data[d.I];i=d.U;BY(f,B8(EC(b),0,i));return N(f);}}b=new VH;U(b);J(b);}
function Sv(a,b,c){var d;TR(a,b);d=DT(b);Gj(a,d.I,d.U,1,c);}
function TR(a,b){var c,d,e,f,g,h,i;a:{c=DT(b);d=Fo(b);e=c.I;if(e==d.I)FI(a.B.data[e],c.U,d.U);else{b=a.B.data[e];FI(b,c.U,b.N);FI(a.B.data[d.I],0,d.U);e=c.I+1|0;f=d.I;g=a.B;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Cx,(h-f|0)+e|0);Zl(g,e,f,i);a.B=i;Kr(a,c.I);break a;}b=new Bn;U(b);J(b);}b=new Bn;U(b);J(b);}}}
function Jx(a,b,c){return EK(b,GD(B2(a,b),c));}
function Wz(a,b){b.bE=GD(B2(a,b.bs),b.bE);}
function MW(a,b){var c,d,e;c=0;d=0;while(true){e=a.B.data.length;if(c>=e)break;if((d+(B2(a,c)).N|0)>=b)return B0(c,b-d|0);d=d+((B2(a,c)).N+1|0)|0;c=c+1|0;}return B0(e,0);}
function FY(a,b){var c,d,e;c=0;d=a.B.data.length;e=0;while(e<b){c=c+E_(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Pu(a,b){return T0(B2(a,b.bs),b.bE);}
function F7(a){var b,c,d,e,f,g,h,i,j;b=BQ(St(a));c=b.data;d=a.B.data.length;e=0;f=0;while(e<d){g=a.B.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].t;O0(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gj(a,b,c,d,e){var f,g,h,i,j,k;a:{a.ck=a.ck+1|0;f=a.e1;g=R(GH,1);h=new GH;h.el=b;h.eW=c;i=Lf(e,B(223),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B0(b,c+I(i[0])|0);break a;}k=B0((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=B0(b,c);}i=g.data;h.kt=k;h.jc=d;h.gD=e;i[0]=h;BX(f,g);I8(a,b,c,d,e);}
function I8(a,b,c,d,e){var f;f=FY(a,b)+c|0;if(!d)OX(a.cU,f,I(e));else S0(a.cU,f,I(e));}
function Sn(a,b){var c,d,e;c=Lf(b.gD,B(223),(-1));if(b.jc){WT(a,b.el,b.eW,c);OX(a.cU,FY(a,b.el)+b.eW|0,I(b.gD));}else{c=c.data;d=ALi();B1(d.bI,b.el,b.eW);e=c.length;if(e==1)B1(d.bz,b.el,b.eW+I(c[0])|0);else B1(d.bz,(b.el+e|0)-1|0,I(c[e-1|0]));TR(a,d);S0(a.cU,FY(a,b.el)+b.eW|0,I(b.gD));}return b.kt;}
function OI(a){a.fi=a.ck;}
var EP=F();
function LA(){EP.call(this);this.uD=null;}
function LY(){EP.call(this);this.uM=null;}
function Pp(){EP.call(this);this.vO=null;}
var H5=F(0);
var Qq=F(0);
function F$(){var a=this;C.call(a);a.I=0;a.U=0;}
function B1(a,b,c){a.I=b;a.U=c;}
function Wj(a,b){a.I=b.I;a.U=b.U;}
function WM(a,b){var c;c=BD(a.I,b.I);if(c)return c;return BD(a.U,b.U);}
function IL(){var a=this;C.call(a);a.kN=null;a.lr=null;}
function Iv(a){return a.kN.bs;}
function K6(a){return a.kN.bE;}
var J$=F(F0);
var AS3=null;function AGM(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AC6(){var b;b=new J$;WX(b);AS3=b;}
var ACn=F();
function H0(b,c){var d,e,f;if(c<=0)return B(31);d=BQ(c);e=d.data;e[0]=ABe(HQ(b,52));f=1;while(f<c){e[f]=ABe(HQ(b,62));f=f+1|0;}return FK(d);}
function ABe(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var Zg=F();
function ACQ(){var a=this;C.call(a);a.Cg=null;a.z1=null;a.A$=0;a.AF=0;}
var AB_=F(0);
function ABU(b){var c;a:{switch(b){case 0:break;case 1:c=B(137);break a;case 2:c=B(247);break a;case 3:c=B(246);break a;default:c=null;break a;}c=B(166);}return c;}
var CP=F();
var AAz=F(CP);
var ABd=F(CP);
var Yo=F(CP);
var YI=F(CP);
var ABH=F(CP);
function ZS(){var a=this;Eu.call(a);a.gg=0;a.cH=null;a.gb=0;a.ts=0.0;a.ki=0;}
function HE(){var a=new ZS();AGi(a);return a;}
function AGi(a){var b;b=ACo(16);a.gg=0;a.cH=R(HK,b);a.ts=0.75;TY(a);}
function ACo(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TY(a){a.ki=a.cH.data.length*a.ts|0;}
function M8(a,b){return R5(a,b)===null?0:1;}
function Em(a,b){var c;c=R5(a,b);if(c===null)return null;return c.fv;}
function R5(a,b){var c,d;if(b===null)c=Rd(a);else{d=X8(b);c=Pn(a,b,d&(a.cH.data.length-1|0),d);}return c;}
function Pn(a,b,c,d){var e,f;e=a.cH.data[c];while(e!==null){if(e.kJ==d){f=e.hH;if(b!==f&&!Xo(b,f)?0:1)break;}e=e.eQ;}return e;}
function Rd(a){var b;b=a.cH.data[0];while(b!==null&&b.hH!==null){b=b.eQ;}return b;}
function Sh(a,b,c){var d,e,f;if(b===null){d=Rd(a);if(d===null){a.gb=a.gb+1|0;d=TJ(a,null,0,0);e=a.gg+1|0;a.gg=e;if(e>a.ki)T_(a);}}else{e=X8(b);f=e&(a.cH.data.length-1|0);d=Pn(a,b,f,e);if(d===null){a.gb=a.gb+1|0;d=TJ(a,b,f,e);e=a.gg+1|0;a.gg=e;if(e>a.ki)T_(a);}}b=d.fv;d.fv=c;return b;}
function TJ(a,b,c,d){var e,f,g;e=new HK;f=null;e.hH=b;e.fv=f;e.kJ=d;g=a.cH.data;e.eQ=g[c];g[c]=e;return e;}
function T_(a){var b,c,d,e,f,g,h,i;b=a.cH.data.length;b=ACo(!b?1:b<<1);c=R(HK,b);d=c.data;e=0;f=b-1|0;while(true){g=a.cH.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.kJ&f;i=h.eQ;h.eQ=d[b];d[b]=h;h=i;}e=e+1|0;}a.cH=c;TY(a);}
function X8(b){var c,d,e,f,g,h;c=R(C,2).data;c[0]=FO(b.bs);c[1]=FO(b.bE);d=(-1515898884);e=0;while(e<c.length){b=c[e];if(b===null)f=0;else{g=b.e8;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;d=JD(h,4)^((h>>>7|0)|h<<25)^JD(d,13);e=e+1|0;}return d;}
function Cx(){var a=this;C.call(a);a.o=null;a.N=0;a.e5=null;a.dU=null;a.c_=null;a.gC=null;a.fp=0;a.hA=0;a.he=0;}
var AUq=0;var AUr=0;var AT_=0;function DF(a){var b=new Cx();HH(b,a);return b;}
function HH(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].t)|0;f=f+1|0;}a.N=d;D8(a);}
function GD(a,b){var c;c=HX(a,b);return c<=0?0:a.c_.data[c-1|0];}
function HX(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.c_!==null&&!a.he)){Vv(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].t)|0;a.c_.data[d]=e;d=d+1|0;}a.he=0;}d=S3(a.c_,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function T0(a,b){var c;c=a.o.data;if(!c.length)return null;return c[HX(a,b)];}
function FI(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.N){a.o=R(B5,0);D8(a);a.N=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].t);i=I(a.o.data[f].t);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.t)?1:0){g=a.o;a.o=P_(g,e,R(B5,g.data.length-1|0));a.N=a.N-d|0;D8(a);return;}a.o.data[e]=Dv(E3(B8(k.t,0,b),Db(k.t,c)),k.cz,k.b3);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.t))a.o.data[e]=Dv(B8(l.t,0,b),l.cz,l.b3);e=e+1|0;}if(c==I(m.t))f=f+1|0;else if(c)a.o.data[f]=Dv(Db(m.t,c),m.cz,m.b3);g=a.o;a.o=Zl(g,e,f,R(B5,(g.data.length-f|0)+e|0));}a.N=a.N-d|0;D8(a);}
function H$(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cx,[DF(R(B5,0)),a]);if(b>=a.N)return H(Cx,[a,DF(R(B5,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].t);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cx,[DF(Kl(c,0,R(B5,d))),DF(Kl(c,d,R(B5,f-d|0)))]);h=e[d];e=Kl(c,0,R(B5,d+1|0));i=e.data;j=Kl(c,d,R(B5,f-d|0));c=j.data;i[d]=Dv(B8(h.t,0,b),h.cz,h.b3);c[0]=Dv(Db(h.t,b),h.cz,h.b3);return H(Cx,[DF(e),DF(j)]);}
function Wg(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].t);if(b<=g)break;b=b-g|0;d=e;}}I1(a,d,b,c);}
function I1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=R(B5,1);h.data[0]=Q1(d);a.o=h;}else if(!b&&!c){i=R(B5,g+1|0);h=i.data;Do(e,0,i,1,g);h[0]=Q1(d);a.o=i;}else{j=f[b];if(c<=0)k=Dv(E3(d,j.t),j.cz,j.b3);else if(c>=I(j.t))k=Dv(E3(j.t,d),j.cz,j.b3);else{l=I(d);m=l+c|0;n=I(j.t)-c|0;h=BQ(I(j.t)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.t,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.t,g+c|0);g=g+1|0;}k=Dv(FK(h),j.cz,j.b3);}f[b]=k;}a.N=a.N+I(d)|0;D8(a);}
function Wh(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<I(f.t)){if(L(f.t,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function KD(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.e5;if(!(e!==null&&e.data.length>=d)){a.e5=ADl(d);a.dU=BH(d);a.fp=1;}Vv(a);if(!a.fp)AUr=AUr+1|0;else{f=0;g=0.0;AUq=AUq+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.t)|0;a.c_.data[h]=f;Cu(b,i[j.b3]);g=g+Eh(b,j.t);a.e5.data[h]=g;a.dU.data[h]=g+0.5|0;h=h+1|0;}a.N=f;a.fp=0;a.he=0;}}
function Vv(a){var b;b=a.c_;if(!(b!==null&&b.data.length>=a.o.data.length)){a.c_=BH(a.o.data.length);a.he=1;}}
function D8(a){a.fp=1;a.hA=1;a.he=1;a.gC=null;}
function VO(a,b,c,d){var e,f,g,h,i,j,k;if(a.gC===null)a.gC=R($rt_arraycls($rt_intcls()),a.o.data.length);e=a.gC.data[d];if(e===null){e=c.data;f=a.o.data[d];Cu(b,e[f.b3]);f=f.t;e=BH(I(f)-1|0);c=Gg(f);g=!d?0.0:a.e5.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;LG(f,c,0,k);h[i]=g+Eh(b,f)+0.5|0;i=k;}a.gC.data[d]=e;}return e;}
function GF(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fp&&a.dU!==null))KD(a,c,d);if(b>=a.N)return a.dU.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].t)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dU.data[f];}return (VO(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function ES(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.dU.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GA(a,b){var c;if(b>=a.N)return b+1|0;c=HX(a,b);return a.c_.data[c];}
function EC(a){var b,c,d,e;b=new M;FM(b,a.N);c=a.o.data;d=c.length;e=0;while(e<d){BY(b,c[e].t);e=e+1|0;}return N(b);}
function L_(b){var c,d,e,f;c=R(Cx,1);d=c.data;e=new Cx;f=R(B5,1);f.data[0]=Q1(b);HH(e,f);d[0]=e;return c;}
function Xn(){AT_=0;}
var M1=F();
function APd(a){}
function Tm(){C.call(this);this.rT=null;}
function AJQ(a){var b;b=a.rT;Bu(By(),b);}
function B5(){var a=this;C.call(a);a.t=null;a.cz=0;a.b3=0;}
function Q1(a){var b=new B5();AN4(b,a);return b;}
function Dv(a,b,c){var d=new B5();Um(d,a,b,c);return d;}
function AN4(a,b){Um(a,b,0,0);}
function Um(a,b,c,d){a.t=b;a.cz=c;a.b3=d;}
function GZ(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Ih(){var a=this;C.call(a);a.cB=null;a.dM=0;}
var AUs=null;var AUt=null;function ARs(a){var b=new Ih();Ti(b,a);return b;}
function AQv(a,b){var c=new Ih();WW(c,a,b);return c;}
function Ux(b,c){var d;d=BD(b.bH,c.bH);if(!d)d=BD(c.bK,b.bK);return d;}
function Ti(a,b){WW(a,null,b);}
function WW(a,b,c){var d,e;a.dM=0;if(D5(c))return;Nr(c,AUs);if(b!==null)a.cB=L0(b);c=BR(c);while(B3(c)){d=BV(c);e=a.cB;if(e!==null){Qd(a,e,L0(d));continue;}a.cB=L0(d);}}
function Oy(a,b){var c;if(b.eC)return b;b=BR(b.br);while(true){if(!B3(b))return null;c=Oy(a,BV(b));if(c!==null)break;}return c;}
function J1(a,b,c){var d,e,f;d=b.bZ;if(d.bH==c.bH&&d.bK==c.bK?1:0){e=BR(b.br);while(B3(e)){f=J1(a,BV(e),c);if(f!==null)return f;}return b;}b=BR(b.br);while(true){if(!B3(b))return null;d=BV(b);if(Pt(d,c.bH,c.bK)){e=J1(a,d,c);if(e!==null)break;}}return e;}
function Vw(a,b,c){BX(c,b.bZ);b=BR(b.br);while(B3(b)){Vw(a,BV(b),c);}}
function OX(a,b,c){a.dM=0;IJ(a,a.cB,b,c);}
function IJ(a,b,c,d){var e;if(C4(b)<c)return;a:{if(CV(b)>c){JZ(b,d);FN(b,d);b=BR(b.br);while(B3(b)){IJ(a,BV(b),c,d);}}else{if(!JI(b,c)){if(a.dM)break a;if(C4(b)!=c)break a;}FN(b,d);if(CV(b)==c&&a.dM)JZ(b,d);e=BR(b.br);while(B3(e)){IJ(a,BV(e),c,d);}if(!a.dM){b.eC=1;a.dM=1;}}}}
function S0(a,b,c){a.dM=0;LE(a,a.cB,b,c);}
function LE(a,b,c,d){var e,f,g,h;if(C4(b)<c)return;e=CV(b);f=c+d|0;if(e>f){e= -d|0;JZ(b,e);FN(b,e);g=BR(b.br);while(B3(g)){LE(a,BV(g),c,d);}b.br=M3(a,b.br);}else{g=b.bZ;if(c<=g.bH&&g.bK<=f?1:0){if(b!==a.cB){IR(b,(-1));JE(b,(-1));}else{IR(b,0);JE(b,0);}G9(b.br);}else{e=JI(b,c);f=JI(b,f);if(e&&f)FN(b, -d|0);else if(e)JE(b,c);else{if(!f)return;IR(b,c);FN(b, -d|0);}h=BR(b.br);while(B3(h)){LE(a,BV(h),c,d);}b.br=M3(a,b.br);if(!a.dM){b.eC=1;a.dM=1;}}}}
function M3(a,b){var c,d,e,f,g,h;c=Cl();d=null;Nr(b,AUt);b=BR(b);while(B3(b)){e=BV(b);if(CV(e)==C4(e))continue;if(!e.eC){if(d!==null){BX(c,d);d=null;}BX(c,e);}else if(d===null)d=e;else{f=W(CV(d),CV(e));g=Ba(C4(d),C4(e));h=L0(Nl(f,g,d.bZ.eT));h.ds=e.ds;h.eC=1;d=h;}}if(d!==null)BX(c,d);return c;}
function Qd(a,b,c){var d,e;a:{if(NZ(b,c)){d=BR(b.br);while(true){if(!B3(d)){BX(b.br,c);c.ds=b;break a;}e=BV(d);if(NZ(e,c))break;}Qd(a,e,c);return;}}}
function Re(a,b,c,d){var e,f,g,h,i,j;if((C4(c)-CV(c)|0)<43)e=B8(d,CV(c),C4(c));else{e=B8(d,CV(c),CV(c)+20|0);f=B8(d,C4(c)-20|0,C4(c));g=new M;O(g);G(G(G(g,e),B(216)),f);e=N(g);}e=Ug(e,B(223),B(308));f=By();g=Ct(c);h=new M;O(h);i=S(h,b);BA(i,32);g=G(i,g);BA(g,9);G(g,e);Bu(f,N(h));c=BR(c.br);j=b+1|0;while(B3(c)){Re(a,j,BV(c),d);}}
function AAV(){AUs=new Ws;AUt=new Wu;}
function ACr(){var a=this;C.call(a);a.bH=0;a.bK=0;a.eT=0;}
function Nl(a,b,c){var d=new ACr();AGo(d,a,b,c);return d;}
function AGo(a,b,c,d){a.bH=b;a.bK=c;a.eT=d;}
function ANp(a,b){var c;if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){c=b;return a.bH==c.bH&&a.bK==c.bK&&a.eT==c.eT?1:0;}return 0;}
function AEX(a,b){var c;b=b;c=BD(a.bH,b.bH);if(!c)c=BD(b.bK,a.bK);return c;}
var Ws=F();
function AHy(a,b,c){return Ux(b,c);}
var Wu=F();
function AI_(a,b,c){b=b;c=c;return Ux(b.bZ,c.bZ);}
var EQ=F();
var AUu=null;var AUv=null;var AUw=null;var AUx=null;var AUy=null;var AUz=null;function AAq(){AUu=new UF;AUv=new UD;AUw=new UE;AUx=new UB;AUy=new UC;AUz=new WY;}
var GL=F(FU);
function AJ6(a,b){var c;c=new E8;U(c);J(c);}
function WG(){GL.call(this);this.rS=null;}
function AGK(a){return 1;}
function AO3(a,b){var c;if(!b)return a.rS;c=new Bw;U(c);J(c);}
function Xm(){var a=this;C.call(a);a.bZ=null;a.ds=null;a.br=null;a.eC=0;}
function L0(a){var b=new Xm();ALO(b,a);return b;}
function ALO(a,b){a.eC=0;a.bZ=b;a.ds=null;a.br=Cl();}
function CV(a){return a.bZ.bH;}
function C4(a){return a.bZ.bK;}
function IR(a,b){a.bZ.bH=b;}
function JE(a,b){a.bZ.bK=b;}
function JZ(a,b){var c;c=a.bZ;c.bH=c.bH+b|0;}
function FN(a,b){var c;c=a.bZ;c.bK=c.bK+b|0;}
function JI(a,b){return CV(a)<=b&&b<C4(a)?1:0;}
function Pt(a,b,c){var d;d=a.bZ;return d.bH<=b&&c<=d.bK?1:0;}
function NZ(a,b){b=b.bZ;return Pt(a,b.bH,b.bK);}
function AHE(a){var b,c,d,e,f;b=a.bZ;c=b.bH;d=b.bK;e=b.eT;b=new M;O(b);BA(b,40);BA(S(G(S(G(S(b,c),B(44)),d),B(44)),e),41);b=N(b);c=a.eC;f=new M;O(f);FT(G(G(f,b),B(44)),c);return N(f);}
var Oa=F(0);
var F3=F(EF);
var JF=F(F3);
var UF=F(JF);
var KP=F(Eu);
var UD=F(KP);
var UE=F(GL);
var Ft=F(0);
var UB=F();
var OE=F(0);
var UC=F();
var WY=F();
function KM(){var a=this;C.call(a);a.iS=null;a.pf=null;a.rw=null;a.tP=null;a.l6=null;a.kY=null;a.pu=null;a.mD=null;a.Z=null;a.nq=null;a.tk=null;}
function AUA(a,b,c,d,e,f,g,h,i,j,k){var l=new KM();MI(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function MI(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=j.data;a.iS=b;a.pf=c;a.rw=d;a.tP=e;a.l6=f;a.kY=g;a.pu=h;a.mD=i;a.nq=j;a.tk=k;if(m.length>=15){a.Z=l;return;}b=new BC;U(b);J(b);}
function MS(){var a=this;C.call(a);a.hc=0;a.lz=0;a.hZ=0;a.fL=0;a.gm=null;}
function B3(a){return a.hc>=a.hZ?0:1;}
function BV(a){var b,c;Oq(a);b=a.hc;a.fL=b;c=a.gm;a.hc=b+1|0;return c.qe(b);}
function PV(a){var b,c,d;if(a.fL<0){b=new DP;U(b);J(b);}Oq(a);a.gm.sU(a.fL);a.lz=a.gm.cm;c=a.fL;d=a.hc;if(c<d)a.hc=d-1|0;a.hZ=a.hZ-1|0;a.fL=(-1);}
function Oq(a){var b;if(a.lz>=a.gm.cm)return;b=new Lb;U(b);J(b);}
var Y2=F();
function U0(){C.call(this);this.iY=null;}
function AM6(a,b){var c,d,e,f,g;c=a.iY;d=c.jx;if(d!==null){e=b.k;f=e.b-d.b|0;g=e.a-d.a|0;e=c.hS;e.b=Eo(0,e.b+f|0,c.gd.b-c.hb.b|0);c=a.iY;d=c.hS;d.a=Eo(0,d.a+g|0,c.gd.a-c.hb.a|0);}a.iY.jx=b.k;return 1;}
var Zd=F();
function J2(){var a=this;C.call(a);a.hH=null;a.fv=null;}
function HK(){var a=this;J2.call(a);a.kJ=0;a.eQ=null;}
function T8(){C.call(this);this.qJ=null;}
function AH7(a,b){Hk(a.qJ,b);}
function U8(){C.call(this);this.ig=null;}
function APi(a){return a.ig;}
function Ce(){Cr.call(this);this.kG=null;}
var AUB=null;var AUC=null;var AUD=null;var AUE=null;var AUF=null;var AUG=null;var AUH=null;var AUI=null;var AUJ=null;var AUK=null;var AUL=null;var AUM=null;var AUN=null;var AUO=null;var AUP=null;var ATQ=null;function Yl(){Yl=Br(Ce);AOT();}
function Dm(a,b,c){var d=new Ce();Sl(d,a,b,c);return d;}
function AOV(a,b,c,d){var e=new Ce();AAy(e,a,b,c,d);return e;}
function Sl(a,b,c,d){Yl();DE(a,b,c);a.kG=Sw(d,null);}
function AAy(a,b,c,d,e){Yl();DE(a,b,c);a.kG=Sw(d,e);}
function AOT(){var b;b=new Ce;Dp();Sl(b,B(309),0,ATH);AUB=b;AUC=Dm(B(310),1,Cw(204,120,50));AUD=Dm(B(311),2,Bm(B(312)));AUE=Dm(B(48),3,Bm(B(313)));AUF=Dm(B(314),4,Bm(B(315)));AUG=Dm(B(316),5,Cw(188,63,60));AUH=Dm(B(317),6,Bm(B(318)));AUI=Dm(B(49),7,Bm(B(319)));AUJ=Dm(B(320),8,Bm(B(321)));AUK=AOV(B(322),9,ATH,Cw(52,65,52));AUL=AOV(B(323),10,Bm(B(324)),Bm(B(325)));AUM=Dm(B(326),11,Bm(B(327)));AUN=Dm(B(328),12,Bm(B(329)));AUO=Dm(B(330),13,Bm(B(331)));b=Dm(B(332),14,Bm(B(333)));AUP=b;ATQ=H(Ce,[AUB,AUC,AUD,AUE,AUF,
AUG,AUH,AUI,AUJ,AUK,AUL,AUM,AUN,AUO,b]);}
function IO(){var a=this;C.call(a);a.qC=null;a.qD=null;}
function Sw(a,b){var c=new IO();AED(c,a,b);return c;}
function AED(a,b,c){a.qC=b;a.qD=c;}
function ACX(){var a=this;C.call(a);a.bm=null;a.O=null;a.L=null;a.dV=null;}
function AAh(a){var b=new ACX();APg(b,a);return b;}
function APg(a,b){var c;a.L=AQi();a.bm=b;c=new Sx;KR(c);c.k6=new BW;c.gw=b;a.O=c;}
function H9(a,b,c,d){var e,f,g,h;e=a.O;f=Dg(e.ge,c)?0:1;g=Dg(e.gA,b)?0:1;h=d===e.ir?0:1;if(f){e.ge=c;e.dD=null;WJ(e,0);}e.gl=!f&&!g&&!h?0:1;e.gA=b;e.ir=d;e.hj=0;Jq(a);}
function Jk(a){var b;b=a.O;b.cV=CF(b.cV,null);a.L=CF(a.L,null);}
function K8(a,b){var c,d,e;c=a.L;d=c.C;e=c.r;b=CF(c,b);a.L=b;b.iw(d,e,a.bm.bG);}
function Fb(a,b,c){var d;d=a.L;d.iw(b,c,d.dE);Jq(a);}
function Jq(a){var b,c,d,e;b=a.O;c=a.L.r.b;b.r.b=c;d=b.cV;if(d!==null&&c!=Cb(d)&&!(c>=b.hj&&Cb(b.cV)>=b.hj))b.gl=1;b=a.O;b.dE=a.bm.bG;if(SY(b))c=0;else{b=a.O;P2(b);e=CJ(b.gw,b.ir);WJ(b,DZ(b.dD)+(e*2|0)|0);c=b.r.a;}b=a.O.C;d=a.L.C;Bg(b,d.b,d.a-c|0);}
function I7(b,c){if(b<0)c=B(334);else if(b>0)c=B(335);return c;}
function Nt(a,b,c){var d;d=a.O.C.b;return (d-c|0)<=b&&b<d?1:0;}
function SN(a,b,c){var d,e;d=a.O;e=d.C.b+d.r.b|0;return e<=b&&b<(e+c|0)?1:0;}
function OM(a,b,c){var d;d=a.O.C.a;return (d-c|0)<=b&&b<d?1:0;}
function Ps(a,b,c){var d,e;d=a.L;e=d.C.a+d.r.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Mb(a,b,c){var d,e,f;d=a.O.C.a-c|0;e=a.L;f=(e.C.a+e.r.a|0)+c|0;return d<=b&&b<f?1:0;}
function QT(a,b,c){var d,e;d=a.O.C.a+c|0;e=a.L;return ABh(b,d,(e.C.a+e.r.a|0)-c|0);}
function UL(a,b,c){var d,e,f;d=a.O;e=d.C.b;f=e-c|0;e=(e+d.r.b|0)+c|0;return f<=b&&b<e?1:0;}
function TW(a,b,c){var d,e;d=a.O;e=d.C.b;return ABh(b,e+c|0,(e+d.r.b|0)-c|0);}
function ABh(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BD(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function HF(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bh;f=new Bh;g=b.b;h=b.a;b=a.L;i=b.C;j=i.b;k=i.a;b=b.r;l=b.b;m=b.a;b=new RZ;b.rY=a;b.rZ=e;b.r0=f;b.r1=c;b.r3=g;b.r4=j;b.r5=l;b.r6=d;b.r7=h;b.r8=k;b.qZ=m;return b;}
var KV=F(0);
function Qn(){C.call(this);this.nT=null;}
function AKu(a,b){return PW(a.nT,b);}
function ABW(){var a=this;C.call(a);a.bs=0;a.bE=0;}
function EK(a,b){var c=new ABW();AJf(c,a,b);return c;}
function AJf(a,b,c){a.bs=b;a.bE=c;}
function Xo(a,b){var c;if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){c=b;return a.bs==c.bs&&a.bE==c.bE?1:0;}return 0;}
function AL0(a,b){var c;b=b;c=BD(a.bs,b.bs);if(!c)c=BD(a.bE,b.bE);return c;}
function MK(){C.call(this);this.rv=null;}
function AG7(a,b){var c;c=a.rv;So(c,EL(c,b.k));J8(c.p,c.x,c.w);Gz(c);}
var XX=F();
function B9(b,c){return CX(b*c);}
var W_=F();
function ABS(b,c,d,e,f,g){g.b=c.b;g.a=f;BB(b,d.b,d.a,g,e);BB(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;BB(b,d.b,d.a+f|0,g,e);BB(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ABa(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;BB(b,j,k,i,h);BB(b,j,k,i,h);BB(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;BB(b,l,j,i,h);BB(b,l,j,i,h);BB(b,l+g|0,j+g|0,i,h);}
function MB(){var a=this;C.call(a);a.bR=null;a.iv=null;a.ea=null;a.dr=0;a.d9=0;a.fZ=null;a.fn=null;a.fq=0;}
function R2(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dr;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Ba(i,e))a:{while(true){if(d<=e){j=d;break a;}Ep(c);j=d+(-1)|0;b=C0(d);d=Bb(j,a.d9)%a.ea.a|0;FW(a,c,b,a.fq,g);Hx(a.bR,c,0,d);if(!(j%a.dr|0))break;d=j;}}else{Ep(b);k=a.dr-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FW(a,b,C0(j),Bb(a.d9,k)+a.fq|0,g);k=k+(-1)|0;j=h;}CM(a.bR,b);j=Ba(i,e);}return j;}k=a.dr;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=W(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Ep(c);b=C0((d+f|0)+1|0);j=d+
1|0;d=Bb(d,a.d9)%a.ea.a|0;FW(a,c,b,a.fq,g);Hx(a.bR,c,0,d);if(!(j%a.dr|0))break;d=j;}}else{Ep(b);d=0;while(d<a.dr){h=h+1|0;FW(a,b,C0((h>e?h-f|0:h)+f|0),Bb(a.d9,d)+a.fq|0,g);d=d+1|0;}CM(a.bR,b);j=W(i,e);}return j;}
function It(a,b,c,d,e,f){EA(b,a.iv.b+d.b|0,c+d.a|0,a.fZ,a.fn,a.bR,e,f,0.0);}
function FW(a,b,c,d,e){Cf(b,c,a.ea.b-20.0*e,d);}
var FC=F(HY);
var V$=F(Ez);
function Px(){C.call(this);this.me=null;}
function ALn(a,b){var c,d;c=a.me;d=c.dg+1|0;c.dg=d;c=new M;O(c);G(G(S(c,d),B(336)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Te(){C.call(this);this.oE=null;}
function ANQ(a){var b,c;b=a.oE;c=new M;O(c);G(G(G(c,B(337)),b),B(338));$rt_globals.console.info($rt_ustr(N(c)));}
var Xq=F();
function Ha(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function X3(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
var Lb=F(Bn);
var Lr=F(DL);
var AUQ=0.0;var AUR=null;function AAW(){AUQ=$rt_globals.NaN;AUR=E($rt_floatcls());}
var Fp=F();
var AST=null;var ASV=null;var ASW=null;var ASU=null;var ASS=null;function ZM(){AST=EW([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);ASV=AE5([Z(1),Z(10),Z(100),Z(1000),Z(10000),Z(100000),Z(1000000),Z(10000000),Z(100000000),Z(1000000000),B_(1410065408, 2),B_(1215752192, 23),B_(3567587328, 232),B_(1316134912, 2328),B_(276447232, 23283),B_(2764472320, 232830),B_(1874919424, 2328306),B_(1569325056, 23283064),B_(2808348672, 232830643)]);ASW=AE5([Z(1),Z(10),Z(100),Z(10000),Z(100000000),B_(1874919424, 2328306)]);ASU
=new Td;ASS=new Uz;}
var Ju=F();
var AUS=null;var AUT=null;function AAr(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.mV=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.j6=0;c.jM=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(E2(CT(Z(e),Z(8388608)),Ef)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AAx(AUT,f);if(h<0)h=( -h|0)-2|0;i=AUT.data;j=9+(f-i[h]|0)|0;k=Z(e);l=AUS.data;m=Ex(DW(BM(k,Z(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=Ex(DW(BM(k,Z(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<( -g|
0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BD(q,r);e=e>0?Bb(m/q|0,q):e<0?Bb(m/r|0,r)+r|0:Bb((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.j6=e;c.jM=h-50|0;}
function YX(){var b,c,d,e,f,g,h,i;AUS=BH(100);AUT=BH(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AUS.data;g=d+50|0;f[g]=$rt_udiv(e,20);AUT.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Ex(Co(Z(h),Gc(BM(Z(b&((1<<i)-1|0)),Z(10)),i)));f=AUS.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AUT.data[i]=c;d=d+1|0;}}
function Uz(){var a=this;C.call(a);a.j6=0;a.jM=0;a.mV=0;}
function Lk(){var a=this;C.call(a);a.uC=null;a.l0=0.0;a.uY=0.0;a.ev=null;a.gu=null;a.le=null;a.eE=0;}
function ACb(a,b){var c;if(b!==null){a.gu=b;return a;}c=new BC;Bl(c,B(339));J(c);}
function AAE(a,b){var c;if(b!==null){a.le=b;return a;}c=new BC;Bl(c,B(339));J(c);}
function Pe(a,b,c,d){var e,f,g,$$je;e=a.eE;if(!(e==2&&!d)&&e!=3){a.eE=d?2:1;while(true){try{f=ACd(a,b,c);}catch($$e){$$je=D9($$e);if($$je instanceof Bn){g=$$je;J(AFT(g));}else{throw $$e;}}if(GM(f))return f;if(HM(f)){if(d&&DD(b)){g=a.gu;GP();if(g===ATs)return DQ(B4(b));if(B4(c)<=I(a.ev))return ATv;Ey(b,b.Q+B4(b)|0);if(a.gu===ATt)Jy(c,a.ev);}return f;}if(PK(f)){g=a.gu;GP();if(g===ATs)return f;if(g===ATt){if(B4(c)<I(a.ev))return ATv;Jy(c,a.ev);}Ey(b,b.Q+JC(f)|0);}else if(Lh(f)){g=a.le;GP();if(g===ATs)break;if(g
===ATt){if(B4(c)<I(a.ev))return ATv;Jy(c,a.ev);}Ey(b,b.Q+JC(f)|0);}}return f;}b=new DP;U(b);J(b);}
function X$(a,b){var c,d,e,f;c=a.eE;if(c&&c!=3){b=new DP;U(b);J(b);}if(!B4(b))return ACE(0);if(a.eE)a.eE=0;d=ACE(Ba(8,B4(b)*a.l0|0));while(true){e=Pe(a,b,d,0);if(HM(e))break;if(GM(e))d=RG(a,d);if(!J9(e))continue;Uu(e);}b=Pe(a,b,d,1);if(J9(b))Uu(b);while(true){f=a.eE;if(f!=3&&f!=2)break;a.eE=3;if(HM(ATw)){d.da=d.Q;d.Q=0;d.gY=(-1);return d;}d=RG(a,d);}b=new DP;U(b);J(b);}
function RG(a,b){var c,d,e;c=b.gP;d=XG(c,Ba(8,c.data.length*2|0));e=ZY(d,0,d.data.length);Ey(e,b.Q);return e;}
function MV(){C.call(this);this.to=null;}
function ALG(a,b){DH(a.to,b);}
function UR(){C.call(this);this.nD=null;}
function APw(a,b){var c,d;c=a.nD;d=c.dg+1|0;c.dg=d;c=b.g4;b=new M;O(b);G(G(S(b,d),B(340)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Zu=F(CP);
function Qt(){C.call(this);this.md=null;}
function AH0(a){M4(a.md);}
function Uo(){C.call(this);this.oh=null;}
function ALJ(a){WL(a.oh);}
function Td(){var a=this;C.call(a);a.kE=Ef;a.jw=0;a.mB=0;}
var DP=F(Bn);
var AAR=F(Ez);
function AFT(a){var b=new AAR();AJ7(b,a);return b;}
function AJ7(a,b){a.iE=1;a.i5=1;a.kq=b;}
var PF=F();
function AOx(a,b){AAX(b);}
function T6(){var a=this;C.call(a);a.uk=null;a.uj=null;}
function M9(){var a=this;C.call(a);a.rK=null;a.rM=null;a.rL=0;}
function ADV(a,b){var c,d,e;c=a.rK;d=a.rM;e=a.rL;d.m(Wv(c,(b.k.b+e|0)-c.dC.b|0));}
function M7(){var a=this;C.call(a);a.oM=null;a.oL=null;a.oN=0;}
function AFU(a,b){var c,d,e;c=a.oM;d=a.oL;e=a.oN;d.m(NR(c,(b.k.a+e|0)-c.dC.a|0));}
function SM(){C.call(this);this.oy=null;}
function AOI(a,b){var c,d,e;c=a.oy;if(c.e.g.ck==c.ku){b=b.data;d=En(b[0]);e=Fy(b[1]);Z3(c.e.g,d,e);OI(c.e.g);}}
function JQ(){var a=this;Lk.call(a);a.m2=null;a.qT=null;}
function ACd(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.m2;e=0;f=0;g=a.qT;a:{b:{while(true){if((e+32|0)>f&&DD(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B4(b)+k|0;h=j.length;f=W(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bw;c=new M;O(c);S(G(S(G(c,B(341)),l),B(95)),h);Bl(b,N(c));J(b);}if(B4(b)<m){b=new K_;U(b);J(b);}if(m<0){b=new Bw;c=new M;O(c);G(S(G(c,B(96)),m),B(97));Bl(b,N(c));J(b);}n=b.Q;h=n+b.kj|0;e=0;while(e<m){o=k+1|0;i=b.kX.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.Q=n+m|0;e=0;}if(!DD(c)){p=!DD(b)&&e>=f?ATw:ATv;break a;}i=g.data;n=B4(c);o=i.length;n=W(n,o);q=new Ue;q.pM=b;q.rO=c;p=ACp(a,d,e,f,g,0,n,q);e=q.s$;if(p===null&&0==q.jy)p=ATw;k=q.jy;h=0;if(c.lI){b=new Is;U(b);J(b);}if(B4(c)<k)break;if(h>o){b=new Bw;c=new M;O(c);BA(S(G(S(G(c,B(98)),h),B(92)),o),41);Bl(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bw;c=new M;O(c);S(G(S(G(c,B(100)),l),B(95)),o);Bl(b,N(c));J(b);}if(k<0){b=new Bw;c=new M;O(c);G(S(G(c,B(96)),k),B(97));Bl(b,N(c));J(b);}o=c.Q;m=0;while(m<k){l=o+
1|0;n=h+1|0;Rn(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Q=c.Q+k|0;if(p!==null)break a;}b=new Hu;U(b);J(b);}b=new Bw;c=new M;O(c);BA(S(G(S(G(c,B(98)),k),B(92)),h),41);Bl(b,N(c));J(b);}Ey(b,b.Q-(f-e|0)|0);return p;}
var SC=F(JQ);
function ACp(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(JT(h,2))break a;i=ATw;break a;}c=k+1|0;n=j[k];if(!Fv(a,n)){c=c+(-2)|0;i=DQ(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(JT(h,3))break a;i=ATw;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Fv(a,n))break b;if(!Fv(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Lq(p)){c=k+(-3)|0;i=DQ(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DQ(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(JT(h,4))break a;i=ATw;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B4(h.rO)<2?0:1)break a;i=ATv;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Fv(a,n))break c;if(!Fv(a,o))break c;if(!Fv(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=HD(r);m=c+1|0;j[c]=Ia(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DQ(1);break a;}c=k+(-3)|0;i
=DQ(1);}h.s$=c;h.jy=f;return i;}
function Fv(a,b){return (b&192)!=128?0:1;}
function Pb(){C.call(this);this.qw=null;}
function AE0(a,b){var c,d;c=a.qw;d=c.dg+1|0;c.dg=d;c=new M;O(c);G(G(S(c,d),B(342)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Un(){C.call(this);this.wy=null;}
function AKN(a){Bu(By(),B(343));}
function PN(){C.call(this);this.mt=null;}
function ADh(a,b){a.mt.m(Fs(b));}
function TK(){C.call(this);this.qV=null;}
function AO6(a,b){a.qV.q();}
function Sy(){var a=this;C.call(a);a.vu=null;a.vv=null;a.vs=0;a.vt=0;}
var Z1=F();
function Rj(){C.call(this);this.s4=null;}
function AEb(a,b){var c,d,e,f;c=a.s4;d=Ct(b);e=new M;O(e);G(G(e,B(344)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new RF;d.uR=c;d.oa=b;e=new RE;e.tL=c;f=new TF;f.uH=e;e=new UV;e.mW=d;c=b.eD;if(c!==null)c.arrayBuffer().then(Bk(e,"f"),Bk(f,"f"));else{b=b.gi.getFile();c=new UY;c.rH=e;c.rI=f;b.then(Bk(c,"f"),Bk(f,"f"));}}
function Ri(){C.call(this);this.vi=null;}
function AEQ(a,b){var c;b=Ct(b);c=new M;O(c);G(G(c,B(345)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var QE=F();
function AHk(a,b){b=b;b.bR=CF(b.bR,null);}
function R4(){C.call(this);this.lT=null;}
function AJo(a){DB(a.lT);}
var Jo=F(DL);
var AUU=0.0;var AUV=null;function Yf(){AUU=$rt_globals.NaN;AUV=E($rt_doublecls());}
var KS=F();
var AUW=null;var AUX=null;function ZJ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mB=E2(CT(d,B_(0, 2147483648)),Ef)?0:1;e=CT(d,B_(4294967295, 1048575));f=Ex(Gc(d,52))&2047;if(E2(e,Ef)&&!f){c.kE=Ef;c.jw=0;return;}g=0;if(f)e=AQF(e,B_(0, 1048576));else{e=Fc(e,1);while(E2(CT(e,B_(0, 1048576)),Ef)){e=Fc(e,1);f=f+(-1)|0;g=g+1|0;}}h=AAx(AUX,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AUX.data[h]|0)|0;j=Qo(e,AUW.data[h],i);if(YH(j,B_(2808348672, 232830643))){h=h+1|0;i=12+(f-AUX.data[h]|0)|0;j=Qo(e,AUW.data[h],
i);}k=DW(AUW.data[h],(63-i|0)-g|0);l=Gc(Co(k,Z(1)),1);m=Gc(k,1);if(E2(e,B_(0, 1048576)))m=Gc(m,2);n=Z(10);while(OY(n,m)){n=BM(n,Z(10));}if(YH(L9(j,n),Dh(m,Z(2))))n=Dh(n,Z(10));o=Z(1);while(OY(o,l)){o=BM(o,Z(10));}if(AF5(JR(o,L9(j,o)),Dh(l,Z(2))))o=Dh(o,Z(10));f=AQ1(n,o);e=f>0?BM(Dh(j,n),n):f<0?Co(BM(Dh(j,o),o),o):BM(Dh(Co(j,Dh(o,Z(2))),o),o);if(YH(e,B_(2808348672, 232830643))){h=h+1|0;e=Dh(e,Z(10));}else if(AGm(e,B_(1569325056, 23283064))){h=h+(-1)|0;e=BM(e,Z(10));}c.kE=e;c.jw=h-330|0;}
function Qo(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CT(b,Z(65535));f=CT(DW(b,16),Z(65535));g=CT(DW(b,32),Z(65535));h=CT(DW(b,48),Z(65535));i=CT(c,Z(65535));j=CT(DW(c,16),Z(65535));k=CT(DW(c,32),Z(65535));l=CT(DW(c,48),Z(65535));m=Co(Co(BM(k,e),BM(j,f)),BM(i,g));n=Co(Co(Co(BM(l,e),BM(k,f)),BM(j,g)),BM(i,h));o=Co(Co(Fc(BM(l,h),32+d|0),Fc(Co(BM(l,g),BM(k,h)),16+d|0)),Fc(Co(Co(BM(l,f),BM(k,g)),BM(j,h)),d));return Co(d>16?Co(o,Fc(n,d-16|0)):Co(o,DW(n,16-d|0)),DW(m,32-d|0));}
function Zm(){var b,c,d,e,f,g,h,i,j,k;AUW=ARU(660);AUX=BH(660);b=B_(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AUW.data;g=d+330|0;f[g]=Fw(e,Z(80));AUX.data[g]=c;e=Fw(e,Z(10));h=MM(e,Z(10));while(OY(e,b)&&E2(CT(e,B_(0, 2147483648)),Ef)){e=Fc(e,1);c=c+1|0;h=Fc(h,1);}e=Co(e,Dh(h,Z(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AF5(e,B_(3435973836, 214748364))){e=Gc(e,1);j=j+1|0;d=d+(-1)|0;}k=BM(e,Z(10));b=j<=0?k:Co(k,Gc(BM(CT(b,Z((1<<j)-1|0)),Z(10)),j));f=AUW.data;g=(330-i|0)-1|0;f[g]=Fw(b,Z(80));AUX.data[g]
=d;i=i+1|0;}}
function L7(){C.call(this);this.q7=null;}
function APX(a,b){var c,d;c=a.q7;d=new Bn;Bl(d,$rt_str(b.message));c.m(d);}
function On(){var a=this;C.call(a);a.l1=null;a.l2=null;}
function ADQ(a,b,c,d){var e,f,g,h;b=a.l1;e=a.l2;Ss(b,e);if(LQ(d)){f=d.c9;g=e.cA;c=e.eo;h=new Bh;f=f.M;YF(h,(f.b-(g*3|0)|0)-c|0,(f.a-g|0)-c|0);SE(b,h,d.jU,e);}}
function SZ(){var a=this;C.call(a);a.pF=0;a.lV=0;}
function FB(a,b){return O1(a.pF,b,a.lV);}
function EB(){var a=this;C.call(a);a.C=null;a.r=null;a.dE=0.0;}
function AQi(){var a=new EB();KR(a);return a;}
function KR(a){a.C=new Bh;a.r=new Bh;}
function AK1(a){}
function AOz(a){return B0(0,0);}
function O_(a,b,c,d){var e;if(!Kx(a.C,b)){a.jK(b);CG(a.C,b);}if(!Kx(a.r,c)){a.jC(c);CG(a.r,c);}e=a.dE;if(e!==d){a.dE=d;a.oq(e,d);}}
function Dy(a,b){return Ha(b,a.C,a.r);}
function X_(a,b){var c,d,e,f;c=a.C;d=c.b;e=c.a;f=a.r;EJ();BB(b,d,e,f,AT1);}
function US(a,b){var c;c=a.C;Ua(b,c.b,c.a,a.r);}
function ANM(a,b){return 0;}
function AGB(a,b){}
function ANt(a,b){}
function APD(a,b,c){}
function AN2(a,b,c,d){return 0;}
function ANk(a,b,c){return null;}
function AOn(a,b,c){return 0;}
function AKo(a,b){return 0;}
function AGt(a,b,c,d){return 0;}
function Gn(){var a=this;EB.call(a);a.ct=null;a.b_=null;}
function AUY(){var a=new Gn();SP(a);return a;}
function SP(a){KR(a);a.ct=new Bh;a.b_=new Bh;}
function ACF(a){var b;b=a.b_;b.b=VL(a,b.b);b=a.b_;b.a=P1(a,b.a);}
function Ub(a,b){a.b_.b=VL(a,b);}
function ZI(a,b){a.b_.a=P1(a,b);}
function P1(a,b){return Ba(0,W(b,a.ct.a-a.r.a|0));}
function VL(a,b){return Ba(0,W(b,a.ct.b-a.r.b|0));}
function PZ(){var a=this;Gn.call(a);a.cM=null;a.cS=null;a.fm=null;a.eU=null;a.pa=null;a.cw=null;a.b0=null;a.dz=null;a.eH=null;a.c8=0;a.eS=0;a.lW=null;a.dt=0;a.dw=0;a.fz=0;a.gE=0;a.hg=0;a.dI=0;a.gk=null;a.ia=null;a.jv=null;}
function ARY(a,b){var c=new PZ();Y6(c,a,b);return c;}
function Y6(a,b,c){SP(a);a.cS=AJj();a.fm=new Bh;a.eU=new Bh;a.b0=AUZ;a.dz=R(Hy,0);a.dt=0;a.dw=0;a.fz=0;a.gE=0;a.hg=0;a.gk=Wr(0);a.cM=b;a.ia=c;a.lW=c;a.c8=B9(2.0,b.bG);}
function Vm(a){return a.b0.data.length?0:1;}
function U2(a,b){N5(a);a.b0=b;}
function N5(a){Bg(a.fm,0,0);}
function NY(a,b){a.pa=b;b=Fr(a.cM,b);a.cw=b;a.gk=Wr(DZ(b));a.eS=CX(a.cw.iU);N5(a);}
function APR(a){a.eH=CF(a.eH,null);Bg(a.fm,0,0);a.b0=AUZ;a.dz=null;a.dt=0;a.dw=0;a.fz=0;R1(a.cS);a.ia=null;}
function AFF(a,b,c){Sp(a);a.cw=Fr(a.cM,a.pa);a.c8=B9(2.0,a.cM.bG);a.gk=Wr(DZ(a.cw));a.eS=CX(a.cw.iU);}
function AIM(a,b){ZI(a,b);}
function AId(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc;c=H_(a.cM);if(Vm(a))return;BI(a.cw);Cu(c,a.cw);d=DZ(a.cw);e=ACZ(c,a.eS);f=W(H8(a.cS.v.a,d),a.b0.data.length)+30|0;g=0;a.gE=W((a.b_.a+a.c8|0)/(GQ(a)+a.c8|0)|0,a.b0.data.length-1|0);a.hg=W((((a.b_.a+a.cS.v.a|0)-1|0)+a.c8|0)/(GQ(a)+a.c8|0)|0,a.b0.data.length-1|0);if(a.dz.data.length<=0)g=1;else{h=a.gE;a:{b:{while(h<=a.hg){i=Mz(a,h);if(i===null)break b;if(i.f4!==a.b0.data[h])break b;h=h+1|0;}break a;}g=1;}}j=a.jv.m_;if(g){a.dz=ALP(f,
a.dz,a.gE,a.hg,a.b0,a.gk,j,e);CG(a.fm,Ww(a.gk));k=a.fm;if(!Bb(k.b,k.a))return;AAI(a,a.cM.cX);}if(!a.dz.data.length)return;US(a,b);l=j.pk;k=a.C;BB(b,k.b,k.a,a.r,l);m=a.c8;k=a.cS.M;n=k.b;o=k.a;p=a.gE;q=n+m|0;while(p<=a.hg){r=Mz(a,p);s=Bb(p,GQ(a));h=p+1|0;t=s+Bb(h,a.c8)|0;s=q+a.dt|0;u=s+a.dw|0;v=a.dI!=p?0:1;k=!v?l:j.nh;w=!v?j.nu:j.h8;x=!v?j.sf:j.h8;y=!v?j.s7:j.h8;z=(o+t|0)-a.b_.a|0;EA(b,q,z,r.gp,r.iq,a.eH,w,k,0.0);EA(b,s,z,r.gV,r.hz,a.eH,x,k,0.0);EA(b,u,z,r.g1,r.h4,a.eH,y,k,0.0);p=r.gp.b;ba=q+p|0;Bg(a.eU,Ba(0,
a.dt-p|0),r.gp.a);BB(b,ba,z,a.eU,k);s=q+a.dt|0;p=r.gV.b;bb=s+p|0;Bg(a.eU,Ba(0,a.dw-p|0),r.gV.a);BB(b,bb,z,a.eU,k);s=r.g1.b;bc=u+s|0;Bg(a.eU,Ba(0,(((a.cS.v.b-s|0)-a.dw|0)-a.dt|0)-(a.c8*2|0)|0),r.g1.a);BB(b,bc,z,a.eU,k);p=h;}K2(b);}
function AAI(a,b){var c,d,e,f,g,h,i,j,k;c=a.fm;c=CL(b,c.b+150|0,c.a);Cu(c,a.cw);d=a.cw;e=d.dd;f=e-(e+d.dX)/16.0;g=a.dz.data;h=g.length;i=0;while(i<h){j=g[i];if(j!==null){d=j.f4.i6;k=j.iq;Cf(c,d,k.bg+a.eS,f+k.bu);d=j.f4.hU;k=j.hz;Cf(c,d,k.bg+a.eS,f+k.bu);d=j.f4.h7;k=j.h4;Cf(c,d,k.bg+a.eS,f+k.bu);}i=i+1|0;}b=CF(a.eH,CS(b));a.eH=b;CM(b,c);FE(c);}
function Mz(a,b){var c;c=a.dz.data;return c[b%c.length|0];}
function AJm(a,b){CG(a.cS.v,b);}
function AGb(a,b){CG(a.cS.M,b);}
function Yq(a){var b,c;b=GQ(a);c=a.b0.data.length;b=Bb(b,c)+Bb(a.c8,c+1|0)|0;Bg(a.ct,a.r.b,b);}
function Sp(a){var b,c,d,e,f,g,h,i,j;b=H_(a.cM);if(Vm(a))return;BI(a.cw);Cu(b,a.cw);c=ACZ(b,a.eS);d=a.b0.data;e=d.length;f=0;while(f<e){g=d[f];h=Je(c,g.i6);i=Je(c,g.hU);j=Je(c,g.h7);a.dt=Ba(a.dt,h);a.dw=Ba(a.dw,i);a.fz=Ba(a.fz,j);f=f+1|0;}}
function AOH(a,b){var c;c=Na(a,b.k);if(c>=0)a.dI=c;return Ej(a.cS,a.C)&&GV(a.cM.cq)?1:0;}
function ADL(a,b,c){if(!Ej(a.cS,b.k)&&!Lm(a.cS)){b=a.lW;if(b!==null)b.q();}return null;}
function AD1(a,b,c,d){var e;if(d==1){e=Na(a,b.k);if(e>=0)MY(a,a.b0.data[e]);}return 1;}
function MY(a,b){a.ia.q();b.lZ.q();}
function Na(a,b){var c,d,e;if(!a.dz.data.length)return (-1);c=GQ(a);d=(b.a-a.C.a|0)+a.b_.a|0;e=a.c8;e=(d+e|0)/(c+e|0)|0;if(e<a.b0.data.length)return e;return (-1);}
function GQ(a){return DZ(a.cw);}
function AIU(a,b){var c,d;a:{switch(b.bj){case 13:MY(a,a.b0.data[a.dI]);break a;case 27:break;case 37:a.dI=0;break a;case 38:c=a.dI;d=a.b0.data.length;a.dI=((c+d|0)-1|0)%d|0;break a;case 39:a.dI=a.b0.data.length-1|0;break a;case 40:a.dI=(a.dI+1|0)%a.b0.data.length|0;break a;default:break a;}a.ia.q();}return 0;}
var UZ=F();
function APE(a){}
function Za(){var a=this;EB.call(a);a.kU=null;a.qc=null;a.sx=null;a.bA=null;a.dp=null;a.du=null;a.q8=0.0;}
function Yb(a,b){var c=new Za();AOw(c,a,b);return c;}
function AOw(a,b,c){var d;KR(a);d=new S5;d.m5=a;a.qc=d;d=new S6;d.p2=a;a.sx=d;a.q8=10.0;a.bA=b;a.kU=c.cq;}
function AD5(a){a.bA=CF(a.bA,null);}
function AFK(a,b,c,d){var e;O_(a,b,c,d);O_(a.bA,b,c,d);if(d!==0.0){a.bA.s8();ACF(a.bA);e=a.r.b;if(e>0&&a.bA.ct.b>e?1:0)JO(a);else a.du=null;e=a.r.a;if(e>0&&a.bA.ct.a>e?1:0)Kp(a);else a.dp=null;}}
function JO(a){var b,c,d,e,f,g;b=a.du;if(b===null){b=G5();a.du=b;}c=a.bA;d=c.b_.b;e=a.C;f=e.b;g=a.r;LK(b,d,f,g.b,c.ct.b,e.a+g.a|0,I6(a));}
function Kp(a){var b,c,d,e,f,g;b=a.dp;if(b===null){b=G5();a.dp=b;}c=a.bA;d=c.b_.a;e=a.C;f=e.a;g=a.r;H1(b,d,f,g.a,c.ct.a,e.b+g.b|0,I6(a));}
function I6(a){return B9(a.q8,a.dE);}
function AM3(a,b){var c;a.bA.ey(b);if(!(a.dp===null&&a.du===null)){CK(b,1);c=a.dp;if(c!==null)FL(c,b);c=a.du;if(c!==null)FL(c,b);c=a.dp;if(c!==null)F4(c,b);c=a.du;if(c!==null)F4(c,b);CK(b,0);}}
function Mi(a,b){var c,d;a:{b:{c=a.dp;if(!(c!==null&&Ig(c,b))){c=a.du;if(c===null)break b;if(!Ig(c,b))break b;}d=1;break a;}d=0;}return d;}
function AHL(a,b,c,d){return !Mi(a,b.k)&&!a.bA.cn(b,c,d)?0:1;}
function AN5(a,b,c){var d,e;d=a.dp;if(d!==null){e=E6(d,b.k,a.qc,1);if(e!==null)return e;}d=a.du;if(d!==null){e=E6(d,b.k,a.sx,0);if(e!==null)return e;}return a.bA.is(b,c);}
function AHn(a,b,c){return Mi(a,b.k)?1:0;}
function AID(a,b){var c,d,e;c=a.dp;d=c!==null&&Ff(c,b.k,a.kU)?1:0;c=a.du;e=c!==null&&Ff(c,b.k,a.kU)?1:0;return !d&&!e&&!a.bA.bW(b)?0:1;}
function ANe(a,b,c,d){var e,f;if(!Dy(a,b.k))return 0;e=B9(d*0.25,a.dE);f=B9(c*0.25,a.dE);if(b.bx){f=f+e|0;e=0;}if(a.dp!==null&&e){b=a.bA;b.j3(b.b_.a+e|0);Kp(a);}if(a.du!==null&&f){b=a.bA;Ub(b,b.b_.b+f|0);JO(a);}return 1;}
function AKK(a){var b,c;b=I6(a);c=a.bA.it();c.b=Ba(c.b,b);c.a=Ba(c.a,b);return c;}
function U6(){var a=this;Gn.call(a);a.hv=null;a.kO=null;a.qN=null;a.oB=0.0;}
function ALo(a){var b,c;b=a.ct;c=a.r;Bg(b,c.b*3|0,c.a*5|0);}
function AJq(a){var b;b=B9(20.0,a.dE);return B0(b,b);}
function AIf(a,b){var c,d,e,f;c=a.qN;d=c.rE;e=c.rF;c=c.rD;b=Ct(b);f=new M;O(f);G(G(G(f,c),B(36)),b);H9(e,N(f),d.rB,3.0);}
function AF6(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;X_(a,b);US(a,b);c=B9(30.0,a.dE);d=a.b_;e=d.b;f=Bb(e/c|0,c);g=d.a;h=Bb(g/c|0,c);d=a.r;i=Bb(((e+d.b|0)-1|0)/c|0,c);e=Bb(((g+d.a|0)-1|0)/c|0,c);d=a.kO;d.a=c;d.b=c;a.hv.bv=1.0;while(h<=e){g=a.C.a-a.b_.a|0;j=f;while(j<=i){k=a.C.b-a.b_.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AB5(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;VX(n,0.75,a.oB,a.hv);BB(b,k+j|0,g+h|0,a.kO,a.hv);j=j+c|0;}h=h+c|0;}K2(b);}
function AIS(a,b){}
function ON(){var a=this;C.call(a);a.rE=null;a.rF=null;a.rD=null;}
function WD(){C.call(this);this.kL=null;}
var AUZ=null;function ALw(){var a=new WD();YE(a);return a;}
function YE(a){a.kL=Cl();}
function Mr(a,b,c,d,e){var f;f=new IV;f.lZ=e;f.hU=c;f.h7=d;f.i6=b;BX(a.kL,f);}
function PY(a){return Hl(a.kL,AUZ);}
function UM(b){var c,d;if(b===null)b=B(31);else{c=b.eL;if(c===null)b=B(31);else{d=OZ(c,B(346),I(c));b=d==(-1)?b.eL:Db(b.eL,d+1|0);}}return b;}
function Ze(){AUZ=R(IV,0);}
function Hy(){var a=this;C.call(a);a.iq=null;a.hz=null;a.h4=null;a.gp=null;a.gV=null;a.g1=null;a.f4=null;}
function ALP(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=R(Hy,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=WI(f.data[d],h,g,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.f4!==n){ACy(g,q);m[o]=WI(n,h,g,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=WI(n,h,g,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){ACy(g,r);j[d]=null;}d=d+1|0;}return k;}
function WI(b,c,d,e){var f;f=new Hy;f.gp=new Bh;f.gV=new Bh;f.g1=new Bh;f.f4=b;c=GX(d,b.i6,e);f.iq=c;Bg(f.gp,c.bc|0,c.bv|0);c=GX(d,b.hU,e);f.hz=c;Bg(f.gV,c.bc|0,c.bv|0);b=GX(d,b.h7,e);f.h4=b;Bg(f.g1,b.bc|0,b.bv|0);return f;}
function ACy(b,c){HO(b,c.iq);HO(b,c.hz);HO(b,c.h4);}
function Sx(){var a=this;EB.call(a);a.gw=null;a.gA=null;a.ge=null;a.dD=null;a.ir=0.0;a.gl=0;a.hj=0;a.cV=null;a.k6=null;}
function K9(a){var b;b=a.r;return b.b&&b.a?0:1;}
function SY(a){var b,c;a:{if(a.ge!==null){b=a.gA;if(b!==null&&!Fe(b)){c=0;break a;}}c=1;}return c;}
function WJ(a,b){a.r.a=b;}
function OC(a,b,c,d,e){var f,g;f=a.gw.jL;Bg(f,d,a.r.a);g=a.C;BB(b,g.b+c|0,g.a,f,e);}
function P2(a){if(a.dD===null)a.dD=Fr(a.gw,a.ge);}
function S5(){C.call(this);this.m5=null;}
function AJX(a,b){var c,d;c=a.m5;d=FB(b,c.bA.ct.a-c.r.a|0);c.bA.j3(d);Kp(c);}
function S6(){C.call(this);this.p2=null;}
function AH5(a,b){var c,d;c=a.p2;d=FB(b,c.bA.ct.b-c.r.b|0);Ub(c.bA,d);JO(c);}
var Q3=F(DL);
var AU0=null;function Fw(b,c){return Long_udiv(b, c);}
function MM(b,c){return Long_urem(b, c);}
function KC(b,c){return Long_ucompare(b, c);}
function Zk(){AU0=E($rt_longcls());}
function W5(){var a=this;C.call(a);a.qQ=null;a.qP=null;a.qO=null;}
function AGh(a){var b,c,d,e,f;b=a.qQ;c=a.qP;d=a.qO;e=By();f=new M;O(f);b=G(f,b);BA(b,9);b=G(b,c);BA(b,9);G(b,d);Bu(e,N(f));}
function IV(){var a=this;C.call(a);a.lZ=null;a.hU=null;a.h7=null;a.i6=null;}
var E8=F(Bn);
function MZ(){var a=this;C.call(a);a.ma=null;a.oC=null;a.rQ=0;a.s2=0;}
function K4(a,b){return B4(a.oC)<b?0:1;}
var ABZ=F();
function TD(b,c,d,e){var f,g;f=b.next();g=new Wm;g.ml=b;g.mk=c;g.mo=d;g.mm=e;f.then(Bk(g,"f"),Bk(d,"f"));}
function XJ(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ACq(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DX()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Wi;f.pc=b;f.pd=d;d.addEventListener("change",Bk(f,"handleEvent"));d.click();}
function XQ(b,c){var d;if(c.isFile?1:0)b.m(Xh(c.file()));else{c=c.createReader();d=new V9;d.sa=b;c.readEntries(Bk(d,"f"));}}
function RU(){var a=this;C.call(a);a.bp=null;a.gU=null;a.T=null;}
function H7(a){return a.gU.eY.id;}
function Nq(a){var b;b=new Os;b.oA=a;return b;}
function AC4(a){var b,c,d,e,f,g;b=R(C5,4);c=b.data;d=a.T.bh.Z.bd;e=a.bp;BI(e);f=new UT;f.ry=e;c[0]=Eb(B(347),d,f);e=a.T.bh.Z.bd;f=a.bp;BI(f);g=new UX;g.mU=f;c[1]=Eb(B(348),e,g);e=a.T.bh.Z.bd;f=a.bp;BI(f);g=new UW;g.qv=f;c[2]=Eb(B(349),e,g);e=a.T.bh.Z.bd;f=a.bp;BI(f);g=new UU;g.tG=f;c[3]=Eb(B(350),e,g);return FH(b);}
function IE(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{DB(a.T.b2);d=a.bp.e;e=Df(d);f=GE(d);g=a.bp.d1;if(c===null)h=null;else{AQq();switch(AU1.data[c.cJ]){case 1:h=Kf(g,e,f);break a;case 2:h=UK(g,e,f);break a;default:}b=new Ei;U(b);J(b);}}c=a.bp;e=EL(c,b);if(h!==null){f=c.e;i=e.bs;j=e.bE;e=new UA;e.u5=c;e.u4=b;h.q2(f,i,j,e,c.gy);}else{Wz(c.e.g,e);f=Em(c.e.g.dS,e);if(f!==null)He(c,f);else{e=Em(c.e.g.d_,e);if(e!==null&&!D5(e))RD(c.h1,b,e,c);else{e=c.h1;DB(e.b2);f=e.b2;k=R(C5,1);l=k.data;g=new C5;BI(f);m=new UN;m.na=f;J0(g,
m,B(351),e.bh.Z.tm);l[0]=g;F2(f,b,FH(k),MP(e,c));}}}}
var Wo=F();
function AM9(a,b){XJ(b);}
function Wn(){var a=this;C.call(a);a.oG=null;a.oF=null;}
function AF0(a,b){var c,d,e,f,g,h,i;c=a.oG;d=a.oF;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new Pa;i.m9=c;i.m8=g;h.then(Bk(i,"f"),Bk(d,"f"));e=e+1|0;}}
var VQ=F();
function AHr(a,b){XJ(b);}
function VP(){var a=this;C.call(a);a.n0=null;a.n1=null;}
function AIj(a,b){var c,d,e,f,g;c=a.n0;d=a.n1;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bv,1);g.data[0]=Fs(b.name);TD(f,c,d,g);}
var Xs=F();
function AAn(b,c){return ABc(null,b,c,0);}
function ABc(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AHS(c);g=B$(f);h=B$(f);i=B$(f);j=R(Cx,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<CA(b)){l=B$(f);c[k]=B2(b,k);l=4*l|0;f.e$=f.e$+l|0;}else c[k]=DF(Xw(f,d,0));k=k+1|0;}m=ACA(f,h);n=new Hp;n.dS=HE();n.d_=HE();n.e1=Cl();if(!c.length){b=new BC;U(b);J(b);}n.B=j;n.fi=0;n.ck=0;n.cU=ARs(m);b=n.dS;e=0;while(e<i){Sh(b,EK(B$(f),B$(f)),EK(B$(f),B$(f)));e=e+1|0;}b=n.dS;m=n.d_;o=new TG;RA(o,b);while(II(o)){Tn(o);b=o.gH;p=b.hH;q=b.fv;b=Cl();if(Em(m,q)===null)Sh(m,q,b);BX(Em(m,
q),p);}if(m.jX===null){b=new Or;b.te=m;m.jX=b;}b=m.jX;q=new P5;RA(q,b.te);while(II(q)){Tn(q);b=q.gH.fv;m=ASI;c=R(C,b.i);d=c.data;Hl(b,c);YR(c,m);e=0;g=d.length;while(e<g){m=d[e];IC(b,e);b.b$.data[e]=m;e=e+1|0;}}N$(f);return n;}
function Z3(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AHS(c);g=B$(f);h=B$(f);i=B$(f);j=B$(f);k=MW(b,g);l=MW(b,h);m=(H$(B2(b,k.b),k.a)).data[0].o;e=(H$(B2(b,l.b),l.a)).data[1].o;n=0;o=i-1|0;while(n<i){p=Xw(f,d,g);if(!n)p=K3(m,p);if(n==o)p=K3(p,e);q=k.b+n|0;r=DF(p);b.B.data[q]=r;n=n+1|0;}r=ACA(f,j);N$(f);if(!D5(r)){s=Nl(g,h,(-1));b=b.cU;f=AQv(s,r);r=J1(b,b.cB,s);if(r!==null){f=f.cB.br;if(r===b.cB)b.cB=Bs(f,0);else if(r.ds!==null){b=new Nj;b.qR=r;Js(f,b);q=Pz(r.ds.br,
r);Ee(r.ds.br,q);b=r.ds.br;OD(b,q);if(!D5(f)){IM(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.b$.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BR(f);g=0;while(g<j){c=b.b$.data;h=q+1|0;c[q]=BV(f);g=g+1|0;q=h;}b.cm=b.cm+1|0;}}}}}
function Xw(b,c,d){var e,f,g,h,i,j,k,l;e=B$(b);f=R(B5,e);g=f.data;h=0;while(h<e){i=B$(b);j=B$(b);k=B$(b);l=B$(b);g[h]=Dv(Ja(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ACA(b,c){var d,e;d=Cl();e=0;while(e<c){BX(d,Nl(B$(b),B$(b),B$(b)));e=e+1|0;}return d;}
var VW=F(0);
var AT$=null;function XH(){AT$=null;}
function Wi(){var a=this;C.call(a);a.pc=null;a.pd=null;}
function AHh(a,b){var c,d,e,f,g,h;b=a.pc;c=a.pd;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new L3;h.mh=b;h.mg=g;$rt_globals.setTimeout(Bk(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Xh(d.item(f));g=new LL;g.qy=b;g.qz=c;$rt_globals.setTimeout(Bk(g,"onTimer"),0);f=f+1|0;}}
function YW(){var a=this;C.call(a);a.hI=null;a.jF=null;}
function ACh(){var a=this;C.call(a);a.wr=0;a.wf=0;a.q_=0;a.km=0;}
function Tv(){var a=this;C.call(a);a.mM=null;a.mK=null;}
function AHW(a){var b,c,d,e,f,g;b=a.mM;c=a.mK;if(Dg(c.hI,b.e.fB)){c=c.jF;Cz(b,c.km,c.q_,0);B1(b.p.bI,c.km,c.q_);B1(b.p.bz,c.wf,c.wr);}else{d=(Cn(b.d1.qa)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Cg(b);b=new N7;b.ni=g;b.nj=c;BI(b);c=new O4;c.tE=b;$rt_globals.setTimeout(Bk(c,"onTimer"),0);}}}
function Tx(){var a=this;C.call(a);a.tH=null;a.tD=null;}
function AMC(a){He(a.tH,a.tD);}
function XN(){var a=this;C.call(a);a.iJ=null;a.e$=0;}
function AHS(a){var b=new XN();ANK(b,a);return b;}
function ANK(a,b){a.iJ=b;a.e$=0;}
function B$(a){var b,c;b=a.iJ.data;c=a.e$;a.e$=c+1|0;return b[c];}
function N$(a){var b,c,d,e;if(a.e$!=a.iJ.data.length){b=K1();c=a.iJ.data.length;d=a.e$;e=new M;O(e);G(S(G(S(G(e,B(352)),c),B(353)),d),B(354));Bu(b,N(e));}}
var Is=F(E8);
var Hu=F(Bn);
var K_=F(Bn);
function YA(){C.call(this);this.Cz=null;}
function Rm(){var a=this;C.call(a);a.sc=null;a.si=null;}
function AO$(a){var b,c;b=a.sc;c=a.si;Ir(b.di,c);}
function V1(){C.call(this);this.o$=null;}
function ANb(a,b){Hk(a.o$,b);}
function Rv(){var a=this;C.call(a);a.nB=null;a.nA=null;}
function AEh(a){var b,c;b=a.nB;c=a.nA;Ir(b.di,c);Ta(b);}
var Xb=F();
function QX(b,c){return b.data[c];}
function GH(){var a=this;C.call(a);a.el=0;a.eW=0;a.kt=null;a.jc=0;a.gD=null;}
function ADG(a,b,c,d,e,f){var g=new GH();AIz(g,a,b,c,d,e,f);return g;}
function AIz(a,b,c,d,e,f,g){a.el=b;a.eW=c;a.kt=B0(f,g);a.jc=d;a.gD=e;}
function AA8(){F3.call(this);this.AB=null;}
function Or(){EF.call(this);this.te=null;}
var VH=F(Bw);
var PD=F(0);
var MT=F(0);
var Ld=F();
function Y1(){var a=this;Ld.call(a);a.CA=null;a.Ev=0;a.C9=0;a.AQ=0;}
function Qz(){var a=this;C.call(a);a.nc=null;a.nb=null;}
function AET(a){var b,c;b=a.nc;c=a.nb;TZ();IE(b,c,AU2);}
function Qy(){var a=this;C.call(a);a.n3=null;a.n5=null;}
function ADo(a){var b,c;b=a.n3;c=a.n5;TZ();IE(b,c,AU3);}
function Qx(){var a=this;C.call(a);a.tq=null;a.tr=null;}
function AJh(a){IE(a.tq,a.tr,null);}
function Qw(){var a=this;C.call(a);a.mJ=null;a.mL=null;}
function ANO(a){var b,c,d,e,f,g,h;b=a.mJ;c=a.mL;d=Df(b.bp.e);e=GE(b.bp.e);d=MN(b.bp.d1,d,e);DB(b.T.b2);b=b.bp;e=EL(b,c);if(d!==null){f=b.e;g=e.bs;h=e.bE;e=new V5;e.tY=b;e.tZ=c;d.Fr(f,g,h,1,e,b.gy);}}
function OP(){C.call(this);this.o0=null;}
function ANa(a){var b;b=a.o0;DB(b.T.b2);Kw(b.bp,Nq(b),0);}
function OR(){C.call(this);this.sh=null;}
function AIo(a){var b;b=a.sh;DB(b.T.b2);Kw(b.bp,Nq(b),1);}
function OS(){C.call(this);this.rk=null;}
function AFn(a){var b,c,d;b=a.rk;DB(b.T.b2);c=H7(b);b=b.bp;BI(b);d=new RX;d.rl=b;PX(c,d,XE(B(355)));}
function Vc(){C.call(this);this.rs=null;}
function AEe(a){var b,c,d;b=a.rs;DB(b.T.b2);c=H7(b);b=b.bp;BI(b);d=new Qb;d.pm=b;La(c,d);}
function U5(){C.call(this);this.rh=null;}
function AJ_(a,b,c){var d,e;c=a.rh;d=c.e.g;e=b.e8;b=c.em;Wg(d.B.data[e],0,b);}
function RP(){C.call(this);this.nf=null;}
function AIT(a){SW(a.nf);}
function RQ(){C.call(this);this.p_=null;}
function AJ9(a){AAd(a.p_);}
function Nv(){C.call(this);this.qx=null;}
function AHQ(a){var b;b=a.qx;Kz(b,b.en.lB,b.fG+1|0);}
function Nu(){C.call(this);this.pi=null;}
function ANY(a){var b,c;b=a.pi;c=b.fG;if(c>7)Kz(b,b.en.lB,c-1|0);}
function Uh(){C.call(this);this.p0=null;}
function AFQ(a){var b,c,d,e,f,g,h,i;b=a.p0;c=(b.gU.n_()).data;d=R(C5,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new W6;i.ox=b;i.ow=h;e[f]=ACa(i,h,b.T.bh.Z.bd);f=f+1|0;}return d;}
function UT(){C.call(this);this.ry=null;}
function ALV(a){var b,c,d,e,f;b=a.ry.e.g;c=b.ck;d=new M;O(d);S(G(d,B(356)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fi;d=new M;O(d);S(G(d,B(357)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.cU;e=FK(F7(b));Re(d,0,d.cB,e);b=By();f=b.jO;f.data[0]=10;Nh(b,f,0,1);}
function UX(){C.call(this);this.mU=null;}
function AI1(a){RK(a.mU);}
function UW(){C.call(this);this.qv=null;}
function AD$(a){VM(a.qv);}
function UU(){C.call(this);this.tG=null;}
function AFX(a){Jv(a.tG);}
function RL(){C.call(this);this.sW=null;}
function AH9(a,b,c){FI(B2(a.sW.e.g,b.e8),0,I(c));}
function Pa(){var a=this;C.call(a);a.m9=null;a.m8=null;}
function AGc(a,b){a.m9.m(AAB(a.m8,b));}
var Ik=F(0);
function L3(){var a=this;C.call(a);a.mh=null;a.mg=null;}
function AIp(a){XQ(a.mh,a.mg);}
function LL(){var a=this;C.call(a);a.qy=null;a.qz=null;}
function ADa(a){a.qy.m(a.qz);}
function Wm(){var a=this;C.call(a);a.ml=null;a.mk=null;a.mo=null;a.mm=null;}
function AHG(a,b){var c,d,e,f,g,h,i;c=a.ml;d=a.mk;e=a.mo;f=a.mm;if(!(b.done?1:0)){TD(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Tk;c.n2=d;c.n4=g;c.n6=f;b.then(Bk(c,"f"),Bk(e,"f"));}else{h=f.data;c=g.values();b=Fs(g.name);i=h.length;f=Dc(f,i+1|0);f.data[i]=b;TD(c,d,e,f);}}}
function GB(){var a=this;C.call(a);a.hN=0;a.qE=0;a.g_=null;a.gH=null;a.of=null;a.iz=null;}
function AU4(a){var b=new GB();RA(b,a);return b;}
function RA(a,b){a.iz=b;a.qE=b.gb;a.g_=null;}
function II(a){var b,c;if(a.g_!==null)return 1;while(true){b=a.hN;c=a.iz.cH.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hN=b+1|0;}return 0;}
function YB(a){var b;if(a.qE==a.iz.gb)return;b=new Lb;U(b);J(b);}
function Tn(a){var b,c,d,e;YB(a);if(!II(a)){b=new WV;U(b);J(b);}b=a.g_;if(b!==null){c=a.gH;if(c!==null)a.of=c;a.gH=b;a.g_=b.eQ;}else{d=a.iz.cH.data;e=a.hN;a.hN=e+1|0;b=d[e];a.gH=b;a.g_=b.eQ;a.of=null;}}
var TG=F(GB);
var P5=F(GB);
var S2=F(0);
var AUf=null;function ZU(){AUf=new R3;}
function P3(){var a=this;C.call(a);a.f=null;a.c6=0;a.jD=null;a.mG=0;a.fQ=0;a.eb=0;a.bo=0;a.kC=null;}
function Jj(a){return a.f.bC;}
function WN(a,b,c,d){var e,f,g,h,i,j;e=Cl();f=a.c6;g=0;if(c!=f)a.c6=c;a:{switch(b){case -1073741784:h=new QM;c=a.bo+1|0;a.bo=c;Fa(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OW;c=a.bo+1|0;a.bo=c;Fa(h,c);break a;case -33554392:h=new RT;c=a.bo+1|0;a.bo=c;Fa(h,c);break a;default:c=a.fQ+1|0;a.fQ=c;if(d!==null)h=ARC(c);else{h=new Fl;Fa(h,0);g=1;}c=a.fQ;if(c<=(-1))break a;if(c>=10)break a;a.jD.data[c]=h;break a;}h=new WH;Fa(h,(-1));}while(true){if(ER(a.f)&&a.f.h==(-536870788))
{d=AOh(B7(a,2),B7(a,64));while(!Da(a.f)&&ER(a.f)){i=a.f;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cs(d,Bd(i));i=a.f;if(i.ba!=(-536870788))continue;Bd(i);}i=Kc(a,d);i.J(h);}else if(a.f.ba==(-536870788)){i=Gt(h);Bd(a.f);}else{i=Oi(a,h);d=a.f;if(d.ba==(-536870788))Bd(d);}if(i!==null)BX(e,i);if(Da(a.f))break;if(a.f.ba==(-536870871))break;}if(a.f.j4==(-536870788))BX(e,Gt(h));if(a.c6!=f&&!g){a.c6=f;d=a.f;d.fx=f;d.h=d.ba;d.d6=d.eg;j=d.cQ;d.s=j+1|0;d.gK=j;EU(d);}switch(b){case -1073741784:break;case -536870872:d
=new L1;Fn(d,e,h);return d;case -268435416:d=new Vd;Fn(d,e,h);return d;case -134217688:d=new P6;Fn(d,e,h);return d;case -67108824:d=new SF;Fn(d,e,h);return d;case -33554392:d=new DG;Fn(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return ARn(Bs(e,0),h);default:return AQ0(e,h);}return Gt(h);}d=new Ip;Fn(d,e,h);return d;}
function ABt(a){var b,c,d,e,f,g,h;b=BH(4);c=(-1);d=(-1);if(!Da(a.f)&&ER(a.f)){e=b.data;c=Bd(a.f);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BQ(3);b=e.data;b[0]=c&65535;f=a.f;g=f.ba;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bd(f);f=a.f;g=f.ba;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bd(f);return AN1(e,3);}return AN1(e,2);}if(!B7(a,2))return Yz(b[0]);if(B7(a,64))return AMb(b[0]);return AE6(b[0]);}e=b.data;c=1;while(c<4&&!Da(a.f)&&ER(a.f)){h=c+1|0;e[c]=Bd(a.f);c=h;}if(c==1){h=e[0];if(!(AU5.vX(h)==AU6?0:1))return WE(a,e[0]);}if
(!B7(a,2))return ASe(b,c);if(B7(a,64)){f=new Wl;Nd(f,b,c);return f;}f=new SS;Nd(f,b,c);return f;}
function Oi(a,b){var c,d,e,f,g,h,i;if(ER(a.f)&&!I9(a.f)&&JK(a.f.h)){if(B7(a,128)){c=ABt(a);if(!Da(a.f)){d=a.f;e=d.ba;if(!(e==(-536870871)&&!(b instanceof Fl))&&e!=(-536870788)&&!ER(d))c=Lt(a,b,c);}}else if(!Nm(a.f)&&!Uj(a.f)){f=new Nn;O(f);while(!Da(a.f)&&ER(a.f)&&!Nm(a.f)&&!Uj(a.f)){if(!(!I9(a.f)&&!a.f.h)&&!(!I9(a.f)&&JK(a.f.h))){g=a.f.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bd(a.f);if(!Ll(e))BA(f,e&65535);else HT(f,Gd(e));}if(!B7(a,2)){c=new QB;Dr(c);c.cf
=N(f);e=f.K;c.bB=e;c.jT=AKC(e);c.kF=AKC(c.bB);h=0;while(h<(c.bB-1|0)){P$(c.jT,L(c.cf,h),(c.bB-h|0)-1|0);P$(c.kF,L(c.cf,(c.bB-h|0)-1|0),(c.bB-h|0)-1|0);h=h+1|0;}}else if(B7(a,64))c=ASb(f);else{c=new MA;Dr(c);c.gL=N(f);c.bB=f.K;}}else c=Lt(a,b,Wk(a,b));}else{d=a.f;if(d.ba!=(-536870871))c=Lt(a,b,Wk(a,b));else{if(b instanceof Fl)J(B6(B(31),d.bC,Nk(d)));c=Gt(b);}}a:{if(!Da(a.f)){e=a.f.ba;if(!(e==(-536870871)&&!(b instanceof Fl))&&e!=(-536870788)){f=Oi(a,b);if(c instanceof CY&&!(c instanceof EV)&&!(c instanceof CO)
&&!(c instanceof Er)){i=c;if(!f.bJ(i.F)){c=new Vr;EI(c,i.F,i.d,i.g7);c.F.J(c);}}if((f.ha()&65535)!=43)c.J(f);else c.J(f.F);break a;}}if(c===null)return null;c.J(b);}if((c.ha()&65535)!=43)return c;return c.F;}
function Lt(a,b,c){var d,e,f,g,h;d=a.f;e=d.ba;if(c!==null&&!(c instanceof BS)){switch(e){case -2147483606:Bd(d);d=new W2;C8(d,c,b,e);Lx();c.J(AU7);return d;case -2147483605:Bd(d);d=new OO;C8(d,c,b,(-2147483606));Lx();c.J(AU7);return d;case -2147483585:Bd(d);d=new Ot;C8(d,c,b,(-536870849));Lx();c.J(AU7);return d;case -2147483525:f=new Mt;d=E0(d);g=a.eb+1|0;a.eb=g;IB(f,d,c,b,(-536870849),g);Lx();c.J(AU7);return f;case -1073741782:case -1073741781:Bd(d);d=new Qs;C8(d,c,b,e);c.J(d);return d;case -1073741761:Bd(d);d
=new PA;C8(d,c,b,(-536870849));c.J(b);return d;case -1073741701:h=new T1;d=E0(d);e=a.eb+1|0;a.eb=e;IB(h,d,c,b,(-536870849),e);c.J(h);return h;case -536870870:case -536870869:Bd(d);if(c.ha()!=(-2147483602)){d=new CO;C8(d,c,b,e);}else if(B7(a,32)){d=new Qu;C8(d,c,b,e);}else{d=new Nw;f=Ox(a.c6);C8(d,c,b,e);d.j2=f;}c.J(d);return d;case -536870849:Bd(d);d=new FF;C8(d,c,b,(-536870849));c.J(b);return d;case -536870789:h=new E1;d=E0(d);e=a.eb+1|0;a.eb=e;IB(h,d,c,b,(-536870849),e);c.J(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bd(d);d=new W4;EI(d,f,b,e);f.d=d;return d;case -2147483585:Bd(d);c=new Vn;EI(c,f,b,(-2147483585));return c;case -2147483525:c=new Og;Rb(c,E0(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bd(d);d=new Pw;EI(d,f,b,e);f.d=d;return d;case -1073741761:Bd(d);c=new S_;EI(c,f,b,(-1073741761));return c;case -1073741701:c=new P7;Rb(c,E0(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bd(d);d=ARu(f,b,e);f.d=d;return d;case -536870849:Bd(d);c
=new Er;EI(c,f,b,(-536870849));return c;case -536870789:return AQC(E0(d),f,b,(-536870789));default:}return c;}
function Wk(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fl;while(true){a:{e=a.f;f=e.ba;if((f&(-2147418113))==(-2147483608)){Bd(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.c6=g;else{if(f!=(-1073741784))g=a.c6;c=WN(a,f,g,b);e=a.f;if(e.ba!=(-536870871))J(B6(B(31),e.bC,e.cQ));Bd(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bd(e);c
=ANN(0);break a;case -2147483577:Bd(e);c=new Ns;BK(c);break a;case -2147483558:Bd(e);c=new V4;h=a.bo+1|0;a.bo=h;ABV(c,h);break a;case -2147483550:Bd(e);c=ANN(1);break a;case -2147483526:Bd(e);c=new VN;BK(c);break a;case -536870876:Bd(e);a.bo=a.bo+1|0;if(B7(a,8)){if(B7(a,1)){c=AQR(a.bo);break a;}c=AP_(a.bo);break a;}if(B7(a,1)){c=AQ6(a.bo);break a;}c=ARH(a.bo);break a;case -536870866:Bd(e);if(B7(a,32)){c=AR1();break a;}c=ARB(Ox(a.c6));break a;case -536870821:Bd(e);i=0;c=a.f;if(c.ba==(-536870818)){i=1;Bd(c);}c
=Kc(a,FR(a,i));c.J(b);e=a.f;if(e.ba!=(-536870819))J(B6(B(31),e.bC,e.cQ));NX(e,1);Bd(a.f);break a;case -536870818:Bd(e);a.bo=a.bo+1|0;if(!B7(a,8)){c=new JP;BK(c);break a;}c=new MG;e=Ox(a.c6);BK(c);c.ps=e;break a;case 0:j=e.eg;if(j!==null)c=Kc(a,j);else{if(Da(e)){c=Gt(b);break a;}c=Yz(f&65535);}Bd(a.f);break a;default:break b;}Bd(e);c=new JP;BK(c);break a;}h=(f&2147483647)-48|0;if(a.fQ<h)J(B6(B(31),E9(e),Nk(a.f)));Bd(e);a.bo=a.bo+1|0;c=!B7(a,2)?AQg(h,a.bo):B7(a,64)?AQS(h,a.bo):AR$(h,a.bo);a.jD.data[h].jB=1;a.mG
=1;break a;}if(f>=0&&!Gv(e)){c=WE(a,f);Bd(a.f);}else if(f==(-536870788))c=Gt(b);else{if(f!=(-536870871)){b=new Id;c=!Gv(a.f)?V3(f&65535):a.f.eg.cj();e=a.f;IK(b,c,e.bC,e.cQ);J(b);}if(d){b=new Id;e=a.f;IK(b,B(31),e.bC,e.cQ);J(b);}c=Gt(b);}}}if(f!=(-16777176))break;}return c;}
function FR(a,b){var c,d,e,f,g,h,i,j,$$je;c=AOh(B7(a,2),B7(a,64));Ek(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Da(a.f))break a;h=a.f;b=h.ba;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cs(c,d);d=Bd(a.f);h=a.f;if(h.ba!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bd(h);e=1;d=(-1);break d;}Bd(h);if(g){c=FR(a,0);break d;}if(a.f.ba==(-536870819))break d;VT(c,FR(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bd(h);h=a.f;i=h.ba;if(Gv(h))break c;if
(i<0){j=a.f.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(JK(i))break e;i=i&65535;break e;}catch($$e){$$je=D9($$e);if($$je instanceof DS){break b;}else{throw $$e;}}}try{BO(c,d,i);}catch($$e){$$je=D9($$e);if($$je instanceof DS){break b;}else{throw $$e;}}Bd(a.f);d=(-1);break d;}}if(d>=0)Cs(c,d);d=45;Bd(a.f);break d;case -536870821:if(d>=0){Cs(c,d);d=(-1);}Bd(a.f);j=0;h=a.f;if(h.ba==(-536870818)){Bd(h);j=1;}if(!e)Xe(c,FR(a,j));else VT(c,FR(a,j));e=0;Bd(a.f);break d;case -536870819:if(d>=0)Cs(c,
d);d=93;Bd(a.f);break d;case -536870818:if(d>=0)Cs(c,d);d=94;Bd(a.f);break d;case 0:if(d>=0)Cs(c,d);h=a.f.eg;if(h===null)d=0;else{ACW(c,h);d=(-1);}Bd(a.f);break d;default:}if(d>=0)Cs(c,d);d=Bd(a.f);}g=0;}J(B6(B(31),Jj(a),a.f.cQ));}J(B6(B(31),Jj(a),a.f.cQ));}if(!f){if(d>=0)Cs(c,d);return c;}J(B6(B(31),Jj(a),a.f.cQ-1|0));}
function WE(a,b){var c,d,e;c=Ll(b);if(B7(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AE6(b&65535);}if(B7(a,64)&&b>128){if(c){d=new LR;Dr(d);d.bB=2;d.o3=Gl(Gk(b));return d;}if(N8(b))return AKI(b&65535);if(!Rx(b))return AMb(b&65535);return AIa(b&65535);}}if(!c){if(N8(b))return AKI(b&65535);if(!Rx(b))return Yz(b&65535);return AIa(b&65535);}d=new DJ;Dr(d);d.bB=2;d.fe=b;e=(Gd(b)).data;d.i4=e[0];d.hJ=e[1];return d;}
function Kc(a,b){var c,d,e;if(!AAj(b)){if(!b.H){if(b.gr())return AHB(b);return ANP(b);}if(!b.gr())return AIR(b);c=new ID;Tq(c,b);return c;}c=XI(b);d=new L8;BK(d);d.nV=c;d.tS=c.Y;if(!b.H){if(b.gr())return AAY(AHB(Hb(b)),d);return AAY(ANP(Hb(b)),d);}if(!b.gr())return AAY(AIR(Hb(b)),d);c=new Pq;e=new ID;Tq(e,Hb(b));ACB(c,e,d);return c;}
function Hc(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B7(a,b){return (a.c6&b)!=b?0:1;}
function Nj(){C.call(this);this.qR=null;}
function APO(a,b){b.ds=a.qR.ds;}
var Ge=F(Cr);
var AU3=null;var AU2=null;var AU8=null;function TZ(){TZ=Br(Ge);AGg();}
function AIw(a,b){var c=new Ge();Yu(c,a,b);return c;}
function Yu(a,b,c){TZ();DE(a,b,c);}
function AGg(){var b;AU3=AIw(B(358),0);b=AIw(B(359),1);AU2=b;AU8=H(Ge,[AU3,b]);}
function RX(){C.call(this);this.rl=null;}
function AI4(a,b){DH(a.rl,b);}
function Ou(){var a=this;C.call(a);a.pE=null;a.pD=0;a.pz=0;a.py=null;a.pC=0;a.pA=0;}
function AJv(a,b){var c,d,e,f,g,h,i,j;c=a.pE;d=a.pD;e=a.pz;f=a.py;g=a.pC;h=a.pA;i=CJ(c.bm,5.0);d=W((c.bm.b1.b-d|0)-i|0,Ba((i-d|0)-c.O.r.b|0,b.k.b));j=W((c.bm.b1.a-e|0)-i|0,Ba((i-e|0)-c.O.r.a|0,b.k.a));Bg(f,d+g|0,j+h|0);Fb(c,f,c.L.r);}
function RZ(){var a=this;C.call(a);a.rY=null;a.rZ=null;a.r0=null;a.r1=0;a.r3=0;a.r4=0;a.r5=0;a.r6=0;a.r7=0;a.r8=0;a.qZ=0;}
function AHl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.rY;d=a.rZ;e=a.r0;f=a.r1;g=a.r3;h=a.r4;i=a.r5;j=a.r6;k=a.r7;l=a.r8;m=a.qZ;n=CJ(c.bm,5.0);o=c.L.it();CG(d,c.L.r);CG(e,c.L.C);switch(f){case -1:f=W(h+(b.k.b-g|0)|0,c.bm.b1.b-n|0);g=o.b;h=h+i|0;f=Ba(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Ba((i+b.k.b|0)-g|0,Ba(o.b,n-c.O.C.b|0));}b:{switch(j){case -1:f=Ba(n,W(l+(b.k.a-k|0)|0,(c.bm.b1.a+c.O.r.a|0)-n|0));g=o.a;h=l+m|0;f=Ba(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Ba((m+b.k.a|0)-k|0,o.a);}Fb(c,e,d);}
var R3=F();
function AD8(a,b){}
function Ul(){var a=this;C.call(a);a.tx=null;a.ty=0.0;}
function Je(a,b){return Ka(a.tx,b,a.ty*2.0+0.875);}
function Bz(){var a=this;C.call(a);a.d=null;a.b8=0;a.np=null;a.g7=0;}
var ASO=0;function BK(a){var b,c;b=new E7;c=ASO;ASO=c+1|0;Jn(b,c);a.np=Lo(b);}
function J_(a,b){var c,d;c=new E7;d=ASO;ASO=d+1|0;Jn(c,d);a.np=Lo(c);a.d=b;}
function Hh(a,b,c,d){var e;e=d.u;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hr(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFz(a,b){a.g7=b;}
function AEJ(a){return a.g7;}
function ANh(a){return a.d;}
function AN8(a,b){a.d=b;}
function AN7(a,b){return 1;}
function AOZ(a){return null;}
function Iy(a){var b;a.b8=1;b=a.d;if(b!==null){if(!b.b8){b=b.eO();if(b!==null){a.d.b8=1;a.d=b;}a.d.dP();}else if(b instanceof Gh&&b.dT.jB)a.d=b.d;}}
function ACN(){ASO=1;}
var Tz=F();
var AU1=null;function AQq(){AQq=Br(Tz);AEn();}
function AEn(){var b,c;TZ();b=BH((AU8.e_()).data.length);c=b.data;AU1=b;c[AU3.cJ]=1;c[AU2.cJ]=2;}
function Os(){C.call(this);this.oA=null;}
function AFH(a,b){Tr(H7(a.oA),b,AUd,XE(B(360)));}
function U4(){C.call(this);this.sw=null;}
function AHf(a,b){var c,d;c=a.sw;d=b.g4;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function W6(){var a=this;C.call(a);a.ox=null;a.ow=null;}
function AFu(a){var b,c;b=a.ox;c=a.ow;b=b.bp;Kz(b,c,b.fG);}
function CN(){var a=this;Bz.call(a);a.jB=0;a.db=0;}
var AU7=null;function Lx(){Lx=Br(CN);AGI();}
function ARC(a){var b=new CN();Fa(b,a);return b;}
function Fa(a,b){Lx();BK(a);a.db=b;}
function AEd(a,b,c,d){var e,f;e=HZ(d,a.db);I3(d,a.db,b);f=a.d.c(b,c,d);if(f<0)I3(d,a.db,e);return f;}
function AJS(a){return a.db;}
function AEy(a,b){return 0;}
function AGI(){var b;b=new No;BK(b);AU7=b;}
function Gr(){var a=this;C.call(a);a.X=null;a.fx=0;a.d$=0;a.so=0;a.j4=0;a.ba=0;a.h=0;a.p5=0;a.eg=null;a.d6=null;a.s=0;a.hi=0;a.cQ=0;a.gK=0;a.bC=null;}
var AU9=null;var AU5=null;var AU6=0;function NX(a,b){if(b>0&&b<3)a.d$=b;if(b==1){a.h=a.ba;a.d6=a.eg;a.s=a.gK;a.gK=a.cQ;EU(a);}}
function Gv(a){return a.eg===null?0:1;}
function I9(a){return a.d6===null?0:1;}
function Bd(a){EU(a);return a.j4;}
function E0(a){var b;b=a.eg;EU(a);return b;}
function EU(a){var b,c,d,e,f,g,h,$$je;a.j4=a.ba;a.ba=a.h;a.eg=a.d6;a.cQ=a.gK;a.gK=a.s;while(true){b=0;c=a.s>=a.X.data.length?0:KW(a);a.h=c;a.d6=null;if(a.d$==4){if(c!=92)return;c=a.s;d=a.X.data;c=c>=d.length?0:d[BP(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.s=a.hi;return;}a.d$=a.so;a.h=a.s>(a.X.data.length-2|0)?0:KW(a);}a:{c=a.h;if(c!=92){e=a.d$;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.X.data[a.s]!=63){a.h=(-2147483608);break a;}BP(a);c=a.X.data[a.s];e=0;while(true){b:{if(e){e
=0;switch(c){case 33:break;case 61:a.h=(-134217688);BP(a);break b;default:J(B6(B(31),E9(a),a.s));}a.h=(-67108824);BP(a);}else{switch(c){case 33:break;case 60:BP(a);c=a.X.data[a.s];e=1;break b;case 61:a.h=(-536870872);BP(a);break b;case 62:a.h=(-33554392);BP(a);break b;default:f=ACO(a);a.h=f;if(f<256){a.fx=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fx=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BP(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e
=a.s;d=a.X.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BP(a);break a;case 63:a.h=c|(-1073741824);BP(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);NX(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.d6=ACe(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.s>=(a.X.data.length-2|0)?(-1):KW(a);c:{a.h=c;switch(c){case -1:J(B6(B(31),E9(a),a.s));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=AAL(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.d$!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B6(B(31),E9(a),a.s));case 68:case 83:case 87:case 100:case 115:case 119:a.d6=Q2(Ja(a.X,
a.hi,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.so=a.d$;a.d$=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.s;d=a.X.data;if(c>=(d.length-2|0))J(B6(B(31),E9(a),a.s));a.h=d[BP(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=OU(a,4);break a;case 120:a.h=OU(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=AAu(a);h=0;if(a.h==80)h=1;try{a.d6=Q2(g,h);}catch($$e){$$je=D9($$e);if($$je instanceof IF){J(B6(B(31),E9(a),a.s));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function AAu(a){var b,c,d,e,f,g;b=new M;FM(b,10);c=a.s;d=a.X;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ja(d,BP(a),1);f=new M;O(f);G(G(f,B(361)),b);return N(f);}BP(a);c=0;a:{while(true){g=a.s;d=a.X.data;if(g>=(d.length-2|0))break;c=d[BP(a)];if(c==125)break a;BA(b,c);}}if(c!=125)J(B6(B(31),a.bC,a.s));}if(!b.K)J(B6(B(31),a.bC,a.s));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(361)),f);return N(b);}b:{c:{if(I(f)>3){if(J3(f,B(361)))break c;if(J3(f,B(362)))break c;}break b;}f=Db(f,2);}return f;}
function ACe(a,b){var c,d,e,f,g,$$je;c=new M;FM(c,4);d=(-1);e=2147483647;a:{while(true){f=a.s;g=a.X.data;if(f>=g.length)break a;b=g[BP(a)];if(b==125)break a;if(b==44&&d<0)try{d=IZ(DI(c),10);ACk(c,0,XT(c));continue;}catch($$e){$$je=D9($$e);if($$je instanceof C9){break;}else{throw $$e;}}BA(c,b&65535);}J(B6(B(31),a.bC,a.s));}if(b!=125)J(B6(B(31),a.bC,a.s));if(c.K>0)b:{try{e=IZ(DI(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=D9($$e);if($$je instanceof C9){}else{throw $$e;}}J(B6(B(31),a.bC,a.s));}else if(d
<0)J(B6(B(31),a.bC,a.s));if((d|e|(e-d|0))<0)J(B6(B(31),a.bC,a.s));b=a.s;g=a.X.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BP(a);break c;case 63:a.h=(-1073741701);BP(a);break c;default:}a.h=(-536870789);}c=new Mj;c.d8=d;c.d3=e;return c;}
function E9(a){return a.bC;}
function Da(a){return !a.ba&&!a.h&&a.s==a.p5&&!Gv(a)?1:0;}
function JK(b){return b<0?0:1;}
function ER(a){return !Da(a)&&!Gv(a)&&JK(a.ba)?1:0;}
function Nm(a){var b;b=a.ba;return b<=56319&&b>=55296?1:0;}
function Uj(a){var b;b=a.ba;return b<=57343&&b>=56320?1:0;}
function Rx(b){return b<=56319&&b>=55296?1:0;}
function N8(b){return b<=57343&&b>=56320?1:0;}
function OU(a,b){var c,d,e,f,$$je;c=new M;FM(c,b);d=a.X.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.s>=d)break;BA(c,a.X.data[BP(a)]);e=e+1|0;}if(!f)a:{try{b=IZ(DI(c),16);}catch($$e){$$je=D9($$e);if($$je instanceof C9){break a;}else{throw $$e;}}return b;}J(B6(B(31),a.bC,a.s));}
function AAL(a){var b,c,d,e,f,g;b=3;c=1;d=a.X.data;e=d.length-2|0;f=TU(d[a.s],8);switch(f){case -1:break;default:if(f>3)b=2;BP(a);a:{while(true){if(c>=b)break a;g=a.s;if(g>=e)break a;g=TU(a.X.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BP(a);c=c+1|0;}}return f;}J(B6(B(31),a.bC,a.s));}
function ACO(a){var b,c,d,e;b=1;c=a.fx;a:while(true){d=a.s;e=a.X.data;if(d>=e.length)J(B6(B(31),a.bC,d));b:{c:{switch(e[d]){case 41:BP(a);return c|256;case 45:if(!b)J(B6(B(31),a.bC,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BP(a);}BP(a);return c;}
function BP(a){var b,c,d,e,f;b=a.s;a.hi=b;if(!(a.fx&4))a.s=b+1|0;else{c=a.X.data.length-2|0;a.s=b+1|0;a:while(true){d=a.s;if(d<c&&P4(a.X.data[d])){a.s=a.s+1|0;continue;}d=a.s;if(d>=c)break;e=a.X.data;if(e[d]!=35)break;a.s=d+1|0;while(true){f=a.s;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.s=f+1|0;}}}return a.hi;}
function AB7(b){return AU9.Ao(b);}
function KW(a){var b,c,d,e;b=a.X.data[BP(a)];if(CC(b)){c=a.hi+1|0;d=a.X.data;if(c<d.length){e=d[c];if(CZ(e)){BP(a);return El(b,e);}}}return b;}
function Nk(a){return a.cQ;}
function Id(){var a=this;BC.call(a);a.vG=null;a.vf=null;a.oT=0;}
function B6(a,b,c){var d=new Id();IK(d,a,b,c);return d;}
function IK(a,b,c,d){U(a);a.oT=(-1);a.vG=b;a.vf=c;a.oT=d;}
function V9(){C.call(this);this.sa=null;}
function ALy(a,b){var c,d;c=a.sa;d=0;while(d<b.length){XQ(c,b[d]);d=d+1|0;}}
var AAp=F(0);
function Tk(){var a=this;C.call(a);a.n2=null;a.n4=null;a.n6=null;}
function ALd(a,b){a.n2.m(AQa(a.n4,b,a.n6));}
var QM=F(CN);
function ADN(a,b,c,d){var e;e=a.db;BE(d,e,b-Dd(d,e)|0);return a.d.c(b,c,d);}
function AMM(a,b){return 0;}
var WH=F(CN);
function AFx(a,b,c,d){return b;}
var OW=F(CN);
function AEH(a,b,c,d){if(Dd(d,a.db)!=b)b=(-1);return b;}
function RT(){CN.call(this);this.mv=0;}
function ADT(a,b,c,d){var e;e=a.db;BE(d,e,b-Dd(d,e)|0);a.mv=b;return b;}
function ALm(a,b){return 0;}
var Fl=F(CN);
function AOo(a,b,c,d){if(d.iR!=1&&b!=d.u)return (-1);d.h9=1;I3(d,0,b);return b;}
function BS(){Bz.call(this);this.bB=0;}
function Dr(a){BK(a);a.bB=1;}
function APp(a,b,c,d){var e;if((b+a.bO()|0)>d.u){d.c0=1;return (-1);}e=a.bn(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AND(a){return a.bB;}
function AIx(a,b){return 1;}
var ABT=F(BS);
function Gt(a){var b=new ABT();AJ4(b,a);return b;}
function AJ4(a,b){J_(a,b);a.bB=1;a.g7=1;a.bB=0;}
function AM_(a,b,c){return 0;}
function AGO(a,b,c,d){var e,f,g;e=d.u;f=d.cu;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&CZ(L(c,b))&&b>f&&CC(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AFl(a,b,c,d,e){var f,g;f=e.u;g=e.cu;while(true){if(c<b)return (-1);if(c<f&&CZ(L(d,c))&&c>g&&CC(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ADR(a,b){return 0;}
function BN(){var a=this;Bz.call(a);a.bt=null;a.dT=null;a.R=0;}
function AQ0(a,b){var c=new BN();Fn(c,a,b);return c;}
function Fn(a,b,c){BK(a);a.bt=b;a.dT=c;a.R=c.db;}
function AHo(a,b,c,d){var e,f,g,h;if(a.bt===null)return (-1);e=Fq(d,a.R);Dq(d,a.R,b);f=a.bt.i;g=0;while(true){if(g>=f){Dq(d,a.R,e);return (-1);}h=(Bs(a.bt,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ALf(a,b){a.dT.d=b;}
function AJi(a,b){var c;a:{c=a.bt;if(c!==null){c=BR(c);while(true){if(!B3(c))break a;if(!(BV(c)).bJ(b))continue;else return 1;}}}return 0;}
function ALZ(a,b){return HZ(b,a.R)>=0&&Fq(b,a.R)==HZ(b,a.R)?0:1;}
function AFg(a){var b,c,d,e;a.b8=1;b=a.dT;if(b!==null&&!b.b8)Iy(b);a:{b=a.bt;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bs(a.bt,d);e=b.eO();if(e===null)e=b;else{b.b8=1;Ee(a.bt,d);Qr(a.bt,d,e);}if(!e.b8)e.dP();d=d+1|0;}}}if(a.d!==null)Iy(a);}
var Ip=F(BN);
function AK0(a,b,c,d){var e,f,g,h;e=Dd(d,a.R);BE(d,a.R,b);f=a.bt.i;g=0;while(true){if(g>=f){BE(d,a.R,e);return (-1);}h=(Bs(a.bt,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AMn(a,b){return !Dd(b,a.R)?0:1;}
var DG=F(Ip);
function AFY(a,b,c,d){var e,f,g;e=Dd(d,a.R);BE(d,a.R,b);f=a.bt.i;g=0;while(g<f){if((Bs(a.bt,g)).c(b,c,d)>=0)return a.d.c(a.dT.mv,c,d);g=g+1|0;}BE(d,a.R,e);return (-1);}
function AL7(a,b){a.d=b;}
var L1=F(DG);
function AK$(a,b,c,d){var e,f;e=a.bt.i;f=0;while(f<e){if((Bs(a.bt,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AOc(a,b){return 0;}
var Vd=F(DG);
function AEs(a,b,c,d){var e,f;e=a.bt.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bt,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ANH(a,b){return 0;}
var P6=F(DG);
function AFa(a,b,c,d){var e,f,g,h;e=a.bt.i;f=d.ie?0:d.cu;a:{g=a.d.c(b,c,d);if(g>=0){BE(d,a.R,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bt,h)).cc(f,b,c,d)>=0){BE(d,a.R,(-1));return g;}h=h+1|0;}}}return (-1);}
function APS(a,b){return 0;}
var SF=F(DG);
function ADp(a,b,c,d){var e,f;e=a.bt.i;BE(d,a.R,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bt,f)).cc(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AMB(a,b){return 0;}
function Gh(){BN.call(this);this.cC=null;}
function ARn(a,b){var c=new Gh();Yn(c,a,b);return c;}
function Yn(a,b,c){BK(a);a.cC=b;a.dT=c;a.R=c.db;}
function ADI(a,b,c,d){var e,f;e=Fq(d,a.R);Dq(d,a.R,b);f=a.cC.c(b,c,d);if(f>=0)return f;Dq(d,a.R,e);return (-1);}
function AJE(a,b,c,d){var e;e=a.cC.b9(b,c,d);if(e>=0)Dq(d,a.R,e);return e;}
function AMS(a,b,c,d,e){var f;f=a.cC.cc(b,c,d,e);if(f>=0)Dq(e,a.R,f);return f;}
function AJd(a,b){return a.cC.bJ(b);}
function ALj(a){var b;b=new Mn;Yn(b,a.cC,a.dT);a.d=b;return b;}
function AO2(a){var b;a.b8=1;b=a.dT;if(b!==null&&!b.b8)Iy(b);b=a.cC;if(b!==null&&!b.b8){b=b.eO();if(b!==null){a.cC.b8=1;a.cC=b;}a.cC.dP();}}
var Gs=F();
function T(){var a=this;Gs.call(a);a.Y=0;a.b5=0;a.G=null;a.iX=null;a.jt=null;a.H=0;}
var AU$=null;function NS(){NS=Br(T);AFJ();}
function Bq(a){var b;NS();b=new V2;b.y=BH(64);a.G=b;}
function AEv(a){return null;}
function AD3(a){return a.G;}
function AAj(a){var b,c,d,e,f;if(!a.b5)b=GS(a.G,0)>=2048?0:1;else{a:{c=a.G;b=0;d=c.bl;if(b<d){e=c.y.data;f=(e[0]^(-1))>>>0|0;if(f)b=HR(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HR(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AHA(a){return a.H;}
function ANw(a){return a;}
function XI(a){var b,c;if(a.jt===null){b=a.ef();c=new Vq;c.v4=a;c.mT=b;Bq(c);a.jt=c;Ek(c,a.b5);}return a.jt;}
function Hb(a){var b,c;if(a.iX===null){b=a.ef();c=new Vo;c.vJ=a;c.rN=b;c.sA=a;Bq(c);a.iX=c;Ek(c,a.Y);a.iX.H=a.H;}return a.iX;}
function AOY(a){return 0;}
function Ek(a,b){var c;c=a.Y;if(c^b){a.Y=c?0:1;a.b5=a.b5?0:1;}if(!a.H)a.H=1;return a;}
function AGQ(a){return a.Y;}
function JG(b,c){NS();return b.j(c);}
function HP(b,c){var d,e;NS();if(b.cW()!==null&&c.cW()!==null){b=b.cW();c=c.cW();d=W(b.y.data.length,c.y.data.length);e=0;a:{while(e<d){if(b.y.data[e]&c.y.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Q2(b,c){var d,e,f;NS();d=0;while(true){AMz();e=AU_.data;if(d>=e.length){f=new IF;Bl(f,B(31));f.wm=B(31);f.v7=b;J(f);}e=e[d].data;if(Bo(b,e[0]))break;d=d+1|0;}return ABm(e[1],c);}
function AFJ(){var b;b=new GJ;AMz();AU$=b;}
function Yd(){var a=this;T.call(a);a.kH=0;a.mu=0;a.fR=0;a.kl=0;a.dn=0;a.eJ=0;a.D=null;a.bq=null;}
function De(){var a=new Yd();APB(a);return a;}
function AOh(a,b){var c=new Yd();AFy(c,a,b);return c;}
function APB(a){Bq(a);a.D=APV();}
function AFy(a,b,c){Bq(a);a.D=APV();a.kH=b;a.mu=c;}
function Cs(a,b){a:{if(a.kH){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dn){LF(a.D,Hc(b&65535));break a;}KT(a.D,Hc(b&65535));break a;}if(a.mu&&b>128){a.fR=1;b=Gl(Gk(b));}}}if(!(!Rx(b)&&!N8(b))){if(a.kl)LF(a.G,b-55296|0);else KT(a.G,b-55296|0);}if(a.dn)LF(a.D,b);else KT(a.D,b);if(!a.H&&Ll(b))a.H=1;return a;}
function ACW(a,b){var c,d,e;if(!a.H&&b.H)a.H=1;if(a.kl){if(!b.b5)FG(a.G,b.ef());else C6(a.G,b.ef());}else if(!b.b5)FA(a.G,b.ef());else{Fg(a.G,b.ef());C6(a.G,b.ef());a.b5=a.b5?0:1;a.kl=1;}if(!a.eJ&&b.cW()!==null){if(a.dn){if(!b.Y)FG(a.D,b.cW());else C6(a.D,b.cW());}else if(!b.Y)FA(a.D,b.cW());else{Fg(a.D,b.cW());C6(a.D,b.cW());a.Y=a.Y?0:1;a.dn=1;}}else{c=a.Y;d=a.bq;if(d!==null){if(!c){e=new NL;e.ue=a;e.sX=c;e.sl=d;e.r9=b;Bq(e);a.bq=e;}else{e=new NM;e.wt=a;e.pl=c;e.o7=d;e.os=b;Bq(e);a.bq=e;}}else{if(c&&!a.dn&&
Lp(a.D)){d=new NI;d.ve=a;d.pe=b;Bq(d);a.bq=d;}else if(!c){d=new NG;d.j7=a;d.jg=c;d.nm=b;Bq(d);a.bq=d;}else{d=new NH;d.kT=a;d.jm=c;d.sd=b;Bq(d);a.bq=d;}a.eJ=1;}}return a;}
function BO(a,b,c){var d,e,f,g,h;if(b>c){d=new BC;U(d);J(d);}a:{b:{if(!a.kH){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cs(a,b);b=b+1|0;}}if(!a.dn)Hw(a.D,b,c+1|0);else{d=a.D;c=c+1|0;if(b>c){d=new Bw;U(d);J(d);}e=d.bl;if(b<e){f=W(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.y.data;h[g]=h[g]&(HL(d,b)|Hm(d,f));}else{h=d.y.data;h[g]=h[g]&HL(d,b);e=g+1|0;while(e<c){d.y.data[e]=0;e=e+1|0;}if(f&31){h=d.y.data;h[c]=h[c]&Hm(d,f);}}GN(d);}}}}return a;}
function Xe(a,b){var c,d,e;if(!a.H&&b.H)a.H=1;if(b.fR)a.fR=1;c=a.b5;if(!(c^b.b5)){if(!c)FA(a.G,b.G);else C6(a.G,b.G);}else if(c)FG(a.G,b.G);else{Fg(a.G,b.G);C6(a.G,b.G);a.b5=1;}if(!a.eJ&&CR(b)!==null){c=a.Y;if(!(c^b.Y)){if(!c)FA(a.D,CR(b));else C6(a.D,CR(b));}else if(c)FG(a.D,CR(b));else{Fg(a.D,CR(b));C6(a.D,CR(b));a.Y=1;}}else{c=a.Y;d=a.bq;if(d!==null){if(!c){e=new NB;e.tX=a;e.rn=c;e.sb=d;e.sJ=b;Bq(e);a.bq=e;}else{e=new Oo;e.uq=a;e.sG=c;e.mf=d;e.mx=b;Bq(e);a.bq=e;}}else{if(!a.dn&&Lp(a.D)){if(!c){d=new NJ;d.wz
=a;d.oe=b;Bq(d);a.bq=d;}else{d=new NK;d.uv=a;d.su=b;Bq(d);a.bq=d;}}else if(!c){d=new NN;d.rp=a;d.pH=b;d.o_=c;Bq(d);a.bq=d;}else{d=new NO;d.p8=a;d.qp=b;d.qG=c;Bq(d);a.bq=d;}a.eJ=1;}}}
function VT(a,b){var c,d,e;if(!a.H&&b.H)a.H=1;if(b.fR)a.fR=1;c=a.b5;if(!(c^b.b5)){if(!c)C6(a.G,b.G);else FA(a.G,b.G);}else if(!c)FG(a.G,b.G);else{Fg(a.G,b.G);C6(a.G,b.G);a.b5=0;}if(!a.eJ&&CR(b)!==null){c=a.Y;if(!(c^b.Y)){if(!c)C6(a.D,CR(b));else FA(a.D,CR(b));}else if(!c)FG(a.D,CR(b));else{Fg(a.D,CR(b));C6(a.D,CR(b));a.Y=0;}}else{c=a.Y;d=a.bq;if(d!==null){if(!c){e=new ND;e.ud=a;e.rr=c;e.mR=d;e.ph=b;Bq(e);a.bq=e;}else{e=new NE;e.uB=a;e.qW=c;e.l7=d;e.rm=b;Bq(e);a.bq=e;}}else{if(!a.dn&&Lp(a.D)){if(!c){d=new Ny;d.uw
=a;d.nM=b;Bq(d);a.bq=d;}else{d=new Nz;d.wq=a;d.nS=b;Bq(d);a.bq=d;}}else if(!c){d=new NF;d.tB=a;d.sR=b;d.qi=c;Bq(d);a.bq=d;}else{d=new Nx;d.qh=a;d.q4=b;d.pn=c;Bq(d);a.bq=d;}a.eJ=1;}}}
function CW(a,b){var c;c=a.bq;if(c!==null)return a.Y^c.j(b);return a.Y^Dn(a.D,b);}
function CR(a){if(!a.eJ)return a.D;return null;}
function AGH(a){return a.G;}
function ANW(a){var b,c;if(a.bq!==null)return a;b=CR(a);c=new NC;c.tT=a;c.hK=b;Bq(c);return Ek(c,a.Y);}
function AKr(a){var b,c,d;b=new M;O(b);c=GS(a.D,0);while(c>=0){HT(b,Gd(c));BA(b,124);c=GS(a.D,c+1|0);}d=b.K;if(d>0)Vf(b,d-1|0);return N(b);}
function AGT(a){return a.fR;}
function IF(){var a=this;Bn.call(a);a.wm=null;a.v7=null;}
function DR(){Bz.call(this);this.F=null;}
function C8(a,b,c,d){J_(a,c);a.F=b;a.g7=d;}
function APA(a){return a.F;}
function AMV(a,b){return !a.F.bJ(b)&&!a.d.bJ(b)?0:1;}
function AOj(a,b){return 1;}
function AJ1(a){var b;a.b8=1;b=a.d;if(b!==null&&!b.b8){b=b.eO();if(b!==null){a.d.b8=1;a.d=b;}a.d.dP();}b=a.F;if(b!==null){if(!b.b8){b=b.eO();if(b!==null){a.F.b8=1;a.F=b;}a.F.dP();}else if(b instanceof Gh&&b.dT.jB)a.F=b.d;}}
function CY(){DR.call(this);this.S=null;}
function ARu(a,b,c){var d=new CY();EI(d,a,b,c);return d;}
function EI(a,b,c,d){C8(a,b,c,d);a.S=b;}
function ADr(a,b,c,d){var e,f;e=0;a:{while((b+a.S.bO()|0)<=d.u){f=a.S.bn(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.S.bO()|0;e=e+(-1)|0;}return f;}
function EV(){CY.call(this);this.iQ=null;}
function AQC(a,b,c,d){var e=new EV();Rb(e,a,b,c,d);return e;}
function Rb(a,b,c,d,e){EI(a,c,d,e);a.iQ=b;}
function AEg(a,b,c,d){var e,f,g,h,i;e=a.iQ;f=e.d8;g=e.d3;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.S.bO()|0)>d.u)break a;i=a.S.bn(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.S.bO()|0;h=h+(-1)|0;}return i;}if((b+a.S.bO()|0)>d.u){d.c0=1;return (-1);}i=a.S.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CO=F(DR);
function ADH(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.F.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Er=F(CY);
function AJK(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function APW(a,b){a.d=b;a.F.J(b);}
var Vr=F(CY);
function APh(a,b,c,d){while((b+a.S.bO()|0)<=d.u&&a.S.bn(b,c)>0){b=b+a.S.bO()|0;}return a.d.c(b,c,d);}
function AKn(a,b,c,d){var e,f,g;e=a.d.b9(b,c,d);if(e<0)return (-1);f=e-a.S.bO()|0;while(f>=b&&a.S.bn(f,c)>0){g=f-a.S.bO()|0;e=f;f=g;}return e;}
function V(){var a=this;C.call(a);a.k3=null;a.j5=null;}
function ABm(a,b){if(!b&&a.k3===null)a.k3=a.A();else if(b&&a.j5===null)a.j5=Ek(a.A(),1);if(b)return a.j5;return a.k3;}
var C9=F(BC);
function Mj(){var a=this;Gs.call(a);a.d8=0;a.d3=0;}
function AKy(a){var b,c,d,e,f;b=a.d8;c=a.d3;d=c==2147483647?B(31):Lo(AB6(c));e=new M;O(e);BA(e,123);f=S(e,b);BA(f,44);BA(G(f,d),125);return N(e);}
var No=F(Bz);
function AIX(a,b,c,d){return b;}
function ALe(a,b){return 0;}
function V2(){var a=this;C.call(a);a.y=null;a.bl=0;}
function APV(){var a=new V2();AEW(a);return a;}
function AEW(a){a.y=BH(0);}
function KT(a,b){var c,d;c=b/32|0;if(b>=a.bl){HW(a,c+1|0);a.bl=b+1|0;}d=a.y.data;d[c]=d[c]|1<<(b%32|0);}
function Hw(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new Bw;U(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bl){HW(a,f+1|0);a.bl=c;}if(d==f){g=a.y.data;g[d]=g[d]|Hm(a,b)&HL(a,c);}else{g=a.y.data;g[d]=g[d]|Hm(a,b);h=d+1|0;while(h<f){a.y.data[h]=(-1);h=h+1|0;}if(c&31){g=a.y.data;g[f]=g[f]|HL(a,c);}}}
function Hm(a,b){return (-1)<<(b%32|0);}
function HL(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function LF(a,b){var c,d;c=b/32|0;d=a.y.data;if(c<d.length){d[c]=d[c]&JD((-2),b%32|0);if(b==(a.bl-1|0))GN(a);}}
function Dn(a,b){var c,d;c=b/32|0;d=a.y.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GS(a,b){var c,d,e,f;c=a.bl;if(b>=c)return (-1);d=b/32|0;e=a.y.data;f=e[d]>>>(b%32|0)|0;if(f)return HR(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HR(e[f])|0;f=f+1|0;}return (-1);}
function HW(a,b){var c;c=a.y.data.length;if(c>=b)return;c=Ba((b*3|0)/2|0,(c*2|0)+1|0);a.y=ACH(a.y,c);}
function GN(a){var b,c,d;b=(a.bl+31|0)/32|0;a.bl=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=M2(a.y.data[c]);if(d<32)break;c=c+(-1)|0;a.bl=a.bl-32|0;}a.bl=a.bl-d|0;}}
function C6(a,b){var c,d,e,f;c=W(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&b.y.data[d];d=d+1|0;}while(true){f=a.y.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bl=W(a.bl,b.bl);GN(a);}
function FG(a,b){var c,d,e;c=W(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&(b.y.data[d]^(-1));d=d+1|0;}GN(a);}
function FA(a,b){var c,d,e;c=Ba(a.bl,b.bl);a.bl=c;HW(a,(c+31|0)/32|0);c=W(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]|b.y.data[d];d=d+1|0;}}
function Fg(a,b){var c,d,e;c=Ba(a.bl,b.bl);a.bl=c;HW(a,(c+31|0)/32|0);c=W(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]^b.y.data[d];d=d+1|0;}GN(a);}
function Lp(a){return a.bl?0:1;}
function L8(){var a=this;BN.call(a);a.nV=null;a.tS=0;}
function Pq(){var a=this;BN.call(a);a.lo=null;a.kW=null;}
function AAY(a,b){var c=new Pq();ACB(c,a,b);return c;}
function ACB(a,b,c){BK(a);a.lo=b;a.kW=c;}
function AEc(a,b,c,d){var e,f,g,h,i;e=a.lo.c(b,c,d);if(e<0)a:{f=a.kW;g=d.cu;e=d.u;h=b+1|0;e=BD(h,e);if(e>0){d.c0=1;e=(-1);}else{i=L(c,b);if(!f.nV.j(i))e=(-1);else{if(CC(i)){if(e<0&&CZ(L(c,h))){e=(-1);break a;}}else if(CZ(i)&&b>g&&CC(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AKX(a,b){a.d=b;a.kW.d=b;a.lo.J(b);}
function AEK(a,b){return 1;}
function AEu(a,b){return 1;}
function Ds(){var a=this;BN.call(a);a.dh=null;a.u$=0;}
function AIR(a){var b=new Ds();Tq(b,a);return b;}
function Tq(a,b){BK(a);a.dh=b.ip();a.u$=b.Y;}
function AGz(a,b,c,d){var e,f,g,h;e=d.u;if(b<e){f=b+1|0;g=L(c,b);if(a.j(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(G1(g,f)&&a.j(El(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AG5(a,b){return a.dh.j(b);}
function AD9(a,b){if(b instanceof DJ)return JG(a.dh,b.fe);if(b instanceof Ec)return JG(a.dh,b.cT);if(b instanceof Ds)return HP(a.dh,b.dh);if(!(b instanceof D7))return 1;return HP(a.dh,b.et);}
function AIK(a){return a.dh;}
function ANq(a,b){a.d=b;}
function AGL(a,b){return 1;}
var ID=F(Ds);
function AIy(a,b){return a.dh.j(Gl(Gk(b)));}
function X6(){var a=this;BS.call(a);a.oK=null;a.uT=0;}
function AHB(a){var b=new X6();AKD(b,a);return b;}
function AKD(a,b){Dr(a);a.oK=b.ip();a.uT=b.Y;}
function AIY(a,b,c){return !a.oK.j(EO(Eq(L(c,b))))?(-1):1;}
function D7(){var a=this;BS.call(a);a.et=null;a.vq=0;}
function ANP(a){var b=new D7();ALH(b,a);return b;}
function ALH(a,b){Dr(a);a.et=b.ip();a.vq=b.Y;}
function LI(a,b,c){return !a.et.j(L(c,b))?(-1):1;}
function ALh(a,b){if(b instanceof Ec)return JG(a.et,b.cT);if(b instanceof D7)return HP(a.et,b.et);if(!(b instanceof Ds)){if(!(b instanceof DJ))return 1;return 0;}return HP(a.et,b.dh);}
function NW(){var a=this;BN.call(a);a.gc=null;a.lf=null;a.iN=0;}
function AN1(a,b){var c=new NW();ADJ(c,a,b);return c;}
function ADJ(a,b,c){BK(a);a.gc=b;a.iN=c;}
function AJJ(a,b){a.d=b;}
function PB(a){if(a.lf===null)a.lf=FK(a.gc);return a.lf;}
function ADg(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.u;f=BH(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?EW([k,l]):EW([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iN;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gc.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iN==3){k=f[0];m=a.gc.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iN==2){b=f[0];m=a.gc.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AEE(a,b){return b instanceof NW&&!Bo(PB(b),PB(a))?0:1;}
function AN0(a,b){return 1;}
function Ec(){BS.call(this);this.cT=0;}
function Yz(a){var b=new Ec();ALL(b,a);return b;}
function ALL(a,b){Dr(a);a.cT=b;}
function AIH(a){return 1;}
function AHx(a,b,c){return a.cT!=L(c,b)?(-1):1;}
function AGu(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=Gp(c,a.cT,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AIN(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hr(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FP(d,a.cT,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANS(a,b){if(b instanceof Ec)return b.cT!=a.cT?0:1;if(!(b instanceof D7)){if(b instanceof Ds)return b.j(a.cT);if(!(b instanceof DJ))return 1;return 0;}return LI(b,0,V3(a.cT))<=0?0:1;}
function ACm(){BS.call(this);this.lY=0;}
function AMb(a){var b=new ACm();AKl(b,a);return b;}
function AKl(a,b){Dr(a);a.lY=EO(Eq(b));}
function ADb(a,b,c){return a.lY!=EO(Eq(L(c,b)))?(-1):1;}
function Xg(){var a=this;BS.call(a);a.sM=0;a.mO=0;}
function AE6(a){var b=new Xg();AMv(b,a);return b;}
function AMv(a,b){Dr(a);a.sM=b;a.mO=Hc(b);}
function ADB(a,b,c){return a.sM!=L(c,b)&&a.mO!=L(c,b)?(-1):1;}
function E4(){var a=this;BN.call(a);a.gX=0;a.jQ=null;a.jj=null;a.jd=0;}
function ASe(a,b){var c=new E4();Nd(c,a,b);return c;}
function Nd(a,b,c){BK(a);a.gX=1;a.jj=b;a.jd=c;}
function AO1(a,b){a.d=b;}
function AKZ(a,b,c,d){var e,f,g,h,i,j,k,l;e=BH(4);f=d.u;if(b>=f)return (-1);g=JY(a,b,c,f);h=b+a.gX|0;i=AB7(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Do(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JY(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AB7(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gX|0;if(h>=f){b=k;break a;}g=JY(a,h,c,f);b=k;}}}if(b!=a.jd)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jj.data[g])break;g=g+1|0;}return (-1);}
function VS(a){var b,c;if(a.jQ===null){b=new M;O(b);c=0;while(c<a.jd){HT(b,Gd(a.jj.data[c]));c=c+1|0;}a.jQ=N(b);}return a.jQ;}
function JY(a,b,c,d){var e,f,g;a.gX=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(G1(e,f)){g=BQ(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CC(g[0])&&CZ(g[1])?El(g[0],g[1]):g[0];a.gX=2;}}return e;}
function AIZ(a,b){return b instanceof E4&&!Bo(VS(b),VS(a))?0:1;}
function AL$(a,b){return 1;}
var Wl=F(E4);
var SS=F(E4);
var W2=F(CO);
function AFC(a,b,c,d){var e;while(true){e=a.F.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var OO=F(CO);
function AKe(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.F.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FF=F(CO);
function ANm(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.F.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AOt(a,b){a.d=b;a.F.J(b);}
var Ot=F(FF);
function AIJ(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AKz(a,b){a.d=b;}
function E1(){var a=this;CO.call(a);a.ft=null;a.c5=0;}
function AVa(a,b,c,d,e){var f=new E1();IB(f,a,b,c,d,e);return f;}
function IB(a,b,c,d,e,f){C8(a,c,d,e);a.ft=b;a.c5=f;}
function APL(a,b,c,d){var e,f;e=Md(d,a.c5);if(!a.F.E(d))return a.d.c(b,c,d);if(e>=a.ft.d3)return a.d.c(b,c,d);f=a.c5;e=e+1|0;D3(d,f,e);f=a.F.c(b,c,d);if(f>=0){D3(d,a.c5,0);return f;}f=a.c5;e=e+(-1)|0;D3(d,f,e);if(e>=a.ft.d8)return a.d.c(b,c,d);D3(d,a.c5,0);return (-1);}
var Mt=F(E1);
function AH2(a,b,c,d){var e,f,g;e=0;f=a.ft.d3;a:{while(true){g=a.F.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.ft.d8)return (-1);return a.d.c(b,c,d);}
var Qs=F(CO);
function AO7(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.F.c(b,c,d);}
var PA=F(FF);
function AEM(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.F.c(b,c,d);return e;}
var T1=F(E1);
function ADY(a,b,c,d){var e,f,g;e=Md(d,a.c5);if(!a.F.E(d))return a.d.c(b,c,d);f=a.ft;if(e>=f.d3){D3(d,a.c5,0);return a.d.c(b,c,d);}if(e<f.d8){D3(d,a.c5,e+1|0);g=a.F.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){D3(d,a.c5,0);return g;}D3(d,a.c5,e+1|0);g=a.F.c(b,c,d);}return g;}
var Qu=F(DR);
function APx(a,b,c,d){var e;e=d.u;if(e>b)return a.d.cc(b,e,c,d);return a.d.c(b,c,d);}
function ANy(a,b,c,d){var e;e=d.u;if(a.d.cc(b,e,c,d)>=0)return b;return (-1);}
function Nw(){DR.call(this);this.j2=null;}
function ALk(a,b,c,d){var e,f;e=d.u;f=T3(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cc(b,e,c,d);return a.d.c(b,c,d);}
function ADk(a,b,c,d){var e,f,g,h;e=d.u;f=a.d.b9(b,c,d);if(f<0)return (-1);g=T3(a,f,e,c);if(g>=0)e=g;g=Ba(f,a.d.cc(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.j2.g3(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function T3(a,b,c,d){while(true){if(b>=c)return (-1);if(a.j2.g3(L(d,b)))break;b=b+1|0;}return b;}
var ED=F();
var AVb=null;var AVc=null;function Ox(b){var c;if(!(b&1)){c=AVc;if(c!==null)return c;c=new Uq;AVc=c;return c;}c=AVb;if(c!==null)return c;c=new Up;AVb=c;return c;}
var W4=F(CY);
function AD0(a,b,c,d){var e;a:{while(true){if((b+a.S.bO()|0)>d.u)break a;e=a.S.bn(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Vn=F(Er);
function AKd(a,b,c,d){var e;if((b+a.S.bO()|0)<=d.u){e=a.S.bn(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var Og=F(EV);
function AMZ(a,b,c,d){var e,f,g,h,i;e=a.iQ;f=e.d8;g=e.d3;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.S.bO()|0)>d.u)break a;i=a.S.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.S.bO()|0)>d.u){d.c0=1;return (-1);}i=a.S.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Pw=F(CY);
function ALc(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.S.bO()|0)<=d.u){e=a.S.bn(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var S_=F(Er);
function AD7(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.F.c(b,c,d);}
var P7=F(EV);
function ANd(a,b,c,d){var e,f,g,h,i,j;e=a.iQ;f=e.d8;g=e.d3;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.S.bO()|0)<=d.u){i=a.S.bn(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.S.bO()|0)>d.u){d.c0=1;return (-1);}j=a.S.bn(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JP=F(Bz);
function AJg(a,b,c,d){if(b&&!(d.eK&&b==d.cu))return (-1);return a.d.c(b,c,d);}
function AIi(a,b){return 0;}
function YK(){Bz.call(this);this.sm=0;}
function ANN(a){var b=new YK();AIE(b,a);return b;}
function AIE(a,b){BK(a);a.sm=b;}
function AEr(a,b,c,d){var e,f,g;e=b<d.u?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.ie?0:d.cu;return (e!=32&&!PC(a,e,b,g,c)?0:1)^(f!=32&&!PC(a,f,b-1|0,g,c)?0:1)^a.sm?(-1):a.d.c(b,c,d);}
function AEB(a,b){return 0;}
function PC(a,b,c,d,e){var f;if(!IW(b)&&b!=95){a:{if(Cp(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(IW(f))return 0;if(Cp(f)!=6)return 1;}}return 1;}return 0;}
var Ns=F(Bz);
function AIC(a,b,c,d){if(b!=d.g9)return (-1);return a.d.c(b,c,d);}
function APH(a,b){return 0;}
function V4(){Bz.call(this);this.fA=0;}
function ARH(a){var b=new V4();ABV(b,a);return b;}
function ABV(a,b){BK(a);a.fA=b;}
function ALT(a,b,c,d){var e,f,g;e=!d.eK?I(c):d.u;if(b>=e){BE(d,a.fA,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BE(d,a.fA,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BE(d,a.fA,0);return a.d.c(b,c,d);}
function AFr(a,b){var c;c=!Dd(b,a.fA)?0:1;BE(b,a.fA,(-1));return c;}
var VN=F(Bz);
function AKT(a,b,c,d){if(b<(d.ie?I(c):d.u))return (-1);d.c0=1;d.vS=1;return a.d.c(b,c,d);}
function AC_(a,b){return 0;}
function MG(){Bz.call(this);this.ps=null;}
function AFf(a,b,c,d){a:{if(b!=d.u){if(!b)break a;if(d.eK&&b==d.cu)break a;if(a.ps.qY(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AHg(a,b){return 0;}
var ACc=F(BN);
function AR1(){var a=new ACc();AKJ(a);return a;}
function AKJ(a){BK(a);}
function APb(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.c0=1;return (-1);}g=L(c,b);if(CC(g)){h=b+2|0;if(h<=e&&G1(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AEG(a,b){a.d=b;}
function AKE(a){return (-2147483602);}
function AEF(a,b){return 1;}
function Ya(){BN.call(this);this.kv=null;}
function ARB(a){var b=new Ya();AFp(b,a);return b;}
function AFp(a,b){BK(a);a.kv=b;}
function AKM(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.c0=1;return (-1);}g=L(c,b);if(CC(g)){b=b+2|0;if(b<=e){h=L(c,f);if(G1(g,h))return a.kv.g3(El(g,h))?(-1):a.d.c(b,c,d);}}return a.kv.g3(g)?(-1):a.d.c(f,c,d);}
function AMI(a,b){a.d=b;}
function AC8(a){return (-2147483602);}
function APm(a,b){return 1;}
function AB4(){Bz.call(this);this.gO=0;}
function AQ6(a){var b=new AB4();AHc(b,a);return b;}
function AHc(a,b){BK(a);a.gO=b;}
function AI3(a,b,c,d){var e;e=!d.eK?I(c):d.u;if(b>=e){BE(d,a.gO,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BE(d,a.gO,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AHa(a,b){var c;c=!Dd(b,a.gO)?0:1;BE(b,a.gO,(-1));return c;}
function AAl(){Bz.call(this);this.gW=0;}
function AQR(a){var b=new AAl();AHC(b,a);return b;}
function AHC(a,b){BK(a);a.gW=b;}
function AKR(a,b,c,d){if((!d.eK?I(c)-b|0:d.u-b|0)<=0){BE(d,a.gW,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BE(d,a.gW,1);return a.d.c(b+1|0,c,d);}
function AG2(a,b){var c;c=!Dd(b,a.gW)?0:1;BE(b,a.gW,(-1));return c;}
function Xd(){Bz.call(this);this.e6=0;}
function AP_(a){var b=new Xd();APN(b,a);return b;}
function APN(a,b){BK(a);a.e6=b;}
function AH8(a,b,c,d){var e,f,g;e=!d.eK?I(c)-b|0:d.u-b|0;if(!e){BE(d,a.e6,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BE(d,a.e6,0);return a.d.c(b,c,d);case 13:if(g!=10){BE(d,a.e6,0);return a.d.c(b,c,d);}BE(d,a.e6,0);return a.d.c(b,c,d);default:}return (-1);}
function AFw(a,b){var c;c=!Dd(b,a.e6)?0:1;BE(b,a.e6,(-1));return c;}
function GK(){var a=this;BN.call(a);a.mr=0;a.f_=0;}
function AR$(a,b){var c=new GK();N6(c,a,b);return c;}
function N6(a,b,c){BK(a);a.mr=b;a.f_=c;}
function AD2(a,b,c,d){var e,f,g,h;e=FX(a,d);if(e!==null&&(b+I(e)|0)<=d.u){f=0;while(true){if(f>=I(e)){BE(d,a.f_,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Hc(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AL3(a,b){a.d=b;}
function FX(a,b){var c,d;c=a.mr;d=Fq(b,c);c=HZ(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.kx)?B8(b.kx,d,c):null;}
function AMo(a,b){var c;c=!Dd(b,a.f_)?0:1;BE(b,a.f_,(-1));return c;}
var AB9=F(GK);
function AQg(a,b){var c=new AB9();AOk(c,a,b);return c;}
function AOk(a,b,c){N6(a,b,c);}
function AFB(a,b,c,d){var e,f;e=FX(a,d);if(e!==null&&(b+I(e)|0)<=d.u){f=!Tp(c,e,b)?(-1):I(e);if(f<0)return (-1);BE(d,a.f_,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AN$(a,b,c,d){var e,f;e=FX(a,d);f=d.cu;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=YJ(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ADO(a,b,c,d,e){var f,g;f=FX(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=OZ(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AJ8(a,b){return 1;}
var Zs=F(GK);
function AQS(a,b){var c=new Zs();AG_(c,a,b);return c;}
function AG_(a,b,c){N6(a,b,c);}
function AJz(a,b,c,d){var e,f;e=FX(a,d);if(e!==null&&(b+I(e)|0)<=d.u){f=0;while(true){if(f>=I(e)){BE(d,a.f_,I(e));return a.d.c(b+I(e)|0,c,d);}if(EO(Eq(L(e,f)))!=EO(Eq(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Nn=F(F6);
function AGU(a,b,c,d,e){Mk(a,b,c,d,e);return a;}
function AEw(a,b,c,d){Wb(a,b,c,d);return a;}
function AEV(a,b){I2(a,b);}
function ANC(a,b,c){Wt(a,b,c);return a;}
function QB(){var a=this;BS.call(a);a.cf=null;a.jT=null;a.kF=null;}
function AFV(a,b,c){return !JM(a,c,b)?(-1):a.bB;}
function AEm(a,b,c,d){var e,f,g;e=d.u;while(true){if(b>e)return (-1);f=L(a.cf,a.bB-1|0);a:{while(true){g=a.bB;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&JM(a,c,b))break;b=b+RJ(a.jT,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bB|0,c,d)>=0)break;b=b+1|0;}return b;}
function AHe(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.cf,0);g=(I(d)-c|0)-a.bB|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&JM(a,d,c))break;c=c-RJ(a.kF,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bB|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHJ(a,b){var c;if(b instanceof Ec)return b.cT!=L(a.cf,0)?0:1;if(b instanceof D7)return LI(b,0,B8(a.cf,0,1))<=0?0:1;if(!(b instanceof Ds)){if(!(b instanceof DJ))return 1;return I(a.cf)>1&&b.fe==El(L(a.cf,0),L(a.cf,1))?1:0;}a:{b:{b=b;if(!b.j(L(a.cf,0))){if(I(a.cf)<=1)break b;if(!b.j(El(L(a.cf,0),L(a.cf,1))))break b;}c=1;break a;}c=0;}return c;}
function JM(a,b,c){var d;d=0;while(d<a.bB){if(L(b,d+c|0)!=L(a.cf,d))return 0;d=d+1|0;}return 1;}
function Xc(){BS.call(this);this.ii=null;}
function ASb(a){var b=new Xc();ANU(b,a);return b;}
function ANU(a,b){var c,d,e;Dr(a);c=new M;O(c);d=0;while(true){e=BD(d,b.K);if(e>=0){a.ii=N(c);a.bB=c.K;return;}if(d<0)break;if(e>=0)break;BA(c,EO(Eq(b.z.data[d])));d=d+1|0;}b=new Bw;U(b);J(b);}
function AJG(a,b,c){var d;d=0;while(true){if(d>=I(a.ii))return I(a.ii);if(L(a.ii,d)!=EO(Eq(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function MA(){BS.call(this);this.gL=null;}
function AM1(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gL))return I(a.gL);e=L(a.gL,d);f=b+d|0;if(e!=L(c,f)&&Hc(L(a.gL,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var GJ=F();
var AVd=null;var AVe=null;var AU_=null;function AMz(){AMz=Br(GJ);AGf();}
function AGf(){AVd=ARQ();AVe=AQZ();AU_=H($rt_arraycls(C),[H(C,[B(363),AR_()]),H(C,[B(364),AP8()]),H(C,[B(365),ARN()]),H(C,[B(366),ARV()]),H(C,[B(367),AVe]),H(C,[B(368),AQ$()]),H(C,[B(369),AQX()]),H(C,[B(370),AQk()]),H(C,[B(371),AQf()]),H(C,[B(372),AQr()]),H(C,[B(373),AQE()]),H(C,[B(374),AQo()]),H(C,[B(375),ARt()]),H(C,[B(376),AP2()]),H(C,[B(377),ARR()]),H(C,[B(378),AQD()]),H(C,[B(379),AQ8()]),H(C,[B(380),AQB()]),H(C,[B(381),AQ9()]),H(C,[B(382),AQu()]),H(C,[B(383),AR0()]),H(C,[B(384),AQy()]),H(C,[B(385),ARc()]),
H(C,[B(386),ARL()]),H(C,[B(387),ARI()]),H(C,[B(388),ARW()]),H(C,[B(389),AQt()]),H(C,[B(390),ARz()]),H(C,[B(391),AVd]),H(C,[B(392),ARg()]),H(C,[B(393),AQl()]),H(C,[B(394),AVd]),H(C,[B(395),AP0()]),H(C,[B(396),AVe]),H(C,[B(397),AQM()]),H(C,[B(398),P(0,127)]),H(C,[B(399),P(128,255)]),H(C,[B(400),P(256,383)]),H(C,[B(401),P(384,591)]),H(C,[B(402),P(592,687)]),H(C,[B(403),P(688,767)]),H(C,[B(404),P(768,879)]),H(C,[B(405),P(880,1023)]),H(C,[B(406),P(1024,1279)]),H(C,[B(407),P(1280,1327)]),H(C,[B(408),P(1328,1423)]),
H(C,[B(409),P(1424,1535)]),H(C,[B(410),P(1536,1791)]),H(C,[B(411),P(1792,1871)]),H(C,[B(412),P(1872,1919)]),H(C,[B(413),P(1920,1983)]),H(C,[B(414),P(2304,2431)]),H(C,[B(415),P(2432,2559)]),H(C,[B(416),P(2560,2687)]),H(C,[B(417),P(2688,2815)]),H(C,[B(418),P(2816,2943)]),H(C,[B(419),P(2944,3071)]),H(C,[B(420),P(3072,3199)]),H(C,[B(421),P(3200,3327)]),H(C,[B(422),P(3328,3455)]),H(C,[B(423),P(3456,3583)]),H(C,[B(424),P(3584,3711)]),H(C,[B(425),P(3712,3839)]),H(C,[B(426),P(3840,4095)]),H(C,[B(427),P(4096,4255)]),
H(C,[B(428),P(4256,4351)]),H(C,[B(429),P(4352,4607)]),H(C,[B(430),P(4608,4991)]),H(C,[B(431),P(4992,5023)]),H(C,[B(432),P(5024,5119)]),H(C,[B(433),P(5120,5759)]),H(C,[B(434),P(5760,5791)]),H(C,[B(435),P(5792,5887)]),H(C,[B(436),P(5888,5919)]),H(C,[B(437),P(5920,5951)]),H(C,[B(438),P(5952,5983)]),H(C,[B(439),P(5984,6015)]),H(C,[B(440),P(6016,6143)]),H(C,[B(441),P(6144,6319)]),H(C,[B(442),P(6400,6479)]),H(C,[B(443),P(6480,6527)]),H(C,[B(444),P(6528,6623)]),H(C,[B(445),P(6624,6655)]),H(C,[B(446),P(6656,6687)]),
H(C,[B(447),P(7424,7551)]),H(C,[B(448),P(7552,7615)]),H(C,[B(449),P(7616,7679)]),H(C,[B(450),P(7680,7935)]),H(C,[B(451),P(7936,8191)]),H(C,[B(452),P(8192,8303)]),H(C,[B(453),P(8304,8351)]),H(C,[B(454),P(8352,8399)]),H(C,[B(455),P(8400,8447)]),H(C,[B(456),P(8448,8527)]),H(C,[B(457),P(8528,8591)]),H(C,[B(458),P(8592,8703)]),H(C,[B(459),P(8704,8959)]),H(C,[B(460),P(8960,9215)]),H(C,[B(461),P(9216,9279)]),H(C,[B(462),P(9280,9311)]),H(C,[B(463),P(9312,9471)]),H(C,[B(464),P(9472,9599)]),H(C,[B(465),P(9600,9631)]),
H(C,[B(466),P(9632,9727)]),H(C,[B(467),P(9728,9983)]),H(C,[B(468),P(9984,10175)]),H(C,[B(469),P(10176,10223)]),H(C,[B(470),P(10224,10239)]),H(C,[B(471),P(10240,10495)]),H(C,[B(472),P(10496,10623)]),H(C,[B(473),P(10624,10751)]),H(C,[B(474),P(10752,11007)]),H(C,[B(475),P(11008,11263)]),H(C,[B(476),P(11264,11359)]),H(C,[B(477),P(11392,11519)]),H(C,[B(478),P(11520,11567)]),H(C,[B(479),P(11568,11647)]),H(C,[B(480),P(11648,11743)]),H(C,[B(481),P(11776,11903)]),H(C,[B(482),P(11904,12031)]),H(C,[B(483),P(12032,12255)]),
H(C,[B(484),P(12272,12287)]),H(C,[B(485),P(12288,12351)]),H(C,[B(486),P(12352,12447)]),H(C,[B(487),P(12448,12543)]),H(C,[B(488),P(12544,12591)]),H(C,[B(489),P(12592,12687)]),H(C,[B(490),P(12688,12703)]),H(C,[B(491),P(12704,12735)]),H(C,[B(492),P(12736,12783)]),H(C,[B(493),P(12784,12799)]),H(C,[B(494),P(12800,13055)]),H(C,[B(495),P(13056,13311)]),H(C,[B(496),P(13312,19893)]),H(C,[B(497),P(19904,19967)]),H(C,[B(498),P(19968,40959)]),H(C,[B(499),P(40960,42127)]),H(C,[B(500),P(42128,42191)]),H(C,[B(501),P(42752,
42783)]),H(C,[B(502),P(43008,43055)]),H(C,[B(503),P(44032,55203)]),H(C,[B(504),P(55296,56191)]),H(C,[B(505),P(56192,56319)]),H(C,[B(506),P(56320,57343)]),H(C,[B(507),P(57344,63743)]),H(C,[B(508),P(63744,64255)]),H(C,[B(509),P(64256,64335)]),H(C,[B(510),P(64336,65023)]),H(C,[B(511),P(65024,65039)]),H(C,[B(512),P(65040,65055)]),H(C,[B(513),P(65056,65071)]),H(C,[B(514),P(65072,65103)]),H(C,[B(515),P(65104,65135)]),H(C,[B(516),P(65136,65279)]),H(C,[B(517),P(65280,65519)]),H(C,[B(518),P(0,1114111)]),H(C,[B(519),
AQp()]),H(C,[B(520),BJ(0,1)]),H(C,[B(521),Ie(62,1)]),H(C,[B(522),BJ(1,1)]),H(C,[B(523),BJ(2,1)]),H(C,[B(524),BJ(3,0)]),H(C,[B(525),BJ(4,0)]),H(C,[B(526),BJ(5,1)]),H(C,[B(527),Ie(448,1)]),H(C,[B(528),BJ(6,1)]),H(C,[B(529),BJ(7,0)]),H(C,[B(530),BJ(8,1)]),H(C,[B(531),Ie(3584,1)]),H(C,[B(532),BJ(9,1)]),H(C,[B(533),BJ(10,1)]),H(C,[B(534),BJ(11,1)]),H(C,[B(535),Ie(28672,0)]),H(C,[B(536),BJ(12,0)]),H(C,[B(537),BJ(13,0)]),H(C,[B(538),BJ(14,0)]),H(C,[B(539),AQT(983040,1,1)]),H(C,[B(540),BJ(15,0)]),H(C,[B(541),BJ(16,
1)]),H(C,[B(542),BJ(18,1)]),H(C,[B(543),AQ5(19,0,1)]),H(C,[B(544),Ie(1643118592,1)]),H(C,[B(545),BJ(20,0)]),H(C,[B(546),BJ(21,0)]),H(C,[B(547),BJ(22,0)]),H(C,[B(548),BJ(23,0)]),H(C,[B(549),BJ(24,1)]),H(C,[B(550),Ie(2113929216,1)]),H(C,[B(551),BJ(25,1)]),H(C,[B(552),BJ(26,0)]),H(C,[B(553),BJ(27,0)]),H(C,[B(554),BJ(28,1)]),H(C,[B(555),BJ(29,0)]),H(C,[B(556),BJ(30,0)])]);}
function LR(){BS.call(this);this.o3=0;}
function AM8(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.o3!=Gl(Gk(El(e,d)))?(-1):2;}
function Kn(){BN.call(this);this.fN=0;}
function AKI(a){var b=new Kn();AEP(b,a);return b;}
function AEP(a,b){BK(a);a.fN=b;}
function AK8(a,b){a.d=b;}
function AFs(a,b,c,d){var e,f;e=b+1|0;if(e>d.u){d.c0=1;return (-1);}f=L(c,b);if(b>d.cu&&CC(L(c,b-1|0)))return (-1);if(a.fN!=f)return (-1);return a.d.c(e,c,d);}
function AHF(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.cu;f=d.u;while(true){if(b>=f)return (-1);g=Gp(c,a.fN,b);if(g<0)return (-1);if(g>e&&CC(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AF2(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hr(a,b,c,d,e);f=e.cu;a:{while(true){if(c<b)return (-1);g=FP(d,a.fN,c);if(g<0)break a;if(g<b)break a;if(g>f&&CC(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ADM(a,b){if(b instanceof Ec)return 0;if(b instanceof D7)return 0;if(b instanceof Ds)return 0;if(b instanceof DJ)return 0;if(b instanceof KH)return 0;if(!(b instanceof Kn))return 1;return b.fN!=a.fN?0:1;}
function ANI(a,b){return 1;}
function KH(){BN.call(this);this.fo=0;}
function AIa(a){var b=new KH();AKO(b,a);return b;}
function AKO(a,b){BK(a);a.fo=b;}
function AEU(a,b){a.d=b;}
function ADq(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;g=BD(f,e);if(g>0){d.c0=1;return (-1);}h=L(c,b);if(g<0&&CZ(L(c,f)))return (-1);if(a.fo!=h)return (-1);return a.d.c(f,c,d);}
function ALt(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=Gp(c,a.fo,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CZ(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AM0(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hr(a,b,c,d,e);f=e.u;a:{while(true){if(c<b)return (-1);g=FP(d,a.fo,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CZ(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFW(a,b){if(b instanceof Ec)return 0;if(b instanceof D7)return 0;if(b instanceof Ds)return 0;if(b instanceof DJ)return 0;if(b instanceof Kn)return 0;if(!(b instanceof KH))return 1;return b.fo!=a.fo?0:1;}
function ALD(a,b){return 1;}
function DJ(){var a=this;BS.call(a);a.i4=0;a.hJ=0;a.fe=0;}
function AMq(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.i4==e&&a.hJ==d?2:(-1);}
function AKs(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hh(a,b,c,d);e=d.u;while(b<e){b=Gp(c,a.i4,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hJ==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AER(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hr(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FP(d,a.hJ,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.i4==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AMc(a,b){if(b instanceof DJ)return b.fe!=a.fe?0:1;if(b instanceof Ds)return b.j(a.fe);if(b instanceof Ec)return 0;if(!(b instanceof D7))return 1;return 0;}
var Up=F(ED);
function AE7(a,b){return b!=10?0:1;}
function AMh(a,b,c){return b!=10?0:1;}
var Uq=F(ED);
function ANg(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AOU(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AA$(){var a=this;C.call(a);a.lK=null;a.jl=null;a.go=0;a.tj=0;}
function AKC(a){var b=new AA$();AIA(b,a);return b;}
function AIA(a,b){var c,d;while(true){c=a.go;if(b<c)break;a.go=c<<1|1;}d=c<<1|1;a.go=d;d=d+1|0;a.lK=BH(d);a.jl=BH(d);a.tj=b;}
function P$(a,b,c){var d,e,f,g;d=0;e=a.go;f=b&e;while(true){g=a.lK.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jl.data[f]=c;}
function RJ(a,b){var c,d,e,f;c=a.go;d=b&c;e=0;while(true){f=a.lK.data[d];if(!f)break;if(f==b)return a.jl.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.tj;}
var Xu=F();
var Kk=F(V);
function ARQ(){var a=new Kk();AH3(a);return a;}
function AH3(a){}
function ZA(a){return Cs(BO(De(),9,13),32);}
var Jl=F(V);
function AQZ(){var a=new Jl();ANF(a);return a;}
function ANF(a){}
function AAe(a){return BO(De(),48,57);}
var AA4=F(V);
function AR_(){var a=new AA4();AHp(a);return a;}
function AHp(a){}
function AML(a){return BO(De(),97,122);}
var ABx=F(V);
function AP8(){var a=new ABx();AIG(a);return a;}
function AIG(a){}
function ANL(a){return BO(De(),65,90);}
var ABB=F(V);
function ARN(){var a=new ABB();AEo(a);return a;}
function AEo(a){}
function AGA(a){return BO(De(),0,127);}
var Kg=F(V);
function ARV(){var a=new Kg();AFD(a);return a;}
function AFD(a){}
function Ye(a){return BO(BO(De(),97,122),65,90);}
var KQ=F(Kg);
function AQ$(){var a=new KQ();AIh(a);return a;}
function AIh(a){}
function Y9(a){return BO(Ye(a),48,57);}
var ACV=F(V);
function AQX(){var a=new ACV();AKg(a);return a;}
function AKg(a){}
function AHD(a){return BO(BO(BO(De(),33,64),91,96),123,126);}
var LH=F(KQ);
function AQk(){var a=new LH();ALY(a);return a;}
function ALY(a){}
function W$(a){return BO(BO(BO(Y9(a),33,64),91,96),123,126);}
var ZN=F(LH);
function AQf(){var a=new ZN();ANv(a);return a;}
function ANv(a){}
function AJ2(a){return Cs(W$(a),32);}
var Z_=F(V);
function AQr(){var a=new Z_();AM2(a);return a;}
function AM2(a){}
function AFP(a){return Cs(Cs(De(),32),9);}
var YD=F(V);
function AQE(){var a=new YD();AOG(a);return a;}
function AOG(a){}
function AJY(a){return Cs(BO(De(),0,31),127);}
var Ym=F(V);
function AQo(){var a=new Ym();AEA(a);return a;}
function AEA(a){}
function AOX(a){return BO(BO(BO(De(),48,57),97,102),65,70);}
var ABE=F(V);
function ARt(){var a=new ABE();AEf(a);return a;}
function AEf(a){}
function AKA(a){var b;b=new RY;b.u9=a;Bq(b);b.H=1;return b;}
var AC7=F(V);
function AP2(){var a=new AC7();AMf(a);return a;}
function AMf(a){}
function ADi(a){var b;b=new L6;b.vg=a;Bq(b);b.H=1;return b;}
var AA_=F(V);
function ARR(){var a=new AA_();AEp(a);return a;}
function AEp(a){}
function AIb(a){var b;b=new QW;b.uQ=a;Bq(b);return b;}
var AA0=F(V);
function AQD(){var a=new AA0();AJZ(a);return a;}
function AJZ(a){}
function AMt(a){var b;b=new QV;b.uy=a;Bq(b);return b;}
var ABY=F(V);
function AQ8(){var a=new ABY();AFA(a);return a;}
function AFA(a){}
function AFL(a){var b;b=new VV;b.vY=a;Bq(b);Hw(b.G,0,2048);b.H=1;return b;}
var XM=F(V);
function AQB(){var a=new XM();AE1(a);return a;}
function AE1(a){}
function AF_(a){var b;b=new N_;b.vr=a;Bq(b);b.H=1;return b;}
var Xr=F(V);
function AQ9(){var a=new Xr();AJD(a);return a;}
function AJD(a){}
function AOP(a){var b;b=new Ni;b.wn=a;Bq(b);b.H=1;return b;}
var ABf=F(V);
function AQu(){var a=new ABf();AKh(a);return a;}
function AKh(a){}
function ADc(a){var b;b=new PL;b.u_=a;Bq(b);return b;}
var ABp=F(V);
function AR0(){var a=new ABp();AHU(a);return a;}
function AHU(a){}
function AI7(a){var b;b=new LZ;b.tK=a;Bq(b);b.H=1;return b;}
var Y0=F(V);
function AQy(){var a=new Y0();ADP(a);return a;}
function ADP(a){}
function AGj(a){var b;b=new L4;b.vy=a;Bq(b);b.H=1;return b;}
var AAc=F(V);
function ARc(){var a=new AAc();AE$(a);return a;}
function AE$(a){}
function AHi(a){var b;b=new M5;b.vV=a;Bq(b);b.H=1;return b;}
var ACw=F(V);
function ARL(){var a=new ACw();AJa(a);return a;}
function AJa(a){}
function AI9(a){var b;b=new OB;b.wa=a;Bq(b);b.H=1;return b;}
var ABo=F(V);
function ARI(){var a=new ABo();AKx(a);return a;}
function AKx(a){}
function AN3(a){var b;b=new OK;b.uS=a;Bq(b);return b;}
var Zp=F(V);
function ARW(){var a=new Zp();AE3(a);return a;}
function AE3(a){}
function ALN(a){var b;b=new SO;b.vE=a;Bq(b);return b;}
var YY=F(V);
function AQt(){var a=new YY();AMu(a);return a;}
function AMu(a){}
function AKv(a){var b;b=new Rw;b.tO=a;Bq(b);b.H=1;return b;}
var AC2=F(V);
function ARz(){var a=new AC2();AHM(a);return a;}
function AHM(a){}
function AME(a){var b;b=new Mg;b.wA=a;Bq(b);b.H=1;return b;}
var IN=F(V);
function ARg(){var a=new IN();AGr(a);return a;}
function AGr(a){}
function AAa(a){return Cs(BO(BO(BO(De(),97,122),65,90),48,57),95);}
var AB0=F(IN);
function AQl(){var a=new AB0();AHY(a);return a;}
function AHY(a){}
function AKj(a){var b;b=Ek(AAa(a),1);b.H=1;return b;}
var ZT=F(Kk);
function AP0(){var a=new ZT();AOv(a);return a;}
function AOv(a){}
function AEl(a){var b;b=Ek(ZA(a),1);b.H=1;return b;}
var YS=F(Jl);
function AQM(){var a=new YS();AIW(a);return a;}
function AIW(a){}
function AHu(a){var b;b=Ek(AAe(a),1);b.H=1;return b;}
function Ys(){var a=this;V.call(a);a.oU=0;a.po=0;}
function P(a,b){var c=new Ys();AON(c,a,b);return c;}
function AON(a,b,c){a.oU=b;a.po=c;}
function AJl(a){return BO(De(),a.oU,a.po);}
var YN=F(V);
function AQp(){var a=new YN();AO4(a);return a;}
function AO4(a){}
function AOD(a){return BO(BO(De(),65279,65279),65520,65533);}
function ZH(){var a=this;V.call(a);a.li=0;a.jb=0;a.nr=0;}
function BJ(a,b){var c=new ZH();AFv(c,a,b);return c;}
function AQ5(a,b,c){var d=new ZH();AOO(d,a,b,c);return d;}
function AFv(a,b,c){a.jb=c;a.li=b;}
function AOO(a,b,c,d){a.nr=d;a.jb=c;a.li=b;}
function AGY(a){var b;b=AR7(a.li);if(a.nr)Hw(b.G,0,2048);b.H=a.jb;return b;}
function ZP(){var a=this;V.call(a);a.lh=0;a.jn=0;a.mw=0;}
function Ie(a,b){var c=new ZP();AGk(c,a,b);return c;}
function AQT(a,b,c){var d=new ZP();ADf(d,a,b,c);return d;}
function AGk(a,b,c){a.jn=c;a.lh=b;}
function ADf(a,b,c,d){a.mw=d;a.jn=c;a.lh=b;}
function ADd(a){var b;b=new QO;AAN(b,a.lh);if(a.mw)Hw(b.G,0,2048);b.H=a.jn;return b;}
var Yx=F();
var X4=F();
function Zo(b){var c,d,e,f,g,h,i;c=AMP(Gg(b));d=I_(c);e=BH(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+I_(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Ms(c);h=h+1|0;}return e;}
function J4(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function MH(){var a=this;C.call(a);a.nU=0;a.pO=0;a.n9=null;}
function AGW(a,b,c){var d=new MH();ANu(d,a,b,c);return d;}
function ANu(a,b,c,d){a.nU=b;a.pO=c;a.n9=d;}
function ABk(){var a=this;C.call(a);a.m4=null;a.o1=0;}
function AMP(a){var b=new ABk();AFZ(b,a);return b;}
function AFZ(a,b){a.m4=b;}
var Zn=F();
function I_(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.m4.data;f=b.o1;b.o1=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Ms(b){var c,d;c=I_(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Yc(){C.call(this);this.Fx=null;}
function Mw(){C.call(this);this.oY=null;}
function AKq(a,b){var c,d,e,f;c=b.data;b=a.oY;d=En(c[0]);e=Fy(c[1]);Z3(b.e.g,d,e);Gf(Cg(b),AT$);FS(Cg(b));f=JR(Fu(),b.ep);b=new M;O(b);G(Ht(G(b,B(557)),f),B(226));$rt_globals.console.info($rt_ustr(N(b)));}
function Qb(){C.call(this);this.pm=null;}
function AGV(a,b){QR(a.pm,b);}
function UA(){var a=this;C.call(a);a.u5=null;a.u4=null;}
function V5(){var a=this;C.call(a);a.tY=null;a.tZ=null;}
var ABb=F(0);
function ACK(b){return !b?H(Bv,[B(124),B(125),B(558)]):H(Bv,[B(124),B(125),B(558),B(41)]);}
function Vq(){var a=this;T.call(a);a.mT=null;a.v4=null;}
function AGG(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b5^Dn(a.mT,c):0;}
function Vo(){var a=this;T.call(a);a.rN=null;a.sA=null;a.vJ=null;}
function ADE(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b5^Dn(a.rN,c):0;return a.sA.j(b)&&!d?1:0;}
function NC(){var a=this;T.call(a);a.hK=null;a.tT=null;}
function AJb(a,b){return a.Y^Dn(a.hK,b);}
function AHm(a){var b,c,d;b=new M;O(b);c=GS(a.hK,0);while(c>=0){HT(b,Gd(c));BA(b,124);c=GS(a.hK,c+1|0);}d=b.K;if(d>0)Vf(b,d-1|0);return N(b);}
function NI(){var a=this;T.call(a);a.pe=null;a.ve=null;}
function AMs(a,b){return a.pe.j(b);}
function NG(){var a=this;T.call(a);a.jg=0;a.nm=null;a.j7=null;}
function AM7(a,b){return !(a.jg^Dn(a.j7.D,b))&&!(a.jg^a.j7.dn^a.nm.j(b))?0:1;}
function NH(){var a=this;T.call(a);a.jm=0;a.sd=null;a.kT=null;}
function AJF(a,b){return !(a.jm^Dn(a.kT.D,b))&&!(a.jm^a.kT.dn^a.sd.j(b))?1:0;}
function NL(){var a=this;T.call(a);a.sX=0;a.sl=null;a.r9=null;a.ue=null;}
function AGe(a,b){return a.sX^(!a.sl.j(b)&&!a.r9.j(b)?0:1);}
function NM(){var a=this;T.call(a);a.pl=0;a.o7=null;a.os=null;a.wt=null;}
function AC9(a,b){return a.pl^(!a.o7.j(b)&&!a.os.j(b)?0:1)?0:1;}
function NJ(){var a=this;T.call(a);a.oe=null;a.wz=null;}
function AHq(a,b){return CW(a.oe,b);}
function NK(){var a=this;T.call(a);a.su=null;a.uv=null;}
function AJI(a,b){return CW(a.su,b)?0:1;}
function NN(){var a=this;T.call(a);a.pH=null;a.o_=0;a.rp=null;}
function AOd(a,b){return !CW(a.pH,b)&&!(a.o_^Dn(a.rp.D,b))?0:1;}
function NO(){var a=this;T.call(a);a.qp=null;a.qG=0;a.p8=null;}
function AFG(a,b){return !CW(a.qp,b)&&!(a.qG^Dn(a.p8.D,b))?1:0;}
function NB(){var a=this;T.call(a);a.rn=0;a.sb=null;a.sJ=null;a.tX=null;}
function APZ(a,b){return !(a.rn^a.sb.j(b))&&!CW(a.sJ,b)?0:1;}
function Oo(){var a=this;T.call(a);a.sG=0;a.mf=null;a.mx=null;a.uq=null;}
function AHt(a,b){return !(a.sG^a.mf.j(b))&&!CW(a.mx,b)?1:0;}
function Ny(){var a=this;T.call(a);a.nM=null;a.uw=null;}
function AFE(a,b){return CW(a.nM,b);}
function Nz(){var a=this;T.call(a);a.nS=null;a.wq=null;}
function AG$(a,b){return CW(a.nS,b)?0:1;}
function NF(){var a=this;T.call(a);a.sR=null;a.qi=0;a.tB=null;}
function AIF(a,b){return CW(a.sR,b)&&a.qi^Dn(a.tB.D,b)?1:0;}
function Nx(){var a=this;T.call(a);a.q4=null;a.pn=0;a.qh=null;}
function ANR(a,b){return CW(a.q4,b)&&a.pn^Dn(a.qh.D,b)?0:1;}
function ND(){var a=this;T.call(a);a.rr=0;a.mR=null;a.ph=null;a.ud=null;}
function AEz(a,b){return a.rr^a.mR.j(b)&&CW(a.ph,b)?1:0;}
function NE(){var a=this;T.call(a);a.qW=0;a.l7=null;a.rm=null;a.uB=null;}
function ALC(a,b){return a.qW^a.l7.j(b)&&CW(a.rm,b)?0:1;}
var Lc=F(0);
function Ru(){var a=this;C.call(a);a.um=null;a.se=null;a.h6=null;a.ci=null;a.hL=0;a.j0=0;}
function L2(a,b){var c,d,e;c=I(a.h6);if(b>=0&&b<=c){WF(a.ci,null,(-1),(-1));d=a.ci;d.iR=1;d.dN=b;c=d.g9;if(c<0)c=b;d.g9=c;b=a.se.b9(b,a.h6,d);if(b==(-1))a.ci.c0=1;if(b>=0){d=a.ci;if(d.h9){e=d.dj.data;if(e[0]==(-1)){c=d.dN;e[0]=c;e[1]=c;}d.g9=Ix(d);return 1;}}a.ci.dN=(-1);return 0;}d=new Bw;Bl(d,C0(b));J(d);}
function ACu(a){return Oe(a.ci,0);}
function YT(a){return Q0(a.ci,0);}
function XA(a){return a.ci.ie;}
function Cd(){Cr.call(this);this.ld=null;}
var AVf=null;var AVg=null;var AVh=null;var AVi=null;var AVj=null;var AVk=null;var AVl=null;var AVm=null;var AVn=null;var AVo=null;var AVp=null;var AVq=null;var AVr=null;var AVs=null;var AVt=null;var ATX=null;function ABM(){ABM=Br(Cd);AMp();}
function Dx(a,b,c){var d=new Cd();Od(d,a,b,c);return d;}
function AHT(a,b,c,d){var e=new Cd();X0(e,a,b,c,d);return e;}
function Od(a,b,c,d){ABM();DE(a,b,c);a.ld=Sw(d,null);}
function X0(a,b,c,d,e){ABM();DE(a,b,c);a.ld=Sw(d,e);}
function AMp(){var b;b=new Cd;Dp();Od(b,B(309),0,ATY);AVf=b;AVg=Dx(B(310),1,Cw(0,49,191));AVh=Dx(B(311),2,Bm(B(559)));AVi=Dx(B(48),3,Bm(B(560)));AVj=Dx(B(314),4,ATY);AVk=Dx(B(316),5,Bm(B(561)));AVl=Dx(B(317),6,Bm(B(327)));AVm=Dx(B(49),7,Bm(B(562)));AVn=Dx(B(320),8,Bm(B(563)));AVo=AHT(B(322),9,ATH,Cw(237,235,252));AVp=AHT(B(323),10,Bm(B(324)),Bm(B(564)));AVq=Dx(B(326),11,Bm(B(327)));AVr=Dx(B(328),12,Bm(B(329)));AVs=Dx(B(330),13,Bm(B(331)));b=Dx(B(332),14,Bm(B(333)));AVt=b;ATX=H(Cd,[AVf,AVg,AVh,AVi,AVj,AVk,AVl,
AVm,AVn,AVo,AVp,AVq,AVr,AVs,b]);}
function Np(){C.call(this);this.p3=null;}
function AMD(a,b){TB(a.p3,b);}
var Mn=F(Gh);
function AG0(a,b,c,d){var e,f,g;e=0;f=d.u;a:{while(true){if(b>f){b=e;break a;}g=Fq(d,a.R);Dq(d,a.R,b);e=a.cC.c(b,c,d);if(e>=0)break;Dq(d,a.R,g);b=b+1|0;}}return b;}
function APJ(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fq(e,a.R);Dq(e,a.R,c);f=a.cC.c(c,d,e);if(f>=0)break;Dq(e,a.R,g);c=c+(-1)|0;}}return c;}
function AFq(a){return null;}
var Pk=F(Bn);
var Wd=F(Bn);
function Uk(){FC.call(this);this.wi=0;}
function O$(){FC.call(this);this.we=0;}
var WV=F(Bn);
function Ue(){var a=this;C.call(a);a.pM=null;a.rO=null;a.s$=0;a.jy=0;}
function JT(a,b){return B4(a.pM)<b?0:1;}
function N7(){var a=this;C.call(a);a.ni=null;a.nj=null;}
function RF(){var a=this;C.call(a);a.uR=null;a.oa=null;}
function RE(){C.call(this);this.tL=null;}
function Ui(){var a=this;C.call(a);a.dj=null;a.i1=null;a.kr=null;a.kx=null;a.no=0;a.h9=0;a.cu=0;a.u=0;a.dN=0;a.ie=0;a.eK=0;a.c0=0;a.vS=0;a.g9=0;a.iR=0;}
function BE(a,b,c){a.i1.data[b]=c;}
function Dd(a,b){return a.i1.data[b];}
function Ix(a){return Q0(a,0);}
function Q0(a,b){QN(a,b);return a.dj.data[(b*2|0)+1|0];}
function Dq(a,b,c){a.dj.data[b*2|0]=c;}
function I3(a,b,c){a.dj.data[(b*2|0)+1|0]=c;}
function Fq(a,b){return a.dj.data[b*2|0];}
function HZ(a,b){return a.dj.data[(b*2|0)+1|0];}
function AA5(a){return Oe(a,0);}
function Oe(a,b){QN(a,b);return a.dj.data[b*2|0];}
function Md(a,b){return a.kr.data[b];}
function D3(a,b,c){a.kr.data[b]=c;}
function QN(a,b){var c;if(!a.h9){c=new DP;U(c);J(c);}if(b>=0&&b<a.no)return;c=new Bw;Bl(c,C0(b));J(c);}
function WF(a,b,c,d){a.h9=0;a.iR=2;G_(a.dj,(-1));G_(a.i1,(-1));if(b!==null)a.kx=b;if(c>=0){a.cu=c;a.u=d;}a.dN=a.cu;}
function Zc(a){return a.iR;}
function UN(){C.call(this);this.na=null;}
function AOp(a){DB(a.na);}
var YP=F();
var O3=F(0);
function Wf(){var a=this;C.call(a);a.qr=null;a.qs=0;a.qt=null;}
function Ls(a,b){var c,d,e,f,g,h,i,j,k;c=a.qr;d=a.qs;e=a.qt;if(b<=d){f=Cg(c);g=new Ut;g.m3=c;h=R(C,1);h.data[0]=e;C1(f,g,B(565),h);}else{i=Cg(c);g=new Uv;g.oJ=c;j=R(C,2);k=j.data;k[0]=e;h=BH(1);h.data[0]=250;k[1]=h;C1(i,g,B(566),j);f=Cg(c);g=new Us;g.pZ=c;h=R(C,1);h.data[0]=e;C1(f,g,B(567),h);}}
function RY(){T.call(this);this.u9=null;}
function AOm(a,b){return Cp(b)!=2?0:1;}
function L6(){T.call(this);this.vg=null;}
function AEj(a,b){return Cp(b)!=1?0:1;}
function QW(){T.call(this);this.uQ=null;}
function AD6(a,b){return P4(b);}
function QV(){T.call(this);this.uy=null;}
function AGX(a,b){return 0;}
function VV(){T.call(this);this.vY=null;}
function AIq(a,b){return !Cp(b)?0:1;}
function N_(){T.call(this);this.vr=null;}
function AOq(a,b){return Cp(b)!=9?0:1;}
function Ni(){T.call(this);this.wn=null;}
function AK2(a,b){return F_(b);}
function PL(){T.call(this);this.u_=null;}
function AMy(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function LZ(){T.call(this);this.tK=null;}
function APk(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function L4(){T.call(this);this.vy=null;}
function AF1(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function M5(){T.call(this);this.vV=null;}
function AOB(a,b){a:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function OB(){T.call(this);this.wa=null;}
function AJU(a,b){return IW(b);}
function OK(){T.call(this);this.uS=null;}
function AL1(a,b){return OL(b);}
function SO(){T.call(this);this.vE=null;}
function AOe(a,b){return Cp(b)!=3?0:1;}
function Rw(){T.call(this);this.tO=null;}
function AO5(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function Mg(){T.call(this);this.wA=null;}
function AFN(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=F_(b);}return b;}
function Lu(){T.call(this);this.kK=0;}
function AR7(a){var b=new Lu();AAN(b,a);return b;}
function AAN(a,b){Bq(a);a.kK=b;}
function AK5(a,b){return a.Y^(a.kK!=Cp(b&65535)?0:1);}
var QO=F(Lu);
function ANr(a,b){return a.Y^(!(a.kK>>Cp(b&65535)&1)?0:1);}
function O4(){C.call(this);this.tE=null;}
function AJt(a){var b,c;b=a.tE;c=b.ni;b=b.nj;c.DG(b.hI,b.jF,null);}
function UV(){C.call(this);this.mW=null;}
function ALS(a,b){var c,d,e,f;c=a.mW;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.oa;c=By();b=Ct(b);e=new M;O(e);G(G(e,B(568)),b);Bu(c,N(e));b=By();f=d.length;c=new M;O(c);S(G(c,B(569)),f);Bu(b,N(c));}
function UY(){var a=this;C.call(a);a.rH=null;a.rI=null;}
function AKF(a,b){var c,d;c=a.rH;d=a.rI;b.arrayBuffer().then(Bk(c,"f"),Bk(d,"f"));}
function SA(){var a=this;C.call(a);a.lO=null;a.lP=null;}
function AHz(a,b){var c;c=a.lO;Ls(a.lP,I4(c,b.size));}
function SD(){C.call(this);this.sS=null;}
function ADy(a,b){var c;c=a.sS;Bu(K1(),$rt_str(b.message));Ls(c,0);}
function TF(){C.call(this);this.uH=null;}
function AJn(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Uv(){C.call(this);this.oJ=null;}
function ALz(a,b){var c,d;c=a.oJ;if(!c.hq){b=b.data;c.e.g=AAn(En(b[0]),Fy(b[1]));c.hp=1;d=JR(Fu(),c.ep);b=new M;O(b);G(Ht(G(b,B(570)),d),B(226));$rt_globals.console.info($rt_ustr(N(b)));}}
function Us(){C.call(this);this.pZ=null;}
function AJr(a,b){var c,d,e,f,g,h;c=b.data;d=a.pZ;e=(En(c[2])).data[0];if(e!=1)Hk(d,b);else{d.hq=1;f=En(c[0]);g=Fy(c[1]);b=d.e;b.g=ABc(b.g,f,g,d.hp);Vj(d,ABU(e));Gf(Cg(d),AT$);FS(Cg(d));h=JR(Fu(),d.ep);b=new M;O(b);G(Ht(G(b,B(571)),h),B(226));$rt_globals.console.info($rt_ustr(N(b)));VM(d);Jv(d);}}
function Ut(){C.call(this);this.m3=null;}
function ALB(a,b){Hk(a.m3,b);}
var XU=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["dA",ASs(AJP),"cj",ASr(AEO)],QC,0,C,[],0,3,0,0,0,Mq,0,C,[],3,3,0,0,0,LT,0,C,[],3,3,0,0,0,Vs,0,C,[Mq,LT],0,3,0,0,0,Yj,0,C,[],4,0,0,0,0,X5,0,C,[],4,3,0,0,0,Gi,0,C,[],0,3,0,0,0,DS,0,Gi,[],0,3,0,0,0,Bn,0,DS,[],0,3,0,0,0,ZQ,0,Bn,[],0,3,0,0,0,C_,0,C,[],3,3,0,0,0,CI,0,C,[],3,3,0,0,0,Ij,0,C,[],3,3,0,0,0,Bv,"String",1,C,[C_,CI,Ij],0,3,0,EE,["cj",ASr(AEN),"dA",ASs(Bo),"i$",ASs(AGZ)],Ez,0,Gi,[],0,3,0,0,0,GU,0,Ez,[],0,3,0,0,0,Zr,0,GU,[],0,3,0,0,0,DL,0,C,[C_],1,3,0,0,0,E7,0,DL,[CI],0,3,0,
0,["i$",ASs(AI5)],F6,0,C,[C_,Ij],0,0,0,0,["hh",ASs(I2),"cj",ASr(N)],Hv,0,C,[],3,3,0,0,0,M,0,F6,[Hv],0,3,0,0,["kZ",ASv(AI0),"kc",ASu(AF9),"cj",ASr(DI),"hh",ASs(AI8),"lu",ASt(AJB)],Ei,0,GU,[],0,3,0,0,0,AAP,0,Ei,[],0,3,0,0,0,Zh,0,Ei,[],0,3,0,0,0,SL,0,C,[],3,3,0,0,0,Dk,0,C,[],3,3,0,0,0,N9,0,C,[],3,0,0,0,0,H4,0,C,[SL,Dk,N9],1,3,0,0,["dZ",ASr(FE)],Qp,0,H4,[],0,3,0,0,0,Xy,0,C,[],0,3,0,0,0,AB2,0,C,[],4,3,0,0,0,Bc,0,C,[],3,3,0,0,0,SU,0,C,[Bc],0,3,0,0,0,Bt,0,C,[],3,3,0,0,0,Z5,0,C,[Bt],1,3,0,0,0,XD,0,C,[],3,3,0,0,0,ABA,
0,C,[],3,3,0,0,0,ABv,0,C,[],3,3,0,0,0,K7,0,C,[],0,3,0,0,0,Yg,0,C,[Bt],1,3,0,0,0,BU,0,C,[Bt],3,3,0,0,0,SV,0,C,[BU],0,3,0,0,["be",ASs(AC$)],ST,0,C,[BU],0,3,0,0,["be",ASs(AOf)],KL,0,C,[],4,3,0,0,0,ABr,0,C,[],4,3,0,0,0,YV,0,C,[],0,3,0,0,0,AC3,0,C,[],4,3,0,0,0,Mx,0,C,[BU],0,3,0,0,["be",ASs(AKQ)]]);
$rt_metadata([ABR,0,C,[Bt],1,3,0,0,0,XO,0,C,[],0,3,0,0,0,Jb,0,C,[Bt],3,3,0,0,0,Y_,0,C,[Jb],1,3,0,0,["EM",ASs(APr),"D8",ASr(AE8)],ZD,0,C,[Bt],1,3,0,0,0,FD,0,C,[],3,3,0,0,0,RW,0,C,[FD],0,3,0,0,0,Bw,0,Bn,[],0,3,0,0,0,AAv,0,C,[],4,3,0,0,0,Gm,0,Bn,[],0,3,0,0,0,Ib,0,Bn,[],0,3,0,0,0,C2,0,C,[CI],0,3,0,0,0,LM,0,C,[Bt],3,3,0,0,0,RB,0,C,[LM],3,3,0,0,0,D$,0,C,[Bt],3,3,0,0,0,AB1,0,C,[RB,D$],3,3,0,0,0,M6,0,C,[BU],0,3,0,0,["be",ASs(ALU)],ZB,0,C,[],4,3,0,0,0,Oz,0,C,[D$],3,3,0,0,0,Qf,0,C,[D$],3,3,0,0,0,P8,0,C,[D$],3,3,0,0,0,SG,
0,C,[D$],3,3,0,0,0,Wc,0,C,[D$],3,3,0,0,0,TV,0,C,[D$,Oz,Qf,P8,SG,Wc],3,3,0,0,0,NQ,0,C,[],3,3,0,0,0,XC,0,C,[Bt,TV,NQ,Jb],1,3,0,0,["CQ",ASt(AJx),"ET",ASt(AJR),"wR",ASs(AD_),"Bq",ASu(AKV),"zw",ASs(AOy),"zC",ASr(AE_),"x7",ASu(ADu)],BC,0,Bn,[],0,3,0,0,0,W1,0,Bn,[],0,3,0,0,0,GR,0,Bw,[],0,3,0,0,0,YG,0,C,[],0,3,0,0,0,DV,0,C,[],4,3,0,JV,["dA",ASs(AOl)],NP,0,C,[],3,3,0,0,0,RM,0,C,[NP],0,3,0,0,0,Ci,0,C,[],3,3,0,0,0,QP,0,C,[Ci],0,3,0,0,0,Bi,0,C,[],3,3,0,0,0,Z0,0,C,[Bi],0,3,0,0,0,Zb,0,C,[Bt],1,3,0,0,0,Zy,0,C,[Bt],1,3,0,0,
0,Qa,0,C,[Bt],3,3,0,0,0,UP,0,C,[Qa],0,3,0,0,["Bt",ASs(AH_)],UI,0,C,[Bi],0,3,0,0,0,Pj,0,C,[Bt],3,3,0,0,0,UJ,0,C,[Pj],0,3,0,0,["s5",ASt(AGq)],AB8,0,C,[Bt],1,3,0,0,0,Ch,0,C,[Bt],3,3,0,0,0,UG,0,C,[Ch],0,3,0,0,["b4",ASs(AL2)],Kq,0,C,[],3,3,0,0,0,Eu,0,C,[Kq],1,3,0,0,0,Ed,0,C,[],3,3,0,0,0]);
$rt_metadata([WB,0,C,[Kq],3,3,0,0,0,Mp,0,C,[WB],3,3,0,0,0,Oj,0,Eu,[Ed,C_,Mp],0,3,0,0,0,UH,0,C,[BU],0,3,0,0,["be",ASs(ANc)],ACs,0,C,[Bt],1,3,0,0,0,ACY,0,C,[Bt],1,3,0,0,0,Jg,0,C,[Bt],3,3,0,0,0,V6,0,C,[Jg],0,3,0,0,["th",ASs(AMk)],Zq,0,C,[Bt],1,3,0,0,0,V7,0,C,[Jg],0,3,0,0,["th",ASs(AKa)],OJ,0,C,[],0,3,0,0,0,KE,0,C,[],1,3,0,0,0,ABz,0,KE,[],0,3,0,0,0,Cq,0,C,[Dk],1,3,0,0,["c3",ASs(AO8)],IA,0,C,[FD],0,3,0,0,["lD",ASt(IY)],YM,0,C,[],0,3,0,0,0,Vx,0,C,[Ch],0,3,0,0,["b4",ASs(ALq)],Vy,0,C,[Ch],0,3,0,0,["b4",ASs(ALF)],Vz,
0,C,[Ch],0,3,0,0,["b4",ASs(AJ$)],VA,0,C,[Ch],0,3,0,0,["b4",ASs(AJy)],VB,0,C,[Ch],0,3,0,0,["b4",ASs(AJV)],VC,0,C,[Ch],0,3,0,0,["b4",ASs(AMe)],VD,0,C,[Ch],0,3,0,0,["b4",ASs(AHO)],VE,0,C,[Ch],0,3,0,0,["b4",ASs(APz)],VF,0,C,[Ch],0,3,0,0,["b4",ASs(AG6)],VG,0,C,[Ch],0,3,0,0,["b4",ASs(ANj)],WP,0,C,[Ch],0,3,0,0,["b4",ASs(AO9)],WQ,0,C,[Ch],0,3,0,0,["b4",ASs(AJL)],WR,0,C,[Ch],0,3,0,0,["b4",ASs(AKc)],WS,0,C,[Ch],0,3,0,0,["b4",ASs(ALW)],Tj,0,C,[],3,3,0,0,0,Tw,0,C,[Tj],0,3,0,0,0,Tu,0,C,[Ch],0,3,0,0,["b4",ASs(AIQ)],LO,0,
C,[],0,3,0,0,0,ACj,0,C,[],0,3,0,0,0,If,0,C,[],3,3,0,0,0,Ck,0,C,[If],3,3,0,0,0,CB,0,C,[],3,3,0,0,["bW",ASs(AIV),"cn",ASu(AMd),"c2",ASt(AE4),"cI",ASt(ADU)],DN,0,C,[],3,3,0,0,0,ET,0,C,[If],3,3,0,0,0,Fd,0,C,[],3,3,0,0,0,HG,0,C,[],3,3,0,0,0,FV,0,C,[HG],3,3,0,0,0,Pr,0,C,[Dk],0,3,0,0,0,Bh,0,C,[],0,3,0,0,["cj",ASr(W7)],VJ,0,C,[],0,3,0,0,0,ABy,0,C,[],0,3,0,0,0,X2,0,C,[],3,3,0,0,0,Pi,0,C,[],0,3,0,0,0,KX,0,C,[],0,3,0,0,0]);
$rt_metadata([D0,0,KX,[],0,3,0,0,0,Vi,0,D0,[],0,3,0,0,0,Et,0,D0,[],0,3,0,0,0,PT,0,D0,[],0,3,0,0,0,ABg,0,Et,[],0,3,0,0,0,AAS,0,Et,[],0,3,0,0,0,Yi,0,Et,[],0,3,0,0,0,QY,0,C,[Bt],3,3,0,0,0,AC1,0,C,[QY],3,3,0,0,0,Pf,0,C,[Dk],0,3,0,0,0,Ph,0,C,[],0,3,0,0,0,Cr,0,C,[CI,C_],1,3,0,0,0,Gu,0,Cr,[],12,3,0,XZ,0,Lv,0,C,[],3,3,0,0,0,Sm,0,C,[Lv],3,3,0,0,0,TL,0,C,[],3,3,0,0,0,Gb,0,C,[Sm,TL],1,3,0,0,0,IQ,0,Gb,[],0,3,0,0,0,Zf,0,IQ,[],0,3,0,0,0,F0,0,Gb,[],1,3,0,0,0,KK,0,F0,[],0,3,0,0,["jE",ASu(AII)],DM,0,Cr,[],12,3,0,AOs,0,IH,0,
C,[CI],1,3,0,0,0,Lz,0,IH,[],0,3,0,Y5,0,JN,0,C,[],32,0,0,XB,0,Op,0,C,[],0,3,0,0,0,Gx,0,Cr,[],12,0,0,AAm,0,F5,0,Cr,[],12,0,0,AAo,0,UQ,0,DS,[],0,3,0,0,0,ABq,0,BC,[],0,3,0,0,0,Ly,0,C,[Bt],3,3,0,0,0,Wy,0,C,[Ly],0,3,0,0,["be",ASs(AMR)],WA,0,C,[Ly],0,3,0,0,["be",ASs(AEI)],GG,0,C,[],1,3,0,0,0,Rg,0,C,[],3,3,0,0,0,Kv,0,GG,[CI,Hv,Ij,Rg],1,3,0,0,0,Jd,0,GG,[CI],1,3,0,0,0,Hj,0,C,[],0,3,0,GP,0,Mv,0,Cq,[],0,3,0,0,["bS",ASr(AJH),"ca",ASt(AIc)],ACI,0,C,[],0,3,0,0,0,ZX,0,C,[Bt],1,3,0,0,0,Jr,0,Kv,[],1,0,0,0,0,ZC,0,Jr,[],0,0,0,
0,0,Ki,0,C,[],1,3,0,0,0,K5,0,C,[],0,3,0,0,0,XL,0,C,[],0,3,0,0,0,KJ,0,C,[Bt],3,3,0,0,0,MF,0,C,[KJ],0,3,0,0,["be",ASs(AGR)],ME,0,C,[KJ],0,3,0,0,["be",ASs(AKU)],MD,0,C,[BU],0,3,0,0,["be",ASs(ALA)]]);
$rt_metadata([MC,0,C,[BU],0,3,0,0,["be",ASs(AFi)],Sd,0,C,[Ci],0,3,0,0,["ce",ASs(AK_)],Sc,0,C,[Ci],0,3,0,0,["ce",ASs(AEk)],Sb,0,C,[Ci],0,3,0,0,["ce",ASs(AHV)],Sa,0,C,[Ci],0,3,0,0,["ce",ASs(AHR)],R_,0,C,[Ci],0,3,0,0,["ce",ASs(AIu)],R$,0,C,[Ci],0,3,0,0,["ce",ASs(AEq)],R9,0,C,[Ci],0,3,0,0,["ce",ASs(AF3)],R8,0,C,[Ci],0,3,0,0,["ce",ASs(ALp)],R7,0,C,[Ci],0,3,0,0,["ce",ASs(AOR)],R6,0,C,[Ci],0,3,0,0,["ce",ASs(APK)],PS,0,C,[Ci],0,3,0,0,["ce",ASs(AJk)],PQ,0,C,[Ci],0,3,0,0,["ce",ASs(ADj)],PR,0,C,[Ci],0,3,0,0,["ce",ASs(AGN)],PO,
0,C,[Ci],0,3,0,0,["ce",ASs(AJC)],PP,0,C,[Ci],0,3,0,0,["ce",ASs(AM$)],GO,0,C,[],0,3,0,0,0,Ob,0,GO,[],0,3,0,0,0,ABI,0,C,[],0,3,0,0,0,LJ,0,GO,[],0,3,0,0,0,Tl,0,C,[Bt],3,3,0,0,0,M0,0,C,[Tl],0,3,0,0,["th",ASs(AJc)],T5,0,C,[Bc],0,3,0,0,["m",ASs(Vk)],VZ,0,Jd,[],0,0,0,0,0,AAF,0,C,[Bt],1,3,0,0,0,JL,0,C,[],4,3,0,AIs,0,Vb,0,C,[],3,3,0,0,0,RS,0,C,[Vb],0,3,0,0,["cj",ASr(AFO)],TE,0,C,[],3,3,0,0,0,Kt,"JsFileHandle",5,C,[TE],0,3,0,0,["cj",ASr(AIO)],Ke,0,Ki,[],1,3,0,0,0,OG,0,Ke,[],0,3,0,0,0,HY,0,DS,[],0,3,0,0,0,JX,0,Cq,[],0,
3,0,0,["c3",ASs(AFt),"bS",ASr(AH$),"n_",ASr(ALQ),"ca",ASt(AKt),"q$",ASs(AAf)],XF,0,Cq,[],0,3,0,0,["c3",ASs(ADF),"bS",ASr(AGE),"ca",ASt(AMQ)],DU,0,Cq,[],1,3,0,0,["ca",ASt(KY)],Eg,0,C,[],3,3,0,0,0,Ve,0,DU,[CB,Eg],0,3,0,0,["f6",ASt(AOb),"ca",ASt(AF$),"bS",ASr(AGS),"bW",ASs(AMa),"c2",ASt(AHP),"cI",ASt(AEL),"cn",ASu(ALs)],Wq,0,DU,[Eg],0,3,0,0,["f6",ASt(AG1),"bS",ASr(ALM),"ca",ASt(AFo),"c3",ASs(AMW)],W0,0,DU,[CB],0,3,0,0,["bW",ASs(AIV),"cn",ASu(AMd),"c2",ASt(AE4),"cI",ASt(ADU),"bS",ASr(AMj),"c3",ASs(AFM)],Ov,0,Cq,
[],0,3,0,0,["bS",ASr(ADX),"ca",ASt(ANX)],C7,0,Cq,[],0,3,0,0,["bS",ASr(Rf),"ca",ASt(RN)],P0,"SelectFileTest",6,C7,[],0,3,0,0,0,ACz,"WorkerTest",7,C7,[],0,3,0,0,0,VU,"RenderTexture",6,C7,[],0,3,0,0,["c3",ASs(AI6),"bS",ASr(ADz),"ca",ASt(ALK)],Rh,"ScissorDemo",6,C7,[],0,3,0,0,["bS",ASr(APl),"ca",ASt(AFd)],N4,0,Cq,[],0,3,0,0,["bS",ASr(APo),"ca",ASt(AHj),"c3",ASs(AFS)],H2,"ClipboardTest",6,C7,[CB],0,3,0,0,["bW",ASs(AIV),"c2",ASt(AE4),"cI",ASt(ADU),"cn",ASu(AMK)],Po,0,Cq,[],0,3,0,0,["bS",ASr(APf),"ca",ASt(AJ5)],Vu,
0,DU,[Eg],0,3,0,0,["f6",ASt(AIg),"bS",ASr(APG),"ca",ASt(AL4),"c3",ASs(AI2)]]);
$rt_metadata([Qi,0,JX,[],0,3,0,0,["n_",ASr(AIl),"q$",ASs(AFk)],Iw,0,C,[],3,3,0,0,0,LD,0,C,[Iw,C_],0,3,0,0,0,IT,0,LD,[],0,0,0,0,0,ACg,0,C,[],0,3,0,0,0,XY,0,C,[],3,3,0,0,0,ACU,0,C,[],0,3,0,0,0,TX,0,C,[CB,DN],0,0,0,0,["bW",ASs(AMm),"cn",ASu(APQ),"c2",ASt(APy),"cI",ASt(AKS),"c1",ASu(AJu)],Hq,0,C,[],3,3,0,0,["tu",ASr(AFI),"rf",ASr(APY)],Zj,0,C,[Hq,CB],0,3,0,0,["rf",ASr(AGy),"tu",ASr(AFe),"cI",ASt(AL6),"c2",ASt(AN_),"cn",ASu(AHI),"bW",ASs(AF4),"gz",ASs(AK6)],Q4,0,C,[Ck],0,3,0,0,["bw",ASs(AKf)],Q8,0,C,[Ck],0,3,0,0,
["bw",ASs(AHH)],Jw,0,C,[Ck],0,3,0,0,["bw",ASs(AMY)],Q7,0,C,[Bc],0,3,0,0,["m",ASs(AEa)],Q6,0,C,[Ck],0,3,0,0,["bw",ASs(APT)],Q5,0,C,[Fd],0,3,0,0,["hd",ASt(ALx)],Q_,0,C,[FV],0,3,0,0,["f9",ASr(APq)],Q$,0,C,[DN],0,3,0,0,["c1",ASu(AJs)],Q9,0,C,[ET],0,3,0,0,["bw",ASs(AMx)],BW,0,C,[],0,3,0,0,["dA",ASs(APt)],Cy,0,C,[],3,3,0,Dp,0,H6,0,C,[],0,3,0,0,0,ABJ,0,H6,[],0,3,0,0,0,ZE,0,C,[],0,3,0,0,0,SR,0,C,[CB],0,0,0,0,["bW",ASs(ALX),"cn",ASu(ANn),"c2",ASt(AJW),"cI",ASt(AGd)],QI,0,C,[Ck],0,3,0,0,["bw",ASs(ALR)],QH,0,C,[Ck],0,
3,0,0,["bw",ASs(AOi)],QK,0,C,[Fd],0,3,0,0,["hd",ASt(AOL)],QJ,0,C,[Bi],0,3,0,0,["q",ASr(AOK)],QG,0,C,[ET],0,3,0,0,["bw",ASs(AKk)],QF,0,C,[DN],0,3,0,0,["c1",ASu(AH4)],Ii,0,BW,[],0,3,0,0,0,T4,0,C,[],0,3,0,0,0,Yr,0,C,[],0,3,0,0,0,Xz,0,C,[Eg,Hq],0,3,0,0,["tu",ASr(AFI),"rf",ASr(APY),"f6",ASt(AFc),"gz",ASs(ADK)],Sf,0,C,[Ck],0,3,0,0,["bw",ASs(AMi)],Si,0,C,[ET],0,3,0,0,["bw",ASs(ADn)],ACv,0,C,[],0,3,0,0,["dA",ASs(APP)],Ko,0,C,[],0,3,0,0,0,Sg,0,C,[Bi],0,3,0,0,["q",ASr(AHN)],Se,0,C,[Bi],0,3,0,0,["q",ASr(ANB)],C5,0,C,[],
0,3,0,0,0,ZW,0,C,[CB,Eg],0,3,0,0,["bW",ASs(X9),"cn",ASu(ZV),"c2",ASt(Y4),"cI",ASt(ACL),"f6",ASt(AOE)],NT,0,C,[Ck],0,3,0,0,["bw",ASs(AFb)],NU,0,C,[ET],0,3,0,0,["bw",ASs(ANT)],AAH,0,C,[],0,3,0,0,0,NV,0,C,[DN],0,3,0,0,["c1",ASu(AK3)],Vh,0,C,[],3,3,0,0,0,G8,0,C,[Vh],3,3,0,0,0,EF,0,C,[G8],1,3,0,0,0]);
$rt_metadata([Mc,0,C,[G8],3,3,0,0,0,FU,0,EF,[Mc],1,3,0,0,0,HU,0,C,[],3,3,0,0,0,Nb,0,FU,[Ed,C_,HU],0,3,0,0,["qe",ASs(Bs),"mS",ASr(ALb),"sU",ASs(Ee)],ACi,0,C,[],0,3,0,0,0,S9,0,C,[Eg],0,3,0,0,["f6",ASt(AKL)],S$,0,C,[Ck],0,3,0,0,["bw",ASs(ADs)],MJ,0,C,[],3,3,0,0,0,ABF,0,C,[MJ],0,3,0,0,0,Z8,0,C,[Dk],0,3,0,0,0,ABu,0,C,[],3,3,0,0,0,Vt,0,C,[CB],0,0,0,0,["cn",ASu(AMd),"c2",ASt(AKB),"cI",ASt(AL8),"bW",ASs(AGw)],RR,0,C,[DN],0,3,0,0,["c1",ASu(AFR)],TC,0,C,[],3,3,0,0,0,Z7,0,C,[],0,3,0,0,0,Pl,0,C,[Ck],0,3,0,0,["bw",ASs(AMN)],Qm,
0,C,[Bc],0,3,0,0,["m",ASs(ADS)],Ql,0,C,[Bc],0,3,0,0,["m",ASs(APu)],Qk,0,C,[Bc],0,3,0,0,["m",ASs(AGa)],Qj,0,C,[Bc],0,3,0,0,["m",ASs(AKY)],Qh,0,C,[Bc],0,3,0,0,["m",ASs(AKb)],Qg,0,C,[Bc],0,3,0,0,["m",ASs(AL5)],SQ,0,C,[CB],0,0,0,0,["cn",ASu(AMd),"cI",ASt(ADU),"bW",ASs(ANV),"c2",ASt(AOg)],Th,0,C,[CB],0,0,0,0,["cn",ASu(AMd),"c2",ASt(AEt),"cI",ASt(AE9),"bW",ASs(AD4)],Ne,0,C,[DN],0,3,0,0,["c1",ASu(ADW)],Rt,0,C,[Ck],0,3,0,0,["bw",ASs(ANZ)],Rs,0,C,[Fd],0,3,0,0,["hd",ASt(AGx)],Rq,0,C,[Fd],0,3,0,0,["hd",ASt(ANo)],Rp,0,
C,[FV],0,3,0,0,["f9",ASr(ALr)],Rr,0,C,[FV],0,3,0,0,["f9",ASr(AEZ)],QZ,0,C,[Ck],0,3,0,0,["bw",ASs(AGD)],Ku,0,C,[],0,3,0,0,0,PG,0,C,[Ck],0,3,0,0,["bw",ASs(AG9)],PH,0,C,[ET],0,3,0,0,["bw",ASs(ADt)],PI,0,C,[DN],0,3,0,0,["c1",ASu(AMr)],H3,0,C,[],0,3,0,0,0,ZG,0,C,[],0,3,0,0,["dA",ASs(AOu)],N2,0,C,[Bt],3,3,0,0,0,Om,0,C,[N2],0,3,0,0,["s5",ASt(AHd)],N3,0,C,[Bt],3,3,0,0,0,Ok,0,C,[N3],0,3,0,0,["s5",ASt(AIk)],Yk,0,C,[],0,3,0,0,0,Xt,0,C,[Bt],3,3,0,0,0,LU,0,C,[Bi],0,3,0,0,["q",ASr(AJw)],LV,0,C,[Bi],0,3,0,0,["q",ASr(AH1)],U1,
0,C,[],0,3,0,0,0,Xa,0,C,[],0,3,0,0,0,ML,0,C,[],0,3,0,0,0,EM,0,C,[Dk],0,0,0,0,0,TT,0,C,[Bc],0,3,0,0,0]);
$rt_metadata([TS,0,C,[Bc],0,3,0,0,["m",ASs(AMX)],TO,0,C,[Bc],0,3,0,0,["m",ASs(AKW)],TN,0,C,[Bi],0,3,0,0,["q",ASr(AMU)],TQ,0,C,[Bi],0,3,0,0,["q",ASr(AH6)],TP,0,C,[Bi],0,3,0,0,["q",ASr(AKi)],Uf,0,C,[Bi],0,3,0,0,["q",ASr(AMl)],Fh,0,Cr,[],12,3,0,ADC,0,IS,0,C,[Dk],0,3,0,0,["dZ",ASr(AAX)],Rk,0,C,[Ck],0,3,0,0,["bw",ASs(APU)],Rl,0,C,[Ck],0,3,0,0,["bw",ASs(ADx)],SK,0,C,[],0,3,0,0,0,WO,0,C,[],3,3,0,0,0,G4,0,C,[],0,3,0,0,0,GY,0,C,[],4,3,0,0,0,AC5,0,C,[],0,3,0,0,0,Hz,0,C,[],3,3,0,0,0,V_,0,C,[Hz],0,3,0,0,["m1",ASu(AMF)],Wa,
0,C,[Hz],0,3,0,0,0,U3,0,C,[CB],0,0,0,0,["bW",ASs(ADw),"cn",ASu(AMH),"c2",ASt(ANA),"cI",ASt(AIt)],ABG,0,C,[],0,0,0,0,0,WZ,0,C,[Bc],0,3,0,0,["m",ASs(AL9)],M$,0,C,[TC],0,3,0,0,0,Dt,0,C,[],3,3,0,EJ,0,AAb,0,C,[],0,3,0,0,0,OV,0,C,[Bc],0,3,0,0,["m",ASs(AIB)],Qv,0,C,[CB],0,0,0,0,["cn",ASu(AMd),"c2",ASt(AE4),"cI",ASt(ADU),"bW",ASs(ADA)],Yw,0,C,[],0,3,0,0,0,Hp,0,C,[],0,3,0,0,0,EP,0,C,[],0,3,0,0,0,LA,0,EP,[],0,3,0,0,0,LY,0,EP,[],0,3,0,0,0,Pp,0,EP,[],0,3,0,0,0,H5,0,C,[],3,3,0,0,0,Qq,0,C,[],3,3,0,0,0,F$,0,C,[CI],0,3,0,0,
0,IL,0,C,[],0,3,0,0,0,J$,0,F0,[],0,3,0,0,["jE",ASu(AGM)],ACn,0,C,[],0,3,0,0,0,Zg,0,C,[Bt],4,3,0,0,0,ACQ,0,C,[],0,3,0,0,0,AB_,0,C,[],3,3,0,0,0,CP,0,C,[Bt],1,3,0,0,0,AAz,0,CP,[],1,3,0,0,0,ABd,0,CP,[],1,3,0,0,0,Yo,0,CP,[],1,3,0,0,0,YI,0,CP,[],1,3,0,0,0,ABH,0,CP,[],1,3,0,0,0,ZS,0,Eu,[Ed,C_],0,3,0,0,0,Cx,0,C,[],0,3,0,0,0,M1,0,C,[Bi],0,3,0,0,["q",ASr(APd)]]);
$rt_metadata([Tm,0,C,[Bi],0,3,0,0,["q",ASr(AJQ)],B5,0,C,[],0,3,0,0,0,Ih,0,C,[],0,3,0,0,0,ACr,0,C,[CI],0,3,0,0,["dA",ASs(ANp),"i$",ASs(AEX)],Ws,0,C,[FD],0,3,0,0,["lD",ASt(AHy)],Wu,0,C,[FD],0,3,0,0,["lD",ASt(AI_)],EQ,0,C,[],0,3,0,0,0,GL,0,FU,[HU],1,0,0,0,["sU",ASs(AJ6)],WG,0,GL,[HU],0,0,0,0,["mS",ASr(AGK),"qe",ASs(AO3)],Xm,0,C,[],0,3,0,0,["cj",ASr(AHE)],Oa,0,C,[G8],3,3,0,0,0,F3,0,EF,[Oa],1,3,0,0,0,JF,0,F3,[],1,0,0,0,0,UF,0,JF,[],0,0,0,0,0,KP,0,Eu,[],1,0,0,0,0,UD,0,KP,[],0,0,0,0,0,UE,0,GL,[],0,0,0,0,0,Ft,0,C,[],
3,3,0,0,0,UB,0,C,[Ft],0,0,0,0,0,OE,0,C,[Ft],3,3,0,0,0,UC,0,C,[OE],0,0,0,0,0,WY,0,C,[FD],0,3,0,0,0,KM,0,C,[],0,3,0,0,0,MS,0,C,[Ft],0,0,0,0,0,Y2,0,C,[],4,3,0,0,0,U0,0,C,[CB],0,0,0,0,["cn",ASu(AMd),"c2",ASt(AE4),"cI",ASt(ADU),"bW",ASs(AM6)],Zd,0,C,[Bt],1,3,0,0,0,J2,0,C,[Iw,Ed],0,0,0,0,0,HK,0,J2,[],0,0,0,0,0,T8,0,C,[Bc],0,3,0,0,["m",ASs(AH7)],U8,0,C,[HG],0,3,0,0,["f9",ASr(APi)],Ce,0,Cr,[],12,3,0,Yl,0,IO,0,C,[],0,3,0,0,0,ACX,0,C,[],0,3,0,0,0,KV,0,C,[],3,3,0,0,0,Qn,0,C,[KV],0,3,0,0,["pr",ASs(AKu)],ABW,0,C,[CI],0,
3,0,0,["dA",ASs(Xo),"i$",ASs(AL0)],MK,0,C,[Bc],0,3,0,0,["m",ASs(AG7)],XX,0,C,[],0,3,0,0,0,W_,0,C,[],0,3,0,0,0,MB,0,C,[Dk],0,3,0,0,0,FC,0,HY,[],0,3,0,0,0,V$,0,Ez,[],0,3,0,0,0,Px,0,C,[Bc],0,3,0,0,["m",ASs(ALn)],Te,0,C,[Bi],0,3,0,0,["q",ASr(ANQ)],Xq,0,C,[],0,3,0,0,0,Lb,0,Bn,[],0,3,0,0,0,Lr,0,DL,[CI],0,3,0,0,0,Fp,0,C,[],0,0,0,0,0,Ju,0,C,[],4,3,0,0,0]);
$rt_metadata([Uz,0,C,[],0,3,0,0,0,Lk,0,C,[],1,3,0,0,0,MV,0,C,[Bc],0,3,0,0,["m",ASs(ALG)],UR,0,C,[Bc],0,3,0,0,["m",ASs(APw)],Zu,0,CP,[],1,3,0,0,0,Qt,0,C,[Bi],0,3,0,0,["q",ASr(AH0)],Uo,0,C,[Bi],0,3,0,0,["q",ASr(ALJ)],Td,0,C,[],0,3,0,0,0,DP,0,Bn,[],0,3,0,0,0,AAR,0,Ez,[],0,3,0,0,0,PF,0,C,[Bc],0,3,0,0,["m",ASs(AOx)],T6,0,C,[Bc],0,3,0,0,0,M9,0,C,[Bc],0,3,0,0,["m",ASs(ADV)],M7,0,C,[Bc],0,3,0,0,["m",ASs(AFU)],SM,0,C,[Bc],0,3,0,0,["m",ASs(AOI)],JQ,0,Lk,[],1,3,0,0,0,SC,0,JQ,[],0,3,0,0,0,Pb,0,C,[Bc],0,3,0,0,["m",ASs(AE0)],Un,
0,C,[Bi],0,3,0,0,["q",ASr(AKN)],PN,0,C,[BU],0,3,0,0,["be",ASs(ADh)],TK,0,C,[BU],0,3,0,0,["be",ASs(AO6)],Sy,0,C,[Bc],0,3,0,0,0,Z1,0,C,[Ci],0,3,0,0,0,Rj,0,C,[Bc],0,3,0,0,["m",ASs(AEb)],Ri,0,C,[Bc],0,3,0,0,["m",ASs(AEQ)],QE,0,C,[Bc],0,3,0,0,["m",ASs(AHk)],R4,0,C,[Bi],0,3,0,0,["q",ASr(AJo)],Jo,0,DL,[CI],0,3,0,0,0,KS,0,C,[],4,3,0,0,0,L7,0,C,[BU],0,3,0,0,["be",ASs(APX)],On,0,C,[Hz],0,3,0,0,["m1",ASu(ADQ)],SZ,0,C,[],0,3,0,0,0,EB,0,C,[Dk],0,3,0,0,["dZ",ASr(AK1),"it",ASr(AOz),"iw",ASu(O_),"ey",ASs(X_),"jK",ASs(AGB),
"jC",ASs(ANt),"oq",ASt(APD),"cn",ASu(AN2),"is",ASt(ANk),"cI",ASt(AOn),"bW",ASs(AKo),"c1",ASu(AGt)],Gn,0,EB,[],0,3,0,0,["j3",ASs(ZI)],PZ,0,Gn,[Hq],0,3,0,0,["tu",ASr(AFI),"rf",ASr(APY),"dZ",ASr(APR),"oq",ASt(AFF),"j3",ASs(AIM),"ey",ASs(AId),"jC",ASs(AJm),"jK",ASs(AGb),"s8",ASr(Yq),"bW",ASs(AOH),"is",ASt(ADL),"cn",ASu(AD1),"gz",ASs(AIU)],UZ,0,C,[Bi],0,3,0,0,["q",ASr(APE)],Za,0,EB,[],0,3,0,0,["dZ",ASr(AD5),"iw",ASu(AFK),"ey",ASs(AM3),"cn",ASu(AHL),"is",ASt(AN5),"cI",ASt(AHn),"bW",ASs(AID),"c1",ASu(ANe),"it",ASr(AKK)],U6,
0,Gn,[],0,3,0,0,["s8",ASr(ALo),"it",ASr(AJq),"jC",ASs(AIf),"ey",ASs(AF6),"jK",ASs(AIS)],ON,0,C,[Bc],0,3,0,0,0,WD,0,C,[],0,3,0,0,0,Hy,0,C,[],0,3,0,0,0,Sx,0,EB,[],0,3,0,0,0,S5,0,C,[Bc],0,3,0,0,["m",ASs(AJX)],S6,0,C,[Bc],0,3,0,0,["m",ASs(AH5)],Q3,0,DL,[CI],0,3,0,0,0,W5,0,C,[Bi],0,3,0,0,["q",ASr(AGh)],IV,0,C,[],0,3,0,0,0,E8,0,Bn,[],0,3,0,0,0,MZ,0,C,[],0,3,0,0,0,ABZ,0,C,[],0,3,0,0,0]);
$rt_metadata([RU,0,C,[],0,0,0,0,0,Wo,0,C,[BU],0,3,0,0,["be",ASs(AM9)],Wn,0,C,[BU],0,3,0,0,["be",ASs(AF0)],VQ,0,C,[BU],0,3,0,0,["be",ASs(AHr)],VP,0,C,[BU],0,3,0,0,["be",ASs(AIj)],Xs,0,C,[],1,3,0,0,0,VW,0,C,[],3,3,0,0,0,Wi,0,C,[Ch],0,3,0,0,["b4",ASs(AHh)],YW,0,C,[],0,3,0,0,0,ACh,0,C,[],0,3,0,0,0,Tv,0,C,[Bi],0,3,0,0,["q",ASr(AHW)],Tx,0,C,[Bi],0,3,0,0,["q",ASr(AMC)],XN,0,C,[],0,3,0,0,0,Is,0,E8,[],0,3,0,0,0,Hu,0,Bn,[],0,3,0,0,0,K_,0,Bn,[],0,3,0,0,0,YA,0,C,[Bc],0,3,0,0,0,Rm,0,C,[Bi],0,3,0,0,["q",ASr(AO$)],V1,0,C,
[Bc],0,3,0,0,["m",ASs(ANb)],Rv,0,C,[Bi],0,3,0,0,["q",ASr(AEh)],Xb,0,C,[],0,3,0,0,0,GH,0,C,[],0,3,0,0,0,AA8,0,F3,[],0,0,0,0,0,Or,0,EF,[],0,0,0,0,0,VH,0,Bw,[],0,3,0,0,0,PD,0,C,[Lv],3,3,0,0,0,MT,0,C,[PD],3,3,0,0,0,Ld,0,C,[MT],1,3,0,0,0,Y1,0,Ld,[],0,3,0,0,0,Qz,0,C,[Bi],0,3,0,0,["q",ASr(AET)],Qy,0,C,[Bi],0,3,0,0,["q",ASr(ADo)],Qx,0,C,[Bi],0,3,0,0,["q",ASr(AJh)],Qw,0,C,[Bi],0,3,0,0,["q",ASr(ANO)],OP,0,C,[Bi],0,3,0,0,["q",ASr(ANa)],OR,0,C,[Bi],0,3,0,0,["q",ASr(AIo)],OS,0,C,[Bi],0,3,0,0,["q",ASr(AFn)],Vc,0,C,[Bi],0,
3,0,0,["q",ASr(AEe)],U5,0,C,[H5],0,3,0,0,["lJ",ASt(AJ_)],RP,0,C,[Bi],0,3,0,0,["q",ASr(AIT)],RQ,0,C,[Bi],0,3,0,0,["q",ASr(AJ9)],Nv,0,C,[Bi],0,3,0,0,["q",ASr(AHQ)],Nu,0,C,[Bi],0,3,0,0,["q",ASr(ANY)],Uh,0,C,[HG],0,3,0,0,["f9",ASr(AFQ)],UT,0,C,[Bi],0,3,0,0,["q",ASr(ALV)],UX,0,C,[Bi],0,3,0,0,["q",ASr(AI1)],UW,0,C,[Bi],0,3,0,0,["q",ASr(AD$)],UU,0,C,[Bi],0,3,0,0,["q",ASr(AFX)],RL,0,C,[H5],0,3,0,0,["lJ",ASt(AH9)],Pa,0,C,[BU],0,3,0,0,["be",ASs(AGc)],Ik,0,C,[Bt],3,3,0,0,0]);
$rt_metadata([L3,0,C,[Ik],0,3,0,0,["pq",ASr(AIp)],LL,0,C,[Ik],0,3,0,0,["pq",ASr(ADa)],Wm,0,C,[BU],0,3,0,0,["be",ASs(AHG)],GB,0,C,[],0,0,0,0,0,TG,0,GB,[Ft],0,0,0,0,0,P5,0,GB,[Ft],0,0,0,0,0,S2,0,C,[],3,3,0,0,0,P3,0,C,[C_],4,3,0,0,0,Nj,0,C,[Bc],0,3,0,0,["m",ASs(APO)],Ge,0,Cr,[],12,0,0,TZ,0,RX,0,C,[Bc],0,3,0,0,["m",ASs(AI4)],Ou,0,C,[Bc],0,3,0,0,["m",ASs(AJv)],RZ,0,C,[Bc],0,3,0,0,["m",ASs(AHl)],R3,0,C,[Bc],0,3,0,0,["m",ASs(AD8)],Ul,0,C,[KV],0,3,0,0,["pr",ASs(Je)],Bz,0,C,[],1,0,0,0,["b9",ASu(Hh),"cc",ASv(Hr),"ha",
ASr(AEJ),"J",ASs(AN8),"bJ",ASs(AN7),"eO",ASr(AOZ),"dP",ASr(Iy)],Tz,0,C,[],32,0,0,AQq,0,Os,0,C,[Bc],0,3,0,0,["m",ASs(AFH)],U4,0,C,[Bc],0,3,0,0,["m",ASs(AHf)],W6,0,C,[Bi],0,3,0,0,["q",ASr(AFu)],CN,0,Bz,[],0,0,0,Lx,["c",ASu(AEd),"E",ASs(AEy)],Gr,0,C,[],0,0,0,0,0,Id,0,BC,[],0,3,0,0,0,V9,0,C,[BU],0,3,0,0,["be",ASs(ALy)],AAp,0,C,[Bt],3,3,0,0,0,Tk,0,C,[BU],0,3,0,0,["be",ASs(ALd)],QM,0,CN,[],0,0,0,0,["c",ASu(ADN),"E",ASs(AMM)],WH,0,CN,[],0,0,0,0,["c",ASu(AFx)],OW,0,CN,[],0,0,0,0,["c",ASu(AEH)],RT,0,CN,[],0,0,0,0,["c",
ASu(ADT),"E",ASs(ALm)],Fl,0,CN,[],0,0,0,0,["c",ASu(AOo)],BS,0,Bz,[],1,0,0,0,["c",ASu(APp),"bO",ASr(AND),"E",ASs(AIx)],ABT,0,BS,[],0,0,0,0,["bn",ASt(AM_),"b9",ASu(AGO),"cc",ASv(AFl),"E",ASs(ADR)],BN,0,Bz,[],0,0,0,0,["c",ASu(AHo),"J",ASs(ALf),"bJ",ASs(AJi),"E",ASs(ALZ),"dP",ASr(AFg)],Ip,0,BN,[],0,0,0,0,["c",ASu(AK0),"E",ASs(AMn)],DG,0,Ip,[],0,0,0,0,["c",ASu(AFY),"J",ASs(AL7)],L1,0,DG,[],0,0,0,0,["c",ASu(AK$),"E",ASs(AOc)],Vd,0,DG,[],0,0,0,0,["c",ASu(AEs),"E",ASs(ANH)],P6,0,DG,[],0,0,0,0,["c",ASu(AFa),"E",ASs(APS)],SF,
0,DG,[],0,0,0,0,["c",ASu(ADp),"E",ASs(AMB)],Gh,0,BN,[],0,0,0,0,["c",ASu(ADI),"b9",ASu(AJE),"cc",ASv(AMS),"bJ",ASs(AJd),"eO",ASr(ALj),"dP",ASr(AO2)],Gs,0,C,[],1,0,0,0,0,T,0,Gs,[],1,0,0,NS,["cW",ASr(AEv),"ef",ASr(AD3),"ip",ASr(ANw),"gr",ASr(AOY)],Yd,0,T,[],0,0,0,0,["j",ASs(CW),"cW",ASr(CR),"ef",ASr(AGH),"ip",ASr(ANW),"cj",ASr(AKr),"gr",ASr(AGT)],IF,0,Bn,[],0,3,0,0,0,DR,0,Bz,[],1,0,0,0,["bJ",ASs(AMV),"E",ASs(AOj),"dP",ASr(AJ1)],CY,0,DR,[],0,0,0,0,["c",ASu(ADr)],EV,0,CY,[],0,0,0,0,["c",ASu(AEg)],CO,0,DR,[],0,0,
0,0,["c",ASu(ADH)],Er,0,CY,[],0,0,0,0,["c",ASu(AJK),"J",ASs(APW)]]);
$rt_metadata([Vr,0,CY,[],0,0,0,0,["c",ASu(APh),"b9",ASu(AKn)],V,0,C,[],1,0,0,0,0,C9,0,BC,[],0,3,0,0,0,Mj,0,Gs,[Ed],0,0,0,0,["cj",ASr(AKy)],No,0,Bz,[],0,0,0,0,["c",ASu(AIX),"E",ASs(ALe)],V2,0,C,[Ed,C_],0,3,0,0,0,L8,0,BN,[],0,0,0,0,0,Pq,0,BN,[],0,0,0,0,["c",ASu(AEc),"J",ASs(AKX),"E",ASs(AEK),"bJ",ASs(AEu)],Ds,0,BN,[],0,0,0,0,["c",ASu(AGz),"j",ASs(AG5),"bJ",ASs(AD9),"J",ASs(ANq),"E",ASs(AGL)],ID,0,Ds,[],0,0,0,0,["j",ASs(AIy)],X6,0,BS,[],0,0,0,0,["bn",ASt(AIY)],D7,0,BS,[],0,0,0,0,["bn",ASt(LI),"bJ",ASs(ALh)],NW,
0,BN,[],0,0,0,0,["J",ASs(AJJ),"c",ASu(ADg),"bJ",ASs(AEE),"E",ASs(AN0)],Ec,0,BS,[],0,0,0,0,["bO",ASr(AIH),"bn",ASt(AHx),"b9",ASu(AGu),"cc",ASv(AIN),"bJ",ASs(ANS)],ACm,0,BS,[],0,0,0,0,["bn",ASt(ADb)],Xg,0,BS,[],0,0,0,0,["bn",ASt(ADB)],E4,0,BN,[],0,0,0,0,["J",ASs(AO1),"c",ASu(AKZ),"bJ",ASs(AIZ),"E",ASs(AL$)],Wl,0,E4,[],0,0,0,0,0,SS,0,E4,[],0,0,0,0,0,W2,0,CO,[],0,0,0,0,["c",ASu(AFC)],OO,0,CO,[],0,0,0,0,["c",ASu(AKe)],FF,0,CO,[],0,0,0,0,["c",ASu(ANm),"J",ASs(AOt)],Ot,0,FF,[],0,0,0,0,["c",ASu(AIJ),"J",ASs(AKz)],E1,
0,CO,[],0,0,0,0,["c",ASu(APL)],Mt,0,E1,[],0,0,0,0,["c",ASu(AH2)],Qs,0,CO,[],0,0,0,0,["c",ASu(AO7)],PA,0,FF,[],0,0,0,0,["c",ASu(AEM)],T1,0,E1,[],0,0,0,0,["c",ASu(ADY)],Qu,0,DR,[],0,0,0,0,["c",ASu(APx),"b9",ASu(ANy)],Nw,0,DR,[],0,0,0,0,["c",ASu(ALk),"b9",ASu(ADk)],ED,0,C,[],1,0,0,0,0,W4,0,CY,[],0,0,0,0,["c",ASu(AD0)],Vn,0,Er,[],0,0,0,0,["c",ASu(AKd)],Og,0,EV,[],0,0,0,0,["c",ASu(AMZ)],Pw,0,CY,[],0,0,0,0,["c",ASu(ALc)],S_,0,Er,[],0,0,0,0,["c",ASu(AD7)],P7,0,EV,[],0,0,0,0,["c",ASu(ANd)],JP,0,Bz,[],4,0,0,0,["c",ASu(AJg),
"E",ASs(AIi)],YK,0,Bz,[],0,0,0,0,["c",ASu(AEr),"E",ASs(AEB)],Ns,0,Bz,[],0,0,0,0,["c",ASu(AIC),"E",ASs(APH)],V4,0,Bz,[],4,0,0,0,["c",ASu(ALT),"E",ASs(AFr)],VN,0,Bz,[],0,0,0,0,["c",ASu(AKT),"E",ASs(AC_)],MG,0,Bz,[],0,0,0,0,["c",ASu(AFf),"E",ASs(AHg)],ACc,0,BN,[],0,0,0,0,["c",ASu(APb),"J",ASs(AEG),"ha",ASr(AKE),"E",ASs(AEF)],Ya,0,BN,[],4,0,0,0,["c",ASu(AKM),"J",ASs(AMI),"ha",ASr(AC8),"E",ASs(APm)],AB4,0,Bz,[],4,0,0,0,["c",ASu(AI3),"E",ASs(AHa)],AAl,0,Bz,[],0,0,0,0,["c",ASu(AKR),"E",ASs(AG2)],Xd,0,Bz,[],0,0,0,0,
["c",ASu(AH8),"E",ASs(AFw)],GK,0,BN,[],0,0,0,0,["c",ASu(AD2),"J",ASs(AL3),"E",ASs(AMo)],AB9,0,GK,[],0,0,0,0,["c",ASu(AFB),"b9",ASu(AN$),"cc",ASv(ADO),"bJ",ASs(AJ8)]]);
$rt_metadata([Zs,0,GK,[],0,0,0,0,["c",ASu(AJz)],Nn,0,F6,[Hv],0,3,0,0,["kZ",ASv(AGU),"kc",ASu(AEw),"hh",ASs(AEV),"lu",ASt(ANC)],QB,0,BS,[],0,0,0,0,["bn",ASt(AFV),"b9",ASu(AEm),"cc",ASv(AHe),"bJ",ASs(AHJ)],Xc,0,BS,[],0,0,0,0,["bn",ASt(AJG)],MA,0,BS,[],0,0,0,0,["bn",ASt(AM1)],GJ,0,C,[],4,0,0,AMz,0,LR,0,BS,[],0,0,0,0,["bn",ASt(AM8)],Kn,0,BN,[],0,0,0,0,["J",ASs(AK8),"c",ASu(AFs),"b9",ASu(AHF),"cc",ASv(AF2),"bJ",ASs(ADM),"E",ASs(ANI)],KH,0,BN,[],0,0,0,0,["J",ASs(AEU),"c",ASu(ADq),"b9",ASu(ALt),"cc",ASv(AM0),"bJ",
ASs(AFW),"E",ASs(ALD)],DJ,0,BS,[],0,0,0,0,["bn",ASt(AMq),"b9",ASu(AKs),"cc",ASv(AER),"bJ",ASs(AMc)],Up,0,ED,[],0,0,0,0,["g3",ASs(AE7),"qY",ASt(AMh)],Uq,0,ED,[],0,0,0,0,["g3",ASs(ANg),"qY",ASt(AOU)],AA$,0,C,[],0,0,0,0,0,Xu,0,C,[],0,0,0,0,0,Kk,0,V,[],0,0,0,0,["A",ASr(ZA)],Jl,0,V,[],0,0,0,0,["A",ASr(AAe)],AA4,0,V,[],0,0,0,0,["A",ASr(AML)],ABx,0,V,[],0,0,0,0,["A",ASr(ANL)],ABB,0,V,[],0,0,0,0,["A",ASr(AGA)],Kg,0,V,[],0,0,0,0,["A",ASr(Ye)],KQ,0,Kg,[],0,0,0,0,["A",ASr(Y9)],ACV,0,V,[],0,0,0,0,["A",ASr(AHD)],LH,0,KQ,
[],0,0,0,0,["A",ASr(W$)],ZN,0,LH,[],0,0,0,0,["A",ASr(AJ2)],Z_,0,V,[],0,0,0,0,["A",ASr(AFP)],YD,0,V,[],0,0,0,0,["A",ASr(AJY)],Ym,0,V,[],0,0,0,0,["A",ASr(AOX)],ABE,0,V,[],0,0,0,0,["A",ASr(AKA)],AC7,0,V,[],0,0,0,0,["A",ASr(ADi)],AA_,0,V,[],0,0,0,0,["A",ASr(AIb)],AA0,0,V,[],0,0,0,0,["A",ASr(AMt)],ABY,0,V,[],0,0,0,0,["A",ASr(AFL)],XM,0,V,[],0,0,0,0,["A",ASr(AF_)],Xr,0,V,[],0,0,0,0,["A",ASr(AOP)],ABf,0,V,[],0,0,0,0,["A",ASr(ADc)],ABp,0,V,[],0,0,0,0,["A",ASr(AI7)],Y0,0,V,[],0,0,0,0,["A",ASr(AGj)],AAc,0,V,[],0,0,0,
0,["A",ASr(AHi)],ACw,0,V,[],0,0,0,0,["A",ASr(AI9)],ABo,0,V,[],0,0,0,0,["A",ASr(AN3)],Zp,0,V,[],0,0,0,0,["A",ASr(ALN)],YY,0,V,[],0,0,0,0,["A",ASr(AKv)],AC2,0,V,[],0,0,0,0,["A",ASr(AME)],IN,0,V,[],0,0,0,0,["A",ASr(AAa)],AB0,0,IN,[],0,0,0,0,["A",ASr(AKj)],ZT,0,Kk,[],0,0,0,0,["A",ASr(AEl)],YS,0,Jl,[],0,0,0,0,["A",ASr(AHu)],Ys,0,V,[],0,0,0,0,["A",ASr(AJl)],YN,0,V,[],0,0,0,0,["A",ASr(AOD)],ZH,0,V,[],0,0,0,0,["A",ASr(AGY)]]);
$rt_metadata([ZP,0,V,[],0,0,0,0,["A",ASr(ADd)],Yx,0,C,[],4,0,0,0,0,X4,0,C,[],4,3,0,0,0,MH,0,C,[],0,3,0,0,0,ABk,0,C,[],0,3,0,0,0,Zn,0,C,[],4,3,0,0,0,Yc,0,C,[If],0,3,0,0,0,Mw,0,C,[Bc],0,3,0,0,["m",ASs(AKq)],Qb,0,C,[Bc],0,3,0,0,["m",ASs(AGV)],UA,0,C,[Bc],0,3,0,0,0,V5,0,C,[Bc],0,3,0,0,0,ABb,0,C,[],3,3,0,0,0,Vq,0,T,[],0,0,0,0,["j",ASs(AGG)],Vo,0,T,[],0,0,0,0,["j",ASs(ADE)],NC,0,T,[],0,0,0,0,["j",ASs(AJb),"cj",ASr(AHm)],NI,0,T,[],0,0,0,0,["j",ASs(AMs)],NG,0,T,[],0,0,0,0,["j",ASs(AM7)],NH,0,T,[],0,0,0,0,["j",ASs(AJF)],NL,
0,T,[],0,0,0,0,["j",ASs(AGe)],NM,0,T,[],0,0,0,0,["j",ASs(AC9)],NJ,0,T,[],0,0,0,0,["j",ASs(AHq)],NK,0,T,[],0,0,0,0,["j",ASs(AJI)],NN,0,T,[],0,0,0,0,["j",ASs(AOd)],NO,0,T,[],0,0,0,0,["j",ASs(AFG)],NB,0,T,[],0,0,0,0,["j",ASs(APZ)],Oo,0,T,[],0,0,0,0,["j",ASs(AHt)],Ny,0,T,[],0,0,0,0,["j",ASs(AFE)],Nz,0,T,[],0,0,0,0,["j",ASs(AG$)],NF,0,T,[],0,0,0,0,["j",ASs(AIF)],Nx,0,T,[],0,0,0,0,["j",ASs(ANR)],ND,0,T,[],0,0,0,0,["j",ASs(AEz)],NE,0,T,[],0,0,0,0,["j",ASs(ALC)],Lc,0,C,[],3,3,0,0,0,Ru,0,C,[Lc],4,3,0,0,0,Cd,0,Cr,[],
12,3,0,ABM,0,Np,0,C,[Bc],0,3,0,0,["m",ASs(AMD)],Mn,0,Gh,[],0,0,0,0,["b9",ASu(AG0),"cc",ASv(APJ),"eO",ASr(AFq)],Pk,0,Bn,[],0,3,0,0,0,Wd,0,Bn,[],0,3,0,0,0,Uk,0,FC,[],0,3,0,0,0,O$,0,FC,[],0,3,0,0,0,WV,0,Bn,[],0,3,0,0,0,Ue,0,C,[],0,3,0,0,0,N7,0,C,[Bi],0,3,0,0,0,RF,0,C,[Bc],0,3,0,0,0,RE,0,C,[Bc],0,3,0,0,0,Ui,0,C,[Lc],0,0,0,0,0,UN,0,C,[Bi],0,3,0,0,["q",ASr(AOp)],YP,0,C,[],0,3,0,0,0,O3,0,C,[],3,3,0,0,0]);
$rt_metadata([Wf,0,C,[O3],0,3,0,0,0,RY,0,T,[],0,0,0,0,["j",ASs(AOm)],L6,0,T,[],0,0,0,0,["j",ASs(AEj)],QW,0,T,[],0,0,0,0,["j",ASs(AD6)],QV,0,T,[],0,0,0,0,["j",ASs(AGX)],VV,0,T,[],0,0,0,0,["j",ASs(AIq)],N_,0,T,[],0,0,0,0,["j",ASs(AOq)],Ni,0,T,[],0,0,0,0,["j",ASs(AK2)],PL,0,T,[],0,0,0,0,["j",ASs(AMy)],LZ,0,T,[],0,0,0,0,["j",ASs(APk)],L4,0,T,[],0,0,0,0,["j",ASs(AF1)],M5,0,T,[],0,0,0,0,["j",ASs(AOB)],OB,0,T,[],0,0,0,0,["j",ASs(AJU)],OK,0,T,[],0,0,0,0,["j",ASs(AL1)],SO,0,T,[],0,0,0,0,["j",ASs(AOe)],Rw,0,T,[],0,0,
0,0,["j",ASs(AO5)],Mg,0,T,[],0,0,0,0,["j",ASs(AFN)],Lu,0,T,[],0,0,0,0,["j",ASs(AK5)],QO,0,Lu,[],0,0,0,0,["j",ASs(ANr)],O4,0,C,[Ik],0,3,0,0,["pq",ASr(AJt)],UV,0,C,[BU],0,3,0,0,["be",ASs(ALS)],UY,0,C,[BU],0,3,0,0,["be",ASs(AKF)],SA,0,C,[BU],0,3,0,0,["be",ASs(AHz)],SD,0,C,[BU],0,3,0,0,["be",ASs(ADy)],TF,0,C,[BU],0,3,0,0,["be",ASs(AJn)],Uv,0,C,[Bc],0,3,0,0,["m",ASs(ALz)],Us,0,C,[Bc],0,3,0,0,["m",ASs(AJr)],Ut,0,C,[Bc],0,3,0,0,["m",ASs(ALB)],XU,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.I4=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ",
"#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",
"Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","",
"","w = ",", lineHeight = ","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","#B9BDC9","#F7F8FA","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...",
"Development >","pointer","text","ew-resize","ns-resize","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1",
"Window 2","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","...","Find Usages","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","#A9B7C6","#40332B","#edebfc","#344134","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ",
"trying to display with unknown screen size and dpr","onContextMenu","#DFE1E5","#616161","#393B40","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile"," on Copy",".cpp",".cc",".cxx",".hpp",".c",".h",".js",
"jsToWasm1: a = ",", b = ","jsToWasm2: a = ","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","#BBBBBB","onEnter item ","#3C3F41","#4B6EAF","#2B2D30","\\n","defaultText","keyword","field","#9876AA","#6A8759","comma","#CC7832","error","unused","#72737A","#6897BB","method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080","annotation","#BBB529","type","#287BDE","operator","#5F8C8A","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'",
"\' ok","newAction must be non-null"," error: ","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","/","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace",
"javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement",
"Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation",
"SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows",
"Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri",
"HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po",
"IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in ","Verdana","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AEO(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Co=Long_add;var JR=Long_sub;var BM=Long_mul;var Dh=Long_div;var L9=Long_rem;var AQF=Long_or;var CT=Long_and;var AVu=Long_xor;var Fc=Long_shl;var Gc=Long_shr;var DW=Long_shru;var AQ1=Long_compare;var E2=Long_eq;var AVv=Long_ne;var AGm=Long_lt;var OY=Long_le;var AF5=Long_gt;var YH=Long_ge;var AVw=Long_not;var ARb=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ARf);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=SV.prototype;c.f=c.be;c=ST.prototype;c.f=c.be;c=Mx.prototype;c.f=c.be;c=Y_.prototype;c.get=c.EM;Object.defineProperty(c,"length",{get:c.D8});c=M6.prototype;c.f=c.be;c=XC.prototype;c.removeEventListener=c.Bq;c.dispatchEvent=c.zw;c.get=c.wR;c.addEventListener=c.x7;Object.defineProperty(c,"length",{get:c.zC});c=UP.prototype;c.onAnimationFrame=c.Bt;c=UJ.prototype;c.f=c.s5;c=UG.prototype;c.handleEvent=c.b4;c=UH.prototype;c.f=c.be;c=V6.prototype;c.accept=c.th;c=V7.prototype;c.accept=c.th;c=Vx.prototype;c.handleEvent
=c.b4;c=Vy.prototype;c.handleEvent=c.b4;c=Vz.prototype;c.handleEvent=c.b4;c=VA.prototype;c.handleEvent=c.b4;c=VB.prototype;c.handleEvent=c.b4;c=VC.prototype;c.handleEvent=c.b4;c=VD.prototype;c.handleEvent=c.b4;c=VE.prototype;c.handleEvent=c.b4;c=VF.prototype;c.handleEvent=c.b4;c=VG.prototype;c.handleEvent=c.b4;c=WP.prototype;c.handleEvent=c.b4;c=WQ.prototype;c.handleEvent=c.b4;c=WR.prototype;c.handleEvent=c.b4;c=WS.prototype;c.handleEvent=c.b4;c=Tu.prototype;c.handleEvent=c.b4;c=Wy.prototype;c.f=c.be;c=WA.prototype;c.f
=c.be;c=MF.prototype;c.f=c.be;c=ME.prototype;c.f=c.be;c=MD.prototype;c.f=c.be;c=MC.prototype;c.f=c.be;c=M0.prototype;c.accept=c.th;c=Om.prototype;c.f=c.s5;c=Ok.prototype;c.f=c.s5;c=PN.prototype;c.f=c.be;c=TK.prototype;c.f=c.be;c=L7.prototype;c.f=c.be;c=Wo.prototype;c.f=c.be;c=Wn.prototype;c.f=c.be;c=VQ.prototype;c.f=c.be;c=VP.prototype;c.f=c.be;c=Wi.prototype;c.handleEvent=c.b4;c=Pa.prototype;c.f=c.be;c=L3.prototype;c.onTimer=c.pq;c=LL.prototype;c.onTimer=c.pq;c=Wm.prototype;c.f=c.be;c=V9.prototype;c.f=c.be;c
=Tk.prototype;c.f=c.be;c=O4.prototype;c.onTimer=c.pq;c=UV.prototype;c.f=c.be;c=UY.prototype;c.f=c.be;c=SA.prototype;c.f=c.be;c=SD.prototype;c.f=c.be;c=TF.prototype;c.f=c.be;})();
}));
