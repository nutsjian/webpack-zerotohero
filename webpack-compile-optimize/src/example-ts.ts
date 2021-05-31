export class C {
  private x = 10
  getX = () => this.x
  setX = (newVal: number) => {
    this.x = newVal
  }
}

function sum(a, b) {
  return a + b;
}

export let x: C = new C()
export let y = { ...{ some: 'value' } }
