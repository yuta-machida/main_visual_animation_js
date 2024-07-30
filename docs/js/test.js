document.addEventListener('DOMContentLoaded', () => {

    const imageContainer = document.querySelector('.main-visual');
    const imageSources = [
      './img/leaf-1.png',
      './img/leaf-2.png',
      './img/leaf-3.png',
      './img/leaf-4.png',
      './img/leaf-5.png'
    ]

    let currentBreakpoint = window.matchMedia("(min-width: 768px)").matches ? 'pc' : 'sp';
    
    const applyAnimation = () =>{
      const isPC = window.matchMedia("(min-width: 768px)").matches;
      const pathId = isPC ? 'animationPath_pc' : 'animationPath_sp';
      const path = document.querySelector(`#${pathId}`);
      const imageCount = isPC ? 15 : 10;
      let delayTime = 0;

      //既存のimg要素を削除
      imageContainer.innerHTML = '';
      
      for(let i = 1;i <= imageCount;i++){
        //img要素の生成
        const img = document.createElement('img');
        img.src = imageSources[(i - 1) % imageSources.length];
        img.alt = `葉っぱ画像${(i - 1) % imageSources.length + 1}`;
        img.className = 'leaf animationPath';
        img.id = `leaf-${(i - 1) % imageSources.length + 1}`;
        
        
        //サイズ変更

        //アニメーション付与
        img.style.offsetPath = `path('${path.getAttribute('d')}')`; //img要素にpath軌道を設定

        //アニメーションディレイ付与
        if(pathId == "animationPath_pc"){
          img.style.animationDelay = `${delayTime}s`;
        }else{
          img.style.animationDelay = `${delayTime}s`;
        }

        imageContainer.appendChild(img);        
        delayTime++;
    }
  }

  const checkBreakpoint = () =>{
    const isPC = window.matchMedia("(min-width: 768px)").matches;
    const newBreakpoint = isPC ? 'pc' : 'sp';

    if(newBreakpoint !== currentBreakpoint){
      currentBreakpoint = newBreakpoint;
      applyAnimation();
    }
  }

  window.addEventListener('resize',checkBreakpoint);

  //初回実行
  applyAnimation();
});