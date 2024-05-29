import { encrypMessage } from '../'

it("should add two numbers correctly", () => {
  expect(encrypMessage({
    keyIv: '1234567891234567',
    secretKey: '1234567891234567',
    message: 'The quick brown fox jumps over the lazy dog',
    useMD5key: true,
    useBase64: true,
    useMD5Iv: true
  })).toEqual("REQwNEExODc2MEQ4NzAwNUIzRERBNjk3NzFERUUxRkMzNzRBOUIwNDY0MjJCMjlEMjk1MzVGOTA2OUY4RDU5OTM4RkRBMzMxOENGQ0Y0REEwNTVCMjZBMTgyRTIyRDdD");
});