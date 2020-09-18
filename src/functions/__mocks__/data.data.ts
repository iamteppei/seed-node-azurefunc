export function getContextObject(): any {
  return {
    res: null,
    done: null,
    log: jest.fn()
  };
}
