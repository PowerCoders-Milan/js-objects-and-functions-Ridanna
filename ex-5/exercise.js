function helloWorld(language) {
    var language = prompt ('please select english, spanish or german');

    if (language == 'english') {
        window.alert('Hello World')
    } else if (language == 'spanish') {
        window.alert('hola mondo')
    } else if (language == 'german') {
        window.alert('Hallo Welt')
    } else if (language == '') {
        window.alert('Hello World')
    }
    
} 
helloWorld()