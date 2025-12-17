 (function () {
        //your JS code here. If required.
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const checkbox = document.getElementById("checkbox");
        const existingBtn = document.getElementById("existing");
        const form = document.getElementById("login-form");

        function checkForExistingUser() {
          return (
            !!localStorage.getItem("username") && localStorage.getItem("password")
          );
        }

        function updateExistingUserBtn() {
          if (checkForExistingUser()) {
            existingBtn.disabled = false;
          }else {
            existingBtn.disabled = true;
          }
        }

        existingBtn.addEventListener("click", () => {

          if (checkForExistingUser()) {
            const username = localStorage.getItem("username");

          alert(`Logged in as ${username}`);          }
        });

        window.addEventListener("DOMContentLoaded", () => {
          usernameInput.value = "";
          passwordInput.value = "";
          checkbox.checked = false;

          updateExistingUserBtn();
        });

        form.addEventListener("submit", handleSubmit);

        function handleSubmit(e) {
          e.preventDefault();

          const username = usernameInput.value.trim();
          const password = passwordInput.value;

          alert(`Logged in as ${username}`);

          if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
          } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
          }

          updateExistingUserBtn();
        }
      })();