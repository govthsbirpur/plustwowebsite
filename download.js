function downloadProspectus() {
    // First check if the file exists
    fetch('prospectus-content.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Content file not found');
            }
            return response.text();
        })
        .then(html => {
            // Create a new window to convert HTML to PDF
            const win = window.open('', '_blank');
            win.document.write(html);
            win.document.close();
            
            // Wait for the content to load
            setTimeout(() => {
                // Print the content as PDF
                win.print();
                win.close();
            }, 1000);
        })
        .catch(error => {
            alert('Error: ' + error.message);
            console.error('Download error:', error);
        });
}