function copyText() {
  const text = document.getElementById("result").innerText.trim();

  if (text !== "") {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("✅ Text copied!");
      })
      .catch(() => {
        alert("❌ Copy failed!");
      });
  } else {
    alert("⚠️ No text to copy.");
  }
}

function deleteText() {
  const result = document.getElementById("result");

  if (result.innerText.trim() !== "") {
    result.innerText = "";
    alert("🗑️ Text deleted!");
  } else {
    alert("⚠️ No text to delete.");
  }
}
