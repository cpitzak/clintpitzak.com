function updateRepoCount() {
    fetch("https://api.github.com/users/cpitzak/repos", {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById('github-repo-count').innerHTML = data.length;
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
}
updateRepoCount();