import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="table"
export default class extends Controller {
  connect() {
    console.log('hello !')
  }

  remove() {
    console.log('removed')
  }
}
