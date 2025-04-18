window.addEventListener("load", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']")
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            checkboxes.forEach(otherCheckbox => {
              if (otherCheckbox !== this) {
                otherCheckbox.checked = false;
              }
            });
          }
        });
      });
})
