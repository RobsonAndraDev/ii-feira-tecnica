const userService = require('./user-services')
const users = require('./user-model')

jest.mock('./user-model', () => ([{
  username: 'joao',
  password: '12345'
}]))

describe('test user service', () => {
  describe('when username does not exist', () => {
    describe('and password exists', () => {
      it('should return error message: User not found', () => {
        const username = 'maria'
        const password = '12345'
        const expected = 'User not found'

        const userToken = userService.login(username, password)

        expect(userToken.error).toBe(expected)
      })
    })

    describe('and password does not exist', () => {
      it('should return error message: User not found', () => {
        const username = 'maria'
        const password = '123'
        const expected = 'User not found'

        const userToken = userService.login(username, password)

        expect(userToken.error).toBe(expected)
      })
    })
  })

  describe('when username exists', () => {
    describe('and password does not exist', () => {
      it('should return error message: Wrong password', () => {
        const username = 'joao'
        const password = '123'
        const expected = 'Wrong password'

        const userToken = userService.login(username, password)

        expect(userToken.error).toBe(expected)
      })
    })

    describe('and password exists', () => {
      it('should return code equal 200', () => {
        const username = 'joao'
        const password = '12345'
        const expected = 200

        const userToken = userService.login(username, password)

        expect(userToken.code).toBe(expected)
      })
    })
  })
})
