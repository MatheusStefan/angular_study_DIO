class DinamicTitle extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        
        //1 - base do componente
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = 'Matheus'
        
        //2- estilizar componente
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `
        //3- enviar para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
       
    }
}

customElements.define("dinamic-title", DinamicTitle);
