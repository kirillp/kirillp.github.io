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
index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eM=f;}
function $rt_cls(cls){return ACD(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FY(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b2.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return APp(t);}
function $rt_throwableCause(t){return APx(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AVc());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AVd(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AVe());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BF=$rt_compare;var AVf=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var IJ=$rt_isInstance;var AVg=$rt_nativeThread;var AVh=$rt_suspending;var AVi=$rt_resuming;var AVj=$rt_invalidPointer;var B=$rt_s;var Bm=$rt_eraseClinit;var X=$rt_imul;var Ek=$rt_wrapException;var AVk=$rt_checkBounds;var AVl=$rt_checkUpperBound;var AVm=$rt_checkLowerBound;var AVn=$rt_wrapFunction0;var AVo=$rt_wrapFunction1;var AVp=$rt_wrapFunction2;var AVq=$rt_wrapFunction3;var AVr=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var ABn=$rt_createCharArrayFromData;var ATY=$rt_createByteArrayFromData;var AVs=$rt_createShortArrayFromData;var E9=$rt_createIntArrayFromData;var AVt=$rt_createBooleanArrayFromData;var AVu=$rt_createFloatArrayFromData;var AVv=$rt_createDoubleArrayFromData;var AHc=$rt_createLongArrayFromData;var AVb=$rt_createBooleanArray;var DX=$rt_createByteArray;var AVw=$rt_createShortArray;var BQ=$rt_createCharArray;var BG=$rt_createIntArray;var AUR=$rt_createLongArray;var AFo=$rt_createFloatArray;var AVx
=$rt_createDoubleArray;var BF=$rt_compare;var AVy=$rt_castToClass;var AVz=$rt_castToInterface;var AVA=Long_toNumber;var Bd=Long_fromInt;var AVB=Long_fromNumber;var Cd=Long_create;var Eq=Long_ZERO;var AVC=Long_hi;var EF=Long_lo;
function C(){this.$id$=0;}
function AVD(){var a=new C();ADQ(a);return a;}
function ADQ(a){}
function Cs(a){return ACD(a.constructor);}
function AMk(a,b){return a!==b?0:1;}
function AGZ(a){var b,c,d,e,f,g,h,i,j;b=YS(a);if(!b)c=B(0);else{d=(((32-NT(b)|0)+4|0)-1|0)/4|0;e=BQ(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Hd((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FY(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function YS(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALB(a){var b,c,d;if(!IJ(a,Eo)&&a.constructor.$meta.item===null){b=new V9;W(b);J(b);}b=AFz(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function R1(){var a=this;C.call(a);a.u4=0;a.rk=null;}
function AUb(b){var c,d,e,f,g,h,i,j,k,l;ADO();Y9();AB0();AC6();AE8();AAz();ADv();ADS();Y0();ACV();ACm();YY();ACU();ACW();ABB();AAI();AA0();ZY();AA8();AA$();Zh();Y1();AEQ();c=(Zn()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Pf(B(2),B(3));else{d=new R1;BN(d);e=new Uf;e.sW=d;f=new No;c=new $rt_globals.Worker("teavm/worker.js");g=new NY;g.po=c;g.pp=e;g.pq=f;e=Bj(g,"f");c.onmessage=e;h=H(LT,[JT(B(4),B(5),400),JT(B(6),B(7),400),JT(B(8),B(5),
700),JT(B(9),B(7),700)]);b=R(LT,1);b.data[0]=AQm(B(10),Ff(B(11),B(12)),B(5),400);b=(LP(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.ss;f=c.re;k=new M;O(k);BE(G(G(k,B(13)),f),41);k=N(k);f=c.q_;l=c.o8;f=AJr($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BN(d);c=new Ug;c.tZ=d;g=new Ue;e.then(Bj(c,"f"),Bj(g,"f"));}}
function ABF(b){var c,d,e,f,g,h,i,j,k;c=new S8;d=new Sb;c.ql=new $rt_globals.TextDecoder("utf-16");e=new V8;e.o3=c;c.r6=e;e=new V1;e.vi=c;c.mu=e;f=new V2;f.rV=c;c.t8=new $rt_globals.ResizeObserver(Bj(f,"f"));e=new VZ;e.op=c;c.nc=e;c.ii=1;f=new Pd;f.x5=null;f.jG=AVE;c.l4=f;c.qN=b;f=new V0;f.ui=c;e=Bj(f,"f");b.onmessage=e;e=ABA();b.postMessage(e);c.m7=(Eb()).getElementById("canvasDiv");b=Zn();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dI
=b;c.m7.appendChild(b);f=c.dI;e=ANI(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)Pf(B(2),B(14));else{g=new PA;e=c.dI;f=c.mu;g.dA=null;g.g8=e;g.cn=AUm(f);h=$rt_globals.window;i=R(Ds,14);j=i.data;k=new WT;k.nx=g;j[0]=CT(g,e,B(15),k);f=new WU;f.sC=g;j[1]=CT(g,e,B(16),f);f=new WV;f.oL=g;j[2]=CT(g,e,B(17),f);f=new WW;f.vd=g;j[3]=CT(g,e,B(18),f);f=new WX;f.rI=g;j[4]=CT(g,e,B(19),f);f=new WY;f.n1=g;j[5]=CT(g,e,B(20),f);k=new WZ;k.vv=g;j[6]=CT(g,e,B(21),k);k=new W0;k.rY=g;j[7]=CT(g,e,B(22),k);k=new W1;k.oa
=g;j[8]=CT(g,e,B(23),k);k=new W2;k.us=g;j[9]=CT(g,e,B(24),k);k=new Ym;k.tT=g;j[10]=CT(g,e,B(25),k);k=new Yn;k.sS=g;j[11]=ACO(g,h,B(26),k,1);k=new Yo;k.mQ=g;j[12]=CT(g,h,B(27),k);k=new Yp;k.uM=g;j[13]=CT(g,h,B(28),k);g.xp=ARM(i);AAS(g,e);c.lD=g;c.f5=ATK(b,c.mu);AP1(c.t8,c.dI);e=$rt_globals.window;g=c.nc;e.addEventListener("resize",Bj(g,"handleEvent"));c.fm=ABV(d,AAK(c));TH(c);}ADj(c);}
var Ni=F(0);
var MK=F(0);
function WO(){var a=this;C.call(a);a.ks=null;a.fQ=null;}
function ACD(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new WO;c.fQ=b;d=c;b.classObject=d;}return c;}
function H5(a){if(a.ks===null)a.ks=$rt_str(a.fQ.$meta.name);return a.ks;}
function HS(a){return a.fQ.$meta.primitive?1:0;}
function Ib(a){return ACD(a.fQ.$meta.item);}
var Z2=F();
function Bj(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Lq(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ZJ=F();
function AFz(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ACG(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ACG(d[e],c))return 1;e=e+1|0;}return 0;}
function Gx(){var a=this;C.call(a);a.hs=null;a.kY=null;a.jg=0;a.jI=0;}
function AVF(){var a=new Gx();W(a);return a;}
function AVG(a){var b=new Gx();Bo(b,a);return b;}
function W(a){a.jg=1;a.jI=1;}
function Bo(a,b){a.jg=1;a.jI=1;a.hs=b;}
function AI8(a){return a;}
function APp(a){return a.hs;}
function APx(a){var b;b=a.kY;if(b===a)b=null;return b;}
var D5=F(Gx);
var Bq=F(D5);
function AVd(a){var b=new Bq();ARr(b,a);return b;}
function ARr(a,b){Bo(a,b);}
var ABE=F(Bq);
var Dh=F(0);
var CJ=F(0);
var IX=F(0);
function Bv(){var a=this;C.call(a);a.b2=null;a.hM=0;}
var AVH=null;var AVI=null;var AVJ=null;function EO(){EO=Bm(Bv);AQY();}
function AJS(){var a=new Bv();Y2(a);return a;}
function FY(a){var b=new Bv();Hm(b,a);return b;}
function Hw(a,b,c){var d=new Bv();My(d,a,b,c);return d;}
function Y2(a){EO();a.b2=AVH;}
function Hm(a,b){EO();My(a,b,0,b.data.length);}
function My(a,b,c,d){var e;EO();e=BQ(d);a.b2=e;Dx(b,c,e,0,d);}
function Mt(b){var c;EO();c=AJS();c.b2=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.b2.data;if(b<c.length)return c[b];}d=new Hb;W(d);J(d);}
function I(a){return a.b2.data.length;}
function Fs(a){return a.b2.data.length?0:1;}
function PW(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=I(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dx(a.b2,b,d,e,c);return;}}g=new By;W(g);J(g);}
function UJ(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function KJ(a,b){if(a===b)return 1;return UJ(a,b,0);}
function Eh(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GH(a,b,c){var d,e,f,g,h;d=Be(0,c);if(b<65536){e=b&65535;while(true){f=a.b2.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=H8(b);h=IP(b);while(true){f=a.b2.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function F4(a,b,c){var d,e,f,g,h;d=Bb(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b2.data[d]==e)break;d=d+(-1)|0;}return d;}f=H8(b);g=IP(b);while(true){if(d<1)return (-1);h=a.b2.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function AAr(a,b,c){var d,e,f;d=Be(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function PT(a,b,c){var d,e;d=Bb(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Cb(a,b,c){var d,e;d=BF(b,c);if(d>0){e=new By;W(e);J(e);}if(!d){EO();return AVI;}if(!b&&c==I(a))return a;return Hw(a.b2,b,c-b|0);}
function Dj(a,b){return Cb(a,b,I(a));}
function P2(a,b,c){return Cb(a,b,c);}
function Ff(a,b){var c,d,e,f,g,h;if(Fs(b))return a;if(Fs(a))return b;c=BQ(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Mt(c);}
function VA(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BE(d,L(a,f));}f=f+1|0;}G(d,Dj(a,f));return N(d);}
function Sf(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return Cb(a,b,c+1|0);}
function AGY(a){return a;}
function Gv(a){var b,c,d,e,f;b=a.b2.data;c=BQ(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cy(b){EO();return b===null?B(29):b.ct();}
function C5(b){var c;EO();c=new M;O(c);return N(T(c,b));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Lo(a){var b,c,d,e;a:{if(!a.hM){b=a.b2.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hM=(31*a.hM|0)+e|0;d=d+1|0;}}}return a.hM;}
function L6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GD;Bo(b,B(30));J(b);}AVK=1;d=new Rl;d.kc=R(CO,10);d.gb=(-1);d.eC=(-1);d.bx=(-1);e=new GJ;e.ez=1;e.bN=b;e.be=BQ(I(b)+2|0);Dx(Gv(b),0,e.be,0,I(b));f=e.be.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.rM=g;e.fU=0;E6(e);E6(e);d.g=e;d.dl=0;d.k_=Yc(d,(-1),0,null);if(!Di(d.g)){b=new IS;h=d.g;Jn(b,B(31),h.bN,h.c8);J(b);}if(d.nA)d.k_.ec();b=Cr();h=new ST;h.ie=(-1);h.kx=(-1);h.wu=d;h.t4=d.k_;h.iH=a;h.ie=0;g=I(a);h.kx=g;e=new VD;i=h.ie;j=d.gb;k=d.eC+1|0;l=d.bx+
1|0;e.hx=(-1);m=j+1|0;e.oE=m;e.dH=BG(m*2|0);f=BG(l);e.jB=f;Ht(f,(-1));if(k>0)e.k0=BG(k);Ht(e.dH,(-1));X7(e,a,i,g);h.cs=e;e.fb=1;n=0;m=0;if(!I(a)){f=R(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.iH);if(!Za(h))l=h.kx;e=h.cs;if(e.d9>=0&&AAY(e)==1){e=h.cs;e.d9=I$(e);if(I$(h.cs)==AC5(h.cs)){e=h.cs;e.d9=e.d9+1|0;}g=h.cs.d9;g=g<=l&&MT(h,g)?1:0;}else g=MT(h,h.ie);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BZ(b,P2(a,m,AEA(h)));m=AAD(h);n=g;}a:{BZ(b,P2(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bt(b,
g)))break a;Ep(b,g);}}if(g<0)g=0;f=HI(b,R(Bv,g));}return f;}
function AJg(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Bb(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AQY(){AVH=BQ(0);AVI=AJS();AVJ=new Tk;}
var EI=F(Gx);
var He=F(EI);
var ABf=F(He);
var DW=F();
function Fj(){DW.call(this);this.fw=0;}
var AVL=null;var AVM=null;function AD_(a){var b=new Fj();J6(b,a);return b;}
function J6(a,b){a.fw=b;}
function JA(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dd;Bo(b,B(32));J(b);}d=I(b);if(0==d){b=new Dd;Bo(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dd;W(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=O9(L(b,f));if(i<0){j=new Dd;k=Cb(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bo(j,N(b));J(j);}if(i>=c){j=new Dd;l=Cb(b,0,d);b=new M;O(b);G(G(T(G(b,B(35)),c),B(36)),l);Bo(j,N(b));J(j);}g=X(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dd;k=Cb(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bo(j,N(b));J(j);}b=new Dd;j=new M;O(j);T(G(j,B(38)),c);Bo(b,N(j));J(b);}
function F3(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AVM===null){AVM=R(Fj,256);c=0;while(true){d=AVM.data;if(c>=d.length)break a;d[c]=AD_(c-128|0);c=c+1|0;}}}return AVM.data[b+128|0];}return AD_(b);}
function Mc(a){var b;b=a.fw;return (NE(AUZ(20),b,10)).ct();}
function NT(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Im(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Kh(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function ALw(a,b){b=b;return BF(a.fw,b.fw);}
function ADO(){AVL=E($rt_intcls());}
function Gk(){var a=this;C.call(a);a.B=null;a.P=0;}
function AVN(){var a=new Gk();O(a);return a;}
function AUZ(a){var b=new Gk();F0(b,a);return b;}
function O(a){F0(a,16);}
function F0(a,b){a.B=BQ(b);}
function NE(a,b,c){return ABu(a,a.P,b,c);}
function ABu(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ce(a,b,b+1|0);else{Ce(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=Hd(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=X(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ce(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=Hd($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ACu(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BF(c,0.0);if(!d){Ce(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ce(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ce(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ce(a,b,b+8|0);d=b;}else{Ce(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVO;ACn(c,f);d=f.kC;g=f.kn;h=f.nW;i=1;j=1;if(h)j=2;k=9;l=AQq(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Be(k,i+1|0);g=0;}else{d=d/AVP.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ce(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.B.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.B.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.B.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function AAl(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BF(c,0.0);if(!d){Ce(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ce(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ce(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ce(a,b,b+8|0);d=b;}else{Ce(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVQ;ABy(c,f);g=f.lb;h=f.j7;i=f.nv;j=1;k=1;if(i)k=2;l=18;m=AOa(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Be(l,j+1|0);h=0;}else{g=Dp(g,AVR.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ce(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}n=Cd(1569325056, 23283064);o=0;while(o<l){if(PS(n,Eq))d=0;else{d=EF(Dp(g,n));g
=M3(g,n);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Dp(n,Bd(10));o=o+1|0;}if(h){e=a.B.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AQq(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AOa(b){var c,d,e,f,g;c=Bd(1);d=0;e=16;f=AVS.data;g=f.length-1|0;while(g>=0){if(Fe(M3(b,BR(c,f[g])),Eq)){d=d|e;c=BR(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BE(a,b){return a.l_(a.P,b);}
function XS(a,b,c){Ce(a,b,b+1|0);a.B.data[b]=c;return a;}
function JD(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.B=NN(a.B,d);}
function N(a){return Hw(a.B,0,a.P);}
function Xy(a,b,c,d){return a.lC(a.P,b,c,d);}
function Nc(a,b,c,d,e){var f,g,h,i;Ce(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function In(a,b){return a.kJ(b,0,b.data.length);}
function Ce(a,b,c){var d,e,f,g;d=a.P;e=d-b|0;a.hF((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.P=a.P+(c-b|0)|0;}
var HX=F(0);
var M=F(Gk);
function LX(){var a=new M();ARS(a);return a;}
function ARS(a){O(a);}
function G(a,b){var c;c=a.P;if(b===null)b=B(29);Mu(a,c,b);return a;}
function B0(a,b){Mu(a,a.P,b);return a;}
function T(a,b){NE(a,b,10);return a;}
function HU(a,b){var c,d,e,f,g,h,i,j;c=a.P;d=1;if(AIC(b,Eq)){d=0;b=AT8(b);}a:{if(Lj(b,Bd(10))<0){if(d)Ce(a,c,c+1|0);else{Ce(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=Hd(EF(b),10);}else{g=1;h=Bd(1);i=FJ(Bd(-1),Bd(10));b:{while(true){j=BR(h,Bd(10));if(Lj(j,b)>0){j=h;break b;}g=g+1|0;if(Lj(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ce(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(Fe(j,Eq))break a;e=a.B.data;c=f+1|0;e[f]=Hd(EF((FJ(b,j))),10);b=NB(b,j);j=FJ(j,Bd(10));f=c;}}}return a;}
function Fn(a,b){ACu(a,a.P,b);return a;}
function YW(a,b){BE(a,b);return a;}
function F8(a,b){Mu(a,a.P,!b?B(39):B(40));return a;}
function AEo(a,b,c){var d,e,f,g,h,i;d=BF(b,c);if(d<=0){e=a.P;if(b<=e){if(d){f=e-c|0;a.P=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Hb;W(i);J(i);}
function WA(a,b){var c,d,e,f;if(b>=0){c=a.P;if(b<c){c=c-1|0;a.P=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Hb;W(f);J(f);}
function ALr(a,b,c,d,e){Nc(a,b,c,d,e);return a;}
function AIn(a,b,c,d){Xy(a,b,c,d);return a;}
function Zw(a){return a.P;}
function DU(a){return N(a);}
function ALz(a,b){JD(a,b);}
function AL5(a,b,c){XS(a,b,c);return a;}
function Mu(a,b,c){var d,e,f;if(b>=0&&b<=a.P){a:{if(c===null)c=B(29);else if(Fs(c))break a;JD(a,a.P+I(c)|0);d=a.P-1|0;while(d>=b){a.B.data[d+I(c)|0]=a.B.data[d];d=d+(-1)|0;}a.P=a.P+I(c)|0;d=0;while(d<I(c)){e=a.B.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new Hb;W(c);J(c);}
var Et=F(He);
var ACN=F(Et);
function AVT(a){var b=new ACN();AG8(b,a);return b;}
function AG8(a,b){Bo(a,b);}
var AA4=F(Et);
function AVU(a){var b=new AA4();AHt(b,a);return b;}
function AHt(a,b){Bo(a,b);}
var T9=F(0);
var Ds=F(0);
function ARM(b){var c;c=new Qp;c.wJ=b;return c;}
function CG(b,c){if(b!==null)b.dW();return c;}
var O4=F(0);
function ID(){var a=this;C.call(a);a.lQ=0;a.kW=0;}
var AVV=0;function FR(a){AVV=AVV-1|0;}
function F5(a,b,c){Ji(a,AAf(b,c,400,0));}
function Q$(a,b){return KT(a,b,0.875);}
function KT(a,b,c){return Es(a,b)+c|0;}
function RN(){var a=this;ID.call(a);a.jL=null;a.br=null;a.mW=null;}
function Ex(a){var b,c,d;b=a.br;c=a.lQ;d=a.kW;b.clearRect(0.0,0.0,c,d);}
function Sw(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.br;d="center";c.textAlign=d;break a;case 2:c=a.br;d="right";c.textAlign=d;break a;default:break a;}d=a.br;c="left";d.textAlign=c;}}
function Cz(a,b){Ji(a,JW(b.nf));}
function Ji(a,b){var c;if(!(a.mW==b?1:0)){c=a.br;a.mW=b;c.font=b;}}
function AAf(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ci(a,b,c,d){var e,f,g;e=a.br;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Es(a,b){var c;c=$rt_ustr(b);return a.br.measureText(c).width;}
function Lw(a,b,c,d){var e,f;e=a.br;f=$rt_ustr(FY(ABn([35,GG(b/16|0),GG(b%16|0),GG(c/16|0),GG(c%16|0),GG(d/16|0),GG(d%16|0)])));e.fillStyle=f;}
var Y$=F();
var AD5=F();
function C6(b,c){if(b===c)return 1;return b!==null?b.cx(c):c!==null?0:1;}
function BN(b){if(b!==null)return b;b=new GD;Bo(b,B(31));J(b);}
var Bc=F(0);
function Uf(){C.call(this);this.sW=null;}
var Bw=F(0);
var ABU=F();
var Zd=F(0);
function JT(b,c,d){return AQm(B(41),Ff(B(11),b),c,d);}
var ADE=F(0);
var ADy=F(0);
function LP(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dk(b,f+g|0);Dx(c,0,d,f,g);return d;}
function K4(b,c,d){Dx(b,c,d,0,d.data.length);return d;}
function Ru(b,c,d){var e;if(c>0)Dx(b,0,d,0,c);e=d.data.length;if(c<e)Dx(b,c+1|0,d,c,e-c|0);return d;}
function AA9(b,c,d,e){var f;if(c>0)Dx(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dx(b,d,e,c,f-d|0);}return e;}
function FV(b){var c;c=new Wq;c.iV=b;return c;}
function Z7(b,c){if(b.data.length!=c)b=Dk(b,c);return b;}
function ADx(b,c,d){var e;e=c.data.length;if(e==d)c=Dk(c,e*2|0);c.data[d]=b;return c;}
function LT(){var a=this;C.call(a);a.ss=null;a.re=null;a.q_=null;a.o8=0;}
function AQm(a,b,c,d){var e=new LT();APf(e,a,b,c,d);return e;}
function APf(a,b,c,d,e){a.ss=b;a.re=c;a.q_=d;a.o8=e;}
var ZZ=F();
function AJr(b,c){return {style:b,weight:c};}
var BP=F(0);
function Ug(){C.call(this);this.tZ=null;}
function AFa(a,b){var c,d,e;c=a.tZ;d=0;while(d<b.length){e=b[d];(Eb()).fonts.add(e);d=d+1|0;}c.u4=1;b=c.rk;if(b!==null)ABF(b);}
var Ue=F();
function AQ6(a,b){$rt_globals.console.info("font load error "+b);}
var Lu=F();
var AVW=null;var AVX=null;function Bx(){if(AVW===null)AVW=AMU(AVY,0);return AVW;}
function EY(){if(AVX===null)AVX=AMU(AVZ,0);return AVX;}
function AT2(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Lx(b)&&(e+f|0)<=Lx(d)){a:{b:{if(b!==d){g=Ib(Cs(b));h=Ib(Cs(d));if(g!==null&&h!==null){if(g===h)break b;if(!HS(g)&&!HS(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fQ;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ACG(n.constructor,o)?1:0)){KL(b,c,d,e,j);b=new IQ;W(b);J(b);}j=j+1|0;k=m;}KL(b,c,d,e,f);return;}if(!HS(g))break a;if(HS(h))break b;else break a;}b=new IQ;W(b);J(b);}}KL(b,c,
d,e,f);return;}b=new IQ;W(b);J(b);}b=new By;W(b);J(b);}d=new GD;Bo(d,B(42));J(d);}
function Dx(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Lx(b)&&(e+f|0)<=Lx(d)){KL(b,c,d,e,f);return;}b=new By;W(b);J(b);}
function KL(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FH(){return Long_fromNumber(new Date().getTime());}
function AC7(){return AVB($rt_globals.performance.now()*1000000.0);}
var ADu=F();
var AAF=F();
function Pf(b,c){var d,e,f;d=(Eb()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Eb()).getElementById($rt_ustr(b)).appendChild(d);}
function Zn(){return (Eb()).createElement("canvas");}
function AEs(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ANI(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AE5=F();
var No=F();
function ANq(a,b){var c;c=new Bq;Bo(c,$rt_str(b.message));J(c);}
var ADU=F();
function FF(b){return $rt_str(b);}
var Zr=F();
function NN(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Xi(b,c){var d,e,f,g;b=b.data;d=DX(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Mj(b,c){var d,e,f,g;b=b.data;d=BG(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dk(b,c){var d,e,f,g;d=b.data;e=U6(Ib(Cs(b)),c);f=Bb(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AAb(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B0(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(44));G(c,e[d]);d=d+1|0;}B0(c,B(45));return N(c);}
function AC3(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B0(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(44));T(c,e[d]);d=d+1|0;}B0(c,B(45));return N(c);}
function APP(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);B0(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(44));Fn(c,e[d]);d=d+1|0;}B0(c,B(45));return N(c);}
function ASz(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);B0(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,B(44));f=e[d];AAl(c,c.P,f);d=d+1|0;}B0(c,B(45));return N(c);}
function Ht(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BH;W(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZP(b,c,d,e){var f,g;if(c>d){e=new BH;W(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AAA(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AVE;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bb(j,h+f|0);l=h+(2*f|0)|0;m=Bb(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.mn(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ACv(b,c){return Um(b,0,b.data.length,c);}
function Um(b,c,d,e){var f,g,h,i,j;f=BF(c,d);if(f>0){g=new BH;W(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var JS=F(0);
var AAV=F();
function ASj(a,b){return a.wr(b);}
function AHg(a){return a.xO();}
var ABs=F();
var FQ=F(0);
var Tk=F();
var By=F(Bq);
var ACs=F();
function Lx(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AV0());}return b.data.length;}
function U6(b,c){if(b===null){b=new GD;W(b);J(b);}if(b===E($rt_voidcls())){b=new BH;W(b);J(b);}if(c>=0)return ARz(b.fQ,c);b=new YC;W(b);J(b);}
function ARz(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GD=F(Bq);
var IQ=F(Bq);
var C7=F();
var AV1=null;var AV2=null;var AV3=null;var AV4=null;var AV5=null;var AV6=null;var AV7=null;var AV8=null;var AV9=null;var AV$=null;function Xo(b){var c,d;c=new Bv;d=BQ(1);d.data[0]=b;Hm(c,d);return c;}
function L_(b){return b>=65536&&b<=1114111?1:0;}
function CD(b){return (b&64512)!=55296?0:1;}
function C4(b){return (b&64512)!=56320?0:1;}
function Me(b){return !CD(b)&&!C4(b)?0:1;}
function Hl(b,c){return CD(b)&&C4(c)?1:0;}
function Ew(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function H8(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function IP(b){return (56320|b&1023)&65535;}
function EZ(b){return GC(b)&65535;}
function GC(b){if(AV4===null){if(AV7===null)AV7=AC2();AV4=ABb((AV7.value!==null?$rt_str(AV7.value):null));}return S1(AV4,b);}
function Ez(b){return GA(b)&65535;}
function GA(b){if(AV3===null){if(AV8===null)AV8=ADP();AV3=ABb((AV8.value!==null?$rt_str(AV8.value):null));}return S1(AV3,b);}
function S1(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BF(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Vc(b,c){if(c>=2&&c<=36){b=O9(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function O9(b){var c,d,e,f,g,h,i,j,k,l;if(AV2===null){if(AV9===null)AV9=ABh();c=(AV9.value!==null?$rt_str(AV9.value):null);d=APy(Gv(c));e=JQ(d);f=BG(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Nk(d)|0;j=j+Nk(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AV2=f;}g=AV2.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BF(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Hd(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gs(b){var c;if(b<65536){c=BQ(1);c.data[0]=b&65535;return c;}return ABn([H8(b),IP(b)]);}
function Cw(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Me(b&65535))return 19;if(AV5===null){if(AV$===null)AV$=AEU();d=(AV$.value!==null?$rt_str(AV$.value):null);e=R(Ny,16384);f=e.data;g=DX(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=KK(L(d,l));if(m==64){l=l+1|0;m=KK(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|X(c,KK(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=KK(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AJd(k,k+i|0,Xi(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AJd(k,k+i|0,Xi(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AV5=Dk(e,j);}e=AV5.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.rA)o=p+1|0;else{c=d.pm;if(b>=c)return d.pz.data[b-c|0];c=p-1|0;}}return 0;}
function Jy(b){a:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gn(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cw(b)!=16?0:1;}
function PC(b){switch(Cw(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Rm(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return PC(b);}return 1;}
function Y9(){AV1=E($rt_charcls());AV6=R(C7,128);}
function AC2(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ADP(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ABh(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AEU(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var ME=F(0);
var S0=F(0);
var El=F(0);
var AD4=F(0);
function Eb(){return $rt_globals.window.document;}
function NY(){var a=this;C.call(a);a.po=null;a.pp=null;a.pq=null;}
function AOy(a,b){var c,d,e;c=a.po;d=a.pp;e=a.pq;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=JW(KN(c));c=d.sW;c.rk=b;if(c.u4)ABF(b);}}
var ABp=F();
function Fz(){return ASk();}
function ASk(){return Math.random();}
function Bb(b,c){if(b<c)c=b;return c;}
function Be(b,c){if(b>c)c=b;return c;}
function MO(b){if(b<=0)b= -b|0;return b;}
var Pr=F(0);
var RD=F(0);
var Rr=F(0);
var T3=F(0);
var Xz=F(0);
var Vd=F(0);
var OM=F(0);
var Zc=F();
function AL0(a,b,c){a.EG($rt_str(b),Lq(c,"handleEvent"));}
function AMm(a,b,c){a.BK($rt_str(b),Lq(c,"handleEvent"));}
function AGg(a,b){return a.wr(b);}
function ANv(a,b,c,d){a.zZ($rt_str(b),Lq(c,"handleEvent"),d?1:0);}
function ARp(a,b){return !!a.EL(b);}
function AHj(a){return a.xO();}
function AFy(a,b,c,d){a.Dh($rt_str(b),Lq(c,"handleEvent"),d?1:0);}
var BH=F(Bq);
var YC=F(Bq);
var Hb=F(By);
var AAo=F();
function ABA(){return "ping";}
function D7(){C.call(this);this.jb=null;}
var AV_=null;var AWa=null;var AWb=null;var AWc=null;var AWd=null;var AWe=null;function KA(){KA=Bm(D7);AHr();}
function M9(a){var b=new D7();ACe(b,a);return b;}
function ACe(a,b){KA();a.jb=b;}
function KN(b){var c,d,e,f,g;KA();if(b===null)return null;a:{c=b;if(AWa!==null){d=$rt_str(typeof c);if(!Bn(d,B(46))&&!Bn(d,B(47))){if(Bn(d,B(48))){b=AWb.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=M9(c);g=f;b=AWb;e=new $rt_globals.WeakRef(g);b.set(c,e);AWd.register(g,c);return f;}if(!Bn(d,B(49)))break a;else{b=AWc.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=M9(c);g=f;b=AWc;e=new $rt_globals.WeakRef(g);b.set(c,
e);AWe.register(g,c);return f;}}b=AWa.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=M9(c);b=AWa;e=new $rt_globals.WeakRef(f);b.set(c,e);return f;}}return M9(c);}
function JW(b){KA();if(b!==null)return b.jb;return null;}
function ARb(a,b){if(b===a)return 1;if(b===null)return 0;if(!(b instanceof D7))return 0;return a.jb!==b.jb?0:1;}
function AHr(){AV_=new $rt_globals.WeakMap();AWa=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();AWb=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AWc=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AWd=AWb===null?null:new $rt_globals.FinalizationRegistry(Bj(new Xq,"accept"));AWe=AWc===null?null:new $rt_globals.FinalizationRegistry(Bj(new Xr,"accept"));}
var OL=F(0);
function S8(){var a=this;C.call(a);a.ql=null;a.r6=null;a.mu=null;a.m7=null;a.dI=null;a.t8=null;a.nc=null;a.lD=null;a.f5=null;a.ii=0;a.w$=0;a.ru=null;a.fm=null;a.qN=null;a.l4=null;a.sZ=0;}
function ADj(a){a.dI.focus();}
function NI(a,b){var c;c=Eb();b=$rt_ustr(b);c.title=b;}
function AAK(a){var b,c,d;b=new MF;c=a.f5;d=a.lD.cn;b.bd=c;b.l=d;b.bU=a;return b;}
function TH(a){a.w$=$rt_globals.requestAnimationFrame(Bj(a.r6,"onAnimationFrame"));}
function F7(a){a.ii=1;}
function TG(a,b,c){var d,e;a.lD.dA=BI(b,c);d=a.dI;e=b;d.width=e;d=a.dI;e=c;d.height=e;d=a.f5;Y(d.dk,b,c);e=d.bo;d=d.dk;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fm.b6(a.f5.dk,KM(a));a.fm.bA();}
function Gu(a,b){var c,d,e;c=a.ru;d=a.dI;if(C6(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.ru=b;}
function Jw(a){return $rt_globals.performance.now()/1000.0;}
function KM(a){return $rt_globals.window.devicePixelRatio;}
function Wr(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEv(b,1);else{c=new Xa;d=$rt_globals.window.showDirectoryPicker();e=new W_;e.pr=b;e.ps=c;d.then(Bj(e,"f"),Bj(c,"f"));}}
function LZ(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEv(b,0);else{c=new XN;d=$rt_globals.window.showOpenFilePicker();e=new XM;e.qj=b;e.qi=c;d.then(Bj(e,"f"),Bj(c,"f"));}}
function CP(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.sZ+1|0;a.sZ=e;f=a.l4;g=F3(e);f.hJ=Mb(f,f.hJ,g);g=Vk(f,g);MG(g,b);MG(g,b);f.jK=f.jK+1|0;b=a.qN;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(IJ(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(IJ(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(IJ(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof La)){b=new BH;c=H5(Cs(c));f
=new M;O(f);G(G(f,B(50)),c);Bo(b,N(f));J(b);}c=c;f=c.gI;if(f===null)f=c.e5;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function Q_(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new QW;e.nk=b;b=AE2(c);d.then(Bj(e,"f"),Bj(b,"f"));}
function UL(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.ql;b=(Gv(b)).data;f=f.decode(b);b=e.writeText(f);e=new U4;e.sE=c;c=AE2(d);b.then(Bj(e,"f"),Bj(c,"f"));}
function X4(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AE2(b){var c;c=new M1;c.sQ=b;return c;}
var B5=F(0);
var Sb=F();
function ABV(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bn(B(51),c)){d=new Nn;D2(d,b);b=$rt_globals.fetch("test.wasm");e=new Nw;b=b.then(Bj(e,"f"));e=new Nv;b=b.then(Bj(e,"f"));e=new Nu;f=new Nt;b.then(Bj(e,"f"),Bj(f,"f"));}else if(!Bn(B(52),c))d=(AQf(I(c)<=0?B(31):Dj(c,1))).bY(b);else{d=new Wi;ABq(d,b);d.F.d$=1;d.E.d$=1;c=new Yf;c.uJ=d;Ws(d,c,B(53));c=new Yk;c.oF=d;Ws(d,c,B(54));}return d;}
var Bk=F(0);
var ABO=F();
var AAX=F();
var ABm=F();
var Rv=F(0);
function V8(){C.call(this);this.o3=null;}
function AKz(a,b){var c,d;c=b;b=a.o3;if(!(!b.fm.cM(c/1000.0)&&!b.ii)){d=b.f5.dk;if(X(d.b,d.a)){b.ii=0;b.fm.bA();}}TH(b);}
function V1(){C.call(this);this.vi=null;}
function Dg(a){F7(a.vi);}
var Qg=F(0);
function V2(){C.call(this);this.rV=null;}
function AIG(a,b,c){var d,e,f,g;c=a.rV;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dI){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=KM(c);TG(c,Hg(f.width*g),Hg(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];TG(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AEb=F();
function AP1(b,c){AOZ(b,c,AFJ());}
function AFJ(){return {box:'device-pixel-content-box'};}
function AOZ(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cp=F(0);
function VZ(){C.call(this);this.op=null;}
function AOG(a,b){b=a.op;b.fm.b6(b.f5.dk,KM(b));b.fm.bA();}
var K7=F(0);
function ED(){C.call(this);this.kv=null;}
var Eo=F(0);
var X3=F(0);
var Nh=F(0);
function Pd(){var a=this;ED.call(a);a.hJ=null;a.jG=null;a.x5=null;a.jK=0;}
function Vk(a,b){var c,d;c=a.hJ;while(true){if(c===null)return null;d=Jz(a.jG,b,c.i1);if(!d)break;c=d>=0?c.b3:c.bQ;}return c;}
function Mb(a,b,c){var d,e;if(b===null){b=new Jv;d=null;b.i1=c;b.il=d;b.fp=1;b.fy=1;return b;}e=Jz(a.jG,c,b.i1);if(!e)return b;if(e>=0)b.b3=Mb(a,b.b3,c);else b.bQ=Mb(a,b.bQ,c);Em(b);return JP(b);}
function Kd(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Jz(a.jG,c,b.i1);if(d<0)b.bQ=Kd(a,b.bQ,c);else if(d>0)b.b3=Kd(a,b.b3,c);else{e=b.b3;if(e===null)return b.bQ;f=b.bQ;g=R(Jv,e.fp).data;h=0;while(true){b=e.bQ;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b3;while(h>0){h=h+(-1)|0;j=g[h];j.bQ=b;Em(j);b=JP(j);}e.b3=b;e.bQ=f;Em(e);b=e;}Em(b);return JP(b);}
function V0(){C.call(this);this.ui=null;}
function APY(a,b){var c,d,e,f,g,h,i,j,k;c=a.ui.l4;b=b.data;if(!(b===ABA()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BH;W(b);J(b);}if(b.length<1){b=new BH;W(b);J(b);}d=F3(b[0]);e=Vk(c,d);if(e===null)c=null;else{c.hJ=Kd(c,c.hJ,d);c.jK=c.jK+1|0;c=e.il;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FF(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new Tf;ADQ(e);e.ho=k;}else e=(k instanceof $rt_globals.File?1:0)?ACy(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:ACy(k,null);g[h]=e;h=j;}c.m(f);}}
var AEx=F();
var AE0=F();
var JX=F(0);
var Xq=F();
function AO3(a,b){KA();AWb.delete(b);}
var ABe=F();
var Xr=F();
function AMF(a,b){KA();AWc.delete(b);}
function PA(){var a=this;C.call(a);a.cn=null;a.g8=null;a.xp=null;a.dA=null;}
function Ne(){return (Eb()).activeElement;}
function CT(a,b,c,d){b.addEventListener($rt_ustr(c),Bj(d,"handleEvent"));return Xk(a,b,c,d);}
function ACO(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bj(d,"handleEvent"),!!e);return Xk(a,b,c,d);}
function Xk(a,b,c,d){var e;e=new Qc;e.wd=b;e.wi=c;e.wg=d;return e;}
function Uh(a,b){var c;c=new Vn;c.vc=b;return c;}
function EE(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.g8.getBoundingClientRect();e=BI(Hg((b.clientX-d.left)*c),Hg((b.clientY-d.top)*c));f=new Bi;g=a.dA;f.b=g.b;f.a=g.a;d=new MB;UM(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.vW=f;return d;}
function Yr(a,b,c){var d,e,f,g;d=new O7;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;UM(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j4=0;d.dK=e;d.bj=f;d.hv=c;d.r8=g;return d;}
function DN(a,b){b.stopPropagation();b.preventDefault();}
function AAS(a,b){var c;c=new X0;c.pL=b;b.onpointerdown=Bj(c,"f");c=new X1;c.or=b;b.onpointerup=Bj(c,"f");}
function Lm(){var a=this;C.call(a);a.rs=null;a.cD=null;a.bo=null;a.th=null;a.wO=0;a.xL=0;a.jN=null;a.yl=null;a.x2=null;a.w8=null;a.f9=null;a.hu=null;a.gE=null;a.x$=null;a.o_=null;a.dk=null;a.uX=null;a.lw=0;a.j0=0;a.mb=0;a.lW=0;a.h8=0;a.l$=null;}
function Hk(a,b,c){return GS(a,b,c,400,0);}
function CL(a,b,c){return MN(a.rs,b,c);}
function ER(a,b){var c,d,e,f,g;c=a.bo;d=b.bl;e=b.bF;f=b.bk;g=b.bG;c.clearColor(d,e,f,g);a.bo.clear(16384);}
function CK(a,b){var c;if(b==a.j0)return b;if(!b)a.bo.disable(3042);else{a.bo.enable(3042);a.bo.blendFuncSeparate(770,771,1,1);}c=a.j0;a.j0=b;return c;}
function ABK(a,b,c){LF(a,b.b,b.a,c);}
function LF(a,b,c,d){a.lW=1;a.h8=1;Xv(a.l$,b,c,d.b,d.a);UN(a);}
function IE(a){a.lW=0;a.h8=0;UN(a);}
function UN(a){var b,c,d,e,f,g;b=a.mb;c=a.lW;if(b!=c){a.mb=c;if(!c)a.bo.disable(3089);else a.bo.enable(3089);}if(a.mb&&a.h8){a.h8=0;d=a.bo;e=a.l$;b=e.le;c=a.dk.a-e.lf|0;f=e.lc;c=c-f|0;g=e.ld;d.scissor(b,c,g,f);}}
function Ic(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.o_;c=a.lw;d=b.gm.sK;e=b.ee;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.ee;h=b.m_;e.bindBuffer(34962,h);i=b.gm.mz.data;g=i.length;j=0;while(j<g){k=i[j];l=b.ee;m=k.hd;n=k.eZ;o=b.gm.kG*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eZ|0;j=j+1|0;}a:{e=b.vf;if(e!==null){c=0;b.ee.bindBuffer(34962,e);i=b.gm.rp.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.ee;j=e.hd;p=e.eZ;m=e.pi;n=b.gm.pF;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eZ|0;g=g+1|0;}}}q=b.uB;if(q===null){c=b.sb;if(c>0)b.ee.drawArrays(4,0,c);}else{b.ee.bindBuffer(34963,q);k=b.ee;g=b.uQ;k.drawElements(4,g,5123,0);}a.lw=d;}
function Bu(a,b,c,d,e){Ih(a,a.jN);I5(a.jN,a.bo,b,c,d,a.dk);d=a.jN;Fy(a.bo,d.uh,e);Ic(a);}
function Qa(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p;Ih(a,a.gE);I5(a.gE,a.bo,b,c,d,a.dk);d=a.gE;k=a.bo;l=d.mD;m=e.b;n=e.a;o=f.b;p=f.a;k.uniform4f(l,m,n,o,p);d=d.mC;m=g.b;p=g.a;n=h.b;o=h.a;k.uniform4f(d,m,p,n,o);d=a.gE;e=a.bo;Fy(e,d.nj,i);Fy(e,d.nl,j);Ic(a);}
function EJ(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Ih(a,a.f9);I5(a.f9,a.bo,b,c,d,a.dk);UI(a.f9,a.bo,f);d=a.f9;j=a.bo;f=f.ft;b=f.b;c=f.a;k=e.bl;l=b;m=k/l;k=e.bF;n=c;o=k/n;k=e.bk/l;l=e.bG/n;d=d.tU;j.uniform4f(d,m,o,k,l);d=a.f9;e=a.bo;Fy(e,d.pU,g);Fy(e,d.nG,h);d=d.oR;e.uniform2f(d,i,0.0);Ic(a);}
function CV(a){var b,c;b=new Ju;c=a.th;b.ft=new Bi;b.d3=c;b.eT=c.dr.createTexture();AWf=AWf+1|0;return b;}
function N3(a,b){XB(a.bo,b);}
function Ih(a,b){var c,d;if(b!==a.uX){c=a.bo;d=b.bP;c.useProgram(d);a.uX=b;}}
function ADC(){var a=this;Lm.call(a);a.xt=null;a.x3=null;}
function ATK(a,b){var c=new ADC();AKW(c,a,b);return c;}
function AKW(a,b,c){var d,e,f,g,h,i,j,k,l;d=new UQ;a.dk=new Bi;a.lw=0;a.l$=new L2;a.rs=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(55)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bo=b;a.cD=MN(d,4,4);g=AFo(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BQ(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;f=new Qe;JL();k=AWg;f.ee=b;f.gm=k;f.sb=h.length/k.kG|0;f.uQ
=j.length;k=b.createBuffer();f.m_=k;b.bindBuffer(34962,k);k=g.data;b.bufferData(34962,k,35044);f.vf=null;k=b.createBuffer();f.uB=k;if(k!==null){b.bindBuffer(34963,k);k=i.data;b.bufferData(34963,k,35044);}k=null;b.bindBuffer(34962,k);k=null;b.bindBuffer(34963,k);a.o_=f;a.xL=KJ(e,B(56));f=new Qf;f.dr=b;a.th=f;l=b.getParameter(3379);a.wO=l;f=new M;O(f);T(G(f,B(57)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(Dy,7);i=g.data;d=new WD;IA(d,b,B(58),B(59),AWg);f=d.bP;d.uh=b.getUniformLocation(f,"uColor");a.jN=d;i[0]
=d;f=ATd(b,B(60));a.yl=f;i[1]=f;f=AT_(b);a.x2=f;i[2]=f;f=AUC(b);a.w8=f;i[3]=f;f=ATL(b);a.f9=f;i[4]=f;f=AUN(b);a.hu=f;i[5]=f;f=AUy(b);a.gE=f;i[6]=f;a.x$=g;XB(b,B(61));a.x3=new UO;a.xt=c;}
function GS(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cD;g=AAf(b,c,d,e);Ji(f,g);h=f.br.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Es(f,B(62));m=Es(f,B(63));h=new Lb;n=KN(g);h.mg=b;h.ws=c;o=c|0;if(o!==c){b=new M;O(b);Fn(G(b,B(64)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.pg=o;h.wz=d;h.w6=e;h.dx=i;h.eo=j;h.wp=l;h.l5=k;h.nf=n;h.rj=Df(i);h.xU=Df(h.eo);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.ww=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(65);}h.wc=b;return h;}
function Cl(){C.call(this);this.bc=null;}
function D2(a,b){a.bc=b;}
function AR2(a,b){return 0;}
var Jb=F();
var AVE=null;function Jz(a,b,c){return b.jM(c);}
function AB0(){AVE=new Jb;}
function AAv(){var a=this;C.call(a);a.bT=null;a.mw=null;a.bp=null;a.di=null;a.er=null;a.fu=null;a.fZ=null;a.jC=null;a.kk=null;a.c0=null;a.ht=null;a.om=0;}
function AUm(a){var b=new AAv();AN$(b,a);return b;}
function AN$(a,b){a.bT=CI(R(Ck,0));a.mw=CI(R(Ck,0));a.bp=CI(R(Cn,0));a.di=CI(R(DH,0));a.er=CI(R(Ey,0));a.fu=CI(R(EK,0));a.fZ=CI(R(Fb,0));a.jC=CI(R(Bk,0));a.kk=CI(R(Bk,0));a.c0=b;}
function Uo(a,b){var c,d,e,f;Dg(a.c0);c=(Ct(!b.hv?a.mw:a.bT)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bu(b);if(f)break;if(b.j4)break;e=e+1|0;}return f;}
function Q8(a,b,c){var d,e,f;Dg(a.c0);d=(Ct(a.fu)).data;e=d.length;f=0;while(f<e){if(d[f].gr(b,c))return 1;f=f+1|0;}return 0;}
function WT(){C.call(this);this.nx=null;}
function AN6(a,b){var c;c=a.nx;if(Uo(c.cn,Yr(c,b,1)))DN(c,b);}
function WU(){C.call(this);this.sC=null;}
function AOk(a,b){var c;c=a.sC;if(Uo(c.cn,Yr(c,b,0)))DN(c,b);}
function WV(){C.call(this);this.oL=null;}
function AMD(a,b){var c,d,e,f,g,h,i;c=a.oL;if(c.dA!==null){a:{b:{d=EE(c,b);e=c.cn;Dg(e.c0);f=e.ht;if(f!==null)f.m(d);else{g=(Ct(e.bp)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bO(d))break a;i=i+1|0;}}}}DN(c,b);}}
function WW(){C.call(this);this.vd=null;}
function AL1(a,b){var c,d,e,f,g,h;c=a.vd;b.button;if(c.dA!==null)a:{d=EE(c,b);c=c.cn;e=b.button;Dg(c.c0);if(c.ht===null){f=(Ct(c.bp)).data;g=f.length;h=0;while(h<g){b=f[h].b$(d,e);if(b!==null){c.ht=b;c.om=e;break a;}h=h+1|0;}}}}
function WX(){C.call(this);this.rI=null;}
function AMq(a,b){var c,d,e,f,g,h,i;c=a.rI;b.button;if(c.dA!==null){d=EE(c,b);e=c.cn;f=b.button;Dg(e.c0);if(f==e.om&&e.ht!==null)e.ht=null;g=(Ct(e.bp)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cN(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DN(c,b);}}
function WY(){C.call(this);this.n1=null;}
function AOW(a,b){var c,d,e,f,g,h,i,j,k;c=a.n1;if(c.dA!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cn;f=EE(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dg(e.c0);i=(Ct(e.di)).data;j=i.length;k=0;b:{while(k<j){if(i[k].cW(f,d,h))break b;k=k+1|0;}}DN(c,b);}}
function WZ(){C.call(this);this.vv=null;}
function AKc(a,b){var c,d,e,f,g,h,i,j;c=a.vv;if(c.dA!==null){d=EE(c,b);e=c.cn;f=b.button;g=b.detail;Dg(e.c0);h=(Ct(e.bp)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cq(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DN(c,b);}}
function W0(){C.call(this);this.rY=null;}
function ASq(a,b){var c,d,e,f,g,h,i;c=a.rY;if(c.dA!==null){d=EE(c,b);e=c.cn;Dg(e.c0);f=(Ct(e.er)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bu(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DN(c,b);}}
function W1(){C.call(this);this.oa=null;}
function AJp(a,b){var c,d,e;b=a.oa.cn;c=(Ct(b.kk)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dg(b.c0);}
function W2(){C.call(this);this.us=null;}
function AP6(a,b){var c,d,e;b=a.us.cn;c=(Ct(b.jC)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dg(b.c0);}
function Ym(){C.call(this);this.tT=null;}
function AR3(a,b){var c;c=a.tT;if(c.dA!==null)EE(c,b);}
function Yn(){C.call(this);this.sS=null;}
function AMe(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.sS;if(Ne()===c.g8){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Ct(c.cn.fZ)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dn();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cn.c0;m=new NR;m.uD=k;m.uE=l;g.getAsString(Bj(m,"accept"));DN(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(66)),k),B(67)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function Yo(){C.call(this);this.mQ=null;}
function AMH(a,b){var c;c=a.mQ;if(Ne()===c.g8&&Q8(c.cn,Uh(c,b),0))DN(c,b);}
function Yp(){C.call(this);this.uM=null;}
function AOA(a,b){var c;c=a.uM;if(Ne()===c.g8&&Q8(c.cn,Uh(c,b),1))DN(c,b);}
var UD=F(0);
var UQ=F();
function MN(a,b,c){var d,e,f;d=new RN;AVV=AVV+1|0;d.lQ=b;d.kW=c;e=(Eb()).createElement("canvas");d.jL=e;f=b;e.width=f;e=d.jL;f=c;e.height=f;d.br=d.jL.getContext("2d");return d;}
var UO=F();
function ALh(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function MF(){var a=this;C.call(a);a.bd=null;a.l=null;a.bU=null;}
function AEn(){var a=this;C.call(a);a.ha=null;a.iF=null;a.g2=0;}
function CI(a){var b=new AEn();AJ8(b,a);return b;}
function AJ8(a,b){a.ha=b;}
function V(a,b){var c,d,e;c=a.g2;d=a.ha;if(c==d.data.length)a.ha=Dk(d,c+4|0);d=a.ha.data;e=a.g2;a.g2=e+1|0;d[e]=b;a.iF=null;}
function Ct(a){var b;b=a.iF;if(!(b!==null&&b.data.length==a.g2))a.iF=Dk(a.ha,a.g2);return a.iF;}
var IU=F(0);
var Ck=F(0);
var Cn=F(0);
function ALm(a,b){return 0;}
function AQ7(a,b,c){return null;}
function AF1(a,b,c){return 0;}
function AOT(a,b,c,d){return 0;}
var DH=F(0);
var Ey=F(0);
var EK=F(0);
var EP=F(0);
var Fb=F(0);
function Qp(){C.call(this);this.wJ=null;}
function Bi(){var a=this;C.call(a);a.b=0;a.a=0;}
function BI(a,b){var c=new Bi();PE(c,a,b);return c;}
function PE(a,b,c){a.b=b;a.a=c;}
function Cv(a,b){a.b=b.b;a.a=b.a;}
function Y(a,b,c){a.b=b;a.a=c;}
function YH(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);T(G(T(G(d,B(68)),b),B(69)),c);return N(d);}
function Ld(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function L2(){var a=this;C.call(a);a.le=0;a.lf=0;a.ld=0;a.lc=0;}
function Xv(a,b,c,d,e){a.le=b;a.lf=c;a.ld=d;a.lc=e;}
var ADB=F();
var ZG=F(0);
function Qf(){C.call(this);this.dr=null;}
function LJ(){var a=this;C.call(a);a.bP=null;a.xX=null;}
function ACx(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(70):B(71);g=$rt_str(b.getShaderInfoLog(e));h=new M;O(h);G(G(h,f),g);g=N(h);b.deleteShader(e);Br(Bx(),g);Br(EY(),B(72));Br(EY(),d);Br(EY(),B(72));b=new Bq;Bo(b,g);J(b);}
function Dy(){var a=this;LJ.call(a);a.n_=null;a.pR=null;a.lI=null;}
function AWh(a,b,c,d){var e=new Dy();IA(e,a,b,c,d);return e;}
function IA(a,b,c,d,e){var f,g,h,i,j,k;a.xX=e;f=ACx(b,35633,c);d=ACx(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bP=g;h=e.sp.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bP;k=c.hd;c=c.p$;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bP;b.linkProgram(c);if(b.getProgramParameter(c,35714)){XB(b,B(73));a.lI=new Bi;c=a.bP;a.n_=b.getUniformLocation(c,"uResolution");c=a.bP;a.pR=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bq;c=new M;O(c);G(G(c,B(74)),d);Bo(b,N(c));J(b);}
function AAx(a,b,c){var d,e,f;if(!Ld(a.lI,c)){Cv(a.lI,c);d=a.n_;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function I5(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pR;b.uniform4f(e,i,l,h,j);AAx(a,b,f);}
function WD(){Dy.call(this);this.uh=null;}
function EC(){Dy.call(this);this.rF=null;}
function ATd(a,b){var c=new EC();Ul(c,a,b);return c;}
function AWi(a,b,c){var d=new EC();Up(d,a,b,c);return d;}
function Ul(a,b,c){Up(a,b,B(58),c);}
function Up(a,b,c,d){JL();IA(a,b,c,d,AWg);c=a.bP;a.rF=b.getUniformLocation(c,"sDiffuse");}
function UI(a,b,c){var d;d=a.rF;b.uniform1i(d,0);b.activeTexture(33984);c=c.eT;b.bindTexture(3553,c);}
var ABc=F(Dy);
function AT_(a){var b=new ABc();ARw(b,a);return b;}
function ARw(a,b){JL();IA(a,b,B(58),B(75),AWg);}
function ADg(){EC.call(this);this.wT=null;}
function AUC(a){var b=new ADg();AJw(b,a);return b;}
function AJw(a,b){var c;Ul(a,b,B(76));c=a.bP;a.wT=b.getUniformLocation(c,"uContrast");}
function ACS(){var a=this;EC.call(a);a.tU=null;a.pU=null;a.nG=null;a.oR=null;}
function ATL(a){var b=new ACS();AOP(b,a);return b;}
function AOP(a,b){var c;Up(a,b,B(77),B(78));c=a.bP;a.tU=b.getUniformLocation(c,"uTexTransform");c=a.bP;a.pU=b.getUniformLocation(c,"uColor");c=a.bP;a.nG=b.getUniformLocation(c,"uBgColor");c=a.bP;a.oR=b.getUniformLocation(c,"uContrast");}
function Z1(){var a=this;EC.call(a);a.vg=null;a.ve=null;a.qu=null;}
function AUN(a){var b=new Z1();AIW(b,a);return b;}
function AIW(a,b){var c,d;Ul(a,b,B(79));c=a.bP;a.vg=b.getUniformLocation(c,"uColorB");d=a.bP;a.ve=b.getUniformLocation(d,"uColorF");d=a.bP;a.qu=b.getUniformLocation(d,"uContrast");}
function ACQ(){var a=this;Dy.call(a);a.nj=null;a.nl=null;a.mD=null;a.mC=null;}
function AUy(a){var b=new ACQ();AIX(b,a);return b;}
function AIX(a,b){var c;JL();IA(a,b,B(58),B(80),AWg);c=a.bP;a.nj=b.getUniformLocation(c,"uColor1");c=a.bP;a.nl=b.getUniformLocation(c,"uColor2");c=a.bP;a.mD=b.getUniformLocation(c,"uPoints1");c=a.bP;a.mC=b.getUniformLocation(c,"uPoints2");}
var Sk=F(0);
var AE3=F(0);
function Fy(b,c,d){var e,f,g,h;e=d.bl;f=d.bF;g=d.bk;h=d.bG;b.uniform4f(c,e,f,g,h);}
function XB(b,c){var d,e;d=b.getError();if(d){b=Bx();e=new M;O(e);T(G(e,c),d);Br(b,N(e));}}
function Qc(){var a=this;C.call(a);a.wd=null;a.wi=null;a.wg=null;}
function Qe(){var a=this;C.call(a);a.ee=null;a.gm=null;a.m_=null;a.vf=null;a.uB=null;a.sb=0;a.uQ=0;}
function Cm(){var a=this;C.call(a);a.wa=null;a.cZ=0;}
function C_(a,b,c){a.wa=b;a.cZ=c;}
function GN(){var a=this;Cm.call(a);a.sp=null;a.mz=null;a.rp=null;a.kG=0;a.pF=0;a.sK=0;}
var AWg=null;var AWj=null;function JL(){JL=Bm(GN);AKN();}
function AKN(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GN;c=R(DY,2);d=c.data;ARi();d[0]=AWk;d[1]=AWl;JL();C_(b,B(81),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];Zb();switch(AWm.data[l.lZ.cZ]){case 1:f=f+l.eZ|0;h=h+1|0;break a;case 2:e=e+l.eZ|0;g=g+1|0;break a;default:}}i=i|1<<l.hd;k=k+1|0;}b.sp=c;b.kG=e;b.pF=f;b.sK=i;c=R(DY,g);m=c.data;b.mz=c;c=R(DY,h);n=c.data;b.rp=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];Zb();switch(AWm.data[l.lZ.cZ]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AWg=b;c=R(GN,1);c.data[0]=b;AWj=c;}
var Mn=F(0);
var TJ=F(0);
var U5=F(0);
var Gp=F();
function Js(){Gp.call(this);this.vL=null;}
function AA1(){var a=this;Js.call(a);a.xJ=0;a.kR=0;a.iz=null;a.ko=null;a.s$=null;}
function AMU(a,b){var c=new AA1();AQ0(c,a,b);return c;}
function AQ0(a,b,c){a.vL=b;b=new M;O(b);a.iz=b;a.ko=BQ(32);a.xJ=c;AAP();a.s$=AWn;}
function TY(a,b,c,d){var e,$$je;e=a.vL;if(e===null)a.kR=1;if(!(a.kR?0:1))return;a:{try{e.kd(b,c,d);break a;}catch($$e){$$je=Ek($$e);if($$je instanceof Iu){}else{throw $$e;}}a.kR=1;}}
function Ob(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ABM(b,c,d-c|0);e=DX(Be(16,Bb(e.length,1024)));g=ABz(e,0,e.data.length);h=a.s$;i=new Px;b=DX(1);j=b.data;j[0]=63;G_();k=AWo;i.lL=k;i.kX=k;c=j.length;if(c&&c>=i.mA){i.v7=h;i.p5=b.eM();i.xC=2.0;i.mA=4.0;i.ph=BQ(512);i.nZ=DX(512);k=AWp;if(k===null){i=new BH;Bo(i,B(82));J(i);}i.lL=k;i.kX=k;a:while(true){if(i.iu==3){f=new D1;W(f);J(f);}i.iu=2;b:{while(true){try{k=Zs(i,f,g);}catch($$e){$$je=Ek($$e);if($$je instanceof Bq){f=$$je;break a;}else{throw $$e;}}if(Ig(k))
{d=B7(f);if(d<=0)break b;k=D3(d);}else if(G8(k))break;h=!L8(k)?i.lL:i.kX;c:{if(h!==AWp){if(h===AWq)break c;else break b;}d=B7(g);b=i.p5;l=b.data.length;if(d<l){k=AWr;break b;}Xm(g,b,0,l);}EG(f,f.V+Kg(k)|0);}}l=G8(k);TY(a,e,0,g.V);N_(g);if(!l){while(true){d=i.iu;if(d!=2&&d!=4){f=new D1;W(f);J(f);}f=AWs;if(f===f)i.iu=3;l=G8(f);TY(a,e,0,g.V);N_(g);if(!l)break;}return;}}J(AH9(f));}i=new BH;Bo(i,B(83));J(i);}
function Br(a,b){var c,d,e,f,g,h,i,j;BE(B0(a.iz,b),10);b=a.iz;c=b.P;d=a.ko;if(c>d.data.length)d=BQ(c);e=0;f=0;if(e>c){b=new By;Bo(b,B(84));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Ob(a,d,0,c);a.iz.P=0;}
function Gd(){Gp.call(this);this.xu=null;}
function Yw(a){a.xu=DX(1);}
var Lt=F(Gd);
var AVY=null;function AK_(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AC6(){var b;b=new Lt;Yw(b);AVY=b;}
function DY(){var a=this;Cm.call(a);a.p$=null;a.lZ=null;a.eZ=0;a.pi=0;a.hd=0;}
var AWk=null;var AWl=null;var AWt=null;function ARi(){ARi=Bm(DY);AJT();}
function ATX(a,b,c,d,e,f,g){var h=new DY();Wv(h,a,b,c,d,e,f,g);return h;}
function Wv(a,b,c,d,e,f,g,h){ARi();C_(a,b,c);a.p$=d;a.lZ=e;a.eZ=f;a.pi=g;a.hd=h;}
function AJT(){var b;b=new DY;ACh();Wv(b,B(85),0,B(86),AWu,2,0,0);AWk=b;b=ATX(B(87),1,B(88),AWu,2,0,1);AWl=b;AWt=H(DY,[AWk,b]);}
function Jj(){var a=this;C.call(a);a.vV=null;a.wW=null;}
function ADm(b){var c,d;if(Fs(b))J(AAU(b));if(!ADo(L(b,0)))J(AAU(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ADo(d))break a;else J(AAU(b));}}c=c+1|0;}}
function ADo(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mq=F(Jj);
var AWn=null;function AAP(){AAP=Bm(Mq);AIT();}
function ADH(a){var b,c;b=new TZ;b.eW=B(89);G_();c=AWo;b.gT=c;b.lT=c;b.wM=a;b.mM=0.3333333432674408;b.w9=0.5;b.n5=DX(512);b.sB=BQ(512);return b;}
function AIT(){var b,c,d,e,f;b=new Mq;AAP();c=R(Bv,0);d=c.data;ADm(B(90));e=d.length;f=0;while(f<e){ADm(d[f]);f=f+1|0;}b.vV=B(90);b.wW=c.eM();AWn=b;}
var Kt=F();
var AWv=null;var AWm=null;function Zb(){Zb=Bm(Kt);ANU();}
function ANU(){var b,c;ACh();b=BG((AWw.eM()).data.length);c=b.data;AWm=b;c[AWx.cZ]=1;c[AWu.cZ]=2;ACj();c=BG((AWy.eM()).data.length);b=c.data;AWv=c;b[AWz.cZ]=1;b[AWA.cZ]=2;}
function Pi(){var a=this;C.call(a);a.fo=null;a.mp=null;a.j2=null;a.sV=null;a.pE=null;a.pX=null;}
function AA5(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.fo,b,c));}
function M$(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.mp[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.fo,b,d));f=e.data;EO();d=f.length;AAP();g=AWn;h=ABz(e,0,d);a:{try{i=ADH(g);G_();g=ZQ(ACB(AEf(i,AWp),AWp),h);break a;}catch($$e){$$je=Ek($$e);if($$je instanceof FP){g=$$je;}else{throw $$e;}}h=new Xu;h.jg=1;h.jI=1;h.hs=B(91);h.kY=g;J(h);}if(!g.V&&g.dt==g.mm)c.b2=g.hc;else{f=BQ(B7(g));e=f.data;c.b2=f;NG(g,f,0,e.length);}return c;}
function Ng(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.j2[e]){e=e+1|0;}d=e-d|0;Hm(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.fo,b,d)));return c;}
var GR=F(Cm);
var AWx=null;var AWu=null;var AWw=null;function ACh(){ACh=Bm(GR);AIm();}
function AIL(a,b){var c=new GR();ADI(c,a,b);return c;}
function ADI(a,b,c){ACh();C_(a,b,c);}
function AIm(){var b;AWx=AIL(B(92),0);b=AIL(B(93),1);AWu=b;AWw=H(GR,[AWx,b]);}
var Gj=F(Cm);
var AWz=null;var AWA=null;var AWy=null;function ACj(){ACj=Bm(Gj);AI2();}
function ASw(a,b){var c=new Gj();ZM(c,a,b);return c;}
function ZM(a,b,c){ACj();C_(a,b,c);}
function AI2(){var b;AWz=ASw(B(94),0);b=ASw(B(95),1);AWA=b;AWy=H(Gj,[AWz,b]);}
var KR=F(Gd);
var AVZ=null;function AI5(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AE8(){var b;b=new KR;Yw(b);AVZ=b;}
var V9=F(D5);
function ADt(){BH.call(this);this.v_=null;}
function AAU(a){var b=new ADt();AQw(b,a);return b;}
function AQw(a,b){W(a);a.v_=b;}
var Mp=F(0);
function X0(){C.call(this);this.pL=null;}
function APA(a,b){a.pL.setPointerCapture(b.pointerId);}
function X1(){C.call(this);this.or=null;}
function AGQ(a,b){a.or.releasePointerCapture(b.pointerId);}
function G2(){var a=this;C.call(a);a.mm=0;a.V=0;a.dt=0;a.hm=0;}
function Wt(a,b){a.hm=(-1);a.mm=b;a.dt=b;}
function EG(a,b){var c,d,e;if(b>=0&&b<=a.dt){a.V=b;if(b<a.hm)a.hm=0;return a;}c=new BH;d=a.dt;e=new M;O(e);BE(T(G(T(G(e,B(96)),b),B(97)),d),93);Bo(c,N(e));J(c);}
function B7(a){return a.dt-a.V|0;}
function DO(a){return a.V>=a.dt?0:1;}
var SD=F(0);
var Lc=F(G2);
function AEI(b){var c,d;if(b>=0)return AOm(0,b,BQ(b),0,b,0);c=new BH;d=new M;O(d);T(G(d,B(98)),b);Bo(c,N(d));J(c);}
function ABM(b,c,d){return AOm(0,b.data.length,b,c,c+d|0,0);}
function NG(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new By;i=new M;O(i);T(G(T(G(i,B(99)),g),B(100)),f);Bo(h,N(i));J(h);}if(B7(a)<d){j=new LY;W(j);J(j);}if(d<0){j=new By;k=new M;O(k);G(T(G(k,B(101)),d),B(102));Bo(j,N(k));J(j);}g=a.V;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.hc.data[m+a.l7|0];l=l+1|0;c=n;m=o;}a.V=g+d|0;return a;}}b=b.data;j=new By;d=b.length;k=new M;O(k);BE(T(G(T(G(k,B(103)),c),B(97)),d),41);Bo(j,N(k));J(j);}
function Kb(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.mq){b=new I7;W(b);J(b);}e=d-c|0;if(B7(a)<e){b=new HW;W(b);J(b);}if(c>I(b)){f=new By;d=I(b);b=new M;O(b);BE(T(G(T(G(b,B(104)),c),B(97)),d),41);Bo(f,N(b));J(f);}if(d>I(b)){f=new By;c=I(b);b=new M;O(b);T(G(T(G(b,B(105)),d),B(106)),c);Bo(f,N(b));J(f);}if(c>d){b=new By;f=new M;O(f);T(G(T(G(f,B(104)),c),B(107)),d);Bo(b,N(f));J(b);}g=a.V;while(c<d){h=g+1|0;i=c+1|0;SL(a,g,L(b,c));g=h;c=i;}a.V=a.V+e|0;return a;}
function JU(){var a=this;G2.call(a);a.kQ=0;a.lB=null;a.xh=null;}
function ABz(b,c,d){var e,f,g;e=b.data;f=new Xl;g=e.length;d=c+d|0;Wt(f,g);AKT();f.xh=AWB;f.kQ=0;f.lB=b;f.V=c;f.dt=d;f.xl=0;f.m5=0;return f;}
function Xm(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.m5){e=new I7;W(e);J(e);}if(B7(a)<d){e=new HW;W(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new By;j=new M;O(j);T(G(T(G(j,B(108)),h),B(100)),g);Bo(i,N(j));J(i);}if(d<0){e=new By;i=new M;O(i);G(T(G(i,B(101)),d),B(102));Bo(e,N(i));J(e);}h=a.V;k=h+a.kQ|0;l=0;while(l<d){b=a.lB.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.V=h+d|0;return a;}}b=b.data;e=new By;d=b.length;i=new M;O(i);BE(T(G(T(G(i,B(103)),c),B(97)),d),41);Bo(e,N(i));J(e);}
function N_(a){a.V=0;a.dt=a.mm;a.hm=(-1);return a;}
function HE(){C.call(this);this.yc=null;}
var AWq=null;var AWp=null;var AWo=null;function G_(){G_=Bm(HE);AMj();}
function AEp(a){var b=new HE();ADi(b,a);return b;}
function ADi(a,b){G_();a.yc=b;}
function AMj(){AWq=AEp(B(109));AWp=AEp(B(110));AWo=AEp(B(111));}
var Nn=F(Cl);
function AL_(a){}
function AKC(a,b,c){}
function CR(){var a=this;Cl.call(a);a.gj=null;a.s=null;}
function Fk(a,b){var c,d,e;D2(a,b);a.gj=AAc(0,0,64);c=new Yu;c.ca=new Bi;c.dY=CI(R(Er,0));c.dz=new Bi;c.os=new Bi;c.yM=new B4;c.yL=new B4;c.cL=b.bd;d=b.bU;c.iS=d;c.cC=U1(d);d=b.l.kk;e=new ML;e.nL=c;V(d,e);d=b.l.jC;e=new MM;e.q4=c;V(d,e);a.s=c;V(b.l.bT,new SI);b=b.l.bT;c=a.s;BN(c);d=new SJ;d.sv=c;V(b,d);}
function E8(a){ER(a.bc.bd,a.gj);}
function GW(a,b,c){var d,e,f,g,h;a:{d=a.s;Cv(d.ca,b);e=d.bR;if(e!==c){d.bR=c;f=(Ct(d.dY)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gs(e,c);h=h+1|0;}}}}
var QC=F(0);
var LK=F(0);
function AED(a){a.h$(Kp());}
function LO(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HT;c=new I0;d=new Ha;ANo();JR(d,AWC);Ls(c,d,BJ(AWD),BJ(AWE),BJ(AWF),BJ(AWD),BJ(AWG),BJ(AWH),BJ(AWI),BJ(AWJ),BJ(AWK),BJ(AWL));ABS();e=(AWM.eM()).data;f=e.length;g=R(IK,f);h=g.data;i=0;while(i<f){h[i]=e[i].kE;i=i+1|0;}j=AA_(Q(B(112)),Q(B(113)),Q(B(114)),Q(B(115)));k=new H4;l=new HA;AKi();m=AWN;J1(l,m,AWO,AWP,AWQ,AWR,m);K9(k,l,AA2(),ZD(Q(B(116)),Q(B(117)),Q(B(118))),AA2(),ZW(1,0.17499999701976776),AWS,AWT);LW(b,c,g,j,k,ADG(Q(B(119)),Q(B(120)),Q(B(121)),Q(B(122))));a.h$(b);}
function AD7(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HT;c=new I0;d=new Ha;AB$();JR(d,AWU);Ls(c,d,BJ(AWV),BJ(AWW),BJ(AWX),BJ(AWV),BJ(AWY),BJ(AWZ),BJ(AW0),BJ(AW1),BJ(AW2),BJ(AW3));AAu();e=(AW4.eM()).data;f=e.length;g=R(IK,f);h=g.data;i=0;while(i<f){h[i]=e[i].lh;i=i+1|0;}j=AA_(Q(B(123)),Q(B(124)),Q(B(125)),Q(B(126)));k=new H4;l=new HA;APc();m=AW5;J1(l,m,AW6,AW7,AW8,AW9,m);K9(k,l,Zm(),ZD(Q(B(127)),Q(B(128)),CH(0)),Zm(),ZW(1,0.07500000298023224),AW$,AW_);LW(b,c,g,j,k,ADG(Q(B(129)),Q(B(130)),Q(B(131)),Q(B(132))));a.h$(b);}
var Lh=F(0);
function Mk(){var a=this;CR.call(a);a.F=null;a.E=null;a.d2=null;a.hh=0;a.hn=null;a.iR=null;}
function ATb(a){var b=new Mk();ABq(b,a);return b;}
function ABq(a,b){var c,d,e;Fk(a,b);a.iR=new L2;c=AN_(a.s);a.d2=c;a.F=AEh(a.s,c);a.E=AEh(a.s,a.d2);c=a.F;c.bM=1;d=new Rh;d.te=a;e=new Rf;e.uN=a;QY(c,d,d);QY(a.E,e,e);c=a.F;d=new Rg;d.oQ=a;c.iN=d;d=a.E;e=new Rd;e.st=a;d.iN=e;Xg(a.s,c);V(b.l.bp,a.d2);V(b.l.di,a.d2);V(b.l.di,a);V(b.l.bp,a);c=b.l.bT;d=new Re;d.mX=a;V(c,d);c=b.l.bT;d=new HH;e=new Rb;e.qC=a;Sx(d,b,e);V(c,d);V(b.l.fu,a);V(b.l.fZ,a);b=b.l.er;c=new Rc;c.tP=a;V(b,c);LO(a);}
function QI(a,b){if(a.F===b)a.hh=a.hh|1;if(a.E===b)a.hh=a.hh|2;if((a.hh&3)==3)ACR(a);}
function AKm(a,b,c){if(DZ(a.s,a.F))return GF(a.F,b,c);if(!DZ(a.s,a.E))return 0;return GF(a.E,b,c);}
function ZC(a){if(DZ(a.s,a.F))return Oh(a,a.F);if(!DZ(a.s,a.E))return null;return Oh(a,a.E);}
function Oh(a,b){var c;c=new N9;c.q7=b;return c;}
function WI(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=a.hn;if(d!==null&&d.ir!==null){e=b!==a.F?0:1;f=Bb(b.bn/b.N|0,Ca(b.e.f)-1|0);g=(Bb(((b.bn+Do(b)|0)-1|0)/b.N|0,Ca(b.e.f)-1|0)+f|0)/2|0;h=g-f|0;d=a.hn;i=0;j=d.ir.data;k=j.length-1|0;l=k;a:{while(true){if(i>l){m=Ec(0,i,k);break a;}m=(i+l|0)>>>1|0;d=j[m];n=!e?d.jj:d.jk;o=!e?d.rm:d.sk;if(n<=o&&o<(n+o|0))break a;n=BF(n,g);if(n<0)i=m+1|0;else{if(n<=0)break;l=m-1|0;}}}d=a.hn.ir.data[m];i=g-(!e?d.jj:d.jk)|0;k=b.bn-X(f,b.N)|0;c.bn=J0(X(((!e?d.jk:d.jj)+i|0)-h|0,c.N)+k|0,
IB(c));return;}}
function ACR(a){var b,c,d,e,f,g;Br(Bx(),B(133));b=a.F.e;c=a.E.e;d=EH(b.f);e=EH(c.f);f=AEG(b.f);g=AEG(c.f);b=a.bc.bU;c=new Rx;c.ux=a;CP(b,c,B(134),H(C,[d,f,e,g]));}
function AI1(a,b){var c,d;c=K6(a.F,b);d=K6(a.E,b);return !c&&!d?0:1;}
function ARa(a){var b,c,d;E8(a);Ml(a.F);Ml(a.E);b=a.s.dz;c=a.iR;Y(b,c.ld,c.lc);c=a.s.cL;d=a.iR;Bu(c,d.le,d.lf,b,a.d2.W.b8.ek);WC(a.d2);}
function APX(a){return Mm(0);}
function AJ2(a){Yx(a.F);Yx(a.E);}
function APl(a){W7(a.F);W7(a.E);}
function AP4(a,b){Yy(a.F,b);Yy(a.E,b);}
function AOX(a,b,c){GW(a,b,c);Zq(a,b,c);}
function Zq(a,b,c){var d,e,f,g,h;d=new Bi;e=B9(10.0,c);f=new Bi;g=b.b/2|0;h=e/2|0;PE(f,g-h|0,b.a);LL(a.F,d,f,c);g=b.b;d.b=(g-(g/2|0)|0)+h|0;LL(a.E,d,f,c);b=a.iR;g=f.b;Xv(b,g,d.a,d.b-g|0,f.a);}
function AGO(a,b){BN(b);PV(a.d2,b);Ll(a.F,b);Ll(a.E,b);}
function ABR(a,b){if(b.bj!=121)return 0;return 1;}
function AC1(a,b){var c,d,e;if(DZ(a.s,a.F)){c=a.d2;d=a.F;e=new MY;e.qQ=a;KG(c,b,d,a,a,e);}if(DZ(a.s,a.E)){c=a.d2;d=a.E;e=new MZ;e.nn=a;KG(c,b,d,a,a,e);}return 1;}
function AMh(a,b){var c,d;c=DI(a.F,b.h)&&PD(a.F,b)?1:0;d=DI(a.E,b.h)&&PD(a.E,b)?1:0;return !c&&!d?0:1;}
function AMd(a,b,c,d){var e,f;e=DI(a.F,b.h)&&Q6(a.F,b,c,d)?1:0;f=DI(a.E,b.h)&&Q6(a.E,b,c,d)?1:0;return !e&&!f?0:1;}
function AGk(a,b,c){var d,e,f,g,h,i,j,k;d=DI(a.F,b.h);e=DI(a.E,b.h);f=a.s;g=f.ea;h=g!==null?0:1;i=a.F;j=g!==i?0:1;k=g!==a.E?0:1;if(d&&!(!h&&!k))FT(f,i);if(e&&!(!h&&!j))FT(a.s,a.E);if(d){i=Vq(a.F,b,c);if(i!==null)return i;}return !e?null:Vq(a.E,b,c);}
function AJq(a,b,c){var d,e,f,g;d=DI(a.F,b.h);e=DI(a.E,b.h);f=d&&Vi(a.F,b,c)?1:0;g=e&&Vi(a.E,b,c)?1:0;return !f&&!g?0:1;}
function AOh(a,b,c,d){var e,f,g,h;e=DI(a.F,b.h);f=DI(a.E,b.h);g=e&&JK(a.F,c,d)?1:0;h=f&&JK(a.E,c,d)?1:0;return !g&&!h?0:1;}
function ALW(a){return ZC(a);}
var Wi=F(Mk);
function AIg(a){return Mm(1);}
function Ws(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new XX;d=d.then(Bj(e,"f"));f=new XV;f.tj=b;f.tk=c;g=new XW;d.then(Bj(f,"f"),Bj(g,"f"));}
var AEL=F();
function AQf(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(135)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Lo(b)){case -1570047148:if(!Bn(b,B(136)))break a;d=16;break a;case -1519338717:if(!Bn(b,B(137)))break a;d=2;break a;case -1509980539:if(!Bn(b,B(138)))break a;d=12;break a;case -1073555521:if(!Bn(b,B(139)))break a;d=13;break a;case -1045861098:if(!Bn(b,B(140)))break a;d=18;break a;case -811765794:if(!Bn(b,B(141)))break a;d=5;break a;case -785237654:if(!Bn(b,B(142)))break a;d=10;break a;case -631889171:if
(!Bn(b,B(143)))break a;d=8;break a;case -439438829:if(!Bn(b,B(144)))break a;d=19;break a;case 2129957:if(!Bn(b,B(145)))break a;d=1;break a;case 3343967:if(!Bn(b,B(146)))break a;d=9;break a;case 3556498:if(!Bn(b,B(147)))break a;d=4;break a;case 381904540:if(!Bn(b,B(148)))break a;d=17;break a;case 485517998:if(!Bn(b,B(149)))break a;d=6;break a;case 544901384:if(!Bn(b,B(150)))break a;d=3;break a;case 1030621992:if(!Bn(b,B(151)))break a;d=15;break a;case 1465713255:if(!Bn(b,B(152)))break a;d=7;break a;case 1554501643:if
(!Bn(b,B(153)))break a;d=14;break a;case 1609169232:if(!Bn(b,B(154)))break a;d=11;break a;default:}}b:{switch(d){case 1:break;case 2:b=new Tz;break b;case 3:case 4:b=new Ty;break b;case 5:b=new Tx;break b;case 6:b=new Tw;break b;case 7:b=new Tv;break b;case 8:case 9:b=new Tu;break b;case 10:b=new Tt;break b;case 11:b=new Ts;break b;case 12:b=new Tr;break b;case 13:b=new Q7;break b;case 14:b=new Q3;break b;case 15:b=new Q5;break b;case 16:b=new Q1;break b;case 17:b=new Q2;break b;case 18:b=new QZ;break b;case 19:b
=new Q0;break b;default:b=new QX;break b;}b=new TA;}return b;}
var ABL=F();
var J9=F(Lc);
function ABr(){var a=this;J9.call(a);a.mq=0;a.l7=0;a.hc=null;}
function AOm(a,b,c,d,e,f){var g=new ABr();ASF(g,a,b,c,d,e,f);return g;}
function ASF(a,b,c,d,e,f,g){Wt(a,c);a.V=e;a.dt=f;a.l7=b;a.mq=g;a.hc=d;}
function SL(a,b,c){a.hc.data[b+a.l7|0]=c;}
function K1(){var a=this;C.call(a);a.v7=null;a.p5=null;a.xC=0.0;a.mA=0.0;a.lL=null;a.kX=null;a.iu=0;}
function LR(){var a=this;C.call(a);a.gp=0;a.h1=0;}
var AWs=null;var AWr=null;function Zz(a,b){var c=new LR();Z9(c,a,b);return c;}
function Z9(a,b,c){a.gp=b;a.h1=c;}
function Ig(a){return a.gp?0:1;}
function G8(a){return a.gp!=1?0:1;}
function KQ(a){return !QO(a)&&!L8(a)?0:1;}
function QO(a){return a.gp!=2?0:1;}
function L8(a){return a.gp!=3?0:1;}
function Kg(a){var b;if(KQ(a))return a.h1;b=new Fl;W(b);J(b);}
function D3(b){return Zz(2,b);}
function VN(a){var b,c;switch(a.gp){case 0:b=new Qh;W(b);J(b);case 1:b=new XA;W(b);J(b);case 2:b=new VG;c=a.h1;W(b);b.yx=c;J(b);case 3:b=new P6;c=a.h1;W(b);b.yq=c;J(b);default:}}
function AAz(){AWs=Zz(0,0);AWr=Zz(1,0);}
var Zo=F();
var Ip=F(0);
var Nw=F();
function AI$(a,b){return b.arrayBuffer();}
var Nv=F();
function ANu(a,b){var c,d;c=new Pg;d=new Pe;return $rt_globals.WebAssembly.instantiate(b,ALg(Bj(c,"f"),Bj(d,"f")));}
var Nu=F();
function AOf(a,b){AGK(b);}
var Nt=F();
function AHs(a,b){AEs(b);}
function Yf(){C.call(this);this.uJ=null;}
function ANc(a,b){Ke(a.uJ.F,b);}
function Yk(){C.call(this);this.oF=null;}
function ANR(a,b){Ke(a.oF.E,b);}
var TA=F();
function ANM(a,b){return ATb(b);}
var Tz=F();
function AGr(a,b){return AU5(b);}
var Ty=F();
function AKh(a,b){return ATg(b);}
var Tx=F();
function AKe(a,b){var c,d,e;c=new Wz;Fk(c,b);d=new Vm;d.l1=new Bi;d.ki=new Bi;c.rO=d;c.dB=Zv();c.cJ=Zv();c.d_=M4(c.s);V(c.s.dY,c);d=b.l.bT;e=new TC;e.tV=c;V(d,e);V(b.l.bp,c);b=b.l.er;d=new TF;d.su=c;V(b,d);S$(c.cJ);c.lF=ET(B(155),25.0);H7(c.d_,F2(),c.lF);BB(c.gj,CH(43));b=F2();H$(c.dB,b);H$(c.cJ,b);b=c.dB;b.jv=new TE;d=c.cJ;d.jv=new TB;d.jT=new Xw;d.tv=new Xx;K0(b,(NO(0)).iV);K0(c.cJ,(NO(0)).iV);return c;}
var Tw=F();
function AKV(a,b){var c,d,e;c=new XQ;Fk(c,b);c.kH=ET(B(156),15.0);d=AEO();c.eq=d;V(c.s.dY,d);V(c.s.dY,c);BB(c.gj,CH(43));d=M4(c.s);c.hi=d;H7(d,F2(),ET(B(155),25.0));d=b.l.bT;e=new OP;e.v4=c;V(d,e);d=b.l.er;e=new OQ;e.qJ=c;V(d,e);V(b.l.bp,Zu(c.hi));V(b.l.bp,c.eq);b=b.l.di;d=c.eq;BN(d);e=new OR;e.t_=d;V(b,e);return c;}
var Tv=F();
function AGz(a,b){var c,d,e;c=new YB;Fk(c,b);c.fE=Cr();c.e7=Cr();c.o5=Q(B(157));c.im=AQs();c.f1=0;d=c.s.dY;e=new Uq;e.mS=c;V(d,e);V(b.l.bp,c);d=b.l.bT;e=new Ur;e.qD=c;V(d,e);b=Hk(b.bd,B(155),35);c.ju=b;c.h4=AEz(E5(b));BB(c.gj,Q(B(158)));return c;}
var Tu=F();
function AIi(a,b){var c,d,e,f;c=new Pn;D2(c,b);c.fV=ACf();c.d5=0;c.sl=500;c.uU=HB(0,0,0,255,new B4);c.l2=20;c.u$=20;c.oW=Kp();d=b.l.bp;e=new WP;e.iQ=c;f=new YA;f.r5=e;e.rw=f;V(d,e);d=b.l.di;e=new Tc;e.od=c;V(d,e);c.d6=b.bd;c.to=U1(b.bU);T5(c.fV,Hk(c.d6,B(155),c.u$),c.l2,c.d6);c.gS=Ho();return c;}
var Tt=F();
function AN5(a,b){var c,d;c=new Rj;Go(c,b);b=b.l.bT;d=new Qi;d.uW=c;V(b,d);return c;}
var Ts=F();
function ARL(a,b){return AUH(b);}
var Tr=F();
function ASD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new Xe;Go(c,b);c.dP=Fh(0,0,300,300);c.eU=H_(0,0,3,3);d=b.bd;b=b.l.bp;e=new Ub;e.la=c;V(b,e);b=AAO(d);c.p1=b;Gl(c.dP,b);G4(c.dP);b=c.dP.bq;E2();BB(b,AXa);BB(c.dP.bs,CM(204,120,50));ACj();e=AWA;f=DX((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CV(d);Zb();switch(AWv.data[e.cZ]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Et;W(b);J(b);}b:
{Np(m,5,5,h);b=m.d3.dr;switch(AWv.data[e.cZ]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Et;W(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.kw=m;Y(c.eU.t,Cf(m),C8(c.kw));BB(c.eU.bq,c.lO);return c;}
var Q7=F();
function ALO(a,b){var c,d,e;c=new SF;Go(c,b);c.gh=Fh(0,0,300,300);c.j8=new Bi;c.iq=new Bi;c.hA=new Bi;d=b.bd;b=b.l.bp;e=new Wh;e.jy=c;V(b,e);b=AAO(d);c.r0=b;Gl(c.gh,b);G4(c.gh);b=c.gh.bq;E2();BB(b,AXa);BB(c.gh.bs,CM(204,120,50));return c;}
var Q3=F();
function AFm(a,b){var c,d,e,f;c=new O0;D2(c,b);c.xa=20;c.yK=11;c.wR=220;c.jd=new Bi;c.xy=5000;c.gF=1;c.fq=H(Ha,[CH(0),CH(255)]);c.ed=b.bd;d=b.l.bp;e=new UB;e.jp=c;f=new PP;f.nu=e;e.qf=f;V(d,e);b=b.l.di;d=new N8;d.ud=c;V(b,d);b=CL(c.ed,200,220);c.j1=b;F5(b,B(155),20.0);b=CL(c.ed,200,20);c.fe=b;F5(b,B(155),20.0);c.hK=Ho();return c;}
var Q5=F();
function AI6(a,b){var c,d,e;c=new Iz;Go(c,b);V(b.l.bp,c);d=b.l.bT;e=new SS;e.r9=c;V(d,e);V(b.l.fu,new SR);d=b.l.fu;e=new SP;e.pO=c;V(d,e);V(b.l.fZ,new SO);d=b.l.fZ;e=new SQ;e.nz=c;V(d,e);b=!X4(b.bU)?B(159):B(160);d=new M;O(d);G(G(d,B(161)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var Q1=F();
function AL6(a,b){var c,d,e,f,g,h,i,j;c=new Ql;D2(c,b);c.nI=CH(20);c.e9=Fh(0,0,300,300);d=b.l.bT;e=new Sl;e.yd=c;V(d,e);b=b.bd;d=Hk(b,B(10),88);Cz(b.cD,d);f=Es(b.cD,B(162));g=Es(b.cD,B(163));if(f>g)g=f;h=Df(g);i=J_(d,1.1799999475479126);j=Bx();e=new M;O(e);T(G(T(G(e,B(164)),h),B(165)),i);Br(j,N(e));e=CL(b,h,i*2|0);c.h5=e;Cz(e,d);Ci(c.h5,B(162),0.0,d.dx);Ci(c.h5,B(163),0.0,i+d.dx);b=CV(b);c.lG=b;CN(b,c.h5);Gl(c.e9,c.lG);G4(c.e9);b=c.e9.bq;E2();BB(b,AXa);BB(c.e9.bs,AXb);return c;}
var Q2=F();
function APU(a,b){var c,d,e;c=new XG;D2(c,b);c.pC=CH(20);c.ga=H_(0,0,300,300);c.gy=BI(0,0);c.gz=BI(300,300);c.jE=new Bi;c.jF=new Bi;d=b.l.bT;e=new Ut;e.xW=c;V(d,e);V(b.l.bp,c);b=c.ga.bq;E2();BB(b,AXa);BB(c.ga.bs,AXb);return c;}
var QZ=F();
function AFc(a,b){var c,d,e;c=new O8;D2(c,b);c.vq=CH(20);c.cY=H_(150,50,350,250);c.mi=BI(150,140);c.mj=BI(500,100);c.ml=BI(150,200);c.mk=BI(500,250);c.fd=new Bi;c.e8=new Bi;d=b.l.bT;e=new Rw;e.yf=c;V(d,e);V(b.l.bp,c);b=c.cY.bq;E2();BB(b,AXa);BB(c.cY.bs,AXb);return c;}
var Q0=F();
function APG(a,b){var c,d,e,f;c=new WQ;Fk(c,b);c.tn=ET(B(156),20.0);d=AEO();c.d7=d;V(c.s.dY,d);V(c.s.dY,c);BB(c.gj,CH(43));d=M4(c.s);c.gM=d;H7(d,F2(),ET(B(155),25.0));d=b.l.bT;e=new QJ;e.ya=c;V(d,e);d=b.l.er;e=new QK;e.qM=c;V(d,e);V(b.l.bp,Zu(c.gM));V(b.l.bp,c.d7);d=b.l.bp;e=c.s.cC;f=new RT;f.mI=e;V(d,f);b=b.l.di;d=c.d7;BN(d);e=new QL;e.r_=d;V(b,e);return c;}
var QX=F();
function ALS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new RG;YK(c,b);d=c.cK;e=new IC;f=AJV(B(166));g=R(Bv,8);h=I(B(167));i=0;j=0;k=h+1|0;while(true){l=GH(B(167),10,j);m=l>=0?Cb(B(167),j,l):Dj(B(167),j);n=i+1|0;g=ADx(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}QM(e,Z7(g,n),B(168),f);Ke(d,e);return c;}
function G$(){var a=this;C.call(a);a.bH=0;a.cj=0;a.cX=0;a.iU=0;}
function AXc(a,b,c,d){var e=new G$();UM(e,a,b,c,d);return e;}
function UM(a,b,c,d,e){a.bH=d;a.cj=b;a.cX=c;a.iU=e;}
function O7(){var a=this;G$.call(a);a.dK=null;a.bj=0;a.hv=0;a.r8=0;a.j4=0;}
var ADM=F();
function WG(b,c){return (b+(c/2|0)|0)/c|0;}
function PX(b,c,d){if(b<(2147483647/c|0))return WG(X(b,c),d);return 0.5+c*b/d|0;}
function IH(b,c){return ((b+c|0)-1|0)/c|0;}
function Hg(b){return b+0.5|0;}
function Df(b){return b+0.5|0;}
function Ec(b,c,d){return Be(b,Bb(c,d));}
function MB(){var a=this;G$.call(a);a.h=null;a.vW=null;}
var UF=F(0);
function NR(){var a=this;C.call(a);a.uD=null;a.uE=null;}
function ALG(a,b){var c,d;c=a.uD;d=a.uE;$rt_globals.console.info("paste plain string "+b);c.m(FF(b));Dg(d);}
function Vn(){C.call(this);this.vc=null;}
function WF(a,b){a.vc.clipboardData.setData("text/plain",$rt_ustr(b));}
function Xl(){var a=this;JU.call(a);a.xl=0;a.m5=0;}
function AC8(){var a=this;C.call(a);a.d4=null;a.dS=null;a.dp=null;a.cb=null;a.W=null;}
function AN_(a){var b=new AC8();ALa(b,a);return b;}
function ALa(a,b){a.dS=AEO();a.d4=b;a.cb=M4(b);}
function PV(a,b){var c;a.W=b;c=a.dp;if(c!==null)c.ei=b.U;H7(a.cb,b.U,b.qT);}
function WC(a){Ja(a.dS,a.d4.cL);Ir(a.cb);}
function AO5(a,b){return !ZN(a.dS,b)&&!Kz(a.cb,b)?0:1;}
function ASJ(a,b,c,d){return !ABI(a.dS,b,c,d)&&!Jr(a.cb,b,c,d)?0:1;}
function AGR(a,b,c){var d;d=Jm(a.cb,b,c);if(d!==null)return d;return YI(a.dS,b,c);}
function ANs(a,b,c){return !AEN(a.dS,b,c)&&!DK(a.cb)?0:1;}
function VE(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=AOb();i=c.i;j=0;while(j<i){if(f===null){k=(Bt(c,j)).by;l=Sf(EM(B1(g.f,k)));m=V5(g.fY);}else{n=f.data;k=n[j].ke.kU;l=!C6(g.fY,n[j].h_)?B(31):Sf(EM(B1(g.f,k)));m=V5(n[j].h_);}if(I(l)>153){o=Cb(l,0,150);n=new M;O(n);G(G(n,o),B(169));l=N(n);}if(I(m)>153){o=Cb(m,0,150);n=new M;O(n);G(G(n,o),B(169));m=N(n);}p=C5(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bt(c,j);}if(f!==null){q=new UP;q.nD=d;q.nC=o;}else{q=new UR;q.vR=d;q.vM=n;}Nj(h,
m,p,l,q);j=j+1|0;}r=Ra(h);if(a.dp!==null)Uu(a);c=new Ri;n=a.d4;o=new SU;o.oY=a;o.oX=d;AAQ(c,n,o);Wk(c,r);d=a.W;Yd(c,d.U,d.tt);a.dp=ACb(a.d4);d=ZT(c,a.d4);n=a.W.U;QS(d,n.l0,n.km);LU(a.dp,d);d=a.dp;n=new M;O(n);G(G(n,B(170)),e);II(d,N(n),a.W.pQ,4.0);d=a.dp;d.ei=a.W.U;IZ(a.dS,d);d=a.dp;s=(d.T.q.a+CC(d.bv,2.0)|0)+CC(a.d4,2.0)|0;i=(c.dO+c.dR|0)+c.fW|0;t=CC(c.cw,5.0);e=BI(Ec(t,b.b,c.cw.ca.b-i|0),Ec(s,b.a,c.cw.ca.a-c.cF.a|0));TM(c);Z$(c);s=(c.dO+c.dR|0)+c.fW|0;b=c.cw;i=(b.ca.b-e.b|0)-CC(b,5.0)|0;b=c.cw;t=(b.ca.a-e.a
|0)-CC(b,5.0)|0;d=BI(Bb(s,i),Bb(c.cF.a,t));Fq(a.dp,e,d);FT(a.d4,c);}
function Uu(a){Kc(a.dS,a.dp);J3(a.dp);a.dp=null;}
function NF(a,b){var c;c=new SK;c.t2=a;c.t6=b;return c;}
function KG(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DK(a.cb)){g=a.cb;h=b.h;b=new Ti;b.X=a;b.bL=c;b.oK=f;b.hU=e;b.iJ=d;i=P5();e=b.bL.e;d=Dn(e);e=G0(e);f=b.bL.et;if(V3(f,d,e)!==null){j=b.X.W.U.bi;k=new RX;k.oj=b;k.oi=h;D8(i,B(171),j,k);}if(KY(f,d,e)!==null){j=b.X.W.U.bi;k=new RW;k.pu=b;k.pw=h;D8(i,B(172),j,k);}if(NC(f,d,e)!==null){e=b.X.W.U.bi;f=new RU;f.nB=b;f.nE=h;D8(i,B(173),e,f);}e=b.X.W.U.bi;f=new RV;f.vy=b;f.vz=h;D8(i,B(174),e,f);if(!b.bL.d$){e=b.X.W.U.bi;f=new PL;f.t5=b;D8(i,B(175),e,f);}e=b.X.W.U.bi;f
=new PJ;f.qE=b;D8(i,B(176),e,f);if(!b.bL.d$&&X4(IG(b))){e=b.X.W.U.bi;f=new PM;f.s2=b;D8(i,B(177),e,f);}l=b.X.W.U.bi;d=P5();m=b.X.W.U.bi;n=R(C$,3);o=n.data;k=b.iJ;BN(k);e=new Ta;e.oo=k;o[0]=D9(B(178),m,e);k=b.X.W.U.bi;p=b.iJ;BN(p);e=new Tb;e.rT=p;o[1]=D9(B(179),k,e);e=b.X.W.U.bi;j=b.iJ;BN(j);k=new S_;k.vH=j;o[2]=D9(B(180),e,k);JF(d,B(181),m,FV(n),AXd);f=b.X.W.U.bi;n=R(C$,2);o=n.data;k=b.hU;BN(k);j=new Or;j.sh=k;o[0]=D9(B(182),f,j);j=b.X.W.U.bi;k=b.hU;BN(k);p=new Oq;p.q$=k;o[1]=D9(B(183),j,p);GK(d,B(184),f,FV(n));f
=b.X.W.U.bi;j=new VB;j.rG=b;JF(d,B(185),f,j,AXd);GK(i,B(186),l,Hp(d));k=b.X.W.U.bi;d=P5();GK(d,B(187),b.X.W.U.bi,AE6(b));f=b.X.W.U.bi;m=new Wx;m.tg=b;D8(d,B(188),f,m);GK(i,B(189),k,Hp(d));Gf(g,h,Hp(i),NF(a,c));}}
function ALY(a,b,c,d){return Lg(a.dS,b,c,d);}
function Zf(b){var c;c=new Wm;c.um=b;return c;}
var HP=F(0);
function AHU(a){}
function ASQ(a){}
function AA6(){var a=this;C.call(a);a.bf=null;a.cB=null;a.cr=null;a.R=null;a.iA=null;a.rQ=0;a.lS=null;a.cO=null;a.w=0;a.y=0;a.g_=0;a.k8=0;a.f4=0;a.i$=null;a.eP=null;a.cz=null;a.N=0;a.e=null;a.eL=null;a.et=null;a.r=null;a.fz=null;a.dF=null;a.mt=null;a.gu=null;a.uo=0;a.sr=0;a.sn=0;a.cI=0;a.cH=0;a.cm=0;a.e2=null;a.ep=null;a.el=null;a.bn=0;a.db=0;a.he=0;a.h6=0;a.hV=0;a.wv=0;a.vZ=0;a.jw=0;a.k1=0;a.dd=null;a.hR=0;a.hQ=0;a.eO=null;a.d$=0;a.bM=0;a.ik=null;a.h9=null;a.wb=null;a.gY=null;a.n6=null;a.vJ=null;a.iN=null;a.k3
=0;a.rN=null;a.eR=Eq;a.tS=null;a.ug=null;}
function AEh(a,b){var c=new AA6();AKE(c,a,b);return c;}
function AKE(a,b,c){var d,e,f,g;a.bf=new Bi;a.cB=new Bi;a.rQ=0;a.lS=R(Bk,10);a.cO=ANp();a.f4=16;a.i$=B(155);a.cz=R(Lb,4);d=new IC;e=new HN;e.ef=GB();e.eA=GB();e.fn=Cr();e.D=M5(B(31));e.fF=0;e.cu=0;e.da=Uw(e);d.f=e;d.i9=B(190);d.fY=null;a.e=d;f=new Wj;f.nw=CI(R(Ms,0));f.ta=CI(R(Ms,0));f.tA=CI(R(MP,0));f.oZ=CI(R(Qm,0));f.mR=CI(R(GX,0));f.rU=CI(R(RO,0));a.et=f;a.r=ANW();e=new NA;e.eJ=R(Jo,16);e.eK=0;e.dg=(-1);a.fz=e;a.gu=R(EX,0);a.sn=100;a.e2=BI(1,0);a.ep=Ho();a.el=Ho();a.bn=0;a.db=0;a.he=0;a.hV=1;a.jw=1;a.k1=
3;a.dd=ACf();a.eO=B(191);a.d$=0;a.bM=0;a.ik=null;a.h9=Cr();e=EY();BN(e);f=new Vb;f.yy=e;a.gY=f;a.rN=new B4;e=new Va;e.rC=a;a.tS=e;e=new U8;e.n3=a;a.ug=e;a.cr=b;a.R=b.cL;a.iA=c;g=a.lS.data;b=new U7;b.tR=a;g[0]=b;b=new U$;b.r1=a;g[1]=b;b=new U9;b.on=a;g[2]=b;b=new Vz;b.uc=a;g[3]=b;b=new Vy;b.q1=a;g[4]=b;AFI();a.h6=AXe===AXf?0:1;}
function LL(a,b,c,d){Cv(a.bf,b);Cv(a.cB,c);Si(a,b,c,d);}
function QY(a,b,c){a.n6=b;a.vJ=c;}
function Si(a,b,c,d){var e;a.cI=B9(a.sn,d);a.cH=B9(1.0,d);a.cm=B9(10.0,d);if(!a.bM)Cv(a.cr.dz,a.bf);else Y(a.cr.dz,(b.b+c.b|0)-Lr(a)|0,b.a);VO(a.dd,a.cr.dz,Lr(a),c.a,d);b=a.cO;e=B9(2.0,d);b.dT.t.b=e;Un(a,a.i$,a.f4);V7(a);}
function AIO(a){a.k8=1;LM(a);}
function AHo(a){a.k8=0;}
function LM(a){SN(a.cO,Jw(Co(a)));}
function Ll(a,b){var c,d;a.dF=b;c=a.cO;d=b.b8.tI;BB(c.dT.bs,d);c=a.ep;d=b.b8;Gi(c,d.me,d.lV);c=a.el;b=b.b8;Gi(c,b.me,b.lV);}
function Yx(a){Le(a,a.eP.mg,a.f4+1|0);}
function W7(a){var b;b=a.f4;if(b<=7)return;Le(a,a.eP.mg,b-1|0);}
function Yy(a,b){Le(a,b,a.f4);}
function Le(a,b,c){if(a.cr.bR!==0.0){Un(a,b,c);F7(Co(a));}a.f4=c;a.i$=b;}
function Un(a,b,c){var d,e,f,g,h,i;d=B9(c,a.cr.bR);e=a.eP;f=e!==null?e.pg:0;if(!(d==f&&C6(b,a.i$))){N$(a.dd);g=a.gu.data;c=g.length;f=0;while(f<c){QF(g[f]);f=f+1|0;}g=a.e.f.D.data;c=g.length;f=0;while(f<c){Ej(g[f]);f=f+1|0;}g=a.cz.data;c=Hj(0,0);e=a.R;h=d;g[c]=GS(e,b,h,400,0);a.cz.data[Hj(0,1)]=GS(a.R,b,h,400,2);a.cz.data[Hj(1,0)]=GS(a.R,b,h,700,0);a.cz.data[Hj(1,1)]=GS(a.R,b,h,700,2);e=a.cz.data[Hj(0,0)];a.eP=e;c=E5(e);a.N=Df(c*1.25);a.cO.dT.t.a=E5(a.eP);a.mt=CG(a.mt,CL(a.R,1024,a.N));f=a.N;i=S5(a.cO);e=new M;O(e);b
=G(G(e,B(192)),b);BE(b,32);T(G(T(G(T(G(T(b,d),B(193)),c),B(165)),f),B(194)),i);$rt_globals.console.info($rt_ustr(N(e)));if(AXg){c=Li(a.eP,a.N);b=new M;O(b);T(G(b,B(195)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.g_=G1(Fw(a),a.y,a.R.cD,a.cz);GT(a);V7(a);}}
function Vr(a){return X(Ca(a.e.f)+5|0,a.N);}
function IB(a){return Be(Vr(a)-a.cB.a|0,0);}
function QV(a){return Be(a.he-De(a)|0,0);}
function De(a){var b;b=!a.bM?0:C2(a)+a.cm|0;return (a.cB.b-a.cI|0)-b|0;}
function Lr(a){return a.bM?a.cI:a.cI-a.cm|0;}
function Do(a){return a.cB.a;}
function K6(a,b){var c,d,e;c=a.e.f;d=c.fF;e=c.cu;d=d!=e&&b-c.pW>0.03125?1:0;if(d&&a.k3!=e){a.k3=e;S7(a);}d=J0((a.bn+a.wv|0)-a.vZ|0,IB(a));e=a.bn==d?0:1;if(e)Fa(a,d);return !Tj(a.cO,b)&&!e&&!a.rQ?0:1;}
function Fa(a,b){var c,d;c=J0(b,IB(a));if(c!=a.bn){a.bn=c;d=a.vJ;if(d!==null)d.hZ(c);}}
function Ii(a,b){var c,d;c=J0(b,QV(a));if(c!=a.db){a.db=c;d=a.n6;if(d!==null)d.hZ(c);}}
function Ml(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=IH(a.cB.a,a.N)+7|0;c=a.gu;if(c.data.length<b)a.gu=AAR(b,c,a.uo,a.sr,a.e.f);CK(a.R,0);ABK(a.R,a.bf,a.cB);d=(a.N-S5(a.cO)|0)/2|0;e=(a.g_-(Qv(a.cO)/2|0)|0)-a.db|0;f=!a.bM?a.cI:(a.cH+a.cm|0)+C2(a)|0;P3(a.cO,f+e|0,(d+X(a.w,a.N)|0)-a.bn|0);g=Ca(a.e.f);h=K_(a);i=Vo(a);a.uo=h;a.sr=i;j=a.cr.dz;Y(j,De(a),a.N);k=!a.bM?a.bf.b+a.cI|0:((a.bf.b+a.cH|0)+a.cm|0)+C2(a)|0;l=h;while(l<=i&&l<g){m=B1(a.e.f,l);n=Rs(a,l);AB9(n,m,a.mt,a.cz,a.R,a.N,De(a),a.db);o=n.b0;a.he
=Be(a.he,E4(m)+(40.0*a.cr.bR|0)|0);p=X(a.N,l)-a.bn|0;c=a.eL;q=c===null?null:c.data[l];ADp(n,a.bf.a+p|0,k,a.R,a.rN,j,!a.h6?0.0:0.5,De(a),a.N,a.db,a.dF,AD0(a,l,o),a.ik,a.h9,a.w!=l?0:1,a.eL===null?0:1,q);l=l+1|0;}l=h;while(l<=i&&l<g&&a.jw){n=Rs(a,l);p=X(a.N,l)-a.bn|0;r=AAi(a.r,l);m=a.dF;s=m.b8;t=s.oG;u=a.w==l&&a.eL===null?1:0;a:{if(r)t=s.kZ;else{c=a.eL;if(c!==null){c=c.data;if(l<c.length&&c[l]!==null){t=JY(m.dQ,m,c[l].fR);break a;}}if(u)t=s.i6;}}ACF(n,a.R,k,a.bf.a+p|0,a.N,j,a.db,De(a),t);l=l+1|0;}if(a.k8&&e>=(( -Qv(a.cO)
|0)/2|0)&&ABx(a.cO,a.cB))Vv(a.cO,a.R,a.bf);if(a.hV){v=Bb(i+1|0,g);ACc(a,X(a.N,v)-a.bn|0);}AAe(a);ABk(a,h,i);while(h<=i&&h<g){b:{c=a.eL;if(c!==null){w=c.data;if(h<w.length&&w[h]!==null){x=1;break b;}}x=0;}if(x){c=c.data;n=a.dF;s=JY(n.dQ,n,c[h].fR);}else s=c!==null?a.dF.b8.ek:a.dF.b8.i6;if(!(a.w!=h&&!x)){a.e2.b=!a.bM?a.cm-a.cH|0:a.cm+C2(a)|0;n=a.e2;b=a.N;n.a=b;y=a.bM?0:(a.cI-a.cm|0)+a.cH|0;p=X(b,h)-a.bn|0;m=a.R;t=a.bf;Bu(m,t.b+y|0,t.a+p|0,n,s);}h=h+1|0;}ACT(a);ADz(a);IE(a.R);}
function AD0(a,b,c){var d,e,f,g;a:{d=a.r;e=D6(d);d=FC(d);f=e.M;if(f<=b){g=BF(b,d.M);if(g<=0){d=BI(b<=f?e.bb:0,g>=0?d.bb:(-1));break a;}}d=null;}if(d!==null){if(d.a==(-1))d.a=c.S;d.b=G1(c,d.b,a.R.cD,a.cz);d.a=G1(c,d.a,a.R.cD,a.cz);}return d;}
function ABk(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cB.a;e=Bb(d,X(Ca(a.e.f),a.N)-a.bn|0);f=a.dd;g=a.bn;h=a.eL===null?a.w:(-1);i=a.R;j=a.dF;LN(f,i,b,d,Ca(a.e.f));X_(f,b);Ys(f,g,e,j,i);k=j.iG;if(e<d){l=f.fT;Bu(i,l.b,l.a+e|0,BI(f.e_.b,d-e|0),k.lp);}if(b<=h&&h<=c){l=j.iG;c=h/20|0;m=f.cy;m=Bt(m,c%m.i|0);j=f.fT;d=X(f.cy.i,f.iv);e=m.eB.a;b=((m.i7.a-(g%d|0)|0)+d|0)%d|0;if((b+e|0)>d)b= -(g%C8(m.b5)|0)|0;c=h%m.dM|0;e=m.bm;b=b+X(c,e)|0;if(b<( -e|0))b=b+d|0;Y(m.gk,m.eB.b,e);f=m.fK;c=h%m.dM|0;d=m.bm;CE(f,0.0,X(c,d),m.eB.b,d);I8(m,
i,b,j,l.o2,l.uO);}}
function K_(a){return Bb(a.bn/a.N|0,Ca(a.e.f)-1|0);}
function Vo(a){return Bb(((a.bn+Do(a)|0)-1|0)/a.N|0,Ca(a.e.f)-1|0);}
function V7(a){T5(a.dd,a.cz.data[0],a.N,a.R);LN(a.dd,a.R,K_(a),Do(a),Ca(a.e.f));}
function Rs(a,b){var c;c=a.gu.data;return c[b%c.length|0];}
function AEW(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dq(a.r))Du(a,a.eO);else{b=D6(a.r);c=FC(a.r);d=c.M;e=b.M;f=(d-e|0)+1|0;g=BG(f);h=g.data;i=R(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eO;e=e+1|0;k=f;}l=EV(a.w,a.y);m=new U2;m.tq=a;Py(a,g,0,0,i,l,m);b.bb=b.bb+I(a.eO)|0;c.bb=c.bb+I(a.eO)|0;L9(a,a.y+I(a.eO)|0,0);D0(a);}return 1;}
function ACz(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dq(a.r)){b=B1(a.e.f,a.w);if(b.o.data.length>0){c=Sd(a,b);if(c===null)return 1;d=a.e.f;e=a.w;f=EV(e,a.y);d.cu=d.cu+1|0;g=d.fn;h=R(G3,1);h.data[0]=AFL(e,0,1,c,f.by,f.bI);BZ(g,h);JN(d,e,0,1,c);FW(b,0,I(c));L9(a,a.y-I(c)|0,0);}}else{f=D6(a.r);c=FC(a.r);i=c.M;j=f.M;i=(i-j|0)+1|0;k=BG(i);h=k.data;l=R(Bv,i);m=l.data;e=a.y;n=a.w;o=0;while(j<=c.M){b=B1(a.e.f,j);if(b.o.data.length>0){b=Sd(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=Mj(k,o);h=Dk(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.M)f.bb=Be(0,f.bb-I(b)|0);if(j==c.M){c.bb=Be(0,c.bb-I(b)|0);L9(a,a.y-I(b)|0,0);}i=i+1|0;}f=EV(n,e);b=new XJ;b.pl=a;Py(a,p,0,1,h,f,b);}D0(a);return 1;}
function Sd(a,b){var c,d,e,f;c=Ec(0,I(a.eO),XD(b));if(!c)b=null;else{b=B(62);if(c<0){b=new BH;W(b);J(b);}if(c!=1){d=b.b2.data.length;if(d&&c){e=BQ(X(d,c));d=0;f=0;while(f<c){PW(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Mt(e);}else b=AVI;}}return b;}
function Py(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BG(i);k=AVb(i).data;Ht(j,c);c=0;l=k.length;if(c>l){f=new BH;W(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cu=o.cu+1|0;p=R(G3,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AFL(h[m],n[m],k[m],b[m],f.by,f.bI);m=m+1|0;}BZ(o.fn,p);c=0;while(c<i){b=e.data;JN(o,h[c],n[c],k[c],b[c]);g.mr(F3(h[c]),b[c]);c=c+1|0;}}
function AEd(a){var b,c,d,e,f,g,h,i;if(Dq(a.r))GI(a);Ej(B1(a.e.f,a.w));b=a.e.f;c=a.w;d=a.y;e=b.D;f=e.data;g=f[c];e=Dk(e,f.length+1|0);f=e.data;b.D=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DQ(R(B8,0));b.D.data[c+1|0]=g;}else if(d==g.S){f[c]=g;f[c+1|0]=DQ(R(B8,0));}else{f=(IL(g,d)).data;e=b.D.data;e[c]=f[0];e[c+1|0]=f[1];}Gy(b,c,d,0,B(196));D0(a);return CB(a,a.w+1|0,0,0);}
function ADR(a){if(Dq(a.r))GI(a);else Po(a.e.f,a.w,a.y);GT(a);D0(a);return 1;}
function YV(a){var b,c,d;if(Dq(a.r)){GI(a);return 1;}b=a.y;if(!b&&!a.w)return 1;if(b){c=a.w;b=b-1|0;Po(a.e.f,c,b);}else{c=a.w-1|0;b=Fo(a.e.f,c);d=a.e.f;K8(d,c);Gy(d,c,Fo(d,c),1,B(196));}D0(a);return CB(a,c,b,0);}
function Du(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.d$)return 0;if(Dq(a.r))GI(a);c=L6(VA(b,B(197),B(31)),B(196),(-1));d=c.data;b=a.e.f;e=a.w;f=a.y;Yq(b,e,f,c);g=d.length;if(!g)h=AVI;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BQ(i+X(g-1|0,I(B(196)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(196))){m=l+1|0;c[l]=L(B(196),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Mt(k);}Gy(b,e,f,0,h);e=a.w;m=(e+g|0)-1|0;CB(a,
m,m!=e?I(d[g-1|0]):a.y+I(d[0])|0,0);E_(a);D0(a);return 1;}
function GI(a){var b,c,d;b=D6(a.r);c=a.e.f;d=a.r;TU(c,d,Wu(c,d));CB(a,b.M,b.bb,0);E_(a);D0(a);}
function E_(a){var b;b=a.r;b.c1=0;B3(b.bV,a.w,a.y);B3(a.r.bJ,a.w,a.y);}
function C2(a){return a.eP.l5|0;}
function ACc(a,b){var c,d,e;c=a.cB.a;if(b<c){d=a.cr.dz;d.a=c-b|0;d.b=!a.bM?De(a):De(a)+a.cH|0;e=!a.bM?a.bf.b+a.cI|0:(a.bf.b+a.cm|0)+C2(a)|0;Bu(a.R,e,a.bf.a+b|0,d,a.dF.b8.ek);}}
function ACT(a){var b;b=a.bM?a.bf.b+C2(a)|0:a.bf.b+a.cB.b|0;Iy(a.ep,a.bn,a.bf.a,Do(a),Vr(a),b,C2(a));b=!a.bM?a.bf.b+a.cI|0:((a.bf.b+a.cH|0)+a.cm|0)+C2(a)|0;MC(a.el,a.db,b,De(a),a.he,a.bf.a+Do(a)|0,C2(a));}
function ADz(a){var b,c;b=P1(a.ep);c=P1(a.el);if(!(!b&&!c)){CK(a.R,1);if(b)FZ(a.ep,a.R);if(c)FZ(a.el,a.R);if(b)Gh(a.ep,a.R);if(c)Gh(a.el,a.R);}}
function AAe(a){var b,c,d,e;b=a.e2;c=a.cB;b.a=c.a;b.b=a.cH;d=!a.bM?a.cI-a.cm|0:(c.b-Lr(a)|0)-a.cH|0;b=a.R;c=a.bf;Bu(b,c.b+d|0,c.a,a.e2,a.dF.b8.vx);a.e2.b=!a.bM?a.cm-a.cH|0:a.cm+C2(a)|0;e=a.bM?0:(a.cI-a.cm|0)+a.cH|0;b=a.R;c=a.bf;Bu(b,c.b+e|0,c.a,a.e2,a.dF.b8.ek);}
function J0(b,c){return Bb(Be(0,b),c);}
function HF(a,b){var c,d,e,f,g;b=b.data;$rt_globals.console.info("onFileParsed");a.hR=1;a.hQ=1;c=D_(b[0]);d=FL(b[1]);e=(D_(b[2])).data[0];a.e.f=ACi(c,d);WE(a,ADX(e));Gu(Co(a),AXh);F7(Co(a));f=Kw(FH(),a.eR);g=new M;O(g);G(HU(G(g,B(198)),f),B(199));$rt_globals.console.info($rt_ustr(N(g)));g=a.iN;if(g!==null)g.m(a);}
function WE(a,b){var c,d;c=Dn(a.e);if(!C6(c,b)){d=new M;O(d);G(G(G(G(d,B(200)),c),B(201)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.i9=b;}}
function Co(a){return a.cr.iS;}
function KO(a,b){var c,d,e,f,g,h;c=EB(b);d=new M;O(d);G(G(d,B(202)),c);$rt_globals.console.info($rt_ustr(N(d)));NI(Co(a),EB(b));CB(a,0,0,0);a.eR=FH();a.hR=0;a.hQ=0;e=new IC;f=R(Bv,1);f.data[0]=B(31);AEP(e,f,AU2(B(31),B(31),EB(b),null));a.e=e;CB(a,0,0,0);c=EB(b);g=F4(c,46,I(c)-1|0);if(g!=(-1))c=Dj(c,g);h=!Bn(c,B(203))?5120:10240;c=new RY;c.og=a;c.of=h;c.oe=b;d=b.e5;if(d!==null)JH(c,JG(b,d.size));else{d=b.gI.getFile();e=new TX;e.mx=b;e.my=c;b=new T0;b.uS=c;d.then(Bj(e,"f"),Bj(b,"f"));}}
function Hx(a,b,c,d,e){if(Hq(a,e))return 1;if(c&&d)return 1;if(c)Fa(a,a.bn+((X(b,a.N)*12|0)/10|0)|0);else if(!d){IR(a,a.w+b|0,e);TO(a);}return 1;}
function UA(a,b,c,d){var e,f,g;if(Hq(a,d))return 1;e=Fw(a);if(!c)f=a.y+b|0;else if(b>=0)f=GU(e,a.y);else{f=a.y;if(!f)f=(-1);else{c=It(e,f);if(c>0&&e.ds.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.ds.data[c-1|0];}}if(f>e.S){if((a.w+1|0)<Ca(a.e.f))CB(a,a.w+1|0,0,d);}else if(f>=0)Dr(a,f,d);else{b=a.w;if(b>0){g=(B1(a.e.f,b-1|0)).S;CB(a,a.w-1|0,g,d);}}PN(a);return 1;}
function Hq(a,b){if(Dq(a.r)&&!b){E_(a);GT(a);return 1;}if(!(b&&Dq(a.r)))E_(a);return 0;}
function CB(a,b,c,d){a.y=c;return IR(a,b,d);}
function IR(a,b,c){a.w=Ec(0,b,Ca(a.e.f)-1|0);return Dr(a,a.y,c);}
function Dr(a,b,c){a.y=Ec(0,b,(Fw(a)).S);a.g_=a.cr.bR===0.0?0:G1(Fw(a),a.y,a.R.cD,a.cz);LM(a);GT(a);if(c)a.r.c1=1;KP(a.r,a.w,a.y);a.r.c1=0;return 1;}
function L9(a,b,c){var d;d=R2(a.r);Dr(a,b,c);a.r=d;}
function GT(a){TO(a);PN(a);}
function TO(a){var b,c,d,e,f;b=a.bn;c=b+Do(a)|0;d=a.w;e=a.N;d=X(d,e);f=d+e|0;if(d<(b+e|0))Fa(a,d-e|0);else if(f>(c-e|0))Fa(a,(f-Do(a)|0)+a.N|0);}
function PN(a){var b,c,d,e,f;b=Df(a.cr.bR*30.0);c=a.db;d=c+De(a)|0;e=a.g_;f=e+b|0;if(e<(c+b|0))Ii(a,e-b|0);else if(f>(d-b|0))Ii(a,(f-De(a)|0)+b|0);}
function TW(a,b,c){var d,e,f,g,h,i,j,k,l;Vw(a);d=a.e.f;e=DP(d.ef,c);if(e!==null)a.ik=Kk(d,e);if(e!==null)c=e;a:{f=DP(d.eA,c);if(f!==null){c=BV(f);while(true){if(!B6(c))break a;g=BY(c);BZ(a.h9,Kk(d,g));}}}h=b.by;i=b.bI;b=a.et;c=Dn(a.e);d=G0(a.e);j=(Ct(b.oZ)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.uq(c,d)){c=b.xV;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new M0;b.we=a;b.wf=d;b.wh=h;b.wj=i;c.sJ(d,h,i,b,a.gY);}}
function Hy(a,b){var c;CB(a,b.by,b.bI,0);c=GU(Fw(a),a.y);B3(a.r.bJ,a.w,c);B3(a.r.bV,a.w,a.y);}
function EW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.bf;e=c-d.b|0;f=Ec(0,((b.a-d.a|0)+a.bn|0)/a.N|0,Ca(a.e.f)-1|0);g=!a.bM?a.cI:(a.cH+a.cm|0)+C2(a)|0;h=Be(0,(e-g|0)+a.db|0);b=B1(a.e.f,f);d=a.R.cD;i=a.cz;if(!(b.eh!==null&&!b.fM))Lk(b,d,i);j=b.eh;e=b.o.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.S;else{c=Um(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.o.data.length)k=b.S;else{j=W$(b,d,i,c);k=0;e=0;while(e<c){k=k+I(b.o.data[e].u)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AXi){d=new M;O(d);T(G(T(G(T(G(d,B(204)),e),B(205)),h),B(206)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return EV(f,k);}
function TL(a,b){var c;c=b.by;a.w=c;a.y=b.bI;a.g_=G1(B1(a.e.f,c),a.y,a.R.cD,a.cz);LM(a);}
function Fw(a){return B1(a.e.f,a.w);}
function JK(a,b,c){var d,e;d=Df((a.N*4|0)*c/150.0);e=Df(b);if(d)Fa(a,a.bn+d|0);if(e)Ii(a,a.db+e|0);return 1;}
function Vi(a,b,c){a.r.c1=0;return 1;}
function Vq(a,b,c){var d,e,f;if(c)return null;d=Fi(a.ep,b.h,a.tS,1);if(d!==null)return d;d=Fi(a.el,b.h,a.ug,0);if(d!==null)return d;I1(a);e=EW(a,b.h);f=HL(a.e.f,e.by,e.bI);TL(a,e);TW(a,e,f);if(!b.bH){b=a.r;if(!b.c1)B3(b.bV,a.w,a.y);}b=a.r;b.c1=1;KP(b,a.w,a.y);b=new TI;b.uY=a;return b;}
function Q6(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.cj){b=b.h;e=EW(a,b);f=HL(a.e.f,e.by,e.bI);g=OV(a,f);h=KY(a.et,Dn(a.e),G0(a.e));if(h!==null){f=a.e;c=e.by;d=e.bI;e=new SE;e.wF=a;e.wG=b;e.wE=g;h.sJ(f,c,d,e,a.gY);}else{e=DP(a.e.f.ef,f);if(e!==null){Hy(a,e);c=1;}else{e=DP(a.e.f.eA,f);if(e!==null&&!Eg(e)){if(e.i!=1){VE(a.iA,b,e,a,g);c=1;}else{Hy(a,Bt(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EW(a,b.h)).by;e=B1(a.e.f,c);c=GZ(e,a.y);d=GU(e,a.y);b=Vh(e,c);if((d-1|0)==e.S){B3(a.r.bV,a.w,XD(e));B3(a.r.bJ,
a.w,e.S);}else{if(b!==null){b=b.u;i=0;c:{while(true){j=b.b2.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.y;if(c==i){c=GZ(e,c-1|0);d=GU(e,c);}else{if(d!=i){Qj(a.r,a.w);break b;}c=GZ(e,d+1|0);d=GU(e,c);}}}B3(a.r.bV,a.w,c);a.r.c1=1;CB(a,a.w,d,0);a.r.c1=0;I1(a);}}break a;case 3:break;default:break a;}Qj(a.r,a.w);XP(a.fz);I1(a);}}return 1;}
function PD(a,b){var c,d,e,f,g,h,i,j,k;c=a.cr.cC;if(Ft(a.ep,b.h,c))return 1;if(Ft(a.el,b.h,c))return 1;d=a.dd;if(F$(b.h,d.fT,d.e_)&&Hf(c)?1:0)return 1;e=b.h;f=!a.bM?a.bf.b+a.cI|0:((a.bf.b+a.cm|0)+a.cH|0)+C2(a)|0;a:{g=a.bf.a;h=De(a);i=Do(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Hf(c);if(b.cj){e=EW(a,b.h);e.bI=GZ(B1(a.e.f,e.by),e.bI);b=a.e.f;if(!N0(b.ef,e)&&!N0(b.eA,e)?0:1)return DE(c,B(207));}return DE(c,B(190));}
function ANH(a,b){var c,d,e,f;c=b.cj;if(c&&b.bj==65){c=Ca(a.e.f)-1|0;d=Fo(a.e.f,c);B3(a.r.bV,0,0);B3(a.r.bJ,Ca(a.e.f)-1|0,d);return 1;}if(c&&b.bj==80){HG(a);return 1;}if(!a.d$&&c&&b.bj==90){if(Dq(a.r))E_(a);b=a.e.f;b.cu=b.cu+1|0;e=b.fn;d=e.i;if(!d)e=null;else{f=(Ep(e,d-1|0)).data;e=TK(b,f[0]);c=1;while(c<f.length){TK(b,f[c]);c=c+1|0;}}if(e!==null){CB(a,e.b,e.a,0);D0(a);}return 1;}if(!c&&!b.cX){if(Bn(b.dK,B(208))){Du(a,B(209));Dr(a,a.y-1|0,0);c=1;}else if(Bn(b.dK,B(210))){Du(a,B(211));Dr(a,a.y-1|0,0);c=1;}else if
(Bn(b.dK,B(43))){Du(a,B(212));Dr(a,a.y-1|0,0);c=1;}else if(Bn(b.dK,B(213))){Du(a,B(214));Dr(a,a.y-1|0,0);c=1;}else if(Bn(b.dK,B(215))){Du(a,B(216));Dr(a,a.y-1|0,0);c=1;}else if(!Bn(b.dK,B(217)))c=0;else{Du(a,B(218));Dr(a,a.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cX&&!b.cj)){d=b.bj;if(d>=48&&d<=57){c=d-48|0;e=a.lS.data[c];if(e!==null)e.p();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bj){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(ABl(a,b))return 1;if(a.d$)c=0;else c:{switch(b.bj){case 8:break;case 9:c=!b.bH?AEW(a):ACz(a);break c;case 13:c=AEd(a);break c;case 46:c=ADR(a);break c;default:c=0;break c;}c=YV(a);}if(c)return 1;if(b.cj&&b.bj==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AJ_(b.bj)&&b.bj!=27){if(!b.cj&&!b.cX&&!b.iU)return I(b.dK)>0&&Du(a,b.dK)?1:0;return 0;}return 0;}
function W8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bn(B(168),Dn(a.e))){b=Co(a);c=new TQ;c.nK=a;d=R(C,3);e=d.data;e[0]=EH(a.e.f);f=K_(a);g=Vo(a);h=Be(0,f-100|0);f=Bb(Ca(a.e.f)-1|0,g+100|0);i=BG(3);j=i.data;j[0]=Gb(a.e.f,h);k=a.e.f;l=0;f=Bb(f+1|0,k.D.data.length);m=0;while(m<f){l=l+Fo(k,m)|0;if(m!=(k.D.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.da;k=Cr();WS(n,n.cT,k);i=BG(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bt(k,m);h=p+1|0;o[p]=q.bS;l=h+1|0;o[h]=q.bX;p=l+1|0;o[l]=q.fj;m=m+
1|0;}e[2]=i;CP(b,c,B(219),d);}}
function HG(a){var b,c,d,e;b=ABT(Dn(a.e));if(b===null){b=a.iN;if(b!==null)b.m(a);}else{a.eR=FH();c=Co(a);d=new Rq;d.s0=a;e=R(C,1);e.data[0]=EH(a.e.f);CP(c,d,b,e);}}
function S7(a){var b,c,d,e,f,g,h;b=a.e.f.da;c=Pq(b,b.cT);if(c===null)return;if(Bn(B(190),Dn(a.e)))Pz(a.e.f);a:{d=E9([CY(c),C9(c),c.b9.fj]);e=EH(a.e.f);f=BG(1);g=Dn(a.e);h=(-1);switch(Lo(g)){case 3401:if(!Bn(g,B(220)))break a;h=3;break a;case 98723:if(!Bn(g,B(221)))break a;h=2;break a;case 3254818:if(!Bn(g,B(168)))break a;h=1;break a;case 3556653:if(!Bn(g,B(190)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Co(a);c=new Te;c.vl=a;CP(b,c,B(222),H(C,[e,f,d]));}
function GF(a,b,c){var d,e,f,g,h,i;if(c&&a.d$)return 0;d=D6(a.r);e=d.M;if(Dq(a.r)){f=a.e.f;g=a.r;h=Wu(f,g);if(c)TU(f,g,h);if(c){CB(a,d.M,d.bb,0);E_(a);D0(a);}}else{h=Ff(EM(a.e.f.D.data[e]),B(196));i=Bb(Ca(a.e.f)-1|0,e);B3(a.r.bJ,i,0);if(e>=(Ca(a.e.f)-1|0))B3(a.r.bJ,i,Fo(a.e.f,i));else B3(a.r.bV,i+1|0,0);if(c)GI(a);else CB(a,e,0,0);}b.m(h);return 1;}
function ABl(a,b){var c,d,e,f;a:{switch(b.bj){case 33:c=b.cj?IR(a,IH(a.bn,a.N),b.bH):Hx(a,2-WG(Do(a),a.N)|0,0,b.cX,b.bH);break a;case 34:c=!b.cj?Hx(a,WG(Do(a),a.N)-2|0,0,b.cX,b.bH):IR(a,((a.bn+Do(a)|0)/a.N|0)-1|0,b.bH);break a;case 35:if(!Hq(a,b.bH)&&!Dr(a,(Fw(a)).S,b.bH)){c=0;break a;}c=1;break a;case 36:if(!Hq(a,b.bH)&&!Dr(a,0,b.bH)){c=0;break a;}c=1;break a;case 37:c=b.cj;if(c&&b.cX){I1(a);d=a.fz;e=d.dg;if(e<=0)d=null;else{f=d.eJ.data;c=e-1|0;d.dg=c;d=f[c];}if(d===null)c=1;else{CB(a,I9(d),LS(d),0);a.r=R2(d.l9);c
=1;}break a;}c=UA(a,(-1),c,b.bH);break a;case 38:c=Hx(a,(-1),b.cj,b.cX,b.bH);break a;case 39:c=b.cj;if(c&&b.cX){d=a.fz;c=d.dg;if(c==(d.eK-1|0))d=null;else{f=d.eJ.data;c=c+1|0;d.dg=c;d=f[c];}if(d===null)c=1;else{CB(a,I9(d),LS(d),0);a.r=R2(d.l9);c=1;}break a;}c=UA(a,1,c,b.bH);break a;case 40:c=Hx(a,1,b.cj,b.cX,b.bH);break a;default:}c=0;}if(c&&b.bH)B3(a.r.bJ,a.w,a.y);if(c)TW(a,EV(a.w,a.y),HL(a.e.f,a.w,a.y));return c;}
function I1(a){var b,c,d,e,f,g,h;b=a.fz;c=b.dg;b=c<0?null:b.eJ.data[c];if(b!==null&&a.w==I9(b)&&a.y==LS(b))return;d=a.fz;b=new Jo;c=a.w;e=a.y;f=a.r;b.lq=EV(c,e);g=R2(f);b.l9=g;g.c1=0;e=d.dg;h=d.eK;if(e==(h-1|0))M6(d,b);else{c=e+1|0;while(c<h){XP(d);c=c+1|0;}M6(d,b);}d.dg=d.dg+1|0;}
function D0(a){a.e.f.pW=Jw(Co(a));}
function Ke(a,b){var c,d,e,f,g,h,i;a.wb=null;Vw(a);c=a.e;a.e=b;a.eR=FH();d=ABT(Dn(a.e));if(d!==null){e=Co(a);f=new OT;f.sm=a;g=R(C,1);g.data[0]=EH(a.e.f);CP(e,f,d,g);}g=(Ct(a.et.mR)).data;h=g.length;i=0;while(i<h){g[i].mr(c,b);i=i+1|0;}}
function Vw(a){a.ik=null;Hs(a.h9);}
function ABT(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Lo(b)){case 3401:if(!Bn(b,B(220)))break a;c=2;break a;case 98723:if(!Bn(b,B(221)))break a;c=1;break a;case 3254818:if(!Bn(b,B(168)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(223);break b;case 2:b=B(224);break b;default:b=null;break b;}b=B(225);}}return b;}
function OV(a,b){var c;c=Kk(a.e.f,b);if(c===null)return B(31);return c.u;}
function DI(a,b){return F$(b,a.bf,a.cB);}
function Lv(a,b){var c,d,e,f;a.eL=b;Br(Bx(),B(226));b=a.eL;if(b===null){Br(Bx(),B(227));QT(a.dd,null);}else{b=b.data;c=DX(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e]===null?0:b[e].fR<<24>>24;e=e+1|0;}QT(a.dd,c);}}
var HM=F(0);
function Rh(){C.call(this);this.te=null;}
function AKx(a,b){var c;c=a.te;WI(c,c.F,c.E);}
function Rf(){C.call(this);this.uN=null;}
function AME(a,b){var c;c=a.uN;WI(c,c.E,c.F);}
function Rg(){C.call(this);this.oQ=null;}
function AGf(a,b){QI(a.oQ,b);}
function Rd(){C.call(this);this.st=null;}
function AFR(a,b){QI(a.st,b);}
function Re(){C.call(this);this.mX=null;}
function AMi(a,b){return ABR(a.mX,b);}
function HH(){var a=this;C.call(a);a.j6=null;a.o6=null;a.mE=null;}
function AXj(a,b){var c=new HH();Sx(c,a,b);return c;}
function AXk(a,b,c){var d=new HH();VQ(d,a,b,c);return d;}
function Sx(a,b,c){VQ(a,b,null,c);}
function VQ(a,b,c,d){a.j6=b.bU;a.o6=c;a.mE=d;}
function API(a,b){var c,d;if(b.cj&&b.bj==79){c=a.o6;if(c!==null&&b.bH)Wr(a.j6,c);else LZ(a.j6,a.mE);d=1;}else d=0;return d;}
function Rb(){C.call(this);this.qC=null;}
function AOc(a,b){var c;c=a.qC;c=DZ(c.s,c.F)?c.F:!DZ(c.s,c.E)?null:c.E;if(c!==null)KO(c,b);}
function Rc(){C.call(this);this.tP=null;}
function AK9(a,b){b=b;return AC1(a.tP,b);}
var ACC=F();
var ZB=F(0);
function AAc(b,c,d){return HB(b,c,d,255,new B4);}
function HB(b,c,d,e,f){CE(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Xj(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bl=g+i;e.bF=h+i;e.bk=j+i;return e;}
function JB(b,c,d,e,f){f=Xj(b,c,d,f);f.bG=e;return f;}
function GG(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Yu(){var a=this;C.call(a);a.cL=null;a.iS=null;a.cC=null;a.ca=null;a.bR=0.0;a.ea=null;a.dY=null;a.dz=null;a.os=null;a.yM=null;a.yL=null;}
function KU(a){var b;b=a.ea;if(b!==null)b.sY();}
function JZ(a){var b;b=a.ea;if(b!==null)b.vB();}
function Xg(a,b){var c;c=a.iS.dI!==(Eb()).activeElement?0:1;if(c)JZ(a);a.ea=b;if(c)KU(a);}
function FT(a,b){JZ(a);a.ea=b;KU(a);}
function DZ(a,b){return b!==a.ea?0:1;}
function IO(a){return a.cL.cD;}
function GQ(a,b){return Hk(a.cL,b.iC,B9(b.hS,a.bR));}
function CC(a,b){return B9(b,a.bR);}
var SI=F();
function ASM(a,b){var c,d,e;c=b.cj;d=c&&!b.bH&&!b.cX&&!b.iU?1:0;a:{if(d){d=b.bj;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bH&&!c&&!b.cX&&!b.iU?1:0;d=d&&b.bj==46?1:0;}b:{if(!d){e=b.bj;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.j4=1;}return 0;}
function SJ(){C.call(this);this.sv=null;}
function AFD(a,b){var c;c=a.sv.ea;return c!==null&&c.gZ(b)?1:0;}
var Er=F(0);
function ABJ(){C.call(this);this.cQ=null;}
function AEO(){var a=new ABJ();ALT(a);return a;}
function ALT(a){a.cQ=Cr();}
function IZ(a,b){RP(a.cQ,0,b);}
function Kc(a,b){Wo(a.cQ,b);}
function Ja(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cQ.i-1|0;while(c>=0){d=Bt(a.cQ,c);d.Q.eY(b);e=d.T;f=d.ei.ib;if(!LV(e)){if(!Ui(e)&&!(!e.gK&&e.dc!==null)){e.gK=0;Rk(e);g=e.d0;h=(g.dx+g.eo+5.0)/10.0;i=CC(e.gW,e.i3);g=b.cD;j=e.d0;k=e.g1;l=h*2.0;Cz(g,j);m=i+KT(g,k,l)|0;e.hH=m;m=Ec(0,m,e.q.b);if(m){j=CL(b,m,e.q.a);Cz(j,e.d0);g=e.g1;l=i;h=l+h;k=e.d0;n=k.dx;Ci(j,g,h,l+n-(n+k.eo)/16.0);g=e.dc;if(g===null){g=CV(b);e.dc=g;}CN(g,j);FR(j);CE(e.lK,0.0,0.0,Cf(e.dc),C8(e.dc));}}g=f.ro;j=e.dc;if(j===null)Pt(e,b,0,e.q.b,
g);else{i=Cf(j);f=f.qr;j=e.G;m=j.b;o=j.a;j=e.dc;EJ(b,m,o,j.ft,e.lK,j,f,g,0.0);m=e.q.b;if(i<m)Pt(e,b,i,m-i|0,g);}}CK(b,1);i=CC(d.bv,2.0);m=LV(d.T);f=d.bv;e=f.dz;f=f.os;p=m?0:d.T.q.a;g=d.Q.q;Y(f,g.b,g.a+p|0);ADV(b,f,!m?d.T.G:d.Q.G,d.ei.ib.kg, -i|0,e);f=d.Q;ADa(b,f.q,f.G,i,p,Rz(d.ei.je,d.bv.bR),d.ei.je.mo,e);c=c+(-1)|0;}}
function ZN(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cQ;if(c>=d.i)break;a:{e=Bt(d,c);f=b.h;if(DJ(e.T,f))g=DE(e.bv.cC,null);else{g=CC(e.bv,7.0);h=CC(e.bv,25.0);if(V4(e,f.b,g)){i=Ve(e,f.b,h);if(PG(e,f.a,g)){g=DE(e.bv.cC,JM(i,B(228)));break a;}if(Qq(e,f.a,g)){g=DE(e.bv.cC,JM( -i|0,B(228)));break a;}}if(M7(e,f.a,g)){h=Se(e,f.a,h);if(Op(e,f.b,g)){g=DE(e.bv.cC,JM(h,B(229)));break a;}if(T$(e,f.b,g)){g=DE(e.bv.cC,JM( -h|0,B(229)));break a;}}g=0;}}b:{c:{if(!g){if(!DJ(e.Q,b.h))break c;if(!e.Q.bO(b)&&!DE(e.bv.cC,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABI(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cQ;if(e>=f.i)break;a:{b:{g=Bt(f,e);if(!DJ(g.T,b.h)){if(!DJ(g.Q,b.h))break b;if(!g.Q.cq(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function YI(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cQ;if(d>=e.i)return null;a:{f=Bt(e,d);if(!c){b:{e=b.h;if(!LV(f.T)&&DJ(f.T,e)){g=f.Q.G;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.T.G;i=e.b-i|0;k=e.a-k|0;e=new Bi;g=new QN;g.o9=f;g.pa=i;g.pb=k;g.pc=e;g.pd=h;g.o$=j;}else{h=CC(f.bv,7.0);i=CC(f.bv,25.0);if(V4(f,e.b,h)){j=Ve(f,e.b,i);if(PG(f,e.a,h)){g=H9(f,e,j,(-1));break b;}if(Qq(f,e.a,h)){g=H9(f,e,j,1);break b;}}if(M7(f,e.a,h)){i=Se(f,e.a,i);if(Op(f,e.b,h)){g=H9(f,e,(-1),i);break b;}if(T$(f,e.b,h)){g=
H9(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DJ(f.T,b.h)?AXl:f.Q.b$(b,c);e=f.Q;if(e===null)g=null;else if(g===null)g=!DJ(e,b.h)?null:AXl;}if(g!==null)break;d=d+1|0;}return g;}
function AEN(a,b,c){var d,e,f,g;d=0;while(true){e=a.cQ;if(d>=e.i)break;a:{b:{f=Bt(e,d);if(!DJ(f.T,b.h)){if(!DJ(f.Q,b.h))break b;if(!f.Q.cN(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function Lg(a,b,c,d){var e,f;e=0;while(true){f=a.cQ;if(e>=f.i)break;if((Bt(f,e)).Q.cW(b,c,d))return 1;e=e+1|0;}return 0;}
function ARy(a,b,c){var d,e,f;d=0;while(true){e=a.cQ;if(d>=e.i)break;f=Bt(e,d);e=f.Q;e.i8(e.G,e.q,c);e=f.T;if(e.gD!==null){e.d0=null;e.hH=0;e.gK=1;}J8(f);d=d+1|0;}}
function Ow(a,b){var c,d,e;c=0;d=0;while(true){e=a.cQ;if(d>=e.i)break;Bt(e,d);c=0|c;d=d+1|0;}return c;}
function P$(a,b,c){var d;d=0;while(true){b=a.cQ;if(d>=b.i)break;Bt(b,d);d=d+1|0;}}
function Y_(){var a=this;C.call(a);a.cE=null;a.cg=null;a.jt=null;a.ji=null;a.hg=null;a.iL=null;}
function M4(a){var b=new Y_();AHa(b,a);return b;}
function AHa(a,b){a.cg=Cr();a.iL=AXm;a.cE=b;V(b.dY,a);}
function H7(a,b,c){a.jt=c;a.hg=b;b=BV(a.cg);while(B6(b)){H$(BY(b),a.hg);}}
function Gf(a,b,c,d){var e,f;e=a.cE;f=e.ca;if(X(f.b,f.a)&&e.bR!==0.0){if(a.jt!==null&&!DK(a)){a.iL=d;a.ji=GQ(a.cE,a.jt);e=T1(a,b,c,null);b=new Tp;b.tE=a;e.jv=b;FT(a.cE,a);return;}b=new BH;W(b);J(b);}c=new D1;Bo(c,B(230));J(c);}
function DM(a){var b;if(DK(a)){b=a.cE;if(b.ea===a)b.ea=null;TP(a,null);a.iL.p();a.iL=AXm;}}
function PZ(a,b,c,d,e){var f,g,h;f=Zv();S$(f);K0(f,c.dn());H$(f,a.hg);H2(f,a.ji);GY(f,a.cE);if(d===null)g=b.b;else{g=b.b;g=a.cE.ca.b<((g+(Ee(d)).b|0)+(Ee(f)).b|0)?g-(Ee(f)).b|0:(g+(Ee(d)).b|0)-d.eQ|0;}h=b.a;b=a.cE.ca;J5(f,Be(0,Bb(g,b.b-(Ee(f)).b|0)),Be(0,Bb(h,b.a-(Ee(f)).a|0)));b=new ND;b.ut=a;b.uv=f;b.uu=e;f.jT=b;BZ(a.cg,f);return f;}
function T1(a,b,c,d){return PZ(a,b,c,d,null);}
function AHm(a,b,c){var d,e;a.ji=GQ(a.cE,a.jt);d=BV(a.cg);while(B6(d)){e=BY(d);H2(e,a.ji);GY(e,a.cE);}}
function Ir(a){var b,c;if(Eg(a.cg))return;CK(a.cE.cL,1);b=0;while(true){c=a.cg;if(b>=c.i)break;JI(Bt(c,b),a.cE);b=b+1|0;}}
function Kz(a,b){var c,d;c=0;d=a.cg.i-1|0;a:{while(d>=0){c=Kn(Bt(a.cg,d),b.h,a.cE.cC);if(c)break a;d=d+(-1)|0;}}return c;}
function Jr(a,b,c,d){var e,f;e=0;f=a.cg.i-1|0;a:{while(f>=0){e=Kf(Bt(a.cg,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jm(a,b,c){var d,e,f;d=null;e=a.cg.i-1|0;a:{while(e>=0){f=Bt(a.cg,e);d=b.h;c=Eu(f.ch,d);if(!c&&!Ma(f.ch)){d=f.jv;if(d!==null)d.p();}d=!c?null:AXl;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AFS(a,b){var c;if(!DK(a))return 0;a:{switch(b.bj){case 27:DM(a);c=1;break a;default:}c=0;}return c;}
function AEM(b,c){var d,e,f;d=b.dq;e=c.cS;f=c.eQ;b=new Bi;c=d.z;PE(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function TP(a,b){var c,d;c=a.cg.i-1|0;a:{while(true){if(c<0)break a;d=Bt(a.cg,c);if(b===d)break;Ep(a.cg,c);TT(d);c=c+(-1)|0;}}}
function DK(a){return a.cg.i<=0?0:1;}
function ABt(){var a=this;C.call(a);a.dT=null;a.ll=0.0;a.gU=0.0;a.gv=0;}
function ANp(){var a=new ABt();AR6(a);return a;}
function AR6(a){var b;b=H_(0,0,2,20);a.dT=b;a.ll=0.5;a.gU=0.0;HB(187,187,187,255,b.bs);}
function S5(a){return a.dT.t.a;}
function Qv(a){return a.dT.t.b;}
function Tj(a,b){var c,d;a:{c=a.gv;if(b>a.gU)while(true){d=a.gU+a.ll;a.gU=d;a.gv=a.gv?0:1;if(b>d)continue;else break a;}}return a.gv==c?0:1;}
function P3(a,b,c){Y(a.dT.z,b,c);}
function SN(a,b){a.gU=b+a.ll*1.25;a.gv=1;}
function ABx(a,b){return ZH(a.dT.z,0,0,b);}
function Vv(a,b,c){if(a.gv)US(a.dT,b,c.b,c.a);}
function Lb(){var a=this;C.call(a);a.mg=null;a.wc=null;a.ws=0.0;a.pg=0;a.wz=0;a.w6=0;a.rj=0;a.xU=0;a.dx=0.0;a.eo=0.0;a.wp=0.0;a.l5=0.0;a.ww=0;a.nf=null;}
function E5(a){return Df(a.dx+a.eo);}
function J_(a,b){return Df((a.dx+a.eo)*b);}
function IC(){var a=this;C.call(a);a.fY=null;a.f=null;a.i9=null;a.qt=null;}
function ATu(a,b){var c=new IC();AEP(c,a,b);return c;}
function AXn(a,b,c){var d=new IC();QM(d,a,b,c);return d;}
function AEP(a,b,c){QM(a,b,null,c);}
function QM(a,b,c,d){var e,f,g,h,i,j,k;a.fY=d;a.i9=c;if(d===null)c=null;else{c=d.fc;c=c===null?null:!Eh(c,B(231))&&!Eh(c,B(232))&&!Eh(c,B(233))&&!Eh(c,B(234))&&!Eh(c,B(235))&&!Eh(c,B(236))?(Eh(c,B(203))?B(168):!Eh(c,B(237))?null:B(220)):B(221);}e=b.data;a.qt=c;c=new HN;f=e.length;if(!f)g=M5(B(31));else{g=R(CA,f);h=g.data;i=0;while(i<f){j=new CA;k=R(B8,1);k.data[0]=Sn(e[i]);Ia(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.ef=GB();c.eA=GB();c.fn=Cr();if(!b.length){c=new BH;W(c);J(c);}c.D=g;c.fF=0;c.cu=0;c.da=Uw(c);a.f=c;}
function Dn(a){var b;b=a.i9;if(b===null)b=a.qt;return b;}
function G0(a){var b;b=a.fY;return b===null?null:b.hP;}
function Wj(){var a=this;C.call(a);a.nw=null;a.ta=null;a.tA=null;a.oZ=null;a.mR=null;a.rU=null;}
function KY(a,b,c){return XY(a,Ct(a.nw),b,c);}
function V3(a,b,c){return XY(a,Ct(a.ta),b,c);}
function XY(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.uq(c,d))return g.wN;f=f+1|0;}return null;}
function NC(a,b,c){var d,e,f,g;d=(Ct(a.tA)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.uq(b,c))return g.wV;f=f+1|0;}return null;}
function YN(){var a=this;C.call(a);a.bV=null;a.bJ=null;a.c1=0;}
function ANW(){var a=new YN();AF6(a);return a;}
function R2(a){var b=new YN();AFp(b,a);return b;}
function AF6(a){a.bV=new Gm;a.bJ=new Gm;}
function AFp(a,b){var c;c=new Gm;a.bV=c;a.bJ=new Gm;XH(c,b.bV);XH(a.bJ,b.bJ);a.c1=b.c1;}
function KP(a,b,c){B3(a.bJ,b,c);if(!a.c1)B3(a.bV,b,c);}
function Qj(a,b){B3(a.bV,b,0);B3(a.bJ,b+1|0,0);}
function D6(a){if(Yb(a.bV,a.bJ)>0)return a.bJ;return a.bV;}
function FC(a){if(Yb(a.bV,a.bJ)<0)return a.bJ;return a.bV;}
function Dq(a){var b,c;b=a.bV;c=a.bJ;return (b===c?1:c!==null&&Cs(b)===Cs(c)?(b.M==c.M&&b.bb==c.bb?1:0):0)?0:1;}
function AAi(a,b){var c,d;if(!Dq(a))return 0;c=D6(a);d=FC(a);return c.M<=b&&b<d.M?1:0;}
function NA(){var a=this;C.call(a);a.eJ=null;a.eK=0;a.dg=0;}
function M6(a,b){var c,d,e;c=a.eK;d=a.eJ;if(c==d.data.length)a.eJ=Dk(d,c+16|0);d=a.eJ.data;e=a.eK;a.eK=e+1|0;d[e]=b;}
function XP(a){var b,c,d;b=a.dg;c=a.eK-1|0;if(b==c)a.dg=b-1|0;d=a.eJ.data;a.eK=c;d[c]=null;}
function EX(){var a=this;C.call(a);a.bZ=0;a.b0=null;a.ev=null;a.dJ=0;a.c9=0;}
var AXo=0;var AXp=0;var AXg=0;function AB9(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.b0;j=i===b&&!i.h3?0:1;if(j){a.b0=b;Lk(b,e.cD,d);}i=a.b0;k=i===null?0:E4(i)<g?IH(E4(a.b0),1024):IH(g,1024)+1|0;l=k<=a.dJ?0:1;if(l)a.dJ=k;if(!(!j&&!l)){if(AXo){m=b.fr;$rt_globals.console.info("fMeasure"+m.data);AXo=0;}if(!AXg){i=c.br;b="alphabetic";i.textBaseline=b;}else{b=c.br;i="top";b.textBaseline=i;}a.c9=h/1024|0;while(true){i=a.ev;if(i.i>=a.dJ)break;BZ(i,CV(e));}k=0;while(k<a.dJ){H6(a,c,f,d,a.c9+k|0);k=k+1|0;}a.b0.h3=0;}if(!Eg(a.ev)
&&h<=E4(a.b0)){k=h/1024|0;g=a.c9;if(k!=g){if(MO(k-g|0)>=a.dJ){g=0;while(g<a.dJ){H6(a,c,f,d,k+g|0);g=g+1|0;}a.c9=k;}else{while(true){h=a.c9;if(h>=k)break;H6(a,c,f,d,h+a.dJ|0);a.c9=a.c9+1|0;}while(true){h=a.c9;if(h<=k)break;H6(a,c,f,d,h-1|0);a.c9=a.c9-1|0;}}}}}
function Li(b,c){return (c-E5(b)|0)/2|0;}
function TN(b,c){return Li(b,c)+b.rj|0;}
function H6(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Ex(b);f=a.b0.fr;g=e*1024|0;h=Pb(a,g);if(h>=a.b0.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bZ;a:{while(true){l=a.b0;if(h>=l.o.data.length)break a;l=NH(l,h);m=!AXg?TN(d.data[l.cc],c):Li(d.data[l.cc],c);n=d.data;o=f.data;Cz(b,n[l.cc]);Ci(b,l.u,k,m);k=o[h]-j+a.bZ;if(k>1024.0)break;h=h+1|0;}}CN(Bt(a.ev,e%a.dJ|0),b);}
function ADp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;if(Eg(a.ev))return;if(!a.dJ)return;if(j>E4(a.b0))return;r=a.b0;s=r.eh;t=r.o;u=j/1024|0;v=Pb(a,j);w= -a.bZ|0;x=i;a:{while(true){y=t.data;z=y.length;if(v>=z)break a;ba=v!=(z-1|0)?0:1;if(w>=h)break;bb=s.data;r=Bt(a.ev,u%a.dJ|0);bc=y[v];bd=bb[v]+a.bZ|0;be=u*1024|0;bf=(bd-be|0)>1024?0:1;bg=u+1|0;bh=bg*1024|0;bi=Bb(bh,bd)-j|0;if(bf&&ba)bi=bi+a.bZ|0;if((w+bi|0)>h)bi=h-w|0;bj=l!==null?0:1;b:
{if(!bj){bk=!ba?a.bZ:2*a.bZ|0;z=l.b;bl=l.a;if(!(z<bl&&j<=bl&&(j+bi|0)>(z+bk|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bj){bm=!ba?a.bZ:2*a.bZ|0;if(j>=l.b&&(j+bi|0)<=(l.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(o&&!p)bo=k.b8.i6;if(bc===m)bo=k.b8.qz;bp=BV(n);d:{e:{while(B6(bp)){f:{bq=BY(bp);if(bq!==null){if(!bq.cx(bc))break f;else break e;}if(bc===null)break e;}}bj=0;break d;}bj=1;}if(bj)bo=k.b8.oJ;if(q!==null){y=q.li;if(y===null)z=0;else{y=y.data;z=v>=y.length?0:y[v];}bo=Vt(k.dQ,k,z,q.fR);}if(!bn&&!bl){l.a=Bb(l.a,
E4(a.b0));bk=j>=l.b?bi:(Bb(bd,bh)-l.b|0)-(!ba?a.bZ:0)|0;bh=(j+bi|0)<=(l.a+(!ba?a.bZ:2*a.bZ|0)|0)?0:(Bb(bd,bh)-l.a|0)-(!ba?a.bZ:0)|0;bm=j-be|0;bl=w+c|0;br=bm;bj=bi-bk|0;CE(e,br,0.0,bj,x);Y(f,bj,i);Iv(a,d,bl,b,f,e,bc,r,g,k,0,bo);bj=bm+bi|0;CE(e,bj-bh|0,0.0,bh,x);Y(f,bh,i);z=bl+bi|0;Iv(a,d,z-bh|0,b,f,e,bc,r,g,k,0,bo);bs=bj-bk|0;bj=bk-bh|0;CE(e,bs,0.0,bj,x);Y(f,bj,i);Iv(a,d,z-bk|0,b,f,e,bc,r,g,k,1,bo);}else{CE(e,j-be|0,0.0,bi,x);Y(f,bi,i);Iv(a,d,w+c|0,b,f,e,bc,r,g,k,bn,bo);}j=j+bi|0;w=w+bi|0;if(!bf){v=v+(-1)|0;u
=bg;}v=v+1|0;}}}
function Iv(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bG!==0.0&&f.bk!==0.0){m=j.vb.data[g.cR];if(k)n=j.b8.kZ;else{g=m.nM;if(g===null)g=j.b8.ek;if(l===null)l=BN(g);n=l;}g=m.nQ;if(AXp)i=0.0;EJ(b,c,d,e,f,h,g,n,i);return;}return;}}
function Pb(a,b){var c,d,e,f,g,h,i;c=a.b0;d=c.fr;e=0;f=c.o.data.length;g=b;b=BF(e,f);if(b>0){c=new BH;W(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BF(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function QF(a){a.b0=null;J$(a.ev,new QG);Hs(a.ev);}
function ACF(a,b,c,d,e,f,g,h,i){var j,k;j=E4(a.b0);if(j)j=j+a.bZ|0;if(!j)j=j-a.bZ|0;k=Be( -a.bZ|0,j-g|0);if(k>=h)return;Y(f,h-k|0,e);Bu(b,c+k|0,d,f,i);}
function AAR(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EX,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B1(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.b0===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EX;f.bZ=3;f.ev=Cr();f.c9=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)QF(o);h=h+1|0;}return g;}
function ADv(){AXg=0;}
function ABW(){var a=this;C.call(a);a.e0=null;a.cV=null;a.dZ=null;a.ew=null;a.hO=null;a.hN=null;}
function Ho(){var a=new ABW();AII(a);return a;}
function AII(a){a.e0=new Bi;a.cV=new Bi;a.dZ=new Bi;a.ew=new Bi;a.hO=new B4;a.hN=new B4;}
function P1(a){var b;b=a.cV;return !X(b.b,b.a)?0:1;}
function IV(a,b){return F$(b,a.dZ,a.ew);}
function Fi(a,b,c,d){var e,f,g,h,i;e=IV(a,b);f=F$(b,a.e0,a.cV);if(!e&&!f)return null;if(!f){if(!d)c.m(XU(a,b.b-a.dZ.b|0));else c.m(ON(a,b.a-a.dZ.a|0));}g=!d?a.e0.b+(a.cV.b/2|0)|0:a.e0.a+(a.cV.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new N1;b.tB=a;b.tD=c;b.tC=i;}else{b=new NZ;b.qo=a;b.qn=c;b.qp=i;}return b;}
function Gi(a,b,c){if(b!==null&&c!==null){BB(a.hO,c);BB(a.hN,b);return;}}
function AEy(b,c){var d;d=new Uj;d.rr=b;d.mG=c;return d;}
function ON(a,b){var c,d,e;c=a.ew.a;d=a.cV.a;e=c-d|0;return AEy(Bb(Be(0,b-(d/2|0)|0),e),e);}
function XU(a,b){var c,d,e;c=a.ew.b;d=a.cV.b;e=c-d|0;return AEy(Bb(Be(0,b-(d/2|0)|0),e),e);}
function Iy(a,b,c,d,e,f,g){N6(a,b,c,d,e,f,g,1);}
function MC(a,b,c,d,e,f,g){N6(a,b,c,d,e,f,g,0);}
function N6(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Y(a.ew,0,0);Y(a.cV,0,0);}else{i=Bb(g*3|0,d);j=Be(PX(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PX(b,i,e):0;if(!h){k=a.e0;k.b=i+c|0;k.a=f-g|0;l=a.cV;l.b=j;l.a=g;l=a.dZ;l.b=c;l.a=k.a;k=a.ew;k.b=d;k.a=g;}else{k=a.e0;k.b=f-g|0;k.a=i+c|0;l=a.cV;l.b=g;l.a=j;l=a.dZ;l.b=k.b;l.a=c;k=a.ew;k.b=g;k.a=d;}}}
function Qd(a,b){FZ(a,b);Gh(a,b);}
function FZ(a,b){var c;c=a.dZ;Bu(b,c.b,c.a,a.ew,a.hO);}
function Gh(a,b){var c,d;c=a.cV;c.b=c.b-2|0;c.a=c.a-2|0;d=a.e0;Bu(b,d.b+1|0,d.a+1|0,c,a.hN);b=a.cV;b.b=b.b+2|0;b.a=b.a+2|0;}
function Ft(a,b,c){return IV(a,b)&&Hf(c)?1:0;}
function ABX(){var a=this;C.call(a);a.xI=20;a.fT=null;a.e_=null;a.ix=null;a.iw=0;a.iv=0;a.jf=0.0;a.cy=null;a.hq=null;a.eF=null;a.fk=null;a.fx=0;}
function ACf(){var a=new ABX();ARt(a);return a;}
function ARt(a){a.xI=20;a.fT=new Bi;a.e_=new Bi;a.cy=Cr();a.hq=DX(0);}
function X_(a,b){var c,d,e,f,g;c=a.fx;if(b==c)return;d=a.cy.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Be(0,(c-1|0)/20|0);f=Be(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){SY(a,b);a.fx=b;}else{if(a.fx>=b)while(true){if(g<f)break a;a.fx=To(Bt(a.cy,g%d|0),a.eF,a.fk,a.fx,b,e,a.jf);g=g+(-1)|0;}while(f<=g){a.fx=To(Bt(a.cy,f%d|0),a.eF,a.fk,a.fx,b,e,a.jf);f=f+1|0;}}}}
function QT(a,b){if(b===null)b=DX(0);a.hq=b;}
function Ys(a,b,c,d,e){var f;f=BV(a.cy);while(B6(f)){ZL(BY(f),a.fT,c,b,X(a.cy.i,a.iv),d,a.hq,e);}}
function LN(a,b,c,d,e){var f,g,h,i,j,k;f=a.cy.i;a.hq=Xi(a.hq,e);while(true){g=a.cy.i;e=X(g,a.iv);if(e>(d+a.iw|0))break;h=BI(0,e);i=new Ns;j=a.e_.b;g=a.iw;k=a.ix;i.gk=new Bi;i.fK=new B4;i.i7=h;i.dM=20;i.bm=g;i.eB=BI(j,20*g|0);i.fN=TN(k,g);if(i.b5===null)i.b5=CV(b);BZ(a.cy,i);}if(g==f)return;SY(a,c);}
function SY(a,b){var c,d,e,f,g,h,i,j;c=a.cy;d=c.i;e=X((b/(d*20|0)|0)+1|0,d)*20|0;c=BV(c);while(B6(c)){f=BY(c);g=a.eF;h=a.jf;Ex(g);i=0;while(true){j=f.dM;if(i>=j)break;j=e-X(d,j)|0;if(j<b)j=e;e=j+1|0;F_(f,g,C5(e),X(f.bm,i)+f.fN|0,h);i=i+1|0;}CN(f.b5,g);}}
function T5(a,b,c,d){var e;a.ix=b;a.iw=c;e=c*20|0;a.iv=e;b=CG(a.eF,CL(d,a.e_.b,e));a.eF=b;Cz(b,a.ix);Sw(a.eF,2);b=CG(a.fk,CL(d,a.e_.b,c));a.fk=b;Cz(b,a.ix);Sw(a.fk,2);}
function N$(a){J$(a.cy,new Qr);Hs(a.cy);a.eF=CG(a.eF,null);a.fk=CG(a.fk,null);}
function VO(a,b,c,d,e){Cv(a.fT,b);Y(a.e_,c,d);a.jf=e;}
var WB=F(0);
var Hr=F(0);
var EQ=F();
function Eg(a){return a.i?0:1;}
function HI(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=U6(Ib(Cs(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BV(a);while(B6(f)){g=b.data;h=e+1|0;g[e]=BY(f);e=h;}return b;}
var Jf=F(0);
function F9(){EQ.call(this);this.cv=0;}
function BV(a){var b;b=new NJ;b.gL=a;b.mf=a.cv;b.iy=a.nR();b.f8=(-1);return b;}
function Qy(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(C6(b,Bt(a,d)))break;d=d+1|0;}return d;}
function AMV(a,b){var c,d;if(!IJ(b,Jf))return 0;c=b;if(a.i!=c.i)return 0;d=0;while(d<c.i){if(!C6(Bt(a,d),Bt(c,d)))return 0;d=d+1|0;}return 1;}
var Iq=F(0);
function N5(){var a=this;F9.call(a);a.cl=null;a.i=0;}
function Cr(){var a=new N5();AJn(a);return a;}
function AXq(a){var b=new N5();MW(b,a);return b;}
function AJn(a){MW(a,10);}
function MW(a,b){a.cl=R(C,b);}
function Jp(a,b){var c,d;c=a.cl.data.length;if(c<b){d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.cl=Dk(a.cl,d);}}
function Bt(a,b){Jd(a,b);return a.cl.data[b];}
function ANO(a){return a.i;}
function BZ(a,b){var c,d;Jp(a,a.i+1|0);c=a.cl.data;d=a.i;a.i=d+1|0;c[d]=b;a.cv=a.cv+1|0;return 1;}
function RP(a,b,c){var d,e,f;Pu(a,b);Jp(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.cl.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cl.data[b]=c;a.i=d+1|0;a.cv=a.cv+1|0;}
function Ep(a,b){var c,d,e,f;Jd(a,b);c=a.cl.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cv=a.cv+1|0;return d;}
function Wo(a,b){var c;c=Qy(a,b);if(c<0)return 0;Ep(a,c);return 1;}
function Hs(a){ZP(a.cl,0,a.i,null);a.i=0;a.cv=a.cv+1|0;}
function Jd(a,b){var c;if(b>=0&&b<a.i)return;c=new By;W(c);J(c);}
function Pu(a,b){var c;if(b>=0&&b<=a.i)return;c=new By;W(c);J(c);}
function J$(a,b){var c;c=0;while(c<a.i){b.m(a.cl.data[c]);c=c+1|0;}}
function Om(a,b){var c,d,e,f,g,h,i;c=a.cl;d=a.i;if(b===null)b=AVE;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}AAA(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cv=a.cv+1|0;}
function Vb(){C.call(this);this.yy=null;}
function B4(){var a=this;C.call(a);a.bl=0.0;a.bF=0.0;a.bk=0.0;a.bG=0.0;}
function ARv(a){var b=new B4();ANl(b,a);return b;}
function CE(a,b,c,d,e){a.bl=b;a.bF=c;a.bk=d;a.bG=e;}
function ANl(a,b){a.bl=b.bl;a.bF=b.bF;a.bk=b.bk;a.bG=b.bG;}
function BB(a,b){a.bl=b.bl;a.bF=b.bF;a.bk=b.bk;a.bG=b.bG;return a;}
function ASl(a,b){if(a===b)return 1;return b!==null&&Cs(a)===Cs(b)&&KE(a,b)?1:0;}
function KE(a,b){return b.bl===a.bl&&b.bF===a.bF&&b.bk===a.bk&&b.bG===a.bG?1:0;}
function Va(){C.call(this);this.rC=null;}
function APH(a,b){var c;c=a.rC;Fa(c,FO(b,IB(c)));}
function U8(){C.call(this);this.n3=null;}
function ANw(a,b){var c;c=a.n3;Ii(c,FO(b,QV(c)));}
function U7(){C.call(this);this.tR=null;}
function APD(a){var b,c;b=a.tR;c=b.h6?0:1;b.h6=c;b=new M;O(b);F8(G(b,B(238)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function U$(){C.call(this);this.r1=null;}
function AKv(a){var b,c;b=a.r1;c=b.hV?0:1;b.hV=c;b=new M;O(b);F8(G(b,B(239)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function U9(){C.call(this);this.on=null;}
function AMQ(a){var b,c;b=a.on;c=b.jw^1;b.jw=c;b=new M;O(b);F8(G(b,B(240)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Vz(){C.call(this);this.uc=null;}
function AO4(a){var b,c,d,e,f;b=a.uc;c=(b.k1+3|0)%6|0;b.k1=c;d=b.gu.data;e=d.length;f=0;while(f<e){b=d[f];b.bZ=c;b=b.b0;if(b!==null)b.h3=1;f=f+1|0;}}
function Vy(){C.call(this);this.q1=null;}
function AJ9(a){var b;b=a.q1;b.bM=b.bM?0:1;N$(b.dd);b.dd=ACf();Si(b,b.bf,b.cB,b.cr.bR);}
var Fv=F(Cm);
var AXe=null;var AXr=null;var AXf=null;var AXs=null;function AFI(){AFI=Bm(Fv);AMY();}
function ACo(a,b){var c=new Fv();ACa(c,a,b);return c;}
function ACa(a,b,c){AFI();C_(a,b,c);}
function AMY(){var b;AXe=ACo(B(241),0);AXr=ACo(B(242),1);b=ACo(B(243),2);AXf=b;AXs=H(Fv,[AXe,AXr,b]);}
function Kq(){C.call(this);this.xG=null;}
var AWB=null;var AXt=null;function AKT(){AKT=Bm(Kq);ASt();}
function AIF(a){var b=new Kq();YJ(b,a);return b;}
function YJ(a,b){AKT();a.xG=b;}
function ASt(){AWB=AIF(B(244));AXt=AIF(B(245));}
var UW=F(0);
function Hf(a){return DE(a,null);}
function U1(b){var c;c=new N2;c.n2=b;return c;}
function ML(){C.call(this);this.nL=null;}
function ALZ(a){KU(a.nL);}
function MM(){C.call(this);this.q4=null;}
function AKo(a){JZ(a.q4);}
var Yl=F(0);
var AXm=null;function ADS(){AXm=new NS;}
function IF(){var a=this;C.call(a);a.z=null;a.t=null;a.bs=null;a.bq=null;}
function ALN(){var a=new IF();Sz(a);return a;}
function H_(a,b,c,d){var e=new IF();AID(e,a,b,c,d);return e;}
function Sz(a){a.z=new Bi;a.t=new Bi;a.bs=new B4;a.bq=new B4;}
function AID(a,b,c,d,e){a.z=new Bi;a.t=new Bi;a.bs=new B4;a.bq=new B4;P_(a,b,c,d,e);}
function P_(a,b,c,d,e){Y(a.z,b,c);Y(a.t,d,e);}
function Tn(a){Y(a.t,0,0);}
function Ma(a){var b;b=a.t;return X(b.b,b.a)?0:1;}
function Eu(a,b){return F$(b,a.z,a.t);}
function US(a,b,c,d){var e;e=a.z;Bu(b,e.b+c|0,e.a+d|0,a.t,a.bs);}
function Uv(a,b,c,d,e,f){var g,h,i,j;g=a.z;d=g.b+d|0;e=g.a+e|0;g=a.t;h=a.bq;i=a.bs;Ih(b,b.hu);I5(b.hu,b.bo,d,e,g,b.dk);UI(b.hu,b.bo,c);g=b.hu;j=b.bo;Fy(j,g.vg,h);Fy(j,g.ve,i);c=g.qu;j.uniform2f(c,f,0.0);Ic(b);}
function HN(){var a=this;C.call(a);a.D=null;a.da=null;a.ef=null;a.eA=null;a.fn=null;a.cu=0;a.fF=0;a.pW=0.0;}
function Uw(a){var b,c,d,e,f,g,h,i;b=TR(a);c=new IW;d=new N5;e=Of(0,b,0);f=new X8;f.tO=e;MW(d,1);e=BV(f);g=0;while(true){h=d.cl.data;i=h.length;if(g>=i)break;h[g]=BY(e);g=g+1|0;}d.i=i;UC(c,d);return c;}
function B1(a,b){return a.D.data[b];}
function Ca(a){return a.D.data.length;}
function TR(a){return Gb(a,Ca(a));}
function Fo(a,b){return a.D.data[b].S;}
function K8(a,b){var c,d,e,f,g,h,i;c=a.D.data;d=c[b];e=c[b+1|0];f=DQ(LP(d.o,e.o));g=a.D;h=g.data.length;if(b<h&&b>=0){i=R(CA,h-1|0);c=i.data;Ru(g,b,i);c[b]=f;a.D=i;return;}d=new Bq;W(d);J(d);}
function Po(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.D.data;if(!(c<d[b].S?0:1)){d=(B1(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.u)){f=L(h.u,g);break a;}g=g-I(h.u)|0;f=f+1|0;}f=0;}EO();h=new Bv;d=BQ(1);d.data[0]=f;Hm(h,d);Gy(a,b,c,1,h);h=a.D.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].u);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].u)==1)h.o=Ru(i,j,R(B8,e-1|0));else{k=d[j];if(c<=0)l=DF(Dj(k.u,1),k.cR,k.cc);else if(c>=(I(k.u)-1|0)){l=new B8;m=k.u;VI(l,Cb(m,0,I(m)-
1|0),k.cR,k.cc);}else{i=BQ(I(k.u)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.u,b);b=b+1|0;}b=n.length;while(c<b){m=k.u;e=c+1|0;n[c]=L(m,e);c=e;}l=DF(FY(i),k.cR,k.cc);}d[j]=l;}h.S=h.S-1|0;Ej(h);}else if(b!=(d.length-1|0))K8(a,b);}
function Yq(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){XC(a.D.data[b],c,e[0]);return;}g=f-1|0;h=IL(a.D.data[b],c);d=a.D;i=Dk(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].u);JC(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fs(e[m]))j=DQ(R(B8,0));else{j=new CA;l=R(B8,1);l.data[0]=DF(e[m],0,0);Ia(j,l);}d[b+m|0]=j;m=m+1|0;}JC(h[1],0,0,e[g]);d[b+g|0]=h[1];a.D
=i;}
function Wu(a,b){var c,d,e,f,g,h,i;c=D6(b);d=FC(b);e=c.M;if(e==d.M)return Cb(EM(a.D.data[e]),c.bb,d.bb);f=new M;O(f);b=a.D.data[c.M];e=c.bb;BE(B0(f,Dj(EM(b),e)),10);g=a.D;h=c.M+1|0;e=d.M;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;YW(B0(f,EM(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.D.data[d.M];i=d.bb;B0(f,Cb(EM(b),0,i));return N(f);}}b=new W3;W(b);J(b);}
function TU(a,b,c){var d;U_(a,b);d=D6(b);Gy(a,d.M,d.bb,1,c);}
function U_(a,b){var c,d,e,f,g,h,i;a:{c=D6(b);d=FC(b);e=c.M;if(e==d.M)FW(a.D.data[e],c.bb,d.bb);else{b=a.D.data[e];FW(b,c.bb,b.S);FW(a.D.data[d.M],0,d.bb);e=c.M+1|0;f=d.M;g=a.D;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(CA,(h-f|0)+e|0);AA9(g,e,f,i);a.D=i;K8(a,c.M);break a;}b=new Bq;W(b);J(b);}b=new Bq;W(b);J(b);}}}
function HL(a,b,c){return EV(b,GZ(B1(a,b),c));}
function NM(a,b){var c,d,e;c=0;d=0;while(true){e=a.D.data.length;if(c>=e)break;if((d+(B1(a,c)).S|0)>=b)return BI(c,b-d|0);d=d+((B1(a,c)).S+1|0)|0;c=c+1|0;}return BI(e,0);}
function Gb(a,b){var c,d,e;c=0;d=a.D.data.length;e=0;while(e<b){c=c+Fo(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Kk(a,b){return Vh(B1(a,b.by),b.bI);}
function EH(a){var b,c,d,e,f,g,h,i,j;b=BQ(TR(a));c=b.data;d=a.D.data.length;e=0;f=0;while(e<d){g=a.D.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].u;PW(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gy(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cu=a.cu+1|0;f=a.fn;g=R(G3,1);h=new G3;h.eN=b;h.fl=c;i=L6(e,B(196),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BI(b,c+I(i[0])|0);break a;}k=BI((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=BI(b,c);}i=g.data;h.k2=k;h.jP=d;h.g4=e;i[0]=h;BZ(f,g);JN(a,b,c,d,e);}
function JN(a,b,c,d,e){var f;f=Gb(a,b)+c|0;if(!d)PR(a.da,f,I(e));else Uk(a.da,f,I(e));}
function TK(a,b){var c,d,e;c=L6(b.g4,B(196),(-1));if(b.jP){Yq(a,b.eN,b.fl,c);PR(a.da,Gb(a,b.eN)+b.fl|0,I(b.g4));}else{c=c.data;d=ANW();B3(d.bV,b.eN,b.fl);e=c.length;if(e==1)B3(d.bJ,b.eN,b.fl+I(c[0])|0);else B3(d.bJ,(b.eN+e|0)-1|0,I(c[e-1|0]));U_(a,d);Uk(a.da,Gb(a,b.eN)+b.fl|0,I(b.g4));}return b.k2;}
function Pz(a){a.fF=a.cu;}
var E0=F();
function Ms(){E0.call(this);this.wN=null;}
function MP(){E0.call(this);this.wV=null;}
function Qm(){E0.call(this);this.xV=null;}
var GX=F(0);
var RO=F(0);
function Gm(){var a=this;C.call(a);a.M=0;a.bb=0;}
function B3(a,b,c){a.M=b;a.bb=c;}
function XH(a,b){a.M=b.M;a.bb=b.bb;}
function Yb(a,b){var c;c=BF(a.M,b.M);if(c)return c;return BF(a.bb,b.bb);}
function Jo(){var a=this;C.call(a);a.lq=null;a.l9=null;}
function I9(a){return a.lq.by;}
function LS(a){return a.lq.bI;}
var Ww=F(0);
function Tf(){C.call(this);this.ho=null;}
function FL(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ho));}
function D_(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.ho));}
function AH2(a){var b,c;b=a.ho.byteLength;c=new M;O(c);G(T(G(c,B(246)),b),B(247));return N(c);}
var UY=F(0);
function La(){var a=this;C.call(a);a.gI=null;a.e5=null;a.l3=null;}
function ACy(a,b){var c=new La();AKO(c,a,b);return c;}
function AS5(a,b,c){var d=new La();Oa(d,a,b,c);return d;}
function YU(b){var c,d,e,f,g,h,i,j,k;c=new La;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=U6(E(D7),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=KN(f[h]);h=h+1|0;}}j=g.data;h=j.length;if(!h)i=R(Bv,0);else{i=R(Bv,h-1|0);g=i.data;h=0;k=g.length;while(h<k){g[h]=FF(JW(j[h]));h=h+1|0;}}}else i=R(Bv,0);Oa(c,d,b,i);return c;}
function AKO(a,b,c){Oa(a,b,c,R(Bv,0));}
function Oa(a,b,c,d){a.gI=b;a.e5=c;a.l3=d;}
function JG(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EB(a);e=new M;O(e);G(G(e,B(248)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EB(a){var b;b=a.gI;return FF(b!==null?b.name:a.e5.name);}
function ALf(a){var b,c,d,e,f;if(a.e5===null){b=a.l3;c=EB(a);d=AAb(b);e=new M;O(e);G(G(G(e,d),B(249)),c);c=N(e);}else{b=a.l3;c=EB(a);f=JG(a,a.e5.size);d=AAb(b);e=new M;O(e);T(G(G(G(G(e,d),B(249)),c),B(250)),f);c=N(e);}return c;}
function N2(){C.call(this);this.n2=null;}
function DE(a,b){Gu(a.n2,b);return 1;}
function ABG(){var a=this;ED.call(a);a.dv=0;a.b_=null;a.c5=0;a.vA=0.0;a.kP=0;}
function GB(){var a=new ABG();AIy(a);return a;}
function AIy(a){var b;b=AEt(16);a.dv=0;a.b_=R(Ie,b);a.vA=0.75;Vf(a);}
function AEt(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vf(a){a.kP=a.b_.data.length*a.vA|0;}
function N0(a,b){return Tq(a,b)===null?0:1;}
function DP(a,b){var c;c=Tq(a,b);if(c===null)return null;return c.dC;}
function Tq(a,b){var c,d;if(b===null)c=SA(a);else{d=b.js();c=Qk(a,b,d&(a.b_.data.length-1|0),d);}return c;}
function Qk(a,b,c,d){var e;e=a.b_.data[c];while(e!==null&&!(e.i4==d&&Zi(b,e.dy))){e=e.cP;}return e;}
function SA(a){var b;b=a.b_.data[0];while(b!==null&&b.dy!==null){b=b.cP;}return b;}
function Lf(a,b,c){var d,e,f;if(b===null){d=SA(a);if(d===null){a.c5=a.c5+1|0;d=U3(a,null,0,0);e=a.dv+1|0;a.dv=e;if(e>a.kP)Vs(a);}}else{e=b.js();f=e&(a.b_.data.length-1|0);d=Qk(a,b,f,e);if(d===null){a.c5=a.c5+1|0;d=U3(a,b,f,e);e=a.dv+1|0;a.dv=e;if(e>a.kP)Vs(a);}}b=d.dC;d.dC=c;return b;}
function U3(a,b,c,d){var e,f,g;e=new Ie;f=null;e.dy=b;e.dC=f;e.i4=d;g=a.b_.data;e.cP=g[c];g[c]=e;return e;}
function Vs(a){var b,c,d,e,f,g,h,i;b=a.b_.data.length;b=AEt(!b?1:b<<1);c=R(Ie,b);d=c.data;e=0;f=b-1|0;while(true){g=a.b_.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.i4&f;i=h.cP;h.cP=d[b];d[b]=h;h=i;}e=e+1|0;}a.b_=c;Vf(a);}
function Zi(b,c){return b!==c&&!b.cx(c)?0:1;}
function CA(){var a=this;C.call(a);a.o=null;a.S=0;a.fr=null;a.eh=null;a.ds=null;a.g3=null;a.fM=0;a.h3=0;a.hD=0;}
var AXu=0;var AXv=0;var AXi=0;function DQ(a){var b=new CA();Ia(b,a);return b;}
function Ia(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].u)|0;f=f+1|0;}a.S=d;Ej(a);}
function NH(a,b){return a.o.data[b];}
function GZ(a,b){var c;c=It(a,b);return c<=0?0:a.ds.data[c-1|0];}
function It(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.ds!==null&&!a.hD)){WR(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].u)|0;a.ds.data[d]=e;d=d+1|0;}a.hD=0;}d=Um(a.ds,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Vh(a,b){var c;c=a.o.data;if(!c.length)return null;return c[It(a,b)];}
function FW(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.S){a.o=R(B8,0);Ej(a);a.S=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].u);i=I(a.o.data[f].u);j=BF(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.u)?1:0){g=a.o;a.o=Ru(g,e,R(B8,g.data.length-1|0));a.S=a.S-d|0;Ej(a);return;}a.o.data[e]=DF(Ff(Cb(k.u,0,b),Dj(k.u,c)),k.cR,k.cc);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.u))a.o.data[e]=DF(Cb(l.u,0,b),l.cR,l.cc);e=e+1|0;}if(c==I(m.u))f=f+1|0;else if(c)a.o.data[f]=DF(Dj(m.u,c),m.cR,m.cc);g=a.o;a.o=AA9(g,e,f,R(B8,(g.data.length-f|0)+e|0));}a.S=a.S-d|0;Ej(a);}
function IL(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(CA,[DQ(R(B8,0)),a]);if(b>=a.S)return H(CA,[a,DQ(R(B8,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].u);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(CA,[DQ(K4(c,0,R(B8,d))),DQ(K4(c,d,R(B8,f-d|0)))]);h=e[d];e=K4(c,0,R(B8,d+1|0));i=e.data;j=K4(c,d,R(B8,f-d|0));c=j.data;i[d]=DF(Cb(h.u,0,b),h.cR,h.cc);c[0]=DF(Dj(h.u,b),h.cR,h.cc);return H(CA,[DQ(e),DQ(j)]);}
function XC(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].u);if(b<=g)break;b=b-g|0;d=e;}}JC(a,d,b,c);}
function JC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=R(B8,1);h.data[0]=Sn(d);a.o=h;}else if(!b&&!c){i=R(B8,g+1|0);h=i.data;Dx(e,0,i,1,g);h[0]=Sn(d);a.o=i;}else{j=f[b];if(c<=0)k=DF(Ff(d,j.u),j.cR,j.cc);else if(c>=I(j.u))k=DF(Ff(j.u,d),j.cR,j.cc);else{l=I(d);m=l+c|0;n=I(j.u)-c|0;h=BQ(I(j.u)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.u,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.u,g+c|0);g=g+1|0;}k=DF(FY(h),j.cR,j.cc);}f[b]=k;}a.S=a.S+I(d)|0;Ej(a);}
function XD(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Mr(f)){if(L(f.u,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lk(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.fr;if(!(e!==null&&e.data.length>=d)){a.fr=AFo(d);a.eh=BG(d);a.fM=1;}WR(a);if(!a.fM)AXv=AXv+1|0;else{f=0;g=0.0;AXu=AXu+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.u)|0;a.ds.data[h]=f;Cz(b,i[j.cc]);g=g+Es(b,j.u);a.fr.data[h]=g;a.eh.data[h]=g+0.5|0;h=h+1|0;}a.S=f;a.fM=0;a.hD=0;}}
function WR(a){var b;b=a.ds;if(!(b!==null&&b.data.length>=a.o.data.length)){a.ds=BG(a.o.data.length);a.hD=1;}}
function Ej(a){a.fM=1;a.h3=1;a.hD=1;a.g3=null;}
function W$(a,b,c,d){var e,f,g,h,i,j,k;if(a.g3===null)a.g3=R($rt_arraycls($rt_intcls()),a.o.data.length);e=a.g3.data[d];if(e===null){e=c.data;f=a.o.data[d];Cz(b,e[f.cc]);f=f.u;e=BG(I(f)-1|0);c=Gv(f);g=!d?0.0:a.fr.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;My(f,c,0,k);h[i]=g+Es(b,f)+0.5|0;i=k;}a.g3.data[d]=e;}return e;}
function G1(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fM&&a.eh!==null))Lk(a,c,d);if(b>=a.S)return a.eh.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].u)|0;i=BF(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eh.data[f];}return (W$(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function E4(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.eh.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GU(a,b){var c;if(b>=a.S)return b+1|0;c=It(a,b);return a.ds.data[c];}
function EM(a){var b,c,d,e;b=new M;F0(b,a.S);c=a.o.data;d=c.length;e=0;while(e<d){B0(b,c[e].u);e=e+1|0;}return N(b);}
function M5(b){var c,d,e,f;c=R(CA,1);d=c.data;e=new CA;f=R(B8,1);f.data[0]=Sn(b);Ia(e,f);d[0]=e;return c;}
function Y0(){AXi=0;}
var NS=F();
function AR9(a){}
function B8(){var a=this;C.call(a);a.u=null;a.cR=0;a.cc=0;}
function Sn(a){var b=new B8();AQR(b,a);return b;}
function DF(a,b,c){var d=new B8();VI(d,a,b,c);return d;}
function AQR(a,b){VI(a,b,0,0);}
function VI(a,b,c,d){a.u=b;a.cR=c;a.cc=d;}
function Hj(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Mr(a){return I(a.u);}
function IW(){var a=this;C.call(a);a.cT=null;a.d8=0;}
var AXw=null;var AXx=null;function AUp(a){var b=new IW();UC(b,a);return b;}
function ATp(a,b){var c=new IW();Yv(c,a,b);return c;}
function VP(b,c){var d;d=BF(b.bS,c.bS);if(!d)d=BF(c.bX,b.bX);return d;}
function UC(a,b){Yv(a,null,b);}
function Yv(a,b,c){var d,e;a.d8=0;if(Eg(c))return;Om(c,AXw);if(b!==null)a.cT=MR(b);c=BV(c);while(B6(c)){d=BY(c);e=a.cT;if(e!==null){RA(a,e,MR(d));continue;}a.cT=MR(d);}}
function Pq(a,b){var c;if(b.e1)return b;b=BV(b.bD);while(true){if(!B6(b))return null;c=Pq(a,BY(b));if(c!==null)break;}return c;}
function KH(a,b,c){var d,e,f;d=b.b9;if(d.bS==c.bS&&d.bX==c.bX?1:0){e=BV(b.bD);while(B6(e)){f=KH(a,BY(e),c);if(f!==null)return f;}return b;}b=BV(b.bD);while(true){if(!B6(b))return null;d=BY(b);if(Qs(d,c.bS,c.bX)){e=KH(a,d,c);if(e!==null)break;}}return e;}
function WS(a,b,c){BZ(c,b.b9);b=BV(b.bD);while(B6(b)){WS(a,BY(b),c);}}
function PR(a,b,c){a.d8=0;Jl(a,a.cT,b,c);}
function Jl(a,b,c,d){var e;if(C9(b)<c)return;a:{if(CY(b)>c){KF(b,d);F1(b,d);b=BV(b.bD);while(B6(b)){Jl(a,BY(b),c,d);}}else{if(!Km(b,c)){if(a.d8)break a;if(C9(b)!=c)break a;}F1(b,d);if(CY(b)==c&&a.d8)KF(b,d);e=BV(b.bD);while(B6(e)){Jl(a,BY(e),c,d);}if(!a.d8){b.e1=1;a.d8=1;}}}}
function Uk(a,b,c){a.d8=0;Mw(a,a.cT,b,c);}
function Mw(a,b,c,d){var e,f,g,h;if(C9(b)<c)return;e=CY(b);f=c+d|0;if(e>f){e= -d|0;KF(b,e);F1(b,e);g=BV(b.bD);while(B6(g)){Mw(a,BY(g),c,d);}b.bD=NU(a,b.bD);}else{g=b.b9;if(c<=g.bS&&g.bX<=f?1:0){if(b!==a.cT){Jt(b,(-1));Ki(b,(-1));}else{Jt(b,0);Ki(b,0);}Hs(b.bD);}else{e=Km(b,c);f=Km(b,f);if(e&&f)F1(b, -d|0);else if(e)Ki(b,c);else{if(!f)return;Jt(b,c);F1(b, -d|0);}h=BV(b.bD);while(B6(h)){Mw(a,BY(h),c,d);}b.bD=NU(a,b.bD);if(!a.d8){b.e1=1;a.d8=1;}}}}
function NU(a,b){var c,d,e,f,g,h;c=Cr();d=null;Om(b,AXx);b=BV(b);while(B6(b)){e=BY(b);if(CY(e)==C9(e))continue;if(!e.e1){if(d!==null){BZ(c,d);d=null;}BZ(c,e);}else if(d===null)d=e;else{f=Bb(CY(d),CY(e));g=Be(C9(d),C9(e));h=MR(Of(f,g,d.b9.fj));h.dN=e.dN;h.e1=1;d=h;}}if(d!==null)BZ(c,d);return c;}
function RA(a,b,c){var d,e;a:{if(OW(b,c)){d=BV(b.bD);while(true){if(!B6(d)){BZ(b.bD,c);c.dN=b;break a;}e=BY(d);if(OW(e,c))break;}RA(a,e,c);return;}}}
function SB(a,b,c,d){var e,f,g,h,i,j;if((C9(c)-CY(c)|0)<43)e=Cb(d,CY(c),C9(c));else{e=Cb(d,CY(c),CY(c)+20|0);f=Cb(d,C9(c)-20|0,C9(c));g=new M;O(g);G(G(G(g,e),B(169)),f);e=N(g);}e=VA(e,B(196),B(251));f=Bx();g=Cy(c);h=new M;O(h);i=T(h,b);BE(i,32);g=G(i,g);BE(g,9);G(g,e);Br(f,N(h));c=BV(c.bD);j=b+1|0;while(B6(c)){SB(a,j,BY(c),d);}}
function ACV(){AXw=new XR;AXx=new XT;}
function AEw(){var a=this;C.call(a);a.bS=0;a.bX=0;a.fj=0;}
function Of(a,b,c){var d=new AEw();AIE(d,a,b,c);return d;}
function AIE(a,b,c,d){a.bS=b;a.bX=c;a.fj=d;}
function AQc(a,b){var c;if(a===b)return 1;if(b!==null&&Cs(a)===Cs(b)){c=b;return a.bS==c.bS&&a.bX==c.bX&&a.fj==c.fj?1:0;}return 0;}
function AG7(a,b){var c;b=b;c=BF(a.bS,b.bS);if(!c)c=BF(b.bX,a.bX);return c;}
var XR=F();
function AJW(a,b,c){return VP(b,c);}
var XT=F();
function ALC(a,b,c){b=b;c=c;return VP(b.b9,c.b9);}
var E1=F();
var AXy=null;var AXz=null;var AXA=null;var AXB=null;var AXC=null;var AXD=null;function ACm(){AXy=new VY;AXz=new VW;AXA=new VX;AXB=new VU;AXC=new VV;AXD=new Yz;}
var G7=F(F9);
function AMy(a,b){var c;c=new Fl;W(c);J(c);}
function X8(){G7.call(this);this.tO=null;}
function AI3(a){return 1;}
function ARV(a,b){var c;if(!b)return a.tO;c=new By;W(c);J(c);}
function YZ(){var a=this;C.call(a);a.b9=null;a.dN=null;a.bD=null;a.e1=0;}
function MR(a){var b=new YZ();AOt(b,a);return b;}
function AOt(a,b){a.e1=0;a.b9=b;a.dN=null;a.bD=Cr();}
function CY(a){return a.b9.bS;}
function C9(a){return a.b9.bX;}
function Jt(a,b){a.b9.bS=b;}
function Ki(a,b){a.b9.bX=b;}
function KF(a,b){var c;c=a.b9;c.bS=c.bS+b|0;}
function F1(a,b){var c;c=a.b9;c.bX=c.bX+b|0;}
function Km(a,b){return CY(a)<=b&&b<C9(a)?1:0;}
function Qs(a,b,c){var d;d=a.b9;return d.bS<=b&&c<=d.bX?1:0;}
function OW(a,b){b=b.b9;return Qs(a,b.bS,b.bX);}
function AJ4(a){var b,c,d,e,f;b=a.b9;c=b.bS;d=b.bX;e=b.fj;b=new M;O(b);BE(b,40);BE(T(G(T(G(T(b,c),B(44)),d),B(44)),e),41);b=N(b);c=a.e1;f=new M;O(f);F8(G(G(f,b),B(44)),c);return N(f);}
var O6=F(0);
var Gg=F(EQ);
var Kj=F(Gg);
var VY=F(Kj);
var Lz=F(ED);
var VW=F(Lz);
var VX=F(G7);
var FG=F(0);
var VU=F();
var Pv=F(0);
var VV=F();
var Yz=F();
function HT(){var a=this;C.call(a);a.b8=null;a.U=null;a.vb=null;a.iG=null;a.dQ=null;a.pQ=null;a.qT=null;a.tt=null;}
function AXE(a,b,c,d,e){var f=new HT();LW(f,a,b,c,d,e);return f;}
function Kp(){var b,c,d,e,f,g,h,i;b=new HT;c=new I0;d=new Ha;E2();JR(d,AXF);Ls(c,d,BJ(AXa),BJ(AXG),BJ(AXH),BJ(AXa),BJ(AXI),BJ(AXJ),BJ(AXK),BJ(AXL),BJ(AXM),BJ(AXN));ACk();e=(AXO.eM()).data;f=e.length;g=R(IK,f);h=g.data;i=0;while(i<f){h[i]=e[i].lt;i=i+1|0;}LW(b,c,g,AA_(Q(B(252)),Q(B(253)),Q(B(254)),Q(B(255))),F2(),ADG(Q(B(119)),Q(B(120)),Q(B(121)),Q(B(256))));return b;}
function LW(a,b,c,d,e,f){var g;g=c.data;a.pQ=ET(B(156),16.0);a.qT=ET(B(156),17.0);a.tt=ET(B(155),15.0);a.b8=b;a.vb=c;a.iG=d;if(g.length>=15){a.U=e;a.dQ=f;return;}b=new BH;W(b);J(b);}
function I0(){var a=this;C.call(a);a.tI=null;a.ek=null;a.vx=null;a.yw=null;a.oG=null;a.kZ=null;a.qz=null;a.oJ=null;a.lV=null;a.me=null;a.i6=null;}
function AXP(a,b,c,d,e,f,g,h,i,j,k){var l=new I0();Ls(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Ls(a,b,c,d,e,f,g,h,i,j,k,l){a.tI=b;a.ek=c;a.vx=d;a.yw=e;a.oG=f;a.kZ=g;a.qz=h;a.oJ=i;a.lV=j;a.me=k;a.i6=l;}
function NJ(){var a=this;C.call(a);a.hB=0;a.mf=0;a.iy=0;a.f8=0;a.gL=null;}
function B6(a){return a.hB>=a.iy?0:1;}
function BY(a){var b,c;Pj(a);b=a.hB;a.f8=b;c=a.gL;a.hB=b+1|0;return c.rZ(b);}
function Q9(a){var b,c,d;if(a.f8<0){b=new D1;W(b);J(b);}Pj(a);a.gL.uT(a.f8);a.mf=a.gL.cv;c=a.f8;d=a.hB;if(c<d)a.hB=d-1|0;a.iy=a.iy-1|0;a.f8=(-1);}
function Pj(a){var b;if(a.mf>=a.gL.cv)return;b=new IN;W(b);J(b);}
function KX(){var a=this;K1.call(a);a.ph=null;a.nZ=null;}
function Zs(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.ph;e=0;f=0;g=a.nZ;a:{while(true){if((e+32|0)>f&&DO(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bb(B7(b)+j|0,i.length);NG(b,d,j,f-j|0);e=0;}if(!DO(c)){k=!DO(b)&&e>=f?AWs:AWr;break a;}i=g.data;j=Bb(B7(c),i.length);l=new NQ;l.mU=b;l.qe=c;k=ABY(a,d,e,f,g,0,j,l);e=l.tL;j=l.u3;if(k===null){if(!DO(b)&&e>=f)k=AWs;else if(!DO(c)&&e>=f)k=AWr;}Xm(c,g,0,j);if(k!==null)break;}}EG(b,b.V-(f-e|0)|0);return k;}
var Px=F(KX);
function ABY(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LQ(h,2))break a;i=AWr;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Me(l)){if((f+3|0)>g){j=j+(-1)|0;if(LQ(h,3))break a;i=AWr;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CD(l)){i=D3(1);break a;}if
(j>=d){if(DO(h.mU))break a;i=AWs;break a;}c=j+1|0;m=k[j];if(!C4(m)){j=c+(-2)|0;i=D3(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LQ(h,4))break a;i=AWr;break a;}k=e.data;o=Ew(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tL=j;h.u3=f;return i;}
var Iu=F(D5);
var XX=F();
function AHN(a,b){return b.text();}
function XV(){var a=this;C.call(a);a.tj=null;a.tk=null;}
function AFB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.tj;d=a.tk;e=R(Bv,8);f=BQ(16);g=0;h=0;i=b.length;j=0;while(true){k=BF(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=Hw(f,0,g);m=h+1|0;e=ADx(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=NN(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.m(ATu(Z7(e,h),AJV(d)));}
var XW=F();
function AJN(a,b){AEs(b);}
var Hh=F(0);
function KI(){var a=this;C.call(a);a.dy=null;a.dC=null;}
function AH8(a,b){var c,d;if(a===b)return 1;if(!IJ(b,Hh))return 0;a:{b:{c:{d:{c=b;b=a.dy;if(b!==null){if(!b.cx(c.dy))break c;else break d;}if(c.dy!==null)break c;}b=a.dC;if(b!==null){if(!b.cx(c.dC))break c;else break b;}if(c.dC===null)break b;}d=0;break a;}d=1;}return d;}
function Ie(){var a=this;KI.call(a);a.i4=0;a.cP=null;}
function KC(){var a=this;CR.call(a);a.cK=null;a.f6=null;}
function AU5(a){var b=new KC();YK(b,a);return b;}
function YK(a,b){var c,d,e,f;Fk(a,b);c=AN_(a.s);a.f6=c;d=AEh(a.s,c);a.cK=d;Xg(a.s,d);V(b.l.bp,a.f6);V(b.l.di,a.f6);V(b.l.bp,a.cK);c=b.l.bT;d=new Sq;d.oU=a;V(c,d);c=b.l.bT;d=new HH;e=a.cK;BN(e);f=new Su;f.uL=e;Sx(d,b,f);V(c,d);c=b.l.fu;d=a.cK;BN(d);e=new St;e.mB=d;V(c,e);c=b.l.fZ;d=new Ss;d.pV=a;V(c,d);c=b.l.di;d=new Sr;d.vC=a;V(c,d);b=b.l.er;c=new Sv;c.ns=a;V(b,c);LO(a);}
function AHC(a,b){return K6(a.cK,b);}
function AKy(a){E8(a);Ml(a.cK);WC(a.f6);}
function AOu(a){return Mm(0);}
function AM1(a,b,c){GW(a,b,c);a.k7(b,c);}
function AAB(a,b,c){LL(a.cK,new Bi,b,c);}
function AGt(a,b){BN(b);PV(a.f6,b);Ll(a.cK,b);}
function AEK(a,b){if(b.bj!=121)return 0;return 1;}
function Zy(a,b){var c,d,e;if(DZ(a.s,a.cK)){c=a.f6;d=a.cK;e=new Th;e.q6=a;KG(c,b,d,a,d,e);}return 1;}
function Zg(){var a=this;Cl.call(a);a.ma=null;a.lo=null;a.df=null;a.gt=null;a.fh=null;a.hf=null;a.vS=null;a.g6=null;a.rD=null;a.mc=null;a.v$=null;a.xd=null;a.f0=null;a.jU=null;a.qR=0;}
function ATg(a){var b=new Zg();AL3(b,a);return b;}
function AL3(a,b){var c,d,e,f,g,h,i;D2(a,b);c=(Kp()).b8.ek;a.ma=c;a.lo=ARv(c);a.df=Fh(0,0,300,300);a.gt=H_(0,0,3,3);a.fh=Fh(0,0,300,300);a.hf=ANp();d=R(Bv,4);e=d.data;e[0]=B(207);e[1]=B(190);e[2]=B(229);e[3]=B(228);a.vS=d;a.g6=R(IF,e.length);c=b.bd;f=b.l.bp;g=new Uc;g.ff=a;V(f,g);f=b.l.bT;g=new R6;g.vE=a;V(f,g);f=b.l.mw;g=new R5;g.oS=a;V(f,g);f=b.l.fu;g=new R8;g.xD=a;V(f,g);f=b.l.jC;g=new R7;g.v2=a;V(f,g);f=b.l.er;g=new R4;g.w_=a;V(f,g);b=b.l.di;f=new R3;f.tN=a;V(b,f);h=CL(a.bc.bd,300,300);f=h.br;b="white";f.fillStyle
=b;b=h.br;f="white";b.strokeStyle=f;b=h.br;f=10.0;b.lineWidth=f;h.br.strokeRect(75.0,140.0,150.0,110.0);h.br.fillRect(130.0,190.0,40.0,60.0);h.br.beginPath();h.br.moveTo(50.0,140.0);h.br.lineTo(150.0,60.0);h.br.lineTo(250.0,140.0);h.br.closePath();h.br.stroke();F5(h,B(257),11.0);Lw(h,187,187,187);Pw(a,B(258),h);b=CV(a.bc.bd);CN(b,h);FR(h);a.rD=b;Gl(a.df,b);G4(a.df);BB(a.df.bq,a.ma);BB(a.df.bs,CM(204,120,50));b=CL(c,255,100);a.f0=b;F5(b,B(156),11.0);b=Bx();i=$rt_str(a.f0.br.font);g=new M;O(g);G(G(g,B(259)),i);Br(b,
N(g));Es(a.f0,B(260));Lw(a.f0,169,183,198);Pw(a,B(260),a.f0);b=CV(c);a.mc=b;CN(b,a.f0);Gl(a.fh,a.mc);G4(a.fh);Ge(a.fh,CH(255));Hz(a.fh,a.ma);a.v$=CV(c);BB(a.gt.bq,a.lo);}
function Pw(a,b,c){Ci(c,b,0.0,20.0);Ci(c,b,0.25,40.0);Ci(c,b,0.5,60.0);Ci(c,b,0.75,80.0);}
function Xb(a,b){JB(Fz(),0.5+Fz()*0.5,0.5+Fz()*0.5,1.0,b.bs);}
function AFM(a,b){var c;a.qR=a.qR+1|0;c=b/5.0;JB(c-(c|0),1.0,1.0,1.0,a.gt.bs);return Tj(a.hf,b);}
function AIV(a){var b,c,d,e,f,g;b=a.bc.bd;ER(b,a.lo);c=a.g6.data;d=c.length;e=0;while(e<d){US(c[e],b,0,0);e=e+1|0;}DG(a.df,b,a.rD,0,0,0.5);f=a.mc;d=0;while(d<7){g=a.fh;DG(g,b,f,X(d,10+((10*g.t.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.xd;if(g!==null)Uv(a.gt,b,g,0,0,0.0);Vv(a.hf,b,new Bi);N3(b,B(261));}
function APz(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bx();e=Cy(b);f=new M;O(f);G(G(f,B(262)),e);Br(d,N(f));g=Bx();d=new M;O(d);Fn(G(d,B(263)),c);Br(g,N(d));h=B9(30.0,c);i=B9(10.0,c);j=0;while(true){k=a.g6.data;if(j>=k.length)break;l=1+j|0;k[j]=H_(X(i,l)+X(h,j)|0,h,h,h);Xb(a,a.g6.data[j]);j=l;}Y(a.gt.z,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.df;g=d.z;h=b.b;d=d.t;Y(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.fh;d.z.a=b.a-d.t.a|0;}
function O_(a,b){var c,d,e,f,g;c=Bx();d=!b.hv?B(264):B(265);e=b.dK;f=b.bj;g=b.r8;b=new M;O(b);F8(G(T(G(G(G(b,d),e),B(266)),f),B(267)),g);Br(c,N(b));return 0;}
function Wz(){var a=this;CR.call(a);a.rO=null;a.dB=null;a.cJ=null;a.d_=null;a.lF=null;}
function AQ1(a,b,c){var d;d=GQ(a.s,a.lF);H2(a.dB,d);H2(a.cJ,d);GY(a.dB,a.s);GY(a.cJ,a.s);}
function NO(b){return I6(b,AQs());}
function I6(b,c){var d;d=P5();KB(d,KW(b,Ix(c,25)),!b?null:I6(b-1|0,c));KB(d,KW(b,Ix(c,20)),!b?null:I6(b-1|0,c));KB(d,KW(b,Ix(c,15)),!b?null:I6(b-1|0,c));KB(d,KW(b,Ix(c,10)),!b?null:I6(b-1|0,c));return Hp(d);}
function KW(b,c){var d;if(b){d=new M;O(d);G(G(T(d,b),B(36)),c);c=N(d);}return c;}
function KB(b,c,d){var e,f;e=new Gz;f=JB(Fz(),1.0,1.0,1.0,new B4);Yg();Hn(e,f,AXQ,AXR);if(d!==null)GK(b,c,e,d);else{d=new UG;d.tQ=c;D8(b,c,e,d);}}
function AIo(a,b,c){var d,e;GW(a,b,c);b=a.s.ca;d=Ee(a.dB);e=Ee(a.cJ);J5(a.dB,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);J5(a.cJ,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AI_(a){var b,c,d,e,f,g,h,i;E8(a);b=a.bc.bd;CK(b,1);c=a.rO;d=a.s;e=d.ca;Y(c.l1,e.b,B9(2.0,d.bR));Y(c.ki,B9(2.0,d.bR),e.a);E2();f=AXM;g=d.cL;h=e.a/2|0;i=c.l1;Bu(g,0,h-(i.a/2|0)|0,i,f);g=d.cL;h=e.b/2|0;c=c.ki;Bu(g,h-(c.b/2|0)|0,0,c,f);JI(a.dB,a.s);JI(a.cJ,a.s);Ir(a.d_);CK(b,0);}
function AOQ(a,b){var c,d,e;c=Kz(a.d_,b);d=Kn(a.dB,b.h,a.s.cC);e=Kn(a.cJ,b.h,a.s.cC);return !c&&!d&&!e?0:1;}
function AJh(a,b,c){return Jm(a.d_,b,c);}
function AGV(a,b,c){return DK(a.d_);}
function AN8(a,b,c,d){var e,f,g;e=Jr(a.d_,b,c,d);f=Kf(a.dB,b.h,c,d);g=Kf(a.cJ,b.h,c,d);return !e&&!f&&!g?0:1;}
function XQ(){var a=this;CR.call(a);a.hi=null;a.eq=null;a.h7=null;a.kH=null;}
function AJk(a,b,c){if(b===0.0)Ya(a);}
function AOr(a){var b;E8(a);b=a.bc.bd;Ja(a.eq,b);Ir(a.hi);}
function Ya(a){var b,c,d,e,f,g,h;b=a.h7;if(b!==null){Kc(a.eq,b);J3(b);}b=(Kp()).U;c=AUU(a.s,new Wg);d=ET(B(155),14.0);e=AOb();f=0;while(f<300){g=C5(f);h=new YF;h.sz=B(268);h.sy=g;h.sx=B(269);Nj(e,B(268),g,B(269),h);f=f+1|0;}Wk(c,Ra(e));Yd(c,b,d);g=ACb(a.s);h=ZT(c,a.s);QS(h,b.l0,b.km);LU(g,h);g.ei=b;II(g,B(270),a.kH,2.0);a.h7=g;IZ(a.eq,g);UU(a);}
function AHw(a,b,c){GW(a,b,c);P$(a.eq,b,c);UU(a);}
function UU(a){var b,c,d;b=a.s.ca;Fq(a.h7,BI((b.b*2|0)/10|0,(b.a*4|0)/10|0),BI((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.h7;b=YH(c.Q.q);d=new M;O(d);G(G(d,B(271)),b);II(c,N(d),a.kH,2.0);}
function APF(a,b){return Ow(a.eq,b);}
function YB(){var a=this;CR.call(a);a.h4=null;a.fE=null;a.e7=null;a.ju=null;a.o5=null;a.im=null;a.fO=null;a.fA=null;a.jo=0;a.f1=0;}
function W6(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fE.i>0){d=Fz();e=a.fE;f=d*(e.i-1|0)|0;e=Ep(e,f);Ep(a.e7,f);f=a.f1;g=e.t;a.f1=f-X(g.b,g.a)|0;Ij(a.h4,e.c7);}c=c+1|0;}}
function Kx(a,b){var c,d,e,f,g,h,i,j;c=IO(a.s);Cz(c,a.ju);d=0;while(d<b){e=Ix(a.im,1+(Fz()*19.0|0)|0);f=AMg();g=f.c7;h=a.h4;BN(c);i=new RL;i.pk=c;BB(g,Hi(h,e,i));(Xj(Fz(),1.0,1.0,f.bq)).bG=0.5;h=f.z;g=f.c7;Y(h,g.bl|0,g.bF|0);h=f.t;g=f.c7;Y(h,g.bk|0,g.bG|0);BZ(a.e7,e);BZ(a.fE,f);j=a.f1;h=f.t;a.f1=j+X(h.b,h.a)|0;d=d+1|0;}a.fA=Mh(a.h4);}
function AO2(a){var b,c,d,e,f,g,h,i;E8(a);b=a.bc.bd;CK(b,1);c=a.s.cL;if(a.e7.i){d=a.fA;d=CL(c,d.b,d.a);Cz(d,a.ju);e=a.ju.dx;Bu(c,0,0,a.fA,a.o5);f=0;while(f<a.e7.i){g=Bt(a.fE,f);h=Bt(a.e7,f);g=g.c7;Ci(d,h,g.bl,g.bF+e);f=f+1|0;}g=a.fO;if(!(g!==null&&Cf(g)==a.fA.b&&C8(a.fO)==a.fA.a))a.fO=CG(a.fO,CV(c));CN(a.fO,d);FR(d);i=0;while(i<a.e7.i){d=Bt(a.fE,i);Ge(d,CH(0));DG(d,c,a.fO,0,0,0.0);i=i+1|0;}}CK(b,0);}
function AH0(a,b){var c,d;if(a.jo){c=a.fA;d=Bb(X(c.b,c.a),2211840);if(a.f1/d<=0.7)Kx(a,Il(a.im,5));else W6(a,Il(a.im,5));}return a.jo;}
function Pn(){var a=this;Cl.call(a);a.d6=null;a.fV=null;a.gS=null;a.kV=null;a.d5=0;a.sl=0;a.uU=null;a.l2=0;a.u$=0;a.to=null;a.oW=null;}
function AF4(a){var b,c;b=a.d5;c=new M;O(c);T(G(c,B(272)),b);$rt_globals.console.info($rt_ustr(N(c)));ER(a.d6,a.uU);Iy(a.gS,a.d5,0,Gc(a),5000,a.kV.b,20);CK(a.d6,1);Qd(a.gS,a.d6);CK(a.d6,0);b=a.d5;c=new M;O(c);T(G(c,B(272)),b);$rt_globals.console.info($rt_ustr(N(c)));X_(a.fV,a.d5/a.l2|0);Ys(a.fV,a.d5,Gc(a),a.oW,a.d6);}
function AQJ(a,b,c){var d,e;a.kV=b;VO(a.fV,BI(0,0),50,Gc(a),c);b=a.fV;d=a.d6;e=Gc(a);LN(b,d,0,e,e/b.iw|0);}
function P4(a){return 5000-Gc(a)|0;}
function Gc(a){return Bb(a.sl,a.kV.a);}
function Db(){var a=this;Cl.call(a);a.lO=null;a.gC=null;a.v5=0.0;}
function AXS(a){var b=new Db();Go(b,a);return b;}
function Go(a,b){D2(a,b);a.lO=AAc(0,0,64);a.gC=new Bi;NI(b.bU,H5(Cs(a)));}
function SC(a){ER(a.bc.bd,a.lO);}
function S9(a,b,c){Cv(a.gC,b);a.v5=c;}
var Rj=F(Db);
var AEE=F(Db);
function AUH(a){var b=new AEE();ANF(b,a);return b;}
function ANF(a,b){var c,d,e,f,g,h;Go(a,b);c=b.bU;d=new RK;d.wC=a;e=R(C,1);e.data[0]=B(273);CP(c,d,B(274),e);f=b.bU;g=new RJ;g.ys=a;h=R(C,1);h.data[0]=ABn([1,2,3,4,5]);CP(f,g,B(275),h);f=b.bU;g=new RI;g.oP=a;h=R(C,1);h.data[0]=ATY([1,2,3,4,5]);CP(f,g,B(276),h);f=b.bU;g=new RH;g.wl=a;h=R(C,1);h.data[0]=E9([1,2,3,4,5]);CP(f,g,B(277),h);f=b.l.bT;d=new HH;g=new RF;g.xs=a;c=new RE;c.qB=a;VQ(d,b,g,c);V(f,d);}
function UV(a,b){var c,d,e,f,g,h;c=b.data;d=Bx();e=Cy(c[0]);f=new M;O(f);G(G(f,B(278)),e);Br(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((Sj(b,1)).ho));d=Bx();e=Cy(c[1]);if(b===null)f=B(29);else{f=new M;O(f);B0(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)B0(f,B(44));T(f,c[g]);g=g+1|0;}B0(f,B(45));f=N(f);}h=new M;O(h);G(G(G(G(h,B(279)),e),B(280)),f);Br(d,N(h));}
function Xe(){var a=this;Db.call(a);a.dP=null;a.eU=null;a.kw=null;a.p1=null;a.lE=null;}
function ALx(a,b){b=b/5.0;JB(b-(b|0),1.0,1.0,1.0,a.eU.bs);return 0;}
function AFF(a){SC(a);DG(a.dP,a.bc.bd,a.p1,0,0,0.5);Uv(a.eU,a.bc.bd,a.kw,0,0,0.0);N3(a.bc.bd,B(261));}
function AOo(a,b,c){var d,e,f;S9(a,b,c);Y(a.eU.z,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dP;e=d.z;f=b.b;d=d.t;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function SF(){var a=this;Db.call(a);a.gh=null;a.r0=null;a.j8=null;a.iq=null;a.hA=null;}
function ASe(a){var b,c,d,e,f,g;SC(a);b=a.bc.bd;c=a.iq;LF(b,c.b,c.a,a.hA);b=a.gh;c=a.r0;d=a.gC;e=a.bc.bd;f=0;while(true){g=0;while(true){DG(b,e,c,g,f,0.5);g=g+Cf(c)|0;if(g>=d.b)break;}f=f+C8(c)|0;if(f>=d.a)break;}IE(a.bc.bd);}
function AHn(a,b,c){S9(a,b,c);Y(a.hA,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function O0(){var a=this;Cl.call(a);a.ed=null;a.j1=null;a.fe=null;a.b7=null;a.eD=0;a.hK=null;a.eE=0;a.xa=20;a.yK=11;a.wR=220;a.jd=null;a.xy=5000;a.gF=0;a.fq=null;}
function ASh(a){var b,c,d,e,f,g,h;b=a.hK;c=a.eE;d=a.jd;Iy(b,c,0,d.a,5000,d.b,20);CK(a.ed,1);Qd(a.hK,a.ed);if(a.b7===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ci(a.j1,C5(e),0.0,c);}b=CV(a.ed);a.b7=b;CN(b,a.j1);}if(a.eE<=a.eD)while(true){f=a.eD;if(f<=a.eE)break;a.eD=f-20|0;b=a.fe;g=a.gF-1|0;a.gF=g;Ci(b,C5(g),0.0,20.0);HZ(a.b7,a.fe,0,a.eD%220|0);Ex(a.fe);}else while(a.eD<(a.eE-20|0)){b=a.fe;g=a.gF+1|0;a.gF=g;Ci(b,C5((g+11|0)-1|0),0.0,20.0);HZ(a.b7,a.fe,0,a.eD%220|0);Ex(a.fe);a.eD=a.eD+20|0;}b=Fh(0,0,Cf(a.b7),C8(a.b7));HD(b,
0,0,Cf(a.b7),C8(a.b7));Ge(b,a.fq.data[0]);Hz(b,a.fq.data[1]);DG(b,a.ed,a.b7,400,0,1.0);g=a.eE%220|0;f=Bb(C8(a.b7)-g|0,200);d=Fh(0,0,Cf(a.b7),f);HD(d,0,g,Cf(a.b7),f);Ge(d,a.fq.data[0]);Hz(d,a.fq.data[1]);DG(d,a.ed,a.b7,0,0,1.0);h=Fh(0,f,Cf(a.b7),(C8(a.b7)-f|0)-20|0);HD(h,0,0,Cf(a.b7),(C8(a.b7)-f|0)-20|0);Ge(h,a.fq.data[1]);Hz(h,a.fq.data[0]);DG(h,a.ed,a.b7,0,0,1.0);}
function AJF(a,b,c){Cv(a.jd,b);}
function AH7(a,b){return 0;}
function Sc(a){return 5000-a.jd.a|0;}
function Iz(){Db.call(this);this.dD=0;}
function RB(a){var b,c;b=a.bc.bU;c=new Qu;c.mZ=a;Q_(b,c,RZ(a));}
function MJ(a){var b,c,d,e;b=a.dD+1|0;a.dD=b;c=H5(E(Iz));d=new M;O(d);G(G(T(G(d,B(281)),b),B(36)),c);e=N(d);c=a.bc.bU;d=new Uz;d.qg=e;UL(c,e,d,RZ(a));}
function RZ(a){var b;b=new V$;b.o1=a;return b;}
function APt(a,b,c,d){a:{switch(c){case 0:break;case 2:MJ(a);break a;default:break a;}RB(a);}return 1;}
function Ql(){var a=this;Cl.call(a);a.nI=null;a.e9=null;a.lG=null;a.h5=null;}
function AR$(a){var b;b=a.bc.bd;ER(b,a.nI);DG(a.e9,b,a.lG,0,0,0.5);}
function AMx(a,b,c){var d,e,f;d=a.e9;e=d.z;f=b.b;d=d.t;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function XG(){var a=this;Cl.call(a);a.pC=null;a.ga=null;a.gy=null;a.gz=null;a.jE=null;a.jF=null;}
function AOV(a){var b,c,d;b=a.bc.bd;ER(b,a.pC);c=a.ga;d=c.z;Qa(b,d.b,d.a,c.t,a.gy,a.gz,a.jE,a.jF,c.bs,c.bq);}
function AHK(a,b,c){var d,e,f;d=a.ga;e=d.z;f=b.b;d=d.t;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);Y(a.gy,0,0);Y(a.gz,Bb(b.b,b.a),Bb(b.b,b.a));b=a.jE;d=a.gy;Y(b,d.b,d.a+20|0);b=a.jF;d=a.gz;Y(b,d.b,d.a+40|0);}
function AH4(a,b){var c,d,e;Cv(a.gy,b.h);b=a.gz;c=a.ga;d=c.z;e=d.b;c=c.t;Y(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.jE;c=a.gy;Y(b,c.b,c.a+20|0);b=a.jF;c=a.gz;Y(b,c.b,c.a+40|0);return 0;}
function O8(){var a=this;Cl.call(a);a.vq=null;a.cY=null;a.mi=null;a.mj=null;a.ml=null;a.mk=null;a.fd=null;a.e8=null;}
function AGW(a){var b,c,d,e;b=a.bc.bd;ER(b,a.vq);c=a.cY;d=c.z;Qa(b,d.b,d.a,c.t,a.mi,a.mj,a.ml,a.mk,c.bs,c.bq);e=a.cY.z.b-10|0;W4(a,b,10,e,a.mi,a.ml);c=a.cY;W4(a,b,c.z.b+c.t.b|0,e,a.mj,a.mk);}
function W4(a,b,c,d,e,f){var g;Y(a.fd,c,a.cY.z.a);Y(a.e8,d,e.a-a.cY.z.a|0);g=a.fd;Bu(b,g.b,g.a,a.e8,a.cY.bq);Y(a.fd,c,e.a);Y(a.e8,d,f.a-e.a|0);e=a.fd;Bu(b,e.b,e.a,a.e8,a.cY.bs);Y(a.fd,c,f.a);e=a.e8;g=a.cY;Y(e,d,(g.z.a+g.t.a|0)-f.a|0);e=a.fd;Bu(b,e.b,e.a,a.e8,a.cY.bq);}
function ALE(a,b,c){}
function WQ(){var a=this;CR.call(a);a.gM=null;a.d7=null;a.jl=null;a.jm=null;a.tn=null;}
function AKG(a,b,c){if(b===0.0)NW(a);}
function ASx(a){var b;E8(a);b=a.bc.bd;Ja(a.d7,b);Ir(a.gM);}
function NW(a){W5(a,a.jl);W5(a,a.jm);a.jl=Nd(a,0.5,0,B(282));a.jm=Nd(a,1.0,1,B(283));IZ(a.d7,a.jl);IZ(a.d7,a.jm);Xs(a);}
function W5(a,b){if(b!==null){Kc(a.d7,b);J3(b);}}
function Nd(a,b,c,d){var e,f,g;e=ACb(a.s);f=new Wn;g=new PH;g.tr=a;g.ts=e;g.tp=d;Ua(f);f.hX=new B4;f.ls=new Bi;f.sw=g;f.qd=b;if(c)f=ZT(f,a.s);LU(e,f);e.ei=F2();return e;}
function AOI(a,b,c){GW(a,b,c);P$(a.d7,b,c);Xs(a);}
function Xs(a){var b;b=a.s.ca;Fq(a.jm,BI((b.b*2|0)/10|0,(b.a*2|0)/10|0),BI((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fq(a.jl,BI(b.b/10|0,b.a/10|0),BI((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function ALt(a,b){return Ow(a.d7,b);}
var RG=F(KC);
function AKM(a){return Mm(1);}
function AMB(a,b,c){AAB(a,b,c);}
var ACL=F(0);
function ZO(){var a=this;C.call(a);a.ip=null;a.lp=null;a.o2=null;a.uO=null;}
function AA_(a,b,c,d){var e=new ZO();AOd(e,a,b,c,d);return e;}
function AOd(a,b,c,d,e){a.ip=b;a.lp=c;a.o2=d;a.uO=e;}
function H4(){var a=this;C.call(a);a.je=null;a.ib=null;a.nO=null;a.p8=null;a.bi=null;a.l0=null;a.km=null;}
function AXT(a,b,c,d,e,f,g){var h=new H4();K9(h,a,b,c,d,e,f,g);return h;}
function K9(a,b,c,d,e,f,g,h){a.nO=b;a.p8=c;a.ib=d;a.bi=e;a.je=f;a.l0=g;a.km=h;}
function F2(){var b,c,d;b=new H4;c=new HA;Yg();d=AXU;J1(c,d,AXV,AXW,AXX,AXY,d);K9(b,c,AB4(),ZD(Q(B(284)),Q(B(117)),Q(B(118))),AB4(),ZW(1,0.125),AXZ,AX0);return b;}
function ADD(){var a=this;C.call(a);a.nh=null;a.td=null;a.rJ=null;a.qF=null;}
function ADG(a,b,c,d){var e=new ADD();AKK(e,a,b,c,d);return e;}
function AKK(a,b,c,d,e){a.nh=b;a.td=c;a.rJ=d;a.qF=e;}
function Vt(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dQ.td;break a;case 3:if(c!=3){b=b.dQ.qF;break a;}b=b.dQ.rJ;break a;default:b=b.b8.ek;break a;}b=b.dQ.nh;}return b;}
function JY(a,b,c){return Vt(a,b,0,c);}
function Mv(){var a=this;C.call(a);a.i1=null;a.il=null;}
function MG(a,b){var c;c=a.il;a.il=b;return c;}
function Jv(){var a=this;Mv.call(a);a.bQ=null;a.b3=null;a.fp=0;a.fy=0;}
function JP(a){var b;b=K2(a);if(b==2){if(K2(a.b3)<0)a.b3=Nm(a.b3);return OX(a);}if(b!=(-2))return a;if(K2(a.bQ)>0)a.bQ=OX(a.bQ);return Nm(a);}
function K2(a){var b,c;b=a.b3;c=b===null?0:b.fp;b=a.bQ;return c-(b===null?0:b.fp)|0;}
function Nm(a){var b;b=a.bQ;a.bQ=b.b3;b.b3=a;Em(a);Em(b);return b;}
function OX(a){var b;b=a.b3;a.b3=b.bQ;b.bQ=a;Em(a);Em(b);return b;}
function Em(a){var b,c,d;b=a.b3;c=b===null?0:b.fp;b=a.bQ;d=b===null?0:b.fp;a.fp=Be(c,d)+1|0;a.fy=1;b=a.bQ;if(b!==null)a.fy=1+b.fy|0;b=a.b3;if(b!==null)a.fy=a.fy+b.fy|0;}
var AEk=F();
function AGK(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Pi;c=c.buffer;d.fo=c;d.mp=new $rt_globals.Int8Array(c);d.j2=new $rt_globals.Uint16Array(c);d.sV=new $rt_globals.Int32Array(c);d.pE=new $rt_globals.Float32Array(c);d.pX=new $rt_globals.Float64Array(c);e=d.fo.byteLength;c=new M;O(c);T(G(c,B(285)),e);CF(N(c));e=b.callToCpp1();c=new M;O(c);T(G(c,B(286)),e);CF(N(c));f=b.callToCpp2();c=new M;O(c);Fn(G(c,B(287)),f);CF(N(c));c=M$(d,b.getC8String());g=new M;O(g);G(G(g,B(288)),c);CF(N(g));c
=Ng(d,b.getC16String());g=new M;O(g);G(G(g,B(289)),c);CF(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.fo,h,8));c=AC3(i);g=new M;O(g);G(G(g,B(290)),c);CF(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.fo,h,8));c=APP(j);g=new M;O(g);G(G(g,B(291)),c);CF(N(g));k=AA5(d,b.getCDoubleArray8(),8);l=ASz(k);c=new M;O(c);G(G(c,B(292)),l);CF(DU(c));l=ASn(b.getC8String(),B(293),d);c=LX();G(G(c,B(294)),l);CF(DU(c));l=AMo(b.getC16String(),B(295),
d);c=LX();G(G(c,B(296)),l);CF(DU(c));c=AOj(i,d,b.getCIntArray8(),E9([11,22,33,44,55,66,77,88]));g=LX();G(G(g,B(297)),c);CF(DU(g));c=AP5(j,d,b.getCFloatArray8(),100,E9([111,222,333,444,555,666,777,888]));g=LX();G(G(g,B(298)),c);CF(DU(g));b=AQk(k,d,b.getCDoubleArray8(),1000,E9([1111,2222,3333,4444,5555,6666,7777,8888]));c=LX();G(G(c,B(299)),b);CF(DU(c));}
function AP5(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(300);h=0;i=e;a:{while(h<g){if(Df(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.pE[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(301);}return B(302);}
function AQk(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(300);h=0;i=e;a:{while(h<g){if(Hg(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.pX[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(301);}return B(302);}
function AOj(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(300);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.sV[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(301);}return B(302);}
function ASn(b,c,d){var e,f,g,h;e=M$(d,b);if(!Bn(c,e))return B(303);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.mp[h])return B(304);f=f+1|0;}return B(301);}
function AMo(b,c,d){var e,f,g,h;e=Ng(d,b);if(!Bn(c,e))return B(303);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.j2[h>>>1|0]&65535))return B(304);f=f+1|0;}return B(301);}
function CF(b){Pf(B(2),b);}
function ALg(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Sq(){C.call(this);this.oU=null;}
function AMM(a,b){return AEK(a.oU,b);}
function Su(){C.call(this);this.uL=null;}
function ARO(a,b){KO(a.uL,b);}
function St(){C.call(this);this.mB=null;}
function AMN(a,b,c){return GF(a.mB,b,c);}
function Ss(){C.call(this);this.pV=null;}
function ARx(a){var b,c;b=a.pV.cK;BN(b);c=new QU;c.nJ=b;return c;}
function Sr(){C.call(this);this.vC=null;}
function AQV(a,b,c,d){return JK(a.vC.cK,c,d);}
function Sv(){C.call(this);this.ns=null;}
function AJR(a,b){b=b;return Zy(a.ns,b);}
function ADN(){IF.call(this);this.c7=null;}
function AMg(){var a=new ADN();AGF(a);return a;}
function Fh(a,b,c,d){var e=new ADN();AMf(e,a,b,c,d);return e;}
function AGF(a){Sz(a);a.c7=new B4;}
function AMf(a,b,c,d,e){Sz(a);a.c7=new B4;P_(a,b,c,d,e);}
function G4(a){var b,c;b=a.t;c=a.c7;Y(b,c.bk-c.bl|0,c.bG-c.bF|0);}
function Gl(a,b){HD(a,0,0,Cf(b),C8(b));}
function HD(a,b,c,d,e){CE(a.c7,b,c,d,e);}
function DG(a,b,c,d,e,f){var g;g=a.z;EJ(b,g.b+d|0,g.a+e|0,a.t,a.c7,c,a.bs,a.bq,f);}
function Ge(a,b){BB(a.bs,b);}
function Hz(a,b){BB(a.bq,b);}
function Uc(){C.call(this);this.ff=null;}
function AOB(a,b){var c,d,e,f,g,h,i;c=a.ff;d=c.jU;if(d!==null){e=c.df.z;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.jU=g;}d=b.h;f=d.b;c=c.gt;e=c.t;h=f-e.b|0;f=d.a-e.a|0;Y(c.z,h,f);c=a.ff;d=c.bc.bU;b=b.h;f=0;a:{while(true){i=c.g6.data;if(f>=i.length)break;if(Eu(i[f],b)){b=c.vS.data[f];break a;}f=f+1|0;}b=null;}Gu(d,b);return 1;}
function AQa(a,b,c,d){if(!c&&d==2){b=a.ff;Xb(b,b.df);}return 1;}
function AIS(a,b,c){var d,e;d=Bx();e=new M;O(e);T(G(e,B(305)),c);Br(d,N(e));if(!c){d=b.h;b=a.ff;b.jU=!Eu(b.df,d)?null:d;P3(a.ff.hf,d.b,d.a);b=a.ff;SN(b.hf,Jw(b.bc.bU));}return AXl;}
function AIt(a,b,c){var d;b=Bx();d=new M;O(d);T(G(d,B(306)),c);Br(b,N(d));return 1;}
function R6(){C.call(this);this.vE=null;}
function AOv(a,b){return O_(a.vE,b);}
function R5(){C.call(this);this.oS=null;}
function AQ9(a,b){return O_(a.oS,b);}
function R8(){C.call(this);this.xD=null;}
function ARF(a,b,c){var d,e;Br(Bx(),B(307));d=!c?B(308):B(28);e=new M;O(e);G(G(G(e,B(309)),d),B(310));WF(b,N(e));return 1;}
function R7(){C.call(this);this.v2=null;}
function ARD(a){Br(Bx(),B(311));}
function R4(){C.call(this);this.w_=null;}
function AMS(a,b){Br(Bx(),B(312));return 1;}
function R3(){C.call(this);this.tN=null;}
function AKt(a,b,c,d){var e,f,g;b=a.tN;e=( -d|0)/10|0;b=b.df;f=b.t;f.b=f.b+e|0;f.a=f.a+e|0;b=b.z;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function Ha(){var a=this;B4.call(a);a.gd=0;a.gg=0;a.ge=0;a.gf=0;}
function CH(a){var b=new Ha();ASc(b,a);return b;}
function CM(a,b,c){var d=new Ha();AIl(d,a,b,c);return d;}
function Q(a){var b=new Ha();AP8(b,a);return b;}
function Fx(a,b,c,d){var e=new Ha();QR(e,a,b,c,d);return e;}
function BJ(a){var b=new Ha();JR(b,a);return b;}
function ASc(a,b){QR(a,b,b,b,255);}
function AIl(a,b,c,d){QR(a,b,c,d,255);}
function AP8(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.gd=I2(L(b,1))*17|0;a.gg=I2(L(b,2))*17|0;a.ge=I2(L(b,3))*17|0;a.gf=255;}else{a.gd=LE(L(b,1),L(b,2));a.gg=LE(L(b,3),L(b,4));a.ge=LE(L(b,5),L(b,6));a.gf=I(b)!=9?255:LE(L(b,7),L(b,8));}HB(a.gd,a.gg,a.ge,a.gf,a);return;}}
function QR(a,b,c,d,e){a.gd=b;a.gg=c;a.ge=d;a.gf=e;HB(b,c,d,e,a);}
function JR(a,b){a.gd=b.gd;a.gg=b.gg;a.ge=b.ge;a.gf=b.gf;BB(a,b);}
function I2(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LE(b,c){return (16*I2(b)|0)+I2(c)|0;}
function Vm(){var a=this;C.call(a);a.l1=null;a.ki=null;}
function Z_(){var a=this;C.call(a);a.fi=null;a.ch=null;a.em=null;a.gi=null;a.lz=null;a.ce=null;a.fG=null;a.cS=0;a.eQ=0;a.lR=0;a.g0=0;a.fI=0;a.jv=null;a.jT=null;a.tv=null;}
function Zv(){var a=new Z_();ARG(a);return a;}
function ARG(a){a.ch=ALN();a.em=new Bi;a.gi=new Bi;a.ce=AX1;a.g0=(-1);}
function K0(a,b){T7(a);a.ce=b;}
function H2(a,b){a.fi=b;T7(a);}
function H$(a,b){var c,d,e,f,g;a.lz=b.je;c=b.bi.hC;BB(a.ch.bs,c);c=b.ib.kg;BB(a.ch.bq,c);d=0;while(true){e=a.ce.data;if(d>=e.length)break;c=e[d];f=b.bi;c.jz=f;c=c.dq;g=f.lr;f=f.hC;BB(c.bs,g);BB(c.bq,f);d=d+1|0;}}
function TT(a){a.fG=CG(a.fG,null);Y(a.em,0,0);a.ce=AX1;a.g0=(-1);Tn(a.ch);}
function GY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=IO(b);d=b.bR;BN(a.fi);Cz(c,a.fi);e=J_(a.fi,1.25);f=0;a.cS=B9(2.0,d);a.eQ=B9(3.0,d);a.lR=B9(12.0,d);g=0;h=a.ce.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Q$(c,l.ky);n=a.lR;n=(n+m|0)+n|0;f=Be(f,n);b=l.dq;l=b.z;l.b=g;l.a=0;l=b.t;l.b=n;l.a=e;CE(b.c7,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.em;b.b=g;b.a=e;b=a.ch.t;n=a.fI;if(!n){m=a.cS;m=(g+m|0)+X(m,a.ce.data.length)|0;}else m=(f+(a.cS*2|0)|0)+(a.eQ*2|0)|0;b.b=m;if(!n)e=e+(a.cS*2|0)|0;else{n=a.cS;e=(X(e+n|0,a.ce.data.length)
+n|0)+(a.eQ*2|0)|0;}b.a=e;}
function J5(a,b,c){var d,e,f,g,h,i,j;Y(a.ch.z,b,c);d=a.cS+a.eQ|0;e=a.ce.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dq;j=i.z;j.b=b+d|0;j.a=c+h|0;if(!a.fI){if(!i.t.b)AEV();d=d+(i.t.b+a.cS|0)|0;}else{if(!i.t.a)AEV();h=h+(i.t.a+a.cS|0)|0;}g=g+1|0;}}
function AEV(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ee(a){var b,c;b=a.em;if(b.b&&b.a)return a.ch.t;c=new Bq;Bo(c,B(313));J(c);}
function T7(a){Y(a.em,0,0);}
function JI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cL;if(!a.ce.data.length)return;a:{if(a.fG!==null){d=a.em;if(X(d.b,d.a))break a;}d=a.em;if(!X(d.b,d.a))GY(a,b);d=a.em;e=d.b;f=d.a;if(!X(e,f))return;d=CL(c,e,f);Cz(d,a.fi);g=J_(a.fi,0.125);h=a.fi;i=h.dx;j=g+i-(i+h.eo)/16.0;k=a.ce.data;f=k.length;l=0;while(l<f){h=k[l];Ci(d,h.ky,h.dq.c7.bl+a.lR,j);l=l+1|0;}h=CG(a.fG,CV(c));a.fG=h;CN(h,d);FR(d);}if(!Ma(a.ch)){d=a.ch;ADV(c,d.t,d.z,d.bq,a.cS,a.gi);d=a.ch;h=d.t;m=d.z;d=d.bs;e=a.cS;n=a.gi;n.b=(h.b-e|0)-e|0;n.a=(h.a-
e|0)-e|0;Bu(c,m.b+e|0,m.a+e|0,n,d);if(a.fI){d=a.ch;ADa(c,d.t,d.z,0,0,Rz(a.lz,b.bR),a.lz.mo,a.gi);}}k=a.ce.data;l=k.length;o=0;while(o<l){DG(k[o].dq,c,a.fG,0,0,0.0);o=o+1|0;}b:{if(a.fI){k=a.ce.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dq;m=a.gi;e=(a.ch.t.b-(a.cS*2|0)|0)-(a.eQ*2|0)|0;b=h.t;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.z;Bu(c,d.b+b.b|0,d.a,m,h.bq);}o=o+1|0;}}}}
function Kn(a,b,c){var d,e,f,g,h,i;d=Eu(a.ch,b);e=!d?(-1):Vp(a,b);f=a.g0;if(f!=e){if(f>=0){g=a.ce.data[f];NV(g,0);if(a.tv!==null){f=a.g0;h=Bx();g=Cy(g);i=new M;O(i);G(G(T(G(i,B(314)),f),B(315)),g);Br(h,N(i));}}if(e>=0){h=a.ce.data[e];g=a.jT;if(g!==null)g.n4(b,e,h);NV(h,1);}a.g0=e;}return d&&Hf(c)?1:0;}
function Kf(a,b,c,d){var e,f;e=Vp(a,b);if(e>=0){f=a.ce.data[e];if(!MH(f))f.mv.p();}return 1;}
function Vp(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.ce.data;if(c>=d.length)return (-1);e=d[c].dq;if(Eu(e,b))return c;if(a.fI){f=e.z;g=f.b;e=e.t;h=e.b;g=g+h|0;i=f.a;f=a.gi;f.b=(a.ch.t.b-(a.cS*2|0)|0)-h|0;f.a=e.a;if(ZH(b,g,i,f))break;}c=c+1|0;}return c;}
function S$(a){a.fI=1;}
function TC(){C.call(this);this.tV=null;}
function AO1(a,b){var c;c=a.tV;if(b.bj==32)TT(c.cJ);return 0;}
function TF(){C.call(this);this.su=null;}
function AFr(a,b){var c,d,e,f;b=b;c=a.su;Br(Bx(),B(316));if(!DK(c.d_)){d=c.d_;b=b.h;e=NO(4);f=new VJ;f.yN=c;Gf(d,b,e,f);}return 1;}
function AEB(){var a=this;C.call(a);a.iC=null;a.hS=0.0;}
function ET(a,b){var c=new AEB();AFh(c,a,b);return c;}
function AFh(a,b,c){a.iC=b;a.hS=c;}
function ASI(a,b){if(a===b)return 1;if(b!==null&&Cs(a)===Cs(b)){b=b;return a.hS===b.hS&&C6(a.iC,b.iC)?1:0;}return 0;}
var TE=F();
function AKb(a){Br(Bx(),B(317));}
var TB=F();
function AQn(a){Br(Bx(),B(318));}
function C$(){var a=this;C.call(a);a.dq=null;a.mv=null;a.jz=null;a.ic=null;a.jS=null;a.ky=null;}
function ACp(a,b,c){var d=new C$();K$(d,a,b,c);return d;}
function AUI(a,b,c,d,e){var f=new C$();ABZ(f,a,b,c,d,e);return f;}
function K$(a,b,c,d){ABZ(a,b,c,d,null,null);}
function ABZ(a,b,c,d,e,f){var g;g=AMg();a.dq=g;a.ky=c;a.jz=d;a.jS=f;a.mv=b;BB(g.bs,d.lr);BB(a.dq.bq,d.hC);a.ic=e;}
function MH(a){return a.ic===null?0:1;}
function NV(a,b){BB(a.dq.bq,!b?a.jz.hC:a.jz.pY);}
function OP(){C.call(this);this.v4=null;}
function AHl(a,b){return b.hv&&b.bj==32?1:0;}
function OQ(){C.call(this);this.qJ=null;}
function AQF(a,b){var c,d,e,f,g,h;b=b;c=a.qJ;if(!DK(c.hi)){d=c.hi;b=b.h;e=R(C$,1);f=e.data;g=new C$;h=new VK;h.pM=c;K$(g,h,B(319),d.hg.bi);f[0]=g;Gf(d,b,FV(e),AXm);}return 1;}
var ACE=F();
function AAO(b){var c,d;c=CL(b,250,64);F5(c,B(257),25.0);Lw(c,187,187,187);Ci(c,B(320),0.0,24.0);Ci(c,B(320),0.25,56.0);d=CV(b);CN(d,c);FR(c);return d;}
function Zu(b){var c;c=new Wl;c.gH=b;return c;}
function OR(){C.call(this);this.t_=null;}
function ANE(a,b,c,d){return Lg(a.t_,b,c,d);}
function AEm(){var a=this;C.call(a);a.lN=0;a.lP=0;}
function AQs(){var a=new AEm();ARh(a);return a;}
function ARh(a){var b,c;b=AD$(EF((AC7())));c=EF((AC7()))^(-559038737);a.lN=b;a.lP=c;c=0;while(c<19){R9(a);c=c+1|0;}}
function R9(a){var b,c;b=a.lN;c=a.lP;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.lN=c;a.lP=b;return b;}
function AD$(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function Il(a,b){return 5.960464477539063E-8*(R9(a)&16777215)*b|0;}
function Uq(){C.call(this);this.mS=null;}
function ANi(a,b,c){var d;d=a.mS;if(b===0.0)Kx(d,100);}
function Ur(){C.call(this);this.qD=null;}
function AFw(a,b){var c,d,e;c=a.qD;d=b.bj;if(d==32){c.jo=c.jo?0:1;e=1;}else if(d==13){Kx(c,1);e=1;}else if(d!=8)e=0;else{W6(c,1);e=1;}return e;}
var Nz=F(0);
function AE1(b,c){var d;d=new VH;d.vF=b;d.vG=c;return d;}
function ADK(){var a=this;C.call(a);a.fH=null;a.f3=0;a.iM=0;a.f2=0;}
function AEz(a){var b=new ADK();AJm(b,a);return b;}
function AJm(a,b){a.fH=Cr();a.f2=0;a.iM=2048;a.f3=b;}
function Hi(a,b,c){var d,e,f,g,h,i,j;d=c.rg(b);e=a.iM;if(d>e){c=new Bq;f=new M;O(f);BE(T(G(T(G(f,B(321)),d),B(322)),e),41);Bo(c,N(f));J(c);}if(!a.f3){b=new BH;Bo(b,B(323));J(b);}a:{b=new B4;if(d){b:{c=a.fH;if(c.i>0){c=BV(c);g=d;while(true){if(!B6(c))break b;f=BY(c);if(f.bk>=g)break;}CE(b,f.bl,f.bF,g,a.f3);f.bl=f.bl+g;h=f.bk-g;f.bk=h;if(h===0.0)Wo(a.fH,f);break a;}}g=a.f2;i=d;CE(b,0.0,g,i,a.f3);c=a.fH;f=new B4;h=a.f2;g=a.iM-d|0;j=a.f3;f.bl=i;f.bF=h;f.bk=g;f.bG=j;BZ(c,f);a.f2=a.f2+a.f3|0;}}return b;}
function Ij(a,b){var c,d,e,f,g,h,i;a:{c=ARv(b);b=a.fH;if(b.i>0){d=BV(b);while(true){if(!B6(d))break a;e=BY(d);if(e.bF===c.bF){f=e.bl;g=e.bk;h=f+g;i=c.bl;if(h===i){c.bl=f;c.bk=c.bk+g;Q9(d);}else{h=c.bk;if(i+h===f){c.bk=h+g;Q9(d);}}}}}}BZ(a.fH,c);}
function Mh(a){return BI(a.iM,a.f2);}
function WP(){var a=this;C.call(a);a.rw=null;a.iQ=null;}
function AHf(a,b,c){if(c)return AXl;return Fi(a.iQ.gS,b.h,a.rw,1);}
function AOL(a,b,c){return 1;}
function AIM(a,b){var c;c=a.iQ;return Ft(c.gS,b.h,c.to);}
function Tc(){C.call(this);this.od=null;}
function AH6(a,b,c,d){var e,f;b=a.od;e=(MO(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.d5=Bb(Be(0,b.d5+X(e,f)|0),P4(b));return 1;}
function Qi(){C.call(this);this.uW=null;}
function APw(a,b){var c,d,e;c=a.uW;if(b.cj&&b.bj==79){if(!b.bH){b=c.bc.bU;d=new SH;d.u6=c;LZ(b,d);}else{b=c.bc.bU;d=new SG;d.xq=c;Wr(b,d);}e=1;}else e=0;return e;}
function RK(){C.call(this);this.wC=null;}
function AFZ(a,b){var c,d,e,f;c=b.data;b=Bx();d=Cy(c[0]);e=new M;O(e);G(G(e,B(278)),d);Br(b,N(e));b=Bx();f=c[1];d=new M;O(d);G(G(d,B(324)),f);Br(b,N(d));}
function RJ(){C.call(this);this.ys=null;}
function ASm(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bx();e=Cy(c[0]);f=new M;O(f);G(G(f,B(278)),e);Br(d,N(f));g=FL(Sj(b,1));b=Bx();d=Cy(c[1]);if(g===null)c=B(29);else{c=new M;O(c);B0(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)B0(c,B(44));BE(c,i[h]);h=h+1|0;}B0(c,B(45));c=N(c);}e=new M;O(e);G(G(G(G(e,B(325)),d),B(326)),c);Br(b,N(e));}
function RI(){C.call(this);this.oP=null;}
function AIq(a,b){UV(a.oP,b);}
function RH(){C.call(this);this.wl=null;}
function ANy(a,b){var c,d,e,f,g;c=b.data;d=Bx();e=Cy(c[0]);f=new M;O(f);G(G(f,B(278)),e);Br(d,N(f));g=D_(Sj(b,1));b=Bx();d=Cy(c[1]);c=AC3(g);e=new M;O(e);G(G(G(G(e,B(327)),d),B(328)),c);Br(b,N(e));}
function RF(){C.call(this);this.xs=null;}
function AMG(a,b){var c,d;c=EY();b=Cy(b);d=new M;O(d);G(G(d,B(329)),b);Br(c,N(d));b=new Fl;W(b);J(b);}
function RE(){C.call(this);this.qB=null;}
function AOJ(a,b){var c,d,e,f;c=a.qB;d=c.bc.bU;e=new Ok;e.rH=c;f=R(C,1);f.data[0]=b;CP(d,e,B(330),f);}
function Ub(){C.call(this);this.la=null;}
function AQH(a,b){var c,d,e,f,g,h;c=a.la;d=c.lE;if(d!==null){e=c.dP.z;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.lE=g;}b=b.h;f=b.b;c=c.eU;d=c.t;f=f-d.b|0;h=b.a-d.a|0;Y(c.z,f,h);return 1;}
function AML(a,b,c){var d;if(!c){d=b.h;b=a.la;if(!Eu(b.dP,d))d=null;b.lE=d;}return AXl;}
var C0=F(0);
var AXF=null;var AXb=null;var AXG=null;var AXa=null;var AXI=null;var AXH=null;var AXK=null;var AXJ=null;var AXM=null;var AXL=null;var AXN=null;function E2(){E2=Bm(C0);AJH();}
function AJH(){AXF=CH(187);AXb=Q(B(331));AXG=CH(55);AXa=CH(43);AXI=CM(33,66,131);AXH=CM(60,63,65);AXK=Q(B(332));AXJ=Q(B(333));AXM=Fx(85,85,85,128);AXL=Fx(43,43,43,0);AXN=Q(B(255));}
function UB(){var a=this;C.call(a);a.qf=null;a.jp=null;}
function ANN(a,b,c){var d;if(!c){d=Fi(a.jp.hK,b.h,a.qf,1);if(d!==null)return d;}return AXl;}
function AHh(a,b,c){return 1;}
function AF_(a,b){var c;c=a.jp;return Ft(c.hK,b.h,U1(c.bc.bU));}
function N8(){C.call(this);this.ud=null;}
function AF3(a,b,c,d){var e,f;b=a.ud;e=(MO(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eE=Bb(Be(0,b.eE+X(e,f)|0),Sc(b));return 1;}
function SS(){C.call(this);this.r9=null;}
function AQM(a,b){var c,d;a:{c=a.r9;switch(b.bj){case 67:MJ(c);d=1;break a;case 86:RB(c);d=1;break a;default:}d=0;}return d;}
var SR=F();
function AIN(a,b,c){return 0;}
function SP(){C.call(this);this.pO=null;}
function AQb(a,b,c){var d,e;d=a.pO;c=d.dD+1|0;d.dD=c;d=H5(E(Iz));e=new M;O(e);G(G(T(e,c),B(334)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));WF(b,e);return 1;}
var SO=F();
function AN7(a){return null;}
function SQ(){C.call(this);this.nz=null;}
function AG9(a){var b,c;b=a.nz;c=new P9;c.sf=b;return c;}
function Sl(){C.call(this);this.yd=null;}
function AIU(a,b){return 0;}
function Ut(){C.call(this);this.xW=null;}
function AQ5(a,b){return 0;}
function Rw(){C.call(this);this.yf=null;}
function AR1(a,b){return 0;}
function QJ(){C.call(this);this.ya=null;}
function AJs(a,b){return b.hv&&b.bj==32?1:0;}
function QK(){C.call(this);this.qM=null;}
function AFx(a,b){var c,d,e,f,g,h;b=b;c=a.qM;if(!DK(c.gM)){d=c.gM;b=b.h;e=R(C$,1);f=e.data;g=new C$;h=new RR;h.mY=c;K$(g,h,B(319),d.hg.bi);f[0]=g;Gf(d,b,FV(e),AXm);}return 1;}
function QL(){C.call(this);this.r_=null;}
function AO$(a,b,c,d){return Lg(a.r_,b,c,d);}
function ABv(){var a=this;C.call(a);a.hP=null;a.k9=null;a.fc=null;a.yJ=null;}
function AJV(a){var b=new ABv();AQL(b,a);return b;}
function AU2(a,b,c,d){var e=new ABv();AB2(e,a,b,c,d);return e;}
function AQL(a,b){AB2(a,null,null,b,null);}
function AB2(a,b,c,d,e){a.hP=b;a.k9=c;a.fc=d;a.yJ=e;}
function ARk(a,b){var c;if(a===b)return 1;if(b!==null&&Cs(a)===Cs(b)){c=b;return C6(a.hP,c.hP)&&C6(a.k9,c.k9)&&C6(a.fc,c.fc)?1:0;}return 0;}
var CX=F(0);
var AWC=null;var AX2=null;var AWE=null;var AWD=null;var AWG=null;var AWF=null;var AWI=null;var AWH=null;var AWK=null;var AWJ=null;var AWL=null;function ANo(){ANo=Bm(CX);AMr();}
function AMr(){AWC=CH(206);AX2=Q(B(335));AWE=Q(B(336));AWD=Q(B(113));AWG=Q(B(337));AWF=Q(B(338));AWI=Q(B(339));AWH=Q(B(340));AWK=Fx(107,106,107,128);AWJ=Fx(30,31,34,0);AWL=Q(B(115));}
function Cc(){Cm.call(this);this.kE=null;}
var AX3=null;var AX4=null;var AX5=null;var AX6=null;var AX7=null;var AX8=null;var AX9=null;var AX$=null;var AX_=null;var AYa=null;var AYb=null;var AYc=null;var AYd=null;var AYe=null;var AYf=null;var AWM=null;function ABS(){ABS=Bm(Cc);AGT();}
function Dz(a,b,c){var d=new Cc();XE(d,a,b,c);return d;}
function ATt(a,b,c,d){var e=new Cc();QP(e,a,b,c,d);return e;}
function XE(a,b,c,d){ABS();C_(a,b,c);a.kE=Io(d,null);}
function QP(a,b,c,d,e){ABS();C_(a,b,c);a.kE=Io(d,e);}
function AGT(){var b,c;b=new Cc;ANo();XE(b,B(341),0,AX2);AX3=b;AX4=Dz(B(342),1,Q(B(343)));AX5=Dz(B(344),2,Q(B(345)));AX6=Dz(B(48),3,Q(B(346)));AX7=Dz(B(347),4,AX2);AX8=Dz(B(348),5,Q(B(349)));AX9=Dz(B(350),6,Q(B(351)));AX$=Dz(B(49),7,Q(B(352)));AX_=Dz(B(353),8,Q(B(354)));c=new Cc;E2();QP(c,B(355),9,AXb,Q(B(339)));AYa=c;AYb=ATt(B(356),10,AXb,Q(B(116)));AYc=Dz(B(357),11,Q(B(358)));AYd=Dz(B(359),12,Q(B(360)));AYe=Dz(B(361),13,AX2);b=Dz(B(362),14,Q(B(363)));AYf=b;AWM=H(Cc,[AX3,AX4,AX5,AX6,AX7,AX8,AX9,AX$,AX_,AYa,
AYb,AYc,AYd,AYe,b]);}
function IK(){var a=this;C.call(a);a.nQ=null;a.nM=null;}
function Io(a,b){var c=new IK();ALV(c,a,b);return c;}
function ALV(a,b,c){a.nQ=b;a.nM=c;}
function HA(){var a=this;C.call(a);a.vO=null;a.pN=null;a.u8=null;a.r7=null;a.qs=null;a.i_=null;}
function AYg(a,b,c,d,e,f){var g=new HA();J1(g,a,b,c,d,e,f);return g;}
function J1(a,b,c,d,e,f,g){a.vO=b;a.pN=c;a.u8=d;a.r7=e;a.qs=f;a.i_=g;}
function ADk(){var a=this;C.call(a);a.kg=null;a.ro=null;a.qr=null;}
function ZD(a,b,c){var d=new ADk();AOO(d,a,b,c);return d;}
function AOO(a,b,c,d){a.kg=b;a.ro=c;a.qr=d;}
function Gz(){var a=this;C.call(a);a.lr=null;a.hC=null;a.pY=null;}
function AYh(a,b,c){var d=new Gz();Hn(d,a,b,c);return d;}
function Hn(a,b,c,d){a.lr=b;a.hC=c;a.pY=d;}
function AB4(){var b,c;b=new Gz;c=Q(B(364));Yg();Hn(b,c,AXQ,AXR);return b;}
function AA2(){var b,c;b=new Gz;c=Q(B(118));AKi();Hn(b,c,AYi,AYj);return b;}
function Zm(){var b,c;b=new Gz;AB$();c=AYk;APc();Hn(b,c,AYl,AYm);return b;}
function AE7(){var a=this;C.call(a);a.mo=null;a.rE=0;}
function ZW(a,b){var c=new AE7();AR5(c,a,b);return c;}
function AR5(a,b,c){var d;d=new B4;a.mo=d;a.rE=b;d.bG=c;}
function Rz(a,b){return B9(a.rE,b);}
var DT=F(0);
var AWQ=null;var AWR=null;var AWN=null;var AWO=null;var AWP=null;var AYi=null;var AYj=null;var AWS=null;var AWT=null;function AKi(){AKi=Bm(DT);ANz();}
function ANz(){AWQ=Q(B(338));AWR=Q(B(365));AWN=Q(B(118));AWO=Q(B(351));AWP=Q(B(335));AYi=Q(B(338));AYj=Q(B(366));AWS=Q(B(367));AWT=CM(43,45,48);}
var OY=F(0);
var Pg=F();
function AJy(a,b,c){var d,e;d=b;e=c;b=new M;O(b);T(G(T(G(b,B(368)),d),B(369)),e);CF(N(b));return d+e|0;}
var OZ=F(0);
var Pe=F();
function AKL(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fn(G(Fn(G(b,B(370)),d),B(369)),e);CF(N(b));return d+e;}
var Z3=F();
var Y6=F(0);
function Ju(){var a=this;C.call(a);a.d3=null;a.eT=null;a.ft=null;}
var AWf=0;function ACX(a){var b;b=a.eT;if(b!==null){AWf=AWf-1|0;a.d3.dr.deleteTexture(b);a.eT=null;}}
function Cf(a){return a.ft.b;}
function C8(a){return a.ft.a;}
function T4(a,b,c,d){var e;e=a.ft;e.b=b;e.a=c;L7(a);a.d3.dr.texStorage2D(3553,1,d,b,c);e=a.d3.dr;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function L7(a){var b,c;b=a.d3.dr;c=a.eT;b.bindTexture(3553,c);}
function CN(a,b){Np(a,b.lQ,b.kW,32856);PY(a,b,0,0);}
function Np(a,b,c,d){var e,f,g,h;a:{e=a.ft;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){L7(a);break a;}e=a.d3.dr;h=a.eT;e.deleteTexture(h);a.eT=a.d3.dr.createTexture();T4(a,b,c,d);break a;}}T4(a,b,c,d);}}
function HZ(a,b,c,d){L7(a);PY(a,b,c,d);}
function PY(a,b,c,d){var e;e=a.d3.dr;b=b.jL;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function T8(){C.call(this);this.kf=null;}
var AX1=null;function P5(){var a=new T8();ABj(a);return a;}
function ABj(a){a.kf=Cr();}
function D8(a,b,c,d){PK(a,ACp(d,b,c));}
function D9(b,c,d){return ACp(d,b,c);}
function GK(a,b,c,d){JF(a,b,c,d,null);}
function JF(a,b,c,d,e){PK(a,AUI(null,b,c,d,e));}
function PK(a,b){BZ(a.kf,b);}
function Hp(a){return FV(HI(a.kf,AX1));}
function YY(){AX1=R(C$,0);}
var DS=F(0);
var AXX=null;var AXY=null;var AXU=null;var AXV=null;var AXW=null;var AXQ=null;var AXR=null;var AXZ=null;var AX0=null;function Yg(){Yg=Bm(DS);AP9();}
function AP9(){AXX=Q(B(371));AXY=Q(B(372));AXU=Q(B(364));AXV=Q(B(373));AXW=Q(B(331));AXQ=Q(B(371));AXR=Q(B(372));AXZ=Fx(118,121,122,128);AX0=CM(63,66,68);}
var Gq=F(0);
var Xw=F();
function APo(a,b,c,d){var e;b=Bx();d=Cy(d);e=new M;O(e);G(G(T(G(e,B(374)),c),B(315)),d);Br(b,N(e));}
var Xx=F();
function Wl(){C.call(this);this.gH=null;}
function AFC(a,b){return Kz(a.gH,b);}
function APq(a,b,c,d){return Jr(a.gH,b,c,d);}
function ANm(a,b,c){return Jm(a.gH,b,c);}
function AKU(a,b,c){return DK(a.gH);}
function YA(){C.call(this);this.r5=null;}
function AOM(a,b){var c;c=a.r5.iQ;c.d5=FO(b,P4(c));}
var AB7=F();
function PP(){C.call(this);this.nu=null;}
function AK2(a,b){var c;c=a.nu.jp;c.eE=FO(b,Sc(c));}
function RT(){C.call(this);this.mI=null;}
function AFG(a,b){return DE(a.mI,null);}
var AAg=F();
function Cj(){Cm.call(this);this.lt=null;}
var AYn=null;var AYo=null;var AYp=null;var AYq=null;var AYr=null;var AYs=null;var AYt=null;var AYu=null;var AYv=null;var AYw=null;var AYx=null;var AYy=null;var AYz=null;var AYA=null;var AYB=null;var AXO=null;function ACk(){ACk=Bm(Cj);ARZ();}
function DL(a,b,c){var d=new Cj();Ye(d,a,b,c);return d;}
function AQW(a,b,c,d){var e=new Cj();AB1(e,a,b,c,d);return e;}
function Ye(a,b,c,d){ACk();C_(a,b,c);a.lt=Io(d,null);}
function AB1(a,b,c,d,e){ACk();C_(a,b,c);a.lt=Io(d,e);}
function ARZ(){var b;b=new Cj;E2();Ye(b,B(341),0,AXb);AYn=b;AYo=DL(B(342),1,Q(B(375)));AYp=DL(B(344),2,Q(B(376)));AYq=DL(B(48),3,Q(B(377)));AYr=DL(B(347),4,Q(B(375)));AYs=DL(B(348),5,CM(188,63,60));AYt=DL(B(350),6,Q(B(378)));AYu=DL(B(49),7,Q(B(379)));AYv=DL(B(353),8,Q(B(380)));AYw=AQW(B(355),9,AXb,CM(52,65,52));AYx=AQW(B(356),10,Q(B(381)),Q(B(382)));AYy=DL(B(357),11,Q(B(383)));AYz=DL(B(359),12,Q(B(384)));AYA=DL(B(361),13,AXb);b=DL(B(362),14,Q(B(363)));AYB=b;AXO=H(Cj,[AYn,AYo,AYp,AYq,AYr,AYs,AYt,AYu,AYv,AYw,
AYx,AYy,AYz,AYA,b]);}
var AEr=F();
function Ix(b,c){var d,e,f;if(c<=0)return B(31);d=BQ(c);e=d.data;e[0]=ADe(Il(b,52));f=1;while(f<c){e[f]=ADe(Il(b,62));f=f+1|0;}return FY(d);}
function ADe(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AA3=F();
function AET(){var a=this;C.call(a);a.EY=null;a.CB=null;a.DL=0;a.Df=0;}
var AEe=F(0);
function ADX(b){var c;a:{switch(b){case 0:break;case 1:c=B(168);break a;case 2:c=B(221);break a;case 3:c=B(220);break a;default:c=null;break a;}c=B(190);}return c;}
var CS=F();
var ACw=F(CS);
var ADd=F(CS);
var Z8=F(CS);
var AAq=F(CS);
var ADL=F(CS);
function UG(){C.call(this);this.tQ=null;}
function AMl(a){var b;b=a.tQ;Br(Bx(),b);}
var ZA=F();
function B9(b,c){return Df(b*c);}
function H3(){var a=this;C.call(a);a.fR=0;a.li=null;}
var AAN=F();
function Wh(){C.call(this);this.jy=null;}
function APQ(a,b){var c,d,e,f,g;c=a.jy;d=c.j8;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.iq;e.b=Ec(0,e.b+f|0,c.gC.b-c.hA.b|0);c=a.jy;d=c.iq;d.a=Ec(0,d.a+g|0,c.gC.a-c.hA.a|0);}a.jy.j8=b.h;return 1;}
var AAZ=F();
var IN=F(Bq);
function OT(){C.call(this);this.sm=null;}
function AGs(a,b){HF(a.sm,b);}
function Wq(){C.call(this);this.iV=null;}
function ASb(a){return a.iV;}
function AEZ(){var a=this;C.call(a);a.bv=null;a.T=null;a.Q=null;a.ei=null;}
function ACb(a){var b=new AEZ();AR_(b,a);return b;}
function AR_(a,b){var c;a.Q=ATc();a.bv=b;c=new TV;LB(c);c.lK=new B4;c.gW=b;a.T=c;}
function II(a,b,c,d){var e,f,g,h;e=a.T;f=C6(e.gD,c)?0:1;g=C6(e.g1,b)?0:1;h=d===e.i3?0:1;if(f){e.gD=c;e.d0=null;X$(e,0);}e.gK=!f&&!g&&!h?0:1;e.g1=b;e.i3=d;e.hH=0;J8(a);}
function J3(a){var b;b=a.T;b.dc=CG(b.dc,null);a.Q=CG(a.Q,null);}
function LU(a,b){var c,d,e;c=a.Q;d=c.G;e=c.q;b=CG(c,b);a.Q=b;b.i8(d,e,a.bv.bR);}
function Fq(a,b,c){var d;d=a.Q;d.i8(b,c,d.d1);J8(a);}
function J8(a){var b,c,d,e;b=a.T;c=a.Q.q.b;b.q.b=c;d=b.dc;if(d!==null&&c!=Cf(d)&&!(c>=b.hH&&Cf(b.dc)>=b.hH))b.gK=1;b=a.T;b.d1=a.bv.bR;if(Ui(b))c=0;else{b=a.T;Rk(b);e=CC(b.gW,b.i3);X$(b,E5(b.d0)+(e*2|0)|0);c=b.q.a;}b=a.T.G;d=a.Q.G;Y(b,d.b,d.a-c|0);}
function JM(b,c){if(b<0)c=B(385);else if(b>0)c=B(386);return c;}
function Op(a,b,c){var d;d=a.T.G.b;return (d-c|0)<=b&&b<d?1:0;}
function T$(a,b,c){var d,e;d=a.T;e=d.G.b+d.q.b|0;return e<=b&&b<(e+c|0)?1:0;}
function PG(a,b,c){var d;d=a.T.G.a;return (d-c|0)<=b&&b<d?1:0;}
function Qq(a,b,c){var d,e;d=a.Q;e=d.G.a+d.q.a|0;return e<=b&&b<(e+c|0)?1:0;}
function M7(a,b,c){var d,e,f;d=a.T.G.a-c|0;e=a.Q;f=(e.G.a+e.q.a|0)+c|0;return d<=b&&b<f?1:0;}
function Se(a,b,c){var d,e;d=a.T.G.a+c|0;e=a.Q;return ADh(b,d,(e.G.a+e.q.a|0)-c|0);}
function V4(a,b,c){var d,e,f;d=a.T;e=d.G.b;f=e-c|0;e=(e+d.q.b|0)+c|0;return f<=b&&b<e?1:0;}
function Ve(a,b,c){var d,e;d=a.T;e=d.G.b;return ADh(b,e+c|0,(e+d.q.b|0)-c|0);}
function ADh(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BF(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H9(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bi;f=new Bi;g=b.b;h=b.a;b=a.Q;i=b.G;j=i.b;k=i.a;b=b.q;l=b.b;m=b.a;b=new XZ;b.ox=a;b.ow=e;b.ou=f;b.ot=c;b.oB=g;b.oA=j;b.oz=l;b.oy=d;b.oD=h;b.oC=k;b.sD=m;return b;}
var ACt=F(0);
var LG=F(0);
function RL(){C.call(this);this.pk=null;}
function AM2(a,b){return Q$(a.pk,b);}
var QG=F();
function ARn(a,b){ACX(b);}
var YM=F();
function ADV(b,c,d,e,f,g){g.b=c.b;g.a=f;Bu(b,d.b,d.a,g,e);Bu(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bu(b,d.b,d.a+f|0,g,e);Bu(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ADa(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bu(b,j,k,i,h);Bu(b,j,k,i,h);Bu(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bu(b,l,j,i,h);Bu(b,l,j,i,h);Bu(b,l+g|0,j+g|0,i,h);}
function Ns(){var a=this;C.call(a);a.b5=null;a.i7=null;a.eB=null;a.dM=0;a.bm=0;a.gk=null;a.fK=null;a.fN=0;}
function To(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dM;i=X(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Be(i,e))a:{while(true){if(d<=e){j=d;break a;}Ex(c);j=d+(-1)|0;b=C5(d);d=X(j,a.bm)%a.eB.a|0;F_(a,c,b,a.fN,g);HZ(a.b5,c,0,d);if(!(j%a.dM|0))break;d=j;}}else{Ex(b);k=a.dM-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;F_(a,b,C5(j),X(a.bm,k)+a.fN|0,g);k=k+(-1)|0;j=h;}CN(a.b5,b);j=Be(i,e);}return j;}k=a.dM;h=X(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bb(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Ex(c);b=C5((d+f|0)+1|0);j=d+1|0;d
=X(d,a.bm)%a.eB.a|0;F_(a,c,b,a.fN,g);HZ(a.b5,c,0,d);if(!(j%a.dM|0))break;d=j;}}else{Ex(b);d=0;while(d<a.dM){h=h+1|0;F_(a,b,C5((h>e?h-f|0:h)+f|0),X(a.bm,d)+a.fN|0,g);d=d+1|0;}CN(a.b5,b);j=Bb(i,e);}return j;}
function ZL(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;a:{i=a.eB.a;j=((a.i7.a-(d%e|0)|0)+e|0)%e|0;k=f.iG;l=j+i|0;m=BF(l,c);if(m<=0){Y(a.gk,Cf(a.b5),a.bm);m=0;d=d+j|0;while(true){c=a.bm;if(m>=(i/c|0))break;CE(a.fK,0.0,X(m,c),Cf(a.b5),a.bm);n=Td(f,g,(d/a.bm|0)+m|0,k);I8(a,h,j+X(m,a.bm)|0,b,k.ip,n);m=m+1|0;}}else{b:{if(m>0&&j<c){o=Be(c-j|0,0);i=a.bm;p=o/i|0;if(o%i|0)p=p+1|0;Y(a.gk,Cf(a.b5),a.bm);q=0;m=d+j|0;while(true){if(q>=p)break b;CE(a.fK,0.0,X(q,a.bm),Cf(a.b5),a.bm);n=Td(f,g,(m/a.bm|0)+q|0,k);I8(a,h,j+X(q,a.bm)
|0,b,k.ip,n);q=q+1|0;}}}if(l>e){c=Bb(l%e|0,c);Y(a.gk,Cf(a.b5),a.bm);l=d%C8(a.b5)|0;e=a.bm;r=l/e|0;p=r+(c/e|0)|0;if(c%e|0)p=p+1|0;m=r;while(true){if(m>=p)break a;CE(a.fK,0.0,X(m,a.bm),Cf(a.b5),a.bm);c=d/a.bm|0;e=m-r|0;n=Td(f,g,c+e|0,k);c=a.bm;I8(a,h,X(e,c)-(d%c|0)|0,b,k.ip,n);m=m+1|0;}}}}}
function Td(b,c,d,e){c=c.data;return d<c.length&&c[d]?JY(b.dQ,b,c[d]):e.lp;}
function I8(a,b,c,d,e,f){EJ(b,a.i7.b+d.b|0,c+d.a|0,a.gk,a.fK,a.b5,e,f,0.0);}
function F_(a,b,c,d,e){Ci(b,c,a.eB.b-20.0*e,d);}
function Te(){C.call(this);this.vl=null;}
function AHR(a,b){var c,d,e;c=a.vl;if(c.e.f.cu==c.k3){b=b.data;d=D_(b[0]);e=FL(b[1]);ABQ(c.e.f,d,e);Pz(c.e.f);}}
var Y3=F();
function F$(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function ZH(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function ADZ(){var a=this;C.call(a);a.by=0;a.bI=0;}
function EV(a,b){var c=new ADZ();ALI(c,a,b);return c;}
function ALI(a,b,c){a.by=b;a.bI=c;}
function AFN(a,b){var c;if(a===b)return 1;if(b!==null&&Cs(a)===Cs(b)){c=b;return a.by==c.by&&a.bI==c.bI?1:0;}return 0;}
function AO9(a){var b,c,d,e,f,g,h;b=R(C,2).data;b[0]=F3(a.by);b[1]=F3(a.bI);c=(-1515898884);d=0;while(d<b.length){e=b[d];if(e===null)f=0;else{g=e.fw;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;c=Kh(h,4)^((h>>>7|0)|h<<25)^Kh(c,13);d=d+1|0;}return c;}
function AOE(a,b){var c;b=b;c=BF(a.by,b.by);if(!c)c=BF(a.bI,b.bI);return c;}
function TI(){C.call(this);this.uY=null;}
function AHX(a,b){var c;c=a.uY;TL(c,EW(c,b.h));KP(c.r,c.w,c.y);GT(c);}
var SM=F(0);
var AXl=null;function ACU(){AXl=new Qx;}
var FP=F(Iu);
var Xu=F(EI);
function Qu(){C.call(this);this.mZ=null;}
function AN3(a,b){var c,d;c=a.mZ;d=c.dD+1|0;c.dD=d;c=new M;O(c);G(G(T(c,d),B(387)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Uz(){C.call(this);this.qg=null;}
function AQC(a){var b,c;b=a.qg;c=new M;O(c);G(G(G(c,B(388)),b),B(389));$rt_globals.console.info($rt_ustr(N(c)));}
var Mf=F(DW);
var AYC=0.0;var AYD=null;function ACW(){AYC=$rt_globals.NaN;AYD=E($rt_floatcls());}
var FD=F();
var AVP=null;var AVR=null;var AVS=null;var AVQ=null;var AVO=null;function ABB(){AVP=E9([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AVR=AHc([Bd(1),Bd(10),Bd(100),Bd(1000),Bd(10000),Bd(100000),Bd(1000000),Bd(10000000),Bd(100000000),Bd(1000000000),Cd(1410065408, 2),Cd(1215752192, 23),Cd(3567587328, 232),Cd(1316134912, 2328),Cd(276447232, 23283),Cd(2764472320, 232830),Cd(1874919424, 2328306),Cd(1569325056, 23283064),Cd(2808348672, 232830643)]);AVS=AHc([Bd(1),Bd(10),Bd(100),Bd(10000),Bd(100000000),
Cd(1874919424, 2328306)]);AVQ=new Ux;AVO=new VR;}
var Ka=F();
var AYE=null;var AYF=null;function ACn(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.nW=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kC=0;c.kn=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Fe(CW(Bd(e),Bd(8388608)),Eq)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=ACv(AYF,f);if(h<0)h=( -h|0)-2|0;i=AYF.data;j=9+(f-i[h]|0)|0;k=Bd(e);l=AYE.data;m=EF(D$(BR(k,Bd(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=EF(D$(BR(k,Bd(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BF(q,r);e=e>0?X(m/q|0,q):e<0?X(m/r|0,r)+r|0:X((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.kC=e;c.kn=h-50|0;}
function AAI(){var b,c,d,e,f,g,h,i;AYE=BG(100);AYF=BG(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AYE.data;g=d+50|0;f[g]=$rt_udiv(e,20);AYF.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:EF(Cu(Bd(h),Gr(BR(Bd(b&((1<<i)-1|0)),Bd(10)),i)));f=AYE.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AYF.data[i]=c;d=d+1|0;}}
function VR(){var a=this;C.call(a);a.kC=0;a.kn=0;a.nW=0;}
function L$(){var a=this;C.call(a);a.wM=null;a.mM=0.0;a.w9=0.0;a.eW=null;a.gT=null;a.lT=null;a.e6=0;}
function AEf(a,b){var c;if(b!==null){a.gT=b;return a;}c=new BH;Bo(c,B(390));J(c);}
function ACB(a,b){var c;if(b!==null){a.lT=b;return a;}c=new BH;Bo(c,B(390));J(c);}
function Qb(a,b,c,d){var e,f,g,$$je;e=a.e6;if(!(e==2&&!d)&&e!=3){a.e6=d?2:1;while(true){try{f=AEi(a,b,c);}catch($$e){$$je=Ek($$e);if($$je instanceof Bq){g=$$je;J(AH9(g));}else{throw $$e;}}if(G8(f))return f;if(Ig(f)){if(d&&DO(b)){g=a.gT;G_();if(g===AWo)return D3(B7(b));if(B7(c)<=I(a.eW))return AWr;EG(b,b.V+B7(b)|0);if(a.gT===AWp)Kb(c,a.eW);}return f;}if(QO(f)){g=a.gT;G_();if(g===AWo)return f;if(g===AWp){if(B7(c)<I(a.eW))return AWr;Kb(c,a.eW);}EG(b,b.V+Kg(f)|0);}else if(L8(f)){g=a.lT;G_();if(g===AWo)break;if(g
===AWp){if(B7(c)<I(a.eW))return AWr;Kb(c,a.eW);}EG(b,b.V+Kg(f)|0);}}return f;}b=new D1;W(b);J(b);}
function ZQ(a,b){var c,d,e,f;c=a.e6;if(c&&c!=3){b=new D1;W(b);J(b);}if(!B7(b))return AEI(0);if(a.e6)a.e6=0;d=AEI(Be(8,B7(b)*a.mM|0));while(true){e=Qb(a,b,d,0);if(Ig(e))break;if(G8(e))d=S4(a,d);if(!KQ(e))continue;VN(e);}b=Qb(a,b,d,1);if(KQ(b))VN(b);while(true){f=a.e6;if(f!=3&&f!=2)break;a.e6=3;if(Ig(AWs)){d.dt=d.V;d.V=0;d.hm=(-1);return d;}d=S4(a,d);}b=new D1;W(b);J(b);}
function S4(a,b){var c,d,e;c=b.hc;d=NN(c,Be(8,c.data.length*2|0));e=ABM(d,0,d.data.length);EG(e,b.V);return e;}
var ABi=F(CS);
function QU(){C.call(this);this.nJ=null;}
function AJ1(a,b){Du(a.nJ,b);}
function V$(){C.call(this);this.o1=null;}
function ASo(a,b){var c,d;c=a.o1;d=c.dD+1|0;c.dD=d;c=b.hs;b=new M;O(b);G(G(T(b,d),B(391)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Qx=F();
function AM9(a,b){}
function EL(){var a=this;C.call(a);a.G=null;a.q=null;a.d1=0.0;}
function ATc(){var a=new EL();LB(a);return a;}
function LB(a){a.G=new Bi;a.q=new Bi;}
function ANC(a){}
function ARq(a){return BI(0,0);}
function P7(a,b,c,d){var e;if(!Ld(a.G,b)){a.kl(b);Cv(a.G,b);}if(!Ld(a.q,c)){a.kb(c);Cv(a.q,c);}e=a.d1;if(e!==d){a.d1=d;a.pZ(e,d);}}
function DJ(a,b){return F$(b,a.G,a.q);}
function ZR(a,b){var c,d,e,f;c=a.G;d=c.b;e=c.a;f=a.q;Yg();Bu(b,d,e,f,AXQ);}
function V_(a,b){var c;c=a.G;LF(b,c.b,c.a,a.q);}
function AQy(a,b){return 0;}
function AIR(a,b){}
function AQg(a,b){}
function ASu(a,b,c){}
function AQP(a,b,c,d){return 0;}
function AP7(a,b,c){return null;}
function ARd(a,b,c){return 0;}
function AMX(a,b){return 0;}
function AIJ(a,b,c,d){return 0;}
function GE(){var a=this;EL.call(a);a.cF=null;a.bz=null;a.e4=null;}
function AYG(){var a=new GE();Ua(a);return a;}
function Ua(a){LB(a);a.cF=new Bi;a.bz=new Bi;}
function AFA(a,b){a.e4=b;}
function AEJ(a){var b;b=a.bz;b.b=L3(a,b.b);b=a.bz;b.a=Kr(a,b.a);}
function Vu(a,b){a.bz.b=L3(a,b);}
function RC(a,b){a.bz.a=Kr(a,b);}
function ACK(a,b,c){a.bz.b=L3(a,b);a.bz.a=Kr(a,c);}
function Kr(a,b){return Be(0,Bb(b,a.cF.a-a.q.a|0));}
function L3(a,b){return Be(0,Bb(b,a.cF.b-a.q.b|0));}
function Ri(){var a=this;GE.call(a);a.cw=null;a.dw=null;a.fJ=null;a.qV=null;a.dG=null;a.b4=null;a.dU=null;a.e$=null;a.c$=0;a.eG=0;a.mH=null;a.dO=0;a.dR=0;a.fW=0;a.e3=0;a.fv=0;a.cA=0;a.dV=null;a.iO=null;a.nX=null;a.gG=null;}
function AUU(a,b){var c=new Ri();AAQ(c,a,b);return c;}
function AAQ(a,b,c){Ua(a);a.dw=ALN();a.fJ=new Bi;a.b4=AYH;a.dU=R(H0,0);a.dO=0;a.dR=0;a.fW=0;a.e3=0;a.fv=0;a.dV=AEz(0);a.gG=GB();a.cw=b;a.iO=c;a.mH=c;TD(a);}
function TD(a){a.c$=B9(2.0,a.cw.bR);}
function WH(a){return a.b4.data.length?0:1;}
function Wk(a,b){O1(a);a.b4=b;}
function O1(a){Y(a.fJ,0,0);}
function Yd(a,b,c){a.nX=b;a.qV=c;a.dG=null;a.dV=null;a.eG=0;O1(a);}
function ASK(a){var b,c;a.e$=CG(a.e$,null);Y(a.fJ,0,0);b=a.gG;if(b.dv>0){b.dv=0;c=b.b_;ZP(c,0,c.data.length,null);b.c5=b.c5+1|0;}a.dV=null;a.b4=AYH;a.dU=null;a.dO=0;a.dR=0;a.fW=0;Tn(a.dw);a.iO=null;}
function AHQ(a,b,c){TM(a);TD(a);a.dG=null;a.dV=null;a.eG=0;}
function AKD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=IO(a.cw);if(WH(a))return;Ly(a);Cz(c,a.dG);d=Ea(a);e=AE1(c,a.eG);f=Bb(IH(a.q.a,d),a.b4.data.length)+30|0;g=a.nX.nO;h=a.dU.data;i=h.length;if(i<f){a:{j=a.e3;k=a.fv;l=a.b4;m=a.dV;n=a.gG;o=R(H0,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gq!==q){VC(m,t,n);p[r]=LH(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=LH(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=LH(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){VC(m,q,n);h[j]=null;}j=j+1|0;}a.dU=o;Cv(a.fJ,Mh(a.dV));T6(a,a.cw.cL);}a.e3=Bb((a.bz.a+a.c$|0)/(Ea(a)+a.c$|0)|0,a.b4.data.length-1|0);a.fv=Bb((((a.bz.a+a.dw.t.a|0)-1|0)+a.c$|0)/(Ea(a)+a.c$|0)|0,a.b4.data.length-1|0);if(!a.dU.data.length)return;YX(a,e);V_(a,b);t=g.r7;m=a.G;Bu(b,m.b,m.a,a.q,t);m=a.dw.z;u=m.b;v=m.a;w=CC(a.cw,2.0);m=a.cw.dz;x=a.e3;j=u+w|0;while(x<=a.fv){n=Nq(a,x);k=X(x,Ea(a));i=x+
1|0;y=k+X(i,a.c$)|0;k=j+a.dO|0;r=k+a.dR|0;z=a.cA!=x?0:1;ba=!z?t:g.qs;q=!z?g.vO:g.i_;bb=!z?g.pN:g.i_;bc=!z?g.u8:g.i_;bd=(v+y|0)-a.bz.a|0;EJ(b,j,bd,n.gP,n.rS,a.e$,q,ba,0.0);EJ(b,k,bd,n.hj,n.h2,a.e$,bb,ba,0.0);EJ(b,r,bd,n.hp,n.iE,a.e$,bc,ba,0.0);k=n.gP.b;s=j+k|0;Y(m,Be(0,a.dO-k|0),n.gP.a);Bu(b,s,bd,m,ba);k=j+a.dO|0;s=n.hj.b;be=k+s|0;Y(m,Be(0,a.dR-s|0),n.hj.a);Bu(b,be,bd,m,ba);k=n.hp.b;bf=r+k|0;Y(m,Be(0,(((a.dw.t.b-k|0)-a.dR|0)-a.dO|0)-w|0),n.hp.a);Bu(b,bf,bd,m,ba);bg=(u+a.q.b|0)-w|0;Y(m,w,Ea(a)+a.c$|0);Bu(b,bg,
bd,m,t);x=i;}IE(b);}
function YX(a,b){var c,d,e,f,g,h;c=0;d=a.e3;while(d<=a.fv){e=Nq(a,d);if(!(e!==null&&e.gq===a.b4.data[d])){f=a.dU.data;g=a.b4;e=a.dV;h=a.gG;c=d%f.length|0;if(f[c]!==null)VC(e,f[c],h);f[c]=LH(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cv(a.fJ,Mh(a.dV));T6(a,a.cw.cL);}}
function T6(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fJ;c=CL(b,c.b+150|0,c.a);Cz(c,a.dG);d=a.dG;e=d.dx;f=e-(e+d.eo)/16.0;g=a.dU.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gq.is;k=d.h2;Ci(c,j,k.bl+a.eG,f+k.bF);j=d.gq.iI;d=d.iE;Ci(c,j,d.bl+a.eG,f+d.bF);}i=i+1|0;}a:{d=a.gG;if(d.dv>0){h=d.c5;i=0;b:while(true){g=d.b_.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.dy;l=j.dC;k=k;l=l.ig;Ci(c,k,l.bl+a.eG,f+l.bF);j=j.cP;if(h!=d.c5)break b;}i=i+1|0;}b=new IN;W(b);J(b);}}b=CG(a.e$,CV(b));a.e$=b;CN(b,c);FR(c);}
function Nq(a,b){var c;c=a.dU.data;return c[b%c.length|0];}
function ALQ(a,b){Cv(a.dw.t,b);}
function AIr(a,b){Cv(a.dw.z,b);}
function Z$(a){var b,c;Ly(a);b=Ea(a);c=a.b4.data.length;b=X(b,c)+X(a.c$,c+1|0)|0;Y(a.cF,a.q.b,b);}
function TM(a){var b,c,d,e,f,g,h,i,j;b=IO(a.cw);if(WH(a))return;Ly(a);Cz(b,a.dG);c=AE1(b,a.eG);d=a.b4.data;e=d.length;f=0;while(f<e){g=d[f];h=JV(c,g.gA);i=JV(c,g.is);j=JV(c,g.iI);a.dO=Be(a.dO,h);a.dR=Be(a.dR,i);a.fW=Be(a.fW,j);f=f+1|0;}}
function ARB(a,b){var c;c=N4(a,b.h);if(c>=0)a.cA=c;return Eu(a.dw,a.G)&&Hf(a.cw.cC)?1:0;}
function AFT(a,b,c){if(!Eu(a.dw,b.h)&&!Ma(a.dw)){b=a.mH;if(b!==null)b.p();}return null;}
function AF8(a,b,c,d){var e;if(d==1){e=N4(a,b.h);if(e>=0)NP(a,a.b4.data[e]);}return 1;}
function NP(a,b){a.iO.p();b.mL.p();}
function N4(a,b){var c,d,e;if(!a.dU.data.length)return (-1);c=Ea(a);d=(b.a-a.G.a|0)+a.bz.a|0;e=a.c$;e=(d+e|0)/(c+e|0)|0;if(e<a.b4.data.length)return e;return (-1);}
function Ea(a){return E5(a.dG);}
function Ly(a){var b;if(a.dG===null){b=GQ(a.cw,a.qV);a.dG=b;a.dV=AEz(E5(b));a.eG=Df(a.dG.l5);}}
function ALl(a,b){var c,d,e;a:{switch(b.bj){case 13:NP(a,a.b4.data[a.cA]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cA=a.e3;b=a.e4;c=a.bz;HV(b,c.b,c.a-(a.q.a/2|0)|0);return 0;case 34:a.cA=a.fv;b=a.e4;c=a.bz;HV(b,c.b,c.a+(a.q.a/2|0)|0);return 0;case 35:case 39:a.cA=a.b4.data.length-1|0;break a;case 36:case 37:a.cA=0;break a;case 38:d=a.cA;e=a.b4.data.length;a.cA=((d+e
|0)-1|0)%e|0;break a;case 40:a.cA=(a.cA+1|0)%a.b4.data.length|0;break a;default:break a;}a.iO.p();return 0;}e=a.cA;if(e<=a.e3)HV(a.e4,a.bz.b,X(e,Ea(a))+X(a.cA,a.c$)|0);else if(e>=a.fv)HV(a.e4,a.bz.b,(X(e+1|0,Ea(a))+X(a.cA+2|0,a.c$)|0)-a.q.a|0);return 0;}
var Wg=F();
function ASv(a){}
function AAW(){var a=this;EL.call(a);a.ly=null;a.rX=null;a.un=null;a.bB=null;a.c2=null;a.c4=null;a.sR=0.0;a.mJ=null;a.m6=null;}
function ZT(a,b){var c=new AAW();ARm(c,a,b);return c;}
function ARm(a,b,c){var d;c=c.cC;LB(a);d=new VS;d.rR=a;a.rX=d;d=new VT;d.ok=a;a.un=d;a.sR=10.0;a.bB=b;a.ly=c;b.e4=a;}
function AGa(a){var b;b=a.bB;b.e4=null;a.bB=CG(b,null);}
function QS(a,b,c){var d;a.mJ=b;a.m6=c;d=a.c2;if(d!==null)Gi(d,b,c);d=a.c4;if(d!==null)Gi(d,b,c);}
function AHY(a,b,c,d){P7(a,b,c,d);P7(a.bB,b,c,d);if(d!==0.0){a.bB.u9();AEJ(a.bB);if(Qn(a))H1(a);else a.c4=null;if(X2(a))Id(a);else a.c2=null;}}
function HV(a,b,c){ACK(a.bB,b,c);if(Qn(a))H1(a);if(X2(a))Id(a);}
function X2(a){var b;b=a.q.a;return b>0&&a.bB.cF.a>b?1:0;}
function Qn(a){var b;b=a.q.b;return b>0&&a.bB.cF.b>b?1:0;}
function H1(a){var b,c,d,e,f,g;b=a.c4;if(b===null)b=Ho();a.c4=b;Uy(a,b);c=a.c4;b=a.bB;d=b.bz.b;e=a.G;f=e.b;g=a.q;MC(c,d,f,g.b,b.cF.b,e.a+g.a|0,JJ(a));}
function Id(a){var b,c,d,e,f,g;b=a.c2;if(b===null)b=Ho();a.c2=b;Uy(a,b);c=a.c2;b=a.bB;d=b.bz.a;e=a.G;f=e.a;g=a.q;Iy(c,d,f,g.a,b.cF.a,e.b+g.b|0,JJ(a));}
function JJ(a){return B9(a.sR,a.d1);}
function Uy(a,b){var c,d;c=a.mJ;d=a.m6;if(!(c!==null&&d!==null?(KE(b.hO,c)&&KE(b.hN,d)?1:0):0))Gi(b,c,d);}
function APN(a,b){var c;a.bB.eY(b);if(!(a.c2===null&&a.c4===null)){CK(b,1);c=a.c2;if(c!==null)FZ(c,b);c=a.c4;if(c!==null)FZ(c,b);c=a.c2;if(c!==null)Gh(c,b);c=a.c4;if(c!==null)Gh(c,b);CK(b,0);}}
function Na(a,b){var c,d;a:{b:{c=a.c2;if(!(c!==null&&IV(c,b))){c=a.c4;if(c===null)break b;if(!IV(c,b))break b;}d=1;break a;}d=0;}return d;}
function AJ$(a,b,c,d){return !Na(a,b.h)&&!a.bB.cq(b,c,d)?0:1;}
function AQS(a,b,c){var d,e;d=a.c2;if(d!==null){e=Fi(d,b.h,a.rX,1);if(e!==null)return e;}d=a.c4;if(d!==null){e=Fi(d,b.h,a.un,0);if(e!==null)return e;}return a.bB.b$(b,c);}
function AJI(a,b,c){return Na(a,b.h)?1:0;}
function AK4(a,b){var c,d,e;c=a.c2;d=c!==null&&Ft(c,b.h,a.ly)?1:0;c=a.c4;e=c!==null&&Ft(c,b.h,a.ly)?1:0;return !d&&!e&&!a.bB.bO(b)?0:1;}
function AP0(a,b,c,d){var e,f;if(!DJ(a,b.h))return 0;e=B9(d*0.25,a.d1);f=B9(c*0.25,a.d1);if(b.bH){f=f+e|0;e=0;}if(a.c2!==null&&e){b=a.bB;RC(b,b.bz.a+e|0);Id(a);}if(a.c4!==null&&f){b=a.bB;Vu(b,b.bz.b+f|0);H1(a);}return 1;}
function ANh(a){var b,c;b=JJ(a);c=a.bB.i5();c.b=Be(c.b,b);c.a=Be(c.a,b);return c;}
function Wn(){var a=this;GE.call(a);a.hX=null;a.ls=null;a.sw=null;a.qd=0.0;}
function AN4(a){var b,c;b=a.cF;c=a.q;Y(b,c.b*3|0,c.a*5|0);}
function ALU(a){var b;b=B9(20.0,a.d1);return BI(b,b);}
function AKF(a,b){var c,d,e,f;c=a.sw;d=c.tr;e=c.ts;c=c.tp;b=Cy(b);f=new M;O(f);G(G(G(f,c),B(36)),b);II(e,N(f),d.tn,3.0);}
function AIk(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;ZR(a,b);V_(a,b);c=B9(30.0,a.d1);d=a.bz;e=d.b;f=X(e/c|0,c);g=d.a;h=X(g/c|0,c);d=a.q;i=X(((e+d.b|0)-1|0)/c|0,c);e=X(((g+d.a|0)-1|0)/c|0,c);d=a.ls;d.a=c;d.b=c;a.hX.bG=1.0;while(h<=e){g=a.G.a-a.bz.a|0;j=f;while(j<=i){k=a.G.b-a.bz.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AD$(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;Xj(n,0.75,a.qd,a.hX);Bu(b,k+j|0,g+h|0,a.ls,a.hX);j=j+c|0;}h=h+c|0;}IE(b);}
function ALj(a,b){}
function PH(){var a=this;C.call(a);a.tr=null;a.ts=null;a.tp=null;}
function VK(){C.call(this);this.pM=null;}
function AOn(a){Ya(a.pM);}
function RR(){C.call(this);this.mY=null;}
function AKn(a){NW(a.mY);}
function X5(){C.call(this);this.ln=null;}
var AYH=null;function AOb(){var a=new X5();AAn(a);return a;}
function AAn(a){a.ln=Cr();}
function Nj(a,b,c,d,e){var f;f=new Jx;f.mL=e;f.is=c;f.iI=d;f.gA=b;BZ(a.ln,f);}
function Ra(a){return HI(a.ln,AYH);}
function V5(b){var c,d;if(b===null)b=B(31);else{c=b.fc;if(c===null)b=B(31);else{d=PT(c,B(392),I(c));b=d==(-1)?b.fc:Dj(b.fc,d+1|0);}}return b;}
function AA0(){AYH=R(Jx,0);}
function H0(){var a=this;C.call(a);a.rS=null;a.h2=null;a.iE=null;a.gP=null;a.hj=null;a.hp=null;a.gq=null;}
function LH(b,c,d,e){var f,g,h;f=new H0;f.gP=new Bi;f.hj=new Bi;f.hp=new Bi;f.gq=b;g=DP(e,b.gA);if(g!==null)g.g5=g.g5+1|0;else{g=new On;h=Hi(c,b.gA,d);g.g5=1;g.ig=h;Lf(e,b.gA,g);}e=g.ig;f.rS=e;Y(f.gP,e.bk|0,e.bG|0);e=Hi(c,b.is,d);f.h2=e;Y(f.hj,e.bk|0,e.bG|0);b=Hi(c,b.iI,d);f.iE=b;Y(f.hp,b.bk|0,b.bG|0);return f;}
function VC(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gq.gA;f=DP(d,e);g=f.g5-1|0;f.g5=g;if(!g){a:{h=0;i=null;if(e===null){j=d.b_.data[0];while(j!==null){if(j.dy===null)break a;k=j.cP;i=j;j=k;}}else{l=e.js();m=d.b_.data;h=l&(m.length-1|0);j=m[h];while(j!==null&&!(j.i4==l&&Zi(e,j.dy))){k=j.cP;i=j;j=k;}}}if(j===null)j=null;else{if(i!==null)i.cP=j.cP;else d.b_.data[h]=j.cP;d.c5=d.c5+1|0;d.dv=d.dv-1|0;}Ij(b,f.ig);}Ij(b,c.h2);Ij(b,c.iE);}
function TV(){var a=this;EL.call(a);a.gW=null;a.g1=null;a.gD=null;a.d0=null;a.i3=0.0;a.gK=0;a.hH=0;a.dc=null;a.lK=null;}
function LV(a){var b;b=a.q;return b.b&&b.a?0:1;}
function Ui(a){var b,c;a:{if(a.gD!==null){b=a.g1;if(b!==null&&!Fs(b)){c=0;break a;}}c=1;}return c;}
function X$(a,b){a.q.a=b;}
function Pt(a,b,c,d,e){var f,g;f=a.gW.dz;Y(f,d,a.q.a);g=a.G;Bu(b,g.b+c|0,g.a,f,e);}
function Rk(a){if(a.d0===null)a.d0=GQ(a.gW,a.gD);}
function Ux(){var a=this;C.call(a);a.lb=Eq;a.j7=0;a.nv=0;}
function YF(){var a=this;C.call(a);a.sz=null;a.sy=null;a.sx=null;}
function AIx(a){var b,c,d,e,f;b=a.sz;c=a.sy;d=a.sx;e=Bx();f=new M;O(f);b=G(f,b);BE(b,9);b=G(b,c);BE(b,9);G(b,d);Br(e,N(f));}
function VS(){C.call(this);this.rR=null;}
function ARo(a,b){var c,d;c=a.rR;d=FO(b,c.bB.cF.a-c.q.a|0);RC(c.bB,d);Id(c);}
function VT(){C.call(this);this.ok=null;}
function AGi(a,b){var c,d;c=a.ok;d=FO(b,c.bB.cF.b-c.q.b|0);Vu(c.bB,d);H1(c);}
function Jx(){var a=this;C.call(a);a.mL=null;a.is=null;a.iI=null;a.gA=null;}
var D1=F(Bq);
var ACP=F(EI);
function AH9(a){var b=new ACP();AMz(b,a);return b;}
function AMz(a,b){a.jg=1;a.jI=1;a.kY=b;}
function SE(){var a=this;C.call(a);a.wF=null;a.wG=null;a.wE=null;}
function N1(){var a=this;C.call(a);a.tB=null;a.tD=null;a.tC=0;}
function AF2(a,b){var c,d,e;c=a.tB;d=a.tD;e=a.tC;d.m(XU(c,(b.h.b+e|0)-c.dZ.b|0));}
function NZ(){var a=this;C.call(a);a.qo=null;a.qn=null;a.qp=0;}
function AH$(a,b){var c,d,e;c=a.qo;d=a.qn;e=a.qp;d.m(ON(c,(b.h.a+e|0)-c.dZ.a|0));}
function Kv(){var a=this;L$.call(a);a.n5=null;a.sB=null;}
function AEi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.n5;e=0;f=0;g=a.sB;a:{b:{while(true){if((e+32|0)>f&&DO(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B7(b)+k|0;h=j.length;f=Bb(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new By;c=new M;O(c);T(G(T(G(c,B(393)),l),B(100)),h);Bo(b,N(c));J(b);}if(B7(b)<m){b=new LY;W(b);J(b);}if(m<0){b=new By;c=new M;O(c);G(T(G(c,B(101)),m),B(102));Bo(b,N(c));J(b);}n=b.V;h=n+b.kQ|0;e=0;while(e<m){o=k+1|0;i=b.lB.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.V=n+m|0;e=0;}if(!DO(c)){p=!DO(b)&&e>=f?AWs:AWr;break a;}i=g.data;n=B7(c);o=i.length;n=Bb(n,o);q=new Vx;q.ry=b;q.tH=c;p=AEu(a,d,e,f,g,0,n,q);e=q.va;if(p===null&&0==q.j9)p=AWs;k=q.j9;h=0;if(c.mq){b=new I7;W(b);J(b);}if(B7(c)<k)break;if(h>o){b=new By;c=new M;O(c);BE(T(G(T(G(c,B(103)),h),B(97)),o),41);Bo(b,N(c));J(b);}l=h+k|0;if(l>o){b=new By;c=new M;O(c);T(G(T(G(c,B(105)),l),B(100)),o);Bo(b,N(c));J(b);}if(k<0){b=new By;c=new M;O(c);G(T(G(c,B(101)),k),B(102));Bo(b,N(c));J(b);}o=c.V;m=0;while(m
<k){l=o+1|0;n=h+1|0;SL(c,o,i[h]);m=m+1|0;o=l;h=n;}c.V=c.V+k|0;if(p!==null)break a;}b=new HW;W(b);J(b);}b=new By;c=new M;O(c);BE(T(G(T(G(c,B(103)),k),B(97)),h),41);Bo(b,N(c));J(b);}EG(b,b.V-(f-e|0)|0);return p;}
var TZ=F(Kv);
function AEu(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Ky(h,2))break a;i=AWs;break a;}c=k+1|0;n=j[k];if(!FI(a,n)){c=c+(-2)|0;i=D3(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Ky(h,3))break a;i=AWs;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FI(a,n))break b;if(!FI(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Me(p)){c=k+(-3)|0;i=D3(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=D3(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Ky(h,4))break a;i=AWs;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B7(h.tH)<2?0:1)break a;i=AWr;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FI(a,n))break c;if(!FI(a,o))break c;if(!FI(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=H8(r);m=c+1|0;j[c]=IP(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=D3(1);break a;}c=k+(-3)|0;i
=D3(1);}h.va=c;h.j9=f;return i;}
function FI(a,b){return (b&192)!=128?0:1;}
function P9(){C.call(this);this.sf=null;}
function AG$(a,b){var c,d;c=a.sf;d=c.dD+1|0;c.dD=d;c=new M;O(c);G(G(T(c,d),B(394)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function MY(){C.call(this);this.qQ=null;}
function AHW(a){return a.qQ.fS();}
function MZ(){C.call(this);this.nn=null;}
function AOp(a){return a.nn.fS();}
function Th(){C.call(this);this.q6=null;}
function AP_(a){return a.q6.fS();}
function VJ(){C.call(this);this.yN=null;}
function ANk(a){Br(Bx(),B(395));}
function QW(){C.call(this);this.nk=null;}
function AFk(a,b){a.nk.m(FF(b));}
function U4(){C.call(this);this.sE=null;}
function ARY(a,b){a.sE.p();}
function M0(){var a=this;C.call(a);a.we=null;a.wf=null;a.wh=0;a.wj=0;}
var AAG=F();
var Z4=F();
function SH(){C.call(this);this.u6=null;}
function AGh(a,b){var c,d,e,f;c=a.u6;d=Cy(b);e=new M;O(e);G(G(e,B(396)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new S3;d.w0=c;d.pB=b;e=new S2;e.vU=c;f=new UZ;f.wQ=e;e=new Wc;e.nY=d;c=b.e5;if(c!==null)c.arrayBuffer().then(Bj(e,"f"),Bj(f,"f"));else{b=b.gI.getFile();c=new Wf;c.tx=e;c.ty=f;b.then(Bj(c,"f"),Bj(f,"f"));}}
function SG(){C.call(this);this.xq=null;}
function AG1(a,b){var c;b=Cy(b);c=new M;O(c);G(G(c,B(397)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Qr=F();
function AOU(a,b){b=b;b.b5=CG(b.b5,null);}
function Tp(){C.call(this);this.tE=null;}
function AKp(a){DM(a.tE);}
function N9(){C.call(this);this.q7=null;}
function AN2(a,b){var c;c=a.q7;Du(c,b);Lv(c,null);HG(c);}
var J7=F(DW);
var AYI=0.0;var AYJ=null;function ZY(){AYI=$rt_globals.NaN;AYJ=E($rt_doublecls());}
var LC=F();
var AYK=null;var AYL=null;function ABy(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.nv=Fe(CW(d,Cd(0, 2147483648)),Eq)?0:1;e=CW(d,Cd(4294967295, 1048575));f=EF(Gr(d,52))&2047;if(Fe(e,Eq)&&!f){c.lb=Eq;c.j7=0;return;}g=0;if(f)e=ATB(e,Cd(0, 1048576));else{e=Fr(e,1);while(Fe(CW(e,Cd(0, 1048576)),Eq)){e=Fr(e,1);f=f+(-1)|0;g=g+1|0;}}h=ACv(AYL,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AYL.data[h]|0)|0;j=RM(e,AYK.data[h],i);if(AAp(j,Cd(2808348672, 232830643))){h=h+1|0;i=12+(f-AYL.data[h]|0)|0;j=RM(e,AYK.data[h],
i);}k=D$(AYK.data[h],(63-i|0)-g|0);l=Gr(Cu(k,Bd(1)),1);m=Gr(k,1);if(Fe(e,Cd(0, 1048576)))m=Gr(m,2);n=Bd(10);while(PS(n,m)){n=BR(n,Bd(10));}if(AAp(M3(j,n),Dp(m,Bd(2))))n=Dp(n,Bd(10));o=Bd(1);while(PS(o,l)){o=BR(o,Bd(10));}if(AIj(Kw(o,M3(j,o)),Dp(l,Bd(2))))o=Dp(o,Bd(10));f=ATW(n,o);e=f>0?BR(Dp(j,n),n):f<0?Cu(BR(Dp(j,o),o),o):BR(Dp(Cu(j,Dp(o,Bd(2))),o),o);if(AAp(e,Cd(2808348672, 232830643))){h=h+1|0;e=Dp(e,Bd(10));}else if(AIC(e,Cd(1569325056, 23283064))){h=h+(-1)|0;e=BR(e,Bd(10));}c.lb=e;c.j7=h-330|0;}
function RM(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CW(b,Bd(65535));f=CW(D$(b,16),Bd(65535));g=CW(D$(b,32),Bd(65535));h=CW(D$(b,48),Bd(65535));i=CW(c,Bd(65535));j=CW(D$(c,16),Bd(65535));k=CW(D$(c,32),Bd(65535));l=CW(D$(c,48),Bd(65535));m=Cu(Cu(BR(k,e),BR(j,f)),BR(i,g));n=Cu(Cu(Cu(BR(l,e),BR(k,f)),BR(j,g)),BR(i,h));o=Cu(Cu(Fr(BR(l,h),32+d|0),Fr(Cu(BR(l,g),BR(k,h)),16+d|0)),Fr(Cu(Cu(BR(l,f),BR(k,g)),BR(j,h)),d));return Cu(d>16?Cu(o,Fr(n,d-16|0)):Cu(o,D$(n,16-d|0)),D$(m,32-d|0));}
function AA$(){var b,c,d,e,f,g,h,i,j,k;AYK=AUR(660);AYL=BG(660);b=Cd(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AYK.data;g=d+330|0;f[g]=FJ(e,Bd(80));AYL.data[g]=c;e=FJ(e,Bd(10));h=NB(e,Bd(10));while(PS(e,b)&&Fe(CW(e,Cd(0, 2147483648)),Eq)){e=Fr(e,1);c=c+1|0;h=Fr(h,1);}e=Cu(e,Dp(h,Bd(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AIj(e,Cd(3435973836, 214748364))){e=Gr(e,1);j=j+1|0;d=d+(-1)|0;}k=BR(e,Bd(10));b=j<=0?k:Cu(k,Gr(BR(CW(b,Bd((1<<j)-1|0)),Bd(10)),j));f=AYK.data;g=(330-i|0)-1|0;f[g]=FJ(b,
Bd(80));AYL.data[g]=d;i=i+1|0;}}
function M1(){C.call(this);this.sQ=null;}
function ASP(a,b){var c,d;c=a.sQ;d=new Bq;Bo(d,$rt_str(b.message));c.m(d);}
function Q4(){var a=this;C.call(a);a.xj=null;a.rq=null;a.ir=null;}
function L5(){var a=this;C.call(a);a.jk=0;a.sk=0;a.jj=0;a.rm=0;a.v3=0;}
function Uj(){var a=this;C.call(a);a.rr=0;a.mG=0;}
function FO(a,b){return PX(a.rr,b,a.mG);}
function ND(){var a=this;C.call(a);a.ut=null;a.uv=null;a.uu=null;}
function ARE(a,b,c,d){var e,f;b=a.ut;e=a.uv;f=a.uu;TP(b,e);if(f!==null)d.mv.p();if(MH(d)){if(d.jS===null)T1(b,AEM(d,e),d.ic,e);else PZ(b,AEM(d,e),d.ic,e,d.jS);}}
var Sp=F(DW);
var AYM=null;function FJ(b,c){return Long_udiv(b, c);}
function NB(b,c){return Long_urem(b, c);}
function Lj(b,c){return Long_ucompare(b, c);}
function AA8(){AYM=E($rt_longcls());}
var Fl=F(Bq);
function NQ(){var a=this;C.call(a);a.mU=null;a.qe=null;a.tL=0;a.u3=0;}
function LQ(a,b){return B7(a.qe)<b?0:1;}
var AD2=F();
function UX(b,c,d,e){var f,g;f=b.next();g=new XL;g.m9=b;g.m8=c;g.na=d;g.m$=e;f.then(Bj(g,"f"),Bj(d,"f"));}
function Zk(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEv(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Eb()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new XF;f.qW=b;f.qX=d;d.addEventListener("change",Bj(f,"handleEvent"));d.click();}
function Zt(b,c){var d;if(c.isFile?1:0)b.m(YU(c.file()));else{c=c.createReader();d=new Xt;d.t0=b;c.readEntries(Bj(d,"f"));}}
function Ti(){var a=this;C.call(a);a.bL=null;a.oK=null;a.hU=null;a.iJ=null;a.X=null;}
function IG(a){return a.bL.cr.iS;}
function Ol(a){var b;b=new Pl;b.qb=a;return b;}
function AE6(a){var b,c,d,e,f,g;b=R(C$,4);c=b.data;d=a.X.W.U.bi;e=a.bL;BN(e);f=new Wa;f.tm=e;c[0]=D9(B(398),d,f);e=a.X.W.U.bi;f=a.bL;BN(f);g=new We;g.nV=f;c[1]=D9(B(399),e,g);e=a.X.W.U.bi;f=a.bL;BN(f);g=new Wd;g.sd=f;c[2]=D9(B(400),e,g);e=a.X.W.U.bi;f=a.bL;BN(f);g=new Wb;g.vP=f;c[3]=D9(B(401),e,g);return FV(b);}
function Jg(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DM(a.X.cb);d=a.bL.e;e=Dn(d);f=G0(d);g=a.bL.et;if(c===null)h=null;else{ATk();switch(AYN.data[c.cZ]){case 1:h=KY(g,e,f);break a;case 2:h=V3(g,e,f);break a;default:}b=new Et;W(b);J(b);}}c=a.bL;e=EW(c,b);f=HL(c.e.f,e.by,e.bI);g=OV(c,f);if(h!==null){f=c.e;i=e.by;j=e.bI;e=new PU;e.yi=c;e.yj=b;e.yk=g;h.sJ(f,i,j,e,c.gY);}else{e=DP(c.e.f.ef,f);if(e!==null)Hy(c,e);else{e=DP(c.e.f.eA,f);if(e!==null&&!Eg(e))VE(c.iA,b,e,c,g);else{g=c.iA;DM(g.cb);h=g.cb;k=R(C$,1);l=k.data;d=new C$;BN(h);f
=new V6;f.oh=h;K$(d,f,B(402),g.W.U.p8);l[0]=d;Gf(h,b,FV(k),NF(g,c));}}}}
var ZE=F(0);
function AJ_(b){return 112<=b&&b<=123?1:0;}
var XN=F();
function APT(a,b){Zk(b);}
function XM(){var a=this;C.call(a);a.qj=null;a.qi=null;}
function AIe(a,b){var c,d,e,f,g,h,i;c=a.qj;d=a.qi;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new P8;i.oc=c;i.ob=g;h.then(Bj(i,"f"),Bj(d,"f"));e=e+1|0;}}
var Xa=F();
function AJM(a,b){Zk(b);}
function W_(){var a=this;C.call(a);a.pr=null;a.ps=null;}
function AKJ(a,b){var c,d,e,f,g;c=a.pr;d=a.ps;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bv,1);g.data[0]=FF(b.name);UX(f,c,d,g);}
var Y5=F();
function ACi(b,c){return ADc(null,b,c,0);}
function ADc(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AD8(c);g=BC(f);h=BC(f);i=BC(f);j=R(CA,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<Ca(b)){l=BC(f);c[k]=B1(b,k);l=4*l|0;f.eS=f.eS+l|0;}else c[k]=DQ(AB6(f,d,0));k=k+1|0;}m=Zl(f,h);n=new HN;n.ef=GB();n.eA=GB();n.fn=Cr();if(!c.length){b=new BH;W(b);J(b);}n.D=j;n.fF=0;n.cu=0;n.da=AUp(m);b=n.ef;e=0;while(e<i){Lf(b,EV(BC(f),BC(f)),EV(BC(f),BC(f)));e=e+1|0;}b=n.ef;m=n.eA;o=new U0;SZ(o,b);while(Jk(o)){UH(o);p=o.g7;q=p.dy;p=p.dC;b=Cr();if(DP(m,p)===null)Lf(m,p,b);BZ(DP(m,
p),q);}if(m.kv===null){b=new Pk;b.vh=m;m.kv=b;}b=m.kv;q=new Rn;SZ(q,b.vh);while(Jk(q)){UH(q);b=q.g7.dC;m=AVE;c=R(C,b.i);d=c.data;HI(b,c);AAA(c,m);e=0;g=d.length;while(e<g){m=d[e];Jd(b,e);b.cl.data[e]=m;e=e+1|0;}}Qw(f);return n;}
function ABQ(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AD8(c);g=BC(f);h=BC(f);i=BC(f);j=BC(f);k=NM(b,g);l=NM(b,h);m=(IL(B1(b,k.b),k.a)).data[0].o;e=(IL(B1(b,l.b),l.a)).data[1].o;n=0;o=i-1|0;while(n<i){p=AB6(f,d,g);if(!n)p=LP(m,p);if(n==o)p=LP(p,e);q=k.b+n|0;r=DQ(p);b.D.data[q]=r;n=n+1|0;}r=Zl(f,j);Qw(f);if(!Eg(r)){s=Of(g,h,(-1));b=b.da;f=ATp(s,r);r=KH(b,b.cT,s);if(r!==null){f=f.cT.bD;if(r===b.cT)b.cT=Bt(f,0);else if(r.dN!==null){b=new Od;b.sA=r;J$(f,b);q=Qy(r.dN.bD,
r);Ep(r.dN.bD,q);b=r.dN.bD;Pu(b,q);if(!Eg(f)){Jp(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.cl.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BV(f);g=0;while(g<j){c=b.cl.data;h=q+1|0;c[q]=BY(f);g=g+1|0;q=h;}b.cv=b.cv+1|0;}}}}}
function AB6(b,c,d){var e,f,g,h,i,j,k,l;e=BC(b);f=R(B8,e);g=f.data;h=0;while(h<e){i=BC(b);j=BC(b);k=BC(b);l=BC(b);g[h]=DF(Hw(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function Zl(b,c){var d,e;d=Cr();e=0;while(e<c){BZ(d,Of(BC(b),BC(b),BC(b)));e=e+1|0;}return d;}
var Xh=F(0);
var AXh=null;function Zh(){AXh=null;}
function XF(){var a=this;C.call(a);a.qW=null;a.qX=null;}
function AJD(a,b){var c,d,e,f,g,h;b=a.qW;c=a.qX;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new MU;h.m3=b;h.m2=g;$rt_globals.setTimeout(Bj(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=YU(d.item(f));g=new MD;g.si=b;g.sj=c;$rt_globals.setTimeout(Bj(g,"onTimer"),0);f=f+1|0;}}
function AAH(){var a=this;C.call(a);a.h_=null;a.ke=null;}
function AEl(){var a=this;C.call(a);a.yG=0;a.yr=0;a.sT=0;a.kU=0;}
function UP(){var a=this;C.call(a);a.nD=null;a.nC=null;}
function AKj(a){var b,c,d,e,f,g;b=a.nD;c=a.nC;if(C6(c.h_,b.e.fY)){c=c.ke;CB(b,c.kU,c.sT,0);B3(b.r.bV,c.kU,c.sT);B3(b.r.bJ,c.yr,c.yG);}else{d=(Ct(b.et.rU)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Co(b);b=new TS;b.uf=g;b.ue=c;BN(b);c=new P0;c.vN=b;$rt_globals.setTimeout(Bj(c,"onTimer"),0);}}}
function UR(){var a=this;C.call(a);a.vR=null;a.vM=null;}
function APk(a){Hy(a.vR,a.vM);}
function AC0(){var a=this;C.call(a);a.io=null;a.eS=0;}
function AD8(a){var b=new AC0();AFq(b,a);return b;}
function AFq(a,b){a.io=b;a.eS=0;}
function BC(a){var b,c;b=a.io.data;c=a.eS;a.eS=c+1|0;return b[c];}
function Qw(a){var b,c,d,e;if(a.eS!=a.io.data.length){b=EY();c=a.io.data.length;d=a.eS;e=new M;O(e);G(T(G(T(G(e,B(403)),c),B(404)),d),B(405));Br(b,N(e));}}
var I7=F(Fl);
var HW=F(Bq);
var LY=F(Bq);
function AA7(){C.call(this);this.BS=null;}
function SK(){var a=this;C.call(a);a.t2=null;a.t6=null;}
function AR4(a){var b,c;b=a.t2;c=a.t6;FT(b.d4,c);}
function Rq(){C.call(this);this.s0=null;}
function AK7(a,b){HF(a.s0,b);}
function SU(){var a=this;C.call(a);a.oY=null;a.oX=null;}
function AGp(a){var b,c;b=a.oY;c=a.oX;FT(b.d4,c);Uu(b);}
var YO=F();
function Sj(b,c){return b.data[c];}
function G3(){var a=this;C.call(a);a.eN=0;a.fl=0;a.k2=null;a.jP=0;a.g4=null;}
function AFL(a,b,c,d,e,f){var g=new G3();AK0(g,a,b,c,d,e,f);return g;}
function AK0(a,b,c,d,e,f,g){a.eN=b;a.fl=c;a.k2=BI(f,g);a.jP=d;a.g4=e;}
function AC9(){Gg.call(this);this.Db=null;}
function Pk(){EQ.call(this);this.vh=null;}
var W3=F(By);
var QE=F(0);
var NK=F(0);
var L1=F();
function AAM(){var a=this;L1.call(a);a.Fh=null;a.Ho=0;a.FX=0;a.Ds=0;}
function RX(){var a=this;C.call(a);a.oj=null;a.oi=null;}
function AG3(a){var b,c;b=a.oj;c=a.oi;Vg();Jg(b,c,AYO);}
function RW(){var a=this;C.call(a);a.pu=null;a.pw=null;}
function AFs(a){var b,c;b=a.pu;c=a.pw;Vg();Jg(b,c,AYP);}
function RV(){var a=this;C.call(a);a.vy=null;a.vz=null;}
function ALL(a){Jg(a.vy,a.vz,null);}
function RU(){var a=this;C.call(a);a.nB=null;a.nE=null;}
function AQA(a){var b,c,d,e,f,g,h;b=a.nB;c=a.nE;d=Dn(b.bL.e);e=G0(b.bL.e);d=NC(b.bL.et,d,e);DM(b.X.cb);b=b.bL;e=EW(b,c);if(d!==null){f=b.e;g=e.by;h=e.bI;e=new QB;e.xw=b;e.xv=c;d.Ik(f,g,h,1,e,b.gY);}}
function PJ(){C.call(this);this.qE=null;}
function APW(a){var b;b=a.qE;DM(b.X.cb);GF(b.bL,Ol(b),0);}
function PL(){C.call(this);this.t5=null;}
function AKP(a){var b;b=a.t5;DM(b.X.cb);GF(b.bL,Ol(b),1);}
function PM(){C.call(this);this.s2=null;}
function AHv(a){var b,c,d;b=a.s2;DM(b.X.cb);c=IG(b);b=b.bL;BN(b);d=new Tl;d.s5=b;Q_(c,d,Zf(B(406)));}
var XO=F(0);
var AXd=null;function Y1(){AXd=new PF;}
function Wx(){C.call(this);this.tg=null;}
function AGm(a){var b,c,d;b=a.tg;DM(b.X.cb);c=IG(b);b=b.bL;BN(b);d=new Ry;d.rb=b;LZ(c,d);}
function U2(){C.call(this);this.tq=null;}
function AKu(a,b,c){var d,e;c=a.tq;d=c.e.f;e=b.fw;b=c.eO;XC(d.D.data[e],0,b);}
function QN(){var a=this;C.call(a);a.o9=null;a.pa=0;a.pb=0;a.pc=null;a.pd=0;a.o$=0;}
function AKf(a,b){var c,d,e,f,g,h,i,j;c=a.o9;d=a.pa;e=a.pb;f=a.pc;g=a.pd;h=a.o$;i=CC(c.bv,5.0);d=Bb((c.bv.ca.b-d|0)-i|0,Be((i-d|0)-c.T.q.b|0,b.h.b));j=Bb((c.bv.ca.a-e|0)-i|0,Be((i-e|0)-c.T.q.a|0,b.h.a));Y(f,d+g|0,j+h|0);Fq(c,f,c.Q.q);}
function XZ(){var a=this;C.call(a);a.ox=null;a.ow=null;a.ou=null;a.ot=0;a.oB=0;a.oA=0;a.oz=0;a.oy=0;a.oD=0;a.oC=0;a.sD=0;}
function ALK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.ox;d=a.ow;e=a.ou;f=a.ot;g=a.oB;h=a.oA;i=a.oz;j=a.oy;k=a.oD;l=a.oC;m=a.sD;n=CC(c.bv,5.0);o=c.Q.i5();Cv(d,c.Q.q);Cv(e,c.Q.G);switch(f){case -1:f=Bb(h+(b.h.b-g|0)|0,c.bv.ca.b-n|0);g=o.b;h=h+i|0;f=Be(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Be((i+b.h.b|0)-g|0,Be(o.b,n-c.T.G.b|0));}b:{switch(j){case -1:f=Be(n,Bb(l+(b.h.a-k|0)|0,(c.bv.ca.a+c.T.q.a|0)-n|0));g=o.a;h=l+m|0;f=Be(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Be((m+b.h.a|0)-k|0,o.a);}Fq(c,e,d);}
function VH(){var a=this;C.call(a);a.vF=null;a.vG=0.0;}
function JV(a,b){return KT(a.vF,b,a.vG*2.0+0.875);}
function Ta(){C.call(this);this.oo=null;}
function ALk(a){AED(a.oo);}
function Tb(){C.call(this);this.rT=null;}
function AMC(a){LO(a.rT);}
function S_(){C.call(this);this.vH=null;}
function ANZ(a){AD7(a.vH);}
function Or(){C.call(this);this.sh=null;}
function AKd(a){a.sh.u0();}
function Oq(){C.call(this);this.q$=null;}
function AQK(a){a.q$.vp();}
function VB(){C.call(this);this.rG=null;}
function AH5(a){var b,c,d,e,f,g,h,i;b=a.rG;c=(b.oK.dn()).data;d=R(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new YG;i.qa=b;i.p_=h;e[f]=ACp(i,h,b.X.W.U.bi);f=f+1|0;}return d;}
function Wa(){C.call(this);this.tm=null;}
function AOz(a){var b,c,d,e,f;b=a.tm.e.f;c=b.cu;d=new M;O(d);T(G(d,B(407)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fF;d=new M;O(d);T(G(d,B(408)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.da;e=FY(EH(b));SB(d,0,d.cT,e);b=Bx();f=b.ko;f.data[0]=10;Ob(b,f,0,1);}
function We(){C.call(this);this.nV=null;}
function ALs(a){S7(a.nV);}
function Wd(){C.call(this);this.sd=null;}
function AGe(a){W8(a.sd);}
function Wb(){C.call(this);this.vP=null;}
function AIb(a){HG(a.vP);}
function XJ(){C.call(this);this.pl=null;}
function AHx(a,b,c){FW(B1(a.pl.e.f,b.fw),0,I(c));}
function P8(){var a=this;C.call(a);a.oc=null;a.ob=null;}
function AIs(a,b){a.oc.m(ACy(a.ob,b));}
var IY=F(0);
function MU(){var a=this;C.call(a);a.m3=null;a.m2=null;}
function AKQ(a){Zt(a.m3,a.m2);}
function MD(){var a=this;C.call(a);a.si=null;a.sj=null;}
function AFd(a){a.si.m(a.sj);}
var PF=F();
function XL(){var a=this;C.call(a);a.m9=null;a.m8=null;a.na=null;a.m$=null;}
function AJ6(a,b){var c,d,e,f,g,h,i;c=a.m9;d=a.m8;e=a.na;f=a.m$;if(!(b.done?1:0)){UX(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new UE;c.pt=d;c.pv=g;c.px=f;b.then(Bj(c,"f"),Bj(e,"f"));}else{h=f.data;c=g.values();b=FF(g.name);i=h.length;f=Dk(f,i+1|0);f.data[i]=b;UX(c,d,e,f);}}}
function GV(){var a=this;C.call(a);a.ij=0;a.so=0;a.hy=null;a.g7=null;a.pJ=null;a.ja=null;}
function AYQ(a){var b=new GV();SZ(b,a);return b;}
function SZ(a,b){a.ja=b;a.so=b.c5;a.hy=null;}
function Jk(a){var b,c;if(a.hy!==null)return 1;while(true){b=a.ij;c=a.ja.b_.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.ij=b+1|0;}return 0;}
function AAk(a){var b;if(a.so==a.ja.c5)return;b=new IN;W(b);J(b);}
function UH(a){var b,c,d,e;AAk(a);if(!Jk(a)){b=new Yt;W(b);J(b);}b=a.hy;if(b!==null){c=a.g7;if(c!==null)a.pJ=c;a.g7=b;a.hy=b.cP;}else{d=a.ja.b_.data;e=a.ij;a.ij=e+1|0;b=d[e];a.g7=b;a.hy=b.cP;a.pJ=null;}}
var U0=F(GV);
var Rn=F(GV);
function Rl(){var a=this;C.call(a);a.g=null;a.dl=0;a.kc=null;a.nA=0;a.gb=0;a.eC=0;a.bx=0;a.k_=null;}
function J2(a){return a.g.bN;}
function Yc(a,b,c,d){var e,f,g,h,i,j;e=Cr();f=a.dl;g=0;if(c!=f)a.dl=c;a:{switch(b){case -1073741784:h=new R$;c=a.bx+1|0;a.bx=c;Fp(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PQ;c=a.bx+1|0;a.bx=c;Fp(h,c);break a;case -33554392:h=new Tg;c=a.bx+1|0;a.bx=c;Fp(h,c);break a;default:c=a.gb+1|0;a.gb=c;if(d!==null)h=AUz(c);else{h=new FA;Fp(h,0);g=1;}c=a.gb;if(c<=(-1))break a;if(c>=10)break a;a.kc.data[c]=h;break a;}h=new X9;Fp(h,(-1));}while(true){if(E3(a.g)&&a.g.j==(-536870788))
{d=AQ8(B_(a,2),B_(a,64));while(!Di(a.g)&&E3(a.g)){i=a.g;j=i.j;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cx(d,Bh(i));i=a.g;if(i.bh!=(-536870788))continue;Bh(i);}i=KV(a,d);i.O(h);}else if(a.g.bh==(-536870788)){i=GM(h);Bh(a.g);}else{i=Pc(a,h);d=a.g;if(d.bh==(-536870788))Bh(d);}if(i!==null)BZ(e,i);if(Di(a.g))break;if(a.g.bh==(-536870871))break;}if(a.g.kA==(-536870788))BZ(e,GM(h));if(a.dl!=f&&!g){a.dl=f;d=a.g;d.fU=f;d.j=d.bh;d.ex=d.eI;j=d.c8;d.v=j+1|0;d.g9=j;E6(d);}switch(b){case -1073741784:break;case -536870872:d
=new MS;FB(d,e,h);return d;case -268435416:d=new Wy;FB(d,e,h);return d;case -134217688:d=new Ro;FB(d,e,h);return d;case -67108824:d=new T2;FB(d,e,h);return d;case -33554392:d=new DR;FB(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return AUk(Bt(e,0),h);default:return ATV(e,h);}return GM(h);}d=new I4;FB(d,e,h);return d;}
function ADw(a){var b,c,d,e,f,g,h;b=BG(4);c=(-1);d=(-1);if(!Di(a.g)&&E3(a.g)){e=b.data;c=Bh(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BQ(3);b=e.data;b[0]=c&65535;f=a.g;g=f.bh;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bh(f);f=a.g;g=f.bh;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bh(f);return AQO(e,3);}return AQO(e,2);}if(!B_(a,2))return AAj(b[0]);if(B_(a,64))return AOR(b[0]);return AHd(b[0]);}e=b.data;c=1;while(c<4&&!Di(a.g)&&E3(a.g)){h=c+1|0;e[c]=Bh(a.g);c=h;}if(c==1){h=e[0];if(!(AYR.x6(h)==AYS?0:1))return X6(a,e[0]);}if
(!B_(a,2))return AVa(b,c);if(B_(a,64)){f=new XK;N7(f,b,c);return f;}f=new Ud;N7(f,b,c);return f;}
function Pc(a,b){var c,d,e,f,g,h,i;if(E3(a.g)&&!JO(a.g)&&Ko(a.g.j)){if(B_(a,128)){c=ADw(a);if(!Di(a.g)){d=a.g;e=d.bh;if(!(e==(-536870871)&&!(b instanceof FA))&&e!=(-536870788)&&!E3(d))c=Mg(a,b,c);}}else if(!Og(a.g)&&!VF(a.g)){f=new Oi;O(f);while(!Di(a.g)&&E3(a.g)&&!Og(a.g)&&!VF(a.g)){if(!(!JO(a.g)&&!a.g.j)&&!(!JO(a.g)&&Ko(a.g.j))){g=a.g.j;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bh(a.g);if(!L_(e))BE(f,e&65535);else In(f,Gs(e));}if(!B_(a,2)){c=new R0;DB(c);c.cp
=N(f);e=f.P;c.bK=e;c.kt=AM$(e);c.lg=AM$(c.bK);h=0;while(h<(c.bK-1|0)){Rt(c.kt,L(c.cp,h),(c.bK-h|0)-1|0);Rt(c.lg,L(c.cp,(c.bK-h|0)-1|0),(c.bK-h|0)-1|0);h=h+1|0;}}else if(B_(a,64))c=AU$(f);else{c=new Nr;DB(c);c.g$=N(f);c.bK=f.P;}}else c=Mg(a,b,XI(a,b));}else{d=a.g;if(d.bh!=(-536870871))c=Mg(a,b,XI(a,b));else{if(b instanceof FA)J(B$(B(31),d.bN,Oe(d)));c=GM(b);}}a:{if(!Di(a.g)){e=a.g.bh;if(!(e==(-536870871)&&!(b instanceof FA))&&e!=(-536870788)){f=Pc(a,b);if(c instanceof C3&&!(c instanceof E7)&&!(c instanceof CQ)
&&!(c instanceof EA)){i=c;if(!f.bW(i.J)){c=new WN;EU(c,i.J,i.d,i.hw);c.J.O(c);}}if((f.hz()&65535)!=43)c.O(f);else c.O(f.J);break a;}}if(c===null)return null;c.O(b);}if((c.hz()&65535)!=43)return c;return c.J;}
function Mg(a,b,c){var d,e,f,g,h;d=a.g;e=d.bh;if(c!==null&&!(c instanceof BW)){switch(e){case -2147483606:Bh(d);d=new YD;Dc(d,c,b,e);Mo();c.O(AYT);return d;case -2147483605:Bh(d);d=new PI;Dc(d,c,b,(-2147483606));Mo();c.O(AYT);return d;case -2147483585:Bh(d);d=new Pm;Dc(d,c,b,(-536870849));Mo();c.O(AYT);return d;case -2147483525:f=new Nl;d=Fc(d);g=a.eC+1|0;a.eC=g;Jc(f,d,c,b,(-536870849),g);Mo();c.O(AYT);return f;case -1073741782:case -1073741781:Bh(d);d=new RQ;Dc(d,c,b,e);c.O(d);return d;case -1073741761:Bh(d);d
=new Qz;Dc(d,c,b,(-536870849));c.O(b);return d;case -1073741701:h=new Vj;d=Fc(d);e=a.eC+1|0;a.eC=e;Jc(h,d,c,b,(-536870849),e);c.O(h);return h;case -536870870:case -536870869:Bh(d);if(c.hz()!=(-2147483602)){d=new CQ;Dc(d,c,b,e);}else if(B_(a,32)){d=new RS;Dc(d,c,b,e);}else{d=new Os;f=Pp(a.dl);Dc(d,c,b,e);d.kz=f;}c.O(d);return d;case -536870849:Bh(d);d=new FS;Dc(d,c,b,(-536870849));c.O(b);return d;case -536870789:h=new Fd;d=Fc(d);e=a.eC+1|0;a.eC=e;Jc(h,d,c,b,(-536870849),e);c.O(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bh(d);d=new YE;EU(d,f,b,e);f.d=d;return d;case -2147483585:Bh(d);c=new WJ;EU(c,f,b,(-2147483585));return c;case -2147483525:c=new Pa;Sy(c,Fc(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bh(d);d=new Qt;EU(d,f,b,e);f.d=d;return d;case -1073741761:Bh(d);c=new Us;EU(c,f,b,(-1073741761));return c;case -1073741701:c=new Rp;Sy(c,Fc(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bh(d);d=AUr(f,b,e);f.d=d;return d;case -536870849:Bh(d);c
=new EA;EU(c,f,b,(-536870849));return c;case -536870789:return ATy(Fc(d),f,b,(-536870789));default:}return c;}
function XI(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof FA;while(true){a:{e=a.g;f=e.bh;if((f&(-2147418113))==(-2147483608)){Bh(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dl=g;else{if(f!=(-1073741784))g=a.dl;c=Yc(a,f,g,b);e=a.g;if(e.bh!=(-536870871))J(B$(B(31),e.bN,e.c8));Bh(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bh(e);c
=AQz(0);break a;case -2147483577:Bh(e);c=new Oo;BO(c);break a;case -2147483558:Bh(e);c=new Xp;h=a.bx+1|0;a.bx=h;ADY(c,h);break a;case -2147483550:Bh(e);c=AQz(1);break a;case -2147483526:Bh(e);c=new W9;BO(c);break a;case -536870876:Bh(e);a.bx=a.bx+1|0;if(B_(a,8)){if(B_(a,1)){c=ATM(a.bx);break a;}c=AS4(a.bx);break a;}if(B_(a,1)){c=AT1(a.bx);break a;}c=AUE(a.bx);break a;case -536870866:Bh(e);if(B_(a,32)){c=AUX();break a;}c=AUx(Pp(a.dl));break a;case -536870821:Bh(e);i=0;c=a.g;if(c.bh==(-536870818)){i=1;Bh(c);}c
=KV(a,F6(a,i));c.O(b);e=a.g;if(e.bh!=(-536870819))J(B$(B(31),e.bN,e.c8));OU(e,1);Bh(a.g);break a;case -536870818:Bh(e);a.bx=a.bx+1|0;if(!B_(a,8)){c=new Ku;BO(c);break a;}c=new Nx;e=Pp(a.dl);BO(c);c.ri=e;break a;case 0:j=e.eI;if(j!==null)c=KV(a,j);else{if(Di(e)){c=GM(b);break a;}c=AAj(f&65535);}Bh(a.g);break a;default:break b;}Bh(e);c=new Ku;BO(c);break a;}h=(f&2147483647)-48|0;if(a.gb<h)J(B$(B(31),Fm(e),Oe(a.g)));Bh(e);a.bx=a.bx+1|0;c=!B_(a,2)?AS_(h,a.bx):B_(a,64)?ATN(h,a.bx):AU7(h,a.bx);a.kc.data[h].ka=1;a.nA
=1;break a;}if(f>=0&&!GO(e)){c=X6(a,f);Bh(a.g);}else if(f==(-536870788))c=GM(b);else{if(f!=(-536870871)){b=new IS;c=!GO(a.g)?Xo(f&65535):a.g.eI.ct();e=a.g;Jn(b,c,e.bN,e.c8);J(b);}if(d){b=new IS;e=a.g;Jn(b,B(31),e.bN,e.c8);J(b);}c=GM(b);}}}if(f!=(-16777176))break;}return c;}
function F6(a,b){var c,d,e,f,g,h,i,j,$$je;c=AQ8(B_(a,2),B_(a,64));Ev(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Di(a.g))break a;h=a.g;b=h.bh;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cx(c,d);d=Bh(a.g);h=a.g;if(h.bh!=(-536870874)){d=38;break d;}if(h.j==(-536870821)){Bh(h);e=1;d=(-1);break d;}Bh(h);if(g){c=F6(a,0);break d;}if(a.g.bh==(-536870819))break d;Xd(c,F6(a,0));break d;case -536870867:if(!g){b=h.j;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bh(h);h=a.g;i=h.bh;if(GO(h))break c;if
(i<0){j=a.g.j;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Ko(i))break e;i=i&65535;break e;}catch($$e){$$je=Ek($$e);if($$je instanceof D5){break b;}else{throw $$e;}}}try{BT(c,d,i);}catch($$e){$$je=Ek($$e);if($$je instanceof D5){break b;}else{throw $$e;}}Bh(a.g);d=(-1);break d;}}if(d>=0)Cx(c,d);d=45;Bh(a.g);break d;case -536870821:if(d>=0){Cx(c,d);d=(-1);}Bh(a.g);j=0;h=a.g;if(h.bh==(-536870818)){Bh(h);j=1;}if(!e)YR(c,F6(a,j));else Xd(c,F6(a,j));e=0;Bh(a.g);break d;case -536870819:if(d>=0)Cx(c,
d);d=93;Bh(a.g);break d;case -536870818:if(d>=0)Cx(c,d);d=94;Bh(a.g);break d;case 0:if(d>=0)Cx(c,d);h=a.g.eI;if(h===null)d=0;else{AEY(c,h);d=(-1);}Bh(a.g);break d;default:}if(d>=0)Cx(c,d);d=Bh(a.g);}g=0;}J(B$(B(31),J2(a),a.g.c8));}J(B$(B(31),J2(a),a.g.c8));}if(!f){if(d>=0)Cx(c,d);return c;}J(B$(B(31),J2(a),a.g.c8-1|0));}
function X6(a,b){var c,d,e;c=L_(b);if(B_(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AHd(b&65535);}if(B_(a,64)&&b>128){if(c){d=new MI;DB(d);d.bK=2;d.qK=GC(GA(b));return d;}if(O3(b))return ANf(b&65535);if(!SW(b))return AOR(b&65535);return AKA(b&65535);}}if(!c){if(O3(b))return ANf(b&65535);if(!SW(b))return AAj(b&65535);return AKA(b&65535);}d=new DV;DB(d);d.bK=2;d.fC=b;e=(Gs(b)).data;d.jH=e[0];d.ia=e[1];return d;}
function KV(a,b){var c,d,e;if(!ACd(b)){if(!b.L){if(b.gQ())return AJZ(b);return AQB(b);}if(!b.gQ())return ALi(b);c=new Je;UK(c,b);return c;}c=Zj(b);d=new M2;BO(d);d.pn=c;d.v0=c.bg;if(!b.L){if(b.gQ())return ACY(AJZ(Hu(b)),d);return ACY(AQB(Hu(b)),d);}if(!b.gQ())return ACY(ALi(Hu(b)),d);c=new Qo;e=new Je;UK(e,Hu(b));AEF(c,e,d);return c;}
function Hv(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B_(a,b){return (a.dl&b)!=b?0:1;}
function Od(){C.call(this);this.sA=null;}
function ASH(a,b){b.dN=a.sA.dN;}
var Gt=F(Cm);
var AYP=null;var AYO=null;var AYU=null;function Vg(){Vg=Bm(Gt);AIw();}
function AKX(a,b){var c=new Gt();AAd(c,a,b);return c;}
function AAd(a,b,c){Vg();C_(a,b,c);}
function AIw(){var b;AYP=AKX(B(409),0);b=AKX(B(410),1);AYO=b;AYU=H(Gt,[AYP,b]);}
function Tl(){C.call(this);this.s5=null;}
function ALv(a,b){Du(a.s5,b);}
function BD(){var a=this;C.call(a);a.d=null;a.ci=0;a.oH=null;a.hw=0;}
var AVK=0;function BO(a){var b,c;b=new Fj;c=AVK;AVK=c+1|0;J6(b,c);a.oH=Mc(b);}
function KS(a,b){var c,d;c=new Fj;d=AVK;AVK=d+1|0;J6(c,d);a.oH=Mc(c);a.d=b;}
function HC(a,b,c,d){var e;e=d.x;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function HR(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHI(a,b){a.hw=b;}
function AGS(a){return a.hw;}
function AP3(a){return a.d;}
function AQX(a,b){a.d=b;}
function AQU(a,b){return 1;}
function ARR(a){return null;}
function I_(a){var b;a.ci=1;b=a.d;if(b!==null){if(!b.ci){b=b.fg();if(b!==null){a.d.ci=1;a.d=b;}a.d.ec();}else if(b instanceof Gw&&b.eg.ka)a.d=b.d;}}
function AEQ(){AVK=1;}
var UT=F();
var AYN=null;function ATk(){ATk=Bm(UT);AGw();}
function AGw(){var b,c;Vg();b=BG((AYU.eM()).data.length);c=b.data;AYN=b;c[AYP.cZ]=1;c[AYO.cZ]=2;}
function Pl(){C.call(this);this.qb=null;}
function AHT(a,b){UL(IG(a.qb),b,AXm,Zf(B(411)));}
function Wm(){C.call(this);this.um=null;}
function AJA(a,b){var c,d;c=a.um;d=b.hs;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function YG(){var a=this;C.call(a);a.qa=null;a.p_=null;}
function AHD(a){var b,c;b=a.qa;c=a.p_;b.hU.s9(c);}
function CO(){var a=this;BD.call(a);a.ka=0;a.du=0;}
var AYT=null;function Mo(){Mo=Bm(CO);AI0();}
function AUz(a){var b=new CO();Fp(b,a);return b;}
function Fp(a,b){Mo();BO(a);a.du=b;}
function AGl(a,b,c,d){var e,f;e=Iw(d,a.du);JE(d,a.du,b);f=a.d.c(b,c,d);if(f<0)JE(d,a.du,e);return f;}
function AMn(a){return a.du;}
function AGG(a,b){return 0;}
function AI0(){var b;b=new Oj;BO(b);AYT=b;}
function GJ(){var a=this;C.call(a);a.be=null;a.fU=0;a.ez=0;a.ub=0;a.kA=0;a.bh=0;a.j=0;a.rM=0;a.eI=null;a.ex=null;a.v=0;a.hG=0;a.c8=0;a.g9=0;a.bN=null;}
var AYV=null;var AYR=null;var AYS=0;function OU(a,b){if(b>0&&b<3)a.ez=b;if(b==1){a.j=a.bh;a.ex=a.eI;a.v=a.g9;a.g9=a.c8;E6(a);}}
function GO(a){return a.eI===null?0:1;}
function JO(a){return a.ex===null?0:1;}
function Bh(a){E6(a);return a.kA;}
function Fc(a){var b;b=a.eI;E6(a);return b;}
function E6(a){var b,c,d,e,f,g,h,$$je;a.kA=a.bh;a.bh=a.j;a.eI=a.ex;a.c8=a.g9;a.g9=a.v;while(true){b=0;c=a.v>=a.be.data.length?0:LI(a);a.j=c;a.ex=null;if(a.ez==4){if(c!=92)return;c=a.v;d=a.be.data;c=c>=d.length?0:d[BU(a)];a.j=c;switch(c){case 69:break;default:a.j=92;a.v=a.hG;return;}a.ez=a.ub;a.j=a.v>(a.be.data.length-2|0)?0:LI(a);}a:{c=a.j;if(c!=92){e=a.ez;if(e==1)switch(c){case 36:a.j=(-536870876);break a;case 40:if(a.be.data[a.v]!=63){a.j=(-2147483608);break a;}BU(a);c=a.be.data[a.v];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.j=(-134217688);BU(a);break b;default:J(B$(B(31),Fm(a),a.v));}a.j=(-67108824);BU(a);}else{switch(c){case 33:break;case 60:BU(a);c=a.be.data[a.v];e=1;break b;case 61:a.j=(-536870872);BU(a);break b;case 62:a.j=(-33554392);BU(a);break b;default:f=AER(a);a.j=f;if(f<256){a.fU=f;f=f<<16;a.j=f;a.j=(-1073741784)|f;break b;}f=f&255;a.j=f;a.fU=f;f=f<<16;a.j=f;a.j=(-16777176)|f;break b;}a.j=(-268435416);BU(a);}}if(!e)break;}break a;case 41:a.j=(-536870871);break a;case 42:case 43:case 63:e
=a.v;d=a.be.data;switch(e>=d.length?42:d[e]){case 43:a.j=c|(-2147483648);BU(a);break a;case 63:a.j=c|(-1073741824);BU(a);break a;default:}a.j=c|(-536870912);break a;case 46:a.j=(-536870866);break a;case 91:a.j=(-536870821);OU(a,2);break a;case 93:if(e!=2)break a;a.j=(-536870819);break a;case 94:a.j=(-536870818);break a;case 123:a.ex=AEj(a,c);break a;case 124:a.j=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.j=(-536870874);break a;case 45:a.j=(-536870867);break a;case 91:a.j=(-536870821);break a;case 93:a.j
=(-536870819);break a;case 94:a.j=(-536870818);break a;default:}}else{c=a.v>=(a.be.data.length-2|0)?(-1):LI(a);c:{a.j=c;switch(c){case -1:J(B$(B(31),Fm(a),a.v));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.j
=ACH(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ez!=1)break a;a.j=(-2147483648)|c;break a;case 65:a.j=(-2147483583);break a;case 66:a.j=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B$(B(31),Fm(a),a.v));case 68:case 83:case 87:case 100:case 115:case 119:a.ex=So(Hw(a.be,
a.hG,1),0);a.j=0;break a;case 71:a.j=(-2147483577);break a;case 80:case 112:break c;case 81:a.ub=a.ez;a.ez=4;b=1;break a;case 90:a.j=(-2147483558);break a;case 97:a.j=7;break a;case 98:a.j=(-2147483550);break a;case 99:c=a.v;d=a.be.data;if(c>=(d.length-2|0))J(B$(B(31),Fm(a),a.v));a.j=d[BU(a)]&31;break a;case 101:a.j=27;break a;case 102:a.j=12;break a;case 110:a.j=10;break a;case 114:a.j=13;break a;case 116:a.j=9;break a;case 117:a.j=PO(a,4);break a;case 120:a.j=PO(a,2);break a;case 122:a.j=(-2147483526);break a;default:}break a;}g
=ACr(a);h=0;if(a.j==80)h=1;try{a.ex=So(g,h);}catch($$e){$$je=Ek($$e);if($$je instanceof Jh){J(B$(B(31),Fm(a),a.v));}else{throw $$e;}}a.j=0;}}if(b)continue;else break;}}
function ACr(a){var b,c,d,e,f,g;b=new M;F0(b,10);c=a.v;d=a.be;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Hw(d,BU(a),1);f=new M;O(f);G(G(f,B(412)),b);return N(f);}BU(a);c=0;a:{while(true){g=a.v;d=a.be.data;if(g>=(d.length-2|0))break;c=d[BU(a)];if(c==125)break a;BE(b,c);}}if(c!=125)J(B$(B(31),a.bN,a.v));}if(!b.P)J(B$(B(31),a.bN,a.v));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(412)),f);return N(b);}b:{c:{if(I(f)>3){if(KJ(f,B(412)))break c;if(KJ(f,B(413)))break c;}break b;}f=Dj(f,2);}return f;}
function AEj(a,b){var c,d,e,f,g,$$je;c=new M;F0(c,4);d=(-1);e=2147483647;a:{while(true){f=a.v;g=a.be.data;if(f>=g.length)break a;b=g[BU(a)];if(b==125)break a;if(b==44&&d<0)try{d=JA(DU(c),10);AEo(c,0,Zw(c));continue;}catch($$e){$$je=Ek($$e);if($$je instanceof Dd){break;}else{throw $$e;}}BE(c,b&65535);}J(B$(B(31),a.bN,a.v));}if(b!=125)J(B$(B(31),a.bN,a.v));if(c.P>0)b:{try{e=JA(DU(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ek($$e);if($$je instanceof Dd){}else{throw $$e;}}J(B$(B(31),a.bN,a.v));}else if
(d<0)J(B$(B(31),a.bN,a.v));if((d|e|(e-d|0))<0)J(B$(B(31),a.bN,a.v));b=a.v;g=a.be.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.j=(-2147483525);BU(a);break c;case 63:a.j=(-1073741701);BU(a);break c;default:}a.j=(-536870789);}c=new Nb;c.ey=d;c.eu=e;return c;}
function Fm(a){return a.bN;}
function Di(a){return !a.bh&&!a.j&&a.v==a.rM&&!GO(a)?1:0;}
function Ko(b){return b<0?0:1;}
function E3(a){return !Di(a)&&!GO(a)&&Ko(a.bh)?1:0;}
function Og(a){var b;b=a.bh;return b<=56319&&b>=55296?1:0;}
function VF(a){var b;b=a.bh;return b<=57343&&b>=56320?1:0;}
function SW(b){return b<=56319&&b>=55296?1:0;}
function O3(b){return b<=57343&&b>=56320?1:0;}
function PO(a,b){var c,d,e,f,$$je;c=new M;F0(c,b);d=a.be.data.length-2|0;e=0;while(true){f=BF(e,b);if(f>=0)break;if(a.v>=d)break;BE(c,a.be.data[BU(a)]);e=e+1|0;}if(!f)a:{try{b=JA(DU(c),16);}catch($$e){$$je=Ek($$e);if($$je instanceof Dd){break a;}else{throw $$e;}}return b;}J(B$(B(31),a.bN,a.v));}
function ACH(a){var b,c,d,e,f,g;b=3;c=1;d=a.be.data;e=d.length-2|0;f=Vc(d[a.v],8);switch(f){case -1:break;default:if(f>3)b=2;BU(a);a:{while(true){if(c>=b)break a;g=a.v;if(g>=e)break a;g=Vc(a.be.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BU(a);c=c+1|0;}}return f;}J(B$(B(31),a.bN,a.v));}
function AER(a){var b,c,d,e;b=1;c=a.fU;a:while(true){d=a.v;e=a.be.data;if(d>=e.length)J(B$(B(31),a.bN,d));b:{c:{switch(e[d]){case 41:BU(a);return c|256;case 45:if(!b)J(B$(B(31),a.bN,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BU(a);}BU(a);return c;}
function BU(a){var b,c,d,e,f;b=a.v;a.hG=b;if(!(a.fU&4))a.v=b+1|0;else{c=a.be.data.length-2|0;a.v=b+1|0;a:while(true){d=a.v;if(d<c&&Rm(a.be.data[d])){a.v=a.v+1|0;continue;}d=a.v;if(d>=c)break;e=a.be.data;if(e[d]!=35)break;a.v=d+1|0;while(true){f=a.v;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.v=f+1|0;}}}return a.hG;}
function AEa(b){return AYV.C0(b);}
function LI(a){var b,c,d,e;b=a.be.data[BU(a)];if(CD(b)){c=a.hG+1|0;d=a.be.data;if(c<d.length){e=d[c];if(C4(e)){BU(a);return Ew(b,e);}}}return b;}
function Oe(a){return a.c8;}
function IS(){var a=this;BH.call(a);a.xM=null;a.xn=null;a.qv=0;}
function B$(a,b,c){var d=new IS();Jn(d,a,b,c);return d;}
function Jn(a,b,c,d){W(a);a.qv=(-1);a.xM=b;a.xn=c;a.qv=d;}
function Xt(){C.call(this);this.t0=null;}
function AOe(a,b){var c,d;c=a.t0;d=0;while(d<b.length){Zt(c,b[d]);d=d+1|0;}}
var ACl=F(0);
function UE(){var a=this;C.call(a);a.pt=null;a.pv=null;a.px=null;}
function ANQ(a,b){a.pt.m(AS5(a.pv,b,a.px));}
var R$=F(CO);
function AFV(a,b,c,d){var e;e=a.du;BK(d,e,b-Dl(d,e)|0);return a.d.c(b,c,d);}
function APv(a,b){return 0;}
var X9=F(CO);
function AHG(a,b,c,d){return b;}
var PQ=F(CO);
function AGP(a,b,c,d){if(Dl(d,a.du)!=b)b=(-1);return b;}
function Tg(){CO.call(this);this.no=0;}
function AF0(a,b,c,d){var e;e=a.du;BK(d,e,b-Dl(d,e)|0);a.no=b;return b;}
function AN1(a,b){return 0;}
var FA=F(CO);
function ARe(a,b,c,d){if(d.jr!=1&&b!=d.x)return (-1);d.iK=1;JE(d,0,b);return b;}
function BW(){BD.call(this);this.bK=0;}
function DB(a){BO(a);a.bK=1;}
function ASi(a,b,c,d){var e;if((b+a.b1()|0)>d.x){d.dh=1;return (-1);}e=a.bw(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AQp(a){return a.bK;}
function AKY(a,b){return 1;}
var ADW=F(BW);
function GM(a){var b=new ADW();AMw(b,a);return b;}
function AMw(a,b){KS(a,b);a.bK=1;a.hw=1;a.bK=0;}
function APV(a,b,c){return 0;}
function AI7(a,b,c,d){var e,f,g;e=d.x;f=d.cG;while(true){g=BF(b,e);if(g>0)return (-1);if(g<0&&C4(L(c,b))&&b>f&&CD(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AHu(a,b,c,d,e){var f,g;f=e.x;g=e.cG;while(true){if(c<b)return (-1);if(c<f&&C4(L(d,c))&&c>g&&CD(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFY(a,b){return 0;}
function BS(){var a=this;BD.call(a);a.bE=null;a.eg=null;a.Y=0;}
function ATV(a,b){var c=new BS();FB(c,a,b);return c;}
function FB(a,b,c){BO(a);a.bE=b;a.eg=c;a.Y=c.du;}
function AJJ(a,b,c,d){var e,f,g,h;if(a.bE===null)return (-1);e=FE(d,a.Y);DA(d,a.Y,b);f=a.bE.i;g=0;while(true){if(g>=f){DA(d,a.Y,e);return (-1);}h=(Bt(a.bE,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANT(a,b){a.eg.d=b;}
function ALM(a,b){var c;a:{c=a.bE;if(c!==null){c=BV(c);while(true){if(!B6(c))break a;if(!(BY(c)).bW(b))continue;else return 1;}}}return 0;}
function AOD(a,b){return Iw(b,a.Y)>=0&&FE(b,a.Y)==Iw(b,a.Y)?0:1;}
function AHq(a){var b,c,d,e;a.ci=1;b=a.eg;if(b!==null&&!b.ci)I_(b);a:{b=a.bE;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bt(a.bE,d);e=b.fg();if(e===null)e=b;else{b.ci=1;Ep(a.bE,d);RP(a.bE,d,e);}if(!e.ci)e.ec();d=d+1|0;}}}if(a.d!==null)I_(a);}
var I4=F(BS);
function ANB(a,b,c,d){var e,f,g,h;e=Dl(d,a.Y);BK(d,a.Y,b);f=a.bE.i;g=0;while(true){if(g>=f){BK(d,a.Y,e);return (-1);}h=(Bt(a.bE,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AO6(a,b){return !Dl(b,a.Y)?0:1;}
var DR=F(I4);
function AIc(a,b,c,d){var e,f,g;e=Dl(d,a.Y);BK(d,a.Y,b);f=a.bE.i;g=0;while(g<f){if((Bt(a.bE,g)).c(b,c,d)>=0)return a.d.c(a.eg.no,c,d);g=g+1|0;}BK(d,a.Y,e);return (-1);}
function AOK(a,b){a.d=b;}
var MS=F(DR);
function ANL(a,b,c,d){var e,f;e=a.bE.i;f=0;while(f<e){if((Bt(a.bE,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AQ2(a,b){return 0;}
var Wy=F(DR);
function AGB(a,b,c,d){var e,f;e=a.bE.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bt(a.bE,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AQu(a,b){return 0;}
var Ro=F(DR);
function AHk(a,b,c,d){var e,f,g,h;e=a.bE.i;f=d.iT?0:d.cG;a:{g=a.d.c(b,c,d);if(g>=0){BK(d,a.Y,b);h=0;while(true){if(h>=e)break a;if((Bt(a.bE,h)).co(f,b,c,d)>=0){BK(d,a.Y,(-1));return g;}h=h+1|0;}}}return (-1);}
function ASL(a,b){return 0;}
var T2=F(DR);
function AFt(a,b,c,d){var e,f;e=a.bE.i;BK(d,a.Y,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bt(a.bE,f)).co(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function APj(a,b){return 0;}
function Gw(){BS.call(this);this.cU=null;}
function AUk(a,b){var c=new Gw();Z6(c,a,b);return c;}
function Z6(a,b,c){BO(a);a.cU=b;a.eg=c;a.Y=c.du;}
function AFP(a,b,c,d){var e,f;e=FE(d,a.Y);DA(d,a.Y,b);f=a.cU.c(b,c,d);if(f>=0)return f;DA(d,a.Y,e);return (-1);}
function AL8(a,b,c,d){var e;e=a.cU.ck(b,c,d);if(e>=0)DA(d,a.Y,e);return e;}
function APB(a,b,c,d,e){var f;f=a.cU.co(b,c,d,e);if(f>=0)DA(e,a.Y,f);return f;}
function ALH(a,b){return a.cU.bW(b);}
function ANX(a){var b;b=new Nf;Z6(b,a.cU,a.eg);a.d=b;return b;}
function ARU(a){var b;a.ci=1;b=a.eg;if(b!==null&&!b.ci)I_(b);b=a.cU;if(b!==null&&!b.ci){b=b.fg();if(b!==null){a.cU.ci=1;a.cU=b;}a.cU.ec();}}
var GL=F();
function U(){var a=this;GL.call(a);a.bg=0;a.cf=0;a.K=null;a.jx=null;a.j5=null;a.L=0;}
var AYW=null;function OO(){OO=Bm(U);AHV();}
function Bs(a){var b;OO();b=new Xn;b.A=BG(64);a.K=b;}
function AGD(a){return null;}
function AF$(a){return a.K;}
function ACd(a){var b,c,d,e,f;if(!a.cf)b=Hc(a.K,0)>=2048?0:1;else{a:{c=a.K;b=0;d=c.bt;if(b<d){e=c.A.data;f=(e[0]^(-1))>>>0|0;if(f)b=Im(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Im(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AJY(a){return a.L;}
function AQj(a){return a;}
function Zj(a){var b,c;if(a.j5===null){b=a.eH();c=new WL;c.yb=a;c.nS=b;Bs(c);a.j5=c;Ev(c,a.cf);}return a.j5;}
function Hu(a){var b,c;if(a.jx===null){b=a.eH();c=new WK;c.xP=a;c.tF=b;c.up=a;Bs(c);a.jx=c;Ev(c,a.bg);a.jx.L=a.L;}return a.jx;}
function ARQ(a){return 0;}
function Ev(a,b){var c;c=a.bg;if(c^b){a.bg=c?0:1;a.cf=a.cf?0:1;}if(!a.L)a.L=1;return a;}
function AI9(a){return a.bg;}
function Kl(b,c){OO();return b.k(c);}
function Ik(b,c){var d,e;OO();if(b.de()!==null&&c.de()!==null){b=b.de();c=c.de();d=Bb(b.A.data.length,c.A.data.length);e=0;a:{while(e<d){if(b.A.data[e]&c.A.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function So(b,c){var d,e,f;OO();d=0;while(true){APh();e=AYX.data;if(d>=e.length){f=new Jh;Bo(f,B(31));f.yA=B(31);f.ye=b;J(f);}e=e[d].data;if(Bn(b,e[0]))break;d=d+1|0;}return ADn(e[1],c);}
function AHV(){var b;b=new G5;APh();AYW=b;}
function ZV(){var a=this;U.call(a);a.lk=0;a.nm=0;a.gc=0;a.kT=0;a.dL=0;a.fa=0;a.H=null;a.bC=null;}
function Dm(){var a=new ZV();ASs(a);return a;}
function AQ8(a,b){var c=new ZV();AHH(c,a,b);return c;}
function ASs(a){Bs(a);a.H=ASN();}
function AHH(a,b,c){Bs(a);a.H=ASN();a.lk=b;a.nm=c;}
function Cx(a,b){a:{if(a.lk){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dL){Mx(a.H,Hv(b&65535));break a;}LD(a.H,Hv(b&65535));break a;}if(a.nm&&b>128){a.gc=1;b=GC(GA(b));}}}if(!(!SW(b)&&!O3(b))){if(a.kT)Mx(a.K,b-55296|0);else LD(a.K,b-55296|0);}if(a.dL)Mx(a.H,b);else LD(a.H,b);if(!a.L&&L_(b))a.L=1;return a;}
function AEY(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(a.kT){if(!b.cf)FU(a.K,b.eH());else Da(a.K,b.eH());}else if(!b.cf)FN(a.K,b.eH());else{Fu(a.K,b.eH());Da(a.K,b.eH());a.cf=a.cf?0:1;a.kT=1;}if(!a.fa&&b.de()!==null){if(a.dL){if(!b.bg)FU(a.H,b.de());else Da(a.H,b.de());}else if(!b.bg)FN(a.H,b.de());else{Fu(a.H,b.de());Da(a.H,b.de());a.bg=a.bg?0:1;a.dL=1;}}else{c=a.bg;d=a.bC;if(d!==null){if(!c){e=new OH;e.wo=a;e.uV=c;e.t9=d;e.tY=b;Bs(e);a.bC=e;}else{e=new OI;e.yI=a;e.ra=c;e.qP=d;e.p3=b;Bs(e);a.bC=e;}}else{if(c&&!a.dL
&&Md(a.H)){d=new OE;d.xm=a;d.qZ=b;Bs(d);a.bC=d;}else if(!c){d=new OC;d.kD=a;d.jR=c;d.ov=b;Bs(d);a.bC=d;}else{d=new OD;d.lx=a;d.jY=c;d.t3=b;Bs(d);a.bC=d;}a.fa=1;}}return a;}
function BT(a,b,c){var d,e,f,g,h;if(b>c){d=new BH;W(d);J(d);}a:{b:{if(!a.lk){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cx(a,b);b=b+1|0;}}if(!a.dL)HY(a.H,b,c+1|0);else{d=a.H;c=c+1|0;if(b>c){d=new By;W(d);J(d);}e=d.bt;if(b<e){f=Bb(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.A.data;h[g]=h[g]&(If(d,b)|HJ(d,f));}else{h=d.A.data;h[g]=h[g]&If(d,b);e=g+1|0;while(e<c){d.A.data[e]=0;e=e+1|0;}if(f&31){h=d.A.data;h[c]=h[c]&HJ(d,f);}}G9(d);}}}}return a;}
function YR(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(b.gc)a.gc=1;c=a.cf;if(!(c^b.cf)){if(!c)FN(a.K,b.K);else Da(a.K,b.K);}else if(c)FU(a.K,b.K);else{Fu(a.K,b.K);Da(a.K,b.K);a.cf=1;}if(!a.fa&&CU(b)!==null){c=a.bg;if(!(c^b.bg)){if(!c)FN(a.H,CU(b));else Da(a.H,CU(b));}else if(c)FU(a.H,CU(b));else{Fu(a.H,CU(b));Da(a.H,CU(b));a.bg=1;}}else{c=a.bg;d=a.bC;if(d!==null){if(!c){e=new Ox;e.v6=a;e.s8=c;e.t1=d;e.uC=b;Bs(e);a.bC=e;}else{e=new Ph;e.wy=a;e.uz=c;e.m0=d;e.nq=b;Bs(e);a.bC=e;}}else{if(!a.dL&&Md(a.H)){if(!c){d=new OF;d.yO
=a;d.pG=b;Bs(d);a.bC=d;}else{d=new OG;d.wD=a;d.ul=b;Bs(d);a.bC=d;}}else if(!c){d=new OJ;d.s_=a;d.rt=b;d.qU=c;Bs(d);a.bC=d;}else{d=new OK;d.rP=a;d.sa=b;d.sq=c;Bs(d);a.bC=d;}a.fa=1;}}}
function Xd(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(b.gc)a.gc=1;c=a.cf;if(!(c^b.cf)){if(!c)Da(a.K,b.K);else FN(a.K,b.K);}else if(!c)FU(a.K,b.K);else{Fu(a.K,b.K);Da(a.K,b.K);a.cf=0;}if(!a.fa&&CU(b)!==null){c=a.bg;if(!(c^b.bg)){if(!c)Da(a.H,CU(b));else FN(a.H,CU(b));}else if(!c)FU(a.H,CU(b));else{Fu(a.H,CU(b));Da(a.H,CU(b));a.bg=0;}}else{c=a.bg;d=a.bC;if(d!==null){if(!c){e=new Oz;e.wn=a;e.tf=c;e.nP=d;e.q8=b;Bs(e);a.bC=e;}else{e=new OA;e.wL=a;e.sG=c;e.mP=d;e.s7=b;Bs(e);a.bC=e;}}else{if(!a.dL&&Md(a.H)){if(!c){d=new Ou;d.wH
=a;d.pe=b;Bs(d);a.bC=d;}else{d=new Ov;d.yE=a;d.pj=b;Bs(d);a.bC=d;}}else if(!c){d=new OB;d.vK=a;d.uR=b;d.r4=c;Bs(d);a.bC=d;}else{d=new Ot;d.r2=a;d.sL=b;d.rc=c;Bs(d);a.bC=d;}a.fa=1;}}}
function CZ(a,b){var c;c=a.bC;if(c!==null)return a.bg^c.k(b);return a.bg^Dw(a.H,b);}
function CU(a){if(!a.fa)return a.H;return null;}
function AIZ(a){return a.K;}
function AQI(a){var b,c;if(a.bC!==null)return a;b=CU(a);c=new Oy;c.v1=a;c.id=b;Bs(c);return Ev(c,a.bg);}
function AMZ(a){var b,c,d;b=new M;O(b);c=Hc(a.H,0);while(c>=0){In(b,Gs(c));BE(b,124);c=Hc(a.H,c+1|0);}d=b.P;if(d>0)WA(b,d-1|0);return N(b);}
function AJa(a){return a.gc;}
function Jh(){var a=this;Bq.call(a);a.yA=null;a.ye=null;}
function D4(){BD.call(this);this.J=null;}
function Dc(a,b,c,d){KS(a,c);a.J=b;a.hw=d;}
function ASr(a){return a.J;}
function APE(a,b){return !a.J.bW(b)&&!a.d.bW(b)?0:1;}
function AQ$(a,b){return 1;}
function AMu(a){var b;a.ci=1;b=a.d;if(b!==null&&!b.ci){b=b.fg();if(b!==null){a.d.ci=1;a.d=b;}a.d.ec();}b=a.J;if(b!==null){if(!b.ci){b=b.fg();if(b!==null){a.J.ci=1;a.J=b;}a.J.ec();}else if(b instanceof Gw&&b.eg.ka)a.J=b.d;}}
function C3(){D4.call(this);this.ba=null;}
function AUr(a,b,c){var d=new C3();EU(d,a,b,c);return d;}
function EU(a,b,c,d){Dc(a,b,c,d);a.ba=b;}
function AFv(a,b,c,d){var e,f;e=0;a:{while((b+a.ba.b1()|0)<=d.x){f=a.ba.bw(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.ba.b1()|0;e=e+(-1)|0;}return f;}
function E7(){C3.call(this);this.jq=null;}
function ATy(a,b,c,d){var e=new E7();Sy(e,a,b,c,d);return e;}
function Sy(a,b,c,d,e){EU(a,c,d,e);a.jq=b;}
function AGo(a,b,c,d){var e,f,g,h,i;e=a.jq;f=e.ey;g=e.eu;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.ba.b1()|0)>d.x)break a;i=a.ba.bw(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.ba.b1()|0;h=h+(-1)|0;}return i;}if((b+a.ba.b1()|0)>d.x){d.dh=1;return (-1);}i=a.ba.bw(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CQ=F(D4);
function AFO(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.J.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var EA=F(C3);
function AMc(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ASO(a,b){a.d=b;a.J.O(b);}
var WN=F(C3);
function ASa(a,b,c,d){while((b+a.ba.b1()|0)<=d.x&&a.ba.bw(b,c)>0){b=b+a.ba.b1()|0;}return a.d.c(b,c,d);}
function AMW(a,b,c,d){var e,f,g;e=a.d.ck(b,c,d);if(e<0)return (-1);f=e-a.ba.b1()|0;while(f>=b&&a.ba.bw(f,c)>0){g=f-a.ba.b1()|0;e=f;f=g;}return e;}
function Z(){var a=this;C.call(a);a.lH=null;a.kB=null;}
function ADn(a,b){if(!b&&a.lH===null)a.lH=a.C();else if(b&&a.kB===null)a.kB=Ev(a.C(),1);if(b)return a.kB;return a.lH;}
var Dd=F(BH);
function Nb(){var a=this;GL.call(a);a.ey=0;a.eu=0;}
function AM6(a){var b,c,d,e,f;b=a.ey;c=a.eu;d=c==2147483647?B(31):Mc(AD_(c));e=new M;O(e);BE(e,123);f=T(e,b);BE(f,44);BE(G(f,d),125);return N(e);}
var Oj=F(BD);
function ALo(a,b,c,d){return b;}
function ANS(a,b){return 0;}
function Xn(){var a=this;C.call(a);a.A=null;a.bt=0;}
function ASN(){var a=new Xn();AG6(a);return a;}
function AG6(a){a.A=BG(0);}
function LD(a,b){var c,d;c=b/32|0;if(b>=a.bt){Is(a,c+1|0);a.bt=b+1|0;}d=a.A.data;d[c]=d[c]|1<<(b%32|0);}
function HY(a,b,c){var d,e,f,g,h;d=BF(b,c);if(d>0){e=new By;W(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bt){Is(a,f+1|0);a.bt=c;}if(d==f){g=a.A.data;g[d]=g[d]|HJ(a,b)&If(a,c);}else{g=a.A.data;g[d]=g[d]|HJ(a,b);h=d+1|0;while(h<f){a.A.data[h]=(-1);h=h+1|0;}if(c&31){g=a.A.data;g[f]=g[f]|If(a,c);}}}
function HJ(a,b){return (-1)<<(b%32|0);}
function If(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Mx(a,b){var c,d;c=b/32|0;d=a.A.data;if(c<d.length){d[c]=d[c]&Kh((-2),b%32|0);if(b==(a.bt-1|0))G9(a);}}
function Dw(a,b){var c,d;c=b/32|0;d=a.A.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Hc(a,b){var c,d,e,f;c=a.bt;if(b>=c)return (-1);d=b/32|0;e=a.A.data;f=e[d]>>>(b%32|0)|0;if(f)return Im(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Im(e[f])|0;f=f+1|0;}return (-1);}
function Is(a,b){var c;c=a.A.data.length;if(c>=b)return;c=Be((b*3|0)/2|0,(c*2|0)+1|0);a.A=Mj(a.A,c);}
function G9(a){var b,c,d;b=(a.bt+31|0)/32|0;a.bt=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NT(a.A.data[c]);if(d<32)break;c=c+(-1)|0;a.bt=a.bt-32|0;}a.bt=a.bt-d|0;}}
function Da(a,b){var c,d,e,f;c=Bb(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]&b.A.data[d];d=d+1|0;}while(true){f=a.A.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bt=Bb(a.bt,b.bt);G9(a);}
function FU(a,b){var c,d,e;c=Bb(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]&(b.A.data[d]^(-1));d=d+1|0;}G9(a);}
function FN(a,b){var c,d,e;c=Be(a.bt,b.bt);a.bt=c;Is(a,(c+31|0)/32|0);c=Bb(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]|b.A.data[d];d=d+1|0;}}
function Fu(a,b){var c,d,e;c=Be(a.bt,b.bt);a.bt=c;Is(a,(c+31|0)/32|0);c=Bb(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]^b.A.data[d];d=d+1|0;}G9(a);}
function Md(a){return a.bt?0:1;}
function M2(){var a=this;BS.call(a);a.pn=null;a.v0=0;}
function Qo(){var a=this;BS.call(a);a.l6=null;a.lA=null;}
function ACY(a,b){var c=new Qo();AEF(c,a,b);return c;}
function AEF(a,b,c){BO(a);a.l6=b;a.lA=c;}
function AGj(a,b,c,d){var e,f,g,h,i;e=a.l6.c(b,c,d);if(e<0)a:{f=a.lA;g=d.cG;e=d.x;h=b+1|0;e=BF(h,e);if(e>0){d.dh=1;e=(-1);}else{i=L(c,b);if(!f.pn.k(i))e=(-1);else{if(CD(i)){if(e<0&&C4(L(c,h))){e=(-1);break a;}}else if(C4(i)&&b>g&&CD(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function ANx(a,b){a.d=b;a.lA.d=b;a.l6.O(b);}
function AGU(a,b){return 1;}
function AGC(a,b){return 1;}
function DC(){var a=this;BS.call(a);a.dE=null;a.xf=0;}
function ALi(a){var b=new DC();UK(b,a);return b;}
function UK(a,b){BO(a);a.dE=b.i2();a.xf=b.bg;}
function AIP(a,b,c,d){var e,f,g,h;e=d.x;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Hl(g,f)&&a.k(Ew(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AJo(a,b){return a.dE.k(b);}
function AGd(a,b){if(b instanceof DV)return Kl(a.dE,b.fC);if(b instanceof En)return Kl(a.dE,b.c_);if(b instanceof DC)return Ik(a.dE,b.dE);if(!(b instanceof Ei))return 1;return Ik(a.dE,b.eV);}
function ALc(a){return a.dE;}
function AQd(a,b){a.d=b;}
function AI4(a,b){return 1;}
var Je=F(DC);
function AKZ(a,b){return a.dE.k(GC(GA(b)));}
function ZK(){var a=this;BW.call(a);a.qm=null;a.w2=0;}
function AJZ(a){var b=new ZK();AM_(b,a);return b;}
function AM_(a,b){DB(a);a.qm=b.i2();a.w2=b.bg;}
function ALp(a,b,c){return !a.qm.k(EZ(Ez(L(c,b))))?(-1):1;}
function Ei(){var a=this;BW.call(a);a.eV=null;a.xA=0;}
function AQB(a){var b=new Ei();AOl(b,a);return b;}
function AOl(a,b){DB(a);a.eV=b.i2();a.xA=b.bg;}
function MA(a,b,c){return !a.eV.k(L(c,b))?(-1):1;}
function ANV(a,b){if(b instanceof En)return Kl(a.eV,b.c_);if(b instanceof Ei)return Ik(a.eV,b.eV);if(!(b instanceof DC)){if(!(b instanceof DV))return 1;return 0;}return Ik(a.eV,b.dE);}
function OS(){var a=this;BS.call(a);a.gB=null;a.lU=null;a.jn=0;}
function AQO(a,b){var c=new OS();AFQ(c,a,b);return c;}
function AFQ(a,b,c){BO(a);a.gB=b;a.jn=c;}
function AMb(a,b){a.d=b;}
function QA(a){if(a.lU===null)a.lU=FY(a.gB);return a.lU;}
function AFj(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.x;f=BG(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?E9([k,l]):E9([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.jn;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gB.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.jn==3){k=f[0];m=a.gB.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.jn==2){b=f[0];m=a.gB.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AGL(a,b){return b instanceof OS&&!Bn(QA(b),QA(a))?0:1;}
function AQN(a,b){return 1;}
function En(){BW.call(this);this.c_=0;}
function AAj(a){var b=new En();AOq(b,a);return b;}
function AOq(a,b){DB(a);a.c_=b;}
function AK$(a){return 1;}
function AJU(a,b,c){return a.c_!=L(c,b)?(-1):1;}
function AIK(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return HC(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=GH(c,a.c_,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ALe(a,b,c,d,e){var f;if(!(d instanceof Bv))return HR(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F4(d,a.c_,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AQE(a,b){if(b instanceof En)return b.c_!=a.c_?0:1;if(!(b instanceof Ei)){if(b instanceof DC)return b.k(a.c_);if(!(b instanceof DV))return 1;return 0;}return MA(b,0,Xo(a.c_))<=0?0:1;}
function AEq(){BW.call(this);this.mK=0;}
function AOR(a){var b=new AEq();AMT(b,a);return b;}
function AMT(a,b){DB(a);a.mK=EZ(Ez(b));}
function AFe(a,b,c){return a.mK!=EZ(Ez(L(c,b)))?(-1):1;}
function YT(){var a=this;BW.call(a);a.uG=0;a.nH=0;}
function AHd(a){var b=new YT();APe(b,a);return b;}
function APe(a,b){DB(a);a.uG=b;a.nH=Hv(b);}
function AFH(a,b,c){return a.uG!=L(c,b)&&a.nH!=L(c,b)?(-1):1;}
function Fg(){var a=this;BS.call(a);a.hl=0;a.kr=null;a.jV=null;a.jQ=0;}
function AVa(a,b){var c=new Fg();N7(c,a,b);return c;}
function N7(a,b,c){BO(a);a.hl=1;a.jV=b;a.jQ=c;}
function ART(a,b){a.d=b;}
function ANA(a,b,c,d){var e,f,g,h,i,j,k,l;e=BG(4);f=d.x;if(b>=f)return (-1);g=KD(a,b,c,f);h=b+a.hl|0;i=AEa(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dx(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=KD(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AEa(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.hl|0;if(h>=f){b=k;break a;}g=KD(a,h,c,f);b=k;}}}if(b!=a.jQ)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jV.data[g])break;g=g+1|0;}return (-1);}
function Xc(a){var b,c;if(a.kr===null){b=new M;O(b);c=0;while(c<a.jQ){In(b,Gs(a.jV.data[c]));c=c+1|0;}a.kr=N(b);}return a.kr;}
function KD(a,b,c,d){var e,f,g;a.hl=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Hl(e,f)){g=BQ(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CD(g[0])&&C4(g[1])?Ew(g[0],g[1]):g[0];a.hl=2;}}return e;}
function ALq(a,b){return b instanceof Fg&&!Bn(Xc(b),Xc(a))?0:1;}
function AON(a,b){return 1;}
var XK=F(Fg);
var Ud=F(Fg);
var YD=F(CQ);
function AHM(a,b,c,d){var e;while(true){e=a.J.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var PI=F(CQ);
function AMK(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.J.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FS=F(CQ);
function AP$(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.J.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function ARj(a,b){a.d=b;a.J.O(b);}
var Pm=F(FS);
function ALb(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AM7(a,b){a.d=b;}
function Fd(){var a=this;CQ.call(a);a.fP=null;a.dj=0;}
function AYY(a,b,c,d,e){var f=new Fd();Jc(f,a,b,c,d,e);return f;}
function Jc(a,b,c,d,e,f){Dc(a,c,d,e);a.fP=b;a.dj=f;}
function ASE(a,b,c,d){var e,f;e=M8(d,a.dj);if(!a.J.I(d))return a.d.c(b,c,d);if(e>=a.fP.eu)return a.d.c(b,c,d);f=a.dj;e=e+1|0;Ef(d,f,e);f=a.J.c(b,c,d);if(f>=0){Ef(d,a.dj,0);return f;}f=a.dj;e=e+(-1)|0;Ef(d,f,e);if(e>=a.fP.ey)return a.d.c(b,c,d);Ef(d,a.dj,0);return (-1);}
var Nl=F(Fd);
function AKr(a,b,c,d){var e,f,g;e=0;f=a.fP.eu;a:{while(true){g=a.J.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fP.ey)return (-1);return a.d.c(b,c,d);}
var RQ=F(CQ);
function AR0(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.J.c(b,c,d);}
var Qz=F(FS);
function AGX(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.J.c(b,c,d);return e;}
var Vj=F(Fd);
function AF5(a,b,c,d){var e,f,g;e=M8(d,a.dj);if(!a.J.I(d))return a.d.c(b,c,d);f=a.fP;if(e>=f.eu){Ef(d,a.dj,0);return a.d.c(b,c,d);}if(e<f.ey){Ef(d,a.dj,e+1|0);g=a.J.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Ef(d,a.dj,0);return g;}Ef(d,a.dj,e+1|0);g=a.J.c(b,c,d);}return g;}
var RS=F(D4);
function ASp(a,b,c,d){var e;e=d.x;if(e>b)return a.d.co(b,e,c,d);return a.d.c(b,c,d);}
function AQl(a,b,c,d){var e;e=d.x;if(a.d.co(b,e,c,d)>=0)return b;return (-1);}
function Os(){D4.call(this);this.kz=null;}
function ANY(a,b,c,d){var e,f;e=d.x;f=Vl(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.co(b,e,c,d);return a.d.c(b,c,d);}
function AFn(a,b,c,d){var e,f,g,h;e=d.x;f=a.d.ck(b,c,d);if(f<0)return (-1);g=Vl(a,f,e,c);if(g>=0)e=g;g=Be(f,a.d.co(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kz.hr(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Vl(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kz.hr(L(d,b)))break;b=b+1|0;}return b;}
var EN=F();
var AYZ=null;var AY0=null;function Pp(b){var c;if(!(b&1)){c=AY0;if(c!==null)return c;c=new VM;AY0=c;return c;}c=AYZ;if(c!==null)return c;c=new VL;AYZ=c;return c;}
var YE=F(C3);
function AF7(a,b,c,d){var e;a:{while(true){if((b+a.ba.b1()|0)>d.x)break a;e=a.ba.bw(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var WJ=F(EA);
function AMI(a,b,c,d){var e;if((b+a.ba.b1()|0)<=d.x){e=a.ba.bw(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var Pa=F(E7);
function APJ(a,b,c,d){var e,f,g,h,i;e=a.jq;f=e.ey;g=e.eu;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.ba.b1()|0)>d.x)break a;i=a.ba.bw(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.ba.b1()|0)>d.x){d.dh=1;return (-1);}i=a.ba.bw(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qt=F(C3);
function ANP(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.ba.b1()|0)<=d.x){e=a.ba.bw(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Us=F(EA);
function AGc(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.J.c(b,c,d);}
var Rp=F(E7);
function APZ(a,b,c,d){var e,f,g,h,i,j;e=a.jq;f=e.ey;g=e.eu;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.ba.b1()|0)<=d.x){i=a.ba.bw(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.ba.b1()|0)>d.x){d.dh=1;return (-1);}j=a.ba.bw(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Ku=F(BD);
function ALJ(a,b,c,d){if(b&&!(d.fb&&b==d.cG))return (-1);return a.d.c(b,c,d);}
function AKI(a,b){return 0;}
function AAs(){BD.call(this);this.t$=0;}
function AQz(a){var b=new AAs();AK5(b,a);return b;}
function AK5(a,b){BO(a);a.t$=b;}
function AGA(a,b,c,d){var e,f,g;e=b<d.x?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.iT?0:d.cG;return (e!=32&&!QD(a,e,b,g,c)?0:1)^(f!=32&&!QD(a,f,b-1|0,g,c)?0:1)^a.t$?(-1):a.d.c(b,c,d);}
function AGJ(a,b){return 0;}
function QD(a,b,c,d,e){var f;if(!Jy(b)&&b!=95){a:{if(Cw(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(Jy(f))return 0;if(Cw(f)!=6)return 1;}}return 1;}return 0;}
var Oo=F(BD);
function AK3(a,b,c,d){if(b!=d.hx)return (-1);return a.d.c(b,c,d);}
function ASy(a,b){return 0;}
function Xp(){BD.call(this);this.fX=0;}
function AUE(a){var b=new Xp();ADY(b,a);return b;}
function ADY(a,b){BO(a);a.fX=b;}
function AOx(a,b,c,d){var e,f,g;e=!d.fb?I(c):d.x;if(b>=e){BK(d,a.fX,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BK(d,a.fX,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BK(d,a.fX,0);return a.d.c(b,c,d);}
function AHA(a,b){var c;c=!Dl(b,a.fX)?0:1;BK(b,a.fX,(-1));return c;}
var W9=F(BD);
function ANt(a,b,c,d){if(b<(d.iT?I(c):d.x))return (-1);d.dh=1;d.x0=1;return a.d.c(b,c,d);}
function AFb(a,b){return 0;}
function Nx(){BD.call(this);this.ri=null;}
function AHp(a,b,c,d){a:{if(b!=d.x){if(!b)break a;if(d.fb&&b==d.cG)break a;if(a.ri.sI(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AJC(a,b){return 0;}
var AEg=F(BS);
function AUX(){var a=new AEg();ANg(a);return a;}
function ANg(a){BO(a);}
function AR7(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dh=1;return (-1);}g=L(c,b);if(CD(g)){h=b+2|0;if(h<=e&&Hl(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AGN(a,b){a.d=b;}
function ANa(a){return (-2147483602);}
function AGM(a,b){return 1;}
function ZS(){BS.call(this);this.k4=null;}
function AUx(a){var b=new ZS();AHy(b,a);return b;}
function AHy(a,b){BO(a);a.k4=b;}
function ANj(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dh=1;return (-1);}g=L(c,b);if(CD(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Hl(g,h))return a.k4.hr(Ew(g,h))?(-1):a.d.c(b,c,d);}}return a.k4.hr(g)?(-1):a.d.c(f,c,d);}
function APr(a,b){a.d=b;}
function AE$(a){return (-2147483602);}
function ASf(a,b){return 1;}
function AD9(){BD.call(this);this.hb=0;}
function AT1(a){var b=new AD9();AJx(b,a);return b;}
function AJx(a,b){BO(a);a.hb=b;}
function ALu(a,b,c,d){var e;e=!d.fb?I(c):d.x;if(b>=e){BK(d,a.hb,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BK(d,a.hb,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AJv(a,b){var c;c=!Dl(b,a.hb)?0:1;BK(b,a.hb,(-1));return c;}
function ACg(){BD.call(this);this.hk=0;}
function ATM(a){var b=new ACg();AJ0(b,a);return b;}
function AJ0(a,b){BO(a);a.hk=b;}
function ANr(a,b,c,d){if((!d.fb?I(c)-b|0:d.x-b|0)<=0){BK(d,a.hk,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BK(d,a.hk,1);return a.d.c(b+1|0,c,d);}
function AJl(a,b){var c;c=!Dl(b,a.hk)?0:1;BK(b,a.hk,(-1));return c;}
function YQ(){BD.call(this);this.fs=0;}
function AS4(a){var b=new YQ();ASG(b,a);return b;}
function ASG(a,b){BO(a);a.fs=b;}
function AKw(a,b,c,d){var e,f,g;e=!d.fb?I(c)-b|0:d.x-b|0;if(!e){BK(d,a.fs,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BK(d,a.fs,0);return a.d.c(b,c,d);case 13:if(g!=10){BK(d,a.fs,0);return a.d.c(b,c,d);}BK(d,a.fs,0);return a.d.c(b,c,d);default:}return (-1);}
function AHF(a,b){var c;c=!Dl(b,a.fs)?0:1;BK(b,a.fs,(-1));return c;}
function G6(){var a=this;BS.call(a);a.ne=0;a.gw=0;}
function AU7(a,b){var c=new G6();O2(c,a,b);return c;}
function O2(a,b,c){BO(a);a.ne=b;a.gw=c;}
function AF9(a,b,c,d){var e,f,g,h;e=Ga(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=0;while(true){if(f>=I(e)){BK(d,a.gw,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Hv(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AOH(a,b){a.d=b;}
function Ga(a,b){var c,d;c=a.ne;d=FE(b,c);c=Iw(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.k6)?Cb(b.k6,d,c):null;}
function AO7(a,b){var c;c=!Dl(b,a.gw)?0:1;BK(b,a.gw,(-1));return c;}
var AEc=F(G6);
function AS_(a,b){var c=new AEc();AQ_(c,a,b);return c;}
function AQ_(a,b,c){O2(a,b,c);}
function AHL(a,b,c,d){var e,f;e=Ga(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=!UJ(c,e,b)?(-1):I(e);if(f<0)return (-1);BK(d,a.gw,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AQZ(a,b,c,d){var e,f;e=Ga(a,d);f=d.cG;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=AAr(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AFW(a,b,c,d,e){var f,g;f=Ga(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PT(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AMA(a,b){return 1;}
var ABg=F(G6);
function ATN(a,b){var c=new ABg();AJu(c,a,b);return c;}
function AJu(a,b,c){O2(a,b,c);}
function AL2(a,b,c,d){var e,f;e=Ga(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=0;while(true){if(f>=I(e)){BK(d,a.gw,I(e));return a.d.c(b+I(e)|0,c,d);}if(EZ(Ez(L(e,f)))!=EZ(Ez(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Oi=F(Gk);
function AJb(a,b,c,d,e){Nc(a,b,c,d,e);return a;}
function AGE(a,b,c,d){Xy(a,b,c,d);return a;}
function AG5(a,b){JD(a,b);}
function AQo(a,b,c){XS(a,b,c);return a;}
function R0(){var a=this;BW.call(a);a.cp=null;a.kt=null;a.lg=null;}
function AH_(a,b,c){return !Ks(a,c,b)?(-1):a.bK;}
function AGv(a,b,c,d){var e,f,g;e=d.x;while(true){if(b>e)return (-1);f=L(a.cp,a.bK-1|0);a:{while(true){g=a.bK;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Ks(a,c,b))break;b=b+S6(a.kt,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bK|0,c,d)>=0)break;b=b+1|0;}return b;}
function AJz(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.cp,0);g=(I(d)-c|0)-a.bK|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Ks(a,d,c))break;c=c-S6(a.lg,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bK|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJ7(a,b){var c;if(b instanceof En)return b.c_!=L(a.cp,0)?0:1;if(b instanceof Ei)return MA(b,0,Cb(a.cp,0,1))<=0?0:1;if(!(b instanceof DC)){if(!(b instanceof DV))return 1;return I(a.cp)>1&&b.fC==Ew(L(a.cp,0),L(a.cp,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.cp,0))){if(I(a.cp)<=1)break b;if(!b.k(Ew(L(a.cp,0),L(a.cp,1))))break b;}c=1;break a;}c=0;}return c;}
function Ks(a,b,c){var d;d=0;while(d<a.bK){if(L(b,d+c|0)!=L(a.cp,d))return 0;d=d+1|0;}return 1;}
function YP(){BW.call(this);this.iX=null;}
function AU$(a){var b=new YP();AQG(b,a);return b;}
function AQG(a,b){var c,d,e;DB(a);c=new M;O(c);d=0;while(true){e=BF(d,b.P);if(e>=0){a.iX=N(c);a.bK=c.P;return;}if(d<0)break;if(e>=0)break;BE(c,EZ(Ez(b.B.data[d])));d=d+1|0;}b=new By;W(b);J(b);}
function AL$(a,b,c){var d;d=0;while(true){if(d>=I(a.iX))return I(a.iX);if(L(a.iX,d)!=EZ(Ez(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Nr(){BW.call(this);this.g$=null;}
function APL(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.g$))return I(a.g$);e=L(a.g$,d);f=b+d|0;if(e!=L(c,f)&&Hv(L(a.g$,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var G5=F();
var AY1=null;var AY2=null;var AYX=null;function APh(){APh=Bm(G5);AIv();}
function AIv(){AY1=AUO();AY2=ATU();AYX=H($rt_arraycls(C),[H(C,[B(414),AU8()]),H(C,[B(415),AS1()]),H(C,[B(416),AUL()]),H(C,[B(417),AUS()]),H(C,[B(418),AY2]),H(C,[B(419),AT5()]),H(C,[B(420),ATS()]),H(C,[B(421),ATe()]),H(C,[B(422),AS$()]),H(C,[B(423),ATl()]),H(C,[B(424),ATA()]),H(C,[B(425),ATi()]),H(C,[B(426),AUq()]),H(C,[B(427),ASV()]),H(C,[B(428),AUP()]),H(C,[B(429),ATz()]),H(C,[B(430),AT3()]),H(C,[B(431),ATx()]),H(C,[B(432),AT4()]),H(C,[B(433),ATo()]),H(C,[B(434),AUW()]),H(C,[B(435),ATs()]),H(C,[B(436),AT9()]),
H(C,[B(437),AUJ()]),H(C,[B(438),AUF()]),H(C,[B(439),AUT()]),H(C,[B(440),ATn()]),H(C,[B(441),AUv()]),H(C,[B(442),AY1]),H(C,[B(443),AUd()]),H(C,[B(444),ATf()]),H(C,[B(445),AY1]),H(C,[B(446),AST()]),H(C,[B(447),AY2]),H(C,[B(448),ATH()]),H(C,[B(449),P(0,127)]),H(C,[B(450),P(128,255)]),H(C,[B(451),P(256,383)]),H(C,[B(452),P(384,591)]),H(C,[B(453),P(592,687)]),H(C,[B(454),P(688,767)]),H(C,[B(455),P(768,879)]),H(C,[B(456),P(880,1023)]),H(C,[B(457),P(1024,1279)]),H(C,[B(458),P(1280,1327)]),H(C,[B(459),P(1328,1423)]),
H(C,[B(460),P(1424,1535)]),H(C,[B(461),P(1536,1791)]),H(C,[B(462),P(1792,1871)]),H(C,[B(463),P(1872,1919)]),H(C,[B(464),P(1920,1983)]),H(C,[B(465),P(2304,2431)]),H(C,[B(466),P(2432,2559)]),H(C,[B(467),P(2560,2687)]),H(C,[B(468),P(2688,2815)]),H(C,[B(469),P(2816,2943)]),H(C,[B(470),P(2944,3071)]),H(C,[B(471),P(3072,3199)]),H(C,[B(472),P(3200,3327)]),H(C,[B(473),P(3328,3455)]),H(C,[B(474),P(3456,3583)]),H(C,[B(475),P(3584,3711)]),H(C,[B(476),P(3712,3839)]),H(C,[B(477),P(3840,4095)]),H(C,[B(478),P(4096,4255)]),
H(C,[B(479),P(4256,4351)]),H(C,[B(480),P(4352,4607)]),H(C,[B(481),P(4608,4991)]),H(C,[B(482),P(4992,5023)]),H(C,[B(483),P(5024,5119)]),H(C,[B(484),P(5120,5759)]),H(C,[B(485),P(5760,5791)]),H(C,[B(486),P(5792,5887)]),H(C,[B(487),P(5888,5919)]),H(C,[B(488),P(5920,5951)]),H(C,[B(489),P(5952,5983)]),H(C,[B(490),P(5984,6015)]),H(C,[B(491),P(6016,6143)]),H(C,[B(492),P(6144,6319)]),H(C,[B(493),P(6400,6479)]),H(C,[B(494),P(6480,6527)]),H(C,[B(495),P(6528,6623)]),H(C,[B(496),P(6624,6655)]),H(C,[B(497),P(6656,6687)]),
H(C,[B(498),P(7424,7551)]),H(C,[B(499),P(7552,7615)]),H(C,[B(500),P(7616,7679)]),H(C,[B(501),P(7680,7935)]),H(C,[B(502),P(7936,8191)]),H(C,[B(503),P(8192,8303)]),H(C,[B(504),P(8304,8351)]),H(C,[B(505),P(8352,8399)]),H(C,[B(506),P(8400,8447)]),H(C,[B(507),P(8448,8527)]),H(C,[B(508),P(8528,8591)]),H(C,[B(509),P(8592,8703)]),H(C,[B(510),P(8704,8959)]),H(C,[B(511),P(8960,9215)]),H(C,[B(512),P(9216,9279)]),H(C,[B(513),P(9280,9311)]),H(C,[B(514),P(9312,9471)]),H(C,[B(515),P(9472,9599)]),H(C,[B(516),P(9600,9631)]),
H(C,[B(517),P(9632,9727)]),H(C,[B(518),P(9728,9983)]),H(C,[B(519),P(9984,10175)]),H(C,[B(520),P(10176,10223)]),H(C,[B(521),P(10224,10239)]),H(C,[B(522),P(10240,10495)]),H(C,[B(523),P(10496,10623)]),H(C,[B(524),P(10624,10751)]),H(C,[B(525),P(10752,11007)]),H(C,[B(526),P(11008,11263)]),H(C,[B(527),P(11264,11359)]),H(C,[B(528),P(11392,11519)]),H(C,[B(529),P(11520,11567)]),H(C,[B(530),P(11568,11647)]),H(C,[B(531),P(11648,11743)]),H(C,[B(532),P(11776,11903)]),H(C,[B(533),P(11904,12031)]),H(C,[B(534),P(12032,12255)]),
H(C,[B(535),P(12272,12287)]),H(C,[B(536),P(12288,12351)]),H(C,[B(537),P(12352,12447)]),H(C,[B(538),P(12448,12543)]),H(C,[B(539),P(12544,12591)]),H(C,[B(540),P(12592,12687)]),H(C,[B(541),P(12688,12703)]),H(C,[B(542),P(12704,12735)]),H(C,[B(543),P(12736,12783)]),H(C,[B(544),P(12784,12799)]),H(C,[B(545),P(12800,13055)]),H(C,[B(546),P(13056,13311)]),H(C,[B(547),P(13312,19893)]),H(C,[B(548),P(19904,19967)]),H(C,[B(549),P(19968,40959)]),H(C,[B(550),P(40960,42127)]),H(C,[B(551),P(42128,42191)]),H(C,[B(552),P(42752,
42783)]),H(C,[B(553),P(43008,43055)]),H(C,[B(554),P(44032,55203)]),H(C,[B(555),P(55296,56191)]),H(C,[B(556),P(56192,56319)]),H(C,[B(557),P(56320,57343)]),H(C,[B(558),P(57344,63743)]),H(C,[B(559),P(63744,64255)]),H(C,[B(560),P(64256,64335)]),H(C,[B(561),P(64336,65023)]),H(C,[B(562),P(65024,65039)]),H(C,[B(563),P(65040,65055)]),H(C,[B(564),P(65056,65071)]),H(C,[B(565),P(65072,65103)]),H(C,[B(566),P(65104,65135)]),H(C,[B(567),P(65136,65279)]),H(C,[B(568),P(65280,65519)]),H(C,[B(569),P(0,1114111)]),H(C,[B(570),
ATj()]),H(C,[B(571),BM(0,1)]),H(C,[B(572),IT(62,1)]),H(C,[B(573),BM(1,1)]),H(C,[B(574),BM(2,1)]),H(C,[B(575),BM(3,0)]),H(C,[B(576),BM(4,0)]),H(C,[B(577),BM(5,1)]),H(C,[B(578),IT(448,1)]),H(C,[B(579),BM(6,1)]),H(C,[B(580),BM(7,0)]),H(C,[B(581),BM(8,1)]),H(C,[B(582),IT(3584,1)]),H(C,[B(583),BM(9,1)]),H(C,[B(584),BM(10,1)]),H(C,[B(585),BM(11,1)]),H(C,[B(586),IT(28672,0)]),H(C,[B(587),BM(12,0)]),H(C,[B(588),BM(13,0)]),H(C,[B(589),BM(14,0)]),H(C,[B(590),ATO(983040,1,1)]),H(C,[B(591),BM(15,0)]),H(C,[B(592),BM(16,
1)]),H(C,[B(593),BM(18,1)]),H(C,[B(594),AT0(19,0,1)]),H(C,[B(595),IT(1643118592,1)]),H(C,[B(596),BM(20,0)]),H(C,[B(597),BM(21,0)]),H(C,[B(598),BM(22,0)]),H(C,[B(599),BM(23,0)]),H(C,[B(600),BM(24,1)]),H(C,[B(601),IT(2113929216,1)]),H(C,[B(602),BM(25,1)]),H(C,[B(603),BM(26,0)]),H(C,[B(604),BM(27,0)]),H(C,[B(605),BM(28,1)]),H(C,[B(606),BM(29,0)]),H(C,[B(607),BM(30,0)])]);}
function MI(){BW.call(this);this.qK=0;}
function APS(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.qK!=GC(GA(Ew(e,d)))?(-1):2;}
function K5(){BS.call(this);this.f$=0;}
function ANf(a){var b=new K5();AG0(b,a);return b;}
function AG0(a,b){BO(a);a.f$=b;}
function ANJ(a,b){a.d=b;}
function AHB(a,b,c,d){var e,f;e=b+1|0;if(e>d.x){d.dh=1;return (-1);}f=L(c,b);if(b>d.cG&&CD(L(c,b-1|0)))return (-1);if(a.f$!=f)return (-1);return a.d.c(e,c,d);}
function AJ5(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return HC(a,b,c,d);e=d.cG;f=d.x;while(true){if(b>=f)return (-1);g=GH(c,a.f$,b);if(g<0)return (-1);if(g>e&&CD(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AIh(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HR(a,b,c,d,e);f=e.cG;a:{while(true){if(c<b)return (-1);g=F4(d,a.f$,c);if(g<0)break a;if(g<b)break a;if(g>f&&CD(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFU(a,b){if(b instanceof En)return 0;if(b instanceof Ei)return 0;if(b instanceof DC)return 0;if(b instanceof DV)return 0;if(b instanceof Lp)return 0;if(!(b instanceof K5))return 1;return b.f$!=a.f$?0:1;}
function AQv(a,b){return 1;}
function Lp(){BS.call(this);this.fL=0;}
function AKA(a){var b=new Lp();ANn(b,a);return b;}
function ANn(a,b){BO(a);a.fL=b;}
function AG4(a,b){a.d=b;}
function AFu(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;g=BF(f,e);if(g>0){d.dh=1;return (-1);}h=L(c,b);if(g<0&&C4(L(c,f)))return (-1);if(a.fL!=h)return (-1);return a.d.c(f,c,d);}
function AN9(a,b,c,d){var e,f;if(!(c instanceof Bv))return HC(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=GH(c,a.fL,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C4(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function APK(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HR(a,b,c,d,e);f=e.x;a:{while(true){if(c<b)return (-1);g=F4(d,a.fL,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C4(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AIa(a,b){if(b instanceof En)return 0;if(b instanceof Ei)return 0;if(b instanceof DC)return 0;if(b instanceof DV)return 0;if(b instanceof K5)return 0;if(!(b instanceof Lp))return 1;return b.fL!=a.fL?0:1;}
function AOi(a,b){return 1;}
function DV(){var a=this;BW.call(a);a.jH=0;a.ia=0;a.fC=0;}
function AO8(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.jH==e&&a.ia==d?2:(-1);}
function AM0(a,b,c,d){var e,f;if(!(c instanceof Bv))return HC(a,b,c,d);e=d.x;while(b<e){b=GH(c,a.jH,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.ia==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AG2(a,b,c,d,e){var f;if(!(d instanceof Bv))return HR(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F4(d,a.ia,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jH==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AOS(a,b){if(b instanceof DV)return b.fC!=a.fC?0:1;if(b instanceof DC)return b.k(a.fC);if(b instanceof En)return 0;if(!(b instanceof Ei))return 1;return 0;}
var VL=F(EN);
function AHe(a,b){return b!=10?0:1;}
function AO0(a,b,c){return b!=10?0:1;}
var VM=F(EN);
function AP2(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ARN(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AC$(){var a=this;C.call(a);a.ms=null;a.jX=null;a.gO=0;a.vn=0;}
function AM$(a){var b=new AC$();AK1(b,a);return b;}
function AK1(a,b){var c,d;while(true){c=a.gO;if(b<c)break;a.gO=c<<1|1;}d=c<<1|1;a.gO=d;d=d+1|0;a.ms=BG(d);a.jX=BG(d);a.vn=b;}
function Rt(a,b,c){var d,e,f,g;d=0;e=a.gO;f=b&e;while(true){g=a.ms.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jX.data[f]=c;}
function S6(a,b){var c,d,e,f;c=a.gO;d=b&c;e=0;while(true){f=a.ms.data[d];if(!f)break;if(f==b)return a.jX.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.vn;}
var Y7=F();
var K3=F(Z);
function AUO(){var a=new K3();AKs(a);return a;}
function AKs(a){}
function ABo(a){return Cx(BT(Dm(),9,13),32);}
var J4=F(Z);
function ATU(){var a=new J4();AQr(a);return a;}
function AQr(a){}
function AB_(a){return BT(Dm(),48,57);}
var AC4=F(Z);
function AU8(){var a=new AC4();AJK(a);return a;}
function AJK(a){}
function APu(a){return BT(Dm(),97,122);}
var ADA=F(Z);
function AS1(){var a=new ADA();AK8(a);return a;}
function AK8(a){}
function AQx(a){return BT(Dm(),65,90);}
var ADF=F(Z);
function AUL(){var a=new ADF();AGx(a);return a;}
function AGx(a){}
function AIQ(a){return BT(Dm(),0,127);}
var KZ=F(Z);
function AUS(){var a=new KZ();AHO(a);return a;}
function AHO(a){}
function ZX(a){return BT(BT(Dm(),97,122),65,90);}
var LA=F(KZ);
function AT5(){var a=new LA();AKH(a);return a;}
function AKH(a){}
function AAT(a){return BT(ZX(a),48,57);}
var AEX=F(Z);
function ATS(){var a=new AEX();AMO(a);return a;}
function AMO(a){}
function AJ3(a){return BT(BT(BT(Dm(),33,64),91,96),123,126);}
var Mz=F(LA);
function ATe(){var a=new Mz();AOC(a);return a;}
function AOC(a){}
function YL(a){return BT(BT(BT(AAT(a),33,64),91,96),123,126);}
var ABC=F(Mz);
function AS$(){var a=new ABC();AQi(a);return a;}
function AQi(a){}
function AMv(a){return Cx(YL(a),32);}
var AB3=F(Z);
function ATl(){var a=new AB3();APM(a);return a;}
function APM(a){}
function AH3(a){return Cx(Cx(Dm(),32),9);}
var AAm=F(Z);
function ATA(){var a=new AAm();ARA(a);return a;}
function ARA(a){}
function AMs(a){return Cx(BT(Dm(),0,31),127);}
var Z5=F(Z);
function ATi(){var a=new Z5();AGI(a);return a;}
function AGI(a){}
function ARP(a){return BT(BT(BT(Dm(),48,57),97,102),65,70);}
var ADJ=F(Z);
function AUq(){var a=new ADJ();AGn(a);return a;}
function AGn(a){}
function AM8(a){var b;b=new Tm;b.xe=a;Bs(b);b.L=1;return b;}
var AE9=F(Z);
function ASV(){var a=new AE9();AOY(a);return a;}
function AOY(a){}
function AFl(a){var b;b=new MX;b.xo=a;Bs(b);b.L=1;return b;}
var AC_=F(Z);
function AUP(){var a=new AC_();AGy(a);return a;}
function AGy(a){}
function AKB(a){var b;b=new Sh;b.wZ=a;Bs(b);return b;}
var ACZ=F(Z);
function ATz(){var a=new ACZ();AMt(a);return a;}
function AMt(a){}
function APa(a){var b;b=new Sg;b.wI=a;Bs(b);return b;}
var AD1=F(Z);
function AT3(){var a=new AD1();AHJ(a);return a;}
function AHJ(a){}
function AHZ(a){var b;b=new Xf;b.x7=a;Bs(b);HY(b.K,0,2048);b.L=1;return b;}
var Zp=F(Z);
function ATx(){var a=new Zp();AG_(a);return a;}
function AG_(a){}
function AIp(a){var b;b=new O5;b.xB=a;Bs(b);b.L=1;return b;}
var Y4=F(Z);
function AT4(){var a=new Y4();AL7(a);return a;}
function AL7(a){}
function ARJ(a){var b;b=new Oc;b.yB=a;Bs(b);b.L=1;return b;}
var ADf=F(Z);
function ATo(){var a=new ADf();AMP(a);return a;}
function AMP(a){}
function AFf(a){var b;b=new QQ;b.xg=a;Bs(b);return b;}
var ADr=F(Z);
function AUW(){var a=new ADr();AKg(a);return a;}
function AKg(a){}
function ALy(a){var b;b=new MQ;b.vT=a;Bs(b);b.L=1;return b;}
var AAL=F(Z);
function ATs(){var a=new AAL();AFX(a);return a;}
function AFX(a){}
function AIz(a){var b;b=new MV;b.xE=a;Bs(b);b.L=1;return b;}
var AB8=F(Z);
function AT9(){var a=new AB8();AHi(a);return a;}
function AHi(a){}
function AJE(a){var b;b=new NX;b.x4=a;Bs(b);b.L=1;return b;}
var AEC=F(Z);
function AUJ(){var a=new AEC();ALD(a);return a;}
function ALD(a){}
function ALA(a){var b;b=new Ps;b.ym=a;Bs(b);b.L=1;return b;}
var ADq=F(Z);
function AUF(){var a=new ADq();AM5(a);return a;}
function AM5(a){}
function AQQ(a){var b;b=new PB;b.w1=a;Bs(b);return b;}
var ABd=F(Z);
function AUT(){var a=new ABd();AHb(a);return a;}
function AHb(a){}
function AOs(a){var b;b=new T_;b.xK=a;Bs(b);return b;}
var AAJ=F(Z);
function ATn(){var a=new AAJ();APd(a);return a;}
function APd(a){}
function AM3(a){var b;b=new SV;b.vX=a;Bs(b);b.L=1;return b;}
var AE4=F(Z);
function AUv(){var a=new AE4();AKa(a);return a;}
function AKa(a){}
function APn(a){var b;b=new M_;b.yQ=a;Bs(b);b.L=1;return b;}
var Jq=F(Z);
function AUd(){var a=new Jq();AIH(a);return a;}
function AIH(a){}
function AB5(a){return Cx(BT(BT(BT(Dm(),97,122),65,90),48,57),95);}
var AD3=F(Jq);
function ATf(){var a=new AD3();AKl(a);return a;}
function AKl(a){}
function AMR(a){var b;b=Ev(AB5(a),1);b.L=1;return b;}
var ABH=F(K3);
function AST(){var a=new ABH();ARl(a);return a;}
function ARl(a){}
function AGu(a){var b;b=Ev(ABo(a),1);b.L=1;return b;}
var AAC=F(J4);
function ATH(){var a=new AAC();ALn(a);return a;}
function ALn(a){}
function AJQ(a){var b;b=Ev(AB_(a),1);b.L=1;return b;}
function AAa(){var a=this;Z.call(a);a.qw=0;a.rd=0;}
function P(a,b){var c=new AAa();ARH(c,a,b);return c;}
function ARH(a,b,c){a.qw=b;a.rd=c;}
function ALP(a){return BT(Dm(),a.qw,a.rd);}
var AAw=F(Z);
function ATj(){var a=new AAw();ARW(a);return a;}
function ARW(a){}
function ARu(a){return BT(BT(Dm(),65279,65279),65520,65533);}
function ABw(){var a=this;Z.call(a);a.lY=0;a.jO=0;a.oI=0;}
function BM(a,b){var c=new ABw();AHE(c,a,b);return c;}
function AT0(a,b,c){var d=new ABw();ARI(d,a,b,c);return d;}
function AHE(a,b,c){a.jO=c;a.lY=b;}
function ARI(a,b,c,d){a.oI=d;a.jO=c;a.lY=b;}
function AJf(a){var b;b=AU3(a.lY);if(a.oI)HY(b.K,0,2048);b.L=a.jO;return b;}
function ABD(){var a=this;Z.call(a);a.lX=0;a.jZ=0;a.np=0;}
function IT(a,b){var c=new ABD();AIA(c,a,b);return c;}
function ATO(a,b,c){var d=new ABD();AFi(d,a,b,c);return d;}
function AIA(a,b,c){a.jZ=c;a.lX=b;}
function AFi(a,b,c,d){a.np=d;a.jZ=c;a.lX=b;}
function AFg(a){var b;b=new Sa;ACJ(b,a.lX);if(a.np)HY(b.K,0,2048);b.L=a.jZ;return b;}
var AAh=F();
var ZI=F();
function ABb(b){var c,d,e,f,g,h,i;c=APy(Gv(b));d=JQ(c);e=BG(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+JQ(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Nk(c);h=h+1|0;}return e;}
function KK(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Ny(){var a=this;C.call(a);a.pm=0;a.rA=0;a.pz=null;}
function AJd(a,b,c){var d=new Ny();AQh(d,a,b,c);return d;}
function AQh(a,b,c,d){a.pm=b;a.rA=c;a.pz=d;}
function ADl(){var a=this;C.call(a);a.n8=null;a.qH=0;}
function APy(a){var b=new ADl();AId(b,a);return b;}
function AId(a,b){a.n8=b;}
var ABa=F();
function JQ(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.n8.data;f=b.qH;b.qH=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+X(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Nk(b){var c,d;c=JQ(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function ZU(){C.call(this);this.Ip=null;}
function TQ(){C.call(this);this.nK=null;}
function ASA(a,b){var c,d,e,f;c=b.data;b=a.nK;d=D_(c[0]);e=FL(c[1]);ABQ(b.e.f,d,e);Gu(Co(b),AXh);F7(Co(b));f=Kw(FH(),b.eR);b=new M;O(b);G(HU(G(b,B(608)),f),B(199));$rt_globals.console.info($rt_ustr(N(b)));}
function Ry(){C.call(this);this.rb=null;}
function AJc(a,b){KO(a.rb,b);}
var Ze=F();
function AEG(b){var c,d,e,f,g,h,i,j,k,l;c=new Wp;c.lj=0;c.gV=BG(16);c.eX=0;d=Ca(b);HQ(c,d);e=0;f=0;while(f<d){g=B1(b,f);h=g.o.data.length;HQ(c,h);i=0;while(i<h){j=NH(g,i);k=Mr(j);HQ(c,e);HQ(c,k);e=e+Mr(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}d=c.lj;if(d&&c.eX!=d){b=EY();d=c.lj;e=c.eX;j=new M;O(j);G(T(G(T(G(j,B(403)),d),B(609)),e),B(610));Br(b,N(j));}l=c.gV;d=l.data.length;e=c.eX;if(d!=e)l=Mj(l,e);return l;}
function ADs(b){var c,d,e,f,g,h,i,j,k;c=BC(b);d=R(H3,c);e=d.data;f=0;while(f<c){a:{g=BC(b);if(g!=(-1)){h=BC(b);i=BC(b);if(i==(-1)){j=new H3;j.fR=h;e[g]=j;}else{j=new H3;j.fR=h;j.li=BG(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].li.data[k]=BC(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function Rx(){C.call(this);this.ux=null;}
function APb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.ux;d=D_(c[0]);c=AD8(d);e=new Q4;d=ADs(c);f=ADs(c);g=BC(c);h=R(L5,g);i=h.data;j=0;while(j<g){k=BC(c);l=BC(c);m=BC(c);n=BC(c);o=BC(c);p=new L5;p.jk=k;p.sk=l;p.jj=m;p.rm=n;p.v3=o;i[j]=p;j=j+1|0;}e.xj=d;e.rq=f;e.ir=h;b.hn=e;Lv(b.F,d);Lv(b.E,b.hn.rq);}
function PU(){var a=this;C.call(a);a.yi=null;a.yj=null;a.yk=null;}
function QB(){var a=this;C.call(a);a.xw=null;a.xv=null;}
function WL(){var a=this;U.call(a);a.nS=null;a.yb=null;}
function AIY(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cf^Dw(a.nS,c):0;}
function WK(){var a=this;U.call(a);a.tF=null;a.up=null;a.xP=null;}
function AFK(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cf^Dw(a.tF,c):0;return a.up.k(b)&&!d?1:0;}
function Oy(){var a=this;U.call(a);a.id=null;a.v1=null;}
function ALF(a,b){return a.bg^Dw(a.id,b);}
function AJG(a){var b,c,d;b=new M;O(b);c=Hc(a.id,0);while(c>=0){In(b,Gs(c));BE(b,124);c=Hc(a.id,c+1|0);}d=b.P;if(d>0)WA(b,d-1|0);return N(b);}
function OE(){var a=this;U.call(a);a.qZ=null;a.xm=null;}
function AO_(a,b){return a.qZ.k(b);}
function OC(){var a=this;U.call(a);a.jR=0;a.ov=null;a.kD=null;}
function APR(a,b){return !(a.jR^Dw(a.kD.H,b))&&!(a.jR^a.kD.dL^a.ov.k(b))?0:1;}
function OD(){var a=this;U.call(a);a.jY=0;a.t3=null;a.lx=null;}
function AL9(a,b){return !(a.jY^Dw(a.lx.H,b))&&!(a.jY^a.lx.dL^a.t3.k(b))?1:0;}
function OH(){var a=this;U.call(a);a.uV=0;a.t9=null;a.tY=null;a.wo=null;}
function AIu(a,b){return a.uV^(!a.t9.k(b)&&!a.tY.k(b)?0:1);}
function OI(){var a=this;U.call(a);a.ra=0;a.qP=null;a.p3=null;a.yI=null;}
function AE_(a,b){return a.ra^(!a.qP.k(b)&&!a.p3.k(b)?0:1)?0:1;}
function OF(){var a=this;U.call(a);a.pG=null;a.yO=null;}
function AJL(a,b){return CZ(a.pG,b);}
function OG(){var a=this;U.call(a);a.ul=null;a.wD=null;}
function AMa(a,b){return CZ(a.ul,b)?0:1;}
function OJ(){var a=this;U.call(a);a.rt=null;a.qU=0;a.s_=null;}
function AQ3(a,b){return !CZ(a.rt,b)&&!(a.qU^Dw(a.s_.H,b))?0:1;}
function OK(){var a=this;U.call(a);a.sa=null;a.sq=0;a.rP=null;}
function AHS(a,b){return !CZ(a.sa,b)&&!(a.sq^Dw(a.rP.H,b))?1:0;}
function Ox(){var a=this;U.call(a);a.s8=0;a.t1=null;a.uC=null;a.v6=null;}
function ASR(a,b){return !(a.s8^a.t1.k(b))&&!CZ(a.uC,b)?0:1;}
function Ph(){var a=this;U.call(a);a.uz=0;a.m0=null;a.nq=null;a.wy=null;}
function AJP(a,b){return !(a.uz^a.m0.k(b))&&!CZ(a.nq,b)?1:0;}
function Ou(){var a=this;U.call(a);a.pe=null;a.wH=null;}
function AHP(a,b){return CZ(a.pe,b);}
function Ov(){var a=this;U.call(a);a.pj=null;a.yE=null;}
function AJt(a,b){return CZ(a.pj,b)?0:1;}
function OB(){var a=this;U.call(a);a.uR=null;a.r4=0;a.vK=null;}
function AK6(a,b){return CZ(a.uR,b)&&a.r4^Dw(a.vK.H,b)?1:0;}
function Ot(){var a=this;U.call(a);a.sL=null;a.rc=0;a.r2=null;}
function AQD(a,b){return CZ(a.sL,b)&&a.rc^Dw(a.r2.H,b)?0:1;}
function Oz(){var a=this;U.call(a);a.tf=0;a.nP=null;a.q8=null;a.wn=null;}
function AGH(a,b){return a.tf^a.nP.k(b)&&CZ(a.q8,b)?1:0;}
function OA(){var a=this;U.call(a);a.sG=0;a.mP=null;a.s7=null;a.wL=null;}
function AOg(a,b){return a.sG^a.mP.k(b)&&CZ(a.s7,b)?0:1;}
var L0=F(0);
function ST(){var a=this;C.call(a);a.wu=null;a.t4=null;a.iH=null;a.cs=null;a.ie=0;a.kx=0;}
function MT(a,b){var c,d,e;c=I(a.iH);if(b>=0&&b<=c){X7(a.cs,null,(-1),(-1));d=a.cs;d.jr=1;d.d9=b;c=d.hx;if(c<0)c=b;d.hx=c;b=a.t4.ck(b,a.iH,d);if(b==(-1))a.cs.dh=1;if(b>=0){d=a.cs;if(d.iK){e=d.dH.data;if(e[0]==(-1)){c=d.d9;e[0]=c;e[1]=c;}d.hx=I$(d);return 1;}}a.cs.d9=(-1);return 0;}d=new By;Bo(d,C5(b));J(d);}
function AEA(a){return O$(a.cs,0);}
function AAD(a){return Sm(a.cs,0);}
function Za(a){return a.cs.iT;}
function ADT(){var a=this;C.call(a);a.B9=null;a.B$=null;a.B8=0.0;}
function Wp(){var a=this;C.call(a);a.gV=null;a.lj=0;a.eX=0;}
function HQ(a,b){var c,d;c=a.gV;d=c.data.length;if(d==a.eX)a.gV=Mj(c,d*2|0);c=a.gV.data;d=a.eX;a.eX=d+1|0;c[d]=b;}
var C1=F(0);
var AWU=null;var AYk=null;var AWW=null;var AWV=null;var AWY=null;var AWX=null;var AW0=null;var AWZ=null;var AW2=null;var AW1=null;var AW3=null;function AB$(){AB$=Bm(C1);AL4();}
function AL4(){AWU=CH(0);AYk=CM(0,0,0);AWW=Q(B(611));AWV=CM(255,255,255);AWY=CM(166,214,255);AWX=Q(B(612));AW0=Q(B(613));AWZ=Q(B(614));AW2=Fx(205,205,205,153);AW1=Fx(255,255,255,0);AW3=Q(B(126));}
function Ch(){Cm.call(this);this.lh=null;}
var AY3=null;var AY4=null;var AY5=null;var AY6=null;var AY7=null;var AY8=null;var AY9=null;var AY$=null;var AY_=null;var AZa=null;var AZb=null;var AZc=null;var AZd=null;var AZe=null;var AZf=null;var AW4=null;function AAu(){AAu=Bm(Ch);AJj();}
function DD(a,b,c){var d=new Ch();WM(d,a,b,c);return d;}
function AKq(a,b,c,d){var e=new Ch();ACM(e,a,b,c,d);return e;}
function WM(a,b,c,d){AAu();C_(a,b,c);a.lh=Io(d,null);}
function ACM(a,b,c,d,e){AAu();C_(a,b,c);a.lh=Io(d,e);}
function AJj(){var b;b=new Ch;AB$();WM(b,B(341),0,AYk);AY3=b;AY4=DD(B(342),1,CM(0,49,191));AY5=DD(B(344),2,Q(B(615)));AY6=DD(B(48),3,Q(B(616)));AY7=DD(B(347),4,AYk);AY8=DD(B(348),5,Q(B(617)));AY9=DD(B(350),6,Q(B(383)));AY$=DD(B(49),7,Q(B(618)));AY_=DD(B(353),8,Q(B(619)));AZa=AKq(B(355),9,AYk,CM(237,235,252));AZb=AKq(B(356),10,Q(B(381)),Q(B(620)));AZc=DD(B(357),11,Q(B(383)));AZd=DD(B(359),12,Q(B(384)));AZe=DD(B(361),13,Q(B(621)));b=DD(B(362),14,Q(B(363)));AZf=b;AW4=H(Ch,[AY3,AY4,AY5,AY6,AY7,AY8,AY9,AY$,AY_,AZa,
AZb,AZc,AZd,AZe,b]);}
var Dv=F(0);
var AW8=null;var AW9=null;var AW5=null;var AW6=null;var AW7=null;var AYl=null;var AYm=null;var AW$=null;var AW_=null;function APc(){APc=Bm(Dv);AJB();}
function AJB(){AW8=Q(B(124));AW9=Q(B(622));AW5=Q(B(623));AW6=Q(B(624));AW7=Q(B(625));AYl=Q(B(124));AYm=Q(B(622));AW$=Fx(205,205,205,153);AW_=CM(247,248,250);}
function On(){var a=this;C.call(a);a.ig=null;a.g5=0;}
function Ok(){C.call(this);this.rH=null;}
function APm(a,b){UV(a.rH,b);}
var Nf=F(Gw);
function AJi(a,b,c,d){var e,f,g;e=0;f=d.x;a:{while(true){if(b>f){b=e;break a;}g=FE(d,a.Y);DA(d,a.Y,b);e=a.cU.c(b,c,d);if(e>=0)break;DA(d,a.Y,g);b=b+1|0;}}return b;}
function ASC(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=FE(e,a.Y);DA(e,a.Y,c);f=a.cU.c(c,d,e);if(f>=0)break;DA(e,a.Y,g);c=c+(-1)|0;}}return c;}
function AHz(a){return null;}
var Qh=F(Bq);
var XA=F(Bq);
function VG(){FP.call(this);this.yx=0;}
function P6(){FP.call(this);this.yq=0;}
var Yt=F(Bq);
function Vx(){var a=this;C.call(a);a.ry=null;a.tH=null;a.va=0;a.j9=0;}
function Ky(a,b){return B7(a.ry)<b?0:1;}
function TS(){var a=this;C.call(a);a.uf=null;a.ue=null;}
function S3(){var a=this;C.call(a);a.w0=null;a.pB=null;}
function S2(){C.call(this);this.vU=null;}
var ADb=F(0);
function Mm(b){return !b?H(Bv,[B(155),B(156),B(626)]):H(Bv,[B(155),B(156),B(626),B(41)]);}
var AAy=F();
function RY(){var a=this;C.call(a);a.og=null;a.of=0;a.oe=null;}
function JH(a,b){var c,d,e,f,g,h,i,j,k;c=a.og;d=a.of;e=a.oe;if(b<=d){f=Co(c);g=new Yh;g.ni=c;h=R(C,1);h.data[0]=e;CP(f,g,B(627),h);}else{i=Co(c);g=new Yi;g.ur=c;j=R(C,2);k=j.data;k[0]=e;h=BG(1);h.data[0]=250;k[1]=h;CP(i,g,B(628),j);f=Co(c);g=new Yj;g.sX=c;h=R(C,1);h.data[0]=e;CP(f,g,B(629),h);}}
function VD(){var a=this;C.call(a);a.dH=null;a.jB=null;a.k0=null;a.k6=null;a.oE=0;a.iK=0;a.cG=0;a.x=0;a.d9=0;a.iT=0;a.fb=0;a.dh=0;a.x0=0;a.hx=0;a.jr=0;}
function BK(a,b,c){a.jB.data[b]=c;}
function Dl(a,b){return a.jB.data[b];}
function I$(a){return Sm(a,0);}
function Sm(a,b){R_(a,b);return a.dH.data[(b*2|0)+1|0];}
function DA(a,b,c){a.dH.data[b*2|0]=c;}
function JE(a,b,c){a.dH.data[(b*2|0)+1|0]=c;}
function FE(a,b){return a.dH.data[b*2|0];}
function Iw(a,b){return a.dH.data[(b*2|0)+1|0];}
function AC5(a){return O$(a,0);}
function O$(a,b){R_(a,b);return a.dH.data[b*2|0];}
function M8(a,b){return a.k0.data[b];}
function Ef(a,b,c){a.k0.data[b]=c;}
function R_(a,b){var c;if(!a.iK){c=new D1;W(c);J(c);}if(b>=0&&b<a.oE)return;c=new By;Bo(c,C5(b));J(c);}
function X7(a,b,c,d){a.iK=0;a.jr=2;Ht(a.dH,(-1));Ht(a.jB,(-1));if(b!==null)a.k6=b;if(c>=0){a.cG=c;a.x=d;}a.d9=a.cG;}
function AAY(a){return a.jr;}
function V6(){C.call(this);this.oh=null;}
function ARf(a){DM(a.oh);}
function Tm(){U.call(this);this.xe=null;}
function ARc(a,b){return Cw(b)!=2?0:1;}
function MX(){U.call(this);this.xo=null;}
function AGq(a,b){return Cw(b)!=1?0:1;}
function Sh(){U.call(this);this.wZ=null;}
function AGb(a,b){return Rm(b);}
function Sg(){U.call(this);this.wI=null;}
function AJe(a,b){return 0;}
function Xf(){U.call(this);this.x7=null;}
function AKR(a,b){return !Cw(b)?0:1;}
function O5(){U.call(this);this.xB=null;}
function ARg(a,b){return Cw(b)!=9?0:1;}
function Oc(){U.call(this);this.yB=null;}
function AND(a,b){return Gn(b);}
function QQ(){U.call(this);this.xg=null;}
function APg(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MQ(){U.call(this);this.vT=null;}
function ASd(a,b){a:{b:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gn(b);}return b;}
function MV(){U.call(this);this.xE=null;}
function AIf(a,b){a:{b:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gn(b);}return b;}
function NX(){U.call(this);this.x4=null;}
function ARs(a,b){a:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ps(){U.call(this);this.ym=null;}
function AMp(a,b){return Jy(b);}
function PB(){U.call(this);this.w1=null;}
function AOF(a,b){return PC(b);}
function T_(){U.call(this);this.xK=null;}
function AQ4(a,b){return Cw(b)!=3?0:1;}
function SV(){U.call(this);this.vX=null;}
function ARX(a,b){a:{b:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gn(b);}return b;}
function M_(){U.call(this);this.yQ=null;}
function AH1(a,b){a:{b:{switch(Cw(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gn(b);}return b;}
function Mi(){U.call(this);this.lm=0;}
function AU3(a){var b=new Mi();ACJ(b,a);return b;}
function ACJ(a,b){Bs(a);a.lm=b;}
function ANG(a,b){return a.bg^(a.lm!=Cw(b&65535)?0:1);}
var Sa=F(Mi);
function AQe(a,b){return a.bg^(!(a.lm>>Cw(b&65535)&1)?0:1);}
function P0(){C.call(this);this.vN=null;}
function ALX(a){var b,c;b=a.vN;c=b.uf;b=b.ue;c.Gu(b.h_,b.ke,null);}
function Wc(){C.call(this);this.nY=null;}
function AOw(a,b){var c,d,e,f;c=a.nY;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.pB;c=Bx();b=Cy(b);e=new M;O(e);G(G(e,B(630)),b);Br(c,N(e));b=Bx();f=d.length;c=new M;O(c);T(G(c,B(631)),f);Br(b,N(c));}
function Wf(){var a=this;C.call(a);a.tx=null;a.ty=null;}
function ANb(a,b){var c,d;c=a.tx;d=a.ty;b.arrayBuffer().then(Bj(c,"f"),Bj(d,"f"));}
function TX(){var a=this;C.call(a);a.mx=null;a.my=null;}
function AJX(a,b){var c;c=a.mx;JH(a.my,JG(c,b.size));}
function T0(){C.call(this);this.uS=null;}
function AFE(a,b){var c;c=a.uS;Br(EY(),$rt_str(b.message));JH(c,0);}
function UZ(){C.call(this);this.wQ=null;}
function ALR(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Yi(){C.call(this);this.ur=null;}
function AQt(a,b){var c,d;c=a.ur;if(!c.hR){b=b.data;c.e.f=ACi(D_(b[0]),FL(b[1]));c.hQ=1;d=Kw(FH(),c.eR);b=new M;O(b);G(HU(G(b,B(632)),d),B(199));$rt_globals.console.info($rt_ustr(N(b)));}}
function Yj(){C.call(this);this.sX=null;}
function AMJ(a,b){var c,d,e,f,g,h;c=b.data;d=a.sX;e=(D_(c[2])).data[0];if(e!=1)HF(d,b);else{d.hR=1;f=D_(c[0]);g=FL(c[1]);b=d.e;b.f=ADc(b.f,f,g,d.hQ);WE(d,ADX(e));Gu(Co(d),AXh);F7(Co(d));h=Kw(FH(),d.eR);b=new M;O(b);G(HU(G(b,B(633)),h),B(199));$rt_globals.console.info($rt_ustr(N(b)));W8(d);HG(d);}}
function Yh(){C.call(this);this.ni=null;}
function ASS(a,b){HF(a.ni,b);}
var Zx=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["cx",AVo(AMk),"ct",AVn(AGZ)],R1,0,C,[],0,3,0,0,0,Ni,0,C,[],3,3,0,0,0,MK,0,C,[],3,3,0,0,0,WO,0,C,[Ni,MK],0,3,0,0,0,Z2,0,C,[],4,0,0,0,0,ZJ,0,C,[],4,3,0,0,0,Gx,0,C,[],0,3,0,0,0,D5,0,Gx,[],0,3,0,0,0,Bq,0,D5,[],0,3,0,0,0,ABE,0,Bq,[],0,3,0,0,0,Dh,0,C,[],3,3,0,0,0,CJ,0,C,[],3,3,0,0,0,IX,0,C,[],3,3,0,0,0,Bv,"String",1,C,[Dh,CJ,IX],0,3,0,EO,["ct",AVn(AGY),"cx",AVo(Bn),"js",AVn(Lo),"jM",AVo(AJg)],EI,0,Gx,[],0,3,0,0,0,He,0,EI,[],0,3,0,0,0,ABf,0,He,[],0,3,0,0,0,DW,0,C,[Dh],1,3,0,0,0,Fj,0,
DW,[CJ],0,3,0,0,["jM",AVo(ALw)],Gk,0,C,[Dh,IX],0,0,0,0,["hF",AVo(JD),"ct",AVn(N)],HX,0,C,[],3,3,0,0,0,M,0,Gk,[HX],0,3,0,0,["lC",AVr(ALr),"kJ",AVq(AIn),"ct",AVn(DU),"hF",AVo(ALz),"l_",AVp(AL5)],Et,0,He,[],0,3,0,0,0,ACN,0,Et,[],0,3,0,0,0,AA4,0,Et,[],0,3,0,0,0,T9,0,C,[],3,3,0,0,0,Ds,0,C,[],3,3,0,0,0,O4,0,C,[],3,0,0,0,0,ID,0,C,[T9,Ds,O4],1,3,0,0,["dW",AVn(FR)],RN,0,ID,[],0,3,0,0,0,Y$,0,C,[],0,3,0,0,0,AD5,0,C,[],4,3,0,0,0,Bc,0,C,[],3,3,0,0,0,Uf,0,C,[Bc],0,3,0,0,0,Bw,0,C,[],3,3,0,0,0,ABU,0,C,[Bw],1,3,0,0,0,Zd,0,C,
[],3,3,0,0,0,ADE,0,C,[],3,3,0,0,0,ADy,0,C,[],3,3,0,0,0,LT,0,C,[],0,3,0,0,0,ZZ,0,C,[Bw],1,3,0,0,0,BP,0,C,[Bw],3,3,0,0,0,Ug,0,C,[BP],0,3,0,0,["Z",AVo(AFa)],Ue,0,C,[BP],0,3,0,0,["Z",AVo(AQ6)],Lu,0,C,[],4,3,0,0,0,ADu,0,C,[],4,3,0,0,0,AAF,0,C,[],0,3,0,0,0,AE5,0,C,[],4,3,0,0,0,No,0,C,[BP],0,3,0,0,["Z",AVo(ANq)]]);
$rt_metadata([ADU,0,C,[Bw],1,3,0,0,0,Zr,0,C,[],0,3,0,0,0,JS,0,C,[Bw],3,3,0,0,0,AAV,0,C,[JS],1,3,0,0,["HF",AVo(ASj),"G0",AVn(AHg)],ABs,0,C,[Bw],1,3,0,0,0,FQ,0,C,[],3,3,0,0,0,Tk,0,C,[FQ],0,3,0,0,0,By,0,Bq,[],0,3,0,0,0,ACs,0,C,[],4,3,0,0,0,GD,0,Bq,[],0,3,0,0,0,IQ,0,Bq,[],0,3,0,0,0,C7,0,C,[CJ],0,3,0,0,0,ME,0,C,[Bw],3,3,0,0,0,S0,0,C,[ME],3,3,0,0,0,El,0,C,[Bw],3,3,0,0,0,AD4,0,C,[S0,El],3,3,0,0,0,NY,0,C,[BP],0,3,0,0,["Z",AVo(AOy)],ABp,0,C,[],4,3,0,0,0,Pr,0,C,[El],3,3,0,0,0,RD,0,C,[El],3,3,0,0,0,Rr,0,C,[El],3,3,0,0,
0,T3,0,C,[El],3,3,0,0,0,Xz,0,C,[El],3,3,0,0,0,Vd,0,C,[El,Pr,RD,Rr,T3,Xz],3,3,0,0,0,OM,0,C,[],3,3,0,0,0,Zc,0,C,[Bw,Vd,OM,JS],1,3,0,0,["Fx",AVp(AL0),"HK",AVp(AMm),"za",AVo(AGg),"D5",AVq(ANv),"B5",AVo(ARp),"Cd",AVn(AHj),"Aw",AVq(AFy)],BH,0,Bq,[],0,3,0,0,0,YC,0,Bq,[],0,3,0,0,0,Hb,0,By,[],0,3,0,0,0,AAo,0,C,[],0,3,0,0,0,D7,0,C,[],4,3,0,KA,["cx",AVo(ARb)],OL,0,C,[],3,3,0,0,0,S8,0,C,[OL],0,3,0,0,0,B5,0,C,[],3,3,0,0,0,Sb,0,C,[B5],0,3,0,0,0,Bk,0,C,[],3,3,0,0,0,ABO,0,C,[Bk],0,3,0,0,0,AAX,0,C,[Bw],1,3,0,0,0,ABm,0,C,[Bw],
1,3,0,0,0,Rv,0,C,[Bw],3,3,0,0,0,V8,0,C,[Rv],0,3,0,0,["D7",AVo(AKz)],V1,0,C,[Bk],0,3,0,0,0,Qg,0,C,[Bw],3,3,0,0,0,V2,0,C,[Qg],0,3,0,0,["u7",AVp(AIG)],AEb,0,C,[Bw],1,3,0,0,0,Cp,0,C,[Bw],3,3,0,0,0,VZ,0,C,[Cp],0,3,0,0,["cd",AVo(AOG)],K7,0,C,[],3,3,0,0,0,ED,0,C,[K7],1,3,0,0,0,Eo,0,C,[],3,3,0,0,0]);
$rt_metadata([X3,0,C,[K7],3,3,0,0,0,Nh,0,C,[X3],3,3,0,0,0,Pd,0,ED,[Eo,Dh,Nh],0,3,0,0,0,V0,0,C,[BP],0,3,0,0,["Z",AVo(APY)],AEx,0,C,[Bw],1,3,0,0,0,AE0,0,C,[Bw],1,3,0,0,0,JX,0,C,[Bw],3,3,0,0,0,Xq,0,C,[JX],0,3,0,0,["vj",AVo(AO3)],ABe,0,C,[Bw],1,3,0,0,0,Xr,0,C,[JX],0,3,0,0,["vj",AVo(AMF)],PA,0,C,[],0,3,0,0,0,Lm,0,C,[],1,3,0,0,0,ADC,0,Lm,[],0,3,0,0,0,Cl,0,C,[Ds],1,3,0,0,["cM",AVo(AR2)],Jb,0,C,[FQ],0,3,0,0,["mn",AVp(Jz)],AAv,0,C,[],0,3,0,0,0,WT,0,C,[Cp],0,3,0,0,["cd",AVo(AN6)],WU,0,C,[Cp],0,3,0,0,["cd",AVo(AOk)],WV,
0,C,[Cp],0,3,0,0,["cd",AVo(AMD)],WW,0,C,[Cp],0,3,0,0,["cd",AVo(AL1)],WX,0,C,[Cp],0,3,0,0,["cd",AVo(AMq)],WY,0,C,[Cp],0,3,0,0,["cd",AVo(AOW)],WZ,0,C,[Cp],0,3,0,0,["cd",AVo(AKc)],W0,0,C,[Cp],0,3,0,0,["cd",AVo(ASq)],W1,0,C,[Cp],0,3,0,0,["cd",AVo(AJp)],W2,0,C,[Cp],0,3,0,0,["cd",AVo(AP6)],Ym,0,C,[Cp],0,3,0,0,["cd",AVo(AR3)],Yn,0,C,[Cp],0,3,0,0,["cd",AVo(AMe)],Yo,0,C,[Cp],0,3,0,0,["cd",AVo(AMH)],Yp,0,C,[Cp],0,3,0,0,["cd",AVo(AOA)],UD,0,C,[],3,3,0,0,0,UQ,0,C,[UD],0,3,0,0,0,UO,0,C,[Cp],0,3,0,0,["cd",AVo(ALh)],MF,0,
C,[],0,3,0,0,0,AEn,0,C,[],0,3,0,0,0,IU,0,C,[],3,3,0,0,0,Ck,0,C,[IU],3,3,0,0,0,Cn,0,C,[],3,3,0,0,["bO",AVo(ALm),"b$",AVp(AQ7),"cN",AVp(AF1),"cq",AVq(AOT)],DH,0,C,[],3,3,0,0,0,Ey,0,C,[IU],3,3,0,0,0,EK,0,C,[],3,3,0,0,0,EP,0,C,[],3,3,0,0,0,Fb,0,C,[EP],3,3,0,0,0,Qp,0,C,[Ds],0,3,0,0,0,Bi,0,C,[],0,3,0,0,["ct",AVn(YH)],L2,0,C,[],0,3,0,0,0,ADB,0,C,[],0,3,0,0,0,ZG,0,C,[],3,3,0,0,0,Qf,0,C,[],0,3,0,0,0,LJ,0,C,[],0,3,0,0,0]);
$rt_metadata([Dy,0,LJ,[],0,3,0,0,0,WD,0,Dy,[],0,3,0,0,0,EC,0,Dy,[],0,3,0,0,0,ABc,0,Dy,[],0,3,0,0,0,ADg,0,EC,[],0,3,0,0,0,ACS,0,EC,[],0,3,0,0,0,Z1,0,EC,[],0,3,0,0,0,ACQ,0,Dy,[],0,3,0,0,0,Sk,0,C,[Bw],3,3,0,0,0,AE3,0,C,[Sk],3,3,0,0,0,Qc,0,C,[Ds],0,3,0,0,0,Qe,0,C,[],0,3,0,0,0,Cm,0,C,[CJ,Dh],1,3,0,0,0,GN,0,Cm,[],12,3,0,JL,0,Mn,0,C,[],3,3,0,0,0,TJ,0,C,[Mn],3,3,0,0,0,U5,0,C,[],3,3,0,0,0,Gp,0,C,[TJ,U5],1,3,0,0,0,Js,0,Gp,[],0,3,0,0,0,AA1,0,Js,[],0,3,0,0,0,Gd,0,Gp,[],1,3,0,0,0,Lt,0,Gd,[],0,3,0,0,["kd",AVq(AK_)],DY,0,
Cm,[],12,3,0,ARi,0,Jj,0,C,[CJ],1,3,0,0,0,Mq,0,Jj,[],0,3,0,AAP,0,Kt,0,C,[],32,0,0,Zb,0,Pi,0,C,[],0,3,0,0,0,GR,0,Cm,[],12,0,0,ACh,0,Gj,0,Cm,[],12,0,0,ACj,0,KR,0,Gd,[],0,3,0,0,["kd",AVq(AI5)],V9,0,D5,[],0,3,0,0,0,ADt,0,BH,[],0,3,0,0,0,Mp,0,C,[Bw],3,3,0,0,0,X0,0,C,[Mp],0,3,0,0,["Z",AVo(APA)],X1,0,C,[Mp],0,3,0,0,["Z",AVo(AGQ)],G2,0,C,[],1,3,0,0,0,SD,0,C,[],3,3,0,0,0,Lc,0,G2,[CJ,HX,IX,SD],1,3,0,0,0,JU,0,G2,[CJ],1,3,0,0,0,HE,0,C,[],0,3,0,G_,0,Nn,0,Cl,[],0,3,0,0,["bA",AVn(AL_),"b6",AVp(AKC)],CR,0,Cl,[],1,3,0,0,["b6",
AVp(GW)],QC,0,C,[],3,3,0,0,0,LK,0,C,[QC],3,3,0,0,0,Lh,0,C,[],3,3,0,0,0,Mk,0,CR,[Cn,LK,Lh,DH,EK,Fb],0,3,0,0,["gr",AVp(AKm),"cM",AVo(AI1),"bA",AVn(ARa),"fS",AVn(APX),"u0",AVn(AJ2),"vp",AVn(APl),"s9",AVo(AP4),"b6",AVp(AOX),"h$",AVo(AGO),"bO",AVo(AMh),"cq",AVq(AMd),"b$",AVp(AGk),"cN",AVp(AJq),"cW",AVq(AOh),"dn",AVn(ALW)],Wi,0,Mk,[],0,3,0,0,["fS",AVn(AIg)],AEL,0,C,[],0,3,0,0,0,ABL,0,C,[Bw],1,3,0,0,0,J9,0,Lc,[],1,0,0,0,0]);
$rt_metadata([ABr,0,J9,[],0,0,0,0,0,K1,0,C,[],1,3,0,0,0,LR,0,C,[],0,3,0,0,0,Zo,0,C,[],0,3,0,0,0,Ip,0,C,[Bw],3,3,0,0,0,Nw,0,C,[Ip],0,3,0,0,["Z",AVo(AI$)],Nv,0,C,[Ip],0,3,0,0,["Z",AVo(ANu)],Nu,0,C,[BP],0,3,0,0,["Z",AVo(AOf)],Nt,0,C,[BP],0,3,0,0,["Z",AVo(AHs)],Yf,0,C,[Bc],0,3,0,0,["m",AVo(ANc)],Yk,0,C,[Bc],0,3,0,0,["m",AVo(ANR)],TA,0,C,[B5],0,3,0,0,["bY",AVo(ANM)],Tz,0,C,[B5],0,3,0,0,["bY",AVo(AGr)],Ty,0,C,[B5],0,3,0,0,["bY",AVo(AKh)],Tx,0,C,[B5],0,3,0,0,["bY",AVo(AKe)],Tw,0,C,[B5],0,3,0,0,["bY",AVo(AKV)],Tv,0,
C,[B5],0,3,0,0,["bY",AVo(AGz)],Tu,0,C,[B5],0,3,0,0,["bY",AVo(AIi)],Tt,0,C,[B5],0,3,0,0,["bY",AVo(AN5)],Ts,0,C,[B5],0,3,0,0,["bY",AVo(ARL)],Tr,0,C,[B5],0,3,0,0,["bY",AVo(ASD)],Q7,0,C,[B5],0,3,0,0,["bY",AVo(ALO)],Q3,0,C,[B5],0,3,0,0,["bY",AVo(AFm)],Q5,0,C,[B5],0,3,0,0,["bY",AVo(AI6)],Q1,0,C,[B5],0,3,0,0,["bY",AVo(AL6)],Q2,0,C,[B5],0,3,0,0,["bY",AVo(APU)],QZ,0,C,[B5],0,3,0,0,["bY",AVo(AFc)],Q0,0,C,[B5],0,3,0,0,["bY",AVo(APG)],QX,0,C,[B5],0,3,0,0,["bY",AVo(ALS)],G$,0,C,[],0,3,0,0,0,O7,0,G$,[],0,3,0,0,0,ADM,0,C,
[],0,3,0,0,0,MB,0,G$,[],0,3,0,0,0,UF,0,C,[Bw],3,3,0,0,0,NR,0,C,[UF],0,3,0,0,["vj",AVo(ALG)],Vn,0,C,[Bc],0,3,0,0,["m",AVo(WF)],Xl,0,JU,[],0,0,0,0,0,AC8,0,C,[Cn,DH],0,0,0,0,["bO",AVo(AO5),"cq",AVq(ASJ),"b$",AVp(AGR),"cN",AVp(ANs),"cW",AVq(ALY)],HP,0,C,[],3,3,0,0,["vB",AVn(AHU),"sY",AVn(ASQ)],AA6,0,C,[HP,Cn,Lh],0,3,0,0,["sY",AVn(AIO),"vB",AVn(AHo),"u0",AVn(Yx),"vp",AVn(W7),"s9",AVo(Yy),"cN",AVp(Vi),"b$",AVp(Vq),"cq",AVq(Q6),"bO",AVo(PD),"gZ",AVo(ANH)],HM,0,C,[],3,3,0,0,0,Rh,0,C,[HM],0,3,0,0,["hZ",AVo(AKx)],Rf,
0,C,[HM],0,3,0,0,["hZ",AVo(AME)],Rg,0,C,[Bc],0,3,0,0,["m",AVo(AGf)],Rd,0,C,[Bc],0,3,0,0,["m",AVo(AFR)],Re,0,C,[Ck],0,3,0,0,["bu",AVo(AMi)],HH,0,C,[Ck],0,3,0,0,["bu",AVo(API)],Rb,0,C,[Bc],0,3,0,0,["m",AVo(AOc)],Rc,0,C,[Ey],0,3,0,0,["bu",AVo(AK9)],ACC,0,C,[Bw],1,3,0,0,0]);
$rt_metadata([ZB,0,C,[],3,3,0,0,0,Yu,0,C,[],0,3,0,0,0,SI,0,C,[Ck],0,3,0,0,["bu",AVo(ASM)],SJ,0,C,[Ck],0,3,0,0,["bu",AVo(AFD)],Er,0,C,[],3,3,0,0,0,ABJ,0,C,[Cn,Er],0,3,0,0,["bO",AVo(ZN),"cq",AVq(ABI),"b$",AVp(YI),"cN",AVp(AEN),"gs",AVp(ARy)],Y_,0,C,[Er,HP],0,3,0,0,["vB",AVn(AHU),"sY",AVn(ASQ),"gs",AVp(AHm),"gZ",AVo(AFS)],ABt,0,C,[],0,3,0,0,0,Lb,0,C,[],0,3,0,0,0,IC,0,C,[],0,3,0,0,0,Wj,0,C,[],0,3,0,0,0,YN,0,C,[],0,3,0,0,0,NA,0,C,[],0,3,0,0,0,EX,0,C,[Ds],0,0,0,0,0,ABW,0,C,[],0,3,0,0,0,ABX,0,C,[Ds],0,3,0,0,0,WB,0,
C,[],3,3,0,0,0,Hr,0,C,[WB],3,3,0,0,0,EQ,0,C,[Hr],1,3,0,0,0,Jf,0,C,[Hr],3,3,0,0,0,F9,0,EQ,[Jf],1,3,0,0,["cx",AVo(AMV)],Iq,0,C,[],3,3,0,0,0,N5,0,F9,[Eo,Dh,Iq],0,3,0,0,["rZ",AVo(Bt),"nR",AVn(ANO),"uT",AVo(Ep)],Vb,0,C,[Bc],0,3,0,0,0,B4,0,C,[],0,3,0,0,["cx",AVo(ASl)],Va,0,C,[Bc],0,3,0,0,["m",AVo(APH)],U8,0,C,[Bc],0,3,0,0,["m",AVo(ANw)],U7,0,C,[Bk],0,3,0,0,["p",AVn(APD)],U$,0,C,[Bk],0,3,0,0,["p",AVn(AKv)],U9,0,C,[Bk],0,3,0,0,["p",AVn(AMQ)],Vz,0,C,[Bk],0,3,0,0,["p",AVn(AO4)],Vy,0,C,[Bk],0,3,0,0,["p",AVn(AJ9)],Fv,0,
Cm,[],12,3,0,AFI,0,Kq,0,C,[],4,3,0,AKT,0,UW,0,C,[],3,3,0,0,0,ML,0,C,[Bk],0,3,0,0,["p",AVn(ALZ)],MM,0,C,[Bk],0,3,0,0,["p",AVn(AKo)],Yl,0,C,[],3,3,0,0,0,IF,0,C,[],0,3,0,0,0,HN,0,C,[],0,3,0,0,0,E0,0,C,[],0,3,0,0,0,Ms,0,E0,[],0,3,0,0,0,MP,0,E0,[],0,3,0,0,0,Qm,0,E0,[],0,3,0,0,0,GX,0,C,[],3,3,0,0,0,RO,0,C,[],3,3,0,0,0,Gm,0,C,[CJ],0,3,0,0,0,Jo,0,C,[],0,3,0,0,0,Ww,0,C,[],3,3,0,0,0,Tf,0,C,[Ww],0,3,0,0,["ct",AVn(AH2)]]);
$rt_metadata([UY,0,C,[],3,3,0,0,0,La,"JsFileHandle",5,C,[UY],0,3,0,0,["ct",AVn(ALf)],N2,0,C,[UW],0,3,0,0,0,ABG,0,ED,[Eo,Dh],0,3,0,0,0,CA,0,C,[],0,3,0,0,0,NS,0,C,[Bk],0,3,0,0,["p",AVn(AR9)],B8,0,C,[],0,3,0,0,0,IW,0,C,[],0,3,0,0,0,AEw,0,C,[CJ],0,3,0,0,["cx",AVo(AQc),"jM",AVo(AG7)],XR,0,C,[FQ],0,3,0,0,["mn",AVp(AJW)],XT,0,C,[FQ],0,3,0,0,["mn",AVp(ALC)],E1,0,C,[],0,3,0,0,0,G7,0,F9,[Iq],1,0,0,0,["uT",AVo(AMy)],X8,0,G7,[Iq],0,0,0,0,["nR",AVn(AI3),"rZ",AVo(ARV)],YZ,0,C,[],0,3,0,0,["ct",AVn(AJ4)],O6,0,C,[Hr],3,3,0,
0,0,Gg,0,EQ,[O6],1,3,0,0,0,Kj,0,Gg,[],1,0,0,0,0,VY,0,Kj,[],0,0,0,0,0,Lz,0,ED,[],1,0,0,0,0,VW,0,Lz,[],0,0,0,0,0,VX,0,G7,[],0,0,0,0,0,FG,0,C,[],3,3,0,0,0,VU,0,C,[FG],0,0,0,0,0,Pv,0,C,[FG],3,3,0,0,0,VV,0,C,[Pv],0,0,0,0,0,Yz,0,C,[FQ],0,3,0,0,0,HT,0,C,[],0,3,0,0,0,I0,0,C,[],0,3,0,0,0,NJ,0,C,[FG],0,0,0,0,0,KX,0,K1,[],1,3,0,0,0,Px,0,KX,[],0,3,0,0,0,Iu,0,D5,[],0,3,0,0,0,XX,0,C,[Ip],0,3,0,0,["Z",AVo(AHN)],XV,0,C,[BP],0,3,0,0,["Z",AVo(AFB)],XW,0,C,[BP],0,3,0,0,["Z",AVo(AJN)],Hh,0,C,[],3,3,0,0,0,KI,0,C,[Hh,Eo],0,0,0,0,
["cx",AVo(AH8)],Ie,0,KI,[],0,0,0,0,0,KC,0,CR,[LK],0,3,0,0,["cM",AVo(AHC),"bA",AVn(AKy),"fS",AVn(AOu),"b6",AVp(AM1),"k7",AVp(AAB),"h$",AVo(AGt)],Zg,0,Cl,[],0,3,0,0,["cM",AVo(AFM),"bA",AVn(AIV),"b6",AVp(APz)],Wz,0,CR,[Cn,Er],0,3,0,0,["gs",AVp(AQ1),"b6",AVp(AIo),"bA",AVn(AI_),"bO",AVo(AOQ),"b$",AVp(AJh),"cN",AVp(AGV),"cq",AVq(AN8)],XQ,0,CR,[Er],0,3,0,0,["gs",AVp(AJk),"bA",AVn(AOr),"b6",AVp(AHw),"cM",AVo(APF)],YB,0,CR,[Cn],0,3,0,0,["bO",AVo(ALm),"b$",AVp(AQ7),"cN",AVp(AF1),"cq",AVq(AOT),"bA",AVn(AO2),"cM",AVo(AH0)],Pn,
0,Cl,[],0,3,0,0,["bA",AVn(AF4),"b6",AVp(AQJ)],Db,0,Cl,[],0,3,0,0,["bA",AVn(SC),"b6",AVp(S9)],Rj,"SelectFileTest",6,Db,[],0,3,0,0,0,AEE,"WorkerTest",7,Db,[],0,3,0,0,0,Xe,"RenderTexture",6,Db,[],0,3,0,0,["cM",AVo(ALx),"bA",AVn(AFF),"b6",AVp(AOo)],SF,"ScissorDemo",6,Db,[],0,3,0,0,["bA",AVn(ASe),"b6",AVp(AHn)]]);
$rt_metadata([O0,0,Cl,[],0,3,0,0,["bA",AVn(ASh),"b6",AVp(AJF),"cM",AVo(AH7)],Iz,"ClipboardTest",6,Db,[Cn],0,3,0,0,["bO",AVo(ALm),"b$",AVp(AQ7),"cN",AVp(AF1),"cq",AVq(APt)],Ql,0,Cl,[],0,3,0,0,["bA",AVn(AR$),"b6",AVp(AMx)],XG,0,Cl,[Cn],0,3,0,0,["b$",AVp(AQ7),"cN",AVp(AF1),"cq",AVq(AOT),"bA",AVn(AOV),"b6",AVp(AHK),"bO",AVo(AH4)],O8,0,Cl,[Cn],0,3,0,0,["bO",AVo(ALm),"b$",AVp(AQ7),"cN",AVp(AF1),"cq",AVq(AOT),"bA",AVn(AGW),"b6",AVp(ALE)],WQ,0,CR,[Er],0,3,0,0,["gs",AVp(AKG),"bA",AVn(ASx),"b6",AVp(AOI),"cM",AVo(ALt)],RG,
0,KC,[],0,3,0,0,["fS",AVn(AKM),"k7",AVp(AMB)],ACL,0,C,[],3,3,0,0,0,ZO,0,C,[],0,3,0,0,0,H4,0,C,[],0,3,0,0,0,ADD,0,C,[],0,3,0,0,0,Mv,0,C,[Hh,Dh],0,3,0,0,0,Jv,0,Mv,[],0,0,0,0,0,AEk,0,C,[],0,3,0,0,0,Sq,0,C,[Ck],0,3,0,0,["bu",AVo(AMM)],Su,0,C,[Bc],0,3,0,0,["m",AVo(ARO)],St,0,C,[EK],0,3,0,0,["gr",AVp(AMN)],Ss,0,C,[Fb],0,3,0,0,["dn",AVn(ARx)],Sr,0,C,[DH],0,3,0,0,["cW",AVq(AQV)],Sv,0,C,[Ey],0,3,0,0,["bu",AVo(AJR)],ADN,0,IF,[],0,3,0,0,0,Uc,0,C,[Cn],0,0,0,0,["bO",AVo(AOB),"cq",AVq(AQa),"b$",AVp(AIS),"cN",AVp(AIt)],R6,
0,C,[Ck],0,3,0,0,["bu",AVo(AOv)],R5,0,C,[Ck],0,3,0,0,["bu",AVo(AQ9)],R8,0,C,[EK],0,3,0,0,["gr",AVp(ARF)],R7,0,C,[Bk],0,3,0,0,["p",AVn(ARD)],R4,0,C,[Ey],0,3,0,0,["bu",AVo(AMS)],R3,0,C,[DH],0,3,0,0,["cW",AVq(AKt)],Ha,0,B4,[],0,3,0,0,0,Vm,0,C,[],0,3,0,0,0,Z_,0,C,[],0,3,0,0,0,TC,0,C,[Ck],0,3,0,0,["bu",AVo(AO1)],TF,0,C,[Ey],0,3,0,0,["bu",AVo(AFr)],AEB,0,C,[],0,3,0,0,["cx",AVo(ASI)],TE,0,C,[Bk],0,3,0,0,["p",AVn(AKb)],TB,0,C,[Bk],0,3,0,0,["p",AVn(AQn)],C$,0,C,[],0,3,0,0,0,OP,0,C,[Ck],0,3,0,0,["bu",AVo(AHl)],OQ,0,C,
[Ey],0,3,0,0,["bu",AVo(AQF)],ACE,0,C,[],0,3,0,0,0,OR,0,C,[DH],0,3,0,0,["cW",AVq(ANE)],AEm,0,C,[],0,3,0,0,0,Uq,0,C,[Er],0,3,0,0,["gs",AVp(ANi)],Ur,0,C,[Ck],0,3,0,0,["bu",AVo(AFw)],Nz,0,C,[],3,3,0,0,0,ADK,0,C,[Nz],0,3,0,0,0,WP,0,C,[Cn],0,0,0,0,["cq",AVq(AOT),"b$",AVp(AHf),"cN",AVp(AOL),"bO",AVo(AIM)],Tc,0,C,[DH],0,3,0,0,["cW",AVq(AH6)],Qi,0,C,[Ck],0,3,0,0,["bu",AVo(APw)],RK,0,C,[Bc],0,3,0,0,["m",AVo(AFZ)]]);
$rt_metadata([RJ,0,C,[Bc],0,3,0,0,["m",AVo(ASm)],RI,0,C,[Bc],0,3,0,0,["m",AVo(AIq)],RH,0,C,[Bc],0,3,0,0,["m",AVo(ANy)],RF,0,C,[Bc],0,3,0,0,["m",AVo(AMG)],RE,0,C,[Bc],0,3,0,0,["m",AVo(AOJ)],Ub,0,C,[Cn],0,0,0,0,["cN",AVp(AF1),"cq",AVq(AOT),"bO",AVo(AQH),"b$",AVp(AML)],C0,0,C,[],3,3,0,E2,0,UB,0,C,[Cn],0,0,0,0,["cq",AVq(AOT),"b$",AVp(ANN),"cN",AVp(AHh),"bO",AVo(AF_)],N8,0,C,[DH],0,3,0,0,["cW",AVq(AF3)],SS,0,C,[Ck],0,3,0,0,["bu",AVo(AQM)],SR,0,C,[EK],0,3,0,0,["gr",AVp(AIN)],SP,0,C,[EK],0,3,0,0,["gr",AVp(AQb)],SO,
0,C,[Fb],0,3,0,0,["dn",AVn(AN7)],SQ,0,C,[Fb],0,3,0,0,["dn",AVn(AG9)],Sl,0,C,[Ck],0,3,0,0,["bu",AVo(AIU)],Ut,0,C,[Ck],0,3,0,0,["bu",AVo(AQ5)],Rw,0,C,[Ck],0,3,0,0,["bu",AVo(AR1)],QJ,0,C,[Ck],0,3,0,0,["bu",AVo(AJs)],QK,0,C,[Ey],0,3,0,0,["bu",AVo(AFx)],QL,0,C,[DH],0,3,0,0,["cW",AVq(AO$)],ABv,0,C,[],0,3,0,0,["cx",AVo(ARk)],CX,0,C,[],3,3,0,ANo,0,Cc,0,Cm,[],12,3,0,ABS,0,IK,0,C,[],0,3,0,0,0,HA,0,C,[],0,3,0,0,0,ADk,0,C,[],0,3,0,0,0,Gz,0,C,[],4,3,0,0,0,AE7,0,C,[],0,3,0,0,0,DT,0,C,[],3,3,0,AKi,0,OY,0,C,[Bw],3,3,0,0,0,Pg,
0,C,[OY],0,3,0,0,["u7",AVp(AJy)],OZ,0,C,[Bw],3,3,0,0,0,Pe,0,C,[OZ],0,3,0,0,["u7",AVp(AKL)],Z3,0,C,[],0,3,0,0,0,Y6,0,C,[Bw],3,3,0,0,0,Ju,0,C,[Ds],0,3,0,0,["dW",AVn(ACX)],T8,0,C,[],0,3,0,0,0,DS,0,C,[],3,3,0,Yg,0,Gq,0,C,[],3,3,0,0,0,Xw,0,C,[Gq],0,3,0,0,["n4",AVq(APo)],Xx,0,C,[Gq],0,3,0,0,0,Wl,0,C,[Cn],0,0,0,0,["bO",AVo(AFC),"cq",AVq(APq),"b$",AVp(ANm),"cN",AVp(AKU)],YA,0,C,[Bc],0,3,0,0,["m",AVo(AOM)],AB7,0,C,[],0,3,0,0,0,PP,0,C,[Bc],0,3,0,0,["m",AVo(AK2)],RT,0,C,[Cn],0,0,0,0,["b$",AVp(AQ7),"cN",AVp(AF1),"cq",AVq(AOT),
"bO",AVo(AFG)],AAg,0,C,[],0,3,0,0,0,Cj,0,Cm,[],12,3,0,ACk,0,AEr,0,C,[],0,3,0,0,0,AA3,0,C,[Bw],4,3,0,0,0]);
$rt_metadata([AET,0,C,[],0,3,0,0,0,AEe,0,C,[],3,3,0,0,0,CS,0,C,[Bw],1,3,0,0,0,ACw,0,CS,[],1,3,0,0,0,ADd,0,CS,[],1,3,0,0,0,Z8,0,CS,[],1,3,0,0,0,AAq,0,CS,[],1,3,0,0,0,ADL,0,CS,[],1,3,0,0,0,UG,0,C,[Bk],0,3,0,0,["p",AVn(AMl)],ZA,0,C,[],0,3,0,0,0,H3,0,C,[],0,3,0,0,0,AAN,0,C,[],4,3,0,0,0,Wh,0,C,[Cn],0,0,0,0,["b$",AVp(AQ7),"cN",AVp(AF1),"cq",AVq(AOT),"bO",AVo(APQ)],AAZ,0,C,[Bw],1,3,0,0,0,IN,0,Bq,[],0,3,0,0,0,OT,0,C,[Bc],0,3,0,0,["m",AVo(AGs)],Wq,0,C,[EP],0,3,0,0,["dn",AVn(ASb)],AEZ,0,C,[],0,3,0,0,0,ACt,0,C,[],3,3,
0,0,0,LG,0,C,[],3,3,0,0,0,RL,0,C,[LG],0,3,0,0,["rg",AVo(AM2)],QG,0,C,[Bc],0,3,0,0,["m",AVo(ARn)],YM,0,C,[],0,3,0,0,0,Ns,0,C,[Ds],0,3,0,0,0,Te,0,C,[Bc],0,3,0,0,["m",AVo(AHR)],Y3,0,C,[],0,3,0,0,0,ADZ,0,C,[CJ],0,3,0,0,["cx",AVo(AFN),"js",AVn(AO9),"jM",AVo(AOE)],TI,0,C,[Bc],0,3,0,0,["m",AVo(AHX)],SM,0,C,[],3,3,0,0,0,FP,0,Iu,[],0,3,0,0,0,Xu,0,EI,[],0,3,0,0,0,Qu,0,C,[Bc],0,3,0,0,["m",AVo(AN3)],Uz,0,C,[Bk],0,3,0,0,["p",AVn(AQC)],Mf,0,DW,[CJ],0,3,0,0,0,FD,0,C,[],0,0,0,0,0,Ka,0,C,[],4,3,0,0,0,VR,0,C,[],0,3,0,0,0,L$,
0,C,[],1,3,0,0,0,ABi,0,CS,[],1,3,0,0,0,QU,0,C,[Bc],0,3,0,0,["m",AVo(AJ1)],V$,0,C,[Bc],0,3,0,0,["m",AVo(ASo)],Qx,0,C,[Bc],0,3,0,0,["m",AVo(AM9)],EL,0,C,[Ds],0,3,0,0,["dW",AVn(ANC),"i5",AVn(ARq),"i8",AVq(P7),"eY",AVo(ZR),"kl",AVo(AIR),"kb",AVo(AQg),"pZ",AVp(ASu),"cq",AVq(AQP),"b$",AVp(AP7),"cN",AVp(ARd),"bO",AVo(AMX),"cW",AVq(AIJ)],GE,0,EL,[],0,3,0,0,0,Ri,0,GE,[HP],0,3,0,0,["vB",AVn(AHU),"sY",AVn(ASQ),"dW",AVn(ASK),"pZ",AVp(AHQ),"eY",AVo(AKD),"kb",AVo(ALQ),"kl",AVo(AIr),"u9",AVn(Z$),"bO",AVo(ARB),"b$",AVp(AFT),
"cq",AVq(AF8),"gZ",AVo(ALl)],Wg,0,C,[Bk],0,3,0,0,["p",AVn(ASv)],AAW,0,EL,[],0,3,0,0,["dW",AVn(AGa),"i8",AVq(AHY),"eY",AVo(APN),"cq",AVq(AJ$),"b$",AVp(AQS),"cN",AVp(AJI),"bO",AVo(AK4),"cW",AVq(AP0),"i5",AVn(ANh)],Wn,0,GE,[],0,3,0,0,["u9",AVn(AN4),"i5",AVn(ALU),"kb",AVo(AKF),"eY",AVo(AIk),"kl",AVo(ALj)],PH,0,C,[Bc],0,3,0,0,0,VK,0,C,[Bk],0,3,0,0,["p",AVn(AOn)]]);
$rt_metadata([RR,0,C,[Bk],0,3,0,0,["p",AVn(AKn)],X5,0,C,[],0,3,0,0,0,H0,0,C,[],0,3,0,0,0,TV,0,EL,[],0,3,0,0,0,Ux,0,C,[],0,3,0,0,0,YF,0,C,[Bk],0,3,0,0,["p",AVn(AIx)],VS,0,C,[Bc],0,3,0,0,["m",AVo(ARo)],VT,0,C,[Bc],0,3,0,0,["m",AVo(AGi)],Jx,0,C,[],0,3,0,0,0,D1,0,Bq,[],0,3,0,0,0,ACP,0,EI,[],0,3,0,0,0,SE,0,C,[Bc],0,3,0,0,0,N1,0,C,[Bc],0,3,0,0,["m",AVo(AF2)],NZ,0,C,[Bc],0,3,0,0,["m",AVo(AH$)],Kv,0,L$,[],1,3,0,0,0,TZ,0,Kv,[],0,3,0,0,0,P9,0,C,[Bc],0,3,0,0,["m",AVo(AG$)],MY,0,C,[EP],0,3,0,0,["dn",AVn(AHW)],MZ,0,C,[EP],
0,3,0,0,["dn",AVn(AOp)],Th,0,C,[EP],0,3,0,0,["dn",AVn(AP_)],VJ,0,C,[Bk],0,3,0,0,["p",AVn(ANk)],QW,0,C,[BP],0,3,0,0,["Z",AVo(AFk)],U4,0,C,[BP],0,3,0,0,["Z",AVo(ARY)],M0,0,C,[Bc],0,3,0,0,0,AAG,0,C,[B5],0,3,0,0,0,Z4,0,C,[B5],0,3,0,0,0,SH,0,C,[Bc],0,3,0,0,["m",AVo(AGh)],SG,0,C,[Bc],0,3,0,0,["m",AVo(AG1)],Qr,0,C,[Bc],0,3,0,0,["m",AVo(AOU)],Tp,0,C,[Bk],0,3,0,0,["p",AVn(AKp)],N9,0,C,[Bc],0,3,0,0,["m",AVo(AN2)],J7,0,DW,[CJ],0,3,0,0,0,LC,0,C,[],4,3,0,0,0,M1,0,C,[BP],0,3,0,0,["Z",AVo(ASP)],Q4,0,C,[],0,3,0,0,0,L5,0,C,
[],0,3,0,0,0,Uj,0,C,[],0,3,0,0,0,ND,0,C,[Gq],0,3,0,0,["n4",AVq(ARE)],Sp,0,DW,[CJ],0,3,0,0,0,Fl,0,Bq,[],0,3,0,0,0,NQ,0,C,[],0,3,0,0,0,AD2,0,C,[],0,3,0,0,0,Ti,0,C,[],0,0,0,0,0,ZE,0,C,[],3,3,0,0,0,XN,0,C,[BP],0,3,0,0,["Z",AVo(APT)],XM,0,C,[BP],0,3,0,0,["Z",AVo(AIe)],Xa,0,C,[BP],0,3,0,0,["Z",AVo(AJM)],W_,0,C,[BP],0,3,0,0,["Z",AVo(AKJ)],Y5,0,C,[],1,3,0,0,0,Xh,0,C,[],3,3,0,0,0]);
$rt_metadata([XF,0,C,[Cp],0,3,0,0,["cd",AVo(AJD)],AAH,0,C,[],0,3,0,0,0,AEl,0,C,[],0,3,0,0,0,UP,0,C,[Bk],0,3,0,0,["p",AVn(AKj)],UR,0,C,[Bk],0,3,0,0,["p",AVn(APk)],AC0,0,C,[],0,3,0,0,0,I7,0,Fl,[],0,3,0,0,0,HW,0,Bq,[],0,3,0,0,0,LY,0,Bq,[],0,3,0,0,0,AA7,0,C,[Bc],0,3,0,0,0,SK,0,C,[Bk],0,3,0,0,["p",AVn(AR4)],Rq,0,C,[Bc],0,3,0,0,["m",AVo(AK7)],SU,0,C,[Bk],0,3,0,0,["p",AVn(AGp)],YO,0,C,[],0,3,0,0,0,G3,0,C,[],0,3,0,0,0,AC9,0,Gg,[],0,0,0,0,0,Pk,0,EQ,[],0,0,0,0,0,W3,0,By,[],0,3,0,0,0,QE,0,C,[Mn],3,3,0,0,0,NK,0,C,[QE],
3,3,0,0,0,L1,0,C,[NK],1,3,0,0,0,AAM,0,L1,[],0,3,0,0,0,RX,0,C,[Bk],0,3,0,0,["p",AVn(AG3)],RW,0,C,[Bk],0,3,0,0,["p",AVn(AFs)],RV,0,C,[Bk],0,3,0,0,["p",AVn(ALL)],RU,0,C,[Bk],0,3,0,0,["p",AVn(AQA)],PJ,0,C,[Bk],0,3,0,0,["p",AVn(APW)],PL,0,C,[Bk],0,3,0,0,["p",AVn(AKP)],PM,0,C,[Bk],0,3,0,0,["p",AVn(AHv)],XO,0,C,[],3,3,0,0,0,Wx,0,C,[Bk],0,3,0,0,["p",AVn(AGm)],U2,0,C,[GX],0,3,0,0,["mr",AVp(AKu)],QN,0,C,[Bc],0,3,0,0,["m",AVo(AKf)],XZ,0,C,[Bc],0,3,0,0,["m",AVo(ALK)],VH,0,C,[LG],0,3,0,0,["rg",AVo(JV)],Ta,0,C,[Bk],0,3,0,
0,["p",AVn(ALk)],Tb,0,C,[Bk],0,3,0,0,["p",AVn(AMC)],S_,0,C,[Bk],0,3,0,0,["p",AVn(ANZ)],Or,0,C,[Bk],0,3,0,0,["p",AVn(AKd)],Oq,0,C,[Bk],0,3,0,0,["p",AVn(AQK)],VB,0,C,[EP],0,3,0,0,["dn",AVn(AH5)],Wa,0,C,[Bk],0,3,0,0,["p",AVn(AOz)],We,0,C,[Bk],0,3,0,0,["p",AVn(ALs)],Wd,0,C,[Bk],0,3,0,0,["p",AVn(AGe)],Wb,0,C,[Bk],0,3,0,0,["p",AVn(AIb)],XJ,0,C,[GX],0,3,0,0,["mr",AVp(AHx)],P8,0,C,[BP],0,3,0,0,["Z",AVo(AIs)],IY,0,C,[Bw],3,3,0,0,0,MU,0,C,[IY],0,3,0,0,["rf",AVn(AKQ)],MD,0,C,[IY],0,3,0,0,["rf",AVn(AFd)]]);
$rt_metadata([PF,0,C,[Gq],0,3,0,0,0,XL,0,C,[BP],0,3,0,0,["Z",AVo(AJ6)],GV,0,C,[],0,0,0,0,0,U0,0,GV,[FG],0,0,0,0,0,Rn,0,GV,[FG],0,0,0,0,0,Rl,0,C,[Dh],4,3,0,0,0,Od,0,C,[Bc],0,3,0,0,["m",AVo(ASH)],Gt,0,Cm,[],12,0,0,Vg,0,Tl,0,C,[Bc],0,3,0,0,["m",AVo(ALv)],BD,0,C,[],1,0,0,0,["ck",AVq(HC),"co",AVr(HR),"hz",AVn(AGS),"O",AVo(AQX),"bW",AVo(AQU),"fg",AVn(ARR),"ec",AVn(I_)],UT,0,C,[],32,0,0,ATk,0,Pl,0,C,[Bc],0,3,0,0,["m",AVo(AHT)],Wm,0,C,[Bc],0,3,0,0,["m",AVo(AJA)],YG,0,C,[Bk],0,3,0,0,["p",AVn(AHD)],CO,0,BD,[],0,0,0,Mo,
["c",AVq(AGl),"I",AVo(AGG)],GJ,0,C,[],0,0,0,0,0,IS,0,BH,[],0,3,0,0,0,Xt,0,C,[BP],0,3,0,0,["Z",AVo(AOe)],ACl,0,C,[Bw],3,3,0,0,0,UE,0,C,[BP],0,3,0,0,["Z",AVo(ANQ)],R$,0,CO,[],0,0,0,0,["c",AVq(AFV),"I",AVo(APv)],X9,0,CO,[],0,0,0,0,["c",AVq(AHG)],PQ,0,CO,[],0,0,0,0,["c",AVq(AGP)],Tg,0,CO,[],0,0,0,0,["c",AVq(AF0),"I",AVo(AN1)],FA,0,CO,[],0,0,0,0,["c",AVq(ARe)],BW,0,BD,[],1,0,0,0,["c",AVq(ASi),"b1",AVn(AQp),"I",AVo(AKY)],ADW,0,BW,[],0,0,0,0,["bw",AVp(APV),"ck",AVq(AI7),"co",AVr(AHu),"I",AVo(AFY)],BS,0,BD,[],0,0,0,
0,["c",AVq(AJJ),"O",AVo(ANT),"bW",AVo(ALM),"I",AVo(AOD),"ec",AVn(AHq)],I4,0,BS,[],0,0,0,0,["c",AVq(ANB),"I",AVo(AO6)],DR,0,I4,[],0,0,0,0,["c",AVq(AIc),"O",AVo(AOK)],MS,0,DR,[],0,0,0,0,["c",AVq(ANL),"I",AVo(AQ2)],Wy,0,DR,[],0,0,0,0,["c",AVq(AGB),"I",AVo(AQu)],Ro,0,DR,[],0,0,0,0,["c",AVq(AHk),"I",AVo(ASL)],T2,0,DR,[],0,0,0,0,["c",AVq(AFt),"I",AVo(APj)],Gw,0,BS,[],0,0,0,0,["c",AVq(AFP),"ck",AVq(AL8),"co",AVr(APB),"bW",AVo(ALH),"fg",AVn(ANX),"ec",AVn(ARU)],GL,0,C,[],1,0,0,0,0,U,0,GL,[],1,0,0,OO,["de",AVn(AGD),"eH",
AVn(AF$),"i2",AVn(AQj),"gQ",AVn(ARQ)],ZV,0,U,[],0,0,0,0,["k",AVo(CZ),"de",AVn(CU),"eH",AVn(AIZ),"i2",AVn(AQI),"ct",AVn(AMZ),"gQ",AVn(AJa)],Jh,0,Bq,[],0,3,0,0,0,D4,0,BD,[],1,0,0,0,["bW",AVo(APE),"I",AVo(AQ$),"ec",AVn(AMu)],C3,0,D4,[],0,0,0,0,["c",AVq(AFv)],E7,0,C3,[],0,0,0,0,["c",AVq(AGo)],CQ,0,D4,[],0,0,0,0,["c",AVq(AFO)],EA,0,C3,[],0,0,0,0,["c",AVq(AMc),"O",AVo(ASO)],WN,0,C3,[],0,0,0,0,["c",AVq(ASa),"ck",AVq(AMW)],Z,0,C,[],1,0,0,0,0,Dd,0,BH,[],0,3,0,0,0,Nb,0,GL,[Eo],0,0,0,0,["ct",AVn(AM6)],Oj,0,BD,[],0,0,0,
0,["c",AVq(ALo),"I",AVo(ANS)],Xn,0,C,[Eo,Dh],0,3,0,0,0]);
$rt_metadata([M2,0,BS,[],0,0,0,0,0,Qo,0,BS,[],0,0,0,0,["c",AVq(AGj),"O",AVo(ANx),"I",AVo(AGU),"bW",AVo(AGC)],DC,0,BS,[],0,0,0,0,["c",AVq(AIP),"k",AVo(AJo),"bW",AVo(AGd),"O",AVo(AQd),"I",AVo(AI4)],Je,0,DC,[],0,0,0,0,["k",AVo(AKZ)],ZK,0,BW,[],0,0,0,0,["bw",AVp(ALp)],Ei,0,BW,[],0,0,0,0,["bw",AVp(MA),"bW",AVo(ANV)],OS,0,BS,[],0,0,0,0,["O",AVo(AMb),"c",AVq(AFj),"bW",AVo(AGL),"I",AVo(AQN)],En,0,BW,[],0,0,0,0,["b1",AVn(AK$),"bw",AVp(AJU),"ck",AVq(AIK),"co",AVr(ALe),"bW",AVo(AQE)],AEq,0,BW,[],0,0,0,0,["bw",AVp(AFe)],YT,
0,BW,[],0,0,0,0,["bw",AVp(AFH)],Fg,0,BS,[],0,0,0,0,["O",AVo(ART),"c",AVq(ANA),"bW",AVo(ALq),"I",AVo(AON)],XK,0,Fg,[],0,0,0,0,0,Ud,0,Fg,[],0,0,0,0,0,YD,0,CQ,[],0,0,0,0,["c",AVq(AHM)],PI,0,CQ,[],0,0,0,0,["c",AVq(AMK)],FS,0,CQ,[],0,0,0,0,["c",AVq(AP$),"O",AVo(ARj)],Pm,0,FS,[],0,0,0,0,["c",AVq(ALb),"O",AVo(AM7)],Fd,0,CQ,[],0,0,0,0,["c",AVq(ASE)],Nl,0,Fd,[],0,0,0,0,["c",AVq(AKr)],RQ,0,CQ,[],0,0,0,0,["c",AVq(AR0)],Qz,0,FS,[],0,0,0,0,["c",AVq(AGX)],Vj,0,Fd,[],0,0,0,0,["c",AVq(AF5)],RS,0,D4,[],0,0,0,0,["c",AVq(ASp),
"ck",AVq(AQl)],Os,0,D4,[],0,0,0,0,["c",AVq(ANY),"ck",AVq(AFn)],EN,0,C,[],1,0,0,0,0,YE,0,C3,[],0,0,0,0,["c",AVq(AF7)],WJ,0,EA,[],0,0,0,0,["c",AVq(AMI)],Pa,0,E7,[],0,0,0,0,["c",AVq(APJ)],Qt,0,C3,[],0,0,0,0,["c",AVq(ANP)],Us,0,EA,[],0,0,0,0,["c",AVq(AGc)],Rp,0,E7,[],0,0,0,0,["c",AVq(APZ)],Ku,0,BD,[],4,0,0,0,["c",AVq(ALJ),"I",AVo(AKI)],AAs,0,BD,[],0,0,0,0,["c",AVq(AGA),"I",AVo(AGJ)],Oo,0,BD,[],0,0,0,0,["c",AVq(AK3),"I",AVo(ASy)],Xp,0,BD,[],4,0,0,0,["c",AVq(AOx),"I",AVo(AHA)],W9,0,BD,[],0,0,0,0,["c",AVq(ANt),"I",
AVo(AFb)],Nx,0,BD,[],0,0,0,0,["c",AVq(AHp),"I",AVo(AJC)],AEg,0,BS,[],0,0,0,0,["c",AVq(AR7),"O",AVo(AGN),"hz",AVn(ANa),"I",AVo(AGM)],ZS,0,BS,[],4,0,0,0,["c",AVq(ANj),"O",AVo(APr),"hz",AVn(AE$),"I",AVo(ASf)],AD9,0,BD,[],4,0,0,0,["c",AVq(ALu),"I",AVo(AJv)],ACg,0,BD,[],0,0,0,0,["c",AVq(ANr),"I",AVo(AJl)],YQ,0,BD,[],0,0,0,0,["c",AVq(AKw),"I",AVo(AHF)],G6,0,BS,[],0,0,0,0,["c",AVq(AF9),"O",AVo(AOH),"I",AVo(AO7)],AEc,0,G6,[],0,0,0,0,["c",AVq(AHL),"ck",AVq(AQZ),"co",AVr(AFW),"bW",AVo(AMA)],ABg,0,G6,[],0,0,0,0,["c",AVq(AL2)],Oi,
0,Gk,[HX],0,3,0,0,["lC",AVr(AJb),"kJ",AVq(AGE),"hF",AVo(AG5),"l_",AVp(AQo)],R0,0,BW,[],0,0,0,0,["bw",AVp(AH_),"ck",AVq(AGv),"co",AVr(AJz),"bW",AVo(AJ7)],YP,0,BW,[],0,0,0,0,["bw",AVp(AL$)],Nr,0,BW,[],0,0,0,0,["bw",AVp(APL)],G5,0,C,[],4,0,0,APh,0]);
$rt_metadata([MI,0,BW,[],0,0,0,0,["bw",AVp(APS)],K5,0,BS,[],0,0,0,0,["O",AVo(ANJ),"c",AVq(AHB),"ck",AVq(AJ5),"co",AVr(AIh),"bW",AVo(AFU),"I",AVo(AQv)],Lp,0,BS,[],0,0,0,0,["O",AVo(AG4),"c",AVq(AFu),"ck",AVq(AN9),"co",AVr(APK),"bW",AVo(AIa),"I",AVo(AOi)],DV,0,BW,[],0,0,0,0,["bw",AVp(AO8),"ck",AVq(AM0),"co",AVr(AG2),"bW",AVo(AOS)],VL,0,EN,[],0,0,0,0,["hr",AVo(AHe),"sI",AVp(AO0)],VM,0,EN,[],0,0,0,0,["hr",AVo(AP2),"sI",AVp(ARN)],AC$,0,C,[],0,0,0,0,0,Y7,0,C,[],0,0,0,0,0,K3,0,Z,[],0,0,0,0,["C",AVn(ABo)],J4,0,Z,[],
0,0,0,0,["C",AVn(AB_)],AC4,0,Z,[],0,0,0,0,["C",AVn(APu)],ADA,0,Z,[],0,0,0,0,["C",AVn(AQx)],ADF,0,Z,[],0,0,0,0,["C",AVn(AIQ)],KZ,0,Z,[],0,0,0,0,["C",AVn(ZX)],LA,0,KZ,[],0,0,0,0,["C",AVn(AAT)],AEX,0,Z,[],0,0,0,0,["C",AVn(AJ3)],Mz,0,LA,[],0,0,0,0,["C",AVn(YL)],ABC,0,Mz,[],0,0,0,0,["C",AVn(AMv)],AB3,0,Z,[],0,0,0,0,["C",AVn(AH3)],AAm,0,Z,[],0,0,0,0,["C",AVn(AMs)],Z5,0,Z,[],0,0,0,0,["C",AVn(ARP)],ADJ,0,Z,[],0,0,0,0,["C",AVn(AM8)],AE9,0,Z,[],0,0,0,0,["C",AVn(AFl)],AC_,0,Z,[],0,0,0,0,["C",AVn(AKB)],ACZ,0,Z,[],0,0,0,
0,["C",AVn(APa)],AD1,0,Z,[],0,0,0,0,["C",AVn(AHZ)],Zp,0,Z,[],0,0,0,0,["C",AVn(AIp)],Y4,0,Z,[],0,0,0,0,["C",AVn(ARJ)],ADf,0,Z,[],0,0,0,0,["C",AVn(AFf)],ADr,0,Z,[],0,0,0,0,["C",AVn(ALy)],AAL,0,Z,[],0,0,0,0,["C",AVn(AIz)],AB8,0,Z,[],0,0,0,0,["C",AVn(AJE)],AEC,0,Z,[],0,0,0,0,["C",AVn(ALA)],ADq,0,Z,[],0,0,0,0,["C",AVn(AQQ)],ABd,0,Z,[],0,0,0,0,["C",AVn(AOs)],AAJ,0,Z,[],0,0,0,0,["C",AVn(AM3)],AE4,0,Z,[],0,0,0,0,["C",AVn(APn)],Jq,0,Z,[],0,0,0,0,["C",AVn(AB5)],AD3,0,Jq,[],0,0,0,0,["C",AVn(AMR)],ABH,0,K3,[],0,0,0,0,["C",
AVn(AGu)],AAC,0,J4,[],0,0,0,0,["C",AVn(AJQ)],AAa,0,Z,[],0,0,0,0,["C",AVn(ALP)],AAw,0,Z,[],0,0,0,0,["C",AVn(ARu)],ABw,0,Z,[],0,0,0,0,["C",AVn(AJf)],ABD,0,Z,[],0,0,0,0,["C",AVn(AFg)],AAh,0,C,[],4,0,0,0,0,ZI,0,C,[],4,3,0,0,0,Ny,0,C,[],0,3,0,0,0,ADl,0,C,[],0,3,0,0,0,ABa,0,C,[],4,3,0,0,0]);
$rt_metadata([ZU,0,C,[IU],0,3,0,0,0,TQ,0,C,[Bc],0,3,0,0,["m",AVo(ASA)],Ry,0,C,[Bc],0,3,0,0,["m",AVo(AJc)],Ze,0,C,[],0,3,0,0,0,Rx,0,C,[Bc],0,3,0,0,["m",AVo(APb)],PU,0,C,[Bc],0,3,0,0,0,QB,0,C,[Bc],0,3,0,0,0,WL,0,U,[],0,0,0,0,["k",AVo(AIY)],WK,0,U,[],0,0,0,0,["k",AVo(AFK)],Oy,0,U,[],0,0,0,0,["k",AVo(ALF),"ct",AVn(AJG)],OE,0,U,[],0,0,0,0,["k",AVo(AO_)],OC,0,U,[],0,0,0,0,["k",AVo(APR)],OD,0,U,[],0,0,0,0,["k",AVo(AL9)],OH,0,U,[],0,0,0,0,["k",AVo(AIu)],OI,0,U,[],0,0,0,0,["k",AVo(AE_)],OF,0,U,[],0,0,0,0,["k",AVo(AJL)],OG,
0,U,[],0,0,0,0,["k",AVo(AMa)],OJ,0,U,[],0,0,0,0,["k",AVo(AQ3)],OK,0,U,[],0,0,0,0,["k",AVo(AHS)],Ox,0,U,[],0,0,0,0,["k",AVo(ASR)],Ph,0,U,[],0,0,0,0,["k",AVo(AJP)],Ou,0,U,[],0,0,0,0,["k",AVo(AHP)],Ov,0,U,[],0,0,0,0,["k",AVo(AJt)],OB,0,U,[],0,0,0,0,["k",AVo(AK6)],Ot,0,U,[],0,0,0,0,["k",AVo(AQD)],Oz,0,U,[],0,0,0,0,["k",AVo(AGH)],OA,0,U,[],0,0,0,0,["k",AVo(AOg)],L0,0,C,[],3,3,0,0,0,ST,0,C,[L0],4,3,0,0,0,ADT,0,C,[GX],0,3,0,0,0,Wp,0,C,[],0,3,0,0,0,C1,0,C,[],3,3,0,AB$,0,Ch,0,Cm,[],12,3,0,AAu,0,Dv,0,C,[],3,3,0,APc,0,On,
0,C,[],0,3,0,0,0,Ok,0,C,[Bc],0,3,0,0,["m",AVo(APm)],Nf,0,Gw,[],0,0,0,0,["ck",AVq(AJi),"co",AVr(ASC),"fg",AVn(AHz)],Qh,0,Bq,[],0,3,0,0,0,XA,0,Bq,[],0,3,0,0,0,VG,0,FP,[],0,3,0,0,0,P6,0,FP,[],0,3,0,0,0,Yt,0,Bq,[],0,3,0,0,0,Vx,0,C,[],0,3,0,0,0,TS,0,C,[Bk],0,3,0,0,0,S3,0,C,[Bc],0,3,0,0,0,S2,0,C,[Bc],0,3,0,0,0,ADb,0,C,[],3,3,0,0,0,AAy,0,C,[],0,3,0,0,0,RY,0,C,[HM],0,3,0,0,0,VD,0,C,[L0],0,0,0,0,0]);
$rt_metadata([V6,0,C,[Bk],0,3,0,0,["p",AVn(ARf)],Tm,0,U,[],0,0,0,0,["k",AVo(ARc)],MX,0,U,[],0,0,0,0,["k",AVo(AGq)],Sh,0,U,[],0,0,0,0,["k",AVo(AGb)],Sg,0,U,[],0,0,0,0,["k",AVo(AJe)],Xf,0,U,[],0,0,0,0,["k",AVo(AKR)],O5,0,U,[],0,0,0,0,["k",AVo(ARg)],Oc,0,U,[],0,0,0,0,["k",AVo(AND)],QQ,0,U,[],0,0,0,0,["k",AVo(APg)],MQ,0,U,[],0,0,0,0,["k",AVo(ASd)],MV,0,U,[],0,0,0,0,["k",AVo(AIf)],NX,0,U,[],0,0,0,0,["k",AVo(ARs)],Ps,0,U,[],0,0,0,0,["k",AVo(AMp)],PB,0,U,[],0,0,0,0,["k",AVo(AOF)],T_,0,U,[],0,0,0,0,["k",AVo(AQ4)],SV,
0,U,[],0,0,0,0,["k",AVo(ARX)],M_,0,U,[],0,0,0,0,["k",AVo(AH1)],Mi,0,U,[],0,0,0,0,["k",AVo(ANG)],Sa,0,Mi,[],0,0,0,0,["k",AVo(AQe)],P0,0,C,[IY],0,3,0,0,["rf",AVn(ALX)],Wc,0,C,[BP],0,3,0,0,["Z",AVo(AOw)],Wf,0,C,[BP],0,3,0,0,["Z",AVo(ANb)],TX,0,C,[BP],0,3,0,0,["Z",AVo(AJX)],T0,0,C,[BP],0,3,0,0,["Z",AVo(AFE)],UZ,0,C,[BP],0,3,0,0,["Z",AVo(ALR)],Yi,0,C,[Bc],0,3,0,0,["m",AVo(AQt)],Yj,0,C,[Bc],0,3,0,0,["m",AVo(AMJ)],Yh,0,C,[Bc],0,3,0,0,["m",AVo(ASS)],Zx,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.L4=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","#diffDemo","ClassL.java","ClassR.java",
"[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ",
"x = ",", y = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor1, uColor2;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float dist1 = distance(p11, p12);\n  float dist2 = distance(p21, p22);\n  float sd1 = ((p12.x - p11.x) * (p11.y - pt.y)\n            - (p11.x - pt.x) * (p12.y - p11.y)) / dist1;\n  float sd2 = ((p21.x - p22.x) * (p21.y"
+" - pt.y)\n            - (p21.x - pt.x) * (p21.y - p22.y)) / dist2;\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  outColor = mix(uColor1, uColor2, t1 + t2 - t1 * t2);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst ",
" is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","selectScene ","CodiconDemo","DemoEdit0","RenderTexture",
"ScissorDemo","LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Diff","many","test","LineShaderDemo","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
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
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AGZ(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cu=Long_add;var Kw=Long_sub;var BR=Long_mul;var Dp=Long_div;var M3=Long_rem;var ATB=Long_or;var CW=Long_and;var AZg=Long_xor;var Fr=Long_shl;var Gr=Long_shr;var D$=Long_shru;var ATW=Long_compare;var Fe=Long_eq;var AZh=Long_ne;var AIC=Long_lt;var PS=Long_le;var AIj=Long_gt;var AAp=Long_ge;var AZi=Long_not;var AT8=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AUb);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Ug.prototype;c.f=c.Z;c=Ue.prototype;c.f=c.Z;c=No.prototype;c.f=c.Z;c=AAV.prototype;c.get=c.HF;Object.defineProperty(c,"length",{get:c.G0});c=NY.prototype;c.f=c.Z;c=Zc.prototype;c.removeEventListener=c.D5;c.dispatchEvent=c.B5;c.get=c.za;c.addEventListener=c.Aw;Object.defineProperty(c,"length",{get:c.Cd});c=V8.prototype;c.onAnimationFrame=c.D7;c=V2.prototype;c.f=c.u7;c=VZ.prototype;c.handleEvent=c.cd;c=V0.prototype;c.f=c.Z;c=Xq.prototype;c.accept=c.vj;c=Xr.prototype;c.accept=c.vj;c=WT.prototype;c.handleEvent
=c.cd;c=WU.prototype;c.handleEvent=c.cd;c=WV.prototype;c.handleEvent=c.cd;c=WW.prototype;c.handleEvent=c.cd;c=WX.prototype;c.handleEvent=c.cd;c=WY.prototype;c.handleEvent=c.cd;c=WZ.prototype;c.handleEvent=c.cd;c=W0.prototype;c.handleEvent=c.cd;c=W1.prototype;c.handleEvent=c.cd;c=W2.prototype;c.handleEvent=c.cd;c=Ym.prototype;c.handleEvent=c.cd;c=Yn.prototype;c.handleEvent=c.cd;c=Yo.prototype;c.handleEvent=c.cd;c=Yp.prototype;c.handleEvent=c.cd;c=UO.prototype;c.handleEvent=c.cd;c=X0.prototype;c.f=c.Z;c=X1.prototype;c.f
=c.Z;c=Nw.prototype;c.f=c.Z;c=Nv.prototype;c.f=c.Z;c=Nu.prototype;c.f=c.Z;c=Nt.prototype;c.f=c.Z;c=NR.prototype;c.accept=c.vj;c=XX.prototype;c.f=c.Z;c=XV.prototype;c.f=c.Z;c=XW.prototype;c.f=c.Z;c=Pg.prototype;c.f=c.u7;c=Pe.prototype;c.f=c.u7;c=QW.prototype;c.f=c.Z;c=U4.prototype;c.f=c.Z;c=M1.prototype;c.f=c.Z;c=XN.prototype;c.f=c.Z;c=XM.prototype;c.f=c.Z;c=Xa.prototype;c.f=c.Z;c=W_.prototype;c.f=c.Z;c=XF.prototype;c.handleEvent=c.cd;c=P8.prototype;c.f=c.Z;c=MU.prototype;c.onTimer=c.rf;c=MD.prototype;c.onTimer
=c.rf;c=XL.prototype;c.f=c.Z;c=Xt.prototype;c.f=c.Z;c=UE.prototype;c.f=c.Z;c=P0.prototype;c.onTimer=c.rf;c=Wc.prototype;c.f=c.Z;c=Wf.prototype;c.f=c.Z;c=TX.prototype;c.f=c.Z;c=T0.prototype;c.f=c.Z;c=UZ.prototype;c.f=c.Z;})();
}));
