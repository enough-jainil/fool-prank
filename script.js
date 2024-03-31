document.getElementById("openGift").addEventListener("click", function () {
  // Hide the gift section and show the jumpscare after a brief delay
  document.getElementById("giftSection").style.display = "none";

  setTimeout(function () {
    document.getElementById("jumpscare").style.display = "flex";
    document.getElementById("scareSound").play();
  }, 1000); // Adjust the timing as needed

  // Optionally, hide the jumpscare after a few seconds
  setTimeout(function () {
    document.getElementById("jumpscare").style.display = "none";
    alert(
      "How's the gift? Phool, I hope you enjoyed the surprise 😄. I know this is childish 🤣 \n But it's 1st April. Come on Smile. 😀"
    );
  }, 2500); // Adjust time as needed
});
