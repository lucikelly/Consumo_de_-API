async function BuscarCep(){
  
  const cep = document.getElementById('cep').value

  
  try {
    const resposta = await  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await resposta.json()
    document.getElementById('rua').value = data.logradouro

    document.getElementById('bairro').value = data.bairro
    document.getElementById('cidade').value = data.localidade
    

    console.log(data)
  } catch (error) {
    alert(error.message)
  }

  
}

async function BuscarTemp(){
  
  const lat = document.getElementById('lat').value
  const lon = document.getElementById('lon').value

  
  try {
    const resposta = await  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`)
    const data = await resposta.json()
    console.log(data)
    
    
    document.getElementById('resposta').innerHTML += `<div> Data: ${data.current.time} - Temperatura: ${data.current.temperature_2m}°C</div>`

    
  } catch (error) {
    alert(error.message)
  }

  
}