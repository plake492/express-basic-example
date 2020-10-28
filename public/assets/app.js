const input = document.getElementById('in')
const btn = document.getElementById('btn')
const display = document.getElementById('display')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  const value = input.value

  $.ajax('/api/test', {
    method: 'POST',
    data: { name: value }
  }).then(data => {
    console.log('data==>>', data)
    display.textContent = data.msg + ' :: ' + data.data.name
  })
})
