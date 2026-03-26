const inputElement = document.getElementById('note-input')
const createBtn = document.getElementById('btn-add')
const listElement = document.getElementById('list')

const notes = (JSON.parse(localStorage.getItem('notes')) || []).filter(n => n)

function saveToLocalStorage() {
	localStorage.setItem('notes', JSON.stringify(notes))
}

createBtn.onclick = function () {
	if (inputElement.value.length === 0) return

	const newNote = {
		title: inputElement.value,
		completed: false,
	}

	notes.push(newNote)
	saveToLocalStorage()
	render()
	inputElement.value = ''
}

function render() {
	listElement.innerHTML = ''

	for (let i = 0; i < notes.length; i++) {
		if (!notes[i]) continue
		listElement.insertAdjacentHTML('afterbegin', getNoteTemplate(notes[i], i))
	}
}

function getNoteTemplate(note, index) {
	return `
		<li class="list-item">
			<span class='${note.completed ? 'text-decoration-line-through' : ''}' data-index="${index}">${note.title}</span>
			<div class="actions">
				<button class="btn-danger1" onclick="removeNote(${index})">✖</button>
				<button class="${note.completed ? 'btn-danger3' : 'btn-danger2'}" onclick="toggleNote(${index})">✔ </button>
			</div>
		</li>`
}

function removeNote(index) {
	notes.splice(index, 1)
	saveToLocalStorage()
	render()
}

function toggleNote(index) {
	notes[index].completed = !notes[index].completed
	saveToLocalStorage()
	render()
}

render()
