// usando uma class para fazer um scroll suave na pagina
class SmoothScroll {
    constructor(links){
        this.linkElements = document.querySelectorAll(links);
        this.addClickEvent(); // iniciando o evento click
    }

    addClickEvent(){
        this.linkElements.forEach(link=>{
            link.addEventListener("click", this.handleClick);
        })
    }

    handleClick(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        window.scrollTo({
            // para centralizar a section no scroll
            top:section.offsetTop - (window.innerHeight - section.clientHeight)/2,
            behavior:"smooth"
        });
    }

}


//para usar o extends eu tenho que passar o super no contrutor para 
//passando os parametros do primeiro contrutor e os novos que irei ultilizar
class ActiovSmoothScroll extends SmoothScroll {
    constructor(links,sections){
        super(links);

        this.sectionElements = document.querySelectorAll(sections);
        //Bind: para handleScroll ter um this forçado sempre referente ao ActiovSmoothScroll
        this.handleScroll = this.handleScroll.bind(this); 
        this. handleScroll();
        this.activeNavScroll();
    }

    handleScroll(){
        this.sectionElements.forEach((section, i) =>{
            if(window.pageYOffset > section.offsetTop - window.innerHeight * 0.5){
                this.linkElements[i].classList.add("active");
            }else{
                this.linkElements[i].classList.remove("active");
            }

        })
    }

    activeNavScroll(){
        window.addEventListener("scroll",this.handleScroll);
    }

}



// para executar a class é preciso usar o 'new'
const scroll = new ActiovSmoothScroll("a[href^='#']", "section");
