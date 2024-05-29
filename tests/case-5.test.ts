import { encrypMessage } from '../'

it("should add two numbers correctly", () => {
  expect(encrypMessage({
    keyIv: '1234567891234567',
    secretKey: '1234567891234567',
    message: 'The quick brown fox jumps over the lazy dog',
    useMD5key: true
  })).toEqual("8FBC72A718DE0A70521380A851D7A26716BBB1AAE708694B176AA078D9142407E9C836BA7390F5CE27076047EE47C8F1");
});