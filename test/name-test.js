const name = require('../source/client/name.tag')

describe('name', () => {
  it('should exist', () => {
    expect(name).to.be.defined()
  })

  describe('mount', () => {
    beforeEach(() => {
      const html = document.createElement('name')

      document.body.appendChild(html)
      riot.mount('name')
    })

    it('should work', () => {
      expect(document.querySelector('name')).to.not.equal(null)
    })

    it('should render', () => {
      expect(document.querySelector('name').textContent).to.contain('Name')
    })
  })
})
