window.addEventListener('DOMContentLoaded', () => {
    const channel = 'pasta-in-nyc';

    fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        renderTitle(data);
        renderBlocks(data);
      });
    
  });

  const renderTitle = (data) => {
    let title = data['title'];
    document.getElementById('channel-title').innerText=title;
  };

  const renderBlocks=(data)=> {
    let blocks = data ['contents'];
    blocks.forEach((block) => {
      let blockClass = block ['class'];
      if (blockClass == 'Image') {
        renderImage (block); }                        
    });
  };

  const renderImage = (block) => {
    let imageUrl = block ['image'] ['display'] ['url'];
    let ImageblockTemplate = document.getElementById ('image-block');
    let clone = ImageblockTemplate.content.cloneNode(true);

    clone.querySelector('img').src = imageUrl;

    document.getElementById('contents').appendChild(clone);

  };  
