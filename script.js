const icon = document.querySelector(".heart-icon");

icon.addEventListener("click", () => {
  if (icon.classList[1] === "heart-icon--disabled") {
    icon.classList.replace("heart-icon--disabled", "heart-icon--enabled");
  } else {
    icon.classList.replace("heart-icon--enabled", "heart-icon--disabled");
  }
});
