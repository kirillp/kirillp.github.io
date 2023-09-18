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
index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eI=f;}
function $rt_cls(cls){return ACt(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FU(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bY.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AO9(t);}
function $rt_throwableCause(t){return APf(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AUQ());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AUR(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AUS());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BE=$rt_compare;var AUT=$rt_nullCheck;var E=$rt_cls;var S=$rt_createArray;var IG=$rt_isInstance;var AUU=$rt_nativeThread;var AUV=$rt_suspending;var AUW=$rt_resuming;var AUX=$rt_invalidPointer;var B=$rt_s;var Bl=$rt_eraseClinit;var X=$rt_imul;var Ei=$rt_wrapException;var AUY=$rt_checkBounds;var AUZ=$rt_checkUpperBound;var AU0=$rt_checkLowerBound;var AU1=$rt_wrapFunction0;var AU2=$rt_wrapFunction1;var AU3=$rt_wrapFunction2;var AU4=$rt_wrapFunction3;var AU5=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var ABd=$rt_createCharArrayFromData;var ATC=$rt_createByteArrayFromData;var AU6=$rt_createShortArrayFromData;var E6=$rt_createIntArrayFromData;var AU7=$rt_createBooleanArrayFromData;var AU8=$rt_createFloatArrayFromData;var AU9=$rt_createDoubleArrayFromData;var AG2=$rt_createLongArrayFromData;var AUP=$rt_createBooleanArray;var DW=$rt_createByteArray;var AU$=$rt_createShortArray;var BN=$rt_createCharArray;var BC=$rt_createIntArray;var AUt=$rt_createLongArray;var AFd=$rt_createFloatArray;var AU_
=$rt_createDoubleArray;var BE=$rt_compare;var AVa=$rt_castToClass;var AVb=$rt_castToInterface;var AVc=Long_toNumber;var Bd=Long_fromInt;var AVd=Long_fromNumber;var Cc=Long_create;var Eo=Long_ZERO;var AVe=Long_hi;var EE=Long_lo;
function C(){this.$id$=0;}
function AVf(){var a=new C();ADF(a);return a;}
function ADF(a){}
function Co(a){return ACt(a.constructor);}
function AL5(a,b){return a!==b?0:1;}
function AGN(a){var b,c,d,e,f,g,h,i,j;b=YH(a);if(!b)c=B(0);else{d=(((32-NP(b)|0)+4|0)-1|0)/4|0;e=BN(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Hb((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FU(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function YH(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALm(a){var b,c,d;if(!IG(a,Em)&&a.constructor.$meta.item===null){b=new VZ;V(b);J(b);}b=AFo(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function RR(){var a=this;C.call(a);a.uF=0;a.qU=null;}
function ATQ(b){var c,d,e,f,g,h,i,j,k,l;ADD();YY();ABQ();ACV();AAq();ADk();ADH();AEX();YP();ACK();ACc();YN();ACJ();ACL();ABr();AAz();AAR();ZO();AAZ();AA1();Y8();YQ();AEF();c=(Zc()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Pa(B(2),B(3));else{d=new RR;BK(d);e=new T8;e.sx=d;f=new Nk;c=new $rt_globals.Worker("teavm/worker.js");g=new NU;g.oZ=c;g.o0=e;g.o1=f;e=Bi(g,"f");c.onmessage=e;h=H(LR,[JO(B(4),B(5),400),JO(B(6),B(7),400),JO(B(8),B(5),
700),JO(B(9),B(7),700)]);b=S(LR,1);b.data[0]=AP5(B(10),Fc(B(11),B(12)),B(5),400);b=(LN(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.r5;f=c.qO;k=new M;O(k);BB(G(G(k,B(13)),f),41);k=N(k);f=c.qJ;l=c.oH;f=AJc($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BK(d);c=new T9;c.tA=d;g=new T7;e.then(Bi(c,"f"),Bi(g,"f"));}}
function ABv(b){var c,d,e,f,g,h,i,j,k;c=new SZ;d=new R3;c.pV=new $rt_globals.TextDecoder("utf-16");e=new VY;e.oC=c;c.rH=e;e=new VR;e.uW=c;c.l9=e;f=new VS;f.rw=c;c.tJ=new $rt_globals.ResizeObserver(Bi(f,"f"));e=new VP;e.n0=c;c.mP=e;c.h_=1;f=new O$;f.xD=null;f.jq=AVg;c.lL=f;c.ql=b;f=new VQ;f.tV=c;e=Bi(f,"f");b.onmessage=e;e=ABq();b.postMessage(e);c.mI=(D_()).getElementById("canvasDiv");b=Zc();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dF
=b;c.mI.appendChild(b);f=c.dF;e=ANr(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)Pa(B(2),B(14));else{g=new Pv;e=c.dF;f=c.l9;g.dx=null;g.g0=e;g.cm=AT1(f);h=$rt_globals.window;i=S(Dr,14);j=i.data;k=new WK;k.m8=g;j[0]=CS(g,e,B(15),k);f=new WL;f.sd=g;j[1]=CS(g,e,B(16),f);f=new WM;f.ok=g;j[2]=CS(g,e,B(17),f);f=new WN;f.uR=g;j[3]=CS(g,e,B(18),f);f=new WO;f.rj=g;j[4]=CS(g,e,B(19),f);f=new WP;f.nA=g;j[5]=CS(g,e,B(20),f);k=new WQ;k.u8=g;j[6]=CS(g,e,B(21),k);k=new WR;k.rz=g;j[7]=CS(g,e,B(22),k);k=new WS;k.nL
=g;j[8]=CS(g,e,B(23),k);k=new WT;k.t5=g;j[9]=CS(g,e,B(24),k);k=new Yb;k.tu=g;j[10]=CS(g,e,B(25),k);k=new Yc;k.st=g;j[11]=ACE(g,h,B(26),k,1);k=new Yd;k.mr=g;j[12]=CS(g,h,B(27),k);k=new Ye;k.un=g;j[13]=CS(g,h,B(28),k);g.w0=ARr(i);AAJ(g,e);c.lk=g;c.f2=ATo(b,c.l9);API(c.tJ,c.dF);e=$rt_globals.window;g=c.mP;e.addEventListener("resize",Bi(g,"handleEvent"));c.fi=ABL(d,AAB(c));Ty(c);}AC$(c);}
var Ne=F(0);
var MH=F(0);
function WF(){var a=this;C.call(a);a.kc=null;a.fN=null;}
function ACt(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new WF;c.fN=b;d=c;b.classObject=d;}return c;}
function H4(a){if(a.kc===null)a.kc=$rt_str(a.fN.$meta.name);return a.kc;}
function HR(a){return a.fN.$meta.primitive?1:0;}
function H_(a){return ACt(a.fN.$meta.item);}
var ZS=F();
function Bi(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Lo(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Zz=F();
function AFo(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ACw(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ACw(d[e],c))return 1;e=e+1|0;}return 0;}
function Gt(){var a=this;C.call(a);a.hj=null;a.kJ=null;a.i7=0;a.js=0;}
function AVh(){var a=new Gt();V(a);return a;}
function AVi(a){var b=new Gt();Bn(b,a);return b;}
function V(a){a.i7=1;a.js=1;}
function Bn(a,b){a.i7=1;a.js=1;a.hj=b;}
function AIT(a){return a;}
function AO9(a){return a.hj;}
function APf(a){var b;b=a.kJ;if(b===a)b=null;return b;}
var D3=F(Gt);
var Bq=F(D3);
function AUR(a){var b=new Bq();AQ9(b,a);return b;}
function AQ9(a,b){Bn(a,b);}
var ABu=F(Bq);
var Dh=F(0);
var CI=F(0);
var IT=F(0);
function Bv(){var a=this;C.call(a);a.bY=null;a.hE=0;}
var AVj=null;var AVk=null;var AVl=null;function EN(){EN=Bl(Bv);AQF();}
function AJD(){var a=new Bv();YR(a);return a;}
function FU(a){var b=new Bv();Hk(b,a);return b;}
function Hu(a,b,c){var d=new Bv();Mv(d,a,b,c);return d;}
function YR(a){EN();a.bY=AVj;}
function Hk(a,b){EN();Mv(a,b,0,b.data.length);}
function Mv(a,b,c,d){var e;EN();e=BN(d);a.bY=e;Dw(b,c,e,0,d);}
function Mq(b){var c;EN();c=AJD();c.bY=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bY.data;if(b<c.length)return c[b];}d=new G_;V(d);J(d);}
function I(a){return a.bY.data.length;}
function Fp(a){return a.bY.data.length?0:1;}
function PQ(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=I(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dw(a.bY,b,d,e,c);return;}}g=new Bx;V(g);J(g);}
function Uz(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function KF(a,b){if(a===b)return 1;return Uz(a,b,0);}
function Ef(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GE(a,b,c){var d,e,f,g,h;d=Bc(0,c);if(b<65536){e=b&65535;while(true){f=a.bY.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=H7(b);h=IL(b);while(true){f=a.bY.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function F0(a,b,c){var d,e,f,g,h;d=Ba(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bY.data[d]==e)break;d=d+(-1)|0;}return d;}f=H7(b);g=IL(b);while(true){if(d<1)return (-1);h=a.bY.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function AAi(a,b,c){var d,e,f;d=Bc(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function PN(a,b,c){var d,e;d=Ba(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function B$(a,b,c){var d,e;d=BE(b,c);if(d>0){e=new Bx;V(e);J(e);}if(!d){EN();return AVk;}if(!b&&c==I(a))return a;return Hu(a.bY,b,c-b|0);}
function Dj(a,b){return B$(a,b,I(a));}
function PW(a,b,c){return B$(a,b,c);}
function Fc(a,b){var c,d,e,f,g,h;if(Fp(b))return a;if(Fp(a))return b;c=BN(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Mq(c);}
function Vq(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BB(d,L(a,f));}f=f+1|0;}G(d,Dj(a,f));return N(d);}
function R7(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B$(a,b,c+1|0);}
function AGM(a){return a;}
function Gr(a){var b,c,d,e,f;b=a.bY.data;c=BN(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cw(b){EN();return b===null?B(29):b.ct();}
function C5(b){var c;EN();c=new M;O(c);return N(T(c,b));}
function Bo(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Lm(a){var b,c,d,e;a:{if(!a.hE){b=a.bY.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hE=(31*a.hE|0)+e|0;d=d+1|0;}}}return a.hE;}
function L2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GA;Bn(b,B(30));J(b);}AVm=1;d=new Rc;d.jY=S(CN,10);d.f9=(-1);d.ez=(-1);d.br=(-1);e=new GG;e.ew=1;e.bK=b;e.bc=BN(I(b)+2|0);Dw(Gr(b),0,e.bc,0,I(b));f=e.bc.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.rn=g;e.fR=0;E3(e);E3(e);d.g=e;d.dj=0;d.kW=X3(d,(-1),0,null);if(!Di(d.g)){b=new IO;h=d.g;Jj(b,B(31),h.bK,h.c8);J(b);}if(d.m_)d.kW.d_();b=Cn();h=new SJ;h.h8=(-1);h.kh=(-1);h.v6=d;h.tF=d.kW;h.ix=a;h.h8=0;g=I(a);h.kh=g;e=new Vt;i=h.h8;j=d.f9;k=d.ez+1|0;l=d.br+
1|0;e.ho=(-1);m=j+1|0;e.od=m;e.dE=BC(m*2|0);f=BC(l);e.jo=f;Hr(f,(-1));if(k>0)e.kL=BC(k);Hr(e.dE,(-1));XW(e,a,i,g);h.cs=e;e.e$=1;n=0;m=0;if(!I(a)){f=S(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.ix);if(!Y1(h))l=h.kh;e=h.cs;if(e.d6>=0&&AAP(e)==1){e=h.cs;e.d6=I5(e);if(I5(h.cs)==ACU(h.cs)){e=h.cs;e.d6=e.d6+1|0;}g=h.cs.d6;g=g<=l&&MP(h,g)?1:0;}else g=MP(h,h.h8);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BZ(b,PW(a,m,AEp(h)));m=AAu(h);n=g;}a:{BZ(b,PW(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bt(b,
g)))break a;En(b,g);}}if(g<0)g=0;f=HH(b,S(Bv,g));}return f;}
function AI3(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Ba(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AQF(){AVj=BN(0);AVk=AJD();AVl=new Tb;}
var EH=F(Gt);
var Hc=F(EH);
var AA7=F(Hc);
var DV=F();
function Fg(){DV.call(this);this.fs=0;}
var AVn=null;var AVo=null;function AD0(a){var b=new Fg();J0(b,a);return b;}
function J0(a,b){a.fs=b;}
function Jw(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dd;Bn(b,B(32));J(b);}d=I(b);if(0==d){b=new Dd;Bn(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dd;V(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=O4(L(b,f));if(i<0){j=new Dd;k=B$(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bn(j,N(b));J(j);}if(i>=c){j=new Dd;l=B$(b,0,d);b=new M;O(b);G(G(T(G(b,B(35)),c),B(36)),l);Bn(j,N(b));J(j);}g=X(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dd;k=B$(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bn(j,N(b));J(j);}b=new Dd;j=new M;O(j);T(G(j,B(38)),c);Bn(b,N(j));J(b);}
function FZ(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AVo===null){AVo=S(Fg,256);c=0;while(true){d=AVo.data;if(c>=d.length)break a;d[c]=AD0(c-128|0);c=c+1|0;}}}return AVo.data[b+128|0];}return AD0(b);}
function L$(a){var b;b=a.fs;return (NA(AUB(20),b,10)).ct();}
function NP(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Ij(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Kc(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function ALh(a,b){b=b;return BE(a.fs,b.fs);}
function ADD(){AVn=E($rt_intcls());}
function Gg(){var a=this;C.call(a);a.A=null;a.N=0;}
function AVp(){var a=new Gg();O(a);return a;}
function AUB(a){var b=new Gg();FW(b,a);return b;}
function O(a){FW(a,16);}
function FW(a,b){a.A=BN(b);}
function NA(a,b,c){return ABk(a,a.N,b,c);}
function ABk(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cd(a,b,b+1|0);else{Cd(a,b,b+2|0);f=a.A.data;g=b+1|0;f[b]=45;b=g;}a.A.data[b]=Hb(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=X(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cd(a,b,b+i|0);if(e)e=b;else{f=a.A.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.A.data;b=e+1|0;f[e]=Hb($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ACk(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BE(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVq;ACd(c,f);d=f.km;g=f.j9;h=f.nv;i=1;j=1;if(h)j=2;k=9;l=AP9(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bc(k,i+1|0);g=0;}else{d=d/AVr.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cd(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.A.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.A.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.A.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function AAb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BE(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVs;ABo(c,f);g=f.kY;h=f.jR;i=f.m6;j=1;k=1;if(i)k=2;l=18;m=ANV(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bc(l,j+1|0);h=0;}else{g=Do(g,AVt.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cd(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.A.data;k=b+1|0;e[b]=45;}n=Cc(1569325056, 23283064);o=0;while(o<l){if(PM(n,Eo))d=0;else{d=EE(Do(g,n));g
=MZ(g,n);}e=a.A.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Do(n,Bd(10));o=o+1|0;}if(h){e=a.A.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AP9(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ANV(b){var c,d,e,f,g;c=Bd(1);d=0;e=16;f=AVu.data;g=f.length-1|0;while(g>=0){if(Fb(MZ(b,BQ(c,f[g])),Eo)){d=d|e;c=BQ(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BB(a,b){return a.lS(a.N,b);}
function XH(a,b,c){Cd(a,b,b+1|0);a.A.data[b]=c;return a;}
function Jz(a,b){var c,d;c=a.A.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bc(b,Bc(c*2|0,5));a.A=NJ(a.A,d);}
function N(a){return Hu(a.A,0,a.N);}
function Xo(a,b,c,d){return a.lj(a.N,b,c,d);}
function M$(a,b,c,d,e){var f,g,h,i;Cd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.A.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Ik(a,b){return a.ku(b,0,b.data.length);}
function Cd(a,b,c){var d,e,f,g;d=a.N;e=d-b|0;a.hx((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.A.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.N=a.N+(c-b|0)|0;}
var HW=F(0);
var M=F(Gg);
function LV(){var a=new M();ARx(a);return a;}
function ARx(a){O(a);}
function G(a,b){var c;c=a.N;if(b===null)b=B(29);Mr(a,c,b);return a;}
function B0(a,b){Mr(a,a.N,b);return a;}
function T(a,b){NA(a,b,10);return a;}
function HT(a,b){var c,d,e,f,g,h,i,j;c=a.N;d=1;if(AIo(b,Eo)){d=0;b=ATM(b);}a:{if(Lh(b,Bd(10))<0){if(d)Cd(a,c,c+1|0);else{Cd(a,c,c+2|0);e=a.A.data;f=c+1|0;e[c]=45;c=f;}a.A.data[c]=Hb(EE(b),10);}else{g=1;h=Bd(1);i=FF(Bd(-1),Bd(10));b:{while(true){j=BQ(h,Bd(10));if(Lh(j,b)>0){j=h;break b;}g=g+1|0;if(Lh(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cd(a,c,c+g|0);if(d)f=c;else{e=a.A.data;f=c+1|0;e[c]=45;}while(true){if(Fb(j,Eo))break a;e=a.A.data;c=f+1|0;e[f]=Hb(EE((FF(b,j))),10);b=Nx(b,j);j=FF(j,Bd(10));f=c;}}}return a;}
function Fk(a,b){ACk(a,a.N,b);return a;}
function YL(a,b){BB(a,b);return a;}
function F4(a,b){Mr(a,a.N,!b?B(39):B(40));return a;}
function AEd(a,b,c){var d,e,f,g,h,i;d=BE(b,c);if(d<=0){e=a.N;if(b<=e){if(d){f=e-c|0;a.N=e-(c-b|0)|0;g=0;while(g<f){h=a.A.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new G_;V(i);J(i);}
function Wq(a,b){var c,d,e,f;if(b>=0){c=a.N;if(b<c){c=c-1|0;a.N=c;while(b<c){d=a.A.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new G_;V(f);J(f);}
function ALc(a,b,c,d,e){M$(a,b,c,d,e);return a;}
function AH_(a,b,c,d){Xo(a,b,c,d);return a;}
function Zl(a){return a.N;}
function DT(a){return N(a);}
function ALk(a,b){Jz(a,b);}
function ALO(a,b,c){XH(a,b,c);return a;}
function Mr(a,b,c){var d,e,f;if(b>=0&&b<=a.N){a:{if(c===null)c=B(29);else if(Fp(c))break a;Jz(a,a.N+I(c)|0);d=a.N-1|0;while(d>=b){a.A.data[d+I(c)|0]=a.A.data[d];d=d+(-1)|0;}a.N=a.N+I(c)|0;d=0;while(d<I(c)){e=a.A.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new G_;V(c);J(c);}
var Er=F(Hc);
var ACD=F(Er);
function AVv(a){var b=new ACD();AGW(b,a);return b;}
function AGW(a,b){Bn(a,b);}
var AAV=F(Er);
function AVw(a){var b=new AAV();AHh(b,a);return b;}
function AHh(a,b){Bn(a,b);}
var T0=F(0);
var Dr=F(0);
function ARr(b){var c;c=new Qi;c.wj=b;return c;}
function CG(b,c){if(b!==null)b.dV();return c;}
var O0=F(0);
function IA(){var a=this;C.call(a);a.lx=0;a.kH=0;}
var AVx=0;function FN(a){AVx=AVx-1|0;}
function F1(a,b,c){Je(a,Z7(b,c,400,0));}
function Q1(a,b){return KP(a,b,0.875);}
function KP(a,b,c){return Eq(a,b)+c|0;}
function RD(){var a=this;IA.call(a);a.jv=null;a.bn=null;a.mx=null;}
function Ew(a){var b,c,d;b=a.bn;c=a.lx;d=a.kH;b.clearRect(0.0,0.0,c,d);}
function Sm(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bn;d="center";c.textAlign=d;break a;case 2:c=a.bn;d="right";c.textAlign=d;break a;default:break a;}d=a.bn;c="left";d.textAlign=c;}}
function Cx(a,b){Je(a,JR(b.mS));}
function Je(a,b){var c;if(!(a.mx==b?1:0)){c=a.bn;a.mx=b;c.font=b;}}
function Z7(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.bn;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eq(a,b){var c;c=$rt_ustr(b);return a.bn.measureText(c).width;}
function Lu(a,b,c,d){var e,f;e=a.bn;f=$rt_ustr(FU(ABd([35,GD(b/16|0),GD(b%16|0),GD(c/16|0),GD(c%16|0),GD(d/16|0),GD(d%16|0)])));e.fillStyle=f;}
var YZ=F();
var ADU=F();
function C6(b,c){if(b===c)return 1;return b!==null?b.cx(c):c!==null?0:1;}
function BK(b){if(b!==null)return b;b=new GA;Bn(b,B(31));J(b);}
var Z=F(0);
function T8(){C.call(this);this.sx=null;}
var Bw=F(0);
var ABK=F();
var Y4=F(0);
function JO(b,c,d){return AP5(B(41),Fc(B(11),b),c,d);}
var ADt=F(0);
var ADn=F(0);
function LN(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dk(b,f+g|0);Dw(c,0,d,f,g);return d;}
function K0(b,c,d){Dw(b,c,d,0,d.data.length);return d;}
function Rl(b,c,d){var e;if(c>0)Dw(b,0,d,0,c);e=d.data.length;if(c<e)Dw(b,c+1|0,d,c,e-c|0);return d;}
function AA0(b,c,d,e){var f;if(c>0)Dw(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dw(b,d,e,c,f-d|0);}return e;}
function FR(b){var c;c=new Wg;c.iK=b;return c;}
function ZX(b,c){if(b.data.length!=c)b=Dk(b,c);return b;}
function ADm(b,c,d){var e;e=c.data.length;if(e==d)c=Dk(c,e*2|0);c.data[d]=b;return c;}
function LR(){var a=this;C.call(a);a.r5=null;a.qO=null;a.qJ=null;a.oH=0;}
function AP5(a,b,c,d){var e=new LR();AOZ(e,a,b,c,d);return e;}
function AOZ(a,b,c,d,e){a.r5=b;a.qO=c;a.qJ=d;a.oH=e;}
var ZP=F();
function AJc(b,c){return {style:b,weight:c};}
var BM=F(0);
function T9(){C.call(this);this.tA=null;}
function AE1(a,b){var c,d,e;c=a.tA;d=0;while(d<b.length){e=b[d];(D_()).fonts.add(e);d=d+1|0;}c.uF=1;b=c.qU;if(b!==null)ABv(b);}
var T7=F();
function AQM(a,b){$rt_globals.console.info("font load error "+b);}
var Ls=F();
var AVy=null;var AVz=null;function Bu(){if(AVy===null)AVy=AMD(AVA,0);return AVy;}
function Iz(){if(AVz===null)AVz=AMD(AVB,0);return AVz;}
function ATG(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Lv(b)&&(e+f|0)<=Lv(d)){a:{b:{if(b!==d){g=H_(Co(b));h=H_(Co(d));if(g!==null&&h!==null){if(g===h)break b;if(!HR(g)&&!HR(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fN;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ACw(n.constructor,o)?1:0)){KH(b,c,d,e,j);b=new IM;V(b);J(b);}j=j+1|0;k=m;}KH(b,c,d,e,f);return;}if(!HR(g))break a;if(HR(h))break b;else break a;}b=new IM;V(b);J(b);}}KH(b,c,
d,e,f);return;}b=new IM;V(b);J(b);}b=new Bx;V(b);J(b);}d=new GA;Bn(d,B(42));J(d);}
function Dw(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Lv(b)&&(e+f|0)<=Lv(d)){KH(b,c,d,e,f);return;}b=new Bx;V(b);J(b);}
function KH(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FD(){return Long_fromNumber(new Date().getTime());}
function ACW(){return AVd($rt_globals.performance.now()*1000000.0);}
var ADj=F();
var AAw=F();
function Pa(b,c){var d,e,f;d=(D_()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(D_()).getElementById($rt_ustr(b)).appendChild(d);}
function Zc(){return (D_()).createElement("canvas");}
function AEh(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ANr(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AEU=F();
var Nk=F();
function AM_(a,b){var c;c=new Bq;Bn(c,$rt_str(b.message));J(c);}
var ADJ=F();
function FB(b){return $rt_str(b);}
var Zg=F();
function NJ(b,c){var d,e,f,g;b=b.data;d=BN(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function W_(b,c){var d,e,f,g;b=b.data;d=DW(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Mf(b,c){var d,e,f,g;b=b.data;d=BC(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dk(b,c){var d,e,f,g;d=b.data;e=UW(H_(Co(b)),c);f=Ba(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Z3(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B0(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(44));G(c,e[d]);d=d+1|0;}B0(c,B(45));return N(c);}
function ACS(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B0(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(44));T(c,e[d]);d=d+1|0;}B0(c,B(45));return N(c);}
function APw(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B0(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(44));Fk(c,e[d]);d=d+1|0;}B0(c,B(45));return N(c);}
function ASd(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);B0(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(44));f=e[d];AAb(c,c.N,f);d=d+1|0;}B0(c,B(45));return N(c);}
function Hr(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BD;V(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZF(b,c,d,e){var f,g;if(c>d){e=new BD;V(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AAr(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AVg;e=S(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Ba(j,h+f|0);l=h+(2*f|0)|0;m=Ba(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.l2(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ACl(b,c){return Ud(b,0,b.data.length,c);}
function Ud(b,c,d,e){var f,g,h,i,j;f=BE(c,d);if(f>0){g=new BD;V(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var JN=F(0);
var AAM=F();
function ARZ(a,b){return a.v3(b);}
function AG6(a){return a.xn();}
var ABi=F();
var FM=F(0);
var Tb=F();
var Bx=F(Bq);
var ACi=F();
function Lv(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AVC());}return b.data.length;}
function UW(b,c){if(b===null){b=new GA;V(b);J(b);}if(b===E($rt_voidcls())){b=new BD;V(b);J(b);}if(c>=0)return ARe(b.fN,c);b=new Yr;V(b);J(b);}
function ARe(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GA=F(Bq);
var IM=F(Bq);
var C7=F();
var AVD=null;var AVE=null;var AVF=null;var AVG=null;var AVH=null;var AVI=null;var AVJ=null;var AVK=null;var AVL=null;var AVM=null;function Xf(b){var c,d;c=new Bv;d=BN(1);d.data[0]=b;Hk(c,d);return c;}
function L7(b){return b>=65536&&b<=1114111?1:0;}
function CD(b){return (b&64512)!=55296?0:1;}
function C4(b){return (b&64512)!=56320?0:1;}
function Ma(b){return !CD(b)&&!C4(b)?0:1;}
function Hj(b,c){return CD(b)&&C4(c)?1:0;}
function Eu(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function H7(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function IL(b){return (56320|b&1023)&65535;}
function EX(b){return Gz(b)&65535;}
function Gz(b){if(AVG===null){if(AVJ===null)AVJ=ACR();AVG=AA4((AVJ.value!==null?$rt_str(AVJ.value):null));}return SR(AVG,b);}
function Ey(b){return Gw(b)&65535;}
function Gw(b){if(AVF===null){if(AVK===null)AVK=ADE();AVF=AA4((AVK.value!==null?$rt_str(AVK.value):null));}return SR(AVF,b);}
function SR(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BE(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function U4(b,c){if(c>=2&&c<=36){b=O4(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function O4(b){var c,d,e,f,g,h,i,j,k,l;if(AVE===null){if(AVL===null)AVL=AA9();c=(AVL.value!==null?$rt_str(AVL.value):null);d=APg(Gr(c));e=JL(d);f=BC(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Ng(d)|0;j=j+Ng(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AVE=f;}g=AVE.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BE(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Hb(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Go(b){var c;if(b<65536){c=BN(1);c.data[0]=b&65535;return c;}return ABd([H7(b),IL(b)]);}
function Ct(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Ma(b&65535))return 19;if(AVH===null){if(AVM===null)AVM=AEJ();d=(AVM.value!==null?$rt_str(AVM.value):null);e=S(Nu,16384);f=e.data;g=DW(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=KG(L(d,l));if(m==64){l=l+1|0;m=KG(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|X(c,KG(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=KG(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AI0(k,k+i|0,W_(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AI0(k,k+i|0,W_(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AVH=Dk(e,j);}e=AVH.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.q9)o=p+1|0;else{c=d.oX;if(b>=c)return d.o$.data[b-c|0];c=p-1|0;}}return 0;}
function Ju(b){a:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gj(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Ct(b)!=16?0:1;}
function Px(b){switch(Ct(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Rd(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Px(b);}return 1;}
function YY(){AVD=E($rt_charcls());AVI=S(C7,128);}
function ACR(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ADE(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AA9(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AEJ(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var MB=F(0);
var SQ=F(0);
var Ej=F(0);
var ADT=F(0);
function D_(){return $rt_globals.window.document;}
function NU(){var a=this;C.call(a);a.oZ=null;a.o0=null;a.o1=null;}
function AOh(a,b){var c,d,e;c=a.oZ;d=a.o0;e=a.o1;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=JR(KJ(c));c=d.sx;c.qU=b;if(c.uF)ABv(b);}}
var ABf=F();
function Fv(){return AR0();}
function AR0(){return Math.random();}
function Ba(b,c){if(b<c)c=b;return c;}
function Bc(b,c){if(b>c)c=b;return c;}
function I6(b){if(b<=0)b= -b|0;return b;}
var Pm=F(0);
var Rt=F(0);
var Ri=F(0);
var TU=F(0);
var Xp=F(0);
var U5=F(0);
var OI=F(0);
var Y3=F();
function ALJ(a,b,c){a.Ed($rt_str(b),Lo(c,"handleEvent"));}
function AL7(a,b,c){a.Bf($rt_str(b),Lo(c,"handleEvent"));}
function AF7(a,b){return a.v3(b);}
function ANe(a,b,c,d){a.zw($rt_str(b),Lo(c,"handleEvent"),d?1:0);}
function AQ7(a,b){return !!a.Ei(b);}
function AG9(a){return a.xn();}
function AFn(a,b,c,d){a.CP($rt_str(b),Lo(c,"handleEvent"),d?1:0);}
var BD=F(Bq);
var Yr=F(Bq);
var G_=F(Bx);
var AAf=F();
function ABq(){return "ping";}
function D5(){C.call(this);this.i2=null;}
var AVN=null;var AVO=null;var AVP=null;var AVQ=null;var AVR=null;var AVS=null;function Kw(){Kw=Bl(D5);AHf();}
function M5(a){var b=new D5();AB6(b,a);return b;}
function AB6(a,b){Kw();a.i2=b;}
function KJ(b){var c,d,e,f,g;Kw();if(b===null)return null;a:{c=b;if(AVO!==null){d=$rt_str(typeof c);if(!Bo(d,B(46))&&!Bo(d,B(47))){if(Bo(d,B(48))){b=AVP.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=M5(c);g=f;b=AVP;e=new $rt_globals.WeakRef(g);b.set(c,e);AVR.register(g,c);return f;}if(!Bo(d,B(49)))break a;else{b=AVQ.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=M5(c);g=f;b=AVQ;e=new $rt_globals.WeakRef(g);b.set(c,
e);AVS.register(g,c);return f;}}b=AVO.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=M5(c);b=AVO;e=new $rt_globals.WeakRef(f);b.set(c,e);return f;}}return M5(c);}
function JR(b){Kw();if(b!==null)return b.i2;return null;}
function AQT(a,b){if(b===a)return 1;if(b===null)return 0;if(!(b instanceof D5))return 0;return a.i2!==b.i2?0:1;}
function AHf(){AVN=new $rt_globals.WeakMap();AVO=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();AVP=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AVQ=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AVR=AVP===null?null:new $rt_globals.FinalizationRegistry(Bi(new Xh,"accept"));AVS=AVQ===null?null:new $rt_globals.FinalizationRegistry(Bi(new Xi,"accept"));}
var OH=F(0);
function SZ(){var a=this;C.call(a);a.pV=null;a.rH=null;a.l9=null;a.mI=null;a.dF=null;a.tJ=null;a.mP=null;a.lk=null;a.f2=null;a.h_=0;a.wJ=0;a.q3=null;a.fi=null;a.ql=null;a.lL=null;a.sA=0;}
function AC$(a){a.dF.focus();}
function NE(a,b){var c;c=D_();b=$rt_ustr(b);c.title=b;}
function AAB(a){var b,c,d;b=new MC;c=a.f2;d=a.lk.cm;b.bl=c;b.m=d;b.bP=a;return b;}
function Ty(a){a.wJ=$rt_globals.requestAnimationFrame(Bi(a.rH,"onAnimationFrame"));}
function F3(a){a.h_=1;}
function Tx(a,b,c){var d,e;a.lk.dx=BX(b,c);d=a.dF;e=b;d.width=e;d=a.dF;e=c;d.height=e;d=a.f2;Bh(d.dJ,b,c);e=d.bD;d=d.dJ;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fi.ck(a.f2.dJ,KI(a));a.fi.bL();}
function Gq(a,b){var c,d,e;c=a.q3;d=a.dF;if(C6(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.q3=b;}
function Js(a){return $rt_globals.performance.now()/1000.0;}
function KI(a){return $rt_globals.window.devicePixelRatio;}
function Wh(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEk(b,1);else{c=new W3;d=$rt_globals.window.showDirectoryPicker();e=new W2;e.o2=b;e.o3=c;d.then(Bi(e,"f"),Bi(c,"f"));}}
function LX(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEk(b,0);else{c=new XC;d=$rt_globals.window.showOpenFilePicker();e=new XB;e.pT=b;e.pS=c;d.then(Bi(e,"f"),Bi(c,"f"));}}
function CO(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.sA+1|0;a.sA=e;f=a.lL;g=FZ(e);f.hB=L9(f,f.hB,g);g=Va(f,g);MD(g,b);MD(g,b);f.ju=f.ju+1|0;b=a.ql;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(IG(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(IG(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(IG(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof K9)){b=new BD;c=H4(Co(c));f
=new M;O(f);G(G(f,B(50)),c);Bn(b,N(f));J(b);}c=c;f=c.gA;if(f===null)f=c.e3;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function Q2(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new QO;e.mW=b;b=AER(c);d.then(Bi(e,"f"),Bi(b,"f"));}
function UB(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.pV;b=(Gr(b)).data;f=f.decode(b);b=e.writeText(f);e=new UU;e.sf=c;c=AER(d);b.then(Bi(e,"f"),Bi(c,"f"));}
function XT(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AER(b){var c;c=new MX;c.sr=b;return c;}
var Cb=F(0);
var R3=F();
function ABL(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bo(B(51),c)){d=new Nj;ER(d,b);b=$rt_globals.fetch("test.wasm");e=new Ns;b=b.then(Bi(e,"f"));e=new Nr;b=b.then(Bi(e,"f"));e=new Nq;f=new Np;b.then(Bi(e,"f"),Bi(f,"f"));}else if(!Bo(B(52),c))d=(APY(I(c)<=0?B(31):Dj(c,1))).ca(b);else{d=new V$;ABg(d,b);d.G.d7=1;d.D.d7=1;c=new X6;c.uk=d;Wi(d,c,B(53));c=new X_;c.oe=d;Wi(d,c,B(54));}return d;}
var Bj=F(0);
var ABE=F();
var AAO=F();
var ABc=F();
var Rm=F(0);
function VY(){C.call(this);this.oC=null;}
function AKk(a,b){var c,d;c=b;b=a.oC;if(!(!b.fi.cM(c/1000.0)&&!b.h_)){d=b.f2.dJ;if(X(d.b,d.a)){b.h_=0;b.fi.bL();}}Ty(b);}
function VR(){C.call(this);this.uW=null;}
function Dg(a){F3(a.uW);}
var P_=F(0);
function VS(){C.call(this);this.rw=null;}
function AIs(a,b,c){var d,e,f,g;c=a.rw;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dF){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=KI(c);Tx(c,He(f.width*g),He(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Tx(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AD2=F();
function API(b,c){AOH(b,c,AFy());}
function AFy(){return {box:'device-pixel-content-box'};}
function AOH(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cl=F(0);
function VP(){C.call(this);this.n0=null;}
function AOp(a,b){b=a.n0;b.fi.ck(b.f2.dJ,KI(b));b.fi.bL();}
var K4=F(0);
function EC(){C.call(this);this.kf=null;}
var Em=F(0);
var XS=F(0);
var Nd=F(0);
function O$(){var a=this;EC.call(a);a.hB=null;a.jq=null;a.xD=null;a.ju=0;}
function Va(a,b){var c,d;c=a.hB;while(true){if(c===null)return null;d=Jv(a.jq,b,c.iQ);if(!d)break;c=d>=0?c.bZ:c.bM;}return c;}
function L9(a,b,c){var d,e;if(b===null){b=new Jr;d=null;b.iQ=c;b.ic=d;b.fl=1;b.fu=1;return b;}e=Jv(a.jq,c,b.iQ);if(!e)return b;if(e>=0)b.bZ=L9(a,b.bZ,c);else b.bM=L9(a,b.bM,c);Ek(b);return JK(b);}
function J$(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Jv(a.jq,c,b.iQ);if(d<0)b.bM=J$(a,b.bM,c);else if(d>0)b.bZ=J$(a,b.bZ,c);else{e=b.bZ;if(e===null)return b.bM;f=b.bM;g=S(Jr,e.fl).data;h=0;while(true){b=e.bM;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bZ;while(h>0){h=h+(-1)|0;j=g[h];j.bM=b;Ek(j);b=JK(j);}e.bZ=b;e.bM=f;Ek(e);b=e;}Ek(b);return JK(b);}
function VQ(){C.call(this);this.tV=null;}
function APF(a,b){var c,d,e,f,g,h,i,j,k;c=a.tV.lL;b=b.data;if(!(b===ABq()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BD;V(b);J(b);}if(b.length<1){b=new BD;V(b);J(b);}d=FZ(b[0]);e=Va(c,d);if(e===null)c=null;else{c.hB=J$(c,c.hB,d);c.ju=c.ju+1|0;c=e.ic;}f=S(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FB(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new S8;ADF(e);e.hf=k;}else e=(k instanceof $rt_globals.File?1:0)?ACo(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:ACo(k,null);g[h]=e;h=j;}c.l(f);}}
var AEm=F();
var AEP=F();
var JS=F(0);
var Xh=F();
function AOL(a,b){Kw();AVP.delete(b);}
var AA6=F();
var Xi=F();
function AMo(a,b){Kw();AVQ.delete(b);}
function Pv(){var a=this;C.call(a);a.cm=null;a.g0=null;a.w0=null;a.dx=null;}
function Na(){return (D_()).activeElement;}
function CS(a,b,c,d){b.addEventListener($rt_ustr(c),Bi(d,"handleEvent"));return Xb(a,b,c,d);}
function ACE(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bi(d,"handleEvent"),!!e);return Xb(a,b,c,d);}
function Xb(a,b,c,d){var e;e=new P7;e.vP=b;e.vU=c;e.vS=d;return e;}
function T$(a,b){var c;c=new Vd;c.uQ=b;return c;}
function ED(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.g0.getBoundingClientRect();e=BX(He((b.clientX-d.left)*c),He((b.clientY-d.top)*c));f=new Bm;g=a.dx;f.b=g.b;f.a=g.a;d=new My;UC(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.vx=f;return d;}
function Yg(a,b,c){var d,e,f,g;d=new O3;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;UC(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jO=0;d.dH=e;d.bh=f;d.hm=c;d.rJ=g;return d;}
function DM(a,b){b.stopPropagation();b.preventDefault();}
function AAJ(a,b){var c;c=new XP;c.pj=b;b.onpointerdown=Bi(c,"f");c=new XQ;c.n2=b;b.onpointerup=Bi(c,"f");}
function Lk(){var a=this;C.call(a);a.q1=null;a.cD=null;a.bD=null;a.sU=null;a.wo=0;a.xk=0;a.jx=null;a.xU=null;a.xA=null;a.wH=null;a.f6=null;a.hl=null;a.xI=null;a.oK=null;a.dJ=null;a.uy=null;a.ld=0;a.jK=0;a.lU=0;a.lD=0;a.h0=0;a.lR=null;}
function Hi(a,b,c){return GP(a,b,c,400,0);}
function CK(a,b,c){return MK(a.q1,b,c);}
function Gy(a,b){var c,d,e,f,g;c=a.bD;d=b.bm;e=b.bz;f=b.bi;g=b.bA;c.clearColor(d,e,f,g);a.bD.clear(16384);}
function CJ(a,b){var c;if(b==a.jK)return b;if(!b)a.bD.disable(3042);else{a.bD.enable(3042);a.bD.blendFuncSeparate(770,771,1,1);}c=a.jK;a.jK=b;return c;}
function ABA(a,b,c){LD(a,b.b,b.a,c);}
function LD(a,b,c,d){var e,f,g;a.lD=1;a.h0=1;e=a.lR;f=d.b;g=d.a;e.ra=b;e.rb=c;e.q_=f;e.q$=g;UD(a);}
function IB(a){a.lD=0;a.h0=0;UD(a);}
function UD(a){var b,c,d,e,f,g;b=a.lU;c=a.lD;if(b!=c){a.lU=c;if(!c)a.bD.disable(3089);else a.bD.enable(3089);}if(a.lU&&a.h0){a.h0=0;d=a.bD;e=a.lR;b=e.ra;c=a.dJ.a-e.rb|0;f=e.q$;c=c-f|0;g=e.q_;d.scissor(b,c,g,f);}}
function K1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.oK;c=a.ld;d=b.gi.sl;e=b.eb;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eb;h=b.mM;e.bindBuffer(34962,h);i=b.gi.mc.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eb;m=k.g7;n=k.eW;o=b.gi.kq*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eW|0;j=j+1|0;}a:{e=b.uT;if(e!==null){c=0;b.eb.bindBuffer(34962,e);i=b.gi.qY.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eb;j=e.g7;p=e.eW;m=e.oT;n=b.gi.pd;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eW|0;g=g+1|0;}}}q=b.uc;if(q===null){c=b.rO;if(c>0)b.eb.drawArrays(4,0,c);}else{b.eb.bindBuffer(34963,q);k=b.eb;g=b.ur;k.drawElements(4,g,5123,0);}a.ld=d;}
function Bz(a,b,c,d,e){Lb(a,a.jx);Mk(a.jx,a.bD,b,c,d,a.dJ);d=a.jx;Ie(a.bD,d.tU,e);K1(a);}
function EI(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Lb(a,a.f6);Mk(a.f6,a.bD,b,c,d,a.dJ);Uy(a.f6,a.bD,f);d=a.f6;j=a.bD;f=f.fp;b=f.b;c=f.a;k=e.bm;l=b;m=k/l;k=e.bz;n=c;o=k/n;k=e.bi/l;l=e.bA/n;d=d.tv;j.uniform4f(d,m,o,k,l);d=a.f6;e=a.bD;Ie(e,d.ps,g);Ie(e,d.nf,h);d=d.oq;e.uniform2f(d,i,0.0);K1(a);}
function CU(a){var b,c;b=new Jq;c=a.sU;b.fp=new Bm;b.d0=c;b.eQ=c.dp.createTexture();AVT=AVT+1|0;return b;}
function NZ(a,b){Xr(a.bD,b);}
function Lb(a,b){var c,d;if(b!==a.uy){c=a.bD;d=b.co;c.useProgram(d);a.uy=b;}}
function ADr(){var a=this;Lk.call(a);a.w4=null;a.xB=null;}
function ATo(a,b){var c=new ADr();AKH(c,a,b);return c;}
function AKH(a,b,c){var d,e,f,g,h,i,j,k,l;d=new UG;a.dJ=new Bm;a.ld=0;a.lR=new WW;a.q1=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(55)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bD=b;a.cD=MK(d,4,4);g=AFd(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BN(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new P9;Zr();f=AVU;k.eb=b;k.gi=f;k.rO=h.length/f.kq|0;k.ur
=j.length;f=b.createBuffer();k.mM=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.uT=null;f=b.createBuffer();k.uc=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.oK=k;a.xk=KF(e,B(56));f=new P$;f.dp=b;a.sU=f;l=b.getParameter(3379);a.wo=l;f=new M;O(f);T(G(f,B(57)),l);$rt_globals.console.info($rt_ustr(N(f)));g=S(Ea,6);i=g.data;d=new Wt;LK(d,b,B(58),B(59),AVU);f=d.co;d.tU=b.getUniformLocation(f,"uColor");a.jx=d;i[0]
=d;f=AST(b,B(60));a.xU=f;i[1]=f;f=new QY;LK(f,b,B(58),B(61),AVU);a.xA=f;i[2]=f;f=AUe(b);a.wH=f;i[3]=f;f=ATp(b);a.f6=f;i[4]=f;f=AUp(b);a.hl=f;i[5]=f;a.xI=g;Xr(b,B(62));a.xB=new UE;a.w4=c;}
function GP(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cD;g=Z7(b,c,d,e);Je(f,g);h=f.bn.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eq(f,B(63));m=Eq(f,B(64));h=new K$;n=KJ(g);h.lZ=b;h.v4=c;o=c|0;if(o!==c){b=new M;O(b);Fk(G(b,B(65)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.oR=o;h.v_=d;h.wF=e;h.dv=i;h.ek=j;h.v1=l;h.lM=k;h.mS=n;h.qT=Df(i);h.xt=Df(h.ek);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.v8=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(66);}h.vO=b;return h;}
function CC(){C.call(this);this.bj=null;}
function ER(a,b){a.bj=b;}
function ARG(a,b){return 0;}
var I9=F();
var AVg=null;function Jv(a,b,c){return b.jw(c);}
function ABQ(){AVg=new I9;}
function AAm(){var a=this;C.call(a);a.b4=null;a.l_=null;a.bt=null;a.dh=null;a.en=null;a.fq=null;a.fW=null;a.jp=null;a.j6=null;a.c0=null;a.hk=null;a.nX=0;}
function AT1(a){var b=new AAm();ANT(b,a);return b;}
function ANT(a,b){a.b4=CH(S(Cs,0));a.l_=CH(S(Cs,0));a.bt=CH(S(Cv,0));a.dh=CH(S(DF,0));a.en=CH(S(Ex,0));a.fq=CH(S(EJ,0));a.fW=CH(S(E$,0));a.jp=CH(S(Bj,0));a.j6=CH(S(Bj,0));a.c0=b;}
function Uf(a,b){var c,d,e,f;Dg(a.c0);c=(Cp(!b.hm?a.l_:a.b4)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bB(b);if(f)break;if(b.jO)break;e=e+1|0;}return f;}
function QZ(a,b,c){var d,e,f;Dg(a.c0);d=(Cp(a.fq)).data;e=d.length;f=0;while(f<e){if(d[f].gm(b,c))return 1;f=f+1|0;}return 0;}
function WK(){C.call(this);this.m8=null;}
function ANP(a,b){var c;c=a.m8;if(Uf(c.cm,Yg(c,b,1)))DM(c,b);}
function WL(){C.call(this);this.sd=null;}
function AN5(a,b){var c;c=a.sd;if(Uf(c.cm,Yg(c,b,0)))DM(c,b);}
function WM(){C.call(this);this.ok=null;}
function AMm(a,b){var c,d,e,f,g,h,i;c=a.ok;if(c.dx!==null){a:{b:{d=ED(c,b);e=c.cm;Dg(e.c0);f=e.hk;if(f!==null)f.l(d);else{g=(Cp(e.bt)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bS(d))break a;i=i+1|0;}}}}DM(c,b);}}
function WN(){C.call(this);this.uR=null;}
function ALK(a,b){var c,d,e,f,g,h;c=a.uR;b.button;if(c.dx!==null)a:{d=ED(c,b);c=c.cm;e=b.button;Dg(c.c0);if(c.hk===null){f=(Cp(c.bt)).data;g=f.length;h=0;while(h<g){b=f[h].b6(d,e);if(b!==null){c.hk=b;c.nX=e;break a;}h=h+1|0;}}}}
function WO(){C.call(this);this.rj=null;}
function AL_(a,b){var c,d,e,f,g,h,i;c=a.rj;b.button;if(c.dx!==null){d=ED(c,b);e=c.cm;f=b.button;Dg(e.c0);if(f==e.nX&&e.hk!==null)e.hk=null;g=(Cp(e.bt)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cN(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DM(c,b);}}
function WP(){C.call(this);this.nA=null;}
function AOE(a,b){var c,d,e,f,g,h,i,j,k;c=a.nA;if(c.dx!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cm;f=ED(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dg(e.c0);i=(Cp(e.dh)).data;j=i.length;k=0;b:{while(k<j){if(i[k].cX(f,d,h))break b;k=k+1|0;}}DM(c,b);}}
function WQ(){C.call(this);this.u8=null;}
function AJZ(a,b){var c,d,e,f,g,h,i,j;c=a.u8;if(c.dx!==null){d=ED(c,b);e=c.cm;f=b.button;g=b.detail;Dg(e.c0);h=(Cp(e.bt)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cq(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DM(c,b);}}
function WR(){C.call(this);this.rz=null;}
function AR6(a,b){var c,d,e,f,g,h,i;c=a.rz;if(c.dx!==null){d=ED(c,b);e=c.cm;Dg(e.c0);f=(Cp(e.en)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bB(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DM(c,b);}}
function WS(){C.call(this);this.nL=null;}
function AJa(a,b){var c,d,e;b=a.nL.cm;c=(Cp(b.j6)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dg(b.c0);}
function WT(){C.call(this);this.t5=null;}
function APN(a,b){var c,d,e;b=a.t5.cm;c=(Cp(b.jp)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dg(b.c0);}
function Yb(){C.call(this);this.tu=null;}
function ARH(a,b){var c;c=a.tu;if(c.dx!==null)ED(c,b);}
function Yc(){C.call(this);this.st=null;}
function ALZ(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.st;if(Na()===c.g0){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cp(c.cm.fW)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dl();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cm.c0;m=new NN;m.ue=k;m.uf=l;g.getAsString(Bi(m,"accept"));DM(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(67)),k),B(68)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function Yd(){C.call(this);this.mr=null;}
function AMq(a,b){var c;c=a.mr;if(Na()===c.g0&&QZ(c.cm,T$(c,b),0))DM(c,b);}
function Ye(){C.call(this);this.un=null;}
function AOj(a,b){var c;c=a.un;if(Na()===c.g0&&QZ(c.cm,T$(c,b),1))DM(c,b);}
var Ut=F(0);
var UG=F();
function MK(a,b,c){var d,e,f;d=new RD;AVx=AVx+1|0;d.lx=b;d.kH=c;e=(D_()).createElement("canvas");d.jv=e;f=b;e.width=f;e=d.jv;f=c;e.height=f;d.bn=d.jv.getContext("2d");return d;}
var UE=F();
function AK4(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function MC(){var a=this;C.call(a);a.bl=null;a.m=null;a.bP=null;}
function AEc(){var a=this;C.call(a);a.g4=null;a.iv=null;a.gU=0;}
function CH(a){var b=new AEc();AJT(b,a);return b;}
function AJT(a,b){a.g4=b;}
function W(a,b){var c,d,e;c=a.gU;d=a.g4;if(c==d.data.length)a.g4=Dk(d,c+4|0);d=a.g4.data;e=a.gU;a.gU=e+1|0;d[e]=b;a.iv=null;}
function Cp(a){var b;b=a.iv;if(!(b!==null&&b.data.length==a.gU))a.iv=Dk(a.g4,a.gU);return a.iv;}
var IQ=F(0);
var Cs=F(0);
var Cv=F(0);
function AK9(a,b){return 0;}
function AQN(a,b,c){return null;}
function AFQ(a,b,c){return 0;}
function AOC(a,b,c,d){return 0;}
var DF=F(0);
var Ex=F(0);
var EJ=F(0);
var EO=F(0);
var E$=F(0);
function Qi(){C.call(this);this.wj=null;}
function Bm(){var a=this;C.call(a);a.b=0;a.a=0;}
function BX(a,b){var c=new Bm();AAe(c,a,b);return c;}
function AAe(a,b,c){a.b=b;a.a=c;}
function Cz(a,b){a.b=b.b;a.a=b.a;}
function Bh(a,b,c){a.b=b;a.a=c;}
function Yw(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);T(G(T(G(d,B(69)),b),B(70)),c);return N(d);}
function La(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function WW(){var a=this;C.call(a);a.ra=0;a.rb=0;a.q_=0;a.q$=0;}
var ADq=F();
var Zw=F(0);
function P$(){C.call(this);this.dp=null;}
function LH(){var a=this;C.call(a);a.co=null;a.xv=null;}
function ACn(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(71):B(72);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Br(Bu(),f);b=new Bq;Bn(b,f);J(b);}
function Ea(){var a=this;LH.call(a);a.nK=null;a.pp=null;a.lp=null;}
function AVV(a,b,c,d){var e=new Ea();LK(e,a,b,c,d);return e;}
function LK(a,b,c,d,e){var f,g,h,i,j,k;a.xv=e;f=ACn(b,35633,c);d=ACn(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.co=g;h=e.r2.data;i=h.length;j=0;while(j<i){c=h[j];d=a.co;k=c.g7;c=c.pI;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.co;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Xr(b,B(73));a.lp=new Bm;c=a.co;a.nK=b.getUniformLocation(c,"uResolution");c=a.co;a.pp=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bq;c=new M;O(c);G(G(c,B(74)),d);Bn(b,N(c));J(b);}
function AAo(a,b,c){var d,e,f;if(!La(a.lp,c)){Cz(a.lp,c);d=a.nK;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function Mk(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pp;b.uniform4f(e,i,l,h,j);AAo(a,b,f);}
function Wt(){Ea.call(this);this.tU=null;}
function EB(){Ea.call(this);this.rg=null;}
function AST(a,b){var c=new EB();Uc(c,a,b);return c;}
function AVW(a,b,c){var d=new EB();Ug(d,a,b,c);return d;}
function Uc(a,b,c){Ug(a,b,B(58),c);}
function Ug(a,b,c,d){Zr();LK(a,b,c,d,AVU);c=a.co;a.rg=b.getUniformLocation(c,"sDiffuse");}
function Uy(a,b,c){var d;d=a.rg;b.uniform1i(d,0);b.activeTexture(33984);c=c.eQ;b.bindTexture(3553,c);}
var QY=F(Ea);
function AC7(){EB.call(this);this.wt=null;}
function AUe(a){var b=new AC7();AJh(b,a);return b;}
function AJh(a,b){var c;Uc(a,b,B(75));c=a.co;a.wt=b.getUniformLocation(c,"uContrast");}
function ACH(){var a=this;EB.call(a);a.tv=null;a.ps=null;a.nf=null;a.oq=null;}
function ATp(a){var b=new ACH();AOy(b,a);return b;}
function AOy(a,b){var c;Ug(a,b,B(76),B(77));c=a.co;a.tv=b.getUniformLocation(c,"uTexTransform");c=a.co;a.ps=b.getUniformLocation(c,"uColor");c=a.co;a.nf=b.getUniformLocation(c,"uBgColor");c=a.co;a.oq=b.getUniformLocation(c,"uContrast");}
function ZR(){var a=this;EB.call(a);a.uU=null;a.uS=null;a.p4=null;}
function AUp(a){var b=new ZR();AII(b,a);return b;}
function AII(a,b){var c,d;Uc(a,b,B(78));c=a.co;a.uU=b.getUniformLocation(c,"uColorB");d=a.co;a.uS=b.getUniformLocation(d,"uColorF");d=a.co;a.p4=b.getUniformLocation(d,"uContrast");}
var Sa=F(0);
var AES=F(0);
function Ie(b,c,d){var e,f,g,h;e=d.bm;f=d.bz;g=d.bi;h=d.bA;b.uniform4f(c,e,f,g,h);}
function Xr(b,c){var d,e;d=b.getError();if(d){b=Bu();e=new M;O(e);T(G(e,c),d);Br(b,N(e));}}
function P7(){var a=this;C.call(a);a.vP=null;a.vU=null;a.vS=null;}
function P9(){var a=this;C.call(a);a.eb=null;a.gi=null;a.mM=null;a.uT=null;a.uc=null;a.rO=0;a.ur=0;}
function Cj(){var a=this;C.call(a);a.vM=null;a.cZ=0;}
function C_(a,b,c){a.vM=b;a.cZ=c;}
function GK(){var a=this;Cj.call(a);a.r2=null;a.mc=null;a.qY=null;a.kq=0;a.pd=0;a.sl=0;}
var AVU=null;var AVX=null;function Zr(){Zr=Bl(GK);AKy();}
function AKy(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GK;c=S(DX,2);d=c.data;AQ0();d[0]=AVY;d[1]=AVZ;Zr();C_(b,B(79),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];Y2();switch(AV0.data[l.lG.cZ]){case 1:f=f+l.eW|0;h=h+1|0;break a;case 2:e=e+l.eW|0;g=g+1|0;break a;default:}}i=i|1<<l.g7;k=k+1|0;}b.r2=c;b.kq=e;b.pd=f;b.sl=i;c=S(DX,g);m=c.data;b.mc=c;c=S(DX,h);n=c.data;b.qY=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];Y2();switch(AV0.data[l.lG.cZ]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AVU=b;c=S(GK,1);c.data[0]=b;AVX=c;}
var Mj=F(0);
var TA=F(0);
var UV=F(0);
var Gl=F();
function Jo(){Gl.call(this);this.vm=null;}
function AAS(){var a=this;Jo.call(a);a.xi=0;a.kC=0;a.ip=null;a.j$=null;a.sL=null;}
function AMD(a,b){var c=new AAS();AQH(c,a,b);return c;}
function AQH(a,b,c){a.vm=b;b=new M;O(b);a.ip=b;a.j$=BN(32);a.xi=c;AAG();a.sL=AV1;}
function TP(a,b,c,d){var e,$$je;e=a.vm;if(e===null)a.kC=1;if(!(a.kC?0:1))return;a:{try{e.jZ(b,c,d);break a;}catch($$e){$$je=Ei($$e);if($$je instanceof Ir){}else{throw $$e;}}a.kC=1;}}
function N9(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ABC(b,c,d-c|0);e=DW(Bc(16,Ba(e.length,1024)));g=ABp(e,0,e.data.length);h=a.sL;i=new Ps;b=DW(1);j=b.data;j[0]=63;G8();k=AV2;i.ls=k;i.kI=k;c=j.length;if(c&&c>=i.md){i.vH=h;i.pD=b.eI();i.xb=2.0;i.md=4.0;i.oS=BN(512);i.ny=DW(512);k=AV3;if(k===null){i=new BD;Bn(i,B(80));J(i);}i.ls=k;i.kI=k;a:while(true){if(i.ik==3){f=new D0;V(f);J(f);}i.ik=2;b:{while(true){try{k=Zh(i,f,g);}catch($$e){$$je=Ei($$e);if($$je instanceof Bq){f=$$je;break a;}else{throw $$e;}}if(Id(k))
{d=B6(f);if(d<=0)break b;k=D1(d);}else if(G5(k))break;h=!L4(k)?i.ls:i.kI;c:{if(h!==AV3){if(h===AV4)break c;else break b;}d=B6(g);b=i.pD;l=b.data.length;if(d<l){k=AV5;break b;}Xd(g,b,0,l);}EF(f,f.V+Kb(k)|0);}}l=G5(k);TP(a,e,0,g.V);N7(g);if(!l){while(true){d=i.ik;if(d!=2&&d!=4){f=new D0;V(f);J(f);}f=AV6;if(f===f)i.ik=3;l=G5(f);TP(a,e,0,g.V);N7(g);if(!l)break;}return;}}J(AHV(f));}i=new BD;Bn(i,B(81));J(i);}
function Br(a,b){var c,d,e,f,g,h,i,j;BB(B0(a.ip,b),10);b=a.ip;c=b.N;d=a.j$;if(c>d.data.length)d=BN(c);e=0;f=0;if(e>c){b=new Bx;Bn(b,B(82));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.A.data;j=e+1|0;g[f]=i[e];f=h;e=j;}N9(a,d,0,c);a.ip.N=0;}
function F_(){Gl.call(this);this.w5=null;}
function Yl(a){a.w5=DW(1);}
var Lr=F(F_);
var AVA=null;function AKW(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ACV(){var b;b=new Lr;Yl(b);AVA=b;}
function DX(){var a=this;Cj.call(a);a.pI=null;a.lG=null;a.eW=0;a.oT=0;a.g7=0;}
var AVY=null;var AVZ=null;var AV7=null;function AQ0(){AQ0=Bl(DX);AJE();}
function ATB(a,b,c,d,e,f,g){var h=new DX();Wl(h,a,b,c,d,e,f,g);return h;}
function Wl(a,b,c,d,e,f,g,h){AQ0();C_(a,b,c);a.pI=d;a.lG=e;a.eW=f;a.oT=g;a.g7=h;}
function AJE(){var b;b=new DX;AB9();Wl(b,B(83),0,B(84),AV8,2,0,0);AVY=b;b=ATB(B(85),1,B(86),AV8,2,0,1);AVZ=b;AV7=H(DX,[AVY,b]);}
function Jf(){var a=this;C.call(a);a.vw=null;a.ww=null;}
function ADb(b){var c,d;if(Fp(b))J(AAL(b));if(!ADd(L(b,0)))J(AAL(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ADd(d))break a;else J(AAL(b));}}c=c+1|0;}}
function ADd(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mn=F(Jf);
var AV1=null;function AAG(){AAG=Bl(Mn);AIF();}
function ADw(a){var b,c;b=new TQ;b.eT=B(87);G8();c=AV2;b.gL=c;b.lA=c;b.wm=a;b.mn=0.3333333432674408;b.wI=0.5;b.nE=DW(512);b.sc=BN(512);return b;}
function AIF(){var b,c,d,e,f;b=new Mn;AAG();c=S(Bv,0);d=c.data;ADb(B(88));e=d.length;f=0;while(f<e){ADb(d[f]);f=f+1|0;}b.vw=B(88);b.ww=c.eI();AV1=b;}
var Kp=F();
var AV9=null;var AV0=null;function Y2(){Y2=Bl(Kp);AND();}
function AND(){var b,c;AB9();b=BC((AV$.eI()).data.length);c=b.data;AV0=b;c[AV_.cZ]=1;c[AV8.cZ]=2;AB_();c=BC((AWa.eI()).data.length);b=c.data;AV9=c;b[AWb.cZ]=1;b[AWc.cZ]=2;}
function Pd(){var a=this;C.call(a);a.fk=null;a.l4=null;a.jM=null;a.sw=null;a.pc=null;a.pv=null;}
function AAW(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.fk,b,c));}
function M6(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.l4[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.fk,b,d));f=e.data;EN();d=f.length;AAG();g=AV1;h=ABp(e,0,d);a:{try{i=ADw(g);G8();g=ZG(ACr(AD6(i,AV3),AV3),h);break a;}catch($$e){$$je=Ei($$e);if($$je instanceof FL){g=$$je;}else{throw $$e;}}h=new Xl;h.i7=1;h.js=1;h.hj=B(89);h.kJ=g;J(h);}if(!g.V&&g.dr==g.l1)c.bY=g.g6;else{f=BN(B6(g));e=f.data;c.bY=f;NC(g,f,0,e.length);}return c;}
function Nc(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.jM[e]){e=e+1|0;}d=e-d|0;Hk(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.fk,b,d)));return c;}
var GO=F(Cj);
var AV_=null;var AV8=null;var AV$=null;function AB9(){AB9=Bl(GO);AH$();}
function AIx(a,b){var c=new GO();ADx(c,a,b);return c;}
function ADx(a,b,c){AB9();C_(a,b,c);}
function AH$(){var b;AV_=AIx(B(90),0);b=AIx(B(91),1);AV8=b;AV$=H(GO,[AV_,b]);}
var Gf=F(Cj);
var AWb=null;var AWc=null;var AWa=null;function AB_(){AB_=Bl(Gf);AIN();}
function ASa(a,b){var c=new Gf();ZC(c,a,b);return c;}
function ZC(a,b,c){AB_();C_(a,b,c);}
function AIN(){var b;AWb=ASa(B(92),0);b=ASa(B(93),1);AWc=b;AWa=H(Gf,[AWb,b]);}
var VZ=F(D3);
function ADi(){BD.call(this);this.vL=null;}
function AAL(a){var b=new ADi();AQd(b,a);return b;}
function AQd(a,b){V(a);a.vL=b;}
var Mm=F(0);
function XP(){C.call(this);this.pj=null;}
function APi(a,b){a.pj.setPointerCapture(b.pointerId);}
function XQ(){C.call(this);this.n2=null;}
function AGF(a,b){a.n2.releasePointerCapture(b.pointerId);}
function GZ(){var a=this;C.call(a);a.l1=0;a.V=0;a.dr=0;a.he=0;}
function Wj(a,b){a.he=(-1);a.l1=b;a.dr=b;}
function EF(a,b){var c,d,e;if(b>=0&&b<=a.dr){a.V=b;if(b<a.he)a.he=0;return a;}c=new BD;d=a.dr;e=new M;O(e);BB(T(G(T(G(e,B(94)),b),B(95)),d),93);Bn(c,N(e));J(c);}
function B6(a){return a.dr-a.V|0;}
function DN(a){return a.V>=a.dr?0:1;}
var St=F(0);
var K_=F(GZ);
function AEx(b){var c,d;if(b>=0)return AN7(0,b,BN(b),0,b,0);c=new BD;d=new M;O(d);T(G(d,B(96)),b);Bn(c,N(d));J(c);}
function ABC(b,c,d){return AN7(0,b.data.length,b,c,c+d|0,0);}
function NC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bx;i=new M;O(i);T(G(T(G(i,B(97)),g),B(98)),f);Bn(h,N(i));J(h);}if(B6(a)<d){j=new LW;V(j);J(j);}if(d<0){j=new Bx;k=new M;O(k);G(T(G(k,B(99)),d),B(100));Bn(j,N(k));J(j);}g=a.V;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.g6.data[m+a.lO|0];l=l+1|0;c=n;m=o;}a.V=g+d|0;return a;}}b=b.data;j=new Bx;d=b.length;k=new M;O(k);BB(T(G(T(G(k,B(101)),c),B(95)),d),41);Bn(j,N(k));J(j);}
function J8(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.l5){b=new I2;V(b);J(b);}e=d-c|0;if(B6(a)<e){b=new HV;V(b);J(b);}if(c>I(b)){f=new Bx;d=I(b);b=new M;O(b);BB(T(G(T(G(b,B(102)),c),B(95)),d),41);Bn(f,N(b));J(f);}if(d>I(b)){f=new Bx;c=I(b);b=new M;O(b);T(G(T(G(b,B(103)),d),B(104)),c);Bn(f,N(b));J(f);}if(c>d){b=new Bx;f=new M;O(f);T(G(T(G(f,B(102)),c),B(105)),d);Bn(b,N(f));J(b);}g=a.V;while(c<d){h=g+1|0;i=c+1|0;SB(a,g,L(b,c));g=h;c=i;}a.V=a.V+e|0;return a;}
function JP(){var a=this;GZ.call(a);a.kB=0;a.li=null;a.wS=null;}
function ABp(b,c,d){var e,f,g;e=b.data;f=new Xc;g=e.length;d=c+d|0;Wj(f,g);AKE();f.wS=AWd;f.kB=0;f.li=b;f.V=c;f.dr=d;f.wW=0;f.mG=0;return f;}
function Xd(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mG){e=new I2;V(e);J(e);}if(B6(a)<d){e=new HV;V(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bx;j=new M;O(j);T(G(T(G(j,B(106)),h),B(98)),g);Bn(i,N(j));J(i);}if(d<0){e=new Bx;i=new M;O(i);G(T(G(i,B(99)),d),B(100));Bn(e,N(i));J(e);}h=a.V;k=h+a.kB|0;l=0;while(l<d){b=a.li.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.V=h+d|0;return a;}}b=b.data;e=new Bx;d=b.length;i=new M;O(i);BB(T(G(T(G(i,B(101)),c),B(95)),d),41);Bn(e,N(i));J(e);}
function N7(a){a.V=0;a.dr=a.l1;a.he=(-1);return a;}
function HD(){C.call(this);this.xM=null;}
var AV4=null;var AV3=null;var AV2=null;function G8(){G8=Bl(HD);AL4();}
function AEe(a){var b=new HD();AC9(b,a);return b;}
function AC9(a,b){G8();a.xM=b;}
function AL4(){AV4=AEe(B(107));AV3=AEe(B(108));AV2=AEe(B(109));}
var Nj=F(CC);
function ALU(a){}
function AKn(a,b,c){}
function CQ(){var a=this;CC.call(a);a.gf=null;a.s=null;}
function Fh(a,b){var c,d,e;ER(a,b);a.gf=Z4(0,0,64);c=new Yj;c.b8=new Bm;c.dW=CH(S(Ep,0));c.dU=new Bm;c.n3=new Bm;c.yj=new B4;c.yi=new B4;c.cW=b.bl;d=b.bP;c.iH=d;c.cC=UR(d);d=b.m.j6;e=new MI;e.nk=c;W(d,e);d=b.m.jp;e=new MJ;e.qC=c;W(d,e);a.s=c;W(b.m.b4,new Sy);b=b.m.b4;c=a.s;BK(c);d=new Sz;d.r8=c;W(b,d);}
function E5(a){Gy(a.bj.bl,a.gf);}
function GT(a,b,c){var d,e,f,g,h;a:{d=a.s;Cz(d.b8,b);e=d.bN;if(e!==c){d.bN=c;f=(Cp(d.dW)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gn(e,c);h=h+1|0;}}}}
var Qv=F(0);
var LI=F(0);
function AEs(a){a.h2(Kl());}
function LM(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HS;c=new IW;d=new G$;AM9();JM(d,AWe);Lq(c,d,BF(AWf),BF(AWg),BF(AWh),BF(AWf),BF(AWi),BF(AWj),BF(AWk),BF(AWl),BF(AWm),BF(AWn));ABI();e=(AWo.eI()).data;f=e.length;g=S(IH,f);h=g.data;i=0;while(i<f){h[i]=e[i].ko;i=i+1|0;}j=AA2(Q(B(110)),Q(B(111)),Q(B(112)),Q(B(113)));k=new H3;l=new Hz;AJ5();m=AWp;JV(l,m,AWq,AWr,AWs,AWt,m);K6(k,l,AAT(),Zt(Q(B(114)),Q(B(115)),Q(B(116))),AAT(),ZM(1,0.17499999701976776),AWu,AWv);LU(b,c,g,j,k,ADv(Q(B(117)),Q(B(118)),Q(B(119)),Q(B(120))));a.h2(b);}
function ADW(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HS;c=new IW;d=new G$;AB0();JM(d,AWw);Lq(c,d,BF(AWx),BF(AWy),BF(AWz),BF(AWx),BF(AWA),BF(AWB),BF(AWC),BF(AWD),BF(AWE),BF(AWF));AAl();e=(AWG.eI()).data;f=e.length;g=S(IH,f);h=g.data;i=0;while(i<f){h[i]=e[i].k0;i=i+1|0;}j=AA2(Q(B(121)),Q(B(122)),Q(B(123)),Q(B(124)));k=new H3;l=new Hz;AOW();m=AWH;JV(l,m,AWI,AWJ,AWK,AWL,m);K6(k,l,Zb(),Zt(Q(B(125)),Q(B(126)),C3(0)),Zb(),ZM(1,0.07500000298023224),AWM,AWN);LU(b,c,g,j,k,ADv(Q(B(127)),Q(B(128)),Q(B(129)),Q(B(130))));a.h2(b);}
var Lf=F(0);
function Mg(){var a=this;CQ.call(a);a.G=null;a.D=null;a.eq=null;a.g_=0;a.rX=null;}
function ASR(a){var b=new Mg();ABg(b,a);return b;}
function ABg(a,b){var c,d,e;Fh(a,b);c=ANU(a.s);a.eq=c;a.G=AD8(a.s,c);a.D=AD8(a.s,a.eq);c=a.G;c.bJ=1;d=new Q$;d.sR=a;e=new Q8;e.uo=a;QP(c,d,d);QP(a.D,e,e);c=a.G;d=new Q9;d.op=a;c.iD=d;d=a.D;e=new Q6;e.r6=a;d.iD=e;W9(a.s,c);W(b.m.bt,a.eq);W(b.m.dh,a.eq);W(b.m.dh,a);W(b.m.bt,a);c=b.m.b4;d=new Q7;d.my=a;W(c,d);c=b.m.b4;d=new HG;e=new Q4;e.qa=a;Sn(d,b,e);W(c,d);W(b.m.fq,a);W(b.m.fW,a);b=b.m.en;c=new Q5;c.tq=a;W(b,c);LM(a);}
function QB(a,b){if(a.G===b)a.g_=a.g_|1;if(a.D===b)a.g_=a.g_|2;if((a.g_&3)==3)ACG(a);}
function AJ9(a,b,c){if(DY(a.s,a.G))return GC(a.G,b,c);if(!DY(a.s,a.D))return 0;return GC(a.D,b,c);}
function Zs(a){if(DY(a.s,a.G))return Od(a,a.G);if(!DY(a.s,a.D))return null;return Od(a,a.D);}
function Od(a,b){var c;c=new N5;c.qF=b;return c;}
function Wy(a,b,c){var d,e;d=10*b.U|0;if(I6(b.bk-c.bk|0)>d){e=b.bk;c.bk=Hy(Bc(e-d|0,Ba(c.bk,e+d|0)),Ix(c));}c.cH=Hy(b.cH,Kk(c));}
function ACG(a){var b,c,d,e,f,g;Br(Bu(),B(131));b=a.G.e;c=a.D.e;d=EG(b.f);e=EG(c.f);f=AEv(b.f);g=AEv(c.f);b=a.bj.bP;c=new Rn;c.t$=a;CO(b,c,B(132),H(C,[d,f,e,g]));}
function AIM(a,b){var c,d;c=K3(a.G,b);d=K3(a.D,b);return !c&&!d?0:1;}
function AQS(a){E5(a);Mh(a.G);Mh(a.D);Ws(a.eq);}
function APE(a){return Mi(0);}
function AJN(a){Ym(a.G);Ym(a.D);}
function AO5(a){WY(a.G);WY(a.D);}
function APL(a,b){Yn(a.G,b);Yn(a.D,b);}
function AOF(a,b,c){GT(a,b,c);Zf(a,b,c);}
function Zf(a,b,c){var d,e,f;d=new Bm;e=BX(b.b/2|0,b.a);LJ(a.G,d,e,c);f=b.b;d.b=f-(f/2|0)|0;LJ(a.D,d,e,c);}
function AGD(a,b){BK(b);PP(a.eq,b);Lj(a.G,b);Lj(a.D,b);}
function ABH(a,b){if(b.bh!=121)return 0;return 1;}
function ACQ(a,b){var c,d,e;if(DY(a.s,a.G)){c=a.eq;d=a.G;e=new MU;e.qo=a;KC(c,b,d,a,a,e);}if(DY(a.s,a.D)){c=a.eq;d=a.D;e=new MV;e.mY=a;KC(c,b,d,a,a,e);}return 1;}
function AL2(a,b){var c,d;c=DG(a.G,b.h)&&Py(a.G,b)?1:0;d=DG(a.D,b.h)&&Py(a.D,b)?1:0;return !c&&!d?0:1;}
function ALY(a,b,c,d){var e,f;e=DG(a.G,b.h)&&QW(a.G,b,c,d)?1:0;f=DG(a.D,b.h)&&QW(a.D,b,c,d)?1:0;return !e&&!f?0:1;}
function AF_(a,b,c){var d,e,f,g,h,i,j,k;d=DG(a.G,b.h);e=DG(a.D,b.h);f=a.s;g=f.d9;h=g!==null?0:1;i=a.G;j=g!==i?0:1;k=g!==a.D?0:1;if(d&&!(!h&&!k))FP(f,i);if(e&&!(!h&&!j))FP(a.s,a.D);if(d){i=Vg(a.G,b,c);if(i!==null)return i;}return !e?null:Vg(a.D,b,c);}
function AJb(a,b,c){var d,e,f,g;d=DG(a.G,b.h);e=DG(a.D,b.h);f=d&&U$(a.G,b,c)?1:0;g=e&&U$(a.D,b,c)?1:0;return !f&&!g?0:1;}
function AN2(a,b,c,d){var e,f,g,h;e=DG(a.G,b.h);f=DG(a.D,b.h);g=e&&JG(a.G,c,d)?1:0;h=f&&JG(a.D,c,d)?1:0;return !g&&!h?0:1;}
function ALF(a){return Zs(a);}
var V$=F(Mg);
function AH4(a){return Mi(1);}
function Wi(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new XM;d=d.then(Bi(e,"f"));f=new XK;f.sW=b;f.sX=c;g=new XL;d.then(Bi(f,"f"),Bi(g,"f"));}
var AEA=F();
function APY(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(133)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Lm(b)){case -1570047148:if(!Bo(b,B(134)))break a;d=16;break a;case -1519338717:if(!Bo(b,B(135)))break a;d=2;break a;case -1509980539:if(!Bo(b,B(136)))break a;d=12;break a;case -1073555521:if(!Bo(b,B(137)))break a;d=13;break a;case -811765794:if(!Bo(b,B(138)))break a;d=5;break a;case -785237654:if(!Bo(b,B(139)))break a;d=10;break a;case -631889171:if(!Bo(b,B(140)))break a;d=8;break a;case -439438829:if
(!Bo(b,B(141)))break a;d=17;break a;case 2129957:if(!Bo(b,B(142)))break a;d=1;break a;case 3343967:if(!Bo(b,B(143)))break a;d=9;break a;case 3556498:if(!Bo(b,B(144)))break a;d=4;break a;case 485517998:if(!Bo(b,B(145)))break a;d=6;break a;case 544901384:if(!Bo(b,B(146)))break a;d=3;break a;case 1030621992:if(!Bo(b,B(147)))break a;d=15;break a;case 1465713255:if(!Bo(b,B(148)))break a;d=7;break a;case 1554501643:if(!Bo(b,B(149)))break a;d=14;break a;case 1609169232:if(!Bo(b,B(150)))break a;d=11;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new Tq;break b;case 3:case 4:b=new Tp;break b;case 5:b=new To;break b;case 6:b=new Tn;break b;case 7:b=new Tm;break b;case 8:case 9:b=new Tl;break b;case 10:b=new Tk;break b;case 11:b=new Tj;break b;case 12:b=new Ti;break b;case 13:b=new QX;break b;case 14:b=new QT;break b;case 15:b=new QV;break b;case 16:b=new QR;break b;case 17:b=new QS;break b;default:b=new QQ;break b;}b=new Tr;}return b;}
var ABB=F();
var J4=F(K_);
function ABh(){var a=this;J4.call(a);a.l5=0;a.lO=0;a.g6=null;}
function AN7(a,b,c,d,e,f){var g=new ABh();ASj(g,a,b,c,d,e,f);return g;}
function ASj(a,b,c,d,e,f,g){Wj(a,c);a.V=e;a.dr=f;a.lO=b;a.l5=g;a.g6=d;}
function SB(a,b,c){a.g6.data[b+a.lO|0]=c;}
function KX(){var a=this;C.call(a);a.vH=null;a.pD=null;a.xb=0.0;a.md=0.0;a.ls=null;a.kI=null;a.ik=0;}
function LP(){var a=this;C.call(a);a.gk=0;a.hT=0;}
var AV6=null;var AV5=null;function Zo(a,b){var c=new LP();ZZ(c,a,b);return c;}
function ZZ(a,b,c){a.gk=b;a.hT=c;}
function Id(a){return a.gk?0:1;}
function G5(a){return a.gk!=1?0:1;}
function KM(a){return !QH(a)&&!L4(a)?0:1;}
function QH(a){return a.gk!=2?0:1;}
function L4(a){return a.gk!=3?0:1;}
function Kb(a){var b;if(KM(a))return a.hT;b=new Fi;V(b);J(b);}
function D1(b){return Zo(2,b);}
function VD(a){var b,c;switch(a.gk){case 0:b=new Qa;V(b);J(b);case 1:b=new Xq;V(b);J(b);case 2:b=new Vw;c=a.hT;V(b);b.x6=c;J(b);case 3:b=new P0;c=a.hT;V(b);b.xZ=c;J(b);default:}}
function AAq(){AV6=Zo(0,0);AV5=Zo(1,0);}
var Zd=F();
var Im=F(0);
var Ns=F();
function AIV(a,b){return b.arrayBuffer();}
var Nr=F();
function ANd(a,b){var c,d;c=new Pb;d=new O_;return $rt_globals.WebAssembly.instantiate(b,AK3(Bi(c,"f"),Bi(d,"f")));}
var Nq=F();
function AN0(a,b){AGz(b);}
var Np=F();
function AHg(a,b){AEh(b);}
function X6(){C.call(this);this.uk=null;}
function AMX(a,b){J_(a.uk.G,b);}
function X_(){C.call(this);this.oe=null;}
function ANA(a,b){J_(a.oe.D,b);}
var Tr=F();
function ANv(a,b){return ASR(b);}
var Tq=F();
function AGg(a,b){return AUH(b);}
var Tp=F();
function AJ4(a,b){return ASW(b);}
var To=F();
function AJ1(a,b){var c,d,e;c=new Wp;Fh(c,b);d=new Vc;d.lI=new Bm;d.j4=new Bm;c.rp=d;c.dy=Zk();c.cK=Zk();c.d8=M0(c.s);W(c.s.dW,c);d=b.m.b4;e=new Tt;e.tw=c;W(d,e);W(b.m.bt,c);b=b.m.en;d=new Tw;d.r7=c;W(b,d);S1(c.cK);c.lm=ES(B(151),25.0);H6(c.d8,FY(),c.lm);BH(c.gf,C3(43));b=FY();H9(c.dy,b);H9(c.cK,b);b=c.dy;b.ji=new Tv;d=c.cK;d.ji=new Ts;d.jD=new Xm;d.s8=new Xn;KW(b,(NK(0)).iK);KW(c.cK,(NK(0)).iK);return c;}
var Tn=F();
function AKG(a,b){var c,d,e;c=new XF;Fh(c,b);c.ks=ES(B(152),15.0);d=AED();c.em=d;W(c.s.dW,d);W(c.s.dW,c);BH(c.gf,C3(43));d=M0(c.s);c.ha=d;H6(d,FY(),ES(B(151),25.0));d=b.m.b4;e=new OL;e.vE=c;W(d,e);d=b.m.en;e=new OM;e.qh=c;W(d,e);W(b.m.bt,Zj(c.ha));W(b.m.bt,c.em);b=b.m.dh;d=c.em;BK(d);e=new ON;e.tM=d;W(b,e);return c;}
var Tm=F();
function AGo(a,b){var c,d,e;c=new Yq;Fh(c,b);c.fA=Cn();c.e5=Cn();c.oE=Q(B(153));c.id=AP_();c.fY=0;d=c.s.dW;e=new Uh;e.mt=c;W(d,e);W(b.m.bt,c);d=b.m.b4;e=new Ui;e.qb=c;W(d,e);b=Hi(b.bl,B(151),35);c.jh=b;c.hW=AEo(E2(b));BH(c.gf,Q(B(154)));return c;}
var Tl=F();
function AH6(a,b){var c,d,e,f;c=new Pi;ER(c,b);c.fS=AB7();c.d2=0;c.rY=500;c.uv=HA(0,0,0,255,new B4);c.lJ=20;c.uM=20;c.ov=Kl();d=b.m.bt;e=new WG;e.iG=c;f=new Yp;f.rG=e;e.q5=f;W(d,e);d=b.m.dh;e=new S5;e.nO=c;W(d,e);c.d3=b.bl;c.s1=UR(b.bP);TW(c.fS,Hi(c.d3,B(151),c.uM),c.lJ,c.d3);c.gK=Hm();return c;}
var Tk=F();
function ANO(a,b){var c,d;c=new Ra;Gk(c,b);b=b.m.b4;d=new Qb;d.ux=c;W(b,d);return c;}
var Tj=F();
function ARq(a,b){return AUj(b);}
var Ti=F();
function ASh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new W7;Gk(c,b);c.dN=Fe(0,0,300,300);c.eR=SW(0,0,3,3);d=b.bl;b=b.m.bt;e=new T4;e.kX=c;W(b,e);b=AAF(d);c.pz=b;Gh(c.dN,b);G1(c.dN);b=c.dN.b3;G9();BH(b,AWO);BH(c.dN.bU,CL(204,120,50));AB_();e=AWc;f=DW((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CU(d);Y2();switch(AV9.data[e.cZ]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Er;V(b);J(b);}b:
{Nl(m,5,5,h);b=m.d0.dp;switch(AV9.data[e.cZ]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Er;V(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.kg=m;Bh(c.eR.y,Ce(m),C8(c.kg));BH(c.eR.b3,c.lv);return c;}
var QX=F();
function ALy(a,b){var c,d,e;c=new Sv;Gk(c,b);c.gd=Fe(0,0,300,300);c.jS=new Bm;c.ih=new Bm;c.hs=new Bm;d=b.bl;b=b.m.bt;e=new V9;e.jl=c;W(b,e);b=AAF(d);c.rB=b;Gh(c.gd,b);G1(c.gd);b=c.gd.b3;G9();BH(b,AWO);BH(c.gd.bU,CL(204,120,50));return c;}
var QT=F();
function AFb(a,b){var c,d,e,f;c=new OW;ER(c,b);c.wL=20;c.yh=11;c.wr=220;c.i4=new Bm;c.w9=5000;c.gx=1;c.fm=H(G$,[C3(0),C3(255)]);c.ea=b.bl;d=b.m.bt;e=new Ur;e.jc=c;f=new PJ;f.m5=e;e.pP=f;W(d,e);b=b.m.dh;d=new N4;d.tQ=c;W(b,d);b=CK(c.ea,200,220);c.jL=b;F1(b,B(151),20.0);b=CK(c.ea,200,20);c.fa=b;F1(b,B(151),20.0);c.hC=Hm();return c;}
var QV=F();
function AIR(a,b){var c,d,e;c=new Iw;Gk(c,b);W(b.m.bt,c);d=b.m.b4;e=new SI;e.rK=c;W(d,e);W(b.m.fq,new SH);d=b.m.fq;e=new SF;e.pm=c;W(d,e);W(b.m.fW,new SE);d=b.m.fW;e=new SG;e.m$=c;W(d,e);b=!XT(b.bP)?B(155):B(156);d=new M;O(d);G(G(d,B(157)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var QR=F();
function ALP(a,b){var c,d,e,f,g,h,i,j;c=new Qe;ER(c,b);c.nh=C3(20);c.e6=Fe(0,0,300,300);d=b.m.b4;e=new Sb;e.xN=c;W(d,e);b=b.bl;d=Hi(b,B(10),88);Cx(b.cD,d);f=Eq(b.cD,B(158));g=Eq(b.cD,B(159));if(f>g)g=f;h=Df(g);i=J6(d,1.1799999475479126);j=Bu();e=new M;O(e);T(G(T(G(e,B(160)),h),B(161)),i);Br(j,N(e));e=CK(b,h,i*2|0);c.hX=e;Cx(e,d);Ch(c.hX,B(158),0.0,d.dv);Ch(c.hX,B(159),0.0,i+d.dv);b=CU(b);c.ln=b;CM(b,c.hX);Gh(c.e6,c.ln);G1(c.e6);b=c.e6.b3;G9();BH(b,AWO);BH(c.e6.bU,AWP);return c;}
var QS=F();
function APB(a,b){var c,d,e,f;c=new WH;Fh(c,b);c.s0=ES(B(152),20.0);d=AED();c.d4=d;W(c.s.dW,d);W(c.s.dW,c);BH(c.gf,C3(43));d=M0(c.s);c.gE=d;H6(d,FY(),ES(B(151),25.0));d=b.m.b4;e=new QC;e.xK=c;W(d,e);d=b.m.en;e=new QD;e.qk=c;W(d,e);W(b.m.bt,Zj(c.gE));W(b.m.bt,c.d4);d=b.m.bt;e=c.s.cC;f=new RJ;f.mj=e;W(d,f);b=b.m.dh;d=c.d4;BK(d);e=new QE;e.rM=d;W(b,e);return c;}
var QQ=F();
function AE3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new Rw;Yz(c,b);d=c.cL;e=new Iy;f=AJG(B(162));g=S(Bv,8);h=I(B(163));i=0;j=0;k=h+1|0;while(true){l=GE(B(163),10,j);m=l>=0?B$(B(163),j,l):Dj(B(163),j);n=i+1|0;g=ADm(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}QF(e,ZX(g,n),B(164),f);J_(d,e);return c;}
function G7(){var a=this;C.call(a);a.bC=0;a.ch=0;a.cY=0;a.iJ=0;}
function AWQ(a,b,c,d){var e=new G7();UC(e,a,b,c,d);return e;}
function UC(a,b,c,d,e){a.bC=d;a.ch=b;a.cY=c;a.iJ=e;}
function O3(){var a=this;G7.call(a);a.dH=null;a.bh=0;a.hm=0;a.rJ=0;a.jO=0;}
var ADB=F();
function Ww(b,c){return (b+(c/2|0)|0)/c|0;}
function PR(b,c,d){if(b<(2147483647/c|0))return Ww(X(b,c),d);return 0.5+c*b/d|0;}
function IE(b,c){return ((b+c|0)-1|0)/c|0;}
function He(b){return b+0.5|0;}
function Df(b){return b+0.5|0;}
function Ev(b,c,d){return Bc(b,Ba(c,d));}
function My(){var a=this;G7.call(a);a.h=null;a.vx=null;}
var Uv=F(0);
function NN(){var a=this;C.call(a);a.ue=null;a.uf=null;}
function ALq(a,b){var c,d;c=a.ue;d=a.uf;$rt_globals.console.info("paste plain string "+b);c.l(FB(b));Dg(d);}
function Vd(){C.call(this);this.uQ=null;}
function Wv(a,b){a.uQ.clipboardData.setData("text/plain",$rt_ustr(b));}
function Xc(){var a=this;JP.call(a);a.wW=0;a.mG=0;}
function ACX(){var a=this;C.call(a);a.d1=null;a.dQ=null;a.dm=null;a.b$=null;a.ba=null;}
function ANU(a){var b=new ACX();AKX(b,a);return b;}
function AKX(a,b){a.dQ=AED();a.d1=b;a.b$=M0(b);}
function PP(a,b){var c;a.ba=b;c=a.dm;if(c!==null)c.eg=b.T;H6(a.b$,b.T,b.qr);}
function Ws(a){I8(a.dQ,a.d1.cW);Io(a.b$);}
function AON(a,b){return !ZD(a.dQ,b)&&!Kv(a.b$,b)?0:1;}
function ASn(a,b,c,d){return !ABy(a.dQ,b,c,d)&&!Jn(a.b$,b,c,d)?0:1;}
function AGG(a,b,c){var d;d=Ji(a.b$,b,c);if(d!==null)return d;return Yx(a.dQ,b,c);}
function ANb(a,b,c){return !AEC(a.dQ,b,c)&&!DJ(a.b$)?0:1;}
function Vu(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=ANW();i=c.i;j=0;while(j<i){if(f===null){k=(Bt(c,j)).bs;l=R7(EL(B1(g.f,k)));m=VV(g.fV);}else{n=f.data;k=n[j].j0.kF;l=!C6(g.fV,n[j].h3)?B(31):R7(EL(B1(g.f,k)));m=VV(n[j].h3);}if(I(l)>153){o=B$(l,0,150);n=new M;O(n);G(G(n,o),B(165));l=N(n);}if(I(m)>153){o=B$(m,0,150);n=new M;O(n);G(G(n,o),B(165));m=N(n);}p=C5(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bt(c,j);}if(f!==null){q=new UF;q.nc=d;q.nb=o;}else{q=new UH;q.vs=d;q.vn=n;}Nf(h,
m,p,l,q);j=j+1|0;}r=Q3(h);if(a.dm!==null)Uk(a);c=new Q_;n=a.d1;o=new SK;o.ox=a;o.ow=d;AAH(c,n,o);Wa(c,r);d=a.ba;X4(c,d.T,d.s6);a.dm=AB3(a.d1);d=ZJ(c,a.d1);n=a.ba.T;QL(d,n.lH,n.j8);LS(a.dm,d);d=a.dm;n=new M;O(n);G(G(n,B(166)),e);IF(d,N(n),a.ba.po,4.0);d=a.dm;d.eg=a.ba.T;IV(a.dQ,d);d=a.dm;s=(d.S.q.a+CB(d.bp,2.0)|0)+CB(a.d1,2.0)|0;i=(c.dM+c.dP|0)+c.fT|0;t=CB(c.cw,5.0);e=BX(Ev(t,b.b,c.cw.b8.b-i|0),Ev(s,b.a,c.cw.b8.a-c.cF.a|0));TD(c);Z0(c);s=(c.dM+c.dP|0)+c.fT|0;b=c.cw;i=(b.b8.b-e.b|0)-CB(b,5.0)|0;b=c.cw;t=(b.b8.a
-e.a|0)-CB(b,5.0)|0;d=BX(Ba(s,i),Ba(c.cF.a,t));Fn(a.dm,e,d);FP(a.d1,c);}
function Uk(a){J9(a.dQ,a.dm);JX(a.dm);a.dm=null;}
function NB(a,b){var c;c=new SA;c.tD=a;c.tH=b;return c;}
function KC(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DJ(a.b$)){g=a.b$;h=b.h;b=new S_;b.W=a;b.bI=c;b.oj=f;b.hM=e;b.iz=d;i=PZ();e=b.bI.e;d=Dn(e);e=GX(e);f=b.bI.ep;if(VT(f,d,e)!==null){j=b.W.ba.T.bg;k=new RN;k.nU=b;k.nT=h;D6(i,B(167),j,k);}if(KU(f,d,e)!==null){j=b.W.ba.T.bg;k=new RM;k.o5=b;k.o7=h;D6(i,B(168),j,k);}if(Ny(f,d,e)!==null){e=b.W.ba.T.bg;f=new RK;f.na=b;f.nd=h;D6(i,B(169),e,f);}e=b.W.ba.T.bg;f=new RL;f.u_=b;f.va=h;D6(i,B(170),e,f);if(!b.bI.d7){e=b.W.ba.T.bg;f=new PF;f.tG=b;D6(i,B(171),e,f);}e=b.W.ba.T.bg;f
=new PD;f.qc=b;D6(i,B(172),e,f);if(!b.bI.d7&&XT(ID(b))){e=b.W.ba.T.bg;f=new PG;f.sD=b;D6(i,B(173),e,f);}l=b.W.ba.T.bg;d=PZ();m=b.W.ba.T.bg;n=S(C$,3);o=n.data;k=b.iz;BK(k);e=new S3;e.nZ=k;o[0]=D7(B(174),m,e);k=b.W.ba.T.bg;p=b.iz;BK(p);e=new S4;e.ru=p;o[1]=D7(B(175),k,e);e=b.W.ba.T.bg;j=b.iz;BK(j);k=new S2;k.vi=j;o[2]=D7(B(176),e,k);JB(d,B(177),m,FR(n),AWR);f=b.W.ba.T.bg;n=S(C$,2);o=n.data;k=b.hM;BK(k);j=new On;j.rU=k;o[0]=D7(B(178),f,j);j=b.W.ba.T.bg;k=b.hM;BK(k);p=new Om;p.qI=k;o[1]=D7(B(179),j,p);GH(d,B(180),
f,FR(n));f=b.W.ba.T.bg;j=new Vr;j.rh=b;JB(d,B(181),f,j,AWR);GH(i,B(182),l,Hn(d));k=b.W.ba.T.bg;d=PZ();GH(d,B(183),b.W.ba.T.bg,AEV(b));f=b.W.ba.T.bg;m=new Wn;m.sT=b;D6(d,B(184),f,m);GH(i,B(185),k,Hn(d));Gb(g,h,Hn(i),NB(a,c));}}
function ALH(a,b,c,d){return Le(a.dQ,b,c,d);}
function Y6(b){var c;c=new Wc;c.tZ=b;return c;}
var HO=F(0);
function AHH(a){}
function ASu(a){}
function AAX(){var a=this;C.call(a);a.bd=null;a.cB=null;a.cr=null;a.Q=null;a.iq=null;a.rr=0;a.lz=null;a.cO=null;a.v=0;a.x=0;a.g3=0;a.kT=0;a.f1=0;a.iZ=null;a.eL=null;a.cz=null;a.U=0;a.e=null;a.ef=null;a.ep=null;a.r=null;a.fv=null;a.dC=null;a.l8=null;a.gp=null;a.t1=0;a.r4=0;a.r0=0;a.cJ=0;a.cI=0;a.cl=0;a.e0=null;a.el=null;a.ei=null;a.bk=0;a.cH=0;a.g8=0;a.hY=0;a.hN=0;a.v7=0;a.vA=0;a.jj=0;a.kM=0;a.dc=null;a.hJ=0;a.hI=0;a.eK=null;a.d7=0;a.bJ=0;a.ib=null;a.h1=null;a.vN=null;a.gQ=null;a.nF=null;a.vk=null;a.iD=null;a.kO
=0;a.ro=null;a.eO=Eo;a.tt=null;a.tT=null;}
function AD8(a,b){var c=new AAX();AKp(c,a,b);return c;}
function AKp(a,b,c){var d,e,f,g;a.bd=new Bm;a.cB=new Bm;a.rr=0;a.lz=S(Bj,10);a.cO=AM$();a.f1=16;a.iZ=B(151);a.cz=S(K$,4);d=new Iy;e=new HM;e.ec=Gx();e.ex=Gx();e.fj=Cn();e.C=M1(B(31));e.fC=0;e.cu=0;e.da=Um(e);d.f=e;d.iY=B(186);d.fV=null;a.e=d;f=new V_;f.m7=CH(S(Mp,0));f.sN=CH(S(Mp,0));f.tb=CH(S(ML,0));f.oy=CH(S(Qf,0));f.ms=CH(S(GU,0));f.rv=CH(S(RE,0));a.ep=f;a.r=ANF();e=new Nw;e.eG=S(Jk,16);e.eH=0;e.df=(-1);a.fv=e;a.gp=S(EW,0);a.r0=100;a.e0=BX(1,0);a.el=Hm();a.ei=Hm();a.bk=0;a.cH=0;a.g8=0;a.hN=1;a.jj=1;a.kM=
3;a.dc=AB7();a.eK=B(187);a.d7=0;a.bJ=0;a.ib=null;a.h1=Cn();e=Iz();BK(e);f=new U3;f.x7=e;a.gQ=f;a.ro=new B4;e=new U2;e.rd=a;a.tt=e;e=new UY;e.nC=a;a.tT=e;a.cr=b;a.Q=b.cW;a.iq=c;g=a.lz.data;b=new UX;b.ts=a;g[0]=b;b=new U0;b.rC=a;g[1]=b;b=new UZ;b.nY=a;g[2]=b;b=new Vp;b.tP=a;g[3]=b;b=new Vo;b.qz=a;g[4]=b;AFx();a.hY=AWS===AWT?0:1;}
function LJ(a,b,c,d){Cz(a.bd,b);Cz(a.cB,c);R$(a,b,c,d);}
function QP(a,b,c){a.nF=b;a.vk=c;}
function R$(a,b,c,d){var e;a.cJ=B_(a.r0,d);a.cI=B_(1.0,d);a.cl=B_(10.0,d);if(!a.bJ)Cz(a.cr.dU,a.bd);else Bh(a.cr.dU,(b.b+c.b|0)-Lp(a)|0,b.a);VE(a.dc,a.cr.dU,Lp(a),c.a,d);b=a.cO;e=B_(2.0,d);b.dR.y.b=e;Ue(a,a.iZ,a.f1);VX(a);}
function AIA(a){a.kT=1;LL(a);}
function AHc(a){a.kT=0;}
function LL(a){SD(a.cO,Js(Ck(a)));}
function Lj(a,b){var c,d;a.dC=b;c=a.cO;d=b.b9.tj;BH(c.dR.bU,d);c=a.el;d=b.b9;Ge(c,d.lX,d.lC);c=a.ei;b=b.b9;Ge(c,b.lX,b.lC);}
function Ym(a){Lc(a,a.eL.lZ,a.f1+1|0);}
function WY(a){var b;b=a.f1;if(b<=7)return;Lc(a,a.eL.lZ,b-1|0);}
function Yn(a,b){Lc(a,b,a.f1);}
function Lc(a,b,c){if(a.cr.bN!==0.0){Ue(a,b,c);F3(Ck(a));}a.f1=c;a.iZ=b;}
function Ue(a,b,c){var d,e,f,g,h,i;d=B_(c,a.cr.bN);e=a.eL;f=e!==null?e.oR:0;if(!(d==f&&C6(b,a.iZ))){N6(a.dc);g=a.gp.data;c=g.length;f=0;while(f<c){Qy(g[f]);f=f+1|0;}g=a.e.f.C.data;c=g.length;f=0;while(f<c){Eh(g[f]);f=f+1|0;}g=a.cz.data;c=Hh(0,0);e=a.Q;h=d;g[c]=GP(e,b,h,400,0);a.cz.data[Hh(0,1)]=GP(a.Q,b,h,400,2);a.cz.data[Hh(1,0)]=GP(a.Q,b,h,700,0);a.cz.data[Hh(1,1)]=GP(a.Q,b,h,700,2);e=a.cz.data[Hh(0,0)];a.eL=e;c=E2(e);a.U=Df(c*1.25);a.cO.dR.y.a=E2(a.eL);a.l8=CG(a.l8,CK(a.Q,1024,a.U));f=a.U;i=SV(a.cO);e=new M;O(e);b
=G(G(e,B(188)),b);BB(b,32);T(G(T(G(T(G(T(b,d),B(189)),c),B(161)),f),B(190)),i);$rt_globals.console.info($rt_ustr(N(e)));if(AWU){c=Lg(a.eL,a.U);b=new M;O(b);T(G(b,B(191)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.g3=GY(Ft(a),a.x,a.Q.cD,a.cz);GQ(a);VX(a);}}
function Vh(a){return X(Cq(a.e.f)+5|0,a.U);}
function Ix(a){return Bc(Vh(a)-a.cB.a|0,0);}
function Kk(a){return Bc(a.g8-De(a)|0,0);}
function De(a){var b;b=!a.bJ?0:C1(a)+a.cl|0;return (a.cB.b-a.cJ|0)-b|0;}
function Lp(a){return a.bJ?a.cJ:a.cJ-a.cl|0;}
function DI(a){return a.cB.a;}
function K3(a,b){var c,d,e;c=a.e.f;d=c.fC;e=c.cu;d=d!=e&&b-c.pu>0.03125?1:0;if(d&&a.kO!=e){a.kO=e;SY(a);}d=Hy((a.bk+a.v7|0)-a.vA|0,Ix(a));e=a.bk==d?0:1;if(e)E9(a,d);return !Ta(a.cO,b)&&!e&&!a.rr?0:1;}
function E9(a,b){var c,d;c=Hy(b,Ix(a));if(c!=a.bk){a.bk=c;d=a.vk;if(d!==null)d.hR(c);}}
function If(a,b){var c,d;c=Hy(b,Kk(a));if(c!=a.cH){a.cH=c;d=a.nF;if(d!==null)d.hR(c);}}
function Mh(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=IE(a.cB.a,a.U)+7|0;c=a.gp;if(c.data.length<b)a.gp=AAI(b,c,a.t1,a.r4,a.e.f);CJ(a.Q,0);ABA(a.Q,a.bd,a.cB);d=(a.U-SV(a.cO)|0)/2|0;e=(a.g3-(Qo(a.cO)/2|0)|0)-a.cH|0;f=!a.bJ?a.cJ:(a.cI+a.cl|0)+C1(a)|0;PX(a.cO,f+e|0,(d+X(a.v,a.U)|0)-a.bk|0);g=Cq(a.e.f);h=K8(a);i=Ve(a);a.t1=h;a.r4=i;j=a.cr.dU;Bh(j,De(a),a.U);k=!a.bJ?a.bd.b+a.cJ|0:((a.bd.b+a.cI|0)+a.cl|0)+C1(a)|0;l=h;while(l<=i&&l<g){m=B1(a.e.f,l);n=Rj(a,l);ABZ(n,m,a.l8,a.cz,a.Q,a.U,De(a),a.cH);o=n.bW;a.g8
=Bc(a.g8,E1(m)+(40.0*a.cr.bN|0)|0);p=X(a.U,l)-a.bk|0;c=a.ef;q=c===null?null:c.data[l];ADe(n,a.bd.a+p|0,k,a.Q,a.ro,j,!a.hY?0.0:0.5,De(a),a.U,a.cH,a.dC,ADP(a,l,o),a.ib,a.h1,a.v!=l?0:1,a.ef===null?0:1,q);l=l+1|0;}l=h;while(l<=i&&l<g&&a.jj){n=Rj(a,l);p=X(a.U,l)-a.bk|0;r=Z$(a.r,l);m=a.dC;s=m.b9;t=s.of;u=a.v==l&&a.ef===null?1:0;a:{if(r)t=s.kK;else{c=a.ef;if(c!==null){c=c.data;if(l<c.length&&c[l]!==null){t=JT(m.dO,m,c[l].fO);break a;}}if(u)t=s.iV;}}ACv(n,a.Q,k,a.bd.a+p|0,a.U,j,a.cH,De(a),t);l=l+1|0;}if(a.kT&&e>=(( -Qo(a.cO)
|0)/2|0)&&ABn(a.cO,a.cB))Vl(a.cO,a.Q,a.bd);if(a.hN){v=Ba(i+1|0,g);AB4(a,X(a.U,v)-a.bk|0);}Z6(a);ABa(a,h,i);while(h<=i&&h<g){b:{c=a.ef;if(c!==null){w=c.data;if(h<w.length&&w[h]!==null){x=1;break b;}}x=0;}if(x){c=c.data;n=a.dC;s=JT(n.dO,n,c[h].fO);}else s=c!==null?a.dC.b9.eN:a.dC.b9.iV;if(!(a.v!=h&&!x)){a.e0.b=!a.bJ?a.cl-a.cI|0:a.cl+C1(a)|0;n=a.e0;b=a.U;n.a=b;y=a.bJ?0:(a.cJ-a.cl|0)+a.cI|0;p=X(b,h)-a.bk|0;m=a.Q;t=a.bd;Bz(m,t.b+y|0,t.a+p|0,n,s);}h=h+1|0;}ACI(a);ADo(a);IB(a.Q);}
function ADP(a,b,c){var d,e,f,g;a:{d=a.r;e=D4(d);d=Fy(d);f=e.L;if(f<=b){g=BE(b,d.L);if(g<=0){d=BX(b<=f?e.bb:0,g>=0?d.bb:(-1));break a;}}d=null;}if(d!==null){if(d.a==(-1))d.a=c.R;d.b=GY(c,d.b,a.Q.cD,a.cz);d.a=GY(c,d.a,a.Q.cD,a.cz);}return d;}
function ABa(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cB.a;e=Ba(d,X(Cq(a.e.f),a.U)-a.bk|0);f=a.dc;g=a.bk;h=a.ef===null?a.v:(-1);i=a.Q;j=a.dC;J2(f,i,b,d);X0(f,b);Yh(f,g,e,j,i);k=j.iw;if(e<d){l=f.fQ;Bz(i,l.b,l.a+e|0,BX(f.e8.b,d-e|0),k.k8);}if(b<=h&&h<=c){l=j.iw;b=h/20|0;m=f.cy;m=Bt(m,b%m.i|0);k=f.fQ;e=X(f.cy.i,f.il);b=m.ey.a;d=((m.iW.a-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%C8(m.b1)|0)|0;b=h%m.dK|0;c=m.bE;b=d+X(b,c)|0;if(b<( -c|0))b=b+e|0;Bh(m.gg,m.ey.b,c);f=m.fH;c=h%m.dK|0;d=m.bE;CE(f,0.0,X(c,d),m.ey.b,d);I3(m,i,
b,k,l.oB,l.up);}}
function K8(a){return Ba(a.bk/a.U|0,Cq(a.e.f)-1|0);}
function Ve(a){return Ba(((a.bk+DI(a)|0)-1|0)/a.U|0,Cq(a.e.f)-1|0);}
function VX(a){TW(a.dc,a.cz.data[0],a.U,a.Q);J2(a.dc,a.Q,K8(a),DI(a));}
function Rj(a,b){var c;c=a.gp.data;return c[b%c.length|0];}
function AEL(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dp(a.r))Dt(a,a.eK);else{b=D4(a.r);c=Fy(a.r);d=c.L;e=b.L;f=(d-e|0)+1|0;g=BC(f);h=g.data;i=S(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eK;e=e+1|0;k=f;}l=EU(a.v,a.x);m=new US;m.s3=a;Pt(a,g,0,0,i,l,m);b.bb=b.bb+I(a.eK)|0;c.bb=c.bb+I(a.eK)|0;L5(a,a.x+I(a.eK)|0,0);DZ(a);}return 1;}
function ACp(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dp(a.r)){b=B1(a.e.f,a.v);if(b.o.data.length>0){c=R5(a,b);if(c===null)return 1;d=a.e.f;e=a.v;f=EU(e,a.x);d.cu=d.cu+1|0;g=d.fj;h=S(G0,1);h.data[0]=AFA(e,0,1,c,f.bs,f.bF);BZ(g,h);JI(d,e,0,1,c);FS(b,0,I(c));L5(a,a.x-I(c)|0,0);}}else{f=D4(a.r);c=Fy(a.r);i=c.L;j=f.L;i=(i-j|0)+1|0;k=BC(i);h=k.data;l=S(Bv,i);m=l.data;e=a.x;n=a.v;o=0;while(j<=c.L){b=B1(a.e.f,j);if(b.o.data.length>0){b=R5(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=Mf(k,o);h=Dk(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.L)f.bb=Bc(0,f.bb-I(b)|0);if(j==c.L){c.bb=Bc(0,c.bb-I(b)|0);L5(a,a.x-I(b)|0,0);}i=i+1|0;}f=EU(n,e);b=new Xy;b.oW=a;Pt(a,p,0,1,h,f,b);}DZ(a);return 1;}
function R5(a,b){var c,d,e,f;c=Ev(0,I(a.eK),Xt(b));if(!c)b=null;else{b=B(63);if(c<0){b=new BD;V(b);J(b);}if(c!=1){d=b.bY.data.length;if(d&&c){e=BN(X(d,c));d=0;f=0;while(f<c){PQ(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Mq(e);}else b=AVk;}}return b;}
function Pt(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BC(i);k=AUP(i).data;Hr(j,c);c=0;l=k.length;if(c>l){f=new BD;V(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cu=o.cu+1|0;p=S(G0,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AFA(h[m],n[m],k[m],b[m],f.bs,f.bF);m=m+1|0;}BZ(o.fj,p);c=0;while(c<i){b=e.data;JI(o,h[c],n[c],k[c],b[c]);g.l6(FZ(h[c]),b[c]);c=c+1|0;}}
function AD4(a){var b,c,d,e,f,g,h,i;if(Dp(a.r))GF(a);Eh(B1(a.e.f,a.v));b=a.e.f;c=a.v;d=a.x;e=b.C;f=e.data;g=f[c];e=Dk(e,f.length+1|0);f=e.data;b.C=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DP(S(B7,0));b.C.data[c+1|0]=g;}else if(d==g.R){f[c]=g;f[c+1|0]=DP(S(B7,0));}else{f=(II(g,d)).data;e=b.C.data;e[c]=f[0];e[c+1|0]=f[1];}Gu(b,c,d,0,B(192));DZ(a);return CA(a,a.v+1|0,0,0);}
function ADG(a){if(Dp(a.r))GF(a);else Pj(a.e.f,a.v,a.x);GQ(a);DZ(a);return 1;}
function YK(a){var b,c,d;if(Dp(a.r)){GF(a);return 1;}b=a.x;if(!b&&!a.v)return 1;if(b){c=a.v;b=b-1|0;Pj(a.e.f,c,b);}else{c=a.v-1|0;b=Fl(a.e.f,c);d=a.e.f;K5(d,c);Gu(d,c,Fl(d,c),1,B(192));}DZ(a);return CA(a,c,b,0);}
function Dt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.d7)return 0;if(Dp(a.r))GF(a);c=L2(Vq(b,B(193),B(31)),B(192),(-1));d=c.data;b=a.e.f;e=a.v;f=a.x;Yf(b,e,f,c);g=d.length;if(!g)h=AVk;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BN(i+X(g-1|0,I(B(192)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(192))){m=l+1|0;c[l]=L(B(192),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Mq(k);}Gu(b,e,f,0,h);e=a.v;m=(e+g|0)-1|0;CA(a,
m,m!=e?I(d[g-1|0]):a.x+I(d[0])|0,0);E8(a);DZ(a);return 1;}
function GF(a){var b,c,d;b=D4(a.r);c=a.e.f;d=a.r;TL(c,d,Wk(c,d));CA(a,b.L,b.bb,0);E8(a);DZ(a);}
function E8(a){var b;b=a.r;b.c1=0;B3(b.bQ,a.v,a.x);B3(a.r.bG,a.v,a.x);}
function C1(a){return a.eL.lM|0;}
function AB4(a,b){var c,d,e;c=a.cB.a;if(b<c){d=a.cr.dU;d.a=c-b|0;d.b=!a.bJ?De(a):De(a)+a.cI|0;e=!a.bJ?a.bd.b+a.cJ|0:(a.bd.b+a.cl|0)+C1(a)|0;Bz(a.Q,e,a.bd.a+b|0,d,a.dC.b9.eN);}}
function ACI(a){var b;b=a.bJ?a.bd.b+C1(a)|0:a.bd.b+a.cB.b|0;Iv(a.el,a.bk,a.bd.a,DI(a),Vh(a),b,C1(a));b=!a.bJ?a.bd.b+a.cJ|0:((a.bd.b+a.cI|0)+a.cl|0)+C1(a)|0;Mz(a.ei,a.cH,b,De(a),a.g8,a.bd.a+DI(a)|0,C1(a));}
function ADo(a){var b,c;b=PV(a.el);c=PV(a.ei);if(!(!b&&!c)){CJ(a.Q,1);if(b)FV(a.el,a.Q);if(c)FV(a.ei,a.Q);if(b)Gd(a.el,a.Q);if(c)Gd(a.ei,a.Q);}}
function Z6(a){var b,c,d,e;b=a.e0;c=a.cB;b.a=c.a;b.b=a.cI;d=!a.bJ?a.cJ-a.cl|0:(c.b-Lp(a)|0)-a.cI|0;b=a.Q;c=a.bd;Bz(b,c.b+d|0,c.a,a.e0,a.dC.b9.u$);a.e0.b=!a.bJ?a.cl-a.cI|0:a.cl+C1(a)|0;e=a.bJ?0:(a.cJ-a.cl|0)+a.cI|0;b=a.Q;c=a.bd;Bz(b,c.b+e|0,c.a,a.e0,a.dC.b9.eN);}
function Hy(b,c){return Ba(Bc(0,b),c);}
function HE(a,b){var c,d,e,f,g;b=b.data;$rt_globals.console.info("onFileParsed");a.hJ=1;a.hI=1;c=D9(b[0]);d=FH(b[1]);e=(D9(b[2])).data[0];a.e.f=AB$(c,d);Wu(a,ADM(e));Gq(Ck(a),AWV);F3(Ck(a));f=Ks(FD(),a.eO);g=new M;O(g);G(HT(G(g,B(194)),f),B(195));$rt_globals.console.info($rt_ustr(N(g)));g=a.iD;if(g!==null)g.l(a);}
function Wu(a,b){var c,d;c=Dn(a.e);if(!C6(c,b)){d=new M;O(d);G(G(G(G(d,B(196)),c),B(197)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.iY=b;}}
function Ck(a){return a.cr.iH;}
function KK(a,b){var c,d,e,f,g,h;c=EA(b);d=new M;O(d);G(G(d,B(198)),c);$rt_globals.console.info($rt_ustr(N(d)));NE(Ck(a),EA(b));CA(a,0,0,0);a.eO=FD();a.hJ=0;a.hI=0;e=new Iy;f=S(Bv,1);f.data[0]=B(31);AEE(e,f,AUE(B(31),B(31),EA(b),null));a.e=e;CA(a,0,0,0);c=EA(b);g=F0(c,46,I(c)-1|0);if(g!=(-1))c=Dj(c,g);h=!Bo(c,B(199))?5120:10240;c=new RO;c.nR=a;c.nQ=h;c.nP=b;d=b.e3;if(d!==null)JD(c,JC(b,d.size));else{d=b.gA.getFile();e=new TO;e.ma=b;e.mb=c;b=new TR;b.ut=c;d.then(Bi(e,"f"),Bi(b,"f"));}}
function Hv(a,b,c,d,e){if(Ho(a,e))return 1;if(c&&d)return 1;if(c)E9(a,a.bk+((X(b,a.U)*12|0)/10|0)|0);else if(!d){IN(a,a.v+b|0,e);TF(a);}return 1;}
function Uq(a,b,c,d){var e,f,g;if(Ho(a,d))return 1;e=Ft(a);if(!c)f=a.x+b|0;else if(b>=0)f=GR(e,a.x);else{f=a.x;if(!f)f=(-1);else{c=Iq(e,f);if(c>0&&e.dq.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dq.data[c-1|0];}}if(f>e.R){if((a.v+1|0)<Cq(a.e.f))CA(a,a.v+1|0,0,d);}else if(f>=0)Dq(a,f,d);else{b=a.v;if(b>0){g=(B1(a.e.f,b-1|0)).R;CA(a,a.v-1|0,g,d);}}PH(a);return 1;}
function Ho(a,b){if(Dp(a.r)&&!b){E8(a);GQ(a);return 1;}if(!(b&&Dp(a.r)))E8(a);return 0;}
function CA(a,b,c,d){a.x=c;return IN(a,b,d);}
function IN(a,b,c){a.v=Ev(0,b,Cq(a.e.f)-1|0);return Dq(a,a.x,c);}
function Dq(a,b,c){a.x=Ev(0,b,(Ft(a)).R);a.g3=a.cr.bN===0.0?0:GY(Ft(a),a.x,a.Q.cD,a.cz);LL(a);GQ(a);if(c)a.r.c1=1;KL(a.r,a.v,a.x);a.r.c1=0;return 1;}
function L5(a,b,c){var d;d=RS(a.r);Dq(a,b,c);a.r=d;}
function GQ(a){TF(a);PH(a);}
function TF(a){var b,c,d,e,f;b=a.bk;c=b+DI(a)|0;d=a.v;e=a.U;d=X(d,e);f=d+e|0;if(d<(b+e|0))E9(a,d-e|0);else if(f>(c-e|0))E9(a,(f-DI(a)|0)+a.U|0);}
function PH(a){var b,c,d,e,f;b=Df(a.cr.bN*30.0);c=a.cH;d=c+De(a)|0;e=a.g3;f=e+b|0;if(e<(c+b|0))If(a,e-b|0);else if(f>(d-b|0))If(a,(f-De(a)|0)+b|0);}
function TN(a,b,c){var d,e,f,g,h,i,j,k,l;Vm(a);d=a.e.f;e=DO(d.ec,c);if(e!==null)a.ib=Kf(d,e);if(e!==null)c=e;a:{f=DO(d.ex,c);if(f!==null){c=BU(f);while(true){if(!B5(c))break a;g=BY(c);BZ(a.h1,Kf(d,g));}}}h=b.bs;i=b.bF;b=a.ep;c=Dn(a.e);d=GX(a.e);j=(Cp(b.oy)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.t3(c,d)){c=b.xu;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new MW;b.vQ=a;b.vR=d;b.vT=h;b.vV=i;c.sk(d,h,i,b,a.gQ);}}
function Hw(a,b){var c;CA(a,b.bs,b.bF,0);c=GR(Ft(a),a.x);B3(a.r.bG,a.v,c);B3(a.r.bQ,a.v,a.x);}
function EV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.bd;e=c-d.b|0;f=Ev(0,((b.a-d.a|0)+a.bk|0)/a.U|0,Cq(a.e.f)-1|0);g=!a.bJ?a.cJ:(a.cI+a.cl|0)+C1(a)|0;h=Bc(0,(e-g|0)+a.cH|0);b=B1(a.e.f,f);d=a.Q.cD;i=a.cz;if(!(b.ee!==null&&!b.fJ))Li(b,d,i);j=b.ee;e=b.o.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.R;else{c=Ud(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.o.data.length)k=b.R;else{j=W1(b,d,i,c);k=0;e=0;while(e<c){k=k+I(b.o.data[e].t)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AWW){d=new M;O(d);T(G(T(G(T(G(d,B(200)),e),B(201)),h),B(202)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return EU(f,k);}
function TC(a,b){var c;c=b.bs;a.v=c;a.x=b.bF;a.g3=GY(B1(a.e.f,c),a.x,a.Q.cD,a.cz);LL(a);}
function Ft(a){return B1(a.e.f,a.v);}
function JG(a,b,c){var d,e;d=Df((a.U*4|0)*c/150.0);e=Df(b);if(d)E9(a,a.bk+d|0);if(e)If(a,a.cH+e|0);return 1;}
function U$(a,b,c){a.r.c1=0;return 1;}
function Vg(a,b,c){var d,e,f;if(c)return null;d=Ff(a.el,b.h,a.tt,1);if(d!==null)return d;d=Ff(a.ei,b.h,a.tT,0);if(d!==null)return d;IX(a);e=EV(a,b.h);f=HK(a.e.f,e.bs,e.bF);TC(a,e);TN(a,e,f);if(!b.bC){b=a.r;if(!b.c1)B3(b.bQ,a.v,a.x);}b=a.r;b.c1=1;KL(b,a.v,a.x);b=new Tz;b.uz=a;return b;}
function QW(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.ch){b=b.h;e=EV(a,b);f=HK(a.e.f,e.bs,e.bF);g=OR(a,f);h=KU(a.ep,Dn(a.e),GX(a.e));if(h!==null){f=a.e;c=e.bs;d=e.bF;e=new Su;e.wf=a;e.wg=b;e.we=g;h.sk(f,c,d,e,a.gQ);}else{e=DO(a.e.f.ec,f);if(e!==null){Hw(a,e);c=1;}else{e=DO(a.e.f.ex,f);if(e!==null&&!Ee(e)){if(e.i!=1){Vu(a.iq,b,e,a,g);c=1;}else{Hw(a,Bt(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EV(a,b.h)).bs;e=B1(a.e.f,c);c=GW(e,a.x);d=GR(e,a.x);b=U9(e,c);if((d-1|0)==e.R){B3(a.r.bQ,a.v,Xt(e));B3(a.r.bG,
a.v,e.R);}else{if(b!==null){b=b.t;i=0;c:{while(true){j=b.bY.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.x;if(c==i){c=GW(e,c-1|0);d=GR(e,c);}else{if(d!=i){Qc(a.r,a.v);break b;}c=GW(e,d+1|0);d=GR(e,c);}}}B3(a.r.bQ,a.v,c);a.r.c1=1;CA(a,a.v,d,0);a.r.c1=0;IX(a);}}break a;case 3:break;default:break a;}Qc(a.r,a.v);XE(a.fv);IX(a);}}return 1;}
function Py(a,b){var c,d,e,f,g,h,i,j,k;c=a.cr.cC;if(Fq(a.el,b.h,c))return 1;if(Fq(a.ei,b.h,c))return 1;d=a.dc;if(F6(b.h,d.fQ,d.e8)&&Hd(c)?1:0)return 1;e=b.h;f=!a.bJ?a.bd.b+a.cJ|0:((a.bd.b+a.cl|0)+a.cI|0)+C1(a)|0;a:{g=a.bd.a;h=De(a);i=DI(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Hd(c);if(b.ch){e=EV(a,b.h);e.bF=GW(B1(a.e.f,e.bs),e.bF);b=a.e.f;if(!NW(b.ec,e)&&!NW(b.ex,e)?0:1)return DC(c,B(203));}return DC(c,B(186));}
function ANq(a,b){var c,d,e,f;c=b.ch;if(c&&b.bh==65){c=Cq(a.e.f)-1|0;d=Fl(a.e.f,c);B3(a.r.bQ,0,0);B3(a.r.bG,Cq(a.e.f)-1|0,d);return 1;}if(c&&b.bh==80){HF(a);return 1;}if(!a.d7&&c&&b.bh==90){if(Dp(a.r))E8(a);b=a.e.f;b.cu=b.cu+1|0;e=b.fj;d=e.i;if(!d)e=null;else{f=(En(e,d-1|0)).data;e=TB(b,f[0]);c=1;while(c<f.length){TB(b,f[c]);c=c+1|0;}}if(e!==null){CA(a,e.b,e.a,0);DZ(a);}return 1;}if(!c&&!b.cY){if(Bo(b.dH,B(204))){Dt(a,B(205));Dq(a,a.x-1|0,0);c=1;}else if(Bo(b.dH,B(206))){Dt(a,B(207));Dq(a,a.x-1|0,0);c=1;}else if
(Bo(b.dH,B(43))){Dt(a,B(208));Dq(a,a.x-1|0,0);c=1;}else if(Bo(b.dH,B(209))){Dt(a,B(210));Dq(a,a.x-1|0,0);c=1;}else if(Bo(b.dH,B(211))){Dt(a,B(212));Dq(a,a.x-1|0,0);c=1;}else if(!Bo(b.dH,B(213)))c=0;else{Dt(a,B(214));Dq(a,a.x-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cY&&!b.ch)){d=b.bh;if(d>=48&&d<=57){c=d-48|0;e=a.lz.data[c];if(e!==null)e.p();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bh){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(ABb(a,b))return 1;if(a.d7)c=0;else c:{switch(b.bh){case 8:break;case 9:c=!b.bC?AEL(a):ACp(a);break c;case 13:c=AD4(a);break c;case 46:c=ADG(a);break c;default:c=0;break c;}c=YK(a);}if(c)return 1;if(b.ch&&b.bh==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AJW(b.bh)&&b.bh!=27){if(!b.ch&&!b.cY&&!b.iJ)return I(b.dH)>0&&Dt(a,b.dH)?1:0;return 0;}return 0;}
function WZ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bo(B(164),Dn(a.e))){b=Ck(a);c=new TH;c.nj=a;d=S(C,3);e=d.data;e[0]=EG(a.e.f);f=K8(a);g=Ve(a);h=Bc(0,f-100|0);f=Ba(Cq(a.e.f)-1|0,g+100|0);i=BC(3);j=i.data;j[0]=F9(a.e.f,h);k=a.e.f;l=0;f=Ba(f+1|0,k.C.data.length);m=0;while(m<f){l=l+Fl(k,m)|0;if(m!=(k.C.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.da;k=Cn();WJ(n,n.cT,k);i=BC(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bt(k,m);h=p+1|0;o[p]=q.bO;l=h+1|0;o[h]=q.bT;p=l+1|0;o[l]=q.ff;m=m+
1|0;}e[2]=i;CO(b,c,B(215),d);}}
function HF(a){var b,c,d,e;b=ABJ(Dn(a.e));if(b===null){b=a.iD;if(b!==null)b.l(a);}else{a.eO=FD();c=Ck(a);d=new Rh;d.sB=a;e=S(C,1);e.data[0]=EG(a.e.f);CO(c,d,b,e);}}
function SY(a){var b,c,d,e,f,g,h;b=a.e.f.da;c=Pl(b,b.cT);if(c===null)return;if(Bo(B(186),Dn(a.e)))Pu(a.e.f);a:{d=E6([CX(c),C9(c),c.b5.ff]);e=EG(a.e.f);f=BC(1);g=Dn(a.e);h=(-1);switch(Lm(g)){case 3401:if(!Bo(g,B(216)))break a;h=3;break a;case 98723:if(!Bo(g,B(217)))break a;h=2;break a;case 3254818:if(!Bo(g,B(164)))break a;h=1;break a;case 3556653:if(!Bo(g,B(186)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Ck(a);c=new S7;c.uZ=a;CO(b,c,B(218),H(C,[e,f,d]));}
function GC(a,b,c){var d,e,f,g,h,i;if(c&&a.d7)return 0;d=D4(a.r);e=d.L;if(Dp(a.r)){f=a.e.f;g=a.r;h=Wk(f,g);if(c)TL(f,g,h);if(c){CA(a,d.L,d.bb,0);E8(a);DZ(a);}}else{h=Fc(EL(a.e.f.C.data[e]),B(192));i=Ba(Cq(a.e.f)-1|0,e);B3(a.r.bG,i,0);if(e>=(Cq(a.e.f)-1|0))B3(a.r.bG,i,Fl(a.e.f,i));else B3(a.r.bQ,i+1|0,0);if(c)GF(a);else CA(a,e,0,0);}b.l(h);return 1;}
function ABb(a,b){var c,d,e,f;a:{switch(b.bh){case 33:c=b.ch?IN(a,IE(a.bk,a.U),b.bC):Hv(a,2-Ww(DI(a),a.U)|0,0,b.cY,b.bC);break a;case 34:c=!b.ch?Hv(a,Ww(DI(a),a.U)-2|0,0,b.cY,b.bC):IN(a,((a.bk+DI(a)|0)/a.U|0)-1|0,b.bC);break a;case 35:if(!Ho(a,b.bC)&&!Dq(a,(Ft(a)).R,b.bC)){c=0;break a;}c=1;break a;case 36:if(!Ho(a,b.bC)&&!Dq(a,0,b.bC)){c=0;break a;}c=1;break a;case 37:c=b.ch;if(c&&b.cY){IX(a);d=a.fv;e=d.df;if(e<=0)d=null;else{f=d.eG.data;c=e-1|0;d.df=c;d=f[c];}if(d===null)c=1;else{CA(a,I4(d),LQ(d),0);a.r=RS(d.lQ);c
=1;}break a;}c=Uq(a,(-1),c,b.bC);break a;case 38:c=Hv(a,(-1),b.ch,b.cY,b.bC);break a;case 39:c=b.ch;if(c&&b.cY){d=a.fv;c=d.df;if(c==(d.eH-1|0))d=null;else{f=d.eG.data;c=c+1|0;d.df=c;d=f[c];}if(d===null)c=1;else{CA(a,I4(d),LQ(d),0);a.r=RS(d.lQ);c=1;}break a;}c=Uq(a,1,c,b.bC);break a;case 40:c=Hv(a,1,b.ch,b.cY,b.bC);break a;default:}c=0;}if(c&&b.bC)B3(a.r.bG,a.v,a.x);if(c)TN(a,EU(a.v,a.x),HK(a.e.f,a.v,a.x));return c;}
function IX(a){var b,c,d,e,f,g,h;b=a.fv;c=b.df;b=c<0?null:b.eG.data[c];if(b!==null&&a.v==I4(b)&&a.x==LQ(b))return;d=a.fv;b=new Jk;c=a.v;e=a.x;f=a.r;b.k9=EU(c,e);g=RS(f);b.lQ=g;g.c1=0;e=d.df;h=d.eH;if(e==(h-1|0))M2(d,b);else{c=e+1|0;while(c<h){XE(d);c=c+1|0;}M2(d,b);}d.df=d.df+1|0;}
function DZ(a){a.e.f.pu=Js(Ck(a));}
function J_(a,b){var c,d,e,f,g,h,i;a.vN=null;Vm(a);c=a.e;a.e=b;a.eO=FD();d=ABJ(Dn(a.e));if(d!==null){e=Ck(a);f=new OP;f.rZ=a;g=S(C,1);g.data[0]=EG(a.e.f);CO(e,f,d,g);}g=(Cp(a.ep.ms)).data;h=g.length;i=0;while(i<h){g[i].l6(c,b);i=i+1|0;}}
function Vm(a){a.ib=null;Hq(a.h1);}
function ABJ(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Lm(b)){case 3401:if(!Bo(b,B(216)))break a;c=2;break a;case 98723:if(!Bo(b,B(217)))break a;c=1;break a;case 3254818:if(!Bo(b,B(164)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(219);break b;case 2:b=B(220);break b;default:b=null;break b;}b=B(221);}}return b;}
function OR(a,b){var c;c=Kf(a.e.f,b);if(c===null)return B(31);return c.t;}
function DG(a,b){return F6(b,a.bd,a.cB);}
function Lt(a,b){var c,d,e,f,g,h;a.ef=b;Br(Bu(),B(222));b=a.ef;if(b===null){Br(Bu(),B(223));QM(a.dc,null);}else{b=b.data;c=DW(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e]===null?0:b[e].fO<<24>>24;e=e+1|0;}QM(a.dc,c);g=Bu();e=a.ef.data.length;h=new M;O(h);T(G(h,B(224)),e);Br(g,N(h));g=Bu();e=Cq(a.e.f);h=new M;O(h);T(G(h,B(225)),e);Br(g,N(h));}}
var HL=F(0);
function Q$(){C.call(this);this.sR=null;}
function AKi(a,b){var c;c=a.sR;Wy(c,c.G,c.D);}
function Q8(){C.call(this);this.uo=null;}
function AMn(a,b){var c;c=a.uo;Wy(c,c.D,c.G);}
function Q9(){C.call(this);this.op=null;}
function AF6(a,b){QB(a.op,b);}
function Q6(){C.call(this);this.r6=null;}
function AFG(a,b){QB(a.r6,b);}
function Q7(){C.call(this);this.my=null;}
function AL3(a,b){return ABH(a.my,b);}
function HG(){var a=this;C.call(a);a.jQ=null;a.oF=null;a.mf=null;}
function AWX(a,b){var c=new HG();Sn(c,a,b);return c;}
function AWY(a,b,c){var d=new HG();VG(d,a,b,c);return d;}
function Sn(a,b,c){VG(a,b,null,c);}
function VG(a,b,c,d){a.jQ=b.bP;a.oF=c;a.mf=d;}
function APp(a,b){var c,d;if(b.ch&&b.bh==79){c=a.oF;if(c!==null&&b.bC)Wh(a.jQ,c);else LX(a.jQ,a.mf);d=1;}else d=0;return d;}
function Q4(){C.call(this);this.qa=null;}
function ANX(a,b){var c;c=a.qa;c=DY(c.s,c.G)?c.G:!DY(c.s,c.D)?null:c.D;if(c!==null)KK(c,b);}
function Q5(){C.call(this);this.tq=null;}
function AKU(a,b){b=b;return ACQ(a.tq,b);}
var ACs=F();
var Zq=F(0);
function Z4(b,c,d){return HA(b,c,d,255,new B4);}
function HA(b,c,d,e,f){CE(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Xa(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bm=g+i;e.bz=h+i;e.bi=j+i;return e;}
function Jx(b,c,d,e,f){f=Xa(b,c,d,f);f.bA=e;return f;}
function GD(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Yj(){var a=this;C.call(a);a.cW=null;a.iH=null;a.cC=null;a.b8=null;a.bN=0.0;a.d9=null;a.dW=null;a.dU=null;a.n3=null;a.yj=null;a.yi=null;}
function KQ(a){var b;b=a.d9;if(b!==null)b.sz();}
function JU(a){var b;b=a.d9;if(b!==null)b.vc();}
function W9(a,b){var c;c=a.iH.dF!==(D_()).activeElement?0:1;if(c)JU(a);a.d9=b;if(c)KQ(a);}
function FP(a,b){JU(a);a.d9=b;KQ(a);}
function DY(a,b){return b!==a.d9?0:1;}
function IK(a){return a.cW.cD;}
function GN(a,b){return Hi(a.cW,b.is,B_(b.hK,a.bN));}
function CB(a,b){return B_(b,a.bN);}
var Sy=F();
function ASq(a,b){var c,d,e;c=b.ch;d=c&&!b.bC&&!b.cY&&!b.iJ?1:0;a:{if(d){d=b.bh;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bC&&!c&&!b.cY&&!b.iJ?1:0;d=d&&b.bh==46?1:0;}b:{if(!d){e=b.bh;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jO=1;}return 0;}
function Sz(){C.call(this);this.r8=null;}
function AFs(a,b){var c;c=a.r8.d9;return c!==null&&c.gR(b)?1:0;}
var Ep=F(0);
function ABz(){C.call(this);this.cQ=null;}
function AED(){var a=new ABz();ALC(a);return a;}
function ALC(a){a.cQ=Cn();}
function IV(a,b){RF(a.cQ,0,b);}
function J9(a,b){We(a.cQ,b);}
function I8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cQ.i-1|0;while(c>=0){d=Bt(a.cQ,c);d.O.eV(b);e=d.S;f=d.eg.h5;if(!LT(e)){if(!T_(e)&&!(!e.gC&&e.db!==null)){e.gC=0;Rb(e);g=e.dY;h=(g.dv+g.ek+5.0)/10.0;i=CB(e.gO,e.iS);g=b.cD;j=e.dY;k=e.gT;l=h*2.0;Cx(g,j);m=i+KP(g,k,l)|0;e.hz=m;m=Ev(0,m,e.q.b);if(m){j=CK(b,m,e.q.a);Cx(j,e.dY);g=e.gT;l=i;h=l+h;k=e.dY;n=k.dv;Ch(j,g,h,l+n-(n+k.ek)/16.0);g=e.db;if(g===null){g=CU(b);e.db=g;}CM(g,j);FN(j);CE(e.lr,0.0,0.0,Ce(e.db),C8(e.db));}}g=f.qX;j=e.db;if(j===null)Po(e,b,0,e.q.b,
g);else{i=Ce(j);f=f.p1;j=e.E;m=j.b;o=j.a;j=e.db;EI(b,m,o,j.fp,e.lr,j,f,g,0.0);m=e.q.b;if(i<m)Po(e,b,i,m-i|0,g);}}CJ(b,1);i=CB(d.bp,2.0);m=LT(d.S);f=d.bp;e=f.dU;f=f.n3;p=m?0:d.S.q.a;g=d.O.q;Bh(f,g.b,g.a+p|0);ADK(b,f,!m?d.S.E:d.O.E,d.eg.h5.j2, -i|0,e);f=d.O;AC1(b,f.q,f.E,i,p,Rp(d.eg.i5,d.bp.bN),d.eg.i5.l3,e);c=c+(-1)|0;}}
function ZD(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cQ;if(c>=d.i)break;a:{e=Bt(d,c);f=b.h;if(DH(e.S,f))g=DC(e.bp.cC,null);else{g=CB(e.bp,7.0);h=CB(e.bp,25.0);if(VU(e,f.b,g)){i=U6(e,f.b,h);if(PA(e,f.a,g)){g=DC(e.bp.cC,JH(i,B(226)));break a;}if(Qj(e,f.a,g)){g=DC(e.bp.cC,JH( -i|0,B(226)));break a;}}if(M3(e,f.a,g)){h=R6(e,f.a,h);if(Ol(e,f.b,g)){g=DC(e.bp.cC,JH(h,B(227)));break a;}if(T1(e,f.b,g)){g=DC(e.bp.cC,JH( -h|0,B(227)));break a;}}g=0;}}b:{c:{if(!g){if(!DH(e.O,b.h))break c;if(!e.O.bS(b)&&!DC(e.bp.cC,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABy(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cQ;if(e>=f.i)break;a:{b:{g=Bt(f,e);if(!DH(g.S,b.h)){if(!DH(g.O,b.h))break b;if(!g.O.cq(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function Yx(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cQ;if(d>=e.i)return null;a:{f=Bt(e,d);if(!c){b:{e=b.h;if(!LT(f.S)&&DH(f.S,e)){g=f.O.E;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.S.E;i=e.b-i|0;k=e.a-k|0;e=new Bm;g=new QG;g.oI=f;g.oL=i;g.oM=k;g.oN=e;g.oO=h;g.oJ=j;}else{h=CB(f.bp,7.0);i=CB(f.bp,25.0);if(VU(f,e.b,h)){j=U6(f,e.b,i);if(PA(f,e.a,h)){g=H8(f,e,j,(-1));break b;}if(Qj(f,e.a,h)){g=H8(f,e,j,1);break b;}}if(M3(f,e.a,h)){i=R6(f,e.a,i);if(Ol(f,e.b,h)){g=H8(f,e,(-1),i);break b;}if(T1(f,e.b,h)){g=
H8(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DH(f.S,b.h)?AWZ:f.O.b6(b,c);e=f.O;if(e===null)g=null;else if(g===null)g=!DH(e,b.h)?null:AWZ;}if(g!==null)break;d=d+1|0;}return g;}
function AEC(a,b,c){var d,e,f,g;d=0;while(true){e=a.cQ;if(d>=e.i)break;a:{b:{f=Bt(e,d);if(!DH(f.S,b.h)){if(!DH(f.O,b.h))break b;if(!f.O.cN(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function Le(a,b,c,d){var e,f;e=0;while(true){f=a.cQ;if(e>=f.i)break;if((Bt(f,e)).O.cX(b,c,d))return 1;e=e+1|0;}return 0;}
function ARd(a,b,c){var d,e,f;d=0;while(true){e=a.cQ;if(d>=e.i)break;f=Bt(e,d);e=f.O;e.iX(e.E,e.q,c);e=f.S;if(e.gw!==null){e.dY=null;e.hz=0;e.gC=1;}J3(f);d=d+1|0;}}
function Os(a,b){var c,d,e;c=0;d=0;while(true){e=a.cQ;if(d>=e.i)break;Bt(e,d);c=0|c;d=d+1|0;}return c;}
function P4(a,b,c){var d;d=0;while(true){b=a.cQ;if(d>=b.i)break;Bt(b,d);d=d+1|0;}}
function Y0(){var a=this;C.call(a);a.cE=null;a.ce=null;a.jg=null;a.i9=null;a.g$=null;a.iB=null;}
function M0(a){var b=new Y0();AG0(b,a);return b;}
function AG0(a,b){a.ce=Cn();a.iB=AW0;a.cE=b;W(b.dW,a);}
function H6(a,b,c){a.jg=c;a.g$=b;b=BU(a.ce);while(B5(b)){H9(BY(b),a.g$);}}
function Gb(a,b,c,d){var e,f;e=a.cE;f=e.b8;if(X(f.b,f.a)&&e.bN!==0.0){if(a.jg!==null&&!DJ(a)){a.iB=d;a.i9=GN(a.cE,a.jg);e=TS(a,b,c,null);b=new Tg;b.tf=a;e.ji=b;FP(a.cE,a);return;}b=new BD;V(b);J(b);}c=new D0;Bn(c,B(228));J(c);}
function DL(a){var b;if(DJ(a)){b=a.cE;if(b.d9===a)b.d9=null;TG(a,null);a.iB.p();a.iB=AW0;}}
function PT(a,b,c,d,e){var f,g,h;f=Zk();S1(f);KW(f,c.dl());H9(f,a.g$);H1(f,a.i9);GV(f,a.cE);if(d===null)g=b.b;else{g=b.b;g=a.cE.b8.b<((g+(Ec(d)).b|0)+(Ec(f)).b|0)?g-(Ec(f)).b|0:(g+(Ec(d)).b|0)-d.eM|0;}h=b.a;b=a.cE.b8;JZ(f,Bc(0,Ba(g,b.b-(Ec(f)).b|0)),Bc(0,Ba(h,b.a-(Ec(f)).a|0)));b=new Nz;b.t6=a;b.t8=f;b.t7=e;f.jD=b;BZ(a.ce,f);return f;}
function TS(a,b,c,d){return PT(a,b,c,d,null);}
function AHa(a,b,c){var d,e;a.i9=GN(a.cE,a.jg);d=BU(a.ce);while(B5(d)){e=BY(d);H1(e,a.i9);GV(e,a.cE);}}
function Io(a){var b,c;if(Ee(a.ce))return;CJ(a.cE.cW,1);b=0;while(true){c=a.ce;if(b>=c.i)break;JE(Bt(c,b),a.cE);b=b+1|0;}}
function Kv(a,b){var c,d;c=0;d=a.ce.i-1|0;a:{while(d>=0){c=Ki(Bt(a.ce,d),b.h,a.cE.cC);if(c)break a;d=d+(-1)|0;}}return c;}
function Jn(a,b,c,d){var e,f;e=0;f=a.ce.i-1|0;a:{while(f>=0){e=Ka(Bt(a.ce,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Ji(a,b,c){var d,e,f;d=null;e=a.ce.i-1|0;a:{while(e>=0){f=Bt(a.ce,e);d=b.h;c=Es(f.cf,d);if(!c&&!L8(f.cf)){d=f.ji;if(d!==null)d.p();}d=!c?null:AWZ;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AFH(a,b){var c;if(!DJ(a))return 0;a:{switch(b.bh){case 27:DL(a);c=1;break a;default:}c=0;}return c;}
function AEB(b,c){var d,e,f;d=b.dn;e=c.cS;f=c.eM;b=new Bm;c=d.P;AAe(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function TG(a,b){var c,d;c=a.ce.i-1|0;a:{while(true){if(c<0)break a;d=Bt(a.ce,c);if(b===d)break;En(a.ce,c);TK(d);c=c+(-1)|0;}}}
function DJ(a){return a.ce.i<=0?0:1;}
function ABj(){var a=this;C.call(a);a.dR=null;a.k4=0.0;a.gM=0.0;a.gq=0;}
function AM$(){var a=new ABj();ARK(a);return a;}
function ARK(a){var b;b=SW(0,0,2,20);a.dR=b;a.k4=0.5;a.gM=0.0;HA(187,187,187,255,b.bU);}
function SV(a){return a.dR.y.a;}
function Qo(a){return a.dR.y.b;}
function Ta(a,b){var c,d;a:{c=a.gq;if(b>a.gM)while(true){d=a.gM+a.k4;a.gM=d;a.gq=a.gq?0:1;if(b>d)continue;else break a;}}return a.gq==c?0:1;}
function PX(a,b,c){Bh(a.dR.P,b,c);}
function SD(a,b){a.gM=b+a.k4*1.25;a.gq=1;}
function ABn(a,b){return Zx(a.dR.P,0,0,b);}
function Vl(a,b,c){if(a.gq)UI(a.dR,b,c.b,c.a);}
function K$(){var a=this;C.call(a);a.lZ=null;a.vO=null;a.v4=0.0;a.oR=0;a.v_=0;a.wF=0;a.qT=0;a.xt=0;a.dv=0.0;a.ek=0.0;a.v1=0.0;a.lM=0.0;a.v8=0;a.mS=null;}
function E2(a){return Df(a.dv+a.ek);}
function J6(a,b){return Df((a.dv+a.ek)*b);}
function Iy(){var a=this;C.call(a);a.fV=null;a.f=null;a.iY=null;a.p3=null;}
function AS$(a,b){var c=new Iy();AEE(c,a,b);return c;}
function AW1(a,b,c){var d=new Iy();QF(d,a,b,c);return d;}
function AEE(a,b,c){QF(a,b,null,c);}
function QF(a,b,c,d){var e,f,g,h,i,j,k;a.fV=d;a.iY=c;if(d===null)c=null;else{c=d.e_;c=c===null?null:!Ef(c,B(229))&&!Ef(c,B(230))&&!Ef(c,B(231))&&!Ef(c,B(232))&&!Ef(c,B(233))&&!Ef(c,B(234))?(Ef(c,B(199))?B(164):!Ef(c,B(235))?null:B(216)):B(217);}e=b.data;a.p3=c;c=new HM;f=e.length;if(!f)g=M1(B(31));else{g=S(Cy,f);h=g.data;i=0;while(i<f){j=new Cy;k=S(B7,1);k.data[0]=Sd(e[i]);H$(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.ec=Gx();c.ex=Gx();c.fj=Cn();if(!b.length){c=new BD;V(c);J(c);}c.C=g;c.fC=0;c.cu=0;c.da=Um(c);a.f=c;}
function Dn(a){var b;b=a.iY;if(b===null)b=a.p3;return b;}
function GX(a){var b;b=a.fV;return b===null?null:b.hH;}
function V_(){var a=this;C.call(a);a.m7=null;a.sN=null;a.tb=null;a.oy=null;a.ms=null;a.rv=null;}
function KU(a,b,c){return XN(a,Cp(a.m7),b,c);}
function VT(a,b,c){return XN(a,Cp(a.sN),b,c);}
function XN(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.t3(c,d))return g.wn;f=f+1|0;}return null;}
function Ny(a,b,c){var d,e,f,g;d=(Cp(a.tb)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.t3(b,c))return g.wv;f=f+1|0;}return null;}
function YC(){var a=this;C.call(a);a.bQ=null;a.bG=null;a.c1=0;}
function ANF(){var a=new YC();AFV(a);return a;}
function RS(a){var b=new YC();AFe(b,a);return b;}
function AFV(a){a.bQ=new Gi;a.bG=new Gi;}
function AFe(a,b){var c;c=new Gi;a.bQ=c;a.bG=new Gi;Xw(c,b.bQ);Xw(a.bG,b.bG);a.c1=b.c1;}
function KL(a,b,c){B3(a.bG,b,c);if(!a.c1)B3(a.bQ,b,c);}
function Qc(a,b){B3(a.bQ,b,0);B3(a.bG,b+1|0,0);}
function D4(a){if(X2(a.bQ,a.bG)>0)return a.bG;return a.bQ;}
function Fy(a){if(X2(a.bQ,a.bG)<0)return a.bG;return a.bQ;}
function Dp(a){var b,c;b=a.bQ;c=a.bG;return (b===c?1:c!==null&&Co(b)===Co(c)?(b.L==c.L&&b.bb==c.bb?1:0):0)?0:1;}
function Z$(a,b){var c,d;if(!Dp(a))return 0;c=D4(a);d=Fy(a);return c.L<=b&&b<d.L?1:0;}
function Nw(){var a=this;C.call(a);a.eG=null;a.eH=0;a.df=0;}
function M2(a,b){var c,d,e;c=a.eH;d=a.eG;if(c==d.data.length)a.eG=Dk(d,c+16|0);d=a.eG.data;e=a.eH;a.eH=e+1|0;d[e]=b;}
function XE(a){var b,c,d;b=a.df;c=a.eH-1|0;if(b==c)a.df=b-1|0;d=a.eG.data;a.eH=c;d[c]=null;}
function EW(){var a=this;C.call(a);a.bV=0;a.bW=null;a.es=null;a.dG=0;a.c9=0;}
var AW2=0;var AW3=0;var AWU=0;function ABZ(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bW;j=i===b&&!i.hV?0:1;if(j){a.bW=b;Li(b,e.cD,d);}i=a.bW;k=i===null?0:E1(i)<g?IE(E1(a.bW),1024):IE(g,1024)+1|0;l=k<=a.dG?0:1;if(l)a.dG=k;if(!(!j&&!l)){if(AW2){m=b.fn;$rt_globals.console.info("fMeasure"+m.data);AW2=0;}if(!AWU){i=c.bn;b="alphabetic";i.textBaseline=b;}else{b=c.bn;i="top";b.textBaseline=i;}a.c9=h/1024|0;while(true){i=a.es;if(i.i>=a.dG)break;BZ(i,CU(e));}k=0;while(k<a.dG){H5(a,c,f,d,a.c9+k|0);k=k+1|0;}a.bW.hV=0;}if(!Ee(a.es)
&&h<=E1(a.bW)){k=h/1024|0;g=a.c9;if(k!=g){if(I6(k-g|0)>=a.dG){g=0;while(g<a.dG){H5(a,c,f,d,k+g|0);g=g+1|0;}a.c9=k;}else{while(true){h=a.c9;if(h>=k)break;H5(a,c,f,d,h+a.dG|0);a.c9=a.c9+1|0;}while(true){h=a.c9;if(h<=k)break;H5(a,c,f,d,h-1|0);a.c9=a.c9-1|0;}}}}}
function Lg(b,c){return (c-E2(b)|0)/2|0;}
function TE(b,c){return Lg(b,c)+b.qT|0;}
function H5(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Ew(b);f=a.bW.fn;g=e*1024|0;h=O8(a,g);if(h>=a.bW.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bV;a:{while(true){l=a.bW;if(h>=l.o.data.length)break a;l=ND(l,h);m=!AWU?TE(d.data[l.b_],c):Lg(d.data[l.b_],c);n=d.data;o=f.data;Cx(b,n[l.b_]);Ch(b,l.t,k,m);k=o[h]-j+a.bV;if(k>1024.0)break;h=h+1|0;}}CM(Bt(a.es,e%a.dG|0),b);}
function ADe(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;if(Ee(a.es))return;if(!a.dG)return;if(j>E1(a.bW))return;r=a.bW;s=r.ee;t=r.o;u=j/1024|0;v=O8(a,j);w= -a.bV|0;x=i;a:{while(true){y=t.data;z=y.length;if(v>=z)break a;ba=v!=(z-1|0)?0:1;if(w>=h)break;bb=s.data;r=Bt(a.es,u%a.dG|0);bc=y[v];bd=bb[v]+a.bV|0;be=u*1024|0;bf=(bd-be|0)>1024?0:1;bg=u+1|0;bh=bg*1024|0;bi=Ba(bh,bd)-j|0;if(bf&&ba)bi=bi+a.bV|0;if((w+bi|0)>h)bi=h-w|0;bj=l!==null?0:1;b:
{if(!bj){bk=!ba?a.bV:2*a.bV|0;z=l.b;bl=l.a;if(!(z<bl&&j<=bl&&(j+bi|0)>(z+bk|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bj){bm=!ba?a.bV:2*a.bV|0;if(j>=l.b&&(j+bi|0)<=(l.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(o&&!p)bo=k.b9.iV;if(bc===m)bo=k.b9.p9;bp=BU(n);d:{e:{while(B5(bp)){f:{bq=BY(bp);if(bq!==null){if(!bq.cx(bc))break f;else break e;}if(bc===null)break e;}}bj=0;break d;}bj=1;}if(bj)bo=k.b9.oi;if(q!==null){y=q.k1;if(y===null)z=0;else{y=y.data;z=v>=y.length?0:y[v];}bo=Vj(k.dO,k,z,q.fO);}if(!bn&&!bl){l.a=Ba(l.a,
E1(a.bW));bk=j>=l.b?bi:(Ba(bd,bh)-l.b|0)-(!ba?a.bV:0)|0;bh=(j+bi|0)<=(l.a+(!ba?a.bV:2*a.bV|0)|0)?0:(Ba(bd,bh)-l.a|0)-(!ba?a.bV:0)|0;bm=j-be|0;bl=w+c|0;br=bm;bj=bi-bk|0;CE(e,br,0.0,bj,x);Bh(f,bj,i);Is(a,d,bl,b,f,e,bc,r,g,k,0,bo);bj=bm+bi|0;CE(e,bj-bh|0,0.0,bh,x);Bh(f,bh,i);z=bl+bi|0;Is(a,d,z-bh|0,b,f,e,bc,r,g,k,0,bo);bs=bj-bk|0;bj=bk-bh|0;CE(e,bs,0.0,bj,x);Bh(f,bj,i);Is(a,d,z-bk|0,b,f,e,bc,r,g,k,1,bo);}else{CE(e,j-be|0,0.0,bi,x);Bh(f,bi,i);Is(a,d,w+c|0,b,f,e,bc,r,g,k,bn,bo);}j=j+bi|0;w=w+bi|0;if(!bf){v=v+(-1)
|0;u=bg;}v=v+1|0;}}}
function Is(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bA!==0.0&&f.bi!==0.0){m=j.uP.data[g.cR];if(k)n=j.b9.kK;else{g=m.nl;if(g===null)g=j.b9.eN;if(l===null)l=BK(g);n=l;}g=m.np;if(AW3)i=0.0;EI(b,c,d,e,f,h,g,n,i);return;}return;}}
function O8(a,b){var c,d,e,f,g,h,i;c=a.bW;d=c.fn;e=0;f=c.o.data.length;g=b;b=BE(e,f);if(b>0){c=new BD;V(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BE(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function Qy(a){a.bW=null;J5(a.es,new Qz);Hq(a.es);}
function ACv(a,b,c,d,e,f,g,h,i){var j,k;j=E1(a.bW);if(j)j=j+a.bV|0;if(!j)j=j-a.bV|0;k=Bc( -a.bV|0,j-g|0);if(k>=h)return;Bh(f,h-k|0,e);Bz(b,c+k|0,d,f,i);}
function AAI(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=S(EW,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B1(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bW===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EW;f.bV=3;f.es=Cn();f.c9=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Qy(o);h=h+1|0;}return g;}
function ADk(){AWU=0;}
function ABM(){var a=this;C.call(a);a.eY=null;a.cV=null;a.dX=null;a.et=null;a.hG=null;a.hF=null;}
function Hm(){var a=new ABM();AIu(a);return a;}
function AIu(a){a.eY=new Bm;a.cV=new Bm;a.dX=new Bm;a.et=new Bm;a.hG=new B4;a.hF=new B4;}
function PV(a){var b;b=a.cV;return !X(b.b,b.a)?0:1;}
function IR(a,b){return F6(b,a.dX,a.et);}
function Ff(a,b,c,d){var e,f,g,h,i;e=IR(a,b);f=F6(b,a.eY,a.cV);if(!e&&!f)return null;if(!f){if(!d)c.l(XJ(a,b.b-a.dX.b|0));else c.l(OJ(a,b.a-a.dX.a|0));}g=!d?a.eY.b+(a.cV.b/2|0)|0:a.eY.a+(a.cV.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new NX;b.tc=a;b.te=c;b.td=i;}else{b=new NV;b.pY=a;b.pX=c;b.pZ=i;}return b;}
function Ge(a,b,c){if(b!==null&&c!==null){BH(a.hG,c);BH(a.hF,b);return;}}
function AEn(b,c){var d;d=new Ua;d.q0=b;d.mh=c;return d;}
function OJ(a,b){var c,d,e;c=a.et.a;d=a.cV.a;e=c-d|0;return AEn(Ba(Bc(0,b-(d/2|0)|0),e),e);}
function XJ(a,b){var c,d,e;c=a.et.b;d=a.cV.b;e=c-d|0;return AEn(Ba(Bc(0,b-(d/2|0)|0),e),e);}
function Iv(a,b,c,d,e,f,g){N2(a,b,c,d,e,f,g,1);}
function Mz(a,b,c,d,e,f,g){N2(a,b,c,d,e,f,g,0);}
function N2(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bh(a.et,0,0);Bh(a.cV,0,0);}else{i=Ba(g*3|0,d);j=Bc(PR(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PR(b,i,e):0;if(!h){k=a.eY;k.b=i+c|0;k.a=f-g|0;l=a.cV;l.b=j;l.a=g;l=a.dX;l.b=c;l.a=k.a;k=a.et;k.b=d;k.a=g;}else{k=a.eY;k.b=f-g|0;k.a=i+c|0;l=a.cV;l.b=g;l.a=j;l=a.dX;l.b=k.b;l.a=c;k=a.et;k.b=g;k.a=d;}}}
function P8(a,b){FV(a,b);Gd(a,b);}
function FV(a,b){var c;c=a.dX;Bz(b,c.b,c.a,a.et,a.hG);}
function Gd(a,b){var c,d;c=a.cV;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eY;Bz(b,d.b+1|0,d.a+1|0,c,a.hF);b=a.cV;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fq(a,b,c){return IR(a,b)&&Hd(c)?1:0;}
function ABN(){var a=this;C.call(a);a.xh=20;a.fQ=null;a.e8=null;a.im=null;a.kr=0;a.il=0;a.i6=0.0;a.cy=null;a.hh=null;a.eC=null;a.fg=null;a.ft=0;}
function AB7(){var a=new ABN();AQ_(a);return a;}
function AQ_(a){a.xh=20;a.fQ=new Bm;a.e8=new Bm;a.cy=Cn();a.hh=DW(0);}
function X0(a,b){var c,d,e,f,g;c=a.ft;if(b==c)return;d=a.cy.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bc(0,(c-1|0)/20|0);f=Bc(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){SO(a,b);a.ft=b;}else{if(a.ft>=b)while(true){if(g<f)break a;a.ft=Tf(Bt(a.cy,g%d|0),a.eC,a.fg,a.ft,b,e,a.i6);g=g+(-1)|0;}while(f<=g){a.ft=Tf(Bt(a.cy,f%d|0),a.eC,a.fg,a.ft,b,e,a.i6);f=f+1|0;}}}}
function QM(a,b){if(b===null)b=DW(0);a.hh=b;}
function Yh(a,b,c,d,e){var f;f=BU(a.cy);while(B5(f)){ZB(BY(f),a.fQ,c,b,X(a.cy.i,a.il),d,a.hh,e);}}
function J2(a,b,c,d){var e,f,g,h,i,j;e=a.cy.i;while(true){f=a.cy.i;g=X(f,a.il);if(g>(d+a.kr|0))break;h=BX(0,g);i=new No;g=a.e8.b;f=a.kr;j=a.im;i.gg=new Bm;i.fH=new B4;i.iW=h;i.dK=20;i.bE=f;i.ey=BX(g,20*f|0);i.fK=TE(j,f);if(i.b1===null)i.b1=CU(b);BZ(a.cy,i);}if(f==e)return;a.hh=W_(a.hh,f*20|0);SO(a,c);}
function SO(a,b){var c,d,e,f,g,h,i,j;c=a.cy;d=c.i;e=X((b/(d*20|0)|0)+1|0,d)*20|0;c=BU(c);while(B5(c)){f=BY(c);g=a.eC;h=a.i6;Ew(g);i=0;while(true){j=f.dK;if(i>=j)break;j=e-X(d,j)|0;if(j<b)j=e;e=j+1|0;F7(f,g,C5(e),X(f.bE,i)+f.fK|0,h);i=i+1|0;}CM(f.b1,g);}}
function TW(a,b,c,d){var e;a.im=b;a.kr=c;e=c*20|0;a.il=e;b=CG(a.eC,CK(d,a.e8.b,e));a.eC=b;Cx(b,a.im);Sm(a.eC,2);b=CG(a.fg,CK(d,a.e8.b,c));a.fg=b;Cx(b,a.im);Sm(a.fg,2);}
function N6(a){J5(a.cy,new Qk);Hq(a.cy);a.eC=CG(a.eC,null);a.fg=CG(a.fg,null);}
function VE(a,b,c,d,e){Cz(a.fQ,b);Bh(a.e8,c,d);a.i6=e;}
var Wr=F(0);
var Hp=F(0);
var EP=F();
function Ee(a){return a.i?0:1;}
function HH(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=UW(H_(Co(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BU(a);while(B5(f)){g=b.data;h=e+1|0;g[e]=BY(f);e=h;}return b;}
var Jb=F(0);
function F5(){EP.call(this);this.cv=0;}
function BU(a){var b;b=new NF;b.gD=a;b.lY=a.cv;b.io=a.nq();b.f5=(-1);return b;}
function Qr(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(C6(b,Bt(a,d)))break;d=d+1|0;}return d;}
function AME(a,b){var c,d;if(!IG(b,Jb))return 0;c=b;if(a.i!=c.i)return 0;d=0;while(d<c.i){if(!C6(Bt(a,d),Bt(c,d)))return 0;d=d+1|0;}return 1;}
var In=F(0);
function N1(){var a=this;F5.call(a);a.cj=null;a.i=0;}
function Cn(){var a=new N1();AI$(a);return a;}
function AW4(a){var b=new N1();MS(b,a);return b;}
function AI$(a){MS(a,10);}
function MS(a,b){a.cj=S(C,b);}
function Jl(a,b){var c,d;c=a.cj.data.length;if(c<b){d=c>=1073741823?2147483647:Bc(b,Bc(c*2|0,5));a.cj=Dk(a.cj,d);}}
function Bt(a,b){I_(a,b);return a.cj.data[b];}
function ANx(a){return a.i;}
function BZ(a,b){var c,d;Jl(a,a.i+1|0);c=a.cj.data;d=a.i;a.i=d+1|0;c[d]=b;a.cv=a.cv+1|0;return 1;}
function RF(a,b,c){var d,e,f;Pp(a,b);Jl(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.cj.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cj.data[b]=c;a.i=d+1|0;a.cv=a.cv+1|0;}
function En(a,b){var c,d,e,f;I_(a,b);c=a.cj.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cv=a.cv+1|0;return d;}
function We(a,b){var c;c=Qr(a,b);if(c<0)return 0;En(a,c);return 1;}
function Hq(a){ZF(a.cj,0,a.i,null);a.i=0;a.cv=a.cv+1|0;}
function I_(a,b){var c;if(b>=0&&b<a.i)return;c=new Bx;V(c);J(c);}
function Pp(a,b){var c;if(b>=0&&b<=a.i)return;c=new Bx;V(c);J(c);}
function J5(a,b){var c;c=0;while(c<a.i){b.l(a.cj.data[c]);c=c+1|0;}}
function Oi(a,b){var c,d,e,f,g,h,i;c=a.cj;d=a.i;if(b===null)b=AVg;e=S(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}AAr(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cv=a.cv+1|0;}
function U3(){C.call(this);this.x7=null;}
function B4(){var a=this;C.call(a);a.bm=0.0;a.bz=0.0;a.bi=0.0;a.bA=0.0;}
function ARb(a){var b=new B4();AM6(b,a);return b;}
function CE(a,b,c,d,e){a.bm=b;a.bz=c;a.bi=d;a.bA=e;}
function AM6(a,b){a.bm=b.bm;a.bz=b.bz;a.bi=b.bi;a.bA=b.bA;}
function BH(a,b){a.bm=b.bm;a.bz=b.bz;a.bi=b.bi;a.bA=b.bA;return a;}
function AR1(a,b){if(a===b)return 1;return b!==null&&Co(a)===Co(b)&&KA(a,b)?1:0;}
function KA(a,b){return b.bm===a.bm&&b.bz===a.bz&&b.bi===a.bi&&b.bA===a.bA?1:0;}
function U2(){C.call(this);this.rd=null;}
function APo(a,b){var c;c=a.rd;E9(c,FK(b,Ix(c)));}
function UY(){C.call(this);this.nC=null;}
function ANf(a,b){var c;c=a.nC;If(c,FK(b,Kk(c)));}
function UX(){C.call(this);this.ts=null;}
function APl(a){var b,c;b=a.ts;c=b.hY?0:1;b.hY=c;b=new M;O(b);F4(G(b,B(236)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function U0(){C.call(this);this.rC=null;}
function AKg(a){var b,c;b=a.rC;c=b.hN?0:1;b.hN=c;b=new M;O(b);F4(G(b,B(237)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function UZ(){C.call(this);this.nY=null;}
function AMz(a){var b,c;b=a.nY;c=b.jj^1;b.jj=c;b=new M;O(b);F4(G(b,B(238)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Vp(){C.call(this);this.tP=null;}
function AOM(a){var b,c,d,e,f;b=a.tP;c=(b.kM+3|0)%6|0;b.kM=c;d=b.gp.data;e=d.length;f=0;while(f<e){b=d[f];b.bV=c;b=b.bW;if(b!==null)b.hV=1;f=f+1|0;}}
function Vo(){C.call(this);this.qz=null;}
function AJU(a){var b;b=a.qz;b.bJ=b.bJ?0:1;N6(b.dc);b.dc=AB7();R$(b,b.bd,b.cB,b.cr.bN);}
var Fs=F(Cj);
var AWS=null;var AW5=null;var AWT=null;var AW6=null;function AFx(){AFx=Bl(Fs);AMH();}
function ACe(a,b){var c=new Fs();AB2(c,a,b);return c;}
function AB2(a,b,c){AFx();C_(a,b,c);}
function AMH(){var b;AWS=ACe(B(239),0);AW5=ACe(B(240),1);b=ACe(B(241),2);AWT=b;AW6=H(Fs,[AWS,AW5,b]);}
function Km(){C.call(this);this.xf=null;}
var AWd=null;var AW7=null;function AKE(){AKE=Bl(Km);AR9();}
function AIr(a){var b=new Km();Yy(b,a);return b;}
function Yy(a,b){AKE();a.xf=b;}
function AR9(){AWd=AIr(B(242));AW7=AIr(B(243));}
var UM=F(0);
function Hd(a){return DC(a,null);}
function UR(b){var c;c=new NY;c.nB=b;return c;}
function MI(){C.call(this);this.nk=null;}
function ALI(a){KQ(a.nk);}
function MJ(){C.call(this);this.qC=null;}
function AJ_(a){JU(a.qC);}
var Ya=F(0);
var AW0=null;function ADH(){AW0=new NO;}
function IC(){var a=this;C.call(a);a.P=null;a.y=null;a.bU=null;a.b3=null;}
function ALx(){var a=new IC();Sp(a);return a;}
function SW(a,b,c,d){var e=new IC();AIp(e,a,b,c,d);return e;}
function Sp(a){a.P=new Bm;a.y=new Bm;a.bU=new B4;a.b3=new B4;}
function AIp(a,b,c,d,e){a.P=new Bm;a.y=new Bm;a.bU=new B4;a.b3=new B4;P5(a,b,c,d,e);}
function P5(a,b,c,d,e){Bh(a.P,b,c);Bh(a.y,d,e);}
function Te(a){Bh(a.y,0,0);}
function L8(a){var b;b=a.y;return X(b.b,b.a)?0:1;}
function Es(a,b){return F6(b,a.P,a.y);}
function UI(a,b,c,d){var e;e=a.P;Bz(b,e.b+c|0,e.a+d|0,a.y,a.bU);}
function Ul(a,b,c,d,e,f){var g,h,i,j;g=a.P;d=g.b+d|0;e=g.a+e|0;g=a.y;h=a.b3;i=a.bU;Lb(b,b.hl);Mk(b.hl,b.bD,d,e,g,b.dJ);Uy(b.hl,b.bD,c);g=b.hl;j=b.bD;Ie(j,g.uU,h);Ie(j,g.uS,i);c=g.p4;j.uniform2f(c,f,0.0);K1(b);}
function HM(){var a=this;C.call(a);a.C=null;a.da=null;a.ec=null;a.ex=null;a.fj=null;a.cu=0;a.fC=0;a.pu=0.0;}
function Um(a){var b,c,d,e,f,g,h,i;b=TI(a);c=new IS;d=new N1;e=Ob(0,b,0);f=new XX;f.tp=e;MS(d,1);e=BU(f);g=0;while(true){h=d.cj.data;i=h.length;if(g>=i)break;h[g]=BY(e);g=g+1|0;}d.i=i;Us(c,d);return c;}
function B1(a,b){return a.C.data[b];}
function Cq(a){return a.C.data.length;}
function TI(a){return F9(a,Cq(a));}
function Fl(a,b){return a.C.data[b].R;}
function K5(a,b){var c,d,e,f,g,h,i;c=a.C.data;d=c[b];e=c[b+1|0];f=DP(LN(d.o,e.o));g=a.C;h=g.data.length;if(b<h&&b>=0){i=S(Cy,h-1|0);c=i.data;Rl(g,b,i);c[b]=f;a.C=i;return;}d=new Bq;V(d);J(d);}
function Pj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.C.data;if(!(c<d[b].R?0:1)){d=(B1(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.t)){f=L(h.t,g);break a;}g=g-I(h.t)|0;f=f+1|0;}f=0;}EN();h=new Bv;d=BN(1);d.data[0]=f;Hk(h,d);Gu(a,b,c,1,h);h=a.C.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].t);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].t)==1)h.o=Rl(i,j,S(B7,e-1|0));else{k=d[j];if(c<=0)l=DD(Dj(k.t,1),k.cR,k.b_);else if(c>=(I(k.t)-1|0)){l=new B7;m=k.t;Vy(l,B$(m,0,I(m)-
1|0),k.cR,k.b_);}else{i=BN(I(k.t)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.t,b);b=b+1|0;}b=n.length;while(c<b){m=k.t;e=c+1|0;n[c]=L(m,e);c=e;}l=DD(FU(i),k.cR,k.b_);}d[j]=l;}h.R=h.R-1|0;Eh(h);}else if(b!=(d.length-1|0))K5(a,b);}
function Yf(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Xs(a.C.data[b],c,e[0]);return;}g=f-1|0;h=II(a.C.data[b],c);d=a.C;i=Dk(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].t);Jy(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fp(e[m]))j=DP(S(B7,0));else{j=new Cy;l=S(B7,1);l.data[0]=DD(e[m],0,0);H$(j,l);}d[b+m|0]=j;m=m+1|0;}Jy(h[1],0,0,e[g]);d[b+g|0]=h[1];a.C
=i;}
function Wk(a,b){var c,d,e,f,g,h,i;c=D4(b);d=Fy(b);e=c.L;if(e==d.L)return B$(EL(a.C.data[e]),c.bb,d.bb);f=new M;O(f);b=a.C.data[c.L];e=c.bb;BB(B0(f,Dj(EL(b),e)),10);g=a.C;h=c.L+1|0;e=d.L;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;YL(B0(f,EL(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.C.data[d.L];i=d.bb;B0(f,B$(EL(b),0,i));return N(f);}}b=new WU;V(b);J(b);}
function TL(a,b,c){var d;U1(a,b);d=D4(b);Gu(a,d.L,d.bb,1,c);}
function U1(a,b){var c,d,e,f,g,h,i;a:{c=D4(b);d=Fy(b);e=c.L;if(e==d.L)FS(a.C.data[e],c.bb,d.bb);else{b=a.C.data[e];FS(b,c.bb,b.R);FS(a.C.data[d.L],0,d.bb);e=c.L+1|0;f=d.L;g=a.C;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=S(Cy,(h-f|0)+e|0);AA0(g,e,f,i);a.C=i;K5(a,c.L);break a;}b=new Bq;V(b);J(b);}b=new Bq;V(b);J(b);}}}
function HK(a,b,c){return EU(b,GW(B1(a,b),c));}
function NI(a,b){var c,d,e;c=0;d=0;while(true){e=a.C.data.length;if(c>=e)break;if((d+(B1(a,c)).R|0)>=b)return BX(c,b-d|0);d=d+((B1(a,c)).R+1|0)|0;c=c+1|0;}return BX(e,0);}
function F9(a,b){var c,d,e;c=0;d=a.C.data.length;e=0;while(e<b){c=c+Fl(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Kf(a,b){return U9(B1(a,b.bs),b.bF);}
function EG(a){var b,c,d,e,f,g,h,i,j;b=BN(TI(a));c=b.data;d=a.C.data.length;e=0;f=0;while(e<d){g=a.C.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].t;PQ(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gu(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cu=a.cu+1|0;f=a.fj;g=S(G0,1);h=new G0;h.eJ=b;h.fh=c;i=L2(e,B(192),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BX(b,c+I(i[0])|0);break a;}k=BX((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=BX(b,c);}i=g.data;h.kN=k;h.jz=d;h.gW=e;i[0]=h;BZ(f,g);JI(a,b,c,d,e);}
function JI(a,b,c,d,e){var f;f=F9(a,b)+c|0;if(!d)PL(a.da,f,I(e));else Ub(a.da,f,I(e));}
function TB(a,b){var c,d,e;c=L2(b.gW,B(192),(-1));if(b.jz){Yf(a,b.eJ,b.fh,c);PL(a.da,F9(a,b.eJ)+b.fh|0,I(b.gW));}else{c=c.data;d=ANF();B3(d.bQ,b.eJ,b.fh);e=c.length;if(e==1)B3(d.bG,b.eJ,b.fh+I(c[0])|0);else B3(d.bG,(b.eJ+e|0)-1|0,I(c[e-1|0]));U1(a,d);Ub(a.da,F9(a,b.eJ)+b.fh|0,I(b.gW));}return b.kN;}
function Pu(a){a.fC=a.cu;}
var EY=F();
function Mp(){EY.call(this);this.wn=null;}
function ML(){EY.call(this);this.wv=null;}
function Qf(){EY.call(this);this.xu=null;}
var GU=F(0);
var RE=F(0);
function Gi(){var a=this;C.call(a);a.L=0;a.bb=0;}
function B3(a,b,c){a.L=b;a.bb=c;}
function Xw(a,b){a.L=b.L;a.bb=b.bb;}
function X2(a,b){var c;c=BE(a.L,b.L);if(c)return c;return BE(a.bb,b.bb);}
function Jk(){var a=this;C.call(a);a.k9=null;a.lQ=null;}
function I4(a){return a.k9.bs;}
function LQ(a){return a.k9.bF;}
var KN=F(F_);
var AVB=null;function AIQ(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AEX(){var b;b=new KN;Yl(b);AVB=b;}
var Wm=F(0);
function S8(){C.call(this);this.hf=null;}
function FH(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.hf));}
function D9(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.hf));}
function AHP(a){var b,c;b=a.hf.byteLength;c=new M;O(c);G(T(G(c,B(244)),b),B(245));return N(c);}
var UO=F(0);
function K9(){var a=this;C.call(a);a.gA=null;a.e3=null;a.lK=null;}
function ACo(a,b){var c=new K9();AKz(c,a,b);return c;}
function ASJ(a,b,c){var d=new K9();N8(d,a,b,c);return d;}
function YJ(b){var c,d,e,f,g,h,i,j,k;c=new K9;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=UW(E(D5),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=KJ(f[h]);h=h+1|0;}}j=g.data;h=j.length;if(!h)i=S(Bv,0);else{i=S(Bv,h-1|0);g=i.data;h=0;k=g.length;while(h<k){g[h]=FB(JR(j[h]));h=h+1|0;}}}else i=S(Bv,0);N8(c,d,b,i);return c;}
function AKz(a,b,c){N8(a,b,c,S(Bv,0));}
function N8(a,b,c,d){a.gA=b;a.e3=c;a.lK=d;}
function JC(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EA(a);e=new M;O(e);G(G(e,B(246)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EA(a){var b;b=a.gA;return FB(b!==null?b.name:a.e3.name);}
function AK2(a){var b,c,d,e,f;if(a.e3===null){b=a.lK;c=EA(a);d=Z3(b);e=new M;O(e);G(G(G(e,d),B(247)),c);c=N(e);}else{b=a.lK;c=EA(a);f=JC(a,a.e3.size);d=Z3(b);e=new M;O(e);T(G(G(G(G(e,d),B(247)),c),B(248)),f);c=N(e);}return c;}
function NY(){C.call(this);this.nB=null;}
function DC(a,b){Gq(a.nB,b);return 1;}
function ABw(){var a=this;EC.call(a);a.dt=0;a.b7=null;a.c5=0;a.vb=0.0;a.kA=0;}
function Gx(){var a=new ABw();AIk(a);return a;}
function AIk(a){var b;b=AEi(16);a.dt=0;a.b7=S(Ib,b);a.vb=0.75;U7(a);}
function AEi(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function U7(a){a.kA=a.b7.data.length*a.vb|0;}
function NW(a,b){return Th(a,b)===null?0:1;}
function DO(a,b){var c;c=Th(a,b);if(c===null)return null;return c.dz;}
function Th(a,b){var c,d;if(b===null)c=Sq(a);else{d=b.jf();c=Qd(a,b,d&(a.b7.data.length-1|0),d);}return c;}
function Qd(a,b,c,d){var e;e=a.b7.data[c];while(e!==null&&!(e.iT==d&&Y9(b,e.dw))){e=e.cP;}return e;}
function Sq(a){var b;b=a.b7.data[0];while(b!==null&&b.dw!==null){b=b.cP;}return b;}
function Ld(a,b,c){var d,e,f;if(b===null){d=Sq(a);if(d===null){a.c5=a.c5+1|0;d=UT(a,null,0,0);e=a.dt+1|0;a.dt=e;if(e>a.kA)Vi(a);}}else{e=b.jf();f=e&(a.b7.data.length-1|0);d=Qd(a,b,f,e);if(d===null){a.c5=a.c5+1|0;d=UT(a,b,f,e);e=a.dt+1|0;a.dt=e;if(e>a.kA)Vi(a);}}b=d.dz;d.dz=c;return b;}
function UT(a,b,c,d){var e,f,g;e=new Ib;f=null;e.dw=b;e.dz=f;e.iT=d;g=a.b7.data;e.cP=g[c];g[c]=e;return e;}
function Vi(a){var b,c,d,e,f,g,h,i;b=a.b7.data.length;b=AEi(!b?1:b<<1);c=S(Ib,b);d=c.data;e=0;f=b-1|0;while(true){g=a.b7.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.iT&f;i=h.cP;h.cP=d[b];d[b]=h;h=i;}e=e+1|0;}a.b7=c;U7(a);}
function Y9(b,c){return b!==c&&!b.cx(c)?0:1;}
function Cy(){var a=this;C.call(a);a.o=null;a.R=0;a.fn=null;a.ee=null;a.dq=null;a.gV=null;a.fJ=0;a.hV=0;a.hv=0;}
var AW8=0;var AW9=0;var AWW=0;function DP(a){var b=new Cy();H$(b,a);return b;}
function H$(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].t)|0;f=f+1|0;}a.R=d;Eh(a);}
function ND(a,b){return a.o.data[b];}
function GW(a,b){var c;c=Iq(a,b);return c<=0?0:a.dq.data[c-1|0];}
function Iq(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.dq!==null&&!a.hv)){WI(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].t)|0;a.dq.data[d]=e;d=d+1|0;}a.hv=0;}d=Ud(a.dq,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function U9(a,b){var c;c=a.o.data;if(!c.length)return null;return c[Iq(a,b)];}
function FS(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.R){a.o=S(B7,0);Eh(a);a.R=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].t);i=I(a.o.data[f].t);j=BE(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.t)?1:0){g=a.o;a.o=Rl(g,e,S(B7,g.data.length-1|0));a.R=a.R-d|0;Eh(a);return;}a.o.data[e]=DD(Fc(B$(k.t,0,b),Dj(k.t,c)),k.cR,k.b_);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.t))a.o.data[e]=DD(B$(l.t,0,b),l.cR,l.b_);e=e+1|0;}if(c==I(m.t))f=f+1|0;else if(c)a.o.data[f]=DD(Dj(m.t,c),m.cR,m.b_);g=a.o;a.o=AA0(g,e,f,S(B7,(g.data.length-f|0)+e|0));}a.R=a.R-d|0;Eh(a);}
function II(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cy,[DP(S(B7,0)),a]);if(b>=a.R)return H(Cy,[a,DP(S(B7,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].t);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cy,[DP(K0(c,0,S(B7,d))),DP(K0(c,d,S(B7,f-d|0)))]);h=e[d];e=K0(c,0,S(B7,d+1|0));i=e.data;j=K0(c,d,S(B7,f-d|0));c=j.data;i[d]=DD(B$(h.t,0,b),h.cR,h.b_);c[0]=DD(Dj(h.t,b),h.cR,h.b_);return H(Cy,[DP(e),DP(j)]);}
function Xs(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].t);if(b<=g)break;b=b-g|0;d=e;}}Jy(a,d,b,c);}
function Jy(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=S(B7,1);h.data[0]=Sd(d);a.o=h;}else if(!b&&!c){i=S(B7,g+1|0);h=i.data;Dw(e,0,i,1,g);h[0]=Sd(d);a.o=i;}else{j=f[b];if(c<=0)k=DD(Fc(d,j.t),j.cR,j.b_);else if(c>=I(j.t))k=DD(Fc(j.t,d),j.cR,j.b_);else{l=I(d);m=l+c|0;n=I(j.t)-c|0;h=BN(I(j.t)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.t,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.t,g+c|0);g=g+1|0;}k=DD(FU(h),j.cR,j.b_);}f[b]=k;}a.R=a.R+I(d)|0;Eh(a);}
function Xt(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Mo(f)){if(L(f.t,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Li(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.fn;if(!(e!==null&&e.data.length>=d)){a.fn=AFd(d);a.ee=BC(d);a.fJ=1;}WI(a);if(!a.fJ)AW9=AW9+1|0;else{f=0;g=0.0;AW8=AW8+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.t)|0;a.dq.data[h]=f;Cx(b,i[j.b_]);g=g+Eq(b,j.t);a.fn.data[h]=g;a.ee.data[h]=g+0.5|0;h=h+1|0;}a.R=f;a.fJ=0;a.hv=0;}}
function WI(a){var b;b=a.dq;if(!(b!==null&&b.data.length>=a.o.data.length)){a.dq=BC(a.o.data.length);a.hv=1;}}
function Eh(a){a.fJ=1;a.hV=1;a.hv=1;a.gV=null;}
function W1(a,b,c,d){var e,f,g,h,i,j,k;if(a.gV===null)a.gV=S($rt_arraycls($rt_intcls()),a.o.data.length);e=a.gV.data[d];if(e===null){e=c.data;f=a.o.data[d];Cx(b,e[f.b_]);f=f.t;e=BC(I(f)-1|0);c=Gr(f);g=!d?0.0:a.fn.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;Mv(f,c,0,k);h[i]=g+Eq(b,f)+0.5|0;i=k;}a.gV.data[d]=e;}return e;}
function GY(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fJ&&a.ee!==null))Li(a,c,d);if(b>=a.R)return a.ee.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].t)|0;i=BE(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.ee.data[f];}return (W1(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function E1(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.ee.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GR(a,b){var c;if(b>=a.R)return b+1|0;c=Iq(a,b);return a.dq.data[c];}
function EL(a){var b,c,d,e;b=new M;FW(b,a.R);c=a.o.data;d=c.length;e=0;while(e<d){B0(b,c[e].t);e=e+1|0;}return N(b);}
function M1(b){var c,d,e,f;c=S(Cy,1);d=c.data;e=new Cy;f=S(B7,1);f.data[0]=Sd(b);H$(e,f);d[0]=e;return c;}
function YP(){AWW=0;}
var NO=F();
function ARN(a){}
function B7(){var a=this;C.call(a);a.t=null;a.cR=0;a.b_=0;}
function Sd(a){var b=new B7();AQy(b,a);return b;}
function DD(a,b,c){var d=new B7();Vy(d,a,b,c);return d;}
function AQy(a,b){Vy(a,b,0,0);}
function Vy(a,b,c,d){a.t=b;a.cR=c;a.b_=d;}
function Hh(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Mo(a){return I(a.t);}
function IS(){var a=this;C.call(a);a.cT=null;a.d5=0;}
var AW$=null;var AW_=null;function AT4(a){var b=new IS();Us(b,a);return b;}
function AS5(a,b){var c=new IS();Yk(c,a,b);return c;}
function VF(b,c){var d;d=BE(b.bO,c.bO);if(!d)d=BE(c.bT,b.bT);return d;}
function Us(a,b){Yk(a,null,b);}
function Yk(a,b,c){var d,e;a.d5=0;if(Ee(c))return;Oi(c,AW$);if(b!==null)a.cT=MN(b);c=BU(c);while(B5(c)){d=BY(c);e=a.cT;if(e!==null){Rq(a,e,MN(d));continue;}a.cT=MN(d);}}
function Pl(a,b){var c;if(b.eZ)return b;b=BU(b.bx);while(true){if(!B5(b))return null;c=Pl(a,BY(b));if(c!==null)break;}return c;}
function KD(a,b,c){var d,e,f;d=b.b5;if(d.bO==c.bO&&d.bT==c.bT?1:0){e=BU(b.bx);while(B5(e)){f=KD(a,BY(e),c);if(f!==null)return f;}return b;}b=BU(b.bx);while(true){if(!B5(b))return null;d=BY(b);if(Ql(d,c.bO,c.bT)){e=KD(a,d,c);if(e!==null)break;}}return e;}
function WJ(a,b,c){BZ(c,b.b5);b=BU(b.bx);while(B5(b)){WJ(a,BY(b),c);}}
function PL(a,b,c){a.d5=0;Jh(a,a.cT,b,c);}
function Jh(a,b,c,d){var e;if(C9(b)<c)return;a:{if(CX(b)>c){KB(b,d);FX(b,d);b=BU(b.bx);while(B5(b)){Jh(a,BY(b),c,d);}}else{if(!Kh(b,c)){if(a.d5)break a;if(C9(b)!=c)break a;}FX(b,d);if(CX(b)==c&&a.d5)KB(b,d);e=BU(b.bx);while(B5(e)){Jh(a,BY(e),c,d);}if(!a.d5){b.eZ=1;a.d5=1;}}}}
function Ub(a,b,c){a.d5=0;Mt(a,a.cT,b,c);}
function Mt(a,b,c,d){var e,f,g,h;if(C9(b)<c)return;e=CX(b);f=c+d|0;if(e>f){e= -d|0;KB(b,e);FX(b,e);g=BU(b.bx);while(B5(g)){Mt(a,BY(g),c,d);}b.bx=NQ(a,b.bx);}else{g=b.b5;if(c<=g.bO&&g.bT<=f?1:0){if(b!==a.cT){Jp(b,(-1));Kd(b,(-1));}else{Jp(b,0);Kd(b,0);}Hq(b.bx);}else{e=Kh(b,c);f=Kh(b,f);if(e&&f)FX(b, -d|0);else if(e)Kd(b,c);else{if(!f)return;Jp(b,c);FX(b, -d|0);}h=BU(b.bx);while(B5(h)){Mt(a,BY(h),c,d);}b.bx=NQ(a,b.bx);if(!a.d5){b.eZ=1;a.d5=1;}}}}
function NQ(a,b){var c,d,e,f,g,h;c=Cn();d=null;Oi(b,AW_);b=BU(b);while(B5(b)){e=BY(b);if(CX(e)==C9(e))continue;if(!e.eZ){if(d!==null){BZ(c,d);d=null;}BZ(c,e);}else if(d===null)d=e;else{f=Ba(CX(d),CX(e));g=Bc(C9(d),C9(e));h=MN(Ob(f,g,d.b5.ff));h.dL=e.dL;h.eZ=1;d=h;}}if(d!==null)BZ(c,d);return c;}
function Rq(a,b,c){var d,e;a:{if(OS(b,c)){d=BU(b.bx);while(true){if(!B5(d)){BZ(b.bx,c);c.dL=b;break a;}e=BY(d);if(OS(e,c))break;}Rq(a,e,c);return;}}}
function Sr(a,b,c,d){var e,f,g,h,i,j;if((C9(c)-CX(c)|0)<43)e=B$(d,CX(c),C9(c));else{e=B$(d,CX(c),CX(c)+20|0);f=B$(d,C9(c)-20|0,C9(c));g=new M;O(g);G(G(G(g,e),B(165)),f);e=N(g);}e=Vq(e,B(192),B(249));f=Bu();g=Cw(c);h=new M;O(h);i=T(h,b);BB(i,32);g=G(i,g);BB(g,9);G(g,e);Br(f,N(h));c=BU(c.bx);j=b+1|0;while(B5(c)){Sr(a,j,BY(c),d);}}
function ACK(){AW$=new XG;AW_=new XI;}
function AEl(){var a=this;C.call(a);a.bO=0;a.bT=0;a.ff=0;}
function Ob(a,b,c){var d=new AEl();AIq(d,a,b,c);return d;}
function AIq(a,b,c,d){a.bO=b;a.bT=c;a.ff=d;}
function APV(a,b){var c;if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){c=b;return a.bO==c.bO&&a.bT==c.bT&&a.ff==c.ff?1:0;}return 0;}
function AGV(a,b){var c;b=b;c=BE(a.bO,b.bO);if(!c)c=BE(b.bT,a.bT);return c;}
var XG=F();
function AJH(a,b,c){return VF(b,c);}
var XI=F();
function ALn(a,b,c){b=b;c=c;return VF(b.b5,c.b5);}
var EZ=F();
var AXa=null;var AXb=null;var AXc=null;var AXd=null;var AXe=null;var AXf=null;function ACc(){AXa=new VO;AXb=new VM;AXc=new VN;AXd=new VK;AXe=new VL;AXf=new Yo;}
var G4=F(F5);
function AMh(a,b){var c;c=new Fi;V(c);J(c);}
function XX(){G4.call(this);this.tp=null;}
function AIO(a){return 1;}
function ARA(a,b){var c;if(!b)return a.tp;c=new Bx;V(c);J(c);}
function YO(){var a=this;C.call(a);a.b5=null;a.dL=null;a.bx=null;a.eZ=0;}
function MN(a){var b=new YO();AOc(b,a);return b;}
function AOc(a,b){a.eZ=0;a.b5=b;a.dL=null;a.bx=Cn();}
function CX(a){return a.b5.bO;}
function C9(a){return a.b5.bT;}
function Jp(a,b){a.b5.bO=b;}
function Kd(a,b){a.b5.bT=b;}
function KB(a,b){var c;c=a.b5;c.bO=c.bO+b|0;}
function FX(a,b){var c;c=a.b5;c.bT=c.bT+b|0;}
function Kh(a,b){return CX(a)<=b&&b<C9(a)?1:0;}
function Ql(a,b,c){var d;d=a.b5;return d.bO<=b&&c<=d.bT?1:0;}
function OS(a,b){b=b.b5;return Ql(a,b.bO,b.bT);}
function AJP(a){var b,c,d,e,f;b=a.b5;c=b.bO;d=b.bT;e=b.ff;b=new M;O(b);BB(b,40);BB(T(G(T(G(T(b,c),B(44)),d),B(44)),e),41);b=N(b);c=a.eZ;f=new M;O(f);F4(G(G(f,b),B(44)),c);return N(f);}
var O2=F(0);
var Gc=F(EP);
var Ke=F(Gc);
var VO=F(Ke);
var Lx=F(EC);
var VM=F(Lx);
var VN=F(G4);
var FC=F(0);
var VK=F();
var Pq=F(0);
var VL=F();
var Yo=F();
function NF(){var a=this;C.call(a);a.ht=0;a.lY=0;a.io=0;a.f5=0;a.gD=null;}
function B5(a){return a.ht>=a.io?0:1;}
function BY(a){var b,c;Pe(a);b=a.ht;a.f5=b;c=a.gD;a.ht=b+1|0;return c.rA(b);}
function Q0(a){var b,c,d;if(a.f5<0){b=new D0;V(b);J(b);}Pe(a);a.gD.uu(a.f5);a.lY=a.gD.cv;c=a.f5;d=a.ht;if(c<d)a.ht=d-1|0;a.io=a.io-1|0;a.f5=(-1);}
function Pe(a){var b;if(a.lY>=a.gD.cv)return;b=new IJ;V(b);J(b);}
function KT(){var a=this;KX.call(a);a.oS=null;a.ny=null;}
function Zh(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.oS;e=0;f=0;g=a.ny;a:{while(true){if((e+32|0)>f&&DN(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Ba(B6(b)+j|0,i.length);NC(b,d,j,f-j|0);e=0;}if(!DN(c)){k=!DN(b)&&e>=f?AV6:AV5;break a;}i=g.data;j=Ba(B6(c),i.length);l=new NM;l.mv=b;l.pO=c;k=ABO(a,d,e,f,g,0,j,l);e=l.tm;j=l.uE;if(k===null){if(!DN(b)&&e>=f)k=AV6;else if(!DN(c)&&e>=f)k=AV5;}Xd(c,g,0,j);if(k!==null)break;}}EF(b,b.V-(f-e|0)|0);return k;}
var Ps=F(KT);
function ABO(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LO(h,2))break a;i=AV5;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ma(l)){if((f+3|0)>g){j=j+(-1)|0;if(LO(h,3))break a;i=AV5;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CD(l)){i=D1(1);break a;}if
(j>=d){if(DN(h.mv))break a;i=AV6;break a;}c=j+1|0;m=k[j];if(!C4(m)){j=c+(-2)|0;i=D1(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LO(h,4))break a;i=AV5;break a;}k=e.data;o=Eu(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tm=j;h.uE=f;return i;}
var Ir=F(D3);
var XM=F();
function AHA(a,b){return b.text();}
function XK(){var a=this;C.call(a);a.sW=null;a.sX=null;}
function AFq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.sW;d=a.sX;e=S(Bv,8);f=BN(16);g=0;h=0;i=b.length;j=0;while(true){k=BE(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=Hu(f,0,g);m=h+1|0;e=ADm(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=NJ(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.l(AS$(ZX(e,h),AJG(d)));}
var XL=F();
function AJy(a,b){AEh(b);}
function HS(){var a=this;C.call(a);a.b9=null;a.T=null;a.uP=null;a.iw=null;a.dO=null;a.po=null;a.qr=null;a.s6=null;}
function AXg(a,b,c,d,e){var f=new HS();LU(f,a,b,c,d,e);return f;}
function Kl(){var b,c,d,e,f,g,h,i;b=new HS;c=new IW;d=new G$;G9();JM(d,AXh);Lq(c,d,BF(AWO),BF(AXi),BF(AXj),BF(AWO),BF(AXk),BF(AXl),BF(AXm),BF(AXn),BF(AXo),BF(AXp));ACa();e=(AXq.eI()).data;f=e.length;g=S(IH,f);h=g.data;i=0;while(i<f){h[i]=e[i].la;i=i+1|0;}LU(b,c,g,AA2(Q(B(250)),Q(B(251)),Q(B(252)),Q(B(253))),FY(),ADv(Q(B(117)),Q(B(118)),Q(B(119)),Q(B(254))));return b;}
function LU(a,b,c,d,e,f){var g;g=c.data;a.po=ES(B(152),16.0);a.qr=ES(B(152),17.0);a.s6=ES(B(151),15.0);a.b9=b;a.uP=c;a.iw=d;if(g.length>=15){a.T=e;a.dO=f;return;}b=new BD;V(b);J(b);}
var Hf=F(0);
function KE(){var a=this;C.call(a);a.dw=null;a.dz=null;}
function AHU(a,b){var c,d;if(a===b)return 1;if(!IG(b,Hf))return 0;a:{b:{c:{d:{c=b;b=a.dw;if(b!==null){if(!b.cx(c.dw))break c;else break d;}if(c.dw!==null)break c;}b=a.dz;if(b!==null){if(!b.cx(c.dz))break c;else break b;}if(c.dz===null)break b;}d=0;break a;}d=1;}return d;}
function Ib(){var a=this;KE.call(a);a.iT=0;a.cP=null;}
function Ky(){var a=this;CQ.call(a);a.cL=null;a.f3=null;}
function AUH(a){var b=new Ky();Yz(b,a);return b;}
function Yz(a,b){var c,d,e,f;Fh(a,b);c=ANU(a.s);a.f3=c;d=AD8(a.s,c);a.cL=d;W9(a.s,d);W(b.m.bt,a.f3);W(b.m.dh,a.f3);W(b.m.bt,a.cL);c=b.m.b4;d=new Sg;d.ot=a;W(c,d);c=b.m.b4;d=new HG;e=a.cL;BK(e);f=new Sk;f.um=e;Sn(d,b,f);W(c,d);c=b.m.fq;d=a.cL;BK(d);e=new Sj;e.me=d;W(c,e);c=b.m.fW;d=new Si;d.pt=a;W(c,d);c=b.m.dh;d=new Sh;d.vd=a;W(c,d);b=b.m.en;c=new Sl;c.m3=a;W(b,c);LM(a);}
function AHq(a,b){return K3(a.cL,b);}
function AKj(a){E5(a);Mh(a.cL);Ws(a.f3);}
function AOd(a){return Mi(0);}
function AMK(a,b,c){GT(a,b,c);a.kS(b,c);}
function AAs(a,b,c){LJ(a.cL,new Bm,b,c);}
function AGi(a,b){BK(b);PP(a.f3,b);Lj(a.cL,b);}
function AEz(a,b){if(b.bh!=121)return 0;return 1;}
function Zn(a,b){var c,d,e;if(DY(a.s,a.cL)){c=a.f3;d=a.cL;e=new S$;e.qE=a;KC(c,b,d,a,d,e);}return 1;}
function Y7(){var a=this;CC.call(a);a.lT=null;a.k7=null;a.de=null;a.go=null;a.fd=null;a.g9=null;a.vt=null;a.gY=null;a.re=null;a.lV=null;a.vK=null;a.wO=null;a.fX=null;a.jE=null;a.qp=0;}
function ASW(a){var b=new Y7();ALM(b,a);return b;}
function ALM(a,b){var c,d,e,f,g,h,i;ER(a,b);c=(Kl()).b9.eN;a.lT=c;a.k7=ARb(c);a.de=Fe(0,0,300,300);a.go=SW(0,0,3,3);a.fd=Fe(0,0,300,300);a.g9=AM$();d=S(Bv,4);e=d.data;e[0]=B(203);e[1]=B(186);e[2]=B(227);e[3]=B(226);a.vt=d;a.gY=S(IC,e.length);c=b.bl;f=b.m.bt;g=new T5;g.fb=a;W(f,g);f=b.m.b4;g=new RW;g.vf=a;W(f,g);f=b.m.l_;g=new RV;g.or=a;W(f,g);f=b.m.fq;g=new RY;g.xc=a;W(f,g);f=b.m.jp;g=new RX;g.vD=a;W(f,g);f=b.m.en;g=new RU;g.wK=a;W(f,g);b=b.m.dh;f=new RT;f.to=a;W(b,f);h=CK(a.bj.bl,300,300);f=h.bn;b="white";f.fillStyle
=b;b=h.bn;f="white";b.strokeStyle=f;b=h.bn;f=10.0;b.lineWidth=f;h.bn.strokeRect(75.0,140.0,150.0,110.0);h.bn.fillRect(130.0,190.0,40.0,60.0);h.bn.beginPath();h.bn.moveTo(50.0,140.0);h.bn.lineTo(150.0,60.0);h.bn.lineTo(250.0,140.0);h.bn.closePath();h.bn.stroke();F1(h,B(255),11.0);Lu(h,187,187,187);Pr(a,B(256),h);b=CU(a.bj.bl);CM(b,h);FN(h);a.re=b;Gh(a.de,b);G1(a.de);BH(a.de.b3,a.lT);BH(a.de.bU,CL(204,120,50));b=CK(c,255,100);a.fX=b;F1(b,B(152),11.0);b=Bu();i=$rt_str(a.fX.bn.font);g=new M;O(g);G(G(g,B(257)),i);Br(b,
N(g));Eq(a.fX,B(258));Lu(a.fX,169,183,198);Pr(a,B(258),a.fX);b=CU(c);a.lV=b;CM(b,a.fX);Gh(a.fd,a.lV);G1(a.fd);Ga(a.fd,C3(255));Hx(a.fd,a.lT);a.vK=CU(c);BH(a.go.b3,a.k7);}
function Pr(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function W4(a,b){Jx(Fv(),0.5+Fv()*0.5,0.5+Fv()*0.5,1.0,b.bU);}
function AFB(a,b){var c;a.qp=a.qp+1|0;c=b/5.0;Jx(c-(c|0),1.0,1.0,1.0,a.go.bU);return Ta(a.g9,b);}
function AIH(a){var b,c,d,e,f,g;b=a.bj.bl;Gy(b,a.k7);c=a.gY.data;d=c.length;e=0;while(e<d){UI(c[e],b,0,0);e=e+1|0;}DE(a.de,b,a.re,0,0,0.5);f=a.lV;d=0;while(d<7){g=a.fd;DE(g,b,f,X(d,10+((10*g.y.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.wO;if(g!==null)Ul(a.go,b,g,0,0,0.0);Vl(a.g9,b,new Bm);NZ(b,B(259));}
function APh(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bu();e=Cw(b);f=new M;O(f);G(G(f,B(260)),e);Br(d,N(f));g=Bu();d=new M;O(d);Fk(G(d,B(261)),c);Br(g,N(d));h=B_(30.0,c);i=B_(10.0,c);j=0;while(true){k=a.gY.data;if(j>=k.length)break;l=1+j|0;k[j]=SW(X(i,l)+X(h,j)|0,h,h,h);W4(a,a.gY.data[j]);j=l;}Bh(a.go.P,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.de;g=d.P;h=b.b;d=d.y;Bh(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.fd;d.P.a=b.a-d.y.a|0;}
function O6(a,b){var c,d,e,f,g;c=Bu();d=!b.hm?B(262):B(263);e=b.dH;f=b.bh;g=b.rJ;b=new M;O(b);F4(G(T(G(G(G(b,d),e),B(264)),f),B(265)),g);Br(c,N(b));return 0;}
function Wp(){var a=this;CQ.call(a);a.rp=null;a.dy=null;a.cK=null;a.d8=null;a.lm=null;}
function AQI(a,b,c){var d;d=GN(a.s,a.lm);H1(a.dy,d);H1(a.cK,d);GV(a.dy,a.s);GV(a.cK,a.s);}
function NK(b){return I1(b,AP_());}
function I1(b,c){var d;d=PZ();Kx(d,KS(b,Iu(c,25)),!b?null:I1(b-1|0,c));Kx(d,KS(b,Iu(c,20)),!b?null:I1(b-1|0,c));Kx(d,KS(b,Iu(c,15)),!b?null:I1(b-1|0,c));Kx(d,KS(b,Iu(c,10)),!b?null:I1(b-1|0,c));return Hn(d);}
function KS(b,c){var d;if(b){d=new M;O(d);G(G(T(d,b),B(36)),c);c=N(d);}return c;}
function Kx(b,c,d){var e,f;e=new Gv;f=Jx(Fv(),1.0,1.0,1.0,new B4);X7();Hl(e,f,AXr,AXs);if(d!==null)GH(b,c,e,d);else{d=new Uw;d.tr=c;D6(b,c,e,d);}}
function AIa(a,b,c){var d,e;GT(a,b,c);b=a.s.b8;d=Ec(a.dy);e=Ec(a.cK);JZ(a.dy,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);JZ(a.cK,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AIW(a){var b,c,d,e,f,g,h,i;E5(a);b=a.bj.bl;CJ(b,1);c=a.rp;d=a.s;e=d.b8;Bh(c.lI,e.b,B_(2.0,d.bN));Bh(c.j4,B_(2.0,d.bN),e.a);G9();f=AXo;g=d.cW;h=e.a/2|0;i=c.lI;Bz(g,0,h-(i.a/2|0)|0,i,f);g=d.cW;h=e.b/2|0;c=c.j4;Bz(g,h-(c.b/2|0)|0,0,c,f);JE(a.dy,a.s);JE(a.cK,a.s);Io(a.d8);CJ(b,0);}
function AOz(a,b){var c,d,e;c=Kv(a.d8,b);d=Ki(a.dy,b.h,a.s.cC);e=Ki(a.cK,b.h,a.s.cC);return !c&&!d&&!e?0:1;}
function AI4(a,b,c){return Ji(a.d8,b,c);}
function AGK(a,b,c){return DJ(a.d8);}
function ANR(a,b,c,d){var e,f,g;e=Jn(a.d8,b,c,d);f=Ka(a.dy,b.h,c,d);g=Ka(a.cK,b.h,c,d);return !e&&!f&&!g?0:1;}
function XF(){var a=this;CQ.call(a);a.ha=null;a.em=null;a.hZ=null;a.ks=null;}
function AI7(a,b,c){if(b===0.0)X1(a);}
function AOa(a){var b;E5(a);b=a.bj.bl;I8(a.em,b);Io(a.ha);}
function X1(a){var b,c,d,e,f,g,h;b=a.hZ;if(b!==null){J9(a.em,b);JX(b);}b=(Kl()).T;c=AUw(a.s,new V8);d=ES(B(151),14.0);e=ANW();f=0;while(f<300){g=C5(f);h=new Yu;h.sa=B(266);h.r_=g;h.r$=B(267);Nf(e,B(266),g,B(267),h);f=f+1|0;}Wa(c,Q3(e));X4(c,b,d);g=AB3(a.s);h=ZJ(c,a.s);QL(h,b.lH,b.j8);LS(g,h);g.eg=b;IF(g,B(268),a.ks,2.0);a.hZ=g;IV(a.em,g);UK(a);}
function AHk(a,b,c){GT(a,b,c);P4(a.em,b,c);UK(a);}
function UK(a){var b,c,d;b=a.s.b8;Fn(a.hZ,BX((b.b*2|0)/10|0,(b.a*4|0)/10|0),BX((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.hZ;b=Yw(c.O.q);d=new M;O(d);G(G(d,B(269)),b);IF(c,N(d),a.ks,2.0);}
function APn(a,b){return Os(a.em,b);}
function Yq(){var a=this;CQ.call(a);a.hW=null;a.fA=null;a.e5=null;a.jh=null;a.oE=null;a.id=null;a.fL=null;a.fw=null;a.jb=0;a.fY=0;}
function WX(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fA.i>0){d=Fv();e=a.fA;f=d*(e.i-1|0)|0;e=En(e,f);En(a.e5,f);f=a.fY;g=e.y;a.fY=f-X(g.b,g.a)|0;Ig(a.hW,e.c7);}c=c+1|0;}}
function Kt(a,b){var c,d,e,f,g,h,i,j;c=IK(a.s);Cx(c,a.jh);d=0;while(d<b){e=Iu(a.id,1+(Fv()*19.0|0)|0);f=AL1();g=f.c7;h=a.hW;BK(c);i=new RB;i.oV=c;BH(g,Hg(h,e,i));(Xa(Fv(),1.0,1.0,f.b3)).bA=0.5;h=f.P;g=f.c7;Bh(h,g.bm|0,g.bz|0);h=f.y;g=f.c7;Bh(h,g.bi|0,g.bA|0);BZ(a.e5,e);BZ(a.fA,f);j=a.fY;h=f.y;a.fY=j+X(h.b,h.a)|0;d=d+1|0;}a.fw=Md(a.hW);}
function AOK(a){var b,c,d,e,f,g,h,i;E5(a);b=a.bj.bl;CJ(b,1);c=a.s.cW;if(a.e5.i){d=a.fw;d=CK(c,d.b,d.a);Cx(d,a.jh);e=a.jh.dv;Bz(c,0,0,a.fw,a.oE);f=0;while(f<a.e5.i){g=Bt(a.fA,f);h=Bt(a.e5,f);g=g.c7;Ch(d,h,g.bm,g.bz+e);f=f+1|0;}g=a.fL;if(!(g!==null&&Ce(g)==a.fw.b&&C8(a.fL)==a.fw.a))a.fL=CG(a.fL,CU(c));CM(a.fL,d);FN(d);i=0;while(i<a.e5.i){d=Bt(a.fA,i);Ga(d,C3(0));DE(d,c,a.fL,0,0,0.0);i=i+1|0;}}CJ(b,0);}
function AHN(a,b){var c,d;if(a.jb){c=a.fw;d=Ba(X(c.b,c.a),2211840);if(a.fY/d<=0.7)Kt(a,Ii(a.id,5));else WX(a,Ii(a.id,5));}return a.jb;}
function Pi(){var a=this;CC.call(a);a.d3=null;a.fS=null;a.gK=null;a.kG=null;a.d2=0;a.rY=0;a.uv=null;a.lJ=0;a.uM=0;a.s1=null;a.ov=null;}
function AFT(a){var b,c;b=a.d2;c=new M;O(c);T(G(c,B(270)),b);$rt_globals.console.info($rt_ustr(N(c)));Gy(a.d3,a.uv);Iv(a.gK,a.d2,0,F$(a),5000,a.kG.b,20);CJ(a.d3,1);P8(a.gK,a.d3);CJ(a.d3,0);b=a.d2;c=new M;O(c);T(G(c,B(270)),b);$rt_globals.console.info($rt_ustr(N(c)));X0(a.fS,a.d2/a.lJ|0);Yh(a.fS,a.d2,F$(a),a.ov,a.d3);}
function AQq(a,b,c){a.kG=b;VE(a.fS,BX(0,0),50,F$(a),c);J2(a.fS,a.d3,0,F$(a));}
function PY(a){return 5000-F$(a)|0;}
function F$(a){return Ba(a.rY,a.kG.a);}
function Db(){var a=this;CC.call(a);a.lv=null;a.gv=null;a.vF=0.0;}
function AXt(a){var b=new Db();Gk(b,a);return b;}
function Gk(a,b){ER(a,b);a.lv=Z4(0,0,64);a.gv=new Bm;NE(b.bP,H4(Co(a)));}
function Ss(a){Gy(a.bj.bl,a.lv);}
function S0(a,b,c){Cz(a.gv,b);a.vF=c;}
var Ra=F(Db);
var AEt=F(Db);
function AUj(a){var b=new AEt();ANo(b,a);return b;}
function ANo(a,b){var c,d,e,f,g,h;Gk(a,b);c=b.bP;d=new RA;d.wc=a;e=S(C,1);e.data[0]=B(271);CO(c,d,B(272),e);f=b.bP;g=new Rz;g.x1=a;h=S(C,1);h.data[0]=ABd([1,2,3,4,5]);CO(f,g,B(273),h);f=b.bP;g=new Ry;g.oo=a;h=S(C,1);h.data[0]=ATC([1,2,3,4,5]);CO(f,g,B(274),h);f=b.bP;g=new Rx;g.vX=a;h=S(C,1);h.data[0]=E6([1,2,3,4,5]);CO(f,g,B(275),h);f=b.m.b4;d=new HG;g=new Rv;g.w3=a;c=new Ru;c.p_=a;VG(d,b,g,c);W(f,d);}
function UL(a,b){var c,d,e,f,g,h;c=b.data;d=Bu();e=Cw(c[0]);f=new M;O(f);G(G(f,B(276)),e);Br(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((R_(b,1)).hf));d=Bu();e=Cw(c[1]);if(b===null)f=B(29);else{f=new M;O(f);B0(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)B0(f,B(44));T(f,c[g]);g=g+1|0;}B0(f,B(45));f=N(f);}h=new M;O(h);G(G(G(G(h,B(277)),e),B(278)),f);Br(d,N(h));}
function W7(){var a=this;Db.call(a);a.dN=null;a.eR=null;a.kg=null;a.pz=null;a.ll=null;}
function ALi(a,b){b=b/5.0;Jx(b-(b|0),1.0,1.0,1.0,a.eR.bU);return 0;}
function AFu(a){Ss(a);DE(a.dN,a.bj.bl,a.pz,0,0,0.5);Ul(a.eR,a.bj.bl,a.kg,0,0,0.0);NZ(a.bj.bl,B(259));}
function AN9(a,b,c){var d,e,f;S0(a,b,c);Bh(a.eR.P,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dN;e=d.P;f=b.b;d=d.y;Bh(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Sv(){var a=this;Db.call(a);a.gd=null;a.rB=null;a.jS=null;a.ih=null;a.hs=null;}
function ARU(a){var b,c,d,e,f,g;Ss(a);b=a.bj.bl;c=a.ih;LD(b,c.b,c.a,a.hs);b=a.gd;c=a.rB;d=a.gv;e=a.bj.bl;f=0;while(true){g=0;while(true){DE(b,e,c,g,f,0.5);g=g+Ce(c)|0;if(g>=d.b)break;}f=f+C8(c)|0;if(f>=d.a)break;}IB(a.bj.bl);}
function AHb(a,b,c){S0(a,b,c);Bh(a.hs,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function OW(){var a=this;CC.call(a);a.ea=null;a.jL=null;a.fa=null;a.b2=null;a.eA=0;a.hC=null;a.eB=0;a.wL=20;a.yh=11;a.wr=220;a.i4=null;a.w9=5000;a.gx=0;a.fm=null;}
function ARX(a){var b,c,d,e,f,g,h;b=a.hC;c=a.eB;d=a.i4;Iv(b,c,0,d.a,5000,d.b,20);CJ(a.ea,1);P8(a.hC,a.ea);if(a.b2===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.jL,C5(e),0.0,c);}b=CU(a.ea);a.b2=b;CM(b,a.jL);}if(a.eB<=a.eA)while(true){f=a.eA;if(f<=a.eB)break;a.eA=f-20|0;b=a.fa;g=a.gx-1|0;a.gx=g;Ch(b,C5(g),0.0,20.0);HY(a.b2,a.fa,0,a.eA%220|0);Ew(a.fa);}else while(a.eA<(a.eB-20|0)){b=a.fa;g=a.gx+1|0;a.gx=g;Ch(b,C5((g+11|0)-1|0),0.0,20.0);HY(a.b2,a.fa,0,a.eA%220|0);Ew(a.fa);a.eA=a.eA+20|0;}b=Fe(0,0,Ce(a.b2),C8(a.b2));HC(b,
0,0,Ce(a.b2),C8(a.b2));Ga(b,a.fm.data[0]);Hx(b,a.fm.data[1]);DE(b,a.ea,a.b2,400,0,1.0);g=a.eB%220|0;f=Ba(C8(a.b2)-g|0,200);d=Fe(0,0,Ce(a.b2),f);HC(d,0,g,Ce(a.b2),f);Ga(d,a.fm.data[0]);Hx(d,a.fm.data[1]);DE(d,a.ea,a.b2,0,0,1.0);h=Fe(0,f,Ce(a.b2),(C8(a.b2)-f|0)-20|0);HC(h,0,0,Ce(a.b2),(C8(a.b2)-f|0)-20|0);Ga(h,a.fm.data[1]);Hx(h,a.fm.data[0]);DE(h,a.ea,a.b2,0,0,1.0);}
function AJq(a,b,c){Cz(a.i4,b);}
function AHT(a,b){return 0;}
function R4(a){return 5000-a.i4.a|0;}
function Iw(){Db.call(this);this.dA=0;}
function Rr(a){var b,c;b=a.bj.bP;c=new Qn;c.mA=a;Q2(b,c,RP(a));}
function MG(a){var b,c,d,e;b=a.dA+1|0;a.dA=b;c=H4(E(Iw));d=new M;O(d);G(G(T(G(d,B(279)),b),B(36)),c);e=N(d);c=a.bj.bP;d=new Up;d.pQ=e;UB(c,e,d,RP(a));}
function RP(a){var b;b=new V0;b.oA=a;return b;}
function APb(a,b,c,d){a:{switch(c){case 0:break;case 2:MG(a);break a;default:break a;}Rr(a);}return 1;}
function Qe(){var a=this;CC.call(a);a.nh=null;a.e6=null;a.ln=null;a.hX=null;}
function ARO(a){var b;b=a.bj.bl;Gy(b,a.nh);DE(a.e6,b,a.ln,0,0,0.5);}
function AMg(a,b,c){var d,e,f;d=a.e6;e=d.P;f=b.b;d=d.y;Bh(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function WH(){var a=this;CQ.call(a);a.gE=null;a.d4=null;a.i$=null;a.i_=null;a.s0=null;}
function AKr(a,b,c){if(b===0.0)NS(a);}
function ASb(a){var b;E5(a);b=a.bj.bl;I8(a.d4,b);Io(a.gE);}
function NS(a){WV(a,a.i$);WV(a,a.i_);a.i$=M_(a,0.5,0,B(280));a.i_=M_(a,1.0,1,B(281));IV(a.d4,a.i$);IV(a.d4,a.i_);Xj(a);}
function WV(a,b){if(b!==null){J9(a.d4,b);JX(b);}}
function M_(a,b,c,d){var e,f,g;e=AB3(a.s);f=new Wd;g=new PB;g.s4=a;g.s5=e;g.s2=d;T3(f);f.hP=new B4;f.k_=new Bm;f.r9=g;f.pN=b;if(c)f=ZJ(f,a.s);LS(e,f);e.eg=FY();return e;}
function AOr(a,b,c){GT(a,b,c);P4(a.d4,b,c);Xj(a);}
function Xj(a){var b;b=a.s.b8;Fn(a.i_,BX((b.b*2|0)/10|0,(b.a*2|0)/10|0),BX((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fn(a.i$,BX(b.b/10|0,b.a/10|0),BX((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function ALe(a,b){return Os(a.d4,b);}
var Rw=F(Ky);
function AKx(a){return Mi(1);}
function AMk(a,b,c){AAs(a,b,c);}
function IW(){var a=this;C.call(a);a.tj=null;a.eN=null;a.u$=null;a.x5=null;a.of=null;a.kK=null;a.p9=null;a.oi=null;a.lC=null;a.lX=null;a.iV=null;}
function AXu(a,b,c,d,e,f,g,h,i,j,k){var l=new IW();Lq(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Lq(a,b,c,d,e,f,g,h,i,j,k,l){a.tj=b;a.eN=c;a.u$=d;a.x5=e;a.of=f;a.kK=g;a.p9=h;a.oi=i;a.lC=j;a.lX=k;a.iV=l;}
var ACB=F(0);
function ZE(){var a=this;C.call(a);a.ig=null;a.k8=null;a.oB=null;a.up=null;}
function AA2(a,b,c,d){var e=new ZE();ANY(e,a,b,c,d);return e;}
function ANY(a,b,c,d,e){a.ig=b;a.k8=c;a.oB=d;a.up=e;}
function H3(){var a=this;C.call(a);a.i5=null;a.h5=null;a.nn=null;a.pG=null;a.bg=null;a.lH=null;a.j8=null;}
function AXv(a,b,c,d,e,f,g){var h=new H3();K6(h,a,b,c,d,e,f,g);return h;}
function K6(a,b,c,d,e,f,g,h){a.nn=b;a.pG=c;a.h5=d;a.bg=e;a.i5=f;a.lH=g;a.j8=h;}
function FY(){var b,c,d;b=new H3;c=new Hz;X7();d=AXw;JV(c,d,AXx,AXy,AXz,AXA,d);K6(b,c,ABU(),Zt(Q(B(282)),Q(B(115)),Q(B(116))),ABU(),ZM(1,0.125),AXB,AXC);return b;}
function ADs(){var a=this;C.call(a);a.mU=null;a.sQ=null;a.rk=null;a.qd=null;}
function ADv(a,b,c,d){var e=new ADs();AKv(e,a,b,c,d);return e;}
function AKv(a,b,c,d,e){a.mU=b;a.sQ=c;a.rk=d;a.qd=e;}
function Vj(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dO.sQ;break a;case 3:if(c!=3){b=b.dO.qd;break a;}b=b.dO.rk;break a;default:b=b.b9.eN;break a;}b=b.dO.mU;}return b;}
function JT(a,b,c){return Vj(a,b,0,c);}
function Ms(){var a=this;C.call(a);a.iQ=null;a.ic=null;}
function MD(a,b){var c;c=a.ic;a.ic=b;return c;}
function Jr(){var a=this;Ms.call(a);a.bM=null;a.bZ=null;a.fl=0;a.fu=0;}
function JK(a){var b;b=KY(a);if(b==2){if(KY(a.bZ)<0)a.bZ=Ni(a.bZ);return OT(a);}if(b!=(-2))return a;if(KY(a.bM)>0)a.bM=OT(a.bM);return Ni(a);}
function KY(a){var b,c;b=a.bZ;c=b===null?0:b.fl;b=a.bM;return c-(b===null?0:b.fl)|0;}
function Ni(a){var b;b=a.bM;a.bM=b.bZ;b.bZ=a;Ek(a);Ek(b);return b;}
function OT(a){var b;b=a.bZ;a.bZ=b.bM;b.bM=a;Ek(a);Ek(b);return b;}
function Ek(a){var b,c,d;b=a.bZ;c=b===null?0:b.fl;b=a.bM;d=b===null?0:b.fl;a.fl=Bc(c,d)+1|0;a.fu=1;b=a.bM;if(b!==null)a.fu=1+b.fu|0;b=a.bZ;if(b!==null)a.fu=a.fu+b.fu|0;}
var AD_=F();
function AGz(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Pd;c=c.buffer;d.fk=c;d.l4=new $rt_globals.Int8Array(c);d.jM=new $rt_globals.Uint16Array(c);d.sw=new $rt_globals.Int32Array(c);d.pc=new $rt_globals.Float32Array(c);d.pv=new $rt_globals.Float64Array(c);e=d.fk.byteLength;c=new M;O(c);T(G(c,B(283)),e);CF(N(c));e=b.callToCpp1();c=new M;O(c);T(G(c,B(284)),e);CF(N(c));f=b.callToCpp2();c=new M;O(c);Fk(G(c,B(285)),f);CF(N(c));c=M6(d,b.getC8String());g=new M;O(g);G(G(g,B(286)),c);CF(N(g));c
=Nc(d,b.getC16String());g=new M;O(g);G(G(g,B(287)),c);CF(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.fk,h,8));c=ACS(i);g=new M;O(g);G(G(g,B(288)),c);CF(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.fk,h,8));c=APw(j);g=new M;O(g);G(G(g,B(289)),c);CF(N(g));k=AAW(d,b.getCDoubleArray8(),8);l=ASd(k);c=new M;O(c);G(G(c,B(290)),l);CF(DT(c));l=AR3(b.getC8String(),B(291),d);c=LV();G(G(c,B(292)),l);CF(DT(c));l=AL9(b.getC16String(),B(293),
d);c=LV();G(G(c,B(294)),l);CF(DT(c));c=AN4(i,d,b.getCIntArray8(),E6([11,22,33,44,55,66,77,88]));g=LV();G(G(g,B(295)),c);CF(DT(g));c=APM(j,d,b.getCFloatArray8(),100,E6([111,222,333,444,555,666,777,888]));g=LV();G(G(g,B(296)),c);CF(DT(g));b=AP3(k,d,b.getCDoubleArray8(),1000,E6([1111,2222,3333,4444,5555,6666,7777,8888]));c=LV();G(G(c,B(297)),b);CF(DT(c));}
function APM(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(298);h=0;i=e;a:{while(h<g){if(Df(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.pc[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(299);}return B(300);}
function AP3(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(298);h=0;i=e;a:{while(h<g){if(He(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.pv[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(299);}return B(300);}
function AN4(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(298);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.sw[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(299);}return B(300);}
function AR3(b,c,d){var e,f,g,h;e=M6(d,b);if(!Bo(c,e))return B(301);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.l4[h])return B(302);f=f+1|0;}return B(299);}
function AL9(b,c,d){var e,f,g,h;e=Nc(d,b);if(!Bo(c,e))return B(301);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jM[h>>>1|0]&65535))return B(302);f=f+1|0;}return B(299);}
function CF(b){Pa(B(2),b);}
function AK3(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Sg(){C.call(this);this.ot=null;}
function AMv(a,b){return AEz(a.ot,b);}
function Sk(){C.call(this);this.um=null;}
function ARt(a,b){KK(a.um,b);}
function Sj(){C.call(this);this.me=null;}
function AMw(a,b,c){return GC(a.me,b,c);}
function Si(){C.call(this);this.pt=null;}
function ARc(a){var b,c;b=a.pt.cL;BK(b);c=new QN;c.ni=b;return c;}
function Sh(){C.call(this);this.vd=null;}
function AQC(a,b,c,d){return JG(a.vd.cL,c,d);}
function Sl(){C.call(this);this.m3=null;}
function AJC(a,b){b=b;return Zn(a.m3,b);}
function ADC(){IC.call(this);this.c7=null;}
function AL1(){var a=new ADC();AGu(a);return a;}
function Fe(a,b,c,d){var e=new ADC();AL0(e,a,b,c,d);return e;}
function AGu(a){Sp(a);a.c7=new B4;}
function AL0(a,b,c,d,e){Sp(a);a.c7=new B4;P5(a,b,c,d,e);}
function G1(a){var b,c;b=a.y;c=a.c7;Bh(b,c.bi-c.bm|0,c.bA-c.bz|0);}
function Gh(a,b){HC(a,0,0,Ce(b),C8(b));}
function HC(a,b,c,d,e){CE(a.c7,b,c,d,e);}
function DE(a,b,c,d,e,f){var g;g=a.P;EI(b,g.b+d|0,g.a+e|0,a.y,a.c7,c,a.bU,a.b3,f);}
function Ga(a,b){BH(a.bU,b);}
function Hx(a,b){BH(a.b3,b);}
function T5(){C.call(this);this.fb=null;}
function AOk(a,b){var c,d,e,f,g,h,i;c=a.fb;d=c.jE;if(d!==null){e=c.de.P;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.jE=g;}d=b.h;f=d.b;c=c.go;e=c.y;h=f-e.b|0;f=d.a-e.a|0;Bh(c.P,h,f);c=a.fb;d=c.bj.bP;b=b.h;f=0;a:{while(true){i=c.gY.data;if(f>=i.length)break;if(Es(i[f],b)){b=c.vt.data[f];break a;}f=f+1|0;}b=null;}Gq(d,b);return 1;}
function APT(a,b,c,d){if(!c&&d==2){b=a.fb;W4(b,b.de);}return 1;}
function AIE(a,b,c){var d,e;d=Bu();e=new M;O(e);T(G(e,B(303)),c);Br(d,N(e));if(!c){d=b.h;b=a.fb;b.jE=!Es(b.de,d)?null:d;PX(a.fb.g9,d.b,d.a);b=a.fb;SD(b.g9,Js(b.bj.bP));}return AWZ;}
function AIf(a,b,c){var d;b=Bu();d=new M;O(d);T(G(d,B(304)),c);Br(b,N(d));return 1;}
function RW(){C.call(this);this.vf=null;}
function AOe(a,b){return O6(a.vf,b);}
function RV(){C.call(this);this.or=null;}
function AQP(a,b){return O6(a.or,b);}
function RY(){C.call(this);this.xc=null;}
function ARk(a,b,c){var d,e;Br(Bu(),B(305));d=!c?B(306):B(28);e=new M;O(e);G(G(G(e,B(307)),d),B(308));Wv(b,N(e));return 1;}
function RX(){C.call(this);this.vD=null;}
function ARi(a){Br(Bu(),B(309));}
function RU(){C.call(this);this.wK=null;}
function AMB(a,b){Br(Bu(),B(310));return 1;}
function RT(){C.call(this);this.to=null;}
function AKe(a,b,c,d){var e,f,g;b=a.to;e=( -d|0)/10|0;b=b.de;f=b.y;f.b=f.b+e|0;f.a=f.a+e|0;b=b.P;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function G$(){var a=this;B4.call(a);a.f_=0;a.gc=0;a.ga=0;a.gb=0;}
function C3(a){var b=new G$();ARS(b,a);return b;}
function CL(a,b,c){var d=new G$();AH9(d,a,b,c);return d;}
function Q(a){var b=new G$();APP(b,a);return b;}
function Fu(a,b,c,d){var e=new G$();QK(e,a,b,c,d);return e;}
function BF(a){var b=new G$();JM(b,a);return b;}
function ARS(a,b){QK(a,b,b,b,255);}
function AH9(a,b,c,d){QK(a,b,c,d,255);}
function APP(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.f_=IY(L(b,1))*17|0;a.gc=IY(L(b,2))*17|0;a.ga=IY(L(b,3))*17|0;a.gb=255;}else{a.f_=LC(L(b,1),L(b,2));a.gc=LC(L(b,3),L(b,4));a.ga=LC(L(b,5),L(b,6));a.gb=I(b)!=9?255:LC(L(b,7),L(b,8));}HA(a.f_,a.gc,a.ga,a.gb,a);return;}}
function QK(a,b,c,d,e){a.f_=b;a.gc=c;a.ga=d;a.gb=e;HA(b,c,d,e,a);}
function JM(a,b){a.f_=b.f_;a.gc=b.gc;a.ga=b.ga;a.gb=b.gb;BH(a,b);}
function IY(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LC(b,c){return (16*IY(b)|0)+IY(c)|0;}
function Vc(){var a=this;C.call(a);a.lI=null;a.j4=null;}
function Z1(){var a=this;C.call(a);a.fe=null;a.cf=null;a.ej=null;a.ge=null;a.lg=null;a.cc=null;a.fD=null;a.cS=0;a.eM=0;a.ly=0;a.gS=0;a.fF=0;a.ji=null;a.jD=null;a.s8=null;}
function Zk(){var a=new Z1();ARl(a);return a;}
function ARl(a){a.cf=ALx();a.ej=new Bm;a.ge=new Bm;a.cc=AXD;a.gS=(-1);}
function KW(a,b){TY(a);a.cc=b;}
function H1(a,b){a.fe=b;TY(a);}
function H9(a,b){var c,d,e,f,g;a.lg=b.i5;c=b.bg.hu;BH(a.cf.bU,c);c=b.h5.j2;BH(a.cf.b3,c);d=0;while(true){e=a.cc.data;if(d>=e.length)break;c=e[d];f=b.bg;c.jm=f;c=c.dn;g=f.k$;f=f.hu;BH(c.bU,g);BH(c.b3,f);d=d+1|0;}}
function TK(a){a.fD=CG(a.fD,null);Bh(a.ej,0,0);a.cc=AXD;a.gS=(-1);Te(a.cf);}
function GV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=IK(b);d=b.bN;BK(a.fe);Cx(c,a.fe);e=J6(a.fe,1.25);f=0;a.cS=B_(2.0,d);a.eM=B_(3.0,d);a.ly=B_(12.0,d);g=0;h=a.cc.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Q1(c,l.ki);n=a.ly;n=(n+m|0)+n|0;f=Bc(f,n);b=l.dn;l=b.P;l.b=g;l.a=0;l=b.y;l.b=n;l.a=e;CE(b.c7,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.ej;b.b=g;b.a=e;b=a.cf.y;n=a.fF;if(!n){m=a.cS;m=(g+m|0)+X(m,a.cc.data.length)|0;}else m=(f+(a.cS*2|0)|0)+(a.eM*2|0)|0;b.b=m;if(!n)e=e+(a.cS*2|0)|0;else{n=a.cS;e=(X(e+n|0,a.cc.data.length)
+n|0)+(a.eM*2|0)|0;}b.a=e;}
function JZ(a,b,c){var d,e,f,g,h,i,j;Bh(a.cf.P,b,c);d=a.cS+a.eM|0;e=a.cc.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dn;j=i.P;j.b=b+d|0;j.a=c+h|0;if(!a.fF){if(!i.y.b)AEK();d=d+(i.y.b+a.cS|0)|0;}else{if(!i.y.a)AEK();h=h+(i.y.a+a.cS|0)|0;}g=g+1|0;}}
function AEK(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ec(a){var b,c;b=a.ej;if(b.b&&b.a)return a.cf.y;c=new Bq;Bn(c,B(311));J(c);}
function TY(a){Bh(a.ej,0,0);}
function JE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cW;if(!a.cc.data.length)return;a:{if(a.fD!==null){d=a.ej;if(X(d.b,d.a))break a;}d=a.ej;if(!X(d.b,d.a))GV(a,b);d=a.ej;e=d.b;f=d.a;if(!X(e,f))return;d=CK(c,e,f);Cx(d,a.fe);g=J6(a.fe,0.125);h=a.fe;i=h.dv;j=g+i-(i+h.ek)/16.0;k=a.cc.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.ki,h.dn.c7.bm+a.ly,j);l=l+1|0;}h=CG(a.fD,CU(c));a.fD=h;CM(h,d);FN(d);}if(!L8(a.cf)){d=a.cf;ADK(c,d.y,d.P,d.b3,a.cS,a.ge);d=a.cf;h=d.y;m=d.P;d=d.bU;e=a.cS;n=a.ge;n.b=(h.b-e|0)-e|0;n.a=(h.a-
e|0)-e|0;Bz(c,m.b+e|0,m.a+e|0,n,d);if(a.fF){d=a.cf;AC1(c,d.y,d.P,0,0,Rp(a.lg,b.bN),a.lg.l3,a.ge);}}k=a.cc.data;l=k.length;o=0;while(o<l){DE(k[o].dn,c,a.fD,0,0,0.0);o=o+1|0;}b:{if(a.fF){k=a.cc.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dn;m=a.ge;e=(a.cf.y.b-(a.cS*2|0)|0)-(a.eM*2|0)|0;b=h.y;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.P;Bz(c,d.b+b.b|0,d.a,m,h.b3);}o=o+1|0;}}}}
function Ki(a,b,c){var d,e,f,g,h,i;d=Es(a.cf,b);e=!d?(-1):Vf(a,b);f=a.gS;if(f!=e){if(f>=0){g=a.cc.data[f];NR(g,0);if(a.s8!==null){f=a.gS;h=Bu();g=Cw(g);i=new M;O(i);G(G(T(G(i,B(312)),f),B(313)),g);Br(h,N(i));}}if(e>=0){h=a.cc.data[e];g=a.jD;if(g!==null)g.nD(b,e,h);NR(h,1);}a.gS=e;}return d&&Hd(c)?1:0;}
function Ka(a,b,c,d){var e,f;e=Vf(a,b);if(e>=0){f=a.cc.data[e];if(!ME(f))f.l$.p();}return 1;}
function Vf(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cc.data;if(c>=d.length)return (-1);e=d[c].dn;if(Es(e,b))return c;if(a.fF){f=e.P;g=f.b;e=e.y;h=e.b;g=g+h|0;i=f.a;f=a.ge;f.b=(a.cf.y.b-(a.cS*2|0)|0)-h|0;f.a=e.a;if(Zx(b,g,i,f))break;}c=c+1|0;}return c;}
function S1(a){a.fF=1;}
function Tt(){C.call(this);this.tw=null;}
function AOJ(a,b){var c;c=a.tw;if(b.bh==32)TK(c.cK);return 0;}
function Tw(){C.call(this);this.r7=null;}
function AFg(a,b){var c,d,e,f;b=b;c=a.r7;Br(Bu(),B(314));if(!DJ(c.d8)){d=c.d8;b=b.h;e=NK(4);f=new Vz;f.yk=c;Gb(d,b,e,f);}return 1;}
function AEq(){var a=this;C.call(a);a.is=null;a.hK=0.0;}
function ES(a,b){var c=new AEq();AE8(c,a,b);return c;}
function AE8(a,b,c){a.is=b;a.hK=c;}
function ASm(a,b){if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){b=b;return a.hK===b.hK&&C6(a.is,b.is)?1:0;}return 0;}
var Tv=F();
function AJY(a){Br(Bu(),B(315));}
var Ts=F();
function AP6(a){Br(Bu(),B(316));}
function C$(){var a=this;C.call(a);a.dn=null;a.l$=null;a.jm=null;a.h6=null;a.jC=null;a.ki=null;}
function ACf(a,b,c){var d=new C$();K7(d,a,b,c);return d;}
function AUk(a,b,c,d,e){var f=new C$();ABP(f,a,b,c,d,e);return f;}
function K7(a,b,c,d){ABP(a,b,c,d,null,null);}
function ABP(a,b,c,d,e,f){var g;g=AL1();a.dn=g;a.ki=c;a.jm=d;a.jC=f;a.l$=b;BH(g.bU,d.k$);BH(a.dn.b3,d.hu);a.h6=e;}
function ME(a){return a.h6===null?0:1;}
function NR(a,b){BH(a.dn.b3,!b?a.jm.hu:a.jm.pw);}
function OL(){C.call(this);this.vE=null;}
function AG_(a,b){return b.hm&&b.bh==32?1:0;}
function OM(){C.call(this);this.qh=null;}
function AQm(a,b){var c,d,e,f,g,h;b=b;c=a.qh;if(!DJ(c.ha)){d=c.ha;b=b.h;e=S(C$,1);f=e.data;g=new C$;h=new VA;h.pk=c;K7(g,h,B(317),d.g$.bg);f[0]=g;Gb(d,b,FR(e),AW0);}return 1;}
var ACu=F();
function AAF(b){var c,d;c=CK(b,250,64);F1(c,B(255),25.0);Lu(c,187,187,187);Ch(c,B(318),0.0,24.0);Ch(c,B(318),0.25,56.0);d=CU(b);CM(d,c);FN(c);return d;}
function Zj(b){var c;c=new Wb;c.gz=b;return c;}
function ON(){C.call(this);this.tM=null;}
function ANn(a,b,c,d){return Le(a.tM,b,c,d);}
function AEb(){var a=this;C.call(a);a.lu=0;a.lw=0;}
function AP_(){var a=new AEb();AQZ(a);return a;}
function AQZ(a){var b,c;b=ADZ(EE((ACW())));c=EE((ACW()))^(-559038737);a.lu=b;a.lw=c;c=0;while(c<19){RZ(a);c=c+1|0;}}
function RZ(a){var b,c;b=a.lu;c=a.lw;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.lu=c;a.lw=b;return b;}
function ADZ(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function Ii(a,b){return 5.960464477539063E-8*(RZ(a)&16777215)*b|0;}
function Uh(){C.call(this);this.mt=null;}
function AM3(a,b,c){var d;d=a.mt;if(b===0.0)Kt(d,100);}
function Ui(){C.call(this);this.qb=null;}
function AFl(a,b){var c,d,e;c=a.qb;d=b.bh;if(d==32){c.jb=c.jb?0:1;e=1;}else if(d==13){Kt(c,1);e=1;}else if(d!=8)e=0;else{WX(c,1);e=1;}return e;}
var Nv=F(0);
function AEQ(b,c){var d;d=new Vx;d.vg=b;d.vh=c;return d;}
function ADz(){var a=this;C.call(a);a.fE=null;a.f0=0;a.iC=0;a.fZ=0;}
function AEo(a){var b=new ADz();AI9(b,a);return b;}
function AI9(a,b){a.fE=Cn();a.fZ=0;a.iC=2048;a.f0=b;}
function Hg(a,b,c){var d,e,f,g,h,i,j;d=c.qQ(b);e=a.iC;if(d>e){c=new Bq;f=new M;O(f);BB(T(G(T(G(f,B(319)),d),B(320)),e),41);Bn(c,N(f));J(c);}if(!a.f0){b=new BD;Bn(b,B(321));J(b);}a:{b=new B4;if(d){b:{c=a.fE;if(c.i>0){c=BU(c);g=d;while(true){if(!B5(c))break b;f=BY(c);if(f.bi>=g)break;}CE(b,f.bm,f.bz,g,a.f0);f.bm=f.bm+g;h=f.bi-g;f.bi=h;if(h===0.0)We(a.fE,f);break a;}}g=a.fZ;i=d;CE(b,0.0,g,i,a.f0);c=a.fE;f=new B4;h=a.fZ;g=a.iC-d|0;j=a.f0;f.bm=i;f.bz=h;f.bi=g;f.bA=j;BZ(c,f);a.fZ=a.fZ+a.f0|0;}}return b;}
function Ig(a,b){var c,d,e,f,g,h,i;a:{c=ARb(b);b=a.fE;if(b.i>0){d=BU(b);while(true){if(!B5(d))break a;e=BY(d);if(e.bz===c.bz){f=e.bm;g=e.bi;h=f+g;i=c.bm;if(h===i){c.bm=f;c.bi=c.bi+g;Q0(d);}else{h=c.bi;if(i+h===f){c.bi=h+g;Q0(d);}}}}}}BZ(a.fE,c);}
function Md(a){return BX(a.iC,a.fZ);}
function WG(){var a=this;C.call(a);a.q5=null;a.iG=null;}
function AG5(a,b,c){if(c)return AWZ;return Ff(a.iG.gK,b.h,a.q5,1);}
function AOu(a,b,c){return 1;}
function AIy(a,b){var c;c=a.iG;return Fq(c.gK,b.h,c.s1);}
function S5(){C.call(this);this.nO=null;}
function AHS(a,b,c,d){var e,f;b=a.nO;e=(I6(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.d2=Ba(Bc(0,b.d2+X(e,f)|0),PY(b));return 1;}
function Qb(){C.call(this);this.ux=null;}
function APe(a,b){var c,d,e;c=a.ux;if(b.ch&&b.bh==79){if(!b.bC){b=c.bj.bP;d=new Sx;d.uH=c;LX(b,d);}else{b=c.bj.bP;d=new Sw;d.w1=c;Wh(b,d);}e=1;}else e=0;return e;}
function RA(){C.call(this);this.wc=null;}
function AFO(a,b){var c,d,e,f;c=b.data;b=Bu();d=Cw(c[0]);e=new M;O(e);G(G(e,B(276)),d);Br(b,N(e));b=Bu();f=c[1];d=new M;O(d);G(G(d,B(322)),f);Br(b,N(d));}
function Rz(){C.call(this);this.x1=null;}
function AR2(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bu();e=Cw(c[0]);f=new M;O(f);G(G(f,B(276)),e);Br(d,N(f));g=FH(R_(b,1));b=Bu();d=Cw(c[1]);if(g===null)c=B(29);else{c=new M;O(c);B0(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)B0(c,B(44));BB(c,i[h]);h=h+1|0;}B0(c,B(45));c=N(c);}e=new M;O(e);G(G(G(G(e,B(323)),d),B(324)),c);Br(b,N(e));}
function Ry(){C.call(this);this.oo=null;}
function AIc(a,b){UL(a.oo,b);}
function Rx(){C.call(this);this.vX=null;}
function ANh(a,b){var c,d,e,f,g;c=b.data;d=Bu();e=Cw(c[0]);f=new M;O(f);G(G(f,B(276)),e);Br(d,N(f));g=D9(R_(b,1));b=Bu();d=Cw(c[1]);c=ACS(g);e=new M;O(e);G(G(G(G(e,B(325)),d),B(326)),c);Br(b,N(e));}
function Rv(){C.call(this);this.w3=null;}
function AMp(a,b){var c,d;c=Iz();b=Cw(b);d=new M;O(d);G(G(d,B(327)),b);Br(c,N(d));b=new Fi;V(b);J(b);}
function Ru(){C.call(this);this.p_=null;}
function AOs(a,b){var c,d,e,f;c=a.p_;d=c.bj.bP;e=new Og;e.ri=c;f=S(C,1);f.data[0]=b;CO(d,e,B(328),f);}
function T4(){C.call(this);this.kX=null;}
function AQo(a,b){var c,d,e,f,g,h;c=a.kX;d=c.ll;if(d!==null){e=c.dN.P;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.ll=g;}b=b.h;f=b.b;c=c.eR;d=c.y;f=f-d.b|0;h=b.a-d.a|0;Bh(c.P,f,h);return 1;}
function AMu(a,b,c){var d;if(!c){d=b.h;b=a.kX;if(!Es(b.dN,d))d=null;b.ll=d;}return AWZ;}
var CZ=F(0);
var AXh=null;var AWP=null;var AXi=null;var AWO=null;var AXk=null;var AXj=null;var AXm=null;var AXl=null;var AXo=null;var AXn=null;var AXp=null;function G9(){G9=Bl(CZ);AJs();}
function AJs(){AXh=C3(187);AWP=Q(B(329));AXi=C3(55);AWO=C3(43);AXk=CL(33,66,131);AXj=CL(60,63,65);AXm=Q(B(330));AXl=Q(B(331));AXo=Fu(85,85,85,128);AXn=Fu(43,43,43,0);AXp=Q(B(253));}
function Ur(){var a=this;C.call(a);a.pP=null;a.jc=null;}
function ANw(a,b,c){var d;if(!c){d=Ff(a.jc.hC,b.h,a.pP,1);if(d!==null)return d;}return AWZ;}
function AG7(a,b,c){return 1;}
function AF0(a,b){var c;c=a.jc;return Fq(c.hC,b.h,UR(c.bj.bP));}
function N4(){C.call(this);this.tQ=null;}
function AFS(a,b,c,d){var e,f;b=a.tQ;e=(I6(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eB=Ba(Bc(0,b.eB+X(e,f)|0),R4(b));return 1;}
function SI(){C.call(this);this.rK=null;}
function AQt(a,b){var c,d;a:{c=a.rK;switch(b.bh){case 67:MG(c);d=1;break a;case 86:Rr(c);d=1;break a;default:}d=0;}return d;}
var SH=F();
function AIz(a,b,c){return 0;}
function SF(){C.call(this);this.pm=null;}
function APU(a,b,c){var d,e;d=a.pm;c=d.dA+1|0;d.dA=c;d=H4(E(Iw));e=new M;O(e);G(G(T(e,c),B(332)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Wv(b,e);return 1;}
var SE=F();
function ANQ(a){return null;}
function SG(){C.call(this);this.m$=null;}
function AGX(a){var b,c;b=a.m$;c=new P3;c.rS=b;return c;}
function Sb(){C.call(this);this.xN=null;}
function AIG(a,b){return 0;}
function QC(){C.call(this);this.xK=null;}
function AJd(a,b){return b.hm&&b.bh==32?1:0;}
function QD(){C.call(this);this.qk=null;}
function AFm(a,b){var c,d,e,f,g,h;b=b;c=a.qk;if(!DJ(c.gE)){d=c.gE;b=b.h;e=S(C$,1);f=e.data;g=new C$;h=new RH;h.mz=c;K7(g,h,B(317),d.g$.bg);f[0]=g;Gb(d,b,FR(e),AW0);}return 1;}
function QE(){C.call(this);this.rM=null;}
function AOS(a,b,c,d){return Le(a.rM,b,c,d);}
function ABl(){var a=this;C.call(a);a.hH=null;a.kU=null;a.e_=null;a.yg=null;}
function AJG(a){var b=new ABl();AQs(b,a);return b;}
function AUE(a,b,c,d){var e=new ABl();ABS(e,a,b,c,d);return e;}
function AQs(a,b){ABS(a,null,null,b,null);}
function ABS(a,b,c,d,e){a.hH=b;a.kU=c;a.e_=d;a.yg=e;}
function AQ2(a,b){var c;if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){c=b;return C6(a.hH,c.hH)&&C6(a.kU,c.kU)&&C6(a.e_,c.e_)?1:0;}return 0;}
var CW=F(0);
var AWe=null;var AXE=null;var AWg=null;var AWf=null;var AWi=null;var AWh=null;var AWk=null;var AWj=null;var AWm=null;var AWl=null;var AWn=null;function AM9(){AM9=Bl(CW);AMa();}
function AMa(){AWe=C3(206);AXE=Q(B(333));AWg=Q(B(334));AWf=Q(B(111));AWi=Q(B(335));AWh=Q(B(336));AWk=Q(B(337));AWj=Q(B(338));AWm=Fu(107,106,107,128);AWl=Fu(30,31,34,0);AWn=Q(B(113));}
function Ca(){Cj.call(this);this.ko=null;}
var AXF=null;var AXG=null;var AXH=null;var AXI=null;var AXJ=null;var AXK=null;var AXL=null;var AXM=null;var AXN=null;var AXO=null;var AXP=null;var AXQ=null;var AXR=null;var AXS=null;var AXT=null;var AWo=null;function ABI(){ABI=Bl(Ca);AGI();}
function Dx(a,b,c){var d=new Ca();Xu(d,a,b,c);return d;}
function AS9(a,b,c,d){var e=new Ca();QI(e,a,b,c,d);return e;}
function Xu(a,b,c,d){ABI();C_(a,b,c);a.ko=Il(d,null);}
function QI(a,b,c,d,e){ABI();C_(a,b,c);a.ko=Il(d,e);}
function AGI(){var b,c;b=new Ca;AM9();Xu(b,B(339),0,AXE);AXF=b;AXG=Dx(B(340),1,Q(B(341)));AXH=Dx(B(342),2,Q(B(343)));AXI=Dx(B(48),3,Q(B(344)));AXJ=Dx(B(345),4,AXE);AXK=Dx(B(346),5,Q(B(347)));AXL=Dx(B(348),6,Q(B(349)));AXM=Dx(B(49),7,Q(B(350)));AXN=Dx(B(351),8,Q(B(352)));c=new Ca;G9();QI(c,B(353),9,AWP,Q(B(337)));AXO=c;AXP=AS9(B(354),10,AWP,Q(B(114)));AXQ=Dx(B(355),11,Q(B(356)));AXR=Dx(B(357),12,Q(B(358)));AXS=Dx(B(359),13,AXE);b=Dx(B(360),14,Q(B(361)));AXT=b;AWo=H(Ca,[AXF,AXG,AXH,AXI,AXJ,AXK,AXL,AXM,AXN,AXO,
AXP,AXQ,AXR,AXS,b]);}
function IH(){var a=this;C.call(a);a.np=null;a.nl=null;}
function Il(a,b){var c=new IH();ALE(c,a,b);return c;}
function ALE(a,b,c){a.np=b;a.nl=c;}
function Hz(){var a=this;C.call(a);a.vp=null;a.pl=null;a.uK=null;a.rI=null;a.p2=null;a.i0=null;}
function AXU(a,b,c,d,e,f){var g=new Hz();JV(g,a,b,c,d,e,f);return g;}
function JV(a,b,c,d,e,f,g){a.vp=b;a.pl=c;a.uK=d;a.rI=e;a.p2=f;a.i0=g;}
function AC_(){var a=this;C.call(a);a.j2=null;a.qX=null;a.p1=null;}
function Zt(a,b,c){var d=new AC_();AOx(d,a,b,c);return d;}
function AOx(a,b,c,d){a.j2=b;a.qX=c;a.p1=d;}
function Gv(){var a=this;C.call(a);a.k$=null;a.hu=null;a.pw=null;}
function AXV(a,b,c){var d=new Gv();Hl(d,a,b,c);return d;}
function Hl(a,b,c,d){a.k$=b;a.hu=c;a.pw=d;}
function ABU(){var b,c;b=new Gv;c=Q(B(362));X7();Hl(b,c,AXr,AXs);return b;}
function AAT(){var b,c;b=new Gv;c=Q(B(116));AJ5();Hl(b,c,AXW,AXX);return b;}
function Zb(){var b,c;b=new Gv;AB0();c=AXY;AOW();Hl(b,c,AXZ,AX0);return b;}
function AEW(){var a=this;C.call(a);a.l3=null;a.rf=0;}
function ZM(a,b){var c=new AEW();ARJ(c,a,b);return c;}
function ARJ(a,b,c){var d;d=new B4;a.l3=d;a.rf=b;d.bA=c;}
function Rp(a,b){return B_(a.rf,b);}
var DS=F(0);
var AWs=null;var AWt=null;var AWp=null;var AWq=null;var AWr=null;var AXW=null;var AXX=null;var AWu=null;var AWv=null;function AJ5(){AJ5=Bl(DS);ANi();}
function ANi(){AWs=Q(B(336));AWt=Q(B(363));AWp=Q(B(116));AWq=Q(B(349));AWr=Q(B(333));AXW=Q(B(336));AXX=Q(B(364));AWu=Q(B(365));AWv=CL(43,45,48);}
var OU=F(0);
var Pb=F();
function AJj(a,b,c){var d,e;d=b;e=c;b=new M;O(b);T(G(T(G(b,B(366)),d),B(367)),e);CF(N(b));return d+e|0;}
var OV=F(0);
var O_=F();
function AKw(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fk(G(Fk(G(b,B(368)),d),B(367)),e);CF(N(b));return d+e;}
var ZT=F();
var YV=F(0);
function Jq(){var a=this;C.call(a);a.d0=null;a.eQ=null;a.fp=null;}
var AVT=0;function ACM(a){var b;b=a.eQ;if(b!==null){AVT=AVT-1|0;a.d0.dp.deleteTexture(b);a.eQ=null;}}
function Ce(a){return a.fp.b;}
function C8(a){return a.fp.a;}
function TV(a,b,c,d){var e;e=a.fp;e.b=b;e.a=c;L3(a);a.d0.dp.texStorage2D(3553,1,d,b,c);e=a.d0.dp;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function L3(a){var b,c;b=a.d0.dp;c=a.eQ;b.bindTexture(3553,c);}
function CM(a,b){Nl(a,b.lx,b.kH,32856);PS(a,b,0,0);}
function Nl(a,b,c,d){var e,f,g,h;a:{e=a.fp;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){L3(a);break a;}e=a.d0.dp;h=a.eQ;e.deleteTexture(h);a.eQ=a.d0.dp.createTexture();TV(a,b,c,d);break a;}}TV(a,b,c,d);}}
function HY(a,b,c,d){L3(a);PS(a,b,c,d);}
function PS(a,b,c,d){var e;e=a.d0.dp;b=b.jv;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function TZ(){C.call(this);this.j1=null;}
var AXD=null;function PZ(){var a=new TZ();AA_(a);return a;}
function AA_(a){a.j1=Cn();}
function D6(a,b,c,d){PE(a,ACf(d,b,c));}
function D7(b,c,d){return ACf(d,b,c);}
function GH(a,b,c,d){JB(a,b,c,d,null);}
function JB(a,b,c,d,e){PE(a,AUk(null,b,c,d,e));}
function PE(a,b){BZ(a.j1,b);}
function Hn(a){return FR(HH(a.j1,AXD));}
function YN(){AXD=S(C$,0);}
var DR=F(0);
var AXz=null;var AXA=null;var AXw=null;var AXx=null;var AXy=null;var AXr=null;var AXs=null;var AXB=null;var AXC=null;function X7(){X7=Bl(DR);APQ();}
function APQ(){AXz=Q(B(369));AXA=Q(B(370));AXw=Q(B(362));AXx=Q(B(371));AXy=Q(B(329));AXr=Q(B(369));AXs=Q(B(370));AXB=Fu(118,121,122,128);AXC=CL(63,66,68);}
var Gm=F(0);
var Xm=F();
function AO8(a,b,c,d){var e;b=Bu();d=Cw(d);e=new M;O(e);G(G(T(G(e,B(372)),c),B(313)),d);Br(b,N(e));}
var Xn=F();
function Wb(){C.call(this);this.gz=null;}
function AFr(a,b){return Kv(a.gz,b);}
function AO$(a,b,c,d){return Jn(a.gz,b,c,d);}
function AM7(a,b,c){return Ji(a.gz,b,c);}
function AKF(a,b,c){return DJ(a.gz);}
function Yp(){C.call(this);this.rG=null;}
function AOv(a,b){var c;c=a.rG.iG;c.d2=FK(b,PY(c));}
var ABX=F();
function PJ(){C.call(this);this.m5=null;}
function AKN(a,b){var c;c=a.m5.jc;c.eB=FK(b,R4(c));}
function RJ(){C.call(this);this.mj=null;}
function AFv(a,b){return DC(a.mj,null);}
var Z8=F();
function Ci(){Cj.call(this);this.la=null;}
var AX1=null;var AX2=null;var AX3=null;var AX4=null;var AX5=null;var AX6=null;var AX7=null;var AX8=null;var AX9=null;var AX$=null;var AX_=null;var AYa=null;var AYb=null;var AYc=null;var AYd=null;var AXq=null;function ACa(){ACa=Bl(Ci);ARE();}
function DK(a,b,c){var d=new Ci();X5(d,a,b,c);return d;}
function AQD(a,b,c,d){var e=new Ci();ABR(e,a,b,c,d);return e;}
function X5(a,b,c,d){ACa();C_(a,b,c);a.la=Il(d,null);}
function ABR(a,b,c,d,e){ACa();C_(a,b,c);a.la=Il(d,e);}
function ARE(){var b;b=new Ci;G9();X5(b,B(339),0,AWP);AX1=b;AX2=DK(B(340),1,Q(B(373)));AX3=DK(B(342),2,Q(B(374)));AX4=DK(B(48),3,Q(B(375)));AX5=DK(B(345),4,Q(B(373)));AX6=DK(B(346),5,CL(188,63,60));AX7=DK(B(348),6,Q(B(376)));AX8=DK(B(49),7,Q(B(377)));AX9=DK(B(351),8,Q(B(378)));AX$=AQD(B(353),9,AWP,CL(52,65,52));AX_=AQD(B(354),10,Q(B(379)),Q(B(380)));AYa=DK(B(355),11,Q(B(381)));AYb=DK(B(357),12,Q(B(382)));AYc=DK(B(359),13,AWP);b=DK(B(360),14,Q(B(361)));AYd=b;AXq=H(Ci,[AX1,AX2,AX3,AX4,AX5,AX6,AX7,AX8,AX9,AX$,
AX_,AYa,AYb,AYc,b]);}
var AEg=F();
function Iu(b,c){var d,e,f;if(c<=0)return B(31);d=BN(c);e=d.data;e[0]=AC5(Ii(b,52));f=1;while(f<c){e[f]=AC5(Ii(b,62));f=f+1|0;}return FU(d);}
function AC5(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AAU=F();
function AEI(){var a=this;C.call(a);a.Ev=null;a.B8=null;a.Dh=0;a.CN=0;}
var AD5=F(0);
function ADM(b){var c;a:{switch(b){case 0:break;case 1:c=B(164);break a;case 2:c=B(217);break a;case 3:c=B(216);break a;default:c=null;break a;}c=B(186);}return c;}
var CR=F();
var ACm=F(CR);
var AC4=F(CR);
var ZY=F(CR);
var AAh=F(CR);
var ADA=F(CR);
function Uw(){C.call(this);this.tr=null;}
function AL6(a){var b;b=a.tr;Br(Bu(),b);}
function H2(){var a=this;C.call(a);a.fO=0;a.k1=null;}
var AAE=F();
function V9(){C.call(this);this.jl=null;}
function APx(a,b){var c,d,e,f,g;c=a.jl;d=c.jS;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.ih;e.b=Ev(0,e.b+f|0,c.gv.b-c.hs.b|0);c=a.jl;d=c.ih;d.a=Ev(0,d.a+g|0,c.gv.a-c.hs.a|0);}a.jl.jS=b.h;return 1;}
var AAQ=F();
var IJ=F(Bq);
function OP(){C.call(this);this.rZ=null;}
function AGh(a,b){HE(a.rZ,b);}
function Wg(){C.call(this);this.iK=null;}
function ARR(a){return a.iK;}
function AEO(){var a=this;C.call(a);a.bp=null;a.S=null;a.O=null;a.eg=null;}
function AB3(a){var b=new AEO();ARP(b,a);return b;}
function ARP(a,b){var c;a.O=ASS();a.bp=b;c=new TM;Lz(c);c.lr=new B4;c.gO=b;a.S=c;}
function IF(a,b,c,d){var e,f,g,h;e=a.S;f=C6(e.gw,c)?0:1;g=C6(e.gT,b)?0:1;h=d===e.iS?0:1;if(f){e.gw=c;e.dY=null;XZ(e,0);}e.gC=!f&&!g&&!h?0:1;e.gT=b;e.iS=d;e.hz=0;J3(a);}
function JX(a){var b;b=a.S;b.db=CG(b.db,null);a.O=CG(a.O,null);}
function LS(a,b){var c,d,e;c=a.O;d=c.E;e=c.q;b=CG(c,b);a.O=b;b.iX(d,e,a.bp.bN);}
function Fn(a,b,c){var d;d=a.O;d.iX(b,c,d.dZ);J3(a);}
function J3(a){var b,c,d,e;b=a.S;c=a.O.q.b;b.q.b=c;d=b.db;if(d!==null&&c!=Ce(d)&&!(c>=b.hz&&Ce(b.db)>=b.hz))b.gC=1;b=a.S;b.dZ=a.bp.bN;if(T_(b))c=0;else{b=a.S;Rb(b);e=CB(b.gO,b.iS);XZ(b,E2(b.dY)+(e*2|0)|0);c=b.q.a;}b=a.S.E;d=a.O.E;Bh(b,d.b,d.a-c|0);}
function JH(b,c){if(b<0)c=B(383);else if(b>0)c=B(384);return c;}
function Ol(a,b,c){var d;d=a.S.E.b;return (d-c|0)<=b&&b<d?1:0;}
function T1(a,b,c){var d,e;d=a.S;e=d.E.b+d.q.b|0;return e<=b&&b<(e+c|0)?1:0;}
function PA(a,b,c){var d;d=a.S.E.a;return (d-c|0)<=b&&b<d?1:0;}
function Qj(a,b,c){var d,e;d=a.O;e=d.E.a+d.q.a|0;return e<=b&&b<(e+c|0)?1:0;}
function M3(a,b,c){var d,e,f;d=a.S.E.a-c|0;e=a.O;f=(e.E.a+e.q.a|0)+c|0;return d<=b&&b<f?1:0;}
function R6(a,b,c){var d,e;d=a.S.E.a+c|0;e=a.O;return AC8(b,d,(e.E.a+e.q.a|0)-c|0);}
function VU(a,b,c){var d,e,f;d=a.S;e=d.E.b;f=e-c|0;e=(e+d.q.b|0)+c|0;return f<=b&&b<e?1:0;}
function U6(a,b,c){var d,e;d=a.S;e=d.E.b;return AC8(b,e+c|0,(e+d.q.b|0)-c|0);}
function AC8(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BE(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H8(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bm;f=new Bm;g=b.b;h=b.a;b=a.O;i=b.E;j=i.b;k=i.a;b=b.q;l=b.b;m=b.a;b=new XO;b.n8=a;b.n7=e;b.n5=f;b.n4=c;b.oa=g;b.n_=j;b.n$=l;b.n9=d;b.oc=h;b.ob=k;b.se=m;return b;}
var ACj=F(0);
var LE=F(0);
function RB(){C.call(this);this.oV=null;}
function AML(a,b){return Q1(a.oV,b);}
var Qz=F();
function AQ5(a,b){ACM(b);}
var Zp=F();
function B_(b,c){return Df(b*c);}
var YB=F();
function ADK(b,c,d,e,f,g){g.b=c.b;g.a=f;Bz(b,d.b,d.a,g,e);Bz(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bz(b,d.b,d.a+f|0,g,e);Bz(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AC1(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bz(b,j,k,i,h);Bz(b,j,k,i,h);Bz(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bz(b,l,j,i,h);Bz(b,l,j,i,h);Bz(b,l+g|0,j+g|0,i,h);}
function No(){var a=this;C.call(a);a.b1=null;a.iW=null;a.ey=null;a.dK=0;a.bE=0;a.gg=null;a.fH=null;a.fK=0;}
function Tf(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dK;i=X(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bc(i,e))a:{while(true){if(d<=e){j=d;break a;}Ew(c);j=d+(-1)|0;b=C5(d);d=X(j,a.bE)%a.ey.a|0;F7(a,c,b,a.fK,g);HY(a.b1,c,0,d);if(!(j%a.dK|0))break;d=j;}}else{Ew(b);k=a.dK-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;F7(a,b,C5(j),X(a.bE,k)+a.fK|0,g);k=k+(-1)|0;j=h;}CM(a.b1,b);j=Bc(i,e);}return j;}k=a.dK;h=X(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Ba(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Ew(c);b=C5((d+f|0)+1|0);j=d+1|0;d
=X(d,a.bE)%a.ey.a|0;F7(a,c,b,a.fK,g);HY(a.b1,c,0,d);if(!(j%a.dK|0))break;d=j;}}else{Ew(b);d=0;while(d<a.dK){h=h+1|0;F7(a,b,C5((h>e?h-f|0:h)+f|0),X(a.bE,d)+a.fK|0,g);d=d+1|0;}CM(a.b1,b);j=Ba(i,e);}return j;}
function ZB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;a:{i=a.ey.a;j=((a.iW.a-(d%e|0)|0)+e|0)%e|0;k=f.iw;l=j+i|0;m=BE(l,c);if(m<=0){Bh(a.gg,Ce(a.b1),a.bE);m=0;while(true){c=a.bE;if(m>=(i/c|0))break;CE(a.fH,0.0,X(m,c),Ce(a.b1),a.bE);n=S6(f,g,m,k);I3(a,h,j+X(m,a.bE)|0,b,k.ig,n);m=m+1|0;}}else{b:{if(m>0&&j<c){o=Bc(c-j|0,0);Bh(a.gg,Ce(a.b1),a.bE);m=0;while(true){i=a.bE;if(m>(o/i|0))break b;CE(a.fH,0.0,X(m,i),Ce(a.b1),a.bE);n=S6(f,g,m,k);I3(a,h,j+X(m,a.bE)|0,b,k.ig,n);m=m+1|0;}}}if(l>e){c=Ba(l%e|0,c);Bh(a.gg,Ce(a.b1),
a.bE);p=d%C8(a.b1)|0;d=a.bE;l=p%d|0;m=p/d|0;d=p+c|0;while(true){c=a.bE;if(m>=(d/c|0))break a;CE(a.fH,0.0,X(m,c),Ce(a.b1),a.bE);q=S6(f,g,m,k);c=a.bE;I3(a,h,X(m-(p/c|0)|0,c)-l|0,b,k.ig,q);m=m+1|0;}}}}}
function S6(b,c,d,e){c=c.data;return d<c.length&&c[d]?JT(b.dO,b,c[d]):e.k8;}
function I3(a,b,c,d,e,f){EI(b,a.iW.b+d.b|0,c+d.a|0,a.gg,a.fH,a.b1,e,f,0.0);}
function F7(a,b,c,d,e){Ch(b,c,a.ey.b-20.0*e,d);}
function S7(){C.call(this);this.uZ=null;}
function AHE(a,b){var c,d,e;c=a.uZ;if(c.e.f.cu==c.kO){b=b.data;d=D9(b[0]);e=FH(b[1]);ABG(c.e.f,d,e);Pu(c.e.f);}}
var YS=F();
function F6(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Zx(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function ADO(){var a=this;C.call(a);a.bs=0;a.bF=0;}
function EU(a,b){var c=new ADO();ALs(c,a,b);return c;}
function ALs(a,b,c){a.bs=b;a.bF=c;}
function AFC(a,b){var c;if(a===b)return 1;if(b!==null&&Co(a)===Co(b)){c=b;return a.bs==c.bs&&a.bF==c.bF?1:0;}return 0;}
function AOR(a){var b,c,d,e,f,g,h;b=S(C,2).data;b[0]=FZ(a.bs);b[1]=FZ(a.bF);c=(-1515898884);d=0;while(d<b.length){e=b[d];if(e===null)f=0;else{g=e.fs;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;c=Kc(h,4)^((h>>>7|0)|h<<25)^Kc(c,13);d=d+1|0;}return c;}
function AOn(a,b){var c;b=b;c=BE(a.bs,b.bs);if(!c)c=BE(a.bF,b.bF);return c;}
function Tz(){C.call(this);this.uz=null;}
function AHK(a,b){var c;c=a.uz;TC(c,EV(c,b.h));KL(c.r,c.v,c.x);GQ(c);}
var SC=F(0);
var AWZ=null;function ACJ(){AWZ=new Qq;}
var FL=F(Ir);
var Xl=F(EH);
function Qn(){C.call(this);this.mA=null;}
function ANM(a,b){var c,d;c=a.mA;d=c.dA+1|0;c.dA=d;c=new M;O(c);G(G(T(c,d),B(385)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Up(){C.call(this);this.pQ=null;}
function AQj(a){var b,c;b=a.pQ;c=new M;O(c);G(G(G(c,B(386)),b),B(387));$rt_globals.console.info($rt_ustr(N(c)));}
var Mb=F(DV);
var AYe=0.0;var AYf=null;function ACL(){AYe=$rt_globals.NaN;AYf=E($rt_floatcls());}
var Fz=F();
var AVr=null;var AVt=null;var AVu=null;var AVs=null;var AVq=null;function ABr(){AVr=E6([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AVt=AG2([Bd(1),Bd(10),Bd(100),Bd(1000),Bd(10000),Bd(100000),Bd(1000000),Bd(10000000),Bd(100000000),Bd(1000000000),Cc(1410065408, 2),Cc(1215752192, 23),Cc(3567587328, 232),Cc(1316134912, 2328),Cc(276447232, 23283),Cc(2764472320, 232830),Cc(1874919424, 2328306),Cc(1569325056, 23283064),Cc(2808348672, 232830643)]);AVu=AG2([Bd(1),Bd(10),Bd(100),Bd(10000),Bd(100000000),
Cc(1874919424, 2328306)]);AVs=new Un;AVq=new VH;}
var J7=F();
var AYg=null;var AYh=null;function ACd(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.nv=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.km=0;c.j9=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Fb(CV(Bd(e),Bd(8388608)),Eo)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=ACl(AYh,f);if(h<0)h=( -h|0)-2|0;i=AYh.data;j=9+(f-i[h]|0)|0;k=Bd(e);l=AYg.data;m=EE(D8(BQ(k,Bd(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=EE(D8(BQ(k,Bd(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BE(q,r);e=e>0?X(m/q|0,q):e<0?X(m/r|0,r)+r|0:X((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.km=e;c.j9=h-50|0;}
function AAz(){var b,c,d,e,f,g,h,i;AYg=BC(100);AYh=BC(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AYg.data;g=d+50|0;f[g]=$rt_udiv(e,20);AYh.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:EE(Cr(Bd(h),Gn(BQ(Bd(b&((1<<i)-1|0)),Bd(10)),i)));f=AYg.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AYh.data[i]=c;d=d+1|0;}}
function VH(){var a=this;C.call(a);a.km=0;a.j9=0;a.nv=0;}
function L6(){var a=this;C.call(a);a.wm=null;a.mn=0.0;a.wI=0.0;a.eT=null;a.gL=null;a.lA=null;a.e4=0;}
function AD6(a,b){var c;if(b!==null){a.gL=b;return a;}c=new BD;Bn(c,B(388));J(c);}
function ACr(a,b){var c;if(b!==null){a.lA=b;return a;}c=new BD;Bn(c,B(388));J(c);}
function P6(a,b,c,d){var e,f,g,$$je;e=a.e4;if(!(e==2&&!d)&&e!=3){a.e4=d?2:1;while(true){try{f=AD9(a,b,c);}catch($$e){$$je=Ei($$e);if($$je instanceof Bq){g=$$je;J(AHV(g));}else{throw $$e;}}if(G5(f))return f;if(Id(f)){if(d&&DN(b)){g=a.gL;G8();if(g===AV2)return D1(B6(b));if(B6(c)<=I(a.eT))return AV5;EF(b,b.V+B6(b)|0);if(a.gL===AV3)J8(c,a.eT);}return f;}if(QH(f)){g=a.gL;G8();if(g===AV2)return f;if(g===AV3){if(B6(c)<I(a.eT))return AV5;J8(c,a.eT);}EF(b,b.V+Kb(f)|0);}else if(L4(f)){g=a.lA;G8();if(g===AV2)break;if(g
===AV3){if(B6(c)<I(a.eT))return AV5;J8(c,a.eT);}EF(b,b.V+Kb(f)|0);}}return f;}b=new D0;V(b);J(b);}
function ZG(a,b){var c,d,e,f;c=a.e4;if(c&&c!=3){b=new D0;V(b);J(b);}if(!B6(b))return AEx(0);if(a.e4)a.e4=0;d=AEx(Bc(8,B6(b)*a.mn|0));while(true){e=P6(a,b,d,0);if(Id(e))break;if(G5(e))d=SU(a,d);if(!KM(e))continue;VD(e);}b=P6(a,b,d,1);if(KM(b))VD(b);while(true){f=a.e4;if(f!=3&&f!=2)break;a.e4=3;if(Id(AV6)){d.dr=d.V;d.V=0;d.he=(-1);return d;}d=SU(a,d);}b=new D0;V(b);J(b);}
function SU(a,b){var c,d,e;c=b.g6;d=NJ(c,Bc(8,c.data.length*2|0));e=ABC(d,0,d.data.length);EF(e,b.V);return e;}
var AA$=F(CR);
function QN(){C.call(this);this.ni=null;}
function AJM(a,b){Dt(a.ni,b);}
function V0(){C.call(this);this.oA=null;}
function AR4(a,b){var c,d;c=a.oA;d=c.dA+1|0;c.dA=d;c=b.hj;b=new M;O(b);G(G(T(b,d),B(389)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Qq=F();
function AMS(a,b){}
function EK(){var a=this;C.call(a);a.E=null;a.q=null;a.dZ=0.0;}
function ASS(){var a=new EK();Lz(a);return a;}
function Lz(a){a.E=new Bm;a.q=new Bm;}
function ANl(a){}
function AQ8(a){return BX(0,0);}
function P1(a,b,c,d){var e;if(!La(a.E,b)){a.j7(b);Cz(a.E,b);}if(!La(a.q,c)){a.jX(c);Cz(a.q,c);}e=a.dZ;if(e!==d){a.dZ=d;a.px(e,d);}}
function DH(a,b){return F6(b,a.E,a.q);}
function ZH(a,b){var c,d,e,f;c=a.E;d=c.b;e=c.a;f=a.q;X7();Bz(b,d,e,f,AXr);}
function V1(a,b){var c;c=a.E;LD(b,c.b,c.a,a.q);}
function AQf(a,b){return 0;}
function AID(a,b){}
function APZ(a,b){}
function AR$(a,b,c){}
function AQw(a,b,c,d){return 0;}
function APO(a,b,c){return null;}
function AQV(a,b,c){return 0;}
function AMG(a,b){return 0;}
function AIv(a,b,c,d){return 0;}
function GB(){var a=this;EK.call(a);a.cF=null;a.bu=null;a.e2=null;}
function AYi(){var a=new GB();T3(a);return a;}
function T3(a){Lz(a);a.cF=new Bm;a.bu=new Bm;}
function AFp(a,b){a.e2=b;}
function AEy(a){var b;b=a.bu;b.b=L0(a,b.b);b=a.bu;b.a=Kn(a,b.a);}
function Vk(a,b){a.bu.b=L0(a,b);}
function Rs(a,b){a.bu.a=Kn(a,b);}
function ACA(a,b,c){a.bu.b=L0(a,b);a.bu.a=Kn(a,c);}
function Kn(a,b){return Bc(0,Ba(b,a.cF.a-a.q.a|0));}
function L0(a,b){return Bc(0,Ba(b,a.cF.b-a.q.b|0));}
function Q_(){var a=this;GB.call(a);a.cw=null;a.du=null;a.fG=null;a.qt=null;a.dD=null;a.b0=null;a.dS=null;a.e7=null;a.c$=0;a.eD=0;a.mi=null;a.dM=0;a.dP=0;a.fT=0;a.e1=0;a.fr=0;a.cA=0;a.dT=null;a.iE=null;a.nw=null;a.gy=null;}
function AUw(a,b){var c=new Q_();AAH(c,a,b);return c;}
function AAH(a,b,c){T3(a);a.du=ALx();a.fG=new Bm;a.b0=AYj;a.dS=S(HZ,0);a.dM=0;a.dP=0;a.fT=0;a.e1=0;a.fr=0;a.dT=AEo(0);a.gy=Gx();a.cw=b;a.iE=c;a.mi=c;Tu(a);}
function Tu(a){a.c$=B_(2.0,a.cw.bN);}
function Wx(a){return a.b0.data.length?0:1;}
function Wa(a,b){OX(a);a.b0=b;}
function OX(a){Bh(a.fG,0,0);}
function X4(a,b,c){a.nw=b;a.qt=c;a.dD=null;a.dT=null;a.eD=0;OX(a);}
function ASo(a){var b,c;a.e7=CG(a.e7,null);Bh(a.fG,0,0);b=a.gy;if(b.dt>0){b.dt=0;c=b.b7;ZF(c,0,c.data.length,null);b.c5=b.c5+1|0;}a.dT=null;a.b0=AYj;a.dS=null;a.dM=0;a.dP=0;a.fT=0;Te(a.du);a.iE=null;}
function AHD(a,b,c){TD(a);Tu(a);a.dD=null;a.dT=null;a.eD=0;}
function AKo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=IK(a.cw);if(Wx(a))return;Lw(a);Cx(c,a.dD);d=D$(a);e=AEQ(c,a.eD);f=Ba(IE(a.q.a,d),a.b0.data.length)+30|0;g=a.nw.nn;h=a.dS.data;i=h.length;if(i<f){a:{j=a.e1;k=a.fr;l=a.b0;m=a.dT;n=a.gy;o=S(HZ,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gl!==q){Vs(m,t,n);p[r]=LF(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=LF(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=LF(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){Vs(m,q,n);h[j]=null;}j=j+1|0;}a.dS=o;Cz(a.fG,Md(a.dT));TX(a,a.cw.cW);}a.e1=Ba((a.bu.a+a.c$|0)/(D$(a)+a.c$|0)|0,a.b0.data.length-1|0);a.fr=Ba((((a.bu.a+a.du.y.a|0)-1|0)+a.c$|0)/(D$(a)+a.c$|0)|0,a.b0.data.length-1|0);if(!a.dS.data.length)return;YM(a,e);V1(a,b);t=g.rI;m=a.E;Bz(b,m.b,m.a,a.q,t);m=a.du.P;u=m.b;v=m.a;w=CB(a.cw,2.0);m=a.cw.dU;x=a.e1;j=u+w|0;while(x<=a.fr){n=Nm(a,x);k=X(x,D$(a));i=x+
1|0;y=k+X(i,a.c$)|0;k=j+a.dM|0;r=k+a.dP|0;z=a.cA!=x?0:1;ba=!z?t:g.p2;q=!z?g.vp:g.i0;bb=!z?g.pl:g.i0;bc=!z?g.uK:g.i0;bd=(v+y|0)-a.bu.a|0;EI(b,j,bd,n.gH,n.rt,a.e7,q,ba,0.0);EI(b,k,bd,n.hb,n.hU,a.e7,bb,ba,0.0);EI(b,r,bd,n.hg,n.iu,a.e7,bc,ba,0.0);k=n.gH.b;s=j+k|0;Bh(m,Bc(0,a.dM-k|0),n.gH.a);Bz(b,s,bd,m,ba);k=j+a.dM|0;s=n.hb.b;be=k+s|0;Bh(m,Bc(0,a.dP-s|0),n.hb.a);Bz(b,be,bd,m,ba);k=n.hg.b;bf=r+k|0;Bh(m,Bc(0,(((a.du.y.b-k|0)-a.dP|0)-a.dM|0)-w|0),n.hg.a);Bz(b,bf,bd,m,ba);bg=(u+a.q.b|0)-w|0;Bh(m,w,D$(a)+a.c$|0);Bz(b,
bg,bd,m,t);x=i;}IB(b);}
function YM(a,b){var c,d,e,f,g,h;c=0;d=a.e1;while(d<=a.fr){e=Nm(a,d);if(!(e!==null&&e.gl===a.b0.data[d])){f=a.dS.data;g=a.b0;e=a.dT;h=a.gy;c=d%f.length|0;if(f[c]!==null)Vs(e,f[c],h);f[c]=LF(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cz(a.fG,Md(a.dT));TX(a,a.cw.cW);}}
function TX(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fG;c=CK(b,c.b+150|0,c.a);Cx(c,a.dD);d=a.dD;e=d.dv;f=e-(e+d.ek)/16.0;g=a.dS.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gl.ii;k=d.hU;Ch(c,j,k.bm+a.eD,f+k.bz);j=d.gl.iy;d=d.iu;Ch(c,j,d.bm+a.eD,f+d.bz);}i=i+1|0;}a:{d=a.gy;if(d.dt>0){h=d.c5;i=0;b:while(true){g=d.b7.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.dw;l=j.dz;k=k;l=l.h9;Ch(c,k,l.bm+a.eD,f+l.bz);j=j.cP;if(h!=d.c5)break b;}i=i+1|0;}b=new IJ;V(b);J(b);}}b=CG(a.e7,CU(b));a.e7=b;CM(b,c);FN(c);}
function Nm(a,b){var c;c=a.dS.data;return c[b%c.length|0];}
function ALA(a,b){Cz(a.du.y,b);}
function AId(a,b){Cz(a.du.P,b);}
function Z0(a){var b,c;Lw(a);b=D$(a);c=a.b0.data.length;b=X(b,c)+X(a.c$,c+1|0)|0;Bh(a.cF,a.q.b,b);}
function TD(a){var b,c,d,e,f,g,h,i,j;b=IK(a.cw);if(Wx(a))return;Lw(a);Cx(b,a.dD);c=AEQ(b,a.eD);d=a.b0.data;e=d.length;f=0;while(f<e){g=d[f];h=JQ(c,g.gt);i=JQ(c,g.ii);j=JQ(c,g.iy);a.dM=Bc(a.dM,h);a.dP=Bc(a.dP,i);a.fT=Bc(a.fT,j);f=f+1|0;}}
function ARg(a,b){var c;c=N0(a,b.h);if(c>=0)a.cA=c;return Es(a.du,a.E)&&Hd(a.cw.cC)?1:0;}
function AFI(a,b,c){if(!Es(a.du,b.h)&&!L8(a.du)){b=a.mi;if(b!==null)b.p();}return null;}
function AFX(a,b,c,d){var e;if(d==1){e=N0(a,b.h);if(e>=0)NL(a,a.b0.data[e]);}return 1;}
function NL(a,b){a.iE.p();b.mm.p();}
function N0(a,b){var c,d,e;if(!a.dS.data.length)return (-1);c=D$(a);d=(b.a-a.E.a|0)+a.bu.a|0;e=a.c$;e=(d+e|0)/(c+e|0)|0;if(e<a.b0.data.length)return e;return (-1);}
function D$(a){return E2(a.dD);}
function Lw(a){var b;if(a.dD===null){b=GN(a.cw,a.qt);a.dD=b;a.dT=AEo(E2(b));a.eD=Df(a.dD.lM);}}
function AK8(a,b){var c,d,e;a:{switch(b.bh){case 13:NL(a,a.b0.data[a.cA]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cA=a.e1;b=a.e2;c=a.bu;HU(b,c.b,c.a-(a.q.a/2|0)|0);return 0;case 34:a.cA=a.fr;b=a.e2;c=a.bu;HU(b,c.b,c.a+(a.q.a/2|0)|0);return 0;case 35:case 39:a.cA=a.b0.data.length-1|0;break a;case 36:case 37:a.cA=0;break a;case 38:d=a.cA;e=a.b0.data.length;a.cA=((d+e
|0)-1|0)%e|0;break a;case 40:a.cA=(a.cA+1|0)%a.b0.data.length|0;break a;default:break a;}a.iE.p();return 0;}e=a.cA;if(e<=a.e1)HU(a.e2,a.bu.b,X(e,D$(a))+X(a.cA,a.c$)|0);else if(e>=a.fr)HU(a.e2,a.bu.b,(X(e+1|0,D$(a))+X(a.cA+2|0,a.c$)|0)-a.q.a|0);return 0;}
var V8=F();
function AR_(a){}
function AAN(){var a=this;EK.call(a);a.lf=null;a.ry=null;a.t0=null;a.bv=null;a.c2=null;a.c4=null;a.ss=0.0;a.mk=null;a.mH=null;}
function ZJ(a,b){var c=new AAN();AQ4(c,a,b);return c;}
function AQ4(a,b,c){var d;c=c.cC;Lz(a);d=new VI;d.rs=a;a.ry=d;d=new VJ;d.nV=a;a.t0=d;a.ss=10.0;a.bv=b;a.lf=c;b.e2=a;}
function AF1(a){var b;b=a.bv;b.e2=null;a.bv=CG(b,null);}
function QL(a,b,c){var d;a.mk=b;a.mH=c;d=a.c2;if(d!==null)Ge(d,b,c);d=a.c4;if(d!==null)Ge(d,b,c);}
function AHL(a,b,c,d){P1(a,b,c,d);P1(a.bv,b,c,d);if(d!==0.0){a.bv.uL();AEy(a.bv);if(Qg(a))H0(a);else a.c4=null;if(XR(a))Ia(a);else a.c2=null;}}
function HU(a,b,c){ACA(a.bv,b,c);if(Qg(a))H0(a);if(XR(a))Ia(a);}
function XR(a){var b;b=a.q.a;return b>0&&a.bv.cF.a>b?1:0;}
function Qg(a){var b;b=a.q.b;return b>0&&a.bv.cF.b>b?1:0;}
function H0(a){var b,c,d,e,f,g;b=a.c4;if(b===null)b=Hm();a.c4=b;Uo(a,b);c=a.c4;b=a.bv;d=b.bu.b;e=a.E;f=e.b;g=a.q;Mz(c,d,f,g.b,b.cF.b,e.a+g.a|0,JF(a));}
function Ia(a){var b,c,d,e,f,g;b=a.c2;if(b===null)b=Hm();a.c2=b;Uo(a,b);c=a.c2;b=a.bv;d=b.bu.a;e=a.E;f=e.a;g=a.q;Iv(c,d,f,g.a,b.cF.a,e.b+g.b|0,JF(a));}
function JF(a){return B_(a.ss,a.dZ);}
function Uo(a,b){var c,d;c=a.mk;d=a.mH;if(!(c!==null&&d!==null?(KA(b.hG,c)&&KA(b.hF,d)?1:0):0))Ge(b,c,d);}
function APu(a,b){var c;a.bv.eV(b);if(!(a.c2===null&&a.c4===null)){CJ(b,1);c=a.c2;if(c!==null)FV(c,b);c=a.c4;if(c!==null)FV(c,b);c=a.c2;if(c!==null)Gd(c,b);c=a.c4;if(c!==null)Gd(c,b);CJ(b,0);}}
function M8(a,b){var c,d;a:{b:{c=a.c2;if(!(c!==null&&IR(c,b))){c=a.c4;if(c===null)break b;if(!IR(c,b))break b;}d=1;break a;}d=0;}return d;}
function AJV(a,b,c,d){return !M8(a,b.h)&&!a.bv.cq(b,c,d)?0:1;}
function AQz(a,b,c){var d,e;d=a.c2;if(d!==null){e=Ff(d,b.h,a.ry,1);if(e!==null)return e;}d=a.c4;if(d!==null){e=Ff(d,b.h,a.t0,0);if(e!==null)return e;}return a.bv.b6(b,c);}
function AJt(a,b,c){return M8(a,b.h)?1:0;}
function AKP(a,b){var c,d,e;c=a.c2;d=c!==null&&Fq(c,b.h,a.lf)?1:0;c=a.c4;e=c!==null&&Fq(c,b.h,a.lf)?1:0;return !d&&!e&&!a.bv.bS(b)?0:1;}
function APH(a,b,c,d){var e,f;if(!DH(a,b.h))return 0;e=B_(d*0.25,a.dZ);f=B_(c*0.25,a.dZ);if(b.bC){f=f+e|0;e=0;}if(a.c2!==null&&e){b=a.bv;Rs(b,b.bu.a+e|0);Ia(a);}if(a.c4!==null&&f){b=a.bv;Vk(b,b.bu.b+f|0);H0(a);}return 1;}
function AM2(a){var b,c;b=JF(a);c=a.bv.iU();c.b=Bc(c.b,b);c.a=Bc(c.a,b);return c;}
function Wd(){var a=this;GB.call(a);a.hP=null;a.k_=null;a.r9=null;a.pN=0.0;}
function ANN(a){var b,c;b=a.cF;c=a.q;Bh(b,c.b*3|0,c.a*5|0);}
function ALD(a){var b;b=B_(20.0,a.dZ);return BX(b,b);}
function AKq(a,b){var c,d,e,f;c=a.r9;d=c.s4;e=c.s5;c=c.s2;b=Cw(b);f=new M;O(f);G(G(G(f,c),B(36)),b);IF(e,N(f),d.s0,3.0);}
function AH8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;ZH(a,b);V1(a,b);c=B_(30.0,a.dZ);d=a.bu;e=d.b;f=X(e/c|0,c);g=d.a;h=X(g/c|0,c);d=a.q;i=X(((e+d.b|0)-1|0)/c|0,c);e=X(((g+d.a|0)-1|0)/c|0,c);d=a.k_;d.a=c;d.b=c;a.hP.bA=1.0;while(h<=e){g=a.E.a-a.bu.a|0;j=f;while(j<=i){k=a.E.b-a.bu.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ADZ(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;Xa(n,0.75,a.pN,a.hP);Bz(b,k+j|0,g+h|0,a.k_,a.hP);j=j+c|0;}h=h+c|0;}IB(b);}
function AK6(a,b){}
function PB(){var a=this;C.call(a);a.s4=null;a.s5=null;a.s2=null;}
function VA(){C.call(this);this.pk=null;}
function AN8(a){X1(a.pk);}
function RH(){C.call(this);this.mz=null;}
function AJ$(a){NS(a.mz);}
function XU(){C.call(this);this.k6=null;}
var AYj=null;function ANW(){var a=new XU();AAd(a);return a;}
function AAd(a){a.k6=Cn();}
function Nf(a,b,c,d,e){var f;f=new Jt;f.mm=e;f.ii=c;f.iy=d;f.gt=b;BZ(a.k6,f);}
function Q3(a){return HH(a.k6,AYj);}
function VV(b){var c,d;if(b===null)b=B(31);else{c=b.e_;if(c===null)b=B(31);else{d=PN(c,B(390),I(c));b=d==(-1)?b.e_:Dj(b.e_,d+1|0);}}return b;}
function AAR(){AYj=S(Jt,0);}
function HZ(){var a=this;C.call(a);a.rt=null;a.hU=null;a.iu=null;a.gH=null;a.hb=null;a.hg=null;a.gl=null;}
function LF(b,c,d,e){var f,g,h;f=new HZ;f.gH=new Bm;f.hb=new Bm;f.hg=new Bm;f.gl=b;g=DO(e,b.gt);if(g!==null)g.gX=g.gX+1|0;else{g=new Oj;h=Hg(c,b.gt,d);g.gX=1;g.h9=h;Ld(e,b.gt,g);}e=g.h9;f.rt=e;Bh(f.gH,e.bi|0,e.bA|0);e=Hg(c,b.ii,d);f.hU=e;Bh(f.hb,e.bi|0,e.bA|0);b=Hg(c,b.iy,d);f.iu=b;Bh(f.hg,b.bi|0,b.bA|0);return f;}
function Vs(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gl.gt;f=DO(d,e);g=f.gX-1|0;f.gX=g;if(!g){a:{h=0;i=null;if(e===null){j=d.b7.data[0];while(j!==null){if(j.dw===null)break a;k=j.cP;i=j;j=k;}}else{l=e.jf();m=d.b7.data;h=l&(m.length-1|0);j=m[h];while(j!==null&&!(j.iT==l&&Y9(e,j.dw))){k=j.cP;i=j;j=k;}}}if(j===null)j=null;else{if(i!==null)i.cP=j.cP;else d.b7.data[h]=j.cP;d.c5=d.c5+1|0;d.dt=d.dt-1|0;}Ig(b,f.h9);}Ig(b,c.hU);Ig(b,c.iu);}
function TM(){var a=this;EK.call(a);a.gO=null;a.gT=null;a.gw=null;a.dY=null;a.iS=0.0;a.gC=0;a.hz=0;a.db=null;a.lr=null;}
function LT(a){var b;b=a.q;return b.b&&b.a?0:1;}
function T_(a){var b,c;a:{if(a.gw!==null){b=a.gT;if(b!==null&&!Fp(b)){c=0;break a;}}c=1;}return c;}
function XZ(a,b){a.q.a=b;}
function Po(a,b,c,d,e){var f,g;f=a.gO.dU;Bh(f,d,a.q.a);g=a.E;Bz(b,g.b+c|0,g.a,f,e);}
function Rb(a){if(a.dY===null)a.dY=GN(a.gO,a.gw);}
function Un(){var a=this;C.call(a);a.kY=Eo;a.jR=0;a.m6=0;}
function Yu(){var a=this;C.call(a);a.sa=null;a.r_=null;a.r$=null;}
function AIj(a){var b,c,d,e,f;b=a.sa;c=a.r_;d=a.r$;e=Bu();f=new M;O(f);b=G(f,b);BB(b,9);b=G(b,c);BB(b,9);G(b,d);Br(e,N(f));}
function VI(){C.call(this);this.rs=null;}
function AQ6(a,b){var c,d;c=a.rs;d=FK(b,c.bv.cF.a-c.q.a|0);Rs(c.bv,d);Ia(c);}
function VJ(){C.call(this);this.nV=null;}
function AF9(a,b){var c,d;c=a.nV;d=FK(b,c.bv.cF.b-c.q.b|0);Vk(c.bv,d);H0(c);}
function Jt(){var a=this;C.call(a);a.mm=null;a.ii=null;a.iy=null;a.gt=null;}
var D0=F(Bq);
var ACF=F(EH);
function AHV(a){var b=new ACF();AMi(b,a);return b;}
function AMi(a,b){a.i7=1;a.js=1;a.kJ=b;}
function Su(){var a=this;C.call(a);a.wf=null;a.wg=null;a.we=null;}
function NX(){var a=this;C.call(a);a.tc=null;a.te=null;a.td=0;}
function AFR(a,b){var c,d,e;c=a.tc;d=a.te;e=a.td;d.l(XJ(c,(b.h.b+e|0)-c.dX.b|0));}
function NV(){var a=this;C.call(a);a.pY=null;a.pX=null;a.pZ=0;}
function AHW(a,b){var c,d,e;c=a.pY;d=a.pX;e=a.pZ;d.l(OJ(c,(b.h.a+e|0)-c.dX.a|0));}
function Kr(){var a=this;L6.call(a);a.nE=null;a.sc=null;}
function AD9(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.nE;e=0;f=0;g=a.sc;a:{b:{while(true){if((e+32|0)>f&&DN(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B6(b)+k|0;h=j.length;f=Ba(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bx;c=new M;O(c);T(G(T(G(c,B(391)),l),B(98)),h);Bn(b,N(c));J(b);}if(B6(b)<m){b=new LW;V(b);J(b);}if(m<0){b=new Bx;c=new M;O(c);G(T(G(c,B(99)),m),B(100));Bn(b,N(c));J(b);}n=b.V;h=n+b.kB|0;e=0;while(e<m){o=k+1|0;i=b.li.data;l=h+1|0;j[k]=i[h];e=
e+1|0;k=o;h=l;}b.V=n+m|0;e=0;}if(!DN(c)){p=!DN(b)&&e>=f?AV6:AV5;break a;}i=g.data;n=B6(c);o=i.length;n=Ba(n,o);q=new Vn;q.q7=b;q.ti=c;p=AEj(a,d,e,f,g,0,n,q);e=q.uO;if(p===null&&0==q.jT)p=AV6;k=q.jT;h=0;if(c.l5){b=new I2;V(b);J(b);}if(B6(c)<k)break;if(h>o){b=new Bx;c=new M;O(c);BB(T(G(T(G(c,B(101)),h),B(95)),o),41);Bn(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bx;c=new M;O(c);T(G(T(G(c,B(103)),l),B(98)),o);Bn(b,N(c));J(b);}if(k<0){b=new Bx;c=new M;O(c);G(T(G(c,B(99)),k),B(100));Bn(b,N(c));J(b);}o=c.V;m=0;while(m<k)
{l=o+1|0;n=h+1|0;SB(c,o,i[h]);m=m+1|0;o=l;h=n;}c.V=c.V+k|0;if(p!==null)break a;}b=new HV;V(b);J(b);}b=new Bx;c=new M;O(c);BB(T(G(T(G(c,B(101)),k),B(95)),h),41);Bn(b,N(c));J(b);}EF(b,b.V-(f-e|0)|0);return p;}
var TQ=F(Kr);
function AEj(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Ku(h,2))break a;i=AV6;break a;}c=k+1|0;n=j[k];if(!FE(a,n)){c=c+(-2)|0;i=D1(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Ku(h,3))break a;i=AV6;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FE(a,n))break b;if(!FE(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Ma(p)){c=k+(-3)|0;i=D1(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=D1(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Ku(h,4))break a;i=AV6;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B6(h.ti)<2?0:1)break a;i=AV5;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FE(a,n))break c;if(!FE(a,o))break c;if(!FE(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=H7(r);m=c+1|0;j[c]=IL(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=D1(1);break a;}c=k+(-3)|0;i
=D1(1);}h.uO=c;h.jT=f;return i;}
function FE(a,b){return (b&192)!=128?0:1;}
function P3(){C.call(this);this.rS=null;}
function AGY(a,b){var c,d;c=a.rS;d=c.dA+1|0;c.dA=d;c=new M;O(c);G(G(T(c,d),B(392)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function MU(){C.call(this);this.qo=null;}
function AHJ(a){return a.qo.fP();}
function MV(){C.call(this);this.mY=null;}
function AN$(a){return a.mY.fP();}
function S$(){C.call(this);this.qE=null;}
function APS(a){return a.qE.fP();}
function Vz(){C.call(this);this.yk=null;}
function AM5(a){Br(Bu(),B(393));}
function QO(){C.call(this);this.mW=null;}
function AE_(a,b){a.mW.l(FB(b));}
function UU(){C.call(this);this.sf=null;}
function ARD(a,b){a.sf.p();}
function MW(){var a=this;C.call(a);a.vQ=null;a.vR=null;a.vT=0;a.vV=0;}
var AAx=F();
var ZU=F();
function Sx(){C.call(this);this.uH=null;}
function AF8(a,b){var c,d,e,f;c=a.uH;d=Cw(b);e=new M;O(e);G(G(e,B(394)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new ST;d.wA=c;d.pa=b;e=new SS;e.vv=c;f=new UP;f.wq=e;e=new V4;e.nx=d;c=b.e3;if(c!==null)c.arrayBuffer().then(Bi(e,"f"),Bi(f,"f"));else{b=b.gA.getFile();c=new V7;c.s$=e;c.s_=f;b.then(Bi(c,"f"),Bi(f,"f"));}}
function Sw(){C.call(this);this.w1=null;}
function AGP(a,b){var c;b=Cw(b);c=new M;O(c);G(G(c,B(395)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Qk=F();
function AOD(a,b){b=b;b.b1=CG(b.b1,null);}
function Tg(){C.call(this);this.tf=null;}
function AKa(a){DL(a.tf);}
function N5(){C.call(this);this.qF=null;}
function ANL(a,b){var c;c=a.qF;Dt(c,b);Lt(c,null);HF(c);}
var J1=F(DV);
var AYk=0.0;var AYl=null;function ZO(){AYk=$rt_globals.NaN;AYl=E($rt_doublecls());}
var LA=F();
var AYm=null;var AYn=null;function ABo(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.m6=Fb(CV(d,Cc(0, 2147483648)),Eo)?0:1;e=CV(d,Cc(4294967295, 1048575));f=EE(Gn(d,52))&2047;if(Fb(e,Eo)&&!f){c.kY=Eo;c.jR=0;return;}g=0;if(f)e=ATf(e,Cc(0, 1048576));else{e=Fo(e,1);while(Fb(CV(e,Cc(0, 1048576)),Eo)){e=Fo(e,1);f=f+(-1)|0;g=g+1|0;}}h=ACl(AYn,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AYn.data[h]|0)|0;j=RC(e,AYm.data[h],i);if(AAg(j,Cc(2808348672, 232830643))){h=h+1|0;i=12+(f-AYn.data[h]|0)|0;j=RC(e,AYm.data[h],
i);}k=D8(AYm.data[h],(63-i|0)-g|0);l=Gn(Cr(k,Bd(1)),1);m=Gn(k,1);if(Fb(e,Cc(0, 1048576)))m=Gn(m,2);n=Bd(10);while(PM(n,m)){n=BQ(n,Bd(10));}if(AAg(MZ(j,n),Do(m,Bd(2))))n=Do(n,Bd(10));o=Bd(1);while(PM(o,l)){o=BQ(o,Bd(10));}if(AH7(Ks(o,MZ(j,o)),Do(l,Bd(2))))o=Do(o,Bd(10));f=ATA(n,o);e=f>0?BQ(Do(j,n),n):f<0?Cr(BQ(Do(j,o),o),o):BQ(Do(Cr(j,Do(o,Bd(2))),o),o);if(AAg(e,Cc(2808348672, 232830643))){h=h+1|0;e=Do(e,Bd(10));}else if(AIo(e,Cc(1569325056, 23283064))){h=h+(-1)|0;e=BQ(e,Bd(10));}c.kY=e;c.jR=h-330|0;}
function RC(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CV(b,Bd(65535));f=CV(D8(b,16),Bd(65535));g=CV(D8(b,32),Bd(65535));h=CV(D8(b,48),Bd(65535));i=CV(c,Bd(65535));j=CV(D8(c,16),Bd(65535));k=CV(D8(c,32),Bd(65535));l=CV(D8(c,48),Bd(65535));m=Cr(Cr(BQ(k,e),BQ(j,f)),BQ(i,g));n=Cr(Cr(Cr(BQ(l,e),BQ(k,f)),BQ(j,g)),BQ(i,h));o=Cr(Cr(Fo(BQ(l,h),32+d|0),Fo(Cr(BQ(l,g),BQ(k,h)),16+d|0)),Fo(Cr(Cr(BQ(l,f),BQ(k,g)),BQ(j,h)),d));return Cr(d>16?Cr(o,Fo(n,d-16|0)):Cr(o,D8(n,16-d|0)),D8(m,32-d|0));}
function AA1(){var b,c,d,e,f,g,h,i,j,k;AYm=AUt(660);AYn=BC(660);b=Cc(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AYm.data;g=d+330|0;f[g]=FF(e,Bd(80));AYn.data[g]=c;e=FF(e,Bd(10));h=Nx(e,Bd(10));while(PM(e,b)&&Fb(CV(e,Cc(0, 2147483648)),Eo)){e=Fo(e,1);c=c+1|0;h=Fo(h,1);}e=Cr(e,Do(h,Bd(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AH7(e,Cc(3435973836, 214748364))){e=Gn(e,1);j=j+1|0;d=d+(-1)|0;}k=BQ(e,Bd(10));b=j<=0?k:Cr(k,Gn(BQ(CV(b,Bd((1<<j)-1|0)),Bd(10)),j));f=AYm.data;g=(330-i|0)-1|0;f[g]=FF(b,
Bd(80));AYn.data[g]=d;i=i+1|0;}}
function MX(){C.call(this);this.sr=null;}
function ASt(a,b){var c,d;c=a.sr;d=new Bq;Bn(d,$rt_str(b.message));c.l(d);}
function Ua(){var a=this;C.call(a);a.q0=0;a.mh=0;}
function FK(a,b){return PR(a.q0,b,a.mh);}
function Nz(){var a=this;C.call(a);a.t6=null;a.t8=null;a.t7=null;}
function ARj(a,b,c,d){var e,f;b=a.t6;e=a.t8;f=a.t7;TG(b,e);if(f!==null)d.l$.p();if(ME(d)){if(d.jC===null)TS(b,AEB(d,e),d.h6,e);else PT(b,AEB(d,e),d.h6,e,d.jC);}}
var Sf=F(DV);
var AYo=null;function FF(b,c){return Long_udiv(b, c);}
function Nx(b,c){return Long_urem(b, c);}
function Lh(b,c){return Long_ucompare(b, c);}
function AAZ(){AYo=E($rt_longcls());}
var Fi=F(Bq);
function NM(){var a=this;C.call(a);a.mv=null;a.pO=null;a.tm=0;a.uE=0;}
function LO(a,b){return B6(a.pO)<b?0:1;}
var ADR=F();
function UN(b,c,d,e){var f,g;f=b.next();g=new XA;g.mK=b;g.mJ=c;g.mN=d;g.mL=e;f.then(Bi(g,"f"),Bi(d,"f"));}
function Y_(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEk(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(D_()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Xv;f.qu=b;f.qv=d;d.addEventListener("change",Bi(f,"handleEvent"));d.click();}
function Zi(b,c){var d;if(c.isFile?1:0)b.l(YJ(c.file()));else{c=c.createReader();d=new Xk;d.tB=b;c.readEntries(Bi(d,"f"));}}
function S_(){var a=this;C.call(a);a.bI=null;a.oj=null;a.hM=null;a.iz=null;a.W=null;}
function ID(a){return a.bI.cr.iH;}
function Oh(a){var b;b=new Pg;b.pL=a;return b;}
function AEV(a){var b,c,d,e,f,g;b=S(C$,4);c=b.data;d=a.W.ba.T.bg;e=a.bI;BK(e);f=new V2;f.sZ=e;c[0]=D7(B(396),d,f);e=a.W.ba.T.bg;f=a.bI;BK(f);g=new V6;g.nu=f;c[1]=D7(B(397),e,g);e=a.W.ba.T.bg;f=a.bI;BK(f);g=new V5;g.rQ=f;c[2]=D7(B(398),e,g);e=a.W.ba.T.bg;f=a.bI;BK(f);g=new V3;g.vq=f;c[3]=D7(B(399),e,g);return FR(b);}
function Jc(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DL(a.W.b$);d=a.bI.e;e=Dn(d);f=GX(d);g=a.bI.ep;if(c===null)h=null;else{AS0();switch(AYp.data[c.cZ]){case 1:h=KU(g,e,f);break a;case 2:h=VT(g,e,f);break a;default:}b=new Er;V(b);J(b);}}c=a.bI;e=EV(c,b);f=HK(c.e.f,e.bs,e.bF);g=OR(c,f);if(h!==null){f=c.e;i=e.bs;j=e.bF;e=new PO;e.xR=c;e.xS=b;e.xT=g;h.sk(f,i,j,e,c.gQ);}else{e=DO(c.e.f.ec,f);if(e!==null)Hw(c,e);else{e=DO(c.e.f.ex,f);if(e!==null&&!Ee(e))Vu(c.iq,b,e,c,g);else{g=c.iq;DL(g.b$);h=g.b$;k=S(C$,1);l=k.data;d=new C$;BK(h);f
=new VW;f.nS=h;K7(d,f,B(400),g.ba.T.pG);l[0]=d;Gb(h,b,FR(k),NB(g,c));}}}}
var Zu=F(0);
function AJW(b){return 112<=b&&b<=123?1:0;}
var XC=F();
function APA(a,b){Y_(b);}
function XB(){var a=this;C.call(a);a.pT=null;a.pS=null;}
function AH2(a,b){var c,d,e,f,g,h,i;c=a.pT;d=a.pS;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new P2;i.nN=c;i.nM=g;h.then(Bi(i,"f"),Bi(d,"f"));e=e+1|0;}}
var W3=F();
function AJx(a,b){Y_(b);}
function W2(){var a=this;C.call(a);a.o2=null;a.o3=null;}
function AKu(a,b){var c,d,e,f,g;c=a.o2;d=a.o3;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=S(Bv,1);g.data[0]=FB(b.name);UN(f,c,d,g);}
var YU=F();
function AB$(b,c){return AC3(null,b,c,0);}
function AC3(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=ADX(c);g=BP(f);h=BP(f);i=BP(f);j=S(Cy,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<Cq(b)){l=BP(f);c[k]=B1(b,k);l=4*l|0;f.eP=f.eP+l|0;}else c[k]=DP(ABW(f,d,0));k=k+1|0;}m=Za(f,h);n=new HM;n.ec=Gx();n.ex=Gx();n.fj=Cn();if(!c.length){b=new BD;V(b);J(b);}n.C=j;n.fC=0;n.cu=0;n.da=AT4(m);b=n.ec;e=0;while(e<i){Ld(b,EU(BP(f),BP(f)),EU(BP(f),BP(f)));e=e+1|0;}b=n.ec;m=n.ex;o=new UQ;SP(o,b);while(Jg(o)){Ux(o);p=o.gZ;q=p.dw;p=p.dz;b=Cn();if(DO(m,p)===null)Ld(m,p,b);BZ(DO(m,
p),q);}if(m.kf===null){b=new Pf;b.uV=m;m.kf=b;}b=m.kf;q=new Re;SP(q,b.uV);while(Jg(q)){Ux(q);b=q.gZ.dz;m=AVg;c=S(C,b.i);d=c.data;HH(b,c);AAr(c,m);e=0;g=d.length;while(e<g){m=d[e];I_(b,e);b.cj.data[e]=m;e=e+1|0;}}Qp(f);return n;}
function ABG(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=ADX(c);g=BP(f);h=BP(f);i=BP(f);j=BP(f);k=NI(b,g);l=NI(b,h);m=(II(B1(b,k.b),k.a)).data[0].o;e=(II(B1(b,l.b),l.a)).data[1].o;n=0;o=i-1|0;while(n<i){p=ABW(f,d,g);if(!n)p=LN(m,p);if(n==o)p=LN(p,e);q=k.b+n|0;r=DP(p);b.C.data[q]=r;n=n+1|0;}r=Za(f,j);Qp(f);if(!Ee(r)){s=Ob(g,h,(-1));b=b.da;f=AS5(s,r);r=KD(b,b.cT,s);if(r!==null){f=f.cT.bx;if(r===b.cT)b.cT=Bt(f,0);else if(r.dL!==null){b=new N_;b.sb=r;J5(f,b);q=Qr(r.dL.bx,
r);En(r.dL.bx,q);b=r.dL.bx;Pp(b,q);if(!Ee(f)){Jl(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.cj.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BU(f);g=0;while(g<j){c=b.cj.data;h=q+1|0;c[q]=BY(f);g=g+1|0;q=h;}b.cv=b.cv+1|0;}}}}}
function ABW(b,c,d){var e,f,g,h,i,j,k,l;e=BP(b);f=S(B7,e);g=f.data;h=0;while(h<e){i=BP(b);j=BP(b);k=BP(b);l=BP(b);g[h]=DD(Hu(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function Za(b,c){var d,e;d=Cn();e=0;while(e<c){BZ(d,Ob(BP(b),BP(b),BP(b)));e=e+1|0;}return d;}
var W$=F(0);
var AWV=null;function Y8(){AWV=null;}
function Xv(){var a=this;C.call(a);a.qu=null;a.qv=null;}
function AJo(a,b){var c,d,e,f,g,h;b=a.qu;c=a.qv;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new MQ;h.mE=b;h.mD=g;$rt_globals.setTimeout(Bi(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=YJ(d.item(f));g=new MA;g.rV=b;g.rW=c;$rt_globals.setTimeout(Bi(g,"onTimer"),0);f=f+1|0;}}
function AAy(){var a=this;C.call(a);a.h3=null;a.j0=null;}
function AEa(){var a=this;C.call(a);a.yd=0;a.x0=0;a.su=0;a.kF=0;}
function UF(){var a=this;C.call(a);a.nc=null;a.nb=null;}
function AJ6(a){var b,c,d,e,f,g;b=a.nc;c=a.nb;if(C6(c.h3,b.e.fV)){c=c.j0;CA(b,c.kF,c.su,0);B3(b.r.bQ,c.kF,c.su);B3(b.r.bG,c.x0,c.yd);}else{d=(Cp(b.ep.rv)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ck(b);b=new TJ;b.tS=g;b.tR=c;BK(b);c=new PU;c.vo=b;$rt_globals.setTimeout(Bi(c,"onTimer"),0);}}}
function UH(){var a=this;C.call(a);a.vs=null;a.vn=null;}
function AO4(a){Hw(a.vs,a.vn);}
function ACP(){var a=this;C.call(a);a.ie=null;a.eP=0;}
function ADX(a){var b=new ACP();AFf(b,a);return b;}
function AFf(a,b){a.ie=b;a.eP=0;}
function BP(a){var b,c;b=a.ie.data;c=a.eP;a.eP=c+1|0;return b[c];}
function Qp(a){var b,c,d,e;if(a.eP!=a.ie.data.length){b=Iz();c=a.ie.data.length;d=a.eP;e=new M;O(e);G(T(G(T(G(e,B(401)),c),B(402)),d),B(403));Br(b,N(e));}}
var I2=F(Fi);
var HV=F(Bq);
var LW=F(Bq);
function AAY(){C.call(this);this.Bn=null;}
function SA(){var a=this;C.call(a);a.tD=null;a.tH=null;}
function ARI(a){var b,c;b=a.tD;c=a.tH;FP(b.d1,c);}
function Rh(){C.call(this);this.sB=null;}
function AKS(a,b){HE(a.sB,b);}
function SK(){var a=this;C.call(a);a.ox=null;a.ow=null;}
function AGe(a){var b,c;b=a.ox;c=a.ow;FP(b.d1,c);Uk(b);}
var YD=F();
function R_(b,c){return b.data[c];}
function G0(){var a=this;C.call(a);a.eJ=0;a.fh=0;a.kN=null;a.jz=0;a.gW=null;}
function AFA(a,b,c,d,e,f){var g=new G0();AKL(g,a,b,c,d,e,f);return g;}
function AKL(a,b,c,d,e,f,g){a.eJ=b;a.fh=c;a.kN=BX(f,g);a.jz=d;a.gW=e;}
function ACY(){Gc.call(this);this.CJ=null;}
function Pf(){EP.call(this);this.uV=null;}
var WU=F(Bx);
var Qx=F(0);
var NG=F(0);
var LZ=F();
function AAD(){var a=this;LZ.call(a);a.EQ=null;a.GW=0;a.Ft=0;a.C0=0;}
function RN(){var a=this;C.call(a);a.nU=null;a.nT=null;}
function AGR(a){var b,c;b=a.nU;c=a.nT;U8();Jc(b,c,AYq);}
function RM(){var a=this;C.call(a);a.o5=null;a.o7=null;}
function AFh(a){var b,c;b=a.o5;c=a.o7;U8();Jc(b,c,AYr);}
function RL(){var a=this;C.call(a);a.u_=null;a.va=null;}
function ALv(a){Jc(a.u_,a.va,null);}
function RK(){var a=this;C.call(a);a.na=null;a.nd=null;}
function AQh(a){var b,c,d,e,f,g,h;b=a.na;c=a.nd;d=Dn(b.bI.e);e=GX(b.bI.e);d=Ny(b.bI.ep,d,e);DL(b.W.b$);b=b.bI;e=EV(b,c);if(d!==null){f=b.e;g=e.bs;h=e.bF;e=new Qu;e.w7=b;e.w6=c;d.HS(f,g,h,1,e,b.gQ);}}
function PD(){C.call(this);this.qc=null;}
function APD(a){var b;b=a.qc;DL(b.W.b$);GC(b.bI,Oh(b),0);}
function PF(){C.call(this);this.tG=null;}
function AKA(a){var b;b=a.tG;DL(b.W.b$);GC(b.bI,Oh(b),1);}
function PG(){C.call(this);this.sD=null;}
function AHj(a){var b,c,d;b=a.sD;DL(b.W.b$);c=ID(b);b=b.bI;BK(b);d=new Tc;d.sG=b;Q2(c,d,Y6(B(404)));}
var XD=F(0);
var AWR=null;function YQ(){AWR=new Pz;}
function Wn(){C.call(this);this.sT=null;}
function AGb(a){var b,c,d;b=a.sT;DL(b.W.b$);c=ID(b);b=b.bI;BK(b);d=new Ro;d.qL=b;LX(c,d);}
function US(){C.call(this);this.s3=null;}
function AKf(a,b,c){var d,e;c=a.s3;d=c.e.f;e=b.fs;b=c.eK;Xs(d.C.data[e],0,b);}
function QG(){var a=this;C.call(a);a.oI=null;a.oL=0;a.oM=0;a.oN=null;a.oO=0;a.oJ=0;}
function AJ2(a,b){var c,d,e,f,g,h,i,j;c=a.oI;d=a.oL;e=a.oM;f=a.oN;g=a.oO;h=a.oJ;i=CB(c.bp,5.0);d=Ba((c.bp.b8.b-d|0)-i|0,Bc((i-d|0)-c.S.q.b|0,b.h.b));j=Ba((c.bp.b8.a-e|0)-i|0,Bc((i-e|0)-c.S.q.a|0,b.h.a));Bh(f,d+g|0,j+h|0);Fn(c,f,c.O.q);}
function XO(){var a=this;C.call(a);a.n8=null;a.n7=null;a.n5=null;a.n4=0;a.oa=0;a.n_=0;a.n$=0;a.n9=0;a.oc=0;a.ob=0;a.se=0;}
function ALu(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.n8;d=a.n7;e=a.n5;f=a.n4;g=a.oa;h=a.n_;i=a.n$;j=a.n9;k=a.oc;l=a.ob;m=a.se;n=CB(c.bp,5.0);o=c.O.iU();Cz(d,c.O.q);Cz(e,c.O.E);switch(f){case -1:f=Ba(h+(b.h.b-g|0)|0,c.bp.b8.b-n|0);g=o.b;h=h+i|0;f=Bc(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bc((i+b.h.b|0)-g|0,Bc(o.b,n-c.S.E.b|0));}b:{switch(j){case -1:f=Bc(n,Ba(l+(b.h.a-k|0)|0,(c.bp.b8.a+c.S.q.a|0)-n|0));g=o.a;h=l+m|0;f=Bc(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bc((m+b.h.a|0)-k|0,o.a);}Fn(c,e,d);}
function Vx(){var a=this;C.call(a);a.vg=null;a.vh=0.0;}
function JQ(a,b){return KP(a.vg,b,a.vh*2.0+0.875);}
function S3(){C.call(this);this.nZ=null;}
function AK7(a){AEs(a.nZ);}
function S4(){C.call(this);this.ru=null;}
function AMl(a){LM(a.ru);}
function S2(){C.call(this);this.vi=null;}
function ANI(a){ADW(a.vi);}
function On(){C.call(this);this.rU=null;}
function AJ0(a){a.rU.uB();}
function Om(){C.call(this);this.qI=null;}
function AQr(a){a.qI.u3();}
function Vr(){C.call(this);this.rh=null;}
function AHR(a){var b,c,d,e,f,g,h,i;b=a.rh;c=(b.oj.dl()).data;d=S(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Yv;i.pK=b;i.pJ=h;e[f]=ACf(i,h,b.W.ba.T.bg);f=f+1|0;}return d;}
function V2(){C.call(this);this.sZ=null;}
function AOi(a){var b,c,d,e,f;b=a.sZ.e.f;c=b.cu;d=new M;O(d);T(G(d,B(405)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fC;d=new M;O(d);T(G(d,B(406)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.da;e=FU(EG(b));Sr(d,0,d.cT,e);b=Bu();f=b.j$;f.data[0]=10;N9(b,f,0,1);}
function V6(){C.call(this);this.nu=null;}
function ALd(a){SY(a.nu);}
function V5(){C.call(this);this.rQ=null;}
function AF5(a){WZ(a.rQ);}
function V3(){C.call(this);this.vq=null;}
function AHZ(a){HF(a.vq);}
function Xy(){C.call(this);this.oW=null;}
function AHl(a,b,c){FS(B1(a.oW.e.f,b.fs),0,I(c));}
function P2(){var a=this;C.call(a);a.nN=null;a.nM=null;}
function AIe(a,b){a.nN.l(ACo(a.nM,b));}
var IU=F(0);
function MQ(){var a=this;C.call(a);a.mE=null;a.mD=null;}
function AKB(a){Zi(a.mE,a.mD);}
function MA(){var a=this;C.call(a);a.rV=null;a.rW=null;}
function AE4(a){a.rV.l(a.rW);}
var Pz=F();
function XA(){var a=this;C.call(a);a.mK=null;a.mJ=null;a.mN=null;a.mL=null;}
function AJR(a,b){var c,d,e,f,g,h,i;c=a.mK;d=a.mJ;e=a.mN;f=a.mL;if(!(b.done?1:0)){UN(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Uu;c.o4=d;c.o6=g;c.o8=f;b.then(Bi(c,"f"),Bi(e,"f"));}else{h=f.data;c=g.values();b=FB(g.name);i=h.length;f=Dk(f,i+1|0);f.data[i]=b;UN(c,d,e,f);}}}
function GS(){var a=this;C.call(a);a.ia=0;a.r1=0;a.hq=null;a.gZ=null;a.ph=null;a.i1=null;}
function AYs(a){var b=new GS();SP(b,a);return b;}
function SP(a,b){a.i1=b;a.r1=b.c5;a.hq=null;}
function Jg(a){var b,c;if(a.hq!==null)return 1;while(true){b=a.ia;c=a.i1.b7.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.ia=b+1|0;}return 0;}
function AAa(a){var b;if(a.r1==a.i1.c5)return;b=new IJ;V(b);J(b);}
function Ux(a){var b,c,d,e;AAa(a);if(!Jg(a)){b=new Yi;V(b);J(b);}b=a.hq;if(b!==null){c=a.gZ;if(c!==null)a.ph=c;a.gZ=b;a.hq=b.cP;}else{d=a.i1.b7.data;e=a.ia;a.ia=e+1|0;b=d[e];a.gZ=b;a.hq=b.cP;a.ph=null;}}
var UQ=F(GS);
var Re=F(GS);
function Rc(){var a=this;C.call(a);a.g=null;a.dj=0;a.jY=null;a.m_=0;a.f9=0;a.ez=0;a.br=0;a.kW=null;}
function JW(a){return a.g.bK;}
function X3(a,b,c,d){var e,f,g,h,i,j;e=Cn();f=a.dj;g=0;if(c!=f)a.dj=c;a:{switch(b){case -1073741784:h=new R0;c=a.br+1|0;a.br=c;Fm(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PK;c=a.br+1|0;a.br=c;Fm(h,c);break a;case -33554392:h=new S9;c=a.br+1|0;a.br=c;Fm(h,c);break a;default:c=a.f9+1|0;a.f9=c;if(d!==null)h=AUb(c);else{h=new Fw;Fm(h,0);g=1;}c=a.f9;if(c<=(-1))break a;if(c>=10)break a;a.jY.data[c]=h;break a;}h=new XY;Fm(h,(-1));}while(true){if(E0(a.g)&&a.g.j==(-536870788))
{d=AQO(B9(a,2),B9(a,64));while(!Di(a.g)&&E0(a.g)){i=a.g;j=i.j;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cu(d,Bg(i));i=a.g;if(i.bf!=(-536870788))continue;Bg(i);}i=KR(a,d);i.M(h);}else if(a.g.bf==(-536870788)){i=GJ(h);Bg(a.g);}else{i=O9(a,h);d=a.g;if(d.bf==(-536870788))Bg(d);}if(i!==null)BZ(e,i);if(Di(a.g))break;if(a.g.bf==(-536870871))break;}if(a.g.kk==(-536870788))BZ(e,GJ(h));if(a.dj!=f&&!g){a.dj=f;d=a.g;d.fR=f;d.j=d.bf;d.eu=d.eF;j=d.c8;d.u=j+1|0;d.g1=j;E3(d);}switch(b){case -1073741784:break;case -536870872:d
=new MO;Fx(d,e,h);return d;case -268435416:d=new Wo;Fx(d,e,h);return d;case -134217688:d=new Rf;Fx(d,e,h);return d;case -67108824:d=new TT;Fx(d,e,h);return d;case -33554392:d=new DQ;Fx(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return ATZ(Bt(e,0),h);default:return ATz(e,h);}return GJ(h);}d=new I0;Fx(d,e,h);return d;}
function ADl(a){var b,c,d,e,f,g,h;b=BC(4);c=(-1);d=(-1);if(!Di(a.g)&&E0(a.g)){e=b.data;c=Bg(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BN(3);b=e.data;b[0]=c&65535;f=a.g;g=f.bf;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bg(f);f=a.g;g=f.bf;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bg(f);return AQv(e,3);}return AQv(e,2);}if(!B9(a,2))return Z_(b[0]);if(B9(a,64))return AOA(b[0]);return AG3(b[0]);}e=b.data;c=1;while(c<4&&!Di(a.g)&&E0(a.g)){h=c+1|0;e[c]=Bg(a.g);c=h;}if(c==1){h=e[0];if(!(AYt.xE(h)==AYu?0:1))return XV(a,e[0]);}if
(!B9(a,2))return AUO(b,c);if(B9(a,64)){f=new Xz;N3(f,b,c);return f;}f=new T6;N3(f,b,c);return f;}
function O9(a,b){var c,d,e,f,g,h,i;if(E0(a.g)&&!JJ(a.g)&&Kj(a.g.j)){if(B9(a,128)){c=ADl(a);if(!Di(a.g)){d=a.g;e=d.bf;if(!(e==(-536870871)&&!(b instanceof Fw))&&e!=(-536870788)&&!E0(d))c=Mc(a,b,c);}}else if(!Oc(a.g)&&!Vv(a.g)){f=new Oe;O(f);while(!Di(a.g)&&E0(a.g)&&!Oc(a.g)&&!Vv(a.g)){if(!(!JJ(a.g)&&!a.g.j)&&!(!JJ(a.g)&&Kj(a.g.j))){g=a.g.j;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bg(a.g);if(!L7(e))BB(f,e&65535);else Ik(f,Go(e));}if(!B9(a,2)){c=new RQ;Dz(c);c.cp
=N(f);e=f.N;c.bH=e;c.kd=AMT(e);c.kZ=AMT(c.bH);h=0;while(h<(c.bH-1|0)){Rk(c.kd,L(c.cp,h),(c.bH-h|0)-1|0);Rk(c.kZ,L(c.cp,(c.bH-h|0)-1|0),(c.bH-h|0)-1|0);h=h+1|0;}}else if(B9(a,64))c=AUM(f);else{c=new Nn;Dz(c);c.g2=N(f);c.bH=f.N;}}else c=Mc(a,b,Xx(a,b));}else{d=a.g;if(d.bf!=(-536870871))c=Mc(a,b,Xx(a,b));else{if(b instanceof Fw)J(B8(B(31),d.bK,Oa(d)));c=GJ(b);}}a:{if(!Di(a.g)){e=a.g.bf;if(!(e==(-536870871)&&!(b instanceof Fw))&&e!=(-536870788)){f=O9(a,b);if(c instanceof C2&&!(c instanceof E4)&&!(c instanceof CP)
&&!(c instanceof Ez)){i=c;if(!f.bR(i.I)){c=new WE;ET(c,i.I,i.d,i.hn);c.I.M(c);}}if((f.hr()&65535)!=43)c.M(f);else c.M(f.I);break a;}}if(c===null)return null;c.M(b);}if((c.hr()&65535)!=43)return c;return c.I;}
function Mc(a,b,c){var d,e,f,g,h;d=a.g;e=d.bf;if(c!==null&&!(c instanceof BV)){switch(e){case -2147483606:Bg(d);d=new Ys;Dc(d,c,b,e);Ml();c.M(AYv);return d;case -2147483605:Bg(d);d=new PC;Dc(d,c,b,(-2147483606));Ml();c.M(AYv);return d;case -2147483585:Bg(d);d=new Ph;Dc(d,c,b,(-536870849));Ml();c.M(AYv);return d;case -2147483525:f=new Nh;d=E_(d);g=a.ez+1|0;a.ez=g;I$(f,d,c,b,(-536870849),g);Ml();c.M(AYv);return f;case -1073741782:case -1073741781:Bg(d);d=new RG;Dc(d,c,b,e);c.M(d);return d;case -1073741761:Bg(d);d
=new Qs;Dc(d,c,b,(-536870849));c.M(b);return d;case -1073741701:h=new U_;d=E_(d);e=a.ez+1|0;a.ez=e;I$(h,d,c,b,(-536870849),e);c.M(h);return h;case -536870870:case -536870869:Bg(d);if(c.hr()!=(-2147483602)){d=new CP;Dc(d,c,b,e);}else if(B9(a,32)){d=new RI;Dc(d,c,b,e);}else{d=new Oo;f=Pk(a.dj);Dc(d,c,b,e);d.kj=f;}c.M(d);return d;case -536870849:Bg(d);d=new FO;Dc(d,c,b,(-536870849));c.M(b);return d;case -536870789:h=new Fa;d=E_(d);e=a.ez+1|0;a.ez=e;I$(h,d,c,b,(-536870849),e);c.M(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bg(d);d=new Yt;ET(d,f,b,e);f.d=d;return d;case -2147483585:Bg(d);c=new Wz;ET(c,f,b,(-2147483585));return c;case -2147483525:c=new O7;So(c,E_(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bg(d);d=new Qm;ET(d,f,b,e);f.d=d;return d;case -1073741761:Bg(d);c=new Uj;ET(c,f,b,(-1073741761));return c;case -1073741701:c=new Rg;So(c,E_(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bg(d);d=AT6(f,b,e);f.d=d;return d;case -536870849:Bg(d);c
=new Ez;ET(c,f,b,(-536870849));return c;case -536870789:return ATc(E_(d),f,b,(-536870789));default:}return c;}
function Xx(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fw;while(true){a:{e=a.g;f=e.bf;if((f&(-2147418113))==(-2147483608)){Bg(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dj=g;else{if(f!=(-1073741784))g=a.dj;c=X3(a,f,g,b);e=a.g;if(e.bf!=(-536870871))J(B8(B(31),e.bK,e.c8));Bg(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bg(e);c
=AQg(0);break a;case -2147483577:Bg(e);c=new Ok;BL(c);break a;case -2147483558:Bg(e);c=new Xg;h=a.br+1|0;a.br=h;ADN(c,h);break a;case -2147483550:Bg(e);c=AQg(1);break a;case -2147483526:Bg(e);c=new W0;BL(c);break a;case -536870876:Bg(e);a.br=a.br+1|0;if(B9(a,8)){if(B9(a,1)){c=ATq(a.br);break a;}c=ASI(a.br);break a;}if(B9(a,1)){c=ATF(a.br);break a;}c=AUg(a.br);break a;case -536870866:Bg(e);if(B9(a,32)){c=AUz();break a;}c=AUa(Pk(a.dj));break a;case -536870821:Bg(e);i=0;c=a.g;if(c.bf==(-536870818)){i=1;Bg(c);}c
=KR(a,F2(a,i));c.M(b);e=a.g;if(e.bf!=(-536870819))J(B8(B(31),e.bK,e.c8));OQ(e,1);Bg(a.g);break a;case -536870818:Bg(e);a.br=a.br+1|0;if(!B9(a,8)){c=new Kq;BL(c);break a;}c=new Nt;e=Pk(a.dj);BL(c);c.qS=e;break a;case 0:j=e.eF;if(j!==null)c=KR(a,j);else{if(Di(e)){c=GJ(b);break a;}c=Z_(f&65535);}Bg(a.g);break a;default:break b;}Bg(e);c=new Kq;BL(c);break a;}h=(f&2147483647)-48|0;if(a.f9<h)J(B8(B(31),Fj(e),Oa(a.g)));Bg(e);a.br=a.br+1|0;c=!B9(a,2)?ASP(h,a.br):B9(a,64)?ATr(h,a.br):AUJ(h,a.br);a.jY.data[h].jW=1;a.m_
=1;break a;}if(f>=0&&!GL(e)){c=XV(a,f);Bg(a.g);}else if(f==(-536870788))c=GJ(b);else{if(f!=(-536870871)){b=new IO;c=!GL(a.g)?Xf(f&65535):a.g.eF.ct();e=a.g;Jj(b,c,e.bK,e.c8);J(b);}if(d){b=new IO;e=a.g;Jj(b,B(31),e.bK,e.c8);J(b);}c=GJ(b);}}}if(f!=(-16777176))break;}return c;}
function F2(a,b){var c,d,e,f,g,h,i,j,$$je;c=AQO(B9(a,2),B9(a,64));Et(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Di(a.g))break a;h=a.g;b=h.bf;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cu(c,d);d=Bg(a.g);h=a.g;if(h.bf!=(-536870874)){d=38;break d;}if(h.j==(-536870821)){Bg(h);e=1;d=(-1);break d;}Bg(h);if(g){c=F2(a,0);break d;}if(a.g.bf==(-536870819))break d;W6(c,F2(a,0));break d;case -536870867:if(!g){b=h.j;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bg(h);h=a.g;i=h.bf;if(GL(h))break c;if
(i<0){j=a.g.j;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Kj(i))break e;i=i&65535;break e;}catch($$e){$$je=Ei($$e);if($$je instanceof D3){break b;}else{throw $$e;}}}try{BS(c,d,i);}catch($$e){$$je=Ei($$e);if($$je instanceof D3){break b;}else{throw $$e;}}Bg(a.g);d=(-1);break d;}}if(d>=0)Cu(c,d);d=45;Bg(a.g);break d;case -536870821:if(d>=0){Cu(c,d);d=(-1);}Bg(a.g);j=0;h=a.g;if(h.bf==(-536870818)){Bg(h);j=1;}if(!e)YG(c,F2(a,j));else W6(c,F2(a,j));e=0;Bg(a.g);break d;case -536870819:if(d>=0)Cu(c,
d);d=93;Bg(a.g);break d;case -536870818:if(d>=0)Cu(c,d);d=94;Bg(a.g);break d;case 0:if(d>=0)Cu(c,d);h=a.g.eF;if(h===null)d=0;else{AEN(c,h);d=(-1);}Bg(a.g);break d;default:}if(d>=0)Cu(c,d);d=Bg(a.g);}g=0;}J(B8(B(31),JW(a),a.g.c8));}J(B8(B(31),JW(a),a.g.c8));}if(!f){if(d>=0)Cu(c,d);return c;}J(B8(B(31),JW(a),a.g.c8-1|0));}
function XV(a,b){var c,d,e;c=L7(b);if(B9(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AG3(b&65535);}if(B9(a,64)&&b>128){if(c){d=new MF;Dz(d);d.bH=2;d.qi=Gz(Gw(b));return d;}if(OZ(b))return AM0(b&65535);if(!SM(b))return AOA(b&65535);return AKl(b&65535);}}if(!c){if(OZ(b))return AM0(b&65535);if(!SM(b))return Z_(b&65535);return AKl(b&65535);}d=new DU;Dz(d);d.bH=2;d.fy=b;e=(Go(b)).data;d.jr=e[0];d.h4=e[1];return d;}
function KR(a,b){var c,d,e;if(!AB5(b)){if(!b.K){if(b.gI())return AJK(b);return AQi(b);}if(!b.gI())return AK5(b);c=new Ja;UA(c,b);return c;}c=Y$(b);d=new MY;BL(d);d.oY=c;d.vB=c.be;if(!b.K){if(b.gI())return ACN(AJK(Hs(b)),d);return ACN(AQi(Hs(b)),d);}if(!b.gI())return ACN(AK5(Hs(b)),d);c=new Qh;e=new Ja;UA(e,Hs(b));AEu(c,e,d);return c;}
function Ht(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B9(a,b){return (a.dj&b)!=b?0:1;}
function N_(){C.call(this);this.sb=null;}
function ASl(a,b){b.dL=a.sb.dL;}
var Gp=F(Cj);
var AYr=null;var AYq=null;var AYw=null;function U8(){U8=Bl(Gp);AIi();}
function AKI(a,b){var c=new Gp();Z5(c,a,b);return c;}
function Z5(a,b,c){U8();C_(a,b,c);}
function AIi(){var b;AYr=AKI(B(407),0);b=AKI(B(408),1);AYq=b;AYw=H(Gp,[AYr,b]);}
function Tc(){C.call(this);this.sG=null;}
function ALg(a,b){Dt(a.sG,b);}
function BA(){var a=this;C.call(a);a.d=null;a.cg=0;a.og=null;a.hn=0;}
var AVm=0;function BL(a){var b,c;b=new Fg;c=AVm;AVm=c+1|0;J0(b,c);a.og=L$(b);}
function KO(a,b){var c,d;c=new Fg;d=AVm;AVm=d+1|0;J0(c,d);a.og=L$(c);a.d=b;}
function HB(a,b,c,d){var e;e=d.w;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function HQ(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHw(a,b){a.hn=b;}
function AGH(a){return a.hn;}
function APK(a){return a.d;}
function AQE(a,b){a.d=b;}
function AQB(a,b){return 1;}
function ARw(a){return null;}
function I7(a){var b;a.cg=1;b=a.d;if(b!==null){if(!b.cg){b=b.fc();if(b!==null){a.d.cg=1;a.d=b;}a.d.d_();}else if(b instanceof Gs&&b.ed.jW)a.d=b.d;}}
function AEF(){AVm=1;}
var UJ=F();
var AYp=null;function AS0(){AS0=Bl(UJ);AGl();}
function AGl(){var b,c;U8();b=BC((AYw.eI()).data.length);c=b.data;AYp=b;c[AYr.cZ]=1;c[AYq.cZ]=2;}
function Pg(){C.call(this);this.pL=null;}
function AHG(a,b){UB(ID(a.pL),b,AW0,Y6(B(409)));}
function Wc(){C.call(this);this.tZ=null;}
function AJl(a,b){var c,d;c=a.tZ;d=b.hj;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function Yv(){var a=this;C.call(a);a.pK=null;a.pJ=null;}
function AHr(a){var b,c;b=a.pK;c=a.pJ;b.hM.sK(c);}
function CN(){var a=this;BA.call(a);a.jW=0;a.ds=0;}
var AYv=null;function Ml(){Ml=Bl(CN);AIL();}
function AUb(a){var b=new CN();Fm(b,a);return b;}
function Fm(a,b){Ml();BL(a);a.ds=b;}
function AGa(a,b,c,d){var e,f;e=It(d,a.ds);JA(d,a.ds,b);f=a.d.c(b,c,d);if(f<0)JA(d,a.ds,e);return f;}
function AL8(a){return a.ds;}
function AGv(a,b){return 0;}
function AIL(){var b;b=new Of;BL(b);AYv=b;}
function GG(){var a=this;C.call(a);a.bc=null;a.fR=0;a.ew=0;a.tO=0;a.kk=0;a.bf=0;a.j=0;a.rn=0;a.eF=null;a.eu=null;a.u=0;a.hy=0;a.c8=0;a.g1=0;a.bK=null;}
var AYx=null;var AYt=null;var AYu=0;function OQ(a,b){if(b>0&&b<3)a.ew=b;if(b==1){a.j=a.bf;a.eu=a.eF;a.u=a.g1;a.g1=a.c8;E3(a);}}
function GL(a){return a.eF===null?0:1;}
function JJ(a){return a.eu===null?0:1;}
function Bg(a){E3(a);return a.kk;}
function E_(a){var b;b=a.eF;E3(a);return b;}
function E3(a){var b,c,d,e,f,g,h,$$je;a.kk=a.bf;a.bf=a.j;a.eF=a.eu;a.c8=a.g1;a.g1=a.u;while(true){b=0;c=a.u>=a.bc.data.length?0:LG(a);a.j=c;a.eu=null;if(a.ew==4){if(c!=92)return;c=a.u;d=a.bc.data;c=c>=d.length?0:d[BT(a)];a.j=c;switch(c){case 69:break;default:a.j=92;a.u=a.hy;return;}a.ew=a.tO;a.j=a.u>(a.bc.data.length-2|0)?0:LG(a);}a:{c=a.j;if(c!=92){e=a.ew;if(e==1)switch(c){case 36:a.j=(-536870876);break a;case 40:if(a.bc.data[a.u]!=63){a.j=(-2147483608);break a;}BT(a);c=a.bc.data[a.u];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.j=(-134217688);BT(a);break b;default:J(B8(B(31),Fj(a),a.u));}a.j=(-67108824);BT(a);}else{switch(c){case 33:break;case 60:BT(a);c=a.bc.data[a.u];e=1;break b;case 61:a.j=(-536870872);BT(a);break b;case 62:a.j=(-33554392);BT(a);break b;default:f=AEG(a);a.j=f;if(f<256){a.fR=f;f=f<<16;a.j=f;a.j=(-1073741784)|f;break b;}f=f&255;a.j=f;a.fR=f;f=f<<16;a.j=f;a.j=(-16777176)|f;break b;}a.j=(-268435416);BT(a);}}if(!e)break;}break a;case 41:a.j=(-536870871);break a;case 42:case 43:case 63:e
=a.u;d=a.bc.data;switch(e>=d.length?42:d[e]){case 43:a.j=c|(-2147483648);BT(a);break a;case 63:a.j=c|(-1073741824);BT(a);break a;default:}a.j=c|(-536870912);break a;case 46:a.j=(-536870866);break a;case 91:a.j=(-536870821);OQ(a,2);break a;case 93:if(e!=2)break a;a.j=(-536870819);break a;case 94:a.j=(-536870818);break a;case 123:a.eu=AD$(a,c);break a;case 124:a.j=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.j=(-536870874);break a;case 45:a.j=(-536870867);break a;case 91:a.j=(-536870821);break a;case 93:a.j
=(-536870819);break a;case 94:a.j=(-536870818);break a;default:}}else{c=a.u>=(a.bc.data.length-2|0)?(-1):LG(a);c:{a.j=c;switch(c){case -1:J(B8(B(31),Fj(a),a.u));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.j
=ACx(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ew!=1)break a;a.j=(-2147483648)|c;break a;case 65:a.j=(-2147483583);break a;case 66:a.j=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B8(B(31),Fj(a),a.u));case 68:case 83:case 87:case 100:case 115:case 119:a.eu=Se(Hu(a.bc,
a.hy,1),0);a.j=0;break a;case 71:a.j=(-2147483577);break a;case 80:case 112:break c;case 81:a.tO=a.ew;a.ew=4;b=1;break a;case 90:a.j=(-2147483558);break a;case 97:a.j=7;break a;case 98:a.j=(-2147483550);break a;case 99:c=a.u;d=a.bc.data;if(c>=(d.length-2|0))J(B8(B(31),Fj(a),a.u));a.j=d[BT(a)]&31;break a;case 101:a.j=27;break a;case 102:a.j=12;break a;case 110:a.j=10;break a;case 114:a.j=13;break a;case 116:a.j=9;break a;case 117:a.j=PI(a,4);break a;case 120:a.j=PI(a,2);break a;case 122:a.j=(-2147483526);break a;default:}break a;}g
=ACh(a);h=0;if(a.j==80)h=1;try{a.eu=Se(g,h);}catch($$e){$$je=Ei($$e);if($$je instanceof Jd){J(B8(B(31),Fj(a),a.u));}else{throw $$e;}}a.j=0;}}if(b)continue;else break;}}
function ACh(a){var b,c,d,e,f,g;b=new M;FW(b,10);c=a.u;d=a.bc;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Hu(d,BT(a),1);f=new M;O(f);G(G(f,B(410)),b);return N(f);}BT(a);c=0;a:{while(true){g=a.u;d=a.bc.data;if(g>=(d.length-2|0))break;c=d[BT(a)];if(c==125)break a;BB(b,c);}}if(c!=125)J(B8(B(31),a.bK,a.u));}if(!b.N)J(B8(B(31),a.bK,a.u));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(410)),f);return N(b);}b:{c:{if(I(f)>3){if(KF(f,B(410)))break c;if(KF(f,B(411)))break c;}break b;}f=Dj(f,2);}return f;}
function AD$(a,b){var c,d,e,f,g,$$je;c=new M;FW(c,4);d=(-1);e=2147483647;a:{while(true){f=a.u;g=a.bc.data;if(f>=g.length)break a;b=g[BT(a)];if(b==125)break a;if(b==44&&d<0)try{d=Jw(DT(c),10);AEd(c,0,Zl(c));continue;}catch($$e){$$je=Ei($$e);if($$je instanceof Dd){break;}else{throw $$e;}}BB(c,b&65535);}J(B8(B(31),a.bK,a.u));}if(b!=125)J(B8(B(31),a.bK,a.u));if(c.N>0)b:{try{e=Jw(DT(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ei($$e);if($$je instanceof Dd){}else{throw $$e;}}J(B8(B(31),a.bK,a.u));}else if
(d<0)J(B8(B(31),a.bK,a.u));if((d|e|(e-d|0))<0)J(B8(B(31),a.bK,a.u));b=a.u;g=a.bc.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.j=(-2147483525);BT(a);break c;case 63:a.j=(-1073741701);BT(a);break c;default:}a.j=(-536870789);}c=new M9;c.ev=d;c.er=e;return c;}
function Fj(a){return a.bK;}
function Di(a){return !a.bf&&!a.j&&a.u==a.rn&&!GL(a)?1:0;}
function Kj(b){return b<0?0:1;}
function E0(a){return !Di(a)&&!GL(a)&&Kj(a.bf)?1:0;}
function Oc(a){var b;b=a.bf;return b<=56319&&b>=55296?1:0;}
function Vv(a){var b;b=a.bf;return b<=57343&&b>=56320?1:0;}
function SM(b){return b<=56319&&b>=55296?1:0;}
function OZ(b){return b<=57343&&b>=56320?1:0;}
function PI(a,b){var c,d,e,f,$$je;c=new M;FW(c,b);d=a.bc.data.length-2|0;e=0;while(true){f=BE(e,b);if(f>=0)break;if(a.u>=d)break;BB(c,a.bc.data[BT(a)]);e=e+1|0;}if(!f)a:{try{b=Jw(DT(c),16);}catch($$e){$$je=Ei($$e);if($$je instanceof Dd){break a;}else{throw $$e;}}return b;}J(B8(B(31),a.bK,a.u));}
function ACx(a){var b,c,d,e,f,g;b=3;c=1;d=a.bc.data;e=d.length-2|0;f=U4(d[a.u],8);switch(f){case -1:break;default:if(f>3)b=2;BT(a);a:{while(true){if(c>=b)break a;g=a.u;if(g>=e)break a;g=U4(a.bc.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BT(a);c=c+1|0;}}return f;}J(B8(B(31),a.bK,a.u));}
function AEG(a){var b,c,d,e;b=1;c=a.fR;a:while(true){d=a.u;e=a.bc.data;if(d>=e.length)J(B8(B(31),a.bK,d));b:{c:{switch(e[d]){case 41:BT(a);return c|256;case 45:if(!b)J(B8(B(31),a.bK,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BT(a);}BT(a);return c;}
function BT(a){var b,c,d,e,f;b=a.u;a.hy=b;if(!(a.fR&4))a.u=b+1|0;else{c=a.bc.data.length-2|0;a.u=b+1|0;a:while(true){d=a.u;if(d<c&&Rd(a.bc.data[d])){a.u=a.u+1|0;continue;}d=a.u;if(d>=c)break;e=a.bc.data;if(e[d]!=35)break;a.u=d+1|0;while(true){f=a.u;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.u=f+1|0;}}}return a.hy;}
function AD1(b){return AYx.Cw(b);}
function LG(a){var b,c,d,e;b=a.bc.data[BT(a)];if(CD(b)){c=a.hy+1|0;d=a.bc.data;if(c<d.length){e=d[c];if(C4(e)){BT(a);return Eu(b,e);}}}return b;}
function Oa(a){return a.c8;}
function IO(){var a=this;BD.call(a);a.xl=null;a.wY=null;a.p5=0;}
function B8(a,b,c){var d=new IO();Jj(d,a,b,c);return d;}
function Jj(a,b,c,d){V(a);a.p5=(-1);a.xl=b;a.wY=c;a.p5=d;}
function Xk(){C.call(this);this.tB=null;}
function ANZ(a,b){var c,d;c=a.tB;d=0;while(d<b.length){Zi(c,b[d]);d=d+1|0;}}
var ACb=F(0);
function Uu(){var a=this;C.call(a);a.o4=null;a.o6=null;a.o8=null;}
function ANz(a,b){a.o4.l(ASJ(a.o6,b,a.o8));}
var R0=F(CN);
function AFK(a,b,c,d){var e;e=a.ds;BG(d,e,b-Dl(d,e)|0);return a.d.c(b,c,d);}
function APd(a,b){return 0;}
var XY=F(CN);
function AHu(a,b,c,d){return b;}
var PK=F(CN);
function AGE(a,b,c,d){if(Dl(d,a.ds)!=b)b=(-1);return b;}
function S9(){CN.call(this);this.mZ=0;}
function AFP(a,b,c,d){var e;e=a.ds;BG(d,e,b-Dl(d,e)|0);a.mZ=b;return b;}
function ANK(a,b){return 0;}
var Fw=F(CN);
function AQW(a,b,c,d){if(d.je!=1&&b!=d.w)return (-1);d.iA=1;JA(d,0,b);return b;}
function BV(){BA.call(this);this.bH=0;}
function Dz(a){BL(a);a.bH=1;}
function ARY(a,b,c,d){var e;if((b+a.bX()|0)>d.w){d.dg=1;return (-1);}e=a.bq(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AP8(a){return a.bH;}
function AKJ(a,b){return 1;}
var ADL=F(BV);
function GJ(a){var b=new ADL();AMf(b,a);return b;}
function AMf(a,b){KO(a,b);a.bH=1;a.hn=1;a.bH=0;}
function APC(a,b,c){return 0;}
function AIS(a,b,c,d){var e,f,g;e=d.w;f=d.cG;while(true){g=BE(b,e);if(g>0)return (-1);if(g<0&&C4(L(c,b))&&b>f&&CD(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AHi(a,b,c,d,e){var f,g;f=e.w;g=e.cG;while(true){if(c<b)return (-1);if(c<f&&C4(L(d,c))&&c>g&&CD(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFN(a,b){return 0;}
function BR(){var a=this;BA.call(a);a.by=null;a.ed=null;a.X=0;}
function ATz(a,b){var c=new BR();Fx(c,a,b);return c;}
function Fx(a,b,c){BL(a);a.by=b;a.ed=c;a.X=c.ds;}
function AJu(a,b,c,d){var e,f,g,h;if(a.by===null)return (-1);e=FA(d,a.X);Dy(d,a.X,b);f=a.by.i;g=0;while(true){if(g>=f){Dy(d,a.X,e);return (-1);}h=(Bt(a.by,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANC(a,b){a.ed.d=b;}
function ALw(a,b){var c;a:{c=a.by;if(c!==null){c=BU(c);while(true){if(!B5(c))break a;if(!(BY(c)).bR(b))continue;else return 1;}}}return 0;}
function AOm(a,b){return It(b,a.X)>=0&&FA(b,a.X)==It(b,a.X)?0:1;}
function AHe(a){var b,c,d,e;a.cg=1;b=a.ed;if(b!==null&&!b.cg)I7(b);a:{b=a.by;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bt(a.by,d);e=b.fc();if(e===null)e=b;else{b.cg=1;En(a.by,d);RF(a.by,d,e);}if(!e.cg)e.d_();d=d+1|0;}}}if(a.d!==null)I7(a);}
var I0=F(BR);
function ANk(a,b,c,d){var e,f,g,h;e=Dl(d,a.X);BG(d,a.X,b);f=a.by.i;g=0;while(true){if(g>=f){BG(d,a.X,e);return (-1);}h=(Bt(a.by,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AOO(a,b){return !Dl(b,a.X)?0:1;}
var DQ=F(I0);
function AH0(a,b,c,d){var e,f,g;e=Dl(d,a.X);BG(d,a.X,b);f=a.by.i;g=0;while(g<f){if((Bt(a.by,g)).c(b,c,d)>=0)return a.d.c(a.ed.mZ,c,d);g=g+1|0;}BG(d,a.X,e);return (-1);}
function AOt(a,b){a.d=b;}
var MO=F(DQ);
function ANu(a,b,c,d){var e,f;e=a.by.i;f=0;while(f<e){if((Bt(a.by,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AQJ(a,b){return 0;}
var Wo=F(DQ);
function AGq(a,b,c,d){var e,f;e=a.by.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bt(a.by,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AQb(a,b){return 0;}
var Rf=F(DQ);
function AG$(a,b,c,d){var e,f,g,h;e=a.by.i;f=d.iI?0:d.cG;a:{g=a.d.c(b,c,d);if(g>=0){BG(d,a.X,b);h=0;while(true){if(h>=e)break a;if((Bt(a.by,h)).cn(f,b,c,d)>=0){BG(d,a.X,(-1));return g;}h=h+1|0;}}}return (-1);}
function ASp(a,b){return 0;}
var TT=F(DQ);
function AFi(a,b,c,d){var e,f;e=a.by.i;BG(d,a.X,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bt(a.by,f)).cn(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AO3(a,b){return 0;}
function Gs(){BR.call(this);this.cU=null;}
function ATZ(a,b){var c=new Gs();ZW(c,a,b);return c;}
function ZW(a,b,c){BL(a);a.cU=b;a.ed=c;a.X=c.ds;}
function AFE(a,b,c,d){var e,f;e=FA(d,a.X);Dy(d,a.X,b);f=a.cU.c(b,c,d);if(f>=0)return f;Dy(d,a.X,e);return (-1);}
function ALR(a,b,c,d){var e;e=a.cU.ci(b,c,d);if(e>=0)Dy(d,a.X,e);return e;}
function APj(a,b,c,d,e){var f;f=a.cU.cn(b,c,d,e);if(f>=0)Dy(e,a.X,f);return f;}
function ALr(a,b){return a.cU.bR(b);}
function ANG(a){var b;b=new Nb;ZW(b,a.cU,a.ed);a.d=b;return b;}
function ARz(a){var b;a.cg=1;b=a.ed;if(b!==null&&!b.cg)I7(b);b=a.cU;if(b!==null&&!b.cg){b=b.fc();if(b!==null){a.cU.cg=1;a.cU=b;}a.cU.d_();}}
var GI=F();
function U(){var a=this;GI.call(a);a.be=0;a.cd=0;a.J=null;a.jk=null;a.jP=null;a.K=0;}
var AYy=null;function OK(){OK=Bl(U);AHI();}
function Bs(a){var b;OK();b=new Xe;b.z=BC(64);a.J=b;}
function AGs(a){return null;}
function AFZ(a){return a.J;}
function AB5(a){var b,c,d,e,f;if(!a.cd)b=Ha(a.J,0)>=2048?0:1;else{a:{c=a.J;b=0;d=c.bo;if(b<d){e=c.z.data;f=(e[0]^(-1))>>>0|0;if(f)b=Ij(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Ij(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AJJ(a){return a.K;}
function AP2(a){return a;}
function Y$(a){var b,c;if(a.jP===null){b=a.eE();c=new WC;c.xL=a;c.nr=b;Bs(c);a.jP=c;Et(c,a.cd);}return a.jP;}
function Hs(a){var b,c;if(a.jk===null){b=a.eE();c=new WA;c.xo=a;c.tg=b;c.t2=a;Bs(c);a.jk=c;Et(c,a.be);a.jk.K=a.K;}return a.jk;}
function ARv(a){return 0;}
function Et(a,b){var c;c=a.be;if(c^b){a.be=c?0:1;a.cd=a.cd?0:1;}if(!a.K)a.K=1;return a;}
function AIU(a){return a.be;}
function Kg(b,c){OK();return b.k(c);}
function Ih(b,c){var d,e;OK();if(b.dd()!==null&&c.dd()!==null){b=b.dd();c=c.dd();d=Ba(b.z.data.length,c.z.data.length);e=0;a:{while(e<d){if(b.z.data[e]&c.z.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Se(b,c){var d,e,f;OK();d=0;while(true){AO1();e=AYz.data;if(d>=e.length){f=new Jd;Bn(f,B(31));f.x9=B(31);f.xO=b;J(f);}e=e[d].data;if(Bo(b,e[0]))break;d=d+1|0;}return ADc(e[1],c);}
function AHI(){var b;b=new G2;AO1();AYy=b;}
function ZL(){var a=this;U.call(a);a.k3=0;a.mX=0;a.f$=0;a.kE=0;a.dI=0;a.e9=0;a.F=null;a.bw=null;}
function Dm(){var a=new ZL();AR8(a);return a;}
function AQO(a,b){var c=new ZL();AHv(c,a,b);return c;}
function AR8(a){Bs(a);a.F=ASr();}
function AHv(a,b,c){Bs(a);a.F=ASr();a.k3=b;a.mX=c;}
function Cu(a,b){a:{if(a.k3){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dI){Mu(a.F,Ht(b&65535));break a;}LB(a.F,Ht(b&65535));break a;}if(a.mX&&b>128){a.f$=1;b=Gz(Gw(b));}}}if(!(!SM(b)&&!OZ(b))){if(a.kE)Mu(a.J,b-55296|0);else LB(a.J,b-55296|0);}if(a.dI)Mu(a.F,b);else LB(a.F,b);if(!a.K&&L7(b))a.K=1;return a;}
function AEN(a,b){var c,d,e;if(!a.K&&b.K)a.K=1;if(a.kE){if(!b.cd)FQ(a.J,b.eE());else Da(a.J,b.eE());}else if(!b.cd)FJ(a.J,b.eE());else{Fr(a.J,b.eE());Da(a.J,b.eE());a.cd=a.cd?0:1;a.kE=1;}if(!a.e9&&b.dd()!==null){if(a.dI){if(!b.be)FQ(a.F,b.dd());else Da(a.F,b.dd());}else if(!b.be)FJ(a.F,b.dd());else{Fr(a.F,b.dd());Da(a.F,b.dd());a.be=a.be?0:1;a.dI=1;}}else{c=a.be;d=a.bw;if(d!==null){if(!c){e=new OD;e.v0=a;e.uw=c;e.tK=d;e.tz=b;Bs(e);a.bw=e;}else{e=new OE;e.yf=a;e.qK=c;e.qn=d;e.pB=b;Bs(e);a.bw=e;}}else{if(c&&!a.dI
&&L_(a.F)){d=new OA;d.wX=a;d.qx=b;Bs(d);a.bw=d;}else if(!c){d=new Oy;d.kn=a;d.jB=c;d.n6=b;Bs(d);a.bw=d;}else{d=new Oz;d.le=a;d.jI=c;d.tE=b;Bs(d);a.bw=d;}a.e9=1;}}return a;}
function BS(a,b,c){var d,e,f,g,h;if(b>c){d=new BD;V(d);J(d);}a:{b:{if(!a.k3){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cu(a,b);b=b+1|0;}}if(!a.dI)HX(a.F,b,c+1|0);else{d=a.F;c=c+1|0;if(b>c){d=new Bx;V(d);J(d);}e=d.bo;if(b<e){f=Ba(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.z.data;h[g]=h[g]&(Ic(d,b)|HI(d,f));}else{h=d.z.data;h[g]=h[g]&Ic(d,b);e=g+1|0;while(e<c){d.z.data[e]=0;e=e+1|0;}if(f&31){h=d.z.data;h[c]=h[c]&HI(d,f);}}G6(d);}}}}return a;}
function YG(a,b){var c,d,e;if(!a.K&&b.K)a.K=1;if(b.f$)a.f$=1;c=a.cd;if(!(c^b.cd)){if(!c)FJ(a.J,b.J);else Da(a.J,b.J);}else if(c)FQ(a.J,b.J);else{Fr(a.J,b.J);Da(a.J,b.J);a.cd=1;}if(!a.e9&&CT(b)!==null){c=a.be;if(!(c^b.be)){if(!c)FJ(a.F,CT(b));else Da(a.F,CT(b));}else if(c)FQ(a.F,CT(b));else{Fr(a.F,CT(b));Da(a.F,CT(b));a.be=1;}}else{c=a.be;d=a.bw;if(d!==null){if(!c){e=new Ot;e.vG=a;e.sJ=c;e.tC=d;e.ud=b;Bs(e);a.bw=e;}else{e=new Pc;e.v$=a;e.ua=c;e.mB=d;e.m1=b;Bs(e);a.bw=e;}}else{if(!a.dI&&L_(a.F)){if(!c){d=new OB;d.yl
=a;d.pe=b;Bs(d);a.bw=d;}else{d=new OC;d.wd=a;d.tY=b;Bs(d);a.bw=d;}}else if(!c){d=new OF;d.sM=a;d.q2=b;d.qs=c;Bs(d);a.bw=d;}else{d=new OG;d.rq=a;d.rN=b;d.r3=c;Bs(d);a.bw=d;}a.e9=1;}}}
function W6(a,b){var c,d,e;if(!a.K&&b.K)a.K=1;if(b.f$)a.f$=1;c=a.cd;if(!(c^b.cd)){if(!c)Da(a.J,b.J);else FJ(a.J,b.J);}else if(!c)FQ(a.J,b.J);else{Fr(a.J,b.J);Da(a.J,b.J);a.cd=0;}if(!a.e9&&CT(b)!==null){c=a.be;if(!(c^b.be)){if(!c)Da(a.F,CT(b));else FJ(a.F,CT(b));}else if(!c)FQ(a.F,CT(b));else{Fr(a.F,CT(b));Da(a.F,CT(b));a.be=0;}}else{c=a.be;d=a.bw;if(d!==null){if(!c){e=new Ov;e.vZ=a;e.sS=c;e.no=d;e.qG=b;Bs(e);a.bw=e;}else{e=new Ow;e.wl=a;e.sh=c;e.mq=d;e.sI=b;Bs(e);a.bw=e;}}else{if(!a.dI&&L_(a.F)){if(!c){d=new Oq;d.wh
=a;d.oP=b;Bs(d);a.bw=d;}else{d=new Or;d.yb=a;d.oU=b;Bs(d);a.bw=d;}}else if(!c){d=new Ox;d.vl=a;d.us=b;d.rF=c;Bs(d);a.bw=d;}else{d=new Op;d.rD=a;d.sm=b;d.qM=c;Bs(d);a.bw=d;}a.e9=1;}}}
function CY(a,b){var c;c=a.bw;if(c!==null)return a.be^c.k(b);return a.be^Dv(a.F,b);}
function CT(a){if(!a.e9)return a.F;return null;}
function AIK(a){return a.J;}
function AQp(a){var b,c;if(a.bw!==null)return a;b=CT(a);c=new Ou;c.vC=a;c.h7=b;Bs(c);return Et(c,a.be);}
function AMI(a){var b,c,d;b=new M;O(b);c=Ha(a.F,0);while(c>=0){Ik(b,Go(c));BB(b,124);c=Ha(a.F,c+1|0);}d=b.N;if(d>0)Wq(b,d-1|0);return N(b);}
function AIX(a){return a.f$;}
function Jd(){var a=this;Bq.call(a);a.x9=null;a.xO=null;}
function D2(){BA.call(this);this.I=null;}
function Dc(a,b,c,d){KO(a,c);a.I=b;a.hn=d;}
function AR7(a){return a.I;}
function APm(a,b){return !a.I.bR(b)&&!a.d.bR(b)?0:1;}
function AQQ(a,b){return 1;}
function AMd(a){var b;a.cg=1;b=a.d;if(b!==null&&!b.cg){b=b.fc();if(b!==null){a.d.cg=1;a.d=b;}a.d.d_();}b=a.I;if(b!==null){if(!b.cg){b=b.fc();if(b!==null){a.I.cg=1;a.I=b;}a.I.d_();}else if(b instanceof Gs&&b.ed.jW)a.I=b.d;}}
function C2(){D2.call(this);this.Z=null;}
function AT6(a,b,c){var d=new C2();ET(d,a,b,c);return d;}
function ET(a,b,c,d){Dc(a,b,c,d);a.Z=b;}
function AFk(a,b,c,d){var e,f;e=0;a:{while((b+a.Z.bX()|0)<=d.w){f=a.Z.bq(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.Z.bX()|0;e=e+(-1)|0;}return f;}
function E4(){C2.call(this);this.jd=null;}
function ATc(a,b,c,d){var e=new E4();So(e,a,b,c,d);return e;}
function So(a,b,c,d,e){ET(a,c,d,e);a.jd=b;}
function AGd(a,b,c,d){var e,f,g,h,i;e=a.jd;f=e.ev;g=e.er;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.Z.bX()|0)>d.w)break a;i=a.Z.bq(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.Z.bX()|0;h=h+(-1)|0;}return i;}if((b+a.Z.bX()|0)>d.w){d.dg=1;return (-1);}i=a.Z.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CP=F(D2);
function AFD(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.I.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Ez=F(C2);
function ALX(a,b,c,d){var e;e=a.I.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ASs(a,b){a.d=b;a.I.M(b);}
var WE=F(C2);
function ARQ(a,b,c,d){while((b+a.Z.bX()|0)<=d.w&&a.Z.bq(b,c)>0){b=b+a.Z.bX()|0;}return a.d.c(b,c,d);}
function AMF(a,b,c,d){var e,f,g;e=a.d.ci(b,c,d);if(e<0)return (-1);f=e-a.Z.bX()|0;while(f>=b&&a.Z.bq(f,c)>0){g=f-a.Z.bX()|0;e=f;f=g;}return e;}
function Y(){var a=this;C.call(a);a.lo=null;a.kl=null;}
function ADc(a,b){if(!b&&a.lo===null)a.lo=a.B();else if(b&&a.kl===null)a.kl=Et(a.B(),1);if(b)return a.kl;return a.lo;}
var Dd=F(BD);
function M9(){var a=this;GI.call(a);a.ev=0;a.er=0;}
function AMP(a){var b,c,d,e,f;b=a.ev;c=a.er;d=c==2147483647?B(31):L$(AD0(c));e=new M;O(e);BB(e,123);f=T(e,b);BB(f,44);BB(G(f,d),125);return N(e);}
var Of=F(BA);
function AK_(a,b,c,d){return b;}
function ANB(a,b){return 0;}
function Xe(){var a=this;C.call(a);a.z=null;a.bo=0;}
function ASr(){var a=new Xe();AGU(a);return a;}
function AGU(a){a.z=BC(0);}
function LB(a,b){var c,d;c=b/32|0;if(b>=a.bo){Ip(a,c+1|0);a.bo=b+1|0;}d=a.z.data;d[c]=d[c]|1<<(b%32|0);}
function HX(a,b,c){var d,e,f,g,h;d=BE(b,c);if(d>0){e=new Bx;V(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bo){Ip(a,f+1|0);a.bo=c;}if(d==f){g=a.z.data;g[d]=g[d]|HI(a,b)&Ic(a,c);}else{g=a.z.data;g[d]=g[d]|HI(a,b);h=d+1|0;while(h<f){a.z.data[h]=(-1);h=h+1|0;}if(c&31){g=a.z.data;g[f]=g[f]|Ic(a,c);}}}
function HI(a,b){return (-1)<<(b%32|0);}
function Ic(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Mu(a,b){var c,d;c=b/32|0;d=a.z.data;if(c<d.length){d[c]=d[c]&Kc((-2),b%32|0);if(b==(a.bo-1|0))G6(a);}}
function Dv(a,b){var c,d;c=b/32|0;d=a.z.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Ha(a,b){var c,d,e,f;c=a.bo;if(b>=c)return (-1);d=b/32|0;e=a.z.data;f=e[d]>>>(b%32|0)|0;if(f)return Ij(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Ij(e[f])|0;f=f+1|0;}return (-1);}
function Ip(a,b){var c;c=a.z.data.length;if(c>=b)return;c=Bc((b*3|0)/2|0,(c*2|0)+1|0);a.z=Mf(a.z,c);}
function G6(a){var b,c,d;b=(a.bo+31|0)/32|0;a.bo=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NP(a.z.data[c]);if(d<32)break;c=c+(-1)|0;a.bo=a.bo-32|0;}a.bo=a.bo-d|0;}}
function Da(a,b){var c,d,e,f;c=Ba(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&b.z.data[d];d=d+1|0;}while(true){f=a.z.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bo=Ba(a.bo,b.bo);G6(a);}
function FQ(a,b){var c,d,e;c=Ba(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&(b.z.data[d]^(-1));d=d+1|0;}G6(a);}
function FJ(a,b){var c,d,e;c=Bc(a.bo,b.bo);a.bo=c;Ip(a,(c+31|0)/32|0);c=Ba(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]|b.z.data[d];d=d+1|0;}}
function Fr(a,b){var c,d,e;c=Bc(a.bo,b.bo);a.bo=c;Ip(a,(c+31|0)/32|0);c=Ba(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]^b.z.data[d];d=d+1|0;}G6(a);}
function L_(a){return a.bo?0:1;}
function MY(){var a=this;BR.call(a);a.oY=null;a.vB=0;}
function Qh(){var a=this;BR.call(a);a.lN=null;a.lh=null;}
function ACN(a,b){var c=new Qh();AEu(c,a,b);return c;}
function AEu(a,b,c){BL(a);a.lN=b;a.lh=c;}
function AF$(a,b,c,d){var e,f,g,h,i;e=a.lN.c(b,c,d);if(e<0)a:{f=a.lh;g=d.cG;e=d.w;h=b+1|0;e=BE(h,e);if(e>0){d.dg=1;e=(-1);}else{i=L(c,b);if(!f.oY.k(i))e=(-1);else{if(CD(i)){if(e<0&&C4(L(c,h))){e=(-1);break a;}}else if(C4(i)&&b>g&&CD(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function ANg(a,b){a.d=b;a.lh.d=b;a.lN.M(b);}
function AGJ(a,b){return 1;}
function AGr(a,b){return 1;}
function DA(){var a=this;BR.call(a);a.dB=null;a.wQ=0;}
function AK5(a){var b=new DA();UA(b,a);return b;}
function UA(a,b){BL(a);a.dB=b.iR();a.wQ=b.be;}
function AIB(a,b,c,d){var e,f,g,h;e=d.w;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Hj(g,f)&&a.k(Eu(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AI_(a,b){return a.dB.k(b);}
function AF4(a,b){if(b instanceof DU)return Kg(a.dB,b.fy);if(b instanceof El)return Kg(a.dB,b.c_);if(b instanceof DA)return Ih(a.dB,b.dB);if(!(b instanceof Eg))return 1;return Ih(a.dB,b.eS);}
function AKZ(a){return a.dB;}
function APW(a,b){a.d=b;}
function AIP(a,b){return 1;}
var Ja=F(DA);
function AKK(a,b){return a.dB.k(Gz(Gw(b)));}
function ZA(){var a=this;BV.call(a);a.pW=null;a.wC=0;}
function AJK(a){var b=new ZA();AMU(b,a);return b;}
function AMU(a,b){Dz(a);a.pW=b.iR();a.wC=b.be;}
function ALa(a,b,c){return !a.pW.k(EX(Ey(L(c,b))))?(-1):1;}
function Eg(){var a=this;BV.call(a);a.eS=null;a.w_=0;}
function AQi(a){var b=new Eg();AN6(b,a);return b;}
function AN6(a,b){Dz(a);a.eS=b.iR();a.w_=b.be;}
function Mx(a,b,c){return !a.eS.k(L(c,b))?(-1):1;}
function ANE(a,b){if(b instanceof El)return Kg(a.eS,b.c_);if(b instanceof Eg)return Ih(a.eS,b.eS);if(!(b instanceof DA)){if(!(b instanceof DU))return 1;return 0;}return Ih(a.eS,b.dB);}
function OO(){var a=this;BR.call(a);a.gu=null;a.lB=null;a.ja=0;}
function AQv(a,b){var c=new OO();AFF(c,a,b);return c;}
function AFF(a,b,c){BL(a);a.gu=b;a.ja=c;}
function ALW(a,b){a.d=b;}
function Qt(a){if(a.lB===null)a.lB=FU(a.gu);return a.lB;}
function AE$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.w;f=BC(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?E6([k,l]):E6([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ja;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gu.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ja==3){k=f[0];m=a.gu.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ja==2){b=f[0];m=a.gu.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AGA(a,b){return b instanceof OO&&!Bo(Qt(b),Qt(a))?0:1;}
function AQu(a,b){return 1;}
function El(){BV.call(this);this.c_=0;}
function Z_(a){var b=new El();AN_(b,a);return b;}
function AN_(a,b){Dz(a);a.c_=b;}
function AKV(a){return 1;}
function AJF(a,b,c){return a.c_!=L(c,b)?(-1):1;}
function AIw(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return HB(a,b,c,d);e=d.w;while(true){if(b>=e)return (-1);f=GE(c,a.c_,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AK1(a,b,c,d,e){var f;if(!(d instanceof Bv))return HQ(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F0(d,a.c_,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AQl(a,b){if(b instanceof El)return b.c_!=a.c_?0:1;if(!(b instanceof Eg)){if(b instanceof DA)return b.k(a.c_);if(!(b instanceof DU))return 1;return 0;}return Mx(b,0,Xf(a.c_))<=0?0:1;}
function AEf(){BV.call(this);this.ml=0;}
function AOA(a){var b=new AEf();AMC(b,a);return b;}
function AMC(a,b){Dz(a);a.ml=EX(Ey(b));}
function AE5(a,b,c){return a.ml!=EX(Ey(L(c,b)))?(-1):1;}
function YI(){var a=this;BV.call(a);a.uh=0;a.ng=0;}
function AG3(a){var b=new YI();AOY(b,a);return b;}
function AOY(a,b){Dz(a);a.uh=b;a.ng=Ht(b);}
function AFw(a,b,c){return a.uh!=L(c,b)&&a.ng!=L(c,b)?(-1):1;}
function Fd(){var a=this;BR.call(a);a.hd=0;a.kb=null;a.jF=null;a.jA=0;}
function AUO(a,b){var c=new Fd();N3(c,a,b);return c;}
function N3(a,b,c){BL(a);a.hd=1;a.jF=b;a.jA=c;}
function ARy(a,b){a.d=b;}
function ANj(a,b,c,d){var e,f,g,h,i,j,k,l;e=BC(4);f=d.w;if(b>=f)return (-1);g=Kz(a,b,c,f);h=b+a.hd|0;i=AD1(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dw(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Kz(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AD1(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.hd|0;if(h>=f){b=k;break a;}g=Kz(a,h,c,f);b=k;}}}if(b!=a.jA)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jF.data[g])break;g=g+1|0;}return (-1);}
function W5(a){var b,c;if(a.kb===null){b=new M;O(b);c=0;while(c<a.jA){Ik(b,Go(a.jF.data[c]));c=c+1|0;}a.kb=N(b);}return a.kb;}
function Kz(a,b,c,d){var e,f,g;a.hd=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Hj(e,f)){g=BN(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CD(g[0])&&C4(g[1])?Eu(g[0],g[1]):g[0];a.hd=2;}}return e;}
function ALb(a,b){return b instanceof Fd&&!Bo(W5(b),W5(a))?0:1;}
function AOw(a,b){return 1;}
var Xz=F(Fd);
var T6=F(Fd);
var Ys=F(CP);
function AHz(a,b,c,d){var e;while(true){e=a.I.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var PC=F(CP);
function AMt(a,b,c,d){var e;e=a.I.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.I.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FO=F(CP);
function APR(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.I.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AQ1(a,b){a.d=b;a.I.M(b);}
var Ph=F(FO);
function AKY(a,b,c,d){var e;e=a.I.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AMQ(a,b){a.d=b;}
function Fa(){var a=this;CP.call(a);a.fM=null;a.di=0;}
function AYA(a,b,c,d,e){var f=new Fa();I$(f,a,b,c,d,e);return f;}
function I$(a,b,c,d,e,f){Dc(a,c,d,e);a.fM=b;a.di=f;}
function ASi(a,b,c,d){var e,f;e=M4(d,a.di);if(!a.I.H(d))return a.d.c(b,c,d);if(e>=a.fM.er)return a.d.c(b,c,d);f=a.di;e=e+1|0;Ed(d,f,e);f=a.I.c(b,c,d);if(f>=0){Ed(d,a.di,0);return f;}f=a.di;e=e+(-1)|0;Ed(d,f,e);if(e>=a.fM.ev)return a.d.c(b,c,d);Ed(d,a.di,0);return (-1);}
var Nh=F(Fa);
function AKc(a,b,c,d){var e,f,g;e=0;f=a.fM.er;a:{while(true){g=a.I.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fM.ev)return (-1);return a.d.c(b,c,d);}
var RG=F(CP);
function ARF(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.I.c(b,c,d);}
var Qs=F(FO);
function AGL(a,b,c,d){var e;if(!a.I.H(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.I.c(b,c,d);return e;}
var U_=F(Fa);
function AFU(a,b,c,d){var e,f,g;e=M4(d,a.di);if(!a.I.H(d))return a.d.c(b,c,d);f=a.fM;if(e>=f.er){Ed(d,a.di,0);return a.d.c(b,c,d);}if(e<f.ev){Ed(d,a.di,e+1|0);g=a.I.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Ed(d,a.di,0);return g;}Ed(d,a.di,e+1|0);g=a.I.c(b,c,d);}return g;}
var RI=F(D2);
function AR5(a,b,c,d){var e;e=d.w;if(e>b)return a.d.cn(b,e,c,d);return a.d.c(b,c,d);}
function AP4(a,b,c,d){var e;e=d.w;if(a.d.cn(b,e,c,d)>=0)return b;return (-1);}
function Oo(){D2.call(this);this.kj=null;}
function ANH(a,b,c,d){var e,f;e=d.w;f=Vb(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cn(b,e,c,d);return a.d.c(b,c,d);}
function AFc(a,b,c,d){var e,f,g,h;e=d.w;f=a.d.ci(b,c,d);if(f<0)return (-1);g=Vb(a,f,e,c);if(g>=0)e=g;g=Bc(f,a.d.cn(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kj.hi(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Vb(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kj.hi(L(d,b)))break;b=b+1|0;}return b;}
var EM=F();
var AYB=null;var AYC=null;function Pk(b){var c;if(!(b&1)){c=AYC;if(c!==null)return c;c=new VC;AYC=c;return c;}c=AYB;if(c!==null)return c;c=new VB;AYB=c;return c;}
var Yt=F(C2);
function AFW(a,b,c,d){var e;a:{while(true){if((b+a.Z.bX()|0)>d.w)break a;e=a.Z.bq(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Wz=F(Ez);
function AMr(a,b,c,d){var e;if((b+a.Z.bX()|0)<=d.w){e=a.Z.bq(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var O7=F(E4);
function APq(a,b,c,d){var e,f,g,h,i;e=a.jd;f=e.ev;g=e.er;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.Z.bX()|0)>d.w)break a;i=a.Z.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.Z.bX()|0)>d.w){d.dg=1;return (-1);}i=a.Z.bq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qm=F(C2);
function ANy(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.Z.bX()|0)<=d.w){e=a.Z.bq(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Uj=F(Ez);
function AF3(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.I.c(b,c,d);}
var Rg=F(E4);
function APG(a,b,c,d){var e,f,g,h,i,j;e=a.jd;f=e.ev;g=e.er;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.Z.bX()|0)<=d.w){i=a.Z.bq(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.Z.bX()|0)>d.w){d.dg=1;return (-1);}j=a.Z.bq(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Kq=F(BA);
function ALt(a,b,c,d){if(b&&!(d.e$&&b==d.cG))return (-1);return a.d.c(b,c,d);}
function AKt(a,b){return 0;}
function AAj(){BA.call(this);this.tL=0;}
function AQg(a){var b=new AAj();AKQ(b,a);return b;}
function AKQ(a,b){BL(a);a.tL=b;}
function AGp(a,b,c,d){var e,f,g;e=b<d.w?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.iI?0:d.cG;return (e!=32&&!Qw(a,e,b,g,c)?0:1)^(f!=32&&!Qw(a,f,b-1|0,g,c)?0:1)^a.tL?(-1):a.d.c(b,c,d);}
function AGy(a,b){return 0;}
function Qw(a,b,c,d,e){var f;if(!Ju(b)&&b!=95){a:{if(Ct(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(Ju(f))return 0;if(Ct(f)!=6)return 1;}}return 1;}return 0;}
var Ok=F(BA);
function AKO(a,b,c,d){if(b!=d.ho)return (-1);return a.d.c(b,c,d);}
function ASc(a,b){return 0;}
function Xg(){BA.call(this);this.fU=0;}
function AUg(a){var b=new Xg();ADN(b,a);return b;}
function ADN(a,b){BL(a);a.fU=b;}
function AOg(a,b,c,d){var e,f,g;e=!d.e$?I(c):d.w;if(b>=e){BG(d,a.fU,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BG(d,a.fU,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BG(d,a.fU,0);return a.d.c(b,c,d);}
function AHo(a,b){var c;c=!Dl(b,a.fU)?0:1;BG(b,a.fU,(-1));return c;}
var W0=F(BA);
function ANc(a,b,c,d){if(b<(d.iI?I(c):d.w))return (-1);d.dg=1;d.xy=1;return a.d.c(b,c,d);}
function AE2(a,b){return 0;}
function Nt(){BA.call(this);this.qS=null;}
function AHd(a,b,c,d){a:{if(b!=d.w){if(!b)break a;if(d.e$&&b==d.cG)break a;if(a.qS.sj(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AJn(a,b){return 0;}
var AD7=F(BR);
function AUz(){var a=new AD7();AM1(a);return a;}
function AM1(a){BL(a);}
function ARL(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;if(f>e){d.dg=1;return (-1);}g=L(c,b);if(CD(g)){h=b+2|0;if(h<=e&&Hj(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AGC(a,b){a.d=b;}
function AMV(a){return (-2147483602);}
function AGB(a,b){return 1;}
function ZI(){BR.call(this);this.kP=null;}
function AUa(a){var b=new ZI();AHm(b,a);return b;}
function AHm(a,b){BL(a);a.kP=b;}
function AM4(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;if(f>e){d.dg=1;return (-1);}g=L(c,b);if(CD(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Hj(g,h))return a.kP.hi(Eu(g,h))?(-1):a.d.c(b,c,d);}}return a.kP.hi(g)?(-1):a.d.c(f,c,d);}
function AO_(a,b){a.d=b;}
function AEZ(a){return (-2147483602);}
function ARV(a,b){return 1;}
function ADY(){BA.call(this);this.g5=0;}
function ATF(a){var b=new ADY();AJi(b,a);return b;}
function AJi(a,b){BL(a);a.g5=b;}
function ALf(a,b,c,d){var e;e=!d.e$?I(c):d.w;if(b>=e){BG(d,a.g5,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BG(d,a.g5,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AJg(a,b){var c;c=!Dl(b,a.g5)?0:1;BG(b,a.g5,(-1));return c;}
function AB8(){BA.call(this);this.hc=0;}
function ATq(a){var b=new AB8();AJL(b,a);return b;}
function AJL(a,b){BL(a);a.hc=b;}
function ANa(a,b,c,d){if((!d.e$?I(c)-b|0:d.w-b|0)<=0){BG(d,a.hc,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BG(d,a.hc,1);return a.d.c(b+1|0,c,d);}
function AI8(a,b){var c;c=!Dl(b,a.hc)?0:1;BG(b,a.hc,(-1));return c;}
function YF(){BA.call(this);this.fo=0;}
function ASI(a){var b=new YF();ASk(b,a);return b;}
function ASk(a,b){BL(a);a.fo=b;}
function AKh(a,b,c,d){var e,f,g;e=!d.e$?I(c)-b|0:d.w-b|0;if(!e){BG(d,a.fo,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BG(d,a.fo,0);return a.d.c(b,c,d);case 13:if(g!=10){BG(d,a.fo,0);return a.d.c(b,c,d);}BG(d,a.fo,0);return a.d.c(b,c,d);default:}return (-1);}
function AHt(a,b){var c;c=!Dl(b,a.fo)?0:1;BG(b,a.fo,(-1));return c;}
function G3(){var a=this;BR.call(a);a.mR=0;a.gr=0;}
function AUJ(a,b){var c=new G3();OY(c,a,b);return c;}
function OY(a,b,c){BL(a);a.mR=b;a.gr=c;}
function AFY(a,b,c,d){var e,f,g,h;e=F8(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=0;while(true){if(f>=I(e)){BG(d,a.gr,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Ht(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AOq(a,b){a.d=b;}
function F8(a,b){var c,d;c=a.mR;d=FA(b,c);c=It(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.kR)?B$(b.kR,d,c):null;}
function AOP(a,b){var c;c=!Dl(b,a.gr)?0:1;BG(b,a.gr,(-1));return c;}
var AD3=F(G3);
function ASP(a,b){var c=new AD3();AQR(c,a,b);return c;}
function AQR(a,b,c){OY(a,b,c);}
function AHy(a,b,c,d){var e,f;e=F8(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=!Uz(c,e,b)?(-1):I(e);if(f<0)return (-1);BG(d,a.gr,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AQG(a,b,c,d){var e,f;e=F8(a,d);f=d.cG;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=AAi(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AFL(a,b,c,d,e){var f,g;f=F8(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PN(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AMj(a,b){return 1;}
var AA8=F(G3);
function ATr(a,b){var c=new AA8();AJf(c,a,b);return c;}
function AJf(a,b,c){OY(a,b,c);}
function ALL(a,b,c,d){var e,f;e=F8(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=0;while(true){if(f>=I(e)){BG(d,a.gr,I(e));return a.d.c(b+I(e)|0,c,d);}if(EX(Ey(L(e,f)))!=EX(Ey(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Oe=F(Gg);
function AIY(a,b,c,d,e){M$(a,b,c,d,e);return a;}
function AGt(a,b,c,d){Xo(a,b,c,d);return a;}
function AGT(a,b){Jz(a,b);}
function AP7(a,b,c){XH(a,b,c);return a;}
function RQ(){var a=this;BV.call(a);a.cp=null;a.kd=null;a.kZ=null;}
function AHX(a,b,c){return !Ko(a,c,b)?(-1):a.bH;}
function AGk(a,b,c,d){var e,f,g;e=d.w;while(true){if(b>e)return (-1);f=L(a.cp,a.bH-1|0);a:{while(true){g=a.bH;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Ko(a,c,b))break;b=b+SX(a.kd,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bH|0,c,d)>=0)break;b=b+1|0;}return b;}
function AJk(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.cp,0);g=(I(d)-c|0)-a.bH|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Ko(a,d,c))break;c=c-SX(a.kZ,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bH|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJS(a,b){var c;if(b instanceof El)return b.c_!=L(a.cp,0)?0:1;if(b instanceof Eg)return Mx(b,0,B$(a.cp,0,1))<=0?0:1;if(!(b instanceof DA)){if(!(b instanceof DU))return 1;return I(a.cp)>1&&b.fy==Eu(L(a.cp,0),L(a.cp,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.cp,0))){if(I(a.cp)<=1)break b;if(!b.k(Eu(L(a.cp,0),L(a.cp,1))))break b;}c=1;break a;}c=0;}return c;}
function Ko(a,b,c){var d;d=0;while(d<a.bH){if(L(b,d+c|0)!=L(a.cp,d))return 0;d=d+1|0;}return 1;}
function YE(){BV.call(this);this.iM=null;}
function AUM(a){var b=new YE();AQn(b,a);return b;}
function AQn(a,b){var c,d,e;Dz(a);c=new M;O(c);d=0;while(true){e=BE(d,b.N);if(e>=0){a.iM=N(c);a.bH=c.N;return;}if(d<0)break;if(e>=0)break;BB(c,EX(Ey(b.A.data[d])));d=d+1|0;}b=new Bx;V(b);J(b);}
function ALT(a,b,c){var d;d=0;while(true){if(d>=I(a.iM))return I(a.iM);if(L(a.iM,d)!=EX(Ey(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Nn(){BV.call(this);this.g2=null;}
function APs(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.g2))return I(a.g2);e=L(a.g2,d);f=b+d|0;if(e!=L(c,f)&&Ht(L(a.g2,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var G2=F();
var AYD=null;var AYE=null;var AYz=null;function AO1(){AO1=Bl(G2);AIh();}
function AIh(){AYD=AUq();AYE=ATy();AYz=H($rt_arraycls(C),[H(C,[B(412),AUK()]),H(C,[B(413),ASF()]),H(C,[B(414),AUn()]),H(C,[B(415),AUu()]),H(C,[B(416),AYE]),H(C,[B(417),ATJ()]),H(C,[B(418),ATw()]),H(C,[B(419),ASU()]),H(C,[B(420),ASO()]),H(C,[B(421),AS1()]),H(C,[B(422),ATe()]),H(C,[B(423),ASY()]),H(C,[B(424),AT5()]),H(C,[B(425),ASz()]),H(C,[B(426),AUr()]),H(C,[B(427),ATd()]),H(C,[B(428),ATH()]),H(C,[B(429),ATb()]),H(C,[B(430),ATI()]),H(C,[B(431),AS4()]),H(C,[B(432),AUy()]),H(C,[B(433),AS8()]),H(C,[B(434),ATN()]),
H(C,[B(435),AUl()]),H(C,[B(436),AUh()]),H(C,[B(437),AUv()]),H(C,[B(438),AS3()]),H(C,[B(439),AT$()]),H(C,[B(440),AYD]),H(C,[B(441),ATS()]),H(C,[B(442),ASV()]),H(C,[B(443),AYD]),H(C,[B(444),ASx()]),H(C,[B(445),AYE]),H(C,[B(446),ATl()]),H(C,[B(447),P(0,127)]),H(C,[B(448),P(128,255)]),H(C,[B(449),P(256,383)]),H(C,[B(450),P(384,591)]),H(C,[B(451),P(592,687)]),H(C,[B(452),P(688,767)]),H(C,[B(453),P(768,879)]),H(C,[B(454),P(880,1023)]),H(C,[B(455),P(1024,1279)]),H(C,[B(456),P(1280,1327)]),H(C,[B(457),P(1328,1423)]),
H(C,[B(458),P(1424,1535)]),H(C,[B(459),P(1536,1791)]),H(C,[B(460),P(1792,1871)]),H(C,[B(461),P(1872,1919)]),H(C,[B(462),P(1920,1983)]),H(C,[B(463),P(2304,2431)]),H(C,[B(464),P(2432,2559)]),H(C,[B(465),P(2560,2687)]),H(C,[B(466),P(2688,2815)]),H(C,[B(467),P(2816,2943)]),H(C,[B(468),P(2944,3071)]),H(C,[B(469),P(3072,3199)]),H(C,[B(470),P(3200,3327)]),H(C,[B(471),P(3328,3455)]),H(C,[B(472),P(3456,3583)]),H(C,[B(473),P(3584,3711)]),H(C,[B(474),P(3712,3839)]),H(C,[B(475),P(3840,4095)]),H(C,[B(476),P(4096,4255)]),
H(C,[B(477),P(4256,4351)]),H(C,[B(478),P(4352,4607)]),H(C,[B(479),P(4608,4991)]),H(C,[B(480),P(4992,5023)]),H(C,[B(481),P(5024,5119)]),H(C,[B(482),P(5120,5759)]),H(C,[B(483),P(5760,5791)]),H(C,[B(484),P(5792,5887)]),H(C,[B(485),P(5888,5919)]),H(C,[B(486),P(5920,5951)]),H(C,[B(487),P(5952,5983)]),H(C,[B(488),P(5984,6015)]),H(C,[B(489),P(6016,6143)]),H(C,[B(490),P(6144,6319)]),H(C,[B(491),P(6400,6479)]),H(C,[B(492),P(6480,6527)]),H(C,[B(493),P(6528,6623)]),H(C,[B(494),P(6624,6655)]),H(C,[B(495),P(6656,6687)]),
H(C,[B(496),P(7424,7551)]),H(C,[B(497),P(7552,7615)]),H(C,[B(498),P(7616,7679)]),H(C,[B(499),P(7680,7935)]),H(C,[B(500),P(7936,8191)]),H(C,[B(501),P(8192,8303)]),H(C,[B(502),P(8304,8351)]),H(C,[B(503),P(8352,8399)]),H(C,[B(504),P(8400,8447)]),H(C,[B(505),P(8448,8527)]),H(C,[B(506),P(8528,8591)]),H(C,[B(507),P(8592,8703)]),H(C,[B(508),P(8704,8959)]),H(C,[B(509),P(8960,9215)]),H(C,[B(510),P(9216,9279)]),H(C,[B(511),P(9280,9311)]),H(C,[B(512),P(9312,9471)]),H(C,[B(513),P(9472,9599)]),H(C,[B(514),P(9600,9631)]),
H(C,[B(515),P(9632,9727)]),H(C,[B(516),P(9728,9983)]),H(C,[B(517),P(9984,10175)]),H(C,[B(518),P(10176,10223)]),H(C,[B(519),P(10224,10239)]),H(C,[B(520),P(10240,10495)]),H(C,[B(521),P(10496,10623)]),H(C,[B(522),P(10624,10751)]),H(C,[B(523),P(10752,11007)]),H(C,[B(524),P(11008,11263)]),H(C,[B(525),P(11264,11359)]),H(C,[B(526),P(11392,11519)]),H(C,[B(527),P(11520,11567)]),H(C,[B(528),P(11568,11647)]),H(C,[B(529),P(11648,11743)]),H(C,[B(530),P(11776,11903)]),H(C,[B(531),P(11904,12031)]),H(C,[B(532),P(12032,12255)]),
H(C,[B(533),P(12272,12287)]),H(C,[B(534),P(12288,12351)]),H(C,[B(535),P(12352,12447)]),H(C,[B(536),P(12448,12543)]),H(C,[B(537),P(12544,12591)]),H(C,[B(538),P(12592,12687)]),H(C,[B(539),P(12688,12703)]),H(C,[B(540),P(12704,12735)]),H(C,[B(541),P(12736,12783)]),H(C,[B(542),P(12784,12799)]),H(C,[B(543),P(12800,13055)]),H(C,[B(544),P(13056,13311)]),H(C,[B(545),P(13312,19893)]),H(C,[B(546),P(19904,19967)]),H(C,[B(547),P(19968,40959)]),H(C,[B(548),P(40960,42127)]),H(C,[B(549),P(42128,42191)]),H(C,[B(550),P(42752,
42783)]),H(C,[B(551),P(43008,43055)]),H(C,[B(552),P(44032,55203)]),H(C,[B(553),P(55296,56191)]),H(C,[B(554),P(56192,56319)]),H(C,[B(555),P(56320,57343)]),H(C,[B(556),P(57344,63743)]),H(C,[B(557),P(63744,64255)]),H(C,[B(558),P(64256,64335)]),H(C,[B(559),P(64336,65023)]),H(C,[B(560),P(65024,65039)]),H(C,[B(561),P(65040,65055)]),H(C,[B(562),P(65056,65071)]),H(C,[B(563),P(65072,65103)]),H(C,[B(564),P(65104,65135)]),H(C,[B(565),P(65136,65279)]),H(C,[B(566),P(65280,65519)]),H(C,[B(567),P(0,1114111)]),H(C,[B(568),
ASZ()]),H(C,[B(569),BJ(0,1)]),H(C,[B(570),IP(62,1)]),H(C,[B(571),BJ(1,1)]),H(C,[B(572),BJ(2,1)]),H(C,[B(573),BJ(3,0)]),H(C,[B(574),BJ(4,0)]),H(C,[B(575),BJ(5,1)]),H(C,[B(576),IP(448,1)]),H(C,[B(577),BJ(6,1)]),H(C,[B(578),BJ(7,0)]),H(C,[B(579),BJ(8,1)]),H(C,[B(580),IP(3584,1)]),H(C,[B(581),BJ(9,1)]),H(C,[B(582),BJ(10,1)]),H(C,[B(583),BJ(11,1)]),H(C,[B(584),IP(28672,0)]),H(C,[B(585),BJ(12,0)]),H(C,[B(586),BJ(13,0)]),H(C,[B(587),BJ(14,0)]),H(C,[B(588),ATs(983040,1,1)]),H(C,[B(589),BJ(15,0)]),H(C,[B(590),BJ(16,
1)]),H(C,[B(591),BJ(18,1)]),H(C,[B(592),ATE(19,0,1)]),H(C,[B(593),IP(1643118592,1)]),H(C,[B(594),BJ(20,0)]),H(C,[B(595),BJ(21,0)]),H(C,[B(596),BJ(22,0)]),H(C,[B(597),BJ(23,0)]),H(C,[B(598),BJ(24,1)]),H(C,[B(599),IP(2113929216,1)]),H(C,[B(600),BJ(25,1)]),H(C,[B(601),BJ(26,0)]),H(C,[B(602),BJ(27,0)]),H(C,[B(603),BJ(28,1)]),H(C,[B(604),BJ(29,0)]),H(C,[B(605),BJ(30,0)])]);}
function MF(){BV.call(this);this.qi=0;}
function APz(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.qi!=Gz(Gw(Eu(e,d)))?(-1):2;}
function K2(){BR.call(this);this.f7=0;}
function AM0(a){var b=new K2();AGO(b,a);return b;}
function AGO(a,b){BL(a);a.f7=b;}
function ANs(a,b){a.d=b;}
function AHp(a,b,c,d){var e,f;e=b+1|0;if(e>d.w){d.dg=1;return (-1);}f=L(c,b);if(b>d.cG&&CD(L(c,b-1|0)))return (-1);if(a.f7!=f)return (-1);return a.d.c(e,c,d);}
function AJQ(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return HB(a,b,c,d);e=d.cG;f=d.w;while(true){if(b>=f)return (-1);g=GE(c,a.f7,b);if(g<0)return (-1);if(g>e&&CD(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AH5(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HQ(a,b,c,d,e);f=e.cG;a:{while(true){if(c<b)return (-1);g=F0(d,a.f7,c);if(g<0)break a;if(g<b)break a;if(g>f&&CD(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFJ(a,b){if(b instanceof El)return 0;if(b instanceof Eg)return 0;if(b instanceof DA)return 0;if(b instanceof DU)return 0;if(b instanceof Ln)return 0;if(!(b instanceof K2))return 1;return b.f7!=a.f7?0:1;}
function AQc(a,b){return 1;}
function Ln(){BR.call(this);this.fI=0;}
function AKl(a){var b=new Ln();AM8(b,a);return b;}
function AM8(a,b){BL(a);a.fI=b;}
function AGS(a,b){a.d=b;}
function AFj(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;g=BE(f,e);if(g>0){d.dg=1;return (-1);}h=L(c,b);if(g<0&&C4(L(c,f)))return (-1);if(a.fI!=h)return (-1);return a.d.c(f,c,d);}
function ANS(a,b,c,d){var e,f;if(!(c instanceof Bv))return HB(a,b,c,d);e=d.w;while(true){if(b>=e)return (-1);f=GE(c,a.fI,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C4(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function APr(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HQ(a,b,c,d,e);f=e.w;a:{while(true){if(c<b)return (-1);g=F0(d,a.fI,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C4(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AHY(a,b){if(b instanceof El)return 0;if(b instanceof Eg)return 0;if(b instanceof DA)return 0;if(b instanceof DU)return 0;if(b instanceof K2)return 0;if(!(b instanceof Ln))return 1;return b.fI!=a.fI?0:1;}
function AN3(a,b){return 1;}
function DU(){var a=this;BV.call(a);a.jr=0;a.h4=0;a.fy=0;}
function AOQ(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.jr==e&&a.h4==d?2:(-1);}
function AMJ(a,b,c,d){var e,f;if(!(c instanceof Bv))return HB(a,b,c,d);e=d.w;while(b<e){b=GE(c,a.jr,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.h4==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AGQ(a,b,c,d,e){var f;if(!(d instanceof Bv))return HQ(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F0(d,a.h4,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jr==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AOB(a,b){if(b instanceof DU)return b.fy!=a.fy?0:1;if(b instanceof DA)return b.k(a.fy);if(b instanceof El)return 0;if(!(b instanceof Eg))return 1;return 0;}
var VB=F(EM);
function AG4(a,b){return b!=10?0:1;}
function AOI(a,b,c){return b!=10?0:1;}
var VC=F(EM);
function APJ(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ARs(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ACZ(){var a=this;C.call(a);a.l7=null;a.jH=null;a.gG=0;a.u1=0;}
function AMT(a){var b=new ACZ();AKM(b,a);return b;}
function AKM(a,b){var c,d;while(true){c=a.gG;if(b<c)break;a.gG=c<<1|1;}d=c<<1|1;a.gG=d;d=d+1|0;a.l7=BC(d);a.jH=BC(d);a.u1=b;}
function Rk(a,b,c){var d,e,f,g;d=0;e=a.gG;f=b&e;while(true){g=a.l7.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jH.data[f]=c;}
function SX(a,b){var c,d,e,f;c=a.gG;d=b&c;e=0;while(true){f=a.l7.data[d];if(!f)break;if(f==b)return a.jH.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.u1;}
var YW=F();
var KZ=F(Y);
function AUq(){var a=new KZ();AKd(a);return a;}
function AKd(a){}
function ABe(a){return Cu(BS(Dm(),9,13),32);}
var JY=F(Y);
function ATy(){var a=new JY();AP$(a);return a;}
function AP$(a){}
function AB1(a){return BS(Dm(),48,57);}
var ACT=F(Y);
function AUK(){var a=new ACT();AJv(a);return a;}
function AJv(a){}
function APc(a){return BS(Dm(),97,122);}
var ADp=F(Y);
function ASF(){var a=new ADp();AKT(a);return a;}
function AKT(a){}
function AQe(a){return BS(Dm(),65,90);}
var ADu=F(Y);
function AUn(){var a=new ADu();AGm(a);return a;}
function AGm(a){}
function AIC(a){return BS(Dm(),0,127);}
var KV=F(Y);
function AUu(){var a=new KV();AHB(a);return a;}
function AHB(a){}
function ZN(a){return BS(BS(Dm(),97,122),65,90);}
var Ly=F(KV);
function ATJ(){var a=new Ly();AKs(a);return a;}
function AKs(a){}
function AAK(a){return BS(ZN(a),48,57);}
var AEM=F(Y);
function ATw(){var a=new AEM();AMx(a);return a;}
function AMx(a){}
function AJO(a){return BS(BS(BS(Dm(),33,64),91,96),123,126);}
var Mw=F(Ly);
function ASU(){var a=new Mw();AOl(a);return a;}
function AOl(a){}
function YA(a){return BS(BS(BS(AAK(a),33,64),91,96),123,126);}
var ABs=F(Mw);
function ASO(){var a=new ABs();AP1(a);return a;}
function AP1(a){}
function AMe(a){return Cu(YA(a),32);}
var ABT=F(Y);
function AS1(){var a=new ABT();APt(a);return a;}
function APt(a){}
function AHQ(a){return Cu(Cu(Dm(),32),9);}
var AAc=F(Y);
function ATe(){var a=new AAc();ARf(a);return a;}
function ARf(a){}
function AMb(a){return Cu(BS(Dm(),0,31),127);}
var ZV=F(Y);
function ASY(){var a=new ZV();AGx(a);return a;}
function AGx(a){}
function ARu(a){return BS(BS(BS(Dm(),48,57),97,102),65,70);}
var ADy=F(Y);
function AT5(){var a=new ADy();AGc(a);return a;}
function AGc(a){}
function AMR(a){var b;b=new Td;b.wP=a;Bs(b);b.K=1;return b;}
var AEY=F(Y);
function ASz(){var a=new AEY();AOG(a);return a;}
function AOG(a){}
function AFa(a){var b;b=new MT;b.wZ=a;Bs(b);b.K=1;return b;}
var AC0=F(Y);
function AUr(){var a=new AC0();AGn(a);return a;}
function AGn(a){}
function AKm(a){var b;b=new R9;b.wz=a;Bs(b);return b;}
var ACO=F(Y);
function ATd(){var a=new ACO();AMc(a);return a;}
function AMc(a){}
function AOU(a){var b;b=new R8;b.wi=a;Bs(b);return b;}
var ADQ=F(Y);
function ATH(){var a=new ADQ();AHx(a);return a;}
function AHx(a){}
function AHM(a){var b;b=new W8;b.xF=a;Bs(b);HX(b.J,0,2048);b.K=1;return b;}
var Ze=F(Y);
function ATb(){var a=new Ze();AGZ(a);return a;}
function AGZ(a){}
function AIb(a){var b;b=new O1;b.xa=a;Bs(b);b.K=1;return b;}
var YT=F(Y);
function ATI(){var a=new YT();ALQ(a);return a;}
function ALQ(a){}
function ARo(a){var b;b=new N$;b.x$=a;Bs(b);b.K=1;return b;}
var AC6=F(Y);
function AS4(){var a=new AC6();AMy(a);return a;}
function AMy(a){}
function AE6(a){var b;b=new QJ;b.wR=a;Bs(b);return b;}
var ADg=F(Y);
function AUy(){var a=new ADg();AJ3(a);return a;}
function AJ3(a){}
function ALj(a){var b;b=new MM;b.vu=a;Bs(b);b.K=1;return b;}
var AAC=F(Y);
function AS8(){var a=new AAC();AFM(a);return a;}
function AFM(a){}
function AIl(a){var b;b=new MR;b.xd=a;Bs(b);b.K=1;return b;}
var ABY=F(Y);
function ATN(){var a=new ABY();AG8(a);return a;}
function AG8(a){}
function AJp(a){var b;b=new NT;b.xC=a;Bs(b);b.K=1;return b;}
var AEr=F(Y);
function AUl(){var a=new AEr();ALo(a);return a;}
function ALo(a){}
function ALl(a){var b;b=new Pn;b.xV=a;Bs(b);b.K=1;return b;}
var ADf=F(Y);
function AUh(){var a=new ADf();AMO(a);return a;}
function AMO(a){}
function AQx(a){var b;b=new Pw;b.wB=a;Bs(b);return b;}
var AA5=F(Y);
function AUv(){var a=new AA5();AG1(a);return a;}
function AG1(a){}
function AOb(a){var b;b=new T2;b.xj=a;Bs(b);return b;}
var AAA=F(Y);
function AS3(){var a=new AAA();AOX(a);return a;}
function AOX(a){}
function AMM(a){var b;b=new SL;b.vy=a;Bs(b);b.K=1;return b;}
var AET=F(Y);
function AT$(){var a=new AET();AJX(a);return a;}
function AJX(a){}
function AO7(a){var b;b=new M7;b.yn=a;Bs(b);b.K=1;return b;}
var Jm=F(Y);
function ATS(){var a=new Jm();AIt(a);return a;}
function AIt(a){}
function ABV(a){return Cu(BS(BS(BS(Dm(),97,122),65,90),48,57),95);}
var ADS=F(Jm);
function ASV(){var a=new ADS();AJ8(a);return a;}
function AJ8(a){}
function AMA(a){var b;b=Et(ABV(a),1);b.K=1;return b;}
var ABx=F(KZ);
function ASx(){var a=new ABx();AQ3(a);return a;}
function AQ3(a){}
function AGj(a){var b;b=Et(ABe(a),1);b.K=1;return b;}
var AAt=F(JY);
function ATl(){var a=new AAt();AK$(a);return a;}
function AK$(a){}
function AJB(a){var b;b=Et(AB1(a),1);b.K=1;return b;}
function Z2(){var a=this;Y.call(a);a.p6=0;a.qN=0;}
function P(a,b){var c=new Z2();ARm(c,a,b);return c;}
function ARm(a,b,c){a.p6=b;a.qN=c;}
function ALz(a){return BS(Dm(),a.p6,a.qN);}
var AAn=F(Y);
function ASZ(){var a=new AAn();ARB(a);return a;}
function ARB(a){}
function ARa(a){return BS(BS(Dm(),65279,65279),65520,65533);}
function ABm(){var a=this;Y.call(a);a.lF=0;a.jy=0;a.oh=0;}
function BJ(a,b){var c=new ABm();AHs(c,a,b);return c;}
function ATE(a,b,c){var d=new ABm();ARn(d,a,b,c);return d;}
function AHs(a,b,c){a.jy=c;a.lF=b;}
function ARn(a,b,c,d){a.oh=d;a.jy=c;a.lF=b;}
function AI2(a){var b;b=AUF(a.lF);if(a.oh)HX(b.J,0,2048);b.K=a.jy;return b;}
function ABt(){var a=this;Y.call(a);a.lE=0;a.jJ=0;a.m0=0;}
function IP(a,b){var c=new ABt();AIm(c,a,b);return c;}
function ATs(a,b,c){var d=new ABt();AE9(d,a,b,c);return d;}
function AIm(a,b,c){a.jJ=c;a.lE=b;}
function AE9(a,b,c,d){a.m0=d;a.jJ=c;a.lE=b;}
function AE7(a){var b;b=new R2;ACz(b,a.lE);if(a.m0)HX(b.J,0,2048);b.K=a.jJ;return b;}
var Z9=F();
var Zy=F();
function AA4(b){var c,d,e,f,g,h,i;c=APg(Gr(b));d=JL(c);e=BC(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+JL(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Ng(c);h=h+1|0;}return e;}
function KG(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Nu(){var a=this;C.call(a);a.oX=0;a.q9=0;a.o$=null;}
function AI0(a,b,c){var d=new Nu();AP0(d,a,b,c);return d;}
function AP0(a,b,c,d){a.oX=b;a.q9=c;a.o$=d;}
function ADa(){var a=this;C.call(a);a.nH=null;a.qf=0;}
function APg(a){var b=new ADa();AH1(b,a);return b;}
function AH1(a,b){a.nH=b;}
var AA3=F();
function JL(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nH.data;f=b.qf;b.qf=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+X(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Ng(b){var c,d;c=JL(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function ZK(){C.call(this);this.HX=null;}
function TH(){C.call(this);this.nj=null;}
function ASe(a,b){var c,d,e,f;c=b.data;b=a.nj;d=D9(c[0]);e=FH(c[1]);ABG(b.e.f,d,e);Gq(Ck(b),AWV);F3(Ck(b));f=Ks(FD(),b.eO);b=new M;O(b);G(HT(G(b,B(606)),f),B(195));$rt_globals.console.info($rt_ustr(N(b)));}
function Ro(){C.call(this);this.qL=null;}
function AIZ(a,b){KK(a.qL,b);}
var Y5=F();
function AEv(b){var c,d,e,f,g,h,i,j,k,l;c=new Wf;c.k2=0;c.gN=BC(16);c.eU=0;d=Cq(b);HP(c,d);e=0;f=0;while(f<d){g=B1(b,f);h=g.o.data.length;HP(c,h);i=0;while(i<h){j=ND(g,i);k=Mo(j);HP(c,e);HP(c,k);e=e+Mo(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}d=c.k2;if(d&&c.eU!=d){b=Iz();d=c.k2;e=c.eU;j=new M;O(j);G(T(G(T(G(j,B(401)),d),B(607)),e),B(608));Br(b,N(j));}l=c.gN;d=l.data.length;e=c.eU;if(d!=e)l=Mf(l,e);return l;}
function ADh(b){var c,d,e,f,g,h,i,j,k;c=BP(b);d=S(H2,c);e=d.data;f=0;while(f<c){a:{g=BP(b);if(g!=(-1)){h=BP(b);i=BP(b);if(i==(-1)){j=new H2;j.fO=h;e[g]=j;}else{j=new H2;j.fO=h;j.k1=BC(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].k1.data[k]=BP(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function Rn(){C.call(this);this.t$=null;}
function AOV(a,b){var c,d,e,f;c=b.data;b=a.t$;d=D9(c[0]);c=ADX(d);e=new QU;d=ADh(c);f=ADh(c);e.wU=d;e.qZ=f;b.rX=e;Lt(b.G,d);Lt(b.D,b.rX.qZ);}
function PO(){var a=this;C.call(a);a.xR=null;a.xS=null;a.xT=null;}
function Qu(){var a=this;C.call(a);a.w7=null;a.w6=null;}
function WC(){var a=this;U.call(a);a.nr=null;a.xL=null;}
function AIJ(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cd^Dv(a.nr,c):0;}
function WA(){var a=this;U.call(a);a.tg=null;a.t2=null;a.xo=null;}
function AFz(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cd^Dv(a.tg,c):0;return a.t2.k(b)&&!d?1:0;}
function Ou(){var a=this;U.call(a);a.h7=null;a.vC=null;}
function ALp(a,b){return a.be^Dv(a.h7,b);}
function AJr(a){var b,c,d;b=new M;O(b);c=Ha(a.h7,0);while(c>=0){Ik(b,Go(c));BB(b,124);c=Ha(a.h7,c+1|0);}d=b.N;if(d>0)Wq(b,d-1|0);return N(b);}
function OA(){var a=this;U.call(a);a.qx=null;a.wX=null;}
function AOT(a,b){return a.qx.k(b);}
function Oy(){var a=this;U.call(a);a.jB=0;a.n6=null;a.kn=null;}
function APy(a,b){return !(a.jB^Dv(a.kn.F,b))&&!(a.jB^a.kn.dI^a.n6.k(b))?0:1;}
function Oz(){var a=this;U.call(a);a.jI=0;a.tE=null;a.le=null;}
function ALS(a,b){return !(a.jI^Dv(a.le.F,b))&&!(a.jI^a.le.dI^a.tE.k(b))?1:0;}
function OD(){var a=this;U.call(a);a.uw=0;a.tK=null;a.tz=null;a.v0=null;}
function AIg(a,b){return a.uw^(!a.tK.k(b)&&!a.tz.k(b)?0:1);}
function OE(){var a=this;U.call(a);a.qK=0;a.qn=null;a.pB=null;a.yf=null;}
function AE0(a,b){return a.qK^(!a.qn.k(b)&&!a.pB.k(b)?0:1)?0:1;}
function OB(){var a=this;U.call(a);a.pe=null;a.yl=null;}
function AJw(a,b){return CY(a.pe,b);}
function OC(){var a=this;U.call(a);a.tY=null;a.wd=null;}
function ALV(a,b){return CY(a.tY,b)?0:1;}
function OF(){var a=this;U.call(a);a.q2=null;a.qs=0;a.sM=null;}
function AQK(a,b){return !CY(a.q2,b)&&!(a.qs^Dv(a.sM.F,b))?0:1;}
function OG(){var a=this;U.call(a);a.rN=null;a.r3=0;a.rq=null;}
function AHF(a,b){return !CY(a.rN,b)&&!(a.r3^Dv(a.rq.F,b))?1:0;}
function Ot(){var a=this;U.call(a);a.sJ=0;a.tC=null;a.ud=null;a.vG=null;}
function ASv(a,b){return !(a.sJ^a.tC.k(b))&&!CY(a.ud,b)?0:1;}
function Pc(){var a=this;U.call(a);a.ua=0;a.mB=null;a.m1=null;a.v$=null;}
function AJA(a,b){return !(a.ua^a.mB.k(b))&&!CY(a.m1,b)?1:0;}
function Oq(){var a=this;U.call(a);a.oP=null;a.wh=null;}
function AHC(a,b){return CY(a.oP,b);}
function Or(){var a=this;U.call(a);a.oU=null;a.yb=null;}
function AJe(a,b){return CY(a.oU,b)?0:1;}
function Ox(){var a=this;U.call(a);a.us=null;a.rF=0;a.vl=null;}
function AKR(a,b){return CY(a.us,b)&&a.rF^Dv(a.vl.F,b)?1:0;}
function Op(){var a=this;U.call(a);a.sm=null;a.qM=0;a.rD=null;}
function AQk(a,b){return CY(a.sm,b)&&a.qM^Dv(a.rD.F,b)?0:1;}
function Ov(){var a=this;U.call(a);a.sS=0;a.no=null;a.qG=null;a.vZ=null;}
function AGw(a,b){return a.sS^a.no.k(b)&&CY(a.qG,b)?1:0;}
function Ow(){var a=this;U.call(a);a.sh=0;a.mq=null;a.sI=null;a.wl=null;}
function AN1(a,b){return a.sh^a.mq.k(b)&&CY(a.sI,b)?0:1;}
var LY=F(0);
function SJ(){var a=this;C.call(a);a.v6=null;a.tF=null;a.ix=null;a.cs=null;a.h8=0;a.kh=0;}
function MP(a,b){var c,d,e;c=I(a.ix);if(b>=0&&b<=c){XW(a.cs,null,(-1),(-1));d=a.cs;d.je=1;d.d6=b;c=d.ho;if(c<0)c=b;d.ho=c;b=a.tF.ci(b,a.ix,d);if(b==(-1))a.cs.dg=1;if(b>=0){d=a.cs;if(d.iA){e=d.dE.data;if(e[0]==(-1)){c=d.d6;e[0]=c;e[1]=c;}d.ho=I5(d);return 1;}}a.cs.d6=(-1);return 0;}d=new Bx;Bn(d,C5(b));J(d);}
function AEp(a){return O5(a.cs,0);}
function AAu(a){return Sc(a.cs,0);}
function Y1(a){return a.cs.iI;}
function ADI(){var a=this;C.call(a);a.BE=null;a.BF=null;a.BD=0.0;}
function Wf(){var a=this;C.call(a);a.gN=null;a.k2=0;a.eU=0;}
function HP(a,b){var c,d;c=a.gN;d=c.data.length;if(d==a.eU)a.gN=Mf(c,d*2|0);c=a.gN.data;d=a.eU;a.eU=d+1|0;c[d]=b;}
var C0=F(0);
var AWw=null;var AXY=null;var AWy=null;var AWx=null;var AWA=null;var AWz=null;var AWC=null;var AWB=null;var AWE=null;var AWD=null;var AWF=null;function AB0(){AB0=Bl(C0);ALN();}
function ALN(){AWw=C3(0);AXY=CL(0,0,0);AWy=Q(B(609));AWx=CL(255,255,255);AWA=CL(166,214,255);AWz=Q(B(610));AWC=Q(B(611));AWB=Q(B(612));AWE=Fu(205,205,205,153);AWD=Fu(255,255,255,0);AWF=Q(B(124));}
function Cg(){Cj.call(this);this.k0=null;}
var AYF=null;var AYG=null;var AYH=null;var AYI=null;var AYJ=null;var AYK=null;var AYL=null;var AYM=null;var AYN=null;var AYO=null;var AYP=null;var AYQ=null;var AYR=null;var AYS=null;var AYT=null;var AWG=null;function AAl(){AAl=Bl(Cg);AI6();}
function DB(a,b,c){var d=new Cg();WD(d,a,b,c);return d;}
function AKb(a,b,c,d){var e=new Cg();ACC(e,a,b,c,d);return e;}
function WD(a,b,c,d){AAl();C_(a,b,c);a.k0=Il(d,null);}
function ACC(a,b,c,d,e){AAl();C_(a,b,c);a.k0=Il(d,e);}
function AI6(){var b;b=new Cg;AB0();WD(b,B(339),0,AXY);AYF=b;AYG=DB(B(340),1,CL(0,49,191));AYH=DB(B(342),2,Q(B(613)));AYI=DB(B(48),3,Q(B(614)));AYJ=DB(B(345),4,AXY);AYK=DB(B(346),5,Q(B(615)));AYL=DB(B(348),6,Q(B(381)));AYM=DB(B(49),7,Q(B(616)));AYN=DB(B(351),8,Q(B(617)));AYO=AKb(B(353),9,AXY,CL(237,235,252));AYP=AKb(B(354),10,Q(B(379)),Q(B(618)));AYQ=DB(B(355),11,Q(B(381)));AYR=DB(B(357),12,Q(B(382)));AYS=DB(B(359),13,Q(B(619)));b=DB(B(360),14,Q(B(361)));AYT=b;AWG=H(Cg,[AYF,AYG,AYH,AYI,AYJ,AYK,AYL,AYM,AYN,AYO,
AYP,AYQ,AYR,AYS,b]);}
var Du=F(0);
var AWK=null;var AWL=null;var AWH=null;var AWI=null;var AWJ=null;var AXZ=null;var AX0=null;var AWM=null;var AWN=null;function AOW(){AOW=Bl(Du);AJm();}
function AJm(){AWK=Q(B(122));AWL=Q(B(620));AWH=Q(B(621));AWI=Q(B(622));AWJ=Q(B(623));AXZ=Q(B(122));AX0=Q(B(620));AWM=Fu(205,205,205,153);AWN=CL(247,248,250);}
function Oj(){var a=this;C.call(a);a.h9=null;a.gX=0;}
function Og(){C.call(this);this.ri=null;}
function AO6(a,b){UL(a.ri,b);}
var Nb=F(Gs);
function AI5(a,b,c,d){var e,f,g;e=0;f=d.w;a:{while(true){if(b>f){b=e;break a;}g=FA(d,a.X);Dy(d,a.X,b);e=a.cU.c(b,c,d);if(e>=0)break;Dy(d,a.X,g);b=b+1|0;}}return b;}
function ASg(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=FA(e,a.X);Dy(e,a.X,c);f=a.cU.c(c,d,e);if(f>=0)break;Dy(e,a.X,g);c=c+(-1)|0;}}return c;}
function AHn(a){return null;}
var Qa=F(Bq);
var Xq=F(Bq);
function Vw(){FL.call(this);this.x6=0;}
function P0(){FL.call(this);this.xZ=0;}
var Yi=F(Bq);
function Vn(){var a=this;C.call(a);a.q7=null;a.ti=null;a.uO=0;a.jT=0;}
function Ku(a,b){return B6(a.q7)<b?0:1;}
function TJ(){var a=this;C.call(a);a.tS=null;a.tR=null;}
function ST(){var a=this;C.call(a);a.wA=null;a.pa=null;}
function SS(){C.call(this);this.vv=null;}
var AC2=F(0);
function Mi(b){return !b?H(Bv,[B(151),B(152),B(624)]):H(Bv,[B(151),B(152),B(624),B(41)]);}
var AAp=F();
function RO(){var a=this;C.call(a);a.nR=null;a.nQ=0;a.nP=null;}
function JD(a,b){var c,d,e,f,g,h,i,j,k;c=a.nR;d=a.nQ;e=a.nP;if(b<=d){f=Ck(c);g=new X8;g.mV=c;h=S(C,1);h.data[0]=e;CO(f,g,B(625),h);}else{i=Ck(c);g=new X9;g.t4=c;j=S(C,2);k=j.data;k[0]=e;h=BC(1);h.data[0]=250;k[1]=h;CO(i,g,B(626),j);f=Ck(c);g=new X$;g.sy=c;h=S(C,1);h.data[0]=e;CO(f,g,B(627),h);}}
function Vt(){var a=this;C.call(a);a.dE=null;a.jo=null;a.kL=null;a.kR=null;a.od=0;a.iA=0;a.cG=0;a.w=0;a.d6=0;a.iI=0;a.e$=0;a.dg=0;a.xy=0;a.ho=0;a.je=0;}
function BG(a,b,c){a.jo.data[b]=c;}
function Dl(a,b){return a.jo.data[b];}
function I5(a){return Sc(a,0);}
function Sc(a,b){R1(a,b);return a.dE.data[(b*2|0)+1|0];}
function Dy(a,b,c){a.dE.data[b*2|0]=c;}
function JA(a,b,c){a.dE.data[(b*2|0)+1|0]=c;}
function FA(a,b){return a.dE.data[b*2|0];}
function It(a,b){return a.dE.data[(b*2|0)+1|0];}
function ACU(a){return O5(a,0);}
function O5(a,b){R1(a,b);return a.dE.data[b*2|0];}
function M4(a,b){return a.kL.data[b];}
function Ed(a,b,c){a.kL.data[b]=c;}
function R1(a,b){var c;if(!a.iA){c=new D0;V(c);J(c);}if(b>=0&&b<a.od)return;c=new Bx;Bn(c,C5(b));J(c);}
function XW(a,b,c,d){a.iA=0;a.je=2;Hr(a.dE,(-1));Hr(a.jo,(-1));if(b!==null)a.kR=b;if(c>=0){a.cG=c;a.w=d;}a.d6=a.cG;}
function AAP(a){return a.je;}
function VW(){C.call(this);this.nS=null;}
function AQX(a){DL(a.nS);}
function QU(){var a=this;C.call(a);a.wU=null;a.qZ=null;}
function Td(){U.call(this);this.wP=null;}
function AQU(a,b){return Ct(b)!=2?0:1;}
function MT(){U.call(this);this.wZ=null;}
function AGf(a,b){return Ct(b)!=1?0:1;}
function R9(){U.call(this);this.wz=null;}
function AF2(a,b){return Rd(b);}
function R8(){U.call(this);this.wi=null;}
function AI1(a,b){return 0;}
function W8(){U.call(this);this.xF=null;}
function AKC(a,b){return !Ct(b)?0:1;}
function O1(){U.call(this);this.xa=null;}
function AQY(a,b){return Ct(b)!=9?0:1;}
function N$(){U.call(this);this.x$=null;}
function ANm(a,b){return Gj(b);}
function QJ(){U.call(this);this.wR=null;}
function AO0(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MM(){U.call(this);this.vu=null;}
function ART(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gj(b);}return b;}
function MR(){U.call(this);this.xd=null;}
function AH3(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gj(b);}return b;}
function NT(){U.call(this);this.xC=null;}
function AQ$(a,b){a:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Pn(){U.call(this);this.xV=null;}
function AL$(a,b){return Ju(b);}
function Pw(){U.call(this);this.wB=null;}
function AOo(a,b){return Px(b);}
function T2(){U.call(this);this.xj=null;}
function AQL(a,b){return Ct(b)!=3?0:1;}
function SL(){U.call(this);this.vy=null;}
function ARC(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gj(b);}return b;}
function M7(){U.call(this);this.yn=null;}
function AHO(a,b){a:{b:{switch(Ct(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gj(b);}return b;}
function Me(){U.call(this);this.k5=0;}
function AUF(a){var b=new Me();ACz(b,a);return b;}
function ACz(a,b){Bs(a);a.k5=b;}
function ANp(a,b){return a.be^(a.k5!=Ct(b&65535)?0:1);}
var R2=F(Me);
function APX(a,b){return a.be^(!(a.k5>>Ct(b&65535)&1)?0:1);}
function PU(){C.call(this);this.vo=null;}
function ALG(a){var b,c;b=a.vo;c=b.tS;b=b.tR;c.F2(b.h3,b.j0,null);}
function V4(){C.call(this);this.nx=null;}
function AOf(a,b){var c,d,e,f;c=a.nx;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.pa;c=Bu();b=Cw(b);e=new M;O(e);G(G(e,B(628)),b);Br(c,N(e));b=Bu();f=d.length;c=new M;O(c);T(G(c,B(629)),f);Br(b,N(c));}
function V7(){var a=this;C.call(a);a.s$=null;a.s_=null;}
function AMW(a,b){var c,d;c=a.s$;d=a.s_;b.arrayBuffer().then(Bi(c,"f"),Bi(d,"f"));}
function TO(){var a=this;C.call(a);a.ma=null;a.mb=null;}
function AJI(a,b){var c;c=a.ma;JD(a.mb,JC(c,b.size));}
function TR(){C.call(this);this.ut=null;}
function AFt(a,b){var c;c=a.ut;Br(Iz(),$rt_str(b.message));JD(c,0);}
function UP(){C.call(this);this.wq=null;}
function ALB(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function X9(){C.call(this);this.t4=null;}
function AQa(a,b){var c,d;c=a.t4;if(!c.hJ){b=b.data;c.e.f=AB$(D9(b[0]),FH(b[1]));c.hI=1;d=Ks(FD(),c.eO);b=new M;O(b);G(HT(G(b,B(630)),d),B(195));$rt_globals.console.info($rt_ustr(N(b)));}}
function X$(){C.call(this);this.sy=null;}
function AMs(a,b){var c,d,e,f,g,h;c=b.data;d=a.sy;e=(D9(c[2])).data[0];if(e!=1)HE(d,b);else{d.hJ=1;f=D9(c[0]);g=FH(c[1]);b=d.e;b.f=AC3(b.f,f,g,d.hI);Wu(d,ADM(e));Gq(Ck(d),AWV);F3(Ck(d));h=Ks(FD(),d.eO);b=new M;O(b);G(HT(G(b,B(631)),h),B(195));$rt_globals.console.info($rt_ustr(N(b)));WZ(d);HF(d);}}
function X8(){C.call(this);this.mV=null;}
function ASw(a,b){HE(a.mV,b);}
var Zm=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["cx",AU2(AL5),"ct",AU1(AGN)],RR,0,C,[],0,3,0,0,0,Ne,0,C,[],3,3,0,0,0,MH,0,C,[],3,3,0,0,0,WF,0,C,[Ne,MH],0,3,0,0,0,ZS,0,C,[],4,0,0,0,0,Zz,0,C,[],4,3,0,0,0,Gt,0,C,[],0,3,0,0,0,D3,0,Gt,[],0,3,0,0,0,Bq,0,D3,[],0,3,0,0,0,ABu,0,Bq,[],0,3,0,0,0,Dh,0,C,[],3,3,0,0,0,CI,0,C,[],3,3,0,0,0,IT,0,C,[],3,3,0,0,0,Bv,"String",1,C,[Dh,CI,IT],0,3,0,EN,["ct",AU1(AGM),"cx",AU2(Bo),"jf",AU1(Lm),"jw",AU2(AI3)],EH,0,Gt,[],0,3,0,0,0,Hc,0,EH,[],0,3,0,0,0,AA7,0,Hc,[],0,3,0,0,0,DV,0,C,[Dh],1,3,0,0,0,Fg,0,
DV,[CI],0,3,0,0,["jw",AU2(ALh)],Gg,0,C,[Dh,IT],0,0,0,0,["hx",AU2(Jz),"ct",AU1(N)],HW,0,C,[],3,3,0,0,0,M,0,Gg,[HW],0,3,0,0,["lj",AU5(ALc),"ku",AU4(AH_),"ct",AU1(DT),"hx",AU2(ALk),"lS",AU3(ALO)],Er,0,Hc,[],0,3,0,0,0,ACD,0,Er,[],0,3,0,0,0,AAV,0,Er,[],0,3,0,0,0,T0,0,C,[],3,3,0,0,0,Dr,0,C,[],3,3,0,0,0,O0,0,C,[],3,0,0,0,0,IA,0,C,[T0,Dr,O0],1,3,0,0,["dV",AU1(FN)],RD,0,IA,[],0,3,0,0,0,YZ,0,C,[],0,3,0,0,0,ADU,0,C,[],4,3,0,0,0,Z,0,C,[],3,3,0,0,0,T8,0,C,[Z],0,3,0,0,0,Bw,0,C,[],3,3,0,0,0,ABK,0,C,[Bw],1,3,0,0,0,Y4,0,C,[],
3,3,0,0,0,ADt,0,C,[],3,3,0,0,0,ADn,0,C,[],3,3,0,0,0,LR,0,C,[],0,3,0,0,0,ZP,0,C,[Bw],1,3,0,0,0,BM,0,C,[Bw],3,3,0,0,0,T9,0,C,[BM],0,3,0,0,["Y",AU2(AE1)],T7,0,C,[BM],0,3,0,0,["Y",AU2(AQM)],Ls,0,C,[],4,3,0,0,0,ADj,0,C,[],4,3,0,0,0,AAw,0,C,[],0,3,0,0,0,AEU,0,C,[],4,3,0,0,0,Nk,0,C,[BM],0,3,0,0,["Y",AU2(AM_)]]);
$rt_metadata([ADJ,0,C,[Bw],1,3,0,0,0,Zg,0,C,[],0,3,0,0,0,JN,0,C,[Bw],3,3,0,0,0,AAM,0,C,[JN],1,3,0,0,["Hb",AU2(ARZ),"Gw",AU1(AG6)],ABi,0,C,[Bw],1,3,0,0,0,FM,0,C,[],3,3,0,0,0,Tb,0,C,[FM],0,3,0,0,0,Bx,0,Bq,[],0,3,0,0,0,ACi,0,C,[],4,3,0,0,0,GA,0,Bq,[],0,3,0,0,0,IM,0,Bq,[],0,3,0,0,0,C7,0,C,[CI],0,3,0,0,0,MB,0,C,[Bw],3,3,0,0,0,SQ,0,C,[MB],3,3,0,0,0,Ej,0,C,[Bw],3,3,0,0,0,ADT,0,C,[SQ,Ej],3,3,0,0,0,NU,0,C,[BM],0,3,0,0,["Y",AU2(AOh)],ABf,0,C,[],4,3,0,0,0,Pm,0,C,[Ej],3,3,0,0,0,Rt,0,C,[Ej],3,3,0,0,0,Ri,0,C,[Ej],3,3,0,0,
0,TU,0,C,[Ej],3,3,0,0,0,Xp,0,C,[Ej],3,3,0,0,0,U5,0,C,[Ej,Pm,Rt,Ri,TU,Xp],3,3,0,0,0,OI,0,C,[],3,3,0,0,0,Y3,0,C,[Bw,U5,OI,JN],1,3,0,0,["E6",AU3(ALJ),"Hg",AU3(AL7),"yJ",AU2(AF7),"DC",AU4(ANe),"BA",AU2(AQ7),"BK",AU1(AG9),"z5",AU4(AFn)],BD,0,Bq,[],0,3,0,0,0,Yr,0,Bq,[],0,3,0,0,0,G_,0,Bx,[],0,3,0,0,0,AAf,0,C,[],0,3,0,0,0,D5,0,C,[],4,3,0,Kw,["cx",AU2(AQT)],OH,0,C,[],3,3,0,0,0,SZ,0,C,[OH],0,3,0,0,0,Cb,0,C,[],3,3,0,0,0,R3,0,C,[Cb],0,3,0,0,0,Bj,0,C,[],3,3,0,0,0,ABE,0,C,[Bj],0,3,0,0,0,AAO,0,C,[Bw],1,3,0,0,0,ABc,0,C,[Bw],
1,3,0,0,0,Rm,0,C,[Bw],3,3,0,0,0,VY,0,C,[Rm],0,3,0,0,["DE",AU2(AKk)],VR,0,C,[Bj],0,3,0,0,0,P_,0,C,[Bw],3,3,0,0,0,VS,0,C,[P_],0,3,0,0,["uI",AU3(AIs)],AD2,0,C,[Bw],1,3,0,0,0,Cl,0,C,[Bw],3,3,0,0,0,VP,0,C,[Cl],0,3,0,0,["cb",AU2(AOp)],K4,0,C,[],3,3,0,0,0,EC,0,C,[K4],1,3,0,0,0,Em,0,C,[],3,3,0,0,0]);
$rt_metadata([XS,0,C,[K4],3,3,0,0,0,Nd,0,C,[XS],3,3,0,0,0,O$,0,EC,[Em,Dh,Nd],0,3,0,0,0,VQ,0,C,[BM],0,3,0,0,["Y",AU2(APF)],AEm,0,C,[Bw],1,3,0,0,0,AEP,0,C,[Bw],1,3,0,0,0,JS,0,C,[Bw],3,3,0,0,0,Xh,0,C,[JS],0,3,0,0,["uX",AU2(AOL)],AA6,0,C,[Bw],1,3,0,0,0,Xi,0,C,[JS],0,3,0,0,["uX",AU2(AMo)],Pv,0,C,[],0,3,0,0,0,Lk,0,C,[],1,3,0,0,0,ADr,0,Lk,[],0,3,0,0,0,CC,0,C,[Dr],1,3,0,0,["cM",AU2(ARG)],I9,0,C,[FM],0,3,0,0,["l2",AU3(Jv)],AAm,0,C,[],0,3,0,0,0,WK,0,C,[Cl],0,3,0,0,["cb",AU2(ANP)],WL,0,C,[Cl],0,3,0,0,["cb",AU2(AN5)],WM,
0,C,[Cl],0,3,0,0,["cb",AU2(AMm)],WN,0,C,[Cl],0,3,0,0,["cb",AU2(ALK)],WO,0,C,[Cl],0,3,0,0,["cb",AU2(AL_)],WP,0,C,[Cl],0,3,0,0,["cb",AU2(AOE)],WQ,0,C,[Cl],0,3,0,0,["cb",AU2(AJZ)],WR,0,C,[Cl],0,3,0,0,["cb",AU2(AR6)],WS,0,C,[Cl],0,3,0,0,["cb",AU2(AJa)],WT,0,C,[Cl],0,3,0,0,["cb",AU2(APN)],Yb,0,C,[Cl],0,3,0,0,["cb",AU2(ARH)],Yc,0,C,[Cl],0,3,0,0,["cb",AU2(ALZ)],Yd,0,C,[Cl],0,3,0,0,["cb",AU2(AMq)],Ye,0,C,[Cl],0,3,0,0,["cb",AU2(AOj)],Ut,0,C,[],3,3,0,0,0,UG,0,C,[Ut],0,3,0,0,0,UE,0,C,[Cl],0,3,0,0,["cb",AU2(AK4)],MC,0,
C,[],0,3,0,0,0,AEc,0,C,[],0,3,0,0,0,IQ,0,C,[],3,3,0,0,0,Cs,0,C,[IQ],3,3,0,0,0,Cv,0,C,[],3,3,0,0,["bS",AU2(AK9),"b6",AU3(AQN),"cN",AU3(AFQ),"cq",AU4(AOC)],DF,0,C,[],3,3,0,0,0,Ex,0,C,[IQ],3,3,0,0,0,EJ,0,C,[],3,3,0,0,0,EO,0,C,[],3,3,0,0,0,E$,0,C,[EO],3,3,0,0,0,Qi,0,C,[Dr],0,3,0,0,0,Bm,0,C,[],0,3,0,0,["ct",AU1(Yw)],WW,0,C,[],0,3,0,0,0,ADq,0,C,[],0,3,0,0,0,Zw,0,C,[],3,3,0,0,0,P$,0,C,[],0,3,0,0,0,LH,0,C,[],0,3,0,0,0]);
$rt_metadata([Ea,0,LH,[],0,3,0,0,0,Wt,0,Ea,[],0,3,0,0,0,EB,0,Ea,[],0,3,0,0,0,QY,0,Ea,[],0,3,0,0,0,AC7,0,EB,[],0,3,0,0,0,ACH,0,EB,[],0,3,0,0,0,ZR,0,EB,[],0,3,0,0,0,Sa,0,C,[Bw],3,3,0,0,0,AES,0,C,[Sa],3,3,0,0,0,P7,0,C,[Dr],0,3,0,0,0,P9,0,C,[],0,3,0,0,0,Cj,0,C,[CI,Dh],1,3,0,0,0,GK,0,Cj,[],12,3,0,Zr,0,Mj,0,C,[],3,3,0,0,0,TA,0,C,[Mj],3,3,0,0,0,UV,0,C,[],3,3,0,0,0,Gl,0,C,[TA,UV],1,3,0,0,0,Jo,0,Gl,[],0,3,0,0,0,AAS,0,Jo,[],0,3,0,0,0,F_,0,Gl,[],1,3,0,0,0,Lr,0,F_,[],0,3,0,0,["jZ",AU4(AKW)],DX,0,Cj,[],12,3,0,AQ0,0,Jf,0,
C,[CI],1,3,0,0,0,Mn,0,Jf,[],0,3,0,AAG,0,Kp,0,C,[],32,0,0,Y2,0,Pd,0,C,[],0,3,0,0,0,GO,0,Cj,[],12,0,0,AB9,0,Gf,0,Cj,[],12,0,0,AB_,0,VZ,0,D3,[],0,3,0,0,0,ADi,0,BD,[],0,3,0,0,0,Mm,0,C,[Bw],3,3,0,0,0,XP,0,C,[Mm],0,3,0,0,["Y",AU2(APi)],XQ,0,C,[Mm],0,3,0,0,["Y",AU2(AGF)],GZ,0,C,[],1,3,0,0,0,St,0,C,[],3,3,0,0,0,K_,0,GZ,[CI,HW,IT,St],1,3,0,0,0,JP,0,GZ,[CI],1,3,0,0,0,HD,0,C,[],0,3,0,G8,0,Nj,0,CC,[],0,3,0,0,["bL",AU1(ALU),"ck",AU3(AKn)],CQ,0,CC,[],1,3,0,0,["ck",AU3(GT)],Qv,0,C,[],3,3,0,0,0,LI,0,C,[Qv],3,3,0,0,0,Lf,0,C,
[],3,3,0,0,0,Mg,0,CQ,[Cv,LI,Lf,DF,EJ,E$],0,3,0,0,["gm",AU3(AJ9),"cM",AU2(AIM),"bL",AU1(AQS),"fP",AU1(APE),"uB",AU1(AJN),"u3",AU1(AO5),"sK",AU2(APL),"ck",AU3(AOF),"h2",AU2(AGD),"bS",AU2(AL2),"cq",AU4(ALY),"b6",AU3(AF_),"cN",AU3(AJb),"cX",AU4(AN2),"dl",AU1(ALF)],V$,0,Mg,[],0,3,0,0,["fP",AU1(AH4)],AEA,0,C,[],0,3,0,0,0,ABB,0,C,[Bw],1,3,0,0,0,J4,0,K_,[],1,0,0,0,0,ABh,0,J4,[],0,0,0,0,0,KX,0,C,[],1,3,0,0,0]);
$rt_metadata([LP,0,C,[],0,3,0,0,0,Zd,0,C,[],0,3,0,0,0,Im,0,C,[Bw],3,3,0,0,0,Ns,0,C,[Im],0,3,0,0,["Y",AU2(AIV)],Nr,0,C,[Im],0,3,0,0,["Y",AU2(ANd)],Nq,0,C,[BM],0,3,0,0,["Y",AU2(AN0)],Np,0,C,[BM],0,3,0,0,["Y",AU2(AHg)],X6,0,C,[Z],0,3,0,0,["l",AU2(AMX)],X_,0,C,[Z],0,3,0,0,["l",AU2(ANA)],Tr,0,C,[Cb],0,3,0,0,["ca",AU2(ANv)],Tq,0,C,[Cb],0,3,0,0,["ca",AU2(AGg)],Tp,0,C,[Cb],0,3,0,0,["ca",AU2(AJ4)],To,0,C,[Cb],0,3,0,0,["ca",AU2(AJ1)],Tn,0,C,[Cb],0,3,0,0,["ca",AU2(AKG)],Tm,0,C,[Cb],0,3,0,0,["ca",AU2(AGo)],Tl,0,C,[Cb],
0,3,0,0,["ca",AU2(AH6)],Tk,0,C,[Cb],0,3,0,0,["ca",AU2(ANO)],Tj,0,C,[Cb],0,3,0,0,["ca",AU2(ARq)],Ti,0,C,[Cb],0,3,0,0,["ca",AU2(ASh)],QX,0,C,[Cb],0,3,0,0,["ca",AU2(ALy)],QT,0,C,[Cb],0,3,0,0,["ca",AU2(AFb)],QV,0,C,[Cb],0,3,0,0,["ca",AU2(AIR)],QR,0,C,[Cb],0,3,0,0,["ca",AU2(ALP)],QS,0,C,[Cb],0,3,0,0,["ca",AU2(APB)],QQ,0,C,[Cb],0,3,0,0,["ca",AU2(AE3)],G7,0,C,[],0,3,0,0,0,O3,0,G7,[],0,3,0,0,0,ADB,0,C,[],0,3,0,0,0,My,0,G7,[],0,3,0,0,0,Uv,0,C,[Bw],3,3,0,0,0,NN,0,C,[Uv],0,3,0,0,["uX",AU2(ALq)],Vd,0,C,[Z],0,3,0,0,["l",
AU2(Wv)],Xc,0,JP,[],0,0,0,0,0,ACX,0,C,[Cv,DF],0,0,0,0,["bS",AU2(AON),"cq",AU4(ASn),"b6",AU3(AGG),"cN",AU3(ANb),"cX",AU4(ALH)],HO,0,C,[],3,3,0,0,["vc",AU1(AHH),"sz",AU1(ASu)],AAX,0,C,[HO,Cv,Lf],0,3,0,0,["sz",AU1(AIA),"vc",AU1(AHc),"uB",AU1(Ym),"u3",AU1(WY),"sK",AU2(Yn),"cN",AU3(U$),"b6",AU3(Vg),"cq",AU4(QW),"bS",AU2(Py),"gR",AU2(ANq)],HL,0,C,[],3,3,0,0,0,Q$,0,C,[HL],0,3,0,0,["hR",AU2(AKi)],Q8,0,C,[HL],0,3,0,0,["hR",AU2(AMn)],Q9,0,C,[Z],0,3,0,0,["l",AU2(AF6)],Q6,0,C,[Z],0,3,0,0,["l",AU2(AFG)],Q7,0,C,[Cs],0,3,
0,0,["bB",AU2(AL3)],HG,0,C,[Cs],0,3,0,0,["bB",AU2(APp)],Q4,0,C,[Z],0,3,0,0,["l",AU2(ANX)],Q5,0,C,[Ex],0,3,0,0,["bB",AU2(AKU)],ACs,0,C,[Bw],1,3,0,0,0,Zq,0,C,[],3,3,0,0,0,Yj,0,C,[],0,3,0,0,0,Sy,0,C,[Cs],0,3,0,0,["bB",AU2(ASq)],Sz,0,C,[Cs],0,3,0,0,["bB",AU2(AFs)]]);
$rt_metadata([Ep,0,C,[],3,3,0,0,0,ABz,0,C,[Cv,Ep],0,3,0,0,["bS",AU2(ZD),"cq",AU4(ABy),"b6",AU3(Yx),"cN",AU3(AEC),"gn",AU3(ARd)],Y0,0,C,[Ep,HO],0,3,0,0,["vc",AU1(AHH),"sz",AU1(ASu),"gn",AU3(AHa),"gR",AU2(AFH)],ABj,0,C,[],0,3,0,0,0,K$,0,C,[],0,3,0,0,0,Iy,0,C,[],0,3,0,0,0,V_,0,C,[],0,3,0,0,0,YC,0,C,[],0,3,0,0,0,Nw,0,C,[],0,3,0,0,0,EW,0,C,[Dr],0,0,0,0,0,ABM,0,C,[],0,3,0,0,0,ABN,0,C,[Dr],0,3,0,0,0,Wr,0,C,[],3,3,0,0,0,Hp,0,C,[Wr],3,3,0,0,0,EP,0,C,[Hp],1,3,0,0,0,Jb,0,C,[Hp],3,3,0,0,0,F5,0,EP,[Jb],1,3,0,0,["cx",AU2(AME)],In,
0,C,[],3,3,0,0,0,N1,0,F5,[Em,Dh,In],0,3,0,0,["rA",AU2(Bt),"nq",AU1(ANx),"uu",AU2(En)],U3,0,C,[Z],0,3,0,0,0,B4,0,C,[],0,3,0,0,["cx",AU2(AR1)],U2,0,C,[Z],0,3,0,0,["l",AU2(APo)],UY,0,C,[Z],0,3,0,0,["l",AU2(ANf)],UX,0,C,[Bj],0,3,0,0,["p",AU1(APl)],U0,0,C,[Bj],0,3,0,0,["p",AU1(AKg)],UZ,0,C,[Bj],0,3,0,0,["p",AU1(AMz)],Vp,0,C,[Bj],0,3,0,0,["p",AU1(AOM)],Vo,0,C,[Bj],0,3,0,0,["p",AU1(AJU)],Fs,0,Cj,[],12,3,0,AFx,0,Km,0,C,[],4,3,0,AKE,0,UM,0,C,[],3,3,0,0,0,MI,0,C,[Bj],0,3,0,0,["p",AU1(ALI)],MJ,0,C,[Bj],0,3,0,0,["p",AU1(AJ_)],Ya,
0,C,[],3,3,0,0,0,IC,0,C,[],0,3,0,0,0,HM,0,C,[],0,3,0,0,0,EY,0,C,[],0,3,0,0,0,Mp,0,EY,[],0,3,0,0,0,ML,0,EY,[],0,3,0,0,0,Qf,0,EY,[],0,3,0,0,0,GU,0,C,[],3,3,0,0,0,RE,0,C,[],3,3,0,0,0,Gi,0,C,[CI],0,3,0,0,0,Jk,0,C,[],0,3,0,0,0,KN,0,F_,[],0,3,0,0,["jZ",AU4(AIQ)],Wm,0,C,[],3,3,0,0,0,S8,0,C,[Wm],0,3,0,0,["ct",AU1(AHP)],UO,0,C,[],3,3,0,0,0,K9,"JsFileHandle",5,C,[UO],0,3,0,0,["ct",AU1(AK2)],NY,0,C,[UM],0,3,0,0,0]);
$rt_metadata([ABw,0,EC,[Em,Dh],0,3,0,0,0,Cy,0,C,[],0,3,0,0,0,NO,0,C,[Bj],0,3,0,0,["p",AU1(ARN)],B7,0,C,[],0,3,0,0,0,IS,0,C,[],0,3,0,0,0,AEl,0,C,[CI],0,3,0,0,["cx",AU2(APV),"jw",AU2(AGV)],XG,0,C,[FM],0,3,0,0,["l2",AU3(AJH)],XI,0,C,[FM],0,3,0,0,["l2",AU3(ALn)],EZ,0,C,[],0,3,0,0,0,G4,0,F5,[In],1,0,0,0,["uu",AU2(AMh)],XX,0,G4,[In],0,0,0,0,["nq",AU1(AIO),"rA",AU2(ARA)],YO,0,C,[],0,3,0,0,["ct",AU1(AJP)],O2,0,C,[Hp],3,3,0,0,0,Gc,0,EP,[O2],1,3,0,0,0,Ke,0,Gc,[],1,0,0,0,0,VO,0,Ke,[],0,0,0,0,0,Lx,0,EC,[],1,0,0,0,0,VM,
0,Lx,[],0,0,0,0,0,VN,0,G4,[],0,0,0,0,0,FC,0,C,[],3,3,0,0,0,VK,0,C,[FC],0,0,0,0,0,Pq,0,C,[FC],3,3,0,0,0,VL,0,C,[Pq],0,0,0,0,0,Yo,0,C,[FM],0,3,0,0,0,NF,0,C,[FC],0,0,0,0,0,KT,0,KX,[],1,3,0,0,0,Ps,0,KT,[],0,3,0,0,0,Ir,0,D3,[],0,3,0,0,0,XM,0,C,[Im],0,3,0,0,["Y",AU2(AHA)],XK,0,C,[BM],0,3,0,0,["Y",AU2(AFq)],XL,0,C,[BM],0,3,0,0,["Y",AU2(AJy)],HS,0,C,[],0,3,0,0,0,Hf,0,C,[],3,3,0,0,0,KE,0,C,[Hf,Em],0,0,0,0,["cx",AU2(AHU)],Ib,0,KE,[],0,0,0,0,0,Ky,0,CQ,[LI],0,3,0,0,["cM",AU2(AHq),"bL",AU1(AKj),"fP",AU1(AOd),"ck",AU3(AMK),
"kS",AU3(AAs),"h2",AU2(AGi)],Y7,0,CC,[],0,3,0,0,["cM",AU2(AFB),"bL",AU1(AIH),"ck",AU3(APh)],Wp,0,CQ,[Cv,Ep],0,3,0,0,["gn",AU3(AQI),"ck",AU3(AIa),"bL",AU1(AIW),"bS",AU2(AOz),"b6",AU3(AI4),"cN",AU3(AGK),"cq",AU4(ANR)],XF,0,CQ,[Ep],0,3,0,0,["gn",AU3(AI7),"bL",AU1(AOa),"ck",AU3(AHk),"cM",AU2(APn)],Yq,0,CQ,[Cv],0,3,0,0,["bS",AU2(AK9),"b6",AU3(AQN),"cN",AU3(AFQ),"cq",AU4(AOC),"bL",AU1(AOK),"cM",AU2(AHN)],Pi,0,CC,[],0,3,0,0,["bL",AU1(AFT),"ck",AU3(AQq)],Db,0,CC,[],0,3,0,0,["bL",AU1(Ss),"ck",AU3(S0)],Ra,"SelectFileTest",
6,Db,[],0,3,0,0,0,AEt,"WorkerTest",7,Db,[],0,3,0,0,0,W7,"RenderTexture",6,Db,[],0,3,0,0,["cM",AU2(ALi),"bL",AU1(AFu),"ck",AU3(AN9)],Sv,"ScissorDemo",6,Db,[],0,3,0,0,["bL",AU1(ARU),"ck",AU3(AHb)],OW,0,CC,[],0,3,0,0,["bL",AU1(ARX),"ck",AU3(AJq),"cM",AU2(AHT)],Iw,"ClipboardTest",6,Db,[Cv],0,3,0,0,["bS",AU2(AK9),"b6",AU3(AQN),"cN",AU3(AFQ),"cq",AU4(APb)],Qe,0,CC,[],0,3,0,0,["bL",AU1(ARO),"ck",AU3(AMg)],WH,0,CQ,[Ep],0,3,0,0,["gn",AU3(AKr),"bL",AU1(ASb),"ck",AU3(AOr),"cM",AU2(ALe)]]);
$rt_metadata([Rw,0,Ky,[],0,3,0,0,["fP",AU1(AKx),"kS",AU3(AMk)],IW,0,C,[],0,3,0,0,0,ACB,0,C,[],3,3,0,0,0,ZE,0,C,[],0,3,0,0,0,H3,0,C,[],0,3,0,0,0,ADs,0,C,[],0,3,0,0,0,Ms,0,C,[Hf,Dh],0,3,0,0,0,Jr,0,Ms,[],0,0,0,0,0,AD_,0,C,[],0,3,0,0,0,Sg,0,C,[Cs],0,3,0,0,["bB",AU2(AMv)],Sk,0,C,[Z],0,3,0,0,["l",AU2(ARt)],Sj,0,C,[EJ],0,3,0,0,["gm",AU3(AMw)],Si,0,C,[E$],0,3,0,0,["dl",AU1(ARc)],Sh,0,C,[DF],0,3,0,0,["cX",AU4(AQC)],Sl,0,C,[Ex],0,3,0,0,["bB",AU2(AJC)],ADC,0,IC,[],0,3,0,0,0,T5,0,C,[Cv],0,0,0,0,["bS",AU2(AOk),"cq",AU4(APT),
"b6",AU3(AIE),"cN",AU3(AIf)],RW,0,C,[Cs],0,3,0,0,["bB",AU2(AOe)],RV,0,C,[Cs],0,3,0,0,["bB",AU2(AQP)],RY,0,C,[EJ],0,3,0,0,["gm",AU3(ARk)],RX,0,C,[Bj],0,3,0,0,["p",AU1(ARi)],RU,0,C,[Ex],0,3,0,0,["bB",AU2(AMB)],RT,0,C,[DF],0,3,0,0,["cX",AU4(AKe)],G$,0,B4,[],0,3,0,0,0,Vc,0,C,[],0,3,0,0,0,Z1,0,C,[],0,3,0,0,0,Tt,0,C,[Cs],0,3,0,0,["bB",AU2(AOJ)],Tw,0,C,[Ex],0,3,0,0,["bB",AU2(AFg)],AEq,0,C,[],0,3,0,0,["cx",AU2(ASm)],Tv,0,C,[Bj],0,3,0,0,["p",AU1(AJY)],Ts,0,C,[Bj],0,3,0,0,["p",AU1(AP6)],C$,0,C,[],0,3,0,0,0,OL,0,C,[Cs],
0,3,0,0,["bB",AU2(AG_)],OM,0,C,[Ex],0,3,0,0,["bB",AU2(AQm)],ACu,0,C,[],0,3,0,0,0,ON,0,C,[DF],0,3,0,0,["cX",AU4(ANn)],AEb,0,C,[],0,3,0,0,0,Uh,0,C,[Ep],0,3,0,0,["gn",AU3(AM3)],Ui,0,C,[Cs],0,3,0,0,["bB",AU2(AFl)],Nv,0,C,[],3,3,0,0,0,ADz,0,C,[Nv],0,3,0,0,0,WG,0,C,[Cv],0,0,0,0,["cq",AU4(AOC),"b6",AU3(AG5),"cN",AU3(AOu),"bS",AU2(AIy)],S5,0,C,[DF],0,3,0,0,["cX",AU4(AHS)],Qb,0,C,[Cs],0,3,0,0,["bB",AU2(APe)],RA,0,C,[Z],0,3,0,0,["l",AU2(AFO)],Rz,0,C,[Z],0,3,0,0,["l",AU2(AR2)],Ry,0,C,[Z],0,3,0,0,["l",AU2(AIc)],Rx,0,C,
[Z],0,3,0,0,["l",AU2(ANh)],Rv,0,C,[Z],0,3,0,0,["l",AU2(AMp)],Ru,0,C,[Z],0,3,0,0,["l",AU2(AOs)]]);
$rt_metadata([T4,0,C,[Cv],0,0,0,0,["cN",AU3(AFQ),"cq",AU4(AOC),"bS",AU2(AQo),"b6",AU3(AMu)],CZ,0,C,[],3,3,0,G9,0,Ur,0,C,[Cv],0,0,0,0,["cq",AU4(AOC),"b6",AU3(ANw),"cN",AU3(AG7),"bS",AU2(AF0)],N4,0,C,[DF],0,3,0,0,["cX",AU4(AFS)],SI,0,C,[Cs],0,3,0,0,["bB",AU2(AQt)],SH,0,C,[EJ],0,3,0,0,["gm",AU3(AIz)],SF,0,C,[EJ],0,3,0,0,["gm",AU3(APU)],SE,0,C,[E$],0,3,0,0,["dl",AU1(ANQ)],SG,0,C,[E$],0,3,0,0,["dl",AU1(AGX)],Sb,0,C,[Cs],0,3,0,0,["bB",AU2(AIG)],QC,0,C,[Cs],0,3,0,0,["bB",AU2(AJd)],QD,0,C,[Ex],0,3,0,0,["bB",AU2(AFm)],QE,
0,C,[DF],0,3,0,0,["cX",AU4(AOS)],ABl,0,C,[],0,3,0,0,["cx",AU2(AQ2)],CW,0,C,[],3,3,0,AM9,0,Ca,0,Cj,[],12,3,0,ABI,0,IH,0,C,[],0,3,0,0,0,Hz,0,C,[],0,3,0,0,0,AC_,0,C,[],0,3,0,0,0,Gv,0,C,[],4,3,0,0,0,AEW,0,C,[],0,3,0,0,0,DS,0,C,[],3,3,0,AJ5,0,OU,0,C,[Bw],3,3,0,0,0,Pb,0,C,[OU],0,3,0,0,["uI",AU3(AJj)],OV,0,C,[Bw],3,3,0,0,0,O_,0,C,[OV],0,3,0,0,["uI",AU3(AKw)],ZT,0,C,[],0,3,0,0,0,YV,0,C,[Bw],3,3,0,0,0,Jq,0,C,[Dr],0,3,0,0,["dV",AU1(ACM)],TZ,0,C,[],0,3,0,0,0,DR,0,C,[],3,3,0,X7,0,Gm,0,C,[],3,3,0,0,0,Xm,0,C,[Gm],0,3,0,0,
["nD",AU4(AO8)],Xn,0,C,[Gm],0,3,0,0,0,Wb,0,C,[Cv],0,0,0,0,["bS",AU2(AFr),"cq",AU4(AO$),"b6",AU3(AM7),"cN",AU3(AKF)],Yp,0,C,[Z],0,3,0,0,["l",AU2(AOv)],ABX,0,C,[],0,3,0,0,0,PJ,0,C,[Z],0,3,0,0,["l",AU2(AKN)],RJ,0,C,[Cv],0,0,0,0,["b6",AU3(AQN),"cN",AU3(AFQ),"cq",AU4(AOC),"bS",AU2(AFv)],Z8,0,C,[],0,3,0,0,0,Ci,0,Cj,[],12,3,0,ACa,0,AEg,0,C,[],0,3,0,0,0,AAU,0,C,[Bw],4,3,0,0,0,AEI,0,C,[],0,3,0,0,0,AD5,0,C,[],3,3,0,0,0,CR,0,C,[Bw],1,3,0,0,0,ACm,0,CR,[],1,3,0,0,0,AC4,0,CR,[],1,3,0,0,0,ZY,0,CR,[],1,3,0,0,0,AAh,0,CR,[],
1,3,0,0,0]);
$rt_metadata([ADA,0,CR,[],1,3,0,0,0,Uw,0,C,[Bj],0,3,0,0,["p",AU1(AL6)],H2,0,C,[],0,3,0,0,0,AAE,0,C,[],4,3,0,0,0,V9,0,C,[Cv],0,0,0,0,["b6",AU3(AQN),"cN",AU3(AFQ),"cq",AU4(AOC),"bS",AU2(APx)],AAQ,0,C,[Bw],1,3,0,0,0,IJ,0,Bq,[],0,3,0,0,0,OP,0,C,[Z],0,3,0,0,["l",AU2(AGh)],Wg,0,C,[EO],0,3,0,0,["dl",AU1(ARR)],AEO,0,C,[],0,3,0,0,0,ACj,0,C,[],3,3,0,0,0,LE,0,C,[],3,3,0,0,0,RB,0,C,[LE],0,3,0,0,["qQ",AU2(AML)],Qz,0,C,[Z],0,3,0,0,["l",AU2(AQ5)],Zp,0,C,[],0,3,0,0,0,YB,0,C,[],0,3,0,0,0,No,0,C,[Dr],0,3,0,0,0,S7,0,C,[Z],0,3,
0,0,["l",AU2(AHE)],YS,0,C,[],0,3,0,0,0,ADO,0,C,[CI],0,3,0,0,["cx",AU2(AFC),"jf",AU1(AOR),"jw",AU2(AOn)],Tz,0,C,[Z],0,3,0,0,["l",AU2(AHK)],SC,0,C,[],3,3,0,0,0,FL,0,Ir,[],0,3,0,0,0,Xl,0,EH,[],0,3,0,0,0,Qn,0,C,[Z],0,3,0,0,["l",AU2(ANM)],Up,0,C,[Bj],0,3,0,0,["p",AU1(AQj)],Mb,0,DV,[CI],0,3,0,0,0,Fz,0,C,[],0,0,0,0,0,J7,0,C,[],4,3,0,0,0,VH,0,C,[],0,3,0,0,0,L6,0,C,[],1,3,0,0,0,AA$,0,CR,[],1,3,0,0,0,QN,0,C,[Z],0,3,0,0,["l",AU2(AJM)],V0,0,C,[Z],0,3,0,0,["l",AU2(AR4)],Qq,0,C,[Z],0,3,0,0,["l",AU2(AMS)],EK,0,C,[Dr],0,3,
0,0,["dV",AU1(ANl),"iU",AU1(AQ8),"iX",AU4(P1),"eV",AU2(ZH),"j7",AU2(AID),"jX",AU2(APZ),"px",AU3(AR$),"cq",AU4(AQw),"b6",AU3(APO),"cN",AU3(AQV),"bS",AU2(AMG),"cX",AU4(AIv)],GB,0,EK,[],0,3,0,0,0,Q_,0,GB,[HO],0,3,0,0,["vc",AU1(AHH),"sz",AU1(ASu),"dV",AU1(ASo),"px",AU3(AHD),"eV",AU2(AKo),"jX",AU2(ALA),"j7",AU2(AId),"uL",AU1(Z0),"bS",AU2(ARg),"b6",AU3(AFI),"cq",AU4(AFX),"gR",AU2(AK8)],V8,0,C,[Bj],0,3,0,0,["p",AU1(AR_)],AAN,0,EK,[],0,3,0,0,["dV",AU1(AF1),"iX",AU4(AHL),"eV",AU2(APu),"cq",AU4(AJV),"b6",AU3(AQz),"cN",
AU3(AJt),"bS",AU2(AKP),"cX",AU4(APH),"iU",AU1(AM2)],Wd,0,GB,[],0,3,0,0,["uL",AU1(ANN),"iU",AU1(ALD),"jX",AU2(AKq),"eV",AU2(AH8),"j7",AU2(AK6)],PB,0,C,[Z],0,3,0,0,0,VA,0,C,[Bj],0,3,0,0,["p",AU1(AN8)],RH,0,C,[Bj],0,3,0,0,["p",AU1(AJ$)],XU,0,C,[],0,3,0,0,0,HZ,0,C,[],0,3,0,0,0,TM,0,EK,[],0,3,0,0,0,Un,0,C,[],0,3,0,0,0,Yu,0,C,[Bj],0,3,0,0,["p",AU1(AIj)],VI,0,C,[Z],0,3,0,0,["l",AU2(AQ6)]]);
$rt_metadata([VJ,0,C,[Z],0,3,0,0,["l",AU2(AF9)],Jt,0,C,[],0,3,0,0,0,D0,0,Bq,[],0,3,0,0,0,ACF,0,EH,[],0,3,0,0,0,Su,0,C,[Z],0,3,0,0,0,NX,0,C,[Z],0,3,0,0,["l",AU2(AFR)],NV,0,C,[Z],0,3,0,0,["l",AU2(AHW)],Kr,0,L6,[],1,3,0,0,0,TQ,0,Kr,[],0,3,0,0,0,P3,0,C,[Z],0,3,0,0,["l",AU2(AGY)],MU,0,C,[EO],0,3,0,0,["dl",AU1(AHJ)],MV,0,C,[EO],0,3,0,0,["dl",AU1(AN$)],S$,0,C,[EO],0,3,0,0,["dl",AU1(APS)],Vz,0,C,[Bj],0,3,0,0,["p",AU1(AM5)],QO,0,C,[BM],0,3,0,0,["Y",AU2(AE_)],UU,0,C,[BM],0,3,0,0,["Y",AU2(ARD)],MW,0,C,[Z],0,3,0,0,0,AAx,
0,C,[Cb],0,3,0,0,0,ZU,0,C,[Cb],0,3,0,0,0,Sx,0,C,[Z],0,3,0,0,["l",AU2(AF8)],Sw,0,C,[Z],0,3,0,0,["l",AU2(AGP)],Qk,0,C,[Z],0,3,0,0,["l",AU2(AOD)],Tg,0,C,[Bj],0,3,0,0,["p",AU1(AKa)],N5,0,C,[Z],0,3,0,0,["l",AU2(ANL)],J1,0,DV,[CI],0,3,0,0,0,LA,0,C,[],4,3,0,0,0,MX,0,C,[BM],0,3,0,0,["Y",AU2(ASt)],Ua,0,C,[],0,3,0,0,0,Nz,0,C,[Gm],0,3,0,0,["nD",AU4(ARj)],Sf,0,DV,[CI],0,3,0,0,0,Fi,0,Bq,[],0,3,0,0,0,NM,0,C,[],0,3,0,0,0,ADR,0,C,[],0,3,0,0,0,S_,0,C,[],0,0,0,0,0,Zu,0,C,[],3,3,0,0,0,XC,0,C,[BM],0,3,0,0,["Y",AU2(APA)],XB,0,C,
[BM],0,3,0,0,["Y",AU2(AH2)],W3,0,C,[BM],0,3,0,0,["Y",AU2(AJx)],W2,0,C,[BM],0,3,0,0,["Y",AU2(AKu)],YU,0,C,[],1,3,0,0,0,W$,0,C,[],3,3,0,0,0,Xv,0,C,[Cl],0,3,0,0,["cb",AU2(AJo)],AAy,0,C,[],0,3,0,0,0,AEa,0,C,[],0,3,0,0,0,UF,0,C,[Bj],0,3,0,0,["p",AU1(AJ6)],UH,0,C,[Bj],0,3,0,0,["p",AU1(AO4)],ACP,0,C,[],0,3,0,0,0,I2,0,Fi,[],0,3,0,0,0,HV,0,Bq,[],0,3,0,0,0,LW,0,Bq,[],0,3,0,0,0]);
$rt_metadata([AAY,0,C,[Z],0,3,0,0,0,SA,0,C,[Bj],0,3,0,0,["p",AU1(ARI)],Rh,0,C,[Z],0,3,0,0,["l",AU2(AKS)],SK,0,C,[Bj],0,3,0,0,["p",AU1(AGe)],YD,0,C,[],0,3,0,0,0,G0,0,C,[],0,3,0,0,0,ACY,0,Gc,[],0,0,0,0,0,Pf,0,EP,[],0,0,0,0,0,WU,0,Bx,[],0,3,0,0,0,Qx,0,C,[Mj],3,3,0,0,0,NG,0,C,[Qx],3,3,0,0,0,LZ,0,C,[NG],1,3,0,0,0,AAD,0,LZ,[],0,3,0,0,0,RN,0,C,[Bj],0,3,0,0,["p",AU1(AGR)],RM,0,C,[Bj],0,3,0,0,["p",AU1(AFh)],RL,0,C,[Bj],0,3,0,0,["p",AU1(ALv)],RK,0,C,[Bj],0,3,0,0,["p",AU1(AQh)],PD,0,C,[Bj],0,3,0,0,["p",AU1(APD)],PF,0,
C,[Bj],0,3,0,0,["p",AU1(AKA)],PG,0,C,[Bj],0,3,0,0,["p",AU1(AHj)],XD,0,C,[],3,3,0,0,0,Wn,0,C,[Bj],0,3,0,0,["p",AU1(AGb)],US,0,C,[GU],0,3,0,0,["l6",AU3(AKf)],QG,0,C,[Z],0,3,0,0,["l",AU2(AJ2)],XO,0,C,[Z],0,3,0,0,["l",AU2(ALu)],Vx,0,C,[LE],0,3,0,0,["qQ",AU2(JQ)],S3,0,C,[Bj],0,3,0,0,["p",AU1(AK7)],S4,0,C,[Bj],0,3,0,0,["p",AU1(AMl)],S2,0,C,[Bj],0,3,0,0,["p",AU1(ANI)],On,0,C,[Bj],0,3,0,0,["p",AU1(AJ0)],Om,0,C,[Bj],0,3,0,0,["p",AU1(AQr)],Vr,0,C,[EO],0,3,0,0,["dl",AU1(AHR)],V2,0,C,[Bj],0,3,0,0,["p",AU1(AOi)],V6,0,C,
[Bj],0,3,0,0,["p",AU1(ALd)],V5,0,C,[Bj],0,3,0,0,["p",AU1(AF5)],V3,0,C,[Bj],0,3,0,0,["p",AU1(AHZ)],Xy,0,C,[GU],0,3,0,0,["l6",AU3(AHl)],P2,0,C,[BM],0,3,0,0,["Y",AU2(AIe)],IU,0,C,[Bw],3,3,0,0,0,MQ,0,C,[IU],0,3,0,0,["qP",AU1(AKB)],MA,0,C,[IU],0,3,0,0,["qP",AU1(AE4)],Pz,0,C,[Gm],0,3,0,0,0,XA,0,C,[BM],0,3,0,0,["Y",AU2(AJR)],GS,0,C,[],0,0,0,0,0,UQ,0,GS,[FC],0,0,0,0,0,Re,0,GS,[FC],0,0,0,0,0,Rc,0,C,[Dh],4,3,0,0,0,N_,0,C,[Z],0,3,0,0,["l",AU2(ASl)],Gp,0,Cj,[],12,0,0,U8,0,Tc,0,C,[Z],0,3,0,0,["l",AU2(ALg)]]);
$rt_metadata([BA,0,C,[],1,0,0,0,["ci",AU4(HB),"cn",AU5(HQ),"hr",AU1(AGH),"M",AU2(AQE),"bR",AU2(AQB),"fc",AU1(ARw),"d_",AU1(I7)],UJ,0,C,[],32,0,0,AS0,0,Pg,0,C,[Z],0,3,0,0,["l",AU2(AHG)],Wc,0,C,[Z],0,3,0,0,["l",AU2(AJl)],Yv,0,C,[Bj],0,3,0,0,["p",AU1(AHr)],CN,0,BA,[],0,0,0,Ml,["c",AU4(AGa),"H",AU2(AGv)],GG,0,C,[],0,0,0,0,0,IO,0,BD,[],0,3,0,0,0,Xk,0,C,[BM],0,3,0,0,["Y",AU2(ANZ)],ACb,0,C,[Bw],3,3,0,0,0,Uu,0,C,[BM],0,3,0,0,["Y",AU2(ANz)],R0,0,CN,[],0,0,0,0,["c",AU4(AFK),"H",AU2(APd)],XY,0,CN,[],0,0,0,0,["c",AU4(AHu)],PK,
0,CN,[],0,0,0,0,["c",AU4(AGE)],S9,0,CN,[],0,0,0,0,["c",AU4(AFP),"H",AU2(ANK)],Fw,0,CN,[],0,0,0,0,["c",AU4(AQW)],BV,0,BA,[],1,0,0,0,["c",AU4(ARY),"bX",AU1(AP8),"H",AU2(AKJ)],ADL,0,BV,[],0,0,0,0,["bq",AU3(APC),"ci",AU4(AIS),"cn",AU5(AHi),"H",AU2(AFN)],BR,0,BA,[],0,0,0,0,["c",AU4(AJu),"M",AU2(ANC),"bR",AU2(ALw),"H",AU2(AOm),"d_",AU1(AHe)],I0,0,BR,[],0,0,0,0,["c",AU4(ANk),"H",AU2(AOO)],DQ,0,I0,[],0,0,0,0,["c",AU4(AH0),"M",AU2(AOt)],MO,0,DQ,[],0,0,0,0,["c",AU4(ANu),"H",AU2(AQJ)],Wo,0,DQ,[],0,0,0,0,["c",AU4(AGq),
"H",AU2(AQb)],Rf,0,DQ,[],0,0,0,0,["c",AU4(AG$),"H",AU2(ASp)],TT,0,DQ,[],0,0,0,0,["c",AU4(AFi),"H",AU2(AO3)],Gs,0,BR,[],0,0,0,0,["c",AU4(AFE),"ci",AU4(ALR),"cn",AU5(APj),"bR",AU2(ALr),"fc",AU1(ANG),"d_",AU1(ARz)],GI,0,C,[],1,0,0,0,0,U,0,GI,[],1,0,0,OK,["dd",AU1(AGs),"eE",AU1(AFZ),"iR",AU1(AP2),"gI",AU1(ARv)],ZL,0,U,[],0,0,0,0,["k",AU2(CY),"dd",AU1(CT),"eE",AU1(AIK),"iR",AU1(AQp),"ct",AU1(AMI),"gI",AU1(AIX)],Jd,0,Bq,[],0,3,0,0,0,D2,0,BA,[],1,0,0,0,["bR",AU2(APm),"H",AU2(AQQ),"d_",AU1(AMd)],C2,0,D2,[],0,0,0,0,
["c",AU4(AFk)],E4,0,C2,[],0,0,0,0,["c",AU4(AGd)],CP,0,D2,[],0,0,0,0,["c",AU4(AFD)],Ez,0,C2,[],0,0,0,0,["c",AU4(ALX),"M",AU2(ASs)],WE,0,C2,[],0,0,0,0,["c",AU4(ARQ),"ci",AU4(AMF)],Y,0,C,[],1,0,0,0,0,Dd,0,BD,[],0,3,0,0,0,M9,0,GI,[Em],0,0,0,0,["ct",AU1(AMP)],Of,0,BA,[],0,0,0,0,["c",AU4(AK_),"H",AU2(ANB)],Xe,0,C,[Em,Dh],0,3,0,0,0,MY,0,BR,[],0,0,0,0,0,Qh,0,BR,[],0,0,0,0,["c",AU4(AF$),"M",AU2(ANg),"H",AU2(AGJ),"bR",AU2(AGr)],DA,0,BR,[],0,0,0,0,["c",AU4(AIB),"k",AU2(AI_),"bR",AU2(AF4),"M",AU2(APW),"H",AU2(AIP)],Ja,
0,DA,[],0,0,0,0,["k",AU2(AKK)],ZA,0,BV,[],0,0,0,0,["bq",AU3(ALa)],Eg,0,BV,[],0,0,0,0,["bq",AU3(Mx),"bR",AU2(ANE)],OO,0,BR,[],0,0,0,0,["M",AU2(ALW),"c",AU4(AE$),"bR",AU2(AGA),"H",AU2(AQu)],El,0,BV,[],0,0,0,0,["bX",AU1(AKV),"bq",AU3(AJF),"ci",AU4(AIw),"cn",AU5(AK1),"bR",AU2(AQl)],AEf,0,BV,[],0,0,0,0,["bq",AU3(AE5)]]);
$rt_metadata([YI,0,BV,[],0,0,0,0,["bq",AU3(AFw)],Fd,0,BR,[],0,0,0,0,["M",AU2(ARy),"c",AU4(ANj),"bR",AU2(ALb),"H",AU2(AOw)],Xz,0,Fd,[],0,0,0,0,0,T6,0,Fd,[],0,0,0,0,0,Ys,0,CP,[],0,0,0,0,["c",AU4(AHz)],PC,0,CP,[],0,0,0,0,["c",AU4(AMt)],FO,0,CP,[],0,0,0,0,["c",AU4(APR),"M",AU2(AQ1)],Ph,0,FO,[],0,0,0,0,["c",AU4(AKY),"M",AU2(AMQ)],Fa,0,CP,[],0,0,0,0,["c",AU4(ASi)],Nh,0,Fa,[],0,0,0,0,["c",AU4(AKc)],RG,0,CP,[],0,0,0,0,["c",AU4(ARF)],Qs,0,FO,[],0,0,0,0,["c",AU4(AGL)],U_,0,Fa,[],0,0,0,0,["c",AU4(AFU)],RI,0,D2,[],0,0,
0,0,["c",AU4(AR5),"ci",AU4(AP4)],Oo,0,D2,[],0,0,0,0,["c",AU4(ANH),"ci",AU4(AFc)],EM,0,C,[],1,0,0,0,0,Yt,0,C2,[],0,0,0,0,["c",AU4(AFW)],Wz,0,Ez,[],0,0,0,0,["c",AU4(AMr)],O7,0,E4,[],0,0,0,0,["c",AU4(APq)],Qm,0,C2,[],0,0,0,0,["c",AU4(ANy)],Uj,0,Ez,[],0,0,0,0,["c",AU4(AF3)],Rg,0,E4,[],0,0,0,0,["c",AU4(APG)],Kq,0,BA,[],4,0,0,0,["c",AU4(ALt),"H",AU2(AKt)],AAj,0,BA,[],0,0,0,0,["c",AU4(AGp),"H",AU2(AGy)],Ok,0,BA,[],0,0,0,0,["c",AU4(AKO),"H",AU2(ASc)],Xg,0,BA,[],4,0,0,0,["c",AU4(AOg),"H",AU2(AHo)],W0,0,BA,[],0,0,0,0,
["c",AU4(ANc),"H",AU2(AE2)],Nt,0,BA,[],0,0,0,0,["c",AU4(AHd),"H",AU2(AJn)],AD7,0,BR,[],0,0,0,0,["c",AU4(ARL),"M",AU2(AGC),"hr",AU1(AMV),"H",AU2(AGB)],ZI,0,BR,[],4,0,0,0,["c",AU4(AM4),"M",AU2(AO_),"hr",AU1(AEZ),"H",AU2(ARV)],ADY,0,BA,[],4,0,0,0,["c",AU4(ALf),"H",AU2(AJg)],AB8,0,BA,[],0,0,0,0,["c",AU4(ANa),"H",AU2(AI8)],YF,0,BA,[],0,0,0,0,["c",AU4(AKh),"H",AU2(AHt)],G3,0,BR,[],0,0,0,0,["c",AU4(AFY),"M",AU2(AOq),"H",AU2(AOP)],AD3,0,G3,[],0,0,0,0,["c",AU4(AHy),"ci",AU4(AQG),"cn",AU5(AFL),"bR",AU2(AMj)],AA8,0,G3,
[],0,0,0,0,["c",AU4(ALL)],Oe,0,Gg,[HW],0,3,0,0,["lj",AU5(AIY),"ku",AU4(AGt),"hx",AU2(AGT),"lS",AU3(AP7)],RQ,0,BV,[],0,0,0,0,["bq",AU3(AHX),"ci",AU4(AGk),"cn",AU5(AJk),"bR",AU2(AJS)],YE,0,BV,[],0,0,0,0,["bq",AU3(ALT)],Nn,0,BV,[],0,0,0,0,["bq",AU3(APs)],G2,0,C,[],4,0,0,AO1,0,MF,0,BV,[],0,0,0,0,["bq",AU3(APz)],K2,0,BR,[],0,0,0,0,["M",AU2(ANs),"c",AU4(AHp),"ci",AU4(AJQ),"cn",AU5(AH5),"bR",AU2(AFJ),"H",AU2(AQc)],Ln,0,BR,[],0,0,0,0,["M",AU2(AGS),"c",AU4(AFj),"ci",AU4(ANS),"cn",AU5(APr),"bR",AU2(AHY),"H",AU2(AN3)],DU,
0,BV,[],0,0,0,0,["bq",AU3(AOQ),"ci",AU4(AMJ),"cn",AU5(AGQ),"bR",AU2(AOB)],VB,0,EM,[],0,0,0,0,["hi",AU2(AG4),"sj",AU3(AOI)],VC,0,EM,[],0,0,0,0,["hi",AU2(APJ),"sj",AU3(ARs)],ACZ,0,C,[],0,0,0,0,0,YW,0,C,[],0,0,0,0,0,KZ,0,Y,[],0,0,0,0,["B",AU1(ABe)]]);
$rt_metadata([JY,0,Y,[],0,0,0,0,["B",AU1(AB1)],ACT,0,Y,[],0,0,0,0,["B",AU1(APc)],ADp,0,Y,[],0,0,0,0,["B",AU1(AQe)],ADu,0,Y,[],0,0,0,0,["B",AU1(AIC)],KV,0,Y,[],0,0,0,0,["B",AU1(ZN)],Ly,0,KV,[],0,0,0,0,["B",AU1(AAK)],AEM,0,Y,[],0,0,0,0,["B",AU1(AJO)],Mw,0,Ly,[],0,0,0,0,["B",AU1(YA)],ABs,0,Mw,[],0,0,0,0,["B",AU1(AMe)],ABT,0,Y,[],0,0,0,0,["B",AU1(AHQ)],AAc,0,Y,[],0,0,0,0,["B",AU1(AMb)],ZV,0,Y,[],0,0,0,0,["B",AU1(ARu)],ADy,0,Y,[],0,0,0,0,["B",AU1(AMR)],AEY,0,Y,[],0,0,0,0,["B",AU1(AFa)],AC0,0,Y,[],0,0,0,0,["B",AU1(AKm)],ACO,
0,Y,[],0,0,0,0,["B",AU1(AOU)],ADQ,0,Y,[],0,0,0,0,["B",AU1(AHM)],Ze,0,Y,[],0,0,0,0,["B",AU1(AIb)],YT,0,Y,[],0,0,0,0,["B",AU1(ARo)],AC6,0,Y,[],0,0,0,0,["B",AU1(AE6)],ADg,0,Y,[],0,0,0,0,["B",AU1(ALj)],AAC,0,Y,[],0,0,0,0,["B",AU1(AIl)],ABY,0,Y,[],0,0,0,0,["B",AU1(AJp)],AEr,0,Y,[],0,0,0,0,["B",AU1(ALl)],ADf,0,Y,[],0,0,0,0,["B",AU1(AQx)],AA5,0,Y,[],0,0,0,0,["B",AU1(AOb)],AAA,0,Y,[],0,0,0,0,["B",AU1(AMM)],AET,0,Y,[],0,0,0,0,["B",AU1(AO7)],Jm,0,Y,[],0,0,0,0,["B",AU1(ABV)],ADS,0,Jm,[],0,0,0,0,["B",AU1(AMA)],ABx,0,KZ,
[],0,0,0,0,["B",AU1(AGj)],AAt,0,JY,[],0,0,0,0,["B",AU1(AJB)],Z2,0,Y,[],0,0,0,0,["B",AU1(ALz)],AAn,0,Y,[],0,0,0,0,["B",AU1(ARa)],ABm,0,Y,[],0,0,0,0,["B",AU1(AI2)],ABt,0,Y,[],0,0,0,0,["B",AU1(AE7)],Z9,0,C,[],4,0,0,0,0,Zy,0,C,[],4,3,0,0,0,Nu,0,C,[],0,3,0,0,0,ADa,0,C,[],0,3,0,0,0,AA3,0,C,[],4,3,0,0,0,ZK,0,C,[IQ],0,3,0,0,0,TH,0,C,[Z],0,3,0,0,["l",AU2(ASe)],Ro,0,C,[Z],0,3,0,0,["l",AU2(AIZ)],Y5,0,C,[],0,3,0,0,0,Rn,0,C,[Z],0,3,0,0,["l",AU2(AOV)],PO,0,C,[Z],0,3,0,0,0,Qu,0,C,[Z],0,3,0,0,0,WC,0,U,[],0,0,0,0,["k",AU2(AIJ)],WA,
0,U,[],0,0,0,0,["k",AU2(AFz)]]);
$rt_metadata([Ou,0,U,[],0,0,0,0,["k",AU2(ALp),"ct",AU1(AJr)],OA,0,U,[],0,0,0,0,["k",AU2(AOT)],Oy,0,U,[],0,0,0,0,["k",AU2(APy)],Oz,0,U,[],0,0,0,0,["k",AU2(ALS)],OD,0,U,[],0,0,0,0,["k",AU2(AIg)],OE,0,U,[],0,0,0,0,["k",AU2(AE0)],OB,0,U,[],0,0,0,0,["k",AU2(AJw)],OC,0,U,[],0,0,0,0,["k",AU2(ALV)],OF,0,U,[],0,0,0,0,["k",AU2(AQK)],OG,0,U,[],0,0,0,0,["k",AU2(AHF)],Ot,0,U,[],0,0,0,0,["k",AU2(ASv)],Pc,0,U,[],0,0,0,0,["k",AU2(AJA)],Oq,0,U,[],0,0,0,0,["k",AU2(AHC)],Or,0,U,[],0,0,0,0,["k",AU2(AJe)],Ox,0,U,[],0,0,0,0,["k",
AU2(AKR)],Op,0,U,[],0,0,0,0,["k",AU2(AQk)],Ov,0,U,[],0,0,0,0,["k",AU2(AGw)],Ow,0,U,[],0,0,0,0,["k",AU2(AN1)],LY,0,C,[],3,3,0,0,0,SJ,0,C,[LY],4,3,0,0,0,ADI,0,C,[GU],0,3,0,0,0,Wf,0,C,[],0,3,0,0,0,C0,0,C,[],3,3,0,AB0,0,Cg,0,Cj,[],12,3,0,AAl,0,Du,0,C,[],3,3,0,AOW,0,Oj,0,C,[],0,3,0,0,0,Og,0,C,[Z],0,3,0,0,["l",AU2(AO6)],Nb,0,Gs,[],0,0,0,0,["ci",AU4(AI5),"cn",AU5(ASg),"fc",AU1(AHn)],Qa,0,Bq,[],0,3,0,0,0,Xq,0,Bq,[],0,3,0,0,0,Vw,0,FL,[],0,3,0,0,0,P0,0,FL,[],0,3,0,0,0,Yi,0,Bq,[],0,3,0,0,0,Vn,0,C,[],0,3,0,0,0,TJ,0,C,[Bj],
0,3,0,0,0,ST,0,C,[Z],0,3,0,0,0,SS,0,C,[Z],0,3,0,0,0,AC2,0,C,[],3,3,0,0,0,AAp,0,C,[],0,3,0,0,0,RO,0,C,[HL],0,3,0,0,0,Vt,0,C,[LY],0,0,0,0,0,VW,0,C,[Bj],0,3,0,0,["p",AU1(AQX)],QU,0,C,[],0,3,0,0,0,Td,0,U,[],0,0,0,0,["k",AU2(AQU)],MT,0,U,[],0,0,0,0,["k",AU2(AGf)],R9,0,U,[],0,0,0,0,["k",AU2(AF2)],R8,0,U,[],0,0,0,0,["k",AU2(AI1)],W8,0,U,[],0,0,0,0,["k",AU2(AKC)],O1,0,U,[],0,0,0,0,["k",AU2(AQY)],N$,0,U,[],0,0,0,0,["k",AU2(ANm)]]);
$rt_metadata([QJ,0,U,[],0,0,0,0,["k",AU2(AO0)],MM,0,U,[],0,0,0,0,["k",AU2(ART)],MR,0,U,[],0,0,0,0,["k",AU2(AH3)],NT,0,U,[],0,0,0,0,["k",AU2(AQ$)],Pn,0,U,[],0,0,0,0,["k",AU2(AL$)],Pw,0,U,[],0,0,0,0,["k",AU2(AOo)],T2,0,U,[],0,0,0,0,["k",AU2(AQL)],SL,0,U,[],0,0,0,0,["k",AU2(ARC)],M7,0,U,[],0,0,0,0,["k",AU2(AHO)],Me,0,U,[],0,0,0,0,["k",AU2(ANp)],R2,0,Me,[],0,0,0,0,["k",AU2(APX)],PU,0,C,[IU],0,3,0,0,["qP",AU1(ALG)],V4,0,C,[BM],0,3,0,0,["Y",AU2(AOf)],V7,0,C,[BM],0,3,0,0,["Y",AU2(AMW)],TO,0,C,[BM],0,3,0,0,["Y",AU2(AJI)],TR,
0,C,[BM],0,3,0,0,["Y",AU2(AFt)],UP,0,C,[BM],0,3,0,0,["Y",AU2(ALB)],X9,0,C,[Z],0,3,0,0,["l",AU2(AQa)],X$,0,C,[Z],0,3,0,0,["l",AU2(AMs)],X8,0,C,[Z],0,3,0,0,["l",AU2(ASw)],Zm,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.LA=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","#diffDemo","ClassL.java","ClassR.java",
"[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",
", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",
"Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene",
"WindowDemo","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","text","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","EditorComponent::setDiffModel","  diffModel cleared ","  diffModel.length = ","  model.document.length() = ","ns-resize","ew-resize","trying to display with unknown screen size and dpr",
".cpp",".cc",".cxx",".hpp",".c",".h",".js","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","\\n","#606366","#2B2B2B","#A4A3A3","#323232","#303C47","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java",
"private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","#616161","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ",
"float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ",
"  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","#6AAB73","comma","error","#F75464","unused","#6F737A","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#BBBBBB","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",
", b = ","jsToWasm2: a = ","#3C3F41","#4B6EAF","#787878","onEnter item ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ",
"Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W",
"s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic",
"Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing",
"BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo",
"Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms",
"SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in "," ints to write, but "," written","#EBECF0","#F8F9FB","#edebfc","#FCE8F4","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","Verdana","asyncFullParseFile",
"asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AGN(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cr=Long_add;var Ks=Long_sub;var BQ=Long_mul;var Do=Long_div;var MZ=Long_rem;var ATf=Long_or;var CV=Long_and;var AYU=Long_xor;var Fo=Long_shl;var Gn=Long_shr;var D8=Long_shru;var ATA=Long_compare;var Fb=Long_eq;var AYV=Long_ne;var AIo=Long_lt;var PM=Long_le;var AH7=Long_gt;var AAg=Long_ge;var AYW=Long_not;var ATM=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ATQ);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=T9.prototype;c.f=c.Y;c=T7.prototype;c.f=c.Y;c=Nk.prototype;c.f=c.Y;c=AAM.prototype;c.get=c.Hb;Object.defineProperty(c,"length",{get:c.Gw});c=NU.prototype;c.f=c.Y;c=Y3.prototype;c.removeEventListener=c.DC;c.dispatchEvent=c.BA;c.get=c.yJ;c.addEventListener=c.z5;Object.defineProperty(c,"length",{get:c.BK});c=VY.prototype;c.onAnimationFrame=c.DE;c=VS.prototype;c.f=c.uI;c=VP.prototype;c.handleEvent=c.cb;c=VQ.prototype;c.f=c.Y;c=Xh.prototype;c.accept=c.uX;c=Xi.prototype;c.accept=c.uX;c=WK.prototype;c.handleEvent
=c.cb;c=WL.prototype;c.handleEvent=c.cb;c=WM.prototype;c.handleEvent=c.cb;c=WN.prototype;c.handleEvent=c.cb;c=WO.prototype;c.handleEvent=c.cb;c=WP.prototype;c.handleEvent=c.cb;c=WQ.prototype;c.handleEvent=c.cb;c=WR.prototype;c.handleEvent=c.cb;c=WS.prototype;c.handleEvent=c.cb;c=WT.prototype;c.handleEvent=c.cb;c=Yb.prototype;c.handleEvent=c.cb;c=Yc.prototype;c.handleEvent=c.cb;c=Yd.prototype;c.handleEvent=c.cb;c=Ye.prototype;c.handleEvent=c.cb;c=UE.prototype;c.handleEvent=c.cb;c=XP.prototype;c.f=c.Y;c=XQ.prototype;c.f
=c.Y;c=Ns.prototype;c.f=c.Y;c=Nr.prototype;c.f=c.Y;c=Nq.prototype;c.f=c.Y;c=Np.prototype;c.f=c.Y;c=NN.prototype;c.accept=c.uX;c=XM.prototype;c.f=c.Y;c=XK.prototype;c.f=c.Y;c=XL.prototype;c.f=c.Y;c=Pb.prototype;c.f=c.uI;c=O_.prototype;c.f=c.uI;c=QO.prototype;c.f=c.Y;c=UU.prototype;c.f=c.Y;c=MX.prototype;c.f=c.Y;c=XC.prototype;c.f=c.Y;c=XB.prototype;c.f=c.Y;c=W3.prototype;c.f=c.Y;c=W2.prototype;c.f=c.Y;c=Xv.prototype;c.handleEvent=c.cb;c=P2.prototype;c.f=c.Y;c=MQ.prototype;c.onTimer=c.qP;c=MA.prototype;c.onTimer
=c.qP;c=XA.prototype;c.f=c.Y;c=Xk.prototype;c.f=c.Y;c=Uu.prototype;c.f=c.Y;c=PU.prototype;c.onTimer=c.qP;c=V4.prototype;c.f=c.Y;c=V7.prototype;c.f=c.Y;c=TO.prototype;c.f=c.Y;c=TR.prototype;c.f=c.Y;c=UP.prototype;c.f=c.Y;})();
}));
