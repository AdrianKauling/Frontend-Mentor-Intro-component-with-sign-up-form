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

function sinalizationStyle(sinalization) {
    const state = {
        aparent() {
            sinalization.style.width = "25px"
            sinalization.style.height = "24px"
        },
        none() {
            sinalization.style.width = "0"
            sinalization.style.height = "0"
        }
        
    }
    
    return state
}


function validity(event) {
    const field = event.target
    const error = validityField(field)

    const divInput = field.parentNode

    const spanError = divInput.querySelector(".spanError")
    const sinalization = divInput.querySelector(".sinalization")

    const setStyleSinalization = sinalizationStyle(sinalization)

    if(error) {
        setStyleSinalization.aparent()
        divInput.style.borderColor = "red"
        field.placeholder = ""
        
        spanError.classList.add("error")
        spanError.innerText = messagesCustomForTypeError(field, error)
    }else {
        divInput.style.borderColor = "gray"
        setStyleSinalization.none()

        spanError.classList.remove("error")
        spanError.innerText = ""
    }
}

function changeBorderFocusInput(event) {
    const fieldFather = event.target.parentNode
    fieldFather.style.borderColor = "blue"
}


const inputs = document.querySelectorAll('.inp')

for(let input of inputs) {
    input.addEventListener('focus',changeBorderFocusInput)
}





const form = document.querySelector('#myForm')

form.addEventListener("submit", event => {
    event.preventDefault()
    alert("Form send with sucessfully, thanks for registering")
})