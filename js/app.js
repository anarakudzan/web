document.addEventListener('mousemove', e =>{
   Object.assign(document.documentElement,{
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.007}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .02}deg;
      `
   })
})