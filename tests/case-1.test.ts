import { encrypMessage } from '../'

it("False, False, False", () => {
  expect(encrypMessage({
    keyIv: '1234567891234567',
    secretKey: '1234567891234567',
    message: 'The quick brown fox jumps over the lazy dog',
  })).toEqual("00199DD1724740C840F9311BE3449DB7AF2D6F25613985A825C29D64C44757A71E3D766B344C85107FD10A34AE6DBD5D");
});