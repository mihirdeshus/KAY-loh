function openDatePicker(id) {
  const input = document.getElementById(id);
  if (input) {
    input.focus(); // Fix for Firefox, Edge alignment
    setTimeout(() => {
      if (typeof input.showPicker === 'function') input.showPicker();
    }, 50);
  }
}
