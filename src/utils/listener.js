function handleClick(button) {
    const buttons = document.querySelectorAll('.button_black');
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      button.classList.add("disabled");
    } else {
      buttons.forEach(btn => {
        if (btn.classList.contains('active')) {
          btn.classList.remove('active');
          btn.classList.add('disabled');
        }
      });
      button.classList.add("active");
      button.classList.remove("disabled");
    }
}