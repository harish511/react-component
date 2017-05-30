'use strict';

export default function getSyncJavaScript() {
  const scripts = Array.prototype.slice.call(window.document.getElementsByTagName('script'));
  return scripts.filter(function mapper(s) {
    return !s.async && s.src;
  }).map(function mapper(s) {
    return s.src;
  });
}
