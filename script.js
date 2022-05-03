function section (character){
    //Intente meter las imágenes por url pero salió CORS por eso no pude :(
    return `<div class="example-1 card">
    <div class="wrapper" style="background: url(./img/${character.name}.webp) 50% 1%/cover">
      <div class="date">
        <span class="day">${character.birthday}</span>
      </div>
      <div class="data">
        <div class="content">
          <span class="author">${character.vision}</span>
          <h1 class="title"><a href="#">${character.name}</a></h1>
          <p class="text">${character.description}</p>
        </div>
      </div>
    </div>
  </div>`;
}

async function render(){
    $.getJSON("https://genshinlist.com/api/characters", function(result){
        let html = '';
        $.each(result, function(i, field){
            console.log(field);
            html += section(field);

            let container = document.querySelector('.row')
            container.innerHTML = html;
        })
    })
}
render();