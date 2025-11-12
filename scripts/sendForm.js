const sendForm = () => {
    const form = document.querySelector('.modal')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')

        let sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }

        fetch('https://jsonplaceholder.typicode.com/postsабрвалг', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.status != 201){
                    alert('статус не 201!')
                }
                return response.json()
            })
            .then((json) => console.log(json))
            .finally(() => {
                console.log('Форма очищена')
                text.value = '';
                tel.value = '';
                email.value = '';

            })
    })

}

sendForm()