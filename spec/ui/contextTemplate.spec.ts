import { createContextTemplate } from '../../src/ui/contextTemplate'

describe('contextTemplate', () => {
  test('createContextTemplate()', () => {
    expect(createContextTemplate({} as any)).toMatchSnapshot()
  })
})
