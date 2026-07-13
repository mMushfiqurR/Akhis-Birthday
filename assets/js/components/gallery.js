export class Gallery {

    constructor(container, images) {

        this.container = container;
        this.images = images;
        this.current = 0;

        this.render();

    }

    next() {

        this.current++;

        if (this.current >= this.images.length) {

            this.current = 0;

        }

        this.render();

    }

    previous() {

        this.current--;

        if (this.current < 0) {

            this.current = this.images.length - 1;

        }

        this.render();

    }

    render() {

        const photo = this.images[this.current];

        this.container.innerHTML = `
    <div class="gallery-card">

        <img
            src="${photo.image}"
            class="gallery-image">

        <div class="gallery-controls">

            <button
                class="gallery-btn"
                id="prevPhoto">
                ←
            </button>

            <div class="gallery-dots">

                ${this.images.map((_, index)=>`

                    <span class="gallery-dot ${index===this.current?"active":""}"></span>

                `).join("")}

            </div>

            <button
                class="gallery-btn"
                id="nextPhoto">
                →
            </button>

        </div>

        <button
    id="letterButton"
    class="button">
    Read My Letter 💌
</button>

    </div>
`;

        

        document
            .querySelector("#nextPhoto")
            .onclick = () => this.next();

        document
            .querySelector("#prevPhoto")
            .onclick = () => this.previous();

    const letterButton =
    document.querySelector("#letterButton");

if(letterButton){

    letterButton.onclick=()=>{

        document
            .getElementById("letter")
            .scrollIntoView({

                behavior:"smooth"

            });

    };

}

    }
    

}