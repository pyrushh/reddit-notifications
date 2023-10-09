document.body.addEventListener("click", (event) => {
  const clickedAnchor = event.target.closest("a");
  const inboxTooltip = document.getElementById("INBOX--TOOLTIP");
  const href = clickedAnchor.getAttribute("href");

  if (clickedAnchor && inboxTooltip?.contains(clickedAnchor)) {
    event.preventDefault();
    event.stopPropagation();
    clickedAnchor.removeAttribute("target");
    window.location.href = href;
  }
});
