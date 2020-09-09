let task1 = document.getElementById('task1')

task1.innerHTML = task1.innerHTML.replace(/функц[а-я]*/g, '<strong>$&</strong>')
