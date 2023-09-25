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
index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eX=f;}
function $rt_cls(cls){return ACy(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return F0(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b3.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return APl(t);}
function $rt_throwableCause(t){return APu(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AU8());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AU9(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AU$());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BF=$rt_compare;var AU_=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var IM=$rt_isInstance;var AVa=$rt_nativeThread;var AVb=$rt_suspending;var AVc=$rt_resuming;var AVd=$rt_invalidPointer;var B=$rt_s;var Bm=$rt_eraseClinit;var V=$rt_imul;var Ei=$rt_wrapException;var AVe=$rt_checkBounds;var AVf=$rt_checkUpperBound;var AVg=$rt_checkLowerBound;var AVh=$rt_wrapFunction0;var AVi=$rt_wrapFunction1;var AVj=$rt_wrapFunction2;var AVk=$rt_wrapFunction3;var AVl=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var ABj=$rt_createCharArrayFromData;var ATT=$rt_createByteArrayFromData;var AVm=$rt_createShortArrayFromData;var E8=$rt_createIntArrayFromData;var AVn=$rt_createBooleanArrayFromData;var AVo=$rt_createFloatArrayFromData;var AVp=$rt_createDoubleArrayFromData;var AHd=$rt_createLongArrayFromData;var AU7=$rt_createBooleanArray;var DX=$rt_createByteArray;var AVq=$rt_createShortArray;var BQ=$rt_createCharArray;var BG=$rt_createIntArray;var AUL=$rt_createLongArray;var AFn=$rt_createFloatArray;var AVr
=$rt_createDoubleArray;var BF=$rt_compare;var AVs=$rt_castToClass;var AVt=$rt_castToInterface;var AVu=Long_toNumber;var Be=Long_fromInt;var AVv=Long_fromNumber;var Cd=Long_create;var Eo=Long_ZERO;var AVw=Long_hi;var EE=Long_lo;
function C(){this.$id$=0;}
function AVx(){var a=new C();ADN(a);return a;}
function ADN(a){}
function Cf(a){return ACy(a.constructor);}
function AMg(a,b){return a!==b?0:1;}
function AG0(a){var b,c,d,e,f,g,h,i,j;b=YP(a);if(!b)c=B(0);else{d=(((32-NY(b)|0)+4|0)-1|0)/4|0;e=BQ(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Hj((b>>>g|0)&15,16);g=g-4|0;h=i;}c=F0(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function YP(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALx(a){var b,c,d;if(!IM(a,En)&&a.constructor.$meta.item===null){b=new V_;Y(b);K(b);}b=AFz(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function RZ(){var a=this;C.call(a);a.uX=0;a.rj=null;}
function AT8(b){var c,d,e,f,g,h,i,j,k,l;ADL();Y5();ABU();AC0();AE7();AAv();ADr();ADP();YW();AB_();YV();ACP();ACQ();ABw();AAD();AAV();ZT();AA4();AA6();Zd();ACh();YX();AEO();c=(Zi()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Pj(B(2),B(3));else{d=new RZ;BN(d);e=new Ui;e.sS=d;f=new Ns;c=new $rt_globals.Worker("teavm/worker.js");g=new N2;g.po=c;g.pp=e;g.pq=f;e=Bk(g,"f");c.onmessage=e;h=H(LY,[JS(B(4),B(5),400),JS(B(6),B(7),400),JS(B(8),B(5),
700),JS(B(9),B(7),700)]);b=R(LY,1);b.data[0]=AQm(B(10),Fe(B(11),B(12)),B(5),400);b=(LU(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.sp;f=c.rd;k=new M;O(k);BE(G(G(k,B(13)),f),41);k=N(k);f=c.q$;l=c.o9;f=AJn($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BN(d);c=new Uj;c.tS=d;g=new Uh;e.then(Bk(c,"f"),Bk(g,"f"));}}
function ABA(b){var c,d,e,f,g,h,i,j,k;c=new S9;d=new Sb;c.qm=new $rt_globals.TextDecoder("utf-16");e=new V$;e.o3=c;c.r6=e;e=new V3;e.vc=c;c.mx=e;f=new V4;f.rW=c;c.t2=new $rt_globals.ResizeObserver(Bk(f,"f"));e=new V1;e.on=c;c.nf=e;c.iy=1;f=new Ph;f.x1=null;f.jP=AVy;c.ma=f;c.qN=b;f=new V2;f.ua=c;e=Bk(f,"f");b.onmessage=e;e=ABv();b.postMessage(e);c.m$=(Eb()).getElementById("canvasDiv");b=Zi();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dQ
=b;c.m$.appendChild(b);f=c.dQ;e=ANG(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)Pj(B(2),B(14));else{g=new PE;e=c.dQ;f=c.mx;g.dG=null;g.hf=e;g.co=AUh(f);h=$rt_globals.window;i=R(Dr,14);j=i.data;k=new WV;k.nw=g;j[0]=CU(g,e,B(15),k);f=new WW;f.sy=g;j[1]=CU(g,e,B(16),f);f=new WX;f.oL=g;j[2]=CU(g,e,B(17),f);f=new WY;f.u9=g;j[3]=CU(g,e,B(18),f);f=new WZ;f.rI=g;j[4]=CU(g,e,B(19),f);f=new W0;f.n1=g;j[5]=CU(g,e,B(20),f);k=new W1;k.vn=g;j[6]=CU(g,e,B(21),k);k=new W2;k.rZ=g;j[7]=CU(g,e,B(22),k);k=new W3;k.ob
=g;j[8]=CU(g,e,B(23),k);k=new W4;k.uj=g;j[9]=CU(g,e,B(24),k);k=new Yj;k.tM=g;j[10]=CU(g,e,B(25),k);k=new Yk;k.sO=g;j[11]=ACJ(g,h,B(26),k,1);k=new Yl;k.mT=g;j[12]=CU(g,h,B(27),k);k=new Ym;k.uG=g;j[13]=CU(g,h,B(28),k);g.xf=ARN(i);AAN(g,e);c.lK=g;c.gf=ATF(b,c.mx);APZ(c.t2,c.dQ);e=$rt_globals.window;g=c.nf;e.addEventListener("resize",Bk(g,"handleEvent"));c.fz=ABP(d,AAF(c));TM(c);}ADc(c);}
var Nm=F(0);
var MS=F(0);
function WR(){var a=this;C.call(a);a.kC=null;a.f2=null;}
function ACy(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new WR;c.f2=b;d=c;b.classObject=d;}return c;}
function H_(a){if(a.kC===null)a.kC=$rt_str(a.f2.$meta.name);return a.kC;}
function HY(a){return a.f2.$meta.primitive?1:0;}
function Ig(a){return ACy(a.f2.$meta.item);}
var ZX=F();
function Bk(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Lt(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ZF=F();
function AFz(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ACB(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ACB(d[e],c))return 1;e=e+1|0;}return 0;}
function GB(){var a=this;C.call(a);a.hB=null;a.k9=null;a.jt=0;a.jR=0;}
function AVz(){var a=new GB();Y(a);return a;}
function AVA(a){var b=new GB();Bo(b,a);return b;}
function Y(a){a.jt=1;a.jR=1;}
function Bo(a,b){a.jt=1;a.jR=1;a.hB=b;}
function AI4(a){return a;}
function APl(a){return a.hB;}
function APu(a){var b;b=a.k9;if(b===a)b=null;return b;}
var D4=F(GB);
var Bq=F(D4);
function AU9(a){var b=new Bq();ARq(b,a);return b;}
function ARq(a,b){Bo(a,b);}
var ABz=F(Bq);
var Dh=F(0);
var CK=F(0);
var IZ=F(0);
function Bv(){var a=this;C.call(a);a.b3=null;a.hX=0;}
var AVB=null;var AVC=null;var AVD=null;function EO(){EO=Bm(Bv);AQY();}
function AJO(){var a=new Bv();YY(a);return a;}
function F0(a){var b=new Bv();Hs(b,a);return b;}
function HC(a,b,c){var d=new Bv();ME(d,a,b,c);return d;}
function YY(a){EO();a.b3=AVB;}
function Hs(a,b){EO();ME(a,b,0,b.data.length);}
function ME(a,b,c,d){var e;EO();e=BQ(d);a.b3=e;Dw(b,c,e,0,d);}
function MA(b){var c;EO();c=AJO();c.b3=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.b3.data;if(b<c.length)return c[b];}d=new Hh;Y(d);K(d);}
function I(a){return a.b3.data.length;}
function Fq(a){return a.b3.data.length?0:1;}
function P0(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=I(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dw(a.b3,b,d,e,c);return;}}g=new BA;Y(g);K(g);}
function UJ(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function KJ(a,b){if(a===b)return 1;return UJ(a,b,0);}
function Ef(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GM(a,b,c){var d,e,f,g,h;d=Bb(0,c);if(b<65536){e=b&65535;while(true){f=a.b3.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Ic(b);h=IS(b);while(true){f=a.b3.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function F5(a,b,c){var d,e,f,g,h;d=Z(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b3.data[d]==e)break;d=d+(-1)|0;}return d;}f=Ic(b);g=IS(b);while(true){if(d<1)return (-1);h=a.b3.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function AAn(a,b,c){var d,e,f;d=Bb(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function PX(a,b,c){var d,e;d=Z(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ca(a,b,c){var d,e;d=BF(b,c);if(d>0){e=new BA;Y(e);K(e);}if(!d){EO();return AVC;}if(!b&&c==I(a))return a;return HC(a.b3,b,c-b|0);}
function Dj(a,b){return Ca(a,b,I(a));}
function P6(a,b,c){return Ca(a,b,c);}
function Fe(a,b){var c,d,e,f,g,h;if(Fq(b))return a;if(Fq(a))return b;c=BQ(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return MA(c);}
function VD(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BE(d,L(a,f));}f=f+1|0;}G(d,Dj(a,f));return N(d);}
function Sf(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return Ca(a,b,c+1|0);}
function AGZ(a){return a;}
function Gz(a){var b,c,d,e,f;b=a.b3.data;c=BQ(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function CA(b){EO();return b===null?B(29):b.cw();}
function C7(b){var c;EO();c=new M;O(c);return N(U(c,b));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function Lr(a){var b,c,d,e;a:{if(!a.hX){b=a.b3.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hX=(31*a.hX|0)+e|0;d=d+1|0;}}}return a.hX;}
function Ma(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GG;Bo(b,B(30));K(b);}AVE=1;d=new Rn;d.km=R(CP,10);d.gm=(-1);d.eO=(-1);d.by=(-1);e=new GO;e.eK=1;e.bP=b;e.bg=BQ(I(b)+2|0);Dw(Gz(b),0,e.bg,0,I(b));f=e.bg.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.rM=g;e.f6=0;E5(e);E5(e);d.g=e;d.dr=0;d.lk=Yb(d,(-1),0,null);if(!Di(d.g)){b=new IV;h=d.g;Jn(b,B(31),h.bP,h.c$);K(b);}if(d.nA)d.lk.ej();b=CD();h=new ST;h.iv=(-1);h.kH=(-1);h.wn=d;h.tY=d.lk;h.iS=a;h.iv=0;g=I(a);h.kH=g;e=new VG;i=h.iv;j=d.gm;k=d.eO+1|0;l=d.by+
1|0;e.hI=(-1);m=j+1|0;e.oE=m;e.dP=BG(m*2|0);f=BG(l);e.jM=f;Hz(f,(-1));if(k>0)e.k_=BG(k);Hz(e.dP,(-1));X7(e,a,i,g);h.cv=e;e.fo=1;n=0;m=0;if(!I(a)){f=R(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.iS);if(!Y8(h))l=h.kH;e=h.cv;if(e.ee>=0&&AAT(e)==1){e=h.cv;e.ee=I_(e);if(I_(h.cv)==ACZ(h.cv)){e=h.cv;e.ee=e.ee+1|0;}g=h.cv.ee;g=g<=l&&M0(h,g)?1:0;}else g=M0(h,h.iv);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;B2(b,P6(a,m,AEx(h)));m=AAz(h);n=g;}a:{B2(b,P6(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bs(b,
g)))break a;D7(b,g);}}if(g<0)g=0;f=HP(b,R(Bv,g));}return f;}
function AJc(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Z(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AQY(){AVB=BQ(0);AVC=AJO();AVD=new To;}
var EI=F(GB);
var Hk=F(EI);
var ABb=F(Hk);
var DW=F();
function Fi(){DW.call(this);this.fK=0;}
var AVF=null;var AVG=null;function AD7(a){var b=new Fi();J6(b,a);return b;}
function J6(a,b){a.fK=b;}
function Jz(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dd;Bo(b,B(32));K(b);}d=I(b);if(0==d){b=new Dd;Bo(b,B(33));K(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dd;Y(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=Pb(L(b,f));if(i<0){j=new Dd;k=Ca(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bo(j,N(b));K(j);}if(i>=c){j=new Dd;l=Ca(b,0,d);b=new M;O(b);G(G(U(G(b,B(35)),c),B(36)),l);Bo(j,N(b));K(j);}g=V(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dd;k=Ca(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bo(j,N(b));K(j);}b=new Dd;j=new M;O(j);U(G(j,B(38)),c);Bo(b,N(j));K(b);}
function F4(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AVG===null){AVG=R(Fi,256);c=0;while(true){d=AVG.data;if(c>=d.length)break a;d[c]=AD7(c-128|0);c=c+1|0;}}}return AVG.data[b+128|0];}return AD7(b);}
function Mi(a){var b;b=a.fK;return (NJ(AUT(20),b,10)).cw();}
function NY(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Ir(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Kj(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function ALs(a,b){b=b;return BF(a.fK,b.fK);}
function ADL(){AVF=E($rt_intcls());}
function Go(){var a=this;C.call(a);a.E=null;a.Q=0;}
function AVH(){var a=new Go();O(a);return a;}
function AUT(a){var b=new Go();F2(b,a);return b;}
function O(a){F2(a,16);}
function F2(a,b){a.E=BQ(b);}
function NJ(a,b,c){return ABq(a,a.Q,b,c);}
function ABq(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ce(a,b,b+1|0);else{Ce(a,b,b+2|0);f=a.E.data;g=b+1|0;f[b]=45;b=g;}a.E.data[b]=Hj(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=V(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ce(a,b,b+i|0);if(e)e=b;else{f=a.E.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.E.data;b=e+1|0;f[e]=Hj($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ACp(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BF(c,0.0);if(!d){Ce(a,b,b+3|0);e=a.E.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ce(a,b,b+4|0);e=a.E.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ce(a,b,b+3|0);e=a.E.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ce(a,b,b+8|0);d=b;}else{Ce(a,b,b+9|0);e=a.E.data;d=b+1|0;e[b]=45;}e=a.E.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVI;ACi(c,f);d=f.kM;g=f.kx;h=f.nV;i=1;j=1;if(h)j=2;k=9;l=AQq(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bb(k,i+1|0);g=0;}else{d=d/AVJ.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ce(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.E.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.E.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.E.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function AAg(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BF(c,0.0);if(!d){Ce(a,b,b+3|0);e=a.E.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ce(a,b,b+4|0);e=a.E.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ce(a,b,b+3|0);e=a.E.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ce(a,b,b+8|0);d=b;}else{Ce(a,b,b+9|0);e=a.E.data;d=b+1|0;e[b]=45;}e=a.E.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVK;ABt(c,f);g=f.lm;h=f.kf;i=f.nu;j=1;k=1;if(i)k=2;l=18;m=AN$(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bb(l,j+1|0);h=0;}else{g=Do(g,AVL.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ce(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.E.data;k=b+1|0;e[b]=45;}n=Cd(1569325056, 23283064);o=0;while(o<l){if(PW(n,Eo))d=0;else{d=EE(Do(g,n));g
=M7(g,n);}e=a.E.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Do(n,Be(10));o=o+1|0;}if(h){e=a.E.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function AQq(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AN$(b){var c,d,e,f,g;c=Be(1);d=0;e=16;f=AVM.data;g=f.length-1|0;while(g>=0){if(Fd(M7(b,BR(c,f[g])),Eo)){d=d|e;c=BR(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BE(a,b){return a.mh(a.Q,b);}
function XT(a,b,c){Ce(a,b,b+1|0);a.E.data[b]=c;return a;}
function JC(a,b){var c,d;c=a.E.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.E=NS(a.E,d);}
function N(a){return HC(a.E,0,a.Q);}
function XB(a,b,c,d){return a.lJ(a.Q,b,c,d);}
function Ng(a,b,c,d,e){var f,g,h,i;Ce(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.E.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Is(a,b){return a.kU(b,0,b.data.length);}
function Ce(a,b,c){var d,e,f,g;d=a.Q;e=d-b|0;a.hQ((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.E.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.Q=a.Q+(c-b|0)|0;}
var H3=F(0);
var M=F(Go);
function L2(){var a=new M();ART(a);return a;}
function ART(a){O(a);}
function G(a,b){var c;c=a.Q;if(b===null)b=B(29);MB(a,c,b);return a;}
function BX(a,b){MB(a,a.Q,b);return a;}
function U(a,b){NJ(a,b,10);return a;}
function H0(a,b){var c,d,e,f,g,h,i,j;c=a.Q;d=1;if(AIz(b,Eo)){d=0;b=AT3(b);}a:{if(Ll(b,Be(10))<0){if(d)Ce(a,c,c+1|0);else{Ce(a,c,c+2|0);e=a.E.data;f=c+1|0;e[c]=45;c=f;}a.E.data[c]=Hj(EE(b),10);}else{g=1;h=Be(1);i=FL(Be(-1),Be(10));b:{while(true){j=BR(h,Be(10));if(Ll(j,b)>0){j=h;break b;}g=g+1|0;if(Ll(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ce(a,c,c+g|0);if(d)f=c;else{e=a.E.data;f=c+1|0;e[c]=45;}while(true){if(Fd(j,Eo))break a;e=a.E.data;c=f+1|0;e[f]=Hj(EE((FL(b,j))),10);b=NG(b,j);j=FL(j,Be(10));f=c;}}}return a;}
function Fl(a,b){ACp(a,a.Q,b);return a;}
function YT(a,b){BE(a,b);return a;}
function F9(a,b){MB(a,a.Q,!b?B(39):B(40));return a;}
function AEl(a,b,c){var d,e,f,g,h,i;d=BF(b,c);if(d<=0){e=a.Q;if(b<=e){if(d){f=e-c|0;a.Q=e-(c-b|0)|0;g=0;while(g<f){h=a.E.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Hh;Y(i);K(i);}
function WD(a,b){var c,d,e,f;if(b>=0){c=a.Q;if(b<c){c=c-1|0;a.Q=c;while(b<c){d=a.E.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Hh;Y(f);K(f);}
function ALm(a,b,c,d,e){Ng(a,b,c,d,e);return a;}
function AIj(a,b,c,d){XB(a,b,c,d);return a;}
function Zs(a){return a.Q;}
function DU(a){return N(a);}
function ALv(a,b){JC(a,b);}
function ALZ(a,b,c){XT(a,b,c);return a;}
function MB(a,b,c){var d,e,f;if(b>=0&&b<=a.Q){a:{if(c===null)c=B(29);else if(Fq(c))break a;JC(a,a.Q+I(c)|0);d=a.Q-1|0;while(d>=b){a.E.data[d+I(c)|0]=a.E.data[d];d=d+(-1)|0;}a.Q=a.Q+I(c)|0;d=0;while(d<I(c)){e=a.E.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new Hh;Y(c);K(c);}
var Er=F(Hk);
var ACI=F(Er);
function AVN(a){var b=new ACI();AG9(b,a);return b;}
function AG9(a,b){Bo(a,b);}
var AA0=F(Er);
function AVO(a){var b=new AA0();AHu(b,a);return b;}
function AHu(a,b){Bo(a,b);}
var T_=F(0);
var Dr=F(0);
function ARN(b){var c;c=new Qt;c.wz=b;return c;}
function CH(b,c){if(b!==null)b.d4();return c;}
var O7=F(0);
function IH(){var a=this;C.call(a);a.lY=0;a.k7=0;}
var AVP=0;function FT(a){AVP=AVP-1|0;}
function F6(a,b,c){Jj(a,Z_(b,c,400,0));}
function Ra(a,b){return KT(a,b,0.875);}
function KT(a,b,c){return Eq(a,b)+c|0;}
function RM(){var a=this;IH.call(a);a.jU=null;a.br=null;a.mZ=null;}
function Ew(a){var b,c,d;b=a.br;c=a.lY;d=a.k7;b.clearRect(0.0,0.0,c,d);}
function Sx(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.br;d="center";c.textAlign=d;break a;case 2:c=a.br;d="right";c.textAlign=d;break a;default:break a;}d=a.br;c="left";d.textAlign=c;}}
function CB(a,b){Jj(a,JV(b.ni));}
function Jj(a,b){var c;if(!(a.mZ==b?1:0)){c=a.br;a.mZ=b;c.font=b;}}
function Z_(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ci(a,b,c,d){var e,f,g;e=a.br;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eq(a,b){var c;c=$rt_ustr(b);return a.br.measureText(c).width;}
function LB(a,b,c,d){var e,f;e=a.br;f=$rt_ustr(F0(ABj([35,GJ(b/16|0),GJ(b%16|0),GJ(c/16|0),GJ(c%16|0),GJ(d/16|0),GJ(d%16|0)])));e.fillStyle=f;}
var Y6=F();
var AD1=F();
function CI(b,c){if(b===c)return 1;return b!==null?b.cq(c):c!==null?0:1;}
function BN(b){if(b!==null)return b;b=new GG;Bo(b,B(31));K(b);}
var Bd=F(0);
function Ui(){C.call(this);this.sS=null;}
var Bw=F(0);
var ABO=F();
var Y_=F(0);
function JS(b,c,d){return AQm(B(41),Fe(B(11),b),c,d);}
var ADB=F(0);
var ADu=F(0);
function LU(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dk(b,f+g|0);Dw(c,0,d,f,g);return d;}
function K6(b,c,d){Dw(b,c,d,0,d.data.length);return d;}
function Rv(b,c,d){var e;if(c>0)Dw(b,0,d,0,c);e=d.data.length;if(c<e)Dw(b,c+1|0,d,c,e-c|0);return d;}
function AA5(b,c,d,e){var f;if(c>0)Dw(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dw(b,d,e,c,f-d|0);}return e;}
function FX(b){var c;c=new Wt;c.i6=b;return c;}
function Pq(b,c){if(b.data.length!=c)b=Dk(b,c);return b;}
function ADt(b,c,d){var e;e=c.data.length;if(e==d)c=Dk(c,e*2|0);c.data[d]=b;return c;}
function LY(){var a=this;C.call(a);a.sp=null;a.rd=null;a.q$=null;a.o9=0;}
function AQm(a,b,c,d){var e=new LY();APb(e,a,b,c,d);return e;}
function APb(a,b,c,d,e){a.sp=b;a.rd=c;a.q$=d;a.o9=e;}
var ZU=F();
function AJn(b,c){return {style:b,weight:c};}
var BP=F(0);
function Uj(){C.call(this);this.tS=null;}
function AE_(a,b){var c,d,e;c=a.tS;d=0;while(d<b.length){e=b[d];(Eb()).fonts.add(e);d=d+1|0;}c.uX=1;b=c.rj;if(b!==null)ABA(b);}
var Uh=F();
function AQ5(a,b){$rt_globals.console.info("font load error "+b);}
var Lz=F();
var AVQ=null;var AVR=null;function Bx(){if(AVQ===null)AVQ=AMQ(AVS,0);return AVQ;}
function EX(){if(AVR===null)AVR=AMQ(AVT,0);return AVR;}
function ATX(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=LC(b)&&(e+f|0)<=LC(d)){a:{b:{if(b!==d){g=Ig(Cf(b));h=Ig(Cf(d));if(g!==null&&h!==null){if(g===h)break b;if(!HY(g)&&!HY(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.f2;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ACB(n.constructor,o)?1:0)){KL(b,c,d,e,j);b=new IT;Y(b);K(b);}j=j+1|0;k=m;}KL(b,c,d,e,f);return;}if(!HY(g))break a;if(HY(h))break b;else break a;}b=new IT;Y(b);K(b);}}KL(b,c,
d,e,f);return;}b=new IT;Y(b);K(b);}b=new BA;Y(b);K(b);}d=new GG;Bo(d,B(42));K(d);}
function Dw(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=LC(b)&&(e+f|0)<=LC(d)){KL(b,c,d,e,f);return;}b=new BA;Y(b);K(b);}
function KL(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FI(){return Long_fromNumber(new Date().getTime());}
function AC1(){return AVv($rt_globals.performance.now()*1000000.0);}
var ADq=F();
var AAB=F();
function Pj(b,c){var d,e,f;d=(Eb()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Eb()).getElementById($rt_ustr(b)).appendChild(d);}
function Zi(){return (Eb()).createElement("canvas");}
function AEp(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ANG(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AE4=F();
var Ns=F();
function ANo(a,b){var c;c=new Bq;Bo(c,$rt_str(b.message));K(c);}
var ADR=F();
function FG(b){return $rt_str(b);}
var Zm=F();
function NS(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AEg(b,c){var d,e,f,g;b=b.data;d=DX(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Mq(b,c){var d,e,f,g;b=b.data;d=BG(c);e=d.data;f=Z(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dk(b,c){var d,e,f,g;d=b.data;e=U5(Ig(Cf(b)),c);f=Z(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Z7(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));G(c,e[d]);d=d+1|0;}BX(c,B(45));return N(c);}
function ACX(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));U(c,e[d]);d=d+1|0;}BX(c,B(45));return N(c);}
function APN(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));Fl(c,e[d]);d=d+1|0;}BX(c,B(45));return N(c);}
function ASy(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));f=e[d];AAg(c,c.Q,f);d=d+1|0;}BX(c,B(45));return N(c);}
function Hz(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BI;Y(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZK(b,c,d,e){var f,g;if(c>d){e=new BI;Y(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AAw(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AVy;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Z(j,h+f|0);l=h+(2*f|0)|0;m=Z(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.uP(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ACq(b,c){return Uo(b,0,b.data.length,c);}
function Uo(b,c,d,e){var f,g,h,i,j;f=BF(c,d);if(f>0){g=new BI;Y(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var JR=F(0);
var AAQ=F();
function ASi(a,b){return a.wk(b);}
function AHh(a){return a.xL();}
var ABo=F();
var Hg=F(0);
var To=F();
var BA=F(Bq);
var ACn=F();
function LC(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AVU());}return b.data.length;}
function U5(b,c){if(b===null){b=new GG;Y(b);K(b);}if(b===E($rt_voidcls())){b=new BI;Y(b);K(b);}if(c>=0)return ARA(b.f2,c);b=new Yy;Y(b);K(b);}
function ARA(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GG=F(Bq);
var IT=F(Bq);
var C8=F();
var AVV=null;var AVW=null;var AVX=null;var AVY=null;var AVZ=null;var AV0=null;var AV1=null;var AV2=null;var AV3=null;var AV4=null;function Xq(b){var c,d;c=new Bv;d=BQ(1);d.data[0]=b;Hs(c,d);return c;}
function Mf(b){return b>=65536&&b<=1114111?1:0;}
function CF(b){return (b&64512)!=55296?0:1;}
function C6(b){return (b&64512)!=56320?0:1;}
function Mk(b){return !CF(b)&&!C6(b)?0:1;}
function Hr(b,c){return CF(b)&&C6(c)?1:0;}
function Eu(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Ic(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function IS(b){return (56320|b&1023)&65535;}
function EY(b){return GF(b)&65535;}
function GF(b){if(AVY===null){if(AV1===null)AV1=ACW();AVY=AA9((AV1.value!==null?$rt_str(AV1.value):null));}return S1(AVY,b);}
function Ey(b){return GE(b)&65535;}
function GE(b){if(AVX===null){if(AV2===null)AV2=ADM();AVX=AA9((AV2.value!==null?$rt_str(AV2.value):null));}return S1(AVX,b);}
function S1(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BF(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Vb(b,c){if(c>=2&&c<=36){b=Pb(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Pb(b){var c,d,e,f,g,h,i,j,k,l;if(AVW===null){if(AV3===null)AV3=ABd();c=(AV3.value!==null?$rt_str(AV3.value):null);d=APv(Gz(c));e=JO(d);f=BG(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+No(d)|0;j=j+No(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AVW=f;}g=AVW.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BF(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Hj(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gw(b){var c;if(b<65536){c=BQ(1);c.data[0]=b&65535;return c;}return ABj([Ic(b),IS(b)]);}
function Cv(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Mk(b&65535))return 19;if(AVZ===null){if(AV4===null)AV4=AES();d=(AV4.value!==null?$rt_str(AV4.value):null);e=R(ND,16384);f=e.data;g=DX(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=KK(L(d,l));if(m==64){l=l+1|0;m=KK(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|V(c,KK(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=KK(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AI_(k,k+i|0,AEg(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AI_(k,k+i|0,AEg(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AVZ=Dk(e,j);}e=AVZ.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.rA)o=p+1|0;else{c=d.pm;if(b>=c)return d.pz.data[b-c|0];c=p-1|0;}}return 0;}
function Jx(b){a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gr(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cv(b)!=16?0:1;}
function PG(b){switch(Cv(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Ro(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return PG(b);}return 1;}
function Y5(){AVV=E($rt_charcls());AV0=R(C8,128);}
function ACW(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ADM(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ABd(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AES(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var ML=F(0);
var S0=F(0);
var Ej=F(0);
var AD0=F(0);
function Eb(){return $rt_globals.window.document;}
function N2(){var a=this;C.call(a);a.po=null;a.pp=null;a.pq=null;}
function AOv(a,b){var c,d,e;c=a.po;d=a.pp;e=a.pq;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=JV(KN(c));c=d.sS;c.rj=b;if(c.uX)ABA(b);}}
var ABl=F();
function FA(){return ASj();}
function ASj(){return Math.random();}
function Z(b,c){if(b<c)c=b;return c;}
function Bb(b,c){if(b>c)c=b;return c;}
function MW(b){if(b<=0)b= -b|0;return b;}
var Pv=F(0);
var RC=F(0);
var Rs=F(0);
var T5=F(0);
var XC=F(0);
var Vc=F(0);
var OP=F(0);
var Y$=F();
function ALU(a,b,c){a.Ey($rt_str(b),Lt(c,"handleEvent"));}
function AMi(a,b,c){a.BB($rt_str(b),Lt(c,"handleEvent"));}
function AGh(a,b){return a.wk(b);}
function ANt(a,b,c,d){a.zT($rt_str(b),Lt(c,"handleEvent"),d?1:0);}
function ARo(a,b){return !!a.ED(b);}
function AHk(a){return a.xL();}
function AFx(a,b,c,d){a.C$($rt_str(b),Lt(c,"handleEvent"),d?1:0);}
var BI=F(Bq);
var Yy=F(Bq);
var Hh=F(BA);
var AAk=F();
function ABv(){return "ping";}
function D6(){C.call(this);this.jo=null;}
var AV5=null;var AV6=null;var AV7=null;var AV8=null;var AV9=null;var AV$=null;function KC(){KC=Bm(D6);AHs();}
function Nb(a){var b=new D6();ACa(b,a);return b;}
function ACa(a,b){KC();a.jo=b;}
function KN(b){var c,d,e,f,g;KC();if(b===null)return null;a:{c=b;if(AV6!==null){d=$rt_str(typeof c);if(!Bn(d,B(46))&&!Bn(d,B(47))){if(Bn(d,B(48))){b=AV7.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Nb(c);g=f;b=AV7;e=new $rt_globals.WeakRef(g);b.set(c,e);AV9.register(g,c);return f;}if(!Bn(d,B(49)))break a;else{b=AV8.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Nb(c);g=f;b=AV8;e=new $rt_globals.WeakRef(g);b.set(c,
e);AV$.register(g,c);return f;}}b=AV6.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Nb(c);b=AV6;e=new $rt_globals.WeakRef(f);b.set(c,e);return f;}}return Nb(c);}
function JV(b){KC();if(b!==null)return b.jo;return null;}
function ARa(a,b){if(b===a)return 1;if(b===null)return 0;if(!(b instanceof D6))return 0;return a.jo!==b.jo?0:1;}
function AHs(){AV5=new $rt_globals.WeakMap();AV6=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();AV7=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AV8=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AV9=AV7===null?null:new $rt_globals.FinalizationRegistry(Bk(new Xt,"accept"));AV$=AV8===null?null:new $rt_globals.FinalizationRegistry(Bk(new Xu,"accept"));}
var OO=F(0);
function S9(){var a=this;C.call(a);a.qm=null;a.r6=null;a.mx=null;a.m$=null;a.dQ=null;a.t2=null;a.nf=null;a.lK=null;a.gf=null;a.iy=0;a.w0=0;a.rt=null;a.fz=null;a.qN=null;a.ma=null;a.sU=0;}
function ADc(a){a.dQ.focus();}
function NN(a,b){var c;c=Eb();b=$rt_ustr(b);c.title=b;}
function AAF(a){var b,c,d;b=new MM;c=a.gf;d=a.lK.co;b.be=c;b.m=d;b.bS=a;return b;}
function TM(a){a.w0=$rt_globals.requestAnimationFrame(Bk(a.r6,"onAnimationFrame"));}
function F8(a){a.iy=1;}
function TL(a,b,c){var d,e;a.lK.dG=BZ(b,c);d=a.dQ;e=b;d.width=e;d=a.dQ;e=c;d.height=e;d=a.gf;T(d.dp,b,c);e=d.bq;d=d.dp;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fz.b6(a.gf.dp,KM(a));a.fz.bC();}
function Gy(a,b){var c,d,e;c=a.rt;d=a.dQ;if(CI(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.rt=b;}
function Jv(a){return $rt_globals.performance.now()/1000.0;}
function KM(a){return $rt_globals.window.devicePixelRatio;}
function Wu(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEs(b,1);else{c=new Xc;d=$rt_globals.window.showDirectoryPicker();e=new Xb;e.pr=b;e.ps=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function L4(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEs(b,0);else{c=new XP;d=$rt_globals.window.showOpenFilePicker();e=new XO;e.qk=b;e.qj=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function CQ(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.sU+1|0;a.sU=e;f=a.ma;g=F4(e);f.hU=Mh(f,f.hU,g);g=Vl(f,g);MN(g,b);MN(g,b);f.jT=f.jT+1|0;b=a.qN;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(IM(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(IM(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(IM(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof Lc)){b=new BI;c=H_(Cf(c));f
=new M;O(f);G(G(f,B(50)),c);Bo(b,N(f));K(b);}c=c;f=c.gQ;if(f===null)f=c.fh;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function Rb(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new QY;e.nl=b;b=AE1(c);d.then(Bk(e,"f"),Bk(b,"f"));}
function UL(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.qm;b=(Gz(b)).data;f=f.decode(b);b=e.writeText(f);e=new U3;e.sA=c;c=AE1(d);b.then(Bk(e,"f"),Bk(c,"f"));}
function X4(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AE1(b){var c;c=new M4;c.sM=b;return c;}
var B4=F(0);
var Sb=F();
function ABP(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bn(B(51),c)){d=new Nr;El(d,b);b=$rt_globals.fetch("test.wasm");e=new NB;b=b.then(Bk(e,"f"));e=new NA;b=b.then(Bk(e,"f"));e=new Nz;f=new Ny;b.then(Bk(e,"f"),Bk(f,"f"));}else if(!Bn(B(52),c))d=(AQf(I(c)<=0?B(31):Dj(c,1))).bW(b);else{d=new Wk;ABm(d,b);d.z.ef=1;d.B.ef=1;c=new Yf;c.uD=d;Wv(d,c,B(53));c=new Yh;c.oF=d;Wv(d,c,B(54));}return d;}
var Bj=F(0);
var ABI=F();
var AAS=F();
var ABi=F();
var Rw=F(0);
function V$(){C.call(this);this.o3=null;}
function AKu(a,b){var c,d;c=b;b=a.o3;if(!(!b.fz.cN(c/1000.0)&&!b.iy)){d=b.gf.dp;if(V(d.b,d.a)){b.iy=0;b.fz.bC();}}TM(b);}
function V3(){C.call(this);this.vc=null;}
function Dg(a){F8(a.vc);}
var Qk=F(0);
function V4(){C.call(this);this.rW=null;}
function AID(a,b,c){var d,e,f,g;c=a.rW;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dQ){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=KM(c);TL(c,Hm(f.width*g),Hm(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];TL(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AD9=F();
function APZ(b,c){AOV(b,c,AFJ());}
function AFJ(){return {box:'device-pixel-content-box'};}
function AOV(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cm=F(0);
function V1(){C.call(this);this.on=null;}
function AOD(a,b){b=a.on;b.fz.b6(b.gf.dp,KM(b));b.fz.bC();}
var K$=F(0);
function EC(){C.call(this);this.kF=null;}
var En=F(0);
var X3=F(0);
var Nl=F(0);
function Ph(){var a=this;EC.call(a);a.hU=null;a.jP=null;a.x1=null;a.jT=0;}
function Vl(a,b){var c,d;c=a.hU;while(true){if(c===null)return null;d=Jy(a.jP,b,c.jc);if(!d)break;c=d>=0?c.b4:c.bQ;}return c;}
function Mh(a,b,c){var d,e;if(b===null){b=new Ju;d=null;b.jc=c;b.iB=d;b.fD=1;b.fM=1;return b;}e=Jy(a.jP,c,b.jc);if(!e)return b;if(e>=0)b.b4=Mh(a,b.b4,c);else b.bQ=Mh(a,b.bQ,c);Ek(b);return JN(b);}
function Ke(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Jy(a.jP,c,b.jc);if(d<0)b.bQ=Ke(a,b.bQ,c);else if(d>0)b.b4=Ke(a,b.b4,c);else{e=b.b4;if(e===null)return b.bQ;f=b.bQ;g=R(Ju,e.fD).data;h=0;while(true){b=e.bQ;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b4;while(h>0){h=h+(-1)|0;j=g[h];j.bQ=b;Ek(j);b=JN(j);}e.b4=b;e.bQ=f;Ek(e);b=e;}Ek(b);return JN(b);}
function V2(){C.call(this);this.ua=null;}
function APW(a,b){var c,d,e,f,g,h,i,j,k;c=a.ua.ma;b=b.data;if(!(b===ABv()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BI;Y(b);K(b);}if(b.length<1){b=new BI;Y(b);K(b);}d=F4(b[0]);e=Vl(c,d);if(e===null)c=null;else{c.hU=Ke(c,c.hU,d);c.jT=c.jT+1|0;c=e.iB;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FG(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new Tj;ADN(e);e.hy=k;}else e=(k instanceof $rt_globals.File?1:0)?ACt(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:ACt(k,null);g[h]=e;h=j;}c.l(f);}}
var AEu=F();
var AEZ=F();
var JW=F(0);
var Xt=F();
function AOZ(a,b){KC();AV7.delete(b);}
var ABa=F();
var Xu=F();
function AMB(a,b){KC();AV8.delete(b);}
function PE(){var a=this;C.call(a);a.co=null;a.hf=null;a.xf=null;a.dG=null;}
function Ni(){return (Eb()).activeElement;}
function CU(a,b,c,d){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"));return Xm(a,b,c,d);}
function ACJ(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"),!!e);return Xm(a,b,c,d);}
function Xm(a,b,c,d){var e;e=new Qg;e.wa=b;e.wc=c;e.wb=d;return e;}
function Uk(a,b){var c;c=new Vo;c.u8=b;return c;}
function ED(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.hf.getBoundingClientRect();e=BZ(Hm((b.clientX-d.left)*c),Hm((b.clientY-d.top)*c));f=new Bf;g=a.dG;f.b=g.b;f.a=g.a;d=new MI;UM(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.vV=f;return d;}
function Yo(a,b,c){var d,e,f,g;d=new O$;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;UM(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.kc=0;d.dS=e;d.bk=f;d.hG=c;d.r8=g;return d;}
function DN(a,b){b.stopPropagation();b.preventDefault();}
function AAN(a,b){var c;c=new X0;c.pK=b;b.onpointerdown=Bk(c,"f");c=new X1;c.or=b;b.onpointerup=Bk(c,"f");}
function Lo(){var a=this;C.call(a);a.rr=null;a.cG=null;a.bq=null;a.tb=null;a.wE=0;a.xI=0;a.jW=null;a.yg=null;a.xY=null;a.wY=null;a.gj=null;a.hF=null;a.gM=null;a.x6=null;a.pa=null;a.dp=null;a.uR=null;a.lC=0;a.j$=0;a.mj=0;a.l4=0;a.ii=0;a.mg=null;}
function Hq(a,b,c){return GX(a,b,c,400,0);}
function CL(a,b,c){return MV(a.rr,b,c);}
function Fw(a,b){var c,d,e,f,g;c=a.bq;d=b.bn;e=b.bG;f=b.bl;g=b.bH;c.clearColor(d,e,f,g);a.bq.clear(16384);}
function Ct(a,b){var c;if(b==a.j$)return b;if(!b)a.bq.disable(3042);else{a.bq.enable(3042);a.bq.blendFuncSeparate(770,771,1,1);}c=a.j$;a.j$=b;return c;}
function R9(a,b,c){LL(a,b.b,b.a,c);}
function LL(a,b,c,d){Qe(a,b,c,d.b,d.a);}
function Qe(a,b,c,d,e){a.l4=1;a.ii=1;Xy(a.mg,b,c,d,e);UN(a);}
function FJ(a){a.l4=0;a.ii=0;UN(a);}
function UN(a){var b,c,d,e,f,g;b=a.mj;c=a.l4;if(b!=c){a.mj=c;if(!c)a.bq.disable(3089);else a.bq.enable(3089);}if(a.mj&&a.ii){a.ii=0;d=a.bq;e=a.mg;b=e.di;c=a.dp.a-e.i_|0;f=e.i$;c=c-f|0;g=e.eM;d.scissor(b,c,g,f);}}
function Ih(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.pa;c=a.lC;d=b.gw.sG;e=b.em;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.em;h=b.nc;e.bindBuffer(34962,h);i=b.gw.mC.data;g=i.length;j=0;while(j<g){k=i[j];l=b.em;m=k.hn;n=k.fa;o=b.gw.kQ*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.fa|0;j=j+1|0;}a:{e=b.u_;if(e!==null){c=0;b.em.bindBuffer(34962,e);i=b.gw.rn.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.em;j=e.hn;p=e.fa;m=e.pj;n=b.gw.pE;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.fa|0;g=g+1|0;}}}q=b.uv;if(q===null){c=b.sb;if(c>0)b.em.drawArrays(4,0,c);}else{b.em.bindBuffer(34963,q);k=b.em;g=b.uK;k.drawElements(4,g,5123,0);}a.lC=d;}
function Bu(a,b,c,d,e){Im(a,a.jW);I7(a.jW,a.bq,b,c,d,a.dp);d=a.jW;GK(a.bq,d.t_,e);Ih(a);}
function YD(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Im(a,a.gM);I7(a.gM,a.bq,b,c,d,a.dp);j=a.gM;d=a.bq;k=j.mG;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.mF;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.gM;GK(a.bq,d.nZ,i);Ih(a);}
function EJ(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Im(a,a.gj);I7(a.gj,a.bq,b,c,d,a.dp);UI(a.gj,a.bq,f);d=a.gj;j=a.bq;f=f.fH;b=f.b;c=f.a;k=e.bn;l=b;m=k/l;k=e.bG;n=c;o=k/n;k=e.bl/l;l=e.bH/n;d=d.tN;j.uniform4f(d,m,o,k,l);d=a.gj;e=a.bq;GK(e,d.pT,g);GK(e,d.nG,h);d=d.oR;e.uniform2f(d,i,0.0);Ih(a);}
function CW(a){var b,c;b=new Jt;c=a.tb;b.fH=new Bf;b.d$=c;b.e6=c.dx.createTexture();AV_=AV_+1|0;return b;}
function N7(a,b){XE(a.bq,b);}
function Im(a,b){var c,d;if(b!==a.uR){c=a.bq;d=b.bV;c.useProgram(d);a.uR=b;}}
function ADz(){var a=this;Lo.call(a);a.xj=null;a.xZ=null;}
function ATF(a,b){var c=new ADz();AKR(c,a,b);return c;}
function AKR(a,b,c){var d,e,f,g,h,i,j,k,l;d=new UQ;a.dp=new Bf;a.lC=0;a.mg=new L7;a.rr=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(55)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bq=b;a.cG=MV(d,4,4);g=AFn(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BQ(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;f=new Qi;JJ();k=AWa;f.em=b;f.gw=k;f.sb=h.length/k.kQ|0;f.uK
=j.length;k=b.createBuffer();f.nc=k;b.bindBuffer(34962,k);k=g.data;b.bufferData(34962,k,35044);f.u_=null;k=b.createBuffer();f.uv=k;if(k!==null){b.bindBuffer(34963,k);k=i.data;b.bufferData(34963,k,35044);}k=null;b.bindBuffer(34962,k);k=null;b.bindBuffer(34963,k);a.pa=f;a.xI=KJ(e,B(56));f=new Qj;f.dx=b;a.tb=f;l=b.getParameter(3379);a.wE=l;f=new M;O(f);U(G(f,B(57)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(Dx,7);i=g.data;d=new WG;IE(d,b,B(58),B(59),AWa);f=d.bV;d.t_=b.getUniformLocation(f,"uColor");a.jW=d;i[0]
=d;f=AS_(b,B(60));a.yg=f;i[1]=f;f=AT6(b);a.xY=f;i[2]=f;f=AUw(b);a.wY=f;i[3]=f;f=ATG(b);a.gj=f;i[4]=f;f=AUH(b);a.hF=f;i[5]=f;f=AUs(b);a.gM=f;i[6]=f;a.x6=g;XE(b,B(61));a.xZ=new UO;a.xj=c;}
function GX(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cG;g=Z_(b,c,d,e);Jj(f,g);h=f.br.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eq(f,B(62));m=Eq(f,B(63));h=new Ld;n=KN(g);h.mo=b;h.wl=c;o=c|0;if(o!==c){b=new M;O(b);Fl(G(b,B(64)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.ph=o;h.ws=d;h.wW=e;h.dE=i;h.ew=j;h.wi=l;h.mb=k;h.ni=n;h.ri=Df(i);h.xR=Df(h.ew);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.wp=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(65);}h.v_=b;return h;}
function Cw(){C.call(this);this.bc=null;}
function El(a,b){a.bc=b;}
function AR1(a,b){return 0;}
var Jc=F();
var AVy=null;function Jy(a,b,c){return b.jV(c);}
function ABU(){AVy=new Jc;}
function AAr(){var a=this;C.call(a);a.b2=null;a.mz=null;a.bv=null;a.dl=null;a.ez=null;a.fI=null;a.f_=null;a.jN=null;a.ku=null;a.c3=null;a.hD=null;a.ok=0;}
function AUh(a){var b=new AAr();AN8(b,a);return b;}
function AN8(a,b){a.b2=CJ(R(Co,0));a.mz=CJ(R(Co,0));a.bv=CJ(R(Cr,0));a.dl=CJ(R(DG,0));a.ez=CJ(R(Ex,0));a.fI=CJ(R(EK,0));a.f_=CJ(R(Fa,0));a.jN=CJ(R(Bj,0));a.ku=CJ(R(Bj,0));a.c3=b;}
function Uq(a,b){var c,d,e,f;Dg(a.c3);c=(Cp(!b.hG?a.mz:a.b2)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bA(b);if(f)break;if(b.kc)break;e=e+1|0;}return f;}
function Q$(a,b,c){var d,e,f;Dg(a.c3);d=(Cp(a.fI)).data;e=d.length;f=0;while(f<e){if(d[f].gB(b,c))return 1;f=f+1|0;}return 0;}
function WV(){C.call(this);this.nw=null;}
function AN4(a,b){var c;c=a.nw;if(Uq(c.co,Yo(c,b,1)))DN(c,b);}
function WW(){C.call(this);this.sy=null;}
function AOj(a,b){var c;c=a.sy;if(Uq(c.co,Yo(c,b,0)))DN(c,b);}
function WX(){C.call(this);this.oL=null;}
function AMz(a,b){var c,d,e,f,g,h,i;c=a.oL;if(c.dG!==null){a:{b:{d=ED(c,b);e=c.co;Dg(e.c3);f=e.hD;if(f!==null)f.l(d);else{g=(Cp(e.bv)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bL(d))break a;i=i+1|0;}}}}DN(c,b);}}
function WY(){C.call(this);this.u9=null;}
function ALV(a,b){var c,d,e,f,g,h;c=a.u9;b.button;if(c.dG!==null)a:{d=ED(c,b);c=c.co;e=b.button;Dg(c.c3);if(c.hD===null){f=(Cp(c.bv)).data;g=f.length;h=0;while(h<g){b=f[h].b_(d,e);if(b!==null){c.hD=b;c.ok=e;break a;}h=h+1|0;}}}}
function WZ(){C.call(this);this.rI=null;}
function AMm(a,b){var c,d,e,f,g,h,i;c=a.rI;b.button;if(c.dG!==null){d=ED(c,b);e=c.co;f=b.button;Dg(e.c3);if(f==e.ok&&e.hD!==null)e.hD=null;g=(Cp(e.bv)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cO(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DN(c,b);}}
function W0(){C.call(this);this.n1=null;}
function AOS(a,b){var c,d,e,f,g,h,i,j,k;c=a.n1;if(c.dG!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.co;f=ED(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dg(e.c3);i=(Cp(e.dl)).data;j=i.length;k=0;b:{while(k<j){if(i[k].c0(f,d,h))break b;k=k+1|0;}}DN(c,b);}}
function W1(){C.call(this);this.vn=null;}
function AJ8(a,b){var c,d,e,f,g,h,i,j;c=a.vn;if(c.dG!==null){d=ED(c,b);e=c.co;f=b.button;g=b.detail;Dg(e.c3);h=(Cp(e.bv)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cs(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DN(c,b);}}
function W2(){C.call(this);this.rZ=null;}
function ASp(a,b){var c,d,e,f,g,h,i;c=a.rZ;if(c.dG!==null){d=ED(c,b);e=c.co;Dg(e.c3);f=(Cp(e.ez)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bA(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DN(c,b);}}
function W3(){C.call(this);this.ob=null;}
function AJl(a,b){var c,d,e;b=a.ob.co;c=(Cp(b.ku)).data;d=c.length;e=0;while(e<d){c[e].q();e=e+1|0;}Dg(b.c3);}
function W4(){C.call(this);this.uj=null;}
function AP5(a,b){var c,d,e;b=a.uj.co;c=(Cp(b.jN)).data;d=c.length;e=0;while(e<d){c[e].q();e=e+1|0;}Dg(b.c3);}
function Yj(){C.call(this);this.tM=null;}
function AR2(a,b){var c;c=a.tM;if(c.dG!==null)ED(c,b);}
function Yk(){C.call(this);this.sO=null;}
function AL$(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.sO;if(Ni()===c.hf){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cp(c.co.f_)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dt();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.co.c3;m=new NW;m.ux=k;m.uy=l;g.getAsString(Bk(m,"accept"));DN(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(66)),k),B(67)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function Yl(){C.call(this);this.mT=null;}
function AMD(a,b){var c;c=a.mT;if(Ni()===c.hf&&Q$(c.co,Uk(c,b),0))DN(c,b);}
function Ym(){C.call(this);this.uG=null;}
function AOx(a,b){var c;c=a.uG;if(Ni()===c.hf&&Q$(c.co,Uk(c,b),1))DN(c,b);}
var UD=F(0);
var UQ=F();
function MV(a,b,c){var d,e,f;d=new RM;AVP=AVP+1|0;d.lY=b;d.k7=c;e=(Eb()).createElement("canvas");d.jU=e;f=b;e.width=f;e=d.jU;f=c;e.height=f;d.br=d.jU.getContext("2d");return d;}
var UO=F();
function ALc(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function MM(){var a=this;C.call(a);a.be=null;a.m=null;a.bS=null;}
function AEk(){var a=this;C.call(a);a.hk=null;a.iR=null;a.g_=0;}
function CJ(a){var b=new AEk();AJ2(b,a);return b;}
function AJ2(a,b){a.hk=b;}
function X(a,b){var c,d,e;c=a.g_;d=a.hk;if(c==d.data.length)a.hk=Dk(d,c+4|0);d=a.hk.data;e=a.g_;a.g_=e+1|0;d[e]=b;a.iR=null;}
function Cp(a){var b;b=a.iR;if(!(b!==null&&b.data.length==a.g_))a.iR=Dk(a.hk,a.g_);return a.iR;}
var IX=F(0);
var Co=F(0);
var Cr=F(0);
function ALh(a,b){return 0;}
function AQ6(a,b,c){return null;}
function AF1(a,b,c){return 0;}
function AOQ(a,b,c,d){return 0;}
var DG=F(0);
var Ex=F(0);
var EK=F(0);
var EP=F(0);
var Fa=F(0);
function Qt(){C.call(this);this.wz=null;}
function Bf(){var a=this;C.call(a);a.b=0;a.a=0;}
function BZ(a,b){var c=new Bf();PI(c,a,b);return c;}
function PI(a,b,c){a.b=b;a.a=c;}
function Cu(a,b){a.b=b.b;a.a=b.a;}
function T(a,b,c){a.b=b;a.a=c;}
function YE(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);U(G(U(G(d,B(68)),b),B(69)),c);return N(d);}
function Lf(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function L7(){var a=this;C.call(a);a.di=0;a.i_=0;a.eM=0;a.i$=0;}
function Xy(a,b,c,d,e){a.di=b;a.i_=c;a.eM=d;a.i$=e;}
var ADx=F();
var ZC=F(0);
function Qj(){C.call(this);this.dx=null;}
function LP(){var a=this;C.call(a);a.bV=null;a.xT=null;}
function ACs(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(70):B(71);g=$rt_str(b.getShaderInfoLog(e));h=new M;O(h);G(G(h,f),g);g=N(h);b.deleteShader(e);Br(Bx(),g);Br(EX(),B(72));Br(EX(),d);Br(EX(),B(72));b=new Bq;Bo(b,g);K(b);}
function Dx(){var a=this;LP.call(a);a.oa=null;a.pQ=null;a.lP=null;}
function AWb(a,b,c,d){var e=new Dx();IE(e,a,b,c,d);return e;}
function IE(a,b,c,d,e){var f,g,h,i,j,k;a.xT=e;f=ACs(b,35633,c);d=ACs(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bV=g;h=e.sm.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bV;k=c.hn;c=c.p$;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bV;b.linkProgram(c);if(b.getProgramParameter(c,35714)){XE(b,B(73));a.lP=new Bf;c=a.bV;a.oa=b.getUniformLocation(c,"uResolution");c=a.bV;a.pQ=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bq;c=new M;O(c);G(G(c,B(74)),d);Bo(b,N(c));K(b);}
function AAt(a,b,c){var d,e,f;if(!Lf(a.lP,c)){Cu(a.lP,c);d=a.oa;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function I7(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pQ;b.uniform4f(e,i,l,h,j);AAt(a,b,f);}
function WG(){Dx.call(this);this.t_=null;}
function EB(){Dx.call(this);this.rF=null;}
function AS_(a,b){var c=new EB();Un(c,a,b);return c;}
function AWc(a,b,c){var d=new EB();Ur(d,a,b,c);return d;}
function Un(a,b,c){Ur(a,b,B(58),c);}
function Ur(a,b,c,d){JJ();IE(a,b,c,d,AWa);c=a.bV;a.rF=b.getUniformLocation(c,"sDiffuse");}
function UI(a,b,c){var d;d=a.rF;b.uniform1i(d,0);b.activeTexture(33984);c=c.e6;b.bindTexture(3553,c);}
var AA$=F(Dx);
function AT6(a){var b=new AA$();ARw(b,a);return b;}
function ARw(a,b){JJ();IE(a,b,B(58),B(75),AWa);}
function AC_(){EB.call(this);this.wJ=null;}
function AUw(a){var b=new AC_();AJs(b,a);return b;}
function AJs(a,b){var c;Un(a,b,B(76));c=a.bV;a.wJ=b.getUniformLocation(c,"uContrast");}
function ACN(){var a=this;EB.call(a);a.tN=null;a.pT=null;a.nG=null;a.oR=null;}
function ATG(a){var b=new ACN();AOM(b,a);return b;}
function AOM(a,b){var c;Ur(a,b,B(77),B(78));c=a.bV;a.tN=b.getUniformLocation(c,"uTexTransform");c=a.bV;a.pT=b.getUniformLocation(c,"uColor");c=a.bV;a.nG=b.getUniformLocation(c,"uBgColor");c=a.bV;a.oR=b.getUniformLocation(c,"uContrast");}
function ZW(){var a=this;EB.call(a);a.va=null;a.u$=null;a.qv=null;}
function AUH(a){var b=new ZW();AIT(b,a);return b;}
function AIT(a,b){var c,d;Un(a,b,B(79));c=a.bV;a.va=b.getUniformLocation(c,"uColorB");d=a.bV;a.u$=b.getUniformLocation(d,"uColorF");d=a.bV;a.qv=b.getUniformLocation(d,"uContrast");}
function ACL(){var a=this;Dx.call(a);a.nZ=null;a.mG=null;a.mF=null;}
function AUs(a){var b=new ACL();AIU(b,a);return b;}
function AIU(a,b){var c;JJ();IE(a,b,B(58),B(80),AWa);c=a.bV;a.nZ=b.getUniformLocation(c,"uColor");c=a.bV;a.mG=b.getUniformLocation(c,"uPoints1");c=a.bV;a.mF=b.getUniformLocation(c,"uPoints2");}
var Sk=F(0);
var AE2=F(0);
function GK(b,c,d){var e,f,g,h;e=d.bn;f=d.bG;g=d.bl;h=d.bH;b.uniform4f(c,e,f,g,h);}
function XE(b,c){var d,e;d=b.getError();if(d){b=Bx();e=new M;O(e);U(G(e,c),d);Br(b,N(e));}}
function Qg(){var a=this;C.call(a);a.wa=null;a.wc=null;a.wb=null;}
function Qi(){var a=this;C.call(a);a.em=null;a.gw=null;a.nc=null;a.u_=null;a.uv=null;a.sb=0;a.uK=0;}
function Ck(){var a=this;C.call(a);a.v9=null;a.c2=0;}
function C_(a,b,c){a.v9=b;a.c2=c;}
function GS(){var a=this;Ck.call(a);a.sm=null;a.mC=null;a.rn=null;a.kQ=0;a.pE=0;a.sG=0;}
var AWa=null;var AWd=null;function JJ(){JJ=Bm(GS);AKI();}
function AKI(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GS;c=R(DY,2);d=c.data;ARh();d[0]=AWe;d[1]=AWf;JJ();C_(b,B(81),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];Y9();switch(AWg.data[l.l7.c2]){case 1:f=f+l.fa|0;h=h+1|0;break a;case 2:e=e+l.fa|0;g=g+1|0;break a;default:}}i=i|1<<l.hn;k=k+1|0;}b.sm=c;b.kQ=e;b.pE=f;b.sG=i;c=R(DY,g);m=c.data;b.mC=c;c=R(DY,h);n=c.data;b.rn=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];Y9();switch(AWg.data[l.l7.c2]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AWa=b;c=R(GS,1);c.data[0]=b;AWd=c;}
var Mu=F(0);
var TN=F(0);
var U4=F(0);
var Gt=F();
function Js(){Gt.call(this);this.vH=null;}
function AAW(){var a=this;Js.call(a);a.xF=0;a.k2=0;a.iL=null;a.ky=null;a.s4=null;}
function AMQ(a,b){var c=new AAW();AQ0(c,a,b);return c;}
function AQ0(a,b,c){a.vH=b;b=new M;O(b);a.iL=b;a.ky=BQ(32);a.xF=c;AAK();a.s4=AWh;}
function T0(a,b,c,d){var e,$$je;e=a.vH;if(e===null)a.k2=1;if(!(a.k2?0:1))return;a:{try{e.kn(b,c,d);break a;}catch($$e){$$je=Ei($$e);if($$je instanceof Iy){}else{throw $$e;}}a.k2=1;}}
function Oe(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ABG(b,c,d-c|0);e=DX(Bb(16,Z(e.length,1024)));g=ABu(e,0,e.data.length);h=a.s4;i=new PB;b=DX(1);j=b.data;j[0]=63;He();k=AWi;i.lT=k;i.k8=k;c=j.length;if(c&&c>=i.mD){i.v5=h;i.p5=b.eX();i.xu=2.0;i.mD=4.0;i.pi=BQ(512);i.nY=DX(512);k=AWj;if(k===null){i=new BI;Bo(i,B(82));K(i);}i.lT=k;i.k8=k;a:while(true){if(i.iH==3){f=new D1;Y(f);K(f);}i.iH=2;b:{while(true){try{k=Zn(i,f,g);}catch($$e){$$je=Ei($$e);if($$je instanceof Bq){f=$$je;break a;}else{throw $$e;}}if(Il(k))
{d=B5(f);if(d<=0)break b;k=D2(d);}else if(Hb(k))break;h=!Mc(k)?i.lT:i.k8;c:{if(h!==AWj){if(h===AWk)break c;else break b;}d=B5(g);b=i.p5;l=b.data.length;if(d<l){k=AWl;break b;}Xo(g,b,0,l);}EG(f,f.X+Kh(k)|0);}}l=Hb(k);T0(a,e,0,g.X);Oc(g);if(!l){while(true){d=i.iH;if(d!=2&&d!=4){f=new D1;Y(f);K(f);}f=AWm;if(f===f)i.iH=3;l=Hb(f);T0(a,e,0,g.X);Oc(g);if(!l)break;}return;}}K(AH5(f));}i=new BI;Bo(i,B(83));K(i);}
function Br(a,b){var c,d,e,f,g,h,i,j;BE(BX(a.iL,b),10);b=a.iL;c=b.Q;d=a.ky;if(c>d.data.length)d=BQ(c);e=0;f=0;if(e>c){b=new BA;Bo(b,B(84));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.E.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Oe(a,d,0,c);a.iL.Q=0;}
function Gf(){Gt.call(this);this.xk=null;}
function Ys(a){a.xk=DX(1);}
var Lx=F(Gf);
var AVS=null;function AK6(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AC0(){var b;b=new Lx;Ys(b);AVS=b;}
function DY(){var a=this;Ck.call(a);a.p$=null;a.l7=null;a.fa=0;a.pj=0;a.hn=0;}
var AWe=null;var AWf=null;var AWn=null;function ARh(){ARh=Bm(DY);AJP();}
function ATS(a,b,c,d,e,f,g){var h=new DY();Wy(h,a,b,c,d,e,f,g);return h;}
function Wy(a,b,c,d,e,f,g,h){ARh();C_(a,b,c);a.p$=d;a.l7=e;a.fa=f;a.pj=g;a.hn=h;}
function AJP(){var b;b=new DY;ACd();Wy(b,B(85),0,B(86),AWo,2,0,0);AWe=b;b=ATS(B(87),1,B(88),AWo,2,0,1);AWf=b;AWn=H(DY,[AWe,b]);}
function Jk(){var a=this;C.call(a);a.vU=null;a.wM=null;}
function ADg(b){var c,d;if(Fq(b))K(AAP(b));if(!ADj(L(b,0)))K(AAP(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ADj(d))break a;else K(AAP(b));}}c=c+1|0;}}
function ADj(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mx=F(Jk);
var AWh=null;function AAK(){AAK=Bm(Mx);AIQ();}
function ADE(a){var b,c;b=new T1;b.e9=B(89);He();c=AWi;b.g2=c;b.l1=c;b.wC=a;b.mP=0.3333333432674408;b.wZ=0.5;b.n6=DX(512);b.sx=BQ(512);return b;}
function AIQ(){var b,c,d,e,f;b=new Mx;AAK();c=R(Bv,0);d=c.data;ADg(B(90));e=d.length;f=0;while(f<e){ADg(d[f]);f=f+1|0;}b.vU=B(90);b.wM=c.eX();AWh=b;}
var Kv=F();
var AWp=null;var AWg=null;function Y9(){Y9=Bm(Kv);ANR();}
function ANR(){var b,c;ACd();b=BG((AWq.eX()).data.length);c=b.data;AWg=b;c[AWr.c2]=1;c[AWo.c2]=2;ACe();c=BG((AWs.eX()).data.length);b=c.data;AWp=c;b[AWt.c2]=1;b[AWu.c2]=2;}
function Pm(){var a=this;C.call(a);a.fC=null;a.ms=null;a.ka=null;a.sR=null;a.pD=null;a.pW=null;}
function AA1(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.fC,b,c));}
function Nc(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.ms[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.fC,b,d));f=e.data;EO();d=f.length;AAK();g=AWh;h=ABu(e,0,d);a:{try{i=ADE(g);He();g=ZL(ACw(AEb(i,AWj),AWj),h);break a;}catch($$e){$$je=Ei($$e);if($$je instanceof FS){g=$$je;}else{throw $$e;}}h=new Xx;h.jt=1;h.jR=1;h.hB=B(91);h.k9=g;K(h);}if(!g.X&&g.dz==g.mq)c.b3=g.hm;else{f=BQ(B5(g));e=f.data;c.b3=f;NL(g,f,0,e.length);}return c;}
function Nk(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.ka[e]){e=e+1|0;}d=e-d|0;Hs(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.fC,b,d)));return c;}
var GW=F(Ck);
var AWr=null;var AWo=null;var AWq=null;function ACd(){ACd=Bm(GW);AIi();}
function AII(a,b){var c=new GW();ADF(c,a,b);return c;}
function ADF(a,b,c){ACd();C_(a,b,c);}
function AIi(){var b;AWr=AII(B(92),0);b=AII(B(93),1);AWo=b;AWq=H(GW,[AWr,b]);}
var Gn=F(Ck);
var AWt=null;var AWu=null;var AWs=null;function ACe(){ACe=Bm(Gn);AIZ();}
function ASv(a,b){var c=new Gn();ZH(c,a,b);return c;}
function ZH(a,b,c){ACe();C_(a,b,c);}
function AIZ(){var b;AWt=ASv(B(94),0);b=ASv(B(95),1);AWu=b;AWs=H(Gn,[AWt,b]);}
var KR=F(Gf);
var AVT=null;function AI1(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AE7(){var b;b=new KR;Ys(b);AVT=b;}
var V_=F(D4);
function ADp(){BI.call(this);this.v8=null;}
function AAP(a){var b=new ADp();AQv(b,a);return b;}
function AQv(a,b){Y(a);a.v8=b;}
var Mw=F(0);
function X0(){C.call(this);this.pK=null;}
function APy(a,b){a.pK.setPointerCapture(b.pointerId);}
function X1(){C.call(this);this.or=null;}
function AGR(a,b){a.or.releasePointerCapture(b.pointerId);}
function G8(){var a=this;C.call(a);a.mq=0;a.X=0;a.dz=0;a.hx=0;}
function Ww(a,b){a.hx=(-1);a.mq=b;a.dz=b;}
function EG(a,b){var c,d,e;if(b>=0&&b<=a.dz){a.X=b;if(b<a.hx)a.hx=0;return a;}c=new BI;d=a.dz;e=new M;O(e);BE(U(G(U(G(e,B(96)),b),B(97)),d),93);Bo(c,N(e));K(c);}
function B5(a){return a.dz-a.X|0;}
function DO(a){return a.X>=a.dz?0:1;}
var SD=F(0);
var Le=F(G8);
function AEG(b){var c,d;if(b>=0)return AOl(0,b,BQ(b),0,b,0);c=new BI;d=new M;O(d);U(G(d,B(98)),b);Bo(c,N(d));K(c);}
function ABG(b,c,d){return AOl(0,b.data.length,b,c,c+d|0,0);}
function NL(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BA;i=new M;O(i);U(G(U(G(i,B(99)),g),B(100)),f);Bo(h,N(i));K(h);}if(B5(a)<d){j=new L3;Y(j);K(j);}if(d<0){j=new BA;k=new M;O(k);G(U(G(k,B(101)),d),B(102));Bo(j,N(k));K(j);}g=a.X;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.hm.data[m+a.md|0];l=l+1|0;c=n;m=o;}a.X=g+d|0;return a;}}b=b.data;j=new BA;d=b.length;k=new M;O(k);BE(U(G(U(G(k,B(103)),c),B(97)),d),41);Bo(j,N(k));K(j);}
function Kc(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.mt){b=new I9;Y(b);K(b);}e=d-c|0;if(B5(a)<e){b=new H2;Y(b);K(b);}if(c>I(b)){f=new BA;d=I(b);b=new M;O(b);BE(U(G(U(G(b,B(104)),c),B(97)),d),41);Bo(f,N(b));K(f);}if(d>I(b)){f=new BA;c=I(b);b=new M;O(b);U(G(U(G(b,B(105)),d),B(106)),c);Bo(f,N(b));K(f);}if(c>d){b=new BA;f=new M;O(f);U(G(U(G(f,B(104)),c),B(107)),d);Bo(b,N(f));K(b);}g=a.X;while(c<d){h=g+1|0;i=c+1|0;SL(a,g,L(b,c));g=h;c=i;}a.X=a.X+e|0;return a;}
function JT(){var a=this;G8.call(a);a.k1=0;a.lI=null;a.w9=null;}
function ABu(b,c,d){var e,f,g;e=b.data;f=new Xn;g=e.length;d=c+d|0;Ww(f,g);AKO();f.w9=AWv;f.k1=0;f.lI=b;f.X=c;f.dz=d;f.xb=0;f.m8=0;return f;}
function Xo(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.m8){e=new I9;Y(e);K(e);}if(B5(a)<d){e=new H2;Y(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BA;j=new M;O(j);U(G(U(G(j,B(108)),h),B(100)),g);Bo(i,N(j));K(i);}if(d<0){e=new BA;i=new M;O(i);G(U(G(i,B(101)),d),B(102));Bo(e,N(i));K(e);}h=a.X;k=h+a.k1|0;l=0;while(l<d){b=a.lI.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.X=h+d|0;return a;}}b=b.data;e=new BA;d=b.length;i=new M;O(i);BE(U(G(U(G(i,B(103)),c),B(97)),d),41);Bo(e,N(i));K(e);}
function Oc(a){a.X=0;a.dz=a.mq;a.hx=(-1);return a;}
function HL(){C.call(this);this.x_=null;}
var AWk=null;var AWj=null;var AWi=null;function He(){He=Bm(HL);AMf();}
function AEm(a){var b=new HL();ADb(b,a);return b;}
function ADb(a,b){He();a.x_=b;}
function AMf(){AWk=AEm(B(109));AWj=AEm(B(110));AWi=AEm(B(111));}
var Nr=F(Cw);
function AL5(a){}
function AKx(a,b,c){}
function CS(){var a=this;Cw.call(a);a.gu=null;a.p=null;}
function Fj(a,b){var c,d,e;El(a,b);a.gu=Z8(0,0,64);c=new Yr;c.cb=new Bf;c.d5=CJ(R(Ep,0));c.cW=new Bf;c.os=new Bf;c.yH=new B1;c.yG=new B1;c.cC=b.be;d=b.bS;c.i3=d;c.cF=U1(d);d=b.m.ku;e=new MT;e.nK=c;X(d,e);d=b.m.jN;e=new MU;e.q3=c;X(d,e);a.p=c;X(b.m.b2,new SI);b=b.m.b2;c=a.p;BN(c);d=new SJ;d.ss=c;X(b,d);}
function E7(a){Fw(a.bc.be,a.gu);}
function G2(a,b,c){var d,e,f,g,h;a:{d=a.p;Cu(d.cb,b);e=d.bR;if(e!==c){d.bR=c;f=(Cp(d.d5)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gC(e,c);h=h+1|0;}}}}
var QF=F(0);
var LQ=F(0);
function AEA(a){a.ik(Kq());}
function LT(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HZ;c=new I2;d=new Hf;ANm();JQ(d,AWw);Lv(c,d,BH(AWx),BH(AWy),BH(AWz),BH(AWx),BH(AWA),BH(AWB),BH(AWC),BH(AWD),BH(AWE),BH(AWF));ABM();e=(AWG.eX()).data;f=e.length;g=R(IN,f);h=g.data;i=0;while(i<f){h[i]=e[i].kO;i=i+1|0;}j=AA7(Q(B(112)),Q(B(113)),Q(B(114)),Q(B(115)));k=new H$;l=new HH;AKc();m=AWH;J0(l,m,AWI,AWJ,AWK,AWL,m);La(k,l,AAX(),Zz(Q(B(116)),Q(B(117)),Q(B(118))),AAX(),ZR(1,0.17499999701976776),AWM,AWN);L1(b,c,g,j,k,ADD(Q(B(119)),Q(B(120)),Q(B(121)),Q(B(122))));a.ik(b);}
function AD3(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HZ;c=new I2;d=new Hf;AB5();JQ(d,AWO);Lv(c,d,BH(AWP),BH(AWQ),BH(AWR),BH(AWP),BH(AWS),BH(AWT),BH(AWU),BH(AWV),BH(AWW),BH(AWX));AAq();e=(AWY.eX()).data;f=e.length;g=R(IN,f);h=g.data;i=0;while(i<f){h[i]=e[i].lo;i=i+1|0;}j=AA7(Q(B(123)),Q(B(124)),Q(B(125)),Q(B(126)));k=new H$;l=new HH;AO$();m=AWZ;J0(l,m,AW0,AW1,AW2,AW3,m);La(k,l,Zh(),Zz(Q(B(127)),Q(B(128)),CM(0)),Zh(),ZR(1,0.07500000298023224),AW4,AW5);L1(b,c,g,j,k,ADD(Q(B(129)),Q(B(130)),Q(B(131)),Q(B(132))));a.ik(b);}
var Lj=F(0);
function Mr(){var a=this;CS.call(a);a.z=null;a.B=null;a.dg=null;a.hr=0;a.dm=null;a.cZ=null;a.io=null;a.im=null;a.ip=null;a.iq=null;a.fA=null;}
function AS9(a){var b=new Mr();ABm(b,a);return b;}
function ABm(a,b){var c,d,e;Fj(a,b);a.cZ=new L7;a.io=new Bf;a.im=new Bf;a.ip=new Bf;a.iq=new Bf;a.fA=SE();c=AN9(a.p);a.dg=c;a.z=AEd(a.p,c);a.B=AEd(a.p,a.dg);c=a.z;c.bO=1;d=new Rj;d.s$=a;e=new Rh;e.uH=a;Q0(c,d,d);Q0(a.B,e,e);c=a.z;d=new Ri;d.oQ=a;c.iY=d;d=a.B;e=new Rf;e.sq=a;d.iY=e;Xj(a.p,c);X(b.m.bv,a.dg);X(b.m.dl,a.dg);X(b.m.dl,a);X(b.m.bv,a);c=b.m.b2;d=new Rg;d.m0=a;X(c,d);c=b.m.b2;d=new HO;e=new Rd;e.qC=a;Sy(d,b,e);X(c,d);X(b.m.fI,a);X(b.m.f_,a);b=b.m.ez;c=new Re;c.tI=a;X(b,c);LT(a);}
function QL(a,b){if(a.z===b)a.hr=a.hr|1;if(a.B===b)a.hr=a.hr|2;if((a.hr&3)==3)ACM(a);}
function AKh(a,b,c){if(DZ(a.p,a.z))return GI(a.z,b,c);if(!DZ(a.p,a.B))return 0;return GI(a.B,b,c);}
function Zy(a){if(DZ(a.p,a.z))return Oj(a,a.z);if(!DZ(a.p,a.B))return null;return Oj(a,a.B);}
function Oj(a,b){var c;c=new Oa;c.q6=b;return c;}
function WL(a,b,c){var d,e,f,g,h,i,j;d=a.dm;if(d!==null&&d.f4!==null){e=b!==a.z?0:1;f=Fz(b);g=(GY(b)+f|0)/2|0;h=g-f|0;d=a.dm;d=d.f4.data[GL(d,g,e)];i=g-(!e?d.hC:d.hE)|0;j=b.bp-V(f,b.O)|0;c.bp=JZ(V(((!e?d.hE:d.hC)+i|0)-h|0,c.O)+j|0,IF(c));return;}}
function ACM(a){var b,c,d,e,f,g;Br(Bx(),B(133));b=a.z.e;c=a.B.e;d=EH(b.f);e=EH(c.f);f=AEE(b.f);g=AEE(c.f);b=a.bc.bS;c=new Rx;c.uo=a;CQ(b,c,B(134),H(C,[d,f,e,g]));}
function AEU(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;b=a.dm;if(b!==null&&b.f4!==null){c=Cy(a.p,2.0);d=Fz(a.z);e=GY(a.z);f=Fz(a.B);g=GY(a.B);h=GL(a.dm,d,1);i=GL(a.dm,e,1);j=GL(a.dm,f,0);k=GL(a.dm,g,0);l=Z(h,j);while(l<=Bb(i,k)){m=a.dm.f4.data[l];if(m.j6){b=a.z;h=b.O;n=V(h,m.hE)-b.bp|0;o=n+V(m.lD,h)|0;b=a.B;h=b.O;p=V(h,m.hC)-b.bp|0;q=p+V(m.lf,h)|0;T(a.io,a.cZ.di,n);T(a.ip,a.cZ.di,o);b=a.im;r=a.cZ;T(b,r.di+r.eM|0,p);b=a.iq;r=a.cZ;T(b,r.di+r.eM|0,q);s=Z(n,p);t=Bb(o,q)-s|0;b=a.fA;r=a.cZ;Gk(b,r.di,s,r.eM,t);BC(a.fA.bw,
a.dg.S.hh.hv);b=a.fA.bm;r=a.dg.S;BC(b,HG(r.dw,r,m.j6));b=a.p.cC;Ct(b,1);if(n==o){r=a.p.cW;T(r,a.cZ.di-a.z.ba.b|0,c);if(p>=n){u=a.ip;T(u,u.b,u.a+c|0);h=n;}else{h=n-c|0;u=a.io;T(u,u.b,u.a-c|0);}Bu(b,a.z.ba.b,h,r,a.fA.bm);}if(p==q){r=a.p.cW;T(r,a.B.cx.b,c);if(n>=p){u=a.iq;T(u,u.b,u.a+c|0);}else{p=p-c|0;u=a.im;T(u,u.b,u.a-c|0);}u=a.cZ;Bu(b,u.di+u.eM|0,p,r,a.fA.bm);}r=a.cZ;Qe(b,r.di,r.i_,r.eM,r.i$);r=a.fA;u=r.A;YD(b,u.b,u.a,r.t,a.io,a.im,a.ip,a.iq,r.bm);FJ(b);Ct(b,0);}l=l+1|0;}return;}}
function AIY(a,b){var c,d;c=K9(a.z,b);d=K9(a.B,b);return !c&&!d?0:1;}
function AQ_(a){var b,c,d;E7(a);Ms(a.z);Ms(a.B);b=a.p.cW;c=a.cZ;T(b,c.eM,c.i$);c=a.p.cC;d=a.cZ;Bu(c,d.di,d.i_,b,a.dg.S.b9.et);AEU(a);WF(a.dg);}
function APV(a){return Mt(0);}
function AJX(a){Yt(a.z);Yt(a.B);}
function APh(a){W9(a.z);W9(a.B);}
function AP3(a,b){Yu(a.z,b);Yu(a.B,b);}
function AOT(a,b,c){G2(a,b,c);Zl(a,b,c);}
function Zl(a,b,c){var d,e,f,g,h;d=new Bf;e=B7(20.0,c);f=new Bf;g=b.b/2|0;h=e/2|0;PI(f,g-h|0,b.a);LR(a.z,d,f,c);g=b.b;d.b=(g-(g/2|0)|0)+h|0;LR(a.B,d,f,c);b=a.cZ;g=f.b;Xy(b,g,d.a,d.b-g|0,f.a);}
function AGP(a,b){BN(b);PZ(a.dg,b);Ln(a.z,b);Ln(a.B,b);}
function ABL(a,b){if(b.bk!=121)return 0;return 1;}
function ACV(a,b){var c,d,e;if(DZ(a.p,a.z)){c=a.dg;d=a.z;e=new Vg;e.vt=a;KH(c,b,d,a,a,e);}if(DZ(a.p,a.B)){c=a.dg;d=a.B;e=new Vh;e.pX=a;KH(c,b,d,a,a,e);}return 1;}
function AMc(a,b){var c,d;c=DH(a.z,b.h)&&PH(a.z,b)?1:0;d=DH(a.B,b.h)&&PH(a.B,b)?1:0;return !c&&!d?0:1;}
function AL9(a,b,c,d){var e,f;e=DH(a.z,b.h)&&Q8(a.z,b,c,d)?1:0;f=DH(a.B,b.h)&&Q8(a.B,b,c,d)?1:0;return !e&&!f?0:1;}
function AGl(a,b,c){var d,e,f,g,h,i,j,k;d=DH(a.z,b.h);e=DH(a.B,b.h);f=a.p;g=f.eh;h=g!==null?0:1;i=a.z;j=g!==i?0:1;k=g!==a.B?0:1;if(d&&!(!h&&!k))FV(f,i);if(e&&!(!h&&!j))FV(a.p,a.B);if(d){i=Vq(a.z,b,c);if(i!==null)return i;}return !e?null:Vq(a.B,b,c);}
function AJm(a,b,c){var d,e,f,g;d=DH(a.z,b.h);e=DH(a.B,b.h);f=d&&Vj(a.z,b,c)?1:0;g=e&&Vj(a.B,b,c)?1:0;return !f&&!g?0:1;}
function AOg(a,b,c,d){var e,f,g,h;e=DH(a.z,b.h);f=DH(a.B,b.h);g=e&&JI(a.z,c,d)?1:0;h=f&&JI(a.B,c,d)?1:0;return !g&&!h?0:1;}
function ALQ(a){return Zy(a);}
var Wk=F(Mr);
function AIc(a){return Mt(1);}
function Wv(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new XX;d=d.then(Bk(e,"f"));f=new XV;f.te=b;f.tf=c;g=new XW;d.then(Bk(f,"f"),Bk(g,"f"));}
var AEJ=F();
function AQf(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(135)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(Lr(b)){case -1570047148:if(!Bn(b,B(136)))break a;d=16;break a;case -1519338717:if(!Bn(b,B(137)))break a;d=2;break a;case -1509980539:if(!Bn(b,B(138)))break a;d=12;break a;case -1073555521:if(!Bn(b,B(139)))break a;d=13;break a;case -1045861099:if(!Bn(b,B(140)))break a;d=17;break a;case -1045861098:if(!Bn(b,B(141)))break a;d=18;break a;case -811765794:if(!Bn(b,B(142)))break a;d=5;break a;case -785237654:if
(!Bn(b,B(143)))break a;d=10;break a;case -631889171:if(!Bn(b,B(144)))break a;d=8;break a;case -439438829:if(!Bn(b,B(145)))break a;d=19;break a;case 2129957:if(!Bn(b,B(146)))break a;d=1;break a;case 3343967:if(!Bn(b,B(147)))break a;d=9;break a;case 3556498:if(!Bn(b,B(148)))break a;d=4;break a;case 485517998:if(!Bn(b,B(149)))break a;d=6;break a;case 544901384:if(!Bn(b,B(150)))break a;d=3;break a;case 1030621992:if(!Bn(b,B(151)))break a;d=15;break a;case 1465713255:if(!Bn(b,B(152)))break a;d=7;break a;case 1554501643:if
(!Bn(b,B(153)))break a;d=14;break a;case 1609169232:if(!Bn(b,B(154)))break a;d=11;break a;default:}}b:{switch(d){case 1:break;case 2:b=new TE;break b;case 3:case 4:b=new TD;break b;case 5:b=new TC;break b;case 6:b=new TB;break b;case 7:b=new TA;break b;case 8:case 9:b=new Tz;break b;case 10:b=new Ty;break b;case 11:b=new Tx;break b;case 12:b=new Tw;break b;case 13:b=new Q9;break b;case 14:b=new Q5;break b;case 15:b=new Q7;break b;case 16:b=new Q3;break b;case 17:b=new Q4;break b;case 18:b=new Q1;break b;case 19:b
=new Q2;break b;default:b=new QZ;break b;}b=new TF;}return b;}
var ABF=F();
var J$=F(Le);
function ABn(){var a=this;J$.call(a);a.mt=0;a.md=0;a.hm=null;}
function AOl(a,b,c,d,e,f){var g=new ABn();ASD(g,a,b,c,d,e,f);return g;}
function ASD(a,b,c,d,e,f,g){Ww(a,c);a.X=e;a.dz=f;a.md=b;a.mt=g;a.hm=d;}
function SL(a,b,c){a.hm.data[b+a.md|0]=c;}
function K2(){var a=this;C.call(a);a.v5=null;a.p5=null;a.xu=0.0;a.mD=0.0;a.lT=null;a.k8=null;a.iH=0;}
function LW(){var a=this;C.call(a);a.gz=0;a.ia=0;}
var AWm=null;var AWl=null;function Zv(a,b){var c=new LW();Z3(c,a,b);return c;}
function Z3(a,b,c){a.gz=b;a.ia=c;}
function Il(a){return a.gz?0:1;}
function Hb(a){return a.gz!=1?0:1;}
function KQ(a){return !QR(a)&&!Mc(a)?0:1;}
function QR(a){return a.gz!=2?0:1;}
function Mc(a){return a.gz!=3?0:1;}
function Kh(a){var b;if(KQ(a))return a.ia;b=new Gm;Y(b);K(b);}
function D2(b){return Zv(2,b);}
function VQ(a){var b,c;switch(a.gz){case 0:b=new Ql;Y(b);K(b);case 1:b=new XD;Y(b);K(b);case 2:b=new VJ;c=a.ia;Y(b);b.ys=c;K(b);case 3:b=new P_;c=a.ia;Y(b);b.yl=c;K(b);default:}}
function AAv(){AWm=Zv(0,0);AWl=Zv(1,0);}
var Zj=F();
var Iu=F(0);
var NB=F();
function AI6(a,b){return b.arrayBuffer();}
var NA=F();
function ANs(a,b){var c,d;c=new Pk;d=new Pi;return $rt_globals.WebAssembly.instantiate(b,ALb(Bk(c,"f"),Bk(d,"f")));}
var Nz=F();
function AOd(a,b){AGL(b);}
var Ny=F();
function AHt(a,b){AEp(b);}
function Yf(){C.call(this);this.uD=null;}
function ANa(a,b){Kf(a.uD.z,b);}
function Yh(){C.call(this);this.oF=null;}
function ANO(a,b){Kf(a.oF.B,b);}
var TF=F();
function ANK(a,b){return AS9(b);}
var TE=F();
function AGs(a,b){return AUZ(b);}
var TD=F();
function AKb(a,b){return ATc(b);}
var TC=F();
function AJ$(a,b){var c,d,e;c=new WC;Fj(c,b);d=new Vn;d.l9=new Bf;d.ks=new Bf;c.rO=d;c.dH=Zr();c.cL=Zr();c.eg=M8(c.p);X(c.p.d5,c);d=b.m.b2;e=new TH;e.tO=c;X(d,e);X(b.m.bv,c);b=b.m.ez;d=new TK;d.sr=c;X(b,d);S_(c.cL);c.lM=ES(B(155),25.0);Ib(c.eg,F3(),c.lM);BC(c.gu,CM(43));b=F3();Ie(c.dH,b);Ie(c.cL,b);b=c.dH;b.jG=new TJ;d=c.cL;d.jG=new TG;d.j2=new Xz;d.tp=new XA;K1(b,(NT(0)).i6);K1(c.cL,(NT(0)).i6);return c;}
var TB=F();
function AKQ(a,b){var c,d,e;c=new XS;Fj(c,b);c.kS=ES(B(156),15.0);d=AEM();c.ey=d;X(c.p.d5,d);X(c.p.d5,c);BC(c.gu,CM(43));d=M8(c.p);c.hs=d;Ib(d,F3(),ES(B(155),25.0));d=b.m.b2;e=new OT;e.v2=c;X(d,e);d=b.m.ez;e=new OU;e.qJ=c;X(d,e);X(b.m.bv,Zp(c.hs));X(b.m.bv,c.ey);b=b.m.dl;d=c.ey;BN(d);e=new OV;e.t5=d;X(b,e);return c;}
var TA=F();
function AGA(a,b){var c,d,e;c=new Yx;Fj(c,b);c.fS=CD();c.fj=CD();c.o5=Q(B(157));c.iC=AQs();c.gb=0;d=c.p.d5;e=new Us;e.mV=c;X(d,e);X(b.m.bv,c);d=b.m.b2;e=new Ut;e.qD=c;X(d,e);b=Hq(b.be,B(155),35);c.jF=b;c.id=AEw(E4(b));BC(c.gu,Q(B(158)));return c;}
var Tz=F();
function AIe(a,b){var c,d,e,f;c=new Ps;El(c,b);c.f7=ACb();c.ea=0;c.sk=500;c.uN=HI(0,0,0,255,new B1);c.l$=20;c.u3=20;c.oW=Kq();d=b.m.bv;e=new WS;e.i1=c;f=new Yw;f.r5=e;e.rw=f;X(d,e);d=b.m.dl;e=new Td;e.oe=c;X(d,e);c.eb=b.be;c.tj=U1(b.bS);T7(c.f7,Hq(c.eb,B(155),c.u3),c.l$,c.eb);c.g1=Hu();return c;}
var Ty=F();
function AN3(a,b){var c,d;c=new Rl;Gs(c,b);b=b.m.b2;d=new Qm;d.uQ=c;X(b,d);return c;}
var Tx=F();
function ARM(a,b){return AUB(b);}
var Tw=F();
function ASB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new Xg;Gs(c,b);c.dX=Fg(0,0,300,300);c.e7=S6(0,0,3,3);d=b.be;b=b.m.bv;e=new Ud;e.ll=c;X(b,e);b=AAJ(d);c.p1=b;Gp(c.dX,b);G$(c.dX);b=c.dX.bw;FQ();BC(b,AW6);BC(c.dX.bm,CN(204,120,50));ACe();e=AWu;f=DX((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CW(d);Y9();switch(AWp.data[e.c2]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Er;Y(b);K(b);}b:
{Nt(m,5,5,h);b=m.d$.dx;switch(AWp.data[e.c2]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Er;Y(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.kG=m;T(c.e7.t,BM(m),C9(c.kG));BC(c.e7.bw,c.lW);return c;}
var Q9=F();
function ALI(a,b){var c,d,e;c=new SF;Gs(c,b);c.gs=Fg(0,0,300,300);c.kg=new Bf;c.iE=new Bf;c.hL=new Bf;d=b.be;b=b.m.bv;e=new Wj;e.jJ=c;X(b,e);b=AAJ(d);c.r0=b;Gp(c.gs,b);G$(c.gs);b=c.gs.bw;FQ();BC(b,AW6);BC(c.gs.bm,CN(204,120,50));return c;}
var Q5=F();
function AFl(a,b){var c,d,e,f;c=new O3;El(c,b);c.w2=20;c.yF=11;c.wH=220;c.jq=new Bf;c.xm=5000;c.gN=1;c.fE=H(Hf,[CM(0),CM(255)]);c.ek=b.be;d=b.m.bv;e=new UC;e.jA=c;f=new PT;f.nt=e;e.qg=f;X(d,e);b=b.m.dl;d=new N_;d.t9=c;X(b,d);b=CL(c.ek,200,220);c.j_=b;F6(b,B(155),20.0);b=CL(c.ek,200,20);c.fr=b;F6(b,B(155),20.0);c.hV=Hu();return c;}
var Q7=F();
function AI2(a,b){var c,d,e;c=new ID;Gs(c,b);X(b.m.bv,c);d=b.m.b2;e=new SS;e.r9=c;X(d,e);X(b.m.fI,new SR);d=b.m.fI;e=new SP;e.pN=c;X(d,e);X(b.m.f_,new SO);d=b.m.f_;e=new SQ;e.nz=c;X(d,e);b=!X4(b.bS)?B(159):B(160);d=new M;O(d);G(G(d,B(161)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var Q3=F();
function AL0(a,b){var c,d,e,f,g,h,i,j;c=new Qp;El(c,b);c.nI=CM(20);c.fl=Fg(0,0,300,300);d=b.m.b2;e=new Sl;e.ya=c;X(d,e);b=b.be;d=Hq(b,B(10),88);CB(b.cG,d);f=Eq(b.cG,B(162));g=Eq(b.cG,B(163));if(f>g)g=f;h=Df(g);i=Ka(d,1.1799999475479126);j=Bx();e=new M;O(e);U(G(U(G(e,B(164)),h),B(165)),i);Br(j,N(e));e=CL(b,h,i*2|0);c.ie=e;CB(e,d);Ci(c.ie,B(162),0.0,d.dE);Ci(c.ie,B(163),0.0,i+d.dE);b=CW(b);c.lN=b;CO(b,c.ie);Gp(c.fl,c.lN);G$(c.fl);b=c.fl.bw;FQ();BC(b,AW6);BC(c.fl.bm,AW7);return c;}
var Q4=F();
function APS(a,b){var c;c=new O_;Xi(c,b);Gk(c.b$,0,0,300,300);T(c.cY,300,300);return c;}
var Q1=F();
function AFb(a,b){var c;c=new Pa;Xi(c,b);c.fq=new Bf;c.fk=new Bf;T(c.dL,150,140);T(c.cY,500,100);T(c.eD,150,200);T(c.d9,500,250);return c;}
var Q2=F();
function APE(a,b){var c,d,e,f;c=new WT;Fj(c,b);c.ti=ES(B(156),20.0);d=AEM();c.ed=d;X(c.p.d5,d);X(c.p.d5,c);BC(c.gu,CM(43));d=M8(c.p);c.gU=d;Ib(d,F3(),ES(B(155),25.0));d=b.m.b2;e=new QM;e.x9=c;X(d,e);d=b.m.ez;e=new QN;e.qM=c;X(d,e);X(b.m.bv,Zp(c.gU));X(b.m.bv,c.ed);d=b.m.bv;e=c.p.cF;f=new RS;f.mL=e;X(d,f);b=b.m.dl;d=c.ed;BN(d);e=new QO;e.r_=d;X(b,e);return c;}
var QZ=F();
function ALM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new RF;YH(c,b);d=c.cM;e=new IG;f=AJR(B(166));g=R(Bv,8);h=I(B(167));i=0;j=0;k=h+1|0;while(true){l=GM(B(167),10,j);m=l>=0?Ca(B(167),j,l):Dj(B(167),j);n=i+1|0;g=ADt(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}QP(e,Pq(g,n),B(168),f);Kf(d,e);return c;}
function Hd(){var a=this;C.call(a);a.bI=0;a.ck=0;a.c1=0;a.i5=0;}
function AW8(a,b,c,d){var e=new Hd();UM(e,a,b,c,d);return e;}
function UM(a,b,c,d,e){a.bI=d;a.ck=b;a.c1=c;a.i5=e;}
function O$(){var a=this;Hd.call(a);a.dS=null;a.bk=0;a.hG=0;a.r8=0;a.kc=0;}
var ADJ=F();
function WJ(b,c){return (b+(c/2|0)|0)/c|0;}
function P1(b,c,d){if(b<(2147483647/c|0))return WJ(V(b,c),d);return 0.5+c*b/d|0;}
function IK(b,c){return ((b+c|0)-1|0)/c|0;}
function Hm(b){return b+0.5|0;}
function Df(b){return b+0.5|0;}
function Ev(b,c,d){return Bb(b,Z(c,d));}
function MI(){var a=this;Hd.call(a);a.h=null;a.vV=null;}
var UF=F(0);
function NW(){var a=this;C.call(a);a.ux=null;a.uy=null;}
function ALB(a,b){var c,d;c=a.ux;d=a.uy;$rt_globals.console.info("paste plain string "+b);c.l(FG(b));Dg(d);}
function Vo(){C.call(this);this.u8=null;}
function WI(a,b){a.u8.clipboardData.setData("text/plain",$rt_ustr(b));}
function Xn(){var a=this;JT.call(a);a.xb=0;a.m8=0;}
function II(){var a=this;C.call(a);a.A=null;a.t=null;a.bm=null;a.bw=null;}
function SE(){var a=new II();SA(a);return a;}
function S6(a,b,c,d){var e=new II();AIA(e,a,b,c,d);return e;}
function SA(a){a.A=new Bf;a.t=new Bf;a.bm=new B1;a.bw=new B1;}
function AIA(a,b,c,d,e){a.A=new Bf;a.t=new Bf;a.bm=new B1;a.bw=new B1;Gk(a,b,c,d,e);}
function Gk(a,b,c,d,e){T(a.A,b,c);T(a.t,d,e);}
function Tr(a){T(a.t,0,0);}
function Mg(a){var b;b=a.t;return V(b.b,b.a)?0:1;}
function Es(a,b){return F_(b,a.A,a.t);}
function US(a,b,c,d){var e;e=a.A;Bu(b,e.b+c|0,e.a+d|0,a.t,a.bm);}
function Ux(a,b,c,d,e,f){var g,h,i,j;g=a.A;d=g.b+d|0;e=g.a+e|0;g=a.t;h=a.bw;i=a.bm;Im(b,b.hF);I7(b.hF,b.bq,d,e,g,b.dp);UI(b.hF,b.bq,c);g=b.hF;j=b.bq;GK(j,g.va,h);GK(j,g.u$,i);c=g.qv;j.uniform2f(c,f,0.0);Ih(b);}
function AC2(){var a=this;C.call(a);a.d_=null;a.dZ=null;a.du=null;a.cc=null;a.S=null;}
function AN9(a){var b=new AC2();AK7(b,a);return b;}
function AK7(a,b){a.dZ=AEM();a.d_=b;a.cc=M8(b);}
function PZ(a,b){var c;a.S=b;c=a.du;if(c!==null)c.er=b.W;Ib(a.cc,b.W,b.qS);}
function WF(a){Jb(a.dZ,a.d_.cC);Iv(a.cc);}
function AO1(a,b){return !ZI(a.dZ,b)&&!KB(a.cc,b)?0:1;}
function ASG(a,b,c,d){return !ABD(a.dZ,b,c,d)&&!Jr(a.cc,b,c,d)?0:1;}
function AGS(a,b,c){var d;d=Jm(a.cc,b,c);if(d!==null)return d;return YF(a.dZ,b,c);}
function ANq(a,b,c){return !AEL(a.dZ,b,c)&&!DK(a.cc)?0:1;}
function VH(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=AN_();i=c.i;j=0;while(j<i){if(f===null){k=(Bs(c,j)).bz;l=Sf(EM(B3(g.f,k)));m=V7(g.f$);}else{n=f.data;k=n[j].ko.k5;l=!CI(g.f$,n[j].il)?B(31):Sf(EM(B3(g.f,k)));m=V7(n[j].il);}if(I(l)>153){o=Ca(l,0,150);n=new M;O(n);G(G(n,o),B(169));l=N(n);}if(I(m)>153){o=Ca(m,0,150);n=new M;O(n);G(G(n,o),B(169));m=N(n);}p=C7(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bs(c,j);}if(f!==null){q=new UP;q.nD=d;q.nC=o;}else{q=new UR;q.vN=d;q.vI=n;}Nn(h,
m,p,l,q);j=j+1|0;}r=Rc(h);if(a.du!==null)Uw(a);c=new Rk;n=a.d_;o=new SU;o.oY=a;o.oX=d;AAL(c,n,o);Wn(c,r);d=a.S;Yc(c,d.W,d.tn);a.du=AB8(a.d_);d=ZO(c,a.d_);n=a.S.W;QV(d,n.l8,n.kw);LZ(a.du,d);d=a.du;n=new M;O(n);G(G(n,B(170)),e);IL(d,N(n),a.S.pP,4.0);d=a.du;d.er=a.S.W;I1(a.dZ,d);d=a.du;s=(d.V.r.a+Cy(d.bt,2.0)|0)+Cy(a.d_,2.0)|0;i=(c.dW+c.dY|0)+c.f8|0;t=Cy(c.cz,5.0);e=BZ(Ev(t,b.b,c.cz.cb.b-i|0),Ev(s,b.a,c.cz.cb.a-c.cI.a|0));TQ(c);Z4(c);s=(c.dW+c.dY|0)+c.f8|0;b=c.cz;i=(b.cb.b-e.b|0)-Cy(b,5.0)|0;b=c.cz;t=(b.cb.a-e.a
|0)-Cy(b,5.0)|0;d=BZ(Z(s,i),Z(c.cI.a,t));Fo(a.du,e,d);FV(a.d_,c);}
function Uw(a){Kd(a.dZ,a.du);J2(a.du);a.du=null;}
function NK(a,b){var c;c=new SK;c.tV=a;c.t0=b;return c;}
function KH(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DK(a.cc)){g=a.cc;h=b.h;b=new Tm;b.Y=a;b.bN=c;b.oK=f;b.h5=e;b.iU=d;i=P$();e=b.bN.e;d=Dn(e);e=G6(e);f=b.bN.eC;if(V5(f,d,e)!==null){j=b.Y.S.W.bj;k=new RW;k.oh=b;k.og=h;D8(i,B(171),j,k);}if(KZ(f,d,e)!==null){j=b.Y.S.W.bj;k=new RV;k.pu=b;k.pw=h;D8(i,B(172),j,k);}if(NH(f,d,e)!==null){e=b.Y.S.W.bj;f=new RT;f.nB=b;f.nE=h;D8(i,B(173),e,f);}e=b.Y.S.W.bj;f=new RU;f.vu=b;f.vv=h;D8(i,B(174),e,f);if(!b.bN.ef){e=b.Y.S.W.bj;f=new PP;f.tZ=b;D8(i,B(175),e,f);}e=b.Y.S.W.bj;f
=new PN;f.qE=b;D8(i,B(176),e,f);if(!b.bN.ef&&X4(IJ(b))){e=b.Y.S.W.bj;f=new PQ;f.sW=b;D8(i,B(177),e,f);}l=b.Y.S.W.bj;d=P$();m=b.Y.S.W.bj;n=R(C$,3);o=n.data;k=b.iU;BN(k);e=new Tb;e.om=k;o[0]=D9(B(178),m,e);k=b.Y.S.W.bj;p=b.iU;BN(p);e=new Tc;e.rU=p;o[1]=D9(B(179),k,e);e=b.Y.S.W.bj;j=b.iU;BN(j);k=new Ta;k.vD=j;o[2]=D9(B(180),e,k);JE(d,B(181),m,FX(n),AW9);f=b.Y.S.W.bj;n=R(C$,2);o=n.data;k=b.h5;BN(k);j=new Ou;j.sh=k;o[0]=D9(B(182),f,j);j=b.Y.S.W.bj;k=b.h5;BN(k);p=new Os;p.q9=k;o[1]=D9(B(183),j,p);GP(d,B(184),f,FX(n));f
=b.Y.S.W.bj;j=new VE;j.rG=b;JE(d,B(185),f,j,AW9);GP(i,B(186),l,Hv(d));k=b.Y.S.W.bj;d=P$();GP(d,B(187),b.Y.S.W.bj,AE5(b));f=b.Y.S.W.bj;m=new WA;m.ta=b;D8(d,B(188),f,m);GP(i,B(189),k,Hv(d));Gh(g,h,Hv(i),NK(a,c));}}
function ALS(a,b,c,d){return Li(a.dZ,b,c,d);}
function Zb(b){var c;c=new Wp;c.ue=b;return c;}
var HV=F(0);
function AHT(a){}
function ASN(a){}
function AA2(){var a=this;C.call(a);a.ba=null;a.cx=null;a.ct=null;a.T=null;a.iM=null;a.rR=0;a.l0=null;a.cP=null;a.w=0;a.y=0;a.hj=0;a.lh=0;a.ge=0;a.jl=null;a.e0=null;a.cB=null;a.O=0;a.e=null;a.eq=null;a.eC=null;a.s=null;a.fN=null;a.dM=null;a.mw=null;a.gE=null;a.ug=0;a.so=0;a.cK=0;a.cl=0;a.cn=0;a.fe=null;a.ex=null;a.eu=null;a.bp=0;a.dd=0;a.ho=0;a.ig=0;a.h6=0;a.wo=0;a.vY=0;a.jH=0;a.i2=0;a.dN=0;a.cX=null;a.h2=0;a.h1=0;a.eZ=null;a.ef=0;a.bO=0;a.iA=null;a.ij=null;a.v$=null;a.g7=null;a.n7=null;a.vF=null;a.iY=null;a.lb
=0;a.rN=null;a.e2=Eo;a.tL=null;a.t$=null;}
function AEd(a,b){var c=new AA2();AKz(c,a,b);return c;}
function AKz(a,b,c){var d,e,f,g;a.ba=new Bf;a.cx=new Bf;a.rR=0;a.l0=R(Bj,10);a.cP=ANn();a.ge=16;a.jl=B(155);a.cB=R(Ld,4);d=new IG;e=new Ki;e.en=KX();e.eL=KX();e.gy=CD();e.D=M9(B(31));e.gX=0;e.cE=0;e.dc=On(e);d.f=e;d.jk=B(190);d.f$=null;a.e=d;f=new Wm;f.nv=CJ(R(Mz,0));f.s6=CJ(R(Mz,0));f.tu=CJ(R(MX,0));f.oZ=CJ(R(Qq,0));f.mU=CJ(R(G3,0));f.rV=CJ(R(RN,0));a.eC=f;a.s=ANT();e=new NF;e.eV=R(Jo,16);e.eW=0;e.dj=(-1);a.fN=e;a.gE=R(EW,0);a.fe=BZ(1,0);a.ex=Hu();a.eu=Hu();a.bp=0;a.dd=0;a.ho=0;a.h6=1;a.jH=1;a.i2=1;a.dN=3;a.cX
=ACb();a.eZ=B(191);a.ef=0;a.bO=0;a.iA=null;a.ij=CD();e=EX();BN(e);f=new Va;f.yt=e;a.g7=f;a.rN=new B1;e=new U_;e.rC=a;a.tL=e;e=new U7;e.n3=a;a.t$=e;a.ct=b;a.T=b.cC;a.iM=c;g=a.l0.data;b=new U6;b.tK=a;g[0]=b;b=new U9;b.r1=a;g[1]=b;b=new U8;b.ol=a;g[2]=b;b=new VA;b.t8=a;g[3]=b;b=new Vz;b.q0=a;g[4]=b;b=new VB;b.nL=a;g[5]=b;AFI();a.ig=AW$===AW_?0:1;}
function LR(a,b,c,d){Cu(a.ba,b);Cu(a.cx,c);Si(a,b,c,d);}
function Q0(a,b,c){a.n7=b;a.vF=c;}
function Si(a,b,c,d){var e;a.cK=B7(80.0,d);a.cl=B7(1.0,d);a.cn=B7(10.0,d);if(!a.bO)Cu(a.ct.cW,a.ba);else T(a.ct.cW,(b.b+c.b|0)-Lu(a)|0,b.a);VR(a.cX,a.ct.cW,Lu(a),c.a,d);b=a.cP;e=B7(2.0,d);b.d0.t.b=e;Up(a,a.jl,a.ge);V9(a);}
function AIL(a){a.lh=1;LS(a);}
function AHp(a){a.lh=0;}
function LS(a){SN(a.cP,Jv(Cl(a)));}
function Ln(a,b){var c,d;a.dM=b;c=a.cP;d=b.b9.tC;BC(c.d0.bm,d);c=a.ex;d=b.b9;Gl(c,d.mm,d.l3);c=a.eu;b=b.b9;Gl(c,b.mm,b.l3);}
function Yt(a){Lg(a,a.e0.mo,a.ge+1|0);}
function W9(a){var b;b=a.ge;if(b<=7)return;Lg(a,a.e0.mo,b-1|0);}
function Yu(a,b){Lg(a,b,a.ge);}
function Lg(a,b,c){if(a.ct.bR!==0.0){Up(a,b,c);F8(Cl(a));}a.ge=c;a.jl=b;}
function Up(a,b,c){var d,e,f,g,h,i;d=B7(c,a.ct.bR);e=a.e0;f=e!==null?e.ph:0;if(!(d==f&&CI(b,a.jl))){Ob(a.cX);g=a.gE.data;c=g.length;f=0;while(f<c){QI(g[f]);f=f+1|0;}g=a.e.f.D.data;c=g.length;f=0;while(f<c){Eh(g[f]);f=f+1|0;}g=a.cB.data;c=Hp(0,0);e=a.T;h=d;g[c]=GX(e,b,h,400,0);a.cB.data[Hp(0,1)]=GX(a.T,b,h,400,2);a.cB.data[Hp(1,0)]=GX(a.T,b,h,700,0);a.cB.data[Hp(1,1)]=GX(a.T,b,h,700,2);e=a.cB.data[Hp(0,0)];a.e0=e;c=E4(e);a.O=Df(c*1.25);a.cP.d0.t.a=E4(a.e0);a.mw=CH(a.mw,CL(a.T,1024,a.O));f=a.O;i=S5(a.cP);e=new M;O(e);b
=G(G(e,B(192)),b);BE(b,32);U(G(U(G(U(G(U(b,d),B(193)),c),B(165)),f),B(194)),i);$rt_globals.console.info($rt_ustr(N(e)));if(AXa){c=Lk(a.e0,a.O);b=new M;O(b);U(G(b,B(195)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.hj=G7(Fv(a),a.y,a.T.cG,a.cB);GZ(a);V9(a);}}
function Vr(a){return V(Cz(a.e.f)+5|0,a.O);}
function IF(a){return Bb(Vr(a)-a.cx.a|0,0);}
function QX(a){return Bb(a.ho-De(a)|0,0);}
function De(a){var b;b=!a.bO?0:C3(a)+a.cn|0;return Bb(1,(a.cx.b-a.cK|0)-b|0);}
function Lu(a){return a.bO?a.cK:a.cK-a.cn|0;}
function DJ(a){return a.cx.a;}
function K9(a,b){var c,d,e;c=a.e.f;d=c.gX;e=c.cE;d=d!=e&&b-c.pV>0.03125?1:0;if(d&&a.lb!=e){a.lb=e;S8(a);}d=JZ((a.bp+a.wo|0)-a.vY|0,IF(a));e=a.bp==d?0:1;if(e)E_(a,d);return !Tn(a.cP,b)&&!e&&!a.rR?0:1;}
function E_(a,b){var c,d;c=JZ(b,IF(a));if(c!=a.bp){a.bp=c;d=a.vF;if(d!==null)d.h$(c);}}
function In(a,b){var c,d;c=JZ(b,QX(a));if(c!=a.dd){a.dd=c;d=a.n7;if(d!==null)d.h$(c);}}
function Ms(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;b=IK(a.cx.a,a.O)+7|0;c=a.gE;if(c.data.length<b)a.gE=AAM(b,c,a.ug,a.so,a.e.f);Ct(a.T,0);R9(a.T,a.ba,a.cx);d=(a.O-S5(a.cP)|0)/2|0;e=(a.hj-(Qz(a.cP)/2|0)|0)-a.dd|0;f=!a.bO?a.cK:(a.cl+a.cn|0)+C3(a)|0;P7(a.cP,f+e|0,(d+V(a.w,a.O)|0)-a.bp|0);g=Cz(a.e.f);h=Fz(a);i=GY(a);a.ug=h;a.so=i;j=a.ct.cW;T(j,De(a),a.O);k=!a.bO?a.ba.b+a.cK|0:((a.ba.b+a.cl|0)+a.cn|0)+C3(a)|0;l=h;while(l<=i&&l<g){m=B3(a.e.f,l);n=Rt(a,l);AB4(n,m,a.mw,a.cB,a.T,a.O,De(a),a.dd);o=n.bY;a.ho
=Bb(a.ho,E2(m)+(40.0*a.ct.bR|0)|0);p=V(a.O,l)-a.bp|0;c=a.eq;q=c===null?null:c.data[l];b=a.ba.a+p|0;m=a.T;r=a.rN;s=!a.ig?0.0:0.5;d=De(a);f=a.O;p=a.dd;t=a.dM;u=ADi(a.s,l);if(u!==null){if(u.a==(-1))u.a=o.U;u.b=G7(o,u.b,a.T.cG,a.cB);u.a=G7(o,u.a,a.T.cG,a.cB);}ADk(n,b,k,m,r,j,s,d,f,p,t,u,a.iA,a.ij,a.w!=l?0:1,a.eq===null?0:1,q);l=l+1|0;}l=h;while(l<=i&&l<g&&a.jH){n=Rt(a,l);p=V(a.O,l)-a.bp|0;v=AAc(a.s,l);m=a.dM;q=m.b9;r=q.oG;w=a.w==l&&a.eq===null?1:0;a:{if(v)r=q.k$;else{c=a.eq;if(c!==null){c=c.data;if(l<c.length&&
c[l]!==null){r=HG(m.dw,m,c[l].f3);break a;}}if(w)r=q.jh;}}ACA(n,a.T,k,a.ba.a+p|0,a.O,j,a.dd,De(a),r);l=l+1|0;}if(a.h6){x=Z(i+1|0,g);AB9(a,V(a.O,x)-a.bp|0);}Z$(a);ABg(a,h,i);if(a.i2)AEC(a,h,i,g);if(a.lh&&e>=(( -Qz(a.cP)|0)/2|0)){n=a.cP;m=a.cx;if(ZD(n.d0.A,0,0,m))Vw(a.cP,a.T,a.ba);}ACO(a);ADv(a);FJ(a.T);}
function AEC(a,b,c,d){var e,f,g,h,i,j,k,l;while(b<=c&&b<d){a:{e=a.eq;if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dM;h=HG(h.dw,h,g.f3);}else h=e!==null?a.dM.b9.et:a.dM.b9.jh;if(!(a.w!=b&&g===null)){a.fe.b=!a.bO?(a.cn-a.cl|0)-a.dN|0:((a.cn+C3(a)|0)+a.cl|0)-a.dN|0;i=a.fe;j=a.O;i.a=j;k=a.bO?0:(a.cK-a.cn|0)+a.cl|0;j=V(j,b)-a.bp|0;g=a.T;l=a.ba;Bu(g,l.b+k|0,l.a+j|0,i,h);}b=b+1|0;}}
function ABg(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cx.a;e=Z(d,V(Cz(a.e.f),a.O)-a.bp|0);f=a.cX;g=a.bp;h=a.eq===null?a.w:(-1);i=a.T;j=a.dM;R9(i,f.fd,f.eE);J8(f,i,b,d);X$(f,b);Yp(f,g,e,j,i);k=j.hh;if(e<d){l=f.fd;Bu(i,l.b,l.a+e|0,BZ(f.eE.b,d-e|0),k.hv);}if(b<=h&&h<=c){m=j.hh;c=h/20|0;l=f.cA;j=Bs(l,c%l.i|0);k=f.fd;e=V(f.cA.i,f.iI);b=j.eN.a;d=((j.ji.a-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%C9(j.bo)|0)|0;b=h%j.dV|0;c=j.M;d=d+V(b,c)|0;if(d<( -c|0))d=d+e|0;T(j.dT,j.eN.b,c);f=j.d3;b=h%j.dV|0;c=j.M;Cs(f,0.0,V(b,c),j.eN.b,
c);E3(j,i,d,k,m.o2,m.uI);}FJ(i);}
function Fz(a){return Z(a.bp/a.O|0,Cz(a.e.f)-1|0);}
function GY(a){return Z(((a.bp+DJ(a)|0)-1|0)/a.O|0,Cz(a.e.f)-1|0);}
function V9(a){T7(a.cX,a.cB.data[0],a.O,a.T);J8(a.cX,a.T,Fz(a),DJ(a));}
function Rt(a,b){var c;c=a.gE.data;return c[b%c.length|0];}
function AEV(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dp(a.s))Dt(a,a.eZ);else{b=D5(a.s);c=FD(a.s);d=c.N;e=b.N;f=(d-e|0)+1|0;g=BG(f);h=g.data;i=R(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eZ;e=e+1|0;k=f;}l=EU(a.w,a.y);m=new Tf;m.ru=a;PC(a,g,0,0,i,l,m);b.bf=b.bf+I(a.eZ)|0;c.bf=c.bf+I(a.eZ)|0;Md(a,a.y+I(a.eZ)|0,0);D0(a);}return 1;}
function ACu(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dp(a.s)){b=B3(a.e.f,a.w);if(b.o.data.length>0){c=Sd(a,b);if(c===null)return 1;d=a.e.f;e=a.w;f=EU(e,a.y);d.cE=d.cE+1|0;g=d.gy;h=R(G9,1);h.data[0]=AFL(e,0,1,c,f.bz,f.bJ);B2(g,h);JL(d,e,0,1,c);FY(b,0,I(c));Md(a,a.y-I(c)|0,0);}}else{f=D5(a.s);c=FD(a.s);i=c.N;j=f.N;i=(i-j|0)+1|0;k=BG(i);h=k.data;l=R(Bv,i);m=l.data;e=a.y;n=a.w;o=0;while(j<=c.N){b=B3(a.e.f,j);if(b.o.data.length>0){b=Sd(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=Mq(k,o);h=Dk(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.N)f.bf=Bb(0,f.bf-I(b)|0);if(j==c.N){c.bf=Bb(0,c.bf-I(b)|0);Md(a,a.y-I(b)|0,0);}i=i+1|0;}f=EU(n,e);b=new Wl;b.rq=a;PC(a,p,0,1,h,f,b);}D0(a);return 1;}
function Sd(a,b){var c,d,e,f;c=Ev(0,I(a.eZ),XH(b));if(!c)b=null;else{b=B(62);if(c<0){b=new BI;Y(b);K(b);}if(c!=1){d=b.b3.data.length;if(d&&c){e=BQ(V(d,c));d=0;f=0;while(f<c){P0(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=MA(e);}else b=AVC;}}return b;}
function PC(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BG(i);k=AU7(i).data;Hz(j,c);c=0;l=k.length;if(c>l){f=new BI;Y(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cE=o.cE+1|0;p=R(G9,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AFL(h[m],n[m],k[m],b[m],f.bz,f.bJ);m=m+1|0;}B2(o.gy,p);c=0;while(c<i){b=e.data;JL(o,h[c],n[c],k[c],b[c]);g.mu(F4(h[c]),b[c]);c=c+1|0;}}
function AD_(a){var b,c,d,e,f,g,h,i;if(Dp(a.s))GN(a);Eh(B3(a.e.f,a.w));b=a.e.f;c=a.w;d=a.y;e=b.D;f=e.data;g=f[c];e=Dk(e,f.length+1|0);f=e.data;b.D=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DQ(R(B6,0));b.D.data[c+1|0]=g;}else if(d==g.U){f[c]=g;f[c+1|0]=DQ(R(B6,0));}else{f=(IO(g,d)).data;e=b.D.data;e[c]=f[0];e[c+1|0]=f[1];}Fr(b,c,d,0,B(196));D0(a);return CE(a,a.w+1|0,0,0);}
function ADO(a){if(Dp(a.s))GN(a);else Pt(a.e.f,a.w,a.y);GZ(a);D0(a);return 1;}
function YS(a){var b,c,d;if(Dp(a.s)){GN(a);return 1;}b=a.y;if(!b&&!a.w)return 1;if(b){c=a.w;b=b-1|0;Pt(a.e.f,c,b);}else{c=a.w-1|0;b=Fm(a.e.f,c);d=a.e.f;K_(d,c);Fr(d,c,Fm(d,c),1,B(196));}D0(a);return CE(a,c,b,0);}
function Dt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ef)return 0;if(Dp(a.s))GN(a);c=Ma(VD(b,B(197),B(31)),B(196),(-1));d=c.data;b=a.e.f;e=a.w;f=a.y;Yn(b,e,f,c);g=d.length;if(!g)h=AVC;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BQ(i+V(g-1|0,I(B(196)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(196))){m=l+1|0;c[l]=L(B(196),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=MA(k);}Fr(b,e,f,0,h);e=a.w;m=(e+g|0)-1|0;CE(a,
m,m!=e?I(d[g-1|0]):a.y+I(d[0])|0,0);E$(a);D0(a);return 1;}
function GN(a){var b,c,d;b=D5(a.s);c=a.e.f;d=a.s;TW(c,d,Wx(c,d));CE(a,b.N,b.bf,0);E$(a);D0(a);}
function E$(a){var b;b=a.s;b.c4=0;B0(b.bT,a.w,a.y);B0(a.s.bK,a.w,a.y);}
function C3(a){return a.e0.mb|0;}
function AB9(a,b){var c,d;c=a.cx.a;if(b<c){d=a.ct.cW;d.a=c-b|0;d.b=!a.bO?De(a)+a.dN|0:De(a)+a.cl|0;c=!a.bO?(a.ba.b+a.cK|0)-a.dN|0:(((a.ba.b+a.cn|0)+C3(a)|0)+a.cl|0)-a.dN|0;Bu(a.T,c,a.ba.a+b|0,d,a.dM.b9.et);}}
function ACO(a){var b;b=a.bO?a.ba.b+C3(a)|0:a.ba.b+a.cx.b|0;IC(a.ex,a.bp,a.ba.a,DJ(a),Vr(a),b,C3(a));b=!a.bO?a.ba.b+a.cK|0:((a.ba.b+a.cl|0)+a.cn|0)+C3(a)|0;MJ(a.eu,a.dd,b,De(a),a.ho,a.ba.a+DJ(a)|0,C3(a));}
function ADv(a){var b,c;b=P5(a.ex);c=P5(a.eu);if(!(!b&&!c)){Ct(a.T,1);if(b)F1(a.ex,a.T);if(c)F1(a.eu,a.T);if(b)Gj(a.ex,a.T);if(c)Gj(a.eu,a.T);}}
function Z$(a){var b,c,d,e;b=a.fe;c=a.cx;b.a=c.a;b.b=a.cl;d=!a.bO?a.cK-a.cn|0:(c.b-Lu(a)|0)-a.cl|0;b=a.T;c=a.ba;Bu(b,c.b+d|0,c.a,a.fe,a.dM.b9.vp);a.fe.b=!a.bO?(a.cn-a.cl|0)-a.dN|0:((a.cn+C3(a)|0)+a.cl|0)-a.dN|0;e=a.bO?0:(a.cK-a.cn|0)+a.cl|0;b=a.T;c=a.ba;Bu(b,c.b+e|0,c.a,a.fe,a.dM.b9.et);}
function JZ(b,c){return Z(Bb(0,b),c);}
function HM(a,b){var c,d,e,f,g;b=b.data;$rt_globals.console.info("onFileParsed");a.h2=1;a.h1=1;c=D_(b[0]);d=FN(b[1]);e=(D_(b[2])).data[0];ABK(a.e.f,c,d);WH(a,ADU(e));Gy(Cl(a),AXb);F8(Cl(a));f=Ky(FI(),a.e2);g=new M;O(g);G(H0(G(g,B(198)),f),B(199));$rt_globals.console.info($rt_ustr(N(g)));g=a.iY;if(g!==null)g.l(a);}
function WH(a,b){var c,d;c=Dn(a.e);if(!CI(c,b)){d=new M;O(d);G(G(G(G(d,B(200)),c),B(201)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.jk=b;}}
function Cl(a){return a.ct.i3;}
function KO(a,b){var c,d,e,f,g,h;c=EA(b);d=new M;O(d);G(G(d,B(202)),c);$rt_globals.console.info($rt_ustr(N(d)));NN(Cl(a),EA(b));CE(a,0,0,0);a.e2=FI();a.h2=0;a.h1=0;a.eq=null;Kn(a.cX,null);e=new IG;f=R(Bv,1);f.data[0]=B(31);AEN(e,f,AUW(B(31),B(31),EA(b),null));a.e=e;CE(a,0,0,0);c=EA(b);g=F5(c,46,I(c)-1|0);if(g!=(-1))c=Dj(c,g);h=!Bn(c,B(203))?5120:10240;c=new Ts;c.up=a;c.uq=h;c.ur=b;d=b.fh;if(d!==null)Lw(c,JF(b,d.size));else{d=b.gQ.getFile();e=new TZ;e.mA=b;e.mB=c;b=new T2;b.uM=c;d.then(Bk(e,"f"),Bk(b,"f"));}}
function HD(a,b,c,d,e){if(Hw(a,e))return 1;if(c&&d)return 1;if(c)E_(a,a.bp+((V(b,a.O)*12|0)/10|0)|0);else if(!d){IU(a,a.w+b|0,e);TS(a);}return 1;}
function UB(a,b,c,d){var e,f,g;if(Hw(a,d))return 1;e=Fv(a);if(!c)f=a.y+b|0;else if(b>=0)f=G0(e,a.y);else{f=a.y;if(!f)f=(-1);else{c=Ix(e,f);if(c>0&&e.dy.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dy.data[c-1|0];}}if(f>e.U){if((a.w+1|0)<Cz(a.e.f))CE(a,a.w+1|0,0,d);}else if(f>=0)Dq(a,f,d);else{b=a.w;if(b>0){g=(B3(a.e.f,b-1|0)).U;CE(a,a.w-1|0,g,d);}}PR(a);return 1;}
function Hw(a,b){if(Dp(a.s)&&!b){E$(a);GZ(a);return 1;}if(!(b&&Dp(a.s)))E$(a);return 0;}
function CE(a,b,c,d){a.y=c;return IU(a,b,d);}
function IU(a,b,c){a.w=Ev(0,b,Cz(a.e.f)-1|0);return Dq(a,a.y,c);}
function Dq(a,b,c){a.y=Ev(0,b,(Fv(a)).U);a.hj=a.ct.bR===0.0?0:G7(Fv(a),a.y,a.T.cG,a.cB);LS(a);GZ(a);if(c)a.s.c4=1;KP(a.s,a.w,a.y);a.s.c4=0;return 1;}
function Md(a,b,c){var d;d=R0(a.s);Dq(a,b,c);a.s=d;}
function GZ(a){TS(a);PR(a);}
function TS(a){var b,c,d,e,f;b=a.bp;c=b+DJ(a)|0;d=a.w;e=a.O;d=V(d,e);f=d+e|0;if(d<(b+e|0))E_(a,d-e|0);else if(f>(c-e|0))E_(a,(f-DJ(a)|0)+a.O|0);}
function PR(a){var b,c,d,e,f;b=Df(a.ct.bR*30.0);c=a.dd;d=c+De(a)|0;e=a.hj;f=e+b|0;if(e<(c+b|0))In(a,e-b|0);else if(f>(d-b|0))In(a,(f-De(a)|0)+b|0);}
function TY(a,b,c){var d,e,f,g,h,i,j,k,l;Vx(a);d=a.e.f;e=DP(d.en,c);if(e!==null)c=e;a:{f=DP(d.eL,c);if(f!==null){a.iA=Kl(d,c);c=B8(f);while(true){if(!Cc(c))break a;g=B$(c);B2(a.ij,Kl(d,g));}}}h=b.bz;i=b.bJ;b=a.eC;c=Dn(a.e);d=G6(a.e);j=(Cp(b.oZ)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.ui(c,d)){d=b.xS;break b;}l=l+1|0;}d=null;}if(d!==null){g=a.e;c=new Ot;c.xy=a;c.xA=g;c.xz=h;c.xx=i;d.sF(g,h,i,c,a.g7);}}
function HE(a,b){var c;CE(a,b.bz,b.bJ,0);c=G0(Fv(a),a.y);B0(a.s.bK,a.w,c);B0(a.s.bT,a.w,a.y);}
function EV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.ba;e=c-d.b|0;f=Ev(0,((b.a-d.a|0)+a.bp|0)/a.O|0,Cz(a.e.f)-1|0);g=!a.bO?a.cK:(a.cl+a.cn|0)+C3(a)|0;h=Bb(0,(e-g|0)+a.dd|0);b=B3(a.e.f,f);d=a.T.cG;i=a.cB;if(!(b.ep!==null&&!b.fY))Lm(b,d,i);j=b.ep;e=b.o.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.U;else{c=Uo(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.o.data.length)k=b.U;else{j=Xa(b,d,i,c);k=0;e=0;while(e<c){k=k+I(b.o.data[e].u)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AXc){d=new M;O(d);U(G(U(G(U(G(d,B(204)),e),B(205)),h),B(206)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return EU(f,k);}
function TP(a,b){var c;c=b.bz;a.w=c;a.y=b.bJ;a.hj=G7(B3(a.e.f,c),a.y,a.T.cG,a.cB);LS(a);}
function Fv(a){return B3(a.e.f,a.w);}
function JI(a,b,c){var d,e;d=Df((a.O*4|0)*c/150.0);e=Df(b);if(d)E_(a,a.bp+d|0);if(e)In(a,a.dd+e|0);return 1;}
function Vj(a,b,c){a.s.c4=0;return 1;}
function Vq(a,b,c){var d,e,f;if(c)return null;d=Fh(a.ex,b.h,a.tL,1);if(d!==null)return d;d=Fh(a.eu,b.h,a.t$,0);if(d!==null)return d;I3(a);e=EV(a,b.h);f=HS(a.e.f,e.bz,e.bJ);TP(a,e);TY(a,e,f);if(!b.bI){b=a.s;if(!b.c4)B0(b.bT,a.w,a.y);}b=a.s;b.c4=1;KP(b,a.w,a.y);b=new R1;b.td=a;return b;}
function Q8(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.ck){b=b.h;e=EV(a,b);f=HS(a.e.f,e.bz,e.bJ);g=OZ(a,f);h=KZ(a.eC,Dn(a.e),G6(a.e));if(h!==null){f=a.e;c=e.bz;d=e.bJ;e=new Ug;e.xq=a;e.xp=b;e.xo=g;h.sF(f,c,d,e,a.g7);}else{e=DP(a.e.f.en,f);if(e!==null){HE(a,e);c=1;}else{e=DP(a.e.f.eL,f);if(e!==null&&!EF(e)){if(e.i!=1){VH(a.iM,b,e,a,g);c=1;}else{HE(a,Bs(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EV(a,b.h)).bz;e=B3(a.e.f,c);c=G5(e,a.y);d=G0(e,a.y);b=Vi(e,c);if((d-1|0)==e.U){B0(a.s.bT,a.w,XH(e));B0(a.s.bK,
a.w,e.U);}else{if(b!==null){b=b.u;i=0;c:{while(true){j=b.b3.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.y;if(c==i){c=G5(e,c-1|0);d=G0(e,c);}else{if(d!=i){Qn(a.s,a.w);break b;}c=G5(e,d+1|0);d=G0(e,c);}}}B0(a.s.bT,a.w,c);a.s.c4=1;CE(a,a.w,d,0);a.s.c4=0;I3(a);}}break a;case 3:break;default:break a;}Qn(a.s,a.w);XR(a.fN);I3(a);}}return 1;}
function PH(a,b){var c,d,e,f,g,h,i,j,k;c=a.ct.cF;if(Fs(a.ex,b.h,c))return 1;if(Fs(a.eu,b.h,c))return 1;d=a.cX;if(F_(b.h,d.fd,d.eE)&&Hl(c)?1:0)return 1;e=b.h;f=!a.bO?a.ba.b+a.cK|0:((a.ba.b+a.cn|0)+a.cl|0)+C3(a)|0;a:{g=a.ba.a;h=De(a);i=DJ(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Hl(c);if(b.ck){e=EV(a,b.h);e.bJ=G5(B3(a.e.f,e.bz),e.bJ);b=a.e.f;if(!N4(b.en,e)&&!N4(b.eL,e)?0:1)return DD(c,B(207));}return DD(c,B(190));}
function ANF(a,b){var c,d,e,f;c=b.ck;if(c&&b.bk==65){c=Cz(a.e.f)-1|0;d=Fm(a.e.f,c);B0(a.s.bT,0,0);B0(a.s.bK,Cz(a.e.f)-1|0,d);return 1;}if(c&&b.bk==80){HN(a);return 1;}if(!a.ef&&c&&b.bk==90){if(Dp(a.s))E$(a);b=a.e.f;b.cE=b.cE+1|0;e=b.gy;d=e.i;if(!d)e=null;else{f=(D7(e,d-1|0)).data;e=TO(b,f[0]);c=1;while(c<f.length){TO(b,f[c]);c=c+1|0;}}if(e!==null){CE(a,e.b,e.a,0);D0(a);}return 1;}if(!c&&!b.c1){if(Bn(b.dS,B(208))){Dt(a,B(209));Dq(a,a.y-1|0,0);c=1;}else if(Bn(b.dS,B(210))){Dt(a,B(211));Dq(a,a.y-1|0,0);c=1;}else if
(Bn(b.dS,B(43))){Dt(a,B(212));Dq(a,a.y-1|0,0);c=1;}else if(Bn(b.dS,B(213))){Dt(a,B(214));Dq(a,a.y-1|0,0);c=1;}else if(Bn(b.dS,B(215))){Dt(a,B(216));Dq(a,a.y-1|0,0);c=1;}else if(!Bn(b.dS,B(217)))c=0;else{Dt(a,B(218));Dq(a,a.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c1&&!b.ck)){d=b.bk;if(d>=48&&d<=57){c=d-48|0;e=a.l0.data[c];if(e!==null)e.q();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bk){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(ABh(a,b))return 1;if(a.ef)c=0;else c:{switch(b.bk){case 8:break;case 9:c=!b.bI?AEV(a):ACu(a);break c;case 13:c=AD_(a);break c;case 46:c=ADO(a);break c;default:c=0;break c;}c=YS(a);}if(c)return 1;if(b.ck&&b.bk==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AJ5(b.bk)&&b.bk!=27){if(!b.ck&&!b.c1&&!b.i5)return I(b.dS)>0&&Dt(a,b.dS)?1:0;return 0;}return 0;}
function W$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bn(B(168),Dn(a.e))){b=Cl(a);c=new VC;c.u5=a;d=R(C,3);e=d.data;e[0]=EH(a.e.f);f=Fz(a);g=GY(a);h=Bb(0,f-100|0);f=Z(Cz(a.e.f)-1|0,g+100|0);i=BG(3);j=i.data;j[0]=Gd(a.e.f,h);k=a.e.f;l=0;f=Z(f+1|0,k.D.data.length);m=0;while(m<f){l=l+Fm(k,m)|0;if(m!=(k.D.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.dc;k=CD();MH(n,n.dB,k);i=BG(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bs(k,m);h=p+1|0;o[p]=q.b1;l=h+1|0;o[h]=q.b8;p=l+1|0;o[l]=q.fw;m=m+1|
0;}e[2]=i;CQ(b,c,B(219),d);}}
function HN(a){var b,c,d,e;b=ABN(Dn(a.e));if(b===null){b=a.iY;if(b!==null)b.l(a);}else{a.e2=FI();c=Cl(a);d=new PU;d.vs=a;e=R(C,1);e.data[0]=EH(a.e.f);CQ(c,d,b,e);}}
function S8(a){var b,c,d,e,f,g,h;b=a.e.f.dc;c=Vt(b,b.dB);if(c===null)return;if(Bn(B(190),Dn(a.e)))PD(a.e.f);a:{d=E8([CY(c),C5(c),c.bZ.fw]);e=EH(a.e.f);f=BG(1);g=Dn(a.e);h=(-1);switch(Lr(g)){case 3401:if(!Bn(g,B(220)))break a;h=3;break a;case 98723:if(!Bn(g,B(221)))break a;h=2;break a;case 3254818:if(!Bn(g,B(168)))break a;h=1;break a;case 3556653:if(!Bn(g,B(190)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Cl(a);c=new Ye;c.tX=a;CQ(b,c,B(222),H(C,[e,f,d]));}
function GI(a,b,c){var d,e,f,g,h,i;if(c&&a.ef)return 0;d=D5(a.s);e=d.N;if(Dp(a.s)){f=a.e.f;g=a.s;h=Wx(f,g);if(c)TW(f,g,h);if(c){CE(a,d.N,d.bf,0);E$(a);D0(a);}}else{h=Fe(EM(a.e.f.D.data[e]),B(196));i=Z(Cz(a.e.f)-1|0,e);B0(a.s.bK,i,0);if(e>=(Cz(a.e.f)-1|0))B0(a.s.bK,i,Fm(a.e.f,i));else B0(a.s.bT,i+1|0,0);if(c)GN(a);else CE(a,e,0,0);}b.l(h);return 1;}
function ABh(a,b){var c,d,e,f;a:{switch(b.bk){case 33:c=b.ck?IU(a,IK(a.bp,a.O),b.bI):HD(a,2-WJ(DJ(a),a.O)|0,0,b.c1,b.bI);break a;case 34:c=!b.ck?HD(a,WJ(DJ(a),a.O)-2|0,0,b.c1,b.bI):IU(a,((a.bp+DJ(a)|0)/a.O|0)-1|0,b.bI);break a;case 35:if(!Hw(a,b.bI)&&!Dq(a,(Fv(a)).U,b.bI)){c=0;break a;}c=1;break a;case 36:if(!Hw(a,b.bI)&&!Dq(a,0,b.bI)){c=0;break a;}c=1;break a;case 37:c=b.ck;if(c&&b.c1){I3(a);d=a.fN;e=d.dj;if(e<=0)d=null;else{f=d.eV.data;c=e-1|0;d.dj=c;d=f[c];}if(d===null)c=1;else{CE(a,I$(d),LX(d),0);a.s=R0(d.mf);c
=1;}break a;}c=UB(a,(-1),c,b.bI);break a;case 38:c=HD(a,(-1),b.ck,b.c1,b.bI);break a;case 39:c=b.ck;if(c&&b.c1){d=a.fN;c=d.dj;if(c==(d.eW-1|0))d=null;else{f=d.eV.data;c=c+1|0;d.dj=c;d=f[c];}if(d===null)c=1;else{CE(a,I$(d),LX(d),0);a.s=R0(d.mf);c=1;}break a;}c=UB(a,1,c,b.bI);break a;case 40:c=HD(a,1,b.ck,b.c1,b.bI);break a;default:}c=0;}if(c&&b.bI)B0(a.s.bK,a.w,a.y);if(c)TY(a,EU(a.w,a.y),HS(a.e.f,a.w,a.y));return c;}
function I3(a){var b,c,d,e,f,g,h;b=a.fN;c=b.dj;b=c<0?null:b.eV.data[c];if(b!==null&&a.w==I$(b)&&a.y==LX(b))return;d=a.fN;b=new Jo;c=a.w;e=a.y;f=a.s;b.lw=EU(c,e);g=R0(f);b.mf=g;g.c4=0;e=d.dj;h=d.eW;if(e==(h-1|0))M$(d,b);else{c=e+1|0;while(c<h){XR(d);c=c+1|0;}M$(d,b);}d.dj=d.dj+1|0;}
function D0(a){a.e.f.pV=Jv(Cl(a));}
function Kf(a,b){var c,d,e,f,g,h,i;a.v$=null;Vx(a);c=a.e;a.e=b;a.e2=FI();d=ABN(Dn(a.e));if(d!==null){e=Cl(a);f=new M5;f.p_=a;g=R(C,1);g.data[0]=EH(a.e.f);CQ(e,f,d,g);}g=(Cp(a.eC.mU)).data;h=g.length;i=0;while(i<h){g[i].mu(c,b);i=i+1|0;}}
function Vx(a){a.iA=null;Hy(a.ij);}
function ABN(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Lr(b)){case 3401:if(!Bn(b,B(220)))break a;c=2;break a;case 98723:if(!Bn(b,B(221)))break a;c=1;break a;case 3254818:if(!Bn(b,B(168)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(223);break b;case 2:b=B(224);break b;default:b=null;break b;}b=B(225);}}return b;}
function OZ(a,b){var c;c=Kl(a.e.f,b);if(c===null)return B(31);return c.u;}
function DH(a,b){return F_(b,a.ba,a.cx);}
function LA(a,b){var c,d,e,f,g;a.eq=b;Br(Bx(),B(226));b=a.eq;if(b===null){Br(Bx(),B(227));Kn(a.cX,null);}else{b=b.data;c=DX(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.f3<<24>>24;e=e+1|0;}Kn(a.cX,c);}}
var HT=F(0);
function Rj(){C.call(this);this.s$=null;}
function AKs(a,b){var c;c=a.s$;WL(c,c.z,c.B);}
function Rh(){C.call(this);this.uH=null;}
function AMA(a,b){var c;c=a.uH;WL(c,c.B,c.z);}
function Ri(){C.call(this);this.oQ=null;}
function AGf(a,b){QL(a.oQ,b);}
function Rf(){C.call(this);this.sq=null;}
function AFR(a,b){QL(a.sq,b);}
function Rg(){C.call(this);this.m0=null;}
function AMd(a,b){return ABL(a.m0,b);}
function HO(){var a=this;C.call(a);a.ke=null;a.o6=null;a.mH=null;}
function AXd(a,b){var c=new HO();Sy(c,a,b);return c;}
function AXe(a,b,c){var d=new HO();VS(d,a,b,c);return d;}
function Sy(a,b,c){VS(a,b,null,c);}
function VS(a,b,c,d){a.ke=b.bS;a.o6=c;a.mH=d;}
function APG(a,b){var c,d;if(b.ck&&b.bk==79){c=a.o6;if(c!==null&&b.bI)Wu(a.ke,c);else L4(a.ke,a.mH);d=1;}else d=0;return d;}
function Rd(){C.call(this);this.qC=null;}
function AOa(a,b){var c,d;c=a.qC;d=DZ(c.p,c.z)?c.z:!DZ(c.p,c.B)?null:c.B;if(d!==null){KO(d,b);c.dm=null;}}
function Re(){C.call(this);this.tI=null;}
function AK4(a,b){b=b;return ACV(a.tI,b);}
var ACx=F();
var Zx=F(0);
function Z8(b,c,d){return HI(b,c,d,255,new B1);}
function HI(b,c,d,e,f){Cs(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Xl(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bn=g+i;e.bG=h+i;e.bl=j+i;return e;}
function JA(b,c,d,e,f){f=Xl(b,c,d,f);f.bH=e;return f;}
function GJ(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Yr(){var a=this;C.call(a);a.cC=null;a.i3=null;a.cF=null;a.cb=null;a.bR=0.0;a.eh=null;a.d5=null;a.cW=null;a.os=null;a.yH=null;a.yG=null;}
function KU(a){var b;b=a.eh;if(b!==null)b.sT();}
function JY(a){var b;b=a.eh;if(b!==null)b.vx();}
function Xj(a,b){var c;c=a.i3.dQ!==(Eb()).activeElement?0:1;if(c)JY(a);a.eh=b;if(c)KU(a);}
function FV(a,b){JY(a);a.eh=b;KU(a);}
function DZ(a,b){return b!==a.eh?0:1;}
function IR(a){return a.cC.cG;}
function GV(a,b){return Hq(a.cC,b.iO,B7(b.h3,a.bR));}
function Cy(a,b){return B7(b,a.bR);}
var SI=F();
function ASJ(a,b){var c,d,e;c=b.ck;d=c&&!b.bI&&!b.c1&&!b.i5?1:0;a:{if(d){d=b.bk;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bI&&!c&&!b.c1&&!b.i5?1:0;d=d&&b.bk==46?1:0;}b:{if(!d){e=b.bk;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.kc=1;}return 0;}
function SJ(){C.call(this);this.ss=null;}
function AFD(a,b){var c;c=a.ss.eh;return c!==null&&c.g8(b)?1:0;}
function B1(){var a=this;C.call(a);a.bn=0.0;a.bG=0.0;a.bl=0.0;a.bH=0.0;}
function ARv(a){var b=new B1();ANj(b,a);return b;}
function Cs(a,b,c,d,e){a.bn=b;a.bG=c;a.bl=d;a.bH=e;}
function ANj(a,b){a.bn=b.bn;a.bG=b.bG;a.bl=b.bl;a.bH=b.bH;}
function BC(a,b){a.bn=b.bn;a.bG=b.bG;a.bl=b.bl;a.bH=b.bH;return a;}
function ASk(a,b){if(a===b)return 1;return b!==null&&Cf(a)===Cf(b)&&KG(a,b)?1:0;}
function KG(a,b){return b.bn===a.bn&&b.bG===a.bG&&b.bl===a.bl&&b.bH===a.bH?1:0;}
var Ep=F(0);
function ABE(){C.call(this);this.cR=null;}
function AEM(){var a=new ABE();ALN(a);return a;}
function ALN(a){a.cR=CD();}
function I1(a,b){RO(a.cR,0,b);}
function Kd(a,b){Wr(a.cR,b);}
function Jb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cR.i-1|0;while(c>=0){d=Bs(a.cR,c);d.R.e_(b);e=d.V;f=d.er.is;if(!L0(e)){if(!Ul(e)&&!(!e.gS&&e.de!==null)){e.gS=0;Rm(e);g=e.d7;h=(g.dE+g.ew+5.0)/10.0;i=Cy(e.g5,e.je);g=b.cG;j=e.d7;k=e.g$;l=h*2.0;CB(g,j);m=i+KT(g,k,l)|0;e.hS=m;m=Ev(0,m,e.r.b);if(m){j=CL(b,m,e.r.a);CB(j,e.d7);g=e.g$;l=i;h=l+h;k=e.d7;n=k.dE;Ci(j,g,h,l+n-(n+k.ew)/16.0);g=e.de;if(g===null){g=CW(b);e.de=g;}CO(g,j);FT(j);Cs(e.lS,0.0,0.0,BM(e.de),C9(e.de));}}g=f.rm;j=e.de;if(j===null)Px(e,b,0,e.r.b,
g);else{i=BM(j);f=f.qs;j=e.G;m=j.b;o=j.a;j=e.de;EJ(b,m,o,j.fH,e.lS,j,f,g,0.0);m=e.r.b;if(i<m)Px(e,b,i,m-i|0,g);}}Ct(b,1);i=Cy(d.bt,2.0);m=L0(d.V);f=d.bt;e=f.cW;f=f.os;p=m?0:d.V.r.a;g=d.R.r;T(f,g.b,g.a+p|0);ADS(b,f,!m?d.V.G:d.R.G,d.er.is.kq, -i|0,e);f=d.R;AC6(b,f.r,f.G,i,p,Rz(d.er.jr,d.bt.bR),d.er.jr.mr,e);c=c+(-1)|0;}}
function ZI(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cR;if(c>=d.i)break;a:{e=Bs(d,c);f=b.h;if(DI(e.V,f))g=DD(e.bt.cF,null);else{g=Cy(e.bt,7.0);h=Cy(e.bt,25.0);if(V6(e,f.b,g)){i=Vd(e,f.b,h);if(PK(e,f.a,g)){g=DD(e.bt.cF,JK(i,B(228)));break a;}if(Qu(e,f.a,g)){g=DD(e.bt.cF,JK( -i|0,B(228)));break a;}}if(M_(e,f.a,g)){h=Se(e,f.a,h);if(Or(e,f.b,g)){g=DD(e.bt.cF,JK(h,B(229)));break a;}if(Ua(e,f.b,g)){g=DD(e.bt.cF,JK( -h|0,B(229)));break a;}}g=0;}}b:{c:{if(!g){if(!DI(e.R,b.h))break c;if(!e.R.bL(b)&&!DD(e.bt.cF,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABD(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cR;if(e>=f.i)break;a:{b:{g=Bs(f,e);if(!DI(g.V,b.h)){if(!DI(g.R,b.h))break b;if(!g.R.cs(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function YF(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cR;if(d>=e.i)return null;a:{f=Bs(e,d);if(!c){b:{e=b.h;if(!L0(f.V)&&DI(f.V,e)){g=f.R.G;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.V.G;i=e.b-i|0;k=e.a-k|0;e=new Bf;g=new QQ;g.o$=f;g.pb=i;g.pc=k;g.pd=e;g.pe=h;g.o_=j;}else{h=Cy(f.bt,7.0);i=Cy(f.bt,25.0);if(V6(f,e.b,h)){j=Vd(f,e.b,i);if(PK(f,e.a,h)){g=Id(f,e,j,(-1));break b;}if(Qu(f,e.a,h)){g=Id(f,e,j,1);break b;}}if(M_(f,e.a,h)){i=Se(f,e.a,i);if(Or(f,e.b,h)){g=Id(f,e,(-1),i);break b;}if(Ua(f,e.b,h)){g=
Id(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DI(f.V,b.h)?AXf:f.R.b_(b,c);e=f.R;if(e===null)g=null;else if(g===null)g=!DI(e,b.h)?null:AXf;}if(g!==null)break;d=d+1|0;}return g;}
function AEL(a,b,c){var d,e,f,g;d=0;while(true){e=a.cR;if(d>=e.i)break;a:{b:{f=Bs(e,d);if(!DI(f.V,b.h)){if(!DI(f.R,b.h))break b;if(!f.R.cO(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function Li(a,b,c,d){var e,f;e=0;while(true){f=a.cR;if(e>=f.i)break;if((Bs(f,e)).R.c0(b,c,d))return 1;e=e+1|0;}return 0;}
function ARy(a,b,c){var d,e,f;d=0;while(true){e=a.cR;if(d>=e.i)break;f=Bs(e,d);e=f.R;e.jj(e.G,e.r,c);e=f.V;if(e.gL!==null){e.d7=null;e.hS=0;e.gS=1;}J9(f);d=d+1|0;}}
function Oz(a,b){var c,d,e;c=0;d=0;while(true){e=a.cR;if(d>=e.i)break;Bs(e,d);c=0|c;d=d+1|0;}return c;}
function Qd(a,b,c){var d;d=0;while(true){b=a.cR;if(d>=b.i)break;Bs(b,d);d=d+1|0;}}
function Y7(){var a=this;C.call(a);a.cH=null;a.ch=null;a.jE=null;a.jv=null;a.hq=null;a.iW=null;}
function M8(a){var b=new Y7();AHb(b,a);return b;}
function AHb(a,b){a.ch=CD();a.iW=AXg;a.cH=b;X(b.d5,a);}
function Ib(a,b,c){a.jE=c;a.hq=b;b=B8(a.ch);while(Cc(b)){Ie(B$(b),a.hq);}}
function Gh(a,b,c,d){var e,f;e=a.cH;f=e.cb;if(V(f.b,f.a)&&e.bR!==0.0){if(a.jE!==null&&!DK(a)){a.iW=d;a.jv=GV(a.cH,a.jE);e=T3(a,b,c,null);b=new Tu;b.ty=a;e.jG=b;FV(a.cH,a);return;}b=new BI;Y(b);K(b);}c=new D1;Bo(c,B(230));K(c);}
function DM(a){var b;if(DK(a)){b=a.cH;if(b.eh===a)b.eh=null;TT(a,null);a.iW.q();a.iW=AXg;}}
function P3(a,b,c,d,e){var f,g,h;f=Zr();S_(f);K1(f,c.dt());Ie(f,a.hq);H8(f,a.jv);G4(f,a.cH);if(d===null)g=b.b;else{g=b.b;g=a.cH.cb.b<((g+(Ed(d)).b|0)+(Ed(f)).b|0)?g-(Ed(f)).b|0:(g+(Ed(d)).b|0)-d.e1|0;}h=b.a;b=a.cH.cb;J4(f,Bb(0,Z(g,b.b-(Ed(f)).b|0)),Bb(0,Z(h,b.a-(Ed(f)).a|0)));b=new NI;b.uk=a;b.um=f;b.ul=e;f.j2=b;B2(a.ch,f);return f;}
function T3(a,b,c,d){return P3(a,b,c,d,null);}
function AHn(a,b,c){var d,e;a.jv=GV(a.cH,a.jE);d=B8(a.ch);while(Cc(d)){e=B$(d);H8(e,a.jv);G4(e,a.cH);}}
function Iv(a){var b,c;if(EF(a.ch))return;Ct(a.cH.cC,1);b=0;while(true){c=a.ch;if(b>=c.i)break;JG(Bs(c,b),a.cH);b=b+1|0;}}
function KB(a,b){var c,d;c=0;d=a.ch.i-1|0;a:{while(d>=0){c=Ko(Bs(a.ch,d),b.h,a.cH.cF);if(c)break a;d=d+(-1)|0;}}return c;}
function Jr(a,b,c,d){var e,f;e=0;f=a.ch.i-1|0;a:{while(f>=0){e=Kg(Bs(a.ch,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jm(a,b,c){var d,e,f;d=null;e=a.ch.i-1|0;a:{while(e>=0){f=Bs(a.ch,e);d=b.h;c=Es(f.ci,d);if(!c&&!Mg(f.ci)){d=f.jG;if(d!==null)d.q();}d=!c?null:AXf;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AFS(a,b){var c;if(!DK(a))return 0;a:{switch(b.bk){case 27:DM(a);c=1;break a;default:}c=0;}return c;}
function AEK(b,c){var d,e,f;d=b.dv;e=c.cT;f=c.e1;b=new Bf;c=d.A;PI(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function TT(a,b){var c,d;c=a.ch.i-1|0;a:{while(true){if(c<0)break a;d=Bs(a.ch,c);if(b===d)break;D7(a.ch,c);TV(d);c=c+(-1)|0;}}}
function DK(a){return a.ch.i<=0?0:1;}
function ABp(){var a=this;C.call(a);a.d0=null;a.ls=0.0;a.g3=0.0;a.gF=0;}
function ANn(){var a=new ABp();AR5(a);return a;}
function AR5(a){var b;b=S6(0,0,2,20);a.d0=b;a.ls=0.5;a.g3=0.0;HI(187,187,187,255,b.bm);}
function S5(a){return a.d0.t.a;}
function Qz(a){return a.d0.t.b;}
function Tn(a,b){var c,d;a:{c=a.gF;if(b>a.g3)while(true){d=a.g3+a.ls;a.g3=d;a.gF=a.gF?0:1;if(b>d)continue;else break a;}}return a.gF==c?0:1;}
function P7(a,b,c){T(a.d0.A,b,c);}
function SN(a,b){a.g3=b+a.ls*1.25;a.gF=1;}
function Vw(a,b,c){if(a.gF)US(a.d0,b,c.b,c.a);}
function Ld(){var a=this;C.call(a);a.mo=null;a.v_=null;a.wl=0.0;a.ph=0;a.ws=0;a.wW=0;a.ri=0;a.xR=0;a.dE=0.0;a.ew=0.0;a.wi=0.0;a.mb=0.0;a.wp=0;a.ni=null;}
function E4(a){return Df(a.dE+a.ew);}
function Ka(a,b){return Df((a.dE+a.ew)*b);}
function IG(){var a=this;C.call(a);a.f$=null;a.f=null;a.jk=null;a.qu=null;}
function ATp(a,b){var c=new IG();AEN(c,a,b);return c;}
function AXh(a,b,c){var d=new IG();QP(d,a,b,c);return d;}
function AEN(a,b,c){QP(a,b,null,c);}
function QP(a,b,c,d){var e,f,g,h,i,j,k;a.f$=d;a.jk=c;if(d===null)c=null;else{c=d.fp;c=c===null?null:!Ef(c,B(231))&&!Ef(c,B(232))&&!Ef(c,B(233))&&!Ef(c,B(234))&&!Ef(c,B(235))&&!Ef(c,B(236))?(Ef(c,B(203))?B(168):!Ef(c,B(237))?null:B(220)):B(221);}e=b.data;a.qu=c;c=new Ki;f=e.length;if(!f)g=M9(B(31));else{g=R(CC,f);h=g.data;i=0;while(i<f){j=new CC;k=R(B6,1);k.data[0]=Sn(e[i]);If(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.en=KX();c.eL=KX();c.gy=CD();if(!b.length){c=new BI;Y(c);K(c);}c.D=g;c.gX=0;c.cE=0;c.dc=On(c);a.f=c;}
function Dn(a){var b;b=a.jk;if(b===null)b=a.qu;return b;}
function G6(a){var b;b=a.f$;return b===null?null:b.h0;}
function Wm(){var a=this;C.call(a);a.nv=null;a.s6=null;a.tu=null;a.oZ=null;a.mU=null;a.rV=null;}
function KZ(a,b,c){return XY(a,Cp(a.nv),b,c);}
function V5(a,b,c){return XY(a,Cp(a.s6),b,c);}
function XY(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.ui(c,d))return g.wD;f=f+1|0;}return null;}
function NH(a,b,c){var d,e,f,g;d=(Cp(a.tu)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.ui(b,c))return g.wL;f=f+1|0;}return null;}
function YK(){var a=this;C.call(a);a.bT=null;a.bK=null;a.c4=0;}
function ANT(){var a=new YK();AF6(a);return a;}
function R0(a){var b=new YK();AFo(b,a);return b;}
function AF6(a){a.bT=new Gq;a.bK=new Gq;}
function AFo(a,b){var c;c=new Gq;a.bT=c;a.bK=new Gq;XK(c,b.bT);XK(a.bK,b.bK);a.c4=b.c4;}
function KP(a,b,c){B0(a.bK,b,c);if(!a.c4)B0(a.bT,b,c);}
function Qn(a,b){B0(a.bT,b,0);B0(a.bK,b+1|0,0);}
function D5(a){if(Ya(a.bT,a.bK)>0)return a.bK;return a.bT;}
function FD(a){if(Ya(a.bT,a.bK)<0)return a.bK;return a.bT;}
function ADi(a,b){var c,d,e,f;c=D5(a);d=FD(a);e=c.N;if(e<=b){f=BF(b,d.N);if(f<=0)return BZ(b<=e?c.bf:0,f>=0?d.bf:(-1));}return null;}
function Dp(a){var b,c;b=a.bT;c=a.bK;return (b===c?1:c!==null&&Cf(b)===Cf(c)?(b.N==c.N&&b.bf==c.bf?1:0):0)?0:1;}
function AAc(a,b){var c,d;if(!Dp(a))return 0;c=D5(a);d=FD(a);return c.N<=b&&b<d.N?1:0;}
function NF(){var a=this;C.call(a);a.eV=null;a.eW=0;a.dj=0;}
function M$(a,b){var c,d,e;c=a.eW;d=a.eV;if(c==d.data.length)a.eV=Dk(d,c+16|0);d=a.eV.data;e=a.eW;a.eW=e+1|0;d[e]=b;}
function XR(a){var b,c,d;b=a.dj;c=a.eW-1|0;if(b==c)a.dj=b-1|0;d=a.eV.data;a.eW=c;d[c]=null;}
function EW(){var a=this;C.call(a);a.bX=0;a.bY=null;a.eG=null;a.dR=0;a.c_=0;}
var AXi=0;var AXj=0;var AXa=0;function AB4(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bY;j=i===b&&!i.ic?0:1;if(j){a.bY=b;Lm(b,e.cG,d);}i=a.bY;k=i===null?0:E2(i)<g?IK(E2(a.bY),1024):IK(g,1024)+1|0;l=k<=a.dR?0:1;if(l)a.dR=k;if(!(!j&&!l)){if(AXi){m=b.fF;$rt_globals.console.info("fMeasure"+m.data);AXi=0;}if(!AXa){i=c.br;b="alphabetic";i.textBaseline=b;}else{b=c.br;i="top";b.textBaseline=i;}a.c_=h/1024|0;while(true){i=a.eG;if(i.i>=a.dR)break;B2(i,CW(e));}k=0;while(k<a.dR){Ia(a,c,f,d,a.c_+k|0);k=k+1|0;}a.bY.ic=0;}if(!EF(a.eG)
&&h<=E2(a.bY)){k=h/1024|0;g=a.c_;if(k!=g){if(MW(k-g|0)>=a.dR){g=0;while(g<a.dR){Ia(a,c,f,d,k+g|0);g=g+1|0;}a.c_=k;}else{while(true){h=a.c_;if(h>=k)break;Ia(a,c,f,d,h+a.dR|0);a.c_=a.c_+1|0;}while(true){h=a.c_;if(h<=k)break;Ia(a,c,f,d,h-1|0);a.c_=a.c_-1|0;}}}}}
function Lk(b,c){return (c-E4(b)|0)/2|0;}
function TR(b,c){return Lk(b,c)+b.ri|0;}
function Ia(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Ew(b);f=a.bY.fF;g=e*1024|0;h=Pf(a,g);if(h>=a.bY.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bX;a:{while(true){l=a.bY;if(h>=l.o.data.length)break a;l=NM(l,h);m=!AXa?TR(d.data[l.cd],c):Lk(d.data[l.cd],c);n=d.data;o=f.data;CB(b,n[l.cd]);Ci(b,l.u,k,m);k=o[h]-j+a.bX;if(k>1024.0)break;h=h+1|0;}}CO(Bs(a.eG,e%a.dR|0),b);}
function ADk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;if(EF(a.eG))return;if(!a.dR)return;if(j>E2(a.bY))return;r=a.bY;s=r.ep;t=r.o;u=j/1024|0;v=Pf(a,j);w= -a.bX|0;x=i;a:{while(true){y=t.data;z=y.length;if(v>=z)break a;ba=v!=(z-1|0)?0:1;if(w>=h)break;bb=s.data;r=Bs(a.eG,u%a.dR|0);bc=y[v];bd=bb[v]+a.bX|0;be=u*1024|0;bf=(bd-be|0)>1024?0:1;bg=u+1|0;bh=bg*1024|0;bi=Z(bh,bd)-j|0;if(bf&&ba)bi=bi+a.bX|0;if((w+bi|0)>h)bi=h-w|0;bj=l!==null?0:1;b:
{if(!bj){bk=!ba?a.bX:2*a.bX|0;z=l.b;bl=l.a;if(!(z<bl&&j<=bl&&(j+bi|0)>(z+bk|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bj){bm=!ba?a.bX:2*a.bX|0;if(j>=l.b&&(j+bi|0)<=(l.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(o&&!p)bo=k.b9.jh;if(bc===m)bo=k.b9.qz;bp=B8(n);d:{e:{while(Cc(bp)){f:{bq=B$(bp);if(bq!==null){if(!bq.cq(bc))break f;else break e;}if(bc===null)break e;}}bj=0;break d;}bj=1;}if(bj)bo=k.b9.oJ;if(q!==null){y=q.lp;if(y===null)z=0;else{y=y.data;z=v>=y.length?0:y[v];}bo=Vu(k.dw,k,z,q.f3);}if(!bn&&!bl){l.a=Z(l.a,
E2(a.bY));bk=j>=l.b?bi:(Z(bd,bh)-l.b|0)-(!ba?a.bX:0)|0;bh=(j+bi|0)<=(l.a+(!ba?a.bX:2*a.bX|0)|0)?0:(Z(bd,bh)-l.a|0)-(!ba?a.bX:0)|0;bm=j-be|0;bl=w+c|0;br=bm;bj=bi-bk|0;Cs(e,br,0.0,bj,x);T(f,bj,i);Iz(a,d,bl,b,f,e,bc,r,g,k,0,bo);bj=bm+bi|0;Cs(e,bj-bh|0,0.0,bh,x);T(f,bh,i);z=bl+bi|0;Iz(a,d,z-bh|0,b,f,e,bc,r,g,k,0,bo);bs=bj-bk|0;bj=bk-bh|0;Cs(e,bs,0.0,bj,x);T(f,bj,i);Iz(a,d,z-bk|0,b,f,e,bc,r,g,k,1,bo);}else{Cs(e,j-be|0,0.0,bi,x);T(f,bi,i);Iz(a,d,w+c|0,b,f,e,bc,r,g,k,bn,bo);}j=j+bi|0;w=w+bi|0;if(!bf){v=v+(-1)|0;u=
bg;}v=v+1|0;}}}
function Iz(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bH!==0.0&&f.bl!==0.0){m=j.u7.data[g.cS];if(k)n=j.b9.k$;else{g=m.nM;if(g===null)g=j.b9.et;if(l===null)l=BN(g);n=l;}g=m.nQ;if(AXj)i=0.0;EJ(b,c,d,e,f,h,g,n,i);return;}return;}}
function Pf(a,b){var c,d,e,f,g,h,i;c=a.bY;d=c.fF;e=0;f=c.o.data.length;g=b;b=BF(e,f);if(b>0){c=new BI;Y(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BF(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function QI(a){a.bY=null;J_(a.eG,new QJ);Hy(a.eG);}
function ACA(a,b,c,d,e,f,g,h,i){var j,k;j=E2(a.bY);if(j)j=j+a.bX|0;if(!j)j=j-a.bX|0;k=Bb( -a.bX|0,j-g|0);if(k>=h)return;T(f,h-k|0,e);Bu(b,c+k|0,d,f,i);}
function AAM(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EW,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B3(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bY===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EW;f.bX=3;f.eG=CD();f.c_=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)QI(o);h=h+1|0;}return g;}
function ADr(){AXa=0;}
function ABQ(){var a=this;C.call(a);a.fc=null;a.cV=null;a.d6=null;a.eH=null;a.hZ=null;a.hY=null;}
function Hu(){var a=new ABQ();AIF(a);return a;}
function AIF(a){a.fc=new Bf;a.cV=new Bf;a.d6=new Bf;a.eH=new Bf;a.hZ=new B1;a.hY=new B1;}
function P5(a){var b;b=a.cV;return !V(b.b,b.a)?0:1;}
function IY(a,b){return F_(b,a.d6,a.eH);}
function Fh(a,b,c,d){var e,f,g,h,i;e=IY(a,b);f=F_(b,a.fc,a.cV);if(!e&&!f)return null;if(!f){if(!d)c.l(XU(a,b.b-a.d6.b|0));else c.l(OQ(a,b.a-a.d6.a|0));}g=!d?a.fc.b+(a.cV.b/2|0)|0:a.fc.a+(a.cV.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new N5;b.tv=a;b.tx=c;b.tw=i;}else{b=new N3;b.qp=a;b.qo=c;b.qq=i;}return b;}
function Gl(a,b,c){if(b!==null&&c!==null){BC(a.hZ,c);BC(a.hY,b);return;}}
function AEv(b,c){var d;d=new Um;d.rp=b;d.mJ=c;return d;}
function OQ(a,b){var c,d,e;c=a.eH.a;d=a.cV.a;e=c-d|0;return AEv(Z(Bb(0,b-(d/2|0)|0),e),e);}
function XU(a,b){var c,d,e;c=a.eH.b;d=a.cV.b;e=c-d|0;return AEv(Z(Bb(0,b-(d/2|0)|0),e),e);}
function IC(a,b,c,d,e,f,g){N9(a,b,c,d,e,f,g,1);}
function MJ(a,b,c,d,e,f,g){N9(a,b,c,d,e,f,g,0);}
function N9(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){T(a.eH,0,0);T(a.cV,0,0);}else{i=Z(g*3|0,d);j=Bb(P1(d,d,e),i);e=e-d|0;i=d-j|0;i=i?P1(b,i,e):0;if(!h){k=a.fc;k.b=i+c|0;k.a=f-g|0;l=a.cV;l.b=j;l.a=g;l=a.d6;l.b=c;l.a=k.a;k=a.eH;k.b=d;k.a=g;}else{k=a.fc;k.b=f-g|0;k.a=i+c|0;l=a.cV;l.b=g;l.a=j;l=a.d6;l.b=k.b;l.a=c;k=a.eH;k.b=g;k.a=d;}}}
function Qh(a,b){F1(a,b);Gj(a,b);}
function F1(a,b){var c;c=a.d6;Bu(b,c.b,c.a,a.eH,a.hZ);}
function Gj(a,b){var c,d;c=a.cV;c.b=c.b-2|0;c.a=c.a-2|0;d=a.fc;Bu(b,d.b+1|0,d.a+1|0,c,a.hY);b=a.cV;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fs(a,b,c){return IY(a,b)&&Hl(c)?1:0;}
function ABR(){var a=this;C.call(a);a.xE=20;a.fd=null;a.eE=null;a.iJ=null;a.kR=0;a.iI=0;a.js=0.0;a.cA=null;a.lQ=null;a.eR=null;a.fx=null;a.fL=0;}
function ACb(){var a=new ABR();ARt(a);return a;}
function ARt(a){a.xE=20;a.fd=new Bf;a.eE=new Bf;a.cA=CD();a.lQ=DX(0);}
function X$(a,b){var c,d,e,f,g;c=a.fL;if(b==c)return;d=a.cA.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bb(0,(c-1|0)/20|0);f=Bb(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){SY(a,b);a.fL=b;}else{if(a.fL>=b)while(true){if(g<f)break a;a.fL=Tt(Bs(a.cA,g%d|0),a.eR,a.fx,a.fL,b,e,a.js);g=g+(-1)|0;}while(f<=g){a.fL=Tt(Bs(a.cA,f%d|0),a.eR,a.fx,a.fL,b,e,a.js);f=f+1|0;}}}}
function Kn(a,b){if(b===null)b=DX(0);a.lQ=b;}
function Yp(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=B8(a.cA);while(Cc(f)){g=B$(f);h=a.fd;i=V(a.cA.i,a.iI);j=a.lQ;k=g.eN.a;l=((g.ji.a-(b%i|0)|0)+i|0)%i|0;m=d.hh;n=b+l|0;o=g.M;n=n/o|0;p=l+k|0;q=BF(p,c);if(q<=0){o=k/o|0;k=0;p=0;q=0;while(p<o){i=n+p|0;if(K8(g,j,q,i,d,m)){i=V((p-k|0)+1|0,g.M);T(g.dT,BM(g.bo),i);Cs(g.d3,0.0,V(k,g.M),BM(g.bo),i);i=q;}else{r=Fy(d,j,q,m);E3(g,e,l+V(k,g.M)|0,h,m.fb,r);T(g.dT,BM(g.bo),g.M);Cs(g.d3,0.0,V(p,g.M),BM(g.bo),g.M);k=p;}p=p+1|0;q=i;}r=Fy(d,j,q,m);E3(g,e,l+V(k,g.M)|
0,h,m.fb,r);}else{if(q>0&&l<c){o=Bb(c-l|0,0);k=g.M;q=o/k|0;if(o%k|0)q=q+1|0;s=0;t=0;u=0;while(t<q){v=n+t|0;if(K8(g,j,u,v,d,m)){o=V((t-s|0)+1|0,g.M);T(g.dT,BM(g.bo),o);Cs(g.d3,0.0,V(s,g.M),BM(g.bo),o);v=u;}else{r=Fy(d,j,u,m);E3(g,e,l+V(s,g.M)|0,h,m.fb,r);T(g.dT,BM(g.bo),g.M);Cs(g.d3,0.0,V(t,g.M),BM(g.bo),g.M);s=t;}t=t+1|0;u=v;}r=Fy(d,j,u,m);E3(g,e,l+V(s,g.M)|0,h,m.fb,r);}if(p>i){n=b/g.M|0;o=Z(p%i|0,c);T(g.dT,BM(g.bo),g.M);k=b%C9(g.bo)|0;l=g.M;k=k/l|0;p=k+(o/l|0)|0;if(o%l|0)p=p+1|0;o=k;s=k;i=n;while(o<p){if(K8(g,
j,i,n+(o-k|0)|0,d,m)){l=V((o-s|0)+1|0,g.M);T(g.dT,BM(g.bo),l);Cs(g.d3,0.0,V(s,g.M),BM(g.bo),l);}else{r=Fy(d,j,i,m);l=s-k|0;q=g.M;E3(g,e,V(l,q)-(b%q|0)|0,h,m.fb,r);i=(n+o|0)-k|0;T(g.dT,BM(g.bo),g.M);Cs(g.d3,0.0,V(o,g.M),BM(g.bo),g.M);s=o;}o=o+1|0;}r=Fy(d,j,i,m);n=s-k|0;o=g.M;E3(g,e,V(n,o)-(b%o|0)|0,h,m.fb,r);}}}}
function J8(a,b,c,d){var e,f,g,h,i,j;e=a.cA.i;while(true){f=a.cA.i;g=V(f,a.iI);if(g>(d+a.kR|0))break;h=BZ(0,g);i=new Nw;g=a.eE.b;f=a.kR;j=a.iJ;i.dT=new Bf;i.d3=new B1;i.ji=h;i.dV=20;i.M=f;i.eN=BZ(g,20*f|0);i.fZ=TR(j,f);if(i.bo===null)i.bo=CW(b);B2(a.cA,i);}if(f==e)return;SY(a,c);}
function SY(a,b){var c,d,e,f,g,h,i,j;c=a.cA;d=c.i;e=V((b/(d*20|0)|0)+1|0,d)*20|0;c=B8(c);while(Cc(c)){f=B$(c);g=a.eR;h=a.js;Ew(g);i=0;while(true){j=f.dV;if(i>=j)break;j=e-V(d,j)|0;if(j<b)j=e;e=j+1|0;Gb(f,g,C7(e),V(f.M,i)+f.fZ|0,h);i=i+1|0;}CO(f.bo,g);}}
function T7(a,b,c,d){var e;a.iJ=b;a.kR=c;e=c*20|0;a.iI=e;b=CH(a.eR,CL(d,a.eE.b,e));a.eR=b;CB(b,a.iJ);Sx(a.eR,2);b=CH(a.fx,CL(d,a.eE.b,c));a.fx=b;CB(b,a.iJ);Sx(a.fx,2);}
function Ob(a){J_(a.cA,new Qv);Hy(a.cA);a.eR=CH(a.eR,null);a.fx=CH(a.fx,null);}
function VR(a,b,c,d,e){Cu(a.fd,b);T(a.eE,c,d);a.js=e;}
var WE=F(0);
var Hx=F(0);
var EQ=F();
function EF(a){return a.i?0:1;}
function HP(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=U5(Ig(Cf(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B8(a);while(Cc(f)){g=b.data;h=e+1|0;g[e]=B$(f);e=h;}return b;}
var Jg=F(0);
function F$(){EQ.call(this);this.cy=0;}
function B8(a){var b;b=new NO;b.gT=a;b.mn=a.cy;b.iK=a.i;b.gi=(-1);return b;}
function QC(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(CI(b,Bs(a,d)))break;d=d+1|0;}return d;}
function AMR(a,b){var c,d;if(!IM(b,Jg))return 0;c=b;if(a.i!=c.i)return 0;d=0;while(d<c.i){if(!CI(Bs(a,d),Bs(c,d)))return 0;d=d+1|0;}return 1;}
var Ly=F(0);
function Zq(){var a=this;F$.call(a);a.cu=null;a.i=0;}
function CD(){var a=new Zq();AJj(a);return a;}
function AJj(a){a.cu=R(C,10);}
function Jp(a,b){var c,d;c=a.cu.data.length;if(c<b){d=c>=1073741823?2147483647:Bb(b,Bb(c*2|0,5));a.cu=Dk(a.cu,d);}}
function Bs(a,b){Je(a,b);return a.cu.data[b];}
function B2(a,b){var c,d;Jp(a,a.i+1|0);c=a.cu.data;d=a.i;a.i=d+1|0;c[d]=b;a.cy=a.cy+1|0;return 1;}
function RO(a,b,c){var d,e,f;Py(a,b);Jp(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.cu.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cu.data[b]=c;a.i=d+1|0;a.cy=a.cy+1|0;}
function D7(a,b){var c,d,e,f;Je(a,b);c=a.cu.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cy=a.cy+1|0;return d;}
function Wr(a,b){var c;c=QC(a,b);if(c<0)return 0;D7(a,c);return 1;}
function Hy(a){ZK(a.cu,0,a.i,null);a.i=0;a.cy=a.cy+1|0;}
function Je(a,b){var c;if(b>=0&&b<a.i)return;c=new BA;Y(c);K(c);}
function Py(a,b){var c;if(b>=0&&b<=a.i)return;c=new BA;Y(c);K(c);}
function J_(a,b){var c;c=0;while(c<a.i){b.l(a.cu.data[c]);c=c+1|0;}}
function Va(){C.call(this);this.yt=null;}
function U_(){C.call(this);this.rC=null;}
function APF(a,b){var c;c=a.rC;E_(c,FR(b,IF(c)));}
function U7(){C.call(this);this.n3=null;}
function ANu(a,b){var c;c=a.n3;In(c,FR(b,QX(c)));}
function U6(){C.call(this);this.tK=null;}
function APB(a){var b,c;b=a.tK;c=b.ig?0:1;b.ig=c;b=new M;O(b);F9(G(b,B(238)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function U9(){C.call(this);this.r1=null;}
function AKq(a){var b,c;b=a.r1;c=b.h6?0:1;b.h6=c;b=new M;O(b);F9(G(b,B(239)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function U8(){C.call(this);this.ol=null;}
function AML(a){var b,c;b=a.ol;c=b.jH^1;b.jH=c;b=new M;O(b);F9(G(b,B(240)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function VA(){C.call(this);this.t8=null;}
function AO0(a){var b,c,d,e,f;b=a.t8;c=(b.dN+3|0)%6|0;b.dN=c;d=b.gE.data;e=d.length;f=0;while(f<e){b=d[f];b.bX=c;b=b.bY;if(b!==null)b.ic=1;f=f+1|0;}}
function Vz(){C.call(this);this.q0=null;}
function AJ3(a){var b;b=a.q0;b.bO=b.bO?0:1;Ob(b.cX);b.cX=ACb();Si(b,b.ba,b.cx,b.ct.bR);}
function VB(){C.call(this);this.nL=null;}
function AFy(a){var b;b=a.nL;b.i2=b.i2?0:1;}
var Fu=F(Ck);
var AW$=null;var AXk=null;var AW_=null;var AXl=null;function AFI(){AFI=Bm(Fu);AMU();}
function ACj(a,b){var c=new Fu();AB7(c,a,b);return c;}
function AB7(a,b,c){AFI();C_(a,b,c);}
function AMU(){var b;AW$=ACj(B(241),0);AXk=ACj(B(242),1);b=ACj(B(243),2);AW_=b;AXl=H(Fu,[AW$,AXk,b]);}
function Kr(){C.call(this);this.xC=null;}
var AWv=null;var AXm=null;function AKO(){AKO=Bm(Kr);ASs();}
function AIC(a){var b=new Kr();YG(b,a);return b;}
function YG(a,b){AKO();a.xC=b;}
function ASs(){AWv=AIC(B(244));AXm=AIC(B(245));}
var UW=F(0);
function Hl(a){return DD(a,null);}
function U1(b){var c;c=new N6;c.n2=b;return c;}
function MT(){C.call(this);this.nK=null;}
function ALT(a){KU(a.nK);}
function MU(){C.call(this);this.q3=null;}
function AKj(a){JY(a.q3);}
var Yi=F(0);
var AXg=null;function ADP(){AXg=new NX;}
function Ki(){var a=this;C.call(a);a.D=null;a.dc=null;a.en=null;a.eL=null;a.gy=null;a.cE=0;a.gX=0;a.pV=0.0;}
function On(a){var b;b=TU(a);return ARz(ADf(Oh(0,b,0),null));}
function B3(a,b){return a.D.data[b];}
function Cz(a){return a.D.data.length;}
function TU(a){return Gd(a,Cz(a));}
function Fm(a,b){return a.D.data[b].U;}
function K_(a,b){var c,d,e,f,g,h,i;c=a.D.data;d=c[b];e=c[b+1|0];f=DQ(LU(d.o,e.o));g=a.D;h=g.data.length;if(b<h&&b>=0){i=R(CC,h-1|0);c=i.data;Rv(g,b,i);c[b]=f;a.D=i;return;}d=new Bq;Y(d);K(d);}
function Pt(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.D.data;if(!(c<d[b].U?0:1)){d=(B3(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.u)){f=L(h.u,g);break a;}g=g-I(h.u)|0;f=f+1|0;}f=0;}EO();h=new Bv;d=BQ(1);d.data[0]=f;Hs(h,d);Fr(a,b,c,1,h);h=a.D.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].u);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].u)==1)h.o=Rv(i,j,R(B6,e-1|0));else{k=d[j];if(c<=0)l=DE(Dj(k.u,1),k.cS,k.cd);else if(c>=(I(k.u)-1|0)){l=new B6;m=k.u;VL(l,Ca(m,0,I(m)-
1|0),k.cS,k.cd);}else{i=BQ(I(k.u)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.u,b);b=b+1|0;}b=n.length;while(c<b){m=k.u;e=c+1|0;n[c]=L(m,e);c=e;}l=DE(F0(i),k.cS,k.cd);}d[j]=l;}h.U=h.U-1|0;Eh(h);}else if(b!=(d.length-1|0)){Fr(a,b,c,1,B(196));K_(a,b);}}
function Yn(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){XG(a.D.data[b],c,e[0]);return;}g=f-1|0;h=IO(a.D.data[b],c);d=a.D;i=Dk(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:I(l[m-1|0].u);JB(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fq(e[m]))j=DQ(R(B6,0));else{j=new CC;l=R(B6,1);l.data[0]=DE(e[m],0,0);If(j,l);}d[b+m|0]=j;m=m+1|0;}JB(h[1],0,0,e[g]);d[b+g|0]=h[1];a.D
=i;}
function Wx(a,b){var c,d,e,f,g,h,i;c=D5(b);d=FD(b);e=c.N;if(e==d.N)return Ca(EM(a.D.data[e]),c.bf,d.bf);f=new M;O(f);b=a.D.data[c.N];e=c.bf;BE(BX(f,Dj(EM(b),e)),10);g=a.D;h=c.N+1|0;e=d.N;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;YT(BX(f,EM(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.D.data[d.N];i=d.bf;BX(f,Ca(EM(b),0,i));return N(f);}}b=new W5;Y(b);K(b);}
function TW(a,b,c){var d;U$(a,b);d=D5(b);Fr(a,d.N,d.bf,1,c);}
function U$(a,b){var c,d,e,f,g,h,i;a:{c=D5(b);d=FD(b);e=c.N;if(e==d.N)FY(a.D.data[e],c.bf,d.bf);else{b=a.D.data[e];FY(b,c.bf,b.U);FY(a.D.data[d.N],0,d.bf);e=c.N+1|0;f=d.N;g=a.D;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(CC,(h-f|0)+e|0);AA5(g,e,f,i);a.D=i;K_(a,c.N);break a;}b=new Bq;Y(b);K(b);}b=new Bq;Y(b);K(b);}}}
function HS(a,b,c){return EU(b,G5(B3(a,b),c));}
function NR(a,b){var c,d,e;c=0;d=0;while(true){e=a.D.data.length;if(c>=e)break;if((d+(B3(a,c)).U|0)>=b)return BZ(c,b-d|0);d=d+((B3(a,c)).U+1|0)|0;c=c+1|0;}return BZ(e,0);}
function Gd(a,b){var c,d,e;c=0;d=a.D.data.length;e=0;while(e<b){c=c+Fm(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Kl(a,b){return Vi(B3(a,b.bz),b.bJ);}
function EH(a){var b,c,d,e,f,g,h,i,j;b=BQ(TU(a));c=b.data;d=a.D.data.length;e=0;f=0;while(e<d){g=a.D.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].u;P0(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Fr(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cE=a.cE+1|0;f=a.gy;g=R(G9,1);h=new G9;h.eY=b;h.fy=c;i=Ma(e,B(196),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BZ(b,c+I(i[0])|0);break a;}k=BZ((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=BZ(b,c);}i=g.data;h.la=k;h.jY=d;h.hb=e;i[0]=h;B2(f,g);JL(a,b,c,d,e);}
function JL(a,b,c,d,e){var f;f=Gd(a,b)+c|0;if(!d)OR(a.dc,f,I(e));else P8(a.dc,f,I(e));}
function TO(a,b){var c,d,e;c=Ma(b.hb,B(196),(-1));if(b.jY){Yn(a,b.eY,b.fy,c);OR(a.dc,Gd(a,b.eY)+b.fy|0,I(b.hb));}else{c=c.data;d=ANT();B0(d.bT,b.eY,b.fy);e=c.length;if(e==1)B0(d.bK,b.eY,b.fy+I(c[0])|0);else B0(d.bK,(b.eY+e|0)-1|0,I(c[e-1|0]));U$(a,d);P8(a.dc,Gd(a,b.eY)+b.fy|0,I(b.hb));}return b.la;}
function PD(a){a.gX=a.cE;}
var EZ=F();
function Mz(){EZ.call(this);this.wD=null;}
function MX(){EZ.call(this);this.wL=null;}
function Qq(){EZ.call(this);this.xS=null;}
var G3=F(0);
var RN=F(0);
function Gq(){var a=this;C.call(a);a.N=0;a.bf=0;}
function B0(a,b,c){a.N=b;a.bf=c;}
function XK(a,b){a.N=b.N;a.bf=b.bf;}
function Ya(a,b){var c;c=BF(a.N,b.N);if(c)return c;return BF(a.bf,b.bf);}
function Jo(){var a=this;C.call(a);a.lw=null;a.mf=null;}
function I$(a){return a.lw.bz;}
function LX(a){return a.lw.bJ;}
var Wz=F(0);
function Tj(){C.call(this);this.hy=null;}
function FN(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.hy));}
function D_(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.hy));}
function AHZ(a){var b,c;b=a.hy.byteLength;c=new M;O(c);G(U(G(c,B(246)),b),B(247));return N(c);}
var UY=F(0);
function Lc(){var a=this;C.call(a);a.gQ=null;a.fh=null;a.l_=null;}
function ACt(a,b){var c=new Lc();AKJ(c,a,b);return c;}
function AS1(a,b,c){var d=new Lc();Od(d,a,b,c);return d;}
function YR(b){var c,d,e,f,g,h,i,j,k;c=new Lc;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=U5(E(D6),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=KN(f[h]);h=h+1|0;}}j=g.data;h=j.length;if(!h)i=R(Bv,0);else{i=R(Bv,h-1|0);g=i.data;h=0;k=g.length;while(h<k){g[h]=FG(JV(j[h]));h=h+1|0;}}}else i=R(Bv,0);Od(c,d,b,i);return c;}
function AKJ(a,b,c){Od(a,b,c,R(Bv,0));}
function Od(a,b,c,d){a.gQ=b;a.fh=c;a.l_=d;}
function JF(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EA(a);e=new M;O(e);G(G(e,B(248)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EA(a){var b;b=a.gQ;return FG(b!==null?b.name:a.fh.name);}
function ALa(a){var b,c,d,e,f;if(a.fh===null){b=a.l_;c=EA(a);d=Z7(b);e=new M;O(e);G(G(G(e,d),B(249)),c);c=N(e);}else{b=a.l_;c=EA(a);f=JF(a,a.fh.size);d=Z7(b);e=new M;O(e);U(G(G(G(G(e,d),B(249)),c),B(250)),f);c=N(e);}return c;}
function N6(){C.call(this);this.n2=null;}
function DD(a,b){Gy(a.n2,b);return 1;}
function ABB(){var a=this;EC.call(a);a.dC=0;a.ca=null;a.c7=0;a.vw=0.0;a.k0=0;}
function KX(){var a=new ABB();AIv(a);return a;}
function AIv(a){var b;b=AEq(16);a.dC=0;a.ca=R(Ij,b);a.vw=0.75;Ve(a);}
function AEq(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Ku(a){var b;if(a.dC>0){a.dC=0;b=a.ca;ZK(b,0,b.data.length,null);a.c7=a.c7+1|0;}}
function Ve(a){a.k0=a.ca.data.length*a.vw|0;}
function N4(a,b){return Tv(a,b)===null?0:1;}
function DP(a,b){var c;c=Tv(a,b);if(c===null)return null;return c.dI;}
function Tv(a,b){var c,d;if(b===null)c=SB(a);else{d=b.jD();c=Qo(a,b,d&(a.ca.data.length-1|0),d);}return c;}
function Qo(a,b,c,d){var e;e=a.ca.data[c];while(e!==null&&!(e.jf==d&&Ze(b,e.dF))){e=e.cQ;}return e;}
function SB(a){var b;b=a.ca.data[0];while(b!==null&&b.dF!==null){b=b.cQ;}return b;}
function Lh(a,b,c){var d,e,f;if(b===null){d=SB(a);if(d===null){a.c7=a.c7+1|0;d=U2(a,null,0,0);e=a.dC+1|0;a.dC=e;if(e>a.k0)Vs(a);}}else{e=b.jD();f=e&(a.ca.data.length-1|0);d=Qo(a,b,f,e);if(d===null){a.c7=a.c7+1|0;d=U2(a,b,f,e);e=a.dC+1|0;a.dC=e;if(e>a.k0)Vs(a);}}b=d.dI;d.dI=c;return b;}
function U2(a,b,c,d){var e,f,g;e=new Ij;f=null;e.dF=b;e.dI=f;e.jf=d;g=a.ca.data;e.cQ=g[c];g[c]=e;return e;}
function Vs(a){var b,c,d,e,f,g,h,i;b=a.ca.data.length;b=AEq(!b?1:b<<1);c=R(Ij,b);d=c.data;e=0;f=b-1|0;while(true){g=a.ca.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.jf&f;i=h.cQ;h.cQ=d[b];d[b]=h;h=i;}e=e+1|0;}a.ca=c;Ve(a);}
function Ze(b,c){return b!==c&&!b.cq(c)?0:1;}
function CC(){var a=this;C.call(a);a.o=null;a.U=0;a.fF=null;a.ep=null;a.dy=null;a.ha=null;a.fY=0;a.ic=0;a.hO=0;}
var AXn=0;var AXo=0;var AXc=0;function DQ(a){var b=new CC();If(b,a);return b;}
function If(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].u)|0;f=f+1|0;}a.U=d;Eh(a);}
function NM(a,b){return a.o.data[b];}
function G5(a,b){var c;c=Ix(a,b);return c<=0?0:a.dy.data[c-1|0];}
function Ix(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.dy!==null&&!a.hO)){WU(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+I(a.o.data[d].u)|0;a.dy.data[d]=e;d=d+1|0;}a.hO=0;}d=Uo(a.dy,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Vi(a,b){var c;c=a.o.data;if(!c.length)return null;return c[Ix(a,b)];}
function FY(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.U){a.o=R(B6,0);Eh(a);a.U=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].u);i=I(a.o.data[f].u);j=BF(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==I(k.u)?1:0){g=a.o;a.o=Rv(g,e,R(B6,g.data.length-1|0));a.U=a.U-d|0;Eh(a);return;}a.o.data[e]=DE(Fe(Ca(k.u,0,b),Dj(k.u,c)),k.cS,k.cd);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
I(l.u))a.o.data[e]=DE(Ca(l.u,0,b),l.cS,l.cd);e=e+1|0;}if(c==I(m.u))f=f+1|0;else if(c)a.o.data[f]=DE(Dj(m.u,c),m.cS,m.cd);g=a.o;a.o=AA5(g,e,f,R(B6,(g.data.length-f|0)+e|0));}a.U=a.U-d|0;Eh(a);}
function IO(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(CC,[DQ(R(B6,0)),a]);if(b>=a.U)return H(CC,[a,DQ(R(B6,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].u);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(CC,[DQ(K6(c,0,R(B6,d))),DQ(K6(c,d,R(B6,f-d|0)))]);h=e[d];e=K6(c,0,R(B6,d+1|0));i=e.data;j=K6(c,d,R(B6,f-d|0));c=j.data;i[d]=DE(Ca(h.u,0,b),h.cS,h.cd);c[0]=DE(Dj(h.u,b),h.cS,h.cd);return H(CC,[DQ(e),DQ(j)]);}
function XG(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=I(f[d].u);if(b<=g)break;b=b-g|0;d=e;}}JB(a,d,b,c);}
function JB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=R(B6,1);h.data[0]=Sn(d);a.o=h;}else if(!b&&!c){i=R(B6,g+1|0);h=i.data;Dw(e,0,i,1,g);h[0]=Sn(d);a.o=i;}else{j=f[b];if(c<=0)k=DE(Fe(d,j.u),j.cS,j.cd);else if(c>=I(j.u))k=DE(Fe(j.u,d),j.cS,j.cd);else{l=I(d);m=l+c|0;n=I(j.u)-c|0;h=BQ(I(j.u)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.u,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.u,g+c|0);g=g+1|0;}k=DE(F0(h),j.cS,j.cd);}f[b]=k;}a.U=a.U+I(d)|0;Eh(a);}
function XH(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<My(f)){if(L(f.u,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lm(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.fF;if(!(e!==null&&e.data.length>=d)){a.fF=AFn(d);a.ep=BG(d);a.fY=1;}WU(a);if(!a.fY)AXo=AXo+1|0;else{f=0;g=0.0;AXn=AXn+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+I(j.u)|0;a.dy.data[h]=f;CB(b,i[j.cd]);g=g+Eq(b,j.u);a.fF.data[h]=g;a.ep.data[h]=g+0.5|0;h=h+1|0;}a.U=f;a.fY=0;a.hO=0;}}
function WU(a){var b;b=a.dy;if(!(b!==null&&b.data.length>=a.o.data.length)){a.dy=BG(a.o.data.length);a.hO=1;}}
function Eh(a){a.fY=1;a.ic=1;a.hO=1;a.ha=null;}
function Xa(a,b,c,d){var e,f,g,h,i,j,k;if(a.ha===null)a.ha=R($rt_arraycls($rt_intcls()),a.o.data.length);e=a.ha.data[d];if(e===null){e=c.data;f=a.o.data[d];CB(b,e[f.cd]);f=f.u;e=BG(I(f)-1|0);c=Gz(f);g=!d?0.0:a.fF.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;ME(f,c,0,k);h[i]=g+Eq(b,f)+0.5|0;i=k;}a.ha.data[d]=e;}return e;}
function G7(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fY&&a.ep!==null))Lm(a,c,d);if(b>=a.U)return a.ep.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+I(g[f].u)|0;i=BF(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.ep.data[f];}return (Xa(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function E2(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.ep.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function G0(a,b){var c;if(b>=a.U)return b+1|0;c=Ix(a,b);return a.dy.data[c];}
function EM(a){var b,c,d,e;b=new M;F2(b,a.U);c=a.o.data;d=c.length;e=0;while(e<d){BX(b,c[e].u);e=e+1|0;}return N(b);}
function M9(b){var c,d,e,f;c=R(CC,1);d=c.data;e=new CC;f=R(B6,1);f.data[0]=Sn(b);If(e,f);d[0]=e;return c;}
function YW(){AXc=0;}
var NX=F();
function AR8(a){}
function B6(){var a=this;C.call(a);a.u=null;a.cS=0;a.cd=0;}
function Sn(a){var b=new B6();AQR(b,a);return b;}
function DE(a,b,c){var d=new B6();VL(d,a,b,c);return d;}
function AQR(a,b){VL(a,b,0,0);}
function VL(a,b,c,d){a.u=b;a.cS=c;a.cd=d;}
function Hp(b,c){return (!b?0:2)+(!c?0:1)|0;}
function My(a){return I(a.u);}
function Nx(){var a=this;C.call(a);a.dB=null;a.el=0;}
var AXp=null;function ARz(a){var b=new Nx();AAi(b,a);return b;}
function AAi(a,b){a.el=0;a.dB=b;}
function Vt(a,b){var c;if(b.e5)return b;b=B8(b.bu);while(true){if(!Cc(b))return null;c=Vt(a,B$(b));if(c!==null)break;}return c;}
function JX(a,b,c){var d,e,f,g;d=b.bZ;if(d.b1==c.b1&&d.b8==c.b8?1:0){d=B8(b.bu);while(Cc(d)){e=JX(a,B$(d),c);if(e!==null)return e;}return b;}b=B8(b.bu);while(true){if(!Cc(b))return null;d=B$(b);f=c.b1;g=c.b8;e=d.bZ;if(e.b1<=f&&g<=e.b8?1:0){e=JX(a,d,c);if(e!==null)break;}}return e;}
function MH(a,b,c){B2(c,b.bZ);b=B8(b.bu);while(Cc(b)){MH(a,B$(b),c);}}
function OR(a,b,c){a.el=0;K3(a,a.dB,b,c);}
function K3(a,b,c,d){var e;if(C5(b)<c)return;a:{if(CY(b)>c){Ml(b,d);GC(b,d);b=B8(b.bu);while(Cc(b)){K3(a,B$(b),c,d);}}else{if(!Lp(b,c)){if(a.el)break a;if(C5(b)!=c)break a;}GC(b,d);if(CY(b)==c&&a.el)Ml(b,d);e=B8(b.bu);while(Cc(e)){K3(a,B$(e),c,d);}if(!a.el){b.e5=1;a.el=1;}}}}
function P8(a,b,c){a.el=0;JP(a,a.dB,b,c);}
function JP(a,b,c,d){var e,f,g,h;if(C5(b)<c)return;e=CY(b);f=c+d|0;if(e>f){e= -d|0;Ml(b,e);GC(b,e);g=B8(b.bu);while(Cc(g)){JP(a,B$(g),c,d);}b.bu=XF(a,b.bu);}else{g=b.bZ;if(c<=g.b1&&g.b8<=f?1:0){if(b!==a.dB){LF(b,(-1));J5(b,(-1));}else{LF(b,0);J5(b,0);}Hy(b.bu);}else{e=Lp(b,c);f=Lp(b,f);if(e&&f)GC(b, -d|0);else if(e)J5(b,c);else{if(!f)return;LF(b,c);GC(b, -d|0);}h=B8(b.bu);while(Cc(h)){JP(a,B$(h),c,d);}b.bu=XF(a,b.bu);if(!a.el){b.e5=1;a.el=1;}}}}
function XF(a,b){var c,d,e,f,g,h,i,j,k,l;c=CD();d=null;e=AXp;f=b.cu;g=b.i;if(e===null)e=AVy;h=R(C,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}AAw(h,e);j=0;while(j<g){f.data[j]=i[j-0|0];j=j+1|0;}b.cy=b.cy+1|0;b=B8(b);while(Cc(b)){l=B$(b);if(CY(l)==C5(l))continue;if(!l.e5){if(d!==null){B2(c,d);d=null;}B2(c,l);}else if(d===null)d=l;else{e=ADf(Oh(Z(CY(d),CY(l)),Bb(C5(d),C5(l)),d.bZ.fw),d.ec);e.e5=1;d=e;}}if(d!==null)B2(c,d);return c;}
function Xr(a,b,c,d){var e,f,g,h,i,j;if((C5(c)-CY(c)|0)<43)e=Ca(d,CY(c),C5(c));else{e=Ca(d,CY(c),CY(c)+20|0);f=Ca(d,C5(c)-20|0,C5(c));g=new M;O(g);G(G(G(g,e),B(169)),f);e=N(g);}e=VD(e,B(196),B(251));f=Bx();g=CA(c);h=new M;O(h);i=U(h,b);BE(i,32);g=G(i,g);BE(g,9);G(g,e);Br(f,N(h));c=B8(c.bu);j=b+1|0;while(Cc(c)){Xr(a,j,B$(c),d);}}
function AB_(){AXp=new OX;}
function AEt(){var a=this;C.call(a);a.b1=0;a.b8=0;a.fw=0;}
function Oh(a,b,c){var d=new AEt();AIB(d,a,b,c);return d;}
function AIB(a,b,c,d){a.b1=b;a.b8=c;a.fw=d;}
function AQc(a,b){var c;if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){c=b;return a.b1==c.b1&&a.b8==c.b8&&a.fw==c.fw?1:0;}return 0;}
function AG8(a,b){var c;b=b;c=BF(a.b1,b.b1);if(!c)c=BF(b.b8,a.b8);return c;}
var OX=F();
function AMp(a,b,c){var d;b=b;c=c;b=b.bZ;c=c.bZ;d=BF(b.b1,c.b1);if(!d)d=BF(c.b8,b.b8);return d;}
function ADy(){var a=this;C.call(a);a.bZ=null;a.ec=null;a.bu=null;a.e5=0;}
function ADf(a,b){var c=new ADy();AHN(c,a,b);return c;}
function AHN(a,b,c){a.e5=0;a.bZ=b;a.ec=c;a.bu=CD();}
function MP(b){var c,d,e,f,g,h,i,j;c=BB(b);d=BB(b);e=BB(b);f=BB(b);g=Oh(c,d,e);h=ADf(g,null);i=0;while(i<f){j=MP(b);j.ec=h;B2(h.bu,j);i=i+1|0;}return h;}
function CY(a){return a.bZ.b1;}
function C5(a){return a.bZ.b8;}
function LF(a,b){a.bZ.b1=b;}
function J5(a,b){a.bZ.b8=b;}
function Ml(a,b){var c;c=a.bZ;c.b1=c.b1+b|0;}
function GC(a,b){var c;c=a.bZ;c.b8=c.b8+b|0;}
function Lp(a,b){return CY(a)<=b&&b<C5(a)?1:0;}
function AKg(a){var b,c,d,e,f;b=a.bZ;c=b.b1;d=b.b8;e=b.fw;b=new M;O(b);BE(b,40);BE(U(G(U(G(U(b,c),B(44)),d),B(44)),e),41);b=N(b);c=a.e5;f=new M;O(f);F9(G(G(f,b),B(44)),c);return N(f);}
function APo(a,b){var c;if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){c=b;return CI(a.bZ,c.bZ)&&CI(a.bu,c.bu)?1:0;}return 0;}
function HZ(){var a=this;C.call(a);a.b9=null;a.W=null;a.u7=null;a.hh=null;a.dw=null;a.pP=null;a.qS=null;a.tn=null;}
function AXq(a,b,c,d,e){var f=new HZ();L1(f,a,b,c,d,e);return f;}
function Kq(){var b,c,d,e,f,g,h,i;b=new HZ;c=new I2;d=new Hf;FQ();JQ(d,AXr);Lv(c,d,BH(AW6),BH(AXs),BH(AXt),BH(AW6),BH(AXu),BH(AXv),BH(AXw),BH(AXx),BH(AXy),BH(AXz));ACf();e=(AXA.eX()).data;f=e.length;g=R(IN,f);h=g.data;i=0;while(i<f){h[i]=e[i].lz;i=i+1|0;}L1(b,c,g,AA7(Q(B(252)),Q(B(253)),Q(B(254)),Q(B(255))),F3(),ADD(Q(B(119)),Q(B(120)),Q(B(121)),Q(B(256))));return b;}
function L1(a,b,c,d,e,f){var g;g=c.data;a.pP=ES(B(156),16.0);a.qS=ES(B(156),17.0);a.tn=ES(B(155),15.0);a.b9=b;a.u7=c;a.hh=d;if(g.length>=15){a.W=e;a.dw=f;return;}b=new BI;Y(b);K(b);}
function I2(){var a=this;C.call(a);a.tC=null;a.et=null;a.vp=null;a.yr=null;a.oG=null;a.k$=null;a.qz=null;a.oJ=null;a.l3=null;a.mm=null;a.jh=null;}
function AXB(a,b,c,d,e,f,g,h,i,j,k){var l=new I2();Lv(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Lv(a,b,c,d,e,f,g,h,i,j,k,l){a.tC=b;a.et=c;a.vp=d;a.yr=e;a.oG=f;a.k$=g;a.qz=h;a.oJ=i;a.l3=j;a.mm=k;a.jh=l;}
function KY(){var a=this;K2.call(a);a.pi=null;a.nY=null;}
function Zn(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.pi;e=0;f=0;g=a.nY;a:{while(true){if((e+32|0)>f&&DO(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Z(B5(b)+j|0,i.length);NL(b,d,j,f-j|0);e=0;}if(!DO(c)){k=!DO(b)&&e>=f?AWm:AWl;break a;}i=g.data;j=Z(B5(c),i.length);l=new NV;l.mX=b;l.qf=c;k=ABS(a,d,e,f,g,0,j,l);e=l.tF;j=l.uW;if(k===null){if(!DO(b)&&e>=f)k=AWm;else if(!DO(c)&&e>=f)k=AWl;}Xo(c,g,0,j);if(k!==null)break;}}EG(b,b.X-(f-e|0)|0);return k;}
var PB=F(KY);
function ABS(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LV(h,2))break a;i=AWl;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Mk(l)){if((f+3|0)>g){j=j+(-1)|0;if(LV(h,3))break a;i=AWl;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CF(l)){i=D2(1);break a;}if
(j>=d){if(DO(h.mX))break a;i=AWm;break a;}c=j+1|0;m=k[j];if(!C6(m)){j=c+(-2)|0;i=D2(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LV(h,4))break a;i=AWl;break a;}k=e.data;o=Eu(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tF=j;h.uW=f;return i;}
var Iy=F(D4);
var XX=F();
function AHM(a,b){return b.text();}
function XV(){var a=this;C.call(a);a.te=null;a.tf=null;}
function AFB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.te;d=a.tf;e=R(Bv,8);f=BQ(16);g=0;h=0;i=b.length;j=0;while(true){k=BF(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=HC(f,0,g);m=h+1|0;e=ADt(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=NS(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.l(ATp(Pq(e,h),AJR(d)));}
var XW=F();
function AJJ(a,b){AEp(b);}
var Hn=F(0);
function KI(){var a=this;C.call(a);a.dF=null;a.dI=null;}
function AH4(a,b){var c,d;if(a===b)return 1;if(!IM(b,Hn))return 0;a:{b:{c:{d:{c=b;b=a.dF;if(b!==null){if(!b.cq(c.dF))break c;else break d;}if(c.dF!==null)break c;}b=a.dI;if(b!==null){if(!b.cq(c.dI))break c;else break b;}if(c.dI===null)break b;}d=0;break a;}d=1;}return d;}
function Ij(){var a=this;KI.call(a);a.jf=0;a.cQ=null;}
function Q6(){var a=this;C.call(a);a.w_=null;a.ro=null;a.f4=null;}
function GL(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.f4.data;f=e.length-1|0;g=f;while(true){if(d>g)return Z(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hC:i.hE;k=!c?i.lf:i.lD;if(j<=k&&k<(j+k|0))return h;j=BF(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function L_(){var a=this;C.call(a);a.hE=0;a.lD=0;a.hC=0;a.lf=0;a.j6=0;}
function ZJ(){var a=this;C.call(a);a.fb=null;a.hv=null;a.o2=null;a.uI=null;}
function AA7(a,b,c,d){var e=new ZJ();AOb(e,a,b,c,d);return e;}
function AOb(a,b,c,d,e){a.fb=b;a.hv=c;a.o2=d;a.uI=e;}
function KE(){var a=this;CS.call(a);a.cM=null;a.gg=null;}
function AUZ(a){var b=new KE();YH(b,a);return b;}
function YH(a,b){var c,d,e,f;Fj(a,b);c=AN9(a.p);a.gg=c;d=AEd(a.p,c);a.cM=d;Xj(a.p,d);X(b.m.bv,a.gg);X(b.m.dl,a.gg);X(b.m.bv,a.cM);c=b.m.b2;d=new Sr;d.oU=a;X(c,d);c=b.m.b2;d=new HO;e=a.cM;BN(e);f=new Sv;f.uF=e;Sy(d,b,f);X(c,d);c=b.m.fI;d=a.cM;BN(d);e=new Su;e.mE=d;X(c,e);c=b.m.f_;d=new St;d.pU=a;X(c,d);c=b.m.dl;d=new Ss;d.vy=a;X(c,d);b=b.m.ez;c=new Sw;c.nr=a;X(b,c);LT(a);}
function AHC(a,b){return K9(a.cM,b);}
function AKt(a){E7(a);Ms(a.cM);WF(a.gg);}
function AOr(a){return Mt(0);}
function AMY(a,b,c){G2(a,b,c);a.lg(b,c);}
function AAx(a,b,c){LR(a.cM,new Bf,b,c);}
function AGt(a,b){BN(b);PZ(a.gg,b);Ln(a.cM,b);}
function AEI(a,b){if(b.bk!=121)return 0;return 1;}
function Zu(a,b){var c,d,e;if(DZ(a.p,a.cM)){c=a.gg;d=a.cM;e=new Tl;e.q5=a;KH(c,b,d,a,d,e);}return 1;}
function Zc(){var a=this;Cw.call(a);a.mi=null;a.lv=null;a.dh=null;a.gD=null;a.fu=null;a.hp=null;a.vO=null;a.hd=null;a.rD=null;a.mk=null;a.v7=null;a.w5=null;a.ga=null;a.j3=null;a.qQ=0;}
function ATc(a){var b=new Zc();ALX(b,a);return b;}
function ALX(a,b){var c,d,e,f,g,h,i;El(a,b);c=(Kq()).b9.et;a.mi=c;a.lv=ARv(c);a.dh=Fg(0,0,300,300);a.gD=S6(0,0,3,3);a.fu=Fg(0,0,300,300);a.hp=ANn();d=R(Bv,4);e=d.data;e[0]=B(207);e[1]=B(190);e[2]=B(229);e[3]=B(228);a.vO=d;a.hd=R(II,e.length);c=b.be;f=b.m.bv;g=new Ue;g.fs=a;X(f,g);f=b.m.b2;g=new R5;g.vA=a;X(f,g);f=b.m.mz;g=new R4;g.oS=a;X(f,g);f=b.m.fI;g=new R7;g.xv=a;X(f,g);f=b.m.jN;g=new R6;g.v1=a;X(f,g);f=b.m.ez;g=new R3;g.w1=a;X(f,g);b=b.m.dl;f=new R2;f.tH=a;X(b,f);h=CL(a.bc.be,300,300);f=h.br;b="white";f.fillStyle
=b;b=h.br;f="white";b.strokeStyle=f;b=h.br;f=10.0;b.lineWidth=f;h.br.strokeRect(75.0,140.0,150.0,110.0);h.br.fillRect(130.0,190.0,40.0,60.0);h.br.beginPath();h.br.moveTo(50.0,140.0);h.br.lineTo(150.0,60.0);h.br.lineTo(250.0,140.0);h.br.closePath();h.br.stroke();F6(h,B(257),11.0);LB(h,187,187,187);PA(a,B(258),h);b=CW(a.bc.be);CO(b,h);FT(h);a.rD=b;Gp(a.dh,b);G$(a.dh);BC(a.dh.bw,a.mi);BC(a.dh.bm,CN(204,120,50));b=CL(c,255,100);a.ga=b;F6(b,B(156),11.0);b=Bx();i=$rt_str(a.ga.br.font);g=new M;O(g);G(G(g,B(259)),i);Br(b,
N(g));Eq(a.ga,B(260));LB(a.ga,169,183,198);PA(a,B(260),a.ga);b=CW(c);a.mk=b;CO(b,a.ga);Gp(a.fu,a.mk);G$(a.fu);Gg(a.fu,CM(255));HF(a.fu,a.mi);a.v7=CW(c);BC(a.gD.bw,a.lv);}
function PA(a,b,c){Ci(c,b,0.0,20.0);Ci(c,b,0.25,40.0);Ci(c,b,0.5,60.0);Ci(c,b,0.75,80.0);}
function Xd(a,b){JA(FA(),0.5+FA()*0.5,0.5+FA()*0.5,1.0,b.bm);}
function AFM(a,b){var c;a.qQ=a.qQ+1|0;c=b/5.0;JA(c-(c|0),1.0,1.0,1.0,a.gD.bm);return Tn(a.hp,b);}
function AIS(a){var b,c,d,e,f,g;b=a.bc.be;Fw(b,a.lv);c=a.hd.data;d=c.length;e=0;while(e<d){US(c[e],b,0,0);e=e+1|0;}DF(a.dh,b,a.rD,0,0,0.5);f=a.mk;d=0;while(d<7){g=a.fu;DF(g,b,f,V(d,10+((10*g.t.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.w5;if(g!==null)Ux(a.gD,b,g,0,0,0.0);Vw(a.hp,b,new Bf);N7(b,B(261));}
function APw(a,b,c){var d,e,f,g,h,i,j,k,l;d=Bx();e=CA(b);f=new M;O(f);G(G(f,B(262)),e);Br(d,N(f));g=Bx();d=new M;O(d);Fl(G(d,B(263)),c);Br(g,N(d));h=B7(30.0,c);i=B7(10.0,c);j=0;while(true){k=a.hd.data;if(j>=k.length)break;l=1+j|0;k[j]=S6(V(i,l)+V(h,j)|0,h,h,h);Xd(a,a.hd.data[j]);j=l;}T(a.gD.A,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dh;g=d.A;h=b.b;d=d.t;T(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.fu;d.A.a=b.a-d.t.a|0;}
function Pd(a,b){var c,d,e,f,g;c=Bx();d=!b.hG?B(264):B(265);e=b.dS;f=b.bk;g=b.r8;b=new M;O(b);F9(G(U(G(G(G(b,d),e),B(266)),f),B(267)),g);Br(c,N(b));return 0;}
function WC(){var a=this;CS.call(a);a.rO=null;a.dH=null;a.cL=null;a.eg=null;a.lM=null;}
function AQ1(a,b,c){var d;d=GV(a.p,a.lM);H8(a.dH,d);H8(a.cL,d);G4(a.dH,a.p);G4(a.cL,a.p);}
function NT(b){return I8(b,AQs());}
function I8(b,c){var d;d=P$();KD(d,KW(b,IB(c,25)),!b?null:I8(b-1|0,c));KD(d,KW(b,IB(c,20)),!b?null:I8(b-1|0,c));KD(d,KW(b,IB(c,15)),!b?null:I8(b-1|0,c));KD(d,KW(b,IB(c,10)),!b?null:I8(b-1|0,c));return Hv(d);}
function KW(b,c){var d;if(b){d=new M;O(d);G(G(U(d,b),B(36)),c);c=N(d);}return c;}
function KD(b,c,d){var e,f;e=new GD;f=JA(FA(),1.0,1.0,1.0,new B1);Yg();Ht(e,f,AXC,AXD);if(d!==null)GP(b,c,e,d);else{d=new UG;d.tJ=c;D8(b,c,e,d);}}
function AIk(a,b,c){var d,e;G2(a,b,c);b=a.p.cb;d=Ed(a.dH);e=Ed(a.cL);J4(a.dH,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);J4(a.cL,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AI7(a){var b,c,d,e,f,g,h,i;E7(a);b=a.bc.be;Ct(b,1);c=a.rO;d=a.p;e=d.cb;T(c.l9,e.b,B7(2.0,d.bR));T(c.ks,B7(2.0,d.bR),e.a);FQ();f=AXy;g=d.cC;h=e.a/2|0;i=c.l9;Bu(g,0,h-(i.a/2|0)|0,i,f);g=d.cC;h=e.b/2|0;c=c.ks;Bu(g,h-(c.b/2|0)|0,0,c,f);JG(a.dH,a.p);JG(a.cL,a.p);Iv(a.eg);Ct(b,0);}
function AON(a,b){var c,d,e;c=KB(a.eg,b);d=Ko(a.dH,b.h,a.p.cF);e=Ko(a.cL,b.h,a.p.cF);return !c&&!d&&!e?0:1;}
function AJd(a,b,c){return Jm(a.eg,b,c);}
function AGW(a,b,c){return DK(a.eg);}
function AN6(a,b,c,d){var e,f,g;e=Jr(a.eg,b,c,d);f=Kg(a.dH,b.h,c,d);g=Kg(a.cL,b.h,c,d);return !e&&!f&&!g?0:1;}
function XS(){var a=this;CS.call(a);a.hs=null;a.ey=null;a.ih=null;a.kS=null;}
function AJg(a,b,c){if(b===0.0)X_(a);}
function AOp(a){var b;E7(a);b=a.bc.be;Jb(a.ey,b);Iv(a.hs);}
function X_(a){var b,c,d,e,f,g,h;b=a.ih;if(b!==null){Kd(a.ey,b);J2(b);}b=(Kq()).W;c=AUO(a.p,new Wi);d=ES(B(155),14.0);e=AN_();f=0;while(f<300){g=C7(f);h=new YB;h.sw=B(268);h.sv=g;h.su=B(269);Nn(e,B(268),g,B(269),h);f=f+1|0;}Wn(c,Rc(e));Yc(c,b,d);g=AB8(a.p);h=ZO(c,a.p);QV(h,b.l8,b.kw);LZ(g,h);g.er=b;IL(g,B(270),a.kS,2.0);a.ih=g;I1(a.ey,g);UU(a);}
function AHx(a,b,c){G2(a,b,c);Qd(a.ey,b,c);UU(a);}
function UU(a){var b,c,d;b=a.p.cb;Fo(a.ih,BZ((b.b*2|0)/10|0,(b.a*4|0)/10|0),BZ((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.ih;b=YE(c.R.r);d=new M;O(d);G(G(d,B(271)),b);IL(c,N(d),a.kS,2.0);}
function APD(a,b){return Oz(a.ey,b);}
function Yx(){var a=this;CS.call(a);a.id=null;a.fS=null;a.fj=null;a.jF=null;a.o5=null;a.iC=null;a.f0=null;a.fO=null;a.jz=0;a.gb=0;}
function W8(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fS.i>0){d=FA();e=a.fS;f=d*(e.i-1|0)|0;e=D7(e,f);D7(a.fj,f);f=a.gb;g=e.t;a.gb=f-V(g.b,g.a)|0;Io(a.id,e.c9);}c=c+1|0;}}
function Kz(a,b){var c,d,e,f,g,h,i,j;c=IR(a.p);CB(c,a.jF);d=0;while(d<b){e=IB(a.iC,1+(FA()*19.0|0)|0);f=AMa();g=f.c9;h=a.id;BN(c);i=new RK;i.pl=c;BC(g,Ho(h,e,i));(Xl(FA(),1.0,1.0,f.bw)).bH=0.5;h=f.A;g=f.c9;T(h,g.bn|0,g.bG|0);h=f.t;g=f.c9;T(h,g.bl|0,g.bH|0);B2(a.fj,e);B2(a.fS,f);j=a.gb;h=f.t;a.gb=j+V(h.b,h.a)|0;d=d+1|0;}a.fO=Mo(a.id);}
function AOY(a){var b,c,d,e,f,g,h,i;E7(a);b=a.bc.be;Ct(b,1);c=a.p.cC;if(a.fj.i){d=a.fO;d=CL(c,d.b,d.a);CB(d,a.jF);e=a.jF.dE;Bu(c,0,0,a.fO,a.o5);f=0;while(f<a.fj.i){g=Bs(a.fS,f);h=Bs(a.fj,f);g=g.c9;Ci(d,h,g.bn,g.bG+e);f=f+1|0;}g=a.f0;if(!(g!==null&&BM(g)==a.fO.b&&C9(a.f0)==a.fO.a))a.f0=CH(a.f0,CW(c));CO(a.f0,d);FT(d);i=0;while(i<a.fj.i){d=Bs(a.fS,i);Gg(d,CM(0));DF(d,c,a.f0,0,0,0.0);i=i+1|0;}}Ct(b,0);}
function AHX(a,b){var c,d;if(a.jz){c=a.fO;d=Z(V(c.b,c.a),2211840);if(a.gb/d<=0.7)Kz(a,Iq(a.iC,5));else W8(a,Iq(a.iC,5));}return a.jz;}
function Ps(){var a=this;Cw.call(a);a.eb=null;a.f7=null;a.g1=null;a.k6=null;a.ea=0;a.sk=0;a.uN=null;a.l$=0;a.u3=0;a.tj=null;a.oW=null;}
function AF4(a){var b,c;b=a.ea;c=new M;O(c);U(G(c,B(272)),b);$rt_globals.console.info($rt_ustr(N(c)));Fw(a.eb,a.uN);IC(a.g1,a.ea,0,Ge(a),5000,a.k6.b,20);Ct(a.eb,1);Qh(a.g1,a.eb);Ct(a.eb,0);b=a.ea;c=new M;O(c);U(G(c,B(272)),b);$rt_globals.console.info($rt_ustr(N(c)));X$(a.f7,a.ea/a.l$|0);Yp(a.f7,a.ea,Ge(a),a.oW,a.eb);}
function AQJ(a,b,c){a.k6=b;VR(a.f7,BZ(0,0),50,Ge(a),c);J8(a.f7,a.eb,0,Ge(a));}
function P9(a){return 5000-Ge(a)|0;}
function Ge(a){return Z(a.sk,a.k6.a);}
function Db(){var a=this;Cw.call(a);a.lW=null;a.gK=null;a.v3=0.0;}
function AXE(a){var b=new Db();Gs(b,a);return b;}
function Gs(a,b){El(a,b);a.lW=Z8(0,0,64);a.gK=new Bf;NN(b.bS,H_(Cf(a)));}
function SC(a){Fw(a.bc.be,a.lW);}
function S$(a,b,c){Cu(a.gK,b);a.v3=c;}
var Rl=F(Db);
var AEB=F(Db);
function AUB(a){var b=new AEB();AND(b,a);return b;}
function AND(a,b){var c,d,e,f,g,h;Gs(a,b);c=b.bS;d=new RJ;d.wv=a;e=R(C,1);e.data[0]=B(273);CQ(c,d,B(274),e);f=b.bS;g=new RI;g.yn=a;h=R(C,1);h.data[0]=ABj([1,2,3,4,5]);CQ(f,g,B(275),h);f=b.bS;g=new RH;g.oP=a;h=R(C,1);h.data[0]=ATT([1,2,3,4,5]);CQ(f,g,B(276),h);f=b.bS;g=new RG;g.we=a;h=R(C,1);h.data[0]=E8([1,2,3,4,5]);CQ(f,g,B(277),h);f=b.m.b2;d=new HO;g=new RE;g.xi=a;c=new RD;c.qB=a;VS(d,b,g,c);X(f,d);}
function UV(a,b){var c,d,e,f,g,h;c=b.data;d=Bx();e=CA(c[0]);f=new M;O(f);G(G(f,B(278)),e);Br(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((Sj(b,1)).hy));d=Bx();e=CA(c[1]);if(b===null)f=B(29);else{f=new M;O(f);BX(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BX(f,B(44));U(f,c[g]);g=g+1|0;}BX(f,B(45));f=N(f);}h=new M;O(h);G(G(G(G(h,B(279)),e),B(280)),f);Br(d,N(h));}
function Xg(){var a=this;Db.call(a);a.dX=null;a.e7=null;a.kG=null;a.p1=null;a.lL=null;}
function ALt(a,b){b=b/5.0;JA(b-(b|0),1.0,1.0,1.0,a.e7.bm);return 0;}
function AFF(a){SC(a);DF(a.dX,a.bc.be,a.p1,0,0,0.5);Ux(a.e7,a.bc.be,a.kG,0,0,0.0);N7(a.bc.be,B(261));}
function AOn(a,b,c){var d,e,f;S$(a,b,c);T(a.e7.A,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dX;e=d.A;f=b.b;d=d.t;T(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function SF(){var a=this;Db.call(a);a.gs=null;a.r0=null;a.kg=null;a.iE=null;a.hL=null;}
function ASd(a){var b,c,d,e,f,g;SC(a);b=a.bc.be;c=a.iE;LL(b,c.b,c.a,a.hL);b=a.gs;c=a.r0;d=a.gK;e=a.bc.be;f=0;while(true){g=0;while(true){DF(b,e,c,g,f,0.5);g=g+BM(c)|0;if(g>=d.b)break;}f=f+C9(c)|0;if(f>=d.a)break;}FJ(a.bc.be);}
function AHo(a,b,c){S$(a,b,c);T(a.hL,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function O3(){var a=this;Cw.call(a);a.ek=null;a.j_=null;a.fr=null;a.b7=null;a.eP=0;a.hV=null;a.eQ=0;a.w2=20;a.yF=11;a.wH=220;a.jq=null;a.xm=5000;a.gN=0;a.fE=null;}
function ASg(a){var b,c,d,e,f,g,h;b=a.hV;c=a.eQ;d=a.jq;IC(b,c,0,d.a,5000,d.b,20);Ct(a.ek,1);Qh(a.hV,a.ek);if(a.b7===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ci(a.j_,C7(e),0.0,c);}b=CW(a.ek);a.b7=b;CO(b,a.j_);}if(a.eQ<=a.eP)while(true){f=a.eP;if(f<=a.eQ)break;a.eP=f-20|0;b=a.fr;g=a.gN-1|0;a.gN=g;Ci(b,C7(g),0.0,20.0);H5(a.b7,a.fr,0,a.eP%220|0);Ew(a.fr);}else while(a.eP<(a.eQ-20|0)){b=a.fr;g=a.gN+1|0;a.gN=g;Ci(b,C7((g+11|0)-1|0),0.0,20.0);H5(a.b7,a.fr,0,a.eP%220|0);Ew(a.fr);a.eP=a.eP+20|0;}b=Fg(0,0,BM(a.b7),C9(a.b7));HK(b,
0,0,BM(a.b7),C9(a.b7));Gg(b,a.fE.data[0]);HF(b,a.fE.data[1]);DF(b,a.ek,a.b7,400,0,1.0);g=a.eQ%220|0;f=Z(C9(a.b7)-g|0,200);d=Fg(0,0,BM(a.b7),f);HK(d,0,g,BM(a.b7),f);Gg(d,a.fE.data[0]);HF(d,a.fE.data[1]);DF(d,a.ek,a.b7,0,0,1.0);h=Fg(0,f,BM(a.b7),(C9(a.b7)-f|0)-20|0);HK(h,0,0,BM(a.b7),(C9(a.b7)-f|0)-20|0);Gg(h,a.fE.data[1]);HF(h,a.fE.data[0]);DF(h,a.ek,a.b7,0,0,1.0);}
function AJB(a,b,c){Cu(a.jq,b);}
function AH3(a,b){return 0;}
function Sc(a){return 5000-a.jq.a|0;}
function ID(){Db.call(this);this.dJ=0;}
function RA(a){var b,c;b=a.bc.bS;c=new Qx;c.m2=a;Rb(b,c,RX(a));}
function MR(a){var b,c,d,e;b=a.dJ+1|0;a.dJ=b;c=H_(E(ID));d=new M;O(d);G(G(U(G(d,B(281)),b),B(36)),c);e=N(d);c=a.bc.bS;d=new UA;d.qh=e;UL(c,e,d,RX(a));}
function RX(a){var b;b=new Wa;b.o1=a;return b;}
function APq(a,b,c,d){a:{switch(c){case 0:break;case 2:MR(a);break a;default:break a;}RA(a);}return 1;}
function Qp(){var a=this;Cw.call(a);a.nI=null;a.fl=null;a.lN=null;a.ie=null;}
function AR9(a){var b;b=a.bc.be;Fw(b,a.nI);DF(a.fl,b,a.lN,0,0,0.5);}
function AMu(a,b,c){var d,e,f;d=a.fl;e=d.A;f=b.b;d=d.t;T(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Ga(){var a=this;Cw.call(a);a.oq=null;a.b$=null;a.dL=null;a.cY=null;a.eD=null;a.d9=null;}
function Xi(a,b){var c,d;El(a,b);a.oq=CM(20);a.b$=SE();a.dL=new Bf;a.cY=new Bf;a.eD=new Bf;a.d9=new Bf;c=b.m.b2;d=new Qy;d.x8=a;X(c,d);X(b.m.bv,a);b=a.b$.bw;FQ();BC(b,AW6);BC(a.b$.bm,AW7);}
function AAY(a){var b,c,d;b=a.bc.be;Fw(b,a.oq);c=a.b$;d=c.A;Bu(b,d.b,d.a,c.t,c.bw);Ct(b,1);c=a.b$;d=c.A;YD(b,d.b,d.a,c.t,a.dL,a.cY,a.eD,a.d9,c.bm);Ct(b,0);}
function AMe(a,b){return 0;}
var O_=F(Ga);
function AM6(a,b,c){var d,e,f;d=a.b$;e=d.A;f=b.b;d=d.t;T(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);T(a.dL,0,0);T(a.cY,Z(b.b,b.a),Z(b.b,b.a));b=a.eD;d=a.dL;T(b,d.b,d.a+20|0);b=a.d9;d=a.cY;T(b,d.b,d.a+40|0);}
function AIt(a,b){var c,d,e;Cu(a.dL,b.h);b=a.cY;c=a.b$;d=c.A;e=d.b;c=c.t;T(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.eD;c=a.dL;T(b,c.b,c.a+20|0);b=a.d9;c=a.cY;T(b,c.b,c.a+40|0);return 0;}
function Pa(){var a=this;Ga.call(a);a.fq=null;a.fk=null;}
function AKp(a,b){var c;c=a.cY;b=b.h;c.a=b.a-50|0;a.d9.a=b.a+100|0;return 1;}
function AGX(a){var b,c,d,e,f,g,h;b=Bb(a.dL.b,a.eD.b);c=Z(a.cY.b,a.d9.b);d=Z(a.dL.a,a.cY.a)-50|0;e=Bb(a.eD.a,a.d9.a)+50|0;Gk(a.b$,b,d,c-b|0,e-d|0);AAY(a);f=a.b$.A.b-10|0;W6(a,a.bc.be,10,f,a.dL,a.eD);g=a.b$;h=g.A.b+g.t.b|0;W6(a,a.bc.be,h,f,a.cY,a.d9);}
function W6(a,b,c,d,e,f){var g;T(a.fq,c,a.b$.A.a);T(a.fk,d,e.a-a.b$.A.a|0);g=a.fq;Bu(b,g.b,g.a,a.fk,a.b$.bw);T(a.fq,c,e.a);T(a.fk,d,f.a-e.a|0);e=a.fq;Bu(b,e.b,e.a,a.fk,a.b$.bm);T(a.fq,c,f.a);e=a.fk;g=a.b$;T(e,d,(g.A.a+g.t.a|0)-f.a|0);e=a.fq;Bu(b,e.b,e.a,a.fk,a.b$.bw);}
function ALz(a,b,c){}
function WT(){var a=this;CS.call(a);a.gU=null;a.ed=null;a.jw=null;a.jx=null;a.ti=null;}
function AKB(a,b,c){if(b===0.0)N0(a);}
function ASw(a){var b;E7(a);b=a.bc.be;Jb(a.ed,b);Iv(a.gU);}
function N0(a){W7(a,a.jw);W7(a,a.jx);a.jw=Nh(a,0.5,0,B(282));a.jx=Nh(a,1.0,1,B(283));I1(a.ed,a.jw);I1(a.ed,a.jx);Xv(a);}
function W7(a,b){if(b!==null){Kd(a.ed,b);J2(b);}}
function Nh(a,b,c,d){var e,f,g;e=AB8(a.p);f=new Wq;g=new PL;g.tl=a;g.tm=e;g.tk=d;Uc(f);f.h8=new B1;f.ly=new Bf;f.st=g;f.qe=b;if(c)f=ZO(f,a.p);LZ(e,f);e.er=F3();return e;}
function AOF(a,b,c){G2(a,b,c);Qd(a.ed,b,c);Xv(a);}
function Xv(a){var b;b=a.p.cb;Fo(a.jx,BZ((b.b*2|0)/10|0,(b.a*2|0)/10|0),BZ((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fo(a.jw,BZ(b.b/10|0,b.a/10|0),BZ((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function ALo(a,b){return Oz(a.ed,b);}
var RF=F(KE);
function AKH(a){return Mt(1);}
function AMx(a,b,c){AAx(a,b,c);}
var ACG=F(0);
function H$(){var a=this;C.call(a);a.jr=null;a.is=null;a.nO=null;a.p8=null;a.bj=null;a.l8=null;a.kw=null;}
function AXF(a,b,c,d,e,f,g){var h=new H$();La(h,a,b,c,d,e,f,g);return h;}
function La(a,b,c,d,e,f,g,h){a.nO=b;a.p8=c;a.is=d;a.bj=e;a.jr=f;a.l8=g;a.kw=h;}
function F3(){var b,c,d;b=new H$;c=new HH;Yg();d=AXG;J0(c,d,AXH,AXI,AXJ,AXK,d);La(b,c,ABZ(),Zz(Q(B(284)),Q(B(117)),Q(B(118))),ABZ(),ZR(1,0.125),AXL,AXM);return b;}
function ADA(){var a=this;C.call(a);a.nk=null;a.s9=null;a.rJ=null;a.qF=null;}
function ADD(a,b,c,d){var e=new ADA();AKF(e,a,b,c,d);return e;}
function AKF(a,b,c,d,e){a.nk=b;a.s9=c;a.rJ=d;a.qF=e;}
function Vu(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dw.s9;break a;case 3:if(c!=3){b=b.dw.qF;break a;}b=b.dw.rJ;break a;default:b=b.b9.et;break a;}b=b.dw.nk;}return b;}
function HG(a,b,c){return Vu(a,b,0,c);}
function MC(){var a=this;C.call(a);a.jc=null;a.iB=null;}
function MN(a,b){var c;c=a.iB;a.iB=b;return c;}
function Ju(){var a=this;MC.call(a);a.bQ=null;a.b4=null;a.fD=0;a.fM=0;}
function JN(a){var b;b=K4(a);if(b==2){if(K4(a.b4)<0)a.b4=Nq(a.b4);return O0(a);}if(b!=(-2))return a;if(K4(a.bQ)>0)a.bQ=O0(a.bQ);return Nq(a);}
function K4(a){var b,c;b=a.b4;c=b===null?0:b.fD;b=a.bQ;return c-(b===null?0:b.fD)|0;}
function Nq(a){var b;b=a.bQ;a.bQ=b.b4;b.b4=a;Ek(a);Ek(b);return b;}
function O0(a){var b;b=a.b4;a.b4=b.bQ;b.bQ=a;Ek(a);Ek(b);return b;}
function Ek(a){var b,c,d;b=a.b4;c=b===null?0:b.fD;b=a.bQ;d=b===null?0:b.fD;a.fD=Bb(c,d)+1|0;a.fM=1;b=a.bQ;if(b!==null)a.fM=1+b.fM|0;b=a.b4;if(b!==null)a.fM=a.fM+b.fM|0;}
var AEh=F();
function AGL(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Pm;c=c.buffer;d.fC=c;d.ms=new $rt_globals.Int8Array(c);d.ka=new $rt_globals.Uint16Array(c);d.sR=new $rt_globals.Int32Array(c);d.pD=new $rt_globals.Float32Array(c);d.pW=new $rt_globals.Float64Array(c);e=d.fC.byteLength;c=new M;O(c);U(G(c,B(285)),e);CG(N(c));e=b.callToCpp1();c=new M;O(c);U(G(c,B(286)),e);CG(N(c));f=b.callToCpp2();c=new M;O(c);Fl(G(c,B(287)),f);CG(N(c));c=Nc(d,b.getC8String());g=new M;O(g);G(G(g,B(288)),c);CG(N(g));c
=Nk(d,b.getC16String());g=new M;O(g);G(G(g,B(289)),c);CG(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.fC,h,8));c=ACX(i);g=new M;O(g);G(G(g,B(290)),c);CG(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.fC,h,8));c=APN(j);g=new M;O(g);G(G(g,B(291)),c);CG(N(g));k=AA1(d,b.getCDoubleArray8(),8);l=ASy(k);c=new M;O(c);G(G(c,B(292)),l);CG(DU(c));l=ASm(b.getC8String(),B(293),d);c=L2();G(G(c,B(294)),l);CG(DU(c));l=AMk(b.getC16String(),B(295),
d);c=L2();G(G(c,B(296)),l);CG(DU(c));c=AOi(i,d,b.getCIntArray8(),E8([11,22,33,44,55,66,77,88]));g=L2();G(G(g,B(297)),c);CG(DU(g));c=AP4(j,d,b.getCFloatArray8(),100,E8([111,222,333,444,555,666,777,888]));g=L2();G(G(g,B(298)),c);CG(DU(g));b=AQk(k,d,b.getCDoubleArray8(),1000,E8([1111,2222,3333,4444,5555,6666,7777,8888]));c=L2();G(G(c,B(299)),b);CG(DU(c));}
function AP4(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(300);h=0;i=e;a:{while(h<g){if(Df(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.pD[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(301);}return B(302);}
function AQk(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(300);h=0;i=e;a:{while(h<g){if(Hm(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.pW[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(301);}return B(302);}
function AOi(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(300);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.sR[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(301);}return B(302);}
function ASm(b,c,d){var e,f,g,h;e=Nc(d,b);if(!Bn(c,e))return B(303);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.ms[h])return B(304);f=f+1|0;}return B(301);}
function AMk(b,c,d){var e,f,g,h;e=Nk(d,b);if(!Bn(c,e))return B(303);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.ka[h>>>1|0]&65535))return B(304);f=f+1|0;}return B(301);}
function CG(b){Pj(B(2),b);}
function ALb(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Sr(){C.call(this);this.oU=null;}
function AMH(a,b){return AEI(a.oU,b);}
function Sv(){C.call(this);this.uF=null;}
function ARP(a,b){KO(a.uF,b);}
function Su(){C.call(this);this.mE=null;}
function AMI(a,b,c){return GI(a.mE,b,c);}
function St(){C.call(this);this.pU=null;}
function ARx(a){var b,c;b=a.pU.cM;BN(b);c=new QW;c.nJ=b;return c;}
function Ss(){C.call(this);this.vy=null;}
function AQV(a,b,c,d){return JI(a.vy.cM,c,d);}
function Sw(){C.call(this);this.nr=null;}
function AJN(a,b){b=b;return Zu(a.nr,b);}
function ADK(){II.call(this);this.c9=null;}
function AMa(){var a=new ADK();AGG(a);return a;}
function Fg(a,b,c,d){var e=new ADK();AL_(e,a,b,c,d);return e;}
function AGG(a){SA(a);a.c9=new B1;}
function AL_(a,b,c,d,e){SA(a);a.c9=new B1;Gk(a,b,c,d,e);}
function G$(a){var b,c;b=a.t;c=a.c9;T(b,c.bl-c.bn|0,c.bH-c.bG|0);}
function Gp(a,b){HK(a,0,0,BM(b),C9(b));}
function HK(a,b,c,d,e){Cs(a.c9,b,c,d,e);}
function DF(a,b,c,d,e,f){var g;g=a.A;EJ(b,g.b+d|0,g.a+e|0,a.t,a.c9,c,a.bm,a.bw,f);}
function Gg(a,b){BC(a.bm,b);}
function HF(a,b){BC(a.bw,b);}
function Ue(){C.call(this);this.fs=null;}
function AOy(a,b){var c,d,e,f,g,h,i;c=a.fs;d=c.j3;if(d!==null){e=c.dh.A;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.j3=g;}d=b.h;f=d.b;c=c.gD;e=c.t;h=f-e.b|0;f=d.a-e.a|0;T(c.A,h,f);c=a.fs;d=c.bc.bS;b=b.h;f=0;a:{while(true){i=c.hd.data;if(f>=i.length)break;if(Es(i[f],b)){b=c.vO.data[f];break a;}f=f+1|0;}b=null;}Gy(d,b);return 1;}
function AQa(a,b,c,d){if(!c&&d==2){b=a.fs;Xd(b,b.dh);}return 1;}
function AIP(a,b,c){var d,e;d=Bx();e=new M;O(e);U(G(e,B(305)),c);Br(d,N(e));if(!c){d=b.h;b=a.fs;b.j3=!Es(b.dh,d)?null:d;P7(a.fs.hp,d.b,d.a);b=a.fs;SN(b.hp,Jv(b.bc.bS));}return AXf;}
function AIp(a,b,c){var d;b=Bx();d=new M;O(d);U(G(d,B(306)),c);Br(b,N(d));return 1;}
function R5(){C.call(this);this.vA=null;}
function AOs(a,b){return Pd(a.vA,b);}
function R4(){C.call(this);this.oS=null;}
function AQ8(a,b){return Pd(a.oS,b);}
function R7(){C.call(this);this.xv=null;}
function ARG(a,b,c){var d,e;Br(Bx(),B(307));d=!c?B(308):B(28);e=new M;O(e);G(G(G(e,B(309)),d),B(310));WI(b,N(e));return 1;}
function R6(){C.call(this);this.v1=null;}
function ARE(a){Br(Bx(),B(311));}
function R3(){C.call(this);this.w1=null;}
function AMO(a,b){Br(Bx(),B(312));return 1;}
function R2(){C.call(this);this.tH=null;}
function AKo(a,b,c,d){var e,f,g;b=a.tH;e=( -d|0)/10|0;b=b.dh;f=b.t;f.b=f.b+e|0;f.a=f.a+e|0;b=b.A;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function Hf(){var a=this;B1.call(a);a.go=0;a.gr=0;a.gp=0;a.gq=0;}
function CM(a){var b=new Hf();ASb(b,a);return b;}
function CN(a,b,c){var d=new Hf();AIh(d,a,b,c);return d;}
function Q(a){var b=new Hf();AP7(b,a);return b;}
function Fx(a,b,c,d){var e=new Hf();QU(e,a,b,c,d);return e;}
function BH(a){var b=new Hf();JQ(b,a);return b;}
function ASb(a,b){QU(a,b,b,b,255);}
function AIh(a,b,c,d){QU(a,b,c,d,255);}
function AP7(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.go=I4(L(b,1))*17|0;a.gr=I4(L(b,2))*17|0;a.gp=I4(L(b,3))*17|0;a.gq=255;}else{a.go=LK(L(b,1),L(b,2));a.gr=LK(L(b,3),L(b,4));a.gp=LK(L(b,5),L(b,6));a.gq=I(b)!=9?255:LK(L(b,7),L(b,8));}HI(a.go,a.gr,a.gp,a.gq,a);return;}}
function QU(a,b,c,d,e){a.go=b;a.gr=c;a.gp=d;a.gq=e;HI(b,c,d,e,a);}
function JQ(a,b){a.go=b.go;a.gr=b.gr;a.gp=b.gp;a.gq=b.gq;BC(a,b);}
function I4(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LK(b,c){return (16*I4(b)|0)+I4(c)|0;}
function Vn(){var a=this;C.call(a);a.l9=null;a.ks=null;}
function Z5(){var a=this;C.call(a);a.fv=null;a.ci=null;a.ev=null;a.gt=null;a.lG=null;a.cf=null;a.fT=null;a.cT=0;a.e1=0;a.lZ=0;a.g9=0;a.fV=0;a.jG=null;a.j2=null;a.tp=null;}
function Zr(){var a=new Z5();ARH(a);return a;}
function ARH(a){a.ci=SE();a.ev=new Bf;a.gt=new Bf;a.cf=AXN;a.g9=(-1);}
function K1(a,b){T9(a);a.cf=b;}
function H8(a,b){a.fv=b;T9(a);}
function Ie(a,b){var c,d,e,f,g;a.lG=b.jr;c=b.bj.hN;BC(a.ci.bm,c);c=b.is.kq;BC(a.ci.bw,c);d=0;while(true){e=a.cf.data;if(d>=e.length)break;c=e[d];f=b.bj;c.jK=f;c=c.dv;g=f.lx;f=f.hN;BC(c.bm,g);BC(c.bw,f);d=d+1|0;}}
function TV(a){a.fT=CH(a.fT,null);T(a.ev,0,0);a.cf=AXN;a.g9=(-1);Tr(a.ci);}
function G4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=IR(b);d=b.bR;BN(a.fv);CB(c,a.fv);e=Ka(a.fv,1.25);f=0;a.cT=B7(2.0,d);a.e1=B7(3.0,d);a.lZ=B7(12.0,d);g=0;h=a.cf.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Ra(c,l.kI);n=a.lZ;n=(n+m|0)+n|0;f=Bb(f,n);b=l.dv;l=b.A;l.b=g;l.a=0;l=b.t;l.b=n;l.a=e;Cs(b.c9,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.ev;b.b=g;b.a=e;b=a.ci.t;n=a.fV;if(!n){m=a.cT;m=(g+m|0)+V(m,a.cf.data.length)|0;}else m=(f+(a.cT*2|0)|0)+(a.e1*2|0)|0;b.b=m;if(!n)e=e+(a.cT*2|0)|0;else{n=a.cT;e=(V(e+n|0,a.cf.data.length)
+n|0)+(a.e1*2|0)|0;}b.a=e;}
function J4(a,b,c){var d,e,f,g,h,i,j;T(a.ci.A,b,c);d=a.cT+a.e1|0;e=a.cf.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dv;j=i.A;j.b=b+d|0;j.a=c+h|0;if(!a.fV){if(!i.t.b)AET();d=d+(i.t.b+a.cT|0)|0;}else{if(!i.t.a)AET();h=h+(i.t.a+a.cT|0)|0;}g=g+1|0;}}
function AET(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ed(a){var b,c;b=a.ev;if(b.b&&b.a)return a.ci.t;c=new Bq;Bo(c,B(313));K(c);}
function T9(a){T(a.ev,0,0);}
function JG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cC;if(!a.cf.data.length)return;a:{if(a.fT!==null){d=a.ev;if(V(d.b,d.a))break a;}d=a.ev;if(!V(d.b,d.a))G4(a,b);d=a.ev;e=d.b;f=d.a;if(!V(e,f))return;d=CL(c,e,f);CB(d,a.fv);g=Ka(a.fv,0.125);h=a.fv;i=h.dE;j=g+i-(i+h.ew)/16.0;k=a.cf.data;f=k.length;l=0;while(l<f){h=k[l];Ci(d,h.kI,h.dv.c9.bn+a.lZ,j);l=l+1|0;}h=CH(a.fT,CW(c));a.fT=h;CO(h,d);FT(d);}if(!Mg(a.ci)){d=a.ci;ADS(c,d.t,d.A,d.bw,a.cT,a.gt);d=a.ci;h=d.t;m=d.A;d=d.bm;e=a.cT;n=a.gt;n.b=(h.b-e|0)-e|0;n.a=(h.a-
e|0)-e|0;Bu(c,m.b+e|0,m.a+e|0,n,d);if(a.fV){d=a.ci;AC6(c,d.t,d.A,0,0,Rz(a.lG,b.bR),a.lG.mr,a.gt);}}k=a.cf.data;l=k.length;o=0;while(o<l){DF(k[o].dv,c,a.fT,0,0,0.0);o=o+1|0;}b:{if(a.fV){k=a.cf.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dv;m=a.gt;e=(a.ci.t.b-(a.cT*2|0)|0)-(a.e1*2|0)|0;b=h.t;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.A;Bu(c,d.b+b.b|0,d.a,m,h.bw);}o=o+1|0;}}}}
function Ko(a,b,c){var d,e,f,g,h,i;d=Es(a.ci,b);e=!d?(-1):Vp(a,b);f=a.g9;if(f!=e){if(f>=0){g=a.cf.data[f];NZ(g,0);if(a.tp!==null){f=a.g9;h=Bx();g=CA(g);i=new M;O(i);G(G(U(G(i,B(314)),f),B(315)),g);Br(h,N(i));}}if(e>=0){h=a.cf.data[e];g=a.j2;if(g!==null)g.n4(b,e,h);NZ(h,1);}a.g9=e;}return d&&Hl(c)?1:0;}
function Kg(a,b,c,d){var e,f;e=Vp(a,b);if(e>=0){f=a.cf.data[e];if(!MO(f))f.my.q();}return 1;}
function Vp(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cf.data;if(c>=d.length)return (-1);e=d[c].dv;if(Es(e,b))return c;if(a.fV){f=e.A;g=f.b;e=e.t;h=e.b;g=g+h|0;i=f.a;f=a.gt;f.b=(a.ci.t.b-(a.cT*2|0)|0)-h|0;f.a=e.a;if(ZD(b,g,i,f))break;}c=c+1|0;}return c;}
function S_(a){a.fV=1;}
function TH(){C.call(this);this.tO=null;}
function AOX(a,b){var c;c=a.tO;if(b.bk==32)TV(c.cL);return 0;}
function TK(){C.call(this);this.sr=null;}
function AFq(a,b){var c,d,e,f;b=b;c=a.sr;Br(Bx(),B(316));if(!DK(c.eg)){d=c.eg;b=b.h;e=NT(4);f=new VM;f.yI=c;Gh(d,b,e,f);}return 1;}
function AEy(){var a=this;C.call(a);a.iO=null;a.h3=0.0;}
function ES(a,b){var c=new AEy();AFg(c,a,b);return c;}
function AFg(a,b,c){a.iO=b;a.h3=c;}
function ASF(a,b){if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){b=b;return a.h3===b.h3&&CI(a.iO,b.iO)?1:0;}return 0;}
var TJ=F();
function AJ7(a){Br(Bx(),B(317));}
var TG=F();
function AQn(a){Br(Bx(),B(318));}
function C$(){var a=this;C.call(a);a.dv=null;a.my=null;a.jK=null;a.it=null;a.j1=null;a.kI=null;}
function ACk(a,b,c){var d=new C$();Lb(d,a,b,c);return d;}
function AUC(a,b,c,d,e){var f=new C$();ABT(f,a,b,c,d,e);return f;}
function Lb(a,b,c,d){ABT(a,b,c,d,null,null);}
function ABT(a,b,c,d,e,f){var g;g=AMa();a.dv=g;a.kI=c;a.jK=d;a.j1=f;a.my=b;BC(g.bm,d.lx);BC(a.dv.bw,d.hN);a.it=e;}
function MO(a){return a.it===null?0:1;}
function NZ(a,b){BC(a.dv.bw,!b?a.jK.hN:a.jK.pY);}
function OT(){C.call(this);this.v2=null;}
function AHm(a,b){return b.hG&&b.bk==32?1:0;}
function OU(){C.call(this);this.qJ=null;}
function AQF(a,b){var c,d,e,f,g,h;b=b;c=a.qJ;if(!DK(c.hs)){d=c.hs;b=b.h;e=R(C$,1);f=e.data;g=new C$;h=new VN;h.pL=c;Lb(g,h,B(319),d.hq.bj);f[0]=g;Gh(d,b,FX(e),AXg);}return 1;}
var ACz=F();
function AAJ(b){var c,d;c=CL(b,250,64);F6(c,B(257),25.0);LB(c,187,187,187);Ci(c,B(320),0.0,24.0);Ci(c,B(320),0.25,56.0);d=CW(b);CO(d,c);FT(c);return d;}
function Zp(b){var c;c=new Wo;c.gP=b;return c;}
function OV(){C.call(this);this.t5=null;}
function ANC(a,b,c,d){return Li(a.t5,b,c,d);}
function AEj(){var a=this;C.call(a);a.lV=0;a.lX=0;}
function AQs(){var a=new AEj();ARg(a);return a;}
function ARg(a){var b,c;b=AD6(EE((AC1())));c=EE((AC1()))^(-559038737);a.lV=b;a.lX=c;c=0;while(c<19){R8(a);c=c+1|0;}}
function R8(a){var b,c;b=a.lV;c=a.lX;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.lV=c;a.lX=b;return b;}
function AD6(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function Iq(a,b){return 5.960464477539063E-8*(R8(a)&16777215)*b|0;}
function Us(){C.call(this);this.mV=null;}
function ANg(a,b,c){var d;d=a.mV;if(b===0.0)Kz(d,100);}
function Ut(){C.call(this);this.qD=null;}
function AFv(a,b){var c,d,e;c=a.qD;d=b.bk;if(d==32){c.jz=c.jz?0:1;e=1;}else if(d==13){Kz(c,1);e=1;}else if(d!=8)e=0;else{W8(c,1);e=1;}return e;}
var NE=F(0);
function AE0(b,c){var d;d=new VK;d.vB=b;d.vC=c;return d;}
function ADH(){var a=this;C.call(a);a.fU=null;a.gd=0;a.iX=0;a.gc=0;}
function AEw(a){var b=new ADH();AJi(b,a);return b;}
function AJi(a,b){a.fU=CD();a.gc=0;a.iX=2048;a.gd=b;}
function Ho(a,b,c){var d,e,f,g,h,i,j;d=c.rf(b);e=a.iX;if(d>e){c=new Bq;f=new M;O(f);BE(U(G(U(G(f,B(321)),d),B(322)),e),41);Bo(c,N(f));K(c);}if(!a.gd){b=new BI;Bo(b,B(323));K(b);}a:{b=new B1;if(d){b:{c=a.fU;if(c.i>0){c=B8(c);g=d;while(true){if(!Cc(c))break b;f=B$(c);if(f.bl>=g)break;}Cs(b,f.bn,f.bG,g,a.gd);f.bn=f.bn+g;h=f.bl-g;f.bl=h;if(h===0.0)Wr(a.fU,f);break a;}}g=a.gc;i=d;Cs(b,0.0,g,i,a.gd);c=a.fU;f=new B1;h=a.gc;g=a.iX-d|0;j=a.gd;f.bn=i;f.bG=h;f.bl=g;f.bH=j;B2(c,f);a.gc=a.gc+a.gd|0;}}return b;}
function Io(a,b){var c,d,e,f,g,h,i;a:{c=ARv(b);b=a.fU;if(b.i>0){d=B8(b);while(true){if(!Cc(d))break a;e=B$(d);if(e.bG===c.bG){f=e.bn;g=e.bl;h=f+g;i=c.bn;if(h===i){c.bn=f;c.bl=c.bl+g;Q_(d);}else{h=c.bl;if(i+h===f){c.bl=h+g;Q_(d);}}}}}}B2(a.fU,c);}
function Mo(a){return BZ(a.iX,a.gc);}
function WS(){var a=this;C.call(a);a.rw=null;a.i1=null;}
function AHg(a,b,c){if(c)return AXf;return Fh(a.i1.g1,b.h,a.rw,1);}
function AOI(a,b,c){return 1;}
function AIJ(a,b){var c;c=a.i1;return Fs(c.g1,b.h,c.tj);}
function Td(){C.call(this);this.oe=null;}
function AH2(a,b,c,d){var e,f;b=a.oe;e=(MW(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ea=Z(Bb(0,b.ea+V(e,f)|0),P9(b));return 1;}
function Qm(){C.call(this);this.uQ=null;}
function APt(a,b){var c,d,e;c=a.uQ;if(b.ck&&b.bk==79){if(!b.bI){b=c.bc.bS;d=new SH;d.uZ=c;L4(b,d);}else{b=c.bc.bS;d=new SG;d.xg=c;Wu(b,d);}e=1;}else e=0;return e;}
function RJ(){C.call(this);this.wv=null;}
function AFZ(a,b){var c,d,e,f;c=b.data;b=Bx();d=CA(c[0]);e=new M;O(e);G(G(e,B(278)),d);Br(b,N(e));b=Bx();f=c[1];d=new M;O(d);G(G(d,B(324)),f);Br(b,N(d));}
function RI(){C.call(this);this.yn=null;}
function ASl(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bx();e=CA(c[0]);f=new M;O(f);G(G(f,B(278)),e);Br(d,N(f));g=FN(Sj(b,1));b=Bx();d=CA(c[1]);if(g===null)c=B(29);else{c=new M;O(c);BX(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BX(c,B(44));BE(c,i[h]);h=h+1|0;}BX(c,B(45));c=N(c);}e=new M;O(e);G(G(G(G(e,B(325)),d),B(326)),c);Br(b,N(e));}
function RH(){C.call(this);this.oP=null;}
function AIm(a,b){UV(a.oP,b);}
function RG(){C.call(this);this.we=null;}
function ANw(a,b){var c,d,e,f,g;c=b.data;d=Bx();e=CA(c[0]);f=new M;O(f);G(G(f,B(278)),e);Br(d,N(f));g=D_(Sj(b,1));b=Bx();d=CA(c[1]);c=ACX(g);e=new M;O(e);G(G(G(G(e,B(327)),d),B(328)),c);Br(b,N(e));}
function RE(){C.call(this);this.xi=null;}
function AMC(a,b){var c,d;c=EX();b=CA(b);d=new M;O(d);G(G(d,B(329)),b);Br(c,N(d));b=new Gm;Y(b);K(b);}
function RD(){C.call(this);this.qB=null;}
function AOG(a,b){var c,d,e,f;c=a.qB;d=c.bc.bS;e=new Om;e.rH=c;f=R(C,1);f.data[0]=b;CQ(d,e,B(330),f);}
function Ud(){C.call(this);this.ll=null;}
function AQH(a,b){var c,d,e,f,g,h;c=a.ll;d=c.lL;if(d!==null){e=c.dX.A;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.lL=g;}b=b.h;f=b.b;c=c.e7;d=c.t;f=f-d.b|0;h=b.a-d.a|0;T(c.A,f,h);return 1;}
function AMG(a,b,c){var d;if(!c){d=b.h;b=a.ll;if(!Es(b.dX,d))d=null;b.lL=d;}return AXf;}
var C1=F(0);
var AXr=null;var AW7=null;var AXs=null;var AW6=null;var AXu=null;var AXt=null;var AXw=null;var AXv=null;var AXy=null;var AXx=null;var AXz=null;function FQ(){FQ=Bm(C1);AJD();}
function AJD(){AXr=CM(187);AW7=Q(B(331));AXs=CM(55);AW6=CM(43);AXu=CN(33,66,131);AXt=CN(60,63,65);AXw=Q(B(332));AXv=Q(B(333));AXy=Fx(85,85,85,128);AXx=Fx(43,43,43,0);AXz=Q(B(255));}
function UC(){var a=this;C.call(a);a.qg=null;a.jA=null;}
function ANL(a,b,c){var d;if(!c){d=Fh(a.jA.hV,b.h,a.qg,1);if(d!==null)return d;}return AXf;}
function AHi(a,b,c){return 1;}
function AF_(a,b){var c;c=a.jA;return Fs(c.hV,b.h,U1(c.bc.bS));}
function N_(){C.call(this);this.t9=null;}
function AF3(a,b,c,d){var e,f;b=a.t9;e=(MW(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eQ=Z(Bb(0,b.eQ+V(e,f)|0),Sc(b));return 1;}
function SS(){C.call(this);this.r9=null;}
function AQM(a,b){var c,d;a:{c=a.r9;switch(b.bk){case 67:MR(c);d=1;break a;case 86:RA(c);d=1;break a;default:}d=0;}return d;}
var SR=F();
function AIK(a,b,c){return 0;}
function SP(){C.call(this);this.pN=null;}
function AQb(a,b,c){var d,e;d=a.pN;c=d.dJ+1|0;d.dJ=c;d=H_(E(ID));e=new M;O(e);G(G(U(e,c),B(334)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));WI(b,e);return 1;}
var SO=F();
function AN5(a){return null;}
function SQ(){C.call(this);this.nz=null;}
function AG$(a){var b,c;b=a.nz;c=new Qc;c.sf=b;return c;}
function Sl(){C.call(this);this.ya=null;}
function AIR(a,b){return 0;}
function QM(){C.call(this);this.x9=null;}
function AJo(a,b){return b.hG&&b.bk==32?1:0;}
function QN(){C.call(this);this.qM=null;}
function AFw(a,b){var c,d,e,f,g,h;b=b;c=a.qM;if(!DK(c.gU)){d=c.gU;b=b.h;e=R(C$,1);f=e.data;g=new C$;h=new RQ;h.m1=c;Lb(g,h,B(319),d.hq.bj);f[0]=g;Gh(d,b,FX(e),AXg);}return 1;}
function QO(){C.call(this);this.r_=null;}
function AO6(a,b,c,d){return Li(a.r_,b,c,d);}
function ABr(){var a=this;C.call(a);a.h0=null;a.li=null;a.fp=null;a.yE=null;}
function AJR(a){var b=new ABr();AQL(b,a);return b;}
function AUW(a,b,c,d){var e=new ABr();ABX(e,a,b,c,d);return e;}
function AQL(a,b){ABX(a,null,null,b,null);}
function ABX(a,b,c,d,e){a.h0=b;a.li=c;a.fp=d;a.yE=e;}
function ARj(a,b){var c;if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){c=b;return CI(a.h0,c.h0)&&CI(a.li,c.li)&&CI(a.fp,c.fp)?1:0;}return 0;}
var CZ=F(0);
var AWw=null;var AXO=null;var AWy=null;var AWx=null;var AWA=null;var AWz=null;var AWC=null;var AWB=null;var AWE=null;var AWD=null;var AWF=null;function ANm(){ANm=Bm(CZ);AMn();}
function AMn(){AWw=CM(206);AXO=Q(B(335));AWy=Q(B(336));AWx=Q(B(113));AWA=Q(B(337));AWz=Q(B(338));AWC=Q(B(339));AWB=Q(B(340));AWE=Fx(107,106,107,128);AWD=Fx(30,31,34,0);AWF=Q(B(115));}
function Cb(){Ck.call(this);this.kO=null;}
var AXP=null;var AXQ=null;var AXR=null;var AXS=null;var AXT=null;var AXU=null;var AXV=null;var AXW=null;var AXX=null;var AXY=null;var AXZ=null;var AX0=null;var AX1=null;var AX2=null;var AX3=null;var AWG=null;function ABM(){ABM=Bm(Cb);AGU();}
function Dy(a,b,c){var d=new Cb();XI(d,a,b,c);return d;}
function ATo(a,b,c,d){var e=new Cb();QS(e,a,b,c,d);return e;}
function XI(a,b,c,d){ABM();C_(a,b,c);a.kO=It(d,null);}
function QS(a,b,c,d,e){ABM();C_(a,b,c);a.kO=It(d,e);}
function AGU(){var b,c;b=new Cb;ANm();XI(b,B(341),0,AXO);AXP=b;AXQ=Dy(B(342),1,Q(B(343)));AXR=Dy(B(344),2,Q(B(345)));AXS=Dy(B(48),3,Q(B(346)));AXT=Dy(B(347),4,AXO);AXU=Dy(B(348),5,Q(B(349)));AXV=Dy(B(350),6,Q(B(351)));AXW=Dy(B(49),7,Q(B(352)));AXX=Dy(B(353),8,Q(B(354)));c=new Cb;FQ();QS(c,B(355),9,AW7,Q(B(339)));AXY=c;AXZ=ATo(B(356),10,AW7,Q(B(116)));AX0=Dy(B(357),11,Q(B(358)));AX1=Dy(B(359),12,Q(B(360)));AX2=Dy(B(361),13,AXO);b=Dy(B(362),14,Q(B(363)));AX3=b;AWG=H(Cb,[AXP,AXQ,AXR,AXS,AXT,AXU,AXV,AXW,AXX,AXY,
AXZ,AX0,AX1,AX2,b]);}
function IN(){var a=this;C.call(a);a.nQ=null;a.nM=null;}
function It(a,b){var c=new IN();ALP(c,a,b);return c;}
function ALP(a,b,c){a.nQ=b;a.nM=c;}
function HH(){var a=this;C.call(a);a.vK=null;a.pM=null;a.u1=null;a.r7=null;a.qt=null;a.jm=null;}
function AX4(a,b,c,d,e,f){var g=new HH();J0(g,a,b,c,d,e,f);return g;}
function J0(a,b,c,d,e,f,g){a.vK=b;a.pM=c;a.u1=d;a.r7=e;a.qt=f;a.jm=g;}
function ADd(){var a=this;C.call(a);a.kq=null;a.rm=null;a.qs=null;}
function Zz(a,b,c){var d=new ADd();AOL(d,a,b,c);return d;}
function AOL(a,b,c,d){a.kq=b;a.rm=c;a.qs=d;}
function GD(){var a=this;C.call(a);a.lx=null;a.hN=null;a.pY=null;}
function AX5(a,b,c){var d=new GD();Ht(d,a,b,c);return d;}
function Ht(a,b,c,d){a.lx=b;a.hN=c;a.pY=d;}
function ABZ(){var b,c;b=new GD;c=Q(B(364));Yg();Ht(b,c,AXC,AXD);return b;}
function AAX(){var b,c;b=new GD;c=Q(B(118));AKc();Ht(b,c,AX6,AX7);return b;}
function Zh(){var b,c;b=new GD;AB5();c=AX8;AO$();Ht(b,c,AX9,AX$);return b;}
function AE6(){var a=this;C.call(a);a.mr=null;a.rE=0;}
function ZR(a,b){var c=new AE6();AR4(c,a,b);return c;}
function AR4(a,b,c){var d;d=new B1;a.mr=d;a.rE=b;d.bH=c;}
function Rz(a,b){return B7(a.rE,b);}
var DT=F(0);
var AWK=null;var AWL=null;var AWH=null;var AWI=null;var AWJ=null;var AX6=null;var AX7=null;var AWM=null;var AWN=null;function AKc(){AKc=Bm(DT);ANx();}
function ANx(){AWK=Q(B(338));AWL=Q(B(365));AWH=Q(B(118));AWI=Q(B(351));AWJ=Q(B(335));AX6=Q(B(338));AX7=Q(B(366));AWM=Q(B(367));AWN=CN(43,45,48);}
var O1=F(0);
var Pk=F();
function AJu(a,b,c){var d,e;d=b;e=c;b=new M;O(b);U(G(U(G(b,B(368)),d),B(369)),e);CG(N(b));return d+e|0;}
var O2=F(0);
var Pi=F();
function AKG(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fl(G(Fl(G(b,B(370)),d),B(369)),e);CG(N(b));return d+e;}
var ZY=F();
var Y2=F(0);
function Jt(){var a=this;C.call(a);a.d$=null;a.e6=null;a.fH=null;}
var AV_=0;function ACR(a){var b;b=a.e6;if(b!==null){AV_=AV_-1|0;a.d$.dx.deleteTexture(b);a.e6=null;}}
function BM(a){return a.fH.b;}
function C9(a){return a.fH.a;}
function T6(a,b,c,d){var e;e=a.fH;e.b=b;e.a=c;Mb(a);a.d$.dx.texStorage2D(3553,1,d,b,c);e=a.d$.dx;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Mb(a){var b,c;b=a.d$.dx;c=a.e6;b.bindTexture(3553,c);}
function CO(a,b){Nt(a,b.lY,b.k7,32856);P2(a,b,0,0);}
function Nt(a,b,c,d){var e,f,g,h;a:{e=a.fH;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){Mb(a);break a;}e=a.d$.dx;h=a.e6;e.deleteTexture(h);a.e6=a.d$.dx.createTexture();T6(a,b,c,d);break a;}}T6(a,b,c,d);}}
function H5(a,b,c,d){Mb(a);P2(a,b,c,d);}
function P2(a,b,c,d){var e;e=a.d$.dx;b=b.jU;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function T$(){C.call(this);this.kp=null;}
var AXN=null;function P$(){var a=new T$();ABf(a);return a;}
function ABf(a){a.kp=CD();}
function D8(a,b,c,d){PO(a,ACk(d,b,c));}
function D9(b,c,d){return ACk(d,b,c);}
function GP(a,b,c,d){JE(a,b,c,d,null);}
function JE(a,b,c,d,e){PO(a,AUC(null,b,c,d,e));}
function PO(a,b){B2(a.kp,b);}
function Hv(a){return FX(HP(a.kp,AXN));}
function YV(){AXN=R(C$,0);}
var DS=F(0);
var AXJ=null;var AXK=null;var AXG=null;var AXH=null;var AXI=null;var AXC=null;var AXD=null;var AXL=null;var AXM=null;function Yg(){Yg=Bm(DS);AP8();}
function AP8(){AXJ=Q(B(371));AXK=Q(B(372));AXG=Q(B(364));AXH=Q(B(373));AXI=Q(B(331));AXC=Q(B(371));AXD=Q(B(372));AXL=Fx(118,121,122,128);AXM=CN(63,66,68);}
var Gu=F(0);
var Xz=F();
function APk(a,b,c,d){var e;b=Bx();d=CA(d);e=new M;O(e);G(G(U(G(e,B(374)),c),B(315)),d);Br(b,N(e));}
var XA=F();
function Wo(){C.call(this);this.gP=null;}
function AFC(a,b){return KB(a.gP,b);}
function APm(a,b,c,d){return Jr(a.gP,b,c,d);}
function ANk(a,b,c){return Jm(a.gP,b,c);}
function AKP(a,b,c){return DK(a.gP);}
function Yw(){C.call(this);this.r5=null;}
function AOJ(a,b){var c;c=a.r5.i1;c.ea=FR(b,P9(c));}
var AB2=F();
function PT(){C.call(this);this.nt=null;}
function AKX(a,b){var c;c=a.nt.jA;c.eQ=FR(b,Sc(c));}
function Qy(){C.call(this);this.x8=null;}
function AK2(a,b){return 0;}
function RS(){C.call(this);this.mL=null;}
function AFG(a,b){return DD(a.mL,null);}
var AAa=F();
function Cj(){Ck.call(this);this.lz=null;}
var AX_=null;var AYa=null;var AYb=null;var AYc=null;var AYd=null;var AYe=null;var AYf=null;var AYg=null;var AYh=null;var AYi=null;var AYj=null;var AYk=null;var AYl=null;var AYm=null;var AYn=null;var AXA=null;function ACf(){ACf=Bm(Cj);ARZ();}
function DL(a,b,c){var d=new Cj();Yd(d,a,b,c);return d;}
function AQW(a,b,c,d){var e=new Cj();ABV(e,a,b,c,d);return e;}
function Yd(a,b,c,d){ACf();C_(a,b,c);a.lz=It(d,null);}
function ABV(a,b,c,d,e){ACf();C_(a,b,c);a.lz=It(d,e);}
function ARZ(){var b;b=new Cj;FQ();Yd(b,B(341),0,AW7);AX_=b;AYa=DL(B(342),1,Q(B(375)));AYb=DL(B(344),2,Q(B(376)));AYc=DL(B(48),3,Q(B(377)));AYd=DL(B(347),4,Q(B(375)));AYe=DL(B(348),5,CN(188,63,60));AYf=DL(B(350),6,Q(B(378)));AYg=DL(B(49),7,Q(B(379)));AYh=DL(B(353),8,Q(B(380)));AYi=AQW(B(355),9,AW7,CN(52,65,52));AYj=AQW(B(356),10,Q(B(381)),Q(B(382)));AYk=DL(B(357),11,Q(B(383)));AYl=DL(B(359),12,Q(B(384)));AYm=DL(B(361),13,AW7);b=DL(B(362),14,Q(B(363)));AYn=b;AXA=H(Cj,[AX_,AYa,AYb,AYc,AYd,AYe,AYf,AYg,AYh,AYi,
AYj,AYk,AYl,AYm,b]);}
var AEo=F();
function IB(b,c){var d,e,f;if(c<=0)return B(31);d=BQ(c);e=d.data;e[0]=AC9(Iq(b,52));f=1;while(f<c){e[f]=AC9(Iq(b,62));f=f+1|0;}return F0(d);}
function AC9(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AAZ=F();
function AER(){var a=this;C.call(a);a.EQ=null;a.Cs=null;a.DC=0;a.C8=0;}
var AEa=F(0);
function ADU(b){var c;a:{switch(b){case 0:break;case 1:c=B(168);break a;case 2:c=B(221);break a;case 3:c=B(220);break a;default:c=null;break a;}c=B(190);}return c;}
var CT=F();
var ACr=F(CT);
var AC8=F(CT);
var Z2=F(CT);
var AAm=F(CT);
var ADI=F(CT);
function UG(){C.call(this);this.tJ=null;}
function AMh(a){var b;b=a.tJ;Br(Bx(),b);}
var Zw=F();
function B7(b,c){return Df(b*c);}
function H9(){var a=this;C.call(a);a.f3=0;a.lp=null;}
var AAI=F();
function Wj(){C.call(this);this.jJ=null;}
function APO(a,b){var c,d,e,f,g;c=a.jJ;d=c.kg;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.iE;e.b=Ev(0,e.b+f|0,c.gK.b-c.hL.b|0);c=a.jJ;d=c.iE;d.a=Ev(0,d.a+g|0,c.gK.a-c.hL.a|0);}a.jJ.kg=b.h;return 1;}
var AAU=F();
function M5(){C.call(this);this.p_=null;}
function AP0(a,b){HM(a.p_,b);}
function Wt(){C.call(this);this.i6=null;}
function ASa(a){return a.i6;}
function AEY(){var a=this;C.call(a);a.bt=null;a.V=null;a.R=null;a.er=null;}
function AB8(a){var b=new AEY();AR$(b,a);return b;}
function AR$(a,b){var c;a.R=AS$();a.bt=b;c=new TX;LH(c);c.lS=new B1;c.g5=b;a.V=c;}
function IL(a,b,c,d){var e,f,g,h;e=a.V;f=CI(e.gL,c)?0:1;g=CI(e.g$,b)?0:1;h=d===e.je?0:1;if(f){e.gL=c;e.d7=null;X9(e,0);}e.gS=!f&&!g&&!h?0:1;e.g$=b;e.je=d;e.hS=0;J9(a);}
function J2(a){var b;b=a.V;b.de=CH(b.de,null);a.R=CH(a.R,null);}
function LZ(a,b){var c,d,e;c=a.R;d=c.G;e=c.r;b=CH(c,b);a.R=b;b.jj(d,e,a.bt.bR);}
function Fo(a,b,c){var d;d=a.R;d.jj(b,c,d.d8);J9(a);}
function J9(a){var b,c,d,e;b=a.V;c=a.R.r.b;b.r.b=c;d=b.de;if(d!==null&&c!=BM(d)&&!(c>=b.hS&&BM(b.de)>=b.hS))b.gS=1;b=a.V;b.d8=a.bt.bR;if(Ul(b))c=0;else{b=a.V;Rm(b);e=Cy(b.g5,b.je);X9(b,E4(b.d7)+(e*2|0)|0);c=b.r.a;}b=a.V.G;d=a.R.G;T(b,d.b,d.a-c|0);}
function JK(b,c){if(b<0)c=B(385);else if(b>0)c=B(386);return c;}
function Or(a,b,c){var d;d=a.V.G.b;return (d-c|0)<=b&&b<d?1:0;}
function Ua(a,b,c){var d,e;d=a.V;e=d.G.b+d.r.b|0;return e<=b&&b<(e+c|0)?1:0;}
function PK(a,b,c){var d;d=a.V.G.a;return (d-c|0)<=b&&b<d?1:0;}
function Qu(a,b,c){var d,e;d=a.R;e=d.G.a+d.r.a|0;return e<=b&&b<(e+c|0)?1:0;}
function M_(a,b,c){var d,e,f;d=a.V.G.a-c|0;e=a.R;f=(e.G.a+e.r.a|0)+c|0;return d<=b&&b<f?1:0;}
function Se(a,b,c){var d,e;d=a.V.G.a+c|0;e=a.R;return ADa(b,d,(e.G.a+e.r.a|0)-c|0);}
function V6(a,b,c){var d,e,f;d=a.V;e=d.G.b;f=e-c|0;e=(e+d.r.b|0)+c|0;return f<=b&&b<e?1:0;}
function Vd(a,b,c){var d,e;d=a.V;e=d.G.b;return ADa(b,e+c|0,(e+d.r.b|0)-c|0);}
function ADa(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BF(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Id(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bf;f=new Bf;g=b.b;h=b.a;b=a.R;i=b.G;j=i.b;k=i.a;b=b.r;l=b.b;m=b.a;b=new XZ;b.ox=a;b.ow=e;b.ou=f;b.ot=c;b.oB=g;b.oA=j;b.oz=l;b.oy=d;b.oD=h;b.oC=k;b.sz=m;return b;}
var ACo=F(0);
var LM=F(0);
function RK(){C.call(this);this.pl=null;}
function AMZ(a,b){return Ra(a.pl,b);}
var QJ=F();
function ARm(a,b){ACR(b);}
var YJ=F();
function ADS(b,c,d,e,f,g){g.b=c.b;g.a=f;Bu(b,d.b,d.a,g,e);Bu(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bu(b,d.b,d.a+f|0,g,e);Bu(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AC6(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bu(b,j,k,i,h);Bu(b,j,k,i,h);Bu(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bu(b,l,j,i,h);Bu(b,l,j,i,h);Bu(b,l+g|0,j+g|0,i,h);}
function Nw(){var a=this;C.call(a);a.bo=null;a.ji=null;a.eN=null;a.dV=0;a.M=0;a.dT=null;a.d3=null;a.fZ=0;}
function Tt(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dV;i=V(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bb(i,e))a:{while(true){if(d<=e){j=d;break a;}Ew(c);j=d+(-1)|0;b=C7(d);d=V(j,a.M)%a.eN.a|0;Gb(a,c,b,a.fZ,g);H5(a.bo,c,0,d);if(!(j%a.dV|0))break;d=j;}}else{Ew(b);k=a.dV-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Gb(a,b,C7(j),V(a.M,k)+a.fZ|0,g);k=k+(-1)|0;j=h;}CO(a.bo,b);j=Bb(i,e);}return j;}k=a.dV;h=V(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Z(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Ew(c);b=C7((d+f|0)+1|0);j=d+1|0;d=
V(d,a.M)%a.eN.a|0;Gb(a,c,b,a.fZ,g);H5(a.bo,c,0,d);if(!(j%a.dV|0))break;d=j;}}else{Ew(b);d=0;while(d<a.dV){h=h+1|0;Gb(a,b,C7((h>e?h-f|0:h)+f|0),V(a.M,d)+a.fZ|0,g);d=d+1|0;}CO(a.bo,b);j=Z(i,e);}return j;}
function K8(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fy(e,b,c,f)!==f.hv?0:1;}
function Fy(b,c,d,e){c=c.data;return d<c.length&&c[d]?HG(b.dw,b,c[d]):e.hv;}
function E3(a,b,c,d,e,f){EJ(b,a.ji.b+d.b|0,c+d.a|0,a.dT,a.d3,a.bo,e,f,0.0);}
function Gb(a,b,c,d,e){Ci(b,c,a.eN.b-20.0*e,d);}
function Ye(){C.call(this);this.tX=null;}
function AN0(a,b){var c,d,e;c=a.tX;if(c.e.f.cE==c.lb){b=b.data;d=D_(b[0]);e=FN(b[1]);ADm(c.e.f,d,e);PD(c.e.f);}}
var YZ=F();
function F_(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function ZD(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function ADW(){var a=this;C.call(a);a.bz=0;a.bJ=0;}
function EU(a,b){var c=new ADW();ALD(c,a,b);return c;}
function ALD(a,b,c){a.bz=b;a.bJ=c;}
function AFN(a,b){var c;if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){c=b;return a.bz==c.bz&&a.bJ==c.bJ?1:0;}return 0;}
function AO5(a){var b,c,d,e,f,g,h;b=R(C,2).data;b[0]=F4(a.bz);b[1]=F4(a.bJ);c=(-1515898884);d=0;while(d<b.length){e=b[d];if(e===null)f=0;else{g=e.fK;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;c=Kj(h,4)^((h>>>7|0)|h<<25)^Kj(c,13);d=d+1|0;}return c;}
function AOB(a,b){var c;b=b;c=BF(a.bz,b.bz);if(!c)c=BF(a.bJ,b.bJ);return c;}
function R1(){C.call(this);this.td=null;}
function AMV(a,b){var c;c=a.td;TP(c,EV(c,b.h));KP(c.s,c.w,c.y);GZ(c);}
var SM=F(0);
var AXf=null;function ACP(){AXf=new QB;}
var FH=F(0);
function NO(){var a=this;C.call(a);a.hM=0;a.mn=0;a.iK=0;a.gi=0;a.gT=null;}
function Cc(a){return a.hM>=a.iK?0:1;}
function B$(a){var b,c;Pn(a);b=a.hM;a.gi=b;c=a.gT;a.hM=b+1|0;return Bs(c,b);}
function Q_(a){var b,c,d;if(a.gi<0){b=new D1;Y(b);K(b);}Pn(a);D7(a.gT,a.gi);a.mn=a.gT.cy;c=a.gi;d=a.hM;if(c<d)a.hM=d-1|0;a.iK=a.iK-1|0;a.gi=(-1);}
function Pn(a){var b;if(a.mn>=a.gT.cy)return;b=new IQ;Y(b);K(b);}
var FS=F(Iy);
var Xx=F(EI);
function Qx(){C.call(this);this.m2=null;}
function AN1(a,b){var c,d;c=a.m2;d=c.dJ+1|0;c.dJ=d;c=new M;O(c);G(G(U(c,d),B(387)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function UA(){C.call(this);this.qh=null;}
function AQC(a){var b,c;b=a.qh;c=new M;O(c);G(G(G(c,B(388)),b),B(389));$rt_globals.console.info($rt_ustr(N(c)));}
var Mm=F(DW);
var AYo=0.0;var AYp=null;function ACQ(){AYo=$rt_globals.NaN;AYp=E($rt_floatcls());}
var FE=F();
var AVJ=null;var AVL=null;var AVM=null;var AVK=null;var AVI=null;function ABw(){AVJ=E8([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AVL=AHd([Be(1),Be(10),Be(100),Be(1000),Be(10000),Be(100000),Be(1000000),Be(10000000),Be(100000000),Be(1000000000),Cd(1410065408, 2),Cd(1215752192, 23),Cd(3567587328, 232),Cd(1316134912, 2328),Cd(276447232, 23283),Cd(2764472320, 232830),Cd(1874919424, 2328306),Cd(1569325056, 23283064),Cd(2808348672, 232830643)]);AVM=AHd([Be(1),Be(10),Be(100),Be(10000),Be(100000000),
Cd(1874919424, 2328306)]);AVK=new Uy;AVI=new VT;}
var Kb=F();
var AYq=null;var AYr=null;function ACi(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.nV=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kM=0;c.kx=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Fd(CX(Be(e),Be(8388608)),Eo)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=ACq(AYr,f);if(h<0)h=( -h|0)-2|0;i=AYr.data;j=9+(f-i[h]|0)|0;k=Be(e);l=AYq.data;m=EE(D$(BR(k,Be(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=EE(D$(BR(k,Be(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BF(q,r);e=e>0?V(m/q|0,q):e<0?V(m/r|0,r)+r|0:V((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.kM=e;c.kx=h-50|0;}
function AAD(){var b,c,d,e,f,g,h,i;AYq=BG(100);AYr=BG(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AYq.data;g=d+50|0;f[g]=$rt_udiv(e,20);AYr.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:EE(Cq(Be(h),Gv(BR(Be(b&((1<<i)-1|0)),Be(10)),i)));f=AYq.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AYr.data[i]=c;d=d+1|0;}}
function VT(){var a=this;C.call(a);a.kM=0;a.kx=0;a.nV=0;}
function Me(){var a=this;C.call(a);a.wC=null;a.mP=0.0;a.wZ=0.0;a.e9=null;a.g2=null;a.l1=null;a.fi=0;}
function AEb(a,b){var c;if(b!==null){a.g2=b;return a;}c=new BI;Bo(c,B(390));K(c);}
function ACw(a,b){var c;if(b!==null){a.l1=b;return a;}c=new BI;Bo(c,B(390));K(c);}
function Qf(a,b,c,d){var e,f,g,$$je;e=a.fi;if(!(e==2&&!d)&&e!=3){a.fi=d?2:1;while(true){try{f=AEe(a,b,c);}catch($$e){$$je=Ei($$e);if($$je instanceof Bq){g=$$je;K(AH5(g));}else{throw $$e;}}if(Hb(f))return f;if(Il(f)){if(d&&DO(b)){g=a.g2;He();if(g===AWi)return D2(B5(b));if(B5(c)<=I(a.e9))return AWl;EG(b,b.X+B5(b)|0);if(a.g2===AWj)Kc(c,a.e9);}return f;}if(QR(f)){g=a.g2;He();if(g===AWi)return f;if(g===AWj){if(B5(c)<I(a.e9))return AWl;Kc(c,a.e9);}EG(b,b.X+Kh(f)|0);}else if(Mc(f)){g=a.l1;He();if(g===AWi)break;if(g
===AWj){if(B5(c)<I(a.e9))return AWl;Kc(c,a.e9);}EG(b,b.X+Kh(f)|0);}}return f;}b=new D1;Y(b);K(b);}
function ZL(a,b){var c,d,e,f;c=a.fi;if(c&&c!=3){b=new D1;Y(b);K(b);}if(!B5(b))return AEG(0);if(a.fi)a.fi=0;d=AEG(Bb(8,B5(b)*a.mP|0));while(true){e=Qf(a,b,d,0);if(Il(e))break;if(Hb(e))d=S4(a,d);if(!KQ(e))continue;VQ(e);}b=Qf(a,b,d,1);if(KQ(b))VQ(b);while(true){f=a.fi;if(f!=3&&f!=2)break;a.fi=3;if(Il(AWm)){d.dz=d.X;d.X=0;d.hx=(-1);return d;}d=S4(a,d);}b=new D1;Y(b);K(b);}
function S4(a,b){var c,d,e;c=b.hm;d=NS(c,Bb(8,c.data.length*2|0));e=ABG(d,0,d.data.length);EG(e,b.X);return e;}
var ABe=F(CT);
function QW(){C.call(this);this.nJ=null;}
function AJW(a,b){Dt(a.nJ,b);}
function Wa(){C.call(this);this.o1=null;}
function ASn(a,b){var c,d;c=a.o1;d=c.dJ+1|0;c.dJ=d;c=b.hB;b=new M;O(b);G(G(U(b,d),B(391)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var QB=F();
function AM7(a,b){}
function EL(){var a=this;C.call(a);a.G=null;a.r=null;a.d8=0.0;}
function AS$(){var a=new EL();LH(a);return a;}
function LH(a){a.G=new Bf;a.r=new Bf;}
function ANA(a){}
function ARp(a){return BZ(0,0);}
function Qa(a,b,c,d){var e;if(!Lf(a.G,b)){a.kv(b);Cu(a.G,b);}if(!Lf(a.r,c)){a.kl(c);Cu(a.r,c);}e=a.d8;if(e!==d){a.d8=d;a.pZ(e,d);}}
function DI(a,b){return F_(b,a.G,a.r);}
function ZM(a,b){var c,d,e,f;c=a.G;d=c.b;e=c.a;f=a.r;Yg();Bu(b,d,e,f,AXC);}
function Wb(a,b){var c;c=a.G;LL(b,c.b,c.a,a.r);}
function AQy(a,b){return 0;}
function AIO(a,b){}
function AQg(a,b){}
function ASt(a,b,c){}
function AQP(a,b,c,d){return 0;}
function AP6(a,b,c){return null;}
function ARc(a,b,c){return 0;}
function AMT(a,b){return 0;}
function AIG(a,b,c,d){return 0;}
function GH(){var a=this;EL.call(a);a.cI=null;a.bB=null;a.fg=null;}
function AYs(){var a=new GH();Uc(a);return a;}
function Uc(a){LH(a);a.cI=new Bf;a.bB=new Bf;}
function AFA(a,b){a.fg=b;}
function AEH(a){var b;b=a.bB;b.b=L8(a,b.b);b=a.bB;b.a=Ks(a,b.a);}
function Vv(a,b){a.bB.b=L8(a,b);}
function RB(a,b){a.bB.a=Ks(a,b);}
function ACF(a,b,c){a.bB.b=L8(a,b);a.bB.a=Ks(a,c);}
function Ks(a,b){return Bb(0,Z(b,a.cI.a-a.r.a|0));}
function L8(a,b){return Bb(0,Z(b,a.cI.b-a.r.b|0));}
function Rk(){var a=this;GH.call(a);a.cz=null;a.dD=null;a.fW=null;a.qU=null;a.dO=null;a.b5=null;a.d1=null;a.fm=null;a.da=0;a.eS=0;a.mK=null;a.dW=0;a.dY=0;a.f8=0;a.ff=0;a.fJ=0;a.cD=0;a.d2=null;a.iZ=null;a.nW=null;a.gO=null;}
function AUO(a,b){var c=new Rk();AAL(c,a,b);return c;}
function AAL(a,b,c){Uc(a);a.dD=SE();a.fW=new Bf;a.b5=AYt;a.d1=R(H6,0);a.dW=0;a.dY=0;a.f8=0;a.ff=0;a.fJ=0;a.d2=AEw(0);a.gO=KX();a.cz=b;a.iZ=c;a.mK=c;TI(a);}
function TI(a){a.da=B7(2.0,a.cz.bR);}
function WK(a){return a.b5.data.length?0:1;}
function Wn(a,b){O4(a);a.b5=b;}
function O4(a){T(a.fW,0,0);}
function Yc(a,b,c){a.nW=b;a.qU=c;a.dO=null;a.d2=null;a.eS=0;O4(a);}
function ASH(a){a.fm=CH(a.fm,null);T(a.fW,0,0);Ku(a.gO);a.d2=null;a.b5=AYt;a.d1=null;a.dW=0;a.dY=0;a.f8=0;Tr(a.dD);a.iZ=null;}
function AHQ(a,b,c){TQ(a);TI(a);a.dO=null;a.d2=null;a.eS=0;}
function AKy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=IR(a.cz);if(WK(a))return;LD(a);CB(c,a.dO);d=Ea(a);e=AE0(c,a.eS);f=Z(IK(a.r.a,d),a.b5.data.length)+30|0;g=a.nW.nO;h=a.d1.data;i=h.length;if(i<f){a:{j=a.ff;k=a.fJ;l=a.b5;m=a.d2;n=a.gO;o=R(H6,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gA!==q){VF(m,t,n);p[r]=LN(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=LN(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=LN(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){VF(m,q,n);h[j]=null;}j=j+1|0;}a.d1=o;Cu(a.fW,Mo(a.d2));T8(a,a.cz.cC);}a.ff=Z((a.bB.a+a.da|0)/(Ea(a)+a.da|0)|0,a.b5.data.length-1|0);a.fJ=Z((((a.bB.a+a.dD.t.a|0)-1|0)+a.da|0)/(Ea(a)+a.da|0)|0,a.b5.data.length-1|0);if(!a.d1.data.length)return;YU(a,e);Wb(a,b);t=g.r7;m=a.G;Bu(b,m.b,m.a,a.r,t);m=a.dD.A;u=m.b;v=m.a;w=Cy(a.cz,2.0);m=a.cz.cW;x=a.ff;j=u+w|0;while(x<=a.fJ){n=Nu(a,x);k=V(x,Ea(a));i=x+1|
0;y=k+V(i,a.da)|0;k=j+a.dW|0;r=k+a.dY|0;z=a.cD!=x?0:1;ba=!z?t:g.qt;q=!z?g.vK:g.jm;bb=!z?g.pM:g.jm;bc=!z?g.u1:g.jm;bd=(v+y|0)-a.bB.a|0;EJ(b,j,bd,n.gY,n.rT,a.fm,q,ba,0.0);EJ(b,k,bd,n.ht,n.ib,a.fm,bb,ba,0.0);EJ(b,r,bd,n.hz,n.iQ,a.fm,bc,ba,0.0);k=n.gY.b;s=j+k|0;T(m,Bb(0,a.dW-k|0),n.gY.a);Bu(b,s,bd,m,ba);k=j+a.dW|0;s=n.ht.b;be=k+s|0;T(m,Bb(0,a.dY-s|0),n.ht.a);Bu(b,be,bd,m,ba);k=n.hz.b;bf=r+k|0;T(m,Bb(0,(((a.dD.t.b-k|0)-a.dY|0)-a.dW|0)-w|0),n.hz.a);Bu(b,bf,bd,m,ba);bg=(u+a.r.b|0)-w|0;T(m,w,Ea(a)+a.da|0);Bu(b,bg,bd,
m,t);x=i;}FJ(b);}
function YU(a,b){var c,d,e,f,g,h;c=0;d=a.ff;while(d<=a.fJ){e=Nu(a,d);if(!(e!==null&&e.gA===a.b5.data[d])){f=a.d1.data;g=a.b5;e=a.d2;h=a.gO;c=d%f.length|0;if(f[c]!==null)VF(e,f[c],h);f[c]=LN(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cu(a.fW,Mo(a.d2));T8(a,a.cz.cC);}}
function T8(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fW;c=CL(b,c.b+150|0,c.a);CB(c,a.dO);d=a.dO;e=d.dE;f=e-(e+d.ew)/16.0;g=a.d1.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gA.iF;k=d.ib;Ci(c,j,k.bn+a.eS,f+k.bG);j=d.gA.iT;d=d.iQ;Ci(c,j,d.bn+a.eS,f+d.bG);}i=i+1|0;}a:{d=a.gO;if(d.dC>0){h=d.c7;i=0;b:while(true){g=d.ca.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.dF;l=j.dI;k=k;l=l.iw;Ci(c,k,l.bn+a.eS,f+l.bG);j=j.cQ;if(h!=d.c7)break b;}i=i+1|0;}b=new IQ;Y(b);K(b);}}b=CH(a.fm,CW(b));a.fm=b;CO(b,c);FT(c);}
function Nu(a,b){var c;c=a.d1.data;return c[b%c.length|0];}
function ALK(a,b){Cu(a.dD.t,b);}
function AIn(a,b){Cu(a.dD.A,b);}
function Z4(a){var b,c;LD(a);b=Ea(a);c=a.b5.data.length;b=V(b,c)+V(a.da,c+1|0)|0;T(a.cI,a.r.b,b);}
function TQ(a){var b,c,d,e,f,g,h,i,j;b=IR(a.cz);if(WK(a))return;LD(a);CB(b,a.dO);c=AE0(b,a.eS);d=a.b5.data;e=d.length;f=0;while(f<e){g=d[f];h=JU(c,g.gI);i=JU(c,g.iF);j=JU(c,g.iT);a.dW=Bb(a.dW,h);a.dY=Bb(a.dY,i);a.f8=Bb(a.f8,j);f=f+1|0;}}
function ARC(a,b){var c;c=N8(a,b.h);if(c>=0)a.cD=c;return Es(a.dD,a.G)&&Hl(a.cz.cF)?1:0;}
function AFT(a,b,c){if(!Es(a.dD,b.h)&&!Mg(a.dD)){b=a.mK;if(b!==null)b.q();}return null;}
function AF8(a,b,c,d){var e;if(d==1){e=N8(a,b.h);if(e>=0)NU(a,a.b5.data[e]);}return 1;}
function NU(a,b){a.iZ.q();b.mO.q();}
function N8(a,b){var c,d,e;if(!a.d1.data.length)return (-1);c=Ea(a);d=(b.a-a.G.a|0)+a.bB.a|0;e=a.da;e=(d+e|0)/(c+e|0)|0;if(e<a.b5.data.length)return e;return (-1);}
function Ea(a){return E4(a.dO);}
function LD(a){var b;if(a.dO===null){b=GV(a.cz,a.qU);a.dO=b;a.d2=AEw(E4(b));a.eS=Df(a.dO.mb);}}
function ALg(a,b){var c,d,e;a:{switch(b.bk){case 13:NU(a,a.b5.data[a.cD]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cD=a.ff;b=a.fg;c=a.bB;H1(b,c.b,c.a-(a.r.a/2|0)|0);return 0;case 34:a.cD=a.fJ;b=a.fg;c=a.bB;H1(b,c.b,c.a+(a.r.a/2|0)|0);return 0;case 35:case 39:a.cD=a.b5.data.length-1|0;break a;case 36:case 37:a.cD=0;break a;case 38:d=a.cD;e=a.b5.data.length;a.cD=((d+e
|0)-1|0)%e|0;break a;case 40:a.cD=(a.cD+1|0)%a.b5.data.length|0;break a;default:break a;}a.iZ.q();return 0;}e=a.cD;if(e<=a.ff)H1(a.fg,a.bB.b,V(e,Ea(a))+V(a.cD,a.da)|0);else if(e>=a.fJ)H1(a.fg,a.bB.b,(V(e+1|0,Ea(a))+V(a.cD+2|0,a.da)|0)-a.r.a|0);return 0;}
var Wi=F();
function ASu(a){}
function AAR(){var a=this;EL.call(a);a.lF=null;a.rY=null;a.uf=null;a.bD=null;a.c5=null;a.c6=null;a.sN=0.0;a.mM=null;a.m9=null;}
function ZO(a,b){var c=new AAR();ARl(c,a,b);return c;}
function ARl(a,b,c){var d;c=c.cF;LH(a);d=new VU;d.rS=a;a.rY=d;d=new VV;d.oi=a;a.uf=d;a.sN=10.0;a.bD=b;a.lF=c;b.fg=a;}
function AGa(a){var b;b=a.bD;b.fg=null;a.bD=CH(b,null);}
function QV(a,b,c){var d;a.mM=b;a.m9=c;d=a.c5;if(d!==null)Gl(d,b,c);d=a.c6;if(d!==null)Gl(d,b,c);}
function AHV(a,b,c,d){Qa(a,b,c,d);Qa(a.bD,b,c,d);if(d!==0.0){a.bD.u2();AEH(a.bD);if(Qr(a))H7(a);else a.c6=null;if(X2(a))Ii(a);else a.c5=null;}}
function H1(a,b,c){ACF(a.bD,b,c);if(Qr(a))H7(a);if(X2(a))Ii(a);}
function X2(a){var b;b=a.r.a;return b>0&&a.bD.cI.a>b?1:0;}
function Qr(a){var b;b=a.r.b;return b>0&&a.bD.cI.b>b?1:0;}
function H7(a){var b,c,d,e,f,g;b=a.c6;if(b===null)b=Hu();a.c6=b;Uz(a,b);c=a.c6;b=a.bD;d=b.bB.b;e=a.G;f=e.b;g=a.r;MJ(c,d,f,g.b,b.cI.b,e.a+g.a|0,JH(a));}
function Ii(a){var b,c,d,e,f,g;b=a.c5;if(b===null)b=Hu();a.c5=b;Uz(a,b);c=a.c5;b=a.bD;d=b.bB.a;e=a.G;f=e.a;g=a.r;IC(c,d,f,g.a,b.cI.a,e.b+g.b|0,JH(a));}
function JH(a){return B7(a.sN,a.d8);}
function Uz(a,b){var c,d;c=a.mM;d=a.m9;if(!(c!==null&&d!==null?(KG(b.hZ,c)&&KG(b.hY,d)?1:0):0))Gl(b,c,d);}
function APL(a,b){var c;a.bD.e_(b);if(!(a.c5===null&&a.c6===null)){Ct(b,1);c=a.c5;if(c!==null)F1(c,b);c=a.c6;if(c!==null)F1(c,b);c=a.c5;if(c!==null)Gj(c,b);c=a.c6;if(c!==null)Gj(c,b);Ct(b,0);}}
function Ne(a,b){var c,d;a:{b:{c=a.c5;if(!(c!==null&&IY(c,b))){c=a.c6;if(c===null)break b;if(!IY(c,b))break b;}d=1;break a;}d=0;}return d;}
function AJ4(a,b,c,d){return !Ne(a,b.h)&&!a.bD.cs(b,c,d)?0:1;}
function AQS(a,b,c){var d,e;d=a.c5;if(d!==null){e=Fh(d,b.h,a.rY,1);if(e!==null)return e;}d=a.c6;if(d!==null){e=Fh(d,b.h,a.uf,0);if(e!==null)return e;}return a.bD.b_(b,c);}
function AJE(a,b,c){return Ne(a,b.h)?1:0;}
function AKZ(a,b){var c,d,e;c=a.c5;d=c!==null&&Fs(c,b.h,a.lF)?1:0;c=a.c6;e=c!==null&&Fs(c,b.h,a.lF)?1:0;return !d&&!e&&!a.bD.bL(b)?0:1;}
function APY(a,b,c,d){var e,f;if(!DI(a,b.h))return 0;e=B7(d*0.25,a.d8);f=B7(c*0.25,a.d8);if(b.bI){f=f+e|0;e=0;}if(a.c5!==null&&e){b=a.bD;RB(b,b.bB.a+e|0);Ii(a);}if(a.c6!==null&&f){b=a.bD;Vv(b,b.bB.b+f|0);H7(a);}return 1;}
function ANf(a){var b,c;b=JH(a);c=a.bD.jg();c.b=Bb(c.b,b);c.a=Bb(c.a,b);return c;}
function Wq(){var a=this;GH.call(a);a.h8=null;a.ly=null;a.st=null;a.qe=0.0;}
function AN2(a){var b,c;b=a.cI;c=a.r;T(b,c.b*3|0,c.a*5|0);}
function ALO(a){var b;b=B7(20.0,a.d8);return BZ(b,b);}
function AKA(a,b){var c,d,e,f;c=a.st;d=c.tl;e=c.tm;c=c.tk;b=CA(b);f=new M;O(f);G(G(G(f,c),B(36)),b);IL(e,N(f),d.ti,3.0);}
function AIg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;ZM(a,b);Wb(a,b);c=B7(30.0,a.d8);d=a.bB;e=d.b;f=V(e/c|0,c);g=d.a;h=V(g/c|0,c);d=a.r;i=V(((e+d.b|0)-1|0)/c|0,c);e=V(((g+d.a|0)-1|0)/c|0,c);d=a.ly;d.a=c;d.b=c;a.h8.bH=1.0;while(h<=e){g=a.G.a-a.bB.a|0;j=f;while(j<=i){k=a.G.b-a.bB.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AD6(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;Xl(n,0.75,a.qe,a.h8);Bu(b,k+j|0,g+h|0,a.ly,a.h8);j=j+c|0;}h=h+c|0;}FJ(b);}
function ALe(a,b){}
function PL(){var a=this;C.call(a);a.tl=null;a.tm=null;a.tk=null;}
function VN(){C.call(this);this.pL=null;}
function AOm(a){X_(a.pL);}
function RQ(){C.call(this);this.m1=null;}
function AKi(a){N0(a.m1);}
function X5(){C.call(this);this.lu=null;}
var AYt=null;function AN_(){var a=new X5();AAj(a);return a;}
function AAj(a){a.lu=CD();}
function Nn(a,b,c,d,e){var f;f=new Jw;f.mO=e;f.iF=c;f.iT=d;f.gI=b;B2(a.lu,f);}
function Rc(a){return HP(a.lu,AYt);}
function V7(b){var c,d;if(b===null)b=B(31);else{c=b.fp;if(c===null)b=B(31);else{d=PX(c,B(392),I(c));b=d==(-1)?b.fp:Dj(b.fp,d+1|0);}}return b;}
function AAV(){AYt=R(Jw,0);}
function H6(){var a=this;C.call(a);a.rT=null;a.ib=null;a.iQ=null;a.gY=null;a.ht=null;a.hz=null;a.gA=null;}
function LN(b,c,d,e){var f,g,h;f=new H6;f.gY=new Bf;f.ht=new Bf;f.hz=new Bf;f.gA=b;g=DP(e,b.gI);if(g!==null)g.hc=g.hc+1|0;else{g=new Op;h=Ho(c,b.gI,d);g.hc=1;g.iw=h;Lh(e,b.gI,g);}e=g.iw;f.rT=e;T(f.gY,e.bl|0,e.bH|0);e=Ho(c,b.iF,d);f.ib=e;T(f.ht,e.bl|0,e.bH|0);b=Ho(c,b.iT,d);f.iQ=b;T(f.hz,b.bl|0,b.bH|0);return f;}
function VF(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gA.gI;f=DP(d,e);g=f.hc-1|0;f.hc=g;if(!g){a:{h=0;i=null;if(e===null){j=d.ca.data[0];while(j!==null){if(j.dF===null)break a;k=j.cQ;i=j;j=k;}}else{l=e.jD();m=d.ca.data;h=l&(m.length-1|0);j=m[h];while(j!==null&&!(j.jf==l&&Ze(e,j.dF))){k=j.cQ;i=j;j=k;}}}if(j===null)j=null;else{if(i!==null)i.cQ=j.cQ;else d.ca.data[h]=j.cQ;d.c7=d.c7+1|0;d.dC=d.dC-1|0;}Io(b,f.iw);}Io(b,c.ib);Io(b,c.iQ);}
function TX(){var a=this;EL.call(a);a.g5=null;a.g$=null;a.gL=null;a.d7=null;a.je=0.0;a.gS=0;a.hS=0;a.de=null;a.lS=null;}
function L0(a){var b;b=a.r;return b.b&&b.a?0:1;}
function Ul(a){var b,c;a:{if(a.gL!==null){b=a.g$;if(b!==null&&!Fq(b)){c=0;break a;}}c=1;}return c;}
function X9(a,b){a.r.a=b;}
function Px(a,b,c,d,e){var f,g;f=a.g5.cW;T(f,d,a.r.a);g=a.G;Bu(b,g.b+c|0,g.a,f,e);}
function Rm(a){if(a.d7===null)a.d7=GV(a.g5,a.gL);}
function Uy(){var a=this;C.call(a);a.lm=Eo;a.kf=0;a.nu=0;}
function YB(){var a=this;C.call(a);a.sw=null;a.sv=null;a.su=null;}
function AIu(a){var b,c,d,e,f;b=a.sw;c=a.sv;d=a.su;e=Bx();f=new M;O(f);b=G(f,b);BE(b,9);b=G(b,c);BE(b,9);G(b,d);Br(e,N(f));}
function VU(){C.call(this);this.rS=null;}
function ARn(a,b){var c,d;c=a.rS;d=FR(b,c.bD.cI.a-c.r.a|0);RB(c.bD,d);Ii(c);}
function VV(){C.call(this);this.oi=null;}
function AGj(a,b){var c,d;c=a.oi;d=FR(b,c.bD.cI.b-c.r.b|0);Vv(c.bD,d);H7(c);}
function Jw(){var a=this;C.call(a);a.mO=null;a.iF=null;a.iT=null;a.gI=null;}
var D1=F(Bq);
var ACK=F(EI);
function AH5(a){var b=new ACK();AMv(b,a);return b;}
function AMv(a,b){a.jt=1;a.jR=1;a.k9=b;}
function Ug(){var a=this;C.call(a);a.xq=null;a.xp=null;a.xo=null;}
function N5(){var a=this;C.call(a);a.tv=null;a.tx=null;a.tw=0;}
function AF2(a,b){var c,d,e;c=a.tv;d=a.tx;e=a.tw;d.l(XU(c,(b.h.b+e|0)-c.d6.b|0));}
function N3(){var a=this;C.call(a);a.qp=null;a.qo=null;a.qq=0;}
function AH6(a,b){var c,d,e;c=a.qp;d=a.qo;e=a.qq;d.l(OQ(c,(b.h.a+e|0)-c.d6.a|0));}
function Kx(){var a=this;Me.call(a);a.n6=null;a.sx=null;}
function AEe(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.n6;e=0;f=0;g=a.sx;a:{b:{while(true){if((e+32|0)>f&&DO(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B5(b)+k|0;h=j.length;f=Z(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BA;c=new M;O(c);U(G(U(G(c,B(393)),l),B(100)),h);Bo(b,N(c));K(b);}if(B5(b)<m){b=new L3;Y(b);K(b);}if(m<0){b=new BA;c=new M;O(c);G(U(G(c,B(101)),m),B(102));Bo(b,N(c));K(b);}n=b.X;h=n+b.k1|0;e=0;while(e<m){o=k+1|0;i=b.lI.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.X=n+m|0;e=0;}if(!DO(c)){p=!DO(b)&&e>=f?AWm:AWl;break a;}i=g.data;n=B5(c);o=i.length;n=Z(n,o);q=new Vy;q.ry=b;q.tB=c;p=AEr(a,d,e,f,g,0,n,q);e=q.u6;if(p===null&&0==q.kh)p=AWm;k=q.kh;h=0;if(c.mt){b=new I9;Y(b);K(b);}if(B5(c)<k)break;if(h>o){b=new BA;c=new M;O(c);BE(U(G(U(G(c,B(103)),h),B(97)),o),41);Bo(b,N(c));K(b);}l=h+k|0;if(l>o){b=new BA;c=new M;O(c);U(G(U(G(c,B(105)),l),B(100)),o);Bo(b,N(c));K(b);}if(k<0){b=new BA;c=new M;O(c);G(U(G(c,B(101)),k),B(102));Bo(b,N(c));K(b);}o=c.X;m=0;while(m<
k){l=o+1|0;n=h+1|0;SL(c,o,i[h]);m=m+1|0;o=l;h=n;}c.X=c.X+k|0;if(p!==null)break a;}b=new H2;Y(b);K(b);}b=new BA;c=new M;O(c);BE(U(G(U(G(c,B(103)),k),B(97)),h),41);Bo(b,N(c));K(b);}EG(b,b.X-(f-e|0)|0);return p;}
var T1=F(Kx);
function AEr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(KA(h,2))break a;i=AWm;break a;}c=k+1|0;n=j[k];if(!FK(a,n)){c=c+(-2)|0;i=D2(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(KA(h,3))break a;i=AWm;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FK(a,n))break b;if(!FK(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Mk(p)){c=k+(-3)|0;i=D2(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=D2(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(KA(h,4))break a;i=AWm;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B5(h.tB)<2?0:1)break a;i=AWl;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FK(a,n))break c;if(!FK(a,o))break c;if(!FK(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Ic(r);m=c+1|0;j[c]=IS(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=D2(1);break a;}c=k+(-3)|0;i
=D2(1);}h.u6=c;h.kh=f;return i;}
function FK(a,b){return (b&192)!=128?0:1;}
function Qc(){C.call(this);this.sf=null;}
function AG_(a,b){var c,d;c=a.sf;d=c.dJ+1|0;c.dJ=d;c=new M;O(c);G(G(U(c,d),B(394)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Vg(){C.call(this);this.vt=null;}
function AP$(a){return a.vt.f5();}
function Vh(){C.call(this);this.pX=null;}
function APx(a){return a.pX.f5();}
function Tl(){C.call(this);this.q5=null;}
function AP_(a){return a.q5.f5();}
function VM(){C.call(this);this.yI=null;}
function ANi(a){Br(Bx(),B(395));}
function QY(){C.call(this);this.nl=null;}
function AFj(a,b){a.nl.l(FG(b));}
function U3(){C.call(this);this.sA=null;}
function ARY(a,b){a.sA.q();}
function Ot(){var a=this;C.call(a);a.xy=null;a.xA=null;a.xz=0;a.xx=0;}
var ABW=F();
var ZZ=F();
function SH(){C.call(this);this.uZ=null;}
function AGi(a,b){var c,d,e,f;c=a.uZ;d=CA(b);e=new M;O(e);G(G(e,B(396)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new S3;d.wQ=c;d.pB=b;e=new S2;e.vT=c;f=new UZ;f.wG=e;e=new We;e.nX=d;c=b.fh;if(c!==null)c.arrayBuffer().then(Bk(e,"f"),Bk(f,"f"));else{b=b.gQ.getFile();c=new Wh;c.tr=e;c.ts=f;b.then(Bk(c,"f"),Bk(f,"f"));}}
function SG(){C.call(this);this.xg=null;}
function AG2(a,b){var c;b=CA(b);c=new M;O(c);G(G(c,B(397)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Qv=F();
function AOR(a,b){b=b;b.bo=CH(b.bo,null);}
function Tu(){C.call(this);this.ty=null;}
function AKk(a){DM(a.ty);}
var IQ=F(Bq);
function Oa(){C.call(this);this.q6=null;}
function ANZ(a,b){var c;c=a.q6;Dt(c,b);LA(c,null);HN(c);}
var J7=F(DW);
var AYu=0.0;var AYv=null;function ZT(){AYu=$rt_globals.NaN;AYv=E($rt_doublecls());}
var LI=F();
var AYw=null;var AYx=null;function ABt(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.nu=Fd(CX(d,Cd(0, 2147483648)),Eo)?0:1;e=CX(d,Cd(4294967295, 1048575));f=EE(Gv(d,52))&2047;if(Fd(e,Eo)&&!f){c.lm=Eo;c.kf=0;return;}g=0;if(f)e=ATw(e,Cd(0, 1048576));else{e=Fp(e,1);while(Fd(CX(e,Cd(0, 1048576)),Eo)){e=Fp(e,1);f=f+(-1)|0;g=g+1|0;}}h=ACq(AYx,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AYx.data[h]|0)|0;j=RL(e,AYw.data[h],i);if(AAl(j,Cd(2808348672, 232830643))){h=h+1|0;i=12+(f-AYx.data[h]|0)|0;j=RL(e,AYw.data[h],
i);}k=D$(AYw.data[h],(63-i|0)-g|0);l=Gv(Cq(k,Be(1)),1);m=Gv(k,1);if(Fd(e,Cd(0, 1048576)))m=Gv(m,2);n=Be(10);while(PW(n,m)){n=BR(n,Be(10));}if(AAl(M7(j,n),Do(m,Be(2))))n=Do(n,Be(10));o=Be(1);while(PW(o,l)){o=BR(o,Be(10));}if(AIf(Ky(o,M7(j,o)),Do(l,Be(2))))o=Do(o,Be(10));f=ATR(n,o);e=f>0?BR(Do(j,n),n):f<0?Cq(BR(Do(j,o),o),o):BR(Do(Cq(j,Do(o,Be(2))),o),o);if(AAl(e,Cd(2808348672, 232830643))){h=h+1|0;e=Do(e,Be(10));}else if(AIz(e,Cd(1569325056, 23283064))){h=h+(-1)|0;e=BR(e,Be(10));}c.lm=e;c.kf=h-330|0;}
function RL(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CX(b,Be(65535));f=CX(D$(b,16),Be(65535));g=CX(D$(b,32),Be(65535));h=CX(D$(b,48),Be(65535));i=CX(c,Be(65535));j=CX(D$(c,16),Be(65535));k=CX(D$(c,32),Be(65535));l=CX(D$(c,48),Be(65535));m=Cq(Cq(BR(k,e),BR(j,f)),BR(i,g));n=Cq(Cq(Cq(BR(l,e),BR(k,f)),BR(j,g)),BR(i,h));o=Cq(Cq(Fp(BR(l,h),32+d|0),Fp(Cq(BR(l,g),BR(k,h)),16+d|0)),Fp(Cq(Cq(BR(l,f),BR(k,g)),BR(j,h)),d));return Cq(d>16?Cq(o,Fp(n,d-16|0)):Cq(o,D$(n,16-d|0)),D$(m,32-d|0));}
function AA6(){var b,c,d,e,f,g,h,i,j,k;AYw=AUL(660);AYx=BG(660);b=Cd(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AYw.data;g=d+330|0;f[g]=FL(e,Be(80));AYx.data[g]=c;e=FL(e,Be(10));h=NG(e,Be(10));while(PW(e,b)&&Fd(CX(e,Cd(0, 2147483648)),Eo)){e=Fp(e,1);c=c+1|0;h=Fp(h,1);}e=Cq(e,Do(h,Be(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AIf(e,Cd(3435973836, 214748364))){e=Gv(e,1);j=j+1|0;d=d+(-1)|0;}k=BR(e,Be(10));b=j<=0?k:Cq(k,Gv(BR(CX(b,Be((1<<j)-1|0)),Be(10)),j));f=AYw.data;g=(330-i|0)-1|0;f[g]=FL(b,
Be(80));AYx.data[g]=d;i=i+1|0;}}
function M4(){C.call(this);this.sM=null;}
function ASM(a,b){var c,d;c=a.sM;d=new Bq;Bo(d,$rt_str(b.message));c.l(d);}
function Um(){var a=this;C.call(a);a.rp=0;a.mJ=0;}
function FR(a,b){return P1(a.rp,b,a.mJ);}
function NI(){var a=this;C.call(a);a.uk=null;a.um=null;a.ul=null;}
function ARF(a,b,c,d){var e,f;b=a.uk;e=a.um;f=a.ul;TT(b,e);if(f!==null)d.my.q();if(MO(d)){if(d.j1===null)T3(b,AEK(d,e),d.it,e);else P3(b,AEK(d,e),d.it,e,d.j1);}}
var Sq=F(DW);
var AYy=null;function FL(b,c){return Long_udiv(b, c);}
function NG(b,c){return Long_urem(b, c);}
function Ll(b,c){return Long_ucompare(b, c);}
function AA4(){AYy=E($rt_longcls());}
var Gm=F(Bq);
function NV(){var a=this;C.call(a);a.mX=null;a.qf=null;a.tF=0;a.uW=0;}
function LV(a,b){return B5(a.qf)<b?0:1;}
var ADY=F();
function UX(b,c,d,e){var f,g;f=b.next();g=new XN;g.na=b;g.m_=c;g.nd=d;g.nb=e;f.then(Bk(g,"f"),Bk(d,"f"));}
function Zg(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEs(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Eb()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new XJ;f.qV=b;f.qW=d;d.addEventListener("change",Bk(f,"handleEvent"));d.click();}
function Zo(b,c){var d;if(c.isFile?1:0)b.l(YR(c.file()));else{c=c.createReader();d=new Xw;d.tT=b;c.readEntries(Bk(d,"f"));}}
function Tm(){var a=this;C.call(a);a.bN=null;a.oK=null;a.h5=null;a.iU=null;a.Y=null;}
function IJ(a){return a.bN.ct.i3;}
function Oo(a){var b;b=new Pp;b.qc=a;return b;}
function AE5(a){var b,c,d,e,f,g;b=R(C$,4);c=b.data;d=a.Y.S.W.bj;e=a.bN;BN(e);f=new Wc;f.th=e;c[0]=D9(B(398),d,f);e=a.Y.S.W.bj;f=a.bN;BN(f);g=new Wg;g.nU=f;c[1]=D9(B(399),e,g);e=a.Y.S.W.bj;f=a.bN;BN(f);g=new Wf;g.sc=f;c[2]=D9(B(400),e,g);e=a.Y.S.W.bj;f=a.bN;BN(f);g=new Wd;g.vL=f;c[3]=D9(B(401),e,g);return FX(b);}
function Jh(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DM(a.Y.cc);d=a.bN.e;e=Dn(d);f=G6(d);g=a.bN.eC;if(c===null)h=null;else{ATg();switch(AYz.data[c.c2]){case 1:h=KZ(g,e,f);break a;case 2:h=V5(g,e,f);break a;default:}b=new Er;Y(b);K(b);}}c=a.bN;e=EV(c,b);f=HS(c.e.f,e.bz,e.bJ);g=OZ(c,f);if(h!==null){f=c.e;i=e.bz;j=e.bJ;e=new Uv;e.vQ=c;e.vP=b;e.vR=g;h.sF(f,i,j,e,c.g7);}else{e=DP(c.e.f.en,f);if(e!==null)HE(c,e);else{e=DP(c.e.f.eL,f);if(e!==null&&!EF(e))VH(c.iM,b,e,c,g);else{g=c.iM;DM(g.cc);h=g.cc;k=R(C$,1);l=k.data;d=new C$;BN(h);f
=new V8;f.of=h;Lb(d,f,B(402),g.S.W.p8);l[0]=d;Gh(h,b,FX(k),NK(g,c));}}}}
var ZA=F(0);
function AJ5(b){return 112<=b&&b<=123?1:0;}
var XP=F();
function APR(a,b){Zg(b);}
function XO(){var a=this;C.call(a);a.qk=null;a.qj=null;}
function AIa(a,b){var c,d,e,f,g,h,i;c=a.qk;d=a.qj;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new Qb;i.od=c;i.oc=g;h.then(Bk(i,"f"),Bk(d,"f"));e=e+1|0;}}
var Xc=F();
function AJI(a,b){Zg(b);}
function Xb(){var a=this;C.call(a);a.pr=null;a.ps=null;}
function AKE(a,b){var c,d,e,f,g;c=a.pr;d=a.ps;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bv,1);g.data[0]=FG(b.name);UX(f,c,d,g);}
var Y1=F();
function ABK(b,c,d){AAd(b,c,d,0);}
function AAd(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=AD4(c);g=BB(f);BB(f);h=BB(f);i=Cz(b);b.D=!e?R(CC,g):Pq(b.D,g);j=0;while(j<g){if(e&&j<i){k=4*BB(f)|0;f.e4=f.e4+k|0;}else b.D.data[j]=DQ(AB1(f,d,0));j=j+1|0;}b.dc=ARz(MP(f));Ku(b.en);Ku(b.eL);l=b.en;g=0;while(g<h){Lh(l,EU(BB(f),BB(f)),EU(BB(f),BB(f)));g=g+1|0;}l=b.en;m=b.eL;b=new U0;SZ(b,l);while(Jl(b)){UH(b);n=b.he;o=n.dF;n=n.dI;l=CD();if(DP(m,n)===null)Lh(m,n,l);B2(DP(m,n),o);}if(m.kF===null){b=new Po;b.vb=m;m.kF=b;}b=m.kF;m=new Rp;SZ(m,b.vb);while(Jl(m)){UH(m);b
=m.he.dI;l=AVy;c=R(C,b.i);d=c.data;HP(b,c);AAw(c,l);e=0;h=d.length;while(e<h){l=d[e];Je(b,e);b.cu.data[e]=l;e=e+1|0;}}QA(f);}
function ADm(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AD4(c);g=BB(f);h=BB(f);i=BB(f);j=BB(f);k=NR(b,g);l=NR(b,h);m=(IO(B3(b,k.b),k.a)).data[0].o;n=(IO(B3(b,l.b),l.a)).data[1].o;o=0;p=i-1|0;while(o<i){e=AB1(f,d,g);if(!o)e=LU(m,e);if(o==p)e=LU(e,n);q=k.b+o|0;r=DQ(e);b.D.data[q]=r;o=o+1|0;}if(j){s=MP(f);r=Oh(g,h,(-1));b=b.dc;r=JX(b,b.dB,r);if(r!==null&&!EF(s.bu)){s=s.bu;if(r===b.dB)b.dB=Bs(s,0);else if(r.ec!==null){b=new Te;b.oo=r;J_(s,b);o=QC(r.ec.bu,r);D7(r.ec.bu,
o);b=r.ec.bu;Py(b,o);if(!EF(s)){Jp(b,b.i+s.i|0);i=s.i;g=b.i;q=g-1|0;while(q>=o){c=b.cu.data;c[q+i|0]=c[q];q=q+(-1)|0;}b.i=g+i|0;r=B8(s);g=0;while(g<i){c=b.cu.data;q=o+1|0;c[o]=B$(r);g=g+1|0;o=q;}b.cy=b.cy+1|0;}}}}QA(f);}
function AB1(b,c,d){var e,f,g,h,i,j,k,l;e=BB(b);f=R(B6,e);g=f.data;h=0;while(h<e){i=BB(b);j=BB(b);k=BB(b);l=BB(b);g[h]=DE(HC(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
var Xk=F(0);
var AXb=null;function Zd(){AXb=null;}
function XJ(){var a=this;C.call(a);a.qV=null;a.qW=null;}
function AJz(a,b){var c,d,e,f,g,h;b=a.qV;c=a.qW;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new M1;h.m6=b;h.m5=g;$rt_globals.setTimeout(Bk(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=YR(d.item(f));g=new MK;g.si=b;g.sj=c;$rt_globals.setTimeout(Bk(g,"onTimer"),0);f=f+1|0;}}
function AAC(){var a=this;C.call(a);a.il=null;a.ko=null;}
function AEi(){var a=this;C.call(a);a.yB=0;a.ym=0;a.sP=0;a.k5=0;}
function UP(){var a=this;C.call(a);a.nD=null;a.nC=null;}
function AKd(a){var b,c,d,e,f,g;b=a.nD;c=a.nC;if(CI(c.il,b.e.f$)){c=c.ko;CE(b,c.k5,c.sP,0);B0(b.s.bT,c.k5,c.sP);B0(b.s.bK,c.ym,c.yB);}else{d=(Cp(b.eC.rV)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Cl(b);b=new So;b.vq=g;b.vr=c;BN(b);c=new P4;c.vJ=b;$rt_globals.setTimeout(Bk(c,"onTimer"),0);}}}
function UR(){var a=this;C.call(a);a.vN=null;a.vI=null;}
function APg(a){HE(a.vN,a.vI);}
function ACU(){var a=this;C.call(a);a.iD=null;a.e4=0;}
function AD4(a){var b=new ACU();AFp(b,a);return b;}
function AFp(a,b){a.iD=b;a.e4=0;}
function BB(a){var b,c;b=a.iD.data;c=a.e4;a.e4=c+1|0;return b[c];}
function QA(a){var b,c,d,e;if(a.e4!=a.iD.data.length){b=EX();c=a.iD.data.length;d=a.e4;e=new M;O(e);G(U(G(U(G(e,B(403)),c),B(404)),d),B(405));Br(b,N(e));}}
var E0=F();
var AYA=null;var AYB=null;var AYC=null;var AYD=null;var AYE=null;var AYF=null;function ACh(){AYA=new V0;AYB=new VY;AYC=new VZ;AYD=new VW;AYE=new VX;AYF=new Yv;}
var O9=F(0);
var Gi=F(EQ);
var Kk=F(Gi);
var V0=F(Kk);
var LE=F(EC);
var VY=F(LE);
var L9=F(F$);
var VZ=F(L9);
var VW=F();
var Pz=F(0);
var VX=F();
var Yv=F();
var I9=F(Gm);
var H2=F(Bq);
var L3=F(Bq);
function AA3(){C.call(this);this.BJ=null;}
function SK(){var a=this;C.call(a);a.tV=null;a.t0=null;}
function AR3(a){var b,c;b=a.tV;c=a.t0;FV(b.d_,c);}
function PU(){C.call(this);this.vs=null;}
function AMb(a,b){HM(a.vs,b);}
function SU(){var a=this;C.call(a);a.oY=null;a.oX=null;}
function AGq(a){var b,c;b=a.oY;c=a.oX;FV(b.d_,c);Uw(b);}
var YL=F();
function Sj(b,c){return b.data[c];}
function G9(){var a=this;C.call(a);a.eY=0;a.fy=0;a.la=null;a.jY=0;a.hb=null;}
function AFL(a,b,c,d,e,f){var g=new G9();AKV(g,a,b,c,d,e,f);return g;}
function AKV(a,b,c,d,e,f,g){a.eY=b;a.fy=c;a.la=BZ(f,g);a.jY=d;a.hb=e;}
function AC3(){Gi.call(this);this.C4=null;}
function Po(){EQ.call(this);this.vb=null;}
var W5=F(BA);
var QH=F(0);
var NP=F(0);
var L6=F();
function AAH(){var a=this;L6.call(a);a.E$=null;a.He=0;a.FM=0;a.Di=0;}
function RW(){var a=this;C.call(a);a.oh=null;a.og=null;}
function AG4(a){var b,c;b=a.oh;c=a.og;Vf();Jh(b,c,AYG);}
function RV(){var a=this;C.call(a);a.pu=null;a.pw=null;}
function AFr(a){var b,c;b=a.pu;c=a.pw;Vf();Jh(b,c,AYH);}
function RU(){var a=this;C.call(a);a.vu=null;a.vv=null;}
function ALG(a){Jh(a.vu,a.vv,null);}
function RT(){var a=this;C.call(a);a.nB=null;a.nE=null;}
function AQA(a){var b,c,d,e,f,g,h;b=a.nB;c=a.nE;d=Dn(b.bN.e);e=G6(b.bN.e);d=NH(b.bN.eC,d,e);DM(b.Y.cc);b=b.bN;e=EV(b,c);if(d!==null){f=b.e;g=e.bz;h=e.bJ;e=new PY;e.ye=b;e.yf=c;d.Ib(f,g,h,1,e,b.g7);}}
function PN(){C.call(this);this.qE=null;}
function APU(a){var b;b=a.qE;DM(b.Y.cc);GI(b.bN,Oo(b),0);}
function PP(){C.call(this);this.tZ=null;}
function AKK(a){var b;b=a.tZ;DM(b.Y.cc);GI(b.bN,Oo(b),1);}
function PQ(){C.call(this);this.sW=null;}
function AHw(a){var b,c,d;b=a.sW;DM(b.Y.cc);c=IJ(b);b=b.bN;BN(b);d=new Tp;d.sZ=b;Rb(c,d,Zb(B(406)));}
var XQ=F(0);
var AW9=null;function YX(){AW9=new PJ;}
function WA(){C.call(this);this.ta=null;}
function AGn(a){var b,c,d;b=a.ta;DM(b.Y.cc);c=IJ(b);b=b.bN;BN(b);d=new Ry;d.ra=b;L4(c,d);}
function Tf(){C.call(this);this.ru=null;}
function AGg(a,b,c){var d,e;c=a.ru;d=c.e.f;e=b.fK;b=c.eZ;XG(d.D.data[e],0,b);}
function QQ(){var a=this;C.call(a);a.o$=null;a.pb=0;a.pc=0;a.pd=null;a.pe=0;a.o_=0;}
function AJ_(a,b){var c,d,e,f,g,h,i,j;c=a.o$;d=a.pb;e=a.pc;f=a.pd;g=a.pe;h=a.o_;i=Cy(c.bt,5.0);d=Z((c.bt.cb.b-d|0)-i|0,Bb((i-d|0)-c.V.r.b|0,b.h.b));j=Z((c.bt.cb.a-e|0)-i|0,Bb((i-e|0)-c.V.r.a|0,b.h.a));T(f,d+g|0,j+h|0);Fo(c,f,c.R.r);}
function XZ(){var a=this;C.call(a);a.ox=null;a.ow=null;a.ou=null;a.ot=0;a.oB=0;a.oA=0;a.oz=0;a.oy=0;a.oD=0;a.oC=0;a.sz=0;}
function ALF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.ox;d=a.ow;e=a.ou;f=a.ot;g=a.oB;h=a.oA;i=a.oz;j=a.oy;k=a.oD;l=a.oC;m=a.sz;n=Cy(c.bt,5.0);o=c.R.jg();Cu(d,c.R.r);Cu(e,c.R.G);switch(f){case -1:f=Z(h+(b.h.b-g|0)|0,c.bt.cb.b-n|0);g=o.b;h=h+i|0;f=Bb(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bb((i+b.h.b|0)-g|0,Bb(o.b,n-c.V.G.b|0));}b:{switch(j){case -1:f=Bb(n,Z(l+(b.h.a-k|0)|0,(c.bt.cb.a+c.V.r.a|0)-n|0));g=o.a;h=l+m|0;f=Bb(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bb((m+b.h.a|0)-k|0,o.a);}Fo(c,e,d);}
function VK(){var a=this;C.call(a);a.vB=null;a.vC=0.0;}
function JU(a,b){return KT(a.vB,b,a.vC*2.0+0.875);}
function Tb(){C.call(this);this.om=null;}
function ALf(a){AEA(a.om);}
function Tc(){C.call(this);this.rU=null;}
function AMy(a){LT(a.rU);}
function Ta(){C.call(this);this.vD=null;}
function ANW(a){AD3(a.vD);}
function Ou(){C.call(this);this.sh=null;}
function AJ9(a){a.sh.uT();}
function Os(){C.call(this);this.q9=null;}
function AQK(a){a.q9.vi();}
function VE(){C.call(this);this.rG=null;}
function AH1(a){var b,c,d,e,f,g,h,i;b=a.rG;c=(b.oK.dt()).data;d=R(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new YC;i.qb=b;i.qa=h;e[f]=ACk(i,h,b.Y.S.W.bj);f=f+1|0;}return d;}
function Wc(){C.call(this);this.th=null;}
function AOw(a){var b,c,d,e,f;b=a.th.e.f;c=b.cE;d=new M;O(d);U(G(d,B(407)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.gX;d=new M;O(d);U(G(d,B(408)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.dc;e=F0(EH(b));Xr(d,0,d.dB,e);b=Bx();f=b.ky;f.data[0]=10;Oe(b,f,0,1);}
function Wg(){C.call(this);this.nU=null;}
function ALn(a){S8(a.nU);}
function Wf(){C.call(this);this.sc=null;}
function AGe(a){W$(a.sc);}
function Wd(){C.call(this);this.vL=null;}
function AH9(a){HN(a.vL);}
function Wl(){C.call(this);this.rq=null;}
function ARr(a,b,c){FY(B3(a.rq.e.f,b.fK),0,I(c));}
function Qb(){var a=this;C.call(a);a.od=null;a.oc=null;}
function AIo(a,b){a.od.l(ACt(a.oc,b));}
var I0=F(0);
function M1(){var a=this;C.call(a);a.m6=null;a.m5=null;}
function AKL(a){Zo(a.m6,a.m5);}
function MK(){var a=this;C.call(a);a.si=null;a.sj=null;}
function AFc(a){a.si.l(a.sj);}
var PJ=F();
function XN(){var a=this;C.call(a);a.na=null;a.m_=null;a.nd=null;a.nb=null;}
function AJ0(a,b){var c,d,e,f,g,h,i;c=a.na;d=a.m_;e=a.nd;f=a.nb;if(!(b.done?1:0)){UX(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new UE;c.pt=d;c.pv=g;c.px=f;b.then(Bk(c,"f"),Bk(e,"f"));}else{h=f.data;c=g.values();b=FG(g.name);i=h.length;f=Dk(f,i+1|0);f.data[i]=b;UX(c,d,e,f);}}}
function G1(){var a=this;C.call(a);a.iz=0;a.sl=0;a.hJ=null;a.he=null;a.pI=null;a.jn=null;}
function AYI(a){var b=new G1();SZ(b,a);return b;}
function SZ(a,b){a.jn=b;a.sl=b.c7;a.hJ=null;}
function Jl(a){var b,c;if(a.hJ!==null)return 1;while(true){b=a.iz;c=a.jn.ca.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.iz=b+1|0;}return 0;}
function AAf(a){var b;if(a.sl==a.jn.c7)return;b=new IQ;Y(b);K(b);}
function UH(a){var b,c,d,e;AAf(a);if(!Jl(a)){b=new Yq;Y(b);K(b);}b=a.hJ;if(b!==null){c=a.he;if(c!==null)a.pI=c;a.he=b;a.hJ=b.cQ;}else{d=a.jn.ca.data;e=a.iz;a.iz=e+1|0;b=d[e];a.he=b;a.hJ=b.cQ;a.pI=null;}}
var U0=F(G1);
var Rp=F(G1);
function Rn(){var a=this;C.call(a);a.g=null;a.dr=0;a.km=null;a.nA=0;a.gm=0;a.eO=0;a.by=0;a.lk=null;}
function J1(a){return a.g.bP;}
function Yb(a,b,c,d){var e,f,g,h,i,j;e=CD();f=a.dr;g=0;if(c!=f)a.dr=c;a:{switch(b){case -1073741784:h=new R$;c=a.by+1|0;a.by=c;Fn(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PV;c=a.by+1|0;a.by=c;Fn(h,c);break a;case -33554392:h=new Tk;c=a.by+1|0;a.by=c;Fn(h,c);break a;default:c=a.gm+1|0;a.gm=c;if(d!==null)h=AUt(c);else{h=new FB;Fn(h,0);g=1;}c=a.gm;if(c<=(-1))break a;if(c>=10)break a;a.km.data[c]=h;break a;}h=new X8;Fn(h,(-1));}while(true){if(E1(a.g)&&a.g.j==(-536870788))
{d=AQ7(B_(a,2),B_(a,64));while(!Di(a.g)&&E1(a.g)){i=a.g;j=i.j;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cx(d,Bi(i));i=a.g;if(i.bi!=(-536870788))continue;Bi(i);}i=KV(a,d);i.P(h);}else if(a.g.bi==(-536870788)){i=GR(h);Bi(a.g);}else{i=Pg(a,h);d=a.g;if(d.bi==(-536870788))Bi(d);}if(i!==null)B2(e,i);if(Di(a.g))break;if(a.g.bi==(-536870871))break;}if(a.g.kK==(-536870788))B2(e,GR(h));if(a.dr!=f&&!g){a.dr=f;d=a.g;d.f6=f;d.j=d.bi;d.eI=d.eU;j=d.c$;d.v=j+1|0;d.hg=j;E5(d);}switch(b){case -1073741784:break;case -536870872:d
=new MZ;FC(d,e,h);return d;case -268435416:d=new WB;FC(d,e,h);return d;case -134217688:d=new Rq;FC(d,e,h);return d;case -67108824:d=new T4;FC(d,e,h);return d;case -33554392:d=new DR;FC(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return AUf(Bs(e,0),h);default:return ATQ(e,h);}return GR(h);}d=new I6;FC(d,e,h);return d;}
function ADs(a){var b,c,d,e,f,g,h;b=BG(4);c=(-1);d=(-1);if(!Di(a.g)&&E1(a.g)){e=b.data;c=Bi(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BQ(3);b=e.data;b[0]=c&65535;f=a.g;g=f.bi;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bi(f);f=a.g;g=f.bi;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bi(f);return AQO(e,3);}return AQO(e,2);}if(!B_(a,2))return AAe(b[0]);if(B_(a,64))return AOO(b[0]);return AHe(b[0]);}e=b.data;c=1;while(c<4&&!Di(a.g)&&E1(a.g)){h=c+1|0;e[c]=Bi(a.g);c=h;}if(c==1){h=e[0];if(!(AYJ.x2(h)==AYK?0:1))return X6(a,e[0]);}if
(!B_(a,2))return AU6(b,c);if(B_(a,64)){f=new XM;N$(f,b,c);return f;}f=new Uf;N$(f,b,c);return f;}
function Pg(a,b){var c,d,e,f,g,h,i;if(E1(a.g)&&!JM(a.g)&&Kp(a.g.j)){if(B_(a,128)){c=ADs(a);if(!Di(a.g)){d=a.g;e=d.bi;if(!(e==(-536870871)&&!(b instanceof FB))&&e!=(-536870788)&&!E1(d))c=Mn(a,b,c);}}else if(!Oi(a.g)&&!VI(a.g)){f=new Ok;O(f);while(!Di(a.g)&&E1(a.g)&&!Oi(a.g)&&!VI(a.g)){if(!(!JM(a.g)&&!a.g.j)&&!(!JM(a.g)&&Kp(a.g.j))){g=a.g.j;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bi(a.g);if(!Mf(e))BE(f,e&65535);else Is(f,Gw(e));}if(!B_(a,2)){c=new RY;DA(c);c.cr
=N(f);e=f.Q;c.bM=e;c.kD=AM8(e);c.ln=AM8(c.bM);h=0;while(h<(c.bM-1|0)){Ru(c.kD,L(c.cr,h),(c.bM-h|0)-1|0);Ru(c.ln,L(c.cr,(c.bM-h|0)-1|0),(c.bM-h|0)-1|0);h=h+1|0;}}else if(B_(a,64))c=AU4(f);else{c=new Nv;DA(c);c.hi=N(f);c.bM=f.Q;}}else c=Mn(a,b,XL(a,b));}else{d=a.g;if(d.bi!=(-536870871))c=Mn(a,b,XL(a,b));else{if(b instanceof FB)K(B9(B(31),d.bP,Og(d)));c=GR(b);}}a:{if(!Di(a.g)){e=a.g.bi;if(!(e==(-536870871)&&!(b instanceof FB))&&e!=(-536870788)){f=Pg(a,b);if(c instanceof C4&&!(c instanceof E6)&&!(c instanceof CR)
&&!(c instanceof Ez)){i=c;if(!f.bU(i.J)){c=new WQ;ET(c,i.J,i.d,i.hH);c.J.P(c);}}if((f.hK()&65535)!=43)c.P(f);else c.P(f.J);break a;}}if(c===null)return null;c.P(b);}if((c.hK()&65535)!=43)return c;return c.J;}
function Mn(a,b,c){var d,e,f,g,h;d=a.g;e=d.bi;if(c!==null&&!(c instanceof BV)){switch(e){case -2147483606:Bi(d);d=new Yz;Dc(d,c,b,e);Mv();c.P(AYL);return d;case -2147483605:Bi(d);d=new PM;Dc(d,c,b,(-2147483606));Mv();c.P(AYL);return d;case -2147483585:Bi(d);d=new Pr;Dc(d,c,b,(-536870849));Mv();c.P(AYL);return d;case -2147483525:f=new Np;d=Fb(d);g=a.eO+1|0;a.eO=g;Jd(f,d,c,b,(-536870849),g);Mv();c.P(AYL);return f;case -1073741782:case -1073741781:Bi(d);d=new RP;Dc(d,c,b,e);c.P(d);return d;case -1073741761:Bi(d);d
=new QD;Dc(d,c,b,(-536870849));c.P(b);return d;case -1073741701:h=new Vk;d=Fb(d);e=a.eO+1|0;a.eO=e;Jd(h,d,c,b,(-536870849),e);c.P(h);return h;case -536870870:case -536870869:Bi(d);if(c.hK()!=(-2147483602)){d=new CR;Dc(d,c,b,e);}else if(B_(a,32)){d=new RR;Dc(d,c,b,e);}else{d=new Ov;f=Pu(a.dr);Dc(d,c,b,e);d.kJ=f;}c.P(d);return d;case -536870849:Bi(d);d=new FU;Dc(d,c,b,(-536870849));c.P(b);return d;case -536870789:h=new Fc;d=Fb(d);e=a.eO+1|0;a.eO=e;Jd(h,d,c,b,(-536870849),e);c.P(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bi(d);d=new YA;ET(d,f,b,e);f.d=d;return d;case -2147483585:Bi(d);c=new WM;ET(c,f,b,(-2147483585));return c;case -2147483525:c=new Pe;Sz(c,Fb(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bi(d);d=new Qw;ET(d,f,b,e);f.d=d;return d;case -1073741761:Bi(d);c=new Uu;ET(c,f,b,(-1073741761));return c;case -1073741701:c=new Rr;Sz(c,Fb(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bi(d);d=AUl(f,b,e);f.d=d;return d;case -536870849:Bi(d);c
=new Ez;ET(c,f,b,(-536870849));return c;case -536870789:return ATt(Fb(d),f,b,(-536870789));default:}return c;}
function XL(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof FB;while(true){a:{e=a.g;f=e.bi;if((f&(-2147418113))==(-2147483608)){Bi(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dr=g;else{if(f!=(-1073741784))g=a.dr;c=Yb(a,f,g,b);e=a.g;if(e.bi!=(-536870871))K(B9(B(31),e.bP,e.c$));Bi(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bi(e);c
=AQz(0);break a;case -2147483577:Bi(e);c=new Oq;BO(c);break a;case -2147483558:Bi(e);c=new Xs;h=a.by+1|0;a.by=h;ADV(c,h);break a;case -2147483550:Bi(e);c=AQz(1);break a;case -2147483526:Bi(e);c=new W_;BO(c);break a;case -536870876:Bi(e);a.by=a.by+1|0;if(B_(a,8)){if(B_(a,1)){c=ATH(a.by);break a;}c=AS0(a.by);break a;}if(B_(a,1)){c=ATW(a.by);break a;}c=AUy(a.by);break a;case -536870866:Bi(e);if(B_(a,32)){c=AUR();break a;}c=AUr(Pu(a.dr));break a;case -536870821:Bi(e);i=0;c=a.g;if(c.bi==(-536870818)){i=1;Bi(c);}c
=KV(a,F7(a,i));c.P(b);e=a.g;if(e.bi!=(-536870819))K(B9(B(31),e.bP,e.c$));OY(e,1);Bi(a.g);break a;case -536870818:Bi(e);a.by=a.by+1|0;if(!B_(a,8)){c=new Kw;BO(c);break a;}c=new NC;e=Pu(a.dr);BO(c);c.rh=e;break a;case 0:j=e.eU;if(j!==null)c=KV(a,j);else{if(Di(e)){c=GR(b);break a;}c=AAe(f&65535);}Bi(a.g);break a;default:break b;}Bi(e);c=new Kw;BO(c);break a;}h=(f&2147483647)-48|0;if(a.gm<h)K(B9(B(31),Fk(e),Og(a.g)));Bi(e);a.by=a.by+1|0;c=!B_(a,2)?AS7(h,a.by):B_(a,64)?ATI(h,a.by):AU1(h,a.by);a.km.data[h].kk=1;a.nA
=1;break a;}if(f>=0&&!GT(e)){c=X6(a,f);Bi(a.g);}else if(f==(-536870788))c=GR(b);else{if(f!=(-536870871)){b=new IV;c=!GT(a.g)?Xq(f&65535):a.g.eU.cw();e=a.g;Jn(b,c,e.bP,e.c$);K(b);}if(d){b=new IV;e=a.g;Jn(b,B(31),e.bP,e.c$);K(b);}c=GR(b);}}}if(f!=(-16777176))break;}return c;}
function F7(a,b){var c,d,e,f,g,h,i,j,$$je;c=AQ7(B_(a,2),B_(a,64));Et(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Di(a.g))break a;h=a.g;b=h.bi;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cx(c,d);d=Bi(a.g);h=a.g;if(h.bi!=(-536870874)){d=38;break d;}if(h.j==(-536870821)){Bi(h);e=1;d=(-1);break d;}Bi(h);if(g){c=F7(a,0);break d;}if(a.g.bi==(-536870819))break d;Xf(c,F7(a,0));break d;case -536870867:if(!g){b=h.j;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bi(h);h=a.g;i=h.bi;if(GT(h))break c;if
(i<0){j=a.g.j;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Kp(i))break e;i=i&65535;break e;}catch($$e){$$je=Ei($$e);if($$je instanceof D4){break b;}else{throw $$e;}}}try{BT(c,d,i);}catch($$e){$$je=Ei($$e);if($$je instanceof D4){break b;}else{throw $$e;}}Bi(a.g);d=(-1);break d;}}if(d>=0)Cx(c,d);d=45;Bi(a.g);break d;case -536870821:if(d>=0){Cx(c,d);d=(-1);}Bi(a.g);j=0;h=a.g;if(h.bi==(-536870818)){Bi(h);j=1;}if(!e)YO(c,F7(a,j));else Xf(c,F7(a,j));e=0;Bi(a.g);break d;case -536870819:if(d>=0)Cx(c,
d);d=93;Bi(a.g);break d;case -536870818:if(d>=0)Cx(c,d);d=94;Bi(a.g);break d;case 0:if(d>=0)Cx(c,d);h=a.g.eU;if(h===null)d=0;else{AEX(c,h);d=(-1);}Bi(a.g);break d;default:}if(d>=0)Cx(c,d);d=Bi(a.g);}g=0;}K(B9(B(31),J1(a),a.g.c$));}K(B9(B(31),J1(a),a.g.c$));}if(!f){if(d>=0)Cx(c,d);return c;}K(B9(B(31),J1(a),a.g.c$-1|0));}
function X6(a,b){var c,d,e;c=Mf(b);if(B_(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AHe(b&65535);}if(B_(a,64)&&b>128){if(c){d=new MQ;DA(d);d.bM=2;d.qK=GF(GE(b));return d;}if(O6(b))return ANd(b&65535);if(!SW(b))return AOO(b&65535);return AKv(b&65535);}}if(!c){if(O6(b))return ANd(b&65535);if(!SW(b))return AAe(b&65535);return AKv(b&65535);}d=new DV;DA(d);d.bM=2;d.fQ=b;e=(Gw(b)).data;d.jQ=e[0];d.ir=e[1];return d;}
function KV(a,b){var c,d,e;if(!AB$(b)){if(!b.L){if(b.gZ())return AJU(b);return AQB(b);}if(!b.gZ())return ALd(b);c=new Jf;UK(c,b);return c;}c=Zf(b);d=new M6;BO(d);d.pn=c;d.vZ=c.bh;if(!b.L){if(b.gZ())return ACS(AJU(HA(b)),d);return ACS(AQB(HA(b)),d);}if(!b.gZ())return ACS(ALd(HA(b)),d);c=new Qs;e=new Jf;UK(e,HA(b));AED(c,e,d);return c;}
function HB(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B_(a,b){return (a.dr&b)!=b?0:1;}
function Te(){C.call(this);this.oo=null;}
function AGu(a,b){b.ec=a.oo.ec;}
var Gx=F(Ck);
var AYH=null;var AYG=null;var AYM=null;function Vf(){Vf=Bm(Gx);AIs();}
function AKS(a,b){var c=new Gx();Z9(c,a,b);return c;}
function Z9(a,b,c){Vf();C_(a,b,c);}
function AIs(){var b;AYH=AKS(B(409),0);b=AKS(B(410),1);AYG=b;AYM=H(Gx,[AYH,b]);}
function Tp(){C.call(this);this.sZ=null;}
function ALr(a,b){Dt(a.sZ,b);}
function BD(){var a=this;C.call(a);a.d=null;a.cj=0;a.oH=null;a.hH=0;}
var AVE=0;function BO(a){var b,c;b=new Fi;c=AVE;AVE=c+1|0;J6(b,c);a.oH=Mi(b);}
function KS(a,b){var c,d;c=new Fi;d=AVE;AVE=d+1|0;J6(c,d);a.oH=Mi(c);a.d=b;}
function HJ(a,b,c,d){var e;e=d.x;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function HX(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHI(a,b){a.hH=b;}
function AGT(a){return a.hH;}
function AP2(a){return a.d;}
function AQX(a,b){a.d=b;}
function AQU(a,b){return 1;}
function ARS(a){return null;}
function Ja(a){var b;a.cj=1;b=a.d;if(b!==null){if(!b.cj){b=b.ft();if(b!==null){a.d.cj=1;a.d=b;}a.d.ej();}else if(b instanceof GA&&b.eo.kk)a.d=b.d;}}
function AEO(){AVE=1;}
var UT=F();
var AYz=null;function ATg(){ATg=Bm(UT);AGx();}
function AGx(){var b,c;Vf();b=BG((AYM.eX()).data.length);c=b.data;AYz=b;c[AYH.c2]=1;c[AYG.c2]=2;}
function Pp(){C.call(this);this.qc=null;}
function AHS(a,b){UL(IJ(a.qc),b,AXg,Zb(B(411)));}
function Wp(){C.call(this);this.ue=null;}
function AJw(a,b){var c,d;c=a.ue;d=b.hB;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function YC(){var a=this;C.call(a);a.qb=null;a.qa=null;}
function AHD(a){var b,c;b=a.qb;c=a.qa;b.h5.s3(c);}
function CP(){var a=this;BD.call(a);a.kk=0;a.dA=0;}
var AYL=null;function Mv(){Mv=Bm(CP);AIX();}
function AUt(a){var b=new CP();Fn(b,a);return b;}
function Fn(a,b){Mv();BO(a);a.dA=b;}
function AGm(a,b,c,d){var e,f;e=IA(d,a.dA);JD(d,a.dA,b);f=a.d.c(b,c,d);if(f<0)JD(d,a.dA,e);return f;}
function AMj(a){return a.dA;}
function AGH(a,b){return 0;}
function AIX(){var b;b=new Ol;BO(b);AYL=b;}
function GO(){var a=this;C.call(a);a.bg=null;a.f6=0;a.eK=0;a.t7=0;a.kK=0;a.bi=0;a.j=0;a.rM=0;a.eU=null;a.eI=null;a.v=0;a.hR=0;a.c$=0;a.hg=0;a.bP=null;}
var AYN=null;var AYJ=null;var AYK=0;function OY(a,b){if(b>0&&b<3)a.eK=b;if(b==1){a.j=a.bi;a.eI=a.eU;a.v=a.hg;a.hg=a.c$;E5(a);}}
function GT(a){return a.eU===null?0:1;}
function JM(a){return a.eI===null?0:1;}
function Bi(a){E5(a);return a.kK;}
function Fb(a){var b;b=a.eU;E5(a);return b;}
function E5(a){var b,c,d,e,f,g,h,$$je;a.kK=a.bi;a.bi=a.j;a.eU=a.eI;a.c$=a.hg;a.hg=a.v;while(true){b=0;c=a.v>=a.bg.data.length?0:LO(a);a.j=c;a.eI=null;if(a.eK==4){if(c!=92)return;c=a.v;d=a.bg.data;c=c>=d.length?0:d[BU(a)];a.j=c;switch(c){case 69:break;default:a.j=92;a.v=a.hR;return;}a.eK=a.t7;a.j=a.v>(a.bg.data.length-2|0)?0:LO(a);}a:{c=a.j;if(c!=92){e=a.eK;if(e==1)switch(c){case 36:a.j=(-536870876);break a;case 40:if(a.bg.data[a.v]!=63){a.j=(-2147483608);break a;}BU(a);c=a.bg.data[a.v];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.j=(-134217688);BU(a);break b;default:K(B9(B(31),Fk(a),a.v));}a.j=(-67108824);BU(a);}else{switch(c){case 33:break;case 60:BU(a);c=a.bg.data[a.v];e=1;break b;case 61:a.j=(-536870872);BU(a);break b;case 62:a.j=(-33554392);BU(a);break b;default:f=AEP(a);a.j=f;if(f<256){a.f6=f;f=f<<16;a.j=f;a.j=(-1073741784)|f;break b;}f=f&255;a.j=f;a.f6=f;f=f<<16;a.j=f;a.j=(-16777176)|f;break b;}a.j=(-268435416);BU(a);}}if(!e)break;}break a;case 41:a.j=(-536870871);break a;case 42:case 43:case 63:e
=a.v;d=a.bg.data;switch(e>=d.length?42:d[e]){case 43:a.j=c|(-2147483648);BU(a);break a;case 63:a.j=c|(-1073741824);BU(a);break a;default:}a.j=c|(-536870912);break a;case 46:a.j=(-536870866);break a;case 91:a.j=(-536870821);OY(a,2);break a;case 93:if(e!=2)break a;a.j=(-536870819);break a;case 94:a.j=(-536870818);break a;case 123:a.eI=AEf(a,c);break a;case 124:a.j=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.j=(-536870874);break a;case 45:a.j=(-536870867);break a;case 91:a.j=(-536870821);break a;case 93:a.j
=(-536870819);break a;case 94:a.j=(-536870818);break a;default:}}else{c=a.v>=(a.bg.data.length-2|0)?(-1):LO(a);c:{a.j=c;switch(c){case -1:K(B9(B(31),Fk(a),a.v));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.j
=ACC(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eK!=1)break a;a.j=(-2147483648)|c;break a;case 65:a.j=(-2147483583);break a;case 66:a.j=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(B9(B(31),Fk(a),a.v));case 68:case 83:case 87:case 100:case 115:case 119:a.eI=Sp(HC(a.bg,
a.hR,1),0);a.j=0;break a;case 71:a.j=(-2147483577);break a;case 80:case 112:break c;case 81:a.t7=a.eK;a.eK=4;b=1;break a;case 90:a.j=(-2147483558);break a;case 97:a.j=7;break a;case 98:a.j=(-2147483550);break a;case 99:c=a.v;d=a.bg.data;if(c>=(d.length-2|0))K(B9(B(31),Fk(a),a.v));a.j=d[BU(a)]&31;break a;case 101:a.j=27;break a;case 102:a.j=12;break a;case 110:a.j=10;break a;case 114:a.j=13;break a;case 116:a.j=9;break a;case 117:a.j=PS(a,4);break a;case 120:a.j=PS(a,2);break a;case 122:a.j=(-2147483526);break a;default:}break a;}g
=ACm(a);h=0;if(a.j==80)h=1;try{a.eI=Sp(g,h);}catch($$e){$$je=Ei($$e);if($$je instanceof Ji){K(B9(B(31),Fk(a),a.v));}else{throw $$e;}}a.j=0;}}if(b)continue;else break;}}
function ACm(a){var b,c,d,e,f,g;b=new M;F2(b,10);c=a.v;d=a.bg;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=HC(d,BU(a),1);f=new M;O(f);G(G(f,B(412)),b);return N(f);}BU(a);c=0;a:{while(true){g=a.v;d=a.bg.data;if(g>=(d.length-2|0))break;c=d[BU(a)];if(c==125)break a;BE(b,c);}}if(c!=125)K(B9(B(31),a.bP,a.v));}if(!b.Q)K(B9(B(31),a.bP,a.v));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(412)),f);return N(b);}b:{c:{if(I(f)>3){if(KJ(f,B(412)))break c;if(KJ(f,B(413)))break c;}break b;}f=Dj(f,2);}return f;}
function AEf(a,b){var c,d,e,f,g,$$je;c=new M;F2(c,4);d=(-1);e=2147483647;a:{while(true){f=a.v;g=a.bg.data;if(f>=g.length)break a;b=g[BU(a)];if(b==125)break a;if(b==44&&d<0)try{d=Jz(DU(c),10);AEl(c,0,Zs(c));continue;}catch($$e){$$je=Ei($$e);if($$je instanceof Dd){break;}else{throw $$e;}}BE(c,b&65535);}K(B9(B(31),a.bP,a.v));}if(b!=125)K(B9(B(31),a.bP,a.v));if(c.Q>0)b:{try{e=Jz(DU(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ei($$e);if($$je instanceof Dd){}else{throw $$e;}}K(B9(B(31),a.bP,a.v));}else if
(d<0)K(B9(B(31),a.bP,a.v));if((d|e|(e-d|0))<0)K(B9(B(31),a.bP,a.v));b=a.v;g=a.bg.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.j=(-2147483525);BU(a);break c;case 63:a.j=(-1073741701);BU(a);break c;default:}a.j=(-536870789);}c=new Nf;c.eJ=d;c.eF=e;return c;}
function Fk(a){return a.bP;}
function Di(a){return !a.bi&&!a.j&&a.v==a.rM&&!GT(a)?1:0;}
function Kp(b){return b<0?0:1;}
function E1(a){return !Di(a)&&!GT(a)&&Kp(a.bi)?1:0;}
function Oi(a){var b;b=a.bi;return b<=56319&&b>=55296?1:0;}
function VI(a){var b;b=a.bi;return b<=57343&&b>=56320?1:0;}
function SW(b){return b<=56319&&b>=55296?1:0;}
function O6(b){return b<=57343&&b>=56320?1:0;}
function PS(a,b){var c,d,e,f,$$je;c=new M;F2(c,b);d=a.bg.data.length-2|0;e=0;while(true){f=BF(e,b);if(f>=0)break;if(a.v>=d)break;BE(c,a.bg.data[BU(a)]);e=e+1|0;}if(!f)a:{try{b=Jz(DU(c),16);}catch($$e){$$je=Ei($$e);if($$je instanceof Dd){break a;}else{throw $$e;}}return b;}K(B9(B(31),a.bP,a.v));}
function ACC(a){var b,c,d,e,f,g;b=3;c=1;d=a.bg.data;e=d.length-2|0;f=Vb(d[a.v],8);switch(f){case -1:break;default:if(f>3)b=2;BU(a);a:{while(true){if(c>=b)break a;g=a.v;if(g>=e)break a;g=Vb(a.bg.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BU(a);c=c+1|0;}}return f;}K(B9(B(31),a.bP,a.v));}
function AEP(a){var b,c,d,e;b=1;c=a.f6;a:while(true){d=a.v;e=a.bg.data;if(d>=e.length)K(B9(B(31),a.bP,d));b:{c:{switch(e[d]){case 41:BU(a);return c|256;case 45:if(!b)K(B9(B(31),a.bP,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BU(a);}BU(a);return c;}
function BU(a){var b,c,d,e,f;b=a.v;a.hR=b;if(!(a.f6&4))a.v=b+1|0;else{c=a.bg.data.length-2|0;a.v=b+1|0;a:while(true){d=a.v;if(d<c&&Ro(a.bg.data[d])){a.v=a.v+1|0;continue;}d=a.v;if(d>=c)break;e=a.bg.data;if(e[d]!=35)break;a.v=d+1|0;while(true){f=a.v;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.v=f+1|0;}}}return a.hR;}
function AD8(b){return AYN.CR(b);}
function LO(a){var b,c,d,e;b=a.bg.data[BU(a)];if(CF(b)){c=a.hR+1|0;d=a.bg.data;if(c<d.length){e=d[c];if(C6(e)){BU(a);return Eu(b,e);}}}return b;}
function Og(a){return a.c$;}
function IV(){var a=this;BI.call(a);a.xJ=null;a.xd=null;a.qw=0;}
function B9(a,b,c){var d=new IV();Jn(d,a,b,c);return d;}
function Jn(a,b,c,d){Y(a);a.qw=(-1);a.xJ=b;a.xd=c;a.qw=d;}
function Xw(){C.call(this);this.tT=null;}
function AOc(a,b){var c,d;c=a.tT;d=0;while(d<b.length){Zo(c,b[d]);d=d+1|0;}}
var ACg=F(0);
function UE(){var a=this;C.call(a);a.pt=null;a.pv=null;a.px=null;}
function ANN(a,b){a.pt.l(AS1(a.pv,b,a.px));}
var R$=F(CP);
function AFV(a,b,c,d){var e;e=a.dA;BJ(d,e,b-Dl(d,e)|0);return a.d.c(b,c,d);}
function APs(a,b){return 0;}
var X8=F(CP);
function AHG(a,b,c,d){return b;}
var PV=F(CP);
function AGQ(a,b,c,d){if(Dl(d,a.dA)!=b)b=(-1);return b;}
function Tk(){CP.call(this);this.nn=0;}
function AF0(a,b,c,d){var e;e=a.dA;BJ(d,e,b-Dl(d,e)|0);a.nn=b;return b;}
function ANY(a,b){return 0;}
var FB=F(CP);
function ARd(a,b,c,d){if(d.jC!=1&&b!=d.x)return (-1);d.iV=1;JD(d,0,b);return b;}
function BV(){BD.call(this);this.bM=0;}
function DA(a){BO(a);a.bM=1;}
function ASh(a,b,c,d){var e;if((b+a.b0()|0)>d.x){d.dk=1;return (-1);}e=a.bx(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AQp(a){return a.bM;}
function AKT(a,b){return 1;}
var ADT=F(BV);
function GR(a){var b=new ADT();AMt(b,a);return b;}
function AMt(a,b){KS(a,b);a.bM=1;a.hH=1;a.bM=0;}
function APT(a,b,c){return 0;}
function AI3(a,b,c,d){var e,f,g;e=d.x;f=d.cJ;while(true){g=BF(b,e);if(g>0)return (-1);if(g<0&&C6(L(c,b))&&b>f&&CF(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AHv(a,b,c,d,e){var f,g;f=e.x;g=e.cJ;while(true){if(c<b)return (-1);if(c<f&&C6(L(d,c))&&c>g&&CF(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFY(a,b){return 0;}
function BS(){var a=this;BD.call(a);a.bF=null;a.eo=null;a.Z=0;}
function ATQ(a,b){var c=new BS();FC(c,a,b);return c;}
function FC(a,b,c){BO(a);a.bF=b;a.eo=c;a.Z=c.dA;}
function AJF(a,b,c,d){var e,f,g,h;if(a.bF===null)return (-1);e=FF(d,a.Z);Dz(d,a.Z,b);f=a.bF.i;g=0;while(true){if(g>=f){Dz(d,a.Z,e);return (-1);}h=(Bs(a.bF,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANQ(a,b){a.eo.d=b;}
function ALH(a,b){var c;a:{c=a.bF;if(c!==null){c=B8(c);while(true){if(!Cc(c))break a;if(!(B$(c)).bU(b))continue;else return 1;}}}return 0;}
function AOA(a,b){return IA(b,a.Z)>=0&&FF(b,a.Z)==IA(b,a.Z)?0:1;}
function AHr(a){var b,c,d,e;a.cj=1;b=a.eo;if(b!==null&&!b.cj)Ja(b);a:{b=a.bF;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bs(a.bF,d);e=b.ft();if(e===null)e=b;else{b.cj=1;D7(a.bF,d);RO(a.bF,d,e);}if(!e.cj)e.ej();d=d+1|0;}}}if(a.d!==null)Ja(a);}
var I6=F(BS);
function ANz(a,b,c,d){var e,f,g,h;e=Dl(d,a.Z);BJ(d,a.Z,b);f=a.bF.i;g=0;while(true){if(g>=f){BJ(d,a.Z,e);return (-1);}h=(Bs(a.bF,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AO2(a,b){return !Dl(b,a.Z)?0:1;}
var DR=F(I6);
function AH$(a,b,c,d){var e,f,g;e=Dl(d,a.Z);BJ(d,a.Z,b);f=a.bF.i;g=0;while(g<f){if((Bs(a.bF,g)).c(b,c,d)>=0)return a.d.c(a.eo.nn,c,d);g=g+1|0;}BJ(d,a.Z,e);return (-1);}
function AOH(a,b){a.d=b;}
var MZ=F(DR);
function ANJ(a,b,c,d){var e,f;e=a.bF.i;f=0;while(f<e){if((Bs(a.bF,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AQ2(a,b){return 0;}
var WB=F(DR);
function AGC(a,b,c,d){var e,f;e=a.bF.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bF,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AQt(a,b){return 0;}
var Rq=F(DR);
function AHl(a,b,c,d){var e,f,g,h;e=a.bF.i;f=d.i4?0:d.cJ;a:{g=a.d.c(b,c,d);if(g>=0){BJ(d,a.Z,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bF,h)).cp(f,b,c,d)>=0){BJ(d,a.Z,(-1));return g;}h=h+1|0;}}}return (-1);}
function ASI(a,b){return 0;}
var T4=F(DR);
function AFs(a,b,c,d){var e,f;e=a.bF.i;BJ(d,a.Z,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bF,f)).cp(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function APf(a,b){return 0;}
function GA(){BS.call(this);this.cU=null;}
function AUf(a,b){var c=new GA();Z1(c,a,b);return c;}
function Z1(a,b,c){BO(a);a.cU=b;a.eo=c;a.Z=c.dA;}
function AFP(a,b,c,d){var e,f;e=FF(d,a.Z);Dz(d,a.Z,b);f=a.cU.c(b,c,d);if(f>=0)return f;Dz(d,a.Z,e);return (-1);}
function AL2(a,b,c,d){var e;e=a.cU.cm(b,c,d);if(e>=0)Dz(d,a.Z,e);return e;}
function APz(a,b,c,d,e){var f;f=a.cU.cp(b,c,d,e);if(f>=0)Dz(e,a.Z,f);return f;}
function ALC(a,b){return a.cU.bU(b);}
function ANU(a){var b;b=new Nj;Z1(b,a.cU,a.eo);a.d=b;return b;}
function ARV(a){var b;a.cj=1;b=a.eo;if(b!==null&&!b.cj)Ja(b);b=a.cU;if(b!==null&&!b.cj){b=b.ft();if(b!==null){a.cU.cj=1;a.cU=b;}a.cU.ej();}}
var GQ=F();
function W(){var a=this;GQ.call(a);a.bh=0;a.cg=0;a.K=null;a.jI=null;a.kd=null;a.L=0;}
var AYO=null;function OS(){OS=Bm(W);AHU();}
function Bt(a){var b;OS();b=new Xp;b.C=BG(64);a.K=b;}
function AGE(a){return null;}
function AF$(a){return a.K;}
function AB$(a){var b,c,d,e,f;if(!a.cg)b=Hi(a.K,0)>=2048?0:1;else{a:{c=a.K;b=0;d=c.bs;if(b<d){e=c.C.data;f=(e[0]^(-1))>>>0|0;if(f)b=Ir(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Ir(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AJT(a){return a.L;}
function AQj(a){return a;}
function Zf(a){var b,c;if(a.kd===null){b=a.eT();c=new WO;c.x$=a;c.nR=b;Bt(c);a.kd=c;Et(c,a.cg);}return a.kd;}
function HA(a){var b,c;if(a.jI===null){b=a.eT();c=new WN;c.xM=a;c.tz=b;c.uh=a;Bt(c);a.jI=c;Et(c,a.bh);a.jI.L=a.L;}return a.jI;}
function ARR(a){return 0;}
function Et(a,b){var c;c=a.bh;if(c^b){a.bh=c?0:1;a.cg=a.cg?0:1;}if(!a.L)a.L=1;return a;}
function AI5(a){return a.bh;}
function Km(b,c){OS();return b.k(c);}
function Ip(b,c){var d,e;OS();if(b.df()!==null&&c.df()!==null){b=b.df();c=c.df();d=Z(b.C.data.length,c.C.data.length);e=0;a:{while(e<d){if(b.C.data[e]&c.C.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Sp(b,c){var d,e,f;OS();d=0;while(true){APd();e=AYP.data;if(d>=e.length){f=new Ji;Bo(f,B(31));f.yv=B(31);f.yb=b;K(f);}e=e[d].data;if(Bn(b,e[0]))break;d=d+1|0;}return ADh(e[1],c);}
function AHU(){var b;b=new G_;APd();AYO=b;}
function ZQ(){var a=this;W.call(a);a.lr=0;a.nm=0;a.gn=0;a.k4=0;a.dU=0;a.fn=0;a.H=null;a.bE=null;}
function Dm(){var a=new ZQ();ASr(a);return a;}
function AQ7(a,b){var c=new ZQ();AHH(c,a,b);return c;}
function ASr(a){Bt(a);a.H=ASK();}
function AHH(a,b,c){Bt(a);a.H=ASK();a.lr=b;a.nm=c;}
function Cx(a,b){a:{if(a.lr){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dU){MD(a.H,HB(b&65535));break a;}LJ(a.H,HB(b&65535));break a;}if(a.nm&&b>128){a.gn=1;b=GF(GE(b));}}}if(!(!SW(b)&&!O6(b))){if(a.k4)MD(a.K,b-55296|0);else LJ(a.K,b-55296|0);}if(a.dU)MD(a.H,b);else LJ(a.H,b);if(!a.L&&Mf(b))a.L=1;return a;}
function AEX(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(a.k4){if(!b.cg)FW(a.K,b.eT());else Da(a.K,b.eT());}else if(!b.cg)FP(a.K,b.eT());else{Ft(a.K,b.eT());Da(a.K,b.eT());a.cg=a.cg?0:1;a.k4=1;}if(!a.fn&&b.df()!==null){if(a.dU){if(!b.bh)FW(a.H,b.df());else Da(a.H,b.df());}else if(!b.bh)FP(a.H,b.df());else{Ft(a.H,b.df());Da(a.H,b.df());a.bh=a.bh?0:1;a.dU=1;}}else{c=a.bh;d=a.bE;if(d!==null){if(!c){e=new OK;e.wh=a;e.uO=c;e.t3=d;e.tR=b;Bt(e);a.bE=e;}else{e=new OL;e.yD=a;e.q_=c;e.qP=d;e.p3=b;Bt(e);a.bE=e;}}else{if(c&&!a.dU
&&Mj(a.H)){d=new OH;d.xc=a;d.qY=b;Bt(d);a.bE=d;}else if(!c){d=new OF;d.kN=a;d.j0=c;d.ov=b;Bt(d);a.bE=d;}else{d=new OG;d.lE=a;d.j8=c;d.tW=b;Bt(d);a.bE=d;}a.fn=1;}}return a;}
function BT(a,b,c){var d,e,f,g,h;if(b>c){d=new BI;Y(d);K(d);}a:{b:{if(!a.lr){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cx(a,b);b=b+1|0;}}if(!a.dU)H4(a.H,b,c+1|0);else{d=a.H;c=c+1|0;if(b>c){d=new BA;Y(d);K(d);}e=d.bs;if(b<e){f=Z(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.C.data;h[g]=h[g]&(Ik(d,b)|HQ(d,f));}else{h=d.C.data;h[g]=h[g]&Ik(d,b);e=g+1|0;while(e<c){d.C.data[e]=0;e=e+1|0;}if(f&31){h=d.C.data;h[c]=h[c]&HQ(d,f);}}Hc(d);}}}}return a;}
function YO(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(b.gn)a.gn=1;c=a.cg;if(!(c^b.cg)){if(!c)FP(a.K,b.K);else Da(a.K,b.K);}else if(c)FW(a.K,b.K);else{Ft(a.K,b.K);Da(a.K,b.K);a.cg=1;}if(!a.fn&&CV(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)FP(a.H,CV(b));else Da(a.H,CV(b));}else if(c)FW(a.H,CV(b));else{Ft(a.H,CV(b));Da(a.H,CV(b));a.bh=1;}}else{c=a.bh;d=a.bE;if(d!==null){if(!c){e=new OA;e.v4=a;e.s2=c;e.tU=d;e.uw=b;Bt(e);a.bE=e;}else{e=new Pl;e.wr=a;e.ut=c;e.m3=d;e.np=b;Bt(e);a.bE=e;}}else{if(!a.dU&&Mj(a.H)){if(!c){d=new OI;d.yJ
=a;d.pF=b;Bt(d);a.bE=d;}else{d=new OJ;d.ww=a;d.ud=b;Bt(d);a.bE=d;}}else if(!c){d=new OM;d.s5=a;d.rs=b;d.qT=c;Bt(d);a.bE=d;}else{d=new ON;d.rQ=a;d.sa=b;d.sn=c;Bt(d);a.bE=d;}a.fn=1;}}}
function Xf(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(b.gn)a.gn=1;c=a.cg;if(!(c^b.cg)){if(!c)Da(a.K,b.K);else FP(a.K,b.K);}else if(!c)FW(a.K,b.K);else{Ft(a.K,b.K);Da(a.K,b.K);a.cg=0;}if(!a.fn&&CV(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Da(a.H,CV(b));else FP(a.H,CV(b));}else if(!c)FW(a.H,CV(b));else{Ft(a.H,CV(b));Da(a.H,CV(b));a.bh=0;}}else{c=a.bh;d=a.bE;if(d!==null){if(!c){e=new OC;e.wg=a;e.s_=c;e.nP=d;e.q7=b;Bt(e);a.bE=e;}else{e=new OD;e.wB=a;e.sC=c;e.mS=d;e.s1=b;Bt(e);a.bE=e;}}else{if(!a.dU&&Mj(a.H)){if(!c){d=new Ox;d.wx
=a;d.pf=b;Bt(d);a.bE=d;}else{d=new Oy;d.yz=a;d.pk=b;Bt(d);a.bE=d;}}else if(!c){d=new OE;d.vG=a;d.uL=b;d.r4=c;Bt(d);a.bE=d;}else{d=new Ow;d.r2=a;d.sH=b;d.rb=c;Bt(d);a.bE=d;}a.fn=1;}}}
function C0(a,b){var c;c=a.bE;if(c!==null)return a.bh^c.k(b);return a.bh^Dv(a.H,b);}
function CV(a){if(!a.fn)return a.H;return null;}
function AIW(a){return a.K;}
function AQI(a){var b,c;if(a.bE!==null)return a;b=CV(a);c=new OB;c.v0=a;c.iu=b;Bt(c);return Et(c,a.bh);}
function AMW(a){var b,c,d;b=new M;O(b);c=Hi(a.H,0);while(c>=0){Is(b,Gw(c));BE(b,124);c=Hi(a.H,c+1|0);}d=b.Q;if(d>0)WD(b,d-1|0);return N(b);}
function AI8(a){return a.gn;}
function Ji(){var a=this;Bq.call(a);a.yv=null;a.yb=null;}
function D3(){BD.call(this);this.J=null;}
function Dc(a,b,c,d){KS(a,c);a.J=b;a.hH=d;}
function ASq(a){return a.J;}
function APC(a,b){return !a.J.bU(b)&&!a.d.bU(b)?0:1;}
function AQ9(a,b){return 1;}
function AMr(a){var b;a.cj=1;b=a.d;if(b!==null&&!b.cj){b=b.ft();if(b!==null){a.d.cj=1;a.d=b;}a.d.ej();}b=a.J;if(b!==null){if(!b.cj){b=b.ft();if(b!==null){a.J.cj=1;a.J=b;}a.J.ej();}else if(b instanceof GA&&b.eo.kk)a.J=b.d;}}
function C4(){D3.call(this);this.bd=null;}
function AUl(a,b,c){var d=new C4();ET(d,a,b,c);return d;}
function ET(a,b,c,d){Dc(a,b,c,d);a.bd=b;}
function AFu(a,b,c,d){var e,f;e=0;a:{while((b+a.bd.b0()|0)<=d.x){f=a.bd.bx(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.bd.b0()|0;e=e+(-1)|0;}return f;}
function E6(){C4.call(this);this.jB=null;}
function ATt(a,b,c,d){var e=new E6();Sz(e,a,b,c,d);return e;}
function Sz(a,b,c,d,e){ET(a,c,d,e);a.jB=b;}
function AGp(a,b,c,d){var e,f,g,h,i;e=a.jB;f=e.eJ;g=e.eF;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bd.b0()|0)>d.x)break a;i=a.bd.bx(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.bd.b0()|0;h=h+(-1)|0;}return i;}if((b+a.bd.b0()|0)>d.x){d.dk=1;return (-1);}i=a.bd.bx(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CR=F(D3);
function AFO(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.J.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Ez=F(C4);
function AL8(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ASL(a,b){a.d=b;a.J.P(b);}
var WQ=F(C4);
function AR_(a,b,c,d){while((b+a.bd.b0()|0)<=d.x&&a.bd.bx(b,c)>0){b=b+a.bd.b0()|0;}return a.d.c(b,c,d);}
function AMS(a,b,c,d){var e,f,g;e=a.d.cm(b,c,d);if(e<0)return (-1);f=e-a.bd.b0()|0;while(f>=b&&a.bd.bx(f,c)>0){g=f-a.bd.b0()|0;e=f;f=g;}return e;}
function Ba(){var a=this;C.call(a);a.lO=null;a.kL=null;}
function ADh(a,b){if(!b&&a.lO===null)a.lO=a.F();else if(b&&a.kL===null)a.kL=Et(a.F(),1);if(b)return a.kL;return a.lO;}
var Dd=F(BI);
function Nf(){var a=this;GQ.call(a);a.eJ=0;a.eF=0;}
function AM3(a){var b,c,d,e,f;b=a.eJ;c=a.eF;d=c==2147483647?B(31):Mi(AD7(c));e=new M;O(e);BE(e,123);f=U(e,b);BE(f,44);BE(G(f,d),125);return N(e);}
var Ol=F(BD);
function ALj(a,b,c,d){return b;}
function ANP(a,b){return 0;}
function Xp(){var a=this;C.call(a);a.C=null;a.bs=0;}
function ASK(){var a=new Xp();AG7(a);return a;}
function AG7(a){a.C=BG(0);}
function LJ(a,b){var c,d;c=b/32|0;if(b>=a.bs){Iw(a,c+1|0);a.bs=b+1|0;}d=a.C.data;d[c]=d[c]|1<<(b%32|0);}
function H4(a,b,c){var d,e,f,g,h;d=BF(b,c);if(d>0){e=new BA;Y(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bs){Iw(a,f+1|0);a.bs=c;}if(d==f){g=a.C.data;g[d]=g[d]|HQ(a,b)&Ik(a,c);}else{g=a.C.data;g[d]=g[d]|HQ(a,b);h=d+1|0;while(h<f){a.C.data[h]=(-1);h=h+1|0;}if(c&31){g=a.C.data;g[f]=g[f]|Ik(a,c);}}}
function HQ(a,b){return (-1)<<(b%32|0);}
function Ik(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function MD(a,b){var c,d;c=b/32|0;d=a.C.data;if(c<d.length){d[c]=d[c]&Kj((-2),b%32|0);if(b==(a.bs-1|0))Hc(a);}}
function Dv(a,b){var c,d;c=b/32|0;d=a.C.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Hi(a,b){var c,d,e,f;c=a.bs;if(b>=c)return (-1);d=b/32|0;e=a.C.data;f=e[d]>>>(b%32|0)|0;if(f)return Ir(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Ir(e[f])|0;f=f+1|0;}return (-1);}
function Iw(a,b){var c;c=a.C.data.length;if(c>=b)return;c=Bb((b*3|0)/2|0,(c*2|0)+1|0);a.C=Mq(a.C,c);}
function Hc(a){var b,c,d;b=(a.bs+31|0)/32|0;a.bs=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NY(a.C.data[c]);if(d<32)break;c=c+(-1)|0;a.bs=a.bs-32|0;}a.bs=a.bs-d|0;}}
function Da(a,b){var c,d,e,f;c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&b.C.data[d];d=d+1|0;}while(true){f=a.C.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bs=Z(a.bs,b.bs);Hc(a);}
function FW(a,b){var c,d,e;c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&(b.C.data[d]^(-1));d=d+1|0;}Hc(a);}
function FP(a,b){var c,d,e;c=Bb(a.bs,b.bs);a.bs=c;Iw(a,(c+31|0)/32|0);c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]|b.C.data[d];d=d+1|0;}}
function Ft(a,b){var c,d,e;c=Bb(a.bs,b.bs);a.bs=c;Iw(a,(c+31|0)/32|0);c=Z(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]^b.C.data[d];d=d+1|0;}Hc(a);}
function Mj(a){return a.bs?0:1;}
function M6(){var a=this;BS.call(a);a.pn=null;a.vZ=0;}
function Qs(){var a=this;BS.call(a);a.mc=null;a.lH=null;}
function ACS(a,b){var c=new Qs();AED(c,a,b);return c;}
function AED(a,b,c){BO(a);a.mc=b;a.lH=c;}
function AGk(a,b,c,d){var e,f,g,h,i;e=a.mc.c(b,c,d);if(e<0)a:{f=a.lH;g=d.cJ;e=d.x;h=b+1|0;e=BF(h,e);if(e>0){d.dk=1;e=(-1);}else{i=L(c,b);if(!f.pn.k(i))e=(-1);else{if(CF(i)){if(e<0&&C6(L(c,h))){e=(-1);break a;}}else if(C6(i)&&b>g&&CF(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function ANv(a,b){a.d=b;a.lH.d=b;a.mc.P(b);}
function AGV(a,b){return 1;}
function AGD(a,b){return 1;}
function DB(){var a=this;BS.call(a);a.dK=null;a.w7=0;}
function ALd(a){var b=new DB();UK(b,a);return b;}
function UK(a,b){BO(a);a.dK=b.jd();a.w7=b.bh;}
function AIM(a,b,c,d){var e,f,g,h;e=d.x;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(Hr(g,f)&&a.k(Eu(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AJk(a,b){return a.dK.k(b);}
function AGd(a,b){if(b instanceof DV)return Km(a.dK,b.fQ);if(b instanceof Em)return Km(a.dK,b.db);if(b instanceof DB)return Ip(a.dK,b.dK);if(!(b instanceof Eg))return 1;return Ip(a.dK,b.e8);}
function AK9(a){return a.dK;}
function AQd(a,b){a.d=b;}
function AI0(a,b){return 1;}
var Jf=F(DB);
function AKU(a,b){return a.dK.k(GF(GE(b)));}
function ZG(){var a=this;BV.call(a);a.qn=null;a.wS=0;}
function AJU(a){var b=new ZG();AM9(b,a);return b;}
function AM9(a,b){DA(a);a.qn=b.jd();a.wS=b.bh;}
function ALk(a,b,c){return !a.qn.k(EY(Ey(L(c,b))))?(-1):1;}
function Eg(){var a=this;BV.call(a);a.e8=null;a.xr=0;}
function AQB(a){var b=new Eg();AOk(b,a);return b;}
function AOk(a,b){DA(a);a.e8=b.jd();a.xr=b.bh;}
function MG(a,b,c){return !a.e8.k(L(c,b))?(-1):1;}
function ANS(a,b){if(b instanceof Em)return Km(a.e8,b.db);if(b instanceof Eg)return Ip(a.e8,b.e8);if(!(b instanceof DB)){if(!(b instanceof DV))return 1;return 0;}return Ip(a.e8,b.dK);}
function OW(){var a=this;BS.call(a);a.gJ=null;a.l2=null;a.jy=0;}
function AQO(a,b){var c=new OW();AFQ(c,a,b);return c;}
function AFQ(a,b,c){BO(a);a.gJ=b;a.jy=c;}
function AL7(a,b){a.d=b;}
function QE(a){if(a.l2===null)a.l2=F0(a.gJ);return a.l2;}
function AFi(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.x;f=BG(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?E8([k,l]):E8([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.jy;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gJ.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.jy==3){k=f[0];m=a.gJ.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.jy==2){b=f[0];m=a.gJ.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AGM(a,b){return b instanceof OW&&!Bn(QE(b),QE(a))?0:1;}
function AQN(a,b){return 1;}
function Em(){BV.call(this);this.db=0;}
function AAe(a){var b=new Em();AOo(b,a);return b;}
function AOo(a,b){DA(a);a.db=b;}
function AK5(a){return 1;}
function AJQ(a,b,c){return a.db!=L(c,b)?(-1):1;}
function AIH(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=GM(c,a.db,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AK_(a,b,c,d,e){var f;if(!(d instanceof Bv))return HX(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F5(d,a.db,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AQE(a,b){if(b instanceof Em)return b.db!=a.db?0:1;if(!(b instanceof Eg)){if(b instanceof DB)return b.k(a.db);if(!(b instanceof DV))return 1;return 0;}return MG(b,0,Xq(a.db))<=0?0:1;}
function AEn(){BV.call(this);this.mN=0;}
function AOO(a){var b=new AEn();AMP(b,a);return b;}
function AMP(a,b){DA(a);a.mN=EY(Ey(b));}
function AFd(a,b,c){return a.mN!=EY(Ey(L(c,b)))?(-1):1;}
function YQ(){var a=this;BV.call(a);a.uA=0;a.nH=0;}
function AHe(a){var b=new YQ();APa(b,a);return b;}
function APa(a,b){DA(a);a.uA=b;a.nH=HB(b);}
function AFH(a,b,c){return a.uA!=L(c,b)&&a.nH!=L(c,b)?(-1):1;}
function Ff(){var a=this;BS.call(a);a.hw=0;a.kB=null;a.j4=null;a.jZ=0;}
function AU6(a,b){var c=new Ff();N$(c,a,b);return c;}
function N$(a,b,c){BO(a);a.hw=1;a.j4=b;a.jZ=c;}
function ARU(a,b){a.d=b;}
function ANy(a,b,c,d){var e,f,g,h,i,j,k,l;e=BG(4);f=d.x;if(b>=f)return (-1);g=KF(a,b,c,f);h=b+a.hw|0;i=AD8(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dw(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=KF(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AD8(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.hw|0;if(h>=f){b=k;break a;}g=KF(a,h,c,f);b=k;}}}if(b!=a.jZ)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.j4.data[g])break;g=g+1|0;}return (-1);}
function Xe(a){var b,c;if(a.kB===null){b=new M;O(b);c=0;while(c<a.jZ){Is(b,Gw(a.j4.data[c]));c=c+1|0;}a.kB=N(b);}return a.kB;}
function KF(a,b,c,d){var e,f,g;a.hw=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(Hr(e,f)){g=BQ(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CF(g[0])&&C6(g[1])?Eu(g[0],g[1]):g[0];a.hw=2;}}return e;}
function ALl(a,b){return b instanceof Ff&&!Bn(Xe(b),Xe(a))?0:1;}
function AOK(a,b){return 1;}
var XM=F(Ff);
var Uf=F(Ff);
var Yz=F(CR);
function AHL(a,b,c,d){var e;while(true){e=a.J.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var PM=F(CR);
function AMF(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.J.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FU=F(CR);
function AP9(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.J.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function ARi(a,b){a.d=b;a.J.P(b);}
var Pr=F(FU);
function AK8(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AM4(a,b){a.d=b;}
function Fc(){var a=this;CR.call(a);a.f1=null;a.dn=0;}
function AYQ(a,b,c,d,e){var f=new Fc();Jd(f,a,b,c,d,e);return f;}
function Jd(a,b,c,d,e,f){Dc(a,c,d,e);a.f1=b;a.dn=f;}
function ASC(a,b,c,d){var e,f;e=Na(d,a.dn);if(!a.J.I(d))return a.d.c(b,c,d);if(e>=a.f1.eF)return a.d.c(b,c,d);f=a.dn;e=e+1|0;Ee(d,f,e);f=a.J.c(b,c,d);if(f>=0){Ee(d,a.dn,0);return f;}f=a.dn;e=e+(-1)|0;Ee(d,f,e);if(e>=a.f1.eJ)return a.d.c(b,c,d);Ee(d,a.dn,0);return (-1);}
var Np=F(Fc);
function AKm(a,b,c,d){var e,f,g;e=0;f=a.f1.eF;a:{while(true){g=a.J.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.f1.eJ)return (-1);return a.d.c(b,c,d);}
var RP=F(CR);
function AR0(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.J.c(b,c,d);}
var QD=F(FU);
function AGY(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.J.c(b,c,d);return e;}
var Vk=F(Fc);
function AF5(a,b,c,d){var e,f,g;e=Na(d,a.dn);if(!a.J.I(d))return a.d.c(b,c,d);f=a.f1;if(e>=f.eF){Ee(d,a.dn,0);return a.d.c(b,c,d);}if(e<f.eJ){Ee(d,a.dn,e+1|0);g=a.J.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Ee(d,a.dn,0);return g;}Ee(d,a.dn,e+1|0);g=a.J.c(b,c,d);}return g;}
var RR=F(D3);
function ASo(a,b,c,d){var e;e=d.x;if(e>b)return a.d.cp(b,e,c,d);return a.d.c(b,c,d);}
function AQl(a,b,c,d){var e;e=d.x;if(a.d.cp(b,e,c,d)>=0)return b;return (-1);}
function Ov(){D3.call(this);this.kJ=null;}
function ANV(a,b,c,d){var e,f;e=d.x;f=Vm(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cp(b,e,c,d);return a.d.c(b,c,d);}
function AFm(a,b,c,d){var e,f,g,h;e=d.x;f=a.d.cm(b,c,d);if(f<0)return (-1);g=Vm(a,f,e,c);if(g>=0)e=g;g=Bb(f,a.d.cp(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kJ.hA(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Vm(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kJ.hA(L(d,b)))break;b=b+1|0;}return b;}
var EN=F();
var AYR=null;var AYS=null;function Pu(b){var c;if(!(b&1)){c=AYS;if(c!==null)return c;c=new VP;AYS=c;return c;}c=AYR;if(c!==null)return c;c=new VO;AYR=c;return c;}
var YA=F(C4);
function AF7(a,b,c,d){var e;a:{while(true){if((b+a.bd.b0()|0)>d.x)break a;e=a.bd.bx(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var WM=F(Ez);
function AME(a,b,c,d){var e;if((b+a.bd.b0()|0)<=d.x){e=a.bd.bx(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var Pe=F(E6);
function APH(a,b,c,d){var e,f,g,h,i;e=a.jB;f=e.eJ;g=e.eF;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bd.b0()|0)>d.x)break a;i=a.bd.bx(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.bd.b0()|0)>d.x){d.dk=1;return (-1);}i=a.bd.bx(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qw=F(C4);
function ANM(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.bd.b0()|0)<=d.x){e=a.bd.bx(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Uu=F(Ez);
function AGc(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.J.c(b,c,d);}
var Rr=F(E6);
function APX(a,b,c,d){var e,f,g,h,i,j;e=a.jB;f=e.eJ;g=e.eF;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.bd.b0()|0)<=d.x){i=a.bd.bx(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bd.b0()|0)>d.x){d.dk=1;return (-1);}j=a.bd.bx(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Kw=F(BD);
function ALE(a,b,c,d){if(b&&!(d.fo&&b==d.cJ))return (-1);return a.d.c(b,c,d);}
function AKD(a,b){return 0;}
function AAo(){BD.call(this);this.t4=0;}
function AQz(a){var b=new AAo();AK0(b,a);return b;}
function AK0(a,b){BO(a);a.t4=b;}
function AGB(a,b,c,d){var e,f,g;e=b<d.x?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.i4?0:d.cJ;return (e!=32&&!QG(a,e,b,g,c)?0:1)^(f!=32&&!QG(a,f,b-1|0,g,c)?0:1)^a.t4?(-1):a.d.c(b,c,d);}
function AGK(a,b){return 0;}
function QG(a,b,c,d,e){var f;if(!Jx(b)&&b!=95){a:{if(Cv(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(Jx(f))return 0;if(Cv(f)!=6)return 1;}}return 1;}return 0;}
var Oq=F(BD);
function AKY(a,b,c,d){if(b!=d.hI)return (-1);return a.d.c(b,c,d);}
function ASx(a,b){return 0;}
function Xs(){BD.call(this);this.f9=0;}
function AUy(a){var b=new Xs();ADV(b,a);return b;}
function ADV(a,b){BO(a);a.f9=b;}
function AOu(a,b,c,d){var e,f,g;e=!d.fo?I(c):d.x;if(b>=e){BJ(d,a.f9,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BJ(d,a.f9,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BJ(d,a.f9,0);return a.d.c(b,c,d);}
function AHA(a,b){var c;c=!Dl(b,a.f9)?0:1;BJ(b,a.f9,(-1));return c;}
var W_=F(BD);
function ANr(a,b,c,d){if(b<(d.i4?I(c):d.x))return (-1);d.dk=1;d.xW=1;return a.d.c(b,c,d);}
function AFa(a,b){return 0;}
function NC(){BD.call(this);this.rh=null;}
function AHq(a,b,c,d){a:{if(b!=d.x){if(!b)break a;if(d.fo&&b==d.cJ)break a;if(a.rh.sE(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AJy(a,b){return 0;}
var AEc=F(BS);
function AUR(){var a=new AEc();ANe(a);return a;}
function ANe(a){BO(a);}
function AR6(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dk=1;return (-1);}g=L(c,b);if(CF(g)){h=b+2|0;if(h<=e&&Hr(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AGO(a,b){a.d=b;}
function AM$(a){return (-2147483602);}
function AGN(a,b){return 1;}
function ZN(){BS.call(this);this.lc=null;}
function AUr(a){var b=new ZN();AHy(b,a);return b;}
function AHy(a,b){BO(a);a.lc=b;}
function ANh(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dk=1;return (-1);}g=L(c,b);if(CF(g)){b=b+2|0;if(b<=e){h=L(c,f);if(Hr(g,h))return a.lc.hA(Eu(g,h))?(-1):a.d.c(b,c,d);}}return a.lc.hA(g)?(-1):a.d.c(f,c,d);}
function APn(a,b){a.d=b;}
function AE9(a){return (-2147483602);}
function ASe(a,b){return 1;}
function AD5(){BD.call(this);this.hl=0;}
function ATW(a){var b=new AD5();AJt(b,a);return b;}
function AJt(a,b){BO(a);a.hl=b;}
function ALq(a,b,c,d){var e;e=!d.fo?I(c):d.x;if(b>=e){BJ(d,a.hl,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BJ(d,a.hl,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AJr(a,b){var c;c=!Dl(b,a.hl)?0:1;BJ(b,a.hl,(-1));return c;}
function ACc(){BD.call(this);this.hu=0;}
function ATH(a){var b=new ACc();AJV(b,a);return b;}
function AJV(a,b){BO(a);a.hu=b;}
function ANp(a,b,c,d){if((!d.fo?I(c)-b|0:d.x-b|0)<=0){BJ(d,a.hu,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BJ(d,a.hu,1);return a.d.c(b+1|0,c,d);}
function AJh(a,b){var c;c=!Dl(b,a.hu)?0:1;BJ(b,a.hu,(-1));return c;}
function YN(){BD.call(this);this.fG=0;}
function AS0(a){var b=new YN();ASE(b,a);return b;}
function ASE(a,b){BO(a);a.fG=b;}
function AKr(a,b,c,d){var e,f,g;e=!d.fo?I(c)-b|0:d.x-b|0;if(!e){BJ(d,a.fG,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BJ(d,a.fG,0);return a.d.c(b,c,d);case 13:if(g!=10){BJ(d,a.fG,0);return a.d.c(b,c,d);}BJ(d,a.fG,0);return a.d.c(b,c,d);default:}return (-1);}
function AHF(a,b){var c;c=!Dl(b,a.fG)?0:1;BJ(b,a.fG,(-1));return c;}
function Ha(){var a=this;BS.call(a);a.nh=0;a.gG=0;}
function AU1(a,b){var c=new Ha();O5(c,a,b);return c;}
function O5(a,b,c){BO(a);a.nh=b;a.gG=c;}
function AF9(a,b,c,d){var e,f,g,h;e=Gc(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=0;while(true){if(f>=I(e)){BJ(d,a.gG,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&HB(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AOE(a,b){a.d=b;}
function Gc(a,b){var c,d;c=a.nh;d=FF(b,c);c=IA(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.le)?Ca(b.le,d,c):null;}
function AO3(a,b){var c;c=!Dl(b,a.gG)?0:1;BJ(b,a.gG,(-1));return c;}
var AD$=F(Ha);
function AS7(a,b){var c=new AD$();AQ$(c,a,b);return c;}
function AQ$(a,b,c){O5(a,b,c);}
function AHK(a,b,c,d){var e,f;e=Gc(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=!UJ(c,e,b)?(-1):I(e);if(f<0)return (-1);BJ(d,a.gG,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AQZ(a,b,c,d){var e,f;e=Gc(a,d);f=d.cJ;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=AAn(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AFW(a,b,c,d,e){var f,g;f=Gc(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PX(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AMw(a,b){return 1;}
var ABc=F(Ha);
function ATI(a,b){var c=new ABc();AJq(c,a,b);return c;}
function AJq(a,b,c){O5(a,b,c);}
function ALW(a,b,c,d){var e,f;e=Gc(a,d);if(e!==null&&(b+I(e)|0)<=d.x){f=0;while(true){if(f>=I(e)){BJ(d,a.gG,I(e));return a.d.c(b+I(e)|0,c,d);}if(EY(Ey(L(e,f)))!=EY(Ey(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Ok=F(Go);
function AI9(a,b,c,d,e){Ng(a,b,c,d,e);return a;}
function AGF(a,b,c,d){XB(a,b,c,d);return a;}
function AG6(a,b){JC(a,b);}
function AQo(a,b,c){XT(a,b,c);return a;}
function RY(){var a=this;BV.call(a);a.cr=null;a.kD=null;a.ln=null;}
function AH7(a,b,c){return !Kt(a,c,b)?(-1):a.bM;}
function AGw(a,b,c,d){var e,f,g;e=d.x;while(true){if(b>e)return (-1);f=L(a.cr,a.bM-1|0);a:{while(true){g=a.bM;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&Kt(a,c,b))break;b=b+S7(a.kD,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bM|0,c,d)>=0)break;b=b+1|0;}return b;}
function AJv(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.cr,0);g=(I(d)-c|0)-a.bM|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&Kt(a,d,c))break;c=c-S7(a.ln,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bM|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJ1(a,b){var c;if(b instanceof Em)return b.db!=L(a.cr,0)?0:1;if(b instanceof Eg)return MG(b,0,Ca(a.cr,0,1))<=0?0:1;if(!(b instanceof DB)){if(!(b instanceof DV))return 1;return I(a.cr)>1&&b.fQ==Eu(L(a.cr,0),L(a.cr,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.cr,0))){if(I(a.cr)<=1)break b;if(!b.k(Eu(L(a.cr,0),L(a.cr,1))))break b;}c=1;break a;}c=0;}return c;}
function Kt(a,b,c){var d;d=0;while(d<a.bM){if(L(b,d+c|0)!=L(a.cr,d))return 0;d=d+1|0;}return 1;}
function YM(){BV.call(this);this.i8=null;}
function AU4(a){var b=new YM();AQG(b,a);return b;}
function AQG(a,b){var c,d,e;DA(a);c=new M;O(c);d=0;while(true){e=BF(d,b.Q);if(e>=0){a.i8=N(c);a.bM=c.Q;return;}if(d<0)break;if(e>=0)break;BE(c,EY(Ey(b.E.data[d])));d=d+1|0;}b=new BA;Y(b);K(b);}
function AL4(a,b,c){var d;d=0;while(true){if(d>=I(a.i8))return I(a.i8);if(L(a.i8,d)!=EY(Ey(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Nv(){BV.call(this);this.hi=null;}
function APJ(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.hi))return I(a.hi);e=L(a.hi,d);f=b+d|0;if(e!=L(c,f)&&HB(L(a.hi,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var G_=F();
var AYT=null;var AYU=null;var AYP=null;function APd(){APd=Bm(G_);AIr();}
function AIr(){AYT=AUI();AYU=ATP();AYP=H($rt_arraycls(C),[H(C,[B(414),AU2()]),H(C,[B(415),ASX()]),H(C,[B(416),AUF()]),H(C,[B(417),AUM()]),H(C,[B(418),AYU]),H(C,[B(419),AT0()]),H(C,[B(420),ATN()]),H(C,[B(421),ATa()]),H(C,[B(422),AS6()]),H(C,[B(423),ATh()]),H(C,[B(424),ATv()]),H(C,[B(425),ATe()]),H(C,[B(426),AUk()]),H(C,[B(427),ASR()]),H(C,[B(428),AUJ()]),H(C,[B(429),ATu()]),H(C,[B(430),ATY()]),H(C,[B(431),ATs()]),H(C,[B(432),ATZ()]),H(C,[B(433),ATk()]),H(C,[B(434),AUQ()]),H(C,[B(435),ATn()]),H(C,[B(436),AT4()]),
H(C,[B(437),AUD()]),H(C,[B(438),AUz()]),H(C,[B(439),AUN()]),H(C,[B(440),ATj()]),H(C,[B(441),AUp()]),H(C,[B(442),AYT]),H(C,[B(443),AT$()]),H(C,[B(444),ATb()]),H(C,[B(445),AYT]),H(C,[B(446),ASP()]),H(C,[B(447),AYU]),H(C,[B(448),ATC()]),H(C,[B(449),P(0,127)]),H(C,[B(450),P(128,255)]),H(C,[B(451),P(256,383)]),H(C,[B(452),P(384,591)]),H(C,[B(453),P(592,687)]),H(C,[B(454),P(688,767)]),H(C,[B(455),P(768,879)]),H(C,[B(456),P(880,1023)]),H(C,[B(457),P(1024,1279)]),H(C,[B(458),P(1280,1327)]),H(C,[B(459),P(1328,1423)]),
H(C,[B(460),P(1424,1535)]),H(C,[B(461),P(1536,1791)]),H(C,[B(462),P(1792,1871)]),H(C,[B(463),P(1872,1919)]),H(C,[B(464),P(1920,1983)]),H(C,[B(465),P(2304,2431)]),H(C,[B(466),P(2432,2559)]),H(C,[B(467),P(2560,2687)]),H(C,[B(468),P(2688,2815)]),H(C,[B(469),P(2816,2943)]),H(C,[B(470),P(2944,3071)]),H(C,[B(471),P(3072,3199)]),H(C,[B(472),P(3200,3327)]),H(C,[B(473),P(3328,3455)]),H(C,[B(474),P(3456,3583)]),H(C,[B(475),P(3584,3711)]),H(C,[B(476),P(3712,3839)]),H(C,[B(477),P(3840,4095)]),H(C,[B(478),P(4096,4255)]),
H(C,[B(479),P(4256,4351)]),H(C,[B(480),P(4352,4607)]),H(C,[B(481),P(4608,4991)]),H(C,[B(482),P(4992,5023)]),H(C,[B(483),P(5024,5119)]),H(C,[B(484),P(5120,5759)]),H(C,[B(485),P(5760,5791)]),H(C,[B(486),P(5792,5887)]),H(C,[B(487),P(5888,5919)]),H(C,[B(488),P(5920,5951)]),H(C,[B(489),P(5952,5983)]),H(C,[B(490),P(5984,6015)]),H(C,[B(491),P(6016,6143)]),H(C,[B(492),P(6144,6319)]),H(C,[B(493),P(6400,6479)]),H(C,[B(494),P(6480,6527)]),H(C,[B(495),P(6528,6623)]),H(C,[B(496),P(6624,6655)]),H(C,[B(497),P(6656,6687)]),
H(C,[B(498),P(7424,7551)]),H(C,[B(499),P(7552,7615)]),H(C,[B(500),P(7616,7679)]),H(C,[B(501),P(7680,7935)]),H(C,[B(502),P(7936,8191)]),H(C,[B(503),P(8192,8303)]),H(C,[B(504),P(8304,8351)]),H(C,[B(505),P(8352,8399)]),H(C,[B(506),P(8400,8447)]),H(C,[B(507),P(8448,8527)]),H(C,[B(508),P(8528,8591)]),H(C,[B(509),P(8592,8703)]),H(C,[B(510),P(8704,8959)]),H(C,[B(511),P(8960,9215)]),H(C,[B(512),P(9216,9279)]),H(C,[B(513),P(9280,9311)]),H(C,[B(514),P(9312,9471)]),H(C,[B(515),P(9472,9599)]),H(C,[B(516),P(9600,9631)]),
H(C,[B(517),P(9632,9727)]),H(C,[B(518),P(9728,9983)]),H(C,[B(519),P(9984,10175)]),H(C,[B(520),P(10176,10223)]),H(C,[B(521),P(10224,10239)]),H(C,[B(522),P(10240,10495)]),H(C,[B(523),P(10496,10623)]),H(C,[B(524),P(10624,10751)]),H(C,[B(525),P(10752,11007)]),H(C,[B(526),P(11008,11263)]),H(C,[B(527),P(11264,11359)]),H(C,[B(528),P(11392,11519)]),H(C,[B(529),P(11520,11567)]),H(C,[B(530),P(11568,11647)]),H(C,[B(531),P(11648,11743)]),H(C,[B(532),P(11776,11903)]),H(C,[B(533),P(11904,12031)]),H(C,[B(534),P(12032,12255)]),
H(C,[B(535),P(12272,12287)]),H(C,[B(536),P(12288,12351)]),H(C,[B(537),P(12352,12447)]),H(C,[B(538),P(12448,12543)]),H(C,[B(539),P(12544,12591)]),H(C,[B(540),P(12592,12687)]),H(C,[B(541),P(12688,12703)]),H(C,[B(542),P(12704,12735)]),H(C,[B(543),P(12736,12783)]),H(C,[B(544),P(12784,12799)]),H(C,[B(545),P(12800,13055)]),H(C,[B(546),P(13056,13311)]),H(C,[B(547),P(13312,19893)]),H(C,[B(548),P(19904,19967)]),H(C,[B(549),P(19968,40959)]),H(C,[B(550),P(40960,42127)]),H(C,[B(551),P(42128,42191)]),H(C,[B(552),P(42752,
42783)]),H(C,[B(553),P(43008,43055)]),H(C,[B(554),P(44032,55203)]),H(C,[B(555),P(55296,56191)]),H(C,[B(556),P(56192,56319)]),H(C,[B(557),P(56320,57343)]),H(C,[B(558),P(57344,63743)]),H(C,[B(559),P(63744,64255)]),H(C,[B(560),P(64256,64335)]),H(C,[B(561),P(64336,65023)]),H(C,[B(562),P(65024,65039)]),H(C,[B(563),P(65040,65055)]),H(C,[B(564),P(65056,65071)]),H(C,[B(565),P(65072,65103)]),H(C,[B(566),P(65104,65135)]),H(C,[B(567),P(65136,65279)]),H(C,[B(568),P(65280,65519)]),H(C,[B(569),P(0,1114111)]),H(C,[B(570),
ATf()]),H(C,[B(571),BL(0,1)]),H(C,[B(572),IW(62,1)]),H(C,[B(573),BL(1,1)]),H(C,[B(574),BL(2,1)]),H(C,[B(575),BL(3,0)]),H(C,[B(576),BL(4,0)]),H(C,[B(577),BL(5,1)]),H(C,[B(578),IW(448,1)]),H(C,[B(579),BL(6,1)]),H(C,[B(580),BL(7,0)]),H(C,[B(581),BL(8,1)]),H(C,[B(582),IW(3584,1)]),H(C,[B(583),BL(9,1)]),H(C,[B(584),BL(10,1)]),H(C,[B(585),BL(11,1)]),H(C,[B(586),IW(28672,0)]),H(C,[B(587),BL(12,0)]),H(C,[B(588),BL(13,0)]),H(C,[B(589),BL(14,0)]),H(C,[B(590),ATJ(983040,1,1)]),H(C,[B(591),BL(15,0)]),H(C,[B(592),BL(16,
1)]),H(C,[B(593),BL(18,1)]),H(C,[B(594),ATV(19,0,1)]),H(C,[B(595),IW(1643118592,1)]),H(C,[B(596),BL(20,0)]),H(C,[B(597),BL(21,0)]),H(C,[B(598),BL(22,0)]),H(C,[B(599),BL(23,0)]),H(C,[B(600),BL(24,1)]),H(C,[B(601),IW(2113929216,1)]),H(C,[B(602),BL(25,1)]),H(C,[B(603),BL(26,0)]),H(C,[B(604),BL(27,0)]),H(C,[B(605),BL(28,1)]),H(C,[B(606),BL(29,0)]),H(C,[B(607),BL(30,0)])]);}
function MQ(){BV.call(this);this.qK=0;}
function APQ(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.qK!=GF(GE(Eu(e,d)))?(-1):2;}
function K7(){BS.call(this);this.gk=0;}
function ANd(a){var b=new K7();AG1(b,a);return b;}
function AG1(a,b){BO(a);a.gk=b;}
function ANH(a,b){a.d=b;}
function AHB(a,b,c,d){var e,f;e=b+1|0;if(e>d.x){d.dk=1;return (-1);}f=L(c,b);if(b>d.cJ&&CF(L(c,b-1|0)))return (-1);if(a.gk!=f)return (-1);return a.d.c(e,c,d);}
function AJZ(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.cJ;f=d.x;while(true){if(b>=f)return (-1);g=GM(c,a.gk,b);if(g<0)return (-1);if(g>e&&CF(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AId(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HX(a,b,c,d,e);f=e.cJ;a:{while(true){if(c<b)return (-1);g=F5(d,a.gk,c);if(g<0)break a;if(g<b)break a;if(g>f&&CF(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFU(a,b){if(b instanceof Em)return 0;if(b instanceof Eg)return 0;if(b instanceof DB)return 0;if(b instanceof DV)return 0;if(b instanceof Ls)return 0;if(!(b instanceof K7))return 1;return b.gk!=a.gk?0:1;}
function AQu(a,b){return 1;}
function Ls(){BS.call(this);this.fX=0;}
function AKv(a){var b=new Ls();ANl(b,a);return b;}
function ANl(a,b){BO(a);a.fX=b;}
function AG5(a,b){a.d=b;}
function AFt(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;g=BF(f,e);if(g>0){d.dk=1;return (-1);}h=L(c,b);if(g<0&&C6(L(c,f)))return (-1);if(a.fX!=h)return (-1);return a.d.c(f,c,d);}
function AN7(a,b,c,d){var e,f;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=GM(c,a.fX,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C6(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function API(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return HX(a,b,c,d,e);f=e.x;a:{while(true){if(c<b)return (-1);g=F5(d,a.fX,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C6(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AH8(a,b){if(b instanceof Em)return 0;if(b instanceof Eg)return 0;if(b instanceof DB)return 0;if(b instanceof DV)return 0;if(b instanceof K7)return 0;if(!(b instanceof Ls))return 1;return b.fX!=a.fX?0:1;}
function AOh(a,b){return 1;}
function DV(){var a=this;BV.call(a);a.jQ=0;a.ir=0;a.fQ=0;}
function AO4(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.jQ==e&&a.ir==d?2:(-1);}
function AMX(a,b,c,d){var e,f;if(!(c instanceof Bv))return HJ(a,b,c,d);e=d.x;while(b<e){b=GM(c,a.jQ,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.ir==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AG3(a,b,c,d,e){var f;if(!(d instanceof Bv))return HX(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F5(d,a.ir,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jQ==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AOP(a,b){if(b instanceof DV)return b.fQ!=a.fQ?0:1;if(b instanceof DB)return b.k(a.fQ);if(b instanceof Em)return 0;if(!(b instanceof Eg))return 1;return 0;}
var VO=F(EN);
function AHf(a,b){return b!=10?0:1;}
function AOW(a,b,c){return b!=10?0:1;}
var VP=F(EN);
function AP1(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ARO(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AC4(){var a=this;C.call(a);a.mv=null;a.j7=null;a.gW=0;a.vg=0;}
function AM8(a){var b=new AC4();AKW(b,a);return b;}
function AKW(a,b){var c,d;while(true){c=a.gW;if(b<c)break;a.gW=c<<1|1;}d=c<<1|1;a.gW=d;d=d+1|0;a.mv=BG(d);a.j7=BG(d);a.vg=b;}
function Ru(a,b,c){var d,e,f,g;d=0;e=a.gW;f=b&e;while(true){g=a.mv.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.j7.data[f]=c;}
function S7(a,b){var c,d,e,f;c=a.gW;d=b&c;e=0;while(true){f=a.mv.data[d];if(!f)break;if(f==b)return a.j7.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.vg;}
var Y3=F();
var K5=F(Ba);
function AUI(){var a=new K5();AKn(a);return a;}
function AKn(a){}
function ABk(a){return Cx(BT(Dm(),9,13),32);}
var J3=F(Ba);
function ATP(){var a=new J3();AQr(a);return a;}
function AQr(a){}
function AB6(a){return BT(Dm(),48,57);}
var ACY=F(Ba);
function AU2(){var a=new ACY();AJG(a);return a;}
function AJG(a){}
function APr(a){return BT(Dm(),97,122);}
var ADw=F(Ba);
function ASX(){var a=new ADw();AK3(a);return a;}
function AK3(a){}
function AQw(a){return BT(Dm(),65,90);}
var ADC=F(Ba);
function AUF(){var a=new ADC();AGy(a);return a;}
function AGy(a){}
function AIN(a){return BT(Dm(),0,127);}
var K0=F(Ba);
function AUM(){var a=new K0();AHO(a);return a;}
function AHO(a){}
function ZS(a){return BT(BT(Dm(),97,122),65,90);}
var LG=F(K0);
function AT0(){var a=new LG();AKC(a);return a;}
function AKC(a){}
function AAO(a){return BT(ZS(a),48,57);}
var AEW=F(Ba);
function ATN(){var a=new AEW();AMJ(a);return a;}
function AMJ(a){}
function AJY(a){return BT(BT(BT(Dm(),33,64),91,96),123,126);}
var MF=F(LG);
function ATa(){var a=new MF();AOz(a);return a;}
function AOz(a){}
function YI(a){return BT(BT(BT(AAO(a),33,64),91,96),123,126);}
var ABx=F(MF);
function AS6(){var a=new ABx();AQi(a);return a;}
function AQi(a){}
function AMs(a){return Cx(YI(a),32);}
var ABY=F(Ba);
function ATh(){var a=new ABY();APK(a);return a;}
function APK(a){}
function AH0(a){return Cx(Cx(Dm(),32),9);}
var AAh=F(Ba);
function ATv(){var a=new AAh();ARB(a);return a;}
function ARB(a){}
function AMo(a){return Cx(BT(Dm(),0,31),127);}
var Z0=F(Ba);
function ATe(){var a=new Z0();AGJ(a);return a;}
function AGJ(a){}
function ARQ(a){return BT(BT(BT(Dm(),48,57),97,102),65,70);}
var ADG=F(Ba);
function AUk(){var a=new ADG();AGo(a);return a;}
function AGo(a){}
function AM5(a){var b;b=new Tq;b.w6=a;Bt(b);b.L=1;return b;}
var AE8=F(Ba);
function ASR(){var a=new AE8();AOU(a);return a;}
function AOU(a){}
function AFk(a){var b;b=new M3;b.xe=a;Bt(b);b.L=1;return b;}
var AC5=F(Ba);
function AUJ(){var a=new AC5();AGz(a);return a;}
function AGz(a){}
function AKw(a){var b;b=new Sh;b.wP=a;Bt(b);return b;}
var ACT=F(Ba);
function ATu(){var a=new ACT();AMq(a);return a;}
function AMq(a){}
function AO8(a){var b;b=new Sg;b.wy=a;Bt(b);return b;}
var ADX=F(Ba);
function ATY(){var a=new ADX();AHJ(a);return a;}
function AHJ(a){}
function AHW(a){var b;b=new Xh;b.x3=a;Bt(b);H4(b.K,0,2048);b.L=1;return b;}
var Zk=F(Ba);
function ATs(){var a=new Zk();AHa(a);return a;}
function AHa(a){}
function AIl(a){var b;b=new O8;b.xs=a;Bt(b);b.L=1;return b;}
var Y0=F(Ba);
function ATZ(){var a=new Y0();AL1(a);return a;}
function AL1(a){}
function ARK(a){var b;b=new Of;b.yw=a;Bt(b);b.L=1;return b;}
var AC$=F(Ba);
function ATk(){var a=new AC$();AMK(a);return a;}
function AMK(a){}
function AFe(a){var b;b=new QT;b.w8=a;Bt(b);return b;}
var ADn=F(Ba);
function AUQ(){var a=new ADn();AKa(a);return a;}
function AKa(a){}
function ALu(a){var b;b=new MY;b.vS=a;Bt(b);b.L=1;return b;}
var AAG=F(Ba);
function ATn(){var a=new AAG();AFX(a);return a;}
function AFX(a){}
function AIw(a){var b;b=new M2;b.xw=a;Bt(b);b.L=1;return b;}
var AB3=F(Ba);
function AT4(){var a=new AB3();AHj(a);return a;}
function AHj(a){}
function AJA(a){var b;b=new N1;b.x0=a;Bt(b);b.L=1;return b;}
var AEz=F(Ba);
function AUD(){var a=new AEz();ALy(a);return a;}
function ALy(a){}
function ALw(a){var b;b=new Pw;b.yh=a;Bt(b);b.L=1;return b;}
var ADl=F(Ba);
function AUz(){var a=new ADl();AM2(a);return a;}
function AM2(a){}
function AQQ(a){var b;b=new PF;b.wR=a;Bt(b);return b;}
var AA_=F(Ba);
function AUN(){var a=new AA_();AHc(a);return a;}
function AHc(a){}
function AOq(a){var b;b=new Ub;b.xH=a;Bt(b);return b;}
var AAE=F(Ba);
function ATj(){var a=new AAE();AO_(a);return a;}
function AO_(a){}
function AM0(a){var b;b=new SV;b.vW=a;Bt(b);b.L=1;return b;}
var AE3=F(Ba);
function AUp(){var a=new AE3();AJ6(a);return a;}
function AJ6(a){}
function APj(a){var b;b=new Nd;b.yL=a;Bt(b);b.L=1;return b;}
var Jq=F(Ba);
function AT$(){var a=new Jq();AIE(a);return a;}
function AIE(a){}
function AB0(a){return Cx(BT(BT(BT(Dm(),97,122),65,90),48,57),95);}
var ADZ=F(Jq);
function ATb(){var a=new ADZ();AKf(a);return a;}
function AKf(a){}
function AMM(a){var b;b=Et(AB0(a),1);b.L=1;return b;}
var ABC=F(K5);
function ASP(){var a=new ABC();ARk(a);return a;}
function ARk(a){}
function AGv(a){var b;b=Et(ABk(a),1);b.L=1;return b;}
var AAy=F(J3);
function ATC(){var a=new AAy();ALi(a);return a;}
function ALi(a){}
function AJM(a){var b;b=Et(AB6(a),1);b.L=1;return b;}
function Z6(){var a=this;Ba.call(a);a.qx=0;a.rc=0;}
function P(a,b){var c=new Z6();ARI(c,a,b);return c;}
function ARI(a,b,c){a.qx=b;a.rc=c;}
function ALJ(a){return BT(Dm(),a.qx,a.rc);}
var AAs=F(Ba);
function ATf(){var a=new AAs();ARW(a);return a;}
function ARW(a){}
function ARu(a){return BT(BT(Dm(),65279,65279),65520,65533);}
function ABs(){var a=this;Ba.call(a);a.l6=0;a.jX=0;a.oI=0;}
function BL(a,b){var c=new ABs();AHE(c,a,b);return c;}
function ATV(a,b,c){var d=new ABs();ARJ(d,a,b,c);return d;}
function AHE(a,b,c){a.jX=c;a.l6=b;}
function ARJ(a,b,c,d){a.oI=d;a.jX=c;a.l6=b;}
function AJb(a){var b;b=AUX(a.l6);if(a.oI)H4(b.K,0,2048);b.L=a.jX;return b;}
function ABy(){var a=this;Ba.call(a);a.l5=0;a.j9=0;a.no=0;}
function IW(a,b){var c=new ABy();AIx(c,a,b);return c;}
function ATJ(a,b,c){var d=new ABy();AFh(d,a,b,c);return d;}
function AIx(a,b,c){a.j9=c;a.l5=b;}
function AFh(a,b,c,d){a.no=d;a.j9=c;a.l5=b;}
function AFf(a){var b;b=new Sa;ACE(b,a.l5);if(a.no)H4(b.K,0,2048);b.L=a.j9;return b;}
var AAb=F();
var ZE=F();
function AA9(b){var c,d,e,f,g,h,i;c=APv(Gz(b));d=JO(c);e=BG(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+JO(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=No(c);h=h+1|0;}return e;}
function KK(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function ND(){var a=this;C.call(a);a.pm=0;a.rA=0;a.pz=null;}
function AI_(a,b,c){var d=new ND();AQh(d,a,b,c);return d;}
function AQh(a,b,c,d){a.pm=b;a.rA=c;a.pz=d;}
function ADe(){var a=this;C.call(a);a.n9=null;a.qH=0;}
function APv(a){var b=new ADe();AH_(b,a);return b;}
function AH_(a,b){a.n9=b;}
var AA8=F();
function JO(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.n9.data;f=b.qH;b.qH=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+V(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function No(b){var c,d;c=JO(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function ZP(){C.call(this);this.Ig=null;}
function VC(){C.call(this);this.u5=null;}
function AQx(a,b){var c,d,e,f;c=b.data;b=a.u5;d=D_(c[0]);e=FN(c[1]);ADm(b.e.f,d,e);Gy(Cl(b),AXb);F8(Cl(b));f=Ky(FI(),b.e2);b=new M;O(b);G(H0(G(b,B(608)),f),B(199));$rt_globals.console.info($rt_ustr(N(b)));}
function Ry(){C.call(this);this.ra=null;}
function AI$(a,b){KO(a.ra,b);}
var Za=F();
function AEE(b){var c,d,e,f,g,h,i,j,k,l;c=new Ws;c.lq=0;c.g4=BG(16);c.e$=0;d=Cz(b);HW(c,d);e=0;f=0;while(f<d){g=B3(b,f);h=g.o.data.length;HW(c,h);i=0;while(i<h){j=NM(g,i);k=My(j);HW(c,e);HW(c,k);e=e+My(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}d=c.lq;if(d&&c.e$!=d){b=EX();d=c.lq;e=c.e$;j=new M;O(j);G(U(G(U(G(j,B(403)),d),B(609)),e),B(610));Br(b,N(j));}l=c.g4;d=l.data.length;e=c.e$;if(d!=e)l=Mq(l,e);return l;}
function ADo(b){var c,d,e,f,g,h,i,j,k;c=BB(b);d=R(H9,c);e=d.data;f=0;while(f<c){a:{g=BB(b);if(g!=(-1)){h=BB(b);i=BB(b);if(i==(-1)){j=new H9;j.f3=h;e[g]=j;}else{j=new H9;j.f3=h;j.lp=BG(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].lp.data[k]=BB(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function Rx(){C.call(this);this.uo=null;}
function AO9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.uo;d=D_(c[0]);c=AD4(d);e=new Q6;d=ADo(c);f=ADo(c);g=BB(c);h=R(L_,g);i=h.data;j=0;while(j<g){k=BB(c);l=BB(c);m=BB(c);n=BB(c);o=BB(c);p=new L_;p.hE=k;p.lD=l;p.hC=m;p.lf=n;p.j6=o;i[j]=p;j=j+1|0;}e.w_=d;e.ro=f;e.f4=h;b.dm=e;LA(b.z,d);LA(b.B,b.dm.ro);}
function Uv(){var a=this;C.call(a);a.vQ=null;a.vP=null;a.vR=null;}
function PY(){var a=this;C.call(a);a.ye=null;a.yf=null;}
function WO(){var a=this;W.call(a);a.nR=null;a.x$=null;}
function AIV(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cg^Dv(a.nR,c):0;}
function WN(){var a=this;W.call(a);a.tz=null;a.uh=null;a.xM=null;}
function AFK(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cg^Dv(a.tz,c):0;return a.uh.k(b)&&!d?1:0;}
function OB(){var a=this;W.call(a);a.iu=null;a.v0=null;}
function ALA(a,b){return a.bh^Dv(a.iu,b);}
function AJC(a){var b,c,d;b=new M;O(b);c=Hi(a.iu,0);while(c>=0){Is(b,Gw(c));BE(b,124);c=Hi(a.iu,c+1|0);}d=b.Q;if(d>0)WD(b,d-1|0);return N(b);}
function OH(){var a=this;W.call(a);a.qY=null;a.xc=null;}
function AO7(a,b){return a.qY.k(b);}
function OF(){var a=this;W.call(a);a.j0=0;a.ov=null;a.kN=null;}
function APP(a,b){return !(a.j0^Dv(a.kN.H,b))&&!(a.j0^a.kN.dU^a.ov.k(b))?0:1;}
function OG(){var a=this;W.call(a);a.j8=0;a.tW=null;a.lE=null;}
function AL3(a,b){return !(a.j8^Dv(a.lE.H,b))&&!(a.j8^a.lE.dU^a.tW.k(b))?1:0;}
function OK(){var a=this;W.call(a);a.uO=0;a.t3=null;a.tR=null;a.wh=null;}
function AIq(a,b){return a.uO^(!a.t3.k(b)&&!a.tR.k(b)?0:1);}
function OL(){var a=this;W.call(a);a.q_=0;a.qP=null;a.p3=null;a.yD=null;}
function AE$(a,b){return a.q_^(!a.qP.k(b)&&!a.p3.k(b)?0:1)?0:1;}
function OI(){var a=this;W.call(a);a.pF=null;a.yJ=null;}
function AJH(a,b){return C0(a.pF,b);}
function OJ(){var a=this;W.call(a);a.ud=null;a.ww=null;}
function AL6(a,b){return C0(a.ud,b)?0:1;}
function OM(){var a=this;W.call(a);a.rs=null;a.qT=0;a.s5=null;}
function AQ3(a,b){return !C0(a.rs,b)&&!(a.qT^Dv(a.s5.H,b))?0:1;}
function ON(){var a=this;W.call(a);a.sa=null;a.sn=0;a.rQ=null;}
function AHR(a,b){return !C0(a.sa,b)&&!(a.sn^Dv(a.rQ.H,b))?1:0;}
function OA(){var a=this;W.call(a);a.s2=0;a.tU=null;a.uw=null;a.v4=null;}
function ASO(a,b){return !(a.s2^a.tU.k(b))&&!C0(a.uw,b)?0:1;}
function Pl(){var a=this;W.call(a);a.ut=0;a.m3=null;a.np=null;a.wr=null;}
function AJL(a,b){return !(a.ut^a.m3.k(b))&&!C0(a.np,b)?1:0;}
function Ox(){var a=this;W.call(a);a.pf=null;a.wx=null;}
function AHP(a,b){return C0(a.pf,b);}
function Oy(){var a=this;W.call(a);a.pk=null;a.yz=null;}
function AJp(a,b){return C0(a.pk,b)?0:1;}
function OE(){var a=this;W.call(a);a.uL=null;a.r4=0;a.vG=null;}
function AK1(a,b){return C0(a.uL,b)&&a.r4^Dv(a.vG.H,b)?1:0;}
function Ow(){var a=this;W.call(a);a.sH=null;a.rb=0;a.r2=null;}
function AQD(a,b){return C0(a.sH,b)&&a.rb^Dv(a.r2.H,b)?0:1;}
function OC(){var a=this;W.call(a);a.s_=0;a.nP=null;a.q7=null;a.wg=null;}
function AGI(a,b){return a.s_^a.nP.k(b)&&C0(a.q7,b)?1:0;}
function OD(){var a=this;W.call(a);a.sC=0;a.mS=null;a.s1=null;a.wB=null;}
function AOf(a,b){return a.sC^a.mS.k(b)&&C0(a.s1,b)?0:1;}
var L5=F(0);
function ST(){var a=this;C.call(a);a.wn=null;a.tY=null;a.iS=null;a.cv=null;a.iv=0;a.kH=0;}
function M0(a,b){var c,d,e;c=I(a.iS);if(b>=0&&b<=c){X7(a.cv,null,(-1),(-1));d=a.cv;d.jC=1;d.ee=b;c=d.hI;if(c<0)c=b;d.hI=c;b=a.tY.cm(b,a.iS,d);if(b==(-1))a.cv.dk=1;if(b>=0){d=a.cv;if(d.iV){e=d.dP.data;if(e[0]==(-1)){c=d.ee;e[0]=c;e[1]=c;}d.hI=I_(d);return 1;}}a.cv.ee=(-1);return 0;}d=new BA;Bo(d,C7(b));K(d);}
function AEx(a){return Pc(a.cv,0);}
function AAz(a){return Sm(a.cv,0);}
function Y8(a){return a.cv.i4;}
function ADQ(){var a=this;C.call(a);a.B0=null;a.B1=null;a.BZ=0.0;}
function Ws(){var a=this;C.call(a);a.g4=null;a.lq=0;a.e$=0;}
function HW(a,b){var c,d;c=a.g4;d=c.data.length;if(d==a.e$)a.g4=Mq(c,d*2|0);c=a.g4.data;d=a.e$;a.e$=d+1|0;c[d]=b;}
var C2=F(0);
var AWO=null;var AX8=null;var AWQ=null;var AWP=null;var AWS=null;var AWR=null;var AWU=null;var AWT=null;var AWW=null;var AWV=null;var AWX=null;function AB5(){AB5=Bm(C2);ALY();}
function ALY(){AWO=CM(0);AX8=CN(0,0,0);AWQ=Q(B(611));AWP=CN(255,255,255);AWS=CN(166,214,255);AWR=Q(B(612));AWU=Q(B(613));AWT=Q(B(614));AWW=Fx(205,205,205,153);AWV=Fx(255,255,255,0);AWX=Q(B(126));}
function Ch(){Ck.call(this);this.lo=null;}
var AYV=null;var AYW=null;var AYX=null;var AYY=null;var AYZ=null;var AY0=null;var AY1=null;var AY2=null;var AY3=null;var AY4=null;var AY5=null;var AY6=null;var AY7=null;var AY8=null;var AY9=null;var AWY=null;function AAq(){AAq=Bm(Ch);AJf();}
function DC(a,b,c){var d=new Ch();WP(d,a,b,c);return d;}
function AKl(a,b,c,d){var e=new Ch();ACH(e,a,b,c,d);return e;}
function WP(a,b,c,d){AAq();C_(a,b,c);a.lo=It(d,null);}
function ACH(a,b,c,d,e){AAq();C_(a,b,c);a.lo=It(d,e);}
function AJf(){var b;b=new Ch;AB5();WP(b,B(341),0,AX8);AYV=b;AYW=DC(B(342),1,CN(0,49,191));AYX=DC(B(344),2,Q(B(615)));AYY=DC(B(48),3,Q(B(616)));AYZ=DC(B(347),4,AX8);AY0=DC(B(348),5,Q(B(617)));AY1=DC(B(350),6,Q(B(383)));AY2=DC(B(49),7,Q(B(618)));AY3=DC(B(353),8,Q(B(619)));AY4=AKl(B(355),9,AX8,CN(237,235,252));AY5=AKl(B(356),10,Q(B(381)),Q(B(620)));AY6=DC(B(357),11,Q(B(383)));AY7=DC(B(359),12,Q(B(384)));AY8=DC(B(361),13,Q(B(621)));b=DC(B(362),14,Q(B(363)));AY9=b;AWY=H(Ch,[AYV,AYW,AYX,AYY,AYZ,AY0,AY1,AY2,AY3,AY4,
AY5,AY6,AY7,AY8,b]);}
var Du=F(0);
var AW2=null;var AW3=null;var AWZ=null;var AW0=null;var AW1=null;var AX9=null;var AX$=null;var AW4=null;var AW5=null;function AO$(){AO$=Bm(Du);AJx();}
function AJx(){AW2=Q(B(124));AW3=Q(B(622));AWZ=Q(B(623));AW0=Q(B(624));AW1=Q(B(625));AX9=Q(B(124));AX$=Q(B(622));AW4=Fx(205,205,205,153);AW5=CN(247,248,250);}
function Op(){var a=this;C.call(a);a.iw=null;a.hc=0;}
function Om(){C.call(this);this.rH=null;}
function APi(a,b){UV(a.rH,b);}
var Nj=F(GA);
function AJe(a,b,c,d){var e,f,g;e=0;f=d.x;a:{while(true){if(b>f){b=e;break a;}g=FF(d,a.Z);Dz(d,a.Z,b);e=a.cU.c(b,c,d);if(e>=0)break;Dz(d,a.Z,g);b=b+1|0;}}return b;}
function ASA(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=FF(e,a.Z);Dz(e,a.Z,c);f=a.cU.c(c,d,e);if(f>=0)break;Dz(e,a.Z,g);c=c+(-1)|0;}}return c;}
function AHz(a){return null;}
var Ql=F(Bq);
var XD=F(Bq);
function VJ(){FS.call(this);this.ys=0;}
function P_(){FS.call(this);this.yl=0;}
var Yq=F(Bq);
function Vy(){var a=this;C.call(a);a.ry=null;a.tB=null;a.u6=0;a.kh=0;}
function KA(a,b){return B5(a.ry)<b?0:1;}
function So(){var a=this;C.call(a);a.vq=null;a.vr=null;}
function S3(){var a=this;C.call(a);a.wQ=null;a.pB=null;}
function S2(){C.call(this);this.vT=null;}
var AC7=F(0);
function Mt(b){return !b?H(Bv,[B(155),B(156),B(626)]):H(Bv,[B(155),B(156),B(626),B(41)]);}
var AAu=F();
function Ts(){var a=this;C.call(a);a.up=null;a.uq=0;a.ur=null;}
function Lw(a,b){var c,d,e,f,g,h,i,j,k;c=a.up;d=a.uq;e=a.ur;if(b<=d){f=Cl(c);g=new Tg;g.o8=c;h=R(C,1);h.data[0]=e;CQ(f,g,B(627),h);}else{i=Cl(c);g=new Th;g.rP=c;j=R(C,2);k=j.data;k[0]=e;h=BG(1);h.data[0]=250;k[1]=h;CQ(i,g,B(628),j);f=Cl(c);g=new Ti;g.n5=c;h=R(C,1);h.data[0]=e;CQ(f,g,B(629),h);}}
function VG(){var a=this;C.call(a);a.dP=null;a.jM=null;a.k_=null;a.le=null;a.oE=0;a.iV=0;a.cJ=0;a.x=0;a.ee=0;a.i4=0;a.fo=0;a.dk=0;a.xW=0;a.hI=0;a.jC=0;}
function BJ(a,b,c){a.jM.data[b]=c;}
function Dl(a,b){return a.jM.data[b];}
function I_(a){return Sm(a,0);}
function Sm(a,b){R_(a,b);return a.dP.data[(b*2|0)+1|0];}
function Dz(a,b,c){a.dP.data[b*2|0]=c;}
function JD(a,b,c){a.dP.data[(b*2|0)+1|0]=c;}
function FF(a,b){return a.dP.data[b*2|0];}
function IA(a,b){return a.dP.data[(b*2|0)+1|0];}
function ACZ(a){return Pc(a,0);}
function Pc(a,b){R_(a,b);return a.dP.data[b*2|0];}
function Na(a,b){return a.k_.data[b];}
function Ee(a,b,c){a.k_.data[b]=c;}
function R_(a,b){var c;if(!a.iV){c=new D1;Y(c);K(c);}if(b>=0&&b<a.oE)return;c=new BA;Bo(c,C7(b));K(c);}
function X7(a,b,c,d){a.iV=0;a.jC=2;Hz(a.dP,(-1));Hz(a.jM,(-1));if(b!==null)a.le=b;if(c>=0){a.cJ=c;a.x=d;}a.ee=a.cJ;}
function AAT(a){return a.jC;}
function V8(){C.call(this);this.of=null;}
function ARe(a){DM(a.of);}
function Tq(){W.call(this);this.w6=null;}
function ARb(a,b){return Cv(b)!=2?0:1;}
function M3(){W.call(this);this.xe=null;}
function AGr(a,b){return Cv(b)!=1?0:1;}
function Sh(){W.call(this);this.wP=null;}
function AGb(a,b){return Ro(b);}
function Sg(){W.call(this);this.wy=null;}
function AJa(a,b){return 0;}
function Xh(){W.call(this);this.x3=null;}
function AKM(a,b){return !Cv(b)?0:1;}
function O8(){W.call(this);this.xs=null;}
function ARf(a,b){return Cv(b)!=9?0:1;}
function Of(){W.call(this);this.yw=null;}
function ANB(a,b){return Gr(b);}
function QT(){W.call(this);this.w8=null;}
function APc(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MY(){W.call(this);this.vS=null;}
function ASc(a,b){a:{b:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gr(b);}return b;}
function M2(){W.call(this);this.xw=null;}
function AIb(a,b){a:{b:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gr(b);}return b;}
function N1(){W.call(this);this.x0=null;}
function ARs(a,b){a:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Pw(){W.call(this);this.yh=null;}
function AMl(a,b){return Jx(b);}
function PF(){W.call(this);this.wR=null;}
function AOC(a,b){return PG(b);}
function Ub(){W.call(this);this.xH=null;}
function AQ4(a,b){return Cv(b)!=3?0:1;}
function SV(){W.call(this);this.vW=null;}
function ARX(a,b){a:{b:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gr(b);}return b;}
function Nd(){W.call(this);this.yL=null;}
function AHY(a,b){a:{b:{switch(Cv(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gr(b);}return b;}
function Mp(){W.call(this);this.lt=0;}
function AUX(a){var b=new Mp();ACE(b,a);return b;}
function ACE(a,b){Bt(a);a.lt=b;}
function ANE(a,b){return a.bh^(a.lt!=Cv(b&65535)?0:1);}
var Sa=F(Mp);
function AQe(a,b){return a.bh^(!(a.lt>>Cv(b&65535)&1)?0:1);}
function P4(){C.call(this);this.vJ=null;}
function ALR(a){var b,c;b=a.vJ;c=b.vq;b=b.vr;c.Gk(b.il,b.ko,null);}
function We(){C.call(this);this.nX=null;}
function AOt(a,b){var c,d,e,f;c=a.nX;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.pB;c=Bx();b=CA(b);e=new M;O(e);G(G(e,B(630)),b);Br(c,N(e));b=Bx();f=d.length;c=new M;O(c);U(G(c,B(631)),f);Br(b,N(c));}
function Wh(){var a=this;C.call(a);a.tr=null;a.ts=null;}
function AM_(a,b){var c,d;c=a.tr;d=a.ts;b.arrayBuffer().then(Bk(c,"f"),Bk(d,"f"));}
function TZ(){var a=this;C.call(a);a.mA=null;a.mB=null;}
function AJS(a,b){var c;c=a.mA;Lw(a.mB,JF(c,b.size));}
function T2(){C.call(this);this.uM=null;}
function AFE(a,b){var c;c=a.uM;Br(EX(),$rt_str(b.message));Lw(c,0);}
function UZ(){C.call(this);this.wG=null;}
function ALL(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Th(){C.call(this);this.rP=null;}
function AOe(a,b){var c,d,e,f;c=a.rP;if(!c.h2){b=b.data;d=D_(b[0]);e=FN(b[1]);ABK(c.e.f,d,e);c.h1=1;f=Ky(FI(),c.e2);b=new M;O(b);G(H0(G(b,B(632)),f),B(199));$rt_globals.console.info($rt_ustr(N(b)));}}
function Ti(){C.call(this);this.n5=null;}
function AMN(a,b){var c,d,e,f,g,h;c=b.data;d=a.n5;e=(D_(c[2])).data[0];if(e!=1)HM(d,b);else{d.h2=1;f=D_(c[0]);g=FN(c[1]);AAd(d.e.f,f,g,d.h1);WH(d,ADU(e));Gy(Cl(d),AXb);F8(Cl(d));h=Ky(FI(),d.e2);b=new M;O(b);G(H0(G(b,B(633)),h),B(199));$rt_globals.console.info($rt_ustr(N(b)));W$(d);HN(d);}}
function Tg(){C.call(this);this.o8=null;}
function ALp(a,b){HM(a.o8,b);}
var Zt=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["cq",AVi(AMg),"cw",AVh(AG0)],RZ,0,C,[],0,3,0,0,0,Nm,0,C,[],3,3,0,0,0,MS,0,C,[],3,3,0,0,0,WR,0,C,[Nm,MS],0,3,0,0,0,ZX,0,C,[],4,0,0,0,0,ZF,0,C,[],4,3,0,0,0,GB,0,C,[],0,3,0,0,0,D4,0,GB,[],0,3,0,0,0,Bq,0,D4,[],0,3,0,0,0,ABz,0,Bq,[],0,3,0,0,0,Dh,0,C,[],3,3,0,0,0,CK,0,C,[],3,3,0,0,0,IZ,0,C,[],3,3,0,0,0,Bv,"String",1,C,[Dh,CK,IZ],0,3,0,EO,["cw",AVh(AGZ),"cq",AVi(Bn),"jD",AVh(Lr),"jV",AVi(AJc)],EI,0,GB,[],0,3,0,0,0,Hk,0,EI,[],0,3,0,0,0,ABb,0,Hk,[],0,3,0,0,0,DW,0,C,[Dh],1,3,0,0,0,Fi,0,
DW,[CK],0,3,0,0,["jV",AVi(ALs)],Go,0,C,[Dh,IZ],0,0,0,0,["hQ",AVi(JC),"cw",AVh(N)],H3,0,C,[],3,3,0,0,0,M,0,Go,[H3],0,3,0,0,["lJ",AVl(ALm),"kU",AVk(AIj),"cw",AVh(DU),"hQ",AVi(ALv),"mh",AVj(ALZ)],Er,0,Hk,[],0,3,0,0,0,ACI,0,Er,[],0,3,0,0,0,AA0,0,Er,[],0,3,0,0,0,T_,0,C,[],3,3,0,0,0,Dr,0,C,[],3,3,0,0,0,O7,0,C,[],3,0,0,0,0,IH,0,C,[T_,Dr,O7],1,3,0,0,["d4",AVh(FT)],RM,0,IH,[],0,3,0,0,0,Y6,0,C,[],0,3,0,0,0,AD1,0,C,[],4,3,0,0,0,Bd,0,C,[],3,3,0,0,0,Ui,0,C,[Bd],0,3,0,0,0,Bw,0,C,[],3,3,0,0,0,ABO,0,C,[Bw],1,3,0,0,0,Y_,0,C,
[],3,3,0,0,0,ADB,0,C,[],3,3,0,0,0,ADu,0,C,[],3,3,0,0,0,LY,0,C,[],0,3,0,0,0,ZU,0,C,[Bw],1,3,0,0,0,BP,0,C,[Bw],3,3,0,0,0,Uj,0,C,[BP],0,3,0,0,["bb",AVi(AE_)],Uh,0,C,[BP],0,3,0,0,["bb",AVi(AQ5)],Lz,0,C,[],4,3,0,0,0,ADq,0,C,[],4,3,0,0,0,AAB,0,C,[],0,3,0,0,0,AE4,0,C,[],4,3,0,0,0,Ns,0,C,[BP],0,3,0,0,["bb",AVi(ANo)]]);
$rt_metadata([ADR,0,C,[Bw],1,3,0,0,0,Zm,0,C,[],0,3,0,0,0,JR,0,C,[Bw],3,3,0,0,0,AAQ,0,C,[JR],1,3,0,0,["Hv",AVi(ASi),"GP",AVh(AHh)],ABo,0,C,[Bw],1,3,0,0,0,Hg,0,C,[],3,3,0,0,0,To,0,C,[Hg],0,3,0,0,0,BA,0,Bq,[],0,3,0,0,0,ACn,0,C,[],4,3,0,0,0,GG,0,Bq,[],0,3,0,0,0,IT,0,Bq,[],0,3,0,0,0,C8,0,C,[CK],0,3,0,0,0,ML,0,C,[Bw],3,3,0,0,0,S0,0,C,[ML],3,3,0,0,0,Ej,0,C,[Bw],3,3,0,0,0,AD0,0,C,[S0,Ej],3,3,0,0,0,N2,0,C,[BP],0,3,0,0,["bb",AVi(AOv)],ABl,0,C,[],4,3,0,0,0,Pv,0,C,[Ej],3,3,0,0,0,RC,0,C,[Ej],3,3,0,0,0,Rs,0,C,[Ej],3,3,0,
0,0,T5,0,C,[Ej],3,3,0,0,0,XC,0,C,[Ej],3,3,0,0,0,Vc,0,C,[Ej,Pv,RC,Rs,T5,XC],3,3,0,0,0,OP,0,C,[],3,3,0,0,0,Y$,0,C,[Bw,Vc,OP,JR],1,3,0,0,["Fn",AVj(ALU),"HA",AVj(AMi),"y6",AVi(AGh),"DX",AVk(ANt),"BV",AVi(ARo),"B6",AVh(AHk),"Ap",AVk(AFx)],BI,0,Bq,[],0,3,0,0,0,Yy,0,Bq,[],0,3,0,0,0,Hh,0,BA,[],0,3,0,0,0,AAk,0,C,[],0,3,0,0,0,D6,0,C,[],4,3,0,KC,["cq",AVi(ARa)],OO,0,C,[],3,3,0,0,0,S9,0,C,[OO],0,3,0,0,0,B4,0,C,[],3,3,0,0,0,Sb,0,C,[B4],0,3,0,0,0,Bj,0,C,[],3,3,0,0,0,ABI,0,C,[Bj],0,3,0,0,0,AAS,0,C,[Bw],1,3,0,0,0,ABi,0,C,[Bw],
1,3,0,0,0,Rw,0,C,[Bw],3,3,0,0,0,V$,0,C,[Rw],0,3,0,0,["DZ",AVi(AKu)],V3,0,C,[Bj],0,3,0,0,0,Qk,0,C,[Bw],3,3,0,0,0,V4,0,C,[Qk],0,3,0,0,["u0",AVj(AID)],AD9,0,C,[Bw],1,3,0,0,0,Cm,0,C,[Bw],3,3,0,0,0,V1,0,C,[Cm],0,3,0,0,["ce",AVi(AOD)],K$,0,C,[],3,3,0,0,0,EC,0,C,[K$],1,3,0,0,0,En,0,C,[],3,3,0,0,0]);
$rt_metadata([X3,0,C,[K$],3,3,0,0,0,Nl,0,C,[X3],3,3,0,0,0,Ph,0,EC,[En,Dh,Nl],0,3,0,0,0,V2,0,C,[BP],0,3,0,0,["bb",AVi(APW)],AEu,0,C,[Bw],1,3,0,0,0,AEZ,0,C,[Bw],1,3,0,0,0,JW,0,C,[Bw],3,3,0,0,0,Xt,0,C,[JW],0,3,0,0,["vd",AVi(AOZ)],ABa,0,C,[Bw],1,3,0,0,0,Xu,0,C,[JW],0,3,0,0,["vd",AVi(AMB)],PE,0,C,[],0,3,0,0,0,Lo,0,C,[],1,3,0,0,0,ADz,0,Lo,[],0,3,0,0,0,Cw,0,C,[Dr],1,3,0,0,["cN",AVi(AR1)],Jc,0,C,[Hg],0,3,0,0,["uP",AVj(Jy)],AAr,0,C,[],0,3,0,0,0,WV,0,C,[Cm],0,3,0,0,["ce",AVi(AN4)],WW,0,C,[Cm],0,3,0,0,["ce",AVi(AOj)],WX,
0,C,[Cm],0,3,0,0,["ce",AVi(AMz)],WY,0,C,[Cm],0,3,0,0,["ce",AVi(ALV)],WZ,0,C,[Cm],0,3,0,0,["ce",AVi(AMm)],W0,0,C,[Cm],0,3,0,0,["ce",AVi(AOS)],W1,0,C,[Cm],0,3,0,0,["ce",AVi(AJ8)],W2,0,C,[Cm],0,3,0,0,["ce",AVi(ASp)],W3,0,C,[Cm],0,3,0,0,["ce",AVi(AJl)],W4,0,C,[Cm],0,3,0,0,["ce",AVi(AP5)],Yj,0,C,[Cm],0,3,0,0,["ce",AVi(AR2)],Yk,0,C,[Cm],0,3,0,0,["ce",AVi(AL$)],Yl,0,C,[Cm],0,3,0,0,["ce",AVi(AMD)],Ym,0,C,[Cm],0,3,0,0,["ce",AVi(AOx)],UD,0,C,[],3,3,0,0,0,UQ,0,C,[UD],0,3,0,0,0,UO,0,C,[Cm],0,3,0,0,["ce",AVi(ALc)],MM,0,
C,[],0,3,0,0,0,AEk,0,C,[],0,3,0,0,0,IX,0,C,[],3,3,0,0,0,Co,0,C,[IX],3,3,0,0,0,Cr,0,C,[],3,3,0,0,["bL",AVi(ALh),"b_",AVj(AQ6),"cO",AVj(AF1),"cs",AVk(AOQ)],DG,0,C,[],3,3,0,0,0,Ex,0,C,[IX],3,3,0,0,0,EK,0,C,[],3,3,0,0,0,EP,0,C,[],3,3,0,0,0,Fa,0,C,[EP],3,3,0,0,0,Qt,0,C,[Dr],0,3,0,0,0,Bf,0,C,[],0,3,0,0,["cw",AVh(YE)],L7,0,C,[],0,3,0,0,0,ADx,0,C,[],0,3,0,0,0,ZC,0,C,[],3,3,0,0,0,Qj,0,C,[],0,3,0,0,0,LP,0,C,[],0,3,0,0,0]);
$rt_metadata([Dx,0,LP,[],0,3,0,0,0,WG,0,Dx,[],0,3,0,0,0,EB,0,Dx,[],0,3,0,0,0,AA$,0,Dx,[],0,3,0,0,0,AC_,0,EB,[],0,3,0,0,0,ACN,0,EB,[],0,3,0,0,0,ZW,0,EB,[],0,3,0,0,0,ACL,0,Dx,[],0,3,0,0,0,Sk,0,C,[Bw],3,3,0,0,0,AE2,0,C,[Sk],3,3,0,0,0,Qg,0,C,[Dr],0,3,0,0,0,Qi,0,C,[],0,3,0,0,0,Ck,0,C,[CK,Dh],1,3,0,0,0,GS,0,Ck,[],12,3,0,JJ,0,Mu,0,C,[],3,3,0,0,0,TN,0,C,[Mu],3,3,0,0,0,U4,0,C,[],3,3,0,0,0,Gt,0,C,[TN,U4],1,3,0,0,0,Js,0,Gt,[],0,3,0,0,0,AAW,0,Js,[],0,3,0,0,0,Gf,0,Gt,[],1,3,0,0,0,Lx,0,Gf,[],0,3,0,0,["kn",AVk(AK6)],DY,0,
Ck,[],12,3,0,ARh,0,Jk,0,C,[CK],1,3,0,0,0,Mx,0,Jk,[],0,3,0,AAK,0,Kv,0,C,[],32,0,0,Y9,0,Pm,0,C,[],0,3,0,0,0,GW,0,Ck,[],12,0,0,ACd,0,Gn,0,Ck,[],12,0,0,ACe,0,KR,0,Gf,[],0,3,0,0,["kn",AVk(AI1)],V_,0,D4,[],0,3,0,0,0,ADp,0,BI,[],0,3,0,0,0,Mw,0,C,[Bw],3,3,0,0,0,X0,0,C,[Mw],0,3,0,0,["bb",AVi(APy)],X1,0,C,[Mw],0,3,0,0,["bb",AVi(AGR)],G8,0,C,[],1,3,0,0,0,SD,0,C,[],3,3,0,0,0,Le,0,G8,[CK,H3,IZ,SD],1,3,0,0,0,JT,0,G8,[CK],1,3,0,0,0,HL,0,C,[],0,3,0,He,0,Nr,0,Cw,[],0,3,0,0,["bC",AVh(AL5),"b6",AVj(AKx)],CS,0,Cw,[],1,3,0,0,["b6",
AVj(G2)],QF,0,C,[],3,3,0,0,0,LQ,0,C,[QF],3,3,0,0,0,Lj,0,C,[],3,3,0,0,0,Mr,0,CS,[Cr,LQ,Lj,DG,EK,Fa],0,3,0,0,["gB",AVj(AKh),"cN",AVi(AIY),"bC",AVh(AQ_),"f5",AVh(APV),"uT",AVh(AJX),"vi",AVh(APh),"s3",AVi(AP3),"b6",AVj(AOT),"ik",AVi(AGP),"bL",AVi(AMc),"cs",AVk(AL9),"b_",AVj(AGl),"cO",AVj(AJm),"c0",AVk(AOg),"dt",AVh(ALQ)],Wk,0,Mr,[],0,3,0,0,["f5",AVh(AIc)],AEJ,0,C,[],0,3,0,0,0,ABF,0,C,[Bw],1,3,0,0,0,J$,0,Le,[],1,0,0,0,0]);
$rt_metadata([ABn,0,J$,[],0,0,0,0,0,K2,0,C,[],1,3,0,0,0,LW,0,C,[],0,3,0,0,0,Zj,0,C,[],0,3,0,0,0,Iu,0,C,[Bw],3,3,0,0,0,NB,0,C,[Iu],0,3,0,0,["bb",AVi(AI6)],NA,0,C,[Iu],0,3,0,0,["bb",AVi(ANs)],Nz,0,C,[BP],0,3,0,0,["bb",AVi(AOd)],Ny,0,C,[BP],0,3,0,0,["bb",AVi(AHt)],Yf,0,C,[Bd],0,3,0,0,["l",AVi(ANa)],Yh,0,C,[Bd],0,3,0,0,["l",AVi(ANO)],TF,0,C,[B4],0,3,0,0,["bW",AVi(ANK)],TE,0,C,[B4],0,3,0,0,["bW",AVi(AGs)],TD,0,C,[B4],0,3,0,0,["bW",AVi(AKb)],TC,0,C,[B4],0,3,0,0,["bW",AVi(AJ$)],TB,0,C,[B4],0,3,0,0,["bW",AVi(AKQ)],TA,
0,C,[B4],0,3,0,0,["bW",AVi(AGA)],Tz,0,C,[B4],0,3,0,0,["bW",AVi(AIe)],Ty,0,C,[B4],0,3,0,0,["bW",AVi(AN3)],Tx,0,C,[B4],0,3,0,0,["bW",AVi(ARM)],Tw,0,C,[B4],0,3,0,0,["bW",AVi(ASB)],Q9,0,C,[B4],0,3,0,0,["bW",AVi(ALI)],Q5,0,C,[B4],0,3,0,0,["bW",AVi(AFl)],Q7,0,C,[B4],0,3,0,0,["bW",AVi(AI2)],Q3,0,C,[B4],0,3,0,0,["bW",AVi(AL0)],Q4,0,C,[B4],0,3,0,0,["bW",AVi(APS)],Q1,0,C,[B4],0,3,0,0,["bW",AVi(AFb)],Q2,0,C,[B4],0,3,0,0,["bW",AVi(APE)],QZ,0,C,[B4],0,3,0,0,["bW",AVi(ALM)],Hd,0,C,[],0,3,0,0,0,O$,0,Hd,[],0,3,0,0,0,ADJ,0,
C,[],0,3,0,0,0,MI,0,Hd,[],0,3,0,0,0,UF,0,C,[Bw],3,3,0,0,0,NW,0,C,[UF],0,3,0,0,["vd",AVi(ALB)],Vo,0,C,[Bd],0,3,0,0,["l",AVi(WI)],Xn,0,JT,[],0,0,0,0,0,II,0,C,[],0,3,0,0,0,AC2,0,C,[Cr,DG],0,0,0,0,["bL",AVi(AO1),"cs",AVk(ASG),"b_",AVj(AGS),"cO",AVj(ANq),"c0",AVk(ALS)],HV,0,C,[],3,3,0,0,["vx",AVh(AHT),"sT",AVh(ASN)],AA2,0,C,[HV,Cr,Lj],0,3,0,0,["sT",AVh(AIL),"vx",AVh(AHp),"uT",AVh(Yt),"vi",AVh(W9),"s3",AVi(Yu),"cO",AVj(Vj),"b_",AVj(Vq),"cs",AVk(Q8),"bL",AVi(PH),"g8",AVi(ANF)],HT,0,C,[],3,3,0,0,0,Rj,0,C,[HT],0,3,0,
0,["h$",AVi(AKs)],Rh,0,C,[HT],0,3,0,0,["h$",AVi(AMA)],Ri,0,C,[Bd],0,3,0,0,["l",AVi(AGf)],Rf,0,C,[Bd],0,3,0,0,["l",AVi(AFR)],Rg,0,C,[Co],0,3,0,0,["bA",AVi(AMd)],HO,0,C,[Co],0,3,0,0,["bA",AVi(APG)],Rd,0,C,[Bd],0,3,0,0,["l",AVi(AOa)],Re,0,C,[Ex],0,3,0,0,["bA",AVi(AK4)]]);
$rt_metadata([ACx,0,C,[Bw],1,3,0,0,0,Zx,0,C,[],3,3,0,0,0,Yr,0,C,[],0,3,0,0,0,SI,0,C,[Co],0,3,0,0,["bA",AVi(ASJ)],SJ,0,C,[Co],0,3,0,0,["bA",AVi(AFD)],B1,0,C,[],0,3,0,0,["cq",AVi(ASk)],Ep,0,C,[],3,3,0,0,0,ABE,0,C,[Cr,Ep],0,3,0,0,["bL",AVi(ZI),"cs",AVk(ABD),"b_",AVj(YF),"cO",AVj(AEL),"gC",AVj(ARy)],Y7,0,C,[Ep,HV],0,3,0,0,["vx",AVh(AHT),"sT",AVh(ASN),"gC",AVj(AHn),"g8",AVi(AFS)],ABp,0,C,[],0,3,0,0,0,Ld,0,C,[],0,3,0,0,0,IG,0,C,[],0,3,0,0,0,Wm,0,C,[],0,3,0,0,0,YK,0,C,[],0,3,0,0,0,NF,0,C,[],0,3,0,0,0,EW,0,C,[Dr],0,
0,0,0,0,ABQ,0,C,[],0,3,0,0,0,ABR,0,C,[Dr],0,3,0,0,0,WE,0,C,[],3,3,0,0,0,Hx,0,C,[WE],3,3,0,0,0,EQ,0,C,[Hx],1,3,0,0,0,Jg,0,C,[Hx],3,3,0,0,0,F$,0,EQ,[Jg],1,3,0,0,["cq",AVi(AMR)],Ly,0,C,[],3,3,0,0,0,Zq,0,F$,[En,Dh,Ly],0,3,0,0,0,Va,0,C,[Bd],0,3,0,0,0,U_,0,C,[Bd],0,3,0,0,["l",AVi(APF)],U7,0,C,[Bd],0,3,0,0,["l",AVi(ANu)],U6,0,C,[Bj],0,3,0,0,["q",AVh(APB)],U9,0,C,[Bj],0,3,0,0,["q",AVh(AKq)],U8,0,C,[Bj],0,3,0,0,["q",AVh(AML)],VA,0,C,[Bj],0,3,0,0,["q",AVh(AO0)],Vz,0,C,[Bj],0,3,0,0,["q",AVh(AJ3)],VB,0,C,[Bj],0,3,0,0,["q",
AVh(AFy)],Fu,0,Ck,[],12,3,0,AFI,0,Kr,0,C,[],4,3,0,AKO,0,UW,0,C,[],3,3,0,0,0,MT,0,C,[Bj],0,3,0,0,["q",AVh(ALT)],MU,0,C,[Bj],0,3,0,0,["q",AVh(AKj)],Yi,0,C,[],3,3,0,0,0,Ki,0,C,[],0,3,0,0,0,EZ,0,C,[],0,3,0,0,0,Mz,0,EZ,[],0,3,0,0,0,MX,0,EZ,[],0,3,0,0,0,Qq,0,EZ,[],0,3,0,0,0,G3,0,C,[],3,3,0,0,0,RN,0,C,[],3,3,0,0,0,Gq,0,C,[CK],0,3,0,0,0,Jo,0,C,[],0,3,0,0,0,Wz,0,C,[],3,3,0,0,0]);
$rt_metadata([Tj,0,C,[Wz],0,3,0,0,["cw",AVh(AHZ)],UY,0,C,[],3,3,0,0,0,Lc,"JsFileHandle",5,C,[UY],0,3,0,0,["cw",AVh(ALa)],N6,0,C,[UW],0,3,0,0,0,ABB,0,EC,[En,Dh],0,3,0,0,0,CC,0,C,[],0,3,0,0,0,NX,0,C,[Bj],0,3,0,0,["q",AVh(AR8)],B6,0,C,[],0,3,0,0,0,Nx,0,C,[],0,3,0,0,0,AEt,0,C,[CK],0,3,0,0,["cq",AVi(AQc),"jV",AVi(AG8)],OX,0,C,[Hg],0,3,0,0,["uP",AVj(AMp)],ADy,0,C,[],0,3,0,0,["cw",AVh(AKg),"cq",AVi(APo)],HZ,0,C,[],0,3,0,0,0,I2,0,C,[],0,3,0,0,0,KY,0,K2,[],1,3,0,0,0,PB,0,KY,[],0,3,0,0,0,Iy,0,D4,[],0,3,0,0,0,XX,0,C,[Iu],
0,3,0,0,["bb",AVi(AHM)],XV,0,C,[BP],0,3,0,0,["bb",AVi(AFB)],XW,0,C,[BP],0,3,0,0,["bb",AVi(AJJ)],Hn,0,C,[],3,3,0,0,0,KI,0,C,[Hn,En],0,0,0,0,["cq",AVi(AH4)],Ij,0,KI,[],0,0,0,0,0,Q6,0,C,[],0,3,0,0,0,L_,0,C,[],0,3,0,0,0,ZJ,0,C,[],0,3,0,0,0,KE,0,CS,[LQ],0,3,0,0,["cN",AVi(AHC),"bC",AVh(AKt),"f5",AVh(AOr),"b6",AVj(AMY),"lg",AVj(AAx),"ik",AVi(AGt)],Zc,0,Cw,[],0,3,0,0,["cN",AVi(AFM),"bC",AVh(AIS),"b6",AVj(APw)],WC,0,CS,[Cr,Ep],0,3,0,0,["gC",AVj(AQ1),"b6",AVj(AIk),"bC",AVh(AI7),"bL",AVi(AON),"b_",AVj(AJd),"cO",AVj(AGW),
"cs",AVk(AN6)],XS,0,CS,[Ep],0,3,0,0,["gC",AVj(AJg),"bC",AVh(AOp),"b6",AVj(AHx),"cN",AVi(APD)],Yx,0,CS,[Cr],0,3,0,0,["bL",AVi(ALh),"b_",AVj(AQ6),"cO",AVj(AF1),"cs",AVk(AOQ),"bC",AVh(AOY),"cN",AVi(AHX)],Ps,0,Cw,[],0,3,0,0,["bC",AVh(AF4),"b6",AVj(AQJ)],Db,0,Cw,[],0,3,0,0,["bC",AVh(SC),"b6",AVj(S$)],Rl,"SelectFileTest",6,Db,[],0,3,0,0,0,AEB,"WorkerTest",7,Db,[],0,3,0,0,0,Xg,"RenderTexture",6,Db,[],0,3,0,0,["cN",AVi(ALt),"bC",AVh(AFF),"b6",AVj(AOn)],SF,"ScissorDemo",6,Db,[],0,3,0,0,["bC",AVh(ASd),"b6",AVj(AHo)],O3,
0,Cw,[],0,3,0,0,["bC",AVh(ASg),"b6",AVj(AJB),"cN",AVi(AH3)],ID,"ClipboardTest",6,Db,[Cr],0,3,0,0,["bL",AVi(ALh),"b_",AVj(AQ6),"cO",AVj(AF1),"cs",AVk(APq)],Qp,0,Cw,[],0,3,0,0,["bC",AVh(AR9),"b6",AVj(AMu)],Ga,0,Cw,[Cr],1,3,0,0,["bL",AVi(ALh),"b_",AVj(AQ6),"cO",AVj(AF1),"cs",AVk(AOQ),"bC",AVh(AAY)],O_,0,Ga,[],0,3,0,0,["b_",AVj(AQ6),"cO",AVj(AF1),"cs",AVk(AOQ),"b6",AVj(AM6),"bL",AVi(AIt)],Pa,0,Ga,[],0,3,0,0,["b_",AVj(AQ6),"cO",AVj(AF1),"cs",AVk(AOQ),"bL",AVi(AKp),"bC",AVh(AGX),"b6",AVj(ALz)],WT,0,CS,[Ep],0,3,0,
0,["gC",AVj(AKB),"bC",AVh(ASw),"b6",AVj(AOF),"cN",AVi(ALo)],RF,0,KE,[],0,3,0,0,["f5",AVh(AKH),"lg",AVj(AMx)],ACG,0,C,[],3,3,0,0,0,H$,0,C,[],0,3,0,0,0,ADA,0,C,[],0,3,0,0,0,MC,0,C,[Hn,Dh],0,3,0,0,0,Ju,0,MC,[],0,0,0,0,0]);
$rt_metadata([AEh,0,C,[],0,3,0,0,0,Sr,0,C,[Co],0,3,0,0,["bA",AVi(AMH)],Sv,0,C,[Bd],0,3,0,0,["l",AVi(ARP)],Su,0,C,[EK],0,3,0,0,["gB",AVj(AMI)],St,0,C,[Fa],0,3,0,0,["dt",AVh(ARx)],Ss,0,C,[DG],0,3,0,0,["c0",AVk(AQV)],Sw,0,C,[Ex],0,3,0,0,["bA",AVi(AJN)],ADK,0,II,[],0,3,0,0,0,Ue,0,C,[Cr],0,0,0,0,["bL",AVi(AOy),"cs",AVk(AQa),"b_",AVj(AIP),"cO",AVj(AIp)],R5,0,C,[Co],0,3,0,0,["bA",AVi(AOs)],R4,0,C,[Co],0,3,0,0,["bA",AVi(AQ8)],R7,0,C,[EK],0,3,0,0,["gB",AVj(ARG)],R6,0,C,[Bj],0,3,0,0,["q",AVh(ARE)],R3,0,C,[Ex],0,3,0,0,
["bA",AVi(AMO)],R2,0,C,[DG],0,3,0,0,["c0",AVk(AKo)],Hf,0,B1,[],0,3,0,0,0,Vn,0,C,[],0,3,0,0,0,Z5,0,C,[],0,3,0,0,0,TH,0,C,[Co],0,3,0,0,["bA",AVi(AOX)],TK,0,C,[Ex],0,3,0,0,["bA",AVi(AFq)],AEy,0,C,[],0,3,0,0,["cq",AVi(ASF)],TJ,0,C,[Bj],0,3,0,0,["q",AVh(AJ7)],TG,0,C,[Bj],0,3,0,0,["q",AVh(AQn)],C$,0,C,[],0,3,0,0,0,OT,0,C,[Co],0,3,0,0,["bA",AVi(AHm)],OU,0,C,[Ex],0,3,0,0,["bA",AVi(AQF)],ACz,0,C,[],0,3,0,0,0,OV,0,C,[DG],0,3,0,0,["c0",AVk(ANC)],AEj,0,C,[],0,3,0,0,0,Us,0,C,[Ep],0,3,0,0,["gC",AVj(ANg)],Ut,0,C,[Co],0,3,
0,0,["bA",AVi(AFv)],NE,0,C,[],3,3,0,0,0,ADH,0,C,[NE],0,3,0,0,0,WS,0,C,[Cr],0,0,0,0,["cs",AVk(AOQ),"b_",AVj(AHg),"cO",AVj(AOI),"bL",AVi(AIJ)],Td,0,C,[DG],0,3,0,0,["c0",AVk(AH2)],Qm,0,C,[Co],0,3,0,0,["bA",AVi(APt)],RJ,0,C,[Bd],0,3,0,0,["l",AVi(AFZ)],RI,0,C,[Bd],0,3,0,0,["l",AVi(ASl)],RH,0,C,[Bd],0,3,0,0,["l",AVi(AIm)],RG,0,C,[Bd],0,3,0,0,["l",AVi(ANw)],RE,0,C,[Bd],0,3,0,0,["l",AVi(AMC)],RD,0,C,[Bd],0,3,0,0,["l",AVi(AOG)],Ud,0,C,[Cr],0,0,0,0,["cO",AVj(AF1),"cs",AVk(AOQ),"bL",AVi(AQH),"b_",AVj(AMG)],C1,0,C,[],3,
3,0,FQ,0,UC,0,C,[Cr],0,0,0,0,["cs",AVk(AOQ),"b_",AVj(ANL),"cO",AVj(AHi),"bL",AVi(AF_)],N_,0,C,[DG],0,3,0,0,["c0",AVk(AF3)],SS,0,C,[Co],0,3,0,0,["bA",AVi(AQM)],SR,0,C,[EK],0,3,0,0,["gB",AVj(AIK)],SP,0,C,[EK],0,3,0,0,["gB",AVj(AQb)],SO,0,C,[Fa],0,3,0,0,["dt",AVh(AN5)]]);
$rt_metadata([SQ,0,C,[Fa],0,3,0,0,["dt",AVh(AG$)],Sl,0,C,[Co],0,3,0,0,["bA",AVi(AIR)],QM,0,C,[Co],0,3,0,0,["bA",AVi(AJo)],QN,0,C,[Ex],0,3,0,0,["bA",AVi(AFw)],QO,0,C,[DG],0,3,0,0,["c0",AVk(AO6)],ABr,0,C,[],0,3,0,0,["cq",AVi(ARj)],CZ,0,C,[],3,3,0,ANm,0,Cb,0,Ck,[],12,3,0,ABM,0,IN,0,C,[],0,3,0,0,0,HH,0,C,[],0,3,0,0,0,ADd,0,C,[],0,3,0,0,0,GD,0,C,[],4,3,0,0,0,AE6,0,C,[],0,3,0,0,0,DT,0,C,[],3,3,0,AKc,0,O1,0,C,[Bw],3,3,0,0,0,Pk,0,C,[O1],0,3,0,0,["u0",AVj(AJu)],O2,0,C,[Bw],3,3,0,0,0,Pi,0,C,[O2],0,3,0,0,["u0",AVj(AKG)],ZY,
0,C,[],0,3,0,0,0,Y2,0,C,[Bw],3,3,0,0,0,Jt,0,C,[Dr],0,3,0,0,["d4",AVh(ACR)],T$,0,C,[],0,3,0,0,0,DS,0,C,[],3,3,0,Yg,0,Gu,0,C,[],3,3,0,0,0,Xz,0,C,[Gu],0,3,0,0,["n4",AVk(APk)],XA,0,C,[Gu],0,3,0,0,0,Wo,0,C,[Cr],0,0,0,0,["bL",AVi(AFC),"cs",AVk(APm),"b_",AVj(ANk),"cO",AVj(AKP)],Yw,0,C,[Bd],0,3,0,0,["l",AVi(AOJ)],AB2,0,C,[],0,3,0,0,0,PT,0,C,[Bd],0,3,0,0,["l",AVi(AKX)],Qy,0,C,[Co],0,3,0,0,["bA",AVi(AK2)],RS,0,C,[Cr],0,0,0,0,["b_",AVj(AQ6),"cO",AVj(AF1),"cs",AVk(AOQ),"bL",AVi(AFG)],AAa,0,C,[],0,3,0,0,0,Cj,0,Ck,[],12,
3,0,ACf,0,AEo,0,C,[],0,3,0,0,0,AAZ,0,C,[Bw],4,3,0,0,0,AER,0,C,[],0,3,0,0,0,AEa,0,C,[],3,3,0,0,0,CT,0,C,[Bw],1,3,0,0,0,ACr,0,CT,[],1,3,0,0,0,AC8,0,CT,[],1,3,0,0,0,Z2,0,CT,[],1,3,0,0,0,AAm,0,CT,[],1,3,0,0,0,ADI,0,CT,[],1,3,0,0,0,UG,0,C,[Bj],0,3,0,0,["q",AVh(AMh)],Zw,0,C,[],0,3,0,0,0,H9,0,C,[],0,3,0,0,0,AAI,0,C,[],4,3,0,0,0,Wj,0,C,[Cr],0,0,0,0,["b_",AVj(AQ6),"cO",AVj(AF1),"cs",AVk(AOQ),"bL",AVi(APO)],AAU,0,C,[Bw],1,3,0,0,0]);
$rt_metadata([M5,0,C,[Bd],0,3,0,0,["l",AVi(AP0)],Wt,0,C,[EP],0,3,0,0,["dt",AVh(ASa)],AEY,0,C,[],0,3,0,0,0,ACo,0,C,[],3,3,0,0,0,LM,0,C,[],3,3,0,0,0,RK,0,C,[LM],0,3,0,0,["rf",AVi(AMZ)],QJ,0,C,[Bd],0,3,0,0,["l",AVi(ARm)],YJ,0,C,[],0,3,0,0,0,Nw,0,C,[Dr],0,3,0,0,0,Ye,0,C,[Bd],0,3,0,0,["l",AVi(AN0)],YZ,0,C,[],0,3,0,0,0,ADW,0,C,[CK],0,3,0,0,["cq",AVi(AFN),"jD",AVh(AO5),"jV",AVi(AOB)],R1,0,C,[Bd],0,3,0,0,["l",AVi(AMV)],SM,0,C,[],3,3,0,0,0,FH,0,C,[],3,3,0,0,0,NO,0,C,[FH],0,0,0,0,0,FS,0,Iy,[],0,3,0,0,0,Xx,0,EI,[],0,3,
0,0,0,Qx,0,C,[Bd],0,3,0,0,["l",AVi(AN1)],UA,0,C,[Bj],0,3,0,0,["q",AVh(AQC)],Mm,0,DW,[CK],0,3,0,0,0,FE,0,C,[],0,0,0,0,0,Kb,0,C,[],4,3,0,0,0,VT,0,C,[],0,3,0,0,0,Me,0,C,[],1,3,0,0,0,ABe,0,CT,[],1,3,0,0,0,QW,0,C,[Bd],0,3,0,0,["l",AVi(AJW)],Wa,0,C,[Bd],0,3,0,0,["l",AVi(ASn)],QB,0,C,[Bd],0,3,0,0,["l",AVi(AM7)],EL,0,C,[Dr],0,3,0,0,["d4",AVh(ANA),"jg",AVh(ARp),"jj",AVk(Qa),"e_",AVi(ZM),"kv",AVi(AIO),"kl",AVi(AQg),"pZ",AVj(ASt),"cs",AVk(AQP),"b_",AVj(AP6),"cO",AVj(ARc),"bL",AVi(AMT),"c0",AVk(AIG)],GH,0,EL,[],0,3,0,0,
0,Rk,0,GH,[HV],0,3,0,0,["vx",AVh(AHT),"sT",AVh(ASN),"d4",AVh(ASH),"pZ",AVj(AHQ),"e_",AVi(AKy),"kl",AVi(ALK),"kv",AVi(AIn),"u2",AVh(Z4),"bL",AVi(ARC),"b_",AVj(AFT),"cs",AVk(AF8),"g8",AVi(ALg)],Wi,0,C,[Bj],0,3,0,0,["q",AVh(ASu)],AAR,0,EL,[],0,3,0,0,["d4",AVh(AGa),"jj",AVk(AHV),"e_",AVi(APL),"cs",AVk(AJ4),"b_",AVj(AQS),"cO",AVj(AJE),"bL",AVi(AKZ),"c0",AVk(APY),"jg",AVh(ANf)],Wq,0,GH,[],0,3,0,0,["u2",AVh(AN2),"jg",AVh(ALO),"kl",AVi(AKA),"e_",AVi(AIg),"kv",AVi(ALe)],PL,0,C,[Bd],0,3,0,0,0,VN,0,C,[Bj],0,3,0,0,["q",
AVh(AOm)],RQ,0,C,[Bj],0,3,0,0,["q",AVh(AKi)],X5,0,C,[],0,3,0,0,0,H6,0,C,[],0,3,0,0,0,TX,0,EL,[],0,3,0,0,0,Uy,0,C,[],0,3,0,0,0,YB,0,C,[Bj],0,3,0,0,["q",AVh(AIu)],VU,0,C,[Bd],0,3,0,0,["l",AVi(ARn)],VV,0,C,[Bd],0,3,0,0,["l",AVi(AGj)],Jw,0,C,[],0,3,0,0,0,D1,0,Bq,[],0,3,0,0,0,ACK,0,EI,[],0,3,0,0,0,Ug,0,C,[Bd],0,3,0,0,0,N5,0,C,[Bd],0,3,0,0,["l",AVi(AF2)]]);
$rt_metadata([N3,0,C,[Bd],0,3,0,0,["l",AVi(AH6)],Kx,0,Me,[],1,3,0,0,0,T1,0,Kx,[],0,3,0,0,0,Qc,0,C,[Bd],0,3,0,0,["l",AVi(AG_)],Vg,0,C,[EP],0,3,0,0,["dt",AVh(AP$)],Vh,0,C,[EP],0,3,0,0,["dt",AVh(APx)],Tl,0,C,[EP],0,3,0,0,["dt",AVh(AP_)],VM,0,C,[Bj],0,3,0,0,["q",AVh(ANi)],QY,0,C,[BP],0,3,0,0,["bb",AVi(AFj)],U3,0,C,[BP],0,3,0,0,["bb",AVi(ARY)],Ot,0,C,[Bd],0,3,0,0,0,ABW,0,C,[B4],0,3,0,0,0,ZZ,0,C,[B4],0,3,0,0,0,SH,0,C,[Bd],0,3,0,0,["l",AVi(AGi)],SG,0,C,[Bd],0,3,0,0,["l",AVi(AG2)],Qv,0,C,[Bd],0,3,0,0,["l",AVi(AOR)],Tu,
0,C,[Bj],0,3,0,0,["q",AVh(AKk)],IQ,0,Bq,[],0,3,0,0,0,Oa,0,C,[Bd],0,3,0,0,["l",AVi(ANZ)],J7,0,DW,[CK],0,3,0,0,0,LI,0,C,[],4,3,0,0,0,M4,0,C,[BP],0,3,0,0,["bb",AVi(ASM)],Um,0,C,[],0,3,0,0,0,NI,0,C,[Gu],0,3,0,0,["n4",AVk(ARF)],Sq,0,DW,[CK],0,3,0,0,0,Gm,0,Bq,[],0,3,0,0,0,NV,0,C,[],0,3,0,0,0,ADY,0,C,[],0,3,0,0,0,Tm,0,C,[],0,0,0,0,0,ZA,0,C,[],3,3,0,0,0,XP,0,C,[BP],0,3,0,0,["bb",AVi(APR)],XO,0,C,[BP],0,3,0,0,["bb",AVi(AIa)],Xc,0,C,[BP],0,3,0,0,["bb",AVi(AJI)],Xb,0,C,[BP],0,3,0,0,["bb",AVi(AKE)],Y1,0,C,[],1,3,0,0,0,Xk,
0,C,[],3,3,0,0,0,XJ,0,C,[Cm],0,3,0,0,["ce",AVi(AJz)],AAC,0,C,[],0,3,0,0,0,AEi,0,C,[],0,3,0,0,0,UP,0,C,[Bj],0,3,0,0,["q",AVh(AKd)],UR,0,C,[Bj],0,3,0,0,["q",AVh(APg)],ACU,0,C,[],0,3,0,0,0,E0,0,C,[],0,3,0,0,0,O9,0,C,[Hx],3,3,0,0,0,Gi,0,EQ,[O9],1,3,0,0,0,Kk,0,Gi,[],1,0,0,0,0,V0,0,Kk,[],0,0,0,0,0,LE,0,EC,[],1,0,0,0,0,VY,0,LE,[],0,0,0,0,0,L9,0,F$,[Ly],1,0,0,0,0]);
$rt_metadata([VZ,0,L9,[],0,0,0,0,0,VW,0,C,[FH],0,0,0,0,0,Pz,0,C,[FH],3,3,0,0,0,VX,0,C,[Pz],0,0,0,0,0,Yv,0,C,[Hg],0,3,0,0,0,I9,0,Gm,[],0,3,0,0,0,H2,0,Bq,[],0,3,0,0,0,L3,0,Bq,[],0,3,0,0,0,AA3,0,C,[Bd],0,3,0,0,0,SK,0,C,[Bj],0,3,0,0,["q",AVh(AR3)],PU,0,C,[Bd],0,3,0,0,["l",AVi(AMb)],SU,0,C,[Bj],0,3,0,0,["q",AVh(AGq)],YL,0,C,[],0,3,0,0,0,G9,0,C,[],0,3,0,0,0,AC3,0,Gi,[],0,0,0,0,0,Po,0,EQ,[],0,0,0,0,0,W5,0,BA,[],0,3,0,0,0,QH,0,C,[Mu],3,3,0,0,0,NP,0,C,[QH],3,3,0,0,0,L6,0,C,[NP],1,3,0,0,0,AAH,0,L6,[],0,3,0,0,0,RW,0,C,
[Bj],0,3,0,0,["q",AVh(AG4)],RV,0,C,[Bj],0,3,0,0,["q",AVh(AFr)],RU,0,C,[Bj],0,3,0,0,["q",AVh(ALG)],RT,0,C,[Bj],0,3,0,0,["q",AVh(AQA)],PN,0,C,[Bj],0,3,0,0,["q",AVh(APU)],PP,0,C,[Bj],0,3,0,0,["q",AVh(AKK)],PQ,0,C,[Bj],0,3,0,0,["q",AVh(AHw)],XQ,0,C,[],3,3,0,0,0,WA,0,C,[Bj],0,3,0,0,["q",AVh(AGn)],Tf,0,C,[G3],0,3,0,0,["mu",AVj(AGg)],QQ,0,C,[Bd],0,3,0,0,["l",AVi(AJ_)],XZ,0,C,[Bd],0,3,0,0,["l",AVi(ALF)],VK,0,C,[LM],0,3,0,0,["rf",AVi(JU)],Tb,0,C,[Bj],0,3,0,0,["q",AVh(ALf)],Tc,0,C,[Bj],0,3,0,0,["q",AVh(AMy)],Ta,0,C,[Bj],
0,3,0,0,["q",AVh(ANW)],Ou,0,C,[Bj],0,3,0,0,["q",AVh(AJ9)],Os,0,C,[Bj],0,3,0,0,["q",AVh(AQK)],VE,0,C,[EP],0,3,0,0,["dt",AVh(AH1)],Wc,0,C,[Bj],0,3,0,0,["q",AVh(AOw)],Wg,0,C,[Bj],0,3,0,0,["q",AVh(ALn)],Wf,0,C,[Bj],0,3,0,0,["q",AVh(AGe)],Wd,0,C,[Bj],0,3,0,0,["q",AVh(AH9)],Wl,0,C,[G3],0,3,0,0,["mu",AVj(ARr)],Qb,0,C,[BP],0,3,0,0,["bb",AVi(AIo)],I0,0,C,[Bw],3,3,0,0,0,M1,0,C,[I0],0,3,0,0,["re",AVh(AKL)],MK,0,C,[I0],0,3,0,0,["re",AVh(AFc)],PJ,0,C,[Gu],0,3,0,0,0]);
$rt_metadata([XN,0,C,[BP],0,3,0,0,["bb",AVi(AJ0)],G1,0,C,[],0,0,0,0,0,U0,0,G1,[FH],0,0,0,0,0,Rp,0,G1,[FH],0,0,0,0,0,Rn,0,C,[Dh],4,3,0,0,0,Te,0,C,[Bd],0,3,0,0,["l",AVi(AGu)],Gx,0,Ck,[],12,0,0,Vf,0,Tp,0,C,[Bd],0,3,0,0,["l",AVi(ALr)],BD,0,C,[],1,0,0,0,["cm",AVk(HJ),"cp",AVl(HX),"hK",AVh(AGT),"P",AVi(AQX),"bU",AVi(AQU),"ft",AVh(ARS),"ej",AVh(Ja)],UT,0,C,[],32,0,0,ATg,0,Pp,0,C,[Bd],0,3,0,0,["l",AVi(AHS)],Wp,0,C,[Bd],0,3,0,0,["l",AVi(AJw)],YC,0,C,[Bj],0,3,0,0,["q",AVh(AHD)],CP,0,BD,[],0,0,0,Mv,["c",AVk(AGm),"I",AVi(AGH)],GO,
0,C,[],0,0,0,0,0,IV,0,BI,[],0,3,0,0,0,Xw,0,C,[BP],0,3,0,0,["bb",AVi(AOc)],ACg,0,C,[Bw],3,3,0,0,0,UE,0,C,[BP],0,3,0,0,["bb",AVi(ANN)],R$,0,CP,[],0,0,0,0,["c",AVk(AFV),"I",AVi(APs)],X8,0,CP,[],0,0,0,0,["c",AVk(AHG)],PV,0,CP,[],0,0,0,0,["c",AVk(AGQ)],Tk,0,CP,[],0,0,0,0,["c",AVk(AF0),"I",AVi(ANY)],FB,0,CP,[],0,0,0,0,["c",AVk(ARd)],BV,0,BD,[],1,0,0,0,["c",AVk(ASh),"b0",AVh(AQp),"I",AVi(AKT)],ADT,0,BV,[],0,0,0,0,["bx",AVj(APT),"cm",AVk(AI3),"cp",AVl(AHv),"I",AVi(AFY)],BS,0,BD,[],0,0,0,0,["c",AVk(AJF),"P",AVi(ANQ),
"bU",AVi(ALH),"I",AVi(AOA),"ej",AVh(AHr)],I6,0,BS,[],0,0,0,0,["c",AVk(ANz),"I",AVi(AO2)],DR,0,I6,[],0,0,0,0,["c",AVk(AH$),"P",AVi(AOH)],MZ,0,DR,[],0,0,0,0,["c",AVk(ANJ),"I",AVi(AQ2)],WB,0,DR,[],0,0,0,0,["c",AVk(AGC),"I",AVi(AQt)],Rq,0,DR,[],0,0,0,0,["c",AVk(AHl),"I",AVi(ASI)],T4,0,DR,[],0,0,0,0,["c",AVk(AFs),"I",AVi(APf)],GA,0,BS,[],0,0,0,0,["c",AVk(AFP),"cm",AVk(AL2),"cp",AVl(APz),"bU",AVi(ALC),"ft",AVh(ANU),"ej",AVh(ARV)],GQ,0,C,[],1,0,0,0,0,W,0,GQ,[],1,0,0,OS,["df",AVh(AGE),"eT",AVh(AF$),"jd",AVh(AQj),"gZ",
AVh(ARR)],ZQ,0,W,[],0,0,0,0,["k",AVi(C0),"df",AVh(CV),"eT",AVh(AIW),"jd",AVh(AQI),"cw",AVh(AMW),"gZ",AVh(AI8)],Ji,0,Bq,[],0,3,0,0,0,D3,0,BD,[],1,0,0,0,["bU",AVi(APC),"I",AVi(AQ9),"ej",AVh(AMr)],C4,0,D3,[],0,0,0,0,["c",AVk(AFu)],E6,0,C4,[],0,0,0,0,["c",AVk(AGp)],CR,0,D3,[],0,0,0,0,["c",AVk(AFO)],Ez,0,C4,[],0,0,0,0,["c",AVk(AL8),"P",AVi(ASL)],WQ,0,C4,[],0,0,0,0,["c",AVk(AR_),"cm",AVk(AMS)],Ba,0,C,[],1,0,0,0,0,Dd,0,BI,[],0,3,0,0,0,Nf,0,GQ,[En],0,0,0,0,["cw",AVh(AM3)],Ol,0,BD,[],0,0,0,0,["c",AVk(ALj),"I",AVi(ANP)],Xp,
0,C,[En,Dh],0,3,0,0,0,M6,0,BS,[],0,0,0,0,0]);
$rt_metadata([Qs,0,BS,[],0,0,0,0,["c",AVk(AGk),"P",AVi(ANv),"I",AVi(AGV),"bU",AVi(AGD)],DB,0,BS,[],0,0,0,0,["c",AVk(AIM),"k",AVi(AJk),"bU",AVi(AGd),"P",AVi(AQd),"I",AVi(AI0)],Jf,0,DB,[],0,0,0,0,["k",AVi(AKU)],ZG,0,BV,[],0,0,0,0,["bx",AVj(ALk)],Eg,0,BV,[],0,0,0,0,["bx",AVj(MG),"bU",AVi(ANS)],OW,0,BS,[],0,0,0,0,["P",AVi(AL7),"c",AVk(AFi),"bU",AVi(AGM),"I",AVi(AQN)],Em,0,BV,[],0,0,0,0,["b0",AVh(AK5),"bx",AVj(AJQ),"cm",AVk(AIH),"cp",AVl(AK_),"bU",AVi(AQE)],AEn,0,BV,[],0,0,0,0,["bx",AVj(AFd)],YQ,0,BV,[],0,0,0,0,
["bx",AVj(AFH)],Ff,0,BS,[],0,0,0,0,["P",AVi(ARU),"c",AVk(ANy),"bU",AVi(ALl),"I",AVi(AOK)],XM,0,Ff,[],0,0,0,0,0,Uf,0,Ff,[],0,0,0,0,0,Yz,0,CR,[],0,0,0,0,["c",AVk(AHL)],PM,0,CR,[],0,0,0,0,["c",AVk(AMF)],FU,0,CR,[],0,0,0,0,["c",AVk(AP9),"P",AVi(ARi)],Pr,0,FU,[],0,0,0,0,["c",AVk(AK8),"P",AVi(AM4)],Fc,0,CR,[],0,0,0,0,["c",AVk(ASC)],Np,0,Fc,[],0,0,0,0,["c",AVk(AKm)],RP,0,CR,[],0,0,0,0,["c",AVk(AR0)],QD,0,FU,[],0,0,0,0,["c",AVk(AGY)],Vk,0,Fc,[],0,0,0,0,["c",AVk(AF5)],RR,0,D3,[],0,0,0,0,["c",AVk(ASo),"cm",AVk(AQl)],Ov,
0,D3,[],0,0,0,0,["c",AVk(ANV),"cm",AVk(AFm)],EN,0,C,[],1,0,0,0,0,YA,0,C4,[],0,0,0,0,["c",AVk(AF7)],WM,0,Ez,[],0,0,0,0,["c",AVk(AME)],Pe,0,E6,[],0,0,0,0,["c",AVk(APH)],Qw,0,C4,[],0,0,0,0,["c",AVk(ANM)],Uu,0,Ez,[],0,0,0,0,["c",AVk(AGc)],Rr,0,E6,[],0,0,0,0,["c",AVk(APX)],Kw,0,BD,[],4,0,0,0,["c",AVk(ALE),"I",AVi(AKD)],AAo,0,BD,[],0,0,0,0,["c",AVk(AGB),"I",AVi(AGK)],Oq,0,BD,[],0,0,0,0,["c",AVk(AKY),"I",AVi(ASx)],Xs,0,BD,[],4,0,0,0,["c",AVk(AOu),"I",AVi(AHA)],W_,0,BD,[],0,0,0,0,["c",AVk(ANr),"I",AVi(AFa)],NC,0,BD,
[],0,0,0,0,["c",AVk(AHq),"I",AVi(AJy)],AEc,0,BS,[],0,0,0,0,["c",AVk(AR6),"P",AVi(AGO),"hK",AVh(AM$),"I",AVi(AGN)],ZN,0,BS,[],4,0,0,0,["c",AVk(ANh),"P",AVi(APn),"hK",AVh(AE9),"I",AVi(ASe)],AD5,0,BD,[],4,0,0,0,["c",AVk(ALq),"I",AVi(AJr)],ACc,0,BD,[],0,0,0,0,["c",AVk(ANp),"I",AVi(AJh)],YN,0,BD,[],0,0,0,0,["c",AVk(AKr),"I",AVi(AHF)],Ha,0,BS,[],0,0,0,0,["c",AVk(AF9),"P",AVi(AOE),"I",AVi(AO3)],AD$,0,Ha,[],0,0,0,0,["c",AVk(AHK),"cm",AVk(AQZ),"cp",AVl(AFW),"bU",AVi(AMw)],ABc,0,Ha,[],0,0,0,0,["c",AVk(ALW)],Ok,0,Go,[H3],
0,3,0,0,["lJ",AVl(AI9),"kU",AVk(AGF),"hQ",AVi(AG6),"mh",AVj(AQo)],RY,0,BV,[],0,0,0,0,["bx",AVj(AH7),"cm",AVk(AGw),"cp",AVl(AJv),"bU",AVi(AJ1)],YM,0,BV,[],0,0,0,0,["bx",AVj(AL4)],Nv,0,BV,[],0,0,0,0,["bx",AVj(APJ)],G_,0,C,[],4,0,0,APd,0,MQ,0,BV,[],0,0,0,0,["bx",AVj(APQ)]]);
$rt_metadata([K7,0,BS,[],0,0,0,0,["P",AVi(ANH),"c",AVk(AHB),"cm",AVk(AJZ),"cp",AVl(AId),"bU",AVi(AFU),"I",AVi(AQu)],Ls,0,BS,[],0,0,0,0,["P",AVi(AG5),"c",AVk(AFt),"cm",AVk(AN7),"cp",AVl(API),"bU",AVi(AH8),"I",AVi(AOh)],DV,0,BV,[],0,0,0,0,["bx",AVj(AO4),"cm",AVk(AMX),"cp",AVl(AG3),"bU",AVi(AOP)],VO,0,EN,[],0,0,0,0,["hA",AVi(AHf),"sE",AVj(AOW)],VP,0,EN,[],0,0,0,0,["hA",AVi(AP1),"sE",AVj(ARO)],AC4,0,C,[],0,0,0,0,0,Y3,0,C,[],0,0,0,0,0,K5,0,Ba,[],0,0,0,0,["F",AVh(ABk)],J3,0,Ba,[],0,0,0,0,["F",AVh(AB6)],ACY,0,Ba,[],
0,0,0,0,["F",AVh(APr)],ADw,0,Ba,[],0,0,0,0,["F",AVh(AQw)],ADC,0,Ba,[],0,0,0,0,["F",AVh(AIN)],K0,0,Ba,[],0,0,0,0,["F",AVh(ZS)],LG,0,K0,[],0,0,0,0,["F",AVh(AAO)],AEW,0,Ba,[],0,0,0,0,["F",AVh(AJY)],MF,0,LG,[],0,0,0,0,["F",AVh(YI)],ABx,0,MF,[],0,0,0,0,["F",AVh(AMs)],ABY,0,Ba,[],0,0,0,0,["F",AVh(AH0)],AAh,0,Ba,[],0,0,0,0,["F",AVh(AMo)],Z0,0,Ba,[],0,0,0,0,["F",AVh(ARQ)],ADG,0,Ba,[],0,0,0,0,["F",AVh(AM5)],AE8,0,Ba,[],0,0,0,0,["F",AVh(AFk)],AC5,0,Ba,[],0,0,0,0,["F",AVh(AKw)],ACT,0,Ba,[],0,0,0,0,["F",AVh(AO8)],ADX,0,
Ba,[],0,0,0,0,["F",AVh(AHW)],Zk,0,Ba,[],0,0,0,0,["F",AVh(AIl)],Y0,0,Ba,[],0,0,0,0,["F",AVh(ARK)],AC$,0,Ba,[],0,0,0,0,["F",AVh(AFe)],ADn,0,Ba,[],0,0,0,0,["F",AVh(ALu)],AAG,0,Ba,[],0,0,0,0,["F",AVh(AIw)],AB3,0,Ba,[],0,0,0,0,["F",AVh(AJA)],AEz,0,Ba,[],0,0,0,0,["F",AVh(ALw)],ADl,0,Ba,[],0,0,0,0,["F",AVh(AQQ)],AA_,0,Ba,[],0,0,0,0,["F",AVh(AOq)],AAE,0,Ba,[],0,0,0,0,["F",AVh(AM0)],AE3,0,Ba,[],0,0,0,0,["F",AVh(APj)],Jq,0,Ba,[],0,0,0,0,["F",AVh(AB0)],ADZ,0,Jq,[],0,0,0,0,["F",AVh(AMM)],ABC,0,K5,[],0,0,0,0,["F",AVh(AGv)],AAy,
0,J3,[],0,0,0,0,["F",AVh(AJM)],Z6,0,Ba,[],0,0,0,0,["F",AVh(ALJ)],AAs,0,Ba,[],0,0,0,0,["F",AVh(ARu)],ABs,0,Ba,[],0,0,0,0,["F",AVh(AJb)],ABy,0,Ba,[],0,0,0,0,["F",AVh(AFf)],AAb,0,C,[],4,0,0,0,0,ZE,0,C,[],4,3,0,0,0,ND,0,C,[],0,3,0,0,0,ADe,0,C,[],0,3,0,0,0,AA8,0,C,[],4,3,0,0,0,ZP,0,C,[IX],0,3,0,0,0]);
$rt_metadata([VC,0,C,[Bd],0,3,0,0,["l",AVi(AQx)],Ry,0,C,[Bd],0,3,0,0,["l",AVi(AI$)],Za,0,C,[],0,3,0,0,0,Rx,0,C,[Bd],0,3,0,0,["l",AVi(AO9)],Uv,0,C,[Bd],0,3,0,0,0,PY,0,C,[Bd],0,3,0,0,0,WO,0,W,[],0,0,0,0,["k",AVi(AIV)],WN,0,W,[],0,0,0,0,["k",AVi(AFK)],OB,0,W,[],0,0,0,0,["k",AVi(ALA),"cw",AVh(AJC)],OH,0,W,[],0,0,0,0,["k",AVi(AO7)],OF,0,W,[],0,0,0,0,["k",AVi(APP)],OG,0,W,[],0,0,0,0,["k",AVi(AL3)],OK,0,W,[],0,0,0,0,["k",AVi(AIq)],OL,0,W,[],0,0,0,0,["k",AVi(AE$)],OI,0,W,[],0,0,0,0,["k",AVi(AJH)],OJ,0,W,[],0,0,0,0,
["k",AVi(AL6)],OM,0,W,[],0,0,0,0,["k",AVi(AQ3)],ON,0,W,[],0,0,0,0,["k",AVi(AHR)],OA,0,W,[],0,0,0,0,["k",AVi(ASO)],Pl,0,W,[],0,0,0,0,["k",AVi(AJL)],Ox,0,W,[],0,0,0,0,["k",AVi(AHP)],Oy,0,W,[],0,0,0,0,["k",AVi(AJp)],OE,0,W,[],0,0,0,0,["k",AVi(AK1)],Ow,0,W,[],0,0,0,0,["k",AVi(AQD)],OC,0,W,[],0,0,0,0,["k",AVi(AGI)],OD,0,W,[],0,0,0,0,["k",AVi(AOf)],L5,0,C,[],3,3,0,0,0,ST,0,C,[L5],4,3,0,0,0,ADQ,0,C,[G3],0,3,0,0,0,Ws,0,C,[],0,3,0,0,0,C2,0,C,[],3,3,0,AB5,0,Ch,0,Ck,[],12,3,0,AAq,0,Du,0,C,[],3,3,0,AO$,0,Op,0,C,[],0,3,
0,0,0,Om,0,C,[Bd],0,3,0,0,["l",AVi(APi)],Nj,0,GA,[],0,0,0,0,["cm",AVk(AJe),"cp",AVl(ASA),"ft",AVh(AHz)],Ql,0,Bq,[],0,3,0,0,0,XD,0,Bq,[],0,3,0,0,0,VJ,0,FS,[],0,3,0,0,0,P_,0,FS,[],0,3,0,0,0,Yq,0,Bq,[],0,3,0,0,0,Vy,0,C,[],0,3,0,0,0,So,0,C,[Bj],0,3,0,0,0,S3,0,C,[Bd],0,3,0,0,0,S2,0,C,[Bd],0,3,0,0,0,AC7,0,C,[],3,3,0,0,0,AAu,0,C,[],0,3,0,0,0,Ts,0,C,[HT],0,3,0,0,0,VG,0,C,[L5],0,0,0,0,0,V8,0,C,[Bj],0,3,0,0,["q",AVh(ARe)]]);
$rt_metadata([Tq,0,W,[],0,0,0,0,["k",AVi(ARb)],M3,0,W,[],0,0,0,0,["k",AVi(AGr)],Sh,0,W,[],0,0,0,0,["k",AVi(AGb)],Sg,0,W,[],0,0,0,0,["k",AVi(AJa)],Xh,0,W,[],0,0,0,0,["k",AVi(AKM)],O8,0,W,[],0,0,0,0,["k",AVi(ARf)],Of,0,W,[],0,0,0,0,["k",AVi(ANB)],QT,0,W,[],0,0,0,0,["k",AVi(APc)],MY,0,W,[],0,0,0,0,["k",AVi(ASc)],M2,0,W,[],0,0,0,0,["k",AVi(AIb)],N1,0,W,[],0,0,0,0,["k",AVi(ARs)],Pw,0,W,[],0,0,0,0,["k",AVi(AMl)],PF,0,W,[],0,0,0,0,["k",AVi(AOC)],Ub,0,W,[],0,0,0,0,["k",AVi(AQ4)],SV,0,W,[],0,0,0,0,["k",AVi(ARX)],Nd,
0,W,[],0,0,0,0,["k",AVi(AHY)],Mp,0,W,[],0,0,0,0,["k",AVi(ANE)],Sa,0,Mp,[],0,0,0,0,["k",AVi(AQe)],P4,0,C,[I0],0,3,0,0,["re",AVh(ALR)],We,0,C,[BP],0,3,0,0,["bb",AVi(AOt)],Wh,0,C,[BP],0,3,0,0,["bb",AVi(AM_)],TZ,0,C,[BP],0,3,0,0,["bb",AVi(AJS)],T2,0,C,[BP],0,3,0,0,["bb",AVi(AFE)],UZ,0,C,[BP],0,3,0,0,["bb",AVi(ALL)],Th,0,C,[Bd],0,3,0,0,["l",AVi(AOe)],Ti,0,C,[Bd],0,3,0,0,["l",AVi(AMN)],Tg,0,C,[Bd],0,3,0,0,["l",AVi(ALp)],Zt,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.LV=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AG0(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Cq=Long_add;var Ky=Long_sub;var BR=Long_mul;var Do=Long_div;var M7=Long_rem;var ATw=Long_or;var CX=Long_and;var AY$=Long_xor;var Fp=Long_shl;var Gv=Long_shr;var D$=Long_shru;var ATR=Long_compare;var Fd=Long_eq;var AY_=Long_ne;var AIz=Long_lt;var PW=Long_le;var AIf=Long_gt;var AAl=Long_ge;var AZa=Long_not;var AT3=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AT8);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Uj.prototype;c.f=c.bb;c=Uh.prototype;c.f=c.bb;c=Ns.prototype;c.f=c.bb;c=AAQ.prototype;c.get=c.Hv;Object.defineProperty(c,"length",{get:c.GP});c=N2.prototype;c.f=c.bb;c=Y$.prototype;c.removeEventListener=c.DX;c.dispatchEvent=c.BV;c.get=c.y6;c.addEventListener=c.Ap;Object.defineProperty(c,"length",{get:c.B6});c=V$.prototype;c.onAnimationFrame=c.DZ;c=V4.prototype;c.f=c.u0;c=V1.prototype;c.handleEvent=c.ce;c=V2.prototype;c.f=c.bb;c=Xt.prototype;c.accept=c.vd;c=Xu.prototype;c.accept=c.vd;c=WV.prototype;c.handleEvent
=c.ce;c=WW.prototype;c.handleEvent=c.ce;c=WX.prototype;c.handleEvent=c.ce;c=WY.prototype;c.handleEvent=c.ce;c=WZ.prototype;c.handleEvent=c.ce;c=W0.prototype;c.handleEvent=c.ce;c=W1.prototype;c.handleEvent=c.ce;c=W2.prototype;c.handleEvent=c.ce;c=W3.prototype;c.handleEvent=c.ce;c=W4.prototype;c.handleEvent=c.ce;c=Yj.prototype;c.handleEvent=c.ce;c=Yk.prototype;c.handleEvent=c.ce;c=Yl.prototype;c.handleEvent=c.ce;c=Ym.prototype;c.handleEvent=c.ce;c=UO.prototype;c.handleEvent=c.ce;c=X0.prototype;c.f=c.bb;c=X1.prototype;c.f
=c.bb;c=NB.prototype;c.f=c.bb;c=NA.prototype;c.f=c.bb;c=Nz.prototype;c.f=c.bb;c=Ny.prototype;c.f=c.bb;c=NW.prototype;c.accept=c.vd;c=XX.prototype;c.f=c.bb;c=XV.prototype;c.f=c.bb;c=XW.prototype;c.f=c.bb;c=Pk.prototype;c.f=c.u0;c=Pi.prototype;c.f=c.u0;c=QY.prototype;c.f=c.bb;c=U3.prototype;c.f=c.bb;c=M4.prototype;c.f=c.bb;c=XP.prototype;c.f=c.bb;c=XO.prototype;c.f=c.bb;c=Xc.prototype;c.f=c.bb;c=Xb.prototype;c.f=c.bb;c=XJ.prototype;c.handleEvent=c.ce;c=Qb.prototype;c.f=c.bb;c=M1.prototype;c.onTimer=c.re;c=MK.prototype;c.onTimer
=c.re;c=XN.prototype;c.f=c.bb;c=Xw.prototype;c.f=c.bb;c=UE.prototype;c.f=c.bb;c=P4.prototype;c.onTimer=c.re;c=We.prototype;c.f=c.bb;c=Wh.prototype;c.f=c.bb;c=TZ.prototype;c.f=c.bb;c=T2.prototype;c.f=c.bb;c=UZ.prototype;c.f=c.bb;})();
}));
