import CryptoJs from "crypto-js";

export const createSignature = (method, suffix, payload) => {
  const DELIMITER = '\n';
  const stringPayload = JSON.stringify(payload);
  const hmac = CryptoJs.algo.HMAC.create(CryptoJs.algo.SHA512, "ff8081815fd99760015fdb58e9730000");
  hmac.update(CryptoJs.enc.Utf8.parse(method));
  hmac.update(DELIMITER);
  hmac.update(CryptoJs.enc.Utf8.parse('HTTPS'));
  hmac.update(DELIMITER);
  hmac.update(CryptoJs.enc.Utf8.parse('apidev.buzzpoints.com'));
  hmac.update(DELIMITER);
  hmac.update(CryptoJs.enc.Utf8.parse(suffix));
  hmac.update(DELIMITER);
  hmac.update(CryptoJs.enc.Utf8.parse('application/json'));
  hmac.update(DELIMITER);
  hmac.update(CryptoJs.enc.Utf8.parse(new Date().getTime().toString()));
  hmac.update(DELIMITER);
  hmac.update(CryptoJs.enc.Utf8.parse(stringPayload));
  const hash = hmac.finalize();
  const signature = 'HmacSHA512 ' + CryptoJs.enc.Base64.stringify(hash);
  return signature;
}

