document.getElementById('translate-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const slang = document.getElementById('slang').value;
    fetch(`https://api.urbandictionary.com/v0/define?term=${slang}`)
        .then(response => response.json())
        .then(data => {
            if (data.list.length > 0) {
                document.getElementById('translation').value = data.list[0].definition;
            } else {
                document.getElementById('translation').value = "No translation found.";
            }
        })
        .catch(error => {
            console.error('Error fetching translation:', error);
            document.getElementById('translation').value = "Error fetching translation.";
        });
});
