class EmployeeCard {
    #parent = null;
    #init = null;
    #el = null;
    constructor(parentSelector,firstName, lastName,occupation){
        //TODO : Validate input data и да се провери html тагове да се махнат carracter validation да се направи за да не се набута някакъв html
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;

        this.#el = document.createElement('div');

        this.#parent = document.querySelector(parentSelector)

        this.#parent.appendChild(this.#el)

        this.#init()

        this.render()
    }
    #init(){
        this.el.addEventListener('click', (e) =>{
            // e.currentTarget.style.border = '2px solid green';
            e.currentTarget.style.transform = 'scale(1.2)';
        })
    }

    getContent(){
        return `
        <div class="card">
            <img src="img_avatar.png" alt="Avatar" style="width:100%"></img>
                <div class="container">
                    <h4><b>${this.firstName} ${this.lastName}</b></h4>
                    <p>${this.occupation}</p>
                </div>            
        </div>`
    }


    render(){
        // Warning XSS attack 
        this.#el.innerHTML = this.getContent()
    }
}