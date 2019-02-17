import { createMenuTemplate } from '../../src/ui/menuTemplate'

describe('menuTemplate', () => {
  test('createMenuTemplate()', () => {
    expect(createMenuTemplate({} as any)).toMatchSnapshot()
  })
})
