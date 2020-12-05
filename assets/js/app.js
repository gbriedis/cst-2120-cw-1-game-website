const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: "85%", ease: Power2.easeInOut});
tl.fromTo(header, 0.5, {opacity: 0, x: 50}, {opacity: 1, x:0, ease: Power2.easeInOut}, "-=0.5");
tl.fromTo(subText, 0.5, {opacity: 0, x: -70}, {opacity: 1, x:0, ease: Power2.easeInOut}, "-=0.5");
tl.fromTo(imgText, 0.5, {opacity: 0, y: -30}, {opacity: 1, y:0, ease: Power2.easeInOut}, "-=0.5");