// state -> subs [effect, ....]

// effect {
//   execute,
//   deps: (sub, sub...) // 为什么在Effect里面要记录他的依赖呢？
// }

const effectStack = [];

function subscribe(subs, effect) {
  subs.add(effect);
  effect.deps.add(subs);
}

function useState(value) {
  const subs = new Set();

  const getter = () => {
    // 订阅
    const effect = effectStack[effectStack.length - 1];
    subscribe(subs, effect);
    return value;
  };

  const setter = (newValue) => {
    // 触发 notify
    value = newValue;
    for (const effect of [...subs]) {
      effect.execute();
    }
  };

  return [getter, setter];
}

function cleanUp(effect) {
  for (const sub of effect.deps) {
    sub.delete(effect);
  }

  effect.deps.clear();
}

function useEffect(callback) {
  const execute = () => {
    // 清除所有依赖 -》 ？？？
    cleanUp(effect);

    // 将当前Effect添加到effect队列
    effectStack.push(effect);

    try {
      callback();
    } finally {
      effectStack.pop();
    }
  };

  const effect = {
    execute,
    deps: new Set(),
  };

  execute();
}

const [num, setNum] = useState(1);
const [mode, setMode] = useState(true);
const [age, setAge] = useState(100);

useEffect(() => {
  if (mode()) {
    console.log(num());
  } else {
    console.log(age());
  }
});

setNum(2);
setNum(3);

setAge(10);
setAge(101);
