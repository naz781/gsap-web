import { allCocktails } from '../../constants/index';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {
    const scopeRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalCocktails = allCocktails.length;

    const goToSlide = (index) => {
        setCurrentIndex((index + totalCocktails) % totalCocktails);
    };

    const getCocktailAt = (offset) => {
        return allCocktails[(currentIndex + offset + totalCocktails) % totalCocktails];
    };

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.fromTo(
                '.cocktail img',
                { xPercent: -100, opacity: 0 },
                { xPercent: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
            )
                .fromTo(
                    '#title',
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4 },
                    '-=0.3'
                )
                .fromTo(
                    '.details h2',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4 },
                    '-=0.2'
                )
                .fromTo(
                    '.details p',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4 },
                    '-=0.2'
                );
        },
        { dependencies: [currentIndex], scope: scopeRef }
    );

    return (
        <section id="menu" aria-labelledby="menu-heading" ref={scopeRef}>
            <img src="/images/slider-left-leaf.png" alt="left leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button
                            key={cocktail.id}
                            onClick={() => goToSlide(index)}
                            className={`${isActive
                                ? 'text-white border-white'
                                : 'text-white/50 border-white/50'
                                }`}
                        >
                            {cocktail.name}
                        </button>
                    );
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="" aria-hidden />
                    </button>

                    <button onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="" aria-hidden />
                    </button>
                </div>

                <div className="cocktail">
                    <img src={currentCocktail.image} alt={currentCocktail.name} />
                </div>

                <div className="recipe">
                    <div className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>

                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
