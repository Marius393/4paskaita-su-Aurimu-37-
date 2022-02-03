const vardai = [
    'Marius',
    'Petras',
    'Rita'
];


const sarasoIlgis = vardai.length


for (let i = 0; i < sarasoIlgis; i++) {
    
    const ul = document.querySelector('ul');

    const li = document.createElement('li');

    li.innerText = vardai[i];

    ul.append(li);

}

