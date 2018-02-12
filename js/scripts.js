var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
	maleNames =['Pioter', 'Marek', 'Arek', 'Jarek'],
	allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}

