import { encrypMessage } from '../'

it("should add two numbers correctly", () => {
  expect(encrypMessage({
    keyIv: '1234567891234567',
    secretKey: '1234567891234567',
    message: 'The quick brown fox jumps over the lazy dog',
    useMD5Iv: true,
    useBase64: true
  })).toEqual("NUIyMDU3MDY3QjY3OUNGRjk5RUFDNTI3QjQ1NTI5ODE0NzlCNTA4Qzc2QUM3QUUyRTM4NERCMkQ4N0MwRDRDMjQ4Rjk2RjQwNzgzM0RDQjk1RTE5QjhBNzdCQTc4QjNF");
});