document.getElementById("changePasswordForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Password changed successfully!");
  window.location.href = "account.html";
});
