const tabulaRecta = {
  A: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  B: 'BCDEFGHIJKLMNOPQRSTUVWXYZA'.split(''),
  C: 'CDEFGHIJKLMNOPQRSTUVWXYZAB'.split(''),
  D: 'DEFGHIJKLMNOPQRSTUVWXYZABC'.split(''),
  E: 'EFGHIJKLMNOPQRSTUVWXYZABCD'.split(''),
  F: 'FGHIJKLMNOPQRSTUVWXYZABCDE'.split(''),
  G: 'GHIJKLMNOPQRSTUVWXYZABCDEF'.split(''),
  H: 'HIJKLMNOPQRSTUVWXYZABCDEFG'.split(''),
  I: 'IJKLMNOPQRSTUVWXYZABCDEFGH'.split(''),
  J: 'JKLMNOPQRSTUVWXYZABCDEFGHI'.split(''),
  K: 'KLMNOPQRSTUVWXYZABCDEFGHIJ'.split(''),
  L: 'LMNOPQRSTUVWXYZABCDEFGHIJK'.split(''),
  M: 'MNOPQRSTUVWXYZABCDEFGHIJKL'.split(''),
  N: 'NOPQRSTUVWXYZABCDEFGHIJKLM'.split(''),
  O: 'OPQRSTUVWXYZABCDEFGHIJKLMN'.split(''),
  P: 'PQRSTUVWXYZABCDEFGHIJKLMNO'.split(''),
  Q: 'QRSTUVWXYZABCDEFGHIJKLMNOP'.split(''),
  R: 'RSTUVWXYZABCDEFGHIJKLMNOPQ'.split(''),
  S: 'STUVWXYZABCDEFGHIJKLMNOPQR'.split(''),
  T: 'TUVWXYZABCDEFGHIJKLMNOPQRS'.split(''),
  U: 'UVWXYZABCDEFGHIJKLMNOPQRST'.split(''),
  V: 'VWXYZABCDEFGHIJKLMNOPQRSTU'.split(''),
  W: 'WXYZABCDEFGHIJKLMNOPQRSTUV'.split(''),
  X: 'XYZABCDEFGHIJKLMNOPQRSTUVW'.split(''),
  Y: 'YZABCDEFGHIJKLMNOPQRSTUVWX'.split(''),
  Z: 'ZABCDEFGHIJKLMNOPQRSTUVWXY'.split(''),
};

class VigenereCipheringMachine {
  constructor(instance = true) {
    this.instance = instance;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('message and key are mandatory!');
    }
    let keyCounter = 0;
    const currentKey = [];
    message.split('').forEach((item) => {
      if (keyCounter >= key.length) {
        keyCounter -= key.length;
      }
      if (tabulaRecta.A.includes(item.toUpperCase())) {
        currentKey.push(key[keyCounter]);
        keyCounter += 1;
      } else {
        currentKey.push(item);
      }
    });
    const result = message.split('').map((item, index) => {
      const columnIndex = tabulaRecta.A.indexOf(item.toUpperCase());
      const tabulaRectaKey = currentKey[index].toUpperCase();
      return (columnIndex !== -1)
        ? tabulaRecta[tabulaRectaKey][columnIndex] : item;
    });
    return (this.instance) ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('encryptedMessage and key are mandatory!');
    }
    let keyCounter = 0;
    const currentKey = [];
    encryptedMessage.split('').forEach((item) => {
      if (keyCounter >= key.length) {
        keyCounter -= key.length;
      }
      if (tabulaRecta.A.includes(item)) {
        currentKey.push(key[keyCounter]);
        keyCounter += 1;
      } else {
        currentKey.push(item);
      }
    });
    const result = currentKey.map((item, index) => {
      const columnIndex = (tabulaRecta[item.toUpperCase()])
        ? tabulaRecta[item.toUpperCase()].indexOf(encryptedMessage[index])
        : null;
      return ((columnIndex !== null) ? tabulaRecta.A[columnIndex] : item);
    });
    return ((this.instance) ? result.join('') : result.reverse().join(''));
  }
};

module.exports = VigenereCipheringMachine;
