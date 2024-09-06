export const closeModalAndRedirect = (
  modalId,
  navigate,
  redirectPath = "/"
) => {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.close(); // Close the modal
  }
  navigate(redirectPath); // Redirect to the desired path
};
