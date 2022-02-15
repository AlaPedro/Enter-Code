    function insert(number)
    {
    let numero = document.getElementById('password').innerHTML;
        document.getElementById ('password').innerHTML = numero + number;
    }

    function playAudioTe(){
        var audio = document.getElementById("audioTecla");
        audio.currentTime = 0.02
        audio.play()
    }

    function playAudioScream(){
        var audioScream = document.getElementById("audioScream");
        audio.currentTime = 0.02
        audioScream.play()
    }


    function typeWriter(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ''
        textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 180 * i)
        });
    }

    const acesso = document.getElementById('closedOpen');
    typeWriter(acesso)


    let senha = Number (document.getElementById('password').innerHTML);
        console.log(senha);

    function checkPassword(num){
        let senha = Number (document.getElementById('password').innerHTML);
        console.log(senha);

        if (senha == 7651) {
            acesso.innerHTML = 'Acesso Liberado';

            typeWriter(acesso);
    
            document.getElementById('buttonEnter-acesso').style.display = 'flex';
            document.getElementById('img-scarry').style.display = 'flex';
            audioScream.play()
            document.getElementById('password-content').style.display = 'none';
        }

        else {
            acesso.innerHTML = 'Senha Incorreta';

            typeWriter(acesso);

            document.getElementById('password').innerHTML = '';
        };
    };