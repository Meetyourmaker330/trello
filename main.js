
// const data = [
//     {id:'todo', title: 'Todo', todos:[]},
//     {id:'in-progress', title: 'In-progress', todos:[]},
//     {id:'done', title: 'Done', todos:[]}
// ]

// App
class App {
    constructor(){
      this.board = document.getElementById('board')
    }
    init(){
        this.render()
    }
    render(){
        new Column().drawColumn()
        const modal = new Modal()
        modal.render()
        modal.open()
        modal.close()
        const card = new Card()
        card.render()
    }
}
// columns
class Column{
    constructor(){
       this.data = [
        {id:'new', title: 'New', todos:[]},
        {id:'in-progress', title: 'In-progress', todos:[]},
        {id:'completed', title: 'Completed', todos:[]},
        {id:'done', title: 'Done', todos:[]}
    ]
    }
    drawColumn(){
      let board = ``
      this.data.forEach(item =>{
        board += `<div class="col-3 border border-3" id="${item.id}">
        <h4 class="d-flex justify-content-between p-2">${item.title}<span class="badge bg-dark">${item.todos.length}</span></h4>

        </div>`
      })
      document.getElementById('board').innerHTML = board
    }
}
// cards
class Card{
    constructor(title,description){
       this.title = title
       this.description = description
    }

    render(){
      document.getElementById('create-task').addEventListener('click',()=>{
        console.log('hello')
      })
    }

    template(){
      return `
      <div class="card text-bg-warning mb-3" style="max-width: 18rem;">
        <div class="card-title">${this.title}</div>
        <div class="card-body">
            <h5 class="card-title"></h5>
            <h5 class="card-title"></h5>
            <h5 class="card-title"></h5>
            <p class="card-text">${this.description}</p>
        </div>
    </div>
      `
    }
}
// Modal
class Modal{
    constructor(){
        this.modal = document.createElement('div')
    }
    
    render(){
        this.modal.classList.add('modal')
        document.body.append(this.modal)
        this.modal.innerHTML = this.template()
    }
    open(){
        document.getElementById('new-task').addEventListener('click',()=>{
            this.modal.style.display = 'block'
        })
    }
    close(){
        document.getElementById('close').addEventListener('click',()=>{
            this.modal.style.display = 'none'
        })
    }
    template(){
        return `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Title</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>


         <div class="d-flex justify-content-between">

            <div class="mb-3 col-5 status">
                <label for="floatingSelect">Status</label>
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected></option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                </select>
            </div>

            <div class="mb-3 col-5 date">
                <label for="recipient-name" class="col-form-label">Date</label>
                <input type="text" class="form-control" id="recipient-name">
            </div>

        </div>

        <div class="form-floating">
        <label for="floatingSelect">Users</label>
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
          <option selected></option>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
        </select>
      </div>
      <div class="mb-3">
      <label for="message-text" class="col-form-label">Description</label>
      <textarea class="form-control" id="message-text"></textarea>
    </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="create-task">Create</button>
        <button type="button" class="btn btn-primary" id="close">Close</button>
      </div>
    </div>
  </div>
        `
    }
}
// init App
new App().init()