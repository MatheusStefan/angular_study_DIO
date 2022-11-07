class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const link = document.createElement("a");
        link.textContent = this.getAttribute("title");
        link.href = this.getAttribute("link-url");

        const paragraph = document.createElement("p");
        paragraph.textContent = this.getAttribute("content");

        cardLeft.appendChild(author);
        cardLeft.appendChild(link);
        cardLeft.appendChild(paragraph);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        
        const image = document.createElement("img");
        image.src = this.getAttribute("photo") || "/assets/img/default.png";
        image.alt = "Foto da notícia";
        cardRight.appendChild(image);

        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 100%;
                display: flex;
                -webkit-box-shadow: 38px 23px 13px -10px rgba(0,0,0,0.75);
                -moz-box-shadow: 38px 23px 13px -10px rgba(0,0,0,0.75);
                box-shadow: 38px 23px 13px -10px rgba(0,0,0,0.75);
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content:center;
                padding: 0px 10px;
            }
            
            .card__left > span {
                font-style: italic;
                font-weight: bold;
            }
            
            .card__left > h1 {
                margin-top: 15px;
                margin-bottom: 2px;
                font-size: 2.1rem;
            }
            
            .card__left > p {
                color: rgb(99, 88, 88);
            }

            .card__right img {
                max-width: 100%;
                max-height: 100%;
                width: 300px;
                height: 177px;
            }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);
    