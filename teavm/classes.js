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
index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eT=f;}
function $rt_cls(cls){return ACF(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FY(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b2.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return APx(t);}
function $rt_throwableCause(t){return APF(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AVi());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AVj(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AVk());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BF=$rt_compare;var AVl=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var IO=$rt_isInstance;var AVm=$rt_nativeThread;var AVn=$rt_suspending;var AVo=$rt_resuming;var AVp=$rt_invalidPointer;var B=$rt_s;var Bm=$rt_eraseClinit;var W=$rt_imul;var Ei=$rt_wrapException;var AVq=$rt_checkBounds;var AVr=$rt_checkUpperBound;var AVs=$rt_checkLowerBound;var AVt=$rt_wrapFunction0;var AVu=$rt_wrapFunction1;var AVv=$rt_wrapFunction2;var AVw=$rt_wrapFunction3;var AVx=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var ABr=$rt_createCharArrayFromData;var AT4=$rt_createByteArrayFromData;var AVy=$rt_createShortArrayFromData;var E7=$rt_createIntArrayFromData;var AVz=$rt_createBooleanArrayFromData;var AVA=$rt_createFloatArrayFromData;var AVB=$rt_createDoubleArrayFromData;var AHk=$rt_createLongArrayFromData;var AVh=$rt_createBooleanArray;var DX=$rt_createByteArray;var AVC=$rt_createShortArray;var BP=$rt_createCharArray;var BG=$rt_createIntArray;var AUX=$rt_createLongArray;var AFu=$rt_createFloatArray;var AVD
=$rt_createDoubleArray;var BF=$rt_compare;var AVE=$rt_castToClass;var AVF=$rt_castToInterface;var AVG=Long_toNumber;var Be=Long_fromInt;var AVH=Long_fromNumber;var Cc=Long_create;var Ep=Long_ZERO;var AVI=Long_hi;var EF=Long_lo;
function C(){this.$id$=0;}
function AVJ(){var a=new C();ADU(a);return a;}
function ADU(a){}
function Cp(a){return ACF(a.constructor);}
function AMq(a,b){return a!==b?0:1;}
function AG7(a){var b,c,d,e,f,g,h,i,j;b=YW(a);if(!b)c=B(0);else{d=(((32-NV(b)|0)+4|0)-1|0)/4|0;e=BP(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Hj((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FY(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function YW(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALG(a){var b,c,d;if(!IO(a,En)&&a.constructor.$meta.item===null){b=new Wd;X(b);J(b);}b=AFG(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function R0(){var a=this;C.call(a);a.u1=0;a.rk=null;}
function AUh(b){var c,d,e,f,g,h,i,j,k,l;ADS();Zb();AB2();AC8();AFc();AAD();ADz();ADW();Y4();ACX();ACo();Y2();ACW();ACY();ABE();AAL();AA3();Z2();ABa();ABc();Zl();Y5();AEV();c=(Zr()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Pi(B(2),B(3));else{d=new R0;BM(d);e=new Ul;e.sV=d;f=new Nq;c=new $rt_globals.Worker("teavm/worker.js");g=new N0;g.po=c;g.pp=e;g.pq=f;e=Bk(g,"f");c.onmessage=e;h=H(LX,[JX(B(4),B(5),400),JX(B(6),B(7),400),JX(B(8),B(5),
700),JX(B(9),B(7),700)]);b=R(LX,1);b.data[0]=AQv(B(10),Fd(B(11),B(12)),B(5),400);b=(LT(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.sr;f=c.re;k=new M;O(k);BE(G(G(k,B(13)),f),41);k=N(k);f=c.q_;l=c.o9;f=AJv($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BM(d);c=new Um;c.tW=d;g=new Uk;e.then(Bk(c,"f"),Bk(g,"f"));}}
function ABI(b){var c,d,e,f,g,h,i,j,k;c=new Ta;d=new Sb;c.qm=new $rt_globals.TextDecoder("utf-16");e=new Wc;e.o3=c;c.r8=e;e=new V7;e.vg=c;c.my=e;f=new V8;f.rX=c;c.t6=new $rt_globals.ResizeObserver(Bk(f,"f"));e=new V5;e.oo=c;c.ng=e;c.is=1;f=new Pg;f.x6=null;f.jL=AVK;c.ma=f;c.qO=b;f=new V6;f.ue=c;e=Bk(f,"f");b.onmessage=e;e=ABD();b.postMessage(e);c.m_=(Ea()).getElementById("canvasDiv");b=Zr();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dP
=b;c.m_.appendChild(b);f=c.dP;e=ANQ(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)Pi(B(2),B(14));else{g=new PD;e=c.dP;f=c.my;g.dE=null;g.hd=e;g.cp=AUs(f);h=$rt_globals.window;i=R(Dr,14);j=i.data;k=new W0;k.nx=g;j[0]=CT(g,e,B(15),k);f=new W1;f.sB=g;j[1]=CT(g,e,B(16),f);f=new W2;f.oL=g;j[2]=CT(g,e,B(17),f);f=new W3;f.vb=g;j[3]=CT(g,e,B(18),f);f=new W4;f.rJ=g;j[4]=CT(g,e,B(19),f);f=new W5;f.n2=g;j[5]=CT(g,e,B(20),f);k=new W6;k.vs=g;j[6]=CT(g,e,B(21),k);k=new W7;k.r0=g;j[7]=CT(g,e,B(22),k);k=new W8;k.oc
=g;j[8]=CT(g,e,B(23),k);k=new W9;k.un=g;j[9]=CT(g,e,B(24),k);k=new Yp;k.tQ=g;j[10]=CT(g,e,B(25),k);k=new Yq;k.sR=g;j[11]=ACQ(g,h,B(26),k,1);k=new Yr;k.mU=g;j[12]=CT(g,h,B(27),k);k=new Ys;k.uK=g;j[13]=CT(g,h,B(28),k);g.xk=ARV(i);AAV(g,e);c.lK=g;c.ge=ATQ(b,c.my);AP9(c.t6,c.dP);e=$rt_globals.window;g=c.ng;e.addEventListener("resize",Bk(g,"handleEvent"));c.fv=ABX(d,AAN(c));TP(c);}ADm(c);}
var Nk=F(0);
var MO=F(0);
function WV(){var a=this;C.call(a);a.kC=null;a.f0=null;}
function ACF(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new WV;c.f0=b;d=c;b.classObject=d;}return c;}
function Ia(a){if(a.kC===null)a.kC=$rt_str(a.f0.$meta.name);return a.kC;}
function HZ(a){return a.f0.$meta.primitive?1:0;}
function Ih(a){return ACF(a.f0.$meta.item);}
var Z6=F();
function Bk(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Lu(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ZN=F();
function AFG(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ACI(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ACI(d[e],c))return 1;e=e+1|0;}return 0;}
function Gz(){var a=this;C.call(a);a.hy=null;a.k9=null;a.jp=0;a.jN=0;}
function AVL(){var a=new Gz();X(a);return a;}
function AVM(a){var b=new Gz();Bo(b,a);return b;}
function X(a){a.jp=1;a.jN=1;}
function Bo(a,b){a.jp=1;a.jN=1;a.hy=b;}
function AI_(a){return a;}
function APx(a){return a.hy;}
function APF(a){var b;b=a.k9;if(b===a)b=null;return b;}
var D4=F(Gz);
var Bq=F(D4);
function AVj(a){var b=new Bq();ARz(b,a);return b;}
function ARz(a,b){Bo(a,b);}
var ABH=F(Bq);
var Dh=F(0);
var CJ=F(0);
var I2=F(0);
function Bv(){var a=this;C.call(a);a.b2=null;a.hV=0;}
var AVN=null;var AVO=null;var AVP=null;function EO(){EO=Bm(Bv);AQ7();}
function AJW(){var a=new Bv();Y6(a);return a;}
function FY(a){var b=new Bv();Hs(b,a);return b;}
function HC(a,b,c){var d=new Bv();MC(d,a,b,c);return d;}
function Y6(a){EO();a.b2=AVN;}
function Hs(a,b){EO();MC(a,b,0,b.data.length);}
function MC(a,b,c,d){var e;EO();e=BP(d);a.b2=e;Dw(b,c,e,0,d);}
function Mx(b){var c;EO();c=AJW();c.b2=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.b2.data;if(b<c.length)return c[b];}d=new Hh;X(d);J(d);}
function I(a){return a.b2.data.length;}
function Fq(a){return a.b2.data.length?0:1;}
function P0(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=I(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dw(a.b2,b,d,e,c);return;}}g=new By;X(g);J(g);}
function UP(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function KO(a,b){if(a===b)return 1;return UP(a,b,0);}
function Ef(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GL(a,b,c){var d,e,f,g,h;d=Bb(0,c);if(b<65536){e=b&65535;while(true){f=a.b2.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Id(b);h=IU(b);while(true){f=a.b2.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function F4(a,b,c){var d,e,f,g,h;d=Z(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b2.data[d]==e)break;d=d+(-1)|0;}return d;}f=Id(b);g=IU(b);while(true){if(d<1)return (-1);h=a.b2.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function AAv(a,b,c){var d,e,f;d=Bb(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function PX(a,b,c){var d,e;d=Z(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ca(a,b,c){var d,e;d=BF(b,c);if(d>0){e=new By;X(e);J(e);}if(!d){EO();return AVO;}if(!b&&c==I(a))return a;return HC(a.b2,b,c-b|0);}
function Dj(a,b){return Ca(a,b,I(a));}
function P6(a,b,c){return Ca(a,b,c);}
function Fd(a,b){var c,d,e,f,g,h;if(Fq(b))return a;if(Fq(a))return b;c=BP(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Mx(c);}
function VG(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BE(d,L(a,f));}f=f+1|0;}G(d,Dj(a,f));return N(d);}
function Sf(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return Ca(a,b,c+1|0);}
function AG6(a){return a;}
function Gx(a){var b,c,d,e,f;b=a.b2.data;c=BP(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cz(b){EO();return b===null?B(29):b.cv();}
function C5(b){var c;EO();c=new M;O(c);return N(T(c,b));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Ls(a){var b,c,d,e;a:{if(!a.hV){b=a.b2.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hV=(31*a.hV|0)+e|0;d=d+1|0;}}}return a.hV;}
function L$(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GF;Bo(b,B(30));J(b);}AVQ=1;d=new Rn;d.ki=R(CO,10);d.gl=(-1);d.eK=(-1);d.bw=(-1);e=new GN;e.eH=1;e.bO=b;e.be=BP(I(b)+2|0);Dw(Gx(b),0,e.be,0,I(b));f=e.be.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.rN=g;e.f5=0;E4(e);E4(e);d.g=e;d.dp=0;d.lk=Yh(d,(-1),0,null);if(!Di(d.g)){b=new IX;h=d.g;Js(b,B(31),h.bO,h.c$);J(b);}if(d.nA)d.lk.ei();b=Co();h=new SW;h.ip=(-1);h.kH=(-1);h.ws=d;h.t2=d.lk;h.iN=a;h.ip=0;g=I(a);h.kH=g;e=new VJ;i=h.ip;j=d.gl;k=d.eK+1|0;l=d.bw+
1|0;e.hG=(-1);m=j+1|0;e.oE=m;e.dO=BG(m*2|0);f=BG(l);e.jI=f;Hz(f,(-1));if(k>0)e.k_=BG(k);Hz(e.dO,(-1));Ya(e,a,i,g);h.cu=e;e.fj=1;n=0;m=0;if(!I(a)){f=R(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.iN);if(!Ze(h))l=h.kH;e=h.cu;if(e.ed>=0&&AA1(e)==1){e=h.cu;e.ed=Jd(e);if(Jd(h.cu)==AC7(h.cu)){e=h.cu;e.ed=e.ed+1|0;}g=h.cu.ed;g=g<=l&&MX(h,g)?1:0;}else g=MX(h,h.ip);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BY(b,P6(a,m,AEE(h)));m=AAH(h);n=g;}a:{BY(b,P6(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bt(b,
g)))break a;Eo(b,g);}}if(g<0)g=0;f=HP(b,R(Bv,g));}return f;}
function AJj(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Z(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AQ7(){AVN=BP(0);AVO=AJW();AVP=new Tr;}
var EI=F(Gz);
var Hk=F(EI);
var ABj=F(Hk);
var DW=F();
function Fh(){DW.call(this);this.fG=0;}
var AVR=null;var AVS=null;function AEc(a){var b=new Fh();J9(b,a);return b;}
function J9(a,b){a.fG=b;}
function JF(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dd;Bo(b,B(32));J(b);}d=I(b);if(0==d){b=new Dd;Bo(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dd;X(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=Pa(L(b,f));if(i<0){j=new Dd;k=Ca(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bo(j,N(b));J(j);}if(i>=c){j=new Dd;l=Ca(b,0,d);b=new M;O(b);G(G(T(G(b,B(35)),c),B(36)),l);Bo(j,N(b));J(j);}g=W(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dd;k=Ca(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bo(j,N(b));J(j);}b=new Dd;j=new M;O(j);T(G(j,B(38)),c);Bo(b,N(j));J(b);}
function F3(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AVS===null){AVS=R(Fh,256);c=0;while(true){d=AVS.data;if(c>=d.length)break a;d[c]=AEc(c-128|0);c=c+1|0;}}}return AVS.data[b+128|0];}return AEc(b);}
function Mg(a){var b;b=a.fG;return (NG(AU5(20),b,10)).cv();}
function NV(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Is(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Kl(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function ALB(a,b){b=b;return BF(a.fG,b.fG);}
function ADS(){AVR=E($rt_intcls());}
function Gm(){var a=this;C.call(a);a.D=null;a.P=0;}
function AVT(){var a=new Gm();O(a);return a;}
function AU5(a){var b=new Gm();F0(b,a);return b;}
function O(a){F0(a,16);}
function F0(a,b){a.D=BP(b);}
function NG(a,b,c){return ABy(a,a.P,b,c);}
function ABy(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cd(a,b,b+1|0);else{Cd(a,b,b+2|0);f=a.D.data;g=b+1|0;f[b]=45;b=g;}a.D.data[b]=Hj(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=W(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cd(a,b,b+i|0);if(e)e=b;else{f=a.D.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.D.data;b=e+1|0;f[e]=Hj($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ACw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BF(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVU;ACp(c,f);d=f.kM;g=f.kt;h=f.nW;i=1;j=1;if(h)j=2;k=9;l=AQz(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bb(k,i+1|0);g=0;}else{d=d/AVV.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cd(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.D.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.D.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.D.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function AAp(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BF(c,0.0);if(!d){Cd(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Cd(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cd(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cd(a,b,b+8|0);d=b;}else{Cd(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVW;ABB(c,f);g=f.lm;h=f.kb;i=f.nv;j=1;k=1;if(i)k=2;l=18;m=AOj(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bb(l,j+1|0);h=0;}else{g=Do(g,AVX.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cd(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.D.data;k=b+1|0;e[b]=45;}n=Cc(1569325056, 23283064);o=0;while(o<l){if(PW(n,Ep))d=0;else{d=EF(Do(g,n));g
=M5(g,n);}e=a.D.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Do(n,Be(10));o=o+1|0;}if(h){e=a.D.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AQz(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AOj(b){var c,d,e,f,g;c=Be(1);d=0;e=16;f=AVY.data;g=f.length-1|0;while(g>=0){if(Fc(M5(b,BQ(c,f[g])),Ep)){d=d|e;c=BQ(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BE(a,b){return a.mh(a.P,b);}
function XX(a,b,c){Cd(a,b,b+1|0);a.D.data[b]=c;return a;}
function JI(a,b){var c,d;c=a.D.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.D=NP(a.D,d);}
function N(a){return HC(a.D,0,a.P);}
function XF(a,b,c,d){return a.lJ(a.P,b,c,d);}
function Ne(a,b,c,d,e){var f,g,h,i;Cd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.D.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function It(a,b){return a.kU(b,0,b.data.length);}
function Cd(a,b,c){var d,e,f,g;d=a.P;e=d-b|0;a.hO((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.D.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.P=a.P+(c-b|0)|0;}
var H4=F(0);
var M=F(Gm);
function L1(){var a=new M();AR1(a);return a;}
function AR1(a){O(a);}
function G(a,b){var c;c=a.P;if(b===null)b=B(29);My(a,c,b);return a;}
function BZ(a,b){My(a,a.P,b);return a;}
function T(a,b){NG(a,b,10);return a;}
function H1(a,b){var c,d,e,f,g,h,i,j;c=a.P;d=1;if(AIF(b,Ep)){d=0;b=AUc(b);}a:{if(Ln(b,Be(10))<0){if(d)Cd(a,c,c+1|0);else{Cd(a,c,c+2|0);e=a.D.data;f=c+1|0;e[c]=45;c=f;}a.D.data[c]=Hj(EF(b),10);}else{g=1;h=Be(1);i=FI(Be(-1),Be(10));b:{while(true){j=BQ(h,Be(10));if(Ln(j,b)>0){j=h;break b;}g=g+1|0;if(Ln(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cd(a,c,c+g|0);if(d)f=c;else{e=a.D.data;f=c+1|0;e[c]=45;}while(true){if(Fc(j,Ep))break a;e=a.D.data;c=f+1|0;e[f]=Hj(EF((FI(b,j))),10);b=ND(b,j);j=FI(j,Be(10));f=c;}}}return a;}
function Fl(a,b){ACw(a,a.P,b);return a;}
function Y0(a,b){BE(a,b);return a;}
function F8(a,b){My(a,a.P,!b?B(39):B(40));return a;}
function AEs(a,b,c){var d,e,f,g,h,i;d=BF(b,c);if(d<=0){e=a.P;if(b<=e){if(d){f=e-c|0;a.P=e-(c-b|0)|0;g=0;while(g<f){h=a.D.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Hh;X(i);J(i);}
function WH(a,b){var c,d,e,f;if(b>=0){c=a.P;if(b<c){c=c-1|0;a.P=c;while(b<c){d=a.D.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Hh;X(f);J(f);}
function ALv(a,b,c,d,e){Ne(a,b,c,d,e);return a;}
function AIp(a,b,c,d){XF(a,b,c,d);return a;}
function ZA(a){return a.P;}
function DU(a){return N(a);}
function ALE(a,b){JI(a,b);}
function AL9(a,b,c){XX(a,b,c);return a;}
function My(a,b,c){var d,e,f;if(b>=0&&b<=a.P){a:{if(c===null)c=B(29);else if(Fq(c))break a;JI(a,a.P+I(c)|0);d=a.P-1|0;while(d>=b){a.D.data[d+I(c)|0]=a.D.data[d];d=d+(-1)|0;}a.P=a.P+I(c)|0;d=0;while(d<I(c)){e=a.D.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new Hh;X(c);J(c);}
var Es=F(Hk);
var ACP=F(Es);
function AVZ(a){var b=new ACP();AHe(b,a);return b;}
function AHe(a,b){Bo(a,b);}
var AA8=F(Es);
function AV0(a){var b=new AA8();AHB(b,a);return b;}
function AHB(a,b){Bo(a,b);}
var Uc=F(0);
var Dr=F(0);
function ARV(b){var c;c=new Qs;c.wE=b;return c;}
function CH(b,c){if(b!==null)b.d2();return c;}
var O6=F(0);
function IJ(){var a=this;C.call(a);a.lY=0;a.k7=0;}
var AV1=0;function FR(a){AV1=AV1-1|0;}
function F5(a,b,c){Jn(a,AAj(b,c,400,0));}
function Ra(a,b){return KY(a,b,0.875);}
function KY(a,b,c){return Er(a,b)+c|0;}
function RN(){var a=this;IJ.call(a);a.jQ=null;a.bp=null;a.m0=null;}
function Ex(a){var b,c,d;b=a.bp;c=a.lY;d=a.k7;b.clearRect(0.0,0.0,c,d);}
function Sz(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bp;d="center";c.textAlign=d;break a;case 2:c=a.bp;d="right";c.textAlign=d;break a;default:break a;}d=a.bp;c="left";d.textAlign=c;}}
function CA(a,b){Jn(a,J0(b.nj));}
function Jn(a,b){var c;if(!(a.m0==b?1:0)){c=a.bp;a.m0=b;c.font=b;}}
function AAj(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.bp;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Er(a,b){var c;c=$rt_ustr(b);return a.bp.measureText(c).width;}
function LB(a,b,c,d){var e,f;e=a.bp;f=$rt_ustr(FY(ABr([35,GI(b/16|0),GI(b%16|0),GI(c/16|0),GI(c%16|0),GI(d/16|0),GI(d%16|0)])));e.fillStyle=f;}
var Zc=F();
var AD8=F();
function C6(b,c){if(b===c)return 1;return b!==null?b.cz(c):c!==null?0:1;}
function BM(b){if(b!==null)return b;b=new GF;Bo(b,B(31));J(b);}
var Bd=F(0);
function Ul(){C.call(this);this.sV=null;}
var Bw=F(0);
var ABW=F();
var Zh=F(0);
function JX(b,c,d){return AQv(B(41),Fd(B(11),b),c,d);}
var ADI=F(0);
var ADC=F(0);
function LT(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dk(b,f+g|0);Dw(c,0,d,f,g);return d;}
function K9(b,c,d){Dw(b,c,d,0,d.data.length);return d;}
function Rv(b,c,d){var e;if(c>0)Dw(b,0,d,0,c);e=d.data.length;if(c<e)Dw(b,c+1|0,d,c,e-c|0);return d;}
function ABb(b,c,d,e){var f;if(c>0)Dw(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dw(b,d,e,c,f-d|0);}return e;}
function FV(b){var c;c=new Wx;c.i1=b;return c;}
function Z_(b,c){if(b.data.length!=c)b=Dk(b,c);return b;}
function ADB(b,c,d){var e;e=c.data.length;if(e==d)c=Dk(c,e*2|0);c.data[d]=b;return c;}
function LX(){var a=this;C.call(a);a.sr=null;a.re=null;a.q_=null;a.o9=0;}
function AQv(a,b,c,d){var e=new LX();APn(e,a,b,c,d);return e;}
function APn(a,b,c,d,e){a.sr=b;a.re=c;a.q_=d;a.o9=e;}
var Z3=F();
function AJv(b,c){return {style:b,weight:c};}
var BO=F(0);
function Um(){C.call(this);this.tW=null;}
function AFg(a,b){var c,d,e;c=a.tW;d=0;while(d<b.length){e=b[d];(Ea()).fonts.add(e);d=d+1|0;}c.u1=1;b=c.rk;if(b!==null)ABI(b);}
var Uk=F();
function ARc(a,b){$rt_globals.console.info("font load error "+b);}
var Lz=F();
var AV2=null;var AV3=null;function Bx(){if(AV2===null)AV2=AM0(AV4,0);return AV2;}
function EX(){if(AV3===null)AV3=AM0(AV5,0);return AV3;}
function AT8(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=LC(b)&&(e+f|0)<=LC(d)){a:{b:{if(b!==d){g=Ih(Cp(b));h=Ih(Cp(d));if(g!==null&&h!==null){if(g===h)break b;if(!HZ(g)&&!HZ(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.f0;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ACI(n.constructor,o)?1:0)){KQ(b,c,d,e,j);b=new IV;X(b);J(b);}j=j+1|0;k=m;}KQ(b,c,d,e,f);return;}if(!HZ(g))break a;if(HZ(h))break b;else break a;}b=new IV;X(b);J(b);}}KQ(b,c,
d,e,f);return;}b=new IV;X(b);J(b);}b=new By;X(b);J(b);}d=new GF;Bo(d,B(42));J(d);}
function Dw(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=LC(b)&&(e+f|0)<=LC(d)){KQ(b,c,d,e,f);return;}b=new By;X(b);J(b);}
function KQ(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FG(){return Long_fromNumber(new Date().getTime());}
function AC9(){return AVH($rt_globals.performance.now()*1000000.0);}
var ADy=F();
var AAJ=F();
function Pi(b,c){var d,e,f;d=(Ea()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ea()).getElementById($rt_ustr(b)).appendChild(d);}
function Zr(){return (Ea()).createElement("canvas");}
function AEw(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ANQ(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AE_=F();
var Nq=F();
function ANy(a,b){var c;c=new Bq;Bo(c,$rt_str(b.message));J(c);}
var ADY=F();
function FE(b){return $rt_str(b);}
var Zv=F();
function NP(b,c){var d,e,f,g;b=b.data;d=BP(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AEn(b,c){var d,e,f,g;b=b.data;d=DX(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Mn(b,c){var d,e,f,g;b=b.data;d=BG(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dk(b,c){var d,e,f,g;d=b.data;e=U_(Ih(Cp(b)),c);f=Z(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AAf(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BZ(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BZ(c,B(44));G(c,e[d]);d=d+1|0;}BZ(c,B(45));return N(c);}
function AC5(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BZ(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BZ(c,B(44));T(c,e[d]);d=d+1|0;}BZ(c,B(45));return N(c);}
function APX(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BZ(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BZ(c,B(44));Fl(c,e[d]);d=d+1|0;}BZ(c,B(45));return N(c);}
function ASH(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);BZ(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BZ(c,B(44));f=e[d];AAp(c,c.P,f);d=d+1|0;}BZ(c,B(45));return N(c);}
function Hz(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BH;X(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZT(b,c,d,e){var f,g;if(c>d){e=new BH;X(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AAE(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AVK;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Z(j,h+f|0);l=h+(2*f|0)|0;m=Z(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.mr(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ACx(b,c){return Us(b,0,b.data.length,c);}
function Us(b,c,d,e){var f,g,h,i,j;f=BF(c,d);if(f>0){g=new BH;X(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var JW=F(0);
var AAY=F();
function ASr(a,b){return a.wp(b);}
function AHo(a){return a.xQ();}
var ABw=F();
var FQ=F(0);
var Tr=F();
var By=F(Bq);
var ACu=F();
function LC(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AV6());}return b.data.length;}
function U_(b,c){if(b===null){b=new GF;X(b);J(b);}if(b===E($rt_voidcls())){b=new BH;X(b);J(b);}if(c>=0)return ARI(b.f0,c);b=new YF;X(b);J(b);}
function ARI(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GF=F(Bq);
var IV=F(Bq);
var C7=F();
var AV7=null;var AV8=null;var AV9=null;var AV$=null;var AV_=null;var AWa=null;var AWb=null;var AWc=null;var AWd=null;var AWe=null;function Xv(b){var c,d;c=new Bv;d=BP(1);d.data[0]=b;Hs(c,d);return c;}
function Md(b){return b>=65536&&b<=1114111?1:0;}
function CE(b){return (b&64512)!=55296?0:1;}
function C4(b){return (b&64512)!=56320?0:1;}
function Mi(b){return !CE(b)&&!C4(b)?0:1;}
function Hr(b,c){return CE(b)&&C4(c)?1:0;}
function Ev(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Id(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function IU(b){return (56320|b&1023)&65535;}
function EY(b){return GE(b)&65535;}
function GE(b){if(AV$===null){if(AWb===null)AWb=AC4();AV$=ABf((AWb.value!==null?$rt_str(AWb.value):null));}return S4(AV$,b);}
function Ez(b){return GC(b)&65535;}
function GC(b){if(AV9===null){if(AWc===null)AWc=ADT();AV9=ABf((AWc.value!==null?$rt_str(AWc.value):null));}return S4(AV9,b);}
function S4(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BF(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Vh(b,c){if(c>=2&&c<=36){b=Pa(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Pa(b){var c,d,e,f,g,h,i,j,k,l;if(AV8===null){if(AWd===null)AWd=ABl();c=(AWd.value!==null?$rt_str(AWd.value):null);d=APG(Gx(c));e=JU(d);f=BG(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Nm(d)|0;j=j+Nm(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AV8=f;}g=AV8.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BF(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Hj(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gu(b){var c;if(b<65536){c=BP(1);c.data[0]=b&65535;return c;}return ABr([Id(b),IU(b)]);}
function Cv(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Mi(b&65535))return 19;if(AV_===null){if(AWe===null)AWe=AEZ();d=(AWe.value!==null?$rt_str(AWe.value):null);e=R(NA,16384);f=e.data;g=DX(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=KP(L(d,l));if(m==64){l=l+1|0;m=KP(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|W(c,KP(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=KP(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AJg(k,k+i|0,AEn(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AJg(k,k+i|0,AEn(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AV_=Dk(e,j);}e=AV_.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.rB)o=p+1|0;else{c=d.pm;if(b>=c)return d.pA.data[b-c|0];c=p-1|0;}}return 0;}
function JD(b){a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gp(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cv(b)!=16?0:1;}
function PF(b){switch(Cv(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Ro(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return PF(b);}return 1;}
function Zb(){AV7=E($rt_charcls());AWa=R(C7,128);}
function AC4(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ADT(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ABl(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AEZ(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var MI=F(0);
var S3=F(0);
var Ej=F(0);
var AD7=F(0);
function Ea(){return $rt_globals.window.document;}
function N0(){var a=this;C.call(a);a.po=null;a.pp=null;a.pq=null;}
function AOH(a,b){var c,d,e;c=a.po;d=a.pp;e=a.pq;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=J0(KS(c));c=d.sV;c.rk=b;if(c.u1)ABI(b);}}
var ABt=F();
function Fy(){return ASs();}
function ASs(){return Math.random();}
function Z(b,c){if(b<c)c=b;return c;}
function Bb(b,c){if(b>c)c=b;return c;}
function MS(b){if(b<=0)b= -b|0;return b;}
var Pu=F(0);
var RD=F(0);
var Rs=F(0);
var T8=F(0);
var XG=F(0);
var Vi=F(0);
var OP=F(0);
var Zg=F();
function AL4(a,b,c){a.EG($rt_str(b),Lu(c,"handleEvent"));}
function AMs(a,b,c){a.BJ($rt_str(b),Lu(c,"handleEvent"));}
function AGp(a,b){return a.wp(b);}
function AND(a,b,c,d){a.z0($rt_str(b),Lu(c,"handleEvent"),d?1:0);}
function ARx(a,b){return !!a.EL(b);}
function AHr(a){return a.xQ();}
function AFE(a,b,c,d){a.Dh($rt_str(b),Lu(c,"handleEvent"),d?1:0);}
var BH=F(Bq);
var YF=F(Bq);
var Hh=F(By);
var AAs=F();
function ABD(){return "ping";}
function D6(){C.call(this);this.jk=null;}
var AWf=null;var AWg=null;var AWh=null;var AWi=null;var AWj=null;var AWk=null;function KF(){KF=Bm(D6);AHz();}
function M_(a){var b=new D6();ACg(b,a);return b;}
function ACg(a,b){KF();a.jk=b;}
function KS(b){var c,d,e,f,g;KF();if(b===null)return null;a:{c=b;if(AWg!==null){d=$rt_str(typeof c);if(!Bn(d,B(46))&&!Bn(d,B(47))){if(Bn(d,B(48))){b=AWh.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=M_(c);g=f;b=AWh;e=new $rt_globals.WeakRef(g);b.set(c,e);AWj.register(g,c);return f;}if(!Bn(d,B(49)))break a;else{b=AWi.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=M_(c);g=f;b=AWi;e=new $rt_globals.WeakRef(g);b.set(c,
e);AWk.register(g,c);return f;}}b=AWg.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=M_(c);b=AWg;e=new $rt_globals.WeakRef(f);b.set(c,e);return f;}}return M_(c);}
function J0(b){KF();if(b!==null)return b.jk;return null;}
function ARj(a,b){if(b===a)return 1;if(b===null)return 0;if(!(b instanceof D6))return 0;return a.jk!==b.jk?0:1;}
function AHz(){AWf=new $rt_globals.WeakMap();AWg=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();AWh=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AWi=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AWj=AWh===null?null:new $rt_globals.FinalizationRegistry(Bk(new Xx,"accept"));AWk=AWi===null?null:new $rt_globals.FinalizationRegistry(Bk(new Xy,"accept"));}
var OO=F(0);
function Ta(){var a=this;C.call(a);a.qm=null;a.r8=null;a.my=null;a.m_=null;a.dP=null;a.t6=null;a.ng=null;a.lK=null;a.ge=null;a.is=0;a.w5=0;a.ru=null;a.fv=null;a.qO=null;a.ma=null;a.sX=0;}
function ADm(a){a.dP.focus();}
function NK(a,b){var c;c=Ea();b=$rt_ustr(b);c.title=b;}
function AAN(a){var b,c,d;b=new MJ;c=a.ge;d=a.lK.cp;b.bc=c;b.m=d;b.bS=a;return b;}
function TP(a){a.w5=$rt_globals.requestAnimationFrame(Bk(a.r8,"onAnimationFrame"));}
function F7(a){a.is=1;}
function TO(a,b,c){var d,e;a.lK.dE=B2(b,c);d=a.dP;e=b;d.width=e;d=a.dP;e=c;d.height=e;d=a.ge;V(d.dn,b,c);e=d.bn;d=d.dn;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fv.b6(a.ge.dn,KR(a));a.fv.bA();}
function Gw(a,b){var c,d,e;c=a.ru;d=a.dP;if(C6(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.ru=b;}
function JB(a){return $rt_globals.performance.now()/1000.0;}
function KR(a){return $rt_globals.window.devicePixelRatio;}
function Wy(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEz(b,1);else{c=new Xh;d=$rt_globals.window.showDirectoryPicker();e=new Xg;e.pr=b;e.ps=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function L3(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEz(b,0);else{c=new XS;d=$rt_globals.window.showOpenFilePicker();e=new XR;e.qk=b;e.qj=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function CP(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.sX+1|0;a.sX=e;f=a.ma;g=F3(e);f.hS=Mf(f,f.hS,g);g=Vp(f,g);MK(g,b);MK(g,b);f.jP=f.jP+1|0;b=a.qO;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(IO(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(IO(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(IO(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof Le)){b=new BH;c=Ia(Cp(c));f
=new M;O(f);G(G(f,B(50)),c);Bo(b,N(f));J(b);}c=c;f=c.gP;if(f===null)f=c.fb;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function Rb(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new QY;e.nm=b;b=AE8(c);d.then(Bk(e,"f"),Bk(b,"f"));}
function UR(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.qm;b=(Gx(b)).data;f=f.decode(b);b=e.writeText(f);e=new U9;e.sD=c;c=AE8(d);b.then(Bk(e,"f"),Bk(c,"f"));}
function X9(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AE8(b){var c;c=new M2;c.sP=b;return c;}
var B5=F(0);
var Sb=F();
function ABX(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bn(B(51),c)){d=new Np;El(d,b);b=$rt_globals.fetch("test.wasm");e=new Ny;b=b.then(Bk(e,"f"));e=new Nx;b=b.then(Bk(e,"f"));e=new Nw;f=new Nv;b.then(Bk(e,"f"),Bk(f,"f"));}else if(!Bn(B(52),c))d=(AQo(I(c)<=0?B(31):Dj(c,1))).bX(b);else{d=new Wo;ABu(d,b);d.B.ee=1;d.A.ee=1;c=new Yl;c.uH=d;Wz(d,c,B(53));c=new Yn;c.oF=d;Wz(d,c,B(54));}return d;}
var Bj=F(0);
var ABQ=F();
var AA0=F();
var ABq=F();
var Rw=F(0);
function Wc(){C.call(this);this.o3=null;}
function AKD(a,b){var c,d;c=b;b=a.o3;if(!(!b.fv.cN(c/1000.0)&&!b.is)){d=b.ge.dn;if(W(d.b,d.a)){b.is=0;b.fv.bA();}}TP(b);}
function V7(){C.call(this);this.vg=null;}
function Dg(a){F7(a.vg);}
var Qj=F(0);
function V8(){C.call(this);this.rX=null;}
function AIJ(a,b,c){var d,e,f,g;c=a.rX;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dP){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=KR(c);TO(c,Hm(f.width*g),Hm(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];TO(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AEe=F();
function AP9(b,c){AO7(b,c,AFQ());}
function AFQ(){return {box:'device-pixel-content-box'};}
function AO7(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cl=F(0);
function V5(){C.call(this);this.oo=null;}
function AOP(a,b){b=a.oo;b.fv.b6(b.ge.dn,KR(b));b.fv.bA();}
var La=F(0);
function ED(){C.call(this);this.kF=null;}
var En=F(0);
var X8=F(0);
var Nj=F(0);
function Pg(){var a=this;ED.call(a);a.hS=null;a.jL=null;a.x6=null;a.jP=0;}
function Vp(a,b){var c,d;c=a.hS;while(true){if(c===null)return null;d=JE(a.jL,b,c.i9);if(!d)break;c=d>=0?c.b3:c.bP;}return c;}
function Mf(a,b,c){var d,e;if(b===null){b=new JA;d=null;b.i9=c;b.iv=d;b.fz=1;b.fI=1;return b;}e=JE(a.jL,c,b.i9);if(!e)return b;if(e>=0)b.b3=Mf(a,b.b3,c);else b.bP=Mf(a,b.bP,c);Ek(b);return JT(b);}
function Kh(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=JE(a.jL,c,b.i9);if(d<0)b.bP=Kh(a,b.bP,c);else if(d>0)b.b3=Kh(a,b.b3,c);else{e=b.b3;if(e===null)return b.bP;f=b.bP;g=R(JA,e.fz).data;h=0;while(true){b=e.bP;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b3;while(h>0){h=h+(-1)|0;j=g[h];j.bP=b;Ek(j);b=JT(j);}e.b3=b;e.bP=f;Ek(e);b=e;}Ek(b);return JT(b);}
function V6(){C.call(this);this.ue=null;}
function AP6(a,b){var c,d,e,f,g,h,i,j,k;c=a.ue.ma;b=b.data;if(!(b===ABD()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BH;X(b);J(b);}if(b.length<1){b=new BH;X(b);J(b);}d=F3(b[0]);e=Vp(c,d);if(e===null)c=null;else{c.hS=Kh(c,c.hS,d);c.jP=c.jP+1|0;c=e.iv;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FE(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new Tm;ADU(e);e.hv=k;}else e=(k instanceof $rt_globals.File?1:0)?ACA(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:ACA(k,null);g[h]=e;h=j;}c.l(f);}}
var AEB=F();
var AE6=F();
var J1=F(0);
var Xx=F();
function AO_(a,b){KF();AWh.delete(b);}
var ABi=F();
var Xy=F();
function AML(a,b){KF();AWi.delete(b);}
function PD(){var a=this;C.call(a);a.cp=null;a.hd=null;a.xk=null;a.dE=null;}
function Ng(){return (Ea()).activeElement;}
function CT(a,b,c,d){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"));return Xr(a,b,c,d);}
function ACQ(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"),!!e);return Xr(a,b,c,d);}
function Xr(a,b,c,d){var e;e=new Qf;e.wf=b;e.wh=c;e.wg=d;return e;}
function Un(a,b){var c;c=new Vs;c.va=b;return c;}
function EE(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.hd.getBoundingClientRect();e=B2(Hm((b.clientX-d.left)*c),Hm((b.clientY-d.top)*c));f=new Bf;g=a.dE;f.b=g.b;f.a=g.a;d=new MF;US(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.vZ=f;return d;}
function Yu(a,b,c){var d,e,f,g;d=new O9;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;US(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j$=0;d.dR=e;d.bj=f;d.hD=c;d.r$=g;return d;}
function DN(a,b){b.stopPropagation();b.preventDefault();}
function AAV(a,b){var c;c=new X5;c.pL=b;b.onpointerdown=Bk(c,"f");c=new X6;c.or=b;b.onpointerup=Bk(c,"f");}
function Lq(){var a=this;C.call(a);a.rs=null;a.cG=null;a.bn=null;a.te=null;a.wJ=0;a.xN=0;a.jS=null;a.yl=null;a.x3=null;a.w3=null;a.gi=null;a.hC=null;a.gL=null;a.x_=null;a.pa=null;a.dn=null;a.uV=null;a.lC=0;a.j6=0;a.mj=0;a.l4=0;a.ig=0;a.mg=null;}
function Hq(a,b,c){return GW(a,b,c,400,0);}
function CK(a,b,c){return MR(a.rs,b,c);}
function Fv(a,b){var c,d,e,f,g;c=a.bn;d=b.bl;e=b.bF;f=b.bk;g=b.bG;c.clearColor(d,e,f,g);a.bn.clear(16384);}
function Ct(a,b){var c;if(b==a.j6)return b;if(!b)a.bn.disable(3042);else{a.bn.enable(3042);a.bn.blendFuncSeparate(770,771,1,1);}c=a.j6;a.j6=b;return c;}
function LK(a,b,c,d){Qd(a,b,c,d.b,d.a);}
function Qd(a,b,c,d,e){a.l4=1;a.ig=1;XC(a.mg,b,c,d,e);UT(a);}
function G2(a){a.l4=0;a.ig=0;UT(a);}
function UT(a){var b,c,d,e,f,g;b=a.mj;c=a.l4;if(b!=c){a.mj=c;if(!c)a.bn.disable(3089);else a.bn.enable(3089);}if(a.mj&&a.ig){a.ig=0;d=a.bn;e=a.mg;b=e.d_;c=a.dn.a-e.i6|0;f=e.i5;c=c-f|0;g=e.fk;d.scissor(b,c,g,f);}}
function Ii(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.pa;c=a.lC;d=b.gw.sJ;e=b.ek;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.ek;h=b.nd;e.bindBuffer(34962,h);i=b.gw.mD.data;g=i.length;j=0;while(j<g){k=i[j];l=b.ek;m=k.hl;n=k.e7;o=b.gw.kQ*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.e7|0;j=j+1|0;}a:{e=b.vd;if(e!==null){c=0;b.ek.bindBuffer(34962,e);i=b.gw.ro.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.ek;j=e.hl;p=e.e7;m=e.pj;n=b.gw.pF;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.e7|0;g=g+1|0;}}}q=b.uz;if(q===null){c=b.sd;if(c>0)b.ek.drawArrays(4,0,c);}else{b.ek.bindBuffer(34963,q);k=b.ek;g=b.uO;k.drawElements(4,g,5123,0);}a.lC=d;}
function Bu(a,b,c,d,e){In(a,a.jS);I$(a.jS,a.bn,b,c,d,a.dn);d=a.jS;GJ(a.bn,d.ud,e);Ii(a);}
function YK(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;In(a,a.gL);I$(a.gL,a.bn,b,c,d,a.dn);j=a.gL;d=a.bn;k=j.mH;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.mG;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.gL;GJ(a.bn,d.n0,i);Ii(a);}
function EJ(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;In(a,a.gi);I$(a.gi,a.bn,b,c,d,a.dn);UO(a.gi,a.bn,f);d=a.gi;j=a.bn;f=f.fD;b=f.b;c=f.a;k=e.bl;l=b;m=k/l;k=e.bF;n=c;o=k/n;k=e.bk/l;l=e.bG/n;d=d.tR;j.uniform4f(d,m,o,k,l);d=a.gi;e=a.bn;GJ(e,d.pU,g);GJ(e,d.nG,h);d=d.oR;e.uniform2f(d,i,0.0);Ii(a);}
function CV(a){var b,c;b=new Jz;c=a.te;b.fD=new Bf;b.d8=c;b.e1=c.dv.createTexture();AWl=AWl+1|0;return b;}
function N5(a,b){XI(a.bn,b);}
function In(a,b){var c,d;if(b!==a.uV){c=a.bn;d=b.bW;c.useProgram(d);a.uV=b;}}
function ADG(){var a=this;Lq.call(a);a.xo=null;a.x4=null;}
function ATQ(a,b){var c=new ADG();AK0(c,a,b);return c;}
function AK0(a,b,c){var d,e,f,g,h,i,j,k,l;d=new UW;a.dn=new Bf;a.lC=0;a.mg=new L6;a.rs=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(55)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bn=b;a.cG=MR(d,4,4);g=AFu(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BP(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;f=new Qh;JP();k=AWm;f.ek=b;f.gw=k;f.sd=h.length/k.kQ|0;f.uO
=j.length;k=b.createBuffer();f.nd=k;b.bindBuffer(34962,k);k=g.data;b.bufferData(34962,k,35044);f.vd=null;k=b.createBuffer();f.uz=k;if(k!==null){b.bindBuffer(34963,k);k=i.data;b.bufferData(34963,k,35044);}k=null;b.bindBuffer(34962,k);k=null;b.bindBuffer(34963,k);a.pa=f;a.xN=KO(e,B(56));f=new Qi;f.dv=b;a.te=f;l=b.getParameter(3379);a.wJ=l;f=new M;O(f);T(G(f,B(57)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(Dx,7);i=g.data;d=new WK;IG(d,b,B(58),B(59),AWm);f=d.bW;d.ud=b.getUniformLocation(f,"uColor");a.jS=d;i[0]
=d;f=ATj(b,B(60));a.yl=f;i[1]=f;f=AUf(b);a.x3=f;i[2]=f;f=AUI(b);a.w3=f;i[3]=f;f=ATR(b);a.gi=f;i[4]=f;f=AUT(b);a.hC=f;i[5]=f;f=AUE(b);a.gL=f;i[6]=f;a.x_=g;XI(b,B(61));a.x4=new UU;a.xo=c;}
function GW(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cG;g=AAj(b,c,d,e);Jn(f,g);h=f.bp.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Er(f,B(62));m=Er(f,B(63));h=new Lf;n=KS(g);h.mo=b;h.wq=c;o=c|0;if(o!==c){b=new M;O(b);Fl(G(b,B(64)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.ph=o;h.wx=d;h.w1=e;h.dB=i;h.eu=j;h.wn=l;h.mb=k;h.nj=n;h.rj=Df(i);h.xW=Df(h.eu);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.wu=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(65);}h.we=b;return h;}
function Cw(){C.call(this);this.ba=null;}
function El(a,b){a.ba=b;}
function AR$(a,b){return 0;}
var Jg=F();
var AVK=null;function JE(a,b,c){return b.jR(c);}
function AB2(){AVK=new Jg;}
function AAz(){var a=this;C.call(a);a.b1=null;a.mA=null;a.bt=null;a.dk=null;a.ex=null;a.fE=null;a.f$=null;a.jJ=null;a.kq=null;a.c2=null;a.hA=null;a.ol=0;}
function AUs(a){var b=new AAz();AOh(b,a);return b;}
function AOh(a,b){a.b1=CI(R(Cn,0));a.mA=CI(R(Cn,0));a.bt=CI(R(Cs,0));a.dk=CI(R(DG,0));a.ex=CI(R(Ey,0));a.fE=CI(R(EK,0));a.f$=CI(R(E_,0));a.jJ=CI(R(Bj,0));a.kq=CI(R(Bj,0));a.c2=b;}
function Uu(a,b){var c,d,e,f;Dg(a.c2);c=(Cq(!b.hD?a.mA:a.b1)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].by(b);if(f)break;if(b.j$)break;e=e+1|0;}return f;}
function Q$(a,b,c){var d,e,f;Dg(a.c2);d=(Cq(a.fE)).data;e=d.length;f=0;while(f<e){if(d[f].gA(b,c))return 1;f=f+1|0;}return 0;}
function W0(){C.call(this);this.nx=null;}
function AOd(a,b){var c;c=a.nx;if(Uu(c.cp,Yu(c,b,1)))DN(c,b);}
function W1(){C.call(this);this.sB=null;}
function AOu(a,b){var c;c=a.sB;if(Uu(c.cp,Yu(c,b,0)))DN(c,b);}
function W2(){C.call(this);this.oL=null;}
function AMJ(a,b){var c,d,e,f,g,h,i;c=a.oL;if(c.dE!==null){a:{b:{d=EE(c,b);e=c.cp;Dg(e.c2);f=e.hA;if(f!==null)f.l(d);else{g=(Cq(e.bt)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bK(d))break a;i=i+1|0;}}}}DN(c,b);}}
function W3(){C.call(this);this.vb=null;}
function AL5(a,b){var c,d,e,f,g,h;c=a.vb;b.button;if(c.dE!==null)a:{d=EE(c,b);c=c.cp;e=b.button;Dg(c.c2);if(c.hA===null){f=(Cq(c.bt)).data;g=f.length;h=0;while(h<g){b=f[h].b_(d,e);if(b!==null){c.hA=b;c.ol=e;break a;}h=h+1|0;}}}}
function W4(){C.call(this);this.rJ=null;}
function AMw(a,b){var c,d,e,f,g,h,i;c=a.rJ;b.button;if(c.dE!==null){d=EE(c,b);e=c.cp;f=b.button;Dg(e.c2);if(f==e.ol&&e.hA!==null)e.hA=null;g=(Cq(e.bt)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cO(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DN(c,b);}}
function W5(){C.call(this);this.n2=null;}
function AO4(a,b){var c,d,e,f,g,h,i,j,k;c=a.n2;if(c.dE!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cp;f=EE(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dg(e.c2);i=(Cq(e.dk)).data;j=i.length;k=0;b:{while(k<j){if(i[k].cZ(f,d,h))break b;k=k+1|0;}}DN(c,b);}}
function W6(){C.call(this);this.vs=null;}
function AKg(a,b){var c,d,e,f,g,h,i,j;c=a.vs;if(c.dE!==null){d=EE(c,b);e=c.cp;f=b.button;g=b.detail;Dg(e.c2);h=(Cq(e.bt)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cs(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DN(c,b);}}
function W7(){C.call(this);this.r0=null;}
function ASy(a,b){var c,d,e,f,g,h,i;c=a.r0;if(c.dE!==null){d=EE(c,b);e=c.cp;Dg(e.c2);f=(Cq(e.ex)).data;g=f.length;h=0;a:{while(h<g){if(f[h].by(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DN(c,b);}}
function W8(){C.call(this);this.oc=null;}
function AJt(a,b){var c,d,e;b=a.oc.cp;c=(Cq(b.kq)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dg(b.c2);}
function W9(){C.call(this);this.un=null;}
function AQd(a,b){var c,d,e;b=a.un.cp;c=(Cq(b.jJ)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dg(b.c2);}
function Yp(){C.call(this);this.tQ=null;}
function AR_(a,b){var c;c=a.tQ;if(c.dE!==null)EE(c,b);}
function Yq(){C.call(this);this.sR=null;}
function AMi(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.sR;if(Ng()===c.hd){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cq(c.cp.f$)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dr();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cp.c2;m=new NT;m.uB=k;m.uC=l;g.getAsString(Bk(m,"accept"));DN(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(66)),k),B(67)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function Yr(){C.call(this);this.mU=null;}
function AMN(a,b){var c;c=a.mU;if(Ng()===c.hd&&Q$(c.cp,Un(c,b),0))DN(c,b);}
function Ys(){C.call(this);this.uK=null;}
function AOJ(a,b){var c;c=a.uK;if(Ng()===c.hd&&Q$(c.cp,Un(c,b),1))DN(c,b);}
var UJ=F(0);
var UW=F();
function MR(a,b,c){var d,e,f;d=new RN;AV1=AV1+1|0;d.lY=b;d.k7=c;e=(Ea()).createElement("canvas");d.jQ=e;f=b;e.width=f;e=d.jQ;f=c;e.height=f;d.bp=d.jQ.getContext("2d");return d;}
var UU=F();
function ALl(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function MJ(){var a=this;C.call(a);a.bc=null;a.m=null;a.bS=null;}
function AEr(){var a=this;C.call(a);a.hi=null;a.iM=null;a.g9=0;}
function CI(a){var b=new AEr();AKa(b,a);return b;}
function AKa(a,b){a.hi=b;}
function Y(a,b){var c,d,e;c=a.g9;d=a.hi;if(c==d.data.length)a.hi=Dk(d,c+4|0);d=a.hi.data;e=a.g9;a.g9=e+1|0;d[e]=b;a.iM=null;}
function Cq(a){var b;b=a.iM;if(!(b!==null&&b.data.length==a.g9))a.iM=Dk(a.hi,a.g9);return a.iM;}
var IZ=F(0);
var Cn=F(0);
var Cs=F(0);
function ALq(a,b){return 0;}
function ARd(a,b,c){return null;}
function AF8(a,b,c){return 0;}
function AO2(a,b,c,d){return 0;}
var DG=F(0);
var Ey=F(0);
var EK=F(0);
var EP=F(0);
var E_=F(0);
function Qs(){C.call(this);this.wE=null;}
function Bf(){var a=this;C.call(a);a.b=0;a.a=0;}
function B2(a,b){var c=new Bf();PH(c,a,b);return c;}
function PH(a,b,c){a.b=b;a.a=c;}
function Cu(a,b){a.b=b.b;a.a=b.a;}
function V(a,b,c){a.b=b;a.a=c;}
function YL(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);T(G(T(G(d,B(68)),b),B(69)),c);return N(d);}
function Lh(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function L6(){var a=this;C.call(a);a.d_=0;a.i6=0;a.fk=0;a.i5=0;}
function XC(a,b,c,d,e){a.d_=b;a.i6=c;a.fk=d;a.i5=e;}
var ADF=F();
var ZK=F(0);
function Qi(){C.call(this);this.dv=null;}
function LO(){var a=this;C.call(a);a.bW=null;a.xY=null;}
function ACz(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(70):B(71);g=$rt_str(b.getShaderInfoLog(e));h=new M;O(h);G(G(h,f),g);g=N(h);b.deleteShader(e);Br(Bx(),g);Br(EX(),B(72));Br(EX(),d);Br(EX(),B(72));b=new Bq;Bo(b,g);J(b);}
function Dx(){var a=this;LO.call(a);a.ob=null;a.pR=null;a.lP=null;}
function AWn(a,b,c,d){var e=new Dx();IG(e,a,b,c,d);return e;}
function IG(a,b,c,d,e){var f,g,h,i,j,k;a.xY=e;f=ACz(b,35633,c);d=ACz(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bW=g;h=e.so.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bW;k=c.hl;c=c.p$;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bW;b.linkProgram(c);if(b.getProgramParameter(c,35714)){XI(b,B(73));a.lP=new Bf;c=a.bW;a.ob=b.getUniformLocation(c,"uResolution");c=a.bW;a.pR=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bq;c=new M;O(c);G(G(c,B(74)),d);Bo(b,N(c));J(b);}
function AAB(a,b,c){var d,e,f;if(!Lh(a.lP,c)){Cu(a.lP,c);d=a.ob;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function I$(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pR;b.uniform4f(e,i,l,h,j);AAB(a,b,f);}
function WK(){Dx.call(this);this.ud=null;}
function EC(){Dx.call(this);this.rG=null;}
function ATj(a,b){var c=new EC();Ur(c,a,b);return c;}
function AWo(a,b,c){var d=new EC();Uv(d,a,b,c);return d;}
function Ur(a,b,c){Uv(a,b,B(58),c);}
function Uv(a,b,c,d){JP();IG(a,b,c,d,AWm);c=a.bW;a.rG=b.getUniformLocation(c,"sDiffuse");}
function UO(a,b,c){var d;d=a.rG;b.uniform1i(d,0);b.activeTexture(33984);c=c.e1;b.bindTexture(3553,c);}
var ABg=F(Dx);
function AUf(a){var b=new ABg();ARF(b,a);return b;}
function ARF(a,b){JP();IG(a,b,B(58),B(75),AWm);}
function ADj(){EC.call(this);this.wO=null;}
function AUI(a){var b=new ADj();AJA(b,a);return b;}
function AJA(a,b){var c;Ur(a,b,B(76));c=a.bW;a.wO=b.getUniformLocation(c,"uContrast");}
function ACU(){var a=this;EC.call(a);a.tR=null;a.pU=null;a.nG=null;a.oR=null;}
function ATR(a){var b=new ACU();AOY(b,a);return b;}
function AOY(a,b){var c;Uv(a,b,B(77),B(78));c=a.bW;a.tR=b.getUniformLocation(c,"uTexTransform");c=a.bW;a.pU=b.getUniformLocation(c,"uColor");c=a.bW;a.nG=b.getUniformLocation(c,"uBgColor");c=a.bW;a.oR=b.getUniformLocation(c,"uContrast");}
function Z5(){var a=this;EC.call(a);a.ve=null;a.vc=null;a.qv=null;}
function AUT(a){var b=new Z5();AIZ(b,a);return b;}
function AIZ(a,b){var c,d;Ur(a,b,B(79));c=a.bW;a.ve=b.getUniformLocation(c,"uColorB");d=a.bW;a.vc=b.getUniformLocation(d,"uColorF");d=a.bW;a.qv=b.getUniformLocation(d,"uContrast");}
function ACS(){var a=this;Dx.call(a);a.n0=null;a.mH=null;a.mG=null;}
function AUE(a){var b=new ACS();AI0(b,a);return b;}
function AI0(a,b){var c;JP();IG(a,b,B(58),B(80),AWm);c=a.bW;a.n0=b.getUniformLocation(c,"uColor");c=a.bW;a.mH=b.getUniformLocation(c,"uPoints1");c=a.bW;a.mG=b.getUniformLocation(c,"uPoints2");}
var Sm=F(0);
var AE9=F(0);
function GJ(b,c,d){var e,f,g,h;e=d.bl;f=d.bF;g=d.bk;h=d.bG;b.uniform4f(c,e,f,g,h);}
function XI(b,c){var d,e;d=b.getError();if(d){b=Bx();e=new M;O(e);T(G(e,c),d);Br(b,N(e));}}
function Qf(){var a=this;C.call(a);a.wf=null;a.wh=null;a.wg=null;}
function Qh(){var a=this;C.call(a);a.ek=null;a.gw=null;a.nd=null;a.vd=null;a.uz=null;a.sd=0;a.uO=0;}
function Cj(){var a=this;C.call(a);a.wc=null;a.c1=0;}
function C_(a,b,c){a.wc=b;a.c1=c;}
function GR(){var a=this;Cj.call(a);a.so=null;a.mD=null;a.ro=null;a.kQ=0;a.pF=0;a.sJ=0;}
var AWm=null;var AWp=null;function JP(){JP=Bm(GR);AKR();}
function AKR(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GR;c=R(DY,2);d=c.data;ARq();d[0]=AWq;d[1]=AWr;JP();C_(b,B(81),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];Zf();switch(AWs.data[l.l7.c1]){case 1:f=f+l.e7|0;h=h+1|0;break a;case 2:e=e+l.e7|0;g=g+1|0;break a;default:}}i=i|1<<l.hl;k=k+1|0;}b.so=c;b.kQ=e;b.pF=f;b.sJ=i;c=R(DY,g);m=c.data;b.mD=c;c=R(DY,h);n=c.data;b.ro=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];Zf();switch(AWs.data[l.l7.c1]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AWm=b;c=R(GR,1);c.data[0]=b;AWp=c;}
var Mr=F(0);
var TQ=F(0);
var U$=F(0);
var Gr=F();
function Jx(){Gr.call(this);this.vL=null;}
function AA4(){var a=this;Jx.call(a);a.xK=0;a.k2=0;a.iG=null;a.ku=null;a.s7=null;}
function AM0(a,b){var c=new AA4();AQ9(c,a,b);return c;}
function AQ9(a,b,c){a.vL=b;b=new M;O(b);a.iG=b;a.ku=BP(32);a.xK=c;AAS();a.s7=AWt;}
function T3(a,b,c,d){var e,$$je;e=a.vL;if(e===null)a.k2=1;if(!(a.k2?0:1))return;a:{try{e.kj(b,c,d);break a;}catch($$e){$$je=Ei($$e);if($$je instanceof IA){}else{throw $$e;}}a.k2=1;}}
function Od(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ABO(b,c,d-c|0);e=DX(Bb(16,Z(e.length,1024)));g=ABC(e,0,e.data.length);h=a.s7;i=new PA;b=DX(1);j=b.data;j[0]=63;Hf();k=AWu;i.lT=k;i.k8=k;c=j.length;if(c&&c>=i.mE){i.v9=h;i.p5=b.eT();i.xz=2.0;i.mE=4.0;i.pi=BP(512);i.nZ=DX(512);k=AWv;if(k===null){i=new BH;Bo(i,B(82));J(i);}i.lT=k;i.k8=k;a:while(true){if(i.iC==3){f=new D1;X(f);J(f);}i.iC=2;b:{while(true){try{k=Zw(i,f,g);}catch($$e){$$je=Ei($$e);if($$je instanceof Bq){f=$$je;break a;}else{throw $$e;}}if(Im(k))
{d=B7(f);if(d<=0)break b;k=D2(d);}else if(Hc(k))break;h=!Ma(k)?i.lT:i.k8;c:{if(h!==AWv){if(h===AWw)break c;else break b;}d=B7(g);b=i.p5;l=b.data.length;if(d<l){k=AWx;break b;}Xt(g,b,0,l);}EG(f,f.W+Kk(k)|0);}}l=Hc(k);T3(a,e,0,g.W);Ob(g);if(!l){while(true){d=i.iC;if(d!=2&&d!=4){f=new D1;X(f);J(f);}f=AWy;if(f===f)i.iC=3;l=Hc(f);T3(a,e,0,g.W);Ob(g);if(!l)break;}return;}}J(AH_(f));}i=new BH;Bo(i,B(83));J(i);}
function Br(a,b){var c,d,e,f,g,h,i,j;BE(BZ(a.iG,b),10);b=a.iG;c=b.P;d=a.ku;if(c>d.data.length)d=BP(c);e=0;f=0;if(e>c){b=new By;Bo(b,B(84));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.D.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Od(a,d,0,c);a.iG.P=0;}
function Ge(){Gr.call(this);this.xp=null;}
function Yz(a){a.xp=DX(1);}
var Ly=F(Ge);
var AV4=null;function ALd(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AC8(){var b;b=new Ly;Yz(b);AV4=b;}
function DY(){var a=this;Cj.call(a);a.p$=null;a.l7=null;a.e7=0;a.pj=0;a.hl=0;}
var AWq=null;var AWr=null;var AWz=null;function ARq(){ARq=Bm(DY);AJX();}
function AT3(a,b,c,d,e,f,g){var h=new DY();WC(h,a,b,c,d,e,f,g);return h;}
function WC(a,b,c,d,e,f,g,h){ARq();C_(a,b,c);a.p$=d;a.l7=e;a.e7=f;a.pj=g;a.hl=h;}
function AJX(){var b;b=new DY;ACj();WC(b,B(85),0,B(86),AWA,2,0,0);AWq=b;b=AT3(B(87),1,B(88),AWA,2,0,1);AWr=b;AWz=H(DY,[AWq,b]);}
function Jo(){var a=this;C.call(a);a.vY=null;a.wR=null;}
function ADp(b){var c,d;if(Fq(b))J(AAX(b));if(!ADs(L(b,0)))J(AAX(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ADs(d))break a;else J(AAX(b));}}c=c+1|0;}}
function ADs(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mu=F(Jo);
var AWt=null;function AAS(){AAS=Bm(Mu);AIW();}
function ADL(a){var b,c;b=new T4;b.e4=B(89);Hf();c=AWu;b.g0=c;b.l1=c;b.wH=a;b.mQ=0.3333333432674408;b.w4=0.5;b.n7=DX(512);b.sA=BP(512);return b;}
function AIW(){var b,c,d,e,f;b=new Mu;AAS();c=R(Bv,0);d=c.data;ADp(B(90));e=d.length;f=0;while(f<e){ADp(d[f]);f=f+1|0;}b.vY=B(90);b.wR=c.eT();AWt=b;}
var Ky=F();
var AWB=null;var AWs=null;function Zf(){Zf=Bm(Ky);AN2();}
function AN2(){var b,c;ACj();b=BG((AWC.eT()).data.length);c=b.data;AWs=b;c[AWD.c1]=1;c[AWA.c1]=2;ACl();c=BG((AWE.eT()).data.length);b=c.data;AWB=c;b[AWF.c1]=1;b[AWG.c1]=2;}
function Pl(){var a=this;C.call(a);a.fy=null;a.mt=null;a.j8=null;a.sU=null;a.pE=null;a.pX=null;}
function AA9(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.fy,b,c));}
function Na(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.mt[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.fy,b,d));f=e.data;EO();d=f.length;AAS();g=AWt;h=ABC(e,0,d);a:{try{i=ADL(g);Hf();g=ZU(ACD(AEi(i,AWv),AWv),h);break a;}catch($$e){$$je=Ei($$e);if($$je instanceof FP){g=$$je;}else{throw $$e;}}h=new XB;h.jp=1;h.jN=1;h.hy=B(91);h.k9=g;J(h);}if(!g.W&&g.dx==g.mq)c.b2=g.hk;else{f=BP(B7(g));e=f.data;c.b2=f;NI(g,f,0,e.length);}return c;}
function Ni(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.j8[e]){e=e+1|0;}d=e-d|0;Hs(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.fy,b,d)));return c;}
var GV=F(Cj);
var AWD=null;var AWA=null;var AWC=null;function ACj(){ACj=Bm(GV);AIo();}
function AIO(a,b){var c=new GV();ADM(c,a,b);return c;}
function ADM(a,b,c){ACj();C_(a,b,c);}
function AIo(){var b;AWD=AIO(B(92),0);b=AIO(B(93),1);AWA=b;AWC=H(GV,[AWD,b]);}
var Gl=F(Cj);
var AWF=null;var AWG=null;var AWE=null;function ACl(){ACl=Bm(Gl);AI5();}
function ASE(a,b){var c=new Gl();ZQ(c,a,b);return c;}
function ZQ(a,b,c){ACl();C_(a,b,c);}
function AI5(){var b;AWF=ASE(B(94),0);b=ASE(B(95),1);AWG=b;AWE=H(Gl,[AWF,b]);}
var KW=F(Ge);
var AV5=null;function AI8(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AFc(){var b;b=new KW;Yz(b);AV5=b;}
var Wd=F(D4);
function ADx(){BH.call(this);this.wb=null;}
function AAX(a){var b=new ADx();AQE(b,a);return b;}
function AQE(a,b){X(a);a.wb=b;}
var Mt=F(0);
function X5(){C.call(this);this.pL=null;}
function API(a,b){a.pL.setPointerCapture(b.pointerId);}
function X6(){C.call(this);this.or=null;}
function AGY(a,b){a.or.releasePointerCapture(b.pointerId);}
function G8(){var a=this;C.call(a);a.mq=0;a.W=0;a.dx=0;a.hu=0;}
function WA(a,b){a.hu=(-1);a.mq=b;a.dx=b;}
function EG(a,b){var c,d,e;if(b>=0&&b<=a.dx){a.W=b;if(b<a.hu)a.hu=0;return a;}c=new BH;d=a.dx;e=new M;O(e);BE(T(G(T(G(e,B(96)),b),B(97)),d),93);Bo(c,N(e));J(c);}
function B7(a){return a.dx-a.W|0;}
function DO(a){return a.W>=a.dx?0:1;}
var SG=F(0);
var Lg=F(G8);
function AEN(b){var c,d;if(b>=0)return AOw(0,b,BP(b),0,b,0);c=new BH;d=new M;O(d);T(G(d,B(98)),b);Bo(c,N(d));J(c);}
function ABO(b,c,d){return AOw(0,b.data.length,b,c,c+d|0,0);}
function NI(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new By;i=new M;O(i);T(G(T(G(i,B(99)),g),B(100)),f);Bo(h,N(i));J(h);}if(B7(a)<d){j=new L2;X(j);J(j);}if(d<0){j=new By;k=new M;O(k);G(T(G(k,B(101)),d),B(102));Bo(j,N(k));J(j);}g=a.W;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.hk.data[m+a.md|0];l=l+1|0;c=n;m=o;}a.W=g+d|0;return a;}}b=b.data;j=new By;d=b.length;k=new M;O(k);BE(T(G(T(G(k,B(103)),c),B(97)),d),41);Bo(j,N(k));J(j);}
function Kf(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.mu){b=new Ja;X(b);J(b);}e=d-c|0;if(B7(a)<e){b=new H3;X(b);J(b);}if(c>I(b)){f=new By;d=I(b);b=new M;O(b);BE(T(G(T(G(b,B(104)),c),B(97)),d),41);Bo(f,N(b));J(f);}if(d>I(b)){f=new By;c=I(b);b=new M;O(b);T(G(T(G(b,B(105)),d),B(106)),c);Bo(f,N(b));J(f);}if(c>d){b=new By;f=new M;O(f);T(G(T(G(f,B(104)),c),B(107)),d);Bo(b,N(f));J(b);}g=a.W;while(c<d){h=g+1|0;i=c+1|0;SO(a,g,L(b,c));g=h;c=i;}a.W=a.W+e|0;return a;}
function JY(){var a=this;G8.call(a);a.k1=0;a.lI=null;a.xc=null;}
function ABC(b,c,d){var e,f,g;e=b.data;f=new Xs;g=e.length;d=c+d|0;WA(f,g);AKX();f.xc=AWH;f.k1=0;f.lI=b;f.W=c;f.dx=d;f.xg=0;f.m9=0;return f;}
function Xt(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.m9){e=new Ja;X(e);J(e);}if(B7(a)<d){e=new H3;X(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new By;j=new M;O(j);T(G(T(G(j,B(108)),h),B(100)),g);Bo(i,N(j));J(i);}if(d<0){e=new By;i=new M;O(i);G(T(G(i,B(101)),d),B(102));Bo(e,N(i));J(e);}h=a.W;k=h+a.k1|0;l=0;while(l<d){b=a.lI.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.W=h+d|0;return a;}}b=b.data;e=new By;d=b.length;i=new M;O(i);BE(T(G(T(G(i,B(103)),c),B(97)),d),41);Bo(e,N(i));J(e);}
function Ob(a){a.W=0;a.dx=a.mq;a.hu=(-1);return a;}
function HL(){C.call(this);this.ye=null;}
var AWw=null;var AWv=null;var AWu=null;function Hf(){Hf=Bm(HL);AMp();}
function AEt(a){var b=new HL();ADl(b,a);return b;}
function ADl(a,b){Hf();a.ye=b;}
function AMp(){AWw=AEt(B(109));AWv=AEt(B(110));AWu=AEt(B(111));}
var Np=F(Cw);
function AMd(a){}
function AKG(a,b,c){}
function CR(){var a=this;Cw.call(a);a.gt=null;a.s=null;}
function Fi(a,b){var c,d,e;El(a,b);a.gt=AAg(0,0,64);c=new Yx;c.cb=new Bf;c.d3=CI(R(Eq,0));c.dD=new Bf;c.os=new Bf;c.yM=new B4;c.yL=new B4;c.cC=b.bc;d=b.bS;c.iY=d;c.cF=U7(d);d=b.m.kq;e=new MP;e.nK=c;Y(d,e);d=b.m.jJ;e=new MQ;e.q4=c;Y(d,e);a.s=c;Y(b.m.b1,new SL);b=b.m.b1;c=a.s;BM(c);d=new SM;d.su=c;Y(b,d);}
function E6(a){Fv(a.ba.bc,a.gt);}
function G1(a,b,c){var d,e,f,g,h;a:{d=a.s;Cu(d.cb,b);e=d.bQ;if(e!==c){d.bQ=c;f=(Cq(d.d3)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gB(e,c);h=h+1|0;}}}}
var QF=F(0);
var LP=F(0);
function AEH(a){a.ii(Ku());}
function LS(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new H0;c=new I5;d=new Hg;ANw();JV(d,AWI);Lw(c,d,BI(AWJ),BI(AWK),BI(AWL),BI(AWJ),BI(AWM),BI(AWN),BI(AWO),BI(AWP),BI(AWQ),BI(AWR));ABU();e=(AWS.eT()).data;f=e.length;g=R(IP,f);h=g.data;i=0;while(i<f){h[i]=e[i].kO;i=i+1|0;}j=ABd(Q(B(112)),Q(B(113)),Q(B(114)),Q(B(115)));k=new H_;l=new HH;AKm();m=AWT;J4(l,m,AWU,AWV,AWW,AWX,m);Lc(k,l,AA5(),ZH(Q(B(116)),Q(B(117)),Q(B(118))),AA5(),Z0(1,0.17499999701976776),AWY,AWZ);L0(b,c,g,j,k,ADK(Q(B(119)),Q(B(120)),Q(B(121)),Q(B(122))));a.ii(b);}
function AD$(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new H0;c=new I5;d=new Hg;ACa();JV(d,AW0);Lw(c,d,BI(AW1),BI(AW2),BI(AW3),BI(AW1),BI(AW4),BI(AW5),BI(AW6),BI(AW7),BI(AW8),BI(AW9));AAy();e=(AW$.eT()).data;f=e.length;g=R(IP,f);h=g.data;i=0;while(i<f){h[i]=e[i].lo;i=i+1|0;}j=ABd(Q(B(123)),Q(B(124)),Q(B(125)),Q(B(126)));k=new H_;l=new HH;APk();m=AW_;J4(l,m,AXa,AXb,AXc,AXd,m);Lc(k,l,Zq(),ZH(Q(B(127)),Q(B(128)),CL(0)),Zq(),Z0(1,0.07500000298023224),AXe,AXf);L0(b,c,g,j,k,ADK(Q(B(129)),Q(B(130)),Q(B(131)),Q(B(132))));a.ii(b);}
var Ll=F(0);
function Mo(){var a=this;CR.call(a);a.B=null;a.A=null;a.dg=null;a.hp=0;a.dl=null;a.dM=null;a.kw=null;a.kv=null;a.kx=null;a.ky=null;a.hF=null;}
function ATh(a){var b=new Mo();ABu(b,a);return b;}
function ABu(a,b){var c,d,e;Fi(a,b);a.dM=new L6;a.kw=new Bf;a.kv=new Bf;a.kx=new Bf;a.ky=new Bf;a.hF=SH();c=AOi(a.s);a.dg=c;a.B=AEk(a.s,c);a.A=AEk(a.s,a.dg);c=a.B;c.bN=1;d=new Rj;d.tb=a;e=new Rh;e.uL=a;Q0(c,d,d);Q0(a.A,e,e);c=a.B;d=new Ri;d.oQ=a;c.iT=d;d=a.A;e=new Rf;e.ss=a;d.iT=e;Xo(a.s,c);Y(b.m.bt,a.dg);Y(b.m.dk,a.dg);Y(b.m.dk,a);Y(b.m.bt,a);c=b.m.b1;d=new Rg;d.m1=a;Y(c,d);c=b.m.b1;d=new HO;e=new Rd;e.qD=a;SA(d,b,e);Y(c,d);Y(b.m.fE,a);Y(b.m.f$,a);b=b.m.ex;c=new Re;c.tM=a;Y(b,c);LS(a);}
function QL(a,b){if(a.B===b)a.hp=a.hp|1;if(a.A===b)a.hp=a.hp|2;if((a.hp&3)==3)ACT(a);}
function AKq(a,b,c){if(DZ(a.s,a.B))return GH(a.B,b,c);if(!DZ(a.s,a.A))return 0;return GH(a.A,b,c);}
function ZG(a){if(DZ(a.s,a.B))return Oj(a,a.B);if(!DZ(a.s,a.A))return null;return Oj(a,a.A);}
function Oj(a,b){var c;c=new N_;c.q7=b;return c;}
function WP(a,b,c){var d,e,f,g,h,i,j;d=a.dl;if(d!==null&&d.f2!==null){e=b!==a.B?0:1;f=Fx(b);g=(GX(b)+f|0)/2|0;h=g-f|0;d=a.dl;d=d.f2.data[GK(d,g,e)];i=g-(!e?d.hz:d.hB)|0;j=b.bm-W(f,b.N)|0;c.bm=J3(W(((!e?d.hB:d.hz)+i|0)-h|0,c.N)+j|0,IH(c));return;}}
function ACT(a){var b,c,d,e,f,g;Br(Bx(),B(133));b=a.B.e;c=a.A.e;d=EH(b.f);e=EH(c.f);f=AEL(b.f);g=AEL(c.f);b=a.ba.bS;c=new Rx;c.us=a;CP(b,c,B(134),H(C,[d,f,e,g]));}
function AE1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;b=a.dl;if(b!==null&&b.f2!==null){c=Fx(a.B);d=GX(a.B);e=Fx(a.A);f=GX(a.A);g=GK(a.dl,c,1);h=GK(a.dl,d,1);i=GK(a.dl,e,0);j=GK(a.dl,f,0);k=Z(g,i);while(k<=Bb(h,j)){l=a.dl.f2.data[k];if(l.j2){b=a.B;g=b.N;m=W(g,l.hB)-b.bm|0;n=m+W(l.lD,g)|0;b=a.A;g=b.N;o=W(g,l.hz)-b.bm|0;p=o+W(l.lf,g)|0;V(a.kw,a.dM.d_,m);V(a.kx,a.dM.d_,n);b=a.kv;q=a.dM;V(b,q.d_+q.fk|0,o);b=a.ky;q=a.dM;V(b,q.d_+q.fk|0,p);r=Z(m,o);s=Bb(n,p)-r|0;b=a.hF;q=a.dM;Gj(b,q.d_,r,q.fk,s);BB(a.hF.bu,a.dg.R.hf.jc);b
=a.hF.bq;q=a.dg.R;BB(b,HG(q.du,q,l.j2));t=a.s.cC;b=a.dM;Qd(t,b.d_,b.i6,b.fk,b.i5);Ct(t,1);u=a.hF;b=u.z;YK(t,b.b,b.a,u.t,a.kw,a.kv,a.kx,a.ky,u.bq);Ct(t,0);G2(t);}k=k+1|0;}return;}}
function AI4(a,b){var c,d;c=K_(a.B,b);d=K_(a.A,b);return !c&&!d?0:1;}
function ARi(a){var b,c,d;E6(a);Mp(a.B);Mp(a.A);b=a.s.dD;c=a.dM;V(b,c.fk,c.i5);c=a.s.cC;d=a.dM;Bu(c,d.d_,d.i6,b,a.dg.R.b8.er);AE1(a);WJ(a.dg);}
function AP5(a){return Mq(0);}
function AJ6(a){YA(a.B);YA(a.A);}
function APt(a){Xc(a.B);Xc(a.A);}
function AQb(a,b){YB(a.B,b);YB(a.A,b);}
function AO5(a,b,c){G1(a,b,c);Zu(a,b,c);}
function Zu(a,b,c){var d,e,f,g,h;d=new Bf;e=B9(20.0,c);f=new Bf;g=b.b/2|0;h=e/2|0;PH(f,g-h|0,b.a);LQ(a.B,d,f,c);g=b.b;d.b=(g-(g/2|0)|0)+h|0;LQ(a.A,d,f,c);b=a.dM;g=f.b;XC(b,g,d.a,d.b-g|0,f.a);}
function AGW(a,b){BM(b);PZ(a.dg,b);Lp(a.B,b);Lp(a.A,b);}
function ABT(a,b){if(b.bj!=121)return 0;return 1;}
function AC3(a,b){var c,d,e;if(DZ(a.s,a.B)){c=a.dg;d=a.B;e=new Sg;e.py=a;KL(c,b,d,a,a,e);}if(DZ(a.s,a.A)){c=a.dg;d=a.A;e=new Sh;e.vi=a;KL(c,b,d,a,a,e);}return 1;}
function AMm(a,b){var c,d;c=DH(a.B,b.h)&&PG(a.B,b)?1:0;d=DH(a.A,b.h)&&PG(a.A,b)?1:0;return !c&&!d?0:1;}
function AMh(a,b,c,d){var e,f;e=DH(a.B,b.h)&&Q8(a.B,b,c,d)?1:0;f=DH(a.A,b.h)&&Q8(a.A,b,c,d)?1:0;return !e&&!f?0:1;}
function AGt(a,b,c){var d,e,f,g,h,i,j,k;d=DH(a.B,b.h);e=DH(a.A,b.h);f=a.s;g=f.eg;h=g!==null?0:1;i=a.B;j=g!==i?0:1;k=g!==a.A?0:1;if(d&&!(!h&&!k))FT(f,i);if(e&&!(!h&&!j))FT(a.s,a.A);if(d){i=Vu(a.B,b,c);if(i!==null)return i;}return !e?null:Vu(a.A,b,c);}
function AJu(a,b,c){var d,e,f,g;d=DH(a.B,b.h);e=DH(a.A,b.h);f=d&&Vn(a.B,b,c)?1:0;g=e&&Vn(a.A,b,c)?1:0;return !f&&!g?0:1;}
function AOr(a,b,c,d){var e,f,g,h;e=DH(a.B,b.h);f=DH(a.A,b.h);g=e&&JO(a.B,c,d)?1:0;h=f&&JO(a.A,c,d)?1:0;return !g&&!h?0:1;}
function AL0(a){return ZG(a);}
var Wo=F(Mo);
function AIi(a){return Mq(1);}
function Wz(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new X2;d=d.then(Bk(e,"f"));f=new X0;f.th=b;f.ti=c;g=new X1;d.then(Bk(f,"f"),Bk(g,"f"));}
var AEQ=F();
function AQo(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(135)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Ls(b)){case -1570047148:if(!Bn(b,B(136)))break a;d=16;break a;case -1519338717:if(!Bn(b,B(137)))break a;d=2;break a;case -1509980539:if(!Bn(b,B(138)))break a;d=12;break a;case -1073555521:if(!Bn(b,B(139)))break a;d=13;break a;case -1045861099:if(!Bn(b,B(140)))break a;d=17;break a;case -1045861098:if(!Bn(b,B(141)))break a;d=18;break a;case -811765794:if(!Bn(b,B(142)))break a;d=5;break a;case -785237654:if
(!Bn(b,B(143)))break a;d=10;break a;case -631889171:if(!Bn(b,B(144)))break a;d=8;break a;case -439438829:if(!Bn(b,B(145)))break a;d=19;break a;case 2129957:if(!Bn(b,B(146)))break a;d=1;break a;case 3343967:if(!Bn(b,B(147)))break a;d=9;break a;case 3556498:if(!Bn(b,B(148)))break a;d=4;break a;case 485517998:if(!Bn(b,B(149)))break a;d=6;break a;case 544901384:if(!Bn(b,B(150)))break a;d=3;break a;case 1030621992:if(!Bn(b,B(151)))break a;d=15;break a;case 1465713255:if(!Bn(b,B(152)))break a;d=7;break a;case 1554501643:if
(!Bn(b,B(153)))break a;d=14;break a;case 1609169232:if(!Bn(b,B(154)))break a;d=11;break a;default:}}b:{switch(d){case 1:break;case 2:b=new TH;break b;case 3:case 4:b=new TG;break b;case 5:b=new TF;break b;case 6:b=new TE;break b;case 7:b=new TD;break b;case 8:case 9:b=new TC;break b;case 10:b=new TB;break b;case 11:b=new TA;break b;case 12:b=new Tz;break b;case 13:b=new Q9;break b;case 14:b=new Q5;break b;case 15:b=new Q7;break b;case 16:b=new Q3;break b;case 17:b=new Q4;break b;case 18:b=new Q1;break b;case 19:b
=new Q2;break b;default:b=new QZ;break b;}b=new TI;}return b;}
var ABN=F();
var Kb=F(Lg);
function ABv(){var a=this;Kb.call(a);a.mu=0;a.md=0;a.hk=null;}
function AOw(a,b,c,d,e,f){var g=new ABv();ASM(g,a,b,c,d,e,f);return g;}
function ASM(a,b,c,d,e,f,g){WA(a,c);a.W=e;a.dx=f;a.md=b;a.mu=g;a.hk=d;}
function SO(a,b,c){a.hk.data[b+a.md|0]=c;}
function K6(){var a=this;C.call(a);a.v9=null;a.p5=null;a.xz=0.0;a.mE=0.0;a.lT=null;a.k8=null;a.iC=0;}
function LV(){var a=this;C.call(a);a.gy=0;a.h$=0;}
var AWy=null;var AWx=null;function ZD(a,b){var c=new LV();AAb(c,a,b);return c;}
function AAb(a,b,c){a.gy=b;a.h$=c;}
function Im(a){return a.gy?0:1;}
function Hc(a){return a.gy!=1?0:1;}
function KV(a){return !QR(a)&&!Ma(a)?0:1;}
function QR(a){return a.gy!=2?0:1;}
function Ma(a){return a.gy!=3?0:1;}
function Kk(a){var b;if(KV(a))return a.h$;b=new Fj;X(b);J(b);}
function D2(b){return ZD(2,b);}
function VT(a){var b,c;switch(a.gy){case 0:b=new Qk;X(b);J(b);case 1:b=new XH;X(b);J(b);case 2:b=new VM;c=a.h$;X(b);b.yx=c;J(b);case 3:b=new P$;c=a.h$;X(b);b.yq=c;J(b);default:}}
function AAD(){AWy=ZD(0,0);AWx=ZD(1,0);}
var Zs=F();
var Iv=F(0);
var Ny=F();
function AJb(a,b){return b.arrayBuffer();}
var Nx=F();
function ANC(a,b){var c,d;c=new Pj;d=new Ph;return $rt_globals.WebAssembly.instantiate(b,ALk(Bk(c,"f"),Bk(d,"f")));}
var Nw=F();
function AOo(a,b){AGS(b);}
var Nv=F();
function AHA(a,b){AEw(b);}
function Yl(){C.call(this);this.uH=null;}
function ANk(a,b){Ki(a.uH.B,b);}
function Yn(){C.call(this);this.oF=null;}
function ANZ(a,b){Ki(a.oF.A,b);}
var TI=F();
function ANU(a,b){return ATh(b);}
var TH=F();
function AGA(a,b){return AU_(b);}
var TG=F();
function AKl(a,b){return ATm(b);}
var TF=F();
function AKi(a,b){var c,d,e;c=new WG;Fi(c,b);d=new Vr;d.l9=new Bf;d.ko=new Bf;c.rP=d;c.dF=Zz();c.cL=Zz();c.ef=M6(c.s);Y(c.s.d3,c);d=b.m.b1;e=new TK;e.tS=c;Y(d,e);Y(b.m.bt,c);b=b.m.ex;d=new TN;d.st=c;Y(b,d);Tc(c.cL);c.lM=ES(B(155),25.0);Ic(c.ef,F2(),c.lM);BB(c.gt,CL(43));b=F2();If(c.dF,b);If(c.cL,b);b=c.dF;b.jC=new TM;d=c.cL;d.jC=new TJ;d.jY=new XD;d.ts=new XE;K5(b,(NQ(0)).i1);K5(c.cL,(NQ(0)).i1);return c;}
var TE=F();
function AKZ(a,b){var c,d,e;c=new XV;Fi(c,b);c.kS=ES(B(156),15.0);d=AET();c.ew=d;Y(c.s.d3,d);Y(c.s.d3,c);BB(c.gt,CL(43));d=M6(c.s);c.hq=d;Ic(d,F2(),ES(B(155),25.0));d=b.m.b1;e=new OS;e.v6=c;Y(d,e);d=b.m.ex;e=new OT;e.qK=c;Y(d,e);Y(b.m.bt,Zy(c.hq));Y(b.m.bt,c.ew);b=b.m.dk;d=c.ew;BM(d);e=new OU;e.t9=d;Y(b,e);return c;}
var TD=F();
function AGH(a,b){var c,d,e;c=new YE;Fi(c,b);c.fO=Co();c.fd=Co();c.o5=Q(B(157));c.iw=AQB();c.ga=0;d=c.s.d3;e=new Uw;e.mW=c;Y(d,e);Y(b.m.bt,c);d=b.m.b1;e=new Ux;e.qE=c;Y(d,e);b=Hq(b.bc,B(155),35);c.jB=b;c.ib=AED(E3(b));BB(c.gt,Q(B(158)));return c;}
var TC=F();
function AIk(a,b){var c,d,e,f;c=new Pq;El(c,b);c.f6=ACh();c.d$=0;c.sm=500;c.uS=HI(0,0,0,255,new B4);c.l$=20;c.u7=20;c.oW=Ku();d=b.m.bt;e=new WW;e.iW=c;f=new YD;f.r7=e;e.rx=f;Y(d,e);d=b.m.dk;e=new Tg;e.of=c;Y(d,e);c.ea=b.bc;c.tm=U7(b.bS);T$(c.f6,Hq(c.ea,B(155),c.u7),c.l$,c.ea);c.gZ=Hu();return c;}
var TB=F();
function AOc(a,b){var c,d;c=new Rl;Gq(c,b);b=b.m.b1;d=new Ql;d.uU=c;Y(b,d);return c;}
var TA=F();
function ARU(a,b){return AUN(b);}
var Tz=F();
function ASK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new Xl;Gq(c,b);c.dW=Ff(0,0,300,300);c.e2=S9(0,0,3,3);d=b.bc;b=b.m.bt;e=new Ug;e.ll=c;Y(b,e);b=AAR(d);c.p1=b;Gn(c.dW,b);G$(c.dW);b=c.dW.bu;FN();BB(b,AXg);BB(c.dW.bq,CM(204,120,50));ACl();e=AWG;f=DX((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CV(d);Zf();switch(AWB.data[e.c1]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Es;X(b);J(b);}b:
{Nr(m,5,5,h);b=m.d8.dv;switch(AWB.data[e.c1]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Es;X(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.kG=m;V(c.e2.t,Ce(m),C8(c.kG));BB(c.e2.bu,c.lW);return c;}
var Q9=F();
function ALS(a,b){var c,d,e;c=new SI;Gq(c,b);c.gr=Ff(0,0,300,300);c.kc=new Bf;c.iz=new Bf;c.hJ=new Bf;d=b.bc;b=b.m.bt;e=new Wn;e.jF=c;Y(b,e);b=AAR(d);c.r2=b;Gn(c.gr,b);G$(c.gr);b=c.gr.bu;FN();BB(b,AXg);BB(c.gr.bq,CM(204,120,50));return c;}
var Q5=F();
function AFs(a,b){var c,d,e,f;c=new O2;El(c,b);c.w7=20;c.yK=11;c.wM=220;c.jm=new Bf;c.xr=5000;c.gM=1;c.fA=H(Hg,[CL(0),CL(255)]);c.ej=b.bc;d=b.m.bt;e=new UH;e.jw=c;f=new PS;f.nu=e;e.qg=f;Y(d,e);b=b.m.dk;d=new N$;d.ub=c;Y(b,d);b=CK(c.ej,200,220);c.j7=b;F5(b,B(155),20.0);b=CK(c.ej,200,20);c.fn=b;F5(b,B(155),20.0);c.hT=Hu();return c;}
var Q7=F();
function AI9(a,b){var c,d,e;c=new IF;Gq(c,b);Y(b.m.bt,c);d=b.m.b1;e=new SV;e.r_=c;Y(d,e);Y(b.m.fE,new SU);d=b.m.fE;e=new SS;e.pO=c;Y(d,e);Y(b.m.f$,new SR);d=b.m.f$;e=new ST;e.nz=c;Y(d,e);b=!X9(b.bS)?B(159):B(160);d=new M;O(d);G(G(d,B(161)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var Q3=F();
function AL$(a,b){var c,d,e,f,g,h,i,j;c=new Qo;El(c,b);c.nI=CL(20);c.ff=Ff(0,0,300,300);d=b.m.b1;e=new Sn;e.yf=c;Y(d,e);b=b.bc;d=Hq(b,B(10),88);CA(b.cG,d);f=Er(b.cG,B(162));g=Er(b.cG,B(163));if(f>g)g=f;h=Df(g);i=Kd(d,1.1799999475479126);j=Bx();e=new M;O(e);T(G(T(G(e,B(164)),h),B(165)),i);Br(j,N(e));e=CK(b,h,i*2|0);c.ic=e;CA(e,d);Ch(c.ic,B(162),0.0,d.dB);Ch(c.ic,B(163),0.0,i+d.dB);b=CV(b);c.lN=b;CN(b,c.ic);Gn(c.ff,c.lN);G$(c.ff);b=c.ff.bu;FN();BB(b,AXg);BB(c.ff.bq,AXh);return c;}
var Q4=F();
function AP2(a,b){var c;c=new O$;Xn(c,b);Gj(c.b9,0,0,300,300);V(c.cY,300,300);return c;}
var Q1=F();
function AFi(a,b){var c;c=new O_;Xn(c,b);c.fm=new Bf;c.fe=new Bf;V(c.dJ,150,140);V(c.cY,500,100);V(c.eB,150,200);V(c.d7,500,250);return c;}
var Q2=F();
function APO(a,b){var c,d,e,f;c=new WX;Fi(c,b);c.tl=ES(B(156),20.0);d=AET();c.eb=d;Y(c.s.d3,d);Y(c.s.d3,c);BB(c.gt,CL(43));d=M6(c.s);c.gT=d;Ic(d,F2(),ES(B(155),25.0));d=b.m.b1;e=new QM;e.yc=c;Y(d,e);d=b.m.ex;e=new QN;e.qN=c;Y(d,e);Y(b.m.bt,Zy(c.gT));Y(b.m.bt,c.eb);d=b.m.bt;e=c.s.cF;f=new RT;f.mM=e;Y(d,f);b=b.m.dk;d=c.eb;BM(d);e=new QO;e.sb=d;Y(b,e);return c;}
var QZ=F();
function ALW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new RG;YO(c,b);d=c.cM;e=new II;f=AJZ(B(166));g=R(Bv,8);h=I(B(167));i=0;j=0;k=h+1|0;while(true){l=GL(B(167),10,j);m=l>=0?Ca(B(167),j,l):Dj(B(167),j);n=i+1|0;g=ADB(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}QP(e,Z_(g,n),B(168),f);Ki(d,e);return c;}
function He(){var a=this;C.call(a);a.bH=0;a.ck=0;a.c0=0;a.i0=0;}
function AXi(a,b,c,d){var e=new He();US(e,a,b,c,d);return e;}
function US(a,b,c,d,e){a.bH=d;a.ck=b;a.c0=c;a.i0=e;}
function O9(){var a=this;He.call(a);a.dR=null;a.bj=0;a.hD=0;a.r$=0;a.j$=0;}
var ADQ=F();
function WN(b,c){return (b+(c/2|0)|0)/c|0;}
function P1(b,c,d){if(b<(2147483647/c|0))return WN(W(b,c),d);return 0.5+c*b/d|0;}
function IM(b,c){return ((b+c|0)-1|0)/c|0;}
function Hm(b){return b+0.5|0;}
function Df(b){return b+0.5|0;}
function Ew(b,c,d){return Bb(b,Z(c,d));}
function MF(){var a=this;He.call(a);a.h=null;a.vZ=null;}
var UL=F(0);
function NT(){var a=this;C.call(a);a.uB=null;a.uC=null;}
function ALL(a,b){var c,d;c=a.uB;d=a.uC;$rt_globals.console.info("paste plain string "+b);c.l(FE(b));Dg(d);}
function Vs(){C.call(this);this.va=null;}
function WM(a,b){a.va.clipboardData.setData("text/plain",$rt_ustr(b));}
function Xs(){var a=this;JY.call(a);a.xg=0;a.m9=0;}
function IK(){var a=this;C.call(a);a.z=null;a.t=null;a.bq=null;a.bu=null;}
function SH(){var a=new IK();SC(a);return a;}
function S9(a,b,c,d){var e=new IK();AIG(e,a,b,c,d);return e;}
function SC(a){a.z=new Bf;a.t=new Bf;a.bq=new B4;a.bu=new B4;}
function AIG(a,b,c,d,e){a.z=new Bf;a.t=new Bf;a.bq=new B4;a.bu=new B4;Gj(a,b,c,d,e);}
function Gj(a,b,c,d,e){V(a.z,b,c);V(a.t,d,e);}
function Tu(a){V(a.t,0,0);}
function Me(a){var b;b=a.t;return W(b.b,b.a)?0:1;}
function Et(a,b){return F$(b,a.z,a.t);}
function UY(a,b,c,d){var e;e=a.z;Bu(b,e.b+c|0,e.a+d|0,a.t,a.bq);}
function UB(a,b,c,d,e,f){var g,h,i,j;g=a.z;d=g.b+d|0;e=g.a+e|0;g=a.t;h=a.bu;i=a.bq;In(b,b.hC);I$(b.hC,b.bn,d,e,g,b.dn);UO(b.hC,b.bn,c);g=b.hC;j=b.bn;GJ(j,g.ve,h);GJ(j,g.vc,i);c=g.qv;j.uniform2f(c,f,0.0);Ii(b);}
function AC$(){var a=this;C.call(a);a.d9=null;a.dY=null;a.ds=null;a.cc=null;a.R=null;}
function AOi(a){var b=new AC$();ALe(b,a);return b;}
function ALe(a,b){a.dY=AET();a.d9=b;a.cc=M6(b);}
function PZ(a,b){var c;a.R=b;c=a.ds;if(c!==null)c.ep=b.V;Ic(a.cc,b.V,b.qT);}
function WJ(a){Jf(a.dY,a.d9.cC);Ix(a.cc);}
function APb(a,b){return !ZR(a.dY,b)&&!KE(a.cc,b)?0:1;}
function ASQ(a,b,c,d){return !ABL(a.dY,b,c,d)&&!Jw(a.cc,b,c,d)?0:1;}
function AGZ(a,b,c){var d;d=Jr(a.cc,b,c);if(d!==null)return d;return YM(a.dY,b,c);}
function ANA(a,b,c){return !AES(a.dY,b,c)&&!DK(a.cc)?0:1;}
function VK(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=AOk();i=c.i;j=0;while(j<i){if(f===null){k=(Bt(c,j)).bx;l=Sf(EM(B0(g.f,k)));m=V_(g.f9);}else{n=f.data;k=n[j].kk.k5;l=!C6(g.f9,n[j].ij)?B(31):Sf(EM(B0(g.f,k)));m=V_(n[j].ij);}if(I(l)>153){o=Ca(l,0,150);n=new M;O(n);G(G(n,o),B(169));l=N(n);}if(I(m)>153){o=Ca(m,0,150);n=new M;O(n);G(G(n,o),B(169));m=N(n);}p=C5(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bt(c,j);}if(f!==null){q=new UV;q.nD=d;q.nC=o;}else{q=new UX;q.vR=d;q.vM=n;}Nl(h,
m,p,l,q);j=j+1|0;}r=Rc(h);if(a.ds!==null)UA(a);c=new Rk;n=a.d9;o=new SX;o.oY=a;o.oX=d;AAT(c,n,o);Wr(c,r);d=a.R;Yi(c,d.V,d.tq);a.ds=ACd(a.d9);d=ZX(c,a.d9);n=a.R.V;QV(d,n.l8,n.ks);LY(a.ds,d);d=a.ds;n=new M;O(n);G(G(n,B(170)),e);IN(d,N(n),a.R.pQ,4.0);d=a.ds;d.ep=a.R.V;I4(a.dY,d);d=a.ds;s=(d.U.q.a+CD(d.bs,2.0)|0)+CD(a.d9,2.0)|0;i=(c.dV+c.dX|0)+c.f7|0;t=CD(c.cy,5.0);e=B2(Ew(t,b.b,c.cy.cb.b-i|0),Ew(s,b.a,c.cy.cb.a-c.cI.a|0));TT(c);AAc(c);s=(c.dV+c.dX|0)+c.f7|0;b=c.cy;i=(b.cb.b-e.b|0)-CD(b,5.0)|0;b=c.cy;t=(b.cb.a-
e.a|0)-CD(b,5.0)|0;d=B2(Z(s,i),Z(c.cI.a,t));Fo(a.ds,e,d);FT(a.d9,c);}
function UA(a){Kg(a.dY,a.ds);J6(a.ds);a.ds=null;}
function NH(a,b){var c;c=new SN;c.tZ=a;c.t4=b;return c;}
function KL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DK(a.cc)){g=a.cc;h=b.h;b=new Tp;b.X=a;b.bM=c;b.oK=f;b.h3=e;b.iP=d;i=P9();e=b.bM.e;d=Dn(e);e=G6(e);f=b.bM.eA;if(V9(f,d,e)!==null){j=b.X.R.V.bi;k=new RX;k.oi=b;k.oh=h;D7(i,B(171),j,k);}if(K3(f,d,e)!==null){j=b.X.R.V.bi;k=new RW;k.pu=b;k.pw=h;D7(i,B(172),j,k);}if(NE(f,d,e)!==null){e=b.X.R.V.bi;f=new RU;f.nB=b;f.nE=h;D7(i,B(173),e,f);}e=b.X.R.V.bi;f=new RV;f.vy=b;f.vz=h;D7(i,B(174),e,f);if(!b.bM.ee){e=b.X.R.V.bi;f=new PO;f.t3=b;D7(i,B(175),e,f);}e=b.X.R.V.bi;f
=new PM;f.qF=b;D7(i,B(176),e,f);if(!b.bM.ee&&X9(IL(b))){e=b.X.R.V.bi;f=new PP;f.sZ=b;D7(i,B(177),e,f);}l=b.X.R.V.bi;d=P9();m=b.X.R.V.bi;n=R(C$,3);o=n.data;k=b.iP;BM(k);e=new Te;e.on=k;o[0]=D8(B(178),m,e);k=b.X.R.V.bi;p=b.iP;BM(p);e=new Tf;e.rV=p;o[1]=D8(B(179),k,e);e=b.X.R.V.bi;j=b.iP;BM(j);k=new Td;k.vH=j;o[2]=D8(B(180),e,k);JK(d,B(181),m,FV(n),AXj);f=b.X.R.V.bi;n=R(C$,2);o=n.data;k=b.h3;BM(k);j=new Ou;j.sj=k;o[0]=D8(B(182),f,j);j=b.X.R.V.bi;k=b.h3;BM(k);p=new Os;p.q$=k;o[1]=D8(B(183),j,p);GO(d,B(184),f,FV(n));f
=b.X.R.V.bi;j=new VH;j.rH=b;JK(d,B(185),f,j,AXj);GO(i,B(186),l,Hv(d));k=b.X.R.V.bi;d=P9();GO(d,B(187),b.X.R.V.bi,AFa(b));f=b.X.R.V.bi;m=new WE;m.td=b;D7(d,B(188),f,m);GO(i,B(189),k,Hv(d));Gg(g,h,Hv(i),NH(a,c));}}
function AL2(a,b,c,d){return Lk(a.dY,b,c,d);}
function Zj(b){var c;c=new Wt;c.ui=b;return c;}
var HW=F(0);
function AHZ(a){}
function ASX(a){}
function AA$(){var a=this;C.call(a);a.bf=null;a.cE=null;a.ct=null;a.S=null;a.iH=null;a.rS=0;a.l0=null;a.cP=null;a.w=0;a.y=0;a.hh=0;a.lh=0;a.gd=0;a.jh=null;a.eW=null;a.cB=null;a.N=0;a.e=null;a.eo=null;a.eA=null;a.r=null;a.fJ=null;a.dK=null;a.mx=null;a.gD=null;a.uk=0;a.sq=0;a.cK=0;a.cl=0;a.co=0;a.e$=null;a.ev=null;a.es=null;a.bm=0;a.dd=0;a.hm=0;a.id=0;a.h4=0;a.wt=0;a.v2=0;a.jD=0;a.iX=0;a.dL=0;a.cX=null;a.h0=0;a.hZ=0;a.eV=null;a.ee=0;a.bN=0;a.iu=null;a.ih=null;a.wd=null;a.g5=null;a.n8=null;a.vJ=null;a.iT=null;a.lb
=0;a.rO=null;a.eY=Ep;a.tP=null;a.uc=null;}
function AEk(a,b){var c=new AA$();AKI(c,a,b);return c;}
function AKI(a,b,c){var d,e,f,g;a.bf=new Bf;a.cE=new Bf;a.rS=0;a.l0=R(Bj,10);a.cP=ANx();a.gd=16;a.jh=B(155);a.cB=R(Lf,4);d=new II;e=new HU;e.el=GD();e.eI=GD();e.fx=Co();e.F=M7(B(31));e.fP=0;e.cw=0;e.dc=UC(e);d.f=e;d.jg=B(190);d.f9=null;a.e=d;f=new Wq;f.nw=CI(R(Mw,0));f.s9=CI(R(Mw,0));f.tx=CI(R(MT,0));f.oZ=CI(R(Qp,0));f.mV=CI(R(G3,0));f.rW=CI(R(RO,0));a.eA=f;a.r=AN4();e=new NC;e.eR=R(Jt,16);e.eS=0;e.di=(-1);a.fJ=e;a.gD=R(EW,0);a.e$=B2(1,0);a.ev=Hu();a.es=Hu();a.bm=0;a.dd=0;a.hm=0;a.h4=1;a.jD=1;a.iX=1;a.dL=3;a.cX
=ACh();a.eV=B(191);a.ee=0;a.bN=0;a.iu=null;a.ih=Co();e=EX();BM(e);f=new Vg;f.yy=e;a.g5=f;a.rO=new B4;e=new Vf;e.rD=a;a.tP=e;e=new Vb;e.n4=a;a.uc=e;a.ct=b;a.S=b.cC;a.iH=c;g=a.l0.data;b=new Va;b.tO=a;g[0]=b;b=new Vd;b.r3=a;g[1]=b;b=new Vc;b.om=a;g[2]=b;b=new VD;b.ua=a;g[3]=b;b=new VC;b.q1=a;g[4]=b;b=new VE;b.nL=a;g[5]=b;AFP();a.id=AXk===AXl?0:1;}
function LQ(a,b,c,d){Cu(a.bf,b);Cu(a.cE,c);Sk(a,b,c,d);}
function Q0(a,b,c){a.n8=b;a.vJ=c;}
function Sk(a,b,c,d){var e;a.cK=B9(80.0,d);a.cl=B9(1.0,d);a.co=B9(10.0,d);if(!a.bN)Cu(a.ct.dD,a.bf);else V(a.ct.dD,(b.b+c.b|0)-Lv(a)|0,b.a);VU(a.cX,a.ct.dD,Lv(a),c.a,d);b=a.cP;e=B9(2.0,d);b.dZ.t.b=e;Ut(a,a.jh,a.gd);Wb(a);}
function AIR(a){a.lh=1;LR(a);}
function AHw(a){a.lh=0;}
function LR(a){SQ(a.cP,JB(Ck(a)));}
function Lp(a,b){var c,d;a.dK=b;c=a.cP;d=b.b8.tF;BB(c.dZ.bq,d);c=a.ev;d=b.b8;Gk(c,d.mm,d.l3);c=a.es;b=b.b8;Gk(c,b.mm,b.l3);}
function YA(a){Li(a,a.eW.mo,a.gd+1|0);}
function Xc(a){var b;b=a.gd;if(b<=7)return;Li(a,a.eW.mo,b-1|0);}
function YB(a,b){Li(a,b,a.gd);}
function Li(a,b,c){if(a.ct.bQ!==0.0){Ut(a,b,c);F7(Ck(a));}a.gd=c;a.jh=b;}
function Ut(a,b,c){var d,e,f,g,h,i;d=B9(c,a.ct.bQ);e=a.eW;f=e!==null?e.ph:0;if(!(d==f&&C6(b,a.jh))){Oa(a.cX);g=a.gD.data;c=g.length;f=0;while(f<c){QI(g[f]);f=f+1|0;}g=a.e.f.F.data;c=g.length;f=0;while(f<c){Eh(g[f]);f=f+1|0;}g=a.cB.data;c=Hp(0,0);e=a.S;h=d;g[c]=GW(e,b,h,400,0);a.cB.data[Hp(0,1)]=GW(a.S,b,h,400,2);a.cB.data[Hp(1,0)]=GW(a.S,b,h,700,0);a.cB.data[Hp(1,1)]=GW(a.S,b,h,700,2);e=a.cB.data[Hp(0,0)];a.eW=e;c=E3(e);a.N=Df(c*1.25);a.cP.dZ.t.a=E3(a.eW);a.mx=CH(a.mx,CK(a.S,1024,a.N));f=a.N;i=S8(a.cP);e=new M;O(e);b
=G(G(e,B(192)),b);BE(b,32);T(G(T(G(T(G(T(b,d),B(193)),c),B(165)),f),B(194)),i);$rt_globals.console.info($rt_ustr(N(e)));if(AXm){c=Lm(a.eW,a.N);b=new M;O(b);T(G(b,B(195)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.hh=G7(Fu(a),a.y,a.S.cG,a.cB);GY(a);Wb(a);}}
function Vv(a){return W(Cy(a.e.f)+5|0,a.N);}
function IH(a){return Bb(Vv(a)-a.cE.a|0,0);}
function QX(a){return Bb(a.hm-De(a)|0,0);}
function De(a){var b;b=!a.bN?0:C2(a)+a.co|0;return Bb(1,(a.cE.b-a.cK|0)-b|0);}
function Lv(a){return a.bN?a.cK:a.cK-a.co|0;}
function DJ(a){return a.cE.a;}
function K_(a,b){var c,d,e;c=a.e.f;d=c.fP;e=c.cw;d=d!=e&&b-c.pW>0.03125?1:0;if(d&&a.lb!=e){a.lb=e;S_(a);}d=J3((a.bm+a.wt|0)-a.v2|0,IH(a));e=a.bm==d?0:1;if(e)E$(a,d);return !Tq(a.cP,b)&&!e&&!a.rS?0:1;}
function E$(a,b){var c,d;c=J3(b,IH(a));if(c!=a.bm){a.bm=c;d=a.vJ;if(d!==null)d.h8(c);}}
function Io(a,b){var c,d;c=J3(b,QX(a));if(c!=a.dd){a.dd=c;d=a.n8;if(d!==null)d.h8(c);}}
function Mp(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;b=IM(a.cE.a,a.N)+7|0;c=a.gD;if(c.data.length<b)a.gD=AAU(b,c,a.uk,a.sq,a.e.f);Ct(a.S,0);d=a.S;e=a.bf;f=a.cE;LK(d,e.b,e.a,f);g=(a.N-S8(a.cP)|0)/2|0;h=(a.hh-(Qz(a.cP)/2|0)|0)-a.dd|0;i=!a.bN?a.cK:(a.cl+a.co|0)+C2(a)|0;P7(a.cP,i+h|0,(g+W(a.w,a.N)|0)-a.bm|0);j=Cy(a.e.f);k=Fx(a);l=GX(a);a.uk=k;a.sq=l;m=a.ct.dD;V(m,De(a),a.N);n=!a.bN?a.bf.b+a.cK|0:((a.bf.b+a.cl|0)+a.co|0)+C2(a)|0;o=k;while(o<=l&&o<j){e=B0(a.e.f,o);d=Rt(a,o);AB_(d,e,a.mx,a.cB,a.S,a.N,De(a),
a.dd);p=d.bZ;a.hm=Bb(a.hm,E2(e)+(40.0*a.ct.bQ|0)|0);q=W(a.N,o)-a.bm|0;c=a.eo;f=c===null?null:c.data[o];b=a.bf.a+q|0;e=a.S;r=a.rO;s=!a.id?0.0:0.5;g=De(a);i=a.N;t=a.dd;u=a.dK;v=ADr(a.r,o);if(v!==null){if(v.a==(-1))v.a=p.T;v.b=G7(p,v.b,a.S.cG,a.cB);v.a=G7(p,v.a,a.S.cG,a.cB);}ADt(d,b,n,e,r,m,s,g,i,t,u,v,a.iu,a.ih,a.w!=o?0:1,a.eo===null?0:1,f);o=o+1|0;}o=k;while(o<=l&&o<j&&a.jD){d=Rt(a,o);q=W(a.N,o)-a.bm|0;w=AAm(a.r,o);e=a.dK;f=e.b8;r=f.oG;x=a.w==o&&a.eo===null?1:0;a:{if(w)r=f.k$;else{c=a.eo;if(c!==null){c=c.data;if
(o<c.length&&c[o]!==null){r=HG(e.du,e,c[o].f1);break a;}}if(x)r=f.jd;}}ACH(d,a.S,n,a.bf.a+q|0,a.N,m,a.dd,De(a),r);o=o+1|0;}if(a.h4){t=Z(l+1|0,j);ACe(a,W(a.N,t)-a.bm|0);}AAi(a);ABo(a,k,l);if(a.iX)AEJ(a,k,l,j);if(a.lh&&h>=(( -Qz(a.cP)|0)/2|0)){d=a.cP;e=a.cE;if(ZL(d.dZ.z,0,0,e))Vz(a.cP,a.S,a.bf);}ACV(a);ADD(a);G2(a.S);}
function AEJ(a,b,c,d){var e,f,g,h,i,j,k,l;while(b<=c&&b<d){a:{e=a.eo;if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dK;h=HG(h.du,h,g.f1);}else h=e!==null?a.dK.b8.er:a.dK.b8.jd;if(!(a.w!=b&&g===null)){a.e$.b=!a.bN?(a.co-a.cl|0)-a.dL|0:((a.co+C2(a)|0)+a.cl|0)-a.dL|0;i=a.e$;j=a.N;i.a=j;k=a.bN?0:(a.cK-a.co|0)+a.cl|0;j=W(j,b)-a.bm|0;g=a.S;l=a.bf;Bu(g,l.b+k|0,l.a+j|0,i,h);}b=b+1|0;}}
function ABo(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cE.a;e=Z(d,W(Cy(a.e.f),a.N)-a.bm|0);f=a.cX;g=a.bm;h=a.eo===null?a.w:(-1);i=a.S;j=a.dK;J_(f,i,b,d);Ye(f,b);Yv(f,g,e,j,i);k=j.hf;if(e<d){l=f.f4;Bu(i,l.b,l.a+e|0,B2(f.fh.b,d-e|0),k.jc);}if(b<=h&&h<=c){l=j.hf;b=h/20|0;m=f.cA;m=Bt(m,b%m.i|0);k=f.f4;e=W(f.cA.i,f.iD);b=m.eJ.a;d=((m.je.a-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%C8(m.b5)|0)|0;b=h%m.dT|0;c=m.bo;b=d+W(b,c)|0;if(b<( -c|0))b=b+e|0;V(m.gu,m.eJ.b,c);f=m.fU;c=h%m.dT|0;d=m.bo;CF(f,0.0,W(c,d),m.eJ.b,d);Jb(m,i,b,
k,l.o2,l.uM);}}
function Fx(a){return Z(a.bm/a.N|0,Cy(a.e.f)-1|0);}
function GX(a){return Z(((a.bm+DJ(a)|0)-1|0)/a.N|0,Cy(a.e.f)-1|0);}
function Wb(a){T$(a.cX,a.cB.data[0],a.N,a.S);J_(a.cX,a.S,Fx(a),DJ(a));}
function Rt(a,b){var c;c=a.gD.data;return c[b%c.length|0];}
function AE2(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dp(a.r))Dt(a,a.eV);else{b=D5(a.r);c=FB(a.r);d=c.M;e=b.M;f=(d-e|0)+1|0;g=BG(f);h=g.data;i=R(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eV;e=e+1|0;k=f;}l=EU(a.w,a.y);m=new Th;m.rv=a;PB(a,g,0,0,i,l,m);b.bd=b.bd+I(a.eV)|0;c.bd=c.bd+I(a.eV)|0;Mb(a,a.y+I(a.eV)|0,0);D0(a);}return 1;}
function ACB(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dp(a.r)){b=B0(a.e.f,a.w);if(b.o.data.length>0){c=Sd(a,b);if(c===null)return 1;d=a.e.f;e=a.w;f=EU(e,a.y);d.cw=d.cw+1|0;g=d.fx;h=R(G9,1);h.data[0]=AFS(e,0,1,c,f.bx,f.bI);BY(g,h);JR(d,e,0,1,c);FW(b,0,I(c));Mb(a,a.y-I(c)|0,0);}}else{f=D5(a.r);c=FB(a.r);i=c.M;j=f.M;i=(i-j|0)+1|0;k=BG(i);h=k.data;l=R(Bv,i);m=l.data;e=a.y;n=a.w;o=0;while(j<=c.M){b=B0(a.e.f,j);if(b.o.data.length>0){b=Sd(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=Mn(k,o);h=Dk(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.M)f.bd=Bb(0,f.bd-I(b)|0);if(j==c.M){c.bd=Bb(0,c.bd-I(b)|0);Mb(a,a.y-I(b)|0,0);}i=i+1|0;}f=EU(n,e);b=new Wp;b.rr=a;PB(a,p,0,1,h,f,b);}D0(a);return 1;}
function Sd(a,b){var c,d,e,f;c=Ew(0,I(a.eV),XK(b));if(!c)b=null;else{b=B(62);if(c<0){b=new BH;X(b);J(b);}if(c!=1){d=b.b2.data.length;if(d&&c){e=BP(W(d,c));d=0;f=0;while(f<c){P0(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Mx(e);}else b=AVO;}}return b;}
function PB(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BG(i);k=AVh(i).data;Hz(j,c);c=0;l=k.length;if(c>l){f=new BH;X(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cw=o.cw+1|0;p=R(G9,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AFS(h[m],n[m],k[m],b[m],f.bx,f.bI);m=m+1|0;}BY(o.fx,p);c=0;while(c<i){b=e.data;JR(o,h[c],n[c],k[c],b[c]);g.mv(F3(h[c]),b[c]);c=c+1|0;}}
function AEg(a){var b,c,d,e,f,g,h,i;if(Dp(a.r))GM(a);Eh(B0(a.e.f,a.w));b=a.e.f;c=a.w;d=a.y;e=b.F;f=e.data;g=f[c];e=Dk(e,f.length+1|0);f=e.data;b.F=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DQ(R(B8,0));b.F.data[c+1|0]=g;}else if(d==g.T){f[c]=g;f[c+1|0]=DQ(R(B8,0));}else{f=(IQ(g,d)).data;e=b.F.data;e[c]=f[0];e[c+1|0]=f[1];}GA(b,c,d,0,B(196));D0(a);return CC(a,a.w+1|0,0,0);}
function ADV(a){if(Dp(a.r))GM(a);else Pr(a.e.f,a.w,a.y);GY(a);D0(a);return 1;}
function YZ(a){var b,c,d;if(Dp(a.r)){GM(a);return 1;}b=a.y;if(!b&&!a.w)return 1;if(b){c=a.w;b=b-1|0;Pr(a.e.f,c,b);}else{c=a.w-1|0;b=Fm(a.e.f,c);d=a.e.f;Lb(d,c);GA(d,c,Fm(d,c),1,B(196));}D0(a);return CC(a,c,b,0);}
function Dt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ee)return 0;if(Dp(a.r))GM(a);c=L$(VG(b,B(197),B(31)),B(196),(-1));d=c.data;b=a.e.f;e=a.w;f=a.y;Yt(b,e,f,c);g=d.length;if(!g)h=AVO;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BP(i+W(g-1|0,I(B(196)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(196))){m=l+1|0;c[l]=L(B(196),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Mx(k);}GA(b,e,f,0,h);e=a.w;m=(e+g|0)-1|0;CC(a,
m,m!=e?I(d[g-1|0]):a.y+I(d[0])|0,0);E9(a);D0(a);return 1;}
function GM(a){var b,c,d;b=D5(a.r);c=a.e.f;d=a.r;TZ(c,d,WB(c,d));CC(a,b.M,b.bd,0);E9(a);D0(a);}
function E9(a){var b;b=a.r;b.c3=0;B3(b.bT,a.w,a.y);B3(a.r.bJ,a.w,a.y);}
function C2(a){return a.eW.mb|0;}
function ACe(a,b){var c,d;c=a.cE.a;if(b<c){d=a.ct.dD;d.a=c-b|0;d.b=!a.bN?De(a)+a.dL|0:De(a)+a.cl|0;c=!a.bN?(a.bf.b+a.cK|0)-a.dL|0:(((a.bf.b+a.co|0)+C2(a)|0)+a.cl|0)-a.dL|0;Bu(a.S,c,a.bf.a+b|0,d,a.dK.b8.er);}}
function ACV(a){var b;b=a.bN?a.bf.b+C2(a)|0:a.bf.b+a.cE.b|0;IE(a.ev,a.bm,a.bf.a,DJ(a),Vv(a),b,C2(a));b=!a.bN?a.bf.b+a.cK|0:((a.bf.b+a.cl|0)+a.co|0)+C2(a)|0;MG(a.es,a.dd,b,De(a),a.hm,a.bf.a+DJ(a)|0,C2(a));}
function ADD(a){var b,c;b=P5(a.ev);c=P5(a.es);if(!(!b&&!c)){Ct(a.S,1);if(b)FZ(a.ev,a.S);if(c)FZ(a.es,a.S);if(b)Gi(a.ev,a.S);if(c)Gi(a.es,a.S);}}
function AAi(a){var b,c,d,e;b=a.e$;c=a.cE;b.a=c.a;b.b=a.cl;d=!a.bN?a.cK-a.co|0:(c.b-Lv(a)|0)-a.cl|0;b=a.S;c=a.bf;Bu(b,c.b+d|0,c.a,a.e$,a.dK.b8.vu);a.e$.b=!a.bN?(a.co-a.cl|0)-a.dL|0:((a.co+C2(a)|0)+a.cl|0)-a.dL|0;e=a.bN?0:(a.cK-a.co|0)+a.cl|0;b=a.S;c=a.bf;Bu(b,c.b+e|0,c.a,a.e$,a.dK.b8.er);}
function J3(b,c){return Z(Bb(0,b),c);}
function HM(a,b){var c,d,e,f,g;b=b.data;$rt_globals.console.info("onFileParsed");a.h0=1;a.hZ=1;c=D$(b[0]);d=FK(b[1]);e=(D$(b[2])).data[0];a.e.f=ACk(c,d);WL(a,AD1(e));Gw(Ck(a),AXn);F7(Ck(a));f=KB(FG(),a.eY);g=new M;O(g);G(H1(G(g,B(198)),f),B(199));$rt_globals.console.info($rt_ustr(N(g)));g=a.iT;if(g!==null)g.l(a);}
function WL(a,b){var c,d;c=Dn(a.e);if(!C6(c,b)){d=new M;O(d);G(G(G(G(d,B(200)),c),B(201)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.jg=b;}}
function Ck(a){return a.ct.iY;}
function KT(a,b){var c,d,e,f,g,h;c=EB(b);d=new M;O(d);G(G(d,B(202)),c);$rt_globals.console.info($rt_ustr(N(d)));NK(Ck(a),EB(b));CC(a,0,0,0);a.eY=FG();a.h0=0;a.hZ=0;a.eo=null;Kr(a.cX,null);e=new II;f=R(Bv,1);f.data[0]=B(31);AEU(e,f,AU8(B(31),B(31),EB(b),null));a.e=e;CC(a,0,0,0);c=EB(b);g=F4(c,46,I(c)-1|0);if(g!=(-1))c=Dj(c,g);h=!Bn(c,B(203))?5120:10240;c=new Tv;c.ut=a;c.uu=h;c.uv=b;d=b.fb;if(d!==null)Lx(c,JL(b,d.size));else{d=b.gP.getFile();e=new T2;e.mB=b;e.mC=c;b=new T5;b.uQ=c;d.then(Bk(e,"f"),Bk(b,"f"));}}
function HD(a,b,c,d,e){if(Hw(a,e))return 1;if(c&&d)return 1;if(c)E$(a,a.bm+((W(b,a.N)*12|0)/10|0)|0);else if(!d){IW(a,a.w+b|0,e);TV(a);}return 1;}
function UG(a,b,c,d){var e,f,g;if(Hw(a,d))return 1;e=Fu(a);if(!c)f=a.y+b|0;else if(b>=0)f=GZ(e,a.y);else{f=a.y;if(!f)f=(-1);else{c=Iz(e,f);if(c>0&&e.dw.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dw.data[c-1|0];}}if(f>e.T){if((a.w+1|0)<Cy(a.e.f))CC(a,a.w+1|0,0,d);}else if(f>=0)Dq(a,f,d);else{b=a.w;if(b>0){g=(B0(a.e.f,b-1|0)).T;CC(a,a.w-1|0,g,d);}}PQ(a);return 1;}
function Hw(a,b){if(Dp(a.r)&&!b){E9(a);GY(a);return 1;}if(!(b&&Dp(a.r)))E9(a);return 0;}
function CC(a,b,c,d){a.y=c;return IW(a,b,d);}
function IW(a,b,c){a.w=Ew(0,b,Cy(a.e.f)-1|0);return Dq(a,a.y,c);}
function Dq(a,b,c){a.y=Ew(0,b,(Fu(a)).T);a.hh=a.ct.bQ===0.0?0:G7(Fu(a),a.y,a.S.cG,a.cB);LR(a);GY(a);if(c)a.r.c3=1;KU(a.r,a.w,a.y);a.r.c3=0;return 1;}
function Mb(a,b,c){var d;d=R1(a.r);Dq(a,b,c);a.r=d;}
function GY(a){TV(a);PQ(a);}
function TV(a){var b,c,d,e,f;b=a.bm;c=b+DJ(a)|0;d=a.w;e=a.N;d=W(d,e);f=d+e|0;if(d<(b+e|0))E$(a,d-e|0);else if(f>(c-e|0))E$(a,(f-DJ(a)|0)+a.N|0);}
function PQ(a){var b,c,d,e,f;b=Df(a.ct.bQ*30.0);c=a.dd;d=c+De(a)|0;e=a.hh;f=e+b|0;if(e<(c+b|0))Io(a,e-b|0);else if(f>(d-b|0))Io(a,(f-De(a)|0)+b|0);}
function T1(a,b,c){var d,e,f,g,h,i,j,k,l;VA(a);d=a.e.f;e=DP(d.el,c);if(e!==null)a.iu=Ko(d,e);if(e!==null)c=e;a:{f=DP(d.eI,c);if(f!==null){c=BU(f);while(true){if(!B6(c))break a;g=BX(c);BY(a.ih,Ko(d,g));}}}h=b.bx;i=b.bI;b=a.eA;c=Dn(a.e);d=G6(a.e);j=(Cq(b.oZ)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.um(c,d)){c=b.xX;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new Ot;b.xD=a;b.xF=d;b.xE=h;b.xC=i;c.sI(d,h,i,b,a.g5);}}
function HE(a,b){var c;CC(a,b.bx,b.bI,0);c=GZ(Fu(a),a.y);B3(a.r.bJ,a.w,c);B3(a.r.bT,a.w,a.y);}
function EV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.bf;e=c-d.b|0;f=Ew(0,((b.a-d.a|0)+a.bm|0)/a.N|0,Cy(a.e.f)-1|0);g=!a.bN?a.cK:(a.cl+a.co|0)+C2(a)|0;h=Bb(0,(e-g|0)+a.dd|0);b=B0(a.e.f,f);d=a.S.cG;i=a.cB;if(!(b.en!==null&&!b.fW))Lo(b,d,i);j=b.en;e=b.o.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.T;else{c=Us(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.o.data.length)k=b.T;else{j=Xf(b,d,i,c);k=0;e=0;while(e<c){k=k+I(b.o.data[e].u)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AXo){d=new M;O(d);T(G(T(G(T(G(d,B(204)),e),B(205)),h),B(206)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return EU(f,k);}
function TS(a,b){var c;c=b.bx;a.w=c;a.y=b.bI;a.hh=G7(B0(a.e.f,c),a.y,a.S.cG,a.cB);LR(a);}
function Fu(a){return B0(a.e.f,a.w);}
function JO(a,b,c){var d,e;d=Df((a.N*4|0)*c/150.0);e=Df(b);if(d)E$(a,a.bm+d|0);if(e)Io(a,a.dd+e|0);return 1;}
function Vn(a,b,c){a.r.c3=0;return 1;}
function Vu(a,b,c){var d,e,f;if(c)return null;d=Fg(a.ev,b.h,a.tP,1);if(d!==null)return d;d=Fg(a.es,b.h,a.uc,0);if(d!==null)return d;I6(a);e=EV(a,b.h);f=HS(a.e.f,e.bx,e.bI);TS(a,e);T1(a,e,f);if(!b.bH){b=a.r;if(!b.c3)B3(b.bT,a.w,a.y);}b=a.r;b.c3=1;KU(b,a.w,a.y);b=new R2;b.tg=a;return b;}
function Q8(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.ck){b=b.h;e=EV(a,b);f=HS(a.e.f,e.bx,e.bI);g=OX(a,f);h=K3(a.eA,Dn(a.e),G6(a.e));if(h!==null){f=a.e;c=e.bx;d=e.bI;e=new Uj;e.xv=a;e.xu=b;e.xt=g;h.sI(f,c,d,e,a.g5);}else{e=DP(a.e.f.el,f);if(e!==null){HE(a,e);c=1;}else{e=DP(a.e.f.eI,f);if(e!==null&&!Ee(e)){if(e.i!=1){VK(a.iH,b,e,a,g);c=1;}else{HE(a,Bt(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EV(a,b.h)).bx;e=B0(a.e.f,c);c=G5(e,a.y);d=GZ(e,a.y);b=Vm(e,c);if((d-1|0)==e.T){B3(a.r.bT,a.w,XK(e));B3(a.r.bJ,
a.w,e.T);}else{if(b!==null){b=b.u;i=0;c:{while(true){j=b.b2.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.y;if(c==i){c=G5(e,c-1|0);d=GZ(e,c);}else{if(d!=i){Qm(a.r,a.w);break b;}c=G5(e,d+1|0);d=GZ(e,c);}}}B3(a.r.bT,a.w,c);a.r.c3=1;CC(a,a.w,d,0);a.r.c3=0;I6(a);}}break a;case 3:break;default:break a;}Qm(a.r,a.w);XU(a.fJ);I6(a);}}return 1;}
function PG(a,b){var c,d,e,f,g,h,i,j,k;c=a.ct.cF;if(Fr(a.ev,b.h,c))return 1;if(Fr(a.es,b.h,c))return 1;d=a.cX;if(F$(b.h,d.f4,d.fh)&&Hl(c)?1:0)return 1;e=b.h;f=!a.bN?a.bf.b+a.cK|0:((a.bf.b+a.co|0)+a.cl|0)+C2(a)|0;a:{g=a.bf.a;h=De(a);i=DJ(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Hl(c);if(b.ck){e=EV(a,b.h);e.bI=G5(B0(a.e.f,e.bx),e.bI);b=a.e.f;if(!N2(b.el,e)&&!N2(b.eI,e)?0:1)return DD(c,B(207));}return DD(c,B(190));}
function ANP(a,b){var c,d,e,f;c=b.ck;if(c&&b.bj==65){c=Cy(a.e.f)-1|0;d=Fm(a.e.f,c);B3(a.r.bT,0,0);B3(a.r.bJ,Cy(a.e.f)-1|0,d);return 1;}if(c&&b.bj==80){HN(a);return 1;}if(!a.ee&&c&&b.bj==90){if(Dp(a.r))E9(a);b=a.e.f;b.cw=b.cw+1|0;e=b.fx;d=e.i;if(!d)e=null;else{f=(Eo(e,d-1|0)).data;e=TR(b,f[0]);c=1;while(c<f.length){TR(b,f[c]);c=c+1|0;}}if(e!==null){CC(a,e.b,e.a,0);D0(a);}return 1;}if(!c&&!b.c0){if(Bn(b.dR,B(208))){Dt(a,B(209));Dq(a,a.y-1|0,0);c=1;}else if(Bn(b.dR,B(210))){Dt(a,B(211));Dq(a,a.y-1|0,0);c=1;}else if
(Bn(b.dR,B(43))){Dt(a,B(212));Dq(a,a.y-1|0,0);c=1;}else if(Bn(b.dR,B(213))){Dt(a,B(214));Dq(a,a.y-1|0,0);c=1;}else if(Bn(b.dR,B(215))){Dt(a,B(216));Dq(a,a.y-1|0,0);c=1;}else if(!Bn(b.dR,B(217)))c=0;else{Dt(a,B(218));Dq(a,a.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c0&&!b.ck)){d=b.bj;if(d>=48&&d<=57){c=d-48|0;e=a.l0.data[c];if(e!==null)e.p();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bj){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(ABp(a,b))return 1;if(a.ee)c=0;else c:{switch(b.bj){case 8:break;case 9:c=!b.bH?AE2(a):ACB(a);break c;case 13:c=AEg(a);break c;case 46:c=ADV(a);break c;default:c=0;break c;}c=YZ(a);}if(c)return 1;if(b.ck&&b.bj==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AKd(b.bj)&&b.bj!=27){if(!b.ck&&!b.c0&&!b.i0)return I(b.dR)>0&&Dt(a,b.dR)?1:0;return 0;}return 0;}
function Xd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bn(B(168),Dn(a.e))){b=Ck(a);c=new VF;c.u9=a;d=R(C,3);e=d.data;e[0]=EH(a.e.f);f=Fx(a);g=GX(a);h=Bb(0,f-100|0);f=Z(Cy(a.e.f)-1|0,g+100|0);i=BG(3);j=i.data;j[0]=Gc(a.e.f,h);k=a.e.f;l=0;f=Z(f+1|0,k.F.data.length);m=0;while(m<f){l=l+Fm(k,m)|0;if(m!=(k.F.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.dc;k=Co();WZ(n,n.cU,k);i=BG(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bt(k,m);h=p+1|0;o[p]=q.bR;l=h+1|0;o[h]=q.bV;p=l+1|0;o[l]=q.fs;m=m+1|
0;}e[2]=i;CP(b,c,B(219),d);}}
function HN(a){var b,c,d,e;b=ABV(Dn(a.e));if(b===null){b=a.iT;if(b!==null)b.l(a);}else{a.eY=FG();c=Ck(a);d=new PT;d.vx=a;e=R(C,1);e.data[0]=EH(a.e.f);CP(c,d,b,e);}}
function S_(a){var b,c,d,e,f,g,h;b=a.e.f.dc;c=Pt(b,b.cU);if(c===null)return;if(Bn(B(190),Dn(a.e)))PC(a.e.f);a:{d=E7([CY(c),C9(c),c.b$.fs]);e=EH(a.e.f);f=BG(1);g=Dn(a.e);h=(-1);switch(Ls(g)){case 3401:if(!Bn(g,B(220)))break a;h=3;break a;case 98723:if(!Bn(g,B(221)))break a;h=2;break a;case 3254818:if(!Bn(g,B(168)))break a;h=1;break a;case 3556653:if(!Bn(g,B(190)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Ck(a);c=new Yk;c.t1=a;CP(b,c,B(222),H(C,[e,f,d]));}
function GH(a,b,c){var d,e,f,g,h,i;if(c&&a.ee)return 0;d=D5(a.r);e=d.M;if(Dp(a.r)){f=a.e.f;g=a.r;h=WB(f,g);if(c)TZ(f,g,h);if(c){CC(a,d.M,d.bd,0);E9(a);D0(a);}}else{h=Fd(EM(a.e.f.F.data[e]),B(196));i=Z(Cy(a.e.f)-1|0,e);B3(a.r.bJ,i,0);if(e>=(Cy(a.e.f)-1|0))B3(a.r.bJ,i,Fm(a.e.f,i));else B3(a.r.bT,i+1|0,0);if(c)GM(a);else CC(a,e,0,0);}b.l(h);return 1;}
function ABp(a,b){var c,d,e,f;a:{switch(b.bj){case 33:c=b.ck?IW(a,IM(a.bm,a.N),b.bH):HD(a,2-WN(DJ(a),a.N)|0,0,b.c0,b.bH);break a;case 34:c=!b.ck?HD(a,WN(DJ(a),a.N)-2|0,0,b.c0,b.bH):IW(a,((a.bm+DJ(a)|0)/a.N|0)-1|0,b.bH);break a;case 35:if(!Hw(a,b.bH)&&!Dq(a,(Fu(a)).T,b.bH)){c=0;break a;}c=1;break a;case 36:if(!Hw(a,b.bH)&&!Dq(a,0,b.bH)){c=0;break a;}c=1;break a;case 37:c=b.ck;if(c&&b.c0){I6(a);d=a.fJ;e=d.di;if(e<=0)d=null;else{f=d.eR.data;c=e-1|0;d.di=c;d=f[c];}if(d===null)c=1;else{CC(a,Jc(d),LW(d),0);a.r=R1(d.mf);c
=1;}break a;}c=UG(a,(-1),c,b.bH);break a;case 38:c=HD(a,(-1),b.ck,b.c0,b.bH);break a;case 39:c=b.ck;if(c&&b.c0){d=a.fJ;c=d.di;if(c==(d.eS-1|0))d=null;else{f=d.eR.data;c=c+1|0;d.di=c;d=f[c];}if(d===null)c=1;else{CC(a,Jc(d),LW(d),0);a.r=R1(d.mf);c=1;}break a;}c=UG(a,1,c,b.bH);break a;case 40:c=HD(a,1,b.ck,b.c0,b.bH);break a;default:}c=0;}if(c&&b.bH)B3(a.r.bJ,a.w,a.y);if(c)T1(a,EU(a.w,a.y),HS(a.e.f,a.w,a.y));return c;}
function I6(a){var b,c,d,e,f,g,h;b=a.fJ;c=b.di;b=c<0?null:b.eR.data[c];if(b!==null&&a.w==Jc(b)&&a.y==LW(b))return;d=a.fJ;b=new Jt;c=a.w;e=a.y;f=a.r;b.lw=EU(c,e);g=R1(f);b.mf=g;g.c3=0;e=d.di;h=d.eS;if(e==(h-1|0))M8(d,b);else{c=e+1|0;while(c<h){XU(d);c=c+1|0;}M8(d,b);}d.di=d.di+1|0;}
function D0(a){a.e.f.pW=JB(Ck(a));}
function Ki(a,b){var c,d,e,f,g,h,i;a.wd=null;VA(a);c=a.e;a.e=b;a.eY=FG();d=ABV(Dn(a.e));if(d!==null){e=Ck(a);f=new M3;f.p_=a;g=R(C,1);g.data[0]=EH(a.e.f);CP(e,f,d,g);}g=(Cq(a.eA.mV)).data;h=g.length;i=0;while(i<h){g[i].mv(c,b);i=i+1|0;}}
function VA(a){a.iu=null;Hy(a.ih);}
function ABV(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Ls(b)){case 3401:if(!Bn(b,B(220)))break a;c=2;break a;case 98723:if(!Bn(b,B(221)))break a;c=1;break a;case 3254818:if(!Bn(b,B(168)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(223);break b;case 2:b=B(224);break b;default:b=null;break b;}b=B(225);}}return b;}
function OX(a,b){var c;c=Ko(a.e.f,b);if(c===null)return B(31);return c.u;}
function DH(a,b){return F$(b,a.bf,a.cE);}
function LA(a,b){var c,d,e,f;a.eo=b;Br(Bx(),B(226));b=a.eo;if(b===null){Br(Bx(),B(227));Kr(a.cX,null);}else{b=b.data;c=DX(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e]===null?0:b[e].f1<<24>>24;e=e+1|0;}Kr(a.cX,c);}}
var HT=F(0);
function Rj(){C.call(this);this.tb=null;}
function AKB(a,b){var c;c=a.tb;WP(c,c.B,c.A);}
function Rh(){C.call(this);this.uL=null;}
function AMK(a,b){var c;c=a.uL;WP(c,c.A,c.B);}
function Ri(){C.call(this);this.oQ=null;}
function AGn(a,b){QL(a.oQ,b);}
function Rf(){C.call(this);this.ss=null;}
function AFY(a,b){QL(a.ss,b);}
function Rg(){C.call(this);this.m1=null;}
function AMn(a,b){return ABT(a.m1,b);}
function HO(){var a=this;C.call(a);a.ka=null;a.o6=null;a.mI=null;}
function AXp(a,b){var c=new HO();SA(c,a,b);return c;}
function AXq(a,b,c){var d=new HO();VW(d,a,b,c);return d;}
function SA(a,b,c){VW(a,b,null,c);}
function VW(a,b,c,d){a.ka=b.bS;a.o6=c;a.mI=d;}
function APQ(a,b){var c,d;if(b.ck&&b.bj==79){c=a.o6;if(c!==null&&b.bH)Wy(a.ka,c);else L3(a.ka,a.mI);d=1;}else d=0;return d;}
function Rd(){C.call(this);this.qD=null;}
function AOl(a,b){var c,d;c=a.qD;d=DZ(c.s,c.B)?c.B:!DZ(c.s,c.A)?null:c.A;if(d!==null){KT(d,b);c.dl=null;}}
function Re(){C.call(this);this.tM=null;}
function ALb(a,b){b=b;return AC3(a.tM,b);}
var ACE=F();
var ZF=F(0);
function AAg(b,c,d){return HI(b,c,d,255,new B4);}
function HI(b,c,d,e,f){CF(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Xq(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bl=g+i;e.bF=h+i;e.bk=j+i;return e;}
function JG(b,c,d,e,f){f=Xq(b,c,d,f);f.bG=e;return f;}
function GI(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Yx(){var a=this;C.call(a);a.cC=null;a.iY=null;a.cF=null;a.cb=null;a.bQ=0.0;a.eg=null;a.d3=null;a.dD=null;a.os=null;a.yM=null;a.yL=null;}
function KZ(a){var b;b=a.eg;if(b!==null)b.sW();}
function J2(a){var b;b=a.eg;if(b!==null)b.vB();}
function Xo(a,b){var c;c=a.iY.dP!==(Ea()).activeElement?0:1;if(c)J2(a);a.eg=b;if(c)KZ(a);}
function FT(a,b){J2(a);a.eg=b;KZ(a);}
function DZ(a,b){return b!==a.eg?0:1;}
function IT(a){return a.cC.cG;}
function GU(a,b){return Hq(a.cC,b.iJ,B9(b.h1,a.bQ));}
function CD(a,b){return B9(b,a.bQ);}
var SL=F();
function AST(a,b){var c,d,e;c=b.ck;d=c&&!b.bH&&!b.c0&&!b.i0?1:0;a:{if(d){d=b.bj;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bH&&!c&&!b.c0&&!b.i0?1:0;d=d&&b.bj==46?1:0;}b:{if(!d){e=b.bj;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.j$=1;}return 0;}
function SM(){C.call(this);this.su=null;}
function AFK(a,b){var c;c=a.su.eg;return c!==null&&c.g6(b)?1:0;}
function B4(){var a=this;C.call(a);a.bl=0.0;a.bF=0.0;a.bk=0.0;a.bG=0.0;}
function ARE(a){var b=new B4();ANt(b,a);return b;}
function CF(a,b,c,d,e){a.bl=b;a.bF=c;a.bk=d;a.bG=e;}
function ANt(a,b){a.bl=b.bl;a.bF=b.bF;a.bk=b.bk;a.bG=b.bG;}
function BB(a,b){a.bl=b.bl;a.bF=b.bF;a.bk=b.bk;a.bG=b.bG;return a;}
function ASt(a,b){if(a===b)return 1;return b!==null&&Cp(a)===Cp(b)&&KJ(a,b)?1:0;}
function KJ(a,b){return b.bl===a.bl&&b.bF===a.bF&&b.bk===a.bk&&b.bG===a.bG?1:0;}
var Eq=F(0);
function ABM(){C.call(this);this.cR=null;}
function AET(){var a=new ABM();ALX(a);return a;}
function ALX(a){a.cR=Co();}
function I4(a,b){RP(a.cR,0,b);}
function Kg(a,b){Wv(a.cR,b);}
function Jf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cR.i-1|0;while(c>=0){d=Bt(a.cR,c);d.Q.e6(b);e=d.U;f=d.ep.il;if(!LZ(e)){if(!Uo(e)&&!(!e.gR&&e.de!==null)){e.gR=0;Rm(e);g=e.d5;h=(g.dB+g.eu+5.0)/10.0;i=CD(e.g3,e.i_);g=b.cG;j=e.d5;k=e.g8;l=h*2.0;CA(g,j);m=i+KY(g,k,l)|0;e.hQ=m;m=Ew(0,m,e.q.b);if(m){j=CK(b,m,e.q.a);CA(j,e.d5);g=e.g8;l=i;h=l+h;k=e.d5;n=k.dB;Ch(j,g,h,l+n-(n+k.eu)/16.0);g=e.de;if(g===null){g=CV(b);e.de=g;}CN(g,j);FR(j);CF(e.lS,0.0,0.0,Ce(e.de),C8(e.de));}}g=f.rn;j=e.de;if(j===null)Pw(e,b,0,e.q.b,
g);else{i=Ce(j);f=f.qs;j=e.G;m=j.b;o=j.a;j=e.de;EJ(b,m,o,j.fD,e.lS,j,f,g,0.0);m=e.q.b;if(i<m)Pw(e,b,i,m-i|0,g);}}Ct(b,1);i=CD(d.bs,2.0);m=LZ(d.U);f=d.bs;e=f.dD;f=f.os;p=m?0:d.U.q.a;g=d.Q.q;V(f,g.b,g.a+p|0);ADZ(b,f,!m?d.U.G:d.Q.G,d.ep.il.km, -i|0,e);f=d.Q;ADc(b,f.q,f.G,i,p,Rz(d.ep.jn,d.bs.bQ),d.ep.jn.ms,e);c=c+(-1)|0;}}
function ZR(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cR;if(c>=d.i)break;a:{e=Bt(d,c);f=b.h;if(DI(e.U,f))g=DD(e.bs.cF,null);else{g=CD(e.bs,7.0);h=CD(e.bs,25.0);if(V$(e,f.b,g)){i=Vj(e,f.b,h);if(PJ(e,f.a,g)){g=DD(e.bs.cF,JQ(i,B(228)));break a;}if(Qt(e,f.a,g)){g=DD(e.bs.cF,JQ( -i|0,B(228)));break a;}}if(M9(e,f.a,g)){h=Se(e,f.a,h);if(Or(e,f.b,g)){g=DD(e.bs.cF,JQ(h,B(229)));break a;}if(Ud(e,f.b,g)){g=DD(e.bs.cF,JQ( -h|0,B(229)));break a;}}g=0;}}b:{c:{if(!g){if(!DI(e.Q,b.h))break c;if(!e.Q.bK(b)&&!DD(e.bs.cF,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABL(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cR;if(e>=f.i)break;a:{b:{g=Bt(f,e);if(!DI(g.U,b.h)){if(!DI(g.Q,b.h))break b;if(!g.Q.cs(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function YM(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cR;if(d>=e.i)return null;a:{f=Bt(e,d);if(!c){b:{e=b.h;if(!LZ(f.U)&&DI(f.U,e)){g=f.Q.G;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.U.G;i=e.b-i|0;k=e.a-k|0;e=new Bf;g=new QQ;g.o$=f;g.pb=i;g.pc=k;g.pd=e;g.pe=h;g.o_=j;}else{h=CD(f.bs,7.0);i=CD(f.bs,25.0);if(V$(f,e.b,h)){j=Vj(f,e.b,i);if(PJ(f,e.a,h)){g=Ie(f,e,j,(-1));break b;}if(Qt(f,e.a,h)){g=Ie(f,e,j,1);break b;}}if(M9(f,e.a,h)){i=Se(f,e.a,i);if(Or(f,e.b,h)){g=Ie(f,e,(-1),i);break b;}if(Ud(f,e.b,h)){g=
Ie(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DI(f.U,b.h)?AXr:f.Q.b_(b,c);e=f.Q;if(e===null)g=null;else if(g===null)g=!DI(e,b.h)?null:AXr;}if(g!==null)break;d=d+1|0;}return g;}
function AES(a,b,c){var d,e,f,g;d=0;while(true){e=a.cR;if(d>=e.i)break;a:{b:{f=Bt(e,d);if(!DI(f.U,b.h)){if(!DI(f.Q,b.h))break b;if(!f.Q.cO(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function Lk(a,b,c,d){var e,f;e=0;while(true){f=a.cR;if(e>=f.i)break;if((Bt(f,e)).Q.cZ(b,c,d))return 1;e=e+1|0;}return 0;}
function ARH(a,b,c){var d,e,f;d=0;while(true){e=a.cR;if(d>=e.i)break;f=Bt(e,d);e=f.Q;e.jf(e.G,e.q,c);e=f.U;if(e.gK!==null){e.d5=null;e.hQ=0;e.gR=1;}Ka(f);d=d+1|0;}}
function Oz(a,b){var c,d,e;c=0;d=0;while(true){e=a.cR;if(d>=e.i)break;Bt(e,d);c=0|c;d=d+1|0;}return c;}
function Qc(a,b,c){var d;d=0;while(true){b=a.cR;if(d>=b.i)break;Bt(b,d);d=d+1|0;}}
function Zd(){var a=this;C.call(a);a.cH=null;a.ch=null;a.jA=null;a.jr=null;a.ho=null;a.iR=null;}
function M6(a){var b=new Zd();AHi(b,a);return b;}
function AHi(a,b){a.ch=Co();a.iR=AXs;a.cH=b;Y(b.d3,a);}
function Ic(a,b,c){a.jA=c;a.ho=b;b=BU(a.ch);while(B6(b)){If(BX(b),a.ho);}}
function Gg(a,b,c,d){var e,f;e=a.cH;f=e.cb;if(W(f.b,f.a)&&e.bQ!==0.0){if(a.jA!==null&&!DK(a)){a.iR=d;a.jr=GU(a.cH,a.jA);e=T6(a,b,c,null);b=new Tx;b.tB=a;e.jC=b;FT(a.cH,a);return;}b=new BH;X(b);J(b);}c=new D1;Bo(c,B(230));J(c);}
function DM(a){var b;if(DK(a)){b=a.cH;if(b.eg===a)b.eg=null;TW(a,null);a.iR.p();a.iR=AXs;}}
function P3(a,b,c,d,e){var f,g,h;f=Zz();Tc(f);K5(f,c.dr());If(f,a.ho);H9(f,a.jr);G4(f,a.cH);if(d===null)g=b.b;else{g=b.b;g=a.cH.cb.b<((g+(Ec(d)).b|0)+(Ec(f)).b|0)?g-(Ec(f)).b|0:(g+(Ec(d)).b|0)-d.eX|0;}h=b.a;b=a.cH.cb;J8(f,Bb(0,Z(g,b.b-(Ec(f)).b|0)),Bb(0,Z(h,b.a-(Ec(f)).a|0)));b=new NF;b.uo=a;b.uq=f;b.up=e;f.jY=b;BY(a.ch,f);return f;}
function T6(a,b,c,d){return P3(a,b,c,d,null);}
function AHu(a,b,c){var d,e;a.jr=GU(a.cH,a.jA);d=BU(a.ch);while(B6(d)){e=BX(d);H9(e,a.jr);G4(e,a.cH);}}
function Ix(a){var b,c;if(Ee(a.ch))return;Ct(a.cH.cC,1);b=0;while(true){c=a.ch;if(b>=c.i)break;JM(Bt(c,b),a.cH);b=b+1|0;}}
function KE(a,b){var c,d;c=0;d=a.ch.i-1|0;a:{while(d>=0){c=Ks(Bt(a.ch,d),b.h,a.cH.cF);if(c)break a;d=d+(-1)|0;}}return c;}
function Jw(a,b,c,d){var e,f;e=0;f=a.ch.i-1|0;a:{while(f>=0){e=Kj(Bt(a.ch,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jr(a,b,c){var d,e,f;d=null;e=a.ch.i-1|0;a:{while(e>=0){f=Bt(a.ch,e);d=b.h;c=Et(f.ci,d);if(!c&&!Me(f.ci)){d=f.jC;if(d!==null)d.p();}d=!c?null:AXr;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AFZ(a,b){var c;if(!DK(a))return 0;a:{switch(b.bj){case 27:DM(a);c=1;break a;default:}c=0;}return c;}
function AER(b,c){var d,e,f;d=b.dt;e=c.cT;f=c.eX;b=new Bf;c=d.z;PH(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function TW(a,b){var c,d;c=a.ch.i-1|0;a:{while(true){if(c<0)break a;d=Bt(a.ch,c);if(b===d)break;Eo(a.ch,c);TY(d);c=c+(-1)|0;}}}
function DK(a){return a.ch.i<=0?0:1;}
function ABx(){var a=this;C.call(a);a.dZ=null;a.ls=0.0;a.g1=0.0;a.gE=0;}
function ANx(){var a=new ABx();ASc(a);return a;}
function ASc(a){var b;b=S9(0,0,2,20);a.dZ=b;a.ls=0.5;a.g1=0.0;HI(187,187,187,255,b.bq);}
function S8(a){return a.dZ.t.a;}
function Qz(a){return a.dZ.t.b;}
function Tq(a,b){var c,d;a:{c=a.gE;if(b>a.g1)while(true){d=a.g1+a.ls;a.g1=d;a.gE=a.gE?0:1;if(b>d)continue;else break a;}}return a.gE==c?0:1;}
function P7(a,b,c){V(a.dZ.z,b,c);}
function SQ(a,b){a.g1=b+a.ls*1.25;a.gE=1;}
function Vz(a,b,c){if(a.gE)UY(a.dZ,b,c.b,c.a);}
function Lf(){var a=this;C.call(a);a.mo=null;a.we=null;a.wq=0.0;a.ph=0;a.wx=0;a.w1=0;a.rj=0;a.xW=0;a.dB=0.0;a.eu=0.0;a.wn=0.0;a.mb=0.0;a.wu=0;a.nj=null;}
function E3(a){return Df(a.dB+a.eu);}
function Kd(a,b){return Df((a.dB+a.eu)*b);}
function II(){var a=this;C.call(a);a.f9=null;a.f=null;a.jg=null;a.qu=null;}
function ATA(a,b){var c=new II();AEU(c,a,b);return c;}
function AXt(a,b,c){var d=new II();QP(d,a,b,c);return d;}
function AEU(a,b,c){QP(a,b,null,c);}
function QP(a,b,c,d){var e,f,g,h,i,j,k;a.f9=d;a.jg=c;if(d===null)c=null;else{c=d.fl;c=c===null?null:!Ef(c,B(231))&&!Ef(c,B(232))&&!Ef(c,B(233))&&!Ef(c,B(234))&&!Ef(c,B(235))&&!Ef(c,B(236))?(Ef(c,B(203))?B(168):!Ef(c,B(237))?null:B(220)):B(221);}e=b.data;a.qu=c;c=new HU;f=e.length;if(!f)g=M7(B(31));else{g=R(CB,f);h=g.data;i=0;while(i<f){j=new CB;k=R(B8,1);k.data[0]=Sp(e[i]);Ig(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.el=GD();c.eI=GD();c.fx=Co();if(!b.length){c=new BH;X(c);J(c);}c.F=g;c.fP=0;c.cw=0;c.dc=UC(c);a.f=c;}
function Dn(a){var b;b=a.jg;if(b===null)b=a.qu;return b;}
function G6(a){var b;b=a.f9;return b===null?null:b.hY;}
function Wq(){var a=this;C.call(a);a.nw=null;a.s9=null;a.tx=null;a.oZ=null;a.mV=null;a.rW=null;}
function K3(a,b,c){return X3(a,Cq(a.nw),b,c);}
function V9(a,b,c){return X3(a,Cq(a.s9),b,c);}
function X3(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.um(c,d))return g.wI;f=f+1|0;}return null;}
function NE(a,b,c){var d,e,f,g;d=(Cq(a.tx)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.um(b,c))return g.wQ;f=f+1|0;}return null;}
function YR(){var a=this;C.call(a);a.bT=null;a.bJ=null;a.c3=0;}
function AN4(){var a=new YR();AGb(a);return a;}
function R1(a){var b=new YR();AFv(b,a);return b;}
function AGb(a){a.bT=new Go;a.bJ=new Go;}
function AFv(a,b){var c;c=new Go;a.bT=c;a.bJ=new Go;XN(c,b.bT);XN(a.bJ,b.bJ);a.c3=b.c3;}
function KU(a,b,c){B3(a.bJ,b,c);if(!a.c3)B3(a.bT,b,c);}
function Qm(a,b){B3(a.bT,b,0);B3(a.bJ,b+1|0,0);}
function D5(a){if(Yg(a.bT,a.bJ)>0)return a.bJ;return a.bT;}
function FB(a){if(Yg(a.bT,a.bJ)<0)return a.bJ;return a.bT;}
function ADr(a,b){var c,d,e,f;c=D5(a);d=FB(a);e=c.M;if(e<=b){f=BF(b,d.M);if(f<=0)return B2(b<=e?c.bd:0,f>=0?d.bd:(-1));}return null;}
function Dp(a){var b,c;b=a.bT;c=a.bJ;return (b===c?1:c!==null&&Cp(b)===Cp(c)?(b.M==c.M&&b.bd==c.bd?1:0):0)?0:1;}
function AAm(a,b){var c,d;if(!Dp(a))return 0;c=D5(a);d=FB(a);return c.M<=b&&b<d.M?1:0;}
function NC(){var a=this;C.call(a);a.eR=null;a.eS=0;a.di=0;}
function M8(a,b){var c,d,e;c=a.eS;d=a.eR;if(c==d.data.length)a.eR=Dk(d,c+16|0);d=a.eR.data;e=a.eS;a.eS=e+1|0;d[e]=b;}
function XU(a){var b,c,d;b=a.di;c=a.eS-1|0;if(b==c)a.di=b-1|0;d=a.eR.data;a.eS=c;d[c]=null;}
function EW(){var a=this;C.call(a);a.bY=0;a.bZ=null;a.eD=null;a.dQ=0;a.c_=0;}
var AXu=0;var AXv=0;var AXm=0;function AB_(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bZ;j=i===b&&!i.ia?0:1;if(j){a.bZ=b;Lo(b,e.cG,d);}i=a.bZ;k=i===null?0:E2(i)<g?IM(E2(a.bZ),1024):IM(g,1024)+1|0;l=k<=a.dQ?0:1;if(l)a.dQ=k;if(!(!j&&!l)){if(AXu){m=b.fB;$rt_globals.console.info("fMeasure"+m.data);AXu=0;}if(!AXm){i=c.bp;b="alphabetic";i.textBaseline=b;}else{b=c.bp;i="top";b.textBaseline=i;}a.c_=h/1024|0;while(true){i=a.eD;if(i.i>=a.dQ)break;BY(i,CV(e));}k=0;while(k<a.dQ){Ib(a,c,f,d,a.c_+k|0);k=k+1|0;}a.bZ.ia=0;}if(!Ee(a.eD)
&&h<=E2(a.bZ)){k=h/1024|0;g=a.c_;if(k!=g){if(MS(k-g|0)>=a.dQ){g=0;while(g<a.dQ){Ib(a,c,f,d,k+g|0);g=g+1|0;}a.c_=k;}else{while(true){h=a.c_;if(h>=k)break;Ib(a,c,f,d,h+a.dQ|0);a.c_=a.c_+1|0;}while(true){h=a.c_;if(h<=k)break;Ib(a,c,f,d,h-1|0);a.c_=a.c_-1|0;}}}}}
function Lm(b,c){return (c-E3(b)|0)/2|0;}
function TU(b,c){return Lm(b,c)+b.rj|0;}
function Ib(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Ex(b);f=a.bZ.fB;g=e*1024|0;h=Pe(a,g);if(h>=a.bZ.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bY;a:{while(true){l=a.bZ;if(h>=l.o.data.length)break a;l=NJ(l,h);m=!AXm?TU(d.data[l.cd],c):Lm(d.data[l.cd],c);n=d.data;o=f.data;CA(b,n[l.cd]);Ch(b,l.u,k,m);k=o[h]-j+a.bY;if(k>1024.0)break;h=h+1|0;}}CN(Bt(a.eD,e%a.dQ|0),b);}
function ADt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;if(Ee(a.eD))return;if(!a.dQ)return;if(j>E2(a.bZ))return;r=a.bZ;s=r.en;t=r.o;u=j/1024|0;v=Pe(a,j);w= -a.bY|0;x=i;a:{while(true){y=t.data;z=y.length;if(v>=z)break a;ba=v!=(z-1|0)?0:1;if(w>=h)break;bb=s.data;r=Bt(a.eD,u%a.dQ|0);bc=y[v];bd=bb[v]+a.bY|0;be=u*1024|0;bf=(bd-be|0)>1024?0:1;bg=u+1|0;bh=bg*1024|0;bi=Z(bh,bd)-j|0;if(bf&&ba)bi=bi+a.bY|0;if((w+bi|0)>h)bi=h-w|0;bj=l!==null?0:1;b:
{if(!bj){bk=!ba?a.bY:2*a.bY|0;z=l.b;bl=l.a;if(!(z<bl&&j<=bl&&(j+bi|0)>(z+bk|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bj){bm=!ba?a.bY:2*a.bY|0;if(j>=l.b&&(j+bi|0)<=(l.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(o&&!p)bo=k.b8.jd;if(bc===m)bo=k.b8.qA;bp=BU(n);d:{e:{while(B6(bp)){f:{bq=BX(bp);if(bq!==null){if(!bq.cz(bc))break f;else break e;}if(bc===null)break e;}}bj=0;break d;}bj=1;}if(bj)bo=k.b8.oJ;if(q!==null){y=q.lp;if(y===null)z=0;else{y=y.data;z=v>=y.length?0:y[v];}bo=Vx(k.du,k,z,q.f1);}if(!bn&&!bl){l.a=Z(l.a,
E2(a.bZ));bk=j>=l.b?bi:(Z(bd,bh)-l.b|0)-(!ba?a.bY:0)|0;bh=(j+bi|0)<=(l.a+(!ba?a.bY:2*a.bY|0)|0)?0:(Z(bd,bh)-l.a|0)-(!ba?a.bY:0)|0;bm=j-be|0;bl=w+c|0;br=bm;bj=bi-bk|0;CF(e,br,0.0,bj,x);V(f,bj,i);IB(a,d,bl,b,f,e,bc,r,g,k,0,bo);bj=bm+bi|0;CF(e,bj-bh|0,0.0,bh,x);V(f,bh,i);z=bl+bi|0;IB(a,d,z-bh|0,b,f,e,bc,r,g,k,0,bo);bs=bj-bk|0;bj=bk-bh|0;CF(e,bs,0.0,bj,x);V(f,bj,i);IB(a,d,z-bk|0,b,f,e,bc,r,g,k,1,bo);}else{CF(e,j-be|0,0.0,bi,x);V(f,bi,i);IB(a,d,w+c|0,b,f,e,bc,r,g,k,bn,bo);}j=j+bi|0;w=w+bi|0;if(!bf){v=v+(-1)|0;u=
bg;}v=v+1|0;}}}
function IB(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bG!==0.0&&f.bk!==0.0){m=j.u_.data[g.cS];if(k)n=j.b8.k$;else{g=m.nM;if(g===null)g=j.b8.er;if(l===null)l=BM(g);n=l;}g=m.nQ;if(AXv)i=0.0;EJ(b,c,d,e,f,h,g,n,i);return;}return;}}
function Pe(a,b){var c,d,e,f,g,h,i;c=a.bZ;d=c.fB;e=0;f=c.o.data.length;g=b;b=BF(e,f);if(b>0){c=new BH;X(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BF(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function QI(a){a.bZ=null;Kc(a.eD,new QJ);Hy(a.eD);}
function ACH(a,b,c,d,e,f,g,h,i){var j,k;j=E2(a.bZ);if(j)j=j+a.bY|0;if(!j)j=j-a.bY|0;k=Bb( -a.bY|0,j-g|0);if(k>=h)return;V(f,h-k|0,e);Bu(b,c+k|0,d,f,i);}
function AAU(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EW,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B0(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bZ===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EW;f.bY=3;f.eD=Co();f.c_=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)QI(o);h=h+1|0;}return g;}
function ADz(){AXm=0;}
function ABY(){var a=this;C.call(a);a.e8=null;a.cW=null;a.d4=null;a.eE=null;a.hX=null;a.hW=null;}
function Hu(){var a=new ABY();AIL(a);return a;}
function AIL(a){a.e8=new Bf;a.cW=new Bf;a.d4=new Bf;a.eE=new Bf;a.hX=new B4;a.hW=new B4;}
function P5(a){var b;b=a.cW;return !W(b.b,b.a)?0:1;}
function I0(a,b){return F$(b,a.d4,a.eE);}
function Fg(a,b,c,d){var e,f,g,h,i;e=I0(a,b);f=F$(b,a.e8,a.cW);if(!e&&!f)return null;if(!f){if(!d)c.l(XZ(a,b.b-a.d4.b|0));else c.l(OQ(a,b.a-a.d4.a|0));}g=!d?a.e8.b+(a.cW.b/2|0)|0:a.e8.a+(a.cW.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new N3;b.ty=a;b.tA=c;b.tz=i;}else{b=new N1;b.qp=a;b.qo=c;b.qq=i;}return b;}
function Gk(a,b,c){if(b!==null&&c!==null){BB(a.hX,c);BB(a.hW,b);return;}}
function AEC(b,c){var d;d=new Up;d.rq=b;d.mK=c;return d;}
function OQ(a,b){var c,d,e;c=a.eE.a;d=a.cW.a;e=c-d|0;return AEC(Z(Bb(0,b-(d/2|0)|0),e),e);}
function XZ(a,b){var c,d,e;c=a.eE.b;d=a.cW.b;e=c-d|0;return AEC(Z(Bb(0,b-(d/2|0)|0),e),e);}
function IE(a,b,c,d,e,f,g){N8(a,b,c,d,e,f,g,1);}
function MG(a,b,c,d,e,f,g){N8(a,b,c,d,e,f,g,0);}
function N8(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){V(a.eE,0,0);V(a.cW,0,0);}else{i=Z(g*3|0,d);j=Bb(P1(d,d,e),i);e=e-d|0;i=d-j|0;i=i?P1(b,i,e):0;if(!h){k=a.e8;k.b=i+c|0;k.a=f-g|0;l=a.cW;l.b=j;l.a=g;l=a.d4;l.b=c;l.a=k.a;k=a.eE;k.b=d;k.a=g;}else{k=a.e8;k.b=f-g|0;k.a=i+c|0;l=a.cW;l.b=g;l.a=j;l=a.d4;l.b=k.b;l.a=c;k=a.eE;k.b=g;k.a=d;}}}
function Qg(a,b){FZ(a,b);Gi(a,b);}
function FZ(a,b){var c;c=a.d4;Bu(b,c.b,c.a,a.eE,a.hX);}
function Gi(a,b){var c,d;c=a.cW;c.b=c.b-2|0;c.a=c.a-2|0;d=a.e8;Bu(b,d.b+1|0,d.a+1|0,c,a.hW);b=a.cW;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fr(a,b,c){return I0(a,b)&&Hl(c)?1:0;}
function ABZ(){var a=this;C.call(a);a.xJ=20;a.f4=null;a.fh=null;a.iE=null;a.kR=0;a.iD=0;a.jo=0.0;a.cA=null;a.lQ=null;a.eN=null;a.ft=null;a.fH=0;}
function ACh(){var a=new ABZ();ARC(a);return a;}
function ARC(a){a.xJ=20;a.f4=new Bf;a.fh=new Bf;a.cA=Co();a.lQ=DX(0);}
function Ye(a,b){var c,d,e,f,g;c=a.fH;if(b==c)return;d=a.cA.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bb(0,(c-1|0)/20|0);f=Bb(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){S1(a,b);a.fH=b;}else{if(a.fH>=b)while(true){if(g<f)break a;a.fH=Tw(Bt(a.cA,g%d|0),a.eN,a.ft,a.fH,b,e,a.jo);g=g+(-1)|0;}while(f<=g){a.fH=Tw(Bt(a.cA,f%d|0),a.eN,a.ft,a.fH,b,e,a.jo);f=f+1|0;}}}}
function Kr(a,b){if(b===null)b=DX(0);a.lQ=b;}
function Yv(a,b,c,d,e){var f;f=BU(a.cA);while(B6(f)){ZP(BX(f),a.f4,c,b,W(a.cA.i,a.iD),d,a.lQ,e);}}
function J_(a,b,c,d){var e,f,g,h,i,j;e=a.cA.i;while(true){f=a.cA.i;g=W(f,a.iD);if(g>(d+a.kR|0))break;h=B2(0,g);i=new Nu;g=a.fh.b;f=a.kR;j=a.iE;i.gu=new Bf;i.fU=new B4;i.je=h;i.dT=20;i.bo=f;i.eJ=B2(g,20*f|0);i.fX=TU(j,f);if(i.b5===null)i.b5=CV(b);BY(a.cA,i);}if(f==e)return;S1(a,c);}
function S1(a,b){var c,d,e,f,g,h,i,j;c=a.cA;d=c.i;e=W((b/(d*20|0)|0)+1|0,d)*20|0;c=BU(c);while(B6(c)){f=BX(c);g=a.eN;h=a.jo;Ex(g);i=0;while(true){j=f.dT;if(i>=j)break;j=e-W(d,j)|0;if(j<b)j=e;e=j+1|0;Ga(f,g,C5(e),W(f.bo,i)+f.fX|0,h);i=i+1|0;}CN(f.b5,g);}}
function T$(a,b,c,d){var e;a.iE=b;a.kR=c;e=c*20|0;a.iD=e;b=CH(a.eN,CK(d,a.fh.b,e));a.eN=b;CA(b,a.iE);Sz(a.eN,2);b=CH(a.ft,CK(d,a.fh.b,c));a.ft=b;CA(b,a.iE);Sz(a.ft,2);}
function Oa(a){Kc(a.cA,new Qu);Hy(a.cA);a.eN=CH(a.eN,null);a.ft=CH(a.ft,null);}
function VU(a,b,c,d,e){Cu(a.f4,b);V(a.fh,c,d);a.jo=e;}
var WI=F(0);
var Hx=F(0);
var EQ=F();
function Ee(a){return a.i?0:1;}
function HP(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=U_(Ih(Cp(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BU(a);while(B6(f)){g=b.data;h=e+1|0;g[e]=BX(f);e=h;}return b;}
var Jk=F(0);
function F9(){EQ.call(this);this.cx=0;}
function BU(a){var b;b=new NL;b.gS=a;b.mn=a.cx;b.iF=a.nR();b.gh=(-1);return b;}
function QC(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(C6(b,Bt(a,d)))break;d=d+1|0;}return d;}
function AM1(a,b){var c,d;if(!IO(b,Jk))return 0;c=b;if(a.i!=c.i)return 0;d=0;while(d<c.i){if(!C6(Bt(a,d),Bt(c,d)))return 0;d=d+1|0;}return 1;}
var Iw=F(0);
function N7(){var a=this;F9.call(a);a.cn=null;a.i=0;}
function Co(){var a=new N7();AJq(a);return a;}
function AXw(a){var b=new N7();M0(b,a);return b;}
function AJq(a){M0(a,10);}
function M0(a,b){a.cn=R(C,b);}
function Ju(a,b){var c,d;c=a.cn.data.length;if(c<b){d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.cn=Dk(a.cn,d);}}
function Bt(a,b){Ji(a,b);return a.cn.data[b];}
function ANW(a){return a.i;}
function BY(a,b){var c,d;Ju(a,a.i+1|0);c=a.cn.data;d=a.i;a.i=d+1|0;c[d]=b;a.cx=a.cx+1|0;return 1;}
function RP(a,b,c){var d,e,f;Px(a,b);Ju(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.cn.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cn.data[b]=c;a.i=d+1|0;a.cx=a.cx+1|0;}
function Eo(a,b){var c,d,e,f;Ji(a,b);c=a.cn.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cx=a.cx+1|0;return d;}
function Wv(a,b){var c;c=QC(a,b);if(c<0)return 0;Eo(a,c);return 1;}
function Hy(a){ZT(a.cn,0,a.i,null);a.i=0;a.cx=a.cx+1|0;}
function Ji(a,b){var c;if(b>=0&&b<a.i)return;c=new By;X(c);J(c);}
function Px(a,b){var c;if(b>=0&&b<=a.i)return;c=new By;X(c);J(c);}
function Kc(a,b){var c;c=0;while(c<a.i){b.l(a.cn.data[c]);c=c+1|0;}}
function Oo(a,b){var c,d,e,f,g,h,i;c=a.cn;d=a.i;if(b===null)b=AVK;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}AAE(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cx=a.cx+1|0;}
function Vg(){C.call(this);this.yy=null;}
function Vf(){C.call(this);this.rD=null;}
function APP(a,b){var c;c=a.rD;E$(c,FO(b,IH(c)));}
function Vb(){C.call(this);this.n4=null;}
function ANE(a,b){var c;c=a.n4;Io(c,FO(b,QX(c)));}
function Va(){C.call(this);this.tO=null;}
function APL(a){var b,c;b=a.tO;c=b.id?0:1;b.id=c;b=new M;O(b);F8(G(b,B(238)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Vd(){C.call(this);this.r3=null;}
function AKz(a){var b,c;b=a.r3;c=b.h4?0:1;b.h4=c;b=new M;O(b);F8(G(b,B(239)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Vc(){C.call(this);this.om=null;}
function AMV(a){var b,c;b=a.om;c=b.jD^1;b.jD=c;b=new M;O(b);F8(G(b,B(240)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function VD(){C.call(this);this.ua=null;}
function APa(a){var b,c,d,e,f;b=a.ua;c=(b.dL+3|0)%6|0;b.dL=c;d=b.gD.data;e=d.length;f=0;while(f<e){b=d[f];b.bY=c;b=b.bZ;if(b!==null)b.ia=1;f=f+1|0;}}
function VC(){C.call(this);this.q1=null;}
function AKb(a){var b;b=a.q1;b.bN=b.bN?0:1;Oa(b.cX);b.cX=ACh();Sk(b,b.bf,b.cE,b.ct.bQ);}
function VE(){C.call(this);this.nL=null;}
function AFF(a){var b;b=a.nL;b.iX=b.iX?0:1;}
var Ft=F(Cj);
var AXk=null;var AXx=null;var AXl=null;var AXy=null;function AFP(){AFP=Bm(Ft);AM4();}
function ACq(a,b){var c=new Ft();ACc(c,a,b);return c;}
function ACc(a,b,c){AFP();C_(a,b,c);}
function AM4(){var b;AXk=ACq(B(241),0);AXx=ACq(B(242),1);b=ACq(B(243),2);AXl=b;AXy=H(Ft,[AXk,AXx,b]);}
function Kv(){C.call(this);this.xH=null;}
var AWH=null;var AXz=null;function AKX(){AKX=Bm(Kv);ASB();}
function AII(a){var b=new Kv();YN(b,a);return b;}
function YN(a,b){AKX();a.xH=b;}
function ASB(){AWH=AII(B(244));AXz=AII(B(245));}
var U2=F(0);
function Hl(a){return DD(a,null);}
function U7(b){var c;c=new N4;c.n3=b;return c;}
function MP(){C.call(this);this.nK=null;}
function AL3(a){KZ(a.nK);}
function MQ(){C.call(this);this.q4=null;}
function AKs(a){J2(a.q4);}
var Yo=F(0);
var AXs=null;function ADW(){AXs=new NU;}
function HU(){var a=this;C.call(a);a.F=null;a.dc=null;a.el=null;a.eI=null;a.fx=null;a.cw=0;a.fP=0;a.pW=0.0;}
function UC(a){var b,c,d,e,f,g,h,i;b=TX(a);c=new I1;d=new N7;e=Oh(0,b,0);f=new Yb;f.tL=e;M0(d,1);e=BU(f);g=0;while(true){h=d.cn.data;i=h.length;if(g>=i)break;h[g]=BX(e);g=g+1|0;}d.i=i;UI(c,d);return c;}
function B0(a,b){return a.F.data[b];}
function Cy(a){return a.F.data.length;}
function TX(a){return Gc(a,Cy(a));}
function Fm(a,b){return a.F.data[b].T;}
function Lb(a,b){var c,d,e,f,g,h,i;c=a.F.data;d=c[b];e=c[b+1|0];f=DQ(LT(d.o,e.o));g=a.F;h=g.data.length;if(b<h&&b>=0){i=R(CB,h-1|0);c=i.data;Rv(g,b,i);c[b]=f;a.F=i;return;}d=new Bq;X(d);J(d);}
function Pr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.F.data;if(!(c<d[b].T?0:1)){d=(B0(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.u)){f=L(h.u,g);break a;}g=g-I(h.u)|0;f=f+1|0;}f=0;}EO();h=new Bv;d=BP(1);d.data[0]=f;Hs(h,d);GA(a,b,c,1,h);h=a.F.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].u);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].u)==1)h.o=Rv(i,j,R(B8,e-1|0));else{k=d[j];if(c<=0)l=DE(Dj(k.u,1),k.cS,k.cd);else if(c>=(I(k.u)-1|0)){l=new B8;m=k.u;VO(l,Ca(m,0,I(m)-
1|0),k.cS,k.cd);}else{i=BP(I(k.u)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.u,b);b=b+1|0;}b=n.length;while(c<b){m=k.u;e=c+1|0;n[c]=L(m,e);c=e;}l=DE(FY(i),k.cS,k.cd);}d[j]=l;}h.T=h.T-1|0;Eh(h);}else if(b!=(d.length-1|0))Lb(a,b);}
function Yt(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){XJ(a.F.data[b],c,e[0]);return;}g=f-1|0;h=IQ(a.F.data[b],c);d=a.F;i=Dk(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].u);JH(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fq(e[m]))j=DQ(R(B8,0));else{j=new CB;l=R(B8,1);l.data[0]=DE(e[m],0,0);Ig(j,l);}d[b+m|0]=j;m=m+1|0;}JH(h[1],0,0,e[g]);d[b+g|0]=h[1];a.F
=i;}
function WB(a,b){var c,d,e,f,g,h,i;c=D5(b);d=FB(b);e=c.M;if(e==d.M)return Ca(EM(a.F.data[e]),c.bd,d.bd);f=new M;O(f);b=a.F.data[c.M];e=c.bd;BE(BZ(f,Dj(EM(b),e)),10);g=a.F;h=c.M+1|0;e=d.M;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Y0(BZ(f,EM(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.F.data[d.M];i=d.bd;BZ(f,Ca(EM(b),0,i));return N(f);}}b=new W$;X(b);J(b);}
function TZ(a,b,c){var d;Ve(a,b);d=D5(b);GA(a,d.M,d.bd,1,c);}
function Ve(a,b){var c,d,e,f,g,h,i;a:{c=D5(b);d=FB(b);e=c.M;if(e==d.M)FW(a.F.data[e],c.bd,d.bd);else{b=a.F.data[e];FW(b,c.bd,b.T);FW(a.F.data[d.M],0,d.bd);e=c.M+1|0;f=d.M;g=a.F;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(CB,(h-f|0)+e|0);ABb(g,e,f,i);a.F=i;Lb(a,c.M);break a;}b=new Bq;X(b);J(b);}b=new Bq;X(b);J(b);}}}
function HS(a,b,c){return EU(b,G5(B0(a,b),c));}
function NO(a,b){var c,d,e;c=0;d=0;while(true){e=a.F.data.length;if(c>=e)break;if((d+(B0(a,c)).T|0)>=b)return B2(c,b-d|0);d=d+((B0(a,c)).T+1|0)|0;c=c+1|0;}return B2(e,0);}
function Gc(a,b){var c,d,e;c=0;d=a.F.data.length;e=0;while(e<b){c=c+Fm(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Ko(a,b){return Vm(B0(a,b.bx),b.bI);}
function EH(a){var b,c,d,e,f,g,h,i,j;b=BP(TX(a));c=b.data;d=a.F.data.length;e=0;f=0;while(e<d){g=a.F.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].u;P0(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function GA(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cw=a.cw+1|0;f=a.fx;g=R(G9,1);h=new G9;h.eU=b;h.fu=c;i=L$(e,B(196),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B2(b,c+I(i[0])|0);break a;}k=B2((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=B2(b,c);}i=g.data;h.la=k;h.jU=d;h.g_=e;i[0]=h;BY(f,g);JR(a,b,c,d,e);}
function JR(a,b,c,d,e){var f;f=Gc(a,b)+c|0;if(!d)PV(a.dc,f,I(e));else Uq(a.dc,f,I(e));}
function TR(a,b){var c,d,e;c=L$(b.g_,B(196),(-1));if(b.jU){Yt(a,b.eU,b.fu,c);PV(a.dc,Gc(a,b.eU)+b.fu|0,I(b.g_));}else{c=c.data;d=AN4();B3(d.bT,b.eU,b.fu);e=c.length;if(e==1)B3(d.bJ,b.eU,b.fu+I(c[0])|0);else B3(d.bJ,(b.eU+e|0)-1|0,I(c[e-1|0]));Ve(a,d);Uq(a.dc,Gc(a,b.eU)+b.fu|0,I(b.g_));}return b.la;}
function PC(a){a.fP=a.cw;}
var EZ=F();
function Mw(){EZ.call(this);this.wI=null;}
function MT(){EZ.call(this);this.wQ=null;}
function Qp(){EZ.call(this);this.xX=null;}
var G3=F(0);
var RO=F(0);
function Go(){var a=this;C.call(a);a.M=0;a.bd=0;}
function B3(a,b,c){a.M=b;a.bd=c;}
function XN(a,b){a.M=b.M;a.bd=b.bd;}
function Yg(a,b){var c;c=BF(a.M,b.M);if(c)return c;return BF(a.bd,b.bd);}
function Jt(){var a=this;C.call(a);a.lw=null;a.mf=null;}
function Jc(a){return a.lw.bx;}
function LW(a){return a.lw.bI;}
var WD=F(0);
function Tm(){C.call(this);this.hv=null;}
function FK(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.hv));}
function D$(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.hv));}
function AH5(a){var b,c;b=a.hv.byteLength;c=new M;O(c);G(T(G(c,B(246)),b),B(247));return N(c);}
var U4=F(0);
function Le(){var a=this;C.call(a);a.gP=null;a.fb=null;a.l_=null;}
function ACA(a,b){var c=new Le();AKS(c,a,b);return c;}
function AS_(a,b,c){var d=new Le();Oc(d,a,b,c);return d;}
function YY(b){var c,d,e,f,g,h,i,j,k;c=new Le;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=U_(E(D6),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=KS(f[h]);h=h+1|0;}}j=g.data;h=j.length;if(!h)i=R(Bv,0);else{i=R(Bv,h-1|0);g=i.data;h=0;k=g.length;while(h<k){g[h]=FE(J0(j[h]));h=h+1|0;}}}else i=R(Bv,0);Oc(c,d,b,i);return c;}
function AKS(a,b,c){Oc(a,b,c,R(Bv,0));}
function Oc(a,b,c,d){a.gP=b;a.fb=c;a.l_=d;}
function JL(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EB(a);e=new M;O(e);G(G(e,B(248)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EB(a){var b;b=a.gP;return FE(b!==null?b.name:a.fb.name);}
function ALj(a){var b,c,d,e,f;if(a.fb===null){b=a.l_;c=EB(a);d=AAf(b);e=new M;O(e);G(G(G(e,d),B(249)),c);c=N(e);}else{b=a.l_;c=EB(a);f=JL(a,a.fb.size);d=AAf(b);e=new M;O(e);T(G(G(G(G(e,d),B(249)),c),B(250)),f);c=N(e);}return c;}
function N4(){C.call(this);this.n3=null;}
function DD(a,b){Gw(a.n3,b);return 1;}
function ABJ(){var a=this;ED.call(a);a.dz=0;a.ca=null;a.c7=0;a.vA=0.0;a.k0=0;}
function GD(){var a=new ABJ();AIB(a);return a;}
function AIB(a){var b;b=AEx(16);a.dz=0;a.ca=R(Ik,b);a.vA=0.75;Vk(a);}
function AEx(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vk(a){a.k0=a.ca.data.length*a.vA|0;}
function N2(a,b){return Ty(a,b)===null?0:1;}
function DP(a,b){var c;c=Ty(a,b);if(c===null)return null;return c.dG;}
function Ty(a,b){var c,d;if(b===null)c=SD(a);else{d=b.jz();c=Qn(a,b,d&(a.ca.data.length-1|0),d);}return c;}
function Qn(a,b,c,d){var e;e=a.ca.data[c];while(e!==null&&!(e.ja==d&&Zm(b,e.dC))){e=e.cQ;}return e;}
function SD(a){var b;b=a.ca.data[0];while(b!==null&&b.dC!==null){b=b.cQ;}return b;}
function Lj(a,b,c){var d,e,f;if(b===null){d=SD(a);if(d===null){a.c7=a.c7+1|0;d=U8(a,null,0,0);e=a.dz+1|0;a.dz=e;if(e>a.k0)Vw(a);}}else{e=b.jz();f=e&(a.ca.data.length-1|0);d=Qn(a,b,f,e);if(d===null){a.c7=a.c7+1|0;d=U8(a,b,f,e);e=a.dz+1|0;a.dz=e;if(e>a.k0)Vw(a);}}b=d.dG;d.dG=c;return b;}
function U8(a,b,c,d){var e,f,g;e=new Ik;f=null;e.dC=b;e.dG=f;e.ja=d;g=a.ca.data;e.cQ=g[c];g[c]=e;return e;}
function Vw(a){var b,c,d,e,f,g,h,i;b=a.ca.data.length;b=AEx(!b?1:b<<1);c=R(Ik,b);d=c.data;e=0;f=b-1|0;while(true){g=a.ca.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.ja&f;i=h.cQ;h.cQ=d[b];d[b]=h;h=i;}e=e+1|0;}a.ca=c;Vk(a);}
function Zm(b,c){return b!==c&&!b.cz(c)?0:1;}
function CB(){var a=this;C.call(a);a.o=null;a.T=0;a.fB=null;a.en=null;a.dw=null;a.g$=null;a.fW=0;a.ia=0;a.hM=0;}
var AXA=0;var AXB=0;var AXo=0;function DQ(a){var b=new CB();Ig(b,a);return b;}
function Ig(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].u)|0;f=f+1|0;}a.T=d;Eh(a);}
function NJ(a,b){return a.o.data[b];}
function G5(a,b){var c;c=Iz(a,b);return c<=0?0:a.dw.data[c-1|0];}
function Iz(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.dw!==null&&!a.hM)){WY(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].u)|0;a.dw.data[d]=e;d=d+1|0;}a.hM=0;}d=Us(a.dw,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Vm(a,b){var c;c=a.o.data;if(!c.length)return null;return c[Iz(a,b)];}
function FW(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.T){a.o=R(B8,0);Eh(a);a.T=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].u);i=I(a.o.data[f].u);j=BF(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.u)?1:0){g=a.o;a.o=Rv(g,e,R(B8,g.data.length-1|0));a.T=a.T-d|0;Eh(a);return;}a.o.data[e]=DE(Fd(Ca(k.u,0,b),Dj(k.u,c)),k.cS,k.cd);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.u))a.o.data[e]=DE(Ca(l.u,0,b),l.cS,l.cd);e=e+1|0;}if(c==I(m.u))f=f+1|0;else if(c)a.o.data[f]=DE(Dj(m.u,c),m.cS,m.cd);g=a.o;a.o=ABb(g,e,f,R(B8,(g.data.length-f|0)+e|0));}a.T=a.T-d|0;Eh(a);}
function IQ(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(CB,[DQ(R(B8,0)),a]);if(b>=a.T)return H(CB,[a,DQ(R(B8,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].u);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(CB,[DQ(K9(c,0,R(B8,d))),DQ(K9(c,d,R(B8,f-d|0)))]);h=e[d];e=K9(c,0,R(B8,d+1|0));i=e.data;j=K9(c,d,R(B8,f-d|0));c=j.data;i[d]=DE(Ca(h.u,0,b),h.cS,h.cd);c[0]=DE(Dj(h.u,b),h.cS,h.cd);return H(CB,[DQ(e),DQ(j)]);}
function XJ(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].u);if(b<=g)break;b=b-g|0;d=e;}}JH(a,d,b,c);}
function JH(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=R(B8,1);h.data[0]=Sp(d);a.o=h;}else if(!b&&!c){i=R(B8,g+1|0);h=i.data;Dw(e,0,i,1,g);h[0]=Sp(d);a.o=i;}else{j=f[b];if(c<=0)k=DE(Fd(d,j.u),j.cS,j.cd);else if(c>=I(j.u))k=DE(Fd(j.u,d),j.cS,j.cd);else{l=I(d);m=l+c|0;n=I(j.u)-c|0;h=BP(I(j.u)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.u,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.u,g+c|0);g=g+1|0;}k=DE(FY(h),j.cS,j.cd);}f[b]=k;}a.T=a.T+I(d)|0;Eh(a);}
function XK(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Mv(f)){if(L(f.u,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lo(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.fB;if(!(e!==null&&e.data.length>=d)){a.fB=AFu(d);a.en=BG(d);a.fW=1;}WY(a);if(!a.fW)AXB=AXB+1|0;else{f=0;g=0.0;AXA=AXA+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.u)|0;a.dw.data[h]=f;CA(b,i[j.cd]);g=g+Er(b,j.u);a.fB.data[h]=g;a.en.data[h]=g+0.5|0;h=h+1|0;}a.T=f;a.fW=0;a.hM=0;}}
function WY(a){var b;b=a.dw;if(!(b!==null&&b.data.length>=a.o.data.length)){a.dw=BG(a.o.data.length);a.hM=1;}}
function Eh(a){a.fW=1;a.ia=1;a.hM=1;a.g$=null;}
function Xf(a,b,c,d){var e,f,g,h,i,j,k;if(a.g$===null)a.g$=R($rt_arraycls($rt_intcls()),a.o.data.length);e=a.g$.data[d];if(e===null){e=c.data;f=a.o.data[d];CA(b,e[f.cd]);f=f.u;e=BG(I(f)-1|0);c=Gx(f);g=!d?0.0:a.fB.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;MC(f,c,0,k);h[i]=g+Er(b,f)+0.5|0;i=k;}a.g$.data[d]=e;}return e;}
function G7(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fW&&a.en!==null))Lo(a,c,d);if(b>=a.T)return a.en.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].u)|0;i=BF(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.en.data[f];}return (Xf(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function E2(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.en.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GZ(a,b){var c;if(b>=a.T)return b+1|0;c=Iz(a,b);return a.dw.data[c];}
function EM(a){var b,c,d,e;b=new M;F0(b,a.T);c=a.o.data;d=c.length;e=0;while(e<d){BZ(b,c[e].u);e=e+1|0;}return N(b);}
function M7(b){var c,d,e,f;c=R(CB,1);d=c.data;e=new CB;f=R(B8,1);f.data[0]=Sp(b);Ig(e,f);d[0]=e;return c;}
function Y4(){AXo=0;}
var NU=F();
function ASf(a){}
function B8(){var a=this;C.call(a);a.u=null;a.cS=0;a.cd=0;}
function Sp(a){var b=new B8();AQ0(b,a);return b;}
function DE(a,b,c){var d=new B8();VO(d,a,b,c);return d;}
function AQ0(a,b){VO(a,b,0,0);}
function VO(a,b,c,d){a.u=b;a.cS=c;a.cd=d;}
function Hp(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Mv(a){return I(a.u);}
function I1(){var a=this;C.call(a);a.cU=null;a.ec=0;}
var AXC=null;var AXD=null;function AUv(a){var b=new I1();UI(b,a);return b;}
function ATv(a,b){var c=new I1();Yy(c,a,b);return c;}
function VV(b,c){var d;d=BF(b.bR,c.bR);if(!d)d=BF(c.bV,b.bV);return d;}
function UI(a,b){Yy(a,null,b);}
function Yy(a,b,c){var d,e;a.ec=0;if(Ee(c))return;Oo(c,AXC);if(b!==null)a.cU=MV(b);c=BU(c);while(B6(c)){d=BX(c);e=a.cU;if(e!==null){RA(a,e,MV(d));continue;}a.cU=MV(d);}}
function Pt(a,b){var c;if(b.e9)return b;b=BU(b.bD);while(true){if(!B6(b))return null;c=Pt(a,BX(b));if(c!==null)break;}return c;}
function KM(a,b,c){var d,e,f;d=b.b$;if(d.bR==c.bR&&d.bV==c.bV?1:0){e=BU(b.bD);while(B6(e)){f=KM(a,BX(e),c);if(f!==null)return f;}return b;}b=BU(b.bD);while(true){if(!B6(b))return null;d=BX(b);if(Qv(d,c.bR,c.bV)){e=KM(a,d,c);if(e!==null)break;}}return e;}
function WZ(a,b,c){BY(c,b.b$);b=BU(b.bD);while(B6(b)){WZ(a,BX(b),c);}}
function PV(a,b,c){a.ec=0;Jq(a,a.cU,b,c);}
function Jq(a,b,c,d){var e;if(C9(b)<c)return;a:{if(CY(b)>c){KK(b,d);F1(b,d);b=BU(b.bD);while(B6(b)){Jq(a,BX(b),c,d);}}else{if(!Kq(b,c)){if(a.ec)break a;if(C9(b)!=c)break a;}F1(b,d);if(CY(b)==c&&a.ec)KK(b,d);e=BU(b.bD);while(B6(e)){Jq(a,BX(e),c,d);}if(!a.ec){b.e9=1;a.ec=1;}}}}
function Uq(a,b,c){a.ec=0;MA(a,a.cU,b,c);}
function MA(a,b,c,d){var e,f,g,h;if(C9(b)<c)return;e=CY(b);f=c+d|0;if(e>f){e= -d|0;KK(b,e);F1(b,e);g=BU(b.bD);while(B6(g)){MA(a,BX(g),c,d);}b.bD=NW(a,b.bD);}else{g=b.b$;if(c<=g.bR&&g.bV<=f?1:0){if(b!==a.cU){Jy(b,(-1));Km(b,(-1));}else{Jy(b,0);Km(b,0);}Hy(b.bD);}else{e=Kq(b,c);f=Kq(b,f);if(e&&f)F1(b, -d|0);else if(e)Km(b,c);else{if(!f)return;Jy(b,c);F1(b, -d|0);}h=BU(b.bD);while(B6(h)){MA(a,BX(h),c,d);}b.bD=NW(a,b.bD);if(!a.ec){b.e9=1;a.ec=1;}}}}
function NW(a,b){var c,d,e,f,g,h;c=Co();d=null;Oo(b,AXD);b=BU(b);while(B6(b)){e=BX(b);if(CY(e)==C9(e))continue;if(!e.e9){if(d!==null){BY(c,d);d=null;}BY(c,e);}else if(d===null)d=e;else{f=Z(CY(d),CY(e));g=Bb(C9(d),C9(e));h=MV(Oh(f,g,d.b$.fs));h.dU=e.dU;h.e9=1;d=h;}}if(d!==null)BY(c,d);return c;}
function RA(a,b,c){var d,e;a:{if(OY(b,c)){d=BU(b.bD);while(true){if(!B6(d)){BY(b.bD,c);c.dU=b;break a;}e=BX(d);if(OY(e,c))break;}RA(a,e,c);return;}}}
function SE(a,b,c,d){var e,f,g,h,i,j;if((C9(c)-CY(c)|0)<43)e=Ca(d,CY(c),C9(c));else{e=Ca(d,CY(c),CY(c)+20|0);f=Ca(d,C9(c)-20|0,C9(c));g=new M;O(g);G(G(G(g,e),B(169)),f);e=N(g);}e=VG(e,B(196),B(251));f=Bx();g=Cz(c);h=new M;O(h);i=T(h,b);BE(i,32);g=G(i,g);BE(g,9);G(g,e);Br(f,N(h));c=BU(c.bD);j=b+1|0;while(B6(c)){SE(a,j,BX(c),d);}}
function ACX(){AXC=new XW;AXD=new XY;}
function AEA(){var a=this;C.call(a);a.bR=0;a.bV=0;a.fs=0;}
function Oh(a,b,c){var d=new AEA();AIH(d,a,b,c);return d;}
function AIH(a,b,c,d){a.bR=b;a.bV=c;a.fs=d;}
function AQl(a,b){var c;if(a===b)return 1;if(b!==null&&Cp(a)===Cp(b)){c=b;return a.bR==c.bR&&a.bV==c.bV&&a.fs==c.fs?1:0;}return 0;}
function AHd(a,b){var c;b=b;c=BF(a.bR,b.bR);if(!c)c=BF(b.bV,a.bV);return c;}
var XW=F();
function AJ0(a,b,c){return VV(b,c);}
var XY=F();
function ALH(a,b,c){b=b;c=c;return VV(b.b$,c.b$);}
var E0=F();
var AXE=null;var AXF=null;var AXG=null;var AXH=null;var AXI=null;var AXJ=null;function ACo(){AXE=new V4;AXF=new V2;AXG=new V3;AXH=new V0;AXI=new V1;AXJ=new YC;}
var Hb=F(F9);
function AME(a,b){var c;c=new Fj;X(c);J(c);}
function Yb(){Hb.call(this);this.tL=null;}
function AI6(a){return 1;}
function AR4(a,b){var c;if(!b)return a.tL;c=new By;X(c);J(c);}
function Y3(){var a=this;C.call(a);a.b$=null;a.dU=null;a.bD=null;a.e9=0;}
function MV(a){var b=new Y3();AOC(b,a);return b;}
function AOC(a,b){a.e9=0;a.b$=b;a.dU=null;a.bD=Co();}
function CY(a){return a.b$.bR;}
function C9(a){return a.b$.bV;}
function Jy(a,b){a.b$.bR=b;}
function Km(a,b){a.b$.bV=b;}
function KK(a,b){var c;c=a.b$;c.bR=c.bR+b|0;}
function F1(a,b){var c;c=a.b$;c.bV=c.bV+b|0;}
function Kq(a,b){return CY(a)<=b&&b<C9(a)?1:0;}
function Qv(a,b,c){var d;d=a.b$;return d.bR<=b&&c<=d.bV?1:0;}
function OY(a,b){b=b.b$;return Qv(a,b.bR,b.bV);}
function AJ8(a){var b,c,d,e,f;b=a.b$;c=b.bR;d=b.bV;e=b.fs;b=new M;O(b);BE(b,40);BE(T(G(T(G(T(b,c),B(44)),d),B(44)),e),41);b=N(b);c=a.e9;f=new M;O(f);F8(G(G(f,b),B(44)),c);return N(f);}
var O8=F(0);
var Gh=F(EQ);
var Kn=F(Gh);
var V4=F(Kn);
var LE=F(ED);
var V2=F(LE);
var V3=F(Hb);
var FF=F(0);
var V0=F();
var Py=F(0);
var V1=F();
var YC=F();
function H0(){var a=this;C.call(a);a.b8=null;a.V=null;a.u_=null;a.hf=null;a.du=null;a.pQ=null;a.qT=null;a.tq=null;}
function AXK(a,b,c,d,e){var f=new H0();L0(f,a,b,c,d,e);return f;}
function Ku(){var b,c,d,e,f,g,h,i;b=new H0;c=new I5;d=new Hg;FN();JV(d,AXL);Lw(c,d,BI(AXg),BI(AXM),BI(AXN),BI(AXg),BI(AXO),BI(AXP),BI(AXQ),BI(AXR),BI(AXS),BI(AXT));ACm();e=(AXU.eT()).data;f=e.length;g=R(IP,f);h=g.data;i=0;while(i<f){h[i]=e[i].lz;i=i+1|0;}L0(b,c,g,ABd(Q(B(252)),Q(B(253)),Q(B(254)),Q(B(255))),F2(),ADK(Q(B(119)),Q(B(120)),Q(B(121)),Q(B(256))));return b;}
function L0(a,b,c,d,e,f){var g;g=c.data;a.pQ=ES(B(156),16.0);a.qT=ES(B(156),17.0);a.tq=ES(B(155),15.0);a.b8=b;a.u_=c;a.hf=d;if(g.length>=15){a.V=e;a.du=f;return;}b=new BH;X(b);J(b);}
function I5(){var a=this;C.call(a);a.tF=null;a.er=null;a.vu=null;a.yw=null;a.oG=null;a.k$=null;a.qA=null;a.oJ=null;a.l3=null;a.mm=null;a.jd=null;}
function AXV(a,b,c,d,e,f,g,h,i,j,k){var l=new I5();Lw(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Lw(a,b,c,d,e,f,g,h,i,j,k,l){a.tF=b;a.er=c;a.vu=d;a.yw=e;a.oG=f;a.k$=g;a.qA=h;a.oJ=i;a.l3=j;a.mm=k;a.jd=l;}
function NL(){var a=this;C.call(a);a.hK=0;a.mn=0;a.iF=0;a.gh=0;a.gS=null;}
function B6(a){return a.hK>=a.iF?0:1;}
function BX(a){var b,c;Pm(a);b=a.hK;a.gh=b;c=a.gS;a.hK=b+1|0;return c.r1(b);}
function Q_(a){var b,c,d;if(a.gh<0){b=new D1;X(b);J(b);}Pm(a);a.gS.uR(a.gh);a.mn=a.gS.cx;c=a.gh;d=a.hK;if(c<d)a.hK=d-1|0;a.iF=a.iF-1|0;a.gh=(-1);}
function Pm(a){var b;if(a.mn>=a.gS.cx)return;b=new IS;X(b);J(b);}
function K2(){var a=this;K6.call(a);a.pi=null;a.nZ=null;}
function Zw(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.pi;e=0;f=0;g=a.nZ;a:{while(true){if((e+32|0)>f&&DO(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Z(B7(b)+j|0,i.length);NI(b,d,j,f-j|0);e=0;}if(!DO(c)){k=!DO(b)&&e>=f?AWy:AWx;break a;}i=g.data;j=Z(B7(c),i.length);l=new NS;l.mY=b;l.qf=c;k=AB0(a,d,e,f,g,0,j,l);e=l.tI;j=l.u0;if(k===null){if(!DO(b)&&e>=f)k=AWy;else if(!DO(c)&&e>=f)k=AWx;}Xt(c,g,0,j);if(k!==null)break;}}EG(b,b.W-(f-e|0)|0);return k;}
var PA=F(K2);
function AB0(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LU(h,2))break a;i=AWx;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Mi(l)){if((f+3|0)>g){j=j+(-1)|0;if(LU(h,3))break a;i=AWx;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CE(l)){i=D2(1);break a;}if
(j>=d){if(DO(h.mY))break a;i=AWy;break a;}c=j+1|0;m=k[j];if(!C4(m)){j=c+(-2)|0;i=D2(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LU(h,4))break a;i=AWx;break a;}k=e.data;o=Ev(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tI=j;h.u0=f;return i;}
var IA=F(D4);
var X2=F();
function AHT(a,b){return b.text();}
function X0(){var a=this;C.call(a);a.th=null;a.ti=null;}
function AFI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.th;d=a.ti;e=R(Bv,8);f=BP(16);g=0;h=0;i=b.length;j=0;while(true){k=BF(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=HC(f,0,g);m=h+1|0;e=ADB(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=NP(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.l(ATA(Z_(e,h),AJZ(d)));}
var X1=F();
function AJR(a,b){AEw(b);}
var Hn=F(0);
function KN(){var a=this;C.call(a);a.dC=null;a.dG=null;}
function AH$(a,b){var c,d;if(a===b)return 1;if(!IO(b,Hn))return 0;a:{b:{c:{d:{c=b;b=a.dC;if(b!==null){if(!b.cz(c.dC))break c;else break d;}if(c.dC!==null)break c;}b=a.dG;if(b!==null){if(!b.cz(c.dG))break c;else break b;}if(c.dG===null)break b;}d=0;break a;}d=1;}return d;}
function Ik(){var a=this;KN.call(a);a.ja=0;a.cQ=null;}
function Q6(){var a=this;C.call(a);a.xe=null;a.rp=null;a.f2=null;}
function GK(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.f2.data;f=e.length-1|0;g=f;while(true){if(d>g)return Z(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hz:i.hB;k=!c?i.lf:i.lD;if(j<=k&&k<(j+k|0))return h;j=BF(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function L9(){var a=this;C.call(a);a.hB=0;a.lD=0;a.hz=0;a.lf=0;a.j2=0;}
function ZS(){var a=this;C.call(a);a.iy=null;a.jc=null;a.o2=null;a.uM=null;}
function ABd(a,b,c,d){var e=new ZS();AOm(e,a,b,c,d);return e;}
function AOm(a,b,c,d,e){a.iy=b;a.jc=c;a.o2=d;a.uM=e;}
function KH(){var a=this;CR.call(a);a.cM=null;a.gf=null;}
function AU_(a){var b=new KH();YO(b,a);return b;}
function YO(a,b){var c,d,e,f;Fi(a,b);c=AOi(a.s);a.gf=c;d=AEk(a.s,c);a.cM=d;Xo(a.s,d);Y(b.m.bt,a.gf);Y(b.m.dk,a.gf);Y(b.m.bt,a.cM);c=b.m.b1;d=new St;d.oU=a;Y(c,d);c=b.m.b1;d=new HO;e=a.cM;BM(e);f=new Sx;f.uJ=e;SA(d,b,f);Y(c,d);c=b.m.fE;d=a.cM;BM(d);e=new Sw;e.mF=d;Y(c,e);c=b.m.f$;d=new Sv;d.pV=a;Y(c,d);c=b.m.dk;d=new Su;d.vC=a;Y(c,d);b=b.m.ex;c=new Sy;c.ns=a;Y(b,c);LS(a);}
function AHJ(a,b){return K_(a.cM,b);}
function AKC(a){E6(a);Mp(a.cM);WJ(a.gf);}
function AOD(a){return Mq(0);}
function AM8(a,b,c){G1(a,b,c);a.lg(b,c);}
function AAF(a,b,c){LQ(a.cM,new Bf,b,c);}
function AGB(a,b){BM(b);PZ(a.gf,b);Lp(a.cM,b);}
function AEP(a,b){if(b.bj!=121)return 0;return 1;}
function ZC(a,b){var c,d,e;if(DZ(a.s,a.cM)){c=a.gf;d=a.cM;e=new To;e.q6=a;KL(c,b,d,a,d,e);}return 1;}
function Zk(){var a=this;Cw.call(a);a.mi=null;a.lv=null;a.dh=null;a.gC=null;a.fq=null;a.hn=null;a.vS=null;a.hb=null;a.rE=null;a.mk=null;a.wa=null;a.w$=null;a.f_=null;a.jZ=null;a.qR=0;}
function ATm(a){var b=new Zk();AL7(b,a);return b;}
function AL7(a,b){var c,d,e,f,g,h,i;El(a,b);c=(Ku()).b8.er;a.mi=c;a.lv=ARE(c);a.dh=Ff(0,0,300,300);a.gC=S9(0,0,3,3);a.fq=Ff(0,0,300,300);a.hn=ANx();d=R(Bv,4);e=d.data;e[0]=B(207);e[1]=B(190);e[2]=B(229);e[3]=B(228);a.vS=d;a.hb=R(IK,e.length);c=b.bc;f=b.m.bt;g=new Uh;g.fo=a;Y(f,g);f=b.m.b1;g=new R6;g.vE=a;Y(f,g);f=b.m.mA;g=new R5;g.oS=a;Y(f,g);f=b.m.fE;g=new R8;g.xA=a;Y(f,g);f=b.m.jJ;g=new R7;g.v5=a;Y(f,g);f=b.m.ex;g=new R4;g.w6=a;Y(f,g);b=b.m.dk;f=new R3;f.tK=a;Y(b,f);h=CK(a.ba.bc,300,300);f=h.bp;b="white";f.fillStyle
=b;b=h.bp;f="white";b.strokeStyle=f;b=h.bp;f=10.0;b.lineWidth=f;h.bp.strokeRect(75.0,140.0,150.0,110.0);h.bp.fillRect(130.0,190.0,40.0,60.0);h.bp.beginPath();h.bp.moveTo(50.0,140.0);h.bp.lineTo(150.0,60.0);h.bp.lineTo(250.0,140.0);h.bp.closePath();h.bp.stroke();F5(h,B(257),11.0);LB(h,187,187,187);Pz(a,B(258),h);b=CV(a.ba.bc);CN(b,h);FR(h);a.rE=b;Gn(a.dh,b);G$(a.dh);BB(a.dh.bu,a.mi);BB(a.dh.bq,CM(204,120,50));b=CK(c,255,100);a.f_=b;F5(b,B(156),11.0);b=Bx();i=$rt_str(a.f_.bp.font);g=new M;O(g);G(G(g,B(259)),i);Br(b,
N(g));Er(a.f_,B(260));LB(a.f_,169,183,198);Pz(a,B(260),a.f_);b=CV(c);a.mk=b;CN(b,a.f_);Gn(a.fq,a.mk);G$(a.fq);Gf(a.fq,CL(255));HF(a.fq,a.mi);a.wa=CV(c);BB(a.gC.bu,a.lv);}
function Pz(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function Xi(a,b){JG(Fy(),0.5+Fy()*0.5,0.5+Fy()*0.5,1.0,b.bq);}
function AFT(a,b){var c;a.qR=a.qR+1|0;c=b/5.0;JG(c-(c|0),1.0,1.0,1.0,a.gC.bq);return Tq(a.hn,b);}
function AIY(a){var b,c,d,e,f,g;b=a.ba.bc;Fv(b,a.lv);c=a.hb.data;d=c.length;e=0;while(e<d){UY(c[e],b,0,0);e=e+1|0;}DF(a.dh,b,a.rE,0,0,0.5);f=a.mk;d=0;while(d<7){g=a.fq;DF(g,b,f,W(d,10+((10*g.t.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.w$;if(g!==null)UB(a.gC,b,g,0,0,0.0);Vz(a.hn,b,new Bf);N5(b,B(261));}
function APH(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bx();e=Cz(b);f=new M;O(f);G(G(f,B(262)),e);Br(d,N(f));g=Bx();d=new M;O(d);Fl(G(d,B(263)),c);Br(g,N(d));h=B9(30.0,c);i=B9(10.0,c);j=0;while(true){k=a.hb.data;if(j>=k.length)break;l=1+j|0;k[j]=S9(W(i,l)+W(h,j)|0,h,h,h);Xi(a,a.hb.data[j]);j=l;}V(a.gC.z,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dh;g=d.z;h=b.b;d=d.t;V(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.fq;d.z.a=b.a-d.t.a|0;}
function Pc(a,b){var c,d,e,f,g;c=Bx();d=!b.hD?B(264):B(265);e=b.dR;f=b.bj;g=b.r$;b=new M;O(b);F8(G(T(G(G(G(b,d),e),B(266)),f),B(267)),g);Br(c,N(b));return 0;}
function WG(){var a=this;CR.call(a);a.rP=null;a.dF=null;a.cL=null;a.ef=null;a.lM=null;}
function AQ$(a,b,c){var d;d=GU(a.s,a.lM);H9(a.dF,d);H9(a.cL,d);G4(a.dF,a.s);G4(a.cL,a.s);}
function NQ(b){return I_(b,AQB());}
function I_(b,c){var d;d=P9();KG(d,K1(b,ID(c,25)),!b?null:I_(b-1|0,c));KG(d,K1(b,ID(c,20)),!b?null:I_(b-1|0,c));KG(d,K1(b,ID(c,15)),!b?null:I_(b-1|0,c));KG(d,K1(b,ID(c,10)),!b?null:I_(b-1|0,c));return Hv(d);}
function K1(b,c){var d;if(b){d=new M;O(d);G(G(T(d,b),B(36)),c);c=N(d);}return c;}
function KG(b,c,d){var e,f;e=new GB;f=JG(Fy(),1.0,1.0,1.0,new B4);Ym();Ht(e,f,AXW,AXX);if(d!==null)GO(b,c,e,d);else{d=new UM;d.tN=c;D7(b,c,e,d);}}
function AIq(a,b,c){var d,e;G1(a,b,c);b=a.s.cb;d=Ec(a.dF);e=Ec(a.cL);J8(a.dF,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);J8(a.cL,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AJc(a){var b,c,d,e,f,g,h,i;E6(a);b=a.ba.bc;Ct(b,1);c=a.rP;d=a.s;e=d.cb;V(c.l9,e.b,B9(2.0,d.bQ));V(c.ko,B9(2.0,d.bQ),e.a);FN();f=AXS;g=d.cC;h=e.a/2|0;i=c.l9;Bu(g,0,h-(i.a/2|0)|0,i,f);g=d.cC;h=e.b/2|0;c=c.ko;Bu(g,h-(c.b/2|0)|0,0,c,f);JM(a.dF,a.s);JM(a.cL,a.s);Ix(a.ef);Ct(b,0);}
function AOZ(a,b){var c,d,e;c=KE(a.ef,b);d=Ks(a.dF,b.h,a.s.cF);e=Ks(a.cL,b.h,a.s.cF);return !c&&!d&&!e?0:1;}
function AJk(a,b,c){return Jr(a.ef,b,c);}
function AG3(a,b,c){return DK(a.ef);}
function AOf(a,b,c,d){var e,f,g;e=Jw(a.ef,b,c,d);f=Kj(a.dF,b.h,c,d);g=Kj(a.cL,b.h,c,d);return !e&&!f&&!g?0:1;}
function XV(){var a=this;CR.call(a);a.hq=null;a.ew=null;a.ie=null;a.kS=null;}
function AJn(a,b,c){if(b===0.0)Yf(a);}
function AOA(a){var b;E6(a);b=a.ba.bc;Jf(a.ew,b);Ix(a.hq);}
function Yf(a){var b,c,d,e,f,g,h;b=a.ie;if(b!==null){Kg(a.ew,b);J6(b);}b=(Ku()).V;c=AU0(a.s,new Wm);d=ES(B(155),14.0);e=AOk();f=0;while(f<300){g=C5(f);h=new YI;h.sy=B(268);h.sx=g;h.sw=B(269);Nl(e,B(268),g,B(269),h);f=f+1|0;}Wr(c,Rc(e));Yi(c,b,d);g=ACd(a.s);h=ZX(c,a.s);QV(h,b.l8,b.ks);LY(g,h);g.ep=b;IN(g,B(270),a.kS,2.0);a.ie=g;I4(a.ew,g);U0(a);}
function AHE(a,b,c){G1(a,b,c);Qc(a.ew,b,c);U0(a);}
function U0(a){var b,c,d;b=a.s.cb;Fo(a.ie,B2((b.b*2|0)/10|0,(b.a*4|0)/10|0),B2((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.ie;b=YL(c.Q.q);d=new M;O(d);G(G(d,B(271)),b);IN(c,N(d),a.kS,2.0);}
function APN(a,b){return Oz(a.ew,b);}
function YE(){var a=this;CR.call(a);a.ib=null;a.fO=null;a.fd=null;a.jB=null;a.o5=null;a.iw=null;a.fY=null;a.fK=null;a.jv=0;a.ga=0;}
function Xb(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fO.i>0){d=Fy();e=a.fO;f=d*(e.i-1|0)|0;e=Eo(e,f);Eo(a.fd,f);f=a.ga;g=e.t;a.ga=f-W(g.b,g.a)|0;Ip(a.ib,e.c9);}c=c+1|0;}}
function KC(a,b){var c,d,e,f,g,h,i,j;c=IT(a.s);CA(c,a.jB);d=0;while(d<b){e=ID(a.iw,1+(Fy()*19.0|0)|0);f=AMk();g=f.c9;h=a.ib;BM(c);i=new RL;i.pl=c;BB(g,Ho(h,e,i));(Xq(Fy(),1.0,1.0,f.bu)).bG=0.5;h=f.z;g=f.c9;V(h,g.bl|0,g.bF|0);h=f.t;g=f.c9;V(h,g.bk|0,g.bG|0);BY(a.fd,e);BY(a.fO,f);j=a.ga;h=f.t;a.ga=j+W(h.b,h.a)|0;d=d+1|0;}a.fK=Ml(a.ib);}
function AO$(a){var b,c,d,e,f,g,h,i;E6(a);b=a.ba.bc;Ct(b,1);c=a.s.cC;if(a.fd.i){d=a.fK;d=CK(c,d.b,d.a);CA(d,a.jB);e=a.jB.dB;Bu(c,0,0,a.fK,a.o5);f=0;while(f<a.fd.i){g=Bt(a.fO,f);h=Bt(a.fd,f);g=g.c9;Ch(d,h,g.bl,g.bF+e);f=f+1|0;}g=a.fY;if(!(g!==null&&Ce(g)==a.fK.b&&C8(a.fY)==a.fK.a))a.fY=CH(a.fY,CV(c));CN(a.fY,d);FR(d);i=0;while(i<a.fd.i){d=Bt(a.fO,i);Gf(d,CL(0));DF(d,c,a.fY,0,0,0.0);i=i+1|0;}}Ct(b,0);}
function AH3(a,b){var c,d;if(a.jv){c=a.fK;d=Z(W(c.b,c.a),2211840);if(a.ga/d<=0.7)KC(a,Ir(a.iw,5));else Xb(a,Ir(a.iw,5));}return a.jv;}
function Pq(){var a=this;Cw.call(a);a.ea=null;a.f6=null;a.gZ=null;a.k6=null;a.d$=0;a.sm=0;a.uS=null;a.l$=0;a.u7=0;a.tm=null;a.oW=null;}
function AF_(a){var b,c;b=a.d$;c=new M;O(c);T(G(c,B(272)),b);$rt_globals.console.info($rt_ustr(N(c)));Fv(a.ea,a.uS);IE(a.gZ,a.d$,0,Gd(a),5000,a.k6.b,20);Ct(a.ea,1);Qg(a.gZ,a.ea);Ct(a.ea,0);b=a.d$;c=new M;O(c);T(G(c,B(272)),b);$rt_globals.console.info($rt_ustr(N(c)));Ye(a.f6,a.d$/a.l$|0);Yv(a.f6,a.d$,Gd(a),a.oW,a.ea);}
function AQS(a,b,c){a.k6=b;VU(a.f6,B2(0,0),50,Gd(a),c);J_(a.f6,a.ea,0,Gd(a));}
function P8(a){return 5000-Gd(a)|0;}
function Gd(a){return Z(a.sm,a.k6.a);}
function Db(){var a=this;Cw.call(a);a.lW=null;a.gJ=null;a.v7=0.0;}
function AXY(a){var b=new Db();Gq(b,a);return b;}
function Gq(a,b){El(a,b);a.lW=AAg(0,0,64);a.gJ=new Bf;NK(b.bS,Ia(Cp(a)));}
function SF(a){Fv(a.ba.bc,a.lW);}
function Tb(a,b,c){Cu(a.gJ,b);a.v7=c;}
var Rl=F(Db);
var AEI=F(Db);
function AUN(a){var b=new AEI();ANN(b,a);return b;}
function ANN(a,b){var c,d,e,f,g,h;Gq(a,b);c=b.bS;d=new RK;d.wA=a;e=R(C,1);e.data[0]=B(273);CP(c,d,B(274),e);f=b.bS;g=new RJ;g.ys=a;h=R(C,1);h.data[0]=ABr([1,2,3,4,5]);CP(f,g,B(275),h);f=b.bS;g=new RI;g.oP=a;h=R(C,1);h.data[0]=AT4([1,2,3,4,5]);CP(f,g,B(276),h);f=b.bS;g=new RH;g.wj=a;h=R(C,1);h.data[0]=E7([1,2,3,4,5]);CP(f,g,B(277),h);f=b.m.b1;d=new HO;g=new RF;g.xn=a;c=new RE;c.qC=a;VW(d,b,g,c);Y(f,d);}
function U1(a,b){var c,d,e,f,g,h;c=b.data;d=Bx();e=Cz(c[0]);f=new M;O(f);G(G(f,B(278)),e);Br(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((Sl(b,1)).hv));d=Bx();e=Cz(c[1]);if(b===null)f=B(29);else{f=new M;O(f);BZ(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BZ(f,B(44));T(f,c[g]);g=g+1|0;}BZ(f,B(45));f=N(f);}h=new M;O(h);G(G(G(G(h,B(279)),e),B(280)),f);Br(d,N(h));}
function Xl(){var a=this;Db.call(a);a.dW=null;a.e2=null;a.kG=null;a.p1=null;a.lL=null;}
function ALC(a,b){b=b/5.0;JG(b-(b|0),1.0,1.0,1.0,a.e2.bq);return 0;}
function AFM(a){SF(a);DF(a.dW,a.ba.bc,a.p1,0,0,0.5);UB(a.e2,a.ba.bc,a.kG,0,0,0.0);N5(a.ba.bc,B(261));}
function AOy(a,b,c){var d,e,f;Tb(a,b,c);V(a.e2.z,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dW;e=d.z;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function SI(){var a=this;Db.call(a);a.gr=null;a.r2=null;a.kc=null;a.iz=null;a.hJ=null;}
function ASm(a){var b,c,d,e,f,g;SF(a);b=a.ba.bc;c=a.iz;LK(b,c.b,c.a,a.hJ);b=a.gr;c=a.r2;d=a.gJ;e=a.ba.bc;f=0;while(true){g=0;while(true){DF(b,e,c,g,f,0.5);g=g+Ce(c)|0;if(g>=d.b)break;}f=f+C8(c)|0;if(f>=d.a)break;}G2(a.ba.bc);}
function AHv(a,b,c){Tb(a,b,c);V(a.hJ,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function O2(){var a=this;Cw.call(a);a.ej=null;a.j7=null;a.fn=null;a.b7=null;a.eL=0;a.hT=null;a.eM=0;a.w7=20;a.yK=11;a.wM=220;a.jm=null;a.xr=5000;a.gM=0;a.fA=null;}
function ASp(a){var b,c,d,e,f,g,h;b=a.hT;c=a.eM;d=a.jm;IE(b,c,0,d.a,5000,d.b,20);Ct(a.ej,1);Qg(a.hT,a.ej);if(a.b7===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.j7,C5(e),0.0,c);}b=CV(a.ej);a.b7=b;CN(b,a.j7);}if(a.eM<=a.eL)while(true){f=a.eL;if(f<=a.eM)break;a.eL=f-20|0;b=a.fn;g=a.gM-1|0;a.gM=g;Ch(b,C5(g),0.0,20.0);H6(a.b7,a.fn,0,a.eL%220|0);Ex(a.fn);}else while(a.eL<(a.eM-20|0)){b=a.fn;g=a.gM+1|0;a.gM=g;Ch(b,C5((g+11|0)-1|0),0.0,20.0);H6(a.b7,a.fn,0,a.eL%220|0);Ex(a.fn);a.eL=a.eL+20|0;}b=Ff(0,0,Ce(a.b7),C8(a.b7));HK(b,
0,0,Ce(a.b7),C8(a.b7));Gf(b,a.fA.data[0]);HF(b,a.fA.data[1]);DF(b,a.ej,a.b7,400,0,1.0);g=a.eM%220|0;f=Z(C8(a.b7)-g|0,200);d=Ff(0,0,Ce(a.b7),f);HK(d,0,g,Ce(a.b7),f);Gf(d,a.fA.data[0]);HF(d,a.fA.data[1]);DF(d,a.ej,a.b7,0,0,1.0);h=Ff(0,f,Ce(a.b7),(C8(a.b7)-f|0)-20|0);HK(h,0,0,Ce(a.b7),(C8(a.b7)-f|0)-20|0);Gf(h,a.fA.data[1]);HF(h,a.fA.data[0]);DF(h,a.ej,a.b7,0,0,1.0);}
function AJJ(a,b,c){Cu(a.jm,b);}
function AH9(a,b){return 0;}
function Sc(a){return 5000-a.jm.a|0;}
function IF(){Db.call(this);this.dH=0;}
function RB(a){var b,c;b=a.ba.bS;c=new Qx;c.m3=a;Rb(b,c,RY(a));}
function MN(a){var b,c,d,e;b=a.dH+1|0;a.dH=b;c=Ia(E(IF));d=new M;O(d);G(G(T(G(d,B(281)),b),B(36)),c);e=N(d);c=a.ba.bS;d=new UF;d.qh=e;UR(c,e,d,RY(a));}
function RY(a){var b;b=new We;b.o1=a;return b;}
function APB(a,b,c,d){a:{switch(c){case 0:break;case 2:MN(a);break a;default:break a;}RB(a);}return 1;}
function Qo(){var a=this;Cw.call(a);a.nI=null;a.ff=null;a.lN=null;a.ic=null;}
function ASg(a){var b;b=a.ba.bc;Fv(b,a.nI);DF(a.ff,b,a.lN,0,0,0.5);}
function AMD(a,b,c){var d,e,f;d=a.ff;e=d.z;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function F_(){var a=this;Cw.call(a);a.oq=null;a.b9=null;a.dJ=null;a.cY=null;a.eB=null;a.d7=null;}
function Xn(a,b){var c,d;El(a,b);a.oq=CL(20);a.b9=SH();a.dJ=new Bf;a.cY=new Bf;a.eB=new Bf;a.d7=new Bf;c=b.m.b1;d=new Qy;d.yb=a;Y(c,d);Y(b.m.bt,a);b=a.b9.bu;FN();BB(b,AXg);BB(a.b9.bq,AXh);}
function AA6(a){var b,c,d;b=a.ba.bc;Fv(b,a.oq);c=a.b9;d=c.z;Bu(b,d.b,d.a,c.t,c.bu);Ct(b,1);c=a.b9;d=c.z;YK(b,d.b,d.a,c.t,a.dJ,a.cY,a.eB,a.d7,c.bq);Ct(b,0);}
function AMo(a,b){return 0;}
var O$=F(F_);
function ANe(a,b,c){var d,e,f;d=a.b9;e=d.z;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);V(a.dJ,0,0);V(a.cY,Z(b.b,b.a),Z(b.b,b.a));b=a.eB;d=a.dJ;V(b,d.b,d.a+20|0);b=a.d7;d=a.cY;V(b,d.b,d.a+40|0);}
function AIz(a,b){var c,d,e;Cu(a.dJ,b.h);b=a.cY;c=a.b9;d=c.z;e=d.b;c=c.t;V(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.eB;c=a.dJ;V(b,c.b,c.a+20|0);b=a.d7;c=a.cY;V(b,c.b,c.a+40|0);return 0;}
function O_(){var a=this;F_.call(a);a.fm=null;a.fe=null;}
function AKy(a,b){var c;c=a.cY;b=b.h;c.a=b.a-50|0;a.d7.a=b.a+100|0;return 1;}
function AG4(a){var b,c,d,e,f,g,h;b=Bb(a.dJ.b,a.eB.b);c=Z(a.cY.b,a.d7.b);d=Z(a.dJ.a,a.cY.a)-50|0;e=Bb(a.eB.a,a.d7.a)+50|0;Gj(a.b9,b,d,c-b|0,e-d|0);AA6(a);f=a.b9.z.b-10|0;W_(a,a.ba.bc,10,f,a.dJ,a.eB);g=a.b9;h=g.z.b+g.t.b|0;W_(a,a.ba.bc,h,f,a.cY,a.d7);}
function W_(a,b,c,d,e,f){var g;V(a.fm,c,a.b9.z.a);V(a.fe,d,e.a-a.b9.z.a|0);g=a.fm;Bu(b,g.b,g.a,a.fe,a.b9.bu);V(a.fm,c,e.a);V(a.fe,d,f.a-e.a|0);e=a.fm;Bu(b,e.b,e.a,a.fe,a.b9.bq);V(a.fm,c,f.a);e=a.fe;g=a.b9;V(e,d,(g.z.a+g.t.a|0)-f.a|0);e=a.fm;Bu(b,e.b,e.a,a.fe,a.b9.bu);}
function ALJ(a,b,c){}
function WX(){var a=this;CR.call(a);a.gT=null;a.eb=null;a.js=null;a.jt=null;a.tl=null;}
function AKK(a,b,c){if(b===0.0)NY(a);}
function ASF(a){var b;E6(a);b=a.ba.bc;Jf(a.eb,b);Ix(a.gT);}
function NY(a){Xa(a,a.js);Xa(a,a.jt);a.js=Nf(a,0.5,0,B(282));a.jt=Nf(a,1.0,1,B(283));I4(a.eb,a.js);I4(a.eb,a.jt);Xz(a);}
function Xa(a,b){if(b!==null){Kg(a.eb,b);J6(b);}}
function Nf(a,b,c,d){var e,f,g;e=ACd(a.s);f=new Wu;g=new PK;g.to=a;g.tp=e;g.tn=d;Uf(f);f.h6=new B4;f.ly=new Bf;f.sv=g;f.qe=b;if(c)f=ZX(f,a.s);LY(e,f);e.ep=F2();return e;}
function AOR(a,b,c){G1(a,b,c);Qc(a.eb,b,c);Xz(a);}
function Xz(a){var b;b=a.s.cb;Fo(a.jt,B2((b.b*2|0)/10|0,(b.a*2|0)/10|0),B2((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fo(a.js,B2(b.b/10|0,b.a/10|0),B2((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function ALx(a,b){return Oz(a.eb,b);}
var RG=F(KH);
function AKQ(a){return Mq(1);}
function AMH(a,b,c){AAF(a,b,c);}
var ACN=F(0);
function H_(){var a=this;C.call(a);a.jn=null;a.il=null;a.nO=null;a.p8=null;a.bi=null;a.l8=null;a.ks=null;}
function AXZ(a,b,c,d,e,f,g){var h=new H_();Lc(h,a,b,c,d,e,f,g);return h;}
function Lc(a,b,c,d,e,f,g,h){a.nO=b;a.p8=c;a.il=d;a.bi=e;a.jn=f;a.l8=g;a.ks=h;}
function F2(){var b,c,d;b=new H_;c=new HH;Ym();d=AX0;J4(c,d,AX1,AX2,AX3,AX4,d);Lc(b,c,AB6(),ZH(Q(B(284)),Q(B(117)),Q(B(118))),AB6(),Z0(1,0.125),AX5,AX6);return b;}
function ADH(){var a=this;C.call(a);a.nl=null;a.ta=null;a.rK=null;a.qG=null;}
function ADK(a,b,c,d){var e=new ADH();AKO(e,a,b,c,d);return e;}
function AKO(a,b,c,d,e){a.nl=b;a.ta=c;a.rK=d;a.qG=e;}
function Vx(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.du.ta;break a;case 3:if(c!=3){b=b.du.qG;break a;}b=b.du.rK;break a;default:b=b.b8.er;break a;}b=b.du.nl;}return b;}
function HG(a,b,c){return Vx(a,b,0,c);}
function Mz(){var a=this;C.call(a);a.i9=null;a.iv=null;}
function MK(a,b){var c;c=a.iv;a.iv=b;return c;}
function JA(){var a=this;Mz.call(a);a.bP=null;a.b3=null;a.fz=0;a.fI=0;}
function JT(a){var b;b=K7(a);if(b==2){if(K7(a.b3)<0)a.b3=No(a.b3);return OZ(a);}if(b!=(-2))return a;if(K7(a.bP)>0)a.bP=OZ(a.bP);return No(a);}
function K7(a){var b,c;b=a.b3;c=b===null?0:b.fz;b=a.bP;return c-(b===null?0:b.fz)|0;}
function No(a){var b;b=a.bP;a.bP=b.b3;b.b3=a;Ek(a);Ek(b);return b;}
function OZ(a){var b;b=a.b3;a.b3=b.bP;b.bP=a;Ek(a);Ek(b);return b;}
function Ek(a){var b,c,d;b=a.b3;c=b===null?0:b.fz;b=a.bP;d=b===null?0:b.fz;a.fz=Bb(c,d)+1|0;a.fI=1;b=a.bP;if(b!==null)a.fI=1+b.fI|0;b=a.b3;if(b!==null)a.fI=a.fI+b.fI|0;}
var AEo=F();
function AGS(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Pl;c=c.buffer;d.fy=c;d.mt=new $rt_globals.Int8Array(c);d.j8=new $rt_globals.Uint16Array(c);d.sU=new $rt_globals.Int32Array(c);d.pE=new $rt_globals.Float32Array(c);d.pX=new $rt_globals.Float64Array(c);e=d.fy.byteLength;c=new M;O(c);T(G(c,B(285)),e);CG(N(c));e=b.callToCpp1();c=new M;O(c);T(G(c,B(286)),e);CG(N(c));f=b.callToCpp2();c=new M;O(c);Fl(G(c,B(287)),f);CG(N(c));c=Na(d,b.getC8String());g=new M;O(g);G(G(g,B(288)),c);CG(N(g));c
=Ni(d,b.getC16String());g=new M;O(g);G(G(g,B(289)),c);CG(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.fy,h,8));c=AC5(i);g=new M;O(g);G(G(g,B(290)),c);CG(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.fy,h,8));c=APX(j);g=new M;O(g);G(G(g,B(291)),c);CG(N(g));k=AA9(d,b.getCDoubleArray8(),8);l=ASH(k);c=new M;O(c);G(G(c,B(292)),l);CG(DU(c));l=ASv(b.getC8String(),B(293),d);c=L1();G(G(c,B(294)),l);CG(DU(c));l=AMu(b.getC16String(),B(295),
d);c=L1();G(G(c,B(296)),l);CG(DU(c));c=AOt(i,d,b.getCIntArray8(),E7([11,22,33,44,55,66,77,88]));g=L1();G(G(g,B(297)),c);CG(DU(g));c=AQc(j,d,b.getCFloatArray8(),100,E7([111,222,333,444,555,666,777,888]));g=L1();G(G(g,B(298)),c);CG(DU(g));b=AQt(k,d,b.getCDoubleArray8(),1000,E7([1111,2222,3333,4444,5555,6666,7777,8888]));c=L1();G(G(c,B(299)),b);CG(DU(c));}
function AQc(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(300);h=0;i=e;a:{while(h<g){if(Df(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.pE[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(301);}return B(302);}
function AQt(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(300);h=0;i=e;a:{while(h<g){if(Hm(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.pX[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(301);}return B(302);}
function AOt(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(300);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.sU[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(301);}return B(302);}
function ASv(b,c,d){var e,f,g,h;e=Na(d,b);if(!Bn(c,e))return B(303);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.mt[h])return B(304);f=f+1|0;}return B(301);}
function AMu(b,c,d){var e,f,g,h;e=Ni(d,b);if(!Bn(c,e))return B(303);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.j8[h>>>1|0]&65535))return B(304);f=f+1|0;}return B(301);}
function CG(b){Pi(B(2),b);}
function ALk(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function St(){C.call(this);this.oU=null;}
function AMR(a,b){return AEP(a.oU,b);}
function Sx(){C.call(this);this.uJ=null;}
function ARX(a,b){KT(a.uJ,b);}
function Sw(){C.call(this);this.mF=null;}
function AMS(a,b,c){return GH(a.mF,b,c);}
function Sv(){C.call(this);this.pV=null;}
function ARG(a){var b,c;b=a.pV.cM;BM(b);c=new QW;c.nJ=b;return c;}
function Su(){C.call(this);this.vC=null;}
function AQ4(a,b,c,d){return JO(a.vC.cM,c,d);}
function Sy(){C.call(this);this.ns=null;}
function AJV(a,b){b=b;return ZC(a.ns,b);}
function ADR(){IK.call(this);this.c9=null;}
function AMk(){var a=new ADR();AGN(a);return a;}
function Ff(a,b,c,d){var e=new ADR();AMj(e,a,b,c,d);return e;}
function AGN(a){SC(a);a.c9=new B4;}
function AMj(a,b,c,d,e){SC(a);a.c9=new B4;Gj(a,b,c,d,e);}
function G$(a){var b,c;b=a.t;c=a.c9;V(b,c.bk-c.bl|0,c.bG-c.bF|0);}
function Gn(a,b){HK(a,0,0,Ce(b),C8(b));}
function HK(a,b,c,d,e){CF(a.c9,b,c,d,e);}
function DF(a,b,c,d,e,f){var g;g=a.z;EJ(b,g.b+d|0,g.a+e|0,a.t,a.c9,c,a.bq,a.bu,f);}
function Gf(a,b){BB(a.bq,b);}
function HF(a,b){BB(a.bu,b);}
function Uh(){C.call(this);this.fo=null;}
function AOK(a,b){var c,d,e,f,g,h,i;c=a.fo;d=c.jZ;if(d!==null){e=c.dh.z;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.jZ=g;}d=b.h;f=d.b;c=c.gC;e=c.t;h=f-e.b|0;f=d.a-e.a|0;V(c.z,h,f);c=a.fo;d=c.ba.bS;b=b.h;f=0;a:{while(true){i=c.hb.data;if(f>=i.length)break;if(Et(i[f],b)){b=c.vS.data[f];break a;}f=f+1|0;}b=null;}Gw(d,b);return 1;}
function AQj(a,b,c,d){if(!c&&d==2){b=a.fo;Xi(b,b.dh);}return 1;}
function AIV(a,b,c){var d,e;d=Bx();e=new M;O(e);T(G(e,B(305)),c);Br(d,N(e));if(!c){d=b.h;b=a.fo;b.jZ=!Et(b.dh,d)?null:d;P7(a.fo.hn,d.b,d.a);b=a.fo;SQ(b.hn,JB(b.ba.bS));}return AXr;}
function AIv(a,b,c){var d;b=Bx();d=new M;O(d);T(G(d,B(306)),c);Br(b,N(d));return 1;}
function R6(){C.call(this);this.vE=null;}
function AOE(a,b){return Pc(a.vE,b);}
function R5(){C.call(this);this.oS=null;}
function ARf(a,b){return Pc(a.oS,b);}
function R8(){C.call(this);this.xA=null;}
function ARO(a,b,c){var d,e;Br(Bx(),B(307));d=!c?B(308):B(28);e=new M;O(e);G(G(G(e,B(309)),d),B(310));WM(b,N(e));return 1;}
function R7(){C.call(this);this.v5=null;}
function ARM(a){Br(Bx(),B(311));}
function R4(){C.call(this);this.w6=null;}
function AMY(a,b){Br(Bx(),B(312));return 1;}
function R3(){C.call(this);this.tK=null;}
function AKx(a,b,c,d){var e,f,g;b=a.tK;e=( -d|0)/10|0;b=b.dh;f=b.t;f.b=f.b+e|0;f.a=f.a+e|0;b=b.z;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function Hg(){var a=this;B4.call(a);a.gn=0;a.gq=0;a.go=0;a.gp=0;}
function CL(a){var b=new Hg();ASk(b,a);return b;}
function CM(a,b,c){var d=new Hg();AIn(d,a,b,c);return d;}
function Q(a){var b=new Hg();AQf(b,a);return b;}
function Fw(a,b,c,d){var e=new Hg();QU(e,a,b,c,d);return e;}
function BI(a){var b=new Hg();JV(b,a);return b;}
function ASk(a,b){QU(a,b,b,b,255);}
function AIn(a,b,c,d){QU(a,b,c,d,255);}
function AQf(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.gn=I7(L(b,1))*17|0;a.gq=I7(L(b,2))*17|0;a.go=I7(L(b,3))*17|0;a.gp=255;}else{a.gn=LJ(L(b,1),L(b,2));a.gq=LJ(L(b,3),L(b,4));a.go=LJ(L(b,5),L(b,6));a.gp=I(b)!=9?255:LJ(L(b,7),L(b,8));}HI(a.gn,a.gq,a.go,a.gp,a);return;}}
function QU(a,b,c,d,e){a.gn=b;a.gq=c;a.go=d;a.gp=e;HI(b,c,d,e,a);}
function JV(a,b){a.gn=b.gn;a.gq=b.gq;a.go=b.go;a.gp=b.gp;BB(a,b);}
function I7(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LJ(b,c){return (16*I7(b)|0)+I7(c)|0;}
function Vr(){var a=this;C.call(a);a.l9=null;a.ko=null;}
function AAd(){var a=this;C.call(a);a.fr=null;a.ci=null;a.et=null;a.gs=null;a.lG=null;a.cf=null;a.fQ=null;a.cT=0;a.eX=0;a.lZ=0;a.g7=0;a.fS=0;a.jC=null;a.jY=null;a.ts=null;}
function Zz(){var a=new AAd();ARP(a);return a;}
function ARP(a){a.ci=SH();a.et=new Bf;a.gs=new Bf;a.cf=AX7;a.g7=(-1);}
function K5(a,b){Ua(a);a.cf=b;}
function H9(a,b){a.fr=b;Ua(a);}
function If(a,b){var c,d,e,f,g;a.lG=b.jn;c=b.bi.hL;BB(a.ci.bq,c);c=b.il.km;BB(a.ci.bu,c);d=0;while(true){e=a.cf.data;if(d>=e.length)break;c=e[d];f=b.bi;c.jG=f;c=c.dt;g=f.lx;f=f.hL;BB(c.bq,g);BB(c.bu,f);d=d+1|0;}}
function TY(a){a.fQ=CH(a.fQ,null);V(a.et,0,0);a.cf=AX7;a.g7=(-1);Tu(a.ci);}
function G4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=IT(b);d=b.bQ;BM(a.fr);CA(c,a.fr);e=Kd(a.fr,1.25);f=0;a.cT=B9(2.0,d);a.eX=B9(3.0,d);a.lZ=B9(12.0,d);g=0;h=a.cf.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Ra(c,l.kI);n=a.lZ;n=(n+m|0)+n|0;f=Bb(f,n);b=l.dt;l=b.z;l.b=g;l.a=0;l=b.t;l.b=n;l.a=e;CF(b.c9,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.et;b.b=g;b.a=e;b=a.ci.t;n=a.fS;if(!n){m=a.cT;m=(g+m|0)+W(m,a.cf.data.length)|0;}else m=(f+(a.cT*2|0)|0)+(a.eX*2|0)|0;b.b=m;if(!n)e=e+(a.cT*2|0)|0;else{n=a.cT;e=(W(e+n|0,a.cf.data.length)
+n|0)+(a.eX*2|0)|0;}b.a=e;}
function J8(a,b,c){var d,e,f,g,h,i,j;V(a.ci.z,b,c);d=a.cT+a.eX|0;e=a.cf.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dt;j=i.z;j.b=b+d|0;j.a=c+h|0;if(!a.fS){if(!i.t.b)AE0();d=d+(i.t.b+a.cT|0)|0;}else{if(!i.t.a)AE0();h=h+(i.t.a+a.cT|0)|0;}g=g+1|0;}}
function AE0(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ec(a){var b,c;b=a.et;if(b.b&&b.a)return a.ci.t;c=new Bq;Bo(c,B(313));J(c);}
function Ua(a){V(a.et,0,0);}
function JM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cC;if(!a.cf.data.length)return;a:{if(a.fQ!==null){d=a.et;if(W(d.b,d.a))break a;}d=a.et;if(!W(d.b,d.a))G4(a,b);d=a.et;e=d.b;f=d.a;if(!W(e,f))return;d=CK(c,e,f);CA(d,a.fr);g=Kd(a.fr,0.125);h=a.fr;i=h.dB;j=g+i-(i+h.eu)/16.0;k=a.cf.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.kI,h.dt.c9.bl+a.lZ,j);l=l+1|0;}h=CH(a.fQ,CV(c));a.fQ=h;CN(h,d);FR(d);}if(!Me(a.ci)){d=a.ci;ADZ(c,d.t,d.z,d.bu,a.cT,a.gs);d=a.ci;h=d.t;m=d.z;d=d.bq;e=a.cT;n=a.gs;n.b=(h.b-e|0)-e|0;n.a=(h.a-
e|0)-e|0;Bu(c,m.b+e|0,m.a+e|0,n,d);if(a.fS){d=a.ci;ADc(c,d.t,d.z,0,0,Rz(a.lG,b.bQ),a.lG.ms,a.gs);}}k=a.cf.data;l=k.length;o=0;while(o<l){DF(k[o].dt,c,a.fQ,0,0,0.0);o=o+1|0;}b:{if(a.fS){k=a.cf.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dt;m=a.gs;e=(a.ci.t.b-(a.cT*2|0)|0)-(a.eX*2|0)|0;b=h.t;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.z;Bu(c,d.b+b.b|0,d.a,m,h.bu);}o=o+1|0;}}}}
function Ks(a,b,c){var d,e,f,g,h,i;d=Et(a.ci,b);e=!d?(-1):Vt(a,b);f=a.g7;if(f!=e){if(f>=0){g=a.cf.data[f];NX(g,0);if(a.ts!==null){f=a.g7;h=Bx();g=Cz(g);i=new M;O(i);G(G(T(G(i,B(314)),f),B(315)),g);Br(h,N(i));}}if(e>=0){h=a.cf.data[e];g=a.jY;if(g!==null)g.n5(b,e,h);NX(h,1);}a.g7=e;}return d&&Hl(c)?1:0;}
function Kj(a,b,c,d){var e,f;e=Vt(a,b);if(e>=0){f=a.cf.data[e];if(!ML(f))f.mz.p();}return 1;}
function Vt(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cf.data;if(c>=d.length)return (-1);e=d[c].dt;if(Et(e,b))return c;if(a.fS){f=e.z;g=f.b;e=e.t;h=e.b;g=g+h|0;i=f.a;f=a.gs;f.b=(a.ci.t.b-(a.cT*2|0)|0)-h|0;f.a=e.a;if(ZL(b,g,i,f))break;}c=c+1|0;}return c;}
function Tc(a){a.fS=1;}
function TK(){C.call(this);this.tS=null;}
function AO9(a,b){var c;c=a.tS;if(b.bj==32)TY(c.cL);return 0;}
function TN(){C.call(this);this.st=null;}
function AFx(a,b){var c,d,e,f;b=b;c=a.st;Br(Bx(),B(316));if(!DK(c.ef)){d=c.ef;b=b.h;e=NQ(4);f=new VP;f.yN=c;Gg(d,b,e,f);}return 1;}
function AEF(){var a=this;C.call(a);a.iJ=null;a.h1=0.0;}
function ES(a,b){var c=new AEF();AFn(c,a,b);return c;}
function AFn(a,b,c){a.iJ=b;a.h1=c;}
function ASP(a,b){if(a===b)return 1;if(b!==null&&Cp(a)===Cp(b)){b=b;return a.h1===b.h1&&C6(a.iJ,b.iJ)?1:0;}return 0;}
var TM=F();
function AKf(a){Br(Bx(),B(317));}
var TJ=F();
function AQw(a){Br(Bx(),B(318));}
function C$(){var a=this;C.call(a);a.dt=null;a.mz=null;a.jG=null;a.im=null;a.jX=null;a.kI=null;}
function ACr(a,b,c){var d=new C$();Ld(d,a,b,c);return d;}
function AUO(a,b,c,d,e){var f=new C$();AB1(f,a,b,c,d,e);return f;}
function Ld(a,b,c,d){AB1(a,b,c,d,null,null);}
function AB1(a,b,c,d,e,f){var g;g=AMk();a.dt=g;a.kI=c;a.jG=d;a.jX=f;a.mz=b;BB(g.bq,d.lx);BB(a.dt.bu,d.hL);a.im=e;}
function ML(a){return a.im===null?0:1;}
function NX(a,b){BB(a.dt.bu,!b?a.jG.hL:a.jG.pY);}
function OS(){C.call(this);this.v6=null;}
function AHt(a,b){return b.hD&&b.bj==32?1:0;}
function OT(){C.call(this);this.qK=null;}
function AQO(a,b){var c,d,e,f,g,h;b=b;c=a.qK;if(!DK(c.hq)){d=c.hq;b=b.h;e=R(C$,1);f=e.data;g=new C$;h=new VQ;h.pM=c;Ld(g,h,B(319),d.ho.bi);f[0]=g;Gg(d,b,FV(e),AXs);}return 1;}
var ACG=F();
function AAR(b){var c,d;c=CK(b,250,64);F5(c,B(257),25.0);LB(c,187,187,187);Ch(c,B(320),0.0,24.0);Ch(c,B(320),0.25,56.0);d=CV(b);CN(d,c);FR(c);return d;}
function Zy(b){var c;c=new Ws;c.gO=b;return c;}
function OU(){C.call(this);this.t9=null;}
function ANM(a,b,c,d){return Lk(a.t9,b,c,d);}
function AEq(){var a=this;C.call(a);a.lV=0;a.lX=0;}
function AQB(){var a=new AEq();ARp(a);return a;}
function ARp(a){var b,c;b=AEb(EF((AC9())));c=EF((AC9()))^(-559038737);a.lV=b;a.lX=c;c=0;while(c<19){R9(a);c=c+1|0;}}
function R9(a){var b,c;b=a.lV;c=a.lX;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.lV=c;a.lX=b;return b;}
function AEb(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function Ir(a,b){return 5.960464477539063E-8*(R9(a)&16777215)*b|0;}
function Uw(){C.call(this);this.mW=null;}
function ANq(a,b,c){var d;d=a.mW;if(b===0.0)KC(d,100);}
function Ux(){C.call(this);this.qE=null;}
function AFC(a,b){var c,d,e;c=a.qE;d=b.bj;if(d==32){c.jv=c.jv?0:1;e=1;}else if(d==13){KC(c,1);e=1;}else if(d!=8)e=0;else{Xb(c,1);e=1;}return e;}
var NB=F(0);
function AE7(b,c){var d;d=new VN;d.vF=b;d.vG=c;return d;}
function ADO(){var a=this;C.call(a);a.fR=null;a.gc=0;a.iS=0;a.gb=0;}
function AED(a){var b=new ADO();AJp(b,a);return b;}
function AJp(a,b){a.fR=Co();a.gb=0;a.iS=2048;a.gc=b;}
function Ho(a,b,c){var d,e,f,g,h,i,j;d=c.rg(b);e=a.iS;if(d>e){c=new Bq;f=new M;O(f);BE(T(G(T(G(f,B(321)),d),B(322)),e),41);Bo(c,N(f));J(c);}if(!a.gc){b=new BH;Bo(b,B(323));J(b);}a:{b=new B4;if(d){b:{c=a.fR;if(c.i>0){c=BU(c);g=d;while(true){if(!B6(c))break b;f=BX(c);if(f.bk>=g)break;}CF(b,f.bl,f.bF,g,a.gc);f.bl=f.bl+g;h=f.bk-g;f.bk=h;if(h===0.0)Wv(a.fR,f);break a;}}g=a.gb;i=d;CF(b,0.0,g,i,a.gc);c=a.fR;f=new B4;h=a.gb;g=a.iS-d|0;j=a.gc;f.bl=i;f.bF=h;f.bk=g;f.bG=j;BY(c,f);a.gb=a.gb+a.gc|0;}}return b;}
function Ip(a,b){var c,d,e,f,g,h,i;a:{c=ARE(b);b=a.fR;if(b.i>0){d=BU(b);while(true){if(!B6(d))break a;e=BX(d);if(e.bF===c.bF){f=e.bl;g=e.bk;h=f+g;i=c.bl;if(h===i){c.bl=f;c.bk=c.bk+g;Q_(d);}else{h=c.bk;if(i+h===f){c.bk=h+g;Q_(d);}}}}}}BY(a.fR,c);}
function Ml(a){return B2(a.iS,a.gb);}
function WW(){var a=this;C.call(a);a.rx=null;a.iW=null;}
function AHn(a,b,c){if(c)return AXr;return Fg(a.iW.gZ,b.h,a.rx,1);}
function AOU(a,b,c){return 1;}
function AIP(a,b){var c;c=a.iW;return Fr(c.gZ,b.h,c.tm);}
function Tg(){C.call(this);this.of=null;}
function AH8(a,b,c,d){var e,f;b=a.of;e=(MS(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.d$=Z(Bb(0,b.d$+W(e,f)|0),P8(b));return 1;}
function Ql(){C.call(this);this.uU=null;}
function APE(a,b){var c,d,e;c=a.uU;if(b.ck&&b.bj==79){if(!b.bH){b=c.ba.bS;d=new SK;d.u3=c;L3(b,d);}else{b=c.ba.bS;d=new SJ;d.xl=c;Wy(b,d);}e=1;}else e=0;return e;}
function RK(){C.call(this);this.wA=null;}
function AF6(a,b){var c,d,e,f;c=b.data;b=Bx();d=Cz(c[0]);e=new M;O(e);G(G(e,B(278)),d);Br(b,N(e));b=Bx();f=c[1];d=new M;O(d);G(G(d,B(324)),f);Br(b,N(d));}
function RJ(){C.call(this);this.ys=null;}
function ASu(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bx();e=Cz(c[0]);f=new M;O(f);G(G(f,B(278)),e);Br(d,N(f));g=FK(Sl(b,1));b=Bx();d=Cz(c[1]);if(g===null)c=B(29);else{c=new M;O(c);BZ(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BZ(c,B(44));BE(c,i[h]);h=h+1|0;}BZ(c,B(45));c=N(c);}e=new M;O(e);G(G(G(G(e,B(325)),d),B(326)),c);Br(b,N(e));}
function RI(){C.call(this);this.oP=null;}
function AIs(a,b){U1(a.oP,b);}
function RH(){C.call(this);this.wj=null;}
function ANG(a,b){var c,d,e,f,g;c=b.data;d=Bx();e=Cz(c[0]);f=new M;O(f);G(G(f,B(278)),e);Br(d,N(f));g=D$(Sl(b,1));b=Bx();d=Cz(c[1]);c=AC5(g);e=new M;O(e);G(G(G(G(e,B(327)),d),B(328)),c);Br(b,N(e));}
function RF(){C.call(this);this.xn=null;}
function AMM(a,b){var c,d;c=EX();b=Cz(b);d=new M;O(d);G(G(d,B(329)),b);Br(c,N(d));b=new Fj;X(b);J(b);}
function RE(){C.call(this);this.qC=null;}
function AOS(a,b){var c,d,e,f;c=a.qC;d=c.ba.bS;e=new Om;e.rI=c;f=R(C,1);f.data[0]=b;CP(d,e,B(330),f);}
function Ug(){C.call(this);this.ll=null;}
function AQQ(a,b){var c,d,e,f,g,h;c=a.ll;d=c.lL;if(d!==null){e=c.dW.z;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.lL=g;}b=b.h;f=b.b;c=c.e2;d=c.t;f=f-d.b|0;h=b.a-d.a|0;V(c.z,f,h);return 1;}
function AMQ(a,b,c){var d;if(!c){d=b.h;b=a.ll;if(!Et(b.dW,d))d=null;b.lL=d;}return AXr;}
var C0=F(0);
var AXL=null;var AXh=null;var AXM=null;var AXg=null;var AXO=null;var AXN=null;var AXQ=null;var AXP=null;var AXS=null;var AXR=null;var AXT=null;function FN(){FN=Bm(C0);AJL();}
function AJL(){AXL=CL(187);AXh=Q(B(331));AXM=CL(55);AXg=CL(43);AXO=CM(33,66,131);AXN=CM(60,63,65);AXQ=Q(B(332));AXP=Q(B(333));AXS=Fw(85,85,85,128);AXR=Fw(43,43,43,0);AXT=Q(B(255));}
function UH(){var a=this;C.call(a);a.qg=null;a.jw=null;}
function ANV(a,b,c){var d;if(!c){d=Fg(a.jw.hT,b.h,a.qg,1);if(d!==null)return d;}return AXr;}
function AHp(a,b,c){return 1;}
function AGh(a,b){var c;c=a.jw;return Fr(c.hT,b.h,U7(c.ba.bS));}
function N$(){C.call(this);this.ub=null;}
function AF$(a,b,c,d){var e,f;b=a.ub;e=(MS(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eM=Z(Bb(0,b.eM+W(e,f)|0),Sc(b));return 1;}
function SV(){C.call(this);this.r_=null;}
function AQV(a,b){var c,d;a:{c=a.r_;switch(b.bj){case 67:MN(c);d=1;break a;case 86:RB(c);d=1;break a;default:}d=0;}return d;}
var SU=F();
function AIQ(a,b,c){return 0;}
function SS(){C.call(this);this.pO=null;}
function AQk(a,b,c){var d,e;d=a.pO;c=d.dH+1|0;d.dH=c;d=Ia(E(IF));e=new M;O(e);G(G(T(e,c),B(334)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));WM(b,e);return 1;}
var SR=F();
function AOe(a){return null;}
function ST(){C.call(this);this.nz=null;}
function AHf(a){var b,c;b=a.nz;c=new Qb;c.sh=b;return c;}
function Sn(){C.call(this);this.yf=null;}
function AIX(a,b){return 0;}
function QM(){C.call(this);this.yc=null;}
function AJw(a,b){return b.hD&&b.bj==32?1:0;}
function QN(){C.call(this);this.qN=null;}
function AFD(a,b){var c,d,e,f,g,h;b=b;c=a.qN;if(!DK(c.gT)){d=c.gT;b=b.h;e=R(C$,1);f=e.data;g=new C$;h=new RR;h.m2=c;Ld(g,h,B(319),d.ho.bi);f[0]=g;Gg(d,b,FV(e),AXs);}return 1;}
function QO(){C.call(this);this.sb=null;}
function APg(a,b,c,d){return Lk(a.sb,b,c,d);}
function ABz(){var a=this;C.call(a);a.hY=null;a.li=null;a.fl=null;a.yJ=null;}
function AJZ(a){var b=new ABz();AQU(b,a);return b;}
function AU8(a,b,c,d){var e=new ABz();AB4(e,a,b,c,d);return e;}
function AQU(a,b){AB4(a,null,null,b,null);}
function AB4(a,b,c,d,e){a.hY=b;a.li=c;a.fl=d;a.yJ=e;}
function ARs(a,b){var c;if(a===b)return 1;if(b!==null&&Cp(a)===Cp(b)){c=b;return C6(a.hY,c.hY)&&C6(a.li,c.li)&&C6(a.fl,c.fl)?1:0;}return 0;}
var CX=F(0);
var AWI=null;var AX8=null;var AWK=null;var AWJ=null;var AWM=null;var AWL=null;var AWO=null;var AWN=null;var AWQ=null;var AWP=null;var AWR=null;function ANw(){ANw=Bm(CX);AMx();}
function AMx(){AWI=CL(206);AX8=Q(B(335));AWK=Q(B(336));AWJ=Q(B(113));AWM=Q(B(337));AWL=Q(B(338));AWO=Q(B(339));AWN=Q(B(340));AWQ=Fw(107,106,107,128);AWP=Fw(30,31,34,0);AWR=Q(B(115));}
function Cb(){Cj.call(this);this.kO=null;}
var AX9=null;var AX$=null;var AX_=null;var AYa=null;var AYb=null;var AYc=null;var AYd=null;var AYe=null;var AYf=null;var AYg=null;var AYh=null;var AYi=null;var AYj=null;var AYk=null;var AYl=null;var AWS=null;function ABU(){ABU=Bm(Cb);AG1();}
function Dy(a,b,c){var d=new Cb();XL(d,a,b,c);return d;}
function ATz(a,b,c,d){var e=new Cb();QS(e,a,b,c,d);return e;}
function XL(a,b,c,d){ABU();C_(a,b,c);a.kO=Iu(d,null);}
function QS(a,b,c,d,e){ABU();C_(a,b,c);a.kO=Iu(d,e);}
function AG1(){var b,c;b=new Cb;ANw();XL(b,B(341),0,AX8);AX9=b;AX$=Dy(B(342),1,Q(B(343)));AX_=Dy(B(344),2,Q(B(345)));AYa=Dy(B(48),3,Q(B(346)));AYb=Dy(B(347),4,AX8);AYc=Dy(B(348),5,Q(B(349)));AYd=Dy(B(350),6,Q(B(351)));AYe=Dy(B(49),7,Q(B(352)));AYf=Dy(B(353),8,Q(B(354)));c=new Cb;FN();QS(c,B(355),9,AXh,Q(B(339)));AYg=c;AYh=ATz(B(356),10,AXh,Q(B(116)));AYi=Dy(B(357),11,Q(B(358)));AYj=Dy(B(359),12,Q(B(360)));AYk=Dy(B(361),13,AX8);b=Dy(B(362),14,Q(B(363)));AYl=b;AWS=H(Cb,[AX9,AX$,AX_,AYa,AYb,AYc,AYd,AYe,AYf,AYg,
AYh,AYi,AYj,AYk,b]);}
function IP(){var a=this;C.call(a);a.nQ=null;a.nM=null;}
function Iu(a,b){var c=new IP();ALZ(c,a,b);return c;}
function ALZ(a,b,c){a.nQ=b;a.nM=c;}
function HH(){var a=this;C.call(a);a.vO=null;a.pN=null;a.u5=null;a.r9=null;a.qt=null;a.ji=null;}
function AYm(a,b,c,d,e,f){var g=new HH();J4(g,a,b,c,d,e,f);return g;}
function J4(a,b,c,d,e,f,g){a.vO=b;a.pN=c;a.u5=d;a.r9=e;a.qt=f;a.ji=g;}
function ADn(){var a=this;C.call(a);a.km=null;a.rn=null;a.qs=null;}
function ZH(a,b,c){var d=new ADn();AOX(d,a,b,c);return d;}
function AOX(a,b,c,d){a.km=b;a.rn=c;a.qs=d;}
function GB(){var a=this;C.call(a);a.lx=null;a.hL=null;a.pY=null;}
function AYn(a,b,c){var d=new GB();Ht(d,a,b,c);return d;}
function Ht(a,b,c,d){a.lx=b;a.hL=c;a.pY=d;}
function AB6(){var b,c;b=new GB;c=Q(B(364));Ym();Ht(b,c,AXW,AXX);return b;}
function AA5(){var b,c;b=new GB;c=Q(B(118));AKm();Ht(b,c,AYo,AYp);return b;}
function Zq(){var b,c;b=new GB;ACa();c=AYq;APk();Ht(b,c,AYr,AYs);return b;}
function AFb(){var a=this;C.call(a);a.ms=null;a.rF=0;}
function Z0(a,b){var c=new AFb();ASb(c,a,b);return c;}
function ASb(a,b,c){var d;d=new B4;a.ms=d;a.rF=b;d.bG=c;}
function Rz(a,b){return B9(a.rF,b);}
var DT=F(0);
var AWW=null;var AWX=null;var AWT=null;var AWU=null;var AWV=null;var AYo=null;var AYp=null;var AWY=null;var AWZ=null;function AKm(){AKm=Bm(DT);ANH();}
function ANH(){AWW=Q(B(338));AWX=Q(B(365));AWT=Q(B(118));AWU=Q(B(351));AWV=Q(B(335));AYo=Q(B(338));AYp=Q(B(366));AWY=Q(B(367));AWZ=CM(43,45,48);}
var O0=F(0);
var Pj=F();
function AJC(a,b,c){var d,e;d=b;e=c;b=new M;O(b);T(G(T(G(b,B(368)),d),B(369)),e);CG(N(b));return d+e|0;}
var O1=F(0);
var Ph=F();
function AKP(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fl(G(Fl(G(b,B(370)),d),B(369)),e);CG(N(b));return d+e;}
var Z7=F();
var Y$=F(0);
function Jz(){var a=this;C.call(a);a.d8=null;a.e1=null;a.fD=null;}
var AWl=0;function ACZ(a){var b;b=a.e1;if(b!==null){AWl=AWl-1|0;a.d8.dv.deleteTexture(b);a.e1=null;}}
function Ce(a){return a.fD.b;}
function C8(a){return a.fD.a;}
function T9(a,b,c,d){var e;e=a.fD;e.b=b;e.a=c;L_(a);a.d8.dv.texStorage2D(3553,1,d,b,c);e=a.d8.dv;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function L_(a){var b,c;b=a.d8.dv;c=a.e1;b.bindTexture(3553,c);}
function CN(a,b){Nr(a,b.lY,b.k7,32856);P2(a,b,0,0);}
function Nr(a,b,c,d){var e,f,g,h;a:{e=a.fD;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){L_(a);break a;}e=a.d8.dv;h=a.e1;e.deleteTexture(h);a.e1=a.d8.dv.createTexture();T9(a,b,c,d);break a;}}T9(a,b,c,d);}}
function H6(a,b,c,d){L_(a);P2(a,b,c,d);}
function P2(a,b,c,d){var e;e=a.d8.dv;b=b.jQ;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function Ub(){C.call(this);this.kl=null;}
var AX7=null;function P9(){var a=new Ub();ABn(a);return a;}
function ABn(a){a.kl=Co();}
function D7(a,b,c,d){PN(a,ACr(d,b,c));}
function D8(b,c,d){return ACr(d,b,c);}
function GO(a,b,c,d){JK(a,b,c,d,null);}
function JK(a,b,c,d,e){PN(a,AUO(null,b,c,d,e));}
function PN(a,b){BY(a.kl,b);}
function Hv(a){return FV(HP(a.kl,AX7));}
function Y2(){AX7=R(C$,0);}
var DS=F(0);
var AX3=null;var AX4=null;var AX0=null;var AX1=null;var AX2=null;var AXW=null;var AXX=null;var AX5=null;var AX6=null;function Ym(){Ym=Bm(DS);AQg();}
function AQg(){AX3=Q(B(371));AX4=Q(B(372));AX0=Q(B(364));AX1=Q(B(373));AX2=Q(B(331));AXW=Q(B(371));AXX=Q(B(372));AX5=Fw(118,121,122,128);AX6=CM(63,66,68);}
var Gs=F(0);
var XD=F();
function APw(a,b,c,d){var e;b=Bx();d=Cz(d);e=new M;O(e);G(G(T(G(e,B(374)),c),B(315)),d);Br(b,N(e));}
var XE=F();
function Ws(){C.call(this);this.gO=null;}
function AFJ(a,b){return KE(a.gO,b);}
function APy(a,b,c,d){return Jw(a.gO,b,c,d);}
function ANu(a,b,c){return Jr(a.gO,b,c);}
function AKY(a,b,c){return DK(a.gO);}
function YD(){C.call(this);this.r7=null;}
function AOV(a,b){var c;c=a.r7.iW;c.d$=FO(b,P8(c));}
var AB9=F();
function PS(){C.call(this);this.nu=null;}
function AK6(a,b){var c;c=a.nu.jw;c.eM=FO(b,Sc(c));}
function Qy(){C.call(this);this.yb=null;}
function AK_(a,b){return 0;}
function RT(){C.call(this);this.mM=null;}
function AFN(a,b){return DD(a.mM,null);}
var AAk=F();
function Ci(){Cj.call(this);this.lz=null;}
var AYt=null;var AYu=null;var AYv=null;var AYw=null;var AYx=null;var AYy=null;var AYz=null;var AYA=null;var AYB=null;var AYC=null;var AYD=null;var AYE=null;var AYF=null;var AYG=null;var AYH=null;var AXU=null;function ACm(){ACm=Bm(Ci);AR8();}
function DL(a,b,c){var d=new Ci();Yj(d,a,b,c);return d;}
function AQ5(a,b,c,d){var e=new Ci();AB3(e,a,b,c,d);return e;}
function Yj(a,b,c,d){ACm();C_(a,b,c);a.lz=Iu(d,null);}
function AB3(a,b,c,d,e){ACm();C_(a,b,c);a.lz=Iu(d,e);}
function AR8(){var b;b=new Ci;FN();Yj(b,B(341),0,AXh);AYt=b;AYu=DL(B(342),1,Q(B(375)));AYv=DL(B(344),2,Q(B(376)));AYw=DL(B(48),3,Q(B(377)));AYx=DL(B(347),4,Q(B(375)));AYy=DL(B(348),5,CM(188,63,60));AYz=DL(B(350),6,Q(B(378)));AYA=DL(B(49),7,Q(B(379)));AYB=DL(B(353),8,Q(B(380)));AYC=AQ5(B(355),9,AXh,CM(52,65,52));AYD=AQ5(B(356),10,Q(B(381)),Q(B(382)));AYE=DL(B(357),11,Q(B(383)));AYF=DL(B(359),12,Q(B(384)));AYG=DL(B(361),13,AXh);b=DL(B(362),14,Q(B(363)));AYH=b;AXU=H(Ci,[AYt,AYu,AYv,AYw,AYx,AYy,AYz,AYA,AYB,AYC,
AYD,AYE,AYF,AYG,b]);}
var AEv=F();
function ID(b,c){var d,e,f;if(c<=0)return B(31);d=BP(c);e=d.data;e[0]=ADh(Ir(b,52));f=1;while(f<c){e[f]=ADh(Ir(b,62));f=f+1|0;}return FY(d);}
function ADh(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AA7=F();
function AEY(){var a=this;C.call(a);a.EY=null;a.CA=null;a.DK=0;a.Df=0;}
var AEh=F(0);
function AD1(b){var c;a:{switch(b){case 0:break;case 1:c=B(168);break a;case 2:c=B(221);break a;case 3:c=B(220);break a;default:c=null;break a;}c=B(190);}return c;}
var CS=F();
var ACy=F(CS);
var ADf=F(CS);
var AAa=F(CS);
var AAu=F(CS);
var ADP=F(CS);
function UM(){C.call(this);this.tN=null;}
function AMr(a){var b;b=a.tN;Br(Bx(),b);}
var ZE=F();
function B9(b,c){return Df(b*c);}
function H$(){var a=this;C.call(a);a.f1=0;a.lp=null;}
var AAQ=F();
function Wn(){C.call(this);this.jF=null;}
function APY(a,b){var c,d,e,f,g;c=a.jF;d=c.kc;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.iz;e.b=Ew(0,e.b+f|0,c.gJ.b-c.hJ.b|0);c=a.jF;d=c.iz;d.a=Ew(0,d.a+g|0,c.gJ.a-c.hJ.a|0);}a.jF.kc=b.h;return 1;}
var AA2=F();
var IS=F(Bq);
function M3(){C.call(this);this.p_=null;}
function AP$(a,b){HM(a.p_,b);}
function Wx(){C.call(this);this.i1=null;}
function ASj(a){return a.i1;}
function AE5(){var a=this;C.call(a);a.bs=null;a.U=null;a.Q=null;a.ep=null;}
function ACd(a){var b=new AE5();ASh(b,a);return b;}
function ASh(a,b){var c;a.Q=ATi();a.bs=b;c=new T0;LG(c);c.lS=new B4;c.g3=b;a.U=c;}
function IN(a,b,c,d){var e,f,g,h;e=a.U;f=C6(e.gK,c)?0:1;g=C6(e.g8,b)?0:1;h=d===e.i_?0:1;if(f){e.gK=c;e.d5=null;Yd(e,0);}e.gR=!f&&!g&&!h?0:1;e.g8=b;e.i_=d;e.hQ=0;Ka(a);}
function J6(a){var b;b=a.U;b.de=CH(b.de,null);a.Q=CH(a.Q,null);}
function LY(a,b){var c,d,e;c=a.Q;d=c.G;e=c.q;b=CH(c,b);a.Q=b;b.jf(d,e,a.bs.bQ);}
function Fo(a,b,c){var d;d=a.Q;d.jf(b,c,d.d6);Ka(a);}
function Ka(a){var b,c,d,e;b=a.U;c=a.Q.q.b;b.q.b=c;d=b.de;if(d!==null&&c!=Ce(d)&&!(c>=b.hQ&&Ce(b.de)>=b.hQ))b.gR=1;b=a.U;b.d6=a.bs.bQ;if(Uo(b))c=0;else{b=a.U;Rm(b);e=CD(b.g3,b.i_);Yd(b,E3(b.d5)+(e*2|0)|0);c=b.q.a;}b=a.U.G;d=a.Q.G;V(b,d.b,d.a-c|0);}
function JQ(b,c){if(b<0)c=B(385);else if(b>0)c=B(386);return c;}
function Or(a,b,c){var d;d=a.U.G.b;return (d-c|0)<=b&&b<d?1:0;}
function Ud(a,b,c){var d,e;d=a.U;e=d.G.b+d.q.b|0;return e<=b&&b<(e+c|0)?1:0;}
function PJ(a,b,c){var d;d=a.U.G.a;return (d-c|0)<=b&&b<d?1:0;}
function Qt(a,b,c){var d,e;d=a.Q;e=d.G.a+d.q.a|0;return e<=b&&b<(e+c|0)?1:0;}
function M9(a,b,c){var d,e,f;d=a.U.G.a-c|0;e=a.Q;f=(e.G.a+e.q.a|0)+c|0;return d<=b&&b<f?1:0;}
function Se(a,b,c){var d,e;d=a.U.G.a+c|0;e=a.Q;return ADk(b,d,(e.G.a+e.q.a|0)-c|0);}
function V$(a,b,c){var d,e,f;d=a.U;e=d.G.b;f=e-c|0;e=(e+d.q.b|0)+c|0;return f<=b&&b<e?1:0;}
function Vj(a,b,c){var d,e;d=a.U;e=d.G.b;return ADk(b,e+c|0,(e+d.q.b|0)-c|0);}
function ADk(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BF(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Ie(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bf;f=new Bf;g=b.b;h=b.a;b=a.Q;i=b.G;j=i.b;k=i.a;b=b.q;l=b.b;m=b.a;b=new X4;b.ox=a;b.ow=e;b.ou=f;b.ot=c;b.oB=g;b.oA=j;b.oz=l;b.oy=d;b.oD=h;b.oC=k;b.sC=m;return b;}
var ACv=F(0);
var LL=F(0);
function RL(){C.call(this);this.pl=null;}
function AM9(a,b){return Ra(a.pl,b);}
var QJ=F();
function ARv(a,b){ACZ(b);}
var YQ=F();
function ADZ(b,c,d,e,f,g){g.b=c.b;g.a=f;Bu(b,d.b,d.a,g,e);Bu(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bu(b,d.b,d.a+f|0,g,e);Bu(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ADc(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bu(b,j,k,i,h);Bu(b,j,k,i,h);Bu(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bu(b,l,j,i,h);Bu(b,l,j,i,h);Bu(b,l+g|0,j+g|0,i,h);}
function Nu(){var a=this;C.call(a);a.b5=null;a.je=null;a.eJ=null;a.dT=0;a.bo=0;a.gu=null;a.fU=null;a.fX=0;}
function Tw(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dT;i=W(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bb(i,e))a:{while(true){if(d<=e){j=d;break a;}Ex(c);j=d+(-1)|0;b=C5(d);d=W(j,a.bo)%a.eJ.a|0;Ga(a,c,b,a.fX,g);H6(a.b5,c,0,d);if(!(j%a.dT|0))break;d=j;}}else{Ex(b);k=a.dT-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Ga(a,b,C5(j),W(a.bo,k)+a.fX|0,g);k=k+(-1)|0;j=h;}CN(a.b5,b);j=Bb(i,e);}return j;}k=a.dT;h=W(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Z(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Ex(c);b=C5((d+f|0)+1|0);j=d+1|0;d
=W(d,a.bo)%a.eJ.a|0;Ga(a,c,b,a.fX,g);H6(a.b5,c,0,d);if(!(j%a.dT|0))break;d=j;}}else{Ex(b);d=0;while(d<a.dT){h=h+1|0;Ga(a,b,C5((h>e?h-f|0:h)+f|0),W(a.bo,d)+a.fX|0,g);d=d+1|0;}CN(a.b5,b);j=Z(i,e);}return j;}
function ZP(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;a:{i=a.eJ.a;j=((a.je.a-(d%e|0)|0)+e|0)%e|0;k=f.hf;l=(d+j|0)/a.bo|0;m=j+i|0;n=BF(m,c);if(n<=0){V(a.gu,Ce(a.b5),a.bo);n=0;while(true){d=a.bo;if(n>=(i/d|0))break;CF(a.fU,0.0,W(n,d),Ce(a.b5),a.bo);o=Tj(f,g,l+n|0,k);Jb(a,h,j+W(n,a.bo)|0,b,k.iy,o);n=n+1|0;}}else{b:{if(n>0&&j<c){p=Bb(c-j|0,0);i=a.bo;q=p/i|0;if(p%i|0)q=q+1|0;V(a.gu,Ce(a.b5),a.bo);n=0;while(true){if(n>=q)break b;CF(a.fU,0.0,W(n,a.bo),Ce(a.b5),a.bo);o=Tj(f,g,l+n|0,k);Jb(a,h,j+W(n,a.bo)|0,b,k.iy,o);n=
n+1|0;}}}if(m>e){c=Z(m%e|0,c);V(a.gu,Ce(a.b5),a.bo);e=d%C8(a.b5)|0;i=a.bo;m=e/i|0;q=m+(c/i|0)|0;if(c%i|0)q=q+1|0;n=m;while(true){if(n>=q)break a;CF(a.fU,0.0,W(n,a.bo),Ce(a.b5),a.bo);c=d/a.bo|0;e=n-m|0;o=Tj(f,g,c+e|0,k);c=a.bo;Jb(a,h,W(e,c)-(d%c|0)|0,b,k.iy,o);n=n+1|0;}}}}}
function Tj(b,c,d,e){c=c.data;return d<c.length&&c[d]?HG(b.du,b,c[d]):e.jc;}
function Jb(a,b,c,d,e,f){EJ(b,a.je.b+d.b|0,c+d.a|0,a.gu,a.fU,a.b5,e,f,0.0);}
function Ga(a,b,c,d,e){Ch(b,c,a.eJ.b-20.0*e,d);}
function Yk(){C.call(this);this.t1=null;}
function AN_(a,b){var c,d,e;c=a.t1;if(c.e.f.cw==c.lb){b=b.data;d=D$(b[0]);e=FK(b[1]);ABS(c.e.f,d,e);PC(c.e.f);}}
var Y7=F();
function F$(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function ZL(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function AD3(){var a=this;C.call(a);a.bx=0;a.bI=0;}
function EU(a,b){var c=new AD3();ALN(c,a,b);return c;}
function ALN(a,b,c){a.bx=b;a.bI=c;}
function AFU(a,b){var c;if(a===b)return 1;if(b!==null&&Cp(a)===Cp(b)){c=b;return a.bx==c.bx&&a.bI==c.bI?1:0;}return 0;}
function APf(a){var b,c,d,e,f,g,h;b=R(C,2).data;b[0]=F3(a.bx);b[1]=F3(a.bI);c=(-1515898884);d=0;while(d<b.length){e=b[d];if(e===null)f=0;else{g=e.fG;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;c=Kl(h,4)^((h>>>7|0)|h<<25)^Kl(c,13);d=d+1|0;}return c;}
function AON(a,b){var c;b=b;c=BF(a.bx,b.bx);if(!c)c=BF(a.bI,b.bI);return c;}
function R2(){C.call(this);this.tg=null;}
function AM5(a,b){var c;c=a.tg;TS(c,EV(c,b.h));KU(c.r,c.w,c.y);GY(c);}
var SP=F(0);
var AXr=null;function ACW(){AXr=new QB;}
var FP=F(IA);
var XB=F(EI);
function Qx(){C.call(this);this.m3=null;}
function AOa(a,b){var c,d;c=a.m3;d=c.dH+1|0;c.dH=d;c=new M;O(c);G(G(T(c,d),B(387)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function UF(){C.call(this);this.qh=null;}
function AQL(a){var b,c;b=a.qh;c=new M;O(c);G(G(G(c,B(388)),b),B(389));$rt_globals.console.info($rt_ustr(N(c)));}
var Mj=F(DW);
var AYI=0.0;var AYJ=null;function ACY(){AYI=$rt_globals.NaN;AYJ=E($rt_floatcls());}
var FC=F();
var AVV=null;var AVX=null;var AVY=null;var AVW=null;var AVU=null;function ABE(){AVV=E7([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AVX=AHk([Be(1),Be(10),Be(100),Be(1000),Be(10000),Be(100000),Be(1000000),Be(10000000),Be(100000000),Be(1000000000),Cc(1410065408, 2),Cc(1215752192, 23),Cc(3567587328, 232),Cc(1316134912, 2328),Cc(276447232, 23283),Cc(2764472320, 232830),Cc(1874919424, 2328306),Cc(1569325056, 23283064),Cc(2808348672, 232830643)]);AVY=AHk([Be(1),Be(10),Be(100),Be(10000),Be(100000000),
Cc(1874919424, 2328306)]);AVW=new UD;AVU=new VX;}
var Ke=F();
var AYK=null;var AYL=null;function ACp(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.nW=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kM=0;c.kt=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Fc(CW(Be(e),Be(8388608)),Ep)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=ACx(AYL,f);if(h<0)h=( -h|0)-2|0;i=AYL.data;j=9+(f-i[h]|0)|0;k=Be(e);l=AYK.data;m=EF(D9(BQ(k,Be(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=EF(D9(BQ(k,Be(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BF(q,r);e=e>0?W(m/q|0,q):e<0?W(m/r|0,r)+r|0:W((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.kM=e;c.kt=h-50|0;}
function AAL(){var b,c,d,e,f,g,h,i;AYK=BG(100);AYL=BG(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AYK.data;g=d+50|0;f[g]=$rt_udiv(e,20);AYL.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:EF(Cr(Be(h),Gt(BQ(Be(b&((1<<i)-1|0)),Be(10)),i)));f=AYK.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AYL.data[i]=c;d=d+1|0;}}
function VX(){var a=this;C.call(a);a.kM=0;a.kt=0;a.nW=0;}
function Mc(){var a=this;C.call(a);a.wH=null;a.mQ=0.0;a.w4=0.0;a.e4=null;a.g0=null;a.l1=null;a.fc=0;}
function AEi(a,b){var c;if(b!==null){a.g0=b;return a;}c=new BH;Bo(c,B(390));J(c);}
function ACD(a,b){var c;if(b!==null){a.l1=b;return a;}c=new BH;Bo(c,B(390));J(c);}
function Qe(a,b,c,d){var e,f,g,$$je;e=a.fc;if(!(e==2&&!d)&&e!=3){a.fc=d?2:1;while(true){try{f=AEl(a,b,c);}catch($$e){$$je=Ei($$e);if($$je instanceof Bq){g=$$je;J(AH_(g));}else{throw $$e;}}if(Hc(f))return f;if(Im(f)){if(d&&DO(b)){g=a.g0;Hf();if(g===AWu)return D2(B7(b));if(B7(c)<=I(a.e4))return AWx;EG(b,b.W+B7(b)|0);if(a.g0===AWv)Kf(c,a.e4);}return f;}if(QR(f)){g=a.g0;Hf();if(g===AWu)return f;if(g===AWv){if(B7(c)<I(a.e4))return AWx;Kf(c,a.e4);}EG(b,b.W+Kk(f)|0);}else if(Ma(f)){g=a.l1;Hf();if(g===AWu)break;if(g
===AWv){if(B7(c)<I(a.e4))return AWx;Kf(c,a.e4);}EG(b,b.W+Kk(f)|0);}}return f;}b=new D1;X(b);J(b);}
function ZU(a,b){var c,d,e,f;c=a.fc;if(c&&c!=3){b=new D1;X(b);J(b);}if(!B7(b))return AEN(0);if(a.fc)a.fc=0;d=AEN(Bb(8,B7(b)*a.mQ|0));while(true){e=Qe(a,b,d,0);if(Im(e))break;if(Hc(e))d=S7(a,d);if(!KV(e))continue;VT(e);}b=Qe(a,b,d,1);if(KV(b))VT(b);while(true){f=a.fc;if(f!=3&&f!=2)break;a.fc=3;if(Im(AWy)){d.dx=d.W;d.W=0;d.hu=(-1);return d;}d=S7(a,d);}b=new D1;X(b);J(b);}
function S7(a,b){var c,d,e;c=b.hk;d=NP(c,Bb(8,c.data.length*2|0));e=ABO(d,0,d.data.length);EG(e,b.W);return e;}
var ABm=F(CS);
function QW(){C.call(this);this.nJ=null;}
function AJ5(a,b){Dt(a.nJ,b);}
function We(){C.call(this);this.o1=null;}
function ASw(a,b){var c,d;c=a.o1;d=c.dH+1|0;c.dH=d;c=b.hy;b=new M;O(b);G(G(T(b,d),B(391)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var QB=F();
function ANf(a,b){}
function EL(){var a=this;C.call(a);a.G=null;a.q=null;a.d6=0.0;}
function ATi(){var a=new EL();LG(a);return a;}
function LG(a){a.G=new Bf;a.q=new Bf;}
function ANK(a){}
function ARy(a){return B2(0,0);}
function P_(a,b,c,d){var e;if(!Lh(a.G,b)){a.kr(b);Cu(a.G,b);}if(!Lh(a.q,c)){a.kh(c);Cu(a.q,c);}e=a.d6;if(e!==d){a.d6=d;a.pZ(e,d);}}
function DI(a,b){return F$(b,a.G,a.q);}
function ZV(a,b){var c,d,e,f;c=a.G;d=c.b;e=c.a;f=a.q;Ym();Bu(b,d,e,f,AXW);}
function Wf(a,b){var c;c=a.G;LK(b,c.b,c.a,a.q);}
function AQH(a,b){return 0;}
function AIU(a,b){}
function AQp(a,b){}
function ASC(a,b,c){}
function AQY(a,b,c,d){return 0;}
function AQe(a,b,c){return null;}
function ARl(a,b,c){return 0;}
function AM3(a,b){return 0;}
function AIM(a,b,c,d){return 0;}
function GG(){var a=this;EL.call(a);a.cI=null;a.bz=null;a.fa=null;}
function AYM(){var a=new GG();Uf(a);return a;}
function Uf(a){LG(a);a.cI=new Bf;a.bz=new Bf;}
function AFH(a,b){a.fa=b;}
function AEO(a){var b;b=a.bz;b.b=L7(a,b.b);b=a.bz;b.a=Kw(a,b.a);}
function Vy(a,b){a.bz.b=L7(a,b);}
function RC(a,b){a.bz.a=Kw(a,b);}
function ACM(a,b,c){a.bz.b=L7(a,b);a.bz.a=Kw(a,c);}
function Kw(a,b){return Bb(0,Z(b,a.cI.a-a.q.a|0));}
function L7(a,b){return Bb(0,Z(b,a.cI.b-a.q.b|0));}
function Rk(){var a=this;GG.call(a);a.cy=null;a.dA=null;a.fT=null;a.qV=null;a.dN=null;a.b4=null;a.d0=null;a.fg=null;a.da=0;a.eO=0;a.mL=null;a.dV=0;a.dX=0;a.f7=0;a.e_=0;a.fF=0;a.cD=0;a.d1=null;a.iU=null;a.nX=null;a.gN=null;}
function AU0(a,b){var c=new Rk();AAT(c,a,b);return c;}
function AAT(a,b,c){Uf(a);a.dA=SH();a.fT=new Bf;a.b4=AYN;a.d0=R(H7,0);a.dV=0;a.dX=0;a.f7=0;a.e_=0;a.fF=0;a.d1=AED(0);a.gN=GD();a.cy=b;a.iU=c;a.mL=c;TL(a);}
function TL(a){a.da=B9(2.0,a.cy.bQ);}
function WO(a){return a.b4.data.length?0:1;}
function Wr(a,b){O3(a);a.b4=b;}
function O3(a){V(a.fT,0,0);}
function Yi(a,b,c){a.nX=b;a.qV=c;a.dN=null;a.d1=null;a.eO=0;O3(a);}
function ASR(a){var b,c;a.fg=CH(a.fg,null);V(a.fT,0,0);b=a.gN;if(b.dz>0){b.dz=0;c=b.ca;ZT(c,0,c.data.length,null);b.c7=b.c7+1|0;}a.d1=null;a.b4=AYN;a.d0=null;a.dV=0;a.dX=0;a.f7=0;Tu(a.dA);a.iU=null;}
function AHW(a,b,c){TT(a);TL(a);a.dN=null;a.d1=null;a.eO=0;}
function AKH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=IT(a.cy);if(WO(a))return;LD(a);CA(c,a.dN);d=D_(a);e=AE7(c,a.eO);f=Z(IM(a.q.a,d),a.b4.data.length)+30|0;g=a.nX.nO;h=a.d0.data;i=h.length;if(i<f){a:{j=a.e_;k=a.fF;l=a.b4;m=a.d1;n=a.gN;o=R(H7,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gz!==q){VI(m,t,n);p[r]=LM(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=LM(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=LM(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){VI(m,q,n);h[j]=null;}j=j+1|0;}a.d0=o;Cu(a.fT,Ml(a.d1));T_(a,a.cy.cC);}a.e_=Z((a.bz.a+a.da|0)/(D_(a)+a.da|0)|0,a.b4.data.length-1|0);a.fF=Z((((a.bz.a+a.dA.t.a|0)-1|0)+a.da|0)/(D_(a)+a.da|0)|0,a.b4.data.length-1|0);if(!a.d0.data.length)return;Y1(a,e);Wf(a,b);t=g.r9;m=a.G;Bu(b,m.b,m.a,a.q,t);m=a.dA.z;u=m.b;v=m.a;w=CD(a.cy,2.0);m=a.cy.dD;x=a.e_;j=u+w|0;while(x<=a.fF){n=Ns(a,x);k=W(x,D_(a));i=x+1|
0;y=k+W(i,a.da)|0;k=j+a.dV|0;r=k+a.dX|0;z=a.cD!=x?0:1;ba=!z?t:g.qt;q=!z?g.vO:g.ji;bb=!z?g.pN:g.ji;bc=!z?g.u5:g.ji;bd=(v+y|0)-a.bz.a|0;EJ(b,j,bd,n.gW,n.rU,a.fg,q,ba,0.0);EJ(b,k,bd,n.hr,n.h_,a.fg,bb,ba,0.0);EJ(b,r,bd,n.hw,n.iL,a.fg,bc,ba,0.0);k=n.gW.b;s=j+k|0;V(m,Bb(0,a.dV-k|0),n.gW.a);Bu(b,s,bd,m,ba);k=j+a.dV|0;s=n.hr.b;be=k+s|0;V(m,Bb(0,a.dX-s|0),n.hr.a);Bu(b,be,bd,m,ba);k=n.hw.b;bf=r+k|0;V(m,Bb(0,(((a.dA.t.b-k|0)-a.dX|0)-a.dV|0)-w|0),n.hw.a);Bu(b,bf,bd,m,ba);bg=(u+a.q.b|0)-w|0;V(m,w,D_(a)+a.da|0);Bu(b,bg,bd,
m,t);x=i;}G2(b);}
function Y1(a,b){var c,d,e,f,g,h;c=0;d=a.e_;while(d<=a.fF){e=Ns(a,d);if(!(e!==null&&e.gz===a.b4.data[d])){f=a.d0.data;g=a.b4;e=a.d1;h=a.gN;c=d%f.length|0;if(f[c]!==null)VI(e,f[c],h);f[c]=LM(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cu(a.fT,Ml(a.d1));T_(a,a.cy.cC);}}
function T_(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fT;c=CK(b,c.b+150|0,c.a);CA(c,a.dN);d=a.dN;e=d.dB;f=e-(e+d.eu)/16.0;g=a.d0.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gz.iA;k=d.h_;Ch(c,j,k.bl+a.eO,f+k.bF);j=d.gz.iO;d=d.iL;Ch(c,j,d.bl+a.eO,f+d.bF);}i=i+1|0;}a:{d=a.gN;if(d.dz>0){h=d.c7;i=0;b:while(true){g=d.ca.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.dC;l=j.dG;k=k;l=l.iq;Ch(c,k,l.bl+a.eO,f+l.bF);j=j.cQ;if(h!=d.c7)break b;}i=i+1|0;}b=new IS;X(b);J(b);}}b=CH(a.fg,CV(b));a.fg=b;CN(b,c);FR(c);}
function Ns(a,b){var c;c=a.d0.data;return c[b%c.length|0];}
function ALU(a,b){Cu(a.dA.t,b);}
function AIt(a,b){Cu(a.dA.z,b);}
function AAc(a){var b,c;LD(a);b=D_(a);c=a.b4.data.length;b=W(b,c)+W(a.da,c+1|0)|0;V(a.cI,a.q.b,b);}
function TT(a){var b,c,d,e,f,g,h,i,j;b=IT(a.cy);if(WO(a))return;LD(a);CA(b,a.dN);c=AE7(b,a.eO);d=a.b4.data;e=d.length;f=0;while(f<e){g=d[f];h=JZ(c,g.gH);i=JZ(c,g.iA);j=JZ(c,g.iO);a.dV=Bb(a.dV,h);a.dX=Bb(a.dX,i);a.f7=Bb(a.f7,j);f=f+1|0;}}
function ARK(a,b){var c;c=N6(a,b.h);if(c>=0)a.cD=c;return Et(a.dA,a.G)&&Hl(a.cy.cF)?1:0;}
function AF0(a,b,c){if(!Et(a.dA,b.h)&&!Me(a.dA)){b=a.mL;if(b!==null)b.p();}return null;}
function AGd(a,b,c,d){var e;if(d==1){e=N6(a,b.h);if(e>=0)NR(a,a.b4.data[e]);}return 1;}
function NR(a,b){a.iU.p();b.mP.p();}
function N6(a,b){var c,d,e;if(!a.d0.data.length)return (-1);c=D_(a);d=(b.a-a.G.a|0)+a.bz.a|0;e=a.da;e=(d+e|0)/(c+e|0)|0;if(e<a.b4.data.length)return e;return (-1);}
function D_(a){return E3(a.dN);}
function LD(a){var b;if(a.dN===null){b=GU(a.cy,a.qV);a.dN=b;a.d1=AED(E3(b));a.eO=Df(a.dN.mb);}}
function ALp(a,b){var c,d,e;a:{switch(b.bj){case 13:NR(a,a.b4.data[a.cD]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cD=a.e_;b=a.fa;c=a.bz;H2(b,c.b,c.a-(a.q.a/2|0)|0);return 0;case 34:a.cD=a.fF;b=a.fa;c=a.bz;H2(b,c.b,c.a+(a.q.a/2|0)|0);return 0;case 35:case 39:a.cD=a.b4.data.length-1|0;break a;case 36:case 37:a.cD=0;break a;case 38:d=a.cD;e=a.b4.data.length;a.cD=((d+e
|0)-1|0)%e|0;break a;case 40:a.cD=(a.cD+1|0)%a.b4.data.length|0;break a;default:break a;}a.iU.p();return 0;}e=a.cD;if(e<=a.e_)H2(a.fa,a.bz.b,W(e,D_(a))+W(a.cD,a.da)|0);else if(e>=a.fF)H2(a.fa,a.bz.b,(W(e+1|0,D_(a))+W(a.cD+2|0,a.da)|0)-a.q.a|0);return 0;}
var Wm=F();
function ASD(a){}
function AAZ(){var a=this;EL.call(a);a.lF=null;a.rZ=null;a.uj=null;a.bB=null;a.c4=null;a.c6=null;a.sQ=0.0;a.mN=null;a.m$=null;}
function ZX(a,b){var c=new AAZ();ARu(c,a,b);return c;}
function ARu(a,b,c){var d;c=c.cF;LG(a);d=new VY;d.rT=a;a.rZ=d;d=new VZ;d.oj=a;a.uj=d;a.sQ=10.0;a.bB=b;a.lF=c;b.fa=a;}
function AGi(a){var b;b=a.bB;b.fa=null;a.bB=CH(b,null);}
function QV(a,b,c){var d;a.mN=b;a.m$=c;d=a.c4;if(d!==null)Gk(d,b,c);d=a.c6;if(d!==null)Gk(d,b,c);}
function AH1(a,b,c,d){P_(a,b,c,d);P_(a.bB,b,c,d);if(d!==0.0){a.bB.u6();AEO(a.bB);if(Qq(a))H8(a);else a.c6=null;if(X7(a))Ij(a);else a.c4=null;}}
function H2(a,b,c){ACM(a.bB,b,c);if(Qq(a))H8(a);if(X7(a))Ij(a);}
function X7(a){var b;b=a.q.a;return b>0&&a.bB.cI.a>b?1:0;}
function Qq(a){var b;b=a.q.b;return b>0&&a.bB.cI.b>b?1:0;}
function H8(a){var b,c,d,e,f,g;b=a.c6;if(b===null)b=Hu();a.c6=b;UE(a,b);c=a.c6;b=a.bB;d=b.bz.b;e=a.G;f=e.b;g=a.q;MG(c,d,f,g.b,b.cI.b,e.a+g.a|0,JN(a));}
function Ij(a){var b,c,d,e,f,g;b=a.c4;if(b===null)b=Hu();a.c4=b;UE(a,b);c=a.c4;b=a.bB;d=b.bz.a;e=a.G;f=e.a;g=a.q;IE(c,d,f,g.a,b.cI.a,e.b+g.b|0,JN(a));}
function JN(a){return B9(a.sQ,a.d6);}
function UE(a,b){var c,d;c=a.mN;d=a.m$;if(!(c!==null&&d!==null?(KJ(b.hX,c)&&KJ(b.hW,d)?1:0):0))Gk(b,c,d);}
function APV(a,b){var c;a.bB.e6(b);if(!(a.c4===null&&a.c6===null)){Ct(b,1);c=a.c4;if(c!==null)FZ(c,b);c=a.c6;if(c!==null)FZ(c,b);c=a.c4;if(c!==null)Gi(c,b);c=a.c6;if(c!==null)Gi(c,b);Ct(b,0);}}
function Nc(a,b){var c,d;a:{b:{c=a.c4;if(!(c!==null&&I0(c,b))){c=a.c6;if(c===null)break b;if(!I0(c,b))break b;}d=1;break a;}d=0;}return d;}
function AKc(a,b,c,d){return !Nc(a,b.h)&&!a.bB.cs(b,c,d)?0:1;}
function AQ1(a,b,c){var d,e;d=a.c4;if(d!==null){e=Fg(d,b.h,a.rZ,1);if(e!==null)return e;}d=a.c6;if(d!==null){e=Fg(d,b.h,a.uj,0);if(e!==null)return e;}return a.bB.b_(b,c);}
function AJM(a,b,c){return Nc(a,b.h)?1:0;}
function AK8(a,b){var c,d,e;c=a.c4;d=c!==null&&Fr(c,b.h,a.lF)?1:0;c=a.c6;e=c!==null&&Fr(c,b.h,a.lF)?1:0;return !d&&!e&&!a.bB.bK(b)?0:1;}
function AP8(a,b,c,d){var e,f;if(!DI(a,b.h))return 0;e=B9(d*0.25,a.d6);f=B9(c*0.25,a.d6);if(b.bH){f=f+e|0;e=0;}if(a.c4!==null&&e){b=a.bB;RC(b,b.bz.a+e|0);Ij(a);}if(a.c6!==null&&f){b=a.bB;Vy(b,b.bz.b+f|0);H8(a);}return 1;}
function ANp(a){var b,c;b=JN(a);c=a.bB.jb();c.b=Bb(c.b,b);c.a=Bb(c.a,b);return c;}
function Wu(){var a=this;GG.call(a);a.h6=null;a.ly=null;a.sv=null;a.qe=0.0;}
function AOb(a){var b,c;b=a.cI;c=a.q;V(b,c.b*3|0,c.a*5|0);}
function ALY(a){var b;b=B9(20.0,a.d6);return B2(b,b);}
function AKJ(a,b){var c,d,e,f;c=a.sv;d=c.to;e=c.tp;c=c.tn;b=Cz(b);f=new M;O(f);G(G(G(f,c),B(36)),b);IN(e,N(f),d.tl,3.0);}
function AIm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;ZV(a,b);Wf(a,b);c=B9(30.0,a.d6);d=a.bz;e=d.b;f=W(e/c|0,c);g=d.a;h=W(g/c|0,c);d=a.q;i=W(((e+d.b|0)-1|0)/c|0,c);e=W(((g+d.a|0)-1|0)/c|0,c);d=a.ly;d.a=c;d.b=c;a.h6.bG=1.0;while(h<=e){g=a.G.a-a.bz.a|0;j=f;while(j<=i){k=a.G.b-a.bz.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AEb(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;Xq(n,0.75,a.qe,a.h6);Bu(b,k+j|0,g+h|0,a.ly,a.h6);j=j+c|0;}h=h+c|0;}G2(b);}
function ALn(a,b){}
function PK(){var a=this;C.call(a);a.to=null;a.tp=null;a.tn=null;}
function VQ(){C.call(this);this.pM=null;}
function AOx(a){Yf(a.pM);}
function RR(){C.call(this);this.m2=null;}
function AKr(a){NY(a.m2);}
function X$(){C.call(this);this.lu=null;}
var AYN=null;function AOk(){var a=new X$();AAr(a);return a;}
function AAr(a){a.lu=Co();}
function Nl(a,b,c,d,e){var f;f=new JC;f.mP=e;f.iA=c;f.iO=d;f.gH=b;BY(a.lu,f);}
function Rc(a){return HP(a.lu,AYN);}
function V_(b){var c,d;if(b===null)b=B(31);else{c=b.fl;if(c===null)b=B(31);else{d=PX(c,B(392),I(c));b=d==(-1)?b.fl:Dj(b.fl,d+1|0);}}return b;}
function AA3(){AYN=R(JC,0);}
function H7(){var a=this;C.call(a);a.rU=null;a.h_=null;a.iL=null;a.gW=null;a.hr=null;a.hw=null;a.gz=null;}
function LM(b,c,d,e){var f,g,h;f=new H7;f.gW=new Bf;f.hr=new Bf;f.hw=new Bf;f.gz=b;g=DP(e,b.gH);if(g!==null)g.ha=g.ha+1|0;else{g=new Op;h=Ho(c,b.gH,d);g.ha=1;g.iq=h;Lj(e,b.gH,g);}e=g.iq;f.rU=e;V(f.gW,e.bk|0,e.bG|0);e=Ho(c,b.iA,d);f.h_=e;V(f.hr,e.bk|0,e.bG|0);b=Ho(c,b.iO,d);f.iL=b;V(f.hw,b.bk|0,b.bG|0);return f;}
function VI(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gz.gH;f=DP(d,e);g=f.ha-1|0;f.ha=g;if(!g){a:{h=0;i=null;if(e===null){j=d.ca.data[0];while(j!==null){if(j.dC===null)break a;k=j.cQ;i=j;j=k;}}else{l=e.jz();m=d.ca.data;h=l&(m.length-1|0);j=m[h];while(j!==null&&!(j.ja==l&&Zm(e,j.dC))){k=j.cQ;i=j;j=k;}}}if(j===null)j=null;else{if(i!==null)i.cQ=j.cQ;else d.ca.data[h]=j.cQ;d.c7=d.c7+1|0;d.dz=d.dz-1|0;}Ip(b,f.iq);}Ip(b,c.h_);Ip(b,c.iL);}
function T0(){var a=this;EL.call(a);a.g3=null;a.g8=null;a.gK=null;a.d5=null;a.i_=0.0;a.gR=0;a.hQ=0;a.de=null;a.lS=null;}
function LZ(a){var b;b=a.q;return b.b&&b.a?0:1;}
function Uo(a){var b,c;a:{if(a.gK!==null){b=a.g8;if(b!==null&&!Fq(b)){c=0;break a;}}c=1;}return c;}
function Yd(a,b){a.q.a=b;}
function Pw(a,b,c,d,e){var f,g;f=a.g3.dD;V(f,d,a.q.a);g=a.G;Bu(b,g.b+c|0,g.a,f,e);}
function Rm(a){if(a.d5===null)a.d5=GU(a.g3,a.gK);}
function UD(){var a=this;C.call(a);a.lm=Ep;a.kb=0;a.nv=0;}
function YI(){var a=this;C.call(a);a.sy=null;a.sx=null;a.sw=null;}
function AIA(a){var b,c,d,e,f;b=a.sy;c=a.sx;d=a.sw;e=Bx();f=new M;O(f);b=G(f,b);BE(b,9);b=G(b,c);BE(b,9);G(b,d);Br(e,N(f));}
function VY(){C.call(this);this.rT=null;}
function ARw(a,b){var c,d;c=a.rT;d=FO(b,c.bB.cI.a-c.q.a|0);RC(c.bB,d);Ij(c);}
function VZ(){C.call(this);this.oj=null;}
function AGr(a,b){var c,d;c=a.oj;d=FO(b,c.bB.cI.b-c.q.b|0);Vy(c.bB,d);H8(c);}
function JC(){var a=this;C.call(a);a.mP=null;a.iA=null;a.iO=null;a.gH=null;}
var D1=F(Bq);
var ACR=F(EI);
function AH_(a){var b=new ACR();AMF(b,a);return b;}
function AMF(a,b){a.jp=1;a.jN=1;a.k9=b;}
function Uj(){var a=this;C.call(a);a.xv=null;a.xu=null;a.xt=null;}
function N3(){var a=this;C.call(a);a.ty=null;a.tA=null;a.tz=0;}
function AF9(a,b){var c,d,e;c=a.ty;d=a.tA;e=a.tz;d.l(XZ(c,(b.h.b+e|0)-c.d4.b|0));}
function N1(){var a=this;C.call(a);a.qp=null;a.qo=null;a.qq=0;}
function AIa(a,b){var c,d,e;c=a.qp;d=a.qo;e=a.qq;d.l(OQ(c,(b.h.a+e|0)-c.d4.a|0));}
function KA(){var a=this;Mc.call(a);a.n7=null;a.sA=null;}
function AEl(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.n7;e=0;f=0;g=a.sA;a:{b:{while(true){if((e+32|0)>f&&DO(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B7(b)+k|0;h=j.length;f=Z(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new By;c=new M;O(c);T(G(T(G(c,B(393)),l),B(100)),h);Bo(b,N(c));J(b);}if(B7(b)<m){b=new L2;X(b);J(b);}if(m<0){b=new By;c=new M;O(c);G(T(G(c,B(101)),m),B(102));Bo(b,N(c));J(b);}n=b.W;h=n+b.k1|0;e=0;while(e<m){o=k+1|0;i=b.lI.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.W=n+m|0;e=0;}if(!DO(c)){p=!DO(b)&&e>=f?AWy:AWx;break a;}i=g.data;n=B7(c);o=i.length;n=Z(n,o);q=new VB;q.rz=b;q.tE=c;p=AEy(a,d,e,f,g,0,n,q);e=q.u$;if(p===null&&0==q.kd)p=AWy;k=q.kd;h=0;if(c.mu){b=new Ja;X(b);J(b);}if(B7(c)<k)break;if(h>o){b=new By;c=new M;O(c);BE(T(G(T(G(c,B(103)),h),B(97)),o),41);Bo(b,N(c));J(b);}l=h+k|0;if(l>o){b=new By;c=new M;O(c);T(G(T(G(c,B(105)),l),B(100)),o);Bo(b,N(c));J(b);}if(k<0){b=new By;c=new M;O(c);G(T(G(c,B(101)),k),B(102));Bo(b,N(c));J(b);}o=c.W;m=0;while(m<
k){l=o+1|0;n=h+1|0;SO(c,o,i[h]);m=m+1|0;o=l;h=n;}c.W=c.W+k|0;if(p!==null)break a;}b=new H3;X(b);J(b);}b=new By;c=new M;O(c);BE(T(G(T(G(c,B(103)),k),B(97)),h),41);Bo(b,N(c));J(b);}EG(b,b.W-(f-e|0)|0);return p;}
var T4=F(KA);
function AEy(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(KD(h,2))break a;i=AWy;break a;}c=k+1|0;n=j[k];if(!FH(a,n)){c=c+(-2)|0;i=D2(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(KD(h,3))break a;i=AWy;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FH(a,n))break b;if(!FH(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Mi(p)){c=k+(-3)|0;i=D2(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=D2(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(KD(h,4))break a;i=AWy;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B7(h.tE)<2?0:1)break a;i=AWx;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FH(a,n))break c;if(!FH(a,o))break c;if(!FH(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Id(r);m=c+1|0;j[c]=IU(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=D2(1);break a;}c=k+(-3)|0;i
=D2(1);}h.u$=c;h.kd=f;return i;}
function FH(a,b){return (b&192)!=128?0:1;}
function Qb(){C.call(this);this.sh=null;}
function AHg(a,b){var c,d;c=a.sh;d=c.dH+1|0;c.dH=d;c=new M;O(c);G(G(T(c,d),B(394)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Sg(){C.call(this);this.py=null;}
function AJs(a){return a.py.f3();}
function Sh(){C.call(this);this.vi=null;}
function AGf(a){return a.vi.f3();}
function To(){C.call(this);this.q6=null;}
function AQi(a){return a.q6.f3();}
function VP(){C.call(this);this.yN=null;}
function ANs(a){Br(Bx(),B(395));}
function QY(){C.call(this);this.nm=null;}
function AFq(a,b){a.nm.l(FE(b));}
function U9(){C.call(this);this.sD=null;}
function AR7(a,b){a.sD.p();}
function Ot(){var a=this;C.call(a);a.xD=null;a.xF=null;a.xE=0;a.xC=0;}
var ADg=F();
var Z8=F();
function SK(){C.call(this);this.u3=null;}
function AGq(a,b){var c,d,e,f;c=a.u3;d=Cz(b);e=new M;O(e);G(G(e,B(396)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new S6;d.wV=c;d.pC=b;e=new S5;e.vX=c;f=new U5;f.wL=e;e=new Wi;e.nY=d;c=b.fb;if(c!==null)c.arrayBuffer().then(Bk(e,"f"),Bk(f,"f"));else{b=b.gP.getFile();c=new Wl;c.tu=e;c.tv=f;b.then(Bk(c,"f"),Bk(f,"f"));}}
function SJ(){C.call(this);this.xl=null;}
function AG9(a,b){var c;b=Cz(b);c=new M;O(c);G(G(c,B(397)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Qu=F();
function AO3(a,b){b=b;b.b5=CH(b.b5,null);}
function Tx(){C.call(this);this.tB=null;}
function AKt(a){DM(a.tB);}
function N_(){C.call(this);this.q7=null;}
function AN$(a,b){var c;c=a.q7;Dt(c,b);LA(c,null);HN(c);}
var J$=F(DW);
var AYO=0.0;var AYP=null;function Z2(){AYO=$rt_globals.NaN;AYP=E($rt_doublecls());}
var LH=F();
var AYQ=null;var AYR=null;function ABB(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.nv=Fc(CW(d,Cc(0, 2147483648)),Ep)?0:1;e=CW(d,Cc(4294967295, 1048575));f=EF(Gt(d,52))&2047;if(Fc(e,Ep)&&!f){c.lm=Ep;c.kb=0;return;}g=0;if(f)e=ATH(e,Cc(0, 1048576));else{e=Fp(e,1);while(Fc(CW(e,Cc(0, 1048576)),Ep)){e=Fp(e,1);f=f+(-1)|0;g=g+1|0;}}h=ACx(AYR,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AYR.data[h]|0)|0;j=RM(e,AYQ.data[h],i);if(AAt(j,Cc(2808348672, 232830643))){h=h+1|0;i=12+(f-AYR.data[h]|0)|0;j=RM(e,AYQ.data[h],
i);}k=D9(AYQ.data[h],(63-i|0)-g|0);l=Gt(Cr(k,Be(1)),1);m=Gt(k,1);if(Fc(e,Cc(0, 1048576)))m=Gt(m,2);n=Be(10);while(PW(n,m)){n=BQ(n,Be(10));}if(AAt(M5(j,n),Do(m,Be(2))))n=Do(n,Be(10));o=Be(1);while(PW(o,l)){o=BQ(o,Be(10));}if(AIl(KB(o,M5(j,o)),Do(l,Be(2))))o=Do(o,Be(10));f=AT2(n,o);e=f>0?BQ(Do(j,n),n):f<0?Cr(BQ(Do(j,o),o),o):BQ(Do(Cr(j,Do(o,Be(2))),o),o);if(AAt(e,Cc(2808348672, 232830643))){h=h+1|0;e=Do(e,Be(10));}else if(AIF(e,Cc(1569325056, 23283064))){h=h+(-1)|0;e=BQ(e,Be(10));}c.lm=e;c.kb=h-330|0;}
function RM(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CW(b,Be(65535));f=CW(D9(b,16),Be(65535));g=CW(D9(b,32),Be(65535));h=CW(D9(b,48),Be(65535));i=CW(c,Be(65535));j=CW(D9(c,16),Be(65535));k=CW(D9(c,32),Be(65535));l=CW(D9(c,48),Be(65535));m=Cr(Cr(BQ(k,e),BQ(j,f)),BQ(i,g));n=Cr(Cr(Cr(BQ(l,e),BQ(k,f)),BQ(j,g)),BQ(i,h));o=Cr(Cr(Fp(BQ(l,h),32+d|0),Fp(Cr(BQ(l,g),BQ(k,h)),16+d|0)),Fp(Cr(Cr(BQ(l,f),BQ(k,g)),BQ(j,h)),d));return Cr(d>16?Cr(o,Fp(n,d-16|0)):Cr(o,D9(n,16-d|0)),D9(m,32-d|0));}
function ABc(){var b,c,d,e,f,g,h,i,j,k;AYQ=AUX(660);AYR=BG(660);b=Cc(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AYQ.data;g=d+330|0;f[g]=FI(e,Be(80));AYR.data[g]=c;e=FI(e,Be(10));h=ND(e,Be(10));while(PW(e,b)&&Fc(CW(e,Cc(0, 2147483648)),Ep)){e=Fp(e,1);c=c+1|0;h=Fp(h,1);}e=Cr(e,Do(h,Be(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AIl(e,Cc(3435973836, 214748364))){e=Gt(e,1);j=j+1|0;d=d+(-1)|0;}k=BQ(e,Be(10));b=j<=0?k:Cr(k,Gt(BQ(CW(b,Be((1<<j)-1|0)),Be(10)),j));f=AYQ.data;g=(330-i|0)-1|0;f[g]=FI(b,
Be(80));AYR.data[g]=d;i=i+1|0;}}
function M2(){C.call(this);this.sP=null;}
function ASW(a,b){var c,d;c=a.sP;d=new Bq;Bo(d,$rt_str(b.message));c.l(d);}
function Up(){var a=this;C.call(a);a.rq=0;a.mK=0;}
function FO(a,b){return P1(a.rq,b,a.mK);}
function NF(){var a=this;C.call(a);a.uo=null;a.uq=null;a.up=null;}
function ARN(a,b,c,d){var e,f;b=a.uo;e=a.uq;f=a.up;TW(b,e);if(f!==null)d.mz.p();if(ML(d)){if(d.jX===null)T6(b,AER(d,e),d.im,e);else P3(b,AER(d,e),d.im,e,d.jX);}}
var Ss=F(DW);
var AYS=null;function FI(b,c){return Long_udiv(b, c);}
function ND(b,c){return Long_urem(b, c);}
function Ln(b,c){return Long_ucompare(b, c);}
function ABa(){AYS=E($rt_longcls());}
var Fj=F(Bq);
function NS(){var a=this;C.call(a);a.mY=null;a.qf=null;a.tI=0;a.u0=0;}
function LU(a,b){return B7(a.qf)<b?0:1;}
var AD5=F();
function U3(b,c,d,e){var f,g;f=b.next();g=new XQ;g.nb=b;g.na=c;g.ne=d;g.nc=e;f.then(Bk(g,"f"),Bk(d,"f"));}
function Zo(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEz(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Ea()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new XM;f.qW=b;f.qX=d;d.addEventListener("change",Bk(f,"handleEvent"));d.click();}
function Zx(b,c){var d;if(c.isFile?1:0)b.l(YY(c.file()));else{c=c.createReader();d=new XA;d.tX=b;c.readEntries(Bk(d,"f"));}}
function Tp(){var a=this;C.call(a);a.bM=null;a.oK=null;a.h3=null;a.iP=null;a.X=null;}
function IL(a){return a.bM.ct.iY;}
function On(a){var b;b=new Po;b.qc=a;return b;}
function AFa(a){var b,c,d,e,f,g;b=R(C$,4);c=b.data;d=a.X.R.V.bi;e=a.bM;BM(e);f=new Wg;f.tk=e;c[0]=D8(B(398),d,f);e=a.X.R.V.bi;f=a.bM;BM(f);g=new Wk;g.nV=f;c[1]=D8(B(399),e,g);e=a.X.R.V.bi;f=a.bM;BM(f);g=new Wj;g.sf=f;c[2]=D8(B(400),e,g);e=a.X.R.V.bi;f=a.bM;BM(f);g=new Wh;g.vP=f;c[3]=D8(B(401),e,g);return FV(b);}
function Jl(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DM(a.X.cc);d=a.bM.e;e=Dn(d);f=G6(d);g=a.bM.eA;if(c===null)h=null;else{ATq();switch(AYT.data[c.c1]){case 1:h=K3(g,e,f);break a;case 2:h=V9(g,e,f);break a;default:}b=new Es;X(b);J(b);}}c=a.bM;e=EV(c,b);f=HS(c.e.f,e.bx,e.bI);g=OX(c,f);if(h!==null){f=c.e;i=e.bx;j=e.bI;e=new Uz;e.vU=c;e.vT=b;e.vV=g;h.sI(f,i,j,e,c.g5);}else{e=DP(c.e.f.el,f);if(e!==null)HE(c,e);else{e=DP(c.e.f.eI,f);if(e!==null&&!Ee(e))VK(c.iH,b,e,c,g);else{g=c.iH;DM(g.cc);h=g.cc;k=R(C$,1);l=k.data;d=new C$;BM(h);f
=new Wa;f.og=h;Ld(d,f,B(402),g.R.V.p8);l[0]=d;Gg(h,b,FV(k),NH(g,c));}}}}
var ZI=F(0);
function AKd(b){return 112<=b&&b<=123?1:0;}
var XS=F();
function AP1(a,b){Zo(b);}
function XR(){var a=this;C.call(a);a.qk=null;a.qj=null;}
function AIg(a,b){var c,d,e,f,g,h,i;c=a.qk;d=a.qj;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new Qa;i.oe=c;i.od=g;h.then(Bk(i,"f"),Bk(d,"f"));e=e+1|0;}}
var Xh=F();
function AJQ(a,b){Zo(b);}
function Xg(){var a=this;C.call(a);a.pr=null;a.ps=null;}
function AKN(a,b){var c,d,e,f,g;c=a.pr;d=a.ps;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bv,1);g.data[0]=FE(b.name);U3(f,c,d,g);}
var Y9=F();
function ACk(b,c){return ADe(null,b,c,0);}
function ADe(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AD_(c);g=BC(f);h=BC(f);i=BC(f);j=R(CB,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<Cy(b)){l=BC(f);c[k]=B0(b,k);l=4*l|0;f.e0=f.e0+l|0;}else c[k]=DQ(AB8(f,d,0));k=k+1|0;}m=Zp(f,h);n=new HU;n.el=GD();n.eI=GD();n.fx=Co();if(!c.length){b=new BH;X(b);J(b);}n.F=j;n.fP=0;n.cw=0;n.dc=AUv(m);b=n.el;e=0;while(e<i){Lj(b,EU(BC(f),BC(f)),EU(BC(f),BC(f)));e=e+1|0;}b=n.el;m=n.eI;o=new U6;S2(o,b);while(Jp(o)){UN(o);p=o.hc;q=p.dC;p=p.dG;b=Co();if(DP(m,p)===null)Lj(m,p,b);BY(DP(m,
p),q);}if(m.kF===null){b=new Pn;b.vf=m;m.kF=b;}b=m.kF;q=new Rp;S2(q,b.vf);while(Jp(q)){UN(q);b=q.hc.dG;m=AVK;c=R(C,b.i);d=c.data;HP(b,c);AAE(c,m);e=0;g=d.length;while(e<g){m=d[e];Ji(b,e);b.cn.data[e]=m;e=e+1|0;}}QA(f);return n;}
function ABS(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AD_(c);g=BC(f);h=BC(f);i=BC(f);j=BC(f);k=NO(b,g);l=NO(b,h);m=(IQ(B0(b,k.b),k.a)).data[0].o;e=(IQ(B0(b,l.b),l.a)).data[1].o;n=0;o=i-1|0;while(n<i){p=AB8(f,d,g);if(!n)p=LT(m,p);if(n==o)p=LT(p,e);q=k.b+n|0;r=DQ(p);b.F.data[q]=r;n=n+1|0;}r=Zp(f,j);QA(f);if(!Ee(r)){s=Oh(g,h,(-1));b=b.dc;f=ATv(s,r);r=KM(b,b.cU,s);if(r!==null){f=f.cU.bD;if(r===b.cU)b.cU=Bt(f,0);else if(r.dU!==null){b=new Of;b.sz=r;Kc(f,b);q=QC(r.dU.bD,
r);Eo(r.dU.bD,q);b=r.dU.bD;Px(b,q);if(!Ee(f)){Ju(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.cn.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BU(f);g=0;while(g<j){c=b.cn.data;h=q+1|0;c[q]=BX(f);g=g+1|0;q=h;}b.cx=b.cx+1|0;}}}}}
function AB8(b,c,d){var e,f,g,h,i,j,k,l;e=BC(b);f=R(B8,e);g=f.data;h=0;while(h<e){i=BC(b);j=BC(b);k=BC(b);l=BC(b);g[h]=DE(HC(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function Zp(b,c){var d,e;d=Co();e=0;while(e<c){BY(d,Oh(BC(b),BC(b),BC(b)));e=e+1|0;}return d;}
var Xp=F(0);
var AXn=null;function Zl(){AXn=null;}
function XM(){var a=this;C.call(a);a.qW=null;a.qX=null;}
function AJH(a,b){var c,d,e,f,g,h;b=a.qW;c=a.qX;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new MY;h.m7=b;h.m6=g;$rt_globals.setTimeout(Bk(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=YY(d.item(f));g=new MH;g.sk=b;g.sl=c;$rt_globals.setTimeout(Bk(g,"onTimer"),0);f=f+1|0;}}
function AAK(){var a=this;C.call(a);a.ij=null;a.kk=null;}
function AEp(){var a=this;C.call(a);a.yG=0;a.yr=0;a.sS=0;a.k5=0;}
function UV(){var a=this;C.call(a);a.nD=null;a.nC=null;}
function AKn(a){var b,c,d,e,f,g;b=a.nD;c=a.nC;if(C6(c.ij,b.e.f9)){c=c.kk;CC(b,c.k5,c.sS,0);B3(b.r.bT,c.k5,c.sS);B3(b.r.bJ,c.yr,c.yG);}else{d=(Cq(b.eA.rW)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ck(b);b=new Sq;b.vv=g;b.vw=c;BM(b);c=new P4;c.vN=b;$rt_globals.setTimeout(Bk(c,"onTimer"),0);}}}
function UX(){var a=this;C.call(a);a.vR=null;a.vM=null;}
function APs(a){HE(a.vR,a.vM);}
function AC2(){var a=this;C.call(a);a.ix=null;a.e0=0;}
function AD_(a){var b=new AC2();AFw(b,a);return b;}
function AFw(a,b){a.ix=b;a.e0=0;}
function BC(a){var b,c;b=a.ix.data;c=a.e0;a.e0=c+1|0;return b[c];}
function QA(a){var b,c,d,e;if(a.e0!=a.ix.data.length){b=EX();c=a.ix.data.length;d=a.e0;e=new M;O(e);G(T(G(T(G(e,B(403)),c),B(404)),d),B(405));Br(b,N(e));}}
var Ja=F(Fj);
var H3=F(Bq);
var L2=F(Bq);
function AA_(){C.call(this);this.BR=null;}
function SN(){var a=this;C.call(a);a.tZ=null;a.t4=null;}
function ASa(a){var b,c;b=a.tZ;c=a.t4;FT(b.d9,c);}
function PT(){C.call(this);this.vx=null;}
function AMl(a,b){HM(a.vx,b);}
function SX(){var a=this;C.call(a);a.oY=null;a.oX=null;}
function AGy(a){var b,c;b=a.oY;c=a.oX;FT(b.d9,c);UA(b);}
var YS=F();
function Sl(b,c){return b.data[c];}
function G9(){var a=this;C.call(a);a.eU=0;a.fu=0;a.la=null;a.jU=0;a.g_=null;}
function AFS(a,b,c,d,e,f){var g=new G9();AK4(g,a,b,c,d,e,f);return g;}
function AK4(a,b,c,d,e,f,g){a.eU=b;a.fu=c;a.la=B2(f,g);a.jU=d;a.g_=e;}
function AC_(){Gh.call(this);this.Db=null;}
function Pn(){EQ.call(this);this.vf=null;}
var W$=F(By);
var QH=F(0);
var NM=F(0);
var L5=F();
function AAP(){var a=this;L5.call(a);a.Fg=null;a.Hl=0;a.FT=0;a.Ds=0;}
function RX(){var a=this;C.call(a);a.oi=null;a.oh=null;}
function AG_(a){var b,c;b=a.oi;c=a.oh;Vl();Jl(b,c,AYU);}
function RW(){var a=this;C.call(a);a.pu=null;a.pw=null;}
function AFy(a){var b,c;b=a.pu;c=a.pw;Vl();Jl(b,c,AYV);}
function RV(){var a=this;C.call(a);a.vy=null;a.vz=null;}
function ALQ(a){Jl(a.vy,a.vz,null);}
function RU(){var a=this;C.call(a);a.nB=null;a.nE=null;}
function AQJ(a){var b,c,d,e,f,g,h;b=a.nB;c=a.nE;d=Dn(b.bM.e);e=G6(b.bM.e);d=NE(b.bM.eA,d,e);DM(b.X.cc);b=b.bM;e=EV(b,c);if(d!==null){f=b.e;g=e.bx;h=e.bI;e=new PY;e.yj=b;e.yk=c;d.Ii(f,g,h,1,e,b.g5);}}
function PM(){C.call(this);this.qF=null;}
function AP4(a){var b;b=a.qF;DM(b.X.cc);GH(b.bM,On(b),0);}
function PO(){C.call(this);this.t3=null;}
function AKT(a){var b;b=a.t3;DM(b.X.cc);GH(b.bM,On(b),1);}
function PP(){C.call(this);this.sZ=null;}
function AHD(a){var b,c,d;b=a.sZ;DM(b.X.cc);c=IL(b);b=b.bM;BM(b);d=new Ts;d.s2=b;Rb(c,d,Zj(B(406)));}
var XT=F(0);
var AXj=null;function Y5(){AXj=new PI;}
function WE(){C.call(this);this.td=null;}
function AGv(a){var b,c,d;b=a.td;DM(b.X.cc);c=IL(b);b=b.bM;BM(b);d=new Ry;d.rb=b;L3(c,d);}
function Th(){C.call(this);this.rv=null;}
function AGo(a,b,c){var d,e;c=a.rv;d=c.e.f;e=b.fG;b=c.eV;XJ(d.F.data[e],0,b);}
function QQ(){var a=this;C.call(a);a.o$=null;a.pb=0;a.pc=0;a.pd=null;a.pe=0;a.o_=0;}
function AKj(a,b){var c,d,e,f,g,h,i,j;c=a.o$;d=a.pb;e=a.pc;f=a.pd;g=a.pe;h=a.o_;i=CD(c.bs,5.0);d=Z((c.bs.cb.b-d|0)-i|0,Bb((i-d|0)-c.U.q.b|0,b.h.b));j=Z((c.bs.cb.a-e|0)-i|0,Bb((i-e|0)-c.U.q.a|0,b.h.a));V(f,d+g|0,j+h|0);Fo(c,f,c.Q.q);}
function X4(){var a=this;C.call(a);a.ox=null;a.ow=null;a.ou=null;a.ot=0;a.oB=0;a.oA=0;a.oz=0;a.oy=0;a.oD=0;a.oC=0;a.sC=0;}
function ALP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.ox;d=a.ow;e=a.ou;f=a.ot;g=a.oB;h=a.oA;i=a.oz;j=a.oy;k=a.oD;l=a.oC;m=a.sC;n=CD(c.bs,5.0);o=c.Q.jb();Cu(d,c.Q.q);Cu(e,c.Q.G);switch(f){case -1:f=Z(h+(b.h.b-g|0)|0,c.bs.cb.b-n|0);g=o.b;h=h+i|0;f=Bb(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bb((i+b.h.b|0)-g|0,Bb(o.b,n-c.U.G.b|0));}b:{switch(j){case -1:f=Bb(n,Z(l+(b.h.a-k|0)|0,(c.bs.cb.a+c.U.q.a|0)-n|0));g=o.a;h=l+m|0;f=Bb(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bb((m+b.h.a|0)-k|0,o.a);}Fo(c,e,d);}
function VN(){var a=this;C.call(a);a.vF=null;a.vG=0.0;}
function JZ(a,b){return KY(a.vF,b,a.vG*2.0+0.875);}
function Te(){C.call(this);this.on=null;}
function ALo(a){AEH(a.on);}
function Tf(){C.call(this);this.rV=null;}
function AMI(a){LS(a.rV);}
function Td(){C.call(this);this.vH=null;}
function AN7(a){AD$(a.vH);}
function Ou(){C.call(this);this.sj=null;}
function AKh(a){a.sj.uX();}
function Os(){C.call(this);this.q$=null;}
function AQT(a){a.q$.vn();}
function VH(){C.call(this);this.rH=null;}
function AH7(a){var b,c,d,e,f,g,h,i;b=a.rH;c=(b.oK.dr()).data;d=R(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new YJ;i.qb=b;i.qa=h;e[f]=ACr(i,h,b.X.R.V.bi);f=f+1|0;}return d;}
function Wg(){C.call(this);this.tk=null;}
function AOI(a){var b,c,d,e,f;b=a.tk.e.f;c=b.cw;d=new M;O(d);T(G(d,B(407)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fP;d=new M;O(d);T(G(d,B(408)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.dc;e=FY(EH(b));SE(d,0,d.cU,e);b=Bx();f=b.ku;f.data[0]=10;Od(b,f,0,1);}
function Wk(){C.call(this);this.nV=null;}
function ALw(a){S_(a.nV);}
function Wj(){C.call(this);this.sf=null;}
function AGm(a){Xd(a.sf);}
function Wh(){C.call(this);this.vP=null;}
function AId(a){HN(a.vP);}
function Wp(){C.call(this);this.rr=null;}
function ARA(a,b,c){FW(B0(a.rr.e.f,b.fG),0,I(c));}
function Qa(){var a=this;C.call(a);a.oe=null;a.od=null;}
function AIu(a,b){a.oe.l(ACA(a.od,b));}
var I3=F(0);
function MY(){var a=this;C.call(a);a.m7=null;a.m6=null;}
function AKU(a){Zx(a.m7,a.m6);}
function MH(){var a=this;C.call(a);a.sk=null;a.sl=null;}
function AFj(a){a.sk.l(a.sl);}
var PI=F();
function XQ(){var a=this;C.call(a);a.nb=null;a.na=null;a.ne=null;a.nc=null;}
function AJ$(a,b){var c,d,e,f,g,h,i;c=a.nb;d=a.na;e=a.ne;f=a.nc;if(!(b.done?1:0)){U3(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new UK;c.pt=d;c.pv=g;c.px=f;b.then(Bk(c,"f"),Bk(e,"f"));}else{h=f.data;c=g.values();b=FE(g.name);i=h.length;f=Dk(f,i+1|0);f.data[i]=b;U3(c,d,e,f);}}}
function G0(){var a=this;C.call(a);a.it=0;a.sn=0;a.hH=null;a.hc=null;a.pJ=null;a.jj=null;}
function AYW(a){var b=new G0();S2(b,a);return b;}
function S2(a,b){a.jj=b;a.sn=b.c7;a.hH=null;}
function Jp(a){var b,c;if(a.hH!==null)return 1;while(true){b=a.it;c=a.jj.ca.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.it=b+1|0;}return 0;}
function AAo(a){var b;if(a.sn==a.jj.c7)return;b=new IS;X(b);J(b);}
function UN(a){var b,c,d,e;AAo(a);if(!Jp(a)){b=new Yw;X(b);J(b);}b=a.hH;if(b!==null){c=a.hc;if(c!==null)a.pJ=c;a.hc=b;a.hH=b.cQ;}else{d=a.jj.ca.data;e=a.it;a.it=e+1|0;b=d[e];a.hc=b;a.hH=b.cQ;a.pJ=null;}}
var U6=F(G0);
var Rp=F(G0);
function Rn(){var a=this;C.call(a);a.g=null;a.dp=0;a.ki=null;a.nA=0;a.gl=0;a.eK=0;a.bw=0;a.lk=null;}
function J5(a){return a.g.bO;}
function Yh(a,b,c,d){var e,f,g,h,i,j;e=Co();f=a.dp;g=0;if(c!=f)a.dp=c;a:{switch(b){case -1073741784:h=new R$;c=a.bw+1|0;a.bw=c;Fn(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PU;c=a.bw+1|0;a.bw=c;Fn(h,c);break a;case -33554392:h=new Tn;c=a.bw+1|0;a.bw=c;Fn(h,c);break a;default:c=a.gl+1|0;a.gl=c;if(d!==null)h=AUF(c);else{h=new Fz;Fn(h,0);g=1;}c=a.gl;if(c<=(-1))break a;if(c>=10)break a;a.ki.data[c]=h;break a;}h=new Yc;Fn(h,(-1));}while(true){if(E1(a.g)&&a.g.j==(-536870788))
{d=ARe(B_(a,2),B_(a,64));while(!Di(a.g)&&E1(a.g)){i=a.g;j=i.j;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cx(d,Bi(i));i=a.g;if(i.bh!=(-536870788))continue;Bi(i);}i=K0(a,d);i.O(h);}else if(a.g.bh==(-536870788)){i=GQ(h);Bi(a.g);}else{i=Pf(a,h);d=a.g;if(d.bh==(-536870788))Bi(d);}if(i!==null)BY(e,i);if(Di(a.g))break;if(a.g.bh==(-536870871))break;}if(a.g.kK==(-536870788))BY(e,GQ(h));if(a.dp!=f&&!g){a.dp=f;d=a.g;d.f5=f;d.j=d.bh;d.eF=d.eQ;j=d.c$;d.v=j+1|0;d.he=j;E4(d);}switch(b){case -1073741784:break;case -536870872:d
=new MW;FA(d,e,h);return d;case -268435416:d=new WF;FA(d,e,h);return d;case -134217688:d=new Rq;FA(d,e,h);return d;case -67108824:d=new T7;FA(d,e,h);return d;case -33554392:d=new DR;FA(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return AUq(Bt(e,0),h);default:return AT1(e,h);}return GQ(h);}d=new I9;FA(d,e,h);return d;}
function ADA(a){var b,c,d,e,f,g,h;b=BG(4);c=(-1);d=(-1);if(!Di(a.g)&&E1(a.g)){e=b.data;c=Bi(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BP(3);b=e.data;b[0]=c&65535;f=a.g;g=f.bh;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bi(f);f=a.g;g=f.bh;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bi(f);return AQX(e,3);}return AQX(e,2);}if(!B_(a,2))return AAn(b[0]);if(B_(a,64))return AO0(b[0]);return AHl(b[0]);}e=b.data;c=1;while(c<4&&!Di(a.g)&&E1(a.g)){h=c+1|0;e[c]=Bi(a.g);c=h;}if(c==1){h=e[0];if(!(AYX.x7(h)==AYY?0:1))return X_(a,e[0]);}if
(!B_(a,2))return AVg(b,c);if(B_(a,64)){f=new XP;N9(f,b,c);return f;}f=new Ui;N9(f,b,c);return f;}
function Pf(a,b){var c,d,e,f,g,h,i;if(E1(a.g)&&!JS(a.g)&&Kt(a.g.j)){if(B_(a,128)){c=ADA(a);if(!Di(a.g)){d=a.g;e=d.bh;if(!(e==(-536870871)&&!(b instanceof Fz))&&e!=(-536870788)&&!E1(d))c=Mk(a,b,c);}}else if(!Oi(a.g)&&!VL(a.g)){f=new Ok;O(f);while(!Di(a.g)&&E1(a.g)&&!Oi(a.g)&&!VL(a.g)){if(!(!JS(a.g)&&!a.g.j)&&!(!JS(a.g)&&Kt(a.g.j))){g=a.g.j;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bi(a.g);if(!Md(e))BE(f,e&65535);else It(f,Gu(e));}if(!B_(a,2)){c=new RZ;DA(c);c.cr
=N(f);e=f.P;c.bL=e;c.kD=ANg(e);c.ln=ANg(c.bL);h=0;while(h<(c.bL-1|0)){Ru(c.kD,L(c.cr,h),(c.bL-h|0)-1|0);Ru(c.ln,L(c.cr,(c.bL-h|0)-1|0),(c.bL-h|0)-1|0);h=h+1|0;}}else if(B_(a,64))c=AVe(f);else{c=new Nt;DA(c);c.hg=N(f);c.bL=f.P;}}else c=Mk(a,b,XO(a,b));}else{d=a.g;if(d.bh!=(-536870871))c=Mk(a,b,XO(a,b));else{if(b instanceof Fz)J(B$(B(31),d.bO,Og(d)));c=GQ(b);}}a:{if(!Di(a.g)){e=a.g.bh;if(!(e==(-536870871)&&!(b instanceof Fz))&&e!=(-536870788)){f=Pf(a,b);if(c instanceof C3&&!(c instanceof E5)&&!(c instanceof CQ)
&&!(c instanceof EA)){i=c;if(!f.bU(i.J)){c=new WU;ET(c,i.J,i.d,i.hE);c.J.O(c);}}if((f.hI()&65535)!=43)c.O(f);else c.O(f.J);break a;}}if(c===null)return null;c.O(b);}if((c.hI()&65535)!=43)return c;return c.J;}
function Mk(a,b,c){var d,e,f,g,h;d=a.g;e=d.bh;if(c!==null&&!(c instanceof BV)){switch(e){case -2147483606:Bi(d);d=new YG;Dc(d,c,b,e);Ms();c.O(AYZ);return d;case -2147483605:Bi(d);d=new PL;Dc(d,c,b,(-2147483606));Ms();c.O(AYZ);return d;case -2147483585:Bi(d);d=new Pp;Dc(d,c,b,(-536870849));Ms();c.O(AYZ);return d;case -2147483525:f=new Nn;d=Fa(d);g=a.eK+1|0;a.eK=g;Jh(f,d,c,b,(-536870849),g);Ms();c.O(AYZ);return f;case -1073741782:case -1073741781:Bi(d);d=new RQ;Dc(d,c,b,e);c.O(d);return d;case -1073741761:Bi(d);d
=new QD;Dc(d,c,b,(-536870849));c.O(b);return d;case -1073741701:h=new Vo;d=Fa(d);e=a.eK+1|0;a.eK=e;Jh(h,d,c,b,(-536870849),e);c.O(h);return h;case -536870870:case -536870869:Bi(d);if(c.hI()!=(-2147483602)){d=new CQ;Dc(d,c,b,e);}else if(B_(a,32)){d=new RS;Dc(d,c,b,e);}else{d=new Ov;f=Ps(a.dp);Dc(d,c,b,e);d.kJ=f;}c.O(d);return d;case -536870849:Bi(d);d=new FS;Dc(d,c,b,(-536870849));c.O(b);return d;case -536870789:h=new Fb;d=Fa(d);e=a.eK+1|0;a.eK=e;Jh(h,d,c,b,(-536870849),e);c.O(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bi(d);d=new YH;ET(d,f,b,e);f.d=d;return d;case -2147483585:Bi(d);c=new WQ;ET(c,f,b,(-2147483585));return c;case -2147483525:c=new Pd;SB(c,Fa(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bi(d);d=new Qw;ET(d,f,b,e);f.d=d;return d;case -1073741761:Bi(d);c=new Uy;ET(c,f,b,(-1073741761));return c;case -1073741701:c=new Rr;SB(c,Fa(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bi(d);d=AUx(f,b,e);f.d=d;return d;case -536870849:Bi(d);c
=new EA;ET(c,f,b,(-536870849));return c;case -536870789:return ATE(Fa(d),f,b,(-536870789));default:}return c;}
function XO(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fz;while(true){a:{e=a.g;f=e.bh;if((f&(-2147418113))==(-2147483608)){Bi(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dp=g;else{if(f!=(-1073741784))g=a.dp;c=Yh(a,f,g,b);e=a.g;if(e.bh!=(-536870871))J(B$(B(31),e.bO,e.c$));Bi(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bi(e);c
=AQI(0);break a;case -2147483577:Bi(e);c=new Oq;BN(c);break a;case -2147483558:Bi(e);c=new Xw;h=a.bw+1|0;a.bw=h;AD2(c,h);break a;case -2147483550:Bi(e);c=AQI(1);break a;case -2147483526:Bi(e);c=new Xe;BN(c);break a;case -536870876:Bi(e);a.bw=a.bw+1|0;if(B_(a,8)){if(B_(a,1)){c=ATS(a.bw);break a;}c=AS$(a.bw);break a;}if(B_(a,1)){c=AT7(a.bw);break a;}c=AUK(a.bw);break a;case -536870866:Bi(e);if(B_(a,32)){c=AU3();break a;}c=AUD(Ps(a.dp));break a;case -536870821:Bi(e);i=0;c=a.g;if(c.bh==(-536870818)){i=1;Bi(c);}c
=K0(a,F6(a,i));c.O(b);e=a.g;if(e.bh!=(-536870819))J(B$(B(31),e.bO,e.c$));OW(e,1);Bi(a.g);break a;case -536870818:Bi(e);a.bw=a.bw+1|0;if(!B_(a,8)){c=new Kz;BN(c);break a;}c=new Nz;e=Ps(a.dp);BN(c);c.ri=e;break a;case 0:j=e.eQ;if(j!==null)c=K0(a,j);else{if(Di(e)){c=GQ(b);break a;}c=AAn(f&65535);}Bi(a.g);break a;default:break b;}Bi(e);c=new Kz;BN(c);break a;}h=(f&2147483647)-48|0;if(a.gl<h)J(B$(B(31),Fk(e),Og(a.g)));Bi(e);a.bw=a.bw+1|0;c=!B_(a,2)?ATf(h,a.bw):B_(a,64)?ATT(h,a.bw):AVb(h,a.bw);a.ki.data[h].kg=1;a.nA
=1;break a;}if(f>=0&&!GS(e)){c=X_(a,f);Bi(a.g);}else if(f==(-536870788))c=GQ(b);else{if(f!=(-536870871)){b=new IX;c=!GS(a.g)?Xv(f&65535):a.g.eQ.cv();e=a.g;Js(b,c,e.bO,e.c$);J(b);}if(d){b=new IX;e=a.g;Js(b,B(31),e.bO,e.c$);J(b);}c=GQ(b);}}}if(f!=(-16777176))break;}return c;}
function F6(a,b){var c,d,e,f,g,h,i,j,$$je;c=ARe(B_(a,2),B_(a,64));Eu(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Di(a.g))break a;h=a.g;b=h.bh;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cx(c,d);d=Bi(a.g);h=a.g;if(h.bh!=(-536870874)){d=38;break d;}if(h.j==(-536870821)){Bi(h);e=1;d=(-1);break d;}Bi(h);if(g){c=F6(a,0);break d;}if(a.g.bh==(-536870819))break d;Xk(c,F6(a,0));break d;case -536870867:if(!g){b=h.j;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bi(h);h=a.g;i=h.bh;if(GS(h))break c;if
(i<0){j=a.g.j;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Kt(i))break e;i=i&65535;break e;}catch($$e){$$je=Ei($$e);if($$je instanceof D4){break b;}else{throw $$e;}}}try{BS(c,d,i);}catch($$e){$$je=Ei($$e);if($$je instanceof D4){break b;}else{throw $$e;}}Bi(a.g);d=(-1);break d;}}if(d>=0)Cx(c,d);d=45;Bi(a.g);break d;case -536870821:if(d>=0){Cx(c,d);d=(-1);}Bi(a.g);j=0;h=a.g;if(h.bh==(-536870818)){Bi(h);j=1;}if(!e)YV(c,F6(a,j));else Xk(c,F6(a,j));e=0;Bi(a.g);break d;case -536870819:if(d>=0)Cx(c,
d);d=93;Bi(a.g);break d;case -536870818:if(d>=0)Cx(c,d);d=94;Bi(a.g);break d;case 0:if(d>=0)Cx(c,d);h=a.g.eQ;if(h===null)d=0;else{AE4(c,h);d=(-1);}Bi(a.g);break d;default:}if(d>=0)Cx(c,d);d=Bi(a.g);}g=0;}J(B$(B(31),J5(a),a.g.c$));}J(B$(B(31),J5(a),a.g.c$));}if(!f){if(d>=0)Cx(c,d);return c;}J(B$(B(31),J5(a),a.g.c$-1|0));}
function X_(a,b){var c,d,e;c=Md(b);if(B_(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AHl(b&65535);}if(B_(a,64)&&b>128){if(c){d=new MM;DA(d);d.bL=2;d.qL=GE(GC(b));return d;}if(O5(b))return ANn(b&65535);if(!SZ(b))return AO0(b&65535);return AKE(b&65535);}}if(!c){if(O5(b))return ANn(b&65535);if(!SZ(b))return AAn(b&65535);return AKE(b&65535);}d=new DV;DA(d);d.bL=2;d.fM=b;e=(Gu(b)).data;d.jM=e[0];d.ik=e[1];return d;}
function K0(a,b){var c,d,e;if(!ACf(b)){if(!b.L){if(b.gX())return AJ3(b);return AQK(b);}if(!b.gX())return ALm(b);c=new Jj;UQ(c,b);return c;}c=Zn(b);d=new M4;BN(d);d.pn=c;d.v3=c.bg;if(!b.L){if(b.gX())return AC0(AJ3(HA(b)),d);return AC0(AQK(HA(b)),d);}if(!b.gX())return AC0(ALm(HA(b)),d);c=new Qr;e=new Jj;UQ(e,HA(b));AEK(c,e,d);return c;}
function HB(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B_(a,b){return (a.dp&b)!=b?0:1;}
function Of(){C.call(this);this.sz=null;}
function ASO(a,b){b.dU=a.sz.dU;}
var Gv=F(Cj);
var AYV=null;var AYU=null;var AY0=null;function Vl(){Vl=Bm(Gv);AIy();}
function AK1(a,b){var c=new Gv();AAh(c,a,b);return c;}
function AAh(a,b,c){Vl();C_(a,b,c);}
function AIy(){var b;AYV=AK1(B(409),0);b=AK1(B(410),1);AYU=b;AY0=H(Gv,[AYV,b]);}
function Ts(){C.call(this);this.s2=null;}
function ALA(a,b){Dt(a.s2,b);}
function BD(){var a=this;C.call(a);a.d=null;a.cj=0;a.oH=null;a.hE=0;}
var AVQ=0;function BN(a){var b,c;b=new Fh;c=AVQ;AVQ=c+1|0;J9(b,c);a.oH=Mg(b);}
function KX(a,b){var c,d;c=new Fh;d=AVQ;AVQ=d+1|0;J9(c,d);a.oH=Mg(c);a.d=b;}
function HJ(a,b,c,d){var e;e=d.x;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function HY(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHP(a,b){a.hE=b;}
function AG0(a){return a.hE;}
function AQa(a){return a.d;}
function AQ6(a,b){a.d=b;}
function AQ3(a,b){return 1;}
function AR0(a){return null;}
function Je(a){var b;a.cj=1;b=a.d;if(b!==null){if(!b.cj){b=b.fp();if(b!==null){a.d.cj=1;a.d=b;}a.d.ei();}else if(b instanceof Gy&&b.em.kg)a.d=b.d;}}
function AEV(){AVQ=1;}
var UZ=F();
var AYT=null;function ATq(){ATq=Bm(UZ);AGE();}
function AGE(){var b,c;Vl();b=BG((AY0.eT()).data.length);c=b.data;AYT=b;c[AYV.c1]=1;c[AYU.c1]=2;}
function Po(){C.call(this);this.qc=null;}
function AHY(a,b){UR(IL(a.qc),b,AXs,Zj(B(411)));}
function Wt(){C.call(this);this.ui=null;}
function AJE(a,b){var c,d;c=a.ui;d=b.hy;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function YJ(){var a=this;C.call(a);a.qb=null;a.qa=null;}
function AHK(a){var b,c;b=a.qb;c=a.qa;b.h3.s6(c);}
function CO(){var a=this;BD.call(a);a.kg=0;a.dy=0;}
var AYZ=null;function Ms(){Ms=Bm(CO);AI3();}
function AUF(a){var b=new CO();Fn(b,a);return b;}
function Fn(a,b){Ms();BN(a);a.dy=b;}
function AGu(a,b,c,d){var e,f;e=IC(d,a.dy);JJ(d,a.dy,b);f=a.d.c(b,c,d);if(f<0)JJ(d,a.dy,e);return f;}
function AMt(a){return a.dy;}
function AGO(a,b){return 0;}
function AI3(){var b;b=new Ol;BN(b);AYZ=b;}
function GN(){var a=this;C.call(a);a.be=null;a.f5=0;a.eH=0;a.t_=0;a.kK=0;a.bh=0;a.j=0;a.rN=0;a.eQ=null;a.eF=null;a.v=0;a.hP=0;a.c$=0;a.he=0;a.bO=null;}
var AY1=null;var AYX=null;var AYY=0;function OW(a,b){if(b>0&&b<3)a.eH=b;if(b==1){a.j=a.bh;a.eF=a.eQ;a.v=a.he;a.he=a.c$;E4(a);}}
function GS(a){return a.eQ===null?0:1;}
function JS(a){return a.eF===null?0:1;}
function Bi(a){E4(a);return a.kK;}
function Fa(a){var b;b=a.eQ;E4(a);return b;}
function E4(a){var b,c,d,e,f,g,h,$$je;a.kK=a.bh;a.bh=a.j;a.eQ=a.eF;a.c$=a.he;a.he=a.v;while(true){b=0;c=a.v>=a.be.data.length?0:LN(a);a.j=c;a.eF=null;if(a.eH==4){if(c!=92)return;c=a.v;d=a.be.data;c=c>=d.length?0:d[BT(a)];a.j=c;switch(c){case 69:break;default:a.j=92;a.v=a.hP;return;}a.eH=a.t_;a.j=a.v>(a.be.data.length-2|0)?0:LN(a);}a:{c=a.j;if(c!=92){e=a.eH;if(e==1)switch(c){case 36:a.j=(-536870876);break a;case 40:if(a.be.data[a.v]!=63){a.j=(-2147483608);break a;}BT(a);c=a.be.data[a.v];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.j=(-134217688);BT(a);break b;default:J(B$(B(31),Fk(a),a.v));}a.j=(-67108824);BT(a);}else{switch(c){case 33:break;case 60:BT(a);c=a.be.data[a.v];e=1;break b;case 61:a.j=(-536870872);BT(a);break b;case 62:a.j=(-33554392);BT(a);break b;default:f=AEW(a);a.j=f;if(f<256){a.f5=f;f=f<<16;a.j=f;a.j=(-1073741784)|f;break b;}f=f&255;a.j=f;a.f5=f;f=f<<16;a.j=f;a.j=(-16777176)|f;break b;}a.j=(-268435416);BT(a);}}if(!e)break;}break a;case 41:a.j=(-536870871);break a;case 42:case 43:case 63:e
=a.v;d=a.be.data;switch(e>=d.length?42:d[e]){case 43:a.j=c|(-2147483648);BT(a);break a;case 63:a.j=c|(-1073741824);BT(a);break a;default:}a.j=c|(-536870912);break a;case 46:a.j=(-536870866);break a;case 91:a.j=(-536870821);OW(a,2);break a;case 93:if(e!=2)break a;a.j=(-536870819);break a;case 94:a.j=(-536870818);break a;case 123:a.eF=AEm(a,c);break a;case 124:a.j=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.j=(-536870874);break a;case 45:a.j=(-536870867);break a;case 91:a.j=(-536870821);break a;case 93:a.j
=(-536870819);break a;case 94:a.j=(-536870818);break a;default:}}else{c=a.v>=(a.be.data.length-2|0)?(-1):LN(a);c:{a.j=c;switch(c){case -1:J(B$(B(31),Fk(a),a.v));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.j
=ACJ(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eH!=1)break a;a.j=(-2147483648)|c;break a;case 65:a.j=(-2147483583);break a;case 66:a.j=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B$(B(31),Fk(a),a.v));case 68:case 83:case 87:case 100:case 115:case 119:a.eF=Sr(HC(a.be,
a.hP,1),0);a.j=0;break a;case 71:a.j=(-2147483577);break a;case 80:case 112:break c;case 81:a.t_=a.eH;a.eH=4;b=1;break a;case 90:a.j=(-2147483558);break a;case 97:a.j=7;break a;case 98:a.j=(-2147483550);break a;case 99:c=a.v;d=a.be.data;if(c>=(d.length-2|0))J(B$(B(31),Fk(a),a.v));a.j=d[BT(a)]&31;break a;case 101:a.j=27;break a;case 102:a.j=12;break a;case 110:a.j=10;break a;case 114:a.j=13;break a;case 116:a.j=9;break a;case 117:a.j=PR(a,4);break a;case 120:a.j=PR(a,2);break a;case 122:a.j=(-2147483526);break a;default:}break a;}g
=ACt(a);h=0;if(a.j==80)h=1;try{a.eF=Sr(g,h);}catch($$e){$$je=Ei($$e);if($$je instanceof Jm){J(B$(B(31),Fk(a),a.v));}else{throw $$e;}}a.j=0;}}if(b)continue;else break;}}
function ACt(a){var b,c,d,e,f,g;b=new M;F0(b,10);c=a.v;d=a.be;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=HC(d,BT(a),1);f=new M;O(f);G(G(f,B(412)),b);return N(f);}BT(a);c=0;a:{while(true){g=a.v;d=a.be.data;if(g>=(d.length-2|0))break;c=d[BT(a)];if(c==125)break a;BE(b,c);}}if(c!=125)J(B$(B(31),a.bO,a.v));}if(!b.P)J(B$(B(31),a.bO,a.v));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(412)),f);return N(b);}b:{c:{if(I(f)>3){if(KO(f,B(412)))break c;if(KO(f,B(413)))break c;}break b;}f=Dj(f,2);}return f;}
function AEm(a,b){var c,d,e,f,g,$$je;c=new M;F0(c,4);d=(-1);e=2147483647;a:{while(true){f=a.v;g=a.be.data;if(f>=g.length)break a;b=g[BT(a)];if(b==125)break a;if(b==44&&d<0)try{d=JF(DU(c),10);AEs(c,0,ZA(c));continue;}catch($$e){$$je=Ei($$e);if($$je instanceof Dd){break;}else{throw $$e;}}BE(c,b&65535);}J(B$(B(31),a.bO,a.v));}if(b!=125)J(B$(B(31),a.bO,a.v));if(c.P>0)b:{try{e=JF(DU(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ei($$e);if($$je instanceof Dd){}else{throw $$e;}}J(B$(B(31),a.bO,a.v));}else if
(d<0)J(B$(B(31),a.bO,a.v));if((d|e|(e-d|0))<0)J(B$(B(31),a.bO,a.v));b=a.v;g=a.be.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.j=(-2147483525);BT(a);break c;case 63:a.j=(-1073741701);BT(a);break c;default:}a.j=(-536870789);}c=new Nd;c.eG=d;c.eC=e;return c;}
function Fk(a){return a.bO;}
function Di(a){return !a.bh&&!a.j&&a.v==a.rN&&!GS(a)?1:0;}
function Kt(b){return b<0?0:1;}
function E1(a){return !Di(a)&&!GS(a)&&Kt(a.bh)?1:0;}
function Oi(a){var b;b=a.bh;return b<=56319&&b>=55296?1:0;}
function VL(a){var b;b=a.bh;return b<=57343&&b>=56320?1:0;}
function SZ(b){return b<=56319&&b>=55296?1:0;}
function O5(b){return b<=57343&&b>=56320?1:0;}
function PR(a,b){var c,d,e,f,$$je;c=new M;F0(c,b);d=a.be.data.length-2|0;e=0;while(true){f=BF(e,b);if(f>=0)break;if(a.v>=d)break;BE(c,a.be.data[BT(a)]);e=e+1|0;}if(!f)a:{try{b=JF(DU(c),16);}catch($$e){$$je=Ei($$e);if($$je instanceof Dd){break a;}else{throw $$e;}}return b;}J(B$(B(31),a.bO,a.v));}
function ACJ(a){var b,c,d,e,f,g;b=3;c=1;d=a.be.data;e=d.length-2|0;f=Vh(d[a.v],8);switch(f){case -1:break;default:if(f>3)b=2;BT(a);a:{while(true){if(c>=b)break a;g=a.v;if(g>=e)break a;g=Vh(a.be.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BT(a);c=c+1|0;}}return f;}J(B$(B(31),a.bO,a.v));}
function AEW(a){var b,c,d,e;b=1;c=a.f5;a:while(true){d=a.v;e=a.be.data;if(d>=e.length)J(B$(B(31),a.bO,d));b:{c:{switch(e[d]){case 41:BT(a);return c|256;case 45:if(!b)J(B$(B(31),a.bO,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BT(a);}BT(a);return c;}
function BT(a){var b,c,d,e,f;b=a.v;a.hP=b;if(!(a.f5&4))a.v=b+1|0;else{c=a.be.data.length-2|0;a.v=b+1|0;a:while(true){d=a.v;if(d<c&&Ro(a.be.data[d])){a.v=a.v+1|0;continue;}d=a.v;if(d>=c)break;e=a.be.data;if(e[d]!=35)break;a.v=d+1|0;while(true){f=a.v;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.v=f+1|0;}}}return a.hP;}
function AEd(b){return AY1.C0(b);}
function LN(a){var b,c,d,e;b=a.be.data[BT(a)];if(CE(b)){c=a.hP+1|0;d=a.be.data;if(c<d.length){e=d[c];if(C4(e)){BT(a);return Ev(b,e);}}}return b;}
function Og(a){return a.c$;}
function IX(){var a=this;BH.call(a);a.xO=null;a.xi=null;a.qw=0;}
function B$(a,b,c){var d=new IX();Js(d,a,b,c);return d;}
function Js(a,b,c,d){X(a);a.qw=(-1);a.xO=b;a.xi=c;a.qw=d;}
function XA(){C.call(this);this.tX=null;}
function AOn(a,b){var c,d;c=a.tX;d=0;while(d<b.length){Zx(c,b[d]);d=d+1|0;}}
var ACn=F(0);
function UK(){var a=this;C.call(a);a.pt=null;a.pv=null;a.px=null;}
function ANY(a,b){a.pt.l(AS_(a.pv,b,a.px));}
var R$=F(CO);
function AF2(a,b,c,d){var e;e=a.dy;BJ(d,e,b-Dl(d,e)|0);return a.d.c(b,c,d);}
function APD(a,b){return 0;}
var Yc=F(CO);
function AHN(a,b,c,d){return b;}
var PU=F(CO);
function AGX(a,b,c,d){if(Dl(d,a.dy)!=b)b=(-1);return b;}
function Tn(){CO.call(this);this.no=0;}
function AF7(a,b,c,d){var e;e=a.dy;BJ(d,e,b-Dl(d,e)|0);a.no=b;return b;}
function AN9(a,b){return 0;}
var Fz=F(CO);
function ARm(a,b,c,d){if(d.jy!=1&&b!=d.x)return (-1);d.iQ=1;JJ(d,0,b);return b;}
function BV(){BD.call(this);this.bL=0;}
function DA(a){BN(a);a.bL=1;}
function ASq(a,b,c,d){var e;if((b+a.b0()|0)>d.x){d.dj=1;return (-1);}e=a.bv(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AQy(a){return a.bL;}
function AK2(a,b){return 1;}
var AD0=F(BV);
function GQ(a){var b=new AD0();AMC(b,a);return b;}
function AMC(a,b){KX(a,b);a.bL=1;a.hE=1;a.bL=0;}
function AP3(a,b,c){return 0;}
function AI$(a,b,c,d){var e,f,g;e=d.x;f=d.cJ;while(true){g=BF(b,e);if(g>0)return (-1);if(g<0&&C4(L(c,b))&&b>f&&CE(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AHC(a,b,c,d,e){var f,g;f=e.x;g=e.cJ;while(true){if(c<b)return (-1);if(c<f&&C4(L(d,c))&&c>g&&CE(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AF5(a,b){return 0;}
function BR(){var a=this;BD.call(a);a.bE=null;a.em=null;a.Y=0;}
function AT1(a,b){var c=new BR();FA(c,a,b);return c;}
function FA(a,b,c){BN(a);a.bE=b;a.em=c;a.Y=c.dy;}
function AJN(a,b,c,d){var e,f,g,h;if(a.bE===null)return (-1);e=FD(d,a.Y);Dz(d,a.Y,b);f=a.bE.i;g=0;while(true){if(g>=f){Dz(d,a.Y,e);return (-1);}h=(Bt(a.bE,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AN1(a,b){a.em.d=b;}
function ALR(a,b){var c;a:{c=a.bE;if(c!==null){c=BU(c);while(true){if(!B6(c))break a;if(!(BX(c)).bU(b))continue;else return 1;}}}return 0;}
function AOM(a,b){return IC(b,a.Y)>=0&&FD(b,a.Y)==IC(b,a.Y)?0:1;}
function AHy(a){var b,c,d,e;a.cj=1;b=a.em;if(b!==null&&!b.cj)Je(b);a:{b=a.bE;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bt(a.bE,d);e=b.fp();if(e===null)e=b;else{b.cj=1;Eo(a.bE,d);RP(a.bE,d,e);}if(!e.cj)e.ei();d=d+1|0;}}}if(a.d!==null)Je(a);}
var I9=F(BR);
function ANJ(a,b,c,d){var e,f,g,h;e=Dl(d,a.Y);BJ(d,a.Y,b);f=a.bE.i;g=0;while(true){if(g>=f){BJ(d,a.Y,e);return (-1);}h=(Bt(a.bE,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function APc(a,b){return !Dl(b,a.Y)?0:1;}
var DR=F(I9);
function AIe(a,b,c,d){var e,f,g;e=Dl(d,a.Y);BJ(d,a.Y,b);f=a.bE.i;g=0;while(g<f){if((Bt(a.bE,g)).c(b,c,d)>=0)return a.d.c(a.em.no,c,d);g=g+1|0;}BJ(d,a.Y,e);return (-1);}
function AOT(a,b){a.d=b;}
var MW=F(DR);
function ANT(a,b,c,d){var e,f;e=a.bE.i;f=0;while(f<e){if((Bt(a.bE,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AQ_(a,b){return 0;}
var WF=F(DR);
function AGJ(a,b,c,d){var e,f;e=a.bE.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bt(a.bE,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AQC(a,b){return 0;}
var Rq=F(DR);
function AHs(a,b,c,d){var e,f,g,h;e=a.bE.i;f=d.iZ?0:d.cJ;a:{g=a.d.c(b,c,d);if(g>=0){BJ(d,a.Y,b);h=0;while(true){if(h>=e)break a;if((Bt(a.bE,h)).cq(f,b,c,d)>=0){BJ(d,a.Y,(-1));return g;}h=h+1|0;}}}return (-1);}
function ASS(a,b){return 0;}
var T7=F(DR);
function AFz(a,b,c,d){var e,f;e=a.bE.i;BJ(d,a.Y,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bt(a.bE,f)).cq(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function APr(a,b){return 0;}
function Gy(){BR.call(this);this.cV=null;}
function AUq(a,b){var c=new Gy();Z$(c,a,b);return c;}
function Z$(a,b,c){BN(a);a.cV=b;a.em=c;a.Y=c.dy;}
function AFW(a,b,c,d){var e,f;e=FD(d,a.Y);Dz(d,a.Y,b);f=a.cV.c(b,c,d);if(f>=0)return f;Dz(d,a.Y,e);return (-1);}
function AMa(a,b,c,d){var e;e=a.cV.cm(b,c,d);if(e>=0)Dz(d,a.Y,e);return e;}
function APJ(a,b,c,d,e){var f;f=a.cV.cq(b,c,d,e);if(f>=0)Dz(e,a.Y,f);return f;}
function ALM(a,b){return a.cV.bU(b);}
function AN5(a){var b;b=new Nh;Z$(b,a.cV,a.em);a.d=b;return b;}
function AR3(a){var b;a.cj=1;b=a.em;if(b!==null&&!b.cj)Je(b);b=a.cV;if(b!==null&&!b.cj){b=b.fp();if(b!==null){a.cV.cj=1;a.cV=b;}a.cV.ei();}}
var GP=F();
function U(){var a=this;GP.call(a);a.bg=0;a.cg=0;a.K=null;a.jE=null;a.j_=null;a.L=0;}
var AY2=null;function OR(){OR=Bm(U);AH0();}
function Bs(a){var b;OR();b=new Xu;b.C=BG(64);a.K=b;}
function AGL(a){return null;}
function AGg(a){return a.K;}
function ACf(a){var b,c,d,e,f;if(!a.cg)b=Hi(a.K,0)>=2048?0:1;else{a:{c=a.K;b=0;d=c.br;if(b<d){e=c.C.data;f=(e[0]^(-1))>>>0|0;if(f)b=Is(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Is(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AJ2(a){return a.L;}
function AQs(a){return a;}
function Zn(a){var b,c;if(a.j_===null){b=a.eP();c=new WS;c.yd=a;c.nS=b;Bs(c);a.j_=c;Eu(c,a.cg);}return a.j_;}
function HA(a){var b,c;if(a.jE===null){b=a.eP();c=new WR;c.xR=a;c.tC=b;c.ul=a;Bs(c);a.jE=c;Eu(c,a.bg);a.jE.L=a.L;}return a.jE;}
function ARZ(a){return 0;}
function Eu(a,b){var c;c=a.bg;if(c^b){a.bg=c?0:1;a.cg=a.cg?0:1;}if(!a.L)a.L=1;return a;}
function AJa(a){return a.bg;}
function Kp(b,c){OR();return b.k(c);}
function Iq(b,c){var d,e;OR();if(b.df()!==null&&c.df()!==null){b=b.df();c=c.df();d=Z(b.C.data.length,c.C.data.length);e=0;a:{while(e<d){if(b.C.data[e]&c.C.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Sr(b,c){var d,e,f;OR();d=0;while(true){APp();e=AY3.data;if(d>=e.length){f=new Jm;Bo(f,B(31));f.yA=B(31);f.yg=b;J(f);}e=e[d].data;if(Bn(b,e[0]))break;d=d+1|0;}return ADq(e[1],c);}
function AH0(){var b;b=new G_;APp();AY2=b;}
function ZZ(){var a=this;U.call(a);a.lr=0;a.nn=0;a.gm=0;a.k4=0;a.dS=0;a.fi=0;a.H=null;a.bC=null;}
function Dm(){var a=new ZZ();ASA(a);return a;}
function ARe(a,b){var c=new ZZ();AHO(c,a,b);return c;}
function ASA(a){Bs(a);a.H=ASU();}
function AHO(a,b,c){Bs(a);a.H=ASU();a.lr=b;a.nn=c;}
function Cx(a,b){a:{if(a.lr){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dS){MB(a.H,HB(b&65535));break a;}LI(a.H,HB(b&65535));break a;}if(a.nn&&b>128){a.gm=1;b=GE(GC(b));}}}if(!(!SZ(b)&&!O5(b))){if(a.k4)MB(a.K,b-55296|0);else LI(a.K,b-55296|0);}if(a.dS)MB(a.H,b);else LI(a.H,b);if(!a.L&&Md(b))a.L=1;return a;}
function AE4(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(a.k4){if(!b.cg)FU(a.K,b.eP());else Da(a.K,b.eP());}else if(!b.cg)FM(a.K,b.eP());else{Fs(a.K,b.eP());Da(a.K,b.eP());a.cg=a.cg?0:1;a.k4=1;}if(!a.fi&&b.df()!==null){if(a.dS){if(!b.bg)FU(a.H,b.df());else Da(a.H,b.df());}else if(!b.bg)FM(a.H,b.df());else{Fs(a.H,b.df());Da(a.H,b.df());a.bg=a.bg?0:1;a.dS=1;}}else{c=a.bg;d=a.bC;if(d!==null){if(!c){e=new OK;e.wm=a;e.uT=c;e.t7=d;e.tV=b;Bs(e);a.bC=e;}else{e=new OL;e.yI=a;e.ra=c;e.qQ=d;e.p3=b;Bs(e);a.bC=e;}}else{if(c&&!a.dS
&&Mh(a.H)){d=new OH;d.xh=a;d.qZ=b;Bs(d);a.bC=d;}else if(!c){d=new OF;d.kN=a;d.jW=c;d.ov=b;Bs(d);a.bC=d;}else{d=new OG;d.lE=a;d.j4=c;d.t0=b;Bs(d);a.bC=d;}a.fi=1;}}return a;}
function BS(a,b,c){var d,e,f,g,h;if(b>c){d=new BH;X(d);J(d);}a:{b:{if(!a.lr){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cx(a,b);b=b+1|0;}}if(!a.dS)H5(a.H,b,c+1|0);else{d=a.H;c=c+1|0;if(b>c){d=new By;X(d);J(d);}e=d.br;if(b<e){f=Z(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.C.data;h[g]=h[g]&(Il(d,b)|HQ(d,f));}else{h=d.C.data;h[g]=h[g]&Il(d,b);e=g+1|0;while(e<c){d.C.data[e]=0;e=e+1|0;}if(f&31){h=d.C.data;h[c]=h[c]&HQ(d,f);}}Hd(d);}}}}return a;}
function YV(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(b.gm)a.gm=1;c=a.cg;if(!(c^b.cg)){if(!c)FM(a.K,b.K);else Da(a.K,b.K);}else if(c)FU(a.K,b.K);else{Fs(a.K,b.K);Da(a.K,b.K);a.cg=1;}if(!a.fi&&CU(b)!==null){c=a.bg;if(!(c^b.bg)){if(!c)FM(a.H,CU(b));else Da(a.H,CU(b));}else if(c)FU(a.H,CU(b));else{Fs(a.H,CU(b));Da(a.H,CU(b));a.bg=1;}}else{c=a.bg;d=a.bC;if(d!==null){if(!c){e=new OA;e.v8=a;e.s5=c;e.tY=d;e.uA=b;Bs(e);a.bC=e;}else{e=new Pk;e.ww=a;e.ux=c;e.m4=d;e.nq=b;Bs(e);a.bC=e;}}else{if(!a.dS&&Mh(a.H)){if(!c){d=new OI;d.yO
=a;d.pG=b;Bs(d);a.bC=d;}else{d=new OJ;d.wB=a;d.uh=b;Bs(d);a.bC=d;}}else if(!c){d=new OM;d.s8=a;d.rt=b;d.qU=c;Bs(d);a.bC=d;}else{d=new ON;d.rR=a;d.sc=b;d.sp=c;Bs(d);a.bC=d;}a.fi=1;}}}
function Xk(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(b.gm)a.gm=1;c=a.cg;if(!(c^b.cg)){if(!c)Da(a.K,b.K);else FM(a.K,b.K);}else if(!c)FU(a.K,b.K);else{Fs(a.K,b.K);Da(a.K,b.K);a.cg=0;}if(!a.fi&&CU(b)!==null){c=a.bg;if(!(c^b.bg)){if(!c)Da(a.H,CU(b));else FM(a.H,CU(b));}else if(!c)FU(a.H,CU(b));else{Fs(a.H,CU(b));Da(a.H,CU(b));a.bg=0;}}else{c=a.bg;d=a.bC;if(d!==null){if(!c){e=new OC;e.wl=a;e.tc=c;e.nP=d;e.q8=b;Bs(e);a.bC=e;}else{e=new OD;e.wG=a;e.sF=c;e.mT=d;e.s4=b;Bs(e);a.bC=e;}}else{if(!a.dS&&Mh(a.H)){if(!c){d=new Ox;d.wC
=a;d.pf=b;Bs(d);a.bC=d;}else{d=new Oy;d.yE=a;d.pk=b;Bs(d);a.bC=d;}}else if(!c){d=new OE;d.vK=a;d.uP=b;d.r6=c;Bs(d);a.bC=d;}else{d=new Ow;d.r4=a;d.sK=b;d.rc=c;Bs(d);a.bC=d;}a.fi=1;}}}
function CZ(a,b){var c;c=a.bC;if(c!==null)return a.bg^c.k(b);return a.bg^Dv(a.H,b);}
function CU(a){if(!a.fi)return a.H;return null;}
function AI2(a){return a.K;}
function AQR(a){var b,c;if(a.bC!==null)return a;b=CU(a);c=new OB;c.v4=a;c.io=b;Bs(c);return Eu(c,a.bg);}
function AM6(a){var b,c,d;b=new M;O(b);c=Hi(a.H,0);while(c>=0){It(b,Gu(c));BE(b,124);c=Hi(a.H,c+1|0);}d=b.P;if(d>0)WH(b,d-1|0);return N(b);}
function AJd(a){return a.gm;}
function Jm(){var a=this;Bq.call(a);a.yA=null;a.yg=null;}
function D3(){BD.call(this);this.J=null;}
function Dc(a,b,c,d){KX(a,c);a.J=b;a.hE=d;}
function ASz(a){return a.J;}
function APM(a,b){return !a.J.bU(b)&&!a.d.bU(b)?0:1;}
function ARg(a,b){return 1;}
function AMA(a){var b;a.cj=1;b=a.d;if(b!==null&&!b.cj){b=b.fp();if(b!==null){a.d.cj=1;a.d=b;}a.d.ei();}b=a.J;if(b!==null){if(!b.cj){b=b.fp();if(b!==null){a.J.cj=1;a.J=b;}a.J.ei();}else if(b instanceof Gy&&b.em.kg)a.J=b.d;}}
function C3(){D3.call(this);this.bb=null;}
function AUx(a,b,c){var d=new C3();ET(d,a,b,c);return d;}
function ET(a,b,c,d){Dc(a,b,c,d);a.bb=b;}
function AFB(a,b,c,d){var e,f;e=0;a:{while((b+a.bb.b0()|0)<=d.x){f=a.bb.bv(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.bb.b0()|0;e=e+(-1)|0;}return f;}
function E5(){C3.call(this);this.jx=null;}
function ATE(a,b,c,d){var e=new E5();SB(e,a,b,c,d);return e;}
function SB(a,b,c,d,e){ET(a,c,d,e);a.jx=b;}
function AGx(a,b,c,d){var e,f,g,h,i;e=a.jx;f=e.eG;g=e.eC;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bb.b0()|0)>d.x)break a;i=a.bb.bv(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.bb.b0()|0;h=h+(-1)|0;}return i;}if((b+a.bb.b0()|0)>d.x){d.dj=1;return (-1);}i=a.bb.bv(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CQ=F(D3);
function AFV(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.J.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var EA=F(C3);
function AMg(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ASV(a,b){a.d=b;a.J.O(b);}
var WU=F(C3);
function ASi(a,b,c,d){while((b+a.bb.b0()|0)<=d.x&&a.bb.bv(b,c)>0){b=b+a.bb.b0()|0;}return a.d.c(b,c,d);}
function AM2(a,b,c,d){var e,f,g;e=a.d.cm(b,c,d);if(e<0)return (-1);f=e-a.bb.b0()|0;while(f>=b&&a.bb.bv(f,c)>0){g=f-a.bb.b0()|0;e=f;f=g;}return e;}
function Ba(){var a=this;C.call(a);a.lO=null;a.kL=null;}
function ADq(a,b){if(!b&&a.lO===null)a.lO=a.E();else if(b&&a.kL===null)a.kL=Eu(a.E(),1);if(b)return a.kL;return a.lO;}
var Dd=F(BH);
function Nd(){var a=this;GP.call(a);a.eG=0;a.eC=0;}
function ANb(a){var b,c,d,e,f;b=a.eG;c=a.eC;d=c==2147483647?B(31):Mg(AEc(c));e=new M;O(e);BE(e,123);f=T(e,b);BE(f,44);BE(G(f,d),125);return N(e);}
var Ol=F(BD);
function ALs(a,b,c,d){return b;}
function AN0(a,b){return 0;}
function Xu(){var a=this;C.call(a);a.C=null;a.br=0;}
function ASU(){var a=new Xu();AHc(a);return a;}
function AHc(a){a.C=BG(0);}
function LI(a,b){var c,d;c=b/32|0;if(b>=a.br){Iy(a,c+1|0);a.br=b+1|0;}d=a.C.data;d[c]=d[c]|1<<(b%32|0);}
function H5(a,b,c){var d,e,f,g,h;d=BF(b,c);if(d>0){e=new By;X(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.br){Iy(a,f+1|0);a.br=c;}if(d==f){g=a.C.data;g[d]=g[d]|HQ(a,b)&Il(a,c);}else{g=a.C.data;g[d]=g[d]|HQ(a,b);h=d+1|0;while(h<f){a.C.data[h]=(-1);h=h+1|0;}if(c&31){g=a.C.data;g[f]=g[f]|Il(a,c);}}}
function HQ(a,b){return (-1)<<(b%32|0);}
function Il(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function MB(a,b){var c,d;c=b/32|0;d=a.C.data;if(c<d.length){d[c]=d[c]&Kl((-2),b%32|0);if(b==(a.br-1|0))Hd(a);}}
function Dv(a,b){var c,d;c=b/32|0;d=a.C.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Hi(a,b){var c,d,e,f;c=a.br;if(b>=c)return (-1);d=b/32|0;e=a.C.data;f=e[d]>>>(b%32|0)|0;if(f)return Is(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Is(e[f])|0;f=f+1|0;}return (-1);}
function Iy(a,b){var c;c=a.C.data.length;if(c>=b)return;c=Bb((b*3|0)/2|0,(c*2|0)+1|0);a.C=Mn(a.C,c);}
function Hd(a){var b,c,d;b=(a.br+31|0)/32|0;a.br=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NV(a.C.data[c]);if(d<32)break;c=c+(-1)|0;a.br=a.br-32|0;}a.br=a.br-d|0;}}
function Da(a,b){var c,d,e,f;c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&b.C.data[d];d=d+1|0;}while(true){f=a.C.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.br=Z(a.br,b.br);Hd(a);}
function FU(a,b){var c,d,e;c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&(b.C.data[d]^(-1));d=d+1|0;}Hd(a);}
function FM(a,b){var c,d,e;c=Bb(a.br,b.br);a.br=c;Iy(a,(c+31|0)/32|0);c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]|b.C.data[d];d=d+1|0;}}
function Fs(a,b){var c,d,e;c=Bb(a.br,b.br);a.br=c;Iy(a,(c+31|0)/32|0);c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]^b.C.data[d];d=d+1|0;}Hd(a);}
function Mh(a){return a.br?0:1;}
function M4(){var a=this;BR.call(a);a.pn=null;a.v3=0;}
function Qr(){var a=this;BR.call(a);a.mc=null;a.lH=null;}
function AC0(a,b){var c=new Qr();AEK(c,a,b);return c;}
function AEK(a,b,c){BN(a);a.mc=b;a.lH=c;}
function AGs(a,b,c,d){var e,f,g,h,i;e=a.mc.c(b,c,d);if(e<0)a:{f=a.lH;g=d.cJ;e=d.x;h=b+1|0;e=BF(h,e);if(e>0){d.dj=1;e=(-1);}else{i=L(c,b);if(!f.pn.k(i))e=(-1);else{if(CE(i)){if(e<0&&C4(L(c,h))){e=(-1);break a;}}else if(C4(i)&&b>g&&CE(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function ANF(a,b){a.d=b;a.lH.d=b;a.mc.O(b);}
function AG2(a,b){return 1;}
function AGK(a,b){return 1;}
function DB(){var a=this;BR.call(a);a.dI=null;a.xa=0;}
function ALm(a){var b=new DB();UQ(b,a);return b;}
function UQ(a,b){BN(a);a.dI=b.i$();a.xa=b.bg;}
function AIS(a,b,c,d){var e,f,g,h;e=d.x;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Hr(g,f)&&a.k(Ev(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AJr(a,b){return a.dI.k(b);}
function AGl(a,b){if(b instanceof DV)return Kp(a.dI,b.fM);if(b instanceof Em)return Kp(a.dI,b.db);if(b instanceof DB)return Iq(a.dI,b.dI);if(!(b instanceof Eg))return 1;return Iq(a.dI,b.e3);}
function ALg(a){return a.dI;}
function AQm(a,b){a.d=b;}
function AI7(a,b){return 1;}
var Jj=F(DB);
function AK3(a,b){return a.dI.k(GE(GC(b)));}
function ZO(){var a=this;BV.call(a);a.qn=null;a.wX=0;}
function AJ3(a){var b=new ZO();ANh(b,a);return b;}
function ANh(a,b){DA(a);a.qn=b.i$();a.wX=b.bg;}
function ALt(a,b,c){return !a.qn.k(EY(Ez(L(c,b))))?(-1):1;}
function Eg(){var a=this;BV.call(a);a.e3=null;a.xw=0;}
function AQK(a){var b=new Eg();AOv(b,a);return b;}
function AOv(a,b){DA(a);a.e3=b.i$();a.xw=b.bg;}
function ME(a,b,c){return !a.e3.k(L(c,b))?(-1):1;}
function AN3(a,b){if(b instanceof Em)return Kp(a.e3,b.db);if(b instanceof Eg)return Iq(a.e3,b.e3);if(!(b instanceof DB)){if(!(b instanceof DV))return 1;return 0;}return Iq(a.e3,b.dI);}
function OV(){var a=this;BR.call(a);a.gI=null;a.l2=null;a.ju=0;}
function AQX(a,b){var c=new OV();AFX(c,a,b);return c;}
function AFX(a,b,c){BN(a);a.gI=b;a.ju=c;}
function AMf(a,b){a.d=b;}
function QE(a){if(a.l2===null)a.l2=FY(a.gI);return a.l2;}
function AFp(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.x;f=BG(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?E7([k,l]):E7([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ju;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gI.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ju==3){k=f[0];m=a.gI.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ju==2){b=f[0];m=a.gI.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AGT(a,b){return b instanceof OV&&!Bn(QE(b),QE(a))?0:1;}
function AQW(a,b){return 1;}
function Em(){BV.call(this);this.db=0;}
function AAn(a){var b=new Em();AOz(b,a);return b;}
function AOz(a,b){DA(a);a.db=b;}
function ALc(a){return 1;}
function AJY(a,b,c){return a.db!=L(c,b)?(-1):1;}
function AIN(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=GL(c,a.db,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ALi(a,b,c,d,e){var f;if(!(d instanceof Bv))return HY(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F4(d,a.db,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AQN(a,b){if(b instanceof Em)return b.db!=a.db?0:1;if(!(b instanceof Eg)){if(b instanceof DB)return b.k(a.db);if(!(b instanceof DV))return 1;return 0;}return ME(b,0,Xv(a.db))<=0?0:1;}
function AEu(){BV.call(this);this.mO=0;}
function AO0(a){var b=new AEu();AMZ(b,a);return b;}
function AMZ(a,b){DA(a);a.mO=EY(Ez(b));}
function AFk(a,b,c){return a.mO!=EY(Ez(L(c,b)))?(-1):1;}
function YX(){var a=this;BV.call(a);a.uE=0;a.nH=0;}
function AHl(a){var b=new YX();APm(b,a);return b;}
function APm(a,b){DA(a);a.uE=b;a.nH=HB(b);}
function AFO(a,b,c){return a.uE!=L(c,b)&&a.nH!=L(c,b)?(-1):1;}
function Fe(){var a=this;BR.call(a);a.ht=0;a.kB=null;a.j0=null;a.jV=0;}
function AVg(a,b){var c=new Fe();N9(c,a,b);return c;}
function N9(a,b,c){BN(a);a.ht=1;a.j0=b;a.jV=c;}
function AR2(a,b){a.d=b;}
function ANI(a,b,c,d){var e,f,g,h,i,j,k,l;e=BG(4);f=d.x;if(b>=f)return (-1);g=KI(a,b,c,f);h=b+a.ht|0;i=AEd(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dw(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=KI(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AEd(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.ht|0;if(h>=f){b=k;break a;}g=KI(a,h,c,f);b=k;}}}if(b!=a.jV)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.j0.data[g])break;g=g+1|0;}return (-1);}
function Xj(a){var b,c;if(a.kB===null){b=new M;O(b);c=0;while(c<a.jV){It(b,Gu(a.j0.data[c]));c=c+1|0;}a.kB=N(b);}return a.kB;}
function KI(a,b,c,d){var e,f,g;a.ht=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Hr(e,f)){g=BP(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CE(g[0])&&C4(g[1])?Ev(g[0],g[1]):g[0];a.ht=2;}}return e;}
function ALu(a,b){return b instanceof Fe&&!Bn(Xj(b),Xj(a))?0:1;}
function AOW(a,b){return 1;}
var XP=F(Fe);
var Ui=F(Fe);
var YG=F(CQ);
function AHS(a,b,c,d){var e;while(true){e=a.J.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var PL=F(CQ);
function AMP(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.J.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FS=F(CQ);
function AQh(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.J.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function ARr(a,b){a.d=b;a.J.O(b);}
var Pp=F(FS);
function ALf(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function ANc(a,b){a.d=b;}
function Fb(){var a=this;CQ.call(a);a.fZ=null;a.dm=0;}
function AY4(a,b,c,d,e){var f=new Fb();Jh(f,a,b,c,d,e);return f;}
function Jh(a,b,c,d,e,f){Dc(a,c,d,e);a.fZ=b;a.dm=f;}
function ASL(a,b,c,d){var e,f;e=M$(d,a.dm);if(!a.J.I(d))return a.d.c(b,c,d);if(e>=a.fZ.eC)return a.d.c(b,c,d);f=a.dm;e=e+1|0;Ed(d,f,e);f=a.J.c(b,c,d);if(f>=0){Ed(d,a.dm,0);return f;}f=a.dm;e=e+(-1)|0;Ed(d,f,e);if(e>=a.fZ.eG)return a.d.c(b,c,d);Ed(d,a.dm,0);return (-1);}
var Nn=F(Fb);
function AKv(a,b,c,d){var e,f,g;e=0;f=a.fZ.eC;a:{while(true){g=a.J.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fZ.eG)return (-1);return a.d.c(b,c,d);}
var RQ=F(CQ);
function AR9(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.J.c(b,c,d);}
var QD=F(FS);
function AG5(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.J.c(b,c,d);return e;}
var Vo=F(Fb);
function AGa(a,b,c,d){var e,f,g;e=M$(d,a.dm);if(!a.J.I(d))return a.d.c(b,c,d);f=a.fZ;if(e>=f.eC){Ed(d,a.dm,0);return a.d.c(b,c,d);}if(e<f.eG){Ed(d,a.dm,e+1|0);g=a.J.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Ed(d,a.dm,0);return g;}Ed(d,a.dm,e+1|0);g=a.J.c(b,c,d);}return g;}
var RS=F(D3);
function ASx(a,b,c,d){var e;e=d.x;if(e>b)return a.d.cq(b,e,c,d);return a.d.c(b,c,d);}
function AQu(a,b,c,d){var e;e=d.x;if(a.d.cq(b,e,c,d)>=0)return b;return (-1);}
function Ov(){D3.call(this);this.kJ=null;}
function AN6(a,b,c,d){var e,f;e=d.x;f=Vq(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cq(b,e,c,d);return a.d.c(b,c,d);}
function AFt(a,b,c,d){var e,f,g,h;e=d.x;f=a.d.cm(b,c,d);if(f<0)return (-1);g=Vq(a,f,e,c);if(g>=0)e=g;g=Bb(f,a.d.cq(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kJ.hx(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Vq(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kJ.hx(L(d,b)))break;b=b+1|0;}return b;}
var EN=F();
var AY5=null;var AY6=null;function Ps(b){var c;if(!(b&1)){c=AY6;if(c!==null)return c;c=new VS;AY6=c;return c;}c=AY5;if(c!==null)return c;c=new VR;AY5=c;return c;}
var YH=F(C3);
function AGc(a,b,c,d){var e;a:{while(true){if((b+a.bb.b0()|0)>d.x)break a;e=a.bb.bv(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var WQ=F(EA);
function AMO(a,b,c,d){var e;if((b+a.bb.b0()|0)<=d.x){e=a.bb.bv(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var Pd=F(E5);
function APR(a,b,c,d){var e,f,g,h,i;e=a.jx;f=e.eG;g=e.eC;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bb.b0()|0)>d.x)break a;i=a.bb.bv(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.bb.b0()|0)>d.x){d.dj=1;return (-1);}i=a.bb.bv(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qw=F(C3);
function ANX(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.bb.b0()|0)<=d.x){e=a.bb.bv(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Uy=F(EA);
function AGk(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.J.c(b,c,d);}
var Rr=F(E5);
function AP7(a,b,c,d){var e,f,g,h,i,j;e=a.jx;f=e.eG;g=e.eC;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.bb.b0()|0)<=d.x){i=a.bb.bv(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bb.b0()|0)>d.x){d.dj=1;return (-1);}j=a.bb.bv(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Kz=F(BD);
function ALO(a,b,c,d){if(b&&!(d.fj&&b==d.cJ))return (-1);return a.d.c(b,c,d);}
function AKM(a,b){return 0;}
function AAw(){BD.call(this);this.t8=0;}
function AQI(a){var b=new AAw();AK9(b,a);return b;}
function AK9(a,b){BN(a);a.t8=b;}
function AGI(a,b,c,d){var e,f,g;e=b<d.x?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.iZ?0:d.cJ;return (e!=32&&!QG(a,e,b,g,c)?0:1)^(f!=32&&!QG(a,f,b-1|0,g,c)?0:1)^a.t8?(-1):a.d.c(b,c,d);}
function AGR(a,b){return 0;}
function QG(a,b,c,d,e){var f;if(!JD(b)&&b!=95){a:{if(Cv(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(JD(f))return 0;if(Cv(f)!=6)return 1;}}return 1;}return 0;}
var Oq=F(BD);
function AK7(a,b,c,d){if(b!=d.hG)return (-1);return a.d.c(b,c,d);}
function ASG(a,b){return 0;}
function Xw(){BD.call(this);this.f8=0;}
function AUK(a){var b=new Xw();AD2(b,a);return b;}
function AD2(a,b){BN(a);a.f8=b;}
function AOG(a,b,c,d){var e,f,g;e=!d.fj?I(c):d.x;if(b>=e){BJ(d,a.f8,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BJ(d,a.f8,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BJ(d,a.f8,0);return a.d.c(b,c,d);}
function AHH(a,b){var c;c=!Dl(b,a.f8)?0:1;BJ(b,a.f8,(-1));return c;}
var Xe=F(BD);
function ANB(a,b,c,d){if(b<(d.iZ?I(c):d.x))return (-1);d.dj=1;d.x1=1;return a.d.c(b,c,d);}
function AFh(a,b){return 0;}
function Nz(){BD.call(this);this.ri=null;}
function AHx(a,b,c,d){a:{if(b!=d.x){if(!b)break a;if(d.fj&&b==d.cJ)break a;if(a.ri.sH(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AJG(a,b){return 0;}
var AEj=F(BR);
function AU3(){var a=new AEj();ANo(a);return a;}
function ANo(a){BN(a);}
function ASd(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dj=1;return (-1);}g=L(c,b);if(CE(g)){h=b+2|0;if(h<=e&&Hr(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AGV(a,b){a.d=b;}
function ANi(a){return (-2147483602);}
function AGU(a,b){return 1;}
function ZW(){BR.call(this);this.lc=null;}
function AUD(a){var b=new ZW();AHF(b,a);return b;}
function AHF(a,b){BN(a);a.lc=b;}
function ANr(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dj=1;return (-1);}g=L(c,b);if(CE(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Hr(g,h))return a.lc.hx(Ev(g,h))?(-1):a.d.c(b,c,d);}}return a.lc.hx(g)?(-1):a.d.c(f,c,d);}
function APz(a,b){a.d=b;}
function AFe(a){return (-2147483602);}
function ASn(a,b){return 1;}
function AEa(){BD.call(this);this.hj=0;}
function AT7(a){var b=new AEa();AJB(b,a);return b;}
function AJB(a,b){BN(a);a.hj=b;}
function ALz(a,b,c,d){var e;e=!d.fj?I(c):d.x;if(b>=e){BJ(d,a.hj,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BJ(d,a.hj,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AJz(a,b){var c;c=!Dl(b,a.hj)?0:1;BJ(b,a.hj,(-1));return c;}
function ACi(){BD.call(this);this.hs=0;}
function ATS(a){var b=new ACi();AJ4(b,a);return b;}
function AJ4(a,b){BN(a);a.hs=b;}
function ANz(a,b,c,d){if((!d.fj?I(c)-b|0:d.x-b|0)<=0){BJ(d,a.hs,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BJ(d,a.hs,1);return a.d.c(b+1|0,c,d);}
function AJo(a,b){var c;c=!Dl(b,a.hs)?0:1;BJ(b,a.hs,(-1));return c;}
function YU(){BD.call(this);this.fC=0;}
function AS$(a){var b=new YU();ASN(b,a);return b;}
function ASN(a,b){BN(a);a.fC=b;}
function AKA(a,b,c,d){var e,f,g;e=!d.fj?I(c)-b|0:d.x-b|0;if(!e){BJ(d,a.fC,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BJ(d,a.fC,0);return a.d.c(b,c,d);case 13:if(g!=10){BJ(d,a.fC,0);return a.d.c(b,c,d);}BJ(d,a.fC,0);return a.d.c(b,c,d);default:}return (-1);}
function AHM(a,b){var c;c=!Dl(b,a.fC)?0:1;BJ(b,a.fC,(-1));return c;}
function Ha(){var a=this;BR.call(a);a.ni=0;a.gF=0;}
function AVb(a,b){var c=new Ha();O4(c,a,b);return c;}
function O4(a,b,c){BN(a);a.ni=b;a.gF=c;}
function AGe(a,b,c,d){var e,f,g,h;e=Gb(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=0;while(true){if(f>=I(e)){BJ(d,a.gF,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&HB(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AOQ(a,b){a.d=b;}
function Gb(a,b){var c,d;c=a.ni;d=FD(b,c);c=IC(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.le)?Ca(b.le,d,c):null;}
function APd(a,b){var c;c=!Dl(b,a.gF)?0:1;BJ(b,a.gF,(-1));return c;}
var AEf=F(Ha);
function ATf(a,b){var c=new AEf();ARh(c,a,b);return c;}
function ARh(a,b,c){O4(a,b,c);}
function AHR(a,b,c,d){var e,f;e=Gb(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=!UP(c,e,b)?(-1):I(e);if(f<0)return (-1);BJ(d,a.gF,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AQ8(a,b,c,d){var e,f;e=Gb(a,d);f=d.cJ;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=AAv(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AF3(a,b,c,d,e){var f,g;f=Gb(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PX(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AMG(a,b){return 1;}
var ABk=F(Ha);
function ATT(a,b){var c=new ABk();AJy(c,a,b);return c;}
function AJy(a,b,c){O4(a,b,c);}
function AL6(a,b,c,d){var e,f;e=Gb(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=0;while(true){if(f>=I(e)){BJ(d,a.gF,I(e));return a.d.c(b+I(e)|0,c,d);}if(EY(Ez(L(e,f)))!=EY(Ez(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Ok=F(Gm);
function AJe(a,b,c,d,e){Ne(a,b,c,d,e);return a;}
function AGM(a,b,c,d){XF(a,b,c,d);return a;}
function AHb(a,b){JI(a,b);}
function AQx(a,b,c){XX(a,b,c);return a;}
function RZ(){var a=this;BV.call(a);a.cr=null;a.kD=null;a.ln=null;}
function AIb(a,b,c){return !Kx(a,c,b)?(-1):a.bL;}
function AGD(a,b,c,d){var e,f,g;e=d.x;while(true){if(b>e)return (-1);f=L(a.cr,a.bL-1|0);a:{while(true){g=a.bL;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Kx(a,c,b))break;b=b+S$(a.kD,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bL|0,c,d)>=0)break;b=b+1|0;}return b;}
function AJD(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.cr,0);g=(I(d)-c|0)-a.bL|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Kx(a,d,c))break;c=c-S$(a.ln,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bL|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJ_(a,b){var c;if(b instanceof Em)return b.db!=L(a.cr,0)?0:1;if(b instanceof Eg)return ME(b,0,Ca(a.cr,0,1))<=0?0:1;if(!(b instanceof DB)){if(!(b instanceof DV))return 1;return I(a.cr)>1&&b.fM==Ev(L(a.cr,0),L(a.cr,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.cr,0))){if(I(a.cr)<=1)break b;if(!b.k(Ev(L(a.cr,0),L(a.cr,1))))break b;}c=1;break a;}c=0;}return c;}
function Kx(a,b,c){var d;d=0;while(d<a.bL){if(L(b,d+c|0)!=L(a.cr,d))return 0;d=d+1|0;}return 1;}
function YT(){BV.call(this);this.i3=null;}
function AVe(a){var b=new YT();AQP(b,a);return b;}
function AQP(a,b){var c,d,e;DA(a);c=new M;O(c);d=0;while(true){e=BF(d,b.P);if(e>=0){a.i3=N(c);a.bL=c.P;return;}if(d<0)break;if(e>=0)break;BE(c,EY(Ez(b.D.data[d])));d=d+1|0;}b=new By;X(b);J(b);}
function AMc(a,b,c){var d;d=0;while(true){if(d>=I(a.i3))return I(a.i3);if(L(a.i3,d)!=EY(Ez(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Nt(){BV.call(this);this.hg=null;}
function APT(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.hg))return I(a.hg);e=L(a.hg,d);f=b+d|0;if(e!=L(c,f)&&HB(L(a.hg,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var G_=F();
var AY7=null;var AY8=null;var AY3=null;function APp(){APp=Bm(G_);AIx();}
function AIx(){AY7=AUU();AY8=AT0();AY3=H($rt_arraycls(C),[H(C,[B(414),AVc()]),H(C,[B(415),AS7()]),H(C,[B(416),AUR()]),H(C,[B(417),AUY()]),H(C,[B(418),AY8]),H(C,[B(419),AT_()]),H(C,[B(420),ATY()]),H(C,[B(421),ATk()]),H(C,[B(422),ATe()]),H(C,[B(423),ATr()]),H(C,[B(424),ATG()]),H(C,[B(425),ATo()]),H(C,[B(426),AUw()]),H(C,[B(427),AS1()]),H(C,[B(428),AUV()]),H(C,[B(429),ATF()]),H(C,[B(430),AT9()]),H(C,[B(431),ATD()]),H(C,[B(432),AT$()]),H(C,[B(433),ATu()]),H(C,[B(434),AU2()]),H(C,[B(435),ATy()]),H(C,[B(436),AUd()]),
H(C,[B(437),AUP()]),H(C,[B(438),AUL()]),H(C,[B(439),AUZ()]),H(C,[B(440),ATt()]),H(C,[B(441),AUB()]),H(C,[B(442),AY7]),H(C,[B(443),AUj()]),H(C,[B(444),ATl()]),H(C,[B(445),AY7]),H(C,[B(446),ASZ()]),H(C,[B(447),AY8]),H(C,[B(448),ATN()]),H(C,[B(449),P(0,127)]),H(C,[B(450),P(128,255)]),H(C,[B(451),P(256,383)]),H(C,[B(452),P(384,591)]),H(C,[B(453),P(592,687)]),H(C,[B(454),P(688,767)]),H(C,[B(455),P(768,879)]),H(C,[B(456),P(880,1023)]),H(C,[B(457),P(1024,1279)]),H(C,[B(458),P(1280,1327)]),H(C,[B(459),P(1328,1423)]),
H(C,[B(460),P(1424,1535)]),H(C,[B(461),P(1536,1791)]),H(C,[B(462),P(1792,1871)]),H(C,[B(463),P(1872,1919)]),H(C,[B(464),P(1920,1983)]),H(C,[B(465),P(2304,2431)]),H(C,[B(466),P(2432,2559)]),H(C,[B(467),P(2560,2687)]),H(C,[B(468),P(2688,2815)]),H(C,[B(469),P(2816,2943)]),H(C,[B(470),P(2944,3071)]),H(C,[B(471),P(3072,3199)]),H(C,[B(472),P(3200,3327)]),H(C,[B(473),P(3328,3455)]),H(C,[B(474),P(3456,3583)]),H(C,[B(475),P(3584,3711)]),H(C,[B(476),P(3712,3839)]),H(C,[B(477),P(3840,4095)]),H(C,[B(478),P(4096,4255)]),
H(C,[B(479),P(4256,4351)]),H(C,[B(480),P(4352,4607)]),H(C,[B(481),P(4608,4991)]),H(C,[B(482),P(4992,5023)]),H(C,[B(483),P(5024,5119)]),H(C,[B(484),P(5120,5759)]),H(C,[B(485),P(5760,5791)]),H(C,[B(486),P(5792,5887)]),H(C,[B(487),P(5888,5919)]),H(C,[B(488),P(5920,5951)]),H(C,[B(489),P(5952,5983)]),H(C,[B(490),P(5984,6015)]),H(C,[B(491),P(6016,6143)]),H(C,[B(492),P(6144,6319)]),H(C,[B(493),P(6400,6479)]),H(C,[B(494),P(6480,6527)]),H(C,[B(495),P(6528,6623)]),H(C,[B(496),P(6624,6655)]),H(C,[B(497),P(6656,6687)]),
H(C,[B(498),P(7424,7551)]),H(C,[B(499),P(7552,7615)]),H(C,[B(500),P(7616,7679)]),H(C,[B(501),P(7680,7935)]),H(C,[B(502),P(7936,8191)]),H(C,[B(503),P(8192,8303)]),H(C,[B(504),P(8304,8351)]),H(C,[B(505),P(8352,8399)]),H(C,[B(506),P(8400,8447)]),H(C,[B(507),P(8448,8527)]),H(C,[B(508),P(8528,8591)]),H(C,[B(509),P(8592,8703)]),H(C,[B(510),P(8704,8959)]),H(C,[B(511),P(8960,9215)]),H(C,[B(512),P(9216,9279)]),H(C,[B(513),P(9280,9311)]),H(C,[B(514),P(9312,9471)]),H(C,[B(515),P(9472,9599)]),H(C,[B(516),P(9600,9631)]),
H(C,[B(517),P(9632,9727)]),H(C,[B(518),P(9728,9983)]),H(C,[B(519),P(9984,10175)]),H(C,[B(520),P(10176,10223)]),H(C,[B(521),P(10224,10239)]),H(C,[B(522),P(10240,10495)]),H(C,[B(523),P(10496,10623)]),H(C,[B(524),P(10624,10751)]),H(C,[B(525),P(10752,11007)]),H(C,[B(526),P(11008,11263)]),H(C,[B(527),P(11264,11359)]),H(C,[B(528),P(11392,11519)]),H(C,[B(529),P(11520,11567)]),H(C,[B(530),P(11568,11647)]),H(C,[B(531),P(11648,11743)]),H(C,[B(532),P(11776,11903)]),H(C,[B(533),P(11904,12031)]),H(C,[B(534),P(12032,12255)]),
H(C,[B(535),P(12272,12287)]),H(C,[B(536),P(12288,12351)]),H(C,[B(537),P(12352,12447)]),H(C,[B(538),P(12448,12543)]),H(C,[B(539),P(12544,12591)]),H(C,[B(540),P(12592,12687)]),H(C,[B(541),P(12688,12703)]),H(C,[B(542),P(12704,12735)]),H(C,[B(543),P(12736,12783)]),H(C,[B(544),P(12784,12799)]),H(C,[B(545),P(12800,13055)]),H(C,[B(546),P(13056,13311)]),H(C,[B(547),P(13312,19893)]),H(C,[B(548),P(19904,19967)]),H(C,[B(549),P(19968,40959)]),H(C,[B(550),P(40960,42127)]),H(C,[B(551),P(42128,42191)]),H(C,[B(552),P(42752,
42783)]),H(C,[B(553),P(43008,43055)]),H(C,[B(554),P(44032,55203)]),H(C,[B(555),P(55296,56191)]),H(C,[B(556),P(56192,56319)]),H(C,[B(557),P(56320,57343)]),H(C,[B(558),P(57344,63743)]),H(C,[B(559),P(63744,64255)]),H(C,[B(560),P(64256,64335)]),H(C,[B(561),P(64336,65023)]),H(C,[B(562),P(65024,65039)]),H(C,[B(563),P(65040,65055)]),H(C,[B(564),P(65056,65071)]),H(C,[B(565),P(65072,65103)]),H(C,[B(566),P(65104,65135)]),H(C,[B(567),P(65136,65279)]),H(C,[B(568),P(65280,65519)]),H(C,[B(569),P(0,1114111)]),H(C,[B(570),
ATp()]),H(C,[B(571),BL(0,1)]),H(C,[B(572),IY(62,1)]),H(C,[B(573),BL(1,1)]),H(C,[B(574),BL(2,1)]),H(C,[B(575),BL(3,0)]),H(C,[B(576),BL(4,0)]),H(C,[B(577),BL(5,1)]),H(C,[B(578),IY(448,1)]),H(C,[B(579),BL(6,1)]),H(C,[B(580),BL(7,0)]),H(C,[B(581),BL(8,1)]),H(C,[B(582),IY(3584,1)]),H(C,[B(583),BL(9,1)]),H(C,[B(584),BL(10,1)]),H(C,[B(585),BL(11,1)]),H(C,[B(586),IY(28672,0)]),H(C,[B(587),BL(12,0)]),H(C,[B(588),BL(13,0)]),H(C,[B(589),BL(14,0)]),H(C,[B(590),ATU(983040,1,1)]),H(C,[B(591),BL(15,0)]),H(C,[B(592),BL(16,
1)]),H(C,[B(593),BL(18,1)]),H(C,[B(594),AT6(19,0,1)]),H(C,[B(595),IY(1643118592,1)]),H(C,[B(596),BL(20,0)]),H(C,[B(597),BL(21,0)]),H(C,[B(598),BL(22,0)]),H(C,[B(599),BL(23,0)]),H(C,[B(600),BL(24,1)]),H(C,[B(601),IY(2113929216,1)]),H(C,[B(602),BL(25,1)]),H(C,[B(603),BL(26,0)]),H(C,[B(604),BL(27,0)]),H(C,[B(605),BL(28,1)]),H(C,[B(606),BL(29,0)]),H(C,[B(607),BL(30,0)])]);}
function MM(){BV.call(this);this.qL=0;}
function AP0(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.qL!=GE(GC(Ev(e,d)))?(-1):2;}
function K$(){BR.call(this);this.gj=0;}
function ANn(a){var b=new K$();AG8(b,a);return b;}
function AG8(a,b){BN(a);a.gj=b;}
function ANR(a,b){a.d=b;}
function AHI(a,b,c,d){var e,f;e=b+1|0;if(e>d.x){d.dj=1;return (-1);}f=L(c,b);if(b>d.cJ&&CE(L(c,b-1|0)))return (-1);if(a.gj!=f)return (-1);return a.d.c(e,c,d);}
function AJ9(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.cJ;f=d.x;while(true){if(b>=f)return (-1);g=GL(c,a.gj,b);if(g<0)return (-1);if(g>e&&CE(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AIj(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HY(a,b,c,d,e);f=e.cJ;a:{while(true){if(c<b)return (-1);g=F4(d,a.gj,c);if(g<0)break a;if(g<b)break a;if(g>f&&CE(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AF1(a,b){if(b instanceof Em)return 0;if(b instanceof Eg)return 0;if(b instanceof DB)return 0;if(b instanceof DV)return 0;if(b instanceof Lt)return 0;if(!(b instanceof K$))return 1;return b.gj!=a.gj?0:1;}
function AQD(a,b){return 1;}
function Lt(){BR.call(this);this.fV=0;}
function AKE(a){var b=new Lt();ANv(b,a);return b;}
function ANv(a,b){BN(a);a.fV=b;}
function AHa(a,b){a.d=b;}
function AFA(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;g=BF(f,e);if(g>0){d.dj=1;return (-1);}h=L(c,b);if(g<0&&C4(L(c,f)))return (-1);if(a.fV!=h)return (-1);return a.d.c(f,c,d);}
function AOg(a,b,c,d){var e,f;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=GL(c,a.fV,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C4(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function APS(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HY(a,b,c,d,e);f=e.x;a:{while(true){if(c<b)return (-1);g=F4(d,a.fV,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C4(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AIc(a,b){if(b instanceof Em)return 0;if(b instanceof Eg)return 0;if(b instanceof DB)return 0;if(b instanceof DV)return 0;if(b instanceof K$)return 0;if(!(b instanceof Lt))return 1;return b.fV!=a.fV?0:1;}
function AOs(a,b){return 1;}
function DV(){var a=this;BV.call(a);a.jM=0;a.ik=0;a.fM=0;}
function APe(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.jM==e&&a.ik==d?2:(-1);}
function AM7(a,b,c,d){var e,f;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.x;while(b<e){b=GL(c,a.jM,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.ik==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AG$(a,b,c,d,e){var f;if(!(d instanceof Bv))return HY(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F4(d,a.ik,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jM==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AO1(a,b){if(b instanceof DV)return b.fM!=a.fM?0:1;if(b instanceof DB)return b.k(a.fM);if(b instanceof Em)return 0;if(!(b instanceof Eg))return 1;return 0;}
var VR=F(EN);
function AHm(a,b){return b!=10?0:1;}
function AO8(a,b,c){return b!=10?0:1;}
var VS=F(EN);
function AP_(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ARW(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ADa(){var a=this;C.call(a);a.mw=null;a.j3=null;a.gV=0;a.vl=0;}
function ANg(a){var b=new ADa();AK5(b,a);return b;}
function AK5(a,b){var c,d;while(true){c=a.gV;if(b<c)break;a.gV=c<<1|1;}d=c<<1|1;a.gV=d;d=d+1|0;a.mw=BG(d);a.j3=BG(d);a.vl=b;}
function Ru(a,b,c){var d,e,f,g;d=0;e=a.gV;f=b&e;while(true){g=a.mw.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.j3.data[f]=c;}
function S$(a,b){var c,d,e,f;c=a.gV;d=b&c;e=0;while(true){f=a.mw.data[d];if(!f)break;if(f==b)return a.j3.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.vl;}
var Y_=F();
var K8=F(Ba);
function AUU(){var a=new K8();AKw(a);return a;}
function AKw(a){}
function ABs(a){return Cx(BS(Dm(),9,13),32);}
var J7=F(Ba);
function AT0(){var a=new J7();AQA(a);return a;}
function AQA(a){}
function ACb(a){return BS(Dm(),48,57);}
var AC6=F(Ba);
function AVc(){var a=new AC6();AJO(a);return a;}
function AJO(a){}
function APC(a){return BS(Dm(),97,122);}
var ADE=F(Ba);
function AS7(){var a=new ADE();ALa(a);return a;}
function ALa(a){}
function AQF(a){return BS(Dm(),65,90);}
var ADJ=F(Ba);
function AUR(){var a=new ADJ();AGF(a);return a;}
function AGF(a){}
function AIT(a){return BS(Dm(),0,127);}
var K4=F(Ba);
function AUY(){var a=new K4();AHU(a);return a;}
function AHU(a){}
function Z1(a){return BS(BS(Dm(),97,122),65,90);}
var LF=F(K4);
function AT_(){var a=new LF();AKL(a);return a;}
function AKL(a){}
function AAW(a){return BS(Z1(a),48,57);}
var AE3=F(Ba);
function ATY(){var a=new AE3();AMT(a);return a;}
function AMT(a){}
function AJ7(a){return BS(BS(BS(Dm(),33,64),91,96),123,126);}
var MD=F(LF);
function ATk(){var a=new MD();AOL(a);return a;}
function AOL(a){}
function YP(a){return BS(BS(BS(AAW(a),33,64),91,96),123,126);}
var ABF=F(MD);
function ATe(){var a=new ABF();AQr(a);return a;}
function AQr(a){}
function AMB(a){return Cx(YP(a),32);}
var AB5=F(Ba);
function ATr(){var a=new AB5();APU(a);return a;}
function APU(a){}
function AH6(a){return Cx(Cx(Dm(),32),9);}
var AAq=F(Ba);
function ATG(){var a=new AAq();ARJ(a);return a;}
function ARJ(a){}
function AMy(a){return Cx(BS(Dm(),0,31),127);}
var Z9=F(Ba);
function ATo(){var a=new Z9();AGQ(a);return a;}
function AGQ(a){}
function ARY(a){return BS(BS(BS(Dm(),48,57),97,102),65,70);}
var ADN=F(Ba);
function AUw(){var a=new ADN();AGw(a);return a;}
function AGw(a){}
function ANd(a){var b;b=new Tt;b.w_=a;Bs(b);b.L=1;return b;}
var AFd=F(Ba);
function AS1(){var a=new AFd();AO6(a);return a;}
function AO6(a){}
function AFr(a){var b;b=new M1;b.xj=a;Bs(b);b.L=1;return b;}
var ADb=F(Ba);
function AUV(){var a=new ADb();AGG(a);return a;}
function AGG(a){}
function AKF(a){var b;b=new Sj;b.wU=a;Bs(b);return b;}
var AC1=F(Ba);
function ATF(){var a=new AC1();AMz(a);return a;}
function AMz(a){}
function APi(a){var b;b=new Si;b.wD=a;Bs(b);return b;}
var AD4=F(Ba);
function AT9(){var a=new AD4();AHQ(a);return a;}
function AHQ(a){}
function AH2(a){var b;b=new Xm;b.x8=a;Bs(b);H5(b.K,0,2048);b.L=1;return b;}
var Zt=F(Ba);
function ATD(){var a=new Zt();AHh(a);return a;}
function AHh(a){}
function AIr(a){var b;b=new O7;b.xx=a;Bs(b);b.L=1;return b;}
var Y8=F(Ba);
function AT$(){var a=new Y8();AL_(a);return a;}
function AL_(a){}
function ARS(a){var b;b=new Oe;b.yB=a;Bs(b);b.L=1;return b;}
var ADi=F(Ba);
function ATu(){var a=new ADi();AMU(a);return a;}
function AMU(a){}
function AFl(a){var b;b=new QT;b.xb=a;Bs(b);return b;}
var ADv=F(Ba);
function AU2(){var a=new ADv();AKk(a);return a;}
function AKk(a){}
function ALD(a){var b;b=new MU;b.vW=a;Bs(b);b.L=1;return b;}
var AAO=F(Ba);
function ATy(){var a=new AAO();AF4(a);return a;}
function AF4(a){}
function AIC(a){var b;b=new MZ;b.xB=a;Bs(b);b.L=1;return b;}
var AB$=F(Ba);
function AUd(){var a=new AB$();AHq(a);return a;}
function AHq(a){}
function AJI(a){var b;b=new NZ;b.x5=a;Bs(b);b.L=1;return b;}
var AEG=F(Ba);
function AUP(){var a=new AEG();ALI(a);return a;}
function ALI(a){}
function ALF(a){var b;b=new Pv;b.ym=a;Bs(b);b.L=1;return b;}
var ADu=F(Ba);
function AUL(){var a=new ADu();ANa(a);return a;}
function ANa(a){}
function AQZ(a){var b;b=new PE;b.wW=a;Bs(b);return b;}
var ABh=F(Ba);
function AUZ(){var a=new ABh();AHj(a);return a;}
function AHj(a){}
function AOB(a){var b;b=new Ue;b.xM=a;Bs(b);return b;}
var AAM=F(Ba);
function ATt(){var a=new AAM();APl(a);return a;}
function APl(a){}
function AM$(a){var b;b=new SY;b.v0=a;Bs(b);b.L=1;return b;}
var AE$=F(Ba);
function AUB(){var a=new AE$();AKe(a);return a;}
function AKe(a){}
function APv(a){var b;b=new Nb;b.yQ=a;Bs(b);b.L=1;return b;}
var Jv=F(Ba);
function AUj(){var a=new Jv();AIK(a);return a;}
function AIK(a){}
function AB7(a){return Cx(BS(BS(BS(Dm(),97,122),65,90),48,57),95);}
var AD6=F(Jv);
function ATl(){var a=new AD6();AKp(a);return a;}
function AKp(a){}
function AMW(a){var b;b=Eu(AB7(a),1);b.L=1;return b;}
var ABK=F(K8);
function ASZ(){var a=new ABK();ARt(a);return a;}
function ARt(a){}
function AGC(a){var b;b=Eu(ABs(a),1);b.L=1;return b;}
var AAG=F(J7);
function ATN(){var a=new AAG();ALr(a);return a;}
function ALr(a){}
function AJU(a){var b;b=Eu(ACb(a),1);b.L=1;return b;}
function AAe(){var a=this;Ba.call(a);a.qx=0;a.rd=0;}
function P(a,b){var c=new AAe();ARQ(c,a,b);return c;}
function ARQ(a,b,c){a.qx=b;a.rd=c;}
function ALT(a){return BS(Dm(),a.qx,a.rd);}
var AAA=F(Ba);
function ATp(){var a=new AAA();AR5(a);return a;}
function AR5(a){}
function ARD(a){return BS(BS(Dm(),65279,65279),65520,65533);}
function ABA(){var a=this;Ba.call(a);a.l6=0;a.jT=0;a.oI=0;}
function BL(a,b){var c=new ABA();AHL(c,a,b);return c;}
function AT6(a,b,c){var d=new ABA();ARR(d,a,b,c);return d;}
function AHL(a,b,c){a.jT=c;a.l6=b;}
function ARR(a,b,c,d){a.oI=d;a.jT=c;a.l6=b;}
function AJi(a){var b;b=AU9(a.l6);if(a.oI)H5(b.K,0,2048);b.L=a.jT;return b;}
function ABG(){var a=this;Ba.call(a);a.l5=0;a.j5=0;a.np=0;}
function IY(a,b){var c=new ABG();AID(c,a,b);return c;}
function ATU(a,b,c){var d=new ABG();AFo(d,a,b,c);return d;}
function AID(a,b,c){a.j5=c;a.l5=b;}
function AFo(a,b,c,d){a.np=d;a.j5=c;a.l5=b;}
function AFm(a){var b;b=new Sa;ACL(b,a.l5);if(a.np)H5(b.K,0,2048);b.L=a.j5;return b;}
var AAl=F();
var ZM=F();
function ABf(b){var c,d,e,f,g,h,i;c=APG(Gx(b));d=JU(c);e=BG(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+JU(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Nm(c);h=h+1|0;}return e;}
function KP(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function NA(){var a=this;C.call(a);a.pm=0;a.rB=0;a.pA=null;}
function AJg(a,b,c){var d=new NA();AQq(d,a,b,c);return d;}
function AQq(a,b,c,d){a.pm=b;a.rB=c;a.pA=d;}
function ADo(){var a=this;C.call(a);a.n$=null;a.qI=0;}
function APG(a){var b=new ADo();AIf(b,a);return b;}
function AIf(a,b){a.n$=b;}
var ABe=F();
function JU(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.n$.data;f=b.qI;b.qI=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+W(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Nm(b){var c,d;c=JU(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function ZY(){C.call(this);this.In=null;}
function VF(){C.call(this);this.u9=null;}
function AQG(a,b){var c,d,e,f;c=b.data;b=a.u9;d=D$(c[0]);e=FK(c[1]);ABS(b.e.f,d,e);Gw(Ck(b),AXn);F7(Ck(b));f=KB(FG(),b.eY);b=new M;O(b);G(H1(G(b,B(608)),f),B(199));$rt_globals.console.info($rt_ustr(N(b)));}
function Ry(){C.call(this);this.rb=null;}
function AJf(a,b){KT(a.rb,b);}
var Zi=F();
function AEL(b){var c,d,e,f,g,h,i,j,k,l;c=new Ww;c.lq=0;c.g2=BG(16);c.e5=0;d=Cy(b);HX(c,d);e=0;f=0;while(f<d){g=B0(b,f);h=g.o.data.length;HX(c,h);i=0;while(i<h){j=NJ(g,i);k=Mv(j);HX(c,e);HX(c,k);e=e+Mv(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}d=c.lq;if(d&&c.e5!=d){b=EX();d=c.lq;e=c.e5;j=new M;O(j);G(T(G(T(G(j,B(403)),d),B(609)),e),B(610));Br(b,N(j));}l=c.g2;d=l.data.length;e=c.e5;if(d!=e)l=Mn(l,e);return l;}
function ADw(b){var c,d,e,f,g,h,i,j,k;c=BC(b);d=R(H$,c);e=d.data;f=0;while(f<c){a:{g=BC(b);if(g!=(-1)){h=BC(b);i=BC(b);if(i==(-1)){j=new H$;j.f1=h;e[g]=j;}else{j=new H$;j.f1=h;j.lp=BG(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].lp.data[k]=BC(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function Rx(){C.call(this);this.us=null;}
function APj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.us;d=D$(c[0]);c=AD_(d);e=new Q6;d=ADw(c);f=ADw(c);g=BC(c);h=R(L9,g);i=h.data;j=0;while(j<g){k=BC(c);l=BC(c);m=BC(c);n=BC(c);o=BC(c);p=new L9;p.hB=k;p.lD=l;p.hz=m;p.lf=n;p.j2=o;i[j]=p;j=j+1|0;}e.xe=d;e.rp=f;e.f2=h;b.dl=e;LA(b.B,d);LA(b.A,b.dl.rp);}
function Uz(){var a=this;C.call(a);a.vU=null;a.vT=null;a.vV=null;}
function PY(){var a=this;C.call(a);a.yj=null;a.yk=null;}
function WS(){var a=this;U.call(a);a.nS=null;a.yd=null;}
function AI1(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cg^Dv(a.nS,c):0;}
function WR(){var a=this;U.call(a);a.tC=null;a.ul=null;a.xR=null;}
function AFR(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cg^Dv(a.tC,c):0;return a.ul.k(b)&&!d?1:0;}
function OB(){var a=this;U.call(a);a.io=null;a.v4=null;}
function ALK(a,b){return a.bg^Dv(a.io,b);}
function AJK(a){var b,c,d;b=new M;O(b);c=Hi(a.io,0);while(c>=0){It(b,Gu(c));BE(b,124);c=Hi(a.io,c+1|0);}d=b.P;if(d>0)WH(b,d-1|0);return N(b);}
function OH(){var a=this;U.call(a);a.qZ=null;a.xh=null;}
function APh(a,b){return a.qZ.k(b);}
function OF(){var a=this;U.call(a);a.jW=0;a.ov=null;a.kN=null;}
function APZ(a,b){return !(a.jW^Dv(a.kN.H,b))&&!(a.jW^a.kN.dS^a.ov.k(b))?0:1;}
function OG(){var a=this;U.call(a);a.j4=0;a.t0=null;a.lE=null;}
function AMb(a,b){return !(a.j4^Dv(a.lE.H,b))&&!(a.j4^a.lE.dS^a.t0.k(b))?1:0;}
function OK(){var a=this;U.call(a);a.uT=0;a.t7=null;a.tV=null;a.wm=null;}
function AIw(a,b){return a.uT^(!a.t7.k(b)&&!a.tV.k(b)?0:1);}
function OL(){var a=this;U.call(a);a.ra=0;a.qQ=null;a.p3=null;a.yI=null;}
function AFf(a,b){return a.ra^(!a.qQ.k(b)&&!a.p3.k(b)?0:1)?0:1;}
function OI(){var a=this;U.call(a);a.pG=null;a.yO=null;}
function AJP(a,b){return CZ(a.pG,b);}
function OJ(){var a=this;U.call(a);a.uh=null;a.wB=null;}
function AMe(a,b){return CZ(a.uh,b)?0:1;}
function OM(){var a=this;U.call(a);a.rt=null;a.qU=0;a.s8=null;}
function ARa(a,b){return !CZ(a.rt,b)&&!(a.qU^Dv(a.s8.H,b))?0:1;}
function ON(){var a=this;U.call(a);a.sc=null;a.sp=0;a.rR=null;}
function AHX(a,b){return !CZ(a.sc,b)&&!(a.sp^Dv(a.rR.H,b))?1:0;}
function OA(){var a=this;U.call(a);a.s5=0;a.tY=null;a.uA=null;a.v8=null;}
function ASY(a,b){return !(a.s5^a.tY.k(b))&&!CZ(a.uA,b)?0:1;}
function Pk(){var a=this;U.call(a);a.ux=0;a.m4=null;a.nq=null;a.ww=null;}
function AJT(a,b){return !(a.ux^a.m4.k(b))&&!CZ(a.nq,b)?1:0;}
function Ox(){var a=this;U.call(a);a.pf=null;a.wC=null;}
function AHV(a,b){return CZ(a.pf,b);}
function Oy(){var a=this;U.call(a);a.pk=null;a.yE=null;}
function AJx(a,b){return CZ(a.pk,b)?0:1;}
function OE(){var a=this;U.call(a);a.uP=null;a.r6=0;a.vK=null;}
function AK$(a,b){return CZ(a.uP,b)&&a.r6^Dv(a.vK.H,b)?1:0;}
function Ow(){var a=this;U.call(a);a.sK=null;a.rc=0;a.r4=null;}
function AQM(a,b){return CZ(a.sK,b)&&a.rc^Dv(a.r4.H,b)?0:1;}
function OC(){var a=this;U.call(a);a.tc=0;a.nP=null;a.q8=null;a.wl=null;}
function AGP(a,b){return a.tc^a.nP.k(b)&&CZ(a.q8,b)?1:0;}
function OD(){var a=this;U.call(a);a.sF=0;a.mT=null;a.s4=null;a.wG=null;}
function AOq(a,b){return a.sF^a.mT.k(b)&&CZ(a.s4,b)?0:1;}
var L4=F(0);
function SW(){var a=this;C.call(a);a.ws=null;a.t2=null;a.iN=null;a.cu=null;a.ip=0;a.kH=0;}
function MX(a,b){var c,d,e;c=I(a.iN);if(b>=0&&b<=c){Ya(a.cu,null,(-1),(-1));d=a.cu;d.jy=1;d.ed=b;c=d.hG;if(c<0)c=b;d.hG=c;b=a.t2.cm(b,a.iN,d);if(b==(-1))a.cu.dj=1;if(b>=0){d=a.cu;if(d.iQ){e=d.dO.data;if(e[0]==(-1)){c=d.ed;e[0]=c;e[1]=c;}d.hG=Jd(d);return 1;}}a.cu.ed=(-1);return 0;}d=new By;Bo(d,C5(b));J(d);}
function AEE(a){return Pb(a.cu,0);}
function AAH(a){return So(a.cu,0);}
function Ze(a){return a.cu.iZ;}
function ADX(){var a=this;C.call(a);a.B8=null;a.B9=null;a.B7=0.0;}
function Ww(){var a=this;C.call(a);a.g2=null;a.lq=0;a.e5=0;}
function HX(a,b){var c,d;c=a.g2;d=c.data.length;if(d==a.e5)a.g2=Mn(c,d*2|0);c=a.g2.data;d=a.e5;a.e5=d+1|0;c[d]=b;}
var C1=F(0);
var AW0=null;var AYq=null;var AW2=null;var AW1=null;var AW4=null;var AW3=null;var AW6=null;var AW5=null;var AW8=null;var AW7=null;var AW9=null;function ACa(){ACa=Bm(C1);AL8();}
function AL8(){AW0=CL(0);AYq=CM(0,0,0);AW2=Q(B(611));AW1=CM(255,255,255);AW4=CM(166,214,255);AW3=Q(B(612));AW6=Q(B(613));AW5=Q(B(614));AW8=Fw(205,205,205,153);AW7=Fw(255,255,255,0);AW9=Q(B(126));}
function Cg(){Cj.call(this);this.lo=null;}
var AY9=null;var AY$=null;var AY_=null;var AZa=null;var AZb=null;var AZc=null;var AZd=null;var AZe=null;var AZf=null;var AZg=null;var AZh=null;var AZi=null;var AZj=null;var AZk=null;var AZl=null;var AW$=null;function AAy(){AAy=Bm(Cg);AJm();}
function DC(a,b,c){var d=new Cg();WT(d,a,b,c);return d;}
function AKu(a,b,c,d){var e=new Cg();ACO(e,a,b,c,d);return e;}
function WT(a,b,c,d){AAy();C_(a,b,c);a.lo=Iu(d,null);}
function ACO(a,b,c,d,e){AAy();C_(a,b,c);a.lo=Iu(d,e);}
function AJm(){var b;b=new Cg;ACa();WT(b,B(341),0,AYq);AY9=b;AY$=DC(B(342),1,CM(0,49,191));AY_=DC(B(344),2,Q(B(615)));AZa=DC(B(48),3,Q(B(616)));AZb=DC(B(347),4,AYq);AZc=DC(B(348),5,Q(B(617)));AZd=DC(B(350),6,Q(B(383)));AZe=DC(B(49),7,Q(B(618)));AZf=DC(B(353),8,Q(B(619)));AZg=AKu(B(355),9,AYq,CM(237,235,252));AZh=AKu(B(356),10,Q(B(381)),Q(B(620)));AZi=DC(B(357),11,Q(B(383)));AZj=DC(B(359),12,Q(B(384)));AZk=DC(B(361),13,Q(B(621)));b=DC(B(362),14,Q(B(363)));AZl=b;AW$=H(Cg,[AY9,AY$,AY_,AZa,AZb,AZc,AZd,AZe,AZf,AZg,
AZh,AZi,AZj,AZk,b]);}
var Du=F(0);
var AXc=null;var AXd=null;var AW_=null;var AXa=null;var AXb=null;var AYr=null;var AYs=null;var AXe=null;var AXf=null;function APk(){APk=Bm(Du);AJF();}
function AJF(){AXc=Q(B(124));AXd=Q(B(622));AW_=Q(B(623));AXa=Q(B(624));AXb=Q(B(625));AYr=Q(B(124));AYs=Q(B(622));AXe=Fw(205,205,205,153);AXf=CM(247,248,250);}
function Op(){var a=this;C.call(a);a.iq=null;a.ha=0;}
function Om(){C.call(this);this.rI=null;}
function APu(a,b){U1(a.rI,b);}
var Nh=F(Gy);
function AJl(a,b,c,d){var e,f,g;e=0;f=d.x;a:{while(true){if(b>f){b=e;break a;}g=FD(d,a.Y);Dz(d,a.Y,b);e=a.cV.c(b,c,d);if(e>=0)break;Dz(d,a.Y,g);b=b+1|0;}}return b;}
function ASJ(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=FD(e,a.Y);Dz(e,a.Y,c);f=a.cV.c(c,d,e);if(f>=0)break;Dz(e,a.Y,g);c=c+(-1)|0;}}return c;}
function AHG(a){return null;}
var Qk=F(Bq);
var XH=F(Bq);
function VM(){FP.call(this);this.yx=0;}
function P$(){FP.call(this);this.yq=0;}
var Yw=F(Bq);
function VB(){var a=this;C.call(a);a.rz=null;a.tE=null;a.u$=0;a.kd=0;}
function KD(a,b){return B7(a.rz)<b?0:1;}
function Sq(){var a=this;C.call(a);a.vv=null;a.vw=null;}
function S6(){var a=this;C.call(a);a.wV=null;a.pC=null;}
function S5(){C.call(this);this.vX=null;}
var ADd=F(0);
function Mq(b){return !b?H(Bv,[B(155),B(156),B(626)]):H(Bv,[B(155),B(156),B(626),B(41)]);}
var AAC=F();
function Tv(){var a=this;C.call(a);a.ut=null;a.uu=0;a.uv=null;}
function Lx(a,b){var c,d,e,f,g,h,i,j,k;c=a.ut;d=a.uu;e=a.uv;if(b<=d){f=Ck(c);g=new Ti;g.o8=c;h=R(C,1);h.data[0]=e;CP(f,g,B(627),h);}else{i=Ck(c);g=new Tk;g.rQ=c;j=R(C,2);k=j.data;k[0]=e;h=BG(1);h.data[0]=250;k[1]=h;CP(i,g,B(628),j);f=Ck(c);g=new Tl;g.n6=c;h=R(C,1);h.data[0]=e;CP(f,g,B(629),h);}}
function VJ(){var a=this;C.call(a);a.dO=null;a.jI=null;a.k_=null;a.le=null;a.oE=0;a.iQ=0;a.cJ=0;a.x=0;a.ed=0;a.iZ=0;a.fj=0;a.dj=0;a.x1=0;a.hG=0;a.jy=0;}
function BJ(a,b,c){a.jI.data[b]=c;}
function Dl(a,b){return a.jI.data[b];}
function Jd(a){return So(a,0);}
function So(a,b){R_(a,b);return a.dO.data[(b*2|0)+1|0];}
function Dz(a,b,c){a.dO.data[b*2|0]=c;}
function JJ(a,b,c){a.dO.data[(b*2|0)+1|0]=c;}
function FD(a,b){return a.dO.data[b*2|0];}
function IC(a,b){return a.dO.data[(b*2|0)+1|0];}
function AC7(a){return Pb(a,0);}
function Pb(a,b){R_(a,b);return a.dO.data[b*2|0];}
function M$(a,b){return a.k_.data[b];}
function Ed(a,b,c){a.k_.data[b]=c;}
function R_(a,b){var c;if(!a.iQ){c=new D1;X(c);J(c);}if(b>=0&&b<a.oE)return;c=new By;Bo(c,C5(b));J(c);}
function Ya(a,b,c,d){a.iQ=0;a.jy=2;Hz(a.dO,(-1));Hz(a.jI,(-1));if(b!==null)a.le=b;if(c>=0){a.cJ=c;a.x=d;}a.ed=a.cJ;}
function AA1(a){return a.jy;}
function Wa(){C.call(this);this.og=null;}
function ARn(a){DM(a.og);}
function Tt(){U.call(this);this.w_=null;}
function ARk(a,b){return Cv(b)!=2?0:1;}
function M1(){U.call(this);this.xj=null;}
function AGz(a,b){return Cv(b)!=1?0:1;}
function Sj(){U.call(this);this.wU=null;}
function AGj(a,b){return Ro(b);}
function Si(){U.call(this);this.wD=null;}
function AJh(a,b){return 0;}
function Xm(){U.call(this);this.x8=null;}
function AKV(a,b){return !Cv(b)?0:1;}
function O7(){U.call(this);this.xx=null;}
function ARo(a,b){return Cv(b)!=9?0:1;}
function Oe(){U.call(this);this.yB=null;}
function ANL(a,b){return Gp(b);}
function QT(){U.call(this);this.xb=null;}
function APo(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MU(){U.call(this);this.vW=null;}
function ASl(a,b){a:{b:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gp(b);}return b;}
function MZ(){U.call(this);this.xB=null;}
function AIh(a,b){a:{b:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gp(b);}return b;}
function NZ(){U.call(this);this.x5=null;}
function ARB(a,b){a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Pv(){U.call(this);this.ym=null;}
function AMv(a,b){return JD(b);}
function PE(){U.call(this);this.wW=null;}
function AOO(a,b){return PF(b);}
function Ue(){U.call(this);this.xM=null;}
function ARb(a,b){return Cv(b)!=3?0:1;}
function SY(){U.call(this);this.v0=null;}
function AR6(a,b){a:{b:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gp(b);}return b;}
function Nb(){U.call(this);this.yQ=null;}
function AH4(a,b){a:{b:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gp(b);}return b;}
function Mm(){U.call(this);this.lt=0;}
function AU9(a){var b=new Mm();ACL(b,a);return b;}
function ACL(a,b){Bs(a);a.lt=b;}
function ANO(a,b){return a.bg^(a.lt!=Cv(b&65535)?0:1);}
var Sa=F(Mm);
function AQn(a,b){return a.bg^(!(a.lt>>Cv(b&65535)&1)?0:1);}
function P4(){C.call(this);this.vN=null;}
function AL1(a){var b,c;b=a.vN;c=b.vv;b=b.vw;c.Gq(b.ij,b.kk,null);}
function Wi(){C.call(this);this.nY=null;}
function AOF(a,b){var c,d,e,f;c=a.nY;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.pC;c=Bx();b=Cz(b);e=new M;O(e);G(G(e,B(630)),b);Br(c,N(e));b=Bx();f=d.length;c=new M;O(c);T(G(c,B(631)),f);Br(b,N(c));}
function Wl(){var a=this;C.call(a);a.tu=null;a.tv=null;}
function ANj(a,b){var c,d;c=a.tu;d=a.tv;b.arrayBuffer().then(Bk(c,"f"),Bk(d,"f"));}
function T2(){var a=this;C.call(a);a.mB=null;a.mC=null;}
function AJ1(a,b){var c;c=a.mB;Lx(a.mC,JL(c,b.size));}
function T5(){C.call(this);this.uQ=null;}
function AFL(a,b){var c;c=a.uQ;Br(EX(),$rt_str(b.message));Lx(c,0);}
function U5(){C.call(this);this.wL=null;}
function ALV(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Tk(){C.call(this);this.rQ=null;}
function AOp(a,b){var c,d;c=a.rQ;if(!c.h0){b=b.data;c.e.f=ACk(D$(b[0]),FK(b[1]));c.hZ=1;d=KB(FG(),c.eY);b=new M;O(b);G(H1(G(b,B(632)),d),B(199));$rt_globals.console.info($rt_ustr(N(b)));}}
function Tl(){C.call(this);this.n6=null;}
function AMX(a,b){var c,d,e,f,g,h;c=b.data;d=a.n6;e=(D$(c[2])).data[0];if(e!=1)HM(d,b);else{d.h0=1;f=D$(c[0]);g=FK(c[1]);b=d.e;b.f=ADe(b.f,f,g,d.hZ);WL(d,AD1(e));Gw(Ck(d),AXn);F7(Ck(d));h=KB(FG(),d.eY);b=new M;O(b);G(H1(G(b,B(633)),h),B(199));$rt_globals.console.info($rt_ustr(N(b)));Xd(d);HN(d);}}
function Ti(){C.call(this);this.o8=null;}
function ALy(a,b){HM(a.o8,b);}
var ZB=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["cz",AVu(AMq),"cv",AVt(AG7)],R0,0,C,[],0,3,0,0,0,Nk,0,C,[],3,3,0,0,0,MO,0,C,[],3,3,0,0,0,WV,0,C,[Nk,MO],0,3,0,0,0,Z6,0,C,[],4,0,0,0,0,ZN,0,C,[],4,3,0,0,0,Gz,0,C,[],0,3,0,0,0,D4,0,Gz,[],0,3,0,0,0,Bq,0,D4,[],0,3,0,0,0,ABH,0,Bq,[],0,3,0,0,0,Dh,0,C,[],3,3,0,0,0,CJ,0,C,[],3,3,0,0,0,I2,0,C,[],3,3,0,0,0,Bv,"String",1,C,[Dh,CJ,I2],0,3,0,EO,["cv",AVt(AG6),"cz",AVu(Bn),"jz",AVt(Ls),"jR",AVu(AJj)],EI,0,Gz,[],0,3,0,0,0,Hk,0,EI,[],0,3,0,0,0,ABj,0,Hk,[],0,3,0,0,0,DW,0,C,[Dh],1,3,0,0,0,Fh,0,
DW,[CJ],0,3,0,0,["jR",AVu(ALB)],Gm,0,C,[Dh,I2],0,0,0,0,["hO",AVu(JI),"cv",AVt(N)],H4,0,C,[],3,3,0,0,0,M,0,Gm,[H4],0,3,0,0,["lJ",AVx(ALv),"kU",AVw(AIp),"cv",AVt(DU),"hO",AVu(ALE),"mh",AVv(AL9)],Es,0,Hk,[],0,3,0,0,0,ACP,0,Es,[],0,3,0,0,0,AA8,0,Es,[],0,3,0,0,0,Uc,0,C,[],3,3,0,0,0,Dr,0,C,[],3,3,0,0,0,O6,0,C,[],3,0,0,0,0,IJ,0,C,[Uc,Dr,O6],1,3,0,0,["d2",AVt(FR)],RN,0,IJ,[],0,3,0,0,0,Zc,0,C,[],0,3,0,0,0,AD8,0,C,[],4,3,0,0,0,Bd,0,C,[],3,3,0,0,0,Ul,0,C,[Bd],0,3,0,0,0,Bw,0,C,[],3,3,0,0,0,ABW,0,C,[Bw],1,3,0,0,0,Zh,0,C,
[],3,3,0,0,0,ADI,0,C,[],3,3,0,0,0,ADC,0,C,[],3,3,0,0,0,LX,0,C,[],0,3,0,0,0,Z3,0,C,[Bw],1,3,0,0,0,BO,0,C,[Bw],3,3,0,0,0,Um,0,C,[BO],0,3,0,0,["Z",AVu(AFg)],Uk,0,C,[BO],0,3,0,0,["Z",AVu(ARc)],Lz,0,C,[],4,3,0,0,0,ADy,0,C,[],4,3,0,0,0,AAJ,0,C,[],0,3,0,0,0,AE_,0,C,[],4,3,0,0,0,Nq,0,C,[BO],0,3,0,0,["Z",AVu(ANy)]]);
$rt_metadata([ADY,0,C,[Bw],1,3,0,0,0,Zv,0,C,[],0,3,0,0,0,JW,0,C,[Bw],3,3,0,0,0,AAY,0,C,[JW],1,3,0,0,["HC",AVu(ASr),"GX",AVt(AHo)],ABw,0,C,[Bw],1,3,0,0,0,FQ,0,C,[],3,3,0,0,0,Tr,0,C,[FQ],0,3,0,0,0,By,0,Bq,[],0,3,0,0,0,ACu,0,C,[],4,3,0,0,0,GF,0,Bq,[],0,3,0,0,0,IV,0,Bq,[],0,3,0,0,0,C7,0,C,[CJ],0,3,0,0,0,MI,0,C,[Bw],3,3,0,0,0,S3,0,C,[MI],3,3,0,0,0,Ej,0,C,[Bw],3,3,0,0,0,AD7,0,C,[S3,Ej],3,3,0,0,0,N0,0,C,[BO],0,3,0,0,["Z",AVu(AOH)],ABt,0,C,[],4,3,0,0,0,Pu,0,C,[Ej],3,3,0,0,0,RD,0,C,[Ej],3,3,0,0,0,Rs,0,C,[Ej],3,3,0,0,
0,T8,0,C,[Ej],3,3,0,0,0,XG,0,C,[Ej],3,3,0,0,0,Vi,0,C,[Ej,Pu,RD,Rs,T8,XG],3,3,0,0,0,OP,0,C,[],3,3,0,0,0,Zg,0,C,[Bw,Vi,OP,JW],1,3,0,0,["Fu",AVv(AL4),"HH",AVv(AMs),"za",AVu(AGp),"D5",AVw(AND),"B4",AVu(ARx),"Cc",AVt(AHr),"Ax",AVw(AFE)],BH,0,Bq,[],0,3,0,0,0,YF,0,Bq,[],0,3,0,0,0,Hh,0,By,[],0,3,0,0,0,AAs,0,C,[],0,3,0,0,0,D6,0,C,[],4,3,0,KF,["cz",AVu(ARj)],OO,0,C,[],3,3,0,0,0,Ta,0,C,[OO],0,3,0,0,0,B5,0,C,[],3,3,0,0,0,Sb,0,C,[B5],0,3,0,0,0,Bj,0,C,[],3,3,0,0,0,ABQ,0,C,[Bj],0,3,0,0,0,AA0,0,C,[Bw],1,3,0,0,0,ABq,0,C,[Bw],
1,3,0,0,0,Rw,0,C,[Bw],3,3,0,0,0,Wc,0,C,[Rw],0,3,0,0,["D7",AVu(AKD)],V7,0,C,[Bj],0,3,0,0,0,Qj,0,C,[Bw],3,3,0,0,0,V8,0,C,[Qj],0,3,0,0,["u4",AVv(AIJ)],AEe,0,C,[Bw],1,3,0,0,0,Cl,0,C,[Bw],3,3,0,0,0,V5,0,C,[Cl],0,3,0,0,["ce",AVu(AOP)],La,0,C,[],3,3,0,0,0,ED,0,C,[La],1,3,0,0,0,En,0,C,[],3,3,0,0,0]);
$rt_metadata([X8,0,C,[La],3,3,0,0,0,Nj,0,C,[X8],3,3,0,0,0,Pg,0,ED,[En,Dh,Nj],0,3,0,0,0,V6,0,C,[BO],0,3,0,0,["Z",AVu(AP6)],AEB,0,C,[Bw],1,3,0,0,0,AE6,0,C,[Bw],1,3,0,0,0,J1,0,C,[Bw],3,3,0,0,0,Xx,0,C,[J1],0,3,0,0,["vh",AVu(AO_)],ABi,0,C,[Bw],1,3,0,0,0,Xy,0,C,[J1],0,3,0,0,["vh",AVu(AML)],PD,0,C,[],0,3,0,0,0,Lq,0,C,[],1,3,0,0,0,ADG,0,Lq,[],0,3,0,0,0,Cw,0,C,[Dr],1,3,0,0,["cN",AVu(AR$)],Jg,0,C,[FQ],0,3,0,0,["mr",AVv(JE)],AAz,0,C,[],0,3,0,0,0,W0,0,C,[Cl],0,3,0,0,["ce",AVu(AOd)],W1,0,C,[Cl],0,3,0,0,["ce",AVu(AOu)],W2,
0,C,[Cl],0,3,0,0,["ce",AVu(AMJ)],W3,0,C,[Cl],0,3,0,0,["ce",AVu(AL5)],W4,0,C,[Cl],0,3,0,0,["ce",AVu(AMw)],W5,0,C,[Cl],0,3,0,0,["ce",AVu(AO4)],W6,0,C,[Cl],0,3,0,0,["ce",AVu(AKg)],W7,0,C,[Cl],0,3,0,0,["ce",AVu(ASy)],W8,0,C,[Cl],0,3,0,0,["ce",AVu(AJt)],W9,0,C,[Cl],0,3,0,0,["ce",AVu(AQd)],Yp,0,C,[Cl],0,3,0,0,["ce",AVu(AR_)],Yq,0,C,[Cl],0,3,0,0,["ce",AVu(AMi)],Yr,0,C,[Cl],0,3,0,0,["ce",AVu(AMN)],Ys,0,C,[Cl],0,3,0,0,["ce",AVu(AOJ)],UJ,0,C,[],3,3,0,0,0,UW,0,C,[UJ],0,3,0,0,0,UU,0,C,[Cl],0,3,0,0,["ce",AVu(ALl)],MJ,0,
C,[],0,3,0,0,0,AEr,0,C,[],0,3,0,0,0,IZ,0,C,[],3,3,0,0,0,Cn,0,C,[IZ],3,3,0,0,0,Cs,0,C,[],3,3,0,0,["bK",AVu(ALq),"b_",AVv(ARd),"cO",AVv(AF8),"cs",AVw(AO2)],DG,0,C,[],3,3,0,0,0,Ey,0,C,[IZ],3,3,0,0,0,EK,0,C,[],3,3,0,0,0,EP,0,C,[],3,3,0,0,0,E_,0,C,[EP],3,3,0,0,0,Qs,0,C,[Dr],0,3,0,0,0,Bf,0,C,[],0,3,0,0,["cv",AVt(YL)],L6,0,C,[],0,3,0,0,0,ADF,0,C,[],0,3,0,0,0,ZK,0,C,[],3,3,0,0,0,Qi,0,C,[],0,3,0,0,0,LO,0,C,[],0,3,0,0,0]);
$rt_metadata([Dx,0,LO,[],0,3,0,0,0,WK,0,Dx,[],0,3,0,0,0,EC,0,Dx,[],0,3,0,0,0,ABg,0,Dx,[],0,3,0,0,0,ADj,0,EC,[],0,3,0,0,0,ACU,0,EC,[],0,3,0,0,0,Z5,0,EC,[],0,3,0,0,0,ACS,0,Dx,[],0,3,0,0,0,Sm,0,C,[Bw],3,3,0,0,0,AE9,0,C,[Sm],3,3,0,0,0,Qf,0,C,[Dr],0,3,0,0,0,Qh,0,C,[],0,3,0,0,0,Cj,0,C,[CJ,Dh],1,3,0,0,0,GR,0,Cj,[],12,3,0,JP,0,Mr,0,C,[],3,3,0,0,0,TQ,0,C,[Mr],3,3,0,0,0,U$,0,C,[],3,3,0,0,0,Gr,0,C,[TQ,U$],1,3,0,0,0,Jx,0,Gr,[],0,3,0,0,0,AA4,0,Jx,[],0,3,0,0,0,Ge,0,Gr,[],1,3,0,0,0,Ly,0,Ge,[],0,3,0,0,["kj",AVw(ALd)],DY,0,
Cj,[],12,3,0,ARq,0,Jo,0,C,[CJ],1,3,0,0,0,Mu,0,Jo,[],0,3,0,AAS,0,Ky,0,C,[],32,0,0,Zf,0,Pl,0,C,[],0,3,0,0,0,GV,0,Cj,[],12,0,0,ACj,0,Gl,0,Cj,[],12,0,0,ACl,0,KW,0,Ge,[],0,3,0,0,["kj",AVw(AI8)],Wd,0,D4,[],0,3,0,0,0,ADx,0,BH,[],0,3,0,0,0,Mt,0,C,[Bw],3,3,0,0,0,X5,0,C,[Mt],0,3,0,0,["Z",AVu(API)],X6,0,C,[Mt],0,3,0,0,["Z",AVu(AGY)],G8,0,C,[],1,3,0,0,0,SG,0,C,[],3,3,0,0,0,Lg,0,G8,[CJ,H4,I2,SG],1,3,0,0,0,JY,0,G8,[CJ],1,3,0,0,0,HL,0,C,[],0,3,0,Hf,0,Np,0,Cw,[],0,3,0,0,["bA",AVt(AMd),"b6",AVv(AKG)],CR,0,Cw,[],1,3,0,0,["b6",
AVv(G1)],QF,0,C,[],3,3,0,0,0,LP,0,C,[QF],3,3,0,0,0,Ll,0,C,[],3,3,0,0,0,Mo,0,CR,[Cs,LP,Ll,DG,EK,E_],0,3,0,0,["gA",AVv(AKq),"cN",AVu(AI4),"bA",AVt(ARi),"f3",AVt(AP5),"uX",AVt(AJ6),"vn",AVt(APt),"s6",AVu(AQb),"b6",AVv(AO5),"ii",AVu(AGW),"bK",AVu(AMm),"cs",AVw(AMh),"b_",AVv(AGt),"cO",AVv(AJu),"cZ",AVw(AOr),"dr",AVt(AL0)],Wo,0,Mo,[],0,3,0,0,["f3",AVt(AIi)],AEQ,0,C,[],0,3,0,0,0,ABN,0,C,[Bw],1,3,0,0,0,Kb,0,Lg,[],1,0,0,0,0]);
$rt_metadata([ABv,0,Kb,[],0,0,0,0,0,K6,0,C,[],1,3,0,0,0,LV,0,C,[],0,3,0,0,0,Zs,0,C,[],0,3,0,0,0,Iv,0,C,[Bw],3,3,0,0,0,Ny,0,C,[Iv],0,3,0,0,["Z",AVu(AJb)],Nx,0,C,[Iv],0,3,0,0,["Z",AVu(ANC)],Nw,0,C,[BO],0,3,0,0,["Z",AVu(AOo)],Nv,0,C,[BO],0,3,0,0,["Z",AVu(AHA)],Yl,0,C,[Bd],0,3,0,0,["l",AVu(ANk)],Yn,0,C,[Bd],0,3,0,0,["l",AVu(ANZ)],TI,0,C,[B5],0,3,0,0,["bX",AVu(ANU)],TH,0,C,[B5],0,3,0,0,["bX",AVu(AGA)],TG,0,C,[B5],0,3,0,0,["bX",AVu(AKl)],TF,0,C,[B5],0,3,0,0,["bX",AVu(AKi)],TE,0,C,[B5],0,3,0,0,["bX",AVu(AKZ)],TD,0,
C,[B5],0,3,0,0,["bX",AVu(AGH)],TC,0,C,[B5],0,3,0,0,["bX",AVu(AIk)],TB,0,C,[B5],0,3,0,0,["bX",AVu(AOc)],TA,0,C,[B5],0,3,0,0,["bX",AVu(ARU)],Tz,0,C,[B5],0,3,0,0,["bX",AVu(ASK)],Q9,0,C,[B5],0,3,0,0,["bX",AVu(ALS)],Q5,0,C,[B5],0,3,0,0,["bX",AVu(AFs)],Q7,0,C,[B5],0,3,0,0,["bX",AVu(AI9)],Q3,0,C,[B5],0,3,0,0,["bX",AVu(AL$)],Q4,0,C,[B5],0,3,0,0,["bX",AVu(AP2)],Q1,0,C,[B5],0,3,0,0,["bX",AVu(AFi)],Q2,0,C,[B5],0,3,0,0,["bX",AVu(APO)],QZ,0,C,[B5],0,3,0,0,["bX",AVu(ALW)],He,0,C,[],0,3,0,0,0,O9,0,He,[],0,3,0,0,0,ADQ,0,C,
[],0,3,0,0,0,MF,0,He,[],0,3,0,0,0,UL,0,C,[Bw],3,3,0,0,0,NT,0,C,[UL],0,3,0,0,["vh",AVu(ALL)],Vs,0,C,[Bd],0,3,0,0,["l",AVu(WM)],Xs,0,JY,[],0,0,0,0,0,IK,0,C,[],0,3,0,0,0,AC$,0,C,[Cs,DG],0,0,0,0,["bK",AVu(APb),"cs",AVw(ASQ),"b_",AVv(AGZ),"cO",AVv(ANA),"cZ",AVw(AL2)],HW,0,C,[],3,3,0,0,["vB",AVt(AHZ),"sW",AVt(ASX)],AA$,0,C,[HW,Cs,Ll],0,3,0,0,["sW",AVt(AIR),"vB",AVt(AHw),"uX",AVt(YA),"vn",AVt(Xc),"s6",AVu(YB),"cO",AVv(Vn),"b_",AVv(Vu),"cs",AVw(Q8),"bK",AVu(PG),"g6",AVu(ANP)],HT,0,C,[],3,3,0,0,0,Rj,0,C,[HT],0,3,0,0,
["h8",AVu(AKB)],Rh,0,C,[HT],0,3,0,0,["h8",AVu(AMK)],Ri,0,C,[Bd],0,3,0,0,["l",AVu(AGn)],Rf,0,C,[Bd],0,3,0,0,["l",AVu(AFY)],Rg,0,C,[Cn],0,3,0,0,["by",AVu(AMn)],HO,0,C,[Cn],0,3,0,0,["by",AVu(APQ)],Rd,0,C,[Bd],0,3,0,0,["l",AVu(AOl)],Re,0,C,[Ey],0,3,0,0,["by",AVu(ALb)]]);
$rt_metadata([ACE,0,C,[Bw],1,3,0,0,0,ZF,0,C,[],3,3,0,0,0,Yx,0,C,[],0,3,0,0,0,SL,0,C,[Cn],0,3,0,0,["by",AVu(AST)],SM,0,C,[Cn],0,3,0,0,["by",AVu(AFK)],B4,0,C,[],0,3,0,0,["cz",AVu(ASt)],Eq,0,C,[],3,3,0,0,0,ABM,0,C,[Cs,Eq],0,3,0,0,["bK",AVu(ZR),"cs",AVw(ABL),"b_",AVv(YM),"cO",AVv(AES),"gB",AVv(ARH)],Zd,0,C,[Eq,HW],0,3,0,0,["vB",AVt(AHZ),"sW",AVt(ASX),"gB",AVv(AHu),"g6",AVu(AFZ)],ABx,0,C,[],0,3,0,0,0,Lf,0,C,[],0,3,0,0,0,II,0,C,[],0,3,0,0,0,Wq,0,C,[],0,3,0,0,0,YR,0,C,[],0,3,0,0,0,NC,0,C,[],0,3,0,0,0,EW,0,C,[Dr],0,
0,0,0,0,ABY,0,C,[],0,3,0,0,0,ABZ,0,C,[Dr],0,3,0,0,0,WI,0,C,[],3,3,0,0,0,Hx,0,C,[WI],3,3,0,0,0,EQ,0,C,[Hx],1,3,0,0,0,Jk,0,C,[Hx],3,3,0,0,0,F9,0,EQ,[Jk],1,3,0,0,["cz",AVu(AM1)],Iw,0,C,[],3,3,0,0,0,N7,0,F9,[En,Dh,Iw],0,3,0,0,["r1",AVu(Bt),"nR",AVt(ANW),"uR",AVu(Eo)],Vg,0,C,[Bd],0,3,0,0,0,Vf,0,C,[Bd],0,3,0,0,["l",AVu(APP)],Vb,0,C,[Bd],0,3,0,0,["l",AVu(ANE)],Va,0,C,[Bj],0,3,0,0,["p",AVt(APL)],Vd,0,C,[Bj],0,3,0,0,["p",AVt(AKz)],Vc,0,C,[Bj],0,3,0,0,["p",AVt(AMV)],VD,0,C,[Bj],0,3,0,0,["p",AVt(APa)],VC,0,C,[Bj],0,3,
0,0,["p",AVt(AKb)],VE,0,C,[Bj],0,3,0,0,["p",AVt(AFF)],Ft,0,Cj,[],12,3,0,AFP,0,Kv,0,C,[],4,3,0,AKX,0,U2,0,C,[],3,3,0,0,0,MP,0,C,[Bj],0,3,0,0,["p",AVt(AL3)],MQ,0,C,[Bj],0,3,0,0,["p",AVt(AKs)],Yo,0,C,[],3,3,0,0,0,HU,0,C,[],0,3,0,0,0,EZ,0,C,[],0,3,0,0,0,Mw,0,EZ,[],0,3,0,0,0,MT,0,EZ,[],0,3,0,0,0,Qp,0,EZ,[],0,3,0,0,0,G3,0,C,[],3,3,0,0,0,RO,0,C,[],3,3,0,0,0,Go,0,C,[CJ],0,3,0,0,0,Jt,0,C,[],0,3,0,0,0,WD,0,C,[],3,3,0,0,0]);
$rt_metadata([Tm,0,C,[WD],0,3,0,0,["cv",AVt(AH5)],U4,0,C,[],3,3,0,0,0,Le,"JsFileHandle",5,C,[U4],0,3,0,0,["cv",AVt(ALj)],N4,0,C,[U2],0,3,0,0,0,ABJ,0,ED,[En,Dh],0,3,0,0,0,CB,0,C,[],0,3,0,0,0,NU,0,C,[Bj],0,3,0,0,["p",AVt(ASf)],B8,0,C,[],0,3,0,0,0,I1,0,C,[],0,3,0,0,0,AEA,0,C,[CJ],0,3,0,0,["cz",AVu(AQl),"jR",AVu(AHd)],XW,0,C,[FQ],0,3,0,0,["mr",AVv(AJ0)],XY,0,C,[FQ],0,3,0,0,["mr",AVv(ALH)],E0,0,C,[],0,3,0,0,0,Hb,0,F9,[Iw],1,0,0,0,["uR",AVu(AME)],Yb,0,Hb,[Iw],0,0,0,0,["nR",AVt(AI6),"r1",AVu(AR4)],Y3,0,C,[],0,3,0,
0,["cv",AVt(AJ8)],O8,0,C,[Hx],3,3,0,0,0,Gh,0,EQ,[O8],1,3,0,0,0,Kn,0,Gh,[],1,0,0,0,0,V4,0,Kn,[],0,0,0,0,0,LE,0,ED,[],1,0,0,0,0,V2,0,LE,[],0,0,0,0,0,V3,0,Hb,[],0,0,0,0,0,FF,0,C,[],3,3,0,0,0,V0,0,C,[FF],0,0,0,0,0,Py,0,C,[FF],3,3,0,0,0,V1,0,C,[Py],0,0,0,0,0,YC,0,C,[FQ],0,3,0,0,0,H0,0,C,[],0,3,0,0,0,I5,0,C,[],0,3,0,0,0,NL,0,C,[FF],0,0,0,0,0,K2,0,K6,[],1,3,0,0,0,PA,0,K2,[],0,3,0,0,0,IA,0,D4,[],0,3,0,0,0,X2,0,C,[Iv],0,3,0,0,["Z",AVu(AHT)],X0,0,C,[BO],0,3,0,0,["Z",AVu(AFI)],X1,0,C,[BO],0,3,0,0,["Z",AVu(AJR)],Hn,0,C,
[],3,3,0,0,0,KN,0,C,[Hn,En],0,0,0,0,["cz",AVu(AH$)],Ik,0,KN,[],0,0,0,0,0,Q6,0,C,[],0,3,0,0,0,L9,0,C,[],0,3,0,0,0,ZS,0,C,[],0,3,0,0,0,KH,0,CR,[LP],0,3,0,0,["cN",AVu(AHJ),"bA",AVt(AKC),"f3",AVt(AOD),"b6",AVv(AM8),"lg",AVv(AAF),"ii",AVu(AGB)],Zk,0,Cw,[],0,3,0,0,["cN",AVu(AFT),"bA",AVt(AIY),"b6",AVv(APH)],WG,0,CR,[Cs,Eq],0,3,0,0,["gB",AVv(AQ$),"b6",AVv(AIq),"bA",AVt(AJc),"bK",AVu(AOZ),"b_",AVv(AJk),"cO",AVv(AG3),"cs",AVw(AOf)],XV,0,CR,[Eq],0,3,0,0,["gB",AVv(AJn),"bA",AVt(AOA),"b6",AVv(AHE),"cN",AVu(APN)],YE,0,CR,
[Cs],0,3,0,0,["bK",AVu(ALq),"b_",AVv(ARd),"cO",AVv(AF8),"cs",AVw(AO2),"bA",AVt(AO$),"cN",AVu(AH3)],Pq,0,Cw,[],0,3,0,0,["bA",AVt(AF_),"b6",AVv(AQS)],Db,0,Cw,[],0,3,0,0,["bA",AVt(SF),"b6",AVv(Tb)]]);
$rt_metadata([Rl,"SelectFileTest",6,Db,[],0,3,0,0,0,AEI,"WorkerTest",7,Db,[],0,3,0,0,0,Xl,"RenderTexture",6,Db,[],0,3,0,0,["cN",AVu(ALC),"bA",AVt(AFM),"b6",AVv(AOy)],SI,"ScissorDemo",6,Db,[],0,3,0,0,["bA",AVt(ASm),"b6",AVv(AHv)],O2,0,Cw,[],0,3,0,0,["bA",AVt(ASp),"b6",AVv(AJJ),"cN",AVu(AH9)],IF,"ClipboardTest",6,Db,[Cs],0,3,0,0,["bK",AVu(ALq),"b_",AVv(ARd),"cO",AVv(AF8),"cs",AVw(APB)],Qo,0,Cw,[],0,3,0,0,["bA",AVt(ASg),"b6",AVv(AMD)],F_,0,Cw,[Cs],1,3,0,0,["bK",AVu(ALq),"b_",AVv(ARd),"cO",AVv(AF8),"cs",AVw(AO2),
"bA",AVt(AA6)],O$,0,F_,[],0,3,0,0,["b_",AVv(ARd),"cO",AVv(AF8),"cs",AVw(AO2),"b6",AVv(ANe),"bK",AVu(AIz)],O_,0,F_,[],0,3,0,0,["b_",AVv(ARd),"cO",AVv(AF8),"cs",AVw(AO2),"bK",AVu(AKy),"bA",AVt(AG4),"b6",AVv(ALJ)],WX,0,CR,[Eq],0,3,0,0,["gB",AVv(AKK),"bA",AVt(ASF),"b6",AVv(AOR),"cN",AVu(ALx)],RG,0,KH,[],0,3,0,0,["f3",AVt(AKQ),"lg",AVv(AMH)],ACN,0,C,[],3,3,0,0,0,H_,0,C,[],0,3,0,0,0,ADH,0,C,[],0,3,0,0,0,Mz,0,C,[Hn,Dh],0,3,0,0,0,JA,0,Mz,[],0,0,0,0,0,AEo,0,C,[],0,3,0,0,0,St,0,C,[Cn],0,3,0,0,["by",AVu(AMR)],Sx,0,C,[Bd],
0,3,0,0,["l",AVu(ARX)],Sw,0,C,[EK],0,3,0,0,["gA",AVv(AMS)],Sv,0,C,[E_],0,3,0,0,["dr",AVt(ARG)],Su,0,C,[DG],0,3,0,0,["cZ",AVw(AQ4)],Sy,0,C,[Ey],0,3,0,0,["by",AVu(AJV)],ADR,0,IK,[],0,3,0,0,0,Uh,0,C,[Cs],0,0,0,0,["bK",AVu(AOK),"cs",AVw(AQj),"b_",AVv(AIV),"cO",AVv(AIv)],R6,0,C,[Cn],0,3,0,0,["by",AVu(AOE)],R5,0,C,[Cn],0,3,0,0,["by",AVu(ARf)],R8,0,C,[EK],0,3,0,0,["gA",AVv(ARO)],R7,0,C,[Bj],0,3,0,0,["p",AVt(ARM)],R4,0,C,[Ey],0,3,0,0,["by",AVu(AMY)],R3,0,C,[DG],0,3,0,0,["cZ",AVw(AKx)],Hg,0,B4,[],0,3,0,0,0,Vr,0,C,[],
0,3,0,0,0,AAd,0,C,[],0,3,0,0,0,TK,0,C,[Cn],0,3,0,0,["by",AVu(AO9)],TN,0,C,[Ey],0,3,0,0,["by",AVu(AFx)],AEF,0,C,[],0,3,0,0,["cz",AVu(ASP)],TM,0,C,[Bj],0,3,0,0,["p",AVt(AKf)],TJ,0,C,[Bj],0,3,0,0,["p",AVt(AQw)],C$,0,C,[],0,3,0,0,0,OS,0,C,[Cn],0,3,0,0,["by",AVu(AHt)],OT,0,C,[Ey],0,3,0,0,["by",AVu(AQO)],ACG,0,C,[],0,3,0,0,0,OU,0,C,[DG],0,3,0,0,["cZ",AVw(ANM)],AEq,0,C,[],0,3,0,0,0,Uw,0,C,[Eq],0,3,0,0,["gB",AVv(ANq)],Ux,0,C,[Cn],0,3,0,0,["by",AVu(AFC)],NB,0,C,[],3,3,0,0,0,ADO,0,C,[NB],0,3,0,0,0]);
$rt_metadata([WW,0,C,[Cs],0,0,0,0,["cs",AVw(AO2),"b_",AVv(AHn),"cO",AVv(AOU),"bK",AVu(AIP)],Tg,0,C,[DG],0,3,0,0,["cZ",AVw(AH8)],Ql,0,C,[Cn],0,3,0,0,["by",AVu(APE)],RK,0,C,[Bd],0,3,0,0,["l",AVu(AF6)],RJ,0,C,[Bd],0,3,0,0,["l",AVu(ASu)],RI,0,C,[Bd],0,3,0,0,["l",AVu(AIs)],RH,0,C,[Bd],0,3,0,0,["l",AVu(ANG)],RF,0,C,[Bd],0,3,0,0,["l",AVu(AMM)],RE,0,C,[Bd],0,3,0,0,["l",AVu(AOS)],Ug,0,C,[Cs],0,0,0,0,["cO",AVv(AF8),"cs",AVw(AO2),"bK",AVu(AQQ),"b_",AVv(AMQ)],C0,0,C,[],3,3,0,FN,0,UH,0,C,[Cs],0,0,0,0,["cs",AVw(AO2),"b_",
AVv(ANV),"cO",AVv(AHp),"bK",AVu(AGh)],N$,0,C,[DG],0,3,0,0,["cZ",AVw(AF$)],SV,0,C,[Cn],0,3,0,0,["by",AVu(AQV)],SU,0,C,[EK],0,3,0,0,["gA",AVv(AIQ)],SS,0,C,[EK],0,3,0,0,["gA",AVv(AQk)],SR,0,C,[E_],0,3,0,0,["dr",AVt(AOe)],ST,0,C,[E_],0,3,0,0,["dr",AVt(AHf)],Sn,0,C,[Cn],0,3,0,0,["by",AVu(AIX)],QM,0,C,[Cn],0,3,0,0,["by",AVu(AJw)],QN,0,C,[Ey],0,3,0,0,["by",AVu(AFD)],QO,0,C,[DG],0,3,0,0,["cZ",AVw(APg)],ABz,0,C,[],0,3,0,0,["cz",AVu(ARs)],CX,0,C,[],3,3,0,ANw,0,Cb,0,Cj,[],12,3,0,ABU,0,IP,0,C,[],0,3,0,0,0,HH,0,C,[],0,3,
0,0,0,ADn,0,C,[],0,3,0,0,0,GB,0,C,[],4,3,0,0,0,AFb,0,C,[],0,3,0,0,0,DT,0,C,[],3,3,0,AKm,0,O0,0,C,[Bw],3,3,0,0,0,Pj,0,C,[O0],0,3,0,0,["u4",AVv(AJC)],O1,0,C,[Bw],3,3,0,0,0,Ph,0,C,[O1],0,3,0,0,["u4",AVv(AKP)],Z7,0,C,[],0,3,0,0,0,Y$,0,C,[Bw],3,3,0,0,0,Jz,0,C,[Dr],0,3,0,0,["d2",AVt(ACZ)],Ub,0,C,[],0,3,0,0,0,DS,0,C,[],3,3,0,Ym,0,Gs,0,C,[],3,3,0,0,0,XD,0,C,[Gs],0,3,0,0,["n5",AVw(APw)],XE,0,C,[Gs],0,3,0,0,0,Ws,0,C,[Cs],0,0,0,0,["bK",AVu(AFJ),"cs",AVw(APy),"b_",AVv(ANu),"cO",AVv(AKY)],YD,0,C,[Bd],0,3,0,0,["l",AVu(AOV)],AB9,
0,C,[],0,3,0,0,0,PS,0,C,[Bd],0,3,0,0,["l",AVu(AK6)],Qy,0,C,[Cn],0,3,0,0,["by",AVu(AK_)],RT,0,C,[Cs],0,0,0,0,["b_",AVv(ARd),"cO",AVv(AF8),"cs",AVw(AO2),"bK",AVu(AFN)],AAk,0,C,[],0,3,0,0,0]);
$rt_metadata([Ci,0,Cj,[],12,3,0,ACm,0,AEv,0,C,[],0,3,0,0,0,AA7,0,C,[Bw],4,3,0,0,0,AEY,0,C,[],0,3,0,0,0,AEh,0,C,[],3,3,0,0,0,CS,0,C,[Bw],1,3,0,0,0,ACy,0,CS,[],1,3,0,0,0,ADf,0,CS,[],1,3,0,0,0,AAa,0,CS,[],1,3,0,0,0,AAu,0,CS,[],1,3,0,0,0,ADP,0,CS,[],1,3,0,0,0,UM,0,C,[Bj],0,3,0,0,["p",AVt(AMr)],ZE,0,C,[],0,3,0,0,0,H$,0,C,[],0,3,0,0,0,AAQ,0,C,[],4,3,0,0,0,Wn,0,C,[Cs],0,0,0,0,["b_",AVv(ARd),"cO",AVv(AF8),"cs",AVw(AO2),"bK",AVu(APY)],AA2,0,C,[Bw],1,3,0,0,0,IS,0,Bq,[],0,3,0,0,0,M3,0,C,[Bd],0,3,0,0,["l",AVu(AP$)],Wx,
0,C,[EP],0,3,0,0,["dr",AVt(ASj)],AE5,0,C,[],0,3,0,0,0,ACv,0,C,[],3,3,0,0,0,LL,0,C,[],3,3,0,0,0,RL,0,C,[LL],0,3,0,0,["rg",AVu(AM9)],QJ,0,C,[Bd],0,3,0,0,["l",AVu(ARv)],YQ,0,C,[],0,3,0,0,0,Nu,0,C,[Dr],0,3,0,0,0,Yk,0,C,[Bd],0,3,0,0,["l",AVu(AN_)],Y7,0,C,[],0,3,0,0,0,AD3,0,C,[CJ],0,3,0,0,["cz",AVu(AFU),"jz",AVt(APf),"jR",AVu(AON)],R2,0,C,[Bd],0,3,0,0,["l",AVu(AM5)],SP,0,C,[],3,3,0,0,0,FP,0,IA,[],0,3,0,0,0,XB,0,EI,[],0,3,0,0,0,Qx,0,C,[Bd],0,3,0,0,["l",AVu(AOa)],UF,0,C,[Bj],0,3,0,0,["p",AVt(AQL)],Mj,0,DW,[CJ],0,3,
0,0,0,FC,0,C,[],0,0,0,0,0,Ke,0,C,[],4,3,0,0,0,VX,0,C,[],0,3,0,0,0,Mc,0,C,[],1,3,0,0,0,ABm,0,CS,[],1,3,0,0,0,QW,0,C,[Bd],0,3,0,0,["l",AVu(AJ5)],We,0,C,[Bd],0,3,0,0,["l",AVu(ASw)],QB,0,C,[Bd],0,3,0,0,["l",AVu(ANf)],EL,0,C,[Dr],0,3,0,0,["d2",AVt(ANK),"jb",AVt(ARy),"jf",AVw(P_),"e6",AVu(ZV),"kr",AVu(AIU),"kh",AVu(AQp),"pZ",AVv(ASC),"cs",AVw(AQY),"b_",AVv(AQe),"cO",AVv(ARl),"bK",AVu(AM3),"cZ",AVw(AIM)],GG,0,EL,[],0,3,0,0,0,Rk,0,GG,[HW],0,3,0,0,["vB",AVt(AHZ),"sW",AVt(ASX),"d2",AVt(ASR),"pZ",AVv(AHW),"e6",AVu(AKH),
"kh",AVu(ALU),"kr",AVu(AIt),"u6",AVt(AAc),"bK",AVu(ARK),"b_",AVv(AF0),"cs",AVw(AGd),"g6",AVu(ALp)],Wm,0,C,[Bj],0,3,0,0,["p",AVt(ASD)],AAZ,0,EL,[],0,3,0,0,["d2",AVt(AGi),"jf",AVw(AH1),"e6",AVu(APV),"cs",AVw(AKc),"b_",AVv(AQ1),"cO",AVv(AJM),"bK",AVu(AK8),"cZ",AVw(AP8),"jb",AVt(ANp)]]);
$rt_metadata([Wu,0,GG,[],0,3,0,0,["u6",AVt(AOb),"jb",AVt(ALY),"kh",AVu(AKJ),"e6",AVu(AIm),"kr",AVu(ALn)],PK,0,C,[Bd],0,3,0,0,0,VQ,0,C,[Bj],0,3,0,0,["p",AVt(AOx)],RR,0,C,[Bj],0,3,0,0,["p",AVt(AKr)],X$,0,C,[],0,3,0,0,0,H7,0,C,[],0,3,0,0,0,T0,0,EL,[],0,3,0,0,0,UD,0,C,[],0,3,0,0,0,YI,0,C,[Bj],0,3,0,0,["p",AVt(AIA)],VY,0,C,[Bd],0,3,0,0,["l",AVu(ARw)],VZ,0,C,[Bd],0,3,0,0,["l",AVu(AGr)],JC,0,C,[],0,3,0,0,0,D1,0,Bq,[],0,3,0,0,0,ACR,0,EI,[],0,3,0,0,0,Uj,0,C,[Bd],0,3,0,0,0,N3,0,C,[Bd],0,3,0,0,["l",AVu(AF9)],N1,0,C,[Bd],
0,3,0,0,["l",AVu(AIa)],KA,0,Mc,[],1,3,0,0,0,T4,0,KA,[],0,3,0,0,0,Qb,0,C,[Bd],0,3,0,0,["l",AVu(AHg)],Sg,0,C,[EP],0,3,0,0,["dr",AVt(AJs)],Sh,0,C,[EP],0,3,0,0,["dr",AVt(AGf)],To,0,C,[EP],0,3,0,0,["dr",AVt(AQi)],VP,0,C,[Bj],0,3,0,0,["p",AVt(ANs)],QY,0,C,[BO],0,3,0,0,["Z",AVu(AFq)],U9,0,C,[BO],0,3,0,0,["Z",AVu(AR7)],Ot,0,C,[Bd],0,3,0,0,0,ADg,0,C,[B5],0,3,0,0,0,Z8,0,C,[B5],0,3,0,0,0,SK,0,C,[Bd],0,3,0,0,["l",AVu(AGq)],SJ,0,C,[Bd],0,3,0,0,["l",AVu(AG9)],Qu,0,C,[Bd],0,3,0,0,["l",AVu(AO3)],Tx,0,C,[Bj],0,3,0,0,["p",AVt(AKt)],N_,
0,C,[Bd],0,3,0,0,["l",AVu(AN$)],J$,0,DW,[CJ],0,3,0,0,0,LH,0,C,[],4,3,0,0,0,M2,0,C,[BO],0,3,0,0,["Z",AVu(ASW)],Up,0,C,[],0,3,0,0,0,NF,0,C,[Gs],0,3,0,0,["n5",AVw(ARN)],Ss,0,DW,[CJ],0,3,0,0,0,Fj,0,Bq,[],0,3,0,0,0,NS,0,C,[],0,3,0,0,0,AD5,0,C,[],0,3,0,0,0,Tp,0,C,[],0,0,0,0,0,ZI,0,C,[],3,3,0,0,0,XS,0,C,[BO],0,3,0,0,["Z",AVu(AP1)],XR,0,C,[BO],0,3,0,0,["Z",AVu(AIg)],Xh,0,C,[BO],0,3,0,0,["Z",AVu(AJQ)],Xg,0,C,[BO],0,3,0,0,["Z",AVu(AKN)],Y9,0,C,[],1,3,0,0,0]);
$rt_metadata([Xp,0,C,[],3,3,0,0,0,XM,0,C,[Cl],0,3,0,0,["ce",AVu(AJH)],AAK,0,C,[],0,3,0,0,0,AEp,0,C,[],0,3,0,0,0,UV,0,C,[Bj],0,3,0,0,["p",AVt(AKn)],UX,0,C,[Bj],0,3,0,0,["p",AVt(APs)],AC2,0,C,[],0,3,0,0,0,Ja,0,Fj,[],0,3,0,0,0,H3,0,Bq,[],0,3,0,0,0,L2,0,Bq,[],0,3,0,0,0,AA_,0,C,[Bd],0,3,0,0,0,SN,0,C,[Bj],0,3,0,0,["p",AVt(ASa)],PT,0,C,[Bd],0,3,0,0,["l",AVu(AMl)],SX,0,C,[Bj],0,3,0,0,["p",AVt(AGy)],YS,0,C,[],0,3,0,0,0,G9,0,C,[],0,3,0,0,0,AC_,0,Gh,[],0,0,0,0,0,Pn,0,EQ,[],0,0,0,0,0,W$,0,By,[],0,3,0,0,0,QH,0,C,[Mr],3,
3,0,0,0,NM,0,C,[QH],3,3,0,0,0,L5,0,C,[NM],1,3,0,0,0,AAP,0,L5,[],0,3,0,0,0,RX,0,C,[Bj],0,3,0,0,["p",AVt(AG_)],RW,0,C,[Bj],0,3,0,0,["p",AVt(AFy)],RV,0,C,[Bj],0,3,0,0,["p",AVt(ALQ)],RU,0,C,[Bj],0,3,0,0,["p",AVt(AQJ)],PM,0,C,[Bj],0,3,0,0,["p",AVt(AP4)],PO,0,C,[Bj],0,3,0,0,["p",AVt(AKT)],PP,0,C,[Bj],0,3,0,0,["p",AVt(AHD)],XT,0,C,[],3,3,0,0,0,WE,0,C,[Bj],0,3,0,0,["p",AVt(AGv)],Th,0,C,[G3],0,3,0,0,["mv",AVv(AGo)],QQ,0,C,[Bd],0,3,0,0,["l",AVu(AKj)],X4,0,C,[Bd],0,3,0,0,["l",AVu(ALP)],VN,0,C,[LL],0,3,0,0,["rg",AVu(JZ)],Te,
0,C,[Bj],0,3,0,0,["p",AVt(ALo)],Tf,0,C,[Bj],0,3,0,0,["p",AVt(AMI)],Td,0,C,[Bj],0,3,0,0,["p",AVt(AN7)],Ou,0,C,[Bj],0,3,0,0,["p",AVt(AKh)],Os,0,C,[Bj],0,3,0,0,["p",AVt(AQT)],VH,0,C,[EP],0,3,0,0,["dr",AVt(AH7)],Wg,0,C,[Bj],0,3,0,0,["p",AVt(AOI)],Wk,0,C,[Bj],0,3,0,0,["p",AVt(ALw)],Wj,0,C,[Bj],0,3,0,0,["p",AVt(AGm)],Wh,0,C,[Bj],0,3,0,0,["p",AVt(AId)],Wp,0,C,[G3],0,3,0,0,["mv",AVv(ARA)],Qa,0,C,[BO],0,3,0,0,["Z",AVu(AIu)],I3,0,C,[Bw],3,3,0,0,0,MY,0,C,[I3],0,3,0,0,["rf",AVt(AKU)]]);
$rt_metadata([MH,0,C,[I3],0,3,0,0,["rf",AVt(AFj)],PI,0,C,[Gs],0,3,0,0,0,XQ,0,C,[BO],0,3,0,0,["Z",AVu(AJ$)],G0,0,C,[],0,0,0,0,0,U6,0,G0,[FF],0,0,0,0,0,Rp,0,G0,[FF],0,0,0,0,0,Rn,0,C,[Dh],4,3,0,0,0,Of,0,C,[Bd],0,3,0,0,["l",AVu(ASO)],Gv,0,Cj,[],12,0,0,Vl,0,Ts,0,C,[Bd],0,3,0,0,["l",AVu(ALA)],BD,0,C,[],1,0,0,0,["cm",AVw(HJ),"cq",AVx(HY),"hI",AVt(AG0),"O",AVu(AQ6),"bU",AVu(AQ3),"fp",AVt(AR0),"ei",AVt(Je)],UZ,0,C,[],32,0,0,ATq,0,Po,0,C,[Bd],0,3,0,0,["l",AVu(AHY)],Wt,0,C,[Bd],0,3,0,0,["l",AVu(AJE)],YJ,0,C,[Bj],0,3,0,
0,["p",AVt(AHK)],CO,0,BD,[],0,0,0,Ms,["c",AVw(AGu),"I",AVu(AGO)],GN,0,C,[],0,0,0,0,0,IX,0,BH,[],0,3,0,0,0,XA,0,C,[BO],0,3,0,0,["Z",AVu(AOn)],ACn,0,C,[Bw],3,3,0,0,0,UK,0,C,[BO],0,3,0,0,["Z",AVu(ANY)],R$,0,CO,[],0,0,0,0,["c",AVw(AF2),"I",AVu(APD)],Yc,0,CO,[],0,0,0,0,["c",AVw(AHN)],PU,0,CO,[],0,0,0,0,["c",AVw(AGX)],Tn,0,CO,[],0,0,0,0,["c",AVw(AF7),"I",AVu(AN9)],Fz,0,CO,[],0,0,0,0,["c",AVw(ARm)],BV,0,BD,[],1,0,0,0,["c",AVw(ASq),"b0",AVt(AQy),"I",AVu(AK2)],AD0,0,BV,[],0,0,0,0,["bv",AVv(AP3),"cm",AVw(AI$),"cq",AVx(AHC),
"I",AVu(AF5)],BR,0,BD,[],0,0,0,0,["c",AVw(AJN),"O",AVu(AN1),"bU",AVu(ALR),"I",AVu(AOM),"ei",AVt(AHy)],I9,0,BR,[],0,0,0,0,["c",AVw(ANJ),"I",AVu(APc)],DR,0,I9,[],0,0,0,0,["c",AVw(AIe),"O",AVu(AOT)],MW,0,DR,[],0,0,0,0,["c",AVw(ANT),"I",AVu(AQ_)],WF,0,DR,[],0,0,0,0,["c",AVw(AGJ),"I",AVu(AQC)],Rq,0,DR,[],0,0,0,0,["c",AVw(AHs),"I",AVu(ASS)],T7,0,DR,[],0,0,0,0,["c",AVw(AFz),"I",AVu(APr)],Gy,0,BR,[],0,0,0,0,["c",AVw(AFW),"cm",AVw(AMa),"cq",AVx(APJ),"bU",AVu(ALM),"fp",AVt(AN5),"ei",AVt(AR3)],GP,0,C,[],1,0,0,0,0,U,0,
GP,[],1,0,0,OR,["df",AVt(AGL),"eP",AVt(AGg),"i$",AVt(AQs),"gX",AVt(ARZ)],ZZ,0,U,[],0,0,0,0,["k",AVu(CZ),"df",AVt(CU),"eP",AVt(AI2),"i$",AVt(AQR),"cv",AVt(AM6),"gX",AVt(AJd)],Jm,0,Bq,[],0,3,0,0,0,D3,0,BD,[],1,0,0,0,["bU",AVu(APM),"I",AVu(ARg),"ei",AVt(AMA)],C3,0,D3,[],0,0,0,0,["c",AVw(AFB)],E5,0,C3,[],0,0,0,0,["c",AVw(AGx)],CQ,0,D3,[],0,0,0,0,["c",AVw(AFV)],EA,0,C3,[],0,0,0,0,["c",AVw(AMg),"O",AVu(ASV)],WU,0,C3,[],0,0,0,0,["c",AVw(ASi),"cm",AVw(AM2)],Ba,0,C,[],1,0,0,0,0,Dd,0,BH,[],0,3,0,0,0,Nd,0,GP,[En],0,0,
0,0,["cv",AVt(ANb)],Ol,0,BD,[],0,0,0,0,["c",AVw(ALs),"I",AVu(AN0)]]);
$rt_metadata([Xu,0,C,[En,Dh],0,3,0,0,0,M4,0,BR,[],0,0,0,0,0,Qr,0,BR,[],0,0,0,0,["c",AVw(AGs),"O",AVu(ANF),"I",AVu(AG2),"bU",AVu(AGK)],DB,0,BR,[],0,0,0,0,["c",AVw(AIS),"k",AVu(AJr),"bU",AVu(AGl),"O",AVu(AQm),"I",AVu(AI7)],Jj,0,DB,[],0,0,0,0,["k",AVu(AK3)],ZO,0,BV,[],0,0,0,0,["bv",AVv(ALt)],Eg,0,BV,[],0,0,0,0,["bv",AVv(ME),"bU",AVu(AN3)],OV,0,BR,[],0,0,0,0,["O",AVu(AMf),"c",AVw(AFp),"bU",AVu(AGT),"I",AVu(AQW)],Em,0,BV,[],0,0,0,0,["b0",AVt(ALc),"bv",AVv(AJY),"cm",AVw(AIN),"cq",AVx(ALi),"bU",AVu(AQN)],AEu,0,BV,
[],0,0,0,0,["bv",AVv(AFk)],YX,0,BV,[],0,0,0,0,["bv",AVv(AFO)],Fe,0,BR,[],0,0,0,0,["O",AVu(AR2),"c",AVw(ANI),"bU",AVu(ALu),"I",AVu(AOW)],XP,0,Fe,[],0,0,0,0,0,Ui,0,Fe,[],0,0,0,0,0,YG,0,CQ,[],0,0,0,0,["c",AVw(AHS)],PL,0,CQ,[],0,0,0,0,["c",AVw(AMP)],FS,0,CQ,[],0,0,0,0,["c",AVw(AQh),"O",AVu(ARr)],Pp,0,FS,[],0,0,0,0,["c",AVw(ALf),"O",AVu(ANc)],Fb,0,CQ,[],0,0,0,0,["c",AVw(ASL)],Nn,0,Fb,[],0,0,0,0,["c",AVw(AKv)],RQ,0,CQ,[],0,0,0,0,["c",AVw(AR9)],QD,0,FS,[],0,0,0,0,["c",AVw(AG5)],Vo,0,Fb,[],0,0,0,0,["c",AVw(AGa)],RS,
0,D3,[],0,0,0,0,["c",AVw(ASx),"cm",AVw(AQu)],Ov,0,D3,[],0,0,0,0,["c",AVw(AN6),"cm",AVw(AFt)],EN,0,C,[],1,0,0,0,0,YH,0,C3,[],0,0,0,0,["c",AVw(AGc)],WQ,0,EA,[],0,0,0,0,["c",AVw(AMO)],Pd,0,E5,[],0,0,0,0,["c",AVw(APR)],Qw,0,C3,[],0,0,0,0,["c",AVw(ANX)],Uy,0,EA,[],0,0,0,0,["c",AVw(AGk)],Rr,0,E5,[],0,0,0,0,["c",AVw(AP7)],Kz,0,BD,[],4,0,0,0,["c",AVw(ALO),"I",AVu(AKM)],AAw,0,BD,[],0,0,0,0,["c",AVw(AGI),"I",AVu(AGR)],Oq,0,BD,[],0,0,0,0,["c",AVw(AK7),"I",AVu(ASG)],Xw,0,BD,[],4,0,0,0,["c",AVw(AOG),"I",AVu(AHH)],Xe,0,BD,
[],0,0,0,0,["c",AVw(ANB),"I",AVu(AFh)],Nz,0,BD,[],0,0,0,0,["c",AVw(AHx),"I",AVu(AJG)],AEj,0,BR,[],0,0,0,0,["c",AVw(ASd),"O",AVu(AGV),"hI",AVt(ANi),"I",AVu(AGU)],ZW,0,BR,[],4,0,0,0,["c",AVw(ANr),"O",AVu(APz),"hI",AVt(AFe),"I",AVu(ASn)],AEa,0,BD,[],4,0,0,0,["c",AVw(ALz),"I",AVu(AJz)],ACi,0,BD,[],0,0,0,0,["c",AVw(ANz),"I",AVu(AJo)],YU,0,BD,[],0,0,0,0,["c",AVw(AKA),"I",AVu(AHM)],Ha,0,BR,[],0,0,0,0,["c",AVw(AGe),"O",AVu(AOQ),"I",AVu(APd)],AEf,0,Ha,[],0,0,0,0,["c",AVw(AHR),"cm",AVw(AQ8),"cq",AVx(AF3),"bU",AVu(AMG)],ABk,
0,Ha,[],0,0,0,0,["c",AVw(AL6)],Ok,0,Gm,[H4],0,3,0,0,["lJ",AVx(AJe),"kU",AVw(AGM),"hO",AVu(AHb),"mh",AVv(AQx)],RZ,0,BV,[],0,0,0,0,["bv",AVv(AIb),"cm",AVw(AGD),"cq",AVx(AJD),"bU",AVu(AJ_)],YT,0,BV,[],0,0,0,0,["bv",AVv(AMc)],Nt,0,BV,[],0,0,0,0,["bv",AVv(APT)]]);
$rt_metadata([G_,0,C,[],4,0,0,APp,0,MM,0,BV,[],0,0,0,0,["bv",AVv(AP0)],K$,0,BR,[],0,0,0,0,["O",AVu(ANR),"c",AVw(AHI),"cm",AVw(AJ9),"cq",AVx(AIj),"bU",AVu(AF1),"I",AVu(AQD)],Lt,0,BR,[],0,0,0,0,["O",AVu(AHa),"c",AVw(AFA),"cm",AVw(AOg),"cq",AVx(APS),"bU",AVu(AIc),"I",AVu(AOs)],DV,0,BV,[],0,0,0,0,["bv",AVv(APe),"cm",AVw(AM7),"cq",AVx(AG$),"bU",AVu(AO1)],VR,0,EN,[],0,0,0,0,["hx",AVu(AHm),"sH",AVv(AO8)],VS,0,EN,[],0,0,0,0,["hx",AVu(AP_),"sH",AVv(ARW)],ADa,0,C,[],0,0,0,0,0,Y_,0,C,[],0,0,0,0,0,K8,0,Ba,[],0,0,0,0,["E",
AVt(ABs)],J7,0,Ba,[],0,0,0,0,["E",AVt(ACb)],AC6,0,Ba,[],0,0,0,0,["E",AVt(APC)],ADE,0,Ba,[],0,0,0,0,["E",AVt(AQF)],ADJ,0,Ba,[],0,0,0,0,["E",AVt(AIT)],K4,0,Ba,[],0,0,0,0,["E",AVt(Z1)],LF,0,K4,[],0,0,0,0,["E",AVt(AAW)],AE3,0,Ba,[],0,0,0,0,["E",AVt(AJ7)],MD,0,LF,[],0,0,0,0,["E",AVt(YP)],ABF,0,MD,[],0,0,0,0,["E",AVt(AMB)],AB5,0,Ba,[],0,0,0,0,["E",AVt(AH6)],AAq,0,Ba,[],0,0,0,0,["E",AVt(AMy)],Z9,0,Ba,[],0,0,0,0,["E",AVt(ARY)],ADN,0,Ba,[],0,0,0,0,["E",AVt(ANd)],AFd,0,Ba,[],0,0,0,0,["E",AVt(AFr)],ADb,0,Ba,[],0,0,0,0,
["E",AVt(AKF)],AC1,0,Ba,[],0,0,0,0,["E",AVt(APi)],AD4,0,Ba,[],0,0,0,0,["E",AVt(AH2)],Zt,0,Ba,[],0,0,0,0,["E",AVt(AIr)],Y8,0,Ba,[],0,0,0,0,["E",AVt(ARS)],ADi,0,Ba,[],0,0,0,0,["E",AVt(AFl)],ADv,0,Ba,[],0,0,0,0,["E",AVt(ALD)],AAO,0,Ba,[],0,0,0,0,["E",AVt(AIC)],AB$,0,Ba,[],0,0,0,0,["E",AVt(AJI)],AEG,0,Ba,[],0,0,0,0,["E",AVt(ALF)],ADu,0,Ba,[],0,0,0,0,["E",AVt(AQZ)],ABh,0,Ba,[],0,0,0,0,["E",AVt(AOB)],AAM,0,Ba,[],0,0,0,0,["E",AVt(AM$)],AE$,0,Ba,[],0,0,0,0,["E",AVt(APv)],Jv,0,Ba,[],0,0,0,0,["E",AVt(AB7)],AD6,0,Jv,[],
0,0,0,0,["E",AVt(AMW)],ABK,0,K8,[],0,0,0,0,["E",AVt(AGC)],AAG,0,J7,[],0,0,0,0,["E",AVt(AJU)],AAe,0,Ba,[],0,0,0,0,["E",AVt(ALT)],AAA,0,Ba,[],0,0,0,0,["E",AVt(ARD)],ABA,0,Ba,[],0,0,0,0,["E",AVt(AJi)],ABG,0,Ba,[],0,0,0,0,["E",AVt(AFm)],AAl,0,C,[],4,0,0,0,0,ZM,0,C,[],4,3,0,0,0,NA,0,C,[],0,3,0,0,0,ADo,0,C,[],0,3,0,0,0]);
$rt_metadata([ABe,0,C,[],4,3,0,0,0,ZY,0,C,[IZ],0,3,0,0,0,VF,0,C,[Bd],0,3,0,0,["l",AVu(AQG)],Ry,0,C,[Bd],0,3,0,0,["l",AVu(AJf)],Zi,0,C,[],0,3,0,0,0,Rx,0,C,[Bd],0,3,0,0,["l",AVu(APj)],Uz,0,C,[Bd],0,3,0,0,0,PY,0,C,[Bd],0,3,0,0,0,WS,0,U,[],0,0,0,0,["k",AVu(AI1)],WR,0,U,[],0,0,0,0,["k",AVu(AFR)],OB,0,U,[],0,0,0,0,["k",AVu(ALK),"cv",AVt(AJK)],OH,0,U,[],0,0,0,0,["k",AVu(APh)],OF,0,U,[],0,0,0,0,["k",AVu(APZ)],OG,0,U,[],0,0,0,0,["k",AVu(AMb)],OK,0,U,[],0,0,0,0,["k",AVu(AIw)],OL,0,U,[],0,0,0,0,["k",AVu(AFf)],OI,0,U,[],
0,0,0,0,["k",AVu(AJP)],OJ,0,U,[],0,0,0,0,["k",AVu(AMe)],OM,0,U,[],0,0,0,0,["k",AVu(ARa)],ON,0,U,[],0,0,0,0,["k",AVu(AHX)],OA,0,U,[],0,0,0,0,["k",AVu(ASY)],Pk,0,U,[],0,0,0,0,["k",AVu(AJT)],Ox,0,U,[],0,0,0,0,["k",AVu(AHV)],Oy,0,U,[],0,0,0,0,["k",AVu(AJx)],OE,0,U,[],0,0,0,0,["k",AVu(AK$)],Ow,0,U,[],0,0,0,0,["k",AVu(AQM)],OC,0,U,[],0,0,0,0,["k",AVu(AGP)],OD,0,U,[],0,0,0,0,["k",AVu(AOq)],L4,0,C,[],3,3,0,0,0,SW,0,C,[L4],4,3,0,0,0,ADX,0,C,[G3],0,3,0,0,0,Ww,0,C,[],0,3,0,0,0,C1,0,C,[],3,3,0,ACa,0,Cg,0,Cj,[],12,3,0,AAy,
0,Du,0,C,[],3,3,0,APk,0,Op,0,C,[],0,3,0,0,0,Om,0,C,[Bd],0,3,0,0,["l",AVu(APu)],Nh,0,Gy,[],0,0,0,0,["cm",AVw(AJl),"cq",AVx(ASJ),"fp",AVt(AHG)],Qk,0,Bq,[],0,3,0,0,0,XH,0,Bq,[],0,3,0,0,0,VM,0,FP,[],0,3,0,0,0,P$,0,FP,[],0,3,0,0,0,Yw,0,Bq,[],0,3,0,0,0,VB,0,C,[],0,3,0,0,0,Sq,0,C,[Bj],0,3,0,0,0,S6,0,C,[Bd],0,3,0,0,0,S5,0,C,[Bd],0,3,0,0,0,ADd,0,C,[],3,3,0,0,0,AAC,0,C,[],0,3,0,0,0,Tv,0,C,[HT],0,3,0,0,0]);
$rt_metadata([VJ,0,C,[L4],0,0,0,0,0,Wa,0,C,[Bj],0,3,0,0,["p",AVt(ARn)],Tt,0,U,[],0,0,0,0,["k",AVu(ARk)],M1,0,U,[],0,0,0,0,["k",AVu(AGz)],Sj,0,U,[],0,0,0,0,["k",AVu(AGj)],Si,0,U,[],0,0,0,0,["k",AVu(AJh)],Xm,0,U,[],0,0,0,0,["k",AVu(AKV)],O7,0,U,[],0,0,0,0,["k",AVu(ARo)],Oe,0,U,[],0,0,0,0,["k",AVu(ANL)],QT,0,U,[],0,0,0,0,["k",AVu(APo)],MU,0,U,[],0,0,0,0,["k",AVu(ASl)],MZ,0,U,[],0,0,0,0,["k",AVu(AIh)],NZ,0,U,[],0,0,0,0,["k",AVu(ARB)],Pv,0,U,[],0,0,0,0,["k",AVu(AMv)],PE,0,U,[],0,0,0,0,["k",AVu(AOO)],Ue,0,U,[],0,
0,0,0,["k",AVu(ARb)],SY,0,U,[],0,0,0,0,["k",AVu(AR6)],Nb,0,U,[],0,0,0,0,["k",AVu(AH4)],Mm,0,U,[],0,0,0,0,["k",AVu(ANO)],Sa,0,Mm,[],0,0,0,0,["k",AVu(AQn)],P4,0,C,[I3],0,3,0,0,["rf",AVt(AL1)],Wi,0,C,[BO],0,3,0,0,["Z",AVu(AOF)],Wl,0,C,[BO],0,3,0,0,["Z",AVu(ANj)],T2,0,C,[BO],0,3,0,0,["Z",AVu(AJ1)],T5,0,C,[BO],0,3,0,0,["Z",AVu(AFL)],U5,0,C,[BO],0,3,0,0,["Z",AVu(ALV)],Tk,0,C,[Bd],0,3,0,0,["l",AVu(AOp)],Tl,0,C,[Bd],0,3,0,0,["l",AVu(AMX)],Ti,0,C,[Bd],0,3,0,0,["l",AVu(ALy)],ZB,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.L3=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","#diffDemo","ClassL.java","ClassR.java",
"[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ",
"x = ",", y = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ",
"Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","LineShaderDemo1",
"LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","text","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","setDiffModel","deleteDiffModel","ns-resize","ew-resize","trying to display with unknown screen size and dpr",".cpp",".cc",".cxx",".hpp",".c",".h",".js","applyContrast = ",
"renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","\\n","#606366","#2B2B2B","#A4A3A3","#323232","#303C47","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1","Window 1: ",
"scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","#616161","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ",
"methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","#6AAB73","comma","error","#F75464","unused","#6F737A","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#BBBBBB","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#3C3F41",
"#4B6EAF","#787878","onEnter item ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ","Current Version: ",
"Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin",
"Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid",
"Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes",
"MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended",
"CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants",
"ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in "," ints to write, but "," written","#EBECF0","#F8F9FB","#edebfc","#FCE8F4","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","Verdana","asyncFullParseFile","asyncParseFirstLines",
"asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AG7(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cr=Long_add;var KB=Long_sub;var BQ=Long_mul;var Do=Long_div;var M5=Long_rem;var ATH=Long_or;var CW=Long_and;var AZm=Long_xor;var Fp=Long_shl;var Gt=Long_shr;var D9=Long_shru;var AT2=Long_compare;var Fc=Long_eq;var AZn=Long_ne;var AIF=Long_lt;var PW=Long_le;var AIl=Long_gt;var AAt=Long_ge;var AZo=Long_not;var AUc=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AUh);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Um.prototype;c.f=c.Z;c=Uk.prototype;c.f=c.Z;c=Nq.prototype;c.f=c.Z;c=AAY.prototype;c.get=c.HC;Object.defineProperty(c,"length",{get:c.GX});c=N0.prototype;c.f=c.Z;c=Zg.prototype;c.removeEventListener=c.D5;c.dispatchEvent=c.B4;c.get=c.za;c.addEventListener=c.Ax;Object.defineProperty(c,"length",{get:c.Cc});c=Wc.prototype;c.onAnimationFrame=c.D7;c=V8.prototype;c.f=c.u4;c=V5.prototype;c.handleEvent=c.ce;c=V6.prototype;c.f=c.Z;c=Xx.prototype;c.accept=c.vh;c=Xy.prototype;c.accept=c.vh;c=W0.prototype;c.handleEvent
=c.ce;c=W1.prototype;c.handleEvent=c.ce;c=W2.prototype;c.handleEvent=c.ce;c=W3.prototype;c.handleEvent=c.ce;c=W4.prototype;c.handleEvent=c.ce;c=W5.prototype;c.handleEvent=c.ce;c=W6.prototype;c.handleEvent=c.ce;c=W7.prototype;c.handleEvent=c.ce;c=W8.prototype;c.handleEvent=c.ce;c=W9.prototype;c.handleEvent=c.ce;c=Yp.prototype;c.handleEvent=c.ce;c=Yq.prototype;c.handleEvent=c.ce;c=Yr.prototype;c.handleEvent=c.ce;c=Ys.prototype;c.handleEvent=c.ce;c=UU.prototype;c.handleEvent=c.ce;c=X5.prototype;c.f=c.Z;c=X6.prototype;c.f
=c.Z;c=Ny.prototype;c.f=c.Z;c=Nx.prototype;c.f=c.Z;c=Nw.prototype;c.f=c.Z;c=Nv.prototype;c.f=c.Z;c=NT.prototype;c.accept=c.vh;c=X2.prototype;c.f=c.Z;c=X0.prototype;c.f=c.Z;c=X1.prototype;c.f=c.Z;c=Pj.prototype;c.f=c.u4;c=Ph.prototype;c.f=c.u4;c=QY.prototype;c.f=c.Z;c=U9.prototype;c.f=c.Z;c=M2.prototype;c.f=c.Z;c=XS.prototype;c.f=c.Z;c=XR.prototype;c.f=c.Z;c=Xh.prototype;c.f=c.Z;c=Xg.prototype;c.f=c.Z;c=XM.prototype;c.handleEvent=c.ce;c=Qa.prototype;c.f=c.Z;c=MY.prototype;c.onTimer=c.rf;c=MH.prototype;c.onTimer
=c.rf;c=XQ.prototype;c.f=c.Z;c=XA.prototype;c.f=c.Z;c=UK.prototype;c.f=c.Z;c=P4.prototype;c.onTimer=c.rf;c=Wi.prototype;c.f=c.Z;c=Wl.prototype;c.f=c.Z;c=T2.prototype;c.f=c.Z;c=T5.prototype;c.f=c.Z;c=U5.prototype;c.f=c.Z;})();
}));
