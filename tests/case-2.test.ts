import { encrypMessage } from '../'

it("False, False, True", () => {
  expect(encrypMessage({
    keyIv: '1234567891234567',
    secretKey: '1234567891234567',
    message: 'The quick brown fox jumps over the lazy dog',
    useBase64: true 
  })).toEqual("MDAxOTlERDE3MjQ3NDBDODQwRjkzMTFCRTM0NDlEQjdBRjJENkYyNTYxMzk4NUE4MjVDMjlENjRDNDQ3NTdBNzFFM0Q3NjZCMzQ0Qzg1MTA3RkQxMEEzNEFFNkRCRDVE");
});