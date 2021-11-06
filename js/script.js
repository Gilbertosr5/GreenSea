function windowScreen (){
    if (window.matchMedia("(max-width:700px)").matches) {
        document.querySelector('.footer').style.display = 'none';
        document.querySelector('.footer-mini').style.display = 'flex';

        console.log('a viewport tem menos que 800 pixels de largura')
    } else {
        document.querySelector('.footer-mini').style.display = 'none';
        console.log('a viewport mais que 800 pixels de largura')
    }
} 


// Notices Loading
var notices = [
    {
        "id": 0,
        "title": "Noticia 1",
        "manchete": "MANCHETE PEQUENA",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim voluptates, qui molestiae pariatur, illum corrupti quae quidem officia, exercitationem repudiandae placeat nam quas veniam beatae voluptatem praesentium fuga deserunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt eius quo neque numquam, saepe, in nobis facere illo tempora atque, optio consequuntur voluptatibus qui minima hic inventore! Minima, libero tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet neque eum rem nulla voluptas dignissimos voluptatem facere voluptatum earum reprehenderit adipisci, quae saepe asperiores, sunt recusandae commodi, culpa dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur modi! Soluta asperiores ipsam officiis nihil repellat quod blanditiis pariatur quia earum. Aliquid ducimus odit rem quibusdam eum consequuntur tempore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nulla quas ipsam consequuntur odit velit unde voluptatem. Modi iure numquam nesciunt dolorem ducimus recusandae esse quam nemo? Maxime, ratione ipsam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim voluptates, qui molestiae pariatur, illum corrupti quae quidem officia, exercitationem repudiandae placeat nam quas veniam beatae voluptatem praesentium fuga deserunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt eius quo neque numquam, saepe, in nobis facere illo tempora atque, optio consequuntur voluptatibus qui minima hic inventore! Minima, libero tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet neque eum rem nulla voluptas dignissimos voluptatem facere voluptatum earum reprehenderit adipisci, quae saepe asperiores, sunt recusandae commodi, culpa dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur modi! Soluta asperiores ipsam officiis nihil repellat quod blanditiis pariatur quia earum. Aliquid ducimus odit rem quibusdam eum consequuntur tempore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nulla quas ipsam consequuntur odit velit unde voluptatem. Modi iure numquam nesciunt dolorem ducimus recusandae esse quam nemo? Maxime, ratione ipsam."
    },
    {
        "id": 1,
        "title": "Noticia 2",
        "manchete": "MANCHETE GRANDE, MUITO GRANDE MESMO SABE BEM GRANDE, MANCHETE GRANDE, MUITO GRANDE MESMO SABE BEM GRANDE",
        "text": "De acordo com as mudanças comportamentais da humanidade, e com o advento da sociedade industrializada, com as pessoas trabalhando longe de casa e sem tempo para cozinhar e fazer suas refeições, surgiu a necessidade da comida rápida – ou fast food. Em contrapartida, com as mudanças nos costumes alimentares das pessoas também surgiram novas regras, e até mesmo leis, para a regulamentação da produção e venda dos alimentos da sociedade industrializada."
    },
    {
        "id": 2,
        "title": "Noticia 3",
        "manchete": "TESTE capsLock",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum enim voluptates, qui molestiae pariatur, illum corrupti quae quidem officia, exercitationem repudiandae placeat nam quas veniam beatae voluptatem praesentium fuga deserunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt eius quo neque numquam, saepe, in nobis facere illo tempora atque, optio consequuntur voluptatibus qui minima hic inventore! Minima, libero tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet neque eum rem nulla voluptas dignissimos voluptatem facere voluptatum earum reprehenderit adipisci, quae saepe asperiores, sunt recusandae commodi, culpa dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur modi! Soluta asperiores ipsam officiis nihil repellat quod blanditiis pariatur quia earum. Aliquid ducimus odit rem quibusdam eum consequuntur tempore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nulla quas ipsam consequuntur odit velit unde voluptatem. Modi iure numquam nesciunt dolorem ducimus recusandae esse quam nemo? Maxime, ratione ipsam."
    }
]

var id;
document.querySelector('.news1').addEventListener("click", ()=> localStorage.setItem('notice', '0'));
document.querySelector('.news2').addEventListener("click", ()=> localStorage.setItem('notice', '1'));
document.querySelector('.news3').addEventListener("click", ()=> localStorage.setItem('notice', '2'));

function noticeLoad(){
    id = localStorage.getItem("notice")
    console.log(`id: ${id}`)
    document.getElementById('notice-title').innerHTML = notices[id].title;
    document.getElementById('notice-manchete').innerHTML = notices[id].manchete;
    document.getElementById('notice-text').innerHTML = notices[id].text;
    console.log("Notice load Success")   
}
