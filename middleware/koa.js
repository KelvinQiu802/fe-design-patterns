function Pipeline(...middlewares) {
  const stack = middlewares;

  const push = (...middlewares) => {
    stack.push(...middlewares);
  };

  const execute = (ctx) => {
    let prevIndex = -1;

    const runner = (index) => {
      if (index === prevIndex) {
        throw new Error('不能多次调用next');
      }

      prevIndex = index;
      const middleware = stack[index];

      if (middleware) {
        middleware(ctx, () => runner(index + 1));
      }
    };

    runner(0);
  };

  return { push, execute };
}

const pipe = Pipeline((ctx, next) => {
  console.log(ctx.name);
  next();
});

pipe.push(
  (ctx, next) => {
    ctx.name = 'Lydia';
    next();
  },
  (ctx, next) => {
    console.log(ctx.name);
    next();
  },
  (ctx, next) => {
    console.log('Useless');
  }
);

pipe.execute({ name: 'Kelvin' });
