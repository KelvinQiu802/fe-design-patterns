let user = {
  name: 'Kelvin',
  age: 20,
};

user = new Proxy(user, {
  get(target, prop) {
    console.log(`The value of ${prop} is ${Reflect.get(target, prop)}`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new Error('Age must be a number');
    }
    if (prop === 'age' && value > 150) {
      throw new Error('The maximum age is 120');
    }
    console.log(`${Reflect.get(target, prop)} -> ${value}`);
    return Reflect.set(target, prop, value);
  },
});

user.name;
user.age;
user.name = 'Lydia';
user.age = 100;
