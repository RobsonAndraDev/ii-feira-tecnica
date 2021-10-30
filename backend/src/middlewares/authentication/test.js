const authentication = require('./service')

describe('Test authentication middleware', () => {
  describe('when validate token', () => {
    describe('and there is no token', () => {
      it('should return error message: not logged in and code 401', () => {
        const expectedMessage = 'Not logged in'
        const expectedCode = 401
        const received = authentication.validateToken(null);

        expect(received.error).toBe(expectedMessage)
        expect(received.code).toBe(expectedCode)
      })
    })

    describe('and there is an invalid token', () => {
      it('should return error message: Unauthorized and code 403', () => {
        const expectedMessage = 'Unauthorized'
        const expectedCode = 403

        const received = authentication.validateToken('123456')

        expect(received.error).toBe(expectedMessage)
        expect(received.code).toBe(expectedCode)
      })
    })

    describe('and there is a valid token', () => {
      it('should return code 200', () => {
        const expectedCode = 200

        const token = authentication.getToken('username', 'password')
        const received = authentication.validateToken(token)

        expect(received.code).toBe(expectedCode)
      })
    })
  })
})
