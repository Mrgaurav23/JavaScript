class React{
    constructor(){
        this.library = "React library";
        this.server = "https//localhost:300";

        //Requirment
        document.querySelector("button")
        .addEventListener("click",this.handleClick.bind(this));
    }

    handleClick(){
        console.log("Button clicked");
        console.log(this.server);
    }
}

const app = new React();