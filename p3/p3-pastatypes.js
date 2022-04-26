window.addEventListener('DOMContentLoaded', () => {
  const channel = 'pasta-in-nyc';

  fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
    .then(response => response.json())
    .then(data => {
    renderBlocks(data);
    });
    
  });

  const renderBlocks=(data)=> {
  let blocks = data ['contents'];
  blocks.forEach((block) => {
    let blockClass = block ['class'];
    if (blockClass == 'Image') {
    renderImage (block);
   }                      
  });
  };

  const renderImage = (block) => {
    // console.log(block['title']);
  
    let imageUrl = block['image']['display']['url'];
    let imageBlockTemplate = document.getElementById('image-block');
    let clone = imageBlockTemplate.content.cloneNode(true);
  
    clone.querySelector('img').src = imageUrl;
  
    clone.querySelector('li').classList.add(block['title'].trim().split(" ")[0]);
    clone.querySelector('li').classList.add("All");
    
  
    document.getElementById('contents').appendChild(clone);
  };
  
  // document.querySelectorAll('done');
  // array.forEach(element => {
  //   // add event listener or if statement onclick 
  // });
  
  $(function(){
  
    $("select").on("change",function(){
   
     $('.block').hide();
     $("."+this.value).show();
   
    });
   
   });
  

