import { IPCEventNames } from '../../src/types/ipc'

describe('ipc', () => {
  test('match IPCEventNames', () => {
    expect(IPCEventNames).toMatchSnapshot()
  })
})
