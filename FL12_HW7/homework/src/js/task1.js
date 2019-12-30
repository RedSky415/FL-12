let email = prompt('Enter your email');
let password = prompt('Enter your password');
let possiblelength1 = 5;
let possiblelength2 = 6;
if (email === '' || email === null) {
alert('Canceled'); 
} else if (email.length < possiblelength1) {
alert("I don't know any emails having name length less than 5 symbols"); 
} else if (email === 'user@gmail.com') {
if (password === ''||password === null) {
alert('Canceled'); 
} else if (password === 'UserPass'){
let confirm = window.confirm('Do you want to change your password?')
if (!confirm) {
alert('You have failed the change'); 
} else {
let old = prompt('Write the old password:');
if (old === 'UserPass'){
let change = prompt('Enter new password')
if (change === ''||change === null) {
alert('Canceled'); 
} else if (change.length < possiblelength2) {
alert('It’s too short password. Sorry.'); 
} else {
let again = prompt('Repeat the new password')
if (again === change) {
alert('You have successfully changed your password.') 
} else {
alert('You wrote the wrong password.') 
}
}
}
}
} else {
alert('Wrong password') 
}
} else if (email === 'admin@gmail.com'){
if (password === ''||password === null) {
alert('Canceled'); 
} else if (password === 'AdminPass'){
let confirm = window.confirm('Do you want to change your password?')
if (!confirm) {
alert('You have failed the change'); 
} else {
let old = prompt('Write the old password:');
if (old === 'AdminPass'){
let change = prompt('Enter new password')
if (change === ''||change === null) {
alert('Canceled'); 
} else if (change.length < possiblelength2) {
alert('It’s too short password. Sorry.'); 
} else {
let again = prompt('Repeat the new password')
if (again === change) {
alert('You have successfully changed your password.') 
} else {
alert('You wrote the wrong password.') 
}
}
}
}
} else {
alert('Wrong password') 
}
} else {
alert('I don’t know you'); 
}
