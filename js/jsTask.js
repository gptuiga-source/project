const inputElement = document.getElementById('note-input')
const submit = document.getElementById('btn-add')
const listElement = document.getElementById('list')
const notes = JSON.parse(localStorage.getItem('notes')) || []

function saveToStorage() {
	localStorage.setItem('notes', JSON.stringify(notes))
}

function task(name) {
	listElement.insertAdjacentHTML(
		'afterbegin',
		`<li class="list-item">
			<span>${name}</span>
			<div class="actions">
				<button class="btn-danger" onclick="delTask(this)">✖</button>
			</div>
		</li>`,
	)
}

function delTask(btn) {
	const parent = btn.closest('.list-item')
	const text = parent.querySelector('span').textContent
	const index = notes.indexOf(text)

	if (index !== -1) {
		notes.splice(index, 1)
		saveToStorage()
	}
	parent.remove()
}

notes.forEach(note => task(note))

submit.onclick = function () {
	const result = inputElement.value.trim()
	if (result === '' || notes.includes(result)) return

	task(result)
	notes.push(result)
	saveToStorage()
	inputElement.value = ''
}
