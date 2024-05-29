import { encrypMessage } from '../'

it("should add two numbers correctly", () => {
  expect(encrypMessage({
    keyIv: '1234567891234567',
    secretKey: '1234567891234567',
    message: 'The quick brown fox jumps over the lazy dog',
    useMD5key: true,
    useMD5Iv: true
  })).toEqual("DD04A18760D87005B3DDA69771DEE1FC374A9B046422B29D29535F9069F8D59938FDA3318CFCF4DA055B26A182E22D7C");
});