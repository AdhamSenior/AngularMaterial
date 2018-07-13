import { Core'Module } from './core'.module';

describe('Core'Module', () => {
  let core'Module: Core'Module;

  beforeEach(() => {
    core'Module = new Core'Module();
  });

  it('should create an instance', () => {
    expect(core'Module).toBeTruthy();
  });
});
