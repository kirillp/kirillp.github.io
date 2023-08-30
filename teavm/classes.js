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
function $rt_cls(cls){return AAF(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FK(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bP.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AME(t);}
function $rt_throwableCause(t){return AMN(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ASf());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ASg(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ASh());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BD=$rt_compare;var ASi=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var Vg=$rt_isInstance;var ASj=$rt_nativeThread;var ASk=$rt_suspending;var ASl=$rt_resuming;var ASm=$rt_invalidPointer;var B=$rt_s;var Br=$rt_eraseClinit;var Bb=$rt_imul;var D9=$rt_wrapException;var ASn=$rt_checkBounds;var ASo=$rt_checkUpperBound;var ASp=$rt_checkLowerBound;var ASq=$rt_wrapFunction0;var ASr=$rt_wrapFunction1;var ASs=$rt_wrapFunction2;var ASt=$rt_wrapFunction3;var ASu=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var Zy=$rt_createCharArrayFromData;var AQ2=$rt_createByteArrayFromData;var ASv=$rt_createShortArrayFromData;var EW=$rt_createIntArrayFromData;var ASw=$rt_createBooleanArrayFromData;var ASx=$rt_createFloatArrayFromData;var ASy=$rt_createDoubleArrayFromData;var AE5=$rt_createLongArrayFromData;var ASe=$rt_createBooleanArray;var EZ=$rt_createByteArray;var ASz=$rt_createShortArray;var BQ=$rt_createCharArray;var BH=$rt_createIntArray;var ART=$rt_createLongArray;var ADk=$rt_createFloatArray;var ASA
=$rt_createDoubleArray;var BD=$rt_compare;var ASB=$rt_castToClass;var ASC=$rt_castToInterface;var ASD=Long_toNumber;var Z=Long_fromInt;var ASE=Long_fromNumber;var B_=Long_create;var Eg=Long_ZERO;var ASF=Long_hi;var Ey=Long_lo;
function C(){this.$id$=0;}
function ASG(){var a=new C();ABM(a);return a;}
function ABM(a){}
function Cm(a){return AAF(a.constructor);}
function AJP(a,b){return a!==b?0:1;}
function AEO(a){var b,c,d,e,f,g,h,i,j;b=Xe(a);if(!b)c=B(0);else{d=(((32-M3(b)|0)+4|0)-1|0)/4|0;e=BQ(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GV((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FK(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function Xe(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AI_(a){var b,c,d;if(!Vg(a,Ee)&&a.constructor.$meta.item===null){b=new UQ;U(b);J(b);}b=ADu(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function QF(){var a=this;C.call(a);a.s3=0;a.pu=null;}
function ARe(b){var c,d,e,f,g,h,i,j,k,l;ABJ();Xw();Z9();AA5();YP();ABr();Xk();ABP();AC5();Xm();AAU();AAp();AAV();ZL();YW();Ye();Zj();Zl();Zd();XG();ZT();ACM();c=(XJ()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Om(B(2),B(3));else{d=new QF;BI(d);e=new SW;e.rc=d;f=new My;c=new $rt_globals.Worker("teavm/worker.js");g=new M7;g.nW=c;g.nX=e;g.nY=f;e=Bk(g,"f");c.onmessage=e;h=H(K8,[Je(B(4),B(5),400),Je(B(6),B(7),400),Je(B(8),B(5),700),Je(B(9),
B(7),700)]);b=R(K8,1);b.data[0]=ANy(B(10),E3(B(11),B(12)),B(5),400);b=(K4(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.qH;f=c.po;k=new M;O(k);BA(G(G(k,B(13)),f),41);k=N(k);f=c.pi;l=c.nJ;f=AG9($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BI(d);c=new SX;c.r9=d;g=new SV;e.then(Bk(c,"f"),Bk(g,"f"));}}
function ZQ(b){var c,d,e,f,g,h,i,j,k;c=new RO;d=new QS;c.oI=new $rt_globals.TextDecoder("utf-16");e=new UP;e.nF=c;c.qj=e;e=new UI;e.tg=c;c.lM=e;f=new UJ;f.p_=c;c.sj=new $rt_globals.ResizeObserver(Bk(f,"f"));e=new UG;e.nf=c;c.mp=e;c.hM=1;f=new Ok;f.vY=null;f.i3=ASH;c.ln=f;c.o4=b;f=new UH;f.ss=c;e=Bk(f,"f");b.onmessage=e;e=ZK();b.postMessage(e);c.mj=(DX()).getElementById("canvasDiv");b=XJ();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dk
=b;c.mj.appendChild(b);f=c.dk;e=AK7(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)Om(B(2),B(14));else{g=new OK;e=c.dk;f=c.lM;g.de=null;g.gJ=e;g.cb=ARo(f);h=$rt_globals.window;i=R(Dk,14);j=i.data;k=new Vx;k.mE=g;j[0]=CQ(g,e,B(15),k);f=new Vy;f.qT=g;j[1]=CQ(g,e,B(16),f);f=new Vz;f.nr=g;j[2]=CQ(g,e,B(17),f);f=new VA;f.ta=g;j[3]=CQ(g,e,B(18),f);f=new VB;f.p2=g;j[4]=CQ(g,e,B(19),f);f=new VC;f.mY=g;j[5]=CQ(g,e,B(20),f);k=new VD;k.tn=g;j[6]=CQ(g,e,B(21),k);k=new VE;k.qb=g;j[7]=CQ(g,e,B(22),k);k=new VF;k.m6
=g;j[8]=CQ(g,e,B(23),k);k=new VG;k.sB=g;j[9]=CQ(g,e,B(24),k);k=new WO;k.rV=g;j[10]=CQ(g,e,B(25),k);k=new WP;k.q8=g;j[11]=AAP(g,h,B(26),k,1);k=new WQ;k.l8=g;j[12]=CQ(g,h,B(27),k);k=new WR;k.sO=g;j[13]=CQ(g,h,B(28),k);g.vj=AOR(i);Y7(g,e);c.k0=g;c.fH=AQO(b,c.lM);ANe(c.sj,c.dk);e=$rt_globals.window;g=c.mp;e.addEventListener("resize",Bk(g,"handleEvent"));c.eX=Z5(d,YY(c));Sm(c);}ABi(c);}
var Mr=F(0);
var LU=F(0);
function Vs(){var a=this;C.call(a);a.jR=null;a.fu=null;}
function AAF(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Vs;c.fu=b;d=c;b.classObject=d;}return c;}
function HD(a){if(a.jR===null)a.jR=$rt_str(a.fu.$meta.name);return a.jR;}
function Hu(a){return a.fu.$meta.primitive?1:0;}
function HK(a){return AAF(a.fu.$meta.item);}
var Yi=F();
function Bk(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function KJ(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var X4=F();
function ADu(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AAJ(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AAJ(d[e],c))return 1;e=e+1|0;}return 0;}
function Gk(){var a=this;C.call(a);a.g4=null;a.kq=null;a.iE=0;a.i5=0;}
function ASI(){var a=new Gk();U(a);return a;}
function ASJ(a){var b=new Gk();Bl(b,a);return b;}
function U(a){a.iE=1;a.i5=1;}
function Bl(a,b){a.iE=1;a.i5=1;a.g4=b;}
function AGQ(a){return a;}
function AME(a){return a.g4;}
function AMN(a){var b;b=a.kq;if(b===a)b=null;return b;}
var DS=F(Gk);
var Bn=F(DS);
function ASg(a){var b=new Bn();AOz(b,a);return b;}
function AOz(a,b){Bl(a,b);}
var ZP=F(Bn);
var C_=F(0);
var CI=F(0);
var Il=F(0);
function Bv(){var a=this;C.call(a);a.bP=null;a.hn=0;}
var ASK=null;var ASL=null;var ASM=null;function EF(){EF=Br(Bv);AN8();}
function AHw(){var a=new Bv();Xo(a);return a;}
function FK(a){var b=new Bv();G4(b,a);return b;}
function Jc(a,b,c){var d=new Bv();LH(d,a,b,c);return d;}
function Xo(a){EF();a.bP=ASK;}
function G4(a,b){EF();LH(a,b,0,b.data.length);}
function LH(a,b,c,d){var e;EF();e=BQ(d);a.bP=e;Do(b,c,e,0,d);}
function LC(b){var c;EF();c=AHw();c.bP=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bP.data;if(b<c.length)return c[b];}d=new GT;U(d);J(d);}
function I(a){return a.bP.data.length;}
function Fe(a){return a.bP.data.length?0:1;}
function O1(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=I(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Do(a.bP,b,d,e,c);return;}}g=new Bw;U(g);J(g);}
function Tr(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function J4(a,b){if(a===b)return 1;return Tr(a,b,0);}
function D6(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Gr(a,b,c){var d,e,f,g,h;d=Ba(0,c);if(b<65536){e=b&65535;while(true){f=a.bP.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=HF(b);h=Ic(b);while(true){f=a.bP.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FP(a,b,c){var d,e,f,g,h;d=W(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bP.data[d]==e)break;d=d+(-1)|0;}return d;}f=HF(b);g=Ic(b);while(true){if(d<1)return (-1);h=a.bP.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function YI(a,b,c){var d,e,f;d=Ba(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function O0(a,b,c){var d,e;d=W(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function B8(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new Bw;U(e);J(e);}if(!d){EF();return ASL;}if(!b&&c==I(a))return a;return Jc(a.bP,b,c-b|0);}
function Db(a,b){return B8(a,b,I(a));}
function O7(a,b,c){return B8(a,b,c);}
function E3(a,b){var c,d,e,f,g,h;if(Fe(b))return a;if(Fe(a))return b;c=BQ(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return LC(c);}
function Ui(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BA(d,L(a,f));}f=f+1|0;}G(d,Db(a,f));return N(d);}
function QX(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B8(a,b,c+1|0);}
function AEN(a){return a;}
function Gi(a){var b,c,d,e,f;b=a.bP.data;c=BQ(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Ct(b){EF();return b===null?B(29):b.cj();}
function C0(b){var c;EF();c=new M;O(c);return N(S(c,b));}
function Bo(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function KH(a){var b,c,d,e;a:{if(!a.hn){b=a.bP.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hn=(31*a.hn|0)+e|0;d=d+1|0;}}}return a.hn;}
function Lg(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Go;Bl(b,B(30));J(b);}ASN=1;d=new P6;d.jD=R(CN,10);d.fQ=(-1);d.eb=(-1);d.bp=(-1);e=new Gt;e.d$=1;e.bD=b;e.X=BQ(I(b)+2|0);Do(Gi(b),0,e.X,0,I(b));f=e.X.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.p3=g;e.fx=0;EU(e);EU(e);d.g=e;d.c6=0;d.kC=WM(d,(-1),0,null);if(!Da(d.g)){b=new If;h=d.g;IM(b,B(31),h.bD,h.cQ);J(b);}if(d.mG)d.kC.dP();b=Cl();h=new Rx;h.hL=(-1);h.j0=(-1);h.un=d;h.sd=d.kC;h.h6=a;h.hL=0;g=I(a);h.j0=g;e=new Uk;i=h.hL;j=d.fQ;k=d.eb+1|0;l=d.bp+1|0;e.g9
=(-1);m=j+1|0;e.nn=m;e.dj=BH(m*2|0);f=BH(l);e.i1=f;Hb(f,(-1));if(k>0)e.kr=BH(k);Hb(e.dj,(-1));WE(e,a,i,g);h.ci=e;e.eK=1;n=0;m=0;if(!I(a)){f=R(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.h6);if(!Xz(h))l=h.j0;e=h.ci;if(e.dN>=0&&Zb(e)==1){e=h.ci;e.dN=Iz(e);if(Iz(h.ci)==AA4(h.ci)){e=h.ci;e.dN=e.dN+1|0;}g=h.ci.dN;g=g<=l&&L3(h,g)?1:0;}else g=L3(h,h.hL);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BX(b,O7(a,m,ACt(h)));m=YS(h);n=g;}a:{BX(b,O7(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bs(b,g)))break a;Ef(b,
g);}}if(g<0)g=0;f=Hn(b,R(Bv,g));}return f;}
function AG0(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=W(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AN8(){ASK=BQ(0);ASL=AHw();ASM=new RY;}
var EA=F(Gk);
var GW=F(EA);
var Zq=F(GW);
var DL=F();
function E7(){DL.call(this);this.e8=0;}
var ASO=null;var ASP=null;function AB5(a){var b=new E7();Jp(b,a);return b;}
function Jp(a,b){a.e8=b;}
function I1(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new C9;Bl(b,B(32));J(b);}d=I(b);if(0==d){b=new C9;Bl(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new C9;U(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=Od(L(b,f));if(i<0){j=new C9;k=B8(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bl(j,N(b));J(j);}if(i>=c){j=new C9;l=B8(b,0,d);b=new M;O(b);G(G(S(G(b,B(35)),c),B(36)),l);Bl(j,N(b));J(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new C9;k=B8(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bl(j,N(b));J(j);}b=new C9;j=new M;O(j);S(G(j,B(38)),c);Bl(b,N(j));J(b);}
function FO(b){var c,d;if(b>=(-128)&&b<=127){a:{if(ASP===null){ASP=R(E7,256);c=0;while(true){d=ASP.data;if(c>=d.length)break a;d[c]=AB5(c-128|0);c=c+1|0;}}}return ASP.data[b+128|0];}return AB5(b);}
function Lp(a){var b;b=a.e8;return (MP(AR3(20),b,10)).cj();}
function M3(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HT(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function JE(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AI6(a,b){b=b;return BD(a.e8,b.e8);}
function ABJ(){ASO=E($rt_intcls());}
function F8(){var a=this;C.call(a);a.z=null;a.K=0;}
function ASQ(){var a=new F8();O(a);return a;}
function AR3(a){var b=new F8();FM(b,a);return b;}
function O(a){FM(a,16);}
function FM(a,b){a.z=BQ(b);}
function MP(a,b,c){return ZE(a,a.K,b,c);}
function ZE(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ca(a,b,b+1|0);else{Ca(a,b,b+2|0);f=a.z.data;g=b+1|0;f[b]=45;b=g;}a.z.data[b]=GV(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ca(a,b,b+i|0);if(e)e=b;else{f=a.z.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.z.data;b=e+1|0;f[e]=GV($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AAv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){Ca(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ca(a,b,b+4|0);e=a.z.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ca(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ca(a,b,b+8|0);d=b;}else{Ca(a,b,b+9|0);e=a.z.data;d=b+1|0;e[b]=45;}e=a.z.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=ASR;AAq(c,f);d=f.j6;g=f.jM;h=f.mV;i=1;j=1;if(h)j=2;k=9;l=AND(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Ba(k,i+1|0);g=0;}else{d=d/ASS.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ca(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.z.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.z.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.z.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function YB(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){Ca(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ca(a,b,b+4|0);e=a.z.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ca(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ca(a,b,b+8|0);d=b;}else{Ca(a,b,b+9|0);e=a.z.data;d=b+1|0;e[b]=45;}e=a.z.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AST;ZI(c,f);g=f.kE;h=f.jw;i=f.mB;j=1;k=1;if(i)k=2;l=18;m=ALv(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Ba(l,j+1|0);h=0;}else{g=Dh(g,ASU.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ca(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.z.data;k=b+1|0;e[b]=45;}n=B_(1569325056, 23283064);o=0;while(o<l){if(OZ(n,Eg))d=0;else{d=Ey(Dh(g,n));g=
L$(g,n);}e=a.z.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Dh(n,Z(10));o=o+1|0;}if(h){e=a.z.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AND(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ALv(b){var c,d,e,f,g;c=Z(1);d=0;e=16;f=ASV.data;g=f.length-1|0;while(g>=0){if(E2(L$(b,BM(c,f[g])),Eg)){d=d|e;c=BM(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BA(a,b){return a.lu(a.K,b);}
function Wt(a,b,c){Ca(a,b,b+1|0);a.z.data[b]=c;return a;}
function I4(a,b){var c,d;c=a.z.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.z=XF(a.z,d);}
function N(a){return Jc(a.z,0,a.K);}
function Wb(a,b,c,d){return a.kZ(a.K,b,c,d);}
function Ml(a,b,c,d,e){var f,g,h,i;Ca(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.z.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HV(a,b){return a.kc(b,0,b.data.length);}
function Ca(a,b,c){var d,e,f,g;d=a.K;e=d-b|0;a.hh((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.z.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.K=a.K+(c-b|0)|0;}
var Hx=F(0);
var M=F(F8);
function K_(){var a=new M();AOZ(a);return a;}
function AOZ(a){O(a);}
function G(a,b){var c;c=a.K;if(b===null)b=B(29);LD(a,c,b);return a;}
function BY(a,b){LD(a,a.K,b);return a;}
function S(a,b){MP(a,b,10);return a;}
function Hv(a,b){var c,d,e,f,g,h,i,j;c=a.K;d=1;if(AGm(b,Eg)){d=0;b=ARa(b);}a:{if(KD(b,Z(10))<0){if(d)Ca(a,c,c+1|0);else{Ca(a,c,c+2|0);e=a.z.data;f=c+1|0;e[c]=45;c=f;}a.z.data[c]=GV(Ey(b),10);}else{g=1;h=Z(1);i=Fw(Z(-1),Z(10));b:{while(true){j=BM(h,Z(10));if(KD(j,b)>0){j=h;break b;}g=g+1|0;if(KD(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ca(a,c,c+g|0);if(d)f=c;else{e=a.z.data;f=c+1|0;e[c]=45;}while(true){if(E2(j,Eg))break a;e=a.z.data;c=f+1|0;e[f]=GV(Ey((Fw(b,j))),10);b=MN(b,j);j=Fw(j,Z(10));f=c;}}}return a;}
function E$(a,b){AAv(a,a.K,b);return a;}
function Xi(a,b){BA(a,b);return a;}
function FT(a,b){LD(a,a.K,!b?B(39):B(40));return a;}
function ACj(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.K;if(b<=e){if(d){f=e-c|0;a.K=e-(c-b|0)|0;g=0;while(g<f){h=a.z.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GT;U(i);J(i);}
function Vf(a,b){var c,d,e,f;if(b>=0){c=a.K;if(b<c){c=c-1|0;a.K=c;while(b<c){d=a.z.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GT;U(f);J(f);}
function AI1(a,b,c,d,e){Ml(a,b,c,d,e);return a;}
function AF9(a,b,c,d){Wb(a,b,c,d);return a;}
function XS(a){return a.K;}
function DI(a){return N(a);}
function AI9(a,b){I4(a,b);}
function AJB(a,b,c){Wt(a,b,c);return a;}
function LD(a,b,c){var d,e,f;if(b>=0&&b<=a.K){a:{if(c===null)c=B(29);else if(Fe(c))break a;I4(a,a.K+I(c)|0);d=a.K-1|0;while(d>=b){a.z.data[d+I(c)|0]=a.z.data[d];d=d+(-1)|0;}a.K=a.K+I(c)|0;d=0;while(d<I(c)){e=a.z.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new GT;U(c);J(c);}
var Ej=F(GW);
var AAO=F(Ej);
function ASW(a){var b=new AAO();AEY(b,a);return b;}
function AEY(a,b){Bl(a,b);}
var Zg=F(Ej);
function ASX(a){var b=new Zg();AFj(b,a);return b;}
function AFj(a,b){Bl(a,b);}
var SN=F(0);
var Dk=F(0);
function AOR(b){var c;c=new Ps;c.uA=b;return c;}
function CF(b,c){if(b!==null)b.dZ();return c;}
var N$=F(0);
function H6(){var a=this;C.call(a);a.la=0;a.ko=0;}
var ASY=0;function FE(a){ASY=ASY-1|0;}
function FQ(a,b,c){II(a,Yu(b,c,400,0));}
function PZ(a,b){return Kb(a,b,0.875);}
function Kb(a,b,c){return Ei(a,b)+c|0;}
function Qs(){var a=this;H6.call(a);a.i9=null;a.bk=null;a.mc=null;}
function Eq(a){var b,c,d;b=a.bk;c=a.la;d=a.ko;b.clearRect(0.0,0.0,c,d);}
function Rd(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bk;d="center";c.textAlign=d;break a;case 2:c=a.bk;d="right";c.textAlign=d;break a;default:break a;}d=a.bk;c="left";d.textAlign=c;}}
function Cu(a,b){II(a,Jh(b.ms));}
function II(a,b){var c;if(!(a.mc==b?1:0)){c=a.bk;a.mc=b;c.font=b;}}
function Yu(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Cf(a,b,c,d){var e,f,g;e=a.bk;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function AA2(a,b){var c,d;if(!b){c=a.bk;d="alphabetic";c.textBaseline=d;}else{d=a.bk;c="top";d.textBaseline=c;}}
function Ei(a,b){var c;c=$rt_ustr(b);return a.bk.measureText(c).width;}
function KO(a,b,c,d){var e,f;e=a.bk;f=$rt_ustr(FK(Zy([35,Gq(b/16|0),Gq(b%16|0),Gq(c/16|0),Gq(c%16|0),Gq(d/16|0),Gq(d%16|0)])));e.fillStyle=f;}
var Xx=F();
var AB1=F();
function Dg(b,c){if(b===c)return 1;return b!==null?b.dA(c):c!==null?0:1;}
function BI(b){if(b!==null)return b;b=new Go;Bl(b,B(31));J(b);}
var Bc=F(0);
function SW(){C.call(this);this.rc=null;}
var Bt=F(0);
var Z4=F();
var XC=F(0);
function Je(b,c,d){return ANy(B(41),E3(B(11),b),c,d);}
var ABz=F(0);
var ABu=F(0);
function K4(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dc(b,f+g|0);Do(c,0,d,f,g);return d;}
function Km(b,c,d){Do(b,c,d,0,d.data.length);return d;}
function Qc(b,c,d){var e;if(c>0)Do(b,0,d,0,c);e=d.data.length;if(c<e)Do(b,c+1|0,d,c,e-c|0);return d;}
function Zk(b,c,d,e){var f;if(c>0)Do(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Do(b,d,e,c,f-d|0);}return e;}
function FH(b){var c;c=new U8;c.ig=b;return c;}
function K8(){var a=this;C.call(a);a.qH=null;a.po=null;a.pi=null;a.nJ=0;}
function ANy(a,b,c,d){var e=new K8();AMu(e,a,b,c,d);return e;}
function AMu(a,b,c,d,e){a.qH=b;a.po=c;a.pi=d;a.nJ=e;}
var Yf=F();
function AG9(b,c){return {style:b,weight:c};}
var BU=F(0);
function SX(){C.call(this);this.r9=null;}
function AC9(a,b){var c,d,e;c=a.r9;d=0;while(d<b.length){e=b[d];(DX()).fonts.add(e);d=d+1|0;}c.s3=1;b=c.pu;if(b!==null)ZQ(b);}
var SV=F();
function AOe(a,b){$rt_globals.console.info("font load error "+b);}
var KM=F();
var ASZ=null;var AS0=null;function By(){if(ASZ===null)ASZ=AKm(AS1,0);return ASZ;}
function K2(){if(AS0===null)AS0=AKm(AS2,0);return AS0;}
function AQ6(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KP(b)&&(e+f|0)<=KP(d)){a:{b:{if(b!==d){g=HK(Cm(b));h=HK(Cm(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hu(g)&&!Hu(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fu;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AAJ(n.constructor,o)?1:0)){J6(b,c,d,e,j);b=new Id;U(b);J(b);}j=j+1|0;k=m;}J6(b,c,d,e,f);return;}if(!Hu(g))break a;if(Hu(h))break b;else break a;}b=new Id;U(b);J(b);}}J6(b,c,
d,e,f);return;}b=new Id;U(b);J(b);}b=new Bw;U(b);J(b);}d=new Go;Bl(d,B(42));J(d);}
function Do(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KP(b)&&(e+f|0)<=KP(d)){J6(b,c,d,e,f);return;}b=new Bw;U(b);J(b);}
function J6(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Fu(){return Long_fromNumber(new Date().getTime());}
function AA6(){return ASE($rt_globals.performance.now()*1000000.0);}
var ABq=F();
var YU=F();
function Om(b,c){var d,e,f;d=(DX()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DX()).getElementById($rt_ustr(b)).appendChild(d);}
function XJ(){return (DX()).createElement("canvas");}
function AK7(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AC2=F();
var My=F();
function AKQ(a,b){var c;c=new Bn;Bl(c,$rt_str(b.message));J(c);}
var ABQ=F();
function Fs(b){return $rt_str(b);}
var XN=F();
function XF(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=W(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACe(b,c){var d,e,f,g;b=b.data;d=EZ(c);e=d.data;f=W(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACG(b,c){var d,e,f,g;b=b.data;d=BH(c);e=d.data;f=W(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dc(b,c){var d,e,f,g;d=b.data;e=TO(HK(Cm(b)),c);f=W(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Ys(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));G(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function AA1(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));S(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function AM4(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));E$(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function APH(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));f=e[d];YB(c,c.K,f);d=d+1|0;}BY(c,B(45));return N(c);}
function Hb(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BC;U(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function YQ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=ASH;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=W(j,h+f|0);l=h+(2*f|0)|0;m=W(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.lD(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AAw(b,c){return S5(b,0,b.data.length,c);}
function S5(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BC;U(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Jd=F(0);
var Y$=F();
function APq(a,b){return a.uh(b);}
function AE8(a){return a.vK();}
var ZC=F();
var FD=F(0);
var RY=F();
var Bw=F(Bn);
var AAu=F();
function KP(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AS3());}return b.data.length;}
function TO(b,c){if(b===null){b=new Go;U(b);J(b);}if(b===E($rt_voidcls())){b=new BC;U(b);J(b);}if(c>=0)return AOE(b.fu,c);b=new W0;U(b);J(b);}
function AOE(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Go=F(Bn);
var Id=F(Bn);
var C2=F();
var AS4=null;var AS5=null;var AS6=null;var AS7=null;var AS8=null;var AS9=null;var AS$=null;var AS_=null;var ATa=null;var ATb=null;function V3(b){var c,d;c=new Bv;d=BQ(1);d.data[0]=b;G4(c,d);return c;}
function Lm(b){return b>=65536&&b<=1114111?1:0;}
function CC(b){return (b&64512)!=55296?0:1;}
function CZ(b){return (b&64512)!=56320?0:1;}
function Lr(b){return !CC(b)&&!CZ(b)?0:1;}
function G3(b,c){return CC(b)&&CZ(c)?1:0;}
function Em(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function HF(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ic(b){return (56320|b&1023)&65535;}
function EO(b){return Gn(b)&65535;}
function Gn(b){if(AS7===null){if(AS$===null)AS$=AA0();AS7=Zn((AS$.value!==null?$rt_str(AS$.value):null));}return RF(AS7,b);}
function Er(b){return Gm(b)&65535;}
function Gm(b){if(AS6===null){if(AS_===null)AS_=ABK();AS6=Zn((AS_.value!==null?$rt_str(AS_.value):null));}return RF(AS6,b);}
function RF(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function TW(b,c){if(c>=2&&c<=36){b=Od(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Od(b){var c,d,e,f,g,h,i,j,k,l;if(AS5===null){if(ATa===null)ATa=Zs();c=(ATa.value!==null?$rt_str(ATa.value):null);d=AMO(Gi(c));e=Jb(d);f=BH(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Mt(d)|0;j=j+Mt(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AS5=f;}g=AS5.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GV(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gf(b){var c;if(b<65536){c=BQ(1);c.data[0]=b&65535;return c;}return Zy([HF(b),Ic(b)]);}
function Cp(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Lr(b&65535))return 19;if(AS8===null){if(ATb===null)ATb=ACQ();d=(ATb.value!==null?$rt_str(ATb.value):null);e=R(MI,16384);f=e.data;g=EZ(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=J5(L(d,l));if(m==64){l=l+1|0;m=J5(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,J5(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=J5(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AGX(k,k+i|0,ACe(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AGX(k,k+i|0,ACe(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AS8=Dc(e,j);}e=AS8.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.pN)o=p+1|0;else{c=d.nU;if(b>=c)return d.n9.data[b-c|0];c=p-1|0;}}return 0;}
function IY(b){a:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gb(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cp(b)!=16?0:1;}
function OM(b){switch(Cp(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function P7(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return OM(b);}return 1;}
function Xw(){AS4=E($rt_charcls());AS9=R(C2,128);}
function AA0(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ABK(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Zs(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ACQ(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var LN=F(0);
var RE=F(0);
var D$=F(0);
var AB0=F(0);
function DX(){return $rt_globals.window.document;}
function M7(){var a=this;C.call(a);a.nW=null;a.nX=null;a.nY=null;}
function ALS(a,b){var c,d,e;c=a.nW;d=a.nX;e=a.nY;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=Jh(J8(c));c=d.rc;c.pu=b;if(c.s3)ZQ(b);}}
var ZA=F();
function Fk(){return APr();}
function APr(){return Math.random();}
function W(b,c){if(b<c)c=b;return c;}
function Ba(b,c){if(b>c)c=b;return c;}
function LY(b){if(b<=0)b= -b|0;return b;}
var OA=F(0);
var Qi=F(0);
var P_=F(0);
var SI=F(0);
var Wc=F(0);
var TX=F(0);
var NR=F(0);
var XB=F();
function AJx(a,b,c){a.B3($rt_str(b),KJ(c,"handleEvent"));}
function AJR(a,b,c){a.zj($rt_str(b),KJ(c,"handleEvent"));}
function AD$(a,b){return a.uh(b);}
function AKV(a,b,c,d){a.xC($rt_str(b),KJ(c,"handleEvent"),d?1:0);}
function AOx(a,b){return !!a.B8(b);}
function AE_(a){return a.vK();}
function ADt(a,b,c,d){a.AK($rt_str(b),KJ(c,"handleEvent"),d?1:0);}
var BC=F(Bn);
var W0=F(Bn);
var GT=F(Bw);
var YF=F();
function ZK(){return "ping";}
function DV(){C.call(this);this.iA=null;}
var ATc=null;var ATd=null;var ATe=null;var ATf=null;var ATg=null;var ATh=null;function JW(){JW=Br(DV);AFh();}
function Mf(a){var b=new DV();AAj(b,a);return b;}
function AAj(a,b){JW();a.iA=b;}
function J8(b){var c,d,e,f,g;JW();if(b===null)return null;a:{c=b;if(ATd!==null){d=$rt_str(typeof c);if(!Bo(d,B(46))&&!Bo(d,B(47))){if(Bo(d,B(48))){b=ATe.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Mf(c);g=f;b=ATe;e=new $rt_globals.WeakRef(g);b.set(c,e);ATg.register(g,c);return f;}if(!Bo(d,B(49)))break a;else{b=ATf.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Mf(c);g=f;b=ATf;e=new $rt_globals.WeakRef(g);b.set(c,
e);ATh.register(g,c);return f;}}b=ATd.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Mf(c);b=ATd;e=new $rt_globals.WeakRef(f);b.set(c,e);return f;}}return Mf(c);}
function Jh(b){JW();if(b!==null)return b.iA;return null;}
function AOk(a,b){if(b===a)return 1;if(b===null)return 0;if(!(b instanceof DV))return 0;return a.iA!==b.iA?0:1;}
function AFh(){ATc=new $rt_globals.WeakMap();ATd=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();ATe=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATf=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATg=ATe===null?null:new $rt_globals.FinalizationRegistry(Bk(new V6,"accept"));ATh=ATf===null?null:new $rt_globals.FinalizationRegistry(Bk(new V7,"accept"));}
var NQ=F(0);
function RO(){var a=this;C.call(a);a.oI=null;a.qj=null;a.lM=null;a.mj=null;a.dk=null;a.sj=null;a.mp=null;a.k0=null;a.fH=null;a.hM=0;a.u1=0;a.pH=null;a.eX=null;a.o4=null;a.ln=null;a.rf=0;}
function ABi(a){a.dk.focus();}
function MS(a,b){var c;c=DX();b=$rt_ustr(b);c.title=b;}
function YY(a){var b,c,d;b=new LP;c=a.fH;d=a.k0.cb;b.bb=c;b.n=d;b.bU=a;return b;}
function Sm(a){a.u1=$rt_globals.requestAnimationFrame(Bk(a.qj,"onAnimationFrame"));}
function FS(a){a.hM=1;}
function Sl(a,b,c){var d,e;a.k0.de=B0(b,c);d=a.dk;e=b;d.width=e;d=a.dk;e=c;d.height=e;d=a.fH;Bg(d.dq,b,c);e=d.bz;d=d.dq;b=d.b;c=d.a;e.viewport(0,0,b,c);a.eX.ca(a.fH.dq,J7(a));a.eX.bS();}
function Gh(a,b){var c,d,e;c=a.pH;d=a.dk;if(Dg(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.pH=b;}
function IW(a){return $rt_globals.performance.now()/1000.0;}
function J7(a){return $rt_globals.window.devicePixelRatio;}
function U9(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ACp(b,1);else{c=new VQ;d=$rt_globals.window.showDirectoryPicker();e=new VP;e.n0=b;e.n1=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function Lb(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ACp(b,0);else{c=new Wo;d=$rt_globals.window.showOpenFilePicker();e=new Wn;e.oG=b;e.oF=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function C1(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.rf+1|0;a.rf=e;f=a.ln;g=FO(e);f.hl=Lo(f,f.hl,g);g=T4(f,g);LQ(g,b);LQ(g,b);f.i8=f.i8+1|0;b=a.o4;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(Vg(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(Vg(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(Vg(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof Ku)){b=new BC;c=HD(Cm(c));f
=new M;O(f);G(G(f,B(50)),c);Bl(b,N(f));J(b);}c=c;f=c.gi;if(f===null)f=c.eD;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function P0(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new PQ;e.mt=b;b=ACZ(c);d.then(Bk(e,"f"),Bk(b,"f"));}
function Tt(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.oI;b=(Gi(b)).data;f=f.decode(b);b=e.writeText(f);e=new TM;e.qU=c;c=ACZ(d);b.then(Bk(e,"f"),Bk(c,"f"));}
function WB(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function ACZ(b){var c;c=new L8;c.q6=b;return c;}
var Ci=F(0);
var QS=F();
function Z5(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Bo(B(51),c))d=(ANr(I(c)<=0?B(31):Db(c,1))).ce(b);else{d=new Mw;Ea(d,b);b=$rt_globals.fetch("test.wasm");e=new MG;b=b.then(Bk(e,"f"));e=new MF;b=b.then(Bk(e,"f"));e=new ME;f=new MD;b.then(Bk(e,"f"),Bk(f,"f"));}return d;}
var Bi=F(0);
var ZZ=F();
var Za=F();
var Zx=F();
var Qd=F(0);
function UP(){C.call(this);this.nF=null;}
function AIa(a,b){var c,d;c=b;b=a.nF;if(!(!b.eX.c3(c/1000.0)&&!b.hM)){d=b.fH.dq;if(Bb(d.b,d.a)){b.hM=0;b.eX.bS();}}Sm(b);}
function UI(){C.call(this);this.tg=null;}
function C$(a){FS(a.tg);}
var Pk=F(0);
function UJ(){C.call(this);this.p_=null;}
function AGq(a,b,c){var d,e,f,g;c=a.p_;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dk){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=J7(c);Sl(c,GY(f.width*g),GY(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Sl(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AB7=F();
function ANe(b,c){AMe(b,c,ADC());}
function ADC(){return {box:'device-pixel-content-box'};}
function AMe(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Ch=F(0);
function UG(){C.call(this);this.nf=null;}
function AL0(a,b){b=a.nf;b.eX.ca(b.fH.dq,J7(b));b.eX.bS();}
var Kr=F(0);
function Ev(){C.call(this);this.jX=null;}
var Ee=F(0);
var WA=F(0);
var Mq=F(0);
function Ok(){var a=this;Ev.call(a);a.hl=null;a.i3=null;a.vY=null;a.i8=0;}
function T4(a,b){var c,d;c=a.hl;while(true){if(c===null)return null;d=I0(a.i3,b,c.io);if(!d)break;c=d>=0?c.bQ:c.bF;}return c;}
function Lo(a,b,c){var d,e;if(b===null){b=new IV;d=null;b.io=c;b.hP=d;b.e3=1;b.fa=1;return b;}e=I0(a.i3,c,b.io);if(!e)return b;if(e>=0)b.bQ=Lo(a,b.bQ,c);else b.bF=Lo(a,b.bF,c);D_(b);return Ja(b);}
function JB(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=I0(a.i3,c,b.io);if(d<0)b.bF=JB(a,b.bF,c);else if(d>0)b.bQ=JB(a,b.bQ,c);else{e=b.bQ;if(e===null)return b.bF;f=b.bF;g=R(IV,e.e3).data;h=0;while(true){b=e.bF;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bQ;while(h>0){h=h+(-1)|0;j=g[h];j.bF=b;D_(j);b=Ja(j);}e.bQ=b;e.bF=f;D_(e);b=e;}D_(b);return Ja(b);}
function UH(){C.call(this);this.ss=null;}
function ANb(a,b){var c,d,e,f,g,h,i,j,k;c=a.ss.ln;b=b.data;if(!(b===ZK()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BC;U(b);J(b);}if(b.length<1){b=new BC;U(b);J(b);}d=FO(b[0]);e=T4(c,d);if(e===null)c=null;else{c.hl=JB(c,c.hl,d);c.i8=c.i8+1|0;c=e.hP;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=Fs(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new RU;ABM(e);e.gZ=k;}else e=(k instanceof $rt_globals.File?1:0)?AAA(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AAA(k,null);g[h]=e;h=j;}c.m(f);}}
var ACr=F();
var ACX=F();
var Ji=F(0);
var V6=F();
function AMi(a,b){JW();ATe.delete(b);}
var Zp=F();
var V7=F();
function AKa(a,b){JW();ATf.delete(b);}
function OK(){var a=this;C.call(a);a.cb=null;a.gJ=null;a.vj=null;a.de=null;}
function Mn(){return (DX()).activeElement;}
function CQ(a,b,c,d){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"));return VY(a,b,c,d);}
function AAP(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"),!!e);return VY(a,b,c,d);}
function VY(a,b,c,d){var e;e=new Pg;e.t9=b;e.t_=c;e.t$=d;return e;}
function SZ(a,b){var c;c=new T7;c.s_=b;return c;}
function Ew(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gJ.getBoundingClientRect();e=B0(GY((b.clientX-d.left)*c),GY((b.clientY-d.top)*c));f=new Bh;g=a.de;f.b=g.b;f.a=g.a;d=new LK;Tu(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.k=e;d.tN=f;return d;}
function WT(a,b,c){var d,e,f,g;d=new Oc;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Tu(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.js=0;d.dm=e;d.bj=f;d.g6=c;d.qk=g;return d;}
function DC(a,b){b.stopPropagation();b.preventDefault();}
function Y7(a,b){var c;c=new Wy;c.og=b;b.onpointerdown=Bk(c,"f");c=new Wz;c.nj=b;b.onpointerup=Bk(c,"f");}
function KF(){var a=this;C.call(a);a.pF=null;a.cr=null;a.bz=null;a.rt=null;a.uG=0;a.vH=0;a.i_=null;a.wb=null;a.vV=null;a.uY=null;a.fM=null;a.g5=null;a.v3=null;a.nK=null;a.dq=null;a.sZ=null;a.kR=0;a.jo=0;a.lv=0;a.lg=0;a.hF=0;a.lt=null;}
function G2(a,b,c){return GA(a,b,c,400,0);}
function CL(a,b,c){return LX(a.pF,b,c);}
function Fj(a,b){var c,d,e,f,g;c=a.bz;d=b.bg;e=b.bv;f=b.bc;g=b.bw;c.clearColor(d,e,f,g);a.bz.clear(16384);}
function CK(a,b){var c;if(b==a.jo)return b;if(!b)a.bz.disable(3042);else{a.bz.enable(3042);a.bz.blendFuncSeparate(770,771,1,1);}c=a.jo;a.jo=b;return c;}
function Uc(a,b,c,d){var e,f,g;a.lg=1;a.hF=1;e=a.lt;f=d.b;g=d.a;e.pS=b;e.pT=c;e.pR=f;e.pO=g;Tv(a);}
function K3(a){a.lg=0;a.hF=0;Tv(a);}
function Tv(a){var b,c,d,e,f,g;b=a.lv;c=a.lg;if(b!=c){a.lv=c;if(!c)a.bz.disable(3089);else a.bz.enable(3089);}if(a.lv&&a.hF){a.hF=0;d=a.bz;e=a.lt;b=e.pS;c=a.dq.a-e.pT|0;f=e.pO;c=c-f|0;g=e.pR;d.scissor(b,c,g,f);}}
function Kn(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.nK;c=a.kR;d=b.f1.q2;e=b.dR;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dR;h=b.mn;e.bindBuffer(34962,h);i=b.f1.lQ.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dR;m=k.gQ;n=k.ez;o=b.f1.j$*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.ez|0;j=j+1|0;}a:{e=b.tc;if(e!==null){c=0;b.dR.bindBuffer(34962,e);i=b.f1.pA.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dR;j=e.gQ;p=e.ez;m=e.nR;n=b.f1.od;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.ez|0;g=g+1|0;}}}q=b.sG;if(q===null){c=b.qo;if(c>0)b.dR.drawArrays(4,0,c);}else{b.dR.bindBuffer(34963,q);k=b.dR;g=b.sP;k.drawElements(4,g,5123,0);}a.kR=d;}
function BB(a,b,c,d,e){Kz(a,a.i_);Lx(a.i_,a.bz,b,c,d,a.dq);d=a.i_;HP(a.bz,d.sr,e);Kn(a);}
function EB(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Kz(a,a.fM);Lx(a.fM,a.bz,b,c,d,a.dq);Tq(a.fM,a.bz,f);d=a.fM;j=a.bz;f=f.e7;b=f.b;c=f.a;k=e.bg;l=b;m=k/l;k=e.bv;n=c;o=k/n;k=e.bc/l;l=e.bw/n;d=d.rW;j.uniform4f(d,m,o,k,l);d=a.fM;e=a.bz;HP(e,d.ok,g);HP(e,d.mN,h);d=d.nx;e.uniform2f(d,i,0.0);Kn(a);}
function CS(a){var b,c;b=new IU;c=a.rt;b.e7=new Bh;b.dG=c;b.er=c.c$.createTexture();ATi=ATi+1|0;return b;}
function Na(a,b){We(a.bz,b);}
function Kz(a,b){var c,d;if(b!==a.sZ){c=a.bz;d=b.cd;c.useProgram(d);a.sZ=b;}}
function ABy(){var a=this;KF.call(a);a.vn=null;a.vW=null;}
function AQO(a,b){var c=new ABy();AIw(c,a,b);return c;}
function AIw(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Ty;a.dq=new Bh;a.kR=0;a.lt=new VJ;a.pF=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(52)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bz=b;a.cr=LX(d,4,4);g=ADk(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BQ(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new Pi;XY();f=ATj;k.dR=b;k.f1=f;k.qo=h.length/f.j$|0;k.sP
=j.length;f=b.createBuffer();k.mn=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.tc=null;f=b.createBuffer();k.sG=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.nK=k;a.vH=J4(e,B(53));f=new Pj;f.c$=b;a.rt=f;l=b.getParameter(3379);a.uG=l;f=new M;O(f);S(G(f,B(54)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(D0,6);i=g.data;d=new Vi;K0(d,b,B(55),B(56),ATj);f=d.cd;d.sr=b.getUniformLocation(f,"uColor");a.i_=d;i[0]
=d;f=AQi(b,B(57));a.wb=f;i[1]=f;f=new PW;K0(f,b,B(55),B(58),ATj);a.vV=f;i[2]=f;f=ARE(b);a.uY=f;i[3]=f;f=AQP(b);a.fM=f;i[4]=f;f=ARO(b);a.g5=f;i[5]=f;a.v3=g;We(b,B(59));a.vW=new Tw;a.vn=c;}
function GA(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cr;g=Yu(b,c,d,e);II(f,g);h=f.bk.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Ei(f,B(60));m=Ei(f,B(61));h=new Kv;n=J8(g);h.lB=b;h.ui=c;o=c|0;if(o!==c){b=new M;O(b);E$(G(b,B(62)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.nO=o;h.us=d;h.uX=e;h.dd=i;h.dX=j;h.uf=l;h.iU=k;h.ms=n;h.ps=CX(i);h.vP=CX(h.dX);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.up=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(63);}h.t8=b;return h;}
function Cq(){C.call(this);this.bf=null;}
function Ea(a,b){a.bf=b;}
function AO7(a,b){return 0;}
var IC=F();
var ASH=null;function I0(a,b,c){return b.i$(c);}
function Z9(){ASH=new IC;}
function YL(){var a=this;C.call(a);a.bY=null;a.lN=null;a.bE=null;a.dK=null;a.eA=null;a.f5=null;a.gI=null;a.i2=null;a.jJ=null;a.cK=null;}
function ARo(a){var b=new YL();ALu(b,a);return b;}
function ALu(a,b){a.bY=CH(R(Ck,0));a.lN=CH(R(Ck,0));a.bE=CH(R(CB,0));a.dK=CH(R(DN,0));a.eA=CH(R(ET,0));a.f5=CH(R(Fd,0));a.gI=CH(R(FV,0));a.i2=CH(R(Bi,0));a.jJ=CH(R(Bi,0));a.cK=b;}
function S9(a,b){var c,d,e,f;C$(a.cK);c=(Cn(!b.g6?a.lN:a.bY)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bx(b);if(f)break;if(b.js)break;e=e+1|0;}return f;}
function PX(a,b,c){var d,e,f;C$(a.cK);d=(Cn(a.f5)).data;e=d.length;f=0;while(f<e){if(d[f].hd(b,c))return 1;f=f+1|0;}return 0;}
function Vx(){C.call(this);this.mE=null;}
function ALq(a,b){var c;c=a.mE;if(S9(c.cb,WT(c,b,1)))DC(c,b);}
function Vy(){C.call(this);this.qT=null;}
function ALD(a,b){var c;c=a.qT;if(S9(c.cb,WT(c,b,0)))DC(c,b);}
function Vz(){C.call(this);this.nr=null;}
function AJ$(a,b){var c,d,e,f,g,h;c=a.nr;if(c.de!==null){d=Ew(c,b);e=c.cb;C$(e.cK);f=(Cn(e.bE)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bW(d))break a;h=h+1|0;}}DC(c,b);}}
function VA(){C.call(this);this.ta=null;}
function AJy(a,b){var c,d,e,f,g,h;c=a.ta;b.button;if(c.de!==null){d=Ew(c,b);c=c.cb;e=b.button;C$(c.cK);f=(Cn(c.bE)).data;g=f.length;h=0;a:{while(h<g){if(f[h].c2(d,e))break a;h=h+1|0;}}}}
function VB(){C.call(this);this.p2=null;}
function AJV(a,b){var c,d,e,f,g,h,i;c=a.p2;b.button;if(c.de!==null){d=Ew(c,b);e=c.cb;f=b.button;C$(e.cK);g=(Cn(e.bE)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cI(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DC(c,b);}}
function VC(){C.call(this);this.mY=null;}
function AMc(a,b){var c,d,e,f,g,h,i,j,k;c=a.mY;if(c.de!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cb;f=Ew(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C$(e.cK);i=(Cn(e.dK)).data;j=i.length;k=0;b:{while(k<j){if(i[k].c1(f,d,h))break b;k=k+1|0;}}DC(c,b);}}
function VD(){C.call(this);this.tn=null;}
function AHP(a,b){var c,d,e,f,g,h,i,j;c=a.tn;if(c.de!==null){d=Ew(c,b);e=c.cb;f=b.button;g=b.detail;C$(e.cK);h=(Cn(e.bE)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cn(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DC(c,b);}}
function VE(){C.call(this);this.qb=null;}
function APy(a,b){var c,d,e,f,g,h,i;c=a.qb;if(c.de!==null){d=Ew(c,b);e=c.cb;C$(e.cK);f=(Cn(e.eA)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bx(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DC(c,b);}}
function VF(){C.call(this);this.m6=null;}
function AG7(a,b){var c,d,e;b=a.m6.cb;c=(Cn(b.jJ)).data;d=c.length;e=0;while(e<d){c[e].q();e=e+1|0;}C$(b.cK);}
function VG(){C.call(this);this.sB=null;}
function ANi(a,b){var c,d,e;b=a.sB.cb;c=(Cn(b.i2)).data;d=c.length;e=0;while(e<d){c[e].q();e=e+1|0;}C$(b.cK);}
function WO(){C.call(this);this.rV=null;}
function AO8(a,b){var c;c=a.rV;if(c.de!==null)Ew(c,b);}
function WP(){C.call(this);this.q8=null;}
function AJL(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.q8;if(Mn()===c.gJ){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cn(c.cb.gI)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].f9();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cb.cK;m=new M1;m.sJ=k;m.sK=l;g.getAsString(Bk(m,"accept"));DC(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(64)),k),B(65)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function WQ(){C.call(this);this.l8=null;}
function AKc(a,b){var c;c=a.l8;if(Mn()===c.gJ&&PX(c.cb,SZ(c,b),0))DC(c,b);}
function WR(){C.call(this);this.sO=null;}
function ALU(a,b){var c;c=a.sO;if(Mn()===c.gJ&&PX(c.cb,SZ(c,b),1))DC(c,b);}
var Tl=F(0);
var Ty=F();
function LX(a,b,c){var d,e,f;d=new Qs;ASY=ASY+1|0;d.la=b;d.ko=c;e=(DX()).createElement("canvas");d.i9=e;f=b;e.width=f;e=d.i9;f=c;e.height=f;d.bk=d.i9.getContext("2d");return d;}
var Tw=F();
function AIR(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function LP(){var a=this;C.call(a);a.bb=null;a.n=null;a.bU=null;}
function ACi(){var a=this;C.call(a);a.gN=null;a.h5=null;a.gB=0;}
function CH(a){var b=new ACi();AHL(b,a);return b;}
function AHL(a,b){a.gN=b;}
function X(a,b){var c,d,e;c=a.gB;d=a.gN;if(c==d.data.length)a.gN=Dc(d,c+4|0);d=a.gN.data;e=a.gB;a.gB=e+1|0;d[e]=b;a.h5=null;}
function Cn(a){var b;b=a.h5;if(!(b!==null&&b.data.length==a.gB))a.h5=Dc(a.gN,a.gB);return a.h5;}
var Ih=F(0);
var Ck=F(0);
var CB=F(0);
function AIW(a,b){return 0;}
function AMb(a,b,c,d){return 0;}
function AE4(a,b,c){return 0;}
function ADT(a,b,c){return 0;}
var DN=F(0);
var ET=F(0);
var Fd=F(0);
var HI=F(0);
var FV=F(0);
function Ps(){C.call(this);this.uA=null;}
function Bh(){var a=this;C.call(a);a.b=0;a.a=0;}
function B0(a,b){var c=new Bh();YE(c,a,b);return c;}
function YE(a,b,c){a.b=b;a.a=c;}
function CG(a,b){a.b=b.b;a.a=b.a;}
function Bg(a,b,c){a.b=b;a.a=c;}
function W6(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);S(G(S(G(d,B(66)),b),B(67)),c);return N(d);}
function Ky(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function VJ(){var a=this;C.call(a);a.pS=0;a.pT=0;a.pR=0;a.pO=0;}
var ABx=F();
var X1=F(0);
function Pj(){C.call(this);this.c$=null;}
function KY(){var a=this;C.call(a);a.cd=null;a.vR=null;}
function AAz(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(68):B(69);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bu(By(),f);b=new Bn;Bl(b,f);J(b);}
function D0(){var a=this;KY.call(a);a.m5=null;a.oj=null;a.k4=null;}
function ATk(a,b,c,d){var e=new D0();K0(e,a,b,c,d);return e;}
function K0(a,b,c,d,e){var f,g,h,i,j,k;a.vR=e;f=AAz(b,35633,c);d=AAz(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.cd=g;h=e.qE.data;i=h.length;j=0;while(j<i){c=h[j];d=a.cd;k=c.gQ;c=c.ov;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.cd;b.linkProgram(c);if(b.getProgramParameter(c,35714)){We(b,B(70));a.k4=new Bh;c=a.cd;a.m5=b.getUniformLocation(c,"uResolution");c=a.cd;a.oj=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bn;c=new M;O(c);G(G(c,B(71)),d);Bl(b,N(c));J(b);}
function YN(a,b,c){var d,e,f;if(!Ky(a.k4,c)){CG(a.k4,c);d=a.m5;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function Lx(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.oj;b.uniform4f(e,i,l,h,j);YN(a,b,f);}
function Vi(){D0.call(this);this.sr=null;}
function Eu(){D0.call(this);this.pX=null;}
function AQi(a,b){var c=new Eu();S3(c,a,b);return c;}
function ATl(a,b,c){var d=new Eu();S$(d,a,b,c);return d;}
function S3(a,b,c){S$(a,b,B(55),c);}
function S$(a,b,c,d){XY();K0(a,b,c,d,ATj);c=a.cd;a.pX=b.getUniformLocation(c,"sDiffuse");}
function Tq(a,b,c){var d;d=a.pX;b.uniform1i(d,0);b.activeTexture(33984);c=c.er;b.bindTexture(3553,c);}
var PW=F(D0);
function ABf(){Eu.call(this);this.uL=null;}
function ARE(a){var b=new ABf();AHc(b,a);return b;}
function AHc(a,b){var c;S3(a,b,B(72));c=a.cd;a.uL=b.getUniformLocation(c,"uContrast");}
function AAR(){var a=this;Eu.call(a);a.rW=null;a.ok=null;a.mN=null;a.nx=null;}
function AQP(a){var b=new AAR();AL9(b,a);return b;}
function AL9(a,b){var c;S$(a,b,B(73),B(74));c=a.cd;a.rW=b.getUniformLocation(c,"uTexTransform");c=a.cd;a.ok=b.getUniformLocation(c,"uColor");c=a.cd;a.mN=b.getUniformLocation(c,"uBgColor");c=a.cd;a.nx=b.getUniformLocation(c,"uContrast");}
function Yh(){var a=this;Eu.call(a);a.td=null;a.tb=null;a.oQ=null;}
function ARO(a){var b=new Yh();AGF(b,a);return b;}
function AGF(a,b){var c,d;S3(a,b,B(75));c=a.cd;a.td=b.getUniformLocation(c,"uColorB");d=a.cd;a.tb=b.getUniformLocation(d,"uColorF");d=a.cd;a.oQ=b.getUniformLocation(d,"uContrast");}
var Q1=F(0);
var AC0=F(0);
function HP(b,c,d){var e,f,g,h;e=d.bg;f=d.bv;g=d.bc;h=d.bw;b.uniform4f(c,e,f,g,h);}
function We(b,c){var d,e;d=b.getError();if(d){b=By();e=new M;O(e);S(G(e,c),d);Bu(b,N(e));}}
function Pg(){var a=this;C.call(a);a.t9=null;a.t_=null;a.t$=null;}
function Pi(){var a=this;C.call(a);a.dR=null;a.f1=null;a.mn=null;a.tc=null;a.sG=null;a.qo=0;a.sP=0;}
function Cr(){var a=this;C.call(a);a.t5=null;a.cJ=0;}
function DE(a,b,c){a.t5=b;a.cJ=c;}
function Gw(){var a=this;Cr.call(a);a.qE=null;a.lQ=null;a.pA=null;a.j$=0;a.od=0;a.q2=0;}
var ATj=null;var ATm=null;function XY(){XY=Br(Gw);AIn();}
function AIn(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gw;c=R(DM,2);d=c.data;AOr();d[0]=ATn;d[1]=ATo;XY();DE(b,B(76),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];XA();switch(ATp.data[l.lj.cJ]){case 1:f=f+l.ez|0;h=h+1|0;break a;case 2:e=e+l.ez|0;g=g+1|0;break a;default:}}i=i|1<<l.gQ;k=k+1|0;}b.qE=c;b.j$=e;b.od=f;b.q2=i;c=R(DM,g);m=c.data;b.lQ=c;c=R(DM,h);n=c.data;b.pA=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];XA();switch(ATp.data[l.lj.cJ]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}ATj=b;c=R(Gw,1);c.data[0]=b;ATm=c;}
var Lw=F(0);
var So=F(0);
var TN=F(0);
var Gd=F();
function IS(){Gd.call(this);this.tC=null;}
function Ze(){var a=this;IS.call(a);a.vF=0;a.kk=0;a.h0=null;a.jO=null;a.rn=null;}
function AKm(a,b){var c=new Ze();AN_(c,a,b);return c;}
function AN_(a,b,c){a.tC=b;b=new M;O(b);a.h0=b;a.jO=BQ(32);a.vF=c;Y4();a.rn=ATq;}
function SD(a,b,c,d){var e,$$je;e=a.tC;if(e===null)a.kk=1;if(!(a.kk?0:1))return;a:{try{e.jE(b,c,d);break a;}catch($$e){$$je=D9($$e);if($$je instanceof H0){}else{throw $$e;}}a.kk=1;}}
function Ni(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ZX(b,c,d-c|0);e=EZ(Ba(16,W(e.length,1024)));g=ZJ(e,0,e.data.length);h=a.rn;i=new OH;b=EZ(1);j=b.data;j[0]=63;GR();k=ATr;i.k7=k;i.kp=k;c=j.length;if(c&&c>=i.lR){i.t0=h;i.ot=b.e_();i.vy=2.0;i.lR=4.0;i.nP=BQ(512);i.mX=EZ(512);k=ATs;if(k===null){i=new BC;Bl(i,B(77));J(i);}i.k7=k;i.kp=k;a:while(true){if(i.hW==3){f=new DP;U(f);J(f);}i.hW=2;b:{while(true){try{k=XO(i,f,g);}catch($$e){$$je=D9($$e);if($$je instanceof Bn){f=$$je;break a;}else{throw $$e;}}if(HO(k))
{d=B4(f);if(d<=0)break b;k=DQ(d);}else if(GO(k))break;h=!Li(k)?i.k7:i.kp;c:{if(h!==ATs){if(h===ATt)break c;else break b;}d=B4(g);b=i.ot;l=b.data.length;if(d<l){k=ATu;break b;}V0(g,b,0,l);}Ez(f,f.Q+JD(k)|0);}}l=GO(k);SD(a,e,0,g.Q);Ng(g);if(!l){while(true){d=i.hW;if(d!=2&&d!=4){f=new DP;U(f);J(f);}f=ATv;if(f===f)i.hW=3;l=GO(f);SD(a,e,0,g.Q);Ng(g);if(!l)break;}return;}}J(AFT(f));}i=new BC;Bl(i,B(78));J(i);}
function Bu(a,b){var c,d,e,f,g,h,i,j;BA(BY(a.h0,b),10);b=a.h0;c=b.K;d=a.jO;if(c>d.data.length)d=BQ(c);e=0;f=0;if(e>c){b=new Bw;Bl(b,B(79));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.z.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Ni(a,d,0,c);a.h0.K=0;}
function F0(){Gd.call(this);this.vo=null;}
function WW(a){a.vo=EZ(1);}
var KL=F(F0);
var AS1=null;function AIJ(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AA5(){var b;b=new KL;WW(b);AS1=b;}
function DM(){var a=this;Cr.call(a);a.ov=null;a.lj=null;a.ez=0;a.nR=0;a.gQ=0;}
var ATn=null;var ATo=null;var ATw=null;function AOr(){AOr=Br(DM);AHx();}
function AQ1(a,b,c,d,e,f,g){var h=new DM();Va(h,a,b,c,d,e,f,g);return h;}
function Va(a,b,c,d,e,f,g,h){AOr();DE(a,b,c);a.ov=d;a.lj=e;a.ez=f;a.nR=g;a.gQ=h;}
function AHx(){var b;b=new DM;AAl();Va(b,B(80),0,B(81),ATx,2,0,0);ATn=b;b=AQ1(B(82),1,B(83),ATx,2,0,1);ATo=b;ATw=H(DM,[ATn,b]);}
function IJ(){var a=this;C.call(a);a.tM=null;a.uO=null;}
function ABk(b){var c,d;if(Fe(b))J(Y9(b));if(!ABm(L(b,0)))J(Y9(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ABm(d))break a;else J(Y9(b));}}c=c+1|0;}}
function ABm(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var LA=F(IJ);
var ATq=null;function Y4(){Y4=Br(LA);AGC();}
function ABB(a){var b,c;b=new SE;b.ev=B(84);GR();c=ATr;b.gu=c;b.le=c;b.uD=a;b.l0=0.3333333432674408;b.uZ=0.5;b.m2=EZ(512);b.qS=BQ(512);return b;}
function AGC(){var b,c,d,e,f;b=new LA;Y4();c=R(Bv,0);d=c.data;ABk(B(85));e=d.length;f=0;while(f<e){ABk(d[f]);f=f+1|0;}b.tM=B(85);b.uO=c.e_();ATq=b;}
var JO=F();
var ATy=null;var ATp=null;function XA(){XA=Br(JO);ALg();}
function ALg(){var b,c;AAl();b=BH((ATz.e_()).data.length);c=b.data;ATp=b;c[ATA.cJ]=1;c[ATx.cJ]=2;AAn();c=BH((ATB.e_()).data.length);b=c.data;ATy=c;b[ATC.cJ]=1;b[ATD.cJ]=2;}
function Oq(){var a=this;C.call(a);a.e2=null;a.lG=null;a.jq=null;a.rb=null;a.oc=null;a.oo=null;}
function Zh(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.e2,b,c));}
function Mg(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.lG[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.e2,b,d));f=e.data;EF();d=f.length;Y4();g=ATq;h=ZJ(e,0,d);a:{try{i=ABB(g);GR();g=X9(AAD(ACa(i,ATs),ATs),h);break a;}catch($$e){$$je=D9($$e);if($$je instanceof FC){g=$$je;}else{throw $$e;}}h=new V$;h.iE=1;h.i5=1;h.g4=B(86);h.kq=g;J(h);}if(!g.Q&&g.da==g.lC)c.bP=g.gP;else{f=BQ(B4(g));e=f.data;c.bP=f;MR(g,f,0,e.length);}return c;}
function Mp(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.jq[e]){e=e+1|0;}d=e-d|0;G4(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.e2,b,d)));return c;}
var Gz=F(Cr);
var ATA=null;var ATx=null;var ATz=null;function AAl(){AAl=Br(Gz);AF8();}
function AGv(a,b){var c=new Gz();ABC(c,a,b);return c;}
function ABC(a,b,c){AAl();DE(a,b,c);}
function AF8(){var b;ATA=AGv(B(87),0);b=AGv(B(88),1);ATx=b;ATz=H(Gz,[ATA,b]);}
var F7=F(Cr);
var ATC=null;var ATD=null;var ATB=null;function AAn(){AAn=Br(F7);AGJ();}
function APE(a,b){var c=new F7();X6(c,a,b);return c;}
function X6(a,b,c){AAn();DE(a,b,c);}
function AGJ(){var b;ATC=APE(B(89),0);b=APE(B(90),1);ATD=b;ATB=H(F7,[ATC,b]);}
var UQ=F(DS);
function ABp(){BC.call(this);this.t4=null;}
function Y9(a){var b=new ABp();ANI(b,a);return b;}
function ANI(a,b){U(a);a.t4=b;}
var Lz=F(0);
function Wy(){C.call(this);this.og=null;}
function AMQ(a,b){a.og.setPointerCapture(b.pointerId);}
function Wz(){C.call(this);this.nj=null;}
function AEI(a,b){a.nj.releasePointerCapture(b.pointerId);}
function GI(){var a=this;C.call(a);a.lC=0;a.Q=0;a.da=0;a.gY=0;}
function U$(a,b){a.gY=(-1);a.lC=b;a.da=b;}
function Ez(a,b){var c,d,e;if(b>=0&&b<=a.da){a.Q=b;if(b<a.gY)a.gY=0;return a;}c=new BC;d=a.da;e=new M;O(e);BA(S(G(S(G(e,B(91)),b),B(92)),d),93);Bl(c,N(e));J(c);}
function B4(a){return a.da-a.Q|0;}
function DD(a){return a.Q>=a.da?0:1;}
var Rj=F(0);
var Kw=F(GI);
function ACD(b){var c,d;if(b>=0)return ALG(0,b,BQ(b),0,b,0);c=new BC;d=new M;O(d);S(G(d,B(93)),b);Bl(c,N(d));J(c);}
function ZX(b,c,d){return ALG(0,b.data.length,b,c,c+d|0,0);}
function MR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bw;i=new M;O(i);S(G(S(G(i,B(94)),g),B(95)),f);Bl(h,N(i));J(h);}if(B4(a)<d){j=new La;U(j);J(j);}if(d<0){j=new Bw;k=new M;O(k);G(S(G(k,B(96)),d),B(97));Bl(j,N(k));J(j);}g=a.Q;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.gP.data[m+a.lp|0];l=l+1|0;c=n;m=o;}a.Q=g+d|0;return a;}}b=b.data;j=new Bw;d=b.length;k=new M;O(k);BA(S(G(S(G(k,B(98)),c),B(92)),d),41);Bl(j,N(k));J(j);}
function Jz(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lI){b=new Iu;U(b);J(b);}e=d-c|0;if(B4(a)<e){b=new Hw;U(b);J(b);}if(c>I(b)){f=new Bw;d=I(b);b=new M;O(b);BA(S(G(S(G(b,B(99)),c),B(92)),d),41);Bl(f,N(b));J(f);}if(d>I(b)){f=new Bw;c=I(b);b=new M;O(b);S(G(S(G(b,B(100)),d),B(101)),c);Bl(f,N(b));J(f);}if(c>d){b=new Bw;f=new M;O(f);S(G(S(G(f,B(99)),c),B(102)),d);Bl(b,N(f));J(b);}g=a.Q;while(c<d){h=g+1|0;i=c+1|0;Rq(a,g,L(b,c));g=h;c=i;}a.Q=a.Q+e|0;return a;}
function Jf(){var a=this;GI.call(a);a.kj=0;a.kX=null;a.vc=null;}
function ZJ(b,c,d){var e,f,g;e=b.data;f=new VZ;g=e.length;d=c+d|0;U$(f,g);AIt();f.vc=ATE;f.kj=0;f.kX=b;f.Q=c;f.da=d;f.vf=0;f.mi=0;return f;}
function V0(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mi){e=new Iu;U(e);J(e);}if(B4(a)<d){e=new Hw;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bw;j=new M;O(j);S(G(S(G(j,B(103)),h),B(95)),g);Bl(i,N(j));J(i);}if(d<0){e=new Bw;i=new M;O(i);G(S(G(i,B(96)),d),B(97));Bl(e,N(i));J(e);}h=a.Q;k=h+a.kj|0;l=0;while(l<d){b=a.kX.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Q=h+d|0;return a;}}b=b.data;e=new Bw;d=b.length;i=new M;O(i);BA(S(G(S(G(i,B(98)),c),B(92)),d),41);Bl(e,N(i));J(e);}
function Ng(a){a.Q=0;a.da=a.lC;a.gY=(-1);return a;}
function Hl(){C.call(this);this.v7=null;}
var ATt=null;var ATs=null;var ATr=null;function GR(){GR=Br(Hl);AJO();}
function ACk(a){var b=new Hl();ABh(b,a);return b;}
function ABh(a,b){GR();a.v7=b;}
function AJO(){ATt=ACk(B(104));ATs=ACk(B(105));ATr=ACk(B(106));}
var Mw=F(Cq);
function AJH(a){}
function AId(a,b,c){}
var ACH=F();
function ANr(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(107)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(KH(b)){case -1570047148:if(!Bo(b,B(108)))break a;d=15;break a;case -1519338717:if(!Bo(b,B(109)))break a;d=1;break a;case -1509980539:if(!Bo(b,B(110)))break a;d=11;break a;case -1073555521:if(!Bo(b,B(111)))break a;d=12;break a;case -811765794:if(!Bo(b,B(112)))break a;d=4;break a;case -785237654:if(!Bo(b,B(113)))break a;d=9;break a;case -631889171:if(!Bo(b,B(114)))break a;d=7;break a;case -439438829:if
(!Bo(b,B(115)))break a;d=16;break a;case 3343967:if(!Bo(b,B(116)))break a;d=8;break a;case 3556498:if(!Bo(b,B(117)))break a;d=3;break a;case 485517998:if(!Bo(b,B(118)))break a;d=5;break a;case 544901384:if(!Bo(b,B(119)))break a;d=2;break a;case 1030621992:if(!Bo(b,B(120)))break a;d=14;break a;case 1465713255:if(!Bo(b,B(121)))break a;d=6;break a;case 1554501643:if(!Bo(b,B(122)))break a;d=13;break a;case 1609169232:if(!Bo(b,B(123)))break a;d=10;break a;default:}}b:{switch(d){case 1:break;case 2:case 3:b=new Se;break b;case 4:b
=new Sd;break b;case 5:b=new Sc;break b;case 6:b=new Sb;break b;case 7:case 8:b=new Sa;break b;case 9:b=new R_;break b;case 10:b=new R$;break b;case 11:b=new R9;break b;case 12:b=new R8;break b;case 13:b=new PV;break b;case 14:b=new PT;break b;case 15:b=new PU;break b;case 16:b=new PR;break b;default:b=new PS;break b;}b=new Sf;}return b;}
var ZW=F();
var Jt=F(Kw);
function ZB(){var a=this;Jt.call(a);a.lI=0;a.lp=0;a.gP=null;}
function ALG(a,b,c,d,e,f){var g=new ZB();APL(g,a,b,c,d,e,f);return g;}
function APL(a,b,c,d,e,f,g){U$(a,c);a.Q=e;a.da=f;a.lp=b;a.lI=g;a.gP=d;}
function Rq(a,b,c){a.gP.data[b+a.lp|0]=c;}
function Kj(){var a=this;C.call(a);a.t0=null;a.ot=null;a.vy=0.0;a.lR=0.0;a.k7=null;a.kp=null;a.hW=0;}
function K6(){var a=this;C.call(a);a.f3=0;a.hy=0;}
var ATv=null;var ATu=null;function XV(a,b){var c=new K6();Yo(c,a,b);return c;}
function Yo(a,b,c){a.f3=b;a.hy=c;}
function HO(a){return a.f3?0:1;}
function GO(a){return a.f3!=1?0:1;}
function J$(a){return !PN(a)&&!Li(a)?0:1;}
function PN(a){return a.f3!=2?0:1;}
function Li(a){return a.f3!=3?0:1;}
function JD(a){var b;if(J$(a))return a.hy;b=new E8;U(b);J(b);}
function DQ(b){return XV(2,b);}
function Uv(a){var b,c;switch(a.f3){case 0:b=new Pl;U(b);J(b);case 1:b=new Wd;U(b);J(b);case 2:b=new Un;c=a.hy;U(b);b.wk=c;J(b);case 3:b=new O_;c=a.hy;U(b);b.wg=c;J(b);default:}}
function YP(){ATv=XV(0,0);ATu=XV(1,0);}
var XK=F();
var KK=F(0);
var MG=F();
function AGS(a,b){return b.arrayBuffer();}
var MF=F();
function AKU(a,b){var c,d;c=new On;d=new Ol;return $rt_globals.WebAssembly.instantiate(b,AIQ(Bk(c,"f"),Bk(d,"f")));}
var ME=F();
function ALz(a,b){AEC(b);}
var MD=F();
function AFi(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var Sf=F();
function AK_(a,b){return AR8(b);}
var Se=F();
function AEk(a,b){return AQl(b);}
var Sd=F();
function AHW(a,b){var c,d,e;c=new Ve;Hq(c,b);d=new T6;d.lk=new Bh;d.jH=new Bh;c.p5=d;c.df=XR();c.cv=XR();c.dO=L_(c.P);X(c.P.dB,c);d=b.n.bY;e=new Sh;e.r1=c;X(d,e);X(b.n.bE,c);b=b.n.eA;d=new Sk;d.qK=c;X(b,d);RQ(c.cv);b=EI(B(124),25.0);c.qR=b;d=c.dO;d.e0=b;Iw(d,Fm());BF(c.fY,Cv(43));b=Fm();HL(c.df,b);HL(c.cv,b);b=c.df;b.iV=new Si;d=c.cv;d.iV=new Sg;d.jh=new V_;d.rF=new Wa;Ki(b,(MY(0)).ig);Ki(c.cv,(MY(0)).ig);return c;}
var Sc=F();
function AHS(a,b){var c,d,e;c=new Wq;Hq(c,b);c.ka=EI(B(125),15.0);d=ACL();c.dY=d;X(c.P.dB,d);X(c.P.dB,c);BF(c.fY,Cv(43));d=L_(c.P);c.fK=d;Iw(d,Fm());c.fK.e0=EI(B(124),25.0);d=b.n.bY;e=new NU;e.tV=c;X(d,e);d=b.n.eA;e=new NV;e.o1=c;X(d,e);X(b.n.bE,XQ(c.fK));X(b.n.bE,c.dY);b=b.n.dK;d=c.dY;BI(d);e=new NW;e.sm=d;X(b,e);return c;}
var Sb=F();
function AIv(a,b){var c,d,e;c=new WZ;Hq(c,b);c.fg=Cl();c.eF=Cl();c.nH=Bm(B(126));c.hQ=ANF();c.fD=0;d=c.P.dB;e=new S_;e.l$=c;X(d,e);X(b.n.bE,c);d=b.n.bY;e=new Ta;e.oY=c;X(d,e);b=G2(b.bb,B(124),35);c.iT=b;c.hB=Wr(DZ(b));BF(c.fY,Bm(B(127)));return c;}
var Sa=F();
function AEq(a,b){var c,d,e,f;c=new Ow;Ea(c,b);c.fy=AJ3();c.dH=0;c.qz=500;c.sU=W2(0,0,0,255);c.ll=20;c.s9=20;c.nz=ABN();d=b.n.bE;e=new Vt;e.ic=c;f=new WY;f.qi=e;e.pK=f;X(d,e);d=b.n.dK;e=new RT;e.m9=c;X(d,e);c.dJ=b.bb;c.rB=TK(b.bU);SK(c.fy,G2(c.dJ,B(124),c.s9),c.ll,c.dJ);c.gt=G7();return c;}
var R_=F();
function AF3(a,b){var c,d;c=new P3;Gc(c,b);b=b.n.bY;d=new Pm;d.sY=c;X(b,d);return c;}
var R$=F();
function ALp(a,b){return ARJ(b);}
var R9=F();
function AOQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new VU;Gc(c,b);c.dv=E5(0,0,300,300);c.es=RK(0,0,3,3);d=b.bb;b=b.n.bE;e=new SS;e.kD=c;X(b,e);b=Y2(d);c.or=b;F$(c.dv,b);GK(c.dv);b=c.dv.bV;Dp();BF(b,ATF);BF(c.dv.bL,Cw(204,120,50));AAn();e=ATD;f=EZ((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CS(d);XA();switch(ATy.data[e.cJ]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Ej;U(b);J(b);}b:
{Mz(m,5,5,h);b=m.dG.c$;switch(ATy.data[e.cJ]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Ej;U(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.jY=m;Bg(c.es.v,Cb(m),C3(c.jY));BF(c.es.bV,c.k$);return c;}
var R8=F();
function APJ(a,b){var c,d,e;c=new Rk;Gc(c,b);c.fW=E5(0,0,300,300);c.jx=new Bh;c.hS=new Bh;c.hb=new Bh;d=b.bb;b=b.n.bE;e=new U0;e.iY=c;X(b,e);b=Y2(d);c.qd=b;F$(c.fW,b);GK(c.fW);b=c.fW.bV;Dp();BF(b,ATF);BF(c.fW.bL,Cw(204,120,50));return c;}
var PV=F();
function AJl(a,b){var c,d,e,f;c=new N5;Ea(c,b);c.u3=20;c.wx=11;c.uJ=220;c.iC=new Bh;c.vq=5000;c.gf=1;c.e4=H(Ik,[Cv(0),Cv(255)]);c.dQ=b.bb;d=b.n.bE;e=new Tj;e.iP=c;f=new OW;f.mA=e;e.oD=f;X(d,e);b=b.n.dK;d=new Nf;d.sp=c;X(b,d);b=CL(c.dQ,200,220);c.jp=b;FQ(b,B(124),20.0);b=CL(c.dQ,200,20);c.eM=b;FQ(b,B(124),20.0);c.hm=G7();return c;}
var PT=F();
function ADi(a,b){var c,d,e;c=new H4;Gc(c,b);X(b.n.bE,c);d=b.n.bY;e=new Rw;e.ql=c;X(d,e);X(b.n.f5,new Rv);d=b.n.f5;e=new Rt;e.oi=c;X(d,e);X(b.n.gI,new Rs);d=b.n.gI;e=new Ru;e.mF=c;X(d,e);b=!WB(b.bU)?B(128):B(129);d=new M;O(d);G(G(d,B(130)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var PU=F();
function AGO(a,b){var c,d,e,f,g,h,i,j;c=new Pp;Ea(c,b);c.mP=Cv(20);c.eG=E5(0,0,300,300);d=b.n.bY;e=new Q2;e.v8=c;X(d,e);b=b.bb;d=G2(b,B(10),88);Cu(b.cr,d);f=Ei(b.cr,B(131));g=Ei(b.cr,B(132));if(f>g)g=f;h=CX(g);i=Jv(d,1.1799999475479126);j=By();e=new M;O(e);S(G(S(G(e,B(133)),h),B(134)),i);Bu(j,N(e));e=CL(b,h,i*2|0);c.hC=e;Cu(e,d);Cf(c.hC,B(131),0.0,d.dd);Cf(c.hC,B(132),0.0,i+d.dd);b=CS(b);c.k2=b;CM(b,c.hC);F$(c.eG,c.k2);GK(c.eG);b=c.eG.bV;Dp();BF(b,ATF);BF(c.eG.bL,ATG);return c;}
var PR=F();
function AJC(a,b){var c,d,e,f;c=new Vu;Hq(c,b);c.rA=EI(B(125),20.0);d=ACL();c.dL=d;X(c.P.dB,d);X(c.P.dB,c);BF(c.fY,Cv(43));d=L_(c.P);c.fh=d;Iw(d,Fm());c.fh.e0=EI(B(124),25.0);d=b.n.bY;e=new PJ;e.v5=c;X(d,e);d=b.n.eA;e=new PK;e.o3=c;X(d,e);X(b.n.bE,XQ(c.fh));X(b.n.bE,c.dL);d=b.n.bE;e=c.P.cq;f=new Qy;f.lX=e;X(d,f);b=b.n.dK;d=c.dL;BI(d);e=new PL;e.qm=d;X(b,e);return c;}
var PS=F();
function AM9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Ql;W8(c,b);d=c.cF;e=new H5;f=AOV(null,null,B(135),null);g=R(Bv,8);h=I(B(136));i=0;j=0;k=h+1|0;while(true){l=Gr(B(136),10,j);m=l>=0?B8(B(136),j,l):Db(B(136),j);n=g.data;o=i+1|0;j=n.length;if(j==i)g=Dc(g,j*2|0);g.data[i]=m;g=g;j=l<0?k:l+1|0;if(j>h)break;i=o;}if(g.data.length!=o)g=Dc(g,o);PM(e,g,B(137),f);d.t6=null;Uf(d);b=d.e;d.e=e;d.ep=Fu();p=Z3(Df(d.e));if(p!==null){f=Cg(d);m=new T$;m.qI=d;n=R(C,1);n.data[0]=F9(d.e.f);C1(f,m,p,n);}n=(Cn(d.d1.l9)).data;i
=n.length;j=0;while(j<i){n[j].lJ(b,e);j=j+1|0;}return c;}
function GQ(){var a=this;C.call(a);a.by=0;a.ch=0;a.c4=0;a.kA=0;}
function ATH(a,b,c,d){var e=new GQ();Tu(e,a,b,c,d);return e;}
function Tu(a,b,c,d,e){a.by=d;a.ch=b;a.c4=c;a.kA=e;}
function Oc(){var a=this;GQ.call(a);a.dm=null;a.bj=0;a.g6=0;a.qk=0;a.js=0;}
function ACw(b){var c,d,e;c=b.ch;d=c&&!b.by&&!b.c4&&!b.kA?1:0;a:{if(d){d=b.bj;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.by&&!c&&!b.c4&&!b.kA?1:0;d=d&&b.bj==46?1:0;}b:{if(!d){e=b.bj;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.js=1;}return 0;}
var ABH=F();
function Vl(b,c){return (b+(c/2|0)|0)/c|0;}
function O2(b,c,d){if(b<(2147483647/c|0))return Vl(Bb(b,c),d);return 0.5+c*b/d|0;}
function H$(b,c){return ((b+c|0)-1|0)/c|0;}
function GY(b){return b+0.5|0;}
function CX(b){return b+0.5|0;}
function Ep(b,c,d){return Ba(b,W(c,d));}
function LK(){var a=this;GQ.call(a);a.k=null;a.tN=null;}
var Tn=F(0);
function M1(){var a=this;C.call(a);a.sJ=null;a.sK=null;}
function AJd(a,b){var c,d;c=a.sJ;d=a.sK;$rt_globals.console.info("paste plain string "+b);c.m(Fs(b));C$(d);}
function T7(){C.call(this);this.s_=null;}
function Vk(a,b){a.s_.clipboardData.setData("text/plain",$rt_ustr(b));}
function VZ(){var a=this;Jf.call(a);a.vf=0;a.mi=0;}
var AAE=F();
function JM(){C.call(this);this.vC=null;}
var ATE=null;var ATI=null;function AIt(){AIt=Br(JM);APB();}
function AGp(a){var b=new JM();W7(b,a);return b;}
function W7(a,b){AIt();a.vC=b;}
function APB(){ATE=AGp(B(138));ATI=AGp(B(139));}
var Vb=F(0);
function RU(){C.call(this);this.gZ=null;}
function Fy(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gZ));}
function Eo(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.gZ));}
function AFO(a){var b,c;b=a.gZ.byteLength;c=new M;O(c);G(S(G(c,B(140)),b),B(141));return N(c);}
var TG=F(0);
function Ku(){var a=this;C.call(a);a.gi=null;a.eD=null;a.lm=null;}
function AAA(a,b){var c=new Ku();AIo(c,a,b);return c;}
function AP_(a,b,c){var d=new Ku();Nh(d,a,b,c);return d;}
function Xg(b){var c,d,e,f,g,h,i,j,k;c=new Ku;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=TO(E(DV),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=J8(f[h]);h=h+1|0;}}j=g.data;h=j.length;if(!h)i=R(Bv,0);else{i=R(Bv,h-1|0);g=i.data;h=0;k=g.length;while(h<k){g[h]=Fs(Jh(j[h]));h=h+1|0;}}}else i=R(Bv,0);Nh(c,d,b,i);return c;}
function AIo(a,b,c){Nh(a,b,c,R(Bv,0));}
function Nh(a,b,c,d){a.gi=b;a.eD=c;a.lm=d;}
function I6(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Et(a);e=new M;O(e);G(G(e,B(142)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function Et(a){var b;b=a.gi;return Fs(b!==null?b.name:a.eD.name);}
function AIP(a){var b,c,d,e,f;if(a.eD===null){b=a.lm;c=Et(a);d=Ys(b);e=new M;O(e);G(G(G(e,d),B(143)),c);c=N(e);}else{b=a.lm;c=Et(a);f=I6(a,a.eD.size);d=Ys(b);e=new M;O(e);S(G(G(G(G(e,d),B(143)),c),B(144)),f);c=N(e);}return c;}
function Kf(){var a=this;Kj.call(a);a.nP=null;a.mX=null;}
function XO(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.nP;e=0;f=0;g=a.mX;a:{while(true){if((e+32|0)>f&&DD(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=W(B4(b)+j|0,i.length);MR(b,d,j,f-j|0);e=0;}if(!DD(c)){k=!DD(b)&&e>=f?ATv:ATu;break a;}i=g.data;j=W(B4(c),i.length);l=new M0;l.ma=b;l.oC=c;k=Z8(a,d,e,f,g,0,j,l);e=l.rP;j=l.s2;if(k===null){if(!DD(b)&&e>=f)k=ATv;else if(!DD(c)&&e>=f)k=ATu;}V0(c,g,0,j);if(k!==null)break;}}Ez(b,b.Q-(f-e|0)|0);return k;}
var OH=F(Kf);
function Z8(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(K5(h,2))break a;i=ATu;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Lr(l)){if((f+3|0)>g){j=j+(-1)|0;if(K5(h,3))break a;i=ATu;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CC(l)){i=DQ(1);break a;}if
(j>=d){if(DD(h.ma))break a;i=ATv;break a;}c=j+1|0;m=k[j];if(!CZ(m)){j=c+(-2)|0;i=DQ(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(K5(h,4))break a;i=ATu;break a;}k=e.data;o=Em(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.rP=j;h.s2=f;return i;}
var H0=F(DS);
function JY(){var a=this;Cq.call(a);a.pZ=null;a.eY=null;a.cF=null;a.fI=null;a.pa=null;a.ls=null;}
function AR8(a){var b=new JY();W8(b,a);return b;}
function W8(a,b){var c,d,e,f,g;Ea(a,b);a.pZ=OB(0,0,64);a.pa=new Bh;a.ls=new Bh;c=AEi(b);a.eY=c;d=new TZ;d.p8=EI(B(125),16.0);d.di=c;d.dx=ACL();e=L_(d.di);d.b2=e;e.e0=EI(B(125),17.0);a.fI=d;c=ARS(a.eY,d);a.cF=c;d=a.eY;f=d.id.dk!==(DX()).activeElement?0:1;if(f)Jk(d);d.eh=c;if(f)Kc(d);X(b.n.bE,a.fI);X(b.n.dK,a.fI);X(b.n.bE,a.cF);X(b.n.bY,new Q7);c=b.n.bY;d=new Q_;d.sN=a;X(c,d);c=b.n.bY;d=new Jy;g=a.cF;BI(g);e=new Q$;e.lS=g;Uy(d,b,null,e);X(c,d);c=b.n.bY;d=a.eY;BI(d);g=new Q9;g.ol=d;X(c,g);c=b.n.f5;d=a.cF;BI(d);g
=new Q8;g.tv=d;X(c,g);c=b.n.gI;d=new Rc;d.mz=a;X(c,d);c=b.n.dK;d=new Rb;d.ri=a;X(c,d);b=b.n.eA;c=new Ra;c.sf=a;X(b,c);SY(a);}
function AFt(a,b){var c,d,e,f;c=a.cF;d=c.e.f;e=d.fi;f=d.ck;e=e!=f&&b-d.om>0.03125?1:0;if(e&&c.ku!=f){c.ku=f;RM(c);}e=c.bi;f=D4(c,(e+c.uo|0)-c.tR|0,EN(c));c.bi=f;e=e==f?0:1;return !RX(c.cx,b)&&!e&&!c.p7?0:1;}
function AH_(a){var b;Fj(a.bf.bb,a.pZ);ACI(a.cF);b=a.fI;IB(b.dx,b.di.cX);HX(b.b2);}
function ALO(a){return ACJ(0);}
function AKt(a,b,c){var d,e,f;R2(a.eY,b,c);a.q9(b);b=a.cF;d=a.pa;e=a.ls;CG(b.cl,d);CG(b.cG,e);b.cE=B9(b.qA,c);f=B9(10.0,c);b.kS=f;f=b.cE-f|0;Uw(b.ew,b.cl,f,b.cG.a,c);d=b.cx;f=B9(2.0,c);d.dy.v.b=f;S6(b,b.iy,b.fG);UO(b);}
function AAe(a,b){Bg(a.ls,b.b,b.a);}
function SY(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new KN;c=new Ik;Dp();N1(c,ATF);d=CU(ATJ);e=CU(ATK);f=CU(ATL);g=CU(ATF);h=CU(ATM);i=CU(ATN);j=CU(ATO);Yk();k=(ATP.e_()).data;l=k.length;m=R(IQ,l);n=m.data;o=0;while(o<l){n[o]=k[o].kG;o=o+1|0;}MJ(b,c,d,e,f,g,h,i,j,m,ABN(),Fm());Uu(a,b);}
function AAc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=new KN;c=new Ik;Dp();N1(c,ATQ);d=CU(ATR);e=CU(ATS);f=CU(ATL);g=CU(ATQ);h=CU(ATT);i=CU(ATU);j=CU(ATV);ABL();k=(ATW.e_()).data;l=k.length;m=R(IQ,l);n=m.data;o=0;while(o<l){n[o]=k[o].ld;o=o+1|0;}p=AJ0(Cv(173),Cv(242),Cv(173),Cw(252,250,237));q=new Kp;r=new G6;s=ATX;t=ATS;EK();JI(r,s,t,s,ATY,ATZ);LO(q,r,ACC(),Bm(B(145)),Bm(B(146)),Cv(0),ACC(),AFm(1,0.07500000298023224));MJ(b,c,d,e,f,g,h,i,j,m,p,q);Uu(a,b);}
function Uu(a,b){var c,d;BI(b);c=a.fI;c.bh=b;d=c.dc;if(d!==null)d.dV=b.Z;Iw(c.b2,b.Z);c=a.cF;c.d7=b;c=c.cx;b=b.pe;BF(c.dy.bL,b);}
function ACF(a,b){if(b.bj!=121)return 0;return 1;}
function XU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=a.eY;d=a.cF;if(d!==c.eh?0:1){c=a.fI;if(!DA(c.b2)){e=c.b2;f=b.k;b=new RW;b.T=c;b.bq=d;b.gU=a;g=O$();h=b.bq.e;i=Df(h);j=GG(h);k=b.bq.d1;if(UK(k,i,j)!==null){h=b.T.bh.Z.bd;l=new QC;l.nb=b;l.na=f;DY(g,B(147),h,l);}if(Kg(k,i,j)!==null){m=b.T.bh.Z.bd;l=new QB;l.n3=b;l.n5=f;DY(g,B(148),m,l);}if(MO(k,i,j)!==null){i=b.T.bh.Z.bd;j=new Qz;j.mJ=b;j.mL=f;DY(g,B(149),i,j);}i=b.T.bh.Z.bd;j=new QA;j.tq=b;j.tr=f;DY(g,B(150),i,j);if(!b.bq.eZ){i=b.T.bh.Z.bd;j=new OS;j.sg=
b;DY(g,B(151),i,j);}i=b.T.bh.Z.bd;j=new OQ;j.oZ=b;DY(g,B(152),i,j);if(!b.bq.eZ&&WB(H9(b))){i=b.T.bh.Z.bd;j=new OT;j.rj=b;DY(g,B(153),i,j);}m=b.T.bh.Z.bd;h=O$();j=b.T.bh.Z.bd;n=R(C5,2);o=n.data;p=b.gU;BI(p);q=new RR;q.ne=p;o[0]=Eb(B(154),j,q);p=b.T.bh.Z.bd;q=b.gU;BI(q);r=new RS;r.p9=q;o[1]=Eb(B(155),p,r);Ex(h,B(156),j,FH(n));j=b.T.bh.Z.bd;n=R(C5,2);o=n.data;p=b.bq;BI(p);q=new Nw;q.qw=p;o[0]=Eb(B(157),j,q);p=b.T.bh.Z.bd;q=b.bq;BI(q);r=new Nv;r.ph=q;o[1]=Eb(B(158),p,r);Ex(h,B(159),j,FH(n));j=b.T.bh.Z.bd;l=new Uj;l.pY
=b;Ex(h,B(160),j,l);Ex(g,B(161),m,G8(h));k=b.T.bh.Z.bd;m=O$();Ex(m,B(162),b.T.bh.Z.bd,AC3(b));h=b.T.bh.Z.bd;i=new Vc;i.rr=b;DY(m,B(163),h,i);Ex(g,B(164),k,G8(m));F2(e,f,G8(g),MQ(c,d));}}return 1;}
function XE(){var a=this;Cq.call(a);a.kM=null;a.cY=null;a.f7=null;a.eP=null;a.gS=null;a.tI=null;a.gF=null;a.pV=null;a.lw=null;a.t3=null;a.u9=null;a.fC=null;a.ji=null;a.o7=0;}
function AQl(a){var b=new XE();AJA(b,a);return b;}
function AJA(a,b){var c,d,e,f,g,h,i;Ea(a,b);c=new BW;Dp();AAN(c,ATF);a.kM=c;a.cY=E5(0,0,300,300);a.f7=RK(0,0,3,3);a.eP=E5(0,0,300,300);a.gS=AKP();d=R(Bv,4);e=d.data;e[0]=B(165);e[1]=B(166);e[2]=B(167);e[3]=B(168);a.tI=d;a.gF=R(H8,e.length);f=b.bb;c=b.n.bE;g=new ST;g.eN=a;X(c,g);c=b.n.bY;g=new QL;g.tw=a;X(c,g);c=b.n.lN;g=new QK;g.ny=a;X(c,g);c=b.n.f5;g=new QN;g.vz=a;X(c,g);c=b.n.i2;g=new QM;g.tU=a;X(c,g);c=b.n.eA;g=new QJ;g.u2=a;X(c,g);b=b.n.dK;c=new QI;c.rQ=a;X(b,c);h=CL(a.bf.bb,300,300);c=h.bk;b="white";c.fillStyle
=b;b=h.bk;c="white";b.strokeStyle=c;b=h.bk;c=10.0;b.lineWidth=c;h.bk.strokeRect(75.0,140.0,150.0,110.0);h.bk.fillRect(130.0,190.0,40.0,60.0);h.bk.beginPath();h.bk.moveTo(50.0,140.0);h.bk.lineTo(150.0,60.0);h.bk.lineTo(250.0,140.0);h.bk.closePath();h.bk.stroke();FQ(h,B(169),11.0);KO(h,187,187,187);OG(a,B(170),h);b=CS(a.bf.bb);CM(b,h);FE(h);a.pV=b;F$(a.cY,b);GK(a.cY);BF(a.cY.bV,ATF);BF(a.cY.bL,Cw(204,120,50));b=CL(f,255,100);a.fC=b;FQ(b,B(125),11.0);b=By();i=$rt_str(a.fC.bk.font);g=new M;O(g);G(G(g,B(171)),i);Bu(b,
N(g));Ei(a.fC,B(172));KO(a.fC,169,183,198);OG(a,B(172),a.fC);b=CS(f);a.lw=b;CM(b,a.fC);F$(a.eP,a.lw);GK(a.eP);F1(a.eP,Cv(255));Hh(a.eP,ATF);a.t3=CS(f);BF(a.f7.bV,a.kM);}
function OG(a,b,c){Cf(c,b,0.0,20.0);Cf(c,b,0.25,40.0);Cf(c,b,0.5,60.0);Cf(c,b,0.75,80.0);}
function VR(a,b){I2(Fk(),0.5+Fk()*0.5,0.5+Fk()*0.5,1.0,b.bL);}
function ADE(a,b){var c;a.o7=a.o7+1|0;c=b/5.0;I2(c-(c|0),1.0,1.0,1.0,a.f7.bL);return RX(a.gS,b);}
function AGE(a){var b,c,d,e,f,g;b=a.bf.bb;Fj(b,a.kM);c=a.gF.data;d=c.length;e=0;while(e<d){TA(c[e],b,0,0);e=e+1|0;}Dw(a.cY,b,a.pV,0,0,0.5);f=a.lw;d=0;while(d<7){g=a.eP;Dw(g,b,f,Bb(d,10+((10*g.v.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.u9;if(g!==null)Td(a.f7,b,g,0,0,0.0);Ue(a.gS,b,new Bh);Na(b,B(173));}
function AMP(a,b,c){var d,e,f,g,h,i,j,k,l;d=By();e=Ct(b);f=new M;O(f);G(G(f,B(174)),e);Bu(d,N(f));g=By();d=new M;O(d);E$(G(d,B(175)),c);Bu(g,N(d));h=B9(30.0,c);i=B9(10.0,c);j=0;while(true){k=a.gF.data;if(j>=k.length)break;l=1+j|0;k[j]=RK(Bb(i,l)+Bb(h,j)|0,h,h,h);VR(a,a.gF.data[j]);j=l;}Bg(a.f7.M,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.cY;g=d.M;h=b.b;d=d.v;Bg(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.eP;d.M.a=b.a-d.v.a|0;}
function Og(a,b){var c,d,e,f,g;c=By();d=!b.g6?B(176):B(177);e=b.dm;f=b.bj;g=b.qk;b=new M;O(b);FT(G(S(G(G(G(b,d),e),B(178)),f),B(179)),g);Bu(c,N(b));return 0;}
function DU(){var a=this;Cq.call(a);a.fY=null;a.P=null;}
function Hq(a,b){var c,d;Ea(a,b);a.fY=OB(0,0,64);a.P=AEi(b);X(b.n.bY,new Rn);b=b.n.bY;c=a.P;BI(c);d=new Ro;d.qL=c;X(b,d);}
function G5(a){Fj(a.bf.bb,a.fY);}
function KZ(a,b,c){R2(a.P,b,c);}
var Eh=F(0);
function Ve(){var a=this;DU.call(a);a.p5=null;a.df=null;a.cv=null;a.dO=null;a.qR=null;}
function AOa(a,b,c){var d;d=Fr(a.P,a.qR);HC(a.df,d);HC(a.cv,d);GE(a.df,a.P);GE(a.cv,a.P);}
function MY(b){return Is(b,ANF());}
function Is(b,c){var d;d=O$();JX(d,Ke(b,H2(c,25)),!b?null:Is(b-1|0,c));JX(d,Ke(b,H2(c,20)),!b?null:Is(b-1|0,c));JX(d,Ke(b,H2(c,15)),!b?null:Is(b-1|0,c));JX(d,Ke(b,H2(c,10)),!b?null:Is(b-1|0,c));return G8(d);}
function Ke(b,c){var d;if(b){d=new M;O(d);G(G(S(d,b),B(36)),c);c=N(d);}return c;}
function JX(b,c,d){var e,f;e=new G0;f=I2(Fk(),1.0,1.0,1.0,new BW);EK();Lk(e,f,AT0,AT1);if(d!==null)Ex(b,c,e,d);else{d=new To;d.rS=c;DY(b,c,e,d);}}
function AF$(a,b,c){var d,e;KZ(a,b,c);b=a.P.b1;d=D2(a.df);e=D2(a.cv);Jo(a.df,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);Jo(a.cv,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AGT(a){var b,c,d,e,f,g,h,i;G5(a);b=a.bf.bb;CK(b,1);c=a.p5;d=a.P;e=d.b1;Bg(c.lk,e.b,B9(2.0,d.bG));Bg(c.jH,B9(2.0,d.bG),e.a);EK();f=AT2;g=d.cX;h=e.a/2|0;i=c.lk;BB(g,0,h-(i.a/2|0)|0,i,f);g=d.cX;h=e.b/2|0;c=c.jH;BB(g,h-(c.b/2|0)|0,0,c,f);I7(a.df,a.P);I7(a.cv,a.P);HX(a.dO);CK(b,0);}
function AL$(a,b){var c,d,e;c=JV(a.dO,b);d=JK(a.df,b.k,a.P.cq);e=JK(a.cv,b.k,a.P.cq);return !c&&!d&&!e?0:1;}
function AHQ(a,b,c){return Jj(a.dO,b,c);}
function AEL(a,b,c){return DA(a.dO);}
function ALs(a,b,c,d){var e,f,g;e=IR(a.dO,b,c,d);f=JC(a.df,b.k,c,d);g=JC(a.cv,b.k,c,d);return !e&&!f&&!g?0:1;}
function Wq(){var a=this;DU.call(a);a.fK=null;a.dY=null;a.hE=null;a.ka=null;}
function AG2(a,b,c){if(b===0.0)WK(a);}
function ALK(a){var b;G5(a);b=a.bf.bb;IB(a.dY,b);HX(a.fK);}
function WK(a){var b,c,d,e,f,g,h,i,j,k;b=a.hE;if(b!==null){JA(a.dY,b);Jm(b);}b=Fm();c=ARX(a.P,new UZ);d=EI(B(124),14.0);e=ALw();f=0;while(f<300){g=C0(f);h=new G6;Dp();i=ATG;j=ATK;EK();JI(h,i,j,i,AT3,ATZ);h=new W4;h.qP=B(180);h.qO=g;h.qN=B(181);Ms(e,B(180),g,B(181),h);f=f+1|0;}U2(c,P1(e));NZ(c,d);c.jv=b;k=AAg(a.P);K9(k,Ya(c,a.P));k.dV=b;H_(k,B(182),a.ka,2.0);a.hE=k;In(a.dY,k);TC(a);}
function AFo(a,b,c){KZ(a,b,c);Pd(a.dY,b,c);TC(a);}
function TC(a){var b,c,d;b=a.P.b1;Fb(a.hE,B0((b.b*2|0)/10|0,(b.a*4|0)/10|0),B0((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.hE;b=W6(c.L.s);d=new M;O(d);G(G(d,B(183)),b);H_(c,N(d),a.ka,2.0);}
function AMV(a,b){return NB(a.dY,b);}
function WZ(){var a=this;DU.call(a);a.hB=null;a.fg=null;a.eF=null;a.iT=null;a.nH=null;a.hQ=null;a.fr=null;a.fc=null;a.iO=0;a.fD=0;}
function VK(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fg.i>0){d=Fk();e=a.fg;f=d*(e.i-1|0)|0;e=Ef(e,f);Ef(a.eF,f);f=a.fD;g=e.v;a.fD=f-Bb(g.b,g.a)|0;HQ(a.hB,e.cP);}c=c+1|0;}}
function JT(a,b){var c,d,e,f,g,h,i,j;c=Ib(a.P);Cu(c,a.iT);d=0;while(d<b){e=H2(a.hQ,1+(Fk()*19.0|0)|0);f=AJN();g=f.cP;h=a.hB;BI(c);i=new Qq;i.nT=c;BF(g,GZ(h,e,i));(VX(Fk(),1.0,1.0,f.bV)).bw=0.5;h=f.M;g=f.cP;Bg(h,g.bg|0,g.bv|0);h=f.v;g=f.cP;Bg(h,g.bc|0,g.bw|0);BX(a.eF,e);BX(a.fg,f);j=a.fD;h=f.v;a.fD=j+Bb(h.b,h.a)|0;d=d+1|0;}a.fc=Ww(a.hB);}
function AMh(a){var b,c,d,e,f,g,h,i;G5(a);b=a.bf.bb;CK(b,1);c=a.P.cX;if(a.eF.i){d=a.fc;d=CL(c,d.b,d.a);Cu(d,a.iT);e=a.iT.dd;BB(c,0,0,a.fc,a.nH);f=0;while(f<a.eF.i){g=Bs(a.fg,f);h=Bs(a.eF,f);g=g.cP;Cf(d,h,g.bg,g.bv+e);f=f+1|0;}g=a.fr;if(!(g!==null&&Cb(g)==a.fc.b&&C3(a.fr)==a.fc.a))a.fr=CF(a.fr,CS(c));CM(a.fr,d);FE(d);i=0;while(i<a.eF.i){d=Bs(a.fg,i);F1(d,Cv(0));Dw(d,c,a.fr,0,0,0.0);i=i+1|0;}}CK(b,0);}
function AFM(a,b){var c,d;if(a.iO){c=a.fc;d=W(Bb(c.b,c.a),2211840);if(a.fD/d<=0.7)JT(a,HS(a.hQ,5));else VK(a,HS(a.hQ,5));}return a.iO;}
function Ow(){var a=this;Cq.call(a);a.dJ=null;a.fy=null;a.gt=null;a.kn=null;a.dH=0;a.qz=0;a.sU=null;a.ll=0;a.s9=0;a.rB=null;a.nz=null;}
function ADW(a){var b,c;b=a.dH;c=new M;O(c);S(G(c,B(184)),b);$rt_globals.console.info($rt_ustr(N(c)));Fj(a.dJ,a.sU);H3(a.gt,a.dH,0,FZ(a),5000,a.kn.b,20);CK(a.dJ,1);Ph(a.gt,a.dJ);CK(a.dJ,0);b=a.dH;c=new M;O(c);S(G(c,B(184)),b);$rt_globals.console.info($rt_ustr(N(c)));WJ(a.fy,a.dH/a.ll|0);Th(a.fy,a.dH,FZ(a),a.nz,a.dJ);}
function ANW(a,b,c){a.kn=b;Uw(a.fy,B0(0,0),50,FZ(a),c);Jr(a.fy,a.dJ,0,FZ(a));}
function O9(a){return 5000-FZ(a)|0;}
function FZ(a){return W(a.qz,a.kn.a);}
function C7(){var a=this;Cq.call(a);a.k$=null;a.gd=null;a.tW=0.0;}
function AT4(a){var b=new C7();Gc(b,a);return b;}
function Gc(a,b){Ea(a,b);a.k$=OB(0,0,64);a.gd=new Bh;MS(b.bU,HD(Cm(a)));}
function Ri(a){Fj(a.bf.bb,a.k$);}
function RP(a,b,c){CG(a.gd,b);a.tW=c;}
var P3=F(C7);
var ACy=F(C7);
function ARJ(a){var b=new ACy();AK4(b,a);return b;}
function AK4(a,b){var c,d,e,f,g,h;Gc(a,b);c=b.bU;d=new Qp;d.uv=a;e=R(C,1);e.data[0]=B(185);C1(c,d,B(186),e);f=b.bU;g=new Qo;g.wi=a;h=R(C,1);h.data[0]=Zy([1,2,3,4,5]);C1(f,g,B(187),h);f=b.bU;g=new Qn;g.nw=a;h=R(C,1);h.data[0]=AQ2([1,2,3,4,5]);C1(f,g,B(188),h);f=b.bU;g=new Qm;g.ub=a;h=R(C,1);h.data[0]=EW([1,2,3,4,5]);C1(f,g,B(189),h);f=b.n.bY;d=new Jy;g=new Qk;g.vm=a;c=new Qj;c.oW=a;Uy(d,b,g,c);X(f,d);}
function TD(a,b){var c,d,e,f,g,h;c=b.data;d=By();e=Ct(c[0]);f=new M;O(f);G(G(f,B(190)),e);Bu(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((Q0(b,1)).gZ));d=By();e=Ct(c[1]);if(b===null)f=B(29);else{f=new M;O(f);BY(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BY(f,B(44));S(f,c[g]);g=g+1|0;}BY(f,B(45));f=N(f);}h=new M;O(h);G(G(G(G(h,B(191)),e),B(192)),f);Bu(d,N(h));}
function VU(){var a=this;C7.call(a);a.dv=null;a.es=null;a.jY=null;a.or=null;a.k1=null;}
function AI7(a,b){b=b/5.0;I2(b-(b|0),1.0,1.0,1.0,a.es.bL);return 0;}
function ADy(a){Ri(a);Dw(a.dv,a.bf.bb,a.or,0,0,0.5);Td(a.es,a.bf.bb,a.jY,0,0,0.0);Na(a.bf.bb,B(173));}
function ALI(a,b,c){var d,e,f;RP(a,b,c);Bg(a.es.M,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dv;e=d.M;f=b.b;d=d.v;Bg(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Rk(){var a=this;C7.call(a);a.fW=null;a.qd=null;a.jx=null;a.hS=null;a.hb=null;}
function APk(a){var b,c,d,e,f,g;Ri(a);b=a.bf.bb;c=a.hS;Uc(b,c.b,c.a,a.hb);b=a.fW;c=a.qd;d=a.gd;e=a.bf.bb;f=0;while(true){g=0;while(true){Dw(b,e,c,g,f,0.5);g=g+Cb(c)|0;if(g>=d.b)break;}f=f+C3(c)|0;if(f>=d.a)break;}K3(a.bf.bb);}
function AFd(a,b,c){RP(a,b,c);Bg(a.hb,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function N5(){var a=this;Cq.call(a);a.dQ=null;a.jp=null;a.eM=null;a.bT=null;a.ec=0;a.hm=null;a.ed=0;a.u3=20;a.wx=11;a.uJ=220;a.iC=null;a.vq=5000;a.gf=0;a.e4=null;}
function APn(a){var b,c,d,e,f,g,h;b=a.hm;c=a.ed;d=a.iC;H3(b,c,0,d.a,5000,d.b,20);CK(a.dQ,1);Ph(a.hm,a.dQ);if(a.bT===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Cf(a.jp,C0(e),0.0,c);}b=CS(a.dQ);a.bT=b;CM(b,a.jp);}if(a.ed<=a.ec)while(true){f=a.ec;if(f<=a.ed)break;a.ec=f-20|0;b=a.eM;g=a.gf-1|0;a.gf=g;Cf(b,C0(g),0.0,20.0);Hz(a.bT,a.eM,0,a.ec%220|0);Eq(a.eM);}else while(a.ec<(a.ed-20|0)){b=a.eM;g=a.gf+1|0;a.gf=g;Cf(b,C0((g+11|0)-1|0),0.0,20.0);Hz(a.bT,a.eM,0,a.ec%220|0);Eq(a.eM);a.ec=a.ec+20|0;}b=E5(0,0,Cb(a.bT),C3(a.bT));Hk(b,
0,0,Cb(a.bT),C3(a.bT));F1(b,a.e4.data[0]);Hh(b,a.e4.data[1]);Dw(b,a.dQ,a.bT,400,0,1.0);g=a.ed%220|0;f=W(C3(a.bT)-g|0,200);d=E5(0,0,Cb(a.bT),f);Hk(d,0,g,Cb(a.bT),f);F1(d,a.e4.data[0]);Hh(d,a.e4.data[1]);Dw(d,a.dQ,a.bT,0,0,1.0);h=E5(0,f,Cb(a.bT),(C3(a.bT)-f|0)-20|0);Hk(h,0,0,Cb(a.bT),(C3(a.bT)-f|0)-20|0);F1(h,a.e4.data[1]);Hh(h,a.e4.data[0]);Dw(h,a.dQ,a.bT,0,0,1.0);}
function AHk(a,b,c){CG(a.iC,b);}
function AFS(a,b){return 0;}
function QT(a){return 5000-a.iC.a|0;}
function H4(){C7.call(this);this.dg=0;}
function Qh(a){var b,c;b=a.bf.bU;c=new PA;c.me=a;P0(b,c,QD(a));}
function LT(a){var b,c,d,e;b=a.dg+1|0;a.dg=b;c=HD(E(H4));d=new M;O(d);G(G(S(G(d,B(193)),b),B(36)),c);e=N(d);c=a.bf.bU;d=new Tg;d.oE=e;Tt(c,e,d,QD(a));}
function QD(a){var b;b=new UR;b.nD=a;return b;}
function AMJ(a,b,c,d){a:{switch(c){case 0:break;case 2:LT(a);break a;default:break a;}Qh(a);}return 1;}
function Pp(){var a=this;Cq.call(a);a.mP=null;a.eG=null;a.k2=null;a.hC=null;}
function APe(a){var b;b=a.bf.bb;Fj(b,a.mP);Dw(a.eG,b,a.k2,0,0,0.5);}
function AJ5(a,b,c){var d,e,f;d=a.eG;e=d.M;f=b.b;d=d.v;Bg(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Vu(){var a=this;DU.call(a);a.fh=null;a.dL=null;a.iL=null;a.iM=null;a.rA=null;}
function AIh(a,b,c){if(b===0.0)M5(a);}
function APF(a){var b;G5(a);b=a.bf.bb;IB(a.dL,b);HX(a.fh);}
function M5(a){VI(a,a.iL);VI(a,a.iM);a.iL=Mm(a,0.5,0,B(194));a.iM=Mm(a,1.0,1,B(195));In(a.dL,a.iL);In(a.dL,a.iM);V8(a);}
function VI(a,b){if(b!==null){JA(a.dL,b);Jm(b);}}
function Mm(a,b,c,d){var e,f,g;e=AAg(a.P);f=new U6;g=new OO;g.rD=a;g.rE=e;g.rC=d;SR(f);f.hv=new BW;f.kO=new Bh;f.qM=g;f.oB=b;if(c)f=Ya(f,a.P);K9(e,f);e.dV=Fm();return e;}
function AL2(a,b,c){KZ(a,b,c);Pd(a.dL,b,c);V8(a);}
function V8(a){var b;b=a.P.b1;Fb(a.iM,B0((b.b*2|0)/10|0,(b.a*2|0)/10|0),B0((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fb(a.iL,B0(b.b/10|0,b.a/10|0),B0((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AI3(a,b){return NB(a.dL,b);}
var Ql=F(JY);
function AIm(a){return ACJ(1);}
function AFk(a,b){AAe(a,b);}
var Iy=F(0);
function LE(){var a=this;C.call(a);a.io=null;a.hP=null;}
function LQ(a,b){var c;c=a.hP;a.hP=b;return c;}
function IV(){var a=this;LE.call(a);a.bF=null;a.bQ=null;a.e3=0;a.fa=0;}
function Ja(a){var b;b=Kk(a);if(b==2){if(Kk(a.bQ)<0)a.bQ=Mv(a.bQ);return N2(a);}if(b!=(-2))return a;if(Kk(a.bF)>0)a.bF=N2(a.bF);return Mv(a);}
function Kk(a){var b,c;b=a.bQ;c=b===null?0:b.e3;b=a.bF;return c-(b===null?0:b.e3)|0;}
function Mv(a){var b;b=a.bF;a.bF=b.bQ;b.bQ=a;D_(a);D_(b);return b;}
function N2(a){var b;b=a.bQ;a.bQ=b.bF;b.bF=a;D_(a);D_(b);return b;}
function D_(a){var b,c,d;b=a.bQ;c=b===null?0:b.e3;b=a.bF;d=b===null?0:b.e3;a.e3=Ba(c,d)+1|0;a.fa=1;b=a.bF;if(b!==null)a.fa=1+b.fa|0;b=a.bQ;if(b!==null)a.fa=a.fa+b.fa|0;}
var ACf=F();
function AEC(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Oq;c=c.buffer;d.e2=c;d.lG=new $rt_globals.Int8Array(c);d.jq=new $rt_globals.Uint16Array(c);d.rb=new $rt_globals.Int32Array(c);d.oc=new $rt_globals.Float32Array(c);d.oo=new $rt_globals.Float64Array(c);e=d.e2.byteLength;c=new M;O(c);S(G(c,B(196)),e);CE(N(c));e=b.callToCpp1();c=new M;O(c);S(G(c,B(197)),e);CE(N(c));f=b.callToCpp2();c=new M;O(c);E$(G(c,B(198)),f);CE(N(c));c=Mg(d,b.getC8String());g=new M;O(g);G(G(g,B(199)),c);CE(N(g));c
=Mp(d,b.getC16String());g=new M;O(g);G(G(g,B(200)),c);CE(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.e2,h,8));c=AA1(i);g=new M;O(g);G(G(g,B(201)),c);CE(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.e2,h,8));c=AM4(j);g=new M;O(g);G(G(g,B(202)),c);CE(N(g));k=Zh(d,b.getCDoubleArray8(),8);l=APH(k);c=new M;O(c);G(G(c,B(203)),l);CE(DI(c));l=APu(b.getC8String(),B(204),d);c=K_();G(G(c,B(205)),l);CE(DI(c));l=AJT(b.getC16String(),B(206),
d);c=K_();G(G(c,B(207)),l);CE(DI(c));c=ALC(i,d,b.getCIntArray8(),EW([11,22,33,44,55,66,77,88]));g=K_();G(G(g,B(208)),c);CE(DI(g));c=ANh(j,d,b.getCFloatArray8(),100,EW([111,222,333,444,555,666,777,888]));g=K_();G(G(g,B(209)),c);CE(DI(g));b=ANw(k,d,b.getCDoubleArray8(),1000,EW([1111,2222,3333,4444,5555,6666,7777,8888]));c=K_();G(G(c,B(210)),b);CE(DI(c));}
function ANh(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(211);h=0;i=e;a:{while(h<g){if(CX(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.oc[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(212);}return B(213);}
function ANw(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(211);h=0;i=e;a:{while(h<g){if(GY(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.oo[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(212);}return B(213);}
function ALC(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(211);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.rb[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(212);}return B(213);}
function APu(b,c,d){var e,f,g,h;e=Mg(d,b);if(!Bo(c,e))return B(214);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lG[h])return B(215);f=f+1|0;}return B(212);}
function AJT(b,c,d){var e,f,g,h;e=Mp(d,b);if(!Bo(c,e))return B(214);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jq[h>>>1|0]&65535))return B(215);f=f+1|0;}return B(212);}
function CE(b){Om(B(2),b);}
function AIQ(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
var XX=F(0);
function OB(b,c,d){return Hi(b,c,d,255,new BW);}
function W2(b,c,d,e){return Hi(b,c,d,e,new BW);}
function Hi(b,c,d,e,f){CD(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function VX(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bg=g+i;e.bv=h+i;e.bc=j+i;return e;}
function I2(b,c,d,e,f){f=VX(b,c,d,f);f.bw=e;return f;}
function Gq(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function ACT(){var a=this;C.call(a);a.cX=null;a.id=null;a.b1=null;a.cq=null;a.bG=0.0;a.eh=null;a.dB=null;a.jL=null;a.nk=null;a.wz=null;a.wy=null;}
function AEi(a){var b=new ACT();AES(b,a);return b;}
function AES(a,b){var c,d;a.b1=new Bh;a.dB=CH(R(Eh,0));a.jL=new Bh;a.nk=new Bh;a.wz=new BW;a.wy=new BW;a.cX=b.bb;c=b.bU;a.id=c;a.cq=TK(c);c=b.n.jJ;d=new LV;d.mQ=a;X(c,d);b=b.n.i2;c=new LW;c.pf=a;X(b,c);}
function R2(a,b,c){var d,e,f,g;a:{CG(a.b1,b);d=a.bG;if(d!==c){a.bG=c;e=(Cn(a.dB)).data;f=e.length;g=0;while(true){if(g>=f)break a;e[g].f6(d,c);g=g+1|0;}}}}
function Mi(a,b){var c;c=a.eh;return c!==null&&c.gz(b)?1:0;}
function Kc(a){var b;b=a.eh;if(b!==null)b.re();}
function Jk(a){var b;b=a.eh;if(b!==null)b.tu();}
function It(a,b){Jk(a);a.eh=b;Kc(a);}
function Ib(a){return a.cX.cr;}
function Fr(a,b){return G2(a.cX,b.h2,B9(b.hr,a.bG));}
function CJ(a,b){return B9(b,a.bG);}
function TZ(){var a=this;C.call(a);a.di=null;a.p8=null;a.dx=null;a.dc=null;a.b2=null;a.bh=null;}
function AMk(a,b){return !X8(a.dx,b)&&!JV(a.b2,b)?0:1;}
function APP(a,b,c,d){return !ZU(a.dx,b,c,d)&&!IR(a.b2,b,c,d)?0:1;}
function APx(a,b,c){return !Y3(a.dx,b,c)&&!Jj(a.b2,b,c)?0:1;}
function AKS(a,b,c){return !ACK(a.dx,b,c)&&!DA(a.b2)?0:1;}
function Ul(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=ALw();i=c.i;j=0;while(j<i){if(f===null){k=(Bs(c,j)).bm;l=QX(ED(B2(g.f,k)));m=UM(g.fB);}else{n=f.data;k=n[j].jF.km;l=!Dg(g.fB,n[j].hI)?B(31):QX(ED(B2(g.f,k)));m=UM(n[j].hI);}if(I(l)>153){o=B8(l,0,150);n=new M;O(n);G(G(n,o),B(216));l=N(n);}if(I(m)>153){o=B8(m,0,150);n=new M;O(n);G(G(n,o),B(216));m=N(n);}p=C0(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bs(c,j);}if(f!==null){q=new Tx;q.mM=d;q.mK=o;}else{q=new Tz;q.tH=d;q.tD=n;}Ms(h,
m,p,l,q);j=j+1|0;}r=P1(h);if(a.dc!==null)Tc(a);c=new P2;n=a.di;o=new Ry;o.nB=a;o.nA=d;Y5(c,n,o);NZ(c,EI(B(124),15.0));U2(c,r);c.jv=a.bh.Z;d=AAg(a.di);a.dc=d;K9(d,Ya(c,a.di));d=a.dc;n=new M;O(n);G(G(n,B(217)),e);H_(d,N(n),a.p8,4.0);d=a.dc;d.dV=a.bh.Z;In(a.dx,d);d=a.dc;s=(d.O.s.a+CJ(d.bn,2.0)|0)+CJ(a.di,2.0)|0;t=(c.dt+c.dw|0)+c.fz|0;e=B0(Ep(0,b.b,c.cM.b1.b-t|0),Ep(s,b.a,c.cM.b1.a-c.ct.a|0));Sr(c);Yp(c);s=(c.dt+c.dw|0)+c.fz|0;b=c.cM;i=(b.b1.b-e.b|0)-CJ(b,5.0)|0;b=c.cM;t=(b.b1.a-e.a|0)-CJ(b,5.0)|0;d=B0(W(s,i),W(c.ct.a,
t));Fb(a.dc,e,d);It(a.di,c);}
function Tc(a){JA(a.dx,a.dc);Jm(a.dc);a.dc=null;}
function MQ(a,b){var c;c=new Rp;c.sb=a;c.sh=b;return c;}
function AJu(a,b,c,d){return KB(a.dx,b,c,d);}
function XD(b){var c;c=new U4;c.sv=b;return c;}
var Hs=F(0);
function AFI(a){}
function APX(a){}
function Zi(){var a=this;C.call(a);a.d2=null;a.V=null;a.h1=null;a.p7=0;a.lc=null;a.cx=null;a.x=0;a.w=0;a.gM=0;a.ky=0;a.fG=0;a.iy=null;a.en=null;a.cp=null;a.W=0;a.e=null;a.d1=null;a.p=null;a.fb=null;a.d7=null;a.lL=null;a.f8=null;a.sx=0;a.qG=0;a.qA=0;a.cE=0;a.jN=0;a.kS=0;a.j8=null;a.eu=null;a.eq=null;a.bi=0;a.cg=0;a.gR=0;a.hD=0;a.ht=0;a.uo=0;a.tR=0;a.iW=0;a.ks=0;a.ew=null;a.cl=null;a.cG=null;a.hq=0;a.hp=0;a.em=null;a.eZ=0;a.hO=null;a.hG=null;a.t6=null;a.gy=null;a.ku=0;a.p4=null;a.g0=null;a.ep=Eg;a.fP=null;a.rU
=null;a.sq=null;}
function ARS(a,b){var c=new Zi();AIf(c,a,b);return c;}
function AIf(a,b,c){var d,e,f,g;a.p7=0;a.lc=R(Bi,10);a.cx=AKP();a.fG=16;a.iy=B(124);a.cp=R(Kv,4);d=new H5;e=new Hr;e.dS=HG();e.d_=HG();e.e1=Cl();e.B=Ma(B(31));e.fi=0;e.ck=0;e.cU=Te(e);d.f=e;d.ix=B(166);d.fB=null;a.e=d;f=new U1;f.mC=CH(R(LB,0));f.rp=CH(R(LB,0));f.rI=CH(R(LZ,0));f.nC=CH(R(Pq,0));f.l9=CH(R(H7,0));f.p$=CH(R(Qt,0));a.d1=f;a.p=ALi();e=new MM;e.ej=R(IN,16);e.ek=0;e.cZ=(-1);a.fb=e;a.f8=R(EM,0);a.qA=100;a.jN=1;a.j8=B0(1,0);a.eu=G7();a.eq=G7();a.bi=0;a.cg=0;a.gR=0;a.ht=1;a.iW=1;a.ks=3;a.ew=AJ3();a.cl
=new Bh;a.cG=new Bh;a.em=B(218);a.eZ=0;a.hO=null;a.hG=Cl();e=K2();BI(e);f=new TV;f.wl=e;a.gy=f;a.p4=new BW;a.g0=new Bh;e=new TU;e.pU=a;a.rU=e;e=new TQ;e.m0=a;a.sq=e;a.d2=b;a.V=b.cX;a.h1=c;g=a.lc.data;b=new TP;b.rT=a;g[0]=b;b=new TS;b.qe=a;g[1]=b;b=new TR;b.nc=a;g[2]=b;b=new Uh;b.so=a;g[3]=b;ADB();a.hD=AT5===AT6?0:1;}
function AGy(a){a.ky=1;K1(a);}
function AFe(a){a.ky=0;}
function K1(a){Rr(a.cx,IW(Cg(a)));}
function KA(a,b,c){if(a.d2.bG!==0.0){S6(a,b,c);FS(Cg(a));}a.fG=c;a.iy=b;}
function S6(a,b,c){var d,e,f,g,h,i,j;d=B9(c,a.d2.bG);e=a.en;f=e!==null?e.nO:0;if(!(d==f&&Dg(b,a.iy))){g=a.ew;Ju(g.co,new QH);G_(g.co);g.ee=CF(g.ee,null);g.eV=CF(g.eV,null);h=a.f8.data;c=h.length;f=0;while(f<c){PH(h[f]);f=f+1|0;}h=a.e.f.B.data;c=h.length;f=0;while(f<c){D8(h[f]);f=f+1|0;}h=a.cp.data;c=G1(0,0);e=a.V;i=d;h[c]=GA(e,b,i,400,0);a.cp.data[G1(0,1)]=GA(a.V,b,i,400,2);a.cp.data[G1(1,0)]=GA(a.V,b,i,700,0);a.cp.data[G1(1,1)]=GA(a.V,b,i,700,2);e=a.cp.data[G1(0,0)];a.en=e;c=DZ(e);a.W=CX(c*1.25);a.cx.dy.v.a
=DZ(a.en);a.lL=CF(a.lL,CL(a.V,1024,a.W));f=a.W;j=RJ(a.cx);e=new M;O(e);b=G(G(e,B(219)),b);BA(b,32);S(G(S(G(S(G(S(b,d),B(220)),c),B(134)),f),B(221)),j);$rt_globals.console.info($rt_ustr(N(e)));if(AT7){c=KC(a.en,a.W);b=new M;O(b);S(G(b,B(222)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gM=GH(Fi(a),a.w,a.V.cr,a.cp);GB(a);UO(a);}}
function Ua(a){return Bb(CA(a.e.f)+5|0,a.W);}
function EN(a){return Ba(Ua(a)-a.cG.a|0,0);}
function F_(a){return Ba(a.gR-DK(a)|0,0);}
function DK(a){return a.cG.b-a.cE|0;}
function Dz(a){return a.cG.a;}
function ACI(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=H$(a.cG.a,a.W)+7|0;c=a.f8;if(c.data.length<b)a.f8=Y6(b,c,a.sx,a.qG,a.e.f);CK(a.V,0);d=a.j8;d.a=a.cG.a;d.b=a.jN;e=a.V;f=a.cl;BB(e,(f.b+a.cE|0)-a.kS|0,f.a,d,a.d7.rv);d=a.j8;b=a.kS;g=a.jN;d.b=b-g|0;e=a.V;f=a.cl;BB(e,((f.b+a.cE|0)-b|0)+g|0,f.a,d,a.d7.iS);a.bi=W(a.bi,EN(a));a.cg=W(a.cg,F_(a));g=(a.W-RJ(a.cx)|0)/2|0;h=(a.gM-(PB(a.cx)/2|0)|0)-a.cg|0;O8(a.cx,a.cE+h|0,(g+Bb(a.x,a.W)|0)-a.bi|0);i=CA(a.e.f);j=Kt(a);k=T9(a);a.sx=j;a.qG=k;l=j;while(l<=k&&l<i){m
=B2(a.e.f,l);n=Qa(a,l);f=a.lL;o=a.cp;p=a.V;q=a.W;r=DK(a);s=a.cg;d=n.bN;b=d===m&&!d.hA?0:1;if(b){n.bN=m;KE(m,p.cr,o);}d=n.bN;g=d===null?0:ES(d)<r?H$(ES(n.bN),1024):H$(r,1024)+1|0;r=g<=n.dl?0:1;if(r)n.dl=g;if(!(!b&&!r)){if(AT8){c=m.e5;$rt_globals.console.info("fMeasure"+c.data);AT8=0;}AA2(f,AT7);AA8(n,f,p,o,q,s);n.bN.hA=0;}AAT(n,f,o,q,s);t=n.bN;a.gR=Ba(a.gR,ES(m)+(40.0*a.d2.bG|0)|0);r=Bb(a.W,l)-a.bi|0;d=a.cl;AAY(n,d.a+r|0,d.b+a.cE|0,a.V,a.p4,a.g0,!a.hD?0.0:0.5,DK(a),a.W,a.cg,a.d7,ABW(a,l,t),a.hO,a.hG);l=l+1|0;}q
=j;while(q<=k&&q<i&&a.iW){d=Qa(a,q);r=Bb(a.W,q)-a.bi|0;e=!Yx(a.p,q)?a.d7.l6:a.d7.kY;f=a.V;p=a.cl;AAI(d,f,p.b+a.cE|0,p.a+r|0,a.W,a.g0,a.cg,DK(a),e);q=q+1|0;}if(a.ky&&h>=(( -PB(a.cx)|0)/2|0)){d=a.cx;e=a.cG;if(X2(d.dy.M,0,0,e))Ue(a.cx,a.V,a.cl);}if(a.ht){s=W(k+1|0,i);AAh(a,Bb(a.W,s)-a.bi|0);}Zv(a,j,k);AAS(a);ABv(a);}
function ABW(a,b,c){var d,e,f,g;a:{d=a.p;e=DT(d);d=Fo(d);f=e.I;if(f<=b){g=BD(b,d.I);if(g<=0){d=B0(b<=f?e.U:0,g>=0?d.U:(-1));break a;}}d=null;}if(d!==null){if(d.a==(-1))d.a=c.N;d.b=GH(c,d.b,a.V.cr,a.cp);d.a=GH(c,d.a,a.V.cr,a.cp);}return d;}
function Zv(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cG.a;e=W(d,Bb(CA(a.e.f),a.W)-a.bi|0);f=a.ew;g=a.bi;h=a.x;i=a.V;j=a.d7.tk;Jr(f,i,b,d);WJ(f,b);Th(f,g,e,j,i);if(e<d){k=f.fw;BB(i,k.b,k.a+e|0,B0(f.eI.b,d-e|0),j.g8);}if(b<=h&&h<=c){c=h/20|0;k=f.co;k=Bs(k,c%k.i|0);l=f.fw;c=Bb(f.co.i,f.hX);b=k.ea.a;d=((k.iv.a-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C3(k.bR)|0)|0;b=h%k.dr|0;e=k.d9;d=d+Bb(b,e)|0;if(d<( -e|0))d=d+c|0;Bg(k.fZ,k.ea.b,e);m=k.fn;b=h%k.dr|0;c=k.d9;CD(m,0.0,Bb(b,c),k.ea.b,c);Iv(k,i,d,l,j.oz,j.oH);}}
function Kt(a){return W(a.bi/a.W|0,CA(a.e.f)-1|0);}
function T9(a){return W(((a.bi+Dz(a)|0)-1|0)/a.W|0,CA(a.e.f)-1|0);}
function UO(a){SK(a.ew,a.cp.data[0],a.W,a.V);Jr(a.ew,a.V,Kt(a),Dz(a));}
function Qa(a,b){var c;c=a.f8.data;return c[b%c.length|0];}
function ACS(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Di(a.p))DH(a,a.em);else{b=DT(a.p);c=Fo(a.p);d=c.I;e=b.I;f=(d-e|0)+1|0;g=BH(f);h=g.data;i=R(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.em;e=e+1|0;k=f;}l=EL(a.x,a.w);m=new U5;m.rg=a;OI(a,g,0,0,i,l,m);b.U=b.U+I(a.em)|0;c.U=c.U+I(a.em)|0;Lj(a,a.w+I(a.em)|0,0);DO(a);}return 1;}
function AAB(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Di(a.p)){b=B2(a.e.f,a.x);if(b.o.data.length>0){c=QV(a,b);if(c===null)return 1;d=a.e.f;e=a.x;f=EL(e,a.w);d.ck=d.ck+1|0;g=d.e1;h=R(GJ,1);h.data[0]=ADF(e,0,1,c,f.bm,f.br);BX(g,h);I$(d,e,0,1,c);FI(b,0,I(c));Lj(a,a.w-I(c)|0,0);}}else{f=DT(a.p);c=Fo(a.p);i=c.I;j=f.I;i=(i-j|0)+1|0;k=BH(i);h=k.data;l=R(Bv,i);m=l.data;e=a.w;n=a.x;o=0;while(j<=c.I){b=B2(a.e.f,j);if(b.o.data.length>0){b=QV(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=ACG(k,o);h=Dc(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.I)f.U=Ba(0,f.U-I(b)|0);if(j==c.I){c.U=Ba(0,c.U-I(b)|0);Lj(a,a.w-I(b)|0,0);}i=i+1|0;}f=EL(n,e);b=new RN;b.sV=a;OI(a,p,0,1,h,f,b);}DO(a);return 1;}
function QV(a,b){var c,d,e,f;c=Ep(0,I(a.em),Wh(b));if(!c)b=null;else{b=B(60);if(c<0){b=new BC;U(b);J(b);}if(c!=1){d=b.bP.data.length;if(d&&c){e=BQ(Bb(d,c));d=0;f=0;while(f<c){O1(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=LC(e);}else b=ASL;}}return b;}
function OI(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BH(i);k=ASe(i).data;Hb(j,c);c=0;l=k.length;if(c>l){f=new BC;U(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.ck=o.ck+1|0;p=R(GJ,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ADF(h[m],n[m],k[m],b[m],f.bm,f.br);m=m+1|0;}BX(o.e1,p);c=0;while(c<i){b=e.data;I$(o,h[c],n[c],k[c],b[c]);g.lJ(FO(h[c]),b[c]);c=c+1|0;}}
function AB9(a){var b,c,d,e,f,g,h,i;if(Di(a.p))Gs(a);D8(B2(a.e.f,a.x));b=a.e.f;c=a.x;d=a.w;e=b.B;f=e.data;g=f[c];e=Dc(e,f.length+1|0);f=e.data;b.B=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DF(R(B5,0));b.B.data[c+1|0]=g;}else if(d==g.N){f[c]=g;f[c+1|0]=DF(R(B5,0));}else{f=(Ia(g,d)).data;e=b.B.data;e[c]=f[0];e[c+1|0]=f[1];}Gl(b,c,d,0,B(223));DO(a);return Cz(a,a.x+1|0,0,0);}
function ABO(a){if(Di(a.p))Gs(a);else Ox(a.e.f,a.x,a.w);GB(a);DO(a);return 1;}
function Xh(a){var b,c,d;if(Di(a.p)){Gs(a);return 1;}b=a.w;if(!b&&!a.x)return 1;if(b){c=a.x;b=b-1|0;Ox(a.e.f,c,b);}else{c=a.x-1|0;b=E_(a.e.f,c);d=a.e.f;Ks(d,c);Gl(d,c,E_(d,c),1,B(223));}DO(a);return Cz(a,c,b,0);}
function DH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eZ)return 0;if(Di(a.p))Gs(a);c=Lg(Ui(b,B(224),B(31)),B(223),(-1));d=c.data;b=a.e.f;e=a.x;f=a.w;WS(b,e,f,c);g=d.length;if(!g)h=ASL;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BQ(i+Bb(g-1|0,I(B(223)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(223))){m=l+1|0;c[l]=L(B(223),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=LC(k);}Gl(b,e,f,0,h);e=a.x;m=(e+g|0)-1|
0;Cz(a,m,m!=e?I(d[g-1|0]):a.w+I(d[0])|0,0);EY(a);DO(a);return 1;}
function Gs(a){var b,c,d;b=DT(a.p);c=a.e.f;d=a.p;Sx(c,d,U_(c,d));Cz(a,b.I,b.U,0);EY(a);DO(a);}
function EY(a){var b;b=a.p;b.cL=0;B1(b.bI,a.x,a.w);B1(a.p.bA,a.x,a.w);}
function Py(a){return a.en.iU|0;}
function AAh(a,b){var c,d,e;c=a.cG.a;if(b<c){d=a.g0;d.a=c-b|0;d.b=DK(a);d=a.V;e=a.cl;BB(d,e.b+a.cE|0,e.a+b|0,a.g0,a.d7.iS);}}
function AAS(a){H3(a.eu,a.bi,a.cl.a,Dz(a),Ua(a),a.cl.b+a.cG.b|0,Py(a));LL(a.eq,a.cg,a.cl.b+a.cE|0,DK(a),a.gR,a.cl.a+Dz(a)|0,Py(a));}
function ABv(a){var b,c;b=O6(a.eu);c=O6(a.eq);if(!(!b&&!c)){CK(a.V,1);if(b)FL(a.eu,a.V);if(c)FL(a.eq,a.V);if(b)F5(a.eu,a.V);if(c)F5(a.eq,a.V);}}
function D4(a,b,c){return W(Ba(0,b),c);}
function Hm(a,b){var c,d,e,f,g;b=b.data;a.hq=1;a.hp=1;c=Eo(b[0]);d=Fy(b[1]);e=(Eo(b[2])).data[0];a.e.f=AAm(c,d);Vj(a,ABT(e));Gh(Cg(a),AT9);FS(Cg(a));f=JS(Fu(),a.ep);g=new M;O(g);G(Hv(G(g,B(225)),f),B(226));$rt_globals.console.info($rt_ustr(N(g)));}
function Vj(a,b){var c,d;c=Df(a.e);if(!Dg(c,b)){d=new M;O(d);G(G(G(G(d,B(227)),c),B(228)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.ix=b;}}
function Cg(a){return a.d2.id;}
function QU(a,b){var c,d,e,f,g,h,i;c=Et(b);d=new M;O(d);G(G(d,B(229)),c);$rt_globals.console.info($rt_ustr(N(d)));MS(Cg(a),Et(b));Cz(a,0,0,0);a.ep=Fu();a.hq=0;a.hp=0;e=new H5;f=R(Bv,1);f.data[0]=B(31);PM(e,f,null,AOV(B(31),B(31),Et(b),null));a.e=e;Cz(a,0,0,0);c=Et(b);g=FP(c,46,I(c)-1|0);if(g!=(-1))c=Db(c,g);h=!Bo(c,B(230))?5120:10240;c=new Wf;c.qp=a;c.qq=h;c.qr=b;i=b.eD;if(i!==null)Lt(c,I6(b,i.size));else{i=b.gi.getFile();d=new SC;d.lO=b;d.lP=c;b=new SF;b.sR=c;i.then(Bk(d,"f"),Bk(b,"f"));}}
function Hf(a,b,c,d,e){if(G9(a,e))return 1;if(c&&d)return 1;if(c)a.bi=D4(a,a.bi+((Bb(b,a.W)*12|0)/10|0)|0,EN(a));else if(!d){Ie(a,a.x+b|0,e);St(a);}return 1;}
function Ti(a,b,c,d){var e,f,g;if(G9(a,d))return 1;e=Fi(a);if(!c)f=a.w+b|0;else if(b>=0)f=GC(e,a.w);else{f=a.w;if(!f)f=(-1);else{c=HZ(e,f);if(c>0&&e.c_.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.c_.data[c-1|0];}}if(f>e.N){if((a.x+1|0)<CA(a.e.f))Cz(a,a.x+1|0,0,d);}else if(f>=0)Dj(a,f,d);else{b=a.x;if(b>0){g=(B2(a.e.f,b-1|0)).N;Cz(a,a.x-1|0,g,d);}}OU(a);return 1;}
function G9(a,b){if(Di(a.p)&&!b){EY(a);GB(a);return 1;}if(!(b&&Di(a.p)))EY(a);return 0;}
function Cz(a,b,c,d){a.w=c;return Ie(a,b,d);}
function Ie(a,b,c){a.x=Ep(0,b,CA(a.e.f)-1|0);return Dj(a,a.w,c);}
function Dj(a,b,c){a.w=Ep(0,b,(Fi(a)).N);a.gM=a.d2.bG===0.0?0:GH(Fi(a),a.w,a.V.cr,a.cp);K1(a);GB(a);if(c)a.p.cL=1;J9(a.p,a.x,a.w);a.p.cL=0;return 1;}
function Lj(a,b,c){var d;d=QG(a.p);Dj(a,b,c);a.p=d;}
function GB(a){St(a);OU(a);}
function St(a){var b,c,d,e,f;b=a.bi;c=b+Dz(a)|0;d=a.x;e=a.W;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))a.bi=D4(a,d-e|0,EN(a));else if(f>(c-e|0))a.bi=D4(a,(f-Dz(a)|0)+a.W|0,EN(a));}
function OU(a){var b,c,d,e,f;b=CX(a.d2.bG*30.0);c=a.cg;d=c+DK(a)|0;e=a.gM;f=e+b|0;if(e<(c+b|0))a.cg=D4(a,e-b|0,F_(a));else if(f>(d-b|0))a.cg=D4(a,(f-DK(a)|0)+b|0,F_(a));}
function SB(a,b,c){var d,e,f,g,h,i,j,k,l;Uf(a);d=a.e.f;e=En(d.dS,c);if(e!==null)a.hO=F6(d,e);if(e!==null)c=e;a:{f=En(d.d_,c);if(f!==null){c=BR(f);while(true){if(!B3(c))break a;g=BV(c);BX(a.hG,F6(d,g));}}}h=b.bm;i=b.br;b=a.d1;c=Df(a.e);d=GG(a.e);j=(Cn(b.nC)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.sA(c,d)){c=b.vQ;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new SA;b.vw=a;b.vx=d;b.vu=h;b.vv=i;c.q1(d,h,i,b,a.gy);}}
function Hg(a,b){var c;Cz(a,b.bm,b.br,0);c=GC(Fi(a),a.w);B1(a.p.bA,a.x,c);B1(a.p.bI,a.x,a.w);}
function Ed(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.cl;e=c-d.b|0;f=Ep(0,((b.a-d.a|0)+a.bi|0)/a.W|0,CA(a.e.f)-1|0);g=Ba(0,(e-a.cE|0)+a.cg|0);b=B2(a.e.f,f);d=a.V.cr;h=a.cp;if(!(b.dU!==null&&!b.fp))KE(b,d,h);i=b.dU;e=b.o.data.length;if(!e)j=0;else if(g<=0)j=0;else{k=i.data;if(g>=k[e-1|0])j=b.N;else{l=S5(i,0,e,g);if(l<0)l=( -l|0)-1|0;if(l==b.o.data.length)j=b.N;else{i=VO(b,d,h,l);j=0;c=0;while(c<l){j=j+I(b.o.data[c].r)|0;c=c+1|0;}c=!l?0:k[l-1|0];e=k[l];l=0;a:{while(true){h=i.data;if(l>=h.length){m=e;break a;}m
=h[l];if(g<m)break;j=j+1|0;l=l+1|0;e=m;c=m;}}if(AT$){b=new M;O(b);S(G(S(G(S(G(b,B(231)),c),B(232)),g),B(233)),m);$rt_globals.console.info($rt_ustr(N(b)));n=j;$rt_globals.console.info(" pos = "+n);}if((g-c|0)>(m-g|0))j=j+1|0;}}}return EL(f,j);}
function Sq(a,b){var c;c=b.bm;a.x=c;a.w=b.br;a.gM=GH(B2(a.e.f,c),a.w,a.V.cr,a.cp);K1(a);}
function Fi(a){return B2(a.e.f,a.x);}
function AL4(a,b,c){a.p.cL=0;if(a.fP!==null)a.fP=null;return 1;}
function AN$(a,b,c){var d,e,f;if(!c){d=E6(a.eu,b.k,a.rU,1);a.fP=d;if(d!==null)return 1;d=E6(a.eq,b.k,a.sq,0);a.fP=d;if(d!==null)return 1;Io(a);e=Ed(a,b.k);f=F3(a.e.f,e.bm,e.br);Sq(a,e);SB(a,e,f);if(!b.by){b=a.p;if(!b.cL)B1(b.bI,a.x,a.w);}b=a.p;b.cL=1;J9(b,a.x,a.w);b=new ML;b.ru=a;a.fP=b;}return 1;}
function AHJ(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:e=b.k;f=Ed(a,e);g=F3(a.e.f,f.bm,f.br);h=F6(a.e.f,g);h=h===null?B(31):h.r;if(b.ch){b=Kg(a.d1,Df(a.e),GG(a.e));if(b!==null){g=a.e;c=f.bm;d=f.br;f=new T8;f.uk=a;f.uj=e;f.ul=h;b.q1(g,c,d,f,a.gy);}else{b=En(a.e.f.dS,g);if(b!==null){Hg(a,b);c=1;}else{h=En(a.e.f.d_,g);if(h!==null&&!D5(h)){if(h.i==1){Hg(a,Bs(h,0));c=1;}else{b=a.h1;f=Ed(a,e);f=F3(a.e.f,f.bm,f.br);Ul(b,e,h,a,(F6(a.e.f,f)).r);c=1;}}else c=0;}}}break a;case 2:b:{c=(Ed(a,b.k)).bm;e=B2(a.e.f,
c);c=GF(e,a.w);d=GC(e,a.w);b=T2(e,c);if((d-1|0)==e.N){B1(a.p.bI,a.x,Wh(e));B1(a.p.bA,a.x,e.N);}else{if(b!==null){b=b.r;i=0;c:{while(true){j=b.bP.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.w;if(c==i){c=GF(e,c-1|0);d=GC(e,c);}else{if(d!=i){Pn(a.p,a.x);break b;}c=GF(e,d+1|0);d=GC(e,c);}}}B1(a.p.bI,a.x,c);a.p.cL=1;Cz(a,a.x,d,0);a.p.cL=0;}}Io(a);break a;case 3:break;default:break a;}Pn(a.p,a.x);Wp(a.fb);Io(a);}}return 1;}
function AF4(a,b){var c,d,e,f,g,h,i,j;c=a.fP;if(c!==null){c.m(b);return 1;}c=a.d2.cq;if(Ff(a.eu,b.k,c))return 1;if(Ff(a.eq,b.k,c))return 1;d=a.ew;if(Hc(b.k,d.fw,d.eI)&&GX(c)?1:0)return 1;a:{d=b.k;e=a.cl;f=e.b+a.cE|0;g=e.a;h=DK(a);i=Dz(a);j=d.b;if(f<=j&&j<(f+h|0)){f=d.a;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GX(c);if(b.ch){d=Ed(a,b.k);d.br=GF(B2(a.e.f,d.bm),d.br);b=a.e.f;if(!M9(b.dS,d)&&!M9(b.d_,d)?0:1)return Du(c,B(165));}return Du(c,B(166));}
function AK6(a,b){var c,d,e,f;c=b.ch;if(c&&b.bj==65){c=CA(a.e.f)-1|0;d=E_(a.e.f,c);B1(a.p.bI,0,0);B1(a.p.bA,CA(a.e.f)-1|0,d);return 1;}if(c&&b.bj==80){Jx(a);return 1;}if(!a.eZ&&c&&b.bj==90){if(Di(a.p))EY(a);b=a.e.f;b.ck=b.ck+1|0;e=b.e1;d=e.i;if(!d)e=null;else{f=(Ef(e,d-1|0)).data;e=Sp(b,f[0]);c=1;while(c<f.length){Sp(b,f[c]);c=c+1|0;}}if(e!==null){Cz(a,e.b,e.a,0);DO(a);}return 1;}if(!c&&!b.c4){if(Bo(b.dm,B(234))){DH(a,B(235));Dj(a,a.w-1|0,0);c=1;}else if(Bo(b.dm,B(236))){DH(a,B(237));Dj(a,a.w-1|0,0);c=1;}else if
(Bo(b.dm,B(43))){DH(a,B(238));Dj(a,a.w-1|0,0);c=1;}else if(Bo(b.dm,B(239))){DH(a,B(240));Dj(a,a.w-1|0,0);c=1;}else if(Bo(b.dm,B(241))){DH(a,B(242));Dj(a,a.w-1|0,0);c=1;}else if(!Bo(b.dm,B(243)))c=0;else{DH(a,B(244));Dj(a,a.w-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c4&&!b.ch)){d=b.bj;if(d>=48&&d<=57){c=d-48|0;e=a.lc.data[c];if(e!==null)e.q();c=1;break a;}}c=0;}if(c)return 1;d=b.bj;if(112<=d&&d<=123)c=1;else b:{switch(d){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(Zw(a,b))return 1;if(a.eZ)c=0;else c:{switch(b.bj){case 8:break;case 9:c=!b.by?ACS(a):AAB(a);break c;case 13:c=AB9(a);break c;case 46:c=ABO(a);break c;default:c=0;break c;}c=Xh(a);}if(c)return 1;if(b.ch&&b.bj==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(b.bj==27)return 0;return I(b.dm)>0&&DH(a,b.dm)?1:0;}
function VM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bo(B(137),Df(a.e))){b=Cg(a);c=new Mx;c.oX=a;d=R(C,3);e=d.data;e[0]=F9(a.e.f);f=Kt(a);g=T9(a);h=Ba(0,f-100|0);f=W(CA(a.e.f)-1|0,g+100|0);i=BH(3);j=i.data;j[0]=FY(a.e.f,h);k=a.e.f;l=0;f=W(f+1|0,k.B.data.length);m=0;while(m<f){l=l+E_(k,m)|0;if(m!=(k.B.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.cU;k=Cl();Vw(n,n.cB,k);i=BH(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bs(k,m);h=p+1|0;o[p]=q.bH;l=h+1|0;o[h]=q.bK;p=l+1|0;o[l]=q.eT;m=m+1|
0;}e[2]=i;C1(b,c,B(245),d);}}
function Jx(a){var b,c,d,e;b=Z3(Df(a.e));if(b!==null){a.ep=Fu();c=Cg(a);d=new V1;d.o9=a;e=R(C,1);e.data[0]=F9(a.e.f);C1(c,d,b,e);}}
function RM(a){var b,c,d,e,f,g,h;b=a.e.f.cU;c=Oz(b,b.cB);if(c===null)return;if(Bo(B(166),Df(a.e)))OJ(a.e.f);a:{d=EW([CV(c),C4(c),c.bZ.eT]);e=F9(a.e.f);f=BH(1);g=Df(a.e);h=(-1);switch(KH(g)){case 3401:if(!Bo(g,B(246)))break a;h=3;break a;case 98723:if(!Bo(g,B(247)))break a;h=2;break a;case 3254818:if(!Bo(g,B(137)))break a;h=1;break a;case 3556653:if(!Bo(g,B(166)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Cg(a);c=new SO;c.oy=a;C1(b,c,B(248),H(C,[e,f,d]));}
function Kx(a,b,c){var d,e,f,g,h,i;if(c&&a.eZ)return 0;d=DT(a.p);e=d.I;if(Di(a.p)){f=a.e.f;g=a.p;h=U_(f,g);if(c)Sx(f,g,h);if(c){Cz(a,d.I,d.U,0);EY(a);DO(a);}}else{h=E3(ED(a.e.f.B.data[e]),B(223));i=W(CA(a.e.f)-1|0,e);B1(a.p.bA,i,0);if(e>=(CA(a.e.f)-1|0))B1(a.p.bA,i,E_(a.e.f,i));else B1(a.p.bI,i+1|0,0);if(c)Gs(a);else Cz(a,e,0,0);}b.m(h);return 1;}
function Zw(a,b){var c,d,e,f;a:{switch(b.bj){case 33:c=b.ch?Ie(a,H$(a.bi,a.W),b.by):Hf(a,2-Vl(Dz(a),a.W)|0,0,b.c4,b.by);break a;case 34:c=!b.ch?Hf(a,Vl(Dz(a),a.W)-2|0,0,b.c4,b.by):Ie(a,((a.bi+Dz(a)|0)/a.W|0)-1|0,b.by);break a;case 35:if(!G9(a,b.by)&&!Dj(a,(Fi(a)).N,b.by)){c=0;break a;}c=1;break a;case 36:if(!G9(a,b.by)&&!Dj(a,0,b.by)){c=0;break a;}c=1;break a;case 37:c=b.ch;if(c&&b.c4){Io(a);d=a.fb;e=d.cZ;if(e<=0)d=null;else{f=d.ej.data;c=e-1|0;d.cZ=c;d=f[c];}if(d===null)c=0;else{Cz(a,Ix(d),K7(d),0);a.p=QG(d.lr);c
=1;}break a;}c=Ti(a,(-1),c,b.by);break a;case 38:c=Hf(a,(-1),b.ch,b.c4,b.by);break a;case 39:c=b.ch;if(c&&b.c4){d=a.fb;c=d.cZ;if(c==(d.ek-1|0))d=null;else{f=d.ej.data;c=c+1|0;d.cZ=c;d=f[c];}if(d===null)c=0;else{Cz(a,Ix(d),K7(d),0);a.p=QG(d.lr);c=1;}break a;}c=Ti(a,1,c,b.by);break a;case 40:c=Hf(a,1,b.ch,b.c4,b.by);break a;default:}c=0;}if(c&&b.by)B1(a.p.bA,a.x,a.w);if(c)SB(a,EL(a.x,a.w),F3(a.e.f,a.x,a.w));return c;}
function Io(a){var b,c,d,e,f,g,h;b=a.fb;c=b.cZ;b=c<0?null:b.ej.data[c];if(b!==null&&a.x==Ix(b)&&a.w==K7(b))return;d=a.fb;b=new IN;c=a.x;e=a.w;f=a.p;b.kN=EL(c,e);g=QG(f);b.lr=g;g.cL=0;e=d.cZ;h=d.ek;if(e==(h-1|0))Mb(d,b);else{c=e+1|0;while(c<h){Wp(d);c=c+1|0;}Mb(d,b);}d.cZ=d.cZ+1|0;}
function DO(a){a.e.f.om=IW(Cg(a));}
function Uf(a){a.hO=null;G_(a.hG);}
function Z3(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(KH(b)){case 3401:if(!Bo(b,B(246)))break a;c=2;break a;case 98723:if(!Bo(b,B(247)))break a;c=1;break a;case 3254818:if(!Bo(b,B(137)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(249);break b;case 2:b=B(250);break b;default:b=null;break b;}b=B(251);}}return b;}
var Q7=F();
function AKf(a,b){return ACw(b);}
function Q_(){C.call(this);this.sN=null;}
function AHI(a,b){return ACF(a.sN,b);}
function Jy(){var a=this;C.call(a);a.ju=null;a.nI=null;a.lU=null;}
function AT_(a,b,c){var d=new Jy();Uy(d,a,b,c);return d;}
function Uy(a,b,c,d){a.ju=b.bU;a.nI=c;a.lU=d;}
function AMX(a,b){var c,d;if(b.ch&&b.bj==79){c=a.nI;if(c!==null&&b.by)U9(a.ju,c);else Lb(a.ju,a.lU);d=1;}else d=0;return d;}
function Q$(){C.call(this);this.lS=null;}
function AD_(a,b){QU(a.lS,b);}
function Q9(){C.call(this);this.ol=null;}
function APS(a,b){return Mi(a.ol,b);}
function Q8(){C.call(this);this.tv=null;}
function ALx(a,b,c){return Kx(a.tv,b,c);}
function Rc(){C.call(this);this.mz=null;}
function APp(a){var b,c;b=a.mz.cF;BI(b);c=new MW;c.to=b;return c;}
function Rb(){C.call(this);this.ri=null;}
function AJs(a,b,c,d){var e,f;b=a.ri.cF;e=CX((b.W*4|0)*d/150.0);f=CX(c);b.bi=D4(b,b.bi+e|0,EN(b));b.cg=D4(b,b.cg+f|0,F_(b));return 1;}
function Ra(){C.call(this);this.sf=null;}
function AMv(a,b){b=b;return XU(a.sf,b);}
function BW(){var a=this;C.call(a);a.bg=0.0;a.bv=0.0;a.bc=0.0;a.bw=0.0;}
function AR1(a){var b=new BW();AAN(b,a);return b;}
function CD(a,b,c,d,e){a.bg=b;a.bv=c;a.bc=d;a.bw=e;}
function AAN(a,b){a.bg=b.bg;a.bv=b.bv;a.bc=b.bc;a.bw=b.bw;}
function BF(a,b){a.bg=b.bg;a.bv=b.bv;a.bc=b.bc;a.bw=b.bw;return a;}
function APs(a,b){var c;if(a===b)return 1;a:{if(b!==null&&Cm(a)===Cm(b)){b=b;if(b.bg===a.bg&&b.bv===a.bv&&b.bc===a.bc&&b.bw===a.bw?1:0){c=1;break a;}}c=0;}return c;}
var Cy=F(0);
var ATJ=null;var ATR=null;var ATF=null;var ATG=null;var ATK=null;var ATL=null;var ATM=null;var ATQ=null;var ATX=null;var ATS=null;var ATT=null;var ATN=null;var ATU=null;var ATO=null;var ATV=null;function Dp(){Dp=Br(Cy);ALa();}
function ALa(){ATJ=Cv(187);ATR=Cv(0);ATF=Cv(43);ATG=Bm(B(252));ATK=Cv(85);ATL=Cw(60,63,65);ATM=Cw(33,66,131);ATQ=Cw(255,255,255);ATX=Cw(0,0,0);ATS=Cw(212,212,212);ATT=Cw(166,214,255);ATN=Bm(B(253));ATU=Bm(B(254));ATO=Bm(B(255));ATV=Bm(B(254));}
function H8(){var a=this;C.call(a);a.M=null;a.v=null;a.bL=null;a.bV=null;}
function AJk(){var a=new H8();Rf(a);return a;}
function RK(a,b,c,d){var e=new H8();AGn(e,a,b,c,d);return e;}
function Rf(a){a.M=new Bh;a.v=new Bh;a.bL=new BW;a.bV=new BW;}
function AGn(a,b,c,d,e){a.M=new Bh;a.v=new Bh;a.bL=new BW;a.bV=new BW;Pe(a,b,c,d,e);}
function Pe(a,b,c,d,e){Bg(a.M,b,c);Bg(a.v,d,e);}
function R3(a){Bg(a.v,0,0);}
function Ln(a){var b;b=a.v;return Bb(b.b,b.a)?0:1;}
function Ek(a,b){return Hc(b,a.M,a.v);}
function TA(a,b,c,d){var e;e=a.M;BB(b,e.b+c|0,e.a+d|0,a.v,a.bL);}
function Td(a,b,c,d,e,f){var g,h,i,j;g=a.M;d=g.b+d|0;e=g.a+e|0;g=a.v;h=a.bV;i=a.bL;Kz(b,b.g5);Lx(b.g5,b.bz,d,e,g,b.dq);Tq(b.g5,b.bz,c);g=b.g5;j=b.bz;HP(j,g.td,h);HP(j,g.tb,i);c=g.oQ;j.uniform2f(c,f,0.0);Kn(b);}
function ABI(){H8.call(this);this.cP=null;}
function AJN(){var a=new ABI();AEx(a);return a;}
function E5(a,b,c,d){var e=new ABI();AJM(e,a,b,c,d);return e;}
function AEx(a){Rf(a);a.cP=new BW;}
function AJM(a,b,c,d,e){Rf(a);a.cP=new BW;Pe(a,b,c,d,e);}
function GK(a){var b,c;b=a.v;c=a.cP;Bg(b,c.bc-c.bg|0,c.bw-c.bv|0);}
function F$(a,b){Hk(a,0,0,Cb(b),C3(b));}
function Hk(a,b,c,d,e){CD(a.cP,b,c,d,e);}
function Dw(a,b,c,d,e,f){var g;g=a.M;EB(b,g.b+d|0,g.a+e|0,a.v,a.cP,c,a.bL,a.bV,f);}
function F1(a,b){BF(a.bL,b);}
function Hh(a,b){BF(a.bV,b);}
function ZD(){var a=this;C.call(a);a.dy=null;a.kI=0.0;a.gv=0.0;a.f$=0;}
function AKP(){var a=new ZD();AO_(a);return a;}
function AO_(a){var b;b=RK(0,0,2,20);a.dy=b;a.kI=0.5;a.gv=0.0;Hi(187,187,187,255,b.bL);}
function RJ(a){return a.dy.v.a;}
function PB(a){return a.dy.v.b;}
function RX(a,b){var c,d;a:{c=a.f$;if(b>a.gv)while(true){d=a.gv+a.kI;a.gv=d;a.f$=a.f$?0:1;if(b>d)continue;else break a;}}return a.f$==c?0:1;}
function O8(a,b,c){Bg(a.dy.M,b,c);}
function Rr(a,b){a.gv=b+a.kI*1.25;a.f$=1;}
function Ue(a,b,c){if(a.f$)TA(a.dy,b,c.b,c.a);}
function ST(){C.call(this);this.eN=null;}
function ALV(a,b){var c,d,e,f,g,h,i;c=a.eN;d=c.ji;if(d!==null){e=c.cY.M;f=e.b;g=b.k;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.ji=g;}d=b.k;f=d.b;c=c.f7;e=c.v;h=f-e.b|0;f=d.a-e.a|0;Bg(c.M,h,f);c=a.eN;d=c.bf.bU;b=b.k;f=0;a:{while(true){i=c.gF.data;if(f>=i.length)break;if(Ek(i[f],b)){b=c.tI.data[f];break a;}f=f+1|0;}b=null;}Gh(d,b);return 1;}
function ANm(a,b,c,d){if(!c&&d==2){b=a.eN;VR(b,b.cY);}return 1;}
function AJW(a,b,c){var d,e;d=By();e=new M;O(e);S(G(e,B(256)),c);Bu(d,N(e));if(!c){d=b.k;b=a.eN;b.ji=!Ek(b.cY,d)?null:d;O8(a.eN.gS,d.b,d.a);b=a.eN;Rr(b.gS,IW(b.bf.bU));}return 1;}
function AGd(a,b,c){var d;b=By();d=new M;O(d);S(G(d,B(257)),c);Bu(b,N(d));return 1;}
function QL(){C.call(this);this.tw=null;}
function ALP(a,b){return Og(a.tw,b);}
function QK(){C.call(this);this.ny=null;}
function AOh(a,b){return Og(a.ny,b);}
function QN(){C.call(this);this.vz=null;}
function AOK(a,b,c){var d,e;Bu(By(),B(258));d=!c?B(259):B(28);e=new M;O(e);G(G(G(e,B(260)),d),B(261));Vk(b,N(e));return 1;}
function QM(){C.call(this);this.tU=null;}
function AOJ(a){Bu(By(),B(262));}
function QJ(){C.call(this);this.u2=null;}
function AKk(a,b){Bu(By(),B(263));return 1;}
function QI(){C.call(this);this.rQ=null;}
function AH5(a,b,c,d){var e,f,g;b=a.rQ;e=( -d|0)/10|0;b=b.cY;f=b.v;f.b=f.b+e|0;f.a=f.a+e|0;b=b.M;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function Ik(){var a=this;BW.call(a);a.fS=0;a.fV=0;a.fT=0;a.fU=0;}
function Cv(a){var b=new Ik();APi(b,a);return b;}
function Cw(a,b,c){var d=new Ik();AF7(d,a,b,c);return d;}
function Bm(a){var b=new Ik();ANk(b,a);return b;}
function AUa(a,b,c,d){var e=new Ik();PP(e,a,b,c,d);return e;}
function CU(a){var b=new Ik();N1(b,a);return b;}
function APi(a,b){PP(a,b,b,b,255);}
function AF7(a,b,c,d){PP(a,b,c,d,255);}
function ANk(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.fS=Ip(L(b,1))*17|0;a.fV=Ip(L(b,2))*17|0;a.fT=Ip(L(b,3))*17|0;a.fU=255;}else{a.fS=KV(L(b,1),L(b,2));a.fV=KV(L(b,3),L(b,4));a.fT=KV(L(b,5),L(b,6));a.fU=I(b)!=9?255:KV(L(b,7),L(b,8));}Hi(a.fS,a.fV,a.fT,a.fU,a);return;}}
function PP(a,b,c,d,e){a.fS=b;a.fV=c;a.fT=d;a.fU=e;Hi(b,c,d,e,a);}
function N1(a,b){a.fS=b.fS;a.fV=b.fV;a.fT=b.fT;a.fU=b.fU;BF(a,b);}
function Ip(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function KV(b,c){return (16*Ip(b)|0)+Ip(c)|0;}
function T6(){var a=this;C.call(a);a.lk=null;a.jH=null;}
function Yq(){var a=this;C.call(a);a.eR=null;a.b7=null;a.dW=null;a.fX=null;a.kV=null;a.bX=null;a.fj=null;a.cA=0;a.eo=0;a.lb=0;a.fs=0;a.fl=0;a.iV=null;a.jh=null;a.rF=null;}
function XR(){var a=new Yq();AOL(a);return a;}
function AOL(a){a.b7=AJk();a.dW=new Bh;a.fX=new Bh;a.bX=AUb;a.fs=(-1);}
function Ki(a,b){SL(a);a.bX=b;}
function HC(a,b){a.eR=b;SL(a);}
function HL(a,b){var c,d,e,f,g;a.kV=b.iK;c=b.bd.gq;BF(a.b7.bL,c);c=b.je;BF(a.b7.bV,c);d=0;while(true){e=a.bX.data;if(d>=e.length)break;f=e[d];c=b.bd;f.iZ=c;f=f.c9;g=c.lF;c=c.gq;BF(f.bL,g);BF(f.bV,c);if(a.fs==d)IZ(a.bX.data[d],1);d=d+1|0;}}
function Sw(a){a.fj=CF(a.fj,null);Bg(a.dW,0,0);a.bX=AUb;a.fs=(-1);R3(a.b7);}
function GE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Ib(b);d=b.bG;BI(a.eR);Cu(c,a.eR);e=Jv(a.eR,1.25);f=0;a.cA=B9(2.0,d);a.eo=B9(3.0,d);a.lb=B9(12.0,d);g=0;h=a.bX.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=PZ(c,l.j1);n=a.lb;n=(n+m|0)+n|0;f=Ba(f,n);b=l.c9;l=b.M;l.b=g;l.a=0;l=b.v;l.b=n;l.a=e;CD(b.cP,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.dW;b.b=g;b.a=e;b=a.b7.v;n=a.fl;if(!n){m=a.cA;m=(g+m|0)+Bb(m,a.bX.data.length)|0;}else m=(f+(a.cA*2|0)|0)+(a.eo*2|0)|0;b.b=m;if(!n)e=e+(a.cA*2|0)|0;else{n=a.cA;e=(Bb(e+n|0,a.bX.data.length)
+n|0)+(a.eo*2|0)|0;}b.a=e;}
function Jo(a,b,c){var d,e,f,g,h,i,j;Bg(a.b7.M,b,c);d=a.cA+a.eo|0;e=a.bX.data;f=e.length;g=0;h=d;while(g<f){i=e[g].c9;j=i.M;j.b=b+d|0;j.a=c+h|0;if(!a.fl){if(!i.v.b)ACR();d=d+(i.v.b+a.cA|0)|0;}else{if(!i.v.a)ACR();h=h+(i.v.a+a.cA|0)|0;}g=g+1|0;}}
function ACR(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function D2(a){var b,c;b=a.dW;if(b.b&&b.a)return a.b7.v;c=new Bn;Bl(c,B(264));J(c);}
function SL(a){Bg(a.dW,0,0);}
function I7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cX;if(!a.bX.data.length)return;a:{if(a.fj!==null){d=a.dW;if(Bb(d.b,d.a))break a;}d=a.dW;if(!Bb(d.b,d.a))GE(a,b);d=a.dW;e=d.b;f=d.a;if(!Bb(e,f))return;d=CL(c,e,f);Cu(d,a.eR);g=Jv(a.eR,0.125);h=a.eR;i=h.dd;j=g+i-(i+h.dX)/16.0;k=a.bX.data;f=k.length;l=0;while(l<f){h=k[l];Cf(d,h.j1,h.c9.cP.bg+a.lb,j);l=l+1|0;}h=CF(a.fj,CS(c));a.fj=h;CM(h,d);FE(d);}if(!Ln(a.b7)){d=a.b7;ABR(c,d.v,d.M,d.bV,a.cA,a.fX);d=a.b7;h=d.v;m=d.M;d=d.bL;e=a.cA;n=a.fX;n.b=(h.b-e|0)-e|0;n.a=(h.a
-e|0)-e|0;BB(c,m.b+e|0,m.a+e|0,n,d);if(a.fl){d=a.b7;AA_(c,d.v,d.M,0,0,Qf(a.kV,b.bG),a.kV.lE,a.fX);}}k=a.bX.data;l=k.length;o=0;while(o<l){Dw(k[o].c9,c,a.fj,0,0,0.0);o=o+1|0;}b:{if(a.fl){k=a.bX.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].c9;m=a.fX;e=(a.b7.v.b-(a.cA*2|0)|0)-(a.eo*2|0)|0;b=h.v;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.M;BB(c,d.b+b.b|0,d.a,m,h.bV);}o=o+1|0;}}}}
function JK(a,b,c){var d,e,f,g,h,i;d=Ek(a.b7,b);e=!d?(-1):T_(a,b);f=a.fs;if(f!=e){if(f>=0){g=a.bX.data[f];IZ(g,0);if(a.rF!==null){f=a.fs;h=By();g=Ct(g);i=new M;O(i);G(G(S(G(i,B(265)),f),B(266)),g);Bu(h,N(i));}}if(e>=0){h=a.bX.data[e];IZ(h,1);g=a.jh;if(g!==null)g.m1(b,e,h);}a.fs=e;}return d&&GX(c)?1:0;}
function JC(a,b,c,d){var e,f;e=T_(a,b);if(e>=0){f=a.bX.data[e];if(!LR(f))f.tp.q();}return 1;}
function T_(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bX.data;if(c>=d.length)return (-1);e=d[c].c9;if(Ek(e,b))return c;if(a.fl){f=e.M;g=f.b;e=e.v;h=e.b;g=g+h|0;i=f.a;f=a.fX;f.b=(a.b7.v.b-(a.cA*2|0)|0)-h|0;f.a=e.a;if(X2(b,g,i,f))break;}c=c+1|0;}return c;}
function RQ(a){a.fl=1;}
function Xy(){var a=this;C.call(a);a.cs=null;a.b6=null;a.e0=null;a.iH=null;a.gT=null;a.h$=null;}
function L_(a){var b=new Xy();AE2(b,a);return b;}
function AE2(a,b){a.b6=Cl();a.h$=AUc;a.cs=b;X(b.dB,a);}
function Iw(a,b){a.gT=b;b=BR(a.b6);while(B3(b)){HL(BV(b),a.gT);}}
function F2(a,b,c,d){var e,f;e=a.cs;f=e.b1;if(Bb(f.b,f.a)&&e.bG!==0.0){if(a.e0!==null&&!DA(a)){a.h$=d;a.iH=Fr(a.cs,a.e0);e=SG(a,b,c,null);b=new R6;b.lT=a;e.iV=b;It(a.cs,a);return;}b=new BC;U(b);J(b);}c=new DP;Bl(c,B(267));J(c);}
function DB(a){var b;if(DA(a)){b=a.cs;if(b.eh===a)b.eh=null;Su(a,null);a.h$.q();a.h$=AUc;}}
function SG(a,b,c,d){var e,f,g,h;e=XR();RQ(e);Ki(e,c.f9());HL(e,a.gT);HC(e,a.iH);GE(e,a.cs);if(d===null)f=b.b;else{g=b.b;f=a.cs.b1.b<((g+(D2(d)).b|0)+(D2(e)).b|0)?g-(D2(e)).b|0:(g+(D2(d)).b|0)-d.eo|0;}h=b.a;b=a.cs.b1;Jo(e,Ba(0,W(f,b.b-(D2(e)).b|0)),Ba(0,W(h,b.a-(D2(e)).a|0)));b=new Oo;b.l1=a;b.l2=e;e.jh=b;BX(a.b6,e);return e;}
function AFc(a,b,c){var d,e;a.iH=Fr(a.cs,a.e0);d=BR(a.b6);while(B3(d)){e=BV(d);HC(e,a.iH);GE(e,a.cs);}}
function HX(a){var b,c;if(D5(a.b6))return;CK(a.cs.cX,1);b=0;while(true){c=a.b6;if(b>=c.i)break;I7(Bs(c,b),a.cs);b=b+1|0;}}
function JV(a,b){var c,d;c=0;d=a.b6.i-1|0;a:{while(d>=0){c=JK(Bs(a.b6,d),b.k,a.cs.cq);if(c)break a;d=d+(-1)|0;}}return c;}
function IR(a,b,c,d){var e,f;e=0;f=a.b6.i-1|0;a:{while(f>=0){e=JC(Bs(a.b6,f),b.k,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jj(a,b,c){var d,e,f,g;d=0;e=a.b6.i-1|0;a:{while(e>=0){f=Bs(a.b6,e);g=b.k;d=Ek(f.b7,g);if(!d&&!Ln(f.b7)){f=f.iV;if(f!==null)f.q();}if(d)break a;e=e+(-1)|0;}}return d;}
function ADJ(a,b){var c;if(!DA(a))return 0;a:{switch(b.bj){case 27:DB(a);c=1;break a;default:}c=0;}return c;}
function Su(a,b){var c,d;c=a.b6.i-1|0;a:{while(true){if(c<0)break a;d=Bs(a.b6,c);if(b===d)break;Ef(a.b6,c);Sw(d);c=c+(-1)|0;}}}
function DA(a){return a.b6.i<=0?0:1;}
function Sh(){C.call(this);this.r1=null;}
function AMg(a,b){var c;c=a.r1;if(b.bj==32)Sw(c.cv);return 0;}
function Sk(){C.call(this);this.qK=null;}
function ADm(a,b){var c,d,e,f;b=b;c=a.qK;Bu(By(),B(268));if(!DA(c.dO)){d=c.dO;b=b.k;e=MY(4);f=new Uq;f.wA=c;F2(d,b,e,f);}return 1;}
function ACu(){var a=this;C.call(a);a.h2=null;a.hr=0.0;}
function EI(a,b){var c=new ACu();ADd(c,a,b);return c;}
function ADd(a,b,c){a.h2=b;a.hr=c;}
function APO(a,b){if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){b=b;return a.hr===b.hr&&Dg(a.h2,b.h2)?1:0;}return 0;}
function Kp(){var a=this;C.call(a);a.m$=null;a.tm=null;a.je=null;a.q_=null;a.pQ=null;a.bd=null;a.iK=null;}
function AUd(a,b,c,d,e,f,g){var h=new Kp();LO(h,a,b,c,d,e,f,g);return h;}
function Fm(){var b,c,d,e,f;b=new Kp;c=new G6;Dp();d=ATG;e=ATK;f=Bm(B(269));EK();JI(c,d,e,f,AT3,ATZ);LO(b,c,Xj(),Bm(B(270)),Bm(B(271)),Bm(B(269)),Xj(),AFm(1,0.125));return b;}
function LO(a,b,c,d,e,f,g,h){a.m$=b;a.tm=c;a.je=d;a.q_=e;a.pQ=f;a.bd=g;a.iK=h;}
var Si=F();
function AHO(a){Bu(By(),B(272));}
var Sg=F();
function ANA(a){Bu(By(),B(273));}
function C5(){var a=this;C.call(a);a.c9=null;a.tp=null;a.iZ=null;a.jU=null;a.j1=null;}
function AB_(a,b,c){var d=new C5();J1(d,a,b,c);return d;}
function ARu(a,b,c,d){var e=new C5();ZN(e,a,b,c,d);return e;}
function J1(a,b,c,d){ZN(a,b,c,d,null);}
function ZN(a,b,c,d,e){var f;f=AJN();a.c9=f;a.j1=c;a.iZ=d;a.tp=b;BF(f.bL,d.lF);BF(a.c9.bV,d.gq);a.jU=e;}
function LR(a){return a.jU===null?0:1;}
function IZ(a,b){BF(a.c9.bV,!b?a.iZ.gq:a.iZ.sy);}
function ZV(){var a=this;C.call(a);a.cy=null;a.g2=null;a.pP=0;}
function ACL(){var a=new ZV();AJq(a);return a;}
function AJq(a){a.cy=Cl();}
function In(a,b){Qu(a.cy,0,b);}
function JA(a,b){U7(a.cy,b);}
function IB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cy.i-1|0;while(c>=0){d=Bs(a.cy,c);d.L.ey(b);e=d.O;f=d.dV;if(!K$(e)){if(!S0(e)&&!(!e.gl&&e.cV!==null)){e.gl=0;P5(e);g=e.dD;h=(g.dd+g.dX+5.0)/10.0;i=CJ(e.gw,e.ir);g=b.cr;j=e.dD;k=e.gA;l=h*2.0;Cu(g,j);m=i+Kb(g,k,l)|0;e.hj=m;m=Ep(0,m,e.s.b);if(m){g=CL(b,m,e.s.a);Cu(g,e.dD);j=e.gA;l=i;h=l+h;k=e.dD;n=k.dd;Cf(g,j,h,l+n-(n+k.dX)/16.0);j=e.cV;if(j===null){j=CS(b);e.cV=j;}CM(j,g);FE(g);CD(e.k6,0.0,0.0,Cb(e.cV),C3(e.cV));}}g=f.q_;j=e.cV;if(j===null)OD(e,b,0,e.s.b,g);else
{i=Cb(j);f=f.pQ;j=e.C;m=j.b;o=j.a;j=e.cV;EB(b,m,o,j.e7,e.k6,j,f,g,0.0);m=e.s.b;if(i<m)OD(e,b,i,m-i|0,g);}}CK(b,1);i=CJ(d.bn,2.0);m=K$(d.O);f=d.bn;e=f.jL;f=f.nk;p=m?0:d.O.s.a;g=d.L.s;Bg(f,g.b,g.a+p|0);ABR(b,f,!m?d.O.C:d.L.C,d.dV.je, -i|0,e);f=d.L;AA_(b,f.s,f.C,i,p,Qf(d.dV.iK,d.bn.bG),d.dV.iK.lE,e);c=c+(-1)|0;}}
function X8(a,b){var c,d,e,f,g,h,i;c=a.g2;if(c!==null){c.m(b);return 1;}d=0;while(true){c=a.cy;if(d>=c.i)break;a:{e=Bs(c,d);f=b.k;if(Dy(e.O,f))g=Du(e.bn.cq,null);else{g=CJ(e.bn,7.0);h=CJ(e.bn,25.0);if(UL(e,f.b,g)){i=TY(e,f.b,h);if(ON(e,f.a,g)){g=Du(e.bn.cq,I9(i,B(168)));break a;}if(Pt(e,f.a,g)){g=Du(e.bn.cq,I9( -i|0,B(168)));break a;}}if(Mc(e,f.a,g)){h=QW(e,f.a,h);if(Nu(e,f.b,g)){g=Du(e.bn.cq,I9(h,B(167)));break a;}if(SP(e,f.b,g)){g=Du(e.bn.cq,I9( -h|0,B(167)));break a;}}g=0;}}b:{c:{if(!g){if(!Dy(e.L,b.k))break c;if
(!e.L.bW(b)&&!Du(e.bn.cq,null))break c;}g=1;break b;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function ZU(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cy;if(e>=f.i)break;a:{b:{g=Bs(f,e);if(!Dy(g.O,b.k)){if(!Dy(g.L,b.k))break b;if(!g.L.cn(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function Y3(a,b,c){var d,e,f,g,h,i,j,k;if(a.g2!==null)return 1;d=0;while(true){e=a.cy;if(d>=e.i)break;a:{f=Bs(e,d);if(!c){b:{e=b.k;if(!K$(f.O)&&Dy(f.O,e)){g=f.L.C;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.O.C;i=e.b-i|0;k=e.a-k|0;e=new Bh;g=new Ov;g.pD=f;g.pC=i;g.py=k;g.px=e;g.pB=h;g.pz=j;}else{h=CJ(f.bn,7.0);i=CJ(f.bn,25.0);if(UL(f,e.b,h)){j=TY(f,e.b,i);if(ON(f,e.a,h)){g=HH(f,e,j,(-1));break b;}if(Pt(f,e.a,h)){g=HH(f,e,j,1);break b;}}if(Mc(f,e.a,h)){i=QW(f,e.a,i);if(Nu(f,e.b,h)){g=HH(f,e,(-1),i);break b;}if
(SP(f,e.b,h)){g=HH(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=Dy(f.O,b.k)?AUe:f.L.is(b,c);e=f.L;if(e===null)g=null;else if(g===null)g=!Dy(e,b.k)?null:AUe;}if(g!==null){a.g2=g;a.pP=c;return 1;}d=d+1|0;}return 0;}
function ACK(a,b,c){var d,e,f,g;if(c==a.pP&&a.g2!==null){a.g2=null;return 1;}d=0;while(true){e=a.cy;if(d>=e.i)break;a:{b:{f=Bs(e,d);if(!Dy(f.O,b.k)){if(!Dy(f.L,b.k))break b;if(!f.L.cI(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function KB(a,b,c,d){var e,f;e=0;while(true){f=a.cy;if(e>=f.i)break;if((Bs(f,e)).L.c1(b,c,d))return 1;e=e+1|0;}return 0;}
function AOD(a,b,c){var d,e,f;d=0;while(true){e=a.cy;if(d>=e.i)break;f=Bs(e,d);e=f.L;e.iw(e.C,e.s,c);e=f.O;if(e.ge!==null){e.dD=null;e.hj=0;e.gl=1;}Js(f);d=d+1|0;}}
function NB(a,b){var c,d,e;c=0;d=0;while(true){e=a.cy;if(d>=e.i)break;Bs(e,d);c=0|c;d=d+1|0;}return c;}
function Pd(a,b,c){var d;d=0;while(true){b=a.cy;if(d>=b.i)break;Bs(b,d);d=d+1|0;}}
function NU(){C.call(this);this.tV=null;}
function AFb(a,b){return b.g6&&b.bj==32?1:0;}
function NV(){C.call(this);this.o1=null;}
function ANS(a,b){var c,d,e,f,g,h;b=b;c=a.o1;if(!DA(c.fK)){d=c.fK;b=b.k;e=R(C5,1);f=e.data;g=new C5;h=new Ur;h.oh=c;J1(g,h,B(274),d.gT.bd);f[0]=g;F2(d,b,FH(e),AUc);}return 1;}
var AAG=F();
function Y2(b){var c,d;c=CL(b,250,64);FQ(c,B(169),25.0);KO(c,187,187,187);Cf(c,B(275),0.0,24.0);Cf(c,B(275),0.25,56.0);d=CS(b);CM(d,c);FE(c);return d;}
function XQ(b){var c;c=new U3;c.gh=b;return c;}
function NW(){C.call(this);this.sm=null;}
function AK3(a,b,c,d){return KB(a.sm,b,c,d);}
var Vh=F(0);
var G$=F(0);
var EG=F();
function D5(a){return a.i?0:1;}
function Hn(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=TO(HK(Cm(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BR(a);while(B3(f)){g=b.data;h=e+1|0;g[e]=BV(f);e=h;}return b;}
var Md=F(0);
function FU(){EG.call(this);this.cm=0;}
function BR(a){var b;b=new MT;b.gm=a;b.lz=a.cm;b.hZ=a.mS();b.fL=(-1);return b;}
function PC(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(Dg(b,Bs(a,d)))break;d=d+1|0;}return d;}
var HW=F(0);
function Nc(){var a=this;FU.call(a);a.b$=null;a.i=0;}
function Cl(){var a=new Nc();AG5(a);return a;}
function AUf(a){var b=new Nc();L6(b,a);return b;}
function AG5(a){L6(a,10);}
function L6(a,b){a.b$=R(C,b);}
function IO(a,b){var c,d;c=a.b$.data.length;if(c<b){d=c>=1073741823?2147483647:Ba(b,Ba(c*2|0,5));a.b$=Dc(a.b$,d);}}
function Bs(a,b){IE(a,b);return a.b$.data[b];}
function ALb(a){return a.i;}
function BX(a,b){var c,d;IO(a,a.i+1|0);c=a.b$.data;d=a.i;a.i=d+1|0;c[d]=b;a.cm=a.cm+1|0;return 1;}
function Qu(a,b,c){var d,e,f;OE(a,b);IO(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.b$.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.b$.data[b]=c;a.i=d+1|0;a.cm=a.cm+1|0;}
function Ef(a,b){var c,d,e,f;IE(a,b);c=a.b$.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cm=a.cm+1|0;return d;}
function U7(a,b){var c;c=PC(a,b);if(c<0)return 0;Ef(a,c);return 1;}
function G_(a){var b,c,d,e,f,g;b=a.b$;c=0;d=a.i;e=null;if(c>d){e=new BC;U(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.i=0;a.cm=a.cm+1|0;}
function IE(a,b){var c;if(b>=0&&b<a.i)return;c=new Bw;U(c);J(c);}
function OE(a,b){var c;if(b>=0&&b<=a.i)return;c=new Bw;U(c);J(c);}
function Ju(a,b){var c;c=0;while(c<a.i){b.m(a.b$.data[c]);c=c+1|0;}}
function Ns(a,b){var c,d,e,f,g,h,i;c=a.b$;d=a.i;if(b===null)b=ASH;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}YQ(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cm=a.cm+1|0;}
function ACh(){var a=this;C.call(a);a.k9=0;a.k_=0;}
function ANF(){var a=new ACh();AOq(a);return a;}
function AOq(a){var b,c;b=AB4(Ey((AA6())));c=Ey((AA6()))^(-559038737);a.k9=b;a.k_=c;c=0;while(c<19){QO(a);c=c+1|0;}}
function QO(a){var b,c;b=a.k9;c=a.k_;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.k9=c;a.k_=b;return b;}
function AB4(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function HS(a,b){return 5.960464477539063E-8*(QO(a)&16777215)*b|0;}
function S_(){C.call(this);this.l$=null;}
function AKL(a,b,c){var d;d=a.l$;if(b===0.0)JT(d,100);}
function Ta(){C.call(this);this.oY=null;}
function ADr(a,b){var c,d,e;c=a.oY;d=b.bj;if(d==32){c.iO=c.iO?0:1;e=1;}else if(d==13){JT(c,1);e=1;}else if(d!=8)e=0;else{VK(c,1);e=1;}return e;}
var MK=F(0);
function ACY(b,c){var d;d=new Uo;d.tx=b;d.ty=c;return d;}
function ABE(){var a=this;C.call(a);a.fk=null;a.fF=0;a.h_=0;a.fE=0;}
function Wr(a){var b=new ABE();AG4(b,a);return b;}
function AG4(a,b){a.fk=Cl();a.fE=0;a.h_=2048;a.fF=b;}
function GZ(a,b,c){var d,e,f,g,h,i,j;d=c.pq(b);e=a.h_;if(d>e){c=new Bn;f=new M;O(f);BA(S(G(S(G(f,B(276)),d),B(277)),e),41);Bl(c,N(f));J(c);}if(!a.fF){b=new BC;Bl(b,B(278));J(b);}a:{b=new BW;if(d){b:{c=a.fk;if(c.i>0){c=BR(c);g=d;while(true){if(!B3(c))break b;f=BV(c);if(f.bc>=g)break;}CD(b,f.bg,f.bv,g,a.fF);f.bg=f.bg+g;h=f.bc-g;f.bc=h;if(h===0.0)U7(a.fk,f);break a;}}g=a.fE;i=d;CD(b,0.0,g,i,a.fF);c=a.fk;f=new BW;h=a.fE;g=a.h_-d|0;j=a.fF;f.bg=i;f.bv=h;f.bc=g;f.bw=j;BX(c,f);a.fE=a.fE+a.fF|0;}}return b;}
function HQ(a,b){var c,d,e,f,g,h,i;a:{c=AR1(b);b=a.fk;if(b.i>0){d=BR(b);while(true){if(!B3(d))break a;e=BV(d);if(e.bv===c.bv){f=e.bg;g=e.bc;h=f+g;i=c.bg;if(h===i){c.bg=f;c.bc=c.bc+g;PY(d);}else{h=c.bc;if(i+h===f){c.bc=h+g;PY(d);}}}}}}BX(a.fk,c);}
function Ww(a){return B0(a.h_,a.fE);}
function Z7(){var a=this;C.call(a);a.vE=20;a.fw=null;a.eI=null;a.hY=null;a.j_=0;a.hX=0;a.iD=0.0;a.co=null;a.ee=null;a.eV=null;a.e9=0;}
function AJ3(){var a=new Z7();AOB(a);return a;}
function AOB(a){a.vE=20;a.fw=new Bh;a.eI=new Bh;a.co=Cl();}
function WJ(a,b){var c,d,e,f,g;c=a.e9;if(b==c)return;d=a.co.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Ba(0,(c-1|0)/20|0);f=Ba(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){RC(a,b);a.e9=b;}else{if(a.e9>=b)while(true){if(g<f)break a;a.e9=R4(Bs(a.co,g%d|0),a.ee,a.eV,a.e9,b,e,a.iD);g=g+(-1)|0;}while(f<=g){a.e9=R4(Bs(a.co,f%d|0),a.ee,a.eV,a.e9,b,e,a.iD);f=f+1|0;}}}}
function Th(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BR(a.co);while(B3(f)){g=BV(f);h=a.fw;i=Bb(a.co.i,a.hX);j=g.ea.a;k=((g.iv.a-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BD(l,c);if(m<=0){Bg(g.fZ,Cb(g.bR),j);CD(g.fn,0.0,0.0,Cb(g.bR),j);Iv(g,e,k,h,d.iF,d.g8);}else{if(m>0&&k<c){m=Ba(c-k|0,0);Bg(g.fZ,Cb(g.bR),m);CD(g.fn,0.0,0.0,Cb(g.bR),m);Iv(g,e,k,h,d.iF,d.g8);}if(l>i){m=W(l%i|0,c);Bg(g.fZ,Cb(g.bR),m);CD(g.fn,0.0,b%C3(g.bR)|0,Cb(g.bR),m);Iv(g,e,0,h,d.iF,d.g8);}}}}
function Jr(a,b,c,d){var e,f,g,h,i,j;e=a.co.i;while(true){f=a.co.i;g=Bb(f,a.hX);if(g>(d+a.j_|0))break;h=B0(0,g);i=new MC;g=a.eI.b;f=a.j_;j=a.hY;i.fZ=new Bh;i.fn=new BW;i.iv=h;i.dr=20;i.d9=f;i.ea=B0(g,20*f|0);i.fq=Ss(j,f);if(i.bR===null)i.bR=CS(b);BX(a.co,i);}if(f==e)return;RC(a,c);}
function RC(a,b){var c,d,e,f,g,h,i,j;c=a.co;d=c.i;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=BR(c);while(B3(c)){f=BV(c);g=a.ee;h=a.iD;Eq(g);i=0;while(true){j=f.dr;if(i>=j)break;j=e-Bb(d,j)|0;if(j<b)j=e;e=j+1|0;FW(f,g,C0(e),Bb(f.d9,i)+f.fq|0,h);i=i+1|0;}CM(f.bR,g);}}
function SK(a,b,c,d){var e;a.hY=b;a.j_=c;e=c*20|0;a.hX=e;b=CF(a.ee,CL(d,a.eI.b,e));a.ee=b;Cu(b,a.hY);Rd(a.ee,2);b=CF(a.eV,CL(d,a.eI.b,c));a.eV=b;Cu(b,a.hY);Rd(a.eV,2);}
function Uw(a,b,c,d,e){CG(a.fw,b);Bg(a.eI,c,d);a.iD=e;}
var ABt=F(0);
function ABN(){return AJ0(Cw(96,99,102),Cw(49,51,53),Cw(164,163,163),Cv(50));}
function Vt(){var a=this;C.call(a);a.iI=null;a.pK=null;a.ic=null;}
function AKB(a,b,c){if(!c){b=E6(a.ic.gt,b.k,a.pK,1);a.iI=b;if(b!==null)return 1;}return 1;}
function AL6(a,b,c){if(a.iI!==null)a.iI=null;return 1;}
function AGw(a,b){var c;c=a.iI;if(c!==null){c.m(b);return 1;}c=a.ic;return Ff(c.gt,b.k,c.rB);}
function RT(){C.call(this);this.m9=null;}
function AFR(a,b,c,d){var e,f;b=a.m9;e=(LY(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dH=W(Ba(0,b.dH+Bb(e,f)|0),O9(b));return 1;}
var TE=F(0);
function GX(a){return Du(a,null);}
function TK(b){var c;c=new M_;c.mZ=b;return c;}
function Z6(){var a=this;C.call(a);a.eB=null;a.cD=null;a.dC=null;a.d5=null;a.l3=null;a.jf=null;}
function G7(){var a=new Z6();AGs(a);return a;}
function AGs(a){var b;a.eB=new Bh;a.cD=new Bh;a.dC=new Bh;a.d5=new Bh;b=new BW;a.l3=b;a.jf=new BW;EK();BF(b,AT2);BF(a.jf,AUg);}
function O6(a){var b;b=a.cD;return !Bb(b.b,b.a)?0:1;}
function Ii(a,b){return Hc(b,a.dC,a.d5);}
function E6(a,b,c,d){var e,f,g,h,i;e=Ii(a,b);f=Hc(b,a.eB,a.cD);if(!e&&!f)return null;if(!f){if(!d)c.m(Wv(a,b.b-a.dC.b|0));else c.m(NS(a,b.a-a.dC.a|0));}g=!d?a.eB.b+(a.cD.b/2|0)|0:a.eB.a+(a.cD.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new M$;b.rJ=a;b.rL=c;b.rK=i;}else{b=new M8;b.oL=a;b.oK=c;b.oM=i;}return b;}
function ACs(b,c){var d;d=new S1;d.pE=b;d.lV=c;return d;}
function NS(a,b){var c,d,e;c=a.d5.a;d=a.cD.a;e=c-d|0;return ACs(W(Ba(0,b-(d/2|0)|0),e),e);}
function Wv(a,b){var c,d,e;c=a.d5.b;d=a.cD.b;e=c-d|0;return ACs(W(Ba(0,b-(d/2|0)|0),e),e);}
function H3(a,b,c,d,e,f,g){Nd(a,b,c,d,e,f,g,1);}
function LL(a,b,c,d,e,f,g){Nd(a,b,c,d,e,f,g,0);}
function Nd(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bg(a.d5,0,0);Bg(a.cD,0,0);}else{i=W(g*3|0,d);j=Ba(O2(d,d,e),i);e=e-d|0;i=d-j|0;i=i?O2(b,i,e):0;if(!h){k=a.eB;k.b=i+c|0;k.a=f-g|0;l=a.cD;l.b=j;l.a=g;l=a.dC;l.b=c;l.a=k.a;k=a.d5;k.b=d;k.a=g;}else{k=a.eB;k.b=f-g|0;k.a=i+c|0;l=a.cD;l.b=g;l.a=j;l=a.dC;l.b=k.b;l.a=c;k=a.d5;k.b=g;k.a=d;}}}
function Ph(a,b){FL(a,b);F5(a,b);}
function FL(a,b){var c;c=a.dC;BB(b,c.b,c.a,a.d5,a.l3);}
function F5(a,b){var c,d;c=a.cD;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eB;BB(b,d.b+1|0,d.a+1|0,c,a.jf);b=a.cD;b.b=b.b+2|0;b.a=b.a+2|0;}
function Ff(a,b,c){return Ii(a,b)&&GX(c)?1:0;}
function Pm(){C.call(this);this.sY=null;}
function AMM(a,b){var c,d,e;c=a.sY;if(b.ch&&b.bj==79){if(!b.by){b=c.bf.bU;d=new Rm;d.s4=c;Lb(b,d);}else{b=c.bf.bU;d=new Rl;d.vk=c;U9(b,d);}e=1;}else e=0;return e;}
function Qp(){C.call(this);this.uv=null;}
function ADR(a,b){var c,d,e,f;c=b.data;b=By();d=Ct(c[0]);e=new M;O(e);G(G(e,B(190)),d);Bu(b,N(e));b=By();f=c[1];d=new M;O(d);G(G(d,B(279)),f);Bu(b,N(d));}
function Qo(){C.call(this);this.wi=null;}
function APt(a,b){var c,d,e,f,g,h,i;c=b.data;d=By();e=Ct(c[0]);f=new M;O(f);G(G(f,B(190)),e);Bu(d,N(f));g=Fy(Q0(b,1));b=By();d=Ct(c[1]);if(g===null)c=B(29);else{c=new M;O(c);BY(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BY(c,B(44));BA(c,i[h]);h=h+1|0;}BY(c,B(45));c=N(c);}e=new M;O(e);G(G(G(G(e,B(280)),d),B(281)),c);Bu(b,N(e));}
function Qn(){C.call(this);this.nw=null;}
function AGa(a,b){TD(a.nw,b);}
function Qm(){C.call(this);this.ub=null;}
function AKY(a,b){var c,d,e,f,g;c=b.data;d=By();e=Ct(c[0]);f=new M;O(f);G(G(f,B(190)),e);Bu(d,N(f));g=Eo(Q0(b,1));b=By();d=Ct(c[1]);c=AA1(g);e=new M;O(e);G(G(G(G(e,B(282)),d),B(283)),c);Bu(b,N(e));}
function Qk(){C.call(this);this.vm=null;}
function AKb(a,b){var c,d;c=K2();b=Ct(b);d=new M;O(d);G(G(d,B(284)),b);Bu(c,N(d));b=new E8;U(b);J(b);}
function Qj(){C.call(this);this.oW=null;}
function AL3(a,b){var c,d,e,f;c=a.oW;d=c.bf.bU;e=new Nq;e.p1=c;f=R(C,1);f.data[0]=b;C1(d,e,B(285),f);}
function SS(){C.call(this);this.kD=null;}
function ANU(a,b){var c,d,e,f,g,h;c=a.kD;d=c.k1;if(d!==null){e=c.dv.M;f=e.b;g=b.k;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.k1=g;}b=b.k;f=b.b;c=c.es;d=c.v;f=f-d.b|0;h=b.a-d.a|0;Bg(c.M,f,h);return 1;}
function AOf(a,b,c){var d;if(!c){d=b.k;b=a.kD;if(!Ek(b.dv,d))d=null;b.k1=d;}return 1;}
function Tj(){var a=this;C.call(a);a.ik=null;a.oD=null;a.iP=null;}
function AEt(a,b,c){if(!c){b=E6(a.iP.hm,b.k,a.oD,1);a.ik=b;if(b!==null)return 1;}return 1;}
function AE9(a,b,c){if(a.ik!==null)a.ik=null;return 1;}
function AD3(a,b){var c;c=a.ik;if(c!==null){c.m(b);return 1;}c=a.iP;return Ff(c.hm,b.k,TK(c.bf.bU));}
function Nf(){C.call(this);this.sp=null;}
function ADV(a,b,c,d){var e,f;b=a.sp;e=(LY(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ed=W(Ba(0,b.ed+Bb(e,f)|0),QT(b));return 1;}
function Rw(){C.call(this);this.ql=null;}
function ANY(a,b){var c,d;a:{c=a.ql;switch(b.bj){case 67:LT(c);d=1;break a;case 86:Qh(c);d=1;break a;default:}d=0;}return d;}
var Rv=F();
function AGx(a,b,c){return 0;}
function Rt(){C.call(this);this.oi=null;}
function ANn(a,b,c){var d,e;d=a.oi;c=d.dg+1|0;d.dg=c;d=HD(E(H4));e=new M;O(e);G(G(S(e,c),B(286)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Vk(b,e);return 1;}
var Rs=F();
function ALr(a){return null;}
function Ru(){C.call(this);this.mF=null;}
function AEZ(a){var b,c;b=a.mF;c=new Pc;c.qv=b;return c;}
function Q2(){C.call(this);this.v8=null;}
function AGD(a,b){return 0;}
function Kv(){var a=this;C.call(a);a.lB=null;a.t8=null;a.ui=0.0;a.nO=0;a.us=0;a.uX=0;a.ps=0;a.vP=0;a.dd=0.0;a.dX=0.0;a.uf=0.0;a.iU=0.0;a.up=0;a.ms=null;}
function DZ(a){return CX(a.dd+a.dX);}
function Jv(a,b){return CX((a.dd+a.dX)*b);}
function PJ(){C.call(this);this.v5=null;}
function AG$(a,b){return b.g6&&b.bj==32?1:0;}
function PK(){C.call(this);this.o3=null;}
function ADs(a,b){var c,d,e,f,g,h;b=b;c=a.o3;if(!DA(c.fh)){d=c.fh;b=b.k;e=R(C5,1);f=e.data;g=new C5;h=new Qw;h.md=c;J1(g,h,B(274),d.gT.bd);f[0]=g;F2(d,b,FH(e),AUc);}return 1;}
function PL(){C.call(this);this.qm=null;}
function AMp(a,b,c,d){return KB(a.qm,b,c,d);}
function H5(){var a=this;C.call(a);a.fB=null;a.f=null;a.ix=null;a.oO=null;}
function AUh(a,b,c){var d=new H5();PM(d,a,b,c);return d;}
function PM(a,b,c,d){var e,f,g,h,i,j,k;a.fB=d;a.ix=c;if(d===null)c=null;else{c=d.eL;c=c===null?null:!D6(c,B(287))&&!D6(c,B(288))&&!D6(c,B(289))&&!D6(c,B(290))&&!D6(c,B(291))&&!D6(c,B(292))?(D6(c,B(230))?B(137):!D6(c,B(293))?null:B(246)):B(247);}e=b.data;a.oO=c;c=new Hr;f=e.length;if(!f)g=Ma(B(31));else{g=R(Cx,f);h=g.data;i=0;while(i<f){j=new Cx;k=R(B5,1);k.data[0]=Q4(e[i]);HJ(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.dS=HG();c.d_=HG();c.e1=Cl();if(!b.length){c=new BC;U(c);J(c);}c.B=g;c.fi=0;c.ck=0;c.cU=Te(c);a.f=c;}
function Df(a){var b;b=a.ix;if(b===null)b=a.oO;return b;}
function GG(a){var b;b=a.fB;return b===null?null:b.ho;}
function ZF(){var a=this;C.call(a);a.ho=null;a.kz=null;a.eL=null;a.ww=null;}
function AOV(a,b,c,d){var e=new ZF();AJf(e,a,b,c,d);return e;}
function AJf(a,b,c,d,e){a.ho=b;a.kz=c;a.eL=d;a.ww=e;}
function AOt(a,b){var c;if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){c=b;return Dg(a.ho,c.ho)&&Dg(a.kz,c.kz)&&Dg(a.eL,c.eL)?1:0;}return 0;}
var N3=F(0);
var On=F();
function AHe(a,b,c){var d,e;d=b;e=c;b=new M;O(b);S(G(S(G(b,B(294)),d),B(295)),e);CE(N(b));return d+e|0;}
var N4=F(0);
var Ol=F();
function AIl(a,b,c){var d,e;d=b;e=c;b=new M;O(b);E$(G(E$(G(b,B(296)),d),B(295)),e);CE(N(b));return d+e;}
var Yj=F();
var Xs=F(0);
function LV(){C.call(this);this.mQ=null;}
function AJw(a){Kc(a.mQ);}
function LW(){C.call(this);this.pf=null;}
function AH2(a){Jk(a.pf);}
function U1(){var a=this;C.call(a);a.mC=null;a.rp=null;a.rI=null;a.nC=null;a.l9=null;a.p$=null;}
function Kg(a,b,c){return Wx(a,Cn(a.mC),b,c);}
function UK(a,b,c){return Wx(a,Cn(a.rp),b,c);}
function Wx(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.sA(c,d))return g.uE;f=f+1|0;}return null;}
function MO(a,b,c){var d,e,f,g;d=(Cn(a.rI)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.sA(b,c))return g.uN;f=f+1|0;}return null;}
function W_(){var a=this;C.call(a);a.bI=null;a.bA=null;a.cL=0;}
function ALi(){var a=new W_();ADY(a);return a;}
function QG(a){var b=new W_();ADl(b,a);return b;}
function ADY(a){a.bI=new Ga;a.bA=new Ga;}
function ADl(a,b){var c;c=new Ga;a.bI=c;a.bA=new Ga;Wj(c,b.bI);Wj(a.bA,b.bA);a.cL=b.cL;}
function J9(a,b,c){B1(a.bA,b,c);if(!a.cL)B1(a.bI,b,c);}
function Pn(a,b){B1(a.bI,b,0);B1(a.bA,b+1|0,0);}
function DT(a){if(WL(a.bI,a.bA)>0)return a.bA;return a.bI;}
function Fo(a){if(WL(a.bI,a.bA)<0)return a.bA;return a.bI;}
function Di(a){var b,c;b=a.bI;c=a.bA;return (b===c?1:c!==null&&Cm(b)===Cm(c)?(b.I==c.I&&b.U==c.U?1:0):0)?0:1;}
function Yx(a,b){var c,d;if(!Di(a))return 0;c=DT(a);d=Fo(a);return c.I<=b&&b<d.I?1:0;}
function MM(){var a=this;C.call(a);a.ej=null;a.ek=0;a.cZ=0;}
function Mb(a,b){var c,d,e;c=a.ek;d=a.ej;if(c==d.data.length)a.ej=Dc(d,c+16|0);d=a.ej.data;e=a.ek;a.ek=e+1|0;d[e]=b;}
function Wp(a){var b,c,d;b=a.cZ;c=a.ek-1|0;if(b==c)a.cZ=b-1|0;d=a.ej.data;a.ek=c;d[c]=null;}
function EM(){var a=this;C.call(a);a.bM=0;a.bN=null;a.d4=null;a.dl=0;a.cR=0;}
var AT8=0;var AUi=0;var AT7=0;function KC(b,c){return (c-DZ(b)|0)/2|0;}
function Ss(b,c){return KC(b,c)+b.ps|0;}
function AAT(a,b,c,d,e){var f,g;if(D5(a.d4))return;if(e>ES(a.bN))return;f=e/1024|0;e=a.cR;if(f==e)return;if(LY(f-e|0)>=a.dl){g=0;while(g<a.dl){HE(a,b,d,c,f+g|0);g=g+1|0;}a.cR=f;return;}while(true){e=a.cR;if(e>=f)break;HE(a,b,d,c,e+a.dl|0);a.cR=a.cR+1|0;}while(true){e=a.cR;if(e<=f)break;HE(a,b,d,c,e-1|0);a.cR=a.cR-1|0;}}
function HE(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Eq(b);f=a.bN.e5;g=e*1024|0;h=Oi(a,g);if(h>=a.bN.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bM;a:{while(true){l=a.bN.o.data;if(h>=l.length)break a;m=l[h];n=!AT7?Ss(d.data[m.b3],c):KC(d.data[m.b3],c);o=f.data;Cu(b,d.data[m.b3]);Cf(b,m.r,k,n);k=o[h]-j+a.bM;if(k>1024.0)break;h=h+1|0;}}CM(Bs(a.d4,e%a.dl|0),b);}
function AAY(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(D5(a.d4))return;if(!a.dl)return;if(j>ES(a.bN))return;o=a.bN;p=o.dU;q=o.o;r=j/1024|0;s=Oi(a,j);t= -a.bM|0;u=i;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=h)break;y=p.data;o=Bs(a.d4,r%a.dl|0);z=v[s];ba=y[s]+a.bM|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=W(be,ba)-j|0;if(bc&&x)bf=bf+a.bM|0;if((t+bf|0)>h)bf=h-t|0;bg=l!==null?0:1;b:{if(!bg){bh=!x
?a.bM:2*a.bM|0;bi=l.b;w=l.a;if(!(bi<w&&j<=w&&(j+bf|0)>(bi+bh|0)?0:1)){bh=0;break b;}}bh=1;}c:{if(!bg){bj=!x?a.bM:2*a.bM|0;if(j>=l.b&&(j+bf|0)<=(l.a+bj|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(z===m)bl=k.pt;bm=BR(n);d:{e:{while(B3(bm)){f:{bn=BV(bm);if(bn!==null){if(!bn.dA(z))break f;else break e;}if(z===null)break e;}}bi=0;break d;}bi=1;}if(bi)bl=k.mD;if(!bk&&!bh){l.a=W(l.a,ES(a.bN));bj=j>=l.b?bf:(W(ba,be)-l.b|0)-(!x?a.bM:0)|0;bi=(j+bf|0)<=(l.a+(!x?a.bM:2*a.bM|0)|0)?0:(W(ba,be)-l.a|0)-(!x?a.bM:0)|0;w=j-bb|0;be
=t+c|0;bo=w;x=bf-bj|0;CD(e,bo,0.0,x,u);Bg(f,x,i);HU(a,d,be,b,f,e,z,o,g,k,0,bl);w=w+bf|0;CD(e,w-bi|0,0.0,bi,u);Bg(f,bi,i);be=be+bf|0;HU(a,d,be-bi|0,b,f,e,z,o,g,k,0,bl);bp=w-bj|0;bi=bj-bi|0;CD(e,bp,0.0,bi,u);Bg(f,bi,i);HU(a,d,be-bj|0,b,f,e,z,o,g,k,1,bl);}else{CD(e,j-bb|0,0.0,bf,u);Bg(f,bf,i);HU(a,d,t+c|0,b,f,e,z,o,g,k,bk,bl);}j=j+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function HU(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bw!==0.0&&f.bc!==0.0){m=j.np.data[g.cz];if(k)n=j.kY;else{g=m.qC;if(g===null)g=j.iS;if(l===null)l=BI(g);n=l;}g=m.qB;if(AUi)i=0.0;EB(b,c,d,e,f,h,g,n,i);return;}return;}}
function Oi(a,b){var c,d,e,f,g,h,i;c=a.bN;d=c.e5;e=0;f=c.o.data.length;g=b;b=BD(e,f);if(b>0){c=new BC;U(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AA8(a,b,c,d,e,f){var g,h;a.cR=f/1024|0;while(true){g=a.d4;if(g.i>=a.dl)break;BX(g,CS(c));}h=0;while(h<a.dl){HE(a,b,e,d,a.cR+h|0);h=h+1|0;}}
function PH(a){a.bN=null;Ju(a.d4,new PI);G_(a.d4);}
function AAI(a,b,c,d,e,f,g,h,i){var j,k;j=ES(a.bN);if(j)j=j+a.bM|0;if(!j)j=j-a.bM|0;k=Ba( -a.bM|0,j-g|0);if(k>=h)return;Bg(f,h-k|0,e);BB(b,c+k|0,d,f,i);}
function Y6(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EM,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B2(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bN===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EM;f.bM=3;f.d4=Cl();f.cR=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)PH(o);h=h+1|0;}return g;}
function ABr(){AT7=0;}
function TV(){C.call(this);this.wl=null;}
function TU(){C.call(this);this.pU=null;}
function AMW(a,b){var c;c=a.pU;c.bi=FB(b,EN(c));}
function TQ(){C.call(this);this.m0=null;}
function AKW(a,b){var c;c=a.m0;c.cg=FB(b,F_(c));}
function TP(){C.call(this);this.rT=null;}
function AMT(a){var b,c;b=a.rT;c=b.hD?0:1;b.hD=c;b=new M;O(b);FT(G(b,B(297)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TS(){C.call(this);this.qe=null;}
function AH7(a){var b,c;b=a.qe;c=b.ht?0:1;b.ht=c;b=new M;O(b);FT(G(b,B(298)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TR(){C.call(this);this.nc=null;}
function AKi(a){var b,c;b=a.nc;c=b.iW^1;b.iW=c;b=new M;O(b);FT(G(b,B(299)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Uh(){C.call(this);this.so=null;}
function AMj(a){var b,c,d,e,f;b=a.so;c=(b.ks+3|0)%6|0;b.ks=c;d=b.f8.data;e=d.length;f=0;while(f<e){b=d[f];b.bM=c;b=b.bN;if(b!==null)b.hA=1;f=f+1|0;}}
var Fh=F(Cr);
var AT5=null;var AUj=null;var AT6=null;var AUk=null;function ADB(){ADB=Br(Fh);AKp();}
function AAr(a,b){var c=new Fh();AAf(c,a,b);return c;}
function AAf(a,b,c){ADB();DE(a,b,c);}
function AKp(){var b;AT5=AAr(B(300),0);AUj=AAr(B(301),1);b=AAr(B(302),2);AT6=b;AUk=H(Fh,[AT5,AUj,b]);}
function IU(){var a=this;C.call(a);a.dG=null;a.er=null;a.e7=null;}
var ATi=0;function AAW(a){var b;b=a.er;if(b!==null){ATi=ATi-1|0;a.dG.c$.deleteTexture(b);a.er=null;}}
function Cb(a){return a.e7.b;}
function C3(a){return a.e7.a;}
function SJ(a,b,c,d){var e;e=a.e7;e.b=b;e.a=c;Lh(a);a.dG.c$.texStorage2D(3553,1,d,b,c);e=a.dG.c$;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Lh(a){var b,c;b=a.dG.c$;c=a.er;b.bindTexture(3553,c);}
function CM(a,b){Mz(a,b.la,b.ko,32856);O3(a,b,0,0);}
function Mz(a,b,c,d){var e,f,g,h;a:{e=a.e7;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){Lh(a);break a;}e=a.dG.c$;h=a.er;e.deleteTexture(h);a.er=a.dG.c$.createTexture();SJ(a,b,c,d);break a;}}SJ(a,b,c,d);}}
function Hz(a,b,c,d){Lh(a);O3(a,b,c,d);}
function O3(a,b,c,d){var e;e=a.dG.c$;b=b.i9;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Rn=F();
function APT(a,b){return ACw(b);}
function Ro(){C.call(this);this.qL=null;}
function ADw(a,b){return Mi(a.qL,b);}
function SM(){C.call(this);this.jG=null;}
var AUb=null;function O$(){var a=new SM();Zu(a);return a;}
function Zu(a){a.jG=Cl();}
function DY(a,b,c,d){OR(a,AB_(d,b,c));}
function Eb(b,c,d){return AB_(d,b,c);}
function Ex(a,b,c,d){OR(a,ARu(null,b,c,d));}
function OR(a,b){BX(a.jG,b);}
function G8(a){return FH(Hn(a.jG,AUb));}
function Xk(){AUb=R(C5,0);}
var WN=F(0);
var AUc=null;function ABP(){AUc=new M2;}
function G6(){var a=this;C.call(a);a.nu=null;a.se=null;a.s7=null;a.pj=null;a.ng=null;a.h8=null;}
function AUl(a,b,c,d,e){var f=new G6();JI(f,a,b,c,d,e);return f;}
function JI(a,b,c,d,e,f){a.h8=Cv(255);a.nu=b;a.se=c;a.s7=d;a.pj=e;a.ng=f;}
function G0(){var a=this;C.call(a);a.lF=null;a.gq=null;a.sy=null;}
function AUm(a,b,c){var d=new G0();Lk(d,a,b,c);return d;}
function Lk(a,b,c,d){a.lF=b;a.gq=c;a.sy=d;}
function Xj(){var b,c;b=new G0;c=Bm(B(303));EK();Lk(b,c,AT0,AT1);return b;}
function ACC(){var b,c;b=new G0;Dp();c=ATX;EK();Lk(b,c,ATY,AT1);return b;}
function AC4(){var a=this;C.call(a);a.lE=null;a.pW=0;}
function AFm(a,b){var c=new AC4();AO$(c,a,b);return c;}
function AO$(a,b,c){var d;d=new BW;a.lE=d;a.pW=b;d.bw=c;}
function Qf(a,b){return B9(a.pW,b);}
var HB=F(0);
var V_=F();
function AMD(a,b,c,d){var e;b=By();d=Ct(d);e=new M;O(e);G(G(S(G(e,B(304)),c),B(266)),d);Bu(b,N(e));}
var Wa=F();
function U3(){C.call(this);this.gh=null;}
function ADv(a,b){return JV(a.gh,b);}
function AMF(a,b,c,d){return IR(a.gh,b,c,d);}
function ANz(a,b,c){return Jj(a.gh,b,c);}
function AIu(a,b,c){return DA(a.gh);}
function ABF(){var a=this;C.call(a);a.iF=null;a.g8=null;a.oz=null;a.oH=null;}
function AJ0(a,b,c,d){var e=new ABF();APd(e,a,b,c,d);return e;}
function APd(a,b,c,d,e){a.iF=b;a.g8=c;a.oz=d;a.oH=e;}
function WY(){C.call(this);this.qi=null;}
function AL7(a,b){var c;c=a.qi.ic;c.dH=FB(b,O9(c));}
function M_(){C.call(this);this.mZ=null;}
function Du(a,b){Gh(a.mZ,b);return 1;}
var Dt=F(0);
var AT2=null;var AUg=null;var AT0=null;var AUn=null;var AT1=null;var AT3=null;var AUo=null;var ATZ=null;var ATY=null;function EK(){EK=Br(Dt);AH0();}
function AH0(){AT2=W2(50,50,50,100);AUg=W2(80,80,80,200);AT0=Bm(B(305));AUn=Bm(B(270));AT1=Bm(B(306));AT3=Bm(B(307));AUo=Bm(B(270));ATZ=Bm(B(306));Dp();ATY=ATQ;}
var AAa=F();
function OW(){C.call(this);this.mA=null;}
function AIC(a,b){var c;c=a.mA.iP;c.ed=FB(b,QT(c));}
function Qy(){C.call(this);this.lX=null;}
function ADz(a,b){return Du(a.lX,null);}
var Yv=F();
function Hr(){var a=this;C.call(a);a.B=null;a.cU=null;a.dS=null;a.d_=null;a.e1=null;a.ck=0;a.fi=0;a.om=0.0;}
function Te(a){var b,c,d,e,f,g,h,i;b=Sv(a);c=new Ij;d=new Nc;e=Nm(0,b,0);f=new WF;f.rR=e;L6(d,1);e=BR(f);g=0;while(true){h=d.b$.data;i=h.length;if(g>=i)break;h[g]=BV(e);g=g+1|0;}d.i=i;Tk(c,d);return c;}
function B2(a,b){return a.B.data[b];}
function CA(a){return a.B.data.length;}
function Sv(a){return FY(a,CA(a));}
function E_(a,b){return a.B.data[b].N;}
function Ks(a,b){var c,d,e,f,g,h,i;c=a.B.data;d=c[b];e=c[b+1|0];f=DF(K4(d.o,e.o));g=a.B;h=g.data.length;if(b<h&&b>=0){i=R(Cx,h-1|0);c=i.data;Qc(g,b,i);c[b]=f;a.B=i;return;}d=new Bn;U(d);J(d);}
function Ox(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.B.data;if(!(c<d[b].N?0:1)){d=(B2(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.r)){f=L(h.r,g);break a;}g=g-I(h.r)|0;f=f+1|0;}f=0;}EF();h=new Bv;d=BQ(1);d.data[0]=f;G4(h,d);Gl(a,b,c,1,h);h=a.B.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].r);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].r)==1)h.o=Qc(i,j,R(B5,e-1|0));else{k=d[j];if(c<=0)l=Dv(Db(k.r,1),k.cz,k.b3);else if(c>=(I(k.r)-1|0)){l=new B5;m=k.r;Up(l,B8(m,0,I(m)-
1|0),k.cz,k.b3);}else{i=BQ(I(k.r)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.r,b);b=b+1|0;}b=n.length;while(c<b){m=k.r;e=c+1|0;n[c]=L(m,e);c=e;}l=Dv(FK(i),k.cz,k.b3);}d[j]=l;}h.N=h.N-1|0;D8(h);}else if(b!=(d.length-1|0))Ks(a,b);}
function WS(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Wg(a.B.data[b],c,e[0]);return;}g=f-1|0;h=Ia(a.B.data[b],c);d=a.B;i=Dc(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].r);I3(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fe(e[m]))j=DF(R(B5,0));else{j=new Cx;l=R(B5,1);l.data[0]=Dv(e[m],0,0);HJ(j,l);}d[b+m|0]=j;m=m+1|0;}I3(h[1],0,0,e[g]);d[b+g|0]=h[1];a.B
=i;}
function U_(a,b){var c,d,e,f,g,h,i;c=DT(b);d=Fo(b);e=c.I;if(e==d.I)return B8(ED(a.B.data[e]),c.U,d.U);f=new M;O(f);b=a.B.data[c.I];e=c.U;BA(BY(f,Db(ED(b),e)),10);g=a.B;h=c.I+1|0;e=d.I;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Xi(BY(f,ED(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.B.data[d.I];i=d.U;BY(f,B8(ED(b),0,i));return N(f);}}b=new VH;U(b);J(b);}
function Sx(a,b,c){var d;TT(a,b);d=DT(b);Gl(a,d.I,d.U,1,c);}
function TT(a,b){var c,d,e,f,g,h,i;a:{c=DT(b);d=Fo(b);e=c.I;if(e==d.I)FI(a.B.data[e],c.U,d.U);else{b=a.B.data[e];FI(b,c.U,b.N);FI(a.B.data[d.I],0,d.U);e=c.I+1|0;f=d.I;g=a.B;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Cx,(h-f|0)+e|0);Zk(g,e,f,i);a.B=i;Ks(a,c.I);break a;}b=new Bn;U(b);J(b);}b=new Bn;U(b);J(b);}}}
function F3(a,b,c){return EL(b,GF(B2(a,b),c));}
function MX(a,b){var c,d,e;c=0;d=0;while(true){e=a.B.data.length;if(c>=e)break;if((d+(B2(a,c)).N|0)>=b)return B0(c,b-d|0);d=d+((B2(a,c)).N+1|0)|0;c=c+1|0;}return B0(e,0);}
function FY(a,b){var c,d,e;c=0;d=a.B.data.length;e=0;while(e<b){c=c+E_(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function F6(a,b){return T2(B2(a,b.bm),b.br);}
function F9(a){var b,c,d,e,f,g,h,i,j;b=BQ(Sv(a));c=b.data;d=a.B.data.length;e=0;f=0;while(e<d){g=a.B.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].r;O1(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gl(a,b,c,d,e){var f,g,h,i,j,k;a:{a.ck=a.ck+1|0;f=a.e1;g=R(GJ,1);h=new GJ;h.el=b;h.eW=c;i=Lg(e,B(223),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B0(b,c+I(i[0])|0);break a;}k=B0((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=B0(b,c);}i=g.data;h.kt=k;h.jc=d;h.gD=e;i[0]=h;BX(f,g);I$(a,b,c,d,e);}
function I$(a,b,c,d,e){var f;f=FY(a,b)+c|0;if(!d)OY(a.cU,f,I(e));else S2(a.cU,f,I(e));}
function Sp(a,b){var c,d,e;c=Lg(b.gD,B(223),(-1));if(b.jc){WS(a,b.el,b.eW,c);OY(a.cU,FY(a,b.el)+b.eW|0,I(b.gD));}else{c=c.data;d=ALi();B1(d.bI,b.el,b.eW);e=c.length;if(e==1)B1(d.bA,b.el,b.eW+I(c[0])|0);else B1(d.bA,(b.el+e|0)-1|0,I(c[e-1|0]));TT(a,d);S2(a.cU,FY(a,b.el)+b.eW|0,I(b.gD));}return b.kt;}
function OJ(a){a.fi=a.ck;}
var EP=F();
function LB(){EP.call(this);this.uE=null;}
function LZ(){EP.call(this);this.uN=null;}
function Pq(){EP.call(this);this.vQ=null;}
var H7=F(0);
var Qt=F(0);
function Ga(){var a=this;C.call(a);a.I=0;a.U=0;}
function B1(a,b,c){a.I=b;a.U=c;}
function Wj(a,b){a.I=b.I;a.U=b.U;}
function WL(a,b){var c;c=BD(a.I,b.I);if(c)return c;return BD(a.U,b.U);}
function IN(){var a=this;C.call(a);a.kN=null;a.lr=null;}
function Ix(a){return a.kN.bm;}
function K7(a){return a.kN.br;}
var J_=F(F0);
var AS2=null;function AGM(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AC5(){var b;b=new J_;WW(b);AS2=b;}
var ACm=F();
function H2(b,c){var d,e,f;if(c<=0)return B(31);d=BQ(c);e=d.data;e[0]=ABd(HS(b,52));f=1;while(f<c){e[f]=ABd(HS(b,62));f=f+1|0;}return FK(d);}
function ABd(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var Zf=F();
function ACP(){var a=this;C.call(a);a.Ci=null;a.z4=null;a.Bb=0;a.AI=0;}
var AB$=F(0);
function ABT(b){var c;a:{switch(b){case 0:break;case 1:c=B(137);break a;case 2:c=B(247);break a;case 3:c=B(246);break a;default:c=null;break a;}c=B(166);}return c;}
var CP=F();
var AAy=F(CP);
var ABc=F(CP);
var Yn=F(CP);
var YH=F(CP);
var ABG=F(CP);
function ZR(){var a=this;Ev.call(a);a.gg=0;a.cH=null;a.gb=0;a.ts=0.0;a.ki=0;}
function HG(){var a=new ZR();AGi(a);return a;}
function AGi(a){var b;b=ACn(16);a.gg=0;a.cH=R(HM,b);a.ts=0.75;T0(a);}
function ACn(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function T0(a){a.ki=a.cH.data.length*a.ts|0;}
function M9(a,b){return R7(a,b)===null?0:1;}
function En(a,b){var c;c=R7(a,b);if(c===null)return null;return c.fv;}
function R7(a,b){var c,d;if(b===null)c=Rg(a);else{d=X7(b);c=Po(a,b,d&(a.cH.data.length-1|0),d);}return c;}
function Po(a,b,c,d){var e,f;e=a.cH.data[c];while(e!==null){if(e.kJ==d){f=e.hH;if(b!==f&&!Xn(b,f)?0:1)break;}e=e.eQ;}return e;}
function Rg(a){var b;b=a.cH.data[0];while(b!==null&&b.hH!==null){b=b.eQ;}return b;}
function Sj(a,b,c){var d,e,f;if(b===null){d=Rg(a);if(d===null){a.gb=a.gb+1|0;d=TL(a,null,0,0);e=a.gg+1|0;a.gg=e;if(e>a.ki)Ub(a);}}else{e=X7(b);f=e&(a.cH.data.length-1|0);d=Po(a,b,f,e);if(d===null){a.gb=a.gb+1|0;d=TL(a,b,f,e);e=a.gg+1|0;a.gg=e;if(e>a.ki)Ub(a);}}b=d.fv;d.fv=c;return b;}
function TL(a,b,c,d){var e,f,g;e=new HM;f=null;e.hH=b;e.fv=f;e.kJ=d;g=a.cH.data;e.eQ=g[c];g[c]=e;return e;}
function Ub(a){var b,c,d,e,f,g,h,i;b=a.cH.data.length;b=ACn(!b?1:b<<1);c=R(HM,b);d=c.data;e=0;f=b-1|0;while(true){g=a.cH.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.kJ&f;i=h.eQ;h.eQ=d[b];d[b]=h;h=i;}e=e+1|0;}a.cH=c;T0(a);}
function X7(b){var c,d,e,f,g,h;c=R(C,2).data;c[0]=FO(b.bm);c[1]=FO(b.br);d=(-1515898884);e=0;while(e<c.length){b=c[e];if(b===null)f=0;else{g=b.e8;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;d=JE(h,4)^((h>>>7|0)|h<<25)^JE(d,13);e=e+1|0;}return d;}
function Cx(){var a=this;C.call(a);a.o=null;a.N=0;a.e5=null;a.dU=null;a.c_=null;a.gC=null;a.fp=0;a.hA=0;a.he=0;}
var AUp=0;var AUq=0;var AT$=0;function DF(a){var b=new Cx();HJ(b,a);return b;}
function HJ(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].r)|0;f=f+1|0;}a.N=d;D8(a);}
function GF(a,b){var c;c=HZ(a,b);return c<=0?0:a.c_.data[c-1|0];}
function HZ(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.c_!==null&&!a.he)){Vv(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].r)|0;a.c_.data[d]=e;d=d+1|0;}a.he=0;}d=S5(a.c_,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function T2(a,b){var c;c=a.o.data;if(!c.length)return null;return c[HZ(a,b)];}
function FI(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.N){a.o=R(B5,0);D8(a);a.N=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].r);i=I(a.o.data[f].r);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.r)?1:0){g=a.o;a.o=Qc(g,e,R(B5,g.data.length-1|0));a.N=a.N-d|0;D8(a);return;}a.o.data[e]=Dv(E3(B8(k.r,0,b),Db(k.r,c)),k.cz,k.b3);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.r))a.o.data[e]=Dv(B8(l.r,0,b),l.cz,l.b3);e=e+1|0;}if(c==I(m.r))f=f+1|0;else if(c)a.o.data[f]=Dv(Db(m.r,c),m.cz,m.b3);g=a.o;a.o=Zk(g,e,f,R(B5,(g.data.length-f|0)+e|0));}a.N=a.N-d|0;D8(a);}
function Ia(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cx,[DF(R(B5,0)),a]);if(b>=a.N)return H(Cx,[a,DF(R(B5,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].r);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cx,[DF(Km(c,0,R(B5,d))),DF(Km(c,d,R(B5,f-d|0)))]);h=e[d];e=Km(c,0,R(B5,d+1|0));i=e.data;j=Km(c,d,R(B5,f-d|0));c=j.data;i[d]=Dv(B8(h.r,0,b),h.cz,h.b3);c[0]=Dv(Db(h.r,b),h.cz,h.b3);return H(Cx,[DF(e),DF(j)]);}
function Wg(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].r);if(b<=g)break;b=b-g|0;d=e;}}I3(a,d,b,c);}
function I3(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=R(B5,1);h.data[0]=Q4(d);a.o=h;}else if(!b&&!c){i=R(B5,g+1|0);h=i.data;Do(e,0,i,1,g);h[0]=Q4(d);a.o=i;}else{j=f[b];if(c<=0)k=Dv(E3(d,j.r),j.cz,j.b3);else if(c>=I(j.r))k=Dv(E3(j.r,d),j.cz,j.b3);else{l=I(d);m=l+c|0;n=I(j.r)-c|0;h=BQ(I(j.r)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.r,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.r,g+c|0);g=g+1|0;}k=Dv(FK(h),j.cz,j.b3);}f[b]=k;}a.N=a.N+I(d)|0;D8(a);}
function Wh(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<I(f.r)){if(L(f.r,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function KE(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.e5;if(!(e!==null&&e.data.length>=d)){a.e5=ADk(d);a.dU=BH(d);a.fp=1;}Vv(a);if(!a.fp)AUq=AUq+1|0;else{f=0;g=0.0;AUp=AUp+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.r)|0;a.c_.data[h]=f;Cu(b,i[j.b3]);g=g+Ei(b,j.r);a.e5.data[h]=g;a.dU.data[h]=g+0.5|0;h=h+1|0;}a.N=f;a.fp=0;a.he=0;}}
function Vv(a){var b;b=a.c_;if(!(b!==null&&b.data.length>=a.o.data.length)){a.c_=BH(a.o.data.length);a.he=1;}}
function D8(a){a.fp=1;a.hA=1;a.he=1;a.gC=null;}
function VO(a,b,c,d){var e,f,g,h,i,j,k;if(a.gC===null)a.gC=R($rt_arraycls($rt_intcls()),a.o.data.length);e=a.gC.data[d];if(e===null){e=c.data;f=a.o.data[d];Cu(b,e[f.b3]);f=f.r;e=BH(I(f)-1|0);c=Gi(f);g=!d?0.0:a.e5.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;LH(f,c,0,k);h[i]=g+Ei(b,f)+0.5|0;i=k;}a.gC.data[d]=e;}return e;}
function GH(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fp&&a.dU!==null))KE(a,c,d);if(b>=a.N)return a.dU.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].r)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dU.data[f];}return (VO(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function ES(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.dU.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GC(a,b){var c;if(b>=a.N)return b+1|0;c=HZ(a,b);return a.c_.data[c];}
function ED(a){var b,c,d,e;b=new M;FM(b,a.N);c=a.o.data;d=c.length;e=0;while(e<d){BY(b,c[e].r);e=e+1|0;}return N(b);}
function Ma(b){var c,d,e,f;c=R(Cx,1);d=c.data;e=new Cx;f=R(B5,1);f.data[0]=Q4(b);HJ(e,f);d[0]=e;return c;}
function Xm(){AT$=0;}
var M2=F();
function APc(a){}
function To(){C.call(this);this.rS=null;}
function AJQ(a){var b;b=a.rS;Bu(By(),b);}
function B5(){var a=this;C.call(a);a.r=null;a.cz=0;a.b3=0;}
function Q4(a){var b=new B5();AN3(b,a);return b;}
function Dv(a,b,c){var d=new B5();Up(d,a,b,c);return d;}
function AN3(a,b){Up(a,b,0,0);}
function Up(a,b,c,d){a.r=b;a.cz=c;a.b3=d;}
function G1(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Ij(){var a=this;C.call(a);a.cB=null;a.dM=0;}
var AUr=null;var AUs=null;function ARr(a){var b=new Ij();Tk(b,a);return b;}
function AQu(a,b){var c=new Ij();WV(c,a,b);return c;}
function Ux(b,c){var d;d=BD(b.bH,c.bH);if(!d)d=BD(c.bK,b.bK);return d;}
function Tk(a,b){WV(a,null,b);}
function WV(a,b,c){var d,e;a.dM=0;if(D5(c))return;Ns(c,AUr);if(b!==null)a.cB=L1(b);c=BR(c);while(B3(c)){d=BV(c);e=a.cB;if(e!==null){Qg(a,e,L1(d));continue;}a.cB=L1(d);}}
function Oz(a,b){var c;if(b.eC)return b;b=BR(b.bt);while(true){if(!B3(b))return null;c=Oz(a,BV(b));if(c!==null)break;}return c;}
function J2(a,b,c){var d,e,f;d=b.bZ;if(d.bH==c.bH&&d.bK==c.bK?1:0){e=BR(b.bt);while(B3(e)){f=J2(a,BV(e),c);if(f!==null)return f;}return b;}b=BR(b.bt);while(true){if(!B3(b))return null;d=BV(b);if(Pu(d,c.bH,c.bK)){e=J2(a,d,c);if(e!==null)break;}}return e;}
function Vw(a,b,c){BX(c,b.bZ);b=BR(b.bt);while(B3(b)){Vw(a,BV(b),c);}}
function OY(a,b,c){a.dM=0;IL(a,a.cB,b,c);}
function IL(a,b,c,d){var e;if(C4(b)<c)return;a:{if(CV(b)>c){J0(b,d);FN(b,d);b=BR(b.bt);while(B3(b)){IL(a,BV(b),c,d);}}else{if(!JJ(b,c)){if(a.dM)break a;if(C4(b)!=c)break a;}FN(b,d);if(CV(b)==c&&a.dM)J0(b,d);e=BR(b.bt);while(B3(e)){IL(a,BV(e),c,d);}if(!a.dM){b.eC=1;a.dM=1;}}}}
function S2(a,b,c){a.dM=0;LF(a,a.cB,b,c);}
function LF(a,b,c,d){var e,f,g,h;if(C4(b)<c)return;e=CV(b);f=c+d|0;if(e>f){e= -d|0;J0(b,e);FN(b,e);g=BR(b.bt);while(B3(g)){LF(a,BV(g),c,d);}b.bt=M4(a,b.bt);}else{g=b.bZ;if(c<=g.bH&&g.bK<=f?1:0){if(b!==a.cB){IT(b,(-1));JF(b,(-1));}else{IT(b,0);JF(b,0);}G_(b.bt);}else{e=JJ(b,c);f=JJ(b,f);if(e&&f)FN(b, -d|0);else if(e)JF(b,c);else{if(!f)return;IT(b,c);FN(b, -d|0);}h=BR(b.bt);while(B3(h)){LF(a,BV(h),c,d);}b.bt=M4(a,b.bt);if(!a.dM){b.eC=1;a.dM=1;}}}}
function M4(a,b){var c,d,e,f,g,h;c=Cl();d=null;Ns(b,AUs);b=BR(b);while(B3(b)){e=BV(b);if(CV(e)==C4(e))continue;if(!e.eC){if(d!==null){BX(c,d);d=null;}BX(c,e);}else if(d===null)d=e;else{f=W(CV(d),CV(e));g=Ba(C4(d),C4(e));h=L1(Nm(f,g,d.bZ.eT));h.ds=e.ds;h.eC=1;d=h;}}if(d!==null)BX(c,d);return c;}
function Qg(a,b,c){var d,e;a:{if(N0(b,c)){d=BR(b.bt);while(true){if(!B3(d)){BX(b.bt,c);c.ds=b;break a;}e=BV(d);if(N0(e,c))break;}Qg(a,e,c);return;}}}
function Rh(a,b,c,d){var e,f,g,h,i,j;if((C4(c)-CV(c)|0)<43)e=B8(d,CV(c),C4(c));else{e=B8(d,CV(c),CV(c)+20|0);f=B8(d,C4(c)-20|0,C4(c));g=new M;O(g);G(G(G(g,e),B(216)),f);e=N(g);}e=Ui(e,B(223),B(308));f=By();g=Ct(c);h=new M;O(h);i=S(h,b);BA(i,32);g=G(i,g);BA(g,9);G(g,e);Bu(f,N(h));c=BR(c.bt);j=b+1|0;while(B3(c)){Rh(a,j,BV(c),d);}}
function AAU(){AUr=new Ws;AUs=new Wu;}
function ACq(){var a=this;C.call(a);a.bH=0;a.bK=0;a.eT=0;}
function Nm(a,b,c){var d=new ACq();AGo(d,a,b,c);return d;}
function AGo(a,b,c,d){a.bH=b;a.bK=c;a.eT=d;}
function ANo(a,b){var c;if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){c=b;return a.bH==c.bH&&a.bK==c.bK&&a.eT==c.eT?1:0;}return 0;}
function AEX(a,b){var c;b=b;c=BD(a.bH,b.bH);if(!c)c=BD(b.bK,a.bK);return c;}
var Ws=F();
function AHz(a,b,c){return Ux(b,c);}
var Wu=F();
function AJa(a,b,c){b=b;c=c;return Ux(b.bZ,c.bZ);}
var EQ=F();
var AUt=null;var AUu=null;var AUv=null;var AUw=null;var AUx=null;var AUy=null;function AAp(){AUt=new UF;AUu=new UD;AUv=new UE;AUw=new UB;AUx=new UC;AUy=new WX;}
var GN=F(FU);
function AJ6(a,b){var c;c=new E8;U(c);J(c);}
function WF(){GN.call(this);this.rR=null;}
function AGK(a){return 1;}
function AO2(a,b){var c;if(!b)return a.rR;c=new Bw;U(c);J(c);}
function Xl(){var a=this;C.call(a);a.bZ=null;a.ds=null;a.bt=null;a.eC=0;}
function L1(a){var b=new Xl();ALM(b,a);return b;}
function ALM(a,b){a.eC=0;a.bZ=b;a.ds=null;a.bt=Cl();}
function CV(a){return a.bZ.bH;}
function C4(a){return a.bZ.bK;}
function IT(a,b){a.bZ.bH=b;}
function JF(a,b){a.bZ.bK=b;}
function J0(a,b){var c;c=a.bZ;c.bH=c.bH+b|0;}
function FN(a,b){var c;c=a.bZ;c.bK=c.bK+b|0;}
function JJ(a,b){return CV(a)<=b&&b<C4(a)?1:0;}
function Pu(a,b,c){var d;d=a.bZ;return d.bH<=b&&c<=d.bK?1:0;}
function N0(a,b){b=b.bZ;return Pu(a,b.bH,b.bK);}
function AHF(a){var b,c,d,e,f;b=a.bZ;c=b.bH;d=b.bK;e=b.eT;b=new M;O(b);BA(b,40);BA(S(G(S(G(S(b,c),B(44)),d),B(44)),e),41);b=N(b);c=a.eC;f=new M;O(f);FT(G(G(f,b),B(44)),c);return N(f);}
var Ob=F(0);
var F4=F(EG);
var JG=F(F4);
var UF=F(JG);
var KQ=F(Ev);
var UD=F(KQ);
var UE=F(GN);
var Ft=F(0);
var UB=F();
var OF=F(0);
var UC=F();
var WX=F();
function KN(){var a=this;C.call(a);a.iS=null;a.pe=null;a.rv=null;a.tP=null;a.l6=null;a.kY=null;a.pt=null;a.mD=null;a.Z=null;a.np=null;a.tk=null;}
function AUz(a,b,c,d,e,f,g,h,i,j,k){var l=new KN();MJ(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function MJ(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=j.data;a.iS=b;a.pe=c;a.rv=d;a.tP=e;a.l6=f;a.kY=g;a.pt=h;a.mD=i;a.np=j;a.tk=k;if(m.length>=15){a.Z=l;return;}b=new BC;U(b);J(b);}
function MT(){var a=this;C.call(a);a.hc=0;a.lz=0;a.hZ=0;a.fL=0;a.gm=null;}
function B3(a){return a.hc>=a.hZ?0:1;}
function BV(a){var b,c;Or(a);b=a.hc;a.fL=b;c=a.gm;a.hc=b+1|0;return c.qc(b);}
function PY(a){var b,c,d;if(a.fL<0){b=new DP;U(b);J(b);}Or(a);a.gm.sT(a.fL);a.lz=a.gm.cm;c=a.fL;d=a.hc;if(c<d)a.hc=d-1|0;a.hZ=a.hZ-1|0;a.fL=(-1);}
function Or(a){var b;if(a.lz>=a.gm.cm)return;b=new Lc;U(b);J(b);}
var Y1=F();
function U0(){C.call(this);this.iY=null;}
function AM5(a,b){var c,d,e,f,g;c=a.iY;d=c.jx;if(d!==null){e=b.k;f=e.b-d.b|0;g=e.a-d.a|0;e=c.hS;e.b=Ep(0,e.b+f|0,c.gd.b-c.hb.b|0);c=a.iY;d=c.hS;d.a=Ep(0,d.a+g|0,c.gd.a-c.hb.a|0);}a.iY.jx=b.k;return 1;}
var Zc=F();
function J3(){var a=this;C.call(a);a.hH=null;a.fv=null;}
function HM(){var a=this;J3.call(a);a.kJ=0;a.eQ=null;}
function T$(){C.call(this);this.qI=null;}
function AH8(a,b){Hm(a.qI,b);}
function U8(){C.call(this);this.ig=null;}
function APh(a){return a.ig;}
function Ce(){Cr.call(this);this.kG=null;}
var AUA=null;var AUB=null;var AUC=null;var AUD=null;var AUE=null;var AUF=null;var AUG=null;var AUH=null;var AUI=null;var AUJ=null;var AUK=null;var AUL=null;var AUM=null;var AUN=null;var AUO=null;var ATP=null;function Yk(){Yk=Br(Ce);AOS();}
function Dm(a,b,c){var d=new Ce();Sn(d,a,b,c);return d;}
function AOU(a,b,c,d){var e=new Ce();AAx(e,a,b,c,d);return e;}
function Sn(a,b,c,d){Yk();DE(a,b,c);a.kG=Sy(d,null);}
function AAx(a,b,c,d,e){Yk();DE(a,b,c);a.kG=Sy(d,e);}
function AOS(){var b;b=new Ce;Dp();Sn(b,B(309),0,ATG);AUA=b;AUB=Dm(B(310),1,Cw(204,120,50));AUC=Dm(B(311),2,Bm(B(312)));AUD=Dm(B(48),3,Bm(B(313)));AUE=Dm(B(314),4,Bm(B(315)));AUF=Dm(B(316),5,Cw(188,63,60));AUG=Dm(B(317),6,Bm(B(318)));AUH=Dm(B(49),7,Bm(B(319)));AUI=Dm(B(320),8,Bm(B(321)));AUJ=AOU(B(322),9,ATG,Cw(52,65,52));AUK=AOU(B(323),10,Bm(B(324)),Bm(B(325)));AUL=Dm(B(326),11,Bm(B(327)));AUM=Dm(B(328),12,Bm(B(329)));AUN=Dm(B(330),13,Bm(B(331)));b=Dm(B(332),14,Bm(B(333)));AUO=b;ATP=H(Ce,[AUA,AUB,AUC,AUD,AUE,
AUF,AUG,AUH,AUI,AUJ,AUK,AUL,AUM,AUN,b]);}
function IQ(){var a=this;C.call(a);a.qB=null;a.qC=null;}
function Sy(a,b){var c=new IQ();AED(c,a,b);return c;}
function AED(a,b,c){a.qB=b;a.qC=c;}
function ACW(){var a=this;C.call(a);a.bn=null;a.O=null;a.L=null;a.dV=null;}
function AAg(a){var b=new ACW();APf(b,a);return b;}
function APf(a,b){var c;a.L=AQh();a.bn=b;c=new Sz;KS(c);c.k6=new BW;c.gw=b;a.O=c;}
function H_(a,b,c,d){var e,f,g,h;e=a.O;f=Dg(e.ge,c)?0:1;g=Dg(e.gA,b)?0:1;h=d===e.ir?0:1;if(f){e.ge=c;e.dD=null;WI(e,0);}e.gl=!f&&!g&&!h?0:1;e.gA=b;e.ir=d;e.hj=0;Js(a);}
function Jm(a){var b;b=a.O;b.cV=CF(b.cV,null);a.L=CF(a.L,null);}
function K9(a,b){var c,d,e;c=a.L;d=c.C;e=c.s;b=CF(c,b);a.L=b;b.iw(d,e,a.bn.bG);}
function Fb(a,b,c){var d;d=a.L;d.iw(b,c,d.dE);Js(a);}
function Js(a){var b,c,d,e;b=a.O;c=a.L.s.b;b.s.b=c;d=b.cV;if(d!==null&&c!=Cb(d)&&!(c>=b.hj&&Cb(b.cV)>=b.hj))b.gl=1;b=a.O;b.dE=a.bn.bG;if(S0(b))c=0;else{b=a.O;P5(b);e=CJ(b.gw,b.ir);WI(b,DZ(b.dD)+(e*2|0)|0);c=b.s.a;}b=a.O.C;d=a.L.C;Bg(b,d.b,d.a-c|0);}
function I9(b,c){if(b<0)c=B(334);else if(b>0)c=B(335);return c;}
function Nu(a,b,c){var d;d=a.O.C.b;return (d-c|0)<=b&&b<d?1:0;}
function SP(a,b,c){var d,e;d=a.O;e=d.C.b+d.s.b|0;return e<=b&&b<(e+c|0)?1:0;}
function ON(a,b,c){var d;d=a.O.C.a;return (d-c|0)<=b&&b<d?1:0;}
function Pt(a,b,c){var d,e;d=a.L;e=d.C.a+d.s.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Mc(a,b,c){var d,e,f;d=a.O.C.a-c|0;e=a.L;f=(e.C.a+e.s.a|0)+c|0;return d<=b&&b<f?1:0;}
function QW(a,b,c){var d,e;d=a.O.C.a+c|0;e=a.L;return ABg(b,d,(e.C.a+e.s.a|0)-c|0);}
function UL(a,b,c){var d,e,f;d=a.O;e=d.C.b;f=e-c|0;e=(e+d.s.b|0)+c|0;return f<=b&&b<e?1:0;}
function TY(a,b,c){var d,e;d=a.O;e=d.C.b;return ABg(b,e+c|0,(e+d.s.b|0)-c|0);}
function ABg(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BD(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function HH(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bh;f=new Bh;g=b.b;h=b.a;b=a.L;i=b.C;j=i.b;k=i.a;b=b.s;l=b.b;m=b.a;b=new R1;b.rX=a;b.rY=e;b.rZ=f;b.r0=c;b.r2=g;b.r3=j;b.r4=l;b.r5=d;b.r6=h;b.r7=k;b.qY=m;return b;}
var KW=F(0);
function Qq(){C.call(this);this.nT=null;}
function AKu(a,b){return PZ(a.nT,b);}
function ABV(){var a=this;C.call(a);a.bm=0;a.br=0;}
function EL(a,b){var c=new ABV();AJg(c,a,b);return c;}
function AJg(a,b,c){a.bm=b;a.br=c;}
function Xn(a,b){var c;if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){c=b;return a.bm==c.bm&&a.br==c.br?1:0;}return 0;}
function ALY(a,b){var c;b=b;c=BD(a.bm,b.bm);if(!c)c=BD(a.br,b.br);return c;}
function ML(){C.call(this);this.ru=null;}
function AG8(a,b){var c;c=a.ru;Sq(c,Ed(c,b.k));J9(c.p,c.x,c.w);GB(c);}
var XW=F();
function B9(b,c){return CX(b*c);}
var W$=F();
function ABR(b,c,d,e,f,g){g.b=c.b;g.a=f;BB(b,d.b,d.a,g,e);BB(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;BB(b,d.b,d.a+f|0,g,e);BB(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AA_(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;BB(b,j,k,i,h);BB(b,j,k,i,h);BB(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;BB(b,l,j,i,h);BB(b,l,j,i,h);BB(b,l+g|0,j+g|0,i,h);}
function MC(){var a=this;C.call(a);a.bR=null;a.iv=null;a.ea=null;a.dr=0;a.d9=0;a.fZ=null;a.fn=null;a.fq=0;}
function R4(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dr;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Ba(i,e))a:{while(true){if(d<=e){j=d;break a;}Eq(c);j=d+(-1)|0;b=C0(d);d=Bb(j,a.d9)%a.ea.a|0;FW(a,c,b,a.fq,g);Hz(a.bR,c,0,d);if(!(j%a.dr|0))break;d=j;}}else{Eq(b);k=a.dr-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FW(a,b,C0(j),Bb(a.d9,k)+a.fq|0,g);k=k+(-1)|0;j=h;}CM(a.bR,b);j=Ba(i,e);}return j;}k=a.dr;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=W(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Eq(c);b=C0((d+f|0)+1|0);j=d+
1|0;d=Bb(d,a.d9)%a.ea.a|0;FW(a,c,b,a.fq,g);Hz(a.bR,c,0,d);if(!(j%a.dr|0))break;d=j;}}else{Eq(b);d=0;while(d<a.dr){h=h+1|0;FW(a,b,C0((h>e?h-f|0:h)+f|0),Bb(a.d9,d)+a.fq|0,g);d=d+1|0;}CM(a.bR,b);j=W(i,e);}return j;}
function Iv(a,b,c,d,e,f){EB(b,a.iv.b+d.b|0,c+d.a|0,a.fZ,a.fn,a.bR,e,f,0.0);}
function FW(a,b,c,d,e){Cf(b,c,a.ea.b-20.0*e,d);}
var FC=F(H0);
var V$=F(EA);
function PA(){C.call(this);this.me=null;}
function ALn(a,b){var c,d;c=a.me;d=c.dg+1|0;c.dg=d;c=new M;O(c);G(G(S(c,d),B(336)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Tg(){C.call(this);this.oE=null;}
function ANP(a){var b,c;b=a.oE;c=new M;O(c);G(G(G(c,B(337)),b),B(338));$rt_globals.console.info($rt_ustr(N(c)));}
var Xp=F();
function Hc(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function X2(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
var Lc=F(Bn);
var Ls=F(DL);
var AUP=0.0;var AUQ=null;function AAV(){AUP=$rt_globals.NaN;AUQ=E($rt_floatcls());}
var Fp=F();
var ASS=null;var ASU=null;var ASV=null;var AST=null;var ASR=null;function ZL(){ASS=EW([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);ASU=AE5([Z(1),Z(10),Z(100),Z(1000),Z(10000),Z(100000),Z(1000000),Z(10000000),Z(100000000),Z(1000000000),B_(1410065408, 2),B_(1215752192, 23),B_(3567587328, 232),B_(1316134912, 2328),B_(276447232, 23283),B_(2764472320, 232830),B_(1874919424, 2328306),B_(1569325056, 23283064),B_(2808348672, 232830643)]);ASV=AE5([Z(1),Z(10),Z(100),Z(10000),Z(100000000),B_(1874919424, 2328306)]);AST
=new Tf;ASR=new Uz;}
var Jw=F();
var AUR=null;var AUS=null;function AAq(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.mV=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.j6=0;c.jM=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(E2(CT(Z(e),Z(8388608)),Eg)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AAw(AUS,f);if(h<0)h=( -h|0)-2|0;i=AUS.data;j=9+(f-i[h]|0)|0;k=Z(e);l=AUR.data;m=Ey(DW(BM(k,Z(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=Ey(DW(BM(k,Z(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<( -g|
0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BD(q,r);e=e>0?Bb(m/q|0,q):e<0?Bb(m/r|0,r)+r|0:Bb((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.j6=e;c.jM=h-50|0;}
function YW(){var b,c,d,e,f,g,h,i;AUR=BH(100);AUS=BH(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AUR.data;g=d+50|0;f[g]=$rt_udiv(e,20);AUS.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Ey(Co(Z(h),Ge(BM(Z(b&((1<<i)-1|0)),Z(10)),i)));f=AUR.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AUS.data[i]=c;d=d+1|0;}}
function Uz(){var a=this;C.call(a);a.j6=0;a.jM=0;a.mV=0;}
function Ll(){var a=this;C.call(a);a.uD=null;a.l0=0.0;a.uZ=0.0;a.ev=null;a.gu=null;a.le=null;a.eE=0;}
function ACa(a,b){var c;if(b!==null){a.gu=b;return a;}c=new BC;Bl(c,B(339));J(c);}
function AAD(a,b){var c;if(b!==null){a.le=b;return a;}c=new BC;Bl(c,B(339));J(c);}
function Pf(a,b,c,d){var e,f,g,$$je;e=a.eE;if(!(e==2&&!d)&&e!=3){a.eE=d?2:1;while(true){try{f=ACc(a,b,c);}catch($$e){$$je=D9($$e);if($$je instanceof Bn){g=$$je;J(AFT(g));}else{throw $$e;}}if(GO(f))return f;if(HO(f)){if(d&&DD(b)){g=a.gu;GR();if(g===ATr)return DQ(B4(b));if(B4(c)<=I(a.ev))return ATu;Ez(b,b.Q+B4(b)|0);if(a.gu===ATs)Jz(c,a.ev);}return f;}if(PN(f)){g=a.gu;GR();if(g===ATr)return f;if(g===ATs){if(B4(c)<I(a.ev))return ATu;Jz(c,a.ev);}Ez(b,b.Q+JD(f)|0);}else if(Li(f)){g=a.le;GR();if(g===ATr)break;if(g
===ATs){if(B4(c)<I(a.ev))return ATu;Jz(c,a.ev);}Ez(b,b.Q+JD(f)|0);}}return f;}b=new DP;U(b);J(b);}
function X9(a,b){var c,d,e,f;c=a.eE;if(c&&c!=3){b=new DP;U(b);J(b);}if(!B4(b))return ACD(0);if(a.eE)a.eE=0;d=ACD(Ba(8,B4(b)*a.l0|0));while(true){e=Pf(a,b,d,0);if(HO(e))break;if(GO(e))d=RI(a,d);if(!J$(e))continue;Uv(e);}b=Pf(a,b,d,1);if(J$(b))Uv(b);while(true){f=a.eE;if(f!=3&&f!=2)break;a.eE=3;if(HO(ATv)){d.da=d.Q;d.Q=0;d.gY=(-1);return d;}d=RI(a,d);}b=new DP;U(b);J(b);}
function RI(a,b){var c,d,e;c=b.gP;d=XF(c,Ba(8,c.data.length*2|0));e=ZX(d,0,d.data.length);Ez(e,b.Q);return e;}
function MW(){C.call(this);this.to=null;}
function ALE(a,b){DH(a.to,b);}
function UR(){C.call(this);this.nD=null;}
function APv(a,b){var c,d;c=a.nD;d=c.dg+1|0;c.dg=d;c=b.g4;b=new M;O(b);G(G(S(b,d),B(340)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Zt=F(CP);
function Qw(){C.call(this);this.md=null;}
function AH1(a){M5(a.md);}
function Ur(){C.call(this);this.oh=null;}
function ALH(a){WK(a.oh);}
function Tf(){var a=this;C.call(a);a.kE=Eg;a.jw=0;a.mB=0;}
var DP=F(Bn);
var AAQ=F(EA);
function AFT(a){var b=new AAQ();AJ7(b,a);return b;}
function AJ7(a,b){a.iE=1;a.i5=1;a.kq=b;}
var PI=F();
function AOw(a,b){AAW(b);}
function T8(){var a=this;C.call(a);a.uk=null;a.uj=null;a.ul=null;}
function M$(){var a=this;C.call(a);a.rJ=null;a.rL=null;a.rK=0;}
function ADU(a,b){var c,d,e;c=a.rJ;d=a.rL;e=a.rK;d.m(Wv(c,(b.k.b+e|0)-c.dC.b|0));}
function M8(){var a=this;C.call(a);a.oL=null;a.oK=null;a.oM=0;}
function AFU(a,b){var c,d,e;c=a.oL;d=a.oK;e=a.oM;d.m(NS(c,(b.k.a+e|0)-c.dC.a|0));}
function SO(){C.call(this);this.oy=null;}
function AOH(a,b){var c,d,e;c=a.oy;if(c.e.f.ck==c.ku){b=b.data;d=Eo(b[0]);e=Fy(b[1]);Z2(c.e.f,d,e);OJ(c.e.f);}}
function JR(){var a=this;Ll.call(a);a.m2=null;a.qS=null;}
function ACc(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.m2;e=0;f=0;g=a.qS;a:{b:{while(true){if((e+32|0)>f&&DD(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B4(b)+k|0;h=j.length;f=W(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bw;c=new M;O(c);S(G(S(G(c,B(341)),l),B(95)),h);Bl(b,N(c));J(b);}if(B4(b)<m){b=new La;U(b);J(b);}if(m<0){b=new Bw;c=new M;O(c);G(S(G(c,B(96)),m),B(97));Bl(b,N(c));J(b);}n=b.Q;h=n+b.kj|0;e=0;while(e<m){o=k+1|0;i=b.kX.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.Q=n+m|0;e=0;}if(!DD(c)){p=!DD(b)&&e>=f?ATv:ATu;break a;}i=g.data;n=B4(c);o=i.length;n=W(n,o);q=new Ug;q.pL=b;q.rN=c;p=ACo(a,d,e,f,g,0,n,q);e=q.s$;if(p===null&&0==q.jy)p=ATv;k=q.jy;h=0;if(c.lI){b=new Iu;U(b);J(b);}if(B4(c)<k)break;if(h>o){b=new Bw;c=new M;O(c);BA(S(G(S(G(c,B(98)),h),B(92)),o),41);Bl(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bw;c=new M;O(c);S(G(S(G(c,B(100)),l),B(95)),o);Bl(b,N(c));J(b);}if(k<0){b=new Bw;c=new M;O(c);G(S(G(c,B(96)),k),B(97));Bl(b,N(c));J(b);}o=c.Q;m=0;while(m<k){l=o+
1|0;n=h+1|0;Rq(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Q=c.Q+k|0;if(p!==null)break a;}b=new Hw;U(b);J(b);}b=new Bw;c=new M;O(c);BA(S(G(S(G(c,B(98)),k),B(92)),h),41);Bl(b,N(c));J(b);}Ez(b,b.Q-(f-e|0)|0);return p;}
var SE=F(JR);
function ACo(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(JU(h,2))break a;i=ATv;break a;}c=k+1|0;n=j[k];if(!Fv(a,n)){c=c+(-2)|0;i=DQ(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(JU(h,3))break a;i=ATv;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Fv(a,n))break b;if(!Fv(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Lr(p)){c=k+(-3)|0;i=DQ(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DQ(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(JU(h,4))break a;i=ATv;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B4(h.rN)<2?0:1)break a;i=ATu;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Fv(a,n))break c;if(!Fv(a,o))break c;if(!Fv(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=HF(r);m=c+1|0;j[c]=Ic(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DQ(1);break a;}c=k+(-3)|0;i
=DQ(1);}h.s$=c;h.jy=f;return i;}
function Fv(a,b){return (b&192)!=128?0:1;}
function Pc(){C.call(this);this.qv=null;}
function AE0(a,b){var c,d;c=a.qv;d=c.dg+1|0;c.dg=d;c=new M;O(c);G(G(S(c,d),B(342)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Uq(){C.call(this);this.wA=null;}
function AKN(a){Bu(By(),B(343));}
function PQ(){C.call(this);this.mt=null;}
function ADg(a,b){a.mt.m(Fs(b));}
function TM(){C.call(this);this.qU=null;}
function AO5(a,b){a.qU.q();}
function SA(){var a=this;C.call(a);a.vw=null;a.vx=null;a.vu=0;a.vv=0;}
var Z0=F();
function Rm(){C.call(this);this.s4=null;}
function AEa(a,b){var c,d,e,f;c=a.s4;d=Ct(b);e=new M;O(e);G(G(e,B(344)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new RH;d.uS=c;d.oa=b;e=new RG;e.tL=c;f=new TH;f.uI=e;e=new UV;e.mW=d;c=b.eD;if(c!==null)c.arrayBuffer().then(Bk(e,"f"),Bk(f,"f"));else{b=b.gi.getFile();c=new UY;c.rG=e;c.rH=f;b.then(Bk(c,"f"),Bk(f,"f"));}}
function Rl(){C.call(this);this.vk=null;}
function AEQ(a,b){var c;b=Ct(b);c=new M;O(c);G(G(c,B(345)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var QH=F();
function AHl(a,b){b=b;b.bR=CF(b.bR,null);}
function R6(){C.call(this);this.lT=null;}
function AJp(a){DB(a.lT);}
var Jq=F(DL);
var AUT=0.0;var AUU=null;function Ye(){AUT=$rt_globals.NaN;AUU=E($rt_doublecls());}
var KT=F();
var AUV=null;var AUW=null;function ZI(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mB=E2(CT(d,B_(0, 2147483648)),Eg)?0:1;e=CT(d,B_(4294967295, 1048575));f=Ey(Ge(d,52))&2047;if(E2(e,Eg)&&!f){c.kE=Eg;c.jw=0;return;}g=0;if(f)e=AQE(e,B_(0, 1048576));else{e=Fc(e,1);while(E2(CT(e,B_(0, 1048576)),Eg)){e=Fc(e,1);f=f+(-1)|0;g=g+1|0;}}h=AAw(AUW,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AUW.data[h]|0)|0;j=Qr(e,AUV.data[h],i);if(YG(j,B_(2808348672, 232830643))){h=h+1|0;i=12+(f-AUW.data[h]|0)|0;j=Qr(e,AUV.data[h],
i);}k=DW(AUV.data[h],(63-i|0)-g|0);l=Ge(Co(k,Z(1)),1);m=Ge(k,1);if(E2(e,B_(0, 1048576)))m=Ge(m,2);n=Z(10);while(OZ(n,m)){n=BM(n,Z(10));}if(YG(L$(j,n),Dh(m,Z(2))))n=Dh(n,Z(10));o=Z(1);while(OZ(o,l)){o=BM(o,Z(10));}if(AF5(JS(o,L$(j,o)),Dh(l,Z(2))))o=Dh(o,Z(10));f=AQ0(n,o);e=f>0?BM(Dh(j,n),n):f<0?Co(BM(Dh(j,o),o),o):BM(Dh(Co(j,Dh(o,Z(2))),o),o);if(YG(e,B_(2808348672, 232830643))){h=h+1|0;e=Dh(e,Z(10));}else if(AGm(e,B_(1569325056, 23283064))){h=h+(-1)|0;e=BM(e,Z(10));}c.kE=e;c.jw=h-330|0;}
function Qr(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CT(b,Z(65535));f=CT(DW(b,16),Z(65535));g=CT(DW(b,32),Z(65535));h=CT(DW(b,48),Z(65535));i=CT(c,Z(65535));j=CT(DW(c,16),Z(65535));k=CT(DW(c,32),Z(65535));l=CT(DW(c,48),Z(65535));m=Co(Co(BM(k,e),BM(j,f)),BM(i,g));n=Co(Co(Co(BM(l,e),BM(k,f)),BM(j,g)),BM(i,h));o=Co(Co(Fc(BM(l,h),32+d|0),Fc(Co(BM(l,g),BM(k,h)),16+d|0)),Fc(Co(Co(BM(l,f),BM(k,g)),BM(j,h)),d));return Co(d>16?Co(o,Fc(n,d-16|0)):Co(o,DW(n,16-d|0)),DW(m,32-d|0));}
function Zl(){var b,c,d,e,f,g,h,i,j,k;AUV=ART(660);AUW=BH(660);b=B_(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AUV.data;g=d+330|0;f[g]=Fw(e,Z(80));AUW.data[g]=c;e=Fw(e,Z(10));h=MN(e,Z(10));while(OZ(e,b)&&E2(CT(e,B_(0, 2147483648)),Eg)){e=Fc(e,1);c=c+1|0;h=Fc(h,1);}e=Co(e,Dh(h,Z(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AF5(e,B_(3435973836, 214748364))){e=Ge(e,1);j=j+1|0;d=d+(-1)|0;}k=BM(e,Z(10));b=j<=0?k:Co(k,Ge(BM(CT(b,Z((1<<j)-1|0)),Z(10)),j));f=AUV.data;g=(330-i|0)-1|0;f[g]=Fw(b,Z(80));AUW.data[g]
=d;i=i+1|0;}}
function L8(){C.call(this);this.q6=null;}
function APW(a,b){var c,d;c=a.q6;d=new Bn;Bl(d,$rt_str(b.message));c.m(d);}
function Oo(){var a=this;C.call(a);a.l1=null;a.l2=null;}
function ADP(a,b,c,d){var e,f,g,h;b=a.l1;e=a.l2;Su(b,e);if(LR(d)){f=d.c9;g=e.cA;c=e.eo;h=new Bh;f=f.M;YE(h,(f.b-(g*3|0)|0)-c|0,(f.a-g|0)-c|0);SG(b,h,d.jU,e);}}
function S1(){var a=this;C.call(a);a.pE=0;a.lV=0;}
function FB(a,b){return O2(a.pE,b,a.lV);}
function EC(){var a=this;C.call(a);a.C=null;a.s=null;a.dE=0.0;}
function AQh(){var a=new EC();KS(a);return a;}
function KS(a){a.C=new Bh;a.s=new Bh;}
function AK1(a){}
function AOy(a){return B0(0,0);}
function Pa(a,b,c,d){var e;if(!Ky(a.C,b)){a.jK(b);CG(a.C,b);}if(!Ky(a.s,c)){a.jC(c);CG(a.s,c);}e=a.dE;if(e!==d){a.dE=d;a.oq(e,d);}}
function Dy(a,b){return Hc(b,a.C,a.s);}
function X$(a,b){var c,d,e,f;c=a.C;d=c.b;e=c.a;f=a.s;EK();BB(b,d,e,f,AT0);}
function US(a,b){var c;c=a.C;Uc(b,c.b,c.a,a.s);}
function ANL(a,b){return 0;}
function AGB(a,b){}
function ANs(a,b){}
function APC(a,b,c){}
function AN1(a,b,c,d){return 0;}
function ANj(a,b,c){return null;}
function AOm(a,b,c){return 0;}
function AKo(a,b){return 0;}
function AGt(a,b,c,d){return 0;}
function Gp(){var a=this;EC.call(a);a.ct=null;a.b_=null;}
function AUX(){var a=new Gp();SR(a);return a;}
function SR(a){KS(a);a.ct=new Bh;a.b_=new Bh;}
function ACE(a){var b;b=a.b_;b.b=VL(a,b.b);b=a.b_;b.a=P4(a,b.a);}
function Ud(a,b){a.b_.b=VL(a,b);}
function ZH(a,b){a.b_.a=P4(a,b);}
function P4(a,b){return Ba(0,W(b,a.ct.a-a.s.a|0));}
function VL(a,b){return Ba(0,W(b,a.ct.b-a.s.b|0));}
function P2(){var a=this;Gp.call(a);a.cM=null;a.cS=null;a.fm=null;a.eU=null;a.o_=null;a.cw=null;a.b0=null;a.dz=null;a.eH=null;a.c8=0;a.eS=0;a.lW=null;a.dt=0;a.dw=0;a.fz=0;a.gE=0;a.hg=0;a.dI=0;a.gk=null;a.ia=null;a.jv=null;}
function ARX(a,b){var c=new P2();Y5(c,a,b);return c;}
function Y5(a,b,c){SR(a);a.cS=AJk();a.fm=new Bh;a.eU=new Bh;a.b0=AUY;a.dz=R(HA,0);a.dt=0;a.dw=0;a.fz=0;a.gE=0;a.hg=0;a.gk=Wr(0);a.cM=b;a.ia=c;a.lW=c;a.c8=B9(2.0,b.bG);}
function Vm(a){return a.b0.data.length?0:1;}
function U2(a,b){N6(a);a.b0=b;}
function N6(a){Bg(a.fm,0,0);}
function NZ(a,b){a.o_=b;b=Fr(a.cM,b);a.cw=b;a.gk=Wr(DZ(b));a.eS=CX(a.cw.iU);N6(a);}
function APQ(a){a.eH=CF(a.eH,null);Bg(a.fm,0,0);a.b0=AUY;a.dz=null;a.dt=0;a.dw=0;a.fz=0;R3(a.cS);a.ia=null;}
function AFF(a,b,c){Sr(a);a.cw=Fr(a.cM,a.o_);a.c8=B9(2.0,a.cM.bG);a.gk=Wr(DZ(a.cw));a.eS=CX(a.cw.iU);}
function AIN(a,b){ZH(a,b);}
function AIe(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc;c=Ib(a.cM);if(Vm(a))return;BI(a.cw);Cu(c,a.cw);d=DZ(a.cw);e=ACY(c,a.eS);f=W(H$(a.cS.v.a,d),a.b0.data.length)+30|0;g=0;a.gE=W((a.b_.a+a.c8|0)/(GS(a)+a.c8|0)|0,a.b0.data.length-1|0);a.hg=W((((a.b_.a+a.cS.v.a|0)-1|0)+a.c8|0)/(GS(a)+a.c8|0)|0,a.b0.data.length-1|0);if(a.dz.data.length<=0)g=1;else{h=a.gE;a:{b:{while(h<=a.hg){i=MA(a,h);if(i===null)break b;if(i.f4!==a.b0.data[h])break b;h=h+1|0;}break a;}g=1;}}j=a.jv.m$;if(g){a.dz=ALN(f,
a.dz,a.gE,a.hg,a.b0,a.gk,j,e);CG(a.fm,Ww(a.gk));k=a.fm;if(!Bb(k.b,k.a))return;AAH(a,a.cM.cX);}if(!a.dz.data.length)return;US(a,b);l=j.pj;k=a.C;BB(b,k.b,k.a,a.s,l);m=a.c8;k=a.cS.M;n=k.b;o=k.a;p=a.gE;q=n+m|0;while(p<=a.hg){r=MA(a,p);s=Bb(p,GS(a));h=p+1|0;t=s+Bb(h,a.c8)|0;s=q+a.dt|0;u=s+a.dw|0;v=a.dI!=p?0:1;k=!v?l:j.ng;w=!v?j.nu:j.h8;x=!v?j.se:j.h8;y=!v?j.s7:j.h8;z=(o+t|0)-a.b_.a|0;EB(b,q,z,r.gp,r.iq,a.eH,w,k,0.0);EB(b,s,z,r.gV,r.hz,a.eH,x,k,0.0);EB(b,u,z,r.g1,r.h4,a.eH,y,k,0.0);p=r.gp.b;ba=q+p|0;Bg(a.eU,Ba(0,
a.dt-p|0),r.gp.a);BB(b,ba,z,a.eU,k);s=q+a.dt|0;p=r.gV.b;bb=s+p|0;Bg(a.eU,Ba(0,a.dw-p|0),r.gV.a);BB(b,bb,z,a.eU,k);s=r.g1.b;bc=u+s|0;Bg(a.eU,Ba(0,(((a.cS.v.b-s|0)-a.dw|0)-a.dt|0)-(a.c8*2|0)|0),r.g1.a);BB(b,bc,z,a.eU,k);p=h;}K3(b);}
function AAH(a,b){var c,d,e,f,g,h,i,j,k;c=a.fm;c=CL(b,c.b+150|0,c.a);Cu(c,a.cw);d=a.cw;e=d.dd;f=e-(e+d.dX)/16.0;g=a.dz.data;h=g.length;i=0;while(i<h){j=g[i];if(j!==null){d=j.f4.i6;k=j.iq;Cf(c,d,k.bg+a.eS,f+k.bv);d=j.f4.hU;k=j.hz;Cf(c,d,k.bg+a.eS,f+k.bv);d=j.f4.h7;k=j.h4;Cf(c,d,k.bg+a.eS,f+k.bv);}i=i+1|0;}b=CF(a.eH,CS(b));a.eH=b;CM(b,c);FE(c);}
function MA(a,b){var c;c=a.dz.data;return c[b%c.length|0];}
function AJn(a,b){CG(a.cS.v,b);}
function AGb(a,b){CG(a.cS.M,b);}
function Yp(a){var b,c;b=GS(a);c=a.b0.data.length;b=Bb(b,c)+Bb(a.c8,c+1|0)|0;Bg(a.ct,a.s.b,b);}
function Sr(a){var b,c,d,e,f,g,h,i,j;b=Ib(a.cM);if(Vm(a))return;BI(a.cw);Cu(b,a.cw);c=ACY(b,a.eS);d=a.b0.data;e=d.length;f=0;while(f<e){g=d[f];h=Jg(c,g.i6);i=Jg(c,g.hU);j=Jg(c,g.h7);a.dt=Ba(a.dt,h);a.dw=Ba(a.dw,i);a.fz=Ba(a.fz,j);f=f+1|0;}}
function AOG(a,b){var c;c=Nb(a,b.k);if(c>=0)a.dI=c;return Ek(a.cS,a.C)&&GX(a.cM.cq)?1:0;}
function ADK(a,b,c){if(!Ek(a.cS,b.k)&&!Ln(a.cS)){b=a.lW;if(b!==null)b.q();}return null;}
function AD0(a,b,c,d){var e;if(d==1){e=Nb(a,b.k);if(e>=0)MZ(a,a.b0.data[e]);}return 1;}
function MZ(a,b){a.ia.q();b.lZ.q();}
function Nb(a,b){var c,d,e;if(!a.dz.data.length)return (-1);c=GS(a);d=(b.a-a.C.a|0)+a.b_.a|0;e=a.c8;e=(d+e|0)/(c+e|0)|0;if(e<a.b0.data.length)return e;return (-1);}
function GS(a){return DZ(a.cw);}
function AIV(a,b){var c,d;a:{switch(b.bj){case 13:MZ(a,a.b0.data[a.dI]);break a;case 27:break;case 37:a.dI=0;break a;case 38:c=a.dI;d=a.b0.data.length;a.dI=((c+d|0)-1|0)%d|0;break a;case 39:a.dI=a.b0.data.length-1|0;break a;case 40:a.dI=(a.dI+1|0)%a.b0.data.length|0;break a;default:break a;}a.ia.q();}return 0;}
var UZ=F();
function APD(a){}
function Y_(){var a=this;EC.call(a);a.kU=null;a.qa=null;a.sw=null;a.bB=null;a.dp=null;a.du=null;a.q7=0.0;}
function Ya(a,b){var c=new Y_();AOv(c,a,b);return c;}
function AOv(a,b,c){var d;KS(a);d=new S7;d.m4=a;a.qa=d;d=new S8;d.p0=a;a.sw=d;a.q7=10.0;a.bB=b;a.kU=c.cq;}
function AD4(a){a.bB=CF(a.bB,null);}
function AFK(a,b,c,d){var e;Pa(a,b,c,d);Pa(a.bB,b,c,d);if(d!==0.0){a.bB.s8();ACE(a.bB);e=a.s.b;if(e>0&&a.bB.ct.b>e?1:0)JP(a);else a.du=null;e=a.s.a;if(e>0&&a.bB.ct.a>e?1:0)Kq(a);else a.dp=null;}}
function JP(a){var b,c,d,e,f,g;b=a.du;if(b===null){b=G7();a.du=b;}c=a.bB;d=c.b_.b;e=a.C;f=e.b;g=a.s;LL(b,d,f,g.b,c.ct.b,e.a+g.a|0,I8(a));}
function Kq(a){var b,c,d,e,f,g;b=a.dp;if(b===null){b=G7();a.dp=b;}c=a.bB;d=c.b_.a;e=a.C;f=e.a;g=a.s;H3(b,d,f,g.a,c.ct.a,e.b+g.b|0,I8(a));}
function I8(a){return B9(a.q7,a.dE);}
function AM2(a,b){var c;a.bB.ey(b);if(!(a.dp===null&&a.du===null)){CK(b,1);c=a.dp;if(c!==null)FL(c,b);c=a.du;if(c!==null)FL(c,b);c=a.dp;if(c!==null)F5(c,b);c=a.du;if(c!==null)F5(c,b);CK(b,0);}}
function Mj(a,b){var c,d;a:{b:{c=a.dp;if(!(c!==null&&Ii(c,b))){c=a.du;if(c===null)break b;if(!Ii(c,b))break b;}d=1;break a;}d=0;}return d;}
function AHM(a,b,c,d){return !Mj(a,b.k)&&!a.bB.cn(b,c,d)?0:1;}
function AN4(a,b,c){var d,e;d=a.dp;if(d!==null){e=E6(d,b.k,a.qa,1);if(e!==null)return e;}d=a.du;if(d!==null){e=E6(d,b.k,a.sw,0);if(e!==null)return e;}return a.bB.is(b,c);}
function AHo(a,b,c){return Mj(a,b.k)?1:0;}
function AIE(a,b){var c,d,e;c=a.dp;d=c!==null&&Ff(c,b.k,a.kU)?1:0;c=a.du;e=c!==null&&Ff(c,b.k,a.kU)?1:0;return !d&&!e&&!a.bB.bW(b)?0:1;}
function ANd(a,b,c,d){var e,f;if(!Dy(a,b.k))return 0;e=B9(d*0.25,a.dE);f=B9(c*0.25,a.dE);if(b.by){f=f+e|0;e=0;}if(a.dp!==null&&e){b=a.bB;b.j3(b.b_.a+e|0);Kq(a);}if(a.du!==null&&f){b=a.bB;Ud(b,b.b_.b+f|0);JP(a);}return 1;}
function AKK(a){var b,c;b=I8(a);c=a.bB.it();c.b=Ba(c.b,b);c.a=Ba(c.a,b);return c;}
function U6(){var a=this;Gp.call(a);a.hv=null;a.kO=null;a.qM=null;a.oB=0.0;}
function ALo(a){var b,c;b=a.ct;c=a.s;Bg(b,c.b*3|0,c.a*5|0);}
function AJr(a){var b;b=B9(20.0,a.dE);return B0(b,b);}
function AIg(a,b){var c,d,e,f;c=a.qM;d=c.rD;e=c.rE;c=c.rC;b=Ct(b);f=new M;O(f);G(G(G(f,c),B(36)),b);H_(e,N(f),d.rA,3.0);}
function AF6(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;X$(a,b);US(a,b);c=B9(30.0,a.dE);d=a.b_;e=d.b;f=Bb(e/c|0,c);g=d.a;h=Bb(g/c|0,c);d=a.s;i=Bb(((e+d.b|0)-1|0)/c|0,c);e=Bb(((g+d.a|0)-1|0)/c|0,c);d=a.kO;d.a=c;d.b=c;a.hv.bw=1.0;while(h<=e){g=a.C.a-a.b_.a|0;j=f;while(j<=i){k=a.C.b-a.b_.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AB4(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;VX(n,0.75,a.oB,a.hv);BB(b,k+j|0,g+h|0,a.kO,a.hv);j=j+c|0;}h=h+c|0;}K3(b);}
function AIT(a,b){}
function OO(){var a=this;C.call(a);a.rD=null;a.rE=null;a.rC=null;}
function WC(){C.call(this);this.kL=null;}
var AUY=null;function ALw(){var a=new WC();YD(a);return a;}
function YD(a){a.kL=Cl();}
function Ms(a,b,c,d,e){var f;f=new IX;f.lZ=e;f.hU=c;f.h7=d;f.i6=b;BX(a.kL,f);}
function P1(a){return Hn(a.kL,AUY);}
function UM(b){var c,d;if(b===null)b=B(31);else{c=b.eL;if(c===null)b=B(31);else{d=O0(c,B(346),I(c));b=d==(-1)?b.eL:Db(b.eL,d+1|0);}}return b;}
function Zd(){AUY=R(IX,0);}
function HA(){var a=this;C.call(a);a.iq=null;a.hz=null;a.h4=null;a.gp=null;a.gV=null;a.g1=null;a.f4=null;}
function ALN(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=R(HA,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=WH(f.data[d],h,g,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.f4!==n){ACx(g,q);m[o]=WH(n,h,g,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=WH(n,h,g,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){ACx(g,r);j[d]=null;}d=d+1|0;}return k;}
function WH(b,c,d,e){var f;f=new HA;f.gp=new Bh;f.gV=new Bh;f.g1=new Bh;f.f4=b;c=GZ(d,b.i6,e);f.iq=c;Bg(f.gp,c.bc|0,c.bw|0);c=GZ(d,b.hU,e);f.hz=c;Bg(f.gV,c.bc|0,c.bw|0);b=GZ(d,b.h7,e);f.h4=b;Bg(f.g1,b.bc|0,b.bw|0);return f;}
function ACx(b,c){HQ(b,c.iq);HQ(b,c.hz);HQ(b,c.h4);}
function Sz(){var a=this;EC.call(a);a.gw=null;a.gA=null;a.ge=null;a.dD=null;a.ir=0.0;a.gl=0;a.hj=0;a.cV=null;a.k6=null;}
function K$(a){var b;b=a.s;return b.b&&b.a?0:1;}
function S0(a){var b,c;a:{if(a.ge!==null){b=a.gA;if(b!==null&&!Fe(b)){c=0;break a;}}c=1;}return c;}
function WI(a,b){a.s.a=b;}
function OD(a,b,c,d,e){var f,g;f=a.gw.jL;Bg(f,d,a.s.a);g=a.C;BB(b,g.b+c|0,g.a,f,e);}
function P5(a){if(a.dD===null)a.dD=Fr(a.gw,a.ge);}
function S7(){C.call(this);this.m4=null;}
function AJX(a,b){var c,d;c=a.m4;d=FB(b,c.bB.ct.a-c.s.a|0);c.bB.j3(d);Kq(c);}
function S8(){C.call(this);this.p0=null;}
function AH6(a,b){var c,d;c=a.p0;d=FB(b,c.bB.ct.b-c.s.b|0);Ud(c.bB,d);JP(c);}
var Q6=F(DL);
var AUZ=null;function Fw(b,c){return Long_udiv(b, c);}
function MN(b,c){return Long_urem(b, c);}
function KD(b,c){return Long_ucompare(b, c);}
function Zj(){AUZ=E($rt_longcls());}
function W4(){var a=this;C.call(a);a.qP=null;a.qO=null;a.qN=null;}
function AGh(a){var b,c,d,e,f;b=a.qP;c=a.qO;d=a.qN;e=By();f=new M;O(f);b=G(f,b);BA(b,9);b=G(b,c);BA(b,9);G(b,d);Bu(e,N(f));}
function IX(){var a=this;C.call(a);a.lZ=null;a.hU=null;a.h7=null;a.i6=null;}
var E8=F(Bn);
function M0(){var a=this;C.call(a);a.ma=null;a.oC=null;a.rP=0;a.s2=0;}
function K5(a,b){return B4(a.oC)<b?0:1;}
var ABY=F();
function TF(b,c,d,e){var f,g;f=b.next();g=new Wm;g.ml=b;g.mk=c;g.mo=d;g.mm=e;f.then(Bk(g,"f"),Bk(d,"f"));}
function XI(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ACp(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DX()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Wi;f.pb=b;f.pc=d;d.addEventListener("change",Bk(f,"handleEvent"));d.click();}
function XP(b,c){var d;if(c.isFile?1:0)b.m(Xg(c.file()));else{c=c.createReader();d=new V9;d.r_=b;c.readEntries(Bk(d,"f"));}}
function RW(){var a=this;C.call(a);a.bq=null;a.gU=null;a.T=null;}
function H9(a){return a.gU.eY.id;}
function Nr(a){var b;b=new Ot;b.oA=a;return b;}
function AC3(a){var b,c,d,e,f,g;b=R(C5,4);c=b.data;d=a.T.bh.Z.bd;e=a.bq;BI(e);f=new UT;f.rx=e;c[0]=Eb(B(347),d,f);e=a.T.bh.Z.bd;f=a.bq;BI(f);g=new UX;g.mU=f;c[1]=Eb(B(348),e,g);e=a.T.bh.Z.bd;f=a.bq;BI(f);g=new UW;g.qu=f;c[2]=Eb(B(349),e,g);e=a.T.bh.Z.bd;f=a.bq;BI(f);g=new UU;g.tG=f;c[3]=Eb(B(350),e,g);return FH(b);}
function IG(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{DB(a.T.b2);d=a.bq.e;e=Df(d);f=GG(d);g=a.bq.d1;if(c===null)h=null;else{AQp();switch(AU0.data[c.cJ]){case 1:h=Kg(g,e,f);break a;case 2:h=UK(g,e,f);break a;default:}b=new Ej;U(b);J(b);}}c=a.bq;e=Ed(c,b);f=F3(c.e.f,e.bm,e.br);g=(F6(c.e.f,f)).r;if(h!==null){f=c.e;i=e.bm;j=e.br;e=new UA;e.u7=c;e.u6=b;e.u5=g;h.q1(f,i,j,e,c.gy);}else{e=En(c.e.f.dS,f);if(e!==null)Hg(c,e);else{e=En(c.e.f.d_,f);if(e!==null&&!D5(e))Ul(c.h1,b,e,c,g);else{h=c.h1;DB(h.b2);d=h.b2;k=R(C5,1);l=k.data;m
=new C5;BI(d);g=new UN;g.m_=d;J1(m,g,B(351),h.bh.Z.tm);l[0]=m;F2(d,b,FH(k),MQ(h,c));}}}}
var Wo=F();
function AM8(a,b){XI(b);}
function Wn(){var a=this;C.call(a);a.oG=null;a.oF=null;}
function AF0(a,b){var c,d,e,f,g,h,i;c=a.oG;d=a.oF;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new Pb;i.m8=c;i.m7=g;h.then(Bk(i,"f"),Bk(d,"f"));e=e+1|0;}}
var VQ=F();
function AHs(a,b){XI(b);}
function VP(){var a=this;C.call(a);a.n0=null;a.n1=null;}
function AIk(a,b){var c,d,e,f,g;c=a.n0;d=a.n1;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bv,1);g.data[0]=Fs(b.name);TF(f,c,d,g);}
var Xr=F();
function AAm(b,c){return ABb(null,b,c,0);}
function ABb(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AHT(c);g=B$(f);h=B$(f);i=B$(f);j=R(Cx,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<CA(b)){l=B$(f);c[k]=B2(b,k);l=4*l|0;f.e$=f.e$+l|0;}else c[k]=DF(Xv(f,d,0));k=k+1|0;}m=ACz(f,h);n=new Hr;n.dS=HG();n.d_=HG();n.e1=Cl();if(!c.length){b=new BC;U(b);J(b);}n.B=j;n.fi=0;n.ck=0;n.cU=ARr(m);b=n.dS;e=0;while(e<i){Sj(b,EL(B$(f),B$(f)),EL(B$(f),B$(f)));e=e+1|0;}b=n.dS;m=n.d_;o=new TI;RD(o,b);while(IK(o)){Tp(o);b=o.gH;p=b.hH;q=b.fv;b=Cl();if(En(m,q)===null)Sj(m,q,b);BX(En(m,
q),p);}if(m.jX===null){b=new Os;b.te=m;m.jX=b;}b=m.jX;q=new P8;RD(q,b.te);while(IK(q)){Tp(q);b=q.gH.fv;m=ASH;c=R(C,b.i);d=c.data;Hn(b,c);YQ(c,m);e=0;g=d.length;while(e<g){m=d[e];IE(b,e);b.b$.data[e]=m;e=e+1|0;}}N_(f);return n;}
function Z2(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AHT(c);g=B$(f);h=B$(f);i=B$(f);j=B$(f);k=MX(b,g);l=MX(b,h);m=(Ia(B2(b,k.b),k.a)).data[0].o;e=(Ia(B2(b,l.b),l.a)).data[1].o;n=0;o=i-1|0;while(n<i){p=Xv(f,d,g);if(!n)p=K4(m,p);if(n==o)p=K4(p,e);q=k.b+n|0;r=DF(p);b.B.data[q]=r;n=n+1|0;}r=ACz(f,j);N_(f);if(!D5(r)){s=Nm(g,h,(-1));b=b.cU;f=AQu(s,r);r=J2(b,b.cB,s);if(r!==null){f=f.cB.bt;if(r===b.cB)b.cB=Bs(f,0);else if(r.ds!==null){b=new Nk;b.qQ=r;Ju(f,b);q=PC(r.ds.bt,
r);Ef(r.ds.bt,q);b=r.ds.bt;OE(b,q);if(!D5(f)){IO(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.b$.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BR(f);g=0;while(g<j){c=b.b$.data;h=q+1|0;c[q]=BV(f);g=g+1|0;q=h;}b.cm=b.cm+1|0;}}}}}
function Xv(b,c,d){var e,f,g,h,i,j,k,l;e=B$(b);f=R(B5,e);g=f.data;h=0;while(h<e){i=B$(b);j=B$(b);k=B$(b);l=B$(b);g[h]=Dv(Jc(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ACz(b,c){var d,e;d=Cl();e=0;while(e<c){BX(d,Nm(B$(b),B$(b),B$(b)));e=e+1|0;}return d;}
var VW=F(0);
var AT9=null;function XG(){AT9=null;}
function Wi(){var a=this;C.call(a);a.pb=null;a.pc=null;}
function AHi(a,b){var c,d,e,f,g,h;b=a.pb;c=a.pc;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new L4;h.mh=b;h.mg=g;$rt_globals.setTimeout(Bk(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Xg(d.item(f));g=new LM;g.qx=b;g.qy=c;$rt_globals.setTimeout(Bk(g,"onTimer"),0);f=f+1|0;}}
function YV(){var a=this;C.call(a);a.hI=null;a.jF=null;}
function ACg(){var a=this;C.call(a);a.wt=0;a.wh=0;a.q$=0;a.km=0;}
function Tx(){var a=this;C.call(a);a.mM=null;a.mK=null;}
function AHX(a){var b,c,d,e,f,g;b=a.mM;c=a.mK;if(Dg(c.hI,b.e.fB)){c=c.jF;Cz(b,c.km,c.q$,0);B1(b.p.bI,c.km,c.q$);B1(b.p.bA,c.wh,c.wt);}else{d=(Cn(b.d1.p$)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Cg(b);b=new N8;b.nh=g;b.ni=c;BI(b);c=new O5;c.tE=b;$rt_globals.setTimeout(Bk(c,"onTimer"),0);}}}
function Tz(){var a=this;C.call(a);a.tH=null;a.tD=null;}
function AMA(a){Hg(a.tH,a.tD);}
function XM(){var a=this;C.call(a);a.iJ=null;a.e$=0;}
function AHT(a){var b=new XM();ANJ(b,a);return b;}
function ANJ(a,b){a.iJ=b;a.e$=0;}
function B$(a){var b,c;b=a.iJ.data;c=a.e$;a.e$=c+1|0;return b[c];}
function N_(a){var b,c,d,e;if(a.e$!=a.iJ.data.length){b=K2();c=a.iJ.data.length;d=a.e$;e=new M;O(e);G(S(G(S(G(e,B(352)),c),B(353)),d),B(354));Bu(b,N(e));}}
var Iu=F(E8);
var Hw=F(Bn);
var La=F(Bn);
function Yz(){C.call(this);this.CB=null;}
function Rp(){var a=this;C.call(a);a.sb=null;a.sh=null;}
function AO9(a){var b,c;b=a.sb;c=a.sh;It(b.di,c);}
function V1(){C.call(this);this.o9=null;}
function ANa(a,b){Hm(a.o9,b);}
function Ry(){var a=this;C.call(a);a.nB=null;a.nA=null;}
function AEh(a){var b,c;b=a.nB;c=a.nA;It(b.di,c);Tc(b);}
var Xa=F();
function Q0(b,c){return b.data[c];}
function GJ(){var a=this;C.call(a);a.el=0;a.eW=0;a.kt=null;a.jc=0;a.gD=null;}
function ADF(a,b,c,d,e,f){var g=new GJ();AIA(g,a,b,c,d,e,f);return g;}
function AIA(a,b,c,d,e,f,g){a.el=b;a.eW=c;a.kt=B0(f,g);a.jc=d;a.gD=e;}
function AA7(){F4.call(this);this.AE=null;}
function Os(){EG.call(this);this.te=null;}
var VH=F(Bw);
var PG=F(0);
var MU=F(0);
var Le=F();
function Y0(){var a=this;Le.call(a);a.CC=null;a.Ex=0;a.C_=0;a.AT=0;}
function QC(){var a=this;C.call(a);a.nb=null;a.na=null;}
function AET(a){var b,c;b=a.nb;c=a.na;T1();IG(b,c,AU1);}
function QB(){var a=this;C.call(a);a.n3=null;a.n5=null;}
function ADn(a){var b,c;b=a.n3;c=a.n5;T1();IG(b,c,AU2);}
function QA(){var a=this;C.call(a);a.tq=null;a.tr=null;}
function AJi(a){IG(a.tq,a.tr,null);}
function Qz(){var a=this;C.call(a);a.mJ=null;a.mL=null;}
function ANN(a){var b,c,d,e,f,g,h;b=a.mJ;c=a.mL;d=Df(b.bq.e);e=GG(b.bq.e);d=MO(b.bq.d1,d,e);DB(b.T.b2);b=b.bq;e=Ed(b,c);if(d!==null){f=b.e;g=e.bm;h=e.br;e=new V5;e.tY=b;e.tZ=c;d.Fs(f,g,h,1,e,b.gy);}}
function OQ(){C.call(this);this.oZ=null;}
function AM_(a){var b;b=a.oZ;DB(b.T.b2);Kx(b.bq,Nr(b),0);}
function OS(){C.call(this);this.sg=null;}
function AIp(a){var b;b=a.sg;DB(b.T.b2);Kx(b.bq,Nr(b),1);}
function OT(){C.call(this);this.rj=null;}
function AFn(a){var b,c,d;b=a.rj;DB(b.T.b2);c=H9(b);b=b.bq;BI(b);d=new RZ;d.rk=b;P0(c,d,XD(B(355)));}
function Vc(){C.call(this);this.rr=null;}
function AEe(a){var b,c,d;b=a.rr;DB(b.T.b2);c=H9(b);b=b.bq;BI(b);d=new Qe;d.pl=b;Lb(c,d);}
function U5(){C.call(this);this.rg=null;}
function AJ_(a,b,c){var d,e;c=a.rg;d=c.e.f;e=b.e8;b=c.em;Wg(d.B.data[e],0,b);}
function RR(){C.call(this);this.ne=null;}
function AIU(a){SY(a.ne);}
function RS(){C.call(this);this.p9=null;}
function AJ9(a){AAc(a.p9);}
function Nw(){C.call(this);this.qw=null;}
function AHR(a){var b;b=a.qw;KA(b,b.en.lB,b.fG+1|0);}
function Nv(){C.call(this);this.ph=null;}
function ANX(a){var b,c;b=a.ph;c=b.fG;if(c>7)KA(b,b.en.lB,c-1|0);}
function Uj(){C.call(this);this.pY=null;}
function AFQ(a){var b,c,d,e,f,g,h,i;b=a.pY;c=(b.gU.n_()).data;d=R(C5,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new W5;i.ox=b;i.ow=h;e[f]=AB_(i,h,b.T.bh.Z.bd);f=f+1|0;}return d;}
function UT(){C.call(this);this.rx=null;}
function ALT(a){var b,c,d,e,f;b=a.rx.e.f;c=b.ck;d=new M;O(d);S(G(d,B(356)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fi;d=new M;O(d);S(G(d,B(357)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.cU;e=FK(F9(b));Rh(d,0,d.cB,e);b=By();f=b.jO;f.data[0]=10;Ni(b,f,0,1);}
function UX(){C.call(this);this.mU=null;}
function AI2(a){RM(a.mU);}
function UW(){C.call(this);this.qu=null;}
function AD9(a){VM(a.qu);}
function UU(){C.call(this);this.tG=null;}
function AFX(a){Jx(a.tG);}
function RN(){C.call(this);this.sV=null;}
function AH$(a,b,c){FI(B2(a.sV.e.f,b.e8),0,I(c));}
function Pb(){var a=this;C.call(a);a.m8=null;a.m7=null;}
function AGc(a,b){a.m8.m(AAA(a.m7,b));}
var Im=F(0);
function L4(){var a=this;C.call(a);a.mh=null;a.mg=null;}
function AIq(a){XP(a.mh,a.mg);}
function LM(){var a=this;C.call(a);a.qx=null;a.qy=null;}
function AC_(a){a.qx.m(a.qy);}
function Wm(){var a=this;C.call(a);a.ml=null;a.mk=null;a.mo=null;a.mm=null;}
function AHH(a,b){var c,d,e,f,g,h,i;c=a.ml;d=a.mk;e=a.mo;f=a.mm;if(!(b.done?1:0)){TF(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Tm;c.n2=d;c.n4=g;c.n6=f;b.then(Bk(c,"f"),Bk(e,"f"));}else{h=f.data;c=g.values();b=Fs(g.name);i=h.length;f=Dc(f,i+1|0);f.data[i]=b;TF(c,d,e,f);}}}
function GD(){var a=this;C.call(a);a.hN=0;a.qD=0;a.g_=null;a.gH=null;a.of=null;a.iz=null;}
function AU3(a){var b=new GD();RD(b,a);return b;}
function RD(a,b){a.iz=b;a.qD=b.gb;a.g_=null;}
function IK(a){var b,c;if(a.g_!==null)return 1;while(true){b=a.hN;c=a.iz.cH.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hN=b+1|0;}return 0;}
function YA(a){var b;if(a.qD==a.iz.gb)return;b=new Lc;U(b);J(b);}
function Tp(a){var b,c,d,e;YA(a);if(!IK(a)){b=new WU;U(b);J(b);}b=a.g_;if(b!==null){c=a.gH;if(c!==null)a.of=c;a.gH=b;a.g_=b.eQ;}else{d=a.iz.cH.data;e=a.hN;a.hN=e+1|0;b=d[e];a.gH=b;a.g_=b.eQ;a.of=null;}}
var TI=F(GD);
var P8=F(GD);
var S4=F(0);
var AUe=null;function ZT(){AUe=new R5;}
function P6(){var a=this;C.call(a);a.g=null;a.c6=0;a.jD=null;a.mG=0;a.fQ=0;a.eb=0;a.bp=0;a.kC=null;}
function Jl(a){return a.g.bD;}
function WM(a,b,c,d){var e,f,g,h,i,j;e=Cl();f=a.c6;g=0;if(c!=f)a.c6=c;a:{switch(b){case -1073741784:h=new QP;c=a.bp+1|0;a.bp=c;Fa(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OX;c=a.bp+1|0;a.bp=c;Fa(h,c);break a;case -33554392:h=new RV;c=a.bp+1|0;a.bp=c;Fa(h,c);break a;default:c=a.fQ+1|0;a.fQ=c;if(d!==null)h=ARB(c);else{h=new Fl;Fa(h,0);g=1;}c=a.fQ;if(c<=(-1))break a;if(c>=10)break a;a.jD.data[c]=h;break a;}h=new WG;Fa(h,(-1));}while(true){if(ER(a.g)&&a.g.h==(-536870788))
{d=AOg(B7(a,2),B7(a,64));while(!Da(a.g)&&ER(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cs(d,Bd(i));i=a.g;if(i.ba!=(-536870788))continue;Bd(i);}i=Kd(a,d);i.J(h);}else if(a.g.ba==(-536870788)){i=Gv(h);Bd(a.g);}else{i=Oj(a,h);d=a.g;if(d.ba==(-536870788))Bd(d);}if(i!==null)BX(e,i);if(Da(a.g))break;if(a.g.ba==(-536870871))break;}if(a.g.j4==(-536870788))BX(e,Gv(h));if(a.c6!=f&&!g){a.c6=f;d=a.g;d.fx=f;d.h=d.ba;d.d6=d.eg;j=d.cQ;d.t=j+1|0;d.gK=j;EU(d);}switch(b){case -1073741784:break;case -536870872:d
=new L2;Fn(d,e,h);return d;case -268435416:d=new Vd;Fn(d,e,h);return d;case -134217688:d=new P9;Fn(d,e,h);return d;case -67108824:d=new SH;Fn(d,e,h);return d;case -33554392:d=new DG;Fn(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return ARm(Bs(e,0),h);default:return AQZ(e,h);}return Gv(h);}d=new Ir;Fn(d,e,h);return d;}
function ABs(a){var b,c,d,e,f,g,h;b=BH(4);c=(-1);d=(-1);if(!Da(a.g)&&ER(a.g)){e=b.data;c=Bd(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BQ(3);b=e.data;b[0]=c&65535;f=a.g;g=f.ba;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bd(f);f=a.g;g=f.ba;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bd(f);return AN0(e,3);}return AN0(e,2);}if(!B7(a,2))return Yy(b[0]);if(B7(a,64))return AL_(b[0]);return AE6(b[0]);}e=b.data;c=1;while(c<4&&!Da(a.g)&&ER(a.g)){h=c+1|0;e[c]=Bd(a.g);c=h;}if(c==1){h=e[0];if(!(AU4.vZ(h)==AU5?0:1))return WD(a,e[0]);}if
(!B7(a,2))return ASd(b,c);if(B7(a,64)){f=new Wl;Ne(f,b,c);return f;}f=new SU;Ne(f,b,c);return f;}
function Oj(a,b){var c,d,e,f,g,h,i;if(ER(a.g)&&!I_(a.g)&&JL(a.g.h)){if(B7(a,128)){c=ABs(a);if(!Da(a.g)){d=a.g;e=d.ba;if(!(e==(-536870871)&&!(b instanceof Fl))&&e!=(-536870788)&&!ER(d))c=Lu(a,b,c);}}else if(!Nn(a.g)&&!Um(a.g)){f=new No;O(f);while(!Da(a.g)&&ER(a.g)&&!Nn(a.g)&&!Um(a.g)){if(!(!I_(a.g)&&!a.g.h)&&!(!I_(a.g)&&JL(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bd(a.g);if(!Lm(e))BA(f,e&65535);else HV(f,Gf(e));}if(!B7(a,2)){c=new QE;Dr(c);c.cf
=N(f);e=f.K;c.bC=e;c.jT=AKC(e);c.kF=AKC(c.bC);h=0;while(h<(c.bC-1|0)){Qb(c.jT,L(c.cf,h),(c.bC-h|0)-1|0);Qb(c.kF,L(c.cf,(c.bC-h|0)-1|0),(c.bC-h|0)-1|0);h=h+1|0;}}else if(B7(a,64))c=ASa(f);else{c=new MB;Dr(c);c.gL=N(f);c.bC=f.K;}}else c=Lu(a,b,Wk(a,b));}else{d=a.g;if(d.ba!=(-536870871))c=Lu(a,b,Wk(a,b));else{if(b instanceof Fl)J(B6(B(31),d.bD,Nl(d)));c=Gv(b);}}a:{if(!Da(a.g)){e=a.g.ba;if(!(e==(-536870871)&&!(b instanceof Fl))&&e!=(-536870788)){f=Oj(a,b);if(c instanceof CY&&!(c instanceof EV)&&!(c instanceof CO)
&&!(c instanceof Es)){i=c;if(!f.bJ(i.F)){c=new Vr;EJ(c,i.F,i.d,i.g7);c.F.J(c);}}if((f.ha()&65535)!=43)c.J(f);else c.J(f.F);break a;}}if(c===null)return null;c.J(b);}if((c.ha()&65535)!=43)return c;return c.F;}
function Lu(a,b,c){var d,e,f,g,h;d=a.g;e=d.ba;if(c!==null&&!(c instanceof BS)){switch(e){case -2147483606:Bd(d);d=new W1;C8(d,c,b,e);Ly();c.J(AU6);return d;case -2147483605:Bd(d);d=new OP;C8(d,c,b,(-2147483606));Ly();c.J(AU6);return d;case -2147483585:Bd(d);d=new Ou;C8(d,c,b,(-536870849));Ly();c.J(AU6);return d;case -2147483525:f=new Mu;d=E0(d);g=a.eb+1|0;a.eb=g;ID(f,d,c,b,(-536870849),g);Ly();c.J(AU6);return f;case -1073741782:case -1073741781:Bd(d);d=new Qv;C8(d,c,b,e);c.J(d);return d;case -1073741761:Bd(d);d
=new PD;C8(d,c,b,(-536870849));c.J(b);return d;case -1073741701:h=new T3;d=E0(d);e=a.eb+1|0;a.eb=e;ID(h,d,c,b,(-536870849),e);c.J(h);return h;case -536870870:case -536870869:Bd(d);if(c.ha()!=(-2147483602)){d=new CO;C8(d,c,b,e);}else if(B7(a,32)){d=new Qx;C8(d,c,b,e);}else{d=new Nx;f=Oy(a.c6);C8(d,c,b,e);d.j2=f;}c.J(d);return d;case -536870849:Bd(d);d=new FF;C8(d,c,b,(-536870849));c.J(b);return d;case -536870789:h=new E1;d=E0(d);e=a.eb+1|0;a.eb=e;ID(h,d,c,b,(-536870849),e);c.J(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bd(d);d=new W3;EJ(d,f,b,e);f.d=d;return d;case -2147483585:Bd(d);c=new Vn;EJ(c,f,b,(-2147483585));return c;case -2147483525:c=new Oh;Re(c,E0(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bd(d);d=new Pz;EJ(d,f,b,e);f.d=d;return d;case -1073741761:Bd(d);c=new Tb;EJ(c,f,b,(-1073741761));return c;case -1073741701:c=new P$;Re(c,E0(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bd(d);d=ARt(f,b,e);f.d=d;return d;case -536870849:Bd(d);c
=new Es;EJ(c,f,b,(-536870849));return c;case -536870789:return AQB(E0(d),f,b,(-536870789));default:}return c;}
function Wk(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fl;while(true){a:{e=a.g;f=e.ba;if((f&(-2147418113))==(-2147483608)){Bd(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.c6=g;else{if(f!=(-1073741784))g=a.c6;c=WM(a,f,g,b);e=a.g;if(e.ba!=(-536870871))J(B6(B(31),e.bD,e.cQ));Bd(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bd(e);c
=ANM(0);break a;case -2147483577:Bd(e);c=new Nt;BK(c);break a;case -2147483558:Bd(e);c=new V4;h=a.bp+1|0;a.bp=h;ABU(c,h);break a;case -2147483550:Bd(e);c=ANM(1);break a;case -2147483526:Bd(e);c=new VN;BK(c);break a;case -536870876:Bd(e);a.bp=a.bp+1|0;if(B7(a,8)){if(B7(a,1)){c=AQQ(a.bp);break a;}c=AP$(a.bp);break a;}if(B7(a,1)){c=AQ5(a.bp);break a;}c=ARG(a.bp);break a;case -536870866:Bd(e);if(B7(a,32)){c=AR0();break a;}c=ARA(Oy(a.c6));break a;case -536870821:Bd(e);i=0;c=a.g;if(c.ba==(-536870818)){i=1;Bd(c);}c
=Kd(a,FR(a,i));c.J(b);e=a.g;if(e.ba!=(-536870819))J(B6(B(31),e.bD,e.cQ));NY(e,1);Bd(a.g);break a;case -536870818:Bd(e);a.bp=a.bp+1|0;if(!B7(a,8)){c=new JQ;BK(c);break a;}c=new MH;e=Oy(a.c6);BK(c);c.pr=e;break a;case 0:j=e.eg;if(j!==null)c=Kd(a,j);else{if(Da(e)){c=Gv(b);break a;}c=Yy(f&65535);}Bd(a.g);break a;default:break b;}Bd(e);c=new JQ;BK(c);break a;}h=(f&2147483647)-48|0;if(a.fQ<h)J(B6(B(31),E9(e),Nl(a.g)));Bd(e);a.bp=a.bp+1|0;c=!B7(a,2)?AQf(h,a.bp):B7(a,64)?AQR(h,a.bp):AR9(h,a.bp);a.jD.data[h].jB=1;a.mG
=1;break a;}if(f>=0&&!Gx(e)){c=WD(a,f);Bd(a.g);}else if(f==(-536870788))c=Gv(b);else{if(f!=(-536870871)){b=new If;c=!Gx(a.g)?V3(f&65535):a.g.eg.cj();e=a.g;IM(b,c,e.bD,e.cQ);J(b);}if(d){b=new If;e=a.g;IM(b,B(31),e.bD,e.cQ);J(b);}c=Gv(b);}}}if(f!=(-16777176))break;}return c;}
function FR(a,b){var c,d,e,f,g,h,i,j,$$je;c=AOg(B7(a,2),B7(a,64));El(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Da(a.g))break a;h=a.g;b=h.ba;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cs(c,d);d=Bd(a.g);h=a.g;if(h.ba!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bd(h);e=1;d=(-1);break d;}Bd(h);if(g){c=FR(a,0);break d;}if(a.g.ba==(-536870819))break d;VT(c,FR(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bd(h);h=a.g;i=h.ba;if(Gx(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(JL(i))break e;i=i&65535;break e;}catch($$e){$$je=D9($$e);if($$je instanceof DS){break b;}else{throw $$e;}}}try{BO(c,d,i);}catch($$e){$$je=D9($$e);if($$je instanceof DS){break b;}else{throw $$e;}}Bd(a.g);d=(-1);break d;}}if(d>=0)Cs(c,d);d=45;Bd(a.g);break d;case -536870821:if(d>=0){Cs(c,d);d=(-1);}Bd(a.g);j=0;h=a.g;if(h.ba==(-536870818)){Bd(h);j=1;}if(!e)Xd(c,FR(a,j));else VT(c,FR(a,j));e=0;Bd(a.g);break d;case -536870819:if(d>=0)Cs(c,
d);d=93;Bd(a.g);break d;case -536870818:if(d>=0)Cs(c,d);d=94;Bd(a.g);break d;case 0:if(d>=0)Cs(c,d);h=a.g.eg;if(h===null)d=0;else{ACV(c,h);d=(-1);}Bd(a.g);break d;default:}if(d>=0)Cs(c,d);d=Bd(a.g);}g=0;}J(B6(B(31),Jl(a),a.g.cQ));}J(B6(B(31),Jl(a),a.g.cQ));}if(!f){if(d>=0)Cs(c,d);return c;}J(B6(B(31),Jl(a),a.g.cQ-1|0));}
function WD(a,b){var c,d,e;c=Lm(b);if(B7(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AE6(b&65535);}if(B7(a,64)&&b>128){if(c){d=new LS;Dr(d);d.bC=2;d.o2=Gn(Gm(b));return d;}if(N9(b))return AKI(b&65535);if(!RA(b))return AL_(b&65535);return AIb(b&65535);}}if(!c){if(N9(b))return AKI(b&65535);if(!RA(b))return Yy(b&65535);return AIb(b&65535);}d=new DJ;Dr(d);d.bC=2;d.fe=b;e=(Gf(b)).data;d.i4=e[0];d.hJ=e[1];return d;}
function Kd(a,b){var c,d,e;if(!AAi(b)){if(!b.H){if(b.gr())return AHC(b);return ANO(b);}if(!b.gr())return AIS(b);c=new IF;Ts(c,b);return c;}c=XH(b);d=new L9;BK(d);d.nV=c;d.tS=c.Y;if(!b.H){if(b.gr())return AAX(AHC(Hd(b)),d);return AAX(ANO(Hd(b)),d);}if(!b.gr())return AAX(AIS(Hd(b)),d);c=new Pr;e=new IF;Ts(e,Hd(b));ACA(c,e,d);return c;}
function He(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B7(a,b){return (a.c6&b)!=b?0:1;}
function Nk(){C.call(this);this.qQ=null;}
function APN(a,b){b.ds=a.qQ.ds;}
var Gg=F(Cr);
var AU2=null;var AU1=null;var AU7=null;function T1(){T1=Br(Gg);AGg();}
function AIx(a,b){var c=new Gg();Yt(c,a,b);return c;}
function Yt(a,b,c){T1();DE(a,b,c);}
function AGg(){var b;AU2=AIx(B(358),0);b=AIx(B(359),1);AU1=b;AU7=H(Gg,[AU2,b]);}
function RZ(){C.call(this);this.rk=null;}
function AI5(a,b){DH(a.rk,b);}
function Ov(){var a=this;C.call(a);a.pD=null;a.pC=0;a.py=0;a.px=null;a.pB=0;a.pz=0;}
function AJv(a,b){var c,d,e,f,g,h,i,j;c=a.pD;d=a.pC;e=a.py;f=a.px;g=a.pB;h=a.pz;i=CJ(c.bn,5.0);d=W((c.bn.b1.b-d|0)-i|0,Ba((i-d|0)-c.O.s.b|0,b.k.b));j=W((c.bn.b1.a-e|0)-i|0,Ba((i-e|0)-c.O.s.a|0,b.k.a));Bg(f,d+g|0,j+h|0);Fb(c,f,c.L.s);}
function R1(){var a=this;C.call(a);a.rX=null;a.rY=null;a.rZ=null;a.r0=0;a.r2=0;a.r3=0;a.r4=0;a.r5=0;a.r6=0;a.r7=0;a.qY=0;}
function AHm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.rX;d=a.rY;e=a.rZ;f=a.r0;g=a.r2;h=a.r3;i=a.r4;j=a.r5;k=a.r6;l=a.r7;m=a.qY;n=CJ(c.bn,5.0);o=c.L.it();CG(d,c.L.s);CG(e,c.L.C);switch(f){case -1:f=W(h+(b.k.b-g|0)|0,c.bn.b1.b-n|0);g=o.b;h=h+i|0;f=Ba(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Ba((i+b.k.b|0)-g|0,Ba(o.b,n-c.O.C.b|0));}b:{switch(j){case -1:f=Ba(n,W(l+(b.k.a-k|0)|0,(c.bn.b1.a+c.O.s.a|0)-n|0));g=o.a;h=l+m|0;f=Ba(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Ba((m+b.k.a|0)-k|0,o.a);}Fb(c,e,d);}
var R5=F();
function AD7(a,b){}
function Uo(){var a=this;C.call(a);a.tx=null;a.ty=0.0;}
function Jg(a,b){return Kb(a.tx,b,a.ty*2.0+0.875);}
function Bz(){var a=this;C.call(a);a.d=null;a.b8=0;a.no=null;a.g7=0;}
var ASN=0;function BK(a){var b,c;b=new E7;c=ASN;ASN=c+1|0;Jp(b,c);a.no=Lp(b);}
function Ka(a,b){var c,d;c=new E7;d=ASN;ASN=d+1|0;Jp(c,d);a.no=Lp(c);a.d=b;}
function Hj(a,b,c,d){var e;e=d.u;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Ht(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFz(a,b){a.g7=b;}
function AEJ(a){return a.g7;}
function ANg(a){return a.d;}
function AN7(a,b){a.d=b;}
function AN6(a,b){return 1;}
function AOY(a){return null;}
function IA(a){var b;a.b8=1;b=a.d;if(b!==null){if(!b.b8){b=b.eO();if(b!==null){a.d.b8=1;a.d=b;}a.d.dP();}else if(b instanceof Gj&&b.dT.jB)a.d=b.d;}}
function ACM(){ASN=1;}
var TB=F();
var AU0=null;function AQp(){AQp=Br(TB);AEn();}
function AEn(){var b,c;T1();b=BH((AU7.e_()).data.length);c=b.data;AU0=b;c[AU2.cJ]=1;c[AU1.cJ]=2;}
function Ot(){C.call(this);this.oA=null;}
function AFH(a,b){Tt(H9(a.oA),b,AUc,XD(B(360)));}
function U4(){C.call(this);this.sv=null;}
function AHg(a,b){var c,d;c=a.sv;d=b.g4;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function W5(){var a=this;C.call(a);a.ox=null;a.ow=null;}
function AFu(a){var b,c;b=a.ox;c=a.ow;b=b.bq;KA(b,c,b.fG);}
function CN(){var a=this;Bz.call(a);a.jB=0;a.db=0;}
var AU6=null;function Ly(){Ly=Br(CN);AGI();}
function ARB(a){var b=new CN();Fa(b,a);return b;}
function Fa(a,b){Ly();BK(a);a.db=b;}
function AEd(a,b,c,d){var e,f;e=H1(d,a.db);I5(d,a.db,b);f=a.d.c(b,c,d);if(f<0)I5(d,a.db,e);return f;}
function AJS(a){return a.db;}
function AEy(a,b){return 0;}
function AGI(){var b;b=new Np;BK(b);AU6=b;}
function Gt(){var a=this;C.call(a);a.X=null;a.fx=0;a.d$=0;a.sn=0;a.j4=0;a.ba=0;a.h=0;a.p3=0;a.eg=null;a.d6=null;a.t=0;a.hi=0;a.cQ=0;a.gK=0;a.bD=null;}
var AU8=null;var AU4=null;var AU5=0;function NY(a,b){if(b>0&&b<3)a.d$=b;if(b==1){a.h=a.ba;a.d6=a.eg;a.t=a.gK;a.gK=a.cQ;EU(a);}}
function Gx(a){return a.eg===null?0:1;}
function I_(a){return a.d6===null?0:1;}
function Bd(a){EU(a);return a.j4;}
function E0(a){var b;b=a.eg;EU(a);return b;}
function EU(a){var b,c,d,e,f,g,h,$$je;a.j4=a.ba;a.ba=a.h;a.eg=a.d6;a.cQ=a.gK;a.gK=a.t;while(true){b=0;c=a.t>=a.X.data.length?0:KX(a);a.h=c;a.d6=null;if(a.d$==4){if(c!=92)return;c=a.t;d=a.X.data;c=c>=d.length?0:d[BP(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.t=a.hi;return;}a.d$=a.sn;a.h=a.t>(a.X.data.length-2|0)?0:KX(a);}a:{c=a.h;if(c!=92){e=a.d$;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.X.data[a.t]!=63){a.h=(-2147483608);break a;}BP(a);c=a.X.data[a.t];e=0;while(true){b:{if(e){e
=0;switch(c){case 33:break;case 61:a.h=(-134217688);BP(a);break b;default:J(B6(B(31),E9(a),a.t));}a.h=(-67108824);BP(a);}else{switch(c){case 33:break;case 60:BP(a);c=a.X.data[a.t];e=1;break b;case 61:a.h=(-536870872);BP(a);break b;case 62:a.h=(-33554392);BP(a);break b;default:f=ACN(a);a.h=f;if(f<256){a.fx=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fx=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BP(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e
=a.t;d=a.X.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BP(a);break a;case 63:a.h=c|(-1073741824);BP(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);NY(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.d6=ACd(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.t>=(a.X.data.length-2|0)?(-1):KX(a);c:{a.h=c;switch(c){case -1:J(B6(B(31),E9(a),a.t));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=AAK(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.d$!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B6(B(31),E9(a),a.t));case 68:case 83:case 87:case 100:case 115:case 119:a.d6=Q5(Jc(a.X,
a.hi,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.sn=a.d$;a.d$=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.t;d=a.X.data;if(c>=(d.length-2|0))J(B6(B(31),E9(a),a.t));a.h=d[BP(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=OV(a,4);break a;case 120:a.h=OV(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=AAt(a);h=0;if(a.h==80)h=1;try{a.d6=Q5(g,h);}catch($$e){$$je=D9($$e);if($$je instanceof IH){J(B6(B(31),E9(a),a.t));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function AAt(a){var b,c,d,e,f,g;b=new M;FM(b,10);c=a.t;d=a.X;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Jc(d,BP(a),1);f=new M;O(f);G(G(f,B(361)),b);return N(f);}BP(a);c=0;a:{while(true){g=a.t;d=a.X.data;if(g>=(d.length-2|0))break;c=d[BP(a)];if(c==125)break a;BA(b,c);}}if(c!=125)J(B6(B(31),a.bD,a.t));}if(!b.K)J(B6(B(31),a.bD,a.t));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(361)),f);return N(b);}b:{c:{if(I(f)>3){if(J4(f,B(361)))break c;if(J4(f,B(362)))break c;}break b;}f=Db(f,2);}return f;}
function ACd(a,b){var c,d,e,f,g,$$je;c=new M;FM(c,4);d=(-1);e=2147483647;a:{while(true){f=a.t;g=a.X.data;if(f>=g.length)break a;b=g[BP(a)];if(b==125)break a;if(b==44&&d<0)try{d=I1(DI(c),10);ACj(c,0,XS(c));continue;}catch($$e){$$je=D9($$e);if($$je instanceof C9){break;}else{throw $$e;}}BA(c,b&65535);}J(B6(B(31),a.bD,a.t));}if(b!=125)J(B6(B(31),a.bD,a.t));if(c.K>0)b:{try{e=I1(DI(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=D9($$e);if($$je instanceof C9){}else{throw $$e;}}J(B6(B(31),a.bD,a.t));}else if(d
<0)J(B6(B(31),a.bD,a.t));if((d|e|(e-d|0))<0)J(B6(B(31),a.bD,a.t));b=a.t;g=a.X.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BP(a);break c;case 63:a.h=(-1073741701);BP(a);break c;default:}a.h=(-536870789);}c=new Mk;c.d8=d;c.d3=e;return c;}
function E9(a){return a.bD;}
function Da(a){return !a.ba&&!a.h&&a.t==a.p3&&!Gx(a)?1:0;}
function JL(b){return b<0?0:1;}
function ER(a){return !Da(a)&&!Gx(a)&&JL(a.ba)?1:0;}
function Nn(a){var b;b=a.ba;return b<=56319&&b>=55296?1:0;}
function Um(a){var b;b=a.ba;return b<=57343&&b>=56320?1:0;}
function RA(b){return b<=56319&&b>=55296?1:0;}
function N9(b){return b<=57343&&b>=56320?1:0;}
function OV(a,b){var c,d,e,f,$$je;c=new M;FM(c,b);d=a.X.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.t>=d)break;BA(c,a.X.data[BP(a)]);e=e+1|0;}if(!f)a:{try{b=I1(DI(c),16);}catch($$e){$$je=D9($$e);if($$je instanceof C9){break a;}else{throw $$e;}}return b;}J(B6(B(31),a.bD,a.t));}
function AAK(a){var b,c,d,e,f,g;b=3;c=1;d=a.X.data;e=d.length-2|0;f=TW(d[a.t],8);switch(f){case -1:break;default:if(f>3)b=2;BP(a);a:{while(true){if(c>=b)break a;g=a.t;if(g>=e)break a;g=TW(a.X.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BP(a);c=c+1|0;}}return f;}J(B6(B(31),a.bD,a.t));}
function ACN(a){var b,c,d,e;b=1;c=a.fx;a:while(true){d=a.t;e=a.X.data;if(d>=e.length)J(B6(B(31),a.bD,d));b:{c:{switch(e[d]){case 41:BP(a);return c|256;case 45:if(!b)J(B6(B(31),a.bD,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BP(a);}BP(a);return c;}
function BP(a){var b,c,d,e,f;b=a.t;a.hi=b;if(!(a.fx&4))a.t=b+1|0;else{c=a.X.data.length-2|0;a.t=b+1|0;a:while(true){d=a.t;if(d<c&&P7(a.X.data[d])){a.t=a.t+1|0;continue;}d=a.t;if(d>=c)break;e=a.X.data;if(e[d]!=35)break;a.t=d+1|0;while(true){f=a.t;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.t=f+1|0;}}}return a.hi;}
function AB6(b){return AU8.Ar(b);}
function KX(a){var b,c,d,e;b=a.X.data[BP(a)];if(CC(b)){c=a.hi+1|0;d=a.X.data;if(c<d.length){e=d[c];if(CZ(e)){BP(a);return Em(b,e);}}}return b;}
function Nl(a){return a.cQ;}
function If(){var a=this;BC.call(a);a.vI=null;a.vh=null;a.oS=0;}
function B6(a,b,c){var d=new If();IM(d,a,b,c);return d;}
function IM(a,b,c,d){U(a);a.oS=(-1);a.vI=b;a.vh=c;a.oS=d;}
function V9(){C.call(this);this.r_=null;}
function ALy(a,b){var c,d;c=a.r_;d=0;while(d<b.length){XP(c,b[d]);d=d+1|0;}}
var AAo=F(0);
function Tm(){var a=this;C.call(a);a.n2=null;a.n4=null;a.n6=null;}
function ALd(a,b){a.n2.m(AP_(a.n4,b,a.n6));}
var QP=F(CN);
function ADM(a,b,c,d){var e;e=a.db;BE(d,e,b-Dd(d,e)|0);return a.d.c(b,c,d);}
function AML(a,b){return 0;}
var WG=F(CN);
function AFx(a,b,c,d){return b;}
var OX=F(CN);
function AEH(a,b,c,d){if(Dd(d,a.db)!=b)b=(-1);return b;}
function RV(){CN.call(this);this.mv=0;}
function ADS(a,b,c,d){var e;e=a.db;BE(d,e,b-Dd(d,e)|0);a.mv=b;return b;}
function ALm(a,b){return 0;}
var Fl=F(CN);
function AOn(a,b,c,d){if(d.iR!=1&&b!=d.u)return (-1);d.h9=1;I5(d,0,b);return b;}
function BS(){Bz.call(this);this.bC=0;}
function Dr(a){BK(a);a.bC=1;}
function APo(a,b,c,d){var e;if((b+a.bO()|0)>d.u){d.c0=1;return (-1);}e=a.bo(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function ANC(a){return a.bC;}
function AIy(a,b){return 1;}
var ABS=F(BS);
function Gv(a){var b=new ABS();AJ4(b,a);return b;}
function AJ4(a,b){Ka(a,b);a.bC=1;a.g7=1;a.bC=0;}
function AM$(a,b,c){return 0;}
function AGP(a,b,c,d){var e,f,g;e=d.u;f=d.cu;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&CZ(L(c,b))&&b>f&&CC(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AFl(a,b,c,d,e){var f,g;f=e.u;g=e.cu;while(true){if(c<b)return (-1);if(c<f&&CZ(L(d,c))&&c>g&&CC(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ADQ(a,b){return 0;}
function BN(){var a=this;Bz.call(a);a.bu=null;a.dT=null;a.R=0;}
function AQZ(a,b){var c=new BN();Fn(c,a,b);return c;}
function Fn(a,b,c){BK(a);a.bu=b;a.dT=c;a.R=c.db;}
function AHp(a,b,c,d){var e,f,g,h;if(a.bu===null)return (-1);e=Fq(d,a.R);Dq(d,a.R,b);f=a.bu.i;g=0;while(true){if(g>=f){Dq(d,a.R,e);return (-1);}h=(Bs(a.bu,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ALf(a,b){a.dT.d=b;}
function AJj(a,b){var c;a:{c=a.bu;if(c!==null){c=BR(c);while(true){if(!B3(c))break a;if(!(BV(c)).bJ(b))continue;else return 1;}}}return 0;}
function ALX(a,b){return H1(b,a.R)>=0&&Fq(b,a.R)==H1(b,a.R)?0:1;}
function AFg(a){var b,c,d,e;a.b8=1;b=a.dT;if(b!==null&&!b.b8)IA(b);a:{b=a.bu;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bs(a.bu,d);e=b.eO();if(e===null)e=b;else{b.b8=1;Ef(a.bu,d);Qu(a.bu,d,e);}if(!e.b8)e.dP();d=d+1|0;}}}if(a.d!==null)IA(a);}
var Ir=F(BN);
function AK0(a,b,c,d){var e,f,g,h;e=Dd(d,a.R);BE(d,a.R,b);f=a.bu.i;g=0;while(true){if(g>=f){BE(d,a.R,e);return (-1);}h=(Bs(a.bu,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AMl(a,b){return !Dd(b,a.R)?0:1;}
var DG=F(Ir);
function AFY(a,b,c,d){var e,f,g;e=Dd(d,a.R);BE(d,a.R,b);f=a.bu.i;g=0;while(g<f){if((Bs(a.bu,g)).c(b,c,d)>=0)return a.d.c(a.dT.mv,c,d);g=g+1|0;}BE(d,a.R,e);return (-1);}
function AL5(a,b){a.d=b;}
var L2=F(DG);
function AK$(a,b,c,d){var e,f;e=a.bu.i;f=0;while(f<e){if((Bs(a.bu,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AOb(a,b){return 0;}
var Vd=F(DG);
function AEs(a,b,c,d){var e,f;e=a.bu.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bu,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ANG(a,b){return 0;}
var P9=F(DG);
function AFa(a,b,c,d){var e,f,g,h;e=a.bu.i;f=d.ie?0:d.cu;a:{g=a.d.c(b,c,d);if(g>=0){BE(d,a.R,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bu,h)).cc(f,b,c,d)>=0){BE(d,a.R,(-1));return g;}h=h+1|0;}}}return (-1);}
function APR(a,b){return 0;}
var SH=F(DG);
function ADo(a,b,c,d){var e,f;e=a.bu.i;BE(d,a.R,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bu,f)).cc(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AMz(a,b){return 0;}
function Gj(){BN.call(this);this.cC=null;}
function ARm(a,b){var c=new Gj();Ym(c,a,b);return c;}
function Ym(a,b,c){BK(a);a.cC=b;a.dT=c;a.R=c.db;}
function ADH(a,b,c,d){var e,f;e=Fq(d,a.R);Dq(d,a.R,b);f=a.cC.c(b,c,d);if(f>=0)return f;Dq(d,a.R,e);return (-1);}
function AJE(a,b,c,d){var e;e=a.cC.b9(b,c,d);if(e>=0)Dq(d,a.R,e);return e;}
function AMR(a,b,c,d,e){var f;f=a.cC.cc(b,c,d,e);if(f>=0)Dq(e,a.R,f);return f;}
function AJe(a,b){return a.cC.bJ(b);}
function ALj(a){var b;b=new Mo;Ym(b,a.cC,a.dT);a.d=b;return b;}
function AO1(a){var b;a.b8=1;b=a.dT;if(b!==null&&!b.b8)IA(b);b=a.cC;if(b!==null&&!b.b8){b=b.eO();if(b!==null){a.cC.b8=1;a.cC=b;}a.cC.dP();}}
var Gu=F();
function T(){var a=this;Gu.call(a);a.Y=0;a.b5=0;a.G=null;a.iX=null;a.jt=null;a.H=0;}
var AU9=null;function NT(){NT=Br(T);AFJ();}
function Bq(a){var b;NT();b=new V2;b.y=BH(64);a.G=b;}
function AEv(a){return null;}
function AD2(a){return a.G;}
function AAi(a){var b,c,d,e,f;if(!a.b5)b=GU(a.G,0)>=2048?0:1;else{a:{c=a.G;b=0;d=c.bl;if(b<d){e=c.y.data;f=(e[0]^(-1))>>>0|0;if(f)b=HT(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HT(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AHB(a){return a.H;}
function ANv(a){return a;}
function XH(a){var b,c;if(a.jt===null){b=a.ef();c=new Vq;c.v6=a;c.mT=b;Bq(c);a.jt=c;El(c,a.b5);}return a.jt;}
function Hd(a){var b,c;if(a.iX===null){b=a.ef();c=new Vo;c.vL=a;c.rM=b;c.sz=a;Bq(c);a.iX=c;El(c,a.Y);a.iX.H=a.H;}return a.iX;}
function AOX(a){return 0;}
function El(a,b){var c;c=a.Y;if(c^b){a.Y=c?0:1;a.b5=a.b5?0:1;}if(!a.H)a.H=1;return a;}
function AGR(a){return a.Y;}
function JH(b,c){NT();return b.j(c);}
function HR(b,c){var d,e;NT();if(b.cW()!==null&&c.cW()!==null){b=b.cW();c=c.cW();d=W(b.y.data.length,c.y.data.length);e=0;a:{while(e<d){if(b.y.data[e]&c.y.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Q5(b,c){var d,e,f;NT();d=0;while(true){AMx();e=AU$.data;if(d>=e.length){f=new IH;Bl(f,B(31));f.wo=B(31);f.v9=b;J(f);}e=e[d].data;if(Bo(b,e[0]))break;d=d+1|0;}return ABl(e[1],c);}
function AFJ(){var b;b=new GL;AMx();AU9=b;}
function Yc(){var a=this;T.call(a);a.kH=0;a.mu=0;a.fR=0;a.kl=0;a.dn=0;a.eJ=0;a.D=null;a.bs=null;}
function De(){var a=new Yc();APA(a);return a;}
function AOg(a,b){var c=new Yc();AFy(c,a,b);return c;}
function APA(a){Bq(a);a.D=APU();}
function AFy(a,b,c){Bq(a);a.D=APU();a.kH=b;a.mu=c;}
function Cs(a,b){a:{if(a.kH){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dn){LG(a.D,He(b&65535));break a;}KU(a.D,He(b&65535));break a;}if(a.mu&&b>128){a.fR=1;b=Gn(Gm(b));}}}if(!(!RA(b)&&!N9(b))){if(a.kl)LG(a.G,b-55296|0);else KU(a.G,b-55296|0);}if(a.dn)LG(a.D,b);else KU(a.D,b);if(!a.H&&Lm(b))a.H=1;return a;}
function ACV(a,b){var c,d,e;if(!a.H&&b.H)a.H=1;if(a.kl){if(!b.b5)FG(a.G,b.ef());else C6(a.G,b.ef());}else if(!b.b5)FA(a.G,b.ef());else{Fg(a.G,b.ef());C6(a.G,b.ef());a.b5=a.b5?0:1;a.kl=1;}if(!a.eJ&&b.cW()!==null){if(a.dn){if(!b.Y)FG(a.D,b.cW());else C6(a.D,b.cW());}else if(!b.Y)FA(a.D,b.cW());else{Fg(a.D,b.cW());C6(a.D,b.cW());a.Y=a.Y?0:1;a.dn=1;}}else{c=a.Y;d=a.bs;if(d!==null){if(!c){e=new NM;e.ue=a;e.sW=c;e.sk=d;e.r8=b;Bq(e);a.bs=e;}else{e=new NN;e.wv=a;e.pk=c;e.o6=d;e.os=b;Bq(e);a.bs=e;}}else{if(c&&!a.dn&&
Lq(a.D)){d=new NJ;d.vg=a;d.pd=b;Bq(d);a.bs=d;}else if(!c){d=new NH;d.j7=a;d.jg=c;d.nl=b;Bq(d);a.bs=d;}else{d=new NI;d.kT=a;d.jm=c;d.sc=b;Bq(d);a.bs=d;}a.eJ=1;}}return a;}
function BO(a,b,c){var d,e,f,g,h;if(b>c){d=new BC;U(d);J(d);}a:{b:{if(!a.kH){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cs(a,b);b=b+1|0;}}if(!a.dn)Hy(a.D,b,c+1|0);else{d=a.D;c=c+1|0;if(b>c){d=new Bw;U(d);J(d);}e=d.bl;if(b<e){f=W(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.y.data;h[g]=h[g]&(HN(d,b)|Ho(d,f));}else{h=d.y.data;h[g]=h[g]&HN(d,b);e=g+1|0;while(e<c){d.y.data[e]=0;e=e+1|0;}if(f&31){h=d.y.data;h[c]=h[c]&Ho(d,f);}}GP(d);}}}}return a;}
function Xd(a,b){var c,d,e;if(!a.H&&b.H)a.H=1;if(b.fR)a.fR=1;c=a.b5;if(!(c^b.b5)){if(!c)FA(a.G,b.G);else C6(a.G,b.G);}else if(c)FG(a.G,b.G);else{Fg(a.G,b.G);C6(a.G,b.G);a.b5=1;}if(!a.eJ&&CR(b)!==null){c=a.Y;if(!(c^b.Y)){if(!c)FA(a.D,CR(b));else C6(a.D,CR(b));}else if(c)FG(a.D,CR(b));else{Fg(a.D,CR(b));C6(a.D,CR(b));a.Y=1;}}else{c=a.Y;d=a.bs;if(d!==null){if(!c){e=new NC;e.tX=a;e.rm=c;e.sa=d;e.sI=b;Bq(e);a.bs=e;}else{e=new Op;e.ur=a;e.sF=c;e.mf=d;e.mx=b;Bq(e);a.bs=e;}}else{if(!a.dn&&Lq(a.D)){if(!c){d=new NK;d.wB
=a;d.oe=b;Bq(d);a.bs=d;}else{d=new NL;d.uw=a;d.st=b;Bq(d);a.bs=d;}}else if(!c){d=new NO;d.ro=a;d.pG=b;d.o$=c;Bq(d);a.bs=d;}else{d=new NP;d.p6=a;d.qn=b;d.qF=c;Bq(d);a.bs=d;}a.eJ=1;}}}
function VT(a,b){var c,d,e;if(!a.H&&b.H)a.H=1;if(b.fR)a.fR=1;c=a.b5;if(!(c^b.b5)){if(!c)C6(a.G,b.G);else FA(a.G,b.G);}else if(!c)FG(a.G,b.G);else{Fg(a.G,b.G);C6(a.G,b.G);a.b5=0;}if(!a.eJ&&CR(b)!==null){c=a.Y;if(!(c^b.Y)){if(!c)C6(a.D,CR(b));else FA(a.D,CR(b));}else if(!c)FG(a.D,CR(b));else{Fg(a.D,CR(b));C6(a.D,CR(b));a.Y=0;}}else{c=a.Y;d=a.bs;if(d!==null){if(!c){e=new NE;e.ud=a;e.rq=c;e.mR=d;e.pg=b;Bq(e);a.bs=e;}else{e=new NF;e.uC=a;e.qV=c;e.l7=d;e.rl=b;Bq(e);a.bs=e;}}else{if(!a.dn&&Lq(a.D)){if(!c){d=new Nz;d.ux
=a;d.nM=b;Bq(d);a.bs=d;}else{d=new NA;d.ws=a;d.nS=b;Bq(d);a.bs=d;}}else if(!c){d=new NG;d.tB=a;d.sQ=b;d.qg=c;Bq(d);a.bs=d;}else{d=new Ny;d.qf=a;d.q3=b;d.pm=c;Bq(d);a.bs=d;}a.eJ=1;}}}
function CW(a,b){var c;c=a.bs;if(c!==null)return a.Y^c.j(b);return a.Y^Dn(a.D,b);}
function CR(a){if(!a.eJ)return a.D;return null;}
function AGH(a){return a.G;}
function ANV(a){var b,c;if(a.bs!==null)return a;b=CR(a);c=new ND;c.tT=a;c.hK=b;Bq(c);return El(c,a.Y);}
function AKr(a){var b,c,d;b=new M;O(b);c=GU(a.D,0);while(c>=0){HV(b,Gf(c));BA(b,124);c=GU(a.D,c+1|0);}d=b.K;if(d>0)Vf(b,d-1|0);return N(b);}
function AGU(a){return a.fR;}
function IH(){var a=this;Bn.call(a);a.wo=null;a.v9=null;}
function DR(){Bz.call(this);this.F=null;}
function C8(a,b,c,d){Ka(a,c);a.F=b;a.g7=d;}
function APz(a){return a.F;}
function AMU(a,b){return !a.F.bJ(b)&&!a.d.bJ(b)?0:1;}
function AOi(a,b){return 1;}
function AJ1(a){var b;a.b8=1;b=a.d;if(b!==null&&!b.b8){b=b.eO();if(b!==null){a.d.b8=1;a.d=b;}a.d.dP();}b=a.F;if(b!==null){if(!b.b8){b=b.eO();if(b!==null){a.F.b8=1;a.F=b;}a.F.dP();}else if(b instanceof Gj&&b.dT.jB)a.F=b.d;}}
function CY(){DR.call(this);this.S=null;}
function ARt(a,b,c){var d=new CY();EJ(d,a,b,c);return d;}
function EJ(a,b,c,d){C8(a,b,c,d);a.S=b;}
function ADq(a,b,c,d){var e,f;e=0;a:{while((b+a.S.bO()|0)<=d.u){f=a.S.bo(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.S.bO()|0;e=e+(-1)|0;}return f;}
function EV(){CY.call(this);this.iQ=null;}
function AQB(a,b,c,d){var e=new EV();Re(e,a,b,c,d);return e;}
function Re(a,b,c,d,e){EJ(a,c,d,e);a.iQ=b;}
function AEg(a,b,c,d){var e,f,g,h,i;e=a.iQ;f=e.d8;g=e.d3;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.S.bO()|0)>d.u)break a;i=a.S.bo(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.S.bO()|0;h=h+(-1)|0;}return i;}if((b+a.S.bO()|0)>d.u){d.c0=1;return (-1);}i=a.S.bo(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CO=F(DR);
function ADG(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.F.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Es=F(CY);
function AJK(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function APV(a,b){a.d=b;a.F.J(b);}
var Vr=F(CY);
function APg(a,b,c,d){while((b+a.S.bO()|0)<=d.u&&a.S.bo(b,c)>0){b=b+a.S.bO()|0;}return a.d.c(b,c,d);}
function AKn(a,b,c,d){var e,f,g;e=a.d.b9(b,c,d);if(e<0)return (-1);f=e-a.S.bO()|0;while(f>=b&&a.S.bo(f,c)>0){g=f-a.S.bO()|0;e=f;f=g;}return e;}
function V(){var a=this;C.call(a);a.k3=null;a.j5=null;}
function ABl(a,b){if(!b&&a.k3===null)a.k3=a.A();else if(b&&a.j5===null)a.j5=El(a.A(),1);if(b)return a.j5;return a.k3;}
var C9=F(BC);
function Mk(){var a=this;Gu.call(a);a.d8=0;a.d3=0;}
function AKy(a){var b,c,d,e,f;b=a.d8;c=a.d3;d=c==2147483647?B(31):Lp(AB5(c));e=new M;O(e);BA(e,123);f=S(e,b);BA(f,44);BA(G(f,d),125);return N(e);}
var Np=F(Bz);
function AIY(a,b,c,d){return b;}
function ALe(a,b){return 0;}
function V2(){var a=this;C.call(a);a.y=null;a.bl=0;}
function APU(){var a=new V2();AEW(a);return a;}
function AEW(a){a.y=BH(0);}
function KU(a,b){var c,d;c=b/32|0;if(b>=a.bl){HY(a,c+1|0);a.bl=b+1|0;}d=a.y.data;d[c]=d[c]|1<<(b%32|0);}
function Hy(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new Bw;U(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bl){HY(a,f+1|0);a.bl=c;}if(d==f){g=a.y.data;g[d]=g[d]|Ho(a,b)&HN(a,c);}else{g=a.y.data;g[d]=g[d]|Ho(a,b);h=d+1|0;while(h<f){a.y.data[h]=(-1);h=h+1|0;}if(c&31){g=a.y.data;g[f]=g[f]|HN(a,c);}}}
function Ho(a,b){return (-1)<<(b%32|0);}
function HN(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function LG(a,b){var c,d;c=b/32|0;d=a.y.data;if(c<d.length){d[c]=d[c]&JE((-2),b%32|0);if(b==(a.bl-1|0))GP(a);}}
function Dn(a,b){var c,d;c=b/32|0;d=a.y.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GU(a,b){var c,d,e,f;c=a.bl;if(b>=c)return (-1);d=b/32|0;e=a.y.data;f=e[d]>>>(b%32|0)|0;if(f)return HT(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HT(e[f])|0;f=f+1|0;}return (-1);}
function HY(a,b){var c;c=a.y.data.length;if(c>=b)return;c=Ba((b*3|0)/2|0,(c*2|0)+1|0);a.y=ACG(a.y,c);}
function GP(a){var b,c,d;b=(a.bl+31|0)/32|0;a.bl=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=M3(a.y.data[c]);if(d<32)break;c=c+(-1)|0;a.bl=a.bl-32|0;}a.bl=a.bl-d|0;}}
function C6(a,b){var c,d,e,f;c=W(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&b.y.data[d];d=d+1|0;}while(true){f=a.y.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bl=W(a.bl,b.bl);GP(a);}
function FG(a,b){var c,d,e;c=W(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&(b.y.data[d]^(-1));d=d+1|0;}GP(a);}
function FA(a,b){var c,d,e;c=Ba(a.bl,b.bl);a.bl=c;HY(a,(c+31|0)/32|0);c=W(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]|b.y.data[d];d=d+1|0;}}
function Fg(a,b){var c,d,e;c=Ba(a.bl,b.bl);a.bl=c;HY(a,(c+31|0)/32|0);c=W(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]^b.y.data[d];d=d+1|0;}GP(a);}
function Lq(a){return a.bl?0:1;}
function L9(){var a=this;BN.call(a);a.nV=null;a.tS=0;}
function Pr(){var a=this;BN.call(a);a.lo=null;a.kW=null;}
function AAX(a,b){var c=new Pr();ACA(c,a,b);return c;}
function ACA(a,b,c){BK(a);a.lo=b;a.kW=c;}
function AEb(a,b,c,d){var e,f,g,h,i;e=a.lo.c(b,c,d);if(e<0)a:{f=a.kW;g=d.cu;e=d.u;h=b+1|0;e=BD(h,e);if(e>0){d.c0=1;e=(-1);}else{i=L(c,b);if(!f.nV.j(i))e=(-1);else{if(CC(i)){if(e<0&&CZ(L(c,h))){e=(-1);break a;}}else if(CZ(i)&&b>g&&CC(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AKX(a,b){a.d=b;a.kW.d=b;a.lo.J(b);}
function AEK(a,b){return 1;}
function AEu(a,b){return 1;}
function Ds(){var a=this;BN.call(a);a.dh=null;a.va=0;}
function AIS(a){var b=new Ds();Ts(b,a);return b;}
function Ts(a,b){BK(a);a.dh=b.ip();a.va=b.Y;}
function AGz(a,b,c,d){var e,f,g,h;e=d.u;if(b<e){f=b+1|0;g=L(c,b);if(a.j(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(G3(g,f)&&a.j(Em(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AG6(a,b){return a.dh.j(b);}
function AD8(a,b){if(b instanceof DJ)return JH(a.dh,b.fe);if(b instanceof Ec)return JH(a.dh,b.cT);if(b instanceof Ds)return HR(a.dh,b.dh);if(!(b instanceof D7))return 1;return HR(a.dh,b.et);}
function AIL(a){return a.dh;}
function ANp(a,b){a.d=b;}
function AGL(a,b){return 1;}
var IF=F(Ds);
function AIz(a,b){return a.dh.j(Gn(Gm(b)));}
function X5(){var a=this;BS.call(a);a.oJ=null;a.uU=0;}
function AHC(a){var b=new X5();AKD(b,a);return b;}
function AKD(a,b){Dr(a);a.oJ=b.ip();a.uU=b.Y;}
function AIZ(a,b,c){return !a.oJ.j(EO(Er(L(c,b))))?(-1):1;}
function D7(){var a=this;BS.call(a);a.et=null;a.vs=0;}
function ANO(a){var b=new D7();ALF(b,a);return b;}
function ALF(a,b){Dr(a);a.et=b.ip();a.vs=b.Y;}
function LJ(a,b,c){return !a.et.j(L(c,b))?(-1):1;}
function ALh(a,b){if(b instanceof Ec)return JH(a.et,b.cT);if(b instanceof D7)return HR(a.et,b.et);if(!(b instanceof Ds)){if(!(b instanceof DJ))return 1;return 0;}return HR(a.et,b.dh);}
function NX(){var a=this;BN.call(a);a.gc=null;a.lf=null;a.iN=0;}
function AN0(a,b){var c=new NX();ADI(c,a,b);return c;}
function ADI(a,b,c){BK(a);a.gc=b;a.iN=c;}
function AJJ(a,b){a.d=b;}
function PE(a){if(a.lf===null)a.lf=FK(a.gc);return a.lf;}
function ADf(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.u;f=BH(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?EW([k,l]):EW([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iN;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gc.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iN==3){k=f[0];m=a.gc.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iN==2){b=f[0];m=a.gc.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AEE(a,b){return b instanceof NX&&!Bo(PE(b),PE(a))?0:1;}
function ANZ(a,b){return 1;}
function Ec(){BS.call(this);this.cT=0;}
function Yy(a){var b=new Ec();ALJ(b,a);return b;}
function ALJ(a,b){Dr(a);a.cT=b;}
function AII(a){return 1;}
function AHy(a,b,c){return a.cT!=L(c,b)?(-1):1;}
function AGu(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return Hj(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=Gr(c,a.cT,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AIO(a,b,c,d,e){var f;if(!(d instanceof Bv))return Ht(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FP(d,a.cT,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANR(a,b){if(b instanceof Ec)return b.cT!=a.cT?0:1;if(!(b instanceof D7)){if(b instanceof Ds)return b.j(a.cT);if(!(b instanceof DJ))return 1;return 0;}return LJ(b,0,V3(a.cT))<=0?0:1;}
function ACl(){BS.call(this);this.lY=0;}
function AL_(a){var b=new ACl();AKl(b,a);return b;}
function AKl(a,b){Dr(a);a.lY=EO(Er(b));}
function ADa(a,b,c){return a.lY!=EO(Er(L(c,b)))?(-1):1;}
function Xf(){var a=this;BS.call(a);a.sL=0;a.mO=0;}
function AE6(a){var b=new Xf();AMt(b,a);return b;}
function AMt(a,b){Dr(a);a.sL=b;a.mO=He(b);}
function ADA(a,b,c){return a.sL!=L(c,b)&&a.mO!=L(c,b)?(-1):1;}
function E4(){var a=this;BN.call(a);a.gX=0;a.jQ=null;a.jj=null;a.jd=0;}
function ASd(a,b){var c=new E4();Ne(c,a,b);return c;}
function Ne(a,b,c){BK(a);a.gX=1;a.jj=b;a.jd=c;}
function AO0(a,b){a.d=b;}
function AKZ(a,b,c,d){var e,f,g,h,i,j,k,l;e=BH(4);f=d.u;if(b>=f)return (-1);g=JZ(a,b,c,f);h=b+a.gX|0;i=AB6(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Do(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JZ(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AB6(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gX|0;if(h>=f){b=k;break a;}g=JZ(a,h,c,f);b=k;}}}if(b!=a.jd)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jj.data[g])break;g=g+1|0;}return (-1);}
function VS(a){var b,c;if(a.jQ===null){b=new M;O(b);c=0;while(c<a.jd){HV(b,Gf(a.jj.data[c]));c=c+1|0;}a.jQ=N(b);}return a.jQ;}
function JZ(a,b,c,d){var e,f,g;a.gX=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(G3(e,f)){g=BQ(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CC(g[0])&&CZ(g[1])?Em(g[0],g[1]):g[0];a.gX=2;}}return e;}
function AI0(a,b){return b instanceof E4&&!Bo(VS(b),VS(a))?0:1;}
function AL8(a,b){return 1;}
var Wl=F(E4);
var SU=F(E4);
var W1=F(CO);
function AFC(a,b,c,d){var e;while(true){e=a.F.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var OP=F(CO);
function AKe(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.F.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FF=F(CO);
function ANl(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.F.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AOs(a,b){a.d=b;a.F.J(b);}
var Ou=F(FF);
function AIK(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AKz(a,b){a.d=b;}
function E1(){var a=this;CO.call(a);a.ft=null;a.c5=0;}
function AU_(a,b,c,d,e){var f=new E1();ID(f,a,b,c,d,e);return f;}
function ID(a,b,c,d,e,f){C8(a,c,d,e);a.ft=b;a.c5=f;}
function APK(a,b,c,d){var e,f;e=Me(d,a.c5);if(!a.F.E(d))return a.d.c(b,c,d);if(e>=a.ft.d3)return a.d.c(b,c,d);f=a.c5;e=e+1|0;D3(d,f,e);f=a.F.c(b,c,d);if(f>=0){D3(d,a.c5,0);return f;}f=a.c5;e=e+(-1)|0;D3(d,f,e);if(e>=a.ft.d8)return a.d.c(b,c,d);D3(d,a.c5,0);return (-1);}
var Mu=F(E1);
function AH3(a,b,c,d){var e,f,g;e=0;f=a.ft.d3;a:{while(true){g=a.F.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.ft.d8)return (-1);return a.d.c(b,c,d);}
var Qv=F(CO);
function AO6(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.F.c(b,c,d);}
var PD=F(FF);
function AEM(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.F.c(b,c,d);return e;}
var T3=F(E1);
function ADX(a,b,c,d){var e,f,g;e=Me(d,a.c5);if(!a.F.E(d))return a.d.c(b,c,d);f=a.ft;if(e>=f.d3){D3(d,a.c5,0);return a.d.c(b,c,d);}if(e<f.d8){D3(d,a.c5,e+1|0);g=a.F.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){D3(d,a.c5,0);return g;}D3(d,a.c5,e+1|0);g=a.F.c(b,c,d);}return g;}
var Qx=F(DR);
function APw(a,b,c,d){var e;e=d.u;if(e>b)return a.d.cc(b,e,c,d);return a.d.c(b,c,d);}
function ANx(a,b,c,d){var e;e=d.u;if(a.d.cc(b,e,c,d)>=0)return b;return (-1);}
function Nx(){DR.call(this);this.j2=null;}
function ALk(a,b,c,d){var e,f;e=d.u;f=T5(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cc(b,e,c,d);return a.d.c(b,c,d);}
function ADj(a,b,c,d){var e,f,g,h;e=d.u;f=a.d.b9(b,c,d);if(f<0)return (-1);g=T5(a,f,e,c);if(g>=0)e=g;g=Ba(f,a.d.cc(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.j2.g3(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function T5(a,b,c,d){while(true){if(b>=c)return (-1);if(a.j2.g3(L(d,b)))break;b=b+1|0;}return b;}
var EE=F();
var AVa=null;var AVb=null;function Oy(b){var c;if(!(b&1)){c=AVb;if(c!==null)return c;c=new Ut;AVb=c;return c;}c=AVa;if(c!==null)return c;c=new Us;AVa=c;return c;}
var W3=F(CY);
function ADZ(a,b,c,d){var e;a:{while(true){if((b+a.S.bO()|0)>d.u)break a;e=a.S.bo(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Vn=F(Es);
function AKd(a,b,c,d){var e;if((b+a.S.bO()|0)<=d.u){e=a.S.bo(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var Oh=F(EV);
function AMY(a,b,c,d){var e,f,g,h,i;e=a.iQ;f=e.d8;g=e.d3;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.S.bO()|0)>d.u)break a;i=a.S.bo(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.S.bO()|0)>d.u){d.c0=1;return (-1);}i=a.S.bo(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Pz=F(CY);
function ALc(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.S.bO()|0)<=d.u){e=a.S.bo(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Tb=F(Es);
function AD6(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.F.c(b,c,d);}
var P$=F(EV);
function ANc(a,b,c,d){var e,f,g,h,i,j;e=a.iQ;f=e.d8;g=e.d3;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.S.bO()|0)<=d.u){i=a.S.bo(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.S.bO()|0)>d.u){d.c0=1;return (-1);}j=a.S.bo(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JQ=F(Bz);
function AJh(a,b,c,d){if(b&&!(d.eK&&b==d.cu))return (-1);return a.d.c(b,c,d);}
function AIj(a,b){return 0;}
function YJ(){Bz.call(this);this.sl=0;}
function ANM(a){var b=new YJ();AIF(b,a);return b;}
function AIF(a,b){BK(a);a.sl=b;}
function AEr(a,b,c,d){var e,f,g;e=b<d.u?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.ie?0:d.cu;return (e!=32&&!PF(a,e,b,g,c)?0:1)^(f!=32&&!PF(a,f,b-1|0,g,c)?0:1)^a.sl?(-1):a.d.c(b,c,d);}
function AEB(a,b){return 0;}
function PF(a,b,c,d,e){var f;if(!IY(b)&&b!=95){a:{if(Cp(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(IY(f))return 0;if(Cp(f)!=6)return 1;}}return 1;}return 0;}
var Nt=F(Bz);
function AID(a,b,c,d){if(b!=d.g9)return (-1);return a.d.c(b,c,d);}
function APG(a,b){return 0;}
function V4(){Bz.call(this);this.fA=0;}
function ARG(a){var b=new V4();ABU(b,a);return b;}
function ABU(a,b){BK(a);a.fA=b;}
function ALR(a,b,c,d){var e,f,g;e=!d.eK?I(c):d.u;if(b>=e){BE(d,a.fA,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BE(d,a.fA,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BE(d,a.fA,0);return a.d.c(b,c,d);}
function AFr(a,b){var c;c=!Dd(b,a.fA)?0:1;BE(b,a.fA,(-1));return c;}
var VN=F(Bz);
function AKT(a,b,c,d){if(b<(d.ie?I(c):d.u))return (-1);d.c0=1;d.vU=1;return a.d.c(b,c,d);}
function AC$(a,b){return 0;}
function MH(){Bz.call(this);this.pr=null;}
function AFf(a,b,c,d){a:{if(b!=d.u){if(!b)break a;if(d.eK&&b==d.cu)break a;if(a.pr.qX(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AHh(a,b){return 0;}
var ACb=F(BN);
function AR0(){var a=new ACb();AKJ(a);return a;}
function AKJ(a){BK(a);}
function APa(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.c0=1;return (-1);}g=L(c,b);if(CC(g)){h=b+2|0;if(h<=e&&G3(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AEG(a,b){a.d=b;}
function AKE(a){return (-2147483602);}
function AEF(a,b){return 1;}
function X_(){BN.call(this);this.kv=null;}
function ARA(a){var b=new X_();AFp(b,a);return b;}
function AFp(a,b){BK(a);a.kv=b;}
function AKM(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.c0=1;return (-1);}g=L(c,b);if(CC(g)){b=b+2|0;if(b<=e){h=L(c,f);if(G3(g,h))return a.kv.g3(Em(g,h))?(-1):a.d.c(b,c,d);}}return a.kv.g3(g)?(-1):a.d.c(f,c,d);}
function AMG(a,b){a.d=b;}
function AC7(a){return (-2147483602);}
function APl(a,b){return 1;}
function AB3(){Bz.call(this);this.gO=0;}
function AQ5(a){var b=new AB3();AHd(b,a);return b;}
function AHd(a,b){BK(a);a.gO=b;}
function AI4(a,b,c,d){var e;e=!d.eK?I(c):d.u;if(b>=e){BE(d,a.gO,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BE(d,a.gO,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AHb(a,b){var c;c=!Dd(b,a.gO)?0:1;BE(b,a.gO,(-1));return c;}
function AAk(){Bz.call(this);this.gW=0;}
function AQQ(a){var b=new AAk();AHD(b,a);return b;}
function AHD(a,b){BK(a);a.gW=b;}
function AKR(a,b,c,d){if((!d.eK?I(c)-b|0:d.u-b|0)<=0){BE(d,a.gW,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BE(d,a.gW,1);return a.d.c(b+1|0,c,d);}
function AG3(a,b){var c;c=!Dd(b,a.gW)?0:1;BE(b,a.gW,(-1));return c;}
function Xc(){Bz.call(this);this.e6=0;}
function AP$(a){var b=new Xc();APM(b,a);return b;}
function APM(a,b){BK(a);a.e6=b;}
function AH9(a,b,c,d){var e,f,g;e=!d.eK?I(c)-b|0:d.u-b|0;if(!e){BE(d,a.e6,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BE(d,a.e6,0);return a.d.c(b,c,d);case 13:if(g!=10){BE(d,a.e6,0);return a.d.c(b,c,d);}BE(d,a.e6,0);return a.d.c(b,c,d);default:}return (-1);}
function AFw(a,b){var c;c=!Dd(b,a.e6)?0:1;BE(b,a.e6,(-1));return c;}
function GM(){var a=this;BN.call(a);a.mr=0;a.f_=0;}
function AR9(a,b){var c=new GM();N7(c,a,b);return c;}
function N7(a,b,c){BK(a);a.mr=b;a.f_=c;}
function AD1(a,b,c,d){var e,f,g,h;e=FX(a,d);if(e!==null&&(b+I(e)|0)<=d.u){f=0;while(true){if(f>=I(e)){BE(d,a.f_,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&He(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AL1(a,b){a.d=b;}
function FX(a,b){var c,d;c=a.mr;d=Fq(b,c);c=H1(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.kx)?B8(b.kx,d,c):null;}
function AMm(a,b){var c;c=!Dd(b,a.f_)?0:1;BE(b,a.f_,(-1));return c;}
var AB8=F(GM);
function AQf(a,b){var c=new AB8();AOj(c,a,b);return c;}
function AOj(a,b,c){N7(a,b,c);}
function AFB(a,b,c,d){var e,f;e=FX(a,d);if(e!==null&&(b+I(e)|0)<=d.u){f=!Tr(c,e,b)?(-1):I(e);if(f<0)return (-1);BE(d,a.f_,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AN9(a,b,c,d){var e,f;e=FX(a,d);f=d.cu;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=YI(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ADN(a,b,c,d,e){var f,g;f=FX(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=O0(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AJ8(a,b){return 1;}
var Zr=F(GM);
function AQR(a,b){var c=new Zr();AHa(c,a,b);return c;}
function AHa(a,b,c){N7(a,b,c);}
function AJz(a,b,c,d){var e,f;e=FX(a,d);if(e!==null&&(b+I(e)|0)<=d.u){f=0;while(true){if(f>=I(e)){BE(d,a.f_,I(e));return a.d.c(b+I(e)|0,c,d);}if(EO(Er(L(e,f)))!=EO(Er(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var No=F(F8);
function AGV(a,b,c,d,e){Ml(a,b,c,d,e);return a;}
function AEw(a,b,c,d){Wb(a,b,c,d);return a;}
function AEV(a,b){I4(a,b);}
function ANB(a,b,c){Wt(a,b,c);return a;}
function QE(){var a=this;BS.call(a);a.cf=null;a.jT=null;a.kF=null;}
function AFV(a,b,c){return !JN(a,c,b)?(-1):a.bC;}
function AEm(a,b,c,d){var e,f,g;e=d.u;while(true){if(b>e)return (-1);f=L(a.cf,a.bC-1|0);a:{while(true){g=a.bC;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&JN(a,c,b))break;b=b+RL(a.jT,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bC|0,c,d)>=0)break;b=b+1|0;}return b;}
function AHf(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.cf,0);g=(I(d)-c|0)-a.bC|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&JN(a,d,c))break;c=c-RL(a.kF,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bC|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHK(a,b){var c;if(b instanceof Ec)return b.cT!=L(a.cf,0)?0:1;if(b instanceof D7)return LJ(b,0,B8(a.cf,0,1))<=0?0:1;if(!(b instanceof Ds)){if(!(b instanceof DJ))return 1;return I(a.cf)>1&&b.fe==Em(L(a.cf,0),L(a.cf,1))?1:0;}a:{b:{b=b;if(!b.j(L(a.cf,0))){if(I(a.cf)<=1)break b;if(!b.j(Em(L(a.cf,0),L(a.cf,1))))break b;}c=1;break a;}c=0;}return c;}
function JN(a,b,c){var d;d=0;while(d<a.bC){if(L(b,d+c|0)!=L(a.cf,d))return 0;d=d+1|0;}return 1;}
function Xb(){BS.call(this);this.ii=null;}
function ASa(a){var b=new Xb();ANT(b,a);return b;}
function ANT(a,b){var c,d,e;Dr(a);c=new M;O(c);d=0;while(true){e=BD(d,b.K);if(e>=0){a.ii=N(c);a.bC=c.K;return;}if(d<0)break;if(e>=0)break;BA(c,EO(Er(b.z.data[d])));d=d+1|0;}b=new Bw;U(b);J(b);}
function AJG(a,b,c){var d;d=0;while(true){if(d>=I(a.ii))return I(a.ii);if(L(a.ii,d)!=EO(Er(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function MB(){BS.call(this);this.gL=null;}
function AM0(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gL))return I(a.gL);e=L(a.gL,d);f=b+d|0;if(e!=L(c,f)&&He(L(a.gL,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var GL=F();
var AVc=null;var AVd=null;var AU$=null;function AMx(){AMx=Br(GL);AGf();}
function AGf(){AVc=ARP();AVd=AQY();AU$=H($rt_arraycls(C),[H(C,[B(363),AR$()]),H(C,[B(364),AP7()]),H(C,[B(365),ARM()]),H(C,[B(366),ARU()]),H(C,[B(367),AVd]),H(C,[B(368),AQ9()]),H(C,[B(369),AQW()]),H(C,[B(370),AQj()]),H(C,[B(371),AQe()]),H(C,[B(372),AQq()]),H(C,[B(373),AQD()]),H(C,[B(374),AQn()]),H(C,[B(375),ARs()]),H(C,[B(376),AP1()]),H(C,[B(377),ARQ()]),H(C,[B(378),AQC()]),H(C,[B(379),AQ7()]),H(C,[B(380),AQA()]),H(C,[B(381),AQ8()]),H(C,[B(382),AQt()]),H(C,[B(383),ARZ()]),H(C,[B(384),AQx()]),H(C,[B(385),ARb()]),
H(C,[B(386),ARK()]),H(C,[B(387),ARH()]),H(C,[B(388),ARV()]),H(C,[B(389),AQs()]),H(C,[B(390),ARy()]),H(C,[B(391),AVc]),H(C,[B(392),ARf()]),H(C,[B(393),AQk()]),H(C,[B(394),AVc]),H(C,[B(395),APZ()]),H(C,[B(396),AVd]),H(C,[B(397),AQL()]),H(C,[B(398),P(0,127)]),H(C,[B(399),P(128,255)]),H(C,[B(400),P(256,383)]),H(C,[B(401),P(384,591)]),H(C,[B(402),P(592,687)]),H(C,[B(403),P(688,767)]),H(C,[B(404),P(768,879)]),H(C,[B(405),P(880,1023)]),H(C,[B(406),P(1024,1279)]),H(C,[B(407),P(1280,1327)]),H(C,[B(408),P(1328,1423)]),
H(C,[B(409),P(1424,1535)]),H(C,[B(410),P(1536,1791)]),H(C,[B(411),P(1792,1871)]),H(C,[B(412),P(1872,1919)]),H(C,[B(413),P(1920,1983)]),H(C,[B(414),P(2304,2431)]),H(C,[B(415),P(2432,2559)]),H(C,[B(416),P(2560,2687)]),H(C,[B(417),P(2688,2815)]),H(C,[B(418),P(2816,2943)]),H(C,[B(419),P(2944,3071)]),H(C,[B(420),P(3072,3199)]),H(C,[B(421),P(3200,3327)]),H(C,[B(422),P(3328,3455)]),H(C,[B(423),P(3456,3583)]),H(C,[B(424),P(3584,3711)]),H(C,[B(425),P(3712,3839)]),H(C,[B(426),P(3840,4095)]),H(C,[B(427),P(4096,4255)]),
H(C,[B(428),P(4256,4351)]),H(C,[B(429),P(4352,4607)]),H(C,[B(430),P(4608,4991)]),H(C,[B(431),P(4992,5023)]),H(C,[B(432),P(5024,5119)]),H(C,[B(433),P(5120,5759)]),H(C,[B(434),P(5760,5791)]),H(C,[B(435),P(5792,5887)]),H(C,[B(436),P(5888,5919)]),H(C,[B(437),P(5920,5951)]),H(C,[B(438),P(5952,5983)]),H(C,[B(439),P(5984,6015)]),H(C,[B(440),P(6016,6143)]),H(C,[B(441),P(6144,6319)]),H(C,[B(442),P(6400,6479)]),H(C,[B(443),P(6480,6527)]),H(C,[B(444),P(6528,6623)]),H(C,[B(445),P(6624,6655)]),H(C,[B(446),P(6656,6687)]),
H(C,[B(447),P(7424,7551)]),H(C,[B(448),P(7552,7615)]),H(C,[B(449),P(7616,7679)]),H(C,[B(450),P(7680,7935)]),H(C,[B(451),P(7936,8191)]),H(C,[B(452),P(8192,8303)]),H(C,[B(453),P(8304,8351)]),H(C,[B(454),P(8352,8399)]),H(C,[B(455),P(8400,8447)]),H(C,[B(456),P(8448,8527)]),H(C,[B(457),P(8528,8591)]),H(C,[B(458),P(8592,8703)]),H(C,[B(459),P(8704,8959)]),H(C,[B(460),P(8960,9215)]),H(C,[B(461),P(9216,9279)]),H(C,[B(462),P(9280,9311)]),H(C,[B(463),P(9312,9471)]),H(C,[B(464),P(9472,9599)]),H(C,[B(465),P(9600,9631)]),
H(C,[B(466),P(9632,9727)]),H(C,[B(467),P(9728,9983)]),H(C,[B(468),P(9984,10175)]),H(C,[B(469),P(10176,10223)]),H(C,[B(470),P(10224,10239)]),H(C,[B(471),P(10240,10495)]),H(C,[B(472),P(10496,10623)]),H(C,[B(473),P(10624,10751)]),H(C,[B(474),P(10752,11007)]),H(C,[B(475),P(11008,11263)]),H(C,[B(476),P(11264,11359)]),H(C,[B(477),P(11392,11519)]),H(C,[B(478),P(11520,11567)]),H(C,[B(479),P(11568,11647)]),H(C,[B(480),P(11648,11743)]),H(C,[B(481),P(11776,11903)]),H(C,[B(482),P(11904,12031)]),H(C,[B(483),P(12032,12255)]),
H(C,[B(484),P(12272,12287)]),H(C,[B(485),P(12288,12351)]),H(C,[B(486),P(12352,12447)]),H(C,[B(487),P(12448,12543)]),H(C,[B(488),P(12544,12591)]),H(C,[B(489),P(12592,12687)]),H(C,[B(490),P(12688,12703)]),H(C,[B(491),P(12704,12735)]),H(C,[B(492),P(12736,12783)]),H(C,[B(493),P(12784,12799)]),H(C,[B(494),P(12800,13055)]),H(C,[B(495),P(13056,13311)]),H(C,[B(496),P(13312,19893)]),H(C,[B(497),P(19904,19967)]),H(C,[B(498),P(19968,40959)]),H(C,[B(499),P(40960,42127)]),H(C,[B(500),P(42128,42191)]),H(C,[B(501),P(42752,
42783)]),H(C,[B(502),P(43008,43055)]),H(C,[B(503),P(44032,55203)]),H(C,[B(504),P(55296,56191)]),H(C,[B(505),P(56192,56319)]),H(C,[B(506),P(56320,57343)]),H(C,[B(507),P(57344,63743)]),H(C,[B(508),P(63744,64255)]),H(C,[B(509),P(64256,64335)]),H(C,[B(510),P(64336,65023)]),H(C,[B(511),P(65024,65039)]),H(C,[B(512),P(65040,65055)]),H(C,[B(513),P(65056,65071)]),H(C,[B(514),P(65072,65103)]),H(C,[B(515),P(65104,65135)]),H(C,[B(516),P(65136,65279)]),H(C,[B(517),P(65280,65519)]),H(C,[B(518),P(0,1114111)]),H(C,[B(519),
AQo()]),H(C,[B(520),BJ(0,1)]),H(C,[B(521),Ig(62,1)]),H(C,[B(522),BJ(1,1)]),H(C,[B(523),BJ(2,1)]),H(C,[B(524),BJ(3,0)]),H(C,[B(525),BJ(4,0)]),H(C,[B(526),BJ(5,1)]),H(C,[B(527),Ig(448,1)]),H(C,[B(528),BJ(6,1)]),H(C,[B(529),BJ(7,0)]),H(C,[B(530),BJ(8,1)]),H(C,[B(531),Ig(3584,1)]),H(C,[B(532),BJ(9,1)]),H(C,[B(533),BJ(10,1)]),H(C,[B(534),BJ(11,1)]),H(C,[B(535),Ig(28672,0)]),H(C,[B(536),BJ(12,0)]),H(C,[B(537),BJ(13,0)]),H(C,[B(538),BJ(14,0)]),H(C,[B(539),AQS(983040,1,1)]),H(C,[B(540),BJ(15,0)]),H(C,[B(541),BJ(16,
1)]),H(C,[B(542),BJ(18,1)]),H(C,[B(543),AQ4(19,0,1)]),H(C,[B(544),Ig(1643118592,1)]),H(C,[B(545),BJ(20,0)]),H(C,[B(546),BJ(21,0)]),H(C,[B(547),BJ(22,0)]),H(C,[B(548),BJ(23,0)]),H(C,[B(549),BJ(24,1)]),H(C,[B(550),Ig(2113929216,1)]),H(C,[B(551),BJ(25,1)]),H(C,[B(552),BJ(26,0)]),H(C,[B(553),BJ(27,0)]),H(C,[B(554),BJ(28,1)]),H(C,[B(555),BJ(29,0)]),H(C,[B(556),BJ(30,0)])]);}
function LS(){BS.call(this);this.o2=0;}
function AM7(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.o2!=Gn(Gm(Em(e,d)))?(-1):2;}
function Ko(){BN.call(this);this.fN=0;}
function AKI(a){var b=new Ko();AEP(b,a);return b;}
function AEP(a,b){BK(a);a.fN=b;}
function AK8(a,b){a.d=b;}
function AFs(a,b,c,d){var e,f;e=b+1|0;if(e>d.u){d.c0=1;return (-1);}f=L(c,b);if(b>d.cu&&CC(L(c,b-1|0)))return (-1);if(a.fN!=f)return (-1);return a.d.c(e,c,d);}
function AHG(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return Hj(a,b,c,d);e=d.cu;f=d.u;while(true){if(b>=f)return (-1);g=Gr(c,a.fN,b);if(g<0)return (-1);if(g>e&&CC(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AF2(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Ht(a,b,c,d,e);f=e.cu;a:{while(true){if(c<b)return (-1);g=FP(d,a.fN,c);if(g<0)break a;if(g<b)break a;if(g>f&&CC(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ADL(a,b){if(b instanceof Ec)return 0;if(b instanceof D7)return 0;if(b instanceof Ds)return 0;if(b instanceof DJ)return 0;if(b instanceof KI)return 0;if(!(b instanceof Ko))return 1;return b.fN!=a.fN?0:1;}
function ANH(a,b){return 1;}
function KI(){BN.call(this);this.fo=0;}
function AIb(a){var b=new KI();AKO(b,a);return b;}
function AKO(a,b){BK(a);a.fo=b;}
function AEU(a,b){a.d=b;}
function ADp(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;g=BD(f,e);if(g>0){d.c0=1;return (-1);}h=L(c,b);if(g<0&&CZ(L(c,f)))return (-1);if(a.fo!=h)return (-1);return a.d.c(f,c,d);}
function ALt(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hj(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=Gr(c,a.fo,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CZ(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AMZ(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Ht(a,b,c,d,e);f=e.u;a:{while(true){if(c<b)return (-1);g=FP(d,a.fo,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CZ(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFW(a,b){if(b instanceof Ec)return 0;if(b instanceof D7)return 0;if(b instanceof Ds)return 0;if(b instanceof DJ)return 0;if(b instanceof Ko)return 0;if(!(b instanceof KI))return 1;return b.fo!=a.fo?0:1;}
function ALB(a,b){return 1;}
function DJ(){var a=this;BS.call(a);a.i4=0;a.hJ=0;a.fe=0;}
function AMo(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.i4==e&&a.hJ==d?2:(-1);}
function AKs(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hj(a,b,c,d);e=d.u;while(b<e){b=Gr(c,a.i4,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hJ==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AER(a,b,c,d,e){var f;if(!(d instanceof Bv))return Ht(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FP(d,a.hJ,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.i4==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AMa(a,b){if(b instanceof DJ)return b.fe!=a.fe?0:1;if(b instanceof Ds)return b.j(a.fe);if(b instanceof Ec)return 0;if(!(b instanceof D7))return 1;return 0;}
var Us=F(EE);
function AE7(a,b){return b!=10?0:1;}
function AMf(a,b,c){return b!=10?0:1;}
var Ut=F(EE);
function ANf(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AOT(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AA9(){var a=this;C.call(a);a.lK=null;a.jl=null;a.go=0;a.tj=0;}
function AKC(a){var b=new AA9();AIB(b,a);return b;}
function AIB(a,b){var c,d;while(true){c=a.go;if(b<c)break;a.go=c<<1|1;}d=c<<1|1;a.go=d;d=d+1|0;a.lK=BH(d);a.jl=BH(d);a.tj=b;}
function Qb(a,b,c){var d,e,f,g;d=0;e=a.go;f=b&e;while(true){g=a.lK.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jl.data[f]=c;}
function RL(a,b){var c,d,e,f;c=a.go;d=b&c;e=0;while(true){f=a.lK.data[d];if(!f)break;if(f==b)return a.jl.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.tj;}
var Xt=F();
var Kl=F(V);
function ARP(){var a=new Kl();AH4(a);return a;}
function AH4(a){}
function Zz(a){return Cs(BO(De(),9,13),32);}
var Jn=F(V);
function AQY(){var a=new Jn();ANE(a);return a;}
function ANE(a){}
function AAd(a){return BO(De(),48,57);}
var AA3=F(V);
function AR$(){var a=new AA3();AHq(a);return a;}
function AHq(a){}
function AMK(a){return BO(De(),97,122);}
var ABw=F(V);
function AP7(){var a=new ABw();AIH(a);return a;}
function AIH(a){}
function ANK(a){return BO(De(),65,90);}
var ABA=F(V);
function ARM(){var a=new ABA();AEo(a);return a;}
function AEo(a){}
function AGA(a){return BO(De(),0,127);}
var Kh=F(V);
function ARU(){var a=new Kh();AFD(a);return a;}
function AFD(a){}
function Yd(a){return BO(BO(De(),97,122),65,90);}
var KR=F(Kh);
function AQ9(){var a=new KR();AIi(a);return a;}
function AIi(a){}
function Y8(a){return BO(Yd(a),48,57);}
var ACU=F(V);
function AQW(){var a=new ACU();AKg(a);return a;}
function AKg(a){}
function AHE(a){return BO(BO(BO(De(),33,64),91,96),123,126);}
var LI=F(KR);
function AQj(){var a=new LI();ALW(a);return a;}
function ALW(a){}
function W9(a){return BO(BO(BO(Y8(a),33,64),91,96),123,126);}
var ZM=F(LI);
function AQe(){var a=new ZM();ANu(a);return a;}
function ANu(a){}
function AJ2(a){return Cs(W9(a),32);}
var Z$=F(V);
function AQq(){var a=new Z$();AM1(a);return a;}
function AM1(a){}
function AFP(a){return Cs(Cs(De(),32),9);}
var YC=F(V);
function AQD(){var a=new YC();AOF(a);return a;}
function AOF(a){}
function AJY(a){return Cs(BO(De(),0,31),127);}
var Yl=F(V);
function AQn(){var a=new Yl();AEA(a);return a;}
function AEA(a){}
function AOW(a){return BO(BO(BO(De(),48,57),97,102),65,70);}
var ABD=F(V);
function ARs(){var a=new ABD();AEf(a);return a;}
function AEf(a){}
function AKA(a){var b;b=new R0;b.u_=a;Bq(b);b.H=1;return b;}
var AC6=F(V);
function AP1(){var a=new AC6();AMd(a);return a;}
function AMd(a){}
function ADh(a){var b;b=new L7;b.vi=a;Bq(b);b.H=1;return b;}
var AA$=F(V);
function ARQ(){var a=new AA$();AEp(a);return a;}
function AEp(a){}
function AIc(a){var b;b=new QZ;b.uR=a;Bq(b);return b;}
var AAZ=F(V);
function AQC(){var a=new AAZ();AJZ(a);return a;}
function AJZ(a){}
function AMr(a){var b;b=new QY;b.uz=a;Bq(b);return b;}
var ABX=F(V);
function AQ7(){var a=new ABX();AFA(a);return a;}
function AFA(a){}
function AFL(a){var b;b=new VV;b.v0=a;Bq(b);Hy(b.G,0,2048);b.H=1;return b;}
var XL=F(V);
function AQA(){var a=new XL();AE1(a);return a;}
function AE1(a){}
function AF_(a){var b;b=new Oa;b.vt=a;Bq(b);b.H=1;return b;}
var Xq=F(V);
function AQ8(){var a=new Xq();AJD(a);return a;}
function AJD(a){}
function AOO(a){var b;b=new Nj;b.wp=a;Bq(b);b.H=1;return b;}
var ABe=F(V);
function AQt(){var a=new ABe();AKh(a);return a;}
function AKh(a){}
function ADb(a){var b;b=new PO;b.vb=a;Bq(b);return b;}
var ABo=F(V);
function ARZ(){var a=new ABo();AHV(a);return a;}
function AHV(a){}
function AI8(a){var b;b=new L0;b.tK=a;Bq(b);b.H=1;return b;}
var YZ=F(V);
function AQx(){var a=new YZ();ADO(a);return a;}
function ADO(a){}
function AGj(a){var b;b=new L5;b.vA=a;Bq(b);b.H=1;return b;}
var AAb=F(V);
function ARb(){var a=new AAb();AE$(a);return a;}
function AE$(a){}
function AHj(a){var b;b=new M6;b.vX=a;Bq(b);b.H=1;return b;}
var ACv=F(V);
function ARK(){var a=new ACv();AJb(a);return a;}
function AJb(a){}
function AI$(a){var b;b=new OC;b.wc=a;Bq(b);b.H=1;return b;}
var ABn=F(V);
function ARH(){var a=new ABn();AKx(a);return a;}
function AKx(a){}
function AN2(a){var b;b=new OL;b.uT=a;Bq(b);return b;}
var Zo=F(V);
function ARV(){var a=new Zo();AE3(a);return a;}
function AE3(a){}
function ALL(a){var b;b=new SQ;b.vG=a;Bq(b);return b;}
var YX=F(V);
function AQs(){var a=new YX();AMs(a);return a;}
function AMs(a){}
function AKv(a){var b;b=new Rz;b.tO=a;Bq(b);b.H=1;return b;}
var AC1=F(V);
function ARy(){var a=new AC1();AHN(a);return a;}
function AHN(a){}
function AMC(a){var b;b=new Mh;b.wC=a;Bq(b);b.H=1;return b;}
var IP=F(V);
function ARf(){var a=new IP();AGr(a);return a;}
function AGr(a){}
function Z_(a){return Cs(BO(BO(BO(De(),97,122),65,90),48,57),95);}
var ABZ=F(IP);
function AQk(){var a=new ABZ();AHZ(a);return a;}
function AHZ(a){}
function AKj(a){var b;b=El(Z_(a),1);b.H=1;return b;}
var ZS=F(Kl);
function APZ(){var a=new ZS();AOu(a);return a;}
function AOu(a){}
function AEl(a){var b;b=El(Zz(a),1);b.H=1;return b;}
var YR=F(Jn);
function AQL(){var a=new YR();AIX(a);return a;}
function AIX(a){}
function AHv(a){var b;b=El(AAd(a),1);b.H=1;return b;}
function Yr(){var a=this;V.call(a);a.oT=0;a.pn=0;}
function P(a,b){var c=new Yr();AOM(c,a,b);return c;}
function AOM(a,b,c){a.oT=b;a.pn=c;}
function AJm(a){return BO(De(),a.oT,a.pn);}
var YM=F(V);
function AQo(){var a=new YM();AO3(a);return a;}
function AO3(a){}
function AOC(a){return BO(BO(De(),65279,65279),65520,65533);}
function ZG(){var a=this;V.call(a);a.li=0;a.jb=0;a.nq=0;}
function BJ(a,b){var c=new ZG();AFv(c,a,b);return c;}
function AQ4(a,b,c){var d=new ZG();AON(d,a,b,c);return d;}
function AFv(a,b,c){a.jb=c;a.li=b;}
function AON(a,b,c,d){a.nq=d;a.jb=c;a.li=b;}
function AGZ(a){var b;b=AR6(a.li);if(a.nq)Hy(b.G,0,2048);b.H=a.jb;return b;}
function ZO(){var a=this;V.call(a);a.lh=0;a.jn=0;a.mw=0;}
function Ig(a,b){var c=new ZO();AGk(c,a,b);return c;}
function AQS(a,b,c){var d=new ZO();ADe(d,a,b,c);return d;}
function AGk(a,b,c){a.jn=c;a.lh=b;}
function ADe(a,b,c,d){a.mw=d;a.jn=c;a.lh=b;}
function ADc(a){var b;b=new QR;AAM(b,a.lh);if(a.mw)Hy(b.G,0,2048);b.H=a.jn;return b;}
var Yw=F();
var X3=F();
function Zn(b){var c,d,e,f,g,h,i;c=AMO(Gi(b));d=Jb(c);e=BH(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Jb(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Mt(c);h=h+1|0;}return e;}
function J5(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function MI(){var a=this;C.call(a);a.nU=0;a.pN=0;a.n9=null;}
function AGX(a,b,c){var d=new MI();ANt(d,a,b,c);return d;}
function ANt(a,b,c,d){a.nU=b;a.pN=c;a.n9=d;}
function ABj(){var a=this;C.call(a);a.m3=null;a.o0=0;}
function AMO(a){var b=new ABj();AFZ(b,a);return b;}
function AFZ(a,b){a.m3=b;}
var Zm=F();
function Jb(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.m3.data;f=b.o0;b.o0=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Mt(b){var c,d;c=Jb(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Yb(){C.call(this);this.Fy=null;}
function Mx(){C.call(this);this.oX=null;}
function AKq(a,b){var c,d,e,f;c=b.data;b=a.oX;d=Eo(c[0]);e=Fy(c[1]);Z2(b.e.f,d,e);Gh(Cg(b),AT9);FS(Cg(b));f=JS(Fu(),b.ep);b=new M;O(b);G(Hv(G(b,B(557)),f),B(226));$rt_globals.console.info($rt_ustr(N(b)));}
function Qe(){C.call(this);this.pl=null;}
function AGW(a,b){QU(a.pl,b);}
function UA(){var a=this;C.call(a);a.u7=null;a.u6=null;a.u5=null;}
function V5(){var a=this;C.call(a);a.tY=null;a.tZ=null;}
var ABa=F(0);
function ACJ(b){return !b?H(Bv,[B(124),B(125),B(558)]):H(Bv,[B(124),B(125),B(558),B(41)]);}
function Vq(){var a=this;T.call(a);a.mT=null;a.v6=null;}
function AGG(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b5^Dn(a.mT,c):0;}
function Vo(){var a=this;T.call(a);a.rM=null;a.sz=null;a.vL=null;}
function ADD(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b5^Dn(a.rM,c):0;return a.sz.j(b)&&!d?1:0;}
function ND(){var a=this;T.call(a);a.hK=null;a.tT=null;}
function AJc(a,b){return a.Y^Dn(a.hK,b);}
function AHn(a){var b,c,d;b=new M;O(b);c=GU(a.hK,0);while(c>=0){HV(b,Gf(c));BA(b,124);c=GU(a.hK,c+1|0);}d=b.K;if(d>0)Vf(b,d-1|0);return N(b);}
function NJ(){var a=this;T.call(a);a.pd=null;a.vg=null;}
function AMq(a,b){return a.pd.j(b);}
function NH(){var a=this;T.call(a);a.jg=0;a.nl=null;a.j7=null;}
function AM6(a,b){return !(a.jg^Dn(a.j7.D,b))&&!(a.jg^a.j7.dn^a.nl.j(b))?0:1;}
function NI(){var a=this;T.call(a);a.jm=0;a.sc=null;a.kT=null;}
function AJF(a,b){return !(a.jm^Dn(a.kT.D,b))&&!(a.jm^a.kT.dn^a.sc.j(b))?1:0;}
function NM(){var a=this;T.call(a);a.sW=0;a.sk=null;a.r8=null;a.ue=null;}
function AGe(a,b){return a.sW^(!a.sk.j(b)&&!a.r8.j(b)?0:1);}
function NN(){var a=this;T.call(a);a.pk=0;a.o6=null;a.os=null;a.wv=null;}
function AC8(a,b){return a.pk^(!a.o6.j(b)&&!a.os.j(b)?0:1)?0:1;}
function NK(){var a=this;T.call(a);a.oe=null;a.wB=null;}
function AHr(a,b){return CW(a.oe,b);}
function NL(){var a=this;T.call(a);a.st=null;a.uw=null;}
function AJI(a,b){return CW(a.st,b)?0:1;}
function NO(){var a=this;T.call(a);a.pG=null;a.o$=0;a.ro=null;}
function AOc(a,b){return !CW(a.pG,b)&&!(a.o$^Dn(a.ro.D,b))?0:1;}
function NP(){var a=this;T.call(a);a.qn=null;a.qF=0;a.p6=null;}
function AFG(a,b){return !CW(a.qn,b)&&!(a.qF^Dn(a.p6.D,b))?1:0;}
function NC(){var a=this;T.call(a);a.rm=0;a.sa=null;a.sI=null;a.tX=null;}
function APY(a,b){return !(a.rm^a.sa.j(b))&&!CW(a.sI,b)?0:1;}
function Op(){var a=this;T.call(a);a.sF=0;a.mf=null;a.mx=null;a.ur=null;}
function AHu(a,b){return !(a.sF^a.mf.j(b))&&!CW(a.mx,b)?1:0;}
function Nz(){var a=this;T.call(a);a.nM=null;a.ux=null;}
function AFE(a,b){return CW(a.nM,b);}
function NA(){var a=this;T.call(a);a.nS=null;a.ws=null;}
function AG_(a,b){return CW(a.nS,b)?0:1;}
function NG(){var a=this;T.call(a);a.sQ=null;a.qg=0;a.tB=null;}
function AIG(a,b){return CW(a.sQ,b)&&a.qg^Dn(a.tB.D,b)?1:0;}
function Ny(){var a=this;T.call(a);a.q3=null;a.pm=0;a.qf=null;}
function ANQ(a,b){return CW(a.q3,b)&&a.pm^Dn(a.qf.D,b)?0:1;}
function NE(){var a=this;T.call(a);a.rq=0;a.mR=null;a.pg=null;a.ud=null;}
function AEz(a,b){return a.rq^a.mR.j(b)&&CW(a.pg,b)?1:0;}
function NF(){var a=this;T.call(a);a.qV=0;a.l7=null;a.rl=null;a.uC=null;}
function ALA(a,b){return a.qV^a.l7.j(b)&&CW(a.rl,b)?0:1;}
var Ld=F(0);
function Rx(){var a=this;C.call(a);a.un=null;a.sd=null;a.h6=null;a.ci=null;a.hL=0;a.j0=0;}
function L3(a,b){var c,d,e;c=I(a.h6);if(b>=0&&b<=c){WE(a.ci,null,(-1),(-1));d=a.ci;d.iR=1;d.dN=b;c=d.g9;if(c<0)c=b;d.g9=c;b=a.sd.b9(b,a.h6,d);if(b==(-1))a.ci.c0=1;if(b>=0){d=a.ci;if(d.h9){e=d.dj.data;if(e[0]==(-1)){c=d.dN;e[0]=c;e[1]=c;}d.g9=Iz(d);return 1;}}a.ci.dN=(-1);return 0;}d=new Bw;Bl(d,C0(b));J(d);}
function ACt(a){return Of(a.ci,0);}
function YS(a){return Q3(a.ci,0);}
function Xz(a){return a.ci.ie;}
function Cd(){Cr.call(this);this.ld=null;}
var AVe=null;var AVf=null;var AVg=null;var AVh=null;var AVi=null;var AVj=null;var AVk=null;var AVl=null;var AVm=null;var AVn=null;var AVo=null;var AVp=null;var AVq=null;var AVr=null;var AVs=null;var ATW=null;function ABL(){ABL=Br(Cd);AMn();}
function Dx(a,b,c){var d=new Cd();Oe(d,a,b,c);return d;}
function AHU(a,b,c,d){var e=new Cd();XZ(e,a,b,c,d);return e;}
function Oe(a,b,c,d){ABL();DE(a,b,c);a.ld=Sy(d,null);}
function XZ(a,b,c,d,e){ABL();DE(a,b,c);a.ld=Sy(d,e);}
function AMn(){var b;b=new Cd;Dp();Oe(b,B(309),0,ATX);AVe=b;AVf=Dx(B(310),1,Cw(0,49,191));AVg=Dx(B(311),2,Bm(B(559)));AVh=Dx(B(48),3,Bm(B(560)));AVi=Dx(B(314),4,ATX);AVj=Dx(B(316),5,Bm(B(561)));AVk=Dx(B(317),6,Bm(B(327)));AVl=Dx(B(49),7,Bm(B(562)));AVm=Dx(B(320),8,Bm(B(563)));AVn=AHU(B(322),9,ATG,Cw(237,235,252));AVo=AHU(B(323),10,Bm(B(324)),Bm(B(564)));AVp=Dx(B(326),11,Bm(B(327)));AVq=Dx(B(328),12,Bm(B(329)));AVr=Dx(B(330),13,Bm(B(331)));b=Dx(B(332),14,Bm(B(333)));AVs=b;ATW=H(Cd,[AVe,AVf,AVg,AVh,AVi,AVj,AVk,
AVl,AVm,AVn,AVo,AVp,AVq,AVr,b]);}
function Nq(){C.call(this);this.p1=null;}
function AMB(a,b){TD(a.p1,b);}
var Mo=F(Gj);
function AG1(a,b,c,d){var e,f,g;e=0;f=d.u;a:{while(true){if(b>f){b=e;break a;}g=Fq(d,a.R);Dq(d,a.R,b);e=a.cC.c(b,c,d);if(e>=0)break;Dq(d,a.R,g);b=b+1|0;}}return b;}
function API(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fq(e,a.R);Dq(e,a.R,c);f=a.cC.c(c,d,e);if(f>=0)break;Dq(e,a.R,g);c=c+(-1)|0;}}return c;}
function AFq(a){return null;}
var Pl=F(Bn);
var Wd=F(Bn);
function Un(){FC.call(this);this.wk=0;}
function O_(){FC.call(this);this.wg=0;}
var WU=F(Bn);
function Ug(){var a=this;C.call(a);a.pL=null;a.rN=null;a.s$=0;a.jy=0;}
function JU(a,b){return B4(a.pL)<b?0:1;}
function N8(){var a=this;C.call(a);a.nh=null;a.ni=null;}
function RH(){var a=this;C.call(a);a.uS=null;a.oa=null;}
function RG(){C.call(this);this.tL=null;}
function Uk(){var a=this;C.call(a);a.dj=null;a.i1=null;a.kr=null;a.kx=null;a.nn=0;a.h9=0;a.cu=0;a.u=0;a.dN=0;a.ie=0;a.eK=0;a.c0=0;a.vU=0;a.g9=0;a.iR=0;}
function BE(a,b,c){a.i1.data[b]=c;}
function Dd(a,b){return a.i1.data[b];}
function Iz(a){return Q3(a,0);}
function Q3(a,b){QQ(a,b);return a.dj.data[(b*2|0)+1|0];}
function Dq(a,b,c){a.dj.data[b*2|0]=c;}
function I5(a,b,c){a.dj.data[(b*2|0)+1|0]=c;}
function Fq(a,b){return a.dj.data[b*2|0];}
function H1(a,b){return a.dj.data[(b*2|0)+1|0];}
function AA4(a){return Of(a,0);}
function Of(a,b){QQ(a,b);return a.dj.data[b*2|0];}
function Me(a,b){return a.kr.data[b];}
function D3(a,b,c){a.kr.data[b]=c;}
function QQ(a,b){var c;if(!a.h9){c=new DP;U(c);J(c);}if(b>=0&&b<a.nn)return;c=new Bw;Bl(c,C0(b));J(c);}
function WE(a,b,c,d){a.h9=0;a.iR=2;Hb(a.dj,(-1));Hb(a.i1,(-1));if(b!==null)a.kx=b;if(c>=0){a.cu=c;a.u=d;}a.dN=a.cu;}
function Zb(a){return a.iR;}
function UN(){C.call(this);this.m_=null;}
function AOo(a){DB(a.m_);}
var YO=F();
var O4=F(0);
function Wf(){var a=this;C.call(a);a.qp=null;a.qq=0;a.qr=null;}
function Lt(a,b){var c,d,e,f,g,h,i,j,k;c=a.qp;d=a.qq;e=a.qr;if(b<=d){f=Cg(c);g=new Pw;g.sX=c;h=R(C,1);h.data[0]=e;C1(f,g,B(565),h);}else{i=Cg(c);g=new Px;g.qt=c;j=R(C,2);k=j.data;k[0]=e;h=BH(1);h.data[0]=250;k[1]=h;C1(i,g,B(566),j);f=Cg(c);g=new Pv;g.nt=c;h=R(C,1);h.data[0]=e;C1(f,g,B(567),h);}}
function R0(){T.call(this);this.u_=null;}
function AOl(a,b){return Cp(b)!=2?0:1;}
function L7(){T.call(this);this.vi=null;}
function AEj(a,b){return Cp(b)!=1?0:1;}
function QZ(){T.call(this);this.uR=null;}
function AD5(a,b){return P7(b);}
function QY(){T.call(this);this.uz=null;}
function AGY(a,b){return 0;}
function VV(){T.call(this);this.v0=null;}
function AIr(a,b){return !Cp(b)?0:1;}
function Oa(){T.call(this);this.vt=null;}
function AOp(a,b){return Cp(b)!=9?0:1;}
function Nj(){T.call(this);this.wp=null;}
function AK2(a,b){return Gb(b);}
function PO(){T.call(this);this.vb=null;}
function AMw(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function L0(){T.call(this);this.tK=null;}
function APj(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gb(b);}return b;}
function L5(){T.call(this);this.vA=null;}
function AF1(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gb(b);}return b;}
function M6(){T.call(this);this.vX=null;}
function AOA(a,b){a:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function OC(){T.call(this);this.wc=null;}
function AJU(a,b){return IY(b);}
function OL(){T.call(this);this.uT=null;}
function ALZ(a,b){return OM(b);}
function SQ(){T.call(this);this.vG=null;}
function AOd(a,b){return Cp(b)!=3?0:1;}
function Rz(){T.call(this);this.tO=null;}
function AO4(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gb(b);}return b;}
function Mh(){T.call(this);this.wC=null;}
function AFN(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gb(b);}return b;}
function Lv(){T.call(this);this.kK=0;}
function AR6(a){var b=new Lv();AAM(b,a);return b;}
function AAM(a,b){Bq(a);a.kK=b;}
function AK5(a,b){return a.Y^(a.kK!=Cp(b&65535)?0:1);}
var QR=F(Lv);
function ANq(a,b){return a.Y^(!(a.kK>>Cp(b&65535)&1)?0:1);}
function O5(){C.call(this);this.tE=null;}
function AJt(a){var b,c;b=a.tE;c=b.nh;b=b.ni;c.DI(b.hI,b.jF,null);}
function UV(){C.call(this);this.mW=null;}
function ALQ(a,b){var c,d,e,f;c=a.mW;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.oa;c=By();b=Ct(b);e=new M;O(e);G(G(e,B(568)),b);Bu(c,N(e));b=By();f=d.length;c=new M;O(c);S(G(c,B(569)),f);Bu(b,N(c));}
function UY(){var a=this;C.call(a);a.rG=null;a.rH=null;}
function AKF(a,b){var c,d;c=a.rG;d=a.rH;b.arrayBuffer().then(Bk(c,"f"),Bk(d,"f"));}
function SC(){var a=this;C.call(a);a.lO=null;a.lP=null;}
function AHA(a,b){var c;c=a.lO;Lt(a.lP,I6(c,b.size));}
function SF(){C.call(this);this.sR=null;}
function ADx(a,b){var c;c=a.sR;Bu(K2(),$rt_str(b.message));Lt(c,0);}
function TH(){C.call(this);this.uI=null;}
function AJo(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Px(){C.call(this);this.qt=null;}
function AEc(a,b){var c,d;c=a.qt;if(!c.hq){b=b.data;c.e.f=AAm(Eo(b[0]),Fy(b[1]));c.hp=1;d=JS(Fu(),c.ep);b=new M;O(b);G(Hv(G(b,B(570)),d),B(226));$rt_globals.console.info($rt_ustr(N(b)));}}
function Pv(){C.call(this);this.nt=null;}
function AGN(a,b){var c,d,e,f,g,h;c=b.data;d=a.nt;e=(Eo(c[2])).data[0];if(e!=1)Hm(d,b);else{d.hq=1;f=Eo(c[0]);g=Fy(c[1]);b=d.e;b.f=ABb(b.f,f,g,d.hp);Vj(d,ABT(e));Gh(Cg(d),AT9);FS(Cg(d));h=JS(Fu(),d.ep);b=new M;O(b);G(Hv(G(b,B(571)),h),B(226));$rt_globals.console.info($rt_ustr(N(b)));VM(d);Jx(d);}}
function Pw(){C.call(this);this.sX=null;}
function AMH(a,b){Hm(a.sX,b);}
var XT=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["dA",ASr(AJP),"cj",ASq(AEO)],QF,0,C,[],0,3,0,0,0,Mr,0,C,[],3,3,0,0,0,LU,0,C,[],3,3,0,0,0,Vs,0,C,[Mr,LU],0,3,0,0,0,Yi,0,C,[],4,0,0,0,0,X4,0,C,[],4,3,0,0,0,Gk,0,C,[],0,3,0,0,0,DS,0,Gk,[],0,3,0,0,0,Bn,0,DS,[],0,3,0,0,0,ZP,0,Bn,[],0,3,0,0,0,C_,0,C,[],3,3,0,0,0,CI,0,C,[],3,3,0,0,0,Il,0,C,[],3,3,0,0,0,Bv,"String",1,C,[C_,CI,Il],0,3,0,EF,["cj",ASq(AEN),"dA",ASr(Bo),"i$",ASr(AG0)],EA,0,Gk,[],0,3,0,0,0,GW,0,EA,[],0,3,0,0,0,Zq,0,GW,[],0,3,0,0,0,DL,0,C,[C_],1,3,0,0,0,E7,0,DL,[CI],0,3,0,
0,["i$",ASr(AI6)],F8,0,C,[C_,Il],0,0,0,0,["hh",ASr(I4),"cj",ASq(N)],Hx,0,C,[],3,3,0,0,0,M,0,F8,[Hx],0,3,0,0,["kZ",ASu(AI1),"kc",ASt(AF9),"cj",ASq(DI),"hh",ASr(AI9),"lu",ASs(AJB)],Ej,0,GW,[],0,3,0,0,0,AAO,0,Ej,[],0,3,0,0,0,Zg,0,Ej,[],0,3,0,0,0,SN,0,C,[],3,3,0,0,0,Dk,0,C,[],3,3,0,0,0,N$,0,C,[],3,0,0,0,0,H6,0,C,[SN,Dk,N$],1,3,0,0,["dZ",ASq(FE)],Qs,0,H6,[],0,3,0,0,0,Xx,0,C,[],0,3,0,0,0,AB1,0,C,[],4,3,0,0,0,Bc,0,C,[],3,3,0,0,0,SW,0,C,[Bc],0,3,0,0,0,Bt,0,C,[],3,3,0,0,0,Z4,0,C,[Bt],1,3,0,0,0,XC,0,C,[],3,3,0,0,0,ABz,
0,C,[],3,3,0,0,0,ABu,0,C,[],3,3,0,0,0,K8,0,C,[],0,3,0,0,0,Yf,0,C,[Bt],1,3,0,0,0,BU,0,C,[Bt],3,3,0,0,0,SX,0,C,[BU],0,3,0,0,["be",ASr(AC9)],SV,0,C,[BU],0,3,0,0,["be",ASr(AOe)],KM,0,C,[],4,3,0,0,0,ABq,0,C,[],4,3,0,0,0,YU,0,C,[],0,3,0,0,0,AC2,0,C,[],4,3,0,0,0,My,0,C,[BU],0,3,0,0,["be",ASr(AKQ)]]);
$rt_metadata([ABQ,0,C,[Bt],1,3,0,0,0,XN,0,C,[],0,3,0,0,0,Jd,0,C,[Bt],3,3,0,0,0,Y$,0,C,[Jd],1,3,0,0,["EO",ASr(APq),"D$",ASq(AE8)],ZC,0,C,[Bt],1,3,0,0,0,FD,0,C,[],3,3,0,0,0,RY,0,C,[FD],0,3,0,0,0,Bw,0,Bn,[],0,3,0,0,0,AAu,0,C,[],4,3,0,0,0,Go,0,Bn,[],0,3,0,0,0,Id,0,Bn,[],0,3,0,0,0,C2,0,C,[CI],0,3,0,0,0,LN,0,C,[Bt],3,3,0,0,0,RE,0,C,[LN],3,3,0,0,0,D$,0,C,[Bt],3,3,0,0,0,AB0,0,C,[RE,D$],3,3,0,0,0,M7,0,C,[BU],0,3,0,0,["be",ASr(ALS)],ZA,0,C,[],4,3,0,0,0,OA,0,C,[D$],3,3,0,0,0,Qi,0,C,[D$],3,3,0,0,0,P_,0,C,[D$],3,3,0,0,0,SI,
0,C,[D$],3,3,0,0,0,Wc,0,C,[D$],3,3,0,0,0,TX,0,C,[D$,OA,Qi,P_,SI,Wc],3,3,0,0,0,NR,0,C,[],3,3,0,0,0,XB,0,C,[Bt,TX,NR,Jd],1,3,0,0,["CS",ASs(AJx),"EV",ASs(AJR),"wT",ASr(AD$),"Bt",ASt(AKV),"zz",ASr(AOx),"zF",ASq(AE_),"x9",ASt(ADt)],BC,0,Bn,[],0,3,0,0,0,W0,0,Bn,[],0,3,0,0,0,GT,0,Bw,[],0,3,0,0,0,YF,0,C,[],0,3,0,0,0,DV,0,C,[],4,3,0,JW,["dA",ASr(AOk)],NQ,0,C,[],3,3,0,0,0,RO,0,C,[NQ],0,3,0,0,0,Ci,0,C,[],3,3,0,0,0,QS,0,C,[Ci],0,3,0,0,0,Bi,0,C,[],3,3,0,0,0,ZZ,0,C,[Bi],0,3,0,0,0,Za,0,C,[Bt],1,3,0,0,0,Zx,0,C,[Bt],1,3,0,0,
0,Qd,0,C,[Bt],3,3,0,0,0,UP,0,C,[Qd],0,3,0,0,["Bv",ASr(AIa)],UI,0,C,[Bi],0,3,0,0,0,Pk,0,C,[Bt],3,3,0,0,0,UJ,0,C,[Pk],0,3,0,0,["s5",ASs(AGq)],AB7,0,C,[Bt],1,3,0,0,0,Ch,0,C,[Bt],3,3,0,0,0,UG,0,C,[Ch],0,3,0,0,["b4",ASr(AL0)],Kr,0,C,[],3,3,0,0,0,Ev,0,C,[Kr],1,3,0,0,0,Ee,0,C,[],3,3,0,0,0]);
$rt_metadata([WA,0,C,[Kr],3,3,0,0,0,Mq,0,C,[WA],3,3,0,0,0,Ok,0,Ev,[Ee,C_,Mq],0,3,0,0,0,UH,0,C,[BU],0,3,0,0,["be",ASr(ANb)],ACr,0,C,[Bt],1,3,0,0,0,ACX,0,C,[Bt],1,3,0,0,0,Ji,0,C,[Bt],3,3,0,0,0,V6,0,C,[Ji],0,3,0,0,["th",ASr(AMi)],Zp,0,C,[Bt],1,3,0,0,0,V7,0,C,[Ji],0,3,0,0,["th",ASr(AKa)],OK,0,C,[],0,3,0,0,0,KF,0,C,[],1,3,0,0,0,ABy,0,KF,[],0,3,0,0,0,Cq,0,C,[Dk],1,3,0,0,["c3",ASr(AO7)],IC,0,C,[FD],0,3,0,0,["lD",ASs(I0)],YL,0,C,[],0,3,0,0,0,Vx,0,C,[Ch],0,3,0,0,["b4",ASr(ALq)],Vy,0,C,[Ch],0,3,0,0,["b4",ASr(ALD)],Vz,
0,C,[Ch],0,3,0,0,["b4",ASr(AJ$)],VA,0,C,[Ch],0,3,0,0,["b4",ASr(AJy)],VB,0,C,[Ch],0,3,0,0,["b4",ASr(AJV)],VC,0,C,[Ch],0,3,0,0,["b4",ASr(AMc)],VD,0,C,[Ch],0,3,0,0,["b4",ASr(AHP)],VE,0,C,[Ch],0,3,0,0,["b4",ASr(APy)],VF,0,C,[Ch],0,3,0,0,["b4",ASr(AG7)],VG,0,C,[Ch],0,3,0,0,["b4",ASr(ANi)],WO,0,C,[Ch],0,3,0,0,["b4",ASr(AO8)],WP,0,C,[Ch],0,3,0,0,["b4",ASr(AJL)],WQ,0,C,[Ch],0,3,0,0,["b4",ASr(AKc)],WR,0,C,[Ch],0,3,0,0,["b4",ASr(ALU)],Tl,0,C,[],3,3,0,0,0,Ty,0,C,[Tl],0,3,0,0,0,Tw,0,C,[Ch],0,3,0,0,["b4",ASr(AIR)],LP,0,
C,[],0,3,0,0,0,ACi,0,C,[],0,3,0,0,0,Ih,0,C,[],3,3,0,0,0,Ck,0,C,[Ih],3,3,0,0,0,CB,0,C,[],3,3,0,0,["bW",ASr(AIW),"cn",ASt(AMb),"c2",ASs(AE4),"cI",ASs(ADT)],DN,0,C,[],3,3,0,0,0,ET,0,C,[Ih],3,3,0,0,0,Fd,0,C,[],3,3,0,0,0,HI,0,C,[],3,3,0,0,0,FV,0,C,[HI],3,3,0,0,0,Ps,0,C,[Dk],0,3,0,0,0,Bh,0,C,[],0,3,0,0,["cj",ASq(W6)],VJ,0,C,[],0,3,0,0,0,ABx,0,C,[],0,3,0,0,0,X1,0,C,[],3,3,0,0,0,Pj,0,C,[],0,3,0,0,0,KY,0,C,[],0,3,0,0,0]);
$rt_metadata([D0,0,KY,[],0,3,0,0,0,Vi,0,D0,[],0,3,0,0,0,Eu,0,D0,[],0,3,0,0,0,PW,0,D0,[],0,3,0,0,0,ABf,0,Eu,[],0,3,0,0,0,AAR,0,Eu,[],0,3,0,0,0,Yh,0,Eu,[],0,3,0,0,0,Q1,0,C,[Bt],3,3,0,0,0,AC0,0,C,[Q1],3,3,0,0,0,Pg,0,C,[Dk],0,3,0,0,0,Pi,0,C,[],0,3,0,0,0,Cr,0,C,[CI,C_],1,3,0,0,0,Gw,0,Cr,[],12,3,0,XY,0,Lw,0,C,[],3,3,0,0,0,So,0,C,[Lw],3,3,0,0,0,TN,0,C,[],3,3,0,0,0,Gd,0,C,[So,TN],1,3,0,0,0,IS,0,Gd,[],0,3,0,0,0,Ze,0,IS,[],0,3,0,0,0,F0,0,Gd,[],1,3,0,0,0,KL,0,F0,[],0,3,0,0,["jE",ASt(AIJ)],DM,0,Cr,[],12,3,0,AOr,0,IJ,0,
C,[CI],1,3,0,0,0,LA,0,IJ,[],0,3,0,Y4,0,JO,0,C,[],32,0,0,XA,0,Oq,0,C,[],0,3,0,0,0,Gz,0,Cr,[],12,0,0,AAl,0,F7,0,Cr,[],12,0,0,AAn,0,UQ,0,DS,[],0,3,0,0,0,ABp,0,BC,[],0,3,0,0,0,Lz,0,C,[Bt],3,3,0,0,0,Wy,0,C,[Lz],0,3,0,0,["be",ASr(AMQ)],Wz,0,C,[Lz],0,3,0,0,["be",ASr(AEI)],GI,0,C,[],1,3,0,0,0,Rj,0,C,[],3,3,0,0,0,Kw,0,GI,[CI,Hx,Il,Rj],1,3,0,0,0,Jf,0,GI,[CI],1,3,0,0,0,Hl,0,C,[],0,3,0,GR,0,Mw,0,Cq,[],0,3,0,0,["bS",ASq(AJH),"ca",ASs(AId)],ACH,0,C,[],0,3,0,0,0,ZW,0,C,[Bt],1,3,0,0,0,Jt,0,Kw,[],1,0,0,0,0,ZB,0,Jt,[],0,0,0,
0,0,Kj,0,C,[],1,3,0,0,0,K6,0,C,[],0,3,0,0,0,XK,0,C,[],0,3,0,0,0,KK,0,C,[Bt],3,3,0,0,0,MG,0,C,[KK],0,3,0,0,["be",ASr(AGS)],MF,0,C,[KK],0,3,0,0,["be",ASr(AKU)],ME,0,C,[BU],0,3,0,0,["be",ASr(ALz)]]);
$rt_metadata([MD,0,C,[BU],0,3,0,0,["be",ASr(AFi)],Sf,0,C,[Ci],0,3,0,0,["ce",ASr(AK_)],Se,0,C,[Ci],0,3,0,0,["ce",ASr(AEk)],Sd,0,C,[Ci],0,3,0,0,["ce",ASr(AHW)],Sc,0,C,[Ci],0,3,0,0,["ce",ASr(AHS)],Sb,0,C,[Ci],0,3,0,0,["ce",ASr(AIv)],Sa,0,C,[Ci],0,3,0,0,["ce",ASr(AEq)],R_,0,C,[Ci],0,3,0,0,["ce",ASr(AF3)],R$,0,C,[Ci],0,3,0,0,["ce",ASr(ALp)],R9,0,C,[Ci],0,3,0,0,["ce",ASr(AOQ)],R8,0,C,[Ci],0,3,0,0,["ce",ASr(APJ)],PV,0,C,[Ci],0,3,0,0,["ce",ASr(AJl)],PT,0,C,[Ci],0,3,0,0,["ce",ASr(ADi)],PU,0,C,[Ci],0,3,0,0,["ce",ASr(AGO)],PR,
0,C,[Ci],0,3,0,0,["ce",ASr(AJC)],PS,0,C,[Ci],0,3,0,0,["ce",ASr(AM9)],GQ,0,C,[],0,3,0,0,0,Oc,0,GQ,[],0,3,0,0,0,ABH,0,C,[],0,3,0,0,0,LK,0,GQ,[],0,3,0,0,0,Tn,0,C,[Bt],3,3,0,0,0,M1,0,C,[Tn],0,3,0,0,["th",ASr(AJd)],T7,0,C,[Bc],0,3,0,0,["m",ASr(Vk)],VZ,0,Jf,[],0,0,0,0,0,AAE,0,C,[Bt],1,3,0,0,0,JM,0,C,[],4,3,0,AIt,0,Vb,0,C,[],3,3,0,0,0,RU,0,C,[Vb],0,3,0,0,["cj",ASq(AFO)],TG,0,C,[],3,3,0,0,0,Ku,"JsFileHandle",5,C,[TG],0,3,0,0,["cj",ASq(AIP)],Kf,0,Kj,[],1,3,0,0,0,OH,0,Kf,[],0,3,0,0,0,H0,0,DS,[],0,3,0,0,0,JY,0,Cq,[],0,
3,0,0,["c3",ASr(AFt),"bS",ASq(AH_),"n_",ASq(ALO),"ca",ASs(AKt),"q9",ASr(AAe)],XE,0,Cq,[],0,3,0,0,["c3",ASr(ADE),"bS",ASq(AGE),"ca",ASs(AMP)],DU,0,Cq,[],1,3,0,0,["ca",ASs(KZ)],Eh,0,C,[],3,3,0,0,0,Ve,0,DU,[CB,Eh],0,3,0,0,["f6",ASs(AOa),"ca",ASs(AF$),"bS",ASq(AGT),"bW",ASr(AL$),"c2",ASs(AHQ),"cI",ASs(AEL),"cn",ASt(ALs)],Wq,0,DU,[Eh],0,3,0,0,["f6",ASs(AG2),"bS",ASq(ALK),"ca",ASs(AFo),"c3",ASr(AMV)],WZ,0,DU,[CB],0,3,0,0,["bW",ASr(AIW),"cn",ASt(AMb),"c2",ASs(AE4),"cI",ASs(ADT),"bS",ASq(AMh),"c3",ASr(AFM)],Ow,0,Cq,
[],0,3,0,0,["bS",ASq(ADW),"ca",ASs(ANW)],C7,0,Cq,[],0,3,0,0,["bS",ASq(Ri),"ca",ASs(RP)],P3,"SelectFileTest",6,C7,[],0,3,0,0,0,ACy,"WorkerTest",7,C7,[],0,3,0,0,0,VU,"RenderTexture",6,C7,[],0,3,0,0,["c3",ASr(AI7),"bS",ASq(ADy),"ca",ASs(ALI)],Rk,"ScissorDemo",6,C7,[],0,3,0,0,["bS",ASq(APk),"ca",ASs(AFd)],N5,0,Cq,[],0,3,0,0,["bS",ASq(APn),"ca",ASs(AHk),"c3",ASr(AFS)],H4,"ClipboardTest",6,C7,[CB],0,3,0,0,["bW",ASr(AIW),"c2",ASs(AE4),"cI",ASs(ADT),"cn",ASt(AMJ)],Pp,0,Cq,[],0,3,0,0,["bS",ASq(APe),"ca",ASs(AJ5)],Vu,
0,DU,[Eh],0,3,0,0,["f6",ASs(AIh),"bS",ASq(APF),"ca",ASs(AL2),"c3",ASr(AI3)]]);
$rt_metadata([Ql,0,JY,[],0,3,0,0,["n_",ASq(AIm),"q9",ASr(AFk)],Iy,0,C,[],3,3,0,0,0,LE,0,C,[Iy,C_],0,3,0,0,0,IV,0,LE,[],0,0,0,0,0,ACf,0,C,[],0,3,0,0,0,XX,0,C,[],3,3,0,0,0,ACT,0,C,[],0,3,0,0,0,TZ,0,C,[CB,DN],0,0,0,0,["bW",ASr(AMk),"cn",ASt(APP),"c2",ASs(APx),"cI",ASs(AKS),"c1",ASt(AJu)],Hs,0,C,[],3,3,0,0,["tu",ASq(AFI),"re",ASq(APX)],Zi,0,C,[Hs,CB],0,3,0,0,["re",ASq(AGy),"tu",ASq(AFe),"cI",ASs(AL4),"c2",ASs(AN$),"cn",ASt(AHJ),"bW",ASr(AF4),"gz",ASr(AK6)],Q7,0,C,[Ck],0,3,0,0,["bx",ASr(AKf)],Q_,0,C,[Ck],0,3,0,0,
["bx",ASr(AHI)],Jy,0,C,[Ck],0,3,0,0,["bx",ASr(AMX)],Q$,0,C,[Bc],0,3,0,0,["m",ASr(AD_)],Q9,0,C,[Ck],0,3,0,0,["bx",ASr(APS)],Q8,0,C,[Fd],0,3,0,0,["hd",ASs(ALx)],Rc,0,C,[FV],0,3,0,0,["f9",ASq(APp)],Rb,0,C,[DN],0,3,0,0,["c1",ASt(AJs)],Ra,0,C,[ET],0,3,0,0,["bx",ASr(AMv)],BW,0,C,[],0,3,0,0,["dA",ASr(APs)],Cy,0,C,[],3,3,0,Dp,0,H8,0,C,[],0,3,0,0,0,ABI,0,H8,[],0,3,0,0,0,ZD,0,C,[],0,3,0,0,0,ST,0,C,[CB],0,0,0,0,["bW",ASr(ALV),"cn",ASt(ANm),"c2",ASs(AJW),"cI",ASs(AGd)],QL,0,C,[Ck],0,3,0,0,["bx",ASr(ALP)],QK,0,C,[Ck],0,
3,0,0,["bx",ASr(AOh)],QN,0,C,[Fd],0,3,0,0,["hd",ASs(AOK)],QM,0,C,[Bi],0,3,0,0,["q",ASq(AOJ)],QJ,0,C,[ET],0,3,0,0,["bx",ASr(AKk)],QI,0,C,[DN],0,3,0,0,["c1",ASt(AH5)],Ik,0,BW,[],0,3,0,0,0,T6,0,C,[],0,3,0,0,0,Yq,0,C,[],0,3,0,0,0,Xy,0,C,[Eh,Hs],0,3,0,0,["tu",ASq(AFI),"re",ASq(APX),"f6",ASs(AFc),"gz",ASr(ADJ)],Sh,0,C,[Ck],0,3,0,0,["bx",ASr(AMg)],Sk,0,C,[ET],0,3,0,0,["bx",ASr(ADm)],ACu,0,C,[],0,3,0,0,["dA",ASr(APO)],Kp,0,C,[],0,3,0,0,0,Si,0,C,[Bi],0,3,0,0,["q",ASq(AHO)],Sg,0,C,[Bi],0,3,0,0,["q",ASq(ANA)],C5,0,C,[],
0,3,0,0,0,ZV,0,C,[CB,Eh],0,3,0,0,["bW",ASr(X8),"cn",ASt(ZU),"c2",ASs(Y3),"cI",ASs(ACK),"f6",ASs(AOD)],NU,0,C,[Ck],0,3,0,0,["bx",ASr(AFb)],NV,0,C,[ET],0,3,0,0,["bx",ASr(ANS)],AAG,0,C,[],0,3,0,0,0,NW,0,C,[DN],0,3,0,0,["c1",ASt(AK3)],Vh,0,C,[],3,3,0,0,0,G$,0,C,[Vh],3,3,0,0,0,EG,0,C,[G$],1,3,0,0,0]);
$rt_metadata([Md,0,C,[G$],3,3,0,0,0,FU,0,EG,[Md],1,3,0,0,0,HW,0,C,[],3,3,0,0,0,Nc,0,FU,[Ee,C_,HW],0,3,0,0,["qc",ASr(Bs),"mS",ASq(ALb),"sT",ASr(Ef)],ACh,0,C,[],0,3,0,0,0,S_,0,C,[Eh],0,3,0,0,["f6",ASs(AKL)],Ta,0,C,[Ck],0,3,0,0,["bx",ASr(ADr)],MK,0,C,[],3,3,0,0,0,ABE,0,C,[MK],0,3,0,0,0,Z7,0,C,[Dk],0,3,0,0,0,ABt,0,C,[],3,3,0,0,0,Vt,0,C,[CB],0,0,0,0,["cn",ASt(AMb),"c2",ASs(AKB),"cI",ASs(AL6),"bW",ASr(AGw)],RT,0,C,[DN],0,3,0,0,["c1",ASt(AFR)],TE,0,C,[],3,3,0,0,0,Z6,0,C,[],0,3,0,0,0,Pm,0,C,[Ck],0,3,0,0,["bx",ASr(AMM)],Qp,
0,C,[Bc],0,3,0,0,["m",ASr(ADR)],Qo,0,C,[Bc],0,3,0,0,["m",ASr(APt)],Qn,0,C,[Bc],0,3,0,0,["m",ASr(AGa)],Qm,0,C,[Bc],0,3,0,0,["m",ASr(AKY)],Qk,0,C,[Bc],0,3,0,0,["m",ASr(AKb)],Qj,0,C,[Bc],0,3,0,0,["m",ASr(AL3)],SS,0,C,[CB],0,0,0,0,["cn",ASt(AMb),"cI",ASs(ADT),"bW",ASr(ANU),"c2",ASs(AOf)],Tj,0,C,[CB],0,0,0,0,["cn",ASt(AMb),"c2",ASs(AEt),"cI",ASs(AE9),"bW",ASr(AD3)],Nf,0,C,[DN],0,3,0,0,["c1",ASt(ADV)],Rw,0,C,[Ck],0,3,0,0,["bx",ASr(ANY)],Rv,0,C,[Fd],0,3,0,0,["hd",ASs(AGx)],Rt,0,C,[Fd],0,3,0,0,["hd",ASs(ANn)],Rs,0,
C,[FV],0,3,0,0,["f9",ASq(ALr)],Ru,0,C,[FV],0,3,0,0,["f9",ASq(AEZ)],Q2,0,C,[Ck],0,3,0,0,["bx",ASr(AGD)],Kv,0,C,[],0,3,0,0,0,PJ,0,C,[Ck],0,3,0,0,["bx",ASr(AG$)],PK,0,C,[ET],0,3,0,0,["bx",ASr(ADs)],PL,0,C,[DN],0,3,0,0,["c1",ASt(AMp)],H5,0,C,[],0,3,0,0,0,ZF,0,C,[],0,3,0,0,["dA",ASr(AOt)],N3,0,C,[Bt],3,3,0,0,0,On,0,C,[N3],0,3,0,0,["s5",ASs(AHe)],N4,0,C,[Bt],3,3,0,0,0,Ol,0,C,[N4],0,3,0,0,["s5",ASs(AIl)],Yj,0,C,[],0,3,0,0,0,Xs,0,C,[Bt],3,3,0,0,0,LV,0,C,[Bi],0,3,0,0,["q",ASq(AJw)],LW,0,C,[Bi],0,3,0,0,["q",ASq(AH2)],U1,
0,C,[],0,3,0,0,0,W_,0,C,[],0,3,0,0,0,MM,0,C,[],0,3,0,0,0,EM,0,C,[Dk],0,0,0,0,0,TV,0,C,[Bc],0,3,0,0,0]);
$rt_metadata([TU,0,C,[Bc],0,3,0,0,["m",ASr(AMW)],TQ,0,C,[Bc],0,3,0,0,["m",ASr(AKW)],TP,0,C,[Bi],0,3,0,0,["q",ASq(AMT)],TS,0,C,[Bi],0,3,0,0,["q",ASq(AH7)],TR,0,C,[Bi],0,3,0,0,["q",ASq(AKi)],Uh,0,C,[Bi],0,3,0,0,["q",ASq(AMj)],Fh,0,Cr,[],12,3,0,ADB,0,IU,0,C,[Dk],0,3,0,0,["dZ",ASq(AAW)],Rn,0,C,[Ck],0,3,0,0,["bx",ASr(APT)],Ro,0,C,[Ck],0,3,0,0,["bx",ASr(ADw)],SM,0,C,[],0,3,0,0,0,WN,0,C,[],3,3,0,0,0,G6,0,C,[],0,3,0,0,0,G0,0,C,[],4,3,0,0,0,AC4,0,C,[],0,3,0,0,0,HB,0,C,[],3,3,0,0,0,V_,0,C,[HB],0,3,0,0,["m1",ASt(AMD)],Wa,
0,C,[HB],0,3,0,0,0,U3,0,C,[CB],0,0,0,0,["bW",ASr(ADv),"cn",ASt(AMF),"c2",ASs(ANz),"cI",ASs(AIu)],ABF,0,C,[],0,0,0,0,0,WY,0,C,[Bc],0,3,0,0,["m",ASr(AL7)],M_,0,C,[TE],0,3,0,0,0,Dt,0,C,[],3,3,0,EK,0,AAa,0,C,[],0,3,0,0,0,OW,0,C,[Bc],0,3,0,0,["m",ASr(AIC)],Qy,0,C,[CB],0,0,0,0,["cn",ASt(AMb),"c2",ASs(AE4),"cI",ASs(ADT),"bW",ASr(ADz)],Yv,0,C,[],0,3,0,0,0,Hr,0,C,[],0,3,0,0,0,EP,0,C,[],0,3,0,0,0,LB,0,EP,[],0,3,0,0,0,LZ,0,EP,[],0,3,0,0,0,Pq,0,EP,[],0,3,0,0,0,H7,0,C,[],3,3,0,0,0,Qt,0,C,[],3,3,0,0,0,Ga,0,C,[CI],0,3,0,0,
0,IN,0,C,[],0,3,0,0,0,J_,0,F0,[],0,3,0,0,["jE",ASt(AGM)],ACm,0,C,[],0,3,0,0,0,Zf,0,C,[Bt],4,3,0,0,0,ACP,0,C,[],0,3,0,0,0,AB$,0,C,[],3,3,0,0,0,CP,0,C,[Bt],1,3,0,0,0,AAy,0,CP,[],1,3,0,0,0,ABc,0,CP,[],1,3,0,0,0,Yn,0,CP,[],1,3,0,0,0,YH,0,CP,[],1,3,0,0,0,ABG,0,CP,[],1,3,0,0,0,ZR,0,Ev,[Ee,C_],0,3,0,0,0,Cx,0,C,[],0,3,0,0,0,M2,0,C,[Bi],0,3,0,0,["q",ASq(APc)]]);
$rt_metadata([To,0,C,[Bi],0,3,0,0,["q",ASq(AJQ)],B5,0,C,[],0,3,0,0,0,Ij,0,C,[],0,3,0,0,0,ACq,0,C,[CI],0,3,0,0,["dA",ASr(ANo),"i$",ASr(AEX)],Ws,0,C,[FD],0,3,0,0,["lD",ASs(AHz)],Wu,0,C,[FD],0,3,0,0,["lD",ASs(AJa)],EQ,0,C,[],0,3,0,0,0,GN,0,FU,[HW],1,0,0,0,["sT",ASr(AJ6)],WF,0,GN,[HW],0,0,0,0,["mS",ASq(AGK),"qc",ASr(AO2)],Xl,0,C,[],0,3,0,0,["cj",ASq(AHF)],Ob,0,C,[G$],3,3,0,0,0,F4,0,EG,[Ob],1,3,0,0,0,JG,0,F4,[],1,0,0,0,0,UF,0,JG,[],0,0,0,0,0,KQ,0,Ev,[],1,0,0,0,0,UD,0,KQ,[],0,0,0,0,0,UE,0,GN,[],0,0,0,0,0,Ft,0,C,[],
3,3,0,0,0,UB,0,C,[Ft],0,0,0,0,0,OF,0,C,[Ft],3,3,0,0,0,UC,0,C,[OF],0,0,0,0,0,WX,0,C,[FD],0,3,0,0,0,KN,0,C,[],0,3,0,0,0,MT,0,C,[Ft],0,0,0,0,0,Y1,0,C,[],4,3,0,0,0,U0,0,C,[CB],0,0,0,0,["cn",ASt(AMb),"c2",ASs(AE4),"cI",ASs(ADT),"bW",ASr(AM5)],Zc,0,C,[Bt],1,3,0,0,0,J3,0,C,[Iy,Ee],0,0,0,0,0,HM,0,J3,[],0,0,0,0,0,T$,0,C,[Bc],0,3,0,0,["m",ASr(AH8)],U8,0,C,[HI],0,3,0,0,["f9",ASq(APh)],Ce,0,Cr,[],12,3,0,Yk,0,IQ,0,C,[],0,3,0,0,0,ACW,0,C,[],0,3,0,0,0,KW,0,C,[],3,3,0,0,0,Qq,0,C,[KW],0,3,0,0,["pq",ASr(AKu)],ABV,0,C,[CI],0,
3,0,0,["dA",ASr(Xn),"i$",ASr(ALY)],ML,0,C,[Bc],0,3,0,0,["m",ASr(AG8)],XW,0,C,[],0,3,0,0,0,W$,0,C,[],0,3,0,0,0,MC,0,C,[Dk],0,3,0,0,0,FC,0,H0,[],0,3,0,0,0,V$,0,EA,[],0,3,0,0,0,PA,0,C,[Bc],0,3,0,0,["m",ASr(ALn)],Tg,0,C,[Bi],0,3,0,0,["q",ASq(ANP)],Xp,0,C,[],0,3,0,0,0,Lc,0,Bn,[],0,3,0,0,0,Ls,0,DL,[CI],0,3,0,0,0,Fp,0,C,[],0,0,0,0,0,Jw,0,C,[],4,3,0,0,0]);
$rt_metadata([Uz,0,C,[],0,3,0,0,0,Ll,0,C,[],1,3,0,0,0,MW,0,C,[Bc],0,3,0,0,["m",ASr(ALE)],UR,0,C,[Bc],0,3,0,0,["m",ASr(APv)],Zt,0,CP,[],1,3,0,0,0,Qw,0,C,[Bi],0,3,0,0,["q",ASq(AH1)],Ur,0,C,[Bi],0,3,0,0,["q",ASq(ALH)],Tf,0,C,[],0,3,0,0,0,DP,0,Bn,[],0,3,0,0,0,AAQ,0,EA,[],0,3,0,0,0,PI,0,C,[Bc],0,3,0,0,["m",ASr(AOw)],T8,0,C,[Bc],0,3,0,0,0,M$,0,C,[Bc],0,3,0,0,["m",ASr(ADU)],M8,0,C,[Bc],0,3,0,0,["m",ASr(AFU)],SO,0,C,[Bc],0,3,0,0,["m",ASr(AOH)],JR,0,Ll,[],1,3,0,0,0,SE,0,JR,[],0,3,0,0,0,Pc,0,C,[Bc],0,3,0,0,["m",ASr(AE0)],Uq,
0,C,[Bi],0,3,0,0,["q",ASq(AKN)],PQ,0,C,[BU],0,3,0,0,["be",ASr(ADg)],TM,0,C,[BU],0,3,0,0,["be",ASr(AO5)],SA,0,C,[Bc],0,3,0,0,0,Z0,0,C,[Ci],0,3,0,0,0,Rm,0,C,[Bc],0,3,0,0,["m",ASr(AEa)],Rl,0,C,[Bc],0,3,0,0,["m",ASr(AEQ)],QH,0,C,[Bc],0,3,0,0,["m",ASr(AHl)],R6,0,C,[Bi],0,3,0,0,["q",ASq(AJp)],Jq,0,DL,[CI],0,3,0,0,0,KT,0,C,[],4,3,0,0,0,L8,0,C,[BU],0,3,0,0,["be",ASr(APW)],Oo,0,C,[HB],0,3,0,0,["m1",ASt(ADP)],S1,0,C,[],0,3,0,0,0,EC,0,C,[Dk],0,3,0,0,["dZ",ASq(AK1),"it",ASq(AOy),"iw",ASt(Pa),"ey",ASr(X$),"jK",ASr(AGB),
"jC",ASr(ANs),"oq",ASs(APC),"cn",ASt(AN1),"is",ASs(ANj),"cI",ASs(AOm),"bW",ASr(AKo),"c1",ASt(AGt)],Gp,0,EC,[],0,3,0,0,["j3",ASr(ZH)],P2,0,Gp,[Hs],0,3,0,0,["tu",ASq(AFI),"re",ASq(APX),"dZ",ASq(APQ),"oq",ASs(AFF),"j3",ASr(AIN),"ey",ASr(AIe),"jC",ASr(AJn),"jK",ASr(AGb),"s8",ASq(Yp),"bW",ASr(AOG),"is",ASs(ADK),"cn",ASt(AD0),"gz",ASr(AIV)],UZ,0,C,[Bi],0,3,0,0,["q",ASq(APD)],Y_,0,EC,[],0,3,0,0,["dZ",ASq(AD4),"iw",ASt(AFK),"ey",ASr(AM2),"cn",ASt(AHM),"is",ASs(AN4),"cI",ASs(AHo),"bW",ASr(AIE),"c1",ASt(ANd),"it",ASq(AKK)],U6,
0,Gp,[],0,3,0,0,["s8",ASq(ALo),"it",ASq(AJr),"jC",ASr(AIg),"ey",ASr(AF6),"jK",ASr(AIT)],OO,0,C,[Bc],0,3,0,0,0,WC,0,C,[],0,3,0,0,0,HA,0,C,[],0,3,0,0,0,Sz,0,EC,[],0,3,0,0,0,S7,0,C,[Bc],0,3,0,0,["m",ASr(AJX)],S8,0,C,[Bc],0,3,0,0,["m",ASr(AH6)],Q6,0,DL,[CI],0,3,0,0,0,W4,0,C,[Bi],0,3,0,0,["q",ASq(AGh)],IX,0,C,[],0,3,0,0,0,E8,0,Bn,[],0,3,0,0,0,M0,0,C,[],0,3,0,0,0,ABY,0,C,[],0,3,0,0,0]);
$rt_metadata([RW,0,C,[],0,0,0,0,0,Wo,0,C,[BU],0,3,0,0,["be",ASr(AM8)],Wn,0,C,[BU],0,3,0,0,["be",ASr(AF0)],VQ,0,C,[BU],0,3,0,0,["be",ASr(AHs)],VP,0,C,[BU],0,3,0,0,["be",ASr(AIk)],Xr,0,C,[],1,3,0,0,0,VW,0,C,[],3,3,0,0,0,Wi,0,C,[Ch],0,3,0,0,["b4",ASr(AHi)],YV,0,C,[],0,3,0,0,0,ACg,0,C,[],0,3,0,0,0,Tx,0,C,[Bi],0,3,0,0,["q",ASq(AHX)],Tz,0,C,[Bi],0,3,0,0,["q",ASq(AMA)],XM,0,C,[],0,3,0,0,0,Iu,0,E8,[],0,3,0,0,0,Hw,0,Bn,[],0,3,0,0,0,La,0,Bn,[],0,3,0,0,0,Yz,0,C,[Bc],0,3,0,0,0,Rp,0,C,[Bi],0,3,0,0,["q",ASq(AO9)],V1,0,C,
[Bc],0,3,0,0,["m",ASr(ANa)],Ry,0,C,[Bi],0,3,0,0,["q",ASq(AEh)],Xa,0,C,[],0,3,0,0,0,GJ,0,C,[],0,3,0,0,0,AA7,0,F4,[],0,0,0,0,0,Os,0,EG,[],0,0,0,0,0,VH,0,Bw,[],0,3,0,0,0,PG,0,C,[Lw],3,3,0,0,0,MU,0,C,[PG],3,3,0,0,0,Le,0,C,[MU],1,3,0,0,0,Y0,0,Le,[],0,3,0,0,0,QC,0,C,[Bi],0,3,0,0,["q",ASq(AET)],QB,0,C,[Bi],0,3,0,0,["q",ASq(ADn)],QA,0,C,[Bi],0,3,0,0,["q",ASq(AJi)],Qz,0,C,[Bi],0,3,0,0,["q",ASq(ANN)],OQ,0,C,[Bi],0,3,0,0,["q",ASq(AM_)],OS,0,C,[Bi],0,3,0,0,["q",ASq(AIp)],OT,0,C,[Bi],0,3,0,0,["q",ASq(AFn)],Vc,0,C,[Bi],0,
3,0,0,["q",ASq(AEe)],U5,0,C,[H7],0,3,0,0,["lJ",ASs(AJ_)],RR,0,C,[Bi],0,3,0,0,["q",ASq(AIU)],RS,0,C,[Bi],0,3,0,0,["q",ASq(AJ9)],Nw,0,C,[Bi],0,3,0,0,["q",ASq(AHR)],Nv,0,C,[Bi],0,3,0,0,["q",ASq(ANX)],Uj,0,C,[HI],0,3,0,0,["f9",ASq(AFQ)],UT,0,C,[Bi],0,3,0,0,["q",ASq(ALT)],UX,0,C,[Bi],0,3,0,0,["q",ASq(AI2)],UW,0,C,[Bi],0,3,0,0,["q",ASq(AD9)],UU,0,C,[Bi],0,3,0,0,["q",ASq(AFX)],RN,0,C,[H7],0,3,0,0,["lJ",ASs(AH$)],Pb,0,C,[BU],0,3,0,0,["be",ASr(AGc)],Im,0,C,[Bt],3,3,0,0,0]);
$rt_metadata([L4,0,C,[Im],0,3,0,0,["pp",ASq(AIq)],LM,0,C,[Im],0,3,0,0,["pp",ASq(AC_)],Wm,0,C,[BU],0,3,0,0,["be",ASr(AHH)],GD,0,C,[],0,0,0,0,0,TI,0,GD,[Ft],0,0,0,0,0,P8,0,GD,[Ft],0,0,0,0,0,S4,0,C,[],3,3,0,0,0,P6,0,C,[C_],4,3,0,0,0,Nk,0,C,[Bc],0,3,0,0,["m",ASr(APN)],Gg,0,Cr,[],12,0,0,T1,0,RZ,0,C,[Bc],0,3,0,0,["m",ASr(AI5)],Ov,0,C,[Bc],0,3,0,0,["m",ASr(AJv)],R1,0,C,[Bc],0,3,0,0,["m",ASr(AHm)],R5,0,C,[Bc],0,3,0,0,["m",ASr(AD7)],Uo,0,C,[KW],0,3,0,0,["pq",ASr(Jg)],Bz,0,C,[],1,0,0,0,["b9",ASt(Hj),"cc",ASu(Ht),"ha",
ASq(AEJ),"J",ASr(AN7),"bJ",ASr(AN6),"eO",ASq(AOY),"dP",ASq(IA)],TB,0,C,[],32,0,0,AQp,0,Ot,0,C,[Bc],0,3,0,0,["m",ASr(AFH)],U4,0,C,[Bc],0,3,0,0,["m",ASr(AHg)],W5,0,C,[Bi],0,3,0,0,["q",ASq(AFu)],CN,0,Bz,[],0,0,0,Ly,["c",ASt(AEd),"E",ASr(AEy)],Gt,0,C,[],0,0,0,0,0,If,0,BC,[],0,3,0,0,0,V9,0,C,[BU],0,3,0,0,["be",ASr(ALy)],AAo,0,C,[Bt],3,3,0,0,0,Tm,0,C,[BU],0,3,0,0,["be",ASr(ALd)],QP,0,CN,[],0,0,0,0,["c",ASt(ADM),"E",ASr(AML)],WG,0,CN,[],0,0,0,0,["c",ASt(AFx)],OX,0,CN,[],0,0,0,0,["c",ASt(AEH)],RV,0,CN,[],0,0,0,0,["c",
ASt(ADS),"E",ASr(ALm)],Fl,0,CN,[],0,0,0,0,["c",ASt(AOn)],BS,0,Bz,[],1,0,0,0,["c",ASt(APo),"bO",ASq(ANC),"E",ASr(AIy)],ABS,0,BS,[],0,0,0,0,["bo",ASs(AM$),"b9",ASt(AGP),"cc",ASu(AFl),"E",ASr(ADQ)],BN,0,Bz,[],0,0,0,0,["c",ASt(AHp),"J",ASr(ALf),"bJ",ASr(AJj),"E",ASr(ALX),"dP",ASq(AFg)],Ir,0,BN,[],0,0,0,0,["c",ASt(AK0),"E",ASr(AMl)],DG,0,Ir,[],0,0,0,0,["c",ASt(AFY),"J",ASr(AL5)],L2,0,DG,[],0,0,0,0,["c",ASt(AK$),"E",ASr(AOb)],Vd,0,DG,[],0,0,0,0,["c",ASt(AEs),"E",ASr(ANG)],P9,0,DG,[],0,0,0,0,["c",ASt(AFa),"E",ASr(APR)],SH,
0,DG,[],0,0,0,0,["c",ASt(ADo),"E",ASr(AMz)],Gj,0,BN,[],0,0,0,0,["c",ASt(ADH),"b9",ASt(AJE),"cc",ASu(AMR),"bJ",ASr(AJe),"eO",ASq(ALj),"dP",ASq(AO1)],Gu,0,C,[],1,0,0,0,0,T,0,Gu,[],1,0,0,NT,["cW",ASq(AEv),"ef",ASq(AD2),"ip",ASq(ANv),"gr",ASq(AOX)],Yc,0,T,[],0,0,0,0,["j",ASr(CW),"cW",ASq(CR),"ef",ASq(AGH),"ip",ASq(ANV),"cj",ASq(AKr),"gr",ASq(AGU)],IH,0,Bn,[],0,3,0,0,0,DR,0,Bz,[],1,0,0,0,["bJ",ASr(AMU),"E",ASr(AOi),"dP",ASq(AJ1)],CY,0,DR,[],0,0,0,0,["c",ASt(ADq)],EV,0,CY,[],0,0,0,0,["c",ASt(AEg)],CO,0,DR,[],0,0,
0,0,["c",ASt(ADG)],Es,0,CY,[],0,0,0,0,["c",ASt(AJK),"J",ASr(APV)]]);
$rt_metadata([Vr,0,CY,[],0,0,0,0,["c",ASt(APg),"b9",ASt(AKn)],V,0,C,[],1,0,0,0,0,C9,0,BC,[],0,3,0,0,0,Mk,0,Gu,[Ee],0,0,0,0,["cj",ASq(AKy)],Np,0,Bz,[],0,0,0,0,["c",ASt(AIY),"E",ASr(ALe)],V2,0,C,[Ee,C_],0,3,0,0,0,L9,0,BN,[],0,0,0,0,0,Pr,0,BN,[],0,0,0,0,["c",ASt(AEb),"J",ASr(AKX),"E",ASr(AEK),"bJ",ASr(AEu)],Ds,0,BN,[],0,0,0,0,["c",ASt(AGz),"j",ASr(AG6),"bJ",ASr(AD8),"J",ASr(ANp),"E",ASr(AGL)],IF,0,Ds,[],0,0,0,0,["j",ASr(AIz)],X5,0,BS,[],0,0,0,0,["bo",ASs(AIZ)],D7,0,BS,[],0,0,0,0,["bo",ASs(LJ),"bJ",ASr(ALh)],NX,
0,BN,[],0,0,0,0,["J",ASr(AJJ),"c",ASt(ADf),"bJ",ASr(AEE),"E",ASr(ANZ)],Ec,0,BS,[],0,0,0,0,["bO",ASq(AII),"bo",ASs(AHy),"b9",ASt(AGu),"cc",ASu(AIO),"bJ",ASr(ANR)],ACl,0,BS,[],0,0,0,0,["bo",ASs(ADa)],Xf,0,BS,[],0,0,0,0,["bo",ASs(ADA)],E4,0,BN,[],0,0,0,0,["J",ASr(AO0),"c",ASt(AKZ),"bJ",ASr(AI0),"E",ASr(AL8)],Wl,0,E4,[],0,0,0,0,0,SU,0,E4,[],0,0,0,0,0,W1,0,CO,[],0,0,0,0,["c",ASt(AFC)],OP,0,CO,[],0,0,0,0,["c",ASt(AKe)],FF,0,CO,[],0,0,0,0,["c",ASt(ANl),"J",ASr(AOs)],Ou,0,FF,[],0,0,0,0,["c",ASt(AIK),"J",ASr(AKz)],E1,
0,CO,[],0,0,0,0,["c",ASt(APK)],Mu,0,E1,[],0,0,0,0,["c",ASt(AH3)],Qv,0,CO,[],0,0,0,0,["c",ASt(AO6)],PD,0,FF,[],0,0,0,0,["c",ASt(AEM)],T3,0,E1,[],0,0,0,0,["c",ASt(ADX)],Qx,0,DR,[],0,0,0,0,["c",ASt(APw),"b9",ASt(ANx)],Nx,0,DR,[],0,0,0,0,["c",ASt(ALk),"b9",ASt(ADj)],EE,0,C,[],1,0,0,0,0,W3,0,CY,[],0,0,0,0,["c",ASt(ADZ)],Vn,0,Es,[],0,0,0,0,["c",ASt(AKd)],Oh,0,EV,[],0,0,0,0,["c",ASt(AMY)],Pz,0,CY,[],0,0,0,0,["c",ASt(ALc)],Tb,0,Es,[],0,0,0,0,["c",ASt(AD6)],P$,0,EV,[],0,0,0,0,["c",ASt(ANc)],JQ,0,Bz,[],4,0,0,0,["c",ASt(AJh),
"E",ASr(AIj)],YJ,0,Bz,[],0,0,0,0,["c",ASt(AEr),"E",ASr(AEB)],Nt,0,Bz,[],0,0,0,0,["c",ASt(AID),"E",ASr(APG)],V4,0,Bz,[],4,0,0,0,["c",ASt(ALR),"E",ASr(AFr)],VN,0,Bz,[],0,0,0,0,["c",ASt(AKT),"E",ASr(AC$)],MH,0,Bz,[],0,0,0,0,["c",ASt(AFf),"E",ASr(AHh)],ACb,0,BN,[],0,0,0,0,["c",ASt(APa),"J",ASr(AEG),"ha",ASq(AKE),"E",ASr(AEF)],X_,0,BN,[],4,0,0,0,["c",ASt(AKM),"J",ASr(AMG),"ha",ASq(AC7),"E",ASr(APl)],AB3,0,Bz,[],4,0,0,0,["c",ASt(AI4),"E",ASr(AHb)],AAk,0,Bz,[],0,0,0,0,["c",ASt(AKR),"E",ASr(AG3)],Xc,0,Bz,[],0,0,0,0,
["c",ASt(AH9),"E",ASr(AFw)],GM,0,BN,[],0,0,0,0,["c",ASt(AD1),"J",ASr(AL1),"E",ASr(AMm)],AB8,0,GM,[],0,0,0,0,["c",ASt(AFB),"b9",ASt(AN9),"cc",ASu(ADN),"bJ",ASr(AJ8)]]);
$rt_metadata([Zr,0,GM,[],0,0,0,0,["c",ASt(AJz)],No,0,F8,[Hx],0,3,0,0,["kZ",ASu(AGV),"kc",ASt(AEw),"hh",ASr(AEV),"lu",ASs(ANB)],QE,0,BS,[],0,0,0,0,["bo",ASs(AFV),"b9",ASt(AEm),"cc",ASu(AHf),"bJ",ASr(AHK)],Xb,0,BS,[],0,0,0,0,["bo",ASs(AJG)],MB,0,BS,[],0,0,0,0,["bo",ASs(AM0)],GL,0,C,[],4,0,0,AMx,0,LS,0,BS,[],0,0,0,0,["bo",ASs(AM7)],Ko,0,BN,[],0,0,0,0,["J",ASr(AK8),"c",ASt(AFs),"b9",ASt(AHG),"cc",ASu(AF2),"bJ",ASr(ADL),"E",ASr(ANH)],KI,0,BN,[],0,0,0,0,["J",ASr(AEU),"c",ASt(ADp),"b9",ASt(ALt),"cc",ASu(AMZ),"bJ",
ASr(AFW),"E",ASr(ALB)],DJ,0,BS,[],0,0,0,0,["bo",ASs(AMo),"b9",ASt(AKs),"cc",ASu(AER),"bJ",ASr(AMa)],Us,0,EE,[],0,0,0,0,["g3",ASr(AE7),"qX",ASs(AMf)],Ut,0,EE,[],0,0,0,0,["g3",ASr(ANf),"qX",ASs(AOT)],AA9,0,C,[],0,0,0,0,0,Xt,0,C,[],0,0,0,0,0,Kl,0,V,[],0,0,0,0,["A",ASq(Zz)],Jn,0,V,[],0,0,0,0,["A",ASq(AAd)],AA3,0,V,[],0,0,0,0,["A",ASq(AMK)],ABw,0,V,[],0,0,0,0,["A",ASq(ANK)],ABA,0,V,[],0,0,0,0,["A",ASq(AGA)],Kh,0,V,[],0,0,0,0,["A",ASq(Yd)],KR,0,Kh,[],0,0,0,0,["A",ASq(Y8)],ACU,0,V,[],0,0,0,0,["A",ASq(AHE)],LI,0,KR,
[],0,0,0,0,["A",ASq(W9)],ZM,0,LI,[],0,0,0,0,["A",ASq(AJ2)],Z$,0,V,[],0,0,0,0,["A",ASq(AFP)],YC,0,V,[],0,0,0,0,["A",ASq(AJY)],Yl,0,V,[],0,0,0,0,["A",ASq(AOW)],ABD,0,V,[],0,0,0,0,["A",ASq(AKA)],AC6,0,V,[],0,0,0,0,["A",ASq(ADh)],AA$,0,V,[],0,0,0,0,["A",ASq(AIc)],AAZ,0,V,[],0,0,0,0,["A",ASq(AMr)],ABX,0,V,[],0,0,0,0,["A",ASq(AFL)],XL,0,V,[],0,0,0,0,["A",ASq(AF_)],Xq,0,V,[],0,0,0,0,["A",ASq(AOO)],ABe,0,V,[],0,0,0,0,["A",ASq(ADb)],ABo,0,V,[],0,0,0,0,["A",ASq(AI8)],YZ,0,V,[],0,0,0,0,["A",ASq(AGj)],AAb,0,V,[],0,0,0,
0,["A",ASq(AHj)],ACv,0,V,[],0,0,0,0,["A",ASq(AI$)],ABn,0,V,[],0,0,0,0,["A",ASq(AN2)],Zo,0,V,[],0,0,0,0,["A",ASq(ALL)],YX,0,V,[],0,0,0,0,["A",ASq(AKv)],AC1,0,V,[],0,0,0,0,["A",ASq(AMC)],IP,0,V,[],0,0,0,0,["A",ASq(Z_)],ABZ,0,IP,[],0,0,0,0,["A",ASq(AKj)],ZS,0,Kl,[],0,0,0,0,["A",ASq(AEl)],YR,0,Jn,[],0,0,0,0,["A",ASq(AHv)],Yr,0,V,[],0,0,0,0,["A",ASq(AJm)],YM,0,V,[],0,0,0,0,["A",ASq(AOC)],ZG,0,V,[],0,0,0,0,["A",ASq(AGZ)]]);
$rt_metadata([ZO,0,V,[],0,0,0,0,["A",ASq(ADc)],Yw,0,C,[],4,0,0,0,0,X3,0,C,[],4,3,0,0,0,MI,0,C,[],0,3,0,0,0,ABj,0,C,[],0,3,0,0,0,Zm,0,C,[],4,3,0,0,0,Yb,0,C,[Ih],0,3,0,0,0,Mx,0,C,[Bc],0,3,0,0,["m",ASr(AKq)],Qe,0,C,[Bc],0,3,0,0,["m",ASr(AGW)],UA,0,C,[Bc],0,3,0,0,0,V5,0,C,[Bc],0,3,0,0,0,ABa,0,C,[],3,3,0,0,0,Vq,0,T,[],0,0,0,0,["j",ASr(AGG)],Vo,0,T,[],0,0,0,0,["j",ASr(ADD)],ND,0,T,[],0,0,0,0,["j",ASr(AJc),"cj",ASq(AHn)],NJ,0,T,[],0,0,0,0,["j",ASr(AMq)],NH,0,T,[],0,0,0,0,["j",ASr(AM6)],NI,0,T,[],0,0,0,0,["j",ASr(AJF)],NM,
0,T,[],0,0,0,0,["j",ASr(AGe)],NN,0,T,[],0,0,0,0,["j",ASr(AC8)],NK,0,T,[],0,0,0,0,["j",ASr(AHr)],NL,0,T,[],0,0,0,0,["j",ASr(AJI)],NO,0,T,[],0,0,0,0,["j",ASr(AOc)],NP,0,T,[],0,0,0,0,["j",ASr(AFG)],NC,0,T,[],0,0,0,0,["j",ASr(APY)],Op,0,T,[],0,0,0,0,["j",ASr(AHu)],Nz,0,T,[],0,0,0,0,["j",ASr(AFE)],NA,0,T,[],0,0,0,0,["j",ASr(AG_)],NG,0,T,[],0,0,0,0,["j",ASr(AIG)],Ny,0,T,[],0,0,0,0,["j",ASr(ANQ)],NE,0,T,[],0,0,0,0,["j",ASr(AEz)],NF,0,T,[],0,0,0,0,["j",ASr(ALA)],Ld,0,C,[],3,3,0,0,0,Rx,0,C,[Ld],4,3,0,0,0,Cd,0,Cr,[],
12,3,0,ABL,0,Nq,0,C,[Bc],0,3,0,0,["m",ASr(AMB)],Mo,0,Gj,[],0,0,0,0,["b9",ASt(AG1),"cc",ASu(API),"eO",ASq(AFq)],Pl,0,Bn,[],0,3,0,0,0,Wd,0,Bn,[],0,3,0,0,0,Un,0,FC,[],0,3,0,0,0,O_,0,FC,[],0,3,0,0,0,WU,0,Bn,[],0,3,0,0,0,Ug,0,C,[],0,3,0,0,0,N8,0,C,[Bi],0,3,0,0,0,RH,0,C,[Bc],0,3,0,0,0,RG,0,C,[Bc],0,3,0,0,0,Uk,0,C,[Ld],0,0,0,0,0,UN,0,C,[Bi],0,3,0,0,["q",ASq(AOo)],YO,0,C,[],0,3,0,0,0,O4,0,C,[],3,3,0,0,0]);
$rt_metadata([Wf,0,C,[O4],0,3,0,0,0,R0,0,T,[],0,0,0,0,["j",ASr(AOl)],L7,0,T,[],0,0,0,0,["j",ASr(AEj)],QZ,0,T,[],0,0,0,0,["j",ASr(AD5)],QY,0,T,[],0,0,0,0,["j",ASr(AGY)],VV,0,T,[],0,0,0,0,["j",ASr(AIr)],Oa,0,T,[],0,0,0,0,["j",ASr(AOp)],Nj,0,T,[],0,0,0,0,["j",ASr(AK2)],PO,0,T,[],0,0,0,0,["j",ASr(AMw)],L0,0,T,[],0,0,0,0,["j",ASr(APj)],L5,0,T,[],0,0,0,0,["j",ASr(AF1)],M6,0,T,[],0,0,0,0,["j",ASr(AOA)],OC,0,T,[],0,0,0,0,["j",ASr(AJU)],OL,0,T,[],0,0,0,0,["j",ASr(ALZ)],SQ,0,T,[],0,0,0,0,["j",ASr(AOd)],Rz,0,T,[],0,0,
0,0,["j",ASr(AO4)],Mh,0,T,[],0,0,0,0,["j",ASr(AFN)],Lv,0,T,[],0,0,0,0,["j",ASr(AK5)],QR,0,Lv,[],0,0,0,0,["j",ASr(ANq)],O5,0,C,[Im],0,3,0,0,["pp",ASq(AJt)],UV,0,C,[BU],0,3,0,0,["be",ASr(ALQ)],UY,0,C,[BU],0,3,0,0,["be",ASr(AKF)],SC,0,C,[BU],0,3,0,0,["be",ASr(AHA)],SF,0,C,[BU],0,3,0,0,["be",ASr(ADx)],TH,0,C,[BU],0,3,0,0,["be",ASr(AJo)],Px,0,C,[Bc],0,3,0,0,["m",ASr(AEc)],Pv,0,C,[Bc],0,3,0,0,["m",ASr(AGN)],Pw,0,C,[Bc],0,3,0,0,["m",ASr(AMH)],XT,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.I5=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"Window 2","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","...","Usages of ","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Co=Long_add;var JS=Long_sub;var BM=Long_mul;var Dh=Long_div;var L$=Long_rem;var AQE=Long_or;var CT=Long_and;var AVt=Long_xor;var Fc=Long_shl;var Ge=Long_shr;var DW=Long_shru;var AQ0=Long_compare;var E2=Long_eq;var AVu=Long_ne;var AGm=Long_lt;var OZ=Long_le;var AF5=Long_gt;var YG=Long_ge;var AVv=Long_not;var ARa=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ARe);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=SX.prototype;c.f=c.be;c=SV.prototype;c.f=c.be;c=My.prototype;c.f=c.be;c=Y$.prototype;c.get=c.EO;Object.defineProperty(c,"length",{get:c.D$});c=M7.prototype;c.f=c.be;c=XB.prototype;c.removeEventListener=c.Bt;c.dispatchEvent=c.zz;c.get=c.wT;c.addEventListener=c.x9;Object.defineProperty(c,"length",{get:c.zF});c=UP.prototype;c.onAnimationFrame=c.Bv;c=UJ.prototype;c.f=c.s5;c=UG.prototype;c.handleEvent=c.b4;c=UH.prototype;c.f=c.be;c=V6.prototype;c.accept=c.th;c=V7.prototype;c.accept=c.th;c=Vx.prototype;c.handleEvent
=c.b4;c=Vy.prototype;c.handleEvent=c.b4;c=Vz.prototype;c.handleEvent=c.b4;c=VA.prototype;c.handleEvent=c.b4;c=VB.prototype;c.handleEvent=c.b4;c=VC.prototype;c.handleEvent=c.b4;c=VD.prototype;c.handleEvent=c.b4;c=VE.prototype;c.handleEvent=c.b4;c=VF.prototype;c.handleEvent=c.b4;c=VG.prototype;c.handleEvent=c.b4;c=WO.prototype;c.handleEvent=c.b4;c=WP.prototype;c.handleEvent=c.b4;c=WQ.prototype;c.handleEvent=c.b4;c=WR.prototype;c.handleEvent=c.b4;c=Tw.prototype;c.handleEvent=c.b4;c=Wy.prototype;c.f=c.be;c=Wz.prototype;c.f
=c.be;c=MG.prototype;c.f=c.be;c=MF.prototype;c.f=c.be;c=ME.prototype;c.f=c.be;c=MD.prototype;c.f=c.be;c=M1.prototype;c.accept=c.th;c=On.prototype;c.f=c.s5;c=Ol.prototype;c.f=c.s5;c=PQ.prototype;c.f=c.be;c=TM.prototype;c.f=c.be;c=L8.prototype;c.f=c.be;c=Wo.prototype;c.f=c.be;c=Wn.prototype;c.f=c.be;c=VQ.prototype;c.f=c.be;c=VP.prototype;c.f=c.be;c=Wi.prototype;c.handleEvent=c.b4;c=Pb.prototype;c.f=c.be;c=L4.prototype;c.onTimer=c.pp;c=LM.prototype;c.onTimer=c.pp;c=Wm.prototype;c.f=c.be;c=V9.prototype;c.f=c.be;c
=Tm.prototype;c.f=c.be;c=O5.prototype;c.onTimer=c.pp;c=UV.prototype;c.f=c.be;c=UY.prototype;c.f=c.be;c=SC.prototype;c.f=c.be;c=SF.prototype;c.f=c.be;c=TH.prototype;c.f=c.be;})();
}));
