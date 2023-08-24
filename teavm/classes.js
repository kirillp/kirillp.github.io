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
index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.e9=f;}
function $rt_cls(cls){return AAL(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FK(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bQ.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AMR(t);}
function $rt_throwableCause(t){return AMZ(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ASp());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ASq(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ASr());}
function $rt_throwCCE(){}
var A=Object.create(null);
var J=$rt_throw;var BD=$rt_compare;var ASs=$rt_nullCheck;var E=$rt_cls;var R=$rt_createArray;var Vf=$rt_isInstance;var ASt=$rt_nativeThread;var ASu=$rt_suspending;var ASv=$rt_resuming;var ASw=$rt_invalidPointer;var B=$rt_s;var Bq=$rt_eraseClinit;var Be=$rt_imul;var D8=$rt_wrapException;var ASx=$rt_checkBounds;var ASy=$rt_checkUpperBound;var ASz=$rt_checkLowerBound;var ASA=$rt_wrapFunction0;var ASB=$rt_wrapFunction1;var ASC=$rt_wrapFunction2;var ASD=$rt_wrapFunction3;var ASE=$rt_wrapFunction4;var F=$rt_classWithoutFields;var H
=$rt_createArrayFromData;var ZF=$rt_createCharArrayFromData;var ARa=$rt_createByteArrayFromData;var ASF=$rt_createShortArrayFromData;var EW=$rt_createIntArrayFromData;var ASG=$rt_createBooleanArrayFromData;var ASH=$rt_createFloatArrayFromData;var ASI=$rt_createDoubleArrayFromData;var AFb=$rt_createLongArrayFromData;var ASo=$rt_createBooleanArray;var EZ=$rt_createByteArray;var ASJ=$rt_createShortArray;var BQ=$rt_createCharArray;var BH=$rt_createIntArray;var AR3=$rt_createLongArray;var ADs=$rt_createFloatArray;var ASK
=$rt_createDoubleArray;var BD=$rt_compare;var ASL=$rt_castToClass;var ASM=$rt_castToInterface;var ASN=Long_toNumber;var Bd=Long_fromInt;var ASO=Long_fromNumber;var B_=Long_create;var Ee=Long_ZERO;var ASP=Long_hi;var Ew=Long_lo;
function C(){this.$id$=0;}
function ASQ(){var a=new C();ABT(a);return a;}
function ABT(a){}
function Cm(a){return AAL(a.constructor);}
function AJW(a,b){return a!==b?0:1;}
function AEW(a){var b,c,d,e,f,g,h,i,j;b=Xl(a);if(!b)c=B(0);else{d=(((32-MZ(b)|0)+4|0)-1|0)/4|0;e=BQ(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GW((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FK(e);}j=new M;O(j);G(G(j,B(1)),c);return N(j);}
function Xl(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AJf(a){var b,c,d;if(!Vf(a,Ec)&&a.constructor.$meta.item===null){b=new UQ;U(b);J(b);}b=ADC(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function QC(){var a=this;C.call(a);a.tA=0;a.qc=null;}
function ARo(b){var c,d,e,f,g,h,i,j,k,l;ABQ();XD();AAd();AA_();YW();ABy();Xr();ABW();ADb();Xt();AA0();AAv();AA1();ZR();Y3();Yl();Zq();Zs();Zk();XN();ZZ();ACU();c=(XQ()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Oh(B(2),B(3));else{d=new QC;BI(d);e=new ST;e.rL=d;f=new Mw;c=new $rt_globals.Worker("teavm/worker.js");g=new M3;g.oq=c;g.or=e;g.os=f;e=Bk(g,"f");c.onmessage=e;h=H(K5,[Jb(B(4),B(5),400),Jb(B(6),B(7),400),Jb(B(8),B(5),700),Jb(B(9),
B(7),700)]);b=R(K5,1);b.data[0]=ANL(B(10),E3(B(11),B(12)),B(5),400);b=(K1(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.rj;f=c.p8;k=new M;O(k);BA(G(G(k,B(13)),f),41);k=N(k);f=c.pV;l=c.oc;f=AHe($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BI(d);c=new SU;c.sD=d;g=new SS;e.then(Bk(c,"f"),Bk(g,"f"));}}
function ZW(b){var c,d,e,f,g,h,i,j,k;c=new RL;d=new QP;c.pb=new $rt_globals.TextDecoder("utf-16");e=new UP;e.n$=c;c.qY=e;e=new UJ;e.tP=c;c.lJ=e;f=new UK;f.qN=c;c.sT=new $rt_globals.ResizeObserver(Bk(f,"f"));e=new UH;e.nK=c;c.mC=e;c.hM=1;f=new Of;f.wu=null;f.i2=ASR;c.ln=f;c.py=b;f=new UI;f.s1=c;e=Bk(f,"f");b.onmessage=e;e=ZQ();b.postMessage(e);c.mq=(DX()).getElementById("canvasDiv");b=XQ();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dh
=b;c.mq.appendChild(b);f=c.dh;e=ALf(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)Oh(B(2),B(14));else{g=new OE;e=c.dh;f=c.lJ;g.dc=null;g.gG=e;g.ca=ARy(f);h=$rt_globals.window;i=R(Dl,14);j=i.data;k=new Vx;k.mU=g;j[0]=CP(g,e,B(15),k);f=new Vy;f.rs=g;j[1]=CP(g,e,B(16),f);f=new Vz;f.nV=g;j[2]=CP(g,e,B(17),f);f=new VA;f.tJ=g;j[3]=CP(g,e,B(18),f);f=new VB;f.qE=g;j[4]=CP(g,e,B(19),f);f=new VC;f.nj=g;j[5]=CP(g,e,B(20),f);k=new VD;k.tX=g;j[6]=CP(g,e,B(21),k);k=new VE;k.qQ=g;j[7]=CP(g,e,B(22),k);k=new VF;k.nA
=g;j[8]=CP(g,e,B(23),k);k=new VG;k.s9=g;j[9]=CP(g,e,B(24),k);k=new WT;k.sy=g;j[10]=CP(g,e,B(25),k);k=new WU;k.rG=g;j[11]=AAV(g,h,B(26),k,1);k=new WV;k.l5=g;j[12]=CP(g,h,B(27),k);k=new WW;k.tm=g;j[13]=CP(g,h,B(28),k);g.vQ=AO3(i);Zc(g,e);c.kY=g;c.fH=AQY(b,c.lJ);ANp(c.sT,c.dh);e=$rt_globals.window;g=c.mC;e.addEventListener("resize",Bk(g,"handleEvent"));c.eU=Z_(d,Y5(c));Si(c);}ABo(c);}
var Mo=F(0);
var LR=F(0);
function Vs(){var a=this;C.call(a);a.jP=null;a.fu=null;}
function AAL(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Vs;c.fu=b;d=c;b.classObject=d;}return c;}
function HC(a){if(a.jP===null)a.jP=$rt_str(a.fu.$meta.name);return a.jP;}
function Ht(a){return a.fu.$meta.primitive?1:0;}
function HI(a){return AAL(a.fu.$meta.item);}
var Yp=F();
function Bk(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function KG(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var X_=F();
function ADC(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AAP(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AAP(d[e],c))return 1;e=e+1|0;}return 0;}
function Gk(){var a=this;C.call(a);a.g2=null;a.kn=null;a.iB=0;a.i4=0;}
function ASS(){var a=new Gk();U(a);return a;}
function AST(a){var b=new Gk();Bl(b,a);return b;}
function U(a){a.iB=1;a.i4=1;}
function Bl(a,b){a.iB=1;a.i4=1;a.g2=b;}
function AGY(a){return a;}
function AMR(a){return a.g2;}
function AMZ(a){var b;b=a.kn;if(b===a)b=null;return b;}
var DS=F(Gk);
var Bm=F(DS);
function ASq(a){var b=new Bm();AOL(b,a);return b;}
function AOL(a,b){Bl(a,b);}
var ZV=F(Bm);
var Da=F(0);
var CH=F(0);
var Ij=F(0);
function Bv(){var a=this;C.call(a);a.bQ=null;a.hl=0;}
var ASU=null;var ASV=null;var ASW=null;function ED(){ED=Bq(Bv);AOi();}
function AHB(){var a=new Bv();Xv(a);return a;}
function FK(a){var b=new Bv();G4(b,a);return b;}
function I_(a,b,c){var d=new Bv();LE(d,a,b,c);return d;}
function Xv(a){ED();a.bQ=ASU;}
function G4(a,b){ED();LE(a,b,0,b.data.length);}
function LE(a,b,c,d){var e;ED();e=BQ(d);a.bQ=e;Dp(b,c,e,0,d);}
function Lz(b){var c;ED();c=AHB();c.bQ=b;return c;}
function L(a,b){var c,d;if(b>=0){c=a.bQ.data;if(b<c.length)return c[b];}d=new GU;U(d);J(d);}
function I(a){return a.bQ.data.length;}
function Fd(a){return a.bQ.data.length?0:1;}
function OV(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=I(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dp(a.bQ,b,d,e,c);return;}}g=new Bw;U(g);J(g);}
function Tp(a,b,c){var d,e,f;if((c+I(b)|0)>I(a))return 0;d=0;while(d<I(b)){e=L(b,d);f=c+1|0;if(e!=L(a,c))return 0;d=d+1|0;c=f;}return 1;}
function J1(a,b){if(a===b)return 1;return Tp(a,b,0);}
function D5(a,b){var c,d,e,f;if(a===b)return 1;if(I(b)>I(a))return 0;c=0;d=I(a)-I(b)|0;while(d<I(a)){e=L(a,d);f=c+1|0;if(e!=L(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Gr(a,b,c){var d,e,f,g,h;d=V(0,c);if(b<65536){e=b&65535;while(true){f=a.bQ.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=HE(b);h=Ia(b);while(true){f=a.bQ.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FQ(a,b,c){var d,e,f,g,h;d=X(c,I(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bQ.data[d]==e)break;d=d+(-1)|0;}return d;}f=HE(b);g=Ia(b);while(true){if(d<1)return (-1);h=a.bQ.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function YP(a,b,c){var d,e,f;d=V(0,c);e=I(a)-I(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=I(b))break a;if(L(a,d+f|0)!=L(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function OU(a,b,c){var d,e;d=X(c,I(a)-I(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=I(b))break a;if(L(a,d+e|0)!=L(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function B8(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new Bw;U(e);J(e);}if(!d){ED();return ASV;}if(!b&&c==I(a))return a;return I_(a.bQ,b,c-b|0);}
function Dc(a,b){return B8(a,b,I(a));}
function O1(a,b,c){return B8(a,b,c);}
function E3(a,b){var c,d,e,f,g,h;if(Fd(b))return a;if(Fd(a))return b;c=BQ(I(a)+I(b)|0);d=c.data;e=0;f=0;while(f<I(a)){g=e+1|0;d[e]=L(a,f);f=f+1|0;e=g;}g=0;while(g<I(b)){h=e+1|0;d[e]=L(b,g);g=g+1|0;e=h;}return Lz(c);}
function Uh(a,b,c){var d,e,f,g;d=new M;O(d);e=I(a)-I(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=I(b)){G(d,c);f=f+(I(b)-1|0)|0;break a;}if(L(a,f+g|0)!=L(b,g))break;g=g+1|0;}BA(d,L(a,f));}f=f+1|0;}G(d,Dc(a,f));return N(d);}
function QU(a){var b,c;b=0;c=I(a)-1|0;a:{while(b<=c){if(L(a,b)>32)break a;b=b+1|0;}}while(b<=c&&L(a,c)<=32){c=c+(-1)|0;}return B8(a,b,c+1|0);}
function AEV(a){return a;}
function Gi(a){var b,c,d,e,f;b=a.bQ.data;c=BQ(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cu(b){ED();return b===null?B(29):b.ci();}
function CZ(b){var c;ED();c=new M;O(c);return N(S(c,b));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bv))return 0;c=b;if(I(c)!=I(a))return 0;d=0;while(d<I(c)){if(L(a,d)!=L(c,d))return 0;d=d+1|0;}return 1;}
function KE(a){var b,c,d,e;a:{if(!a.hl){b=a.bQ.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hl=(31*a.hl|0)+e|0;d=d+1|0;}}}return a.hl;}
function Ld(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Go;Bl(b,B(30));J(b);}ASX=1;d=new P0;d.jB=R(CM,10);d.fP=(-1);d.d9=(-1);d.bo=(-1);e=new Gt;e.d6=1;e.bB=b;e.ba=BQ(I(b)+2|0);Dp(Gi(b),0,e.ba,0,I(b));f=e.ba.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.qF=g;e.fx=0;ET(e);ET(e);d.f=e;d.c3=0;d.kz=WQ(d,(-1),0,null);if(!Db(d.f)){b=new Id;h=d.f;IK(b,B(31),h.bB,h.cN);J(b);}if(d.mW)d.kz.dK();b=Cl();h=new Rt;h.hL=(-1);h.jX=(-1);h.uW=d;h.sI=d.kz;h.h6=a;h.hL=0;g=I(a);h.jX=g;e=new Uj;i=h.hL;j=d.fP;k=d.d9+1|0;l=d.bo+
1|0;e.g7=(-1);m=j+1|0;e.nR=m;e.dg=BH(m*2|0);f=BH(l);e.iY=f;Ha(f,(-1));if(k>0)e.ko=BH(k);Ha(e.dg,(-1));WH(e,a,i,g);h.ch=e;e.eI=1;n=0;m=0;if(!I(a)){f=R(Bv,1);f.data[0]=B(31);}else{while(true){l=I(h.h6);if(!XG(h))l=h.jX;e=h.ch;if(e.dI>=0&&Zi(e)==1){e=h.ch;e.dI=Iw(e);if(Iw(h.ch)==AA$(h.ch)){e=h.ch;e.dI=e.dI+1|0;}g=h.ch.dI;g=g<=l&&L0(h,g)?1:0;}else g=L0(h,h.hL);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BX(b,O1(a,m,ACB(h)));m=YZ(h);n=g;}a:{BX(b,O1(a,m,I(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(I(Bs(b,
g)))break a;Ed(b,g);}}if(g<0)g=0;f=Hn(b,R(Bv,g));}return f;}
function AG8(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=X(I(a),I(b));e=0;while(true){if(e>=d){c=I(a)-I(b)|0;break a;}c=L(a,e)-L(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AOi(){ASU=BQ(0);ASV=AHB();ASW=new RW;}
var Ey=F(Gk);
var GX=F(Ey);
var Zx=F(GX);
var DL=F();
function E7(){DL.call(this);this.e6=0;}
var ASY=null;var ASZ=null;function ACa(a){var b=new E7();Jl(b,a);return b;}
function Jl(a,b){a.e6=b;}
function IZ(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new C9;Bl(b,B(32));J(b);}d=I(b);if(0==d){b=new C9;Bl(b,B(33));J(b);}if(c>=2&&c<=36){a:{e=0;switch(L(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new C9;U(b);J(b);}b:{c:{while(f<d){h=f+1|0;i=N9(L(b,f));if(i<0){j=new C9;k=B8(b,0,d);b=new M;O(b);G(G(b,B(34)),k);Bl(j,N(b));J(j);}if(i>=c){j=new C9;l=B8(b,0,d);b=new M;O(b);G(G(S(G(b,B(35)),c),B(36)),l);Bl(j,N(b));J(j);}g=Be(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new C9;k=B8(b,0,d);b=new M;O(b);G(G(b,B(37)),k);Bl(j,N(b));J(j);}b=new C9;j=new M;O(j);S(G(j,B(38)),c);Bl(b,N(j));J(b);}
function FP(b){var c,d;if(b>=(-128)&&b<=127){a:{if(ASZ===null){ASZ=R(E7,256);c=0;while(true){d=ASZ.data;if(c>=d.length)break a;d[c]=ACa(c-128|0);c=c+1|0;}}}return ASZ.data[b+128|0];}return ACa(b);}
function Lm(a){var b;b=a.e6;return (MM(ASb(20),b,10)).ci();}
function MZ(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HR(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function JB(b,c){var d;d=c&31;return b<<d|(b>>>(32-d|0)|0);}
function AI_(a,b){b=b;return BD(a.e6,b.e6);}
function ABQ(){ASY=E($rt_intcls());}
function F8(){var a=this;C.call(a);a.B=null;a.M=0;}
function AS0(){var a=new F8();O(a);return a;}
function ASb(a){var b=new F8();FN(b,a);return b;}
function O(a){FN(a,16);}
function FN(a,b){a.B=BQ(b);}
function MM(a,b,c){return ZL(a,a.M,b,c);}
function ZL(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ca(a,b,b+1|0);else{Ca(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=GW(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Be(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ca(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=GW($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AAB(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){Ca(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ca(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ca(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ca(a,b,b+8|0);d=b;}else{Ca(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AS1;AAw(c,f);d=f.j3;g=f.jK;h=f.ne;i=1;j=1;if(h)j=2;k=9;l=ANQ(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=V(k,i+1|0);g=0;}else{d=d/AS2.data[ -g|0]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ca(a,b,b+(j+k|0)|0);if(!h)j=b;else{e=a.B.data;j=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.B.data;b=j+1|0;e[j]=(48+o|0)&65535;i=i+(-1)|0;if
(i)j=b;else{j=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.B.data;o=j+1|0;e[j]=69;if(g>=0)b=o;else{g= -g|0;b=o+1|0;e[o]=45;}if(g<10)d=b;else{d=b+1|0;e[b]=(48+(g/10|0)|0)&65535;}e[d]=(48+(g%10|0)|0)&65535;}return a;}
function YI(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BD(c,0.0);if(!d){Ca(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){Ca(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ca(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ca(a,b,b+8|0);d=b;}else{Ca(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d
=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AS3;ZO(c,f);g=f.kC;h=f.ju;i=f.mR;j=1;k=1;if(i)k=2;l=18;m=ALG(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=V(l,j+1|0);h=0;}else{g=Di(g,AS4.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ca(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}n=B_(1569325056, 23283064);o=0;while(o<l){if(OT(n,Ee))d=0;else{d=Ew(Di(g,n));g=L7(g,
n);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=Di(n,Bd(10));o=o+1|0;}if(h){e=a.B.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;}
function ANQ(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ALG(b){var c,d,e,f,g;c=Bd(1);d=0;e=16;f=AS5.data;g=f.length-1|0;while(g>=0){if(E2(L7(b,BM(c,f[g])),Ee)){d=d|e;c=BM(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BA(a,b){return a.lv(a.M,b);}
function Wt(a,b,c){Ca(a,b,b+1|0);a.B.data[b]=c;return a;}
function I2(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:V(b,V(c*2|0,5));a.B=XM(a.B,d);}
function N(a){return I_(a.B,0,a.M);}
function Wd(a,b,c,d){return a.kX(a.M,b,c,d);}
function Mi(a,b,c,d,e){var f,g,h,i;Ca(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HT(a,b){return a.j_(b,0,b.data.length);}
function Ca(a,b,c){var d,e,f,g;d=a.M;e=d-b|0;a.hf((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.M=a.M+(c-b|0)|0;}
var Hw=F(0);
var M=F(F8);
function K8(){var a=new M();AO_(a);return a;}
function AO_(a){O(a);}
function G(a,b){var c;c=a.M;if(b===null)b=B(29);LA(a,c,b);return a;}
function BY(a,b){LA(a,a.M,b);return a;}
function S(a,b){MM(a,b,10);return a;}
function Hu(a,b){var c,d,e,f,g,h,i,j;c=a.M;d=1;if(AGu(b,Ee)){d=0;b=ARk(b);}a:{if(KA(b,Bd(10))<0){if(d)Ca(a,c,c+1|0);else{Ca(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=GW(Ew(b),10);}else{g=1;h=Bd(1);i=Fw(Bd(-1),Bd(10));b:{while(true){j=BM(h,Bd(10));if(KA(j,b)>0){j=h;break b;}g=g+1|0;if(KA(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ca(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(E2(j,Ee))break a;e=a.B.data;c=f+1|0;e[f]=GW(Ew((Fw(b,j))),10);b=MK(b,j);j=Fw(j,Bd(10));f=c;}}}return a;}
function E$(a,b){AAB(a,a.M,b);return a;}
function Xp(a,b){BA(a,b);return a;}
function FU(a,b){LA(a,a.M,!b?B(39):B(40));return a;}
function ACq(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.M;if(b<=e){if(d){f=e-c|0;a.M=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GU;U(i);J(i);}
function Ve(a,b){var c,d,e,f;if(b>=0){c=a.M;if(b<c){c=c-1|0;a.M=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GU;U(f);J(f);}
function AI6(a,b,c,d,e){Mi(a,b,c,d,e);return a;}
function AGg(a,b,c,d){Wd(a,b,c,d);return a;}
function XZ(a){return a.M;}
function DI(a){return N(a);}
function AJc(a,b){I2(a,b);}
function AJI(a,b,c){Wt(a,b,c);return a;}
function LA(a,b,c){var d,e,f;if(b>=0&&b<=a.M){a:{if(c===null)c=B(29);else if(Fd(c))break a;I2(a,a.M+I(c)|0);d=a.M-1|0;while(d>=b){a.B.data[d+I(c)|0]=a.B.data[d];d=d+(-1)|0;}a.M=a.M+I(c)|0;d=0;while(d<I(c)){e=a.B.data;f=b+1|0;e[b]=L(c,d);d=d+1|0;b=f;}}return a;}c=new GU;U(c);J(c);}
var Eh=F(GX);
var AAU=F(Eh);
function AS6(a){var b=new AAU();AE6(b,a);return b;}
function AE6(a,b){Bl(a,b);}
var Zn=F(Eh);
function AS7(a){var b=new Zn();AFr(b,a);return b;}
function AFr(a,b){Bl(a,b);}
var SJ=F(0);
var Dl=F(0);
function AO3(b){var c;c=new Pn;c.u9=b;return c;}
function CX(b,c){if(b!==null)b.fp();return c;}
var N4=F(0);
function H4(){var a=this;C.call(a);a.k_=0;a.kl=0;}
var AS8=0;function FE(a){AS8=AS8-1|0;}
function FR(a,b,c){IF(a,YB(b,c,400,0));}
function PT(a,b){return J$(a,b,0.875);}
function J$(a,b,c){return Eg(a,b)+c|0;}
function Qo(){var a=this;H4.call(a);a.i8=null;a.bj=null;a.mf=null;}
function En(a){var b,c,d;b=a.bj;c=a.k_;d=a.kl;b.clearRect(0.0,0.0,c,d);}
function Ra(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bj;d="center";c.textAlign=d;break a;case 2:c=a.bj;d="right";c.textAlign=d;break a;default:break a;}d=a.bj;c="left";d.textAlign=c;}}
function Cv(a,b){IF(a,Je(b.mI));}
function IF(a,b){var c;if(!(a.mf==b?1:0)){c=a.bj;a.mf=b;c.font=b;}}
function YB(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Cf(a,b,c,d){var e,f,g;e=a.bj;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function AA8(a,b){var c,d;if(!b){c=a.bj;d="alphabetic";c.textBaseline=d;}else{d=a.bj;c="top";d.textBaseline=c;}}
function Eg(a,b){var c;c=$rt_ustr(b);return a.bj.measureText(c).width;}
function KL(a,b,c,d){var e,f;e=a.bj;f=$rt_ustr(FK(ZF([35,Gq(b/16|0),Gq(b%16|0),Gq(c/16|0),Gq(c%16|0),Gq(d/16|0),Gq(d%16|0)])));e.fillStyle=f;}
var XE=F();
var AB8=F();
function Dh(b,c){if(b===c)return 1;return b!==null?b.dv(c):c!==null?0:1;}
function BI(b){if(b!==null)return b;b=new Go;Bl(b,B(31));J(b);}
var Bb=F(0);
function ST(){C.call(this);this.rL=null;}
var Bt=F(0);
var Z$=F();
var XJ=F(0);
function Jb(b,c,d){return ANL(B(41),E3(B(11),b),c,d);}
var ABG=F(0);
var ABB=F(0);
function K1(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dd(b,f+g|0);Dp(c,0,d,f,g);return d;}
function Kj(b,c,d){Dp(b,c,d,0,d.data.length);return d;}
function P8(b,c,d){var e;if(c>0)Dp(b,0,d,0,c);e=d.data.length;if(c<e)Dp(b,c+1|0,d,c,e-c|0);return d;}
function Zr(b,c,d,e){var f;if(c>0)Dp(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dp(b,d,e,c,f-d|0);}return e;}
function FH(b){var c;c=new U7;c.id=b;return c;}
function K5(){var a=this;C.call(a);a.rj=null;a.p8=null;a.pV=null;a.oc=0;}
function ANL(a,b,c,d){var e=new K5();AMH(e,a,b,c,d);return e;}
function AMH(a,b,c,d,e){a.rj=b;a.p8=c;a.pV=d;a.oc=e;}
var Ym=F();
function AHe(b,c){return {style:b,weight:c};}
var BU=F(0);
function SU(){C.call(this);this.sD=null;}
function ADf(a,b){var c,d,e;c=a.sD;d=0;while(d<b.length){e=b[d];(DX()).fonts.add(e);d=d+1|0;}c.tA=1;b=c.qc;if(b!==null)ZW(b);}
var SS=F();
function AOq(a,b){$rt_globals.console.info("font load error "+b);}
var KJ=F();
var AS9=null;var AS$=null;function By(){if(AS9===null)AS9=AKw(AS_,0);return AS9;}
function KZ(){if(AS$===null)AS$=AKw(ATa,0);return AS$;}
function ARe(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KM(b)&&(e+f|0)<=KM(d)){a:{b:{if(b!==d){g=HI(Cm(b));h=HI(Cm(d));if(g!==null&&h!==null){if(g===h)break b;if(!Ht(g)&&!Ht(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fu;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AAP(n.constructor,o)?1:0)){J3(b,c,d,e,j);b=new Ib;U(b);J(b);}j=j+1|0;k=m;}J3(b,c,d,e,f);return;}if(!Ht(g))break a;if(Ht(h))break b;else break a;}b=new Ib;U(b);J(b);}}J3(b,c,
d,e,f);return;}b=new Ib;U(b);J(b);}b=new Bw;U(b);J(b);}d=new Go;Bl(d,B(42));J(d);}
function Dp(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=KM(b)&&(e+f|0)<=KM(d)){J3(b,c,d,e,f);return;}b=new Bw;U(b);J(b);}
function J3(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Fu(){return Long_fromNumber(new Date().getTime());}
function ABa(){return ASO($rt_globals.performance.now()*1000000.0);}
var ABx=F();
var Y1=F();
function Oh(b,c){var d,e,f;d=(DX()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(DX()).getElementById($rt_ustr(b)).appendChild(d);}
function XQ(){return (DX()).createElement("canvas");}
function ALf(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AC$=F();
var Mw=F();
function AK1(a,b){var c;c=new Bm;Bl(c,$rt_str(b.message));J(c);}
var ABX=F();
function Fs(b){return $rt_str(b);}
var XU=F();
function XM(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACl(b,c){var d,e,f,g;b=b.data;d=EZ(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ACO(b,c){var d,e,f,g;b=b.data;d=BH(c);e=d.data;f=X(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dd(b,c){var d,e,f,g;d=b.data;e=TM(HI(Cm(b)),c);f=X(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Yz(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));G(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function AA7(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));S(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function ANd(b){var c,d,e;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));E$(c,e[d]);d=d+1|0;}BY(c,B(45));return N(c);}
function APS(b){var c,d,e,f;if(b===null)return B(29);c=new M;O(c);BY(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,B(44));f=e[d];YI(c,c.M,f);d=d+1|0;}BY(c,B(45));return N(c);}
function Ha(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BC;U(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function YX(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=ASR;e=R(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=X(j,h+f|0);l=h+(2*f|0)|0;m=X(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.lC(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AAC(b,c){return S3(b,0,b.data.length,c);}
function S3(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BC;U(g);J(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Ja=F(0);
var Zf=F();
function APB(a,b){return a.uR(b);}
function AFe(a){return a.wf();}
var ZJ=F();
var FD=F(0);
var RW=F();
var Bw=F(Bm);
var AAA=F();
function KM(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(ATb());}return b.data.length;}
function TM(b,c){if(b===null){b=new Go;U(b);J(b);}if(b===E($rt_voidcls())){b=new BC;U(b);J(b);}if(c>=0)return AOQ(b.fu,c);b=new W5;U(b);J(b);}
function AOQ(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Go=F(Bm);
var Ib=F(Bm);
var C2=F();
var ATc=null;var ATd=null;var ATe=null;var ATf=null;var ATg=null;var ATh=null;var ATi=null;var ATj=null;var ATk=null;var ATl=null;function V4(b){var c,d;c=new Bv;d=BQ(1);d.data[0]=b;G4(c,d);return c;}
function Lj(b){return b>=65536&&b<=1114111?1:0;}
function CC(b){return (b&64512)!=55296?0:1;}
function CY(b){return (b&64512)!=56320?0:1;}
function Lo(b){return !CC(b)&&!CY(b)?0:1;}
function G3(b,c){return CC(b)&&CY(c)?1:0;}
function Ek(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function HE(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ia(b){return (56320|b&1023)&65535;}
function EM(b){return Gn(b)&65535;}
function Gn(b){if(ATf===null){if(ATi===null)ATi=AA6();ATf=Zu((ATi.value!==null?$rt_str(ATi.value):null));}return RB(ATf,b);}
function Ep(b){return Gm(b)&65535;}
function Gm(b){if(ATe===null){if(ATj===null)ATj=ABR();ATe=Zu((ATj.value!==null?$rt_str(ATj.value):null));}return RB(ATe,b);}
function RB(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function TU(b,c){if(c>=2&&c<=36){b=N9(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function N9(b){var c,d,e,f,g,h,i,j,k,l;if(ATd===null){if(ATk===null)ATk=Zz();c=(ATk.value!==null?$rt_str(ATk.value):null);d=AM0(Gi(c));e=I$(d);f=BH(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Mr(d)|0;j=j+Mr(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}ATd=f;}g=ATd.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GW(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gf(b){var c;if(b<65536){c=BQ(1);c.data[0]=b&65535;return c;}return ZF([HE(b),Ia(b)]);}
function Cp(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Lo(b&65535))return 19;if(ATg===null){if(ATl===null)ATl=ACY();d=(ATl.value!==null?$rt_str(ATl.value):null);e=R(MF,16384);f=e.data;g=EZ(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<I(d)){m=J2(L(d,l));if(m==64){l=l+1|0;m=J2(L(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Be(c,J2(L(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=J2(L(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AG5(k,k+i|0,ACl(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AG5(k,k+i|0,ACl(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}ATg=Dd(e,j);}e=ATg.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.qp)o=p+1|0;else{c=d.oo;if(b>=c)return d.oD.data[b-c|0];c=p-1|0;}}return 0;}
function IW(b){a:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gb(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cp(b)!=16?0:1;}
function OG(b){switch(Cp(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function P1(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return OG(b);}return 1;}
function XD(){ATc=E($rt_charcls());ATh=R(C2,128);}
function AA6(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ABR(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Zz(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ACY(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var LL=F(0);
var RA=F(0);
var D9=F(0);
var AB7=F(0);
function DX(){return $rt_globals.window.document;}
function M3(){var a=this;C.call(a);a.oq=null;a.or=null;a.os=null;}
function AL4(a,b){var c,d,e;c=a.oq;d=a.or;e=a.os;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=Je(J5(c));c=d.rL;c.qc=b;if(c.tA)ZW(b);}}
var ZH=F();
function Fj(){return APC();}
function APC(){return Math.random();}
function X(b,c){if(b<c)c=b;return c;}
function V(b,c){if(b>c)c=b;return c;}
function LV(b){if(b<=0)b= -b|0;return b;}
var Ou=F(0);
var Qd=F(0);
var P5=F(0);
var SE=F(0);
var We=F(0);
var TV=F(0);
var NO=F(0);
var XI=F();
function AJD(a,b,c){a.CA($rt_str(b),KG(c,"handleEvent"));}
function AJY(a,b,c){a.zR($rt_str(b),KG(c,"handleEvent"));}
function AEg(a,b){return a.uR(b);}
function AK6(a,b,c,d){a.x9($rt_str(b),KG(c,"handleEvent"),d?1:0);}
function AOJ(a,b){return !!a.CF(b);}
function AFi(a){return a.wf();}
function ADB(a,b,c,d){a.Bf($rt_str(b),KG(c,"handleEvent"),d?1:0);}
var BC=F(Bm);
var W5=F(Bm);
var GU=F(Bw);
var YM=F();
function ZQ(){return "ping";}
function DV(){C.call(this);this.ix=null;}
var ATm=null;var ATn=null;var ATo=null;var ATp=null;var ATq=null;var ATr=null;function JT(){JT=Bq(DV);AFp();}
function Mc(a){var b=new DV();AAp(b,a);return b;}
function AAp(a,b){JT();a.ix=b;}
function J5(b){var c,d,e,f,g;JT();if(b===null)return null;a:{c=b;if(ATn!==null){d=$rt_str(typeof c);if(!Bn(d,B(46))&&!Bn(d,B(47))){if(Bn(d,B(48))){b=ATo.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Mc(c);g=f;b=ATo;e=new $rt_globals.WeakRef(g);b.set(c,e);ATq.register(g,c);return f;}if(!Bn(d,B(49)))break a;else{b=ATp.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Mc(c);g=f;b=ATp;e=new $rt_globals.WeakRef(g);b.set(c,
e);ATr.register(g,c);return f;}}b=ATn.get(c);e=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof e==='undefined'?1:0))return e;f=Mc(c);b=ATn;e=new $rt_globals.WeakRef(f);b.set(c,e);return f;}}return Mc(c);}
function Je(b){JT();if(b!==null)return b.ix;return null;}
function AOw(a,b){if(b===a)return 1;if(b===null)return 0;if(!(b instanceof DV))return 0;return a.ix!==b.ix?0:1;}
function AFp(){ATm=new $rt_globals.WeakMap();ATn=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();ATo=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATp=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATq=ATo===null?null:new $rt_globals.FinalizationRegistry(Bk(new V7,"accept"));ATr=ATp===null?null:new $rt_globals.FinalizationRegistry(Bk(new V8,"accept"));}
var NN=F(0);
function RL(){var a=this;C.call(a);a.pb=null;a.qY=null;a.lJ=null;a.mq=null;a.dh=null;a.sT=null;a.mC=null;a.kY=null;a.fH=null;a.hM=0;a.vx=0;a.qj=null;a.eU=null;a.py=null;a.ln=null;a.rO=0;}
function ABo(a){a.dh.focus();}
function MP(a,b){var c;c=DX();b=$rt_ustr(b);c.title=b;}
function Y5(a){var b,c,d;b=new LM;c=a.fH;d=a.kY.ca;b.Y=c;b.o=d;b.bV=a;return b;}
function Si(a){a.vx=$rt_globals.requestAnimationFrame(Bk(a.qY,"onAnimationFrame"));}
function FT(a){a.hM=1;}
function Sh(a,b,c){var d,e;a.kY.dc=B3(b,c);d=a.dh;e=b;d.width=e;d=a.dh;e=c;d.height=e;d=a.fH;Y(d.dn,b,c);e=d.by;d=d.dn;b=d.b;c=d.a;e.viewport(0,0,b,c);a.eU.b_(a.fH.dn,J4(a));a.eU.bT();}
function Gh(a,b){var c,d,e;c=a.qj;d=a.dh;if(Dh(b,c))b=c;else{e=d.style;if(b!==null&&I(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.qj=b;}
function IU(a){return $rt_globals.performance.now()/1000.0;}
function J4(a){return $rt_globals.window.devicePixelRatio;}
function U8(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ACw(b,1);else{c=new VQ;d=$rt_globals.window.showDirectoryPicker();e=new VP;e.ou=b;e.ov=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function K$(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ACw(b,0);else{c=new Wq;d=$rt_globals.window.showOpenFilePicker();e=new Wp;e.o_=b;e.o$=c;d.then(Bk(e,"f"),Bk(c,"f"));}}
function C0(a,b,c,d){var e,f,g,h,i;d=d.data;e=a.rO+1|0;a.rO=e;f=a.ln;g=FP(e);f.hj=Ll(f,f.hj,g);g=T3(f,g);LN(g,b);LN(g,b);f.i7=f.i7+1|0;b=a.py;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;g[0]=f;c=$rt_ustr(c);g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bv)f=$rt_ustr(c);else if(Vf(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(Vf(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(Vf(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof Kr)){b=new BC;c=HC(Cm(c));f
=new M;O(f);G(G(f,B(50)),c);Bl(b,N(f));J(b);}c=c;f=c.gh;if(f===null)f=c.eC;}g[e+2|0]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function PU(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new PK;e.mJ=b;b=AC7(c);d.then(Bk(e,"f"),Bk(b,"f"));}
function Tr(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.pb;b=(Gi(b)).data;f=f.decode(b);b=e.writeText(f);e=new TK;e.rt=c;c=AC7(d);b.then(Bk(e,"f"),Bk(c,"f"));}
function WE(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AC7(b){var c;c=new L5;c.rE=b;return c;}
var Ci=F(0);
var QP=F();
function Z_(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(!Bn(B(51),c))d=(ANE(I(c)<=0?B(31):Dc(c,1))).cd(b);else{d=new Mu;D_(d,b);b=$rt_globals.fetch("test.wasm");e=new MD;b=b.then(Bk(e,"f"));e=new MC;b=b.then(Bk(e,"f"));e=new MB;f=new MA;b.then(Bk(e,"f"),Bk(f,"f"));}return d;}
var Bi=F(0);
var Z5=F();
var Zh=F();
var ZE=F();
var P9=F(0);
function UP(){C.call(this);this.n$=null;}
function AIf(a,b){var c,d;c=b;b=a.n$;if(!(!b.eU.c0(c/1000.0)&&!b.hM)){d=b.fH.dn;if(Be(d.b,d.a)){b.hM=0;b.eU.bT();}}Si(b);}
function UJ(){C.call(this);this.tP=null;}
function C_(a){FT(a.tP);}
var Pe=F(0);
function UK(){C.call(this);this.qN=null;}
function AGy(a,b,c){var d,e,f,g;c=a.qN;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dh){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=J4(c);Sh(c,GZ(f.width*g),GZ(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Sh(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ACc=F();
function ANp(b,c){AMq(b,c,ADK());}
function ADK(){return {box:'device-pixel-content-box'};}
function AMq(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Ch=F(0);
function UH(){C.call(this);this.nK=null;}
function AMa(a,b){b=a.nK;b.eU.b_(b.fH.dn,J4(b));b.eU.bT();}
var Ko=F(0);
function Et(){C.call(this);this.jU=null;}
var Ec=F(0);
var WD=F(0);
var Mn=F(0);
function Of(){var a=this;Et.call(a);a.hj=null;a.i2=null;a.wu=null;a.i7=0;}
function T3(a,b){var c,d;c=a.hj;while(true){if(c===null)return null;d=IY(a.i2,b,c.ik);if(!d)break;c=d>=0?c.bR:c.bE;}return c;}
function Ll(a,b,c){var d,e;if(b===null){b=new IT;d=null;b.ik=c;b.hP=d;b.e0=1;b.e$=1;return b;}e=IY(a.i2,c,b.ik);if(!e)return b;if(e>=0)b.bR=Ll(a,b.bR,c);else b.bE=Ll(a,b.bE,c);D$(b);return I9(b);}
function Jy(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=IY(a.i2,c,b.ik);if(d<0)b.bE=Jy(a,b.bE,c);else if(d>0)b.bR=Jy(a,b.bR,c);else{e=b.bR;if(e===null)return b.bE;f=b.bE;g=R(IT,e.e0).data;h=0;while(true){b=e.bE;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bR;while(h>0){h=h+(-1)|0;j=g[h];j.bE=b;D$(j);b=I9(j);}e.bR=b;e.bE=f;D$(e);b=e;}D$(b);return I9(b);}
function UI(){C.call(this);this.s1=null;}
function ANm(a,b){var c,d,e,f,g,h,i,j,k;c=a.s1.ln;b=b.data;if(!(b===ZQ()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BC;U(b);J(b);}if(b.length<1){b=new BC;U(b);J(b);}d=FP(b[0]);e=T3(c,d);if(e===null)c=null;else{c.hj=Jy(c,c.hj,d);c.i7=c.i7+1|0;c=e.hP;}f=R(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=Fs(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new RR;ABT(e);e.gX=k;}else e=(k instanceof $rt_globals.File?1:0)?AAG(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AAG(k,null);g[h]=e;h=j;}c.l(f);}}
var ACy=F();
var AC5=F();
var Jf=F(0);
var V7=F();
function AMu(a,b){JT();ATo.delete(b);}
var Zw=F();
var V8=F();
function AKj(a,b){JT();ATp.delete(b);}
function OE(){var a=this;C.call(a);a.ca=null;a.gG=null;a.vQ=null;a.dc=null;}
function Mk(){return (DX()).activeElement;}
function CP(a,b,c,d){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"));return VY(a,b,c,d);}
function AAV(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bk(d,"handleEvent"),!!e);return VY(a,b,c,d);}
function VY(a,b,c,d){var e;e=new Pa;e.uH=b;e.uJ=c;e.uI=d;return e;}
function SX(a,b){var c;c=new T6;c.tI=b;return c;}
function Eu(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gG.getBoundingClientRect();e=B3(GZ((b.clientX-d.left)*c),GZ((b.clientY-d.top)*c));f=new Z;g=a.dc;f.b=g.b;f.a=g.a;d=new LI;Ts(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.ul=f;return d;}
function WY(a,b,c){var d,e,f,g;d=new N8;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Ts(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jq=0;d.dk=e;d.bm=f;d.g4=c;d.qZ=g;return d;}
function DC(a,b){b.stopPropagation();b.preventDefault();}
function Zc(a,b){var c;c=new WA;c.oM=b;b.onpointerdown=Bk(c,"f");c=new WC;c.nN=b;b.onpointerup=Bk(c,"f");}
function KC(){var a=this;C.call(a);a.qh=null;a.cq=null;a.by=null;a.r8=null;a.vd=0;a.wc=0;a.i$=null;a.wJ=null;a.wr=null;a.vu=null;a.fL=null;a.g3=null;a.wz=null;a.od=null;a.dn=null;a.tw=null;a.kP=0;a.jm=0;a.lw=0;a.lg=0;a.hD=0;a.lu=null;}
function FL(a,b,c){return GB(a,b,c,400,0);}
function CJ(a,b,c){return LU(a.qh,b,c);}
function Fi(a,b){var c,d,e,f,g;c=a.by;d=b.bh;e=b.bu;f=b.be;g=b.bv;c.clearColor(d,e,f,g);a.by.clear(16384);}
function CI(a,b){var c;if(b==a.jm)return b;if(!b)a.by.disable(3042);else{a.by.enable(3042);a.by.blendFuncSeparate(770,771,1,1);}c=a.jm;a.jm=b;return c;}
function Ub(a,b,c,d){var e,f,g;a.lg=1;a.hD=1;e=a.lu;f=d.b;g=d.a;e.qt=b;e.qu=c;e.qs=f;e.qq=g;Tt(a);}
function K0(a){a.lg=0;a.hD=0;Tt(a);}
function Tt(a){var b,c,d,e,f,g;b=a.lw;c=a.lg;if(b!=c){a.lw=c;if(!c)a.by.disable(3089);else a.by.enable(3089);}if(a.lw&&a.hD){a.hD=0;d=a.by;e=a.lu;b=e.qt;c=a.dn.a-e.qu|0;f=e.qq;c=c-f|0;g=e.qs;d.scissor(b,c,g,f);}}
function Kk(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.od;c=a.kP;d=b.f1.rA;e=b.dM;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dM;h=b.mu;e.bindBuffer(34962,h);i=b.f1.lN.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dM;m=k.gO;n=k.ey;o=b.f1.j8*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.ey|0;j=j+1|0;}a:{e=b.tL;if(e!==null){c=0;b.dM.bindBuffer(34962,e);i=b.f1.qf.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dM;j=e.gO;p=e.ey;m=e.ol;n=b.f1.oJ;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.ey|0;g=g+1|0;}}}q=b.td;if(q===null){c=b.q3;if(c>0)b.dM.drawArrays(4,0,c);}else{b.dM.bindBuffer(34963,q);k=b.dM;g=b.tn;k.drawElements(4,g,5123,0);}a.kP=d;}
function BB(a,b,c,d,e){Kw(a,a.i$);Lu(a.i$,a.by,b,c,d,a.dn);d=a.i$;HN(a.by,d.s0,e);Kk(a);}
function Ez(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Kw(a,a.fL);Lu(a.fL,a.by,b,c,d,a.dn);To(a.fL,a.by,f);d=a.fL;j=a.by;f=f.e4;b=f.b;c=f.a;k=e.bh;l=b;m=k/l;k=e.bu;n=c;o=k/n;k=e.be/l;l=e.bv/n;d=d.sz;j.uniform4f(d,m,o,k,l);d=a.fL;e=a.by;HN(e,d.oP,g);HN(e,d.m3,h);d=d.n3;e.uniform2f(d,i,0.0);Kk(a);}
function CR(a){var b,c;b=new IS;c=a.r8;b.e4=new Z;b.dB=c;b.er=c.c7.createTexture();ATs=ATs+1|0;return b;}
function M8(a,b){Wg(a.by,b);}
function Kw(a,b){var c,d;if(b!==a.tw){c=a.by;d=b.cc;c.useProgram(d);a.tw=b;}}
function ABF(){var a=this;KC.call(a);a.vU=null;a.ws=null;}
function AQY(a,b){var c=new ABF();AIB(c,a,b);return c;}
function AIB(a,b,c){var d,e,f,g,h,i,j,k,l;d=new Tw;a.dn=new Z;a.kP=0;a.lu=new VJ;a.qh=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);G(G(f,B(52)),e);$rt_globals.console.info($rt_ustr(N(f)));a.by=b;a.cq=LU(d,4,4);g=ADs(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BQ(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;k=new Pc;X5();f=ATt;k.dM=b;k.f1=f;k.q3=h.length/f.j8|0;k.tn=
j.length;f=b.createBuffer();k.mu=f;b.bindBuffer(34962,f);f=g.data;b.bufferData(34962,f,35044);k.tL=null;f=b.createBuffer();k.td=f;if(f!==null){b.bindBuffer(34963,f);f=i.data;b.bufferData(34963,f,35044);}d=null;b.bindBuffer(34962,d);f=null;b.bindBuffer(34963,f);a.od=k;a.wc=J1(e,B(53));f=new Pd;f.c7=b;a.r8=f;l=b.getParameter(3379);a.vd=l;f=new M;O(f);S(G(f,B(54)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(DZ,6);i=g.data;d=new Vh;KX(d,b,B(55),B(56),ATt);f=d.cc;d.s0=b.getUniformLocation(f,"uColor");a.i$=d;i[0]
=d;f=AQs(b,B(57));a.wJ=f;i[1]=f;f=new PQ;KX(f,b,B(55),B(58),ATt);a.wr=f;i[2]=f;f=ARO(b);a.vu=f;i[3]=f;f=AQZ(b);a.fL=f;i[4]=f;f=ARY(b);a.g3=f;i[5]=f;a.wz=g;Wg(b,B(59));a.ws=new Tu;a.vU=c;}
function GB(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cq;g=YB(b,c,d,e);IF(f,g);h=f.bj.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eg(f,B(60));m=Eg(f,B(61));h=new Ks;n=J5(g);h.lA=b;h.uS=c;o=c|0;if(o!==c){b=new M;O(b);E$(G(b,B(62)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.oi=o;h.u1=d;h.vt=e;h.db=i;h.dT=j;h.uP=l;h.lo=k;h.mI=n;h.qa=C$(i);h.wk=C$(h.dT);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.uY=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(63);}h.uG=b;return h;}
function Cq(){C.call(this);this.bb=null;}
function D_(a,b){a.bb=b;}
function APh(a,b){return 0;}
var Iz=F();
var ASR=null;function IY(a,b,c){return b.i9(c);}
function AAd(){ASR=new Iz;}
function YS(){var a=this;C.call(a);a.bZ=null;a.lK=null;a.bC=null;a.dF=null;a.ez=null;a.f4=null;a.gF=null;a.iZ=null;a.jH=null;a.cI=null;}
function ARy(a){var b=new YS();ALF(b,a);return b;}
function ALF(a,b){a.bZ=CG(R(Ck,0));a.lK=CG(R(Ck,0));a.bC=CG(R(CB,0));a.dF=CG(R(DN,0));a.ez=CG(R(ES,0));a.f4=CG(R(Fc,0));a.gF=CG(R(FW,0));a.iZ=CG(R(Bi,0));a.jH=CG(R(Bi,0));a.cI=b;}
function S7(a,b){var c,d,e,f;C_(a.cI);c=(Cn(!b.g4?a.lK:a.bZ)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bw(b);if(f)break;if(b.jq)break;e=e+1|0;}return f;}
function PR(a,b,c){var d,e,f;C_(a.cI);d=(Cn(a.f4)).data;e=d.length;f=0;while(f<e){if(d[f].hb(b,c))return 1;f=f+1|0;}return 0;}
function Vx(){C.call(this);this.mU=null;}
function ALB(a,b){var c;c=a.mU;if(S7(c.ca,WY(c,b,1)))DC(c,b);}
function Vy(){C.call(this);this.rs=null;}
function ALQ(a,b){var c;c=a.rs;if(S7(c.ca,WY(c,b,0)))DC(c,b);}
function Vz(){C.call(this);this.nV=null;}
function AKh(a,b){var c,d,e,f,g,h;c=a.nV;if(c.dc!==null){d=Eu(c,b);e=c.ca;C_(e.cI);f=(Cn(e.bC)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bX(d))break a;h=h+1|0;}}DC(c,b);}}
function VA(){C.call(this);this.tJ=null;}
function AJE(a,b){var c,d,e,f,g,h;c=a.tJ;b.button;if(c.dc!==null){d=Eu(c,b);c=c.ca;e=b.button;C_(c.cI);f=(Cn(c.bC)).data;g=f.length;h=0;a:{while(h<g){if(f[h].cZ(d,e))break a;h=h+1|0;}}}}
function VB(){C.call(this);this.qE=null;}
function AJ3(a,b){var c,d,e,f,g,h,i;c=a.qE;b.button;if(c.dc!==null){d=Eu(c,b);e=c.ca;f=b.button;C_(e.cI);g=(Cn(e.bC)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cG(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DC(c,b);}}
function VC(){C.call(this);this.nj=null;}
function AMo(a,b){var c,d,e,f,g,h,i,j,k;c=a.nj;if(c.dc!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.ca;f=Eu(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;C_(e.cI);i=(Cn(e.dF)).data;j=i.length;k=0;b:{while(k<j){if(i[k].cY(f,d,h))break b;k=k+1|0;}}DC(c,b);}}
function VD(){C.call(this);this.tX=null;}
function AHU(a,b){var c,d,e,f,g,h,i,j;c=a.tX;if(c.dc!==null){d=Eu(c,b);e=c.ca;f=b.button;g=b.detail;C_(e.cI);h=(Cn(e.bC)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cm(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DC(c,b);}}
function VE(){C.call(this);this.qQ=null;}
function APJ(a,b){var c,d,e,f,g,h,i;c=a.qQ;if(c.dc!==null){d=Eu(c,b);e=c.ca;C_(e.cI);f=(Cn(e.ez)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bw(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DC(c,b);}}
function VF(){C.call(this);this.nA=null;}
function AHc(a,b){var c,d,e;b=a.nA.ca;c=(Cn(b.jH)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C_(b.cI);}
function VG(){C.call(this);this.s9=null;}
function ANt(a,b){var c,d,e;b=a.s9.ca;c=(Cn(b.iZ)).data;d=c.length;e=0;while(e<d){c[e].s();e=e+1|0;}C_(b.cI);}
function WT(){C.call(this);this.sy=null;}
function APi(a,b){var c;c=a.sy;if(c.dc!==null)Eu(c,b);}
function WU(){C.call(this);this.rG=null;}
function AJS(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.rG;if(Mk()===c.gG){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cn(c.ca.gF)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].f8();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.ca.cI;m=new MX;m.th=k;m.ti=l;g.getAsString(Bk(m,"accept"));DC(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);G(G(G(G(l,B(64)),k),B(65)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function WV(){C.call(this);this.l5=null;}
function AKl(a,b){var c;c=a.l5;if(Mk()===c.gG&&PR(c.ca,SX(c,b),0))DC(c,b);}
function WW(){C.call(this);this.tm=null;}
function AL6(a,b){var c;c=a.tm;if(Mk()===c.gG&&PR(c.ca,SX(c,b),1))DC(c,b);}
var Tj=F(0);
var Tw=F();
function LU(a,b,c){var d,e,f;d=new Qo;AS8=AS8+1|0;d.k_=b;d.kl=c;e=(DX()).createElement("canvas");d.i8=e;f=b;e.width=f;e=d.i8;f=c;e.height=f;d.bj=d.i8.getContext("2d");return d;}
var Tu=F();
function AIW(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function LM(){var a=this;C.call(a);a.Y=null;a.o=null;a.bV=null;}
function ACp(){var a=this;C.call(a);a.gL=null;a.h5=null;a.gy=0;}
function CG(a){var b=new ACp();AHQ(b,a);return b;}
function AHQ(a,b){a.gL=b;}
function Ba(a,b){var c,d,e;c=a.gy;d=a.gL;if(c==d.data.length)a.gL=Dd(d,c+4|0);d=a.gL.data;e=a.gy;a.gy=e+1|0;d[e]=b;a.h5=null;}
function Cn(a){var b;b=a.h5;if(!(b!==null&&b.data.length==a.gy))a.h5=Dd(a.gL,a.gy);return a.h5;}
var If=F(0);
var Ck=F(0);
var CB=F(0);
function AI0(a,b){return 0;}
function AMn(a,b,c,d){return 0;}
function AFa(a,b,c){return 0;}
function AD1(a,b,c){return 0;}
var DN=F(0);
var ES=F(0);
var Fc=F(0);
var HG=F(0);
var FW=F(0);
function Pn(){C.call(this);this.u9=null;}
function Z(){var a=this;C.call(a);a.b=0;a.a=0;}
function B3(a,b){var c=new Z();YL(c,a,b);return c;}
function YL(a,b,c){a.b=b;a.a=c;}
function C1(a,b){a.b=b.b;a.a=b.a;}
function Y(a,b,c){a.b=b;a.a=c;}
function Xb(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);S(G(S(G(d,B(66)),b),B(67)),c);return N(d);}
function Kv(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function VJ(){var a=this;C.call(a);a.qt=0;a.qu=0;a.qs=0;a.qq=0;}
var ABE=F();
var X8=F(0);
function Pd(){C.call(this);this.c7=null;}
function KV(){var a=this;C.call(a);a.cc=null;a.wm=null;}
function AAF(b,c,d){var e,f,g;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(68):B(69);d=$rt_str(b.getShaderInfoLog(e));g=new M;O(g);G(G(g,f),d);f=N(g);b.deleteShader(e);Bu(By(),f);b=new Bm;Bl(b,f);J(b);}
function DZ(){var a=this;KV.call(a);a.nz=null;a.oO=null;a.k2=null;}
function ATu(a,b,c,d){var e=new DZ();KX(e,a,b,c,d);return e;}
function KX(a,b,c,d,e){var f,g,h,i,j,k;a.wm=e;f=AAF(b,35633,c);d=AAF(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.cc=g;h=e.rg.data;i=h.length;j=0;while(j<i){c=h[j];d=a.cc;k=c.gO;c=c.o0;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.cc;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Wg(b,B(70));a.k2=new Z;c=a.cc;a.nz=b.getUniformLocation(c,"uResolution");c=a.cc;a.oO=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bm;c=new M;O(c);G(G(c,B(71)),d);Bl(b,N(c));J(b);}
function YU(a,b,c){var d,e,f;if(!Kv(a.k2,c)){C1(a.k2,c);d=a.nz;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function Lu(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.oO;b.uniform4f(e,i,l,h,j);YU(a,b,f);}
function Vh(){DZ.call(this);this.s0=null;}
function Es(){DZ.call(this);this.qy=null;}
function AQs(a,b){var c=new Es();S1(c,a,b);return c;}
function ATv(a,b,c){var d=new Es();S8(d,a,b,c);return d;}
function S1(a,b,c){S8(a,b,B(55),c);}
function S8(a,b,c,d){X5();KX(a,b,c,d,ATt);c=a.cc;a.qy=b.getUniformLocation(c,"sDiffuse");}
function To(a,b,c){var d;d=a.qy;b.uniform1i(d,0);b.activeTexture(33984);c=c.er;b.bindTexture(3553,c);}
var PQ=F(DZ);
function ABl(){Es.call(this);this.vh=null;}
function ARO(a){var b=new ABl();AHj(b,a);return b;}
function AHj(a,b){var c;S1(a,b,B(72));c=a.cc;a.vh=b.getUniformLocation(c,"uContrast");}
function AAX(){var a=this;Es.call(a);a.sz=null;a.oP=null;a.m3=null;a.n3=null;}
function AQZ(a){var b=new AAX();AMj(b,a);return b;}
function AMj(a,b){var c;S8(a,b,B(73),B(74));c=a.cc;a.sz=b.getUniformLocation(c,"uTexTransform");c=a.cc;a.oP=b.getUniformLocation(c,"uColor");c=a.cc;a.m3=b.getUniformLocation(c,"uBgColor");c=a.cc;a.n3=b.getUniformLocation(c,"uContrast");}
function Yo(){var a=this;Es.call(a);a.tM=null;a.tK=null;a.pl=null;}
function ARY(a){var b=new Yo();AGO(b,a);return b;}
function AGO(a,b){var c,d;S1(a,b,B(75));c=a.cc;a.tM=b.getUniformLocation(c,"uColorB");d=a.cc;a.tK=b.getUniformLocation(d,"uColorF");d=a.cc;a.pl=b.getUniformLocation(d,"uContrast");}
var QY=F(0);
var AC8=F(0);
function HN(b,c,d){var e,f,g,h;e=d.bh;f=d.bu;g=d.be;h=d.bv;b.uniform4f(c,e,f,g,h);}
function Wg(b,c){var d,e;d=b.getError();if(d){b=By();e=new M;O(e);S(G(e,c),d);Bu(b,N(e));}}
function Pa(){var a=this;C.call(a);a.uH=null;a.uJ=null;a.uI=null;}
function Pc(){var a=this;C.call(a);a.dM=null;a.f1=null;a.mu=null;a.tL=null;a.td=null;a.q3=0;a.tn=0;}
function Cr(){var a=this;C.call(a);a.uC=null;a.cH=0;}
function DE(a,b,c){a.uC=b;a.cH=c;}
function Gw(){var a=this;Cr.call(a);a.rg=null;a.lN=null;a.qf=null;a.j8=0;a.oJ=0;a.rA=0;}
var ATt=null;var ATw=null;function X5(){X5=Bq(Gw);AIs();}
function AIs(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gw;c=R(DM,2);d=c.data;AOC();d[0]=ATx;d[1]=ATy;X5();DE(b,B(76),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];XH();switch(ATz.data[l.lj.cH]){case 1:f=f+l.ey|0;h=h+1|0;break a;case 2:e=e+l.ey|0;g=g+1|0;break a;default:}}i=i|1<<l.gO;k=k+1|0;}b.rg=c;b.j8=e;b.oJ=f;b.rA=i;c=R(DM,g);m=c.data;b.lN=c;c=R(DM,h);n=c.data;b.qf=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];XH();switch(ATz.data[l.lj.cH]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}ATt=b;c=R(Gw,1);c.data[0]=b;ATw=c;}
var Lt=F(0);
var Sk=F(0);
var TL=F(0);
var Gd=F();
function IQ(){Gd.call(this);this.ua=null;}
function Zl(){var a=this;IQ.call(a);a.wa=0;a.kh=0;a.h0=null;a.jM=null;a.r2=null;}
function AKw(a,b){var c=new Zl();AOl(c,a,b);return c;}
function AOl(a,b,c){a.ua=b;b=new M;O(b);a.h0=b;a.jM=BQ(32);a.wa=c;Y_();a.r2=ATA;}
function Sz(a,b,c,d){var e,$$je;e=a.ua;if(e===null)a.kh=1;if(!(a.kh?0:1))return;a:{try{e.jC(b,c,d);break a;}catch($$e){$$je=D8($$e);if($$je instanceof HY){}else{throw $$e;}}a.kh=1;}}
function Ne(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=Z3(b,c,d-c|0);e=EZ(V(16,X(e.length,1024)));g=ZP(e,0,e.data.length);h=a.r2;i=new OB;b=EZ(1);j=b.data;j[0]=63;GS();k=ATB;i.k6=k;i.km=k;c=j.length;if(c&&c>=i.lO){i.ux=h;i.oY=b.e9();i.v5=2.0;i.lO=4.0;i.oj=BQ(512);i.ng=EZ(512);k=ATC;if(k===null){i=new BC;Bl(i,B(77));J(i);}i.k6=k;i.km=k;a:while(true){if(i.hV==3){f=new DP;U(f);J(f);}i.hV=2;b:{while(true){try{k=XV(i,f,g);}catch($$e){$$je=D8($$e);if($$je instanceof Bm){f=$$je;break a;}else{throw $$e;}}if(HM(k))
{d=B4(f);if(d<=0)break b;k=DQ(d);}else if(GP(k))break;h=!Lf(k)?i.k6:i.km;c:{if(h!==ATC){if(h===ATD)break c;else break b;}d=B4(g);b=i.oY;l=b.data.length;if(d<l){k=ATE;break b;}V1(g,b,0,l);}Ex(f,f.R+JA(k)|0);}}l=GP(k);Sz(a,e,0,g.R);Nc(g);if(!l){while(true){d=i.hV;if(d!=2&&d!=4){f=new DP;U(f);J(f);}f=ATF;if(f===f)i.hV=3;l=GP(f);Sz(a,e,0,g.R);Nc(g);if(!l)break;}return;}}J(AF2(f));}i=new BC;Bl(i,B(78));J(i);}
function Bu(a,b){var c,d,e,f,g,h,i,j;BA(BY(a.h0,b),10);b=a.h0;c=b.M;d=a.jM;if(c>d.data.length)d=BQ(c);e=0;f=0;if(e>c){b=new Bw;Bl(b,B(79));J(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Ne(a,d,0,c);a.h0.M=0;}
function F1(){Gd.call(this);this.vV=null;}
function W1(a){a.vV=EZ(1);}
var KI=F(F1);
var AS_=null;function AIO(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AA_(){var b;b=new KI;W1(b);AS_=b;}
function DM(){var a=this;Cr.call(a);a.o0=null;a.lj=null;a.ey=0;a.ol=0;a.gO=0;}
var ATx=null;var ATy=null;var ATG=null;function AOC(){AOC=Bq(DM);AHC();}
function AQ_(a,b,c,d,e,f,g){var h=new DM();U_(h,a,b,c,d,e,f,g);return h;}
function U_(a,b,c,d,e,f,g,h){AOC();DE(a,b,c);a.o0=d;a.lj=e;a.ey=f;a.ol=g;a.gO=h;}
function AHC(){var b;b=new DM;AAr();U_(b,B(80),0,B(81),ATH,2,0,0);ATx=b;b=AQ_(B(82),1,B(83),ATH,2,0,1);ATy=b;ATG=H(DM,[ATx,b]);}
function IG(){var a=this;C.call(a);a.uk=null;a.vk=null;}
function ABr(b){var c,d;if(Fd(b))J(Ze(b));if(!ABt(L(b,0)))J(Ze(b));c=1;while(c<I(b)){a:{d=L(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ABt(d))break a;else J(Ze(b));}}c=c+1|0;}}
function ABt(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Lx=F(IG);
var ATA=null;function Y_(){Y_=Bq(Lx);AGK();}
function ABI(a){var b,c;b=new SA;b.ev=B(84);GS();c=ATB;b.gs=c;b.le=c;b.va=a;b.lX=0.3333333432674408;b.vv=0.5;b.nv=EZ(512);b.rr=BQ(512);return b;}
function AGK(){var b,c,d,e,f;b=new Lx;Y_();c=R(Bv,0);d=c.data;ABr(B(85));e=d.length;f=0;while(f<e){ABr(d[f]);f=f+1|0;}b.uk=B(85);b.vk=c.e9();ATA=b;}
var JL=F();
var ATI=null;var ATz=null;function XH(){XH=Bq(JL);ALq();}
function ALq(){var b,c;AAr();b=BH((ATJ.e9()).data.length);c=b.data;ATz=b;c[ATK.cH]=1;c[ATH.cH]=2;AAt();c=BH((ATL.e9()).data.length);b=c.data;ATI=c;b[ATM.cH]=1;b[ATN.cH]=2;}
function Ol(){var a=this;C.call(a);a.eZ=null;a.lE=null;a.jo=null;a.rK=null;a.oI=null;a.oT=null;}
function Zo(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.eZ,b,c));}
function Md(a,b){var c,d,e,f,g,h,i,$$je;c=new Bv;d=b;while(a.lE[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.eZ,b,d));f=e.data;ED();d=f.length;Y_();g=ATA;h=ZP(e,0,d);a:{try{i=ABI(g);GS();g=Ye(AAJ(ACh(i,ATC),ATC),h);break a;}catch($$e){$$je=D8($$e);if($$je instanceof FC){g=$$je;}else{throw $$e;}}h=new V_;h.iB=1;h.i4=1;h.g2=B(86);h.kn=g;J(h);}if(!g.R&&g.c9==g.lB)c.bQ=g.gN;else{f=BQ(B4(g));e=f.data;c.bQ=f;MO(g,f,0,e.length);}return c;}
function Mm(a,b){var c,d,e;c=new Bv;d=b>>>1|0;e=d;while(a.jo[e]){e=e+1|0;}d=e-d|0;G4(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.eZ,b,d)));return c;}
var GA=F(Cr);
var ATK=null;var ATH=null;var ATJ=null;function AAr(){AAr=Bq(GA);AGf();}
function AGD(a,b){var c=new GA();ABJ(c,a,b);return c;}
function ABJ(a,b,c){AAr();DE(a,b,c);}
function AGf(){var b;ATK=AGD(B(87),0);b=AGD(B(88),1);ATH=b;ATJ=H(GA,[ATK,b]);}
var F6=F(Cr);
var ATM=null;var ATN=null;var ATL=null;function AAt(){AAt=Bq(F6);AGS();}
function APO(a,b){var c=new F6();Yb(c,a,b);return c;}
function Yb(a,b,c){AAt();DE(a,b,c);}
function AGS(){var b;ATM=APO(B(89),0);b=APO(B(90),1);ATN=b;ATL=H(F6,[ATM,b]);}
var UQ=F(DS);
function ABw(){BC.call(this);this.uB=null;}
function Ze(a){var b=new ABw();ANV(b,a);return b;}
function ANV(a,b){U(a);a.uB=b;}
var Lw=F(0);
function WA(){C.call(this);this.oM=null;}
function AM2(a,b){a.oM.setPointerCapture(b.pointerId);}
function WC(){C.call(this);this.nN=null;}
function AEQ(a,b){a.nN.releasePointerCapture(b.pointerId);}
function GJ(){var a=this;C.call(a);a.lB=0;a.R=0;a.c9=0;a.gW=0;}
function U9(a,b){a.gW=(-1);a.lB=b;a.c9=b;}
function Ex(a,b){var c,d,e;if(b>=0&&b<=a.c9){a.R=b;if(b<a.gW)a.gW=0;return a;}c=new BC;d=a.c9;e=new M;O(e);BA(S(G(S(G(e,B(91)),b),B(92)),d),93);Bl(c,N(e));J(c);}
function B4(a){return a.c9-a.R|0;}
function DD(a){return a.R>=a.c9?0:1;}
var Rg=F(0);
var Kt=F(GJ);
function ACL(b){var c,d;if(b>=0)return ALU(0,b,BQ(b),0,b,0);c=new BC;d=new M;O(d);S(G(d,B(93)),b);Bl(c,N(d));J(c);}
function Z3(b,c,d){return ALU(0,b.data.length,b,c,c+d|0,0);}
function MO(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bw;i=new M;O(i);S(G(S(G(i,B(94)),g),B(95)),f);Bl(h,N(i));J(h);}if(B4(a)<d){j=new K9;U(j);J(j);}if(d<0){j=new Bw;k=new M;O(k);G(S(G(k,B(96)),d),B(97));Bl(j,N(k));J(j);}g=a.R;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.gN.data[m+a.lq|0];l=l+1|0;c=n;m=o;}a.R=g+d|0;return a;}}b=b.data;j=new Bw;d=b.length;k=new M;O(k);BA(S(G(S(G(k,B(98)),c),B(92)),d),41);Bl(j,N(k));J(j);}
function Jw(a,b){var c,d,e,f,g,h,i;c=0;d=I(b);if(a.lF){b=new Ir;U(b);J(b);}e=d-c|0;if(B4(a)<e){b=new Hv;U(b);J(b);}if(c>I(b)){f=new Bw;d=I(b);b=new M;O(b);BA(S(G(S(G(b,B(99)),c),B(92)),d),41);Bl(f,N(b));J(f);}if(d>I(b)){f=new Bw;c=I(b);b=new M;O(b);S(G(S(G(b,B(100)),d),B(101)),c);Bl(f,N(b));J(f);}if(c>d){b=new Bw;f=new M;O(f);S(G(S(G(f,B(99)),c),B(102)),d);Bl(b,N(f));J(b);}g=a.R;while(c<d){h=g+1|0;i=c+1|0;Rm(a,g,L(b,c));g=h;c=i;}a.R=a.R+e|0;return a;}
function Jc(){var a=this;GJ.call(a);a.kg=0;a.kV=null;a.vJ=null;}
function ZP(b,c,d){var e,f,g;e=b.data;f=new V0;g=e.length;d=c+d|0;U9(f,g);AIy();f.vJ=ATO;f.kg=0;f.kV=b;f.R=c;f.c9=d;f.vM=0;f.mp=0;return f;}
function V1(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mp){e=new Ir;U(e);J(e);}if(B4(a)<d){e=new Hv;U(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bw;j=new M;O(j);S(G(S(G(j,B(103)),h),B(95)),g);Bl(i,N(j));J(i);}if(d<0){e=new Bw;i=new M;O(i);G(S(G(i,B(96)),d),B(97));Bl(e,N(i));J(e);}h=a.R;k=h+a.kg|0;l=0;while(l<d){b=a.kV.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.R=h+d|0;return a;}}b=b.data;e=new Bw;d=b.length;i=new M;O(i);BA(S(G(S(G(i,B(98)),c),B(92)),d),41);Bl(e,N(i));J(e);}
function Nc(a){a.R=0;a.c9=a.lB;a.gW=(-1);return a;}
function Hl(){C.call(this);this.wD=null;}
var ATD=null;var ATC=null;var ATB=null;function GS(){GS=Bq(Hl);AJV();}
function ACr(a){var b=new Hl();ABn(b,a);return b;}
function ABn(a,b){GS();a.wD=b;}
function AJV(){ATD=ACr(B(104));ATC=ACr(B(105));ATB=ACr(B(106));}
var Mu=F(Cq);
function AJO(a){}
function AIi(a,b,c){}
var ACP=F();
function ANE(b){var c,d;if(I(b)>0){c=new M;O(c);G(G(c,B(107)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(KE(b)){case -1570047148:if(!Bn(b,B(108)))break a;d=15;break a;case -1519338717:if(!Bn(b,B(109)))break a;d=1;break a;case -1509980539:if(!Bn(b,B(110)))break a;d=11;break a;case -1383096302:if(!Bn(b,B(111)))break a;d=5;break a;case -1073555521:if(!Bn(b,B(112)))break a;d=12;break a;case -811765794:if(!Bn(b,B(113)))break a;d=4;break a;case -785237654:if(!Bn(b,B(114)))break a;d=9;break a;case -631889171:if
(!Bn(b,B(115)))break a;d=7;break a;case -439438829:if(!Bn(b,B(116)))break a;d=16;break a;case 3343967:if(!Bn(b,B(117)))break a;d=8;break a;case 3556498:if(!Bn(b,B(118)))break a;d=3;break a;case 544901384:if(!Bn(b,B(119)))break a;d=2;break a;case 1030621992:if(!Bn(b,B(120)))break a;d=14;break a;case 1465713255:if(!Bn(b,B(121)))break a;d=6;break a;case 1554501643:if(!Bn(b,B(122)))break a;d=13;break a;case 1609169232:if(!Bn(b,B(123)))break a;d=10;break a;default:}}b:{switch(d){case 1:break;case 2:case 3:b=new Sa;break b;case 4:b
=new R_;break b;case 5:b=new R$;break b;case 6:b=new R9;break b;case 7:case 8:b=new R8;break b;case 9:b=new R7;break b;case 10:b=new R6;break b;case 11:b=new R5;break b;case 12:b=new R4;break b;case 13:b=new PP;break b;case 14:b=new PN;break b;case 15:b=new PO;break b;case 16:b=new PL;break b;default:b=new PM;break b;}b=new Sb;}return b;}
var Z2=F();
var Jp=F(Kt);
function ZI(){var a=this;Jp.call(a);a.lF=0;a.lq=0;a.gN=null;}
function ALU(a,b,c,d,e,f){var g=new ZI();APW(g,a,b,c,d,e,f);return g;}
function APW(a,b,c,d,e,f,g){U9(a,c);a.R=e;a.c9=f;a.lq=b;a.lF=g;a.gN=d;}
function Rm(a,b,c){a.gN.data[b+a.lq|0]=c;}
function Kg(){var a=this;C.call(a);a.ux=null;a.oY=null;a.v5=0.0;a.lO=0.0;a.k6=null;a.km=null;a.hV=0;}
function K3(){var a=this;C.call(a);a.f3=0;a.hx=0;}
var ATF=null;var ATE=null;function X2(a,b){var c=new K3();Yv(c,a,b);return c;}
function Yv(a,b,c){a.f3=b;a.hx=c;}
function HM(a){return a.f3?0:1;}
function GP(a){return a.f3!=1?0:1;}
function J7(a){return !PG(a)&&!Lf(a)?0:1;}
function PG(a){return a.f3!=2?0:1;}
function Lf(a){return a.f3!=3?0:1;}
function JA(a){var b;if(J7(a))return a.hx;b=new E8;U(b);J(b);}
function DQ(b){return X2(2,b);}
function Uv(a){var b,c;switch(a.f3){case 0:b=new Pf;U(b);J(b);case 1:b=new Wf;U(b);J(b);case 2:b=new Ul;c=a.hx;U(b);b.wS=c;J(b);case 3:b=new O5;c=a.hx;U(b);b.wO=c;J(b);default:}}
function YW(){ATF=X2(0,0);ATE=X2(1,0);}
var XR=F();
var KH=F(0);
var MD=F();
function AG0(a,b){return b.arrayBuffer();}
var MC=F();
function AK5(a,b){var c,d;c=new Oi;d=new Og;return $rt_globals.WebAssembly.instantiate(b,AIV(Bk(c,"f"),Bk(d,"f")));}
var MB=F();
function ALL(a,b){AEK(b);}
var MA=F();
function AFq(a,b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
var Sb=F();
function ALj(a,b){return ASg(b);}
var Sa=F();
function AEr(a,b){return AQv(b);}
var R_=F();
function AH1(a,b){var c,d,e;c=new Vd;Hq(c,b);d=new T5;d.lk=new Z;d.jF=new Z;c.qH=d;c.dd=XY();c.cu=XY();c.dJ=L8(c.Q);Ba(c.Q.dw,c);d=b.o.bZ;e=new Sd;e.sB=c;Ba(d,e);Ba(b.o.bC,c);b=b.o.ez;d=new Sg;d.rm=c;Ba(b,d);RN(c.cu);b=Fn(B(124),25.0);c.rq=b;d=c.dJ;d.eX=b;It(d,Fl());BF(c.fX,CF(43));b=Fl();HJ(c.dd,b);HJ(c.cu,b);b=c.dd;b.iR=new Se;d=c.cu;d.iR=new Sc;d.jf=new Wa;d.si=new Wb;Kf(b,(MV(0)).id);Kf(c.cu,(MV(0)).id);return c;}
var R$=F();
function AHX(a,b){var c,d,e;c=new Wy;Hq(c,b);c.k3=Fn(B(125),15.0);d=ACT();c.ea=d;Ba(c.Q.dw,d);Ba(c.Q.dw,c);BF(c.fX,CF(43));d=L8(c.Q);c.e_=d;It(d,Fl());c.e_.eX=Fn(B(124),25.0);d=b.o.bZ;e=new W9;e.uE=c;Ba(d,e);d=b.o.ez;e=new W$;e.sA=c;Ba(d,e);Ba(b.o.bC,XX(c.e_));Ba(b.o.bC,c.ea);b=b.o.dF;d=c.ea;BI(d);e=new Xa;e.pi=d;Ba(b,e);return c;}
var R9=F();
function AIA(a,b){var c,d,e;c=new W4;Hq(c,b);c.ff=Cl();c.eE=Cl();c.oa=Br(B(126));c.hQ=ANS();c.fD=0;d=c.Q.dw;e=new S9;e.l8=c;Ba(d,e);Ba(b.o.bC,c);d=b.o.bZ;e=new S$;e.pt=c;Ba(d,e);b=FL(b.Y,B(124),35);c.iQ=b;c.hA=ACA(Eo(b));BF(c.fX,Br(B(127)));return c;}
var R8=F();
function AEy(a,b){var c,d,e,f;c=new Oq;D_(c,b);c.fy=AJ_();c.dD=0;c.rb=500;c.ts=W7(0,0,0,255);c.ll=20;c.tG=20;c.n5=ABU();d=b.o.bC;e=new Vt;e.ia=c;f=new W3;f.qX=e;e.qm=f;Ba(d,e);d=b.o.dF;e=new RQ;e.nD=c;Ba(d,e);c.dE=b.Y;c.se=TI(b.bV);SG(c.fy,FL(c.dE,B(124),c.tG),c.ll,c.dE);c.gr=G6();return c;}
var R7=F();
function AGa(a,b){var c,d;c=new PX;Gc(c,b);b=b.o.bZ;d=new Pg;d.tv=c;Ba(b,d);return c;}
var R6=F();
function ALA(a,b){return ART(b);}
var R5=F();
function AO2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new VU;Gc(c,b);c.ds=E5(0,0,300,300);c.es=RH(0,0,3,3);d=b.Y;b=b.o.bC;e=new SO;e.kB=c;Ba(b,e);b=Y9(d);c.oW=b;F$(c.ds,b);GL(c.ds);b=c.ds.bW;Dq();BF(b,ATP);BF(c.ds.bM,Cw(204,120,50));AAt();e=ATN;f=EZ((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CR(d);XH();switch(ATI.data[e.cH]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=new Eh;U(b);J(b);}b:
{Mx(m,5,5,h);b=m.dB.c7;switch(ATI.data[e.cH]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Eh;U(b);J(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.jV=m;Y(c.es.x,Cb(m),C3(c.jV));BF(c.es.bW,c.k9);return c;}
var R4=F();
function APU(a,b){var c,d,e;c=new Rh;Gc(c,b);c.fV=E5(0,0,300,300);c.jv=new Z;c.hR=new Z;c.g_=new Z;d=b.Y;b=b.o.bC;e=new UZ;e.iU=c;Ba(b,e);b=Y9(d);c.qS=b;F$(c.fV,b);GL(c.fV);b=c.fV.bW;Dq();BF(b,ATP);BF(c.fV.bM,Cw(204,120,50));return c;}
var PP=F();
function AJq(a,b){var c,d,e,f;c=new NZ;D_(c,b);c.vz=20;c.w5=11;c.vf=220;c.iz=new Z;c.vX=5000;c.ge=1;c.e1=H(Ii,[CF(0),CF(255)]);c.dL=b.Y;d=b.o.bC;e=new Tg;e.iM=c;f=new OQ;f.mQ=e;e.o8=f;Ba(d,e);b=b.o.dF;d=new Nb;d.sY=c;Ba(b,d);b=CJ(c.dL,200,220);c.jn=b;FR(b,B(124),20.0);b=CJ(c.dL,200,20);c.eK=b;FR(b,B(124),20.0);c.hk=G6();return c;}
var PN=F();
function ADq(a,b){var c,d,e;c=new H2;Gc(c,b);Ba(b.o.bC,c);d=b.o.bZ;e=new Rs;e.q0=c;Ba(d,e);Ba(b.o.f4,new Rr);d=b.o.f4;e=new Rp;e.oN=c;Ba(d,e);Ba(b.o.gF,new Ro);d=b.o.gF;e=new Rq;e.mV=c;Ba(d,e);b=!WE(b.bV)?B(128):B(129);d=new M;O(d);G(G(d,B(130)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var PO=F();
function AGW(a,b){var c,d,e,f,g,h,i,j;c=new Pk;D_(c,b);c.m5=CF(20);c.eF=E5(0,0,300,300);d=b.o.bZ;e=new QZ;e.wE=c;Ba(d,e);b=b.Y;d=FL(b,B(10),88);Cv(b.cq,d);f=Eg(b.cq,B(131));g=Eg(b.cq,B(132));if(f>g)g=f;h=C$(g);i=Jr(d,1.1799999475479126);j=By();e=new M;O(e);S(G(S(G(e,B(133)),h),B(134)),i);Bu(j,N(e));e=CJ(b,h,i*2|0);c.hB=e;Cv(e,d);Cf(c.hB,B(131),0.0,d.db);Cf(c.hB,B(132),0.0,i+d.db);b=CR(b);c.k0=b;CL(b,c.hB);F$(c.eF,c.k0);GL(c.eF);b=c.eF.bW;Dq();BF(b,ATP);BF(c.eF.bM,ATQ);return c;}
var PL=F();
function AJJ(a,b){var c,d,e,f;c=new Vu;Hq(c,b);c.sd=Fn(B(125),20.0);d=ACT();c.dG=d;Ba(c.Q.dw,d);Ba(c.Q.dw,c);BF(c.fX,CF(43));d=L8(c.Q);c.fg=d;It(d,Fl());c.fg.eX=Fn(B(124),25.0);d=b.o.bZ;e=new PC;e.wB=c;Ba(d,e);d=b.o.ez;e=new PD;e.px=c;Ba(d,e);Ba(b.o.bC,XX(c.fg));Ba(b.o.bC,c.dG);d=b.o.bC;e=c.Q.cp;f=new Qu;f.lU=e;Ba(d,f);b=b.o.dF;d=c.dG;BI(d);e=new PE;e.q1=d;Ba(b,e);return c;}
var PM=F();
function ANi(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=new Qg;Xd(c,b);d=c.cD;e=new H3;f=R(Bv,8);g=I(B(135));h=0;i=0;j=g+1|0;while(true){k=Gr(B(135),10,i);l=k>=0?B8(B(135),i,k):Dc(B(135),i);m=f.data;n=h+1|0;o=m.length;if(o==h)f=Dd(f,o*2|0);f.data[h]=l;f=f;i=k<0?j:k+1|0;if(i>g)break;h=n;}if(f.data.length!=n)f=Dd(f,n);PF(e,f,B(136),null);d.uD=null;Ue(d);p=d.e;d.e=e;d.ep=Fu();l=Z9(Dg(d.e));if(l!==null){q=Cg(d);r=new T9;r.rk=d;m=R(C,1);m.data[0]=F9(d.e.g);C0(q,r,l,m);}f=(Cn(d.dW.l6)).data;s=f.length;o=0;while
(o<s){f[o].lG(p,e);o=o+1|0;}return c;}
function GR(){var a=this;C.call(a);a.bx=0;a.cg=0;a.c1=0;a.kx=0;}
function ATR(a,b,c,d){var e=new GR();Ts(e,a,b,c,d);return e;}
function Ts(a,b,c,d,e){a.bx=d;a.cg=b;a.c1=c;a.kx=e;}
function N8(){var a=this;GR.call(a);a.dk=null;a.bm=0;a.g4=0;a.qZ=0;a.jq=0;}
function ACE(b){var c,d,e;c=b.cg;d=c&&!b.bx&&!b.c1&&!b.kx?1:0;a:{if(d){d=b.bm;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bx&&!c&&!b.c1&&!b.kx?1:0;d=d&&b.bm==46?1:0;}b:{if(!d){e=b.bm;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jq=1;}return 0;}
var ABO=F();
function Vk(b,c){return (b+(c/2|0)|0)/c|0;}
function OW(b,c,d){if(b<(2147483647/c|0))return Vk(Be(b,c),d);return 0.5+c*b/d|0;}
function H8(b,c){return ((b+c|0)-1|0)/c|0;}
function GZ(b){return b+0.5|0;}
function C$(b){return b+0.5|0;}
function ER(b,c,d){return V(b,X(c,d));}
function LI(){var a=this;GR.call(a);a.j=null;a.ul=null;}
var Tl=F(0);
function MX(){var a=this;C.call(a);a.th=null;a.ti=null;}
function AJj(a,b){var c,d;c=a.th;d=a.ti;$rt_globals.console.info("paste plain string "+b);c.l(Fs(b));C_(d);}
function T6(){C.call(this);this.tI=null;}
function Vj(a,b){a.tI.clipboardData.setData("text/plain",$rt_ustr(b));}
function V0(){var a=this;Jc.call(a);a.vM=0;a.mp=0;}
var AAK=F();
function JJ(){C.call(this);this.v9=null;}
var ATO=null;var ATS=null;function AIy(){AIy=Bq(JJ);APM();}
function AGx(a){var b=new JJ();Xc(b,a);return b;}
function Xc(a,b){AIy();a.v9=b;}
function APM(){ATO=AGx(B(137));ATS=AGx(B(138));}
var Va=F(0);
function RR(){C.call(this);this.gX=null;}
function Fy(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gX));}
function Em(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.gX));}
function AFX(a){var b,c;b=a.gX.byteLength;c=new M;O(c);G(S(G(c,B(139)),b),B(140));return N(c);}
var TD=F(0);
function Kr(){var a=this;C.call(a);a.gh=null;a.eC=null;a.lm=null;}
function AAG(a,b){var c=new Kr();AIt(c,a,b);return c;}
function AQj(a,b,c){var d=new Kr();Nd(d,a,b,c);return d;}
function Xn(b){var c,d,e,f,g,h,i,j,k;c=new Kr;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){f="/";f=e.split(f);if(f===null)g=null;else{g=TM(E(DV),f.length);h=0;while(true){i=g.data;if(h>=i.length)break;i[h]=J5(f[h]);h=h+1|0;}}j=g.data;h=j.length;if(!h)i=R(Bv,0);else{i=R(Bv,h-1|0);g=i.data;h=0;k=g.length;while(h<k){g[h]=Fs(Je(j[h]));h=h+1|0;}}}else i=R(Bv,0);Nd(c,d,b,i);return c;}
function AIt(a,b,c){Nd(a,b,c,R(Bv,0));}
function Nd(a,b,c,d){a.gh=b;a.eC=c;a.lm=d;}
function I4(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Er(a);e=new M;O(e);G(G(e,B(141)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function Er(a){var b;b=a.gh;return Fs(b!==null?b.name:a.eC.name);}
function AIU(a){var b,c,d,e,f;if(a.eC===null){b=a.lm;c=Er(a);d=Yz(b);e=new M;O(e);G(G(G(e,d),B(142)),c);c=N(e);}else{b=a.lm;c=Er(a);f=I4(a,a.eC.size);d=Yz(b);e=new M;O(e);S(G(G(G(G(e,d),B(142)),c),B(143)),f);c=N(e);}return c;}
function Kc(){var a=this;Kg.call(a);a.oj=null;a.ng=null;}
function XV(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.oj;e=0;f=0;g=a.ng;a:{while(true){if((e+32|0)>f&&DD(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=X(B4(b)+j|0,i.length);MO(b,d,j,f-j|0);e=0;}if(!DD(c)){k=!DD(b)&&e>=f?ATF:ATE;break a;}i=g.data;j=X(B4(c),i.length);l=new MW;l.md=b;l.o7=c;k=AAc(a,d,e,f,g,0,j,l);e=l.ss;j=l.tz;if(k===null){if(!DD(b)&&e>=f)k=ATF;else if(!DD(c)&&e>=f)k=ATE;}V1(c,g,0,j);if(k!==null)break;}}Ex(b,b.R-(f-e|0)|0);return k;}
var OB=F(Kc);
function AAc(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(K2(h,2))break a;i=ATE;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Lo(l)){if((f+3|0)>g){j=j+(-1)|0;if(K2(h,3))break a;i=ATE;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CC(l)){i=DQ(1);break a;}if
(j>=d){if(DD(h.md))break a;i=ATF;break a;}c=j+1|0;m=k[j];if(!CY(m)){j=c+(-2)|0;i=DQ(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(K2(h,4))break a;i=ATE;break a;}k=e.data;o=Ek(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.ss=j;h.tz=f;return i;}
var HY=F(DS);
function JV(){var a=this;Cq.call(a);a.qB=null;a.eV=null;a.cD=null;a.fI=null;a.pN=null;a.lt=null;}
function ASg(a){var b=new JV();Xd(b,a);return b;}
function Xd(a,b){var c,d,e,f,g;D_(a,b);a.qB=Ov(0,0,64);a.pN=new Z;a.lt=new Z;c=AEp(b);a.eV=c;d=new TX;d.qK=Fn(B(125),15.0);d.d3=c;d.dt=ACT();e=L8(d.d3);d.b1=e;e.eX=Fn(B(125),17.0);a.fI=d;c=AR2(a.eV,d);a.cD=c;d=a.eV;f=d.ib.dh!==(DX()).activeElement?0:1;if(f)Jh(d);d.ef=c;if(f)J_(d);Ba(b.o.bC,a.fI);Ba(b.o.dF,a.fI);Ba(b.o.bC,a.cD);Ba(b.o.bZ,new Q4);c=b.o.bZ;d=new Q8;d.tl=a;Ba(c,d);c=b.o.bZ;d=new Ju;g=a.cD;BI(g);e=new Q7;e.lP=g;Uz(d,b,null,e);Ba(c,d);c=b.o.bZ;d=a.eV;BI(d);g=new Q6;g.oQ=d;Ba(c,g);c=b.o.f4;d=a.cD;BI(d);g
=new Q5;g.t5=d;Ba(c,g);c=b.o.gF;d=new Q_;d.mP=a;Ba(c,d);c=b.o.dF;d=new Q$;d.rR=a;Ba(c,d);b=b.o.ez;c=new Q9;c.sK=a;Ba(b,c);SV(a);}
function AFB(a,b){var c,d,e,f;c=a.cD;d=c.e.g;e=d.fh;f=d.cj;e=e!=f&&b-d.oR>0.03125?1:0;if(e&&c.kr!=f){c.kr=f;RJ(c);}e=c.bi;f=D3(c,(e+c.uX|0)-c.up|0,EL(c));c.bi=f;e=e==f?0:1;return !RU(c.cv,b)&&!e&&!c.qJ?0:1;}
function AIe(a){var b;Fi(a.bb.Y,a.qB);ACQ(a.cD);b=a.fI;Iy(b.dt,b.d3.cT);HV(b.b1);}
function AL0(a){return ACR(0);}
function AKD(a,b,c){var d,e,f;RZ(a.eV,b,c);a.rH(b);b=a.cD;d=a.pN;e=a.lt;C1(b.ck,d);C1(b.cE,e);b.cC=B9(b.rc,c);f=B9(10.0,c);b.kQ=f;f=b.cC-f|0;Ux(b.ew,b.ck,f,b.cE.a,c);d=b.cv;f=B9(2.0,c);d.du.x.b=f;S4(b,b.iu,b.fG);UO(b);}
function AAk(a,b){Y(a.lt,b.b,b.a);}
function SV(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new KK;c=new Ii;Dq();NU(c,ATP);d=CT(ATT);e=CT(ATU);f=CT(ATV);g=CT(ATP);h=CT(ATW);i=CT(ATX);j=CT(ATY);Yr();k=(ATZ.e9()).data;l=k.length;m=R(IO,l);n=m.data;o=0;while(o<l){n[o]=k[o].kE;o=o+1|0;}MG(b,c,d,e,f,g,h,i,j,m,ABU(),Fl());Ur(a,b);}
function AAi(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=new KK;c=new Ii;Dq();NU(c,AT0);d=CT(AT1);e=CT(AT2);f=CT(ATV);g=CT(AT0);h=CT(AT3);i=CT(AT4);j=CT(AT5);ABS();k=(AT6.e9()).data;l=k.length;m=R(IO,l);n=m.data;o=0;while(o<l){n[o]=k[o].ld;o=o+1|0;}p=AJ8(CF(173),CF(242),CF(173),Cw(252,250,237));q=new Km;r=new EV;s=AT7;t=AT2;EH();F7(r,s,t,s,AT8,AT9);u=new EV;s=AT7;t=AT2;v=AT8;F7(u,s,t,s,v,v);RV(q,r,u,ACK(),Br(B(144)),ACK(),AFu(1,0.07500000298023224));MG(b,c,d,e,f,g,h,i,j,m,p,q);Ur(a,b);}
function Ur(a,b){var c,d;BI(b);c=a.fI;c.bk=b;d=c.da;if(d!==null)d.dQ=b.bg;It(c.b1,b.bg);c=a.cD;c.d2=b;c=c.cv;b=b.pR;BF(c.du.bM,b);}
function ACN(a,b){if(b.bm!=121)return 0;return 1;}
function X1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=a.eV;d=a.cD;if(d!==c.ef?0:1){c=a.fI;if(!DA(c.b1)){e=c.b1;f=b.j;b=new RT;b.U=c;b.bp=d;b.gS=a;g=O4();h=b.bp.e;i=Dg(h);j=GH(h);k=b.bp.dW;if(UL(k,i,j)!==null){h=b.U.bk.bg.X;l=new Qy;l.nG=b;l.nF=f;DY(g,B(145),h,l);}if(Kd(k,i,j)!==null){m=b.U.bk.bg.X;l=new Qx;l.ox=b;l.oz=f;DY(g,B(146),m,l);}if(ML(k,i,j)!==null){i=b.U.bk.bg.X;j=new Qv;j.mZ=b;j.m1=f;DY(g,B(147),i,j);}i=b.U.bk.bg.X;j=new Qw;j.t0=b;j.t1=f;DY(g,B(148),i,j);if(!b.bp.eW){i=b.U.bk.bg.X;j=new OM;j.sL=
b;DY(g,B(149),i,j);}i=b.U.bk.bg.X;j=new OK;j.pu=b;DY(g,B(150),i,j);if(!b.bp.eW&&WE(H7(b))){i=b.U.bk.bg.X;j=new ON;j.rS=b;DY(g,B(151),i,j);}m=b.U.bk.bg.X;h=O4();j=b.U.bk.bg.X;n=R(C5,2);o=n.data;p=b.gS;BI(p);q=new RO;q.nJ=p;o[0]=Ea(B(152),j,q);p=b.U.bk.bg.X;q=b.gS;BI(q);r=new RP;r.qL=q;o[1]=Ea(B(153),p,r);Ev(h,B(154),j,FH(n));j=b.U.bk.bg.X;n=R(C5,2);o=n.data;p=b.bp;BI(p);q=new Ns;q.q$=p;o[0]=Ea(B(155),j,q);p=b.U.bk.bg.X;q=b.bp;BI(q);r=new Nr;r.pU=q;o[1]=Ea(B(156),p,r);Ev(h,B(157),j,FH(n));j=b.U.bk.bg.X;l=new Ui;l.qA
=b;Ev(h,B(158),j,l);Ev(g,B(159),m,G7(h));k=b.U.bk.bg.X;m=O4();Ev(m,B(160),b.U.bk.bg.X,AC_(b));h=b.U.bk.bg.X;i=new Vb;i.r6=b;DY(m,B(161),h,i);Ev(g,B(162),k,G7(m));F3(e,f,G7(g),MN(c,d));}}return 1;}
function XL(){var a=this;Cq.call(a);a.kK=null;a.cU=null;a.f6=null;a.eN=null;a.gQ=null;a.ug=null;a.gD=null;a.qw=null;a.lx=null;a.uA=null;a.vE=null;a.fC=null;a.jg=null;a.pB=0;}
function AQv(a){var b=new XL();AJH(b,a);return b;}
function AJH(a,b){var c,d,e,f,g,h,i;D_(a,b);c=new BW;Dq();AAT(c,ATP);a.kK=c;a.cU=E5(0,0,300,300);a.f6=RH(0,0,3,3);a.eN=E5(0,0,300,300);a.gQ=AK0();d=R(Bv,4);e=d.data;e[0]=B(163);e[1]=B(164);e[2]=B(165);e[3]=B(166);a.ug=d;a.gD=R(H6,e.length);f=b.Y;c=b.o.bC;g=new SQ;g.eL=a;Ba(c,g);c=b.o.bZ;g=new QI;g.t6=a;Ba(c,g);c=b.o.lK;g=new QH;g.n4=a;Ba(c,g);c=b.o.f4;g=new QK;g.v6=a;Ba(c,g);c=b.o.iZ;g=new QJ;g.us=a;Ba(c,g);c=b.o.ez;g=new QG;g.vy=a;Ba(c,g);b=b.o.dF;c=new QF;c.st=a;Ba(b,c);h=CJ(a.bb.Y,300,300);c=h.bj;b="white";c.fillStyle
=b;b=h.bj;c="white";b.strokeStyle=c;b=h.bj;c=10.0;b.lineWidth=c;h.bj.strokeRect(75.0,140.0,150.0,110.0);h.bj.fillRect(130.0,190.0,40.0,60.0);h.bj.beginPath();h.bj.moveTo(50.0,140.0);h.bj.lineTo(150.0,60.0);h.bj.lineTo(250.0,140.0);h.bj.closePath();h.bj.stroke();FR(h,B(167),11.0);KL(h,187,187,187);OA(a,B(168),h);b=CR(a.bb.Y);CL(b,h);FE(h);a.qw=b;F$(a.cU,b);GL(a.cU);BF(a.cU.bW,ATP);BF(a.cU.bM,Cw(204,120,50));b=CJ(f,255,100);a.fC=b;FR(b,B(125),11.0);b=By();i=$rt_str(a.fC.bj.font);g=new M;O(g);G(G(g,B(169)),i);Bu(b,
N(g));Eg(a.fC,B(170));KL(a.fC,169,183,198);OA(a,B(170),a.fC);b=CR(f);a.lx=b;CL(b,a.fC);F$(a.eN,a.lx);GL(a.eN);F2(a.eN,CF(255));Hg(a.eN,ATP);a.uA=CR(f);BF(a.f6.bW,a.kK);}
function OA(a,b,c){Cf(c,b,0.0,20.0);Cf(c,b,0.25,40.0);Cf(c,b,0.5,60.0);Cf(c,b,0.75,80.0);}
function VR(a,b){I0(Fj(),0.5+Fj()*0.5,0.5+Fj()*0.5,1.0,b.bM);}
function ADM(a,b){var c;a.pB=a.pB+1|0;c=b/5.0;I0(c-(c|0),1.0,1.0,1.0,a.f6.bM);return RU(a.gQ,b);}
function AGM(a){var b,c,d,e,f,g;b=a.bb.Y;Fi(b,a.kK);c=a.gD.data;d=c.length;e=0;while(e<d){Ty(c[e],b,0,0);e=e+1|0;}Dx(a.cU,b,a.qw,0,0,0.5);f=a.lx;d=0;while(d<7){g=a.eN;Dx(g,b,f,Be(d,10+((10*g.x.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.vE;if(g!==null)Ta(a.f6,b,g,0,0,0.0);Ud(a.gQ,b,new Z);M8(b,B(171));}
function AM1(a,b,c){var d,e,f,g,h,i,j,k,l;d=By();e=Cu(b);f=new M;O(f);G(G(f,B(172)),e);Bu(d,N(f));g=By();d=new M;O(d);E$(G(d,B(173)),c);Bu(g,N(d));h=B9(30.0,c);i=B9(10.0,c);j=0;while(true){k=a.gD.data;if(j>=k.length)break;l=1+j|0;k[j]=RH(Be(i,l)+Be(h,j)|0,h,h,h);VR(a,a.gD.data[j]);j=l;}Y(a.f6.N,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.cU;g=d.N;h=b.b;d=d.x;Y(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.eN;d.N.a=b.a-d.x.a|0;}
function Oa(a,b){var c,d,e,f,g;c=By();d=!b.g4?B(174):B(175);e=b.dk;f=b.bm;g=b.qZ;b=new M;O(b);FU(G(S(G(G(G(b,d),e),B(176)),f),B(177)),g);Bu(c,N(b));return 0;}
function DU(){var a=this;Cq.call(a);a.fX=null;a.Q=null;}
function Hq(a,b){var c,d;D_(a,b);a.fX=Ov(0,0,64);a.Q=AEp(b);Ba(b.o.bZ,new Rk);b=b.o.bZ;c=a.Q;BI(c);d=new Rl;d.rn=c;Ba(b,d);}
function G5(a){Fi(a.bb.Y,a.fX);}
function KW(a,b,c){RZ(a.Q,b,c);}
var Ef=F(0);
function Vd(){var a=this;DU.call(a);a.qH=null;a.dd=null;a.cu=null;a.dJ=null;a.rq=null;}
function AOm(a,b,c){var d;d=Gz(a.Q,a.rq);HB(a.dd,d);HB(a.cu,d);GF(a.dd,a.Q);GF(a.cu,a.Q);}
function MV(b){return Iq(b,ANS());}
function Iq(b,c){var d;d=O4();JU(d,Kb(b,H0(c,25)),!b?null:Iq(b-1|0,c));JU(d,Kb(b,H0(c,20)),!b?null:Iq(b-1|0,c));JU(d,Kb(b,H0(c,15)),!b?null:Iq(b-1|0,c));JU(d,Kb(b,H0(c,10)),!b?null:Iq(b-1|0,c));return G7(d);}
function Kb(b,c){var d;if(b){d=new M;O(d);G(G(S(d,b),B(36)),c);c=N(d);}return c;}
function JU(b,c,d){var e,f;e=new G1;f=I0(Fj(),1.0,1.0,1.0,new BW);EH();Lh(e,f,AT$,AT_);if(d!==null)Ev(b,c,e,d);else{d=new Tm;d.sv=c;DY(b,c,e,d);}}
function AGh(a,b,c){var d,e;KW(a,b,c);b=a.Q.bL;d=D1(a.dd);e=D1(a.cu);Jk(a.dd,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);Jk(a.cu,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AG1(a){var b,c,d,e,f,g,h,i;G5(a);b=a.bb.Y;CI(b,1);c=a.qH;d=a.Q;e=d.bL;Y(c.lk,e.b,B9(2.0,d.bF));Y(c.jF,B9(2.0,d.bF),e.a);EH();f=AUa;g=d.cT;h=e.a/2|0;i=c.lk;BB(g,0,h-(i.a/2|0)|0,i,f);g=d.cT;h=e.b/2|0;c=c.jF;BB(g,h-(c.b/2|0)|0,0,c,f);I5(a.dd,a.Q);I5(a.cu,a.Q);HV(a.dJ);CI(b,0);}
function AMk(a,b){var c,d,e;c=JS(a.dJ,b);d=JH(a.dd,b.j,a.Q.cp);e=JH(a.cu,b.j,a.Q.cp);return !c&&!d&&!e?0:1;}
function AHV(a,b,c){return Jg(a.dJ,b,c);}
function AET(a,b,c){return DA(a.dJ);}
function ALD(a,b,c,d){var e,f,g;e=IP(a.dJ,b,c,d);f=Jz(a.dd,b.j,c,d);g=Jz(a.cu,b.j,c,d);return !e&&!f&&!g?0:1;}
function Wy(){var a=this;DU.call(a);a.e_=null;a.ea=null;a.iw=null;a.k3=null;}
function AO7(a,b,c){if(b===0.0)PJ(a);}
function AFw(a){var b;G5(a);b=a.bb.Y;Iy(a.ea,b);HV(a.e_);}
function PJ(a){var b,c,d,e,f,g,h,i,j;b=a.iw;if(b!==null){Jx(a.ea,b);Hk(b);}b=Fl();c=AR7(a.Q,new Mp);d=FL(a.bb.Y,B(124),25);e=ALH();f=0;while(f<300){g=CZ(f);h=new EV;Dq();i=ATQ;j=ATU;EH();F7(h,i,j,i,AUb,AT9);h=new SW;h.n1=B(178);h.n2=g;h.n0=B(179);Mq(e,B(178),g,B(179),h);f=f+1|0;}U2(c,PV(e));U0(c,d);c.jt=b;e=AAm(a.Q);K6(e,Yh(c,a.Q));e.dQ=b;H9(e,B(180),a.k3,2.0);a.iw=e;Il(a.ea,e);Qm(a);}
function AJ2(a,b,c){KW(a,b,c);O9(a.ea,b,c);Qm(a);}
function Qm(a){var b,c,d;b=a.Q.bL;CK(a.iw,B3((b.b*2|0)/10|0,(b.a*4|0)/10|0),B3((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.iw;b=Xb(c.p.n);d=new M;O(d);G(G(d,B(181)),b);H9(c,N(d),a.k3,2.0);}
function AOG(a,b){return Nx(a.ea,b);}
function W4(){var a=this;DU.call(a);a.hA=null;a.ff=null;a.eE=null;a.iQ=null;a.oa=null;a.hQ=null;a.fr=null;a.fb=null;a.iL=0;a.fD=0;}
function VK(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.ff.i>0){d=Fj();e=a.ff;f=d*(e.i-1|0)|0;e=Ed(e,f);Ed(a.eE,f);f=a.fD;g=e.x;a.fD=f-Be(g.b,g.a)|0;HO(a.hA,e.cM);}c=c+1|0;}}
function JQ(a,b){var c,d,e,f,g,h,i,j;c=H_(a.Q);Cv(c,a.iQ);d=0;while(d<b){e=H0(a.hQ,1+(Fj()*19.0|0)|0);f=AJU();g=f.cM;h=a.hA;BI(c);i=new Ql;i.on=c;BF(g,G0(h,e,i));(VX(Fj(),1.0,1.0,f.bW)).bv=0.5;h=f.N;g=f.cM;Y(h,g.bh|0,g.bu|0);h=f.x;g=f.cM;Y(h,g.be|0,g.bv|0);BX(a.eE,e);BX(a.ff,f);j=a.fD;h=f.x;a.fD=j+Be(h.b,h.a)|0;d=d+1|0;}a.fb=Wx(a.hA);}
function AMt(a){var b,c,d,e,f,g,h,i;G5(a);b=a.bb.Y;CI(b,1);c=a.Q.cT;if(a.eE.i){d=a.fb;d=CJ(c,d.b,d.a);Cv(d,a.iQ);e=a.iQ.db;BB(c,0,0,a.fb,a.oa);f=0;while(f<a.eE.i){g=Bs(a.ff,f);h=Bs(a.eE,f);g=g.cM;Cf(d,h,g.bh,g.bu+e);f=f+1|0;}g=a.fr;if(!(g!==null&&Cb(g)==a.fb.b&&C3(a.fr)==a.fb.a))a.fr=CX(a.fr,CR(c));CL(a.fr,d);FE(d);i=0;while(i<a.eE.i){d=Bs(a.ff,i);F2(d,CF(0));Dx(d,c,a.fr,0,0,0.0);i=i+1|0;}}CI(b,0);}
function AFV(a,b){var c,d;if(a.iL){c=a.fb;d=X(Be(c.b,c.a),2211840);if(a.fD/d<=0.7)JQ(a,HQ(a.hQ,5));else VK(a,HQ(a.hQ,5));}return a.iL;}
function Oq(){var a=this;Cq.call(a);a.dE=null;a.fy=null;a.gr=null;a.kk=null;a.dD=0;a.rb=0;a.ts=null;a.ll=0;a.tG=0;a.se=null;a.n5=null;}
function AD4(a){var b,c;b=a.dD;c=new M;O(c);S(G(c,B(182)),b);$rt_globals.console.info($rt_ustr(N(c)));Fi(a.dE,a.ts);H1(a.gr,a.dD,0,F0(a),5000,a.kk.b,20);CI(a.dE,1);Pb(a.gr,a.dE);CI(a.dE,0);b=a.dD;c=new M;O(c);S(G(c,B(182)),b);$rt_globals.console.info($rt_ustr(N(c)));WN(a.fy,a.dD/a.ll|0);Te(a.fy,a.dD,F0(a),a.n5,a.dE);}
function AN8(a,b,c){a.kk=b;Ux(a.fy,B3(0,0),50,F0(a),c);Jn(a.fy,a.dE,0,F0(a));}
function O3(a){return 5000-F0(a)|0;}
function F0(a){return X(a.rb,a.kk.a);}
function C7(){var a=this;Cq.call(a);a.k9=null;a.gc=null;a.ut=0.0;}
function AUc(a){var b=new C7();Gc(b,a);return b;}
function Gc(a,b){D_(a,b);a.k9=Ov(0,0,64);a.gc=new Z;MP(b.bV,HC(Cm(a)));}
function Rf(a){Fi(a.bb.Y,a.k9);}
function RM(a,b,c){C1(a.gc,b);a.ut=c;}
var PX=F(C7);
var ACG=F(C7);
function ART(a){var b=new ACG();ALc(b,a);return b;}
function ALc(a,b){var c,d,e,f,g,h;Gc(a,b);c=b.bV;d=new Qk;d.u4=a;e=R(C,1);e.data[0]=B(183);C0(c,d,B(184),e);f=b.bV;g=new Qj;g.wQ=a;h=R(C,1);h.data[0]=ZF([1,2,3,4,5]);C0(f,g,B(185),h);f=b.bV;g=new Qi;g.nZ=a;h=R(C,1);h.data[0]=ARa([1,2,3,4,5]);C0(f,g,B(186),h);f=b.bV;g=new Qh;g.uL=a;h=R(C,1);h.data[0]=EW([1,2,3,4,5]);C0(f,g,B(187),h);f=b.o.bZ;d=new Ju;g=new Qf;g.vT=a;c=new Qe;c.pr=a;Uz(d,b,g,c);Ba(f,d);}
function TA(a,b){var c,d,e,f,g,h;c=b.data;d=By();e=Cu(c[0]);f=new M;O(f);G(G(f,B(188)),e);Bu(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((QX(b,1)).gX));d=By();e=Cu(c[1]);if(b===null)f=B(29);else{f=new M;O(f);BY(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BY(f,B(44));S(f,c[g]);g=g+1|0;}BY(f,B(45));f=N(f);}h=new M;O(h);G(G(G(G(h,B(189)),e),B(190)),f);Bu(d,N(h));}
function VU(){var a=this;C7.call(a);a.ds=null;a.es=null;a.jV=null;a.oW=null;a.kZ=null;}
function AJa(a,b){b=b/5.0;I0(b-(b|0),1.0,1.0,1.0,a.es.bM);return 0;}
function ADG(a){Rf(a);Dx(a.ds,a.bb.Y,a.oW,0,0,0.5);Ta(a.es,a.bb.Y,a.jV,0,0,0.0);M8(a.bb.Y,B(171));}
function ALV(a,b,c){var d,e,f;RM(a,b,c);Y(a.es.N,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.ds;e=d.N;f=b.b;d=d.x;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Rh(){var a=this;C7.call(a);a.fV=null;a.qS=null;a.jv=null;a.hR=null;a.g_=null;}
function APv(a){var b,c,d,e,f,g;Rf(a);b=a.bb.Y;c=a.hR;Ub(b,c.b,c.a,a.g_);b=a.fV;c=a.qS;d=a.gc;e=a.bb.Y;f=0;while(true){g=0;while(true){Dx(b,e,c,g,f,0.5);g=g+Cb(c)|0;if(g>=d.b)break;}f=f+C3(c)|0;if(f>=d.a)break;}K0(a.bb.Y);}
function AFl(a,b,c){RM(a,b,c);Y(a.g_,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function NZ(){var a=this;Cq.call(a);a.dL=null;a.jn=null;a.eK=null;a.bU=null;a.d$=0;a.hk=null;a.d_=0;a.vz=20;a.w5=11;a.vf=220;a.iz=null;a.vX=5000;a.ge=0;a.e1=null;}
function APy(a){var b,c,d,e,f,g,h;b=a.hk;c=a.d_;d=a.iz;H1(b,c,0,d.a,5000,d.b,20);CI(a.dL,1);Pb(a.hk,a.dL);if(a.bU===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Cf(a.jn,CZ(e),0.0,c);}b=CR(a.dL);a.bU=b;CL(b,a.jn);}if(a.d_<=a.d$)while(true){f=a.d$;if(f<=a.d_)break;a.d$=f-20|0;b=a.eK;g=a.ge-1|0;a.ge=g;Cf(b,CZ(g),0.0,20.0);Hy(a.bU,a.eK,0,a.d$%220|0);En(a.eK);}else while(a.d$<(a.d_-20|0)){b=a.eK;g=a.ge+1|0;a.ge=g;Cf(b,CZ((g+11|0)-1|0),0.0,20.0);Hy(a.bU,a.eK,0,a.d$%220|0);En(a.eK);a.d$=a.d$+20|0;}b=E5(0,0,Cb(a.bU),C3(a.bU));Hj(b,
0,0,Cb(a.bU),C3(a.bU));F2(b,a.e1.data[0]);Hg(b,a.e1.data[1]);Dx(b,a.dL,a.bU,400,0,1.0);g=a.d_%220|0;f=X(C3(a.bU)-g|0,200);d=E5(0,0,Cb(a.bU),f);Hj(d,0,g,Cb(a.bU),f);F2(d,a.e1.data[0]);Hg(d,a.e1.data[1]);Dx(d,a.dL,a.bU,0,0,1.0);h=E5(0,f,Cb(a.bU),(C3(a.bU)-f|0)-20|0);Hj(h,0,0,Cb(a.bU),(C3(a.bU)-f|0)-20|0);F2(h,a.e1.data[1]);Hg(h,a.e1.data[0]);Dx(h,a.dL,a.bU,0,0,1.0);}
function AHq(a,b,c){C1(a.iz,b);}
function AF1(a,b){return 0;}
function QQ(a){return 5000-a.iz.a|0;}
function H2(){C7.call(this);this.de=0;}
function Qc(a){var b,c;b=a.bb.bV;c=new Pt;c.ml=a;PU(b,c,Qz(a));}
function LQ(a){var b,c,d,e;b=a.de+1|0;a.de=b;c=HC(E(H2));d=new M;O(d);G(G(S(G(d,B(191)),b),B(36)),c);e=N(d);c=a.bb.bV;d=new Td;d.o9=e;Tr(c,e,d,Qz(a));}
function Qz(a){var b;b=new UR;b.n8=a;return b;}
function AMV(a,b,c,d){a:{switch(c){case 0:break;case 2:LQ(a);break a;default:break a;}Qc(a);}return 1;}
function Pk(){var a=this;Cq.call(a);a.m5=null;a.eF=null;a.k0=null;a.hB=null;}
function APp(a){var b;b=a.bb.Y;Fi(b,a.m5);Dx(a.eF,b,a.k0,0,0,0.5);}
function AKb(a,b,c){var d,e,f;d=a.eF;e=d.N;f=b.b;d=d.x;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Vu(){var a=this;DU.call(a);a.fg=null;a.dG=null;a.iI=null;a.iJ=null;a.sd=null;}
function AIm(a,b,c){if(b===0.0)M1(a);}
function APQ(a){var b;G5(a);b=a.bb.Y;Iy(a.dG,b);HV(a.fg);}
function M1(a){VI(a,a.iI);VI(a,a.iJ);a.iI=Mj(a,0.5,0,B(192));a.iJ=Mj(a,1.0,1,B(193));Il(a.dG,a.iI);Il(a.dG,a.iJ);V9(a);}
function VI(a,b){if(b!==null){Jx(a.dG,b);Hk(b);}}
function Mj(a,b,c,d){var e,f,g;e=AAm(a.Q);f=new U5;g=new OI;g.sg=a;g.sh=e;g.sf=d;SN(f);f.ht=new BW;f.kM=new Z;f.ro=g;f.o6=b;if(c)f=Yh(f,a.Q);K6(e,f);e.dQ=Fl();return e;}
function AMc(a,b,c){KW(a,b,c);O9(a.dG,b,c);V9(a);}
function V9(a){var b;b=a.Q.bL;CK(a.iJ,B3((b.b*2|0)/10|0,(b.a*2|0)/10|0),B3((b.b*7|0)/10|0,(b.a*7|0)/10|0));CK(a.iI,B3(b.b/10|0,b.a/10|0),B3((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AI8(a,b){return Nx(a.dG,b);}
var Qg=F(JV);
function AIr(a){return ACR(1);}
function AFs(a,b){AAk(a,b);}
var Iv=F(0);
function LB(){var a=this;C.call(a);a.ik=null;a.hP=null;}
function LN(a,b){var c;c=a.hP;a.hP=b;return c;}
function IT(){var a=this;LB.call(a);a.bE=null;a.bR=null;a.e0=0;a.e$=0;}
function I9(a){var b;b=Kh(a);if(b==2){if(Kh(a.bR)<0)a.bR=Mt(a.bR);return NV(a);}if(b!=(-2))return a;if(Kh(a.bE)>0)a.bE=NV(a.bE);return Mt(a);}
function Kh(a){var b,c;b=a.bR;c=b===null?0:b.e0;b=a.bE;return c-(b===null?0:b.e0)|0;}
function Mt(a){var b;b=a.bE;a.bE=b.bR;b.bR=a;D$(a);D$(b);return b;}
function NV(a){var b;b=a.bR;a.bR=b.bE;b.bE=a;D$(a);D$(b);return b;}
function D$(a){var b,c,d;b=a.bR;c=b===null?0:b.e0;b=a.bE;d=b===null?0:b.e0;a.e0=V(c,d)+1|0;a.e$=1;b=a.bE;if(b!==null)a.e$=1+b.e$|0;b=a.bR;if(b!==null)a.e$=a.e$+b.e$|0;}
var ACm=F();
function AEK(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Ol;c=c.buffer;d.eZ=c;d.lE=new $rt_globals.Int8Array(c);d.jo=new $rt_globals.Uint16Array(c);d.rK=new $rt_globals.Int32Array(c);d.oI=new $rt_globals.Float32Array(c);d.oT=new $rt_globals.Float64Array(c);e=d.eZ.byteLength;c=new M;O(c);S(G(c,B(194)),e);CE(N(c));e=b.callToCpp1();c=new M;O(c);S(G(c,B(195)),e);CE(N(c));f=b.callToCpp2();c=new M;O(c);E$(G(c,B(196)),f);CE(N(c));c=Md(d,b.getC8String());g=new M;O(g);G(G(g,B(197)),c);CE(N(g));c
=Mm(d,b.getC16String());g=new M;O(g);G(G(g,B(198)),c);CE(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.eZ,h,8));c=AA7(i);g=new M;O(g);G(G(g,B(199)),c);CE(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.eZ,h,8));c=ANd(j);g=new M;O(g);G(G(g,B(200)),c);CE(N(g));k=Zo(d,b.getCDoubleArray8(),8);l=APS(k);c=new M;O(c);G(G(c,B(201)),l);CE(DI(c));l=APF(b.getC8String(),B(202),d);c=K8();G(G(c,B(203)),l);CE(DI(c));l=AJ0(b.getC16String(),B(204),
d);c=K8();G(G(c,B(205)),l);CE(DI(c));c=ALP(i,d,b.getCIntArray8(),EW([11,22,33,44,55,66,77,88]));g=K8();G(G(g,B(206)),c);CE(DI(g));c=ANs(j,d,b.getCFloatArray8(),100,EW([111,222,333,444,555,666,777,888]));g=K8();G(G(g,B(207)),c);CE(DI(g));b=ANJ(k,d,b.getCDoubleArray8(),1000,EW([1111,2222,3333,4444,5555,6666,7777,8888]));c=K8();G(G(c,B(208)),b);CE(DI(c));}
function ANs(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(209);h=0;i=e;a:{while(h<g){if(C$(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.oI[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(210);}return B(211);}
function ANJ(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(209);h=0;i=e;a:{while(h<g){if(GZ(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.oT[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(210);}return B(211);}
function ALP(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(209);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.rK[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(210);}return B(211);}
function APF(b,c,d){var e,f,g,h;e=Md(d,b);if(!Bn(c,e))return B(212);f=0;while(f<I(e)){g=L(e,f);h=b+f|0;if(g!=d.lE[h])return B(213);f=f+1|0;}return B(210);}
function AJ0(b,c,d){var e,f,g,h;e=Mm(d,b);if(!Bn(c,e))return B(212);f=0;while(f<I(e)){g=L(e,f);h=b+(f*2|0)|0;if(g!=(d.jo[h>>>1|0]&65535))return B(213);f=f+1|0;}return B(210);}
function CE(b){Oh(B(2),b);}
function AIV(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
var X4=F(0);
function Ov(b,c,d){return Hh(b,c,d,255,new BW);}
function W7(b,c,d,e){return Hh(b,c,d,e,new BW);}
function Hh(b,c,d,e,f){CD(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function VX(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=f%2.0-1.0;if(h<=0.0)h= -h;h=g*(1.0-h);i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bh=g+i;e.bu=h+i;e.be=j+i;return e;}
function I0(b,c,d,e,f){f=VX(b,c,d,f);f.bv=e;return f;}
function Gq(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function AC1(){var a=this;C.call(a);a.cT=null;a.ib=null;a.bL=null;a.cp=null;a.bF=0.0;a.ef=null;a.dw=null;a.jJ=null;a.nO=null;a.w7=null;a.w6=null;}
function AEp(a){var b=new AC1();AE0(b,a);return b;}
function AE0(a,b){var c,d;a.bL=new Z;a.dw=CG(R(Ef,0));a.jJ=new Z;a.nO=new Z;a.w7=new BW;a.w6=new BW;a.cT=b.Y;c=b.bV;a.ib=c;a.cp=TI(c);c=b.o.jH;d=new LS;d.m$=a;Ba(c,d);b=b.o.iZ;c=new LT;c.pS=a;Ba(b,c);}
function RZ(a,b,c){var d,e,f,g;a:{C1(a.bL,b);d=a.bF;if(d!==c){a.bF=c;e=(Cn(a.dw)).data;f=e.length;g=0;while(true){if(g>=f)break a;e[g].f5(d,c);g=g+1|0;}}}}
function Mf(a,b){var c;c=a.ef;return c!==null&&c.hJ(b)?1:0;}
function J_(a){var b;b=a.ef;if(b!==null)b.rN();}
function Jh(a){var b;b=a.ef;if(b!==null)b.t4();}
function WO(a,b){Jh(a);a.ef=b;J_(a);}
function H_(a){return a.cT.cq;}
function Gz(a,b){return FL(a.cT,b.h2,B9(b.hp,a.bF));}
function Ct(a,b){return B9(b,a.bF);}
function TX(){var a=this;C.call(a);a.d3=null;a.qK=null;a.dt=null;a.da=null;a.b1=null;a.bk=null;}
function AMw(a,b){return !Yd(a.dt,b)&&!JS(a.b1,b)?0:1;}
function AP0(a,b,c,d){return !Z0(a.dt,b,c,d)&&!IP(a.b1,b,c,d)?0:1;}
function API(a,b,c){return !Y$(a.dt,b,c)&&!Jg(a.b1,b,c)?0:1;}
function AK3(a,b,c){return !ACS(a.dt,b,c)&&!DA(a.b1)?0:1;}
function RC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=null;f=d.e;g=ALH();h=c.i;i=0;while(i<h){if(e===null){j=(Bs(c,i)).bs;k=QU(EB(B1(f.g,j)));l=UN(f.fB);}else{m=e.data;j=m[i].jD.kj;k=!Dh(f.fB,m[i].hG)?B(31):QU(EB(B1(f.g,j)));l=UN(m[i].hG);}if(I(k)>43){n=B8(k,0,40);m=new M;O(m);G(G(m,n),B(214));k=N(m);}if(I(l)>43){n=B8(l,0,40);m=new M;O(m);G(G(m,n),B(214));l=N(m);}m=CZ(j+1|0);if(e!==null){o=e.data;n=null;o=o[i];}else{o=null;n=Bs(c,i);}if(e!==null){p=new Tv;p.m2=d;p.m0=o;}else{p=new Tx;p.uf=d;p.ub=n;}Mq(g,
l,m,k,p);i=i+1|0;}q=PV(g);c=a.da;if(c!==null)Hk(c);a.da=AAm(a.d3);d=new PW;c=a.d3;m=new Ru;m.n6=a;Za(d,c,m);U0(d,Gz(a.d3,Fn(B(125),17.0)));U2(d,q);K6(a.da,Yh(d,a.d3));H9(a.da,B(215),a.qK,2.0);c=a.da;m=a.bk.bg;c.dQ=m;d.jt=m;Il(a.dt,c);c=a.da;Sn(d);Yw(d);h=d.cs.b;r=d.ee.bL.b;s=ER(h,(r*4|0)/10|0,((r*9|0)/10|0)-b.b|0);h=d.ee.bL.a;CK(c,b,B3(s,ER(((h*9|0)/10|0)-b.a|0,(h*4|0)/10|0,d.cs.a)));}
function MN(a,b){var c;c=new Us;c.ni=a;c.nh=b;return c;}
function AJA(a,b,c,d){return Ky(a.dt,b,c,d);}
function XK(b){var c;c=new WR;c.tg=b;return c;}
var JF=F(0);
function AFQ(a){}
function AP7(a){}
function Zp(){var a=this;C.call(a);a.dX=null;a.W=null;a.h1=null;a.qJ=0;a.lc=null;a.cv=null;a.z=0;a.y=0;a.gK=0;a.kv=0;a.fG=0;a.iu=null;a.en=null;a.co=null;a.Z=0;a.e=null;a.dW=null;a.r=null;a.fa=null;a.d2=null;a.lI=null;a.f7=null;a.s5=0;a.ri=0;a.rc=0;a.cC=0;a.jL=0;a.kQ=0;a.j6=null;a.eu=null;a.eq=null;a.bi=0;a.cf=0;a.gP=0;a.hC=0;a.hr=0;a.uX=0;a.up=0;a.iS=0;a.kp=0;a.ew=null;a.ck=null;a.cE=null;a.ho=0;a.hn=0;a.el=null;a.eW=0;a.hO=null;a.hE=null;a.uD=null;a.gw=null;a.kr=0;a.qG=null;a.gY=null;a.ep=Ee;a.fO=null;a.sx
=null;a.sZ=null;}
function AR2(a,b){var c=new Zp();AIk(c,a,b);return c;}
function AIk(a,b,c){var d,e,f,g;a.qJ=0;a.lc=R(Bi,10);a.cv=AK0();a.fG=16;a.iu=B(124);a.co=R(Ks,4);d=new H3;e=new Hr;e.dN=HF();e.d7=HF();e.eY=Cl();e.D=L9(B(31));e.fh=0;e.cj=0;e.cQ=Tb(e);d.g=e;d.it=B(164);d.fB=null;a.e=d;f=new U1;f.mS=CG(R(Ly,0));f.r4=CG(R(Ly,0));f.sl=CG(R(LW,0));f.n7=CG(R(Pl,0));f.l6=CG(R(H5,0));f.qM=CG(R(Qp,0));a.dW=f;a.r=ALs();e=new MJ;e.eh=R(IL,16);e.ei=0;e.cV=(-1);a.fa=e;a.f7=R(EK,0);a.rc=100;a.jL=1;a.j6=B3(1,0);a.eu=G6();a.eq=G6();a.bi=0;a.cf=0;a.gP=0;a.hr=1;a.iS=1;a.kp=3;a.ew=AJ_();a.ck
=new Z;a.cE=new Z;a.el=B(216);a.eW=0;a.hO=null;a.hE=Cl();e=KZ();BI(e);f=new TT;f.wT=e;a.gw=f;a.qG=new BW;a.gY=new Z;e=new TS;e.qv=a;a.sx=e;e=new TO;e.nl=a;a.sZ=e;a.dX=b;a.W=b.cT;a.h1=c;g=a.lc.data;b=new TN;b.sw=a;g[0]=b;b=new TQ;b.qT=a;g[1]=b;b=new TP;b.nH=a;g[2]=b;b=new Ug;b.sX=a;g[3]=b;ADJ();a.hC=AUd===AUe?0:1;}
function AGG(a){a.kv=1;KY(a);}
function AFm(a){a.kv=0;}
function KY(a){Rn(a.cv,IU(Cg(a)));}
function Kx(a,b,c){if(a.dX.bF!==0.0){S4(a,b,c);FT(Cg(a));}a.fG=c;a.iu=b;}
function S4(a,b,c){var d,e,f,g,h,i,j;d=B9(c,a.dX.bF);e=a.en;f=e!==null?e.oi:0;if(!(d==f&&Dh(b,a.iu))){g=a.ew;Jq(g.cn,new QE);G$(g.cn);g.eb=CX(g.eb,null);g.eS=CX(g.eS,null);h=a.f7.data;c=h.length;f=0;while(f<c){PA(h[f]);f=f+1|0;}h=a.e.g.D.data;c=h.length;f=0;while(f<c){D7(h[f]);f=f+1|0;}h=a.co.data;c=G2(0,0);e=a.W;i=d;h[c]=GB(e,b,i,400,0);a.co.data[G2(0,1)]=GB(a.W,b,i,400,2);a.co.data[G2(1,0)]=GB(a.W,b,i,700,0);a.co.data[G2(1,1)]=GB(a.W,b,i,700,2);e=a.co.data[G2(0,0)];a.en=e;c=Eo(e);a.Z=C$(c*1.25);a.cv.du.x.a
=Eo(a.en);a.lI=CX(a.lI,CJ(a.W,1024,a.Z));f=a.Z;j=RG(a.cv);e=new M;O(e);b=G(G(e,B(217)),b);BA(b,32);S(G(S(G(S(G(S(b,d),B(218)),c),B(134)),f),B(219)),j);$rt_globals.console.info($rt_ustr(N(e)));if(AUf){c=Kz(a.en,a.Z);b=new M;O(b);S(G(b,B(220)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.gK=GI(Fh(a),a.y,a.W.cq,a.co);GC(a);UO(a);}}
function T_(a){return Be(CA(a.e.g)+5|0,a.Z);}
function EL(a){return V(T_(a)-a.cE.a|0,0);}
function F_(a){return V(a.gP-DK(a)|0,0);}
function DK(a){return a.cE.b-a.cC|0;}
function Dz(a){return a.cE.a;}
function ACQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=H8(a.cE.a,a.Z)+7|0;c=a.f7;if(c.data.length<b)a.f7=Zb(b,c,a.s5,a.ri,a.e.g);CI(a.W,0);d=a.j6;d.a=a.cE.a;d.b=a.jL;e=a.W;f=a.ck;BB(e,(f.b+a.cC|0)-a.kQ|0,f.a,d,a.d2.r$);d=a.j6;b=a.kQ;g=a.jL;d.b=b-g|0;e=a.W;f=a.ck;BB(e,((f.b+a.cC|0)-b|0)+g|0,f.a,d,a.d2.iP);a.bi=X(a.bi,EL(a));a.cf=X(a.cf,F_(a));g=(a.Z-RG(a.cv)|0)/2|0;h=(a.gK-(Pu(a.cv)/2|0)|0)-a.cf|0;O2(a.cv,a.cC+h|0,(g+Be(a.z,a.Z)|0)-a.bi|0);i=CA(a.e.g);j=Kq(a);k=T8(a);a.s5=j;a.ri=k;l=j;while(l<=k&&l<i){m
=B1(a.e.g,l);n=P6(a,l);f=a.lI;o=a.co;p=a.W;q=a.Z;r=DK(a);s=a.cf;d=n.bO;b=d===m&&!d.hz?0:1;if(b){n.bO=m;KB(m,p.cq,o);}d=n.bO;g=d===null?0:EQ(d)<r?H8(EQ(n.bO),1024):H8(r,1024)+1|0;r=g<=n.di?0:1;if(r)n.di=g;if(!(!b&&!r)){if(AUg){c=m.e2;$rt_globals.console.info("fMeasure"+c.data);AUg=0;}AA8(f,AUf);ABc(n,f,p,o,q,s);n.bO.hz=0;}AAZ(n,f,o,q,s);t=n.bO;a.gP=V(a.gP,EQ(m)+(40.0*a.dX.bF|0)|0);r=Be(a.Z,l)-a.bi|0;d=a.ck;AA4(n,d.a+r|0,d.b+a.cC|0,a.W,a.qG,a.gY,!a.hC?0.0:0.5,DK(a),a.Z,a.cf,a.d2,AB3(a,l,t),a.hO,a.hE);l=l+1|0;}q
=j;while(q<=k&&q<i&&a.iS){d=P6(a,q);r=Be(a.Z,q)-a.bi|0;e=!YE(a.r,q)?a.d2.l3:a.d2.kW;f=a.W;p=a.ck;AAO(d,f,p.b+a.cC|0,p.a+r|0,a.Z,a.gY,a.cf,DK(a),e);q=q+1|0;}if(a.kv&&h>=(( -Pu(a.cv)|0)/2|0)){d=a.cv;e=a.cE;if(X9(d.du.N,0,0,e))Ud(a.cv,a.W,a.ck);}if(a.hr){s=X(k+1|0,i);AAn(a,Be(a.Z,s)-a.bi|0);}ZC(a,j,k);AAY(a);ABC(a);}
function AB3(a,b,c){var d,e,f,g;a:{d=a.r;e=DT(d);d=Fo(d);f=e.J;if(f<=b){g=BD(b,d.J);if(g<=0){d=B3(b<=f?e.V:0,g>=0?d.V:(-1));break a;}}d=null;}if(d!==null){if(d.a==(-1))d.a=c.O;d.b=GI(c,d.b,a.W.cq,a.co);d.a=GI(c,d.a,a.W.cq,a.co);}return d;}
function ZC(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cE.a;e=X(d,Be(CA(a.e.g),a.Z)-a.bi|0);f=a.ew;g=a.bi;h=a.z;i=a.W;j=a.d2.tT;Jn(f,i,b,d);WN(f,b);Te(f,g,e,j,i);if(e<d){k=f.fw;BB(i,k.b,k.a+e|0,B3(f.eG.b,d-e|0),j.g6);}if(b<=h&&h<=c){c=h/20|0;k=f.cn;k=Bs(k,c%k.i|0);l=f.fw;c=Be(f.cn.i,f.hW);b=k.d8.a;d=((k.ir.a-(g%c|0)|0)+c|0)%c|0;if((d+b|0)>c)d= -(g%C3(k.bS)|0)|0;b=h%k.dp|0;e=k.d5;d=d+Be(b,e)|0;if(d<( -e|0))d=d+c|0;Y(k.fY,k.d8.b,e);m=k.fm;b=h%k.dp|0;c=k.d5;CD(m,0.0,Be(b,c),k.d8.b,c);Is(k,i,d,l,j.o4,j.pa);}}
function Kq(a){return X(a.bi/a.Z|0,CA(a.e.g)-1|0);}
function T8(a){return X(((a.bi+Dz(a)|0)-1|0)/a.Z|0,CA(a.e.g)-1|0);}
function UO(a){SG(a.ew,a.co.data[0],a.Z,a.W);Jn(a.ew,a.W,Kq(a),Dz(a));}
function P6(a,b){var c;c=a.f7.data;return c[b%c.length|0];}
function AC0(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dj(a.r))DH(a,a.el);else{b=DT(a.r);c=Fo(a.r);d=c.J;e=b.J;f=(d-e|0)+1|0;g=BH(f);h=g.data;i=R(Bv,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.el;e=e+1|0;k=f;}l=EI(a.z,a.y);m=new U4;m.rP=a;OC(a,g,0,0,i,l,m);b.V=b.V+I(a.el)|0;c.V=c.V+I(a.el)|0;Lg(a,a.y+I(a.el)|0,0);DO(a);}return 1;}
function AAH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dj(a.r)){b=B1(a.e.g,a.z);if(b.q.data.length>0){c=QS(a,b);if(c===null)return 1;d=a.e.g;e=a.z;f=EI(e,a.y);d.cj=d.cj+1|0;g=d.eY;h=R(GK,1);h.data[0]=ADN(e,0,1,c,f.bs,f.bD);BX(g,h);I7(d,e,0,1,c);FI(b,0,I(c));Lg(a,a.y-I(c)|0,0);}}else{f=DT(a.r);c=Fo(a.r);i=c.J;j=f.J;i=(i-j|0)+1|0;k=BH(i);h=k.data;l=R(Bv,i);m=l.data;e=a.y;n=a.z;o=0;while(j<=c.J){b=B1(a.e.g,j);if(b.q.data.length>0){b=QS(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=ACO(k,o);h=Dd(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.J)f.V=V(0,f.V-I(b)|0);if(j==c.J){c.V=V(0,c.V-I(b)|0);Lg(a,a.y-I(b)|0,0);}i=i+1|0;}f=EI(n,e);b=new RK;b.tt=a;OC(a,p,0,1,h,f,b);}DO(a);return 1;}
function QS(a,b){var c,d,e,f;c=ER(0,I(a.el),Wj(b));if(!c)b=null;else{b=B(60);if(c<0){b=new BC;U(b);J(b);}if(c!=1){d=b.bQ.data.length;if(d&&c){e=BQ(Be(d,c));d=0;f=0;while(f<c){OV(b,0,I(b),e,d);d=d+I(b)|0;f=f+1|0;}b=Lz(e);}else b=ASV;}}return b;}
function OC(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BH(i);k=ASo(i).data;Ha(j,c);c=0;l=k.length;if(c>l){f=new BC;U(f);J(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.g;o.cj=o.cj+1|0;p=R(GK,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ADN(h[m],n[m],k[m],b[m],f.bs,f.bD);m=m+1|0;}BX(o.eY,p);c=0;while(c<i){b=e.data;I7(o,h[c],n[c],k[c],b[c]);g.lG(FP(h[c]),b[c]);c=c+1|0;}}
function ACe(a){var b,c,d,e,f,g,h,i;if(Dj(a.r))Gs(a);D7(B1(a.e.g,a.z));b=a.e.g;c=a.z;d=a.y;e=b.D;f=e.data;g=f[c];e=Dd(e,f.length+1|0);f=e.data;b.D=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DF(R(B5,0));b.D.data[c+1|0]=g;}else if(d==g.O){f[c]=g;f[c+1|0]=DF(R(B5,0));}else{f=(H$(g,d)).data;e=b.D.data;e[c]=f[0];e[c+1|0]=f[1];}Gl(b,c,d,0,B(221));DO(a);return Cz(a,a.z+1|0,0,0);}
function ABV(a){if(Dj(a.r))Gs(a);else Or(a.e.g,a.z,a.y);GC(a);DO(a);return 1;}
function Xo(a){var b,c,d;if(Dj(a.r)){Gs(a);return 1;}b=a.y;if(!b&&!a.z)return 1;if(b){c=a.z;b=b-1|0;Or(a.e.g,c,b);}else{c=a.z-1|0;b=E_(a.e.g,c);d=a.e.g;Kp(d,c);Gl(d,c,E_(d,c),1,B(221));}DO(a);return Cz(a,c,b,0);}
function DH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eW)return 0;if(Dj(a.r))Gs(a);c=Ld(Uh(b,B(222),B(31)),B(221),(-1));d=c.data;b=a.e.g;e=a.z;f=a.y;WX(b,e,f,c);g=d.length;if(!g)h=ASV;else{i=0;j=0;while(j<g){i=i+I(d[j])|0;j=j+1|0;}k=BQ(i+Be(g-1|0,I(B(221)))|0);c=k.data;l=0;h=d[0];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<I(B(221))){m=l+1|0;c[l]=L(B(221),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<I(h)){m=l+1|0;c[l]=L(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Lz(k);}Gl(b,e,f,0,h);e=a.z;m=(e+g|0)-1|
0;Cz(a,m,m!=e?I(d[g-1|0]):a.y+I(d[0])|0,0);EY(a);DO(a);return 1;}
function Gs(a){var b,c,d;b=DT(a.r);c=a.e.g;d=a.r;St(c,d,U$(c,d));Cz(a,b.J,b.V,0);EY(a);DO(a);}
function EY(a){var b;b=a.r;b.cJ=0;B0(b.bI,a.z,a.y);B0(a.r.bz,a.z,a.y);}
function Pr(a){return a.en.lo|0;}
function AAn(a,b){var c,d,e;c=a.cE.a;if(b<c){d=a.gY;d.a=c-b|0;d.b=DK(a);d=a.W;e=a.ck;BB(d,e.b+a.cC|0,e.a+b|0,a.gY,a.d2.iP);}}
function AAY(a){H1(a.eu,a.bi,a.ck.a,Dz(a),T_(a),a.ck.b+a.cE.b|0,Pr(a));LJ(a.eq,a.cf,a.ck.b+a.cC|0,DK(a),a.gP,a.ck.a+Dz(a)|0,Pr(a));}
function ABC(a){var b,c;b=O0(a.eu);c=O0(a.eq);if(!(!b&&!c)){CI(a.W,1);if(b)FM(a.eu,a.W);if(c)FM(a.eq,a.W);if(b)F5(a.eu,a.W);if(c)F5(a.eq,a.W);}}
function D3(a,b,c){return X(V(0,b),c);}
function Hm(a,b){var c,d,e,f,g;b=b.data;a.ho=1;a.hn=1;c=Em(b[0]);d=Fy(b[1]);e=(Em(b[2])).data[0];a.e.g=AAs(c,d);Vi(a,AB0(e));Gh(Cg(a),AUh);FT(Cg(a));f=JP(Fu(),a.ep);g=new M;O(g);G(Hu(G(g,B(223)),f),B(224));$rt_globals.console.info($rt_ustr(N(g)));}
function Vi(a,b){var c,d;c=Dg(a.e);if(!Dh(c,b)){d=new M;O(d);G(G(G(G(d,B(225)),c),B(226)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.it=b;}}
function Cg(a){return a.dX.ib;}
function QR(a,b){var c,d,e,f,g,h,i,j,k,l;c=Er(b);d=new M;O(d);G(G(d,B(227)),c);$rt_globals.console.info($rt_ustr(N(d)));MP(Cg(a),Er(b));Cz(a,0,0,0);a.ep=Fu();a.ho=0;a.hn=0;e=new H3;f=R(Bv,1);f.data[0]=B(31);g=null;h=new P_;i=Er(b);j=null;h.hm=B(31);h.kw=B(31);h.eJ=i;h.w4=j;PF(e,f,g,h);a.e=e;Cz(a,0,0,0);c=Er(b);k=FQ(c,46,I(c)-1|0);if(k!=(-1))c=Dc(c,k);l=!Bn(c,B(228))?5120:10240;c=new Wh;c.q4=a;c.q5=l;c.q6=b;j=b.eC;if(j!==null)Lq(c,I4(b,j.size));else{j=b.gh.getFile();d=new Sy;d.lL=b;d.lM=c;b=new SB;b.tp=c;j.then(Bk(d,
"f"),Bk(b,"f"));}}
function He(a,b,c,d,e){if(G8(a,e))return 1;if(c&&d)return 1;if(c)a.bi=D3(a,a.bi+((Be(b,a.Z)*12|0)/10|0)|0,EL(a));else if(!d){Ic(a,a.z+b|0,e);Sp(a);}return 1;}
function Tf(a,b,c,d){var e,f,g;if(G8(a,d))return 1;e=Fh(a);if(!c)f=a.y+b|0;else if(b>=0)f=GD(e,a.y);else{f=a.y;if(!f)f=(-1);else{c=HX(e,f);if(c>0&&e.c8.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.c8.data[c-1|0];}}if(f>e.O){if((a.z+1|0)<CA(a.e.g))Cz(a,a.z+1|0,0,d);}else if(f>=0)Dk(a,f,d);else{b=a.z;if(b>0){g=(B1(a.e.g,b-1|0)).O;Cz(a,a.z-1|0,g,d);}}OO(a);return 1;}
function G8(a,b){if(Dj(a.r)&&!b){EY(a);GC(a);return 1;}if(!(b&&Dj(a.r)))EY(a);return 0;}
function Cz(a,b,c,d){a.y=c;return Ic(a,b,d);}
function Ic(a,b,c){a.z=ER(0,b,CA(a.e.g)-1|0);return Dk(a,a.y,c);}
function Dk(a,b,c){a.y=ER(0,b,(Fh(a)).O);a.gK=a.dX.bF===0.0?0:GI(Fh(a),a.y,a.W.cq,a.co);KY(a);GC(a);if(c)a.r.cJ=1;J6(a.r,a.z,a.y);a.r.cJ=0;return 1;}
function Lg(a,b,c){var d;d=QD(a.r);Dk(a,b,c);a.r=d;}
function GC(a){Sp(a);OO(a);}
function Sp(a){var b,c,d,e,f;b=a.bi;c=b+Dz(a)|0;d=a.z;e=a.Z;d=Be(d,e);f=d+e|0;if(d<(b+e|0))a.bi=D3(a,d-e|0,EL(a));else if(f>(c-e|0))a.bi=D3(a,(f-Dz(a)|0)+a.Z|0,EL(a));}
function OO(a){var b,c,d,e,f;b=C$(a.dX.bF*30.0);c=a.cf;d=c+DK(a)|0;e=a.gK;f=e+b|0;if(e<(c+b|0))a.cf=D3(a,e-b|0,F_(a));else if(f>(d-b|0))a.cf=D3(a,(f-DK(a)|0)+b|0,F_(a));}
function Sx(a,b,c){var d,e,f,g,h,i,j,k,l;Ue(a);d=a.e.g;e=El(d.dN,c);if(e!==null)a.hO=Pq(d,e);if(e!==null)c=e;a:{f=El(d.d7,c);if(f!==null){c=BR(f);while(true){if(!B2(c))break a;g=BV(c);BX(a.hE,Pq(d,g));}}}h=b.bs;i=b.bD;b=a.dW;c=Dg(a.e);d=GH(a.e);j=(Cn(b.n7)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.s8(c,d)){c=b.wl;break b;}l=l+1|0;}c=null;}if(c!==null){d=a.e;b=new Sw;b.v3=a;b.v4=d;b.v1=h;b.v2=i;c.rz(d,h,i,b,a.gw);}}
function Hf(a,b){var c;Cz(a,b.bs,b.bD,0);c=GD(Fh(a),a.y);B0(a.r.bz,a.z,c);B0(a.r.bI,a.z,a.y);}
function EJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.ck;e=c-d.b|0;f=ER(0,((b.a-d.a|0)+a.bi|0)/a.Z|0,CA(a.e.g)-1|0);g=V(0,(e-a.cC|0)+a.cf|0);b=B1(a.e.g,f);d=a.W.cq;h=a.co;if(!(b.dP!==null&&!b.fo))KB(b,d,h);i=b.dP;e=b.q.data.length;if(!e)j=0;else if(g<=0)j=0;else{k=i.data;if(g>=k[e-1|0])j=b.O;else{l=S3(i,0,e,g);if(l<0)l=( -l|0)-1|0;if(l==b.q.data.length)j=b.O;else{i=VO(b,d,h,l);j=0;c=0;while(c<l){j=j+I(b.q.data[c].v)|0;c=c+1|0;}c=!l?0:k[l-1|0];e=k[l];l=0;a:{while(true){h=i.data;if(l>=h.length){m=e;break a;}m
=h[l];if(g<m)break;j=j+1|0;l=l+1|0;e=m;c=m;}}if(AUi){b=new M;O(b);S(G(S(G(S(G(b,B(229)),c),B(230)),g),B(231)),m);$rt_globals.console.info($rt_ustr(N(b)));n=j;$rt_globals.console.info(" pos = "+n);}if((g-c|0)>(m-g|0))j=j+1|0;}}}return EI(f,j);}
function Sm(a,b){var c;c=b.bs;a.z=c;a.y=b.bD;a.gK=GI(B1(a.e.g,c),a.y,a.W.cq,a.co);KY(a);}
function Fh(a){return B1(a.e.g,a.z);}
function AMe(a,b,c){a.r.cJ=0;if(a.fO!==null)a.fO=null;return 1;}
function AOk(a,b,c){var d,e,f;if(!c){d=E6(a.eu,b.j,a.sx,1);a.fO=d;if(d!==null)return 1;d=E6(a.eq,b.j,a.sZ,0);a.fO=d;if(d!==null)return 1;Im(a);e=EJ(a,b.j);f=Jv(a.e.g,e.bs,e.bD);Sm(a,e);Sx(a,e,f);if(!b.bx){b=a.r;if(!b.cJ)B0(b.bI,a.z,a.y);}b=a.r;b.cJ=1;J6(b,a.z,a.y);b=new MI;b.r9=a;a.fO=b;}return 1;}
function AHO(a,b,c,d){var e,f,g,h,i;a:{if(!c){switch(d){case 1:e=b.j;f=EJ(a,e);g=Jv(a.e.g,f.bs,f.bD);if(b.cg){b=Kd(a.dW,Dg(a.e),GH(a.e));if(b!==null){g=a.e;c=f.bs;d=f.bD;f=new T7;f.uU=a;f.uT=e;b.rz(g,c,d,f,a.gw);}else{b=El(a.e.g.dN,g);if(b!==null){Hf(a,b);c=1;}else{b=El(a.e.g.d7,g);if(b!==null&&!D4(b)){if(b.i!=1){RC(a.h1,e,b,a);c=1;}else{Hf(a,Bs(b,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EJ(a,b.j)).bs;e=B1(a.e.g,c);c=GG(e,a.y);d=GD(e,a.y);b=T0(e,c);if((d-1|0)==e.O){B0(a.r.bI,a.z,Wj(e));B0(a.r.bz,a.z,e.O);}
else{if(b!==null){b=b.v;h=0;c:{while(true){i=b.bQ.data;if(h>=i.length)break;if(i[h]!=32){h=0;break c;}h=h+1|0;}h=1;}if(h){h=a.y;if(c==h){c=GG(e,c-1|0);d=GD(e,c);}else{if(d!=h){Pi(a.r,a.z);break b;}c=GG(e,d+1|0);d=GD(e,c);}}}B0(a.r.bI,a.z,c);a.r.cJ=1;Cz(a,a.z,d,0);a.r.cJ=0;}}Im(a);break a;case 3:break;default:break a;}Pi(a.r,a.z);Wr(a.fa);Im(a);}}return 1;}
function AGb(a,b){var c,d,e,f,g,h,i,j;c=a.fO;if(c!==null){c.l(b);return 1;}c=a.dX.cp;if(Fe(a.eu,b.j,c))return 1;if(Fe(a.eq,b.j,c))return 1;d=a.ew;if(Hb(b.j,d.fw,d.eG)&&GY(c)?1:0)return 1;a:{d=b.j;e=a.ck;f=e.b+a.cC|0;g=e.a;h=DK(a);i=Dz(a);j=d.b;if(f<=j&&j<(f+h|0)){f=d.a;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GY(c);if(b.cg){d=EJ(a,b.j);WB(a.e.g,d);b=a.e.g;if(!M5(b.dN,d)&&!M5(b.d7,d)?0:1)return Dv(c,B(163));}return Dv(c,B(164));}
function ALe(a,b){var c,d,e,f;c=b.cg;if(c&&b.bm==65){c=CA(a.e.g)-1|0;d=E_(a.e.g,c);B0(a.r.bI,0,0);B0(a.r.bz,CA(a.e.g)-1|0,d);return 1;}if(c&&b.bm==80){Jt(a);return 1;}if(!a.eW&&c&&b.bm==90){if(Dj(a.r))EY(a);b=a.e.g;b.cj=b.cj+1|0;e=b.eY;d=e.i;if(!d)e=null;else{f=(Ed(e,d-1|0)).data;e=Sl(b,f[0]);c=1;while(c<f.length){Sl(b,f[c]);c=c+1|0;}}if(e!==null){Cz(a,e.b,e.a,0);DO(a);}return 1;}if(!c&&!b.c1){if(Bn(b.dk,B(232))){DH(a,B(233));Dk(a,a.y-1|0,0);c=1;}else if(Bn(b.dk,B(234))){DH(a,B(235));Dk(a,a.y-1|0,0);c=1;}else if
(Bn(b.dk,B(43))){DH(a,B(236));Dk(a,a.y-1|0,0);c=1;}else if(Bn(b.dk,B(237))){DH(a,B(238));Dk(a,a.y-1|0,0);c=1;}else if(Bn(b.dk,B(239))){DH(a,B(240));Dk(a,a.y-1|0,0);c=1;}else if(!Bn(b.dk,B(241)))c=0;else{DH(a,B(242));Dk(a,a.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c1&&!b.cg)){d=b.bm;if(d>=48&&d<=57){c=d-48|0;e=a.lc.data[c];if(e!==null)e.s();c=1;break a;}}c=0;}if(c)return 1;d=b.bm;if(112<=d&&d<=123)c=1;else b:{switch(d){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(ZD(a,b))return 1;if(a.eW)c=0;else c:{switch(b.bm){case 8:break;case 9:c=!b.bx?AC0(a):AAH(a);break c;case 13:c=ACe(a);break c;case 46:c=ABV(a);break c;default:c=0;break c;}c=Xo(a);}if(c)return 1;if(b.cg&&b.bm==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(b.bm==27)return 0;return I(b.dk)>0&&DH(a,b.dk)?1:0;}
function VM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bn(B(136),Dg(a.e))){b=Cg(a);c=new Mv;c.ps=a;d=R(C,3);e=d.data;e[0]=F9(a.e.g);f=Kq(a);g=T8(a);h=V(0,f-100|0);f=X(CA(a.e.g)-1|0,g+100|0);i=BH(3);j=i.data;j[0]=FZ(a.e.g,h);k=a.e.g;l=0;f=X(f+1|0,k.D.data.length);m=0;while(m<f){l=l+E_(k,m)|0;if(m!=(k.D.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.g.cQ;k=Cl();Vw(n,n.cz,k);i=BH(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bs(k,m);h=p+1|0;o[p]=q.bG;l=h+1|0;o[h]=q.bK;p=l+1|0;o[l]=q.eQ;m=m+1|0;}e[2]
=i;C0(b,c,B(243),d);}}
function Jt(a){var b,c,d,e;b=Z9(Dg(a.e));if(b!==null){a.ep=Fu();c=Cg(a);d=new V2;d.pD=a;e=R(C,1);e.data[0]=F9(a.e.g);C0(c,d,b,e);}}
function RJ(a){var b,c,d,e,f,g,h;b=a.e.g.cQ;c=Ot(b,b.cz);if(c===null)return;if(Bn(B(164),Dg(a.e)))OD(a.e.g);a:{d=EW([CU(c),C4(c),c.b0.eQ]);e=F9(a.e.g);f=BH(1);g=Dg(a.e);h=(-1);switch(KE(g)){case 3401:if(!Bn(g,B(244)))break a;h=3;break a;case 98723:if(!Bn(g,B(245)))break a;h=2;break a;case 3254818:if(!Bn(g,B(136)))break a;h=1;break a;case 3556653:if(!Bn(g,B(164)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Cg(a);c=new SK;c.o3=a;C0(b,c,B(246),H(C,[e,f,d]));}
function Ku(a,b,c){var d,e,f,g,h,i;if(c&&a.eW)return 0;d=DT(a.r);e=d.J;if(Dj(a.r)){f=a.e.g;g=a.r;h=U$(f,g);if(c)St(f,g,h);if(c){Cz(a,d.J,d.V,0);EY(a);DO(a);}}else{h=E3(EB(a.e.g.D.data[e]),B(221));i=X(CA(a.e.g)-1|0,e);B0(a.r.bz,i,0);if(e>=(CA(a.e.g)-1|0))B0(a.r.bz,i,E_(a.e.g,i));else B0(a.r.bI,i+1|0,0);if(c)Gs(a);else Cz(a,e,0,0);}b.l(h);return 1;}
function ZD(a,b){var c,d,e,f;a:{switch(b.bm){case 33:c=b.cg?Ic(a,H8(a.bi,a.Z),b.bx):He(a,2-Vk(Dz(a),a.Z)|0,0,b.c1,b.bx);break a;case 34:c=!b.cg?He(a,Vk(Dz(a),a.Z)-2|0,0,b.c1,b.bx):Ic(a,((a.bi+Dz(a)|0)/a.Z|0)-1|0,b.bx);break a;case 35:if(!G8(a,b.bx)&&!Dk(a,(Fh(a)).O,b.bx)){c=0;break a;}c=1;break a;case 36:if(!G8(a,b.bx)&&!Dk(a,0,b.bx)){c=0;break a;}c=1;break a;case 37:c=b.cg;if(c&&b.c1){Im(a);d=a.fa;e=d.cV;if(e<=0)d=null;else{f=d.eh.data;c=e-1|0;d.cV=c;d=f[c];}if(d===null)c=0;else{Cz(a,Iu(d),K4(d),0);a.r=QD(d.ls);c
=1;}break a;}c=Tf(a,(-1),c,b.bx);break a;case 38:c=He(a,(-1),b.cg,b.c1,b.bx);break a;case 39:c=b.cg;if(c&&b.c1){d=a.fa;c=d.cV;if(c==(d.ei-1|0))d=null;else{f=d.eh.data;c=c+1|0;d.cV=c;d=f[c];}if(d===null)c=0;else{Cz(a,Iu(d),K4(d),0);a.r=QD(d.ls);c=1;}break a;}c=Tf(a,1,c,b.bx);break a;case 40:c=He(a,1,b.cg,b.c1,b.bx);break a;default:}c=0;}if(c&&b.bx)B0(a.r.bz,a.z,a.y);if(c)Sx(a,EI(a.z,a.y),Jv(a.e.g,a.z,a.y));return c;}
function Im(a){var b,c,d,e,f,g,h;b=a.fa;c=b.cV;b=c<0?null:b.eh.data[c];if(b!==null&&a.z==Iu(b)&&a.y==K4(b))return;d=a.fa;b=new IL;c=a.z;e=a.y;f=a.r;b.kL=EI(c,e);g=QD(f);b.ls=g;g.cJ=0;e=d.cV;h=d.ei;if(e==(h-1|0))L$(d,b);else{c=e+1|0;while(c<h){Wr(d);c=c+1|0;}L$(d,b);}d.cV=d.cV+1|0;}
function DO(a){a.e.g.oR=IU(Cg(a));}
function Ue(a){a.hO=null;G$(a.hE);}
function Z9(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(KE(b)){case 3401:if(!Bn(b,B(244)))break a;c=2;break a;case 98723:if(!Bn(b,B(245)))break a;c=1;break a;case 3254818:if(!Bn(b,B(136)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(247);break b;case 2:b=B(248);break b;default:b=null;break b;}b=B(249);}}return b;}
var Q4=F();
function AKo(a,b){return ACE(b);}
function Q8(){C.call(this);this.tl=null;}
function AHN(a,b){return ACN(a.tl,b);}
function Ju(){var a=this;C.call(a);a.js=null;a.ob=null;a.lR=null;}
function AUj(a,b,c){var d=new Ju();Uz(d,a,b,c);return d;}
function Uz(a,b,c,d){a.js=b.bV;a.ob=c;a.lR=d;}
function AM8(a,b){var c,d;if(b.cg&&b.bm==79){c=a.ob;if(c!==null&&b.bx)U8(a.js,c);else K$(a.js,a.lR);d=1;}else d=0;return d;}
function Q7(){C.call(this);this.lP=null;}
function AEh(a,b){QR(a.lP,b);}
function Q6(){C.call(this);this.oQ=null;}
function AP2(a,b){return Mf(a.oQ,b);}
function Q5(){C.call(this);this.t5=null;}
function ALI(a,b,c){return Ku(a.t5,b,c);}
function Q_(){C.call(this);this.mP=null;}
function APA(a){var b,c;b=a.mP.cD;BI(b);c=new MT;c.tY=b;return c;}
function Q$(){C.call(this);this.rR=null;}
function AJy(a,b,c,d){var e,f;b=a.rR.cD;e=C$((b.Z*4|0)*d/150.0);f=C$(c);b.bi=D3(b,b.bi+e|0,EL(b));b.cf=D3(b,b.cf+f|0,F_(b));return 1;}
function Q9(){C.call(this);this.sK=null;}
function AMI(a,b){b=b;return X1(a.sK,b);}
function BW(){var a=this;C.call(a);a.bh=0.0;a.bu=0.0;a.be=0.0;a.bv=0.0;}
function AR_(a){var b=new BW();AAT(b,a);return b;}
function CD(a,b,c,d,e){a.bh=b;a.bu=c;a.be=d;a.bv=e;}
function AAT(a,b){a.bh=b.bh;a.bu=b.bu;a.be=b.be;a.bv=b.bv;}
function BF(a,b){a.bh=b.bh;a.bu=b.bu;a.be=b.be;a.bv=b.bv;return a;}
function APD(a,b){var c;if(a===b)return 1;a:{if(b!==null&&Cm(a)===Cm(b)){b=b;if(b.bh===a.bh&&b.bu===a.bu&&b.be===a.be&&b.bv===a.bv?1:0){c=1;break a;}}c=0;}return c;}
var Cy=F(0);
var ATT=null;var AT1=null;var ATP=null;var ATQ=null;var ATU=null;var ATV=null;var ATW=null;var AT0=null;var AT7=null;var AT2=null;var AT3=null;var ATX=null;var AT4=null;var ATY=null;var AT5=null;function Dq(){Dq=Bq(Cy);ALk();}
function ALk(){ATT=CF(187);AT1=CF(0);ATP=CF(43);ATQ=Br(B(250));ATU=CF(85);ATV=Cw(60,63,65);ATW=Cw(33,66,131);AT0=Cw(255,255,255);AT7=Cw(0,0,0);AT2=Cw(212,212,212);AT3=Cw(166,214,255);ATX=Br(B(251));AT4=Br(B(252));ATY=Br(B(253));AT5=Br(B(252));}
function H6(){var a=this;C.call(a);a.N=null;a.x=null;a.bM=null;a.bW=null;}
function AJp(){var a=new H6();Rc(a);return a;}
function RH(a,b,c,d){var e=new H6();AGv(e,a,b,c,d);return e;}
function Rc(a){a.N=new Z;a.x=new Z;a.bM=new BW;a.bW=new BW;}
function AGv(a,b,c,d,e){a.N=new Z;a.x=new Z;a.bM=new BW;a.bW=new BW;O$(a,b,c,d,e);}
function O$(a,b,c,d,e){Y(a.N,b,c);Y(a.x,d,e);}
function Lk(a){var b;b=a.x;return Be(b.b,b.a)?0:1;}
function Ei(a,b){return Hb(b,a.N,a.x);}
function Ty(a,b,c,d){var e;e=a.N;BB(b,e.b+c|0,e.a+d|0,a.x,a.bM);}
function Ta(a,b,c,d,e,f){var g,h,i,j;g=a.N;d=g.b+d|0;e=g.a+e|0;g=a.x;h=a.bW;i=a.bM;Kw(b,b.g3);Lu(b.g3,b.by,d,e,g,b.dn);To(b.g3,b.by,c);g=b.g3;j=b.by;HN(j,g.tM,h);HN(j,g.tK,i);c=g.pl;j.uniform2f(c,f,0.0);Kk(b);}
function ABP(){H6.call(this);this.cM=null;}
function AJU(){var a=new ABP();AEF(a);return a;}
function E5(a,b,c,d){var e=new ABP();AJT(e,a,b,c,d);return e;}
function AEF(a){Rc(a);a.cM=new BW;}
function AJT(a,b,c,d,e){Rc(a);a.cM=new BW;O$(a,b,c,d,e);}
function GL(a){var b,c;b=a.x;c=a.cM;Y(b,c.be-c.bh|0,c.bv-c.bu|0);}
function F$(a,b){Hj(a,0,0,Cb(b),C3(b));}
function Hj(a,b,c,d,e){CD(a.cM,b,c,d,e);}
function Dx(a,b,c,d,e,f){var g;g=a.N;Ez(b,g.b+d|0,g.a+e|0,a.x,a.cM,c,a.bM,a.bW,f);}
function F2(a,b){BF(a.bM,b);}
function Hg(a,b){BF(a.bW,b);}
function ZK(){var a=this;C.call(a);a.du=null;a.kG=0.0;a.gt=0.0;a.f9=0;}
function AK0(){var a=new ZK();APk(a);return a;}
function APk(a){var b;b=RH(0,0,2,20);a.du=b;a.kG=0.5;a.gt=0.0;Hh(187,187,187,255,b.bM);}
function RG(a){return a.du.x.a;}
function Pu(a){return a.du.x.b;}
function RU(a,b){var c,d;a:{c=a.f9;if(b>a.gt)while(true){d=a.gt+a.kG;a.gt=d;a.f9=a.f9?0:1;if(b>d)continue;else break a;}}return a.f9==c?0:1;}
function O2(a,b,c){Y(a.du.N,b,c);}
function Rn(a,b){a.gt=b+a.kG*1.25;a.f9=1;}
function Ud(a,b,c){if(a.f9)Ty(a.du,b,c.b,c.a);}
function SQ(){C.call(this);this.eL=null;}
function AL7(a,b){var c,d,e,f,g,h,i;c=a.eL;d=c.jg;if(d!==null){e=c.cU.N;f=e.b;g=b.j;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.jg=g;}d=b.j;f=d.b;c=c.f6;e=c.x;h=f-e.b|0;f=d.a-e.a|0;Y(c.N,h,f);c=a.eL;d=c.bb.bV;b=b.j;f=0;a:{while(true){i=c.gD.data;if(f>=i.length)break;if(Ei(i[f],b)){b=c.ug.data[f];break a;}f=f+1|0;}b=null;}Gh(d,b);return 1;}
function ANy(a,b,c,d){if(!c&&d==2){b=a.eL;VR(b,b.cU);}return 1;}
function AJ4(a,b,c){var d,e;d=By();e=new M;O(e);S(G(e,B(254)),c);Bu(d,N(e));if(!c){d=b.j;b=a.eL;b.jg=!Ei(b.cU,d)?null:d;O2(a.eL.gQ,d.b,d.a);b=a.eL;Rn(b.gQ,IU(b.bb.bV));}return 1;}
function AGm(a,b,c){var d;b=By();d=new M;O(d);S(G(d,B(255)),c);Bu(b,N(d));return 1;}
function QI(){C.call(this);this.t6=null;}
function AL1(a,b){return Oa(a.t6,b);}
function QH(){C.call(this);this.n4=null;}
function AOt(a,b){return Oa(a.n4,b);}
function QK(){C.call(this);this.v6=null;}
function AOW(a,b,c){var d,e;Bu(By(),B(256));d=!c?B(257):B(28);e=new M;O(e);G(G(G(e,B(258)),d),B(259));Vj(b,N(e));return 1;}
function QJ(){C.call(this);this.us=null;}
function AOV(a){Bu(By(),B(260));}
function QG(){C.call(this);this.vy=null;}
function AKu(a,b){Bu(By(),B(261));return 1;}
function QF(){C.call(this);this.st=null;}
function AH$(a,b,c,d){var e,f,g;b=a.st;e=( -d|0)/10|0;b=b.cU;f=b.x;f.b=f.b+e|0;f.a=f.a+e|0;b=b.N;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function Ii(){var a=this;BW.call(a);a.fR=0;a.fU=0;a.fS=0;a.fT=0;}
function CF(a){var b=new Ii();APt(b,a);return b;}
function Cw(a,b,c){var d=new Ii();AGe(d,a,b,c);return d;}
function Br(a){var b=new Ii();ANv(b,a);return b;}
function AUk(a,b,c,d){var e=new Ii();PI(e,a,b,c,d);return e;}
function CT(a){var b=new Ii();NU(b,a);return b;}
function APt(a,b){PI(a,b,b,b,255);}
function AGe(a,b,c,d){PI(a,b,c,d,255);}
function ANv(a,b){if(!(I(b)!=4&&I(b)!=7&&I(b)!=9)&&L(b,0)==35){if(I(b)==4){a.fR=In(L(b,1))*17|0;a.fU=In(L(b,2))*17|0;a.fS=In(L(b,3))*17|0;a.fT=255;}else{a.fR=KS(L(b,1),L(b,2));a.fU=KS(L(b,3),L(b,4));a.fS=KS(L(b,5),L(b,6));a.fT=I(b)!=9?255:KS(L(b,7),L(b,8));}Hh(a.fR,a.fU,a.fS,a.fT,a);return;}}
function PI(a,b,c,d,e){a.fR=b;a.fU=c;a.fS=d;a.fT=e;Hh(b,c,d,e,a);}
function NU(a,b){a.fR=b.fR;a.fU=b.fU;a.fS=b.fS;a.fT=b.fT;BF(a,b);}
function In(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function KS(b,c){return (16*In(b)|0)+In(c)|0;}
function T5(){var a=this;C.call(a);a.lk=null;a.jF=null;}
function Yx(){var a=this;C.call(a);a.eP=null;a.b6=null;a.dS=null;a.fW=null;a.kT=null;a.bY=null;a.fi=null;a.cy=0;a.eo=0;a.la=0;a.fs=0;a.fk=0;a.iR=null;a.jf=null;a.si=null;}
function XY(){var a=new Yx();AOX(a);return a;}
function AOX(a){a.b6=AJp();a.dS=new Z;a.fW=new Z;a.bY=AUl;a.fs=(-1);}
function Kf(a,b){SH(a);a.bY=b;}
function HB(a,b){a.eP=b;SH(a);}
function HJ(a,b){var c,d,e,f,g;a.kT=b.iH;c=b.X.fl;BF(a.b6.bM,c);c=b.lb;BF(a.b6.bW,c);d=0;while(true){e=a.bY.data;if(d>=e.length)break;f=e[d];c=b.X;f.iW=c;f=f.c6;g=c.i0;c=c.fl;BF(f.bM,g);BF(f.bW,c);if(a.fs==d)IX(a.bY.data[d],1);d=d+1|0;}}
function Ss(a){a.fi=CX(a.fi,null);Y(a.dS,0,0);a.bY=AUl;a.fs=(-1);Y(a.b6.x,0,0);}
function GF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=H_(b);d=b.bF;BI(a.eP);Cv(c,a.eP);e=Jr(a.eP,1.25);f=0;a.cy=B9(2.0,d);a.eo=B9(3.0,d);a.la=B9(12.0,d);g=0;h=a.bY.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=PT(c,l.jY);n=a.la;n=(n+m|0)+n|0;f=V(f,n);b=l.c6;l=b.N;l.b=g;l.a=0;l=b.x;l.b=n;l.a=e;CD(b.cM,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.dS;b.b=g;b.a=e;b=a.b6.x;n=a.fk;if(!n){m=a.cy;m=(g+m|0)+Be(m,a.bY.data.length)|0;}else m=(f+(a.cy*2|0)|0)+(a.eo*2|0)|0;b.b=m;if(!n)e=e+(a.cy*2|0)|0;else{n=a.cy;e=(Be(e+n|0,a.bY.data.length)
+n|0)+(a.eo*2|0)|0;}b.a=e;}
function Jk(a,b,c){var d,e,f,g,h,i,j;Y(a.b6.N,b,c);d=a.cy+a.eo|0;e=a.bY.data;f=e.length;g=0;h=d;while(g<f){i=e[g].c6;j=i.N;j.b=b+d|0;j.a=c+h|0;if(!a.fk){if(!i.x.b)ACZ();d=d+(i.x.b+a.cy|0)|0;}else{if(!i.x.a)ACZ();h=h+(i.x.a+a.cy|0)|0;}g=g+1|0;}}
function ACZ(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function D1(a){var b,c;b=a.dS;if(b.b&&b.a)return a.b6.x;c=new Bm;Bl(c,B(262));J(c);}
function SH(a){Y(a.dS,0,0);}
function I5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cT;if(!a.bY.data.length)return;a:{if(a.fi!==null){d=a.dS;if(Be(d.b,d.a))break a;}d=a.dS;if(!Be(d.b,d.a))GF(a,b);d=a.dS;e=d.b;f=d.a;if(!Be(e,f))return;d=CJ(c,e,f);Cv(d,a.eP);g=Jr(a.eP,0.125);h=a.eP;i=h.db;j=g+i-(i+h.dT)/16.0;k=a.bY.data;f=k.length;l=0;while(l<f){h=k[l];Cf(d,h.jY,h.c6.cM.bh+a.la,j);l=l+1|0;}h=CX(a.fi,CR(c));a.fi=h;CL(h,d);FE(d);}if(!Lk(a.b6)){d=a.b6;ABY(c,d.x,d.N,d.bW,a.cy,a.fW);d=a.b6;h=d.x;m=d.N;d=d.bM;e=a.cy;n=a.fW;n.b=(h.b-e|0)-e|0;n.a=(h.a
-e|0)-e|0;BB(c,m.b+e|0,m.a+e|0,n,d);if(a.fk){d=a.b6;ABf(c,d.x,d.N,0,0,Qa(a.kT,b.bF),a.kT.lD,a.fW);}}k=a.bY.data;l=k.length;o=0;while(o<l){Dx(k[o].c6,c,a.fi,0,0,0.0);o=o+1|0;}b:{if(a.fk){k=a.bY.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].c6;m=a.fW;e=(a.b6.x.b-(a.cy*2|0)|0)-(a.eo*2|0)|0;b=h.x;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.N;BB(c,d.b+b.b|0,d.a,m,h.bW);}o=o+1|0;}}}}
function JH(a,b,c){var d,e,f,g,h,i;d=Ei(a.b6,b);e=!d?(-1):T$(a,b);f=a.fs;if(f!=e){if(f>=0){g=a.bY.data[f];IX(g,0);if(a.si!==null){f=a.fs;h=By();g=Cu(g);i=new M;O(i);G(G(S(G(i,B(263)),f),B(264)),g);Bu(h,N(i));}}if(e>=0){h=a.bY.data[e];IX(h,1);g=a.jf;if(g!==null)g.nt(b,e,h);}a.fs=e;}return d&&GY(c)?1:0;}
function Jz(a,b,c,d){var e,f;e=T$(a,b);if(e>=0){f=a.bY.data[e];if(!LO(f))f.tZ.s();}return 1;}
function T$(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.bY.data;if(c>=d.length)return (-1);e=d[c].c6;if(Ei(e,b))return c;if(a.fk){f=e.N;g=f.b;e=e.x;h=e.b;g=g+h|0;i=f.a;f=a.fW;f.b=(a.b6.x.b-(a.cy*2|0)|0)-h|0;f.a=e.a;if(X9(b,g,i,f))break;}c=c+1|0;}return c;}
function RN(a){a.fk=1;}
function XF(){var a=this;C.call(a);a.cr=null;a.b5=null;a.eX=null;a.iE=null;a.gR=null;a.h9=null;}
function L8(a){var b=new XF();AE$(b,a);return b;}
function AE$(a,b){a.b5=Cl();a.h9=AUm;a.cr=b;Ba(b.dw,a);}
function It(a,b){a.gR=b;b=BR(a.b5);while(B2(b)){HJ(BV(b),a.gR);}}
function F3(a,b,c,d){var e,f;e=a.cr;f=e.bL;if(Be(f.b,f.a)&&e.bF!==0.0){if(a.eX!==null&&!DA(a)){a.h9=d;a.iE=Gz(a.cr,a.eX);e=SC(a,b,c,null);b=new R2;b.lQ=a;e.iR=b;WO(a.cr,a);return;}b=new BC;U(b);J(b);}c=new DP;Bl(c,B(265));J(c);}
function DB(a){var b;if(DA(a)){b=a.cr;if(b.ef===a)b.ef=null;Sq(a,null);a.h9.s();a.h9=AUm;}}
function SC(a,b,c,d){var e,f,g,h;e=XY();RN(e);Kf(e,c.f8());HJ(e,a.gR);HB(e,a.iE);GF(e,a.cr);if(d===null)f=b.b;else{g=b.b;f=a.cr.bL.b<((g+(D1(d)).b|0)+(D1(e)).b|0)?g-(D1(e)).b|0:(g+(D1(d)).b|0)-d.eo|0;}h=b.a;b=a.cr.bL;Jk(e,V(0,X(f,b.b-(D1(e)).b|0)),V(0,X(h,b.a-(D1(e)).a|0)));b=new Oj;b.lY=a;b.lZ=e;e.jf=b;BX(a.b5,e);return e;}
function AFk(a,b,c){var d,e;a.iE=Gz(a.cr,a.eX);d=BR(a.b5);while(B2(d)){e=BV(d);HB(e,a.iE);GF(e,a.cr);}}
function HV(a){var b,c;if(D4(a.b5))return;CI(a.cr.cT,1);b=0;while(true){c=a.b5;if(b>=c.i)break;I5(Bs(c,b),a.cr);b=b+1|0;}}
function JS(a,b){var c,d;c=0;d=a.b5.i-1|0;a:{while(d>=0){c=JH(Bs(a.b5,d),b.j,a.cr.cp);if(c)break a;d=d+(-1)|0;}}return c;}
function IP(a,b,c,d){var e,f;e=0;f=a.b5.i-1|0;a:{while(f>=0){e=Jz(Bs(a.b5,f),b.j,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Jg(a,b,c){var d,e,f,g;d=0;e=a.b5.i-1|0;a:{while(e>=0){f=Bs(a.b5,e);g=b.j;d=Ei(f.b6,g);if(!d&&!Lk(f.b6)){f=f.iR;if(f!==null)f.s();}if(d)break a;e=e+(-1)|0;}}return d;}
function ADR(a,b){var c;if(!DA(a))return 0;a:{switch(b.bm){case 27:DB(a);c=1;break a;default:}c=0;}return c;}
function Sq(a,b){var c,d;c=a.b5.i-1|0;a:{while(true){if(c<0)break a;d=Bs(a.b5,c);if(b===d)break;Ed(a.b5,c);Ss(d);c=c+(-1)|0;}}}
function DA(a){return a.b5.i<=0?0:1;}
function Sd(){C.call(this);this.sB=null;}
function AMs(a,b){var c;c=a.sB;if(b.bm==32)Ss(c.cu);return 0;}
function Sg(){C.call(this);this.rm=null;}
function ADu(a,b){var c,d,e,f;b=b;c=a.rm;Bu(By(),B(266));if(!DA(c.dJ)){d=c.dJ;b=b.j;e=MV(4);f=new Uo;f.w8=c;F3(d,b,e,f);}return 1;}
function ACC(){var a=this;C.call(a);a.h2=null;a.hp=0.0;}
function Fn(a,b){var c=new ACC();ADl(c,a,b);return c;}
function ADl(a,b,c){a.h2=b;a.hp=c;}
function APZ(a,b){if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){b=b;return a.hp===b.hp&&Dh(a.h2,b.h2)?1:0;}return 0;}
function Km(){var a=this;C.call(a);a.nE=null;a.wq=null;a.tV=null;a.lb=null;a.X=null;a.iH=null;}
function AUn(a,b,c,d,e,f){var g=new Km();RV(g,a,b,c,d,e,f);return g;}
function Fl(){var b,c,d,e,f,g;b=new Km;c=new EV;Dq();d=ATQ;e=ATU;EH();F7(c,d,e,d,AUb,AT9);f=new EV;d=ATQ;e=ATU;g=AUb;F7(f,d,e,d,g,g);RV(b,c,f,Xq(),Br(B(267)),Xq(),AFu(1,0.125));return b;}
function RV(a,b,c,d,e,f,g){a.nE=b;a.wq=c;a.tV=d;a.lb=e;a.X=f;a.iH=g;}
var Se=F();
function AHT(a){Bu(By(),B(268));}
var Sc=F();
function ANN(a){Bu(By(),B(269));}
function C5(){var a=this;C.call(a);a.c6=null;a.tZ=null;a.iW=null;a.jR=null;a.jY=null;}
function ACg(a,b,c){var d=new C5();JY(d,a,b,c);return d;}
function ARE(a,b,c,d){var e=new C5();ZT(e,a,b,c,d);return e;}
function JY(a,b,c,d){ZT(a,b,c,d,null);}
function ZT(a,b,c,d,e){var f;f=AJU();a.c6=f;a.jY=c;a.iW=d;a.tZ=b;BF(f.bM,d.i0);BF(a.c6.bW,d.fl);a.jR=e;}
function LO(a){return a.jR===null?0:1;}
function IX(a,b){BF(a.c6.bW,!b?a.iW.fl:a.iW.s6);}
function Z1(){var a=this;C.call(a);a.cw=null;a.g0=null;a.qr=0;}
function ACT(){var a=new Z1();AJv(a);return a;}
function AJv(a){a.cw=Cl();}
function Il(a,b){Qq(a.cw,0,b);}
function Jx(a,b){U6(a.cw,b);}
function Iy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cw.i-1|0;while(c>=0){d=Bs(a.cw,c);d.p.ex(b);e=d.P;f=d.dQ;if(!K7(e)){if(!SY(e)&&!(!e.gj&&e.cR!==null)){e.gj=0;PZ(e);g=e.dy;h=(g.db+g.dT+5.0)/10.0;i=Ct(e.gu,e.io);g=b.cq;j=e.dy;k=e.gx;l=h*2.0;Cv(g,j);m=i+J$(g,k,l)|0;e.hh=m;n=X(m,e.n.b);if(n){g=CJ(b,n,e.n.a);Cv(g,e.dy);j=e.gx;l=i;h=l+h;k=e.dy;o=k.db;Cf(g,j,h,l+o-(o+k.dT)/16.0);j=e.cR;if(j===null){j=CR(b);e.cR=j;}CL(j,g);FE(g);CD(e.k5,0.0,0.0,Cb(e.cR),C3(e.cR));}}g=f.X.fl;j=e.cR;if(j===null)Ox(e,b,0,e.n.b,g);else
{i=Cb(j);f=f.X.i0;j=e.t;m=j.b;n=j.a;j=e.cR;Ez(b,m,n,j.e4,e.k5,j,f,g,0.0);m=e.n.b;if(i<m)Ox(e,b,i,m-i|0,g);}}CI(b,1);i=Ct(d.L,2.0);m=K7(d.P);f=d.L;e=f.jJ;f=f.nO;p=m?0:d.P.n.a;g=d.p.n;Y(f,g.b,g.a+p|0);ABY(b,f,!m?d.P.t:d.p.t,d.dQ.lb, -i|0,e);f=d.p;ABf(b,f.n,f.t,i,p,Qa(d.dQ.iH,d.L.bF),d.dQ.iH.lD,e);c=c+(-1)|0;}}
function Yd(a,b){var c,d,e,f;c=a.g0;if(c!==null){c.l(b);return 1;}d=0;while(true){c=a.cw;if(d>=c.i)break;a:{b:{e=Bs(c,d);if(!ABq(e,b.j)){if(!Fq(e.p,b.j))break b;if(!e.p.bX(b)&&!Dv(e.L.cp,null))break b;}f=1;break a;}f=0;}if(f)return 1;d=d+1|0;}return 0;}
function Z0(a,b,c,d){var e,f,g;e=0;while(true){f=a.cw;if(e>=f.i)break;g=Bs(f,e);if(Fq(g.p,b.j)&&g.p.cm(b,c,d)?1:0)return 1;e=e+1|0;}return 0;}
function Y$(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;if(a.g0!==null)return 1;d=0;while(true){e=a.cw;if(d>=e.i)break;a:{f=Bs(e,d);if(!c){e=b.j;if(!K7(f.P)&&Fq(f.P,e)){g=f.p.t;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.P.t;i=e.b-i|0;k=e.a-k|0;g=new Z;e=new QB;e.sQ=f;e.sR=i;e.sO=k;e.sP=g;e.sM=h;e.sN=j;}else{h=Ct(f.L,7.0);i=Ct(f.L,25.0);j=L_(f,e.a,h);k=UM(f,e.b,h);l=TW(f,e.b,i);m=QT(f,e.a,i);n=k&&OH(f,e.a,h)?1:0;o=j&&Nq(f,e.b,h)?1:0;i=j&&SL(f,e.b,h)?1:0;h=k&&Po(f,e.a,h)?1:0;if(n){if(l<0)e=TG(f,e);else if(l>0)e=Th(f,
e);else{g=new Z;p=new Z;h=e.a;e=f.p;i=e.t.a;j=e.n.a;e=new T1;e.rW=f;e.rU=h;e.rV=i;e.rY=j;e.r0=p;e.rX=g;}}else if(o){if(m<0)e=TG(f,e);else if(m>0)e=Oe(f,e);else{g=new Z;p=new Z;h=e.b;e=f.p;i=e.t.b;j=e.n.b;e=new WI;e.p6=f;e.p5=h;e.p4=i;e.p3=j;e.p2=p;e.p1=g;}}else if(i){if(m<0)e=Th(f,e);else if(m>0)e=ND(f,e);else{g=new Z;h=e.b;i=f.p.n.b;e=new Vp;e.mg=f;e.mh=h;e.mi=i;e.mj=g;}}else if(!h)e=null;else if(l<0)e=Oe(f,e);else if(l>0)e=ND(f,e);else{g=new Z;h=e.a;i=f.p.n.a;e=new LG;e.m7=f;e.m6=h;e.m9=i;e.m8=g;}}if(e!==
null)break a;}e=f.p.ip(b,c);g=f.p;if(g===null)e=null;else if(e===null)e=!Fq(g,b.j)?null:AUo;}if(e!==null){a.g0=e;a.qr=c;return 1;}d=d+1|0;}return 0;}
function ACS(a,b,c){var d,e;if(c==a.qr&&a.g0!==null){a.g0=null;return 1;}d=0;while(true){e=a.cw;if(d>=e.i)break;if((Bs(e,d)).p.cG(b,c))return 1;d=d+1|0;}return 0;}
function Ky(a,b,c,d){var e,f;e=0;while(true){f=a.cw;if(e>=f.i)break;if((Bs(f,e)).p.cY(b,c,d))return 1;e=e+1|0;}return 0;}
function AOP(a,b,c){var d,e,f;d=0;while(true){e=a.cw;if(d>=e.i)break;f=Bs(e,d);e=f.p;e.is(e.t,e.n,c);e=f.P;if(e.gd!==null){e.dy=null;e.hh=0;e.gj=1;}Jo(f);d=d+1|0;}}
function Nx(a,b){var c,d,e;c=0;d=0;while(true){e=a.cw;if(d>=e.i)break;Bs(e,d);c=0|c;d=d+1|0;}return c;}
function O9(a,b,c){var d;d=0;while(true){b=a.cw;if(d>=b.i)break;Bs(b,d);d=d+1|0;}}
function W9(){C.call(this);this.uE=null;}
function AI5(a,b){return b.g4&&b.bm==32?1:0;}
function W$(){C.call(this);this.sA=null;}
function AKt(a,b){var c,d,e,f,g,h;b=b;c=a.sA;if(!DA(c.e_)){d=c.e_;b=b.j;e=R(C5,1);f=e.data;g=new C5;h=new VZ;h.na=c;JY(g,h,B(270),d.gR.X);f[0]=g;F3(d,b,FH(e),AUm);}return 1;}
var AAM=F();
function Y9(b){var c,d;c=CJ(b,250,64);FR(c,B(167),25.0);KL(c,187,187,187);Cf(c,B(271),0.0,24.0);Cf(c,B(271),0.25,56.0);d=CR(b);CL(d,c);FE(c);return d;}
function XX(b){var c;c=new U3;c.gg=b;return c;}
function Xa(){C.call(this);this.pi=null;}
function AKJ(a,b,c,d){return Ky(a.pi,b,c,d);}
var Vg=F(0);
var G9=F(0);
var EE=F();
function D4(a){return a.i?0:1;}
function Hn(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=TM(HI(Cm(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BR(a);while(B2(f)){g=b.data;h=e+1|0;g[e]=BV(f);e=h;}return b;}
var Ma=F(0);
function FV(){EE.call(this);this.cl=0;}
function BR(a){var b;b=new MQ;b.gk=a;b.ly=a.cl;b.hZ=a.nb();b.fK=(-1);return b;}
function Pv(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(Dh(b,Bs(a,d)))break;d=d+1|0;}return d;}
var HU=F(0);
function M$(){var a=this;FV.call(a);a.b9=null;a.i=0;}
function Cl(){var a=new M$();AHa(a);return a;}
function AUp(a){var b=new M$();L3(b,a);return b;}
function AHa(a){L3(a,10);}
function L3(a,b){a.b9=R(C,b);}
function IM(a,b){var c,d;c=a.b9.data.length;if(c<b){d=c>=1073741823?2147483647:V(b,V(c*2|0,5));a.b9=Dd(a.b9,d);}}
function Bs(a,b){IB(a,b);return a.b9.data[b];}
function ALl(a){return a.i;}
function BX(a,b){var c,d;IM(a,a.i+1|0);c=a.b9.data;d=a.i;a.i=d+1|0;c[d]=b;a.cl=a.cl+1|0;return 1;}
function Qq(a,b,c){var d,e,f;Oy(a,b);IM(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.b9.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.b9.data[b]=c;a.i=d+1|0;a.cl=a.cl+1|0;}
function Ed(a,b){var c,d,e,f;IB(a,b);c=a.b9.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cl=a.cl+1|0;return d;}
function U6(a,b){var c;c=Pv(a,b);if(c<0)return 0;Ed(a,c);return 1;}
function G$(a){var b,c,d,e,f,g;b=a.b9;c=0;d=a.i;e=null;if(c>d){e=new BC;U(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.i=0;a.cl=a.cl+1|0;}
function IB(a,b){var c;if(b>=0&&b<a.i)return;c=new Bw;U(c);J(c);}
function Oy(a,b){var c;if(b>=0&&b<=a.i)return;c=new Bw;U(c);J(c);}
function Jq(a,b){var c;c=0;while(c<a.i){b.l(a.b9.data[c]);c=c+1|0;}}
function No(a,b){var c,d,e,f,g,h,i;c=a.b9;d=a.i;if(b===null)b=ASR;e=R(C,d-0|0);f=e.data;g=0;while(g<d){h=c.data;f[g-0|0]=h[g];g=g+1|0;}YX(e,b);i=0;while(i<d){c.data[i]=f[i-0|0];i=i+1|0;}a.cl=a.cl+1|0;}
function ACo(){var a=this;C.call(a);a.k8=0;a.k$=0;}
function ANS(){var a=new ACo();AOB(a);return a;}
function AOB(a){var b,c;b=AB_(Ew((ABa())));c=Ew((ABa()))^(-559038737);a.k8=b;a.k$=c;c=0;while(c<19){QL(a);c=c+1|0;}}
function QL(a){var b,c;b=a.k8;c=a.k$;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.k8=c;a.k$=b;return b;}
function AB_(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function HQ(a,b){return 5.960464477539063E-8*(QL(a)&16777215)*b|0;}
function S9(){C.call(this);this.l8=null;}
function AKW(a,b,c){var d;d=a.l8;if(b===0.0)JQ(d,100);}
function S$(){C.call(this);this.pt=null;}
function ADz(a,b){var c,d,e;c=a.pt;d=b.bm;if(d==32){c.iL=c.iL?0:1;e=1;}else if(d==13){JQ(c,1);e=1;}else if(d!=8)e=0;else{VK(c,1);e=1;}return e;}
var MH=F(0);
function AC6(b,c){var d;d=new Um;d.t7=b;d.t8=c;return d;}
function ABL(){var a=this;C.call(a);a.fj=null;a.fF=0;a.h$=0;a.fE=0;}
function ACA(a){var b=new ABL();AG_(b,a);return b;}
function AG_(a,b){a.fj=Cl();a.fE=0;a.h$=2048;a.fF=b;}
function G0(a,b,c){var d,e,f,g,h,i,j;d=c.p$(b);e=a.h$;if(d>e){c=new Bm;f=new M;O(f);BA(S(G(S(G(f,B(272)),d),B(273)),e),41);Bl(c,N(f));J(c);}if(!a.fF){b=new BC;Bl(b,B(274));J(b);}a:{b=new BW;if(d){b:{c=a.fj;if(c.i>0){c=BR(c);g=d;while(true){if(!B2(c))break b;f=BV(c);if(f.be>=g)break;}CD(b,f.bh,f.bu,g,a.fF);f.bh=f.bh+g;h=f.be-g;f.be=h;if(h===0.0)U6(a.fj,f);break a;}}g=a.fE;i=d;CD(b,0.0,g,i,a.fF);c=a.fj;f=new BW;h=a.fE;g=a.h$-d|0;j=a.fF;f.bh=i;f.bu=h;f.be=g;f.bv=j;BX(c,f);a.fE=a.fE+a.fF|0;}}return b;}
function HO(a,b){var c,d,e,f,g,h,i;a:{c=AR_(b);b=a.fj;if(b.i>0){d=BR(b);while(true){if(!B2(d))break a;e=BV(d);if(e.bu===c.bu){f=e.bh;g=e.be;h=f+g;i=c.bh;if(h===i){c.bh=f;c.be=c.be+g;PS(d);}else{h=c.be;if(i+h===f){c.be=h+g;PS(d);}}}}}}BX(a.fj,c);}
function Wx(a){return B3(a.h$,a.fE);}
function AAb(){var a=this;C.call(a);a.v_=20;a.fw=null;a.eG=null;a.hX=null;a.j9=0;a.hW=0;a.iA=0.0;a.cn=null;a.eb=null;a.eS=null;a.e7=0;}
function AJ_(){var a=new AAb();AON(a);return a;}
function AON(a){a.v_=20;a.fw=new Z;a.eG=new Z;a.cn=Cl();}
function WN(a,b){var c,d,e,f,g;c=a.e7;if(b==c)return;d=a.cn.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=V(0,(c-1|0)/20|0);f=V(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Ry(a,b);a.e7=b;}else{if(a.e7>=b)while(true){if(g<f)break a;a.e7=R0(Bs(a.cn,g%d|0),a.eb,a.eS,a.e7,b,e,a.iA);g=g+(-1)|0;}while(f<=g){a.e7=R0(Bs(a.cn,f%d|0),a.eb,a.eS,a.e7,b,e,a.iA);f=f+1|0;}}}}
function Te(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=BR(a.cn);while(B2(f)){g=BV(f);h=a.fw;i=Be(a.cn.i,a.hW);j=g.d8.a;k=((g.ir.a-(b%i|0)|0)+i|0)%i|0;l=k+j|0;m=BD(l,c);if(m<=0){Y(g.fY,Cb(g.bS),j);CD(g.fm,0.0,0.0,Cb(g.bS),j);Is(g,e,k,h,d.iC,d.g6);}else{if(m>0&&k<c){m=V(c-k|0,0);Y(g.fY,Cb(g.bS),m);CD(g.fm,0.0,0.0,Cb(g.bS),m);Is(g,e,k,h,d.iC,d.g6);}if(l>i){m=X(l%i|0,c);Y(g.fY,Cb(g.bS),m);CD(g.fm,0.0,b%C3(g.bS)|0,Cb(g.bS),m);Is(g,e,0,h,d.iC,d.g6);}}}}
function Jn(a,b,c,d){var e,f,g,h,i,j;e=a.cn.i;while(true){f=a.cn.i;g=Be(f,a.hW);if(g>(d+a.j9|0))break;h=B3(0,g);i=new Mz;g=a.eG.b;f=a.j9;j=a.hX;i.fY=new Z;i.fm=new BW;i.ir=h;i.dp=20;i.d5=f;i.d8=B3(g,20*f|0);i.fq=So(j,f);if(i.bS===null)i.bS=CR(b);BX(a.cn,i);}if(f==e)return;Ry(a,c);}
function Ry(a,b){var c,d,e,f,g,h,i,j;c=a.cn;d=c.i;e=Be((b/(d*20|0)|0)+1|0,d)*20|0;c=BR(c);while(B2(c)){f=BV(c);g=a.eb;h=a.iA;En(g);i=0;while(true){j=f.dp;if(i>=j)break;j=e-Be(d,j)|0;if(j<b)j=e;e=j+1|0;FX(f,g,CZ(e),Be(f.d5,i)+f.fq|0,h);i=i+1|0;}CL(f.bS,g);}}
function SG(a,b,c,d){var e;a.hX=b;a.j9=c;e=c*20|0;a.hW=e;b=CX(a.eb,CJ(d,a.eG.b,e));a.eb=b;Cv(b,a.hX);Ra(a.eb,2);b=CX(a.eS,CJ(d,a.eG.b,c));a.eS=b;Cv(b,a.hX);Ra(a.eS,2);}
function Ux(a,b,c,d,e){C1(a.fw,b);Y(a.eG,c,d);a.iA=e;}
var ABA=F(0);
function ABU(){return AJ8(Cw(96,99,102),Cw(49,51,53),Cw(164,163,163),CF(50));}
function Vt(){var a=this;C.call(a);a.iF=null;a.qm=null;a.ia=null;}
function AKM(a,b,c){if(!c){b=E6(a.ia.gr,b.j,a.qm,1);a.iF=b;if(b!==null)return 1;}return 1;}
function AMg(a,b,c){if(a.iF!==null)a.iF=null;return 1;}
function AGE(a,b){var c;c=a.iF;if(c!==null){c.l(b);return 1;}c=a.ia;return Fe(c.gr,b.j,c.se);}
function RQ(){C.call(this);this.nD=null;}
function AF0(a,b,c,d){var e,f;b=a.nD;e=(LV(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.dD=X(V(0,b.dD+Be(e,f)|0),O3(b));return 1;}
var TB=F(0);
function GY(a){return Dv(a,null);}
function TI(b){var c;c=new M7;c.nk=b;return c;}
function AAa(){var a=this;C.call(a);a.eA=null;a.cB=null;a.dx=null;a.d0=null;a.l0=null;a.jd=null;}
function G6(){var a=new AAa();AGA(a);return a;}
function AGA(a){var b;a.eA=new Z;a.cB=new Z;a.dx=new Z;a.d0=new Z;b=new BW;a.l0=b;a.jd=new BW;EH();BF(b,AUa);BF(a.jd,AUq);}
function O0(a){var b;b=a.cB;return !Be(b.b,b.a)?0:1;}
function Ig(a,b){return Hb(b,a.dx,a.d0);}
function E6(a,b,c,d){var e,f,g,h,i;e=Ig(a,b);f=Hb(b,a.eA,a.cB);if(!e&&!f)return null;if(!f){if(!d)c.l(Wv(a,b.b-a.dx.b|0));else c.l(NP(a,b.a-a.dx.a|0));}g=!d?a.eA.b+(a.cB.b/2|0)|0:a.eA.a+(a.cB.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new M6;b.sm=a;b.so=c;b.sn=i;}else{b=new M4;b.pf=a;b.pe=c;b.pg=i;}return b;}
function ACz(b,c){var d;d=new SZ;d.qg=b;d.lS=c;return d;}
function NP(a,b){var c,d,e;c=a.d0.a;d=a.cB.a;e=c-d|0;return ACz(X(V(0,b-(d/2|0)|0),e),e);}
function Wv(a,b){var c,d,e;c=a.d0.b;d=a.cB.b;e=c-d|0;return ACz(X(V(0,b-(d/2|0)|0),e),e);}
function H1(a,b,c,d,e,f,g){M_(a,b,c,d,e,f,g,1);}
function LJ(a,b,c,d,e,f,g){M_(a,b,c,d,e,f,g,0);}
function M_(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Y(a.d0,0,0);Y(a.cB,0,0);}else{i=X(g*3|0,d);j=V(OW(d,d,e),i);e=e-d|0;i=d-j|0;i=i?OW(b,i,e):0;if(!h){k=a.eA;k.b=i+c|0;k.a=f-g|0;l=a.cB;l.b=j;l.a=g;l=a.dx;l.b=c;l.a=k.a;k=a.d0;k.b=d;k.a=g;}else{k=a.eA;k.b=f-g|0;k.a=i+c|0;l=a.cB;l.b=g;l.a=j;l=a.dx;l.b=k.b;l.a=c;k=a.d0;k.b=g;k.a=d;}}}
function Pb(a,b){FM(a,b);F5(a,b);}
function FM(a,b){var c;c=a.dx;BB(b,c.b,c.a,a.d0,a.l0);}
function F5(a,b){var c,d;c=a.cB;c.b=c.b-2|0;c.a=c.a-2|0;d=a.eA;BB(b,d.b+1|0,d.a+1|0,c,a.jd);b=a.cB;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fe(a,b,c){return Ig(a,b)&&GY(c)?1:0;}
function Pg(){C.call(this);this.tv=null;}
function AMY(a,b){var c,d,e;c=a.tv;if(b.cg&&b.bm==79){if(!b.bx){b=c.bb.bV;d=new Rj;d.tB=c;K$(b,d);}else{b=c.bb.bV;d=new Ri;d.vR=c;U8(b,d);}e=1;}else e=0;return e;}
function Qk(){C.call(this);this.u4=null;}
function ADZ(a,b){var c,d,e,f;c=b.data;b=By();d=Cu(c[0]);e=new M;O(e);G(G(e,B(188)),d);Bu(b,N(e));b=By();f=c[1];d=new M;O(d);G(G(d,B(275)),f);Bu(b,N(d));}
function Qj(){C.call(this);this.wQ=null;}
function APE(a,b){var c,d,e,f,g,h,i;c=b.data;d=By();e=Cu(c[0]);f=new M;O(f);G(G(f,B(188)),e);Bu(d,N(f));g=Fy(QX(b,1));b=By();d=Cu(c[1]);if(g===null)c=B(29);else{c=new M;O(c);BY(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BY(c,B(44));BA(c,i[h]);h=h+1|0;}BY(c,B(45));c=N(c);}e=new M;O(e);G(G(G(G(e,B(276)),d),B(277)),c);Bu(b,N(e));}
function Qi(){C.call(this);this.nZ=null;}
function AGj(a,b){TA(a.nZ,b);}
function Qh(){C.call(this);this.uL=null;}
function AK9(a,b){var c,d,e,f,g;c=b.data;d=By();e=Cu(c[0]);f=new M;O(f);G(G(f,B(188)),e);Bu(d,N(f));g=Em(QX(b,1));b=By();d=Cu(c[1]);c=AA7(g);e=new M;O(e);G(G(G(G(e,B(278)),d),B(279)),c);Bu(b,N(e));}
function Qf(){C.call(this);this.vT=null;}
function AKk(a,b){var c,d;c=KZ();b=Cu(b);d=new M;O(d);G(G(d,B(280)),b);Bu(c,N(d));b=new E8;U(b);J(b);}
function Qe(){C.call(this);this.pr=null;}
function AMd(a,b){var c,d,e,f;c=a.pr;d=c.bb.bV;e=new Nm;e.qD=c;f=R(C,1);f.data[0]=b;C0(d,e,B(281),f);}
function SO(){C.call(this);this.kB=null;}
function AN6(a,b){var c,d,e,f,g,h;c=a.kB;d=c.kZ;if(d!==null){e=c.ds.N;f=e.b;g=b.j;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.kZ=g;}b=b.j;f=b.b;c=c.es;d=c.x;f=f-d.b|0;h=b.a-d.a|0;Y(c.N,f,h);return 1;}
function AOr(a,b,c){var d;if(!c){d=b.j;b=a.kB;if(!Ei(b.ds,d))d=null;b.kZ=d;}return 1;}
function Tg(){var a=this;C.call(a);a.ih=null;a.o8=null;a.iM=null;}
function AEB(a,b,c){if(!c){b=E6(a.iM.hk,b.j,a.o8,1);a.ih=b;if(b!==null)return 1;}return 1;}
function AFf(a,b,c){if(a.ih!==null)a.ih=null;return 1;}
function AD_(a,b){var c;c=a.ih;if(c!==null){c.l(b);return 1;}c=a.iM;return Fe(c.hk,b.j,TI(c.bb.bV));}
function Nb(){C.call(this);this.sY=null;}
function AD3(a,b,c,d){var e,f;b=a.sY;e=(LV(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.d_=X(V(0,b.d_+Be(e,f)|0),QQ(b));return 1;}
function Rs(){C.call(this);this.q0=null;}
function AN$(a,b){var c,d;a:{c=a.q0;switch(b.bm){case 67:LQ(c);d=1;break a;case 86:Qc(c);d=1;break a;default:}d=0;}return d;}
var Rr=F();
function AGF(a,b,c){return 0;}
function Rp(){C.call(this);this.oN=null;}
function ANA(a,b,c){var d,e;d=a.oN;c=d.de+1|0;d.de=c;d=HC(E(H2));e=new M;O(e);G(G(S(e,c),B(282)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));Vj(b,e);return 1;}
var Ro=F();
function ALC(a){return null;}
function Rq(){C.call(this);this.mV=null;}
function AE7(a){var b,c;b=a.mV;c=new O8;c.q9=b;return c;}
function QZ(){C.call(this);this.wE=null;}
function AGL(a,b){return 0;}
function Ks(){var a=this;C.call(a);a.lA=null;a.uG=null;a.uS=0.0;a.oi=0;a.u1=0;a.vt=0;a.qa=0;a.wk=0;a.db=0.0;a.dT=0.0;a.uP=0.0;a.lo=0.0;a.uY=0;a.mI=null;}
function Eo(a){return C$(a.db+a.dT);}
function Jr(a,b){return C$((a.db+a.dT)*b);}
function PC(){C.call(this);this.wB=null;}
function AHf(a,b){return b.g4&&b.bm==32?1:0;}
function PD(){C.call(this);this.px=null;}
function ADA(a,b){var c,d,e,f,g,h;b=b;c=a.px;if(!DA(c.fg)){d=c.fg;b=b.j;e=R(C5,1);f=e.data;g=new C5;h=new Qs;h.mk=c;JY(g,h,B(270),d.gR.X);f[0]=g;F3(d,b,FH(e),AUm);}return 1;}
function PE(){C.call(this);this.q1=null;}
function AMB(a,b,c,d){return Ky(a.q1,b,c,d);}
function H3(){var a=this;C.call(a);a.fB=null;a.g=null;a.it=null;a.pj=null;}
function AUr(a,b,c){var d=new H3();PF(d,a,b,c);return d;}
function PF(a,b,c,d){var e,f,g,h,i,j,k;a.fB=d;a.it=c;if(d===null)c=null;else{c=d.eJ;c=c===null?null:!D5(c,B(283))&&!D5(c,B(284))&&!D5(c,B(285))&&!D5(c,B(286))&&!D5(c,B(287))&&!D5(c,B(288))?(D5(c,B(228))?B(136):!D5(c,B(289))?null:B(244)):B(245);}e=b.data;a.pj=c;c=new Hr;f=e.length;if(!f)g=L9(B(31));else{g=R(Cx,f);h=g.data;i=0;while(i<f){j=new Cx;k=R(B5,1);k.data[0]=Q1(e[i]);HH(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.dN=HF();c.d7=HF();c.eY=Cl();if(!b.length){c=new BC;U(c);J(c);}c.D=g;c.fh=0;c.cj=0;c.cQ=Tb(c);a.g=c;}
function Dg(a){var b;b=a.it;if(b===null)b=a.pj;return b;}
function GH(a){var b;b=a.fB;return b===null?null:b.hm;}
var NW=F(0);
var Oi=F();
function AHl(a,b,c){var d,e;d=b;e=c;b=new M;O(b);S(G(S(G(b,B(290)),d),B(291)),e);CE(N(b));return d+e|0;}
var NX=F(0);
var Og=F();
function AIq(a,b,c){var d,e;d=b;e=c;b=new M;O(b);E$(G(E$(G(b,B(292)),d),B(291)),e);CE(N(b));return d+e;}
var Yq=F();
var Xz=F(0);
function LS(){C.call(this);this.m$=null;}
function AJC(a){J_(a.m$);}
function LT(){C.call(this);this.pS=null;}
function AH7(a){Jh(a.pS);}
function U1(){var a=this;C.call(a);a.mS=null;a.r4=null;a.sl=null;a.n7=null;a.l6=null;a.qM=null;}
function Kd(a,b,c){return Wz(a,Cn(a.mS),b,c);}
function UL(a,b,c){return Wz(a,Cn(a.r4),b,c);}
function Wz(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.s8(c,d))return g.vb;f=f+1|0;}return null;}
function ML(a,b,c){var d,e,f,g;d=(Cn(a.sl)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.s8(b,c))return g.vj;f=f+1|0;}return null;}
function Xg(){var a=this;C.call(a);a.bI=null;a.bz=null;a.cJ=0;}
function ALs(){var a=new Xg();AD6(a);return a;}
function QD(a){var b=new Xg();ADt(b,a);return b;}
function AD6(a){a.bI=new Ga;a.bz=new Ga;}
function ADt(a,b){var c;c=new Ga;a.bI=c;a.bz=new Ga;Wl(c,b.bI);Wl(a.bz,b.bz);a.cJ=b.cJ;}
function J6(a,b,c){B0(a.bz,b,c);if(!a.cJ)B0(a.bI,b,c);}
function Pi(a,b){B0(a.bI,b,0);B0(a.bz,b+1|0,0);}
function DT(a){if(WP(a.bI,a.bz)>0)return a.bz;return a.bI;}
function Fo(a){if(WP(a.bI,a.bz)<0)return a.bz;return a.bI;}
function Dj(a){var b,c;b=a.bI;c=a.bz;return (b===c?1:c!==null&&Cm(b)===Cm(c)?(b.J==c.J&&b.V==c.V?1:0):0)?0:1;}
function YE(a,b){var c,d;if(!Dj(a))return 0;c=DT(a);d=Fo(a);return c.J<=b&&b<d.J?1:0;}
function MJ(){var a=this;C.call(a);a.eh=null;a.ei=0;a.cV=0;}
function L$(a,b){var c,d,e;c=a.ei;d=a.eh;if(c==d.data.length)a.eh=Dd(d,c+16|0);d=a.eh.data;e=a.ei;a.ei=e+1|0;d[e]=b;}
function Wr(a){var b,c,d;b=a.cV;c=a.ei-1|0;if(b==c)a.cV=b-1|0;d=a.eh.data;a.ei=c;d[c]=null;}
function EK(){var a=this;C.call(a);a.bN=0;a.bO=null;a.dZ=null;a.di=0;a.cO=0;}
var AUg=0;var AUs=0;var AUf=0;function Kz(b,c){return (c-Eo(b)|0)/2|0;}
function So(b,c){return Kz(b,c)+b.qa|0;}
function AAZ(a,b,c,d,e){var f,g;if(D4(a.dZ))return;if(e>EQ(a.bO))return;f=e/1024|0;e=a.cO;if(f==e)return;if(LV(f-e|0)>=a.di){g=0;while(g<a.di){HD(a,b,d,c,f+g|0);g=g+1|0;}a.cO=f;return;}while(true){e=a.cO;if(e>=f)break;HD(a,b,d,c,e+a.di|0);a.cO=a.cO+1|0;}while(true){e=a.cO;if(e<=f)break;HD(a,b,d,c,e-1|0);a.cO=a.cO-1|0;}}
function HD(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;En(b);f=a.bO.e2;g=e*1024|0;h=Oc(a,g);if(h>=a.bO.q.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bN;a:{while(true){l=a.bO.q.data;if(h>=l.length)break a;m=l[h];n=!AUf?So(d.data[m.b2],c):Kz(d.data[m.b2],c);o=f.data;Cv(b,d.data[m.b2]);Cf(b,m.v,k,n);k=o[h]-j+a.bN;if(k>1024.0)break;h=h+1|0;}}CL(Bs(a.dZ,e%a.di|0),b);}
function AA4(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(D4(a.dZ))return;if(!a.di)return;if(j>EQ(a.bO))return;o=a.bO;p=o.dP;q=o.q;r=j/1024|0;s=Oc(a,j);t= -a.bN|0;u=i;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=h)break;y=p.data;o=Bs(a.dZ,r%a.di|0);z=v[s];ba=y[s]+a.bN|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=X(be,ba)-j|0;if(bc&&x)bf=bf+a.bN|0;if((t+bf|0)>h)bf=h-t|0;bg=l!==null?0:1;b:{if(!bg){bh=!x
?a.bN:2*a.bN|0;bi=l.b;w=l.a;if(!(bi<w&&j<=w&&(j+bf|0)>(bi+bh|0)?0:1)){bh=0;break b;}}bh=1;}c:{if(!bg){bj=!x?a.bN:2*a.bN|0;if(j>=l.b&&(j+bf|0)<=(l.a+bj|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(z===m)bl=k.qb;bm=BR(n);d:{e:{while(B2(bm)){f:{bn=BV(bm);if(bn!==null){if(!bn.dv(z))break f;else break e;}if(z===null)break e;}}bi=0;break d;}bi=1;}if(bi)bl=k.mT;if(!bk&&!bh){l.a=X(l.a,EQ(a.bO));bj=j>=l.b?bf:(X(ba,be)-l.b|0)-(!x?a.bN:0)|0;bi=(j+bf|0)<=(l.a+(!x?a.bN:2*a.bN|0)|0)?0:(X(ba,be)-l.a|0)-(!x?a.bN:0)|0;w=j-bb|0;be
=t+c|0;bo=w;x=bf-bj|0;CD(e,bo,0.0,x,u);Y(f,x,i);HS(a,d,be,b,f,e,z,o,g,k,0,bl);w=w+bf|0;CD(e,w-bi|0,0.0,bi,u);Y(f,bi,i);be=be+bf|0;HS(a,d,be-bi|0,b,f,e,z,o,g,k,0,bl);bp=w-bj|0;bi=bj-bi|0;CD(e,bp,0.0,bi,u);Y(f,bi,i);HS(a,d,be-bj|0,b,f,e,z,o,g,k,1,bl);}else{CD(e,j-bb|0,0.0,bf,u);Y(f,bf,i);HS(a,d,t+c|0,b,f,e,z,o,g,k,bk,bl);}j=j+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function HS(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bv!==0.0&&f.be!==0.0){m=j.nT.data[g.cx];if(k)n=j.kW;else{g=m.re;if(g===null)g=j.iP;if(l===null)l=BI(g);n=l;}g=m.rd;if(AUs)i=0.0;Ez(b,c,d,e,f,h,g,n,i);return;}return;}}
function Oc(a,b){var c,d,e,f,g,h,i;c=a.bO;d=c.e2;e=0;f=c.q.data.length;g=b;b=BD(e,f);if(b>0){c=new BC;U(c);J(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ABc(a,b,c,d,e,f){var g,h;a.cO=f/1024|0;while(true){g=a.dZ;if(g.i>=a.di)break;BX(g,CR(c));}h=0;while(h<a.di){HD(a,b,e,d,a.cO+h|0);h=h+1|0;}}
function PA(a){a.bO=null;Jq(a.dZ,new PB);G$(a.dZ);}
function AAO(a,b,c,d,e,f,g,h,i){var j,k;j=EQ(a.bO);if(j)j=j+a.bN|0;if(!j)j=j-a.bN|0;k=V( -a.bN|0,j-g|0);if(k>=h)return;Y(f,h-k|0,e);BB(b,c+k|0,d,f,i);}
function Zb(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EK,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B1(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bO===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EK;f.bN=3;f.dZ=Cl();f.cO=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)PA(o);h=h+1|0;}return g;}
function ABy(){AUf=0;}
function TT(){C.call(this);this.wT=null;}
function TS(){C.call(this);this.qv=null;}
function AM7(a,b){var c;c=a.qv;c.bi=FB(b,EL(c));}
function TO(){C.call(this);this.nl=null;}
function AK7(a,b){var c;c=a.nl;c.cf=FB(b,F_(c));}
function TN(){C.call(this);this.sw=null;}
function AM5(a){var b,c;b=a.sw;c=b.hC?0:1;b.hC=c;b=new M;O(b);FU(G(b,B(293)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TQ(){C.call(this);this.qT=null;}
function AIa(a){var b,c;b=a.qT;c=b.hr?0:1;b.hr=c;b=new M;O(b);FU(G(b,B(294)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function TP(){C.call(this);this.nH=null;}
function AKr(a){var b,c;b=a.nH;c=b.iS^1;b.iS=c;b=new M;O(b);FU(G(b,B(295)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Ug(){C.call(this);this.sX=null;}
function AMv(a){var b,c,d,e,f;b=a.sX;c=(b.kp+3|0)%6|0;b.kp=c;d=b.f7.data;e=d.length;f=0;while(f<e){b=d[f];b.bN=c;b=b.bO;if(b!==null)b.hz=1;f=f+1|0;}}
var Fg=F(Cr);
var AUd=null;var AUt=null;var AUe=null;var AUu=null;function ADJ(){ADJ=Bq(Fg);AKz();}
function AAx(a,b){var c=new Fg();AAl(c,a,b);return c;}
function AAl(a,b,c){ADJ();DE(a,b,c);}
function AKz(){var b;AUd=AAx(B(296),0);AUt=AAx(B(297),1);b=AAx(B(298),2);AUe=b;AUu=H(Fg,[AUd,AUt,b]);}
function IS(){var a=this;C.call(a);a.dB=null;a.er=null;a.e4=null;}
var ATs=0;function AA2(a){var b;b=a.er;if(b!==null){ATs=ATs-1|0;a.dB.c7.deleteTexture(b);a.er=null;}}
function Cb(a){return a.e4.b;}
function C3(a){return a.e4.a;}
function SF(a,b,c,d){var e;e=a.e4;e.b=b;e.a=c;Le(a);a.dB.c7.texStorage2D(3553,1,d,b,c);e=a.dB.c7;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Le(a){var b,c;b=a.dB.c7;c=a.er;b.bindTexture(3553,c);}
function CL(a,b){Mx(a,b.k_,b.kl,32856);OX(a,b,0,0);}
function Mx(a,b,c,d){var e,f,g,h;a:{e=a.e4;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){Le(a);break a;}e=a.dB.c7;h=a.er;e.deleteTexture(h);a.er=a.dB.c7.createTexture();SF(a,b,c,d);break a;}}SF(a,b,c,d);}}
function Hy(a,b,c,d){Le(a);OX(a,b,c,d);}
function OX(a,b,c,d){var e;e=a.dB.c7;b=b.i8;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Rk=F();
function AP3(a,b){return ACE(b);}
function Rl(){C.call(this);this.rn=null;}
function ADE(a,b){return Mf(a.rn,b);}
function SI(){C.call(this);this.jE=null;}
var AUl=null;function O4(){var a=new SI();ZB(a);return a;}
function ZB(a){a.jE=Cl();}
function DY(a,b,c,d){OL(a,ACg(d,b,c));}
function Ea(b,c,d){return ACg(d,b,c);}
function Ev(a,b,c,d){OL(a,ARE(null,b,c,d));}
function OL(a,b){BX(a.jE,b);}
function G7(a){return FH(Hn(a.jE,AUl));}
function Xr(){AUl=R(C5,0);}
var WS=F(0);
var AUm=null;function ABW(){AUm=new MY;}
function EV(){var a=this;C.call(a);a.nX=null;a.sJ=null;a.tE=null;a.pW=null;a.qO=null;}
function AUv(a,b,c,d,e){var f=new EV();F7(f,a,b,c,d,e);return f;}
function F7(a,b,c,d,e,f){a.nX=b;a.sJ=c;a.tE=d;a.pW=e;a.qO=f;}
function G1(){var a=this;C.call(a);a.i0=null;a.fl=null;a.s6=null;}
function AUw(a,b,c){var d=new G1();Lh(d,a,b,c);return d;}
function Lh(a,b,c,d){a.i0=b;a.fl=c;a.s6=d;}
function Xq(){var b,c;b=new G1;c=Br(B(299));EH();Lh(b,c,AT$,AT_);return b;}
function ACK(){var b,c;b=new G1;Dq();c=AT7;EH();Lh(b,c,AT8,AT_);return b;}
function ADa(){var a=this;C.call(a);a.lD=null;a.qx=0;}
function AFu(a,b){var c=new ADa();APj(c,a,b);return c;}
function APj(a,b,c){var d;d=new BW;a.lD=d;a.qx=b;d.bv=c;}
function Qa(a,b){return B9(a.qx,b);}
var HA=F(0);
var Wa=F();
function AMQ(a,b,c,d){var e;b=By();d=Cu(d);e=new M;O(e);G(G(S(G(e,B(300)),c),B(264)),d);Bu(b,N(e));}
var Wb=F();
function U3(){C.call(this);this.gg=null;}
function ADD(a,b){return JS(a.gg,b);}
function AMS(a,b,c,d){return IP(a.gg,b,c,d);}
function ANM(a,b,c){return Jg(a.gg,b,c);}
function AIz(a,b,c){return DA(a.gg);}
function ABM(){var a=this;C.call(a);a.iC=null;a.g6=null;a.o4=null;a.pa=null;}
function AJ8(a,b,c,d){var e=new ABM();APo(e,a,b,c,d);return e;}
function APo(a,b,c,d,e){a.iC=b;a.g6=c;a.o4=d;a.pa=e;}
function W3(){C.call(this);this.qX=null;}
function AMh(a,b){var c;c=a.qX.ia;c.dD=FB(b,O3(c));}
function M7(){C.call(this);this.nk=null;}
function Dv(a,b){Gh(a.nk,b);return 1;}
var Du=F(0);
var AUa=null;var AUq=null;var AT$=null;var AUx=null;var AT_=null;var AUb=null;var AUy=null;var AT9=null;var AT8=null;function EH(){EH=Bq(Du);AH5();}
function AH5(){AUa=W7(50,50,50,100);AUq=W7(80,80,80,200);AT$=Br(B(301));AUx=Br(B(267));AT_=Br(B(302));AUb=Br(B(301));AUy=Br(B(267));AT9=Br(B(302));Dq();AT8=AT0;}
var AAg=F();
function OQ(){C.call(this);this.mQ=null;}
function AIH(a,b){var c;c=a.mQ.iM;c.d_=FB(b,QQ(c));}
function Qu(){C.call(this);this.lU=null;}
function ADH(a,b){return Dv(a.lU,null);}
var YC=F();
function Hr(){var a=this;C.call(a);a.D=null;a.cQ=null;a.dN=null;a.d7=null;a.eY=null;a.cj=0;a.fh=0;a.oR=0.0;}
function Tb(a){var b,c,d,e,f,g,h,i;b=Sr(a);c=new Ih;d=new M$;e=Ni(0,b,0);f=new WJ;f.su=e;L3(d,1);e=BR(f);g=0;while(true){h=d.b9.data;i=h.length;if(g>=i)break;h[g]=BV(e);g=g+1|0;}d.i=i;Ti(c,d);return c;}
function B1(a,b){return a.D.data[b];}
function CA(a){return a.D.data.length;}
function Sr(a){return FZ(a,CA(a));}
function E_(a,b){return a.D.data[b].O;}
function Kp(a,b){var c,d,e,f,g,h,i;c=a.D.data;d=c[b];e=c[b+1|0];f=DF(K1(d.q,e.q));g=a.D;h=g.data.length;if(b<h&&b>=0){i=R(Cx,h-1|0);c=i.data;P8(g,b,i);c[b]=f;a.D=i;return;}d=new Bm;U(d);J(d);}
function Or(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.D.data;if(!(c<d[b].O?0:1)){d=(B1(a,b)).q.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<I(h.v)){f=L(h.v,g);break a;}g=g-I(h.v)|0;f=f+1|0;}f=0;}ED();h=new Bv;d=BQ(1);d.data[0]=f;G4(h,d);Gl(a,b,c,1,h);h=a.D.data[b];i=h.q;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=I(d[j].v);if(c<b)break;c=c-b|0;j=j+1|0;}}if(I(d[j].v)==1)h.q=P8(i,j,R(B5,e-1|0));else{k=d[j];if(c<=0)l=Dw(Dc(k.v,1),k.cx,k.b2);else if(c>=(I(k.v)-1|0)){l=new B5;m=k.v;Un(l,B8(m,0,I(m)-
1|0),k.cx,k.b2);}else{i=BQ(I(k.v)-1|0);n=i.data;b=0;while(b<c){n[b]=L(k.v,b);b=b+1|0;}b=n.length;while(c<b){m=k.v;e=c+1|0;n[c]=L(m,e);c=e;}l=Dw(FK(i),k.cx,k.b2);}d[j]=l;}h.O=h.O-1|0;D7(h);}else if(b!=(d.length-1|0))Kp(a,b);}
function WX(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Wi(a.D.data[b],c,e[0]);return;}g=f-1|0;h=H$(a.D.data[b],c);d=a.D;i=Dd(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.q.data;m=l.length;c=!m?0:I(l[m-1|0].v);I1(j,j.q.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fd(e[m]))j=DF(R(B5,0));else{j=new Cx;l=R(B5,1);l.data[0]=Dw(e[m],0,0);HH(j,l);}d[b+m|0]=j;m=m+1|0;}I1(h[1],0,0,e[g]);d[b+g|0]=h[1];a.D
=i;}
function U$(a,b){var c,d,e,f,g,h,i;c=DT(b);d=Fo(b);e=c.J;if(e==d.J)return B8(EB(a.D.data[e]),c.V,d.V);f=new M;O(f);b=a.D.data[c.J];e=c.V;BA(BY(f,Dc(EB(b),e)),10);g=a.D;h=c.J+1|0;e=d.J;if(h>=0&&e>=h){g=g.data;if(e<=g.length){while(true){while(h<e){i=h+1|0;Xp(BY(f,EB(g[h])),10);h=i;}if(!(h>=e?0:1))break;}b=a.D.data[d.J];i=d.V;BY(f,B8(EB(b),0,i));return N(f);}}b=new VH;U(b);J(b);}
function St(a,b,c){var d;TR(a,b);d=DT(b);Gl(a,d.J,d.V,1,c);}
function TR(a,b){var c,d,e,f,g,h,i;a:{c=DT(b);d=Fo(b);e=c.J;if(e==d.J)FI(a.D.data[e],c.V,d.V);else{b=a.D.data[e];FI(b,c.V,b.O);FI(a.D.data[d.J],0,d.V);e=c.J+1|0;f=d.J;g=a.D;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Cx,(h-f|0)+e|0);Zr(g,e,f,i);a.D=i;Kp(a,c.J);break a;}b=new Bm;U(b);J(b);}b=new Bm;U(b);J(b);}}}
function Jv(a,b,c){return EI(b,GG(B1(a,b),c));}
function WB(a,b){b.bD=GG(B1(a,b.bs),b.bD);}
function MU(a,b){var c,d,e;c=0;d=0;while(true){e=a.D.data.length;if(c>=e)break;if((d+(B1(a,c)).O|0)>=b)return B3(c,b-d|0);d=d+((B1(a,c)).O+1|0)|0;c=c+1|0;}return B3(e,0);}
function FZ(a,b){var c,d,e;c=0;d=a.D.data.length;e=0;while(e<b){c=c+E_(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Pq(a,b){return T0(B1(a,b.bs),b.bD);}
function F9(a){var b,c,d,e,f,g,h,i,j;b=BQ(Sr(a));c=b.data;d=a.D.data.length;e=0;f=0;while(e<d){g=a.D.data[e].q.data;h=g.length;i=0;while(i<h){j=g[i].v;OV(j,0,I(j),b,f);f=f+I(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gl(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cj=a.cj+1|0;f=a.eY;g=R(GK,1);h=new GK;h.ek=b;h.eT=c;i=Ld(e,B(221),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B3(b,c+I(i[0])|0);break a;}k=B3((b+j|0)-1|0,I(i[j-1|0]));break a;}}k=B3(b,c);}i=g.data;h.kq=k;h.jb=d;h.gB=e;i[0]=h;BX(f,g);I7(a,b,c,d,e);}
function I7(a,b,c,d,e){var f;f=FZ(a,b)+c|0;if(!d)OS(a.cQ,f,I(e));else S0(a.cQ,f,I(e));}
function Sl(a,b){var c,d,e;c=Ld(b.gB,B(221),(-1));if(b.jb){WX(a,b.ek,b.eT,c);OS(a.cQ,FZ(a,b.ek)+b.eT|0,I(b.gB));}else{c=c.data;d=ALs();B0(d.bI,b.ek,b.eT);e=c.length;if(e==1)B0(d.bz,b.ek,b.eT+I(c[0])|0);else B0(d.bz,(b.ek+e|0)-1|0,I(c[e-1|0]));TR(a,d);S0(a.cQ,FZ(a,b.ek)+b.eT|0,I(b.gB));}return b.kq;}
function OD(a){a.fh=a.cj;}
var EN=F();
function Ly(){EN.call(this);this.vb=null;}
function LW(){EN.call(this);this.vj=null;}
function Pl(){EN.call(this);this.wl=null;}
var H5=F(0);
var Qp=F(0);
function Ga(){var a=this;C.call(a);a.J=0;a.V=0;}
function B0(a,b,c){a.J=b;a.V=c;}
function Wl(a,b){a.J=b.J;a.V=b.V;}
function WP(a,b){var c;c=BD(a.J,b.J);if(c)return c;return BD(a.V,b.V);}
function IL(){var a=this;C.call(a);a.kL=null;a.ls=null;}
function Iu(a){return a.kL.bs;}
function K4(a){return a.kL.bD;}
var J8=F(F1);
var ATa=null;function AGV(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ADb(){var b;b=new J8;W1(b);ATa=b;}
var ACt=F();
function H0(b,c){var d,e,f;if(c<=0)return B(31);d=BQ(c);e=d.data;e[0]=ABj(HQ(b,52));f=1;while(f<c){e[f]=ABj(HQ(b,62));f=f+1|0;}return FK(d);}
function ABj(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var Zm=F();
function ACX(){var a=this;C.call(a);a.CQ=null;a.Ay=null;a.BI=0;a.Bd=0;}
function P_(){var a=this;C.call(a);a.hm=null;a.kw=null;a.eJ=null;a.w4=null;}
function AOE(a,b){var c;if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){c=b;return Dh(a.hm,c.hm)&&Dh(a.kw,c.kw)&&Dh(a.eJ,c.eJ)?1:0;}return 0;}
var ACf=F(0);
function AB0(b){var c;a:{switch(b){case 0:break;case 1:c=B(136);break a;case 2:c=B(245);break a;case 3:c=B(244);break a;default:c=null;break a;}c=B(164);}return c;}
var CO=F();
var AAE=F(CO);
var ABi=F(CO);
var Yu=F(CO);
var YO=F(CO);
var ABN=F(CO);
function ZX(){var a=this;Et.call(a);a.gf=0;a.cF=null;a.ga=0;a.t2=0.0;a.kf=0;}
function HF(){var a=new ZX();AGq(a);return a;}
function AGq(a){var b;b=ACu(16);a.gf=0;a.cF=R(HK,b);a.t2=0.75;TY(a);}
function ACu(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TY(a){a.kf=a.cF.data.length*a.t2|0;}
function M5(a,b){return R3(a,b)===null?0:1;}
function El(a,b){var c;c=R3(a,b);if(c===null)return null;return c.fv;}
function R3(a,b){var c,d;if(b===null)c=Rd(a);else{d=Yc(b);c=Pj(a,b,d&(a.cF.data.length-1|0),d);}return c;}
function Pj(a,b,c,d){var e,f;e=a.cF.data[c];while(e!==null){if(e.kH==d){f=e.hF;if(b!==f&&!Xu(b,f)?0:1)break;}e=e.eO;}return e;}
function Rd(a){var b;b=a.cF.data[0];while(b!==null&&b.hF!==null){b=b.eO;}return b;}
function Sf(a,b,c){var d,e,f;if(b===null){d=Rd(a);if(d===null){a.ga=a.ga+1|0;d=TJ(a,null,0,0);e=a.gf+1|0;a.gf=e;if(e>a.kf)Ua(a);}}else{e=Yc(b);f=e&(a.cF.data.length-1|0);d=Pj(a,b,f,e);if(d===null){a.ga=a.ga+1|0;d=TJ(a,b,f,e);e=a.gf+1|0;a.gf=e;if(e>a.kf)Ua(a);}}b=d.fv;d.fv=c;return b;}
function TJ(a,b,c,d){var e,f,g;e=new HK;f=null;e.hF=b;e.fv=f;e.kH=d;g=a.cF.data;e.eO=g[c];g[c]=e;return e;}
function Ua(a){var b,c,d,e,f,g,h,i;b=a.cF.data.length;b=ACu(!b?1:b<<1);c=R(HK,b);d=c.data;e=0;f=b-1|0;while(true){g=a.cF.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.kH&f;i=h.eO;h.eO=d[b];d[b]=h;h=i;}e=e+1|0;}a.cF=c;TY(a);}
function Yc(b){var c,d,e,f,g,h;c=R(C,2).data;c[0]=FP(b.bs);c[1]=FP(b.bD);d=(-1515898884);e=0;while(e<c.length){b=c[e];if(b===null)f=0;else{g=b.e6;f=(g>>>4|0)^g<<28^g<<8^(g>>>24|0);}h=f^528111840;d=JB(h,4)^((h>>>7|0)|h<<25)^JB(d,13);e=e+1|0;}return d;}
function Cx(){var a=this;C.call(a);a.q=null;a.O=0;a.e2=null;a.dP=null;a.c8=null;a.gA=null;a.fo=0;a.hz=0;a.hc=0;}
var AUz=0;var AUA=0;var AUi=0;function DF(a){var b=new Cx();HH(b,a);return b;}
function HH(a,b){var c,d,e,f;c=b.data;a.q=b;d=0;e=c.length;f=0;while(f<e){d=d+I(c[f].v)|0;f=f+1|0;}a.O=d;D7(a);}
function GG(a,b){var c;c=HX(a,b);return c<=0?0:a.c8.data[c-1|0];}
function HX(a,b){var c,d,e,f;c=a.q.data.length;if(!c)return (-1);if(!(a.c8!==null&&!a.hc)){Vv(a);d=0;e=0;f=a.q.data.length;while(d<f){e=e+I(a.q.data[d].v)|0;a.c8.data[d]=e;d=d+1|0;}a.hc=0;}d=S3(a.c8,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function T0(a,b){var c;c=a.q.data;if(!c.length)return null;return c[HX(a,b)];}
function FI(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.O){a.q=R(B5,0);D7(a);a.O=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.q.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=I(g[e].v);i=I(a.q.data[f].v);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.q.data[f];if(!b&&c==I(k.v)?1:0){g=a.q;a.q=P8(g,e,R(B5,g.data.length-1|0));a.O=a.O-d|0;D7(a);return;}a.q.data[e]=Dw(E3(B8(k.v,0,b),Dc(k.v,c)),k.cx,k.b2);}else{g=a.q.data;l=g[e];m=g[f];if(b){if(b!=
I(l.v))a.q.data[e]=Dw(B8(l.v,0,b),l.cx,l.b2);e=e+1|0;}if(c==I(m.v))f=f+1|0;else if(c)a.q.data[f]=Dw(Dc(m.v,c),m.cx,m.b2);g=a.q;a.q=Zr(g,e,f,R(B5,(g.data.length-f|0)+e|0));}a.O=a.O-d|0;D7(a);}
function H$(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return H(Cx,[DF(R(B5,0)),a]);if(b>=a.O)return H(Cx,[a,DF(R(B5,0))]);c=a.q;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=I(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return H(Cx,[DF(Kj(c,0,R(B5,d))),DF(Kj(c,d,R(B5,f-d|0)))]);h=e[d];e=Kj(c,0,R(B5,d+1|0));i=e.data;j=Kj(c,d,R(B5,f-d|0));c=j.data;i[d]=Dw(B8(h.v,0,b),h.cx,h.b2);c[0]=Dw(Dc(h.v,b),h.cx,h.b2);return H(Cx,[DF(e),DF(j)]);}
function Wi(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.q.data;if(e>=f.length)break a;g=I(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}I1(a,d,b,c);}
function I1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.q;f=e.data;g=f.length;if(!g){h=R(B5,1);h.data[0]=Q1(d);a.q=h;}else if(!b&&!c){i=R(B5,g+1|0);h=i.data;Dp(e,0,i,1,g);h[0]=Q1(d);a.q=i;}else{j=f[b];if(c<=0)k=Dw(E3(d,j.v),j.cx,j.b2);else if(c>=I(j.v))k=Dw(E3(j.v,d),j.cx,j.b2);else{l=I(d);m=l+c|0;n=I(j.v)-c|0;h=BQ(I(j.v)+l|0);i=h.data;o=0;while(o<c){i[o]=L(j.v,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=L(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=L(j.v,g+c|0);g=g+1|0;}k=Dw(FK(h),j.cx,j.b2);}f[b]=k;}a.O=a.O+I(d)|0;D7(a);}
function Wj(a){var b,c,d,e,f,g;b=0;c=a.q.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<I(f.v)){if(L(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function KB(a,b,c){var d,e,f,g,h,i,j;d=a.q.data.length;e=a.e2;if(!(e!==null&&e.data.length>=d)){a.e2=ADs(d);a.dP=BH(d);a.fo=1;}Vv(a);if(!a.fo)AUA=AUA+1|0;else{f=0;g=0.0;AUz=AUz+1|0;h=0;while(h<d){i=c.data;j=a.q.data[h];f=f+I(j.v)|0;a.c8.data[h]=f;Cv(b,i[j.b2]);g=g+Eg(b,j.v);a.e2.data[h]=g;a.dP.data[h]=g+0.5|0;h=h+1|0;}a.O=f;a.fo=0;a.hc=0;}}
function Vv(a){var b;b=a.c8;if(!(b!==null&&b.data.length>=a.q.data.length)){a.c8=BH(a.q.data.length);a.hc=1;}}
function D7(a){a.fo=1;a.hz=1;a.hc=1;a.gA=null;}
function VO(a,b,c,d){var e,f,g,h,i,j,k;if(a.gA===null)a.gA=R($rt_arraycls($rt_intcls()),a.q.data.length);e=a.gA.data[d];if(e===null){e=c.data;f=a.q.data[d];Cv(b,e[f.b2]);f=f.v;e=BH(I(f)-1|0);c=Gi(f);g=!d?0.0:a.e2.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bv;k=i+1|0;LE(f,c,0,k);h[i]=g+Eg(b,f)+0.5|0;i=k;}a.gA.data[d]=e;}return e;}
function GI(a,b,c,d){var e,f,g,h,i;if(a.q.data.length&&b){if(!(!a.fo&&a.dP!==null))KB(a,c,d);if(b>=a.O)return a.dP.data[a.q.data.length-1|0];e=0;f=0;a:{while(true){g=a.q.data;if(f>=g.length)break a;h=e+I(g[f].v)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.dP.data[f];}return (VO(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function EQ(a){var b,c,d;a:{b=a.q.data.length;if(b){c=a.dP.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GD(a,b){var c;if(b>=a.O)return b+1|0;c=HX(a,b);return a.c8.data[c];}
function EB(a){var b,c,d,e;b=new M;FN(b,a.O);c=a.q.data;d=c.length;e=0;while(e<d){BY(b,c[e].v);e=e+1|0;}return N(b);}
function L9(b){var c,d,e,f;c=R(Cx,1);d=c.data;e=new Cx;f=R(B5,1);f.data[0]=Q1(b);HH(e,f);d[0]=e;return c;}
function Xt(){AUi=0;}
var MY=F();
function APn(a){}
function Tm(){C.call(this);this.sv=null;}
function AJX(a){var b;b=a.sv;Bu(By(),b);}
function B5(){var a=this;C.call(a);a.v=null;a.cx=0;a.b2=0;}
function Q1(a){var b=new B5();AOd(b,a);return b;}
function Dw(a,b,c){var d=new B5();Un(d,a,b,c);return d;}
function AOd(a,b){Un(a,b,0,0);}
function Un(a,b,c,d){a.v=b;a.cx=c;a.b2=d;}
function G2(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Ih(){var a=this;C.call(a);a.cz=null;a.dH=0;}
var AUB=null;var AUC=null;function ARB(a){var b=new Ih();Ti(b,a);return b;}
function AQE(a,b){var c=new Ih();W0(c,a,b);return c;}
function Uy(b,c){var d;d=BD(b.bG,c.bG);if(!d)d=BD(c.bK,b.bK);return d;}
function Ti(a,b){W0(a,null,b);}
function W0(a,b,c){var d,e;a.dH=0;if(D4(c))return;No(c,AUB);if(b!==null)a.cz=LY(b);c=BR(c);while(B2(c)){d=BV(c);e=a.cz;if(e!==null){Qb(a,e,LY(d));continue;}a.cz=LY(d);}}
function Ot(a,b){var c;if(b.eB)return b;b=BR(b.br);while(true){if(!B2(b))return null;c=Ot(a,BV(b));if(c!==null)break;}return c;}
function JZ(a,b,c){var d,e,f;d=b.b0;if(d.bG==c.bG&&d.bK==c.bK?1:0){e=BR(b.br);while(B2(e)){f=JZ(a,BV(e),c);if(f!==null)return f;}return b;}b=BR(b.br);while(true){if(!B2(b))return null;d=BV(b);if(Pp(d,c.bG,c.bK)){e=JZ(a,d,c);if(e!==null)break;}}return e;}
function Vw(a,b,c){BX(c,b.b0);b=BR(b.br);while(B2(b)){Vw(a,BV(b),c);}}
function OS(a,b,c){a.dH=0;II(a,a.cz,b,c);}
function II(a,b,c,d){var e;if(C4(b)<c)return;a:{if(CU(b)>c){JX(b,d);FO(b,d);b=BR(b.br);while(B2(b)){II(a,BV(b),c,d);}}else{if(!JG(b,c)){if(a.dH)break a;if(C4(b)!=c)break a;}FO(b,d);if(CU(b)==c&&a.dH)JX(b,d);e=BR(b.br);while(B2(e)){II(a,BV(e),c,d);}if(!a.dH){b.eB=1;a.dH=1;}}}}
function S0(a,b,c){a.dH=0;LC(a,a.cz,b,c);}
function LC(a,b,c,d){var e,f,g,h;if(C4(b)<c)return;e=CU(b);f=c+d|0;if(e>f){e= -d|0;JX(b,e);FO(b,e);g=BR(b.br);while(B2(g)){LC(a,BV(g),c,d);}b.br=M0(a,b.br);}else{g=b.b0;if(c<=g.bG&&g.bK<=f?1:0){if(b!==a.cz){IR(b,(-1));JC(b,(-1));}else{IR(b,0);JC(b,0);}G$(b.br);}else{e=JG(b,c);f=JG(b,f);if(e&&f)FO(b, -d|0);else if(e)JC(b,c);else{if(!f)return;IR(b,c);FO(b, -d|0);}h=BR(b.br);while(B2(h)){LC(a,BV(h),c,d);}b.br=M0(a,b.br);if(!a.dH){b.eB=1;a.dH=1;}}}}
function M0(a,b){var c,d,e,f,g,h;c=Cl();d=null;No(b,AUC);b=BR(b);while(B2(b)){e=BV(b);if(CU(e)==C4(e))continue;if(!e.eB){if(d!==null){BX(c,d);d=null;}BX(c,e);}else if(d===null)d=e;else{f=X(CU(d),CU(e));g=V(C4(d),C4(e));h=LY(Ni(f,g,d.b0.eQ));h.dq=e.dq;h.eB=1;d=h;}}if(d!==null)BX(c,d);return c;}
function Qb(a,b,c){var d,e;a:{if(NT(b,c)){d=BR(b.br);while(true){if(!B2(d)){BX(b.br,c);c.dq=b;break a;}e=BV(d);if(NT(e,c))break;}Qb(a,e,c);return;}}}
function Re(a,b,c,d){var e,f,g,h,i,j;if((C4(c)-CU(c)|0)<43)e=B8(d,CU(c),C4(c));else{e=B8(d,CU(c),CU(c)+20|0);f=B8(d,C4(c)-20|0,C4(c));g=new M;O(g);G(G(G(g,e),B(214)),f);e=N(g);}e=Uh(e,B(221),B(303));f=By();g=Cu(c);h=new M;O(h);i=S(h,b);BA(i,32);g=G(i,g);BA(g,9);G(g,e);Bu(f,N(h));c=BR(c.br);j=b+1|0;while(B2(c)){Re(a,j,BV(c),d);}}
function AA0(){AUB=new Ws;AUC=new Wu;}
function ACx(){var a=this;C.call(a);a.bG=0;a.bK=0;a.eQ=0;}
function Ni(a,b,c){var d=new ACx();AGw(d,a,b,c);return d;}
function AGw(a,b,c,d){a.bG=b;a.bK=c;a.eQ=d;}
function ANB(a,b){var c;if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){c=b;return a.bG==c.bG&&a.bK==c.bK&&a.eQ==c.eQ?1:0;}return 0;}
function AE5(a,b){var c;b=b;c=BD(a.bG,b.bG);if(!c)c=BD(b.bK,a.bK);return c;}
var Ws=F();
function AHE(a,b,c){return Uy(b,c);}
var Wu=F();
function AJg(a,b,c){b=b;c=c;return Uy(b.b0,c.b0);}
var EO=F();
var AUD=null;var AUE=null;var AUF=null;var AUG=null;var AUH=null;var AUI=null;function AAv(){AUD=new UG;AUE=new UE;AUF=new UF;AUG=new UC;AUH=new UD;AUI=new W2;}
var GO=F(FV);
function AKd(a,b){var c;c=new E8;U(c);J(c);}
function WJ(){GO.call(this);this.su=null;}
function AGT(a){return 1;}
function APc(a,b){var c;if(!b)return a.su;c=new Bw;U(c);J(c);}
function Xs(){var a=this;C.call(a);a.b0=null;a.dq=null;a.br=null;a.eB=0;}
function LY(a){var b=new Xs();ALY(b,a);return b;}
function ALY(a,b){a.eB=0;a.b0=b;a.dq=null;a.br=Cl();}
function CU(a){return a.b0.bG;}
function C4(a){return a.b0.bK;}
function IR(a,b){a.b0.bG=b;}
function JC(a,b){a.b0.bK=b;}
function JX(a,b){var c;c=a.b0;c.bG=c.bG+b|0;}
function FO(a,b){var c;c=a.b0;c.bK=c.bK+b|0;}
function JG(a,b){return CU(a)<=b&&b<C4(a)?1:0;}
function Pp(a,b,c){var d;d=a.b0;return d.bG<=b&&c<=d.bK?1:0;}
function NT(a,b){b=b.b0;return Pp(a,b.bG,b.bK);}
function AHK(a){var b,c,d,e,f;b=a.b0;c=b.bG;d=b.bK;e=b.eQ;b=new M;O(b);BA(b,40);BA(S(G(S(G(S(b,c),B(44)),d),B(44)),e),41);b=N(b);c=a.eB;f=new M;O(f);FU(G(G(f,b),B(44)),c);return N(f);}
var N7=F(0);
var F4=F(EE);
var JD=F(F4);
var UG=F(JD);
var KN=F(Et);
var UE=F(KN);
var UF=F(GO);
var Ft=F(0);
var UC=F();
var Oz=F(0);
var UD=F();
var W2=F();
function KK(){var a=this;C.call(a);a.iP=null;a.pR=null;a.r$=null;a.un=null;a.l3=null;a.kW=null;a.qb=null;a.mT=null;a.bg=null;a.nT=null;a.tT=null;}
function AUJ(a,b,c,d,e,f,g,h,i,j,k){var l=new KK();MG(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function MG(a,b,c,d,e,f,g,h,i,j,k,l){var m;m=j.data;a.iP=b;a.pR=c;a.r$=d;a.un=e;a.l3=f;a.kW=g;a.qb=h;a.mT=i;a.nT=j;a.tT=k;if(m.length>=15){a.bg=l;return;}b=new BC;U(b);J(b);}
function MQ(){var a=this;C.call(a);a.ha=0;a.ly=0;a.hZ=0;a.fK=0;a.gk=null;}
function B2(a){return a.ha>=a.hZ?0:1;}
function BV(a){var b,c;Om(a);b=a.ha;a.fK=b;c=a.gk;a.ha=b+1|0;return c.qR(b);}
function PS(a){var b,c,d;if(a.fK<0){b=new DP;U(b);J(b);}Om(a);a.gk.tr(a.fK);a.ly=a.gk.cl;c=a.fK;d=a.ha;if(c<d)a.ha=d-1|0;a.hZ=a.hZ-1|0;a.fK=(-1);}
function Om(a){var b;if(a.ly>=a.gk.cl)return;b=new K_;U(b);J(b);}
var Y8=F();
function UZ(){C.call(this);this.iU=null;}
function ANe(a,b){var c,d,e,f,g;c=a.iU;d=c.jv;if(d!==null){e=b.j;f=e.b-d.b|0;g=e.a-d.a|0;e=c.hR;e.b=ER(0,e.b+f|0,c.gc.b-c.g_.b|0);c=a.iU;d=c.hR;d.a=ER(0,d.a+g|0,c.gc.a-c.g_.a|0);}a.iU.jv=b.j;return 1;}
var Zj=F();
function J0(){var a=this;C.call(a);a.hF=null;a.fv=null;}
function HK(){var a=this;J0.call(a);a.kH=0;a.eO=null;}
function T9(){C.call(this);this.rk=null;}
function AIb(a,b){Hm(a.rk,b);}
function U7(){C.call(this);this.id=null;}
function APs(a){return a.id;}
function Ce(){Cr.call(this);this.kE=null;}
var AUK=null;var AUL=null;var AUM=null;var AUN=null;var AUO=null;var AUP=null;var AUQ=null;var AUR=null;var AUS=null;var AUT=null;var AUU=null;var AUV=null;var AUW=null;var AUX=null;var AUY=null;var ATZ=null;function Yr(){Yr=Bq(Ce);AO4();}
function Dn(a,b,c){var d=new Ce();Sj(d,a,b,c);return d;}
function AO6(a,b,c,d){var e=new Ce();AAD(e,a,b,c,d);return e;}
function Sj(a,b,c,d){Yr();DE(a,b,c);a.kE=Su(d,null);}
function AAD(a,b,c,d,e){Yr();DE(a,b,c);a.kE=Su(d,e);}
function AO4(){var b;b=new Ce;Dq();Sj(b,B(304),0,ATQ);AUK=b;AUL=Dn(B(305),1,Cw(204,120,50));AUM=Dn(B(306),2,Br(B(307)));AUN=Dn(B(48),3,Br(B(308)));AUO=Dn(B(309),4,Br(B(310)));AUP=Dn(B(311),5,Cw(188,63,60));AUQ=Dn(B(312),6,Br(B(313)));AUR=Dn(B(49),7,Br(B(314)));AUS=Dn(B(315),8,Br(B(316)));AUT=AO6(B(317),9,ATQ,Cw(52,65,52));AUU=AO6(B(318),10,Br(B(319)),Br(B(320)));AUV=Dn(B(321),11,Br(B(322)));AUW=Dn(B(323),12,Br(B(324)));AUX=Dn(B(325),13,Br(B(326)));b=Dn(B(327),14,Br(B(328)));AUY=b;ATZ=H(Ce,[AUK,AUL,AUM,AUN,AUO,
AUP,AUQ,AUR,AUS,AUT,AUU,AUV,AUW,AUX,b]);}
function IO(){var a=this;C.call(a);a.rd=null;a.re=null;}
function Su(a,b){var c=new IO();AEL(c,a,b);return c;}
function AEL(a,b,c){a.rd=b;a.re=c;}
function AC4(){var a=this;C.call(a);a.L=null;a.P=null;a.p=null;a.dQ=null;}
function AAm(a){var b=new AC4();APq(b,a);return b;}
function APq(a,b){var c;a.p=AQr();a.L=b;c=new Sv;KP(c);c.k5=new BW;c.gu=b;a.P=c;}
function H9(a,b,c,d){var e,f,g,h;e=a.P;f=Dh(e.gd,c)?0:1;g=Dh(e.gx,b)?0:1;h=d===e.io?0:1;if(f){e.gd=c;e.dy=null;WM(e,0);}e.gj=!f&&!g&&!h?0:1;e.gx=b;e.io=d;e.hh=0;Jo(a);}
function Hk(a){var b;b=a.P;b.cR=CX(b.cR,null);a.p=CX(a.p,null);}
function K6(a,b){var c,d,e;c=a.p;d=c.t;e=c.n;b=CX(c,b);a.p=b;b.is(d,e,a.L.bF);}
function CK(a,b,c){var d;d=a.p;d.is(b,c,d.dz);Jo(a);}
function Jo(a){var b,c,d,e;b=a.P;c=a.p.n.b;b.n.b=c;d=b.cR;if(d!==null&&c!=Cb(d)&&!(c>=b.hh&&Cb(b.cR)>=b.hh))b.gj=1;b=a.P;b.dz=a.L.bF;if(SY(b))c=0;else{b=a.P;PZ(b);e=Ct(b.gu,b.io);WM(b,Eo(b.dy)+(e*2|0)|0);c=b.n.a;}b=a.P.t;d=a.p.t;Y(b,d.b,d.a-c|0);}
function ABq(a,b){var c,d,e,f,g,h,i,j,k,l;if(Fq(a.P,b))return Dv(a.L.cp,null);c=Ct(a.L,7.0);d=Ct(a.L,25.0);e=L_(a,b.a,c);f=UM(a,b.b,c);g=TW(a,b.b,d);h=QT(a,b.a,d);i=f&&OH(a,b.a,c)?1:0;j=e&&Nq(a,b.b,c)?1:0;k=e&&SL(a,b.b,c)?1:0;l=f&&Po(a,b.a,c)?1:0;if(i)return Dv(a.L.cp,g<0?B(329):g<=0?B(166):B(330));if(j)return Dv(a.L.cp,h<0?B(329):h<=0?B(165):B(330));if(k)return Dv(a.L.cp,h<0?B(330):h<=0?B(165):B(329));if(!l)return 0;return Dv(a.L.cp,g<0?B(330):g<=0?B(166):B(329));}
function Nq(a,b,c){var d;d=a.P.t.b;return (d-c|0)<=b&&b<d?1:0;}
function SL(a,b,c){var d,e;d=a.P;e=d.t.b+d.n.b|0;return e<=b&&b<(e+c|0)?1:0;}
function OH(a,b,c){var d;d=a.P.t.a;return (d-c|0)<=b&&b<d?1:0;}
function Po(a,b,c){var d,e;d=a.p;e=d.t.a+d.n.a|0;return e<=b&&b<(e+c|0)?1:0;}
function L_(a,b,c){var d,e,f;d=a.P.t.a-c|0;e=a.p;f=(e.t.a+e.n.a|0)+c|0;return d<=b&&b<f?1:0;}
function QT(a,b,c){var d,e;d=a.P.t.a+c|0;e=a.p;return ABm(b,d,(e.t.a+e.n.a|0)-c|0);}
function UM(a,b,c){var d,e,f;d=a.P;e=d.t.b;f=e-c|0;e=(e+d.n.b|0)+c|0;return f<=b&&b<e?1:0;}
function TW(a,b,c){var d,e;d=a.P;e=d.t.b;return ABm(b,e+c|0,(e+d.n.b|0)-c|0);}
function ABm(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BD(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function TG(a,b){var c,d,e,f,g,h,i,j,k;c=new Z;d=new Z;e=b.b;f=b.a;b=a.p;g=b.t;h=g.a;i=g.b;b=b.n;j=b.a;k=b.b;b=new NY;b.mD=a;b.mE=f;b.mG=h;b.my=j;b.mz=e;b.mA=i;b.mB=k;b.mw=d;b.mx=c;return b;}
function Th(a,b){var c,d,e,f,g,h,i;c=new Z;d=new Z;e=b.b;f=b.a;b=a.p;g=b.t.a;b=b.n;h=b.a;i=b.b;b=new Ww;b.pF=a;b.pG=f;b.pJ=g;b.pK=h;b.pL=e;b.pM=i;b.pH=d;b.pI=c;return b;}
function ND(a,b){var c,d,e,f,g;c=new Z;d=b.b;e=b.a;b=a.p.n;f=b.b;g=b.a;b=new SP;b.l9=a;b.l7=d;b.l_=f;b.l$=e;b.mb=g;b.ma=c;return b;}
function Oe(a,b){var c,d,e,f,g,h,i,j;c=new Z;d=new Z;e=b.b;f=b.a;b=a.p;g=b.n;h=g.b;i=g.a;j=b.t.b;b=new Ph;b.no=a;b.nm=e;b.nn=j;b.nr=h;b.ns=f;b.np=i;b.nq=d;b.nu=c;return b;}
var KT=F(0);
function Ql(){C.call(this);this.on=null;}
function AKE(a,b){return PT(a.on,b);}
function AB2(){var a=this;C.call(a);a.bs=0;a.bD=0;}
function EI(a,b){var c=new AB2();AJl(c,a,b);return c;}
function AJl(a,b,c){a.bs=b;a.bD=c;}
function Xu(a,b){var c;if(a===b)return 1;if(b!==null&&Cm(a)===Cm(b)){c=b;return a.bs==c.bs&&a.bD==c.bD?1:0;}return 0;}
function AL$(a,b){var c;b=b;c=BD(a.bs,b.bs);if(!c)c=BD(a.bD,b.bD);return c;}
function MI(){C.call(this);this.r9=null;}
function AHd(a,b){var c;c=a.r9;Sm(c,EJ(c,b.j));J6(c.r,c.z,c.y);GC(c);}
var X3=F();
function B9(b,c){return C$(b*c);}
var Xf=F();
function ABY(b,c,d,e,f,g){g.b=c.b;g.a=f;BB(b,d.b,d.a,g,e);BB(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;BB(b,d.b,d.a+f|0,g,e);BB(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function ABf(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;BB(b,j,k,i,h);BB(b,j,k,i,h);BB(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;BB(b,l,j,i,h);BB(b,l,j,i,h);BB(b,l+g|0,j+g|0,i,h);}
function Mz(){var a=this;C.call(a);a.bS=null;a.ir=null;a.d8=null;a.dp=0;a.d5=0;a.fY=null;a.fm=null;a.fq=0;}
function R0(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dp;i=Be(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=V(i,e))a:{while(true){if(d<=e){j=d;break a;}En(c);j=d+(-1)|0;b=CZ(d);d=Be(j,a.d5)%a.d8.a|0;FX(a,c,b,a.fq,g);Hy(a.bS,c,0,d);if(!(j%a.dp|0))break;d=j;}}else{En(b);k=a.dp-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FX(a,b,CZ(j),Be(a.d5,k)+a.fq|0,g);k=k+(-1)|0;j=h;}CL(a.bS,b);j=V(i,e);}return j;}k=a.dp;h=Be(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=X(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}En(c);b=CZ((d+f|0)+1|0);j=d+1|
0;d=Be(d,a.d5)%a.d8.a|0;FX(a,c,b,a.fq,g);Hy(a.bS,c,0,d);if(!(j%a.dp|0))break;d=j;}}else{En(b);d=0;while(d<a.dp){h=h+1|0;FX(a,b,CZ((h>e?h-f|0:h)+f|0),Be(a.d5,d)+a.fq|0,g);d=d+1|0;}CL(a.bS,b);j=X(i,e);}return j;}
function Is(a,b,c,d,e,f){Ez(b,a.ir.b+d.b|0,c+d.a|0,a.fY,a.fm,a.bS,e,f,0.0);}
function FX(a,b,c,d,e){Cf(b,c,a.d8.b-20.0*e,d);}
var FC=F(HY);
var V_=F(Ey);
function Pt(){C.call(this);this.ml=null;}
function ALx(a,b){var c,d;c=a.ml;d=c.de+1|0;c.de=d;c=new M;O(c);G(G(S(c,d),B(331)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Td(){C.call(this);this.o9=null;}
function AN2(a){var b,c;b=a.o9;c=new M;O(c);G(G(G(c,B(332)),b),B(333));$rt_globals.console.info($rt_ustr(N(c)));}
var Xw=F();
function Hb(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function X9(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
var K_=F(Bm);
var Lp=F(DL);
var AUZ=0.0;var AU0=null;function AA1(){AUZ=$rt_globals.NaN;AU0=E($rt_floatcls());}
var Fp=F();
var AS2=null;var AS4=null;var AS5=null;var AS3=null;var AS1=null;function ZR(){AS2=EW([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AS4=AFb([Bd(1),Bd(10),Bd(100),Bd(1000),Bd(10000),Bd(100000),Bd(1000000),Bd(10000000),Bd(100000000),Bd(1000000000),B_(1410065408, 2),B_(1215752192, 23),B_(3567587328, 232),B_(1316134912, 2328),B_(276447232, 23283),B_(2764472320, 232830),B_(1874919424, 2328306),B_(1569325056, 23283064),B_(2808348672, 232830643)]);AS5=AFb([Bd(1),Bd(10),Bd(100),Bd(10000),Bd(100000000),
B_(1874919424, 2328306)]);AS3=new Tc;AS1=new UA;}
var Js=F();
var AU1=null;var AU2=null;function AAw(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_floatToIntBits(b);c.ne=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.j3=0;c.jK=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(E2(CS(Bd(e),Bd(8388608)),Ee)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AAC(AU2,f);if(h<0)h=( -h|0)-2|0;i=AU2.data;j=9+(f-i[h]|0)|0;k=Bd(e);l=AU1.data;m=Ew(DW(BM(k,Bd(l[h])),32-j|0));if(m>=1000000000){h=h+1|0;j=9+(f-i[h]|0)|0;m=Ew(DW(BM(k,Bd(l[h])),32-j|0));}g=(31-j|0)-g|0;n=g>=0?l[h]>>>g|0:l[h]<<
( -g|0);o=(n+1|0)>>1;p=n>>1;if(e==4194304)p=p>>2;q=10;while(q<=p){q=q*10|0;}if((m%q|0)>=(p/2|0))q=q/10|0;r=10;while(r<=o){r=r*10|0;}if((r-(m%r|0)|0)>(o/2|0))r=r/10|0;e=BD(q,r);e=e>0?Be(m/q|0,q):e<0?Be(m/r|0,r)+r|0:Be((m+(r/2|0)|0)/r|0,r);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.j3=e;c.jK=h-50|0;}
function Y3(){var b,c,d,e,f,g,h,i;AU1=BH(100);AU2=BH(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AU1.data;g=d+50|0;f[g]=$rt_udiv(e,20);AU2.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Ew(Co(Bd(h),Ge(BM(Bd(b&((1<<i)-1|0)),Bd(10)),i)));f=AU1.data;i=(50-d|0)-1|0;f[i]=$rt_udiv(b,20);AU2.data[i]=c;d=d+1|0;}}
function UA(){var a=this;C.call(a);a.j3=0;a.jK=0;a.ne=0;}
function Li(){var a=this;C.call(a);a.va=null;a.lX=0.0;a.vv=0.0;a.ev=null;a.gs=null;a.le=null;a.eD=0;}
function ACh(a,b){var c;if(b!==null){a.gs=b;return a;}c=new BC;Bl(c,B(334));J(c);}
function AAJ(a,b){var c;if(b!==null){a.le=b;return a;}c=new BC;Bl(c,B(334));J(c);}
function O_(a,b,c,d){var e,f,g,$$je;e=a.eD;if(!(e==2&&!d)&&e!=3){a.eD=d?2:1;while(true){try{f=ACj(a,b,c);}catch($$e){$$je=D8($$e);if($$je instanceof Bm){g=$$je;J(AF2(g));}else{throw $$e;}}if(GP(f))return f;if(HM(f)){if(d&&DD(b)){g=a.gs;GS();if(g===ATB)return DQ(B4(b));if(B4(c)<=I(a.ev))return ATE;Ex(b,b.R+B4(b)|0);if(a.gs===ATC)Jw(c,a.ev);}return f;}if(PG(f)){g=a.gs;GS();if(g===ATB)return f;if(g===ATC){if(B4(c)<I(a.ev))return ATE;Jw(c,a.ev);}Ex(b,b.R+JA(f)|0);}else if(Lf(f)){g=a.le;GS();if(g===ATB)break;if(g
===ATC){if(B4(c)<I(a.ev))return ATE;Jw(c,a.ev);}Ex(b,b.R+JA(f)|0);}}return f;}b=new DP;U(b);J(b);}
function Ye(a,b){var c,d,e,f;c=a.eD;if(c&&c!=3){b=new DP;U(b);J(b);}if(!B4(b))return ACL(0);if(a.eD)a.eD=0;d=ACL(V(8,B4(b)*a.lX|0));while(true){e=O_(a,b,d,0);if(HM(e))break;if(GP(e))d=RF(a,d);if(!J7(e))continue;Uv(e);}b=O_(a,b,d,1);if(J7(b))Uv(b);while(true){f=a.eD;if(f!=3&&f!=2)break;a.eD=3;if(HM(ATF)){d.c9=d.R;d.R=0;d.gW=(-1);return d;}d=RF(a,d);}b=new DP;U(b);J(b);}
function RF(a,b){var c,d,e;c=b.gN;d=XM(c,V(8,c.data.length*2|0));e=Z3(d,0,d.data.length);Ex(e,b.R);return e;}
function MT(){C.call(this);this.tY=null;}
function ALR(a,b){DH(a.tY,b);}
function UR(){C.call(this);this.n8=null;}
function APG(a,b){var c,d;c=a.n8;d=c.de+1|0;c.de=d;c=b.g2;b=new M;O(b);G(G(S(b,d),B(335)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var ZA=F(CO);
function VZ(){C.call(this);this.na=null;}
function AJG(a){PJ(a.na);}
function Qs(){C.call(this);this.mk=null;}
function AH6(a){M1(a.mk);}
function Tc(){var a=this;C.call(a);a.kC=Ee;a.ju=0;a.mR=0;}
var DP=F(Bm);
var AAW=F(Ey);
function AF2(a){var b=new AAW();AKe(b,a);return b;}
function AKe(a,b){a.iB=1;a.i4=1;a.kn=b;}
var PB=F();
function AOI(a,b){AA2(b);}
function T7(){var a=this;C.call(a);a.uU=null;a.uT=null;}
function M6(){var a=this;C.call(a);a.sm=null;a.so=null;a.sn=0;}
function AD2(a,b){var c,d,e;c=a.sm;d=a.so;e=a.sn;d.l(Wv(c,(b.j.b+e|0)-c.dx.b|0));}
function M4(){var a=this;C.call(a);a.pf=null;a.pe=null;a.pg=0;}
function AF3(a,b){var c,d,e;c=a.pf;d=a.pe;e=a.pg;d.l(NP(c,(b.j.a+e|0)-c.dx.a|0));}
function SK(){C.call(this);this.o3=null;}
function AOT(a,b){var c,d,e;c=a.o3;if(c.e.g.cj==c.kr){b=b.data;d=Em(b[0]);e=Fy(b[1]);Z8(c.e.g,d,e);OD(c.e.g);}}
function JO(){var a=this;Li.call(a);a.nv=null;a.rr=null;}
function ACj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.nv;e=0;f=0;g=a.rr;a:{b:{while(true){if((e+32|0)>f&&DD(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B4(b)+k|0;h=j.length;f=X(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new Bw;c=new M;O(c);S(G(S(G(c,B(336)),l),B(95)),h);Bl(b,N(c));J(b);}if(B4(b)<m){b=new K9;U(b);J(b);}if(m<0){b=new Bw;c=new M;O(c);G(S(G(c,B(96)),m),B(97));Bl(b,N(c));J(b);}n=b.R;h=n+b.kg|0;e=0;while(e<m){o=k+1|0;i=b.kV.data;l=h+1|0;j[k]=i[h];e=e+
1|0;k=o;h=l;}b.R=n+m|0;e=0;}if(!DD(c)){p=!DD(b)&&e>=f?ATF:ATE;break a;}i=g.data;n=B4(c);o=i.length;n=X(n,o);q=new Uf;q.qn=b;q.sq=c;p=ACv(a,d,e,f,g,0,n,q);e=q.tH;if(p===null&&0==q.jw)p=ATF;k=q.jw;h=0;if(c.lF){b=new Ir;U(b);J(b);}if(B4(c)<k)break;if(h>o){b=new Bw;c=new M;O(c);BA(S(G(S(G(c,B(98)),h),B(92)),o),41);Bl(b,N(c));J(b);}l=h+k|0;if(l>o){b=new Bw;c=new M;O(c);S(G(S(G(c,B(100)),l),B(95)),o);Bl(b,N(c));J(b);}if(k<0){b=new Bw;c=new M;O(c);G(S(G(c,B(96)),k),B(97));Bl(b,N(c));J(b);}o=c.R;m=0;while(m<k){l=o+
1|0;n=h+1|0;Rm(c,o,i[h]);m=m+1|0;o=l;h=n;}c.R=c.R+k|0;if(p!==null)break a;}b=new Hv;U(b);J(b);}b=new Bw;c=new M;O(c);BA(S(G(S(G(c,B(98)),k),B(92)),h),41);Bl(b,N(c));J(b);}Ex(b,b.R-(f-e|0)|0);return p;}
var SA=F(JO);
function ACv(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(JR(h,2))break a;i=ATF;break a;}c=k+1|0;n=j[k];if(!Fv(a,n)){c=c+(-2)|0;i=DQ(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(JR(h,3))break a;i=ATF;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Fv(a,n))break b;if(!Fv(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Lo(p)){c=k+(-3)|0;i=DQ(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DQ(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(JR(h,4))break a;i=ATF;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B4(h.sq)<2?0:1)break a;i=ATE;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Fv(a,n))break c;if(!Fv(a,o))break c;if(!Fv(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=HE(r);m=c+1|0;j[c]=Ia(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=DQ(1);break a;}c=k+(-3)|0;i
=DQ(1);}h.tH=c;h.jw=f;return i;}
function Fv(a,b){return (b&192)!=128?0:1;}
function O8(){C.call(this);this.q9=null;}
function AE8(a,b){var c,d;c=a.q9;d=c.de+1|0;c.de=d;c=new M;O(c);G(G(S(c,d),B(337)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Uo(){C.call(this);this.w8=null;}
function AKY(a){Bu(By(),B(338));}
function PK(){C.call(this);this.mJ=null;}
function ADo(a,b){a.mJ.l(Fs(b));}
function TK(){C.call(this);this.rt=null;}
function APf(a,b){a.rt.s();}
function Sw(){var a=this;C.call(a);a.v3=null;a.v4=null;a.v1=0;a.v2=0;}
function Rj(){C.call(this);this.tB=null;}
function AEi(a,b){var c,d,e,f;c=a.tB;d=Cu(b);e=new M;O(e);G(G(e,B(339)),d);$rt_globals.console.info($rt_ustr(N(e)));d=new RE;d.vo=c;d.oG=b;e=new RD;e.uj=c;f=new TE;f.ve=e;e=new UV;e.nf=d;c=b.eC;if(c!==null)c.arrayBuffer().then(Bk(e,"f"),Bk(f,"f"));else{b=b.gh.getFile();c=new UY;c.sj=e;c.sk=f;b.then(Bk(c,"f"),Bk(f,"f"));}}
function Ri(){C.call(this);this.vR=null;}
function AEY(a,b){var c;b=Cu(b);c=new M;O(c);G(G(c,B(340)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Z6=F();
var QE=F();
function AHr(a,b){b=b;b.bS=CX(b.bS,null);}
function R2(){C.call(this);this.lQ=null;}
function AJu(a){DB(a.lQ);}
var Jm=F(DL);
var AU3=0.0;var AU4=null;function Yl(){AU3=$rt_globals.NaN;AU4=E($rt_doublecls());}
var KQ=F();
var AU5=null;var AU6=null;function ZO(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.mR=E2(CS(d,B_(0, 2147483648)),Ee)?0:1;e=CS(d,B_(4294967295, 1048575));f=Ew(Ge(d,52))&2047;if(E2(e,Ee)&&!f){c.kC=Ee;c.ju=0;return;}g=0;if(f)e=AQO(e,B_(0, 1048576));else{e=Fb(e,1);while(E2(CS(e,B_(0, 1048576)),Ee)){e=Fb(e,1);f=f+(-1)|0;g=g+1|0;}}h=AAC(AU6,f);if(h<0)h=( -h|0)-2|0;i=12+(f-AU6.data[h]|0)|0;j=Qn(e,AU5.data[h],i);if(YN(j,B_(2808348672, 232830643))){h=h+1|0;i=12+(f-AU6.data[h]|0)|0;j=Qn(e,AU5.data[h],
i);}k=DW(AU5.data[h],(63-i|0)-g|0);l=Ge(Co(k,Bd(1)),1);m=Ge(k,1);if(E2(e,B_(0, 1048576)))m=Ge(m,2);n=Bd(10);while(OT(n,m)){n=BM(n,Bd(10));}if(YN(L7(j,n),Di(m,Bd(2))))n=Di(n,Bd(10));o=Bd(1);while(OT(o,l)){o=BM(o,Bd(10));}if(AGc(JP(o,L7(j,o)),Di(l,Bd(2))))o=Di(o,Bd(10));f=AQ$(n,o);e=f>0?BM(Di(j,n),n):f<0?Co(BM(Di(j,o),o),o):BM(Di(Co(j,Di(o,Bd(2))),o),o);if(YN(e,B_(2808348672, 232830643))){h=h+1|0;e=Di(e,Bd(10));}else if(AGu(e,B_(1569325056, 23283064))){h=h+(-1)|0;e=BM(e,Bd(10));}c.kC=e;c.ju=h-330|0;}
function Qn(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=CS(b,Bd(65535));f=CS(DW(b,16),Bd(65535));g=CS(DW(b,32),Bd(65535));h=CS(DW(b,48),Bd(65535));i=CS(c,Bd(65535));j=CS(DW(c,16),Bd(65535));k=CS(DW(c,32),Bd(65535));l=CS(DW(c,48),Bd(65535));m=Co(Co(BM(k,e),BM(j,f)),BM(i,g));n=Co(Co(Co(BM(l,e),BM(k,f)),BM(j,g)),BM(i,h));o=Co(Co(Fb(BM(l,h),32+d|0),Fb(Co(BM(l,g),BM(k,h)),16+d|0)),Fb(Co(Co(BM(l,f),BM(k,g)),BM(j,h)),d));return Co(d>16?Co(o,Fb(n,d-16|0)):Co(o,DW(n,16-d|0)),DW(m,32-d|0));}
function Zs(){var b,c,d,e,f,g,h,i,j,k;AU5=AR3(660);AU6=BH(660);b=B_(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AU5.data;g=d+330|0;f[g]=Fw(e,Bd(80));AU6.data[g]=c;e=Fw(e,Bd(10));h=MK(e,Bd(10));while(OT(e,b)&&E2(CS(e,B_(0, 2147483648)),Ee)){e=Fb(e,1);c=c+1|0;h=Fb(h,1);}e=Co(e,Di(h,Bd(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(AGc(e,B_(3435973836, 214748364))){e=Ge(e,1);j=j+1|0;d=d+(-1)|0;}k=BM(e,Bd(10));b=j<=0?k:Co(k,Ge(BM(CS(b,Bd((1<<j)-1|0)),Bd(10)),j));f=AU5.data;g=(330-i|0)-1|0;f[g]=Fw(b,
Bd(80));AU6.data[g]=d;i=i+1|0;}}
function L5(){C.call(this);this.rE=null;}
function AP6(a,b){var c,d;c=a.rE;d=new Bm;Bl(d,$rt_str(b.message));c.l(d);}
function Oj(){var a=this;C.call(a);a.lY=null;a.lZ=null;}
function ADX(a,b,c,d){var e,f,g,h;b=a.lY;e=a.lZ;Sq(b,e);if(LO(d)){f=d.c6;g=e.cy;c=e.eo;h=new Z;f=f.N;YL(h,(f.b-(g*3|0)|0)-c|0,(f.a-g|0)-c|0);SC(b,h,d.jR,e);}}
function SZ(){var a=this;C.call(a);a.qg=0;a.lS=0;}
function FB(a,b){return OW(a.qg,b,a.lS);}
function EA(){var a=this;C.call(a);a.t=null;a.n=null;a.dz=0.0;}
function AQr(){var a=new EA();KP(a);return a;}
function KP(a){a.t=new Z;a.n=new Z;}
function ALa(a){}
function AOK(a){return B3(0,0);}
function O6(a,b,c,d){var e;if(!Kv(a.n,c)){a.jA(c);C1(a.n,c);}if(!Kv(a.t,b)){a.jI(b);C1(a.t,b);}e=a.dz;if(e!==d){a.dz=d;a.oV(e,d);}}
function Fq(a,b){return Hb(b,a.t,a.n);}
function Yf(a,b){var c,d,e,f;c=a.t;d=c.b;e=c.a;f=a.n;EH();BB(b,d,e,f,AT$);}
function US(a,b){var c;c=a.t;Ub(b,c.b,c.a,a.n);}
function ANY(a,b){return 0;}
function AGJ(a,b){}
function ANF(a,b){}
function APN(a,b,c){}
function AOb(a,b,c,d){return 0;}
function ANu(a,b,c){return null;}
function AOy(a,b,c){return 0;}
function AKy(a,b){return 0;}
function AGB(a,b,c,d){return 0;}
function Gp(){var a=this;EA.call(a);a.cs=null;a.b$=null;}
function AU7(){var a=new Gp();SN(a);return a;}
function SN(a){KP(a);a.cs=new Z;a.b$=new Z;}
function ACM(a){var b;b=a.b$;b.b=VL(a,b.b);b=a.b$;b.a=PY(a,b.a);}
function Uc(a,b){a.b$.b=VL(a,b);}
function ZN(a,b){a.b$.a=PY(a,b);}
function PY(a,b){return V(0,X(b,a.cs.a-a.n.a|0));}
function VL(a,b){return V(0,X(b,a.cs.b-a.n.b|0));}
function PW(){var a=this;Gp.call(a);a.ee=null;a.c_=null;a.gn=null;a.eR=null;a.dC=null;a.dj=null;a.dR=null;a.gI=null;a.c5=0;a.fZ=0;a.lT=null;a.ej=0;a.em=0;a.hY=0;a.gC=0;a.he=0;a.j4=null;a.hv=null;a.pX=null;a.jt=null;}
function AR7(a,b){var c=new PW();Za(c,a,b);return c;}
function Za(a,b,c){SN(a);a.c_=AJp();a.gn=new Z;a.eR=new Z;a.dj=AU8;a.dR=R(Hz,0);a.ej=0;a.em=0;a.hY=0;a.gC=0;a.he=0;a.j4=new Z;a.hv=ACA(0);a.ee=b;a.pX=c;a.lT=c;a.c5=B9(2.0,b.bF);}
function Vl(a){return a.dj.data.length?0:1;}
function U2(a,b){N0(a);a.dj=b;}
function N0(a){Y(a.gn,0,0);}
function U0(a,b){a.dC=b;a.hv=ACA(Eo(b));a.fZ=C$(b.lo);N0(a);}
function AFN(a,b,c){Sn(a);a.c5=B9(2.0,a.ee.bF);}
function AIS(a,b){ZN(a,b);}
function AIj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=H_(a.ee);if(Vl(a))return;BI(a.dC);Cv(c,a.dC);d=Eo(a.dC);e=AC6(c,a.fZ);f=X(H8(a.c_.x.a,d),a.dj.data.length)+30|0;g=0;a.gC=X((a.b$.a+a.c5|0)/(GT(a)+a.c5|0)|0,a.dj.data.length-1|0);a.he=X((((a.b$.a+a.c_.x.a|0)-1|0)+a.c5|0)/(GT(a)+a.c5|0)|0,a.dj.data.length-1|0);if(a.dR.data.length<=0)g=1;else{h=a.gC;a:{b:{while(h<=a.he){i=IJ(a,h);if(i===null)break b;if(i.e5!==a.dj.data[h])break b;h=h+1|0;}break a;}g=1;}}j=a.jt.nE;if(g){a.dR=ALZ(f,a.dR,a.gC,
a.he,a.dj,a.hv,j,e);C1(a.gn,Wx(a.hv));AAN(a,a.ee.cT);}k=a.gn;if(!Be(k.b,k.a))return;if(!a.dR.data.length)return;US(a,b);l=j.pW;k=a.t;BB(b,k.b,k.a,a.n,l);m=a.c5;k=a.c_.N;n=k.b;o=k.a;p=M9(a,a.j4);q=a.gC;r=n+m|0;while(q<=a.he){i=IJ(a,q);s=Be(q,GT(a));h=q+1|0;t=s+Be(h,a.c5)|0;s=r+a.ej|0;u=s+a.em|0;v=p!=q?0:1;w=(o+t|0)-a.b$.a|0;k=!v?l:j.qO;Ez(b,r,w,i.go,i.im,a.gI,j.nX,k,0.0);Ez(b,s,w,i.gT,i.hy,a.gI,j.sJ,k,0.0);Ez(b,u,w,i.gZ,i.h4,a.gI,j.tE,k,0.0);s=i.go.b;x=r+s|0;Y(a.eR,V(0,a.ej-s|0),i.go.a);BB(b,x,w,a.eR,k);y=r+
a.ej|0;s=i.gT.b;y=y+s|0;Y(a.eR,V(0,a.em-s|0),i.gT.a);BB(b,y,w,a.eR,k);s=i.gZ.b;z=u+s|0;Y(a.eR,V(0,(((a.c_.x.b-s|0)-a.em|0)-a.ej|0)-(a.c5*2|0)|0),i.gZ.a);BB(b,z,w,a.eR,k);q=h;}K0(b);}
function AAN(a,b){var c,d,e,f,g,h,i,j,k;c=a.gn;c=CJ(b,c.b+150|0,c.a);Cv(c,a.dC);d=a.dC;e=d.db;f=e-(e+d.dT)/16.0;g=a.dR.data;h=g.length;i=0;while(i<h){j=g[i];if(j!==null){d=j.e5.i5;k=j.im;Cf(c,d,k.bh+a.fZ,f+k.bu);d=j.e5.hT;k=j.hy;Cf(c,d,k.bh+a.fZ,f+k.bu);d=j.e5.h7;k=j.h4;Cf(c,d,k.bh+a.fZ,f+k.bu);}i=i+1|0;}b=CX(a.gI,CR(b));a.gI=b;CL(b,c);FE(c);}
function IJ(a,b){var c;c=a.dR.data;return c[b%c.length|0];}
function AJs(a,b){C1(a.c_.x,b);}
function AGk(a,b){Y(a.c_.N,b.b,b.a);}
function Yw(a){var b,c,d;b=(a.ej+a.em|0)+a.hY|0;c=GT(a);d=a.dj.data.length;c=Be(c,d)+Be(a.c5,d+1|0)|0;Y(a.cs,b,c);}
function Sn(a){var b,c,d,e,f,g,h,i,j;b=H_(a.ee);if(Vl(a))return;BI(a.dC);Cv(b,a.dC);c=AC6(b,a.fZ);d=a.dj.data;e=d.length;f=0;while(f<e){g=d[f];h=Jd(c,g.i5);i=Jd(c,g.hT);j=Jd(c,g.h7);a.ej=V(a.ej,h);a.em=V(a.em,i);a.hY=V(a.hY,j);f=f+1|0;}}
function AOS(a,b){C1(a.j4,b.j);return Ei(a.c_,a.t)&&GY(a.ee.cp)?1:0;}
function ADS(a,b,c){if(!Ei(a.c_,b.j)&&!Lk(a.c_)){b=a.lT;if(b!==null)b.s();}return null;}
function AD8(a,b,c,d){var e,f;if(d==1){e=M9(a,b.j);if(e>=0){f=IJ(a,e);a.pX.s();f.e5.lW.s();}}return 1;}
function M9(a,b){var c,d,e;if(!a.dR.data.length)return (-1);c=GT(a);d=(b.a-a.t.a|0)+a.b$.a|0;e=a.c5;return (d+e|0)/(c+e|0)|0;}
function GT(a){return Eo(a.dC);}
var Mp=F();
function AEe(a){}
function Zg(){var a=this;EA.call(a);a.kS=null;a.qP=null;a.s4=null;a.bH=null;a.dm=null;a.dr=null;a.rF=0.0;}
function Yh(a,b){var c=new Zg();AOH(c,a,b);return c;}
function AOH(a,b,c){var d;KP(a);d=new S5;d.ny=a;a.qP=d;d=new S6;d.qC=a;a.s4=d;a.rF=10.0;a.bH=b;a.kS=c.cp;}
function AFT(a,b,c,d){var e;O6(a,b,c,d);O6(a.bH,b,c,d);if(d!==0.0){a.bH.tF();ACM(a.bH);e=a.n.b;if(e>0&&a.bH.cs.b>e?1:0)JM(a);else a.dr=null;e=a.n.a;if(e>0&&a.bH.cs.a>e?1:0)Kn(a);else a.dm=null;}}
function JM(a){var b,c,d,e,f,g;b=a.dr;if(b===null){b=G6();a.dr=b;}c=a.bH;d=c.b$.b;e=a.t;f=e.b;g=a.n;LJ(b,d,f,g.b,c.cs.b,e.a+g.a|0,I6(a));}
function Kn(a){var b,c,d,e,f,g;b=a.dm;if(b===null){b=G6();a.dm=b;}c=a.bH;d=c.b$.a;e=a.t;f=e.a;g=a.n;H1(b,d,f,g.a,c.cs.a,e.b+g.b|0,I6(a));}
function I6(a){return B9(a.rF,a.dz);}
function ANb(a,b){var c;a.bH.ex(b);if(!(a.dm===null&&a.dr===null)){CI(b,1);c=a.dm;if(c!==null)FM(c,b);c=a.dr;if(c!==null)FM(c,b);c=a.dm;if(c!==null)F5(c,b);c=a.dr;if(c!==null)F5(c,b);CI(b,0);}}
function Mg(a,b){var c,d;a:{b:{c=a.dm;if(!(c!==null&&Ig(c,b))){c=a.dr;if(c===null)break b;if(!Ig(c,b))break b;}d=1;break a;}d=0;}return d;}
function AHR(a,b,c,d){return !Mg(a,b.j)&&!a.bH.cm(b,c,d)?0:1;}
function AOe(a,b,c){var d,e;d=a.dm;if(d!==null){e=E6(d,b.j,a.qP,1);if(e!==null)return e;}d=a.dr;if(d!==null){e=E6(d,b.j,a.s4,0);if(e!==null)return e;}return a.bH.ip(b,c);}
function AHt(a,b,c){return Mg(a,b.j)?1:0;}
function AIJ(a,b){var c,d,e;c=a.dm;d=c!==null&&Fe(c,b.j,a.kS)?1:0;c=a.dr;e=c!==null&&Fe(c,b.j,a.kS)?1:0;return !d&&!e&&!a.bH.bX(b)?0:1;}
function ANo(a,b,c,d){var e,f;if(!Fq(a,b.j))return 0;e=B9(d*0.25,a.dz);f=B9(c*0.25,a.dz);if(b.bx){f=f+e|0;e=0;}if(a.dm!==null&&e){b=a.bH;b.j0(b.b$.a+e|0);Kn(a);}if(a.dr!==null&&f){b=a.bH;Uc(b,b.b$.b+f|0);JM(a);}return 1;}
function AKV(a){var b,c;b=I6(a);c=a.bH.cW();c.b=V(c.b,b);c.a=V(c.a,b);return c;}
function U5(){var a=this;Gp.call(a);a.ht=null;a.kM=null;a.ro=null;a.o6=0.0;}
function ALz(a){var b,c;b=a.cs;c=a.n;Y(b,c.b*3|0,c.a*5|0);}
function AJw(a){var b;b=B9(20.0,a.dz);return B3(b,b);}
function AIl(a,b){var c,d,e,f;c=a.ro;d=c.sg;e=c.sh;c=c.sf;b=Cu(b);f=new M;O(f);G(G(G(f,c),B(36)),b);H9(e,N(f),d.sd,3.0);}
function AGd(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;Yf(a,b);US(a,b);c=B9(30.0,a.dz);d=a.b$;e=d.b;f=Be(e/c|0,c);g=d.a;h=Be(g/c|0,c);d=a.n;i=Be(((e+d.b|0)-1|0)/c|0,c);e=Be(((g+d.a|0)-1|0)/c|0,c);d=a.kM;d.a=c;d.b=c;a.ht.bv=1.0;while(h<=e){g=a.t.a-a.b$.a|0;j=f;while(j<=i){k=a.t.b-a.b$.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AB_(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;VX(n,0.75,a.o6,a.ht);BB(b,k+j|0,g+h|0,a.kM,a.ht);j=j+c|0;}h=h+c|0;}K0(b);}
function AIY(a,b){}
function OI(){var a=this;C.call(a);a.sg=null;a.sh=null;a.sf=null;}
function WF(){C.call(this);this.kJ=null;}
var AU8=null;function ALH(){var a=new WF();YK(a);return a;}
function YK(a){a.kJ=Cl();}
function Mq(a,b,c,d,e){var f;f=new IV;f.lW=e;f.hT=c;f.h7=d;f.i5=b;BX(a.kJ,f);}
function PV(a){return Hn(a.kJ,AU8);}
function UN(b){var c,d;if(b===null)b=B(31);else{c=b.eJ;if(c===null)b=B(31);else{d=OU(c,B(341),I(c));b=d==(-1)?b.eJ:Dc(b.eJ,d+1|0);}}return b;}
function Zk(){AU8=R(IV,0);}
function Hz(){var a=this;C.call(a);a.im=null;a.hy=null;a.h4=null;a.go=null;a.gT=null;a.gZ=null;a.e5=null;}
function ALZ(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;a:{j=c.data;k=R(Hz,b);l=j.length;if(l<=0){if(b<=0)break a;m=k.data;while(true){if(d>e)break a;m[d%m.length|0]=WL(f.data[d],h,g,i);d=d+1|0;}}m=k.data;while(d<=e){n=f.data[d];o=d%m.length|0;p=d%l|0;q=j[p];if(q!==null&&q.e5!==n){ACF(g,q);m[o]=WL(n,h,g,i);j[p]=null;}else if(q!==null&&m[o]===null){m[o]=q;j[p]=null;}else m[o]=WL(n,h,g,i);d=d+1|0;}}d=0;while(d<l){r=j[d];if(r!==null){ACF(g,r);j[d]=null;}d=d+1|0;}return k;}
function WL(b,c,d,e){var f;f=new Hz;f.go=new Z;f.gT=new Z;f.gZ=new Z;f.e5=b;c=G0(d,b.i5,e);f.im=c;Y(f.go,c.be|0,c.bv|0);c=G0(d,b.hT,e);f.hy=c;Y(f.gT,c.be|0,c.bv|0);b=G0(d,b.h7,e);f.h4=b;Y(f.gZ,b.be|0,b.bv|0);return f;}
function ACF(b,c){HO(b,c.im);HO(b,c.hy);HO(b,c.h4);}
function Sv(){var a=this;EA.call(a);a.gu=null;a.gx=null;a.gd=null;a.dy=null;a.io=0.0;a.gj=0;a.hh=0;a.cR=null;a.k5=null;}
function K7(a){var b;b=a.n;return b.b&&b.a?0:1;}
function SY(a){var b,c;a:{if(a.gd!==null){b=a.gx;if(b!==null&&!Fd(b)){c=0;break a;}}c=1;}return c;}
function WM(a,b){a.n.a=b;}
function Ox(a,b,c,d,e){var f,g;f=a.gu.jJ;Y(f,d,a.n.a);g=a.t;BB(b,g.b+c|0,g.a,f,e);}
function PZ(a){if(a.dy===null)a.dy=Gz(a.gu,a.gd);}
function S5(){C.call(this);this.ny=null;}
function AJ5(a,b){var c,d;c=a.ny;d=FB(b,c.bH.cs.a-c.n.a|0);c.bH.j0(d);Kn(c);}
function S6(){C.call(this);this.qC=null;}
function AH_(a,b){var c,d;c=a.qC;d=FB(b,c.bH.cs.b-c.n.b|0);Uc(c.bH,d);JM(c);}
var Q3=F(DL);
var AU9=null;function Fw(b,c){return Long_udiv(b, c);}
function MK(b,c){return Long_urem(b, c);}
function KA(b,c){return Long_ucompare(b, c);}
function Zq(){AU9=E($rt_longcls());}
function SW(){var a=this;C.call(a);a.n1=null;a.n2=null;a.n0=null;}
function ANx(a){var b,c,d,e,f;b=a.n1;c=a.n2;d=a.n0;e=By();f=new M;O(f);b=G(f,b);BA(b,9);b=G(b,c);BA(b,9);G(b,d);Bu(e,N(f));}
function IV(){var a=this;C.call(a);a.lW=null;a.hT=null;a.h7=null;a.i5=null;}
var E8=F(Bm);
function MW(){var a=this;C.call(a);a.md=null;a.o7=null;a.ss=0;a.tz=0;}
function K2(a,b){return B4(a.o7)<b?0:1;}
var AB5=F();
function TC(b,c,d,e){var f,g;f=b.next();g=new Wo;g.ms=b;g.mr=c;g.mv=d;g.mt=e;f.then(Bk(g,"f"),Bk(d,"f"));}
function XP(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ACw(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(DX()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Wk;f.pO=b;f.pP=d;d.addEventListener("change",Bk(f,"handleEvent"));d.click();}
function XW(b,c){var d;if(c.isFile?1:0)b.l(Xn(c.file()));else{c=c.createReader();d=new V$;d.sF=b;c.readEntries(Bk(d,"f"));}}
function RT(){var a=this;C.call(a);a.bp=null;a.gS=null;a.U=null;}
function H7(a){return a.gS.eV.ib;}
function Nn(a){var b;b=new Oo;b.o5=a;return b;}
function AC_(a){var b,c,d,e,f,g;b=R(C5,4);c=b.data;d=a.U.bk.bg.X;e=a.bp;BI(e);f=new UT;f.sa=e;c[0]=Ea(B(342),d,f);e=a.U.bk.bg.X;f=a.bp;BI(f);g=new UX;g.nd=f;c[1]=Ea(B(343),e,g);e=a.U.bk.bg.X;f=a.bp;BI(f);g=new UW;g.q8=f;c[2]=Ea(B(344),e,g);e=a.U.bk.bg.X;f=a.bp;BI(f);g=new UU;g.ue=f;c[3]=Ea(B(345),e,g);return FH(b);}
function ID(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{DB(a.U.b1);d=a.bp.e;e=Dg(d);f=GH(d);g=a.bp.dW;if(c===null)h=null;else{AQz();switch(AU$.data[c.cH]){case 1:h=Kd(g,e,f);break a;case 2:h=UL(g,e,f);break a;default:}b=new Eh;U(b);J(b);}}c=a.bp;e=EJ(c,b);if(h!==null){f=c.e;i=e.bs;j=e.bD;e=new UB;e.vC=c;e.vB=b;h.rz(f,i,j,e,c.gw);}else{WB(c.e.g,e);f=El(c.e.g.dN,e);if(f!==null)Hf(c,f);else{e=El(c.e.g.d7,e);if(e!==null&&!D4(e))RC(c.h1,b,e,c);else{e=c.h1;DB(e.b1);f=e.b1;k=R(C5,1);l=k.data;g=new C5;BI(f);m=new Wc;m.tW=f;JY(g,
m,B(346),e.bk.bg.tV);l[0]=g;F3(f,b,FH(k),MN(e,c));}}}}
var Wq=F();
function ANh(a,b){XP(b);}
function Wp(){var a=this;C.call(a);a.o_=null;a.o$=null;}
function AF9(a,b){var c,d,e,f,g,h,i;c=a.o_;d=a.o$;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new O7;i.nC=c;i.nB=g;h.then(Bk(i,"f"),Bk(d,"f"));e=e+1|0;}}
var VQ=F();
function AHx(a,b){XP(b);}
function VP(){var a=this;C.call(a);a.ou=null;a.ov=null;}
function AIp(a,b){var c,d,e,f,g;c=a.ou;d=a.ov;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(Bv,1);g.data[0]=Fs(b.name);TC(f,c,d,g);}
var Xy=F();
function AAs(b,c){return ABh(null,b,c,0);}
function ABh(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=AHY(c);g=B$(f);h=B$(f);i=B$(f);j=R(Cx,g);c=j.data;k=0;while(k<g){if(b!==null&&e&&k<CA(b)){l=B$(f);c[k]=B1(b,k);l=4*l|0;f.e8=f.e8+l|0;}else c[k]=DF(XC(f,d,0));k=k+1|0;}m=ACH(f,h);n=new Hr;n.dN=HF();n.d7=HF();n.eY=Cl();if(!c.length){b=new BC;U(b);J(b);}n.D=j;n.fh=0;n.cj=0;n.cQ=ARB(m);b=n.dN;e=0;while(e<i){Sf(b,EI(B$(f),B$(f)),EI(B$(f),B$(f)));e=e+1|0;}b=n.dN;m=n.d7;o=new TF;Rz(o,b);while(IH(o)){Tn(o);b=o.gE;p=b.hF;q=b.fv;b=Cl();if(El(m,q)===null)Sf(m,q,b);BX(El(m,
q),p);}if(m.jU===null){b=new On;b.tN=m;m.jU=b;}b=m.jU;q=new P2;Rz(q,b.tN);while(IH(q)){Tn(q);b=q.gE.fv;m=ASR;c=R(C,b.i);d=c.data;Hn(b,c);YX(c,m);e=0;g=d.length;while(e<g){m=d[e];IB(b,e);b.b9.data[e]=m;e=e+1|0;}}N5(f);return n;}
function Z8(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AHY(c);g=B$(f);h=B$(f);i=B$(f);j=B$(f);k=MU(b,g);l=MU(b,h);m=(H$(B1(b,k.b),k.a)).data[0].q;e=(H$(B1(b,l.b),l.a)).data[1].q;n=0;o=i-1|0;while(n<i){p=XC(f,d,g);if(!n)p=K1(m,p);if(n==o)p=K1(p,e);q=k.b+n|0;r=DF(p);b.D.data[q]=r;n=n+1|0;}r=ACH(f,j);N5(f);if(!D4(r)){s=Ni(g,h,(-1));b=b.cQ;f=AQE(s,r);r=JZ(b,b.cz,s);if(r!==null){f=f.cz.br;if(r===b.cz)b.cz=Bs(f,0);else if(r.dq!==null){b=new Ng;b.rp=r;Jq(f,b);q=Pv(r.dq.br,
r);Ed(r.dq.br,q);b=r.dq.br;Oy(b,q);if(!D4(f)){IM(b,b.i+f.i|0);j=f.i;g=b.i;h=g-1|0;while(h>=q){c=b.b9.data;c[h+j|0]=c[h];h=h+(-1)|0;}b.i=g+j|0;f=BR(f);g=0;while(g<j){c=b.b9.data;h=q+1|0;c[q]=BV(f);g=g+1|0;q=h;}b.cl=b.cl+1|0;}}}}}
function XC(b,c,d){var e,f,g,h,i,j,k,l;e=B$(b);f=R(B5,e);g=f.data;h=0;while(h<e){i=B$(b);j=B$(b);k=B$(b);l=B$(b);g[h]=Dw(I_(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ACH(b,c){var d,e;d=Cl();e=0;while(e<c){BX(d,Ni(B$(b),B$(b),B$(b)));e=e+1|0;}return d;}
var VW=F(0);
var AUh=null;function XN(){AUh=null;}
function Wk(){var a=this;C.call(a);a.pO=null;a.pP=null;}
function AHo(a,b){var c,d,e,f,g,h;b=a.pO;c=a.pP;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new L1;h.mo=b;h.mn=g;$rt_globals.setTimeout(Bk(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=Xn(d.item(f));g=new LK;g.q_=b;g.ra=c;$rt_globals.setTimeout(Bk(g,"onTimer"),0);f=f+1|0;}}
function Y2(){var a=this;C.call(a);a.hG=null;a.jD=null;}
function ACn(){var a=this;C.call(a);a.w1=0;a.wP=0;a.rI=0;a.kj=0;}
function Tv(){var a=this;C.call(a);a.m2=null;a.m0=null;}
function AH2(a){var b,c,d,e,f,g;b=a.m2;c=a.m0;if(Dh(c.hG,b.e.fB)){c=c.jD;Cz(b,c.kj,c.rI,0);B0(b.r.bI,c.kj,c.rI);B0(b.r.bz,c.wP,c.w1);}else{d=(Cn(b.dW.qM)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Cg(b);b=new N2;b.nL=g;b.nM=c;BI(b);c=new OZ;c.uc=b;$rt_globals.setTimeout(Bk(c,"onTimer"),0);}}}
function Tx(){var a=this;C.call(a);a.uf=null;a.ub=null;}
function AMN(a){Hf(a.uf,a.ub);}
function XT(){var a=this;C.call(a);a.iG=null;a.e8=0;}
function AHY(a){var b=new XT();ANW(b,a);return b;}
function ANW(a,b){a.iG=b;a.e8=0;}
function B$(a){var b,c;b=a.iG.data;c=a.e8;a.e8=c+1|0;return b[c];}
function N5(a){var b,c,d,e;if(a.e8!=a.iG.data.length){b=KZ();c=a.iG.data.length;d=a.e8;e=new M;O(e);G(S(G(S(G(e,B(347)),c),B(348)),d),B(349));Bu(b,N(e));}}
var Ir=F(E8);
var Hv=F(Bm);
var K9=F(Bm);
function YG(){C.call(this);this.C$=null;}
function Us(){var a=this;C.call(a);a.ni=null;a.nh=null;}
function AMC(a){var b,c;b=a.ni;c=a.nh;WO(b.d3,c);}
function V2(){C.call(this);this.pD=null;}
function ANl(a,b){Hm(a.pD,b);}
function Ru(){C.call(this);this.n6=null;}
function AEo(a){var b;b=a.n6;Jx(b.dt,b.da);Hk(b.da);b.da=null;}
var Xh=F();
function QX(b,c){return b.data[c];}
function GK(){var a=this;C.call(a);a.ek=0;a.eT=0;a.kq=null;a.jb=0;a.gB=null;}
function ADN(a,b,c,d,e,f){var g=new GK();AIF(g,a,b,c,d,e,f);return g;}
function AIF(a,b,c,d,e,f,g){a.ek=b;a.eT=c;a.kq=B3(f,g);a.jb=d;a.gB=e;}
function ABb(){F4.call(this);this.A$=null;}
function On(){EE.call(this);this.tN=null;}
var VH=F(Bw);
var Pz=F(0);
var MR=F(0);
var Lb=F();
function Y7(){var a=this;Lb.call(a);a.C_=null;a.E6=0;a.DI=0;a.Bo=0;}
function Qy(){var a=this;C.call(a);a.nG=null;a.nF=null;}
function AE1(a){var b,c;b=a.nG;c=a.nF;TZ();ID(b,c,AU_);}
function Qx(){var a=this;C.call(a);a.ox=null;a.oz=null;}
function ADv(a){var b,c;b=a.ox;c=a.oz;TZ();ID(b,c,AVa);}
function Qw(){var a=this;C.call(a);a.t0=null;a.t1=null;}
function AJn(a){ID(a.t0,a.t1,null);}
function Qv(){var a=this;C.call(a);a.mZ=null;a.m1=null;}
function AN0(a){var b,c,d,e,f,g,h;b=a.mZ;c=a.m1;d=Dg(b.bp.e);e=GH(b.bp.e);d=ML(b.bp.dW,d,e);DB(b.U.b1);b=b.bp;e=EJ(b,c);if(d!==null){f=b.e;g=e.bs;h=e.bD;e=new V6;e.uv=b;e.uw=c;d.F0(f,g,h,1,e,b.gw);}}
function OK(){C.call(this);this.pu=null;}
function ANk(a){var b;b=a.pu;DB(b.U.b1);Ku(b.bp,Nn(b),0);}
function OM(){C.call(this);this.sL=null;}
function AIu(a){var b;b=a.sL;DB(b.U.b1);Ku(b.bp,Nn(b),1);}
function ON(){C.call(this);this.rS=null;}
function AFv(a){var b,c,d;b=a.rS;DB(b.U.b1);c=H7(b);b=b.bp;BI(b);d=new RX;d.rT=b;PU(c,d,XK(B(350)));}
function Vb(){C.call(this);this.r6=null;}
function AEl(a){var b,c,d;b=a.r6;DB(b.U.b1);c=H7(b);b=b.bp;BI(b);d=new P$;d.pZ=b;K$(c,d);}
function U4(){C.call(this);this.rP=null;}
function AKi(a,b,c){var d,e;c=a.rP;d=c.e.g;e=b.e6;b=c.el;Wi(d.D.data[e],0,b);}
function RO(){C.call(this);this.nJ=null;}
function AIZ(a){SV(a.nJ);}
function RP(){C.call(this);this.qL=null;}
function AKg(a){AAi(a.qL);}
function Ns(){C.call(this);this.q$=null;}
function AHW(a){var b;b=a.q$;Kx(b,b.en.lA,b.fG+1|0);}
function Nr(){C.call(this);this.pU=null;}
function AN9(a){var b,c;b=a.pU;c=b.fG;if(c>7)Kx(b,b.en.lA,c-1|0);}
function Ui(){C.call(this);this.qA=null;}
function AFZ(a){var b,c,d,e,f,g,h,i;b=a.qA;c=(b.gS.oF()).data;d=R(C5,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new W_;i.o2=b;i.o1=h;e[f]=ACg(i,h,b.U.bk.bg.X);f=f+1|0;}return d;}
function UT(){C.call(this);this.sa=null;}
function AL5(a){var b,c,d,e,f;b=a.sa.e.g;c=b.cj;d=new M;O(d);S(G(d,B(351)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.fh;d=new M;O(d);S(G(d,B(352)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.cQ;e=FK(F9(b));Re(d,0,d.cz,e);b=By();f=b.jM;f.data[0]=10;Ne(b,f,0,1);}
function UX(){C.call(this);this.nd=null;}
function AI7(a){RJ(a.nd);}
function UW(){C.call(this);this.q8=null;}
function AEf(a){VM(a.q8);}
function UU(){C.call(this);this.ue=null;}
function AF6(a){Jt(a.ue);}
function RK(){C.call(this);this.tt=null;}
function AId(a,b,c){FI(B1(a.tt.e.g,b.e6),0,I(c));}
function O7(){var a=this;C.call(a);a.nC=null;a.nB=null;}
function AGl(a,b){a.nC.l(AAG(a.nB,b));}
var Ik=F(0);
function L1(){var a=this;C.call(a);a.mo=null;a.mn=null;}
function AIv(a){XW(a.mo,a.mn);}
function LK(){var a=this;C.call(a);a.q_=null;a.ra=null;}
function ADh(a){a.q_.l(a.ra);}
function Wo(){var a=this;C.call(a);a.ms=null;a.mr=null;a.mv=null;a.mt=null;}
function AHM(a,b){var c,d,e,f,g,h,i;c=a.ms;d=a.mr;e=a.mv;f=a.mt;if(!(b.done?1:0)){TC(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Tk;c.ow=d;c.oy=g;c.oA=f;b.then(Bk(c,"f"),Bk(e,"f"));}else{h=f.data;c=g.values();b=Fs(g.name);i=h.length;f=Dd(f,i+1|0);f.data[i]=b;TC(c,d,e,f);}}}
function GE(){var a=this;C.call(a);a.hN=0;a.rf=0;a.g9=null;a.gE=null;a.oL=null;a.iv=null;}
function AVb(a){var b=new GE();Rz(b,a);return b;}
function Rz(a,b){a.iv=b;a.rf=b.ga;a.g9=null;}
function IH(a){var b,c;if(a.g9!==null)return 1;while(true){b=a.hN;c=a.iv.cF.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.hN=b+1|0;}return 0;}
function YH(a){var b;if(a.rf==a.iv.ga)return;b=new K_;U(b);J(b);}
function Tn(a){var b,c,d,e;YH(a);if(!IH(a)){b=new WZ;U(b);J(b);}b=a.g9;if(b!==null){c=a.gE;if(c!==null)a.oL=c;a.gE=b;a.g9=b.eO;}else{d=a.iv.cF.data;e=a.hN;a.hN=e+1|0;b=d[e];a.gE=b;a.g9=b.eO;a.oL=null;}}
var TF=F(GE);
var P2=F(GE);
var S2=F(0);
var AUo=null;function ZZ(){AUo=new R1;}
function P0(){var a=this;C.call(a);a.f=null;a.c3=0;a.jB=null;a.mW=0;a.fP=0;a.d9=0;a.bo=0;a.kz=null;}
function Ji(a){return a.f.bB;}
function WQ(a,b,c,d){var e,f,g,h,i,j;e=Cl();f=a.c3;g=0;if(c!=f)a.c3=c;a:{switch(b){case -1073741784:h=new QM;c=a.bo+1|0;a.bo=c;Fa(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OR;c=a.bo+1|0;a.bo=c;Fa(h,c);break a;case -33554392:h=new RS;c=a.bo+1|0;a.bo=c;Fa(h,c);break a;default:c=a.fP+1|0;a.fP=c;if(d!==null)h=ARL(c);else{h=new Fk;Fa(h,0);g=1;}c=a.fP;if(c<=(-1))break a;if(c>=10)break a;a.jB.data[c]=h;break a;}h=new WK;Fa(h,(-1));}while(true){if(EP(a.f)&&a.f.h==(-536870788))
{d=AOs(B7(a,2),B7(a,64));while(!Db(a.f)&&EP(a.f)){i=a.f;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cs(d,Bf(i));i=a.f;if(i.bd!=(-536870788))continue;Bf(i);}i=Ka(a,d);i.K(h);}else if(a.f.bd==(-536870788)){i=Gv(h);Bf(a.f);}else{i=Od(a,h);d=a.f;if(d.bd==(-536870788))Bf(d);}if(i!==null)BX(e,i);if(Db(a.f))break;if(a.f.bd==(-536870871))break;}if(a.f.j1==(-536870788))BX(e,Gv(h));if(a.c3!=f&&!g){a.c3=f;d=a.f;d.fx=f;d.h=d.bd;d.d1=d.ed;j=d.cN;d.u=j+1|0;d.gH=j;ET(d);}switch(b){case -1073741784:break;case -536870872:d
=new LZ;Fm(d,e,h);return d;case -268435416:d=new Vc;Fm(d,e,h);return d;case -134217688:d=new P3;Fm(d,e,h);return d;case -67108824:d=new SD;Fm(d,e,h);return d;case -33554392:d=new DG;Fm(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return ARw(Bs(e,0),h);default:return AQ9(e,h);}return Gv(h);}d=new Ip;Fm(d,e,h);return d;}
function ABz(a){var b,c,d,e,f,g,h;b=BH(4);c=(-1);d=(-1);if(!Db(a.f)&&EP(a.f)){e=b.data;c=Bf(a.f);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BQ(3);b=e.data;b[0]=c&65535;f=a.f;g=f.bd;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bf(f);f=a.f;g=f.bd;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bf(f);return AOa(e,3);}return AOa(e,2);}if(!B7(a,2))return YF(b[0]);if(B7(a,64))return AMl(b[0]);return AFc(b[0]);}e=b.data;c=1;while(c<4&&!Db(a.f)&&EP(a.f)){h=c+1|0;e[c]=Bf(a.f);c=h;}if(c==1){h=e[0];if(!(AVc.wv(h)==AVd?0:1))return WG(a,e[0]);}if
(!B7(a,2))return ASn(b,c);if(B7(a,64)){f=new Wn;Na(f,b,c);return f;}f=new SR;Na(f,b,c);return f;}
function Od(a,b){var c,d,e,f,g,h,i;if(EP(a.f)&&!I8(a.f)&&JI(a.f.h)){if(B7(a,128)){c=ABz(a);if(!Db(a.f)){d=a.f;e=d.bd;if(!(e==(-536870871)&&!(b instanceof Fk))&&e!=(-536870788)&&!EP(d))c=Lr(a,b,c);}}else if(!Nj(a.f)&&!Uk(a.f)){f=new Nk;O(f);while(!Db(a.f)&&EP(a.f)&&!Nj(a.f)&&!Uk(a.f)){if(!(!I8(a.f)&&!a.f.h)&&!(!I8(a.f)&&JI(a.f.h))){g=a.f.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bf(a.f);if(!Lj(e))BA(f,e&65535);else HT(f,Gf(e));}if(!B7(a,2)){c=new QA;Ds(c);c.ce
=N(f);e=f.M;c.bA=e;c.jQ=AKN(e);c.kD=AKN(c.bA);h=0;while(h<(c.bA-1|0)){P7(c.jQ,L(c.ce,h),(c.bA-h|0)-1|0);P7(c.kD,L(c.ce,(c.bA-h|0)-1|0),(c.bA-h|0)-1|0);h=h+1|0;}}else if(B7(a,64))c=ASk(f);else{c=new My;Ds(c);c.gJ=N(f);c.bA=f.M;}}else c=Lr(a,b,Wm(a,b));}else{d=a.f;if(d.bd!=(-536870871))c=Lr(a,b,Wm(a,b));else{if(b instanceof Fk)J(B6(B(31),d.bB,Nh(d)));c=Gv(b);}}a:{if(!Db(a.f)){e=a.f.bd;if(!(e==(-536870871)&&!(b instanceof Fk))&&e!=(-536870788)){f=Od(a,b);if(c instanceof CW&&!(c instanceof EU)&&!(c instanceof CN)
&&!(c instanceof Eq)){i=c;if(!f.bJ(i.G)){c=new Vr;EG(c,i.G,i.d,i.g5);c.G.K(c);}}if((f.g$()&65535)!=43)c.K(f);else c.K(f.G);break a;}}if(c===null)return null;c.K(b);}if((c.g$()&65535)!=43)return c;return c.G;}
function Lr(a,b,c){var d,e,f,g,h;d=a.f;e=d.bd;if(c!==null&&!(c instanceof BS)){switch(e){case -2147483606:Bf(d);d=new W6;C8(d,c,b,e);Lv();c.K(AVe);return d;case -2147483605:Bf(d);d=new OJ;C8(d,c,b,(-2147483606));Lv();c.K(AVe);return d;case -2147483585:Bf(d);d=new Op;C8(d,c,b,(-536870849));Lv();c.K(AVe);return d;case -2147483525:f=new Ms;d=E0(d);g=a.d9+1|0;a.d9=g;IA(f,d,c,b,(-536870849),g);Lv();c.K(AVe);return f;case -1073741782:case -1073741781:Bf(d);d=new Qr;C8(d,c,b,e);c.K(d);return d;case -1073741761:Bf(d);d
=new Pw;C8(d,c,b,(-536870849));c.K(b);return d;case -1073741701:h=new T2;d=E0(d);e=a.d9+1|0;a.d9=e;IA(h,d,c,b,(-536870849),e);c.K(h);return h;case -536870870:case -536870869:Bf(d);if(c.g$()!=(-2147483602)){d=new CN;C8(d,c,b,e);}else if(B7(a,32)){d=new Qt;C8(d,c,b,e);}else{d=new Nt;f=Os(a.c3);C8(d,c,b,e);d.jZ=f;}c.K(d);return d;case -536870849:Bf(d);d=new FF;C8(d,c,b,(-536870849));c.K(b);return d;case -536870789:h=new E1;d=E0(d);e=a.d9+1|0;a.d9=e;IA(h,d,c,b,(-536870849),e);c.K(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bf(d);d=new W8;EG(d,f,b,e);f.d=d;return d;case -2147483585:Bf(d);c=new Vm;EG(c,f,b,(-2147483585));return c;case -2147483525:c=new Ob;Rb(c,E0(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bf(d);d=new Ps;EG(d,f,b,e);f.d=d;return d;case -1073741761:Bf(d);c=new S_;EG(c,f,b,(-1073741761));return c;case -1073741701:c=new P4;Rb(c,E0(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bf(d);d=ARD(f,b,e);f.d=d;return d;case -536870849:Bf(d);c
=new Eq;EG(c,f,b,(-536870849));return c;case -536870789:return AQL(E0(d),f,b,(-536870789));default:}return c;}
function Wm(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fk;while(true){a:{e=a.f;f=e.bd;if((f&(-2147418113))==(-2147483608)){Bf(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.c3=g;else{if(f!=(-1073741784))g=a.c3;c=WQ(a,f,g,b);e=a.f;if(e.bd!=(-536870871))J(B6(B(31),e.bB,e.cN));Bf(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bf(e);c
=ANZ(0);break a;case -2147483577:Bf(e);c=new Np;BK(c);break a;case -2147483558:Bf(e);c=new V5;h=a.bo+1|0;a.bo=h;AB1(c,h);break a;case -2147483550:Bf(e);c=ANZ(1);break a;case -2147483526:Bf(e);c=new VN;BK(c);break a;case -536870876:Bf(e);a.bo=a.bo+1|0;if(B7(a,8)){if(B7(a,1)){c=AQ0(a.bo);break a;}c=AQi(a.bo);break a;}if(B7(a,1)){c=ARd(a.bo);break a;}c=ARQ(a.bo);break a;case -536870866:Bf(e);if(B7(a,32)){c=AR$();break a;}c=ARK(Os(a.c3));break a;case -536870821:Bf(e);i=0;c=a.f;if(c.bd==(-536870818)){i=1;Bf(c);}c
=Ka(a,FS(a,i));c.K(b);e=a.f;if(e.bd!=(-536870819))J(B6(B(31),e.bB,e.cN));NS(e,1);Bf(a.f);break a;case -536870818:Bf(e);a.bo=a.bo+1|0;if(!B7(a,8)){c=new JN;BK(c);break a;}c=new ME;e=Os(a.c3);BK(c);c.p_=e;break a;case 0:j=e.ed;if(j!==null)c=Ka(a,j);else{if(Db(e)){c=Gv(b);break a;}c=YF(f&65535);}Bf(a.f);break a;default:break b;}Bf(e);c=new JN;BK(c);break a;}h=(f&2147483647)-48|0;if(a.fP<h)J(B6(B(31),E9(e),Nh(a.f)));Bf(e);a.bo=a.bo+1|0;c=!B7(a,2)?AQp(h,a.bo):B7(a,64)?AQ1(h,a.bo):ASh(h,a.bo);a.jB.data[h].jz=1;a.mW
=1;break a;}if(f>=0&&!Gx(e)){c=WG(a,f);Bf(a.f);}else if(f==(-536870788))c=Gv(b);else{if(f!=(-536870871)){b=new Id;c=!Gx(a.f)?V4(f&65535):a.f.ed.ci();e=a.f;IK(b,c,e.bB,e.cN);J(b);}if(d){b=new Id;e=a.f;IK(b,B(31),e.bB,e.cN);J(b);}c=Gv(b);}}}if(f!=(-16777176))break;}return c;}
function FS(a,b){var c,d,e,f,g,h,i,j,$$je;c=AOs(B7(a,2),B7(a,64));Ej(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Db(a.f))break a;h=a.f;b=h.bd;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cs(c,d);d=Bf(a.f);h=a.f;if(h.bd!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Bf(h);e=1;d=(-1);break d;}Bf(h);if(g){c=FS(a,0);break d;}if(a.f.bd==(-536870819))break d;VT(c,FS(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bf(h);h=a.f;i=h.bd;if(Gx(h))break c;if
(i<0){j=a.f.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(JI(i))break e;i=i&65535;break e;}catch($$e){$$je=D8($$e);if($$je instanceof DS){break b;}else{throw $$e;}}}try{BO(c,d,i);}catch($$e){$$je=D8($$e);if($$je instanceof DS){break b;}else{throw $$e;}}Bf(a.f);d=(-1);break d;}}if(d>=0)Cs(c,d);d=45;Bf(a.f);break d;case -536870821:if(d>=0){Cs(c,d);d=(-1);}Bf(a.f);j=0;h=a.f;if(h.bd==(-536870818)){Bf(h);j=1;}if(!e)Xk(c,FS(a,j));else VT(c,FS(a,j));e=0;Bf(a.f);break d;case -536870819:if(d>=0)Cs(c,
d);d=93;Bf(a.f);break d;case -536870818:if(d>=0)Cs(c,d);d=94;Bf(a.f);break d;case 0:if(d>=0)Cs(c,d);h=a.f.ed;if(h===null)d=0;else{AC3(c,h);d=(-1);}Bf(a.f);break d;default:}if(d>=0)Cs(c,d);d=Bf(a.f);}g=0;}J(B6(B(31),Ji(a),a.f.cN));}J(B6(B(31),Ji(a),a.f.cN));}if(!f){if(d>=0)Cs(c,d);return c;}J(B6(B(31),Ji(a),a.f.cN-1|0));}
function WG(a,b){var c,d,e;c=Lj(b);if(B7(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AFc(b&65535);}if(B7(a,64)&&b>128){if(c){d=new LP;Ds(d);d.bA=2;d.pw=Gn(Gm(b));return d;}if(N3(b))return AKT(b&65535);if(!Rw(b))return AMl(b&65535);return AIg(b&65535);}}if(!c){if(N3(b))return AKT(b&65535);if(!Rw(b))return YF(b&65535);return AIg(b&65535);}d=new DJ;Ds(d);d.bA=2;d.fd=b;e=(Gf(b)).data;d.i3=e[0];d.hH=e[1];return d;}
function Ka(a,b){var c,d,e;if(!AAo(b)){if(!b.I){if(b.gp())return AHH(b);return AN1(b);}if(!b.gp())return AIX(b);c=new IC;Tq(c,b);return c;}c=XO(b);d=new L6;BK(d);d.op=c;d.uq=c.bc;if(!b.I){if(b.gp())return AA3(AHH(Hc(b)),d);return AA3(AN1(Hc(b)),d);}if(!b.gp())return AA3(AIX(Hc(b)),d);c=new Pm;e=new IC;Tq(e,Hc(b));ACI(c,e,d);return c;}
function Hd(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B7(a,b){return (a.c3&b)!=b?0:1;}
function Ng(){C.call(this);this.rp=null;}
function APY(a,b){b.dq=a.rp.dq;}
var Gg=F(Cr);
var AVa=null;var AU_=null;var AVf=null;function TZ(){TZ=Bq(Gg);AGp();}
function AIC(a,b){var c=new Gg();YA(c,a,b);return c;}
function YA(a,b,c){TZ();DE(a,b,c);}
function AGp(){var b;AVa=AIC(B(353),0);b=AIC(B(354),1);AU_=b;AVf=H(Gg,[AVa,b]);}
function RX(){C.call(this);this.rT=null;}
function AI$(a,b){DH(a.rT,b);}
function QB(){var a=this;C.call(a);a.sQ=null;a.sR=0;a.sO=0;a.sP=null;a.sM=0;a.sN=0;}
function AEt(a,b){var c,d,e,f,g,h,i,j;c=a.sQ;d=a.sR;e=a.sO;f=a.sP;g=a.sM;h=a.sN;i=Ct(c.L,5.0);d=X((c.L.bL.b-d|0)-i|0,V((i-d|0)-c.P.n.b|0,b.j.b));j=X((c.L.bL.a-e|0)-i|0,V((i-e|0)-c.P.n.a|0,b.j.a));Y(f,d+g|0,j+h|0);CK(c,f,c.p.n);}
function NY(){var a=this;C.call(a);a.mD=null;a.mE=0;a.mG=0;a.my=0;a.mz=0;a.mA=0;a.mB=0;a.mw=null;a.mx=null;}
function AJe(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.mD;d=a.mE;e=a.mG;f=a.my;g=a.mz;h=a.mA;i=a.mB;j=a.mw;k=a.mx;l=Ct(c.L,5.0);m=c.p.cW();d=X(e+(b.j.a-d|0)|0,(c.L.bL.a+c.P.n.a|0)-l|0);e=e+f|0;d=e-d|0;d=V(m.a,d);e=e-d|0;l=X(h+(b.j.b-g|0)|0,c.L.bL.b-l|0);f=h+i|0;l=f-l|0;l=V(m.b,l);Y(j,f-l|0,e);Y(k,l,d);CK(c,j,k);}
function T1(){var a=this;C.call(a);a.rW=null;a.rU=0;a.rV=0;a.rY=0;a.r0=null;a.rX=null;}
function ANz(a,b){var c,d,e,f,g,h,i,j;c=a.rW;d=a.rU;e=a.rV;f=a.rY;g=a.r0;h=a.rX;i=Ct(c.L,5.0);j=c.p.cW();d=X(e+(b.j.a-d|0)|0,(c.L.bL.a+c.P.n.a|0)-i|0);e=e+f|0;d=e-d|0;d=V(j.a,d);Y(g,c.p.t.b,e-d|0);Y(h,c.p.n.b,d);CK(c,g,h);}
function Ww(){var a=this;C.call(a);a.pF=null;a.pG=0;a.pJ=0;a.pK=0;a.pL=0;a.pM=0;a.pH=null;a.pI=null;}
function AKc(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.pF;d=a.pG;e=a.pJ;f=a.pK;g=a.pL;h=a.pM;i=a.pH;j=a.pI;k=Ct(c.L,5.0);l=c.p.cW();d=X(e+(b.j.a-d|0)|0,(c.L.bL.a+c.P.n.a|0)-k|0);e=e+f|0;d=e-d|0;d=V(l.a,d);e=e-d|0;h=V(h+(b.j.b-g|0)|0,V(l.b,k-c.P.t.b|0));Y(i,c.p.t.b,e);Y(j,h,d);CK(c,i,j);}
function WI(){var a=this;C.call(a);a.p6=null;a.p5=0;a.p4=0;a.p3=0;a.p2=null;a.p1=null;}
function APP(a,b){var c,d,e,f,g,h,i,j;c=a.p6;d=a.p5;e=a.p4;f=a.p3;g=a.p2;h=a.p1;i=Ct(c.L,5.0);j=c.p.cW();d=X(e+(b.j.b-d|0)|0,c.L.bL.b-i|0);e=e+f|0;d=e-d|0;d=V(j.b,d);Y(g,e-d|0,c.p.t.a);Y(h,d,c.p.n.a);CK(c,g,h);}
function Ph(){var a=this;C.call(a);a.no=null;a.nm=0;a.nn=0;a.nr=0;a.ns=0;a.np=0;a.nq=null;a.nu=null;}
function ALT(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.no;d=a.nm;e=a.nn;f=a.nr;g=a.ns;h=a.np;i=a.nq;j=a.nu;k=Ct(c.L,5.0);l=c.p.cW();d=X(e+(b.j.b-d|0)|0,c.L.bL.b-k|0);m=e+f|0;d=m-d|0;d=V(l.b,d);m=m-d|0;f=V(h+(b.j.a-g|0)|0,l.a);Y(i,m,c.p.t.a);Y(j,d,f);CK(c,i,j);}
function Vp(){var a=this;C.call(a);a.mg=null;a.mh=0;a.mi=0;a.mj=null;}
function AJB(a,b){var c,d,e,f,g,h;c=a.mg;d=a.mh;e=a.mi;f=a.mj;g=Ct(c.L,5.0);h=c.p.cW();Y(f,V(e+(b.j.b-d|0)|0,V(h.b,g-c.P.t.b|0)),c.p.n.a);CK(c,c.p.t,f);}
function SP(){var a=this;C.call(a);a.l9=null;a.l7=0;a.l_=0;a.l$=0;a.mb=0;a.ma=null;}
function AFS(a,b){var c,d,e,f,g,h,i,j;c=a.l9;d=a.l7;e=a.l_;f=a.l$;g=a.mb;h=a.ma;i=Ct(c.L,5.0);j=c.p.cW();Y(h,V(e+(b.j.b-d|0)|0,V(j.b,i-c.P.t.b|0)),V(g+(b.j.a-f|0)|0,j.a));CK(c,c.p.t,h);}
function LG(){var a=this;C.call(a);a.m7=null;a.m6=0;a.m9=0;a.m8=null;}
function AFg(a,b){var c,d,e,f,g;c=a.m7;d=a.m6;e=a.m9;f=a.m8;Ct(c.L,5.0);g=c.p.cW();d=V(e+(b.j.a-d|0)|0,g.a);Y(f,c.p.n.b,d);CK(c,c.p.t,f);}
var R1=F();
function AEc(a,b){}
function Um(){var a=this;C.call(a);a.t7=null;a.t8=0.0;}
function Jd(a,b){return J$(a.t7,b,a.t8*2.0+0.875);}
function Bz(){var a=this;C.call(a);a.d=null;a.b7=0;a.nS=null;a.g5=0;}
var ASX=0;function BK(a){var b,c;b=new E7;c=ASX;ASX=c+1|0;Jl(b,c);a.nS=Lm(b);}
function J9(a,b){var c,d;c=new E7;d=ASX;ASX=d+1|0;Jl(c,d);a.nS=Lm(c);a.d=b;}
function Hi(a,b,c,d){var e;e=d.w;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hs(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFH(a,b){a.g5=b;}
function AER(a){return a.g5;}
function ANr(a){return a.d;}
function AOh(a,b){a.d=b;}
function AOg(a,b){return 1;}
function AO$(a){return null;}
function Ix(a){var b;a.b7=1;b=a.d;if(b!==null){if(!b.b7){b=b.eM();if(b!==null){a.d.b7=1;a.d=b;}a.d.dK();}else if(b instanceof Gj&&b.dO.jz)a.d=b.d;}}
function ACU(){ASX=1;}
var Tz=F();
var AU$=null;function AQz(){AQz=Bq(Tz);AEv();}
function AEv(){var b,c;TZ();b=BH((AVf.e9()).data.length);c=b.data;AU$=b;c[AVa.cH]=1;c[AU_.cH]=2;}
function Oo(){C.call(this);this.o5=null;}
function AFP(a,b){Tr(H7(a.o5),b,AUm,XK(B(355)));}
function WR(){C.call(this);this.tg=null;}
function AGN(a,b){var c,d;c=a.tg;d=b.g2;b=new M;O(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function W_(){var a=this;C.call(a);a.o2=null;a.o1=null;}
function AFC(a){var b,c;b=a.o2;c=a.o1;b=b.bp;Kx(b,c,b.fG);}
function CM(){var a=this;Bz.call(a);a.jz=0;a.c$=0;}
var AVe=null;function Lv(){Lv=Bq(CM);AGR();}
function ARL(a){var b=new CM();Fa(b,a);return b;}
function Fa(a,b){Lv();BK(a);a.c$=b;}
function AEk(a,b,c,d){var e,f;e=HZ(d,a.c$);I3(d,a.c$,b);f=a.d.c(b,c,d);if(f<0)I3(d,a.c$,e);return f;}
function AJZ(a){return a.c$;}
function AEG(a,b){return 0;}
function AGR(){var b;b=new Nl;BK(b);AVe=b;}
function Gt(){var a=this;C.call(a);a.ba=null;a.fx=0;a.d6=0;a.sW=0;a.j1=0;a.bd=0;a.h=0;a.qF=0;a.ed=null;a.d1=null;a.u=0;a.hg=0;a.cN=0;a.gH=0;a.bB=null;}
var AVg=null;var AVc=null;var AVd=0;function NS(a,b){if(b>0&&b<3)a.d6=b;if(b==1){a.h=a.bd;a.d1=a.ed;a.u=a.gH;a.gH=a.cN;ET(a);}}
function Gx(a){return a.ed===null?0:1;}
function I8(a){return a.d1===null?0:1;}
function Bf(a){ET(a);return a.j1;}
function E0(a){var b;b=a.ed;ET(a);return b;}
function ET(a){var b,c,d,e,f,g,h,$$je;a.j1=a.bd;a.bd=a.h;a.ed=a.d1;a.cN=a.gH;a.gH=a.u;while(true){b=0;c=a.u>=a.ba.data.length?0:KU(a);a.h=c;a.d1=null;if(a.d6==4){if(c!=92)return;c=a.u;d=a.ba.data;c=c>=d.length?0:d[BP(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.u=a.hg;return;}a.d6=a.sW;a.h=a.u>(a.ba.data.length-2|0)?0:KU(a);}a:{c=a.h;if(c!=92){e=a.d6;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.ba.data[a.u]!=63){a.h=(-2147483608);break a;}BP(a);c=a.ba.data[a.u];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.h=(-134217688);BP(a);break b;default:J(B6(B(31),E9(a),a.u));}a.h=(-67108824);BP(a);}else{switch(c){case 33:break;case 60:BP(a);c=a.ba.data[a.u];e=1;break b;case 61:a.h=(-536870872);BP(a);break b;case 62:a.h=(-33554392);BP(a);break b;default:f=ACV(a);a.h=f;if(f<256){a.fx=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fx=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BP(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e
=a.u;d=a.ba.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BP(a);break a;case 63:a.h=c|(-1073741824);BP(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);NS(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.d1=ACk(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.u>=(a.ba.data.length-2|0)?(-1):KU(a);c:{a.h=c;switch(c){case -1:J(B6(B(31),E9(a),a.u));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=AAQ(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.d6!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(B6(B(31),E9(a),a.u));case 68:case 83:case 87:case 100:case 115:case 119:a.d1=Q2(I_(a.ba,
a.hg,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.sW=a.d6;a.d6=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.u;d=a.ba.data;if(c>=(d.length-2|0))J(B6(B(31),E9(a),a.u));a.h=d[BP(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=OP(a,4);break a;case 120:a.h=OP(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=AAz(a);h=0;if(a.h==80)h=1;try{a.d1=Q2(g,h);}catch($$e){$$je=D8($$e);if($$je instanceof IE){J(B6(B(31),E9(a),a.u));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function AAz(a){var b,c,d,e,f,g;b=new M;FN(b,10);c=a.u;d=a.ba;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=I_(d,BP(a),1);f=new M;O(f);G(G(f,B(356)),b);return N(f);}BP(a);c=0;a:{while(true){g=a.u;d=a.ba.data;if(g>=(d.length-2|0))break;c=d[BP(a)];if(c==125)break a;BA(b,c);}}if(c!=125)J(B6(B(31),a.bB,a.u));}if(!b.M)J(B6(B(31),a.bB,a.u));f=N(b);if(I(f)==1){b=new M;O(b);G(G(b,B(356)),f);return N(b);}b:{c:{if(I(f)>3){if(J1(f,B(356)))break c;if(J1(f,B(357)))break c;}break b;}f=Dc(f,2);}return f;}
function ACk(a,b){var c,d,e,f,g,$$je;c=new M;FN(c,4);d=(-1);e=2147483647;a:{while(true){f=a.u;g=a.ba.data;if(f>=g.length)break a;b=g[BP(a)];if(b==125)break a;if(b==44&&d<0)try{d=IZ(DI(c),10);ACq(c,0,XZ(c));continue;}catch($$e){$$je=D8($$e);if($$je instanceof C9){break;}else{throw $$e;}}BA(c,b&65535);}J(B6(B(31),a.bB,a.u));}if(b!=125)J(B6(B(31),a.bB,a.u));if(c.M>0)b:{try{e=IZ(DI(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=D8($$e);if($$je instanceof C9){}else{throw $$e;}}J(B6(B(31),a.bB,a.u));}else if
(d<0)J(B6(B(31),a.bB,a.u));if((d|e|(e-d|0))<0)J(B6(B(31),a.bB,a.u));b=a.u;g=a.ba.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BP(a);break c;case 63:a.h=(-1073741701);BP(a);break c;default:}a.h=(-536870789);}c=new Mh;c.d4=d;c.dY=e;return c;}
function E9(a){return a.bB;}
function Db(a){return !a.bd&&!a.h&&a.u==a.qF&&!Gx(a)?1:0;}
function JI(b){return b<0?0:1;}
function EP(a){return !Db(a)&&!Gx(a)&&JI(a.bd)?1:0;}
function Nj(a){var b;b=a.bd;return b<=56319&&b>=55296?1:0;}
function Uk(a){var b;b=a.bd;return b<=57343&&b>=56320?1:0;}
function Rw(b){return b<=56319&&b>=55296?1:0;}
function N3(b){return b<=57343&&b>=56320?1:0;}
function OP(a,b){var c,d,e,f,$$je;c=new M;FN(c,b);d=a.ba.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.u>=d)break;BA(c,a.ba.data[BP(a)]);e=e+1|0;}if(!f)a:{try{b=IZ(DI(c),16);}catch($$e){$$je=D8($$e);if($$je instanceof C9){break a;}else{throw $$e;}}return b;}J(B6(B(31),a.bB,a.u));}
function AAQ(a){var b,c,d,e,f,g;b=3;c=1;d=a.ba.data;e=d.length-2|0;f=TU(d[a.u],8);switch(f){case -1:break;default:if(f>3)b=2;BP(a);a:{while(true){if(c>=b)break a;g=a.u;if(g>=e)break a;g=TU(a.ba.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BP(a);c=c+1|0;}}return f;}J(B6(B(31),a.bB,a.u));}
function ACV(a){var b,c,d,e;b=1;c=a.fx;a:while(true){d=a.u;e=a.ba.data;if(d>=e.length)J(B6(B(31),a.bB,d));b:{c:{switch(e[d]){case 41:BP(a);return c|256;case 45:if(!b)J(B6(B(31),a.bB,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BP(a);}BP(a);return c;}
function BP(a){var b,c,d,e,f;b=a.u;a.hg=b;if(!(a.fx&4))a.u=b+1|0;else{c=a.ba.data.length-2|0;a.u=b+1|0;a:while(true){d=a.u;if(d<c&&P1(a.ba.data[d])){a.u=a.u+1|0;continue;}d=a.u;if(d>=c)break;e=a.ba.data;if(e[d]!=35)break;a.u=d+1|0;while(true){f=a.u;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.u=f+1|0;}}}return a.hg;}
function ACb(b){return AVg.AX(b);}
function KU(a){var b,c,d,e;b=a.ba.data[BP(a)];if(CC(b)){c=a.hg+1|0;d=a.ba.data;if(c<d.length){e=d[c];if(CY(e)){BP(a);return Ek(b,e);}}}return b;}
function Nh(a){return a.cN;}
function Id(){var a=this;BC.call(a);a.wd=null;a.vO=null;a.pn=0;}
function B6(a,b,c){var d=new Id();IK(d,a,b,c);return d;}
function IK(a,b,c,d){U(a);a.pn=(-1);a.wd=b;a.vO=c;a.pn=d;}
function V$(){C.call(this);this.sF=null;}
function ALJ(a,b){var c,d;c=a.sF;d=0;while(d<b.length){XW(c,b[d]);d=d+1|0;}}
var AAu=F(0);
function Tk(){var a=this;C.call(a);a.ow=null;a.oy=null;a.oA=null;}
function ALn(a,b){a.ow.l(AQj(a.oy,b,a.oA));}
var QM=F(CM);
function ADU(a,b,c,d){var e;e=a.c$;BE(d,e,b-De(d,e)|0);return a.d.c(b,c,d);}
function AMX(a,b){return 0;}
var WK=F(CM);
function AFF(a,b,c,d){return b;}
var OR=F(CM);
function AEP(a,b,c,d){if(De(d,a.c$)!=b)b=(-1);return b;}
function RS(){CM.call(this);this.mL=0;}
function AD0(a,b,c,d){var e;e=a.c$;BE(d,e,b-De(d,e)|0);a.mL=b;return b;}
function ALw(a,b){return 0;}
var Fk=F(CM);
function AOz(a,b,c,d){if(d.iO!=1&&b!=d.w)return (-1);d.h8=1;I3(d,0,b);return b;}
function BS(){Bz.call(this);this.bA=0;}
function Ds(a){BK(a);a.bA=1;}
function APz(a,b,c,d){var e;if((b+a.bP()|0)>d.w){d.cX=1;return (-1);}e=a.bn(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function ANP(a){return a.bA;}
function AID(a,b){return 1;}
var ABZ=F(BS);
function Gv(a){var b=new ABZ();AKa(b,a);return b;}
function AKa(a,b){J9(a,b);a.bA=1;a.g5=1;a.bA=0;}
function ANj(a,b,c){return 0;}
function AGX(a,b,c,d){var e,f,g;e=d.w;f=d.ct;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&CY(L(c,b))&&b>f&&CC(L(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AFt(a,b,c,d,e){var f,g;f=e.w;g=e.ct;while(true){if(c<b)return (-1);if(c<f&&CY(L(d,c))&&c>g&&CC(L(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ADY(a,b){return 0;}
function BN(){var a=this;Bz.call(a);a.bt=null;a.dO=null;a.S=0;}
function AQ9(a,b){var c=new BN();Fm(c,a,b);return c;}
function Fm(a,b,c){BK(a);a.bt=b;a.dO=c;a.S=c.c$;}
function AHu(a,b,c,d){var e,f,g,h;if(a.bt===null)return (-1);e=Fr(d,a.S);Dr(d,a.S,b);f=a.bt.i;g=0;while(true){if(g>=f){Dr(d,a.S,e);return (-1);}h=(Bs(a.bt,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ALp(a,b){a.dO.d=b;}
function AJo(a,b){var c;a:{c=a.bt;if(c!==null){c=BR(c);while(true){if(!B2(c))break a;if(!(BV(c)).bJ(b))continue;else return 1;}}}return 0;}
function AL9(a,b){return HZ(b,a.S)>=0&&Fr(b,a.S)==HZ(b,a.S)?0:1;}
function AFo(a){var b,c,d,e;a.b7=1;b=a.dO;if(b!==null&&!b.b7)Ix(b);a:{b=a.bt;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bs(a.bt,d);e=b.eM();if(e===null)e=b;else{b.b7=1;Ed(a.bt,d);Qq(a.bt,d,e);}if(!e.b7)e.dK();d=d+1|0;}}}if(a.d!==null)Ix(a);}
var Ip=F(BN);
function AK_(a,b,c,d){var e,f,g,h;e=De(d,a.S);BE(d,a.S,b);f=a.bt.i;g=0;while(true){if(g>=f){BE(d,a.S,e);return (-1);}h=(Bs(a.bt,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AMx(a,b){return !De(b,a.S)?0:1;}
var DG=F(Ip);
function AF7(a,b,c,d){var e,f,g;e=De(d,a.S);BE(d,a.S,b);f=a.bt.i;g=0;while(g<f){if((Bs(a.bt,g)).c(b,c,d)>=0)return a.d.c(a.dO.mL,c,d);g=g+1|0;}BE(d,a.S,e);return (-1);}
function AMf(a,b){a.d=b;}
var LZ=F(DG);
function ALi(a,b,c,d){var e,f;e=a.bt.i;f=0;while(f<e){if((Bs(a.bt,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AOn(a,b){return 0;}
var Vc=F(DG);
function AEA(a,b,c,d){var e,f;e=a.bt.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bt,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ANT(a,b){return 0;}
var P3=F(DG);
function AFj(a,b,c,d){var e,f,g,h;e=a.bt.i;f=d.ic?0:d.ct;a:{g=a.d.c(b,c,d);if(g>=0){BE(d,a.S,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bt,h)).cb(f,b,c,d)>=0){BE(d,a.S,(-1));return g;}h=h+1|0;}}}return (-1);}
function AP1(a,b){return 0;}
var SD=F(DG);
function ADw(a,b,c,d){var e,f;e=a.bt.i;BE(d,a.S,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bt,f)).cb(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AMM(a,b){return 0;}
function Gj(){BN.call(this);this.cA=null;}
function ARw(a,b){var c=new Gj();Yt(c,a,b);return c;}
function Yt(a,b,c){BK(a);a.cA=b;a.dO=c;a.S=c.c$;}
function ADP(a,b,c,d){var e,f;e=Fr(d,a.S);Dr(d,a.S,b);f=a.cA.c(b,c,d);if(f>=0)return f;Dr(d,a.S,e);return (-1);}
function AJL(a,b,c,d){var e;e=a.cA.b8(b,c,d);if(e>=0)Dr(d,a.S,e);return e;}
function AM3(a,b,c,d,e){var f;f=a.cA.cb(b,c,d,e);if(f>=0)Dr(e,a.S,f);return f;}
function AJk(a,b){return a.cA.bJ(b);}
function ALt(a){var b;b=new Ml;Yt(b,a.cA,a.dO);a.d=b;return b;}
function APb(a){var b;a.b7=1;b=a.dO;if(b!==null&&!b.b7)Ix(b);b=a.cA;if(b!==null&&!b.b7){b=b.eM();if(b!==null){a.cA.b7=1;a.cA=b;}a.cA.dK();}}
var Gu=F();
function T(){var a=this;Gu.call(a);a.bc=0;a.b4=0;a.H=null;a.iT=null;a.jr=null;a.I=0;}
var AVh=null;function NQ(){NQ=Bq(T);AFR();}
function Bp(a){var b;NQ();b=new V3;b.A=BH(64);a.H=b;}
function AED(a){return null;}
function AD$(a){return a.H;}
function AAo(a){var b,c,d,e,f;if(!a.b4)b=GV(a.H,0)>=2048?0:1;else{a:{c=a.H;b=0;d=c.bl;if(b<d){e=c.A.data;f=(e[0]^(-1))>>>0|0;if(f)b=HR(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HR(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AHG(a){return a.I;}
function ANI(a){return a;}
function XO(a){var b,c;if(a.jr===null){b=a.ec();c=new Vq;c.wC=a;c.nc=b;Bp(c);a.jr=c;Ej(c,a.b4);}return a.jr;}
function Hc(a){var b,c;if(a.iT===null){b=a.ec();c=new Vn;c.wg=a;c.sp=b;c.s7=a;Bp(c);a.iT=c;Ej(c,a.bc);a.iT.I=a.I;}return a.iT;}
function AO9(a){return 0;}
function Ej(a,b){var c;c=a.bc;if(c^b){a.bc=c?0:1;a.b4=a.b4?0:1;}if(!a.I)a.I=1;return a;}
function AGZ(a){return a.bc;}
function JE(b,c){NQ();return b.k(c);}
function HP(b,c){var d,e;NQ();if(b.cS()!==null&&c.cS()!==null){b=b.cS();c=c.cS();d=X(b.A.data.length,c.A.data.length);e=0;a:{while(e<d){if(b.A.data[e]&c.A.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Q2(b,c){var d,e,f;NQ();d=0;while(true){AMK();e=AVi.data;if(d>=e.length){f=new IE;Bl(f,B(31));f.wW=B(31);f.wF=b;J(f);}e=e[d].data;if(Bn(b,e[0]))break;d=d+1|0;}return ABs(e[1],c);}
function AFR(){var b;b=new GM;AMK();AVh=b;}
function Yj(){var a=this;T.call(a);a.kF=0;a.mK=0;a.fQ=0;a.ki=0;a.dl=0;a.eH=0;a.E=null;a.bq=null;}
function Df(){var a=new Yj();APL(a);return a;}
function AOs(a,b){var c=new Yj();AFG(c,a,b);return c;}
function APL(a){Bp(a);a.E=AP4();}
function AFG(a,b,c){Bp(a);a.E=AP4();a.kF=b;a.mK=c;}
function Cs(a,b){a:{if(a.kF){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dl){LD(a.E,Hd(b&65535));break a;}KR(a.E,Hd(b&65535));break a;}if(a.mK&&b>128){a.fQ=1;b=Gn(Gm(b));}}}if(!(!Rw(b)&&!N3(b))){if(a.ki)LD(a.H,b-55296|0);else KR(a.H,b-55296|0);}if(a.dl)LD(a.E,b);else KR(a.E,b);if(!a.I&&Lj(b))a.I=1;return a;}
function AC3(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(a.ki){if(!b.b4)FG(a.H,b.ec());else C6(a.H,b.ec());}else if(!b.b4)FA(a.H,b.ec());else{Ff(a.H,b.ec());C6(a.H,b.ec());a.b4=a.b4?0:1;a.ki=1;}if(!a.eH&&b.cS()!==null){if(a.dl){if(!b.bc)FG(a.E,b.cS());else C6(a.E,b.cS());}else if(!b.bc)FA(a.E,b.cS());else{Ff(a.E,b.cS());C6(a.E,b.cS());a.bc=a.bc?0:1;a.dl=1;}}else{c=a.bc;d=a.bq;if(d!==null){if(!c){e=new NJ;e.uO=a;e.tu=c;e.sU=d;e.sC=b;Bp(e);a.bq=e;}else{e=new NK;e.w3=a;e.pY=c;e.pA=d;e.oX=b;Bp(e);a.bq=e;}}else{if(c&&!a.dl
&&Ln(a.E)){d=new NG;d.vN=a;d.pQ=b;Bp(d);a.bq=d;}else if(!c){d=new NE;d.j5=a;d.je=c;d.nP=b;Bp(d);a.bq=d;}else{d=new NF;d.kR=a;d.jk=c;d.sH=b;Bp(d);a.bq=d;}a.eH=1;}}return a;}
function BO(a,b,c){var d,e,f,g,h;if(b>c){d=new BC;U(d);J(d);}a:{b:{if(!a.kF){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cs(a,b);b=b+1|0;}}if(!a.dl)Hx(a.E,b,c+1|0);else{d=a.E;c=c+1|0;if(b>c){d=new Bw;U(d);J(d);}e=d.bl;if(b<e){f=X(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.A.data;h[g]=h[g]&(HL(d,b)|Ho(d,f));}else{h=d.A.data;h[g]=h[g]&HL(d,b);e=g+1|0;while(e<c){d.A.data[e]=0;e=e+1|0;}if(f&31){h=d.A.data;h[c]=h[c]&Ho(d,f);}}GQ(d);}}}}return a;}
function Xk(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.fQ)a.fQ=1;c=a.b4;if(!(c^b.b4)){if(!c)FA(a.H,b.H);else C6(a.H,b.H);}else if(c)FG(a.H,b.H);else{Ff(a.H,b.H);C6(a.H,b.H);a.b4=1;}if(!a.eH&&CQ(b)!==null){c=a.bc;if(!(c^b.bc)){if(!c)FA(a.E,CQ(b));else C6(a.E,CQ(b));}else if(c)FG(a.E,CQ(b));else{Ff(a.E,CQ(b));C6(a.E,CQ(b));a.bc=1;}}else{c=a.bc;d=a.bq;if(d!==null){if(!c){e=new Ny;e.uu=a;e.r1=c;e.sG=d;e.tf=b;Bp(e);a.bq=e;}else{e=new Ok;e.u0=a;e.tc=c;e.mm=d;e.mN=b;Bp(e);a.bq=e;}}else{if(!a.dl&&Ln(a.E)){if(!c){d=new NH;d.w9
=a;d.oK=b;Bp(d);a.bq=d;}else{d=new NI;d.u5=a;d.s2=b;Bp(d);a.bq=d;}}else if(!c){d=new NL;d.r3=a;d.qi=b;d.pE=c;Bp(d);a.bq=d;}else{d=new NM;d.qI=a;d.q2=b;d.rh=c;Bp(d);a.bq=d;}a.eH=1;}}}
function VT(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.fQ)a.fQ=1;c=a.b4;if(!(c^b.b4)){if(!c)C6(a.H,b.H);else FA(a.H,b.H);}else if(!c)FG(a.H,b.H);else{Ff(a.H,b.H);C6(a.H,b.H);a.b4=0;}if(!a.eH&&CQ(b)!==null){c=a.bc;if(!(c^b.bc)){if(!c)C6(a.E,CQ(b));else FA(a.E,CQ(b));}else if(!c)FG(a.E,CQ(b));else{Ff(a.E,CQ(b));C6(a.E,CQ(b));a.bc=0;}}else{c=a.bc;d=a.bq;if(d!==null){if(!c){e=new NA;e.uN=a;e.r5=c;e.m_=d;e.pT=b;Bp(e);a.bq=e;}else{e=new NB;e.u_=a;e.ru=c;e.l4=d;e.rZ=b;Bp(e);a.bq=e;}}else{if(!a.dl&&Ln(a.E)){if(!c){d=new Nv;d.u6
=a;d.og=b;Bp(d);a.bq=d;}else{d=new Nw;d.w0=a;d.om=b;Bp(d);a.bq=d;}}else if(!c){d=new NC;d.t_=a;d.to=b;d.qV=c;Bp(d);a.bq=d;}else{d=new Nu;d.qU=a;d.rB=b;d.p0=c;Bp(d);a.bq=d;}a.eH=1;}}}
function CV(a,b){var c;c=a.bq;if(c!==null)return a.bc^c.k(b);return a.bc^Do(a.E,b);}
function CQ(a){if(!a.eH)return a.E;return null;}
function AGQ(a){return a.H;}
function AN7(a){var b,c;if(a.bq!==null)return a;b=CQ(a);c=new Nz;c.ur=a;c.hK=b;Bp(c);return Ej(c,a.bc);}
function AKB(a){var b,c,d;b=new M;O(b);c=GV(a.E,0);while(c>=0){HT(b,Gf(c));BA(b,124);c=GV(a.E,c+1|0);}d=b.M;if(d>0)Ve(b,d-1|0);return N(b);}
function AG2(a){return a.fQ;}
function IE(){var a=this;Bm.call(a);a.wW=null;a.wF=null;}
function DR(){Bz.call(this);this.G=null;}
function C8(a,b,c,d){J9(a,c);a.G=b;a.g5=d;}
function APK(a){return a.G;}
function AM6(a,b){return !a.G.bJ(b)&&!a.d.bJ(b)?0:1;}
function AOu(a,b){return 1;}
function AJ9(a){var b;a.b7=1;b=a.d;if(b!==null&&!b.b7){b=b.eM();if(b!==null){a.d.b7=1;a.d=b;}a.d.dK();}b=a.G;if(b!==null){if(!b.b7){b=b.eM();if(b!==null){a.G.b7=1;a.G=b;}a.G.dK();}else if(b instanceof Gj&&b.dO.jz)a.G=b.d;}}
function CW(){DR.call(this);this.T=null;}
function ARD(a,b,c){var d=new CW();EG(d,a,b,c);return d;}
function EG(a,b,c,d){C8(a,b,c,d);a.T=b;}
function ADy(a,b,c,d){var e,f;e=0;a:{while((b+a.T.bP()|0)<=d.w){f=a.T.bn(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.T.bP()|0;e=e+(-1)|0;}return f;}
function EU(){CW.call(this);this.iN=null;}
function AQL(a,b,c,d){var e=new EU();Rb(e,a,b,c,d);return e;}
function Rb(a,b,c,d,e){EG(a,c,d,e);a.iN=b;}
function AEn(a,b,c,d){var e,f,g,h,i;e=a.iN;f=e.d4;g=e.dY;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.T.bP()|0)>d.w)break a;i=a.T.bn(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.T.bP()|0;h=h+(-1)|0;}return i;}if((b+a.T.bP()|0)>d.w){d.cX=1;return (-1);}i=a.T.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CN=F(DR);
function ADO(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.G.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Eq=F(CW);
function AJR(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function AP5(a,b){a.d=b;a.G.K(b);}
var Vr=F(CW);
function APr(a,b,c,d){while((b+a.T.bP()|0)<=d.w&&a.T.bn(b,c)>0){b=b+a.T.bP()|0;}return a.d.c(b,c,d);}
function AKx(a,b,c,d){var e,f,g;e=a.d.b8(b,c,d);if(e<0)return (-1);f=e-a.T.bP()|0;while(f>=b&&a.T.bn(f,c)>0){g=f-a.T.bP()|0;e=f;f=g;}return e;}
function W(){var a=this;C.call(a);a.k1=null;a.j2=null;}
function ABs(a,b){if(!b&&a.k1===null)a.k1=a.C();else if(b&&a.j2===null)a.j2=Ej(a.C(),1);if(b)return a.j2;return a.k1;}
var C9=F(BC);
function Mh(){var a=this;Gu.call(a);a.d4=0;a.dY=0;}
function AKI(a){var b,c,d,e,f;b=a.d4;c=a.dY;d=c==2147483647?B(31):Lm(ACa(c));e=new M;O(e);BA(e,123);f=S(e,b);BA(f,44);BA(G(f,d),125);return N(e);}
var Nl=F(Bz);
function AI2(a,b,c,d){return b;}
function ALo(a,b){return 0;}
function V3(){var a=this;C.call(a);a.A=null;a.bl=0;}
function AP4(){var a=new V3();AE4(a);return a;}
function AE4(a){a.A=BH(0);}
function KR(a,b){var c,d;c=b/32|0;if(b>=a.bl){HW(a,c+1|0);a.bl=b+1|0;}d=a.A.data;d[c]=d[c]|1<<(b%32|0);}
function Hx(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new Bw;U(e);J(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bl){HW(a,f+1|0);a.bl=c;}if(d==f){g=a.A.data;g[d]=g[d]|Ho(a,b)&HL(a,c);}else{g=a.A.data;g[d]=g[d]|Ho(a,b);h=d+1|0;while(h<f){a.A.data[h]=(-1);h=h+1|0;}if(c&31){g=a.A.data;g[f]=g[f]|HL(a,c);}}}
function Ho(a,b){return (-1)<<(b%32|0);}
function HL(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function LD(a,b){var c,d;c=b/32|0;d=a.A.data;if(c<d.length){d[c]=d[c]&JB((-2),b%32|0);if(b==(a.bl-1|0))GQ(a);}}
function Do(a,b){var c,d;c=b/32|0;d=a.A.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GV(a,b){var c,d,e,f;c=a.bl;if(b>=c)return (-1);d=b/32|0;e=a.A.data;f=e[d]>>>(b%32|0)|0;if(f)return HR(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HR(e[f])|0;f=f+1|0;}return (-1);}
function HW(a,b){var c;c=a.A.data.length;if(c>=b)return;c=V((b*3|0)/2|0,(c*2|0)+1|0);a.A=ACO(a.A,c);}
function GQ(a){var b,c,d;b=(a.bl+31|0)/32|0;a.bl=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=MZ(a.A.data[c]);if(d<32)break;c=c+(-1)|0;a.bl=a.bl-32|0;}a.bl=a.bl-d|0;}}
function C6(a,b){var c,d,e,f;c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]&b.A.data[d];d=d+1|0;}while(true){f=a.A.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bl=X(a.bl,b.bl);GQ(a);}
function FG(a,b){var c,d,e;c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]&(b.A.data[d]^(-1));d=d+1|0;}GQ(a);}
function FA(a,b){var c,d,e;c=V(a.bl,b.bl);a.bl=c;HW(a,(c+31|0)/32|0);c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]|b.A.data[d];d=d+1|0;}}
function Ff(a,b){var c,d,e;c=V(a.bl,b.bl);a.bl=c;HW(a,(c+31|0)/32|0);c=X(a.A.data.length,b.A.data.length);d=0;while(d<c){e=a.A.data;e[d]=e[d]^b.A.data[d];d=d+1|0;}GQ(a);}
function Ln(a){return a.bl?0:1;}
function L6(){var a=this;BN.call(a);a.op=null;a.uq=0;}
function Pm(){var a=this;BN.call(a);a.lp=null;a.kU=null;}
function AA3(a,b){var c=new Pm();ACI(c,a,b);return c;}
function ACI(a,b,c){BK(a);a.lp=b;a.kU=c;}
function AEj(a,b,c,d){var e,f,g,h,i;e=a.lp.c(b,c,d);if(e<0)a:{f=a.kU;g=d.ct;e=d.w;h=b+1|0;e=BD(h,e);if(e>0){d.cX=1;e=(-1);}else{i=L(c,b);if(!f.op.k(i))e=(-1);else{if(CC(i)){if(e<0&&CY(L(c,h))){e=(-1);break a;}}else if(CY(i)&&b>g&&CC(L(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AK8(a,b){a.d=b;a.kU.d=b;a.lp.K(b);}
function AES(a,b){return 1;}
function AEC(a,b){return 1;}
function Dt(){var a=this;BN.call(a);a.df=null;a.vH=0;}
function AIX(a){var b=new Dt();Tq(b,a);return b;}
function Tq(a,b){BK(a);a.df=b.il();a.vH=b.bc;}
function AGH(a,b,c,d){var e,f,g,h;e=d.w;if(b<e){f=b+1|0;g=L(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=L(c,f);if(G3(g,f)&&a.k(Ek(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AHb(a,b){return a.df.k(b);}
function AEd(a,b){if(b instanceof DJ)return JE(a.df,b.fd);if(b instanceof Eb)return JE(a.df,b.cP);if(b instanceof Dt)return HP(a.df,b.df);if(!(b instanceof D6))return 1;return HP(a.df,b.et);}
function AIQ(a){return a.df;}
function ANC(a,b){a.d=b;}
function AGU(a,b){return 1;}
var IC=F(Dt);
function AIE(a,b){return a.df.k(Gn(Gm(b)));}
function Ya(){var a=this;BS.call(a);a.pd=null;a.vq=0;}
function AHH(a){var b=new Ya();AKO(b,a);return b;}
function AKO(a,b){Ds(a);a.pd=b.il();a.vq=b.bc;}
function AI3(a,b,c){return !a.pd.k(EM(Ep(L(c,b))))?(-1):1;}
function D6(){var a=this;BS.call(a);a.et=null;a.vZ=0;}
function AN1(a){var b=new D6();ALS(b,a);return b;}
function ALS(a,b){Ds(a);a.et=b.il();a.vZ=b.bc;}
function LH(a,b,c){return !a.et.k(L(c,b))?(-1):1;}
function ALr(a,b){if(b instanceof Eb)return JE(a.et,b.cP);if(b instanceof D6)return HP(a.et,b.et);if(!(b instanceof Dt)){if(!(b instanceof DJ))return 1;return 0;}return HP(a.et,b.df);}
function NR(){var a=this;BN.call(a);a.gb=null;a.lf=null;a.iK=0;}
function AOa(a,b){var c=new NR();ADQ(c,a,b);return c;}
function ADQ(a,b,c){BK(a);a.gb=b;a.iK=c;}
function AJQ(a,b){a.d=b;}
function Px(a){if(a.lf===null)a.lf=FK(a.gb);return a.lf;}
function ADn(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.w;f=BH(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=L(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?EW([k,l]):EW([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.iK;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gb.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=L(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=L(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.iK==3){k=f[0];m=a.gb.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.iK==2){b=f[0];m=a.gb.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AEM(a,b){return b instanceof NR&&!Bn(Px(b),Px(a))?0:1;}
function AN_(a,b){return 1;}
function Eb(){BS.call(this);this.cP=0;}
function YF(a){var b=new Eb();ALW(b,a);return b;}
function ALW(a,b){Ds(a);a.cP=b;}
function AIN(a){return 1;}
function AHD(a,b,c){return a.cP!=L(c,b)?(-1):1;}
function AGC(a,b,c,d){var e,f,g;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.w;while(true){if(b>=e)return (-1);f=Gr(c,a.cP,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AIT(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hs(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FQ(d,a.cP,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AN4(a,b){if(b instanceof Eb)return b.cP!=a.cP?0:1;if(!(b instanceof D6)){if(b instanceof Dt)return b.k(a.cP);if(!(b instanceof DJ))return 1;return 0;}return LH(b,0,V4(a.cP))<=0?0:1;}
function ACs(){BS.call(this);this.lV=0;}
function AMl(a){var b=new ACs();AKv(b,a);return b;}
function AKv(a,b){Ds(a);a.lV=EM(Ep(b));}
function ADi(a,b,c){return a.lV!=EM(Ep(L(c,b)))?(-1):1;}
function Xm(){var a=this;BS.call(a);a.tj=0;a.m4=0;}
function AFc(a){var b=new Xm();AMG(b,a);return b;}
function AMG(a,b){Ds(a);a.tj=b;a.m4=Hd(b);}
function ADI(a,b,c){return a.tj!=L(c,b)&&a.m4!=L(c,b)?(-1):1;}
function E4(){var a=this;BN.call(a);a.gV=0;a.jO=null;a.jh=null;a.jc=0;}
function ASn(a,b){var c=new E4();Na(c,a,b);return c;}
function Na(a,b,c){BK(a);a.gV=1;a.jh=b;a.jc=c;}
function APa(a,b){a.d=b;}
function AK$(a,b,c,d){var e,f,g,h,i,j,k,l;e=BH(4);f=d.w;if(b>=f)return (-1);g=JW(a,b,c,f);h=b+a.gV|0;i=ACb(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dp(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JW(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ACb(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.gV|0;if(h>=f){b=k;break a;}g=JW(a,h,c,f);b=k;}}}if(b!=a.jc)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jh.data[g])break;g=g+1|0;}return (-1);}
function VS(a){var b,c;if(a.jO===null){b=new M;O(b);c=0;while(c<a.jc){HT(b,Gf(a.jh.data[c]));c=c+1|0;}a.jO=N(b);}return a.jO;}
function JW(a,b,c,d){var e,f,g;a.gV=1;if(b>=(d-1|0))e=L(c,b);else{d=b+1|0;e=L(c,b);f=L(c,d);if(G3(e,f)){g=BQ(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CC(g[0])&&CY(g[1])?Ek(g[0],g[1]):g[0];a.gV=2;}}return e;}
function AI4(a,b){return b instanceof E4&&!Bn(VS(b),VS(a))?0:1;}
function AMi(a,b){return 1;}
var Wn=F(E4);
var SR=F(E4);
var W6=F(CN);
function AFK(a,b,c,d){var e;while(true){e=a.G.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var OJ=F(CN);
function AKn(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.G.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FF=F(CN);
function ANw(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.G.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AOD(a,b){a.d=b;a.G.K(b);}
var Op=F(FF);
function AIP(a,b,c,d){var e;e=a.G.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AKK(a,b){a.d=b;}
function E1(){var a=this;CN.call(a);a.ft=null;a.c2=0;}
function AVj(a,b,c,d,e){var f=new E1();IA(f,a,b,c,d,e);return f;}
function IA(a,b,c,d,e,f){C8(a,c,d,e);a.ft=b;a.c2=f;}
function APV(a,b,c,d){var e,f;e=Mb(d,a.c2);if(!a.G.F(d))return a.d.c(b,c,d);if(e>=a.ft.dY)return a.d.c(b,c,d);f=a.c2;e=e+1|0;D2(d,f,e);f=a.G.c(b,c,d);if(f>=0){D2(d,a.c2,0);return f;}f=a.c2;e=e+(-1)|0;D2(d,f,e);if(e>=a.ft.d4)return a.d.c(b,c,d);D2(d,a.c2,0);return (-1);}
var Ms=F(E1);
function AH8(a,b,c,d){var e,f,g;e=0;f=a.ft.dY;a:{while(true){g=a.G.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.ft.d4)return (-1);return a.d.c(b,c,d);}
var Qr=F(CN);
function APg(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.G.c(b,c,d);}
var Pw=F(FF);
function AEU(a,b,c,d){var e;if(!a.G.F(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.G.c(b,c,d);return e;}
var T2=F(E1);
function AD5(a,b,c,d){var e,f,g;e=Mb(d,a.c2);if(!a.G.F(d))return a.d.c(b,c,d);f=a.ft;if(e>=f.dY){D2(d,a.c2,0);return a.d.c(b,c,d);}if(e<f.d4){D2(d,a.c2,e+1|0);g=a.G.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){D2(d,a.c2,0);return g;}D2(d,a.c2,e+1|0);g=a.G.c(b,c,d);}return g;}
var Qt=F(DR);
function APH(a,b,c,d){var e;e=d.w;if(e>b)return a.d.cb(b,e,c,d);return a.d.c(b,c,d);}
function ANK(a,b,c,d){var e;e=d.w;if(a.d.cb(b,e,c,d)>=0)return b;return (-1);}
function Nt(){DR.call(this);this.jZ=null;}
function ALu(a,b,c,d){var e,f;e=d.w;f=T4(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cb(b,e,c,d);return a.d.c(b,c,d);}
function ADr(a,b,c,d){var e,f,g,h;e=d.w;f=a.d.b8(b,c,d);if(f<0)return (-1);g=T4(a,f,e,c);if(g>=0)e=g;g=V(f,a.d.cb(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.jZ.g1(L(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function T4(a,b,c,d){while(true){if(b>=c)return (-1);if(a.jZ.g1(L(d,b)))break;b=b+1|0;}return b;}
var EC=F();
var AVk=null;var AVl=null;function Os(b){var c;if(!(b&1)){c=AVl;if(c!==null)return c;c=new Uq;AVl=c;return c;}c=AVk;if(c!==null)return c;c=new Up;AVk=c;return c;}
var W8=F(CW);
function AD7(a,b,c,d){var e;a:{while(true){if((b+a.T.bP()|0)>d.w)break a;e=a.T.bn(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Vm=F(Eq);
function AKm(a,b,c,d){var e;if((b+a.T.bP()|0)<=d.w){e=a.T.bn(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var Ob=F(EU);
function AM9(a,b,c,d){var e,f,g,h,i;e=a.iN;f=e.d4;g=e.dY;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.T.bP()|0)>d.w)break a;i=a.T.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.T.bP()|0)>d.w){d.cX=1;return (-1);}i=a.T.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Ps=F(CW);
function ALm(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.T.bP()|0)<=d.w){e=a.T.bn(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var S_=F(Eq);
function AEb(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.G.c(b,c,d);}
var P4=F(EU);
function ANn(a,b,c,d){var e,f,g,h,i,j;e=a.iN;f=e.d4;g=e.dY;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.T.bP()|0)<=d.w){i=a.T.bn(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.T.bP()|0)>d.w){d.cX=1;return (-1);}j=a.T.bn(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JN=F(Bz);
function AJm(a,b,c,d){if(b&&!(d.eI&&b==d.ct))return (-1);return a.d.c(b,c,d);}
function AIo(a,b){return 0;}
function YQ(){Bz.call(this);this.sV=0;}
function ANZ(a){var b=new YQ();AIK(b,a);return b;}
function AIK(a,b){BK(a);a.sV=b;}
function AEz(a,b,c,d){var e,f,g;e=b<d.w?L(c,b):32;f=!b?32:L(c,b-1|0);g=d.ic?0:d.ct;return (e!=32&&!Py(a,e,b,g,c)?0:1)^(f!=32&&!Py(a,f,b-1|0,g,c)?0:1)^a.sV?(-1):a.d.c(b,c,d);}
function AEJ(a,b){return 0;}
function Py(a,b,c,d,e){var f;if(!IW(b)&&b!=95){a:{if(Cp(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=L(e,c);if(IW(f))return 0;if(Cp(f)!=6)return 1;}}return 1;}return 0;}
var Np=F(Bz);
function AII(a,b,c,d){if(b!=d.g7)return (-1);return a.d.c(b,c,d);}
function APR(a,b){return 0;}
function V5(){Bz.call(this);this.fA=0;}
function ARQ(a){var b=new V5();AB1(b,a);return b;}
function AB1(a,b){BK(a);a.fA=b;}
function AL3(a,b,c,d){var e,f,g;e=!d.eI?I(c):d.w;if(b>=e){BE(d,a.fA,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&L(c,b)==13&&L(c,b+1|0)==10){BE(d,a.fA,0);return a.d.c(b,c,d);}a:{if(f==1){g=L(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BE(d,a.fA,0);return a.d.c(b,c,d);}
function AFz(a,b){var c;c=!De(b,a.fA)?0:1;BE(b,a.fA,(-1));return c;}
var VN=F(Bz);
function AK4(a,b,c,d){if(b<(d.ic?I(c):d.w))return (-1);d.cX=1;d.wp=1;return a.d.c(b,c,d);}
function ADg(a,b){return 0;}
function ME(){Bz.call(this);this.p_=null;}
function AFn(a,b,c,d){a:{if(b!=d.w){if(!b)break a;if(d.eI&&b==d.ct)break a;if(a.p_.rw(L(c,b-1|0),L(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AHn(a,b){return 0;}
var ACi=F(BN);
function AR$(){var a=new ACi();AKU(a);return a;}
function AKU(a){BK(a);}
function APl(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;if(f>e){d.cX=1;return (-1);}g=L(c,b);if(CC(g)){h=b+2|0;if(h<=e&&G3(g,L(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AEO(a,b){a.d=b;}
function AKP(a){return (-2147483602);}
function AEN(a,b){return 1;}
function Yg(){BN.call(this);this.ks=null;}
function ARK(a){var b=new Yg();AFx(b,a);return b;}
function AFx(a,b){BK(a);a.ks=b;}
function AKX(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;if(f>e){d.cX=1;return (-1);}g=L(c,b);if(CC(g)){b=b+2|0;if(b<=e){h=L(c,f);if(G3(g,h))return a.ks.g1(Ek(g,h))?(-1):a.d.c(b,c,d);}}return a.ks.g1(g)?(-1):a.d.c(f,c,d);}
function AMT(a,b){a.d=b;}
function ADd(a){return (-2147483602);}
function APw(a,b){return 1;}
function AB$(){Bz.call(this);this.gM=0;}
function ARd(a){var b=new AB$();AHk(b,a);return b;}
function AHk(a,b){BK(a);a.gM=b;}
function AI9(a,b,c,d){var e;e=!d.eI?I(c):d.w;if(b>=e){BE(d,a.gM,0);return a.d.c(b,c,d);}if((e-b|0)==1&&L(c,b)==10){BE(d,a.gM,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AHi(a,b){var c;c=!De(b,a.gM)?0:1;BE(b,a.gM,(-1));return c;}
function AAq(){Bz.call(this);this.gU=0;}
function AQ0(a){var b=new AAq();AHI(b,a);return b;}
function AHI(a,b){BK(a);a.gU=b;}
function AK2(a,b,c,d){if((!d.eI?I(c)-b|0:d.w-b|0)<=0){BE(d,a.gU,0);return a.d.c(b,c,d);}if(L(c,b)!=10)return (-1);BE(d,a.gU,1);return a.d.c(b+1|0,c,d);}
function AG$(a,b){var c;c=!De(b,a.gU)?0:1;BE(b,a.gU,(-1));return c;}
function Xj(){Bz.call(this);this.e3=0;}
function AQi(a){var b=new Xj();APX(b,a);return b;}
function APX(a,b){BK(a);a.e3=b;}
function AIc(a,b,c,d){var e,f,g;e=!d.eI?I(c)-b|0:d.w-b|0;if(!e){BE(d,a.e3,0);return a.d.c(b,c,d);}if(e<2){f=L(c,b);g=97;}else{f=L(c,b);g=L(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BE(d,a.e3,0);return a.d.c(b,c,d);case 13:if(g!=10){BE(d,a.e3,0);return a.d.c(b,c,d);}BE(d,a.e3,0);return a.d.c(b,c,d);default:}return (-1);}
function AFE(a,b){var c;c=!De(b,a.e3)?0:1;BE(b,a.e3,(-1));return c;}
function GN(){var a=this;BN.call(a);a.mH=0;a.f$=0;}
function ASh(a,b){var c=new GN();N1(c,a,b);return c;}
function N1(a,b,c){BK(a);a.mH=b;a.f$=c;}
function AD9(a,b,c,d){var e,f,g,h;e=FY(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=0;while(true){if(f>=I(e)){BE(d,a.f$,I(e));return a.d.c(b+I(e)|0,c,d);}g=L(e,f);h=b+f|0;if(g!=L(c,h)&&Hd(L(e,f))!=L(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AMb(a,b){a.d=b;}
function FY(a,b){var c,d;c=a.mH;d=Fr(b,c);c=HZ(b,c);return (c|d|(c-d|0))>=0&&c<=I(b.ku)?B8(b.ku,d,c):null;}
function AMy(a,b){var c;c=!De(b,a.f$)?0:1;BE(b,a.f$,(-1));return c;}
var ACd=F(GN);
function AQp(a,b){var c=new ACd();AOv(c,a,b);return c;}
function AOv(a,b,c){N1(a,b,c);}
function AFJ(a,b,c,d){var e,f;e=FY(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=!Tp(c,e,b)?(-1):I(e);if(f<0)return (-1);BE(d,a.f$,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AOj(a,b,c,d){var e,f;e=FY(a,d);f=d.ct;if(e!==null&&(b+I(e)|0)<=f){while(true){if(b>f)return (-1);b=YP(c,e,b);if(b<0)return (-1);if(a.d.c(b+I(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ADV(a,b,c,d,e){var f,g;f=FY(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=OU(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+I(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKf(a,b){return 1;}
var Zy=F(GN);
function AQ1(a,b){var c=new Zy();AHh(c,a,b);return c;}
function AHh(a,b,c){N1(a,b,c);}
function AJF(a,b,c,d){var e,f;e=FY(a,d);if(e!==null&&(b+I(e)|0)<=d.w){f=0;while(true){if(f>=I(e)){BE(d,a.f$,I(e));return a.d.c(b+I(e)|0,c,d);}if(EM(Ep(L(e,f)))!=EM(Ep(L(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Nk=F(F8);
function AG3(a,b,c,d,e){Mi(a,b,c,d,e);return a;}
function AEE(a,b,c,d){Wd(a,b,c,d);return a;}
function AE3(a,b){I2(a,b);}
function ANO(a,b,c){Wt(a,b,c);return a;}
function QA(){var a=this;BS.call(a);a.ce=null;a.jQ=null;a.kD=null;}
function AF4(a,b,c){return !JK(a,c,b)?(-1):a.bA;}
function AEu(a,b,c,d){var e,f,g;e=d.w;while(true){if(b>e)return (-1);f=L(a.ce,a.bA-1|0);a:{while(true){g=a.bA;if(b>(e-g|0)){b=(-1);break a;}g=L(c,(b+g|0)-1|0);if(g==f&&JK(a,c,b))break;b=b+RI(a.jQ,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bA|0,c,d)>=0)break;b=b+1|0;}return b;}
function AHm(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=L(a.ce,0);g=(I(d)-c|0)-a.bA|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=L(d,c);if(g==f&&JK(a,d,c))break;c=c-RI(a.kD,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bA|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHP(a,b){var c;if(b instanceof Eb)return b.cP!=L(a.ce,0)?0:1;if(b instanceof D6)return LH(b,0,B8(a.ce,0,1))<=0?0:1;if(!(b instanceof Dt)){if(!(b instanceof DJ))return 1;return I(a.ce)>1&&b.fd==Ek(L(a.ce,0),L(a.ce,1))?1:0;}a:{b:{b=b;if(!b.k(L(a.ce,0))){if(I(a.ce)<=1)break b;if(!b.k(Ek(L(a.ce,0),L(a.ce,1))))break b;}c=1;break a;}c=0;}return c;}
function JK(a,b,c){var d;d=0;while(d<a.bA){if(L(b,d+c|0)!=L(a.ce,d))return 0;d=d+1|0;}return 1;}
function Xi(){BS.call(this);this.ie=null;}
function ASk(a){var b=new Xi();AN5(b,a);return b;}
function AN5(a,b){var c,d,e;Ds(a);c=new M;O(c);d=0;while(true){e=BD(d,b.M);if(e>=0){a.ie=N(c);a.bA=c.M;return;}if(d<0)break;if(e>=0)break;BA(c,EM(Ep(b.B.data[d])));d=d+1|0;}b=new Bw;U(b);J(b);}
function AJN(a,b,c){var d;d=0;while(true){if(d>=I(a.ie))return I(a.ie);if(L(a.ie,d)!=EM(Ep(L(c,b+d|0))))break;d=d+1|0;}return (-1);}
function My(){BS.call(this);this.gJ=null;}
function AM_(a,b,c){var d,e,f;d=0;while(true){if(d>=I(a.gJ))return I(a.gJ);e=L(a.gJ,d);f=b+d|0;if(e!=L(c,f)&&Hd(L(a.gJ,d))!=L(c,f))break;d=d+1|0;}return (-1);}
var GM=F();
var AVm=null;var AVn=null;var AVi=null;function AMK(){AMK=Bq(GM);AGo();}
function AGo(){AVm=ARZ();AVn=AQ8();AVi=H($rt_arraycls(C),[H(C,[B(358),ASi()]),H(C,[B(359),AQf()]),H(C,[B(360),ARW()]),H(C,[B(361),AR4()]),H(C,[B(362),AVn]),H(C,[B(363),ARh()]),H(C,[B(364),AQ6()]),H(C,[B(365),AQt()]),H(C,[B(366),AQo()]),H(C,[B(367),AQA()]),H(C,[B(368),AQN()]),H(C,[B(369),AQx()]),H(C,[B(370),ARC()]),H(C,[B(371),AP_()]),H(C,[B(372),AR0()]),H(C,[B(373),AQM()]),H(C,[B(374),ARf()]),H(C,[B(375),AQK()]),H(C,[B(376),ARg()]),H(C,[B(377),AQD()]),H(C,[B(378),AR9()]),H(C,[B(379),AQH()]),H(C,[B(380),ARl()]),
H(C,[B(381),ARU()]),H(C,[B(382),ARR()]),H(C,[B(383),AR5()]),H(C,[B(384),AQC()]),H(C,[B(385),ARI()]),H(C,[B(386),AVm]),H(C,[B(387),ARp()]),H(C,[B(388),AQu()]),H(C,[B(389),AVm]),H(C,[B(390),AP9()]),H(C,[B(391),AVn]),H(C,[B(392),AQV()]),H(C,[B(393),P(0,127)]),H(C,[B(394),P(128,255)]),H(C,[B(395),P(256,383)]),H(C,[B(396),P(384,591)]),H(C,[B(397),P(592,687)]),H(C,[B(398),P(688,767)]),H(C,[B(399),P(768,879)]),H(C,[B(400),P(880,1023)]),H(C,[B(401),P(1024,1279)]),H(C,[B(402),P(1280,1327)]),H(C,[B(403),P(1328,1423)]),
H(C,[B(404),P(1424,1535)]),H(C,[B(405),P(1536,1791)]),H(C,[B(406),P(1792,1871)]),H(C,[B(407),P(1872,1919)]),H(C,[B(408),P(1920,1983)]),H(C,[B(409),P(2304,2431)]),H(C,[B(410),P(2432,2559)]),H(C,[B(411),P(2560,2687)]),H(C,[B(412),P(2688,2815)]),H(C,[B(413),P(2816,2943)]),H(C,[B(414),P(2944,3071)]),H(C,[B(415),P(3072,3199)]),H(C,[B(416),P(3200,3327)]),H(C,[B(417),P(3328,3455)]),H(C,[B(418),P(3456,3583)]),H(C,[B(419),P(3584,3711)]),H(C,[B(420),P(3712,3839)]),H(C,[B(421),P(3840,4095)]),H(C,[B(422),P(4096,4255)]),
H(C,[B(423),P(4256,4351)]),H(C,[B(424),P(4352,4607)]),H(C,[B(425),P(4608,4991)]),H(C,[B(426),P(4992,5023)]),H(C,[B(427),P(5024,5119)]),H(C,[B(428),P(5120,5759)]),H(C,[B(429),P(5760,5791)]),H(C,[B(430),P(5792,5887)]),H(C,[B(431),P(5888,5919)]),H(C,[B(432),P(5920,5951)]),H(C,[B(433),P(5952,5983)]),H(C,[B(434),P(5984,6015)]),H(C,[B(435),P(6016,6143)]),H(C,[B(436),P(6144,6319)]),H(C,[B(437),P(6400,6479)]),H(C,[B(438),P(6480,6527)]),H(C,[B(439),P(6528,6623)]),H(C,[B(440),P(6624,6655)]),H(C,[B(441),P(6656,6687)]),
H(C,[B(442),P(7424,7551)]),H(C,[B(443),P(7552,7615)]),H(C,[B(444),P(7616,7679)]),H(C,[B(445),P(7680,7935)]),H(C,[B(446),P(7936,8191)]),H(C,[B(447),P(8192,8303)]),H(C,[B(448),P(8304,8351)]),H(C,[B(449),P(8352,8399)]),H(C,[B(450),P(8400,8447)]),H(C,[B(451),P(8448,8527)]),H(C,[B(452),P(8528,8591)]),H(C,[B(453),P(8592,8703)]),H(C,[B(454),P(8704,8959)]),H(C,[B(455),P(8960,9215)]),H(C,[B(456),P(9216,9279)]),H(C,[B(457),P(9280,9311)]),H(C,[B(458),P(9312,9471)]),H(C,[B(459),P(9472,9599)]),H(C,[B(460),P(9600,9631)]),
H(C,[B(461),P(9632,9727)]),H(C,[B(462),P(9728,9983)]),H(C,[B(463),P(9984,10175)]),H(C,[B(464),P(10176,10223)]),H(C,[B(465),P(10224,10239)]),H(C,[B(466),P(10240,10495)]),H(C,[B(467),P(10496,10623)]),H(C,[B(468),P(10624,10751)]),H(C,[B(469),P(10752,11007)]),H(C,[B(470),P(11008,11263)]),H(C,[B(471),P(11264,11359)]),H(C,[B(472),P(11392,11519)]),H(C,[B(473),P(11520,11567)]),H(C,[B(474),P(11568,11647)]),H(C,[B(475),P(11648,11743)]),H(C,[B(476),P(11776,11903)]),H(C,[B(477),P(11904,12031)]),H(C,[B(478),P(12032,12255)]),
H(C,[B(479),P(12272,12287)]),H(C,[B(480),P(12288,12351)]),H(C,[B(481),P(12352,12447)]),H(C,[B(482),P(12448,12543)]),H(C,[B(483),P(12544,12591)]),H(C,[B(484),P(12592,12687)]),H(C,[B(485),P(12688,12703)]),H(C,[B(486),P(12704,12735)]),H(C,[B(487),P(12736,12783)]),H(C,[B(488),P(12784,12799)]),H(C,[B(489),P(12800,13055)]),H(C,[B(490),P(13056,13311)]),H(C,[B(491),P(13312,19893)]),H(C,[B(492),P(19904,19967)]),H(C,[B(493),P(19968,40959)]),H(C,[B(494),P(40960,42127)]),H(C,[B(495),P(42128,42191)]),H(C,[B(496),P(42752,
42783)]),H(C,[B(497),P(43008,43055)]),H(C,[B(498),P(44032,55203)]),H(C,[B(499),P(55296,56191)]),H(C,[B(500),P(56192,56319)]),H(C,[B(501),P(56320,57343)]),H(C,[B(502),P(57344,63743)]),H(C,[B(503),P(63744,64255)]),H(C,[B(504),P(64256,64335)]),H(C,[B(505),P(64336,65023)]),H(C,[B(506),P(65024,65039)]),H(C,[B(507),P(65040,65055)]),H(C,[B(508),P(65056,65071)]),H(C,[B(509),P(65072,65103)]),H(C,[B(510),P(65104,65135)]),H(C,[B(511),P(65136,65279)]),H(C,[B(512),P(65280,65519)]),H(C,[B(513),P(0,1114111)]),H(C,[B(514),
AQy()]),H(C,[B(515),BJ(0,1)]),H(C,[B(516),Ie(62,1)]),H(C,[B(517),BJ(1,1)]),H(C,[B(518),BJ(2,1)]),H(C,[B(519),BJ(3,0)]),H(C,[B(520),BJ(4,0)]),H(C,[B(521),BJ(5,1)]),H(C,[B(522),Ie(448,1)]),H(C,[B(523),BJ(6,1)]),H(C,[B(524),BJ(7,0)]),H(C,[B(525),BJ(8,1)]),H(C,[B(526),Ie(3584,1)]),H(C,[B(527),BJ(9,1)]),H(C,[B(528),BJ(10,1)]),H(C,[B(529),BJ(11,1)]),H(C,[B(530),Ie(28672,0)]),H(C,[B(531),BJ(12,0)]),H(C,[B(532),BJ(13,0)]),H(C,[B(533),BJ(14,0)]),H(C,[B(534),AQ2(983040,1,1)]),H(C,[B(535),BJ(15,0)]),H(C,[B(536),BJ(16,
1)]),H(C,[B(537),BJ(18,1)]),H(C,[B(538),ARc(19,0,1)]),H(C,[B(539),Ie(1643118592,1)]),H(C,[B(540),BJ(20,0)]),H(C,[B(541),BJ(21,0)]),H(C,[B(542),BJ(22,0)]),H(C,[B(543),BJ(23,0)]),H(C,[B(544),BJ(24,1)]),H(C,[B(545),Ie(2113929216,1)]),H(C,[B(546),BJ(25,1)]),H(C,[B(547),BJ(26,0)]),H(C,[B(548),BJ(27,0)]),H(C,[B(549),BJ(28,1)]),H(C,[B(550),BJ(29,0)]),H(C,[B(551),BJ(30,0)])]);}
function LP(){BS.call(this);this.pw=0;}
function ANg(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.pw!=Gn(Gm(Ek(e,d)))?(-1):2;}
function Kl(){BN.call(this);this.fM=0;}
function AKT(a){var b=new Kl();AEX(b,a);return b;}
function AEX(a,b){BK(a);a.fM=b;}
function ALg(a,b){a.d=b;}
function AFA(a,b,c,d){var e,f;e=b+1|0;if(e>d.w){d.cX=1;return (-1);}f=L(c,b);if(b>d.ct&&CC(L(c,b-1|0)))return (-1);if(a.fM!=f)return (-1);return a.d.c(e,c,d);}
function AHL(a,b,c,d){var e,f,g,h;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.ct;f=d.w;while(true){if(b>=f)return (-1);g=Gr(c,a.fM,b);if(g<0)return (-1);if(g>e&&CC(L(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AF_(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hs(a,b,c,d,e);f=e.ct;a:{while(true){if(c<b)return (-1);g=FQ(d,a.fM,c);if(g<0)break a;if(g<b)break a;if(g>f&&CC(L(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ADT(a,b){if(b instanceof Eb)return 0;if(b instanceof D6)return 0;if(b instanceof Dt)return 0;if(b instanceof DJ)return 0;if(b instanceof KF)return 0;if(!(b instanceof Kl))return 1;return b.fM!=a.fM?0:1;}
function ANU(a,b){return 1;}
function KF(){BN.call(this);this.fn=0;}
function AIg(a){var b=new KF();AKZ(b,a);return b;}
function AKZ(a,b){BK(a);a.fn=b;}
function AE2(a,b){a.d=b;}
function ADx(a,b,c,d){var e,f,g,h;e=d.w;f=b+1|0;g=BD(f,e);if(g>0){d.cX=1;return (-1);}h=L(c,b);if(g<0&&CY(L(c,f)))return (-1);if(a.fn!=h)return (-1);return a.d.c(f,c,d);}
function ALE(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.w;while(true){if(b>=e)return (-1);f=Gr(c,a.fn,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CY(L(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function AM$(a,b,c,d,e){var f,g;if(!(d instanceof Bv))return Hs(a,b,c,d,e);f=e.w;a:{while(true){if(c<b)return (-1);g=FQ(d,a.fn,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CY(L(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AF5(a,b){if(b instanceof Eb)return 0;if(b instanceof D6)return 0;if(b instanceof Dt)return 0;if(b instanceof DJ)return 0;if(b instanceof Kl)return 0;if(!(b instanceof KF))return 1;return b.fn!=a.fn?0:1;}
function ALO(a,b){return 1;}
function DJ(){var a=this;BS.call(a);a.i3=0;a.hH=0;a.fd=0;}
function AMA(a,b,c){var d,e;d=b+1|0;e=L(c,b);d=L(c,d);return a.i3==e&&a.hH==d?2:(-1);}
function AKC(a,b,c,d){var e,f;if(!(c instanceof Bv))return Hi(a,b,c,d);e=d.w;while(b<e){b=Gr(c,a.i3,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=L(c,b);if(a.hH==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AEZ(a,b,c,d,e){var f;if(!(d instanceof Bv))return Hs(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FQ(d,a.hH,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.i3==L(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AMm(a,b){if(b instanceof DJ)return b.fd!=a.fd?0:1;if(b instanceof Dt)return b.k(a.fd);if(b instanceof Eb)return 0;if(!(b instanceof D6))return 1;return 0;}
var Up=F(EC);
function AFd(a,b){return b!=10?0:1;}
function AMr(a,b,c){return b!=10?0:1;}
var Uq=F(EC);
function ANq(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AO5(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ABd(){var a=this;C.call(a);a.lH=null;a.jj=null;a.gm=0;a.tS=0;}
function AKN(a){var b=new ABd();AIG(b,a);return b;}
function AIG(a,b){var c,d;while(true){c=a.gm;if(b<c)break;a.gm=c<<1|1;}d=c<<1|1;a.gm=d;d=d+1|0;a.lH=BH(d);a.jj=BH(d);a.tS=b;}
function P7(a,b,c){var d,e,f,g;d=0;e=a.gm;f=b&e;while(true){g=a.lH.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jj.data[f]=c;}
function RI(a,b){var c,d,e,f;c=a.gm;d=b&c;e=0;while(true){f=a.lH.data[d];if(!f)break;if(f==b)return a.jj.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.tS;}
var XA=F();
var Ki=F(W);
function ARZ(){var a=new Ki();AH9(a);return a;}
function AH9(a){}
function ZG(a){return Cs(BO(Df(),9,13),32);}
var Jj=F(W);
function AQ8(){var a=new Jj();ANR(a);return a;}
function ANR(a){}
function AAj(a){return BO(Df(),48,57);}
var AA9=F(W);
function ASi(){var a=new AA9();AHv(a);return a;}
function AHv(a){}
function AMW(a){return BO(Df(),97,122);}
var ABD=F(W);
function AQf(){var a=new ABD();AIM(a);return a;}
function AIM(a){}
function ANX(a){return BO(Df(),65,90);}
var ABH=F(W);
function ARW(){var a=new ABH();AEw(a);return a;}
function AEw(a){}
function AGI(a){return BO(Df(),0,127);}
var Ke=F(W);
function AR4(){var a=new Ke();AFL(a);return a;}
function AFL(a){}
function Yk(a){return BO(BO(Df(),97,122),65,90);}
var KO=F(Ke);
function ARh(){var a=new KO();AIn(a);return a;}
function AIn(a){}
function Zd(a){return BO(Yk(a),48,57);}
var AC2=F(W);
function AQ6(){var a=new AC2();AKp(a);return a;}
function AKp(a){}
function AHJ(a){return BO(BO(BO(Df(),33,64),91,96),123,126);}
var LF=F(KO);
function AQt(){var a=new LF();AL8(a);return a;}
function AL8(a){}
function Xe(a){return BO(BO(BO(Zd(a),33,64),91,96),123,126);}
var ZS=F(LF);
function AQo(){var a=new ZS();ANH(a);return a;}
function ANH(a){}
function AJ$(a){return Cs(Xe(a),32);}
var AAe=F(W);
function AQA(){var a=new AAe();ANa(a);return a;}
function ANa(a){}
function AFY(a){return Cs(Cs(Df(),32),9);}
var YJ=F(W);
function AQN(){var a=new YJ();AOR(a);return a;}
function AOR(a){}
function AJ6(a){return Cs(BO(Df(),0,31),127);}
var Ys=F(W);
function AQx(){var a=new Ys();AEI(a);return a;}
function AEI(a){}
function AO8(a){return BO(BO(BO(Df(),48,57),97,102),65,70);}
var ABK=F(W);
function ARC(){var a=new ABK();AEm(a);return a;}
function AEm(a){}
function AKL(a){var b;b=new RY;b.vG=a;Bp(b);b.I=1;return b;}
var ADc=F(W);
function AP_(){var a=new ADc();AMp(a);return a;}
function AMp(a){}
function ADp(a){var b;b=new L4;b.vP=a;Bp(b);b.I=1;return b;}
var ABe=F(W);
function AR0(){var a=new ABe();AEx(a);return a;}
function AEx(a){}
function AIh(a){var b;b=new QW;b.vn=a;Bp(b);return b;}
var AA5=F(W);
function AQM(){var a=new AA5();AJ7(a);return a;}
function AJ7(a){}
function AME(a){var b;b=new QV;b.u8=a;Bp(b);return b;}
var AB4=F(W);
function ARf(){var a=new AB4();AFI(a);return a;}
function AFI(a){}
function AFU(a){var b;b=new VV;b.ww=a;Bp(b);Hx(b.H,0,2048);b.I=1;return b;}
var XS=F(W);
function AQK(){var a=new XS();AE9(a);return a;}
function AE9(a){}
function AGi(a){var b;b=new N6;b.v0=a;Bp(b);b.I=1;return b;}
var Xx=F(W);
function ARg(){var a=new Xx();AJK(a);return a;}
function AJK(a){}
function AO0(a){var b;b=new Nf;b.wX=a;Bp(b);b.I=1;return b;}
var ABk=F(W);
function AQD(){var a=new ABk();AKq(a);return a;}
function AKq(a){}
function ADj(a){var b;b=new PH;b.vI=a;Bp(b);return b;}
var ABv=F(W);
function AR9(){var a=new ABv();AH0(a);return a;}
function AH0(a){}
function AJb(a){var b;b=new LX;b.ui=a;Bp(b);b.I=1;return b;}
var Y6=F(W);
function AQH(){var a=new Y6();ADW(a);return a;}
function ADW(a){}
function AGr(a){var b;b=new L2;b.v7=a;Bp(b);b.I=1;return b;}
var AAh=F(W);
function ARl(){var a=new AAh();AFh(a);return a;}
function AFh(a){}
function AHp(a){var b;b=new M2;b.wt=a;Bp(b);b.I=1;return b;}
var ACD=F(W);
function ARU(){var a=new ACD();AJh(a);return a;}
function AJh(a){}
function AJd(a){var b;b=new Ow;b.wK=a;Bp(b);b.I=1;return b;}
var ABu=F(W);
function ARR(){var a=new ABu();AKH(a);return a;}
function AKH(a){}
function AOc(a){var b;b=new OF;b.vp=a;Bp(b);return b;}
var Zv=F(W);
function AR5(){var a=new Zv();AE_(a);return a;}
function AE_(a){}
function ALX(a){var b;b=new SM;b.wb=a;Bp(b);return b;}
var Y4=F(W);
function AQC(){var a=new Y4();AMF(a);return a;}
function AMF(a){}
function AKF(a){var b;b=new Rv;b.um=a;Bp(b);b.I=1;return b;}
var AC9=F(W);
function ARI(){var a=new AC9();AHS(a);return a;}
function AHS(a){}
function AMP(a){var b;b=new Me;b.w$=a;Bp(b);b.I=1;return b;}
var IN=F(W);
function ARp(){var a=new IN();AGz(a);return a;}
function AGz(a){}
function AAf(a){return Cs(BO(BO(BO(Df(),97,122),65,90),48,57),95);}
var AB6=F(IN);
function AQu(){var a=new AB6();AH4(a);return a;}
function AH4(a){}
function AKs(a){var b;b=Ej(AAf(a),1);b.I=1;return b;}
var ZY=F(Ki);
function AP9(){var a=new ZY();AOF(a);return a;}
function AOF(a){}
function AEs(a){var b;b=Ej(ZG(a),1);b.I=1;return b;}
var YY=F(Jj);
function AQV(){var a=new YY();AI1(a);return a;}
function AI1(a){}
function AHA(a){var b;b=Ej(AAj(a),1);b.I=1;return b;}
function Yy(){var a=this;W.call(a);a.po=0;a.p7=0;}
function P(a,b){var c=new Yy();AOY(c,a,b);return c;}
function AOY(a,b,c){a.po=b;a.p7=c;}
function AJr(a){return BO(Df(),a.po,a.p7);}
var YT=F(W);
function AQy(){var a=new YT();APd(a);return a;}
function APd(a){}
function AOO(a){return BO(BO(Df(),65279,65279),65520,65533);}
function ZM(){var a=this;W.call(a);a.li=0;a.ja=0;a.nU=0;}
function BJ(a,b){var c=new ZM();AFD(c,a,b);return c;}
function ARc(a,b,c){var d=new ZM();AOZ(d,a,b,c);return d;}
function AFD(a,b,c){a.ja=c;a.li=b;}
function AOZ(a,b,c,d){a.nU=d;a.ja=c;a.li=b;}
function AG7(a){var b;b=ASe(a.li);if(a.nU)Hx(b.H,0,2048);b.I=a.ja;return b;}
function ZU(){var a=this;W.call(a);a.lh=0;a.jl=0;a.mM=0;}
function Ie(a,b){var c=new ZU();AGs(c,a,b);return c;}
function AQ2(a,b,c){var d=new ZU();ADm(d,a,b,c);return d;}
function AGs(a,b,c){a.jl=c;a.lh=b;}
function ADm(a,b,c,d){a.mM=d;a.jl=c;a.lh=b;}
function ADk(a){var b;b=new QO;AAS(b,a.lh);if(a.mM)Hx(b.H,0,2048);b.I=a.jl;return b;}
var YD=F();
var X$=F();
function Zu(b){var c,d,e,f,g,h,i;c=AM0(Gi(b));d=I$(c);e=BH(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+I$(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Mr(c);h=h+1|0;}return e;}
function J2(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function MF(){var a=this;C.call(a);a.oo=0;a.qp=0;a.oD=null;}
function AG5(a,b,c){var d=new MF();ANG(d,a,b,c);return d;}
function ANG(a,b,c,d){a.oo=b;a.qp=c;a.oD=d;}
function ABp(){var a=this;C.call(a);a.nx=null;a.pv=0;}
function AM0(a){var b=new ABp();AF8(b,a);return b;}
function AF8(a,b){a.nx=b;}
var Zt=F();
function I$(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nx.data;f=b.pv;b.pv=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Be(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Mr(b){var c,d;c=I$(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Yi(){C.call(this);this.F6=null;}
function Mv(){C.call(this);this.ps=null;}
function AKA(a,b){var c,d,e,f;c=b.data;b=a.ps;d=Em(c[0]);e=Fy(c[1]);Z8(b.e.g,d,e);Gh(Cg(b),AUh);FT(Cg(b));f=JP(Fu(),b.ep);b=new M;O(b);G(Hu(G(b,B(552)),f),B(224));$rt_globals.console.info($rt_ustr(N(b)));}
function P$(){C.call(this);this.pZ=null;}
function AG4(a,b){QR(a.pZ,b);}
function UB(){var a=this;C.call(a);a.vC=null;a.vB=null;}
function V6(){var a=this;C.call(a);a.uv=null;a.uw=null;}
var ABg=F(0);
function ACR(b){return !b?H(Bv,[B(124),B(125),B(553)]):H(Bv,[B(124),B(125),B(553),B(41)]);}
function Vq(){var a=this;T.call(a);a.nc=null;a.wC=null;}
function AGP(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b4^Do(a.nc,c):0;}
function Vn(){var a=this;T.call(a);a.sp=null;a.s7=null;a.wg=null;}
function ADL(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b4^Do(a.sp,c):0;return a.s7.k(b)&&!d?1:0;}
function Nz(){var a=this;T.call(a);a.hK=null;a.ur=null;}
function AJi(a,b){return a.bc^Do(a.hK,b);}
function AHs(a){var b,c,d;b=new M;O(b);c=GV(a.hK,0);while(c>=0){HT(b,Gf(c));BA(b,124);c=GV(a.hK,c+1|0);}d=b.M;if(d>0)Ve(b,d-1|0);return N(b);}
function NG(){var a=this;T.call(a);a.pQ=null;a.vN=null;}
function AMD(a,b){return a.pQ.k(b);}
function NE(){var a=this;T.call(a);a.je=0;a.nP=null;a.j5=null;}
function ANf(a,b){return !(a.je^Do(a.j5.E,b))&&!(a.je^a.j5.dl^a.nP.k(b))?0:1;}
function NF(){var a=this;T.call(a);a.jk=0;a.sH=null;a.kR=null;}
function AJM(a,b){return !(a.jk^Do(a.kR.E,b))&&!(a.jk^a.kR.dl^a.sH.k(b))?1:0;}
function NJ(){var a=this;T.call(a);a.tu=0;a.sU=null;a.sC=null;a.uO=null;}
function AGn(a,b){return a.tu^(!a.sU.k(b)&&!a.sC.k(b)?0:1);}
function NK(){var a=this;T.call(a);a.pY=0;a.pA=null;a.oX=null;a.w3=null;}
function ADe(a,b){return a.pY^(!a.pA.k(b)&&!a.oX.k(b)?0:1)?0:1;}
function NH(){var a=this;T.call(a);a.oK=null;a.w9=null;}
function AHw(a,b){return CV(a.oK,b);}
function NI(){var a=this;T.call(a);a.s2=null;a.u5=null;}
function AJP(a,b){return CV(a.s2,b)?0:1;}
function NL(){var a=this;T.call(a);a.qi=null;a.pE=0;a.r3=null;}
function AOo(a,b){return !CV(a.qi,b)&&!(a.pE^Do(a.r3.E,b))?0:1;}
function NM(){var a=this;T.call(a);a.q2=null;a.rh=0;a.qI=null;}
function AFO(a,b){return !CV(a.q2,b)&&!(a.rh^Do(a.qI.E,b))?1:0;}
function Ny(){var a=this;T.call(a);a.r1=0;a.sG=null;a.tf=null;a.uu=null;}
function AP8(a,b){return !(a.r1^a.sG.k(b))&&!CV(a.tf,b)?0:1;}
function Ok(){var a=this;T.call(a);a.tc=0;a.mm=null;a.mN=null;a.u0=null;}
function AHz(a,b){return !(a.tc^a.mm.k(b))&&!CV(a.mN,b)?1:0;}
function Nv(){var a=this;T.call(a);a.og=null;a.u6=null;}
function AFM(a,b){return CV(a.og,b);}
function Nw(){var a=this;T.call(a);a.om=null;a.w0=null;}
function AHg(a,b){return CV(a.om,b)?0:1;}
function NC(){var a=this;T.call(a);a.to=null;a.qV=0;a.t_=null;}
function AIL(a,b){return CV(a.to,b)&&a.qV^Do(a.t_.E,b)?1:0;}
function Nu(){var a=this;T.call(a);a.rB=null;a.p0=0;a.qU=null;}
function AN3(a,b){return CV(a.rB,b)&&a.p0^Do(a.qU.E,b)?0:1;}
function NA(){var a=this;T.call(a);a.r5=0;a.m_=null;a.pT=null;a.uN=null;}
function AEH(a,b){return a.r5^a.m_.k(b)&&CV(a.pT,b)?1:0;}
function NB(){var a=this;T.call(a);a.ru=0;a.l4=null;a.rZ=null;a.u_=null;}
function ALN(a,b){return a.ru^a.l4.k(b)&&CV(a.rZ,b)?0:1;}
var La=F(0);
function Rt(){var a=this;C.call(a);a.uW=null;a.sI=null;a.h6=null;a.ch=null;a.hL=0;a.jX=0;}
function L0(a,b){var c,d,e;c=I(a.h6);if(b>=0&&b<=c){WH(a.ch,null,(-1),(-1));d=a.ch;d.iO=1;d.dI=b;c=d.g7;if(c<0)c=b;d.g7=c;b=a.sI.b8(b,a.h6,d);if(b==(-1))a.ch.cX=1;if(b>=0){d=a.ch;if(d.h8){e=d.dg.data;if(e[0]==(-1)){c=d.dI;e[0]=c;e[1]=c;}d.g7=Iw(d);return 1;}}a.ch.dI=(-1);return 0;}d=new Bw;Bl(d,CZ(b));J(d);}
function ACB(a){return N_(a.ch,0);}
function YZ(a){return Q0(a.ch,0);}
function XG(a){return a.ch.ic;}
function Cd(){Cr.call(this);this.ld=null;}
var AVo=null;var AVp=null;var AVq=null;var AVr=null;var AVs=null;var AVt=null;var AVu=null;var AVv=null;var AVw=null;var AVx=null;var AVy=null;var AVz=null;var AVA=null;var AVB=null;var AVC=null;var AT6=null;function ABS(){ABS=Bq(Cd);AMz();}
function Dy(a,b,c){var d=new Cd();N$(d,a,b,c);return d;}
function AHZ(a,b,c,d){var e=new Cd();X6(e,a,b,c,d);return e;}
function N$(a,b,c,d){ABS();DE(a,b,c);a.ld=Su(d,null);}
function X6(a,b,c,d,e){ABS();DE(a,b,c);a.ld=Su(d,e);}
function AMz(){var b;b=new Cd;Dq();N$(b,B(304),0,AT7);AVo=b;AVp=Dy(B(305),1,Cw(0,49,191));AVq=Dy(B(306),2,Br(B(554)));AVr=Dy(B(48),3,Br(B(555)));AVs=Dy(B(309),4,AT7);AVt=Dy(B(311),5,Br(B(556)));AVu=Dy(B(312),6,Br(B(322)));AVv=Dy(B(49),7,Br(B(557)));AVw=Dy(B(315),8,Br(B(558)));AVx=AHZ(B(317),9,ATQ,Cw(237,235,252));AVy=AHZ(B(318),10,Br(B(319)),Br(B(559)));AVz=Dy(B(321),11,Br(B(322)));AVA=Dy(B(323),12,Br(B(324)));AVB=Dy(B(325),13,Br(B(326)));b=Dy(B(327),14,Br(B(328)));AVC=b;AT6=H(Cd,[AVo,AVp,AVq,AVr,AVs,AVt,AVu,
AVv,AVw,AVx,AVy,AVz,AVA,AVB,b]);}
function Nm(){C.call(this);this.qD=null;}
function AMO(a,b){TA(a.qD,b);}
var Ml=F(Gj);
function AG9(a,b,c,d){var e,f,g;e=0;f=d.w;a:{while(true){if(b>f){b=e;break a;}g=Fr(d,a.S);Dr(d,a.S,b);e=a.cA.c(b,c,d);if(e>=0)break;Dr(d,a.S,g);b=b+1|0;}}return b;}
function APT(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fr(e,a.S);Dr(e,a.S,c);f=a.cA.c(c,d,e);if(f>=0)break;Dr(e,a.S,g);c=c+(-1)|0;}}return c;}
function AFy(a){return null;}
var Pf=F(Bm);
var Wf=F(Bm);
function Ul(){FC.call(this);this.wS=0;}
function O5(){FC.call(this);this.wO=0;}
var WZ=F(Bm);
function Uf(){var a=this;C.call(a);a.qn=null;a.sq=null;a.tH=0;a.jw=0;}
function JR(a,b){return B4(a.qn)<b?0:1;}
function RE(){var a=this;C.call(a);a.vo=null;a.oG=null;}
function RD(){C.call(this);this.uj=null;}
function Uj(){var a=this;C.call(a);a.dg=null;a.iY=null;a.ko=null;a.ku=null;a.nR=0;a.h8=0;a.ct=0;a.w=0;a.dI=0;a.ic=0;a.eI=0;a.cX=0;a.wp=0;a.g7=0;a.iO=0;}
function BE(a,b,c){a.iY.data[b]=c;}
function De(a,b){return a.iY.data[b];}
function Iw(a){return Q0(a,0);}
function Q0(a,b){QN(a,b);return a.dg.data[(b*2|0)+1|0];}
function Dr(a,b,c){a.dg.data[b*2|0]=c;}
function I3(a,b,c){a.dg.data[(b*2|0)+1|0]=c;}
function Fr(a,b){return a.dg.data[b*2|0];}
function HZ(a,b){return a.dg.data[(b*2|0)+1|0];}
function AA$(a){return N_(a,0);}
function N_(a,b){QN(a,b);return a.dg.data[b*2|0];}
function Mb(a,b){return a.ko.data[b];}
function D2(a,b,c){a.ko.data[b]=c;}
function QN(a,b){var c;if(!a.h8){c=new DP;U(c);J(c);}if(b>=0&&b<a.nR)return;c=new Bw;Bl(c,CZ(b));J(c);}
function WH(a,b,c,d){a.h8=0;a.iO=2;Ha(a.dg,(-1));Ha(a.iY,(-1));if(b!==null)a.ku=b;if(c>=0){a.ct=c;a.w=d;}a.dI=a.ct;}
function Zi(a){return a.iO;}
function Wc(){C.call(this);this.tW=null;}
function ALy(a){DB(a.tW);}
var YV=F();
var OY=F(0);
function Wh(){var a=this;C.call(a);a.q4=null;a.q5=0;a.q6=null;}
function Lq(a,b){var c,d,e,f,g,h,i,j,k;c=a.q4;d=a.q5;e=a.q6;if(b<=d){f=Cg(c);g=new Uu;g.nw=c;h=R(C,1);h.data[0]=e;C0(f,g,B(560),h);}else{i=Cg(c);g=new Uw;g.pc=c;j=R(C,2);k=j.data;k[0]=e;h=BH(1);h.data[0]=250;k[1]=h;C0(i,g,B(561),j);f=Cg(c);g=new Ut;g.qz=c;h=R(C,1);h.data[0]=e;C0(f,g,B(562),h);}}
function RY(){T.call(this);this.vG=null;}
function AOx(a,b){return Cp(b)!=2?0:1;}
function L4(){T.call(this);this.vP=null;}
function AEq(a,b){return Cp(b)!=1?0:1;}
function QW(){T.call(this);this.vn=null;}
function AEa(a,b){return P1(b);}
function QV(){T.call(this);this.u8=null;}
function AG6(a,b){return 0;}
function VV(){T.call(this);this.ww=null;}
function AIw(a,b){return !Cp(b)?0:1;}
function N6(){T.call(this);this.v0=null;}
function AOA(a,b){return Cp(b)!=9?0:1;}
function Nf(){T.call(this);this.wX=null;}
function ALb(a,b){return Gb(b);}
function PH(){T.call(this);this.vI=null;}
function AMJ(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function LX(){T.call(this);this.ui=null;}
function APu(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gb(b);}return b;}
function L2(){T.call(this);this.v7=null;}
function AF$(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gb(b);}return b;}
function M2(){T.call(this);this.wt=null;}
function AOM(a,b){a:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ow(){T.call(this);this.wK=null;}
function AJ1(a,b){return IW(b);}
function OF(){T.call(this);this.vp=null;}
function AL_(a,b){return OG(b);}
function SM(){T.call(this);this.wb=null;}
function AOp(a,b){return Cp(b)!=3?0:1;}
function Rv(){T.call(this);this.um=null;}
function APe(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gb(b);}return b;}
function Me(){T.call(this);this.w$=null;}
function AFW(a,b){a:{b:{switch(Cp(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gb(b);}return b;}
function Ls(){T.call(this);this.kI=0;}
function ASe(a){var b=new Ls();AAS(b,a);return b;}
function AAS(a,b){Bp(a);a.kI=b;}
function ALd(a,b){return a.bc^(a.kI!=Cp(b&65535)?0:1);}
var QO=F(Ls);
function AND(a,b){return a.bc^(!(a.kI>>Cp(b&65535)&1)?0:1);}
function UV(){C.call(this);this.nf=null;}
function AL2(a,b){var c,d,e,f;c=a.nf;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.oG;c=By();b=Cu(b);e=new M;O(e);G(G(e,B(563)),b);Bu(c,N(e));b=By();f=d.length;c=new M;O(c);S(G(c,B(564)),f);Bu(b,N(c));}
function UY(){var a=this;C.call(a);a.sj=null;a.sk=null;}
function AKQ(a,b){var c,d;c=a.sj;d=a.sk;b.arrayBuffer().then(Bk(c,"f"),Bk(d,"f"));}
function Sy(){var a=this;C.call(a);a.lL=null;a.lM=null;}
function AHF(a,b){var c;c=a.lL;Lq(a.lM,I4(c,b.size));}
function SB(){C.call(this);this.tp=null;}
function ADF(a,b){var c;c=a.tp;Bu(KZ(),$rt_str(b.message));Lq(c,0);}
function TE(){C.call(this);this.ve=null;}
function AJt(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function N2(){var a=this;C.call(a);a.nL=null;a.nM=null;}
function Uw(){C.call(this);this.pc=null;}
function ALK(a,b){var c,d;c=a.pc;if(!c.ho){b=b.data;c.e.g=AAs(Em(b[0]),Fy(b[1]));c.hn=1;d=JP(Fu(),c.ep);b=new M;O(b);G(Hu(G(b,B(565)),d),B(224));$rt_globals.console.info($rt_ustr(N(b)));}}
function Ut(){C.call(this);this.qz=null;}
function AJx(a,b){var c,d,e,f,g,h;c=b.data;d=a.qz;e=(Em(c[2])).data[0];if(e!=1)Hm(d,b);else{d.ho=1;f=Em(c[0]);g=Fy(c[1]);b=d.e;b.g=ABh(b.g,f,g,d.hn);Vi(d,AB0(e));Gh(Cg(d),AUh);FT(Cg(d));h=JP(Fu(),d.ep);b=new M;O(b);G(Hu(G(b,B(566)),h),B(224));$rt_globals.console.info($rt_ustr(N(b)));VM(d);Jt(d);}}
function Uu(){C.call(this);this.nw=null;}
function ALM(a,b){Hm(a.nw,b);}
function OZ(){C.call(this);this.uc=null;}
function AJz(a){var b,c;b=a.uc;c=b.nL;b=b.nM;c.Ef(b.hG,b.jD,null);}
var X0=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["dv",ASB(AJW),"ci",ASA(AEW)],QC,0,C,[],0,3,0,0,0,Mo,0,C,[],3,3,0,0,0,LR,0,C,[],3,3,0,0,0,Vs,0,C,[Mo,LR],0,3,0,0,0,Yp,0,C,[],4,0,0,0,0,X_,0,C,[],4,3,0,0,0,Gk,0,C,[],0,3,0,0,0,DS,0,Gk,[],0,3,0,0,0,Bm,0,DS,[],0,3,0,0,0,ZV,0,Bm,[],0,3,0,0,0,Da,0,C,[],3,3,0,0,0,CH,0,C,[],3,3,0,0,0,Ij,0,C,[],3,3,0,0,0,Bv,"String",1,C,[Da,CH,Ij],0,3,0,ED,["ci",ASA(AEV),"dv",ASB(Bn),"i9",ASB(AG8)],Ey,0,Gk,[],0,3,0,0,0,GX,0,Ey,[],0,3,0,0,0,Zx,0,GX,[],0,3,0,0,0,DL,0,C,[Da],1,3,0,0,0,E7,0,DL,[CH],0,3,0,
0,["i9",ASB(AI_)],F8,0,C,[Da,Ij],0,0,0,0,["hf",ASB(I2),"ci",ASA(N)],Hw,0,C,[],3,3,0,0,0,M,0,F8,[Hw],0,3,0,0,["kX",ASE(AI6),"j_",ASD(AGg),"ci",ASA(DI),"hf",ASB(AJc),"lv",ASC(AJI)],Eh,0,GX,[],0,3,0,0,0,AAU,0,Eh,[],0,3,0,0,0,Zn,0,Eh,[],0,3,0,0,0,SJ,0,C,[],3,3,0,0,0,Dl,0,C,[],3,3,0,0,0,N4,0,C,[],3,0,0,0,0,H4,0,C,[SJ,Dl,N4],1,3,0,0,["fp",ASA(FE)],Qo,0,H4,[],0,3,0,0,0,XE,0,C,[],0,3,0,0,0,AB8,0,C,[],4,3,0,0,0,Bb,0,C,[],3,3,0,0,0,ST,0,C,[Bb],0,3,0,0,0,Bt,0,C,[],3,3,0,0,0,Z$,0,C,[Bt],1,3,0,0,0,XJ,0,C,[],3,3,0,0,0,ABG,
0,C,[],3,3,0,0,0,ABB,0,C,[],3,3,0,0,0,K5,0,C,[],0,3,0,0,0,Ym,0,C,[Bt],1,3,0,0,0,BU,0,C,[Bt],3,3,0,0,0,SU,0,C,[BU],0,3,0,0,["bf",ASB(ADf)],SS,0,C,[BU],0,3,0,0,["bf",ASB(AOq)],KJ,0,C,[],4,3,0,0,0,ABx,0,C,[],4,3,0,0,0,Y1,0,C,[],0,3,0,0,0,AC$,0,C,[],4,3,0,0,0,Mw,0,C,[BU],0,3,0,0,["bf",ASB(AK1)]]);
$rt_metadata([ABX,0,C,[Bt],1,3,0,0,0,XU,0,C,[],0,3,0,0,0,Ja,0,C,[Bt],3,3,0,0,0,Zf,0,C,[Ja],1,3,0,0,["Fl",ASB(APB),"EH",ASA(AFe)],ZJ,0,C,[Bt],1,3,0,0,0,FD,0,C,[],3,3,0,0,0,RW,0,C,[FD],0,3,0,0,0,Bw,0,Bm,[],0,3,0,0,0,AAA,0,C,[],4,3,0,0,0,Go,0,Bm,[],0,3,0,0,0,Ib,0,Bm,[],0,3,0,0,0,C2,0,C,[CH],0,3,0,0,0,LL,0,C,[Bt],3,3,0,0,0,RA,0,C,[LL],3,3,0,0,0,D9,0,C,[Bt],3,3,0,0,0,AB7,0,C,[RA,D9],3,3,0,0,0,M3,0,C,[BU],0,3,0,0,["bf",ASB(AL4)],ZH,0,C,[],4,3,0,0,0,Ou,0,C,[D9],3,3,0,0,0,Qd,0,C,[D9],3,3,0,0,0,P5,0,C,[D9],3,3,0,0,0,SE,
0,C,[D9],3,3,0,0,0,We,0,C,[D9],3,3,0,0,0,TV,0,C,[D9,Ou,Qd,P5,SE,We],3,3,0,0,0,NO,0,C,[],3,3,0,0,0,XI,0,C,[Bt,TV,NO,Ja],1,3,0,0,["Dp",ASC(AJD),"Fr",ASC(AJY),"xp",ASB(AEg),"B0",ASD(AK6),"z6",ASB(AOJ),"Aa",ASA(AFi),"yG",ASD(ADB)],BC,0,Bm,[],0,3,0,0,0,W5,0,Bm,[],0,3,0,0,0,GU,0,Bw,[],0,3,0,0,0,YM,0,C,[],0,3,0,0,0,DV,0,C,[],4,3,0,JT,["dv",ASB(AOw)],NN,0,C,[],3,3,0,0,0,RL,0,C,[NN],0,3,0,0,0,Ci,0,C,[],3,3,0,0,0,QP,0,C,[Ci],0,3,0,0,0,Bi,0,C,[],3,3,0,0,0,Z5,0,C,[Bi],0,3,0,0,0,Zh,0,C,[Bt],1,3,0,0,0,ZE,0,C,[Bt],1,3,0,0,
0,P9,0,C,[Bt],3,3,0,0,0,UP,0,C,[P9],0,3,0,0,["B3",ASB(AIf)],UJ,0,C,[Bi],0,3,0,0,0,Pe,0,C,[Bt],3,3,0,0,0,UK,0,C,[Pe],0,3,0,0,["tC",ASC(AGy)],ACc,0,C,[Bt],1,3,0,0,0,Ch,0,C,[Bt],3,3,0,0,0,UH,0,C,[Ch],0,3,0,0,["b3",ASB(AMa)],Ko,0,C,[],3,3,0,0,0,Et,0,C,[Ko],1,3,0,0,0,Ec,0,C,[],3,3,0,0,0]);
$rt_metadata([WD,0,C,[Ko],3,3,0,0,0,Mn,0,C,[WD],3,3,0,0,0,Of,0,Et,[Ec,Da,Mn],0,3,0,0,0,UI,0,C,[BU],0,3,0,0,["bf",ASB(ANm)],ACy,0,C,[Bt],1,3,0,0,0,AC5,0,C,[Bt],1,3,0,0,0,Jf,0,C,[Bt],3,3,0,0,0,V7,0,C,[Jf],0,3,0,0,["tQ",ASB(AMu)],Zw,0,C,[Bt],1,3,0,0,0,V8,0,C,[Jf],0,3,0,0,["tQ",ASB(AKj)],OE,0,C,[],0,3,0,0,0,KC,0,C,[],1,3,0,0,0,ABF,0,KC,[],0,3,0,0,0,Cq,0,C,[Dl],1,3,0,0,["c0",ASB(APh)],Iz,0,C,[FD],0,3,0,0,["lC",ASC(IY)],YS,0,C,[],0,3,0,0,0,Vx,0,C,[Ch],0,3,0,0,["b3",ASB(ALB)],Vy,0,C,[Ch],0,3,0,0,["b3",ASB(ALQ)],Vz,
0,C,[Ch],0,3,0,0,["b3",ASB(AKh)],VA,0,C,[Ch],0,3,0,0,["b3",ASB(AJE)],VB,0,C,[Ch],0,3,0,0,["b3",ASB(AJ3)],VC,0,C,[Ch],0,3,0,0,["b3",ASB(AMo)],VD,0,C,[Ch],0,3,0,0,["b3",ASB(AHU)],VE,0,C,[Ch],0,3,0,0,["b3",ASB(APJ)],VF,0,C,[Ch],0,3,0,0,["b3",ASB(AHc)],VG,0,C,[Ch],0,3,0,0,["b3",ASB(ANt)],WT,0,C,[Ch],0,3,0,0,["b3",ASB(APi)],WU,0,C,[Ch],0,3,0,0,["b3",ASB(AJS)],WV,0,C,[Ch],0,3,0,0,["b3",ASB(AKl)],WW,0,C,[Ch],0,3,0,0,["b3",ASB(AL6)],Tj,0,C,[],3,3,0,0,0,Tw,0,C,[Tj],0,3,0,0,0,Tu,0,C,[Ch],0,3,0,0,["b3",ASB(AIW)],LM,0,
C,[],0,3,0,0,0,ACp,0,C,[],0,3,0,0,0,If,0,C,[],3,3,0,0,0,Ck,0,C,[If],3,3,0,0,0,CB,0,C,[],3,3,0,0,["bX",ASB(AI0),"cm",ASD(AMn),"cZ",ASC(AFa),"cG",ASC(AD1)],DN,0,C,[],3,3,0,0,0,ES,0,C,[If],3,3,0,0,0,Fc,0,C,[],3,3,0,0,0,HG,0,C,[],3,3,0,0,0,FW,0,C,[HG],3,3,0,0,0,Pn,0,C,[Dl],0,3,0,0,0,Z,0,C,[],0,3,0,0,["ci",ASA(Xb)],VJ,0,C,[],0,3,0,0,0,ABE,0,C,[],0,3,0,0,0,X8,0,C,[],3,3,0,0,0,Pd,0,C,[],0,3,0,0,0,KV,0,C,[],0,3,0,0,0]);
$rt_metadata([DZ,0,KV,[],0,3,0,0,0,Vh,0,DZ,[],0,3,0,0,0,Es,0,DZ,[],0,3,0,0,0,PQ,0,DZ,[],0,3,0,0,0,ABl,0,Es,[],0,3,0,0,0,AAX,0,Es,[],0,3,0,0,0,Yo,0,Es,[],0,3,0,0,0,QY,0,C,[Bt],3,3,0,0,0,AC8,0,C,[QY],3,3,0,0,0,Pa,0,C,[Dl],0,3,0,0,0,Pc,0,C,[],0,3,0,0,0,Cr,0,C,[CH,Da],1,3,0,0,0,Gw,0,Cr,[],12,3,0,X5,0,Lt,0,C,[],3,3,0,0,0,Sk,0,C,[Lt],3,3,0,0,0,TL,0,C,[],3,3,0,0,0,Gd,0,C,[Sk,TL],1,3,0,0,0,IQ,0,Gd,[],0,3,0,0,0,Zl,0,IQ,[],0,3,0,0,0,F1,0,Gd,[],1,3,0,0,0,KI,0,F1,[],0,3,0,0,["jC",ASD(AIO)],DM,0,Cr,[],12,3,0,AOC,0,IG,0,
C,[CH],1,3,0,0,0,Lx,0,IG,[],0,3,0,Y_,0,JL,0,C,[],32,0,0,XH,0,Ol,0,C,[],0,3,0,0,0,GA,0,Cr,[],12,0,0,AAr,0,F6,0,Cr,[],12,0,0,AAt,0,UQ,0,DS,[],0,3,0,0,0,ABw,0,BC,[],0,3,0,0,0,Lw,0,C,[Bt],3,3,0,0,0,WA,0,C,[Lw],0,3,0,0,["bf",ASB(AM2)],WC,0,C,[Lw],0,3,0,0,["bf",ASB(AEQ)],GJ,0,C,[],1,3,0,0,0,Rg,0,C,[],3,3,0,0,0,Kt,0,GJ,[CH,Hw,Ij,Rg],1,3,0,0,0,Jc,0,GJ,[CH],1,3,0,0,0,Hl,0,C,[],0,3,0,GS,0,Mu,0,Cq,[],0,3,0,0,["bT",ASA(AJO),"b_",ASC(AIi)],ACP,0,C,[],0,3,0,0,0,Z2,0,C,[Bt],1,3,0,0,0,Jp,0,Kt,[],1,0,0,0,0,ZI,0,Jp,[],0,0,0,
0,0,Kg,0,C,[],1,3,0,0,0,K3,0,C,[],0,3,0,0,0,XR,0,C,[],0,3,0,0,0,KH,0,C,[Bt],3,3,0,0,0,MD,0,C,[KH],0,3,0,0,["bf",ASB(AG0)],MC,0,C,[KH],0,3,0,0,["bf",ASB(AK5)],MB,0,C,[BU],0,3,0,0,["bf",ASB(ALL)]]);
$rt_metadata([MA,0,C,[BU],0,3,0,0,["bf",ASB(AFq)],Sb,0,C,[Ci],0,3,0,0,["cd",ASB(ALj)],Sa,0,C,[Ci],0,3,0,0,["cd",ASB(AEr)],R_,0,C,[Ci],0,3,0,0,["cd",ASB(AH1)],R$,0,C,[Ci],0,3,0,0,["cd",ASB(AHX)],R9,0,C,[Ci],0,3,0,0,["cd",ASB(AIA)],R8,0,C,[Ci],0,3,0,0,["cd",ASB(AEy)],R7,0,C,[Ci],0,3,0,0,["cd",ASB(AGa)],R6,0,C,[Ci],0,3,0,0,["cd",ASB(ALA)],R5,0,C,[Ci],0,3,0,0,["cd",ASB(AO2)],R4,0,C,[Ci],0,3,0,0,["cd",ASB(APU)],PP,0,C,[Ci],0,3,0,0,["cd",ASB(AJq)],PN,0,C,[Ci],0,3,0,0,["cd",ASB(ADq)],PO,0,C,[Ci],0,3,0,0,["cd",ASB(AGW)],PL,
0,C,[Ci],0,3,0,0,["cd",ASB(AJJ)],PM,0,C,[Ci],0,3,0,0,["cd",ASB(ANi)],GR,0,C,[],0,3,0,0,0,N8,0,GR,[],0,3,0,0,0,ABO,0,C,[],0,3,0,0,0,LI,0,GR,[],0,3,0,0,0,Tl,0,C,[Bt],3,3,0,0,0,MX,0,C,[Tl],0,3,0,0,["tQ",ASB(AJj)],T6,0,C,[Bb],0,3,0,0,["l",ASB(Vj)],V0,0,Jc,[],0,0,0,0,0,AAK,0,C,[Bt],1,3,0,0,0,JJ,0,C,[],4,3,0,AIy,0,Va,0,C,[],3,3,0,0,0,RR,0,C,[Va],0,3,0,0,["ci",ASA(AFX)],TD,0,C,[],3,3,0,0,0,Kr,"JsFileHandle",5,C,[TD],0,3,0,0,["ci",ASA(AIU)],Kc,0,Kg,[],1,3,0,0,0,OB,0,Kc,[],0,3,0,0,0,HY,0,DS,[],0,3,0,0,0,JV,0,Cq,[],0,
3,0,0,["c0",ASB(AFB),"bT",ASA(AIe),"oF",ASA(AL0),"b_",ASC(AKD),"rH",ASB(AAk)],XL,0,Cq,[],0,3,0,0,["c0",ASB(ADM),"bT",ASA(AGM),"b_",ASC(AM1)],DU,0,Cq,[],1,3,0,0,["b_",ASC(KW)],Ef,0,C,[],3,3,0,0,0,Vd,0,DU,[CB,Ef],0,3,0,0,["f5",ASC(AOm),"b_",ASC(AGh),"bT",ASA(AG1),"bX",ASB(AMk),"cZ",ASC(AHV),"cG",ASC(AET),"cm",ASD(ALD)],Wy,0,DU,[Ef],0,3,0,0,["f5",ASC(AO7),"bT",ASA(AFw),"b_",ASC(AJ2),"c0",ASB(AOG)],W4,0,DU,[CB],0,3,0,0,["bX",ASB(AI0),"cm",ASD(AMn),"cZ",ASC(AFa),"cG",ASC(AD1),"bT",ASA(AMt),"c0",ASB(AFV)],Oq,0,Cq,
[],0,3,0,0,["bT",ASA(AD4),"b_",ASC(AN8)],C7,0,Cq,[],0,3,0,0,["bT",ASA(Rf),"b_",ASC(RM)],PX,"SelectFileTest",6,C7,[],0,3,0,0,0,ACG,"WorkerTest",7,C7,[],0,3,0,0,0,VU,"RenderTexture",6,C7,[],0,3,0,0,["c0",ASB(AJa),"bT",ASA(ADG),"b_",ASC(ALV)],Rh,"ScissorDemo",6,C7,[],0,3,0,0,["bT",ASA(APv),"b_",ASC(AFl)],NZ,0,Cq,[],0,3,0,0,["bT",ASA(APy),"b_",ASC(AHq),"c0",ASB(AF1)],H2,"ClipboardTest",6,C7,[CB],0,3,0,0,["bX",ASB(AI0),"cZ",ASC(AFa),"cG",ASC(AD1),"cm",ASD(AMV)],Pk,0,Cq,[],0,3,0,0,["bT",ASA(APp),"b_",ASC(AKb)],Vu,
0,DU,[Ef],0,3,0,0,["f5",ASC(AIm),"bT",ASA(APQ),"b_",ASC(AMc),"c0",ASB(AI8)]]);
$rt_metadata([Qg,0,JV,[],0,3,0,0,["oF",ASA(AIr),"rH",ASB(AFs)],Iv,0,C,[],3,3,0,0,0,LB,0,C,[Iv,Da],0,3,0,0,0,IT,0,LB,[],0,0,0,0,0,ACm,0,C,[],0,3,0,0,0,X4,0,C,[],3,3,0,0,0,AC1,0,C,[],0,3,0,0,0,TX,0,C,[CB,DN],0,0,0,0,["bX",ASB(AMw),"cm",ASD(AP0),"cZ",ASC(API),"cG",ASC(AK3),"cY",ASD(AJA)],JF,0,C,[],3,3,0,0,["t4",ASA(AFQ),"rN",ASA(AP7)],Zp,0,C,[JF,CB],0,3,0,0,["rN",ASA(AGG),"t4",ASA(AFm),"cG",ASC(AMe),"cZ",ASC(AOk),"cm",ASD(AHO),"bX",ASB(AGb),"hJ",ASB(ALe)],Q4,0,C,[Ck],0,3,0,0,["bw",ASB(AKo)],Q8,0,C,[Ck],0,3,0,0,
["bw",ASB(AHN)],Ju,0,C,[Ck],0,3,0,0,["bw",ASB(AM8)],Q7,0,C,[Bb],0,3,0,0,["l",ASB(AEh)],Q6,0,C,[Ck],0,3,0,0,["bw",ASB(AP2)],Q5,0,C,[Fc],0,3,0,0,["hb",ASC(ALI)],Q_,0,C,[FW],0,3,0,0,["f8",ASA(APA)],Q$,0,C,[DN],0,3,0,0,["cY",ASD(AJy)],Q9,0,C,[ES],0,3,0,0,["bw",ASB(AMI)],BW,0,C,[],0,3,0,0,["dv",ASB(APD)],Cy,0,C,[],3,3,0,Dq,0,H6,0,C,[],0,3,0,0,0,ABP,0,H6,[],0,3,0,0,0,ZK,0,C,[],0,3,0,0,0,SQ,0,C,[CB],0,0,0,0,["bX",ASB(AL7),"cm",ASD(ANy),"cZ",ASC(AJ4),"cG",ASC(AGm)],QI,0,C,[Ck],0,3,0,0,["bw",ASB(AL1)],QH,0,C,[Ck],0,
3,0,0,["bw",ASB(AOt)],QK,0,C,[Fc],0,3,0,0,["hb",ASC(AOW)],QJ,0,C,[Bi],0,3,0,0,["s",ASA(AOV)],QG,0,C,[ES],0,3,0,0,["bw",ASB(AKu)],QF,0,C,[DN],0,3,0,0,["cY",ASD(AH$)],Ii,0,BW,[],0,3,0,0,0,T5,0,C,[],0,3,0,0,0,Yx,0,C,[],0,3,0,0,0,XF,0,C,[Ef,JF],0,3,0,0,["t4",ASA(AFQ),"rN",ASA(AP7),"f5",ASC(AFk),"hJ",ASB(ADR)],Sd,0,C,[Ck],0,3,0,0,["bw",ASB(AMs)],Sg,0,C,[ES],0,3,0,0,["bw",ASB(ADu)],ACC,0,C,[],0,3,0,0,["dv",ASB(APZ)],Km,0,C,[],0,3,0,0,0,Se,0,C,[Bi],0,3,0,0,["s",ASA(AHT)],Sc,0,C,[Bi],0,3,0,0,["s",ASA(ANN)],C5,0,C,[],
0,3,0,0,0,Z1,0,C,[CB,Ef],0,3,0,0,["bX",ASB(Yd),"cm",ASD(Z0),"cZ",ASC(Y$),"cG",ASC(ACS),"f5",ASC(AOP)],W9,0,C,[Ck],0,3,0,0,["bw",ASB(AI5)],W$,0,C,[ES],0,3,0,0,["bw",ASB(AKt)],AAM,0,C,[],0,3,0,0,0,Xa,0,C,[DN],0,3,0,0,["cY",ASD(AKJ)],Vg,0,C,[],3,3,0,0,0,G9,0,C,[Vg],3,3,0,0,0,EE,0,C,[G9],1,3,0,0,0]);
$rt_metadata([Ma,0,C,[G9],3,3,0,0,0,FV,0,EE,[Ma],1,3,0,0,0,HU,0,C,[],3,3,0,0,0,M$,0,FV,[Ec,Da,HU],0,3,0,0,["qR",ASB(Bs),"nb",ASA(ALl),"tr",ASB(Ed)],ACo,0,C,[],0,3,0,0,0,S9,0,C,[Ef],0,3,0,0,["f5",ASC(AKW)],S$,0,C,[Ck],0,3,0,0,["bw",ASB(ADz)],MH,0,C,[],3,3,0,0,0,ABL,0,C,[MH],0,3,0,0,0,AAb,0,C,[Dl],0,3,0,0,0,ABA,0,C,[],3,3,0,0,0,Vt,0,C,[CB],0,0,0,0,["cm",ASD(AMn),"cZ",ASC(AKM),"cG",ASC(AMg),"bX",ASB(AGE)],RQ,0,C,[DN],0,3,0,0,["cY",ASD(AF0)],TB,0,C,[],3,3,0,0,0,AAa,0,C,[],0,3,0,0,0,Pg,0,C,[Ck],0,3,0,0,["bw",ASB(AMY)],Qk,
0,C,[Bb],0,3,0,0,["l",ASB(ADZ)],Qj,0,C,[Bb],0,3,0,0,["l",ASB(APE)],Qi,0,C,[Bb],0,3,0,0,["l",ASB(AGj)],Qh,0,C,[Bb],0,3,0,0,["l",ASB(AK9)],Qf,0,C,[Bb],0,3,0,0,["l",ASB(AKk)],Qe,0,C,[Bb],0,3,0,0,["l",ASB(AMd)],SO,0,C,[CB],0,0,0,0,["cm",ASD(AMn),"cG",ASC(AD1),"bX",ASB(AN6),"cZ",ASC(AOr)],Tg,0,C,[CB],0,0,0,0,["cm",ASD(AMn),"cZ",ASC(AEB),"cG",ASC(AFf),"bX",ASB(AD_)],Nb,0,C,[DN],0,3,0,0,["cY",ASD(AD3)],Rs,0,C,[Ck],0,3,0,0,["bw",ASB(AN$)],Rr,0,C,[Fc],0,3,0,0,["hb",ASC(AGF)],Rp,0,C,[Fc],0,3,0,0,["hb",ASC(ANA)],Ro,0,
C,[FW],0,3,0,0,["f8",ASA(ALC)],Rq,0,C,[FW],0,3,0,0,["f8",ASA(AE7)],QZ,0,C,[Ck],0,3,0,0,["bw",ASB(AGL)],Ks,0,C,[],0,3,0,0,0,PC,0,C,[Ck],0,3,0,0,["bw",ASB(AHf)],PD,0,C,[ES],0,3,0,0,["bw",ASB(ADA)],PE,0,C,[DN],0,3,0,0,["cY",ASD(AMB)],H3,0,C,[],0,3,0,0,0,NW,0,C,[Bt],3,3,0,0,0,Oi,0,C,[NW],0,3,0,0,["tC",ASC(AHl)],NX,0,C,[Bt],3,3,0,0,0,Og,0,C,[NX],0,3,0,0,["tC",ASC(AIq)],Yq,0,C,[],0,3,0,0,0,Xz,0,C,[Bt],3,3,0,0,0,LS,0,C,[Bi],0,3,0,0,["s",ASA(AJC)],LT,0,C,[Bi],0,3,0,0,["s",ASA(AH7)],U1,0,C,[],0,3,0,0,0,Xg,0,C,[],0,3,
0,0,0,MJ,0,C,[],0,3,0,0,0,EK,0,C,[Dl],0,0,0,0,0,TT,0,C,[Bb],0,3,0,0,0,TS,0,C,[Bb],0,3,0,0,["l",ASB(AM7)]]);
$rt_metadata([TO,0,C,[Bb],0,3,0,0,["l",ASB(AK7)],TN,0,C,[Bi],0,3,0,0,["s",ASA(AM5)],TQ,0,C,[Bi],0,3,0,0,["s",ASA(AIa)],TP,0,C,[Bi],0,3,0,0,["s",ASA(AKr)],Ug,0,C,[Bi],0,3,0,0,["s",ASA(AMv)],Fg,0,Cr,[],12,3,0,ADJ,0,IS,0,C,[Dl],0,3,0,0,["fp",ASA(AA2)],Rk,0,C,[Ck],0,3,0,0,["bw",ASB(AP3)],Rl,0,C,[Ck],0,3,0,0,["bw",ASB(ADE)],SI,0,C,[],0,3,0,0,0,WS,0,C,[],3,3,0,0,0,EV,0,C,[],0,3,0,0,0,G1,0,C,[],4,3,0,0,0,ADa,0,C,[],0,3,0,0,0,HA,0,C,[],3,3,0,0,0,Wa,0,C,[HA],0,3,0,0,["nt",ASD(AMQ)],Wb,0,C,[HA],0,3,0,0,0,U3,0,C,[CB],
0,0,0,0,["bX",ASB(ADD),"cm",ASD(AMS),"cZ",ASC(ANM),"cG",ASC(AIz)],ABM,0,C,[],0,0,0,0,0,W3,0,C,[Bb],0,3,0,0,["l",ASB(AMh)],M7,0,C,[TB],0,3,0,0,0,Du,0,C,[],3,3,0,EH,0,AAg,0,C,[],0,3,0,0,0,OQ,0,C,[Bb],0,3,0,0,["l",ASB(AIH)],Qu,0,C,[CB],0,0,0,0,["cm",ASD(AMn),"cZ",ASC(AFa),"cG",ASC(AD1),"bX",ASB(ADH)],YC,0,C,[],0,3,0,0,0,Hr,0,C,[],0,3,0,0,0,EN,0,C,[],0,3,0,0,0,Ly,0,EN,[],0,3,0,0,0,LW,0,EN,[],0,3,0,0,0,Pl,0,EN,[],0,3,0,0,0,H5,0,C,[],3,3,0,0,0,Qp,0,C,[],3,3,0,0,0,Ga,0,C,[CH],0,3,0,0,0,IL,0,C,[],0,3,0,0,0,J8,0,F1,
[],0,3,0,0,["jC",ASD(AGV)],ACt,0,C,[],0,3,0,0,0,Zm,0,C,[Bt],4,3,0,0,0,ACX,0,C,[],0,3,0,0,0,P_,0,C,[],0,3,0,0,["dv",ASB(AOE)],ACf,0,C,[],3,3,0,0,0,CO,0,C,[Bt],1,3,0,0,0,AAE,0,CO,[],1,3,0,0,0,ABi,0,CO,[],1,3,0,0,0,Yu,0,CO,[],1,3,0,0,0,YO,0,CO,[],1,3,0,0,0,ABN,0,CO,[],1,3,0,0,0,ZX,0,Et,[Ec,Da],0,3,0,0,0,Cx,0,C,[],0,3,0,0,0,MY,0,C,[Bi],0,3,0,0,["s",ASA(APn)]]);
$rt_metadata([Tm,0,C,[Bi],0,3,0,0,["s",ASA(AJX)],B5,0,C,[],0,3,0,0,0,Ih,0,C,[],0,3,0,0,0,ACx,0,C,[CH],0,3,0,0,["dv",ASB(ANB),"i9",ASB(AE5)],Ws,0,C,[FD],0,3,0,0,["lC",ASC(AHE)],Wu,0,C,[FD],0,3,0,0,["lC",ASC(AJg)],EO,0,C,[],0,3,0,0,0,GO,0,FV,[HU],1,0,0,0,["tr",ASB(AKd)],WJ,0,GO,[HU],0,0,0,0,["nb",ASA(AGT),"qR",ASB(APc)],Xs,0,C,[],0,3,0,0,["ci",ASA(AHK)],N7,0,C,[G9],3,3,0,0,0,F4,0,EE,[N7],1,3,0,0,0,JD,0,F4,[],1,0,0,0,0,UG,0,JD,[],0,0,0,0,0,KN,0,Et,[],1,0,0,0,0,UE,0,KN,[],0,0,0,0,0,UF,0,GO,[],0,0,0,0,0,Ft,0,C,[],
3,3,0,0,0,UC,0,C,[Ft],0,0,0,0,0,Oz,0,C,[Ft],3,3,0,0,0,UD,0,C,[Oz],0,0,0,0,0,W2,0,C,[FD],0,3,0,0,0,KK,0,C,[],0,3,0,0,0,MQ,0,C,[Ft],0,0,0,0,0,Y8,0,C,[],4,3,0,0,0,UZ,0,C,[CB],0,0,0,0,["cm",ASD(AMn),"cZ",ASC(AFa),"cG",ASC(AD1),"bX",ASB(ANe)],Zj,0,C,[Bt],1,3,0,0,0,J0,0,C,[Iv,Ec],0,0,0,0,0,HK,0,J0,[],0,0,0,0,0,T9,0,C,[Bb],0,3,0,0,["l",ASB(AIb)],U7,0,C,[HG],0,3,0,0,["f8",ASA(APs)],Ce,0,Cr,[],12,3,0,Yr,0,IO,0,C,[],0,3,0,0,0,AC4,0,C,[],0,3,0,0,0,KT,0,C,[],3,3,0,0,0,Ql,0,C,[KT],0,3,0,0,["p$",ASB(AKE)],AB2,0,C,[CH],0,
3,0,0,["dv",ASB(Xu),"i9",ASB(AL$)],MI,0,C,[Bb],0,3,0,0,["l",ASB(AHd)],X3,0,C,[],0,3,0,0,0,Xf,0,C,[],0,3,0,0,0,Mz,0,C,[Dl],0,3,0,0,0,FC,0,HY,[],0,3,0,0,0,V_,0,Ey,[],0,3,0,0,0,Pt,0,C,[Bb],0,3,0,0,["l",ASB(ALx)],Td,0,C,[Bi],0,3,0,0,["s",ASA(AN2)],Xw,0,C,[],0,3,0,0,0,K_,0,Bm,[],0,3,0,0,0,Lp,0,DL,[CH],0,3,0,0,0,Fp,0,C,[],0,0,0,0,0,Js,0,C,[],4,3,0,0,0]);
$rt_metadata([UA,0,C,[],0,3,0,0,0,Li,0,C,[],1,3,0,0,0,MT,0,C,[Bb],0,3,0,0,["l",ASB(ALR)],UR,0,C,[Bb],0,3,0,0,["l",ASB(APG)],ZA,0,CO,[],1,3,0,0,0,VZ,0,C,[Bi],0,3,0,0,["s",ASA(AJG)],Qs,0,C,[Bi],0,3,0,0,["s",ASA(AH6)],Tc,0,C,[],0,3,0,0,0,DP,0,Bm,[],0,3,0,0,0,AAW,0,Ey,[],0,3,0,0,0,PB,0,C,[Bb],0,3,0,0,["l",ASB(AOI)],T7,0,C,[Bb],0,3,0,0,0,M6,0,C,[Bb],0,3,0,0,["l",ASB(AD2)],M4,0,C,[Bb],0,3,0,0,["l",ASB(AF3)],SK,0,C,[Bb],0,3,0,0,["l",ASB(AOT)],JO,0,Li,[],1,3,0,0,0,SA,0,JO,[],0,3,0,0,0,O8,0,C,[Bb],0,3,0,0,["l",ASB(AE8)],Uo,
0,C,[Bi],0,3,0,0,["s",ASA(AKY)],PK,0,C,[BU],0,3,0,0,["bf",ASB(ADo)],TK,0,C,[BU],0,3,0,0,["bf",ASB(APf)],Sw,0,C,[Bb],0,3,0,0,0,Rj,0,C,[Bb],0,3,0,0,["l",ASB(AEi)],Ri,0,C,[Bb],0,3,0,0,["l",ASB(AEY)],Z6,0,C,[Ci],0,3,0,0,0,QE,0,C,[Bb],0,3,0,0,["l",ASB(AHr)],R2,0,C,[Bi],0,3,0,0,["s",ASA(AJu)],Jm,0,DL,[CH],0,3,0,0,0,KQ,0,C,[],4,3,0,0,0,L5,0,C,[BU],0,3,0,0,["bf",ASB(AP6)],Oj,0,C,[HA],0,3,0,0,["nt",ASD(ADX)],SZ,0,C,[],0,3,0,0,0,EA,0,C,[Dl],0,3,0,0,["fp",ASA(ALa),"cW",ASA(AOK),"is",ASD(O6),"ex",ASB(Yf),"jI",ASB(AGJ),
"jA",ASB(ANF),"oV",ASC(APN),"cm",ASD(AOb),"ip",ASC(ANu),"cG",ASC(AOy),"bX",ASB(AKy),"cY",ASD(AGB)],Gp,0,EA,[],0,3,0,0,["j0",ASB(ZN)],PW,0,Gp,[],0,3,0,0,["oV",ASC(AFN),"j0",ASB(AIS),"ex",ASB(AIj),"jA",ASB(AJs),"jI",ASB(AGk),"tF",ASA(Yw),"bX",ASB(AOS),"ip",ASC(ADS),"cm",ASD(AD8)],Mp,0,C,[Bi],0,3,0,0,["s",ASA(AEe)],Zg,0,EA,[],0,3,0,0,["is",ASD(AFT),"ex",ASB(ANb),"cm",ASD(AHR),"ip",ASC(AOe),"cG",ASC(AHt),"bX",ASB(AIJ),"cY",ASD(ANo),"cW",ASA(AKV)],U5,0,Gp,[],0,3,0,0,["tF",ASA(ALz),"cW",ASA(AJw),"jA",ASB(AIl),"ex",
ASB(AGd),"jI",ASB(AIY)],OI,0,C,[Bb],0,3,0,0,0,WF,0,C,[],0,3,0,0,0,Hz,0,C,[],0,3,0,0,0,Sv,0,EA,[],0,3,0,0,0,S5,0,C,[Bb],0,3,0,0,["l",ASB(AJ5)],S6,0,C,[Bb],0,3,0,0,["l",ASB(AH_)],Q3,0,DL,[CH],0,3,0,0,0,SW,0,C,[Bi],0,3,0,0,["s",ASA(ANx)],IV,0,C,[],0,3,0,0,0,E8,0,Bm,[],0,3,0,0,0,MW,0,C,[],0,3,0,0,0,AB5,0,C,[],0,3,0,0,0]);
$rt_metadata([RT,0,C,[],0,0,0,0,0,Wq,0,C,[BU],0,3,0,0,["bf",ASB(ANh)],Wp,0,C,[BU],0,3,0,0,["bf",ASB(AF9)],VQ,0,C,[BU],0,3,0,0,["bf",ASB(AHx)],VP,0,C,[BU],0,3,0,0,["bf",ASB(AIp)],Xy,0,C,[],1,3,0,0,0,VW,0,C,[],3,3,0,0,0,Wk,0,C,[Ch],0,3,0,0,["b3",ASB(AHo)],Y2,0,C,[],0,3,0,0,0,ACn,0,C,[],0,3,0,0,0,Tv,0,C,[Bi],0,3,0,0,["s",ASA(AH2)],Tx,0,C,[Bi],0,3,0,0,["s",ASA(AMN)],XT,0,C,[],0,3,0,0,0,Ir,0,E8,[],0,3,0,0,0,Hv,0,Bm,[],0,3,0,0,0,K9,0,Bm,[],0,3,0,0,0,YG,0,C,[Bb],0,3,0,0,0,Us,0,C,[Bi],0,3,0,0,["s",ASA(AMC)],V2,0,C,
[Bb],0,3,0,0,["l",ASB(ANl)],Ru,0,C,[Bi],0,3,0,0,["s",ASA(AEo)],Xh,0,C,[],0,3,0,0,0,GK,0,C,[],0,3,0,0,0,ABb,0,F4,[],0,0,0,0,0,On,0,EE,[],0,0,0,0,0,VH,0,Bw,[],0,3,0,0,0,Pz,0,C,[Lt],3,3,0,0,0,MR,0,C,[Pz],3,3,0,0,0,Lb,0,C,[MR],1,3,0,0,0,Y7,0,Lb,[],0,3,0,0,0,Qy,0,C,[Bi],0,3,0,0,["s",ASA(AE1)],Qx,0,C,[Bi],0,3,0,0,["s",ASA(ADv)],Qw,0,C,[Bi],0,3,0,0,["s",ASA(AJn)],Qv,0,C,[Bi],0,3,0,0,["s",ASA(AN0)],OK,0,C,[Bi],0,3,0,0,["s",ASA(ANk)],OM,0,C,[Bi],0,3,0,0,["s",ASA(AIu)],ON,0,C,[Bi],0,3,0,0,["s",ASA(AFv)],Vb,0,C,[Bi],0,
3,0,0,["s",ASA(AEl)],U4,0,C,[H5],0,3,0,0,["lG",ASC(AKi)],RO,0,C,[Bi],0,3,0,0,["s",ASA(AIZ)],RP,0,C,[Bi],0,3,0,0,["s",ASA(AKg)],Ns,0,C,[Bi],0,3,0,0,["s",ASA(AHW)],Nr,0,C,[Bi],0,3,0,0,["s",ASA(AN9)],Ui,0,C,[HG],0,3,0,0,["f8",ASA(AFZ)],UT,0,C,[Bi],0,3,0,0,["s",ASA(AL5)],UX,0,C,[Bi],0,3,0,0,["s",ASA(AI7)],UW,0,C,[Bi],0,3,0,0,["s",ASA(AEf)],UU,0,C,[Bi],0,3,0,0,["s",ASA(AF6)],RK,0,C,[H5],0,3,0,0,["lG",ASC(AId)],O7,0,C,[BU],0,3,0,0,["bf",ASB(AGl)],Ik,0,C,[Bt],3,3,0,0,0]);
$rt_metadata([L1,0,C,[Ik],0,3,0,0,["p9",ASA(AIv)],LK,0,C,[Ik],0,3,0,0,["p9",ASA(ADh)],Wo,0,C,[BU],0,3,0,0,["bf",ASB(AHM)],GE,0,C,[],0,0,0,0,0,TF,0,GE,[Ft],0,0,0,0,0,P2,0,GE,[Ft],0,0,0,0,0,S2,0,C,[],3,3,0,0,0,P0,0,C,[Da],4,3,0,0,0,Ng,0,C,[Bb],0,3,0,0,["l",ASB(APY)],Gg,0,Cr,[],12,0,0,TZ,0,RX,0,C,[Bb],0,3,0,0,["l",ASB(AI$)],QB,0,C,[Bb],0,3,0,0,["l",ASB(AEt)],NY,0,C,[Bb],0,3,0,0,["l",ASB(AJe)],T1,0,C,[Bb],0,3,0,0,["l",ASB(ANz)],Ww,0,C,[Bb],0,3,0,0,["l",ASB(AKc)],WI,0,C,[Bb],0,3,0,0,["l",ASB(APP)],Ph,0,C,[Bb],0,
3,0,0,["l",ASB(ALT)],Vp,0,C,[Bb],0,3,0,0,["l",ASB(AJB)],SP,0,C,[Bb],0,3,0,0,["l",ASB(AFS)],LG,0,C,[Bb],0,3,0,0,["l",ASB(AFg)],R1,0,C,[Bb],0,3,0,0,["l",ASB(AEc)],Um,0,C,[KT],0,3,0,0,["p$",ASB(Jd)],Bz,0,C,[],1,0,0,0,["b8",ASD(Hi),"cb",ASE(Hs),"g$",ASA(AER),"K",ASB(AOh),"bJ",ASB(AOg),"eM",ASA(AO$),"dK",ASA(Ix)],Tz,0,C,[],32,0,0,AQz,0,Oo,0,C,[Bb],0,3,0,0,["l",ASB(AFP)],WR,0,C,[Bb],0,3,0,0,["l",ASB(AGN)],W_,0,C,[Bi],0,3,0,0,["s",ASA(AFC)],CM,0,Bz,[],0,0,0,Lv,["c",ASD(AEk),"F",ASB(AEG)],Gt,0,C,[],0,0,0,0,0,Id,0,BC,
[],0,3,0,0,0,V$,0,C,[BU],0,3,0,0,["bf",ASB(ALJ)],AAu,0,C,[Bt],3,3,0,0,0,Tk,0,C,[BU],0,3,0,0,["bf",ASB(ALn)],QM,0,CM,[],0,0,0,0,["c",ASD(ADU),"F",ASB(AMX)],WK,0,CM,[],0,0,0,0,["c",ASD(AFF)],OR,0,CM,[],0,0,0,0,["c",ASD(AEP)],RS,0,CM,[],0,0,0,0,["c",ASD(AD0),"F",ASB(ALw)],Fk,0,CM,[],0,0,0,0,["c",ASD(AOz)],BS,0,Bz,[],1,0,0,0,["c",ASD(APz),"bP",ASA(ANP),"F",ASB(AID)],ABZ,0,BS,[],0,0,0,0,["bn",ASC(ANj),"b8",ASD(AGX),"cb",ASE(AFt),"F",ASB(ADY)],BN,0,Bz,[],0,0,0,0,["c",ASD(AHu),"K",ASB(ALp),"bJ",ASB(AJo),"F",ASB(AL9),
"dK",ASA(AFo)],Ip,0,BN,[],0,0,0,0,["c",ASD(AK_),"F",ASB(AMx)],DG,0,Ip,[],0,0,0,0,["c",ASD(AF7),"K",ASB(AMf)],LZ,0,DG,[],0,0,0,0,["c",ASD(ALi),"F",ASB(AOn)],Vc,0,DG,[],0,0,0,0,["c",ASD(AEA),"F",ASB(ANT)],P3,0,DG,[],0,0,0,0,["c",ASD(AFj),"F",ASB(AP1)],SD,0,DG,[],0,0,0,0,["c",ASD(ADw),"F",ASB(AMM)],Gj,0,BN,[],0,0,0,0,["c",ASD(ADP),"b8",ASD(AJL),"cb",ASE(AM3),"bJ",ASB(AJk),"eM",ASA(ALt),"dK",ASA(APb)],Gu,0,C,[],1,0,0,0,0,T,0,Gu,[],1,0,0,NQ,["cS",ASA(AED),"ec",ASA(AD$),"il",ASA(ANI),"gp",ASA(AO9)]]);
$rt_metadata([Yj,0,T,[],0,0,0,0,["k",ASB(CV),"cS",ASA(CQ),"ec",ASA(AGQ),"il",ASA(AN7),"ci",ASA(AKB),"gp",ASA(AG2)],IE,0,Bm,[],0,3,0,0,0,DR,0,Bz,[],1,0,0,0,["bJ",ASB(AM6),"F",ASB(AOu),"dK",ASA(AJ9)],CW,0,DR,[],0,0,0,0,["c",ASD(ADy)],EU,0,CW,[],0,0,0,0,["c",ASD(AEn)],CN,0,DR,[],0,0,0,0,["c",ASD(ADO)],Eq,0,CW,[],0,0,0,0,["c",ASD(AJR),"K",ASB(AP5)],Vr,0,CW,[],0,0,0,0,["c",ASD(APr),"b8",ASD(AKx)],W,0,C,[],1,0,0,0,0,C9,0,BC,[],0,3,0,0,0,Mh,0,Gu,[Ec],0,0,0,0,["ci",ASA(AKI)],Nl,0,Bz,[],0,0,0,0,["c",ASD(AI2),"F",ASB(ALo)],V3,
0,C,[Ec,Da],0,3,0,0,0,L6,0,BN,[],0,0,0,0,0,Pm,0,BN,[],0,0,0,0,["c",ASD(AEj),"K",ASB(AK8),"F",ASB(AES),"bJ",ASB(AEC)],Dt,0,BN,[],0,0,0,0,["c",ASD(AGH),"k",ASB(AHb),"bJ",ASB(AEd),"K",ASB(ANC),"F",ASB(AGU)],IC,0,Dt,[],0,0,0,0,["k",ASB(AIE)],Ya,0,BS,[],0,0,0,0,["bn",ASC(AI3)],D6,0,BS,[],0,0,0,0,["bn",ASC(LH),"bJ",ASB(ALr)],NR,0,BN,[],0,0,0,0,["K",ASB(AJQ),"c",ASD(ADn),"bJ",ASB(AEM),"F",ASB(AN_)],Eb,0,BS,[],0,0,0,0,["bP",ASA(AIN),"bn",ASC(AHD),"b8",ASD(AGC),"cb",ASE(AIT),"bJ",ASB(AN4)],ACs,0,BS,[],0,0,0,0,["bn",
ASC(ADi)],Xm,0,BS,[],0,0,0,0,["bn",ASC(ADI)],E4,0,BN,[],0,0,0,0,["K",ASB(APa),"c",ASD(AK$),"bJ",ASB(AI4),"F",ASB(AMi)],Wn,0,E4,[],0,0,0,0,0,SR,0,E4,[],0,0,0,0,0,W6,0,CN,[],0,0,0,0,["c",ASD(AFK)],OJ,0,CN,[],0,0,0,0,["c",ASD(AKn)],FF,0,CN,[],0,0,0,0,["c",ASD(ANw),"K",ASB(AOD)],Op,0,FF,[],0,0,0,0,["c",ASD(AIP),"K",ASB(AKK)],E1,0,CN,[],0,0,0,0,["c",ASD(APV)],Ms,0,E1,[],0,0,0,0,["c",ASD(AH8)],Qr,0,CN,[],0,0,0,0,["c",ASD(APg)],Pw,0,FF,[],0,0,0,0,["c",ASD(AEU)],T2,0,E1,[],0,0,0,0,["c",ASD(AD5)],Qt,0,DR,[],0,0,0,0,
["c",ASD(APH),"b8",ASD(ANK)],Nt,0,DR,[],0,0,0,0,["c",ASD(ALu),"b8",ASD(ADr)],EC,0,C,[],1,0,0,0,0,W8,0,CW,[],0,0,0,0,["c",ASD(AD7)],Vm,0,Eq,[],0,0,0,0,["c",ASD(AKm)],Ob,0,EU,[],0,0,0,0,["c",ASD(AM9)],Ps,0,CW,[],0,0,0,0,["c",ASD(ALm)],S_,0,Eq,[],0,0,0,0,["c",ASD(AEb)],P4,0,EU,[],0,0,0,0,["c",ASD(ANn)],JN,0,Bz,[],4,0,0,0,["c",ASD(AJm),"F",ASB(AIo)],YQ,0,Bz,[],0,0,0,0,["c",ASD(AEz),"F",ASB(AEJ)],Np,0,Bz,[],0,0,0,0,["c",ASD(AII),"F",ASB(APR)],V5,0,Bz,[],4,0,0,0,["c",ASD(AL3),"F",ASB(AFz)],VN,0,Bz,[],0,0,0,0,["c",
ASD(AK4),"F",ASB(ADg)],ME,0,Bz,[],0,0,0,0,["c",ASD(AFn),"F",ASB(AHn)]]);
$rt_metadata([ACi,0,BN,[],0,0,0,0,["c",ASD(APl),"K",ASB(AEO),"g$",ASA(AKP),"F",ASB(AEN)],Yg,0,BN,[],4,0,0,0,["c",ASD(AKX),"K",ASB(AMT),"g$",ASA(ADd),"F",ASB(APw)],AB$,0,Bz,[],4,0,0,0,["c",ASD(AI9),"F",ASB(AHi)],AAq,0,Bz,[],0,0,0,0,["c",ASD(AK2),"F",ASB(AG$)],Xj,0,Bz,[],0,0,0,0,["c",ASD(AIc),"F",ASB(AFE)],GN,0,BN,[],0,0,0,0,["c",ASD(AD9),"K",ASB(AMb),"F",ASB(AMy)],ACd,0,GN,[],0,0,0,0,["c",ASD(AFJ),"b8",ASD(AOj),"cb",ASE(ADV),"bJ",ASB(AKf)],Zy,0,GN,[],0,0,0,0,["c",ASD(AJF)],Nk,0,F8,[Hw],0,3,0,0,["kX",ASE(AG3),
"j_",ASD(AEE),"hf",ASB(AE3),"lv",ASC(ANO)],QA,0,BS,[],0,0,0,0,["bn",ASC(AF4),"b8",ASD(AEu),"cb",ASE(AHm),"bJ",ASB(AHP)],Xi,0,BS,[],0,0,0,0,["bn",ASC(AJN)],My,0,BS,[],0,0,0,0,["bn",ASC(AM_)],GM,0,C,[],4,0,0,AMK,0,LP,0,BS,[],0,0,0,0,["bn",ASC(ANg)],Kl,0,BN,[],0,0,0,0,["K",ASB(ALg),"c",ASD(AFA),"b8",ASD(AHL),"cb",ASE(AF_),"bJ",ASB(ADT),"F",ASB(ANU)],KF,0,BN,[],0,0,0,0,["K",ASB(AE2),"c",ASD(ADx),"b8",ASD(ALE),"cb",ASE(AM$),"bJ",ASB(AF5),"F",ASB(ALO)],DJ,0,BS,[],0,0,0,0,["bn",ASC(AMA),"b8",ASD(AKC),"cb",ASE(AEZ),
"bJ",ASB(AMm)],Up,0,EC,[],0,0,0,0,["g1",ASB(AFd),"rw",ASC(AMr)],Uq,0,EC,[],0,0,0,0,["g1",ASB(ANq),"rw",ASC(AO5)],ABd,0,C,[],0,0,0,0,0,XA,0,C,[],0,0,0,0,0,Ki,0,W,[],0,0,0,0,["C",ASA(ZG)],Jj,0,W,[],0,0,0,0,["C",ASA(AAj)],AA9,0,W,[],0,0,0,0,["C",ASA(AMW)],ABD,0,W,[],0,0,0,0,["C",ASA(ANX)],ABH,0,W,[],0,0,0,0,["C",ASA(AGI)],Ke,0,W,[],0,0,0,0,["C",ASA(Yk)],KO,0,Ke,[],0,0,0,0,["C",ASA(Zd)],AC2,0,W,[],0,0,0,0,["C",ASA(AHJ)],LF,0,KO,[],0,0,0,0,["C",ASA(Xe)],ZS,0,LF,[],0,0,0,0,["C",ASA(AJ$)],AAe,0,W,[],0,0,0,0,["C",ASA(AFY)],YJ,
0,W,[],0,0,0,0,["C",ASA(AJ6)],Ys,0,W,[],0,0,0,0,["C",ASA(AO8)],ABK,0,W,[],0,0,0,0,["C",ASA(AKL)],ADc,0,W,[],0,0,0,0,["C",ASA(ADp)],ABe,0,W,[],0,0,0,0,["C",ASA(AIh)],AA5,0,W,[],0,0,0,0,["C",ASA(AME)],AB4,0,W,[],0,0,0,0,["C",ASA(AFU)],XS,0,W,[],0,0,0,0,["C",ASA(AGi)],Xx,0,W,[],0,0,0,0,["C",ASA(AO0)],ABk,0,W,[],0,0,0,0,["C",ASA(ADj)],ABv,0,W,[],0,0,0,0,["C",ASA(AJb)],Y6,0,W,[],0,0,0,0,["C",ASA(AGr)],AAh,0,W,[],0,0,0,0,["C",ASA(AHp)],ACD,0,W,[],0,0,0,0,["C",ASA(AJd)],ABu,0,W,[],0,0,0,0,["C",ASA(AOc)],Zv,0,W,[],
0,0,0,0,["C",ASA(ALX)],Y4,0,W,[],0,0,0,0,["C",ASA(AKF)],AC9,0,W,[],0,0,0,0,["C",ASA(AMP)]]);
$rt_metadata([IN,0,W,[],0,0,0,0,["C",ASA(AAf)],AB6,0,IN,[],0,0,0,0,["C",ASA(AKs)],ZY,0,Ki,[],0,0,0,0,["C",ASA(AEs)],YY,0,Jj,[],0,0,0,0,["C",ASA(AHA)],Yy,0,W,[],0,0,0,0,["C",ASA(AJr)],YT,0,W,[],0,0,0,0,["C",ASA(AOO)],ZM,0,W,[],0,0,0,0,["C",ASA(AG7)],ZU,0,W,[],0,0,0,0,["C",ASA(ADk)],YD,0,C,[],4,0,0,0,0,X$,0,C,[],4,3,0,0,0,MF,0,C,[],0,3,0,0,0,ABp,0,C,[],0,3,0,0,0,Zt,0,C,[],4,3,0,0,0,Yi,0,C,[If],0,3,0,0,0,Mv,0,C,[Bb],0,3,0,0,["l",ASB(AKA)],P$,0,C,[Bb],0,3,0,0,["l",ASB(AG4)],UB,0,C,[Bb],0,3,0,0,0,V6,0,C,[Bb],0,3,
0,0,0,ABg,0,C,[],3,3,0,0,0,Vq,0,T,[],0,0,0,0,["k",ASB(AGP)],Vn,0,T,[],0,0,0,0,["k",ASB(ADL)],Nz,0,T,[],0,0,0,0,["k",ASB(AJi),"ci",ASA(AHs)],NG,0,T,[],0,0,0,0,["k",ASB(AMD)],NE,0,T,[],0,0,0,0,["k",ASB(ANf)],NF,0,T,[],0,0,0,0,["k",ASB(AJM)],NJ,0,T,[],0,0,0,0,["k",ASB(AGn)],NK,0,T,[],0,0,0,0,["k",ASB(ADe)],NH,0,T,[],0,0,0,0,["k",ASB(AHw)],NI,0,T,[],0,0,0,0,["k",ASB(AJP)],NL,0,T,[],0,0,0,0,["k",ASB(AOo)],NM,0,T,[],0,0,0,0,["k",ASB(AFO)],Ny,0,T,[],0,0,0,0,["k",ASB(AP8)],Ok,0,T,[],0,0,0,0,["k",ASB(AHz)],Nv,0,T,[],
0,0,0,0,["k",ASB(AFM)],Nw,0,T,[],0,0,0,0,["k",ASB(AHg)],NC,0,T,[],0,0,0,0,["k",ASB(AIL)],Nu,0,T,[],0,0,0,0,["k",ASB(AN3)],NA,0,T,[],0,0,0,0,["k",ASB(AEH)],NB,0,T,[],0,0,0,0,["k",ASB(ALN)],La,0,C,[],3,3,0,0,0,Rt,0,C,[La],4,3,0,0,0,Cd,0,Cr,[],12,3,0,ABS,0,Nm,0,C,[Bb],0,3,0,0,["l",ASB(AMO)],Ml,0,Gj,[],0,0,0,0,["b8",ASD(AG9),"cb",ASE(APT),"eM",ASA(AFy)],Pf,0,Bm,[],0,3,0,0,0,Wf,0,Bm,[],0,3,0,0,0,Ul,0,FC,[],0,3,0,0,0,O5,0,FC,[],0,3,0,0,0,WZ,0,Bm,[],0,3,0,0,0,Uf,0,C,[],0,3,0,0,0]);
$rt_metadata([RE,0,C,[Bb],0,3,0,0,0,RD,0,C,[Bb],0,3,0,0,0,Uj,0,C,[La],0,0,0,0,0,Wc,0,C,[Bi],0,3,0,0,["s",ASA(ALy)],YV,0,C,[],0,3,0,0,0,OY,0,C,[],3,3,0,0,0,Wh,0,C,[OY],0,3,0,0,0,RY,0,T,[],0,0,0,0,["k",ASB(AOx)],L4,0,T,[],0,0,0,0,["k",ASB(AEq)],QW,0,T,[],0,0,0,0,["k",ASB(AEa)],QV,0,T,[],0,0,0,0,["k",ASB(AG6)],VV,0,T,[],0,0,0,0,["k",ASB(AIw)],N6,0,T,[],0,0,0,0,["k",ASB(AOA)],Nf,0,T,[],0,0,0,0,["k",ASB(ALb)],PH,0,T,[],0,0,0,0,["k",ASB(AMJ)],LX,0,T,[],0,0,0,0,["k",ASB(APu)],L2,0,T,[],0,0,0,0,["k",ASB(AF$)],M2,0,
T,[],0,0,0,0,["k",ASB(AOM)],Ow,0,T,[],0,0,0,0,["k",ASB(AJ1)],OF,0,T,[],0,0,0,0,["k",ASB(AL_)],SM,0,T,[],0,0,0,0,["k",ASB(AOp)],Rv,0,T,[],0,0,0,0,["k",ASB(APe)],Me,0,T,[],0,0,0,0,["k",ASB(AFW)],Ls,0,T,[],0,0,0,0,["k",ASB(ALd)],QO,0,Ls,[],0,0,0,0,["k",ASB(AND)],UV,0,C,[BU],0,3,0,0,["bf",ASB(AL2)],UY,0,C,[BU],0,3,0,0,["bf",ASB(AKQ)],Sy,0,C,[BU],0,3,0,0,["bf",ASB(AHF)],SB,0,C,[BU],0,3,0,0,["bf",ASB(ADF)],TE,0,C,[BU],0,3,0,0,["bf",ASB(AJt)],N2,0,C,[Bi],0,3,0,0,0,Uw,0,C,[Bb],0,3,0,0,["l",ASB(ALK)],Ut,0,C,[Bb],0,3,
0,0,["l",ASB(AJx)],Uu,0,C,[Bb],0,3,0,0,["l",ASB(ALM)],OZ,0,C,[Ik],0,3,0,0,["p9",ASA(AJz)],X0,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.JA=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"trying to display with unknown screen size and dpr","onContextMenu","#616161","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile"," on Copy",".cpp",".cc",".cxx",".hpp",".c",".h",".js","jsToWasm1: a = ",
", b = ","jsToWasm2: a = ","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","#BBBBBB","onEnter item ","#3C3F41","#4B6EAF","\\n","defaultText","keyword","field","#9876AA","#6A8759","comma","#CC7832","error","unused","#72737A","#6897BB","method","#FFC66D","showUsage","braceMatch","#FFEF28","#3B514D","comment","#808080","annotation","#BBB529","type","#287BDE","operator","#5F8C8A","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null",
" error: ","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","/","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined",
"javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari",
"Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts",
"CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic",
"GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables",
"HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk",
"So","Pi","Pf","Viewport parsed in ","Verdana","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bv.prototype.toString=function(){return $rt_ustr(this);};
Bv.prototype.valueOf=Bv.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AEW(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Co=Long_add;var JP=Long_sub;var BM=Long_mul;var Di=Long_div;var L7=Long_rem;var AQO=Long_or;var CS=Long_and;var AVD=Long_xor;var Fb=Long_shl;var Ge=Long_shr;var DW=Long_shru;var AQ$=Long_compare;var E2=Long_eq;var AVE=Long_ne;var AGu=Long_lt;var OT=Long_le;var AGc=Long_gt;var YN=Long_ge;var AVF=Long_not;var ARk=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(ARo);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=SU.prototype;c.f=c.bf;c=SS.prototype;c.f=c.bf;c=Mw.prototype;c.f=c.bf;c=Zf.prototype;c.get=c.Fl;Object.defineProperty(c,"length",{get:c.EH});c=M3.prototype;c.f=c.bf;c=XI.prototype;c.removeEventListener=c.B0;c.dispatchEvent=c.z6;c.get=c.xp;c.addEventListener=c.yG;Object.defineProperty(c,"length",{get:c.Aa});c=UP.prototype;c.onAnimationFrame=c.B3;c=UK.prototype;c.f=c.tC;c=UH.prototype;c.handleEvent=c.b3;c=UI.prototype;c.f=c.bf;c=V7.prototype;c.accept=c.tQ;c=V8.prototype;c.accept=c.tQ;c=Vx.prototype;c.handleEvent
=c.b3;c=Vy.prototype;c.handleEvent=c.b3;c=Vz.prototype;c.handleEvent=c.b3;c=VA.prototype;c.handleEvent=c.b3;c=VB.prototype;c.handleEvent=c.b3;c=VC.prototype;c.handleEvent=c.b3;c=VD.prototype;c.handleEvent=c.b3;c=VE.prototype;c.handleEvent=c.b3;c=VF.prototype;c.handleEvent=c.b3;c=VG.prototype;c.handleEvent=c.b3;c=WT.prototype;c.handleEvent=c.b3;c=WU.prototype;c.handleEvent=c.b3;c=WV.prototype;c.handleEvent=c.b3;c=WW.prototype;c.handleEvent=c.b3;c=Tu.prototype;c.handleEvent=c.b3;c=WA.prototype;c.f=c.bf;c=WC.prototype;c.f
=c.bf;c=MD.prototype;c.f=c.bf;c=MC.prototype;c.f=c.bf;c=MB.prototype;c.f=c.bf;c=MA.prototype;c.f=c.bf;c=MX.prototype;c.accept=c.tQ;c=Oi.prototype;c.f=c.tC;c=Og.prototype;c.f=c.tC;c=PK.prototype;c.f=c.bf;c=TK.prototype;c.f=c.bf;c=L5.prototype;c.f=c.bf;c=Wq.prototype;c.f=c.bf;c=Wp.prototype;c.f=c.bf;c=VQ.prototype;c.f=c.bf;c=VP.prototype;c.f=c.bf;c=Wk.prototype;c.handleEvent=c.b3;c=O7.prototype;c.f=c.bf;c=L1.prototype;c.onTimer=c.p9;c=LK.prototype;c.onTimer=c.p9;c=Wo.prototype;c.f=c.bf;c=V$.prototype;c.f=c.bf;c
=Tk.prototype;c.f=c.bf;c=UV.prototype;c.f=c.bf;c=UY.prototype;c.f=c.bf;c=Sy.prototype;c.f=c.bf;c=SB.prototype;c.f=c.bf;c=TE.prototype;c.f=c.bf;c=OZ.prototype;c.onTimer=c.p9;})();
}));
