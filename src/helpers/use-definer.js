import React, { useState } from "react";

const transformValue = function (value, transformers) {
  const canTransform = transformers && transformers.length;
  if (!canTransform) return value;
  let _v = value;
  for (const transformer of transformers) _v = transformer(_v);
  return _v;
};

const useDefiner = function (
  obj,
  key,
  defaultVal,
  setTransformers = [],
  getTransformers = [],
  triggers = []
) {
  const init = transformValue(defaultVal, setTransformers);
  const [getter, setter] = useState(init);

  const useSetTransform = !!(setTransformers && setTransformers.length);
  const useGetTransform = !!(getTransformers && getTransformers.length);
  const useTriggers = !!(triggers && triggers.length);

  let setValue = (v) => setter(v);
  let getValue = () => getter;

  if (useSetTransform) {
    setValue = (v) => setter(transformValue(v, setTransformers));
  }

  if (useGetTransform) {
    getValue = () => {
      const val = getter;
      return {
        raw: val,
        val: transformValue(val, getTransformers)
      };
    };
  }

  const config = {
    enumerable: true,
    configurable: false,
    writeable: false,
    get: getValue,
    set: setValue
  };

  Object.defineProperty(obj, key, config);

  if (useTriggers) {
    // eslint-disable-next-line
    React.useEffect(() => transformValue(getValue(), triggers), [getter]);
  }
};

export default useDefiner;
