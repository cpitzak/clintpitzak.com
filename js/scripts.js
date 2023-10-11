function updateRepoCount() {
    fetch("https://api.github.com/users/cpitzak/repos?per_page=100", {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const defaultCount = 30;
        let count = data ? data.length : defaultCount;
        // for when github is off line
        count = Number.isInteger(count) || count < defaultCount ? defaultCount : count;
        document.getElementById('github-repo-count').innerHTML = data.length;
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
}
updateRepoCount();
