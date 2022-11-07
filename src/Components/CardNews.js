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

    }
}

customElements.define('card-news', CardNews);
    