function applyDarkMode() {
  if (isdark()) {
     document.querySelector("body").classList.add('dark');
   }
}
const interval = setInterval(applyDarkMode, 1800000);

applyDarkMode();
clearInterval(interval);
