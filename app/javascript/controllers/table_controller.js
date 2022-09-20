import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="table"
export default class extends Controller {
  static targets = ['table']

  connect() {
    this.baseUrl = 'http://localhost:3000/'
    console.log('hello !')
  }

  remove(e) {
    let element = e.target.parentNode
    console.log(element.id)
    this._sendDel(element)
    console.log('removed')
  }

  add() {
    console.log(window.location.href)
    this._sendPost({note: window.location.href})
  }

  _createItem(item) {
    return Object.assign(
      document.createElement('li'),
      {
        id: item.id,
        innerHTML: `${item.id} - ${item.note} <span data-action="click->table#remove"> x </span>`
      }
    )
  }

  _addToList(item) {
    let table = this.tableTarget
    table.appendChild(item)
  }

  _sendPost(data) {
    fetch(`${this.baseUrl}items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success', data)
        let item = this._createItem(data)
        this._addToList(item)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  _sendDel(target) {
    console.log(this.baseUrl)
    fetch(`${this.baseUrl}items/${target.id}`,{
      method: 'DELETE'
    })
    .then(response => target.remove())
    .catch(error => console.log(error))
  }
}
