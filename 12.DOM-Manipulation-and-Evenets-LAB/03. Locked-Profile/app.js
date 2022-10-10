function lockedProfile() {
    let buttonsElements = Array.from(document.querySelectorAll("button"));
    for (const button of buttonsElements) {
        button.addEventListener("click", showMore);
    }

    function showMore(e) {
        const btn = e.target;
        const profile = btn.parentNode;
        const hiddenInfo = profile.querySelector('div') 
        if(profile.querySelector('input[value="unlock"]').checked){       
        if (btn.textContent === 'Show more') {
            hiddenInfo.style.display = 'block';
            btn.textContent = 'Hide it';
          } else {
            hiddenInfo.style.display = 'none';
            btn.textContent = 'Show more';
          }
        }
}
}


