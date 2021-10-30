const service = require('./service')
const users = require('./model')

jest.mock('./model', () => ([{
  username: 'joao',
  password: '12345'
}]))

describe('Test list users', () => {
  describe('when list users', () => {
    const expected = [{
      username: 'joao',
      password: '12345'
    }]
    let received

    beforeEach(() => {
      received = service.getUsers()
    })

    it('should return a list of users', () => {
      expect(received[0].username).toBe(expected[0].username)
    })

    it('should not have password', () => {
      expect(received[0].password).toBe(undefined)
    })
  })
})
