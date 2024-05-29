/**
 * COPYRIGHT to ILFAT IZZAT PRATAMA
 * THIS CODE ONLY FOR TECHNICAL TEST PURPOSE. 
 * MODIFY, SELL, OR USE THIS CODE TO OTHER PROJECT IS NOT ALLOWED.
 * 
 * <pratama.izzat231298@gmail.com>
 * 
 *  SSO Integration for goFluent
 */

import * as crypto from 'crypto'

type Args = {
  message: string
  secretKey: string
  keyIv: string
  useMD5key?: boolean
  useMD5Iv?: boolean
  useBase64?: boolean
}

export function encrypMessage({
  keyIv, 
  message, 
  secretKey, 
  useBase64 = false, 
  useMD5Iv = false, 
  useMD5key = false,
}: Args): string {

  // Throw error if parameters is not given
  if(!keyIv || !message || !secretKey) throw new Error("keyIv, message, secretKey is required")
  
  // Ensure key is 16 bytes for AES-128
  let key = Buffer.from(secretKey);
  if (useMD5key) {
    key = crypto.createHash('md5').update(secretKey).digest();
  } else {
    key = Buffer.from(secretKey.padEnd(16, '0')).slice(0, 16);
  }

  // Ensure IV is 16 bytes
  let iv = Buffer.from(keyIv);
  if (useMD5Iv) {
    iv = crypto.createHash('md5').update(keyIv).digest();
  } else {
    iv = Buffer.from(keyIv.padEnd(16, '0')).slice(0, 16);
  }

  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv).setAutoPadding(true)

  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  if (useBase64) {
    encrypted = encrypted.toUpperCase()
    return btoa(encrypted)
  }

  return encrypted.toUpperCase();
}