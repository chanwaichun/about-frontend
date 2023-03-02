function diffVersion(oldVer, newVer) {
  const _oldVer = oldVer.split('.');
  const _newVer = newVer.split('.');
  const maxLength = Math.max(_oldVer.length, _newVer.length);
  let i = maxLength - 1;
  console.log(i)
  let currentVer = null
  while (i >= 0) {
    if (!_oldVer[i]) {
      currentVer = newVer
    }
    if (!_newVer[i]) {
      currentVer = oldVer
    }
    if (_newVer[i] && _oldVer[i]) {
      currentVer = Number(_newVer[i]) > Number(_oldVer[i]) ? newVer : oldVer
    }

    i--
  }
  return currentVer
}
const diff = diffVersion('3.2.3', '2')
console.log(diff)