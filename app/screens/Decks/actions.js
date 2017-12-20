export function test() {
  return {
    type: 'TEST',
  };
}

export function changeText(value, name) {
  return {
    type: 'TEXT_CHANGE',
    value,
    name,
  };
}
