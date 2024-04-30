const form = document.querySelector('#form')

const weightValues = {
    0: 'Muito abaixo do peso',
    1: 'Abaixo do peso',
    2: 'Peso ideal',
    3: 'Acima do peso',
    4: 'Obesidade',
    5: 'Obesidade severa',
    6: 'Obesidade mórbida'
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const weight = document.querySelector('#weight-input').value.replace(',', '.')
    const height = document.querySelector('#height-input').value.replace(',', '.')
    
    const imcCalc =  weight / (height * 2)
    const imc = imcCalc.toFixed(1)

    const returnValue = document.querySelector('#return-value')

    returnValue.classList.remove('invisible')

    const calcWorking = () => {
        if(!Number(weight) || !Number(height)) {
            returnValue.textContent = 'Preencha corretamente os valores.'
            returnValue.classList.add('text-red-900')
            return
        }
    
        returnValue.classList.remove('text-red-900')

        if(imc > 40) {
            returnValue.innerHTML = `Seu IMC está em ${imc}, você está com <span class="text-red-900">${weightValues[6]}.</span>`
            return
        }
    
        if(imc > 35) {
            returnValue.innerHTML = `Seu IMC está em ${imc}, você está com <span class="text-red-900">${weightValues[5]}.</span>`
            return
        }

        if(imc > 30) {
            returnValue.innerHTML = `Seu IMC está em ${imc}, você está com <span class="text-red-900">${weightValues[4]}.</span>`
            return
        }

        if(imc > 25) {
            returnValue.innerHTML = `Seu IMC está em ${imc}, você está <span class="text-red-900">${weightValues[3]}.</span>`
            return
        }

        if(imc >= 18.5) {
            returnValue.innerHTML = `Seu IMC está em ${imc}, você está no seu <span class="text-green-color">${weightValues[2]}.</span>`
            return
        }

        if(imc >= 17) {
            returnValue.innerHTML = `Seu IMC está em ${imc}, você está <span class="text-red-900">${weightValues[1]}.</span>`
            return
        }

        if(imc <= 16.9) {
            returnValue.innerHTML = `Seu IMC está em ${imc}, você está <span class="text-red-900">${weightValues[0]}.</span>`
            return
        }
    }
    calcWorking()
})