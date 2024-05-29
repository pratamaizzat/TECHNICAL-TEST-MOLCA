import { encrypMessage } from '../'

it("should add two numbers correctly", () => {
  expect(encrypMessage({
    keyIv: '1234567891234567',
    secretKey: '1234567891234567',
    message: 'The quick brown fox jumps over the lazy dog',
    useMD5Iv: true
  })).toEqual("5B2057067B679CFF99EAC527B4552981479B508C76AC7AE2E384DB2D87C0D4C248F96F407833DCB95E19B8A77BA78B3E");
});