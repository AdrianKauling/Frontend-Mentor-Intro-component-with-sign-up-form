const fields = document.querySelectorAll("[required]")

for(let field of fields) {
    field.addEventListener("invalid", (event) => {
        event.preventDefault()
        validity(event)
    })

    field.addEventListener("blur", validity)
}

function validityField(field) {
    let FoundError = false
    for(let error in field.validity) {

        if(field.validity[error] && !field.validity.valid) {
            FoundError = error
            console.log(error)
        }
    }

    return FoundError
}

function messagesCustomForTypeError(field, typeError) {
    const messages = {
        text:{
            firstName:{
                valueMissing:"First Name cannot be empty"
            },
            lastName: {
                valueMissing:"Last Name cannot be empty"
            }
        },
        email: {
            email:{
                valueMissing:"Email cannot be empty",
                typeMismatch:"Looks like this is not an email"
            }
        },
        password: {
            password: {
                valueMissing:"Password cannot be empty"
            }
        }
    }

    return messages[field.type][field.id][typeError]
}


function validity(event) {
    const field = event.target
    const error = validityField(field)

    const spanError = field.parentNode.querySelector(".spanError")
    if(error) {
        spanError.classList.add("error")
        spanError.innerText = messagesCustomForTypeError(field, error)
    }else {
        spanError.classList.remove("error")
        spanError.innerText = ""
    }
}









const form = document.querySelector('#myForm')
form.addEventListener("submit", event => {
    event.preventDefault()
    console.log("Formulário enviado")
})