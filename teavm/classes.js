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
index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.ff=f;}
function $rt_cls(cls){return AAl(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FE(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bR.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AL3(t);}
function $rt_throwableCause(t){return AMa(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ARw());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ARx(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ARy());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BH=$rt_compare;var ARz=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var U4=$rt_isInstance;var ARA=$rt_nativeThread;var ARB=$rt_suspending;var ARC=$rt_resuming;var ARD=$rt_invalidPointer;var B=$rt_s;var Br=$rt_eraseClinit;var Ba=$rt_imul;var D5=$rt_wrapException;var ARE=$rt_checkBounds;var ARF=$rt_checkUpperBound;var ARG=$rt_checkLowerBound;var ARH=$rt_wrapFunction0;var ARI=$rt_wrapFunction1;var ARJ=$rt_wrapFunction2;var ARK=$rt_wrapFunction3;var ARL=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var Zh=$rt_createCharArrayFromData;var AQi=$rt_createByteArrayFromData;var ARM=$rt_createShortArrayFromData;var EQ=$rt_createIntArrayFromData;var ARN=$rt_createBooleanArrayFromData;var ARO=$rt_createFloatArrayFromData;var ARP=$rt_createDoubleArrayFromData;var AEC=$rt_createLongArrayFromData;var ARv=$rt_createBooleanArray;var ET=$rt_createByteArray;var ARQ=$rt_createShortArray;var BQ=$rt_createCharArray;var BF=$rt_createIntArray;var AQ_=$rt_createLongArray;var ACW=$rt_createFloatArray;var ARR
=$rt_createDoubleArray;var BH=$rt_compare;var ARS=$rt_castToClass;var ART=$rt_castToInterface;var ARU=Long_toNumber;var X=Long_fromInt;var ARV=Long_fromNumber;var B9=Long_create;var Ec=Long_ZERO;var ARW=Long_hi;var Eq=Long_lo;
function C(){this.$id$=0;}
function ARX(){var a=new C();ABs(a);return a;}
function ABs(a){}
function Cx(a){return AAl(a.constructor);}
function AI_(a,b){return a!==b?0:1;}
function AEj(a){var b,c,d,e,f,g,h,i,j;b=W4(a);if(!b)c=B(0);else{d=(((32-MV(b)|0)+4|0)-1|0)/4|0;e=BQ(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GR((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FE(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function W4(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AIB(a){var b,c,d;if(!U4(a,Ea)&&a.constructor.$meta.item===null){b=new UA;U(b);J(b);}b=AC7(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Qr(){var a=this;C.call(a);a.sD=0;a.po=null;}
function AQw(b){var c,d,e,f,g,h,i,j,k,l;ABp();Xl();ZO();AAN();YB();AA9();W$();ABv();AAK();ACE();YY();Xb();AAz();Z7();AAA();Zt();YI();X1();Y4();Y6();Xv();ACn();c=(Xy()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Ob(B(2),B(3));else{d=new Qr;BI(d);e=new SK;e.qW=d;f=new Mu;c=new $rt_globals.Worker("teavm/worker.js");g=new MZ;g.nS=c;g.nT=e;g.nU=f;e=Bk(g,"f");c.onmessage=e;h=H(K4,[I4(B(4),B(5),400),I4(B(6),B(7),400),I4(B(8),B(5),700),I4(B(9),
B(7),700)]);b=R(K4,1);b.data[0]=AMY(B(10),EX(B(11),B(12)),B(5),400);b=(KZ(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.qw;f=c.pi;k=new M;O(k);BC(G(G(k,B(13)),f),41);k=N(k);f=c.pd;l=c.nE;f=AGB($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BI(d);c=new SL;c.rL=d;g=new SJ;e.then(Bk(c,"f"),Bk(g,"f"));}}
function Zy(b){var c,d,e,f,g,h,i,j,k;c=new Rz;d=new QF;c.oC=new $rt_globals.TextDecoder("utf-16");e=new Uz;e.nA=c;c.p_=e;e=new Uv;e.sR=c;c.lF=e;f=new Uw;f.p1=c;c.rU=new $rt_globals.ResizeObserver(Bk(f,"f"));e=new Ut;e.nb=c;c.mg=e;c.hO=1;f=new N_;f.vx=null;f.i1=ARY;c.lh=f;c.o0=b;f=new Uu;f.r3=c;e=Bk(f,"f");b.onmessage=e;e=Zs();b.postMessage(e);c.ma=(DV()).getElementById("canvasDiv");b=Xy();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dk
=b;c.ma.appendChild(b);f=c.dk;e=AKq(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)Ob(B(2),B(14));else{g=new Oy;e=c.dk;f=c.lF;g.df=null;g.gK=e;g.cb=AQG(f);h=$rt_globals.window;i=R(Dg,14);j=i.data;k=new Vi;k.my=g;j[0]=CP(g,e,B(15),k);f=new Vj;f.qE=g;j[1]=CP(g,e,B(16),f);f=new Vk;f.nq=g;j[2]=CP(g,e,B(17),f);f=new Vl;f.sL=g;j[3]=CP(g,e,B(18),f);f=new Vm;f.pT=g;j[4]=CP(g,e,B(19),f);f=new Vn;f.mU=g;j[5]=CP(g,e,B(20),f);k=new Vo;k.sZ=g;j[6]=CP(g,e,B(21),k);k=new Vp;k.p3=g;j[7]=CP(g,e,B(22),k);k=new Vq;k.m3
=g;j[8]=CP(g,e,B(23),k);k=new Vr;k.r_=g;j[9]=CP(g,e,B(24),k);k=new WB;k.rH=g;j[10]=CP(g,e,B(25),k);k=new WC;k.qR=g;j[11]=AAu(g,h,B(26),k,1);k=new WD;k.lZ=g;j[12]=CP(g,h,B(27),k);k=new WE;k.sp=g;j[13]=CP(g,h,B(28),k);g.uU=AOa(i);YR(g,e);c.kS=g;c.fN=AP6(b,c.lF);AMD(c.rU,c.dk);e=$rt_globals.window;g=c.mg;e.addEventListener("resize",Bk(g,"handleEvent"));c.e3=ZK(d,YK(c));R9(c);}AA0(c);}
var Mo=F(0);
var LS=F(0);
function Vd(){var a=this;C.call(a);a.jL=null;a.fA=null;}
function AAl(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Vd;c.fA=b;d=c;b.classObject=d;}return c;}
function HA(a){if(a.jL===null)a.jL=$rt_str(a.fA.$meta.name);return a.jL;}
function Hr(a){return a.fA.$meta.primitive?1:0;}
function HG(a){return AAl(a.fA.$meta.item);}
var X5=F();
function Bk(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function KB(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var XR=F();
function AC7(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AAo(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AAo(d[e],c))return 1;e=e+1|0;}return 0;}
function Gg(){var a=this;C.call(a);a.g2=null;a.kh=null;a.iy=0;a.i3=0;}
function ARZ(){var a=new Gg();U(a);return a;}
function AR0(a){var b=new Gg();Bj(b,a);return b;}
function U(a){a.iy=1;a.i3=1;}
function Bj(a,b){a.iy=1;a.i3=1;a.g2=b;}
function AGj(a){return a;}
function AL3(a){return a.g2;}
function AMa(a){var b;b=a.kh;if(b===a)b=null;return b;}
var DN=F(Gg);
function AR1(){var a=new DN();AAJ(a);return a;}
function AAJ(a){U(a);}
var Bn=F(DN);
function ARx(a){var b=new Bn();ANV(b,a);return b;}
function ANV(a,b){Bj(a,b);}
var Zx=F(Bn);
var C8=F(0);
var CH=F(0);
var If=F(0);
function By(){var a=this;C.call(a);a.bR=null;a.hn=0;}
var AR2=null;var AR3=null;var AR4=null;function Ex(){Ex=Br(By);ANv();}
function AGY(){var a=new By();Xd(a);return a;}
function FE(a){var b=new By();G2(b,a);return b;}
function I2(a,b,c){var d=new By();LE(d,a,b,c);return d;}
function Xd(a){Ex();a.bR=AR2;}
function G2(a,b){Ex();LE(a,b,0,b.data.length);}
function LE(a,b,c,d){var e;Ex();e=BQ(d);a.bR=e;Dk(b,c,e,0,d);}
function Lz(b){var c;Ex();c=AGY();c.bR=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bR.data;if(b<c.length)return c[b];}d=new GP;U(d);J(d);}
function I(a){return a.bR.data.length;}
function E9(a){return a.bR.data.length?0:1;}
function OM(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=I(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dk(a.bR,b,d,e,c);return;}}g=new Bx;U(g);J(g);}
function Te(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Eu(a,b){if(a===b)return 1;return Te(a,b,0);}
function Gn(a,b,c){var d,e,f,g,h;d=Bb(0,c);if(b<65536){e=b&65535;while(true){f=a.bR.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=HC(b);h=H6(b);while(true){f=a.bR.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FK(a,b,c){var d,e,f,g,h;d=Y(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bR.data[d]==e)break;d=d+(-1)|0;}return d;}f=HC(b);g=H6(b);while(true){if(d<1)return (-1);h=a.bR.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Yu(a,b,c){var d,e,f;d=Bb(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function B7(a,b,c){var d,e;d=BH(b,c);if(d>0){e=new Bx;U(e);J(e);}if(!d){Ex();return AR3;}if(!b&&c==I(a))return a;return I2(a.bR,b,c-b|0);}
function Dq(a,b){return B7(a,b,I(a));}
function OU(a,b,c){return B7(a,b,c);}
function EX(a,b){var c,d,e,f,g,h;if(E9(b))return a;if(E9(a))return b;c=BQ(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Lz(c);}
function T4(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BC(d,L(a,f));}f=f+1|0;}G(d,Dq(a,f));return N(d);}
function QJ(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B7(a,b,c+1|0);}
function AEi(a){return a;}
function Ge(a){var b,c,d,e,f;b=a.bR.data;c=BQ(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cs(b){Ex();return b===null?B(29):b.cm();}
function Dc(b){var c;Ex();c=new M;O(c);return N(S(c,b));}
function Bo(a,b){var c,d;if(a===b)return 1;if(!(b instanceof By))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Kz(a){var b,c,d,e;a:{if(!a.hn){b=a.bR.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hn=(31*a.hn|0)+e|0;d=d+1|0;}}}return a.hn;}
function Lc(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gk;Bj(b,B(30));J(b);}AR5=1;d=new PT;d.jx=R(CM,10);d.fT=(-1);d.ed=(-1);d.bn=(-1);e=new Gp;e.ea=1;e.bC=b;e.W=BQ(I(b)+2|0);Dk(Ge(b),0,e.W,0,I(b));f=e.W.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.pU=g;e.fD=0;EM(e);EM(e);d.f=e;d.c8=0;d.ku=Wz(d,(-1),0,null);if(!C9(d.f)){b=new H9;h=d.f;IC(b,B(31),h.bC,h.cT);J(b);}if(d.mA)d.ku.dN();b=Cj();h=new Ri;h.hM=(-1);h.jT=(-1);h.tX=d;h.rQ=d.ku;h.h4=a;h.hM=0;g=I(a);h.jT=g;e=new T6;i=h.hM;j=d.fT;k=d.ed+1|0;l=d.bn+1|0;e.g$
=(-1);m=j+1|0;e.nl=m;e.dj=BF(m*2|0);f=BF(l);e.iW=f;G$(f,(-1));if(k>0)e.ki=BF(k);G$(e.dj,(-1));Ws(e,a,i,g);h.cl=e;e.eP=1;n=0;m=0;if(!I(a)){f=R(By,1);f.data[0]=B(31);}else{while(true){l=I(h.h4);if(!Xo(h))l=h.jT;e=h.cl;if(e.dK>=0&&YW(e)==1){e=h.cl;e.dK=Iq(e);if(Iq(h.cl)==AAM(h.cl)){e=h.cl;e.dK=e.dK+1|0;}g=h.cl.dK;g=g<=l&&L2(h,g)?1:0;}else g=L2(h,h.hM);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BW(b,OU(a,m,AB$(h)));m=YE(h);n=g;}a:{BW(b,OU(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bt(b,g)))break a;Eb(b,
g);}}if(g<0)g=0;f=Hl(b,R(By,g));}return f;}
function AGu(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Y(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function ANv(){AR2=BQ(0);AR3=AGY();AR4=new RL;}
var Es=F(Gg);
var GT=F(Es);
var Y_=F(GT);
var DG=F();
function E1(){DG.call(this);this.fc=0;}
var AR6=null;var AR7=null;function ABK(a){var b=new E1();Jc(b,a);return b;}
function Jc(a,b){a.fc=b;}
function IR(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new C5;Bj(b,B(32));J(b);}d=I(b);if(0==d){b=new C5;Bj(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new C5;U(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=N4(L(b,f));if(i<0){j=new C5;k=B7(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bj(j,N(b));J(j);}if(i>=c){j=new C5;l=B7(b,0,d);b=new M;O(b);G(G(S(G(b,B(35)),c),B(36)),l);Bj(j,N(b));J(j);}g=Ba(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new C5;k=B7(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bj(j,N(b));J(j);}b=new C5;j=new M;O(j);S(G(j,B(38)),c);Bj(b,N(j));J(b);}
function FJ(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AR7===null){AR7=R(E1,256);c=0;while(true){d=AR7.data;if(c>=d.length)break a;d[c]=ABK(c-128|0);c=c+1|0;}}}return AR7.data[b+128|0];}return ABK(b);}
function Ll(a){var b;b=a.fc;return (MJ(ARi(20),b,10)).cm();}
function MV(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HO(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Jr(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AIw(a,b){b=b;return BH(a.fc,b.fc);}
function ABp(){AR6=E($rt_intcls());}
function F3(){var a=this;C.call(a);a.z=null;a.L=0;}
function AR8(){var a=new F3();O(a);return a;}
function ARi(a){var b=new F3();FH(b,a);return b;}
function O(a){FH(a,16);}
function FH(a,b){a.z=BQ(b);}
function MJ(a,b,c){return Zn(a,a.L,b,c);}
function Zn(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)B$(a,b,b+1|0);else{B$(a,b,b+2|0);f=a.z.data;g=b+1|0;f[b]=45;b=g;}a.z.data[b]=GR(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Ba(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;B$(a,b,b+i|0);if(e)e=b;else{f=a.z.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.z.data;b=e+1|0;f[e]=GR($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AAb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BH(c,0.0);if(!d){B$(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B$(a,b,b+4|0);e=a.z.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B$(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B$(a,b,b+8|0);d=b;}else{B$(a,b,b+9|0);e=a.z.data;d=b+1|0;e[b]=45;}e=a.z.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AR9;Z8(c,f);d=f.jY;g=f.jF;h=f.mP;i=1;j=1;if(h)j=2;k=9;l=AM3(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bb(k,i+1|0);g=0;}else{d=d/AR$.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;B$(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.z.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.z.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.z.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function Ym(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BH(c,0.0);if(!d){B$(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){B$(a,b,b+4|0);e=a.z.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){B$(a,b,b+3|0);e=a.z.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){B$(a,b,b+8|0);d=b;}else{B$(a,b,b+9|0);e=a.z.data;d=b+1|0;e[b]=45;}e=a.z.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AR_;Zq(c,f);g=f.kw;h=f.jr;i=f.mt;j=1;k=1;if(i)k=2;l=18;m=AKR(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bb(l,j+1|0);h=0;}else{g=Dd(g,ASa.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;B$(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.z.data;k=b+1|0;e[b]=45;}n=B9(1569325056, 23283064);o=0;while(o<l){if(OL(n,Ec))d=0;else{d=Eq(Dd(g,n));g=
L$(g,n);}e=a.z.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Dd(n,X(10));o=o+1|0;}if(h){e=a.z.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AM3(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AKR(b){var c,d,e,f,g;c=X(1);d=0;e=16;f=ASb.data;g=f.length-1|0;while(g>=0){if(EW(L$(b,BM(c,f[g])),Ec)){d=d|e;c=BM(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BC(a,b){return a.lq(a.L,b);}
function Wf(a,b,c){B$(a,b,b+1|0);a.z.data[b]=c;return a;}
function IU(a,b){var c,d;c=a.z.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.z=Xu(a.z,d);}
function N(a){return I2(a.z,0,a.L);}
function VZ(a,b,c,d){return a.kR(a.L,b,c,d);}
function Mj(a,b,c,d,e){var f,g,h,i;B$(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.z.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HQ(a,b){return a.j5(b,0,b.data.length);}
function B$(a,b,c){var d,e,f,g;d=a.L;e=d-b|0;a.hh((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.z.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.L=a.L+(c-b|0)|0;}
var Hu=F(0);
var M=F(F3);
function K6(){var a=new M();AOi(a);return a;}
function AOi(a){O(a);}
function G(a,b){var c;c=a.L;if(b===null)b=B(29);LA(a,c,b);return a;}
function BX(a,b){LA(a,a.L,b);return a;}
function S(a,b){MJ(a,b,10);return a;}
function Hs(a,b){var c,d,e,f,g,h,i,j;c=a.L;d=1;if(AFS(b,Ec)){d=0;b=AQs(b);}a:{if(Kv(b,X(10))<0){if(d)B$(a,c,c+1|0);else{B$(a,c,c+2|0);e=a.z.data;f=c+1|0;e[c]=45;c=f;}a.z.data[c]=GR(Eq(b),10);}else{g=1;h=X(1);i=Fp(X(-1),X(10));b:{while(true){j=BM(h,X(10));if(Kv(j,b)>0){j=h;break b;}g=g+1|0;if(Kv(j,i)>0)break;h=j;}}if(!d)g=g+1|0;B$(a,c,c+g|0);if(d)f=c;else{e=a.z.data;f=c+1|0;e[c]=45;}while(true){if(EW(j,Ec))break a;e=a.z.data;c=f+1|0;e[f]=GR(Eq((Fp(b,j))),10);b=MH(b,j);j=Fp(j,X(10));f=c;}}}return a;}
function E4(a,b){AAb(a,a.L,b);return a;}
function W8(a,b){BC(a,b);return a;}
function FO(a,b){LA(a,a.L,!b?B(39):B(40));return a;}
function AB0(a,b,c){var d,e,f,g,h,i;d=BH(b,c);if(d<=0){e=a.L;if(b<=e){if(d){f=e-c|0;a.L=e-(c-b|0)|0;g=0;while(g<f){h=a.z.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GP;U(i);J(i);}
function U3(a,b){var c,d,e,f;if(b>=0){c=a.L;if(b<c){c=c-1|0;a.L=c;while(b<c){d=a.z.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GP;U(f);J(f);}
function AIr(a,b,c,d,e){Mj(a,b,c,d,e);return a;}
function AFE(a,b,c,d){VZ(a,b,c,d);return a;}
function XG(a){return a.L;}
function DD(a){return N(a);}
function AIz(a,b){IU(a,b);}
function AIY(a,b,c){Wf(a,b,c);return a;}
function LA(a,b,c){var d,e,f;if(b>=0&&b<=a.L){a:{if(c===null)c=B(29);else if(E9(c))break a;IU(a,a.L+I(c)|0);d=a.L-1|0;while(d>=b){a.z.data[d+I(c)|0]=a.z.data[d];d=d+(-1)|0;}a.L=a.L+I(c)|0;d=0;while(d<I(c)){e=a.z.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new GP;U(c);J(c);}
var Ee=F(GT);
var AAt=F(Ee);
function ASc(a){var b=new AAt();AEu(b,a);return b;}
function AEu(a,b){Bj(a,b);}
var Y1=F(Ee);
function ASd(a){var b=new Y1();AER(b,a);return b;}
function AER(a,b){Bj(a,b);}
var Sz=F(0);
var Dg=F(0);
function AOa(b){var c;c=new Pf;c.t_=b;return c;}
function CJ(b,c){if(b!==null)b.gx();return c;}
var NZ=F(0);
function H1(){var a=this;C.call(a);a.k5=0;a.kf=0;}
var ASe=0;function Fy(a){ASe=ASe-1|0;}
function FL(a,b,c){Iy(a,Yf(b,c,400,0));}
function PN(a,b){return J2(a,b,0.875);}
function J2(a,b,c){return Ed(a,b)+c|0;}
function Qf(){var a=this;H1.call(a);a.i6=null;a.bj=null;a.l5=null;}
function Ej(a){var b,c,d;b=a.bj;c=a.k5;d=a.kf;b.clearRect(0.0,0.0,c,d);}
function Q1(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bj;d="center";c.textAlign=d;break a;case 2:c=a.bj;d="right";c.textAlign=d;break a;default:break a;}d=a.bj;c="left";d.textAlign=c;}}
function CB(a,b){Iy(a,I7(b.mj));}
function Iy(a,b){var c;if(!(a.l5==b?1:0)){c=a.bj;a.l5=b;c.font=b;}}
function Yf(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Cd(a,b,c,d){var e,f,g;e=a.bj;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function AAI(a,b){var c,d;if(!b){c=a.bj;d="alphabetic";c.textBaseline=d;}else{d=a.bj;c="top";d.textBaseline=c;}}
function Ed(a,b){var c;c=$rt_ustr(b);return a.bj.measureText(c).width;}
function KI(a,b,c,d){var e,f;e=a.bj;f=$rt_ustr(FE(Zh([35,Gl(b/16|0),Gl(b%16|0),Gl(c/16|0),Gl(c%16|0),Gl(d/16|0),Gl(d%16|0)])));e.fillStyle=f;}
var Xm=F();
var ABG=F();
function D9(b,c){if(b===c)return 1;return b!==null?b.dW(c):c!==null?0:1;}
function BI(b){if(b!==null)return b;b=new Gk;Bj(b,B(31));J(b);}
var Bg=F(0);
function SK(){C.call(this);this.qW=null;}
var Bv=F(0);
var ZJ=F();
var Xr=F(0);
function I4(b,c,d){return AMY(B(41),EX(B(11),b),c,d);}
var ABf=F(0);
var ABa=F(0);
function KZ(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C$(b,f+g|0);Dk(c,0,d,f,g);return d;}
function Kd(b,c,d){Dk(b,c,d,0,d.data.length);return d;}
function P1(b,c,d){var e;if(c>0)Dk(b,0,d,0,c);e=d.data.length;if(c<e)Dk(b,c+1|0,d,c,e-c|0);return d;}
function Y5(b,c,d,e){var f;if(c>0)Dk(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dk(b,d,e,c,f-d|0);}return e;}
function GS(b){var c;c=new US;c.ib=b;return c;}
function K4(){var a=this;C.call(a);a.qw=null;a.pi=null;a.pd=null;a.nE=0;}
function AMY(a,b,c,d){var e=new K4();ALT(e,a,b,c,d);return e;}
function ALT(a,b,c,d,e){a.qw=b;a.pi=c;a.pd=d;a.nE=e;}
var X2=F();
function AGB(b,c){return {style:b,weight:c};}
var BU=F(0);
function SL(){C.call(this);this.rL=null;}
function ACI(a,b){var c,d,e;c=a.rL;d=0;while(d<b.length){e=b[d];(DV()).fonts.add(e);d=d+1|0;}c.sD=1;b=c.po;if(b!==null)Zy(b);}
var SJ=F();
function ANE(a,b){$rt_globals.console.info("font load error "+b);}
var KE=F();
var ASf=null;var ASg=null;function Bw(){if(ASf===null)ASf=AJI(ASh,0);return ASf;}
function KY(){if(ASg===null)ASg=AJI(ASi,0);return ASg;}
function AQm(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KK(b)&&(e+f|0)<=KK(d)){a:{b:{if(b!==d){g=HG(Cx(b));h=HG(Cx(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hr(g)&&!Hr(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fA;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AAo(n.constructor,o)?1:0)){JU(b,c,d,e,j);b=new H7;U(b);J(b);}j=j+1|0;k=m;}JU(b,c,d,e,f);return;}if(!Hr(g))break a;if(Hr(h))break b;else break a;}b=new H7;U(b);J(b);}}JU(b,c,
d,e,f);return;}b=new H7;U(b);J(b);}b=new Bx;U(b);J(b);}d=new Gk;Bj(d,B(42));J(d);}
function Dk(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KK(b)&&(e+f|0)<=KK(d)){JU(b,c,d,e,f);return;}b=new Bx;U(b);J(b);}
function JU(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Fn(){return Long_fromNumber(new Date().getTime());}
function AAO(){return ARV($rt_globals.performance.now()*1000000.0);}
var AA8=F();
var YG=F();
function Ob(b,c){var d,e,f;d=(DV()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DV()).getElementById($rt_ustr(b)).appendChild(d);}
function Xy(){return (DV()).createElement("canvas");}
function AKq(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ACB=F();
var Mu=F();
function AKa(a,b){var c;c=new Bn;Bj(c,$rt_str(b.message));J(c);}
var ABw=F();
function Fj(b){return $rt_str(b);}
var XC=F();
function Xu(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=Y(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ABV(b,c){var d,e,f,g;b=b.data;d=ET(c);e=d.data;f=Y(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACj(b,c){var d,e,f,g;b=b.data;d=BF(c);e=d.data;f=Y(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C$(b,c){var d,e,f,g;d=b.data;e=Tx(HG(Cx(b)),c);f=Y(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Yd(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));G(c,e[d]);d=d+1|0;}BX(c,B(45));return N(c);}
function AAH(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));S(c,e[d]);d=d+1|0;}BX(c,B(45));return N(c);}
function AMr(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));E4(c,e[d]);d=d+1|0;}BX(c,B(45));return N(c);}
function AO0(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));f=e[d];Ym(c,c.L,f);d=d+1|0;}BX(c,B(45));return N(c);}
function G$(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BB;U(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function YC(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=ARY;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Y(j,h+f|0);l=h+(2*f|0)|0;m=Y(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.lx(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AAc(b,c){return SS(b,0,b.data.length,c);}
function SS(b,c,d,e){var f,g,h,i,j;f=BH(c,d);if(f>0){g=new BB;U(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var I3=F(0);
var YU=F();
function AOK(a,b){return a.tT(b);}
function AEF(a){return a.vj();}
var Zl=F();
var Fx=F(0);
var RL=F();
var Bx=F(Bn);
var AAa=F();
function KK(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(ASj());}return b.data.length;}
function Tx(b,c){if(b===null){b=new Gk;U(b);J(b);}if(b===E($rt_voidcls())){b=new BB;U(b);J(b);}if(c>=0)return AN0(b.fA,c);b=new WQ;U(b);J(b);}
function AN0(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gk=F(Bn);
var H7=F(Bn);
var CZ=F();
var ASk=null;var ASl=null;var ASm=null;var ASn=null;var ASo=null;var ASp=null;var ASq=null;var ASr=null;var ASs=null;var ASt=null;function VO(b){var c,d;c=new By;d=BQ(1);d.data[0]=b;G2(c,d);return c;}
function Li(b){return b>=65536&&b<=1114111?1:0;}
function CC(b){return (b&64512)!=55296?0:1;}
function CX(b){return (b&64512)!=56320?0:1;}
function Ln(b){return !CC(b)&&!CX(b)?0:1;}
function G1(b,c){return CC(b)&&CX(c)?1:0;}
function Eg(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function HC(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function H6(b){return (56320|b&1023)&65535;}
function EG(b){return Gj(b)&65535;}
function Gj(b){if(ASn===null){if(ASq===null)ASq=AAG();ASn=Y8((ASq.value!==null?$rt_str(ASq.value):null));}return Rp(ASn,b);}
function Ek(b){return Gi(b)&65535;}
function Gi(b){if(ASm===null){if(ASr===null)ASr=ABq();ASm=Y8((ASr.value!==null?$rt_str(ASr.value):null));}return Rp(ASm,b);}
function Rp(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BH(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function TF(b,c){if(c>=2&&c<=36){b=N4(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function N4(b){var c,d,e,f,g,h,i,j,k,l;if(ASl===null){if(ASs===null)ASs=Zb();c=(ASs.value!==null?$rt_str(ASs.value):null);d=AMb(Ge(c));e=I1(d);f=BF(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Mp(d)|0;j=j+Mp(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}ASl=f;}g=ASl.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BH(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GR(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gb(b){var c;if(b<65536){c=BQ(1);c.data[0]=b&65535;return c;}return Zh([HC(b),H6(b)]);}
function Co(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Ln(b&65535))return 19;if(ASo===null){if(ASt===null)ASt=ACr();d=(ASt.value!==null?$rt_str(ASt.value):null);e=R(MD,16384);f=e.data;g=ET(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=JS(L(d,l));if(m==64){l=l+1|0;m=JS(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Ba(c,JS(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=JS(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AGq(k,k+i|0,ABV(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AGq(k,k+i|0,ABV(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}ASo=C$(e,j);}e=ASo.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.pE)o=p+1|0;else{c=d.nQ;if(b>=c)return d.n5.data[b-c|0];c=p-1|0;}}return 0;}
function IO(b){a:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function F9(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Co(b)!=16?0:1;}
function OA(b){switch(Co(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function PU(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return OA(b);}return 1;}
function Xl(){ASk=E($rt_charcls());ASp=R(CZ,128);}
function AAG(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ABq(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Zb(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ACr(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Ro=F(0);
var D6=F(0);
var ABF=F(0);
function DV(){return $rt_globals.window.document;}
function MZ(){var a=this;C.call(a);a.nS=null;a.nT=null;a.nU=null;}
function ALc(a,b){var c,d,e;c=a.nS;d=a.nT;e=a.nU;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=I7(JW(c));c=d.qW;c.po=b;if(c.sD)Zy(b);}}
var Zj=F();
function Fd(){return AOL();}
function AOL(){return Math.random();}
function Y(b,c){if(b<c)c=b;return c;}
function Bb(b,c){if(b>c)c=b;return c;}
function LX(b){if(b<=0)b= -b|0;return b;}
var Oo=F(0);
var P7=F(0);
var PY=F(0);
var St=F(0);
var V0=F(0);
var TG=F(0);
var NI=F(0);
var Xq=F();
function AIU(a,b,c){a.Bm($rt_str(b),KB(c,"handleEvent"));}
function AJb(a,b,c){a.yL($rt_str(b),KB(c,"handleEvent"));}
function ADG(a,b){return a.tT(b);}
function AKf(a,b,c,d){a.w$($rt_str(b),KB(c,"handleEvent"),d?1:0);}
function ANU(a,b){return !!a.Br(b);}
function AEI(a){return a.vj();}
function AC6(a,b,c,d){a.z5($rt_str(b),KB(c,"handleEvent"),d?1:0);}
var BB=F(Bn);
var WQ=F(Bn);
var GP=F(Bx);
var Yr=F();
function Zs(){return "ping";}
function DR(){C.call(this);this.iu=null;}
var ASu=null;var ASv=null;var ASw=null;var ASx=null;var ASy=null;var ASz=null;function JL(){JL=Br(DR);AEP();}
function Md(a){var b=new DR();Z1(b,a);return b;}
function Z1(a,b){JL();a.iu=b;}
function JW(b){var c,d,e,f,g;JL();if(b===null)return null;a:{c=b;if(ASv!==null){d=$rt_str(typeof c);if(!Bo(d,B(46))&&!Bo(d,B(47))){if(Bo(d,B(48))){b=ASw.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Md(c);g=f;b=ASw;e=new $rt_globals.WeakRef(g);b.set(c,e);ASy.register(g,c);return f;}if(!Bo(d,B(49)))break a;else{b=ASx.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Md(c);g=f;b=ASx;e=new $rt_globals.WeakRef(g);b.set(c,
e);ASz.register(g,c);return f;}}b=ASv.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Md(c);b=ASv;e=new $rt_globals.WeakRef(f);b.set(c,e);return f;}}return Md(c);}
function I7(b){JL();if(b!==null)return b.iu;return null;}
function ANK(a,b){if(b===a)return 1;if(b===null)return 0;if(!(b instanceof DR))return 0;return a.iu!==b.iu?0:1;}
function AEP(){ASu=new $rt_globals.WeakMap();ASv=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();ASw=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ASx=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ASy=ASw===null?null:new $rt_globals.FinalizationRegistry(Bk(new VR,"accept"));ASz=ASx===null?null:new $rt_globals.FinalizationRegistry(Bk(new VS,"accept"));}
var NH=F(0);
function Rz(){var a=this;C.call(a);a.oC=null;a.p_=null;a.lF=null;a.ma=null;a.dk=null;a.rU=null;a.mg=null;a.kS=null;a.fN=null;a.hO=0;a.uz=0;a.px=null;a.e3=null;a.o0=null;a.lh=null;a.qZ=0;}
function AA0(a){a.dk.focus();}
function ML(a,b){var c;c=DV();b=$rt_ustr(b);c.title=b;}
function YK(a){var b,c,d;b=new LN;c=a.fN;d=a.kS.cb;b.U=c;b.r=d;b.bW=a;return b;}
function R9(a){a.uz=$rt_globals.requestAnimationFrame(Bk(a.p_,"onAnimationFrame"));}
function FN(a){a.hO=1;}
function R8(a,b,c){var d,e;a.kS.df=Cn(b,c);d=a.dk;e=b;d.width=e;d=a.dk;e=c;d.height=e;d=a.fN;Bm(d.dp,b,c);e=d.bx;d=d.dp;b=d.a;c=d.b;e.viewport(0,0,b,c);a.e3.ca(a.fN.dp,JV(a));a.e3.bH();}
function Gd(a,b){var c,d,e;c=a.px;d=a.dk;if(D9(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.px=b;}
function IN(a){return $rt_globals.performance.now()/1000.0;}
function JV(a){return $rt_globals.window.devicePixelRatio;}
function UT(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AB6(b,1);else{c=new VB;d=$rt_globals.window.showDirectoryPicker();e=new VA;e.nW=b;e.nX=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function K8(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AB6(b,0);else{c=new Wb;d=$rt_globals.window.showOpenFilePicker();e=new Wa;e.oA=b;e.oz=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function CY(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.qZ+1|0;a.qZ=e;f=a.lh;g=FJ(e);f.hk=Lk(f,f.hk,g);g=TM(f,g);LO(g,b);LO(g,b);f.i5=f.i5+1|0;b=a.o0;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof By)f=$rt_ustr(c);else if(U4(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(U4(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(U4(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof Km)){b=new BB;c=HA(Cx(c));f
=new M;O(f);G(G(f,B(50)),c);Bj(b,N(f));J(b);}c=c;f=c.gm;if(f===null)f=c.eI;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function PP(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new PE;e.mk=b;b=ACy(c);d.then(Bk(e,"f"),Bk(b,"f"));}
function Tg(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.oC;b=(Ge(b)).data;f=f.decode(b);b=e.writeText(f);e=new Tv;e.qF=c;c=ACy(d);b.then(Bk(e,"f"),Bk(c,"f"));}
function Wp(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function ACy(b){var c;c=new L8;c.qQ=b;return c;}
var Cg=F(0);
var QF=F();
function ZK(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Bo(B(51),c))d=(AMQ(I(c)<=0?B(31):Dq(c,1))).cg(b);else{d=new Ms;D8(d,b);b=$rt_globals.fetch("test.wasm");e=new MB;b=b.then(Bk(e,"f"));e=new MA;b=b.then(Bk(e,"f"));e=new Mz;f=new My;b.then(Bk(e,"f"),Bk(f,"f"));}return d;}
var Bh=F(0);
var ZE=F();
var YV=F();
var Zg=F();
var P2=F(0);
function Uz(){C.call(this);this.nA=null;}
function AHC(a,b){var c,d;c=b;b=a.nA;if(!(!b.e3.dG(c/1000.0)&&!b.hO)){d=b.fN.dp;if(Ba(d.a,d.b)){b.hO=0;b.e3.bH();}}R9(b);}
function Uv(){C.call(this);this.sR=null;}
function C7(a){FN(a.sR);}
var O7=F(0);
function Uw(){C.call(this);this.p1=null;}
function AFW(a,b,c){var d,e,f,g;c=a.p1;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dk){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=JV(c);R8(c,GW(f.width*g),GW(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];R8(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ABM=F();
function AMD(b,c){ALC(b,c,ADc());}
function ADc(){return {box:'device-pixel-content-box'};}
function ALC(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cf=F(0);
function Ut(){C.call(this);this.nb=null;}
function ALl(a,b){b=a.nb;b.e3.ca(b.fN.dp,JV(b));b.e3.bH();}
var Kj=F(0);
function En(){C.call(this);this.jQ=null;}
var Ea=F(0);
var Wo=F(0);
var Mn=F(0);
function N_(){var a=this;En.call(a);a.hk=null;a.i1=null;a.vx=null;a.i5=0;}
function TM(a,b){var c,d;c=a.hk;while(true){if(c===null)return null;d=IQ(a.i1,b,c.ij);if(!d)break;c=d>=0?c.bS:c.bE;}return c;}
function Lk(a,b,c){var d,e;if(b===null){b=new IM;d=null;b.ij=c;b.hR=d;b.e8=1;b.fg=1;return b;}e=IQ(a.i1,c,b.ij);if(!e)return b;if(e>=0)b.bS=Lk(a,b.bS,c);else b.bE=Lk(a,b.bE,c);D7(b);return I0(b);}
function Jn(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=IQ(a.i1,c,b.ij);if(d<0)b.bE=Jn(a,b.bE,c);else if(d>0)b.bS=Jn(a,b.bS,c);else{e=b.bS;if(e===null)return b.bE;f=b.bE;g=R(IM,e.e8).data;h=0;while(true){b=e.bE;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bS;while(h>0){h=h+(-1)|0;j=g[h];j.bE=b;D7(j);b=I0(j);}e.bS=b;e.bE=f;D7(e);b=e;}D7(b);return I0(b);}
function Uu(){C.call(this);this.r3=null;}
function AMA(a,b){var c,d,e,f,g,h,i,j,k;c=a.r3.lh;b=b.data;if(!(b===Zs()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BB;U(b);J(b);}if(b.length<1){b=new BB;U(b);J(b);}d=FJ(b[0]);e=TM(c,d);if(e===null)c=null;else{c.hk=Jn(c,c.hk,d);c.i5=c.i5+1|0;c=e.hR;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=Fj(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new RF;ABs(e);e.gZ=k;}else e=(k instanceof $rt_globals.File?1:0)?AAg(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AAg(k,null);g[h]=e;h=j;}c.m(f);}}
var AB8=F();
var ACx=F();
var I8=F(0);
var VR=F();
function ALG(a,b){JL();ASw.delete(b);}
var Y$=F();
var VS=F();
function AJw(a,b){JL();ASx.delete(b);}
function Oy(){var a=this;C.call(a);a.cb=null;a.gK=null;a.uU=null;a.df=null;}
function Mk(){return (DV()).activeElement;}
function CP(a,b,c,d){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"));return VI(a,b,c,d);}
function AAu(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"),!!e);return VI(a,b,c,d);}
function VI(a,b,c,d){var e;e=new O3;e.tJ=b;e.tL=c;e.tK=d;return e;}
function SN(a,b){var c;c=new TR;c.sK=b;return c;}
function Eo(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gK.getBoundingClientRect();e=Cn(GW((b.clientX-d.left)*c),GW((b.clientY-d.top)*c));f=new Bl;g=a.df;f.a=g.a;f.b=g.b;d=new LJ;Th(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.o=e;d.tm=f;return d;}
function WH(a,b,c){var d,e,f,g;d=new N3;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Th(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jo=0;d.dm=e;d.bg=f;d.iF=c;d.qa=g;return d;}
function Dx(a,b){b.stopPropagation();b.preventDefault();}
function YR(a,b){var c;c=new Wl;c.oc=b;b.onpointerdown=Bk(c,"f");c=new Wn;c.ne=b;b.onpointerup=Bk(c,"f");}
function Kx(){var a=this;C.call(a);a.pv=null;a.cv=null;a.bx=null;a.ri=null;a.uf=0;a.vg=0;a.i8=null;a.vM=null;a.vu=null;a.uw=null;a.fQ=null;a.g4=null;a.vC=null;a.nF=null;a.dp=null;a.sz=null;a.kJ=0;a.jk=0;a.lr=0;a.la=0;a.hF=0;a.lp=null;}
function FF(a,b,c){return Fk(a,b,c,400,0);}
function CI(a,b,c){return LW(a.pv,b,c);}
function Fc(a,b){var c,d,e,f,g;c=a.bx;d=b.ba;e=b.bp;f=b.bh;g=b.bq;c.clearColor(d,e,f,g);a.bx.clear(16384);}
function Ct(a,b){var c;if(b==a.jk)return b;if(!b)a.bx.disable(3042);else{a.bx.enable(3042);a.bx.blendFuncSeparate(770,771,1,1);}c=a.jk;a.jk=b;return c;}
function TY(a,b,c,d){var e,f,g;a.la=1;a.hF=1;e=a.lp;f=d.a;g=d.b;e.pH=b;e.pI=c;e.pG=f;e.pF=g;Ti(a);}
function UJ(a){a.la=0;a.hF=0;Ti(a);}
function Ti(a){var b,c,d,e,f,g;b=a.lr;c=a.la;if(b!=c){a.lr=c;if(!c)a.bx.disable(3089);else a.bx.enable(3089);}if(a.lr&&a.hF){a.hF=0;d=a.bx;e=a.lp;b=e.pH;c=a.dp.b-e.pI|0;f=e.pF;c=c-f|0;g=e.pG;d.scissor(b,c,g,f);}}
function Ke(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.nF;c=a.kJ;d=b.f5.qM;e=b.dP;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dP;h=b.me;e.bindBuffer(34962,h);i=b.f5.lK.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dP;m=k.gR;n=k.eE;o=b.f5.j2*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.eE|0;j=j+1|0;}a:{e=b.sN;if(e!==null){c=0;b.dP.bindBuffer(34962,e);i=b.f5.pr.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dP;j=e.gR;p=e.eE;m=e.nN;n=b.f5.n_;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.eE|0;g=g+1|0;}}}q=b.sf;if(q===null){c=b.qe;if(c>0)b.dP.drawArrays(4,0,c);}else{b.dP.bindBuffer(34963,q);k=b.dP;g=b.sq;k.drawElements(4,g,5123,0);}a.kJ=d;}
function BJ(a,b,c,d,e){Ks(a,a.i8);Lt(a.i8,a.bx,b,c,d,a.dp);d=a.i8;HL(a.bx,d.r2,e);Ke(a);}
function Hx(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Ks(a,a.fQ);Lt(a.fQ,a.bx,b,c,d,a.dp);Td(a.fQ,a.bx,f);d=a.fQ;j=a.bx;f=f.fa;b=f.a;c=f.b;k=e.ba;l=b;m=k/l;k=e.bp;n=c;o=k/n;k=e.bh/l;l=e.bq/n;d=d.rI;j.uniform4f(d,m,o,k,l);d=a.fQ;e=a.bx;HL(e,d.of,g);HL(e,d.mF,h);d=d.nu;e.uniform2f(d,i,0.0);Ke(a);}
function CR(a){var b,c;b=new IL;c=a.ri;b.fa=new Bl;b.dD=c;b.ey=c.c_.createTexture();ASA=ASA+1|0;return b;}
function M4(a,b){V2(a.bx,b);}
function Ks(a,b){var c,d;if(b!==a.sz){c=a.bx;d=b.ce;c.useProgram(d);a.sz=b;}}
function ABe(){var a=this;Kx.call(a);a.uY=null;a.vv=null;}
function AP6(a,b){var c=new ABe();AHW(c,a,b);return c;}
function AHW(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Tk;a.dp=new Bl;a.kJ=0;a.lp=new Vu;a.pv=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(52)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bx=b;a.cv=LW(d,4,4);g=ACW(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BQ(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new O5;XM();f=ASB;k.dP=b;k.f5=f;k.qe=h.length/f.j2|0;k.sq
=j.length;f=b.createBuffer();k.me=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.sN=null;f=b.createBuffer();k.sf=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.nF=k;a.vg=Eu(e,B(53));f=new O6;f.c_=b;a.ri=f;l=b.getParameter(3379);a.uf=l;f=new M;O(f);S(G(f,B(54)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(DX,6);i=g.data;d=new U6;KV(d,b,B(55),B(56),ASB);f=d.ce;d.r2=b.getUniformLocation(f,"uColor");a.i8=d;i[0]
=d;f=APA(b,B(57));a.vM=f;i[1]=f;f=new PK;KV(f,b,B(55),B(58),ASB);a.vu=f;i[2]=f;f=AQW(b);a.uw=f;i[3]=f;f=AP7(b);a.fQ=f;i[4]=f;f=AQ6(b);a.g4=f;i[5]=f;a.vC=g;V2(b,B(59));a.vv=new Tj;a.uY=c;}
function Fk(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cv;g=Yf(b,c,d,e);Iy(f,g);h=f.bj.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Ed(f,B(60));m=Ed(f,B(61));h=new Ko;n=JW(g);h.lv=b;h.m9=c;o=c|0;if(o!==c){b=new M;O(b);E4(G(b,B(62)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.nK=o;h.nk=d;h.oD=e;h.dd=i;h.dY=j;h.tR=l;h.li=k;h.mj=n;h.pm=C6(i);h.vn=C6(h.dY);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.t0=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(63);}h.tI=b;return h;}
function Cp(){C.call(this);this.bc=null;}
function D8(a,b){a.bc=b;}
function AOq(a,b){return 0;}
var Is=F();
var ARY=null;function IQ(a,b,c){return b.i7(c);}
function ZO(){ARY=new Is;}
function Yx(){var a=this;C.call(a);a.b0=null;a.lG=null;a.bQ=null;a.eR=null;a.eF=null;a.f9=null;a.gJ=null;a.iY=null;a.jD=null;a.cP=null;}
function AQG(a){var b=new Yx();AKQ(b,a);return b;}
function AKQ(a,b){a.b0=CG(R(Ci,0));a.lG=CG(R(Ci,0));a.bQ=CG(R(CA,0));a.eR=CG(R(Ez,0));a.eF=CG(R(EL,0));a.f9=CG(R(E8,0));a.gJ=CG(R(FQ,0));a.iY=CG(R(Bh,0));a.jD=CG(R(Bh,0));a.cP=b;}
function SW(a,b){var c,d,e,f;C7(a.cP);c=(Cl(!b.iF?a.lG:a.b0)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bv(b);if(f)break;if(b.jo)break;e=e+1|0;}return f;}
function PL(a,b,c){var d,e,f;C7(a.cP);d=(Cl(a.f9)).data;e=d.length;f=0;while(f<e){if(d[f].he(b,c))return 1;f=f+1|0;}return 0;}
function Vi(){C.call(this);this.my=null;}
function AKM(a,b){var c;c=a.my;if(SW(c.cb,WH(c,b,1)))Dx(c,b);}
function Vj(){C.call(this);this.qE=null;}
function AK1(a,b){var c;c=a.qE;if(SW(c.cb,WH(c,b,0)))Dx(c,b);}
function Vk(){C.call(this);this.nq=null;}
function AJu(a,b){var c,d,e,f,g,h;c=a.nq;if(c.df!==null){d=Eo(c,b);e=c.cb;C7(e.cP);f=(Cl(e.bQ)).data;g=f.length;h=0;a:{while(h<g){if(f[h].cc(d))break a;h=h+1|0;}}Dx(c,b);}}
function Vl(){C.call(this);this.sL=null;}
function AIV(a,b){var c,d,e,f,g,h;c=a.sL;b.button;if(c.df!==null){d=Eo(c,b);c=c.cb;e=b.button;C7(c.cP);f=(Cl(c.bQ)).data;g=f.length;h=0;a:{while(h<g){if(f[h].cu(d,e))break a;h=h+1|0;}}}}
function Vm(){C.call(this);this.pT=null;}
function AJf(a,b){var c,d,e,f,g,h,i;c=a.pT;b.button;if(c.df!==null){d=Eo(c,b);e=c.cb;f=b.button;C7(e.cP);g=(Cl(e.bQ)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cN(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dx(c,b);}}
function Vn(){C.call(this);this.mU=null;}
function ALA(a,b){var c,d,e,f,g,h,i,j,k;c=a.mU;if(c.df!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cb;f=Eo(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C7(e.cP);i=(Cl(e.eR)).data;j=i.length;k=0;b:{while(k<j){if(i[k].ee(f,d,h))break b;k=k+1|0;}}Dx(c,b);}}
function Vo(){C.call(this);this.sZ=null;}
function AHg(a,b){var c,d,e,f,g,h,i,j;c=a.sZ;if(c.df!==null){d=Eo(c,b);e=c.cb;f=b.button;g=b.detail;C7(e.cP);h=(Cl(e.bQ)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cy(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dx(c,b);}}
function Vp(){C.call(this);this.p3=null;}
function AOS(a,b){var c,d,e,f,g,h,i;c=a.p3;if(c.df!==null){d=Eo(c,b);e=c.cb;C7(e.cP);f=(Cl(e.eF)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bv(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dx(c,b);}}
function Vq(){C.call(this);this.m3=null;}
function AGA(a,b){var c,d,e;b=a.m3.cb;c=(Cl(b.jD)).data;d=c.length;e=0;while(e<d){c[e].q();e=e+1|0;}C7(b.cP);}
function Vr(){C.call(this);this.r_=null;}
function AMH(a,b){var c,d,e;b=a.r_.cb;c=(Cl(b.iY)).data;d=c.length;e=0;while(e<d){c[e].q();e=e+1|0;}C7(b.cP);}
function WB(){C.call(this);this.rH=null;}
function AOr(a,b){var c;c=a.rH;if(c.df!==null)Eo(c,b);}
function WC(){C.call(this);this.qR=null;}
function AI8(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.qR;if(Mk()===c.gK){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cl(c.cb.gJ)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].ga();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cb.cP;m=new MT;m.sk=k;m.sl=l;g.getAsString(Bk(m,"accept"));Dx(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(64)),k),B(65)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function WD(){C.call(this);this.lZ=null;}
function AJy(a,b){var c;c=a.lZ;if(Mk()===c.gK&&PL(c.cb,SN(c,b),0))Dx(c,b);}
function WE(){C.call(this);this.sp=null;}
function ALe(a,b){var c;c=a.sp;if(Mk()===c.gK&&PL(c.cb,SN(c,b),1))Dx(c,b);}
var S$=F(0);
var Tk=F();
function LW(a,b,c){var d,e,f;d=new Qf;ASe=ASe+1|0;d.k5=b;d.kf=c;e=(DV()).createElement("canvas");d.i6=e;f=b;e.width=f;e=d.i6;f=c;e.height=f;d.bj=d.i6.getContext("2d");return d;}
var Tj=F();
function AIi(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function LN(){var a=this;C.call(a);a.U=null;a.r=null;a.bW=null;}
function ABZ(){var a=this;C.call(a);a.gO=null;a.h3=null;a.gC=0;}
function CG(a){var b=new ABZ();AHc(b,a);return b;}
function AHc(a,b){a.gO=b;}
function Z(a,b){var c,d,e;c=a.gC;d=a.gO;if(c==d.data.length)a.gO=C$(d,c+4|0);d=a.gO.data;e=a.gC;a.gC=e+1|0;d[e]=b;a.h3=null;}
function Cl(a){var b;b=a.h3;if(!(b!==null&&b.data.length==a.gC))a.h3=C$(a.gO,a.gC);return a.h3;}
var H_=F(0);
var Ci=F(0);
var CA=F(0);
function AIm(a,b){return 0;}
function ALz(a,b,c,d){return 0;}
function AEB(a,b,c){return 0;}
function ADs(a,b,c){return 0;}
var Ez=F(0);
var EL=F(0);
var E8=F(0);
var HE=F(0);
var FQ=F(0);
function Pf(){C.call(this);this.t_=null;}
function Bl(){var a=this;C.call(a);a.a=0;a.b=0;}
function Cn(a,b){var c=new Bl();Yp(c,a,b);return c;}
function Yp(a,b,c){a.a=b;a.b=c;}
function Dt(a,b){a.a=b.a;a.b=b.b;}
function Bm(a,b,c){a.a=b;a.b=c;}
function LI(a){var b,c,d;b=a.a;c=a.b;d=new M;O(d);S(G(S(G(d,B(66)),b),B(67)),c);return N(d);}
function Kr(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function Vu(){var a=this;C.call(a);a.pH=0;a.pI=0;a.pG=0;a.pF=0;}
var ABd=F();
var XP=F(0);
function O6(){C.call(this);this.c_=null;}
function KU(){var a=this;C.call(a);a.ce=null;a.vq=null;}
function AAf(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(68):B(69);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bu(Bw(),f);b=new Bn;Bj(b,f);J(b);}
function DX(){var a=this;KU.call(a);a.m2=null;a.oe=null;a.kW=null;}
function ASC(a,b,c,d){var e=new DX();KV(e,a,b,c,d);return e;}
function KV(a,b,c,d,e){var f,g,h,i,j,k;a.vq=e;f=AAf(b,35633,c);d=AAf(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.ce=g;h=e.qt.data;i=h.length;j=0;while(j<i){c=h[j];d=a.ce;k=c.gR;c=c.op;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.ce;b.linkProgram(c);if(b.getProgramParameter(c,35714)){V2(b,B(70));a.kW=new Bl;c=a.ce;a.m2=b.getUniformLocation(c,"uResolution");c=a.ce;a.oe=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bn;c=new M;O(c);G(G(c,B(71)),d);Bj(b,N(c));J(b);}
function Yz(a,b,c){var d,e,f;if(!Kr(a.kW,c)){Dt(a.kW,c);d=a.m2;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Lt(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.oe;b.uniform4f(e,i,l,h,j);Yz(a,b,f);}
function U6(){DX.call(this);this.r2=null;}
function Em(){DX.call(this);this.pM=null;}
function APA(a,b){var c=new Em();SR(c,a,b);return c;}
function ASD(a,b,c){var d=new Em();SY(d,a,b,c);return d;}
function SR(a,b,c){SY(a,b,B(55),c);}
function SY(a,b,c,d){XM();KV(a,b,c,d,ASB);c=a.ce;a.pM=b.getUniformLocation(c,"sDiffuse");}
function Td(a,b,c){var d;d=a.pM;b.uniform1i(d,0);b.activeTexture(33984);c=c.ey;b.bindTexture(3553,c);}
var PK=F(DX);
function AAY(){Em.call(this);this.uj=null;}
function AQW(a){var b=new AAY();AGG(b,a);return b;}
function AGG(a,b){var c;SR(a,b,B(72));c=a.ce;a.uj=b.getUniformLocation(c,"uContrast");}
function AAw(){var a=this;Em.call(a);a.rI=null;a.of=null;a.mF=null;a.nu=null;}
function AP7(a){var b=new AAw();ALv(b,a);return b;}
function ALv(a,b){var c;SY(a,b,B(73),B(74));c=a.ce;a.rI=b.getUniformLocation(c,"uTexTransform");c=a.ce;a.of=b.getUniformLocation(c,"uColor");c=a.ce;a.mF=b.getUniformLocation(c,"uBgColor");c=a.ce;a.nu=b.getUniformLocation(c,"uContrast");}
function X4(){var a=this;Em.call(a);a.sO=null;a.sM=null;a.oM=null;}
function AQ6(a){var b=new X4();AF_(b,a);return b;}
function AF_(a,b){var c,d;SR(a,b,B(75));c=a.ce;a.sO=b.getUniformLocation(c,"uColorB");d=a.ce;a.sM=b.getUniformLocation(d,"uColorF");d=a.ce;a.oM=b.getUniformLocation(d,"uContrast");}
var QN=F(0);
var ACz=F(0);
function HL(b,c,d){var e,f,g,h;e=d.ba;f=d.bp;g=d.bh;h=d.bq;b.uniform4f(c,e,f,g,h);}
function V2(b,c){var d,e;d=b.getError();if(d){b=Bw();e=new M;O(e);S(G(e,c),d);Bu(b,N(e));}}
function O3(){var a=this;C.call(a);a.tJ=null;a.tL=null;a.tK=null;}
function O5(){var a=this;C.call(a);a.dP=null;a.f5=null;a.me=null;a.sN=null;a.sf=null;a.qe=0;a.sq=0;}
function Cq(){var a=this;C.call(a);a.tE=null;a.cO=0;}
function Dz(a,b,c){a.tE=b;a.cO=c;}
function Gs(){var a=this;Cq.call(a);a.qt=null;a.lK=null;a.pr=null;a.j2=0;a.n_=0;a.qM=0;}
var ASB=null;var ASE=null;function XM(){XM=Br(Gs);AHN();}
function AHN(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gs;c=R(DI,2);d=c.data;ANQ();d[0]=ASF;d[1]=ASG;XM();Dz(b,B(76),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];Xp();switch(ASH.data[l.ld.cO]){case 1:f=f+l.eE|0;h=h+1|0;break a;case 2:e=e+l.eE|0;g=g+1|0;break a;default:}}i=i|1<<l.gR;k=k+1|0;}b.qt=c;b.j2=e;b.n_=f;b.qM=i;c=R(DI,g);m=c.data;b.lK=c;c=R(DI,h);n=c.data;b.pr=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];Xp();switch(ASH.data[l.ld.cO]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}ASB=b;c=R(Gs,1);c.data[0]=b;ASE=c;}
var Ls=F(0);
var R_=F(0);
var Tw=F(0);
var F_=F();
function IJ(){F_.call(this);this.td=null;}
function YZ(){var a=this;IJ.call(a);a.ve=0;a.kb=0;a.h0=null;a.jH=null;a.rc=null;}
function AJI(a,b){var c=new YZ();ANy(c,a,b);return c;}
function ANy(a,b,c){a.td=b;b=new M;O(b);a.h0=b;a.jH=BQ(32);a.ve=c;YP();a.rc=ASI;}
function So(a,b,c,d){var e,$$je;e=a.td;if(e===null)a.kb=1;if(!(a.kb?0:1))return;a:{try{e.jy(b,c,d);break a;}catch($$e){$$je=D5($$e);if($$je instanceof HU){}else{throw $$e;}}a.kb=1;}}
function Na(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ZC(b,c,d-c|0);e=ET(Bb(16,Y(e.length,1024)));g=Zr(e,0,e.data.length);h=a.rc;i=new Ov;b=ET(1);j=b.data;j[0]=63;GO();k=ASJ;i.k0=k;i.kg=k;c=j.length;if(c&&c>=i.lL){i.tz=h;i.on=b.ff();i.u$=2.0;i.lL=4.0;i.nL=BQ(512);i.mR=ET(512);k=ASK;if(k===null){i=new BB;Bj(i,B(77));J(i);}i.k0=k;i.kg=k;a:while(true){if(i.hW==3){f=new DK;U(f);J(f);}i.hW=2;b:{while(true){try{k=XD(i,f,g);}catch($$e){$$je=D5($$e);if($$je instanceof Bn){f=$$je;break a;}else{throw $$e;}}if(HK(k))
{d=B2(f);if(d<=0)break b;k=DL(d);}else if(GK(k))break;h=!Le(k)?i.k0:i.kg;c:{if(h!==ASK){if(h===ASL)break c;else break b;}d=B2(g);b=i.on;l=b.data.length;if(d<l){k=ASM;break b;}VL(g,b,0,l);}Er(f,f.N+Jp(k)|0);}}l=GK(k);So(a,e,0,g.N);M$(g);if(!l){while(true){d=i.hW;if(d!=2&&d!=4){f=new DK;U(f);J(f);}f=ASN;if(f===f)i.hW=3;l=GK(f);So(a,e,0,g.N);M$(g);if(!l)break;}return;}}J(AFo(f));}i=new BB;Bj(i,B(78));J(i);}
function Bu(a,b){var c,d,e,f,g,h,i,j;BC(BX(a.h0,b),10);b=a.h0;c=b.L;d=a.jH;if(c>d.data.length)d=BQ(c);e=0;f=0;if(e>c){b=new Bx;Bj(b,B(79));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.z.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Na(a,d,0,c);a.h0.L=0;}
function FV(){F_.call(this);this.u0=null;}
function WL(a){a.u0=ET(1);}
var KD=F(FV);
var ASh=null;function AH9(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AAN(){var b;b=new KD;WL(b);ASh=b;}
function DI(){var a=this;Cq.call(a);a.op=null;a.ld=null;a.eE=0;a.nN=0;a.gR=0;}
var ASF=null;var ASG=null;var ASO=null;function ANQ(){ANQ=Br(DI);AGZ();}
function AQh(a,b,c,d,e,f,g){var h=new DI();UY(h,a,b,c,d,e,f,g);return h;}
function UY(a,b,c,d,e,f,g,h){ANQ();Dz(a,b,c);a.op=d;a.ld=e;a.eE=f;a.nN=g;a.gR=h;}
function AGZ(){var b;b=new DI;Z3();UY(b,B(80),0,B(81),ASP,2,0,0);ASF=b;b=AQh(B(82),1,B(83),ASP,2,0,1);ASG=b;ASO=H(DI,[ASF,b]);}
function Iz(){var a=this;C.call(a);a.tl=null;a.um=null;}
function AA2(b){var c,d;if(E9(b))J(YT(b));if(!AA4(L(b,0)))J(YT(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AA4(d))break a;else J(YT(b));}}c=c+1|0;}}
function AA4(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Lx=F(Iz);
var ASI=null;function YP(){YP=Br(Lx);AF8();}
function ABh(a){var b,c;b=new Sp;b.eC=B(84);GO();c=ASJ;b.gu=c;b.k9=c;b.uc=a;b.lR=0.3333333432674408;b.ux=0.5;b.mY=ET(512);b.qD=BQ(512);return b;}
function AF8(){var b,c,d,e,f;b=new Lx;YP();c=R(By,0);d=c.data;AA2(B(85));e=d.length;f=0;while(f<e){AA2(d[f]);f=f+1|0;}b.tl=B(85);b.um=c.ff();ASI=b;}
var JC=F();
var ASQ=null;var ASH=null;function Xp(){Xp=Br(JC);AKB();}
function AKB(){var b,c;Z3();b=BF((ASR.ff()).data.length);c=b.data;ASH=b;c[ASS.cO]=1;c[ASP.cO]=2;Z5();c=BF((AST.ff()).data.length);b=c.data;ASQ=c;b[ASU.cO]=1;b[ASV.cO]=2;}
function Of(){var a=this;C.call(a);a.e7=null;a.lA=null;a.jm=null;a.qV=null;a.n$=null;a.oj=null;}
function Y2(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.e7,b,c));}
function Me(a,b){var c,d,e,f,g,h,i,$$je;c=new By;d=b;while(a.lA[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.e7,b,d));f=e.data;Ex();d=f.length;YP();g=ASI;h=Zr(e,0,d);a:{try{i=ABh(g);GO();g=XV(AAj(ABR(i,ASK),ASK),h);break a;}catch($$e){$$je=D5($$e);if($$je instanceof Fv){g=$$je;}else{throw $$e;}}h=new VV;h.iy=1;h.i3=1;h.g2=B(86);h.kh=g;J(h);}if(!g.N&&g.db==g.lw)c.bR=g.gQ;else{f=BQ(B2(g));e=f.data;c.bR=f;MK(g,f,0,e.length);}return c;}
function Mm(a,b){var c,d,e;c=new By;d=b>>>1|0;e=d;while(a.jm[e]){e=e+1|0;}d=e-d|0;G2(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.e7,b,d)));return c;}
var Gw=F(Cq);
var ASS=null;var ASP=null;var ASR=null;function Z3(){Z3=Br(Gw);AFD();}
function AF1(a,b){var c=new Gw();ABi(c,a,b);return c;}
function ABi(a,b,c){Z3();Dz(a,b,c);}
function AFD(){var b;ASS=AF1(B(87),0);b=AF1(B(88),1);ASP=b;ASR=H(Gw,[ASS,b]);}
var F1=F(Cq);
var ASU=null;var ASV=null;var AST=null;function Z5(){Z5=Br(F1);AGd();}
function AOX(a,b){var c=new F1();XT(c,a,b);return c;}
function XT(a,b,c){Z5();Dz(a,b,c);}
function AGd(){var b;ASU=AOX(B(89),0);b=AOX(B(90),1);ASV=b;AST=H(F1,[ASU,b]);}
var UA=F(DN);
function AA7(){BB.call(this);this.tD=null;}
function YT(a){var b=new AA7();AM8(b,a);return b;}
function AM8(a,b){U(a);a.tD=b;}
var Lw=F(0);
function Wl(){C.call(this);this.oc=null;}
function AMd(a,b){a.oc.setPointerCapture(b.pointerId);}
function Wn(){C.call(this);this.ne=null;}
function AEc(a,b){a.ne.releasePointerCapture(b.pointerId);}
function GE(){var a=this;C.call(a);a.lw=0;a.N=0;a.db=0;a.gY=0;}
function UW(a,b){a.gY=(-1);a.lw=b;a.db=b;}
function Er(a,b){var c,d,e;if(b>=0&&b<=a.db){a.N=b;if(b<a.gY)a.gY=0;return a;}c=new BB;d=a.db;e=new M;O(e);BC(S(G(S(G(e,B(91)),b),B(92)),d),93);Bj(c,N(e));J(c);}
function B2(a){return a.db-a.N|0;}
function Dy(a){return a.N>=a.db?0:1;}
var Q7=F(0);
var Kp=F(GE);
function ACh(b){var c,d;if(b>=0)return AK4(0,b,BQ(b),0,b,0);c=new BB;d=new M;O(d);S(G(d,B(93)),b);Bj(c,N(d));J(c);}
function ZC(b,c,d){return AK4(0,b.data.length,b,c,c+d|0,0);}
function MK(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bx;i=new M;O(i);S(G(S(G(i,B(94)),g),B(95)),f);Bj(h,N(i));J(h);}if(B2(a)<d){j=new K7;U(j);J(j);}if(d<0){j=new Bx;k=new M;O(k);G(S(G(k,B(96)),d),B(97));Bj(j,N(k));J(j);}g=a.N;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.gQ.data[m+a.ll|0];l=l+1|0;c=n;m=o;}a.N=g+d|0;return a;}}b=b.data;j=new Bx;d=b.length;k=new M;O(k);BC(S(G(S(G(k,B(98)),c),B(92)),d),41);Bj(j,N(k));J(j);}
function Jm(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lB){b=new Im;U(b);J(b);}e=d-c|0;if(B2(a)<e){b=new Ht;U(b);J(b);}if(c>I(b)){f=new Bx;d=I(b);b=new M;O(b);BC(S(G(S(G(b,B(99)),c),B(92)),d),41);Bj(f,N(b));J(f);}if(d>I(b)){f=new Bx;c=I(b);b=new M;O(b);S(G(S(G(b,B(100)),d),B(101)),c);Bj(f,N(b));J(f);}if(c>d){b=new Bx;f=new M;O(f);S(G(S(G(f,B(99)),c),B(102)),d);Bj(b,N(f));J(b);}g=a.N;while(c<d){h=g+1|0;i=c+1|0;Rb(a,g,L(b,c));g=h;c=i;}a.N=a.N+e|0;return a;}
function I5(){var a=this;GE.call(a);a.ka=0;a.kP=null;a.uM=null;}
function Zr(b,c,d){var e,f,g;e=b.data;f=new VK;g=e.length;d=c+d|0;UW(f,g);AHT();f.uM=ASW;f.ka=0;f.kP=b;f.N=c;f.db=d;f.uQ=0;f.l_=0;return f;}
function VL(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.l_){e=new Im;U(e);J(e);}if(B2(a)<d){e=new Ht;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bx;j=new M;O(j);S(G(S(G(j,B(103)),h),B(95)),g);Bj(i,N(j));J(i);}if(d<0){e=new Bx;i=new M;O(i);G(S(G(i,B(96)),d),B(97));Bj(e,N(i));J(e);}h=a.N;k=h+a.ka|0;l=0;while(l<d){b=a.kP.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.N=h+d|0;return a;}}b=b.data;e=new Bx;d=b.length;i=new M;O(i);BC(S(G(S(G(i,B(98)),c),B(92)),d),41);Bj(e,N(i));J(e);}
function M$(a){a.N=0;a.db=a.lw;a.gY=(-1);return a;}
function Hi(){C.call(this);this.vG=null;}
var ASL=null;var ASK=null;var ASJ=null;function GO(){GO=Br(Hi);AI$();}
function AB1(a){var b=new Hi();AAZ(b,a);return b;}
function AAZ(a,b){GO();a.vG=b;}
function AI$(){ASL=AB1(B(104));ASK=AB1(B(105));ASJ=AB1(B(106));}
var Ms=F(Cp);
function AI4(a){}
function AHF(a,b,c){}
var ACk=F();
function AMQ(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(107)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Kz(b)){case -1570047148:if(!Bo(b,B(108)))break a;d=15;break a;case -1519338717:if(!Bo(b,B(109)))break a;d=1;break a;case -1509980539:if(!Bo(b,B(110)))break a;d=11;break a;case -1073555521:if(!Bo(b,B(111)))break a;d=12;break a;case -811765794:if(!Bo(b,B(112)))break a;d=4;break a;case -785237654:if(!Bo(b,B(113)))break a;d=9;break a;case -631889171:if(!Bo(b,B(114)))break a;d=7;break a;case -439438829:if
(!Bo(b,B(115)))break a;d=16;break a;case 3343967:if(!Bo(b,B(116)))break a;d=8;break a;case 3556498:if(!Bo(b,B(117)))break a;d=3;break a;case 485517998:if(!Bo(b,B(118)))break a;d=5;break a;case 544901384:if(!Bo(b,B(119)))break a;d=2;break a;case 1030621992:if(!Bo(b,B(120)))break a;d=14;break a;case 1465713255:if(!Bo(b,B(121)))break a;d=6;break a;case 1554501643:if(!Bo(b,B(122)))break a;d=13;break a;case 1609169232:if(!Bo(b,B(123)))break a;d=10;break a;default:}}b:{switch(d){case 1:break;case 2:case 3:b=new R1;break b;case 4:b
=new R0;break b;case 5:b=new RZ;break b;case 6:b=new RY;break b;case 7:case 8:b=new RX;break b;case 9:b=new RW;break b;case 10:b=new RV;break b;case 11:b=new RU;break b;case 12:b=new RT;break b;case 13:b=new PJ;break b;case 14:b=new PH;break b;case 15:b=new PI;break b;case 16:b=new PF;break b;default:b=new PG;break b;}b=new R2;}return b;}
var ZB=F();
var Jg=F(Kp);
function Zk(){var a=this;Jg.call(a);a.lB=0;a.ll=0;a.gQ=null;}
function AK4(a,b,c,d,e,f){var g=new Zk();AO4(g,a,b,c,d,e,f);return g;}
function AO4(a,b,c,d,e,f,g){UW(a,c);a.N=e;a.db=f;a.ll=b;a.lB=g;a.gQ=d;}
function Rb(a,b,c){a.gQ.data[b+a.ll|0]=c;}
function J_(){var a=this;C.call(a);a.tz=null;a.on=null;a.u$=0.0;a.lL=0.0;a.k0=null;a.kg=null;a.hW=0;}
function K1(){var a=this;C.call(a);a.f8=0;a.hy=0;}
var ASN=null;var ASM=null;function XJ(a,b){var c=new K1();X_(c,a,b);return c;}
function X_(a,b,c){a.f8=b;a.hy=c;}
function HK(a){return a.f8?0:1;}
function GK(a){return a.f8!=1?0:1;}
function JY(a){return !Pz(a)&&!Le(a)?0:1;}
function Pz(a){return a.f8!=2?0:1;}
function Le(a){return a.f8!=3?0:1;}
function Jp(a){var b;if(JY(a))return a.hy;b=new E2;U(b);J(b);}
function DL(b){return XJ(2,b);}
function Uh(a){var b,c;switch(a.f8){case 0:b=new O9;U(b);J(b);case 1:b=new V1;U(b);J(b);case 2:b=new T8;c=a.hy;U(b);b.vV=c;J(b);case 3:b=new OY;c=a.hy;U(b);b.vR=c;J(b);default:}}
function YB(){ASN=XJ(0,0);ASM=XJ(1,0);}
var Xz=F();
var KC=F(0);
var MB=F();
function AGl(a,b){return b.arrayBuffer();}
var MA=F();
function AKe(a,b){var c,d;c=new Oc;d=new Oa;return $rt_globals.WebAssembly.instantiate(b,AIg(Bk(c,"f"),Bk(d,"f")));}
var Mz=F();
function AKW(a,b){AD8(b);}
var My=F();
function AEQ(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var R2=F();
function AKu(a,b){return ARn(b);}
var R1=F();
function ADQ(a,b){return APD(b);}
var R0=F();
function AHo(a,b){var c,d,e;c=new U2;Ho(c,b);d=new TP;d.le=new Bl;d.jB=new Bl;c.pW=d;c.dg=XF();c.cz=XF();c.dM=W_(c.bd);Z(c.bd.dx,c);d=b.r.b0;e=new R4;e.rJ=c;Z(d,e);Z(b.r.bQ,c);b=b.r.eF;d=new R7;d.qz=c;Z(b,d);RB(c.cz);b=SF(B(124),25.0);c.qC=b;d=c.dM;d.f3=b;LG(d,Gm());Be(c.f1,CF(43));b=Gm();HH(c.dg,b);HH(c.cz,b);b=c.dg;b.iO=new R5;d=c.cz;d.iO=new R3;d.jd=new VW;d.rq=new VX;J$(b,(MR(0)).ib);J$(c.cz,(MR(0)).ib);return c;}
var RZ=F();
function AHj(a,b){var c,d,e;c=new Wd;Ho(c,b);d=c.bd.dx;e=new NL;e.l$=c;Z(d,e);d=AMT(c.bd);c.dU=d;WG(d,Gm());Z(b.r.bQ,c);d=b.r.b0;e=new NM;e.oX=c;Z(d,e);d=b.r.eF;e=new NN;e.rX=c;Z(d,e);b=FF(b.U,B(124),25);RH(c.dU,b);Be(c.f1,CF(43));return c;}
var RY=F();
function AHV(a,b){var c,d,e;c=new WP;Ho(c,b);c.fm=Cj();c.eK=Cj();c.nC=Bs(B(125));c.hS=AM5();c.fJ=0;d=c.bd.dx;e=new SZ;e.l1=c;Z(d,e);Z(b.r.bQ,c);d=b.r.b0;e=new S0;e.oU=c;Z(d,e);b=FF(b.U,B(124),35);c.iN=b;c.hC=AOe(FB(b));Be(c.f1,Bs(B(126)));return c;}
var RX=F();
function ADW(a,b){var c,d,e,f;c=new Ok;D8(c,b);c.fE=AJn();c.dE=0;c.qo=500;c.sv=WS(0,0,0,255);c.lf=20;c.sI=20;c.nw=ABt();d=b.r.bQ;e=new Ve;e.h9=c;f=new WO;f.p$=e;e.pA=f;Z(d,e);d=b.r.eR;e=new RE;e.m6=c;Z(d,e);c.dF=b.U;c.ro=Tt(b.bW);Sv(c.fE,FF(c.dF,B(124),c.sI),c.lf,c.dF);c.gt=G4();return c;}
var RW=F();
function AFz(a,b){var c,d;c=new PQ;F$(c,b);b=b.r.b0;d=new O$;d.sy=c;Z(b,d);return c;}
var RV=F();
function AKL(a,b){return AQ1(b);}
var RU=F();
function AN_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new VF;F$(c,b);c.ds=EZ(0,0,300,300);c.ez=Rv(0,0,3,3);d=b.U;b=b.r.bQ;e=new SG;e.kv=c;Z(b,e);b=YO(d);c.ol=b;F5(c.ds,b);GG(c.ds);b=c.ds.Q;Dl();Be(b,ASX);Be(c.ds.K,Cu(204,120,50));Z5();e=ASV;f=ET((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CR(d);Xp();switch(ASQ.data[e.cO]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Ee;U(b);J(b);}b:
{Mv(m,5,5,h);b=m.dD.c_;switch(ASQ.data[e.cO]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Ee;U(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.jR=m;Bm(c.ez.g,Ck(m),C0(c.jR));Be(c.ez.Q,c.k3);return c;}
var RT=F();
function AO2(a,b){var c,d,e;c=new Q8;F$(c,b);c.fZ=EZ(0,0,300,300);c.js=new Bl;c.hT=new Bl;c.hc=new Bl;d=b.U;b=b.r.bQ;e=new UK;e.iR=c;Z(b,e);b=YO(d);c.p5=b;F5(c.fZ,b);GG(c.fZ);b=c.fZ.Q;Dl();Be(b,ASX);Be(c.fZ.K,Cu(204,120,50));return c;}
var PJ=F();
function AIM(a,b){var c,d,e,f;c=new NV;D8(c,b);c.uB=20;c.v6=11;c.uh=220;c.iw=new Bl;c.u2=5000;c.gj=1;c.e9=H(Id,[CF(0),CF(255)]);c.dO=b.U;d=b.r.bQ;e=new S8;e.iJ=c;f=new OI;f.mr=e;e.ox=f;Z(d,e);b=b.r.eR;d=new M9;d.r0=c;Z(b,d);b=CI(c.dO,200,220);c.jl=b;FL(b,B(124),20.0);b=CI(c.dO,200,20);c.eT=b;FL(b,B(124),20.0);c.hl=G4();return c;}
var PH=F();
function ACU(a,b){var c,d,e;c=new HZ;F$(c,b);Z(b.r.bQ,c);d=b.r.b0;e=new Rh;e.qb=c;Z(d,e);Z(b.r.f9,new Rg);d=b.r.f9;e=new Re;e.od=c;Z(d,e);Z(b.r.gJ,new Rd);d=b.r.gJ;e=new Rf;e.mz=c;Z(d,e);b=!Wp(b.bW)?B(127):B(128);d=new M;O(d);G(G(d,B(129)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var PI=F();
function AGh(a,b){var c,d,e,f,g,h,i,j;c=new Pb;D8(c,b);c.mH=CF(20);c.eM=EZ(0,0,300,300);d=b.r.b0;e=new QO;e.vH=c;Z(d,e);b=b.U;d=FF(b,B(10),88);CB(b.cv,d);f=Ed(b.cv,B(130));g=Ed(b.cv,B(131));if(f>g)g=f;h=C6(g);i=Ji(d,1.1799999475479126);j=Bw();e=new M;O(e);S(G(S(G(e,B(132)),h),B(133)),i);Bu(j,N(e));e=CI(b,h,i*2|0);c.hD=e;CB(e,d);Cd(c.hD,B(130),0.0,d.dd);Cd(c.hD,B(131),0.0,i+d.dd);b=CR(b);c.kU=b;CL(b,c.hD);F5(c.eM,c.kU);GG(c.eM);b=c.eM.Q;Dl();Be(b,ASX);Be(c.eM.K,ASY);return c;}
var PF=F();
function AIZ(a,b){var c,d,e,f;c=new Vf;Ho(c,b);c.k$=SF(B(134),20.0);d=new Qz;d.cC=Cj();c.dI=d;Z(c.bd.dx,d);Z(c.bd.dx,c);Be(c.f1,CF(43));d=W_(c.bd);c.fn=d;LG(d,Gm());c.fn.f3=SF(B(124),25.0);d=b.r.b0;e=new Pw;e.vE=c;Z(d,e);d=b.r.eF;e=new Px;e.oZ=c;Z(d,e);d=b.r.bQ;e=c.fn;f=new UN;f.gl=e;Z(d,f);Z(b.r.bQ,c.dI);b=b.r.eR;d=c.dI;BI(d);e=new Py;e.qc=d;Z(b,e);return c;}
var PG=F();
function AMw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=new P$;WW(c,b);d=c.cJ;e=new KX;f=R(By,8);g=I(B(135));h=0;i=0;j=g+1|0;while(true){k=Gn(B(135),10,i);l=k>=0?B7(B(135),i,k):Dq(B(135),i);m=f.data;n=h+1|0;i=m.length;if(i==h)f=C$(f,i*2|0);f.data[h]=l;f=f;i=k<0?j:k+1|0;if(i>g)break;h=n;}if(f.data.length!=n)f=C$(f,n);o=f.data;e.fH=null;e.iq=B(136);e.oK=null;p=new Jq;i=o.length;if(!i)m=L_(B(31));else{m=R(Cv,i);f=m.data;g=0;while(g<i){b=new Cv;q=R(B4,1);q.data[0]=QQ(o[g]);HF(b,q);f[g]=b;g=g+1|0;}}f=m.data;p.dQ
=HD();p.eb=HD();p.e6=Cj();if(!f.length){b=new BB;AAJ(b);J(b);}p.B=m;p.fo=0;p.cn=0;p.cY=S3(p);e.h=p;d.tG=null;T1(d);b=d.e;d.e=e;d.ew=Fn();p=ZI(Db(d.e));if(p!==null){l=Ce(d);r=new TU;r.qx=d;f=R(C,1);f.data[0]=F4(d.e.h);CY(l,r,p,f);}f=(Cl(d.d1.l0)).data;s=f.length;i=0;while(i<s){f[i].lC(b,e);i=i+1|0;}return c;}
function GN(){var a=this;C.call(a);a.bw=0;a.ck=0;a.c5=0;a.ks=0;}
function ASZ(a,b,c,d){var e=new GN();Th(e,a,b,c,d);return e;}
function Th(a,b,c,d,e){a.bw=d;a.ck=b;a.c5=c;a.ks=e;}
function N3(){var a=this;GN.call(a);a.dm=null;a.bg=0;a.iF=0;a.qa=0;a.jo=0;}
function ACb(b){var c,d,e;c=b.ck;d=c&&!b.bw&&!b.c5&&!b.ks?1:0;a:{if(d){d=b.bg;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bw&&!c&&!b.c5&&!b.ks?1:0;d=d&&b.bg==46?1:0;}b:{if(!d){e=b.bg;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jo=1;}return 0;}
var ABn=F();
function U9(b,c){return (b+(c/2|0)|0)/c|0;}
function ON(b,c,d){if(b<(2147483647/c|0))return U9(Ba(b,c),d);return 0.5+c*b/d|0;}
function K3(b,c){return ((b+c|0)-1|0)/c|0;}
function GW(b){return b+0.5|0;}
function C6(b){return b+0.5|0;}
function GU(b,c,d){return Bb(b,Y(c,d));}
function LJ(){var a=this;GN.call(a);a.o=null;a.tm=null;}
var Ta=F(0);
function MT(){var a=this;C.call(a);a.sk=null;a.sl=null;}
function AIG(a,b){var c,d;c=a.sk;d=a.sl;$rt_globals.console.info("paste plain string "+b);c.m(Fj(b));C7(d);}
function TR(){C.call(this);this.sK=null;}
function U8(a,b){a.sK.clipboardData.setData("text/plain",$rt_ustr(b));}
function VK(){var a=this;I5.call(a);a.uQ=0;a.l_=0;}
var AAk=F();
function Jy(){C.call(this);this.vb=null;}
var ASW=null;var AS0=null;function AHT(){AHT=Br(Jy);AOV();}
function AFV(a){var b=new Jy();WV(b,a);return b;}
function WV(a,b){AHT();a.vb=b;}
function AOV(){ASW=AFV(B(137));AS0=AFV(B(138));}
var UZ=F(0);
function RF(){C.call(this);this.gZ=null;}
function Fr(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gZ));}
function Ei(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.gZ));}
function AFj(a){var b,c;b=a.gZ.byteLength;c=new M;O(c);G(S(G(c,B(139)),b),B(140));return N(c);}
var Tp=F(0);
function Km(){var a=this;C.call(a);a.gm=null;a.eI=null;a.lg=null;}
function AAg(a,b){var c=new Km();AHO(c,a,b);return c;}
function APr(a,b,c){var d=new Km();M_(d,a,b,c);return d;}
function W6(b){var c,d,e,f,g,h,i,j,k;c=new Km;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=Tx(E(DR),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=JW(f[h]);h=h+1|0;}}j=g.data;h=j.length;if(!h)i=R(By,0);else{i=R(By,h-1|0);g=i.data;h=0;k=g.length;while(h<k){g[h]=Fj(I7(j[h]));h=h+1|0;}}}else i=R(By,0);M_(c,d,b,i);return c;}
function AHO(a,b,c){M_(a,b,c,R(By,0));}
function M_(a,b,c,d){a.gm=b;a.eI=c;a.lg=d;}
function IW(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EO(a);e=new M;O(e);G(G(e,B(141)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EO(a){var b;b=a.gm;return Fj(b!==null?b.name:a.eI.name);}
function AIf(a){var b,c,d,e,f;if(a.eI===null){b=a.lg;c=EO(a);d=Yd(b);e=new M;O(e);G(G(G(e,d),B(142)),c);c=N(e);}else{b=a.lg;c=EO(a);f=IW(a,a.eI.size);d=Yd(b);e=new M;O(e);S(G(G(G(G(e,d),B(142)),c),B(143)),f);c=N(e);}return c;}
function J6(){var a=this;J_.call(a);a.nL=null;a.mR=null;}
function XD(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.nL;e=0;f=0;g=a.mR;a:{while(true){if((e+32|0)>f&&Dy(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Y(B2(b)+j|0,i.length);MK(b,d,j,f-j|0);e=0;}if(!Dy(c)){k=!Dy(b)&&e>=f?ASN:ASM;break a;}i=g.data;j=Y(B2(c),i.length);l=new MS;l.l3=b;l.ow=c;k=ZN(a,d,e,f,g,0,j,l);e=l.rB;j=l.sC;if(k===null){if(!Dy(b)&&e>=f)k=ASN;else if(!Dy(c)&&e>=f)k=ASM;}VL(c,g,0,j);if(k!==null)break;}}Er(b,b.N-(f-e|0)|0);return k;}
var Ov=F(J6);
function ZN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(K0(h,2))break a;i=ASM;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ln(l)){if((f+3|0)>g){j=j+(-1)|0;if(K0(h,3))break a;i=ASM;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CC(l)){i=DL(1);break a;}if
(j>=d){if(Dy(h.l3))break a;i=ASN;break a;}c=j+1|0;m=k[j];if(!CX(m)){j=c+(-2)|0;i=DL(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(K0(h,4))break a;i=ASM;break a;}k=e.data;o=Eg(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.rB=j;h.sC=f;return i;}
var HU=F(DN);
function JN(){var a=this;Cp.call(a);a.pP=null;a.e4=null;a.cJ=null;a.gS=null;a.o7=null;a.lo=null;}
function ARn(a){var b=new JN();WW(b,a);return b;}
function WW(a,b){var c,d,e,f,g,h;D8(a,b);a.pP=Op(0,0,64);a.o7=new Bl;a.lo=new Bl;c=ADO(b);a.e4=c;d=new TH;d.kl=c;d.cW=AMT(c);c=W_(d.kl);d.b3=c;c.f3=SF(B(134),17.0);a.gS=d;c=AQ$(a.e4,d);a.cJ=c;e=a.e4;f=e.h$.dk!==(DV()).activeElement?0:1;if(f)I$(e);e.en=c;if(f)J3(e);Z(b.r.bQ,a.gS);Z(b.r.bQ,a.cJ);Z(b.r.b0,new QT);c=b.r.b0;d=new QX;d.so=a;Z(c,d);c=b.r.b0;d=new Jl;g=a.cJ;BI(g);h=new QW;h.lM=g;Ul(d,b,null,h);Z(c,d);c=b.r.b0;d=a.e4;BI(d);g=new QV;g.og=d;Z(c,g);c=b.r.f9;d=a.cJ;BI(d);g=new QU;g.s7=d;Z(c,g);c=b.r.gJ;d
=new Q0;d.mq=a;Z(c,d);c=b.r.eR;d=new QZ;d.q2=a;Z(c,d);b=b.r.eF;c=new QY;c.rR=a;Z(b,c);SM(a);}
function AE1(a,b){var c,d,e,f;c=a.cJ;d=c.e.h;e=d.fo;f=d.cn;e=e!=f&&b-d.oh>0.03125?1:0;if(e&&c.km!=f){c.km=f;Rx(c);}e=c.bf;f=D1(c,(e+c.tZ|0)-c.tr|0,EF(c));c.bf=f;e=e==f?0:1;return !RJ(c.cB,b)&&!e&&!c.pY?0:1;}
function AHB(a){var b;Fc(a.bc.U,a.pP);ACl(a.cJ);b=a.gS;Pd(b.cW);KF(b.b3);}
function AK$(a){return ACm(0);}
function AJP(a,b,c){var d,e,f;Kn(a.e4,b,c);a.qS(b);b=a.cJ;d=a.o7;e=a.lo;Dt(b.co,d);Dt(b.cK,e);b.cI=Cb(b.qp,c);f=Cb(10.0,c);b.kK=f;f=b.cI-f|0;Uj(b.eD,b.co,f,b.cK.b,c);d=b.cB;f=Cb(2.0,c);d.du.g.a=f;ST(b,b.ir,b.fM);Uy(b);}
function ZW(a,b){Bm(a.lo,b.a,b.b);}
function SM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new KH;c=new Id;Dl();NR(c,ASX);d=CT(AS1);e=CT(AS2);f=CT(AS3);g=CT(ASX);h=CT(AS4);i=CT(AS5);j=CT(AS6);X7();k=(AS7.ff()).data;l=k.length;m=R(IG,l);n=m.data;o=0;while(o<l){n[o]=k[o].ky;o=o+1|0;}ME(b,c,d,e,f,g,h,i,j,m,ABt(),Gm());Ud(a,b);}
function ZU(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=new KH;c=new Id;Dl();NR(c,AS8);d=CT(AS9);e=CT(AS$);f=CT(AS3);g=CT(AS8);h=CT(AS_);i=CT(ATa);j=CT(ATb);ABr();k=(ATc.ff()).data;l=k.length;m=R(IG,l);n=m.data;o=0;while(o<l){n[o]=k[o].k8;o=o+1|0;}p=AJk(CF(173),CF(242),CF(173),Cu(252,250,237));q=new Kg;r=new EP;s=ATd;t=AS$;EC();F2(r,s,t,s,ATe,ATf);u=new EP;s=ATd;t=AS$;v=ATe;F2(u,s,t,s,v,v);RK(q,r,u,ACg(),Bs(B(144)),ACg(),AEU(1,0.07500000298023224));ME(b,c,d,e,f,g,h,i,j,m,p,q);Ud(a,b);}
function Ud(a,b){var c;BI(b);c=a.gS;c.bm=b;WG(c.cW,b.be);LG(c.b3,b.be);c=a.cJ;c.d9=b;c=c.cB;b=b.o_;Be(c.du.K,b);}
function ACi(a,b){if(b.bg!=121)return 0;return 1;}
function XI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=a.e4;d=a.cJ;if(d!==c.en?0:1){c=a.gS;if(!DO(c.b3)){e=c.b3;f=b.o;b=new RI;b.S=c;b.bo=d;b.gV=a;g=OX();h=b.bo.e;i=Db(h);j=GC(h);k=b.bo.d1;if(Ux(k,i,j)!==null){h=b.S.bm.be.X;l=new Qo;l.m8=b;l.m7=f;DW(g,B(145),h,l);}if(J7(k,i,j)!==null){m=b.S.bm.be.X;l=new Qn;l.nZ=b;l.n1=f;DW(g,B(146),m,l);}if(MI(k,i,j)!==null){i=b.S.bm.be.X;j=new Ql;j.mD=b;j.mE=f;DW(g,B(147),i,j);}i=b.S.bm.be.X;j=new Qm;j.s2=b;j.s3=f;DW(g,B(148),i,j);if(!b.bo.e5){i=b.S.bm.be.X;j=new OE;j.rS=
b;DW(g,B(149),i,j);}i=b.S.bm.be.X;j=new OC;j.oV=b;DW(g,B(150),i,j);if(!b.bo.e5&&Wp(H4(b))){i=b.S.bm.be.X;j=new OF;j.q3=b;DW(g,B(151),i,j);}m=b.S.bm.be.X;h=OX();j=b.S.bm.be.X;n=R(Dw,2);o=n.data;p=b.gV;BI(p);q=new RC;q.na=p;o[0]=D$(B(152),j,q);p=b.S.bm.be.X;q=b.gV;BI(q);r=new RD;r.pZ=q;o[1]=D$(B(153),p,r);Ep(h,B(154),j,GS(n));j=b.S.bm.be.X;n=R(Dw,2);o=n.data;p=b.bo;BI(p);q=new Nn;q.ql=p;o[0]=D$(B(155),j,q);p=b.S.bm.be.X;q=b.bo;BI(q);r=new Nm;r.pc=q;o[1]=D$(B(156),p,r);Ep(h,B(157),j,GS(n));j=b.S.bm.be.X;l=new T5;l.pO
=b;Ep(h,B(158),j,l);Ep(g,B(159),m,G5(h));k=b.S.bm.be.X;m=OX();Ep(m,B(160),b.S.bm.be.X,ACC(b));h=b.S.bm.be.X;i=new U0;i.rg=b;DW(m,B(161),h,i);Ep(g,B(162),k,G5(m));Hk(e,f,G5(g),IH(c,d));}}return 1;}
function Xt(){var a=this;Cp.call(a);a.kE=null;a.c2=null;a.f$=null;a.eW=null;a.gU=null;a.th=null;a.gG=null;a.pK=null;a.ls=null;a.tC=null;a.uH=null;a.fI=null;a.je=null;a.o3=0;}
function APD(a){var b=new Xt();AIX(b,a);return b;}
function AIX(a,b){var c,d,e,f,g,h,i;D8(a,b);c=new B3;Dl();AAs(c,ASX);a.kE=c;a.c2=EZ(0,0,300,300);a.f$=Rv(0,0,3,3);a.eW=EZ(0,0,300,300);a.gU=AJ_();d=R(By,4);e=d.data;e[0]=B(163);e[1]=B(164);e[2]=B(165);e[3]=B(166);a.th=d;a.gG=R(H3,e.length);f=b.U;c=b.r.bQ;g=new SH;g.eU=a;Z(c,g);c=b.r.b0;g=new Qx;g.s9=a;Z(c,g);c=b.r.lG;g=new Qw;g.nv=a;Z(c,g);c=b.r.f9;g=new QA;g.u_=a;Z(c,g);c=b.r.iY;g=new Qy;g.tu=a;Z(c,g);c=b.r.eF;g=new Qv;g.uA=a;Z(c,g);b=b.r.eR;c=new Qu;c.rC=a;Z(b,c);h=CI(a.bc.U,300,300);c=h.bj;b="white";c.fillStyle
=b;b=h.bj;c="white";b.strokeStyle=c;b=h.bj;c=10.0;b.lineWidth=c;h.bj.strokeRect(75.0,140.0,150.0,110.0);h.bj.fillRect(130.0,190.0,40.0,60.0);h.bj.beginPath();h.bj.moveTo(50.0,140.0);h.bj.lineTo(150.0,60.0);h.bj.lineTo(250.0,140.0);h.bj.closePath();h.bj.stroke();FL(h,B(167),11.0);KI(h,187,187,187);Ou(a,B(168),h);b=CR(a.bc.U);CL(b,h);Fy(h);a.pK=b;F5(a.c2,b);GG(a.c2);Be(a.c2.Q,ASX);Be(a.c2.K,Cu(204,120,50));b=CI(f,255,100);a.fI=b;FL(b,B(134),11.0);b=Bw();i=$rt_str(a.fI.bj.font);g=new M;O(g);G(G(g,B(169)),i);Bu(b,
N(g));Ed(a.fI,B(170));KI(a.fI,169,183,198);Ou(a,B(170),a.fI);b=CR(f);a.ls=b;CL(b,a.fI);F5(a.eW,a.ls);GG(a.eW);FW(a.eW,CF(255));He(a.eW,ASX);a.tC=CR(f);Be(a.f$.Q,a.kE);}
function Ou(a,b,c){Cd(c,b,0.0,20.0);Cd(c,b,0.25,40.0);Cd(c,b,0.5,60.0);Cd(c,b,0.75,80.0);}
function VC(a,b){IS(Fd(),0.5+Fd()*0.5,0.5+Fd()*0.5,1.0,b.K);}
function ADe(a,b){var c;a.o3=a.o3+1|0;c=b/5.0;IS(c-(c|0),1.0,1.0,1.0,a.f$.K);return RJ(a.gU,b);}
function AF$(a){var b,c,d,e,f,g;b=a.bc.U;Fc(b,a.kE);c=a.gG.data;d=c.length;e=0;while(e<d){Gt(c[e],b,0,0);e=e+1|0;}CK(a.c2,b,a.pK,0,0,0.5);f=a.ls;d=0;while(d<7){g=a.eW;CK(g,b,f,Ba(d,10+((10*g.g.a|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.uH;if(g!==null)S2(a.f$,b,g,0,0,0.0);T0(a.gU,b,new Bl);M4(b,B(171));}
function AMc(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bw();e=Cs(b);f=new M;O(f);G(G(f,B(172)),e);Bu(d,N(f));g=Bw();d=new M;O(d);E4(G(d,B(173)),c);Bu(g,N(d));h=Cb(30.0,c);i=Cb(10.0,c);j=0;while(true){k=a.gG.data;if(j>=k.length)break;l=1+j|0;k[j]=Rv(Ba(i,l)+Ba(h,j)|0,h,h,h);VC(a,a.gG.data[j]);j=l;}Bm(a.f$.s,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.c2;g=d.s;h=b.a;d=d.g;Bm(g,(h-d.a|0)/2|0,(b.b-d.b|0)/2|0);d=a.eW;d.s.b=b.b-d.g.b|0;}
function N7(a,b){var c,d,e,f,g;c=Bw();d=!b.iF?B(174):B(175);e=b.dm;f=b.bg;g=b.qa;b=new M;O(b);FO(G(S(G(G(G(b,d),e),B(176)),f),B(177)),g);Bu(c,N(b));return 0;}
function DQ(){var a=this;Cp.call(a);a.f1=null;a.bd=null;}
function Ho(a,b){var c,d;D8(a,b);a.f1=Op(0,0,64);a.bd=ADO(b);Z(b.r.b0,new Q_);b=b.r.b0;c=a.bd;BI(c);d=new Ra;d.qA=c;Z(b,d);}
function G3(a){Fc(a.bc.U,a.f1);}
function H0(a,b,c){Kn(a.bd,b,c);}
var DS=F(0);
function U2(){var a=this;DQ.call(a);a.pW=null;a.dg=null;a.cz=null;a.dM=null;a.qC=null;}
function ANz(a,b,c){var d;d=HV(a.bd,a.qC);Hz(a.dg,d);Hz(a.cz,d);GA(a.dg,a.bd);GA(a.cz,a.bd);}
function MR(b){return Il(b,AM5());}
function Il(b,c){var d;d=OX();JM(d,J5(b,HX(c,25)),!b?null:Il(b-1|0,c));JM(d,J5(b,HX(c,20)),!b?null:Il(b-1|0,c));JM(d,J5(b,HX(c,15)),!b?null:Il(b-1|0,c));JM(d,J5(b,HX(c,10)),!b?null:Il(b-1|0,c));return G5(d);}
function J5(b,c){var d;if(b){d=new M;O(d);G(G(S(d,b),B(36)),c);c=N(d);}return c;}
function JM(b,c,d){var e,f;e=new GZ;f=IS(Fd(),1.0,1.0,1.0,new B3);EC();Lg(e,f,ATg,ATh);if(d!==null)Ep(b,c,e,d);else{d=new Tb;d.rE=c;DW(b,c,e,d);}}
function AFF(a,b,c){var d,e;H0(a,b,c);b=a.bd.c7;d=DZ(a.dg);e=DZ(a.cz);Jb(a.dg,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Jb(a.cz,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AGm(a){var b,c,d,e,f,g,h,i;G3(a);b=a.bc.U;Ct(b,1);c=a.pW;d=a.bd;e=d.c7;Bm(c.le,e.a,Cb(2.0,d.bF));Bm(c.jB,Cb(2.0,d.bF),e.b);EC();f=ATi;g=d.c1;h=e.b/2|0;i=c.le;BJ(g,0,h-(i.b/2|0)|0,i,f);g=d.c1;h=e.a/2|0;c=c.jB;BJ(g,h-(c.a/2|0)|0,0,c,f);IX(a.dg,a.bd);IX(a.cz,a.bd);KF(a.dM);Ct(b,0);}
function ALw(a,b){var c,d,e;c=JK(a.dM,b);d=Jw(a.dg,b.o,a.bd.e0);e=Jw(a.cz,b.o,a.bd.e0);return !c&&!d&&!e?0:1;}
function AHh(a,b,c){return I9(a.dM,b,c);}
function AEg(a,b,c){return DO(a.dM);}
function AKO(a,b,c,d){var e,f,g;e=II(a.dM,b,c,d);f=Jo(a.dg,b.o,c,d);g=Jo(a.cz,b.o,c,d);return !e&&!f&&!g?0:1;}
function Wd(){DQ.call(this);this.dU=null;}
function DH(b,c,d,e){var f,g,h,i;f=new EP;Dl();g=ASY;h=AS2;EC();F2(f,g,h,g,ATj,ATf);i=new Sx;i.mu=c;i.mv=d;i.ms=e;KT(b,c,d,e,f,i);}
function AEW(a,b,c){var d,e;H0(a,b,c);d=a.dU;e=UO(d.b2);V$(d.b2,(b.a-e.a|0)/2|0,(b.b-e.b|0)/2|0);}
function AK7(a){var b;G3(a);b=a.bc.U;Ct(b,1);Pd(a.dU);Ct(b,0);}
function AMi(a,b){return PO(a.dU,b.o);}
function AH_(a,b,c,d){return Pq(a.dU,b.o,c,d);}
function SX(a,b){var c,d,e,f;c=a.dU;d=AKS();DH(d,B(178),B(179),B(180));DH(d,B(178),B(181),B(182));DH(d,B(178),B(183),B(184));DH(d,B(185),B(186),B(187));DH(d,B(178),B(188),B(180));DH(d,B(189),B(190),B(180));DH(d,B(191),B(192),B(180));DH(d,B(193),B(192),B(180));DH(d,B(194),B(192),B(180));DH(d,B(195),B(192),B(180));e=PC(d);f=new Pt;f.ut=a;OP(c,b,e,f);}
function WP(){var a=this;DQ.call(a);a.hC=null;a.fm=null;a.eK=null;a.iN=null;a.nC=null;a.hS=null;a.fx=null;a.fi=null;a.iI=0;a.fJ=0;}
function Vv(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=0;while(c<b){if(a.fm.j>0){a:{d=Fd();e=a.fm;f=d*(e.j-1|0)|0;e=Eb(e,f);Eb(a.eK,f);f=a.fJ;g=e.g;a.fJ=f-Ba(g.a,g.b)|0;g=a.hC;h=ARg(e.bM);e=g.fq;if(e.j>0){e=BR(e);while(true){if(!B1(e))break a;i=BV(e);if(i.bp===h.bp){j=i.ba;k=i.bh;l=j+k;m=h.ba;if(l===m){h.ba=j;h.bh=h.bh+k;PM(e);}else{l=h.bh;if(m+l===j){h.bh=l+k;PM(e);}}}}}}BW(g.fq,h);}c=c+1|0;}}
function JH(a,b){var c,d,e,f,g,h,i,j;c=K$(a.bd);CB(c,a.iN);d=0;while(d<b){e=HX(a.hS,1+(Fd()*19.0|0)|0);f=Kc();g=f.bM;h=a.hC;BI(c);i=new Qd;i.nP=c;Be(g,GY(h,e,i));(GM(Fd(),1.0,1.0,f.Q)).bq=0.5;h=f.s;g=f.bM;Bm(h,g.ba|0,g.bp|0);h=f.g;g=f.bM;Bm(h,g.bh|0,g.bq|0);BW(a.eK,e);BW(a.fm,f);j=a.fJ;h=f.g;a.fJ=j+Ba(h.a,h.b)|0;d=d+1|0;}a.fi=Wj(a.hC);}
function AC4(a,b,c){H0(a,b,c);Kn(a.bd,b,c);}
function ALF(a){var b,c,d,e,f,g,h,i;G3(a);b=a.bc.U;Ct(b,1);c=a.bd.c1;if(a.eK.j){d=a.fi;d=CI(c,d.a,d.b);CB(d,a.iN);e=a.iN.dd;BJ(c,0,0,a.fi,a.nC);f=0;while(f<a.eK.j){g=Bt(a.fm,f);h=Bt(a.eK,f);g=g.bM;Cd(d,h,g.ba,g.bp+e);f=f+1|0;}g=a.fx;if(!(g!==null&&Ck(g)==a.fi.a&&C0(a.fx)==a.fi.b))a.fx=CJ(a.fx,CR(c));CL(a.fx,d);Fy(d);i=0;while(i<a.eK.j){d=Bt(a.fm,i);FW(d,CF(0));CK(d,c,a.fx,0,0,0.0);i=i+1|0;}}Ct(b,0);}
function AFh(a,b){var c,d;if(a.iI){c=a.fi;d=Y(Ba(c.a,c.b),2211840);if(a.fJ/d<=0.7)JH(a,HN(a.hS,5));else Vv(a,HN(a.hS,5));}return a.iI;}
function Ok(){var a=this;Cp.call(a);a.dF=null;a.fE=null;a.gt=null;a.ke=null;a.dE=0;a.qo=0;a.sv=null;a.lf=0;a.sI=0;a.ro=null;a.nw=null;}
function ADv(a){var b,c;b=a.dE;c=new M;O(c);S(G(c,B(196)),b);$rt_globals.console.info($rt_ustr(N(c)));Fc(a.dF,a.sv);HY(a.gt,a.dE,0,FU(a),5000,a.ke.a,20);Ct(a.dF,1);O4(a.gt,a.dF);Ct(a.dF,0);b=a.dE;c=new M;O(c);S(G(c,B(196)),b);$rt_globals.console.info($rt_ustr(N(c)));Wx(a.fE,a.dE/a.lf|0);S6(a.fE,a.dE,FU(a),a.nw,a.dF);}
function ANk(a,b,c){a.ke=b;Uj(a.fE,Cn(0,0),50,FU(a),c);Je(a.fE,a.dF,0,FU(a));}
function OW(a){return 5000-FU(a)|0;}
function FU(a){return Y(a.qo,a.ke.b);}
function C3(){var a=this;Cp.call(a);a.k3=null;a.gg=null;a.tv=0.0;}
function ATk(a){var b=new C3();F$(b,a);return b;}
function F$(a,b){D8(a,b);a.k3=Op(0,0,64);a.gg=new Bl;ML(b.bW,HA(Cx(a)));}
function Q6(a){Fc(a.bc.U,a.k3);}
function RA(a,b,c){Dt(a.gg,b);a.tv=c;}
var PQ=F(C3);
var ACc=F(C3);
function AQ1(a){var b=new ACc();AKn(b,a);return b;}
function AKn(a,b){var c,d,e,f,g,h;F$(a,b);c=b.bW;d=new Qc;d.t5=a;e=R(C,1);e.data[0]=B(197);CY(c,d,B(198),e);f=b.bW;g=new Qb;g.vT=a;h=R(C,1);h.data[0]=Zh([1,2,3,4,5]);CY(f,g,B(199),h);f=b.bW;g=new Qa;g.nt=a;h=R(C,1);h.data[0]=AQi([1,2,3,4,5]);CY(f,g,B(200),h);f=b.bW;g=new P_;g.tN=a;h=R(C,1);h.data[0]=EQ([1,2,3,4,5]);CY(f,g,B(201),h);f=b.r.b0;d=new Jl;g=new P9;g.uX=a;c=new P8;c.oS=a;Ul(d,b,g,c);Z(f,d);}
function Tm(a,b){var c,d,e,f,g,h;c=b.data;d=Bw();e=Cs(c[0]);f=new M;O(f);G(G(f,B(202)),e);Bu(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((QM(b,1)).gZ));d=Bw();e=Cs(c[1]);if(b===null)f=B(29);else{f=new M;O(f);BX(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BX(f,B(44));S(f,c[g]);g=g+1|0;}BX(f,B(45));f=N(f);}h=new M;O(h);G(G(G(G(h,B(203)),e),B(204)),f);Bu(d,N(h));}
function VF(){var a=this;C3.call(a);a.ds=null;a.ez=null;a.jR=null;a.ol=null;a.kT=null;}
function AIx(a,b){b=b/5.0;IS(b-(b|0),1.0,1.0,1.0,a.ez.K);return 0;}
function AC_(a){Q6(a);CK(a.ds,a.bc.U,a.ol,0,0,0.5);S2(a.ez,a.bc.U,a.jR,0,0,0.0);M4(a.bc.U,B(171));}
function AK5(a,b,c){var d,e,f;RA(a,b,c);Bm(a.ez.s,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.ds;e=d.s;f=b.a;d=d.g;Bm(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Q8(){var a=this;C3.call(a);a.fZ=null;a.p5=null;a.js=null;a.hT=null;a.hc=null;}
function AOE(a){var b,c,d,e,f,g;Q6(a);b=a.bc.U;c=a.hT;TY(b,c.a,c.b,a.hc);b=a.fZ;c=a.p5;d=a.gg;e=a.bc.U;f=0;while(true){g=0;while(true){CK(b,e,c,g,f,0.5);g=g+Ck(c)|0;if(g>=d.a)break;}f=f+C0(c)|0;if(f>=d.b)break;}UJ(a.bc.U);}
function AEL(a,b,c){RA(a,b,c);Bm(a.hc,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function NV(){var a=this;Cp.call(a);a.dO=null;a.jl=null;a.eT=null;a.bV=null;a.eh=0;a.hl=null;a.ej=0;a.uB=20;a.v6=11;a.uh=220;a.iw=null;a.u2=5000;a.gj=0;a.e9=null;}
function AOH(a){var b,c,d,e,f,g,h;b=a.hl;c=a.ej;d=a.iw;HY(b,c,0,d.b,5000,d.a,20);Ct(a.dO,1);O4(a.hl,a.dO);if(a.bV===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Cd(a.jl,Dc(e),0.0,c);}b=CR(a.dO);a.bV=b;CL(b,a.jl);}if(a.ej<=a.eh)while(true){f=a.eh;if(f<=a.ej)break;a.eh=f-20|0;b=a.eT;g=a.gj-1|0;a.gj=g;Cd(b,Dc(g),0.0,20.0);Hw(a.bV,a.eT,0,a.eh%220|0);Ej(a.eT);}else while(a.eh<(a.ej-20|0)){b=a.eT;g=a.gj+1|0;a.gj=g;Cd(b,Dc((g+11|0)-1|0),0.0,20.0);Hw(a.bV,a.eT,0,a.eh%220|0);Ej(a.eT);a.eh=a.eh+20|0;}b=EZ(0,0,Ck(a.bV),C0(a.bV));Hh(b,
0,0,Ck(a.bV),C0(a.bV));FW(b,a.e9.data[0]);He(b,a.e9.data[1]);CK(b,a.dO,a.bV,400,0,1.0);g=a.ej%220|0;f=Y(C0(a.bV)-g|0,200);d=EZ(0,0,Ck(a.bV),f);Hh(d,0,g,Ck(a.bV),f);FW(d,a.e9.data[0]);He(d,a.e9.data[1]);CK(d,a.dO,a.bV,0,0,1.0);h=EZ(0,f,Ck(a.bV),(C0(a.bV)-f|0)-20|0);Hh(h,0,0,Ck(a.bV),(C0(a.bV)-f|0)-20|0);FW(h,a.e9.data[1]);He(h,a.e9.data[0]);CK(h,a.dO,a.bV,0,0,1.0);}
function AGN(a,b,c){Dt(a.iw,b);}
function AFn(a,b){return 0;}
function QG(a){return 5000-a.iw.b|0;}
function HZ(){C3.call(this);this.dh=0;}
function P5(a){var b,c;b=a.bc.bW;c=new Pl;c.l6=a;PP(b,c,Qp(a));}
function LR(a){var b,c,d,e;b=a.dh+1|0;a.dh=b;c=HA(E(HZ));d=new M;O(d);G(G(S(G(d,B(205)),b),B(36)),c);e=N(d);c=a.bc.bW;d=new S5;d.oy=e;Tg(c,e,d,Qp(a));}
function Qp(a){var b;b=new UB;b.ny=a;return b;}
function AL7(a,b,c,d){a:{switch(c){case 0:break;case 2:LR(a);break a;default:break a;}P5(a);}return 1;}
function Pb(){var a=this;Cp.call(a);a.mH=null;a.eM=null;a.kU=null;a.hD=null;}
function AOz(a){var b;b=a.bc.U;Fc(b,a.mH);CK(a.eM,b,a.kU,0,0,0.5);}
function AJp(a,b,c){var d,e,f;d=a.eM;e=d.s;f=b.a;d=d.g;Bm(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Vf(){var a=this;DQ.call(a);a.fn=null;a.dI=null;a.g5=null;a.g6=null;a.k$=null;}
function AHH(a,b,c){if(b===0.0)MX(a);}
function AOY(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;G3(a);b=a.bc.U;c=a.dI;d=c.cC.j-1|0;while(d>=0){e=Bt(c.cC,d);e.br.hN(b);f=e.cf;g=e.gh;if(!K5(f)){if(!SO(f)&&!(!f.hw&&f.dv!==null)){f.hw=0;PS(f);h=f.dA;i=(h.dd+h.dY+5.0)/10.0;j=GX(f.gw,f.il);h=b.cv;k=f.dA;l=f.gB;m=i*2.0;CB(h,k);n=Y(J2(h,l,m)+j|0,f.E.a);if(n){h=CI(b,n,f.E.b);CB(h,f.dA);k=f.gB;o=j;p=o+i;l=f.dA;i=l.dd;Cd(h,k,p,o+i-(i+l.dY)/16.0);k=f.dv;if(k===null){k=CR(b);f.dv=k;}CL(k,h);Fy(h);CD(f.kZ,0.0,0.0,Ck(f.dv),C0(f.dv));}}h=g.X.fs;k=f.dv;if(k===null)Or(f,
b,0,f.E.a,h);else{n=Ck(k);g=g.X.iZ;k=f.bA;j=k.a;q=k.b;k=f.dv;Hx(b,j,q,k.fa,f.kZ,k,g,h,0.0);j=f.E.a;if(n<j)Or(f,b,n,j-n|0,h);}}Ct(b,1);n=GX(e.dz,2.0);j=K5(e.cf);g=e.dz;f=g.jE;g=g.ng;q=j?0:e.cf.E.b;h=e.br.E;Bm(g,h.a,h.b+q|0);UV(b,g,!j?e.cf.bA:e.br.bA,e.gh.iE, -n|0,f);g=e.br;TN(b,g.E,g.bA,n,q,JJ(e.gh.g3,e.dz.bF),e.gh.g3.iX,f);d=d+(-1)|0;}KF(a.fn);}
function MX(a){Vt(a,a.g5);Vt(a,a.g6);a.g5=VJ(a,0.5,0);a.g6=VJ(a,1.0,1);Wh(a.dI,a.g5);Wh(a.dI,a.g6);VT(a);}
function Vt(a,b){var c;if(b!==null){UR(a.dI.cC,b);c=b.cf;c.dv=CJ(c.dv,null);b.br=CJ(b.br,null);}}
function VJ(a,b,c){var d,e,f,g,h;d=new WJ;e=a.bd;d.br=APz();d.dz=e;f=new Sk;KN(f);f.kZ=new B3;f.gw=e;d.cf=f;e=new UQ;KN(e);e.de=new Bl;e.cL=new Bl;e.hu=new B3;e.kG=new Bl;e.ov=b;if(c){f=new Pi;g=a.bd;KN(f);h=new SU;h.m1=f;f.p2=h;h=new SV;h.pQ=f;f.r6=h;f.kY=10.0;f.cp=e;f.kM=g.e0;e=f;}f=d.br;g=f.bA;h=f.E;e=CJ(f,e);d.br=e;e.ip(g,h,d.dz.bF);d.gh=Gm();return d;}
function ALn(a,b,c){var d,e;H0(a,b,c);b=a.dI;d=0;while(true){e=b.cC;if(d>=e.j)break;Bt(e,d);d=d+1|0;}VT(a);}
function VT(a){var b,c,d;b=a.bd.c7;JB(a.g5,Cn((b.a*4|0)/10|0,(b.b*4|0)/10|0),Cn((b.a*5|0)/10|0,(b.b*5|0)/10|0));JB(a.g6,Cn(b.a/10|0,b.b/10|0),Cn((b.a*6|0)/10|0,(b.b*6|0)/10|0));c=a.g5;b=LI(UL(c));d=new M;O(d);G(G(d,B(206)),b);UU(c,N(d),a.k$,3.0);c=a.g6;b=LI(UL(c));d=new M;O(d);G(G(d,B(207)),b);UU(c,N(d),a.k$,3.0);}
function AIt(a,b){var c,d,e,f;c=a.dI;d=0;e=0;while(true){f=c.cC;if(e>=f.j)break;Bt(f,e);d=0|d;e=e+1|0;}return d;}
var P$=F(JN);
function AHM(a){return ACm(1);}
function AES(a,b){ZW(a,b);}
var Ip=F(0);
function LB(){var a=this;C.call(a);a.ij=null;a.hR=null;}
function LO(a,b){var c;c=a.hR;a.hR=b;return c;}
function IM(){var a=this;LB.call(a);a.bE=null;a.bS=null;a.e8=0;a.fg=0;}
function I0(a){var b;b=Ka(a);if(b==2){if(Ka(a.bS)<0)a.bS=Mr(a.bS);return NS(a);}if(b!=(-2))return a;if(Ka(a.bE)>0)a.bE=NS(a.bE);return Mr(a);}
function Ka(a){var b,c;b=a.bS;c=b===null?0:b.e8;b=a.bE;return c-(b===null?0:b.e8)|0;}
function Mr(a){var b;b=a.bE;a.bE=b.bS;b.bS=a;D7(a);D7(b);return b;}
function NS(a){var b;b=a.bS;a.bS=b.bE;b.bE=a;D7(a);D7(b);return b;}
function D7(a){var b,c,d;b=a.bS;c=b===null?0:b.e8;b=a.bE;d=b===null?0:b.e8;a.e8=Bb(c,d)+1|0;a.fg=1;b=a.bE;if(b!==null)a.fg=1+b.fg|0;b=a.bS;if(b!==null)a.fg=a.fg+b.fg|0;}
var ABW=F();
function AD8(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Of;c=c.buffer;d.e7=c;d.lA=new $rt_globals.Int8Array(c);d.jm=new $rt_globals.Uint16Array(c);d.qV=new $rt_globals.Int32Array(c);d.n$=new $rt_globals.Float32Array(c);d.oj=new $rt_globals.Float64Array(c);e=d.e7.byteLength;c=new M;O(c);S(G(c,B(208)),e);CE(N(c));e=b.callToCpp1();c=new M;O(c);S(G(c,B(209)),e);CE(N(c));f=b.callToCpp2();c=new M;O(c);E4(G(c,B(210)),f);CE(N(c));c=Me(d,b.getC8String());g=new M;O(g);G(G(g,B(211)),c);CE(N(g));c
=Mm(d,b.getC16String());g=new M;O(g);G(G(g,B(212)),c);CE(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.e7,h,8));c=AAH(i);g=new M;O(g);G(G(g,B(213)),c);CE(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.e7,h,8));c=AMr(j);g=new M;O(g);G(G(g,B(214)),c);CE(N(g));k=Y2(d,b.getCDoubleArray8(),8);l=AO0(k);c=new M;O(c);G(G(c,B(215)),l);CE(DD(c));l=AOO(b.getC8String(),B(216),d);c=K6();G(G(c,B(217)),l);CE(DD(c));l=AJd(b.getC16String(),B(218),
d);c=K6();G(G(c,B(219)),l);CE(DD(c));c=AK0(i,d,b.getCIntArray8(),EQ([11,22,33,44,55,66,77,88]));g=K6();G(G(g,B(220)),c);CE(DD(g));c=AMG(j,d,b.getCFloatArray8(),100,EQ([111,222,333,444,555,666,777,888]));g=K6();G(G(g,B(221)),c);CE(DD(g));b=AMW(k,d,b.getCDoubleArray8(),1000,EQ([1111,2222,3333,4444,5555,6666,7777,8888]));c=K6();G(G(c,B(222)),b);CE(DD(c));}
function AMG(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(223);h=0;i=e;a:{while(h<g){if(C6(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.n$[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(224);}return B(225);}
function AMW(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(223);h=0;i=e;a:{while(h<g){if(GW(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.oj[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(224);}return B(225);}
function AK0(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(223);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.qV[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(224);}return B(225);}
function AOO(b,c,d){var e,f,g,h;e=Me(d,b);if(!Bo(c,e))return B(226);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lA[h])return B(227);f=f+1|0;}return B(224);}
function AJd(b,c,d){var e,f,g,h;e=Mm(d,b);if(!Bo(c,e))return B(226);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jm[h>>>1|0]&65535))return B(227);f=f+1|0;}return B(224);}
function CE(b){Ob(B(2),b);}
function AIg(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
var XL=F(0);
function Op(b,c,d){return Hf(b,c,d,255,new B3);}
function WS(b,c,d,e){return Hf(b,c,d,e,new B3);}
function Hf(b,c,d,e,f){CD(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function GM(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.ba=g+i;e.bp=h+i;e.bh=j+i;return e;}
function IS(b,c,d,e,f){f=GM(b,c,d,f);f.bq=e;return f;}
function Gl(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function ACu(){var a=this;C.call(a);a.c1=null;a.h$=null;a.c7=null;a.e0=null;a.bF=0.0;a.en=null;a.dx=null;a.jE=null;a.ng=null;}
function ADO(a){var b=new ACu();AEo(b,a);return b;}
function AEo(a,b){var c,d;a.c7=new Bl;a.dx=CG(R(DS,0));a.jE=new Bl;a.ng=new Bl;a.c1=b.U;c=b.bW;a.h$=c;a.e0=Tt(c);c=b.r.jD;d=new LU;d.mI=a;Z(c,d);b=b.r.iY;c=new LV;c.pa=a;Z(b,c);}
function Kn(a,b,c){var d,e,f,g;a:{Dt(a.c7,b);d=a.bF;if(d!==c){a.bF=c;e=(Cl(a.dx)).data;f=e.length;g=0;while(true){if(g>=f)break a;e[g].fb(d,c);g=g+1|0;}}}}
function Mg(a,b){var c;c=a.en;return c!==null&&c.gA(b)?1:0;}
function J3(a){var b;b=a.en;if(b!==null)b.qY();}
function I$(a){var b;b=a.en;if(b!==null)b.s6();}
function Lu(a,b){I$(a);a.en=b;J3(a);}
function PD(a,b){if(a.en===b)a.en=null;}
function K$(a){return a.c1.cv;}
function HV(a,b){return FF(a.c1,b.h1,Cb(b.hq,a.bF));}
function GX(a,b){return Cb(b,a.bF);}
function TH(){var a=this;C.call(a);a.kl=null;a.cW=null;a.b3=null;a.bm=null;}
function ALI(a,b){return !PO(a.cW,b.o)&&!JK(a.b3,b)?0:1;}
function AO8(a,b,c,d){return !Pq(a.cW,b.o,c,d)&&!II(a.b3,b,c,d)?0:1;}
function AOR(a,b,c){return !Fw(a.cW)&&!I9(a.b3,b,c)?0:1;}
function AKc(a,b,c){return !Fw(a.cW)&&!DO(a.b3)?0:1;}
function Rq(a,b,c,d){var e;e=ZZ(a.cW,c,null,d);F0(a.cW);OP(a.cW,b,e,IH(a,d));}
function IH(a,b){var c;c=new Ue;c.mT=a;c.mS=b;return c;}
function Xs(b){var c;c=new Sd;c.nm=b;return c;}
var Hp=F(0);
function AFd(a){}
function APd(a){}
function Y3(){var a=this;C.call(a);a.d3=null;a.O=null;a.gI=null;a.pY=0;a.k7=null;a.cB=null;a.x=0;a.w=0;a.gN=0;a.kr=0;a.fM=0;a.ir=null;a.dV=null;a.ct=null;a.V=0;a.e=null;a.d1=null;a.p=null;a.fh=null;a.d9=null;a.lE=null;a.f_=null;a.r7=0;a.qv=0;a.qp=0;a.cI=0;a.jG=0;a.kK=0;a.j0=null;a.eB=null;a.ex=null;a.bf=0;a.cj=0;a.gT=0;a.hE=0;a.hs=0;a.tZ=0;a.tr=0;a.iP=0;a.kj=0;a.eD=null;a.co=null;a.cK=null;a.hp=0;a.ho=0;a.et=null;a.e5=0;a.hQ=null;a.hG=null;a.tG=null;a.gz=null;a.km=0;a.pV=null;a.g0=null;a.ew=Ec;a.fS=null;a.rG
=null;a.r1=null;}
function AQ$(a,b){var c=new Y3();AHG(c,a,b);return c;}
function AHG(a,b,c){var d,e,f;a.pY=0;a.k7=R(Bh,10);a.cB=AJ_();a.fM=16;a.ir=B(124);a.ct=R(Ko,4);d=new KX;d.h=ALh();d.iq=B(164);d.fH=null;a.e=d;d=new UM;d.mw=CG(R(Ly,0));d.re=CG(R(Ly,0));d.ru=CG(R(LY,0));d.nx=CG(R(Pc,0));d.l0=CG(R(H2,0));d.p0=CG(R(Qg,0));a.d1=d;a.p=AKD();e=new MG;e.ep=R(ID,16);e.er=0;e.c3=(-1);a.fh=e;a.f_=R(EE,0);a.qp=100;a.jG=1;a.j0=Cn(1,0);a.eB=G4();a.ex=G4();a.bf=0;a.cj=0;a.gT=0;a.hs=1;a.iP=1;a.kj=3;a.eD=AJn();a.co=new Bl;a.cK=new Bl;a.et=B(228);a.e5=0;a.hQ=null;a.hG=Cj();e=KY();BI(e);d=new TE;d.vW
=e;a.gz=d;a.pV=new B3;a.g0=new Bl;e=new TD;e.pJ=a;a.rG=e;e=new Tz;e.mW=a;a.r1=e;a.d3=b;a.O=b.c1;a.gI=c;f=a.k7.data;b=new Ty;b.rF=a;f[0]=b;b=new TB;b.p6=a;f[1]=b;b=new TA;b.m$=a;f[2]=b;b=new T3;b.rZ=a;f[3]=b;ADb();a.hE=ATl===ATm?0:1;}
function AF4(a){a.kr=1;KW(a);}
function AEM(a){a.kr=0;}
function KW(a){Rc(a.cB,IN(Ce(a)));}
function Kt(a,b,c){if(a.d3.bF!==0.0){ST(a,b,c);FN(Ce(a));}a.fM=c;a.ir=b;}
function ST(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=Cb(c,a.d3.bF);e=a.dV;f=e!==null?e.nK:0;if(!(d==f&&D9(b,a.ir))){g=a.eD;Jh(g.cs,new Qt);G8(g.cs);g.ek=CJ(g.ek,null);g.e1=CJ(g.e1,null);h=a.f_.data;c=h.length;f=0;while(f<c){Pu(h[f]);f=f+1|0;}h=a.e.h.B.data;c=h.length;f=0;while(f<c){D4(h[f]);f=f+1|0;}h=a.ct.data;i=G0(0,0);e=a.O;j=d;h[i]=Fk(e,b,j,400,0);a.ct.data[G0(0,1)]=Fk(a.O,b,j,400,2);a.ct.data[G0(1,0)]=Fk(a.O,b,j,700,0);a.ct.data[G0(1,1)]=Fk(a.O,b,j,700,2);e=a.ct.data[G0(0,0)];a.dV=e;f=FB(e);a.V=C6(f*1.25);a.cB.du.g.b
=FB(a.dV);a.lE=CJ(a.lE,CI(a.O,1024,a.V));e=a.gI.cW;k=a.O;g=a.dV;l=g.m9;if(26.0<l)l=26.0;RH(e,Fk(k,b,l,g.nk,g.oD));i=a.V;m=Ru(a.cB);e=new M;O(e);b=G(G(e,B(229)),b);BC(b,32);S(G(S(G(S(G(S(b,d),B(230)),f),B(133)),i),B(231)),m);$rt_globals.console.info($rt_ustr(N(e)));if(ATn){c=Ku(a.dV,a.V);b=new M;O(b);S(G(b,B(232)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gN=GD(Fb(a),a.w,a.O.cv,a.ct);Gx(a);Uy(a);}}
function TW(a){return Ba(Cz(a.e.h)+5|0,a.V);}
function EF(a){return Bb(TW(a)-a.cK.b|0,0);}
function F6(a){return Bb(a.gT-DF(a)|0,0);}
function DF(a){return a.cK.a-a.cI|0;}
function Du(a){return a.cK.b;}
function ACl(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=K3(a.cK.b,a.V)+7|0;c=a.f_;if(c.data.length<b)a.f_=YQ(b,c,a.r7,a.qv,a.e.h);Ct(a.O,0);d=a.j0;d.b=a.cK.b;d.a=a.jG;e=a.O;f=a.co;BJ(e,(f.a+a.cI|0)-a.kK|0,f.b,d,a.d9.rj);d=a.j0;b=a.kK;g=a.jG;d.a=b-g|0;e=a.O;f=a.co;BJ(e,((f.a+a.cI|0)-b|0)+g|0,f.b,d,a.d9.iM);a.bf=Y(a.bf,EF(a));a.cj=Y(a.cj,F6(a));g=(a.V-Ru(a.cB)|0)/2|0;h=(a.gN-(Pm(a.cB)/2|0)|0)-a.cj|0;OV(a.cB,a.cI+h|0,(g+Ba(a.x,a.V)|0)-a.bf|0);i=Cz(a.e.h);j=Kl(a);k=TT(a);a.r7=j;a.qv=k;l=j;while(l<=k&&l<i){m
=B0(a.e.h,l);n=PZ(a,l);f=a.lE;o=a.ct;p=a.O;q=a.V;r=DF(a);s=a.cj;d=n.bO;b=d===m&&!d.hB?0:1;if(b){n.bO=m;Kw(m,p.cv,o);}d=n.bO;g=d===null?0:EK(d)<r?K3(EK(n.bO),1024):K3(r,1024)+1|0;r=g<=n.dl?0:1;if(r)n.dl=g;if(!(!b&&!r)){if(ATo){c=m.e$;$rt_globals.console.info("fMeasure"+c.data);ATo=0;}AAI(f,ATn);AAQ(n,f,p,o,q,s);n.bO.hB=0;}AAy(n,f,o,q,s);t=n.bO;a.gT=Bb(a.gT,EK(m)+(40.0*a.d3.bF|0)|0);r=Ba(a.V,l)-a.bf|0;d=a.co;AAE(n,d.b+r|0,d.a+a.cI|0,a.O,a.pV,a.g0,!a.hE?0.0:0.5,DF(a),a.V,a.cj,a.d9,ABB(a,l,t),a.hQ,a.hG);l=l+1|0;}q
=j;while(q<=k&&q<i&&a.iP){d=PZ(a,q);r=Ba(a.V,q)-a.bf|0;e=!Yi(a.p,q)?a.d9.lX:a.d9.kQ;f=a.O;p=a.co;AAn(d,f,p.a+a.cI|0,p.b+r|0,a.V,a.g0,a.cj,DF(a),e);q=q+1|0;}if(a.kr&&h>=(( -Pm(a.cB)|0)/2|0)){d=a.cB;e=a.cK;if(NF(d.du.s,0,0,e))T0(a.cB,a.O,a.co);}if(a.hs){s=Y(k+1|0,i);ZY(a,Ba(a.V,s)-a.bf|0);}Ze(a,j,k);AAx(a);ABb(a);}
function ABB(a,b,c){var d,e,f,g;a:{d=a.p;e=DP(d);d=Fg(d);f=e.I;if(f<=b){g=BH(b,d.I);if(g<=0){d=Cn(b<=f?e.T:0,g>=0?d.T:(-1));break a;}}d=null;}if(d!==null){if(d.b==(-1))d.b=c.M;d.a=GD(c,d.a,a.O.cv,a.ct);d.b=GD(c,d.b,a.O.cv,a.ct);}return d;}
function Ze(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cK.b;e=Y(d,Ba(Cz(a.e.h),a.V)-a.bf|0);f=a.eD;g=a.bf;h=a.x;i=a.O;j=a.d9.sV;Je(f,i,b,d);Wx(f,b);S6(f,g,e,j,i);if(e<d){k=f.fC;BJ(i,k.a,k.b+e|0,Cn(f.eN.a,d-e|0),j.g8);}if(b<=h&&h<=c){c=h/20|0;k=f.cs;k=Bt(k,c%k.j|0);l=f.fC;c=Ba(f.cs.j,f.hX);b=k.ec.b;d=((k.io.b-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C0(k.bT)|0)|0;b=h%k.dq|0;e=k.d_;d=d+Ba(b,e)|0;if(d<( -e|0))d=d+c|0;Bm(k.f2,k.ec.a,e);m=k.ft;b=h%k.dq|0;c=k.d_;CD(m,0.0,Ba(b,c),k.ec.a,c);In(k,i,d,l,j.ot,j.oB);}}
function Kl(a){return Y(a.bf/a.V|0,Cz(a.e.h)-1|0);}
function TT(a){return Y(((a.bf+Du(a)|0)-1|0)/a.V|0,Cz(a.e.h)-1|0);}
function Uy(a){Sv(a.eD,a.ct.data[0],a.V,a.O);Je(a.eD,a.O,Kl(a),Du(a));}
function PZ(a,b){var c;c=a.f_.data;return c[b%c.length|0];}
function ACt(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!De(a.p))DC(a,a.et);else{b=DP(a.p);c=Fg(a.p);d=c.I;e=b.I;f=(d-e|0)+1|0;g=BF(f);h=g.data;i=R(By,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.et;e=e+1|0;k=f;}l=ED(a.x,a.w);m=new UP;m.q0=a;Ow(a,g,0,0,i,l,m);b.T=b.T+I(a.et)|0;c.T=c.T+I(a.et)|0;Lf(a,a.w+I(a.et)|0,0);DJ(a);}return 1;}
function AAh(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!De(a.p)){b=B0(a.e.h,a.x);if(b.n.data.length>0){c=QI(a,b);if(c===null)return 1;d=a.e.h;e=a.x;f=ED(e,a.w);d.cn=d.cn+1|0;g=d.e6;h=R(GF,1);h.data[0]=ADf(e,0,1,c,f.bB,f.bI);BW(g,h);IY(d,e,0,1,c);FC(b,0,I(c));Lf(a,a.w-I(c)|0,0);}}else{f=DP(a.p);c=Fg(a.p);i=c.I;j=f.I;i=(i-j|0)+1|0;k=BF(i);h=k.data;l=R(By,i);m=l.data;e=a.w;n=a.x;o=0;while(j<=c.I){b=B0(a.e.h,j);if(b.n.data.length>0){b=QI(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=ACj(k,o);h=C$(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.I)f.T=Bb(0,f.T-I(b)|0);if(j==c.I){c.T=Bb(0,c.T-I(b)|0);Lf(a,a.w-I(b)|0,0);}i=i+1|0;}f=ED(n,e);b=new Ry;b.sw=a;Ow(a,p,0,1,h,f,b);}DJ(a);return 1;}
function QI(a,b){var c,d,e,f;c=GU(0,I(a.et),V5(b));if(!c)b=null;else{b=B(60);if(c<0){b=new BB;U(b);J(b);}if(c!=1){d=b.bR.data.length;if(d&&c){e=BQ(Ba(d,c));d=0;f=0;while(f<c){OM(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Lz(e);}else b=AR3;}}return b;}
function Ow(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BF(i);k=ARv(i).data;G$(j,c);c=0;l=k.length;if(c>l){f=new BB;U(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.h;o.cn=o.cn+1|0;p=R(GF,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ADf(h[m],n[m],k[m],b[m],f.bB,f.bI);m=m+1|0;}BW(o.e6,p);c=0;while(c<i){b=e.data;IY(o,h[c],n[c],k[c],b[c]);g.lC(FJ(h[c]),b[c]);c=c+1|0;}}
function ABO(a){var b,c,d,e,f,g,h,i;if(De(a.p))Go(a);D4(B0(a.e.h,a.x));b=a.e.h;c=a.x;d=a.w;e=b.B;f=e.data;g=f[c];e=C$(e,f.length+1|0);f=e.data;b.B=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DA(R(B4,0));b.B.data[c+1|0]=g;}else if(d==g.M){f[c]=g;f[c+1|0]=DA(R(B4,0));}else{f=(H5(g,d)).data;e=b.B.data;e[c]=f[0];e[c+1|0]=f[1];}Gh(b,c,d,0,B(233));DJ(a);return Cy(a,a.x+1|0,0,0);}
function ABu(a){if(De(a.p))Go(a);else Ol(a.e.h,a.x,a.w);Gx(a);DJ(a);return 1;}
function W7(a){var b,c,d;if(De(a.p)){Go(a);return 1;}b=a.w;if(!b&&!a.x)return 1;if(b){c=a.x;b=b-1|0;Ol(a.e.h,c,b);}else{c=a.x-1|0;b=E5(a.e.h,c);d=a.e.h;Kk(d,c);Gh(d,c,E5(d,c),1,B(233));}DJ(a);return Cy(a,c,b,0);}
function DC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.e5)return 0;if(De(a.p))Go(a);c=Lc(T4(b,B(234),B(31)),B(233),(-1));d=c.data;b=a.e.h;e=a.x;f=a.w;WF(b,e,f,c);g=d.length;if(!g)h=AR3;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BQ(i+Ba(g-1|0,I(B(233)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(233))){m=l+1|0;c[l]=L(B(233),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Lz(k);}Gh(b,e,f,0,h);e=a.x;m=(e+g|0)-1|
0;Cy(a,m,m!=e?I(d[g-1|0]):a.w+I(d[0])|0,0);ES(a);DJ(a);return 1;}
function Go(a){var b,c,d;b=DP(a.p);c=a.e.h;d=a.p;Si(c,d,UX(c,d));Cy(a,b.I,b.T,0);ES(a);DJ(a);}
function ES(a){var b;b=a.p;b.cQ=0;BZ(b.bJ,a.x,a.w);BZ(a.p.by,a.x,a.w);}
function Pj(a){return a.dV.li|0;}
function ZY(a,b){var c,d,e;c=a.cK.b;if(b<c){d=a.g0;d.b=c-b|0;d.a=DF(a);d=a.O;e=a.co;BJ(d,e.a+a.cI|0,e.b+b|0,a.g0,a.d9.iM);}}
function AAx(a){HY(a.eB,a.bf,a.co.b,Du(a),TW(a),a.co.a+a.cK.a|0,Pj(a));LK(a.ex,a.cj,a.co.a+a.cI|0,DF(a),a.gT,a.co.b+Du(a)|0,Pj(a));}
function ABb(a){var b,c;b=OT(a.eB);c=OT(a.ex);if(!(!b&&!c)){Ct(a.O,1);if(b)FG(a.eB,a.O);if(c)FG(a.ex,a.O);if(b)FY(a.eB,a.O);if(c)FY(a.ex,a.O);}}
function D1(a,b,c){return Y(Bb(0,b),c);}
function Hj(a,b){var c,d,e,f,g;b=b.data;a.hp=1;a.ho=1;c=Ei(b[0]);d=Fr(b[1]);e=(Ei(b[2])).data[0];a.e.h=Z4(c,d);U7(a,ABy(e));Gd(Ce(a),ATp);FN(Ce(a));f=JG(Fn(),a.ew);g=new M;O(g);G(Hs(G(g,B(235)),f),B(236));$rt_globals.console.info($rt_ustr(N(g)));}
function U7(a,b){var c,d;c=Db(a.e);if(!D9(c,b)){d=new M;O(d);G(G(G(G(d,B(237)),c),B(238)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.iq=b;}}
function Ce(a){return a.d3.h$;}
function QH(a,b){var c,d,e,f,g;c=EO(b);d=new M;O(d);G(G(d,B(239)),c);$rt_globals.console.info($rt_ustr(N(d)));ML(Ce(a),EO(b));Cy(a,0,0,0);a.ew=Fn();a.hp=0;a.ho=0;a.e.h=ALh();Cy(a,0,0,0);c=EO(b);e=FK(c,46,I(c)-1|0);if(e!=(-1))c=Dq(c,e);f=!Bo(c,B(240))?5120:10240;c=new V3;c.qf=a;c.qg=f;c.qh=b;d=b.eI;if(d!==null)Lp(c,IW(b,d.size));else{d=b.gm.getFile();g=new Sn;g.lI=b;g.lJ=c;b=new Sq;b.ss=c;d.then(Bk(g,"f"),Bk(b,"f"));}}
function Hc(a,b,c,d,e){if(G6(a,e))return 1;if(c&&d)return 1;if(c)a.bf=D1(a,a.bf+((Ba(b,a.V)*12|0)/10|0)|0,EF(a));else if(!d){H8(a,a.x+b|0,e);Se(a);}return 1;}
function S7(a,b,c,d){var e,f,g;if(G6(a,d))return 1;e=Fb(a);if(!c)f=a.w+b|0;else if(b>=0)f=Gy(e,a.w);else{f=a.w;if(!f)f=(-1);else{c=HT(e,f);if(c>0&&e.da.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.da.data[c-1|0];}}if(f>e.M){if((a.x+1|0)<Cz(a.e.h))Cy(a,a.x+1|0,0,d);}else if(f>=0)Df(a,f,d);else{b=a.x;if(b>0){g=(B0(a.e.h,b-1|0)).M;Cy(a,a.x-1|0,g,d);}}OG(a);return 1;}
function G6(a,b){if(De(a.p)&&!b){ES(a);Gx(a);return 1;}if(!(b&&De(a.p)))ES(a);return 0;}
function Cy(a,b,c,d){a.w=c;return H8(a,b,d);}
function H8(a,b,c){a.x=GU(0,b,Cz(a.e.h)-1|0);return Df(a,a.w,c);}
function Df(a,b,c){a.w=GU(0,b,(Fb(a)).M);a.gN=a.d3.bF===0.0?0:GD(Fb(a),a.w,a.O.cv,a.ct);KW(a);Gx(a);if(c)a.p.cQ=1;JX(a.p,a.x,a.w);a.p.cQ=0;return 1;}
function Lf(a,b,c){var d;d=Qs(a.p);Df(a,b,c);a.p=d;}
function Gx(a){Se(a);OG(a);}
function Se(a){var b,c,d,e,f;b=a.bf;c=b+Du(a)|0;d=a.x;e=a.V;d=Ba(d,e);f=d+e|0;if(d<(b+e|0))a.bf=D1(a,d-e|0,EF(a));else if(f>(c-e|0))a.bf=D1(a,(f-Du(a)|0)+a.V|0,EF(a));}
function OG(a){var b,c,d,e,f;b=C6(a.d3.bF*30.0);c=a.cj;d=c+DF(a)|0;e=a.gN;f=e+b|0;if(e<(c+b|0))a.cj=D1(a,e-b|0,F6(a));else if(f>(d-b|0))a.cj=D1(a,(f-DF(a)|0)+b|0,F6(a));}
function Sm(a,b,c){var d,e,f,g,h,i,j,k,l;T1(a);d=a.e.h;e=Eh(d.dQ,c);if(e!==null)a.hQ=Ph(d,e);if(e!==null)c=e;a:{f=Eh(d.eb,c);if(f!==null){c=BR(f);while(true){if(!B1(c))break a;g=BV(c);BW(a.hG,Ph(d,g));}}}h=b.bB;i=b.bI;b=a.d1;c=Db(a.e);d=GC(a.e);j=(Cl(b.nx)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.r$(c,d)){c=b.vo;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new Sl;b.u8=a;b.u9=d;b.u6=h;b.u7=i;c.qL(d,h,i,b,a.gz);}}
function Hd(a,b){var c;Cy(a,b.bB,b.bI,0);c=Gy(Fb(a),a.w);BZ(a.p.by,a.x,c);BZ(a.p.bJ,a.x,a.w);}
function Fl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.co;e=c-d.a|0;f=GU(0,((b.b-d.b|0)+a.bf|0)/a.V|0,Cz(a.e.h)-1|0);g=Bb(0,(e-a.cI|0)+a.cj|0);b=B0(a.e.h,f);d=a.O.cv;h=a.ct;if(!(b.dT!==null&&!b.fv))Kw(b,d,h);i=b.dT;e=b.n.data.length;if(!e)j=0;else if(g<=0)j=0;else{k=i.data;if(g>=k[e-1|0])j=b.M;else{l=SS(i,0,e,g);if(l<0)l=( -l|0)-1|0;if(l==b.n.data.length)j=b.M;else{i=Vz(b,d,h,l);j=0;c=0;while(c<l){j=j+I(b.n.data[c].u)|0;c=c+1|0;}c=!l?0:k[l-1|0];e=k[l];l=0;a:{while(true){h=i.data;if(l>=h.length){m=e;break a;}m
=h[l];if(g<m)break;j=j+1|0;l=l+1|0;e=m;c=m;}}if(ATq){b=new M;O(b);S(G(S(G(S(G(b,B(241)),c),B(242)),g),B(243)),m);$rt_globals.console.info($rt_ustr(N(b)));n=j;$rt_globals.console.info(" pos = "+n);}if((g-c|0)>(m-g|0))j=j+1|0;}}}return ED(f,j);}
function Sb(a,b){var c;c=b.bB;a.x=c;a.w=b.bI;a.gN=GD(B0(a.e.h,c),a.w,a.O.cv,a.ct);KW(a);}
function Fb(a){return B0(a.e.h,a.x);}
function ALp(a,b,c){a.p.cQ=0;if(a.fS!==null)a.fS=null;return 1;}
function ANx(a,b,c){var d,e,f,g,h,i,j;if(!c){d=E0(a.eB,b.o,a.rG,1);a.fS=d;if(d!==null)return 1;d=E0(a.ex,b.o,a.r1,0);a.fS=d;if(d!==null)return 1;a:{Ih(a);d=b.o;e=Fl(a,d);f=OQ(a.e.h,e.bB,e.bI);if(b.ck){g=J7(a.d1,Db(a.e),GC(a.e));if(g!==null){h=a.e;c=e.bB;i=e.bI;j=new TS;j.tV=a;j.tU=d;g.qL(h,c,i,j,a.gz);}else{g=Eh(a.e.h.dQ,f);if(g!==null){Hd(a,g);c=1;}else{g=Eh(a.e.h.eb,f);if(g!==null&&!D2(g)){if(g.j!=1){Rq(a.gI,d,g,a);c=1;}else{Hd(a,Bt(g,0));c=1;}}else c=0;}if(c)break a;}}Sb(a,e);Sm(a,e,f);if(!b.bw){b=a.p;if
(!b.cQ)BZ(b.bJ,a.x,a.w);}b=a.p;b.cQ=1;JX(b,a.x,a.w);b=new TQ;b.pC=a;a.fS=b;}}return 1;}
function AHa(a,b,c,d){var e,f,g;if(!c&&d==3){O_(a.p,a.x);Wc(a.fh);Ih(a);return 1;}if(!c&&d==2){a:{c=(Fl(a,b.o)).bB;e=B0(a.e.h,c);c=GB(e,a.w);d=Gy(e,a.w);b=TK(e,c);if((d-1|0)==e.M){BZ(a.p.bJ,a.x,V5(e));BZ(a.p.by,a.x,e.M);}else{if(b!==null){b=b.u;f=0;b:{while(true){g=b.bR.data;if(f>=g.length)break;if(g[f]!=32){f=0;break b;}f=f+1|0;}f=1;}if(f){f=a.w;if(c==f){c=GB(e,c-1|0);d=Gy(e,c);}else{if(d!=f){O_(a.p,a.x);break a;}c=GB(e,d+1|0);d=Gy(e,c);}}}BZ(a.p.bJ,a.x,c);a.p.cQ=1;Cy(a,a.x,d,0);a.p.cQ=0;}}Ih(a);return 1;}return 1;}
function AFA(a,b){var c,d,e,f,g,h,i,j;c=a.fS;if(c!==null){c.m(b);return 1;}c=a.d3.e0;if(E$(a.eB,b.o,c))return 1;if(E$(a.ex,b.o,c))return 1;d=a.eD;if(G_(b.o,d.fC,d.eN)&&GV(c)?1:0)return 1;a:{d=b.o;e=a.co;f=e.a+a.cI|0;g=e.b;h=DF(a);i=Du(a);j=d.a;if(j>=f&&j<(f+h|0)){f=d.b;if(f>=g&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GV(c);if(b.ck){d=Fl(a,b.o);Wm(a.e.h,d);b=a.e.h;if(!M1(b.dQ,d)&&!M1(b.eb,d)?0:1)return JT(c,B(163));}return JT(c,B(164));}
function AKp(a,b){var c,d,e,f;c=b.ck;if(c&&b.bg==65){c=Cz(a.e.h)-1|0;d=E5(a.e.h,c);BZ(a.p.bJ,0,0);BZ(a.p.by,Cz(a.e.h)-1|0,d);return 1;}if(c&&b.bg==80){Jk(a);return 1;}if(!a.e5&&c&&b.bg==90){if(De(a.p))ES(a);b=a.e.h;b.cn=b.cn+1|0;e=b.e6;d=e.j;if(!d)e=null;else{f=(Eb(e,d-1|0)).data;e=Sa(b,f[0]);c=1;while(c<f.length){Sa(b,f[c]);c=c+1|0;}}if(e!==null){Cy(a,e.a,e.b,0);DJ(a);}return 1;}if(!c&&!b.c5){if(Bo(b.dm,B(244))){DC(a,B(245));Df(a,a.w-1|0,0);c=1;}else if(Bo(b.dm,B(246))){DC(a,B(247));Df(a,a.w-1|0,0);c=1;}else if
(Bo(b.dm,B(43))){DC(a,B(248));Df(a,a.w-1|0,0);c=1;}else if(Bo(b.dm,B(249))){DC(a,B(250));Df(a,a.w-1|0,0);c=1;}else if(Bo(b.dm,B(251))){DC(a,B(252));Df(a,a.w-1|0,0);c=1;}else if(!Bo(b.dm,B(253)))c=0;else{DC(a,B(254));Df(a,a.w-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c5&&!b.ck)){d=b.bg;if(d>=48&&d<=57){c=d-48|0;e=a.k7.data[c];if(e!==null)e.q();c=1;break a;}}c=0;}if(c)return 1;d=b.bg;if(112<=d&&d<=123)c=1;else b:{switch(d){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(Zf(a,b))return 1;if(a.e5)c=0;else c:{switch(b.bg){case 8:break;case 9:c=!b.bw?ACt(a):AAh(a);break c;case 13:c=ABO(a);break c;case 46:c=ABu(a);break c;default:c=0;break c;}c=W7(a);}if(c)return 1;if(b.ck&&b.bg==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(b.bg==27)return 0;return I(b.dm)>0&&DC(a,b.dm)?1:0;}
function Vx(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bo(B(136),Db(a.e))){b=Ce(a);c=new Mt;c.oT=a;d=R(C,3);e=d.data;e[0]=F4(a.e.h);f=Kl(a);g=TT(a);h=Bb(0,f-100|0);f=Y(Cz(a.e.h)-1|0,g+100|0);i=BF(3);j=i.data;j[0]=FT(a.e.h,h);k=a.e.h;l=0;f=Y(f+1|0,k.B.data.length);m=0;while(m<f){l=l+E5(k,m)|0;if(m!=(k.B.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.h.cY;k=Cj();Vh(n,n.cF,k);i=BF(3*k.j|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bt(k,m);h=p+1|0;o[p]=q.bG;l=h+1|0;o[h]=q.bL;p=l+1|0;o[l]=q.eZ;m=m+1|
0;}e[2]=i;CY(b,c,B(255),d);}}
function Jk(a){var b,c,d,e;b=ZI(Db(a.e));if(b!==null){a.ew=Fn();c=Ce(a);d=new VM;d.o5=a;e=R(C,1);e.data[0]=F4(a.e.h);CY(c,d,b,e);}}
function Rx(a){var b,c,d,e,f,g,h;b=a.e.h.cY;c=On(b,b.cF);if(c===null)return;if(Bo(B(164),Db(a.e)))Ox(a.e.h);a:{d=EQ([CU(c),C1(c),c.b1.eZ]);e=F4(a.e.h);f=BF(1);g=Db(a.e);h=(-1);switch(Kz(g)){case 3401:if(!Bo(g,B(256)))break a;h=3;break a;case 98723:if(!Bo(g,B(257)))break a;h=2;break a;case 3254818:if(!Bo(g,B(136)))break a;h=1;break a;case 3556653:if(!Bo(g,B(164)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Ce(a);c=new SA;c.os=a;CY(b,c,B(258),H(C,[e,f,d]));}
function Kq(a,b,c){var d,e,f,g,h,i;if(c&&a.e5)return 0;d=DP(a.p);e=d.I;if(De(a.p)){f=a.e.h;g=a.p;h=UX(f,g);if(c)Si(f,g,h);if(c){Cy(a,d.I,d.T,0);ES(a);DJ(a);}}else{h=EX(Ev(a.e.h.B.data[e]),B(233));i=Y(Cz(a.e.h)-1|0,e);BZ(a.p.by,i,0);if(e>=(Cz(a.e.h)-1|0))BZ(a.p.by,i,E5(a.e.h,i));else BZ(a.p.bJ,i+1|0,0);if(c)Go(a);else Cy(a,e,0,0);}b.m(h);return 1;}
function Zf(a,b){var c,d,e,f;a:{switch(b.bg){case 33:c=b.ck?H8(a,K3(a.bf,a.V),b.bw):Hc(a,2-U9(Du(a),a.V)|0,0,b.c5,b.bw);break a;case 34:c=!b.ck?Hc(a,U9(Du(a),a.V)-2|0,0,b.c5,b.bw):H8(a,((a.bf+Du(a)|0)/a.V|0)-1|0,b.bw);break a;case 35:if(!G6(a,b.bw)&&!Df(a,(Fb(a)).M,b.bw)){c=0;break a;}c=1;break a;case 36:if(!G6(a,b.bw)&&!Df(a,0,b.bw)){c=0;break a;}c=1;break a;case 37:c=b.ck;if(c&&b.c5){Ih(a);d=a.fh;e=d.c3;if(e<=0)d=null;else{f=d.ep.data;c=e-1|0;d.c3=c;d=f[c];}if(d===null)c=0;else{Cy(a,Io(d),K2(d),0);a.p=Qs(d.ln);c
=1;}break a;}c=S7(a,(-1),c,b.bw);break a;case 38:c=Hc(a,(-1),b.ck,b.c5,b.bw);break a;case 39:c=b.ck;if(c&&b.c5){d=a.fh;c=d.c3;if(c==(d.er-1|0))d=null;else{f=d.ep.data;c=c+1|0;d.c3=c;d=f[c];}if(d===null)c=0;else{Cy(a,Io(d),K2(d),0);a.p=Qs(d.ln);c=1;}break a;}c=S7(a,1,c,b.bw);break a;case 40:c=Hc(a,1,b.ck,b.c5,b.bw);break a;default:}c=0;}if(c&&b.bw)BZ(a.p.by,a.x,a.w);if(c)Sm(a,ED(a.x,a.w),OQ(a.e.h,a.x,a.w));return c;}
function Ih(a){var b,c,d,e,f,g,h;b=a.fh;c=b.c3;b=c<0?null:b.ep.data[c];if(b!==null&&a.x==Io(b)&&a.w==K2(b))return;d=a.fh;b=new ID;c=a.x;e=a.w;f=a.p;b.kF=ED(c,e);g=Qs(f);b.ln=g;g.cQ=0;e=d.c3;h=d.er;if(e==(h-1|0))Ma(d,b);else{c=e+1|0;while(c<h){Wc(d);c=c+1|0;}Ma(d,b);}d.c3=d.c3+1|0;}
function DJ(a){a.e.h.oh=IN(Ce(a));}
function T1(a){a.hQ=null;G8(a.hG);}
function ZI(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Kz(b)){case 3401:if(!Bo(b,B(256)))break a;c=2;break a;case 98723:if(!Bo(b,B(257)))break a;c=1;break a;case 3254818:if(!Bo(b,B(136)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(259);break b;case 2:b=B(260);break b;default:b=null;break b;}b=B(261);}}return b;}
var QT=F();
function AJB(a,b){return ACb(b);}
function QX(){C.call(this);this.so=null;}
function AG_(a,b){return ACi(a.so,b);}
function Jl(){var a=this;C.call(a);a.jq=null;a.nD=null;a.lO=null;}
function ATr(a,b,c){var d=new Jl();Ul(d,a,b,c);return d;}
function Ul(a,b,c,d){a.jq=b.bW;a.nD=c;a.lO=d;}
function AMk(a,b){var c,d;if(b.ck&&b.bg==79){c=a.nD;if(c!==null&&b.bw)UT(a.jq,c);else K8(a.jq,a.lO);d=1;}else d=0;return d;}
function QW(){C.call(this);this.lM=null;}
function ADH(a,b){QH(a.lM,b);}
function QV(){C.call(this);this.og=null;}
function AO$(a,b){return Mg(a.og,b);}
function QU(){C.call(this);this.s7=null;}
function AKT(a,b,c){return Kq(a.s7,b,c);}
function Q0(){C.call(this);this.mq=null;}
function AOJ(a){var b,c;b=a.mq.cJ;BI(b);c=new MP;c.s0=b;return c;}
function QZ(){C.call(this);this.q2=null;}
function AIR(a,b,c,d){var e,f;b=a.q2.cJ;e=C6((b.V*4|0)*d/150.0);f=C6(c);b.bf=D1(b,b.bf+e|0,EF(b));b.cj=D1(b,b.cj+f|0,F6(b));return 1;}
function QY(){C.call(this);this.rR=null;}
function ALU(a,b){b=b;return XI(a.rR,b);}
function B3(){var a=this;C.call(a);a.ba=0.0;a.bp=0.0;a.bh=0.0;a.bq=0.0;}
function ARg(a){var b=new B3();AAs(b,a);return b;}
function CD(a,b,c,d,e){a.ba=b;a.bp=c;a.bh=d;a.bq=e;}
function AAs(a,b){a.ba=b.ba;a.bp=b.bp;a.bh=b.bh;a.bq=b.bq;}
function Be(a,b){a.ba=b.ba;a.bp=b.bp;a.bh=b.bh;a.bq=b.bq;return a;}
function AOM(a,b){var c;if(a===b)return 1;a:{if(b!==null&&Cx(a)===Cx(b)){b=b;if(b.ba===a.ba&&b.bp===a.bp&&b.bh===a.bh&&b.bq===a.bq?1:0){c=1;break a;}}c=0;}return c;}
var Cw=F(0);
var AS1=null;var AS9=null;var ASX=null;var ASY=null;var AS2=null;var AS3=null;var AS4=null;var AS8=null;var ATd=null;var AS$=null;var AS_=null;var AS5=null;var ATa=null;var AS6=null;var ATb=null;function Dl(){Dl=Br(Cw);AKv();}
function AKv(){AS1=CF(187);AS9=CF(0);ASX=CF(43);ASY=Bs(B(262));AS2=CF(85);AS3=Cu(60,63,65);AS4=Cu(33,66,131);AS8=Cu(255,255,255);ATd=Cu(0,0,0);AS$=Cu(212,212,212);AS_=Cu(166,214,255);AS5=Bs(B(263));ATa=Bs(B(264));AS6=Bs(B(265));ATb=Bs(B(264));}
function H3(){var a=this;C.call(a);a.s=null;a.g=null;a.K=null;a.Q=null;}
function J8(){var a=new H3();Q3(a);return a;}
function Rv(a,b,c,d){var e=new H3();AFT(e,a,b,c,d);return e;}
function Q3(a){a.s=new Bl;a.g=new Bl;a.K=new B3;a.Q=new B3;}
function AFT(a,b,c,d,e){a.s=new Bl;a.g=new Bl;a.K=new B3;a.Q=new B3;FZ(a,b,c,d,e);}
function FZ(a,b,c,d,e){Bm(a.s,b,c);Bm(a.g,d,e);}
function RO(a){Bm(a.g,0,0);}
function Ia(a){var b;b=a.g;return Ba(b.a,b.b)?0:1;}
function DT(a,b){return G_(b,a.s,a.g);}
function Gt(a,b,c,d){var e;e=a.s;BJ(b,e.a+c|0,e.b+d|0,a.g,a.K);}
function S2(a,b,c,d,e,f){var g,h,i,j;g=a.s;d=g.a+d|0;e=g.b+e|0;g=a.g;h=a.Q;i=a.K;Ks(b,b.g4);Lt(b.g4,b.bx,d,e,g,b.dp);Td(b.g4,b.bx,c);g=b.g4;j=b.bx;HL(j,g.sO,h);HL(j,g.sM,i);c=g.oM;j.uniform2f(c,f,0.0);Ke(b);}
function ABo(){H3.call(this);this.bM=null;}
function Kc(){var a=new ABo();AD3(a);return a;}
function EZ(a,b,c,d){var e=new ABo();AI9(e,a,b,c,d);return e;}
function AD3(a){Q3(a);a.bM=new B3;}
function AI9(a,b,c,d,e){Q3(a);a.bM=new B3;FZ(a,b,c,d,e);}
function GG(a){var b,c;b=a.g;c=a.bM;Bm(b,c.bh-c.ba|0,c.bq-c.bp|0);}
function F5(a,b){Hh(a,0,0,Ck(b),C0(b));}
function Hh(a,b,c,d,e){CD(a.bM,b,c,d,e);}
function CK(a,b,c,d,e,f){var g;g=a.s;Hx(b,g.a+d|0,g.b+e|0,a.g,a.bM,c,a.K,a.Q,f);}
function FW(a,b){Be(a.K,b);}
function Ie(a,b,c){Be(a.K,b);Be(a.Q,c);}
function He(a,b){Be(a.Q,b);}
function Zm(){var a=this;C.call(a);a.du=null;a.kA=0.0;a.gv=0.0;a.gb=0;}
function AJ_(){var a=new Zm();AOt(a);return a;}
function AOt(a){var b;b=Rv(0,0,2,20);a.du=b;a.kA=0.5;a.gv=0.0;Hf(187,187,187,255,b.K);}
function Ru(a){return a.du.g.b;}
function Pm(a){return a.du.g.a;}
function RJ(a,b){var c,d;a:{c=a.gb;if(b>a.gv)while(true){d=a.gv+a.kA;a.gv=d;a.gb=a.gb?0:1;if(b>d)continue;else break a;}}return a.gb==c?0:1;}
function OV(a,b,c){Bm(a.du.s,b,c);}
function Rc(a,b){a.gv=b+a.kA*1.25;a.gb=1;}
function T0(a,b,c){if(a.gb)Gt(a.du,b,c.a,c.b);}
function SH(){C.call(this);this.eU=null;}
function ALf(a,b){var c,d,e,f,g,h,i;c=a.eU;d=c.je;if(d!==null){e=c.c2.s;f=e.a;g=b.o;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.je=g;}d=b.o;f=d.a;c=c.f$;e=c.g;h=f-e.a|0;f=d.b-e.b|0;Bm(c.s,h,f);c=a.eU;d=c.bc.bW;b=b.o;f=0;a:{while(true){i=c.gG.data;if(f>=i.length)break;if(DT(i[f],b)){b=c.th.data[f];break a;}f=f+1|0;}b=null;}Gd(d,b);return 1;}
function AMK(a,b,c,d){if(!c&&d==2){b=a.eU;VC(b,b.c2);}return 1;}
function AJg(a,b,c){var d,e;d=Bw();e=new M;O(e);S(G(e,B(266)),c);Bu(d,N(e));if(!c){d=b.o;b=a.eU;b.je=!DT(b.c2,d)?null:d;OV(a.eU.gU,d.a,d.b);b=a.eU;Rc(b.gU,IN(b.bc.bW));}return 1;}
function AFK(a,b,c){var d;b=Bw();d=new M;O(d);S(G(d,B(267)),c);Bu(b,N(d));return 1;}
function Qx(){C.call(this);this.s9=null;}
function AK_(a,b){return N7(a.s9,b);}
function Qw(){C.call(this);this.nv=null;}
function ANH(a,b){return N7(a.nv,b);}
function QA(){C.call(this);this.u_=null;}
function AN5(a,b,c){var d,e;Bu(Bw(),B(268));d=!c?B(269):B(28);e=new M;O(e);G(G(G(e,B(270)),d),B(271));U8(b,N(e));return 1;}
function Qy(){C.call(this);this.tu=null;}
function AN4(a){Bu(Bw(),B(272));}
function Qv(){C.call(this);this.uA=null;}
function AJG(a,b){Bu(Bw(),B(273));return 1;}
function Qu(){C.call(this);this.rC=null;}
function AHv(a,b,c,d){var e,f,g;b=a.rC;e=( -d|0)/10|0;b=b.c2;f=b.g;f.a=f.a+e|0;f.b=f.b+e|0;b=b.s;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Id(){var a=this;B3.call(a);a.fV=0;a.fY=0;a.fW=0;a.fX=0;}
function CF(a){var b=new Id();AOC(b,a);return b;}
function Cu(a,b,c){var d=new Id();AFC(d,a,b,c);return d;}
function Bs(a){var b=new Id();AMI(b,a);return b;}
function ATs(a,b,c,d){var e=new Id();PB(e,a,b,c,d);return e;}
function CT(a){var b=new Id();NR(b,a);return b;}
function AOC(a,b){PB(a,b,b,b,255);}
function AFC(a,b,c,d){PB(a,b,c,d,255);}
function AMI(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.fV=Ii(L(b,1))*17|0;a.fY=Ii(L(b,2))*17|0;a.fW=Ii(L(b,3))*17|0;a.fX=255;}else{a.fV=KQ(L(b,1),L(b,2));a.fY=KQ(L(b,3),L(b,4));a.fW=KQ(L(b,5),L(b,6));a.fX=I(b)!=9?255:KQ(L(b,7),L(b,8));}Hf(a.fV,a.fY,a.fW,a.fX,a);return;}}
function PB(a,b,c,d,e){a.fV=b;a.fY=c;a.fW=d;a.fX=e;Hf(b,c,d,e,a);}
function NR(a,b){a.fV=b.fV;a.fY=b.fY;a.fW=b.fW;a.fX=b.fX;Be(a,b);}
function Ii(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function KQ(b,c){return (16*Ii(b)|0)+Ii(c)|0;}
function TP(){var a=this;C.call(a);a.le=null;a.jB=null;}
function Ya(){var a=this;C.call(a);a.eY=null;a.b8=null;a.dX=null;a.f0=null;a.kN=null;a.bY=null;a.fp=null;a.cE=0;a.ev=0;a.k6=0;a.fy=0;a.fr=0;a.iO=null;a.jd=null;a.rq=null;}
function XF(){var a=new Ya();AN6(a);return a;}
function AN6(a){a.b8=J8();a.dX=new Bl;a.f0=new Bl;a.bY=ATt;a.fy=(-1);}
function J$(a,b){Sw(a);a.bY=b;}
function Hz(a,b){a.eY=b;Sw(a);}
function HH(a,b){var c,d,e,f;a.kN=b.g3;c=b.X.fs;Be(a.b8.K,c);c=b.iE;Be(a.b8.Q,c);d=0;while(true){e=a.bY.data;if(d>=e.length)break;f=e[d];c=b.X;f.iU=c;Ie(f.c$,c.iZ,c.fs);if(a.fy==d)IP(a.bY.data[d],1);d=d+1|0;}}
function Sh(a){a.fp=CJ(a.fp,null);Bm(a.dX,0,0);a.bY=ATt;a.fy=(-1);RO(a.b8);}
function GA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=K$(b);d=b.bF;BI(a.eY);CB(c,a.eY);e=Ji(a.eY,1.25);f=0;a.cE=Cb(2.0,d);a.ev=Cb(3.0,d);a.k6=Cb(12.0,d);g=0;h=a.bY.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=PN(c,l.jU);n=a.k6;n=(n+m|0)+n|0;f=Bb(f,n);b=l.c$;l=b.s;l.a=g;l.b=0;l=b.g;l.a=n;l.b=e;CD(b.bM,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.dX;b.a=g;b.b=e;b=a.b8.g;n=a.fr;if(!n){m=a.cE;m=(g+m|0)+Ba(m,a.bY.data.length)|0;}else m=(f+(a.cE*2|0)|0)+(a.ev*2|0)|0;b.a=m;if(!n)e=e+(a.cE*2|0)|0;else{n=a.cE;e=(Ba(e+n|0,a.bY.data.length)
+n|0)+(a.ev*2|0)|0;}b.b=e;}
function Jb(a,b,c){var d,e,f,g,h,i,j;Bm(a.b8.s,b,c);d=a.cE+a.ev|0;e=a.bY.data;f=e.length;g=0;h=d;while(g<f){i=e[g].c$;j=i.s;j.a=b+d|0;j.b=c+h|0;if(!a.fr){if(!i.g.a)ACs();d=d+(i.g.a+a.cE|0)|0;}else{if(!i.g.b)ACs();h=h+(i.g.b+a.cE|0)|0;}g=g+1|0;}}
function ACs(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function DZ(a){var b,c;b=a.dX;if(b.a&&b.b)return a.b8.g;c=new Bn;Bj(c,B(274));J(c);}
function Sw(a){Bm(a.dX,0,0);}
function IX(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=b.c1;if(!a.bY.data.length)return;a:{if(a.fp!==null){d=a.dX;if(Ba(d.a,d.b))break a;}d=a.dX;if(!Ba(d.a,d.b))GA(a,b);d=a.dX;e=d.a;f=d.b;if(!Ba(e,f))return;d=CI(c,e,f);CB(d,a.eY);g=Ji(a.eY,0.125);h=a.eY;i=h.dd;g=g+i-(i+h.dY)/16.0;j=a.bY.data;f=j.length;k=0;while(k<f){l=j[k];Cd(d,l.jU,l.c$.bM.ba+a.k6,g);k=k+1|0;}h=CJ(a.fp,CR(c));a.fp=h;CL(h,d);Fy(d);}if(!Ia(a.b8)){d=a.b8;UV(c,d.g,d.s,d.Q,a.cE,a.f0);d=a.b8;Yc(c,d.g,d.s,d.K,a.cE,a.f0);if(a.fr){d=a.b8;TN(c,d.g,d.s,0,0,JJ(a.kN,
b.bF),a.kN.iX,a.f0);}}j=a.bY.data;k=j.length;m=0;while(m<k){CK(j[m].c$,c,a.fp,0,0,0.0);m=m+1|0;}b:{if(a.fr){j=a.bY.data;k=j.length;m=0;while(true){if(m>=k)break b;h=j[m].c$;l=a.f0;e=(a.b8.g.a-(a.cE*2|0)|0)-(a.ev*2|0)|0;b=h.g;e=e-b.a|0;l.a=e;l.b=b.b;if(e>0){d=h.s;BJ(c,d.a+b.a|0,d.b,l,h.Q);}m=m+1|0;}}}}
function Jw(a,b,c){var d,e,f,g,h,i;d=DT(a.b8,b);e=!d?(-1):TV(a,b);f=a.fy;if(f!=e){if(f>=0){g=a.bY.data[f];IP(g,0);if(a.rq!==null){f=a.fy;h=Bw();g=Cs(g);i=new M;O(i);G(G(S(G(i,B(275)),f),B(276)),g);Bu(h,N(i));}}if(e>=0){h=a.bY.data[e];IP(h,1);g=a.jd;if(g!==null)g.mX(b,e,h);}a.fy=e;}return d&&GV(c)?1:0;}
function Jo(a,b,c,d){var e,f;if(d==1){e=TV(a,b);if(e>=0){f=a.bY.data[e];if(!LP(f))f.s1.q();}}return 1;}
function TV(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bY.data;if(c>=d.length)return (-1);e=d[c].c$;if(DT(e,b))return c;if(a.fr){f=e.s;g=f.a;e=e.g;h=e.a;g=g+h|0;i=f.b;f=a.f0;f.a=(a.b8.g.a-(a.cE*2|0)|0)-h|0;f.b=e.b;if(NF(b,g,i,f))break;}c=c+1|0;}return c;}
function RB(a){a.fr=1;}
function Xn(){var a=this;C.call(a);a.cw=null;a.b7=null;a.f3=null;a.iB=null;a.ia=null;a.h6=null;}
function W_(a){var b=new Xn();AEy(b,a);return b;}
function AEy(a,b){a.b7=Cj();a.h6=ATu;a.cw=b;Z(b.dx,a);}
function LG(a,b){a.ia=b;b=BR(a.b7);while(B1(b)){HH(BV(b),a.ia);}}
function Hk(a,b,c,d){var e,f;e=a.cw;f=e.c7;if(Ba(f.a,f.b)&&e.bF!==0.0){if(a.f3!==null&&!DO(a)){a.h6=d;a.iB=HV(a.cw,a.f3);e=Sr(a,b,c,null);b=new RR;b.lN=a;e.iO=b;Lu(a.cw,a);return;}b=new BB;U(b);J(b);}c=new DK;Bj(c,B(277));J(c);}
function Dv(a){if(DO(a)){PD(a.cw,a);Sf(a,null);a.h6.q();a.h6=ATu;}}
function Sr(a,b,c,d){var e,f,g,h;e=XF();RB(e);J$(e,c.ga());HH(e,a.ia);Hz(e,a.iB);GA(e,a.cw);if(d===null)f=b.a;else{g=b.a;f=a.cw.c7.a<((g+(DZ(d)).a|0)+(DZ(e)).a|0)?g-(DZ(e)).a|0:(g+(DZ(d)).a|0)-d.ev|0;}h=b.b;b=a.cw.c7;Jb(e,Bb(0,Y(f,b.a-(DZ(e)).a|0)),Bb(0,Y(h,b.b-(DZ(e)).b|0)));b=new Od;b.lS=a;b.lT=e;e.jd=b;BW(a.b7,e);return e;}
function AEK(a,b,c){var d,e;a.iB=HV(a.cw,a.f3);d=BR(a.b7);while(B1(d)){e=BV(d);Hz(e,a.iB);GA(e,a.cw);}}
function KF(a){var b,c;if(D2(a.b7))return;Ct(a.cw.c1,1);b=0;while(true){c=a.b7;if(b>=c.j)break;IX(Bt(c,b),a.cw);b=b+1|0;}}
function JK(a,b){var c,d;c=0;d=a.b7.j-1|0;a:{while(d>=0){c=Jw(Bt(a.b7,d),b.o,a.cw.e0);if(c)break a;d=d+(-1)|0;}}return c;}
function II(a,b,c,d){var e,f;e=0;f=a.b7.j-1|0;a:{while(f>=0){e=Jo(Bt(a.b7,f),b.o,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function I9(a,b,c){var d,e,f,g;d=0;e=a.b7.j-1|0;a:{while(e>=0){f=Bt(a.b7,e);g=b.o;d=DT(f.b8,g);if(!d&&!Ia(f.b8)){f=f.iO;if(f!==null)f.q();}if(d)break a;e=e+(-1)|0;}}return d;}
function ADj(a,b){var c;if(!DO(a))return 0;a:{switch(b.bg){case 27:Dv(a);c=1;break a;default:}c=0;}return c;}
function Sf(a,b){var c,d;c=a.b7.j-1|0;a:{while(true){if(c<0)break a;d=Bt(a.b7,c);if(b===d)break;Eb(a.b7,c);Sh(d);c=c+(-1)|0;}}}
function DO(a){return a.b7.j<=0?0:1;}
function R4(){C.call(this);this.rJ=null;}
function ALE(a,b){var c;c=a.rJ;if(b.bg==32)Sh(c.cz);return 0;}
function R7(){C.call(this);this.qz=null;}
function ACY(a,b){var c,d,e,f;b=b;c=a.qz;Bu(Bw(),B(278));if(!DO(c.dM)){d=c.dM;b=b.o;e=MR(4);f=new T_;f.v7=c;Hk(d,b,e,f);}return 1;}
function AB_(){var a=this;C.call(a);a.h1=null;a.hq=0.0;}
function SF(a,b){var c=new AB_();ACO(c,a,b);return c;}
function ACO(a,b,c){a.h1=b;a.hq=c;}
function AO7(a,b){if(a===b)return 1;if(b!==null&&Cx(a)===Cx(b)){b=b;return a.hq===b.hq&&D9(a.h1,b.h1)?1:0;}return 0;}
function Kg(){var a=this;C.call(a);a.hA=null;a.rt=null;a.sX=null;a.iE=null;a.X=null;a.g3=null;}
function ATv(a,b,c,d,e,f){var g=new Kg();RK(g,a,b,c,d,e,f);return g;}
function Gm(){var b,c,d,e,f,g;b=new Kg;c=new EP;Dl();d=ASY;e=AS2;EC();F2(c,d,e,d,ATj,ATf);f=new EP;d=ASY;e=AS2;g=ATj;F2(f,d,e,d,g,g);RK(b,c,f,W9(),Bs(B(279)),W9(),AEU(1,0.125));return b;}
function RK(a,b,c,d,e,f,g){a.hA=b;a.rt=c;a.sX=d;a.iE=e;a.X=f;a.g3=g;}
var R5=F();
function AHf(a){Bu(Bw(),B(280));}
var R3=F();
function AM0(a){Bu(Bw(),B(281));}
function Dw(){var a=this;C.call(a);a.c$=null;a.s1=null;a.iU=null;a.jN=null;a.jU=null;}
function ABQ(a,b,c){var d=new Dw();Qk(d,a,b,c);return d;}
function AQM(a,b,c,d){var e=new Dw();Zv(e,a,b,c,d);return e;}
function Qk(a,b,c,d){Zv(a,b,c,d,null);}
function Zv(a,b,c,d,e){var f;f=Kc();a.c$=f;a.jU=c;a.iU=d;a.s1=b;Be(f.K,d.iZ);Be(a.c$.Q,d.fs);a.jN=e;}
function LP(a){return a.jN===null?0:1;}
function IP(a,b){Be(a.c$.Q,!b?a.iU.fs:a.iU.r8);}
function NL(){C.call(this);this.l$=null;}
function AG$(a,b,c){var d;d=a.l$;if(b===0.0)SX(d,new Bl);}
function ZP(){var a=this;C.call(a);a.b2=null;a.d4=null;a.nj=null;a.hz=null;a.it=null;}
function AMT(a){var b=new ZP();ALV(b,a);return b;}
function ALV(a,b){var c;c=new J1;c.bX=J8();c.eq=new Bl;c.f7=new Bl;c.bi=ATw;c.bZ=(-1);c.cU=0;c.c0=0;c.eL=0;c.lz=0;a.b2=c;a.hz=ATu;a.d4=b;Z(b.dx,a);b=a.b2;c=new UH;c.s8=a;b.sH=c;}
function RH(a,b){var c;a.nj=b;c=a.b2;c.eu=b;Uc(c);}
function WG(a,b){var c,d,e,f,g,h;a.it=b;c=a.b2;c.lH=b.g3;d=b.hA.bD;Be(c.bX.K,d);c.uZ=d;d=b.iE;Be(c.bX.Q,d);e=0;while(true){f=c.bi.data;if(e>=f.length)break;g=f[e];h=b.hA;g.cr=h;Ie(g.bU,h.jJ,h.bD);Ie(g.ch,h.lk,h.bD);Ie(g.cA,h.ly,h.bD);Be(g.dH.Q,h.bD);Be(g.dw.Q,h.bD);Be(g.d2.Q,h.bD);if(c.bZ==e)F7(c.bi.data[e],1);e=e+1|0;}}
function OP(a,b,c,d){var e,f,g,h;if(a.nj!==null&&!Fw(a)){e=a.b2;Uc(e);e.bi=c;Lj(a.b2,a.d4);e=a.b2;f=b.a;g=b.b;b=a.d4.c7;h=UO(e);V$(e,Bb(0,Y(f,b.a-h.a|0)),Bb(0,Y(g,b.b-h.b|0)));Lu(a.d4,a);a.hz=d;return;}b=new BB;U(b);J(b);}
function F0(a){var b;if(!Fw(a))return 0;PD(a.d4,a);a.hz.q();a.hz=ATu;b=a.b2;b.ei=CJ(b.ei,null);Bm(b.eq,0,0);b.bi=ATw;b.bZ=(-1);b.cU=0;b.c0=0;b.eL=0;RO(b.bX);return 1;}
function AL$(a,b,c){Lj(a.b2,a.d4);}
function Pd(a){AAB(a.b2,a.d4);}
function PO(a,b){var c,d,e,f,g;c=a.b2;d=a.d4.e0;e=DT(c.bX,b);f=!e?(-1):RQ(c,b);if(c.bZ!=f&&f>=0){F7(c.bi.data[f],1);g=c.bZ;if(g>=0)F7(c.bi.data[g],0);c.bZ=f;}return e&&GV(d)?1:0;}
function Pq(a,b,c,d){var e;e=a.b2;if(!DT(e.bX,b)){if(!Ia(e.bX)){b=e.sH;if(b!==null)F0(b.s8);}c=0;}else{if(d==1){c=RQ(e,b);if(c>=0)e.bi.data[c].kp.q();}c=1;}return c;}
function Fw(a){return LT(a.b2)?0:1;}
function Wt(a,b){return b===null?B(31):b.C0();}
function ZZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=d.e;BI(a.it);f=AKS();g=0;h=c!==null?c.data.length:b.j;i=0;a:{while(true){if(i>=h)break a;if(c===null){j=(Bt(b,i)).bB;k=QJ(Ev(B0(e.h,j)));l=Wt(a,e.fH);}else{m=c.data;j=m[i].jz.kd;k=!D9(e.fH,m[i].hI)?B(31):QJ(Ev(B0(e.h,j)));l=Wt(a,m[i].hI);}if(I(k)>43){n=B7(k,0,40);k=new M;O(k);G(G(k,n),B(282));k=N(k);}if(I(l)>43){n=B7(l,0,40);o=new M;O(o);G(G(o,n),B(282));l=N(o);}n=Dc(j+1|0);g=g+1|0;if(g>20)break;if(c!==null){m=c.data;o=null;p=m[i];}else{p=null;o=Bt(b,i);}if
(c!==null){q=new SD;q.ps=d;q.pt=p;}else{q=new SB;q.sh=d;q.si=o;}p=new WM;p.mK=a;p.mJ=q;KT(f,l,n,k,a.it.hA,p);i=i+1|0;}r=h-(g-1|0)|0;b=new M;O(b);G(S(G(b,B(283)),r),B(284));KT(f,N(b),B(31),B(31),a.it.rt,new SC);}return PC(f);}
function AEf(a,b){var c,d;if(!Fw(a))return 0;a:{c=b.bg;switch(c){case 13:b=a.b2;d=b.bZ;if(d==(-1))c=0;else{b.bi.data[d].kp.q();c=1;}break a;case 27:break;case 37:case 38:case 39:case 40:b=a.b2;d=b.bZ;if(d>=0)F7(b.bi.data[d],0);b:{c:{switch(c){case 38:c=b.bi.data.length;c=((c+b.bZ|0)-1|0)%c|0;b.bZ=c;if(c!=20)break b;b.bZ=19;break b;case 39:b.bZ=Y(b.bi.data.length,20)-1|0;break b;case 40:break c;default:}b.bZ=0;break b;}c=b.bZ;if(c==19)b.bZ=0;else b.bZ=(c+1|0)%b.bi.data.length|0;}F7(b.bi.data[b.bZ],1);c=1;break a;default:c
=0;break a;}c=F0(a);}return c;}
function NM(){C.call(this);this.oX=null;}
function ANg(a,b){var c,d;c=a.oX;if(b.bg!=32)d=0;else{F0(c.dU);d=1;}return d;}
function NN(){C.call(this);this.rX=null;}
function AJX(a,b){var c;b=b;c=a.rX;if(!Fw(c.dU))SX(c,b.o);return 1;}
var U5=F(0);
var G7=F(0);
var Ey=F();
function D2(a){return a.j?0:1;}
function Hl(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=Tx(HG(Cx(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BR(a);while(B1(f)){g=b.data;h=e+1|0;g[e]=BV(f);e=h;}return b;}
var Mb=F(0);
function FP(){Ey.call(this);this.cq=0;}
function BR(a){var b;b=new MM;b.go=a;b.lt=a.cq;b.hZ=a.mM();b.fP=(-1);return b;}
function Pn(a,b){var c,d;c=a.j;d=0;while(true){if(d>=c)return (-1);if(D9(b,Bt(a,d)))break;d=d+1|0;}return d;}
var HR=F(0);
function M5(){var a=this;FP.call(a);a.b_=null;a.j=0;}
function Cj(){var a=new M5();AGy(a);return a;}
function ATx(a){var b=new M5();L5(b,a);return b;}
function AGy(a){L5(a,10);}
function L5(a,b){a.b_=R(C,b);}
function IE(a,b){var c,d;c=a.b_.data.length;if(c<b){d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.b_=C$(a.b_,d);}}
function Bt(a,b){Iu(a,b);return a.b_.data[b];}
function AKw(a){return a.j;}
function BW(a,b){var c,d;IE(a,a.j+1|0);c=a.b_.data;d=a.j;a.j=d+1|0;c[d]=b;a.cq=a.cq+1|0;return 1;}
function Qh(a,b,c){var d,e,f;Os(a,b);IE(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.b_.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.b_.data[b]=c;a.j=d+1|0;a.cq=a.cq+1|0;}
function Eb(a,b){var c,d,e,f;Iu(a,b);c=a.b_.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cq=a.cq+1|0;return d;}
function UR(a,b){var c;c=Pn(a,b);if(c<0)return 0;Eb(a,c);return 1;}
function G8(a){var b,c,d,e,f,g;b=a.b_;c=0;d=a.j;e=null;if(c>d){e=new BB;U(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.j=0;a.cq=a.cq+1|0;}
function Iu(a,b){var c;if(b>=0&&b<a.j)return;c=new Bx;U(c);J(c);}
function Os(a,b){var c;if(b>=0&&b<=a.j)return;c=new Bx;U(c);J(c);}
function Jh(a,b){var c;c=0;while(c<a.j){b.m(a.b_.data[c]);c=c+1|0;}}
function Nk(a,b){var c,d,e,f,g,h,i;c=a.b_;d=a.j;if(b===null)b=ARY;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}YC(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cq=a.cq+1|0;}
function ABY(){var a=this;C.call(a);a.k2=0;a.k4=0;}
function AM5(){var a=new ABY();ANP(a);return a;}
function ANP(a){var b,c;b=ABJ(Eq((AAO())));c=Eq((AAO()))^(-559038737);a.k2=b;a.k4=c;c=0;while(c<19){QB(a);c=c+1|0;}}
function QB(a){var b,c;b=a.k2;c=a.k4;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.k2=c;a.k4=b;return b;}
function ABJ(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function HN(a,b){return 5.960464477539063E-8*(QB(a)&16777215)*b|0;}
function SZ(){C.call(this);this.l1=null;}
function AJ7(a,b,c){var d;d=a.l1;if(b===0.0)JH(d,100);}
function S0(){C.call(this);this.oU=null;}
function AC3(a,b){var c,d,e;c=a.oU;d=b.bg;if(d==32){c.iI=c.iI?0:1;e=1;}else if(d==13){JH(c,1);e=1;}else if(d!=8)e=0;else{Vv(c,1);e=1;}return e;}
var MF=F(0);
function ABk(){var a=this;C.call(a);a.fq=null;a.fL=0;a.h7=0;a.fK=0;}
function AOe(a){var b=new ABk();AGx(b,a);return b;}
function AGx(a,b){a.fq=Cj();a.fK=0;a.h7=2048;a.fL=b;}
function GY(a,b,c){var d,e,f,g,h,i,j;d=c.pk(b);e=a.h7;if(d>e){c=new Bn;f=new M;O(f);BC(S(G(S(G(f,B(285)),d),B(286)),e),41);Bj(c,N(f));J(c);}if(!a.fL){b=new BB;Bj(b,B(287));J(b);}a:{b=new B3;if(d){b:{c=a.fq;if(c.j>0){c=BR(c);g=d;while(true){if(!B1(c))break b;f=BV(c);if(f.bh>=g)break;}CD(b,f.ba,f.bp,g,a.fL);f.ba=f.ba+g;h=f.bh-g;f.bh=h;if(h===0.0)UR(a.fq,f);break a;}}g=a.fK;i=d;CD(b,0.0,g,i,a.fL);c=a.fq;f=new B3;h=a.fK;g=a.h7-d|0;j=a.fL;f.ba=i;f.bp=h;f.bh=g;f.bq=j;BW(c,f);a.fK=a.fK+a.fL|0;}}return b;}
function Wj(a){return Cn(a.h7,a.fK);}
function ZM(){var a=this;C.call(a);a.vd=20;a.fC=null;a.eN=null;a.hY=null;a.j3=0;a.hX=0;a.ix=0.0;a.cs=null;a.ek=null;a.e1=null;a.fd=0;}
function AJn(){var a=new ZM();ANX(a);return a;}
function ANX(a){a.vd=20;a.fC=new Bl;a.eN=new Bl;a.cs=Cj();}
function Wx(a,b){var c,d,e,f,g;c=a.fd;if(b==c)return;d=a.cs.j;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bb(0,(c-1|0)/20|0);f=Bb(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Rm(a,b);a.fd=b;}else{if(a.fd>=b)while(true){if(g<f)break a;a.fd=RP(Bt(a.cs,g%d|0),a.ek,a.e1,a.fd,b,e,a.ix);g=g+(-1)|0;}while(f<=g){a.fd=RP(Bt(a.cs,f%d|0),a.ek,a.e1,a.fd,b,e,a.ix);f=f+1|0;}}}}
function S6(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BR(a.cs);while(B1(f)){g=BV(f);h=a.fC;i=Ba(a.cs.j,a.hX);j=g.ec.b;k=((g.io.b-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BH(l,c);if(m<=0){Bm(g.f2,Ck(g.bT),j);CD(g.ft,0.0,0.0,Ck(g.bT),j);In(g,e,k,h,d.iz,d.g8);}else{if(m>0&&k<c){m=Bb(c-k|0,0);Bm(g.f2,Ck(g.bT),m);CD(g.ft,0.0,0.0,Ck(g.bT),m);In(g,e,k,h,d.iz,d.g8);}if(l>i){m=Y(l%i|0,c);Bm(g.f2,Ck(g.bT),m);CD(g.ft,0.0,b%C0(g.bT)|0,Ck(g.bT),m);In(g,e,0,h,d.iz,d.g8);}}}}
function Je(a,b,c,d){var e,f,g,h,i,j;e=a.cs.j;while(true){f=a.cs.j;g=Ba(f,a.hX);if(g>(d+a.j3|0))break;h=Cn(0,g);i=new Mx;g=a.eN.a;f=a.j3;j=a.hY;i.f2=new Bl;i.ft=new B3;i.io=h;i.dq=20;i.d_=f;i.ec=Cn(g,20*f|0);i.fw=Sc(j,f);if(i.bT===null)i.bT=CR(b);BW(a.cs,i);}if(f==e)return;Rm(a,c);}
function Rm(a,b){var c,d,e,f,g,h,i,j;c=a.cs;d=c.j;e=Ba((b/(d*20|0)|0)+1|0,d)*20|0;c=BR(c);while(B1(c)){f=BV(c);g=a.ek;h=a.ix;Ej(g);i=0;while(true){j=f.dq;if(i>=j)break;j=e-Ba(d,j)|0;if(j<b)j=e;e=j+1|0;FR(f,g,Dc(e),Ba(f.d_,i)+f.fw|0,h);i=i+1|0;}CL(f.bT,g);}}
function Sv(a,b,c,d){var e;a.hY=b;a.j3=c;e=c*20|0;a.hX=e;b=CJ(a.ek,CI(d,a.eN.a,e));a.ek=b;CB(b,a.hY);Q1(a.ek,2);b=CJ(a.e1,CI(d,a.eN.a,c));a.e1=b;CB(b,a.hY);Q1(a.e1,2);}
function Uj(a,b,c,d,e){Dt(a.fC,b);Bm(a.eN,c,d);a.ix=e;}
var AA_=F(0);
function ABt(){return AJk(Cu(96,99,102),Cu(49,51,53),Cu(164,163,163),CF(50));}
function Ve(){var a=this;C.call(a);a.iC=null;a.pA=null;a.h9=null;}
function AJY(a,b,c){if(!c){b=E0(a.h9.gt,b.o,a.pA,1);a.iC=b;if(b!==null)return 1;}return 1;}
function ALr(a,b,c){if(a.iC!==null)a.iC=null;return 1;}
function AF2(a,b){var c;c=a.iC;if(c!==null){c.m(b);return 1;}c=a.h9;return E$(c.gt,b.o,c.ro);}
function RE(){C.call(this);this.m6=null;}
function AFm(a,b,c,d){var e,f;b=a.m6;e=(LX(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dE=Y(Bb(0,b.dE+Ba(e,f)|0),OW(b));return 1;}
var Tn=F(0);
function GV(a){return JT(a,null);}
function Tt(b){var c;c=new M3;c.mV=b;return c;}
function ZL(){var a=this;C.call(a);a.eG=null;a.cH=null;a.dy=null;a.d7=null;a.lU=null;a.jb=null;}
function G4(){var a=new ZL();AFY(a);return a;}
function AFY(a){var b;a.eG=new Bl;a.cH=new Bl;a.dy=new Bl;a.d7=new Bl;b=new B3;a.lU=b;a.jb=new B3;EC();Be(b,ATi);Be(a.jb,ATy);}
function OT(a){var b;b=a.cH;return !Ba(b.a,b.b)?0:1;}
function Ib(a,b){return G_(b,a.dy,a.d7);}
function E0(a,b,c,d){var e,f,g,h,i;e=Ib(a,b);f=G_(b,a.eG,a.cH);if(!e&&!f)return null;if(!f){if(!d)c.m(Wi(a,b.a-a.dy.a|0));else c.m(NJ(a,b.b-a.dy.b|0));}g=!d?a.eG.a+(a.cH.a/2|0)|0:a.eG.b+(a.cH.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new M2;b.rv=a;b.rx=c;b.rw=i;}else{b=new M0;b.oH=a;b.oG=c;b.oI=i;}return b;}
function AB9(b,c){var d;d=new SP;d.pu=b;d.lP=c;return d;}
function NJ(a,b){var c,d,e;c=a.d7.b;d=a.cH.b;e=c-d|0;return AB9(Y(Bb(0,b-(d/2|0)|0),e),e);}
function Wi(a,b){var c,d,e;c=a.d7.a;d=a.cH.a;e=c-d|0;return AB9(Y(Bb(0,b-(d/2|0)|0),e),e);}
function HY(a,b,c,d,e,f,g){M6(a,b,c,d,e,f,g,1);}
function LK(a,b,c,d,e,f,g){M6(a,b,c,d,e,f,g,0);}
function M6(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bm(a.d7,0,0);Bm(a.cH,0,0);}else{i=g*3|0;i=Bb(ON(d,d,e),i);e=e-d|0;j=d-i|0;j=j?ON(b,j,e):0;if(!h){k=a.eG;k.a=j+c|0;k.b=f-g|0;l=a.cH;l.a=i;l.b=g;l=a.dy;l.a=c;l.b=k.b;l=a.d7;l.a=d;l.b=g;}else{l=a.eG;l.a=f-g|0;l.b=j+c|0;k=a.cH;k.a=g;k.b=i;k=a.dy;k.a=l.a;k.b=c;l=a.d7;l.a=g;l.b=d;}}}
function O4(a,b){FG(a,b);FY(a,b);}
function FG(a,b){var c;c=a.dy;BJ(b,c.a,c.b,a.d7,a.lU);}
function FY(a,b){var c,d;c=a.cH;c.a=c.a-2|0;c.b=c.b-2|0;d=a.eG;BJ(b,d.a+1|0,d.b+1|0,c,a.jb);b=a.cH;b.a=b.a+2|0;b.b=b.b+2|0;}
function E$(a,b,c){return Ib(a,b)&&GV(c)?1:0;}
function O$(){C.call(this);this.sy=null;}
function AL_(a,b){var c,d,e;c=a.sy;if(b.ck&&b.bg==79){if(!b.bw){b=c.bc.bW;d=new Q$;d.sE=c;K8(b,d);}else{b=c.bc.bW;d=new Q9;d.uV=c;UT(b,d);}e=1;}else e=0;return e;}
function Qc(){C.call(this);this.t5=null;}
function ADq(a,b){var c,d,e,f;c=b.data;b=Bw();d=Cs(c[0]);e=new M;O(e);G(G(e,B(202)),d);Bu(b,N(e));b=Bw();f=c[1];d=new M;O(d);G(G(d,B(288)),f);Bu(b,N(d));}
function Qb(){C.call(this);this.vT=null;}
function AON(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bw();e=Cs(c[0]);f=new M;O(f);G(G(f,B(202)),e);Bu(d,N(f));g=Fr(QM(b,1));b=Bw();d=Cs(c[1]);if(g===null)c=B(29);else{c=new M;O(c);BX(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BX(c,B(44));BC(c,i[h]);h=h+1|0;}BX(c,B(45));c=N(c);}e=new M;O(e);G(G(G(G(e,B(289)),d),B(290)),c);Bu(b,N(e));}
function Qa(){C.call(this);this.nt=null;}
function AFI(a,b){Tm(a.nt,b);}
function P_(){C.call(this);this.tN=null;}
function AKi(a,b){var c,d,e,f,g;c=b.data;d=Bw();e=Cs(c[0]);f=new M;O(f);G(G(f,B(202)),e);Bu(d,N(f));g=Ei(QM(b,1));b=Bw();d=Cs(c[1]);c=AAH(g);e=new M;O(e);G(G(G(G(e,B(291)),d),B(292)),c);Bu(b,N(e));}
function P9(){C.call(this);this.uX=null;}
function AJx(a,b){var c,d;c=KY();b=Cs(b);d=new M;O(d);G(G(d,B(293)),b);Bu(c,N(d));b=new E2;U(b);J(b);}
function P8(){C.call(this);this.oS=null;}
function ALo(a,b){var c,d,e,f;c=a.oS;d=c.bc.bW;e=new Ni;e.pR=c;f=R(C,1);f.data[0]=b;CY(d,e,B(294),f);}
function SG(){C.call(this);this.kv=null;}
function ANi(a,b){var c,d,e,f,g,h;c=a.kv;d=c.kT;if(d!==null){e=c.ds.s;f=e.a;g=b.o;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.kT=g;}b=b.o;f=b.a;c=c.ez;d=c.g;f=f-d.a|0;h=b.b-d.b|0;Bm(c.s,f,h);return 1;}
function ANF(a,b,c){var d;if(!c){d=b.o;b=a.kv;if(!DT(b.ds,d))d=null;b.kT=d;}return 1;}
var AAm=F();
function YO(b){var c,d;c=CI(b,250,64);FL(c,B(167),25.0);KI(c,187,187,187);Cd(c,B(295),0.0,24.0);Cd(c,B(295),0.25,56.0);d=CR(b);CL(d,c);Fy(c);return d;}
function S8(){var a=this;C.call(a);a.ig=null;a.ox=null;a.iJ=null;}
function ADZ(a,b,c){if(!c){b=E0(a.iJ.hl,b.o,a.ox,1);a.ig=b;if(b!==null)return 1;}return 1;}
function AEG(a,b,c){if(a.ig!==null)a.ig=null;return 1;}
function ADB(a,b){var c;c=a.ig;if(c!==null){c.m(b);return 1;}c=a.iJ;return E$(c.hl,b.o,Tt(c.bc.bW));}
function M9(){C.call(this);this.r0=null;}
function ADu(a,b,c,d){var e,f;b=a.r0;e=(LX(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ej=Y(Bb(0,b.ej+Ba(e,f)|0),QG(b));return 1;}
function Rh(){C.call(this);this.qb=null;}
function ANm(a,b){var c,d;a:{c=a.qb;switch(b.bg){case 67:LR(c);d=1;break a;case 86:P5(c);d=1;break a;default:}d=0;}return d;}
var Rg=F();
function AF3(a,b,c){return 0;}
function Re(){C.call(this);this.od=null;}
function AML(a,b,c){var d,e;d=a.od;c=d.dh+1|0;d.dh=c;d=HA(E(HZ));e=new M;O(e);G(G(S(e,c),B(296)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));U8(b,e);return 1;}
var Rd=F();
function AKN(a){return null;}
function Rf(){C.call(this);this.mz=null;}
function AEv(a){var b,c;b=a.mz;c=new O1;c.qk=b;return c;}
function QO(){C.call(this);this.vH=null;}
function AF9(a,b){return 0;}
function Ko(){var a=this;C.call(a);a.lv=null;a.tI=null;a.m9=0.0;a.nK=0;a.nk=0;a.oD=0;a.pm=0;a.vn=0;a.dd=0.0;a.dY=0.0;a.tR=0.0;a.li=0.0;a.t0=0;a.mj=null;}
function FB(a){return C6(a.dd+a.dY);}
function Ji(a,b){return C6((a.dd+a.dY)*b);}
function Qz(){C.call(this);this.cC=null;}
function Wh(a,b){Qh(a.cC,0,b);}
function AEz(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(true){d=a.cC;if(c>=d.j)break;d=Bt(d,c);e=d.g9;if(e===null)f=d.br.cc(b);else{d=e.q8;f=e.q$;g=e.q6;h=e.q7;i=e.q4;j=e.q5;k=GX(d.dz,5.0);Bm(h,Y((d.dz.c7.a-f|0)-k|0,Bb((k-f|0)-d.cf.E.a|0,b.o.a))+i|0,Y((d.dz.c7.b-g|0)-k|0,Bb((k-g|0)-d.cf.E.b|0,b.o.b))+j|0);JB(d,h,d.br.E);f=1;}if(f)return 1;c=c+1|0;}return 0;}
function AId(a,b,c,d){var e,f;e=0;while(true){f=a.cC;if(e>=f.j)break;if((Bt(f,e)).br.cy(b,c,d))return 1;e=e+1|0;}return 0;}
function AGt(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cC;if(d>=e.j)break;f=Bt(e,d);if(!c&&!K5(f.cf)&&KJ(f.cf,b.o)){if(f.g9===null){e=b.o;g=f.br.bA;h=g.a;i=e.a;h=h-i|0;j=g.b;k=e.b;j=j-k|0;e=f.cf.bA;i=e.a-i|0;k=e.b-k|0;e=new Bl;g=new M7;g.q8=f;g.q$=i;g.q6=k;g.q7=e;g.q4=h;g.q5=j;f.g9=g;}h=1;}else h=!f.br.cu(b,c)&&!KJ(f.br,b.o)?0:1;if(h)return 1;d=d+1|0;}return 0;}
function AOx(a,b,c){var d,e,f,g;d=0;while(true){e=a.cC;if(d>=e.j)break;f=Bt(e,d);if(!c&&f.g9!==null){f.g9=null;g=1;}else g=f.br.cN(b,c);if(g)return 1;d=d+1|0;}return 0;}
function ANZ(a,b,c){var d,e,f;d=0;while(true){e=a.cC;if(d>=e.j)break;f=Bt(e,d);e=f.br;e.ip(e.bA,e.E,c);e=f.cf;if(e.gi!==null){e.dA=null;e.hw=1;}Jf(f);d=d+1|0;}}
function Pw(){C.call(this);this.vE=null;}
function AGC(a,b){return b.iF&&b.bg==32?1:0;}
function Px(){C.call(this);this.oZ=null;}
function AC5(a,b){var c,d,e,f,g,h;b=b;c=a.oZ;if(!DO(c.fn)){d=c.fn;b=b.o;e=R(Dw,1);f=e.data;g=new Dw;h=new O8;h.rp=c;Qk(g,h,B(297),d.ia.X);f[0]=g;Hk(d,b,GS(e),ATu);}return 1;}
function Py(){C.call(this);this.qc=null;}
function ALN(a,b,c,d){var e,f,g,h;e=a.qc;f=0;a:{while(true){g=e.cC;if(f>=g.j)break;if((Bt(g,f)).br.ee(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function KX(){var a=this;C.call(a);a.fH=null;a.h=null;a.iq=null;a.oK=null;}
function Db(a){var b;b=a.iq;if(b===null)b=a.oK;return b;}
function GC(a){var b;b=a.fH;return b===null?null:b.tp;}
var NT=F(0);
var Oc=F();
function AGI(a,b,c){var d,e;d=b;e=c;b=new M;O(b);S(G(S(G(b,B(298)),d),B(299)),e);CE(N(b));return d+e|0;}
var NU=F(0);
var Oa=F();
function AHL(a,b,c){var d,e;d=b;e=c;b=new M;O(b);E4(G(E4(G(b,B(300)),d),B(299)),e);CE(N(b));return d+e;}
var X6=F();
var Xh=F(0);
function LU(){C.call(this);this.mI=null;}
function AIT(a){J3(a.mI);}
function LV(){C.call(this);this.pa=null;}
function AHs(a){I$(a.pa);}
function UM(){var a=this;C.call(a);a.mw=null;a.re=null;a.ru=null;a.nx=null;a.l0=null;a.p0=null;}
function J7(a,b,c){return Wk(a,Cl(a.mw),b,c);}
function Ux(a,b,c){return Wk(a,Cl(a.re),b,c);}
function Wk(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.r$(c,d))return g.ud;f=f+1|0;}return null;}
function MI(a,b,c){var d,e,f,g;d=(Cl(a.ru)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.r$(b,c))return g.ul;f=f+1|0;}return null;}
function WZ(){var a=this;C.call(a);a.bJ=null;a.by=null;a.cQ=0;}
function AKD(){var a=new WZ();ADx(a);return a;}
function Qs(a){var b=new WZ();ACX(b,a);return b;}
function ADx(a){a.bJ=new F8;a.by=new F8;}
function ACX(a,b){var c;c=new F8;a.bJ=c;a.by=new F8;V7(c,b.bJ);V7(a.by,b.by);a.cQ=b.cQ;}
function JX(a,b,c){BZ(a.by,b,c);if(!a.cQ)BZ(a.bJ,b,c);}
function O_(a,b){BZ(a.bJ,b,0);BZ(a.by,b+1|0,0);}
function DP(a){if(Wy(a.bJ,a.by)>0)return a.by;return a.bJ;}
function Fg(a){if(Wy(a.bJ,a.by)<0)return a.by;return a.bJ;}
function De(a){var b,c;b=a.bJ;c=a.by;return (b===c?1:c!==null&&Cx(b)===Cx(c)?(b.I==c.I&&b.T==c.T?1:0):0)?0:1;}
function Yi(a,b){var c,d;if(!De(a))return 0;c=DP(a);d=Fg(a);return c.I<=b&&b<d.I?1:0;}
function MG(){var a=this;C.call(a);a.ep=null;a.er=0;a.c3=0;}
function Ma(a,b){var c,d,e;c=a.er;d=a.ep;if(c==d.data.length)a.ep=C$(d,c+16|0);d=a.ep.data;e=a.er;a.er=e+1|0;d[e]=b;}
function Wc(a){var b,c,d;b=a.c3;c=a.er-1|0;if(b==c)a.c3=b-1|0;d=a.ep.data;a.er=c;d[c]=null;}
function EE(){var a=this;C.call(a);a.bN=0;a.bO=null;a.d6=null;a.dl=0;a.cV=0;}
var ATo=0;var ATz=0;var ATn=0;function Ku(b,c){return (c-FB(b)|0)/2|0;}
function Sc(b,c){return Ku(b,c)+b.pm|0;}
function AAy(a,b,c,d,e){var f,g;if(D2(a.d6))return;if(e>EK(a.bO))return;f=e/1024|0;e=a.cV;if(f==e)return;if(LX(f-e|0)>=a.dl){g=0;while(g<a.dl){HB(a,b,d,c,f+g|0);g=g+1|0;}a.cV=f;return;}while(true){e=a.cV;if(e>=f)break;HB(a,b,d,c,e+a.dl|0);a.cV=a.cV+1|0;}while(true){e=a.cV;if(e<=f)break;HB(a,b,d,c,e-1|0);a.cV=a.cV-1|0;}}
function HB(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Ej(b);f=a.bO.e$;g=e*1024|0;h=N9(a,g);if(h>=a.bO.n.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bN;a:{while(true){l=a.bO.n.data;if(h>=l.length)break a;m=l[h];n=!ATn?Sc(d.data[m.b4],c):Ku(d.data[m.b4],c);o=f.data;CB(b,d.data[m.b4]);Cd(b,m.u,k,n);k=o[h]-j+a.bN;if(k>1024.0)break;h=h+1|0;}}CL(Bt(a.d6,e%a.dl|0),b);}
function AAE(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(D2(a.d6))return;if(!a.dl)return;if(j>EK(a.bO))return;o=a.bO;p=o.dT;q=o.n;r=j/1024|0;s=N9(a,j);t= -a.bN|0;u=i;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=h)break;y=p.data;o=Bt(a.d6,r%a.dl|0);z=v[s];ba=y[s]+a.bN|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Y(be,ba)-j|0;if(bc&&x)bf=bf+a.bN|0;if((t+bf|0)>h)bf=h-t|0;bg=l!==null?0:1;b:{if(!bg){bh=!x
?a.bN:2*a.bN|0;bi=l.a;w=l.b;if(!(bi<w&&j<=w&&(j+bf|0)>(bi+bh|0)?0:1)){bh=0;break b;}}bh=1;}c:{if(!bg){bj=!x?a.bN:2*a.bN|0;if(j>=l.a&&(j+bf|0)<=(l.b+bj|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(z===m)bl=k.pn;bm=BR(n);d:{e:{while(B1(bm)){f:{bn=BV(bm);if(bn!==null){if(!bn.dW(z))break f;else break e;}if(z===null)break e;}}bi=0;break d;}bi=1;}if(bi)bl=k.mx;if(!bk&&!bh){l.b=Y(l.b,EK(a.bO));bj=j>=l.a?bf:(Y(ba,be)-l.a|0)-(!x?a.bN:0)|0;bi=(j+bf|0)<=(l.b+(!x?a.bN:2*a.bN|0)|0)?0:(Y(ba,be)-l.b|0)-(!x?a.bN:0)|0;w=j-bb|0;be
=t+c|0;bo=w;x=bf-bj|0;CD(e,bo,0.0,x,u);Bm(f,x,i);HP(a,d,be,b,f,e,z,o,g,k,0,bl);w=w+bf|0;CD(e,w-bi|0,0.0,bi,u);Bm(f,bi,i);be=be+bf|0;HP(a,d,be-bi|0,b,f,e,z,o,g,k,0,bl);bp=w-bj|0;bi=bj-bi|0;CD(e,bp,0.0,bi,u);Bm(f,bi,i);HP(a,d,be-bj|0,b,f,e,z,o,g,k,1,bl);}else{CD(e,j-bb|0,0.0,bf,u);Bm(f,bf,i);HP(a,d,t+c|0,b,f,e,z,o,g,k,bk,bl);}j=j+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function HP(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.a&&e.b){if(f.bq!==0.0&&f.bh!==0.0){m=j.no.data[g.cD];if(k)n=j.kQ;else{g=m.qr;if(g===null)g=j.iM;if(l===null)l=BI(g);n=l;}g=m.qq;if(ATz)i=0.0;Hx(b,c,d,e,f,h,g,n,i);return;}return;}}
function N9(a,b){var c,d,e,f,g,h,i;c=a.bO;d=c.e$;e=0;f=c.n.data.length;g=b;b=BH(e,f);if(b>0){c=new BB;U(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BH(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AAQ(a,b,c,d,e,f){var g,h;a.cV=f/1024|0;while(true){g=a.d6;if(g.j>=a.dl)break;BW(g,CR(c));}h=0;while(h<a.dl){HB(a,b,e,d,a.cV+h|0);h=h+1|0;}}
function Pu(a){a.bO=null;Jh(a.d6,new Pv);G8(a.d6);}
function AAn(a,b,c,d,e,f,g,h,i){var j,k;j=EK(a.bO);if(j)j=j+a.bN|0;if(!j)j=j-a.bN|0;k=Bb( -a.bN|0,j-g|0);if(k>=h)return;Bm(f,h-k|0,e);BJ(b,c+k|0,d,f,i);}
function YQ(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EE,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B0(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bO===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EE;f.bN=3;f.d6=Cj();f.cV=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)Pu(o);h=h+1|0;}return g;}
function AA9(){ATn=0;}
function TE(){C.call(this);this.vW=null;}
function TD(){C.call(this);this.pJ=null;}
function AMj(a,b){var c;c=a.pJ;c.bf=Fu(b,EF(c));}
function Tz(){C.call(this);this.mW=null;}
function AKg(a,b){var c;c=a.mW;c.cj=Fu(b,F6(c));}
function Ty(){C.call(this);this.rF=null;}
function AMg(a){var b,c;b=a.rF;c=b.hE?0:1;b.hE=c;b=new M;O(b);FO(G(b,B(301)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TB(){C.call(this);this.p6=null;}
function AHx(a){var b,c;b=a.p6;c=b.hs?0:1;b.hs=c;b=new M;O(b);FO(G(b,B(302)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TA(){C.call(this);this.m$=null;}
function AJE(a){var b,c;b=a.m$;c=b.iP^1;b.iP=c;b=new M;O(b);FO(G(b,B(303)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function T3(){C.call(this);this.rZ=null;}
function ALH(a){var b,c,d,e,f;b=a.rZ;c=(b.kj+3|0)%6|0;b.kj=c;d=b.f_.data;e=d.length;f=0;while(f<e){b=d[f];b.bN=c;b=b.bO;if(b!==null)b.hB=1;f=f+1|0;}}
var Fa=F(Cq);
var ATl=null;var ATA=null;var ATm=null;var ATB=null;function ADb(){ADb=Br(Fa);AJL();}
function Z9(a,b){var c=new Fa();ZX(c,a,b);return c;}
function ZX(a,b,c){ADb();Dz(a,b,c);}
function AJL(){var b;ATl=Z9(B(304),0);ATA=Z9(B(305),1);b=Z9(B(306),2);ATm=b;ATB=H(Fa,[ATl,ATA,b]);}
function IL(){var a=this;C.call(a);a.dD=null;a.ey=null;a.fa=null;}
var ASA=0;function AAC(a){var b;b=a.ey;if(b!==null){ASA=ASA-1|0;a.dD.c_.deleteTexture(b);a.ey=null;}}
function Ck(a){return a.fa.a;}
function C0(a){return a.fa.b;}
function Su(a,b,c,d){var e;e=a.fa;e.a=b;e.b=c;Ld(a);a.dD.c_.texStorage2D(3553,1,d,b,c);e=a.dD.c_;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Ld(a){var b,c;b=a.dD.c_;c=a.ey;b.bindTexture(3553,c);}
function CL(a,b){Mv(a,b.k5,b.kf,32856);OO(a,b,0,0);}
function Mv(a,b,c,d){var e,f,g,h;a:{e=a.fa;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){Ld(a);break a;}e=a.dD.c_;h=a.ey;e.deleteTexture(h);a.ey=a.dD.c_.createTexture();Su(a,b,c,d);break a;}}Su(a,b,c,d);}}
function Hw(a,b,c,d){Ld(a);OO(a,b,c,d);}
function OO(a,b,c,d){var e;e=a.dD.c_;b=b.i6;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Q_=F();
function AO_(a,b){return ACb(b);}
function Ra(){C.call(this);this.qA=null;}
function AC9(a,b){return Mg(a.qA,b);}
function Sy(){C.call(this);this.jA=null;}
var ATt=null;function OX(){var a=new Sy();Zd(a);return a;}
function Zd(a){a.jA=Cj();}
function DW(a,b,c,d){OD(a,ABQ(d,b,c));}
function D$(b,c,d){return ABQ(d,b,c);}
function Ep(a,b,c,d){OD(a,AQM(null,b,c,d));}
function OD(a,b){BW(a.jA,b);}
function G5(a){return GS(Hl(a.jA,ATt));}
function W$(){ATt=R(Dw,0);}
var WA=F(0);
var ATu=null;function ABv(){ATu=new MU;}
function EP(){var a=this;C.call(a);a.jJ=null;a.lk=null;a.ly=null;a.bD=null;a.eQ=null;}
function ATC(a,b,c,d,e){var f=new EP();F2(f,a,b,c,d,e);return f;}
function F2(a,b,c,d,e,f){a.jJ=b;a.lk=c;a.ly=d;a.bD=e;a.eQ=f;}
function GZ(){var a=this;C.call(a);a.iZ=null;a.fs=null;a.r8=null;}
function ATD(a,b,c){var d=new GZ();Lg(d,a,b,c);return d;}
function Lg(a,b,c,d){a.iZ=b;a.fs=c;a.r8=d;}
function W9(){var b,c;b=new GZ;c=Bs(B(307));EC();Lg(b,c,ATg,ATh);return b;}
function ACg(){var b,c;b=new GZ;Dl();c=ATd;EC();Lg(b,c,ATe,ATh);return b;}
function ACD(){var a=this;C.call(a);a.iX=null;a.pL=0;}
function AEU(a,b){var c=new ACD();AOs(c,a,b);return c;}
function AOs(a,b,c){var d;d=new B3;a.iX=d;a.pL=b;d.bq=c;}
function JJ(a,b){return Cb(a.pL,b);}
var Hy=F(0);
var VW=F();
function AL2(a,b,c,d){var e;b=Bw();d=Cs(d);e=new M;O(e);G(G(S(G(e,B(308)),c),B(276)),d);Bu(b,N(e));}
var VX=F();
function J1(){var a=this;C.call(a);a.bX=null;a.eq=null;a.f7=null;a.lH=null;a.uZ=null;a.eu=null;a.bi=null;a.ei=null;a.dt=0;a.hm=0;a.bZ=0;a.sH=null;a.cU=0;a.c0=0;a.eL=0;a.lz=0;}
var ATE=0;function LT(a){return a.bi.data.length?0:1;}
function Lj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=K$(b);if(LT(a))return;BI(a.eu);CB(c,a.eu);d=FB(a.eu);a.dt=Cb(2.0,b.bF);e=C6(a.eu.li);a.hm=e;f=e;g=new T9;g.s$=c;g.s_=f;h=AOe(d);i=a.bi.data;e=i.length;j=0;while(j<e){k=i[j];l=I6(g,k.eg);if(Eu(k.eg,B(282)))a.lz=l;else{m=I6(g,k.iG);n=I6(g,k.iS);a.cU=Bb(a.cU,l);a.c0=Bb(a.c0,m);a.eL=Bb(a.eL,n);}j=j+1|0;}e=((a.cU+a.c0|0)+a.eL|0)+(a.hm*2|0)|0;i=a.bi.data;j=i.length;n=0;while(n<j){k=i[n];Be(k.bU.bM,GY(h,k.eg,g));KG(k.bU,0.0);if(!Eu(k.eg,B(282))){Be(k.ch.bM,GY(h,k.iG,g));KG(k.ch,
a.cU-k.bU.g.a|0);Be(k.cA.bM,GY(h,k.iS,g));KG(k.cA,(a.cU-k.bU.g.a|0)+(a.c0-k.ch.g.a|0)|0);a.cU=Bb(a.cU,k.bU.g.a);a.c0=Bb(a.c0,k.ch.g.a);a.eL=Bb(a.eL,k.cA.g.a);}n=n+1|0;}Dt(a.eq,Wj(h));b=a.bX.g;j=Bb(e,a.lz);l=a.dt;b.a=j+(l*2|0)|0;a.bX.g.b=Ba(d+l|0,a.bi.data.length)+l|0;}
function L7(a,b){var c,d,e,f,g,h;if(Eu(b.eg,B(282)))return;c=b.dH;d=b.bU;e=d.s;f=e.a;d=d.g;g=d.a;FZ(c,f+g|0,e.b,a.cU-g|0,d.b);c=b.dw;d=b.dH;g=d.s.a+d.g.a|0;d=b.ch;e=d.g;f=e.a;FZ(c,g+f|0,d.s.b,a.c0-f|0,e.b);c=b.d2;d=b.dw;f=d.s.a+d.g.a|0;d=b.cA;b=d.g;h=b.a;FZ(c,f+h|0,d.s.b,(((a.bX.g.a-h|0)-a.c0|0)-a.cU|0)-(a.dt*2|0)|0,b.b);}
function KG(b,c){var d,e;d=b.s;e=b.bM;d.a=e.ba+c|0;d.b=e.bp|0;b=b.g;b.a=e.bh|0;b.b=e.bq|0;}
function V$(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;Bm(a.bX.s,b,c);d=a.dt;e=a.bi.data;f=e.length;g=0;h=b+d|0;while(g<f){i=e[g];j=i.bU;k=i.ch;l=i.cA;m=j.s;m.a=h;n=c+d|0;m.b=n;m=k.s;b=a.cU;o=j.g;m.a=h+(b-o.a|0)|0;m.b=n;m=l.s;m.a=(h+(b-o.a|0)|0)+(a.c0-k.g.a|0)|0;m.b=n;if(!Eu(i.eg,B(282))){L7(a,i);m=i.dH.s;m.a=h+j.g.a|0;m.b=n;m=i.dw.s;m.a=(h+k.s.a|0)+k.g.a|0;m.b=n;m=i.d2.s;m.a=(h+l.s.a|0)+l.g.a|0;m.b=n;}if(!(j.g.b&&k.g.b&&l.g.b))$rt_globals.console.info("FindUsages.setPos: tRect.size == 0");d=d+(j.g.b+a.dt|0)|0;g=g+
1|0;}}
function UO(a){var b,c;b=a.eq;if(b.a&&b.b)return a.bX.g;c=new Bn;Bj(c,B(309));J(c);}
function Uc(a){Bm(a.eq,0,0);}
function AAB(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(!a.bi.data.length)return;a:{if(a.ei!==null){c=a.eq;if(Ba(c.a,c.b))break a;}c=a.eq;if(!Ba(c.a,c.b))Lj(a,b);c=a.eq;d=c.a;e=c.b;if(!Ba(d,e))return;c=b.c1;f=CI(c,d+150|0,e);CB(f,a.eu);g=a.eu;h=g.dd;h=h-(h+g.dY)/16.0;i=a.bi.data;d=i.length;e=0;while(e<d){g=i[e];j=g.eg;k=g.bU.bM;Cd(f,j,k.ba+a.hm,h+k.bp);j=g.iG;k=g.ch.bM;Cd(f,j,k.ba+a.hm,h+k.bp);j=g.iS;g=g.cA.bM;Cd(f,j,g.ba+a.hm,h+g.bp);e=e+1|0;}c=CJ(a.ei,CR(c));a.ei=c;CL(c,f);Fy(f);}c=b.c1;Ct(c,1);if(!Ia(a.bX)){f=a.bX;UV(c,
f.g,f.s,f.Q,a.dt,a.f7);f=a.bX;Yc(c,f.g,f.s,f.K,a.dt,a.f7);f=a.bX;TN(c,f.g,f.s,0,0,JJ(a.lH,b.bF),a.lH.iX,a.f7);}i=a.bi.data;l=i.length;m=0;while(m<l){f=i[m];L7(a,f);CK(f.bU,c,a.ei,0,0,1.0);CK(f.ch,c,a.ei,f.bU.g.a,0,1.0);CK(f.cA,c,a.ei,f.bU.g.a+f.ch.g.a|0,0,1.0);Gt(f.dH,c,0,0);Gt(f.dw,c,0,0);Gt(f.d2,c,0,0);if(ATE){(GM(1.0,1.0,1.0,f.dH.K)).bq=0.30000001192092896;(GM(0.2,1.0,1.0,f.dw.K)).bq=0.30000001192092896;(GM(0.5,1.0,1.0,f.d2.K)).bq=0.30000001192092896;}m=m+1|0;}i=a.bi.data;e=i.length;l=0;while(l<e){f=i[l];g
=f.bU;j=f.ch;k=f.cA;b=a.f7;d=a.bX.g.a-(a.dt*2|0)|0;c=g.g;b.a=d-c.a|0;b.b=(c.b+j.g.b|0)+k.g.b|0;l=l+1|0;}}
function RQ(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bi.data;if(c>=d.length)return (-1);e=d[c].bU;if(DT(e,b))return c;f=e.s;g=f.a;e=e.g;h=e.a;g=g+h|0;i=f.b;f=a.f7;f.a=(a.bX.g.a-(a.dt*2|0)|0)-h|0;f.b=e.b;if(NF(b,g,i,f))break;c=c+1|0;}return c;}
function AAK(){ATE=0;}
function UH(){C.call(this);this.s8=null;}
function ABl(){var a=this;C.call(a);a.iz=null;a.g8=null;a.ot=null;a.oB=null;}
function AJk(a,b,c,d){var e=new ABl();AOy(e,a,b,c,d);return e;}
function AOy(a,b,c,d,e){a.iz=b;a.g8=c;a.ot=d;a.oB=e;}
function WO(){C.call(this);this.p$=null;}
function ALs(a,b){var c;c=a.p$.h9;c.dE=Fu(b,OW(c));}
function M3(){C.call(this);this.mV=null;}
function JT(a,b){Gd(a.mV,b);return 1;}
var Dp=F(0);
var ATi=null;var ATy=null;var ATg=null;var ATF=null;var ATh=null;var ATj=null;var ATG=null;var ATf=null;var ATe=null;function EC(){EC=Br(Dp);AHr();}
function AHr(){ATi=WS(50,50,50,100);ATy=WS(80,80,80,200);ATg=Bs(B(310));ATF=Bs(B(279));ATh=Bs(B(311));ATj=Bs(B(310));ATG=Bs(B(279));ATf=Bs(B(311));Dl();ATe=AS8;}
var ZS=F();
function OI(){C.call(this);this.mr=null;}
function AH2(a,b){var c;c=a.mr.iJ;c.ej=Fu(b,QG(c));}
function UN(){C.call(this);this.gl=null;}
function AC8(a,b){return JK(a.gl,b);}
function AL4(a,b,c,d){return II(a.gl,b,c,d);}
function AMZ(a,b,c){return I9(a.gl,b,c);}
function AHU(a,b,c){return DO(a.gl);}
var Yg=F();
function Jq(){var a=this;C.call(a);a.B=null;a.cY=null;a.dQ=null;a.eb=null;a.e6=null;a.cn=0;a.fo=0;a.oh=0.0;}
function ALh(){var a=new Jq();AMN(a);return a;}
function AMN(a){a.dQ=HD();a.eb=HD();a.e6=Cj();a.B=L_(B(31));a.fo=0;a.cn=0;a.cY=S3(a);}
function S3(a){var b,c,d,e,f,g,h,i;b=Sg(a);c=new Ic;d=new M5;e=Ne(0,b,0);f=new Wu;f.rD=e;L5(d,1);e=BR(f);g=0;while(true){h=d.b_.data;i=h.length;if(g>=i)break;h[g]=BV(e);g=g+1|0;}d.j=i;S9(c,d);return c;}
function B0(a,b){return a.B.data[b];}
function Cz(a){return a.B.data.length;}
function Sg(a){return FT(a,Cz(a));}
function E5(a,b){return a.B.data[b].M;}
function Kk(a,b){var c,d,e,f,g,h,i;c=a.B.data;d=c[b];e=c[b+1|0];f=DA(KZ(d.n,e.n));g=a.B;h=g.data.length;if(b<h&&b>=0){i=R(Cv,h-1|0);c=i.data;P1(g,b,i);c[b]=f;a.B=i;return;}d=new Bn;U(d);J(d);}
function Ol(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.B.data;if(!(c<d[b].M?0:1)){d=(B0(a,b)).n.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.u)){f=L(h.u,g);break a;}g=g-I(h.u)|0;f=f+1|0;}f=0;}Ex();h=new By;d=BQ(1);d.data[0]=f;G2(h,d);Gh(a,b,c,1,h);h=a.B.data[b];i=h.n;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].u);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].u)==1)h.n=P1(i,j,R(B4,e-1|0));else{k=d[j];if(c<=0)l=Dr(Dq(k.u,1),k.cD,k.b4);else if(c>=(I(k.u)-1|0)){l=new B4;m=k.u;T$(l,B7(m,0,I(m)-
1|0),k.cD,k.b4);}else{i=BQ(I(k.u)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.u,b);b=b+1|0;}b=n.length;while(c<b){m=k.u;e=c+1|0;n[c]=L(m,e);c=e;}l=Dr(FE(i),k.cD,k.b4);}d[j]=l;}h.M=h.M-1|0;D4(h);}else if(b!=(d.length-1|0))Kk(a,b);}
function WF(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){V4(a.B.data[b],c,e[0]);return;}g=f-1|0;h=H5(a.B.data[b],c);d=a.B;i=C$(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.n.data;m=l.length;c=!m?0:I(l[m-1|0].u);IT(j,j.n.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(E9(e[m]))j=DA(R(B4,0));else{j=new Cv;l=R(B4,1);l.data[0]=Dr(e[m],0,0);HF(j,l);}d[b+m|0]=j;m=m+1|0;}IT(h[1],0,0,e[g]);d[b+g|0]=h[1];a.B
=i;}
function UX(a,b){var c,d,e,f,g,h,i;c=DP(b);d=Fg(b);e=c.I;if(e==d.I)return B7(Ev(a.B.data[e]),c.T,d.T);f=new M;O(f);b=a.B.data[c.I];e=c.T;BC(BX(f,Dq(Ev(b),e)),10);g=a.B;h=c.I+1|0;e=d.I;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;W8(BX(f,Ev(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.B.data[d.I];i=d.T;BX(f,B7(Ev(b),0,i));return N(f);}}b=new Vs;U(b);J(b);}
function Si(a,b,c){var d;TC(a,b);d=DP(b);Gh(a,d.I,d.T,1,c);}
function TC(a,b){var c,d,e,f,g,h,i;a:{c=DP(b);d=Fg(b);e=c.I;if(e==d.I)FC(a.B.data[e],c.T,d.T);else{b=a.B.data[e];FC(b,c.T,b.M);FC(a.B.data[d.I],0,d.T);e=c.I+1|0;f=d.I;g=a.B;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Cv,(h-f|0)+e|0);Y5(g,e,f,i);a.B=i;Kk(a,c.I);break a;}b=new Bn;U(b);J(b);}b=new Bn;U(b);J(b);}}}
function OQ(a,b,c){return ED(b,GB(B0(a,b),c));}
function Wm(a,b){b.bI=GB(B0(a,b.bB),b.bI);}
function MQ(a,b){var c,d,e;c=0;d=0;while(true){e=a.B.data.length;if(c>=e)break;if((d+(B0(a,c)).M|0)>=b)return Cn(c,b-d|0);d=d+((B0(a,c)).M+1|0)|0;c=c+1|0;}return Cn(e,0);}
function FT(a,b){var c,d,e;c=0;d=a.B.data.length;e=0;while(e<b){c=c+E5(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Ph(a,b){return TK(B0(a,b.bB),b.bI);}
function F4(a){var b,c,d,e,f,g,h,i,j;b=BQ(Sg(a));c=b.data;d=a.B.data.length;e=0;f=0;while(e<d){g=a.B.data[e].n.data;h=g.length;i=0;while(i<h){j=g[i].u;OM(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gh(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cn=a.cn+1|0;f=a.e6;g=R(GF,1);h=new GF;h.es=b;h.e2=c;i=Lc(e,B(233),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cn(b,c+I(i[0])|0);break a;}k=Cn((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=Cn(b,c);}i=g.data;h.kk=k;h.i_=d;h.gF=e;i[0]=h;BW(f,g);IY(a,b,c,d,e);}
function IY(a,b,c,d,e){var f;f=FT(a,b)+c|0;if(!d)OK(a.cY,f,I(e));else SQ(a.cY,f,I(e));}
function Sa(a,b){var c,d,e;c=Lc(b.gF,B(233),(-1));if(b.i_){WF(a,b.es,b.e2,c);OK(a.cY,FT(a,b.es)+b.e2|0,I(b.gF));}else{c=c.data;d=AKD();BZ(d.bJ,b.es,b.e2);e=c.length;if(e==1)BZ(d.by,b.es,b.e2+I(c[0])|0);else BZ(d.by,(b.es+e|0)-1|0,I(c[e-1|0]));TC(a,d);SQ(a.cY,FT(a,b.es)+b.e2|0,I(b.gF));}return b.kk;}
function Ox(a){a.fo=a.cn;}
var EH=F();
function Ly(){EH.call(this);this.ud=null;}
function LY(){EH.call(this);this.ul=null;}
function Pc(){EH.call(this);this.vo=null;}
var H2=F(0);
var Qg=F(0);
function F8(){var a=this;C.call(a);a.I=0;a.T=0;}
function BZ(a,b,c){a.I=b;a.T=c;}
function V7(a,b){a.I=b.I;a.T=b.T;}
function Wy(a,b){var c;c=BH(a.I,b.I);if(c)return c;return BH(a.T,b.T);}
function ID(){var a=this;C.call(a);a.kF=null;a.ln=null;}
function Io(a){return a.kF.bB;}
function K2(a){return a.kF.bI;}
var JZ=F(FV);
var ASi=null;function AGg(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ACE(){var b;b=new JZ;WL(b);ASi=b;}
var AB3=F();
function HX(b,c){var d,e,f;if(c<=0)return B(31);d=BQ(c);e=d.data;e[0]=AAW(HN(b,52));f=1;while(f<c){e[f]=AAW(HN(b,62));f=f+1|0;}return FE(d);}
function AAW(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
function Wq(){C.call(this);this.kD=null;}
var ATw=null;function AKS(){var a=new Wq();Yo(a);return a;}
function Yo(a){a.kD=Cj();}
function KT(a,b,c,d,e,f){var g;g=new JA;g.bU=Kc();g.ch=Kc();g.cA=Kc();g.dH=J8();g.dw=J8();g.d2=J8();g.eg=b;g.iG=c;g.iS=d;g.cr=e;g.kp=f;Be(g.bU.K,e.jJ);Be(g.bU.Q,e.bD);Be(g.ch.K,e.lk);Be(g.ch.Q,e.bD);Be(g.cA.K,e.ly);Be(g.cA.Q,e.bD);Be(g.dH.K,e.bD);Be(g.dw.K,e.bD);Be(g.d2.K,e.bD);BW(a.kD,g);}
function PC(a){return Hl(a.kD,ATw);}
function YY(){ATw=R(JA,0);}
var Y0=F();
function ACq(){var a=this;C.call(a);a.BC=null;a.zr=null;a.Av=0;a.z3=0;}
function Zo(){var a=this;C.call(a);a.tp=null;a.Bk=null;}
var ABP=F(0);
function ABy(b){var c;a:{switch(b){case 0:break;case 1:c=B(136);break a;case 2:c=B(257);break a;case 3:c=B(256);break a;default:c=null;break a;}c=B(164);}return c;}
var CO=F();
var AAe=F(CO);
var AAV=F(CO);
var X$=F(CO);
var Yt=F(CO);
var ABm=F(CO);
function Zz(){var a=this;En.call(a);a.gk=0;a.cM=null;a.ge=0;a.s4=0.0;a.j_=0;}
function HD(){var a=new Zz();AFO(a);return a;}
function AFO(a){var b;b=AB4(16);a.gk=0;a.cM=R(HI,b);a.s4=0.75;TI(a);}
function AB4(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TI(a){a.j_=a.cM.data.length*a.s4|0;}
function M1(a,b){return RS(a,b)===null?0:1;}
function Eh(a,b){var c;c=RS(a,b);if(c===null)return null;return c.fB;}
function RS(a,b){var c,d;if(b===null)c=Q4(a);else{d=XU(b);c=Pa(a,b,d&(a.cM.data.length-1|0),d);}return c;}
function Pa(a,b,c,d){var e,f;e=a.cM.data[c];while(e!==null){if(e.kB==d){f=e.hH;if(b!==f&&!Xc(b,f)?0:1)break;}e=e.eX;}return e;}
function Q4(a){var b;b=a.cM.data[0];while(b!==null&&b.hH!==null){b=b.eX;}return b;}
function R6(a,b,c){var d,e,f;if(b===null){d=Q4(a);if(d===null){a.ge=a.ge+1|0;d=Tu(a,null,0,0);e=a.gk+1|0;a.gk=e;if(e>a.j_)TX(a);}}else{e=XU(b);f=e&(a.cM.data.length-1|0);d=Pa(a,b,f,e);if(d===null){a.ge=a.ge+1|0;d=Tu(a,b,f,e);e=a.gk+1|0;a.gk=e;if(e>a.j_)TX(a);}}b=d.fB;d.fB=c;return b;}
function Tu(a,b,c,d){var e,f,g;e=new HI;f=null;e.hH=b;e.fB=f;e.kB=d;g=a.cM.data;e.eX=g[c];g[c]=e;return e;}
function TX(a){var b,c,d,e,f,g,h,i;b=a.cM.data.length;b=AB4(!b?1:b<<1);c=R(HI,b);d=c.data;e=0;f=b-1|0;while(true){g=a.cM.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.kB&f;i=h.eX;h.eX=d[b];d[b]=h;h=i;}e=e+1|0;}a.cM=c;TI(a);}
function XU(b){var c,d,e,f,g,h;c=R(C,2).data;c[0]=FJ(b.bB);c[1]=FJ(b.bI);d=(-1515898884);e=0;while(e<c.length){b=c[e];if(b===null)f=0;else{g=b.fc;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;d=Jr(h,4)^((h>>>7|0)|h<<25)^Jr(d,13);e=e+1|0;}return d;}
function Cv(){var a=this;C.call(a);a.n=null;a.M=0;a.e$=null;a.dT=null;a.da=null;a.gE=null;a.fv=0;a.hB=0;a.hf=0;}
var ATH=0;var ATI=0;var ATq=0;function DA(a){var b=new Cv();HF(b,a);return b;}
function HF(a,b){var c,d,e,f;c=b.data;a.n=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].u)|0;f=f+1|0;}a.M=d;D4(a);}
function GB(a,b){var c;c=HT(a,b);return c<=0?0:a.da.data[c-1|0];}
function HT(a,b){var c,d,e,f;c=a.n.data.length;if(!c)return (-1);if(!(a.da!==null&&!a.hf)){Vg(a);d=0;e=0;f=a.n.data.length;while(d<f){e=e+I(a.n.data[d].u)|0;a.da.data[d]=e;d=d+1|0;}a.hf=0;}d=SS(a.da,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function TK(a,b){var c;c=a.n.data;if(!c.length)return null;return c[HT(a,b)];}
function FC(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.M){a.n=R(B4,0);D4(a);a.M=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.n.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].u);i=I(a.n.data[f].u);j=BH(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.n.data[f];if(!b&&c==I(k.u)?1:0){g=a.n;a.n=P1(g,e,R(B4,g.data.length-1|0));a.M=a.M-d|0;D4(a);return;}a.n.data[e]=Dr(EX(B7(k.u,0,b),Dq(k.u,c)),k.cD,k.b4);}else{g=a.n.data;l=g[e];m=g[f];if(b){if(b!=
I(l.u))a.n.data[e]=Dr(B7(l.u,0,b),l.cD,l.b4);e=e+1|0;}if(c==I(m.u))f=f+1|0;else if(c)a.n.data[f]=Dr(Dq(m.u,c),m.cD,m.b4);g=a.n;a.n=Y5(g,e,f,R(B4,(g.data.length-f|0)+e|0));}a.M=a.M-d|0;D4(a);}
function H5(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cv,[DA(R(B4,0)),a]);if(b>=a.M)return H(Cv,[a,DA(R(B4,0))]);c=a.n;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].u);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cv,[DA(Kd(c,0,R(B4,d))),DA(Kd(c,d,R(B4,f-d|0)))]);h=e[d];e=Kd(c,0,R(B4,d+1|0));i=e.data;j=Kd(c,d,R(B4,f-d|0));c=j.data;i[d]=Dr(B7(h.u,0,b),h.cD,h.b4);c[0]=Dr(Dq(h.u,b),h.cD,h.b4);return H(Cv,[DA(e),DA(j)]);}
function V4(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.n.data;if(e>=f.length)break a;g=I(f[d].u);if(b<=g)break;b=b-g|0;d=e;}}IT(a,d,b,c);}
function IT(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.n;f=e.data;g=f.length;if(!g){h=R(B4,1);h.data[0]=QQ(d);a.n=h;}else if(!b&&!c){i=R(B4,g+1|0);h=i.data;Dk(e,0,i,1,g);h[0]=QQ(d);a.n=i;}else{j=f[b];if(c<=0)k=Dr(EX(d,j.u),j.cD,j.b4);else if(c>=I(j.u))k=Dr(EX(j.u,d),j.cD,j.b4);else{l=I(d);m=l+c|0;n=I(j.u)-c|0;h=BQ(I(j.u)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.u,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.u,g+c|0);g=g+1|0;}k=Dr(FE(h),j.cD,j.b4);}f[b]=k;}a.M=a.M+I(d)|0;D4(a);}
function V5(a){var b,c,d,e,f,g;b=0;c=a.n.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<I(f.u)){if(L(f.u,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Kw(a,b,c){var d,e,f,g,h,i,j;d=a.n.data.length;e=a.e$;if(!(e!==null&&e.data.length>=d)){a.e$=ACW(d);a.dT=BF(d);a.fv=1;}Vg(a);if(!a.fv)ATI=ATI+1|0;else{f=0;g=0.0;ATH=ATH+1|0;h=0;while(h<d){i=c.data;j=a.n.data[h];f=f+I(j.u)|0;a.da.data[h]=f;CB(b,i[j.b4]);g=g+Ed(b,j.u);a.e$.data[h]=g;a.dT.data[h]=g+0.5|0;h=h+1|0;}a.M=f;a.fv=0;a.hf=0;}}
function Vg(a){var b;b=a.da;if(!(b!==null&&b.data.length>=a.n.data.length)){a.da=BF(a.n.data.length);a.hf=1;}}
function D4(a){a.fv=1;a.hB=1;a.hf=1;a.gE=null;}
function Vz(a,b,c,d){var e,f,g,h,i,j,k;if(a.gE===null)a.gE=R($rt_arraycls($rt_intcls()),a.n.data.length);e=a.gE.data[d];if(e===null){e=c.data;f=a.n.data[d];CB(b,e[f.b4]);f=f.u;e=BF(I(f)-1|0);c=Ge(f);g=!d?0.0:a.e$.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new By;k=i+1|0;LE(f,c,0,k);h[i]=g+Ed(b,f)+0.5|0;i=k;}a.gE.data[d]=e;}return e;}
function GD(a,b,c,d){var e,f,g,h,i;if(a.n.data.length&&b){if(!(!a.fv&&a.dT!==null))Kw(a,c,d);if(b>=a.M)return a.dT.data[a.n.data.length-1|0];e=0;f=0;a:{while(true){g=a.n.data;if(f>=g.length)break a;h=e+I(g[f].u)|0;i=BH(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dT.data[f];}return (Vz(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EK(a){var b,c,d;a:{b=a.n.data.length;if(b){c=a.dT.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Gy(a,b){var c;if(b>=a.M)return b+1|0;c=HT(a,b);return a.da.data[c];}
function Ev(a){var b,c,d,e;b=new M;FH(b,a.M);c=a.n.data;d=c.length;e=0;while(e<d){BX(b,c[e].u);e=e+1|0;}return N(b);}
function L_(b){var c,d,e,f;c=R(Cv,1);d=c.data;e=new Cv;f=R(B4,1);f.data[0]=QQ(b);HF(e,f);d[0]=e;return c;}
function Xb(){ATq=0;}
var MU=F();
function AOw(a){}
function Tb(){C.call(this);this.rE=null;}
function AJa(a){var b;b=a.rE;Bu(Bw(),b);}
function B4(){var a=this;C.call(a);a.u=null;a.cD=0;a.b4=0;}
function QQ(a){var b=new B4();ANr(b,a);return b;}
function Dr(a,b,c){var d=new B4();T$(d,a,b,c);return d;}
function ANr(a,b){T$(a,b,0,0);}
function T$(a,b,c,d){a.u=b;a.cD=c;a.b4=d;}
function G0(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Ic(){var a=this;C.call(a);a.cF=null;a.dJ=0;}
var ATJ=null;var ATK=null;function AQJ(a){var b=new Ic();S9(b,a);return b;}
function APM(a,b){var c=new Ic();WK(c,a,b);return c;}
function Uk(b,c){var d;d=BH(b.bG,c.bG);if(!d)d=BH(c.bL,b.bL);return d;}
function S9(a,b){WK(a,null,b);}
function WK(a,b,c){var d,e;a.dJ=0;if(D2(c))return;Nk(c,ATJ);if(b!==null)a.cF=L0(b);c=BR(c);while(B1(c)){d=BV(c);e=a.cF;if(e!==null){P4(a,e,L0(d));continue;}a.cF=L0(d);}}
function On(a,b){var c;if(b.eH)return b;b=BR(b.bt);while(true){if(!B1(b))return null;c=On(a,BV(b));if(c!==null)break;}return c;}
function JQ(a,b,c){var d,e,f;d=b.b1;if(d.bG==c.bG&&d.bL==c.bL?1:0){e=BR(b.bt);while(B1(e)){f=JQ(a,BV(e),c);if(f!==null)return f;}return b;}b=BR(b.bt);while(true){if(!B1(b))return null;d=BV(b);if(Pg(d,c.bG,c.bL)){e=JQ(a,d,c);if(e!==null)break;}}return e;}
function Vh(a,b,c){BW(c,b.b1);b=BR(b.bt);while(B1(b)){Vh(a,BV(b),c);}}
function OK(a,b,c){a.dJ=0;IB(a,a.cF,b,c);}
function IB(a,b,c,d){var e;if(C1(b)<c)return;a:{if(CU(b)>c){JP(b,d);FI(b,d);b=BR(b.bt);while(B1(b)){IB(a,BV(b),c,d);}}else{if(!Jv(b,c)){if(a.dJ)break a;if(C1(b)!=c)break a;}FI(b,d);if(CU(b)==c&&a.dJ)JP(b,d);e=BR(b.bt);while(B1(e)){IB(a,BV(e),c,d);}if(!a.dJ){b.eH=1;a.dJ=1;}}}}
function SQ(a,b,c){a.dJ=0;LC(a,a.cF,b,c);}
function LC(a,b,c,d){var e,f,g,h;if(C1(b)<c)return;e=CU(b);f=c+d|0;if(e>f){e= -d|0;JP(b,e);FI(b,e);g=BR(b.bt);while(B1(g)){LC(a,BV(g),c,d);}b.bt=MW(a,b.bt);}else{g=b.b1;if(c<=g.bG&&g.bL<=f?1:0){if(b!==a.cF){IK(b,(-1));Js(b,(-1));}else{IK(b,0);Js(b,0);}G8(b.bt);}else{e=Jv(b,c);f=Jv(b,f);if(e&&f)FI(b, -d|0);else if(e)Js(b,c);else{if(!f)return;IK(b,c);FI(b, -d|0);}h=BR(b.bt);while(B1(h)){LC(a,BV(h),c,d);}b.bt=MW(a,b.bt);if(!a.dJ){b.eH=1;a.dJ=1;}}}}
function MW(a,b){var c,d,e,f,g,h;c=Cj();d=null;Nk(b,ATK);b=BR(b);while(B1(b)){e=BV(b);if(CU(e)==C1(e))continue;if(!e.eH){if(d!==null){BW(c,d);d=null;}BW(c,e);}else if(d===null)d=e;else{f=Y(CU(d),CU(e));g=Bb(C1(d),C1(e));h=L0(Ne(f,g,d.b1.eZ));h.dr=e.dr;h.eH=1;d=h;}}if(d!==null)BW(c,d);return c;}
function P4(a,b,c){var d,e;a:{if(NQ(b,c)){d=BR(b.bt);while(true){if(!B1(d)){BW(b.bt,c);c.dr=b;break a;}e=BV(d);if(NQ(e,c))break;}P4(a,e,c);return;}}}
function Q5(a,b,c,d){var e,f,g,h,i,j;if((C1(c)-CU(c)|0)<43)e=B7(d,CU(c),C1(c));else{e=B7(d,CU(c),CU(c)+20|0);f=B7(d,C1(c)-20|0,C1(c));g=new M;O(g);G(G(G(g,e),B(282)),f);e=N(g);}e=T4(e,B(233),B(312));f=Bw();g=Cs(c);h=new M;O(h);i=S(h,b);BC(i,32);g=G(i,g);BC(g,9);G(g,e);Bu(f,N(h));c=BR(c.bt);j=b+1|0;while(B1(c)){Q5(a,j,BV(c),d);}}
function AAz(){ATJ=new We;ATK=new Wg;}
function JA(){var a=this;C.call(a);a.bU=null;a.ch=null;a.cA=null;a.dH=null;a.dw=null;a.d2=null;a.kp=null;a.cr=null;a.eg=null;a.iG=null;a.iS=null;}
function F7(a,b){Be(a.bU.Q,!b?a.cr.bD:a.cr.eQ);Be(a.ch.Q,!b?a.cr.bD:a.cr.eQ);Be(a.cA.Q,!b?a.cr.bD:a.cr.eQ);Be(a.dH.K,!b?a.cr.bD:a.cr.eQ);Be(a.dw.K,!b?a.cr.bD:a.cr.eQ);Be(a.d2.K,!b?a.cr.bD:a.cr.eQ);}
function AB7(){var a=this;C.call(a);a.bG=0;a.bL=0;a.eZ=0;}
function Ne(a,b,c){var d=new AB7();AFU(d,a,b,c);return d;}
function AFU(a,b,c,d){a.bG=b;a.bL=c;a.eZ=d;}
function AMM(a,b){var c;if(a===b)return 1;if(b!==null&&Cx(a)===Cx(b)){c=b;return a.bG==c.bG&&a.bL==c.bL&&a.eZ==c.eZ?1:0;}return 0;}
function AEt(a,b){var c;b=b;c=BH(a.bG,b.bG);if(!c)c=BH(b.bL,a.bL);return c;}
var We=F();
function AG1(a,b,c){return Uk(b,c);}
var Wg=F();
function AIC(a,b,c){b=b;c=c;return Uk(b.b1,c.b1);}
var EI=F();
var ATL=null;var ATM=null;var ATN=null;var ATO=null;var ATP=null;var ATQ=null;function Z7(){ATL=new Us;ATM=new Uq;ATN=new Ur;ATO=new Uo;ATP=new Up;ATQ=new WN;}
var GJ=F(FP);
function AJq(a,b){var c;c=new E2;U(c);J(c);}
function Wu(){GJ.call(this);this.rD=null;}
function AGe(a){return 1;}
function AOl(a,b){var c;if(!b)return a.rD;c=new Bx;U(c);J(c);}
function Xa(){var a=this;C.call(a);a.b1=null;a.dr=null;a.bt=null;a.eH=0;}
function L0(a){var b=new Xa();AK9(b,a);return b;}
function AK9(a,b){a.eH=0;a.b1=b;a.dr=null;a.bt=Cj();}
function CU(a){return a.b1.bG;}
function C1(a){return a.b1.bL;}
function IK(a,b){a.b1.bG=b;}
function Js(a,b){a.b1.bL=b;}
function JP(a,b){var c;c=a.b1;c.bG=c.bG+b|0;}
function FI(a,b){var c;c=a.b1;c.bL=c.bL+b|0;}
function Jv(a,b){return CU(a)<=b&&b<C1(a)?1:0;}
function Pg(a,b,c){var d;d=a.b1;return d.bG<=b&&c<=d.bL?1:0;}
function NQ(a,b){b=b.b1;return Pg(a,b.bG,b.bL);}
function AG7(a){var b,c,d,e,f;b=a.b1;c=b.bG;d=b.bL;e=b.eZ;b=new M;O(b);BC(b,40);BC(S(G(S(G(S(b,c),B(44)),d),B(44)),e),41);b=N(b);c=a.eH;f=new M;O(f);FO(G(G(f,b),B(44)),c);return N(f);}
var N2=F(0);
var FX=F(Ey);
var Jt=F(FX);
var Us=F(Jt);
var KL=F(En);
var Uq=F(KL);
var Ur=F(GJ);
var Fm=F(0);
var Uo=F();
var Ot=F(0);
var Up=F();
var WN=F();
function KH(){var a=this;C.call(a);a.iM=null;a.o_=null;a.rj=null;a.to=null;a.lX=null;a.kQ=null;a.pn=null;a.mx=null;a.be=null;a.no=null;a.sV=null;}
function ATR(a,b,c,d,e,f,g,h,i,j,k){var l=new KH();ME(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function ME(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=j.data;a.iM=b;a.o_=c;a.rj=d;a.to=e;a.lX=f;a.kQ=g;a.pn=h;a.mx=i;a.no=j;a.sV=k;if(m.length>=15){a.be=l;return;}b=new BB;U(b);J(b);}
function MM(){var a=this;C.call(a);a.hd=0;a.lt=0;a.hZ=0;a.fP=0;a.go=null;}
function B1(a){return a.hd>=a.hZ?0:1;}
function BV(a){var b,c;Og(a);b=a.hd;a.fP=b;c=a.go;a.hd=b+1|0;return c.p4(b);}
function PM(a){var b,c,d;if(a.fP<0){b=new DK;U(b);J(b);}Og(a);a.go.su(a.fP);a.lt=a.go.cq;c=a.fP;d=a.hd;if(c<d)a.hd=d-1|0;a.hZ=a.hZ-1|0;a.fP=(-1);}
function Og(a){var b;if(a.lt>=a.go.cq)return;b=new K9;U(b);J(b);}
var YN=F();
function UK(){C.call(this);this.iR=null;}
function AMs(a,b){var c,d,e,f,g;c=a.iR;d=c.js;if(d!==null){e=b.o;f=e.a-d.a|0;g=e.b-d.b|0;e=c.hT;e.a=GU(0,e.a+f|0,c.gg.a-c.hc.a|0);c=a.iR;d=c.hT;d.b=GU(0,d.b+g|0,c.gg.b-c.hc.b|0);}a.iR.js=b.o;return 1;}
var YX=F();
function JR(){var a=this;C.call(a);a.hH=null;a.fB=null;}
function HI(){var a=this;JR.call(a);a.kB=0;a.eX=null;}
function TU(){C.call(this);this.qx=null;}
function AHy(a,b){Hj(a.qx,b);}
function US(){C.call(this);this.ib=null;}
function AOB(a){return a.ib;}
function Cc(){Cq.call(this);this.ky=null;}
var ATS=null;var ATT=null;var ATU=null;var ATV=null;var ATW=null;var ATX=null;var ATY=null;var ATZ=null;var AT0=null;var AT1=null;var AT2=null;var AT3=null;var AT4=null;var AT5=null;var AT6=null;var AS7=null;function X7(){X7=Br(Cc);AOb();}
function Di(a,b,c){var d=new Cc();R$(d,a,b,c);return d;}
function AOd(a,b,c,d){var e=new Cc();AAd(e,a,b,c,d);return e;}
function R$(a,b,c,d){X7();Dz(a,b,c);a.ky=Sj(d,null);}
function AAd(a,b,c,d,e){X7();Dz(a,b,c);a.ky=Sj(d,e);}
function AOb(){var b;b=new Cc;Dl();R$(b,B(313),0,ASY);ATS=b;ATT=Di(B(314),1,Cu(204,120,50));ATU=Di(B(315),2,Bs(B(316)));ATV=Di(B(48),3,Bs(B(317)));ATW=Di(B(318),4,Bs(B(319)));ATX=Di(B(320),5,Cu(188,63,60));ATY=Di(B(321),6,Bs(B(322)));ATZ=Di(B(49),7,Bs(B(323)));AT0=Di(B(324),8,Bs(B(325)));AT1=AOd(B(326),9,ASY,Cu(52,65,52));AT2=AOd(B(327),10,Bs(B(328)),Bs(B(329)));AT3=Di(B(330),11,Bs(B(331)));AT4=Di(B(332),12,Bs(B(333)));AT5=Di(B(334),13,Bs(B(335)));b=Di(B(336),14,Bs(B(337)));AT6=b;AS7=H(Cc,[ATS,ATT,ATU,ATV,ATW,
ATX,ATY,ATZ,AT0,AT1,AT2,AT3,AT4,AT5,b]);}
function IG(){var a=this;C.call(a);a.qq=null;a.qr=null;}
function Sj(a,b){var c=new IG();AD9(c,a,b);return c;}
function AD9(a,b,c){a.qq=b;a.qr=c;}
function WJ(){var a=this;C.call(a);a.dz=null;a.cf=null;a.br=null;a.gh=null;a.g9=null;}
function UU(a,b,c,d){var e,f,g,h;e=a.cf;f=D9(e.gi,c)?0:1;g=D9(e.gB,b)?0:1;h=d===e.il?0:1;if(f){e.gi=c;e.dA=null;Ww(e,0);}e.hw=!f&&!g&&!h?0:1;e.gB=b;e.il=d;Jf(a);}
function JB(a,b,c){var d;d=a.br;d.ip(b,c,d.dB);Jf(a);}
function Jf(a){var b,c,d,e;b=a.cf;b.E.a=a.br.E.a;b.dB=a.dz.bF;if(SO(b))c=0;else{b=a.cf;PS(b);d=GX(b.gw,b.il);Ww(b,FB(b.dA)+(d*2|0)|0);c=b.E.b;}b=a.cf.bA;e=a.br.bA;Bm(b,e.a,e.b-c|0);}
function UL(a){return a.br.E;}
var KR=F(0);
function Qd(){C.call(this);this.nP=null;}
function AJQ(a,b){return PN(a.nP,b);}
var XK=F();
function Cb(b,c){return C6(b*c);}
var WY=F();
function Yc(b,c,d,e,f,g){g.a=(c.a-f|0)-f|0;g.b=(c.b-f|0)-f|0;BJ(b,d.a+f|0,d.b+f|0,g,e);}
function UV(b,c,d,e,f,g){g.a=c.a;g.b=f;BJ(b,d.a,d.b,g,e);BJ(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;BJ(b,d.a,d.b+f|0,g,e);BJ(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function TN(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;BJ(b,j,k,i,h);BJ(b,j,k,i,h);BJ(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;BJ(b,l,j,i,h);BJ(b,l,j,i,h);BJ(b,l+g|0,j+g|0,i,h);}
function Mx(){var a=this;C.call(a);a.bT=null;a.io=null;a.ec=null;a.dq=0;a.d_=0;a.f2=null;a.ft=null;a.fw=0;}
function RP(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dq;i=Ba(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bb(i,e))a:{while(true){if(d<=e){j=d;break a;}Ej(c);j=d+(-1)|0;b=Dc(d);d=Ba(j,a.d_)%a.ec.b|0;FR(a,c,b,a.fw,g);Hw(a.bT,c,0,d);if(!(j%a.dq|0))break;d=j;}}else{Ej(b);k=a.dq-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FR(a,b,Dc(j),Ba(a.d_,k)+a.fw|0,g);k=k+(-1)|0;j=h;}CL(a.bT,b);j=Bb(i,e);}return j;}k=a.dq;h=Ba(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Y(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Ej(c);b=Dc((d+f|0)+1|0);j=d+
1|0;d=Ba(d,a.d_)%a.ec.b|0;FR(a,c,b,a.fw,g);Hw(a.bT,c,0,d);if(!(j%a.dq|0))break;d=j;}}else{Ej(b);d=0;while(d<a.dq){h=h+1|0;FR(a,b,Dc((h>e?h-f|0:h)+f|0),Ba(a.d_,d)+a.fw|0,g);d=d+1|0;}CL(a.bT,b);j=Y(i,e);}return j;}
function In(a,b,c,d,e,f){Hx(b,a.io.a+d.a|0,c+d.b|0,a.f2,a.ft,a.bT,e,f,0.0);}
function FR(a,b,c,d,e){Cd(b,c,a.ec.a-20.0*e,d);}
var Fv=F(HU);
var VV=F(Es);
function Pl(){C.call(this);this.l6=null;}
function AKJ(a,b){var c,d;c=a.l6;d=c.dh+1|0;c.dh=d;c=new M;O(c);G(G(S(c,d),B(338)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function S5(){C.call(this);this.oy=null;}
function ANd(a){var b,c;b=a.oy;c=new M;O(c);G(G(G(c,B(339)),b),B(340));$rt_globals.console.info($rt_ustr(N(c)));}
var Xe=F();
function G_(b,c,d){var e,f;a:{e=b.a;f=c.a;if(e>=f&&e<(f+d.a|0)){e=b.b;f=c.b;if(e>=f&&e<(f+d.b|0)){e=1;break a;}}e=0;}return e;}
function NF(b,c,d,e){var f;a:{f=b.a;if(f>=c&&f<(c+e.a|0)){c=b.b;if(c>=d&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
var K9=F(Bn);
var Lo=F(DG);
var AT7=0.0;var AT8=null;function AAA(){AT7=$rt_globals.NaN;AT8=E($rt_floatcls());}
var Fh=F();
var AR$=null;var ASa=null;var ASb=null;var AR_=null;var AR9=null;function Zt(){AR$=EQ([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);ASa=AEC([X(1),X(10),X(100),X(1000),X(10000),X(100000),X(1000000),X(10000000),X(100000000),X(1000000000),B9(1410065408, 2),B9(1215752192, 23),B9(3567587328, 232),B9(1316134912, 2328),B9(276447232, 23283),B9(2764472320, 232830),B9(1874919424, 2328306),B9(1569325056, 23283064),B9(2808348672, 232830643)]);ASb=AEC([X(1),X(10),X(100),X(10000),X(100000000),B9(1874919424, 2328306)]);AR_
=new S4;AR9=new Um;}
var Jj=F();
var AT9=null;var AT$=null;function Z8(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.mP=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.jY=0;c.jF=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(EW(CS(X(e),X(8388608)),Ec)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AAc(AT$,f);if(h<0)h=( -h|0)-2|0;i=AT$.data;j=9+(f-i[h]|0)|0;k=X(e);l=AT9.data;m=Eq(DU(BM(k,X(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=Eq(DU(BM(k,X(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<( -g|0);o
=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BH(q,r);e=e>0?Ba(m/q|0,q):e<0?Ba(m/r|0,r)+r|0:Ba((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.jY=e;c.jF=h-50|0;}
function YI(){var b,c,d,e,f,g,h,i;AT9=BF(100);AT$=BF(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AT9.data;g=d+50|0;f[g]=$rt_udiv(e,20);AT$.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Eq(Cm(X(h),Ga(BM(X(b&((1<<i)-1|0)),X(10)),i)));f=AT9.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AT$.data[i]=c;d=d+1|0;}}
function Um(){var a=this;C.call(a);a.jY=0;a.jF=0;a.mP=0;}
function Lh(){var a=this;C.call(a);a.uc=null;a.lR=0.0;a.ux=0.0;a.eC=null;a.gu=null;a.k9=null;a.eJ=0;}
function ABR(a,b){var c;if(b!==null){a.gu=b;return a;}c=new BB;Bj(c,B(341));J(c);}
function AAj(a,b){var c;if(b!==null){a.k9=b;return a;}c=new BB;Bj(c,B(341));J(c);}
function O2(a,b,c,d){var e,f,g,$$je;e=a.eJ;if(!(e==2&&!d)&&e!=3){a.eJ=d?2:1;while(true){try{f=ABT(a,b,c);}catch($$e){$$je=D5($$e);if($$je instanceof Bn){g=$$je;J(AFo(g));}else{throw $$e;}}if(GK(f))return f;if(HK(f)){if(d&&Dy(b)){g=a.gu;GO();if(g===ASJ)return DL(B2(b));if(B2(c)<=I(a.eC))return ASM;Er(b,b.N+B2(b)|0);if(a.gu===ASK)Jm(c,a.eC);}return f;}if(Pz(f)){g=a.gu;GO();if(g===ASJ)return f;if(g===ASK){if(B2(c)<I(a.eC))return ASM;Jm(c,a.eC);}Er(b,b.N+Jp(f)|0);}else if(Le(f)){g=a.k9;GO();if(g===ASJ)break;if(g
===ASK){if(B2(c)<I(a.eC))return ASM;Jm(c,a.eC);}Er(b,b.N+Jp(f)|0);}}return f;}b=new DK;U(b);J(b);}
function XV(a,b){var c,d,e,f;c=a.eJ;if(c&&c!=3){b=new DK;U(b);J(b);}if(!B2(b))return ACh(0);if(a.eJ)a.eJ=0;d=ACh(Bb(8,B2(b)*a.lR|0));while(true){e=O2(a,b,d,0);if(HK(e))break;if(GK(e))d=Rt(a,d);if(!JY(e))continue;Uh(e);}b=O2(a,b,d,1);if(JY(b))Uh(b);while(true){f=a.eJ;if(f!=3&&f!=2)break;a.eJ=3;if(HK(ASN)){d.db=d.N;d.N=0;d.gY=(-1);return d;}d=Rt(a,d);}b=new DK;U(b);J(b);}
function Rt(a,b){var c,d,e;c=b.gQ;d=Xu(c,Bb(8,c.data.length*2|0));e=ZC(d,0,d.data.length);Er(e,b.N);return e;}
function MP(){C.call(this);this.s0=null;}
function AK2(a,b){DC(a.s0,b);}
function UB(){C.call(this);this.ny=null;}
function AOP(a,b){var c,d;c=a.ny;d=c.dh+1|0;c.dh=d;c=b.g2;b=new M;O(b);G(G(S(b,d),B(342)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Zc=F(CO);
function O8(){C.call(this);this.rp=null;}
function ACQ(a){MX(a.rp);}
function S4(){var a=this;C.call(a);a.kw=Ec;a.jr=0;a.mt=0;}
var DK=F(Bn);
var AAv=F(Es);
function AFo(a){var b=new AAv();AJr(b,a);return b;}
function AJr(a,b){a.iy=1;a.i3=1;a.kh=b;}
var Pv=F();
function ANT(a,b){AAC(b);}
function ABA(){var a=this;C.call(a);a.bB=0;a.bI=0;}
function ED(a,b){var c=new ABA();AII(c,a,b);return c;}
function AII(a,b,c){a.bB=b;a.bI=c;}
function Xc(a,b){var c;if(a===b)return 1;if(b!==null&&Cx(a)===Cx(b)){c=b;return a.bB==c.bB&&a.bI==c.bI?1:0;}return 0;}
function ALj(a,b){var c;b=b;c=BH(a.bB,b.bB);if(!c)c=BH(a.bI,b.bI);return c;}
function M2(){var a=this;C.call(a);a.rv=null;a.rx=null;a.rw=0;}
function ADt(a,b){var c,d,e;c=a.rv;d=a.rx;e=a.rw;d.m(Wi(c,(b.o.a+e|0)-c.dy.a|0));}
function M0(){var a=this;C.call(a);a.oH=null;a.oG=null;a.oI=0;}
function AFp(a,b){var c,d,e;c=a.oH;d=a.oG;e=a.oI;d.m(NJ(c,(b.o.b+e|0)-c.dy.b|0));}
function TS(){var a=this;C.call(a);a.tV=null;a.tU=null;}
function TQ(){C.call(this);this.pC=null;}
function AEl(a,b){var c;c=a.pC;Sb(c,Fl(c,b.o));JX(c.p,c.x,c.w);Gx(c);}
function SA(){C.call(this);this.os=null;}
function AN2(a,b){var c,d,e;c=a.os;if(c.e.h.cn==c.km){b=b.data;d=Ei(b[0]);e=Fr(b[1]);ZH(c.e.h,d,e);Ox(c.e.h);}}
function JF(){var a=this;Lh.call(a);a.mY=null;a.qD=null;}
function ABT(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.mY;e=0;f=0;g=a.qD;a:{b:{while(true){if((e+32|0)>f&&Dy(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B2(b)+k|0;h=j.length;f=Y(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bx;c=new M;O(c);S(G(S(G(c,B(343)),l),B(95)),h);Bj(b,N(c));J(b);}if(B2(b)<m){b=new K7;U(b);J(b);}if(m<0){b=new Bx;c=new M;O(c);G(S(G(c,B(96)),m),B(97));Bj(b,N(c));J(b);}n=b.N;h=n+b.ka|0;e=0;while(e<m){o=k+1|0;i=b.kP.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.N=n+m|0;e=0;}if(!Dy(c)){p=!Dy(b)&&e>=f?ASN:ASM;break a;}i=g.data;n=B2(c);o=i.length;n=Y(n,o);q=new T2;q.pB=b;q.rz=c;p=AB5(a,d,e,f,g,0,n,q);e=q.sJ;if(p===null&&0==q.jt)p=ASN;k=q.jt;h=0;if(c.lB){b=new Im;U(b);J(b);}if(B2(c)<k)break;if(h>o){b=new Bx;c=new M;O(c);BC(S(G(S(G(c,B(98)),h),B(92)),o),41);Bj(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bx;c=new M;O(c);S(G(S(G(c,B(100)),l),B(95)),o);Bj(b,N(c));J(b);}if(k<0){b=new Bx;c=new M;O(c);G(S(G(c,B(96)),k),B(97));Bj(b,N(c));J(b);}o=c.N;m=0;while(m<k){l=o+
1|0;n=h+1|0;Rb(c,o,i[h]);m=m+1|0;o=l;h=n;}c.N=c.N+k|0;if(p!==null)break a;}b=new Ht;U(b);J(b);}b=new Bx;c=new M;O(c);BC(S(G(S(G(c,B(98)),k),B(92)),h),41);Bj(b,N(c));J(b);}Er(b,b.N-(f-e|0)|0);return p;}
var Sp=F(JF);
function AB5(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(JI(h,2))break a;i=ASN;break a;}c=k+1|0;n=j[k];if(!Fo(a,n)){c=c+(-2)|0;i=DL(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(JI(h,3))break a;i=ASN;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Fo(a,n))break b;if(!Fo(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Ln(p)){c=k+(-3)|0;i=DL(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DL(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(JI(h,4))break a;i=ASN;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B2(h.rz)<2?0:1)break a;i=ASM;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Fo(a,n))break c;if(!Fo(a,o))break c;if(!Fo(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=HC(r);m=c+1|0;j[c]=H6(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DL(1);break a;}c=k+(-3)|0;i
=DL(1);}h.sJ=c;h.jt=f;return i;}
function Fo(a,b){return (b&192)!=128?0:1;}
function O1(){C.call(this);this.qk=null;}
function AEw(a,b){var c,d;c=a.qk;d=c.dh+1|0;c.dh=d;c=new M;O(c);G(G(S(c,d),B(344)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function T_(){C.call(this);this.v7=null;}
function AJ9(a){Bu(Bw(),B(345));}
function PE(){C.call(this);this.mk=null;}
function ACS(a,b){a.mk.m(Fj(b));}
function Tv(){C.call(this);this.qF=null;}
function AOo(a,b){a.qF.q();}
var ZF=F();
function Q$(){C.call(this);this.sE=null;}
function ADI(a,b){var c,d,e,f;c=a.sE;d=Cs(b);e=new M;O(e);G(G(e,B(346)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new Rs;d.uq=c;d.n8=b;e=new Rr;e.tk=c;f=new Tq;f.ug=e;e=new UE;e.mQ=d;c=b.eI;if(c!==null)c.arrayBuffer().then(Bk(e,"f"),Bk(f,"f"));else{b=b.gm.getFile();c=new UI;c.rr=e;c.rs=f;b.then(Bk(c,"f"),Bk(f,"f"));}}
function Q9(){C.call(this);this.uV=null;}
function AEm(a,b){var c;b=Cs(b);c=new M;O(c);G(G(c,B(347)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Qt=F();
function AGO(a,b){b=b;b.bT=CJ(b.bT,null);}
function RR(){C.call(this);this.lN=null;}
function AIP(a){Dv(a.lN);}
var Jd=F(DG);
var AT_=0.0;var AUa=null;function X1(){AT_=$rt_globals.NaN;AUa=E($rt_doublecls());}
var KO=F();
var AUb=null;var AUc=null;function Zq(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mt=EW(CS(d,B9(0, 2147483648)),Ec)?0:1;e=CS(d,B9(4294967295, 1048575));f=Eq(Ga(d,52))&2047;if(EW(e,Ec)&&!f){c.kw=Ec;c.jr=0;return;}g=0;if(f)e=APW(e,B9(0, 1048576));else{e=E7(e,1);while(EW(CS(e,B9(0, 1048576)),Ec)){e=E7(e,1);f=f+(-1)|0;g=g+1|0;}}h=AAc(AUc,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AUc.data[h]|0)|0;j=Qe(e,AUb.data[h],i);if(Ys(j,B9(2808348672, 232830643))){h=h+1|0;i=12+(f-AUc.data[h]|0)|0;j=Qe(e,AUb.data[h],
i);}k=DU(AUb.data[h],(63-i|0)-g|0);l=Ga(Cm(k,X(1)),1);m=Ga(k,1);if(EW(e,B9(0, 1048576)))m=Ga(m,2);n=X(10);while(OL(n,m)){n=BM(n,X(10));}if(Ys(L$(j,n),Dd(m,X(2))))n=Dd(n,X(10));o=X(1);while(OL(o,l)){o=BM(o,X(10));}if(AFB(JG(o,L$(j,o)),Dd(l,X(2))))o=Dd(o,X(10));f=AQg(n,o);e=f>0?BM(Dd(j,n),n):f<0?Cm(BM(Dd(j,o),o),o):BM(Dd(Cm(j,Dd(o,X(2))),o),o);if(Ys(e,B9(2808348672, 232830643))){h=h+1|0;e=Dd(e,X(10));}else if(AFS(e,B9(1569325056, 23283064))){h=h+(-1)|0;e=BM(e,X(10));}c.kw=e;c.jr=h-330|0;}
function Qe(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CS(b,X(65535));f=CS(DU(b,16),X(65535));g=CS(DU(b,32),X(65535));h=CS(DU(b,48),X(65535));i=CS(c,X(65535));j=CS(DU(c,16),X(65535));k=CS(DU(c,32),X(65535));l=CS(DU(c,48),X(65535));m=Cm(Cm(BM(k,e),BM(j,f)),BM(i,g));n=Cm(Cm(Cm(BM(l,e),BM(k,f)),BM(j,g)),BM(i,h));o=Cm(Cm(E7(BM(l,h),32+d|0),E7(Cm(BM(l,g),BM(k,h)),16+d|0)),E7(Cm(Cm(BM(l,f),BM(k,g)),BM(j,h)),d));return Cm(d>16?Cm(o,E7(n,d-16|0)):Cm(o,DU(n,16-d|0)),DU(m,32-d|0));}
function Y6(){var b,c,d,e,f,g,h,i,j,k;AUb=AQ_(660);AUc=BF(660);b=B9(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AUb.data;g=d+330|0;f[g]=Fp(e,X(80));AUc.data[g]=c;e=Fp(e,X(10));h=MH(e,X(10));while(OL(e,b)&&EW(CS(e,B9(0, 2147483648)),Ec)){e=E7(e,1);c=c+1|0;h=E7(h,1);}e=Cm(e,Dd(h,X(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AFB(e,B9(3435973836, 214748364))){e=Ga(e,1);j=j+1|0;d=d+(-1)|0;}k=BM(e,X(10));b=j<=0?k:Cm(k,Ga(BM(CS(b,X((1<<j)-1|0)),X(10)),j));f=AUb.data;g=(330-i|0)-1|0;f[g]=Fp(b,X(80));AUc.data[g]
=d;i=i+1|0;}}
function Pt(){C.call(this);this.ut=null;}
function AKG(a){Bu(Bw(),B(348));}
function L8(){C.call(this);this.qQ=null;}
function APc(a,b){var c,d;c=a.qQ;d=new Bn;Bj(d,$rt_str(b.message));c.m(d);}
function Od(){var a=this;C.call(a);a.lS=null;a.lT=null;}
function ADo(a,b,c,d){var e,f,g,h;b=a.lS;e=a.lT;Sf(b,e);if(LP(d)){f=d.c$;g=e.cE;c=e.ev;h=new Bl;f=f.s;Yp(h,(f.a-(g*3|0)|0)-c|0,(f.b-g|0)-c|0);Sr(b,h,d.jN,e);}}
function SP(){var a=this;C.call(a);a.pu=0;a.lP=0;}
function Fu(a,b){return ON(a.pu,b,a.lP);}
function Et(){var a=this;C.call(a);a.bA=null;a.E=null;a.dB=0.0;}
function APz(){var a=new Et();KN(a);return a;}
function KN(a){a.bA=new Bl;a.E=new Bl;}
function AKl(a){}
function OZ(a,b,c,d){if(!Kr(a.bA,b)){a.nf(b);Dt(a.bA,b);}if(!Kr(a.E,c))Dt(a.E,c);if(a.dB!==d)a.dB=d;}
function KJ(a,b){return G_(b,a.bA,a.E);}
function XW(a,b){var c,d,e,f;c=a.bA;d=c.a;e=c.b;f=a.E;EC();BJ(b,d,e,f,ATg);}
function AM_(a,b){return 0;}
function AF7(a,b){}
function AMR(a,b){}
function AOW(a,b,c){}
function ANp(a,b,c,d){return 0;}
function AFG(a,b,c){return 0;}
function ANM(a,b,c){return 0;}
function AJK(a,b){return 0;}
function AFZ(a,b,c,d){return 0;}
function Ki(){var a=this;Et.call(a);a.de=null;a.cL=null;}
function TZ(a,b){a.cL.a=Vw(a,b);}
function P6(a,b){a.cL.b=PR(a,b);}
function PR(a,b){return Bb(0,Y(b,a.de.b-a.E.b|0));}
function Vw(a,b){return Bb(0,Y(b,a.de.a-a.E.a|0));}
function UQ(){var a=this;Ki.call(a);a.hu=null;a.kG=null;a.ov=0.0;}
function Yq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;XW(a,b);c=a.bA;TY(b,c.a,c.b,a.E);d=Cb(30.0,a.dB);c=a.cL;e=c.a;f=Ba(e/d|0,d);g=c.b;h=Ba(g/d|0,d);c=a.E;i=Ba(((e+c.a|0)-1|0)/d|0,d);j=Ba(((g+c.b|0)-1|0)/d|0,d);c=a.kG;c.b=d;c.a=d;a.hu.bq=1.0;while(h<=j){e=a.bA.b-a.cL.b|0;g=f;while(g<=i){k=a.bA.a-a.cL.a|0;l=((37*g|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ABJ(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;GM(n,0.75,a.ov,a.hu);BJ(b,k+g|0,e+h|0,a.kG,a.hu);g=g+d|0;}h=h+d|0;}UJ(b);}
function AIk(a,b){var c,d;c=Bw();b=Cs(b);d=new M;O(d);G(G(d,B(349)),b);Bu(c,N(d));}
function Pi(){var a=this;Et.call(a);a.kM=null;a.p2=null;a.r6=null;a.cp=null;a.dL=null;a.dR=null;a.ef=null;a.kY=0.0;}
function AFf(a,b,c,d){OZ(a,b,c,d);OZ(a.cp,b,c,d);if(d!==0.0){b=a.cp;c=b.de;b=b.E;Bm(c,b.a*2|0,b.b*2|0);b=a.cp;c=b.cL;c.a=Vw(b,c.a);c=b.cL;c.b=PR(b,c.b);if(a.cp.de.a<=a.E.a?0:1)JD(a);else a.dR=null;if(a.cp.de.b<=a.E.b?0:1)Kh(a);else a.dL=null;}}
function JD(a){var b,c,d,e,f,g;b=a.dR;if(b===null){b=G4();a.dR=b;}c=a.cp;d=c.cL.a;e=a.bA;f=e.a;g=a.E;LK(b,d,f,g.a,c.de.a,e.b+g.b|0,Cb(a.kY,a.dB));}
function Kh(a){var b,c,d,e,f,g;b=a.dL;if(b===null){b=G4();a.dL=b;}c=a.cp;d=c.cL.b;e=a.bA;f=e.b;g=a.E;HY(b,d,f,g.b,c.de.b,e.a+g.a|0,Cb(a.kY,a.dB));}
function AMp(a,b){var c;Yq(a.cp,b);if(!(a.dL===null&&a.dR===null)){Ct(b,1);c=a.dL;if(c!==null)FG(c,b);c=a.dR;if(c!==null)FG(c,b);c=a.dL;if(c!==null)FY(c,b);c=a.dR;if(c!==null)FY(c,b);Ct(b,0);}}
function Mh(a,b){var c,d;a:{b:{c=a.dL;if(!(c!==null&&Ib(c,b))){c=a.dR;if(c===null)break b;if(!Ib(c,b))break b;}d=1;break a;}d=0;}return d;}
function AHd(a,b,c,d){return Mh(a,b.o)?1:0;}
function AH$(a,b,c){var d;if(a.ef===null){d=a.dL;if(d!==null)a.ef=E0(d,b.o,a.p2,1);}if(a.ef===null){d=a.dR;if(d!==null)a.ef=E0(d,b.o,a.r6,0);}return a.ef!==null?1:0;}
function AGQ(a,b,c){if(a.ef!==null){a.ef=null;return 1;}return Mh(a,b.o)?1:0;}
function AH4(a,b){var c,d,e;c=a.ef;if(c!==null){c.m(b);return 1;}c=a.dL;d=c!==null&&E$(c,b.o,a.kM)?1:0;c=a.dR;e=c!==null&&E$(c,b.o,a.kM)?1:0;return !d&&!e?0:1;}
function AMC(a,b,c,d){var e,f;if(!KJ(a,b.o))return 0;e=Cb(d*0.25,a.dB);f=Cb(c*0.25,a.dB);if(b.bw){f=f+e|0;e=0;}if(e){b=a.cp;P6(b,b.cL.b+e|0);Kh(a);}if(f){b=a.cp;TZ(b,b.cL.a+f|0);JD(a);}return 1;}
function Sk(){var a=this;Et.call(a);a.gw=null;a.gB=null;a.gi=null;a.dA=null;a.il=0.0;a.hw=0;a.dv=null;a.kZ=null;}
function K5(a){var b;b=a.E;return b.a&&b.b?0:1;}
function SO(a){var b,c;a:{if(a.gi!==null){b=a.gB;if(b!==null&&!E9(b)){c=0;break a;}}c=1;}return c;}
function Ww(a,b){a.E.b=b;}
function Or(a,b,c,d,e){var f,g;f=a.gw.jE;Bm(f,d,a.E.b);g=a.bA;BJ(b,g.a+c|0,g.b,f,e);}
function PS(a){if(a.dA===null)a.dA=HV(a.gw,a.gi);}
function SU(){C.call(this);this.m1=null;}
function AJh(a,b){var c,d;c=a.m1;d=Fu(b,c.cp.de.b-c.E.b|0);P6(c.cp,d);Kh(c);}
function SV(){C.call(this);this.pQ=null;}
function AHw(a,b){var c,d;c=a.pQ;d=Fu(b,c.cp.de.a-c.E.a|0);TZ(c.cp,d);JD(c);}
var QS=F(DG);
var AUd=null;function Fp(b,c){return Long_udiv(b, c);}
function MH(b,c){return Long_urem(b, c);}
function Kv(b,c){return Long_ucompare(b, c);}
function Y4(){AUd=E($rt_longcls());}
function Sx(){var a=this;C.call(a);a.mu=null;a.mv=null;a.ms=null;}
function ALt(a){var b,c,d,e,f;b=a.mu;c=a.mv;d=a.ms;e=Bw();f=new M;O(f);b=G(f,b);BC(b,9);b=G(b,c);BC(b,9);G(b,d);Bu(e,N(f));}
var E2=F(Bn);
function MS(){var a=this;C.call(a);a.l3=null;a.ow=null;a.rB=0;a.sC=0;}
function K0(a,b){return B2(a.ow)<b?0:1;}
var ABD=F();
function To(b,c,d,e){var f,g;f=b.next();g=new V_;g.mc=b;g.mb=c;g.mf=d;g.md=e;f.then(Bk(g,"f"),Bk(d,"f"));}
function Xx(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AB6(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DV()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new V6;f.o8=b;f.o9=d;d.addEventListener("change",Bk(f,"handleEvent"));d.click();}
function XE(b,c){var d;if(c.isFile?1:0)b.m(W6(c.file()));else{c=c.createReader();d=new VU;d.rN=b;c.readEntries(Bk(d,"f"));}}
function RI(){var a=this;C.call(a);a.bo=null;a.gV=null;a.S=null;}
function H4(a){return a.gV.e4.h$;}
function Nj(a){var b;b=new Oi;b.ou=a;return b;}
function ACC(a){var b,c,d,e,f,g;b=R(Dw,4);c=b.data;d=a.S.bm.be.X;e=a.bo;BI(e);f=new UC;f.rl=e;c[0]=D$(B(350),d,f);e=a.S.bm.be.X;f=a.bo;BI(f);g=new UG;g.mO=f;c[1]=D$(B(351),e,g);e=a.S.bm.be.X;f=a.bo;BI(f);g=new UF;g.qj=f;c[2]=D$(B(352),e,g);e=a.S.bm.be.X;f=a.bo;BI(f);g=new UD;g.tg=f;c[3]=D$(B(353),e,g);return GS(b);}
function Iw(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{Dv(a.S.b3);d=a.bo.e;e=Db(d);f=GC(d);g=a.bo.d1;if(c===null)h=null;else{APH();switch(AUe.data[c.cO]){case 1:h=J7(g,e,f);break a;case 2:h=Ux(g,e,f);break a;default:}b=new Ee;U(b);J(b);}}c=a.bo;e=Fl(c,b);if(h!==null){f=c.e;i=e.bB;j=e.bI;e=new Un;e.uE=c;e.uD=b;h.qL(f,i,j,e,c.gz);}else{Wm(c.e.h,e);f=Eh(c.e.h.dQ,e);if(f!==null)Hd(c,f);else{e=Eh(c.e.h.eb,e);if(e!==null&&!D2(e))Rq(c.gI,b,e,c);else{e=c.gI;Dv(e.b3);f=e.b3;k=R(Dw,1);l=k.data;g=new Dw;BI(f);m=new VY;m.sY=f;Qk(g,
m,B(354),e.bm.be.sX);l[0]=g;Hk(f,b,GS(k),IH(e,c));}}}}
function Sl(){var a=this;C.call(a);a.u8=null;a.u9=null;a.u6=0;a.u7=0;}
var Wb=F();
function AMv(a,b){Xx(b);}
function Wa(){var a=this;C.call(a);a.oA=null;a.oz=null;}
function AFw(a,b){var c,d,e,f,g,h,i;c=a.oA;d=a.oz;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new O0;i.m5=c;i.m4=g;h.then(Bk(i,"f"),Bk(d,"f"));e=e+1|0;}}
var VB=F();
function AGU(a,b){Xx(b);}
function VA(){var a=this;C.call(a);a.nW=null;a.nX=null;}
function AHK(a,b){var c,d,e,f,g;c=a.nW;d=a.nX;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(By,1);g.data[0]=Fj(b.name);To(f,c,d,g);}
function T9(){var a=this;C.call(a);a.s$=null;a.s_=0.0;}
function I6(a,b){return J2(a.s$,b,a.s_*2.0+0.875);}
var Xg=F();
function Z4(b,c){return AAU(null,b,c,0);}
function AAU(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AHk(c);g=B8(f);h=B8(f);i=B8(f);j=R(Cv,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<Cz(b)){l=B8(f);c[k]=B0(b,k);l=4*l|0;f.fe=f.fe+l|0;}else c[k]=DA(Xk(f,d,0));k=k+1|0;}m=ACd(f,h);n=new Jq;n.dQ=HD();n.eb=HD();n.e6=Cj();if(!c.length){b=new BB;U(b);J(b);}n.B=j;n.fo=0;n.cn=0;n.cY=AQJ(m);b=n.dQ;e=0;while(e<i){R6(b,ED(B8(f),B8(f)),ED(B8(f),B8(f)));e=e+1|0;}b=n.dQ;m=n.eb;o=new Tr;Rn(o,b);while(IA(o)){Tc(o);b=o.gH;p=b.hH;q=b.fB;b=Cj();if(Eh(m,q)===null)R6(m,q,b);BW(Eh(m,
q),p);}if(m.jQ===null){b=new Oh;b.sP=m;m.jQ=b;}b=m.jQ;q=new PV;Rn(q,b.sP);while(IA(q)){Tc(q);b=q.gH.fB;m=ARY;c=R(C,b.j);d=c.data;Hl(b,c);YC(c,m);e=0;g=d.length;while(e<g){m=d[e];Iu(b,e);b.b_.data[e]=m;e=e+1|0;}}N0(f);return n;}
function ZH(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AHk(c);g=B8(f);h=B8(f);i=B8(f);j=B8(f);k=MQ(b,g);l=MQ(b,h);m=(H5(B0(b,k.a),k.b)).data[0].n;e=(H5(B0(b,l.a),l.b)).data[1].n;n=0;o=i-1|0;while(n<i){p=Xk(f,d,g);if(!n)p=KZ(m,p);if(n==o)p=KZ(p,e);q=k.a+n|0;r=DA(p);b.B.data[q]=r;n=n+1|0;}r=ACd(f,j);N0(f);if(!D2(r)){s=Ne(g,h,(-1));b=b.cY;f=APM(s,r);r=JQ(b,b.cF,s);if(r!==null){f=f.cF.bt;if(r===b.cF)b.cF=Bt(f,0);else if(r.dr!==null){b=new Nc;b.qB=r;Jh(f,b);q=Pn(r.dr.bt,
r);Eb(r.dr.bt,q);b=r.dr.bt;Os(b,q);if(!D2(f)){IE(b,b.j+f.j|0);j=f.j;g=b.j;h=g-1|0;while(h>=q){c=b.b_.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.j=g+j|0;f=BR(f);g=0;while(g<j){c=b.b_.data;h=q+1|0;c[q]=BV(f);g=g+1|0;q=h;}b.cq=b.cq+1|0;}}}}}
function Xk(b,c,d){var e,f,g,h,i,j,k,l;e=B8(b);f=R(B4,e);g=f.data;h=0;while(h<e){i=B8(b);j=B8(b);k=B8(b);l=B8(b);g[h]=Dr(I2(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ACd(b,c){var d,e;d=Cj();e=0;while(e<c){BW(d,Ne(B8(b),B8(b),B8(b)));e=e+1|0;}return d;}
var VH=F(0);
var ATp=null;function Xv(){ATp=null;}
function V6(){var a=this;C.call(a);a.o8=null;a.o9=null;}
function AGL(a,b){var c,d,e,f,g,h;b=a.o8;c=a.o9;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new L3;h.l9=b;h.l8=g;$rt_globals.setTimeout(Bk(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=W6(d.item(f));g=new LL;g.qm=b;g.qn=c;$rt_globals.setTimeout(Bk(g,"onTimer"),0);f=f+1|0;}}
function XB(){var a=this;C.call(a);a.iD=null;a.fe=0;}
function AHk(a){var b=new XB();AM9(b,a);return b;}
function AM9(a,b){a.iD=b;a.fe=0;}
function B8(a){var b,c;b=a.iD.data;c=a.fe;a.fe=c+1|0;return b[c];}
function N0(a){var b,c,d,e;if(a.fe!=a.iD.data.length){b=KY();c=a.iD.data.length;d=a.fe;e=new M;O(e);G(S(G(S(G(e,B(355)),c),B(356)),d),B(357));Bu(b,N(e));}}
var Im=F(E2);
var Ht=F(Bn);
var K7=F(Bn);
function Yk(){C.call(this);this.BW=null;}
function Ue(){var a=this;C.call(a);a.mT=null;a.mS=null;}
function ALO(a){var b,c;b=a.mT;c=a.mS;Lu(b.kl,c);}
function VM(){C.call(this);this.o5=null;}
function AMz(a,b){Hj(a.o5,b);}
var W0=F();
function QM(b,c){return b.data[c];}
function GF(){var a=this;C.call(a);a.es=0;a.e2=0;a.kk=null;a.i_=0;a.gF=null;}
function ADf(a,b,c,d,e,f){var g=new GF();AH0(g,a,b,c,d,e,f);return g;}
function AH0(a,b,c,d,e,f,g){a.es=b;a.e2=c;a.kk=Cn(f,g);a.i_=d;a.gF=e;}
function AAP(){FX.call(this);this.z1=null;}
function Oh(){Ey.call(this);this.sP=null;}
var Vs=F(Bx);
var Ps=F(0);
var MN=F(0);
var La=F();
function YM(){var a=this;La.call(a);a.BX=null;a.DO=0;a.Ct=0;a.Ac=0;}
function Qo(){var a=this;C.call(a);a.m8=null;a.m7=null;}
function AEp(a){var b,c;b=a.m8;c=a.m7;TJ();Iw(b,c,AUf);}
function Qn(){var a=this;C.call(a);a.nZ=null;a.n1=null;}
function ACZ(a){var b,c;b=a.nZ;c=a.n1;TJ();Iw(b,c,AUg);}
function Qm(){var a=this;C.call(a);a.s2=null;a.s3=null;}
function AIK(a){Iw(a.s2,a.s3,null);}
function Ql(){var a=this;C.call(a);a.mD=null;a.mE=null;}
function ANb(a){var b,c,d,e,f,g,h;b=a.mD;c=a.mE;d=Db(b.bo.e);e=GC(b.bo.e);d=MI(b.bo.d1,d,e);Dv(b.S.b3);b=b.bo;e=Fl(b,c);if(d!==null){f=b.e;g=e.bB;h=e.bI;e=new VQ;e.tx=b;e.ty=c;d.EF(f,g,h,1,e,b.gz);}}
function OC(){C.call(this);this.oV=null;}
function AMy(a){var b;b=a.oV;Dv(b.S.b3);Kq(b.bo,Nj(b),0);}
function OE(){C.call(this);this.rS=null;}
function AHP(a){var b;b=a.rS;Dv(b.S.b3);Kq(b.bo,Nj(b),1);}
function OF(){C.call(this);this.q3=null;}
function AEV(a){var b,c,d;b=a.q3;Dv(b.S.b3);c=H4(b);b=b.bo;BI(b);d=new RM;d.q9=b;PP(c,d,Xs(B(358)));}
function U0(){C.call(this);this.rg=null;}
function ADL(a){var b,c,d;b=a.rg;Dv(b.S.b3);c=H4(b);b=b.bo;BI(b);d=new P3;d.pf=b;K8(c,d);}
function YH(){var a=this;C.call(a);a.hI=null;a.jz=null;}
function ABX(){var a=this;C.call(a);a.v4=0;a.vS=0;a.qT=0;a.kd=0;}
var SC=F();
function AIh(a){}
function SD(){var a=this;C.call(a);a.ps=null;a.pt=null;}
function AND(a){var b,c,d,e,f,g;b=a.ps;c=a.pt;if(D9(c.hI,b.e.fH)){c=c.jz;Cy(b,c.kd,c.qT,0);BZ(b.p.bJ,c.kd,c.qT);BZ(b.p.by,c.vS,c.v4);}else{d=(Cl(b.d1.p0)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ce(b);b=new NX;b.nc=g;b.nd=c;BI(b);c=new OS;c.te=b;$rt_globals.setTimeout(Bk(c,"onTimer"),0);}}}
function SB(){var a=this;C.call(a);a.sh=null;a.si=null;}
function AFq(a){Hd(a.sh,a.si);}
function UP(){C.call(this);this.q0=null;}
function AJv(a,b,c){var d,e;c=a.q0;d=c.e.h;e=b.fc;b=c.et;V4(d.B.data[e],0,b);}
function RC(){C.call(this);this.na=null;}
function AIl(a){SM(a.na);}
function RD(){C.call(this);this.pZ=null;}
function AJt(a){ZU(a.pZ);}
function Nn(){C.call(this);this.ql=null;}
function AHi(a){var b;b=a.ql;Kt(b,b.dV.lv,b.fM+1|0);}
function Nm(){C.call(this);this.pc=null;}
function ANl(a){var b,c;b=a.pc;c=b.fM;if(c>7)Kt(b,b.dV.lv,c-1|0);}
function T5(){C.call(this);this.pO=null;}
function AFl(a){var b,c,d,e,f,g,h,i;b=a.pO;c=(b.gV.n7()).data;d=R(Dw,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new WU;i.or=b;i.oq=h;e[f]=ABQ(i,h,b.S.bm.be.X);f=f+1|0;}return d;}
function UC(){C.call(this);this.rl=null;}
function ALd(a){var b,c,d,e,f;b=a.rl.e.h;c=b.cn;d=new M;O(d);S(G(d,B(359)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fo;d=new M;O(d);S(G(d,B(360)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.cY;e=FE(F4(b));Q5(d,0,d.cF,e);b=Bw();f=b.jH;f.data[0]=10;Na(b,f,0,1);}
function UG(){C.call(this);this.mO=null;}
function AIs(a){Rx(a.mO);}
function UF(){C.call(this);this.qj=null;}
function ADF(a){Vx(a.qj);}
function UD(){C.call(this);this.tg=null;}
function AFt(a){Jk(a.tg);}
function WM(){var a=this;C.call(a);a.mK=null;a.mJ=null;}
function AIE(a){var b,c;b=a.mK;c=a.mJ;F0(b);c.q();}
function Ry(){C.call(this);this.sw=null;}
function AHA(a,b,c){FC(B0(a.sw.e.h,b.fc),0,I(c));}
function O0(){var a=this;C.call(a);a.m5=null;a.m4=null;}
function AFJ(a,b){a.m5.m(AAg(a.m4,b));}
var Ig=F(0);
function L3(){var a=this;C.call(a);a.l9=null;a.l8=null;}
function AHQ(a){XE(a.l9,a.l8);}
function LL(){var a=this;C.call(a);a.qm=null;a.qn=null;}
function ACK(a){a.qm.m(a.qn);}
function V_(){var a=this;C.call(a);a.mc=null;a.mb=null;a.mf=null;a.md=null;}
function AG9(a,b){var c,d,e,f,g,h,i;c=a.mc;d=a.mb;e=a.mf;f=a.md;if(!(b.done?1:0)){To(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new S_;c.nY=d;c.n0=g;c.n2=f;b.then(Bk(c,"f"),Bk(e,"f"));}else{h=f.data;c=g.values();b=Fj(g.name);i=h.length;f=C$(f,i+1|0);f.data[i]=b;To(c,d,e,f);}}}
function Gz(){var a=this;C.call(a);a.hP=0;a.qs=0;a.ha=null;a.gH=null;a.ob=null;a.is=null;}
function AUh(a){var b=new Gz();Rn(b,a);return b;}
function Rn(a,b){a.is=b;a.qs=b.ge;a.ha=null;}
function IA(a){var b,c;if(a.ha!==null)return 1;while(true){b=a.hP;c=a.is.cM.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hP=b+1|0;}return 0;}
function Yl(a){var b;if(a.qs==a.is.ge)return;b=new K9;U(b);J(b);}
function Tc(a){var b,c,d,e;Yl(a);if(!IA(a)){b=new WI;U(b);J(b);}b=a.ha;if(b!==null){c=a.gH;if(c!==null)a.ob=c;a.gH=b;a.ha=b.eX;}else{d=a.is.cM.data;e=a.hP;a.hP=e+1|0;b=d[e];a.gH=b;a.ha=b.eX;a.ob=null;}}
var Tr=F(Gz);
var PV=F(Gz);
function PT(){var a=this;C.call(a);a.f=null;a.c8=0;a.jx=null;a.mA=0;a.fT=0;a.ed=0;a.bn=0;a.ku=null;}
function I_(a){return a.f.bC;}
function Wz(a,b,c,d){var e,f,g,h,i,j;e=Cj();f=a.c8;g=0;if(c!=f)a.c8=c;a:{switch(b){case -1073741784:h=new QC;c=a.bn+1|0;a.bn=c;E6(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OJ;c=a.bn+1|0;a.bn=c;E6(h,c);break a;case -33554392:h=new RG;c=a.bn+1|0;a.bn=c;E6(h,c);break a;default:c=a.fT+1|0;a.fT=c;if(d!==null)h=AQT(c);else{h=new Fe;E6(h,0);g=1;}c=a.fT;if(c<=(-1))break a;if(c>=10)break a;a.jx.data[c]=h;break a;}h=new Wv;E6(h,(-1));}while(true){if(EJ(a.f)&&a.f.i==(-536870788))
{d=ANG(B6(a,2),B6(a,64));while(!C9(a.f)&&EJ(a.f)){i=a.f;j=i.i;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cr(d,Bc(i));i=a.f;if(i.Z!=(-536870788))continue;Bc(i);}i=J4(a,d);i.J(h);}else if(a.f.Z==(-536870788)){i=Gr(h);Bc(a.f);}else{i=N$(a,h);d=a.f;if(d.Z==(-536870788))Bc(d);}if(i!==null)BW(e,i);if(C9(a.f))break;if(a.f.Z==(-536870871))break;}if(a.f.jW==(-536870788))BW(e,Gr(h));if(a.c8!=f&&!g){a.c8=f;d=a.f;d.fD=f;d.i=d.Z;d.d8=d.em;j=d.cT;d.t=j+1|0;d.gL=j;EM(d);}switch(b){case -1073741784:break;case -536870872:d
=new L1;Ff(d,e,h);return d;case -268435416:d=new U1;Ff(d,e,h);return d;case -134217688:d=new PW;Ff(d,e,h);return d;case -67108824:d=new Ss;Ff(d,e,h);return d;case -33554392:d=new DB;Ff(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AQE(Bt(e,0),h);default:return AQf(e,h);}return Gr(h);}d=new Ik;Ff(d,e,h);return d;}
function AA$(a){var b,c,d,e,f,g,h;b=BF(4);c=(-1);d=(-1);if(!C9(a.f)&&EJ(a.f)){e=b.data;c=Bc(a.f);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BQ(3);b=e.data;b[0]=c&65535;f=a.f;g=f.Z;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bc(f);f=a.f;g=f.Z;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bc(f);return ANo(e,3);}return ANo(e,2);}if(!B6(a,2))return Yj(b[0]);if(B6(a,64))return ALx(b[0]);return AED(b[0]);}e=b.data;c=1;while(c<4&&!C9(a.f)&&EJ(a.f)){h=c+1|0;e[c]=Bc(a.f);c=h;}if(c==1){h=e[0];if(!(AUi.vy(h)==AUj?0:1))return Wr(a,e[0]);}if
(!B6(a,2))return ARu(b,c);if(B6(a,64)){f=new V9;M8(f,b,c);return f;}f=new SI;M8(f,b,c);return f;}
function N$(a,b){var c,d,e,f,g,h,i;if(EJ(a.f)&&!IZ(a.f)&&Jx(a.f.i)){if(B6(a,128)){c=AA$(a);if(!C9(a.f)){d=a.f;e=d.Z;if(!(e==(-536870871)&&!(b instanceof Fe))&&e!=(-536870788)&&!EJ(d))c=Lq(a,b,c);}}else if(!Nf(a.f)&&!T7(a.f)){f=new Ng;O(f);while(!C9(a.f)&&EJ(a.f)&&!Nf(a.f)&&!T7(a.f)){if(!(!IZ(a.f)&&!a.f.i)&&!(!IZ(a.f)&&Jx(a.f.i))){g=a.f.i;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bc(a.f);if(!Li(e))BC(f,e&65535);else HQ(f,Gb(e));}if(!B6(a,2)){c=new Qq;Dn(c);c.ci
=N(f);e=f.L;c.bz=e;c.jM=AJZ(e);c.kx=AJZ(c.bz);h=0;while(h<(c.bz-1|0)){P0(c.jM,L(c.ci,h),(c.bz-h|0)-1|0);P0(c.kx,L(c.ci,(c.bz-h|0)-1|0),(c.bz-h|0)-1|0);h=h+1|0;}}else if(B6(a,64))c=ARr(f);else{c=new Mw;Dn(c);c.gM=N(f);c.bz=f.L;}}else c=Lq(a,b,V8(a,b));}else{d=a.f;if(d.Z!=(-536870871))c=Lq(a,b,V8(a,b));else{if(b instanceof Fe)J(B5(B(31),d.bC,Nd(d)));c=Gr(b);}}a:{if(!C9(a.f)){e=a.f.Z;if(!(e==(-536870871)&&!(b instanceof Fe))&&e!=(-536870788)){f=N$(a,b);if(c instanceof CW&&!(c instanceof EN)&&!(c instanceof CN)
&&!(c instanceof El)){i=c;if(!f.bK(i.F)){c=new Vc;EB(c,i.F,i.d,i.g7);c.F.J(c);}}if((f.hb()&65535)!=43)c.J(f);else c.J(f.F);break a;}}if(c===null)return null;c.J(b);}if((c.hb()&65535)!=43)return c;return c.F;}
function Lq(a,b,c){var d,e,f,g,h;d=a.f;e=d.Z;if(c!==null&&!(c instanceof BS)){switch(e){case -2147483606:Bc(d);d=new WR;C4(d,c,b,e);Lv();c.J(AUk);return d;case -2147483605:Bc(d);d=new OB;C4(d,c,b,(-2147483606));Lv();c.J(AUk);return d;case -2147483585:Bc(d);d=new Oj;C4(d,c,b,(-536870849));Lv();c.J(AUk);return d;case -2147483525:f=new Mq;d=EU(d);g=a.ed+1|0;a.ed=g;It(f,d,c,b,(-536870849),g);Lv();c.J(AUk);return f;case -1073741782:case -1073741781:Bc(d);d=new Qi;C4(d,c,b,e);c.J(d);return d;case -1073741761:Bc(d);d
=new Po;C4(d,c,b,(-536870849));c.J(b);return d;case -1073741701:h=new TL;d=EU(d);e=a.ed+1|0;a.ed=e;It(h,d,c,b,(-536870849),e);c.J(h);return h;case -536870870:case -536870869:Bc(d);if(c.hb()!=(-2147483602)){d=new CN;C4(d,c,b,e);}else if(B6(a,32)){d=new Qj;C4(d,c,b,e);}else{d=new No;f=Om(a.c8);C4(d,c,b,e);d.jV=f;}c.J(d);return d;case -536870849:Bc(d);d=new Fz;C4(d,c,b,(-536870849));c.J(b);return d;case -536870789:h=new EV;d=EU(d);e=a.ed+1|0;a.ed=e;It(h,d,c,b,(-536870849),e);c.J(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bc(d);d=new WT;EB(d,f,b,e);f.d=d;return d;case -2147483585:Bc(d);c=new U$;EB(c,f,b,(-2147483585));return c;case -2147483525:c=new N8;Q2(c,EU(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bc(d);d=new Pk;EB(d,f,b,e);f.d=d;return d;case -1073741761:Bc(d);c=new S1;EB(c,f,b,(-1073741761));return c;case -1073741701:c=new PX;Q2(c,EU(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bc(d);d=AQL(f,b,e);f.d=d;return d;case -536870849:Bc(d);c
=new El;EB(c,f,b,(-536870849));return c;case -536870789:return APT(EU(d),f,b,(-536870789));default:}return c;}
function V8(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fe;while(true){a:{e=a.f;f=e.Z;if((f&(-2147418113))==(-2147483608)){Bc(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.c8=g;else{if(f!=(-1073741784))g=a.c8;c=Wz(a,f,g,b);e=a.f;if(e.Z!=(-536870871))J(B5(B(31),e.bC,e.cT));Bc(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bc(e);c
=ANa(0);break a;case -2147483577:Bc(e);c=new Nl;BK(c);break a;case -2147483558:Bc(e);c=new VP;h=a.bn+1|0;a.bn=h;ABz(c,h);break a;case -2147483550:Bc(e);c=ANa(1);break a;case -2147483526:Bc(e);c=new Vy;BK(c);break a;case -536870876:Bc(e);a.bn=a.bn+1|0;if(B6(a,8)){if(B6(a,1)){c=AP8(a.bn);break a;}c=APq(a.bn);break a;}if(B6(a,1)){c=AQl(a.bn);break a;}c=AQY(a.bn);break a;case -536870866:Bc(e);if(B6(a,32)){c=ARf();break a;}c=AQS(Om(a.c8));break a;case -536870821:Bc(e);i=0;c=a.f;if(c.Z==(-536870818)){i=1;Bc(c);}c
=J4(a,FM(a,i));c.J(b);e=a.f;if(e.Z!=(-536870819))J(B5(B(31),e.bC,e.cT));NP(e,1);Bc(a.f);break a;case -536870818:Bc(e);a.bn=a.bn+1|0;if(!B6(a,8)){c=new JE;BK(c);break a;}c=new MC;e=Om(a.c8);BK(c);c.pl=e;break a;case 0:j=e.em;if(j!==null)c=J4(a,j);else{if(C9(e)){c=Gr(b);break a;}c=Yj(f&65535);}Bc(a.f);break a;default:break b;}Bc(e);c=new JE;BK(c);break a;}h=(f&2147483647)-48|0;if(a.fT<h)J(B5(B(31),E3(e),Nd(a.f)));Bc(e);a.bn=a.bn+1|0;c=!B6(a,2)?APx(h,a.bn):B6(a,64)?AP9(h,a.bn):ARo(h,a.bn);a.jx.data[h].jw=1;a.mA
=1;break a;}if(f>=0&&!Gu(e)){c=Wr(a,f);Bc(a.f);}else if(f==(-536870788))c=Gr(b);else{if(f!=(-536870871)){b=new H9;c=!Gu(a.f)?VO(f&65535):a.f.em.cm();e=a.f;IC(b,c,e.bC,e.cT);J(b);}if(d){b=new H9;e=a.f;IC(b,B(31),e.bC,e.cT);J(b);}c=Gr(b);}}}if(f!=(-16777176))break;}return c;}
function FM(a,b){var c,d,e,f,g,h,i,j,$$je;c=ANG(B6(a,2),B6(a,64));Ef(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(C9(a.f))break a;h=a.f;b=h.Z;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cr(c,d);d=Bc(a.f);h=a.f;if(h.Z!=(-536870874)){d=38;break d;}if(h.i==(-536870821)){Bc(h);e=1;d=(-1);break d;}Bc(h);if(g){c=FM(a,0);break d;}if(a.f.Z==(-536870819))break d;VE(c,FM(a,0));break d;case -536870867:if(!g){b=h.i;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bc(h);h=a.f;i=h.Z;if(Gu(h))break c;if
(i<0){j=a.f.i;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Jx(i))break e;i=i&65535;break e;}catch($$e){$$je=D5($$e);if($$je instanceof DN){break b;}else{throw $$e;}}}try{BO(c,d,i);}catch($$e){$$je=D5($$e);if($$je instanceof DN){break b;}else{throw $$e;}}Bc(a.f);d=(-1);break d;}}if(d>=0)Cr(c,d);d=45;Bc(a.f);break d;case -536870821:if(d>=0){Cr(c,d);d=(-1);}Bc(a.f);j=0;h=a.f;if(h.Z==(-536870818)){Bc(h);j=1;}if(!e)W3(c,FM(a,j));else VE(c,FM(a,j));e=0;Bc(a.f);break d;case -536870819:if(d>=0)Cr(c,
d);d=93;Bc(a.f);break d;case -536870818:if(d>=0)Cr(c,d);d=94;Bc(a.f);break d;case 0:if(d>=0)Cr(c,d);h=a.f.em;if(h===null)d=0;else{ACw(c,h);d=(-1);}Bc(a.f);break d;default:}if(d>=0)Cr(c,d);d=Bc(a.f);}g=0;}J(B5(B(31),I_(a),a.f.cT));}J(B5(B(31),I_(a),a.f.cT));}if(!f){if(d>=0)Cr(c,d);return c;}J(B5(B(31),I_(a),a.f.cT-1|0));}
function Wr(a,b){var c,d,e;c=Li(b);if(B6(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AED(b&65535);}if(B6(a,64)&&b>128){if(c){d=new LQ;Dn(d);d.bz=2;d.oY=Gj(Gi(b));return d;}if(NY(b))return AJ5(b&65535);if(!Rk(b))return ALx(b&65535);return AHD(b&65535);}}if(!c){if(NY(b))return AJ5(b&65535);if(!Rk(b))return Yj(b&65535);return AHD(b&65535);}d=new DE;Dn(d);d.bz=2;d.fk=b;e=(Gb(b)).data;d.i2=e[0];d.hJ=e[1];return d;}
function J4(a,b){var c,d,e;if(!Z0(b)){if(!b.H){if(b.gr())return AG4(b);return ANc(b);}if(!b.gr())return AIj(b);c=new Iv;Tf(c,b);return c;}c=Xw(b);d=new L9;BK(d);d.nR=c;d.ts=c.Y;if(!b.H){if(b.gr())return AAD(AG4(Ha(b)),d);return AAD(ANc(Ha(b)),d);}if(!b.gr())return AAD(AIj(Ha(b)),d);c=new Pe;e=new Iv;Tf(e,Ha(b));ACe(c,e,d);return c;}
function Hb(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B6(a,b){return (a.c8&b)!=b?0:1;}
function Nc(){C.call(this);this.qB=null;}
function AO6(a,b){b.dr=a.qB.dr;}
function M7(){var a=this;C.call(a);a.q8=null;a.q$=0;a.q6=0;a.q7=null;a.q4=0;a.q5=0;}
var Gc=F(Cq);
var AUg=null;var AUf=null;var AUl=null;function TJ(){TJ=Br(Gc);AFN();}
function AHX(a,b){var c=new Gc();Ye(c,a,b);return c;}
function Ye(a,b,c){TJ();Dz(a,b,c);}
function AFN(){var b;AUg=AHX(B(361),0);b=AHX(B(362),1);AUf=b;AUl=H(Gc,[AUg,b]);}
function RM(){C.call(this);this.q9=null;}
function AIv(a,b){DC(a.q9,b);}
function BA(){var a=this;C.call(a);a.d=null;a.b9=0;a.nn=null;a.g7=0;}
var AR5=0;function BK(a){var b,c;b=new E1;c=AR5;AR5=c+1|0;Jc(b,c);a.nn=Ll(b);}
function J0(a,b){var c,d;c=new E1;d=AR5;AR5=d+1|0;Jc(c,d);a.nn=Ll(c);a.d=b;}
function Hg(a,b,c,d){var e;e=d.v;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hq(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AE7(a,b){a.g7=b;}
function AEd(a){return a.g7;}
function AMF(a){return a.d;}
function ANu(a,b){a.d=b;}
function ANt(a,b){return 1;}
function AOh(a){return null;}
function Ir(a){var b;a.b9=1;b=a.d;if(b!==null){if(!b.b9){b=b.eV();if(b!==null){a.d.b9=1;a.d=b;}a.d.dN();}else if(b instanceof Gf&&b.dS.jw)a.d=b.d;}}
function ACn(){AR5=1;}
var Tl=F();
var AUe=null;function APH(){APH=Br(Tl);ADT();}
function ADT(){var b,c;TJ();b=BF((AUl.ff()).data.length);c=b.data;AUe=b;c[AUg.cO]=1;c[AUf.cO]=2;}
function Oi(){C.call(this);this.ou=null;}
function AFc(a,b){Tg(H4(a.ou),b,ATu,Xs(B(363)));}
function Sd(){C.call(this);this.nm=null;}
function AHn(a,b){var c,d;c=a.nm;d=b.g2;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function WU(){var a=this;C.call(a);a.or=null;a.oq=null;}
function AE2(a){var b,c;b=a.or;c=a.oq;b=b.bo;Kt(b,c,b.fM);}
function CM(){var a=this;BA.call(a);a.jw=0;a.dc=0;}
var AUk=null;function Lv(){Lv=Br(CM);AGc();}
function AQT(a){var b=new CM();E6(b,a);return b;}
function E6(a,b){Lv();BK(a);a.dc=b;}
function ADK(a,b,c,d){var e,f;e=HW(d,a.dc);IV(d,a.dc,b);f=a.d.c(b,c,d);if(f<0)IV(d,a.dc,e);return f;}
function AJc(a){return a.dc;}
function AD4(a,b){return 0;}
function AGc(){var b;b=new Nh;BK(b);AUk=b;}
function Gp(){var a=this;C.call(a);a.W=null;a.fD=0;a.ea=0;a.rY=0;a.jW=0;a.Z=0;a.i=0;a.pU=0;a.em=null;a.d8=null;a.t=0;a.hi=0;a.cT=0;a.gL=0;a.bC=null;}
var AUm=null;var AUi=null;var AUj=0;function NP(a,b){if(b>0&&b<3)a.ea=b;if(b==1){a.i=a.Z;a.d8=a.em;a.t=a.gL;a.gL=a.cT;EM(a);}}
function Gu(a){return a.em===null?0:1;}
function IZ(a){return a.d8===null?0:1;}
function Bc(a){EM(a);return a.jW;}
function EU(a){var b;b=a.em;EM(a);return b;}
function EM(a){var b,c,d,e,f,g,h,$$je;a.jW=a.Z;a.Z=a.i;a.em=a.d8;a.cT=a.gL;a.gL=a.t;while(true){b=0;c=a.t>=a.W.data.length?0:KS(a);a.i=c;a.d8=null;if(a.ea==4){if(c!=92)return;c=a.t;d=a.W.data;c=c>=d.length?0:d[BP(a)];a.i=c;switch(c){case 69:break;default:a.i=92;a.t=a.hi;return;}a.ea=a.rY;a.i=a.t>(a.W.data.length-2|0)?0:KS(a);}a:{c=a.i;if(c!=92){e=a.ea;if(e==1)switch(c){case 36:a.i=(-536870876);break a;case 40:if(a.W.data[a.t]!=63){a.i=(-2147483608);break a;}BP(a);c=a.W.data[a.t];e=0;while(true){b:{if(e){e=0;switch
(c){case 33:break;case 61:a.i=(-134217688);BP(a);break b;default:J(B5(B(31),E3(a),a.t));}a.i=(-67108824);BP(a);}else{switch(c){case 33:break;case 60:BP(a);c=a.W.data[a.t];e=1;break b;case 61:a.i=(-536870872);BP(a);break b;case 62:a.i=(-33554392);BP(a);break b;default:f=ACo(a);a.i=f;if(f<256){a.fD=f;f=f<<16;a.i=f;a.i=(-1073741784)|f;break b;}f=f&255;a.i=f;a.fD=f;f=f<<16;a.i=f;a.i=(-16777176)|f;break b;}a.i=(-268435416);BP(a);}}if(!e)break;}break a;case 41:a.i=(-536870871);break a;case 42:case 43:case 63:e=a.t;d
=a.W.data;switch(e>=d.length?42:d[e]){case 43:a.i=c|(-2147483648);BP(a);break a;case 63:a.i=c|(-1073741824);BP(a);break a;default:}a.i=c|(-536870912);break a;case 46:a.i=(-536870866);break a;case 91:a.i=(-536870821);NP(a,2);break a;case 93:if(e!=2)break a;a.i=(-536870819);break a;case 94:a.i=(-536870818);break a;case 123:a.d8=ABU(a,c);break a;case 124:a.i=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.i=(-536870874);break a;case 45:a.i=(-536870867);break a;case 91:a.i=(-536870821);break a;case 93:a.i
=(-536870819);break a;case 94:a.i=(-536870818);break a;default:}}else{c=a.t>=(a.W.data.length-2|0)?(-1):KS(a);c:{a.i=c;switch(c){case -1:J(B5(B(31),E3(a),a.t));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.i
=AAp(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ea!=1)break a;a.i=(-2147483648)|c;break a;case 65:a.i=(-2147483583);break a;case 66:a.i=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B5(B(31),E3(a),a.t));case 68:case 83:case 87:case 100:case 115:case 119:a.d8=QR(I2(a.W,
a.hi,1),0);a.i=0;break a;case 71:a.i=(-2147483577);break a;case 80:case 112:break c;case 81:a.rY=a.ea;a.ea=4;b=1;break a;case 90:a.i=(-2147483558);break a;case 97:a.i=7;break a;case 98:a.i=(-2147483550);break a;case 99:c=a.t;d=a.W.data;if(c>=(d.length-2|0))J(B5(B(31),E3(a),a.t));a.i=d[BP(a)]&31;break a;case 101:a.i=27;break a;case 102:a.i=12;break a;case 110:a.i=10;break a;case 114:a.i=13;break a;case 116:a.i=9;break a;case 117:a.i=OH(a,4);break a;case 120:a.i=OH(a,2);break a;case 122:a.i=(-2147483526);break a;default:}break a;}g
=Z_(a);h=0;if(a.i==80)h=1;try{a.d8=QR(g,h);}catch($$e){$$je=D5($$e);if($$je instanceof Ix){J(B5(B(31),E3(a),a.t));}else{throw $$e;}}a.i=0;}}if(b)continue;else break;}}
function Z_(a){var b,c,d,e,f,g;b=new M;FH(b,10);c=a.t;d=a.W;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=I2(d,BP(a),1);f=new M;O(f);G(G(f,B(364)),b);return N(f);}BP(a);c=0;a:{while(true){g=a.t;d=a.W.data;if(g>=(d.length-2|0))break;c=d[BP(a)];if(c==125)break a;BC(b,c);}}if(c!=125)J(B5(B(31),a.bC,a.t));}if(!b.L)J(B5(B(31),a.bC,a.t));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(364)),f);return N(b);}b:{c:{if(I(f)>3){if(Eu(f,B(364)))break c;if(Eu(f,B(365)))break c;}break b;}f=Dq(f,2);}return f;}
function ABU(a,b){var c,d,e,f,g,$$je;c=new M;FH(c,4);d=(-1);e=2147483647;a:{while(true){f=a.t;g=a.W.data;if(f>=g.length)break a;b=g[BP(a)];if(b==125)break a;if(b==44&&d<0)try{d=IR(DD(c),10);AB0(c,0,XG(c));continue;}catch($$e){$$je=D5($$e);if($$je instanceof C5){break;}else{throw $$e;}}BC(c,b&65535);}J(B5(B(31),a.bC,a.t));}if(b!=125)J(B5(B(31),a.bC,a.t));if(c.L>0)b:{try{e=IR(DD(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=D5($$e);if($$je instanceof C5){}else{throw $$e;}}J(B5(B(31),a.bC,a.t));}else if(d
<0)J(B5(B(31),a.bC,a.t));if((d|e|(e-d|0))<0)J(B5(B(31),a.bC,a.t));b=a.t;g=a.W.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.i=(-2147483525);BP(a);break c;case 63:a.i=(-1073741701);BP(a);break c;default:}a.i=(-536870789);}c=new Mi;c.d$=d;c.d5=e;return c;}
function E3(a){return a.bC;}
function C9(a){return !a.Z&&!a.i&&a.t==a.pU&&!Gu(a)?1:0;}
function Jx(b){return b<0?0:1;}
function EJ(a){return !C9(a)&&!Gu(a)&&Jx(a.Z)?1:0;}
function Nf(a){var b;b=a.Z;return b<=56319&&b>=55296?1:0;}
function T7(a){var b;b=a.Z;return b<=57343&&b>=56320?1:0;}
function Rk(b){return b<=56319&&b>=55296?1:0;}
function NY(b){return b<=57343&&b>=56320?1:0;}
function OH(a,b){var c,d,e,f,$$je;c=new M;FH(c,b);d=a.W.data.length-2|0;e=0;while(true){f=BH(e,b);if(f>=0)break;if(a.t>=d)break;BC(c,a.W.data[BP(a)]);e=e+1|0;}if(!f)a:{try{b=IR(DD(c),16);}catch($$e){$$je=D5($$e);if($$je instanceof C5){break a;}else{throw $$e;}}return b;}J(B5(B(31),a.bC,a.t));}
function AAp(a){var b,c,d,e,f,g;b=3;c=1;d=a.W.data;e=d.length-2|0;f=TF(d[a.t],8);switch(f){case -1:break;default:if(f>3)b=2;BP(a);a:{while(true){if(c>=b)break a;g=a.t;if(g>=e)break a;g=TF(a.W.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BP(a);c=c+1|0;}}return f;}J(B5(B(31),a.bC,a.t));}
function ACo(a){var b,c,d,e;b=1;c=a.fD;a:while(true){d=a.t;e=a.W.data;if(d>=e.length)J(B5(B(31),a.bC,d));b:{c:{switch(e[d]){case 41:BP(a);return c|256;case 45:if(!b)J(B5(B(31),a.bC,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BP(a);}BP(a);return c;}
function BP(a){var b,c,d,e,f;b=a.t;a.hi=b;if(!(a.fD&4))a.t=b+1|0;else{c=a.W.data.length-2|0;a.t=b+1|0;a:while(true){d=a.t;if(d<c&&PU(a.W.data[d])){a.t=a.t+1|0;continue;}d=a.t;if(d>=c)break;e=a.W.data;if(e[d]!=35)break;a.t=d+1|0;while(true){f=a.t;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.t=f+1|0;}}}return a.hi;}
function ABL(b){return AUm.zP(b);}
function KS(a){var b,c,d,e;b=a.W.data[BP(a)];if(CC(b)){c=a.hi+1|0;d=a.W.data;if(c<d.length){e=d[c];if(CX(e)){BP(a);return Eg(b,e);}}}return b;}
function Nd(a){return a.cT;}
function H9(){var a=this;BB.call(a);a.vh=null;a.uS=null;a.oO=0;}
function B5(a,b,c){var d=new H9();IC(d,a,b,c);return d;}
function IC(a,b,c,d){U(a);a.oO=(-1);a.vh=b;a.uS=c;a.oO=d;}
function VU(){C.call(this);this.rN=null;}
function AKU(a,b){var c,d;c=a.rN;d=0;while(d<b.length){XE(c,b[d]);d=d+1|0;}}
var Z6=F(0);
function S_(){var a=this;C.call(a);a.nY=null;a.n0=null;a.n2=null;}
function AKy(a,b){a.nY.m(APr(a.n0,b,a.n2));}
var QC=F(CM);
function ADl(a,b,c,d){var e;e=a.dc;BD(d,e,b-C_(d,e)|0);return a.d.c(b,c,d);}
function AL9(a,b){return 0;}
var Wv=F(CM);
function AE5(a,b,c,d){return b;}
var OJ=F(CM);
function AEb(a,b,c,d){if(C_(d,a.dc)!=b)b=(-1);return b;}
function RG(){CM.call(this);this.mm=0;}
function ADr(a,b,c,d){var e;e=a.dc;BD(d,e,b-C_(d,e)|0);a.mm=b;return b;}
function AKI(a,b){return 0;}
var Fe=F(CM);
function ANN(a,b,c,d){if(d.iL!=1&&b!=d.v)return (-1);d.h5=1;IV(d,0,b);return b;}
function BS(){BA.call(this);this.bz=0;}
function Dn(a){BK(a);a.bz=1;}
function AOI(a,b,c,d){var e;if((b+a.bP()|0)>d.v){d.c4=1;return (-1);}e=a.bl(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AM2(a){return a.bz;}
function AHY(a,b){return 1;}
var ABx=F(BS);
function Gr(a){var b=new ABx();AJo(b,a);return b;}
function AJo(a,b){J0(a,b);a.bz=1;a.g7=1;a.bz=0;}
function AMx(a,b,c){return 0;}
function AGi(a,b,c,d){var e,f,g;e=d.v;f=d.cx;while(true){g=BH(b,e);if(g>0)return (-1);if(g<0&&CX(L(c,b))&&b>f&&CC(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AET(a,b,c,d,e){var f,g;f=e.v;g=e.cx;while(true){if(c<b)return (-1);if(c<f&&CX(L(d,c))&&c>g&&CC(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ADp(a,b){return 0;}
function BN(){var a=this;BA.call(a);a.bu=null;a.dS=null;a.P=0;}
function AQf(a,b){var c=new BN();Ff(c,a,b);return c;}
function Ff(a,b,c){BK(a);a.bu=b;a.dS=c;a.P=c.dc;}
function AGR(a,b,c,d){var e,f,g,h;if(a.bu===null)return (-1);e=Fi(d,a.P);Dm(d,a.P,b);f=a.bu.j;g=0;while(true){if(g>=f){Dm(d,a.P,e);return (-1);}h=(Bt(a.bu,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AKA(a,b){a.dS.d=b;}
function AIL(a,b){var c;a:{c=a.bu;if(c!==null){c=BR(c);while(true){if(!B1(c))break a;if(!(BV(c)).bK(b))continue;else return 1;}}}return 0;}
function ALi(a,b){return HW(b,a.P)>=0&&Fi(b,a.P)==HW(b,a.P)?0:1;}
function AEO(a){var b,c,d,e;a.b9=1;b=a.dS;if(b!==null&&!b.b9)Ir(b);a:{b=a.bu;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Bt(a.bu,d);e=b.eV();if(e===null)e=b;else{b.b9=1;Eb(a.bu,d);Qh(a.bu,d,e);}if(!e.b9)e.dN();d=d+1|0;}}}if(a.d!==null)Ir(a);}
var Ik=F(BN);
function AKk(a,b,c,d){var e,f,g,h;e=C_(d,a.P);BD(d,a.P,b);f=a.bu.j;g=0;while(true){if(g>=f){BD(d,a.P,e);return (-1);}h=(Bt(a.bu,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ALJ(a,b){return !C_(b,a.P)?0:1;}
var DB=F(Ik);
function AFu(a,b,c,d){var e,f,g;e=C_(d,a.P);BD(d,a.P,b);f=a.bu.j;g=0;while(g<f){if((Bt(a.bu,g)).c(b,c,d)>=0)return a.d.c(a.dS.mm,c,d);g=g+1|0;}BD(d,a.P,e);return (-1);}
function ALq(a,b){a.d=b;}
var L1=F(DB);
function AKt(a,b,c,d){var e,f;e=a.bu.j;f=0;while(f<e){if((Bt(a.bu,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function ANA(a,b){return 0;}
var U1=F(DB);
function ADY(a,b,c,d){var e,f;e=a.bu.j;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bt(a.bu,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AM6(a,b){return 0;}
var PW=F(DB);
function AEJ(a,b,c,d){var e,f,g,h;e=a.bu.j;f=d.h_?0:d.cx;a:{g=a.d.c(b,c,d);if(g>=0){BD(d,a.P,b);h=0;while(true){if(h>=e)break a;if((Bt(a.bu,h)).cd(f,b,c,d)>=0){BD(d,a.P,(-1));return g;}h=h+1|0;}}}return (-1);}
function AO9(a,b){return 0;}
var Ss=F(DB);
function AC0(a,b,c,d){var e,f;e=a.bu.j;BD(d,a.P,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bt(a.bu,f)).cd(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ALZ(a,b){return 0;}
function Gf(){BN.call(this);this.cG=null;}
function AQE(a,b){var c=new Gf();X9(c,a,b);return c;}
function X9(a,b,c){BK(a);a.cG=b;a.dS=c;a.P=c.dc;}
function ADh(a,b,c,d){var e,f;e=Fi(d,a.P);Dm(d,a.P,b);f=a.cG.c(b,c,d);if(f>=0)return f;Dm(d,a.P,e);return (-1);}
function AI1(a,b,c,d){var e;e=a.cG.b$(b,c,d);if(e>=0)Dm(d,a.P,e);return e;}
function AMe(a,b,c,d,e){var f;f=a.cG.cd(b,c,d,e);if(f>=0)Dm(e,a.P,f);return f;}
function AIH(a,b){return a.cG.bK(b);}
function AKE(a){var b;b=new Ml;X9(b,a.cG,a.dS);a.d=b;return b;}
function AOk(a){var b;a.b9=1;b=a.dS;if(b!==null&&!b.b9)Ir(b);b=a.cG;if(b!==null&&!b.b9){b=b.eV();if(b!==null){a.cG.b9=1;a.cG=b;}a.cG.dN();}}
var Gq=F();
function T(){var a=this;Gq.call(a);a.Y=0;a.b6=0;a.G=null;a.iQ=null;a.jp=null;a.H=0;}
var AUn=null;function NK(){NK=Br(T);AFe();}
function Bq(a){var b;NK();b=new VN;b.y=BF(64);a.G=b;}
function AD1(a){return null;}
function ADA(a){return a.G;}
function Z0(a){var b,c,d,e,f;if(!a.b6)b=GQ(a.G,0)>=2048?0:1;else{a:{c=a.G;b=0;d=c.bk;if(b<d){e=c.y.data;f=(e[0]^(-1))>>>0|0;if(f)b=HO(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HO(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AG3(a){return a.H;}
function AMV(a){return a;}
function Xw(a){var b,c;if(a.jp===null){b=a.el();c=new Vb;c.vF=a;c.mN=b;Bq(c);a.jp=c;Ef(c,a.b6);}return a.jp;}
function Ha(a){var b,c;if(a.iQ===null){b=a.el();c=new U_;c.vk=a;c.ry=b;c.r9=a;Bq(c);a.iQ=c;Ef(c,a.Y);a.iQ.H=a.H;}return a.iQ;}
function AOg(a){return 0;}
function Ef(a,b){var c;c=a.Y;if(c^b){a.Y=c?0:1;a.b6=a.b6?0:1;}if(!a.H)a.H=1;return a;}
function AGk(a){return a.Y;}
function Ju(b,c){NK();return b.k(c);}
function HM(b,c){var d,e;NK();if(b.cZ()!==null&&c.cZ()!==null){b=b.cZ();c=c.cZ();d=Y(b.y.data.length,c.y.data.length);e=0;a:{while(e<d){if(b.y.data[e]&c.y.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function QR(b,c){var d,e,f;NK();d=0;while(true){ALX();e=AUo.data;if(d>=e.length){f=new Ix;Bj(f,B(31));f.vZ=B(31);f.vI=b;J(f);}e=e[d].data;if(Bo(b,e[0]))break;d=d+1|0;}return AA3(e[1],c);}
function AFe(){var b;b=new GH;ALX();AUn=b;}
function XZ(){var a=this;T.call(a);a.kz=0;a.ml=0;a.fU=0;a.kc=0;a.dn=0;a.eO=0;a.C=null;a.bs=null;}
function Da(){var a=new XZ();AOU(a);return a;}
function ANG(a,b){var c=new XZ();AE6(c,a,b);return c;}
function AOU(a){Bq(a);a.C=APa();}
function AE6(a,b,c){Bq(a);a.C=APa();a.kz=b;a.ml=c;}
function Cr(a,b){a:{if(a.kz){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dn){LD(a.C,Hb(b&65535));break a;}KP(a.C,Hb(b&65535));break a;}if(a.ml&&b>128){a.fU=1;b=Gj(Gi(b));}}}if(!(!Rk(b)&&!NY(b))){if(a.kc)LD(a.G,b-55296|0);else KP(a.G,b-55296|0);}if(a.dn)LD(a.C,b);else KP(a.C,b);if(!a.H&&Li(b))a.H=1;return a;}
function ACw(a,b){var c,d,e;if(!a.H&&b.H)a.H=1;if(a.kc){if(!b.b6)FA(a.G,b.el());else C2(a.G,b.el());}else if(!b.b6)Ft(a.G,b.el());else{E_(a.G,b.el());C2(a.G,b.el());a.b6=a.b6?0:1;a.kc=1;}if(!a.eO&&b.cZ()!==null){if(a.dn){if(!b.Y)FA(a.C,b.cZ());else C2(a.C,b.cZ());}else if(!b.Y)Ft(a.C,b.cZ());else{E_(a.C,b.cZ());C2(a.C,b.cZ());a.Y=a.Y?0:1;a.dn=1;}}else{c=a.Y;d=a.bs;if(d!==null){if(!c){e=new NC;e.tQ=a;e.sx=c;e.rV=d;e.rK=b;Bq(e);a.bs=e;}else{e=new ND;e.v5=a;e.pe=c;e.o2=d;e.om=b;Bq(e);a.bs=e;}}else{if(c&&!a.dn&&
Lm(a.C)){d=new Nz;d.uR=a;d.o$=b;Bq(d);a.bs=d;}else if(!c){d=new Nx;d.jZ=a;d.jc=c;d.nh=b;Bq(d);a.bs=d;}else{d=new Ny;d.kL=a;d.ji=c;d.rP=b;Bq(d);a.bs=d;}a.eO=1;}}return a;}
function BO(a,b,c){var d,e,f,g,h;if(b>c){d=new BB;U(d);J(d);}a:{b:{if(!a.kz){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cr(a,b);b=b+1|0;}}if(!a.dn)Hv(a.C,b,c+1|0);else{d=a.C;c=c+1|0;if(b>c){d=new Bx;U(d);J(d);}e=d.bk;if(b<e){f=Y(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.y.data;h[g]=h[g]&(HJ(d,b)|Hm(d,f));}else{h=d.y.data;h[g]=h[g]&HJ(d,b);e=g+1|0;while(e<c){d.y.data[e]=0;e=e+1|0;}if(f&31){h=d.y.data;h[c]=h[c]&Hm(d,f);}}GL(d);}}}}return a;}
function W3(a,b){var c,d,e;if(!a.H&&b.H)a.H=1;if(b.fU)a.fU=1;c=a.b6;if(!(c^b.b6)){if(!c)Ft(a.G,b.G);else C2(a.G,b.G);}else if(c)FA(a.G,b.G);else{E_(a.G,b.G);C2(a.G,b.G);a.b6=1;}if(!a.eO&&CQ(b)!==null){c=a.Y;if(!(c^b.Y)){if(!c)Ft(a.C,CQ(b));else C2(a.C,CQ(b));}else if(c)FA(a.C,CQ(b));else{E_(a.C,CQ(b));C2(a.C,CQ(b));a.Y=1;}}else{c=a.Y;d=a.bs;if(d!==null){if(!c){e=new Ns;e.tw=a;e.ra=c;e.rO=d;e.sj=b;Bq(e);a.bs=e;}else{e=new Oe;e.t2=a;e.se=c;e.l7=d;e.mo=b;Bq(e);a.bs=e;}}else{if(!a.dn&&Lm(a.C)){if(!c){d=new NA;d.v8
=a;d.oa=b;Bq(d);a.bs=d;}else{d=new NB;d.t6=a;d.r4=b;Bq(d);a.bs=d;}}else if(!c){d=new NE;d.rd=a;d.pw=b;d.o6=c;Bq(d);a.bs=d;}else{d=new NG;d.pX=a;d.qd=b;d.qu=c;Bq(d);a.bs=d;}a.eO=1;}}}
function VE(a,b){var c,d,e;if(!a.H&&b.H)a.H=1;if(b.fU)a.fU=1;c=a.b6;if(!(c^b.b6)){if(!c)C2(a.G,b.G);else Ft(a.G,b.G);}else if(!c)FA(a.G,b.G);else{E_(a.G,b.G);C2(a.G,b.G);a.b6=0;}if(!a.eO&&CQ(b)!==null){c=a.Y;if(!(c^b.Y)){if(!c)C2(a.C,CQ(b));else Ft(a.C,CQ(b));}else if(!c)FA(a.C,CQ(b));else{E_(a.C,CQ(b));C2(a.C,CQ(b));a.Y=0;}}else{c=a.Y;d=a.bs;if(d!==null){if(!c){e=new Nu;e.tP=a;e.rf=c;e.mL=d;e.pb=b;Bq(e);a.bs=e;}else{e=new Nv;e.ub=a;e.qG=c;e.lY=d;e.q_=b;Bq(e);a.bs=e;}}else{if(!a.dn&&Lm(a.C)){if(!c){d=new Nq;d.t7
=a;d.nI=b;Bq(d);a.bs=d;}else{d=new Nr;d.v3=a;d.nO=b;Bq(d);a.bs=d;}}else if(!c){d=new Nw;d.tc=a;d.sr=b;d.p8=c;Bq(d);a.bs=d;}else{d=new Np;d.p7=a;d.qN=b;d.pg=c;Bq(d);a.bs=d;}a.eO=1;}}}
function CV(a,b){var c;c=a.bs;if(c!==null)return a.Y^c.k(b);return a.Y^Dj(a.C,b);}
function CQ(a){if(!a.eO)return a.C;return null;}
function AGb(a){return a.G;}
function ANj(a){var b,c;if(a.bs!==null)return a;b=CQ(a);c=new Nt;c.tt=a;c.hL=b;Bq(c);return Ef(c,a.Y);}
function AJN(a){var b,c,d;b=new M;O(b);c=GQ(a.C,0);while(c>=0){HQ(b,Gb(c));BC(b,124);c=GQ(a.C,c+1|0);}d=b.L;if(d>0)U3(b,d-1|0);return N(b);}
function AGn(a){return a.fU;}
function Ix(){var a=this;Bn.call(a);a.vZ=null;a.vI=null;}
function DM(){BA.call(this);this.F=null;}
function C4(a,b,c,d){J0(a,c);a.F=b;a.g7=d;}
function AOT(a){return a.F;}
function AMh(a,b){return !a.F.bK(b)&&!a.d.bK(b)?0:1;}
function ANI(a,b){return 1;}
function AJl(a){var b;a.b9=1;b=a.d;if(b!==null&&!b.b9){b=b.eV();if(b!==null){a.d.b9=1;a.d=b;}a.d.dN();}b=a.F;if(b!==null){if(!b.b9){b=b.eV();if(b!==null){a.F.b9=1;a.F=b;}a.F.dN();}else if(b instanceof Gf&&b.dS.jw)a.F=b.d;}}
function CW(){DM.call(this);this.R=null;}
function AQL(a,b,c){var d=new CW();EB(d,a,b,c);return d;}
function EB(a,b,c,d){C4(a,b,c,d);a.R=b;}
function AC2(a,b,c,d){var e,f;e=0;a:{while((b+a.R.bP()|0)<=d.v){f=a.R.bl(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.R.bP()|0;e=e+(-1)|0;}return f;}
function EN(){CW.call(this);this.iK=null;}
function APT(a,b,c,d){var e=new EN();Q2(e,a,b,c,d);return e;}
function Q2(a,b,c,d,e){EB(a,c,d,e);a.iK=b;}
function ADN(a,b,c,d){var e,f,g,h,i;e=a.iK;f=e.d$;g=e.d5;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.R.bP()|0)>d.v)break a;i=a.R.bl(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.R.bP()|0;h=h+(-1)|0;}return i;}if((b+a.R.bP()|0)>d.v){d.c4=1;return (-1);}i=a.R.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CN=F(DM);
function ADg(a,b,c,d){var e;if(!a.F.D(d))return a.d.c(b,c,d);e=a.F.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var El=F(CW);
function AI7(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function APb(a,b){a.d=b;a.F.J(b);}
var Vc=F(CW);
function AOA(a,b,c,d){while((b+a.R.bP()|0)<=d.v&&a.R.bl(b,c)>0){b=b+a.R.bP()|0;}return a.d.c(b,c,d);}
function AJJ(a,b,c,d){var e,f,g;e=a.d.b$(b,c,d);if(e<0)return (-1);f=e-a.R.bP()|0;while(f>=b&&a.R.bl(f,c)>0){g=f-a.R.bP()|0;e=f;f=g;}return e;}
function V(){var a=this;C.call(a);a.kV=null;a.jX=null;}
function AA3(a,b){if(!b&&a.kV===null)a.kV=a.A();else if(b&&a.jX===null)a.jX=Ef(a.A(),1);if(b)return a.jX;return a.kV;}
var C5=F(BB);
function Mi(){var a=this;Gq.call(a);a.d$=0;a.d5=0;}
function AJU(a){var b,c,d,e,f;b=a.d$;c=a.d5;d=c==2147483647?B(31):Ll(ABK(c));e=new M;O(e);BC(e,123);f=S(e,b);BC(f,44);BC(G(f,d),125);return N(e);}
var Nh=F(BA);
function AIo(a,b,c,d){return b;}
function AKz(a,b){return 0;}
function VN(){var a=this;C.call(a);a.y=null;a.bk=0;}
function APa(){var a=new VN();AEs(a);return a;}
function AEs(a){a.y=BF(0);}
function KP(a,b){var c,d;c=b/32|0;if(b>=a.bk){HS(a,c+1|0);a.bk=b+1|0;}d=a.y.data;d[c]=d[c]|1<<(b%32|0);}
function Hv(a,b,c){var d,e,f,g,h;d=BH(b,c);if(d>0){e=new Bx;U(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bk){HS(a,f+1|0);a.bk=c;}if(d==f){g=a.y.data;g[d]=g[d]|Hm(a,b)&HJ(a,c);}else{g=a.y.data;g[d]=g[d]|Hm(a,b);h=d+1|0;while(h<f){a.y.data[h]=(-1);h=h+1|0;}if(c&31){g=a.y.data;g[f]=g[f]|HJ(a,c);}}}
function Hm(a,b){return (-1)<<(b%32|0);}
function HJ(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function LD(a,b){var c,d;c=b/32|0;d=a.y.data;if(c<d.length){d[c]=d[c]&Jr((-2),b%32|0);if(b==(a.bk-1|0))GL(a);}}
function Dj(a,b){var c,d;c=b/32|0;d=a.y.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GQ(a,b){var c,d,e,f;c=a.bk;if(b>=c)return (-1);d=b/32|0;e=a.y.data;f=e[d]>>>(b%32|0)|0;if(f)return HO(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HO(e[f])|0;f=f+1|0;}return (-1);}
function HS(a,b){var c;c=a.y.data.length;if(c>=b)return;c=Bb((b*3|0)/2|0,(c*2|0)+1|0);a.y=ACj(a.y,c);}
function GL(a){var b,c,d;b=(a.bk+31|0)/32|0;a.bk=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=MV(a.y.data[c]);if(d<32)break;c=c+(-1)|0;a.bk=a.bk-32|0;}a.bk=a.bk-d|0;}}
function C2(a,b){var c,d,e,f;c=Y(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&b.y.data[d];d=d+1|0;}while(true){f=a.y.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bk=Y(a.bk,b.bk);GL(a);}
function FA(a,b){var c,d,e;c=Y(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]&(b.y.data[d]^(-1));d=d+1|0;}GL(a);}
function Ft(a,b){var c,d,e;c=Bb(a.bk,b.bk);a.bk=c;HS(a,(c+31|0)/32|0);c=Y(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]|b.y.data[d];d=d+1|0;}}
function E_(a,b){var c,d,e;c=Bb(a.bk,b.bk);a.bk=c;HS(a,(c+31|0)/32|0);c=Y(a.y.data.length,b.y.data.length);d=0;while(d<c){e=a.y.data;e[d]=e[d]^b.y.data[d];d=d+1|0;}GL(a);}
function Lm(a){return a.bk?0:1;}
function L9(){var a=this;BN.call(a);a.nR=null;a.ts=0;}
function Pe(){var a=this;BN.call(a);a.lj=null;a.kO=null;}
function AAD(a,b){var c=new Pe();ACe(c,a,b);return c;}
function ACe(a,b,c){BK(a);a.lj=b;a.kO=c;}
function ADJ(a,b,c,d){var e,f,g,h,i;e=a.lj.c(b,c,d);if(e<0)a:{f=a.kO;g=d.cx;e=d.v;h=b+1|0;e=BH(h,e);if(e>0){d.c4=1;e=(-1);}else{i=L(c,b);if(!f.nR.k(i))e=(-1);else{if(CC(i)){if(e<0&&CX(L(c,h))){e=(-1);break a;}}else if(CX(i)&&b>g&&CC(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AKh(a,b){a.d=b;a.kO.d=b;a.lj.J(b);}
function AEe(a,b){return 1;}
function AD0(a,b){return 1;}
function Do(){var a=this;BN.call(a);a.di=null;a.uK=0;}
function AIj(a){var b=new Do();Tf(b,a);return b;}
function Tf(a,b){BK(a);a.di=b.ik();a.uK=b.Y;}
function AF5(a,b,c,d){var e,f,g,h;e=d.v;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(G1(g,f)&&a.k(Eg(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AGz(a,b){return a.di.k(b);}
function ADE(a,b){if(b instanceof DE)return Ju(a.di,b.fk);if(b instanceof D_)return Ju(a.di,b.cX);if(b instanceof Do)return HM(a.di,b.di);if(!(b instanceof D3))return 1;return HM(a.di,b.eA);}
function AIb(a){return a.di;}
function AMO(a,b){a.d=b;}
function AGf(a,b){return 1;}
var Iv=F(Do);
function AHZ(a,b){return a.di.k(Gj(Gi(b)));}
function XS(){var a=this;BS.call(a);a.oF=null;a.us=0;}
function AG4(a){var b=new XS();AJ0(b,a);return b;}
function AJ0(a,b){Dn(a);a.oF=b.ik();a.us=b.Y;}
function AIp(a,b,c){return !a.oF.k(EG(Ek(L(c,b))))?(-1):1;}
function D3(){var a=this;BS.call(a);a.eA=null;a.u4=0;}
function ANc(a){var b=new D3();AK3(b,a);return b;}
function AK3(a,b){Dn(a);a.eA=b.ik();a.u4=b.Y;}
function LH(a,b,c){return !a.eA.k(L(c,b))?(-1):1;}
function AKC(a,b){if(b instanceof D_)return Ju(a.eA,b.cX);if(b instanceof D3)return HM(a.eA,b.eA);if(!(b instanceof Do)){if(!(b instanceof DE))return 1;return 0;}return HM(a.eA,b.di);}
function NO(){var a=this;BN.call(a);a.gf=null;a.k_=null;a.iH=0;}
function ANo(a,b){var c=new NO();ADi(c,a,b);return c;}
function ADi(a,b,c){BK(a);a.gf=b;a.iH=c;}
function AI6(a,b){a.d=b;}
function Pp(a){if(a.k_===null)a.k_=FE(a.gf);return a.k_;}
function ACR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.v;f=BF(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?EQ([k,l]):EQ([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iH;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gf.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iH==3){k=f[0];m=a.gf.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iH==2){b=f[0];m=a.gf.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AD$(a,b){return b instanceof NO&&!Bo(Pp(b),Pp(a))?0:1;}
function ANn(a,b){return 1;}
function D_(){BS.call(this);this.cX=0;}
function Yj(a){var b=new D_();AK6(b,a);return b;}
function AK6(a,b){Dn(a);a.cX=b;}
function AH8(a){return 1;}
function AG0(a,b,c){return a.cX!=L(c,b)?(-1):1;}
function AF0(a,b,c,d){var e,f,g;if(!(c instanceof By))return Hg(a,b,c,d);e=d.v;while(true){if(b>=e)return (-1);f=Gn(c,a.cX,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AIe(a,b,c,d,e){var f;if(!(d instanceof By))return Hq(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FK(d,a.cX,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ANf(a,b){if(b instanceof D_)return b.cX!=a.cX?0:1;if(!(b instanceof D3)){if(b instanceof Do)return b.k(a.cX);if(!(b instanceof DE))return 1;return 0;}return LH(b,0,VO(a.cX))<=0?0:1;}
function AB2(){BS.call(this);this.lQ=0;}
function ALx(a){var b=new AB2();AJH(b,a);return b;}
function AJH(a,b){Dn(a);a.lQ=EG(Ek(b));}
function ACL(a,b,c){return a.lQ!=EG(Ek(L(c,b)))?(-1):1;}
function W5(){var a=this;BS.call(a);a.sm=0;a.mG=0;}
function AED(a){var b=new W5();ALS(b,a);return b;}
function ALS(a,b){Dn(a);a.sm=b;a.mG=Hb(b);}
function ADa(a,b,c){return a.sm!=L(c,b)&&a.mG!=L(c,b)?(-1):1;}
function EY(){var a=this;BN.call(a);a.gX=0;a.jK=null;a.jf=null;a.ja=0;}
function ARu(a,b){var c=new EY();M8(c,a,b);return c;}
function M8(a,b,c){BK(a);a.gX=1;a.jf=b;a.ja=c;}
function AOj(a,b){a.d=b;}
function AKj(a,b,c,d){var e,f,g,h,i,j,k,l;e=BF(4);f=d.v;if(b>=f)return (-1);g=JO(a,b,c,f);h=b+a.gX|0;i=ABL(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dk(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JO(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ABL(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gX|0;if(h>=f){b=k;break a;}g=JO(a,h,c,f);b=k;}}}if(b!=a.ja)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jf.data[g])break;g=g+1|0;}return (-1);}
function VD(a){var b,c;if(a.jK===null){b=new M;O(b);c=0;while(c<a.ja){HQ(b,Gb(a.jf.data[c]));c=c+1|0;}a.jK=N(b);}return a.jK;}
function JO(a,b,c,d){var e,f,g;a.gX=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(G1(e,f)){g=BQ(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CC(g[0])&&CX(g[1])?Eg(g[0],g[1]):g[0];a.gX=2;}}return e;}
function AIq(a,b){return b instanceof EY&&!Bo(VD(b),VD(a))?0:1;}
function ALu(a,b){return 1;}
var V9=F(EY);
var SI=F(EY);
var WR=F(CN);
function AE$(a,b,c,d){var e;while(true){e=a.F.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var OB=F(CN);
function AJA(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.F.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var Fz=F(CN);
function AMJ(a,b,c,d){var e;if(!a.F.D(d))return a.d.c(b,c,d);e=a.F.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function ANR(a,b){a.d=b;a.F.J(b);}
var Oj=F(Fz);
function AIa(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AJV(a,b){a.d=b;}
function EV(){var a=this;CN.call(a);a.fz=null;a.c6=0;}
function AUp(a,b,c,d,e){var f=new EV();It(f,a,b,c,d,e);return f;}
function It(a,b,c,d,e,f){C4(a,c,d,e);a.fz=b;a.c6=f;}
function AO3(a,b,c,d){var e,f;e=Mc(d,a.c6);if(!a.F.D(d))return a.d.c(b,c,d);if(e>=a.fz.d5)return a.d.c(b,c,d);f=a.c6;e=e+1|0;D0(d,f,e);f=a.F.c(b,c,d);if(f>=0){D0(d,a.c6,0);return f;}f=a.c6;e=e+(-1)|0;D0(d,f,e);if(e>=a.fz.d$)return a.d.c(b,c,d);D0(d,a.c6,0);return (-1);}
var Mq=F(EV);
function AHt(a,b,c,d){var e,f,g;e=0;f=a.fz.d5;a:{while(true){g=a.F.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fz.d$)return (-1);return a.d.c(b,c,d);}
var Qi=F(CN);
function AOp(a,b,c,d){var e;if(!a.F.D(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.F.c(b,c,d);}
var Po=F(Fz);
function AEh(a,b,c,d){var e;if(!a.F.D(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.F.c(b,c,d);return e;}
var TL=F(EV);
function ADw(a,b,c,d){var e,f,g;e=Mc(d,a.c6);if(!a.F.D(d))return a.d.c(b,c,d);f=a.fz;if(e>=f.d5){D0(d,a.c6,0);return a.d.c(b,c,d);}if(e<f.d$){D0(d,a.c6,e+1|0);g=a.F.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){D0(d,a.c6,0);return g;}D0(d,a.c6,e+1|0);g=a.F.c(b,c,d);}return g;}
var Qj=F(DM);
function AOQ(a,b,c,d){var e;e=d.v;if(e>b)return a.d.cd(b,e,c,d);return a.d.c(b,c,d);}
function AMX(a,b,c,d){var e;e=d.v;if(a.d.cd(b,e,c,d)>=0)return b;return (-1);}
function No(){DM.call(this);this.jV=null;}
function AKF(a,b,c,d){var e,f;e=d.v;f=TO(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cd(b,e,c,d);return a.d.c(b,c,d);}
function ACV(a,b,c,d){var e,f,g,h;e=d.v;f=a.d.b$(b,c,d);if(f<0)return (-1);g=TO(a,f,e,c);if(g>=0)e=g;g=Bb(f,a.d.cd(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.jV.g1(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function TO(a,b,c,d){while(true){if(b>=c)return (-1);if(a.jV.g1(L(d,b)))break;b=b+1|0;}return b;}
var Ew=F();
var AUq=null;var AUr=null;function Om(b){var c;if(!(b&1)){c=AUr;if(c!==null)return c;c=new Ub;AUr=c;return c;}c=AUq;if(c!==null)return c;c=new Ua;AUq=c;return c;}
var WT=F(CW);
function ADy(a,b,c,d){var e;a:{while(true){if((b+a.R.bP()|0)>d.v)break a;e=a.R.bl(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var U$=F(El);
function AJz(a,b,c,d){var e;if((b+a.R.bP()|0)<=d.v){e=a.R.bl(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var N8=F(EN);
function AMl(a,b,c,d){var e,f,g,h,i;e=a.iK;f=e.d$;g=e.d5;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.R.bP()|0)>d.v)break a;i=a.R.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.R.bP()|0)>d.v){d.c4=1;return (-1);}i=a.R.bl(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Pk=F(CW);
function AKx(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.R.bP()|0)<=d.v){e=a.R.bl(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var S1=F(El);
function ADD(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.F.c(b,c,d);}
var PX=F(EN);
function AMB(a,b,c,d){var e,f,g,h,i,j;e=a.iK;f=e.d$;g=e.d5;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.R.bP()|0)<=d.v){i=a.R.bl(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.R.bP()|0)>d.v){d.c4=1;return (-1);}j=a.R.bl(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JE=F(BA);
function AIJ(a,b,c,d){if(b&&!(d.eP&&b==d.cx))return (-1);return a.d.c(b,c,d);}
function AHJ(a,b){return 0;}
function Yv(){BA.call(this);this.rW=0;}
function ANa(a){var b=new Yv();AH5(b,a);return b;}
function AH5(a,b){BK(a);a.rW=b;}
function ADX(a,b,c,d){var e,f,g;e=b<d.v?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.h_?0:d.cx;return (e!=32&&!Pr(a,e,b,g,c)?0:1)^(f!=32&&!Pr(a,f,b-1|0,g,c)?0:1)^a.rW?(-1):a.d.c(b,c,d);}
function AD7(a,b){return 0;}
function Pr(a,b,c,d,e){var f;if(!IO(b)&&b!=95){a:{if(Co(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(IO(f))return 0;if(Co(f)!=6)return 1;}}return 1;}return 0;}
var Nl=F(BA);
function AH3(a,b,c,d){if(b!=d.g$)return (-1);return a.d.c(b,c,d);}
function AOZ(a,b){return 0;}
function VP(){BA.call(this);this.fG=0;}
function AQY(a){var b=new VP();ABz(b,a);return b;}
function ABz(a,b){BK(a);a.fG=b;}
function ALb(a,b,c,d){var e,f,g;e=!d.eP?I(c):d.v;if(b>=e){BD(d,a.fG,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BD(d,a.fG,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BD(d,a.fG,0);return a.d.c(b,c,d);}
function AEZ(a,b){var c;c=!C_(b,a.fG)?0:1;BD(b,a.fG,(-1));return c;}
var Vy=F(BA);
function AKd(a,b,c,d){if(b<(d.h_?I(c):d.v))return (-1);d.c4=1;d.vt=1;return a.d.c(b,c,d);}
function ACJ(a,b){return 0;}
function MC(){BA.call(this);this.pl=null;}
function AEN(a,b,c,d){a:{if(b!=d.v){if(!b)break a;if(d.eP&&b==d.cx)break a;if(a.pl.qI(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AGK(a,b){return 0;}
var ABS=F(BN);
function ARf(){var a=new ABS();AJ6(a);return a;}
function AJ6(a){BK(a);}
function AOu(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;if(f>e){d.c4=1;return (-1);}g=L(c,b);if(CC(g)){h=b+2|0;if(h<=e&&G1(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AEa(a,b){a.d=b;}
function AJ1(a){return (-2147483602);}
function AD_(a,b){return 1;}
function XX(){BN.call(this);this.kn=null;}
function AQS(a){var b=new XX();AEX(b,a);return b;}
function AEX(a,b){BK(a);a.kn=b;}
function AJ8(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;if(f>e){d.c4=1;return (-1);}g=L(c,b);if(CC(g)){b=b+2|0;if(b<=e){h=L(c,f);if(G1(g,h))return a.kn.g1(Eg(g,h))?(-1):a.d.c(b,c,d);}}return a.kn.g1(g)?(-1):a.d.c(f,c,d);}
function AL5(a,b){a.d=b;}
function ACG(a){return (-2147483602);}
function AOF(a,b){return 1;}
function ABI(){BA.call(this);this.gP=0;}
function AQl(a){var b=new ABI();AGH(b,a);return b;}
function AGH(a,b){BK(a);a.gP=b;}
function AIu(a,b,c,d){var e;e=!d.eP?I(c):d.v;if(b>=e){BD(d,a.gP,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BD(d,a.gP,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AGF(a,b){var c;c=!C_(b,a.gP)?0:1;BD(b,a.gP,(-1));return c;}
function Z2(){BA.call(this);this.gW=0;}
function AP8(a){var b=new Z2();AG5(b,a);return b;}
function AG5(a,b){BK(a);a.gW=b;}
function AKb(a,b,c,d){if((!d.eP?I(c)-b|0:d.v-b|0)<=0){BD(d,a.gW,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BD(d,a.gW,1);return a.d.c(b+1|0,c,d);}
function AGw(a,b){var c;c=!C_(b,a.gW)?0:1;BD(b,a.gW,(-1));return c;}
function W2(){BA.call(this);this.e_=0;}
function APq(a){var b=new W2();AO5(b,a);return b;}
function AO5(a,b){BK(a);a.e_=b;}
function AHz(a,b,c,d){var e,f,g;e=!d.eP?I(c)-b|0:d.v-b|0;if(!e){BD(d,a.e_,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BD(d,a.e_,0);return a.d.c(b,c,d);case 13:if(g!=10){BD(d,a.e_,0);return a.d.c(b,c,d);}BD(d,a.e_,0);return a.d.c(b,c,d);default:}return (-1);}
function AE4(a,b){var c;c=!C_(b,a.e_)?0:1;BD(b,a.e_,(-1));return c;}
function GI(){var a=this;BN.call(a);a.mi=0;a.gc=0;}
function ARo(a,b){var c=new GI();NW(c,a,b);return c;}
function NW(a,b,c){BK(a);a.mi=b;a.gc=c;}
function ADz(a,b,c,d){var e,f,g,h;e=FS(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=0;while(true){if(f>=I(e)){BD(d,a.gc,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Hb(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ALm(a,b){a.d=b;}
function FS(a,b){var c,d;c=a.mi;d=Fi(b,c);c=HW(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.kq)?B7(b.kq,d,c):null;}
function ALK(a,b){var c;c=!C_(b,a.gc)?0:1;BD(b,a.gc,(-1));return c;}
var ABN=F(GI);
function APx(a,b){var c=new ABN();ANJ(c,a,b);return c;}
function ANJ(a,b,c){NW(a,b,c);}
function AE9(a,b,c,d){var e,f;e=FS(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=!Te(c,e,b)?(-1):I(e);if(f<0)return (-1);BD(d,a.gc,f);return a.d.c(b+f|0,c,d);}return (-1);}
function ANw(a,b,c,d){var e,f;e=FS(a,d);f=d.cx;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=Yu(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ADm(a,b,c,d,e){var f,g;f=FS(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Y(c,I(d)-I(f)|0);b:{c:while(true){if(g<0){g=(-1);break b;}c=0;while(true){if(c>=I(f))break c;if(L(d,g+c|0)!=L(f,c))break;c=c+1|0;}g=g+(-1)|0;}}if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AJs(a,b){return 1;}
var Za=F(GI);
function AP9(a,b){var c=new Za();AGE(c,a,b);return c;}
function AGE(a,b,c){NW(a,b,c);}
function AIW(a,b,c,d){var e,f;e=FS(a,d);if(e!==null&&(b+I(e)|0)<=d.v){f=0;while(true){if(f>=I(e)){BD(d,a.gc,I(e));return a.d.c(b+I(e)|0,c,d);}if(EG(Ek(L(e,f)))!=EG(Ek(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Ng=F(F3);
function AGo(a,b,c,d,e){Mj(a,b,c,d,e);return a;}
function AD2(a,b,c,d){VZ(a,b,c,d);return a;}
function AEr(a,b){IU(a,b);}
function AM1(a,b,c){Wf(a,b,c);return a;}
function Qq(){var a=this;BS.call(a);a.ci=null;a.jM=null;a.kx=null;}
function AFr(a,b,c){return !Jz(a,c,b)?(-1):a.bz;}
function ADS(a,b,c,d){var e,f,g;e=d.v;while(true){if(b>e)return (-1);f=L(a.ci,a.bz-1|0);a:{while(true){g=a.bz;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Jz(a,c,b))break;b=b+Rw(a.jM,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bz|0,c,d)>=0)break;b=b+1|0;}return b;}
function AGJ(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.ci,0);g=(I(d)-c|0)-a.bz|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Jz(a,d,c))break;c=c-Rw(a.kx,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bz|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHb(a,b){var c;if(b instanceof D_)return b.cX!=L(a.ci,0)?0:1;if(b instanceof D3)return LH(b,0,B7(a.ci,0,1))<=0?0:1;if(!(b instanceof Do)){if(!(b instanceof DE))return 1;return I(a.ci)>1&&b.fk==Eg(L(a.ci,0),L(a.ci,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.ci,0))){if(I(a.ci)<=1)break b;if(!b.k(Eg(L(a.ci,0),L(a.ci,1))))break b;}c=1;break a;}c=0;}return c;}
function Jz(a,b,c){var d;d=0;while(d<a.bz){if(L(b,d+c|0)!=L(a.ci,d))return 0;d=d+1|0;}return 1;}
function W1(){BS.call(this);this.id=null;}
function ARr(a){var b=new W1();ANh(b,a);return b;}
function ANh(a,b){var c,d,e;Dn(a);c=new M;O(c);d=0;while(true){e=BH(d,b.L);if(e>=0){a.id=N(c);a.bz=c.L;return;}if(d<0)break;if(e>=0)break;BC(c,EG(Ek(b.z.data[d])));d=d+1|0;}b=new Bx;U(b);J(b);}
function AI3(a,b,c){var d;d=0;while(true){if(d>=I(a.id))return I(a.id);if(L(a.id,d)!=EG(Ek(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Mw(){BS.call(this);this.gM=null;}
function AMn(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gM))return I(a.gM);e=L(a.gM,d);f=b+d|0;if(e!=L(c,f)&&Hb(L(a.gM,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var GH=F();
var AUs=null;var AUt=null;var AUo=null;function ALX(){ALX=Br(GH);AFM();}
function AFM(){AUs=AQ7();AUt=AQe();AUo=H($rt_arraycls(C),[H(C,[B(366),ARp()]),H(C,[B(367),APn()]),H(C,[B(368),AQ4()]),H(C,[B(369),ARa()]),H(C,[B(370),AUt]),H(C,[B(371),AQp()]),H(C,[B(372),AQc()]),H(C,[B(373),APB()]),H(C,[B(374),APw()]),H(C,[B(375),API()]),H(C,[B(376),APV()]),H(C,[B(377),APF()]),H(C,[B(378),AQK()]),H(C,[B(379),APh()]),H(C,[B(380),AQ8()]),H(C,[B(381),APU()]),H(C,[B(382),AQn()]),H(C,[B(383),APS()]),H(C,[B(384),AQo()]),H(C,[B(385),APL()]),H(C,[B(386),ARe()]),H(C,[B(387),APP()]),H(C,[B(388),AQt()]),
H(C,[B(389),AQ2()]),H(C,[B(390),AQZ()]),H(C,[B(391),ARb()]),H(C,[B(392),APK()]),H(C,[B(393),AQQ()]),H(C,[B(394),AUs]),H(C,[B(395),AQx()]),H(C,[B(396),APC()]),H(C,[B(397),AUs]),H(C,[B(398),APf()]),H(C,[B(399),AUt]),H(C,[B(400),AP3()]),H(C,[B(401),P(0,127)]),H(C,[B(402),P(128,255)]),H(C,[B(403),P(256,383)]),H(C,[B(404),P(384,591)]),H(C,[B(405),P(592,687)]),H(C,[B(406),P(688,767)]),H(C,[B(407),P(768,879)]),H(C,[B(408),P(880,1023)]),H(C,[B(409),P(1024,1279)]),H(C,[B(410),P(1280,1327)]),H(C,[B(411),P(1328,1423)]),
H(C,[B(412),P(1424,1535)]),H(C,[B(413),P(1536,1791)]),H(C,[B(414),P(1792,1871)]),H(C,[B(415),P(1872,1919)]),H(C,[B(416),P(1920,1983)]),H(C,[B(417),P(2304,2431)]),H(C,[B(418),P(2432,2559)]),H(C,[B(419),P(2560,2687)]),H(C,[B(420),P(2688,2815)]),H(C,[B(421),P(2816,2943)]),H(C,[B(422),P(2944,3071)]),H(C,[B(423),P(3072,3199)]),H(C,[B(424),P(3200,3327)]),H(C,[B(425),P(3328,3455)]),H(C,[B(426),P(3456,3583)]),H(C,[B(427),P(3584,3711)]),H(C,[B(428),P(3712,3839)]),H(C,[B(429),P(3840,4095)]),H(C,[B(430),P(4096,4255)]),
H(C,[B(431),P(4256,4351)]),H(C,[B(432),P(4352,4607)]),H(C,[B(433),P(4608,4991)]),H(C,[B(434),P(4992,5023)]),H(C,[B(435),P(5024,5119)]),H(C,[B(436),P(5120,5759)]),H(C,[B(437),P(5760,5791)]),H(C,[B(438),P(5792,5887)]),H(C,[B(439),P(5888,5919)]),H(C,[B(440),P(5920,5951)]),H(C,[B(441),P(5952,5983)]),H(C,[B(442),P(5984,6015)]),H(C,[B(443),P(6016,6143)]),H(C,[B(444),P(6144,6319)]),H(C,[B(445),P(6400,6479)]),H(C,[B(446),P(6480,6527)]),H(C,[B(447),P(6528,6623)]),H(C,[B(448),P(6624,6655)]),H(C,[B(449),P(6656,6687)]),
H(C,[B(450),P(7424,7551)]),H(C,[B(451),P(7552,7615)]),H(C,[B(452),P(7616,7679)]),H(C,[B(453),P(7680,7935)]),H(C,[B(454),P(7936,8191)]),H(C,[B(455),P(8192,8303)]),H(C,[B(456),P(8304,8351)]),H(C,[B(457),P(8352,8399)]),H(C,[B(458),P(8400,8447)]),H(C,[B(459),P(8448,8527)]),H(C,[B(460),P(8528,8591)]),H(C,[B(461),P(8592,8703)]),H(C,[B(462),P(8704,8959)]),H(C,[B(463),P(8960,9215)]),H(C,[B(464),P(9216,9279)]),H(C,[B(465),P(9280,9311)]),H(C,[B(466),P(9312,9471)]),H(C,[B(467),P(9472,9599)]),H(C,[B(468),P(9600,9631)]),
H(C,[B(469),P(9632,9727)]),H(C,[B(470),P(9728,9983)]),H(C,[B(471),P(9984,10175)]),H(C,[B(472),P(10176,10223)]),H(C,[B(473),P(10224,10239)]),H(C,[B(474),P(10240,10495)]),H(C,[B(475),P(10496,10623)]),H(C,[B(476),P(10624,10751)]),H(C,[B(477),P(10752,11007)]),H(C,[B(478),P(11008,11263)]),H(C,[B(479),P(11264,11359)]),H(C,[B(480),P(11392,11519)]),H(C,[B(481),P(11520,11567)]),H(C,[B(482),P(11568,11647)]),H(C,[B(483),P(11648,11743)]),H(C,[B(484),P(11776,11903)]),H(C,[B(485),P(11904,12031)]),H(C,[B(486),P(12032,12255)]),
H(C,[B(487),P(12272,12287)]),H(C,[B(488),P(12288,12351)]),H(C,[B(489),P(12352,12447)]),H(C,[B(490),P(12448,12543)]),H(C,[B(491),P(12544,12591)]),H(C,[B(492),P(12592,12687)]),H(C,[B(493),P(12688,12703)]),H(C,[B(494),P(12704,12735)]),H(C,[B(495),P(12736,12783)]),H(C,[B(496),P(12784,12799)]),H(C,[B(497),P(12800,13055)]),H(C,[B(498),P(13056,13311)]),H(C,[B(499),P(13312,19893)]),H(C,[B(500),P(19904,19967)]),H(C,[B(501),P(19968,40959)]),H(C,[B(502),P(40960,42127)]),H(C,[B(503),P(42128,42191)]),H(C,[B(504),P(42752,
42783)]),H(C,[B(505),P(43008,43055)]),H(C,[B(506),P(44032,55203)]),H(C,[B(507),P(55296,56191)]),H(C,[B(508),P(56192,56319)]),H(C,[B(509),P(56320,57343)]),H(C,[B(510),P(57344,63743)]),H(C,[B(511),P(63744,64255)]),H(C,[B(512),P(64256,64335)]),H(C,[B(513),P(64336,65023)]),H(C,[B(514),P(65024,65039)]),H(C,[B(515),P(65040,65055)]),H(C,[B(516),P(65056,65071)]),H(C,[B(517),P(65072,65103)]),H(C,[B(518),P(65104,65135)]),H(C,[B(519),P(65136,65279)]),H(C,[B(520),P(65280,65519)]),H(C,[B(521),P(0,1114111)]),H(C,[B(522),
APG()]),H(C,[B(523),BG(0,1)]),H(C,[B(524),H$(62,1)]),H(C,[B(525),BG(1,1)]),H(C,[B(526),BG(2,1)]),H(C,[B(527),BG(3,0)]),H(C,[B(528),BG(4,0)]),H(C,[B(529),BG(5,1)]),H(C,[B(530),H$(448,1)]),H(C,[B(531),BG(6,1)]),H(C,[B(532),BG(7,0)]),H(C,[B(533),BG(8,1)]),H(C,[B(534),H$(3584,1)]),H(C,[B(535),BG(9,1)]),H(C,[B(536),BG(10,1)]),H(C,[B(537),BG(11,1)]),H(C,[B(538),H$(28672,0)]),H(C,[B(539),BG(12,0)]),H(C,[B(540),BG(13,0)]),H(C,[B(541),BG(14,0)]),H(C,[B(542),AP$(983040,1,1)]),H(C,[B(543),BG(15,0)]),H(C,[B(544),BG(16,
1)]),H(C,[B(545),BG(18,1)]),H(C,[B(546),AQk(19,0,1)]),H(C,[B(547),H$(1643118592,1)]),H(C,[B(548),BG(20,0)]),H(C,[B(549),BG(21,0)]),H(C,[B(550),BG(22,0)]),H(C,[B(551),BG(23,0)]),H(C,[B(552),BG(24,1)]),H(C,[B(553),H$(2113929216,1)]),H(C,[B(554),BG(25,1)]),H(C,[B(555),BG(26,0)]),H(C,[B(556),BG(27,0)]),H(C,[B(557),BG(28,1)]),H(C,[B(558),BG(29,0)]),H(C,[B(559),BG(30,0)])]);}
function LQ(){BS.call(this);this.oY=0;}
function AMu(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.oY!=Gj(Gi(Eg(e,d)))?(-1):2;}
function Kf(){BN.call(this);this.fR=0;}
function AJ5(a){var b=new Kf();AEk(b,a);return b;}
function AEk(a,b){BK(a);a.fR=b;}
function AKr(a,b){a.d=b;}
function AE0(a,b,c,d){var e,f;e=b+1|0;if(e>d.v){d.c4=1;return (-1);}f=L(c,b);if(b>d.cx&&CC(L(c,b-1|0)))return (-1);if(a.fR!=f)return (-1);return a.d.c(e,c,d);}
function AG8(a,b,c,d){var e,f,g,h;if(!(c instanceof By))return Hg(a,b,c,d);e=d.cx;f=d.v;while(true){if(b>=f)return (-1);g=Gn(c,a.fR,b);if(g<0)return (-1);if(g>e&&CC(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AFy(a,b,c,d,e){var f,g;if(!(d instanceof By))return Hq(a,b,c,d,e);f=e.cx;a:{while(true){if(c<b)return (-1);g=FK(d,a.fR,c);if(g<0)break a;if(g<b)break a;if(g>f&&CC(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ADk(a,b){if(b instanceof D_)return 0;if(b instanceof D3)return 0;if(b instanceof Do)return 0;if(b instanceof DE)return 0;if(b instanceof KA)return 0;if(!(b instanceof Kf))return 1;return b.fR!=a.fR?0:1;}
function AM7(a,b){return 1;}
function KA(){BN.call(this);this.fu=0;}
function AHD(a){var b=new KA();AJ$(b,a);return b;}
function AJ$(a,b){BK(a);a.fu=b;}
function AEq(a,b){a.d=b;}
function AC1(a,b,c,d){var e,f,g,h;e=d.v;f=b+1|0;g=BH(f,e);if(g>0){d.c4=1;return (-1);}h=L(c,b);if(g<0&&CX(L(c,f)))return (-1);if(a.fu!=h)return (-1);return a.d.c(f,c,d);}
function AKP(a,b,c,d){var e,f;if(!(c instanceof By))return Hg(a,b,c,d);e=d.v;while(true){if(b>=e)return (-1);f=Gn(c,a.fu,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CX(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AMm(a,b,c,d,e){var f,g;if(!(d instanceof By))return Hq(a,b,c,d,e);f=e.v;a:{while(true){if(c<b)return (-1);g=FK(d,a.fu,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CX(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFs(a,b){if(b instanceof D_)return 0;if(b instanceof D3)return 0;if(b instanceof Do)return 0;if(b instanceof DE)return 0;if(b instanceof Kf)return 0;if(!(b instanceof KA))return 1;return b.fu!=a.fu?0:1;}
function AKZ(a,b){return 1;}
function DE(){var a=this;BS.call(a);a.i2=0;a.hJ=0;a.fk=0;}
function ALM(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.i2==e&&a.hJ==d?2:(-1);}
function AJO(a,b,c,d){var e,f;if(!(c instanceof By))return Hg(a,b,c,d);e=d.v;while(b<e){b=Gn(c,a.i2,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hJ==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AEn(a,b,c,d,e){var f;if(!(d instanceof By))return Hq(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FK(d,a.hJ,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.i2==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ALy(a,b){if(b instanceof DE)return b.fk!=a.fk?0:1;if(b instanceof Do)return b.k(a.fk);if(b instanceof D_)return 0;if(!(b instanceof D3))return 1;return 0;}
var Ua=F(Ew);
function AEE(a,b){return b!=10?0:1;}
function ALD(a,b,c){return b!=10?0:1;}
var Ub=F(Ew);
function AME(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AOc(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AAR(){var a=this;C.call(a);a.lD=null;a.jh=null;a.gq=0;a.sU=0;}
function AJZ(a){var b=new AAR();AH1(b,a);return b;}
function AH1(a,b){var c,d;while(true){c=a.gq;if(b<c)break;a.gq=c<<1|1;}d=c<<1|1;a.gq=d;d=d+1|0;a.lD=BF(d);a.jh=BF(d);a.sU=b;}
function P0(a,b,c){var d,e,f,g;d=0;e=a.gq;f=b&e;while(true){g=a.lD.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jh.data[f]=c;}
function Rw(a,b){var c,d,e,f;c=a.gq;d=b&c;e=0;while(true){f=a.lD.data[d];if(!f)break;if(f==b)return a.jh.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.sU;}
var Xi=F();
var Kb=F(V);
function AQ7(){var a=new Kb();AHu(a);return a;}
function AHu(a){}
function Zi(a){return Cr(BO(Da(),9,13),32);}
var Ja=F(V);
function AQe(){var a=new Ja();AM4(a);return a;}
function AM4(a){}
function ZV(a){return BO(Da(),48,57);}
var AAL=F(V);
function ARp(){var a=new AAL();AGS(a);return a;}
function AGS(a){}
function AL8(a){return BO(Da(),97,122);}
var ABc=F(V);
function APn(){var a=new ABc();AH7(a);return a;}
function AH7(a){}
function AM$(a){return BO(Da(),65,90);}
var ABg=F(V);
function AQ4(){var a=new ABg();ADU(a);return a;}
function ADU(a){}
function AF6(a){return BO(Da(),0,127);}
var J9=F(V);
function ARa(){var a=new J9();AE_(a);return a;}
function AE_(a){}
function X0(a){return BO(BO(Da(),97,122),65,90);}
var KM=F(J9);
function AQp(){var a=new KM();AHI(a);return a;}
function AHI(a){}
function YS(a){return BO(X0(a),48,57);}
var ACv=F(V);
function AQc(){var a=new ACv();AJC(a);return a;}
function AJC(a){}
function AG6(a){return BO(BO(BO(Da(),33,64),91,96),123,126);}
var LF=F(KM);
function APB(){var a=new LF();ALg(a);return a;}
function ALg(a){}
function WX(a){return BO(BO(BO(YS(a),33,64),91,96),123,126);}
var Zu=F(LF);
function APw(){var a=new Zu();AMU(a);return a;}
function AMU(a){}
function AJm(a){return Cr(WX(a),32);}
var ZQ=F(V);
function API(){var a=new ZQ();AMo(a);return a;}
function AMo(a){}
function AFk(a){return Cr(Cr(Da(),32),9);}
var Yn=F(V);
function APV(){var a=new Yn();AN1(a);return a;}
function AN1(a){}
function AJi(a){return Cr(BO(Da(),0,31),127);}
var X8=F(V);
function APF(){var a=new X8();AD6(a);return a;}
function AD6(a){}
function AOf(a){return BO(BO(BO(Da(),48,57),97,102),65,70);}
var ABj=F(V);
function AQK(){var a=new ABj();ADM(a);return a;}
function ADM(a){}
function AJW(a){var b;b=new RN;b.uJ=a;Bq(b);b.H=1;return b;}
var ACF=F(V);
function APh(){var a=new ACF();ALB(a);return a;}
function ALB(a){}
function ACT(a){var b;b=new L6;b.uT=a;Bq(b);b.H=1;return b;}
var AAS=F(V);
function AQ8(){var a=new AAS();ADV(a);return a;}
function ADV(a){}
function AHE(a){var b;b=new QL;b.up=a;Bq(b);return b;}
var AAF=F(V);
function APU(){var a=new AAF();AJj(a);return a;}
function AJj(a){}
function ALQ(a){var b;b=new QK;b.t9=a;Bq(b);return b;}
var ABC=F(V);
function AQn(){var a=new ABC();AE8(a);return a;}
function AE8(a){}
function AFg(a){var b;b=new VG;b.vz=a;Bq(b);Hv(b.G,0,2048);b.H=1;return b;}
var XA=F(V);
function APS(){var a=new XA();AEx(a);return a;}
function AEx(a){}
function AFH(a){var b;b=new N1;b.u5=a;Bq(b);b.H=1;return b;}
var Xf=F(V);
function AQo(){var a=new Xf();AI0(a);return a;}
function AI0(a){}
function AN9(a){var b;b=new Nb;b.v0=a;Bq(b);b.H=1;return b;}
var AAX=F(V);
function APL(){var a=new AAX();AJD(a);return a;}
function AJD(a){}
function ACM(a){var b;b=new PA;b.uL=a;Bq(b);return b;}
var AA6=F(V);
function ARe(){var a=new AA6();AHm(a);return a;}
function AHm(a){}
function AIy(a){var b;b=new LZ;b.tj=a;Bq(b);b.H=1;return b;}
var YL=F(V);
function APP(){var a=new YL();ADn(a);return a;}
function ADn(a){}
function AFP(a){var b;b=new L4;b.va=a;Bq(b);b.H=1;return b;}
var ZT=F(V);
function AQt(){var a=new ZT();AEH(a);return a;}
function AEH(a){}
function AGM(a){var b;b=new MY;b.vw=a;Bq(b);b.H=1;return b;}
var ACa=F(V);
function AQ2(){var a=new ACa();AID(a);return a;}
function AID(a){}
function AIA(a){var b;b=new Oq;b.vN=a;Bq(b);b.H=1;return b;}
var AA5=F(V);
function AQZ(){var a=new AA5();AJT(a);return a;}
function AJT(a){}
function ANq(a){var b;b=new Oz;b.ur=a;Bq(b);return b;}
var Y9=F(V);
function ARb(){var a=new Y9();AEA(a);return a;}
function AEA(a){}
function AK8(a){var b;b=new SE;b.vf=a;Bq(b);return b;}
var YJ=F(V);
function APK(){var a=new YJ();ALR(a);return a;}
function ALR(a){}
function AJR(a){var b;b=new Rj;b.tn=a;Bq(b);b.H=1;return b;}
var ACA=F(V);
function AQQ(){var a=new ACA();AHe(a);return a;}
function AHe(a){}
function AL1(a){var b;b=new Mf;b.v9=a;Bq(b);b.H=1;return b;}
var IF=F(V);
function AQx(){var a=new IF();AFX(a);return a;}
function AFX(a){}
function ZR(a){return Cr(BO(BO(BO(Da(),97,122),65,90),48,57),95);}
var ABE=F(IF);
function APC(){var a=new ABE();AHq(a);return a;}
function AHq(a){}
function AJF(a){var b;b=Ef(ZR(a),1);b.H=1;return b;}
var ZA=F(Kb);
function APf(){var a=new ZA();ANS(a);return a;}
function ANS(a){}
function ADR(a){var b;b=Ef(Zi(a),1);b.H=1;return b;}
var YD=F(Ja);
function AP3(){var a=new YD();AIn(a);return a;}
function AIn(a){}
function AGX(a){var b;b=Ef(ZV(a),1);b.H=1;return b;}
function Yb(){var a=this;V.call(a);a.oP=0;a.ph=0;}
function P(a,b){var c=new Yb();AN7(c,a,b);return c;}
function AN7(a,b,c){a.oP=b;a.ph=c;}
function AIN(a){return BO(Da(),a.oP,a.ph);}
var Yy=F(V);
function APG(){var a=new Yy();AOm(a);return a;}
function AOm(a){}
function ANY(a){return BO(BO(Da(),65279,65279),65520,65533);}
function Zp(){var a=this;V.call(a);a.lc=0;a.i$=0;a.np=0;}
function BG(a,b){var c=new Zp();AE3(c,a,b);return c;}
function AQk(a,b,c){var d=new Zp();AN8(d,a,b,c);return d;}
function AE3(a,b,c){a.i$=c;a.lc=b;}
function AN8(a,b,c,d){a.np=d;a.i$=c;a.lc=b;}
function AGs(a){var b;b=ARl(a.lc);if(a.np)Hv(b.G,0,2048);b.H=a.i$;return b;}
function Zw(){var a=this;V.call(a);a.lb=0;a.jj=0;a.mn=0;}
function H$(a,b){var c=new Zw();AFQ(c,a,b);return c;}
function AP$(a,b,c){var d=new Zw();ACP(d,a,b,c);return d;}
function AFQ(a,b,c){a.jj=c;a.lb=b;}
function ACP(a,b,c,d){a.mn=d;a.jj=c;a.lb=b;}
function ACN(a){var b;b=new QE;AAr(b,a.lb);if(a.mn)Hv(b.G,0,2048);b.H=a.jj;return b;}
var Yh=F();
var XQ=F();
function Y8(b){var c,d,e,f,g,h,i;c=AMb(Ge(b));d=I1(c);e=BF(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+I1(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Mp(c);h=h+1|0;}return e;}
function JS(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function MD(){var a=this;C.call(a);a.nQ=0;a.pE=0;a.n5=null;}
function AGq(a,b,c){var d=new MD();AMS(d,a,b,c);return d;}
function AMS(a,b,c,d){a.nQ=b;a.pE=c;a.n5=d;}
function AA1(){var a=this;C.call(a);a.m0=null;a.oW=0;}
function AMb(a){var b=new AA1();AFv(b,a);return b;}
function AFv(a,b){a.m0=b;}
var Y7=F();
function I1(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.m0.data;f=b.oW;b.oW=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Ba(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Mp(b){var c,d;c=I1(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function XY(){C.call(this);this.EL=null;}
function Mt(){C.call(this);this.oT=null;}
function AJM(a,b){var c,d,e,f;c=b.data;b=a.oT;d=Ei(c[0]);e=Fr(c[1]);ZH(b.e.h,d,e);Gd(Ce(b),ATp);FN(Ce(b));f=JG(Fn(),b.ew);b=new M;O(b);G(Hs(G(b,B(560)),f),B(236));$rt_globals.console.info($rt_ustr(N(b)));}
function P3(){C.call(this);this.pf=null;}
function AGp(a,b){QH(a.pf,b);}
function Un(){var a=this;C.call(a);a.uE=null;a.uD=null;}
function VQ(){var a=this;C.call(a);a.tx=null;a.ty=null;}
var AAT=F(0);
function ACm(b){return !b?H(By,[B(124),B(134),B(561)]):H(By,[B(124),B(134),B(561),B(41)]);}
function Vb(){var a=this;T.call(a);a.mN=null;a.vF=null;}
function AGa(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b6^Dj(a.mN,c):0;}
function U_(){var a=this;T.call(a);a.ry=null;a.r9=null;a.vk=null;}
function ADd(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b6^Dj(a.ry,c):0;return a.r9.k(b)&&!d?1:0;}
function Nt(){var a=this;T.call(a);a.hL=null;a.tt=null;}
function AIF(a,b){return a.Y^Dj(a.hL,b);}
function AGP(a){var b,c,d;b=new M;O(b);c=GQ(a.hL,0);while(c>=0){HQ(b,Gb(c));BC(b,124);c=GQ(a.hL,c+1|0);}d=b.L;if(d>0)U3(b,d-1|0);return N(b);}
function Nz(){var a=this;T.call(a);a.o$=null;a.uR=null;}
function ALP(a,b){return a.o$.k(b);}
function Nx(){var a=this;T.call(a);a.jc=0;a.nh=null;a.jZ=null;}
function AMt(a,b){return !(a.jc^Dj(a.jZ.C,b))&&!(a.jc^a.jZ.dn^a.nh.k(b))?0:1;}
function Ny(){var a=this;T.call(a);a.ji=0;a.rP=null;a.kL=null;}
function AI2(a,b){return !(a.ji^Dj(a.kL.C,b))&&!(a.ji^a.kL.dn^a.rP.k(b))?1:0;}
function NC(){var a=this;T.call(a);a.sx=0;a.rV=null;a.rK=null;a.tQ=null;}
function AFL(a,b){return a.sx^(!a.rV.k(b)&&!a.rK.k(b)?0:1);}
function ND(){var a=this;T.call(a);a.pe=0;a.o2=null;a.om=null;a.v5=null;}
function ACH(a,b){return a.pe^(!a.o2.k(b)&&!a.om.k(b)?0:1)?0:1;}
function NA(){var a=this;T.call(a);a.oa=null;a.v8=null;}
function AGT(a,b){return CV(a.oa,b);}
function NB(){var a=this;T.call(a);a.r4=null;a.t6=null;}
function AI5(a,b){return CV(a.r4,b)?0:1;}
function NE(){var a=this;T.call(a);a.pw=null;a.o6=0;a.rd=null;}
function ANB(a,b){return !CV(a.pw,b)&&!(a.o6^Dj(a.rd.C,b))?0:1;}
function NG(){var a=this;T.call(a);a.qd=null;a.qu=0;a.pX=null;}
function AFb(a,b){return !CV(a.qd,b)&&!(a.qu^Dj(a.pX.C,b))?1:0;}
function Ns(){var a=this;T.call(a);a.ra=0;a.rO=null;a.sj=null;a.tw=null;}
function APe(a,b){return !(a.ra^a.rO.k(b))&&!CV(a.sj,b)?0:1;}
function Oe(){var a=this;T.call(a);a.se=0;a.l7=null;a.mo=null;a.t2=null;}
function AGW(a,b){return !(a.se^a.l7.k(b))&&!CV(a.mo,b)?1:0;}
function Nq(){var a=this;T.call(a);a.nI=null;a.t7=null;}
function AFa(a,b){return CV(a.nI,b);}
function Nr(){var a=this;T.call(a);a.nO=null;a.v3=null;}
function AGD(a,b){return CV(a.nO,b)?0:1;}
function Nw(){var a=this;T.call(a);a.sr=null;a.p8=0;a.tc=null;}
function AH6(a,b){return CV(a.sr,b)&&a.p8^Dj(a.tc.C,b)?1:0;}
function Np(){var a=this;T.call(a);a.qN=null;a.pg=0;a.p7=null;}
function ANe(a,b){return CV(a.qN,b)&&a.pg^Dj(a.p7.C,b)?0:1;}
function Nu(){var a=this;T.call(a);a.rf=0;a.mL=null;a.pb=null;a.tP=null;}
function AD5(a,b){return a.rf^a.mL.k(b)&&CV(a.pb,b)?1:0;}
function Nv(){var a=this;T.call(a);a.qG=0;a.lY=null;a.q_=null;a.ub=null;}
function AKY(a,b){return a.qG^a.lY.k(b)&&CV(a.q_,b)?0:1;}
var K_=F(0);
function Ri(){var a=this;C.call(a);a.tX=null;a.rQ=null;a.h4=null;a.cl=null;a.hM=0;a.jT=0;}
function L2(a,b){var c,d,e;c=I(a.h4);if(b>=0&&b<=c){Ws(a.cl,null,(-1),(-1));d=a.cl;d.iL=1;d.dK=b;c=d.g$;if(c<0)c=b;d.g$=c;b=a.rQ.b$(b,a.h4,d);if(b==(-1))a.cl.c4=1;if(b>=0){d=a.cl;if(d.h5){e=d.dj.data;if(e[0]==(-1)){c=d.dK;e[0]=c;e[1]=c;}d.g$=Iq(d);return 1;}}a.cl.dK=(-1);return 0;}d=new Bx;Bj(d,Dc(b));J(d);}
function AB$(a){return N6(a.cl,0);}
function YE(a){return QP(a.cl,0);}
function Xo(a){return a.cl.h_;}
function Ca(){Cq.call(this);this.k8=null;}
var AUu=null;var AUv=null;var AUw=null;var AUx=null;var AUy=null;var AUz=null;var AUA=null;var AUB=null;var AUC=null;var AUD=null;var AUE=null;var AUF=null;var AUG=null;var AUH=null;var AUI=null;var ATc=null;function ABr(){ABr=Br(Ca);ALL();}
function Ds(a,b,c){var d=new Ca();N5(d,a,b,c);return d;}
function AHl(a,b,c,d){var e=new Ca();XN(e,a,b,c,d);return e;}
function N5(a,b,c,d){ABr();Dz(a,b,c);a.k8=Sj(d,null);}
function XN(a,b,c,d,e){ABr();Dz(a,b,c);a.k8=Sj(d,e);}
function ALL(){var b;b=new Ca;Dl();N5(b,B(313),0,ATd);AUu=b;AUv=Ds(B(314),1,Cu(0,49,191));AUw=Ds(B(315),2,Bs(B(562)));AUx=Ds(B(48),3,Bs(B(563)));AUy=Ds(B(318),4,ATd);AUz=Ds(B(320),5,Bs(B(564)));AUA=Ds(B(321),6,Bs(B(331)));AUB=Ds(B(49),7,Bs(B(565)));AUC=Ds(B(324),8,Bs(B(566)));AUD=AHl(B(326),9,ASY,Cu(237,235,252));AUE=AHl(B(327),10,Bs(B(328)),Bs(B(567)));AUF=Ds(B(330),11,Bs(B(331)));AUG=Ds(B(332),12,Bs(B(333)));AUH=Ds(B(334),13,Bs(B(335)));b=Ds(B(336),14,Bs(B(337)));AUI=b;ATc=H(Ca,[AUu,AUv,AUw,AUx,AUy,AUz,AUA,
AUB,AUC,AUD,AUE,AUF,AUG,AUH,b]);}
function Ni(){C.call(this);this.pR=null;}
function AL0(a,b){Tm(a.pR,b);}
var Ml=F(Gf);
function AGv(a,b,c,d){var e,f,g;e=0;f=d.v;a:{while(true){if(b>f){b=e;break a;}g=Fi(d,a.P);Dm(d,a.P,b);e=a.cG.c(b,c,d);if(e>=0)break;Dm(d,a.P,g);b=b+1|0;}}return b;}
function AO1(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fi(e,a.P);Dm(e,a.P,c);f=a.cG.c(c,d,e);if(f>=0)break;Dm(e,a.P,g);c=c+(-1)|0;}}return c;}
function AEY(a){return null;}
var O9=F(Bn);
var V1=F(Bn);
function T8(){Fv.call(this);this.vV=0;}
function OY(){Fv.call(this);this.vR=0;}
var WI=F(Bn);
function T2(){var a=this;C.call(a);a.pB=null;a.rz=null;a.sJ=0;a.jt=0;}
function JI(a,b){return B2(a.pB)<b?0:1;}
function NX(){var a=this;C.call(a);a.nc=null;a.nd=null;}
function Rs(){var a=this;C.call(a);a.uq=null;a.n8=null;}
function Rr(){C.call(this);this.tk=null;}
function T6(){var a=this;C.call(a);a.dj=null;a.iW=null;a.ki=null;a.kq=null;a.nl=0;a.h5=0;a.cx=0;a.v=0;a.dK=0;a.h_=0;a.eP=0;a.c4=0;a.vt=0;a.g$=0;a.iL=0;}
function BD(a,b,c){a.iW.data[b]=c;}
function C_(a,b){return a.iW.data[b];}
function Iq(a){return QP(a,0);}
function QP(a,b){QD(a,b);return a.dj.data[(b*2|0)+1|0];}
function Dm(a,b,c){a.dj.data[b*2|0]=c;}
function IV(a,b,c){a.dj.data[(b*2|0)+1|0]=c;}
function Fi(a,b){return a.dj.data[b*2|0];}
function HW(a,b){return a.dj.data[(b*2|0)+1|0];}
function AAM(a){return N6(a,0);}
function N6(a,b){QD(a,b);return a.dj.data[b*2|0];}
function Mc(a,b){return a.ki.data[b];}
function D0(a,b,c){a.ki.data[b]=c;}
function QD(a,b){var c;if(!a.h5){c=new DK;U(c);J(c);}if(b>=0&&b<a.nl)return;c=new Bx;Bj(c,Dc(b));J(c);}
function Ws(a,b,c,d){a.h5=0;a.iL=2;G$(a.dj,(-1));G$(a.iW,(-1));if(b!==null)a.kq=b;if(c>=0){a.cx=c;a.v=d;}a.dK=a.cx;}
function YW(a){return a.iL;}
function VY(){C.call(this);this.sY=null;}
function AKK(a){Dv(a.sY);}
var YA=F();
var OR=F(0);
function V3(){var a=this;C.call(a);a.qf=null;a.qg=0;a.qh=null;}
function Lp(a,b){var c,d,e,f,g,h,i,j,k;c=a.qf;d=a.qg;e=a.qh;if(b<=d){f=Ce(c);g=new Ug;g.mZ=c;h=R(C,1);h.data[0]=e;CY(f,g,B(568),h);}else{i=Ce(c);g=new Ui;g.oE=c;j=R(C,2);k=j.data;k[0]=e;h=BF(1);h.data[0]=250;k[1]=h;CY(i,g,B(569),j);f=Ce(c);g=new Uf;g.pN=c;h=R(C,1);h.data[0]=e;CY(f,g,B(570),h);}}
function RN(){T.call(this);this.uJ=null;}
function ANL(a,b){return Co(b)!=2?0:1;}
function L6(){T.call(this);this.uT=null;}
function ADP(a,b){return Co(b)!=1?0:1;}
function QL(){T.call(this);this.up=null;}
function ADC(a,b){return PU(b);}
function QK(){T.call(this);this.t9=null;}
function AGr(a,b){return 0;}
function VG(){T.call(this);this.vz=null;}
function AHR(a,b){return !Co(b)?0:1;}
function N1(){T.call(this);this.u5=null;}
function ANO(a,b){return Co(b)!=9?0:1;}
function Nb(){T.call(this);this.v0=null;}
function AKm(a,b){return F9(b);}
function PA(){T.call(this);this.uL=null;}
function ALW(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function LZ(){T.call(this);this.tj=null;}
function AOD(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F9(b);}return b;}
function L4(){T.call(this);this.va=null;}
function AFx(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F9(b);}return b;}
function MY(){T.call(this);this.vw=null;}
function ANW(a,b){a:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Oq(){T.call(this);this.vN=null;}
function AJe(a,b){return IO(b);}
function Oz(){T.call(this);this.ur=null;}
function ALk(a,b){return OA(b);}
function SE(){T.call(this);this.vf=null;}
function ANC(a,b){return Co(b)!=3?0:1;}
function Rj(){T.call(this);this.tn=null;}
function AOn(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=F9(b);}return b;}
function Mf(){T.call(this);this.v9=null;}
function AFi(a,b){a:{b:{switch(Co(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=F9(b);}return b;}
function Lr(){T.call(this);this.kC=0;}
function ARl(a){var b=new Lr();AAr(b,a);return b;}
function AAr(a,b){Bq(a);a.kC=b;}
function AKo(a,b){return a.Y^(a.kC!=Co(b&65535)?0:1);}
var QE=F(Lr);
function AMP(a,b){return a.Y^(!(a.kC>>Co(b&65535)&1)?0:1);}
function OS(){C.call(this);this.te=null;}
function AIS(a){var b,c;b=a.te;c=b.nc;b=b.nd;c.C2(b.hI,b.jz,null);}
function UE(){C.call(this);this.mQ=null;}
function ALa(a,b){var c,d,e,f;c=a.mQ;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.n8;c=Bw();b=Cs(b);e=new M;O(e);G(G(e,B(571)),b);Bu(c,N(e));b=Bw();f=d.length;c=new M;O(c);S(G(c,B(572)),f);Bu(b,N(c));}
function UI(){var a=this;C.call(a);a.rr=null;a.rs=null;}
function AJ2(a,b){var c,d;c=a.rr;d=a.rs;b.arrayBuffer().then(Bk(c,"f"),Bk(d,"f"));}
function Sn(){var a=this;C.call(a);a.lI=null;a.lJ=null;}
function AG2(a,b){var c;c=a.lI;Lp(a.lJ,IW(c,b.size));}
function Sq(){C.call(this);this.ss=null;}
function AC$(a,b){var c;c=a.ss;Bu(KY(),$rt_str(b.message));Lp(c,0);}
function Tq(){C.call(this);this.ug=null;}
function AIO(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Ui(){C.call(this);this.oE=null;}
function AKV(a,b){var c,d;c=a.oE;if(!c.hp){b=b.data;c.e.h=Z4(Ei(b[0]),Fr(b[1]));c.ho=1;d=JG(Fn(),c.ew);b=new M;O(b);G(Hs(G(b,B(573)),d),B(236));$rt_globals.console.info($rt_ustr(N(b)));}}
function Uf(){C.call(this);this.pN=null;}
function AIQ(a,b){var c,d,e,f,g,h;c=b.data;d=a.pN;e=(Ei(c[2])).data[0];if(e!=1)Hj(d,b);else{d.hp=1;f=Ei(c[0]);g=Fr(c[1]);b=d.e;b.h=AAU(b.h,f,g,d.ho);U7(d,ABy(e));Gd(Ce(d),ATp);FN(Ce(d));h=JG(Fn(),d.ew);b=new M;O(b);G(Hs(G(b,B(574)),h),B(236));$rt_globals.console.info($rt_ustr(N(b)));Vx(d);Jk(d);}}
function Ug(){C.call(this);this.mZ=null;}
function AKX(a,b){Hj(a.mZ,b);}
var XH=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["dW",ARI(AI_),"cm",ARH(AEj)],Qr,0,C,[],0,3,0,0,0,Mo,0,C,[],3,3,0,0,0,LS,0,C,[],3,3,0,0,0,Vd,0,C,[Mo,LS],0,3,0,0,0,X5,0,C,[],4,0,0,0,0,XR,0,C,[],4,3,0,0,0,Gg,0,C,[],0,3,0,0,0,DN,0,Gg,[],0,3,0,0,0,Bn,0,DN,[],0,3,0,0,0,Zx,0,Bn,[],0,3,0,0,0,C8,0,C,[],3,3,0,0,0,CH,0,C,[],3,3,0,0,0,If,0,C,[],3,3,0,0,0,By,"String",1,C,[C8,CH,If],0,3,0,Ex,["cm",ARH(AEi),"dW",ARI(Bo),"i7",ARI(AGu)],Es,0,Gg,[],0,3,0,0,0,GT,0,Es,[],0,3,0,0,0,Y_,0,GT,[],0,3,0,0,0,DG,0,C,[C8],1,3,0,0,0,E1,0,DG,[CH],0,3,0,
0,["i7",ARI(AIw)],F3,0,C,[C8,If],0,0,0,0,["hh",ARI(IU),"cm",ARH(N)],Hu,0,C,[],3,3,0,0,0,M,0,F3,[Hu],0,3,0,0,["kR",ARL(AIr),"j5",ARK(AFE),"cm",ARH(DD),"hh",ARI(AIz),"lq",ARJ(AIY)],Ee,0,GT,[],0,3,0,0,0,AAt,0,Ee,[],0,3,0,0,0,Y1,0,Ee,[],0,3,0,0,0,Sz,0,C,[],3,3,0,0,0,Dg,0,C,[],3,3,0,0,0,NZ,0,C,[],3,0,0,0,0,H1,0,C,[Sz,Dg,NZ],1,3,0,0,["gx",ARH(Fy)],Qf,0,H1,[],0,3,0,0,0,Xm,0,C,[],0,3,0,0,0,ABG,0,C,[],4,3,0,0,0,Bg,0,C,[],3,3,0,0,0,SK,0,C,[Bg],0,3,0,0,0,Bv,0,C,[],3,3,0,0,0,ZJ,0,C,[Bv],1,3,0,0,0,Xr,0,C,[],3,3,0,0,0,ABf,
0,C,[],3,3,0,0,0,ABa,0,C,[],3,3,0,0,0,K4,0,C,[],0,3,0,0,0,X2,0,C,[Bv],1,3,0,0,0,BU,0,C,[Bv],3,3,0,0,0,SL,0,C,[BU],0,3,0,0,["bb",ARI(ACI)],SJ,0,C,[BU],0,3,0,0,["bb",ARI(ANE)],KE,0,C,[],4,3,0,0,0,AA8,0,C,[],4,3,0,0,0,YG,0,C,[],0,3,0,0,0,ACB,0,C,[],4,3,0,0,0,Mu,0,C,[BU],0,3,0,0,["bb",ARI(AKa)]]);
$rt_metadata([ABw,0,C,[Bv],1,3,0,0,0,XC,0,C,[],0,3,0,0,0,I3,0,C,[Bv],3,3,0,0,0,YU,0,C,[I3],1,3,0,0,["D4",ARI(AOK),"Ds",ARH(AEF)],Zl,0,C,[Bv],1,3,0,0,0,Fx,0,C,[],3,3,0,0,0,RL,0,C,[Fx],0,3,0,0,0,Bx,0,Bn,[],0,3,0,0,0,AAa,0,C,[],4,3,0,0,0,Gk,0,Bn,[],0,3,0,0,0,H7,0,Bn,[],0,3,0,0,0,CZ,0,C,[CH],0,3,0,0,0,LM,0,C,[Bv],3,3,0,0,0,Ro,0,C,[LM],3,3,0,0,0,D6,0,C,[Bv],3,3,0,0,0,ABF,0,C,[Ro,D6],3,3,0,0,0,MZ,0,C,[BU],0,3,0,0,["bb",ARI(ALc)],Zj,0,C,[],4,3,0,0,0,Oo,0,C,[D6],3,3,0,0,0,P7,0,C,[D6],3,3,0,0,0,PY,0,C,[D6],3,3,0,0,0,St,
0,C,[D6],3,3,0,0,0,V0,0,C,[D6],3,3,0,0,0,TG,0,C,[D6,Oo,P7,PY,St,V0],3,3,0,0,0,NI,0,C,[],3,3,0,0,0,Xq,0,C,[Bv,TG,NI,I3],1,3,0,0,["Cb",ARJ(AIU),"D9",ARJ(AJb),"wp",ARI(ADG),"AM",ARK(AKf),"y2",ARI(ANU),"y8",ARH(AEI),"xF",ARK(AC6)],BB,0,Bn,[],0,3,0,0,0,WQ,0,Bn,[],0,3,0,0,0,GP,0,Bx,[],0,3,0,0,0,Yr,0,C,[],0,3,0,0,0,DR,0,C,[],4,3,0,JL,["dW",ARI(ANK)],NH,0,C,[],3,3,0,0,0,Rz,0,C,[NH],0,3,0,0,0,Cg,0,C,[],3,3,0,0,0,QF,0,C,[Cg],0,3,0,0,0,Bh,0,C,[],3,3,0,0,0,ZE,0,C,[Bh],0,3,0,0,0,YV,0,C,[Bv],1,3,0,0,0,Zg,0,C,[Bv],1,3,0,0,
0,P2,0,C,[Bv],3,3,0,0,0,Uz,0,C,[P2],0,3,0,0,["AP",ARI(AHC)],Uv,0,C,[Bh],0,3,0,0,0,O7,0,C,[Bv],3,3,0,0,0,Uw,0,C,[O7],0,3,0,0,["sF",ARJ(AFW)],ABM,0,C,[Bv],1,3,0,0,0,Cf,0,C,[Bv],3,3,0,0,0,Ut,0,C,[Cf],0,3,0,0,["b5",ARI(ALl)],Kj,0,C,[],3,3,0,0,0,En,0,C,[Kj],1,3,0,0,0,Ea,0,C,[],3,3,0,0,0]);
$rt_metadata([Wo,0,C,[Kj],3,3,0,0,0,Mn,0,C,[Wo],3,3,0,0,0,N_,0,En,[Ea,C8,Mn],0,3,0,0,0,Uu,0,C,[BU],0,3,0,0,["bb",ARI(AMA)],AB8,0,C,[Bv],1,3,0,0,0,ACx,0,C,[Bv],1,3,0,0,0,I8,0,C,[Bv],3,3,0,0,0,VR,0,C,[I8],0,3,0,0,["sS",ARI(ALG)],Y$,0,C,[Bv],1,3,0,0,0,VS,0,C,[I8],0,3,0,0,["sS",ARI(AJw)],Oy,0,C,[],0,3,0,0,0,Kx,0,C,[],1,3,0,0,0,ABe,0,Kx,[],0,3,0,0,0,Cp,0,C,[Dg],1,3,0,0,["dG",ARI(AOq)],Is,0,C,[Fx],0,3,0,0,["lx",ARJ(IQ)],Yx,0,C,[],0,3,0,0,0,Vi,0,C,[Cf],0,3,0,0,["b5",ARI(AKM)],Vj,0,C,[Cf],0,3,0,0,["b5",ARI(AK1)],Vk,
0,C,[Cf],0,3,0,0,["b5",ARI(AJu)],Vl,0,C,[Cf],0,3,0,0,["b5",ARI(AIV)],Vm,0,C,[Cf],0,3,0,0,["b5",ARI(AJf)],Vn,0,C,[Cf],0,3,0,0,["b5",ARI(ALA)],Vo,0,C,[Cf],0,3,0,0,["b5",ARI(AHg)],Vp,0,C,[Cf],0,3,0,0,["b5",ARI(AOS)],Vq,0,C,[Cf],0,3,0,0,["b5",ARI(AGA)],Vr,0,C,[Cf],0,3,0,0,["b5",ARI(AMH)],WB,0,C,[Cf],0,3,0,0,["b5",ARI(AOr)],WC,0,C,[Cf],0,3,0,0,["b5",ARI(AI8)],WD,0,C,[Cf],0,3,0,0,["b5",ARI(AJy)],WE,0,C,[Cf],0,3,0,0,["b5",ARI(ALe)],S$,0,C,[],3,3,0,0,0,Tk,0,C,[S$],0,3,0,0,0,Tj,0,C,[Cf],0,3,0,0,["b5",ARI(AIi)],LN,0,
C,[],0,3,0,0,0,ABZ,0,C,[],0,3,0,0,0,H_,0,C,[],3,3,0,0,0,Ci,0,C,[H_],3,3,0,0,0,CA,0,C,[],3,3,0,0,["cc",ARI(AIm),"cy",ARK(ALz),"cu",ARJ(AEB),"cN",ARJ(ADs)],Ez,0,C,[],3,3,0,0,0,EL,0,C,[H_],3,3,0,0,0,E8,0,C,[],3,3,0,0,0,HE,0,C,[],3,3,0,0,0,FQ,0,C,[HE],3,3,0,0,0,Pf,0,C,[Dg],0,3,0,0,0,Bl,0,C,[],0,3,0,0,["cm",ARH(LI)],Vu,0,C,[],0,3,0,0,0,ABd,0,C,[],0,3,0,0,0,XP,0,C,[],3,3,0,0,0,O6,0,C,[],0,3,0,0,0,KU,0,C,[],0,3,0,0,0]);
$rt_metadata([DX,0,KU,[],0,3,0,0,0,U6,0,DX,[],0,3,0,0,0,Em,0,DX,[],0,3,0,0,0,PK,0,DX,[],0,3,0,0,0,AAY,0,Em,[],0,3,0,0,0,AAw,0,Em,[],0,3,0,0,0,X4,0,Em,[],0,3,0,0,0,QN,0,C,[Bv],3,3,0,0,0,ACz,0,C,[QN],3,3,0,0,0,O3,0,C,[Dg],0,3,0,0,0,O5,0,C,[],0,3,0,0,0,Cq,0,C,[CH,C8],1,3,0,0,0,Gs,0,Cq,[],12,3,0,XM,0,Ls,0,C,[],3,3,0,0,0,R_,0,C,[Ls],3,3,0,0,0,Tw,0,C,[],3,3,0,0,0,F_,0,C,[R_,Tw],1,3,0,0,0,IJ,0,F_,[],0,3,0,0,0,YZ,0,IJ,[],0,3,0,0,0,FV,0,F_,[],1,3,0,0,0,KD,0,FV,[],0,3,0,0,["jy",ARK(AH9)],DI,0,Cq,[],12,3,0,ANQ,0,Iz,0,
C,[CH],1,3,0,0,0,Lx,0,Iz,[],0,3,0,YP,0,JC,0,C,[],32,0,0,Xp,0,Of,0,C,[],0,3,0,0,0,Gw,0,Cq,[],12,0,0,Z3,0,F1,0,Cq,[],12,0,0,Z5,0,UA,0,DN,[],0,3,0,0,0,AA7,0,BB,[],0,3,0,0,0,Lw,0,C,[Bv],3,3,0,0,0,Wl,0,C,[Lw],0,3,0,0,["bb",ARI(AMd)],Wn,0,C,[Lw],0,3,0,0,["bb",ARI(AEc)],GE,0,C,[],1,3,0,0,0,Q7,0,C,[],3,3,0,0,0,Kp,0,GE,[CH,Hu,If,Q7],1,3,0,0,0,I5,0,GE,[CH],1,3,0,0,0,Hi,0,C,[],0,3,0,GO,0,Ms,0,Cp,[],0,3,0,0,["bH",ARH(AI4),"ca",ARJ(AHF)],ACk,0,C,[],0,3,0,0,0,ZB,0,C,[Bv],1,3,0,0,0,Jg,0,Kp,[],1,0,0,0,0,Zk,0,Jg,[],0,0,0,0,
0,J_,0,C,[],1,3,0,0,0,K1,0,C,[],0,3,0,0,0,Xz,0,C,[],0,3,0,0,0,KC,0,C,[Bv],3,3,0,0,0,MB,0,C,[KC],0,3,0,0,["bb",ARI(AGl)],MA,0,C,[KC],0,3,0,0,["bb",ARI(AKe)],Mz,0,C,[BU],0,3,0,0,["bb",ARI(AKW)]]);
$rt_metadata([My,0,C,[BU],0,3,0,0,["bb",ARI(AEQ)],R2,0,C,[Cg],0,3,0,0,["cg",ARI(AKu)],R1,0,C,[Cg],0,3,0,0,["cg",ARI(ADQ)],R0,0,C,[Cg],0,3,0,0,["cg",ARI(AHo)],RZ,0,C,[Cg],0,3,0,0,["cg",ARI(AHj)],RY,0,C,[Cg],0,3,0,0,["cg",ARI(AHV)],RX,0,C,[Cg],0,3,0,0,["cg",ARI(ADW)],RW,0,C,[Cg],0,3,0,0,["cg",ARI(AFz)],RV,0,C,[Cg],0,3,0,0,["cg",ARI(AKL)],RU,0,C,[Cg],0,3,0,0,["cg",ARI(AN_)],RT,0,C,[Cg],0,3,0,0,["cg",ARI(AO2)],PJ,0,C,[Cg],0,3,0,0,["cg",ARI(AIM)],PH,0,C,[Cg],0,3,0,0,["cg",ARI(ACU)],PI,0,C,[Cg],0,3,0,0,["cg",ARI(AGh)],PF,
0,C,[Cg],0,3,0,0,["cg",ARI(AIZ)],PG,0,C,[Cg],0,3,0,0,["cg",ARI(AMw)],GN,0,C,[],0,3,0,0,0,N3,0,GN,[],0,3,0,0,0,ABn,0,C,[],0,3,0,0,0,LJ,0,GN,[],0,3,0,0,0,Ta,0,C,[Bv],3,3,0,0,0,MT,0,C,[Ta],0,3,0,0,["sS",ARI(AIG)],TR,0,C,[Bg],0,3,0,0,["m",ARI(U8)],VK,0,I5,[],0,0,0,0,0,AAk,0,C,[Bv],1,3,0,0,0,Jy,0,C,[],4,3,0,AHT,0,UZ,0,C,[],3,3,0,0,0,RF,0,C,[UZ],0,3,0,0,["cm",ARH(AFj)],Tp,0,C,[],3,3,0,0,0,Km,"JsFileHandle",5,C,[Tp],0,3,0,0,["cm",ARH(AIf)],J6,0,J_,[],1,3,0,0,0,Ov,0,J6,[],0,3,0,0,0,HU,0,DN,[],0,3,0,0,0,JN,0,Cp,[],0,
3,0,0,["dG",ARI(AE1),"bH",ARH(AHB),"n7",ARH(AK$),"ca",ARJ(AJP),"qS",ARI(ZW)],Xt,0,Cp,[],0,3,0,0,["dG",ARI(ADe),"bH",ARH(AF$),"ca",ARJ(AMc)],DQ,0,Cp,[],1,3,0,0,0,DS,0,C,[],3,3,0,0,0,U2,0,DQ,[CA,DS],0,3,0,0,["fb",ARJ(ANz),"ca",ARJ(AFF),"bH",ARH(AGm),"cc",ARI(ALw),"cu",ARJ(AHh),"cN",ARJ(AEg),"cy",ARK(AKO)],Wd,0,DQ,[CA],0,3,0,0,["cu",ARJ(AEB),"cN",ARJ(ADs),"ca",ARJ(AEW),"bH",ARH(AK7),"cc",ARI(AMi),"cy",ARK(AH_)],WP,0,DQ,[CA],0,3,0,0,["cc",ARI(AIm),"cy",ARK(ALz),"cu",ARJ(AEB),"cN",ARJ(ADs),"ca",ARJ(AC4),"bH",ARH(ALF),
"dG",ARI(AFh)],Ok,0,Cp,[],0,3,0,0,["bH",ARH(ADv),"ca",ARJ(ANk)],C3,0,Cp,[],0,3,0,0,["bH",ARH(Q6),"ca",ARJ(RA)],PQ,"SelectFileTest",6,C3,[],0,3,0,0,0,ACc,"WorkerTest",7,C3,[],0,3,0,0,0,VF,"RenderTexture",6,C3,[],0,3,0,0,["dG",ARI(AIx),"bH",ARH(AC_),"ca",ARJ(AK5)],Q8,"ScissorDemo",6,C3,[],0,3,0,0,["bH",ARH(AOE),"ca",ARJ(AEL)],NV,0,Cp,[],0,3,0,0,["bH",ARH(AOH),"ca",ARJ(AGN),"dG",ARI(AFn)],HZ,"ClipboardTest",6,C3,[CA],0,3,0,0,["cc",ARI(AIm),"cu",ARJ(AEB),"cN",ARJ(ADs),"cy",ARK(AL7)],Pb,0,Cp,[],0,3,0,0,["bH",ARH(AOz),
"ca",ARJ(AJp)],Vf,0,DQ,[DS],0,3,0,0,["fb",ARJ(AHH),"bH",ARH(AOY),"ca",ARJ(ALn),"dG",ARI(AIt)]]);
$rt_metadata([P$,0,JN,[],0,3,0,0,["n7",ARH(AHM),"qS",ARI(AES)],Ip,0,C,[],3,3,0,0,0,LB,0,C,[Ip,C8],0,3,0,0,0,IM,0,LB,[],0,0,0,0,0,ABW,0,C,[],0,3,0,0,0,XL,0,C,[],3,3,0,0,0,ACu,0,C,[],0,3,0,0,0,TH,0,C,[CA],0,0,0,0,["cc",ARI(ALI),"cy",ARK(AO8),"cu",ARJ(AOR),"cN",ARJ(AKc)],Hp,0,C,[],3,3,0,0,["s6",ARH(AFd),"qY",ARH(APd)],Y3,0,C,[Hp,CA],0,3,0,0,["qY",ARH(AF4),"s6",ARH(AEM),"cN",ARJ(ALp),"cu",ARJ(ANx),"cy",ARK(AHa),"cc",ARI(AFA),"gA",ARI(AKp)],QT,0,C,[Ci],0,3,0,0,["bv",ARI(AJB)],QX,0,C,[Ci],0,3,0,0,["bv",ARI(AG_)],Jl,
0,C,[Ci],0,3,0,0,["bv",ARI(AMk)],QW,0,C,[Bg],0,3,0,0,["m",ARI(ADH)],QV,0,C,[Ci],0,3,0,0,["bv",ARI(AO$)],QU,0,C,[E8],0,3,0,0,["he",ARJ(AKT)],Q0,0,C,[FQ],0,3,0,0,["ga",ARH(AOJ)],QZ,0,C,[Ez],0,3,0,0,["ee",ARK(AIR)],QY,0,C,[EL],0,3,0,0,["bv",ARI(ALU)],B3,0,C,[],0,3,0,0,["dW",ARI(AOM)],Cw,0,C,[],3,3,0,Dl,0,H3,0,C,[],0,3,0,0,0,ABo,0,H3,[],0,3,0,0,0,Zm,0,C,[],0,3,0,0,0,SH,0,C,[CA],0,0,0,0,["cc",ARI(ALf),"cy",ARK(AMK),"cu",ARJ(AJg),"cN",ARJ(AFK)],Qx,0,C,[Ci],0,3,0,0,["bv",ARI(AK_)],Qw,0,C,[Ci],0,3,0,0,["bv",ARI(ANH)],QA,
0,C,[E8],0,3,0,0,["he",ARJ(AN5)],Qy,0,C,[Bh],0,3,0,0,["q",ARH(AN4)],Qv,0,C,[EL],0,3,0,0,["bv",ARI(AJG)],Qu,0,C,[Ez],0,3,0,0,["ee",ARK(AHv)],Id,0,B3,[],0,3,0,0,0,TP,0,C,[],0,3,0,0,0,Ya,0,C,[],0,3,0,0,0,Xn,0,C,[DS,Hp],0,3,0,0,["s6",ARH(AFd),"qY",ARH(APd),"fb",ARJ(AEK),"gA",ARI(ADj)],R4,0,C,[Ci],0,3,0,0,["bv",ARI(ALE)],R7,0,C,[EL],0,3,0,0,["bv",ARI(ACY)],AB_,0,C,[],0,3,0,0,["dW",ARI(AO7)],Kg,0,C,[],0,3,0,0,0,R5,0,C,[Bh],0,3,0,0,["q",ARH(AHf)],R3,0,C,[Bh],0,3,0,0,["q",ARH(AM0)],Dw,0,C,[],0,3,0,0,0,NL,0,C,[DS],0,
3,0,0,["fb",ARJ(AG$)],ZP,0,C,[DS,Hp],0,3,0,0,["s6",ARH(AFd),"qY",ARH(APd),"fb",ARJ(AL$),"gA",ARI(AEf)],NM,0,C,[Ci],0,3,0,0,["bv",ARI(ANg)],NN,0,C,[EL],0,3,0,0,["bv",ARI(AJX)],U5,0,C,[],3,3,0,0,0,G7,0,C,[U5],3,3,0,0,0,Ey,0,C,[G7],1,3,0,0,0,Mb,0,C,[G7],3,3,0,0,0]);
$rt_metadata([FP,0,Ey,[Mb],1,3,0,0,0,HR,0,C,[],3,3,0,0,0,M5,0,FP,[Ea,C8,HR],0,3,0,0,["p4",ARI(Bt),"mM",ARH(AKw),"su",ARI(Eb)],ABY,0,C,[],0,3,0,0,0,SZ,0,C,[DS],0,3,0,0,["fb",ARJ(AJ7)],S0,0,C,[Ci],0,3,0,0,["bv",ARI(AC3)],MF,0,C,[],3,3,0,0,0,ABk,0,C,[MF],0,3,0,0,0,ZM,0,C,[Dg],0,3,0,0,0,AA_,0,C,[],3,3,0,0,0,Ve,0,C,[CA],0,0,0,0,["cy",ARK(ALz),"cu",ARJ(AJY),"cN",ARJ(ALr),"cc",ARI(AF2)],RE,0,C,[Ez],0,3,0,0,["ee",ARK(AFm)],Tn,0,C,[],3,3,0,0,0,ZL,0,C,[],0,3,0,0,0,O$,0,C,[Ci],0,3,0,0,["bv",ARI(AL_)],Qc,0,C,[Bg],0,3,0,
0,["m",ARI(ADq)],Qb,0,C,[Bg],0,3,0,0,["m",ARI(AON)],Qa,0,C,[Bg],0,3,0,0,["m",ARI(AFI)],P_,0,C,[Bg],0,3,0,0,["m",ARI(AKi)],P9,0,C,[Bg],0,3,0,0,["m",ARI(AJx)],P8,0,C,[Bg],0,3,0,0,["m",ARI(ALo)],SG,0,C,[CA],0,0,0,0,["cy",ARK(ALz),"cN",ARJ(ADs),"cc",ARI(ANi),"cu",ARJ(ANF)],AAm,0,C,[],0,3,0,0,0,S8,0,C,[CA],0,0,0,0,["cy",ARK(ALz),"cu",ARJ(ADZ),"cN",ARJ(AEG),"cc",ARI(ADB)],M9,0,C,[Ez],0,3,0,0,["ee",ARK(ADu)],Rh,0,C,[Ci],0,3,0,0,["bv",ARI(ANm)],Rg,0,C,[E8],0,3,0,0,["he",ARJ(AF3)],Re,0,C,[E8],0,3,0,0,["he",ARJ(AML)],Rd,
0,C,[FQ],0,3,0,0,["ga",ARH(AKN)],Rf,0,C,[FQ],0,3,0,0,["ga",ARH(AEv)],QO,0,C,[Ci],0,3,0,0,["bv",ARI(AF9)],Ko,0,C,[],0,3,0,0,0,Qz,0,C,[CA,DS],0,3,0,0,["cc",ARI(AEz),"cy",ARK(AId),"cu",ARJ(AGt),"cN",ARJ(AOx),"fb",ARJ(ANZ)],Pw,0,C,[Ci],0,3,0,0,["bv",ARI(AGC)],Px,0,C,[EL],0,3,0,0,["bv",ARI(AC5)],Py,0,C,[Ez],0,3,0,0,["ee",ARK(ALN)],KX,0,C,[],0,3,0,0,0,NT,0,C,[Bv],3,3,0,0,0,Oc,0,C,[NT],0,3,0,0,["sF",ARJ(AGI)],NU,0,C,[Bv],3,3,0,0,0,Oa,0,C,[NU],0,3,0,0,["sF",ARJ(AHL)],X6,0,C,[],0,3,0,0,0,Xh,0,C,[Bv],3,3,0,0,0,LU,0,C,
[Bh],0,3,0,0,["q",ARH(AIT)],LV,0,C,[Bh],0,3,0,0,["q",ARH(AHs)],UM,0,C,[],0,3,0,0,0,WZ,0,C,[],0,3,0,0,0,MG,0,C,[],0,3,0,0,0,EE,0,C,[Dg],0,0,0,0,0,TE,0,C,[Bg],0,3,0,0,0]);
$rt_metadata([TD,0,C,[Bg],0,3,0,0,["m",ARI(AMj)],Tz,0,C,[Bg],0,3,0,0,["m",ARI(AKg)],Ty,0,C,[Bh],0,3,0,0,["q",ARH(AMg)],TB,0,C,[Bh],0,3,0,0,["q",ARH(AHx)],TA,0,C,[Bh],0,3,0,0,["q",ARH(AJE)],T3,0,C,[Bh],0,3,0,0,["q",ARH(ALH)],Fa,0,Cq,[],12,3,0,ADb,0,IL,0,C,[Dg],0,3,0,0,["gx",ARH(AAC)],Q_,0,C,[Ci],0,3,0,0,["bv",ARI(AO_)],Ra,0,C,[Ci],0,3,0,0,["bv",ARI(AC9)],Sy,0,C,[],0,3,0,0,0,WA,0,C,[],3,3,0,0,0,EP,0,C,[],0,3,0,0,0,GZ,0,C,[],4,3,0,0,0,ACD,0,C,[],0,3,0,0,0,Hy,0,C,[],3,3,0,0,0,VW,0,C,[Hy],0,3,0,0,["mX",ARK(AL2)],VX,
0,C,[Hy],0,3,0,0,0,J1,0,C,[],0,3,0,0,0,UH,0,C,[Bh],0,3,0,0,0,ABl,0,C,[],0,0,0,0,0,WO,0,C,[Bg],0,3,0,0,["m",ARI(ALs)],M3,0,C,[Tn],0,3,0,0,0,Dp,0,C,[],3,3,0,EC,0,ZS,0,C,[],0,3,0,0,0,OI,0,C,[Bg],0,3,0,0,["m",ARI(AH2)],UN,0,C,[CA],0,0,0,0,["cc",ARI(AC8),"cy",ARK(AL4),"cu",ARJ(AMZ),"cN",ARJ(AHU)],Yg,0,C,[],0,3,0,0,0,Jq,0,C,[],0,3,0,0,0,EH,0,C,[],0,3,0,0,0,Ly,0,EH,[],0,3,0,0,0,LY,0,EH,[],0,3,0,0,0,Pc,0,EH,[],0,3,0,0,0,H2,0,C,[],3,3,0,0,0,Qg,0,C,[],3,3,0,0,0,F8,0,C,[CH],0,3,0,0,0,ID,0,C,[],0,3,0,0,0,JZ,0,FV,[],0,3,
0,0,["jy",ARK(AGg)],AB3,0,C,[],0,3,0,0,0,Wq,0,C,[],0,3,0,0,0,Y0,0,C,[Bv],4,3,0,0,0,ACq,0,C,[],0,3,0,0,0,Zo,0,C,[],0,3,0,0,0,ABP,0,C,[],3,3,0,0,0,CO,0,C,[Bv],1,3,0,0,0,AAe,0,CO,[],1,3,0,0,0,AAV,0,CO,[],1,3,0,0,0,X$,0,CO,[],1,3,0,0,0,Yt,0,CO,[],1,3,0,0,0,ABm,0,CO,[],1,3,0,0,0]);
$rt_metadata([Zz,0,En,[Ea,C8],0,3,0,0,0,Cv,0,C,[],0,3,0,0,0,MU,0,C,[Bh],0,3,0,0,["q",ARH(AOw)],Tb,0,C,[Bh],0,3,0,0,["q",ARH(AJa)],B4,0,C,[],0,3,0,0,0,Ic,0,C,[],0,3,0,0,0,JA,0,C,[],0,3,0,0,0,AB7,0,C,[CH],0,3,0,0,["dW",ARI(AMM),"i7",ARI(AEt)],We,0,C,[Fx],0,3,0,0,["lx",ARJ(AG1)],Wg,0,C,[Fx],0,3,0,0,["lx",ARJ(AIC)],EI,0,C,[],0,3,0,0,0,GJ,0,FP,[HR],1,0,0,0,["su",ARI(AJq)],Wu,0,GJ,[HR],0,0,0,0,["mM",ARH(AGe),"p4",ARI(AOl)],Xa,0,C,[],0,3,0,0,["cm",ARH(AG7)],N2,0,C,[G7],3,3,0,0,0,FX,0,Ey,[N2],1,3,0,0,0,Jt,0,FX,[],1,
0,0,0,0,Us,0,Jt,[],0,0,0,0,0,KL,0,En,[],1,0,0,0,0,Uq,0,KL,[],0,0,0,0,0,Ur,0,GJ,[],0,0,0,0,0,Fm,0,C,[],3,3,0,0,0,Uo,0,C,[Fm],0,0,0,0,0,Ot,0,C,[Fm],3,3,0,0,0,Up,0,C,[Ot],0,0,0,0,0,WN,0,C,[Fx],0,3,0,0,0,KH,0,C,[],0,3,0,0,0,MM,0,C,[Fm],0,0,0,0,0,YN,0,C,[],4,3,0,0,0,UK,0,C,[CA],0,0,0,0,["cy",ARK(ALz),"cu",ARJ(AEB),"cN",ARJ(ADs),"cc",ARI(AMs)],YX,0,C,[Bv],1,3,0,0,0,JR,0,C,[Ip,Ea],0,0,0,0,0,HI,0,JR,[],0,0,0,0,0,TU,0,C,[Bg],0,3,0,0,["m",ARI(AHy)],US,0,C,[HE],0,3,0,0,["ga",ARH(AOB)],Cc,0,Cq,[],12,3,0,X7,0,IG,0,C,[],
0,3,0,0,0,WJ,0,C,[],0,3,0,0,0,KR,0,C,[],3,3,0,0,0,Qd,0,C,[KR],0,3,0,0,["pk",ARI(AJQ)],XK,0,C,[],0,3,0,0,0,WY,0,C,[],0,3,0,0,0,Mx,0,C,[Dg],0,3,0,0,0,Fv,0,HU,[],0,3,0,0,0,VV,0,Es,[],0,3,0,0,0,Pl,0,C,[Bg],0,3,0,0,["m",ARI(AKJ)],S5,0,C,[Bh],0,3,0,0,["q",ARH(ANd)],Xe,0,C,[],0,3,0,0,0,K9,0,Bn,[],0,3,0,0,0,Lo,0,DG,[CH],0,3,0,0,0]);
$rt_metadata([Fh,0,C,[],0,0,0,0,0,Jj,0,C,[],4,3,0,0,0,Um,0,C,[],0,3,0,0,0,Lh,0,C,[],1,3,0,0,0,MP,0,C,[Bg],0,3,0,0,["m",ARI(AK2)],UB,0,C,[Bg],0,3,0,0,["m",ARI(AOP)],Zc,0,CO,[],1,3,0,0,0,O8,0,C,[Bh],0,3,0,0,["q",ARH(ACQ)],S4,0,C,[],0,3,0,0,0,DK,0,Bn,[],0,3,0,0,0,AAv,0,Es,[],0,3,0,0,0,Pv,0,C,[Bg],0,3,0,0,["m",ARI(ANT)],ABA,0,C,[CH],0,3,0,0,["dW",ARI(Xc),"i7",ARI(ALj)],M2,0,C,[Bg],0,3,0,0,["m",ARI(ADt)],M0,0,C,[Bg],0,3,0,0,["m",ARI(AFp)],TS,0,C,[Bg],0,3,0,0,0,TQ,0,C,[Bg],0,3,0,0,["m",ARI(AEl)],SA,0,C,[Bg],0,3,0,
0,["m",ARI(AN2)],JF,0,Lh,[],1,3,0,0,0,Sp,0,JF,[],0,3,0,0,0,O1,0,C,[Bg],0,3,0,0,["m",ARI(AEw)],T_,0,C,[Bh],0,3,0,0,["q",ARH(AJ9)],PE,0,C,[BU],0,3,0,0,["bb",ARI(ACS)],Tv,0,C,[BU],0,3,0,0,["bb",ARI(AOo)],ZF,0,C,[Cg],0,3,0,0,0,Q$,0,C,[Bg],0,3,0,0,["m",ARI(ADI)],Q9,0,C,[Bg],0,3,0,0,["m",ARI(AEm)],Qt,0,C,[Bg],0,3,0,0,["m",ARI(AGO)],RR,0,C,[Bh],0,3,0,0,["q",ARH(AIP)],Jd,0,DG,[CH],0,3,0,0,0,KO,0,C,[],4,3,0,0,0,Pt,0,C,[Bh],0,3,0,0,["q",ARH(AKG)],L8,0,C,[BU],0,3,0,0,["bb",ARI(APc)],Od,0,C,[Hy],0,3,0,0,["mX",ARK(ADo)],SP,
0,C,[],0,3,0,0,0,Et,0,C,[Dg],0,3,0,0,["gx",ARH(AKl),"ip",ARK(OZ),"hN",ARI(XW),"nf",ARI(AF7),"cy",ARK(ANp),"cu",ARJ(AFG),"cN",ARJ(ANM),"cc",ARI(AJK),"ee",ARK(AFZ)],Ki,0,Et,[],0,3,0,0,0,UQ,0,Ki,[],0,3,0,0,["hN",ARI(Yq),"nf",ARI(AIk)],Pi,0,Et,[],0,3,0,0,["ip",ARK(AFf),"hN",ARI(AMp),"cy",ARK(AHd),"cu",ARJ(AH$),"cN",ARJ(AGQ),"cc",ARI(AH4),"ee",ARK(AMC)],Sk,0,Et,[],0,3,0,0,0,SU,0,C,[Bg],0,3,0,0,["m",ARI(AJh)],SV,0,C,[Bg],0,3,0,0,["m",ARI(AHw)],QS,0,DG,[CH],0,3,0,0,0,Sx,0,C,[Bh],0,3,0,0,["q",ARH(ALt)],E2,0,Bn,[],0,
3,0,0,0,MS,0,C,[],0,3,0,0,0,ABD,0,C,[],0,3,0,0,0,RI,0,C,[],0,0,0,0,0,Sl,0,C,[Bg],0,3,0,0,0,Wb,0,C,[BU],0,3,0,0,["bb",ARI(AMv)]]);
$rt_metadata([Wa,0,C,[BU],0,3,0,0,["bb",ARI(AFw)],VB,0,C,[BU],0,3,0,0,["bb",ARI(AGU)],VA,0,C,[BU],0,3,0,0,["bb",ARI(AHK)],T9,0,C,[KR],0,3,0,0,["pk",ARI(I6)],Xg,0,C,[],1,3,0,0,0,VH,0,C,[],3,3,0,0,0,V6,0,C,[Cf],0,3,0,0,["b5",ARI(AGL)],XB,0,C,[],0,3,0,0,0,Im,0,E2,[],0,3,0,0,0,Ht,0,Bn,[],0,3,0,0,0,K7,0,Bn,[],0,3,0,0,0,Yk,0,C,[Bg],0,3,0,0,0,Ue,0,C,[Bh],0,3,0,0,["q",ARH(ALO)],VM,0,C,[Bg],0,3,0,0,["m",ARI(AMz)],W0,0,C,[],0,3,0,0,0,GF,0,C,[],0,3,0,0,0,AAP,0,FX,[],0,0,0,0,0,Oh,0,Ey,[],0,0,0,0,0,Vs,0,Bx,[],0,3,0,0,0,Ps,
0,C,[Ls],3,3,0,0,0,MN,0,C,[Ps],3,3,0,0,0,La,0,C,[MN],1,3,0,0,0,YM,0,La,[],0,3,0,0,0,Qo,0,C,[Bh],0,3,0,0,["q",ARH(AEp)],Qn,0,C,[Bh],0,3,0,0,["q",ARH(ACZ)],Qm,0,C,[Bh],0,3,0,0,["q",ARH(AIK)],Ql,0,C,[Bh],0,3,0,0,["q",ARH(ANb)],OC,0,C,[Bh],0,3,0,0,["q",ARH(AMy)],OE,0,C,[Bh],0,3,0,0,["q",ARH(AHP)],OF,0,C,[Bh],0,3,0,0,["q",ARH(AEV)],U0,0,C,[Bh],0,3,0,0,["q",ARH(ADL)],YH,0,C,[],0,3,0,0,0,ABX,0,C,[],0,3,0,0,0,SC,0,C,[Bh],0,3,0,0,["q",ARH(AIh)],SD,0,C,[Bh],0,3,0,0,["q",ARH(AND)],SB,0,C,[Bh],0,3,0,0,["q",ARH(AFq)],UP,
0,C,[H2],0,3,0,0,["lC",ARJ(AJv)],RC,0,C,[Bh],0,3,0,0,["q",ARH(AIl)],RD,0,C,[Bh],0,3,0,0,["q",ARH(AJt)],Nn,0,C,[Bh],0,3,0,0,["q",ARH(AHi)],Nm,0,C,[Bh],0,3,0,0,["q",ARH(ANl)],T5,0,C,[HE],0,3,0,0,["ga",ARH(AFl)],UC,0,C,[Bh],0,3,0,0,["q",ARH(ALd)],UG,0,C,[Bh],0,3,0,0,["q",ARH(AIs)],UF,0,C,[Bh],0,3,0,0,["q",ARH(ADF)],UD,0,C,[Bh],0,3,0,0,["q",ARH(AFt)],WM,0,C,[Bh],0,3,0,0,["q",ARH(AIE)],Ry,0,C,[H2],0,3,0,0,["lC",ARJ(AHA)],O0,0,C,[BU],0,3,0,0,["bb",ARI(AFJ)],Ig,0,C,[Bv],3,3,0,0,0]);
$rt_metadata([L3,0,C,[Ig],0,3,0,0,["pj",ARH(AHQ)],LL,0,C,[Ig],0,3,0,0,["pj",ARH(ACK)],V_,0,C,[BU],0,3,0,0,["bb",ARI(AG9)],Gz,0,C,[],0,0,0,0,0,Tr,0,Gz,[Fm],0,0,0,0,0,PV,0,Gz,[Fm],0,0,0,0,0,PT,0,C,[C8],4,3,0,0,0,Nc,0,C,[Bg],0,3,0,0,["m",ARI(AO6)],M7,0,C,[Bg],0,3,0,0,0,Gc,0,Cq,[],12,0,0,TJ,0,RM,0,C,[Bg],0,3,0,0,["m",ARI(AIv)],BA,0,C,[],1,0,0,0,["b$",ARK(Hg),"cd",ARL(Hq),"hb",ARH(AEd),"J",ARI(ANu),"bK",ARI(ANt),"eV",ARH(AOh),"dN",ARH(Ir)],Tl,0,C,[],32,0,0,APH,0,Oi,0,C,[Bg],0,3,0,0,["m",ARI(AFc)],Sd,0,C,[Bg],0,3,
0,0,["m",ARI(AHn)],WU,0,C,[Bh],0,3,0,0,["q",ARH(AE2)],CM,0,BA,[],0,0,0,Lv,["c",ARK(ADK),"D",ARI(AD4)],Gp,0,C,[],0,0,0,0,0,H9,0,BB,[],0,3,0,0,0,VU,0,C,[BU],0,3,0,0,["bb",ARI(AKU)],Z6,0,C,[Bv],3,3,0,0,0,S_,0,C,[BU],0,3,0,0,["bb",ARI(AKy)],QC,0,CM,[],0,0,0,0,["c",ARK(ADl),"D",ARI(AL9)],Wv,0,CM,[],0,0,0,0,["c",ARK(AE5)],OJ,0,CM,[],0,0,0,0,["c",ARK(AEb)],RG,0,CM,[],0,0,0,0,["c",ARK(ADr),"D",ARI(AKI)],Fe,0,CM,[],0,0,0,0,["c",ARK(ANN)],BS,0,BA,[],1,0,0,0,["c",ARK(AOI),"bP",ARH(AM2),"D",ARI(AHY)],ABx,0,BS,[],0,0,0,
0,["bl",ARJ(AMx),"b$",ARK(AGi),"cd",ARL(AET),"D",ARI(ADp)],BN,0,BA,[],0,0,0,0,["c",ARK(AGR),"J",ARI(AKA),"bK",ARI(AIL),"D",ARI(ALi),"dN",ARH(AEO)],Ik,0,BN,[],0,0,0,0,["c",ARK(AKk),"D",ARI(ALJ)],DB,0,Ik,[],0,0,0,0,["c",ARK(AFu),"J",ARI(ALq)],L1,0,DB,[],0,0,0,0,["c",ARK(AKt),"D",ARI(ANA)],U1,0,DB,[],0,0,0,0,["c",ARK(ADY),"D",ARI(AM6)],PW,0,DB,[],0,0,0,0,["c",ARK(AEJ),"D",ARI(AO9)],Ss,0,DB,[],0,0,0,0,["c",ARK(AC0),"D",ARI(ALZ)],Gf,0,BN,[],0,0,0,0,["c",ARK(ADh),"b$",ARK(AI1),"cd",ARL(AMe),"bK",ARI(AIH),"eV",ARH(AKE),
"dN",ARH(AOk)],Gq,0,C,[],1,0,0,0,0,T,0,Gq,[],1,0,0,NK,["cZ",ARH(AD1),"el",ARH(ADA),"ik",ARH(AMV),"gr",ARH(AOg)],XZ,0,T,[],0,0,0,0,["k",ARI(CV),"cZ",ARH(CQ),"el",ARH(AGb),"ik",ARH(ANj),"cm",ARH(AJN),"gr",ARH(AGn)],Ix,0,Bn,[],0,3,0,0,0,DM,0,BA,[],1,0,0,0,["bK",ARI(AMh),"D",ARI(ANI),"dN",ARH(AJl)],CW,0,DM,[],0,0,0,0,["c",ARK(AC2)],EN,0,CW,[],0,0,0,0,["c",ARK(ADN)],CN,0,DM,[],0,0,0,0,["c",ARK(ADg)],El,0,CW,[],0,0,0,0,["c",ARK(AI7),"J",ARI(APb)],Vc,0,CW,[],0,0,0,0,["c",ARK(AOA),"b$",ARK(AJJ)],V,0,C,[],1,0,0,0,0,C5,
0,BB,[],0,3,0,0,0,Mi,0,Gq,[Ea],0,0,0,0,["cm",ARH(AJU)]]);
$rt_metadata([Nh,0,BA,[],0,0,0,0,["c",ARK(AIo),"D",ARI(AKz)],VN,0,C,[Ea,C8],0,3,0,0,0,L9,0,BN,[],0,0,0,0,0,Pe,0,BN,[],0,0,0,0,["c",ARK(ADJ),"J",ARI(AKh),"D",ARI(AEe),"bK",ARI(AD0)],Do,0,BN,[],0,0,0,0,["c",ARK(AF5),"k",ARI(AGz),"bK",ARI(ADE),"J",ARI(AMO),"D",ARI(AGf)],Iv,0,Do,[],0,0,0,0,["k",ARI(AHZ)],XS,0,BS,[],0,0,0,0,["bl",ARJ(AIp)],D3,0,BS,[],0,0,0,0,["bl",ARJ(LH),"bK",ARI(AKC)],NO,0,BN,[],0,0,0,0,["J",ARI(AI6),"c",ARK(ACR),"bK",ARI(AD$),"D",ARI(ANn)],D_,0,BS,[],0,0,0,0,["bP",ARH(AH8),"bl",ARJ(AG0),"b$",
ARK(AF0),"cd",ARL(AIe),"bK",ARI(ANf)],AB2,0,BS,[],0,0,0,0,["bl",ARJ(ACL)],W5,0,BS,[],0,0,0,0,["bl",ARJ(ADa)],EY,0,BN,[],0,0,0,0,["J",ARI(AOj),"c",ARK(AKj),"bK",ARI(AIq),"D",ARI(ALu)],V9,0,EY,[],0,0,0,0,0,SI,0,EY,[],0,0,0,0,0,WR,0,CN,[],0,0,0,0,["c",ARK(AE$)],OB,0,CN,[],0,0,0,0,["c",ARK(AJA)],Fz,0,CN,[],0,0,0,0,["c",ARK(AMJ),"J",ARI(ANR)],Oj,0,Fz,[],0,0,0,0,["c",ARK(AIa),"J",ARI(AJV)],EV,0,CN,[],0,0,0,0,["c",ARK(AO3)],Mq,0,EV,[],0,0,0,0,["c",ARK(AHt)],Qi,0,CN,[],0,0,0,0,["c",ARK(AOp)],Po,0,Fz,[],0,0,0,0,["c",
ARK(AEh)],TL,0,EV,[],0,0,0,0,["c",ARK(ADw)],Qj,0,DM,[],0,0,0,0,["c",ARK(AOQ),"b$",ARK(AMX)],No,0,DM,[],0,0,0,0,["c",ARK(AKF),"b$",ARK(ACV)],Ew,0,C,[],1,0,0,0,0,WT,0,CW,[],0,0,0,0,["c",ARK(ADy)],U$,0,El,[],0,0,0,0,["c",ARK(AJz)],N8,0,EN,[],0,0,0,0,["c",ARK(AMl)],Pk,0,CW,[],0,0,0,0,["c",ARK(AKx)],S1,0,El,[],0,0,0,0,["c",ARK(ADD)],PX,0,EN,[],0,0,0,0,["c",ARK(AMB)],JE,0,BA,[],4,0,0,0,["c",ARK(AIJ),"D",ARI(AHJ)],Yv,0,BA,[],0,0,0,0,["c",ARK(ADX),"D",ARI(AD7)],Nl,0,BA,[],0,0,0,0,["c",ARK(AH3),"D",ARI(AOZ)],VP,0,BA,
[],4,0,0,0,["c",ARK(ALb),"D",ARI(AEZ)],Vy,0,BA,[],0,0,0,0,["c",ARK(AKd),"D",ARI(ACJ)],MC,0,BA,[],0,0,0,0,["c",ARK(AEN),"D",ARI(AGK)],ABS,0,BN,[],0,0,0,0,["c",ARK(AOu),"J",ARI(AEa),"hb",ARH(AJ1),"D",ARI(AD_)],XX,0,BN,[],4,0,0,0,["c",ARK(AJ8),"J",ARI(AL5),"hb",ARH(ACG),"D",ARI(AOF)],ABI,0,BA,[],4,0,0,0,["c",ARK(AIu),"D",ARI(AGF)],Z2,0,BA,[],0,0,0,0,["c",ARK(AKb),"D",ARI(AGw)],W2,0,BA,[],0,0,0,0,["c",ARK(AHz),"D",ARI(AE4)],GI,0,BN,[],0,0,0,0,["c",ARK(ADz),"J",ARI(ALm),"D",ARI(ALK)],ABN,0,GI,[],0,0,0,0,["c",ARK(AE9),
"b$",ARK(ANw),"cd",ARL(ADm),"bK",ARI(AJs)],Za,0,GI,[],0,0,0,0,["c",ARK(AIW)],Ng,0,F3,[Hu],0,3,0,0,["kR",ARL(AGo),"j5",ARK(AD2),"hh",ARI(AEr),"lq",ARJ(AM1)],Qq,0,BS,[],0,0,0,0,["bl",ARJ(AFr),"b$",ARK(ADS),"cd",ARL(AGJ),"bK",ARI(AHb)],W1,0,BS,[],0,0,0,0,["bl",ARJ(AI3)]]);
$rt_metadata([Mw,0,BS,[],0,0,0,0,["bl",ARJ(AMn)],GH,0,C,[],4,0,0,ALX,0,LQ,0,BS,[],0,0,0,0,["bl",ARJ(AMu)],Kf,0,BN,[],0,0,0,0,["J",ARI(AKr),"c",ARK(AE0),"b$",ARK(AG8),"cd",ARL(AFy),"bK",ARI(ADk),"D",ARI(AM7)],KA,0,BN,[],0,0,0,0,["J",ARI(AEq),"c",ARK(AC1),"b$",ARK(AKP),"cd",ARL(AMm),"bK",ARI(AFs),"D",ARI(AKZ)],DE,0,BS,[],0,0,0,0,["bl",ARJ(ALM),"b$",ARK(AJO),"cd",ARL(AEn),"bK",ARI(ALy)],Ua,0,Ew,[],0,0,0,0,["g1",ARI(AEE),"qI",ARJ(ALD)],Ub,0,Ew,[],0,0,0,0,["g1",ARI(AME),"qI",ARJ(AOc)],AAR,0,C,[],0,0,0,0,0,Xi,0,C,
[],0,0,0,0,0,Kb,0,V,[],0,0,0,0,["A",ARH(Zi)],Ja,0,V,[],0,0,0,0,["A",ARH(ZV)],AAL,0,V,[],0,0,0,0,["A",ARH(AL8)],ABc,0,V,[],0,0,0,0,["A",ARH(AM$)],ABg,0,V,[],0,0,0,0,["A",ARH(AF6)],J9,0,V,[],0,0,0,0,["A",ARH(X0)],KM,0,J9,[],0,0,0,0,["A",ARH(YS)],ACv,0,V,[],0,0,0,0,["A",ARH(AG6)],LF,0,KM,[],0,0,0,0,["A",ARH(WX)],Zu,0,LF,[],0,0,0,0,["A",ARH(AJm)],ZQ,0,V,[],0,0,0,0,["A",ARH(AFk)],Yn,0,V,[],0,0,0,0,["A",ARH(AJi)],X8,0,V,[],0,0,0,0,["A",ARH(AOf)],ABj,0,V,[],0,0,0,0,["A",ARH(AJW)],ACF,0,V,[],0,0,0,0,["A",ARH(ACT)],AAS,
0,V,[],0,0,0,0,["A",ARH(AHE)],AAF,0,V,[],0,0,0,0,["A",ARH(ALQ)],ABC,0,V,[],0,0,0,0,["A",ARH(AFg)],XA,0,V,[],0,0,0,0,["A",ARH(AFH)],Xf,0,V,[],0,0,0,0,["A",ARH(AN9)],AAX,0,V,[],0,0,0,0,["A",ARH(ACM)],AA6,0,V,[],0,0,0,0,["A",ARH(AIy)],YL,0,V,[],0,0,0,0,["A",ARH(AFP)],ZT,0,V,[],0,0,0,0,["A",ARH(AGM)],ACa,0,V,[],0,0,0,0,["A",ARH(AIA)],AA5,0,V,[],0,0,0,0,["A",ARH(ANq)],Y9,0,V,[],0,0,0,0,["A",ARH(AK8)],YJ,0,V,[],0,0,0,0,["A",ARH(AJR)],ACA,0,V,[],0,0,0,0,["A",ARH(AL1)],IF,0,V,[],0,0,0,0,["A",ARH(ZR)],ABE,0,IF,[],0,
0,0,0,["A",ARH(AJF)],ZA,0,Kb,[],0,0,0,0,["A",ARH(ADR)],YD,0,Ja,[],0,0,0,0,["A",ARH(AGX)],Yb,0,V,[],0,0,0,0,["A",ARH(AIN)],Yy,0,V,[],0,0,0,0,["A",ARH(ANY)],Zp,0,V,[],0,0,0,0,["A",ARH(AGs)],Zw,0,V,[],0,0,0,0,["A",ARH(ACN)],Yh,0,C,[],4,0,0,0,0,XQ,0,C,[],4,3,0,0,0,MD,0,C,[],0,3,0,0,0]);
$rt_metadata([AA1,0,C,[],0,3,0,0,0,Y7,0,C,[],4,3,0,0,0,XY,0,C,[H_],0,3,0,0,0,Mt,0,C,[Bg],0,3,0,0,["m",ARI(AJM)],P3,0,C,[Bg],0,3,0,0,["m",ARI(AGp)],Un,0,C,[Bg],0,3,0,0,0,VQ,0,C,[Bg],0,3,0,0,0,AAT,0,C,[],3,3,0,0,0,Vb,0,T,[],0,0,0,0,["k",ARI(AGa)],U_,0,T,[],0,0,0,0,["k",ARI(ADd)],Nt,0,T,[],0,0,0,0,["k",ARI(AIF),"cm",ARH(AGP)],Nz,0,T,[],0,0,0,0,["k",ARI(ALP)],Nx,0,T,[],0,0,0,0,["k",ARI(AMt)],Ny,0,T,[],0,0,0,0,["k",ARI(AI2)],NC,0,T,[],0,0,0,0,["k",ARI(AFL)],ND,0,T,[],0,0,0,0,["k",ARI(ACH)],NA,0,T,[],0,0,0,0,["k",
ARI(AGT)],NB,0,T,[],0,0,0,0,["k",ARI(AI5)],NE,0,T,[],0,0,0,0,["k",ARI(ANB)],NG,0,T,[],0,0,0,0,["k",ARI(AFb)],Ns,0,T,[],0,0,0,0,["k",ARI(APe)],Oe,0,T,[],0,0,0,0,["k",ARI(AGW)],Nq,0,T,[],0,0,0,0,["k",ARI(AFa)],Nr,0,T,[],0,0,0,0,["k",ARI(AGD)],Nw,0,T,[],0,0,0,0,["k",ARI(AH6)],Np,0,T,[],0,0,0,0,["k",ARI(ANe)],Nu,0,T,[],0,0,0,0,["k",ARI(AD5)],Nv,0,T,[],0,0,0,0,["k",ARI(AKY)],K_,0,C,[],3,3,0,0,0,Ri,0,C,[K_],4,3,0,0,0,Ca,0,Cq,[],12,3,0,ABr,0,Ni,0,C,[Bg],0,3,0,0,["m",ARI(AL0)],Ml,0,Gf,[],0,0,0,0,["b$",ARK(AGv),"cd",
ARL(AO1),"eV",ARH(AEY)],O9,0,Bn,[],0,3,0,0,0,V1,0,Bn,[],0,3,0,0,0,T8,0,Fv,[],0,3,0,0,0,OY,0,Fv,[],0,3,0,0,0,WI,0,Bn,[],0,3,0,0,0,T2,0,C,[],0,3,0,0,0,NX,0,C,[Bh],0,3,0,0,0,Rs,0,C,[Bg],0,3,0,0,0,Rr,0,C,[Bg],0,3,0,0,0,T6,0,C,[K_],0,0,0,0,0,VY,0,C,[Bh],0,3,0,0,["q",ARH(AKK)],YA,0,C,[],0,3,0,0,0,OR,0,C,[],3,3,0,0,0,V3,0,C,[OR],0,3,0,0,0,RN,0,T,[],0,0,0,0,["k",ARI(ANL)],L6,0,T,[],0,0,0,0,["k",ARI(ADP)],QL,0,T,[],0,0,0,0,["k",ARI(ADC)]]);
$rt_metadata([QK,0,T,[],0,0,0,0,["k",ARI(AGr)],VG,0,T,[],0,0,0,0,["k",ARI(AHR)],N1,0,T,[],0,0,0,0,["k",ARI(ANO)],Nb,0,T,[],0,0,0,0,["k",ARI(AKm)],PA,0,T,[],0,0,0,0,["k",ARI(ALW)],LZ,0,T,[],0,0,0,0,["k",ARI(AOD)],L4,0,T,[],0,0,0,0,["k",ARI(AFx)],MY,0,T,[],0,0,0,0,["k",ARI(ANW)],Oq,0,T,[],0,0,0,0,["k",ARI(AJe)],Oz,0,T,[],0,0,0,0,["k",ARI(ALk)],SE,0,T,[],0,0,0,0,["k",ARI(ANC)],Rj,0,T,[],0,0,0,0,["k",ARI(AOn)],Mf,0,T,[],0,0,0,0,["k",ARI(AFi)],Lr,0,T,[],0,0,0,0,["k",ARI(AKo)],QE,0,Lr,[],0,0,0,0,["k",ARI(AMP)],OS,
0,C,[Ig],0,3,0,0,["pj",ARH(AIS)],UE,0,C,[BU],0,3,0,0,["bb",ARI(ALa)],UI,0,C,[BU],0,3,0,0,["bb",ARI(AJ2)],Sn,0,C,[BU],0,3,0,0,["bb",ARI(AG2)],Sq,0,C,[BU],0,3,0,0,["bb",ARI(AC$)],Tq,0,C,[BU],0,3,0,0,["bb",ARI(AIO)],Ui,0,C,[Bg],0,3,0,0,["m",ARI(AKV)],Uf,0,C,[Bg],0,3,0,0,["m",ARI(AIQ)],Ug,0,C,[Bg],0,3,0,0,["m",ARI(AKX)],XH,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Ic=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ",
"#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = vTex;\n  gl_Position = pos;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec4 pos = vec4(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w, 0.0, 1.0);\n  outScreenPos = (pos.xy + 1.0) * 0.5 * uResolution;\n  textureUV = uTexTransform.xy + vTex * uTexTransform.zw;\n  gl_Position = pos;\n}",
"#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ",
"Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","",
"w = ",", lineHeight = ","Segoe UI","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","#B9BDC9","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...",
"Development >","pointer","text","ew-resize","ns-resize","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","5","private static void foo (...);","25","String foo = \"boo\";","131","int a = 5;","class.java","176","public class FindTest extend Test {...};","1234","sub.java","4321","demo.java","23872","demoWWWWWWWWWWWWWWWWWWWWWWWWW.java","demoWWDSADASWDAWDAWDKOAWPDKOPKDPAWKDOADOPKWDOPAKWDOP.java",
"demoWWDSADASWDAWDAWDKOAWPDKOPKDPAWKDOADOPDSAHJDSAKDJSAHDKHDKWDOPAKWDOP.java","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1: ","Window 2: ","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ",
"int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ","\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing",
"CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","#A9B7C6","#40332B","#edebfc","#344134","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","trying to display with unknown screen size and dpr","onContextMenu","#616161","tbH onClickOutside","tbV onClickOutside","...","... and "," more usages","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.",
"  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","|The sample text"," on Copy","newWindow","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","#BBBBBB","onEnter item ","FindUsages size is unknown","#3C3F41","#4B6EAF","\\n","defaultText","keyword","field","#9876AA","#6A8759","comma","#CC7832","error","unused","#72737A","#6897BB",
"method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080","annotation","#BBB529","type","#287BDE","operator","#5F8C8A"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","closed","onPosChange: ","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ","Current Version: ",
"Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin",
"Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid",
"Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes",
"MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended",
"CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants",
"ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in ","Verdana","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
By.prototype.toString=function(){return $rt_ustr(this);};
By.prototype.valueOf=By.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AEj(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cm=Long_add;var JG=Long_sub;var BM=Long_mul;var Dd=Long_div;var L$=Long_rem;var APW=Long_or;var CS=Long_and;var AUJ=Long_xor;var E7=Long_shl;var Ga=Long_shr;var DU=Long_shru;var AQg=Long_compare;var EW=Long_eq;var AUK=Long_ne;var AFS=Long_lt;var OL=Long_le;var AFB=Long_gt;var Ys=Long_ge;var AUL=Long_not;var AQs=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AQw);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=SL.prototype;c.f=c.bb;c=SJ.prototype;c.f=c.bb;c=Mu.prototype;c.f=c.bb;c=YU.prototype;c.get=c.D4;Object.defineProperty(c,"length",{get:c.Ds});c=MZ.prototype;c.f=c.bb;c=Xq.prototype;c.removeEventListener=c.AM;c.dispatchEvent=c.y2;c.get=c.wp;c.addEventListener=c.xF;Object.defineProperty(c,"length",{get:c.y8});c=Uz.prototype;c.onAnimationFrame=c.AP;c=Uw.prototype;c.f=c.sF;c=Ut.prototype;c.handleEvent=c.b5;c=Uu.prototype;c.f=c.bb;c=VR.prototype;c.accept=c.sS;c=VS.prototype;c.accept=c.sS;c=Vi.prototype;c.handleEvent
=c.b5;c=Vj.prototype;c.handleEvent=c.b5;c=Vk.prototype;c.handleEvent=c.b5;c=Vl.prototype;c.handleEvent=c.b5;c=Vm.prototype;c.handleEvent=c.b5;c=Vn.prototype;c.handleEvent=c.b5;c=Vo.prototype;c.handleEvent=c.b5;c=Vp.prototype;c.handleEvent=c.b5;c=Vq.prototype;c.handleEvent=c.b5;c=Vr.prototype;c.handleEvent=c.b5;c=WB.prototype;c.handleEvent=c.b5;c=WC.prototype;c.handleEvent=c.b5;c=WD.prototype;c.handleEvent=c.b5;c=WE.prototype;c.handleEvent=c.b5;c=Tj.prototype;c.handleEvent=c.b5;c=Wl.prototype;c.f=c.bb;c=Wn.prototype;c.f
=c.bb;c=MB.prototype;c.f=c.bb;c=MA.prototype;c.f=c.bb;c=Mz.prototype;c.f=c.bb;c=My.prototype;c.f=c.bb;c=MT.prototype;c.accept=c.sS;c=Oc.prototype;c.f=c.sF;c=Oa.prototype;c.f=c.sF;c=PE.prototype;c.f=c.bb;c=Tv.prototype;c.f=c.bb;c=L8.prototype;c.f=c.bb;c=Wb.prototype;c.f=c.bb;c=Wa.prototype;c.f=c.bb;c=VB.prototype;c.f=c.bb;c=VA.prototype;c.f=c.bb;c=V6.prototype;c.handleEvent=c.b5;c=O0.prototype;c.f=c.bb;c=L3.prototype;c.onTimer=c.pj;c=LL.prototype;c.onTimer=c.pj;c=V_.prototype;c.f=c.bb;c=VU.prototype;c.f=c.bb;c
=S_.prototype;c.f=c.bb;c=OS.prototype;c.onTimer=c.pj;c=UE.prototype;c.f=c.bb;c=UI.prototype;c.f=c.bb;c=Sn.prototype;c.f=c.bb;c=Sq.prototype;c.f=c.bb;c=Tq.prototype;c.f=c.bb;})();
}));
