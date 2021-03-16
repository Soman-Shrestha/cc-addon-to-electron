// addon.cc
#include <node.h>

namespace demo {

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;

// This is the implementation of the "add" method
// Input arguments are passed using the
// const FunctionCallbackInfo<Value>& args struct
void Encrypt(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  // Perform the operation
  Local<Number> num;
  if(args.Length() == 3){
      double value = args[0].As<Number>()->Value() + args[1].As<Number>()->Value() + args[2].As<Number>()->Value();
      num = Number::New(isolate, value);
  }
  else {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments").ToLocalChecked()));
    return;
  }


  // Set the return value (using the passed in
  // FunctionCallbackInfo<Value>&)
  args.GetReturnValue().Set(num);
}

void Decrypt(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  // Perform the operation
  Local<Number> num;
  if(args.Length() == 2){
      double value = args[0].As<Number>()->Value() + args[1].As<Number>()->Value();
      num = Number::New(isolate, value);
  }
  else {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments").ToLocalChecked()));
    return;
  }

  // Set the return value (using the passed in
  // FunctionCallbackInfo<Value>&)
  args.GetReturnValue().Set(num);
}

void Init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "encrypt", Encrypt);
  NODE_SET_METHOD(exports, "decrypt", Decrypt);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Init)

// module.exports = {
//   Encrypt, Decrypt
// }
}  // namespace demo