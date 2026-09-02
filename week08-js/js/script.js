"use strict";

const difficultyButton = document.querySelector("#difficulty-toggle");
const difficultyPanel = document.querySelector("#difficulty-panel");

difficultyButton.addEventListener("click", () => {
  const isOpen = difficultyButton.getAttribute("aria-expanded") === "true";
  console.console.log(isOpen);

  difficultyButton.setAttribute("aria-expanded", String(!isOpen));
  difficultyPanel.hidden = isOpen;
});

const planForm = document.querySelector("#plan-form");
const feedback = document.querySelector("#feedback");

planForm.addEventListener("submit", (event) => {
  if (!planForm.checkValidity()) {
    return;
  }

  event.preventDefault();

  const trail = document.querySelector("#trail").value;
  const group = document.querySelector("#group").value;

  feedback.textContent = `Plan ready: ${trail} for ${group.toLowerCase()}. Check official conditions before you leave.`;
});
