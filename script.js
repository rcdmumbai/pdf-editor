
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('pdfUpload');

// ✅ This makes the hidden input open the file dialog when clicking the drop zone
dropZone.addEventListener('click', () => {
    fileInput.click();
});

// ✅ Handle file selection
fileInput.addEventListener('change', handleFiles);
