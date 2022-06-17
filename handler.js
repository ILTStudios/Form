const form_inputs = document.querySelectorAll("#input");
const form_submit = document.getElementById('submit');
function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  let apiKey = '190b45c6b3a1b10992773c204a211dbcf2abb276983710d7142c2f93';
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    const ip = data.ip;
    const city = data.city;
    const ip_input = document.getElementById('ip');
    const city_input = document.getElementById('city');

    ip_input.value = `${ip}`;
    city_input.value = `${city}`;
    ip_input.setAttribute('readonly', 'readonly');
    city_input.setAttribute('readonly', 'readonly');
});


window.addEventListener('load', (e) => {
    form_inputs.forEach(input => {
        input.setAttribute('required', 'required');
    })
})

form_submit.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(e.action, {
        method : "POST",
        body : new FormData(document.getElementById('main_form')),
    }).then(
        response => response.json(),
    );
});
