gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray('section');

console.log(sections);

let scrollTween = gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: '.wrapper',
		pin: true,
		scrub: 0.5,
		snap: 1 / (sections.length - 1),
		start: 'top top',
		end: 3000,
	},
});

gsap.to('.logo', {
	fontSize: '2.5rem',
	top: '4rem',
	scrollTrigger: {
		trigger: '.logo',
		start: 'top top',
		end: 'center left',
		scrub: 0.5,
	},
});

gsap.to('.line', {
	height: '10rem',
	scrollTrigger: {
		trigger: '.line',
		scrub: 0.5,
		start: 'center center',
		end: 2800,
	},
});

document.querySelectorAll('.color').forEach((element) => {
	gsap.to(element.querySelector('.caption'), {
		x: 0,
		y: 0,
		scrollTrigger: {
			containerAnimation: scrollTween,
			trigger: element.querySelector('.caption'),
			start: 'top bottom',
			end: '+=1000',
			scrub: 0.5,
		},
	});

	gsap.to(element.querySelector('.name'), {
		y: 0,
		ease: 'none',
		scrollTrigger: {
			containerAnimation: scrollTween,
			trigger: element.querySelector('.name'),
			start: 'top bottom',
			end: '+=20%',
			scrub: 0.5,
		},
	});

	gsap.to(element.querySelector('.number'), {
		y: 0,
		ease: 'none',
		scrollTrigger: {
			containerAnimation: scrollTween,
			trigger: element.querySelector('.number'),
			start: 'top bottom',
			end: '+=10%',
			scrub: 0.5,
		},
	});

	gsap.to(element.querySelector('.block'), {
		x: 0,
		ease: 'none',
		scrollTrigger: {
			containerAnimation: scrollTween,
			trigger: element.querySelector('.block'),
			start: 'top bottom',
			end: '+=' + window.innerWidth,
			scrub: 0.5,
		},
	});

	gsap.to(element.querySelector('img'), {
		y: 0,
		ease: 'none',
		scrollTrigger: {
			containerAnimation: scrollTween,
			trigger: element.querySelector('img'),
			start: 'top bottom',
			end: '+=50%',
			scrub: 0.5,
		},
	});

	gsap.to(element.querySelector('.huge-text'), {
		y: 0,
		ease: 'none',
		scrollTrigger: {
			containerAnimation: scrollTween,
			trigger: element.querySelector('.huge-text'),
			start: 'top bottom',
			end: '+=100%',
			scrub: 0.5,
		},
	});
});
