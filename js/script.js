const ageId = document.getElementById('age')

window.addEventListener('load', () => {
	const age = new Date().getFullYear() - 1996
	return (ageId.textContent = age)
})
