import running from './utils/index.js';
class Dog {
  constructor(name) {
    this.name = name;
  }
  running() {}
}
const dog1 = new Dog();
dog1.running = running;
dog1.running();