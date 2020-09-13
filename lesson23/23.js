let task1 = document.getElementById('task1')

task1.innerHTML = task1.innerHTML.replace(/функц[а-я]*/g, '<strong>$&</strong>')

let task2 = document.getElementById('task2')
task2.innerHTML = task2.innerHTML.replace(/\d*\:\d*/g, '<b>$&</b>')

let body = document.querySelector('body')

// body.innerHTML = body.innerHTML.replace(/".+"/g, '<mark>$&</mark>');
