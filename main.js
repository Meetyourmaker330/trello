
const data = [
  {id:'new', title: 'New', todos:[]},
  {id:'in-progress', title: 'In-progress', todos:[]},
  {id:'completed', title: 'Completed', todos:[]},
  {id:'done', title: 'Done', todos:[]}
]

// App
class App {
    constructor(){
      this.data = data
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
        this.addTask()
    }
    addTask(){
       document.getElementById('create-task').addEventListener('click',()=>{
        let columnStatus = document.getElementById('status-task').value
        
        
        console.log(columnStatus)

        this.data.forEach(item =>{
          if(item.id === columnStatus){
            item.todos.push(new Card())
            document.getElementById(item.id).insertAdjacentHTML('beforeend', new Card().template())
            document.querySelectorAll('.badge').innerHTML = 'hi'
          }
        })

        

       })
      
    }
    deleteCard(){
      
    }
}
// columns
class Column{
    constructor(){
       this.columns = data
    }
    drawColumn(){
      let board = ``
      this.columns.forEach(item =>{
        board += `<div class="col-3 border border-3" id="${item.id}">
        <h4 class="d-flex justify-content-between p-2">${item.title}<span class="badge bg-dark">${item.todos.length}</span></h4>

        </div>`
      })
      document.getElementById('board').innerHTML = board
    }
}
// cards
class Card{
    constructor(){
       this.title = document.getElementById('title-task').value
       this.description = document.getElementById('description-task').value
       this.user = document.getElementById('user-task').value
       this.date = document.getElementById('date-task').value
    }
    template(){
      return `
      <div class="card text-bg-warning mb-3" style="max-width: 18rem;">
        <div class="card-title d-flex justify-content-between align-items-center p-2">
        <h5>${this.title}</h5>
        <button type="button" class="btn btn-dark delete-card">x</button>
        </div>
        <div class="card-body">
            <h5 class="card-title">${this.user}</h5>
            <h5 class="card-title">${this.date}</h5>
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
        document.getElementById('create-task').addEventListener('click',()=>{
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
            <label for="title-task" class="col-form-label">Title</label>
            <input type="text" class="form-control" id="title-task">
          </div>


         <div class="d-flex justify-content-between align-items-center">

            <div class="mb-3 col-5 status">
                <label class="py-2" for="status-task">Status</label>
                  <select class="form-select" id="status-task" aria-label="Default select example">
                    <option value="new">New</option>
                    <option value="in-progress">In-progress</option>
                    <option value="completed">Completed</option>
                    <option value="done">Done</option>
                  </select>
                </select>
            </div>

            <div class="mb-3 col-5 date">
                <label for="date-task" class="col-form-label">Date</label>
                <input type="text" class="form-control" id="date-task">
            </div>

        </div>

        <div class="form-floating">
        <label for="user-task">Users</label>
        <select class="form-select" id="user-task" aria-label="Floating label select example">
          <option selected></option>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
        </select>
      </div>
      <div class="mb-3">
      <label for="description-task" class="col-form-label">Description</label>
      <textarea class="form-control" id="description-task"></textarea>
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