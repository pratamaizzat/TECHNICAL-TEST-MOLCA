import { encrypMessage } from '../'

it("should add two numbers correctly", () => {
  expect(encrypMessage({
    keyIv: '1234567891234567',
    secretKey: '1234567891234567',
    message: 'The quick brown fox jumps over the lazy dog',
    useMD5key: true,
    useBase64: true
  })).toEqual("OEZCQzcyQTcxOERFMEE3MDUyMTM4MEE4NTFEN0EyNjcxNkJCQjFBQUU3MDg2OTRCMTc2QUEwNzhEOTE0MjQwN0U5QzgzNkJBNzM5MEY1Q0UyNzA3NjA0N0VFNDdDOEYx");
});